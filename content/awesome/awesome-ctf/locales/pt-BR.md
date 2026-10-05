# Awesome CTF [![Build Status](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Lista selecionada de frameworks, bibliotecas, recursos, softwares e tutoriais de [Capture The Flag](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF). O objetivo é ajudar iniciantes e jogadores experientes a encontrar tudo sobre CTF em um só lugar.

### Contribuir

Consulte primeiro as [diretrizes de contribuição](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md).

#### _Se você conhece uma ferramenta que ainda não está aqui, fique à vontade para abrir um pull request._

### Por quê?

Reunir ferramentas de CTF e lembrar de todas elas leva tempo. Este repositório mantém essas ferramentas dispersas em um só lugar.

### Conteúdo

- [Awesome CTF](#awesome-ctf)
  - [Criar](#create)
    - [Forense](#forensics)
    - [Plataformas](#platforms)
    - [Esteganografia](#steganography)
    - [Web](#web)
  - [Resolver](#solve)
    - [Ataques](#attacks)
    - [Força bruta](#bruteforcers)
    - [Criptografia](#crypto)
    - [Exploração de vulnerabilidades](#exploits)
    - [Forense](#forensics-1)
    - [Redes](#networking)
    - [Engenharia reversa](#reversing)
    - [Serviços](#services)
    - [Esteganografia](#steganography-1)
    - [Web](#web-1)

- [Recursos](#resources)
  - [Sistemas operacionais](#operating-systems)
  - [Pacotes iniciais](#starter-packs)
  - [Tutoriais](#tutorials)
  - [Jogos de guerra](#wargames)
  - [Sites](#websites)
  - [Wikis](#wikis)
  - [Coleções de write-ups](#writeups-collections)


# Criar <span id="create"></span>

*Ferramentas para criar desafios CTF*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - Livro on-line sobre como criar, testar e personalizar seus próprios desafios Capture The Flag.


## Forense <span id="forensics"></span>

*Ferramentas para criar desafios forenses*

- [Dnscat2](https://github.com/iagox86/dnscat2) - Hospeda comunicações por DNS.
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - Programa de triagem.
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - Ferramenta DFIR centrada em artefatos.
- [Registry Dumper](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_registry_keys.html) - Despeje o conteúdo do registro.

## Plataformas <span id="platforms"></span>

*Projetos que podem hospedar um CTF*

- [CTFd](https://github.com/isislab/CTFd) - Plataforma do ISISLab, NYU Tandon, para hospedar CTFs no estilo Jeopardy.
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - Desenvolva, implante e mantenha sua própria infraestrutura de CTF.
- [FBCTF](https://github.com/facebook/fbctf) - Plataforma do Facebook para hospedar competições Capture The Flag.
- [Haaukins](https://github.com/aau-network-security/haaukins) - Plataforma de virtualização altamente acessível e automatizada para educação em segurança.
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - Plataforma de pontuação para CTF.
- [Mellivora](https://github.com/Nakiami/mellivora) - Mecanismo CTF escrito em PHP.
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - Plataforma leve e poderosa para hospedar CTFs. Não usa JavaScript.
- [NightShade](https://github.com/UnrealAkama/NightShade) - Framework simples de CTF de segurança.
- [OpenCTF](https://github.com/easyctf/openctf) - CTF pronto para uso, com configuração mínima.
- [PicoCTF](https://github.com/picoCTF/picoCTF) - Plataforma usada para executar o picoCTF; um ótimo framework para hospedar qualquer CTF.
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - Framework pequeno para criar, gerenciar e empacotar desafios CTF no estilo Jeopardy.
- [RootTheBox](https://github.com/moloch--/RootTheBox) - Jogo de hackers (placar de CTF e gerenciador de partidas).
- [Scorebot](https://github.com/legitbs/scorebot) - Plataforma de CTF da Legitbs (Defcon).
- [SecGen](https://github.com/cliffe/SecGen) - Gerador de cenários de segurança que cria máquinas virtuais vulneráveis aleatoriamente.

## Esteganografia <span id="steganography"></span>

*Ferramentas para criar desafios de esteganografia*

Consulte a seção de resolução para esteganografia.

## Web <span id="web"></span>

*Ferramentas para criar desafios Web*

*Ofuscadores de JavaScript*

- [Metasploit JavaScript Obfuscator](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


# Resolver <span id="solve"></span>

*Ferramentas para resolver desafios CTF*

## Ataques <span id="attacks"></span>

*Ferramentas para executar vários tipos de ataque*

- [Bettercap](https://github.com/bettercap/bettercap) - Framework para executar ataques MITM (man-in-the-middle).
- [Yersinia](https://github.com/tomac/yersinia) - Ataca vários protocolos da camada 2.

## Criptografia <span id="crypto"></span>

*Ferramentas para resolver desafios de criptografia*

- [CyberChef](https://gchq.github.io/CyberChef) - Aplicativo Web para analisar e decodificar dados.
- [FeatherDuster](https://github.com/nccgroup/featherduster) - Ferramenta automatizada e modular de criptoanálise.
- [Hash Extender](https://github.com/iagox86/hash_extender) - Utilitário para executar ataques de extensão de comprimento de hash.
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - Ferramenta de linha de comando para executar ataques de padding oracle.
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - Ferramenta para quebrar a criptografia PkZip.
- [QuipQuip](https://quipqiup.com) - Ferramenta on-line para quebrar cifras de substituição ou Vigenère sem chave.
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - Ferramenta para recuperar chaves privadas RSA usando vários ataques.
- [RSATool](https://github.com/ius/rsatool) - Gera uma chave privada quando p e q são conhecidos.
- [XORTool](https://github.com/hellman/xortool) - Ferramenta para analisar cifras XOR multibyte.

## Força bruta <span id="bruteforcers"></span>

*Ferramentas para vários tipos de força bruta (senhas etc.)*

- [Hashcat](https://hashcat.net/hashcat/) - Quebrador de senhas.
- [Hydra](https://tools.kali.org/password-attacks/hydra) - Quebrador de logins paralelizado compatível com muitos protocolos.
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - Versão comunitária aprimorada do John the Ripper.
- [John The Ripper](http://www.openwall.com/john/) - Quebrador de senhas.
- [Nozzlr](https://github.com/intrd/nozzlr) - Framework de força bruta modular e fácil de automatizar com scripts.
- [Ophcrack](http://ophcrack.sourceforge.net/) - Quebrador de senhas do Windows baseado em rainbow tables.
- [Patator](https://github.com/lanjelot/patator) - Ferramenta de força bruta multifuncional e modular.
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - Extensão do Burp Suite para enviar grandes quantidades de requisições HTTP.

## Exploração de vulnerabilidades <span id="exploits"></span>

*Ferramentas para resolver desafios de exploração*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - Injeta DLLs em processos.
- [libformatstr](https://github.com/hellman/libformatstr) - Simplifica a exploração de format strings.
- [Metasploit](http://www.metasploit.com/) - Software para testes de penetração.
  - [Folha de consulta](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)
- [one_gadget](https://github.com/david942j/one_gadget) - Ferramenta para encontrar a chamada única ao gadget `execve('/bin/sh', NULL, NULL)`.
  - `gem install one_gadget`
- [Pwntools](https://github.com/Gallopsled/pwntools) - Framework CTF para escrever exploits.
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - Analisador interativo de execução do QEMU.
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - Framework para exploração ROP.
- [V0lt](https://github.com/P1kachu/v0lt) - Kit de ferramentas para CTF de segurança.

## Forense <span id="forensics-1"></span>

*Ferramentas para resolver desafios forenses*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - Quebra chaves WEP e WPA-PSK 802.11.
  - `apt-get install aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - Analisa arquivos de áudio (MP3, M4A etc.).
  - `apt-get install audacity`
- [Bkhive and Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - Despeja arquivos SYSTEM e SAM.
  - `apt-get install samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - Editor de arquivos PE.
- [Creddump](https://github.com/moyix/creddump) - Despeja credenciais do Windows.
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - Extrai sistemas de controle de versão distribuídos acessíveis pela Web.
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - Lê, grava e edita metadados de arquivos.
- [Extundelete](http://extundelete.sourceforge.net/) - Recupera dados perdidos de imagens montáveis.
- [Fibratus](https://github.com/rabbitstack/fibratus) - Ferramenta para explorar e rastrear o kernel do Windows.
- [Foremost](http://foremost.sourceforge.net/) - Extrai tipos específicos de arquivos usando cabeçalhos.
  - `apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - Repara sistemas de arquivos corrompidos.
- [Malzilla](http://malzilla.sourceforge.net/) - Ferramenta para investigar malware.
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - Ferramenta de análise forense de rede.
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - Encontra e extrai arquivos zlib compactados em PDFs.
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - Verifica a integridade de PNGs e exibe informações legíveis sobre os blocos.
  - `apt-get install pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - Extrai vários tipos de arquivo de executáveis.
- [Shellbags](https://github.com/williballenthin/shellbags) - Investiga arquivos NT_USER.dat.
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - Ferramenta de esteganografia em espaços em branco.
- [USBRip](https://github.com/snovvcrash/usbrip) - Ferramenta CLI para rastrear artefatos de dispositivos USB no GNU/Linux.
- [Volatility](https://github.com/volatilityfoundation/volatility) - Investiga despejos de memória.
- [Wireshark](https://www.wireshark.org) - Analisa arquivos pcap ou pcapng.

*Visualizadores do registro*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - Ferramenta do Windows para ler arquivos de registro off-line em unidades externas e visualizar chaves no formato .reg.
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - Usado para visualizar registros do Windows.

## Redes <span id="networking"></span>

*Ferramentas para resolver desafios de rede*

- [Masscan](https://github.com/robertdavidgraham/masscan) - Scanner massivo de endereços IP e portas TCP.
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - Ferramenta Linux para verificar hosts na rede e outras atividades.
- [Nipe](https://github.com/GouveaHeitor/nipe) - Script que define a rede Tor como gateway padrão.
- [Nmap](https://nmap.org/) - Utilitário de código aberto para descoberta de redes e auditoria de segurança.
- [Wireshark](https://www.wireshark.org/) - Analisa capturas de rede.
  - `apt-get install wireshark`
- [Zeek](https://www.zeek.org) - Monitor de segurança de rede de código aberto.
- [Zmap](https://zmap.io/) - Scanner de rede de código aberto.

## Engenharia reversa <span id="reversing"></span>

*Ferramentas para resolver desafios de engenharia reversa*

- [Androguard](https://github.com/androguard/androguard) - Faz engenharia reversa de aplicativos Android.
- [Angr](https://github.com/angr/angr) - Framework de análise binária independente de plataforma.
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - Mais um descompilador Android.
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - Descompilador Android.
- [Barf](https://github.com/programa-stic/barf-project) - Framework de análise binária e engenharia reversa.
- [Binary Ninja](https://binary.ninja/) - Framework de análise binária.
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - Coleção de ferramentas binárias.
- [BinWalk](https://github.com/devttys0/binwalk) - Analisa, faz engenharia reversa e extrai imagens de firmware.
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - Descompila binários x86/SPARC/PowerPC/ST-20 para C.
- [ctf_import](https://github.com/docileninja/ctf_import) – Executa funções básicas de binários stripped em várias plataformas.
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - Encontra padrões vulneráveis em executáveis binários.
- [demovfuscator](https://github.com/kirschju/demovfuscator) - Desofuscador em desenvolvimento para binários movfuscated.
- [Frida](https://github.com/frida/) - Injeção dinâmica de código.
- [GDB](https://www.gnu.org/software/gdb/) - Depurador do projeto GNU.
- [GEF](https://github.com/hugsy/gef) - Plugin para GDB.
- [Ghidra](https://ghidra-sre.org/) - Pacote de ferramentas de engenharia reversa de código aberto, semelhante ao IDA Pro.
- [Hopper](http://www.hopperapp.com/) - Ferramenta de engenharia reversa e desmontagem para OSX e Linux.
- [IDA Pro](https://www.hex-rays.com/products/ida/) - Software de engenharia reversa amplamente utilizado.
- [Jadx](https://github.com/skylot/jadx) - Descompila arquivos Android.
- [Java Decompilers](http://www.javadecompilers.com) - Descompilador on-line para Java e APKs Android.
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Descompilador e desmontador Java.
- [Objection](https://github.com/sensepost/objection) - Exploração de dispositivos móveis em tempo de execução.
- [PEDA](https://github.com/longld/peda) - Plugin para GDB (somente Python 2.7).
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - Ferramenta de instrumentação dinâmica de binários da Intel.
- [PINCE](https://github.com/korcankaraokcu/PINCE) - Interface de GDB e engenharia reversa voltada para hacking de jogos e automação.
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - Ferramenta que usa Intel Pin para análise de canal lateral.
- [Plasma](https://github.com/joelpx/plasma) - Desmontador interativo para x86/ARM/MIPS que gera pseudocódigo indentado e colorido.
- [Pwndbg](https://github.com/pwndbg/pwndbg) - Plugin para GDB que fornece utilitários para facilitar o uso do GDB.
- [radare2](https://github.com/radare/radare2) - Framework portátil de engenharia reversa.
- [Triton](https://github.com/JonathanSalwan/Triton/) - Framework de análise dinâmica de binários (DBA).
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - Descompila binários Python 2.7 (.pyc).
- [WinDbg](http://www.windbg.org/) - Depurador do Windows distribuído pela Microsoft.
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - Copia executáveis com permissão de execução, mas sem permissão de leitura.
- [Z3](https://github.com/Z3Prover/z3) - Provador de teoremas da Microsoft Research.

*Desofuscadores de JavaScript*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - Ferramenta para analisar malware JavaScript.
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - Analisa código JavaScript ofuscado.

*Analisadores SWF*
- [RABCDAsm](https://github.com/CyberShadow/RABCDAsm) - Coleção de utilitários, incluindo um montador/desmontador ActionScript 3.
- [Swftools](http://www.swftools.org/) - Coleção de utilitários para trabalhar com arquivos SWF.
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) - Script Python para analisar arquivos Flash.

## Serviços <span id="services"></span>

*Vários serviços úteis disponíveis na Internet*

- [CSWSH](http://cow.cat/cswsh.html) - Testador de Cross-Site WebSocket Hijacking.
- [Request Bin](https://requestbin.com/) - Permite inspecionar requisições HTTP enviadas a uma URL específica.

## Esteganografia <span id="steganography-1"></span>

*Ferramentas para resolver desafios de esteganografia*

- [AperiSolve](https://aperisolve.fr/) - Plataforma de código aberto que analisa camadas de imagens.
- [Convert](http://www.imagemagick.org/script/convert.php) - Converte imagens entre formatos e aplica filtros.
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - Exibe informações EXIF em arquivos JPEG.
- [Exiftool](https://linux.die.net/man/1/exiftool) - Lê e grava metadados de arquivos.
- [Exiv2](http://www.exiv2.org/manpage.html) - Ferramenta para manipular metadados de imagens.
- [Image Steganography](https://sourceforge.net/projects/image-steg/) - Incorpora texto e arquivos em imagens, com criptografia opcional e interface simples.
- [Image Steganography Online](https://incoherency.co.uk/image-steganography) - Ferramenta JavaScript no cliente para ocultar imagens nos bits menos significativos de outras imagens.
- [ImageMagick](http://www.imagemagick.org/script/index.php) - Ferramenta para manipular imagens.
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - Ferramenta universal de esteganografia.
- [Pngtools](https://packages.debian.org/sid/pngtools) - Várias ferramentas para análise de PNG.
  - `apt-get install pngtools`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - Desfoca e corrige imagens fora de foco.
- [Steganabara](https://www.openhub.net/p/steganabara) - Ferramenta Java para análise de esteganografia.
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - Codificador e decodificador de esteganografia on-line.
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - Executa ataques de dicionário por força bruta em imagens JPG.
- [StegCracker](https://github.com/Paradoxis/StegCracker) - Ferramenta de força bruta para encontrar dados ocultos em arquivos.
- [stegextract](https://github.com/evyatarmeged/stegextract) - Detecta arquivos e textos ocultos em imagens.
- [Steghide](http://steghide.sourceforge.net/) - Oculta dados em vários tipos de imagem.
- [StegOnline](https://georgeom.net/StegOnline/upload) - Executa várias operações de esteganografia de imagens, como ocultar e revelar arquivos em bits.
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - Aplica várias técnicas de esteganografia a imagens.
- [Zsteg](https://github.com/zed-0xff/zsteg/) - Análise de PNG/BMP.

## Web <span id="web-1"></span>

*Ferramentas para resolver desafios Web*

- [BurpSuite](https://portswigger.net/burp) - Ferramenta gráfica para testar a segurança de sites.
- [Commix](https://github.com/commixproject/commix) - Ferramenta automatizada completa para injeção e exploração de comandos do sistema operacional.
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Complemento do Firefox para facilitar a exploração Web.
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - Proxy de interceptação para repetir, depurar e testar requisições e respostas HTTP.
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - Complemento do Chrome para depurar requisições de rede.
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - Ferramenta de segurança ofensiva de alto desempenho para reconhecimento e varredura de vulnerabilidades.
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - Ferramenta automatizada para injeção SQL e controle de bancos de dados.
  ```pip install sqlmap```
- [W3af](https://github.com/andresriancho/w3af) - Framework de ataque e auditoria de aplicações Web.
- [XSSer](http://xsser.sourceforge.net/) - Testador automatizado de XSS.


# Recursos <span id="resources"></span>

*Onde descobrir conteúdo sobre CTF*

## Sistemas operacionais <span id="operating-systems"></span>

*Sistemas operacionais para testes de penetração e laboratórios de segurança*

- [Android Tamer](https://androidtamer.com/) - Baseado em Debian.
- [BackBox](https://backbox.org/) - Baseado em Ubuntu.
- [BlackArch Linux](https://blackarch.org/) - Baseado em Arch Linux.
- [Fedora Security Lab](https://labs.fedoraproject.org/security/) - Baseado no Fedora.
- [Kali Linux](https://www.kali.org/) - Baseado em Debian.
- [Parrot Security OS](https://www.parrotsec.org/) - Baseado em Debian.
- [Pentoo](http://www.pentoo.ch/) - Baseado no Gentoo.
- [URIX OS](http://urix.us/) - Baseado em openSUSE.
- [Wifislax](http://www.wifislax.com/) - Baseado em Slackware.

*Para analistas de malware e engenharia reversa*

- [Flare VM](https://github.com/fireeye/flare-vm/) - Baseado no Windows.
- [REMnux](https://remnux.org/) - Baseado em Debian.

## Pacotes iniciais <span id="starter-packs"></span>

*Coleções de scripts de instalação e ferramentas úteis*

- [CTF Tools](https://github.com/zardus/ctf-tools) - Coleção de scripts de instalação para várias ferramentas de pesquisa de segurança.
- [LazyKali](https://github.com/jlevitsk/lazykali) - Atualização de 2016 do LazyKali que simplifica a instalação de ferramentas e a configuração.

## Tutoriais <span id="tutorials"></span>

*Tutoriais para aprender a participar de CTFs*

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Guia prático da Trails of Bits.
- [CTF Resources](http://ctfs.github.io/resources/) - Guia inicial mantido pela comunidade.
- [How to Get Started in CTF](https://www.endgame.com/blog/how-get-started-ctf) - Orientação breve para iniciantes em CTF, da Endgame.
- [Intro. to CTF Course](https://www.hoppersroppers.org/courseCTF.html) - Curso gratuito que ensina noções básicas de perícia, criptografia e exploração Web.
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - Tutoriais em vídeo e walkthroughs de plataformas CTF populares.
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - Tutoriais em vídeo sobre exploração.
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - Curso introdutório curto sobre CTF (em russo).


## Jogos de guerra <span id="wargames"></span>

*CTFs sempre disponíveis on-line*

- [Backdoor](https://backdoor.sdslabs.co/) - Plataforma de segurança da SDSLabs.
- [Crackmes](https://crackmes.one/) - Desafios de engenharia reversa.
- [CryptoHack](https://cryptohack.org/) - Desafios divertidos de criptografia.
- [echoCTF.RED](https://echoctf.red/) - CTF on-line com vários alvos para atacar.
- [Exploit Exercises](https://exploit-exercises.lains.space/) - Máquinas virtuais para aprender sobre diversos problemas de segurança computacional.
- [Exploit.Education](http://exploit.education) - Máquinas virtuais para aprender sobre diversos problemas de segurança computacional.
- [Gracker](https://github.com/Samuirai/gracker) - Desafios binários com uma curva de aprendizado gradual e soluções para cada nível.
- [Hack The Box](https://www.hackthebox.eu) - CTFs semanais para entusiastas de segurança de todos os níveis.
- [Hack This Site](https://www.hackthissite.org/) - Ambiente de treinamento para hackers.
- [Hacker101](https://www.hacker101.com/) - CTF da HackerOne.
- [Hacking-Lab](https://hacking-lab.com/) - Plataforma de hacking ético, redes de computadores e desafios de segurança.
- [Hone Your Ninja Skills](https://honeyourskills.ninja/) - Desafios Web que começam pelos conceitos básicos.
- [IO](http://io.netgarage.org/) - Jogo de treinamento com desafios binários.
- [Microcorruption](https://microcorruption.com) - CTF de segurança embarcada.
- [Over The Wire](http://overthewire.org/wargames/) - Jogo de treinamento mantido pela comunidade OvertheWire.
- [PentesterLab](https://pentesterlab.com/) - Várias máquinas virtuais e desafios on-line (pago).
- [PicoCTF](https://2019game.picoctf.com) - Jogo CTF disponível o ano todo, com questões da competição picoCTF anual.
- [PWN Challenge](http://pwn.eonew.cn/) - Jogo de treinamento de exploração binária.
- [Pwnable.kr](http://pwnable.kr/) - Jogo Pwn.
- [Pwnable.tw](https://pwnable.tw/) - Jogo de treinamento com desafios binários.
- [Pwnable.xyz](https://pwnable.xyz/) - Jogo de treinamento de exploração binária.
- [Reversin.kr](http://reversing.kr/) - Desafio de engenharia reversa.
- [Ringzer0Team](https://ringzer0team.com/) - CTF on-line da equipe Ringzer0.
- [Root-Me](https://www.root-me.org/) - Plataforma de aprendizado sobre hacking e segurança da informação.
- [ROP Wargames](https://github.com/xelenonz/game) - Jogos de treinamento de ROP.
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - Desafios com tema de feriados
  publicados anualmente e mantidos pela SANS.
- [SmashTheStack](http://smashthestack.org/) - Vários wargames mantidos pela comunidade SmashTheStack.
- [Viblo CTF](https://ctf.viblo.asia) - Ótimos desafios CTF em várias categorias, com modos de prática e competição.
- [VulnHub](https://www.vulnhub.com/) - Máquinas virtuais para praticar segurança digital, aplicativos e administração de redes.
- [W3Challs](https://w3challs.com) - Plataforma de treinamento em testes de penetração com desafios de informática em várias categorias.
- [WebHacking](http://webhacking.kr) - Desafios de hacking Web.


*CTFs auto-hospedados*
- [Damn Vulnerable Web Application](http://www.dvwa.co.uk/) - Aplicação Web PHP/MySQL extremamente vulnerável.
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - Scripts e ferramentas para hospedar facilmente um CTF no [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project).

## Sites <span id="websites"></span>

*Sites gerais sobre CTF*

- [Awesome CTF Cheatsheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - Folha de consulta de CTF.
- [CTF Time](https://ctftime.org/) - Informações gerais sobre CTFs que acontecem pelo mundo.
- [Reddit Security CTF](http://www.reddit.com/r/securityctf) - Categoria CTF do Reddit.

## Wikis <span id="wikis"></span>

*Várias wikis para aprender sobre CTFs*

- [Bamboofox](https://bamboofox.github.io/) - Recursos chineses para aprender CTF.
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - Wiki da equipe bi0s.
- [CTF Cheatsheet](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - Dicas e truques de CTF.
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - Wiki de CTF do ISIS Lab.
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - Dicas de CTF dos membros da equipe OTA CTF.

## Coleções de write-ups <span id="writeups-collections"></span>

*Coleções de write-ups de CTF*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - Write-ups de desafios CTF por 0e85dc6eaf.
- [Captf](http://captf.com/) - Desafios e materiais CTF reunidos por psifertex.
- [CTF write-ups (community)](https://github.com/ctfs/) - Arquivo comunitário de desafios CTF e write-ups.
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - Coleta write-ups do CTF Time e organiza a ordem de leitura.
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - Repositório de write-ups de CTF mantido pela equipe HackThisSite.
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - Write-ups de competições CTF por mzfr.
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - Coleção de write-ups de CTF que usam pwntools.
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - Coleção de write-ups da equipe SababaSec.
- [Shell Storm](http://shell-storm.org/repo/CTF/) - Arquivo de desafios CTF mantido por Jonathan Salwan.
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - Repositório de write-ups CTF mantido pela equipe SmokeLeetEveryday.

### Licença

CC0 :)
