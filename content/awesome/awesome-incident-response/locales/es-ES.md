# Awesome Incident Response [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> Una lista curada de herramientas y recursos para la respuesta a incidentes de seguridad, dirigida a ayudar a analistas y analistas de seguridad [DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html) equipos.

Los equipos de Digital Forensics and Incident Response (DFIR) son grupos de personas en una organización responsable de gestionar la respuesta a un incidente de seguridad, incluyendo reunir pruebas del incidente, remediar sus efectos, e implementar controles para evitar que el incidente vuelva a ocurrir en el futuro.

## Índice

- [Emulación adversaria](#adversary-emulation)
- [Herramientas todo-en-uno](#all-in-one-tools)
- [Libros](#books)
- [Comunidades](#communities)
- [Herramientas de creación de imágenes de disco](#disk-image-creation-tools)
- [Evidence Collection](#evidence-collection)
- [Incident Management](#incident-management)
- [Bases de conocimientos](#knowledge-bases)
- [Distribución de Linux](#linux-distributions)
- [Linux Evidence Collection](#linux-evidence-collection)
- [Herramientas de análisis de registros](#log-analysis-tools)
- [Herramientas de análisis de memoria](#memory-analysis-tools)
- [Herramientas de imagen de memoria](#memory-imaging-tools)
- [OSX Evidence Collection](#osx-evidence-collection)
- [Otras listas](#other-lists)
- [Otras herramientas](#other-tools)
- [Playbooks](#playbooks)
- [Herramientas de extracción de procesos](#process-dump-tools)
- [Herramientas de Sandboxing/Reversing](#sandboxingreversing-tools)
- [Herramientas de escáner](#scanner-tools)
- [Herramientas de línea de tiempo](#timeline-tools)
- [Videos](#videos)
- [Colección de pruebas de Windows](#windows-evidence-collection)

## IR Tools Collection

### Emulación adversaria

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - Windows Batch script que utiliza un conjunto de herramientas y archivos de salida para hacer que un sistema parezca como si estuviera comprometido.
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - Pruebas de detección pequeñas y altamente portátiles mapeadas al Marco MITRE ATT.
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - Técnicas y procedimientos de táctica automatizada. Realizar secuencias complejas manualmente para pruebas de regresión, evaluaciones de productos, generar datos para investigadores.
* [Caldera](https://github.com/mitre/caldera) - Sistema de emulación de adversarios automatizado que realiza el comportamiento adversario post-compromiso dentro de las redes de Windows Enterprise. Genera planes durante la operación utilizando un sistema de planificación y un modelo de adversario preconfigurado basado en el proyecto Aversarial Tactics, Techniques & Common Knowledge (ATT simultáneamenteCKTM).
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - Herramienta modular, de menú, multiplataforma para construir eventos de seguridad repetibles, retardados por el tiempo. Cree fácilmente cadenas de eventos personalizadas para perforaciones Blue Team y mapeo de sensores / alerta. Los equipos rojos pueden crear incidentes de decoy, distracciones y señuelos para apoyar y escalar sus operaciones.
* [Metta](https://github.com/uber-common/metta) - Herramienta de preparación para la seguridad de la información para hacer simulación adversaria.
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - Utilidad ligera utilizada para generar tráfico de red malicioso y ayudar a los equipos de seguridad a evaluar controles de seguridad y visibilidad de la red.
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTA proporciona un marco de scripts diseñados para permitir que los equipos azules prueben sus capacidades de detección contra el oficio malicioso, modelado después de MITRE ATT PulCK.
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - Máquina virtual para emulación de adversarios y caza de amenazas.

### Herramientas todo-en-uno

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  El toolkit extraerá rápidamente evidencia digital de múltiples fuentes mediante el análisis de discos duros, imágenes de disco, vertederos de memoria, respaldos iOS, Blackberry y Android, UFED, JTAG y vertederos de chip-off.
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - Suite de herramientas basadas en CIM/WMI que permiten realizar operaciones de respuesta a incidentes y caza remotamente en todas las versiones de Windows.
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - CIRTKit no es sólo una colección de herramientas, sino también un marco para ayudar en la unificación continua de los procesos de investigación de Incident Response y Forensics.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage recopila y analiza los datos de host para determinar si está comprometido. Su sistema de puntuación y el motor de recomendación le permiten concentrarse rápidamente en los artefactos importantes. Puede importar datos de su herramienta de recogida, imágenes de disco y otros coleccionistas (como KAPE). Puede funcionar en el escritorio de un examinador o en un modelo de servidor. Desarrollado por Sleuth Kit Labs, que también hace Autopsia.
* [Cynative](https://github.com/cynative/cynative) - Agente de investigación profunda para su infra - sandboxed, sólo lectura, cubre AWS, GCP, Azure, K8s, GitHub y GitLab.
* [Dissect](https://github.com/fox-it/dissect) - Dissect es un marco digital de respuesta a incidentes forenses que le permite acceder y analizar rápidamente los artefactos forenses de varios formatos de disco y archivos, desarrollado por Fox-IT (parte del Grupo NCC).
* [Doorman](https://github.com/mwielgoszewski/doorman) - osquery gestor de flotas que permite la gestión remota de configuraciones de osquería recuperadas por nodos. Aprovecha la configuración TLS de osquery, logger y los endpoints de lectura/escritura distribuidos, para dar visibilidad a los administradores en una flota de dispositivos con mínima sobrecarga e intrusividad.
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - Aplicación ampliable basada en Windows que proporciona automatización de flujo de trabajo, gestión de casos y funcionalidad de respuesta de seguridad.
* [Flare](https://github.com/fireeye/flare-vm) - Una distribución de seguridad totalmente personalizable basada en Windows para el análisis de malware, respuesta a incidentes, pruebas de penetración.
* [Fleetdm](https://github.com/fleetdm/fleet) - Plataforma de vigilancia del estado de los anfitriones para expertos en seguridad. Aprovechando el proyecto de osquería de prueba de batalla de Facebook, Fleetdm ofrece actualizaciones continuas, características y respuestas rápidas a grandes preguntas.
* [GRR Rapid Response](https://github.com/google/grr) - Marco de respuesta de incidentes centrado en los forenses en directo remotos. Se compone de un agente pitón (cliente) que se instala en los sistemas de destino, y una infraestructura de servidor python que puede gestionar y hablar con el agente. Además del cliente Python API incluido, [PowerGRR](https://github.com/swisscom/PowerGRR) proporciona una biblioteca cliente API en PowerShell trabajando en Windows, Linux y macOS para la automatización y scripting GRR.
* [IRIS](https://github.com/dfir-iris/iris-web) - IRIS es una plataforma de colaboración web para analistas de respuesta a incidentes que permite compartir investigaciones a nivel técnico.
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - Digital Forensics Investigation Platform
* [Limacharlie](https://www.limacharlie.io/) - Plataforma de seguridad Endpoint compuesta por una colección de pequeños proyectos que trabajan juntos que le da un entorno de bajo nivel (Windows, OSX, Linux, Android e iOS) para gestionar y empujar módulos adicionales en memoria para ampliar su funcionalidad.
* [Matano](https://github.com/matanolabs/matano): Open source serverless security lake platform on AWS that lets you ingest, store, and analyse petabytes of security data into an Apache Iceberg data lake and run realtime Python detections as code.
* [MozDef](https://github.com/mozilla/MozDef) - Automatiza el proceso de manejo de incidentes de seguridad y facilita las actividades en tiempo real de los manipuladores de incidentes.
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - Programa CLI para automatizar la configuración, configuración y uso de soluciones de ciberseguridad.
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - Aplicación construida para la presentación asincrónica de datos forenses utilizando ElasticSearch como backend. Está diseñado para ingerir colecciones Redline.
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - Otro popular marco forense de código abierto. Este marco se construyó en la plataforma Linux y utiliza la base de datos postgreSQL para almacenar datos.
* [osquery](https://osquery.io/) - Haga preguntas fácilmente sobre su infraestructura Linux y macOS usando un lenguaje de consulta similar a SQL; el proporcionado *paquete de respuesta a incidentes* le ayuda a detectar y responder a las infracciones.
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - Proporciona capacidades de investigación de host a los usuarios para encontrar signos de actividad maliciosa mediante el análisis de memoria y archivos, y el desarrollo de un perfil de evaluación de amenazas.
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - Una extensión de navegador potente y fácil de usar que simplifica las investigaciones para profesionales de seguridad.
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - Unix y Windows herramienta basada que ayuda en el análisis forense de las computadoras. Viene con varias herramientas que ayudan en los forenses digitales. Estas herramientas ayudan a analizar imágenes de disco, realizar análisis en profundidad de sistemas de archivos y otras cosas.
* [TheHive](https://thehive-project.org/) - Scalable 3-in-1 open source and free solution designed to make life easier for SOCs, CSIRTs, CERTs and any information security practitioner dealing with security incidents that need to be investigated and acted upon swiftly.
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - Herramienta de respuesta de incidentes multiplataforma con 28 casos de uso preconstruidos en un solo binario de instalación cero. Recoge memoria, disco, red y artefactos en la nube con generación de cronología automatizada.
* [Velociraptor](https://github.com/Velocidex/velociraptor) - Herramienta de colección y visibilidad de endpoint
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - Herramienta forense para la clonación e imagen de disco. Se puede utilizar para encontrar archivos borrados y análisis de disco.
* [Zentral](https://github.com/zentralopensource/zentral) - Combina las potentes características de inventario de endpoint de la osquería con un marco de notificación y acción flexible. Esto permite identificar y reaccionar a los cambios en los clientes de OS X y Linux.

### Libros

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - El libro de Steve Anson sobre Respuesta de Incidentes.
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - Detectar Malware y Amenazas en Windows, Linux y Mac Memory.
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - por Jeff Bollinger, Brandon Enright y Matthew Valites.
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - por Gerard Johansen.
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - Por Scott J. Roberts.
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - La guía definitiva de respuesta a incidentes.
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - Una gran guía para construir una estrategia de respuesta a incidentes para ataques ransomware. Por Oleg Skulkin.
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - Gran referencia para construir un plan de respuesta a incidentes basado también en la Inteligencia de la Amenaza. Por Roberto Martínez.
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - Por Scott J. Roberts, Rebekah Brown.
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - Gran referencia para emergencias.
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - La guía definitiva para practicar la memoria forense. Por Svetlana Ostrovskaya y Oleg Skulkin.
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - El libro de Richard Bejtlich sobre IR.

### Comunidades

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - Community of 8,000+ working professionals from Law Enforcement, Private Sector, and Forensic Vendors. ¡Además, muchos estudiantes y hobbyistas! Guía [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/).
* [Slack DFIR channel](https://dfircommunity.slack.com) - Slack DFIR Canal de comunicaciones - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community).

### Herramientas de creación de imágenes de disco

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - Herramienta forense cuyo objetivo principal es prever datos recuperables de un disco de cualquier tipo. FTK Imager también puede adquirir memoria en vivo y paging archivo en sistemas de 32bit y 64bit.
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - Bitscout de Vitaly Kamluk le ayuda a construir su imagen personalizable totalmente confiable LiveCD/LiveUSB para ser utilizado para forenses digitales remotos (o tal vez cualquier otra tarea de su elección). Está destinado a ser transparente y monitorable por el propietario del sistema, forense, personalizable y compacto.
* [GetData Forensic Imager](http://www.forensicimager.com/) - Programa basado en Windows que adquirirá, convertirá o verificará una imagen forense en uno de los siguientes formatos de archivo forenses comunes.
* [Guymager](http://guymager.sourceforge.net) - Imagen forense gratuita para la adquisición de medios en Linux.
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - ACQUIRE by Magnet Forensics permite realizar varios tipos de adquisiciones de disco en Windows, Linux y OS X, así como sistemas operativos móviles.

### Evidence Collection

* [Acquire](https://github.com/fox-it/acquire) - Adquirir es una herramienta para reunir rápidamente artefactos forenses de imágenes de disco o un sistema en vivo en un contenedor ligero. Esto hace que Acquire sea una herramienta excelente para, entre otros, acelerar el proceso de triaje forense digital. Utiliza [Dissect](https://github.com/fox-it/dissect) para reunir esa información del disco crudo, si es posible.
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - El proyecto artifactcollector proporciona un software que recoge artefactos forenses en sistemas.
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - Herramienta forense de computadora que escanea una imagen de disco, un archivo, o un directorio de archivos y extrae información útil sin analizar el sistema de archivos o estructuras de sistema de archivos. Debido a ignorar la estructura del sistema de archivos, el programa se distingue en términos de velocidad y profundidad.
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - Lista simplificada de analizadores para analizar rápidamente un archivo de imagen forense (`dd`, E01, `.vmdk`, etc) y nueve informes de salida.
* [CyLR](https://github.com/orlikoski/CyLR) - La herramienta CyLR recopila artefactos forenses de hosts con sistemas de archivos NTFS de forma rápida, segura y minimiza el impacto en el host.
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - Repositorio de artefactos forenses digitales
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - Windows Batch script y un script Unix Bash para recopilar datos forenses completos durante la respuesta a incidentes.
* [Live Response Collection](https://www.brimorlabs.com/tools/) - Herramienta automatizada que recopila datos volátiles de Windows, OSX y \*sistemas operativos basados en nix.
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - Utilidad de línea de comandos (que funciona con o sin instancias de Amazon EC2) para paralelizar la adquisición de memoria remota.
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - Adquirir, recortar e investigar evidencia remota a través de acceso legible iSCSI
* [UAC](https://github.com/tclahr/uac) - UAC (Unix-like Artifacts Collector) es un script de colección Live Response para Incident Response que hace uso de binarios nativos y herramientas para automatizar la colección de artefactos AIX, Android, ESXi, FreeBSD, Linux, macOS, NetBSD, NetScaler, OpenBSD y Solaris.

### Incident Management

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - Un sistema SOAR gratuito que ayuda a automatizar el manejo de alerta y los procesos de respuesta a incidentes.
* [CyberCPR](https://www.cybercpr.com) - Herramienta de gestión de incidentes comunitarios y comerciales con Need-to-Know construida para apoyar el cumplimiento del RGPD mientras se manejan incidentes sensibles.
* [Cyphon](https://medevel.com/cyphon/) - Cyphon elimina los dolores de cabeza de la gestión de incidentes al racionalizar una multitud de tareas relacionadas a través de una sola plataforma. Recibe, procesos y triages eventos para proporcionar una solución completa para su flujo de trabajo analítico — aggregating data, bundling and prioritizing alerts, and empowering anals to investigate and document incidents.
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - Plataforma de orquestación, automatización y respuesta de seguridad de Paloalto con gestión completa del ciclo de vida de Incidentes y muchas integraciones para mejorar las automatizaciónes.
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - Marco para orquestar la recolección, procesamiento y exportación de datos forenses.
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - Incident Response tracking application handling one or more incidents via cases and tasks with a lot of affected systems and artifacts.
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - Plataforma de gestión de incidentes de ciberseguridad diseñada con agilidad y velocidad en mente. Permite crear fácilmente, rastrear y reportar incidentes de ciberseguridad y es útil para CSIRTs, CERTs y SOCs por igual.
* [RTIR](https://www.bestpractical.com/rtir/) - Request Tracker for Incident Response (RTIR) es el principal sistema de manipulación de incidentes de código abierto dirigido a equipos de seguridad informática. Trabajamos con más de una docena de equipos CERT y CSIRT en todo el mundo para ayudarle a manejar el volumen cada vez mayor de informes de incidentes. RTIR se basa en todas las características de Request Tracker.
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - Incident Response collaboration and knowledge capture tool focused on flexibility and ease of use. Nuestro objetivo es añadir valor al proceso de respuesta al incidente sin cargar al usuario.
* [Shuffle](https://github.com/frikky/Shuffle) - Una plataforma de automatización de seguridad de propósito general centrada en la accesibilidad.
* [threat_note](https://github.com/defpoint/threat_note) - Ligero cuaderno de investigación que permite a los investigadores de seguridad la capacidad de registrar y recuperar indicadores relacionados con su investigación.
* [Zenduty](https://www.zenduty.com) - Zenduty es una nueva plataforma de gestión de incidentes que proporciona alertas de incidentes de extremo a extremo, orquestación de respuesta y gestión de locales, dando a los equipos mayor control y automatización sobre el ciclo de vida de gestión de incidentes.

### Bases de conocimientos

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - Digital Forensics Artifact Knowledge Base
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - Ventanas Eventos Ataque Muestras
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - Base de conocimientos del Registro de Windows

### Distribución de Linux

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - VMware-based appliance used for digital investigation and acquisition and is built entirely from public domain software. Entre las herramientas contenidas en ADIA se encuentran Autopsia, el Kit Sleuth, el Marco Forense Digital, log2timeline, Xplico y Wireshark. La mayoría del mantenimiento del sistema utiliza Webmin. Está diseñado para investigaciones y adquisiciones digitales de tamaño pequeño a medio. El dispositivo se ejecuta bajo Linux, Windows y Mac OS. Tanto i386 (32-bit) como x86_64 (64-bit) versiones están disponibles.
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - Contiene numerosos instrumentos que ayudan a los investigadores durante su análisis, incluida la recopilación de pruebas forenses.
* [CCF-VM](https://github.com/rough007/CCF-VM) - CyLR CDQR Máquina Virtual Forense (CCF-VM): Una solución completa para analizar los datos recogidos, lo que facilita la búsqueda con búsquedas comunes incorporadas, permite la búsqueda de hosts individuales y múltiples simultáneamente.
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - Distribución Linux que incluye una vasta colección de aplicaciones de seguridad de red de código abierto de mejor calidad útiles para el profesional de seguridad de la red.
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - Distribución Linux centrada en la seguridad con 140+ herramientas de seguridad forense y ofensiva preinstaladas, núcleo endurecido personalizado y flujos de trabajo de respuesta integrada.
* [PALADIN](https://sumuri.com/software/paladin/) - Distribución de Linux modificada para realizar diversas tareas forenses de una manera forense sólida. Viene con muchas herramientas forenses de código abierto incluidas.
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - Distro especial de Linux dirigido a monitoreo de seguridad de red con herramientas de análisis avanzadas.
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - Demuestra que las capacidades avanzadas de respuesta a incidentes y las técnicas forenses digitales de inmersión profunda a las intrusiones pueden lograrse utilizando herramientas de código abierto de vanguardia que están disponibles libremente y se actualizan con frecuencia.

### Linux Evidence Collection

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - FastIR para Linux recopila diferentes artefactos en Linux en vivo y registra los resultados en archivos CSV.
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - Herramienta de código abierto para la adquisición de memoria rápida para Linux escrita en Rust. Generar descargas de memoria completa de máquinas Linux.

### Herramientas de análisis de registros

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - AppCompatProcessor ha sido diseñado para extraer valor adicional de los datos AppCompat / AmCache de toda la empresa más allá de las técnicas clásicas de apilado y de aglomeración.
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT-Hunter es la herramienta de caza de amenazas para los registros de eventos de ventanas.
* [Chainsaw](https://github.com/countercept/chainsaw) - Chainsaw proporciona una poderosa capacidad de ‘primera respuesta’ para identificar rápidamente amenazas dentro de los registros de eventos de Windows.
* [Event Log Explorer](https://eventlogxp.com/) - Herramienta desarrollada para analizar rápidamente los archivos de registro y otros datos.
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - Ver, analizar y monitorear eventos registrados en los registros de eventos de Microsoft Windows con esta herramienta GUI.
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - Hayabusa es un registro de eventos de Windows generador de línea temporal forense rápida y herramienta de caza de amenazas creada por el grupo Yamato Security en Japón.
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - Herramienta de fusión y análisis de inteligencia de amenazas que integra los datos de amenazas con soluciones SIEM. Los usuarios pueden aprovechar de inmediato la información sobre amenazas para la vigilancia de la seguridad y el informe sobre incidentes (IR) en el flujo de trabajo de sus operaciones de seguridad existentes.
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - Realizar consultas SQL contra datos de registro estructurados: registros de servidores, Windows Events, sistema de archivos, Active Directory, log4net logs, texto separado coma/tab, archivos XML o JSON. También proporciona un GUI a Microsoft LogParser 2.2 con potentes elementos de interfaz de usuario: editor de sintaxis, cuadrícula de datos, tabla de pivotes, panel de control, gestor de consultas y más.
* [Lorg](https://github.com/jensvoid/lorg) - Herramienta para el análisis avanzado de seguridad de los archivos de HTTPD y forenses.
* [Logdissect](https://github.com/dogoncouch/logdissect) - Utilidad CLI y API Python para analizar archivos de registro y otros datos.
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - Análisis de registros de alta velocidad y herramienta forense con pares multiformato, emparejamiento de patrones, reconstrucción de línea de tiempo y detección de anomalías para respuesta a incidentes.
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - Herramienta para investigar el logo malicioso de Windows visualizar y analizar el registro de eventos de Windows.
* [Sigma](https://github.com/SigmaHQ/sigma) - Formato de firma genérico para los sistemas SIEM ya conteniendo un extenso ruleset.
* [StreamAlert](https://github.com/airbnb/streamalert) - Marco de análisis de datos de registro en tiempo real, capaz de ingerir fuentes de datos personalizadas y activar alertas usando lógica definida por el usuario.
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearch hace que el análisis de registro de eventos de Windows sea más eficaz y con menos tiempo consumiendo por agregación de registros de eventos.
* [WELA](https://github.com/Yamato-Security/WELA) - Windows Event Log Analyzer pretende ser el cuchillo del ejército suizo para los registros de eventos de Windows.
* [Zircolite](https://github.com/wagga40/Zircolite) - Una herramienta de detección independiente y rápida basada en SIGMA para EVTX o JSON.

### Herramientas de análisis de memoria

* [AVML](https://github.com/microsoft/avml) - Una herramienta de adquisición de memoria volátil portátil para Linux.
* [Evolve](https://github.com/JamesHabben/evolve) - Interfaz web para el Marco de la Memoria de Volatilidad.
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - Análisis avanzado de memoria para Windows x64 con soporte de hipervisor anidado.
* [LiME](https://github.com/504ensicsLabs/LiME) - Módulo de kernel Loadable (LKM), que permite la adquisición de memoria volátil de dispositivos basados en Linux y Linux, anteriormente denominado DMD.
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScan es un plugin de volatilidad extrae datos de configuración de malware conocido. La volatilidad es un marco forense de memoria de código abierto para la respuesta de incidentes y el análisis de malware. Esta herramienta busca malware en imágenes de memoria y datos de configuración de dumps. Además, esta herramienta tiene una función para enumerar cadenas a las que se refiere el código malicioso.
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - Software forense de memoria libre que ayuda a los socorristas a encontrar el mal en la memoria en vivo. Memoryze puede adquirir y/o analizar imágenes de memoria, y en sistemas en vivo, puede incluir el archivo de paging en su análisis.
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Memoryze para Mac es Memoryze pero luego para Macs. Sin embargo, un menor número de características.
* [MemProcFS]https://github.com/ufrisk/MemProcFS) - MemProcFS es una manera fácil y conveniente de ver la memoria física como archivos en un sistema de archivos virtual.
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochi es un marco de código abierto para el análisis de la memoria forense colaborativo.
* [Rekall](http://www.rekall-forensic.com/) - Herramienta de código abierto (y biblioteca) para la extracción de artefactos digitales de muestras de memoria volátil (RAM).
* [Volatility](https://github.com/volatilityfoundation/volatility) - Marco forense de memoria avanzada.
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - El marco de extracción de memoria volátil (éctor de volatilidad)
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - Herramienta de automatización para investigadores corta todas las tareas de adivinanza y manual fuera de la fase de extracción binaria, o para ayudar al investigador en los primeros pasos de realizar una investigación de análisis de memoria.
* [VolDiff](https://github.com/aim4r/VolDiff) - Malware Memory Footprint Análisis basado en la volatilidad.
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - Memoria forense y herramienta de ingeniería inversa utilizada para analizar la memoria volátil que ofrece la capacidad de analizar el kernel de Windows, controladores, DLLs y memoria virtual y física.

### Herramientas de imagen de memoria

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - Pequeña herramienta forense gratuita para extraer de forma fiable todo el contenido de la memoria volátil del ordenador – incluso si está protegido por un sistema antidepuración o antidumping activo.
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - Script para volcar la memoria de Linux y crear perfiles de volatilidad.
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Herramienta de adquisición de memoria rápida para Windows (x86, x64, ARM64). Generar descargas de memoria completa de máquinas Windows.
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - Herramienta de imagen gratuita diseñada para capturar la memoria física del ordenador del sospechoso. Soporta versiones recientes de Windows.
* [OSForensics](http://www.osforensics.com/) - Herramienta para adquirir memoria en vivo en sistemas de 32 bits y 64 bits. Se puede hacer un vertedero del espacio de memoria de un proceso individual o del vertedero de memoria física.

### OSX Evidence Collection

* [Knockknock](https://objective-see.com/products/knockknock.html) - Muestra elementos persistentes (scriptos, comandos, binarios, etc.) que se establecen para ejecutar automáticamente en OSX.
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - Marco forense basado en Plugin para el triaje rápido de mac que funciona en máquinas en vivo, imágenes de disco o archivos de artefacto individuales.
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - Herramienta forense gratuita de Mac OS X.
* [OSX Collector](https://github.com/yelp/osxcollector) - Solución de salida del auditor OSX para respuesta en vivo.
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - Una herramienta para ver los eventos en Apple Endpoint Security Framework (ESF) en tiempo real.

### Otras listas

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - Recopilación de los recursos de identificación de eventos útiles para Digital Forensics and Incident Response.
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - Una lista curada de impresionantes herramientas y recursos de análisis forense.
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - Colección de herramientas
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - Una lista actualizada de herramientas forenses creadas por Eric Zimmerman, instructor del Instituto SANS.
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - Lista colectiva de API públicas JSON para uso en seguridad.

### Otras herramientas

* [Cortex](https://thehive-project.org) - Cortex le permite analizar observables como IP y direcciones de correo electrónico, URLs, nombres de dominio, archivos o hashes uno por uno o en modo masivo utilizando una interfaz web. Los analistas también pueden automatizar estas operaciones utilizando su API REST.
* [Crits](https://crits.github.io/) - Herramienta basada en la web que combina un motor analítico con una base de datos de amenazas cibernéticas.
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - Herramienta DFIR desarrollada por el SIRT de Netflix que permite que un investigador alcance rápidamente un compromiso a través de las instancias de la nube (Linux instances on AWS, actualmente) durante un incidente y recortar eficientemente esas instancias para acciones de seguimiento mostrando diferencias contra una base de referencia.
* [domfind](https://github.com/diogo-fernan/domfind) - Python DNS rastreador para encontrar nombres de dominio idénticos bajo diferentes TLDs.
* [Fileintel](https://github.com/keithjjones/fileintel) - Saca inteligencia por archivo hash.
* [HELK](https://github.com/Cyb3rWard0g/HELK) - Plataforma de caza de amenazas.
* [Hindsight](https://github.com/obsidianforensics/hindsight) - Historia de Internet forenses para Google Chrome / Cromo.
* [Hostintel](https://github.com/keithjjones/hostintel) - Saca inteligencia por huésped.
* [IPASIS](https://ipasis.com/) - API de reputación IP en tiempo real y validación de correo electrónico para investigar interacciones sospechosas. Devuelve una puntuación de confianza de interacción (0-100) que combina la detección de VPN/proxy/Tor con la evaluación del riesgo de email en una sola llamada de API.
* [imagemounter](https://github.com/ralphje/imagemounter) - La utilidad de la línea de comandos y el paquete Python para facilitar el (un) montaje de imágenes de disco forense.
* [Kansa](https://github.com/davehull/Kansa/) - Marco de respuesta de incidentes modulares en PowerShell.
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - MFT directorio árbol reconstrucción &gt; información récord.
* [Munin](https://github.com/Neo23x0/munin) - Checker en línea para VirusTotal y otros servicios.
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponse es un módulo PowerShell centrado en la contención y remediación específicas durante la respuesta a incidentes de seguridad.
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - Muy simple multi-threaded muchas-rules a muchos-files YARA escanear Python script para zoológicos de malware y IR.
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - Permite escanear discos y memoria para COI usando YARA en Windows, Linux y OS X.
* [RaQet](https://raqet.github.io/) - Una herramienta de adquisición remota y triaging no convencional que permite triturar un disco de un equipo remoto (cliente) que se reinicia con un sistema operativo forense construido a propósito.
* [Raccine](https://github.com/Neo23x0/Raccine) - Una protección simple Ransomware
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - Recoger datos forenses sobre MySQL cuando ocurren problemas.
* [Scout2](https://nccgroup.github.io/Scout2/) - Herramienta de seguridad que permite a los administradores de Amazon Web Services evaluar la postura de seguridad de su entorno.
* [Stenographer](https://github.com/google/stenographer) - Solución de captura de paquete que pretende recortar rápidamente todos los paquetes al disco, luego proporcionar acceso rápido y sencillo a los subconjuntos de esos paquetes. Almacena tanto la historia como sea posible, manejando el uso del disco y eliminando cuando se golpean los límites del disco. Es ideal para capturar el tráfico justo antes y durante un incidente, sin la necesidad explícita de almacenar todo el tráfico de la red.
* [sqhunter](https://github.com/0x4d31/sqhunter) - Cazador de amenazas basado en osquery y Salt Open (SaltStack) que pueden emitir consultas ad-hoc o distribuidas sin necesidad de plugin tls de osquery. sqhunter le permite buscar enchufes de red abiertos y comprobarlos contra fuentes de inteligencia amenazadas.
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - Plantilla de archivo de configuración de Sysmon con localización de eventos de alta calidad predeterminada
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - Un repositorio de módulos de configuración de sismón
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - Trazado extendido para apoyar las actividades de los operadores de CSIRT (o CERT). Por lo general, el equipo de CSIRT tiene que manejar incidentes basados en direcciones IP recibidas. Creado por Computer Emergency Response Center Luxemburgo.
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - Utilidad de Windows (poorly maintained or no longer maintained) para enviar muestras de virus a proveedores AV.

### Playbooks

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR Runbook Muestras destinadas a ser personalizado por cada entidad que los utiliza. Las tres muestras son: "Ataque de DoS o DDoS", "expersión potencial", y "acceso no deseado a un cubo de Amazon S3".
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - Colección de PLaybooks contraactivos.
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - Una colección de tarjetas de batalla de la respuesta de incidentes cibernéticos
* [IRM](https://github.com/certsocietegenerale/IRM) - Métodos de respuesta de incidentes por CERT Societe Generale.
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - Documentos que describen partes del proceso PagerDuty Incident Response. Proporciona información no sólo sobre la preparación para un incidente, sino también qué hacer durante y después. La fuente está disponible [GitHub](https://github.com/PagerDuty/incident-response-docs).
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - Phantom Community Playbooks para Splunk pero también personalizable para otro uso.
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - Playbook para ayudar al desarrollo de técnicas e hipótesis para campañas de caza.

### Herramientas de extracción de procesos

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - Bombas cualquier funcionamiento Win32 procesa la imagen de memoria en la mosca.
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - Herramienta que le permite depositar el contenido de memoria de un proceso a un archivo sin detener el proceso.

### Herramientas de Sandboxing/Reversing

* [Any Run](https://app.any.run/) - Servicio interactivo de análisis de malware en línea para la investigación dinámica y estática de la mayoría de los tipos de amenazas utilizando cualquier entorno.
* [CAPA](https://github.com/mandiant/capa) - detecta capacidades en archivos ejecutables. Lo ejecutas contra un archivo PE, ELF, .NET o shellcode y te dice lo que piensa que el programa puede hacer.
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - Configuración de malware y extracción de carga.
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - Fuente abierta Herramienta de sandboxing altamente configurable.
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - Heavily modificado Cuckoo tenedor desarrollado por la comunidad.
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - Biblioteca Python para controlar una caja de arena modificada de cuco.
* [Cutter](https://github.com/rizinorg/cutter) - Plataforma de ingeniería inversa de código libre y abierto propulsada por rizin.
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - Programa Marco de ingeniería inversa.
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - Libre potente caja de arena en línea por CrowdStrike.
* [Intezer](https://analyze.intezer.com/#/) - Intezer Analyze invierte en binarios de Windows para detectar similitudes de microcódigo a amenazas conocidas, con el fin de proporcionar resultados precisos pero fáciles de entender.
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - Joe Sandbox detecta y analiza posibles archivos maliciosos y URLs en Windows, Android, Mac OS, Linux e iOS para actividades sospechosas; proporcionando informes de análisis completos y detallados.
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - Marco de análisis estadístico que automatiza el proceso de extracción de características clave de varios formatos de archivo diferentes.
* [Metadefender Cloud](https://www.metadefender.com) - Plataforma de inteligencia de amenazas gratuitas que proporciona multicanning, saneamiento de datos y evaluación de vulnerabilidad de archivos.
* [Radare2](https://github.com/radareorg/radare2) - Marco de ingeniería inversa y herramientas de línea de comandos.
* [Reverse.IT](https://www.reverse.it/) - Dominio alternativo para la herramienta híbrido-análisis proporcionado por CrowdStrike.
* [Rizin](https://github.com/rizinorg/rizin) - Marco de ingeniería inversa de UNIX y conjunto de herramientas de línea de comandos
* [StringSifter](https://github.com/fireeye/stringsifter) - Una herramienta de aprendizaje automático que clasifica cadenas basadas en su relevancia para el análisis de malware.
* [Threat.Zone](https://app.threat.zone) - Plataforma de análisis de amenazas basadas en la nube que incluye sandbox, CDR y análisis interactivo para investigadores.
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrie utiliza el comportamiento de tiempo de ejecución y cientos de características de un archivo para realizar análisis.
* [Viper](https://github.com/viper-framework/viper) - Marco de análisis binario basado en Python, que funciona bien con Cuckoo y YARA.
* [Virustotal](https://www.virustotal.com) - Servicio gratuito en línea que analiza archivos y URLs que permiten la identificación de virus, gusanos, troyanos y otros tipos de contenido malicioso detectados por motores antivirus y escáneres web.
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - Biblioteca de visualización de código abierto y herramientas de línea de comandos para registros (Cuckoo, Procmon, más por venir).
* [Yomi](https://yomi.yoroi.company) - Free MultiSandbox gestionado y acogido por Yoroi.

### Herramientas de escáner

* [Fenrir](https://github.com/Neo23x0/Fenrir) - Escáner IOC simple. Permite escanear cualquier sistema Linux/Unix/OSX para COI en bash simple. Creado por los creadores de THOR y LOKI.
* [LOKI](https://github.com/Neo23x0/Loki) - Escáner IR gratuito para escanear endpoint con reglas yara y otros indicadores (IOCs).
* [Spyre](https://github.com/spyre-project/spyre) - Sencillo escáner IOC basado en YARA escrito en Go

### Herramientas de línea de tiempo

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - Platform developed to build easily a detailed timeline of an incident.
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - Herramienta gratuita disponible desde Fire/Mandiant que mostrará el archivo log/text que puede resaltar áreas en el gráfico, que correspondió a una palabra clave o frase. Bien por el tiempo recubriendo una infección y lo que se hizo después del compromiso.
* [Morgue](https://github.com/etsy/morgue) - Aplicación web PHP por Etsy para gestionar postmortems.
* [Plaso](https://github.com/log2timeline/plaso) -  un motor de backend basado en Python para el log2timeline herramienta.
* [Timesketch](https://github.com/google/timesketch) - Herramienta de código abierto para el análisis de cronogramas forenses colaborativos.

### Videos

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - Presentado por Bruce Schneier en OWASP AppSecUSA 2015.

### Colección de pruebas de Windows

* [AChoir](https://github.com/OMENScan/AChoir) - Marco / herramienta de selección para estandarizar y simplificar el proceso de scripting utilidades de adquisición en vivo para Windows.
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - Aplicación de consola de Windows ligera diseñada para ayudar en la reunión de información del sistema para la respuesta de incidentes y compromisos de seguridad. Cuenta con numerosos módulos y formatos de salida.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage tiene una herramienta de recogida ligera que es gratuita. Recopila archivos fuente (como urticaria de registro y registros de eventos), pero también los analiza en el host en vivo para que también pueda recoger los ejecutables que los elementos de inicio, programados, tareas, etc. se refieren. Su salida es un archivo JSON que se puede importar en la versión gratuita de Cyber Triage. Cyber Triage está hecho por Sleuth Kit Labs, que también hace Autopsia. 
* [DFIR ORC](https://dfir-orc.github.io/) - DFIR ORC es una colección de herramientas especializadas dedicadas a analizar y recoger artefactos críticos como el MFT, urticaria de registro o registros de eventos. DFIR ORC recopila datos, pero no lo analiza: no está destinado a recortar máquinas. Proporciona una instantánea forense relevante de máquinas que ejecutan Microsoft Windows. El código se puede encontrar en [GitHub](https://github.com/DFIR-ORC/dfir-orc).
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - Herramienta que recoge diferentes artefactos en sistemas Windows en vivo y registra los resultados en archivos csv. Con los análisis de estos artefactos, se puede detectar un compromiso temprano.
* [Fibratus](https://github.com/rabbitstack/fibratus) - Herramienta para la exploración y localización del kernel de Windows.
* [Hoarder](https://github.com/muteb/Hoarder) - Recopilar los artefactos más valiosos para investigaciones forenses o de respuesta a incidentes.
* [IREC](https://binalyze.com/products/irec-free/) - Todo en uno IR Evidence Collector que captura RAM Image, $MFT, EventLogs, WMI Scripts, Registry Hives, System Restore Points y mucho más. Es GRATIS, relámpago rápido y fácil de usar.
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponse es una herramienta de respuesta en vivo para la colección dirigida.
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - Herramienta gratuita de Mandiant para recopilar datos del sistema anfitrión y reportar la presencia de Indicadores de Compromiso (IOCs). Soporte sólo para Windows. Ya no se mantiene. Sólo totalmente compatible con Windows 7 / Windows Server 2008 R2.
* [IRTriage](https://github.com/AJMartel/IRTriage) - Triage de respuesta de incidentes - Colección de pruebas de Windows para análisis forense.
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - Kroll Artifact Parser y Extractor (KAPE) por Eric Zimmerman. Una herramienta de triage que encuentra los artefactos digitales más frecuentes y luego los analiza rápidamente. Grande y minucioso cuando el tiempo es de la esencia.
* [LOKI](https://github.com/Neo23x0/Loki) - Escáner IR gratuito para escanear endpoint con reglas yara y otros indicadores (IOCs).
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - Triage basado en PowerShell y caza de amenazas para Windows.
* [Panorama](https://github.com/AlmCo/Panorama) - Resumen del incidente rápido en sistemas Windows en vivo.
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - Plataforma forense de disco en vivo, utilizando PowerShell.
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSRecon recopila datos de un host remoto de Windows usando PowerShell (v2 o posterior), organiza los datos en carpetas, tiene todos los datos extraídos, tiene PowerShell y varias propiedades del sistema, y envía los datos al equipo de seguridad. Los datos pueden ser empujados a una parte, enviados por correo electrónico o retenidos localmente.
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - Herramienta de código abierto, escrita en Perl, para la extracción/parificación de información (keys, valores, datos) de la Secretaría y presentarla para su análisis.
