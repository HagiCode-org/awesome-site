# Réponse exceptionnelle à l'incident [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> Une liste d'outils et de ressources pour l'intervention en cas d'incident de sécurité, destinée à aider les analystes de la sécurité et [DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html) les équipes.

Les équipes de police judiciaire numérique et d'intervention en cas d'incident sont des groupes de personnes dans une organisation responsable de la gestion de l'intervention en cas d'incident de sécurité, y compris la collecte de preuves de l'incident, l'assainissement de ses effets et la mise en place de contrôles pour empêcher que l'incident ne se reproduise à l'avenir.

## Sommaire

- [Emulation d'adversaires](#adversary-emulation)
- [Outils tout-en-un](#all-in-one-tools)
- [Livres](#books)
- [Communautés](#communities)
- [Outils de création d'image de disque](#disk-image-creation-tools)
- [Collecte de preuves](#evidence-collection)
- [Gestion des incidents](#incident-management)
- [Bases de connaissances](#knowledge-bases)
- [Distributions Linux](#linux-distributions)
- [Collection de preuves Linux](#linux-evidence-collection)
- [Outils d'analyse des journaux](#log-analysis-tools)
- [Outils d'analyse de mémoire](#memory-analysis-tools)
- [Outils d'imagerie mémoire](#memory-imaging-tools)
- [Collecte de preuves OSX](#osx-evidence-collection)
- [Autres listes](#other-lists)
- [Autres outils](#other-tools)
- [Livres de lecture](#playbooks)
- [Outils à décharge de processus](#process-dump-tools)
- [Outils de bac à sable/renversement](#sandboxingreversing-tools)
- [Outils de numérisation](#scanner-tools)
- [Outils de chronologie](#timeline-tools)
- [Vidéos](#videos)
- [Collecte de preuves Windows](#windows-evidence-collection)

## Collection d'outils IR

### Emulation d'adversaires

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - Windows Batch script qui utilise un ensemble d'outils et de fichiers de sortie pour faire un système comme s'il était compromis.
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - Des tests de détection de petite taille et très portatifs ont été cartographiés dans le cadre MITRE ATT&CK.
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - Techniques et procédures tactiques automatisées. Relancer manuellement des séquences complexes pour les tests de régression, les évaluations de produits, générer des données pour les chercheurs.
* [Caldera](https://github.com/mitre/caldera) - Système automatisé d'émulation adversaire qui effectue un comportement adversaire post-compromis au sein des réseaux Windows Enterprise. Il génère des plans en cours d'exploitation à l'aide d'un système de planification et d'un modèle d'adversaire préconfiguré basé sur le projet de tactique, de techniques et de connaissances communes (ATT&CKTM).
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - Outil modulaire, à menus, multiplateforme pour la construction d'événements de sécurité reproductibles, retardés et distribués. Créez facilement des chaînes d'événements personnalisées pour les perceuses Blue Team et la cartographie de capteur / alerte. Les équipes rouges peuvent créer des incidents de leurres, des distractions et des leurres pour soutenir et étendre leurs opérations.
* [Metta](https://github.com/uber-common/metta) - Outil de préparation à la sécurité de l'information pour faire la simulation contradictoire.
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - Utilitaire léger utilisé pour générer du trafic réseau malveillant et aider les équipes de sécurité à évaluer les contrôles de sécurité et la visibilité du réseau.
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTA fournit un cadre de scripts conçus pour permettre aux équipes bleues de tester leurs capacités de détection contre les embarcations malveillantes, modélisées après MITRE ATT&CK.
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - Machine virtuelle pour l'émulation adverse et la chasse aux menaces.

### Outils tout-en-un

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  La boîte à outils va rapidement extraire des preuves numériques de plusieurs sources en analysant les disques durs, les images de disque, les sauvegardes mémoire, iOS, Blackberry et Android sauvegardes, UFED, JTAG et puce-off dumps.
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - Suite d'outils basés sur CIM/WMI qui permettent d'effectuer des interventions d'incident et des opérations de chasse à distance dans toutes les versions de Windows.
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - CIRTKit n'est pas seulement une collection d'outils, mais aussi un cadre pour aider à l'unification continue des processus d'intervention en cas d'incident et d'enquête médico-légale.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage recueille et analyse les données hôtes pour déterminer si elles sont compromises. Il est système de notation et moteur de recommandation vous permettent de vous concentrer rapidement sur les artefacts importants. Il peut importer des données de son outil de collecte, des images de disque et d'autres collecteurs (comme KAPE). Il peut fonctionner sur le bureau d'un examinateur ou dans un modèle de serveur. Développé par Sleuth Kit Labs, qui fabrique également l'autopsie.
* [Cynative](https://github.com/cynative/cynative) - Agent de recherche profond pour votre infra - Sableboxed, en lecture seule, couvre AWS, GCP, Azure, K8s, GitHub et GitLab.
* [Dissect](https://github.com/fox-it/dissect) - Dissect est un cadre et un ensemble d'outils d'intervention en cas d'incident et de criminalistique numérique qui vous permet d'accéder rapidement et d'analyser des artefacts médico-légaux à partir de différents formats de disques et de fichiers, développés par Fox-IT (partie du groupe NCC).
* [Doorman](https://github.com/mwielgoszewski/doorman) - gestionnaire de flotte d'osquery qui permet la gestion à distance des configurations d'osquery récupérées par les nœuds. Il profite de la configuration TLS d'osquery, de logger et de terminaux de lecture/écriture distribués, pour donner une visibilité aux administrateurs sur une flotte d'appareils avec un minimum de frais généraux et d'intrusion.
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - Application extensible basée sur Windows qui fournit l'automatisation du flux de travail, la gestion de cas et la fonctionnalité de réponse de sécurité.
* [Flare](https://github.com/fireeye/flare-vm) - Une distribution de sécurité entièrement personnalisable, basée sur Windows pour l'analyse de logiciels malveillants, la réponse incidente, les tests de pénétration.
* [Fleetdm](https://github.com/fleetdm/fleet) - Plateforme de surveillance de l'état de la technique pour les hôtes adaptée aux experts en sécurité. Grâce au projet d'osquerie éprouvé par Facebook, Fleetdm offre des mises à jour continues, des fonctionnalités et des réponses rapides aux grandes questions.
* [GRR Rapid Response](https://github.com/google/grr) - Le cadre d'intervention en cas d'incident était axé sur la médecine légale en direct à distance. Il se compose d'un agent python (client) qui est installé sur les systèmes cibles, et d'une infrastructure de serveur python qui peut gérer et parler à l'agent. Outre le client API Python inclus, [PowerGRR](https://github.com/swisscom/PowerGRR) fournit une bibliothèque client d'API dans PowerShell travaillant sur Windows, Linux et macOS pour l'automatisation et le script de GRR.
* [IRIS](https://github.com/dfir-iris/iris-web) - IRIS est une plateforme de collaboration en ligne pour les analystes d'intervention en cas d'incident permettant de partager les enquêtes au niveau technique.
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - Plateforme d'enquête médico-légale numérique
* [Limacharlie](https://www.limacharlie.io/) - Endpoint security plate-forme composée d'une collection de petits projets tous ensemble qui vous donne un environnement de bas niveau multiplateforme (Windows, OSX, Linux, Android et iOS) pour gérer et pousser des modules supplémentaires dans la mémoire afin d'étendre sa fonctionnalité.
* [Matano](https://github.com/matanolabs/matano): Ouvrez la plate-forme du lac de sécurité sans serveur sur AWS qui vous permet d'ingérer, de stocker et d'analyser des petaoctets de données de sécurité dans un lac de données Apache Iceberg et d'exécuter des détections Python en temps réel comme code.
* [MozDef](https://github.com/mozilla/MozDef) - Automatise le processus de gestion des incidents de sécurité et facilite les activités en temps réel des responsables des incidents.
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - Programme CLI pour automatiser l'installation, la configuration et l'utilisation des solutions de cybersécurité.
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - Application construite pour la présentation de données médico-légales asynchrones en utilisant ElasticSearch comme moteur. Il est conçu pour ingérer les collections Redline.
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - Un autre cadre populaire distribué de l'informatique libre. Ce cadre a été construit sur la plate-forme Linux et utilise la base de données postgreSQL pour stocker les données.
* [osquery](https://osquery.io/) - Posez facilement des questions sur votre infrastructure Linux et macOS en utilisant un langage de requête similaire à SQL; le fourni *trousse d'intervention* vous aide à détecter les violations et à y répondre.
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - Fournit aux utilisateurs des capacités d'enquête d'accueil pour trouver des signes d'activité malveillante par l'analyse de la mémoire et des fichiers, et l'élaboration d'un profil d'évaluation des menaces.
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - Une extension de navigateur puissante et conviviale qui rationalise les enquêtes pour les professionnels de la sécurité.
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - Unix et Windows outil basé qui aide à l'analyse médico-légale des ordinateurs. Il est livré avec divers outils qui aident dans la médecine légale numérique. Ces outils aident à analyser les images sur disque, à effectuer une analyse approfondie des systèmes de fichiers et d'autres choses.
* [TheHive](https://thehive-project.org/) - Solution open source et libre scalable 3-en-1 conçue pour faciliter la vie des COS, des CSIRT, des CERT et de tout praticien de la sécurité de l'information traitant d'incidents de sécurité qui doivent faire l'objet d'enquêtes et d'interventions rapides.
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - Boîte à outils multiplateforme avec 28 cas d'utilisation préconstruits dans un seul binaire zéro installation. Recueille des artefacts de mémoire, de disque, de réseau et de nuage avec génération de timeline automatisée.
* [Velociraptor](https://github.com/Velocidex/velociraptor) - Visibilité de l'extrémité et outil de collecte
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - Outil médico-légal pour le clonage de disques et l'imagerie. Il peut être utilisé pour trouver les fichiers supprimés et l'analyse de disque.
* [Zentral](https://github.com/zentralopensource/zentral) - Combine les puissantes caractéristiques de l'inventaire des paramètres d'osquery avec un cadre de notification et d'action souple. Cela permet d'identifier et de réagir aux changements sur les clients OS X et Linux.

### Livres

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - Le livre de Steve Anson sur la réponse aux incidents.
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - Détection des logiciels malveillants et des menaces dans Windows, Linux et Mac Memory.
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - par Jeff Bollinger, Brandon Enright et Matthew Valites.
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - par Gérard Johansen.
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - Par Scott J. Roberts.
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - Le guide définitif d'intervention en cas d'incident.
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - Un excellent guide pour construire une stratégie de réponse incidente pour les attaques ransomware. Par Oleg Skulkin.
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - Une excellente référence à l'élaboration d'un plan d'intervention en cas d'incident basé également sur le renseignement de menace. Par Roberto Martinez.
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - Par Scott J. Roberts, Rebekah Brown.
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - Excellente référence pour les intervenants.
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - Le guide définitif de la médecine légale de la mémoire. Par Svetlana Ostrovskaya et Oleg Skulkin.
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - Le livre de Richard Bejtlich sur les IR.

### Communautés

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - Communauté de plus de 8 000 professionnels de l'application de la loi, du secteur privé et de la médecine légale. De plus, beaucoup d'étudiants et d'amateurs! Guide [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/).
* [Slack DFIR channel](https://dfircommunity.slack.com) - Slack DFIR Voie de communication - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community).

### Outils de création d'image de disque

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - Outil médico-légal dont le but principal est de prévisualiser les données récupérables à partir d'un disque de tout type. FTK Imager peut également acquérir une mémoire en direct et un fichier de recherche sur les systèmes 32bit et 64bit.
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - Bitscout by Vitaly Kamluk vous aide à construire votre image LiveCD/LiveUSB entièrement personnalisable pour être utilisé pour la médecine légale numérique à distance (ou peut-être toute autre tâche de votre choix). Il est conçu pour être transparent et contrôlable par le propriétaire du système, scientifiquement sain, personnalisable et compact.
* [GetData Forensic Imager](http://www.forensicimager.com/) - Programme basé sur Windows qui va acquérir, convertir, ou vérifier une image médico-légale dans l'un des formats de fichiers médico-légaux communs suivants.
* [Guymager](http://guymager.sourceforge.net) - Imageur médico-légal gratuit pour l'acquisition de médias sur Linux.
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - ACQUIRE by Magnet Forensics permet d'effectuer différents types d'acquisitions de disques sur Windows, Linux et OS X ainsi que sur les systèmes d'exploitation mobiles.

### Collecte de preuves

* [Acquire](https://github.com/fox-it/acquire) - Acquérir est un outil pour rassembler rapidement des artefacts judiciaires à partir d'images de disque ou d'un système en direct dans un conteneur léger. Cela fait de Acquérir un excellent outil pour, entre autres, accélérer le processus de triage médico-légal numérique. Il utilise [Dissect](https://github.com/fox-it/dissect) recueillir ces informations sur le disque brut, si possible.
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - Le projet artefactcollector fournit un logiciel qui collecte des artefacts médico-légaux sur les systèmes.
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - Outil de criminalistique informatique qui scanne une image disque, un fichier, ou un répertoire de fichiers et extrait des informations utiles sans analyser le système de fichiers ou les structures du système de fichiers. En ignorant la structure du système de fichiers, le programme se distingue par sa rapidité et sa rigueur.
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - Liste simplifiée des analyseurs pour analyser rapidement un fichier d'image médico-légale (`dd`, E01, `.vmdk`, etc.) et produit neuf rapports.
* [CyLR](https://github.com/orlikoski/CyLR) - L'outil CyLR collecte des artefacts médico-légaux à partir d'hôtes avec des systèmes de fichiers NTFS rapidement, en toute sécurité et minimise l'impact sur l'hôte.
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - Dépôt d'artéfacts médico-légaux
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - Windows Batch script et un script Unix Bash pour collecter des données médico-légales de l'hôte pendant la réponse incidente.
* [Live Response Collection](https://www.brimorlabs.com/tools/) - Outil automatisé qui recueille des données volatiles de Windows, OSX et \*nix systèmes d'exploitation basés.
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - Utilitaire de ligne de commande (qui fonctionne avec ou sans instances Amazon EC2) pour paralléliser l'acquisition de mémoire distante.
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - Acquérir, trier et rechercher des preuves à distance via l'accès en lecture seule portable iSCSI
* [UAC](https://github.com/tclahr/uac) - UAC (Unix-like Artifacts Collector) est un script de la collection Live Response pour Incident Response qui utilise des binaires et des outils natifs pour automatiser la collection d'objets de systèmes AIX, Android, ESXi, FreeBSD, Linux, macOS, NetBSD, NetScaler, OpenBSD et Solaris.

### Gestion des incidents

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - Un système SOAR gratuit qui permet d'automatiser la manipulation des alertes et les processus de réponse aux incidents.
* [CyberCPR](https://www.cybercpr.com) - Outil communautaire et commercial de gestion des incidents avec Need-to-Know intégré pour soutenir la conformité au RGPD tout en traitant les incidents sensibles.
* [Cyphon](https://medevel.com/cyphon/) - Cyphon élimine les maux de tête de la gestion des incidents en rationalisant une multitude de tâches connexes à travers une plateforme unique. Il reçoit, traite et trie des événements pour fournir une solution complète pour votre workflow analytique — agréger les données, regrouper et hiérarchiser les alertes, et permettre aux analystes d'enquêter et de documenter les incidents.
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - Orchestration de sécurité Paloalto, automatisation et plate-forme de réponse avec gestion complète du cycle de vie d'Incident et de nombreuses intégrations pour améliorer l'automatisation.
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - Un cadre pour orchestrer la collecte, le traitement et l'exportation de données médico-légales.
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - Intervention en cas d'incident Suivi de l'application traitant un ou plusieurs incidents au moyen de cas et de tâches comportant de nombreux systèmes et artefacts touchés.
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - Plateforme de gestion des incidents de cybersécurité conçue avec agilité et rapidité. Il permet de créer, de suivre et de signaler facilement les incidents de cybersécurité et est utile pour les CSIRT, les CERT et les COS.
* [RTIR](https://www.bestpractical.com/rtir/) - Request Tracker for Incident Response (RTIR) est le premier système de traitement des incidents open source destiné aux équipes de sécurité informatique. Nous avons travaillé avec plus d'une douzaine d'équipes CERT et CSIRT à travers le monde pour vous aider à gérer le volume sans cesse croissant de rapports d'incident. RTIR s'appuie sur toutes les fonctionnalités de Request Tracker.
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - La collaboration avec les intervenants et l'outil de saisie des connaissances étaient axés sur la flexibilité et la facilité d'utilisation. Notre objectif est d'ajouter de la valeur au processus d'intervention sans surcharger l'utilisateur.
* [Shuffle](https://github.com/frikky/Shuffle) - Une plateforme générale d'automatisation de sécurité axée sur l'accessibilité.
* [threat_note](https://github.com/defpoint/threat_note) - Carnet d'enquête léger qui permet aux chercheurs en sécurité d'enregistrer et de récupérer des indicateurs liés à leur recherche.
* [Zenduty](https://www.zenduty.com) - Zendety est une nouvelle plate-forme de gestion des incidents offrant une alerte d'incident de bout en bout, une gestion sur appel et une orchestration d'intervention, donnant aux équipes un meilleur contrôle et une plus grande automatisation sur le cycle de vie de la gestion des incidents.

### Bases de connaissances

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - Base de connaissances sur les artéfacts judiciaires numériques
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - Windows Events Extraits d'attaque
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - Base de connaissances du registre Windows

### Distributions Linux

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - Appareil basé sur VMware utilisé pour l'investigation numérique et l'acquisition et est construit entièrement à partir de logiciels de domaine public. Parmi les outils contenus dans l'ADIA sont l'autopsie, le kit Sleuth, le Digital Forensics Framework, log2timeline, Xplico, et Wireshark. La plupart de la maintenance du système utilise Webmin. Il est conçu pour les enquêtes et acquisitions numériques de petite à moyenne taille. L'appareil fonctionne sous Linux, Windows et Mac OS. i386 (32 bits) et x86_Les versions 64 (64 bits) sont disponibles.
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - Contient de nombreux outils qui aident les enquêteurs pendant leur analyse, y compris la collecte de preuves médico-légales.
* [CCF-VM](https://github.com/rough007/CCF-VM) - CyLR CDQR Machine virtuelle de criminalistique (CCF-VM): Une solution tout-en-un pour analyser les données collectées, ce qui permet de rechercher facilement avec des recherches communes intégrées, permet de rechercher simultanément des hôtes uniques et multiples.
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - Distribution Linux qui comprend une vaste collection d'applications de sécurité réseau open source de qualité supérieure utiles au professionnel de la sécurité réseau.
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - Distribution Linux axée sur la sécurité avec 140 outils de sécurité préinstallés et offensants, noyau durci personnalisé et workflows intégrés de réponse aux incidents.
* [PALADIN](https://sumuri.com/software/paladin/) - Distribution Linux modifiée pour effectuer diverses tâches médico-légales de manière légale. Il est livré avec de nombreux outils de médecine légale open source inclus.
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - Distro Linux spécial destiné à la surveillance de la sécurité du réseau avec des outils d'analyse avancés.
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - Démontre que les capacités avancées d'intervention en cas d'incident et les techniques médico-légales numériques de plongée profonde aux intrusions peuvent être accomplies à l'aide d'outils de pointe à source ouverte qui sont librement disponibles et fréquemment mis à jour.

### Collection de preuves Linux

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - FastIR pour Linux collecte différents artefacts sur Linux en direct et enregistre les résultats dans les fichiers CSV.
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - Acquisition rapide de mémoire outil open source pour Linux écrit dans Rust. Générer des décharges complètes de machines Linux.

### Outils d'analyse des journaux

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - AppCompatProcesseur a été conçu pour extraire une valeur supplémentaire des données AppCompat / AmCache à l'échelle de l'entreprise au-delà des techniques classiques de gerbage et de gerbage.
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT-Hunter est l'outil de chasse aux menaces pour les journaux d'événements Windows.
* [Chainsaw](https://github.com/countercept/chainsaw) - Chainsaw fournit une puissante « première réponse » pour identifier rapidement les menaces dans les journaux d'événements Windows.
* [Event Log Explorer](https://eventlogxp.com/) - Outil développé pour analyser rapidement les fichiers journaux et d'autres données.
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - Afficher, analyser et surveiller les événements enregistrés dans les journaux d'événements Microsoft Windows avec cet outil GUI.
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - Hayabusa est un générateur de chronologie et un outil de chasse à la menace créé par le groupe Yamato Security au Japon.
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - Outil de fusion et d'analyse du renseignement de menace qui intègre les flux de données de menace avec les solutions SIEM. Les utilisateurs peuvent immédiatement utiliser les renseignements relatifs aux menaces pour les activités de surveillance de la sécurité et de rapport d'incident (IR) dans le déroulement de leurs opérations de sécurité existantes.
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - Exécuter les requêtes SQL contre les données de log structurées : journaux de serveur, événements Windows, système de fichiers, répertoire actif, journaux log4net, textes séparés par virgule/tab, fichiers XML ou JSON. Fournit également une interface graphique à Microsoft LogParser 2.2 avec des éléments d'interface utilisateur puissants: éditeur de syntaxe, grille de données, graphique, table de pivot, tableau de bord, gestionnaire de requêtes et plus encore.
* [Lorg](https://github.com/jensvoid/lorg) - Outil pour l'analyse avancée de sécurité HTTPD logfile et la criminalistique.
* [Logdissect](https://github.com/dogoncouch/logdissect) - Utilitaire CLI et API Python pour l'analyse des fichiers journaux et autres données.
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - Outil d'analyse de log à grande vitesse et de criminalistique avec analyse multiformat, correspondance de patrons, reconstruction chronologique et détection d'anomalies pour la réponse aux incidents.
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - Outil pour enquêter sur le logo malveillant de Windows en visualisant et en analysant le journal des événements de Windows.
* [Sigma](https://github.com/SigmaHQ/sigma) - Format de signature générique pour les systèmes SIEM contenant déjà un ensemble de règles étendu.
* [StreamAlert](https://github.com/airbnb/streamalert) - Cadre d'analyse des données en temps réel sans serveur, capable d'ingérer des sources de données personnalisées et de déclencher des alertes en utilisant une logique définie par l'utilisateur.
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearch rend l'analyse des journaux d'événements Windows plus efficace et moins longue par l'agrégation des journaux d'événements.
* [WELA](https://github.com/Yamato-Security/WELA) - Windows Event Log Analyzer vise à être le couteau de l'Armée suisse pour les journaux d'événements Windows.
* [Zircolite](https://github.com/wagga40/Zircolite) - Un outil de détection autonome et rapide basé sur SIGMA pour EVTX ou JSON.

### Outils d'analyse de mémoire

* [AVML](https://github.com/microsoft/avml) - Un outil portable d'acquisition de mémoire volatile pour Linux.
* [Evolve](https://github.com/JamesHabben/evolve) - Interface Web pour le cadre judiciaire de la mémoire de volatilité.
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - Analyse de mémoire avancée pour Windows x64 avec support hyperviseur imbriqué.
* [LiME](https://github.com/504ensicsLabs/LiME) - Module de noyau chargeable (LKM), qui permet l'acquisition de la mémoire volatile à partir des périphériques Linux et Linux, anciennement appelés DMD.
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScan est un plugin Volatility extrait des données de configuration de logiciels malveillants connus. Volatilité est un cadre de médecine légale en mémoire ouverte pour la réponse incidente et l'analyse de malware. Cet outil recherche des logiciels malveillants dans les images de mémoire et décharge les données de configuration. De plus, cet outil a une fonction pour lister les chaînes auxquelles se réfère le code malveillant.
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - Logiciel judiciaire de mémoire libre qui aide les intervenants d'incidents trouver le mal dans la mémoire en direct. Memoryze peut acquérir et/ou analyser des images de mémoire, et sur les systèmes en direct, peut inclure le fichier de recherche dans son analyse.
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Memoryze pour Mac est Memoryze mais ensuite pour Macs. Un nombre inférieur de caractéristiques, cependant.
* [MemProcFS] (https://github.com/ufrisk/MemProcFS) - MemProcFS est un moyen facile et pratique de visualiser la mémoire physique comme des fichiers dans un système de fichiers virtuel.
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochi est un cadre open source pour l'analyse collaborative des décharges de mémoire légale.
* [Rekall](http://www.rekall-forensic.com/) - Outil open source (et bibliothèque) pour l'extraction d'objets numériques à partir d'échantillons de mémoire volatile (RAM).
* [Volatility](https://github.com/volatilityfoundation/volatility) - Cadre scientifique de la mémoire avancée.
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - Le cadre d'extraction de mémoire volatile (successeur de volatilité)
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - L'outil d'automatisation pour les chercheurs coupe toutes les conjectures et tâches manuelles hors de la phase d'extraction binaire, ou pour aider l'investigateur dans les premières étapes d'une enquête d'analyse de mémoire.
* [VolDiff](https://github.com/aim4r/VolDiff) - Malware Memory Footprint Analyse basée sur la volatilité.
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - Mémoire criminalistique et outil d'ingénierie inverse utilisé pour analyser la mémoire volatile offrant la capacité d'analyser le noyau Windows, les pilotes, DLLs, et la mémoire virtuelle et physique.

### Outils d'imagerie mémoire

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - Petit outil médico-légal gratuit pour extraire de façon fiable l'ensemble du contenu de l'ordinateur – même s'il est protégé par un système actif anti-débogue ou anti-dumping.
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - Script pour vider la mémoire Linux et créer des profils de volatilité.
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Outil d'acquisition de mémoire rapide pour Windows (x86, x64, ARM64). Générer des décharges complètes d'écrasement de mémoire de machines Windows.
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - Outil d'imagerie libre conçu pour capturer la mémoire physique d'un ordinateur suspect. Prend en charge les versions récentes de Windows.
* [OSForensics](http://www.osforensics.com/) - Outil pour acquérir la mémoire en direct sur les systèmes 32-bit et 64-bit. Une décharge d'un processus individuel espace mémoire ou mémoire physique décharge peut être faite.

### Collecte de preuves OSX

* [Knockknock](https://objective-see.com/products/knockknock.html) - Affiche les éléments persistants (scripts, commandes, binaires, etc.) qui sont définis pour s'exécuter automatiquement sur OSX.
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - Cadre scientifique basé sur le plugin pour le triage rapide de mac qui fonctionne sur des machines en direct, des images de disque ou des fichiers d'artefact individuels.
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - Outil Mac OS X gratuit de criminalistique informatique.
* [OSX Collector](https://github.com/yelp/osxcollector) - Dépannage de l'auditeur OSX pour une réponse en direct.
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - Un outil pour visualiser les événements dans Apple Endpoint Security Framework (ESF) en temps réel.

### Autres listes

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - Collecte de ressources d'identification de l'événement utiles pour la médecine légale numérique et la réponse aux incidents.
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - Une liste des outils et des ressources d'analyse médico-légale géniales.
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - Collecte d'outils
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - Une liste actualisée d'outils médico-légaux créée par Eric Zimmerman, instructeur pour l'institut SANS.
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - Liste collective des API JSON publiques à utiliser en sécurité.

### Autres outils

* [Cortex](https://thehive-project.org) - Cortex vous permet d'analyser des observables tels que des adresses IP et email, des URL, des noms de domaine, des fichiers ou des hachages un par un ou en mode vrac à l'aide d'une interface Web. Les analystes peuvent également automatiser ces opérations en utilisant son API REST.
* [Crits](https://crits.github.io/) - Outil basé sur le Web qui combine un moteur analytique avec une base de données de cybermenaces.
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - L'outil DFIR développé par le SIRT de Netflix qui permet à un enquêteur de saisir rapidement un compromis entre des instances cloud (cas Linux sur AWS, actuellement) lors d'un incident et de trier efficacement ces instances pour des actions de suivi en montrant des différences par rapport à une base de référence.
* [domfind](https://github.com/diogo-fernan/domfind) - Python DNS rampeur pour trouver des noms de domaine identiques sous différents TLD.
* [Fileintel](https://github.com/keithjjones/fileintel) - Tirez l'intelligence par hachage de fichier.
* [HELK](https://github.com/Cyb3rWard0g/HELK) - Plateforme de chasse aux menaces.
* [Hindsight](https://github.com/obsidianforensics/hindsight) - Histoire de l'Internet médico-légal pour Google Chrome/Chromium.
* [Hostintel](https://github.com/keithjjones/hostintel) - Tirez l'intelligence par hôte.
* [IPASIS](https://ipasis.com/) - La réputation IP en temps réel et l'API de validation de courriel pour enquêter sur les interactions suspectes. Retourne un score Interaction Trust (0-100) combinant la détection VPN/proxy/Tor et l'évaluation du risque par courriel en un seul appel API.
* [imagemounter](https://github.com/ralphje/imagemounter) - Utilitaire de ligne de commande et paquet Python pour faciliter le (dé)montage des images disque médico-légal.
* [Kansa](https://github.com/davehull/Kansa/) - Cadre modulaire d'intervention en cas d'incident à PowerShell.
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - MFT répertoire arbre reconstruction & information d'enregistrement.
* [Munin](https://github.com/Neo23x0/munin) - Vérification de hachage en ligne pour VirusTotal et d'autres services.
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponse est un module PowerShell axé sur le confinement ciblé et l'assainissement pendant l'intervention en cas d'incident de sécurité.
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - Très simple multi-threaded de nombreuses règles à de nombreux fichiers YARA numérisation Python script pour les zoos malveillants et IR.
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - Permet d'analyser les disques et la mémoire des CIO en utilisant YARA sur Windows, Linux et OS X.
* [RaQet](https://raqet.github.io/) - Outil d'acquisition et de triage à distance non conventionnel qui permet le triage d'un disque d'un ordinateur distant (client) qui est redémarré avec un système d'exploitation judiciaire conçu à dessein.
* [Raccine](https://github.com/Neo23x0/Raccine) - Une simple protection Ransomware
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - Recueillir des données médico-légales sur MySQL en cas de problèmes.
* [Scout2](https://nccgroup.github.io/Scout2/) - Outil de sécurité qui permet aux administrateurs d'Amazon Web Services d'évaluer la posture de sécurité de leur environnement.
* [Stenographer](https://github.com/google/stenographer) - Solution de capture de paquets qui vise à spool rapidement tous les paquets au disque, puis fournir un accès simple et rapide à des sous-ensembles de ces paquets. Il stocke autant d'historique que possible, gère l'utilisation du disque et supprime lorsque les limites du disque sont atteintes. Il est idéal pour capturer le trafic juste avant et pendant un incident, sans le besoin explicite de stocker tout le trafic réseau.
* [sqhunter](https://github.com/0x4d31/sqhunter) - Chasseur de menaces basé sur l'osquery et Salt Open (SaltStack) qui peut émettre des requêtes ad-hoc ou distribuées sans le besoin de plugin d'osquery tls. squhunter vous permet de demander des sockets réseau ouverts et de les vérifier contre les sources de renseignement de menace.
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - Modèle de fichier de configuration Sysmon avec traçage d'événements de haute qualité par défaut
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - Un dépôt de modules de configuration sysmon
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - Traceroute étendue pour soutenir les activités des exploitants de CSIRT (ou CERT). Habituellement, l'équipe du CSIRT doit gérer les incidents en fonction des adresses IP reçues. Créé par Computer Emergency Response Center Luxembourg.
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - Utilitaire Windows (pauvrement entretenu ou plus entretenu) pour soumettre des échantillons de virus aux fournisseurs d'AV.

### Livres de lecture

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR Runbook Échantillons destinés à être personnalisés par chaque entité qui les utilise. Les trois échantillons sont: "Attaque DoS ou DDoS", "fuite crédible" et "accès non prévu à un godet Amazon S3.
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - Collecte de livres contre-actifs.
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - Une collection de cartes de combat Cyber Incident Response Playbook
* [IRM](https://github.com/certsocietegenerale/IRM) - Méthodes de réponse aux incidents par CERT Société Générale.
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - Documents qui décrivent des parties du processus de réponse à l'incident de PagerDuty. Il fournit des renseignements non seulement sur la préparation d'un incident, mais aussi sur ce qu'il faut faire pendant et après. Source [GitHub](https://github.com/PagerDuty/incident-response-docs).
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - Phantom Community Playbooks pour Spunk mais aussi personnalisable pour une autre utilisation.
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - Playbook pour aider au développement des techniques et des hypothèses pour les campagnes de chasse.

### Outils à décharge de processus

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - Dompte toute image de mémoire de Win32 en cours d'exécution à la volée.
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - Outil qui vous permet de jeter le contenu de mémoire d'un processus dans un fichier sans arrêter le processus.

### Outils de bac à sable/renversement

* [Any Run](https://app.any.run/) - Service interactif d'analyse de logiciels malveillants en ligne pour la recherche dynamique et statique de la plupart des types de menaces utilisant n'importe quel environnement.
* [CAPA](https://github.com/mandiant/capa) - détecte les capacités dans les fichiers exécutables. Vous l'exécutez contre un module PE, ELF, .NET ou un fichier shellcode et il vous indique ce qu'il pense que le programme peut faire.
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - Configuration des logiciels malveillants et extraction de charge utile.
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - Open Source Outil de bac à sable hautement configurable.
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - Fourche Cuckoo fortement modifiée développée par la communauté.
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - Bibliothèque Python pour contrôler un bac à sable modifié au coucou.
* [Cutter](https://github.com/rizinorg/cutter) - Plateforme d'ingénierie inverse libre et ouverte alimentée par rizin.
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - Cadre d'ingénierie inverse du logiciel.
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - Boîte à sable gratuite en ligne puissant par CrowdStrike.
* [Intezer](https://analyze.intezer.com/#/) - Intezer Analyze plonge dans les binaires Windows pour détecter les similarités de micro-code aux menaces connues, afin de fournir des résultats précis mais faciles à comprendre.
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - Joe Sandbox détecte et analyse les fichiers malveillants potentiels et les URL sur Windows, Android, Mac OS, Linux et iOS pour des activités suspectes; fournissant des rapports d'analyse complets et détaillés.
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - Cadre d'analyse statique qui automatise le processus d'extraction des caractéristiques clés d'un certain nombre de formats de fichiers différents.
* [Metadefender Cloud](https://www.metadefender.com) - Plateforme gratuite de renseignement sur les menaces fournissant des analyses multiples, la désinfection des données et l'évaluation de la vulnérabilité des fichiers.
* [Radare2](https://github.com/radareorg/radare2) - Cadre d'ingénierie inversé et outillage en ligne de commande.
* [Reverse.IT](https://www.reverse.it/) - Domaine alternatif pour l'outil d'analyse hybride fourni par CrowdStrike.
* [Rizin](https://github.com/rizinorg/rizin) - framework et outils en ligne de commande comme UNIX
* [StringSifter](https://github.com/fireeye/stringsifter) - Un outil d'apprentissage automatique qui classe les chaînes en fonction de leur pertinence pour l'analyse des logiciels malveillants.
* [Threat.Zone](https://app.threat.zone) - Plateforme d'analyse de la menace basée sur le nuage, qui comprend le bac à sable, le CDR et l'analyse interactive pour les chercheurs.
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrie utilise le comportement d'exécution et des centaines de fonctionnalités d'un fichier pour effectuer une analyse.
* [Viper](https://github.com/viper-framework/viper) - Analyse binaire et cadre de gestion basé sur Python, qui fonctionne bien avec Cuckoo et YARA.
* [Virustotal](https://www.virustotal.com) - Service en ligne gratuit qui analyse les fichiers et les URL permettant l'identification des virus, vers, trojans et autres types de contenu malveillant détectés par les moteurs antivirus et les scanners de site Web.
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - Bibliothèque de visualisation open source et outils de ligne de commande pour les journaux (Cuckoo, Procmon, plus à venir).
* [Yomi](https://yomi.yoroi.company) - MultiSandbox gratuit géré et hébergé par Yoroi.

### Outils de numérisation

* [Fenrir](https://github.com/Neo23x0/Fenrir) - Un simple scanner du CIO. Il permet de scanner n'importe quel système Linux/Unix/OSX pour les CIO en simple bash. Créé par les créateurs de THOR et LOKI.
* [LOKI](https://github.com/Neo23x0/Loki) - Scanner IR gratuit pour scanner le paramètre avec des règles de yara et d'autres indicateurs (IOC).
* [Spyre](https://github.com/spyre-project/spyre) - Simple scanner CIO basé sur YARA écrit en Go

### Outils de chronologie

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - La plate-forme a été conçue pour établir facilement un calendrier détaillé d'un incident.
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - Outil gratuit disponible à partir de Fire/Mandiant qui représentera le fichier journal/texte qui peut mettre en évidence des zones sur le graphique, qui correspond à un mot clé ou une phrase. Bon pour le temps encadrant une infection et ce qui a été fait après compromis.
* [Morgue](https://github.com/etsy/morgue) - Application web PHP par Etsy pour la gestion des postmortems.
* [Plaso](https://github.com/log2timeline/plaso) -  un moteur de moteur de moteur Python pour l'outil log2timeline.
* [Timesketch](https://github.com/google/timesketch) - Outil open source pour l'analyse collaborative des délais judiciaires.

### Vidéos

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - Présenté par Bruce Schneier à l'OWASP AppSecUSA 2015.

### Collecte de preuves Windows

* [AChoir](https://github.com/OMENScan/AChoir) - Outil de framework/scripting pour normaliser et simplifier le processus de script des utilitaires d'acquisition en direct pour Windows.
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - Application console Windows légère conçue pour aider à la collecte d'informations système pour la réponse incidente et les engagements de sécurité. Il dispose de nombreux modules et formats de sortie.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage a un outil de collection léger qui est libre d'utiliser. Il recueille les fichiers sources (tels que les urnes de registre et les journaux d'événements), mais les analyse aussi sur l'hôte en direct afin qu'il puisse également collecter les exécutables auxquels se réfèrent les éléments de démarrage, le calendrier, les tâches, etc. La sortie est un fichier JSON qui peut être importé dans la version gratuite de Cyber Triage. Cyber Triage est fabriqué par Sleuth Kit Labs, qui fabrique également l'autopsie. 
* [DFIR ORC](https://dfir-orc.github.io/) - DFIR ORC est une collection d'outils spécialisés dédiés à l'analyse fiable et à la collecte d'artefacts critiques tels que le MFT, les ruches d'enregistrement ou les journaux d'événements. DFIR ORC collecte des données, mais ne les analyse pas : il ne s'agit pas de trier des machines. Il fournit un instantané scientifiquement pertinent des machines sous Microsoft Windows. Le code se trouve sur [GitHub](https://github.com/DFIR-ORC/dfir-orc).
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - Outil qui collecte différents artefacts sur les systèmes Windows en direct et enregistre les résultats dans les fichiers csv. Avec l'analyse de ces artefacts, un compromis précoce peut être détecté.
* [Fibratus](https://github.com/rabbitstack/fibratus) - Outil d'exploration et de traçage du noyau Windows.
* [Hoarder](https://github.com/muteb/Hoarder) - Recueillir les artefacts les plus précieux pour les enquêtes médico-légales ou d'intervention en cas d'incident.
* [IREC](https://binalyze.com/products/irec-free/) - Tout-en-un IR Evidence Collector qui capture RAM Image, $MFT, EventLogs, WMI Scripts, Registry Hives, System Restore Points et bien plus encore. Il est GRATUIT, éclair rapide et facile à utiliser.
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponse est un outil de réponse en direct pour la collection ciblée.
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - Outil gratuit de Mandiant pour la collecte des données du système hôte et la déclaration de la présence d'Indicateurs de compromis (IOC). Support pour Windows seulement. N'est plus entretenu. Uniquement pris en charge jusqu'à Windows 7 / Windows Server 2008 R2.
* [IRTriage](https://github.com/AJMartel/IRTriage) - Triage de la réponse aux incidents - Collecte de preuves Windows pour l'analyse médico-légale.
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - Kroll Artifact Parser et Extractor (KAPE) par Eric Zimmerman. Un outil de tri qui trouve les artefacts numériques les plus répandus et les analyse rapidement. Grande et approfondie quand le temps est de l'essence.
* [LOKI](https://github.com/Neo23x0/Loki) - Scanner IR gratuit pour scanner le paramètre avec des règles de yara et d'autres indicateurs (IOC).
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - Triage basé sur PowerShell et chasse aux menaces pour Windows.
* [Panorama](https://github.com/AlmCo/Panorama) - Aperçu rapide des incidents sur les systèmes Windows en direct.
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - Plate-forme d'analyse scientifique sur disque, avec PowerShell.
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSRecon recueille les données d'un hôte Windows distant à l'aide de PowerShell (v2 ou ultérieur), organise les données dans des dossiers, hache toutes les données extraites, hache PowerShell et diverses propriétés du système, et envoie les données à l'équipe de sécurité. Les données peuvent être poussées à une part, envoyées par courriel ou conservées localement.
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - Outil open source, écrit en Perl, pour extraire et analyser des informations (clés, valeurs, données) du Registre et les présenter pour analyse.
