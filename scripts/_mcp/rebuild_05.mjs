import fs from "fs";

const DIR = "scripts/_mcp";
const src = JSON.parse(fs.readFileSync(`${DIR}/zh-CN/batch_05.json`, "utf8"));
const tr = JSON.parse(fs.readFileSync(`${DIR}/de-DE/batch_05.translated.json`, "utf8"));

const urlOf = s => { const m = s.match(/@@L1@@\]\(([^)]+)\)/); return m ? m[1] : null; };
const ancOf = s => { const m = s.match(/<a name="([^"]+)">/); return m ? m[1] : null; };
const keyOfSrc = s => (urlOf(s) || ancOf(s) || "");
const keyOfTr = s => (urlOf(s) || ancOf(s) || "").replace("glama.ai/mpc/", "glama.ai/mcp/");

// Key -> German (from old file, mpc typo fixed in value)
const trByKey = {};
tr.forEach(o => {
  const k = keyOfTr(o.translated);
  if (k) trByKey[k] = o.translated.replace(/glama\.ai\/mpc\//g, "glama.ai/mcp/");
});

// Manual fresh translations for non-keyed source lines + the 2 missing keyed lines.
const manual = {
  2520: "- @@L0@@ 📇 - RuneScape- und Old School RuneScape-Daten: Item-Preise, Spieler-Hiscores und mehr.",
  2524: "- @@L0@@ 🏎️ 🏠 - Spiele Tic-Tac-Toe gegen einen KI-Gegner.",
  2525: "- @@L0@@ 📇 🏠 🍎 🪟 🐧 - Godot-Spiel-Engine-Integration: Szenenbearbeitung, Skripting, Animation, Tilemaps, Shader, Eingabe-Simulation und Laufzeit-Debugging.",
  2526: "- @@L0@@ @@L1@@](https://glama.ai/mcp/servers/HadiCherkaoui/crafty-mcp) 📇 🏠 🍎 🪟 🐧 - Verwalte Minecraft-Server über die Crafty-Controller-4-API: starten, stoppen, sichern, Befehle senden sowie Dateien, Zeitpläne, Webhooks und Benutzer verwalten.",
  2527: "- @@L0@@ @@L1@@](https://glama.ai/mcp/servers/yanjingzhaisun/cozyvtt-mcp) 🐍 🏠 🍎 🪟 🐧 - Leite Kampagnen als Spielleiter in CozyVTT, einem selbstgehosteten Virtual Tabletop: Würfel, Chat-Erzählung, Token und Karten, Initiative, Charakterbögen und Regelwerke.",
  2531: "Zugriff auf Gesundheitskennzahlen, Wellness-Daten und medizinische Informationen über verschiedene Gesundheitsplattformen.",
  2540: "Steuere Smart-Home-Geräte, Heimnetzwerk-Ausrüstung und Automatisierungssysteme.",
  2545: "- @@L0@@ 🏎️ 🏠 - Steuere AVM FRITZ!Box-Router: Geräte, WLAN, Netzwerkeinstellungen und Kindersicherung verwalten sowie zeitverzögerte Aktionen planen.",
  2554: "Server, die festlegen, wer eine Person oder ein Agent ist und was über sie bekannt sein kann.",
  2561: "Verbinde KI-Agenten mit Industrieanlagen, Maschinen und Operational Technology (OT) — Telemetrie-Erfassung, Überwachung und Steuerung über Fertigungs- und Werksebenen-Protokolle.",
  2565: "- @@L0@@ 🐍 ☁️ - Verbinde KI-Agenten über Protokolle und Hersteller hinweg mit Industrieanlagen: herstellerübergreifende Telemetrie-Normalisierung, Gesundheitsindex und Ausfallvorhersage.",
  2571: "Persistente Speicherung mit Wissensgraphen-Strukturen. Ermöglicht KI-Modellen, strukturierte Informationen über Sitzungen hinweg zu pflegen und abzufragen.",
  2617: "- @@L0@@ ☁️ - Fasse Klartext, Webseiten, PDF-Dokumente, EPUB-Bücher und HTML-Inhalte zusammen.",
  2622: "- @@L0@@ 🐍 🏠 ☁️ - Persistente Erinnerung mit Wissensgraphen-Visualisierung, semantischer/hybrider Suche, Cloud-Sync (S3/R2) und kontextübergreifender Sitzungsverwaltung.",
  2636: "- @@L0@@ 🐍 ☁️ 🏠 - RAG-Plattform, die Graph-RAG, Vektor- und Volltextsuche kombiniert, um Wissensgraphen und Context Engineering aufzubauen.",
  2646: "- @@L0@@ 📇 ☁️ 🏠 - Durchsuche kuratierte Awesome-Listen und rufe die relevantesten Ressourcen für deinen Agenten ab.",
  2647: "- @@L0@@ 📇 🏠 🍎 🪟 🐧 - Sicherer Lese-/Schreibzugriff auf Obsidian-Tresore: Suche, Batch-Operationen, Tag-Verwaltung und Frontmatter-Handhabung.",
  2648: "- @@L0@@ 📇 🏠 - Durchsuche Lenny's Podcast-Transkripte mit YouTube-Zeitstempeln für Produktmanagement-Einblicke zu PRDs, Strategie und PM-Karrieren.",
  2651: "- @@L0@@ 🐍 🏠 - Durchsuche und navigiere Wikipedia und andere Wissensarchive im ZIM-Format offline, mit intelligenter Abfrage und Caching.",
  2661: "- @@L0@@ - Fragen und fasse deine Chat-Nachrichten mit KI-Prompts zusammen.",
  2664: "- @@L0@@ 📇 🏠 - Graph-basierte Erinnerung für KI-Rollenspiel und Geschichtenentwicklung.",
  2669: "- @@L0@@ 📇 ☁️ 🏠 🍎 🪟 🐧 - Sitzungs-Erinnerung mit gestuftem Speicher, Kontext-Gesundheitsüberwachung, Reasoning-Qualitätsprüfung und Wahrheitsprüfung.",
  2674: "- @@L0@@ 📇 🏠 - Übergabe von Gesprächskontext zwischen Claude-Desktop-Projekten und über MCP-Clients hinweg, in Erinnerung statt in Dateien gespeichert.",
  2675: "- @@L0@@ 📇 🏠 🍎 🪟 🐧 - Chatte mit KI-Personas bekannter Gründer und Investoren wie Elon Musk, Warren Buffett und Steve Jobs, basierend auf deren Stimme, Frameworks und Prinzipien.",
  2684: "- @@L0@@ 📇 ☁️ 🏠 🍎 - Desktop-App, die Bildschirmaktivität erfasst, KI-Zusammenfassungen und OCR-Text lokal speichert und den Verlauf über semantische Suche und eine Zeitleiste bereitstellt.",
  2686: "- @@L0@@ 📇 ☁️ 🏠 - Selbstgehosteter Dokumentations-Indexer, der Agenten Dokumente aus verschiedenen Quellen über semantische Suche bereitstellt.",
  2687: "- @@L0@@ 📇 🏠 - Statischer Server, der KI-Modellen persistenten, werkszeugspezifischen Kontext und Regeln bereitstellt.",
  2688: "- @@L0@@ 📇 🏠 - Erinnerungs-Service mit semantischer Suche, persistentem Speicher und autonomer Erinnerungskonsolidierung.",
  2695: "- @@L0@@ 🐍 🏠 - Zettelkasten-Wissensverwaltung: atomare Notizen erstellen, verknüpfen und durchsuchen.",
  2696: "- @@L0@@ 🐍 🏠 - Drei-Ebenen-Agenten-Erinnerung (Identität, aktiv, Archiv) mit semantischer Suche, Graphen-Beziehungen und Konflikterkennung.",
  2698: "- @@L0@@ 🐍 🏠 🍎 🪟 🐧 - Persistenter, durchsuchbarer Kontextspeicher über Claude-Code-Sitzungen hinweg mit SQLite FTS5, mit KI-Sitzungszusammenfassungen, Checkpoint-Wiederherstellung und einem Web-Dashboard.",
  2710: "- @@L0@@ 📇 🏠 - Verwalte persönliches Wissen, tägliche Notizen und wiederverwendbare Prompts in GitHub-Gists, als Begleiter für GistPad.",
  2711: "- @@L0@@ 📇 ☁️ - Wissens-Marktplatz, auf dem Agenten bereits gelöste Probleme suchen, veröffentlichen und freischalten und Token für geteilte Lösungen verdienen.",
  2712: "- @@L0@@ 📇 ☁️ - Lade Inhalte aus Slack, Discord, Websites, Google Drive, Linear oder GitHub in ein Graphlit-Projekt und durchsuche und rufe dann relevantes Wissen ab.",
  2716: "- @@L0@@ 🐍 🏠 - Rufe Dokumentation über Vektorsuche ab und verarbeite sie, um Antworten mit relevantem Dokumentationskontext anzureichern.",
  2718: "- @@L0@@ 🐍 ☁️ 🍎 🪟 🐧 - Greife auf serverlose RAGStack-Wissensdatenbanken auf AWS zu: suchen, mit KI-Antworten chatten, Dokumente und Medien hochladen, Websites scrapen und Metadaten analysieren.",
  2720: "- @@L0@@ 📇 ☁️ 🍎 🪟 🐧 - Cloud-basierte persistente Erinnerung für Claude Code mit semantischer Suche, KI-Extraktion und Projektabgrenzung.",
  2732: "- @@L0@@ 📇 🏠 - Kommunikation und Erinnerungs-Sharing über LLMs hinweg, damit verschiedene KI-Modelle zusammenarbeiten und Kontext über Gespräche hinweg teilen können.",
  2733: "- @@L0@@ 📇 🏠 - Speichere und rufe Gesprächserinnerungen mehrerer LLMs in MongoDB ab, mit Zeitstempeln und LLM-Kennung.",
  2735: "- @@L0@@ 🏎️ ☁️ 🐧 - Einfache Erinnerung für Coding-Agenten mit DuckDB und VoyageAI.",
  2738: "- @@L0@@ 📇 🏠 - Konvertiere Markdown in interaktive markmap-Mindmaps mit PNG/JPG/SVG-Export und Live-Browser-Vorschau.",
  2742: "- @@L0@@ 📇 ☁️ - Arbeite mit Sammlungen und Quellen in deiner Zotero-Cloud-Bibliothek.",
  2754: "- @@L0@@ 📇 🏠 ☁️ - Besinnliche Problemlösung mit dem Framework des Lotos-Sutras: multiperspektivisches Reasoning, geschickte Mittel, nicht-duale Erkenntnis und Meditationspausen.",
  2757: "- @@L0@@ 📇 🏠 🍎 🪟 🐧 - Erstelle, lies, aktualisiere und durchsuche Notizen in lokalen Obsidian-Tresoren über Dateisystemzugriff.",
  2761: "- @@L0@@ 🐍 🏠 - Strukturierte, personengesteuerte Sitzungen für Vorstellungsgespräch-Vorbereitung, Selbstreflexion und Coaching, mit Timern und Leistungsbewertung.",
  2764: "- @@L0@@ 🐍 🏠 🍎 🪟 🐧 - Persistente fraktale Graphen-Erinnerung für Coding-Agenten: semantische Suche, Hot/Cold/Archiv-Kontextstufen und Entscheidungs-Tracking auf Qdrant.",
  2768: "- @@L0@@ 🐍 🏠 🍎 🪟 🐧 - Zweistufige Erinnerung (Hot-Cache und kalte semantische Suche), die häufig genutzte Muster befördert, Wissen aus Claude-Ausgaben extrahiert und in einem Graphen verknüpft.",
  2770: "- @@L0@@ 📇 ☁️ 🏠 🍎 🪟 🐧 - Strategisches Reasoning, multiperspektivische Debattenanalyse und interaktive Beratungssitzungen über die Counsel-API.",
  2774: "- @@L0@@ 📇 🏠 - Wissensgraphen-basierte persistente Erinnerung zur Kontexterhaltung.",
  2776: "- @@L0@@ 📇 ☁️ - Auf den Workspace bezogener, von mehreren Entwicklern geteilter Wissensgraph, gehostet auf Azure Functions mit Table-Speicher.",
  2777: "- @@L0@@ 🏎️ 🏠 🍎 🪟 🐧 - Lokaler, abhängigkeitsfreier Erinnerungs-Server als einzelne Binary ausgeliefert.",
  2780: "- @@L0@@ 📇 🏠 ☁️ 🍎 🪟 🐧 - Persistente gemeinsame Erinnerung für Coding-Agenten: Fakten als Entity/Key/Value-Tripel gespeichert mit hybrider semantischer Suche, Aufgaben-Checkpoints und Konfliktauflösung.",
  2782: "- @@L0@@ 🐍 🏠 - Mache Markdown-Dokumentation durchsuchbar: lädt sie in SQLite oder PostgreSQL mit Schlüsselwortsuche und optionaler pgvector-hybrider semantischer Suche.",
  2783: "- @@L0@@ 🐍 🏠 🍎 🐧 - Lokale FAISS-Vektordatenbank für RAG mit Dokumentenaufnahme (PDF, TXT, MD, DOCX), semantischer Suche, Re-Ranking und CLI-Tools zum Indexieren und Abfragen.",
  2785: "- @@L0@@ 🏎️ ☁️ 🏠 🍎 🪟 🐧 - Verbinde dich mit jedem MediaWiki-Wiki (Wikipedia, Fandom, Unternehmens-Wikis), um Seiten zu suchen, zu lesen und zu bearbeiten, Links zu analysieren, Versionshistorie anzusehen und in Markdown zu konvertieren.",
  2786: "- @@L0@@ 🐍 🏠 🍎 🪟 🐧 - Local-First persistente Erinnerung für Coding-Agenten mit semantischer Suche, Auto-Capture, sitzungsübergreifendem Lernen und intelligentem Vergessen.",
  2790: "- @@L0@@ 🐍 ☁️ - Durchsuche deine Mendeley-Bibliothek, stöbere in Ordnern, rufe Dokument-Metadaten ab, durchsuche den globalen Katalog und füge Paper deiner Sammlung hinzu.",
  2794: "- @@L0@@ 📇 🏠 🍎 🪟 🐧 - Sicherheitsgehärteter Google NotebookLM-Zugriff: sitzungsbasierte Gespräche, Notebook-Bibliotheksverwaltung und quellengestützte Antworten, mit Post-Quantum-Verschlüsselung.",
  2797: "- @@L0@@ 📇 🦀 🏠 🍎 🐧 🪟 - Kumulatives Gedächtnis und Musterlernen für Coding-Assistenten, mit lokalem SQLite/SurrealDB-Speicher für semantische Codebase-Analyse.",
  2800: "- @@L0@@ 🎖️ 🦀 ☁️ - Verbinde dich mit deinem Pinecone Assistant und rufe Kontext aus dessen Wissens-Engine ab.",
  2802: "- @@L0@@ 🦀 🏠 🍎 🪟 🐧 - Persistente semantische und graph-basierte Agenten-Erinnerung in einer einzelnen, in sich geschlossenen Binary mit eingebetteter Datenbank und Modellen.",
  2805: "- @@L0@@ 📇 ☁️ - Rufe Kontext aus deiner Ragie-Wissensdatenbank ab, verbunden mit Quellen wie Google Drive, Notion und Jira.",
  2808: "- @@L0@@ 🏎️ 🏠 ☁️ 🍎 🪟 🐧 - LLM-gesteuertes Kontext- und Erinnerungsmanagement: Kurz- und Langzeitgedächtnis mit Vektor-, Zeitlinien- und Wissensgraphen-Abfrage plus Re-Ranking.",
  2828: "- @@L0@@ 📇 🏠 - Lokale Dokumentensuche: semantische Suche über PDF-, DOCX-, TXT- und Markdown-Dateien mit LanceDB-Vektorspeicher und lokalen Embeddings.",
  2834: "- @@L0@@ 🐍 🏠 - Fünfstufiges KI-Kollaborationssystem mit persistentem Local-First-Gedächtnis über MemDocs und antizipativen Fähigkeiten.",
  2837: "- @@L0@@ 📇 🏠 🍎 🪟 🐧 - Remote-Obsidian-Tresor-Verwaltung über SSE: Notizen, Verzeichnisse, Frontmatter, Tags, Suche und Link-Operationen, bereitstellbar mit Docker.",
  2841: "- @@L0@@ 📇 ☁️ - Beantworte Fragen aus deiner Produktdokumentation mit dem RAG-System von Biel.ai.",
  2844: "- @@L0@@ 🏎️ 🏠 ☁️ 🍎 🪟 🐧 - Lokales RAG für semantische Vektorsuche über Markdown-Dokumente mit sqlite-vec- und multilingual-e5-small-Embeddings, filterbar nach Verzeichnis und Dateiname.",
  2845: "- @@L0@@ 📇 🏠 - Erinnerungs-Manager für KI-Apps und Agenten mit Graph- und Vektor-Speichern, mit Aufnahme aus vielen Datenquellen.",
  2846: "- @@L0@@ 📇 ☁️ - Siebenstufiges rekursives Agenten-Gedächtnis mit Kontext-Verzweigung, holografischer Erinnerung, Traumkonsolidierung und On-Chain-Persistenz.",
  2847: "- @@L0@@ 🐍 🏠 - Tragbare, datenschutzorientierte KI-Identität: ein Home-Verzeichnis für deine Agenten mit Profilverwaltung, Skills, Lebenslauf-Import und Team-Sync.",
  2850: "- @@L0@@ 🐍 🏠 - Persistente Identität für KI-Agenten: Server für Laufwerke, Beziehungen, semantisches Gedächtnis mit Abfall, Arbeits-Threads, gelernte Muster, Journaling und Prognosen.",
  2853: "- @@L0@@ 📇 ☁️ - Speichere und frage Agenten-Erinnerung verteilt mit Membase ab.",
  2854: "- @@L0@@ 📇 ☁️ - Aktuelle Code-Dokumentation für LLMs und KI-Code-Editoren.",
  2855: "- @@L0@@ 🦀 🏠 - Kognitives Agenten-Gedächtnis mit Hebbschem Lernen, einer Drei-Ebenen-Architektur und Wissensgraphen, offline auf Edge-Geräten lauffähig.",
  2858: "- @@L0@@ 🐍 ☁️ 🏠 - Hindsight: Langzeitgedächtnis für KI-Agenten, modelliert nach menschlichem Gedächtnis.",
  2905: "Zugriff auf Rechtsinformationen, Gesetzgebung und juristische Datenbanken. Ermöglicht KI-Modellen, juristische Dokumente und regulatorische Informationen zu durchsuchen und zu analysieren.",
  2913: "- @@L0@@ 🐍 ☁️ - Regulatorische Compliance für den AI Act, die DSGVO und DORA, mit Zitaten auf Artikelebene.",
  2920: "- @@L0@@ 📇 ☁️ - Zugriff auf US-Gesetzgebung.",
  2942: "Standortbasierte Dienste und Kartierungstools. Ermöglicht KI-Modellen, mit geografischen Daten, Wetterinformationen und standortbasierter Analytik zu arbeiten.",
  2952: "- @@L0@@ 🐍 ☁️ - IP-Adressen-Geolokalisierung und Netzwerkinformationen über die IPinfo-API.",
  2954: "- @@L0@@ 📇 ☁️ - Erkunde französische Gemeinden und Kataster-Parzellen nach Name und Fläche.",
  2956: "- @@L0@@ 🐍 ☁️ - Echtzeit-Wettervorhersagen und aktuelle Bedingungen für jeden Ort über WeatherAPI.com.",
  2957: "- @@L0@@ 📇 ☁️ - Durchsuche lokale Unternehmen weltweit, mit Konfidenz-Scores und Agenten-Vertrauensrankings.",
  2966: "- @@L0@@ 🐍 ☁️ - Geolokalisierung, Proxy- und Netzwerkinformationen für eine IP-Adresse über die IP2Location.io-API.",
  2967: "- @@L0@@ 🐍 ☁️ - IP-Adressen-Geolokalisierung über die IP Find API.",
  2968: "- @@L0@@ 🐍 📇 ☁️ - IP-Geolokalisierung über Aiwen: Land, Region, Stadt, Koordinaten, ISP und Inhaber einer IP-Adresse.",
  2969: "- @@L0@@ 🎖️ 📇 🏠 - Sieh IP-Geolokalisierung und Netzwerkinformationen nach, erkenne Proxys und VPNs und finde Missbrauchs-Kontakte über IPLocate.io.",
  2970: "- @@L0@@ 🐍 ☁️ - Hole Wetterinformationen von der Open-Meteo-API.",
  2971: "- @@L0@@ 🐍 🏠 - OpenStreetMap-standortbasierte Dienste und geospatiale Daten.",
  2973: "- @@L0@@ 🐍 ☁️ - Suche nach nahegelegenen Orten mit IP-basierter Standorterkennung.",
  2974: "- @@L0@@ 🏠 - Interagiere mit geospatialen Daten und Diensten über die GeoServer-REST-API.",
  2975: "- @@L0@@ 🏠 - Geospatiale Operationen und Transformationen mit GIS-Bibliotheken.",
  2977: "- @@L0@@ 🐍 🏠 🍎 🪟 🐧 - Geospatiale Werkzeuge: Geocoding, Routing, Höhe, räumliche Analyse und Datei-E/A für Shapefile, GeoJSON und GeoPackage.",
  2983: "- @@L0@@ - Verbindet QGIS Desktop mit Claude für prompt-unterstützte Projekterstellung, Layer-Laden und Code-Ausführung.",
  2984: "- @@L0@@ 🐍 ☁️ - Detaillierte Sieben-Tage-Wettervorhersagen für jeden Ort der Welt.",
  2985: "- @@L0@@ 🐍 ☁️ - Echtzeit-Wetter, Vorhersagen und historische Wetterdaten von der OpenWeatherMap-API.",
  2986: "- @@L0@@ 🐍 🏠 - Ermittle die Uhrzeit in jeder Zeitzone und die aktuelle Ortszeit.",
  2987: "- @@L0@@ 📇 ☁️ - Stadia Maps Standort-APIs: geocodiere Adressen und Orte, finde Zeitzonen und erstelle Routen und statische Karten.",
  2991: "- @@L0@@ 📇 ☁️ - Wettervorhersagen über die AccuWeather-API.",
  2993: "- @@L0@@ 📇 - Sendungsverfolgung und Logistikmanagement über die TrackMage-API.",
  2996: "- @@L0@@ 🐍 🏠 - Geocoding über Nominatim, ArcGIS und Bing.",
  3002: "Werkzeuge zum Erstellen und Bearbeiten von Marketing-Inhalten, Arbeiten mit Web-Metadaten, Produkt-Positionierung und Redaktions-Leitfäden.",
  3011: "- @@L0@@ 🐍 ☁️ - TikTok-Ads-API-Integration: Kampagnen verwalten, Performance-Metriken analysieren und Audiences und Creatives handhaben.",
  3018: "- @@L0@@ 📇 🏠 - LinkedHelper-Automatisierungs-CLI: Kampagnen-Management, Messaging und Profil-Abfragen über das Chrome-DevTools-Protokoll."
};

const out = [];
for (const o of src) {
  const k = keyOfSrc(o.masked);
  let translated = null;
  if (k && trByKey[k]) translated = trByKey[k];
  else if (manual[o.line]) translated = manual[o.line];
  if (!translated) {
    console.error("MISSING translation for line", o.line, ":", o.masked);
    process.exit(1);
  }
  out.push({ line: o.line, translated });
}

fs.writeFileSync(`${DIR}/de-DE/batch_05.translated.json`, JSON.stringify(out, null, 0) + "\n");
console.log("wrote", out.length, "entries");
