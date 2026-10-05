# Потрясающий ответ на инцидент [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> Список инструментов и ресурсов для реагирования на инциденты безопасности, предназначенных для помощи аналитикам по безопасности. [DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html) команды.

Команды цифровой криминалистики и реагирования на инциденты (DFIR) представляют собой группы людей в организации, ответственные за управление реакцией на инцидент безопасности, включая сбор доказательств инцидента, устранение его последствий и осуществление контроля для предотвращения повторения инцидента в будущем.

## Содержание

- [Эмуляция противника](#adversary-emulation)
- [Инструменты All-In-One](#all-in-one-tools)
- [Книги](#books)
- [Общины](#communities)
- [Инструменты создания образов Disk](#disk-image-creation-tools)
- [Сбор доказательств](#evidence-collection)
- [Управление инцидентами](#incident-management)
- [Базы знаний](#knowledge-bases)
- [Распределения Linux](#linux-distributions)
- [Сбор доказательств Linux](#linux-evidence-collection)
- [Инструменты лог-анализа](#log-analysis-tools)
- [Инструменты анализа памяти](#memory-analysis-tools)
- [Инструменты визуализации памяти](#memory-imaging-tools)
- [Свидетельства OSX](#osx-evidence-collection)
- [Другие списки](#other-lists)
- [Другие инструменты](#other-tools)
- [Игровые книги](#playbooks)
- [Инструменты Dump Tools](#process-dump-tools)
- [Инструменты для песочницы/обновления](#sandboxingreversing-tools)
- [Инструменты сканирования](#scanner-tools)
- [Инструменты Timeline](#timeline-tools)
- [Видео](#videos)
- [Сбор доказательств Windows](#windows-evidence-collection)

## Коллекция инструментов IR

### Эмуляция противника

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - Скрипт Windows Batch, который использует набор инструментов и выводит файлы, чтобы система выглядела так, как будто она была скомпрометирована.
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - Небольшие и очень портативные тесты обнаружения, отображаемые в MITRE ATT & CK Framework.
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - Автоматизированные тактические методы и процедуры. Перезапуск сложных последовательностей вручную для регрессионных тестов, оценки продуктов, генерации данных для исследователей.
* [Caldera](https://github.com/mitre/caldera) - Автоматизированная система эмуляции противника, которая выполняет посткомпромиссное состязательное поведение в сетях Windows Enterprise. Он генерирует планы во время работы с использованием системы планирования и предварительно сконфигурированной модели противника на основе проекта Adversarial Tactics, Techniques & Common Knowledge (ATT & CKTM).
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - Модульный, управляемый меню, кроссплатформенный инструмент для создания повторяемых, отложенных по времени распределенных событий безопасности. Легко создавать пользовательские цепочки событий для буров Blue Team и отображения датчиков / оповещений. Красные команды могут создавать приманки, отвлекающие факторы и приманки для поддержки и масштабирования своих операций.
* [Metta](https://github.com/uber-common/metta) - Инструмент обеспечения готовности к информационной безопасности для проведения состязательного моделирования.
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - Легкая утилита используется для генерации вредоносного сетевого трафика и помогает командам безопасности оценивать средства управления безопасностью и видимость сети.
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTA предоставляет основу сценариев, предназначенных для того, чтобы позволить синим командам тестировать свои возможности обнаружения вредоносных торговых операций, смоделированных после MITRE ATT & CK.
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - Виртуальная машина для эмуляции противника и охоты за угрозами.

### Инструменты All-In-One

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  Инструментарий быстро извлекает цифровые доказательства из нескольких источников, анализируя жесткие диски, изображения дисков, свалки памяти, резервные копии iOS, Blackberry и Android, UFED, JTAG и сливки чипов.
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - Набор инструментов на основе CIM/WMI, позволяющих удаленно выполнять операции реагирования на инциденты и охоты во всех версиях Windows.
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - CIRTKit - это не только набор инструментов, но и основа для содействия в продолжающейся унификации процессов расследования инцидентов и криминалистики.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage собирает и анализирует данные хоста, чтобы определить, скомпрометированы ли они. Это система подсчета очков и система рекомендаций, которая позволяет быстро сосредоточиться на важных артефактах. Он может импортировать данные из своего инструмента сбора, образов дисков и других коллекторов (таких как KAPE). Он может работать на рабочем столе экзаменатора или в серверной модели. Разработан компанией Sleuth Kit Labs, которая также занимается вскрытием.
* [Cynative](https://github.com/cynative/cynative) - Глубокий исследовательский агент для вашей инфраструктуры - Sandboxed, только для чтения, охватывает AWS, GCP, Azure, K8s, GitHub и GitLab.
* [Dissect](https://github.com/fox-it/dissect) - Dissect - это цифровая система судебной экспертизы и реагирования на инциденты и набор инструментов, который позволяет быстро получать доступ и анализировать судебно-медицинские артефакты из различных форматов дисков и файлов, разработанных Fox-IT (часть NCC Group).
* [Doorman](https://github.com/mwielgoszewski/doorman) - диспетчер флота запросов, который позволяет удаленно управлять конфигурациями запросов, извлекаемыми узлами. Он использует конфигурацию TLS osquery, регистратор и распределенные конечные точки чтения / записи, чтобы обеспечить администраторам видимость на флоте устройств с минимальными накладными расходами и навязчивостью.
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - Расширяемое приложение на базе Windows, которое обеспечивает автоматизацию рабочего процесса, управление делами и функциональность реагирования на безопасность.
* [Flare](https://github.com/fireeye/flare-vm) - Полностью настраиваемый дистрибутив безопасности на основе Windows для анализа вредоносных программ, реагирования на инциденты, тестирования на проникновение.
* [Fleetdm](https://github.com/fleetdm/fleet) - Современная платформа мониторинга хостов, предназначенная для экспертов по безопасности. Используя проверенный в бою проект Facebook, Fleetdm предоставляет непрерывные обновления, функции и быстрые ответы на большие вопросы.
* [GRR Rapid Response](https://github.com/google/grr) - Система реагирования на инциденты была сосредоточена на удаленной живой криминалистике. Он состоит из агента python (клиента), который установлен на целевых системах, и инфраструктуры сервера python, которая может управлять и общаться с агентом. В дополнение к клиенту Python API, [PowerGRR](https://github.com/swisscom/PowerGRR) предоставляет клиентскую библиотеку API в PowerShell, работающую на Windows, Linux и macOS для автоматизации GRR и сценариев.
* [IRIS](https://github.com/dfir-iris/iris-web) - IRIS является веб-платформой для аналитиков реагирования на инциденты, позволяющей обмениваться расследованиями на техническом уровне.
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - Платформа Digital Forensics Investigation
* [Limacharlie](https://www.limacharlie.io/) - Платформа безопасности Endpoint, состоящая из набора небольших проектов, работающих вместе, дает вам кросс-платформенную (Windows, OSX, Linux, Android и iOS) среду низкого уровня для управления и продвижения дополнительных модулей в память для расширения ее функциональности.
* [Matano](https://github.com/matanolabs/matano)Платформа без серверов с открытым исходным кодом на AWS, которая позволяет глотать, хранить и анализировать петабайт данных безопасности в озеро данных Apache Iceberg и запускать обнаружение Python в режиме реального времени в качестве кода.
* [MozDef](https://github.com/mozilla/MozDef) - Автоматизирует процесс обработки инцидентов безопасности и облегчает действия в режиме реального времени.
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - Программа CLI для автоматизации настройки, настройки и использования решений кибербезопасности.
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - Приложение, созданное для асинхронного представления судебных данных с использованием ElasticSearch в качестве бэкэнда. Он предназначен для проглатывания коллекций Redline.
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - Еще одна популярная распределенная компьютерная криминалистика с открытым исходным кодом. Этот фреймворк был построен на платформе Linux и использует базу данных postgreSQL для хранения данных.
* [osquery](https://osquery.io/) - Легко задавайте вопросы о вашей инфраструктуре Linux и macOS, используя язык запросов, похожий на SQL; *пакет реагирования на инциденты* Помогает обнаруживать и реагировать на нарушения.
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - Обеспечивает хостовые возможности для поиска пользователями признаков вредоносной активности посредством анализа памяти и файлов, а также разработки профиля оценки угроз.
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - Мощное и удобное для пользователя расширение браузера, которое упрощает расследования для специалистов по безопасности.
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - Инструмент на основе Unix и Windows, который помогает в судебно-медицинской экспертизе компьютеров. Он поставляется с различными инструментами, которые помогают в цифровой криминалистике. Эти инструменты помогают в анализе образов диска, выполнении глубокого анализа файловых систем и других вещей.
* [TheHive](https://thehive-project.org/) - Масштабируемое решение с открытым исходным кодом 3-в-1, предназначенное для облегчения жизни SOC, CSIRT, CERT и любого специалиста по информационной безопасности, имеющего дело с инцидентами безопасности, которые необходимо расследовать и быстро реагировать.
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - Кроссплатформенный инструментарий реагирования на инциденты с 28 предварительно построенными вариантами использования в одном двоичном файле с нулевой установкой. Собирает память, диск, сеть и облачные артефакты с автоматической генерацией временных линий.
* [Velociraptor](https://github.com/Velocidex/velociraptor) - Видимость конечной точки и инструмент сбора
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - Инструмент криминалистики для клонирования диска и визуализации. Его можно использовать для поиска удаленных файлов и анализа диска.
* [Zentral](https://github.com/zentralopensource/zentral) - Комбинирует мощные функции инвентаризации конечных точек osquery с гибкой системой уведомлений и действий. Это позволяет идентифицировать и реагировать на изменения в клиентах OS X и Linux.

### Книги

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - Книга Стива Энсона «Ответ на инциденты».
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - Обнаружение вредоносных программ и угроз в Windows, Linux и Mac Memory.
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - Джефф Боллинджер, Брэндон Энрайт и Мэттью Валитес.
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - Джерард Йохансен.
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - Скотт Джей Робертс.
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - Полное руководство по реагированию на инциденты.
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - Отличное руководство по созданию стратегии реагирования на инциденты для атак вымогателей. Олег Скулкин.
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - Отличная ссылка на создание плана реагирования на инциденты, основанного также на Threat Intelligence. Роберто Мартинес.
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - Скотт Робертс, Ребекка Браун.
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - Отличный справочник для ответчиков на инциденты.
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - Окончательное руководство по практике криминалистики памяти. Светлана Островская и Олег Скулкин.
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - Книга Ричарда Бейтлиха об ИК.

### Общины

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - Сообщество из более чем 8000 работающих специалистов из правоохранительных органов, частного сектора и судебных поставщиков. Кроме того, много студентов и любителей! Руководство [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/).
* [Slack DFIR channel](https://dfircommunity.slack.com) - Слэк ДФИР Общественный канал - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community).

### Инструменты создания образов Disk

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - Инструмент криминалистики, основной целью которого является предварительный просмотр восстанавливаемых данных с любого диска. FTK Imager также может приобретать живую память и файл подкачки на 32- и 64-битных системах.
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - Bitscout от Виталия Камлюка поможет вам создать полностью доверенное настраиваемое изображение LiveCD/LiveUSB, которое будет использоваться для удаленной цифровой криминалистики (или, возможно, любой другой задачи по вашему выбору). Он должен быть прозрачным и контролируемым владельцем системы, судебно обоснованным, настраиваемым и компактным.
* [GetData Forensic Imager](http://www.forensicimager.com/) - Программа на базе Windows, которая будет приобретать, конвертировать или проверять судебно-медицинское изображение в одном из следующих распространенных форматов судебных файлов.
* [Guymager](http://guymager.sourceforge.net) - Бесплатный судебный имиджер для приобретения медиа на Linux.
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - ACQUIRE от Magnet Forensics позволяет выполнять различные типы приобретений дисков в Windows, Linux и OS X, а также в мобильных операционных системах.

### Сбор доказательств

* [Acquire](https://github.com/fox-it/acquire) - Приобретение - это инструмент для быстрого сбора судебно-медицинских артефактов из изображений диска или живой системы в легкий контейнер. Это делает приобретение отличного инструмента для ускорения процесса цифровой судебной сортировки. Он использует [Dissect](https://github.com/fox-it/dissect) собирать эту информацию с диска, если это возможно.
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - Проект Artifactcollector предоставляет программное обеспечение, которое собирает судебные артефакты на системах.
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - Инструмент компьютерной криминалистики, который сканирует образ диска, файл или каталог файлов и извлекает полезную информацию без анализа файловой системы или структур файловой системы. Из-за игнорирования структуры файловой системы программа отличается скоростью и тщательностью.
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - Оптимизированный список парсеров для быстрого анализа файла криминалистического изображения`dd`, E01, `.vmdk`и т.д.) и представить девять докладов.
* [CyLR](https://github.com/orlikoski/CyLR) - Инструмент CyLR собирает судебные артефакты с файловых систем NTFS быстро, безопасно и минимизирует воздействие на хост.
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - Репозиторий артефактов Digital Forensics
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - Сценарий Windows Batch и скрипт Unix Bash для всестороннего сбора данных судебной экспертизы во время реагирования на инциденты.
* [Live Response Collection](https://www.brimorlabs.com/tools/) - Автоматизированный инструмент, который собирает летучие данные из Windows, OSX и*Операционные системы на основе nix.
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - Утилита командной строки (которая работает с экземплярами Amazon EC2 или без них) для параллельного получения удаленной памяти.
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - Приобретать, сортировать и исследовать удаленные улики через портативный доступ iSCSI
* [UAC](https://github.com/tclahr/uac) - UAC (Unix-like Artifacts Collector) - это скрипт коллекции Live Response для Incident Response, который использует нативные двоичные файлы и инструменты для автоматизации коллекции артефактов систем AIX, Android, ESXi, FreeBSD, Linux, macOS, NetBSD, NetScaler, OpenBSD и Solaris.

### Управление инцидентами

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - Бесплатная система SOAR, которая помогает автоматизировать обработку предупреждений и процессы реагирования на инциденты.
* [CyberCPR](https://www.cybercpr.com) - Инструмент управления общественными и коммерческими инцидентами с встроенной функцией Need-to-Know для поддержки соблюдения GDPR при работе с чувствительными инцидентами.
* [Cyphon](https://medevel.com/cyphon/) - Cyphon устраняет головные боли управления инцидентами, оптимизируя множество связанных задач через единую платформу. Он получает, обрабатывает и сортирует события, чтобы обеспечить всеобъемлющее решение для вашего аналитического рабочего процесса. — агрегирование данных, объединение и определение приоритетов оповещений, а также предоставление аналитикам возможности расследовать и документировать инциденты.
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - Платформа управления безопасностью, автоматизации и реагирования Paloalto с полным управлением жизненным циклом инцидентов и множеством интеграций для повышения автоматизации.
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - Рамки для организации судебного сбора, обработки и экспорта данных.
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - Приложение для отслеживания реагирования на инциденты, обрабатывающее один или несколько инцидентов через случаи и задачи с большим количеством затронутых систем и артефактов.
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - Платформа управления инцидентами в области кибербезопасности разработана с учетом гибкости и скорости. Он позволяет легко создавать, отслеживать и сообщать об инцидентах кибербезопасности и полезен для CSIRT, CERT и SOC.
* [RTIR](https://www.bestpractical.com/rtir/) - Request Tracker for Incident Response (RTIR) является ведущей системой обработки инцидентов с открытым исходным кодом, предназначенной для команд компьютерной безопасности. Мы работали с более чем дюжиной команд CERT и CSIRT по всему миру, чтобы помочь вам справиться с постоянно растущим объемом сообщений об инцидентах. RTIR использует все возможности Request Tracker.
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - Сотрудничество в области реагирования на инциденты и инструмент сбора знаний ориентированы на гибкость и простоту использования. Наша цель - повысить ценность процесса реагирования на инциденты, не обременяя пользователя.
* [Shuffle](https://github.com/frikky/Shuffle) - Платформа автоматизации безопасности общего назначения, ориентированная на доступность.
* [threat_note](https://github.com/defpoint/threat_note) - Легкий блокнот исследования, который позволяет исследователям безопасности регистрировать и извлекать индикаторы, связанные с их исследованиями.
* [Zenduty](https://www.zenduty.com) - Zenduty - это новая платформа управления инцидентами, обеспечивающая сквозное оповещение об инцидентах, управление вызовами и организацию реагирования, предоставляя командам больший контроль и автоматизацию жизненного цикла управления инцидентами.

### Базы знаний

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - База знаний Digital Forensics Artifact
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - Windows Events Attack Samples скачать
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - База знаний реестра Windows

### Распределения Linux

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - Прибор на основе VMware используется для цифрового исследования и приобретения и полностью построен из программного обеспечения для общественного достояния. Среди инструментов, содержащихся в ADIA, — Autopsy, Sleuth Kit, Digital Forensics Framework, log2timeline, Xplico и Wireshark. Большая часть системного обслуживания использует Webmin. Он предназначен для небольших и средних цифровых исследований и приобретений. Устройство работает под Linux, Windows и Mac OS. Оба i386 (32-разрядный) и x86_Доступны 64 (64-битные) версии.
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - Содержит многочисленные инструменты, которые помогают следователям во время их анализа, включая сбор судебных доказательств.
* [CCF-VM](https://github.com/rough007/CCF-VM) - CyLR CDQR Forensics Virtual Machine (CCF-VM): Решение «все в одном» для анализа собранных данных, что делает его легко доступным для поиска со встроенными общими поисками, позволяет одновременно искать один и несколько хостов.
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - Дистрибутив Linux, который включает в себя обширную коллекцию лучших приложений сетевой безопасности с открытым исходным кодом, полезных для профессионалов в области сетевой безопасности.
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - Дистрибутив Linux, ориентированный на безопасность, с предустановленными судебными и наступательными инструментами безопасности 140+, пользовательским закаленным ядром и интегрированными рабочими процессами реагирования на инциденты.
* [PALADIN](https://sumuri.com/software/paladin/) - Модифицированный дистрибутив Linux для выполнения различных судебно-медицинских задач в судебно-медицинской манере. Он поставляется со многими инструментами судебной экспертизы с открытым исходным кодом.
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - Специальный дистрибутив Linux, предназначенный для мониторинга сетевой безопасности с использованием передовых инструментов анализа.
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - Демонстрирует, что расширенные возможности реагирования на инциденты и глубокие цифровые методы судебной экспертизы для вторжений могут быть выполнены с использованием передовых инструментов с открытым исходным кодом, которые свободно доступны и часто обновляются.

### Сбор доказательств Linux

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - FastIR для Linux собирает различные артефакты в реальном времени и записывает результаты в файлы CSV.
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - Быстрый инструмент с открытым исходным кодом для Linux, написанный на Rust. Создавайте сбои полной памяти машин Linux.

### Инструменты лог-анализа

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - AppCompatProcessor был разработан для извлечения дополнительной ценности из общекорпоративных данных AppCompat / AmCache за пределами классических методов укладки и сбора.
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT-Hunter - это инструмент Threat Hunting для журналов событий Windows.
* [Chainsaw](https://github.com/countercept/chainsaw) - Chainsaw предоставляет мощную возможность быстрого выявления угроз в журналах событий Windows.
* [Event Log Explorer](https://eventlogxp.com/) - Инструмент, разработанный для быстрого анализа файлов журналов и других данных.
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - Просмотр, анализ и мониторинг событий, записанных в журналах событий Microsoft Windows с помощью этого инструмента GUI.
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - Hayabusa - это быстрый генератор графика событий Windows и инструмент для поиска угроз, созданный группой Yamato Security в Японии.
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - Инструмент слияния и анализа данных об угрозах, который интегрирует потоки данных об угрозах с решениями SIEM. Пользователи могут немедленно использовать информацию об угрозах для мониторинга безопасности и отчетов об инцидентах в рабочем процессе своих существующих операций безопасности.
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - Выполняйте SQL-запросы против структурированных данных журнала: журналы сервера, события Windows, файловая система, Active Directory, журналы log4net, разделенный текст с запятой / вкладкой, файлы XML или JSON. Также предоставляет графический интерфейс для Microsoft LogParser 2.2 с мощными элементами пользовательского интерфейса: редактор синтаксиса, сетка данных, диаграмма, таблица поворотов, приборная панель, менеджер запросов и многое другое.
* [Lorg](https://github.com/jensvoid/lorg) - Инструмент для расширенного анализа безопасности HTTPD-файлов и криминалистики.
* [Logdissect](https://github.com/dogoncouch/logdissect) - Утилита CLI и API Python для анализа файлов журналов и других данных.
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - Высокоскоростной инструмент анализа журналов и криминалистики с многоформатным анализом, сопоставлением шаблонов, реконструкцией временной шкалы и обнаружением аномалий для реагирования на инциденты.
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - Инструмент для исследования вредоносного логотипа Windows путем визуализации и анализа журнала событий Windows.
* [Sigma](https://github.com/SigmaHQ/sigma) - Общий формат подписи для систем SIEM, уже содержащих обширный набор правил.
* [StreamAlert](https://github.com/airbnb/streamalert) - Бессерверная система анализа данных в режиме реального времени, способная принимать пользовательские источники данных и запускать оповещения с использованием пользовательской логики.
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearch делает анализ журналов событий Windows более эффективным и менее трудоемким за счет агрегирования журналов событий.
* [WELA](https://github.com/Yamato-Security/WELA) - Windows Event Log Analyzer является швейцарским армейским ножом для журналов событий Windows.
* [Zircolite](https://github.com/wagga40/Zircolite) - Автономный и быстрый инструмент обнаружения SIGMA для EVTX или JSON.

### Инструменты анализа памяти

* [AVML](https://github.com/microsoft/avml) - Портативный инструмент для приобретения нестабильной памяти для Linux.
* [Evolve](https://github.com/JamesHabben/evolve) - Веб-интерфейс для Volatility Memory Forensics Framework.
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - Расширенный анализ памяти для Windows x64 с поддержкой вложенного гипервизора.
* [LiME](https://github.com/504ensicsLabs/LiME) - Загружаемый модуль ядра (LKM), который позволяет приобретать нестабильную память с устройств на базе Linux и Linux, ранее называвшихся DMD.
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScan - это плагин Volatility, извлекающий конфигурационные данные известных вредоносных программ. Волатильность - это среда судебной экспертизы с открытым исходным кодом для реагирования на инциденты и анализа вредоносных программ. Этот инструмент ищет вредоносные программы в изображениях памяти и сбрасывает данные конфигурации. Кроме того, этот инструмент имеет функцию перечисления строк, на которые ссылается вредоносный код.
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - Бесплатное программное обеспечение для судебной экспертизы памяти, которое помогает респондентам находить зло в живой памяти. Memoryze может получать и/или анализировать изображения памяти, а в живых системах может включать файл подкачки в свой анализ.
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Memoryze для Mac — это Memoryze, а затем для Mac. Однако меньшее количество особенностей.
* [MemProcFS]https://github.com/ufrisk/MemProcFS) - MemProcFS - это простой и удобный способ просмотра физической памяти в виде файлов в виртуальной файловой системе.
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochi - это фреймворк с открытым исходным кодом для совместного криминалистического анализа памяти.
* [Rekall](http://www.rekall-forensic.com/) - Инструмент с открытым исходным кодом (и библиотека) для извлечения цифровых артефактов из летучих образцов памяти (ОЗУ).
* [Volatility](https://github.com/volatilityfoundation/volatility) - Продвинутая система криминалистики памяти.
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - Нестабильная структура извлечения памяти (преемник волатильности)
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - Инструмент автоматизации для исследователей вырезает все догадки и ручные задачи из фазы бинарного извлечения или помогает исследователю на первых этапах выполнения исследования анализа памяти.
* [VolDiff](https://github.com/aim4r/VolDiff) - Анализ следов вредоносной памяти на основе волатильности.
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - Криминалистика памяти и инструмент обратной инженерии, используемый для анализа нестабильной памяти, предлагающий возможность анализа ядра Windows, драйверов, DLL и виртуальной и физической памяти.

### Инструменты визуализации памяти

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - Крошечный бесплатный судебный инструмент для надежного извлечения всего содержимого нестабильной памяти компьютера – Даже если они защищены активной антиотладочной или антидемпинговой системой.
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - Скрипт для сброса памяти Linux и создания профилей волатильности.
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Быстрый инструмент приобретения памяти для Windows (x86, x64, ARM64). Создавайте свалки полной памяти машин Windows.
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - Бесплатный инструмент визуализации, предназначенный для захвата физической памяти компьютера подозреваемого. Поддерживает последние версии Windows.
* [OSForensics](http://www.osforensics.com/) - Инструмент для приобретения живой памяти на 32-битных и 64-битных системах. Может быть произведен сброс пространства памяти отдельного процесса или сброс физической памяти.

### Свидетельства OSX

* [Knockknock](https://objective-see.com/products/knockknock.html) - Отображает постоянные элементы (скрипты, команды, двоичные файлы и т.д.), которые настроены на автоматическое выполнение на OSX.
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - Плагин на основе криминалистической основы для быстрой сортировки mac, которая работает на живых машинах, изображениях диска или отдельных файлах артефактов.
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - Бесплатный инструмент компьютерной криминалистики Mac OS X.
* [OSX Collector](https://github.com/yelp/osxcollector) - OSX Auditor ответит в прямом эфире.
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - Инструмент для просмотра событий в Apple Endpoint Security Framework (ESF) в режиме реального времени.

### Другие списки

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - Сбор ресурсов Event ID, полезных для цифровой криминалистики и реагирования на инциденты.
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - Список потрясающих инструментов и ресурсов судебно-медицинского анализа.
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - Коллекция инструментов
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - Обновленный список судебных инструментов, созданных Эриком Циммерманом, инструктором института SANS.
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - Коллективный список общедоступных JSON API для использования в сфере безопасности.

### Другие инструменты

* [Cortex](https://thehive-project.org) - Cortex позволяет анализировать наблюдаемые объекты, такие как IP-адреса и адреса электронной почты, URL-адреса, доменные имена, файлы или хэши один за другим или в массовом режиме с использованием веб-интерфейса. Аналитики также могут автоматизировать эти операции с помощью REST API.
* [Crits](https://crits.github.io/) - Веб-инструмент, который объединяет аналитический движок с базой данных о киберугрозах.
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - Инструмент DFIR, разработанный SIRT от Netflix, позволяет следователю быстро масштабировать компромисс по облачным экземплярам (в настоящее время экземпляры Linux на AWS) во время инцидента и эффективно сортировать эти экземпляры для последующих действий, показывая различия по базовому уровню.
* [domfind](https://github.com/diogo-fernan/domfind) - Python DNS сканер для поиска идентичных доменных имен под разными TLD.
* [Fileintel](https://github.com/keithjjones/fileintel) - Вытаскивайте интеллект на хэш файла.
* [HELK](https://github.com/Cyb3rWard0g/HELK) - Платформа для поиска угроз.
* [Hindsight](https://github.com/obsidianforensics/hindsight) - Интернет-экспертизы истории для Google Chrome / Chrome.
* [Hostintel](https://github.com/keithjjones/hostintel) - Вытаскивай интеллект на хозяина.
* [IPASIS](https://ipasis.com/) - Репутация IP в реальном времени и API проверки электронной почты для расследования подозрительных взаимодействий. Возвращает оценку доверия взаимодействия (0-100), сочетающую обнаружение VPN / прокси / Tor с оценкой риска по электронной почте в одном вызове API.
* [imagemounter](https://github.com/ralphje/imagemounter) - Утилита командной строки и пакет Python для облегчения (не)монтажа изображений судебно-медицинских дисков.
* [Kansa](https://github.com/davehull/Kansa/) - Модульная система реагирования на инциденты в PowerShell.
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - Реконструкция дерева каталога MFT и информация о записи.
* [Munin](https://github.com/Neo23x0/munin) - Онлайн хеш-проверка для VirusTotal и других сервисов.
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponse - это модуль PowerShell, ориентированный на целенаправленное сдерживание и восстановление во время реагирования на инциденты безопасности.
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - Очень простой многопоточный многоправильный многофайловый скрипт YARA для сканирования Python для вредоносных зоопарков и ИК.
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - Позволяет сканировать диски и память для IOC, используя YARA в Windows, Linux и OS X.
* [RaQet](https://raqet.github.io/) - Нетрадиционный инструмент дистанционного сбора и сортировки, позволяющий сортировать диск удаленного компьютера (клиента), который перезапускается с специально построенной судебной операционной системой.
* [Raccine](https://github.com/Neo23x0/Raccine) - Простая защита Ransomware
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - Собирайте судебные данные о MySQL, когда возникают проблемы.
* [Scout2](https://nccgroup.github.io/Scout2/) - Инструмент безопасности, который позволяет администраторам веб-сервисов Amazon оценивать состояние безопасности своей среды.
* [Stenographer](https://github.com/google/stenographer) - Решение для захвата пакетов, которое направлено на то, чтобы быстро переместить все пакеты на диск, а затем обеспечить простой и быстрый доступ к подмножествам этих пакетов. Он хранит как можно больше истории, управляя использованием диска и удаляя при нажатии ограничений на диск. Он идеально подходит для захвата трафика непосредственно перед и во время инцидента, без необходимости явного хранения всего сетевого трафика.
* [sqhunter](https://github.com/0x4d31/sqhunter) - Охотник за угрозами на основе osquery и Salt Open (SaltStack), который может выдавать специальные или распределенные запросы без необходимости использования плагина tls osquery. sqhunter позволяет запрашивать открытые сетевые розетки и проверять их на наличие источников информации об угрозах.
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - Шаблон конфигурационных файлов Sysmon с высококачественным отслеживанием событий по умолчанию
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - Репозиторий модулей конфигурации sysmon
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - Расширенная трассировка для поддержки деятельности операторов CSIRT (или CERT). Обычно команда CSIRT должна обрабатывать инциденты на основе полученных IP-адресов. Компьютерный центр экстренного реагирования Люксембург.
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - Утилита Windows (плохо поддерживается или больше не поддерживается) для отправки образцов вирусов поставщикам AV.

### Игровые книги

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR Runbook Samples предназначен для настройки каждого объекта, использующего их. Три образца: «DoS или DDoS-атака», «утечка учетных данных» и «непреднамеренный доступ к ведру Amazon S3».
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - Контрактивная коллекция PLaybooks.
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - Сборник боевых карт Cyber Incident Response Playbook
* [IRM](https://github.com/certsocietegenerale/IRM) - Методология реагирования на инциденты CERT Societe Generale.
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - Документы, описывающие части процесса реагирования на инциденты PagerDuty. Он предоставляет информацию не только о подготовке к инциденту, но и о том, что делать во время и после. Источник доступен на [GitHub](https://github.com/PagerDuty/incident-response-docs).
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - Phantom Community Playbooks для Splunk, но также настраиваемый для других целей.
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - Playbook помогает разрабатывать методы и гипотезы для охотничьих кампаний.

### Инструменты Dump Tools

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - Бросает любой запущенный Win32 обрабатывает изображение памяти на лету.
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - Инструмент, который позволяет сбрасывать содержимое памяти процесса в файл, не останавливая процесс.

### Инструменты для песочницы/обновления

* [Any Run](https://app.any.run/) - Интерактивный онлайн-сервис анализа вредоносных программ для динамического и статического исследования большинства типов угроз с использованием любой среды.
* [CAPA](https://github.com/mandiant/capa) - Обнаруживает возможности в исполняемых файлах. Вы запускаете его против модуля PE, ELF, .NET или файла кода оболочки, и он сообщает вам, что, по его мнению, может сделать программа.
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - Конфигурация вредоносного ПО и извлечение полезной нагрузки.
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - Open Source Высоконастраиваемый инструмент для песочницы.
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - Сильно модифицированная вилка кукушки, разработанная сообществом.
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - Библиотека Python для управления песочницей, модифицированной кукушкой.
* [Cutter](https://github.com/rizinorg/cutter) - Бесплатная и обратная инженерная платформа с открытым исходным кодом на базе rizin.
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - Программное обеспечение Reverse Engineering Framework.
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - Бесплатная мощная онлайн-песочница от CrowdStrike
* [Intezer](https://analyze.intezer.com/#/) - Intezer Analyze погружается в двоичные файлы Windows, чтобы обнаружить сходство микрокода с известными угрозами, чтобы обеспечить точные, но простые для понимания результаты.
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - Joe Sandbox обнаруживает и анализирует потенциальные вредоносные файлы и URL-адреса в Windows, Android, Mac OS, Linux и iOS для подозрительных действий; предоставляя подробные аналитические отчеты.
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - Система статического анализа, автоматизирующая процесс извлечения ключевых характеристик из различных форматов файлов.
* [Metadefender Cloud](https://www.metadefender.com) - Бесплатная платформа для анализа угроз, обеспечивающая мультисканирование, дезинфицирование данных и оценку уязвимостей файлов.
* [Radare2](https://github.com/radareorg/radare2) - Обратная инженерная структура и набор инструментов командной строки.
* [Reverse.IT](https://www.reverse.it/) - Альтернативный домен для инструмента гибридного анализа, предоставляемого CrowdStrike.
* [Rizin](https://github.com/rizinorg/rizin) - UNIX-подобная структура обратной инженерии и набор инструментов командной строки
* [StringSifter](https://github.com/fireeye/stringsifter) - Инструмент машинного обучения, который ранжирует строки на основе их релевантности для анализа вредоносных программ.
* [Threat.Zone](https://app.threat.zone) - Облачная платформа анализа угроз, которая включает в себя песочницу, CDR и интерактивный анализ для исследователей.
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrie использует поведение во время выполнения и сотни функций из файла для выполнения анализа.
* [Viper](https://github.com/viper-framework/viper) - Python на основе двоичного анализа и управления фреймворком, который хорошо работает с Cuckoo и YARA.
* [Virustotal](https://www.virustotal.com) - Бесплатный онлайн-сервис, который анализирует файлы и URL-адреса, позволяющие идентифицировать вирусы, черви, трояны и другие виды вредоносного контента, обнаруженного антивирусными движками и сканерами веб-сайтов.
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - Библиотека визуализации с открытым исходным кодом и инструменты командной строки для журналов (Cuckoo, Procmon, далее).
* [Yomi](https://yomi.yoroi.company) - Free MultiSandbox управляется и размещается компанией Yoroi.

### Инструменты сканирования

* [Fenrir](https://github.com/Neo23x0/Fenrir) - Простой сканер МОК. Он позволяет сканировать любую систему Linux / Unix / OSX для IOC в обычном режиме. Созданы создателями Тора и Локи.
* [LOKI](https://github.com/Neo23x0/Loki) - Бесплатный ИК-сканер для сканирования конечной точки с помощью правил яры и других индикаторов (МОК).
* [Spyre](https://github.com/spyre-project/spyre) - Простой сканер МОК на основе YARA, написанный в Go

### Инструменты Timeline

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - Платформа разработана, чтобы легко построить подробную хронологию инцидента.
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - Бесплатный инструмент, доступный от Fire / Mandiant, который будет отображать лог / текстовый файл, который может выделять области на графике, которые соответствуют ключевому слову или фразе. Хорошо для времени, выстилающего инфекцию и то, что было сделано после компромисса.
* [Morgue](https://github.com/etsy/morgue) - PHP веб-приложение Etsy для управления посмертными сообщениями.
* [Plaso](https://github.com/log2timeline/plaso) -  бэкэнд-движок на основе Python для log2timeline инструмента.
* [Timesketch](https://github.com/google/timesketch) - Инструмент с открытым исходным кодом для совместного криминалистического анализа сроков.

### Видео

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - Представлено Брюсом Шнайером на OWASP AppSecUSA 2015.

### Сбор доказательств Windows

* [AChoir](https://github.com/OMENScan/AChoir) - Инструмент Framework/Scripting для стандартизации и упрощения процесса создания сценариев для Windows.
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - Легкое консольное приложение Windows, предназначенное для сбора системной информации для реагирования на инциденты и обеспечения безопасности. Он имеет множество модулей и выходных форматов.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage имеет легкий инструмент сбора, который можно использовать бесплатно. Он собирает исходные файлы (такие как ульи реестра и журналы событий), но также анализирует их на живом хосте, чтобы он также мог собирать исполняемые файлы, на которые ссылаются элементы запуска, запланированные задачи и т. Д. Это вывод JSON-файла, который можно импортировать в бесплатную версию Cyber Triage. Cyber Triage производится Sleuth Kit Labs, которая также производит вскрытие. 
* [DFIR ORC](https://dfir-orc.github.io/) - DFIR ORC - это коллекция специализированных инструментов, предназначенных для надежного анализа и сбора критических артефактов, таких как MFT, ульи реестра или журналы событий. DFIR ORC собирает данные, но не анализирует их: он не предназначен для сортировки машин. Он обеспечивает судебно-значимый снимок машин под управлением Microsoft Windows. Код можно найти на [GitHub](https://github.com/DFIR-ORC/dfir-orc).
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - Инструмент, который собирает различные артефакты в живых системах Windows и записывает результаты в файлы csv. При анализе этих артефактов можно обнаружить ранний компромисс.
* [Fibratus](https://github.com/rabbitstack/fibratus) - Инструмент для исследования и отслеживания ядра Windows.
* [Hoarder](https://github.com/muteb/Hoarder) - Сбор наиболее ценных артефактов для судебно-медицинской экспертизы или расследования инцидентов.
* [IREC](https://binalyze.com/products/irec-free/) - All-in-one IR Evidence Collector, который захватывает RAM Image, $MFT, EventLogs, WMI Scripts, Registry Hives, System Restore Points и многое другое. Он бесплатный, молниеносный и простой в использовании.
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponse - это инструмент прямого ответа для целевой коллекции.
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - Бесплатный инструмент от Mandiant для сбора данных хост-системы и отчетности о наличии индикаторов компромисса (IOC). Поддержка только для Windows. Больше не поддерживается. Полностью поддерживается только до Windows 7 / Windows Server 2008 R2.
* [IRTriage](https://github.com/AJMartel/IRTriage) - Проверка реагирования на инциденты - Сбор доказательств Windows для криминалистического анализа.
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - Kroll Artifact Parser and Extractor (KAPE) Эрика Циммермана. Инструмент сортировки, который находит наиболее распространенные цифровые артефакты, а затем быстро их анализирует. Великолепно и основательно, когда время имеет значение.
* [LOKI](https://github.com/Neo23x0/Loki) - Бесплатный ИК-сканер для сканирования конечной точки с помощью правил яры и других индикаторов (МОК).
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - PowerShell на основе сортировки и поиска угроз для Windows.
* [Panorama](https://github.com/AlmCo/Panorama) - Быстрый обзор инцидентов в живых системах Windows.
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - Прямая дисковая криминалистическая платформа, использующая PowerShell.
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSRecon собирает данные с удаленного хоста Windows с помощью PowerShell (v2 или более поздней версии), организует данные в папки, хэширует все извлеченные данные, хэширует PowerShell и различные свойства системы и отправляет данные в команду безопасности. Данные могут быть перенесены на общий доступ, отправлены по электронной почте или сохранены локально.
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - Инструмент с открытым исходным кодом, написанный на Perl, для извлечения / сбора информации (ключей, значений, данных) из реестра и представления ее для анализа.
