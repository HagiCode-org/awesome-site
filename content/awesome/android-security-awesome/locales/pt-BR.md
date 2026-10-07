# Android Security Awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

Uma coleção de recursos relacionados à segurança do Android.

Se você acha este projeto útil, considere [apoiá-lo](./sponsors.md).

1. [Ferramentas](#tools)
1. [Acadêmico/Pesquisa/Publicações/Livros](#academicresearchpublicationsbooks)
1. [Exploits/Vulnerabilidades/Bugs](#exploitsvulnerabilitiesbugs)

## Ferramentas

### Analisadores on-line

1. [Appknox](https://www.appknox.com/) - não gratuito
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - Ferramenta empresarial para testes de segurança de aplicativos móveis tanto para apps Android quanto iOS. O Lab Automated realiza análise dinâmica e estática em dispositivos reais na nuvem e retorna resultados em minutos. Não gratuito
1. [App Detonator](https://appdetonator.run/) - Detona o binário APK para fornecer detalhes em nível de código-fonte, incluindo autor do aplicativo, assinatura, build e informações do manifesto. Cota gratuita de 3 análises/dia.
1. [Pithus](https://beta.pithus.org/) - Analisador APK de código aberto. Ainda em Beta e limitado à análise estática por enquanto. É possível caçar malware com regras YARA. Mais [aqui](https://beta.pithus.org/about/).
1. [Oversecured](https://oversecured.com/) - Scanner de vulnerabilidades empresarial para aplicativos Android e iOS; oferece aos proprietários e desenvolvedores de aplicativos a capacidade de proteger cada nova versão de um app móvel integrando o Oversecured ao processo de desenvolvimento. Não gratuito.
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - Teste de segurança de aplicativos Android gratuito e rápido para desenvolvedores
1. [Koodous](https://koodous.com) - Realiza análise estática/dinâmica de malware em um vasto repositório de amostras Android e as verifica contra regras Yara públicas e privadas.
1. [Immuniweb](https://www.immuniweb.com/mobile/). Realiza um "OWASP Mobile Top 10 Test", uma "Mobile App Privacy Check" e um teste de permissões do aplicativo. O nível gratuito é de 4 testes por dia, incluindo um relatório após o registro.
1. [ANY.RUN](https://app.any.run/) - Uma plataforma interativa de análise de malware baseada na nuvem com suporte para análise de aplicativos Android. Um plano gratuito limitado está disponível.
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - Serviço gratuito de análise de malware Android. Um serviço bare-metal que apresenta análise estática e dinâmica para aplicativos Android. Um produto da [MalwarePot](https://malwarepot.com/index.php/AMAaaS)~~.
1. ~~[AppCritique](https://appcritique.boozallen.com) - Envie seus APKs Android e receba avaliações de segurança gratuitas e abrangentes~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - encerrando em 31 out. 2019~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - não gratuito~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - não é mais um analisador de apps Android~~
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10/dia~~
1. ~~[CopperDroid](http://copperdroid.isg.rhul.ac.uk/copperdroid/)~~
1. ~~[SandDroid](http://sanddroid.xjtu.edu.cn/)~~
1. ~~[Stowaway](http://www.android-permissions.org/)~~
1. ~~[Anubis](http://anubis.iseclab.org/)~~
1. ~~[Mobile app insight](http://www.mobile-app-insight.org)~~
1. ~~[Mobile-Sandbox](http://mobile-sandbox.com)~~
1. ~~[Ijiami](http://safe.ijiami.cn/)~~
1. ~~[Comdroid](http://www.comdroid.org/)~~
1. ~~[Android Sandbox](http://www.androidsandbox.net/)~~
1. ~~[Foresafe](http://www.foresafe.com/scan)~~
1. ~~[Dexter](https://dexter.dexlabs.org/)~~
1. ~~[MobiSec Eacus](http://www.mobiseclab.org/eacus.jsp)~~
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- máx 60MB, 15/dia~~
1. ~~[approver](https://approver.talos-sec.com/) - Approver é uma plataforma totalmente automatizada de análise de segurança e avaliação de riscos para apps Android e iOS. Não gratuito.~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - domínio expirado~~
1. ~~[AndroTotal](http://andrototal.org/) - morto~~

### Ferramentas de análise estática

1. [Androwarn](https://github.com/maaaaz/androwarn/) - detecta e avisa o usuário sobre possíveis comportamentos maliciosos desenvolvidos por um aplicativo Android.
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – não gratuito
1. [PSCout](https://security.csl.toronto.edu/pscout/) - Uma ferramenta que extrai a especificação de permissões do código-fonte do Android OS usando análise estática
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Smali Static Code Analysis
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - Examina e compara o CFG com o CFG de aplicativos maliciosos
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - extrai dados acionáveis como C&C, número de telefone, etc.
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - Realiza uma combinação de execução simbólica + concreta do app
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - Uma ferramenta para calcular o risco de apps Android com base em suas permissões, com uma demo on-line disponível.
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - Secure, Unified, Powerful, and Extensible Rust Android Analyzer
1. [ClassyShark](https://github.com/google/android-classyshark) - Uma ferramenta autônoma de inspeção de binários que pode navegar em qualquer executável Android e mostrar informações importantes.
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - Ferramenta multiplataforma que auxilia desenvolvedores, caçadores de bug-bounty e hackers éticos a realizar análise de código estática em aplicativos móveis. Esta ferramenta foi criada com grande foco na usabilidade e na orientação gráfica na interface do usuário.
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - Ferramenta de análise de programa intraprocedural e interprocedural conjunta para encontrar vulnerabilidades em apps Android, construída sobre Soot e Scala
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - Um sistema de pontuação de malware Android que ignora ofuscação
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - Descompilação de APK Android para preguiçosos
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - Examina o arquivo APK em busca de URIs, endpoints e segredos.
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - Aplicativo web para realizar análise estática e detectar malware em APKs Android.
1. [Detekt](https://github.com/detekt/detekt) - Análise de código estático para Kotlin
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - Software de análise avançada para payloads APK criados por RATs.
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - verifica (provando) que um app satisfaz uma política de segurança de fluxo de informação; construído sobre o [Checker Framework](https://types.cs.washington.edu/checker-framework/)~~

### Verificadores de vulnerabilidades de aplicativos

1. [QARK](https://github.com/linkedin/qark/) - QARK da LinkedIn serve para desenvolvedores de apps verificarem seus aplicativos em busca de problemas de segurança
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - A versão gratuita do Ostorlab verifica apps na Android Play Store, iOS App Store e Huawei AppGallery
1. ~~[Devknox](https://devknox.io/) - Plugin de IDE para construir apps Android seguros. Não é mais mantido.~~

### Ferramentas de análise dinâmica

1. [Android DBI framework](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- Uma máquina virtual para avaliação de aplicativos Android, engenharia reversa e análise de malware
1. [House](https://github.com/nccgroup/house)- House: um kit de ferramentas de análise de aplicativos móveis em tempo de execução com GUI web, alimentado por Frida, escrito em Python.
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - Mobile Security Framework é um framework inteligente, tudo-em-um e de código aberto para testes de penetração automatizados de aplicativos móveis (Android/iOS), capaz de realizar análise estática, dinâmica e testes de API web.
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - equivalente a fazer injeção de código baseada em stub mas sem nenhuma modificação no binário
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Android Package Inspector - análise dinâmica com hooks de API, iniciar atividades não exportadas e mais. (Módulo Xposed)
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - Instrumentação de código Java dinâmica (requer o framework Substrate)
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - Instrumentação de código Java dinâmica
1. [DECAF](https://github.com/sycurelab/DECAF) - Dynamic Executable Code Analysis Framework baseado em QEMU (DroidScope agora é uma extensão do DECAF)
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - Extensão Android para o sandbox Cuckoo
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Análise de memória do Android (requer root)
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – não foi possível encontrar a ferramenta real
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – porte do auditd para Android, não está mais em desenvolvimento ativo
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - não está mais em desenvolvimento ativo
1. [Aurasium](https://github.com/xurubin/aurasium) – Aplicação prática de políticas de segurança para apps Android via reescrita de bytecode e monitoramento de referência in-loco.
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - um sistema que suporta análise de apps de segurança na presença de recursos de atualização de código dinâmico (carregamento dinâmico de classes e reflexão). Esta ferramenta combina análise estática e dinâmica de aplicativos Android para revelar o comportamento oculto/atualizado e estender os resultados da análise estática com essas informações.
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - incompleto
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - Máquina virtual para Mobile Application Pentesting e Mobile Malware Analysis
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - Mobile Application Reverse Engineering and Analysis Framework
1. [Taintdroid](http://appanalysis.org) - requer compilação do AOSP
1. [ARTist](https://artist.cispa.saarland) - um framework flexível de instrumentação e análise híbrida de código aberto para apps Android e o middleware Java do Android. Ele é baseado no compilador do Android Runtime (ART) e modifica o código durante a compilação no dispositivo.
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - uma ferramenta para extrair características estáticas e dinâmicas de APKs Android. Ela combina diferentes ferramentas conhecidas de análise de apps Android como DroidBox, FlowDroid, Strace, AndroGuard e análise VirusTotal.
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - é uma poderosa interface web que ajuda você a manipular apps Android e iOS em tempo de execução
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor (Python API Monitor para apps Android) é uma ferramenta Python baseada em Frida para monitorar as APIs selecionadas pelo usuário durante a execução do app.
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - A ferramenta é usada para analisar o conteúdo do aplicativo Android no armazenamento local.
1. [Decompiler.com](https://www.decompiler.com/) - Descompilador APK e Java on-line
1. [friTap](https://github.com/fkie-cad/friTap)- Intercepta conexões SSL/TLS com Frida; permite extração de chaves TLS e descriptografia da carga TLS como PCAP no Android em tempo real.
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - Uma ferramenta projetada para automatizar várias tarefas de Mobile Application Penetration Testing (MAPT) e facilitar a interação com dispositivos Android.
1. [adbsploit](https://github.com/mesquidar/adbsploit) - ferramentas para explorar o dispositivo via ADB
1. [Brida](https://github.com/federicodotta/Brida) - Extensão do Burp Suite que, funcionando como uma ponte entre o Burp e o Frida, permite usar e manipular os próprios métodos dos aplicativos enquanto adultera o tráfego trocado entre os aplicativos e seus serviços/servidores backend.
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT (Mobile Pentest Toolkit) é uma solução indispensável para seus fluxos de trabalho de teste de penetração Android. Esta ferramenta permite automatizar tarefas de segurança.
1. [Andriller](https://github.com/den4uk/andriller) - um utilitário de software com uma coleção de ferramentas forenses para smartphones. Ele realiza uma aquisição somente leitura, forensicamente sólida e não destrutiva de dispositivos Android.
1. [Mira](https://github.com/vwww-droid/Mira) - Plataforma de análise de proteção em tempo de execução para apps Android e iOS de terceiros, permitindo que a IA use recursos shell, Java, Native e Frida do lado do app host para detecção de risco de ambiente e validação de hardening.
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - Módulo Zygisk que contorna a verificação de certificado BoringSSL dentro de `libflutter.so` e redireciona o tráfego dos apps Flutter selecionados para um proxy. Persiste após reinicializações, então não precisa de sessão Frida, cabo ou porta de escuta.
1. [Mobix](https://github.com/blackfoxxx/Mobix) - Laboratório de pentest Android autorizado: cadeia de bypass de SSL-pinning/root-detection do Frida, captura de tráfego mitmproxy com marcação automática de IDOR, um painel web e um servidor MCP de 36 ferramentas para que um agente Claude Code possa executar sozinho todo o loop de varredura a descobertas.
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – build personalizado para teste de penetração~~
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie é um pacote de software pré-configurado para funcionar como um ambiente de pentest Android. É totalmente portátil e pode ser carregado em um pendrive ou smartphone. Esta é uma solução única para todas as ferramentas necessárias na avaliação de segurança de aplicativos Android e uma alternativa fantástica às máquinas virtuais existentes.~~
1. ~~[Android Tamer](https://androidtamer.com/) - Plataforma virtual/Live para profissionais de segurança Android~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - (distro Linux) Anteriormente, costumava ser um [analisador on-line](http://dunkelheit.com.br/amat/analysis/index_en.php)~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE (Android reverse engineering) não está mais em desenvolvimento ativo~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – imagem personalizada para análise de malware~~

### Engenharia reversa

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – descompilação apk
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – poderoso, integra-se bem com outras ferramentas
1. [Apktool](https://github.com/iBotPeaches/Apktool) – realmente útil para compilação/descompilação (usa smali)
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – torna qualquer aplicativo no dispositivo depurável (usando Cydia Substrate).
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - conversor de dex para jar
1. [Enjarify](https://github.com/google/enjarify) - conversor de dex para jar do Google
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - injeta JavaScript para explorar aplicativos e uma [ferramenta GUI](https://github.com/antojoseph/diff-gui) para isso
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – kit de injeção de threads
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - descompilador Java
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - descompilador Java
1. [CFR](http://www.benf.org/other/cfr/) - descompilador Java
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - descompilador Java
1. [FernFlower](https://github.com/fesh0r/fernflower) - descompilador Java
1. [Redexer](https://github.com/plum-umd/redexer) – manipulação apk
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - GUI para engenharia reversa
1. [Andromeda](https://github.com/secrary/Andromeda) - Outra ferramenta básica de engenharia reversa de linha de comando
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - Um aplicativo CLI que prepara arquivos APK Android para inspeção HTTPS
1. [Noia](https://github.com/0x742/noia) - Ferramenta simples de navegador de arquivos de sandbox de aplicativos Android
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapk é uma ferramenta Python modular para ofuscar aplicativos Android sem exigir seu código-fonte.
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND (Anti-Repackaging through Multi-pattern, Anti-tampering based on Native Detection) é um novo esquema de proteção anti-adulteração que embute logic bombs e nós de detecção AT diretamente no arquivo apk sem precisar de seu código-fonte.
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - uma coleção de utilitários para simplificar e automatizar o processo de coleta de vestígios forenses úteis para identificar uma possível comprometimento de dispositivos Android e iOS
1. [Dexmod](https://github.com/google/dexmod) - uma ferramenta para exemplificar o patch de bytecode Dalvik em um arquivo DEX (Dalvik Executable) e auxiliar na análise estática de aplicativos Android.
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - Executa código arbitrário patchando arquivos OAT
1. [PhoneSploit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - Uma ferramenta de hacking tudo-em-um para explorar remotamente dispositivos Android usando ADB e o framework Metasploit para obter uma sessão Meterpreter.
1. [APKLab](https://github.com/APKLab/APKLab) - plugin para VS Code para analisar APKs
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - descompilador Java~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – conversor de .dex para .class~~

### Testes de fuzzing

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### Detectores de reempacotamento de aplicativos

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - uma ferramenta para detectar aplicativos Android reempacotados baseada na comparação de hash de recursos do app.

### Rastreadores de mercado

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - obter detalhes do app e baixar apps da loja oficial Google Play.
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - baixar apps do mercado Android de terceiros Aptoide
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - baixar apps do mercado Android de terceiros Appland
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader é uma ferramenta para baixar aplicativos Android diretamente da Google Play Store. Após uma configuração inicial (única), os aplicativos podem ser baixados especificando seu nome de pacote.
1. [APK Downloader](https://apkcombo.com/apk-downloader/) Serviço on-line para baixar APK da Play Store para uma configuração de dispositivo Android específica
1. ~~[Apkpure](https://apkpure.com/) - Baixador apk on-line. Também fornece seu próprio app para download.~~

### Ferramentas diversas

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - para converter arquivos XML binários em arquivos XML legíveis por humanos
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vts verifica um dispositivo em busca de um conjunto de vulnerabilidades
1. [AppMon](https://github.com/dpnishant/appmon)- AppMon é um framework automatizado para monitorar e adulterar chamadas de API do sistema de apps nativos macOS, iOS e Android. Ele é baseado em Frida.
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - Framework de experimentação Bluetooth baseado na engenharia reversa de controladores Bluetooth Broadcom
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDH verifica e endurece as configurações do dispositivo e lista apps instalados prejudiciais com base em permissões.
1. [NullKia](https://github.com/bad-antics/nullkia) - Framework de segurança móvel abrangente com suporte a 18 fabricantes com exploração de baseband, segurança celular, pesquisa TEE/TrustZone e ferramentas de extração BootROM.
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - Extrai o arquivo fornecido para imagens
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - Um playground flexível para desafios CTF Android
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - Uma coleção de exploits e hacks Android
1. [Spectre](https://github.com/thomasbuilds/Spectre) - Scanner de radiofrequência com capacidades de reconhecimento e ofensivas. Monitora celular, Wi-Fi, Bluetooth LE e GNSS no dispositivo, com um inspetor BLE GATT, um transmissor iBeacon e descoberta de rede local.
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Banco de dados de recursos de segurança de dispositivos Android~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - parece morto agora
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### Aplicativos vulneráveis para praticar

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)
1. [Damn Vulnerable Mobile App (DVMA)](https://github.com/cpeoples/dvma)

## Acadêmico/Pesquisa/Publicações/Livros

### Artigos de pesquisa

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### Livros

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### Outros

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - Uma sala de leitura que contém material de leitura técnica bem categorizado sobre teste de penetração móvel, malware móvel, forense móvel e todos os tipos de tópicos relacionados à segurança móvel~~

## Exploits/Vulnerabilidades/Bugs

### Lista

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - clique em pesquisar
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### Malware

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware GitHub repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - contém 1260 amostras de malware categorizadas em 49 famílias de malware diferentes, gratuitas para fins de pesquisa.
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - Um conjunto de ferramentas gratuitas de inteligência de cibercrime que pode indicar se um pacote APK específico foi comprometido em um ataque de malware Infostealer.
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 7 malwares que foram engenharia reversa e documentados
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo é uma coleção de aplicativos Android crescente de várias fontes, incluindo o mercado de aplicativos oficial Google Play.
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - O conjunto de dados contém 10479 amostras, obtidas ofuscando os conjuntos de dados MalGenome e Contagio Minidump com sete técnicas de ofuscação diferentes.~~
1. ~~[Admire](http://admire.necst.it/)~~

### Programas de recompensas

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### Como reportar problemas de segurança

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - Lista de relatórios Android Hackerone divulgados e outros recursos

## Contribuindo

Suas contribuições são sempre bem-vindas!

## 📖 Citação

```bibtex
@misc{
  author = {Ashish Bhatia - ashishb.net},
  title = {The most comprehensive collection of Android security-related resources},
  year = {2025},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/ashishb/android-security-awesome}}
}
```

Este repositório foi citado em [mais de 10 artigos](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome)
