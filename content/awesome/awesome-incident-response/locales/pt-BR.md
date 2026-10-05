# Resposta de Incidente Impressionante [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> Uma lista com curadoria de ferramentas e recursos para resposta a incidentes de segurança, visando ajudar analistas de segurança e [DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html) Equipas.

Equipes forenses digitais e de resposta a incidentes (DFIR) são grupos de pessoas em uma organização responsável por gerenciar a resposta a um incidente de segurança, incluindo coletar evidências do incidente, remediar seus efeitos e implementar controles para evitar que o incidente se repita no futuro.

## Índice

- [Emulação Adversária](#adversary-emulation)
- [Ferramentas Tudo- Em- Um](#all-in-one-tools)
- [Livros](#books)
- [Comunidades](#communities)
- [Ferramentas de Criação de Imagens em Disco](#disk-image-creation-tools)
- [Coleta de Evidências](#evidence-collection)
- [Gestão de Incidentes](#incident-management)
- [Bases de Conhecimento](#knowledge-bases)
- [Distribuição Linux](#linux-distributions)
- [Coleção de Evidências Linux](#linux-evidence-collection)
- [Ferramentas de Análise de Registo](#log-analysis-tools)
- [Ferramentas de Análise de Memória](#memory-analysis-tools)
- [Ferramentas de Imagens de Memória](#memory-imaging-tools)
- [Coleção de Evidências do OSX](#osx-evidence-collection)
- [Outras Listas](#other-lists)
- [Outras Ferramentas](#other-tools)
- [Leitores](#playbooks)
- [Ferramentas de Dump de Processo](#process-dump-tools)
- [Ferramentas de Sandboxing/Reversão](#sandboxingreversing-tools)
- [Ferramentas de Varredor](#scanner-tools)
- [Ferramentas de Linha do Tempo](#timeline-tools)
- [Vídeos](#videos)
- [Coleção de Evidências das Janelas](#windows-evidence-collection)

## Colecção de Ferramentas IR

### Emulação Adversária

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - script Windows Batch que usa um conjunto de ferramentas e arquivos de saída para fazer um sistema parecer como se estivesse comprometido.
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - Testes de detecção pequenos e altamente portáteis mapeados para o Mitre ATT&CK Framework.
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - Técnicas e procedimentos táticos automatizados. Repetir sequências complexas manualmente para testes de regressão, avaliações de produtos, gerar dados para pesquisadores.
* [Caldera](https://github.com/mitre/caldera) - Sistema automático de emulação adversária que executa comportamento adversarial pós-comprometido dentro das redes Windows Enterprise. Gera planos durante a operação usando um sistema de planejamento e um modelo adversário pré-configurado baseado no projeto Táticas Adversárias, Técnicas e Conhecimento Comum (ATT&CKTM).
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - Ferramenta modular, orientada por menu, multi-plataforma para a construção de eventos de segurança repetíveis, atrasados e distribuídos. Crie facilmente cadeias de eventos personalizadas para brocas Blue Team e mapeamento de sensor / alerta. Red Teams pode criar incidentes de isca, distrações e iscas para apoiar e escalar suas operações.
* [Metta](https://github.com/uber-common/metta) - Ferramenta de preparação para segurança da informação para fazer simulação adversa.
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - Utilitário leve usado para gerar tráfego de rede malicioso e ajudar equipes de segurança a avaliar controles de segurança e visibilidade da rede.
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTA fornece um framework de scripts projetados para permitir que equipes azuis testem suas capacidades de detecção contra ofícios maliciosos, modelados após MITRE ATT&CK.
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - Máquina virtual para emulação de adversários e caça às ameaças.

### Ferramentas Tudo- Em- Um

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  O kit de ferramentas irá extrair rapidamente evidências digitais de várias fontes, analisando discos rígidos, imagens de unidade, despejos de memória, iOS, Blackberry e backups Android, UFED, JTAG e despejos chip-off.
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - Suite de ferramentas baseadas em CIM/WMI que permitem a capacidade de executar operações de resposta de incidentes e caça remotamente em todas as versões do Windows.
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - O CIRTKit não é apenas uma coleção de ferramentas, mas também um framework para ajudar na unificação contínua dos processos de investigação de Resposta a Incidentes e Forense.
* [Cyber Triage](http://www.cybertriage.com) - A Cyber Triage coleta e analisa dados do host para determinar se está comprometida. É sistema de pontuação e motor de recomendação permitem que você se concentre rapidamente nos artefatos importantes. Ele pode importar dados de sua ferramenta de coleta, imagens de disco e outros colecionadores (como o KAPE). Ele pode ser executado no desktop de um examinador ou em um modelo de servidor. Desenvolvido pela Sleuth Kit Labs, que também faz a autópsia.
* [Cynative](https://github.com/cynative/cynative) - Agente de pesquisa profundo para o seu infra - sandboxed, somente leitura, cobre AWS, GCP, Azure, K8s, GitHub e GitLab.
* [Dissect](https://github.com/fox-it/dissect) - Dissect é um framework digital forense e de resposta a incidentes que permite acessar e analisar rapidamente artefatos forenses de vários formatos de disco e arquivo, desenvolvidos pela Fox-IT (parte do NCC Group).
* [Doorman](https://github.com/mwielgoszewski/doorman) - gerenciador de frota de osquery que permite o gerenciamento remoto de configurações de osquery recuperadas por nós. Ele aproveita a configuração do TLS da Osquery, o registrador e os endpoints de leitura/escrita distribuídos, para dar visibilidade aos administradores em uma frota de dispositivos com sobrecarga mínima e intrusividade.
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - Aplicativo extensível baseado no Windows que fornece automação de fluxo de trabalho, gerenciamento de casos e funcionalidade de resposta de segurança.
* [Flare](https://github.com/fireeye/flare-vm) - Uma distribuição de segurança totalmente personalizável baseada no Windows para análise de malware, resposta a incidentes, teste de penetração.
* [Fleetdm](https://github.com/fleetdm/fleet) - Plataforma de monitoramento de host de última geração adaptada para especialistas em segurança. Aproveitando o projeto de osquery testado pela batalha do Facebook, a Fleetdm oferece atualizações contínuas, recursos e respostas rápidas a grandes perguntas.
* [GRR Rapid Response](https://github.com/google/grr) - Estrutura de resposta de incidentes focada em forenses remotas. Consiste em um agente python (cliente) que é instalado em sistemas alvo, e uma infraestrutura de servidor python que pode gerenciar e falar com o agente. Além do cliente Python API incluído, [PowerGRR](https://github.com/swisscom/PowerGRR) fornece uma biblioteca cliente API em PowerShell trabalhando em Windows, Linux e macOS para automação e script GRR.
* [IRIS](https://github.com/dfir-iris/iris-web) - A IRIS é uma plataforma web colaborativa para analistas de resposta a incidentes que permite partilhar investigações a nível técnico.
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - Plataforma Digital de Investigação Forense
* [Limacharlie](https://www.limacharlie.io/) - Plataforma de segurança Endpoint composta por uma coleção de pequenos projetos todos trabalhando juntos que lhe dá uma plataforma cruzada (Windows, OSX, Linux, Android e iOS) ambiente de baixo nível para gerenciar e empurrar módulos adicionais para a memória para estender sua funcionalidade.
* [Matano](https://github.com/matanolabs/matano): Plataforma de lago de segurança sem servidor aberto no AWS que permite ingerir, armazenar e analisar petabytes de dados de segurança em um lago de dados Apache Iceberg e executar detecçãos Python em tempo real como código.
* [MozDef](https://github.com/mozilla/MozDef) - Automatiza o processo de manipulação de incidentes de segurança e facilita as atividades em tempo real dos manipuladores de incidentes.
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - Programa CLI para automatizar a configuração, configuração e uso de soluções de segurança cibernética.
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - Aplicação construída para apresentação de dados forenses assíncronos usando ElasticSearch como infraestrutura. Foi projetado para ingerir coleções Redline.
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - Mais um popular framework de informática de código aberto. Este framework foi construído na plataforma Linux e usa banco de dados postgreSQL para armazenar dados.
* [osquery](https://osquery.io/) - Facilmente faça perguntas sobre sua infraestrutura Linux e macOS usando um idioma de consulta tipo SQL; o fornecido *embalagem de resposta incidente* ajuda a detectar e responder a violações.
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - Fornece capacidades de investigação do host aos usuários para encontrar sinais de atividade maliciosa através da memória e análise de arquivos, e o desenvolvimento de um perfil de avaliação de ameaça.
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - Uma extensão de navegador poderosa e amigável que simplifica as investigações para profissionais de segurança.
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - Ferramenta baseada em Unix e Windows que ajuda na análise forense de computadores. Ele vem com várias ferramentas que ajudam na perícia digital. Essas ferramentas ajudam a analisar imagens de disco, realizar uma análise aprofundada de sistemas de arquivos e várias outras coisas.
* [TheHive](https://thehive-project.org/) - Scalable 3-em-1 open source e solução gratuita projetada para facilitar a vida para SOCs, CSIRTs, CERTs e qualquer profissional de segurança da informação que lida com incidentes de segurança que precisam ser investigados e agidos rapidamente.
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - Conjunto de ferramentas de resposta incidente de plataforma cruzada com 28 casos de uso pré-construídos em um único binário de instalação zero. Coleta artefatos de memória, disco, rede e nuvem com geração automatizada de timeline.
* [Velociraptor](https://github.com/Velocidex/velociraptor) - Ferramenta de visibilidade e recolha de pontos finais
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - Ferramenta forense para clonagem de disco e imagens. Ele pode ser usado para encontrar arquivos apagados e análise de disco.
* [Zentral](https://github.com/zentralopensource/zentral) - Combina os recursos poderosos do inventário de endpoint da Osquery com uma estrutura de notificação e ação flexível. Isso permite identificar e reagir a alterações nos clientes do OS X e Linux.

### Livros

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - O livro do Steve Anson sobre Resposta a Incidentes.
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - Detectando Malware e Ameaças na Memória do Windows, Linux e Mac.
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - por Jeff Bollinger, Brandon Enright e Matthew Valites.
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - por Gerard Johansen.
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - Por Scott J. Roberts.
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - O guia definitivo para a resposta ao incidente.
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - Um grande guia para construir uma estratégia de resposta incidente para ataques ransomware. Por Oleg Skulkin.
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - Grande referência para construir um plano de resposta a incidentes baseado também em Inteligência de Ameaça. Por Roberto Martinez.
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - Por Scott J. Roberts, Rebekah Brown.
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - Grande referência para respondedores de incidentes.
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - O guia definitivo para a prática forense da memória. Por Svetlana Ostrovskaya e Oleg Skulkin.
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - O livro de Richard Bejtlich sobre IR.

### Comunidades

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - Comunidade de mais de 8.000 profissionais da aplicação da lei, setor privado e vendedores forenses. Além disso, muitos estudantes e hobbyists! Guia [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/).
* [Slack DFIR channel](https://dfircommunity.slack.com) - Slack DFIR Canal comunitário - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community).

### Ferramentas de Criação de Imagens em Disco

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - Ferramenta forense cujo principal propósito é visualizar dados recuperáveis de um disco de qualquer tipo. FTK Imager também pode adquirir memória ao vivo e arquivo de paging em sistemas 32bit e 64bit.
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - Bitscout by Vitaly Kamluk ajuda você a construir sua imagem customizável totalmente confiável LiveCD/LiveUSB para ser usada para forenses digitais remotas (ou talvez qualquer outra tarefa de sua escolha). É destinado a ser transparente e monitorável pelo proprietário do sistema, forensemente som, personalizável e compacto.
* [GetData Forensic Imager](http://www.forensicimager.com/) - Programa baseado em Windows que irá adquirir, converter ou verificar uma imagem forense em um dos seguintes formatos de arquivo forense comum.
* [Guymager](http://guymager.sourceforge.net) - Imagem forense gratuita para aquisição de mídia no Linux.
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - ACQUIRE pela Magnet Forensics permite que vários tipos de aquisições de disco sejam realizadas em Windows, Linux e OS X, bem como em sistemas operacionais móveis.

### Coleta de Evidências

* [Acquire](https://github.com/fox-it/acquire) - Adquire é uma ferramenta para coletar rapidamente artefatos forenses de imagens de disco ou um sistema vivo em um recipiente leve. Isso torna Adquirir uma excelente ferramenta para, entre outros, acelerar o processo de triagem forense digital. Utiliza [Dissect](https://github.com/fox-it/dissect) recolher essas informações do disco bruto, se possível.
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - O projeto coletor de artefatos fornece um software que coleta artefatos forenses em sistemas.
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - Ferramenta forense de computador que verifica uma imagem de disco, um arquivo, ou um diretório de arquivos e extrai informações úteis sem analisar o sistema de arquivos ou estruturas do sistema de arquivos. Por ignorar a estrutura do sistema de arquivos, o programa distingue-se em termos de velocidade e meticulosidade.
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - Lista simplificada de analisadores para analisar rapidamente um arquivo de imagem forense (`dd`, E01, `.vmdk`, etc) e resultados de nove relatórios.
* [CyLR](https://github.com/orlikoski/CyLR) - A ferramenta CyLR coleta artefatos forenses de hosts com sistemas de arquivos NTFS de forma rápida, segura e minimiza o impacto no host.
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - Repositório de artefatos forenses digitais
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - script Windows Batch e um script Unix Bash para coletar dados forenses durante a resposta incidente.
* [Live Response Collection](https://www.brimorlabs.com/tools/) - Ferramenta automatizada que coleta dados voláteis do Windows, OSX e \*Sistemas operativos baseados em nix.
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - Utilitário de linha de comando (que funciona com ou sem instâncias Amazon EC2) para paralelizar a aquisição de memória remota.
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - Adquira, triage e investigue evidências remotas através de acesso iSCSI somente leitura portátil
* [UAC](https://github.com/tclahr/uac) - UAC (Unix-like Artifacts Collector) é um script de coleta de resposta ao vivo para resposta a incidentes que faz uso de binários nativos e ferramentas para automatizar a coleção de AIX, Android, ESXi, FreeBSD, Linux, macOS, NetBSD, NetScaler, OpenBSD e Solaris artefatos de sistemas.

### Gestão de Incidentes

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - Um sistema SOAR gratuito que ajuda a automatizar o tratamento de alertas e os processos de resposta a incidentes.
* [CyberCPR](https://www.cybercpr.com) - Ferramenta de gestão de incidentes comunitários e comerciais com Need-to-Know construída para apoiar o cumprimento do GDPR enquanto lida com incidentes sensíveis.
* [Cyphon](https://medevel.com/cyphon/) - Cyphon elimina as dores de cabeça do gerenciamento de incidentes, simplificando uma infinidade de tarefas relacionadas através de uma única plataforma. Ele recebe, processa e triage eventos para fornecer uma solução abrangente para seu fluxo de trabalho analítico — agregando dados, agrupando e priorizando alertas, e capacitando analistas para investigar e documentar incidentes.
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - Plataforma de segurança Paloalto orquestração, automação e resposta com gerenciamento completo do ciclo de vida do incidente e muitas integrações para melhorar automação.
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - Uma estrutura para orquestrar coleta forense, processamento e exportação de dados.
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - Resposta de incidentes aplicação de rastreamento lidar com um ou mais incidentes através de casos e tarefas com um monte de sistemas e artefatos afetados.
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - Plataforma de gerenciamento de incidentes de segurança cibernética projetada com agilidade e velocidade em mente. Permite fácil criação, acompanhamento e comunicação de incidentes de segurança cibernética e é útil para CSIRTs, CERTs e SOCs.
* [RTIR](https://www.bestpractical.com/rtir/) - Request Tracker for Incident Response (RTIR) é o primeiro sistema de manipulação de incidentes de código aberto direcionado para equipes de segurança do computador. Trabalhamos com mais de uma dúzia de equipes CERT e CSIRT em todo o mundo para ajudá-lo a lidar com o crescente volume de relatórios de incidentes. RTIR baseia-se em todas as características do Request Tracker.
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - Colaboração de resposta a incidentes e ferramenta de captura de conhecimento focada na flexibilidade e facilidade de uso. Nosso objetivo é agregar valor ao processo de resposta ao incidente sem sobrecarregar o usuário.
* [Shuffle](https://github.com/frikky/Shuffle) - Uma plataforma de automação de segurança de propósito geral focada na acessibilidade.
* [threat_note](https://github.com/defpoint/threat_note) - Caderno de investigação leve que permite aos pesquisadores de segurança a capacidade de registrar e recuperar indicadores relacionados à sua pesquisa.
* [Zenduty](https://www.zenduty.com) - A Zenduty é uma nova plataforma de gestão de incidentes que fornece alerta de incidentes de ponta a ponta, orquestração de gestão de chamadas e resposta, dando às equipes maior controle e automação sobre o ciclo de vida da gestão de incidentes.

### Bases de Conhecimento

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - Base de conhecimento de artefatos forenses digitais
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - Exemplos de Ataque de Eventos do Windows
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - Base de Conhecimento do Registro do Windows

### Distribuição Linux

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - O aparelho baseado em VMware usado para investigação e aquisição digital e é construído inteiramente a partir de software de domínio público. Entre as ferramentas contidas na ADIA estão a autópsia, o Kit Sleuth, o Digital Forensics Framework, log2timeline, Xplico e Wireshark. A maioria da manutenção do sistema usa Webmin. É projetado para investigações e aquisições digitais de pequeno a médio porte. O aparelho é executado em Linux, Windows e Mac OS. Tanto i386 (32 bits) quanto x86_64 versões (64 bits) estão disponíveis.
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - Contém inúmeras ferramentas que ajudam investigadores durante a sua análise, incluindo a recolha de provas forenses.
* [CCF-VM](https://github.com/rough007/CCF-VM) - Máquina Virtual CYLR CDQR Forense (CCF-VM): Uma solução tudo-em-um para analisar dados coletados, tornando-o facilmente pesquisável com buscas comuns incorporadas, permitir a busca de hospedeiros individuais e múltiplos simultaneamente.
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - Distribuição Linux que inclui uma vasta coleção de aplicativos de segurança de rede de código aberto de melhor geração úteis para o profissional de segurança de rede.
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - Distribuição Linux focada em segurança com 140+ ferramentas de segurança forenses e ofensivas pré-instaladas, kernel endurecido personalizado e fluxos de trabalho integrados de resposta a incidentes.
* [PALADIN](https://sumuri.com/software/paladin/) - Distribuição Linux modificada para executar várias tarefas forenses de forma forense. Ele vem com muitas ferramentas forenses de código aberto incluídos.
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - Distro especial Linux voltado para monitoramento de segurança de rede com ferramentas de análise avançadas.
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - Demonstra que capacidades avançadas de resposta a incidentes e técnicas forenses digitais de mergulho profundo para intrusões podem ser realizadas usando ferramentas de código aberto de ponta que são livremente disponíveis e frequentemente atualizadas.

### Coleção de Evidências Linux

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - FastIR para Linux coleta diferentes artefatos no Linux ao vivo e registra os resultados em arquivos CSV.
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - Ferramenta de aquisição rápida de memória open source para Linux escrita em Rust. Gerar memória completa crash de máquinas Linux.

### Ferramentas de Análise de Registo

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - O AppCompatProcessor foi projetado para extrair valor adicional de dados da AppCompat / AmCache para além das técnicas clássicas de empilhamento e grapping.
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT-Hunter é ferramenta de caça a ameaças para registros de eventos de janelas.
* [Chainsaw](https://github.com/countercept/chainsaw) - Chainsaw fornece uma poderosa capacidade de "primeira resposta" para identificar rapidamente ameaças dentro dos registros de eventos do Windows.
* [Event Log Explorer](https://eventlogxp.com/) - Ferramenta desenvolvida para analisar rapidamente arquivos de log e outros dados.
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - Veja, analise e monitore os eventos registrados nos logs de eventos do Microsoft Windows com esta ferramenta GUI.
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - Hayabusa é um gerador de timeline e ferramenta de caça à ameaça de eventos do Windows criado pelo grupo Yamato Security no Japão.
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - Ferramenta de análise e fusão de inteligência de ameaças que integra dados de ameaças com soluções SIEM. Os usuários podem imediatamente alavancar a inteligência de ameaça para atividades de monitoramento de segurança e relatório de incidentes (IR) no fluxo de trabalho de suas operações de segurança existentes.
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - Execute consultas SQL contra dados de log estruturados: logs do servidor, eventos do Windows, sistema de arquivos, diretório ativo, log4net logs, vírgula/tab separado de texto, arquivos XML ou JSON. Também fornece uma GUI para Microsoft LogParser 2.2 com elementos de UI poderosos: editor de sintaxe, grade de dados, gráfico, tabela pivô, painel, gerenciador de consultas e muito mais.
* [Lorg](https://github.com/jensvoid/lorg) - Ferramenta para análise avançada de segurança de arquivos HTTPD e forenses.
* [Logdissect](https://github.com/dogoncouch/logdissect) - Utilitário CLI e API Python para analisar arquivos de log e outros dados.
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - Ferramenta de análise de log de alta velocidade e forenses com processamento multiformato, correspondência de padrões, reconstrução de linha do tempo e detecção de anomalias para resposta incidente.
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - Ferramenta para investigar o logon malicioso do Windows visualizando e analisando o log de eventos do Windows.
* [Sigma](https://github.com/SigmaHQ/sigma) - Formato genérico de assinatura para sistemas SIEM já contendo um extenso conjunto de regras.
* [StreamAlert](https://github.com/airbnb/streamalert) - Framework de análise de dados de log em tempo real sem servidor, capaz de ingerir fontes de dados personalizadas e ativar alertas usando lógica definida pelo usuário.
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearch torna a análise de log de eventos do Windows mais eficaz e menos demorada pela agregação de logs de eventos.
* [WELA](https://github.com/Yamato-Security/WELA) - Windows Event Log Analyzer pretende ser a faca do Exército suíço para registros de eventos do Windows.
* [Zircolite](https://github.com/wagga40/Zircolite) - Uma ferramenta de detecção autônoma e rápida baseada em SIGMA para EVTX ou JSON.

### Ferramentas de Análise de Memória

* [AVML](https://github.com/microsoft/avml) - Uma ferramenta portátil de aquisição de memória volátil para Linux.
* [Evolve](https://github.com/JamesHabben/evolve) - Interface Web para o Framework Forense de Memória de Volatilidade.
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - Análise de memória avançada para Windows x64 com suporte a hipervisor aninhado.
* [LiME](https://github.com/504ensicsLabs/LiME) - Módulo de Kernel Carregado (LKM), que permite a aquisição de memória volátil de dispositivos baseados em Linux e Linux, anteriormente chamado DMD.
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScan é um plugin de Volatilidade extrai dados de configuração de malware conhecido. Volatilidade é um framework forense de memória de código aberto para análise de resposta de incidentes e malware. Esta ferramenta procura por malware em imagens de memória e descarrega dados de configuração. Além disso, esta ferramenta tem uma função para listar strings a que o código malicioso se refere.
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - Software forense de memória livre que ajuda respondedores de incidentes encontrar o mal na memória ao vivo. Memoryze pode adquirir e/ou analisar imagens de memória, e em sistemas vivos, pode incluir o arquivo de paging em sua análise.
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Memoryze para Mac é Memoryze, mas depois para Macs. Um número menor de características, no entanto.
* [MemProcFS] (https://github.com/ufrisk/MemProcFS) - MemProcFS é uma maneira fácil e conveniente de visualizar a memória física como arquivos em um sistema de arquivos virtual.
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochi é um framework aberto para análise colaborativa de memória forense.
* [Rekall](http://www.rekall-forensic.com/) - Ferramenta de código aberto (e biblioteca) para a extração de artefatos digitais de amostras de memória volátil (RAM).
* [Volatility](https://github.com/volatilityfoundation/volatility) - Estrutura forense de memória avançada.
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - A estrutura volátil de extração de memória (sucessor de Volatilidade)
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - Ferramenta de automação para pesquisadores corta todas as tarefas de adivinhação e manual fora da fase de extração binária, ou para ajudar o investigador nas primeiras etapas de realização de uma investigação de análise de memória.
* [VolDiff](https://github.com/aim4r/VolDiff) - Análise de Pegada de Memória de Malware baseada na Volatilidade.
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - Memória forense e ferramenta de engenharia reversa usada para analisar memória volátil oferecendo a capacidade de analisar o kernel do Windows, drivers, DLLs e memória virtual e física.

### Ferramentas de Imagens de Memória

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - Pequena ferramenta forense gratuita para extrair de forma confiável todo o conteúdo da memória volátil do computador – Mesmo que protegidos por um sistema antidepuração ou anti-dumping activo.
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - Script para descartar memória Linux e criar perfis de Volatilidade.
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Ferramenta de aquisição rápida de memória para Windows (x86, x64, ARM64). Gerar memória completa falhas de máquinas Windows.
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - Ferramenta de imagem gratuita projetada para capturar a memória física do computador de um suspeito. Suporta versões recentes do Windows.
* [OSForensics](http://www.osforensics.com/) - Ferramenta para adquirir memória ao vivo em sistemas de 32 bits e 64 bits. Um despejo do espaço de memória de um processo individual ou despejo de memória física pode ser feito.

### Coleção de Evidências do OSX

* [Knockknock](https://objective-see.com/products/knockknock.html) - Exibe itens persistentes(scripts, comandos, binários, etc.) que são configurados para executar automaticamente no OSX.
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - Framework forense baseado em plugin para triagem rápida mac que funciona em máquinas ao vivo, imagens de disco ou arquivos de artefato individuais.
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - Ferramenta forense gratuita do computador Mac OS X.
* [OSX Collector](https://github.com/yelp/osxcollector) - Auditor OSX para resposta ao vivo.
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - Uma ferramenta para visualizar os eventos no Apple Endpoint Security Framework (ESF) em tempo real.

### Outras Listas

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - Recolha de recursos de identificação de eventos úteis para a Forense Digital e Resposta a Incidentes.
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - Uma lista de excelentes ferramentas e recursos de análise forense.
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - Colecção de ferramentas
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - Uma lista atualizada das ferramentas forenses criadas por Eric Zimmerman, instrutor do Instituto SANS.
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - Lista coletiva de APIs públicas JSON para uso em segurança.

### Outras Ferramentas

* [Cortex](https://thehive-project.org) - Cortex permite que você analise observáveis como IP e endereços de e-mail, URLs, nomes de domínio, arquivos ou hashes um por um ou em modo em massa usando uma interface Web. Os analistas também podem automatizar essas operações usando sua API REST.
* [Crits](https://crits.github.io/) - Ferramenta baseada na Web que combina um motor analítico com um banco de dados de ameaças cibernéticas.
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - Ferramenta DFIR desenvolvida pelo SIRT da Netflix que permite que um investigador explore rapidamente um compromisso em instâncias de nuvem ( instâncias Linux em AWS, atualmente) durante um incidente e triagem eficiente dessas instâncias para ações de seguimento, mostrando diferenças em relação a uma linha de base.
* [domfind](https://github.com/diogo-fernan/domfind) - Rastreador de DNS Python para encontrar nomes de domínio idênticos sob diferentes TLDs.
* [Fileintel](https://github.com/keithjjones/fileintel) - Puxe informações por hash de arquivo.
* [HELK](https://github.com/Cyb3rWard0g/HELK) - Plataforma de caça à ameaça.
* [Hindsight](https://github.com/obsidianforensics/hindsight) - História da Internet forense para Google Chrome / Chromium.
* [Hostintel](https://github.com/keithjjones/hostintel) - Puxem a inteligência por hospedeiro.
* [IPASIS](https://ipasis.com/) - Reputação de IP em tempo real e API de validação de email para investigar interações suspeitas. Retorna um Interaction Trust Score (0-100) combinando detecção VPN/proxy/Tor com avaliação de risco de email em uma única chamada API.
* [imagemounter](https://github.com/ralphje/imagemounter) - Utilitário de linha de comando e pacote Python para facilitar a (des) montagem de imagens de disco forense.
* [Kansa](https://github.com/davehull/Kansa/) - Estrutura modular de resposta de incidentes em PowerShell.
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - Reconstrução de árvore de diretórios MFT & informações de registro.
* [Munin](https://github.com/Neo23x0/munin) - Verificador de hash online para VirusTotal e outros serviços.
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponse é um módulo PowerShell focado em contenção e remediação direcionadas durante a resposta de incidentes de segurança.
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - Muito simples multi-threaded muitas regras para muitos arquivos YARA digitalização script Python para zoológicos de malware e IR.
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - Permite digitalizar discos e memória para COI usando YARA no Windows, Linux e OS X.
* [RaQet](https://raqet.github.io/) - Ferramenta de aquisição remota e triagem não convencional que permite triagem de um disco de um computador remoto (cliente) que é reiniciado com um sistema operacional forense construído propositadamente.
* [Raccine](https://github.com/Neo23x0/Raccine) - Uma proteção simples do Ransomware
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - Recolha dados forenses sobre MySQL quando ocorrerem problemas.
* [Scout2](https://nccgroup.github.io/Scout2/) - Ferramenta de segurança que permite aos administradores do Amazon Web Services avaliarem a postura de segurança do ambiente.
* [Stenographer](https://github.com/google/stenographer) - Solução de captura de pacotes que visa rapidamente carregar todos os pacotes para o disco, em seguida, fornecer acesso simples e rápido a subconjuntos desses pacotes. Armazena o maior histórico possível, gerenciando o uso do disco e excluindo quando os limites do disco são atingidos. É ideal para capturar o tráfego pouco antes e durante um incidente, sem a necessidade explícita de armazenar todo o tráfego de rede.
* [sqhunter](https://github.com/0x4d31/sqhunter) - Caçador de ameaças baseado em Osquery e Salt Open (SaltStack) que pode emitir consultas ad-hoc ou distribuídas sem a necessidade de plugin tls de Osquery. sqhunter permite que você consulte soquetes de rede abertos e verifique-os contra fontes de inteligência de ameaça.
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - Modelo de arquivo de configuração Sysmon com rastreamento de eventos de alta qualidade padrão
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - Um repositório de módulos de configuração do sysmon
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - Rastreio alargado para apoiar as actividades dos operadores CSIRT (ou CERT). Normalmente, a equipe CSIRT tem que lidar com incidentes com base em endereços IP recebidos. Criado por Computer Emergency Response Center Luxembourg.
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - Utilitário do Windows (pouco mantido ou não mantido) para enviar amostras de vírus para fornecedores AV.

### Leitores

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR Runbook Samples significou ser personalizado para cada entidade usando-os. As três amostras são: "Ataque DoS ou DDoS", "fuga de credibilidade" e "acesso não intencional a um balde Amazon S3".
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - Colecção contraactiva de livros PLay.
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - Uma coleção de cartões de batalha de Cyber Incident Response
* [IRM](https://github.com/certsocietegenerale/IRM) - Metodologias de resposta a incidentes por CERT Societe Generale.
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - Documentos que descrevem partes do processo PagerDuty Incident Response. Fornece informações não só sobre a preparação de um incidente, mas também sobre o que fazer durante e depois. A fonte está disponível em [GitHub](https://github.com/PagerDuty/incident-response-docs).
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - Phantom Community Playbooks para Splunk, mas também personalizável para outro uso.
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - Playbook para ajudar o desenvolvimento de técnicas e hipóteses para campanhas de caça.

### Ferramentas de Dump de Processo

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - Descarta qualquer imagem de memória Win32 em execução.
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - Ferramenta que permite descarregar o conteúdo de memória de um processo num ficheiro sem parar o processo.

### Ferramentas de Sandboxing/Reversão

* [Any Run](https://app.any.run/) - Serviço de análise de malware online interativo para pesquisa dinâmica e estática da maioria dos tipos de ameaças usando qualquer ambiente.
* [CAPA](https://github.com/mandiant/capa) - detecta capacidades em arquivos executáveis. Você executá-lo contra um PE, ELF, .NET módulo, ou arquivo shellcode e ele lhe diz o que ele acha que o programa pode fazer.
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - Configuração de malware e extração de carga útil.
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - Open Source Ferramenta de sandboxing altamente configurável.
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - Fortemente modificado garfo Cuckoo desenvolvido pela comunidade.
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - Biblioteca Python para controlar uma caixa de areia modificada por cuco.
* [Cutter](https://github.com/rizinorg/cutter) - Plataforma de engenharia reversa livre e aberta alimentada por rizin.
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - Framework de engenharia reversa de software.
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - Caixa de areia online poderosa livre por CrowdStrike.
* [Intezer](https://analyze.intezer.com/#/) - Intezer Analisar mergulha em binários do Windows para detectar semelhanças de microcódigo com ameaças conhecidas, a fim de fornecer resultados precisos, mas fáceis de entender.
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - Joe Sandbox detecta e analisa potenciais arquivos maliciosos e URLs em Windows, Android, Mac OS, Linux e iOS para atividades suspeitas; fornecendo relatórios de análise abrangentes e detalhados.
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - Framework de análise estática que automatiza o processo de extração de características chave de uma série de diferentes formatos de arquivo.
* [Metadefender Cloud](https://www.metadefender.com) - Plataforma de inteligência de ameaça livre fornecendo multiescaneamento, higienização de dados e avaliação de vulnerabilidade de arquivos.
* [Radare2](https://github.com/radareorg/radare2) - Estrutura de engenharia reversa e conjunto de ferramentas de linha de comando.
* [Reverse.IT](https://www.reverse.it/) - Domínio alternativo para a ferramenta Hybrid-Analysis fornecida pela CrowdStrike.
* [Rizin](https://github.com/rizinorg/rizin) - Estrutura de engenharia reversa tipo UNIX e conjunto de ferramentas de linha de comando
* [StringSifter](https://github.com/fireeye/stringsifter) - Uma ferramenta de aprendizado de máquina que classifica strings com base em sua relevância para análise de malware.
* [Threat.Zone](https://app.threat.zone) - Plataforma de análise de ameaças baseada em nuvem que incluem sandbox, CDR e análise interativa para pesquisadores.
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrie usa o comportamento em tempo de execução e centenas de recursos de um arquivo para realizar análise.
* [Viper](https://github.com/viper-framework/viper) - Análise binária baseada em Python e framework de gerenciamento, que funciona bem com Cuckoo e YARA.
* [Virustotal](https://www.virustotal.com) - Serviço online gratuito que analisa arquivos e URLs permitindo a identificação de vírus, worms, trojans e outros tipos de conteúdo malicioso detectado por motores antivírus e scanners de site.
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - Biblioteca de visualização de código aberto e ferramentas de linha de comando para logs (Cuckoo, Procmon, mais por vir).
* [Yomi](https://yomi.yoroi.company) - MultiSandbox gratuito gerenciado e hospedado por Yoroi.

### Ferramentas de Varredor

* [Fenrir](https://github.com/Neo23x0/Fenrir) - Um simples scanner de COI. Ele permite a digitalização de qualquer sistema Linux/Unix/OSX para COIs em bash simples. Criado pelos criadores de THOR e LOKI.
* [LOKI](https://github.com/Neo23x0/Loki) - Escâner IR gratuito para endpoint de digitalização com regras de yara e outros indicadores (IOCs).
* [Spyre](https://github.com/spyre-project/spyre) - Scanner IOC simples baseado em YARA escrito em Go

### Ferramentas de Linha do Tempo

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - Plataforma desenvolvida para construir facilmente uma linha do tempo detalhada de um incidente.
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - Ferramenta livre disponível do Fire/Mandiant que irá retratar arquivo de log/texto que pode destacar áreas no gráfico, que correspondeu a uma palavra chave ou frase. Bom para o tempo forrando uma infecção eo que foi feito após o compromisso.
* [Morgue](https://github.com/etsy/morgue) - App PHP Web por Etsy para gerenciar postmortems.
* [Plaso](https://github.com/log2timeline/plaso) -  um motor de infraestrutura baseado em Python para a ferramenta log2timeline.
* [Timesketch](https://github.com/google/timesketch) - Ferramenta de código aberto para análise de linha do tempo forense colaborativa.

### Vídeos

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - Apresentado por Bruce Schneier na OWASP AppSECUSA 2015.

### Coleção de Evidências das Janelas

* [AChoir](https://github.com/OMENScan/AChoir) - Ferramenta de framework/scripting para padronizar e simplificar o processo de scripting de utilitários de aquisição ao vivo para Windows.
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - Aplicação de console Lightweight Windows projetado para ajudar na coleta de informações do sistema para resposta a incidentes e engajamentos de segurança. Ele possui vários módulos e formatos de saída.
* [Cyber Triage](http://www.cybertriage.com) - Cyber Triage tem uma ferramenta de coleta leve que é livre de usar. Ele coleta arquivos de origem (como colmeias de registro e registros de eventos), mas também analisa-los no host ao vivo para que ele também possa coletar os executáveis que os itens de inicialização, agendados, tarefas, etc. se referem. Sua saída é um arquivo JSON que pode ser importado para a versão gratuita da Cyber Triage. A Cyber Triage é feita pela Sleuth Kit Labs, que também faz a autópsia. 
* [DFIR ORC](https://dfir-orc.github.io/) - DFIR ORC é uma coleção de ferramentas especializadas dedicadas à análise confiável e coleta de artefatos críticos, como o MFT, colmeias de registro ou logs de eventos. O DFIR ORC recolhe dados, mas não o analisa: não se destina a triagem de máquinas. Ele fornece um instantâneo forense relevante de máquinas que executam Microsoft Windows. O código pode ser encontrado em [GitHub](https://github.com/DFIR-ORC/dfir-orc).
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - Ferramenta que coleta diferentes artefatos em sistemas Windows ao vivo e registra os resultados em arquivos csv. Com as análises desses artefatos, um comprometimento precoce pode ser detectado.
* [Fibratus](https://github.com/rabbitstack/fibratus) - Ferramenta para exploração e rastreamento do kernel do Windows.
* [Hoarder](https://github.com/muteb/Hoarder) - Coletando os artefatos mais valiosos para investigações forenses ou incidentes.
* [IREC](https://binalyze.com/products/irec-free/) - Coletor de evidência de IR tudo em um que captura RAM Image, $MFT, EventLogs, WMI Scripts, Colmeias de Registro, Pontos de Restauração de Sistema e muito mais. É livre, relâmpago rápido e fácil de usar.
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponse é uma ferramenta de resposta ao vivo para coleta direcionada.
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - Ferramenta gratuita da Mandiant para recolher dados do sistema de acolhimento e comunicar a presença de Indicadores de Compromisso (IOC). Suporte somente para Windows. Já não é mantido. Apenas totalmente suportado até Windows 7 / Windows Server 2008 R2.
* [IRTriage](https://github.com/AJMartel/IRTriage) - Triagem de Resposta a Incidentes - Coleção de Evidências para Análise Forense.
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - Kroll Artifact Parser e Extractor (KAPE) por Eric Zimmerman. Uma ferramenta de triagem que encontra os artefatos digitais mais prevalentes e depois os analisa rapidamente. Grande e meticuloso quando o tempo é essencial.
* [LOKI](https://github.com/Neo23x0/Loki) - Escâner IR gratuito para endpoint de digitalização com regras de yara e outros indicadores (IOCs).
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - Triagem baseada em PowerShell e caça ameaça para Windows.
* [Panorama](https://github.com/AlmCo/Panorama) - Visão geral rápida do incidente em sistemas Windows ao vivo.
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - Plataforma forense em disco vivo, usando PowerShell.
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSRecon reúne dados de um host remoto do Windows usando PowerShell (v2 ou posterior), organiza os dados em pastas, hashes todos os dados extraídos, hashes PowerShell e várias propriedades do sistema, e envia os dados para a equipe de segurança. Os dados podem ser enviados para um compartilhamento, enviados por e-mail ou retidos localmente.
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - Ferramenta de código aberto, escrita em Perl, para extrair/parsar informações (chaves, valores, dados) do Registro e apresentá-las para análise.
