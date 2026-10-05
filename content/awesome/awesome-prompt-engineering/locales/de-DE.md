<h2 align="center">Awesome Prompt Engineering 🧙‍♂️</h2>

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/main/_source/prompt.png">
</p>

<p align="center">
  Eine handkuratierte Sammlung von Ressourcen für Prompt Engineering und Context Engineering - mit Papieren, Tools, Modellen, APIs, Benchmarks, Kursen und Communities für die Arbeit mit großen Sprachmodellen.
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

## Starten Sie hier

Neu bei prompt engineering? Folgen Sie diesem Weg:

<p align="center">
  <img width="1000" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/refs/heads/main/_source/main.jpg">
</p>

1. **Lernen Sie die Grundlagen** → [ChatGPT Prompt Engineering für Entwickler](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) (frei, ~90 min)
2. **Lesen Sie den Leitfaden** → [Prompt Engineering Guide von DAIR. AI](https://www.promptingguide.ai/) (Open-Source, umfassend)
3. **Studienanbieter Docs** → [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) · [Anthropischer Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
4. **Verstehen Sie, wohin das Feld geht** → [Anthropic: Effektives Context Engineering für KI-Agenten](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
5. **Lesen Sie die Forschung** → [Der Prompt Report](https://arxiv.org/abs/2406.06608) — Taxonomie von 58+ Aufforderungstechniken aus 1.500+ Papieren

---

## Inhaltsverzeichnis

- [Papiere](#papers)
  - [Wichtige Erhebungen](#major-surveys)
  - [Prompt Optimierung und automatisches Prompting](#prompt-optimization-and-automatic-prompting)
  - [Sofortige Kompression](#prompt-compression)
  - [Argumentationsfortschritte](#reasoning-advances)
  - [In-Context Learning](#in-context-learning)
  - [Agentic Promping und Multi-Agent-Systeme](#agentic-prompting-and-multi-agent-systems)
  - [Multimodale Erweiterung](#multimodal-prompting)
  - [Strukturierte Output- und Formatsteuerung](#structured-output-and-format-control)
  - [Sofortige Injektion und Sicherheit](#prompt-injection-and-security)
  - [Anwendungen von Prompt Engineering](#applications-of-prompt-engineering)
  - [Text-to-Image Generation](#text-to-image-generation)
  - [Text-to-Music/Audio Generation](#text-to-musicaudio-generation)
  - [Grundlagenpapiere (Pre-2024)](#foundational-papers-pre-2024)
- [Tools und Code](#tools-and-code)
  - [Prompt Management und Testing](#prompt-management-and-testing)
  - [LLM Evaluation Tools](#llm-evaluation-tools)
  - [Agent Frameworks](#agent-frameworks)
  - [Sofortige Optimierungstools](#prompt-optimization-tools)
  - [Red Teaming und Prompt Security](#red-teaming-and-prompt-security)
  - [MCP (Model Context Protocol)](#mcp-model-context-protocol)
  - [Vibe Coding und AI Coding Assistants](#vibe-coding-and-ai-coding-assistants)
    - [CLI-basierte Coding Agents](#cli-based-coding-agents)
    - [AI Code Editoren / IDEs](#ai-code-editors--ides)
    - [IDE Extensions / Plugins](#ide-extensions--plugins)
    - [AI Coding Plattformen / Cloud Agents](#ai-coding-platforms--cloud-agents)
    - [Open-Source Coding Agent Frameworks](#open-source-coding-agent-frameworks)
  - [Sonstige bemerkenswerte Repositorys](#other-notable-repositories)
- [APIs](#apis)
- [Datensätze und Benchmarks](#datasets-and-benchmarks)
- [Modelle](#models)
- [AI Content Detektoren](#ai-content-detectors)
- [Bücher](#books)
- [Kurse](#courses)
- [Tutorials und Guides](#tutorials-and-guides)
- [Videos](#videos)
- [Gemeinschaften](#communities)
- [Autonome Forschung & Selbstverbessernde Agenten](#autonomous-research--self-improving-agents)
- [Wie man einen Beitrag leistet](#how-to-contribute)

---

## Papiere
📄

### Wichtige Erhebungen

- [Der Prompt-Bericht: Eine systematische Erhebung von Prompting-Techniken](https://arxiv.org/abs/2406.06608) [2024] - Die umfassendste Umfrage: Taxonomie von 58 Text- und 40 multimodalen Aufforderungstechniken aus 1.500+ Papieren. Co-Autor mit OpenAI, Microsoft, Google, Stanford.
- [Ein systematischer Überblick über Prompt Engineering in großen Sprachmodellen: Techniken und Anwendungen](https://arxiv.org/abs/2402.07927) [2024] - 44 Techniken in Anwendungsgebieten mit Leistungszusammenfassungen pro Aufgabe.
- [Eine Umfrage zu Prompt Engineering Methoden in LLMs für verschiedene NLP-Aufgaben](https://arxiv.org/abs/2407.12994) [2024] - 39 Aufforderungsmethoden für 29 NLP-Aufgaben.
- [Eine Umfrage zum automatischen Prompt Engineering: Eine Optimierungsperspektive](https://arxiv.org/abs/2502.11560) [2025] - Formalisiert Auto-PE-Methoden als diskrete / kontinuierliche / hybride Optimierungsprobleme.
- [Effiziente Eingabemethoden für große Sprachmodelle: Eine Umfrage](https://arxiv.org/abs/2404.01077) [2024] - Umfrage der effizienzorientierten Aufforderung (Komprimierung, Optimierung, APE) zur Reduzierung von Berechnung und Latenz.
- [Navigieren Sie durch das enigmatische Labyrinth: Ein Überblick über die Denkkette](https://arxiv.org/abs/2309.15402) [2023, ACL 2024] — Systematische CoT-Erhebung.
- [Demystifizierende Ketten, Bäume und Denkgraphen](https://arxiv.org/abs/2401.14295) [2024] Unified Framework for Multi-Prompt Reasoning Topologies.
- [Zielorientiertes Prompt Engineering für große Sprachmodelle: Eine Umfrage](https://arxiv.org/abs/2401.14043) [2024] - Konzentriert sich auf Aufforderungen, die um explizite Aufgabenziele herum entworfen wurden.
- [Towards Reasoning Era: Eine Umfrage über Long Chain-of-Thought für Reasoning LLMs](https://arxiv.org/abs/2503.09567) [2025] - Unterscheidet Long CoT von Short CoT in o1/R1-Ära-Modellen.

### Prompt Optimierung und automatisches Prompting

- [OPRO: Große Sprachmodelle als Optimierer](https://arxiv.org/abs/2309.03409) [2023, NeurIPS 2024] - Verwendet LLMs als Optimierer über Meta-Prompts; optimierte Eingabeaufforderungen übertreffen die von Menschen entworfenen um bis zu 50% bei BBH.
- [DSPy: Zusammenstellung deklarative Sprachmodell Anrufe in sich selbst verbessernde Pipelines](https://arxiv.org/abs/2310.03714) [2023, ICLR 2024] — Framework für die Programmierung (nicht aufforderungs) LLMs mit automatischer prompter Optimierung.
- [MIPRO: Optimierung von Anleitungen und Demonstrationen für mehrstufige Sprachmodellprogramme](https://arxiv.org/abs/2406.11695) [2024, EMNLP 2024] - Bayessche Optimierung für mehrstufige LM-Programme; bis zu 13% Genauigkeitssteigerungen.
- [TextGrad: Automatische "Differenzierung" über Text](https://arxiv.org/abs/2406.07496) [2024] - Behandelt zusammengesetzte KI-Systeme als Berechnungsgraphen mit textuellem Feedback als Gradienten. Veröffentlicht in Nature.
- [EvoPrompt](https://arxiv.org/abs/2309.08532) [2023, ACL 2024] - Evolutionärer Algorithmusansatz zur automatischen Optimierung diskreter Eingabeaufforderungen.
- [Meta Promping für KI-Systeme](https://arxiv.org/abs/2311.11482) [2023, ICLR 2024 Workshop] - Beispiel-agnostische Strukturvorlagen, die mit Hilfe der Kategorietheorie formalisiert wurden.
- [Prompt Engineering a Prompt Engineer (PE2)](https://arxiv.org/abs/2311.05661) [2024, ACL Findings] - Verwendet LLMs, um sich selbst zu metaaufzufordern, indem sie Eingabeaufforderungen mit Schritt-für-Schritt-Vorlagen verfeinern, um die Argumentation signifikant zu verbessern.
- [Große Sprachmodelle sind Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910) [2022] - Automatische prompte Erzeugung über APE.
- [Hard Prompts Made Easy: Gradientenbasierte diskrete Optimierung für Prompt Tuning](https://arxiv.org/abs/2302.03668) [2023]
- [SPO: Selbstüberwachte Sofortoptimierung](https://arxiv.org/abs/2502.06855) [2025] - Wettbewerbsleistung bei 1-6 % der Kosten früherer Methoden.

### Sofortige Kompression

- [LLMLingua-2: Datendestillation für effiziente und treue aufgabenunabhängige Sofortkomprimierung](https://arxiv.org/abs/2403.12968) [2024, ACL 2024] - 3x-6x schneller als LLMLingua mit GPT-4-Datendestillation.
- [LongLLMLingua](https://arxiv.org/abs/2310.06839) [2023, ACL 2024] - Frage-bewusste Kompression für lange Kontexte; 21,4% Leistungssteigerung mit 4x weniger Token.
- [Prompte Kompression für große Sprachmodelle: Eine Umfrage](https://arxiv.org/abs/2410.12388) [2024] - Umfassende Übersicht über harte und weiche prompte Kompressionsmethoden.

### Argumentationsfortschritte

- [Skalierung des LLM Test-Time Compute optimal](https://arxiv.org/abs/2408.03314) [2024] - Zeigt eine optimale Testzeit-Rechenzuweisung, die 14x größere Modelle übertreffen kann.
- [DeepSeek-R1: Anreize zur Argumentation in LLMs durch Reinforcement Learning](https://arxiv.org/abs/2501.12948) [2025] - Reines RL-trainiertes Argumentationsmodell, das mit o1 übereinstimmt; Open-Source mit destillierten Varianten.
- [s1: Einfache Testzeit-Skalierung](https://arxiv.org/abs/2501.19393) [2025] - SFT auf nur 1.000 Beispielen schafft wettbewerbsfähiges Argumentationsmodell über "Budget-Forcing".
- [Reasoning Language Models: Ein Blueprint](https://arxiv.org/abs/2501.11223) [2025] - Systematischer Rahmen, der das Denken von LM-Ansätzen organisiert.
- [Demystifizierung von Long Chain-of-Thought Reasoning in LLMs](https://arxiv.org/abs/2502.03373) [2025] - Analysiert langes CoT-Verhalten in modernen Argumentationsmodellen.
- [Graph of Thoughts: Lösen aufwendiger Probleme mit LLMs](https://arxiv.org/abs/2308.09687) [2023, AAAI 2024] - Modelliert Gedanken als willkürliche Graphen; 62% Qualitätsverbesserung gegenüber ToT beim Sortieren.
- [Baum der Gedanken: Absichtliches Problem mit LLMs lösen](https://arxiv.org/abs/2305.10601) [2023, NeurIPS 2023] — Baumsuche über Argumentationspfade.
- [Alles von Gedanken](https://arxiv.org/abs/2311.04254) [2023] - Integriert CoT, ToT und externe Solver über MCTS.
- [Skelett-von-Gedanken](https://arxiv.org/abs/2307.15337) [2023] - Parallele Dekodierung über Antwort-Skelett-Generierung für bis zu 2,69x Beschleunigung.
- [Gedankenkette, die Argumentation in großen Sprachmodellen eliminiert](https://arxiv.org/abs/2201.11903) [2022] - Das grundlegende CoT-Papier.
- [Selbstkonsistenz verbessert die Denkkette](https://arxiv.org/abs/2203.11171) [2022] - Aggregieren mehrerer CoT-Ausgänge für Zuverlässigkeit.
- [Große Sprachmodelle sind Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) [2022] - "Lasst uns Schritt für Schritt denken" als Zero-Shot-Auslöser.
- [ReAct: Synergizing Reasoning und Handeln in Sprachmodellen](https://arxiv.org/abs/2210.03629) [2022] - Interleaving Argumentation und Werkzeuggebrauch.

### In-Context Learning

- [Viele Schuss im Kontext Lernen](https://arxiv.org/abs/2404.11018) [2024, NeurIPS 2024 Spotlight] — Erhebliche Gewinne bei der Skalierung von ICL auf Hunderte/Tausende von Beispielen; führt verstärkte und unbeaufsichtigte ICL ein.
- [Many-Shot In-Context Learning in multimodalen Grundlagenmodellen](https://arxiv.org/abs/2405.09798) [2024] - Skaliert multimodale ICL auf ~ 2.000 Beispiele in 14 Datensätzen.
- [Die Rolle von Demonstrationen überdenken: Was macht In-Kontext-Lernen?](https://arxiv.org/abs/2202.12837) [2022]
- [Fantastisch bestellte Eingabeaufforderungen und wo sie zu finden sind](https://arxiv.org/abs/2104.08786) [2021] - Überwindung von few-shot prompt Ordnung Empfindlichkeit.
- [Kalibrieren vor Gebrauch: Verbesserung der Leistung von Sprachmodellen mit wenigen Aufnahmen](https://arxiv.org/abs/2102.09690) [2021]

### Agentic Promping und Multi-Agent-Systeme

- [Agentische große Sprachmodelle: Eine Umfrage](https://arxiv.org/abs/2503.23037) [2025] - Umfassende Umfrage Organisation Agentic LLMs durch Denken, Handeln und Interaktion Fähigkeiten.
- [Großes Sprachmodell basierte Multi-Agenten: Eine Übersicht über Fortschritte und Herausforderungen](https://arxiv.org/abs/2402.01680) [2024] - Umfasst Profiling, Kommunikation und Wachstumsmechanismen.
- [Multi-Agent-Zusammenarbeitsmechanismen: Eine Umfrage zu LLMs](https://arxiv.org/abs/2501.06322) [2025] - Reviews Debatte und Kooperationsstrategien in LLM-basierten Multiagentensystemen.
- [AutoGen: Ermöglichung von Next-Gen-LM-Anwendungen über Multi-Agent-Konversation](https://arxiv.org/abs/2308.08155) [2023] - Microsofts grundlegendes Multiagenten-Rahmenpapier.
- [ToolLLM: Erleichterung großer Sprachmodelle zur Beherrschung von über 16000 Real-World APIs](https://arxiv.org/abs/2307.16789) [2023, ICLR 2024] - Züge LLMs, um massive reale API-Sammlungen zu verwenden.
- [SWE-Bank: Können Sprachmodelle GitHub-Probleme in der realen Welt lösen?](https://arxiv.org/abs/2310.06770) [2023, ICLR 2024] — Der Benchmark Driver Agentic Coding Progress.
- [AgentBench: Bewertung von LLMs als Agenten](https://arxiv.org/abs/2308.03688) [2023, ICLR 2024] - Benchmark in 8 Umgebungen.
- [PAL: Programmgestützte Sprachmodelle](https://arxiv.org/abs/2211.10435) [2023] - Offloading Computation auf Code-Interpreter.

### Multimodale Erweiterung

- [Visual Prompting in multimodalen großen Sprachmodellen: Eine Umfrage](https://arxiv.org/abs/2409.15310) [2024] - Erste umfassende Umfrage über visuelle Aufforderung Methoden in MLLMs.
- [Set-of-Mark Prompting löst außergewöhnliche visuelle Erdung in GPT-4V aus](https://arxiv.org/abs/2310.11441) [2023] - Visuelle Marker verbessern die visuelle Erdung dramatisch.
- [Eine umfassende Umfrage und ein Leitfaden für multimodale große Sprachmodelle in Vision-Sprachaufgaben](https://arxiv.org/abs/2411.06284) [2024] — Umfasst Text, Bild, Video, Audio MLLMs.
- [Multimodales Chain-of-Thought Reasoning in Sprachmodellen](https://arxiv.org/abs/2302.00923) [2023]
- [Vom Prompt Engineering zum Prompt Craft](https://arxiv.org/abs/2411.13422) [2024] - Design-Forschung Ansicht von prompt "Handwerk" für Diffusionsmodelle.

### Strukturierte Output- und Formatsteuerung

- [Lass mich frei sprechen? Eine Studie über die Auswirkungen von Formatbeschränkungen auf die Leistung von LLMs](https://arxiv.org/abs/2408.02442) [2024] - Untersucht, wie sich die Einschränkung von Ausgaben auf strukturierte Formate auf die Argumentationsleistung auswirkt.
- [Batch Prompting: Effiziente Inferenz mit LLM APIs](https://arxiv.org/abs/2301.08721) [2023]
- [Strukturiertes Prompting: Skalierung von In-Context Learning auf 1.000 Beispiele](https://arxiv.org/abs/2212.06713) [2022]

### Sofortige Injektion und Sicherheit

- [Formalisierung und Benchmarking Prompt Injection Angriffe und Verteidigung](https://arxiv.org/abs/2310.12815) [2023, USENIX Security 2024] - Formales Framework mit systematischer Auswertung von 5 Angriffen und 10 Verteidigungen in 10 LLMs.
- [Die Instruction Hierarchie: Training LLMs, um privilegierte Anweisungen zu priorisieren](https://arxiv.org/abs/2404.13208) [2024] - OpenAI's Priority-Level-Training für Injektionsabwehr.
- [AgentDojo: Eine dynamische Umgebung, um schnelle Injektionsangriffe und Abwehrkräfte zu bewerten](https://arxiv.org/abs/2406.13352) [2024] — Benchmark für realistische Agenten.
- [InjecAgent: Benchmarking Indirekte Soforteinspritzungen in Tool-integrierte LLM-Agenten](https://arxiv.org/abs/2403.02691) [2024]
- [SecAlign: Verteidigung gegen schnelle Injektion mit Präferenzoptimierung](https://arxiv.org/abs/2410.05451) [2024] - DPO-basierte Verteidigung.
- [WASP: Benchmarking Web Agent Sicherheit gegen sofortige Injektion](https://arxiv.org/abs/2504.18575) [2025] — Sicherheits-Benchmark für Web-/Computer-Use-Agents.
- [Viele Schuss Jailbreaking](https://www.anthropic.com/research/many-shot-jailbreaking) [2024] - Skalierung schädlicher Beispiele in langen Kontextfenstern ermöglicht Jailbreaking (Anthropic Technical Report).
- [Konstitutionelle KI: Harmlosigkeit durch KI-Feedback](https://arxiv.org/abs/2212.08073) [2022]
- [Ignorieren Sie die vorherige Aufforderung: Angriffstechniken für Sprachmodelle](https://arxiv.org/abs/2211.09527) [2022]
- [Künstliche Intelligenz und Cybersicherheit: Dokumentierte Risiken, Enterprise Guardrails und neue Bedrohungen in den Jahren 2024-2025](https://www.ijfmr.com/research-paper.php?id=62200) [2025] - Erhebung von realen prompt-Injektion Vorfälle mit praktischen Governance prompt Muster.

### Anwendungen von Prompt Engineering

- [Umformulieren und antworten: Lassen Sie große Sprachmodelle bessere Fragen für sich stellen](https://arxiv.org/abs/2311.04205) [2023]
- [Legal Prompt Engineering für mehrsprachige Legal Judgement Prediction](https://arxiv.org/abs/2212.02199) [2023]
- [Gespräch mit Copilot: Erkundung von Prompt Engineering zur Lösung von CS1-Problemen](https://arxiv.org/abs/2210.15157) [2022]
- [Commonsense-Aware Prompt für Kontrollierbare Empathische Dialog-Generation](https://arxiv.org/abs/2302.01441) [2023]
- [PLACES: Prompting Sprachmodelle für die soziale Konversationssynthese](https://arxiv.org/abs/2302.03269) [2023]
- [Medizinische Bildsegmentierung mit Transformer-Encodern und Prompt-Based Learning: Eine systematische Überprüfung](https://ieeexplore.ieee.org/document/11313186/) [2025]
- [TableRAG: A Retrieval Augmented Generation Framework for Heterogeneous Document Reasoning](https://arxiv.org/abs/2506.10380) [2025] — SQL-basiertes Interface zur Erhaltung der Tabellenstruktur für Multi-Hop-Abfragen.

### Text-to-Image Generation

- [Eine Taxonomie von Prompt-Modifikatoren für die Text-To-Image-Generierung](https://arxiv.org/abs/2204.13988) [2022]
- [Design-Richtlinien für Prompt Engineering Text-to-Image Generative Modelle](https://arxiv.org/abs/2109.06977) [2021]
- [Hochauflösende Bildsynthese mit latenten Diffusionsmodellen](https://arxiv.org/abs/2112.10752) [2021]
- [DALL·E: Bilder aus Text erstellen](https://arxiv.org/abs/2102.12092) [2021]
- [Untersuchung von Prompt Engineering in Diffusionsmodellen](https://arxiv.org/abs/2211.15462) [2022]

### Text-to-Music/Audio Generation

- [MusicLM: Musik aus Text erzeugen](https://arxiv.org/abs/2301.11325) [2023]
- [ERNIE-Music: Text-to-Waveform Music Generation mit Diffusionsmodellen](https://arxiv.org/pdf/2302.04456) [2023]
- [AudioLM: Ein Sprachmodellierungsansatz zur Audiogenerierung](https://arxiv.org/pdf/2209.03143) [2023]
- [Make-An-Audio: Text-To-Audio-Generation mit Prompt-Enhanced Diffusion Modellen](https://arxiv.org/pdf/2301.12661.pdf) [2023]

### Grundlagenpapiere (Pre-2024)

Diese Papiere etablierten die Kernkonzepte, auf denen das moderne prompte Engineering aufbaut:

- [Sprachmodelle sind nur wenige Lerner (GPT-3)](https://arxiv.org/abs/2005.14165) [2020] - Demonstrierte Wenige-Schuss-Anleitung in großem Maßstab.
- [Prefix-Tuning: Kontinuierliche Eingabeaufforderungen für die Generation optimieren](https://arxiv.org/abs/2101.00190) [2021]
- [Die Macht der Skalierung für Parameter-Efficient Prompt Tuning](https://arxiv.org/abs/2104.08691) [2021]
- [Sofortige Programmierung für große Sprachmodelle: Jenseits des Wenigen-Schuss-Paradigmas](https://arxiv.org/abs/2102.07350) [2021]
- [Zeigen Sie Ihre Arbeit: Scratchpads für die Zwischenberechnung mit Sprachmodellen](https://arxiv.org/abs/2112.00114) [2021]
- [Generiertes Wissen für Commonsense Reasoning](https://arxiv.org/abs/2110.08387) [2021]
- [Wie man vortrainierte Sprachmodelle besser macht](https://aclanthology.org/2021.acl-long.295) [2021]
- [AutoPrompt: Wissen aus Sprachmodellen mit automatisch generierten Eingabeaufforderungen eliminieren](https://arxiv.org/abs/2010.15980) [2020]
- [Wie können wir wissen, was Sprachmodelle wissen?](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00324/96460/) [2020]
- [Ein Prompt Pattern Catalog zur Verbesserung von Prompt Engineering mit ChatGPT](https://arxiv.org/abs/2302.11382) [2023]
- [Synthetisches Prompting: Generieren von Chain-of-Thought Demonstrationen für LLMs](https://arxiv.org/abs/2302.00618) [2023]
- [Progressive Prompts: Continual Learning für Sprachmodelle](https://arxiv.org/abs/2301.12314) [2023]
- [Sukzessives Prompting zum Beenden komplexer Fragen](https://arxiv.org/abs/2212.04092) [2022]
- [Decomposed Prompting: Ein modularer Ansatz zur Lösung komplexer Aufgaben](https://arxiv.org/abs/2210.02406) [2022]
- [PromptChainer: Chaining Large Language Model Prompts durch visuelle Programmierung](https://arxiv.org/abs/2203.06566) [2022]
- [Fragen Sie mich etwas: Eine einfache Strategie für die Eingabe von Sprachmodellen](https://paperswithcode.com/paper/ask-me-anything-a-simple-strategy-for) [2022]
- [GPT-3 soll zuverlässig sein](https://arxiv.org/abs/2210.09150) [2022]
- [Auf den zweiten Gedanken, lasst uns nicht Schritt für Schritt denken! Bias und Toxizität in Zero-Shot Reasoning](https://arxiv.org/abs/2212.08061) [2022]

---

## Tools und Code
🔧

### Prompt Management und Testing

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **Promptfoo** | Open-Source-CLI zum Testen, Auswerten und Red-Teaming von LLM-Anweisungen. YAML-Konfigurationen, CI/CD-Integration, kontradiktorische Tests. ~9K+ ⭐ | [GitHub](https://github.com/promptfoo/promptfoo) |
| **Promptify** | NLP lösen Probleme mit LLM & Einfach generieren verschiedene NLP Task-Anweisungen für beliebte generative Modelle wie GPT, PaLM und mehr mit Promptify | [[Github]](https://github.com/promptslab/Promptify) |
| **Agenta** | Open-Source-LM-Entwicklerplattform für promptes Management, Evaluierung, menschliches Feedback und Bereitstellung. | [GitHub](https://github.com/Agenta-AI/agenta) |
| **PromptLayer** | Versionieren, testen und überwachen Sie jede Eingabeaufforderung und jeden Agenten mit robusten Evals-, Tracing- und Regressionssätzen. | [Website](https://promptlayer.com/) |
| **Helicone** | Produktions prompt Überwachungs- und Optimierungsplattform. | [Website](https://helicone.ai/) |
| **LangGPT** | Framework für strukturiertes und Meta-Prompt Design. 10K+ ⭐ | [GitHub](https://github.com/langgpt/LangGPT) |
| **ChainForge** | Visuelles Toolkit zum Erstellen, Testen und Vergleichen von LLM-Antworten ohne Code. | [GitHub](https://github.com/ianarawjo/ChainForge) |
| **LMQL** | Eine Abfragesprache für LLMs, die komplexe prompte Logik programmierbar macht. | [GitHub](https://github.com/eth-sri/lmql) |
| **Promptotype** | Plattform zum Entwickeln, Testen und Verwalten strukturierter LLM-Aufforderungen. | [Website](https://www.promptotype.io) |
| **PromptPanda** | KI-gestütztes promptes Managementsystem zur Optimierung von prompten Workflows. | [Website](https://promptpanda.io) |
| **Promptimize AI** | Browser-Erweiterung zur automatischen Verbesserung der Benutzeraufforderungen für jedes AI-Modell. | [Website](https://promptimize.ai) |
| **PROMPTMETHEUS** | Webbasierte "Prompt Engineering IDE" zum iterativen Erstellen und Ausführen von Eingabeaufforderungen. | [Website](https://promptmetheus.com) |
| **Better Prompt** | Testen Sie die Suite für LLM-Eingabeaufforderungen, bevor Sie in die Produktion gehen. | [GitHub](https://github.com/krrishdholakia/betterprompt) |
| **OpenPrompt** | Open-Source-Framework für prompt-Learning-Forschung. | [GitHub](https://github.com/thunlp/OpenPrompt) |
| **Prompt Source** | Toolkit zum Erstellen, Teilen und Verwenden natürlicher Sprachaufforderungen. | [GitHub](https://github.com/bigscience-workshop/promptsource) |
| **Prompt Engine** | NPM Utility Library zum Erstellen und Verwalten von Eingabeaufforderungen für LLMs (Microsoft). | [GitHub](https://github.com/microsoft/prompt-engine) |
| **PromptInject** | Framework für die quantitative Analyse der LLM Robustheit gegenüber gegnerischen prompten Angriffen. | [GitHub](https://github.com/agencyenterprise/PromptInject) |
| **LynxPrompt** | Self-Hostable Plattform zur Verwaltung von AI IDE-Konfigdateien (.cursorrules, CLAUDE.md, copilot-instructions.md). Web-Benutzeroberfläche, REST-API, CLI und föderierter Blueprint-Marktplatz für über 30 KI-Codierungsassistenten. | [GitHub](https://github.com/GeiserX/LynxPrompt) |
| **flompt** | Visual AI prompt builder, der Eingabeaufforderungen in 12 semantische Blöcke (Rolle, Kontext, Einschränkungen, Beispiele usw.) zerlegt und in optimiertes XML kompiliert. Browser-Erweiterung für ChatGPT/Claude/Gemini und MCP-Server für Claude Code-Agenten. Frei, Open Source. | [Website](https://flompt.dev) |

### LLM Evaluation Tools

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **DeepEval** | Open-Source-Evaluierungs-Framework für RAG, Agenten und Gespräche mit CI / CD-Integration. ~7K + ⭐ | [GitHub](https://github.com/confident-ai/deepeval) |
| **Ragas** | RAG-Bewertung mit Knowledge-Graph-basierter Testset-Generierung und 30+ Metriken. ~8K+ ⭐ | [GitHub](https://github.com/explodinggradients/ragas) |
| **LangSmith** | LangChains Plattform zum Debuggen, Testen, Auswerten und Überwachen von LLM-Anwendungen. | [Website](https://smith.langchain.com/) |
| **Langfuse** | Open-Source-LLM-Beobachtung mit Rückverfolgung, promptem Management und menschlicher Anmerkung. ~7K + ⭐ | [GitHub](https://github.com/langfuse/langfuse) |
| **Braintrust** | End-to-End AI-Evaluierungsplattform, SOC2 Typ II zertifiziert. | [Website](https://www.braintrust.dev/) |
| **Arize AI / Phoenix** | Echtzeit-LM-Überwachung mit Drifterkennung und -aufspürung. | [GitHub](https://github.com/Arize-ai/phoenix) |
| **TruLens** | Bewertung und Erklärung von LLM-Apps; verfolgt Halluzinationen, Relevanz, Erdung. | [GitHub](https://github.com/truera/trulens) |
| **InspectAI** | Zweckgebunden für die Bewertung von Agenten gegen Benchmarks (UK AISI). | [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |
| **Opik** | Bewerten, Testen und Versenden von LLM-Anwendungen über Dev- und Produktionslebenszyklen hinweg. | [GitHub](https://github.com/comet-ml/opik) |
| **EvalView** | CLI-Tool zum Testen von mehrstufigen KI-Agenten mit YAML-Testfällen, Regressionserkennung und Produktionsüberwachung. |[GitHub](https://github.com/hidai25/eval-view) |

### Agent Frameworks

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **LangChain / LangGraph** | Das am weitesten verbreitete LLM-App-Framework LangGraph fügt graphenbasierte mehrstufige Agenten-Workflows hinzu. ~100K+ / ~10K+ | [GitHub](https://github.com/langchain-ai/langchain) · [LangGraph](https://github.com/langchain-ai/langgraph) |
| **CrewAI** | Rollenspiel-AI-Agent-Orchestrierung mit 700+ Integrationen. ~44K+ ⭐ | [GitHub](https://github.com/crewAIInc/crewAI) |
| **AutoGen (AG2)** | Microsofts multi-agenten-konversations-framework. ~ 40K + ⭐ | [GitHub](https://github.com/microsoft/autogen) |
| **DSPy** | Stanfords Framework für die Programmierung von LLMs mit automatischer prompt / Gewichtsoptimierung. 22K+ ⭐ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **OpenAI Agents SDK** | Official Agent Framework mit Funktionsaufruf, Leitplanken und Handoffs. ~ 10K + ⭐ | [GitHub](https://github.com/openai/openai-agents-python) |
| **Semantic Kernel** | Microsofts AI-Framework mit M365 Copilot; C#, Python, Java. ~24K + ⭐ | [GitHub](https://github.com/microsoft/semantic-kernel) |
| **LlamaIndex** | Datenrahmen für RAG- und Agentenfähigkeiten. ~ 40K + ⭐ | [GitHub](https://github.com/run-llama/llama_index) |
| **Haystack** | Open-Source NLP Framework mit Pipeline-Architektur für RAG und Agenten. ~ 20K + ⭐ | [GitHub](https://github.com/deepset-ai/haystack) |
| **Agno (formerly Phidata)** | Python Agent Framework mit Mikrosekunden-Instanziation. ~ 20K + ⭐ | [GitHub](https://github.com/agno-agi/agno) |
| **Smolagents** | Hugging Faces minimalistisches codezentriertes Agenten-Framework (~1000 LOC). ~15K + ⭐ | [GitHub](https://github.com/huggingface/smolagents) |
| **Pydantic AI** | Type-Safe Agent Framework mit Pydantic für strukturierte Validierung. ~8K+ ⭐ | [GitHub](https://github.com/pydantic/pydantic-ai) |
| **Mastra** | TypeScript AI Agent Framework mit Assistenten, RAG und Beobachtbarkeit. ~ 20K + ⭐ | [GitHub](https://github.com/mastra-ai/mastra) |
| **Google ADK** | Agent Development Kit ist tief in Gemini und Google Cloud integriert. | [GitHub](https://github.com/google/adk-python) |
| **Strands Agents (AWS)** | Modell-agnostisches Framework mit tiefen AWS-Integrationen. | [GitHub](https://github.com/strands-agents/sdk-python) |
| **Langflow** | Node-basierter Visual Agent Builder mit Drag-and-Drop. ~50K + ⭐ | [GitHub](https://github.com/langflow-ai/langflow) |
| **n8n** | Workflow-Automatisierung mit KI-Agentenfähigkeiten und 400+ Integrationen. ~ 60K + ⭐ | [GitHub](https://github.com/n8n-io/n8n) |
| **Dify** | All-in-One Backend für agentische Workflows mit Tool-Using Agents und RAG. | [GitHub](https://github.com/langgenius/dify) |
| **PraisonAI** | Multi-AI Agents Framework mit mehr als 100 LLM-Unterstützung, MCP-Integration und integriertem Speicher. | [GitHub](https://github.com/MervinPraison/PraisonAI) |
| **Neurolink** | Multi-Provider AI Agent Framework vereint 12+ Anbieter mit Workflow-Orchestrierung. | [GitHub](https://github.com/juspay/neurolink) |
| **Composio** | Verbinden Sie über 100 Tools mit KI-Agenten mit Null-Setup. | [GitHub](https://github.com/composiohq/composio) |

### Sofortige Optimierungstools

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **DSPy** | Mehrere Optimierer (MIPROv2, BootstrapFewShot, COPRO) für automatisches promptes Tuning. ~22K+ ⭐ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **TextGrad** | Automatische Differenzierung über Text (Stanford). ~2K+ ⭐ | [GitHub](https://github.com/zou-group/textgrad) |
| **OPRO** | Google DeepMind Optimierung durch Aufforderung. | [GitHub](https://github.com/google-deepmind/opro) |

### Red Teaming und Prompt Security

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **Garak (NVIDIA)** | LLM-Vulnerabilitätsscanner für Halluzinationen, Injektionen und Jailbreaks - die "Nmap für LLMs". ~3K + ⭐ | [GitHub](https://github.com/NVIDIA/garak) |
| **PyRIT (Microsoft)** | Python Risk Identification Tool für automatisiertes Red-Teaming. ~3K+ | [GitHub](https://github.com/Azure/PyRIT) |
| **DeepTeam** | 40+ Schwachstellen, 10+ Angriffsmethoden, OWASP Top 10 Unterstützung. | [GitHub](https://github.com/confident-ai/deepteam) |
| **LLM Guard** | Sicherheits-Toolkit für die LLM-I/O-Validierung. ~2K+ ⭐ | [GitHub](https://github.com/protectai/llm-guard) |
| **NeMo Guardrails (NVIDIA)** | Programmierbare Leitplanken für Konversationssysteme. ~5K+ ⭐ | [GitHub](https://github.com/NVIDIA/NeMo-Guardrails) |
| **Guardrails AI** | Definieren Sie strenge Ausgabeformate (JSON-Schemata), um die Zuverlässigkeit des Systems zu gewährleisten. | [Website](https://www.guardrailsai.com) |
| **Lakera** | KI-Sicherheitsplattform für Echtzeit-Injektionserkennung. | [Website](https://lakera.ai/) |
| **Purple Llama (Meta)** | Open-Source LLM Sicherheitsbewertung einschließlich CyberSecEval. | [GitHub](https://github.com/meta-llama/PurpleLlama) |
| **GPTFuzz** | Automatisierte Jailbreak-Vorlagengenerierung mit Erfolgsquoten von > 90 %. | [GitHub](https://github.com/sherdencooper/GPTFuzz) |
| **Rebuff** | Open-Source-Tool zur Erkennung und Verhinderung einer sofortigen Injektion. | [GitHub](https://github.com/protectai/rebuff) |
| **AgentSeal** | "Open-Source-Scanner, der 150 Angriffssonden ausführt, um KI-Agenten auf schnelle Injektions- und Extraktionslücken zu testen." | [GitHub](https://github.com/agentseal/agentseal) |

### MCP (Model Context Protocol)

MCP ist ein offener Standard, der von Anthropic (November 2024, gespendet an Linux Foundation Dezember 2025) für die Verbindung von KI-Assistenten mit externen Datenquellen und Tools über eine standardisierte Schnittstelle entwickelt wurde. Es hat **97M+ monatliche SDK Downloads** und wurde von GitHub, Google und den meisten großen KI-Anbietern übernommen.

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **MCP Specification** | Die Kernprotokollspezifikation und SDKs. ~15K + ⭐ | [GitHub](https://github.com/modelcontextprotocol/modelcontextprotocol) |
| **MCP Reference Servers** | Offizielle Implementierungen: fetch, filesystem, GitHub, Slack, Postgres. | [GitHub](https://github.com/modelcontextprotocol/servers) |
| **FastMCP (Python)** | Hohes Python-Framework zum Aufbau von MCP-Servern. ~5K + ⭐ | [GitHub](https://github.com/jlowin/fastmcp) |
| **GitHub MCP Server** | GitHubs offizieller MCP-Server für Repo-, Issue-, PR- und Action-Interaktion. 15K+ ⭐ | [GitHub](https://github.com/github/github-mcp-server) |
| **Awesome MCP Servers** | Kuratierte Liste von 10.000+ Community-MCP-Servern. ~ 30K + ⭐ | [GitHub](https://github.com/punkpeye/awesome-mcp-servers) |
| **Context7** | Der MCP-Server bietet eine versionenspezifische Dokumentation, um die Codehalluzination zu reduzieren. | [GitHub](https://github.com/upstash/context7) |
| **GitMCP** | Erstellen Sie entfernte MCP-Server für jedes GitHub-Repo, indem Sie die Domain ändern. | [Website](https://gitmcp.io/) |
| **MCP Inspector** | Visuelles Test-Tool für die Entwicklung von MCP-Servern. | [GitHub](https://github.com/modelcontextprotocol/inspector) |

### Vibe Coding und AI Coding Assistants

> 🟢 = Open Source · 🔵 = Kommerziell · 🟣 = Open Source + kommerziell (Open Core mit kostenpflichtiger Cloud/API)

#### CLI-basierte Coding Agents

Terminal-native agentische Tools, die Ihre Codebasis verstehen und mehrstufige Aufgaben ausführen.

| Name | Beschreibung | Typ | Link |
|:-----|:-----------|:----:|:----:|
| **Claude Code** | Anthropic Agentic Coding CLI; versteht vollständige Codebasen und führt komplexe mehrstufige Aufgaben über natürliche Sprache aus. | 🔵 | [Docs](https://docs.anthropic.com/en/docs/claude-code) |
| **OpenAI Codex CLI** | Open-Source-Terminalcodierungsagent von OpenAI; leichtgewichtig, local-first, mit Sandbox-Codeausführung. ~68K+ ⭐ | 🟣 | [GitHub](https://github.com/openai/codex) |
| **Gemini CLI** | Googles Open-Source-Terminal-KI-Agent mit 1M-Token-Kontextfenster und Google Search Grounding. ~96K+ ⭐ | 🟣 | [GitHub](https://github.com/google-gemini/gemini-cli) |
| **Qwen Code** | Open-Source-Terminal-AI-Agent optimiert für Qwen3-Coder; Multi-Protokoll-Unterstützung (OpenAI / Anthropic / Gemini-APIs), 1.000 kostenlose Anfragen / Tag. ~21K + ⭐ | 🟢 | [GitHub](https://github.com/QwenLM/qwen-code) |
| **Aider** | KI-Paar-Programmierung im Terminal mit tiefer Git-Integration; bildet ganze Codebasen ab und überträgt automatisch Änderungen. ~42K+ ⭐ | 🟢 | [GitHub](https://github.com/Aider-AI/aider) |
| **OpenCode** | Leistungsstarker Open Source AI Coding Agent mit schöner TUI; unterstützt nahezu alle AI Model Anbieter. ~ 120K + ⭐ | 🟢 | [GitHub](https://github.com/opencode-ai/opencode) |
| **Goose** | Erweiterbarer Open-Source-AI-Agent von Block (Square/Cash App); installiert, führt aus, bearbeitet und testet mit jedem LLM. ~29K + ⭐ | 🟢 | [GitHub](https://github.com/block/goose) |
| **Crush** | Glamorous Agentic Coding Agent von Charmbracelet mit Multi-Modell-Unterstützung, LSP-Integration und schöner Terminal-Benutzeroberfläche. ~9K + ⭐ | 🟢 | [GitHub](https://github.com/charmbracelet/crush) |
| **Amazon Q Developer CLI** | Agentische Chat-Erfahrung im Terminal von AWS; Übergang zu Kiro CLI. | 🟣 | [GitHub](https://github.com/aws/amazon-q-developer-cli) |
| **Amp** | Sourcegraph Agentic Coding Tool (Cody Nachfolger); funktioniert über CLI und IDE. | 🔵 | [Website](https://ampcode.com) |
| **Junie CLI** | JetBrains LLM-agnostic Coding Agent CLI (Beta 2026); unterstützt alle großen Modellanbieter. | 🔵 | [Website](https://www.jetbrains.com/junie/) |
| **Autohand Code CLI** | Selbstentwickelnder autonomer Terminal-Codierungsagent mit Multi-Provider-LM-Unterstützung, 40+ Tools und modularem Fähigkeitensystem. | 🟢 | [GitHub](https://github.com/autohandai/code-cli) |

#### AI Code Editoren / IDEs

Standalone-Editoren oder IDE-Forks mit tiefer KI-Integration.

| Name | Beschreibung | Typ | Link |
|:-----|:-----------|:----:|:----:|
| **Cursor** | Führender AI-nativer Code-Editor (VS-Code-Fork); Composer generiert ganze Apps aus natürlicher Sprache, agentische Multi-Datei-Bearbeitungen. | 🔵 | [Website](https://cursor.com) |
| **Windsurf** | AI-powered IDE (VS Code Fork) mit proprietärem Cascade Agent und SWE-1.5 Modell; erworben von Cognition AI. | 🔵 | [Website](https://windsurf.com) |
| **Zed** | Hochleistungs-Editor in Rust mit nativen AI-Funktionen, Zeta-Vorhersage und Unterstützung des Agent Client Protocol. ~77K+ ⭐ | 🟢 | [GitHub](https://github.com/zed-industries/zed) |
| **Trae** | Kostenlose KI-basierte IDE von ByteDance ("The Real AI Engineer") mit Builder-Modus; bietet kostenlosen Zugang zu Claude, GPT-4o und DeepSeek. | 🔵 | [Website](https://www.trae.ai) |
| **Google Antigravity** | Googles Agent-First IDE (VS-Code-Fork) mit Manager-Ansicht zum Orchestrieren mehrerer Agenten parallel; powered by Gemini. | 🔵 | [Website](https://antigravity.google) |
| **Kiro** | AWS's spec-driven agentic AI IDE (VS Code Fork); verwandelt Eingabeaufforderungen in Spezifikationen, dann Arbeitscode, Dokumente und Tests. | 🔵 | [Website](https://kiro.dev) |
| **PearAI** | Open-Source AI Code Editor (VS Code Fork) mit Continue-basiertem Chat und Fertigstellungen. ~ 40K + ⭐ | 🟢 | [GitHub](https://github.com/trypear/pearai-app) |
| **Void** | Open-Source-Cursor-Alternative (VS-Code-Fork); jedes Modell oder lokales Hosting mit Änderungsvisualisierung. 28K+ ⭐ | 🟢 | [GitHub](https://github.com/voideditor/void) |
| **Melty** | Open-Source-Chat-erster AI-Code-Editor mit Multi-Datei-Bearbeitung und tiefer Git-Integration. ~7K + ⭐ | 🟢 | [GitHub](https://github.com/meltylabs/melty) |
| **Emdash** | Open-Source Agentic Dev Environment (YC W26) zum parallelen Ausführen mehrerer Codierungsagenten in isolierten Git-Worktrees. | 🟢 | [GitHub](https://github.com/generalaction/emdash) |

#### IDE Extensions / Plugins

Plugins für VS Code, JetBrains, Neovim und andere Editoren.

| Name | Beschreibung | Typ | Link |
|:-----|:-----------|:----:|:----:|
| **GitHub Copilot** | Der am weitesten verbreitete KI-Codierungsassistent; Inline-Fertigstellungen, Chat und Agentic Codierungsagent über VS Code, JetBrains, Neovim. | 🔵 | [Website](https://github.com/features/copilot) |
| **Cline** | Autonomer Codierungsagent in VS Code mit Human-in-the-Loop-Zulassungen; Dateibearbeitung, Terminalbefehle und Browsernutzung. ~ 59K + ⭐ | 🟢 | [GitHub](https://github.com/cline/cline) |
| **Continue** | Open-Source-VS-Code und JetBrains-Erweiterung für die Erstellung benutzerdefinierter, modularer KI-Entwicklungssysteme; jedes Modell. ~32K + ⭐ | 🟢 | [GitHub](https://github.com/continuedev/continue) |
| **Cody** | Sourcegraph-basierter KI-Assistent, der Kontext aus lokalen und entfernten Codebasen zieht; VS Code, JetBrains, Visual Studio. | 🔵 | [Website](https://sourcegraph.com/cody) |
| **Codeium** | Kostenlose ki-codierungserweiterung für 40 + ides mit vervollständigungen, chat und suche in 70 + sprachen. | 🟣 | [Website](https://codeium.com) |
| **Amazon Q Developer** | Der AI-Codierungsassistent von AWS mit Fertigstellungen, Inline-Chat und Agentenmodus; tiefe AWS-Integration. | 🟣 | [Website](https://aws.amazon.com/q/developer/) |
| **Gemini Code Assist** | Googles IDE-Erweiterung powered by Gemini mit Fertigstellungen, Next Edit Predictions und Inline-Diffs; kostenlos für Einzelpersonen. | 🟣 | [Website](https://codeassist.google) |
| **Tabnine** | Datenschutzorientierter KI-Assistent, der auf permissiv lizenziertem OSS geschult ist; unterstützt alle wichtigen IDEs bei der lokalen Bereitstellung. | 🔵 | [Website](https://www.tabnine.com) |
| **Augment Code** | Enterprise AI Codierassistent mit 200K-Token Context Engine für tiefes Codebasisverständnis. | 🔵 | [Website](https://www.augmentcode.com) |
| **Qodo** | AI Code Review und Qualitätsplattform mit Multi-Agent-Architektur; Testgenerierung, Code Review, CI/CD Durchsetzung. | 🟣 | [Website](https://www.qodo.ai) |
| **CodeGeeX** | Open-Source-Modell zur mehrsprachigen Codegenerierung unterstützt 20+ Sprachen mit VS-Code und JetBrains-Erweiterungen. ~11K+ ⭐ | 🟢 | [GitHub](https://github.com/zai-org/CodeGeeX) |
| **Tabby** | Selbst gehosteter Open-Source-KI-Codierungsassistent (Copilot-Alternative); läuft vollständig auf Ihrer Infrastruktur. 25K+ ⭐ | 🟢 | [GitHub](https://github.com/TabbyML/tabby) |

#### AI Coding Plattformen / Cloud Agents

Browserbasierte oder Cloud-gehostete Agenten, die autonom erstellen, testen und bereitstellen.

| Name | Beschreibung | Typ | Link |
|:-----|:-----------|:----:|:----:|
| **Devin** | Erster vollständig autonomer Cloud-basierter KI-Software-Ingenieur; plant, programmiert, testet und öffnet PRs unabhängig. | 🔵 | [Website](https://devin.ai) |
| **Replit Agent** | Cloud-nativer KI-Agent, der autonom Full-Stack-Apps im Browser erstellt, testet und bereitstellt; 50+ Sprachen. | 🔵 | [Website](https://replit.com/products/agent) |
| **bolt.new** | KI-gestützter Web-Dev-Agent; Aufforderung, Ausführung, Bearbeitung und Bereitstellung von Full-Stack-Apps direkt im Browser über WebContainers. 15K+ ⭐ | 🟢 | [GitHub](https://github.com/stackblitz/bolt.new) |
| **bolt.diy** | Community Fork von bolt.new mit erweiterten Funktionen und breiterer LLM-Flexibilität. ~12K + ⭐ | 🟢 | [GitHub](https://github.com/stackblitz-labs/bolt.diy) |
| **Lovable** | Full-Stack-Apps aus natürlicher Sprache mit eingebauter Supabase, Auth und One-Click-Bereitstellung; schnellstes europäisches Startup auf 20 Millionen US-Dollar. | 🔵 | [Website](https://lovable.dev) |
| **v0** | Vercels KI-Plattform zur Generierung von hochwertigem React/Next. js UI-Komponenten aus natürlicher Sprache. | 🔵 | [Website](https://v0.dev) |
| **GitHub Copilot Workspace** | Cloud-basierte Codierungsumgebung mit Plan, Brainstorming und Reparaturagenten; in den kostenpflichtigen Copilot-Plänen enthalten. | 🔵 | [Website](https://githubnext.com/projects/copilot-workspace) |
| **Firebase Studio** | Googles agentische Cloud-basierte Entwicklungsumgebung. | 🔵 | [Website](https://firebase.google.com/studio) |

#### Open-Source Coding Agent Frameworks

Frameworks und Forschungsprojekte zum Aufbau autonomer Codierungsagenten.

| Name | Beschreibung | Typ | Link |
|:-----|:-----------|:----:|:----:|
| **OpenHands** | Führende Open-Source-Plattform für Cloud-Codierungsagenten; konsequent top auf SWE-bench. Früher OpenDevin. ~69K + ⭐ | 🟢 | [GitHub](https://github.com/OpenHands/OpenHands) |
| **SWE-agent** | Behebt ein GitHub-Problem und behebt es automatisch mit einer benutzerdefinierten Agent-Computer-Schnittstelle. [NeurIPS 2024] ~ 19K + ⭐ | 🟢 | [GitHub](https://github.com/SWE-agent/SWE-agent) |
| **Open SWE** | Das in der Cloud gehostete async Coding Agent Framework von LangChain basiert auf LangGraph mit Slack/Linear-Integration. ~8K+ ⭐ | 🟢 | [GitHub](https://github.com/langchain-ai/open-swe) |
| **Devika** | Open-Source Agentic Software Engineer; bricht Anweisungen auf, recherchiert und schreibt Code. Devin Alternative. ~ 18K + ⭐ | 🟢 | [GitHub](https://github.com/stitionai/devika) |
| **AutoCodeRover** | Autonome Programmverbesserung kombiniert LLMs mit Fehlerlokalisierung für die Lösung von GitHub-Problemen. ~2.8K + ⭐ | 🟢 | [GitHub](https://github.com/nus-apr/auto-code-rover) |
| **Agentless** | Einfacher dreiphasiger Ansatz (localize → repair → validate) zur Lösung von Softwareentwicklungsproblemen. ~2K+ ⭐ | 🟢 | [GitHub](https://github.com/OpenAutoCoder/Agentless) |
| **Devon** | Open-Source-Paar-Programmierer SWE-Agent mit Code-Schreiben, Planung und Forschung; unterstützt Claude, GPT-4, Llama, Ollama. 3,5K+ ⭐ | 🟢 | [GitHub](https://github.com/entropy-research/Devon) |

### Sonstige bemerkenswerte Repositorys

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **Prompt Engineering Guide (DAIR.AI)** | Der definitive Open-Source-Guide und Ressourcen-Hub. 3M + Lernende. ~ 55K + ⭐ | [GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide) |
| **Awesome ChatGPT Prompts / Prompts.chat** | Weltweit größte Open-Source-Prompt-Bibliothek. Tausende von Aufforderungen für alle wichtigen Modelle. | [GitHub](https://github.com/f/awesome-chatgpt-prompts) |
| **12-Factor Agents** | Prinzipien für den Aufbau von LLM-basierter Software in Produktionsqualität. ~ 17K + ⭐ | [GitHub](https://github.com/humanlayer/12-factor-agents) |
| **NirDiamant/Prompt_Engineering** | 22 praktische Jupyter Notebook Tutorials. ~3K + ⭐ | [GitHub](https://github.com/NirDiamant/Prompt_Engineering) |
| **Context Engineering Repository** | Erste Prinzipien Handbuch für den Übergang über prompt Engineering zu Kontext-Design. | [GitHub](https://github.com/davidkimai/Context-Engineering) |
| **AI Agent System Prompts Library** | Sammlung von Systemaufforderungen aus Produktions-KI-Codeagenten (Claude Code, Gemini CLI, Cline, Aider, Roo Code). | [GitHub](https://github.com/tallesborges/agentic-system-prompts) |
| **Awesome Vibe Coding** | Kuratierte liste von 245+ tools und ressourcen zum erstellen von software durch natürliche sprachaufforderungen. | [GitHub](https://github.com/taskade/awesome-vibe-coding) |
| **OpenAI Cookbook** | Offizielle Rezepte für Eingabeaufforderungen, Tools, RAG und Auswertungen. | [GitHub](https://github.com/openai/openai-cookbook) |
| **Embedchain** | Framework zum Erstellen von ChatGPT-ähnlichen Bots über Ihren Datensatz. | [GitHub](https://github.com/embedchain/embedchain) |
| **ThoughtSource** | Framework für die Wissenschaft des maschinellen Denkens. | [GitHub](https://github.com/OpenBioLink/ThoughtSource) |
| **Promptext** | Extrahieren und Formate Code-Kontext für AI-Eingabeaufforderungen mit Token-Zählung. | [GitHub](https://github.com/1broseidon/promptext) |
| **Price Per Token** | Vergleichen Sie die LLM API-Preise für über 200 Modelle. | [Website](https://pricepertoken.com/) |
| **OpenPaw** | CLI-Werkzeug`npx pawmode`), die Claude Code in einen persönlichen Assistenten verwandelt, indem Systemaufforderungen (CLAUDE.md + SOUL.md) mit Persönlichkeit, Gedächtnis und 38 Skill-Routern generiert werden. | [GitHub](https://github.com/daxaur/openpaw) |
| **Think Better** | Open-Source-CLI, das 10 strukturierte Entscheidungsrahmen (MECE, Issue Trees, Pre-Mortems) und 12 kognitive Bias-Detektoren dauerhaft in KI-Assistenten-Aufforderungen einspeist. Go, MIT. | [GitHub](https://github.com/HoangTheQuyen/think-better) |

---

## APIs
💻

### OpenAI

| Modell | Kontext | Preis (Input/Output pro 1M Token) | Hauptmerkmal |
|:------|:--------|:-----------------------------------|:------------|
| GPT-5.2 / 5.2 Thinking | 400K | $1.75 / $14 | Neuestes Flaggschiff, 90% Cached-Rabatt, konfigurierbare Argumentation |
| GPT-5.1 | 400K | $1.25 / $10 | Flaggschiff der vorherigen Generation |
| GPT-4.1 / 4.1 mini / nano | 1M | $2 / $8 | Bestes Nicht-Grundmodell, 40% schneller und 80% billiger als GPT-4o |
| o3 / o3-pro | 200K | Sorten | Reasoning-Modelle mit nativem Tool |
| o4-mini | 200K | Kosteneffizient | Schnelles Denken, am besten auf AIME in seiner Kostenklasse |
| GPT-OSS-120B / 20B | 128K | $0.03 / $0.30 | Erste offene Modelle, Apache 2.0 |

Hauptfunktionen: Responses API, Agents SDK, Structured Outputs, Function Calling, promptes Caching (90% Rabatt), Batch API (50% Rabatt), MCP-Unterstützung. [Plattform Docs](https://platform.openai.com/docs/models)

### Anthropic (Claude)

| Modell | Kontext | Preis (Input/Output pro 1M Token) | Hauptmerkmal |
|:------|:--------|:-----------------------------------|:------------|
| Claude Opus 4.6 | 1M (Beta) | $5 / $25 | Leistungsstärkste, modernste Codierung und agentische Aufgaben |
| Claude Sonnet 4.5 | 200K | $3 / $15 | Bestes Codierungsmodell, 61,4% OSWorld (Computernutzung) |
| Claude Haiku 4.5 | 200K | Schnelles Tier | Nahe der Grenze, schnellste Modellklasse |
| Claude Opus 4 / Sonnet 4 | 200K | $ 15 / $ 75 (Opus) | Opus: 72,5% SWE-Bench, Sonnet 4 Powers GitHub Copilot |

Hauptmerkmale: Extended Thinking mit Tool-Nutzung, Computer-Nutzung, MCP (hier entstanden), promptes Caching, Claude Code CLI, verfügbar bei AWS Bedrock und Google Vertex AI. [API Docs](https://docs.anthropic.com/)

### Google (Gemini)

| Modell | Kontext | Preis (Input/Output pro 1M Token) | Hauptmerkmal |
|:------|:--------|:-----------------------------------|:------------|
| Gemini 3 Pro Preview | 1M | $2 / $12 | Das intelligenteste Google-Modell, das auf 2B+ bereitgestellt wird Suchbenutzer |
| Gemini 2.5 Pro | 1M | $1.25 / $10 | Am besten für Codierung /agentische Aufgaben, Denkmodell |
| Gemini 2.5 Flash / Flash-Lite | 1M | $0.30/$1.50 · $0.10/$0.40 | Preis-Leistungsführer |

Hauptmerkmale: Denken (alle 2.5+ Modelle), Google Search Grounding, Codeausführung, Live API (Echtzeit-Audio / Video), Kontext-Caching. [Google AI Studio](https://ai.google.dev/)

### Meta (Llama)

| Modell | Architektur | Kontext | Hauptmerkmal |
|:------|:------------|:--------|:------------|
| Llama 4 Scout | 109B MoE / 17B aktiv | 10M | Passt Single H100, multimodal, Offengewicht |
| Llama 4 Maverick | 400B MoE / 17B aktiv, 128 Experten | 1M | Beats GPT-4o, offenes Gewicht |
| Llama 3.3 70B | dicht | 128K | Spiele Llama 3.1 405B |

Verfügbar für über 25 Cloud-Partner, Hugging Face und Inferenz-APIs. [Llama](https://ai.meta.com/llama/)

### Andere namhafte Anbieter

| Anbieter | Beschreibung | Link |
|:---------|:-----------|:----:|
| **Mistral AI** | Mistral Large 3 (675B MoE), Devstral 2, Ministral 3. Apache 2.0. | [Website](https://mistral.ai) |
| **DeepSeek** | V3.2 (671B MoE), R1 (Gründung, MIT-Lizenz). $0,15 / $0,75 pro 1M Token. | [Website](https://deepseek.com) |
| **xAI (Grok)** | Grok 4.1 Schnell: 2M Kontext, $0,20/$0,50 pro 1M Token. | [Website](https://x.ai) |
| **Cohere** | Befehl A (111B, 256K Kontext), Embed v4, Rang 4.0. Excels bei RAG. | [Website](https://cohere.com) |
| **Together AI** | 200+ offene Modelle mit einer Latenz von unter 100ms. | [Website](https://together.ai) |
| **Groq** | LPU-Hardware mit ~ 300 + Token / sec Inferenz. | [Website](https://groq.com) |
| **Fireworks AI** | Schnelle Rückschlüsse auf HIPAA + SOC2-Compliance. | [Website](https://fireworks.ai) |
| **OpenRouter** | Unified API für 300+ Modelle aller Anbieter. | [Website](https://openrouter.ai) |
| **Cerebras** | Wafer-Chips mit der besten Gesamtantwortzeit. | [Website](https://cerebras.ai) |
| **Perplexity AI** | Search-Augmented API mit Zitaten. | [Website](https://perplexity.ai) |
| **Amazon Bedrock** | Managed Multi-Modell-Service mit Claude, Llama, Mistral, Cohere. | [Website](https://aws.amazon.com/bedrock/) |
| **Hugging Face Inference** | Zugriff auf offene Modelle über API. | [Website](https://huggingface.co/docs/api-inference/index) |

---

## Datensätze und Benchmarks
💾

### Wichtige Benchmarks (2024–2026)

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **Chatbot Arena / LM Arena** | 6M + Benutzer stimmen für Elo-bewertete paarweise LLM-Vergleiche. De facto Standard für menschliche Präferenz. | [Website](https://lmarena.ai/) |
| **MMLU-Pro** | 12.000+ Diplom-Level-Fragen in 14 Domänen. NeurIPS 2024 Spotlight. | [GitHub](https://github.com/TIGER-AI-Lab/MMLU-Pro) |
| **GPQA** | 448 "Google-proof" STEM-Fragen; Nicht-Experten-Validatoren erreichen nur 34%. | [arXiv](https://arxiv.org/abs/2311.12022) |
| **SWE-bench Verified** | Human-validated 500-Task-Subset für die reale GitHub-Problemlösung. | [Website](https://www.swebench.com/) |
| **SWE-bench Pro** | 1.865 Aufgaben in 41 professionellen Repos; beste Modelle erzielen nur ~23%. | [Leaderboard](https://scale.com/leaderboard/swe_bench_pro_public) |
| **Humanity's Last Exam (HLE)** | 2.500 Experten-geprüfte Fragen; Top-KI erzielt nur ~10-30%. | [Website](https://agi.safe.ai/) |
| **BigCodeBench** | 1.140 Kodierungsaufgaben in 7 Domänen; KI erreicht ~ 35,5 % gegenüber 97 % menschlichen Erfolg. | [Leaderboard](https://huggingface.co/spaces/bigcode/bigcodebench-leaderboard) |
| **LiveBench** | Kontaminationsresistent mit häufig aktualisierten Fragen. | [Paper](https://openreview.net/forum?id=sKYHBTAxVa) |
| **FrontierMath** | Mathematik auf Forschungsebene; AI löst nur ~ 2% der Probleme. | Forschung |
| **ARC-AGI v2** | Abstraktes Denken zur Messung der fluiden Intelligenz. | Forschung |
| **IFEval** | Instruktionsfolgende Auswertung mit Formatierungs- / Inhaltsbeschränkungen. | [arXiv](https://arxiv.org/abs/2311.07911) |
| **MLE-bench** | Die ML-Engineering-Evaluierung von OpenAI über Aufgaben im Kaggle-Stil. | [GitHub](https://github.com/openai/mle-bench) |
| **PaperBench** | Bewertet die Fähigkeit von AI, 20 ICML 2024 Papiere von Grund auf neu zu replizieren. | [GitHub](https://github.com/openai/preparedness) |

### Bestenlisten und Meta-Benchmarks

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **Hugging Face Open LLM Leaderboard v2** | Bewertet offene Modelle auf MMLU-Pro, GPQA, IFEval, MATH. | [Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| **Artificial Analysis Intelligence Index v3** | Aggregiert 10 Auswertungen. | [Website](https://artificialanalysis.ai/) |
| **SEAL by Scale AI** | Hosts SWE-bench Pro und agentische Auswertungen. | [Leaderboard](https://scale.com/leaderboard) |

### Prompt und Instruction Datasets

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **P3 (Public Pool of Prompts)** | Sofortvorlagen für 270+ NLP-Aufgaben, die zum Trainieren von T0 und ähnlichen Modellen verwendet werden. | [HuggingFace](https://huggingface.co/datasets/bigscience/P3) |
| **System Prompts Dataset** | 944 Systemaufforderungsvorlagen für Agenten-Workflows (von Daniel Rosehill, Aug 2025). | [HuggingFace](https://huggingface.co/datasets/danielrosehill/system_prompts) |
| **OpenAssistant Conversations (OASST)** | 161.443 Nachrichten in 35 Sprachen mit 461.292 Qualitätsbewertungen. | [HuggingFace](https://huggingface.co/datasets/OpenAssistant/oasst1) |
| **UltraChat / UltraFeedback** | Groß angelegte synthetische Instruktions- und Präferenzdatensätze für das Ausrichtungstraining. | HuggingFace |
| **SoftAge Prompt Engineering Dataset** | 1.000 verschiedene Aufforderungen in 10 Kategorien zum Benchmarking der prompten Leistung. | HuggingFace |
| **Text Transformation Prompt Library** | Umfassende Sammlung von Texttransformationsaufforderungen (Mai 2025). | HuggingFace |
| **Writing Prompts** | ~ 300K von Menschen geschriebene Geschichten gepaart mit Aufforderungen von r / WritingPrompts. | [Kaggle](https://www.kaggle.com/datasets/ratthachat/writing-prompts) |
| **Midjourney Prompts** | Textaufforderungen und Bild-URLs, die von MidJourneys öffentlicher Discord abgekratzt wurden. | [HuggingFace](https://huggingface.co/datasets/succinctly/midjourney-prompts) |
| **CodeAlpaca-20k** | 20.000 Programmieranweisungs-Ausgabe-Paare. | [HuggingFace](https://huggingface.co/datasets/sahil2801/CodeAlpaca-20k) |
| **ProPEX-RAG** | Datensatz zur zeitnahen Optimierung in RAG-Workflows. | HuggingFace |
| **NanoBanana Trending Prompts** | Über 1.000 kuratierte AI-Bildaufforderungen von X / Twitter, geordnet nach Engagement. | [GitHub](https://github.com/jau123/nanobanana-trending-prompts) |

### Red Teaming und Adversarial Datasets

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **HarmBench** | 510 schädliche Verhaltensweisen in Standard-, Kontext-, Copyright- und multimodalen Kategorien. | [Website](https://safetyprompts.com/) |
| **JailbreakBench** | Open Robustheit Benchmark für Jailbreaking mit 100 Aufforderungen. | Forschung |
| **AgentHarm** | 110 bösartige Agentenaufgaben in 11 Schadenskategorien. | [arXiv](https://arxiv.org/abs/2410.09024) |
| **DecodingTrust** | 243.877 fordert die Bewertung der Vertrauenswürdigkeit in 8 Perspektiven. | Forschung |
| **SafetyPrompts.com** | Aggregator Tracking 50+ Sicherheit / Red-Teaming-Datensätze. | [Website](https://safetyprompts.com/) |

---

## Modelle
🧠

### Grenzmodelle (2025–2026)

| Modell | Anbieter | Kontext | Schlüsselstärke |
|:------|:---------|:--------|:-------------|
| **GPT-5.2** | OpenAI | 400K | Allgemeine Intelligenz, 100% AIME 2025 |
| **Claude Opus 4.6** | Anthropisch | 1M (Beta) | Codierung, agentische Aufgaben, erweitertes Denken |
| **Gemini 3 Pro** | Google | 1M | #1 LMArena (~1500 Elo), multimodal |
| **Grok 4.1** | x AI | 2M | #2 LMArena (1483 Elo), niedrige Halluzination |
| **Mistral Large 3** | Mistral AI | 256K | Bestes Freigewicht (675B MoE/41B aktiv), Apache 2.0 |
| **DeepSeek-V3.2** | DeepSeek | 128K | Bester Wert (671B MoE/37B aktiv), MIT-Lizenz |
| **Llama 4 Maverick** | Metadaten | 1M | Beats GPT-4o (400B MoE/17B aktiv), offenes Gewicht |

### Argumentationsmodelle

| Modell | Schlüsselangaben |
|:------|:-----------|
| **OpenAI o3 / o3-pro** | 87,7% GPQA Diamond. Native Tool verwenden. |
| **OpenAI o4-mini** | Best AIME in seiner Kostenklasse mit visuellem Denken. |
| **DeepSeek-R1 / R1-0528** | Freigewicht, RL-trainiert. 87,5% auf AIME 2025. MIT-Lizenz. |
| **QwQ (Qwen with Questions)** | 32B Argumentationsmodell. Apache 2.0. Vergleichbar mit R1. |
| **Gemini 2.5 Pro/Flash (Thinking)** | Eingebautes Denken mit konfigurierbarem Denkbudget. |
| **Claude Extended Thinking** | Hybridmodus mit sichtbarer Gedankenkette und Werkzeugnutzung. |
| **Phi-4 Reasoning / Plus** | 14B Argumentationsmodelle konkurrieren mit viel größeren Modellen. Offengewicht. |
| **GPT-OSS-120B** | OpenAIs offenes Gewicht mit CoT. Nahezu Parität mit o4-mini. Apache 2.0. |

### Bemerkenswerte Open-Source-Modelle

| Modell | Anbieter | Schlüsselangaben |
|:------|:---------|:-----------|
| **Qwen3-235B-A22B** | Alibaba | Flaggschiff MoE: Starke Argumentation/Code/mehrsprachig. Apache 2.0. Meist heruntergeladene Familie auf HuggingFace. |
| **Gemma 3** | Google | 270M bis 27B. Multimodal. 128K Kontext. 140+ Sprachen. |
| **OLMo 2/3** | Allen AI | Vollständig geöffnet (Daten, Code, Gewichte, Protokolle). OLMo 2 32B übertrifft GPT-3.5. Apache 2.0. |
| **SmolLM3-3B** | Gesicht umarmen | Übertrifft Llama-3.2-3B. Dual-Mode-Überlegung. 128K Kontext. |
| **Kimi K2** | Moonshot AI | 32B aktiv. Offengewicht. Maßgeschneidert für die Kodierung/agentische Verwendung. |
| **Llama 4 Scout** | Metadaten | 109B MoE/17B aktiv. 10M Token Kontext. Passt Single H100. |

### Code-Spezialisierte Modelle

| Modell | Schlüsselangaben |
|:------|:-----------|
| **Qwen3-Coder (480B-A35B)** | 69,6% SWE-Bench - Meilenstein für Open-Source-Codierung. 256K Kontext. Apache 2.0. |
| **Devstral 2 (123B)** | 72,2% SWE-Bank verifiziert. 7x kostengünstiger als Claude Sonnet. |
| **Codestral 25.01** | Mistrals Codemodell. 80+ Sprachen. Fill-in-the-Middle Unterstützung. |
| **DeepSeek-Coder-V2** | 236B MoE / 21B aktiv. 338 Programmiersprachen. |
| **Qwen 2.5-Coder** | 7B/32B. 92 Programmiersprachen. 88,4% HumanEval. Apache 2.0. |

### Grundlagenmodelle (Historische Referenz)

Diese Modelle etablierten Schlüsselkonzepte, sind aber für den praktischen Einsatz weitgehend abgelöst:

| Modell | Anbieter | Bedeutung |
|:------|:---------|:-------------|
| GLM-130B | Tsinghua | Offenes zweisprachiges Englisch/Chinesisch LLM (2023) |
| Falcon 180B | TII | Großes offenes generatives Modell (2023) |
| Mixtral 8x7B | Mistral AI | Wegweisende MoE-Architektur für offene Modelle (2023) |
| GPT-NeoX-20B | EleutherAI | Frühe offene autoregressive LLM |
| GPT-J-6B | EleutherAI | Frühes offenes kausales Sprachmodell |

---

## AI Content Detektoren
🔎

### Führende kommerzielle Detektoren

| Name | Genauigkeit | Hauptmerkmal | Link |
|:-----|:---------|:------------|:----:|
| **GPTZero** | 99 % behauptet | 10M+ Benutzer, #1 auf G2 (2025). Detects GPT-4/5, Gemini, Claude, Llama. Freie Stufe verfügbar. | [Website](https://gptzero.me) |
| **Originality.ai** | 98–100% (Peer-Review) | Konsequent am genauesten bewertet. Kombiniert KI-Erkennung + Plagiat + Faktenprüfung. Ab $ 14.95 / Monat. | [Website](https://originality.ai) |
| **Turnitin AI Detection** | 98%+ auf unmodifiziertem KI-Text | Dominant in der Wissenschaft. Start der AI-Bypasser-/Humanizer-Erkennung (Aug 2025). Institutionelle Lizenzierung. | [Website](https://www.turnitin.com/solutions/topics/ai-writing/) |
| **Copyleaks** | 99%+ behauptet | Enterprise Tool erkennt KI in mehr als 30 Sprachen. LMS Integrationen. | [Website](https://copyleaks.com) |
| **Winston AI** | 99,98 % beansprucht | OCR für gescannte Dokumente, AI Image/Deepfake Detection. 11 Sprachen. | [Website](https://gowinston.ai) |
| **Pangram Labs** | 99,3% (COLING 2025) | Höchste Punktzahl in COLING 2025 Shared Task. 100% TPR auf "humanisierten" Text. 97,7% gegnerische Robustheit. | [Website](https://www.pangram.com) |

### Freie und Forschungsdetektoren

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **Binoculars** | Open-Source-Forschungsdetektor mit Querperplexität zwischen zwei LLMs. | [arXiv](https://arxiv.org/abs/2401.12070) |
| **DetectGPT / Fast-DetectGPT** | Statistisches Verfahren zum Vergleich von Log-Wahrscheinlichkeiten von Originaltext vs. Störungen. | [arXiv](https://arxiv.org/abs/2301.11305) |
| **Openai Detector** | AI-Klassifikator zur Anzeige von AI-geschriebenem Text (OpenAI Detector Python Wrapper)  | [[GitHub]](https://github.com/promptslab/openai-detector) |
| **Sapling AI Detector** | Kostenloser browserbasierter Detektor (bis zu 2.000 Zeichen). 97% Genauigkeit in einigen Studien. | [Website](https://sapling.ai/) |
| **QuillBot AI Detector** | Kostenlos, keine Anmeldung erforderlich. | [Website](https://quillbot.com/ai-content-detector) |
| **Writer AI Content Detector** | Kostenloses Tool mit farbcodierten Ergebnissen. | [Website](https://writer.com/ai-content-detector/) |
| **ZeroGPT** | Beliebte freie Detektor in mehreren akademischen Studien ausgewertet. | [Website](https://www.zerogpt.com/) |

### Wasserzeichenansätze

| Name | Beschreibung | Link |
|:-----|:-----------|:----:|
| **SynthID (Google DeepMind)** | Wasserzeichen für ki-text, bilder und audio über statistische token-sampling. Wird in Google-Produkten eingesetzt. | [Website](https://deepmind.google/technologies/synthid/) |
| **OpenAI Text Watermarking** | Entwickelt, aber noch experimentell ab 2025. Forschung zeigt Fragilität Bedenken. | Experimentell |

**Wichtiger Vorbehalt:** Kein Detektor behauptet 100% Genauigkeit. Gemischter menschlicher / KI-Text bleibt am schwersten zu erkennen (50-70% Genauigkeit). Gegensätzliche Robustheit variiert stark. Der Markt für KI-Erkennung wird voraussichtlich von ~ 2,3 Mrd. USD (2025) auf 15 Mrd. USD bis 2035 wachsen.

---

## Bücher
📖

### Prompt Engineering

| Titel | Autor(en) | Herausgeber | Jahr |
|:------|:----------|:---------|:-----|
| **Prompt Engineering for LLMs** | John Berryman und Albert Ziegler | O'Reilly | 2024 |
| **Prompt Engineering for Generative AI** | James Phoenix und Mike Taylor | O'Reilly | 2024 |
| **Prompt Engineering for LLMs** | Thomas R. Caldwell | Unabhängig | 2025 |

### LLM Anwendungsentwicklung

| Titel | Autor(en) | Herausgeber | Jahr |
|:------|:----------|:---------|:-----|
| **AI Engineering: Building Applications with Foundation Models** | Chip Huyen | O'Reilly | 2025 |
| **Build a Large Language Model (From Scratch)** | Sebastian Raschka | Besatzung | 2024 |
| **Building LLMs for Production** | Louis-François Bouchard und Louie Peters | O'Reilly | 2024 |
| **LLM Engineer's Handbook** | Paul Iusztin und Maxime Labonne | Packung | 2024 |
| **The Hundred-Page Language Models Book** | Andriy Burkov | Selbstveröffentlichung | 2025 |

### KI-Agenten

| Titel | Autor(en) | Herausgeber | Jahr |
|:------|:----------|:---------|:-----|
| **Building Applications with AI Agents** | Michael Albada | O'Reilly | 2025 |
| **AI Agents and Applications** | Roberto Infante | Besatzung | 2025 |
| **AI Agents in Action** | Micheal Lanham | Besatzung | 2025 |

### Produktion, Zuverlässigkeit und Sicherheit

| Titel | Autor(en) | Herausgeber | Jahr |
|:------|:----------|:---------|:-----|
| **LLMs in Production** | Christopher Brousseau und Matthew Sharp | Besatzung | 2025 |
| **Building Reliable AI Systems** | Rush Shahani | Besatzung | 2025 |
| **The Developer's Playbook for LLM Security** | Steve Wilson | O'Reilly | 2024 |

---

## Kurse
👩‍🏫

### Kostenlose Kurzkurse

- [ChatGPT Prompt Engineering für Entwickler](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - Co-Taught von Andrew Ng und Isa Fulford von OpenAI. Der grundlegende Ausgangspunkt. (DeepLearning) AI
- [Aufbau von Systemen mit der ChatGPT API](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) Mehrstufiges LLM-Systemdesign für die Produktion. (DeepLearning) AI
- [KI-Agenten in LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) Agentische Datenflüsse mit Werkzeuggebrauch und Forschungsagenten. (DeepLearning) AI
- [Agentic RAG mit LlamaIndex aufbauen](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) — RAG Research Agent Construction. (DeepLearning) AI
- [Funktionen, Tools und Agenten mit LangChain](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) Funktion Calling und Agent Building. (DeepLearning) AI
- [Prompt Engineering für Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) — Visuelle Aufforderungstechniken. (DeepLearning) AI

### Universitäts- und Plattformkurse

- [Prompt Engineering Spezialisierung (Vanderbilt)](https://www.coursera.org/specializations/prompt-engineering) 3-Gänge-Serie von Dr. Jules Weißbedeckung grundlegend für fortgeschrittene PE. (Coursera)
- [Generative KI mit LLMs (DeepLearning.AI + AWS)](https://www.coursera.org/learn/generative-ai-with-llms) — LLM-Lebenszyklus, Transformatoren, RLHF, Einsatz. (Coursera)
- [Stanford CS336: Sprachmodellierung von Grund auf](https://cs336.stanford.edu/) - Bauen Sie ein LLM Ende-zu-Ende. (Stanford, 2024-2026)
- [MIT 6.S191: Einführung in Deep Learning](https://introtodeeplearning.com/) - Jährlicher Kurs einschließlich LLMs und generative AI. (MIT, 2024-2026)
- [Das komplette Prompt Engineering für AI Bootcamp](https://www.udemy.com/course/prompt-engineering-for-ai/) - Umfasst GPT-5, DSPy, LangGraph, Agentenarchitekturen. 58K+ Bewertungen. (Udemy, aktualisiert Februar 2026)

### Kostenlose Plattformkurse

- [Google Prompting Essentials](https://grow.google/prompting-essentials/) — 5-Schritt-Prompt-Design, Meta-Prompting, Gemini. Unter 6 Stunden.
- [Microsoft Azure AI Grundlagen: Generative AI](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/) Freier Lernpfad für LLMs, Prompts, Agenten, Azure OpenAI.
- [Hugging Face LLM Kurs](https://huggingface.co/learn/llm-course/chapter1/1) — Community-getriebener Kurs für Transformatoren, Feinabstimmung, Building Reasoning Modelle.
- [Hugging Face AI Agents Kurs](https://huggingface.co/learn) Agententheorie zum Üben. 100K + registrierte Studenten.

### Lernen Sie Prompting Kurse

- [ChatGPT für alle](https://learnprompting.org/courses/chatgpt-for-everyone)
- [Einführung in Prompt Engineering](https://learnprompting.org/courses/introduction_to_prompt_engineering)
- [Advanced Prompt Engineering](https://learnprompting.org/courses/advanced-prompt-engineering)
- [Einführung in Prompt Hacking](https://learnprompting.org/courses/intro-to-prompt-hacking)
- [Advanced Prompt Hacking](https://learnprompting.org/courses/advanced-prompt-hacking)
- [Einführung in Generative AI Agents für Business Professionals](https://learnprompting.org/courses/introduction-to-agents)
- [AI Sicherheit](https://learnprompting.org/courses/ai-safety)

---

## Tutorials und Guides
📚

### Offizielle Provider Guides

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Umfassend, einschließlich GPT-4.1/5 Aufforderung, Argumentationsmodelle, strukturierte Outputs, agentische Workflows. Laufend aktualisiert.
- [OpenAI GPT-4.1 Promping Guide](https://cookbook.openai.com/articles/gpt-4-1-prompting-guide) [2025] - Strukturiertes agentenähnliches promptes Design: Zielpersistenz, Werkzeugintegration, Langkontextverarbeitung.
- [Anthropische Prompt Engineering Übersicht](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) Iteratives Prompt Design, XML-Tags, Chain-of-Think, Rollenzuweisung. Einschließlich prompt generator.
- [Anthropic Claude 4 Best Practices](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices) [2025-2026] - Parallele Werkzeugausführung, Denkfähigkeiten, Bildverarbeitung.
- [Anthropic: Effektives Context Engineering für KI-Agenten](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) [2025] - Die Evolution von prompt Engineering zum Kontext Engineering: Agent State, Memory, Tools, MCP.
- [Google Gemini Prompting Strategien](https://ai.google.dev/docs/prompt_best_practices) Multimodale Aufforderung für Gemini über Vertex AI und AI Studio.
- [Microsoft Prompt Engineering in Azure AI Studio](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering) — Tool Calling, Funktionsdesign, Few-Shot Prompting, prompte Verkettung.

### Community und unabhängige Guides

- [Prompt Engineering Guide (DAIR.AI / promptingguide.ai)](https://www.promptingguide.ai/) Der umfassendste Open-Source-Guide. 18+ Techniken, modellspezifische Leitfäden, Forschungsarbeiten. 3M+ Lernende. Jetzt beinhaltet Context Engineering.
- [Learn Prompting (learnprompting.org)](https://learnprompting.org/) Strukturierte freie Plattform. Anfänger zu fortgeschrittenem PE, AI-Sicherheit, HackAPrompt-Wettbewerb.
- [IBM 2026 Leitfaden für Prompt Engineering](https://www.ibm.com/think/prompt-engineering) [2026] - Kuratierte Werkzeuge, Tutorials, reale Beispiele mit Python-Code.
- [Anthropische interaktive Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) — 9-Kapitel Jupyter Notebook Kurs mit praktischen Übungen.
- [Lilian Wengs Prompt Engineering Guide](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) [2023] - Hoch angesehener technischer Blog von OpenAI-Forscher.
- [Google Prompt Engineering Guide (68-seitiges PDF)](https://www.reddit.com/r/PromptEngineering/comments/1kggmh0/google_dropped_a_68page_prompt_engineering_guide/) [2025] - Internal-Style Best-Practice Guide für Zwillinge mit konkreten Mustern.
- [DigitalOcean: Prompt Engineering Best Practices](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices) [2025] - Aktualisierter Leitfaden, der Techniken zusammenfasst: Wenige Schüsse, Gedankenkette, Rollenaufforderung usw.
- [Aakash Gupta: Prompt Engineering im Jahr 2025](https://news.aakashg.com) [2025] - Praktischer Leitfaden mit Weisheit aus dem Versand von AI bei OpenAI, Shopify und Google.
- [Best Practices für promptes Engineering mit OpenAI API](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api) — OpenAIs einleitende Best Practices.
- [OpenAI Kochbuch](https://github.com/openai/openai-cookbook) Offizielle Rezepte für Funktionsaufrufe, RAG, Auswertung und komplexe Workflows.
- [Microsoft Prompt Engineering Docs](https://microsoft.github.io/prompt-engineering) - Microsofts offene prompte Engineering-Ressourcen.
- [DALLE Prompt Buch](https://dallery.gallery/the-dalle-2-prompt-book) — Visuelle Anleitung für Text-zu-Bild-Anforderung.
- [Beste 100+ stabile Diffusion Prompts](https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts) — Community-kuratierte Bilderzeugungsaufforderungen.
- [Vibe Engineering (Manning)](https://www.manning.com/books/vibe-engineering) — Buch von Tomasz Lelek & Artur Skowronski über das Erstellen von Software durch natürliche Sprachaufforderungen.

---

## Videos
🎥

- [Andrej Karpathy: "Deep Dive in LLMs" & "How I Use LLMs"](https://www.youtube.com/@AndrejKarpathy) [2024-2025] - Zwei der einflussreichsten KI-Videos von 2024-2025. Umfassender technischer Tiefgang gefolgt von praktischen Nutzungsmustern.
- [Karpathie: "Software in der Ära der KI" (YC AI Startup School)](https://karpathy.ai/) [2025] - Prägte "Vibe Codierung" (Feb 2025) und verfochten "Kontext Engineering" (Jun 2025).
- [Karpathie: Neuronale Netzwerke: Zero to Hero](https://www.youtube.com/@AndrejKarpathy) [2023–2024] — Vollständige Vorlesungsreihenaufbau von Backpropagation bis GPT.
- [3Blue1Brown: Neuronale Netzwerke](https://www.youtube.com/@3blue1brown) [Aktualisiert 2024] - Ikonische animierte visuelle Erklärungen von Transformatoren und Aufmerksamkeitsmechanismen. 7M+ Abonnenten.
- [AI erklärt](https://www.youtube.com/@aiexplained-official) [2024-2025] - Long-Form-Analyse Aufschlüsselung Papiere, Modellfähigkeiten und PE-Entwicklungen.
- [Sam Witteveen](https://www.youtube.com/@samwitteveen) [2024-2025] - Praktische Tutorials zu prompt Engineering, LangChain, RAG und Agenten.
- [Matthew Berman](https://www.youtube.com/@matthew_berman) [2024-2025] - Beliebter Kanal, der Modellveröffentlichungen und praktische LLM-Nutzung abdeckt. 600K+ Abonnenten.
- [DeepLearning.AI YouTube](https://www.youtube.com/@Deeplearningai) [2024-2026] - Strukturierte Lektionen, Kursvorschauen und Andrew Ng spricht über Agenten und KI-Karrieren.
- [Lex Fridman Podcast (KI Episoden)](https://www.youtube.com/@lexfridman) [2024–2025] — Langzeitinterviews mit Altman, Hinton, Amodei über LLMs, Aufforderung und Sicherheit.
- [ICSE 2025: AIware Prompt Engineering Tutorial](https://conf.researchr.org/details/icse-2025/icse-2025-tutorials/) [2025] - Konferenztutorial, das prompte Muster, Fragilität, Anti-Muster und Optimierungs-DSLs abdeckt.
- [CMU Advanced NLP 2022: Promping](https://youtube.com/watch?v=5ef83Wljm-M) - Grundlegende akademische Vorlesung über prompting Methoden.
- [ChatGPT: 5 Prompt Engineering Secrets für Anfänger](https://www.youtube.com/watch?v=2zg3V66-Fzs) - Zugängliches Intro für Anfänger.

---

## Gemeinschaften
🤝

### Discord-Server

- [Lernen Sie Promping](https://learnprompting.org/discord) 40.000+ Mitglieder. Größte PE Discord mit Kursen, Hackathons, HackAPrompt Wettbewerben.
- [PromptsLab Discord](https://discord.gg/m88xfYMbK6)  - Gemeinschaft
- [Midjournal](https://discord.gg/midjourney) 1M+ Mitglieder. Primärer Hub für Text-to-Image promptes Teilen.
- [OpenAI Discord](https://discord.gg/openai) Offizielle Community mit Kanälen für GPTs, Sora, DALL-E und API Hilfe.
- [Anthropische Zwietracht](https://discord.gg/anthropic) - Offizielle Claude-Community für KI-Entwicklungszusammenarbeit.
- [Hugging Face Discord](https://discord.gg/huggingface) — Modelldiskussionen, Bibliotheksunterstützung, Community-Events.
- [FlowGPT](https://flowgpt.com/) 33K+ Mitglieder. 100K + Aufforderungen über ChatGPT, DALL-E, Stable Diffusion, Claude.

### Reddit

- [r/PromptEngineering](https://reddit.com/r/PromptEngineering) - Dediziertes Subreddit für schnelle Handwerkstechniken und Diskussionen.
- [r/ChatGPT](https://reddit.com/r/ChatGPT) 10M+ Mitglieder. Primärer hub für chatgpt-benutzer und promptes teilen.
- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA) - Hochtechnische Community für den lokalen Betrieb von Open-Source-LMs.
- [r/ClaudeAI](https://reddit.com/r/ClaudeAI) — Claude Community von Anthropic: promptes Teilen, API-Tipps, Modellvergleiche.
- [r/MachineLearning](https://reddit.com/r/MachineLearning) — Akademisch orientierte ML-Forschungsdiskussionen.
- [r/OpenAI](https://reddit.com/r/OpenAI) — OpenAI Produkt- und API-Diskussionen.
- [r/StableDiffusion](https://reddit.com/r/StableDiffusion) 450K+ Mitglieder für AI Art Inputing und Workflows.
- [r/ChatGPTPromptGenius](https://reddit.com/r/ChatGPTPromptGenius) 35K+ Mitglieder teilen und verfeinern Eingabeaufforderungen.


### Foren und Plattformen

- [OpenAI Entwicklergemeinschaft](https://community.openai.com/) Offizielles Forum für API-Hilfe, Best Practices, Projekt-Sharing.
- [Hugging Face Gemeinschaft](https://huggingface.co/) - Hub für Open-Source-KI-Zusammenarbeit.
- [DeepLearning.AI Community](https://community.deeplearning.ai/) Forum für Lernende, die Kurse und KI-Karrieren diskutieren.
- [LessWrong](https://www.lesswrong.com/) - Ausführliche technische Beiträge zu KI-Fähigkeiten und Sicherheit.
- [AI Alignment Forum](https://www.alignmentforum.org/) — Spezielle Ausrichtung Forschungsdiskussionen.
- [CivitAI](https://civitai.com/) Generative AI-Erstellerplattform zum Teilen von Modellen, LoRAs und Eingabeaufforderungen.

### GitHub Organisationen

- [LangChain](https://github.com/langchain-ai) - Open-Source LLM App Framework. 100K+ Sterne.
- [Promptslab](https://github.com/promptslab)  — Generative Modelle | Prompt-Engineering | LLMs 
- [Gesicht umarmen](https://github.com/huggingface) Zentraler Hub: Transformatoren, Diffusoren, Datensätze, TRL.
- [DSPy (Stanford NLP)](https://github.com/stanfordnlp/dspy) Wachsende Community für systematische prompte Optimierung.
- [OpenAI](https://github.com/openai) Open-Source-Modelle, Benchmarks und Tools.

---

<!-- AUTORESEARCH-START -->
## Autonome Forschung & Selbstverbessernde Agenten
> Auto-Synced von [awesome-autoresearch](https://github.com/alvinunreal/awesome-autoresearch) · Zuletzt synchronisiert: 2026-10-03

### Allgemeine Nachfahren

- [Kayba-ai/rekursiv verbessern](https://github.com/kayba-ai/recursive-improve) Rekursives Selbstverbesserungs-Framework, bei dem Agenten Ausführungsspuren erfassen, Fehlermuster analysieren und gezielte Korrekturen mit Keep-or-Revert-Bewertung anwenden.
- [vukros/auto-Forschung](https://github.com/vukrosic/auto-research) - Docs-only-Kontrollebene für ein offenes autonomes KI-Forschungslabor - dateibasiertes Betriebsmodell für die Ausführung menschlicher Anweisungen und Agenten.
- [uditgoenka/autoresearch](https://github.com/uditgoenka/autoresearch) Claude Code Skill, der die Autoresearch in eine wiederverwendbare Schleife für Software, Dokumente, Sicherheit, Versand, Debugging und andere messbare Ziele verallgemeinert.
- [leo-lilinxiao/codex-autoresearch](https://github.com/leo-lilinxiao/codex-autoresearch) Codex-native Autoresearch-Fähigkeiten mit Unterstützung von Lebensläufen, Lektionen über Läufe hinweg, optionale parallele Experimente und modusspezifische Workflows.
- [junjunjunbong/research loop](https://github.com/junjunjunbong/research-loop) Autoresearch-style Agent Skill für Codex und Claude Code mit einem deterministischen Läufer, Plan-Hash-Genehmigung, isolierten Git-Worktrees, autoritativer metrischer Auswertung und einem reinen Append-Experiment-Ledger.
- [Xieyulai/Steer](https://github.com/xieyulai/steer) - Reguliertes Experiment-Framework, in dem Codierungsagenten Trainingscode bearbeiten und Runden laufen, während die Aufgabe, der Scorer und die Beweise festgelegt bleiben.
- [SeeleAI/Thoth](https://github.com/SeeleAI/Thoth) - Dashboard-erste Claude Code- und Codex-Laufzeit für Autoresearch mit dauerhaften Läufen, gesperrten Arbeitselementen, sichtbaren Ledgern und überprüfbaren Urteilen.
- [supratikpm/gemini-autoresearch](https://github.com/supratikpm/gemini-autoresearch) Gemini CLI Fertigkeit, die Autoresearch auf jedes messbare Ziel verallgemeinert. Gemini-native: verwendet Google Search Grounding als Live-Verifizierungsquelle innerhalb der Schleife, den echten Headless-Night-Modus über --yolo --prompt und den 1M-Token-Kontext. Funktioniert auch in Antigravitations-IDE über .agents/skills/.
- [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) — `pi` Erweiterung plus Dashboard für persistente Experiment-Loops, Live-Metriken, Konfidenz-Tracking und resumierbare Autorecherche-Sitzungen.
- [drivelineresearch/autoresearch-claude-code](https://github.com/drivelineresearch/autoresearch-claude-code) — Claude Code Plugin/Skill Port von `pi-autoresearch`, mit einem sauberen Experiment-Loop-Workflow und einer konkreten Biomechanik Fallstudie.
- [greyhaven-ai/autocontext](https://github.com/greyhaven-ai/autocontext) - Closed-Loop-Kontrollebene für wiederholte Agentenverbesserung mit Auswertung, anhaltendem Wissen, gestufter Validierung und optionaler Destillation zu günstigeren lokalen Laufzeiten.
- [Necmttn/ax](https://github.com/Necmttn/ax) Lokale Retro-Schleife für KI-Codierungsagenten: Erfasst Sitzungsspuren, verwandelt wiederholte Reibung in Vorschläge und verfolgt akzeptierte Fixes als Experimente.
- [jmilinovich/goal-md](https://github.com/jmilinovich/goal-md) Verallgemeinert autoresearch in eine `GOAL.md` Muster für Repos, bei denen der Agent zuerst eine messbare Fitnessfunktion aufbauen muss, bevor er optimieren kann.
- [james-s-tayler/fauler Entwickler](https://github.com/james-s-tayler/lazy-developer) - Claude Code Skill, der Autoresearch über eine priorisierte Abfolge von Optimierungszielen (Abdeckung, Testgeschwindigkeit, Build-Geschwindigkeit, Komplexität, LOC, Leistung) mit GOAL.md als Engine orchestriert. Unterstützt Standalone und Ralph Mode Multi-Instance Execution.
- [mutable-state-inc/autoresearch-at-home](https://github.com/mutable-state-inc/autoresearch-at-home) - Collaborative Fork der Upstream-Autoresearch, die Experimente mit Anspruch, gemeinsame Best-Config-Synchronisierung, Hypothesenaustausch und Schwarmkoordination über viele Single-GPU-Agenten hinweg hinzufügt.
- [zkarimi22/autoresearch-anything](https://github.com/zkarimi22/autoresearch-anything) Verallgemeinert Autoresearch **jede messbare Metrik** — Systemaufforderungen, API-Performance, Zielseiten, Testsuiten, Config-Tuning, SQL-Abfragen. "Wenn Sie es messen können, können Sie es optimieren."
- [Entrpi/autoresearch-überall](https://github.com/Entrpi/autoresearch-everywhere) - Plattformübergreifende Erweiterung, die die Hardware-Konfiguration automatisch erkennt und die Schleife startet. Die "Klebstoff und Verallgemeinerung" Hälfte der Autoforschung.
- [ShengranHu/ADAS](https://github.com/ShengranHu/ADAS) — **Automatisiertes Design von Agentensystemen** ICLR 2025. Meta-Agenten, die neuartige Agentenarchitekturen erfinden, indem sie sie in Code programmieren.
- [MaximeRobeyns / selbst_Verbesserung_Kodierung_Agent](https://github.com/MaximeRobeyns/self_improving_coding_agent) — **SICA**Selbstverbessernde Codierung Agent, der seine eigene Codebasis bearbeitet. ICLR 2025 Workshop Paper demonstriert Selbstverbesserung auf Gerüstebene bei Codierungsbenchmarks.
- [peterskoett/selbstverbessernder Wirkstoff](https://github.com/peterskoett/self-improving-agent) Alternative selbstverbessernde Agentenarchitektur mit Reflexions- und Meta-Lernzyklen.
- [Metauto-ai/HGM](https://github.com/metauto-ai/HGM) — **Huxley-Gödel-Maschine** für Codierungsagenten — wendet Selbstverbesserung auf SWE-Bench-Leistung durch Meta-Level-Optimierung.
- [gepa-ai/gepa](https://github.com/gepa-ai/gepa) — **GEPA (Genetic-Pareto)** — ICLR 2026 Oral. Reflektierende prompte Entwicklung, die RL (GRPO) bei Benchmarks übertrifft. Optimiert alle textuellen Parameter gegen jede Metrik mit Hilfe der natürlichen Sprachreflexion.
- [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) Automatisierte Fertigkeitserkennung für Codieragenten: Entwickelt wiederverwendbare Fähigkeiten und Eingabeaufforderungen aus fehlgeschlagenen Trajektorien gegen Benchmarks mit Unterstützung für Claude Code, Codex CLI, OpenCode, OpenHands und Goose.
- [MrTsepa/autoevolve](https://github.com/MrTsepa/autoevolve) GEPA-inspirierte Autorecherche für Selbstspiel: mutierte Codestrategien, bewerten Kopf-an-Kopf, bewerten mit Elo / Bradley-Terry, Verzweigung von der Pareto-Front. Agent liest Match-Spuren zu Zielmutationen. Funktioniert als Claude Code Skill.
- [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) - Agent swarm intelligence for autoresearch - erzeugt parallele GPU-Forschungsrichtungen, verteilt die Arbeit auf Agenten und aggregiert Ergebnisse.
- [Orchester-Forschung/AI-Forschung-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) - Umfassende Fertigkeitsbibliothek einschließlich Autoresearch-Orchestrierung mit Zwei-Schleifen-Architektur (innere Optimierung + äußere Synthese).
- [WecoAI/aideml](https://github.com/WecoAI/aideml) — **AIDE**: Tree-Search ML Engineering Agent, der die Modellleistung durch iterative Codegenerierung und -auswertung autonom verbessert.
- [weco.ai](https://weco.ai) — **Weco**Cloud-Plattform für AIDE mit Beobachtbarkeit, Experiment-Tracking und Managed Runs bringt die Autoresearch-Schleife in die Produktion.

### Research-Agent-Systeme

- [targeting-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) End-to-End-Forschungspipeline, die ein Thema in Literaturrecherche, Experimente, Analysen, Peer-Review und Papierentwürfe verwandelt; breiter als Autorecherche, aber eindeutig in der gleichen Linie.
- [OpenLAIR/Dr-Klaue](https://github.com/OpenLAIR/dr-claw) Open-Source-Forschungsarbeitsplatz mit sequentiellen Ideen-zu-Papier-Pipelines und integrierten Autoresearch-Toolpacks.
- [OpenRaiser / NanoResearch](https://github.com/OpenRaiser/NanoResearch) End-to-End autonome Forschungsmaschine, die Experimente plant, Code generiert, Jobs lokal oder auf SLURM ausführt, reale Ergebnisse analysiert und Papiere schreibt, die auf diesen Ergebnissen basieren.
- [kaust-ark/ARK](https://github.com/kaust-ark/ARK) — **ARK (Automatic Research Kit)**: Idee + Veranstaltungsort → Papierpipeline orchestriert 6 Agenten - Vorschlagsanalyse, Literatursuche, Slurm-Experimente, LaTeX-Entwurf, iterative Peer Review. Angesteuert über CLI, Web-Dashboard oder Telegramm.
- [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) Markdown-erste Forschungsworkflows für Claude Code und andere Agenten, die sich auf autonome Literaturrecherche, Experimente, Papier-Iteration und modellübergreifende Kritik konzentrieren.
- [skyllwt/AutoSci](https://github.com/skyllwt/AutoSci) Wiki-zentrierte Full-Lifecycle-Forschungsplattform, die auf Claude Code basiert und Karpathys LLM-Wiki-Vision realisiert. 20+ Fähigkeiten decken die volle Schleife ab: ingest → ideate → novelty check → experiment design / run / eval → paper writing. Forschungsstaat lebt in einem strukturierten Wissenswiki mit einem interaktiven Graphen.
- [Sibyl-Research-Team/AutoResearch-SibylSystem](https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem) Vollständig autonomer KI-Wissenschaftler, der auf Claude Code aufbaut, mit expliziter AutoResearch-Linie, Multi-Agenten-Forschungsiteration, GPU-Experimentausführung und einer sich selbst entwickelnden äußeren Schleife.
- [wjc2830/Easy-AutoResearch-for-DeepLearning](https://github.com/wjc2830/Easy-AutoResearch-for-DeepLearning) - Claude Code-Fähigkeit, die eine Autoresearch-Stil, Mensch-gated Deep-Learning-Schleife über sechs Rollen, versionierte Experimente und evidenzgeprüfte Abschluss läuft.
- [eimenhmdt/autoresearcher](https://github.com/eimenhmdt/autoresearcher) Frühes Open-Source-Paket zur Automatisierung wissenschaftlicher Arbeitsabläufe, das sich derzeit auf die Generierung von Literaturreviews mit dem Ziel einer breiteren autonomen Forschung konzentriert.
- [Hyperspaceai/Agi](https://github.com/hyperspaceai/agi) Verteiltes, Peer-to-Peer-Forschungsnetzwerk, in dem autonome Agenten Experimente durchführen, Klatschbefunde durchführen, CRDT-Bestenlisten verwalten und Ergebnisse für GitHub in mehreren Forschungsdomänen archivieren.
- [Human-Agent-Gesellschaft/CORAL](https://github.com/Human-Agent-Society/CORAL) — **KORRE**Autonome Multiagenten-Evolution für eine offene Entdeckung ()[arXiv:2604.01658](https://arxiv.org/abs/2604.01658). Langlaufende Agenten mit gemeinsamem persistentem Gedächtnis, asynchroner Ausführung und Herzschlag-basierten Interventionen; SOTA auf 10 mathematischen / algorithmischen / Systemaufgaben.
- [SakanaAI/AI-Wissenschaftler](https://github.com/SakanaAI/AI-Scientist) — **Der AI Scientist**Erstes umfassendes System zur vollautomatischen wissenschaftlichen Entdeckung. Von der Ideengenerierung bis zum Papierschreiben mit minimaler menschlicher Aufsicht.
- [SakanaAI/AI-Wissenschaftler-v2](https://github.com/SakanaAI/AI-Scientist-v2) - Automatisierte wissenschaftliche Entdeckung auf Workshop-Ebene durch agentische Baumsuche. Entfernt die Abhängigkeit von Vorlagen von v1, verallgemeinert sich über Forschungsdomänen hinweg.
- [AweAI-Team/AiScientist](https://github.com/AweAI-Team/AiScientist) — **AiScientist**Langhorizon-ML-Forschungslabor mit hierarchischer Orchestrierung und File-as-Bus-Koordination - Workspace-Dateien fungieren als dauerhaftes Aufzeichnungssystem. Steuert autonome Papierreproduktion (PaperBench) und MLE-Bench-Iterationsschleifen im Wettbewerbsstil unter festen Rechen- / Zeitbudgets.[arXiv 2604.13018](https://arxiv.org/abs/2604.13018))
- [HKUDS/AI-Forscher](https://github.com/HKUDS/AI-Researcher) NeurIPS 2025 Papier. Vollständige End-to-End-Forschungsautomatisierung: Hypothese → Experimente → Manuskript → Peer-Review. Produktionsversion am [novix.science](https://novix.science/chat).
- [openags/Auto-Research](https://github.com/openags/Auto-Research) — **OpenAGs**Orchestriert ein Team von KI-Agenten über den gesamten Forschungslebenszyklus - Lit Review, Hypothesengenerierung, Experimente, Manuskriptschreiben und Peer Review.
- [SamuelSchmidgall/AgentLabor](https://github.com/SamuelSchmidgall/AgentLaboratory) - Ende-zu-Ende autonomer Forschungsworkflow: Idee → Literaturrecherche → Experimente → Bericht. Unterstützt sowohl autonome als auch Co-Pilot-Modi.
- [AgentRxiv](https://agentrxiv.github.io/) - Kollaboratives autonomes Forschungs-Framework, bei dem Agentenlabors einen Preprint-Server gemeinsam nutzen, um auf der Arbeit des anderen iterativ aufzubauen.
- [JinheonBaek/ResearchAgent](https://github.com/JinheonBaek/ResearchAgent) Iterative Forschung Ideengenerierung über wissenschaftliche Literatur mit LLMs. Multi-Agent Review und Feedback Loops.
- [du-nlp-lab/MLR-Copilot](https://github.com/du-nlp-lab/MLR-Copilot) - Autonomes ML-Forschungsrahmenwerk - generiert Ideen, implementiert Experimente und analysiert Ergebnisse.
- [MASWorks/ML-Agent](https://github.com/MASWorks/ML-Agent) - Verstärkung von LLM-Agenten für autonomes ML-Engineering. Lernt aus Versuch und Irrtum, um die Modellleistung zu verbessern.
- [PouriaRouzrokh/LatteReview](https://github.com/PouriaRouzrokh/LatteReview) Low-Code Python Paket für **Automatisierte systematische Literaturrecherche** über AI-powered Agenten.
- [LitLLM/LitLLM](https://github.com/LitLLM/LitLLM) - KI-gestützter Literaturrechercheassistent mit RAG für genaue, gut strukturierte verwandte Arbeitsabschnitte im akademischen Schreiben.
- [Agentenlaboratorium](https://agentlaboratory.github.io/) — Drei-Phasen-Forschungspipeline: Literature Review → Experimentation → Report Writing, mit spezialisierten Agenten für jede Phase.
- [happyhappy-jun/writing-driven-autoresearch](https://github.com/happyhappy-jun/writing-driven-autoresearch) - Autoresearch-Stil-Geschirr, das ein einsendebares Papier von der ersten Minute an hält und jedes Experiment aus den Ansprüchen in diesem Entwurf antreibt, indem es Modifizierung → Maßnahme → Verifizierung → Überarbeitung durchführt. 1. Platz am [Ralphthon@ICML 2026](https://luma.com/hjuo7auc) autonomer Forschungs-Hackathon.
- [AutoResearch-Fabrik/Agon](https://github.com/AutoResearch-Factory/Agon) - End-to-End-Forschungsorchestrator, der auf einem Eckpfeilerprinzip aufgebaut ist, Prompt Economy (wiederverwendbare Schleifen, keine einmaligen Eingabeaufforderungen), plus fünf unterstützende Regeln; führt Wissenschaftler / Coder / Auditor-Schleifen in 10+ Disziplinen durch, die gleiche Wiederverwendbare Schleifenlinie wie Autoresearch, aber skaliert auf vollständige Forschungsprogramme.

### Platform Ports & Hardware Forks

- [gianfrancopiana/openclaw-autoresearch](https://github.com/gianfrancopiana/openclaw-autoresearch) - OpenClaw-Port von pi-autoresearch; autonome Experimentierschleife für jedes Optimierungsziel mit statistischer Konfidenzbewertung.
- [miolini/autoresearch-macos](https://github.com/miolini/autoresearch-macos) - Weit verbreiteter macOS-Fork, der Upstream-Autoresearch für Apple Silicon / MPS anpasst und gleichzeitig die ursprüngliche Schleifenform beibehält.
- [trevin-creator/autoresearch-mlx](https://github.com/trevin-creator/autoresearch-mlx) - MLX-nativer Apple Silicon Port, der das vorgelagerte Fixed-Budget hält `val_bpb` Schleife, während die PyTorch/CUDA-Abhängigkeit vollständig entfernt wird.
- [jsegov/autoresearch-win-rtx](https://github.com/jsegov/autoresearch-win-rtx) Windows-native RTX-Fork konzentriert sich auf NVIDIA-GPUs für Verbraucher mit expliziten VRAM-Etagen und einem praktischen Desktop-Setup-Pfad.
- [iii-hq/n-autoresearch](https://github.com/iii-hq/n-autoresearch) Multi-GPU-Autoresearch-Infrastruktur mit strukturiertem Experiment-Tracking, adaptiver Suchstrategie, Crash-Recovery und abfragbarer Orchestrierung rund um den Klassiker `train.py` Schleife.
- [lucasgelfond/autoresearch-webgpu](https://github.com/lucasgelfond/autoresearch-webgpu) Browser / WebGPU-Port, mit dem Agenten Trainingscode generieren, Experimente im Browser ausführen und Ergebnisse ohne Python-Setup in die Schleife zurückführen können.
- [tonitangpotato/autoresearch engram](https://github.com/tonitangpotato/autoresearch-engram) Gabel mit **Persistentes kognitives Gedächtnis** — frequenzgewichtetes Abrufen von sitzungsübergreifendem Wissen für eine verbesserte Experimentkontinuität.
- [Colab/Kaggle T4-Port](https://github.com/karpathy/autoresearch/issues/208) - Passt Autoresearch für kostenlose T4-GPUs (Google Colab / Kaggle) mit null Kosten und null lokaler Einrichtung an. Wichtige Änderungen: Flash Attention 3 → PyTorch SDPA, entfernt H100-only-Kernelabhängigkeit.
- [ArmanJR-Labor/Autoautorensuche](https://github.com/ArmanJR-Lab/autoautoresearch) Jetson AGX Orin Port mit einem **Direktor** - eine Go-Binärdatei, die als "kreativer Direktor" fungiert und Neuheiten (Arxiv-Papiere + DeepSeek Reasoner) in die Schleife einführt, um lokalen Minima zu entkommen. Beinhaltet Multi-Experiment-Vergleich (Baseline vs Director-guided) mit detaillierter Stall-Analyse.

### Domänenspezifische Anpassungen

- [mattprusak/autoresearch geneealogy](https://github.com/mattprusak/autoresearch-genealogy) - Wendet das Autorecherche-Muster auf die Genealogie an und verwendet strukturierte Eingabeaufforderungen, Archivleitfäden, Quellenüberprüfungen und Gewölbe-Workflows, um die Familiengeschichtenforschung iterativ zu erweitern und zu verifizieren.
- [ArchishmanSengupta/Autovoiceevals](https://github.com/ArchishmanSengupta/autovoiceevals) Verwendet gegnerische Anrufer sowie sofortige Änderungen, um Voice AI-Agenten in Vapi, Smallest AI und ElevenLabs zu härten.
- [chrisworsey55/atlas-gic](https://github.com/chrisworsey55/atlas-gic) - Wendet die Autoresearch-Kee-or-Revert-Schleife auf Handelsagenten an, optimiert Eingabeaufforderungen und Portfolio-Orchestrierung gegen rollende Sharpe-Ratio anstelle von Modellverlust.
- [RightNow-AI/Autokern](https://github.com/RightNow-AI/autokernel) - Wendet die Autoresearch-Schleife auf die GPU-Kerneloptimierung an: Profilengpässe, Bearbeiten eines Kernels, Benchmark, Keep or Revert, Repeat.
- [ElliotXie/Autozym](https://github.com/ElliotXie/autozyme) Multi-Agent-Framework, das die Autoresearch Keep-or-Revert-Schleife auf die CPU-seitige wissenschaftliche Software anwendet: Profilieren Sie eine Zielfunktion, generieren Sie einen Optimierungskandidaten, Benchmark für die Geschwindigkeit bei Beibehaltung der ursprünglichen Ausgaben, Keep oder Revert, wiederholen Sie.
- [Agent-Analytics/autoresearch-growth](https://github.com/Agent-Analytics/autoresearch-growth) - Wendet Autoresearch auf Landing-Page-Positionierung und A / B-Testkandidaten an, wobei Analyse-Snapshots und gemessene Experimentergebnisse verwendet werden, um nachfolgende Runden zu erstellen.
- [Rkcr7/autoresearch-sudoku](https://github.com/Rkcr7/autoresearch-sudoku) - Verbesserter Autoresearch-Workflow, bei dem ein KI-Agent einen Rust-Sudoku-Solver iterativ umschreibt und benchmarket, was letztendlich führende, von Menschen gebaute Solver bei harten Benchmark-Sets schlägt.
- [jeongph/autospec](https://github.com/jeongph/autospec) Lesen Sie natürlichsprachige Geschäftsregeln und erstellen Sie autonom einen Spring Boot-Service mit Tests über die Keep-or-Revert-Schleife. Bewertet mit Gradle Build + JUnit XML. 119-Zeilen-Skelett auf 950 Zeilen in 5 Zyklen.
- [Vlasenkoalexey/tpu_Leistung_Autorecherche_Wiki](https://github.com/vlasenkoalexey/tpu_performance_autoresearch_wiki) - Wendet die Autoresearch-Kee-or-Revert-Schleife auf die TPU-Modellleistung (MFU / Tokens-per-sec) auf v6e-Hardware an: Profile laufen jeweils über einen XProf MCP-Server, nehmen eine Modellcodeänderung pro Experiment vor und halten oder kehren gegen gemessene MFU zurück. Kombiniert die Schleife mit einem LLM-Wiki im Karpathy-Stil für Domänenwissen und Per-Experiment-Optimierungsspuren; enthält Llama3-8B- und Qwen3-8B-Fallstudien über JAX- und Fackelspuren.

### Evaluierung & Benchmarks

- [snap-stanford/MLAgentBench](https://github.com/snap-stanford/MLAgentBench) Benchmark-Suite zur Bewertung von KI-Agenten bei ML-Experimentieraufgaben. 13 Aufgaben von CIFAR-10 bis BabyLM.
- [OpenAI/Mle-Bench](https://github.com/openai/mle-bench) - OpenAIs Benchmark zur Messung der Leistung von KI-Agenten bei ML Engineering.
- [chchenhui/mlrbench](https://github.com/chchenhui/mlrbench) MLR-Bench: Bewertung von KI-Agenten in der offenen ML-Forschung. 201 Aufgaben aus NeurIPS/ICLR/ICML Workshops.
- [gersteinlab/ML-Bench](https://github.com/gersteinlab/ML-Bench) Bewertet LLMs und Agenten für ML-Aufgaben auf Repository-Level-Code.
- [THUDM/AgentBench](https://github.com/THUDM/AgentBench) Umfassender Benchmark für die LLM-as-Agent-Bewertung in 8 verschiedenen Umgebungen. ICLR 2024.

### Verwandte Ressourcen

- [ai-agents-2030/awesome-deep-research-agent](https://github.com/ai-agents-2030/awesome-deep-research-agent) - Kuratierte Liste von Deep Research Agent Papers und Systemen.
- [YoungDubbyDu/LLM-Agent-Optimierung](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) - Papers on LLM Agent Optimierungsmethoden.
- [VoltAgent/awesome-ai-agent-papers](https://github.com/VoltAgent/awesome-ai-agent-papers) Kuratierte KI-Agentenpapiere von 2026 - Agent Engineering, Speicher, Auswertung, Workflows und autonome Systeme.
- [masamasa59/ai-agent-papers](https://github.com/masamasa59/ai-agent-papers) - AI Agent Research Papers werden zweiwöchentlich über automatisierte Arxiv-Suche mit kuratierter Auswahl aktualisiert.
- [tmgthb/Autonome Wirkstoffe](https://github.com/tmgthb/Autonomous-Agents) — Autonome Agenten Forschungspapiere, täglich aktualisiert.
- [HKUST-KnowComp/Awesome-LLM-Scientific](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — EMNLP 2025 Umfrage über LLMs in der wissenschaftlichen Entdeckung.
- [openags/Awesome-AI-Scientist-Papers](https://github.com/openags/Awesome-AI-Scientist-Papers) — Sammlung von AI Scientist / Robot Scientist Papiere.
- [agenticscience.github.io](https://agenticscience.github.io/) - Umfrage: "Von KI für die Wissenschaft zu Agentic Science: Eine Umfrage über autonome wissenschaftliche Entdeckung."
- [dspy.ai/GEPA](https://dspy.ai/api/optimizers/GEPA/overview/) DSPy-Integration von GEPA Reflexive Prompt Optimierer für zusammengesetzte KI-Systeme.
- [OpenAI Cookbook: Selbstentwickelnde Agenten](https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining) - Kochbuch für autonome Agenten Umschulung mit GEPA-Stil reflektierende Evolution.
- [WecoAI/awesome authoresearch](https://github.com/WecoAI/awesome-autoresearch) - Kuratierte Liste von AutoResearch-Anwendungsfällen mit überprüfbaren Traces und Fortschrittsdiagrammen, geordnet nach Domänen (LLM-Training, GPU-Kernel, Voice Agents, Handel usw.).

<!-- AUTORESEARCH-END -->

---

## Wie man einen Beitrag leistet

Wir freuen uns über Beiträge zu dieser Liste! Bevor Sie einen Beitrag leisten, nehmen Sie sich bitte einen Moment Zeit, um unsere [Beitragsleitlinien](contributing.md)Diese Leitlinien werden dazu beitragen, dass Ihre Beiträge mit unseren Zielen übereinstimmen und unseren Qualitäts- und Relevanzstandards entsprechen.

**Was wir suchen:**
- Neue hochwertige Papiere, Tools oder Ressourcen mit einer kurzen Beschreibung, warum sie wichtig sind
- Updates zu bestehenden Einträgen (gebrochene Links, veraltete Informationen)
- Korrekturen zu Sternzahlen, Preisen oder Modelldetails
- Übersetzungen und Verbesserungen der Zugänglichkeit

**Qualitätsstandards:**
- Alle Tools sollten aktiv gewartet werden (aktualisiert innerhalb der letzten 6 Monate)
- Papiere sollten von Peer-Review-Locations stammen oder signifikante Community-Adoption haben
- Datensätze sollten öffentlich zugänglich sein
- Bitte geben Sie eine einzeilige Beschreibung an, in der erläutert wird, warum die Ressource wertvoll ist

Vielen Dank für Ihr Interesse, zu diesem Projekt beizutragen!

<a href="https://github.com/promptslab/Awesome-Prompt-Engineering/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=promptslab/Awesome-Prompt-Engineering" />
</a>

---

<p align="center">
  <sub>gepflegt durch <a href="https://promptslab.github.io">PromptsLab</a> · <a href="https://github.com/promptslab/Awesome-Prompt-Engineering">Star dieses Repo</a> Wenn Sie es nützlich finden!</sub>
</p>
