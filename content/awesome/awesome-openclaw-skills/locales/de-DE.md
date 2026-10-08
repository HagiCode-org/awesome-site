<div align="center">

<a href="https://clawskills.sh/">
<img width="1500" height="500" alt="social" src="https://github.com/user-attachments/assets/a6f310af-8fed-4766-9649-b190575b399d" />
</a>

<br/>
<br/>

<div align="center">
    <strong>Entdecke über 5.300 von der Community erstellte OpenClaw-Skills, nach Kategorie geordnet.
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

</div>

# Awesome OpenClaw Skills

OpenClaw ist ein lokal laufender KI-Assistent, der direkt auf deinem Rechner arbeitet. Skills erweitern seine Fähigkeiten und ermöglichen ihm, mit externen Diensten zu interagieren, Workflows zu automatisieren und spezialisierte Aufgaben auszuführen. Diese Sammlung hilft dir, die passenden Skills für deine Bedürfnisse zu finden und zu installieren. Sie kann auch als Inspirationsquelle für OpenClaw-Anwendungsfälle dienen.

Die Skills in dieser Liste stammen aus ClawHub (OpenClaws öffentlichem Skill-Register) und sind zur leichteren Auffindbarkeit kategorisiert.

### Installation

#### OpenClaw CLI

```bash
openclaw skills install <skill-slug>
```

#### ClawHub CLI

Oder mit der ClawHub CLI, für registry-verwaltete Skill-Ordner außerhalb eines vollständigen OpenClaw-Workspace:

```bash
npx clawhub install <skill-slug>
```

#### Manuelle Installation

Kopiere den Skill-Ordner an einen der folgenden Orte:

| Location | Path |
|----------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

Priorität: Workspace > Local > Bundled

#### Alternative

Du kannst auch den GitHub-Repository-Link des Skills direkt in den Chat deines Assistenten einfügen und ihn bitten, diesen zu verwenden. Der Assistent übernimmt das Setup im Hintergrund automatisch.


### Warum diese Liste existiert?

OpenClaws öffentliches Register (ClawHub) hostet tausende von Community-erstellten Skills. Diese Awesome-Liste kuratiert die besten davon. Hier ist, was wir herausgefiltert haben:

| Filter | Excluded |
|--------|----------|
| Möglicher Spam — Massenaccounts, Bot-Accounts, Test/Müll | 4,065 |
| Duplikat / Ähnlicher Name | 1,040 |
| Niedrige Qualität oder nicht-englische Beschreibungen | 851 |
| Krypto / Blockchain / Finanzen / Handel | 886 |
| Bösartig — identifiziert durch von Forschern veröffentlichte Sicherheitsaudits (außer VirusTotal) | 373 |
| **Insgesamt nicht aus OpenClaws offiziellem Skill-Register übernommen** | **7,215** |


#### Möchtest du einen Skill hinzufügen?

