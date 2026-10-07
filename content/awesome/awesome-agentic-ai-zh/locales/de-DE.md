<div align="right">
  <strong>Deutsch</strong> | <a href="./README.zh-Hans.md">Vereinfachtes Chinesisch</a> | <a href="./README.en.md">Englisch</a>
</div>

<div align="center" markdown="1">

![Von Stage 0–2 der gemeinsame Basispfad zu den CLI- und Agent-Routen, gemeinsam Stage 5 und 8, dann je nach Bedarf die Rollenroute wählen](resources/diagrams/banner.svg)

# awesome-agentic-ai-zh

**🤖 Eine Lernlandkarte, die von „Was ist ein AI Agent" bis zu „ein zuverlässiges System bauen" führt**

**Wählen Sie zuerst eine Route, dann gehen Sie Schritt für Schritt vor. Wichtige Konzepte, Übungen und kuratierte Ressourcen sind für Sie sortiert.**

[![License](https://img.shields.io/badge/license-MIT-blue?style=flat)](LICENSE)
[![繁中](https://img.shields.io/badge/語言-繁體中文-red?style=flat)](README.md)
[![简中](https://img.shields.io/badge/語言-简体中文-orange?style=flat)](README.zh-Hans.md)
[![EN](https://img.shields.io/badge/lang-English-blue?style=flat)](README.en.md)
![GitHub stars](https://img.shields.io/github/stars/WenyuChiou/awesome-agentic-ai-zh?style=flat&logo=github)
[![Online-Lesestation](https://img.shields.io/badge/線上閱讀-立即開始-2ea44f?style=flat)](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)

</div>

> 📱 Zum Lesen auf dem Handy nutzen Sie bitte die [Online-Lesestation](https://wenyuchiou.github.io/awesome-agentic-ai-zh/).

## 🎯 Wofür hilft Ihnen diese Landkarte?

Ein **AI Agent** (KI-Agent) ist „ein KI-System, das für das Ziel eines Menschen selbstständig die nächste Schritte entscheidet und handelt". Hat man ihm das Ziel gegeben, betrachtet er die aktuelle Lage, wählt den nächsten Schritt, nutzt bei Bedarf Werkzeuge und setzt dann je nach Ergebnis fort, korrigiert, stoppt oder gibt die Kontrolle an den Menschen zurück. Er kann Arbeit automatisch für Sie erledigen, aber nur innerhalb der Regeln und Rechte, die Sie ihm gegeben haben. Ein Chatbot, der nur einmal antwortet, oder ein Skript, dessen Schritte alle fest vorgegeben sind, ist nicht unbedingt ein Agent. Dieses Repo verlangt nicht, dass Sie alle Begriffe von Anfang an kennen, sondern führt Sie in drei Schritten nacheinander:

1. **Zuerst die Grundlagen verstehen**: Was sind LLM (Large Language Model, ein Modell, das Sprache lesen und schreiben kann), Prompt, API (Application Programming Interface, eine Schnittstelle, über die ein Programm einen Dienst aufruft) und Token.
2. **Dann etwas bauen**: das Modell Werkzeuge aufrufen lassen, eine Agent Loop ausführen, Dokumente lesen und sich Dinge merken.
3. **Schließlich zuverlässig machen**: Berechtigungen, Eval, menschliche Freigabe, Observability und Fehlerwiederherstellung hinzufügen.

Die Rolle hier ist **Lernfahrplan + kuratierte Ressourcen + direkt ausführbare kleine Übungen**. Brauchen Sie ein vollständiges Kapitel, führen wir Sie zur offiziellen Dokumentation, [Datawhale Hello-Agents](https://github.com/datawhalechina/hello-agents) oder zum passenden Cookbook, anstatt eine weitere Enzyklopädie zu schreiben. Muss ein Modell angebunden werden, erklärt jede Übung den Cloud- oder lokalen Pfad.

Wichtige Fachbegriffe werden beim ersten Auftreten erst einfach erklärt, dann der englische Fachbegriff beibehalten. Haben Sie ein Wort vergessen, schlagen Sie direkt im [Glossar](resources/glossary.md) nach.

## 🚀 Legen Sie jetzt los

1. **Sie haben noch nie programmiert**: beginnen Sie mit [Stage 0: Grundvorbereitung](stages/00-foundations.md); sind Ihnen API oder CLI Agent nicht vertraut, nutzen Sie den [Einrichtungsleitfaden für Anfänger](resources/setup-guide.md).
2. **Sie beherrschen bereits Python, Git und API**: beginnen Sie mit [Stage 1: LLM-Grundlagen](stages/01-llm-basics.md).
3. **Sie wissen noch nicht, welche Route Sie nehmen**: sehen Sie sich zuerst die Auswahltabelle Track A / Track B unten an.

Vor Track A oder Track B sichern Sie zuerst die Stages 0–2; wer nur den Alltagsnutzer-Route geht, kann direkt zum Rollenleitfaden springen.

| Was möchten Sie jetzt tun? | Empfohlene Route | Routeneinstieg |
|---|---|---|
| Arbeit mit einem CLI Agent wie Claude Code, Codex, OpenCode erledigen | **Track A — CLI Power User** | [A1: einen CLI Agent wählen](tracks/cli/A1-cli-intro.md) |
| Selbst Agenten, Tool-Schleifen, Workflows und Dienste schreiben | **Track B — Agent Builder** | [Stage 3: erste Agent Loop](stages/03-tool-use-and-hello-agent.md) |
| KI im Alltag sicher nutzen, vorerst ohne zu programmieren | **Alltagsnutzer-Route** | [Leitfaden für Alltagsnutzer](branches/for-everyday-users.md) |

<details markdown="1">
<summary>💻 Aufklappen: lokal herunterladen</summary>

```powershell
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
cd awesome-agentic-ai-zh
```

Öffnen Sie nach dem Download zuerst `stages/00-foundations.md`, oder gehen Sie über die Tabelle oben direkt zu Ihrer ersten Station.

</details>

## Von Stage 0 bis Stage 8, dazu die LeseStation Stage 7.5

![Lernlandkarte für AI Agenten](resources/diagrams/learning-map.png)

Diese Landkarte umfasst insgesamt **8 thematische Stages + die Vorbereitungsstufe Stage 0 + die vertiefende LeseStation Stage 7.5**, also **10 Lernstationen**. Track-A/B-Leser sichern zuerst die **gemeinsamen Grundlagen Stage 0–2**; wer bereits Python, Git und API beherrscht, kann Stage 0 überspringen. Der Alltagsnutzer kann direkt den Rollenleitfaden gehen.

### Gemeinsame Grundlagen: Stage 0–2

| Stage | Was löst dieser Schritt? | Was können Sie danach tun? |
|---|---|---|
| **0** · [Grundvorbereitung](stages/00-foundations.md) | Sind Computer und Grundelemente bereit? | Eine öffentliche API mit Python aufrufen, JSON (JavaScript Object Notation, gängiges Textformat zum Datenaustausch zwischen Programmen) lesen und Ergebnisse mit Git sichern |
| **1** · [LLM-Grundlagen](stages/01-llm-basics.md) | Worin unterscheiden sich LLM, Token, Context und Modelle? | Ein LLM aufrufen und je nach Bedarf ein Cloud- oder lokales Modell wählen |
| **2** · [Prompt-Gestaltung](stages/02-prompt-engineering.md) | Wie drückt man Ziel, Daten, Regeln und Ausgabe klar aus? | An einem festen Fall die Grenzen von Zero-Shot, One-Shot, Few-Shot und CoT (Chain-of-Thought, eine Schritt-für-Schritt-Reasoning-Methode) vergleichen |

### Track A: einen CLI Agent nutzen, um die Arbeit zu erledigen

Die offizielle Reihenfolge ist `A1 → A2 → Stage 5 → A3 → Stage 8`.

| Reihenfolge | Was löst dieser Schritt? | Was können Sie danach tun? |
|---|---|---|
| **A1** · [Einen CLI Agent wählen](tracks/cli/A1-cli-intro.md) | Was sind OpenRouter, OpenCode, Pi, Ollama jeweils? | Das richtige Werkzeug wählen und eine erste kleine Aufgabe erledigen |
| **A2** · [Wiederholbaren Ablauf erstellen](tracks/cli/A2-cli-workflow.md) | Wie behält man Regeln und Schritte für das nächste Mal? | Project Instructions, Skills und wiederverwendbare Workflows schreiben |
| **5** · [Claude-Code-Ökosystem](stages/05-claude-code-ecosystem.md) | Wie unterscheiden sich MCP, Skills, Plugins, Hooks und Subagents? | Lesen Sie zuerst den Kern 5.1–5.4; 5.5–5.8 nach Arbeitsbedarf |
| **A3** · [An die echte Arbeit anbinden](tracks/cli/A3-cli-production.md) | Wie verbindet man externe Werkzeuge, CI und Teamprozesse sicher? | Integration mit Minimalrechten, menschlicher Prüfung und Protokollierung umsetzen |
| **8** · [Agent-Schnittstellen](stages/08-agent-interfaces.md) | Wie bedient der Agent Browser, Bildschirm und Sandbox? | Entscheiden, ob die Aufgabe CLI, Browser, Computer Use oder API braucht |

### Track B: einen Agenten von Null bauen

| Reihenfolge | Was löst dieser Schritt? | Was können Sie danach tun? |
|---|---|---|
| **3** · [Werkzeugnutzung und erste Agent Loop](stages/03-tool-use-and-hello-agent.md) | Wie ruft das Modell sicher Werkzeuge auf und wiederholt den nächsten Schritt? | Eine Agent Loop mit Maximalzahl an Runden und Parameter-Validierung bauen |
| **4** · [Workflow Graph und Agent-Frameworks](stages/04-agent-frameworks.md) | Wie zeichnet man mehrere Schritte als Arbeitskarte? | Workflow, Agent, Graph und Framework wählen |
| **5** · [Claude-Code-Ökosystem](stages/05-claude-code-ecosystem.md) | Wie arbeiten MCP, Skills, Plugins, Hooks und Subagents zusammen? | Werkzeuge, Regeln und wiederverwendbare Fähigkeiten kombinieren |
| **6** · [Memory · RAG (Retrieval-Augmented Generation, zuerst relevante Daten finden, dann daraus antworten)](stages/06-memory-rag.md) | Wie fragt der Agent Dokumente ab, speichert und ruft wichtige Informationen ab? | Ein minimales RAG, long-term memory und einen contextual-retrieval-Fluss aufbauen |
| **7** · [Agent-Produktionsingenieurbau: testbar, sichtbar, stoppbar, wiederherstellbar](stages/07-multi-agent-production.md) | Wie läuft der Agent in einer echten Umgebung stabil? | Eval, Observability, Budget, Human-in-the-loop (HITL, menschliche Freigabe) und Wiederherstellung hinzufügen |
| **7.5** · [Landkarte fortgeschrittener Agentic-Konzepte](stages/07.5-advanced-agentic-concepts.md) | Welche weiteren fortgeschrittenen Muster lohnen sich? | Aus 12 Konzepten die benötigten Themen wie PAR loop, agent-as-judge wählen |
| **8** · [Agent-Schnittstellen](stages/08-agent-interfaces.md) | Wie bedient der Agent eine reale Umgebung jenseits der API? | Computer Use, Browser Use oder Code Sandbox wählen |

Bei Stage 4 verstehen Sie zuerst den **Workflow Graph** und bauen ihn dann mit einem Framework; bei Stage 7 fügen Sie Eval, Observability, Freigabe und Wiederherstellung hinzu, damit dieselbe Arbeitskarte stabil läuft.

> 🔭 **Lernreihenfolge**: Stage 2 Prompt → Stage 3 **Agent Loop** → Stage 4 **Workflow Graph** / Framework → Stage 5 Werkzeuge und Regeln → Stage 6 **Context Engineering** → Stage 7 production. Prompt, Context, Harness, Loop und Graph arbeiten zusammen; es sind keine fünf Schichten und auch keine sich ablösenden Produktgenerationen.

Nach A3 oder Stage 7 können Sie das [Capstone-Projekt](CAPSTONE.md) beginnen; für den Fortschritt nutzen Sie [PROGRESS.md](PROGRESS.md).

<details markdown="1">
<summary>⏱️ Aufklappen: Zeitschätzung (Orientierung, keine Frist)</summary>

- **Track A**: etwa 8–10 Wochen. Schwerpunkt ist die Nutzung vorhandener CLI Agenten zur Arbeitserledigung.
- **Track B**: Hauptstrang etwa 16–22 Wochen; bei 5–8 Stunden pro Woche sind meist 5–7 Monate nötig.
- **Stage 5** ist der Werkzeuge-und-Regeln-Hub: Track A sieht, wie man ihn nutzt, Track B, wie man ihn kombiniert.
- **Stage 8** ist der Bedien-Schnittstellen-Hub: Track A sieht, wie man delegiert, Track B, wie man ihn an den eigenen Agenten anbindet.

Der Zeitplan ist nur eine Orientierung. Erledigen Sie zuerst den Schritt vor Augen, Sie müssen nicht die ganze Karte auf einmal lesen.

</details>

### Weiter nach Ihrer Rolle

![Forschung, Entwicklung, Lehre, Wissensarbeit und Alltagsnutzung sind fünf Wahlmöglichkeiten, nach Bedarf lesen, nicht alles durchgehen](resources/diagrams/branch-decision-tree.svg)

[Statisches Bild](resources/diagrams/branch-decision-tree.png)

| Route | Für wen | Womit arbeiten Sie? |
|---|---|---|
| 🔬 [Forscher](branches/for-researcher.md) | Doktoranden, Postdocs, PI | Literaturbelege, reproduzierbare Abläufe, Multi-Agent Review |
| 💻 [Entwickler](branches/for-developer.md) | Softwareingenieure | CLI Delegation, Code Review, Tests und Wiederherstellung |
| 🎓 [Lehrer](branches/for-teacher.md) | Lehrer, Dozenten | Unterrichtsvorbereitung, Feedback, Datenschutz und Lehr-Prompts |
| 📊 [Wissensarbeiter](branches/for-knowledge-worker.md) | Berater, PM, Analysten | E-Mail-, Meeting- und Berichtsworkflows |
| 👥 [Alltagsnutzer](branches/for-everyday-users.md) | KI-Nutzer, die nicht zwingend programmieren | Schreiben, Lernen, Datenschutz und sichere Nutzung |

## 💡 Wie lernt man, ohne steckenzubleiben?

1. **Immer nur einen Stage gehen**: beantworten Sie zuerst die Kernfrage des Kapitels.
2. **Kernbegriffe und Pflichtlektüre zuerst**: sie werden direkt in den späteren Übungen gebraucht.
3. **Kopieren Sie den ersten Befehl direkt**: führen Sie zuerst einen offline-Test aus, Sie müssen keine leere Datei abschreiben.
4. **Immer nur eine Sache ändern**: führen Sie danach sofort den Test erneut aus, um zu wissen, welche Änderung das Ergebnis bewirkt hat.
5. **Erst zur nächsten gehen, wenn die Abschlussbedingung erfüllt ist**: Verstehen ist nicht gleich Können.

Jedes `starter.py` ist eine ausführbare Referenz. Lesen Sie zuerst Aufgabe und Erfolgsbedingung, ändern Sie eine Stelle und führen Sie den Test erneut aus. Die vollständige Methode finden Sie unter [Wie man dieses Material nutzt](docs/HOW_TO_USE.md).

## 📚 Lern-Einstiege zum Merken

Hier stehen nur die gängigsten Einstiege; die vollständige Liste ist in [RESOURCES.md](RESOURCES.md). Sterne geben die **Lernpriorität** an, keine Projektwertung.

<table>
  <thead><tr><th>Verwendung</th><th>Einstieg</th><th>Wann nutzen?</th><th>Wichtigkeit</th></tr></thead>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">Start</th><td><a href="resources/setup-guide.md">Einrichtungsleitfaden für Anfänger</a></td><td>Erste Installation und Ausführung</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="docs/HOW_TO_USE.md">Wie man dieses Material nutzt</a></td><td>Vor der ersten praktischen Übung</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="PROGRESS.md">Lernfortschrittstabelle</a></td><td>Um die nächste Stufe zu wissen oder Erledigtes zu notieren</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">Lernen</th><td><a href="resources/glossary.md">Kern-Glossar</a></td><td>Bei unbekannten Wörtern wie Token, RAG, MCP</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="examples/README.md">Einstieg für ausführbare Beispiele</a></td><td>Um direkt Offline-Tests und kleine Fälle zu starten</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cookbook.md">Praxis-Cookbook</a></td><td>Um Skills, MCP, Office, Zotero oder lokales LLM zu machen</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="4">Nachschlagen</th><td><a href="resources/README.md">Ressourcen-Schrank</a></td><td>Wenn unklar ist, ob Guide, Catalog oder Cookbook</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="RESOURCES.md">Vollständige Ressourcenliste</a></td><td>Um offizielle Docs, Kurse, Communities und weiterführende Lektüre zu finden</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cli-agents-guide.md">CLI-Agent-Auswahlleitfaden</a></td><td>Um Track A vorzubereiten oder CLI-Werkzeuge zu vergleichen</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/courses.md">Karte zu Kursen und Zertifikaten</a></td><td>Um Abschlusszertifikate, Skill-Badges und Zertifizierungsprüfungen zu unterscheiden</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
</table>

## 🤝 Verbessern wir diese Landkarte gemeinsam

- Inhaltsfehler, defekte Links oder veraltete Informationen: eröffnen Sie ein [Issue](https://github.com/WenyuChiou/awesome-agentic-ai-zh/issues).
- Ein Projekt oder eine Lernressource ergänzen: geben Sie bitte an, „welchen Stage und was es lehrt".
- Für eine PR: lesen Sie zuerst [CONTRIBUTING.md](CONTRIBUTING.md) und den [Style-Guide](resources/style-guide.md).
- Neueste Änderungen: siehe [CHANGELOG.md](CHANGELOG.md).

<details markdown="1">
<summary>🧰 Aufklappen: vollständige Beitragsweise und automatische Prüfung</summary>

Sie können Text korrigieren, ein dreisprachiges Spiegelbild ergänzen, fehlende Themen melden oder eine Stage / Rollenroute langfristig pflegen. Beim Hinzufügen eines GitHub-Projektlinks hilft die automatische Prüfung, Archivstatus, Lizenz und letzte Aktualisierung einzusehen; ob es aufgenommen wird, entscheidet der Maintainer nach Lernwert.

Die vollständige Rolle und Regeln stehen in [CONTRIBUTORS.md](CONTRIBUTORS.md).

</details>

## 🙏 Wichtige Inspirationen und verwandte Projekte

- [**Datawhale Hello-Agents**](https://github.com/datawhalechina/hello-agents) — für Leser, die vollständige Kapitel und tiefe Umsetzung brauchen.
- [**Datawhale-Community**](https://github.com/datawhalechina) — chinesische ML-Lerngemeinschaft, die viele verlässliche Lernwege bietet.
- [**liyupi/ai-guide**](https://github.com/liyupi/ai-guide) — eher eine Breiten-Ressourcenbibliothek; dieses Repo ordnet die Lernreihenfolge.

<details markdown="1">
<summary>📖 Aufklappen: Mitwirkende und Zitierformat</summary>

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

## ☕ Unterstützung und Kontakt

Diese Lernlandkarte steht unter MIT-Lizenz und bleibt kostenlos öffentlich. Allgemeine Fragen und Vorschläge bitte über Issues; für privaten Kontakt schreiben Sie an [wenyuchiou12@gmail.com](mailto:wenyuchiou12@gmail.com).

Hat Ihnen diese Landkarte geholfen, geben Sie gerne einen ⭐ Star oder [spendieren Sie dem Autor einen Kaffee](https://www.buymeacoffee.com/wenyuchiou).

## License

MIT. Maintained by [@WenyuChiou](https://github.com/WenyuChiou).
