# Awesome CTF [![Build Status](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Une liste organisée de frameworks, bibliothèques, ressources, logiciels et didacticiels [Capture The Flag](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF). Cette liste vise à aider les débutants ainsi que les joueurs chevronnés des CTF à trouver tout ce qui concerne les CTF en un seul endroit.

### Contribuer

Veuillez d'abord jeter un coup d'œil rapide au [consignes de contribution](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md).

#### _Si vous connaissez un outil absent de cette liste, n’hésitez pas à proposer une pull request._

### Pourquoi ?

Il faut du temps pour constituer une collection d'outils utilisés dans CTF et les mémoriser tous. Ce référentiel permet de conserver tous ces outils dispersés au même endroit.

### Sommaire

- [Awesome CTF](#awesome-ctf)
  - [Créer](#create)
    - [Analyse forensique](#forensics)
    - [Plateformes](#platforms)
    - [Stéganographie](#steganography)
    - [Web](#web)
  - [Résoudre](#solve)
    - [Attaques](#attacks)
    - [Outils de force brute](#bruteforcers)
    - [Cryptographie](#crypto)
    - [Exploitation](#exploits)
    - [Analyse forensique](#forensics-1)
    - [Réseaux](#networking)
    - [Rétro-ingénierie](#reversing)
    - [Services](#services)
    - [Stéganographie](#steganography-1)
    - [Web](#web-1)

- [Ressources](#resources)
  - [Systèmes d’exploitation](#operating-systems)
  - [Kits de démarrage](#starter-packs)
  - [Tutoriels](#tutorials)
  - [Jeux d’entraînement](#wargames)
  - [Sites web](#websites)
  - [Wikis](#wikis)
  - [Collections de write-ups](#writeups-collections)


# Créer <span id="create"></span>

*Outils utilisés pour créer des défis CTF*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - Livre en ligne sur la création, le test et la personnalisation de vos propres défis Capture the Flag.


## Analyse forensique <span id="forensics"></span>

*Outils utilisés pour créer des défis médico-légaux*

- [Dnscat2](https://github.com/iagox86/dnscat2) - Héberge la communication via DNS.
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - Programme de tri.
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - Outil DFIR centré sur les artefacts.
- [Registry Dumper](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_registry_keys.html) - Videz votre registre.

## Plateformes <span id="platforms"></span>

*Projets pouvant être utilisés pour héberger un CTF*

- [CTFd](https://github.com/isislab/CTFd) - Plateforme pour héberger les CTF de style Jeopardy d'ISISLab, NYU Tandon.
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - Développer, déployer et maintenir votre propre infrastructure CTF.
- [FBCTF](https://github.com/facebook/fbctf) - Plateforme pour héberger les compétitions Capture the Flag de Facebook.
- [Haaukins](https://github.com/aau-network-security/haaukins) - Plateforme de virtualisation hautement accessible et automatisée pour la formation à la sécurité.
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - Plateforme de notation CTF.
- [Mellivora](https://github.com/Nakiami/mellivora) - Un moteur CTF écrit en PHP.
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - Une plateforme légère et performante pour héberger des CTF. Sans JavaScript.
- [NightShade](https://github.com/UnrealAkama/NightShade) - Un framework CTF de sécurité simple.
- [OpenCTF](https://github.com/easyctf/openctf) - CTF dans une boîte. Configuration minimale requise.
- [PicoCTF](https://github.com/picoCTF/picoCTF) - Plate-forme utilisée pour exécuter picoCTF. Un excellent cadre pour héberger n’importe quel CTF.
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - Petit framework pour créer/gérer/packager les défis CTF liés aux risques.
- [RootTheBox](https://github.com/moloch--/RootTheBox) - Un jeu de hackers (tableau de bord CTF et gestionnaire de jeu). Plateforme
- [Scorebot](https://github.com/legitbs/scorebot) - pour les CTF par Legitbs (Defcon).
- [SecGen](https://github.com/cliffe/SecGen) - Générateur de scénarios de sécurité. Crée des machines virtuelles vulnérables de manière aléatoire.

## Stéganographie <span id="steganography"></span>

*Outils utilisés pour créer des défis stégo*

Vérifiez la section de résolution pour la stéganographie.

## Web <span id="web"></span>

*Outils utilisés pour créer des défis Web*

*Obfuscateurs JavaScript*

- [Metasploit JavaScript Obfuscator](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


# Résoudre <span id="solve"></span>

*Outils utilisés pour résoudre les défis du CTF*

## Attaques <span id="attacks"></span>

*Outils utilisés pour effectuer divers types d'attaques*

- [Bettercap](https://github.com/bettercap/bettercap) - Framework pour effectuer des attaques MITM (Man in the Middle).
- [Yersinia](https://github.com/tomac/yersinia) - Attaquez divers protocoles sur la couche 2.

## Cryptographie <span id="crypto"></span>

*Outils utilisés pour résoudre les défis Crypto*

- [CyberChef](https://gchq.github.io/CyberChef) - Application Web pour analyser et décoder les données.
- [FeatherDuster](https://github.com/nccgroup/featherduster) - Un outil de cryptanalyse automatisé et modulaire.
- [Hash Extender](https://github.com/iagox86/hash_extender) - Un utilitaire permettant d'effectuer des attaques par extension de longueur de hachage.
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - Un outil CLI pour exécuter des attaques Oracle de remplissage.
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - Un outil pour briser le cryptage PkZip.
- [QuipQuip](https://quipqiup.com) - Un outil en ligne pour casser les chiffrements de substitution ou les chiffrements vigenere (sans clé).
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - Un outil pour récupérer la clé privée RSA avec diverses attaques.
- [RSATool](https://github.com/ius/rsatool) - Générer une clé privée avec connaissance de p et q.
- [XORTool](https://github.com/hellman/xortool) - Un outil pour analyser le chiffrement XOR multi-octets.

## Outils de force brute <span id="bruteforcers"></span>

*Outils utilisés pour divers types de force brute (mots de passe, etc.)*

- [Hashcat](https://hashcat.net/hashcat/) - Craqueur de mot de passe
- [Hydra](https://tools.kali.org/password-attacks/hydra) - Un cracker de connexion parallélisé qui prend en charge de nombreux protocoles d'attaque
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - Version communautaire améliorée de Jean l'Éventreur.
- [John The Ripper](http://www.openwall.com/john/) - Cracker de mot de passe.
- [Nozzlr](https://github.com/intrd/nozzlr) - Nozzlr est un framework bruteforce, véritablement modulaire et convivial pour les scripts.
- [Ophcrack](http://ophcrack.sourceforge.net/) - Cracker de mot de passe Windows basé sur des tables arc-en-ciel.
- [Patator](https://github.com/lanjelot/patator) - Patator est un brute-forcer polyvalent, avec une conception modulaire.
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - Extension Burp Suite pour l'envoi d'un grand nombre de requêtes HTTP

## Exploitation <span id="exploits"></span>

*Outils utilisés pour résoudre les défis liés aux exploits*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - Injecter des DLL dans les processus.
- [libformatstr](https://github.com/hellman/libformatstr) - Simplifie l'exploitation des chaînes de format.
- [Metasploit](http://www.metasploit.com/) - Logiciel de test d'intrusion.
  - [Aide-mémoire](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)
- [one_gadget](https://github.com/david942j/one_gadget) -  Un outil pour trouver le gadget appelé `execve('/bin/sh', NULL, NULL)`.
  - `gem install one_gadget`
- [Pwntools](https://github.com/Gallopsled/pwntools) - Framework CTF pour l'écriture d'exploits.
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - Analyseur d'exécution interactif QEMU.
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - Framework pour l’exploitation de ROP.
- [V0lt](https://github.com/P1kachu/v0lt) - Boîte à outils de sécurité CTF.

## Analyse forensique <span id="forensics-1"></span>

*Outils utilisés pour résoudre les défis médico-légaux*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - Crack les clés WEP et WPA-PSK 802.11.
  - `apt-get install aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - Analyser les fichiers son (mp3, m4a, peu importe).
  - `apt-get install audacity`
- [Bkhive and Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - Vidage des fichiers SYSTEM et SAM.
  - `apt-get install samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - Éditeur PE.
- [Creddump](https://github.com/moyix/creddump) - Vider les informations d'identification Windows.
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - Rips les systèmes de contrôle de version (distribués) accessibles sur le Web.
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - Lire, écrire et modifier les métadonnées du fichier.
- [Extundelete](http://extundelete.sourceforge.net/) - Utilisé pour récupérer les données perdues à partir d'images montables.
- [Fibratus](https://github.com/rabbitstack/fibratus) - Outil d'exploration et de traçage du noyau Windows.
- [Foremost](http://foremost.sourceforge.net/) - Extraire un type particulier de fichiers à l'aide d'en-têtes.
  - `apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - Utilisé pour réparer les systèmes de fichiers corrompus.
- [Malzilla](http://malzilla.sourceforge.net/) - Outil de recherche de logiciels malveillants.
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - Outil d’analyse médico-légale du réseau.
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - Recherchez et extrayez des fichiers zlib compressés dans des fichiers PDF.
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - Vérifie l'intégrité du format PNG et sauvegarde toutes les informations au niveau des blocs sous une forme lisible par l'homme.
  - `apt-get install pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - Extrayez divers types de fichiers à partir d'exes.
- [Shellbags](https://github.com/williballenthin/shellbags) - Examinez les fichiers NT\_USER.dat.
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - Un outil de stéganographie des espaces blancs.
- [USBRip](https://github.com/snovvcrash/usbrip) - Outil d'investigation CLI simple pour le suivi des artefacts de périphériques USB (historique des événements USB) sur GNU/Linux.
- [Volatility](https://github.com/volatilityfoundation/volatility) - Pour examiner les vidages de mémoire.
- [Wireshark](https://www.wireshark.org) - Utilisé pour analyser les fichiers pcap ou pcapng

*Visionneuses de registre*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - Outil simple pour Windows qui vous permet de lire les fichiers de registre hors ligne à partir d'un lecteur externe et d'afficher la clé de registre souhaitée au format de fichier .reg.
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - Utilisé pour afficher les registres Windows.

## Réseaux <span id="networking"></span>

*Outils utilisés pour résoudre les défis de mise en réseau*

- [Masscan](https://github.com/robertdavidgraham/masscan) - Scanner de port IP de masse, scanner de port TCP.
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - Un outil Linux pour vérifier un hôte sur le réseau (et d'autres activités hors réseau).
- [Nipe](https://github.com/GouveaHeitor/nipe) - Nipe est un script permettant de faire de Tor Network votre passerelle par défaut.
- [Nmap](https://nmap.org/) - Un utilitaire open source pour la découverte de réseau et l'audit de sécurité.
- [Wireshark](https://www.wireshark.org/) - Analysez les vidages réseau.
  - `apt-get install wireshark`
- [Zeek](https://www.zeek.org) - Un moniteur de sécurité réseau open source.
- [Zmap](https://zmap.io/) - Un scanner réseau open source.

## Rétro-ingénierie <span id="reversing"></span>

*Outils utilisés pour résoudre les défis d'inversion*

- [Androguard](https://github.com/androguard/androguard) - Rétro-ingénierie des applications Android. Cadre d'analyse binaire indépendant de la plate-forme
- [Angr](https://github.com/angr/angr) - .
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - Encore un autre décompilateur Android. Décompilateur Android
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - .
- [Barf](https://github.com/programa-stic/barf-project) - Cadre d'analyse binaire et d'ingénierie inverse.
- [Binary Ninja](https://binary.ninja/) - Cadre d'analyse binaire.
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - Collection d'outils binaires.
- [BinWalk](https://github.com/devttys0/binwalk) - Analysez, procédez à l'ingénierie inverse et extrayez les images du micrologiciel.
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - Décompilez les binaires x86/SPARC/PowerPC/ST-20 en C.
- [ctf_import](https://github.com/docileninja/ctf_import) – run basic functions from stripped binaries cross platform.
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - cwe_checker trouve des modèles vulnérables dans les exécutables binaires.
- [demovfuscator](https://github.com/kirschju/demovfuscator) - Un désobfuscateur en cours de développement pour les binaires déplacés.
- [Frida](https://github.com/frida/) - Injection de code dynamique.
- [GDB](https://www.gnu.org/software/gdb/) - Le débogueur du projet GNU. Plugin
- [GEF](https://github.com/hugsy/gef) - GDB.
- [Ghidra](https://ghidra-sre.org/) - Suite Open Source d'outils d'ingénierie inverse.  Similaire à IDA Pro.
- [Hopper](http://www.hopperapp.com/) - Outil d'ingénierie inverse (désassembleur) pour OSX et Linux.
- [IDA Pro](https://www.hex-rays.com/products/ida/) - Logiciel d'inversion le plus utilisé.
- [Jadx](https://github.com/skylot/jadx) - Décompilez les fichiers Android.
- [Java Decompilers](http://www.javadecompilers.com) - Un décompilateur en ligne pour les APK Java et Android.
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Décompilateur et désassembleur Java. Exploration mobile d'exécution
- [Objection](https://github.com/sensepost/objection) - . Plugin
- [PEDA](https://github.com/longld/peda) - GDB (uniquement python2.7).
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - Un outil d'instrumentation binaire dynamique d'Intel.
- [PINCE](https://github.com/korcankaraokcu/PINCE) - Outil d'ingénierie frontale/inverse GDB, axé sur le piratage et l'automatisation de jeux.
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - Un outil qui utilise la broche Intel pour l'analyse des canaux latéraux.
- [Plasma](https://github.com/joelpx/plasma) - Un désassembleur interactif pour x86/ARM/MIPS qui peut générer un pseudo-code indenté avec une syntaxe colorée.
- [Pwndbg](https://github.com/pwndbg/pwndbg) - Un plugin GDB qui fournit une suite d'utilitaires pour pirater facilement GDB.
- [radare2](https://github.com/radare/radare2) - Un cadre d'inversion portable.
- [Triton](https://github.com/JonathanSalwan/Triton/) - .
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - Décompilez les binaires Python 2.7 (.pyc).
- [WinDbg](http://www.windbg.org/) - Débogueur Windows distribué par Microsoft.
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - Programme capable de copier des exécutables avec autorisation d'exécution, mais sans autorisation de lecture.
- [Z3](https://github.com/Z3Prover/z3) - Un prouveur de théorème de Microsoft Research.

*Déobfuscateurs JavaScript*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - Un outil d'analyse des logiciels malveillants Javascript.
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - Analyser le code Javascript obscurci.

*Analyseurs SWF*
- [RABCDAsm](https://github.com/CyberShadow/RABCDAsm) - Collection d'utilitaires comprenant un assembleur/désassembleur ActionScript 3.
- [Swftools](http://www.swftools.org/) - Collection d'utilitaires permettant de travailler avec des fichiers SWF.
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) -  Un script Python pour analyser les fichiers Flash.

## Services <span id="services"></span>

*Divers types de services utiles disponibles sur Internet*

- [CSWSH](http://cow.cat/cswsh.html) - Testeur de piratage WebSocket multisite.
- [Request Bin](https://requestbin.com/) - Vous permet d'inspecter les requêtes http vers une URL particulière.

## Stéganographie <span id="steganography-1"></span>

*Outils utilisés pour résoudre les défis de la stéganographie*

- [AperiSolve](https://aperisolve.fr/) - Aperi'Solve est une plateforme d'analyse de couches sur image (open-source).
- [Convert](http://www.imagemagick.org/script/convert.php) - Convertissez les images en formats n/b et appliquez des filtres.
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - Affiche les informations EXIF ​​dans les fichiers JPEG.
- [Exiftool](https://linux.die.net/man/1/exiftool) - Lire et écrire des méta-informations dans des fichiers.
- [Exiv2](http://www.exiv2.org/manpage.html) - Outil de manipulation des métadonnées d'image.
- [Image Steganography](https://sourceforge.net/projects/image-steg/) - Incorpore du texte et des fichiers dans des images avec un cryptage en option. Interface utilisateur facile à utiliser.
- [Image Steganography Online](https://incoherency.co.uk/image-steganography) - Il s'agit d'un outil Javascript côté client permettant de masquer stéganographiquement des images à l'intérieur des "bits" inférieurs d'autres images.
- [ImageMagick](http://www.imagemagick.org/script/index.php) - Outil de manipulation d'images.
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - Outil stéganographique universel.
- [Pngtools](https://packages.debian.org/sid/pngtools) - Pour diverses analyses liées aux PNG.
  - `apt-get install pngtools`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - Utilisé pour supprimer le flou et corriger les images floues.
- [Steganabara](https://www.openhub.net/p/steganabara) -  Outil d'analyse stegano écrit en Java.
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - Encodeur et décodeur de stéganographie en ligne.
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - Lance des attaques par dictionnaire par force brute sur une image JPG.
- [StegCracker](https://github.com/Paradoxis/StegCracker) - Utilitaire de force brute de stéganographie pour découvrir les données cachées dans les fichiers.
- [stegextract](https://github.com/evyatarmeged/stegextract) - Détectez les fichiers et le texte cachés dans les images.
- [Steghide](http://steghide.sourceforge.net/) - Masquer les données dans différents types d'images.
- [StegOnline](https://georgeom.net/StegOnline/upload) - Réalisez un large éventail d'opérations de stéganographie d'images, telles que la dissimulation/révélation de fichiers cachés dans des bits (open source).
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - Appliquer diverses techniques de stéganographie aux images.
- [Zsteg](https://github.com/zed-0xff/zsteg/) - Analyse PNG/BMP.

## Web <span id="web-1"></span>

*Outils utilisés pour résoudre les défis du Web*

- [BurpSuite](https://portswigger.net/burp) - Un outil graphique pour tester la sécurité des sites Web.
- [Commix](https://github.com/commixproject/commix) - Outil automatisé d'injection et d'exploitation de commandes de système d'exploitation tout-en-un.
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Module complémentaire Firefox pour une exploitation Web facile.
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - Intercepter un proxy pour relire, déboguer et fuzz les requêtes et réponses HTTP
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - Module complémentaire pour Chrome pour le débogage des requêtes réseau.
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - Un outil de sécurité offensif hautes performances pour la reconnaissance et l'analyse des vulnérabilités.
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - Outil d'injection SQL automatique et de reprise de base de données.
  ```pip install sqlmap```
- [W3af](https://github.com/andresriancho/w3af) -  Cadre d'attaque et d'audit d'applications Web.
- [XSSer](http://xsser.sourceforge.net/) - Testeur XSS automatisé.


# Ressources <span id="resources"></span>

*Où découvrir le CTF*

## Systèmes d’exploitation <span id="operating-systems"></span>

*Tests d'intrusion et systèmes d'exploitation du laboratoire de sécurité*

- [Android Tamer](https://androidtamer.com/) - Basé sur Debian.
- [BackBox](https://backbox.org/) - Basé sur Ubuntu.
- [BlackArch Linux](https://blackarch.org/) - Basé sur Arch Linux.
- [Fedora Security Lab](https://labs.fedoraproject.org/security/) - Basé sur Fedora.
- [Kali Linux](https://www.kali.org/) - Basé sur Debian.
- [Parrot Security OS](https://www.parrotsec.org/) - Basé sur Debian.
- [Pentoo](http://www.pentoo.ch/) - Basé sur Gentoo.
- [URIX OS](http://urix.us/) - Basé sur openSUSE.
- [Wifislax](http://www.wifislax.com/) - Basé sur Slackware.

*Analystes de logiciels malveillants et rétro-ingénierie*

- [Flare VM](https://github.com/fireeye/flare-vm/) - Basé sur Windows.
- [REMnux](https://remnux.org/) - Basé sur Debian.

## Kits de démarrage <span id="starter-packs"></span>

*Collections de scripts d'installation, outils utiles*

- [CTF Tools](https://github.com/zardus/ctf-tools) - Collection de scripts d'installation pour installer divers outils de recherche sur la sécurité.
- [LazyKali](https://github.com/jlevitsk/lazykali) - Une actualisation 2016 de LazyKali qui simplifie l'installation des outils et la configuration.

## Tutoriels <span id="tutorials"></span>

*Tutoriels pour apprendre à participer aux CTF*

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Guide pratique de Trails of Bits.
- [CTF Resources](http://ctfs.github.io/resources/) - Guide de démarrage maintenu par la communauté.
- [How to Get Started in CTF](https://www.endgame.com/blog/how-get-started-ctf) - Courte directive pour les débutants CTF par Endgame
- [Intro. to CTF Course](https://www.hoppersroppers.org/courseCTF.html) - Un cours gratuit qui enseigne aux débutants les bases de la médecine légale, de la cryptographie et du web-ex.
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - Didacticiels vidéo et présentations des plateformes CTF populaires.
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - Tutoriels vidéo sur l'exploitation.
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - Un petit cours pour débutants en CTF (en russe).


## Jeux d’entraînement <span id="wargames"></span>

*CTF toujours en ligne*

- [Backdoor](https://backdoor.sdslabs.co/) - Plateforme de sécurité de SDSLabs.
- [Crackmes](https://crackmes.one/) - Défis d’ingénierie inverse.
- [CryptoHack](https://cryptohack.org/) - Des défis de cryptographie amusants.
- [echoCTF.RED](https://echoctf.red/) - CTF en ligne avec une variété de cibles à attaquer.
- [Exploit Exercises](https://exploit-exercises.lains.space/) - Variété de machines virtuelles pour découvrir divers problèmes de sécurité informatique.
- [Exploit.Education](http://exploit.education) - Variété de machines virtuelles pour découvrir divers problèmes de sécurité informatique.
- [Gracker](https://github.com/Samuirai/gracker) - Défis binaires ayant une courbe d'apprentissage lente et des rédactions pour chaque niveau.
- [Hack The Box](https://www.hackthebox.eu) - CTF hebdomadaires pour tous les types de passionnés de sécurité.
- [Hack This Site](https://www.hackthissite.org/) - Terrain d'entraînement pour les hackers.
- [Hacker101](https://www.hacker101.com/) - CTF de HackerOne
- [Hacking-Lab](https://hacking-lab.com/) - Plateforme de hacking éthique, de réseaux informatiques et de challenge de sécurité.
- [Hone Your Ninja Skills](https://honeyourskills.ninja/) - Défis Web en commençant par les défis de base.
- [IO](http://io.netgarage.org/) - Wargame pour les défis binaires.
- [Microcorruption](https://microcorruption.com) - CTF de sécurité intégré.
- [Over The Wire](http://overthewire.org/wargames/) - Wargame maintenu par la communauté OvertheWire.
- [PentesterLab](https://pentesterlab.com/) - Variété de défis VM et en ligne (payants).
- [PicoCTF](https://2019game.picoctf.com) - Jeu CTF toute l'année. Questions du concours annuel picoCTF.
- [PWN Challenge](http://pwn.eonew.cn/) - Jeu de guerre d'exploitation binaire.
- [Pwnable.kr](http://pwnable.kr/) - Jeu Pwn.
- [Pwnable.tw](https://pwnable.tw/) - Jeu de guerre pour défis binaires.
- [Pwnable.xyz](https://pwnable.xyz/) - Jeu de guerre d’exploitation de binaires.
- [Reversin.kr](http://reversing.kr/) - Défi d'inversion.
- [Ringzer0Team](https://ringzer0team.com/) - Ringzer0 Team CTF en ligne.
- [Root-Me](https://www.root-me.org/) - Plateforme d'apprentissage sur le piratage et la sécurité de l'information.
- [ROP Wargames](https://github.com/xelenonz/game) - Jeux de guerre ROP.
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - Défis sur le thème des vacances
publié chaque année et maintenu par SANS.
- [SmashTheStack](http://smashthestack.org/) - Une variété de wargames maintenus par la communauté SmashTheStack.
- [Viblo CTF](https://ctf.viblo.asia) - Divers défis CTF incroyables, dans de nombreuses catégories différentes. Possède à la fois le mode Entraînement et le mode Concours.
- [VulnHub](https://www.vulnhub.com/) - Basé sur VM pour des tâches pratiques en matière de sécurité numérique, d'applications informatiques et d'administration réseau.
- [W3Challs](https://w3challs.com) - Une plateforme de formation aux tests d'intrusion, qui propose différents défis informatiques, dans diverses catégories.
- [WebHacking](http://webhacking.kr) - Défis de piratage pour le Web.


*CTF auto-hébergés*
- [Damn Vulnerable Web Application](http://www.dvwa.co.uk/) - Application web PHP/MySQL sacrément vulnérable.
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - Scripts et outils pour héberger facilement un CTF sur [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project).

## Sites web <span id="websites"></span>

*Sites généralistes consacrés aux CTF*

- [Awesome CTF Cheatsheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - Aide-mémoire CTF.
- [CTF Time](https://ctftime.org/) - Informations générales sur les CTF présents dans le monde entier.
- [Reddit Security CTF](http://www.reddit.com/r/securityctf) - Catégorie Reddit CTF.

## Wikis <span id="wikis"></span>

*Divers wikis disponibles pour en savoir plus sur les CTF*

- [Bamboofox](https://bamboofox.github.io/) - Ressources chinoises pour apprendre le CTF.
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - Wiki de l'équipe Bi0s.
- [CTF Cheatsheet](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - Trucs et astuces CTF.
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - Wiki CTF par le laboratoire Isis.
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - Conseils CTF par les membres de l'équipe OTA CTF.

## Collections de write-ups <span id="writeups-collections"></span>

*Recueils d'articles du CTF*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - Rédactions pour les défis CTF par 0e85dc6eaf
- [Captf](http://captf.com/) - Défis et matériaux CTF dumpés par psifertex.
- [CTF write-ups (community)](https://github.com/ctfs/) - Défis CTF + archives de rédactions maintenues par la communauté.
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - Supprime tous les écrits de CTF Time et organise ceux à lire en premier.
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - CTF maintenu par l'équipe HackThisSite.
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - Rédaction du concours CTF par mzfr
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - Une collection d'articles du CTF utilisant tous pwntools.
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - Collection de write-ups de l’équipe SababaSec.
- [Shell Storm](http://shell-storm.org/repo/CTF/) - Archive de défis CTF maintenue par Jonathan Salwan.
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - CTF maintenu par l'équipe SmokeLeetEveryday.

### Licence

CC0 :)
