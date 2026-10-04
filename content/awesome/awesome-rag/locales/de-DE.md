# 😎 Ausgewählte Ressourcen zu Retrieval-Augmented Generation (RAG)
[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Danielskry/Awesome-RAG) [![Awesome-RAG Agent Plugin](https://img.shields.io/badge/Agent_Plugin-Available-blueviolet)](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)

Eine kuratierte Übersicht über Tools, Frameworks, Techniken und Lernmaterialien zum Aufbau von Retrieval-Augmented-Generation-(RAG-)Systemen. Dieses Repository katalogisiert das RAG-Ökosystem und verlinkt maßgebliche Quellen, Tutorials und Implementierungen, damit Sie RAG-Anwendungen erkunden und erstellen können.

Auch als [Agent-Plugin verfügbar](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin) für VS Code, GitHub Copilot CLI und Claude Code.

## Überblick

**Retrieval-Augmented Generation (RAG)** ist eine ausgefeilte Technik der generativen KI, die Large Language Models (LLMs) erweitert, indem sie während der Generierung dynamisch relevanten Kontext aus externen Wissensquellen abruft und einbezieht. Anders als herkömmliche LLMs, die ausschließlich auf vortrainiertem Wissen beruhen, können RAG-Systeme auf aktuelle, domänenspezifische oder proprietäre Informationen zugreifen. Das verbessert die Genauigkeit deutlich, verringert Halluzinationen und ermöglicht die Integration von Wissen in Echtzeit.

### Wichtigste Vorteile

- **Weniger Halluzinationen**: Verankert Antworten in abgerufenen Fakten
- **Anpassung an die Domäne**: Ermöglicht LLMs den Einsatz von Fachwissen ohne Fine-Tuning
- **Aktualisierungen in Echtzeit**: Bindet aktuelle Informationen ohne erneutes Modelltraining ein
- **Kosteneffizienz**: Wirtschaftlicher als Fine-Tuning für domänenspezifische Aufgaben
- **Transparenz**: Gibt Quellen für generierte Inhalte an
- **Datenschutz und Sicherheit**: Hält sensible Daten in privaten Wissensdatenbanken

## Inhalt

- [ℹ️ Allgemeine Informationen zu RAG](#ℹ%EF%B8%8F-general-information-on-rag)
- [🏗️ Architekturmuster](#%EF%B8%8F-architecture-patterns)
- [🎯 Fortgeschrittene Ansätze](#-advanced-approaches)
- [🧰 Frameworks für RAG](#-frameworks-that-facilitate-rag)
- [🐍 Python-Ökosystem für RAG](#-python-ecosystem-for-rag)
- [🛠️ Techniken](#-techniques)
- [📊 Metriken und Evaluation](#-metrics--evaluation)
- [💾 Datenbanken](#-databases)
- [🔌 Plattformspezifische RAG-Implementierungen](#-platform-specific-rag-implementations)
- [🚀 Überlegungen für den Produktivbetrieb](#-production-considerations)
- [💡 Bewährte Vorgehensweisen](#-best-practices)

## ℹ️ Allgemeine Informationen zu RAG

RAG adressiert eine grundlegende Einschränkung von LLMs: ihren statischen Wissensstand und die fehlende Möglichkeit, auf externe Informationen zuzugreifen. Herkömmliche RAG-Implementierungen ergänzen LLM-Prompts über eine Retrieval-Pipeline um kontextrelevante Dokumente aus einer Wissensdatenbank. Bei einer Frage zu Renovierungsmaterialien für ein bestimmtes Haus kennt ein LLM beispielsweise möglicherweise allgemeine Renovierungsregeln, aber keine Details zu diesem Objekt. Ein RAG-System kann passende Dokumente (etwa Baupläne, Materialspezifikationen und örtliche Bauvorschriften) abrufen und so eine genaue, kontextbezogene Antwort liefern.

### Ressourcen zur Implementierung

#### Python-Tutorials und Beispiele

- Vollständige grundlegende [RAG-Implementierung in Python](https://github.com/Danielskry/LangChain-Chroma-RAG-demo-2024): Durchgängiges RAG-Beispiel mit LangChain und Chroma
- [LangChain RAG Tutorial](https://python.langchain.com/docs/use_cases/question_answering/): Umfassende Anleitung zum Erstellen von RAG-Anwendungen
- [LlamaIndex RAG Tutorial](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/): Einstieg in LlamaIndex für RAG
- [Haystack RAG Pipeline](https://docs.haystack.deepset.ai/docs/retrieval-augmented-generation): Erstellen von RAG-Pipelines mit Haystack
- [RAG Techniques](https://github.com/NirDiamant/RAG_Techniques): Umfassende Open-Source-Sammlung fortgeschrittener Retrieval-Augmented-Generation-Techniken als ausführbare Jupyter-Notebooks.
- [RAG Interview System](https://github.com/ather-techie/rag-interview-system): RAG-gestütztes System zur Vorbereitung auf Vorstellungsgespräche mit 418 kuratierten Frage-Antwort-Paaren (Grundlagen bis Fortgeschrittene), die 29 RAG-Architekturmuster abdecken.

- [Search with Jev and Milvus](https://github.com/milvus-io/bootcamp/tree/master/bootcamp/RAG/search_with_jev): Neun ausführbare Python-Notebooks, die Gemini-Embeddings, Milvus-Retrieval und Jev-Bewertungen für Reranking, Kontextfilterung, Abbruch der Suche, Routing, Wiederverwendung des Caches, Kuratierung, Schutzmechanismen und Evaluierung kombinieren.

#### Produktion und bewährte Vorgehensweisen

- [Production RAG patterns and best practices](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): Produktionsreife Strategien zur RAG-Optimierung
- [LangChain Production Guide](https://python.langchain.com/docs/production/): Bereitstellen von LangChain-Anwendungen im Produktivbetrieb
- [Python Async Best Practices](https://docs.python.org/3/library/asyncio-dev.html): Effizientes Schreiben asynchronen Python-Codes für KI-Anwendungen

## 🏗️ Architekturmuster

RAG-Systeme können je nach Anforderungen mit verschiedenen Mustern entworfen werden:

- **Naive RAG**: Einfache Abruf-und-Generierungs-Pipeline ohne Optimierung
- **Advanced RAG**: Bezieht Query-Rewriting, Reranking und Kontextkomprimierung ein
- **Modular RAG**: Kombinierbare Komponenten für Retrieval, Ranking und Generierung
- **Agentic RAG**: Von LLMs gesteuerte Agenten, die dynamisch über Retrieval entscheiden
- **Self-RAG**: Modelle, die die Retrieval-Qualität selbst reflektieren und Strategien anpassen
- **Graph RAG**: Nutzt Wissensgraphen für den strukturierten Informationsabruf
- **Reasoning-Based RAG**: Nutzt mehrstufiges LLM-Reasoning, um den Abruf zu planen, zu navigieren und auszuführen

## 🎯 Fortgeschrittene Ansätze

RAG-Implementierungen reichen vom einfachen Abruf von Dokumenten bis zu fortgeschrittenen Techniken mit iterativen Feedbackschleifen, Multi-Agenten-Systemen und domänenspezifischen Erweiterungen. Zu den modernen Ansätzen gehören:

- [Vision-RAG](https://www.youtube.com/watch?v=npkp4mSweEg): Bettet ganze Seiten als Bilder ein, sodass Vision-Modelle direkt schlussfolgern können, ohne Text-RAG zu parsen.
- [Cache-Augmented Generation (CAG)](https://medium.com/@ronantech/cache-augmented-generation-cag-in-llms-a-step-by-step-tutorial-6ac35d415eec): Lädt relevante Dokumente vorab in den Modellkontext und speichert den Inferenzzustand (Key-Value-Cache, KV-Cache).
- [Agentic RAG](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/): Auch als Retrieval-Agenten bekannt; sie können Entscheidungen über Suchprozesse treffen.
- [A-RAG](https://github.com/Ayanami0730/arag): Agentisches RAG mit hierarchischen Retrieval-Schnittstellen (Schlüsselwort-, semantische und Chunk-Ebene), über die LLM-Agenten selbstständig mit unterschiedlicher Granularität suchen und Inhalte abrufen können. ([Paper](https://arxiv.org/abs/2602.03442))
- [Corrective RAG](https://arxiv.org/pdf/2401.15884.pdf) (CRAG): Methoden, um abgerufene Informationen vor der Einbindung in LLM-Antworten zu korrigieren oder zu verfeinern.
- [Retrieval-Augmented Fine-Tuning](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/raft-a-new-way-to-teach-llms-to-be-better-at-rag/ba-p/4084674) (RAFT): Techniken zur gezielten Feinabstimmung von LLMs für verbesserte Retrieval- und Generierungsaufgaben.
- [Self Reflective RAG](https://selfrag.github.io/): Modelle, die Retrieval-Strategien dynamisch anhand von Leistungsfeedback anpassen.
- [RAG Fusion](https://arxiv.org/abs/2402.03367): Techniken, die mehrere Retrieval-Methoden kombinieren, um den Kontext besser zu integrieren.
- [Temporal Augmented Retrieval](https://adam-rida.medium.com/temporal-augmented-retrieval-tar-dynamic-rag-ad737506dfcc) (TAR): Berücksichtigt zeitkritische Daten beim Retrieval.
- [Plan-then-RAG](https://arxiv.org/abs/2406.12430) (PlanRAG): Strategien mit einer Planungsphase vor der RAG-Ausführung bei komplexen Aufgaben.
- [GraphRAG](https://github.com/microsoft/graphrag): Ein strukturierter Ansatz mit Wissensgraphen für eine bessere Kontextintegration und Schlussfolgerung.
- [Code-Graph-RAG](https://github.com/vitali87/code-graph-rag): Ein Knowledge-Graph-RAG-System zur Analyse mehrsprachiger Codebasen.
- [FLARE](https://medium.com/etoai/better-rag-with-active-retrieval-augmented-generation-flare-3b66646e2a9f) - Ein Ansatz, der aktive Retrieval-Augmented Generation einsetzt, um die Antwortqualität zu verbessern.
- [GNN-RAG](https://github.com/cmavro/GNN-RAG): Graph-neuronales Retrieval für das Reasoning großer Sprachmodelle.
- [Multimodal RAG](https://developer.nvidia.com/blog/an-easy-introduction-to-multimodal-retrieval-augmented-generation/): Erweitert RAG auf mehrere Modalitäten wie Text, Bilder und Audio.
- [VideoRAG](https://arxiv.org/abs/2501.05874): Erweitert RAG mithilfe großer Video-Sprachmodelle (LVLMs) auf Videos, um visuelle und textuelle Inhalte für die multimodale Generierung abzurufen und zu integrieren.
- [REFRAG](https://arxiv.org/pdf/2509.01092): Optimiert das RAG-Decoding, indem abgerufener Kontext vor der Generierung in Embeddings komprimiert wird. So sinkt die Latenz bei gleichbleibender Ausgabequalität.
- [InstructRAG](https://github.com/weizhepei/InstructRAG): Verbessert die Retrieval- und Generierungsqualität von RAG-Systemen durch instruktionsbasiertes Fine-Tuning mit selbst synthetisierten Begründungen.
- [PageIndex](https://github.com/VectifyAI/PageIndex): Vektorloses, reasoning-basiertes RAG-Framework: Es erstellt hierarchische Dokumentbäume und sucht darin LLM-gestützt statt über Embeddings und Vektorähnlichkeit. Chunking und Vektordatenbanken entfallen; zugleich ermöglicht es erklärbares, kontextbezogenes Retrieval für komplexe Fachdokumente.

## 🧰 Frameworks für RAG

- [Haystack](https://github.com/deepset-ai/haystack): LLM-Orchestrierungsframework zum Erstellen anpassbarer, produktionsreifer LLM-Anwendungen.
- [LangChain](https://python.langchain.com/docs/modules/data_connection/): Universelles Framework für die Arbeit mit LLMs.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel): Ein SDK von Microsoft zur Entwicklung generativer KI-Anwendungen.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): Framework, das benutzerdefinierte Datenquellen mit LLMs verbindet.
- [Dify](https://github.com/langgenius/dify): Open-Source-Plattform zur Entwicklung von LLM-Anwendungen.
- [Verba](https://github.com/weaviate/Verba): Sofort einsatzbereite Open-Source-Anwendung für RAG.
- [Mastra](https://github.com/mastra-ai/mastra): TypeScript-Framework zum Erstellen von KI-Anwendungen.
- [Letta](https://github.com/letta-ai/letta): Open-Source-Framework zum Erstellen zustandsbehafteter LLM-Anwendungen.
- [Flowise](https://github.com/FlowiseAI/Flowise): Drag-and-drop-Oberfläche zum Erstellen maßgeschneiderter LLM-Abläufe.
- [Kreuzberg](https://github.com/kreuzberg-dev/kreuzberg): Mehrsprachige Bibliothek für Dokumentenintelligenz (Rust-Kern mit Python-, TypeScript- und Go-Anbindungen), die Text, Tabellen und Metadaten aus mehr als 62 Dokumentformaten für RAG-Aufnahmepipelines extrahiert.
- [Swiftide](https://github.com/bosun-ai/swiftide): Rust-Framework zum Erstellen modularer, streamender LLM-Anwendungen.
- [CocoIndex](https://github.com/cocoindex-io/cocoindex): ETL-Framework zur Datenindizierung für KI, etwa RAG, mit inkrementellen Aktualisierungen in Echtzeit.
- [Pathway](https://github.com/pathwaycom/pathway/): Leistungsfähiges Open-Source-Python-ETL-Framework mit Rust-Laufzeitumgebung, das mehr als 300 Datenquellen unterstützt.
- [Pathway AI Pipelines](https://github.com/pathwaycom/llm-app/): Produktionsreifes RAG-Framework mit Echtzeitindizierung, Retrieval und Änderungsverfolgung über vielfältige Datenquellen hinweg.
- [LiteLLM](https://docs.litellm.ai/): Einheitliche Schnittstelle für mehrere LLM-Anbieter (OpenAI, Anthropic, Hugging Face, Replicate) mit Protokollierung, Monitoring und Kostenverfolgung.
- [Agentset](https://github.com/agentset-ai/agentset): Produktionsreife Open-Source-RAG-Plattform mit integriertem agentischem Reasoning, hybrider Suche und multimodaler Unterstützung.
- [OpenAgent](https://github.com/the-open-agent/openagent): Open-Source-Plattform für persönliche KI-Assistenten, die LLMs, eine RAG-Wissensdatenbank und autonome Agentenschleifen mit Browser-Nutzung, Shell-Ausführung und MCP-Tool-Unterstützung kombiniert.
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research): Lokal ausgerichtetes Framework für tiefgehende agentische Recherche mit Retrieval aus mehreren Quellen (Web, arXiv, PubMed, private Dokumente) und mehr als 20 Recherche-Strategien.

## 🐍 Python-Ökosystem für RAG

Python bietet derzeit das ausgereifteste RAG-Ökosystem mit umfassender Unterstützung für
LLMs, Embeddings, Vektordatenbanken, Evaluierung und Produktivwerkzeuge.

Vollständige Anleitung: [Python-Ökosystem für RAG](docs/python-ecosystem.md)

## 🛠️ Techniken

### Datenbereinigung

- [Data cleaning techniques](https://medium.com/intel-tech/four-data-cleaning-techniques-to-improve-large-language-model-llm-performance-77bee9003625): Vorverarbeitungsschritte zur Bereinigung der Eingabedaten und Verbesserung der Modellleistung.

### Prompt-Gestaltung

- **Strategien**
  - [Tagging and Labeling](https://python.langchain.com/v0.1/docs/use_cases/tagging/): Ergänzt abgerufene Daten um semantische Tags oder Labels, um die Relevanz zu erhöhen.
  - [Chain of Thought (CoT)](https://www.promptingguide.ai/techniques/cot): Regt das Modell an, ein Problem vor der Antwort Schritt für Schritt zu durchdenken.
  - [Chain of Verification (CoVe)](https://sourajit16-02-93.medium.com/chain-of-verification-cove-understanding-implementation-e7338c7f4cb5): Fordert das Modell auf, jeden Schritt seiner Argumentation auf Richtigkeit zu prüfen.
  - [Self-Consistency](https://www.promptingguide.ai/techniques/consistency): Erzeugt mehrere Denkpfade und wählt die konsistenteste Antwort aus.
  - [Zero-Shot Prompting](https://www.promptingguide.ai/techniques/zeroshot): Entwirft Prompts, die das Modell ohne Beispiele anleiten.
  - [Few-Shot Prompting](https://python.langchain.com/docs/how_to/few_shot_examples/): Fügt dem Prompt einige Beispiele hinzu, um das gewünschte Antwortformat zu zeigen.
  - [Reason & Act (ReAct) prompting](https://www.promptingguide.ai/techniques/react): Verbindet Reasoning (z. B. CoT) mit Handlungen (z. B. Tool-Aufrufen).
- **Zwischenspeicherung**
  - [Prompt Caching](https://medium.com/@1kg/prompt-cache-what-is-prompt-caching-a-comprehensive-guide-e6cbae48e6a3): Optimiert LLMs durch das Speichern und Wiederverwenden vorberechneter Attention-Zustände.
- **Strukturierung**
  -  [Token-Oriented Object Notation](https://github.com/toon-format/toon): Kompaktes, deterministisches JSON-Format für LLM-Prompts.

### Textsegmentierung (Chunking)

Die Chunking-Strategie gehört zu den wichtigsten Entscheidungen beim Entwurf eines RAG-Systems und wirkt sich direkt auf Retrieval-Präzision und Kontextqualität aus. Der optimale Ansatz hängt von Dokumenttypen, Domänenmerkmalen und Abfragemustern ab.

- **[Fixed-Size Chunking](https://medium.com/@anuragmishra_27746/five-levels-of-chunking-strategies-in-rag-notes-from-gregs-video-7b735895694d)**
  - **Anwendungsfall**: Einfache Dokumente, bei denen die Struktur weniger wichtig ist
  - **Merkmale**: Teilt Text in gleich große Abschnitte (meist 256–512 Token) mit einstellbarer Überlappung von 10–20 %
  - **Vorteile**: Einfach umzusetzen, vorhersehbare Chunk-Größen, effiziente Verarbeitung
  - **Nachteile**: Kann Sätze und Absätze trennen, die Dokumentstruktur verlieren und semantische Einheiten zerlegen
  - **Umsetzung**: [CharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/) (LangChain), [SentenceSplitter](https://docs.llamaindex.ai/en/stable/api_reference/node_parsers/sentence_splitter/) (LlamaIndex)

- **[Recursive Chunking](https://medium.com/@AbhiramiVS/chunking-methods-all-to-know-about-it-65c10aa7b24e)**
  - **Anwendungsfall**: Dokumente mit hierarchischer Struktur (Markdown, HTML, Code)
  - **Merkmale**: Teilt rekursiv an Trennzeichen (Absätze → Sätze → Wörter), bis die Zielgröße erreicht ist
  - **Vorteile**: Bewahrt natürliche Grenzen und Dokumenthierarchie und verbessert den semantischen Zusammenhang
  - **Nachteile**: Komplexer, variable Chunk-Größen und sorgfältig zu konfigurierende Trennzeichen
  - **Umsetzung**: [RecursiveCharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/) (LangChain)

- **[Document-Based Chunking](https://medium.com/@david.richards.tech/document-chunking-for-rag-ai-applications-04363d48fbf7)**
  - **Anwendungsfall**: Strukturierte Dokumente mit klaren Abschnitten (Markdown-Überschriften, PDF-Abschnitte, Datenbankeinträge)
  - **Merkmale**: Unterteilt anhand von Dokumentmetadaten, Formatierungshinweisen oder Strukturelementen
  - **Vorteile**: Bewahrt die Dokumentstruktur und den Kontext und ermöglicht metadatenreiches Retrieval
  - **Nachteile**: Erfordert strukturierte Eingaben und kann sehr große oder sehr kleine Chunks erzeugen
  - **Umsetzung**: [MarkdownHeaderTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/) (LangChain)
  - **Multimodal**: Verarbeitet Bilder und Text mit Modellen wie [OpenCLIP](https://github.com/mlfoundations/open_clip)

- **[Semantic Chunking](https://www.youtube.com/watch?v=8OJC21T2SL4&t=1933s)**
  - **Anwendungsfall**: Dokumente, bei denen semantischer Zusammenhang entscheidend ist (Erzählungen, technische Dokumentation)
  - **Merkmale**: Nutzt die Ähnlichkeit von Embeddings, um natürliche semantische Grenzen zu erkennen
  - **Vorteile**: Bewahrt semantische Einheiten, passt sich dem Inhalt an und verbessert die Relevanz des Retrievals
  - **Nachteile**: Rechenintensiv, benötigt ein Embedding-Modell und führt zu weniger vorhersehbaren Chunk-Größen
  - **Am besten geeignet für**: Hochwertiges Retrieval, bei dem die Bewahrung des Kontexts entscheidend ist

- **[Agentic Chunking](https://youtu.be/8OJC21T2SL4?si=8VnYaGUaBmtZhCsg&t=2882)**
  - **Anwendungsfall**: Komplexe Dokumente, die intelligente Segmentierungsentscheidungen erfordern
  - **Merkmale**: Analysiert Inhalte mit LLMs und bestimmt optimale Chunk-Grenzen
  - **Vorteile**: Sehr anpassungsfähig, versteht den Kontext und kann Domänenwissen anwenden
  - **Nachteile**: Hohe Kosten, langsamere Verarbeitung und Zugriff auf eine LLM-API erforderlich
  - **Am besten geeignet für**: Spezialisierte Domänen, in denen standardmäßiges Chunking nicht ausreicht

- **[Adaptive Chunking](https://github.com/ekimetrics/adaptive-chunking)**
  - **Anwendungsfall**: Gemischte Dokumentsammlungen, in denen unterschiedliche Dokumente von verschiedenen Aufteilungsstrategien profitieren
  - **Merkmale**: Bewertet mehrere Chunking-Methoden anhand intrinsischer Metriken und wählt für jedes Dokument die beste Methode aus
  - **Vorteile**: Flexibler als eine Einheitslösung, bewahrt Struktur und semantischen Zusammenhang und unterstützt benutzerdefinierte Splitter und Metriken
  - **Nachteile**: Erhöht gegenüber festem oder rekursivem Chunking den Evaluierungsaufwand und die Implementierungskomplexität

**Best Practices für Chunking:**
- **Überlappungsstrategie**: Verwenden Sie eine Überlappung von 10–20 %, um den Kontext über Chunk-Grenzen hinweg zu erhalten
- **Größenoptimierung**: Stimmen Sie die Chunk-Größe ab (größer = mehr Kontext, kleiner = höhere Präzision)
- **Bewahrung von Metadaten**: Bewahren Sie Dokumentstruktur, Überschriften und Formatierung in den Chunk-Metadaten
- **Mehrere Granularitätsebenen**: Ziehen Sie hierarchische Ansätze in Betracht (kleine Chunks für das Retrieval, größere für den Kontext)

### Vektorrepräsentationen (Embeddings)

Embeddings bilden die Grundlage der semantischen Suche in RAG-Systemen. Die Wahl des Embedding-Modells beeinflusst die Retrieval-Qualität erheblich.

- **Modellauswahl**
  - **[MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard)**: Umfassender Benchmark zur Bewertung von Embedding-Modellen über mehrere Aufgaben und Sprachen hinweg. Wählen Sie Modelle, die bei für Ihren Anwendungsfall relevanten Aufgaben (Retrieval, Clustering, Klassifikation) gut abschneiden.
  - **Modelleigenschaften**: Bewerten Sie Modelle anhand der folgenden Kriterien:
    - **Dimensionen**: Höhere Dimensionen (768–1024) liefern meist bessere Qualität, erhöhen aber Speicher- und Rechenkosten
    - **Kontextlänge**: Stellen Sie sicher, dass das Modell Ihre Dokument-Chunk-Größen unterstützt
    - **Mehrsprachige Unterstützung**: Für internationale Anwendungen erforderlich
    - **Domänenspezialisierung**: Allzweck- oder domänenspezifische Modelle (z. B. Wissenschaft, Recht, Medizin)
  
- **Benutzerdefinierte Embeddings**
  - **Fine-Tuning**: Passen Sie vortrainierte Modelle mit kontrastivem Lernen, Triplet-Loss oder überwachtem Fine-Tuning an Ihre Domäne an
  - **Training von Grund auf**: Für hochspezialisierte Domänen mit ausreichend gelabelten Daten
  - **Multimodale Embeddings**: Für Anwendungen, die Text, Bilder oder Audio verstehen müssen (z. B. CLIP, ImageBind)
  - **Ensemble-Methoden**: Kombinieren Sie mehrere Embedding-Modelle, um die Robustheit zu verbessern

### Informationsabruf (Retrieval)

- **Suchmethoden**
  - [Vector Store Flat Index](https://weaviate.io/developers/academy/py/vector_index/flat)
    - Einfache und effiziente Form des Retrievals.
    - Inhalte werden vektorisiert und als flache Inhaltsvektoren gespeichert.
  - [Hierarchical Index Retrieval](https://pixion.co/blog/rag-strategies-hierarchical-index-retrieval)
    - Schränkt Daten hierarchisch auf verschiedene Ebenen ein.
    - Führt das Retrieval in hierarchischer Reihenfolge aus.
  - [Hypothetical Questions](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - Erhöht die Ähnlichkeit zwischen Datenbank-Chunks und Abfragen (ebenso wie HyDE).
    - Ein LLM generiert spezifische Fragen für jeden Text-Chunk.
    - Wandelt diese Fragen in Vektor-Embeddings um.
    - Gleicht bei der Suche Abfragen mit diesem Index aus Fragenvektoren ab.
  - [Hypothetical Document Embeddings (HyDE)](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - Erhöht die Ähnlichkeit zwischen Datenbank-Chunks und Abfragen (ebenso wie Hypothetical Questions).
    - Ein LLM generiert anhand der Abfrage eine hypothetische Antwort.
    - Wandelt diese Antwort in ein Vektor-Embedding um.
    - Vergleicht den Abfragevektor mit dem Vektor der hypothetischen Antwort.
  - [Small to Big Retrieval](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/small_to_big_rag/small_to_big_rag.ipynb)
    - Verbessert das Retrieval, indem kleinere Chunks für die Suche und größere für den Kontext verwendet werden.
    - Kleinere untergeordnete Chunks verweisen auf größere übergeordnete Chunks.
  - [Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval)
    - Verbessert die Retrieval-Genauigkeit von RAG, indem der Dokumentkontext bewahrt wird, der beim Chunking üblicherweise verloren geht.
    - Jeder Text-Chunk wird vor dem Erstellen von Embeddings und der Indexierung um eine kurze, modellgenerierte Zusammenfassung ergänzt. So entstehen Contextual Embeddings und Contextual BM25.
    - In Kombination mit Reranking verbessert dieser Ansatz sowohl den semantischen als auch den lexikalischen Abgleich und verringert fehlgeschlagene Abrufe.
  - [Adaptive Retrieval](https://arxiv.org/abs/2403.14403)
    - Entscheidet während der Generierung dynamisch, wann und wie viele Informationen abgerufen werden.
  - [Query Reformulation and Expansion](https://haystack.deepset.ai/cookbook/query-expansion)
    - Formuliert Abfragen vor dem Retrieval automatisch um oder erweitert sie, um den Recall zu erhöhen.
    - Nützlich bei langen oder mehrdeutigen Benutzerabfragen.
- **[Re-ranking](https://developer.nvidia.com/blog/enhancing-rag-pipelines-with-re-ranking/)**: Verbessert Suchergebnisse in RAG-Pipelines, indem zunächst abgerufene Dokumente neu geordnet und die semantisch relevantesten für die Abfrage priorisiert werden.

### Urteils- und Entscheidungsmodelle

Urteilsmodelle treffen begrenzte semantische Entscheidungen über abgerufene Inhalte, Abfragen, generierte Antworten oder den Pipeline-Status. Anders als generative LLMs können sie als programmierbare Entscheidungspunkte in RAG-Pipelines für Reranking, Filterung, Routing, Verifizierung und Evaluierung dienen.

- **[Jev](https://typesafe.ai/)**: Das System-One-Modell von TypeSafe AI für schnelle, typisierte Entscheidungen. In RAG kann es Reranking, Filterung, Routing, Verifizierung, Schutzmechanismen und Evaluierung unterstützen.
- **[AnyJev](https://github.com/nokia-applied-research/AnyJev)**: Macht aus offenen LLMs typisierte Entscheidungsmodelle im Jev-Stil, mit Bias-Korrektur ohne Labels und optionaler Kalibrierung für Entscheidungen mit Schwellenwerten.

### Antwortqualität und Sicherheit

Hochwertige, sichere und zuverlässige Antworten sind für RAG-Systeme im Produktivbetrieb entscheidend.

- **Eindämmung von Halluzinationen**
  - **[Detection Techniques](https://machinelearningmastery.com/rag-hallucination-detection-techniques/)**: Setzen Sie Methoden ein, um unbelegte Aussagen in Modellantworten zu erkennen
  - **Überprüfung der Fundierung**: Gleichen Sie generierte Aussagen mit dem abgerufenen Kontext ab
  - **Konfidenzbewertung**: Weisen Sie generierten Antworten anhand der Quellenqualität Konfidenzwerte zu
  - **Quellenangaben**: Verlangen Sie Belege für alle sachlichen Aussagen
  - **Retrieval-Qualität**: Verbessern Sie die Retrieval-Präzision, um das Halluzinationsrisiko zu senken

- **Schutzmechanismen und Sicherheit**
  - **[Implementation Guide](https://developer.ibm.com/tutorials/awb-how-to-implement-llm-guardrails-for-rag-applications/)**: Umfassender Ansatz zur Implementierung von Sicherheitsmechanismen
  - **Inhaltsmoderation**: Filtern Sie schädliche, voreingenommene oder unangemessene Inhalte bei Eingabe und Ausgabe
  - **Eindämmung von Verzerrungen**: Erkennen und mindern Sie Verzerrungen in abgerufenen Inhalten und generierten Antworten
  - **Faktenprüfung**: Überprüfen Sie Aussagen anhand maßgeblicher Quellen oder Wissensdatenbanken
  - **Erkennung toxischer Inhalte**: Verwenden Sie Klassifikatoren, um toxische Inhalte zu erkennen und zu filtern

- **Schutz vor Prompt-Injection**
  - **[Security Guide](https://hiddenlayer.com/innovation-hub/prompt-injection-attacks-on-llms/)**: Prompt-Injection-Angriffe verstehen und verhindern
  - **Eingabevalidierung**: Validieren und bereinigen Sie alle externen Eingaben streng mithilfe von Allowlisting, Längenbegrenzungen und Musterabgleichen
  - **Inhaltstrennung**: Verwenden Sie eindeutige Trennzeichen, Vorlagensysteme und rollenbasierte Prompts, um Anweisungen von Benutzerdaten zu trennen
  - **Ausgabeüberwachung**: Überwachen Sie Antworten fortlaufend auf Anomalien, unerwartetes Verhalten oder Sicherheitsverstöße
  - **Ratenbegrenzung**: Setzen Sie Ratenbegrenzungen und Missbrauchserkennung ein, um systematische Angriffe zu verhindern
  - **Sandboxing**: Isolieren Sie LLM-Ausführungsumgebungen, um mögliche Schäden durch erfolgreiche Injections zu begrenzen

## 📊 Metriken und Evaluation

### Ähnlichkeitsmetriken für Embeddings

Diese Metriken messen die Ähnlichkeit zwischen Embeddings und sind entscheidend, um zu bewerten, wie effektiv RAG-Systeme externe Dokumente oder Datenquellen abrufen und integrieren. Mit passenden Ähnlichkeitsmetriken lassen sich Leistung und Genauigkeit eines RAG-Systems optimieren. Alternativ können Sie maßgeschneiderte Metriken für Ihre Domäne entwickeln, um spezifische Nuancen abzubilden und die Relevanz zu verbessern.

- **[Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity)**

  - Misst den Kosinus des Winkels zwischen zwei Vektoren in einem mehrdimensionalen Raum.
  - Besonders wirksam beim Vergleich von Text-Embeddings, deren Vektorrichtung semantische Informationen repräsentiert.
  - Wird in RAG-Systemen häufig verwendet, um die semantische Ähnlichkeit von Abfrage- und Dokument-Embeddings zu messen.

- **[Dot Product](https://en.wikipedia.org/wiki/Dot_product)**

  - Berechnet die Summe der Produkte korrespondierender Einträge zweier Zahlenfolgen.
  - Bei normalisierten Vektoren entspricht es der Kosinusähnlichkeit.
  - Einfach und effizient; wird bei Berechnungen großen Umfangs oft hardwarebeschleunigt eingesetzt.

- **[Euclidean Distance](https://en.wikipedia.org/wiki/Euclidean_distance)**

  - Berechnet die geradlinige Entfernung zwischen zwei Punkten im euklidischen Raum.
  - Kann mit Embeddings verwendet werden, verliert in hochdimensionalen Räumen jedoch möglicherweise durch den „[Fluch der Dimensionalität](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions)“ an Aussagekraft.
  - Wird nach einer Dimensionsreduktion häufig in Cluster-Algorithmen wie K-Means eingesetzt.

- **[Jaccard Similarity](https://en.wikipedia.org/wiki/Jaccard_index)**
  - Misst die Ähnlichkeit zweier endlicher Mengen als Größe ihres Schnitts geteilt durch die Größe ihrer Vereinigung.
  - Nützlich beim Vergleich von Token-Mengen, etwa in Bag-of-Words-Modellen oder bei n-Gramm-Vergleichen.
  - Für kontinuierliche, von LLMs erzeugte Embeddings weniger geeignet.

> **Hinweis:** Kosinusähnlichkeit und Skalarprodukt gelten allgemein als die wirksamsten Metriken zur Messung der Ähnlichkeit hochdimensionaler Embeddings.

### Metriken zur Antwortbewertung

Bei der Antwortbewertung in RAG-Lösungen wird die Qualität der Ausgaben von Sprachmodellen anhand verschiedener Metriken beurteilt. Hier sind strukturierte Ansätze für diese Bewertung:

- **Automatisiertes Benchmarking**

  - **[BLEU](https://en.wikipedia.org/wiki/BLEU):** Bewertet die Überschneidung von n-Grammen zwischen maschinell erzeugten und Referenzausgaben und gibt Aufschluss über die Präzision.
  - **[ROUGE](<https://en.wikipedia.org/wiki/ROUGE_(metric)>):** Misst den Recall, indem n-Gramme, Skip-Bigramme oder die längste gemeinsame Teilsequenz mit Referenzausgaben verglichen werden.
  - **[METEOR](https://en.wikipedia.org/wiki/METEOR):** Berücksichtigt exakte Übereinstimmungen, Wortstämme, Synonyme und Alignment bei der maschinellen Übersetzung.

- **Menschliche Bewertung**
  Dabei beurteilen Menschen Antworten anhand folgender Kriterien:
  - **Relevanz:** Übereinstimmung mit den Benutzerabfragen.
  - **Sprachfluss:** Grammatikalische und stilistische Qualität.
  - **Faktische Richtigkeit:** Überprüfung von Aussagen anhand maßgeblicher Quellen.
  - **Kohärenz:** Logische Stimmigkeit der Antworten.
  
  Dazu gehören:
  - **[Annotation queues](https://docs.langchain.com/langsmith/annotation-queues):** Bieten eine übersichtliche, gezielte Ansicht, in der menschliche Annotatoren bestimmten Durchläufen Feedback hinzufügen können.

- **Modellbewertung**
  Nutzt vortrainierte Bewertungsmodelle, um Ausgaben anhand verschiedener Kriterien zu vergleichen:

  - **[TuringBench](https://turingbench.ist.psu.edu/):** Bietet umfassende Bewertungen anhand verschiedener Sprachbenchmarks.
  - **[Hugging Face Evaluate](https://huggingface.co/docs/evaluate/en/index):** Berechnet die Übereinstimmung mit menschlichen Präferenzen.

- **Zentrale Bewertungsdimensionen**
  - **Fundierung:** Prüft, ob Antworten vollständig auf dem bereitgestellten Kontext beruhen. Eine geringe Fundierung kann auf halluzinierte oder irrelevante Informationen hindeuten.
  - **Vollständigkeit:** Misst, ob die Antwort alle Aspekte einer Abfrage abdeckt.
  - **Ansätze:** KI-gestützte Bewertung des Retrievals und promptbasierte Prüfung der Absicht.
  - **Nutzung:** Bewertet, in welchem Umfang abgerufene Daten zur Antwort beitragen.
  - **Analyse:** Prüfen Sie mit LLMs, ob abgerufene Chunks in den Antworten enthalten sind.

#### Werkzeuge

Diese Werkzeuge unterstützen Sie bei der Bewertung Ihres RAG-Systems – von der Nachverfolgung des Nutzerfeedbacks und der Protokollierung von Suchanfragen bis zum Vergleich mehrerer Evaluierungsmetriken im Zeitverlauf.

- **[LangFuse](https://github.com/langfuse/langfuse)**: Open-Source-Werkzeug zur Nachverfolgung von LLM-Metriken, Observability und Prompt-Verwaltung.
- **[Opik](https://github.com/comet-ml/opik)**: Open-Source-Plattform für LLM-Observability, Evaluierungen und Prompt-Optimierung.
- **[Ragas](https://docs.ragas.io/en/stable/)**: Framework zur Bewertung von RAG-Pipelines.
- **[WFGY Problem Map](https://github.com/onestardao/WFGY/tree/main/ProblemMap)**: Checkliste mit 16 Modi zur Diagnose von Fehlern in RAG und LLMs.
- **[LangSmith](https://docs.smith.langchain.com/)**: Plattform zum Erstellen produktionsreifer LLM-Anwendungen, mit der Sie Ihre Anwendung genau überwachen und bewerten können.
- **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)**: Werkzeug zur Berechnung von Metriken wie BLEU und ROUGE, um die Textqualität zu bewerten.
- **[Weights & Biases](https://wandb.ai/wandb-japan/rag-hands-on/reports/Step-for-developing-and-evaluating-RAG-application-with-W-B--Vmlldzo1NzU4OTAx)**: Verfolgt Experimente, protokolliert Metriken und visualisiert die Leistung.

## 💾 Datenbanken

Vektordatenbanken sind zentrale Komponenten von RAG-Systemen und ermöglichen die effiziente Speicherung von Embeddings sowie Ähnlichkeitssuchen. Die Wahl einer geeigneten Datenbank hängt unter anderem von Skalierung, Latenzanforderungen, Bereitstellungsmodell (Cloud oder lokal) und benötigten Funktionen wie hybrider Suche oder Filtern ab. Die folgende Liste enthält Datenbanksysteme für RAG-Anwendungen:

### Benchmarks

- [Picking a vector database](https://benchmark.vectorview.ai/vectordbs.html)

### Verteilte Datenverarbeitungs- und Serving-Engines:

- [Apache Cassandra](https://cassandra.apache.org/doc/latest/cassandra/vector-search/concepts.html): Verteiltes NoSQL-Datenbankmanagementsystem.
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-vector-search): Weltweit verteilter, multimodaler Datenbankdienst mit integrierter Vektorsuche.
- [Vespa](https://vespa.ai/): Open-Source-Engine für Big-Data-Verarbeitung und -Bereitstellung, ausgelegt auf Echtzeitanwendungen.

### Suchmaschinen mit Vektorfunktionen:

- [Elasticsearch](https://www.elastic.co/elasticsearch): Bietet neben herkömmlichen Suchfunktionen auch Vektorsuche.
- [OpenSearch](https://github.com/opensearch-project/OpenSearch): Verteilte Such- und Analyse-Engine, die als Fork von Elasticsearch entstanden ist.

### Vektordatenbanken:

- [Chroma DB](https://github.com/chroma-core/chroma): KI-native Open-Source-Datenbank für Embeddings.
- [Milvus](https://github.com/milvus-io/milvus): Open-Source-Vektordatenbank für KI-gestützte Anwendungen.
- [Pinecone](https://www.pinecone.io/): Serverlose Vektordatenbank, optimiert für Machine-Learning-Workflows.
- [Oracle AI Vector Search](https://www.oracle.com/database/ai-vector-search/#retrieval-augmented-generation): Integriert Vektorsuche in Oracle Database, um semantische Abfragen auf Grundlage von Vektor-Embeddings zu ermöglichen.

### Erweiterungen für relationale Datenbanken:

- [Pgvector](https://github.com/pgvector/pgvector): Open-Source-Erweiterung für die Vektorähnlichkeitssuche in PostgreSQL.
- [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s): PostgreSQL-Erweiterung für lexikalisches Retrieval auf Basis der BM25-Familie, nützlich für schlüsselwortbasierte und hybride Retrieval-Pipelines.

### Weitere Datenbanksysteme:

- [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-database): Weltweit verteilter, multimodaler Datenbankdienst mit integrierter Vektorsuche.
- [Couchbase](https://www.couchbase.com/products/vector-search/): Verteilte NoSQL-Cloud-Datenbank.
- [Lantern](https://lantern.dev/): Datenschutzorientierte persönliche Suchmaschine.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/storing/vector_stores/): Nutzt einen einfachen In-Memory-Vektorspeicher für schnelle Experimente.
- [Neo4j](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/): Datenbankmanagementsystem für Graphen.
- [Qdrant](https://github.com/neo4j/neo4j): Open-Source-Vektordatenbank für die Ähnlichkeitssuche.
- [Redis Stack](https://redis.io/docs/latest/develop/interact/search-and-query/): In-Memory-Datenspeicher, der als Datenbank, Cache und Nachrichtenbroker eingesetzt wird.
- [SurrealDB](https://github.com/surrealdb/surrealdb): Skalierbare multimodale Datenbank, optimiert für Zeitreihendaten.
- [Weaviate](https://github.com/weaviate/weaviate): Cloud-native Open-Source-Engine für die Vektorsuche.

### Bibliotheken und Tools für die Vektorsuche:

- [FAISS](https://github.com/facebookresearch/faiss): Bibliothek für effiziente Ähnlichkeitssuche und Clusterbildung mit dichten Vektoren, ausgelegt auf große Datensätze und schnellen Abruf nächster Nachbarn.

## 🚀 Überlegungen für den Produktivbetrieb

Für produktionsreife RAG-Systeme müssen neben der zentralen Retrieval- und Generierungspipeline mehrere wichtige Aspekte berücksichtigt werden:

### Skalierbarkeit und Leistung

- **Indexierungsdurchsatz**: Entwerfen Sie Pipelines für die Aufnahme großer Dokumentmengen mit inkrementellen Aktualisierungen
- **Abfragelatenz**: Optimieren Sie das Retrieval durch effiziente Indexierung (HNSW, IVF), Caching-Strategien und parallele Verarbeitung
- **Gleichzeitige Anfragen**: Implementieren Sie Verbindungspooling, Warteschlangen für Anfragen und Lastverteilung für stark frequentierte Szenarien
- **Ressourcenverwaltung**: Überwachen Sie GPU-/CPU-Auslastung, Speicherverbrauch und Datenbank-Verbindungspools

### Zuverlässigkeit und Monitoring

- **Observability**: Implementieren Sie umfassende Protokollierung, Tracing und Metrikerfassung (Latenz, Durchsatz, Fehlerraten)
- **Integritätsprüfungen**: Überwachen Sie die Verfügbarkeit des Embedding-Dienstes, die Verbindung zur Vektordatenbank und den Status der LLM-API
- **Fehlerbehandlung**: Implementieren Sie Wiederholungslogik, Circuit Breaker und Strategien zur kontrollierten Leistungsreduzierung
- **A/B-Tests**: Vergleichen Sie verschiedene Retrieval-Strategien, Chunking-Methoden und Prompt-Vorlagen

### Datenverwaltung

- **Inkrementelle Aktualisierungen**: Unterstützen Sie die Dokumentindexierung in Echtzeit oder nahezu in Echtzeit, ohne den vollständigen Index neu aufzubauen
- **Versionsverwaltung**: Verfolgen Sie Dokumentversionen, Versionen der Embedding-Modelle und Prompt-Vorlagen
- **Datenqualität**: Implementieren Sie Validierungspipelines, um beschädigte Embeddings, fehlende Metadaten oder veraltete Inhalte zu erkennen
- **Sicherung und Wiederherstellung**: Sichern Sie Vektorindizes und Metadatenspeicher regelmäßig

### Sicherheit und Compliance

- **Zugriffskontrolle**: Implementieren Sie Authentifizierung, Autorisierung und Audit-Protokollierung
- **Datenschutz**: Verschlüsseln Sie ruhende und übertragene Daten und erfüllen Sie Anforderungen an den Speicherort der Daten
- **Inhaltsfilterung**: Setzen Sie Inhaltsmoderation, Erkennung personenbezogener Daten und Compliance-Prüfungen ein
- **Ratenbegrenzung**: Schützen Sie vor Missbrauch und sorgen Sie für eine faire Zuweisung von Ressourcen

### Kostenoptimierung

- **Embedding-Caching**: Zwischenspeichern häufig verwendeter Embeddings, um API-Kosten zu senken
- **Selektives Retrieval**: Nutzen Sie Query-Routing, um unnötige Abrufe zu vermeiden
- **Modellauswahl**: Wägen Sie bei der Wahl von Embedding- und LLM-Modellen Kosten und Leistung gegeneinander ab
- **Bedarfsgerechte Dimensionierung von Ressourcen**: Optimieren Sie die Infrastruktur anhand tatsächlicher Nutzungsmuster

## 🔌 Plattform­spezifische RAG-Implementierungen

Ausführliche Implementierungsanleitungen für bestimmte Plattformen finden Sie in der Dokumentation:

- [Supabase Integration Guide](docs/supabase-integration.md): Aufbau von RAG-Systemen mit Supabase, pgvector und Edge Functions

## 💡 Bewährte Vorgehensweisen

### Chunking-Strategie

- **Domänenbewusstes Chunking**: Verwenden Sie semantisches oder dokumentstrukturbezogenes statt festem Chunking, um den Kontext besser zu bewahren
- **Verwaltung der Überlappung**: Verwenden Sie eine gezielte Überlappung (10–20 %), um den Kontext über Chunk-Grenzen hinweg zu erhalten
- **Bewahrung von Metadaten**: Erhalten Sie Dokumentstruktur, Überschriften und Formatierungshinweise in den Chunk-Metadaten
- **Mehrere Granularitätsebenen**: Ziehen Sie hierarchisches Chunking in Betracht (kleine Chunks für das Retrieval, größere für den Kontext)

### Auswahl von Embeddings

- **Modellbewertung**: Nutzen Sie das MTEB Leaderboard und domänenspezifische Benchmarks, um geeignete Modelle auszuwählen
- **Dimensionsoptimierung**: Stimmen Sie die Embedding-Dimensionen ab (höher = bessere Qualität, niedriger = schnelleres Retrieval)
- **Domänenspezifisches Fine-Tuning**: Stimmen Sie Embeddings nach Möglichkeit mit domänenspezifischen Daten fein ab
- **Konsistenz**: Verwenden Sie für Indexierung und Abfragen dasselbe Embedding-Modell

### Retrieval-Optimierung

- **Hybride Suche**: Kombinieren Sie semantische (Vektor-) und lexikalische (BM25/Schlüsselwort-)Suche, um den Recall zu verbessern
- **Re-ranking**: Setzen Sie Cross-Encoder oder Learned-to-Rank-Modelle ein, um die Präzision zu verbessern
- **Abfrageverständnis**: Implementieren Sie Abfrageklassifizierung, Absichtserkennung und Abfrageerweiterung
- **Ergebnisdiversifizierung**: Vermeiden Sie redundante Ergebnisse durch Diversitätsbeschränkungen

### Prompt-Engineering

- **Klare Anweisungen**: Geben Sie explizit vor, wie der abgerufene Kontext verwendet werden soll
- **Quellenangaben**: Fordern Sie Zitate an und verlangen Sie eine Fundierung im bereitgestellten Kontext
- **Few-Shot-Beispiele**: Fügen Sie Beispiele ein, die das gewünschte Antwortformat und die erwartete Qualität zeigen
- **Kontextkomprimierung**: Verwenden Sie Zusammenfassungen oder Extraktion, wenn der Kontext die Grenzen überschreitet

### Evaluationsrahmen

- **Mehrdimensionale Metriken**: Bewerten Sie Relevanz, Genauigkeit, Vollständigkeit und Fundierung
- **Menschliche Beteiligung**: Beziehen Sie menschliches Feedback zur kontinuierlichen Verbesserung ein
- **Synthetische Evaluierung**: Erzeugen Sie Testabfragen und erwartete Ausgaben für automatisierte Tests
- **Monitoring im Produktivbetrieb**: Verfolgen Sie Nutzerzufriedenheit, Abfragemuster und Fehlermodi

### Iterative Verbesserung

- **Feedbackschleifen**: Sammeln Sie Nutzerfeedback, Abfrageprotokolle und Leistungsmetriken
- **Experimente**: Testen Sie Verbesserungen (Chunking, Retrieval, Prompts) systematisch in kontrollierten Experimenten
- **Modellaktualisierungen**: Planen Sie Aktualisierungen der Embedding-Modelle und Migrationsstrategien
- **Dokumentation**: Dokumentieren Sie Architektur, Entscheidungen und Betriebsabläufe klar und verständlich

---

## Mitwirken

Diese gemeinschaftlich gepflegte Ressourcensammlung wird laufend erweitert. Beiträge sind willkommen! Wenn Sie Ressourcen ergänzen, Fehler beheben oder die Gliederung verbessern möchten:

1. Forken Sie das Repository
2. Erstellen Sie einen Branch für Ihre Änderungen
3. Reichen Sie einen Pull Request mit einer aussagekräftigen Beschreibung ein

Achten Sie bei neuen Einträgen auf funktionierende Links, genaue und knappe Beschreibungen sowie die passende Rubrik.

## Lizenz

Dieses Projekt steht unter der Lizenz [CC0 1.0 Universal](LICENSE).
