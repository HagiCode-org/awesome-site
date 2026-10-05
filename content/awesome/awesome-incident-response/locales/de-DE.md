# Fantastische Incident Response [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> Eine kuratierte liste von tools und ressourcen für die reaktion auf sicherheitsvorfälle, die sicherheitsanalysten und. [DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html) Mannschaften.

DFIR-Teams (Digital Forensics and Incident Response) sind Gruppen von Personen in einer Organisation, die für die Verwaltung der Reaktion auf einen Sicherheitsvorfall verantwortlich sind, einschließlich der Sammlung von Beweisen für den Vorfall, der Behebung seiner Auswirkungen und der Implementierung von Kontrollen, um zu verhindern, dass sich der Vorfall in Zukunft wiederholt.

## Inhalt

- [Gegner-Emulation](#adversary-emulation)
- [All-in-One Tools](#all-in-one-tools)
- [Bücher](#books)
- [Gemeinschaften](#communities)
- [Disk Image Creation Tools](#disk-image-creation-tools)
- [Erhebung von Beweismitteln](#evidence-collection)
- [Incident Management](#incident-management)
- [Wissensdatenbanken](#knowledge-bases)
- [Linux Distributionen](#linux-distributions)
- [Linux Evidence Collection](#linux-evidence-collection)
- [Log-Analyse-Tools](#log-analysis-tools)
- [Speicheranalyse-Tools](#memory-analysis-tools)
- [Memory Imaging Tools](#memory-imaging-tools)
- [OSX Evidence Collection](#osx-evidence-collection)
- [Sonstige Listen](#other-lists)
- [Weitere Instrumente](#other-tools)
- [Spielbücher](#playbooks)
- [Process Dump Tools](#process-dump-tools)
- [Sandboxing/Reversing Tools](#sandboxingreversing-tools)
- [Scanner-Tools](#scanner-tools)
- [Timeline-Tools](#timeline-tools)
- [Videos](#videos)
- [Windows Evidence Collection](#windows-evidence-collection)

## IR Tools Collection

### Gegner-Emulation

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - Windows Batch-Script, das eine Reihe von Tools und Ausgabedateien verwendet, um ein System so aussehen zu lassen, als wäre es kompromittiert.
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - Kleine und hoch tragbare Erkennungstests, die dem MITRE ATT & CK Framework zugeordnet sind.
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - Automatisierte Taktiktechniken und -verfahren. Die manuelle Wiederholung komplexer Sequenzen für Regressionstests, Produktbewertungen und die Generierung von Daten für Forscher.
* [Caldera](https://github.com/mitre/caldera) - Automatisiertes Gegner-Emulationssystem, das in Windows Enterprise-Netzwerken nach Kompromissen gegnerisches Verhalten ausführt. Es generiert Pläne während des Betriebs mit einem Planungssystem und einem vorkonfigurierten Gegnermodell, das auf dem Projekt Adversarial Tactics, Techniques & Common Knowledge (ATT & CKTM) basiert.
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - Modulares, menügesteuertes, plattformübergreifendes Tool zum Erstellen von wiederholbaren, zeitverzögerten, verteilten Sicherheitsereignissen. Erstellen Sie einfach benutzerdefinierte Ereignisketten für Blue Team-Bohrer und Sensor- / Alarmmapping. Red Teams können Täuschungsvorfälle, Ablenkungen und Köder erzeugen, um ihre Operationen zu unterstützen und zu skalieren.
* [Metta](https://github.com/uber-common/metta) - Tool zur Vorbereitung auf Informationssicherheit zur Durchführung einer kontradiktorischen Simulation.
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - Leichtes Dienstprogramm, das verwendet wird, um bösartigen Netzwerkverkehr zu erzeugen und Sicherheitsteams dabei zu helfen, Sicherheitskontrollen und Netzwerksichtbarkeit zu bewerten.
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTA bietet ein Framework von Skripten, die es blauen Teams ermöglichen, ihre Erkennungsfähigkeiten gegen bösartige Handelsschiffe zu testen, die nach MITRE ATT & CK modelliert sind.
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - Virtuelle Maschine für Gegner-Emulation und Bedrohungsjagd.

### All-in-One Tools

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  Das Toolkit wird schnell digitale Beweise aus mehreren Quellen extrahieren, indem es Festplatten, Laufwerksbilder, Speicherdumps, iOS, Blackberry und Android-Backups, UFED, JTAG und Chip-Off-Dumps analysiert.
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - Suite von CIM/WMI-basierten Tools, die es ermöglichen, Incident Response- und Jagdvorgänge über alle Windows-Versionen hinweg durchzuführen.
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - CIRTKit ist nicht nur eine Sammlung von Tools, sondern auch ein Framework, das bei der laufenden Vereinheitlichung von Incident Response- und Forensik-Untersuchungsprozessen hilft.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage sammelt und analysiert Hostdaten, um festzustellen, ob sie kompromittiert sind. Das Scoring-System und die Empfehlungsmaschine ermöglichen es Ihnen, sich schnell auf die wichtigen Artefakte zu konzentrieren. Es kann Daten aus seinem Sammeltool, Disk-Images und anderen Sammlern (wie KAPE) importieren. Es kann auf dem Desktop eines Prüfers oder in einem Servermodell ausgeführt werden. Entwickelt von Sleuth Kit Labs, die auch Autopsie macht.
* [Cynative](https://github.com/cynative/cynative) - Deep Research Agent für Ihr Infra - sandboxed, read-only, umfasst AWS, GCP, Azure, K8s, GitHub und GitLab.
* [Dissect](https://github.com/fox-it/dissect) - Dissect ist ein Framework und ein Toolset für digitale Forensik und Incident Response, mit dem Sie schnell auf forensische Artefakte aus verschiedenen Festplatten- und Dateiformaten zugreifen und analysieren können, die von Fox-IT (Teil der NCC Group) entwickelt wurden.
* [Doorman](https://github.com/mwielgoszewski/doorman) - osquery-Flottenmanager, der die Fernverwaltung von von Knoten abgerufenen osquery-Konfigurationen ermöglicht. Es nutzt die Vorteile der TLS-Konfiguration, des Loggers und der verteilten Lese-/Schreibendpunkte von osquery, um Administratoren Sichtbarkeit über eine Flotte von Geräten mit minimalem Overhead und Aufdringlichkeit zu bieten.
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - Erweiterbare Windows-basierte Anwendung, die Workflow-Automatisierung, Fallmanagement und Sicherheitsreaktionsfunktionen bietet.
* [Flare](https://github.com/fireeye/flare-vm) - Eine vollständig anpassbare, Windows-basierte Sicherheitsverteilung für Malware-Analyse, Incident Response, Penetration Testing.
* [Fleetdm](https://github.com/fleetdm/fleet) - Modernste Host-Monitoring-Plattform für Sicherheitsexperten. Durch das kampferprobte Projekt von Facebook bietet Fleetdm kontinuierliche Updates, Funktionen und schnelle Antworten auf große Fragen.
* [GRR Rapid Response](https://github.com/google/grr) - Incident Response Framework konzentrierte sich auf Remote Live Forensik. Es besteht aus einem Python-Agenten (Client), der auf Zielsystemen installiert ist, und einer Python-Server-Infrastruktur, die den Agenten verwalten und mit ihm sprechen kann. Neben dem enthaltenen Python API-Client, [PowerGRR](https://github.com/swisscom/PowerGRR) stellt eine API-Clientbibliothek in PowerShell bereit, die unter Windows, Linux und macOS für die GRR-Automatisierung und das Skripting arbeitet.
* [IRIS](https://github.com/dfir-iris/iris-web) - IRIS ist eine Web-Plattform für Incident Response Analysten, die es ermöglicht, Untersuchungen auf technischer Ebene auszutauschen.
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - Digital Forensics Investigation Plattform
* [Limacharlie](https://www.limacharlie.io/) - Endpoint-Sicherheitsplattform, die aus einer Sammlung von kleinen Projekten besteht, die alle zusammenarbeiten und Ihnen eine plattformübergreifende Umgebung (Windows, OSX, Linux, Android und iOS) auf niedriger Ebene zur Verwaltung und zum Schieben zusätzlicher Module in den Speicher zur Verfügung stellt, um ihre Funktionalität zu erweitern.
* [Matano](https://github.com/matanolabs/matano)Open-Source-Serverless-Security-Lake-Plattform auf AWS, mit der Sie Petabytes an Sicherheitsdaten in einen Apache Iceberg-Data Lake aufnehmen, speichern und analysieren und Python-Erkennungen in Echtzeit als Code ausführen können.
* [MozDef](https://github.com/mozilla/MozDef) - Automatisiert den Prozess zur Behandlung von Sicherheitsvorfällen und erleichtert die Echtzeitaktivitäten von Incident Handlern.
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - CLI-Programm zur Automatisierung der Einrichtung, Konfiguration und Nutzung von Cybersicherheitslösungen.
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - Anwendung für asynchrone forensische Datenpräsentation mit ElasticSearch als Backend. Es wurde entwickelt, um Redline-Kollektionen aufzunehmen.
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - Ein weiteres beliebtes verteiltes Open-Source-Computerforensik-Framework. Dieses Framework wurde auf der Linux-Plattform aufgebaut und verwendet die postgreSQL-Datenbank zum Speichern von Daten.
* [osquery](https://osquery.io/) - Stellen Sie einfach Fragen zu Ihrer Linux- und macOS-Infrastruktur mit einer SQL-ähnlichen Abfragesprache. *Incident-Response Pack* hilft Ihnen, Verstöße zu erkennen und darauf zu reagieren.
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - Bietet Host-Untersuchungsfunktionen für Benutzer, um Anzeichen von bösartigen Aktivitäten durch Speicher- und Dateianalyse und die Entwicklung eines Bedrohungsbewertungsprofils zu finden.
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - Eine leistungsstarke und benutzerfreundliche Browsererweiterung, die Untersuchungen für Sicherheitsexperten optimiert.
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - Unix- und Windows-basiertes Tool, das bei der forensischen Analyse von Computern hilft. Es kommt mit verschiedenen Tools, die in der digitalen Forensik helfen. Diese Tools helfen bei der Analyse von Festplattenbildern, der Durchführung einer eingehenden Analyse von Dateisystemen und verschiedenen anderen Dingen.
* [TheHive](https://thehive-project.org/) - Skalierbare 3-in-1-Open-Source- und kostenlose Lösung, die das Leben für SOCs, CSIRTs, CERTs und alle Informationssicherheitsexperten, die sich mit Sicherheitsvorfällen befassen, die schnell untersucht und bearbeitet werden müssen, erleichtert.
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - Plattformübergreifendes Incident Response Toolkit mit 28 vorgefertigten Anwendungsfällen in einer einzigen Null-Installations-Binärdatei. Sammelt Speicher, Festplatte, Netzwerk und Cloud-Artefakte mit automatisierter Timeline-Generierung.
* [Velociraptor](https://github.com/Velocidex/velociraptor) - Endpunkt-Sichtbarkeits- und -Erfassungsinstrument
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - Forensik-Tool für Festplattenklonen und Bildgebung. Es kann verwendet werden, um gelöschte Dateien und Festplattenanalyse zu finden.
* [Zentral](https://github.com/zentralopensource/zentral) - Kombiniert die leistungsstarken Endpoint-Inventarfunktionen von osquery mit einem flexiblen Benachrichtigungs- und Aktionsrahmen. Dies ermöglicht es, Änderungen an OS X- und Linux-Clients zu identifizieren und darauf zu reagieren.

### Bücher

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - Steve Ansons Buch über Incident Response.
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - Erkennung von Malware und Bedrohungen in Windows, Linux und Mac Memory.
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - von Jeff Bollinger, Brandon Enright und Matthew Valites.
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - von Gerard Johansen.
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - von Scott J. Roberts.
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - Der definitive Leitfaden für Incident Response.
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - Eine großartige Anleitung zum Erstellen einer Incident Response-Strategie für Ransomware-Angriffe. von Oleg Skulkin.
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - Tolle Referenz, um einen Incident Response Plan zu erstellen, der auch auf Threat Intelligence basiert. von Roberto Martinez.
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - Von Scott J. Roberts, Rebekah Brown.
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - Gute Referenz für Incident Responder.
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - Der definitive Leitfaden zur Praxis der Gedächtnisforensik. Von Svetlana Ostrovskaya und Oleg Skulkin.
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - Richard Bejtlichs Buch über IR.

### Gemeinschaften

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - Gemeinschaft von 8.000 + Berufstätigen aus Strafverfolgung, Privatsektor und Forensic Vendors. Darüber hinaus viele Studenten und Hobbyisten! Führung [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/).
* [Slack DFIR channel](https://dfircommunity.slack.com) - Slack DFIR Kommunikationskanal - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community).

### Disk Image Creation Tools

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - Forensik-Tool, dessen Hauptzweck es ist, wiederherstellbare Daten von einer Festplatte jeglicher Art in der Vorschau anzuzeigen. FTK Imager kann auch Live-Speicher und Paging-Datei auf 32-Bit- und 64-Bit-Systemen erwerben.
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - Bitscout von Vitaly Kamluk hilft Ihnen, Ihr voll vertrauenswürdiges anpassbares LiveCD / LiveUSB-Bild für die entfernte digitale Forensik (oder vielleicht jede andere Aufgabe Ihrer Wahl) zu erstellen. Es soll transparent und vom Eigentümer des Systems überwacht werden können, forensisch solide, anpassbar und kompakt.
* [GetData Forensic Imager](http://www.forensicimager.com/) - Windows-basiertes Programm, das ein forensisches Bild in einem der folgenden gängigen forensischen Dateiformate erfasst, konvertiert oder verifiziert.
* [Guymager](http://guymager.sourceforge.net) - Kostenloser forensischer Imager für den Medienerwerb unter Linux.
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - Mit ACQUIRE von Magnet Forensics können verschiedene Arten von Festplattenaufnahmen unter Windows, Linux und OS X sowie auf mobilen Betriebssystemen durchgeführt werden.

### Erhebung von Beweismitteln

* [Acquire](https://github.com/fox-it/acquire) - Acquire ist ein Tool zum schnellen Sammeln forensischer Artefakte aus Festplattenbildern oder einem Live-System in einem leichten Container. Dies macht Acquire zu einem hervorragenden Werkzeug, um unter anderem den Prozess der digitalen forensischen Triage zu beschleunigen. Es verwendet [Dissect](https://github.com/fox-it/dissect) um diese Informationen von der Rohdiskette zu sammeln, wenn möglich.
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - Das Projekt artifactcollector stellt eine Software zur Verfügung, die forensische Artefakte auf Systemen sammelt.
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - Computerforensik-Tool, das ein Festplattenabbild, eine Datei oder ein Verzeichnis von Dateien scannt und nützliche Informationen extrahiert, ohne das Dateisystem oder die Dateisystemstrukturen zu analysieren. Da die Dateisystemstruktur ignoriert wird, zeichnet sich das Programm in Bezug auf Geschwindigkeit und Gründlichkeit aus.
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - Streamline Liste von Parsern, um eine forensische Bilddatei schnell zu analysieren`dd`, E01, `.vmdk`, usw.) und Ausgabe von neun Berichten.
* [CyLR](https://github.com/orlikoski/CyLR) - Das CyLR-Tool sammelt forensische Artefakte von Hosts mit NTFS-Dateisystemen schnell, sicher und minimiert die Auswirkungen auf den Host.
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - Digital Forensics Artefakt Repository
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - Windows Batch-Skript und ein Unix Bash-Skript zum umfassenden Sammeln von forensischen Hostdaten während der Reaktion auf Vorfälle.
* [Live Response Collection](https://www.brimorlabs.com/tools/) - Automatisiertes Tool, das flüchtige Daten von Windows, OSX und \*nix-basierte Betriebssysteme.
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - Befehlszeilendienstprogramm (das mit oder ohne Amazon EC2-Instanzen funktioniert), um die Fernspeichererfassung zu parallelisieren.
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - Erwerben, Triage und Untersuchung von entfernten Beweismitteln über tragbaren iSCSI-Readonly-Zugriff
* [UAC](https://github.com/tclahr/uac) - UAC (Unix-like Artifacts Collector) ist ein Live Response-Skript für Incident Response, das native Binärdateien und Tools verwendet, um die Sammlung von AIX-, Android-, ESXi-, FreeBSD-, Linux-, macOS-, NetBSD-, NetScaler-, OpenBSD- und Solaris-Systemartefakten zu automatisieren.

### Incident Management

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - Ein kostenloses SOAR-System, das hilft, Alarmbehandlungs- und Incident Response-Prozesse zu automatisieren.
* [CyberCPR](https://www.cybercpr.com) - Community- und kommerzielles Incident-Management-Tool mit integriertem Need-to-Know zur Unterstützung der DSGVO-Compliance bei der Bearbeitung sensibler Vorfälle.
* [Cyphon](https://medevel.com/cyphon/) - Cyphon beseitigt die Kopfschmerzen des Incident Managements, indem es eine Vielzahl von verwandten Aufgaben über eine einzige Plattform rationalisiert. Es empfängt, verarbeitet und triagiert Ereignisse, um eine umfassende Lösung für Ihren analytischen Workflow bereitzustellen. — Aggregation von Daten, Bündelung und Priorisierung von Warnungen und Befähigung von Analysten, Vorfälle zu untersuchen und zu dokumentieren.
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - Paloalto Security Orchestrierungs-, Automatisierungs- und Reaktionsplattform mit vollständigem Incident Lifecycle Management und vielen Integrationen zur Verbesserung der Automatisierung.
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - Ein Framework zur Orchestrierung forensischer Sammlung, Verarbeitung und Datenexport.
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - Incident Response-Tracking-Anwendung, die einen oder mehrere Vorfälle über Fälle und Aufgaben mit vielen betroffenen Systemen und Artefakten behandelt.
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - Cybersecurity Incident Management Plattform, die mit Agilität und Geschwindigkeit konzipiert wurde. Es ermöglicht die einfache Erstellung, Nachverfolgung und Meldung von Cybersicherheitsvorfällen und ist für CSIRTs, CERTs und SOCs gleichermaßen nützlich.
* [RTIR](https://www.bestpractical.com/rtir/) - Request Tracker for Incident Response (RTIR) ist das erste Open-Source-Incident-Handling-System für Computersicherheitsteams. Wir haben mit über einem Dutzend CERT- und CSIRT-Teams auf der ganzen Welt zusammengearbeitet, um Sie bei der Bewältigung der ständig wachsenden Anzahl von Vorfallsberichten zu unterstützen. RTIR baut auf allen Funktionen von Request Tracker auf.
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - Incident Response Collaboration und Knowledge Capture Tool konzentriert sich auf Flexibilität und Benutzerfreundlichkeit. Unser Ziel ist es, einen Mehrwert für den Incident Response Prozess zu schaffen, ohne den Benutzer zu belasten.
* [Shuffle](https://github.com/frikky/Shuffle) - Eine universelle Sicherheitsautomatisierungsplattform, die sich auf die Zugänglichkeit konzentriert.
* [threat_note](https://github.com/defpoint/threat_note) - Leichtes Untersuchungsheft, das Sicherheitsforschern die Möglichkeit gibt, Indikatoren im Zusammenhang mit ihrer Forschung zu registrieren und abzurufen.
* [Zenduty](https://www.zenduty.com) - Zenduty ist eine neuartige Incident-Management-Plattform, die End-to-End-Incident-Alarming, On-Call-Management und Response-Orchestrierung bietet und Teams mehr Kontrolle und Automatisierung über den Incident-Management-Lebenszyklus bietet.

### Wissensdatenbanken

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - Digital Forensics Artifact Knowledge Base
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - Windows Events Attack Samples
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - Windows Registry Knowledge Base

### Linux Distributionen

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - VMware-basierte Appliance für die digitale Untersuchung und Erfassung verwendet und ist vollständig aus Public-Domain-Software gebaut. Zu den in ADIA enthaltenen Tools gehören Autopsy, das Sleuth Kit, das Digital Forensics Framework, log2timeline, Xplico und Wireshark. Der größte Teil der Systemwartung verwendet Webmin. Es ist für kleine bis mittlere digitale Untersuchungen und Akquisitionen konzipiert. Die Appliance läuft unter Linux, Windows und Mac OS. Sowohl i386 (32-Bit) als auch x86_64 (64-Bit) Versionen sind verfügbar.
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - Enthält zahlreiche Werkzeuge, die Ermittlern während ihrer Analyse helfen, einschließlich der forensischen Beweiserhebung.
* [CCF-VM](https://github.com/rough007/CCF-VM) - CyLR CDQR Forensics Virtual Machine (CCF-VM): Eine All-in-One-Lösung zum Parsen von gesammelten Daten, die mit integrierten gemeinsamen Suchanfragen leicht durchsuchbar ist, ermöglicht die gleichzeitige Suche nach einzelnen und mehreren Hosts.
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - Linux-Distribution, die eine umfangreiche Sammlung von Best-of-Breed-Open-Source-Netzwerksicherheitsanwendungen enthält, die für den Netzwerksicherheitsexperten nützlich sind.
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - Sicherheitsorientierte Linux-Distribution mit über 140 vorinstallierten forensischen und offensiven Sicherheitstools, benutzerdefiniertem gehärtetem Kernel und integrierten Incident Response Workflows.
* [PALADIN](https://sumuri.com/software/paladin/) - Modifizierte Linux-Distribution, um verschiedene forensische Aufgaben auf forensisch fundierte Weise auszuführen. Es kommt mit vielen Open-Source-Forensik-Tools enthalten.
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - Spezielle Linux-Distribution zur Überwachung der Netzwerksicherheit mit fortschrittlichen Analysetools.
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - Demonstriert, dass erweiterte Incident-Response-Fähigkeiten und Deep-Dive-Digital-Forensik-Techniken für Intrusionen mit modernsten Open-Source-Tools erreicht werden können, die frei verfügbar sind und häufig aktualisiert werden.

### Linux Evidence Collection

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - FastIR für Linux sammelt verschiedene Artefakte auf Live-Linux und zeichnet die Ergebnisse in CSV-Dateien auf.
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - Schnelle Speichererfassung Open-Source-Tool für Linux in Rust geschrieben. Generieren Sie Vollspeicher-Crash-Dumps von Linux-Maschinen.

### Log-Analyse-Tools

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - AppCompatProcessor wurde entwickelt, um zusätzlichen Wert aus unternehmensweiten AppCompat / AmCache-Daten zu extrahieren, die über die klassischen Stapel- und Grepping-Techniken hinausgehen.
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT-Hunter ist ein Threat Hunting Tool für Windows Event Logs.
* [Chainsaw](https://github.com/countercept/chainsaw) - Chainsaw bietet eine leistungsstarke "First-Response" -Funktion, um Bedrohungen in Windows-Ereignisprotokollen schnell zu identifizieren.
* [Event Log Explorer](https://eventlogxp.com/) - Tool entwickelt, um Protokolldateien und andere Daten schnell zu analysieren.
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - Anzeigen, Analysieren und Überwachen von Ereignissen, die in Microsoft Windows-Ereignisprotokollen mit diesem GUI-Tool aufgezeichnet wurden.
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - Hayabusa ist ein Windows Event Log Fast Forensics Timeline Generator und Threat Hunting Tool, das von der Yamato Security Group in Japan entwickelt wurde.
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - Threat Intelligence Fusion und Analyse Tool, das Bedrohungsdatenfeeds mit SIEM-Lösungen integriert. Benutzer können Threat Intelligence sofort für Sicherheitsüberwachungs- und Incident Report (IR)-Aktivitäten im Workflow ihrer bestehenden Sicherheitsoperationen nutzen.
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - Führen Sie SQL-Abfragen gegen strukturierte Protokolldaten aus: Serverprotokolle, Windows-Events, Dateisystem, Active Directory, log4net-Protokolle, Komma/Tab-getrennter Text, XML- oder JSON-Dateien. Bietet auch eine GUI für Microsoft LogParser 2.2 mit leistungsstarken UI-Elementen: Syntax-Editor, Datenraster, Diagramm, Pivot-Tabelle, Dashboard, Abfragemanager und mehr.
* [Lorg](https://github.com/jensvoid/lorg) - Tool für fortschrittliche HTTPD-Logfile-Sicherheitsanalyse und Forensik.
* [Logdissect](https://github.com/dogoncouch/logdissect) - CLI-Dienstprogramm und Python-API zur Analyse von Protokolldateien und anderen Daten.
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - Hochgeschwindigkeits-Loganalyse- und Forensik-Tool mit Multiformat-Parsing, Musterabgleich, Zeitlinienrekonstruktion und Anomalieerkennung für die Reaktion auf Vorfälle.
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - Tool zur Untersuchung bösartiger Windows-Anmeldung durch Visualisierung und Analyse des Windows-Ereignisprotokolls.
* [Sigma](https://github.com/SigmaHQ/sigma) - Generisches Signaturformat für SIEM-Systeme, das bereits ein umfangreiches Regelwerk enthält.
* [StreamAlert](https://github.com/airbnb/streamalert) - Serverloses Echtzeit-Protokolldatenanalyse-Framework, das benutzerdefinierte Datenquellen aufnehmen und Warnungen mit benutzerdefinierter Logik auslösen kann.
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearch macht die Windows-Ereignisprotokollanalyse effektiver und weniger zeitaufwendig durch die Aggregation von Ereignisprotokollen.
* [WELA](https://github.com/Yamato-Security/WELA) - Windows Event Log Analyzer zielt darauf ab, das Schweizer Armeemesser für Windows-Ereignisprotokolle zu sein.
* [Zircolite](https://github.com/wagga40/Zircolite) - Ein eigenständiges und schnelles SIGMA-basiertes Erkennungstool für EVTX oder JSON.

### Speicheranalyse-Tools

* [AVML](https://github.com/microsoft/avml) - Ein tragbares flüchtiges Speicherakquisitionswerkzeug für Linux.
* [Evolve](https://github.com/JamesHabben/evolve) - Web-Schnittstelle für das Volatility Memory Forensics Framework.
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - Erweiterte Speicheranalyse für Windows x64 mit geschachtelter Hypervisor-Unterstützung.
* [LiME](https://github.com/504ensicsLabs/LiME) - Loadable Kernel Module (LKM), das den Erwerb von flüchtigem Speicher von Linux- und Linux-basierten Geräten ermöglicht, früher DMD genannt.
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScan ist ein Volatility-Plugin, das Konfigurationsdaten bekannter Malware extrahiert. Volatilität ist ein Open-Source-Speicherforensik-Framework für Incident Response und Malware-Analyse. Dieses Tool sucht nach Malware in Speicherbildern und Dumps Konfigurationsdaten. Darüber hinaus hat dieses Tool eine Funktion, um Strings aufzulisten, auf die sich bösartiger Code bezieht.
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - Kostenlose forensische Speichersoftware, die Vorfallhelfern hilft, Böses im Live-Gedächtnis zu finden. Memoryze kann Speicherbilder erfassen und / oder analysieren, und auf Live-Systemen kann die Paging-Datei in seine Analyse einbezogen werden.
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Memoryze für Mac ist Memoryze, aber dann für Macs. Eine geringere Anzahl von Features jedoch.
* [MemProcFS] (https://github.com/ufrisk/MemProcFS) - MemProcFS ist eine einfache und bequeme Möglichkeit, physischen Speicher als Dateien in einem virtuellen Dateisystem anzuzeigen.
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochi ist ein Open-Source-Framework für die kollaborative forensische Memory-Dump-Analyse.
* [Rekall](http://www.rekall-forensic.com/) - Open-Source-Tool (und Bibliothek) für die Extraktion von digitalen Artefakten aus flüchtigen Speicher (RAM) Proben.
* [Volatility](https://github.com/volatilityfoundation/volatility) - Advanced Memory Forensics Framework.
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - Das volatile Memory Extraction Framework (Nachfolger der Volatilität)
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - Das Automatisierungstool für Forscher schneidet alle Rätselraten und manuellen Aufgaben aus der binären Extraktionsphase heraus oder hilft dem Forscher bei den ersten Schritten einer Gedächtnisanalyseuntersuchung.
* [VolDiff](https://github.com/aim4r/VolDiff) - Malware Memory Footprint Analyse basierend auf Volatilität.
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - Speicherforensik und Reverse-Engineering-Tool für die Analyse von flüchtigen Speicher bietet die Möglichkeit, den Windows-Kernel, Treiber, DLLs und virtuellen und physischen Speicher zu analysieren.

### Memory Imaging Tools

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - Winziges kostenloses forensisches Tool, um den gesamten Inhalt des flüchtigen Speichers des Computers zuverlässig zu extrahieren – auch wenn sie durch ein aktives Anti-Debugging- oder Anti-Dumping-System geschützt sind.
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - Script zum Dumping von Linux-Speicher und zum Erstellen von Volatilitätsprofilen.
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Schnelles Speichererfassungstool für Windows (x86, x64, ARM64). Generieren Sie Vollspeicher-Crash-Dumps von Windows-Maschinen.
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - Kostenloses Imaging-Tool, das entwickelt wurde, um das physische Gedächtnis des Computers eines Verdächtigen zu erfassen. Unterstützt aktuelle Versionen von Windows.
* [OSForensics](http://www.osforensics.com/) - Tool zum Erfassen von Live-Speicher auf 32-Bit- und 64-Bit-Systemen. Ein Dump des Speicherplatzes eines einzelnen Prozesses oder ein physischer Speicherdump kann durchgeführt werden.

### OSX Evidence Collection

* [Knockknock](https://objective-see.com/products/knockknock.html) - Zeigt persistente Elemente (Skripte, Befehle, Binärdateien usw.) an, die so eingestellt sind, dass sie automatisch unter OSX ausgeführt werden.
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - Plugin-basiertes Forensik-Framework für schnelle Mac-Triage, das auf Live-Maschinen, Disk-Images oder einzelnen Artefaktdateien funktioniert.
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - Kostenloses Mac OS X Computer Forensik Tool.
* [OSX Collector](https://github.com/yelp/osxcollector) - OSX Auditor Ableger für Live Response.
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - Ein Tool zum Anzeigen der Ereignisse im Apple Endpoint Security Framework (ESF) in Echtzeit.

### Sonstige Listen

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - Sammlung von Ereignis-ID-Ressourcen, die für Digital Forensics und Incident Response nützlich sind.
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - Eine kuratierte Liste von fantastischen forensischen Analyse-Tools und Ressourcen.
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - Werkzeugsammlung
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - Eine aktualisierte Liste der forensischen Tools, erstellt von Eric Zimmerman, einem Ausbilder des SANS-Instituts.
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - Sammelliste öffentlicher JSON-APIs zur Verwendung in der Sicherheit.

### Weitere Instrumente

* [Cortex](https://thehive-project.org) - Cortex ermöglicht es Ihnen, Observables wie IP- und E-Mail-Adressen, URLs, Domainnamen, Dateien oder Hashes einzeln oder im Massenmodus über eine Weboberfläche zu analysieren. Analysten können diese Operationen auch mit ihrer REST-API automatisieren.
* [Crits](https://crits.github.io/) - Webbasiertes Tool, das eine Analyse-Engine mit einer Cyber-Bedrohungsdatenbank kombiniert.
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - Das von Netflix entwickelte DFIR-Tool ermöglicht es einem Ermittler, während eines Vorfalls schnell einen Kompromiss zwischen Cloud-Instanzen (Linux-Instanzen auf AWS, derzeit) einzugehen und diese Instanzen für Folgeaktionen effizient zu triagieren, indem Unterschiede gegenüber einer Baseline angezeigt werden.
* [domfind](https://github.com/diogo-fernan/domfind) - Python DNS-Crawler zum Finden identischer Domainnamen unter verschiedenen TLDs.
* [Fileintel](https://github.com/keithjjones/fileintel) - Pull Intelligence per File Hash.
* [HELK](https://github.com/Cyb3rWard0g/HELK) - Threat Hunting Plattform.
* [Hindsight](https://github.com/obsidianforensics/hindsight) - Internetgeschichtliche Forensik für Google Chrome/Chromium.
* [Hostintel](https://github.com/keithjjones/hostintel) - Pull Intelligence pro Host.
* [IPASIS](https://ipasis.com/) - Echtzeit-IP-Reputation und E-Mail-Validierung API zur Untersuchung verdächtiger Interaktionen. Gibt einen Interaction Trust Score (0-100) zurück, der VPN / Proxy / Tor-Erkennung mit E-Mail-Risikobewertung in einem einzigen API-Aufruf kombiniert.
* [imagemounter](https://github.com/ralphje/imagemounter) - Befehlszeilendienstprogramm und Python-Paket, um das (Un-)Montieren von forensischen Festplattenbildern zu erleichtern.
* [Kansa](https://github.com/davehull/Kansa/) - Modulares Incident Response Framework in PowerShell.
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - MFT-Verzeichnisbaumrekonstruktion & Datensatzinformationen.
* [Munin](https://github.com/Neo23x0/munin) - Online-Hash-Checker für VirusTotal und andere Dienste.
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponse ist ein PowerShell-Modul, das sich auf gezielte Eindämmung und Behebung während der Reaktion auf Sicherheitsvorfälle konzentriert.
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - Sehr einfache multi-threaded-viele-regeln zu vielen dateien yara scannen python-skript für malware-zoos und ir.
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - Ermöglicht das Scannen von Festplatten und Speicher nach IOCs mit YARA unter Windows, Linux und OS X.
* [RaQet](https://raqet.github.io/) - Unkonventionelles Fernakquisitions- und Triaging-Tool, das das Triage einer Festplatte eines entfernten Computers (Clients) ermöglicht, der mit einem absichtlich gebauten forensischen Betriebssystem neu gestartet wird.
* [Raccine](https://github.com/Neo23x0/Raccine) - Ein einfacher Ransomware-Schutz
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - Sammeln Sie forensische Daten über MySQL, wenn Probleme auftreten.
* [Scout2](https://nccgroup.github.io/Scout2/) - Sicherheitstool, mit dem Amazon Web Services-Administratoren die Sicherheitslage ihrer Umgebung bewerten können.
* [Stenographer](https://github.com/google/stenographer) - Packet-Capture-Lösung, die darauf abzielt, alle Pakete schnell auf die Festplatte zu spulen und dann einfachen, schnellen Zugriff auf Teilmengen dieser Pakete zu bieten. Es speichert so viel Geschichte wie möglich, verwaltet die Festplattennutzung und löscht, wenn Festplattenlimits getroffen werden. Es ist ideal, um den Datenverkehr kurz vor und während eines Vorfalls zu erfassen, ohne dass der gesamte Netzwerkverkehr explizit gespeichert werden muss.
* [sqhunter](https://github.com/0x4d31/sqhunter) - Threat hunter basierend auf osquery und salt open (saltstack), die ad-hoc oder verteilte abfragen ausgeben können, ohne dass osquery es tls plugin benötigt. Mit sqhunter können Sie offene Netzwerksockets abfragen und diese mit Threat Intelligence-Quellen vergleichen.
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - Sysmon Konfigurationsdateivorlage mit standardmäßig hochwertiger Ereignisverfolgung
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - Ein Repository von sysmon Konfigurationsmodulen
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - Erweiterte Traceroute zur Unterstützung der Aktivitäten von CSIRT- (oder CERT-) Betreibern. Normalerweise muss das CSIRT-Team Vorfälle basierend auf empfangenen IP-Adressen behandeln. Erstellt von Computer Emergency Response Center Luxemburg.
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - Windows-Dienstprogramm (schlecht gepflegt oder nicht mehr gepflegt), um Virusproben an AV-Anbieter zu senden.

### Spielbücher

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR Runbook Samples sollen für jedes Unternehmen, das sie verwendet, angepasst werden. Die drei Samples sind: "DoS- oder DDoS-Angriff", "Credential Leak" und "unbeabsichtigter Zugriff auf einen Amazon S3-Bucket".
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - Counteractive PLaybooks Sammlung.
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - Eine Sammlung von Cyber Incident Response Playbook Battle Cards
* [IRM](https://github.com/certsocietegenerale/IRM) - Incident Response Methodologies von CERT Societe Generale.
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - Dokumente, die Teile des PagerDuty Incident Response Prozesses beschreiben. Es bietet Informationen nicht nur zur Vorbereitung auf einen Vorfall, sondern auch, was während und nach dem Vorfall zu tun ist. Quelle ist verfügbar auf [GitHub](https://github.com/PagerDuty/incident-response-docs).
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - Phantom Community Playbooks für Splunk, aber auch für andere Zwecke anpassbar.
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - Playbook zur Unterstützung der Entwicklung von Techniken und Hypothesen für Jagdkampagnen.

### Process Dump Tools

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - Dumps jedes laufende Win32 verarbeitet Speicherbild im laufenden Betrieb.
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - Tool, mit dem Sie den Speicherinhalt eines Prozesses in eine Datei dumpen können, ohne den Prozess zu stoppen.

### Sandboxing/Reversing Tools

* [Any Run](https://app.any.run/) - Interaktiver Online-Malware-Analysedienst für die dynamische und statische Erforschung der meisten Arten von Bedrohungen in jeder Umgebung.
* [CAPA](https://github.com/mandiant/capa) - erkennt Fähigkeiten in ausführbaren Dateien. Sie führen es gegen eine PE-, ELF-, .NET-Modul- oder Shellcode-Datei aus und sagen Ihnen, was das Programm Ihrer Meinung nach leisten kann.
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - Malware Konfiguration und Payload Extraktion.
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - Open Source Hochkonfigurierbares Sandboxing-Tool.
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - Stark modifiziert Cuckoo Gabel von der Gemeinschaft entwickelt.
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - Python-Bibliothek zur Steuerung einer Cuckoo-modifizierten Sandbox.
* [Cutter](https://github.com/rizinorg/cutter) - Freie und Open Source Reverse Engineering Plattform powered by rizin.
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - Software Reverse Engineering Framework.
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - Kostenlose leistungsstarke Online-Sandbox von CrowdStrike.
* [Intezer](https://analyze.intezer.com/#/) - Intezer Analyze taucht in Windows-Binärdateien ein, um Mikrocodeähnlichkeiten mit bekannten Bedrohungen zu erkennen, um genaue und dennoch leicht verständliche Ergebnisse zu liefern.
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - Joe Sandbox erkennt und analysiert potenzielle schädliche Dateien und URLs unter Windows, Android, Mac OS, Linux und iOS für verdächtige Aktivitäten und bietet umfassende und detaillierte Analyseberichte.
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - Statisches Analyse-Framework, das den Prozess der Extraktion von Schlüsselmerkmalen aus einer Reihe verschiedener Dateiformate automatisiert.
* [Metadefender Cloud](https://www.metadefender.com) - Kostenlose Threat-Intelligence-Plattform für Multiscanning, Datenentsorgung und Schwachstellenbewertung von Dateien.
* [Radare2](https://github.com/radareorg/radare2) - Reverse Engineering Framework und Kommandozeilen-Toolset.
* [Reverse.IT](https://www.reverse.it/) - Alternative Domäne für das von CrowdStrike bereitgestellte Hybrid-Analyse-Tool.
* [Rizin](https://github.com/rizinorg/rizin) - UNIX-ähnliches Reverse Engineering Framework und Kommandozeilen-Toolset
* [StringSifter](https://github.com/fireeye/stringsifter) - Ein maschinelles Lernwerkzeug, das Strings basierend auf ihrer Relevanz für die Malware-Analyse bewertet.
* [Threat.Zone](https://app.threat.zone) - Cloud-basierte Bedrohungsanalyseplattform, die Sandbox, CDR und interaktive Analyse für Forscher umfasst.
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrie verwendet Laufzeitverhalten und Hunderte von Funktionen aus einer Datei, um Analysen durchzuführen.
* [Viper](https://github.com/viper-framework/viper) - Python basiertes binäres Analyse- und Management-Framework, das gut mit Cuckoo und YARA funktioniert.
* [Virustotal](https://www.virustotal.com) - Kostenloser Online-Service, der Dateien und URLs analysiert, die die Identifizierung von Viren, Würmern, Trojanern und anderen Arten von bösartigen Inhalten ermöglichen, die von Antiviren-Engines und Website-Scannern erkannt werden.
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - Open-Source-Visualisierungsbibliothek und Kommandozeilen-Tools für Protokolle (Cuckoo, Procmon, weitere folgen).
* [Yomi](https://yomi.yoroi.company) - Kostenlose MultiSandbox verwaltet und gehostet von Yoroi.

### Scanner-Tools

* [Fenrir](https://github.com/Neo23x0/Fenrir) - Einfacher IOC-Scanner. Es ermöglicht das Scannen eines beliebigen Linux/Unix/OSX-Systems nach IOCs in plain bash. Erstellt von den Schöpfern von THOR und LOKI.
* [LOKI](https://github.com/Neo23x0/Loki) - Kostenloser IR-Scanner zum Scannen von Endpunkten mit Yara-Regeln und anderen Indikatoren (IOCs).
* [Spyre](https://github.com/spyre-project/spyre) - Einfacher YARA-basierter IOC-Scanner in Go geschrieben

### Timeline-Tools

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - Plattform entwickelt, um einfach eine detaillierte Zeitleiste eines Vorfalls zu erstellen.
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - Kostenloses Tool verfügbar von Fire / Mandiant, das Log / Text-Datei darstellt, die Bereiche in der Grafik hervorheben kann, die einem Schlüsselwort oder einer Phrase entsprechen. Gut für die Zeit, die eine Infektion auskleidet und was nach dem Kompromiss getan wurde.
* [Morgue](https://github.com/etsy/morgue) - PHP Web App von Etsy zur Verwaltung von Postmortems.
* [Plaso](https://github.com/log2timeline/plaso) -  eine Python-basierte Backend-Engine für das Tool log2timeline.
* [Timesketch](https://github.com/google/timesketch) - Open-Source-Tool für kollaborative forensische Zeitlinienanalyse.

### Videos

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - Präsentiert von Bruce Schneier auf der OWASP AppSecUSA 2015.

### Windows Evidence Collection

* [AChoir](https://github.com/OMENScan/AChoir) - Framework/Scripting-Tool zur Standardisierung und Vereinfachung des Skriptings von Live-Akquisitionsprogrammen für Windows.
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - Leichte Windows-Konsolenanwendung, die beim Sammeln von Systeminformationen für die Reaktion auf Vorfälle und Sicherheitseingriffe unterstützt. Es verfügt über zahlreiche Module und Ausgabeformate.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage verfügt über ein leichtes Sammelwerkzeug, das kostenlos verwendet werden kann. Es sammelt Quelldateien (wie Registry-Hives und Ereignisprotokolle), analysiert sie aber auch auf dem Live-Host, so dass es auch die ausführbaren Dateien sammeln kann, auf die sich die Startelemente, die geplanten Aufgaben usw. beziehen. Seine Ausgabe ist eine JSON-Datei, die in die kostenlose Version von Cyber Triage importiert werden kann. Cyber Triage wird von Sleuth Kit Labs gemacht, die auch Autopsie macht. 
* [DFIR ORC](https://dfir-orc.github.io/) - DFIR ORC ist eine Sammlung von spezialisierten Tools, die sich dem zuverlässigen Parsen und Sammeln kritischer Artefakte wie MFT, Registry-Hives oder Ereignisprotokollen widmen. DFIR ORC sammelt Daten, analysiert sie aber nicht: Es ist nicht dazu gedacht, Maschinen zu triagen. Es bietet eine forensisch relevante Momentaufnahme von Maschinen mit Microsoft Windows. Der Code kann gefunden werden auf [GitHub](https://github.com/DFIR-ORC/dfir-orc).
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - Tool, das verschiedene artefakte auf live-windows-systemen sammelt und die ergebnisse in csv-dateien aufzeichnet. Mit den Analysen dieser Artefakte kann ein früher Kompromiss erkannt werden.
* [Fibratus](https://github.com/rabbitstack/fibratus) - Tool zum Erkunden und Nachverfolgen des Windows-Kernels.
* [Hoarder](https://github.com/muteb/Hoarder) - Sammeln der wertvollsten Artefakte für Forensik oder Incident Response Untersuchungen.
* [IREC](https://binalyze.com/products/irec-free/) - All-in-One IR Evidence Collector, der RAM Image, $MFT, EventLogs, WMI Scripts, Registry Hives, System Restore Points und vieles mehr erfasst. Es ist kostenlos, blitzschnell und einfach zu bedienen.
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponse ist ein Live-Response-Tool für gezielte Sammlung.
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - Kostenloses Tool von Mandiant zum Sammeln von Hostsystemdaten und zum Melden des Vorhandenseins von Indikatoren für Kompromisse (IOCs). Unterstützung nur für Windows. Nicht mehr gepflegt. Nur vollständig unterstützt bis Windows 7 / Windows Server 2008 R2.
* [IRTriage](https://github.com/AJMartel/IRTriage) - Incident Response Trial - Windows Evidence Collection für forensische Analyse.
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - Kroll Artifact Parser and Extractor (KAPE) von Eric Zimmerman. Ein Triage-Tool, das die am weitesten verbreiteten digitalen Artefakte findet und sie dann schnell analysiert. Großartig und gründlich, wenn die Zeit von entscheidender Bedeutung ist.
* [LOKI](https://github.com/Neo23x0/Loki) - Kostenloser IR-Scanner zum Scannen von Endpunkten mit Yara-Regeln und anderen Indikatoren (IOCs).
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - PowerShell-basierte Triage und Bedrohungsjagd für Windows.
* [Panorama](https://github.com/AlmCo/Panorama) - Schnelle Incident-Übersicht auf Windows-Live-Systemen.
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - Live Disk Forensics Plattform, mit PowerShell.
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSRecon sammelt Daten von einem entfernten Windows-Host mit PowerShell (v2 oder höher), organisiert die Daten in Ordnern, hascht alle extrahierten Daten, hascht PowerShell und verschiedene Systemeigenschaften und sendet die Daten an das Sicherheitsteam. Die Daten können an eine Freigabe weitergeleitet, per E-Mail gesendet oder lokal gespeichert werden.
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - Open-Source-Tool, geschrieben in Perl, zum Extrahieren / Parsen von Informationen (Schlüssel, Werte, Daten) aus der Registry und präsentieren sie zur Analyse.