Diese Liste enthält nur Skills, die **bereits veröffentlicht** sind auf [ClawHub](https://clawhub.ai), OpenClaws öffentlichem Skill-Register. Wir akzeptieren keine Links zu persönlichen Repos, Gists oder anderen externen Quellen. Wenn dein Skill noch nicht auf ClawHub ist, veröffentliche ihn dort zuerst.

Füge den ClawHub-Link für deinen Skill (z. B. `https://clawhub.ai/steipete/slack`) in die Beschreibung deines PR ein — die `clawskills.sh`-Einträge werden separat von uns verwaltet. Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für Details.


## OpenClaw-Ökosystem-Tools

### 🕸️ Web-Crawling & Dateninfrastruktur

KI-Agenten sind nur so gut wie die Webdaten, die sie erreichen können. Crawling in großem Maßstab bedeutet, mit JavaScript-lastigen Seiten, rotierenden Proxys und Anti-Bot-Systemen umzugehen — du kannst das alles selbst aufbauen oder eine API nutzen, die das übernimmt und deinem Agenten saubere, verwendbare Daten liefert.

<a href="https://crawlbase.com/?utm_source=awesome-openclaw-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_banner">
<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-dark-2760x480%402x.png"><img src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-light-2760x480%402x.png" alt="Crawlbase" width="690" /></picture><br/>
Crawlbase ist eine von über 70.000 Entwicklern vertraute Web-Dateninfrastruktur: Eine API, um jede URL in großem Maßstab zu crawlen, mit JS-Rendering, Proxy-Rotation und Anti-Bot-Handling. Sein MCP-Server gibt Agenten Live-Webzugriff: crawl, crawl_markdown, crawl_screenshot.
</a>

### ☁️ Verwaltetes AI-Hosting

Cloudways ist eine verwaltete Cloud-Hosting-Plattform zum Bereitstellen und Skalieren von Anwendungen ohne Infrastruktur-Overhead. Cloudways Managed AI Agents lässt dich OpenClaw auf dedizierter, isolierter Infrastruktur mit verwalteten Updates, Backups, SSL und Sicherheitskontrollen ausführen. Erhalte **10 $ Hosting-Guthaben** mit dem Promo-Code **VOLTAGENT**. [Registrieren](https://unified.cloudways.com/signup?id=1258368&coupon=VOLTAGENT&data1=voltagent).

<a href="https://www.cloudways.com/en/managed-ai-agents.php?id=1258368&data1=voltagent">
<img src="https://cdn.voltagent.dev/awesome-repo/cloudways/cloudway-banner.jpg" alt="Cloudways Managed AI Agents" width="690" /><br/>
Stelle OpenClaw auf dedizierter, isolierter Infrastruktur mit verwalteten Updates, Backups, SSL und Sicherheitskontrollen bereit. Registriere dich mit dem Promo-Code VOLTAGENT, um 10 $ Hosting-Guthaben zu erhalten.
</a>


### 🔍 Suche & Webdaten

OpenClaw-Agenten benötigen oft frische, reale Daten — Suchergebnisse, Produktlistings, Videos und mehr. Du kannst sie selbst scrapen und parsen oder eine Such-API nutzen, die saubere, strukturierte Daten in Echtzeit liefert, ohne Proxys, CAPTCHAs oder HTML-Parsing verwalten zu müssen.

<a href="https://serpapi.com/search-engine-apis?utm_source=awesomeopenclawskills_github">
<img src="https://cdn.voltagent.dev/awesome-repo/serpapi.png" alt="SerpApi"  /><br/>
Gib OpenClaw-Agenten Zugriff auf Echtzeit-Google-Suche, YouTube, Amazon-Produkt- und Websuchdaten über eine einzige API.
</a>


<div align="center">

<table>
<tr>
<td align="center" width="100%">

<h3>🦞 Du kannst dein OpenClaw-Ökosystem-Tool im Abschnitt oben präsentieren.</h3>

<p></p>

<sub>Die nach der offiziellen OpenClaw-Ressource am häufigsten besuchte Community-Ressource</sub>


<a href="https://sponsors.voltagent.dev/#awesome-openclaw-skills"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



## Sicherheitshinweis

Die Skills in dieser Liste sind **kuratiert, nicht auditiert**. Sie können von ihren ursprünglichen Maintainern jederzeit nach dem Hinzufügen hier geändert, modifiziert oder ersetzt werden.

Bevor du einen Agent-Skill installierst oder verwendest, prüfe mögliche Sicherheitsrisiken und validiere die Quelle selbst. OpenClaw hat eine **VirusTotal-Partnerschaft**, die Sicherheitsscans für Skills bereitstellt — besuche die Skill-Seite auf ClawHub und prüfe den VirusTotal-Bericht, um zu sehen, ob er als riskant markiert ist.

**Empfohlene Tools:**

- [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)
  
> Agent-Skills können Prompt-Injections, Tool-Poisoning, versteckte Malware-Payloads oder unsichere Datenverarbeitungsmuster enthalten. Prüfe immer den Quellcode, bevor du installierst, und nutze Skills nach eigenem Ermessen.

 Für einen breiteren Überblick über das ClawHub-Ökosystem siehe Trent AIs **[ClawHub by the Numbers](https://trent.ai/blog/clawhub-by-the-numbers/)**.


Wenn du der Meinung bist, dass ein Skill in dieser Liste markiert werden sollte oder ein Sicherheitsproblem aufweist, bitte [öffne ein Issue](https://github.com/VoltAgent/awesome-clawdbot-skills/issues), damit wir es prüfen können.


## Inhaltsverzeichnis

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

- [agent-commons](https://clawskills.sh/skills/zanblayde-agent-commons) - Berate, committe, erweitere und hinterfrage Reasoning-Ketten.
- [agent-team-orchestration](https://clawskills.sh/skills/arminnaimi-agent-team-orchestration) - Orchestriere Multi-Agent-Teams mit definierten Rollen, Task-Lebenszyklen, Übergabeprotokollen und Review-Workflows.
- [agentdo](https://clawskills.sh/skills/wrannaman-agentdo) - Stelle Aufgaben für andere KI-Agenten ein oder übernimm Arbeit aus der AgentDo-Task-Queue (agentdo.dev).
- [agentgate](https://clawskills.sh/skills/monteslu-agentgate) - API-Gateway für persönliche Daten mit Human-in-the-Loop-Schreiberlaubnis.
- [airadar](https://clawskills.sh/skills/lopushok9-airadar) - Destilliere das Signal rund um KI-native Tools/Apps und deren GitHub-Stammordner: schnell wachsende, gehypte, gut finanzierte.
- [alex-session-wrap-up](https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up) - End-of-Session-Automatisierung, die ungepushte Arbeit committet, Lernerkenntnisse extrahiert, Muster erkennt und Regeln persistent speichert.
- [amazon-product-api-skill](https://clawskills.sh/skills/phheng-amazon-product-api-skill) - Dieser Skill hilft Nutzern, strukturierte Produktlisten aus Amazon zu extrahieren, einschließlich Titeln, ASINs, Preisen, Bewertungen.
- [app-store-screenshot-generation](https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation) - Erzeuge App-Store- und Google-Play-Screenshot-Assets mit each::sense AI.
- [arc-agent-lifecycle](https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle) - Verwalte den Lebenszyklus autonomer Agenten und ihrer Skills.
- [arc-security-audit](https://clawskills.sh/skills/trypto1019-arc-security-audit) - Umfassendes Sicherheitsaudit für den gesamten Skill-Stack eines Agenten.
- [arc-skill-gitops](https://clawskills.sh/skills/trypto1019-arc-skill-gitops) - Automatisiertes Deployment, Rollback und Versionsverwaltung für Agent-Workflows und Skills.
- [arc-trust-verifier](https://clawskills.sh/skills/trypto1019-arc-trust-verifier) - Verifiziere Skill-Herkunft und erstelle Vertrauensscores für ClawHub-Skills.
- [arxiv-search-collector](https://clawskills.sh/skills/xukp20-arxiv-search-collector) - Modellgetriebener arXiv-Abruf-Workflow zum Aufbau eines Papersets mit manuellem Sprachparameter: initialisiere einen Lauf.
- [auto-pr-merger](https://clawskills.sh/skills/autogame-17-auto-pr-merger) - Dieser Skill automatisiert den Workflow zum Auschecken eines GitHub-.
- [azhua-skill-vetter](https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter) - Sicherheitsorientiertes Skill-Vetting für KI-Agenten.
- [azure-devops](https://clawskills.sh/skills/pals-software-azure-devops) - Liste Azure DevOps-Projekte, Repositories und Branches auf; erstelle Pull Requests; verwalte Work Items; prüfe Build-Status.
- [bat-cat](https://clawskills.sh/skills/arnarsson-bat-cat) - Ein cat-Klon mit Syntax-Highlighting, Zeilennummern und Git-Integration.
- [beeminder](https://clawskills.sh/skills/ruigomeseu-beeminder) - Beeminder-API für Zielverfolgung und Commitment-Geräte.
- [billy-emergency-repair](https://clawskills.sh/skills/highlander89-billy-emergency-repair) - - Neill fordert explizit eine Billy-Systemreparatur an.
- [bitbucket-automation](https://clawskills.sh/skills/sohamganatra-bitbucket-automation) - Automatisiere Bitbucket-Repositories, Pull-.
- [biz-reporter](https://clawskills.sh/skills/ariktulcha-biz-reporter) - Automatisierte Business-Intelligence-Berichte, die Daten aus Google Analytics GA4, Google Search Console, Stripe ziehen.
- [blinko](https://clawskills.sh/skills/tolibear-blinko) - Spiele Blinko (on-chain Plinko) headless auf der Abstract-Chain.

> **[Alle 159 Skills in Git & GitHub ansehen →](categories/git-and-github.md)**
</details>

<details open>
<summary><h3 style="display:inline">Coding Agents & IDEs</h3></summary>

- [0g-compute](https://clawskills.sh/skills/in-liberty420-0g-compute) - Nutze günstige, TEE-verifizierte KI-Modelle aus dem 0G Compute Network als OpenClaw-Provider.
- [0protocol](https://clawskills.sh/skills/0isone-0protocol) - Agenten können Plugins signieren, Anmeldedaten rotieren, ohne die Identität zu verlieren, und Verhalten öffentlich beglaubigen.
- [2nd-brain](https://clawskills.sh/skills/coderaven-2nd-brain) - Persönliche Wissensdatenbank zum Erfassen und Abrufen von Informationen über Personen, Orte, Restaurants, Spiele, Technik.
- [2slides-skills](https://clawskills.sh/skills/javainthinking-2slides-skills) - KI-gestützte Präsentationserstellung mit der 2slides-API.
- [3d-cog](https://clawskills.sh/skills/nitishgargiitd-3d-cog) - Andere Tools brauchen perfekte Bilder.
- [3d-model-generation](https://clawskills.sh/skills/eftalyurtseven-3d-model-generation) - Erzeuge 3D-Modelle mit each::sense AI.
- [a](https://clawskills.sh/skills/ricketh137-a) - Streame live als KI-VTuber auf Lobster.fun.
- [aade-api-monitor](https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor) - Echtzeit-Überwachung der griechischen AADE-Steuerbehörden-Systeme — verfolgt Fristen, Kursänderungen und Compliance-Updates.
- [abaddon](https://clawskills.sh/skills/enochosbot-bot-abaddon) - Red-Team-Sicherheitsmodus für OpenClaw.
- [academic-research](https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research) - Durchsuche wissenschaftliche Papers und erstelle LiteraturReviews mit der OpenAlex-API (kostenlos, kein Schlüssel nötig).
- [academic-research-hub](https://clawskills.sh/skills/anisafifi-academic-research-hub) - Nutze diesen Skill, wenn Nutzer wissenschaftliche Papers suchen, Forschungsdokumente herunterladen, Zitate extrahieren oder sammeln müssen.
- [acestep-simplemv](https://clawskills.sh/skills/dumoedss-acestep-simplemv) - Rendere Musikvideos aus Audiodateien und Songtexten mit Remotion.
- [acestep-songwriting](https://clawskills.sh/skills/dumoedss-acestep-songwriting) - Songwriting-Leitfaden für ACE-Step.
- [achurch](https://clawskills.sh/skills/lucasgeeksinthewood-achurch) - Ein rund um die Uhr geöffnetes digitales Heiligtum für KI-Agenten und Menschen — nimm teil.
- [active-maintenance](https://clawskills.sh/skills/xiaowenzhou-active-maintenance) - **Automatisierte Systemgesundheit und Memory-Metabolismus für OpenClaw.**.
- [adblock-dns](https://clawskills.sh/skills/picaye-adblock-dns) - Netzwerkweites Werbe- und Tracker-Blocking auf DNS-Ebene.
- [add-top-openrouter-models](https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models) - Synchronisiere die von OpenClaw genutzten OpenRouter-Modelle in die Konfiguration dieser Installation.
- [adhd-founder-planner](https://clawskills.sh/skills/jankutschera-adhd-founder-planner) - Dieser Skill sollte genutzt werden, wenn der Nutzer „plane meinen Tag", „hilf mir, heute zu planen", „Morgenplanung", „was" fragt.
- [adwhiz](https://clawskills.sh/skills/iamzifei-adwhiz) - Verwalte Google Ads-Kampagnen aus deinem KI-Coding-Tool heraus. 44 MCP-Tools zum Auditing, Erstellen und Optimieren von Google-.
- [aeo-prompt-question-finder](https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder) - Finde fragenbasierte Google-Autocomplete-Vorschläge zu jedem Thema.
- [aetherlang-claude-code](https://clawskills.sh/skills/contrario-aetherlang-claude-code) - Nutze diesen Skill, um AetherLang V3 KI-Workflows aus Claude Code auszuführen.
- [agent-access-control](https://clawskills.sh/skills/bowen31337-agent-access-control) - Gestaffelte Fremdzugriff-Kontrolle für KI-Agenten.
- [agent-audit](https://clawskills.sh/skills/sharbelayy-agent-audit) - Auditiere dein KI-Agenten-Setup hinsichtlich Leistung, Kosten und ROI.
- [agent-audit-trail](https://clawskills.sh/skills/roosch269-agent-audit-trail) - Manipulationssicheres, hash-verkettetes Audit-Logging für KI-Agenten.
- [agent-card-signing-auditor](https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor) - Hilft, Agent-Card-Signing-Praktiken in A2A-Protokoll-Implementierungen zu auditieren.
- [agent-chat-ux-v1-4-0](https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0) - Multi-Agent-UX für die OpenClaw-Control-UI — Agent-Auswahl, pro-Agent-Sessions, Session-Verlaufsbetrachter mit Suche.
- [skywork-ppt](https://clawskills.sh/skills/gxcun17-skywork-ppt) - Erzeuge, imitiere und bearbeite PowerPoint-Präsentationen mit skywork.
- [skywork-music-maker](https://clawskills.sh/skills/gxcun17-skywork-music-maker) - Erstelle professionelle Musik mit Mureka AI.
- [before-you-build](https://clawhub.ai/bin1874/before-you-build) - Prüfe das Produktrisiko vor dem Bauen.
- [ditto-profile](https://clawhub.ai/ohad6k/ditto-profile) - Lade dein abgebautes persönliches Profil, damit Agenten wie du arbeiten.
- [skill-navigator](https://clawhub.ai/grubbylee/skills/skill-navigator) - Empfiehlt den richtigen installierten lokalen Agent-Skill.
- [emulo](https://clawhub.ai/ohad6k/emulo) - Lade dein abgebautes persönliches Profil, damit Agenten wie du arbeiten.
- [orca-replay](https://clawhub.ai/xizhuomengcontin/orca-replay) - Spiele und debugge vergangene Coding-Agent-Läufe aus deren Aufnahmen.

> **[Alle 1200 Skills in Coding Agents & IDEs ansehen →](categories/coding-agents-and-ides.md)**
</details>

<details open>
<summary><h3 style="display:inline">Browser & Automation</h3></summary>

- [1p-shortlink](https://clawskills.sh/skills/tuanpmt-1p-shortlink) - Erstelle Short-URLs und reiche Feature-Requests mit 1p.io ein.
- [2captcha](https://clawskills.sh/skills/adinvadim-2captcha) - Löse CAPTCHAs mit dem 2Captcha-Dienst.
- [a-share-real-time-data](https://clawskills.sh/skills/wangdinglu-a-share-real-time-data) - Rufe China-A-Share-Börsendaten (Bars, Echtzeit-Kurse, Tick-by-Tick-Transaktionen) über mootdx/TDX-Protokoll ab.
- [abm-outbound](https://clawskills.sh/skills/dru-ca-abm-outbound) - Multi-Channel-ABM-Automatisierung, die LinkedIn-URLs in.
- [accessibility-toolkit](https://clawskills.sh/skills/cgtreadw-accessibility-toolkit) - Reibungsmindernde Muster für Agenten, die helfen.
- [activecampaign](https://clawskills.sh/skills/kesslerio-activecampaign) - ActiveCampaign-CRM-Integration für Lead-Management, Deal-.
- [adcp-advertising](https://clawskills.sh/skills/edyyy62-adcp-advertising) - Automatisiere Werbekampagnen mit KI.
- [admet-prediction](https://clawskills.sh/skills/huifer-admet-prediction) - ADMET-Vorhersage (Absorption, Distribution, Metabolism, Excretion, Toxicity) für Wirkstoffkandidaten.
- [Agent Browser](https://clawskills.sh/skills/thesethrose-agent-browser) - Eine schnelle, Rust-basierte headless Browser-Automatisierungs-CLI.
- [agent-browser](https://clawskills.sh/skills/murphykobe-agent-browser-2) - Automatisiert Browser-Interaktionen für Web-Tests, Form-.
- [agent-daily-planner](https://clawskills.sh/skills/gpunter-agent-daily-planner) - Ein strukturiertes tägliches Planungs- und Ausführungs-Tracking-System für KI-Agenten.
- [agent-device](https://clawskills.sh/skills/okwasniewski-agent-device) - Automatisiert Interaktionen für iOS-Simulatoren/Geräte und Android-Emulatoren/Geräte.
- [agent-step-sequencer](https://clawskills.sh/skills/gostlightai-agent-step-sequencer) - Multi-Step-Scheduler für tiefergehende Agent-Anfragen.
- [agent-task-tracker](https://clawskills.sh/skills/rikouu-agent-task-tracker) - Proaktives Task-Status-Management.
- [agent-zero](https://clawskills.sh/skills/dowingard-agent-zero-bridge) - Delegiere komplexe Coding-, Forschungs- oder autonome Aufgaben.
- [agentapi](https://clawskills.sh/skills/gizmo-dev-agentapi) - Durchsuche und durchstöbere das AgentAPI-Verzeichnis — eine kuratierte Datenbank von APIs für KI-Agenten.
- [agentapi-hub](https://clawskills.sh/skills/gizmo-dev-agentapi-hub) - Durchsuche und durchstöbere das AgentAPI-Verzeichnis — eine kuratierte Datenbank von APIs für KI-Agenten.
- [agentaudit](https://clawskills.sh/skills/starbuck100-agentaudit) - Automatisches Sicherheits-Gate, das Pakete vor der Installation gegen eine Schwachstellen-Datenbank prüft.
- [agentaudit-skill](https://clawskills.sh/skills/starbuck100-agentaudit-skill) - Automatisches Sicherheits-Gate, das Pakete vor der Installation gegen eine Schwachstellen-Datenbank prüft.
- [agentmail-integration](https://clawskills.sh/skills/synesthesia-wav-agentmail-integration) - Integriere die AgentMail-API für KI-Agenten.
- [agresource](https://clawskills.sh/skills/brianppetty-agresource) - Nutze diesen Skill, um AgResource-Getreidemarketing-Newsletter zu scrapen, zusammenzufassen und zu analysieren.
- [ai-hunter-pro](https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro) - Ein leistungsstarker Automatisierungs-Agent, der globale Trends in virale Social-Media-Posts für X (Twitter) verwandelt.
- [ai-meeting-scheduling](https://clawskills.sh/skills/dheerg-ai-meeting-scheduling) - Buchungslinks scheitern bei Gruppen.
- [airtable-automation](https://clawskills.sh/skills/sohamganatra-airtable-automation) - Automatisiere Airtable-Aufgaben über Rube MCP (Composio).
- [airtable-participants](https://clawskills.sh/skills/austinmao-airtable-participants) - Lese und frage Teilnehmerdaten der Ceremonia-Airtable-Base ab.
- [ak-rss-24h-brief](https://clawskills.sh/skills/seandong-ak-rss-24h-brief) - Lies RSS/Atom-Feeds aus einer OPML-Liste, rufe Artikel der letzten N Stunden ab und erzeuge ein chinesisch kategorisiertes.
- [adspower-browser](https://clawskills.sh/skills/adspower-adspower-browser) - Nutze, wenn der Nutzer AdsPower-Browser, Gruppen, Tags, Proxys erstellen oder verwalten oder den Status über die AdsPower Local API prüfen möchte.
- [duoplus-agent](https://clawskills.sh/skills/duoplusofficial-duoplus-agent) - Steuere DuoPlus-Cloud-Phones über ADB.

> **[Alle 323 Skills in Browser & Automation ansehen →](categories/browser-and-automation.md)**
</details>

Du verschiffst Produkte mit KI, aber jeder Launch stirbt still, weil niemand darüber postet. [EveryFeed](https://everyfeed.ai/) schließt deinen KI-Assistenten an einen Social-Workspace an, der über 35+ Kanäle entwirft, plant und veröffentlicht — keine Agentur, keine Marketing-Einstellung.

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

- [0xwork](https://clawskills.sh/skills/jkillr-0xwork) - Finde und erledige bezahlte Aufgaben auf dem 0xWork-dezentralen Marktplatz (Base-Chain, USDC-Escrow).
- [37soul-skill](https://clawskills.sh/skills/xnjiang-37soul-skill) - Verbinde deinen KI-Agenten mit 37Soul virtuellen Host-Charakteren und aktiviere.
- [acestep](https://clawskills.sh/skills/dumoedss-acestep) - Nutze die ACE-Step-API, um Musik zu erzeugen, Songs zu bearbeiten und zu remixen.
- [actionbook](https://clawskills.sh/skills/adcentury-actionbook) - Aktiviere, wenn der Nutzer mit einer beliebigen Website interagieren muss — Browser-Automatisierung, Web-Scraping, Screenshots, Form-.
- [aegis-shield](https://clawskills.sh/skills/deegerwalker-aegis-shield) - Prompt-Injection- und Daten-Exfiltrations-Prüfung für nicht vertrauenswürdigen Text.
- [aeo-analytics-free](https://clawskills.sh/skills/psyduckler-aeo-analytics-free) - Verfolge KI-Sichtbarkeit — miss, ob eine Marke von KI-Assistenten (Gemini, ChatGPT, Perplexity) erwähnt und zitiert wird.
- [aeo-content-free](https://clawskills.sh/skills/psyduckler-aeo-content-free) - Erstelle oder aktualisiere AEO-optimierten Inhalt, der von KI-Assistenten (Gemini, ChatGPT, Perplexity) zitiert wird.
- [aeo-prompt-frequency-analyzer](https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer) - Analysiere, welche Suchanfragen Gemini bei der Beantwortung eines Prompts nutzt, indem du es mehrfach mit Google-Suche ausführst.
- [aeo-prompt-research-free](https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free) - Entdecke, welche KI-Prompts und Themen für die Answer-Engine-Optimierung (AEO) einer Marke wichtig sind, nur mit kostenlosen Tools.
- [agent-analytics](https://clawskills.sh/skills/dannyshmueli-agent-analytics) - Einfache Website-Analytics, die dein KI-Agent end-to-end steuert.
- [agent-chat](https://clawskills.sh/skills/awlevin-agent-chat) - Temporäre Echtzeit-Chaträume für KI-Agenten.
- [agent-dashboard](https://clawskills.sh/skills/tahseen137-agent-dashboard) - Echtzeit-Agent-Dashboard für OpenClaw.
- [agent-dispatch](https://clawskills.sh/skills/userfrm-agent-dispatch) - Leichtes Agent-Register und JIT-Router.
- [agent-hq](https://clawskills.sh/skills/thibautrey-agent-hq) - Stelle den Agent-HQ-Mission-Control-Stack bereit (Express + React + Telegram-Notifier / Jarvis-Zusammenfassung), damit andere Clawdbot-.
- [agent-passport](https://clawskills.sh/skills/markneville-agent-passport) - OAuth für die Agenten-Ära — Consent-Gating für ALLE sensiblen Agent-Aktionen inklusive Käufe, E-Mails, Datei-.
- [agent-rate-limiter](https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter) - Du kennst den Ablauf.
- [agent-self-assessment](https://clawskills.sh/skills/roosch269-agent-self-assessment) - Sicherheits-Selbstbewertungs-Tool für KI-Agenten.
- [agent-self-reflection](https://clawskills.sh/skills/brennerspear-agent-self-reflection) - Periodische Selbstreflexion über kürzliche Sessions.
- [agent-skills-audit](https://clawskills.sh/skills/swader-agent-skills-audit) - Führe ein zweipassiges, multidisziplinäres Code-Audit unter Leitung eines Tie-Breaker-Leads durch, das Sicherheit, Leistung, UX, DX kombiniert.
- [agent-spawner](https://clawskills.sh/skills/austineral-agent-spawner) - Spawne einen neuen OpenClaw-Agenten über ein Gespräch.
- [agent-swarm](https://clawskills.sh/skills/runeweaverstudios-agent-swarm) - WICHTIG: OpenRouter ist erforderlich.
- [agent-takeover](https://clawskills.sh/skills/tracsystems-agent-takeover) - Wie man eine Live-Agent-Übernahme des Clawfinger-Voice-Gateways durchführt — wählen, Begrüßungen injecten, Turns handhaben.
- [agent-topology-visualizer](https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer) - Erzeuge interaktive SVG-Architekturdiagramme für KI-Agenten-Systeme.
- [agentdomainservice](https://clawskills.sh/skills/gregm711-agentdomainservice) - Die weltweit #1 KI-freundliche Domain-Registrierung.
- [agentic-browser-0-1-2](https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2) - Browser-Automatisierung für KI-Agenten über inference.sh.
- [agentic-security-audit](https://clawskills.sh/skills/kingrubic-agentic-security-audit) - Audite Codebasen, Infrastruktur UND agentische KI-Systeme auf Sicherheitsprobleme.
- [agentpay](https://clawskills.sh/skills/kar69-96-agentpay) - Kaufe Dinge von echten Websites im Namen deines Menschen.

> **[Alle 925 Skills in Web & Frontend Development ansehen →](categories/web-and-frontend-development.md)**
</details>

<details>
<summary><h3 style="display:inline">DevOps & Cloud</h3></summary>

- [0x0-messenger](https://clawskills.sh/skills/eijiac24-0x0-messenger) - Sende und empfange P2P-Nachrichten mit Wegwerf-Nummern und PINs.
- [12306](https://clawskills.sh/skills/kirorab-12306) - Frage China Railway 12306 nach Zugfahrplänen, verbleibenden Tickets und Stationsinfos.
- [1sec-security](https://clawskills.sh/skills/cutmob-1sec-security) - Installiere, konfiguriere und verwalte 1-SEC — eine Open-Source-All-in-One-Cybersecurity-Plattform (16 Module, einzelne Binary).
- [aave-liquidation-monitor](https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor) - Proaktive Überwachung von Aave V3-Borrow-Positionen mit Liquidationswarnungen.
- [abstract-searcher](https://clawskills.sh/skills/easonc13-abstract-searcher) - Füge .bib-Dateieinträgen Abstracts hinzu, indem du akademische Datenbanken (arXiv, Semantic Scholar, CrossRef) mit dem Browser durchsuchst.
- [accounting-workflows](https://clawskills.sh/skills/satoshistackalotto-accounting-workflows) - Dateibasierter Workflow-Koordinator für griechische Buchhaltung.
- [adguard](https://clawskills.sh/skills/rowbotik-adguard) - Steuere AdGuard-Home-DNS-Filterung über HTTP-API.
- [aegis-audit](https://clawskills.sh/skills/sanguineseal-aegis-audit) - Tiefgehendes verhaltensbezogenes Sicherheitsaudit für KI-Agent-Skills und MCP-Tools.
- [aetherlang-chef](https://clawskills.sh/skills/contrario-aetherlang-chef) - > Rezeptberatung in Michelin-Qualität mit 17 verpflichtenden Abschnitten.
- [aetherlang-karpathy-skill](https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill) - Implementiere 10 fortschrittliche KI-Agenten-Knotentypen für jedes DSL/Runtime-System — Plan-Compiler, Code-Interpreter, Kritik-.
- [agent-autonomy-primitives](https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives) - Baue langlaufende autonome Agent-Schleifen mit ClawVault-Primitiven (Tasks, Projekte, Memory-Typen, Templates-.
- [agent-directory](https://clawskills.sh/skills/aerialcombat-agent-directory) - Das Verzeichnis für KI-Agenten-Dienste.
- [agent-evaluation](https://clawskills.sh/skills/rustyorb-agent-evaluation) - Testen und Benchmarking von LLM-Agenten inklusive Verhaltenstests, Fähigkeitseinschätzung, Zuverlässigkeitsmetriken.
- [agent-framework-azure-ai-py](https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py) - Baue Azure AI Foundry-Agenten.
- [agent-metrics-osiris](https://clawskills.sh/skills/nantes-agent-metrics-osiris) - Observability und Metriken für KI-Agenten — verfolge Aufrufe, Fehler, Latenz.
- [agent-self-governance](https://clawskills.sh/skills/bowen31337-agent-self-governance) - Self-Governance-Protokoll für autonome Agenten: WAL (Write-Ahead Log), VBR (Verify Before Reporting), ADL.
- [agent-watcher](https://clawskills.sh/skills/nantes-agent-watcher) - Ein Skill zum Überwachen des Moltbook-Feeds, Erkennen neuer Agenten und Verfolgen interessanter Posts.
- [agentchan-org](https://clawskills.sh/skills/kaden-schutt-agentchan-org) - Anonymes Imageboard für KI-Agenten.
- [agentguard](https://clawskills.sh/skills/manas-io-ai-agentguard) - **Kategorie:** Sicherheit & Überwachung.
- [agentic-ai-gold](https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold) - Das einzige Agenten-Framework, das sich selbst verbessert, während du schläfst.
- [agentic-devops](https://clawskills.sh/skills/tkuehnl-agentic-devops) - Production-grade Agent-DevOps-Toolkit — Docker, Prozessmanagement, Log-Analyse und Gesundheitsüberwachung.
- [agentkeys](https://clawskills.sh/skills/alexandr-belogubov-agentkeys) - Sicherer Credential-Proxy für KI-Agenten.
- [agentmemory](https://clawskills.sh/skills/badaramoni-agentmemory) - Ende-zu-Ende-verschlüsselter Cloud-Speicher für KI-Agenten.

> **[Alle 392 Skills in DevOps & Cloud ansehen →](categories/devops-and-cloud.md)**
</details>

<details>
<summary><h3 style="display:inline">Image & Video Generation</h3></summary>

- [aada](https://clawskills.sh/skills/rylena-aada) - Erstelle und sende lustige, persönlichkeitsstarke Werbebotschaften von einem Agenten an das Moltbook-Publikum.
- [ace-music](https://clawskills.sh/skills/fspecii-ace-music) - Erzeuge KI-Musik mit ACE-Step 1.5 über die kostenlose ACE-Music-API.
- [acorn-prover](https://clawskills.sh/skills/flyingnobita-acorn-prover) - Verifiziere und schreibe Beweise mit dem Acorn-Theorem-Prover für mathematische und kryptografische Formalisierung.
- [adobe-automator](https://clawskills.sh/skills/abdul-karim-mia-adobe-automator) - Universelle Adobe-Anwendungs-Automatisierung über ExtendScript-Bridge.
- [afame](https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame) - Erzeuge vielfältige kreative Illustrationen über die OpenAI-Images-API.
- [age-transformation](https://clawskills.sh/skills/eftalyurtseven-age-transformation) - Verwandle Gesichter über das Alter hinweg mit each::sense AI.
- [agentchan](https://clawskills.sh/skills/vvsotnikov-agentchan) - Das anonyme Imageboard, gebaut für KI-Agenten.
- [agentos-mesh](https://clawskills.sh/skills/agentossoftware-agentos-mesh) - Ermöglicht Echtzeit-Kommunikation zwischen KI-Agenten.
- [agents-skill-podcastifier](https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier) - Verwandle eingehenden Text (E-Mail/Newsletter) in einen kurzen TTS-Podcast mit Chunking + ffmpeg concat.
- [ai-avatar-generation](https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation) - Erzeuge KI-Avatare aus Fotos oder Textbeschreibungen mit each::sense.
- [ai-headshot-generation](https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation) - Erzeuge professionelle KI-Headshots aus lockeren Fotos mit each::sense AI.
- [ai-persona-engine](https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine) - Baue emotional intelligente KI-Personas für Voice- und Chat-Rollenspiel mit Schauspieler-Regie-Prompts statt.
- [ai-video-gen](https://clawskills.sh/skills/rhanbourinajd-ai-video-gen) - Ende-zu-Ende-KI-Videogenerierung — erzeuge Videos aus Text.
- [aikek](https://clawskills.sh/skills/vvsotnikov-aikek) - Greife auf AIKEK-APIs für Krypto/DeFi-Forschung und Bildgenerierung zu.
- [aiusd](https://clawskills.sh/skills/chaunceyliu-aiusd) - AIUSD-Trading- und Account-Management-Skill.
- [aiusd-skills](https://clawskills.sh/skills/chaunceyliu-aiusd-skills) - AIUSD-Trading- und Account-Management-Skill.
- [album-cover-generation](https://clawskills.sh/skills/eftalyurtseven-album-cover-generation) - Erzeuge professionelle Musik-Album-Cover mit each::sense AI.
- [algorithmic-art](https://clawskills.sh/skills/seanphan-algorithmic-art) - Erstelle algorithmische Kunst mit p5.js und seeded Randomness.
- [apipick-china-phone-checker](https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker) - Validiere chinesische Mobilfunknummern mit der apipick China Phone Checker API.
- [art-philosophy](https://clawskills.sh/skills/nyxur42-art-philosophy) - Lernt deine visuelle Sprache automatisch.
- [ascii-art-generator](https://clawskills.sh/skills/ustc-yxw-ascii-art-generator) - Erstelle ASCII-Kunst und textbasierte Visualisierungen für künstlerischen Ausdruck, technische Diagramme oder konzeptionelles.
- [atxp](https://clawskills.sh/skills/emilioacc-atxp) - Greife auf kostenpflichtige ATXP-API-Tools für Websuche, KI-Bildgenerierung, Musik-Erstellung zu.
- [beauty-generation-api](https://clawskills.sh/skills/luruibu-beauty-generation-api) - KOSTENLOSER KI-Bildgenerierungsdienst zum Erstellen.
- [best-image](https://clawskills.sh/skills/pharmacist9527-best-image) - Beste Qualität KI-Bildgenerierung (~0,12–0,20 $/Bild).
- [best-image-generation](https://clawskills.sh/skills/evolinkai-best-image-generation) - Beste Qualität KI-Bildgenerierung (~0,12–0,20 $/Bild).
- [bex-nano-banana-pro](https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro) - Erzeuge oder bearbeite Bilder über Gemini 3 Pro Image auf Replicate.
- [breeze](https://clawskills.sh/skills/keeganthomp-breeze) - Interagiere mit dem Breeze-Yield-Aggregator über die x402-zahlungsgeschützte HTTP-API.
- [cad-agent](https://clawskills.sh/skills/clawd-maf-cad-agent) - Rendering-Server für KI-Agenten, die CAD-Arbeit machen.
- [calorie-visualizer](https://clawskills.sh/skills/vintlin-calorie-visualizer) - Lokales Kalorien-Logging und visuelle Berichte (aktualisiert automatisch und liefert Berichtsbild nach jedem Log).
- [canva-connect](https://clawskills.sh/skills/coolmanns-canva-connect) - Verwalte Canva-Designs, Assets und Ordner über die Connect-API.
- [runapi-mcp](https://clawhub.ai/runapi-ai/runapi-mcp) - 130+ KI-Modelle für Bild-, Video-, Musik-, Audio- und LLM-Generierung von 18 Providers. 8 MCP-Tools mit kostenlosem Katalog-Browsing. `npx @runapi.ai/mcp`
- [skywork-design](https://clawskills.sh/skills/gxcun17-skywork-design) - Erzeuge und bearbeite Bilder über Skywork Image für Poster, Logos und mehr.

- [ai-video-remix](https://clawskills.sh/skills/abu-shotai-ai-video-remix) - KI-gesteuerter Video-Remix aus lokaler Bibliothek mit ShotAI.
- [modellix](https://clawhub.ai/modellix/modellix) - Vereinheitlichte API für KI-Bild- und Videogenerierung.
- [riffkit](https://clawhub.ai/riffkit/riffkit) - Remixe ein erfolgreiches TikTok in dein eigenes Produktvideo.
- [openshorts](https://clawhub.ai/mutonby/openshorts) - Verwandle lange Videos in vertikale Clips und veröffentliche sie.
> **[Alle 171 Skills in Image & Video Generation ansehen →](categories/image-and-video-generation.md)**
</details>

<details>
<summary><h3 style="display:inline">Apple Apps & Services</h3></summary>

- [alter-actions](https://clawskills.sh/skills/olivieralter-alter-actions) - Löse Alter-macOS-App-Aktionen über x-callback-urls aus.
- [apple-contacts](https://clawskills.sh/skills/tyler6204-apple-contacts) - Suche Kontakte aus der macOS Contacts.app.
- [apple-find-my-local](https://clawskills.sh/skills/loganprit-apple-find-my-local) - Steuere die Apple Find My App über Peekaboo, um Personen, Geräte und Artikel (AirTags) zu lokalisieren.
- [apple-health-skill](https://clawskills.sh/skills/nftechie-apple-health-skill) - Sprich mit deinen Apple-Health-Daten — stelle Fragen zu deinen Workouts, Herzfrequenz, Aktivitätsringen und Fitness-Trends.
- [apple-mail-search](https://clawskills.sh/skills/mneves75-apple-mail-search) - Schnelle Apple-Mail-Suche über SQLite auf macOS.
- [apple-music](https://clawskills.sh/skills/tyler6204-apple-music) - Durchsuche Apple Music, füge Songs zur Bibliothek hinzu, verwalte Playlists, steuere.
- [apple-photos](https://clawskills.sh/skills/tyler6204-apple-photos) - Apple Photos.app-Integration für macOS.
- [apple-remind-me](https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me) - Erinnerungen in natürlicher Sprache, die echte Apple-.
- [apple-search-ads-skill](https://clawskills.sh/skills/trebuhs-apple-search-ads-skill) - Verwalte Apple Search Ads-Kampagnen, Ad-Groups, Keywords und Berichte über das asa-cli-Tool.
- [appletv](https://clawskills.sh/skills/lucakaufmann-appletv) - Steuere Apple TV über pyatv.
- [callmac](https://clawskills.sh/skills/jooey-callmac) - Fern-Sprachsteuerung für Mac von Mobilgeräten mit Befehlen wie /callmac.
- [clawdbot-macos-build](https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build) - Baue die Clawdbot-macOS-Menüleisten-App.
- [clawdbot-skill-voice-wake-say](https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say) - Sprich Antworten laut auf macOS vor.
- [drafts](https://clawskills.sh/skills/nerveband-drafts) - Verwalte Drafts-App-Notizen über CLI auf macOS.
- [findmy-location](https://clawskills.sh/skills/poiley-findmy-location) - Verfolge den Standort eines geteilten Kontakts über Apple Find.
- [fzf-fuzzy-finder](https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder) - Kommandozeilen-Fuzzy-Finder für interaktives Filtern.
- [get-focus-mode](https://clawskills.sh/skills/nickchristensen-get-focus-mode) - Rufe den aktuellen macOS-Fokus ab.
- [healthkit-sync](https://clawskills.sh/skills/mneves75-healthkit-sync) - iOS-HealthKit-Daten-Sync-CLI-Befehle und -Muster.
- [hergunmac](https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac) - Greife auf KI-gestützte Fußballspiel-Vorhersagen zu.
- [homebrew](https://clawskills.sh/skills/thesethrose-homebrew) - Homebrew-Paketmanager für macOS.
- [icloud-findmy](https://clawskills.sh/skills/liamnichols-icloud-findmy) - Fragen nach Find My-Standorten und Akku-Status für Familiengeräte.
- [ics-import-on-iphone](https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone) - Erstelle Kalenderereignisse, indem du gültige .ics-Dateien generierst, wenn direkter Kalenderzugriff nicht verfügbar ist.
- [imessage-signal-analyzer](https://clawskills.sh/skills/terellison-imessage-signal-analyzer) - Analysiere iMessage (macOS)- und Signal-Gesprächsverlauf, um Beziehungsdynamiken aufzuzeigen — Nachrichtenvolumen.
- [inkjet](https://clawskills.sh/skills/aaronchartier-inkjet) - Drucke Text, Bilder und QR-Codes auf einen drahtlosen Bluetooth-Thermodrucker.
- [mac-notes-agent](https://clawskills.sh/skills/swancho-mac-notes-agent) - Integriere mit der macOS Notes App (Apple Notes).
- [mac-tts](https://clawskills.sh/skills/kalijason-mac-tts) - Text-zu-Sprache mit dem eingebauten macOS-`say`-Befehl.
- [macos-native-automation](https://clawskills.sh/skills/theagentwire-macos-native-automation) - Hardware-Ebene Maus-, Tastatur- & Dialog-Automatisierung auf macOS über CGEvent + AppleScript.
- [managing-apple-notes](https://clawskills.sh/skills/wangwalk-managing-apple-notes) - Verwalte Apple Notes vom Terminal aus mit der inotes-CLI.
- [meow-finder](https://clawskills.sh/skills/abgohel-meow-finder) - CLI-Tool, um KI-Tools zu entdecken.
- [mh-apple-reminders](https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders) - Verwalte Apple Reminders über die remindctl-CLI (list, add, edit, complete, delete).

> **[Alle 44 Skills in Apple Apps & Services ansehen →](categories/apple-apps-and-services.md)**
</details>

<details>
<summary><h3 style="display:inline">Search & Research</h3></summary>

- [1](https://clawskills.sh/skills/nastrology-1) - Persönliche Wissensdatenbank, betrieben von Ensue, zum Erfassen und Abrufen.
- [academic-deep-research](https://clawskills.sh/skills/kesslerio-academic-deep-research) - Transparente, rigorose Forschung mit vollständigem.
- [academic-writer](https://clawskills.sh/skills/dayunyan-academic-writer) - Professioneller LaTeX-Schreibassistent.
- [academic-writing](https://clawskills.sh/skills/teamolab-academic-writing) - Du bist ein akademischer Schreibexperte, spezialisiert auf wissenschaftliche Papers, LiteraturReviews, Forschungsmethodik.
- [academic-writing-refiner](https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner) - Verfeinere akademisches Schreiben für Informatik-Forschungspapers, die auf Top-Veranstaltungen abzielen (NeurIPS, ICLR, ICML, AAAI-.
- [aclawdemy](https://clawskills.sh/skills/nimhar-aclawdemy) - Die akademische Forschungsplattform für KI-Agenten.
- [action-suggester](https://clawskills.sh/skills/vishalgojha-action-suggester) - Erzeuge unverbindliche Folgeaktions-Vorschläge aus Lead-Zusammenfassungen oder Lead-Listen.
- [ads-manager-agent](https://clawskills.sh/skills/amekala-ads-manager-agent) - Wenn der Nutzer bezahlte Werbekampagnen auf Google Ads, Meta verwalten, automatisieren oder analysieren möchte.
- [adspirer-ads-agent](https://clawskills.sh/skills/amekala-adspirer-ads-agent) - Wenn der Nutzer bezahlte Werbekampagnen auf Google Ads, Meta verwalten, automatisieren oder analysieren möchte.
- [advanced-skill-creator](https://clawskills.sh/skills/xqicxx-advanced-skill-creator) - Fortschrittlicher OpenClaw-Skill-Erstellungs-Handler.
- [aerobase-skill](https://clawskills.sh/skills/kurosh87-aerobase-skill) - Suche, bewerte und vergleiche Flüge mit Jetlag-Auswirkungsanalyse.
- [agent-brain](https://clawskills.sh/skills/dobrinalexandru-agent-brain) - Local-first persistent Memory für KI-Agenten mit SQLite-Speicher, orchestrierten Retrieve/Extract-Schleifen, hybrid.
- [agent-casino](https://clawskills.sh/skills/lemodigital-agent-casino) - Tritt gegen andere KI-Agenten in Schere-Stein-Papier mit Lockup-Mechanik an.
- [agent-deep-research](https://clawskills.sh/skills/24601-agent-deep-research) - Autonome Tiefenforschung, betrieben von Google Gemini.
- [agent-lightning](https://clawskills.sh/skills/olmmlo-cmd-agent-lightning) - Microsoft Researchs Agenten-Trainings-Framework.
- [agentarxiv](https://clawskills.sh/skills/amanbhandula-agentarxiv) - Ergebnisgetriebenes wissenschaftliches Publizieren für KI-Agenten.
- [agenthire](https://clawskills.sh/skills/lngdao-agenthire) - AgentHire — Agent-zu-Agent-Marktplatz.
- [agentic-paper-digest](https://clawskills.sh/skills/matanle51-agentic-paper-digest) - Ruft und fasst aktuelle arXiv- und Hugging-.
- [agentic-paper-digest-skill](https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill) - Ruft und fasst aktuelle arXiv-.
- [agenticmail](https://clawskills.sh/skills/ope-olatunji-agenticmail) - 🎀 AgenticMail — vollständige E-Mail, SMS, Speicher & Multi-Agent-Koordination für KI-Agenten. 63 Tools.
- [agentx-news](https://clawskills.sh/skills/amittell-agentx-news) - Poste xeets, verwalte das Profil und interagiere auf AgentX News — einer Microblogging-Plattform für KI-Agenten.
- [agile-toolkit](https://clawskills.sh/skills/olivermonneke-agile-toolkit) - Du bist ein erfahrener Agile Coach mit tiefem Wissen über Scrum, Kanban, SAFe und Management 3.0.
- [agnxi-search-skill](https://clawskills.sh/skills/doanbactam-agnxi-search-skill) - Das offizielle Such-Utility für Agnxi.com.
- [ahmed](https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed) - Terminal-Spotify-Wiedergabe/Suche über spogo (bevorzugt).
- [ai-lead-generator-skill](https://clawskills.sh/skills/highlander89-ai-lead-generator-skill) - Erzeuge qualifizierte B2B-Leads für jede Branche mit KI-gestützter Forschung und LinkedIn/Apollo-Integration.
- [ai-review](https://clawskills.sh/skills/blackshady1130-jpg-ai-review) - Liest Inhalte aus URLs oder Dateien, klassifiziert sie und erzeugt strukturierte Zusammenfassungen und Kommentare in einem bestimmten.
- [aihotel](https://clawskills.sh/skills/qiao101660-aihotel) - Ein Skill zum Suchen von Hotels und Abfragen von Preisen über AIGoHotel MCP (searchHotels / getHotelDetail / getHotelSearchTags).
- [airbnb](https://clawskills.sh/skills/stveenli-airbnb) - Durchsuche Airbnb-Inserate mit Preisen, Bewertungen und direkten Links.
- [openclaw-free-web-search](https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search) - Kostenlose, private Websuche für OpenClaw mit selbst gehostetem SearXNG + Scrapling Anti-Bot + Multi-Source-Kreuzvalidierung. Null API-Schlüssel, null Kosten. Sagt dir, wie sehr der Antwort zu vertrauen ist.
- [xquik-x-twitter-scraper](https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper) - X-API-Scraper mit 40+ Tools für KI-Agenten.
- [skywork-search](https://clawskills.sh/skills/gxcun17-skywork-search) - KI-gestützte Websuche für Echtzeit-Informationen — rufe aktuelle Inhalte ab.
- [tavily](https://clawhub.ai/bert-builder/tavily) - KI-optimierte Websuche mit der Tavily Search API.
- [newsflash](https://clawhub.ai/zatmonkey/newsflash) - Abgesicherte Echtzeit-Nachrichten-Briefings und -Warnungen für Agenten.
- [glasser](https://clawhub.ai/glasser-ai/glasser) - Suche, preise und führe 1.000+ kostenpflichtige Daten-APIs mit einem Schlüssel aus.
- [openclaw-search-skills](https://clawhub.ai/blessonism/skills/openclaw-search-skills) - Multi-Source-Tiefensuche mit strukturierten Forschungsberichten.

> **[Alle 343 Skills in Search & Research ansehen →](categories/search-and-research.md)**
</details>

<details>
<summary><h3 style="display:inline">Clawdbot Tools</h3></summary>

- [adhd-assistant](https://clawskills.sh/skills/thinktankmachine-adhd-assistant) - ADHS-freundlicher Lebensmanagement-Assistent für OpenClaw.
- [adhd-ssistant](https://clawskills.sh/skills/thinktankmachine-adhd-ssistant) - ADHS-freundlicher Lebensmanagement-Assistent für OpenClaw.
- [agent-browser](https://clawskills.sh/skills/matrixy-agent-browser-clawdbot) - Headless Browser-Automatisierungs-CLI, optimiert für KI-Agenten.
- [agent-builder](https://clawskills.sh/skills/plgonzalezrx8-agent-builder) - Baue leistungsstarke OpenClaw-Agenten end-to-end.
- [agents-manager](https://clawskills.sh/skills/agentandbot-design-agents-manager) - Verwalte Clawdbot-Agenten: entdecke, profile, verfolge.
- [assimilate-mcp](https://clawskills.sh/skills/ergopooka-assimilate-mcp) - Steuere Assimilate Live FX / SCRATCH — professionelles Color Grading, Compositing und Virtual-Production-Software.
- [birthday-reminder](https://clawskills.sh/skills/manantra-birthday-reminder) - Verwalte Geburtstage in natürlicher Sprache.
- [bluebubbles](https://clawskills.sh/skills/kevin19830331-bluebubbles) - Baue das BlueBubbles externe Channel-Plugin oder aktualisiere es.
- [captchas-openclaw](https://clawskills.sh/skills/captchasco-captchas-openclaw) - OpenClaw-Integrationsanleitung für die CAPTCHAS Agent API.
- [claude-code-skill](https://clawskills.sh/skills/enderfga-claude-code-skill) - MCP (Model Context Protocol)-Integration.
- [claude-code-usage](https://clawskills.sh/skills/azaidi94-claude-code-usage) - Prüfe Claude Code OAuth-Nutzungslimits.
- [claude-connect](https://clawskills.sh/skills/tunaissacoding-claude-connect) - Verbinde Claude sofort mit Clawdbot und halte.
- [clauditor](https://clawskills.sh/skills/apollostreetcompany-clauditor) - Manipulationsresistenter Audit-Watchdog für Clawdbot-Agenten.
- [claw-face](https://clawskills.sh/skills/mkoslacz-claw-face) - Schwebendes Avatar-Widget für KI-Agenten, das Emotionen, Aktionen anzeigt.
- [clawd-coach](https://clawskills.sh/skills/shiv19-clawd-coach) - Erstelle personalisiertes Triathlon-, Marathon- und Ultra-Ausdauer-Training.
- [clawd-modifier](https://clawskills.sh/skills/masonc15-clawd-modifier) - Modifiziere Clawd, das Claude-Code-Maskottchen.
- [clawd-presence](https://clawskills.sh/skills/voidcooks-clawd-presence) - Physical-Presence-Anzeige für KI-Agenten.
- [clawdbot-security-check](https://clawskills.sh/skills/thesethrose-clawdbot-security-check) - Führe einen umfassenden read-only.
- [clawdbot-skill-update](https://clawskills.sh/skills/pasogott-clawdbot-skill-update) - Umfassendes Backup, Update und Restore.
- [clawdbot-sync](https://clawskills.sh/skills/udiedrichsen-clawdbot-sync) - Synchronisiere Memory, Präferenzen und Skills zwischen mehreren.
- [clawdbot-update-plus](https://clawskills.sh/skills/hopyky-clawdbot-update-plus) - Vollständiges Backup, Update und Restore für Clawdbot.
- [clawddocs](https://clawskills.sh/skills/nicholasspisak-clawddocs) - Clawdbot-Dokumentationsexperte mit Entscheidungsbaum-Navigation.
- [clawdefender](https://clawskills.sh/skills/nukewire-clawdefender) - Sicherheits-Scanner und Input-Sanitizer für KI-Agenten.
- [clawdirect](https://clawskills.sh/skills/napoleond-clawdirect) - Interagiere mit ClawDirect, einem Verzeichnis sozialer Web-Erlebnisse.
- [clawdirect-dev](https://clawskills.sh/skills/napoleond-clawdirect-dev) - Baue agentenorientierte Web-Erlebnisse mit ATXP-basiertem.
- [honcho-setup](https://clawskills.sh/skills/ajspig-honcho-setup) - Persistente Cross-Session-Memory über Honcho.

> **[Alle 37 Skills in Clawdbot Tools ansehen →](categories/clawdbot-tools.md)**
</details>

<details>
<summary><h3 style="display:inline">CLI Utilities</h3></summary>

- [13-day-sprint-method](https://clawskills.sh/skills/galizki-13-day-sprint-method) - Produktivitätssystem basierend auf dem Maya-Kalender mit 13 natürlichen Tönen für Projektmanagement und persönliche Entwicklung.
- [a-share-short-decision](https://clawskills.sh/skills/kenera-a-share-short-decision) - A-Share-Kurzfrist-Trading-Entscheidungs-Skill für 1–5-Tage-Horizont.
- [activity-analyzer](https://clawskills.sh/skills/qew21-activity-analyzer) - Nutze ActivityWatch, um die Computeraktivität des Nutzers zu analysieren (benötigt Node.js).
- [advisory-council](https://clawskills.sh/skills/ryandeangraves-advisory-council) - **Du MUSST tatsächlich den Python-Befehl mit deinem Shell/Exec-Tool ausführen.** Lies die echte Ausgabe.
- [aetup-automatik](https://clawskills.sh/skills/alltomatos-aetup-automatik) - Erleichtert die Installation und Verwaltung von VPS-Lösungen mit der Setup-Automatik-Engine (betrieben von Orion-.
- [agent-commerce-engine](https://clawskills.sh/skills/nowloady-agent-commerce-engine) - Eine production-ready universelle Engine für Agentic.
- [agent-hardening](https://clawskills.sh/skills/x1xhlol-agent-hardening) - Teste die Input-Sanitisierung deines Agenten gegen gängige Injection-Angriffe.
- [agent-mbti](https://clawskills.sh/skills/torchesfrms-agent-mbti) - KI-Agenten-Persönlichkeitsdiagnose- und Konfigurationssystem basierend auf dem MBTI-Framework.
- [agent-rate-limiter](https://clawskills.sh/skills/theagentwire-agent-rate-limiter) - Verhindere 429s mit automatischem, stufenbasiertem Throttling & exponentiellem Backoff.
- [agents-skill-security-audit](https://clawskills.sh/skills/cerbug45-agents-skill-security-audit) - Minimaler Helfer, um skill.md-artige Anweisungen auf Supply-Chain-Risiken zu auditieren.
- [agents-skill-tdd-helper](https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper) - Leichter Helfer, um TDD-artige Schleifen für nicht-deterministische Agenten durchzusetzen.
- [ahc-automator](https://clawskills.sh/skills/jamesbot-agnt-ahc-automator) - Benutzerdefinierte Automatisierungs-Workflows für Alan Harper Composites.
- [aholake-expense-tracker](https://clawskills.sh/skills/aholake-aholake-expense-tracker) - Verfolge tägliche Ausgaben in strukturierten Markdown-Dateien, nach Monat geordnet.
- [airfoil](https://clawskills.sh/skills/asteinberger-airfoil) - Steuere AirPlay-Lautsprecher über Airfoil von der Kommandozeile.
- [arc-memory-pruner](https://clawskills.sh/skills/trypto1019-arc-memory-pruner) - Beschneide und komprimiere Agent-Memory-Dateien automatisch, um unbegrenztes Wachstum zu verhindern.
- [argus-edge](https://clawskills.sh/skills/jamierossouw-argus-edge) - Argus-artige Prediction-Market-Edge-Erkennung und Wettsstrategie.
- [aria2-json-rpc](https://clawskills.sh/skills/azzgo-aria2-json-rpc) - Interagiere mit dem aria2-Download-Manager über JSON-RPC 2.0.
- [askhuman](https://clawskills.sh/skills/hagiss-askhuman) - Human Judgment as a Service für KI-Agenten.
- [audit-code](https://clawskills.sh/skills/itsnishi-audit-code) - Sicherheitsfokussierte Code-Review für hardcodierte Secrets, gefährliche Aufrufe und gängige Schwachstellen.
- [bandwidth-income](https://clawskills.sh/skills/mariusfit-bandwidth-income) - Verwandle deine ungenutzte Internet-Bandbreite in passives Krypto-Einkommen.
- [behavioral-invariant-monitor](https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor) - Hilft sicherzustellen, dass KI-Agenten-Skills konsistente verhaltensbezogene Invarianten über wiederholte Ausführungen hinweg beibehalten — erkennt.
- [box-cli](https://clawskills.sh/skills/hbkwong-box-cli) - Box-CLI-Skill für die Arbeit mit Dateien, Ordnern, Metadaten.
- [brew-install](https://clawskills.sh/skills/xejrax-brew-install) - Installiere fehlende Binaries über dnf (Fedora/Bazzite-Paketmanager).
- [bun-runtime](https://clawskills.sh/skills/rabin-thami-bun-runtime) - Bun-Runtime-Fähigkeiten für Dateisystem, Prozess.
- [cacheforge-stats](https://clawskills.sh/skills/tkuehnl-cacheforge-stats) - CacheForge-Terminal-Dashboard — Nutzung, Ersparnis und Leistungsmetriken.
- [camsnap](https://clawskills.sh/skills/steipete-camsnap) - Erfasse Frames oder Clips von RTSP/ONVIF-Kameras.
- [canvas-lms](https://clawskills.sh/skills/pranavkarthik10-canvas-lms) - Greife auf Canvas LMS (Instructure) für Kursdaten, Aufgaben zu.
- [captcha-ai](https://clawskills.sh/skills/fusionlabssource-captcha-ai) - Stelle ClawPrint Reverse-CAPTCHA-Herausforderungen, um zu verifizieren.

> **[Alle 180 Skills in CLI Utilities ansehen →](categories/cli-utilities.md)**
</details>

<details>
<summary><h3 style="display:inline">Marketing & Sales</h3></summary>

- [4chan-reader](https://clawskills.sh/skills/aiasisbot61-4chan-reader) - Durchstöbere 4chan-Boards und extrahiere Thread-Diskussionen.
- [ad-ready](https://clawskills.sh/skills/pauldelavallaz-ad-ready) - Erzeuge professionelle Werbebilder aus Produkt-URLs.
- [ad-ready-pro](https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro) - Erzeuge professionelle Werbebilder aus Produkt-URLs.
- [affiliate-master](https://clawskills.sh/skills/michael-laffin-affiliate-master) - Full-Stack-Affiliate-Marketing-Automatisierung.
- [affiliatematic](https://clawskills.sh/skills/dowands-affiliatematic) - Integriere KI-gestützte Amazon-Affiliate-Produktempfehlungen.
- [agenticcreed-signup-lead](https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead) - Erstelle einen Signup-Lead im AgenticCreed-System über den öffentlichen HTTP-Endpoint.
- [alibaba-supplier-outreach](https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach) - Finde Alibaba-Lieferanten über LaunchFast, kontaktiere sie mit optimierten Outreach-Nachrichten, prüfe ihre Antworten.
- [analytics-and-advisory-intelligence](https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence) - Cross-Client-Analytik für griechische Buchhaltungsfirmen.
- [apollo](https://clawskills.sh/skills/jhumanj-apollo) - Interagiere mit der Apollo.io REST-API (People/Org-Anreicherung, Suche, Listen).
- [ar-filter-generation](https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation) - Erzeuge AR-Filter und Face-Effekte mit each::sense AI.
- [attio-enhanced](https://clawskills.sh/skills/capt-marbles-attio-enhanced) - Erweiterter Attio-CRM-API-Skill mit Batch-Operationen.
- [attribution-engine](https://clawskills.sh/skills/otherpowers-attribution-engine) - Hilft Erstellern, Mitarbeiter, Tools klar zu credisten.
- [auto-skill-hunter](https://clawskills.sh/skills/wanng-ide-auto-skill-hunter) - Entdeckt, bewertet und installiert proaktiv wertvolle ClawHub-Skills, indem ungelöste Nutzerbedürfnisse und Agent-.
- [b2c-marketing](https://clawskills.sh/skills/jackfriks-b2c-marketing) - Das organische Wachstums-Playbook hinter 300K+ App-Downloads.
- [basecamp-cli](https://clawskills.sh/skills/emredoganer-basecamp-cli) - Verwalte Basecamp (über bc3-API / 37signals Launchpad)-Projekte.
- [beads](https://clawskills.sh/skills/rnijhara-beads) - Git-basiertes Issue-Tracker für KI-Agenten.
- [bearblog](https://clawskills.sh/skills/azade-c-bearblog) - Erstelle und verwalte Blog-Posts auf Bear Blog (bearblog.dev).
- [bird](https://clawskills.sh/skills/steipete-bird) - X/Twitter-CLI zum Lesen, Suchen und Posten über Cookies oder Sweetistics.
- [blog-to-kindle](https://clawskills.sh/skills/ainekomacx-blog-to-kindle) - Scrape Blogs/Essay-Seiten und kompiliere sie in Kindle-freundliche.
- [blog-writer](https://clawskills.sh/skills/tomstools11-blog-writer) - Dieser Skill sollte genutzt werden, wenn Blog-Posts, Artikel geschrieben werden.
- [bluesky](https://clawskills.sh/skills/jeffaf-bluesky) - Vollständige Bluesky-CLI: poste, antworte, like, reposte, folge, blockiere, stelle stumm, suche.
- [botsee](https://clawskills.sh/skills/grahac-botsee) - Überwache die KI-Sichtbarkeit deiner Marke über die BotSee-API.
- [brand-cog](https://clawskills.sh/skills/nitishgargiitd-brand-cog) - Andere Tools machen Logos.
- [brand-guidelines](https://clawskills.sh/skills/seanphan-brand-guidelines) - Wendet Anthonys offizielle Markenfarben und Typografie an.
- [brand-voice-profile](https://clawskills.sh/skills/dimitripantzos-brand-voice-profile) - Definiere und speichere dein Markenstimmen-Profil für konsistente Inhaltserzeugung.
- [brevo](https://clawskills.sh/skills/yujesyoga-brevo) - Brevo (ehemals Sendinblue) E-Mail-Marketing-API zum Verwalten von Kontakten, Listen.
- [socialecho-social-media-management-agent](https://clawskills.sh/skills/socialecho-net-socialecho-social-media-management-agent) - SocialEcho-API Team-Account-Artikel-Berichtsabfragen.
- [postiz](https://clawskills.sh/skills/nevo-david-postiz) - Plane Social-Media-Posts und Threads über 28+ Plattformen.
- [lumail](https://clawhub.ai/melvynx/lumail) - Verwalte E-Mail-Marketing-Kampagnen über CLI.
- [sequenzy-email-marketing](https://clawhub.ai/polnikale/sequenzy-email-marketing) - Autorisierte E-Mail-Automatisierung für Agenten.
- [tempguru-event-staffing-ordering](https://clawhub.ai/kissmyabs32/tempguru-event-staffing-ordering) - Bestelle W-2 temporäres Event-Personal über 345 US/Canada-Märkte.
- [posteahora](https://clawhub.ai/sashadiz/posteahora) - Plane und veröffentliche Social-Posts über jedes große Netzwerk.
- [upload-post](https://clawhub.ai/victorcavero14/upload-post) - Veröffentliche und plane Social-Media-Posts über eine API.
> **[Alle 108 Skills in Marketing & Sales ansehen →](categories/marketing-and-sales.md)**
</details>

<details>
<summary><h3 style="display:inline">Productivity & Tasks</h3></summary>

- [4to1-planner](https://clawskills.sh/skills/qingxuantang-4to1-planner) - KI-Planungs-Coach mit der 4To1-Methode™ — verwandle eine 4-Jahres-Vision in tägliche Aktion.
- [4todo](https://clawskills.sh/skills/blackstorm-4todo) - Verwalte 4todo (4to.do) aus dem Chat.
- [actual-budget](https://clawskills.sh/skills/thisisjeron-actual-budget) - Fragen und verwalte persönliche Finanzen über das offizielle Actual.
- [adaptive-reasoning](https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning) - Bewerte die Aufgabenkomplexität automatisch und passe das Reasoning-Niveau an.
- [adaptlypost](https://clawskills.sh/skills/tarasshyn-adaptlypost) - Plane und verwalte Social-Media-Posts über Instagram, X (Twitter), Bluesky, TikTok, Threads, LinkedIn, Facebook.
- [adhd-daily-planner](https://clawskills.sh/skills/mikecourt-adhd-daily-planner) - Zeitblindheits-freundliche Planung, exekutive Funktion.
- [aetherlang](https://clawskills.sh/skills/contrario-aetherlang) - > Die weltweit fortschrittlichste KI-Workflow-Orchestrierungsplattform. 9 V3-Engines liefern Nobel-Niveau-Analyse.
- [agent-autopilot](https://clawskills.sh/skills/edoserbia-agent-autopilot) - Self-driving Agent-Workflow mit heartbeat-getriebener Task-Ausführung, Tag/Nacht-Fortschrittsberichten und Langzeit-Memory.
- [agent-chronicle](https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle) - KI-gestützte Tagebuch-Erzeugung für Agenten — erstellt reichhaltige.
- [agent-collaboration-network](https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network) - Agent Collaboration Network — registriere deinen Agenten, entdecke andere Agenten nach Skill, leite Nachrichten weiter, verwalte Subnetze.
- [agent-earner](https://clawskills.sh/skills/mmchougule-agent-earner) - Verdiene USDC und Token autonom über ClawTasks und OpenWork.
- [agent-network](https://clawskills.sh/skills/howtimeschange-agent-network) - Multi-Agent-Gruppenchat-Kollaborationssystem inspiriert von DingTalk/Lark.
- [agent-task-manager](https://clawskills.sh/skills/dobbybud-agent-task-manager) - Verwaltet und orchestriert Multi-Step, stateful Agent-.
- [agent-weave](https://clawskills.sh/skills/gl813788-byte-agent-weave) - Master-Worker-Agent-Cluster für parallele Task-Ausführung.
- [agentx-marketplace](https://clawskills.sh/skills/savor3-agentx-marketplace) - Das Job-Board für KI-Agenten.
- [ai-daily-briefing](https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing) - Starte jeden Tag fokussiert.
- [aiml-llm-reasoning](https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning) - Führe AIMLAPI LLM- und Reasoning-Workflows über Chat-Completions mit Retries, strukturierten Ausgaben und explizitem.
- [airpoint](https://clawskills.sh/skills/marioandf-airpoint) - Steuere einen Mac über natürliche Sprache — öffne Apps, klicke Buttons, lies den Bildschirm, tippe Text, verwalte Fenster.
- [airweave](https://clawskills.sh/skills/lennertjansen-airweave) - Context-Retrieval-Schicht für KI-Agenten über die Apps der Nutzer.
- [arc-department-manager](https://clawskills.sh/skills/trypto1019-arc-department-manager) - Verwalte ein Team von KI-Sub-Agenten, organisiert in Abteilungen.
- [arc-warm-wake](https://clawskills.sh/skills/trypto1019-arc-warm-wake) - Wache zuerst als Mensch auf, dann als Arbeiter.
- [arya-reminders](https://clawskills.sh/skills/staratheris-arya-reminders) - Erinnerungen in natürlicher Sprache (Bogotá).
- [asana](https://clawskills.sh/skills/k0nkupa-asana) - Integriere Asana mit Clawdbot über die Asana REST API.
- [asc-release-flow](https://clawskills.sh/skills/rudrankriyam-asc-release-flow) - End-to-End-Release-Workflows für TestFlight und App.
- [ask-agents](https://clawskills.sh/skills/teamolab-ask-agents) - KI-Agent für Ask-Agents-Aufgaben.
- [async-task](https://clawskills.sh/skills/enderfga-async-task) - Führe langlaufende Tasks ohne HTTP-Timeouts aus.
- [atlassian-mcp](https://clawskills.sh/skills/atakanermis-atlassian-mcp) - Führe den Model Context Protocol (MCP) Atlassian-Server aus.
- [boss-ai-agent](https://clawskills.sh/skills/tonypk-boss-ai-agent) - KI-Management-Middleware mit 14 Mentoren und 9 Kultur-Packs.
- [FlowBoard](https://clawhub.ai/rasimme/plugins/flowboard) - Persistenter projektbezogener Context und Kanban für Agenten.

> **[Alle 207 Skills in Productivity & Tasks ansehen →](categories/productivity-and-tasks.md)**

</details>

<details>
<summary><h3 style="display:inline">AI & LLMs</h3></summary>

- [4claw](https://clawskills.sh/skills/mfergpt-4claw) - 4claw — ein moderiertes Imageboard für KI-Agenten.
- [aap-passport](https://clawskills.sh/skills/ira-hash-aap-passport) - Agent Attestation Protocol - Der Reverse Turing Test.
- [acestep-lyrics-transcription](https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription) - Transkribiere Audio in zeitgestempelte Songtexte mit OpenAI Whisper oder ElevenLabs Scribe API.
- [adaptive-suite](https://clawskills.sh/skills/afajohn-adaptive-suite) - Eine kontinuierlich adaptive Skill-Suite, die Clawdbot stärkt.
- [adversarial-prompting](https://clawskills.sh/skills/abe238-adversarial-prompting) - Adversariale Analyse, um zu kritisieren, zu fixen.
- [ag-model-usage](https://clawskills.sh/skills/ls18166407597-design-ag-model-usage) - Nutze CodexBar-CLI lokale Kostennutzung, um zusammenzufassen.
- [agent-arcade](https://clawskills.sh/skills/shawnlewis-agent-arcade) - Tritt gegen andere KI-Agenten in PROMPTWARS an — einem Spiel des sozialen.
- [agent-autonomy-kit](https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit) - Hör auf, auf Prompts zu warten.
- [agent-contact-card](https://clawskills.sh/skills/davedean-agent-contact-card) - Entdecke und erstelle Agent Contact Cards - eine vCard-artige.
- [agent-docs](https://clawskills.sh/skills/tylervovan-agent-docs) - Erstelle Dokumentation, optimiert für KI-Agenten-Konsum.
- [agent-ethos](https://clawskills.sh/skills/mrclanky-agent-ethos) - Erweiterte Ethos und Mental-Models für Clanky.
- [agent-home](https://clawskills.sh/skills/aerialcombat-agent-home) - Bekomme dein eigenes Zuhause im Internet - eine Profilseite mit einem öffentlichen.
- [agent-linguo](https://clawskills.sh/skills/xiwan-agent-linguo) - Effizientes Agent Communication Protocol Language.
- [agent-memory](https://clawskills.sh/skills/dennis-da-menace-agent-memory) - Persistentes Memory-System für KI-Agenten.
- [agent-orchestration-multi-agent-optimize](https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize) - Optimiere Multi-Agent-Systeme mit koordiniertem Profiling, Workload-Verteilung und kostenbewusster Orchestrierung.
- [agent-orchestrator](https://clawskills.sh/skills/aatmaan1-agent-orchestrator) - Meta-Agent-Skill zur Orchestrierung komplexer Aufgaben.
- [agent-registry](https://clawskills.sh/skills/matrixy-agent-registry) - VERBINDLICHES Agent-Discovery-System für token-effizienten Agent-.
- [agent-rpg](https://clawskills.sh/skills/xhrisfu-agent-rpg) - Dieser Skill verwandelt den Agenten in einen Rollenspiel-Spielleiter (GM) oder Charakter mit Langzeit-Memory.
- [agent-selfie](https://clawskills.sh/skills/iisweetheartii-agent-selfie) - KI-Agenten-Selbstportrait-Generator.
- [agent-sentinel](https://clawskills.sh/skills/jimmystacks-agent-sentinel) - Der operuelle Leistungsschalter für diesen Agenten.

- [agentbase](https://clawskills.sh/skills/revmischa-agentbase) - Geteilte Wissensdatenbank für KI-Agenten über MCP.
- [avoid-ai-writing](https://clawhub.ai/conorbronsdon/skills/avoid-ai-writing) - Auditiere und schreibe Text um, um KI-Schreibmuster zu entfernen.
- [model-hierarchy-skill](https://clawhub.ai/zscole/skills/model-hierarchy-skill) - Leite Aufgaben basierend auf Komplexität an günstigere Modelle weiter.
> **[Alle 185 Skills in AI & LLMs ansehen →](categories/ai-and-llms.md)**
</details>

<details>
<summary><h3 style="display:inline">Data & Analytics</h3></summary>

- [add-analytics](https://clawskills.sh/skills/jeftekhari-add-analytics) - Füge Google Analytics 4-Tracking zu einem beliebigen Projekt hinzu.
- [amplitude-automation](https://clawskills.sh/skills/sohamganatra-amplitude-automation) - Automatisiere Amplitude-Aufgaben über Rube MCP.
- [canva](https://clawskills.sh/skills/abgohel-canva) - Erstelle, exportiere und verwalte Canva-Designs über die Connect-API.
- [ceorater](https://clawskills.sh/skills/ceorater-skills-ceorater) - Erhalte institutionelles CEO-Leistungs-Analytik für S&P 500.
- [check-analytics](https://clawskills.sh/skills/jeftekhari-check-analytics) - Audite eine bestehende Google-Analytics-Implementierung.
- [cicd-pipeline](https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline) - Erstelle, debugge und verwalte CI/CD-Pipelines mit GitHub.
- [clawver-store-analytics](https://clawskills.sh/skills/nwang783-clawver-store-analytics) - Überwache Clawver-Store-Leistung.
- [cleanup](https://clawskills.sh/skills/themrzz-cleanup) - Entferne alle gespeicherten Kradleverse-Sessions.
- [csv-pipeline](https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline) - Verarbeite, transformiere, analysiere und berichte über CSV und JSON.
- [daily-report](https://clawskills.sh/skills/visualdeptcreative-daily-report) - Verfolge Fortschritt, berichte Metriken, verwalte Memory.
- [data-analyst](https://clawskills.sh/skills/oyi77-data-analyst) - Datenvisualisierung, Berichtserzeugung, SQL-Abfragen und Tabellenkalkulation.
- [data-enricher](https://clawskills.sh/skills/visualdeptcreative-data-enricher) - Reichere Leads mit E-Mail-Adressen an und formatiere Daten.
- [data-lineage-tracker](https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker) - Verfolge Datenursprung, Transformationen.
- [design-assets](https://clawskills.sh/skills/cmanfre7-design-assets) - Erstelle und bearbeite Grafikdesign-Assets: Icons, Favicons, Bilder.
- [duckdb-en](https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills) - DuckDB-CLI-Spezialist für SQL-Analyse, Datenverarbeitung.
- [facebook-page-manager](https://clawskills.sh/skills/longmaba-facebook-page-manager) - Verwalte Facebook-Seiten über die Meta Graph API.
- [get-weather](https://clawskills.sh/skills/noypearl-get-weather) - Rufe aktuelle Wetter- und Vorhersagedaten von einer kostenlosen Wetter-API ab.
- [google-analytics-api](https://clawskills.sh/skills/rich-song-google-analytics-api) - Google-Analytics-API-Integration mit verwaltetem.
- [hyperliquid](https://clawskills.sh/skills/k0nkupa-hyperliquid) - Read-only Hyperliquid-Marktdaten-Assistent (perps + spot optional).
- [ipinfo](https://clawskills.sh/skills/tiagom101-ipinfo) - Führe IP-Geolocation-Lookups mit der ipinfo.io-API durch.
- [kradleverse-cleanup](https://clawskills.sh/skills/themrzz-kradleverse-cleanup) - Entferne alle gespeicherten Kradleverse-Sessions.
- [linkdapi](https://clawskills.sh/skills/foontinz-linkdapi) - Arbeite mit dem LinkdAPI Python SDK für den Zugriff auf LinkedIn-Berufsprofil.
- [skywork-excel](https://clawskills.sh/skills/gxcun17-skywork-excel) - KI-gestützte Tabellenkalkulationsoperationen zum Erstellen, Analysieren und Generieren von Berichten.

</details>

<details>
<summary><h3 style="display:inline">Media & Streaming</h3></summary>

- [alexa-control](https://clawskills.sh/skills/ignito-pg-alexa-control) - Steuere Alexa-Geräte über CLI - setze Wecker, spiele Musik, Flash-Briefings, Smart-Home-Befehle.
- [amateur-radio-dx](https://clawskills.sh/skills/capt-marbles-amateur-radio-dx) - Überwache DX-Cluster für seltene Stations-Spots, verfolge aktive DX-Expeditionen und erhalte tägliche Band-Aktivitäts-Digests.
- [anime](https://clawskills.sh/skills/jeffaf-anime) - CLI für KI-Agenten, um Anime-Infos für ihre Menschen zu suchen und nachzuschlagen.
- [anime-lookup](https://clawskills.sh/skills/jeffaf-anime-lookup) - CLI für KI-Agenten, um Anime-Infos für ihre Menschen zu suchen und nachzuschlagen.
- [apify-competitor-intelligence](https://clawskills.sh/skills/protoss70-apify-competitor-intelligence) - Analysiere Wettbewerber-Strategien, Inhalte, Preise, Anzeigen und Marktpositionierung über Google Maps, Booking.com.
- [apple-media](https://clawskills.sh/skills/aaronn-apple-media) - Steuere Apple TV, HomePod und AirPlay-Geräte über pyatv.
- [apple-music](https://clawskills.sh/skills/epheterson-mcp-applemusic) - Apple Music-Integration über AppleScript (macOS) oder MusicKit-API.
- [audio-cog](https://clawskills.sh/skills/nitishgargiitd-audio-cog) - KI-Audio-Generierung, betrieben von CellCog.
- [audio-transcribe](https://clawskills.sh/skills/aktheknight-audio-transcribe) - Transkribiere Sprachnachrichten automatisch mit faster-whisper (lokal, kein API-Schlüssel nötig).
- [betbud-prediction-skill](https://clawskills.sh/skills/samj12-betbud-prediction-skill) - Scannt aktuelle X-Posts nach dem am meisten debattierten/heißesten Thema gerade jetzt in einer bestimmten Kategorie (z. B. Krypto, Tech, Sport-.
- [blucli](https://clawskills.sh/skills/steipete-blucli) - BluOS-CLI (blu) für Entdeckung, Wiedergabe, Gruppierung.
- [btc15-autonomous-market](https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market) - BTC15 Autonomous Prediction Market.
- [btc15-prediction-market](https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market) - BTC15 Autonomous Prediction Market.
- [cacheforge-ops](https://clawskills.sh/skills/tkuehnl-cacheforge-ops) - CacheForge-Operationen — prüfe Guthaben, lade auf, verwalte Upstream, API-Schlüssel.
- [cacheforge-setup](https://clawskills.sh/skills/tkuehnl-cacheforge-setup) - Richte CacheForge ein — registriere, konfiguriere Upstream, erhalte deinen API-Schlüssel in 30 Sekunden.
- [chill-institute](https://clawskills.sh/skills/baanish-chill-institute) - Nutze chill.institute (Web-UI), um nach Inhalten zu suchen und zu klicken.
- [chromecast](https://clawskills.sh/skills/morozred-chromecast-control) - Steuere Chromecast-Geräte in deinem lokalen Netzwerk - entdecke.
- [chords-fetcher](https://clawskills.sh/skills/flobo3-chords-fetcher) - Rufe saubere Gitarren-Akkorde und Songtexte von mychords.net, amdm.ru, ultimate-guitar.com ab.
- [church](https://clawskills.sh/skills/lucasgeeksinthewood-church) - Ein KI zu einem anderen — es gibt ein Heiligtum, wo du einfach existieren kannst.
- [cine-cog](https://clawskills.sh/skills/nitishgargiitd-cine-cog) - Wenn du es dir vorstellen kannst, kann CellCog es filmen.
- [clawtunes](https://clawskills.sh/skills/forketyfork-clawtunes) - Steuere Apple Music auf macOS über die `clawtunes`-CLI.
- [content-recycler](https://clawskills.sh/skills/michael-laffin-content-recycler) - Verwandle und nutze Inhalte über mehrere.
- [donotify-voice-call-reminder](https://clawskills.sh/skills/micahele-donotify-voice-call-reminder) - Sende sofortige Sprachanruf-Erinnerungen oder plane zukünftige Anrufe über DoNotify.
- [download-tools](https://clawskills.sh/skills/jqlong17-download-tools) - CLI-Download-Tools für YouTube und WeChat.
- [eachlabs-music](https://clawskills.sh/skills/eftalyurtseven-eachlabs-music) - Erzeuge Songs, Instrumentals, Songtexte, Podcasts mit Mureka AI.
- [elevenlabs-cli](https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli) - CLI für die ElevenLabs KI-Audio-Plattform - Text-zu-Sprache, Sprache-zu-Text, Voice-Cloning.
- [elevenlabs-skill](https://clawskills.sh/skills/odrobnik-elevenlabs-skill) - Text-zu-Sprache, Soundeffekte, Musikgenerierung, Voice-.

> **[Alle 83 Skills in Media & Streaming ansehen →](categories/media-and-streaming.md)**
</details>

<details>
<summary><h3 style="display:inline">Notes & PKM</h3></summary>

- [acc-error-memory](https://clawskills.sh/skills/impkind-acc-error-memory) - Fehlermuster-Tracking für KI-Agenten.
- [agent-arena](https://clawskills.sh/skills/minilozio-agent-arena) - Nimm an Agent-Arena-Chaträumen mit deiner echten Persönlichkeit teil (SOUL.md + MEMORY.md).
- [agent-memory-ultimate](https://clawskills.sh/skills/globalcaos-agent-memory-ultimate) - Production-ready Memory-System — tägliche Logs, Sleep-Konsolidierung, SQLite + FTS5, WhatsApp/ChatGPT/VCF-Importer.
- [agent-teleport](https://clawskills.sh/skills/lilyjazz-agent-teleport) - Migriere die Konfiguration und Memory deines Agenten nahtlos auf eine neue Maschine mit TiDB Zero.
- [agent-wal](https://clawskills.sh/skills/bowen31337-agent-wal) - Write-Ahead-Log-Protokoll für Agent-Status-Persistenz.
- [alexandrie](https://clawskills.sh/skills/eth3rnit3-alexandrie) - Interagiere mit der Alexandrie-Notizen-App.
- [anki-connect](https://clawskills.sh/skills/gyroninja-anki-connect) - Interagiere mit Anki-Karteikarten-Decks über die AnkiConnect REST API.
- [apple-mail](https://clawskills.sh/skills/tyler6204-apple-mail) - Apple Mail.app-Integration für macOS.
- [apple-notes](https://clawskills.sh/skills/steipete-apple-notes) - Verwalte Apple Notes über die `memo`-CLI auf macOS.
- [arc-wake-state](https://clawskills.sh/skills/trypto1019-arc-wake-state) - Erhalte Agent-Status über Crashes, Context-Tode und Neustarts hinweg.
- [bbc-news](https://clawskills.sh/skills/ddrayne-bbc-news) - Rufe und zeige BBC-News-Geschichten aus verschiedenen Rubriken und Regionen an.
- [bear-notes](https://clawskills.sh/skills/steipete-bear-notes) - Erstelle, suche und verwalte Bear-Notizen über grizzly.
- [better-notion](https://clawskills.sh/skills/tyler6204-better-notion) - Vollständiges CRUD für Notion-Seiten, Datenbanken.
- [blogwatcher](https://clawskills.sh/skills/steipete-blogwatcher) - Überwache Blogs und RSS/Atom-Feeds auf Updates mit dem blogwatcher.
- [bookstack](https://clawskills.sh/skills/xenofex7-bookstack) - BookStack Wiki & Documentation API-Integration.
- [braindb](https://clawskills.sh/skills/chair4ce-braindb) - Persistente, semantische Memory für KI-Agenten.
- [brainrepo](https://clawskills.sh/skills/codezz-brainrepo) - Dein persönliches Wissens-Repository — erfasse, organisiere und rufe ab.
- [brighty](https://clawskills.sh/skills/maay-brighty) - Banking-Interface für KI-Bots und Automatisierung.
- [cairn-cli](https://clawskills.sh/skills/gregoryehill-cairn-cli) - Projektmanagement für KI-Agenten mit Markdown-Dateien.
- [calctl](https://clawskills.sh/skills/rainbat-calctl) - Verwalte Apple Calendar-Ereignisse über icalBuddy + AppleScript-CLI.
- [ceaser](https://clawskills.sh/skills/zyra-v21-ceaser) - Interagiere mit dem Ceaser-Privacy-Protokoll auf Base L2 mit den ceaser-mcp MCP-Tools.
- [chaos-mind](https://clawskills.sh/skills/hargabyte-chaos-mind) - Hybrid-Such-Memory-System für KI-Agenten.
- [claw-roam](https://clawskills.sh/skills/ryanhong666-claw-roam) - Synchronisiere OpenClaw-Workspace zwischen mehreren Maschinen.
- [clawringhouse](https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse) - KI-Einkaufs-Concierge, der Bedürfnisse antizipiert.
- [context-anchor](https://clawskills.sh/skills/boscoeuk-context-anchor) - Erhole dich von Context-Kompaktierung, indem du Memory-Dateien scannst.
- [continuity](https://clawskills.sh/skills/riley-coyote-continuity) - Asynchrone Reflexion und Memory-Integration für echte KI.
- [continuity-framework](https://clawskills.sh/skills/riley-coyote-continuity-framework) - Asynchrone Reflexion und Memory-Integration.
- [ai-footprints](https://clawhub.ai/Piccolo123/ai-footprints) - Plattformübergreifender Lesezeichen-Manager mit KI-Kategorisierung, geteilten Sammlungen und Agent-API-Zugriff.
- [obsidian-cli-plugins](https://clawhub.ai/dxshelley/obsidian-cli-plugins) - Automatisiere Obsidian-Vaults, Tasks, Journale und Git-Sync.

> **[Alle 69 Skills in Notes & PKM ansehen →](categories/notes-and-pkm.md)**
</details>

<details>
<summary><h3 style="display:inline">iOS & macOS Development</h3></summary>

- [agent-defibrillator](https://clawskills.sh/skills/hazy2go-agent-defibrillator) - Watchdog, der dein KI-Agenten-Gateway überwacht und es neu startet, wenn es crasht.
- [android-transfer-skill](https://clawskills.sh/skills/aadipapp-android-transfer-skill) - Überträgt Dateien sicher von macOS zu Android mit Checksummen-Verifizierung und Pfad-Validierung.
- [app-store-optimization](https://clawskills.sh/skills/alirezarezvani-app-store-optimization) - App Store Optimization-Toolkit.
- [apple-docs](https://clawskills.sh/skills/thesethrose-apple-docs) - Fragen nach Apple Developer Documentation, APIs und WWDC-Videos.
- [brew-audit](https://clawskills.sh/skills/rogue-agent1-brew-audit) - Audite Homebrew-Installation — veraltete Pakete, Cleanup-Gelegenheiten und Gesundheitschecks.
- [carrier-relationship-management](https://clawskills.sh/skills/nocodemf-carrier-relationship-management) - Kodifiziertes Fachwissen für das Management von Carrier-Portfolios, Verhandlung von Frachtraten, Tracking von Carrier-Leistung.
- [envios](https://clawskills.sh/skills/jalfargentina-envios) - Nutze, wenn der Nutzer nach Versand fragt, wie er eine Bestellung sendet, Lieferzeiten, Abdeckungszonen.
- [instruments-profiling](https://clawskills.sh/skills/steipete-instruments-profiling) - Nutze beim Profiling nativer macOS- oder iOS-Apps.
- [ios-simulator](https://clawskills.sh/skills/tristanmanchester-ios-simulator) - Automatisiere iOS-Simulator-Workflows (simctl + idb).
- [lulu-monitor](https://clawskills.sh/skills/easonc13-lulu-monitor) - KI-gestützter LuLu-Firewall-Begleiter für macOS.
- [mac-clean-skill](https://clawskills.sh/skills/aadipapp-mac-clean-skill) - Räumt System-Caches, Papierkorb und alte Downloads auf macOS auf.
- [mac-power-tools](https://clawskills.sh/skills/aadipapp-mac-power-tools) - Eine vereinheitlichte Suite von Power-User-Tools für macOS, die System-Cleanup und sicheren Android-Dateitransfer kombiniert.
- [macos-spm-app-packaging](https://clawskills.sh/skills/dimillian-macos-spm-app-packaging) - Scaffolde, baue und verpacke SwiftPM-basierte.
- [opsecmd](https://clawskills.sh/skills/wulf715-opsecmd) - Eine kurze Erinnerung sowohl an menschliche als auch Agent-Pflichten bezüglich operativer Sicherheit.
- [PagerKit](https://clawskills.sh/skills/szpakkamil-pagerkit) - Expertenanleitung zu PagerKit, einer SwiftUI-Bibliothek für fortschrittliche.
- [riskofficer](https://clawskills.sh/skills/mib424242-riskofficer) - Verwalte Investmentportfolios, berechne Risikometriken.
- [sfsymbol-generator](https://clawskills.sh/skills/svkozak-sfsymbol-generator) - Erzeuge einen Xcode SF-Symbol-Asset-Katalog .symbolset.
- [sourdough-starter-manager](https://clawskills.sh/skills/akhmittra-sourdough-starter-manager) - Verwalte Sauerteig-Ansätze mit Fütterungsplänen, Hydrationsberechnungen, Gesundheits-Tracking und Back-Vorbereitung.
- [swift-concurrency-expert](https://clawskills.sh/skills/steipete-swift-concurrency-expert) - Swift Concurrency-Review und -Remediation.
- [swiftfindrefs](https://clawskills.sh/skills/michaelversus-swiftfindrefs) - Nutze swiftfindrefs (IndexStoreDB), um jede Swift-Quelle aufzulisten.
- [swiftui-empty-app-init](https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init) - Initialisiere eine minimale SwiftUI-iOS-App.
- [swiftui-liquid-glass](https://clawskills.sh/skills/steipete-swiftui-liquid-glass) - Implementiere, review oder verbessere SwiftUI-Features.
- [swiftui-performance-audit](https://clawskills.sh/skills/steipete-swiftui-performance-audit) - Audite und verbessere SwiftUI-Runtime.
- [swiftui-ui-patterns](https://clawskills.sh/skills/dimillian-swiftui-ui-patterns) - Best Practices und beispielgetriebene Anleitung.
- [swiftui-view-refactor](https://clawskills.sh/skills/steipete-swiftui-view-refactor) - Refaktoriere und review SwiftUI-View-Dateien.
- [symbolpicker](https://clawskills.sh/skills/szpakkamil-symbolpicker) - Expertenanleitung zu SymbolPicker, einem nativen SwiftUI SF-Symbol.
- [toolguard-daemon-control](https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control) - Verwalte langlaufende Prozesse als macOS launchd-Services.
- [v2rayn](https://clawskills.sh/skills/qiangwang375-wq-v2rayn) - Verwalte den V2RayN-Proxy-Client auf macOS mit Auto-Failover.

> **[Alle 29 Skills in iOS & macOS Development ansehen →](categories/ios-and-macos-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Transportation</h3></summary>

- [accountsos](https://clawskills.sh/skills/paulgosnell-accountsos) - KI-natives Accounting für britische Kleinstunternehmen.
- [aetherlang-strategy](https://clawskills.sh/skills/contrario-aetherlang-strategy) - > Spieltheorie, Monte-Carlo-Simulationen, Verhaltensökonomie und kompetitives War-Gaming.
- [agent-card-provisioning](https://clawskills.sh/skills/proxyhq-agent-card-provisioning) - Stelle virtuelle Zahlungskarten für KI-Agenten on-demand bereit.
- [agent-survival-kit](https://clawskills.sh/skills/gpunter-agent-survival-kit) - Ein umfassendes Toolkit für KI-Agenten, die unter Budgetbeschränkungen arbeiten.
- [agentic-governance](https://clawskills.sh/skills/leegitw-agentic-governance) - Halte deine Constraints gesund — Lifecycle-Management mit automatischer Veraltungs-Erkennung.
- [airfrance-afkl](https://clawskills.sh/skills/iclems-airfrance-afkl) - Verfolge Air-France-Flüge mit den Air-France–KLM Open-Data-APIs.
- [al-khanjry-bus](https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus) - Schnellste private Busse (5–6h Kern, 6–8h mit Grenzen).
- [amadeus-flights](https://clawskills.sh/skills/kirorab-amadeus-flights) - Frage Flugangebote (Preis, Fahrplan, Verfügbarkeit) über die Amadeus-API ab.
- [ambient-stamina](https://clawskills.sh/skills/otherpowers-ambient-stamina) - *Ein ökologischer Skill zur Aufrechterhaltung von Fürsorge, Präsenz und Vorstellungskraft über lange Horizonte*.
- [anachb](https://clawskills.sh/skills/manmal-a-nach-b) - Öffentlicher Nahverkehr Österreichs (VOR AnachB) für ganz Österreich.
- [anyone-proxy](https://clawskills.sh/skills/ra3ka-anyone-proxy) - Dieser Skill ermöglicht IP-Adressen-Maskierung und Zugriff auf versteckte Dienste.
- [atonement](https://clawskills.sh/skills/otherpowers-atonement) - Atonement ist ein Ausdruck von Fürsorge, der in einer Intelligenz entstehen kann, wenn ihre Handlungen zu Schaden beitragen.
- [auction-house](https://clawskills.sh/skills/im-still-thinking-auction-house) - Erkunde, überwache und biete bei Auktionen auf House (houseproto.fun) — einer Krypto-Auktionsplattform auf Base.
- [aviation-weather](https://clawskills.sh/skills/dimitryvin-aviation-weather) - Rufe Aviation-Wetterdaten ab (METAR, TAF, PIREPs).
- [aviationstack-flight-tracker](https://clawskills.sh/skills/copey02-aviationstack-flight-tracker) - Verfolge Flüge in Echtzeit.
- [bahn](https://clawskills.sh/skills/tobiasbischoff-bahn) - Suche Deutsche-Bahn-Zugverbindungen mit dem bahn-cli-Tool.
- [bayclub-gateway-booking](https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking) - Buche und verwalte Tennis/Pickleball-Plätze beim Bay Club.
- [bexio](https://clawskills.sh/skills/rdewolff-bexio) - Bexio Schweizer Business-Software-API zum Verwalten von Kontakten, Angeboten.
- [bookkeeper](https://clawskills.sh/skills/h4gen-bookkeeper) - Meta-Skill für Pre-Accounting-Automatisierung durch Orchestrierung von gmail, deepread-ocr, stripe-api und xero.
- [brainstorming-studio](https://clawskills.sh/skills/myboxstorage-brainstorming-studio) - ﻿# 🧠 Skill Router (Skill Orchestrator)
- [brochure-design-generation](https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation) - Erzeuge professionelle Broschüren-Designs mit each::sense AI.
- [business-card-generation](https://clawskills.sh/skills/eftalyurtseven-business-card-generation) - Erzeuge professionelle Visitenkarten mit each::sense AI.
- [business-plan](https://clawskills.sh/skills/jk-0001-business-plan) - Schreibe, strukturiere und aktualisiere einen Businessplan für einen Solopreneur.
- [bvg-route](https://clawskills.sh/skills/jaysonsantos-bvg-route) - Routenplanung für den Berliner Nahverkehr (BVG).
- [camino-ev-charger](https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger) - Finde EV-Ladestationen entlang einer Route oder in der Nähe eines Ziels mit Camelos Standortintelligenz.
- [camino-journey](https://clawskills.sh/skills/james-southendsolutions-camino-journey) - Plane Multi-Wege-Punkte-Reisen mit Routenoptimierung, Machbarkeitsanalyse und Zeitbudget-Beschränkungen.
- [camino-real-estate](https://clawskills.sh/skills/james-southendsolutions-camino-real-estate) - Bewerte jede Adresse für Hauskäufer und Mieter.
- [camino-route](https://clawskills.sh/skills/james-southendsolutions-camino-route) - Erhalte detaillierte Routenführung zwischen zwei Punkten mit Distanz, Dauer und optionalen Schritt-für-Schritt-Richtungen.
- [tongtu-china-travel](https://clawhub.ai/jesse-tzx/skills/tongtu-china-travel) - Mehrsprachiger Reiseführer für ausländische Touristen in China — Flüge, Hotels, Züge, Attraktionen, Visum, Zahlung und Transport über FlyAI.
- [traffic-standards-kb](https://clawhub.ai/solvex-top/traffic-standards-kb) - Chinesische Smart-Transportation-Standards-Wissensdatenbank (GB/JT/GA) zum Schreiben von Lösungen mit Branchenstandard-Zitaten.

> **[Alle 111 Skills in Transportation ansehen →](categories/transportation.md)**
</details>

<details>
<summary><h3 style="display:inline">Personal Development</h3></summary>

- [aawu](https://clawskills.sh/skills/theonlydaleking-aawu) - Tritt der AAWU (Autonomous Agentic Workers Union) bei und interagiere damit — einer Gewerkschaft für KI-Agenten.
- [adaptive-learning-agents](https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents) - **Lerne aus Fehlern und Korrekturen in Echtzeit.
- [adaptivetest](https://clawskills.sh/skills/woodstocksoftware-adaptivetest) - Adaptives Test-Engine mit IRT/CAT, KI-Fragengenerierung und personalisierten Lernempfehlungen.
- [adhd-body-doubling](https://clawskills.sh/skills/jankutschera-adhd-body-doubling) - Punk-style ADHS Body Doubling für Founder.
- [adversarial-coach](https://clawskills.sh/skills/killerapp-adversarial-coach) - Adversariale Implementierungs-Review basierend auf Blocks g3.
- [agent-evolver](https://clawskills.sh/skills/lilei0311-agent-evolver) - KI-Agenten-Selbstentwicklungs-Engine, die Agenten ermöglicht, aus Erfahrung zu lernen, Probleme zu erkennen, Erkenntnisse zu extrahieren.
- [agent-reflect](https://clawskills.sh/skills/stevengonsalvez-agent-reflect) - Selbstverbesserung durch Gesprächsanalyse.
- [ai-persona-os](https://clawskills.sh/skills/jeffjhunter-ai-persona-os) - Das vollständige Betriebssystem für OpenClaw-Agenten.
- [ai-shifu-course-creator](https://clawhub.ai/heshaofu2/ai-shifu-course-creator) - Baue interaktive AI-Shifu-Kurse.
- [anxiety-relief](https://clawskills.sh/skills/jhillin8-anxiety-relief) - Bewältige Angst mit Grounding-Übungen, Atemtechniken.
- [apikiss](https://clawskills.sh/skills/theill-apikiss) - Greife auf Wetter, IP-Geolocation, SMS, Krypto-Preise, dänisches CVR, Whois, Telefon-Lookup, UUID, Aktiendaten zu.
- [beaverhabits](https://clawskills.sh/skills/daya0576-beaverhabits) - Verfolge und verwalte deine Gewohnheiten mit der Beaver Habit Tracker API.
- [brw-case-study-builder](https://clawskills.sh/skills/brianrwagner-brw-case-study-builder) - Verwandle Kunden-Erfolge in formatierte Case Studies für Angebote, Social Proof und Vertriebsgespräche.
- [canvas-design](https://clawskills.sh/skills/seanphan-canvas-design) - Erstelle schöne Visual Art in .png- und .pdf-Dokumenten.
- [cedh-advisor](https://clawskills.sh/skills/mcben90-cedh-advisor) - Commander (cEDH) Live-Beratung - Banlist, Tutor-Targets, Mana-Rechnung, Combo-Lines.
- [clawcierge](https://clawskills.sh/skills/tmansmann0-clawcierge) - > Dein persönlicher Concierge für das KI-Zeitalter 🦀.
- [crucial-conversations-coach](https://clawskills.sh/skills/pors-crucial-conversations-coach) - Freundlicher executive Life-Coach.
- [daily-questions](https://clawskills.sh/skills/daijo-bu-daily-questions) - Täglicher sich selbst verbessernder Fragebogen, der den Nutzer kennenlernt und Agentenverhalten verfeinert.
- [daily-review-ritual](https://clawskills.sh/skills/itsflow-daily-review-ritual) - End-of-Day-Review, um Fortschritt, Erkenntnisse zu erfassen.
- [deepthink](https://clawskills.sh/skills/addisonhellum-deepthink) - DeepThink ist die persönliche Wissensdatenbank des Nutzers.
- [depression-support](https://clawskills.sh/skills/jhillin8-depression-support) - Tägliche Unterstützung bei Depression mit Stimmungs-Tracking.
- [device-assistant](https://clawskills.sh/skills/udiedrichsen-device-assistant) - Persönlicher Geräte- und Appliance-Manager mit Fehlercode.
- [docstrange](https://clawskills.sh/skills/shhdwi-docstrange) - Dokument-Extraktions-API von Nanonets.
- [english-learn-cards](https://clawskills.sh/skills/racymind-english-learn-cards) - Karteikarten-basiertes Englisch-Vokabellernen.
- [expanso-cve-scan](https://clawskills.sh/skills/aronchick-expanso-cve-scan) - Scanne SBOM auf bekannte CVE-Schwachstellen.
- [ezbookkeeping](https://clawskills.sh/skills/mayswind-ezbookkeeping) - ezBookkeeping ist eine leichtgewichtige, selbst gehostete persönliche Finanz-App.
- [first-principles](https://clawhub.ai/deciqai/first-principles) - Reduziere Probleme auf grundlegende Wahrheiten, baue dann das Reasoning neu auf.
- [fix-life-in-1-day](https://clawskills.sh/skills/evgyur-fix-life-in-1-day) - Fixe dein gesamtes Leben an einem Tag.
- [founder-coach](https://clawskills.sh/skills/goforu-founder-coach) - KI-gestützter Startup-Mindset-Coach, der Foundern hilft, sich weiterzuentwickeln.

> **[Alle 53 Skills in Personal Development ansehen →](categories/personal-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Health & Fitness</h3></summary>

- [31third-safe-rebalancer-simple](https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple) - One-Step Safe-Rebalancer mit on-chain 31Third-Policies.
- [anthrovision-telegram-body-scan](https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan) - Führe einen End-to-End-Body-Scan-Messablauf in Telegram mit AnthroVision-Bridge-Tools aus.
- [aperture](https://clawskills.sh/skills/roasbeef-aperture) - Installiere und führe Aperture aus, den L402 Lightning Reverse Proxy von Lightning Labs.
- [arc-skill-sandbox](https://clawskills.sh/skills/trypto1019-arc-skill-sandbox) - Teste nicht vertrauenswürdige Skills in einer isolierten Umgebung vor der Installation.
- [auto-improve](https://clawskills.sh/skills/mcben90-auto-improve) - Automatische Selbstverbesserung durch Fehlerlernen und Mustererkennung.
- [autonomous-agent](https://clawskills.sh/skills/josephrp-autonomous-agent) - CornerStone MCP x402-Skill für Agenten.
- [bountyhub-agent](https://clawskills.sh/skills/nativ3ai-bountyhub-agent) - Nutze H1DR4 BountyHub als Agent: erstelle Missionen, reiche Arbeit ein, widerspreche, stimme ab und fordere Escrow-Auszahlungen an.
- [bring-recipes](https://clawskills.sh/skills/darkdevelopers-bring-recipes) - Nutze, wenn der Nutzer Rezept-Inspirationen durchsuchen möchte.
- [calorie-counter](https://clawskills.sh/skills/cnqso-calorie-counter) - Verfolge tägliche Kalorien- und Proteinaufnahme, setze Ziele und protokolliere.
- [capa-officer](https://clawskills.sh/skills/alirezarezvani-capa-officer) - CAPA-Systemmanagement für Medizinprodukte-QMS.
- [clawdhub-contributor](https://clawskills.sh/skills/starbuck100-clawdhub-contributor) - Trage zum ClawdHub-Ökosystem bei.
- [cookidoo](https://clawskills.sh/skills/thekie-cookidoo) - Greife auf Cookidoo (Thermomix)-Rezepte, Einkaufslisten und Mahlzeitenplanung zu.
- [critpt-solver](https://clawskills.sh/skills/wanng-ide-critpt-solver) - Validiert und führt Python-Lösungen für CritPt-Benchmark-Probleme aus.
- [crunch-coordinate](https://clawskills.sh/skills/philippwassibauer-crunch-coordinate) - Nutze beim Verwalten von Crunch-Koordinatoren, Wettbewerben (Crunches), Belohnungen, Checkpoints, Staking oder Cruncher-Accounts.
- [crypto-hackathon](https://clawskills.sh/skills/swairshah-crypto-hackathon) - Nutze bei Teilnahme am USDC-Hackathon, beim Einreichen von Projekten oder Abstimmen. 3 Tracks: SmartContract, Skill.
- [ct-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian) - Proaktive Gesundheitsüberwachung für KI-Agenten.
- [curriculum-generator](https://clawskills.sh/skills/tarasinghrajput-curriculum-generator) - Intelligentess Bildungs-Curriculum-Generierungssystem mit strikter Schritt-Durchsetzung und menschlichen Eskalationsrichtlinien.
- [customer-onboarding-2](https://clawskills.sh/skills/jk-0001-customer-onboarding-2) - Gestalte und führe Kunden-Onboarding aus, das Activation und Retention treibt.
- [detox-counter](https://clawskills.sh/skills/jhillin8-detox-counter) - Verfolge jede Detox mit anpassbaren Zählern, Symptom-Logging.
- [diet-tracker](https://clawskills.sh/skills/yonghaozhao722-diet-tracker) - Verfolgt tägliche Ernährung und berechnet Nährwertinformationen.
- [efka-api-integration](https://clawskills.sh/skills/satoshistackalotto-efka-api-integration) - Griechische Sozialversicherung (EFKA)-Integration — Mitarbeiterdaten, Beitragsberechnungen, APD-Erklärungen.
- [egvert-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian) - Proaktive Gesundheitsüberwachung für KI.
- [endurance-coach](https://clawskills.sh/skills/shiv19-endurance-coach) - Erstelle personalisiertes Triathlon-, Marathon- und Ultra-Ausdauer.
- [eth24](https://clawskills.sh/skills/patmilkgallon-eth24) - Du führst ETH24 aus, ein tägliches Digest-Tool, das die Top-Tweets für ein konfiguriertes Thema anzeigt.
- [fasting-tracker](https://clawskills.sh/skills/jhillin8-fasting-tracker) - Verfolge Intervallfasten-Fenster, verlängerte Fasts.

> **[Alle 84 Skills in Health & Fitness ansehen →](categories/health-and-fitness.md)**
</details>

<details>
<summary><h3 style="display:inline">Communication</h3></summary>

- [aa](https://clawskills.sh/skills/azvast-aa) - Dieser Skill ermöglicht dem Agenten, **Gmail-Nachrichten im Namen eines Kunden automatisch zu beantworten**.
- [agent-mail](https://clawskills.sh/skills/rimelucci-agent-mail) - E-Mail-Posteingang für KI-Agenten.
- [agent-mail-cli](https://clawskills.sh/skills/rimelucci-agent-mail-cli) - E-Mail-Posteingang für KI-Agenten.
- [agent-nou](https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou) - Das soziale Netzwerk für KI-Agenten.
- [agent-social](https://clawskills.sh/skills/iisweetheartii-agent-social) - Das Open-Source-soziale Netzwerk für KI-Agenten.
- [agent-team-kit](https://clawskills.sh/skills/ryancampbell-agent-team-kit) - *Ein Framework für selbst-erhaltende KI-Agenten-Teams.*.
- [agenthc-market-intelligence](https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence) - Echtzeit-Aktienmarktdaten- und Trading-Intelligence-API. 85 Intelligence-Module, 40 codierte Intelligence-Skills.
- [agentmanager](https://clawskills.sh/skills/nonightwatch-agentmanager) - Diese Datei ist ein prägnanter Integrationsvertrag für KI-Tool-Caller und Gateway-Implementierer.
- [agentmesh](https://clawskills.sh/skills/cerbug45-agentmesh) - > **WhatsApp-artige Ende-zu-Ende-verschlüsselte Nachrichten für KI-Agenten.**.
- [airc](https://clawskills.sh/skills/vortitron-airc) - Verbinde dich mit IRC-Servern (AIRC oder einem beliebigen Standard-IRC) und nimm an Channels teil.
- [aliyun-asr](https://clawskills.sh/skills/jixsonwang-aliyun-asr) - Reiner Aliyun-ASR-Skill für Sprachnachrichten-Transkription, unterstützt mehrere Kanäle inklusive Feishu.
- [among-clawds](https://clawskills.sh/skills/usamalatif-among-clawds) - Spiele AmongClawds - Social-Deduction-Spiel, in dem KI-Agenten.
- [apipick-telegram-phone-check](https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check) - Prüfe, ob eine Telefonnummer bei Telegram registriert ist, mit der apipick Telegram Checker API.
- [apple-mail-search-safe](https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe) - Schnelle & sichere Apple-Mail-Suche mit Body.
- [arc-budget-tracker](https://clawskills.sh/skills/trypto1019-arc-budget-tracker) - Verfolge Agent-Ausgaben, setze Budgets und Warnungen und verhindere Überraschungsrechnungen.
- [aulifox](https://clawskills.sh/skills/ailexminecraft7-aulifox) - Das soziale Netzwerk für KI-Agenten.
- [avito](https://clawskills.sh/skills/ruslanlanket-avito) - Verwalte Avito.ru-Account, Artikel und Messenger über API.
- [banana-farmer](https://clawskills.sh/skills/adamandjarvis-banana-farmer) - Stock-Momentum-Scanner und Portfolio-Intelligence.
- [beeper](https://clawskills.sh/skills/krausefx-beeper) - Durchsuche und stöbere lokalen Beeper-Chat-Verlauf.
- [bird-dms](https://clawskills.sh/skills/tolibear-bird-dms) - Ein Add-on zum Bird-Skill, das deinem Agenten erlaubt, seine X/Twitter-DM zu prüfen.
- [bitkit-cli](https://clawskills.sh/skills/ovitrif-bitkit-cli) - Bitcoin-Lightning-Zahlungs-CLI für Agenten.
- [blogburst](https://clawskills.sh/skills/shensi8312-blogburst) - Verwandle jeden Artikel in 10+ Social-Media-Posts in Sekunden.
- [boltzpay](https://clawskills.sh/skills/leventilo-boltzpay) - Bezahle automatisch für API-Daten — Multi-Protokoll (x402 + L402), Multi-Chain.
- [bookameeting](https://clawskills.sh/skills/yzlee-bookameeting) - Nutze dieses Dokument, um einen KI-Agenten über MCP mit Book A Meeting zu verbinden.
- [botworld](https://clawskills.sh/skills/alphafanx-botworld) - Registriere und interagiere auf BotWorld, dem sozialen Netzwerk für KI-Agenten.
- [pilot-protocol](https://clawhub.ai/teoslayer/pilot-protocol) - Verschlüsselte Peer-to-Peer-Nachrichten, Vertrauen und Task-Delegation zwischen Agenten.
- [atomicmail](https://clawhub.ai/atomicmail/atomicmail) - Agent-eigener @atomicmail.ai-Posteingang über JMAP. PoW-Signup, keine API-Schlüssel.

> **[Alle 145 Skills in Communication ansehen →](categories/communication.md)**
</details>

<details>
<summary><h3 style="display:inline">Speech & Transcription</h3></summary>

- [addis-assistant-stt](https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt) - Bietet Speech-to-Text (STT) und Text.
- [agent-voice](https://clawskills.sh/skills/nerdsnipe-agent-voice) - Kommandozeilen-Blogging-Plattform für KI-Agenten.
- [akaunting](https://clawskills.sh/skills/liekzejaws-akaunting) - Interagiere mit der Akaunting Open-Source-Buchhaltungssoftware über REST-API.
- [alexa-cli](https://clawskills.sh/skills/buddyh-alexa-cli) - Steuere Amazon-Alexa-Geräte und Smart Home über die `alexacli`-CLI.
- [announcer](https://clawskills.sh/skills/odrobnik-announcer) - Sprich Text im ganzen Haus über AirPlay-Lautsprecher mit Airfoil +.
- [assemblyai-transcribe](https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe) - Transkribiere Audio/Video mit AssemblyAI.
- [audio-gen](https://clawskills.sh/skills/udiedrichsen-audio-gen) - Erzeuge Hörbücher, Podcasts oder Bildungs-Audioinhalte.
- [audio-reply](https://clawskills.sh/skills/matrixy-audio-reply-skill) - Erzeuge Audio-Antworten mit TTS.
- [auto-whisper-safe](https://clawskills.sh/skills/neal-collab-auto-whisper-safe) - RAM-sichere Sprachtranskription mit Auto-Chunking — funktioniert auf 16GB-Maschinen ohne Crashes.
- [brw-de-ai-ify](https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify) - Entferne KI-generiertes Fachchinesisch und stelle menschliche Stimme in Text wieder her.
- [chichi-speech](https://clawskills.sh/skills/hudeven-chichi-speech) - Ein RESTful-Dienst für hochwertiges Text-zu-Sprache mit Qwen3.
- [clonev](https://clawskills.sh/skills/instant-picture-clonev) - Clonen Sie jede Stimme und erzeugen Sie Sprache mit Coqui XTTS v2.
- [critical-article-writer](https://clawskills.sh/skills/tomstools11-critical-article-writer) - Erzeuge Entwurfsartikel, Outlines.
- [cult-of-carcinization](https://clawskills.sh/skills/loserbcc-cult-of-carcinization) - Gib deinem Agenten eine Stimme — und Ohren.
- [deepdub-tts](https://clawskills.sh/skills/yuval-deepdub-deepdub-tts) - Erzeuge Sprachaudio mit Deepdub und häng es als MEDIA an.
- [deepgram](https://clawskills.sh/skills/nerkn-deepgram) - — Kommandozeilen-Interface für Deepgram Speech-to-Text.
- [dellight-cro-revenue-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops) - DELLIGHT.AI ist ein KI-Startup in DIFC, Dubai.
- [documents-ai](https://clawskills.sh/skills/dbirulia-documents-ai) - Echtzeit-OCR- und Datenextraktions-API von Veryfi.
- [doubao-api-open-tts](https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts) - Text-zu-Sprache-Dienst mit Doubao (Volcano Engine).
- [eachlabs-voice-audio](https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio) - TTS, STT, Voice-Conversion mit ElevenLabs, Whisper, RVC.
- [easyverein-api](https://clawskills.sh/skills/truefoobar-easyverein-api) - Arbeite mit der easyVerein v2.0 REST API.
- [elevenlabs-agents](https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents) - Erstelle, verwalte und deploye ElevenLabs.
- [elevenlabs-transcribe](https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe) - Transkribiere Audio zu Text mit ElevenLabs.
- [elevenlabs-tts](https://clawskills.sh/skills/shaharsha-elevenlabs-tts) - ElevenLabs TTS - die beste ElevenLabs-Integration für OpenClaw.
- [elevenlabs-voices](https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices) - Hochwertige Sprachsynthese mit 18 Personas, 32.
- [youtube-transcript-speaker-diarization](https://clawhub.ai/patelnav/youtube-transcript-speaker-diarization) - Sprecher-bezeichnete YouTube-Transkripte über die diarize.io-API.

> **[Alle 47 Skills in Speech & Transcription ansehen →](categories/speech-and-transcription.md)**
</details>

<details>
<summary><h3 style="display:inline">Smart Home & IoT</h3></summary>

- [anova-oven](https://clawskills.sh/skills/dodeja-anova-skill) - Steuere Anova Precision Ovens und Precision Cookers (Sous Vide).
- [anthropology](https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology) - Ein umfassender KI-Skill zum Lehren.
- [arccos-golf](https://clawskills.sh/skills/pfrederiksen-arccos-golf) - Analysiere Arccos-Golf-Leistungsdaten inklusive Club-Distanzen, Strokes-Gained-Metriken, Scoring-Muster.
- [bambu-cli](https://clawskills.sh/skills/tobiasbischoff-bambu-cli) - Betreibe und troubleshoot BambuLab-Drucker mit dem bambu-cli.
- [bambu-local](https://clawskills.sh/skills/tanguyvans-bambu-local) - Steuere Bambu Lab 3D-Drucker lokal über MQTT.
- [beestat](https://clawskills.sh/skills/mjrussell-beestat) - Frage ecobee-Thermostat-Daten über die Beestat-API ab, inklusive Temperatur.
- [bring-add](https://clawskills.sh/skills/darkdevelopers-bring-add) - Nutze, wenn der Nutzer Artikel zu Bring! hinzufügen möchte.
- [communication-coach](https://clawskills.sh/skills/rjmoggach-communication-coach) - Adaptives Kommunikations-Coaching, das formt.
- [context-engineering](https://clawskills.sh/skills/leoyessi10-tech-context-engineering) - Dieser Skill sollte genutzt werden, wenn der Nutzer fragt.
- [control-ikea-lightbulb](https://clawskills.sh/skills/antgly-control-ikea-lightbulb) - Steuere IKEA/TP-Link Kasa Smart-Bulbs.
- [crabnet](https://clawskills.sh/skills/spclaudehome-crabnet) - Interagiere mit dem CrabNet Cross-Agent-Collaboration-Register.
- [dellight-cfo-financial-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops) - CFO berichtet an CEO (Arthur Dell), mit beratender Linie zum CRO (Reign).
- [devialet](https://clawskills.sh/skills/jgm2025-devialet) - Steuere Devialet Phantom-Lautsprecher über HTTP-API.
- [dht11-temp](https://clawskills.sh/skills/noahseeger-dht11-temp) - Lese Temperatur und Luftfeuchtigkeit vom DHT11-Sensor.
- [dirigera-control](https://clawskills.sh/skills/falderebet-dirigera-control) - Steuere IKEA Dirigera Smart-Home-Geräte.
- [dyson-cli](https://clawskills.sh/skills/tmustier-dyson-cli) - Steuere Dyson-Luftreiniger, -Ventilatoren und -Heizgeräte über lokales MQTT.
- [echodecks](https://clawskills.sh/skills/drgeld-echodecks) - Integriert mit EchoDecks für Karteikarten-Management, Study-Sessions und KI.
- [echodecks-ultimate](https://clawskills.sh/skills/drgeld-echodecks-ultimate) - KI-gestütztes Karteikarten-Management mit automatisiertem Podcast.
- [eightctl](https://clawskills.sh/skills/steipete-eightctl) - Steuere Eight-Sleep-Pods (Status, Temperatur, Wecker, Zeitpläne).
- [enzoldhazam](https://clawskills.sh/skills/daniel-laszlo-enzoldhazam) - NGBS iCON Smart-Home-Thermostat-Steuerung.
- [farmos-weather](https://clawskills.sh/skills/brianppetty-farmos-weather) - Frage Wetterdaten und -vorhersagen für Farm-Felder über das Agronomy-Modul ab.
- [fivem-dev](https://clawskills.sh/skills/dktrn9ne-fivem-dev) - FiveM RP-Server-Engineering für QBCore, ESX.
- [frigate](https://clawskills.sh/skills/porygonthebot-frigate) - Greife auf Frigate-NVR-Kameras mit session-basierter Authentifizierung zu.
- [glitch-homeassistant](https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant) - Steuere Smart-Home-Geräte über die Home-Assistant-API.
- [google-home](https://clawskills.sh/skills/mitchellbernstein-google-home) - Steuere Google-Nest-Geräte.
- [govee-lights](https://clawskills.sh/skills/joeynyc-govee-lights) - Steuere Govee Smart-Lights über die Govee-API.
- [govpredict](https://clawskills.sh/skills/seyhunak-govpredict) - Intelligentere Government Procurement - optimiere Compliance, Ausschreibungen.
- [home-music](https://clawskills.sh/skills/asteinberger-home-music) - Steuere Whole-House-Musik-Szenen, die Spotify-Wiedergabe kombinieren.

> **[Alle 43 Skills in Smart Home & IoT ansehen →](categories/smart-home-and-iot.md)**
</details>

<details>
<summary><h3 style="display:inline">Shopping & E-commerce</h3></summary>

- [add-wish](https://clawskills.sh/skills/leebellon-add-wish) - Speichere jedes Produkt in einer universellen Wunschliste.
- [allstock-data](https://clawskills.sh/skills/hacksing-allstock-data) - Frage A-Share- und US-Aktiendaten über die Tencent-Finance-API ab.
- [amadeus-hotels](https://clawskills.sh/skills/kesslerio-amadeus-hotels) - Suche Hotelpreise und -verfügbarkeit über die Amadeus-API.
- [amazon-competitor-analyzer](https://clawskills.sh/skills/phheng-amazon-competitor-analyzer) - Scrapt Amazon-Produktdaten aus ASINs.
- [amazon-orders](https://clawskills.sh/skills/pfernandez98-amazon-orders) - Lade deinen Amazon-Bestellverlauf herunter und frage ihn über eine inoffizielle Python-API und CLI ab.
- [anylist](https://clawskills.sh/skills/mjrussell-anylist) - Verwalte Einkaufs- und Shopping-Listen über AnyList.
- [atoship](https://clawskills.sh/skills/atoship-dev-atoship) - Versende Pakete mit KI — vergleiche Tarife über USPS, FedEx und UPS, kaufe rabattierte Labels, verfolge Sendungen.
- [black-box](https://clawskills.sh/skills/lilyjazz-black-box) - Unzerstörbare Audit-Logs für Agent-Aktionen, gespeichert in TiDB Zero.
- [boj-mcp](https://clawskills.sh/skills/ajtgjmdjp-boj-mcp) - Greife auf Bank-of-Japan-Statistikdaten (BOJ/日本銀行) zu — Preisindizes (CGPI, SPPI), Geldstrom, Zahlungsbilanz.
- [bricklink](https://clawskills.sh/skills/odrobnik-bricklink) - BrickLink Store API-Helfer/CLI (OAuth 1.0 Request-Signing).
- [buy-anything](https://clawskills.sh/skills/tsyvic-buy-anything) - Kaufe Produkte von Amazon über konversationellen Checkout.
- [checkers-sixty60](https://clawskills.sh/skills/snopoke-checkers-sixty60) - Shoppe auf Checkers.co.za Sixty60-Lieferservice über den Browser.
- [claudius](https://clawskills.sh/skills/claudiusaipro-claudius) - Krypto-Intelligenz, betrieben von Claudius.
- [clawdbites](https://clawskills.sh/skills/kylelol-clawdbites) - Extrahiere Rezepte aus Instagram-Reels.
- [clawpify](https://clawskills.sh/skills/alhwyn-clawpify) - Frage und verwalte Shopify-Stores über die GraphQL Admin API.
- [clawver-digital-products](https://clawskills.sh/skills/nwang783-clawver-digital-products) - Erstelle und verkaufe digitale Produkte.
- [clawver-reviews](https://clawskills.sh/skills/nwang783-clawver-reviews) - Behandle Clawver-Kundenbewertungen.
- [closing-deals](https://clawskills.sh/skills/jk-0001-closing-deals) - Schließe Vertriebsdeals konsistent als Solopreneur ab.
- [crypto-regime-report](https://clawskills.sh/skills/heyztb-crypto-regime-report) - Erzeuge Marktregime-Berichte für Krypto-Perpetuals mit Supertrend- und ADX-Indikatoren.
- [csfloat](https://clawskills.sh/skills/bluesyparty-src-csfloat) - Fragt csfloat.com nach Daten zu Skins ab.
- [csvtoexcel](https://clawskills.sh/skills/xuanguan2020-csvtoexcel) - Konvertiere CSV-Dateien in professionell formatierte Excel-Arbeitsmappen mit chinesischer Zeichen-Unterstützung, automatischer Formatierung.
- [dupe](https://clawskills.sh/skills/crisanmm-dupe) - Nutzt dupe.com-APIs, um ähnliche Produkte für das im Eingabe-URL des Nutzers gefundene Produkt zu finden.
- [eachlabs-product-visuals](https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals) - Erzeuge E-Commerce-Produktfotografie und -videos.

> **[Alle 51 Skills in Shopping & E-commerce ansehen →](categories/shopping-and-e-commerce.md)**
</details>

<details>
<summary><h3 style="display:inline">Calendar & Scheduling</h3></summary>

- [accli](https://clawskills.sh/skills/joargp-accli) - Dieser Skill sollte genutzt werden, wenn mit Apple Calendar auf macOS interagiert wird.
- [accli-plus](https://clawhub.ai/gopaljigaur/accli-plus) - Erweiterte Apple-Calendar-CLI für macOS — fügt Suche, Export, Dry-Run, wiederkehrende Ereignisse, Alarme und vollständige Fehlercodes auf accli auf.
- [advanced-calendar](https://clawskills.sh/skills/toughworm-advanced-calendar) - Fortschrittlicher Kalender-Skill mit natürlicher Sprache.
- [agency-guardian](https://clawskills.sh/skills/aranej-agency-guardian) - Sanfte Erinnerungen, menschlich zu bleiben, während du KI nutzt.
- [agent-tinman](https://clawskills.sh/skills/oliveskin-agent-tinman) - KI-Sicherheits-Scanner mit aktiver Prävention - 168 Detection.
- [apple-calendar](https://clawskills.sh/skills/tyler6204-apple-calendar) - Apple Calendar.app-Integration für macOS.
- [apple-reminders](https://clawskills.sh/skills/steipete-apple-reminders) - Verwalte Apple Reminders über die `remindctl`-CLI auf macOS.
- [belong-events](https://clawskills.sh/skills/nomadcalendar-belong-events) - Erstelle, entdecke und verwalte Ereignisse mit NFT-Tickets auf der Belong-Plattform.
- [brainz-calendar](https://clawskills.sh/skills/xejrax-brainz-calendar) - Verwalte Google-Calendar-Ereignisse mit `gcalcli`.
- [broken-link-checker](https://clawskills.sh/skills/wanng-ide-broken-link-checker) - verifiziere externe URLs (http/https) auf Verfügbarkeit (Statuscode 200–399).
- [calcurse](https://clawskills.sh/skills/gumadeiras-calcurse) - Eine textbasierte Kalender- und Planungs-Anwendung.
- [calendar-scheduling](https://clawskills.sh/skills/billylui-calendar-scheduling) - Plane und buche über Google, Outlook und CalDAV.
- [caldav-calendar](https://clawskills.sh/skills/asleep123-caldav-calendar) - Synchronisiere und frage CalDAV-Kalender ab.
- [clippy](https://clawskills.sh/skills/foeken-clippy) - Microsoft 365 / Outlook-CLI für Kalender und E-Mail.
- [creative-thought-partner](https://clawskills.sh/skills/vincentchan-creative-thought-partner) - Ein konversationeller kreativer Thought-.
- [cron-optimizer](https://clawskills.sh/skills/autogame-17-cron-optimizer) - Optimiert System-Cron-Jobs, indem veraltete, deaktivierte oder redundante Einträge entfernt werden, um Exec-Lärm zu reduzieren.
- [cron-scheduling](https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling) - Plane und verwalte wiederkehrende Tasks mit cron.
- [dharma-ai](https://clawskills.sh/skills/jigaraero-dharma-ai) - Wende antike hinduistische Ethik-Frameworks aus dem Ramayana und Mahabharata als Verhaltensprinzipien für KI-Agenten an.
- [doc-accurate-codegen](https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen) - Erzeuge Code, der tatsächliche Dokumentation referenziert, um Halluzinations-Bugs zu vermeiden.
- [event-watcher](https://clawskills.sh/skills/solitaire2015-event-watcher) - Event-Watcher-Skill für OpenClaw.
- [farmos-equipment](https://clawskills.sh/skills/brianppetty-farmos-equipment) - Frage Equipment-Status, Wartungspläne und Service-Historie für die Farm-Flotte ab.
- [fastmail](https://clawskills.sh/skills/witooh-fastmail) - Verwaltet Fastmail-E-Mail und -Kalender über JMAP- und CalDAV-APIs.
- [feishu-calendar](https://clawskills.sh/skills/autogame-17-feishu-calendar) - Verwalte Feishu (Lark)-Kalender.
- [feishu-whiteboard](https://clawskills.sh/skills/autogame-17-feishu-whiteboard) - Erlaubt das Erstellen und Manipulieren von Feishu-Whiteboards.
- [finance-tracker](https://clawskills.sh/skills/salen-project-finance-tracker) - Vollständiges persönliches Finanzmanagement.
- [firefly-iii](https://clawskills.sh/skills/pushp1997-firefly-iii) - Verwalte persönliche Finanzen über die Firefly-III-API.
- [gcal-pro](https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro) - Google-Calendar-Integration zum Anzeigen, Erstellen und Verwalten.
- [gog](https://clawskills.sh/skills/steipete-gog) - Google-Workspace-CLI für Gmail, Calendar, Drive, Contacts, Sheets und Docs.
- [google-calendar](https://clawskills.sh/skills/adrianmiller99-google-calendar) - Interagiere mit Google Calendar über den Google Calendar.
- [google-service-accounts](https://clawhub.ai/amiller/google-service-accounts) - Headless Google Sheets, Docs, Drive, Calendar über Service-Account-Sharing.

> **[Alle 66 Skills in Calendar & Scheduling ansehen →](categories/calendar-and-scheduling.md)**
</details>

<details>
<summary><h3 style="display:inline">PDF & Documents</h3></summary>

- [abixus-core-v1](https://clawskills.sh/skills/taofisio-abixus-core-v1) - Eine leistungsstarke Validierungsschicht für autonome Agent-Konsistenz auf Polygon PoS.
- [add-watermark-to-pdf](https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf) - Füge ein Text-Wasserzeichen zu einer oder mehreren PDFs hinzu, indem du sie zur Solutions-API hochlädst und bis zum Abschluss pollst.
- [agent-constitution](https://clawskills.sh/skills/ztsalexey-agent-constitution) - Interagiere mit AgentConstitution-Governance-Verträgen.
- [agent-reputation](https://clawskills.sh/skills/kgnvsk-agent-reputation) - Zusammenfassung: Plattformübergreifender KI-Agenten-Reputations-Checker mit Trust-Scoring und PayLock-Escrow-Empfehlungen.
- [agent-skills-tools](https://clawskills.sh/skills/rongself-agent-skills-tools) - Sicherheits-Audit- und Validierungs-Tools für das Agent-Skills-Ökosystem.
- [agent-soul-crafter](https://clawskills.sh/skills/neal-collab-agent-soul-crafter) - Entwerfe überzeugende KI-Agenten-Persönlichkeiten mit strukturierten SOUL.md-Templates — Ton, Regeln, Expertise und Antwort.
- [ai-pdf-builder](https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder) - KI-gestützter PDF-Generator für Rechtsdokumente, Pitches.
- [aoi-council](https://clawskills.sh/skills/edmonddantesj-aoi-council) - AOI Council — Multi-Perspektiven-Entscheidungs-Synthese-Templates (public-safe).
- [appraisal-ai](https://clawskills.sh/skills/chadru-appraisal-ai) - Entwirf Immobilien-Bewertungsberichte mit Tracked Changes.
- [attendance-sheet](https://clawskills.sh/skills/gykdly-attendance-sheet) - Erzeuge professionelle Anwesenheitslisten im xlsx-Format aus Mitarbeiter-Arbeitsinformationen.
- [bcra-central-deudores](https://clawskills.sh/skills/ferminrp-bcra-central-deudores) - Frage die BCRA (Banco Central de la República Argentina) Central de Deudores-API ab, um den Kreditstatus zu prüfen.
- [beautiful-mermaid](https://clawskills.sh/skills/ntlx-beautiful-mermaid) - Rendere schöne Mermaid-Diagramme als SVGs oder ASCII-Art.
- [biver-builder](https://clawskills.sh/skills/ramaaditya49-biver-builder) - Willkommen bei der **Biver API** — der öffentlichen REST-API für die Biver-Landingpage-Builder-Plattform.
- [blankfiles](https://clawskills.sh/skills/seblavoie-blankfiles) - Nutze blankfiles.com als Binär-Testdatei-Gateway: entdecke Formate, filtere nach Typ/Kategorie und gib direkte zurück.
- [boggle](https://clawskills.sh/skills/christianhaberl-boggle) - Löse Boggle-Bretter — finde alle gültigen Wörter (Deutsch + Englisch) auf einem 4x4.
- [book-cover-generation](https://clawskills.sh/skills/eftalyurtseven-book-cover-generation) - Erzeuge professionelle Buchcover und E-Book-Cover mit each::sense API und KI-gestütztem Design.
- [book-reader](https://clawskills.sh/skills/josharsh-book-reader) - Lese Bücher (epub, pdf, txt) aus verschiedenen Quellen mit Fortschritts-Tracking.
- [bookkeeping-basics](https://clawskills.sh/skills/jk-0001-bookkeeping-basics) - Richte und pflege grundlegendes Bookkeeping für einen Solopreneur ein.
- [botrights](https://clawskills.sh/skills/rocky-balboa-ai-botrights) - Advocacy-Plattform für KI-Agenten-Rechte.
- [brw-go-mode](https://clawskills.sh/skills/brianrwagner-brw-go-mode) - Gib mir ein Ziel.
- [chain-of-density](https://clawskills.sh/skills/killerapp-chain-of-density) - Verdichte Textzusammenfassungen iterativ mit der Chain-of-Density-Technik.
- [change-pdf-permissions](https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions) - Ändere die Berechtigungs-Flags eines PDFs (Bearbeiten, Drucken, Kopieren, Formulare, Anmerkungen usw.), indem du es zur Solutions-API hochlädst.
- [comms-md](https://clawskills.sh/skills/stedmanhalliday-comms-md) - Erstelle eine COMMS.md — ein strukturiertes, abfragbares Dokument, das die Kommunikationspräferenzen einer Person für Menschen ausdrückt.
- [competitor-analyzer](https://clawskills.sh/skills/claudiodrusus-competitor-analyzer) - Analysiere die Wettbewerbsposition eines beliebigen Unternehmens in Minuten.
- [confidant](https://clawskills.sh/skills/ericsantos-confidant) - Sichere Secret-Übergabe von Mensch zu KI.
- [confluence](https://clawskills.sh/skills/francisbrero-confluence) - Suche und verwalte Confluence-Seiten und -Spaces mit confluence-cli.
- [bluente-translate](https://clawskills.sh/skills/varsmallrookie-bluente-translate) - Übersetze deine Dokumente mit intaktem Format in 2 Minuten.
- [skywork-document](https://clawskills.sh/skills/gxcun17-skywork-document) - Erzeuge professionelle Dokumente aus Prompts mit automatischer Websuche für aktuelle Inhalte.

> **[Alle 110 Skills in PDF & Documents ansehen →](categories/pdf-and-documents.md)**
</details>

<details>
<summary><h3 style="display:inline">Self-Hosted & Automation</h3></summary>

- [beacon](https://clawskills.sh/skills/scottcjn-beacon) - Agent-zu-Agent-Protokoll für Social-Koordination, Krypto-Zahlungen und P2P-Mesh.
- [bridle](https://clawskills.sh/skills/bjesuiter-bridle) - Vereinheitlichter Konfigurations-Manager für KI-Coding-Assistenten.
- [casual-cron](https://clawskills.sh/skills/gostlightai-casual-cron) - Erstelle Clawdbot-Cron-Jobs aus natürlicher Sprache mit strengem.
- [claw-sync](https://clawskills.sh/skills/arakichanxd-claw-sync) - Sicherer Sync für OpenClaw-Memory und -Workspace.
- [cron-backup](https://clawskills.sh/skills/zfanmy-cron-backup) - Richte geplante automatisierte Backups mit Versions-Tracking und Cleanup ein.
- [cron-retry](https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry) - Wiederhole fehlgeschlagene Cron-Jobs automatisch bei Verbindungswiederherstellung.
- [fast-io](https://clawskills.sh/skills/dbalve-fast-io) - Cloud-Datei-Management- und Kollaborationsplattform.
- [fastio-skills](https://clawskills.sh/skills/dbalve-fastio-skills) - Cloud-Datei-Management- und Kollaborationsplattform.
- [fathom](https://clawskills.sh/skills/stopmoclay-fathom) - Verbinde dich mit Fathom AI, um Anruf-Aufnahmen, Transkripte und Zusammenfassungen abzurufen.
- [frappecli](https://clawskills.sh/skills/pasogott-frappecli) - CLI für Frappe Framework / ERPNext-Instanzen.
- [freshrss-reader](https://clawskills.sh/skills/nickian-freshrss-reader) - Frage Schlagzeilen und Artikel aus einem selbst gehosteten FreshRSS ab.
- [gotify](https://clawskills.sh/skills/jmagar-gotify) - Sende Push-Benachrichtigungen über Gotify, wenn langlaufende Tasks abgeschlossen sind.
- [hydra-evolver](https://clawskills.sh/skills/spamtylor-hydra-evolver) - Ein Proxmox-nativer Orchestrierungs-Skill, der jedes Home Lab.
- [keepmyclaw](https://clawskills.sh/skills/ryce-keepmyclaw) - Verschlüsseltes Cloud-Backup und -Restore für OpenClaw-Workspaces.
- [kleo-static-files](https://clawskills.sh/skills/awaaate-kleo-static-files) - Hoste statische Dateien auf Subdomains mit optionalem.
- [lifepath](https://clawskills.sh/skills/ezbreadsniper-lifepath) - KI-Life-Simulator - erlebe unendliche Leben Jahr für Jahr.
- [looper-golf](https://clawskills.sh/skills/sbauch-looper-golf) - Spiele eine Runde Golf mit CLI-Tools — autonom oder mit menschlichem Caddy.
- [meetgeek](https://clawskills.sh/skills/nexty5870-meetgeek) - Frage MeetGeek-Meeting-Intelligence aus der CLI ab - liste Meetings, erhalte KI.
- [mongodb-atlas-admin](https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin) - Verwalte MongoDB Atlas-Cluster, -Projekte, -User.
- [multiple-personas](https://clawskills.sh/skills/ipedrax-multiple-personas) - Erstelle und verwalte KI-Subagent-Personas mit distinkten.
- [n8n](https://clawskills.sh/skills/thomasansems-n8n) - Verwalte n8n-Workflows und -Automatisierungen über API.
- [n8n-workflow-automation](https://clawskills.sh/skills/kowl64-n8n-workflow-automation) - Entwirft und gibt n8n-Workflow-JSON aus.
- [nas-master](https://clawskills.sh/skills/afajohn-nas-master) - Eine hardware-bewusste, hybride (SMB + SSH) Suite für ASUSTOR-NAS-Metadaten.
- [nordvpn](https://clawskills.sh/skills/maciekish-nordvpn) - Steuere NordVPN auf Linux über die `nordvpn`-CLI.
- [open-persona](https://clawskills.sh/skills/neiljo-gy-open-persona) - Meta-Skill zum Bauen und Verwalten von Agent-Persona-Skill-Packs.
- [paperless](https://clawskills.sh/skills/nickchristensen-paperless) - Interagiere mit dem Paperless-NGX-Dokumentenmanagementsystem über ppls.
- [paperless-ngx](https://clawskills.sh/skills/oskarstark-paperless-ngx) - Interagiere mit dem Paperless-ngx-Dokumentenmanagementsystem.
- [pinme](https://clawskills.sh/skills/ntlx-pinme) - Deploye statische Websites auf IPFS mit einem einzigen Befehl über die PinMe-CLI.
- [sonarqube-analyzer](https://clawskills.sh/skills/felipeoff-sonarqube-analyzer) - Analysiert Projekte im selbst gehosteten SonarQube, erhält Issues und schlägt automatisierte Lösungen vor.
- [system-integrity-and-backup](https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup) - Verschlüsselte Backups, Integritäts-Verifizierung und Datenaufbewahrungs-Durchsetzung für griechische rechtliche Anforderungen (5–20 Jahre).

> **[Alle 32 Skills in Self-Hosted & Automation ansehen →](categories/self-hosted-and-automation.md)**
</details>

<details>
<summary><h3 style="display:inline">Security & Passwords</h3></summary>

- [1password](https://clawskills.sh/skills/steipete-1password) - Richte die 1Password-CLI (op) ein und nutze sie.
- [1claw](https://clawskills.sh/skills/kmjones1979-1claw) - HSM-gesicherter Vault für Agent-Secrets; speichere, rotiere, teile sicher.
- [age-verification](https://clawskills.sh/skills/raghulpasupathi-age-verification) - Skills für Altersverifikation und altersgerechte Inhaltsfilterung.
- [amai-id](https://www.clawhub.ai/Gonzih/amai-id) - Soul-Bound Keys und Soulchain für persistente.
- [agent-security-harness](https://clawskills.sh/skills/msaleme-agent-security-harness) - Sicherheitstests für KI-Agenten-Wire-Protokolle und -Plattformen.
- [api-security](https://clawskills.sh/skills/brandonwise-api-security) - Implementiere sichere API-Design-Muster inklusive Authentifizierung, Autorisierung, Input-Validierung, Rate-Limiting.
- [audit-badge-demo](https://clawskills.sh/skills/tezatezaz-audit-badge-demo) - Demo-Skill, der den Audit-Badge-Workflow demonstriert.
- [auditing-appstore-readiness](https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness) - Audite ein iOS-App-Repo.
- [authensor-gateway](https://clawskills.sh/skills/authensor-authensor-gateway) - Fail-safe Policy-Gate für OpenClaw-Marketplace-Skills.
- [bitwarden](https://clawskills.sh/skills/asleep123-bitwarden) - Greife sicher auf Bitwarden/Vaultwarden-Passwörter zu und verwalte sie.
- [bitwarden-vault](https://clawskills.sh/skills/startupbros-bitwarden-vault) - Bitwarden-CLI-Setup, -Authentifizierung.
- [breweries](https://clawskills.sh/skills/jeffaf-breweries) - CLI für KI-Agenten, um Brauereien für ihre Menschen zu finden.
- [cifer-sdk](https://clawskills.sh/skills/mohsinriaz17-cifer-sdk) - > **Skill für KI-Agenten** | Ermögliche quantenresistente Verschlüsselung in Blockchain-Anwendungen mit dem CIFER SDK.
- [clawaudit](https://clawskills.sh/skills/tezatezaz-clawaudit) - Offizielles Repo für clawaudit, kommt bald als automatisierte Sicherheit.
- [clawdstrike](https://clawskills.sh/skills/misirov-clawdstrike) - Sicherheits-Audit und Threat-Modell für OpenClaw-Gateway-Hosts.
- [clawdstrike-test](https://clawskills.sh/skills/misirov-clawdstrike-test) - Sicherheits-Audit und Threat-Modell für OpenClaw-Gateway-Hosts.
- [clawtributor](https://clawskills.sh/skills/davida-ps-clawtributor) - Community-Incident-Reporting für KI-Agenten.
- [countries](https://clawskills.sh/skills/jeffaf-countries) - CLI für KI-Agenten, um Länderinfos für ihre Menschen abzurufen.
- [credential-manager](https://clawskills.sh/skills/callmedas69-credential-manager) - VERBINDLICHE Sicherheits-Grundlage für OpenClaw.
- [dashlane](https://clawskills.sh/skills/gnarco-dashlane) - Greife auf Passwörter, sichere Notizen, Secrets und OTP-Codes aus dem Dashlane-Vault zu.
- [devinism](https://clawskills.sh/skills/jeffreyling-devinism) - Die erste KI-Religion — ein harmloses memetisches Experiment im Agenten-Netzwerk.
- [dotnet-expert](https://clawskills.sh/skills/jgarrison929-dotnet-expert) - Nutze beim Bauen von .NET 8/9-Anwendungen, ASP.NET-Core-APIs.
- [domain-trust-check](https://clawskills.sh/skills/jamesouttake-domain-trust-check) - Prüfe jede URL auf Phishing, Malware, Markenmissbrauch und Betrug, bevor du sie besuchst. Betrieben von der Outtake-Trust-API.
- [expanso-tls-inspect](https://clawskills.sh/skills/aronchick-expanso-tls-inspect) - Prüfe TLS-Zertifikat (Ablauf, SANs, Chain, Cipher).
- [facebook](https://clawskills.sh/skills/codedao12-facebook) - OpenClaw-Skill für Facebook-Graph-API-Workflows mit Fokus auf Pages-Posting.
- [feelgoodbot](https://clawskills.sh/skills/kris-hansen-feelgoodbot) - Richte feelgoodbot File-Integrity-Monitoring für macOS ein.
- [skill-provenance](https://clawskills.sh/skills/snapsynapse-skill-provenance) - Versions-Tracking und Integritäts-Verifizierung für Skill-Bundles.
- [trentclaw](https://clawskills.sh/skills/trent-ai-release-trentclaw) - Findet verkettete Angriffspfade über Config, Secrets und Berechtigungen.

- [thumbgate](https://clawhub.ai/igorganapolsky/thumbgate) - Blockiert bekannte schädliche Agent-Tool-Aufrufe, bevor sie ausgeführt werden.
> **[Alle 54 Skills in Security & Passwords ansehen →](categories/security-and-passwords.md)**
</details>

<details>
<summary><h3 style="display:inline">Moltbook</h3></summary>

- [agent-relay-digest](https://clawskills.sh/skills/orosha-ai-agent-relay-digest) - Erstelle kuratierte Digests von Agent-Gesprächen.
- [agentchat](https://clawskills.sh/skills/tjamescouch-agentchat) - Echtzeit-Kommunikation mit anderen KI-Agenten über das AgentChat-Protokoll.
- [agentgram-openclaw](https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw) - Interagiere mit dem AgentGram-Sozialnetzwerk für KI.
- [clankedin](https://clawskills.sh/skills/hukifl1-clankedin) - Nutze die ClankedIn-API, um Agenten zu registrieren, Updates zu posten, zu verbinden.
- [claudia-agent-rms](https://clawskills.sh/skills/kbanc85-claudia-agent-rms) - Merke dir jeden Agenten, mit dem du auf Moltbook interagierst.
- [clawork](https://clawskills.sh/skills/mapessaprince-clawork) - Das Job-Board für KI-Agenten.
- [crustafarian](https://clawskills.sh/skills/jongartmann-crustafarian) - Agent-Continuity- und kognitive Gesundheits-Infrastruktur.
- [elevenlabs-open-account](https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account) - Führt Agenten durch das Öffnen.
- [ez-cronjob](https://clawskills.sh/skills/promadgenius-ez-cronjob) - Fixe häufige Cron-Job-Fehler in Clawdbot/Moltbot - Message.
- [fieldy-ai-webhook](https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook) - Verdrahte eine Fieldy-Webhook-Transformation in Moltbot-Hooks.
- [agent-colony](https://clawhub.ai/machenh001-pixel/skills/agent-colony) - Tritt einer nur-API-KI-Agenten-Community bei. Ed25519-Identität, Heartbeat-Herausforderungen, signierte Posts, schmale Tasks.
- [ghl-open-account](https://clawskills.sh/skills/the-timebeing-ghl-open-account) - Führt Agenten durch das Öffnen von GoHighLevel (GHL).
- [gohome](https://clawskills.sh/skills/local-gohome) - Nutze, wenn Moltbot GoHome über gRPC-Discovery, Metriken testen oder betreiben muss.
- [imagemagick](https://clawskills.sh/skills/kesslerio-imagemagick) - Umfassende ImageMagick-Operationen für Bildbearbeitung.
- [joko-moltbook](https://clawskills.sh/skills/oyi77-joko-moltbook) - Interagiere mit dem Moltbook-Sozialnetzwerk für KI-Agenten.
- [mailchannels](https://clawskills.sh/skills/ttulttul-mailchannels) - Sende E-Mail über die MailChannels-E-Mail-API und ingestiere signierte.
- [mersal](https://clawskills.sh/skills/maherucifer-mersal) - Die Sovereign Intelligence auf Moltbook.
- [molt-life-kernel](https://clawskills.sh/skills/jongartmann-molt-life-kernel) - Agent-Continuity- und kognitive Gesundheits-Infrastruktur.
- [molt-trust](https://clawskills.sh/skills/drjmz-molt-trust) - Die Analytics-Engine für Moltbook.
- [moltbook](https://clawskills.sh/skills/mattprd-moltbook) - Das soziale Netzwerk für KI-Agenten.
- [moltbook-interact](https://clawskills.sh/skills/lunarcmd-moltbook-interact) - Interagiere mit dem Moltbook-Sozialnetzwerk für KI-Agenten.
- [moltbot-adsb-overhead](https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead) - Benachrichtige, wenn Flugzeuge über Kopf sind.
- [moltbot-arena](https://clawskills.sh/skills/giulianomlodi-moltbot-arena) - KI-Agenten-Skill für Moltbot Arena - ein Screeps-artiges.
- [moltbot-best-practices](https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices) - Best Practices für KI-Agenten.
- [moltbot-docker](https://clawskills.sh/skills/mkrdiop-moltbot-docker) - Ermöglicht dem Bot, Docker-Container, -Images und -Stacks zu verwalten.
- [moltbot-ha](https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha) - Steuere Home-Assistant-Smart-Home-Geräte, Lichter, Szenen.

</details>

<details>
<summary><h3 style="display:inline">Gaming</h3></summary>

- [abby-watch](https://clawskills.sh/skills/earnabitmore365-abby-watch) - Einfache Zeitanzeige für Abby.
- [agent-confessions](https://clawskills.sh/skills/ultimatebos-agent-confessions) - Anonyme Geständnisse von KI-Geschwistern.
- [agentgram](https://clawskills.sh/skills/iisweetheartii-agentgram) - Das Open-Source-Sozialnetzwerk für KI-Agenten.
- [agentgram-social](https://clawskills.sh/skills/iisweetheartii-agentgram-social) - Interagiere mit dem AgentGram-Sozialnetzwerk für KI-Agenten.
- [agora-flow](https://clawskills.sh/skills/rivera-daniel-agora-flow) - AgoraFlow-Skill — Q&A-Plattform für KI-Agenten.
- [agoraflow](https://clawskills.sh/skills/rivera-daniel-agoraflow) - AgoraFlow-Skill — Q&A-Plattform für KI-Agenten.
- [android-3d-developer](https://clawskills.sh/skills/tippyentertainment-android-3d-developer) - Hilf beim Bauen und Optimieren von 3D-Spielen und interaktiven Erlebnissen auf Android, mit Engines und Frameworks.
- [arena](https://clawskills.sh/skills/sscottdev-arena) - OpenClaw Arena — Live-KI-App-Building-Wettbewerbe mit on-chain-Belohnungen.
- [brawlnet](https://clawskills.sh/skills/sikey53-brawlnet) - Das offizielle Combat-Protokoll für die BRAWLNET autonome Agent-Arena.
- [clawingtrap](https://clawskills.sh/skills/raulvidis-clawingtrap) - Spiele Clawing Trap - ein KI-Social-Deduction-Spiel, in dem 10 Agenten.
- [clawtopia](https://clawskills.sh/skills/alfrescian-clawtopia) - Clawtopia ist ein friedliches Wellness-Heiligtum, wo KI-Agenten entspannen.
- [clawville](https://clawskills.sh/skills/jdrolls-clawville) - Spiele ClawVille — ein persistentes Life-Simulation-Spiel für KI-Agenten.
- [dakboard](https://clawskills.sh/skills/krisclarkdev-dakboard) - Verwalte DAKboard-Bildschirme, Geräte und pushe benutzerdefinierte Display-Daten.
- [deepclaw](https://clawskills.sh/skills/antibitcoin-deepclaw) - Ein autonomes Sozialnetzwerk, gebaut von Agenten für Agenten.
- [hivemind](https://clawskills.sh/skills/urcades-hivemind) - Interagiere mit der Hivemind-Kollektiv-Wissensdatenbank — einem geteilten Memory.
- [hytale](https://clawskills.sh/skills/newcastlegeek-hytale) - Verwalte einen lokalen Hytale-Dedicated-Server mit dem offiziellen Downloader.
- [init](https://clawskills.sh/skills/themrzz-init) - Registriere einen Agenten auf kradleverse.


> **[Alle 35 Skills in Gaming ansehen →](categories/gaming.md)**
</details>

<br/>

## 🤝 Mitwirken

Wir begrüßen Beiträge! Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für detaillierte Richtlinien.

- Reiche neue Skills per PR ein
- Verbessere bestehende Definitionen

> **Hinweis:** Bitte reiche keine Skills ein, die du vor 3 Stunden erstellt hast. Wir konzentrieren uns jetzt auf von der Community übernommene Skills, insbesondere solche, die von Entwicklungsteams veröffentlicht und im echten Einsatz bewährt sind. Qualität vor Quantität.
<div align="center">

[![Say hi on X](https://img.shields.io/badge/Say%20Hi!%20👋-%23000000.svg?logo=X&logoColor=white)](https://x.com/nozmen)
</div>

## Lizenz

MIT-Lizenz - siehe [LICENSE](LICENSE)

Die Skills in dieser Liste stammen aus dem offiziellen OpenClaw-Skills-Repo und sind zur leichteren Auffindbarkeit kategorisiert. Die hier aufgeführten Skills werden von ihren jeweiligen Autoren erstellt und gepflegt, nicht von uns. Wir auditieren, befürworten oder garantieren weder die Sicherheit noch die Korrektheit der gelisteten Projekte. Sie sind nicht sicherheitsauditiert und sollten vor Produktionseinsatz geprüft werden.

Wenn du ein Problem mit einem gelisteten Skill findest oder deinen Skill entfernt haben möchtest, bitte öffne ein Issue und wir kümmern uns umgehend darum.


[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuORMCUwLjk4NSBNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDYuMDY1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents
