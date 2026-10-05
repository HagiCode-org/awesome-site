# Awesome CTF [![Build Status](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Eine kuratierte Liste von [Capture The Flag](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF)-Frameworks, Bibliotheken, Ressourcen, Software und Tutorials. Diese Liste soll sowohl Anfängern als auch erfahrenen CTF-Spielern dabei helfen, alles rund um CTFs an einem Ort zu finden.

### Mitwirken

Bitte werfen Sie zunächst einen kurzen Blick auf [Beitragsrichtlinien](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md).

#### _Wenn Sie ein Tool kennen, das hier fehlt, können Sie gern einen Pull Request eröffnen._

### Warum?

Es braucht Zeit, eine Sammlung der in CTF verwendeten Tools aufzubauen und sich alle zu merken. Dieses Repo hilft dabei, all diese verstreuten Tools an einem Ort aufzubewahren.

### Inhalt

- [Awesome CTF](#awesome-ctf)
  - [Erstellen](#create)
    - [Forensik](#forensics)
    - [Plattformen](#platforms)
    - [Steganografie](#steganography)
    - [Web](#web)
  - [Lösen](#solve)
    - [Angriffe](#attacks)
    - [Brute-Force-Tools](#bruteforcers)
    - [Kryptografie](#crypto)
    - [Schwachstellen-Ausnutzung](#exploits)
    - [Forensik](#forensics-1)
    - [Netzwerke](#networking)
    - [Reverse Engineering](#reversing)
    - [Dienste](#services)
    - [Steganografie](#steganography-1)
    - [Web](#web-1)

- [Ressourcen](#resources)
  - [Betriebssysteme](#operating-systems)
  - [Starterpakete](#starter-packs)
  - [Anleitungen](#tutorials)
  - [Sicherheits-Übungsspiele](#wargames)
  - [Websites](#websites)
  - [Wikis](#wikis)
  - [Write-up-Sammlungen](#writeups-collections)


# Erstellen <span id="create"></span>

*Tools zum Erstellen von CTF-Herausforderungen*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - Online-Buch zum Erstellen, Testen und Anpassen Ihrer eigenen Capture the Flag-Herausforderungen.


## Forensik <span id="forensics"></span>

*Tools zum Erstellen forensischer Herausforderungen*

- [Dnscat2](https://github.com/iagox86/dnscat2) - Hostet die Kommunikation über DNS.
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - Triage-Programm.
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - Artefaktzentriertes DFIR-Tool.
- [Registry Dumper](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_registry_keys.html) - Erstellen Sie einen Dump Ihrer Registrierung.

## Plattformen <span id="platforms"></span>

*Projekte, die zum Hosten eines CTF verwendet werden können*

- [CTFd](https://github.com/isislab/CTFd) - Plattform zum Hosten von CTFs im Jeopardy-Stil von ISISLab, NYU Tandon.
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - Entwickeln, implementieren und warten Sie Ihre eigene CTF-Infrastruktur.
- [FBCTF](https://github.com/facebook/fbctf) - Plattform zur Ausrichtung von Capture the Flag-Wettbewerben von Facebook.
- [Haaukins](https://github.com/aau-network-security/haaukins) - Hoch zugängliche und automatisierte Virtualisierungsplattform für die Sicherheitsausbildung.
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - CTF-Bewertungsplattform.
- [Mellivora](https://github.com/Nakiami/mellivora) - Eine in PHP geschriebene CTF-Engine.
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - Leistungsstarke, leichtgewichtige Plattform zum Hosten von CTFs. Ganz ohne JavaScript.
- [NightShade](https://github.com/UnrealAkama/NightShade) - Ein einfaches Sicherheits-CTF-Framework.
- [OpenCTF](https://github.com/easyctf/openctf) - CTF in einer Box. Minimale Einrichtung erforderlich.
- [PicoCTF](https://github.com/picoCTF/picoCTF) - Die Plattform, auf der picoCTF ausgeführt wird. Ein großartiges Framework zum Hosten jedes CTF.
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - Kleines Framework zum Erstellen/Verwalten/Paketieren von CTF-Herausforderungen.
- [RootTheBox](https://github.com/moloch--/RootTheBox) - ein Spiel der Hacker (CTF Scoreboard & Game Manager).
- [Scorebot](https://github.com/legitbs/scorebot) - Plattform für CTFs von Legitbs (Defcon).
- [SecGen](https://github.com/cliffe/SecGen) - Sicherheitsszenariogenerator. Erstellt zufällig anfällige virtuelle Maschinen.

## Steganografie <span id="steganography"></span>

*Tools zum Erstellen von Stego-Herausforderungen*

Lösungsabschnitt für Steganographie prüfen.

## Web <span id="web"></span>

*Tools zum Erstellen von Web-Challenges*

*JavaScript-Obfuskatoren*

- [Metasploit JavaScript Obfuscator](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


# Lösen <span id="solve"></span>

*Tools zur Lösung von CTF-Herausforderungen*

## Angriffe <span id="attacks"></span>

*Tools zur Durchführung verschiedener Arten von Angriffen*

- [Bettercap](https://github.com/bettercap/bettercap) - Framework zur Durchführung von MITM-Angriffen (Man in the Middle).
- [Yersinia](https://github.com/tomac/yersinia) - Greift verschiedene Protokolle auf Layer 2 an.

## Kryptografie <span id="crypto"></span>

*Tools zur Lösung von Krypto-Herausforderungen*

- [CyberChef](https://gchq.github.io/CyberChef) - Web-App zur Analyse und Dekodierung von Daten.
- [FeatherDuster](https://github.com/nccgroup/featherduster) - Ein automatisiertes, modulares Kryptoanalyse-Tool.
- [Hash Extender](https://github.com/iagox86/hash_extender) - Ein Dienstprogramm zur Durchführung von Hash-Längenerweiterungsangriffen.
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - Ein CLI-Tool zum Ausführen von Padding-Oracle-Angriffen.
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - Ein Tool zum Aufbrechen der PkZip-Verschlüsselung.
- [QuipQuip](https://quipqiup.com) - Ein Online-Tool zum Brechen von Substitutions- oder Vigenere-Chiffren (ohne Schlüssel).
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - Ein Tool zum Wiederherstellen des privaten RSA-Schlüssels mit verschiedenen Angriffen.
- [RSATool](https://github.com/ius/rsatool) - Generieren Sie einen privaten Schlüssel mit Kenntnis von p und q.
- [XORTool](https://github.com/hellman/xortool) - Ein Tool zur Analyse der Multibyte-XOR-Verschlüsselung.

## Brute-Force-Tools <span id="bruteforcers"></span>

*Tools für verschiedene Arten von Bruteforcing (Passwörter usw.)*

- [Hashcat](https://hashcat.net/hashcat/) - Passwort-Cracker
- [Hydra](https://tools.kali.org/password-attacks/hydra) - Ein parallelisierter Login-Cracker, der zahlreiche Angriffsprotokolle unterstützt
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - Community-erweiterte Version von John the Ripper.
- [John The Ripper](http://www.openwall.com/john/) - Passwort-Cracker.
- [Nozzlr](https://github.com/intrd/nozzlr) - Nozzlr ist ein Bruteforce-Framework, wirklich modular und skriptfreundlich.
- [Ophcrack](http://ophcrack.sourceforge.net/) - Windows-Passwort-Cracker basierend auf Rainbow Tables.
- [Patator](https://github.com/lanjelot/patator) - Patator ist ein Mehrzweck-Brute-Force-Gerät mit modularem Aufbau.
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - Burp Suite-Erweiterung zum Senden einer großen Anzahl von HTTP-Anfragen

## Schwachstellen-Ausnutzung <span id="exploits"></span>

*Tools zur Lösung von Exploits-Herausforderungen*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - DLLs in Prozesse einfügen.
- [libformatstr](https://github.com/hellman/libformatstr) - Vereinfachen Sie die Nutzung von Formatzeichenfolgen.
- [Metasploit](http://www.metasploit.com/) - Penetrationstest-Software.
  - [Spickzettel](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)
- [one_gadget](https://github.com/david942j/one_gadget) -  Ein Tool zum Auffinden des einen Gadget-Aufrufs `execve('/bin/sh', NULL, NULL)`.
  - `gem install one_gadget`
- [Pwntools](https://github.com/Gallopsled/pwntools) - CTF-Framework zum Schreiben von Exploits.
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - QEMU Interaktiver Laufzeitanalysator.
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - Framework für die ROP-Ausnutzung.
- [V0lt](https://github.com/P1kachu/v0lt) - Sicherheits-CTF-Toolkit.

## Forensik <span id="forensics-1"></span>

*Tools zur Lösung forensischer Herausforderungen*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - 802.11 WEP- und WPA-PSK-Schlüssel knacken.
  - `apt-get install aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - Analysieren Sie Sounddateien (mp3, m4a, was auch immer).
  - `apt-get install audacity`
- [Bkhive and Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - SYSTEM- und SAM-Dateien sichern.
  - `apt-get install samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - PE-Editor.
- [Creddump](https://github.com/moyix/creddump) - Windows-Anmeldeinformationen sichern.
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - Rippt über das Internet zugängliche (verteilte) Versionskontrollsysteme.
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - Dateimetadaten lesen, schreiben und bearbeiten.
- [Extundelete](http://extundelete.sourceforge.net/) - Wird zum Wiederherstellen verlorener Daten aus bereitstellbaren Images verwendet.
- [Fibratus](https://github.com/rabbitstack/fibratus) - Tool zur Erkundung und Nachverfolgung des Windows-Kernels.
- [Foremost](http://foremost.sourceforge.net/) - Extrahieren Sie bestimmte Dateitypen mithilfe von Headern.
  - `apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - Wird zum Reparieren beschädigter Dateisysteme verwendet.
- [Malzilla](http://malzilla.sourceforge.net/) - Malware-Jagdtool.
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - Netzwerkforensisches Analysetool.
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - Suchen und extrahieren Sie Zlib-Dateien, die in PDF-Dateien komprimiert sind.
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - Überprüft die Integrität von PNG und gibt alle Informationen auf Chunk-Ebene in für Menschen lesbarer Form aus.
  - `apt-get install pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - Extrahieren Sie verschiedene Dateitypen aus Exes.
- [Shellbags](https://github.com/williballenthin/shellbags) - NT\_USER.dat-Dateien untersuchen.
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - Ein Whitespace-Steganographie-Tool.
- [USBRip](https://github.com/snovvcrash/usbrip) - Einfaches CLI-Forensik-Tool zum Verfolgen von USB-Geräteartefakten (Verlauf von USB-Ereignissen) unter GNU/Linux.
- [Volatility](https://github.com/volatilityfoundation/volatility) - Zur Untersuchung von Speicherauszügen.
- [Wireshark](https://www.wireshark.org) - Wird zum Analysieren von PCAP- oder PCAPNG-Dateien verwendet

*Registry-Viewer*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - Einfaches Tool für Windows, mit dem Sie Offline-Registrierungsdateien von einem externen Laufwerk lesen und den gewünschten Registrierungsschlüssel im .reg-Dateiformat anzeigen können.
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - Wird zum Anzeigen von Windows-Registrierungen verwendet.

## Netzwerke <span id="networking"></span>

*Tools zur Lösung von Netzwerkherausforderungen*

- [Masscan](https://github.com/robertdavidgraham/masscan) - Massen-IP-Port-Scanner, TCP-Port-Scanner.
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - Ein Linux-Tool zum Überprüfen eines Hosts im Netzwerk (und anderer Aktivitäten außerhalb des Netzwerks).
- [Nipe](https://github.com/GouveaHeitor/nipe) - Nipe ist ein Skript, um Tor Network zu Ihrem Standard-Gateway zu machen.
- [Nmap](https://nmap.org/) - Ein Open-Source-Dienstprogramm zur Netzwerkerkennung und Sicherheitsüberwachung.
- [Wireshark](https://www.wireshark.org/) - Analysieren Sie die Netzwerk-Dumps.
  - `apt-get install wireshark`
- [Zeek](https://www.zeek.org) - Ein Open-Source-Netzwerksicherheitsmonitor.
- [Zmap](https://zmap.io/) - Ein Open-Source-Netzwerkscanner.

## Reverse Engineering <span id="reversing"></span>

*Tools zur Lösung von Reversing-Herausforderungen*

- [Androguard](https://github.com/androguard/androguard) - Reverse Engineering von Android-Anwendungen.
- [Angr](https://github.com/angr/angr) - plattformunabhängiges Binäranalyse-Framework.
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - Noch ein Android-Decompiler.
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - Android-Dekompiler.
- [Barf](https://github.com/programa-stic/barf-project) - Binäranalyse- und Reverse-Engineering-Framework.
- [Binary Ninja](https://binary.ninja/) - Binäranalyse-Framework.
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - Sammlung binärer Tools.
- [BinWalk](https://github.com/devttys0/binwalk) - Firmware-Images analysieren, zurückentwickeln und extrahieren.
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - Dekompilieren Sie x86/SPARC/PowerPC/ST-20-Binärdateien nach C.
- [ctf_import](https://github.com/docileninja/ctf_import) – run basic functions from stripped binaries cross platform.
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - cwe_checker findet anfällige Muster in ausführbaren Binärdateien.
- [demovfuscator](https://github.com/kirschju/demovfuscator) - Ein in Arbeit befindlicher Deobfuscator für movfuscated-Binärdateien.
- [Frida](https://github.com/frida/) - Dynamische Code-Injektion.
- [GDB](https://www.gnu.org/software/gdb/) - Der GNU-Projekt-Debugger.
- [GEF](https://github.com/hugsy/gef) - GDB-Plugin.
- [Ghidra](https://ghidra-sre.org/) - Open-Source-Suite von Reverse-Engineering-Tools.  Ähnlich wie IDA Pro.
- [Hopper](http://www.hopperapp.com/) - Reverse-Engineering-Tool (Disassembler) für OSX und Linux.
- [IDA Pro](https://www.hex-rays.com/products/ida/) - Am häufigsten verwendete Rückfahrsoftware.
- [Jadx](https://github.com/skylot/jadx) - Android-Dateien dekompilieren.
- [Java Decompilers](http://www.javadecompilers.com) - Ein Online-Decompiler für Java- und Android-APKs.
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Java-Decompiler und Disassembler.
- [Objection](https://github.com/sensepost/objection) - Laufzeit Mobile Exploration.
- [PEDA](https://github.com/longld/peda) - GDB-Plugin (nur Python2.7).
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - Ein dynamisches binäres Instrumentierungstool von Intel.
- [PINCE](https://github.com/korcankaraokcu/PINCE) - GDB-Frontend-/Reverse-Engineering-Tool, konzentriert auf Game-Hacking und Automatisierung.
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - Ein Tool, das Intel-Pins für die Seitenkanalanalyse verwendet.
- [Plasma](https://github.com/joelpx/plasma) - Ein interaktiver Disassembler für x86/ARM/MIPS, der eingerückten Pseudocode mit farbiger Syntax generieren kann.
- [Pwndbg](https://github.com/pwndbg/pwndbg) - Ein GDB-Plugin, das eine Reihe von Dienstprogrammen zum einfachen Hacken von GDB bereitstellt.
- [radare2](https://github.com/radare/radare2) - Ein tragbares Rückfahrgerüst.
- [Triton](https://github.com/JonathanSalwan/Triton/) - Dynamic Binary Analysis (DBA)-Framework.
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - Dekompilieren Sie Python 2.7-Binärdateien (.pyc).
- [WinDbg](http://www.windbg.org/) - Windows-Debugger, vertrieben von Microsoft.
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - Programm, das ausführbare Dateien mit Ausführung, aber ohne Leseberechtigung kopieren kann.
- [Z3](https://github.com/Z3Prover/z3) - Ein Theorembeweis von Microsoft Research.

*JavaScript-Deobfuscators*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - Ein Javascript-Malware-Analysetool.
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - Analysieren Sie verschleierten Javascript-Code.

*SWF-Analysatoren*
- [RABCDAsm](https://github.com/CyberShadow/RABCDAsm) - Sammlung von Dienstprogrammen, einschließlich eines ActionScript 3-Assemblers/Disassemblers.
- [Swftools](http://www.swftools.org/) - Sammlung von Dienstprogrammen zum Arbeiten mit SWF-Dateien.
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) -  Ein Python-Skript zum Analysieren von Flash-Dateien.

## Dienste <span id="services"></span>

*Verschiedene nützliche Dienste im Internet verfügbar*

- [CSWSH](http://cow.cat/cswsh.html) - Cross-Site-WebSocket-Hijacking-Tester.
- [Request Bin](https://requestbin.com/) - Ermöglicht die Überprüfung von HTTP-Anfragen an eine bestimmte URL.

## Steganografie <span id="steganography-1"></span>

*Tools zur Lösung von Steganographie-Herausforderungen*

- [AperiSolve](https://aperisolve.fr/) - Aperi'Solve ist eine Plattform, die eine Schichtanalyse für Bilder durchführt (Open Source).
- [Convert](http://www.imagemagick.org/script/convert.php) - Konvertieren Sie Bilder in S/W-Formate und wenden Sie Filter an.
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - Zeigt EXIF-Informationen in JPEG-Dateien an.
- [Exiftool](https://linux.die.net/man/1/exiftool) - Metainformationen in Dateien lesen und schreiben.
- [Exiv2](http://www.exiv2.org/manpage.html) - Tool zur Bearbeitung von Bildmetadaten.
- [Image Steganography](https://sourceforge.net/projects/image-steg/) - Bettet Text und Dateien mit optionaler Verschlüsselung in Bilder ein. Benutzerfreundliche Benutzeroberfläche.
- [Image Steganography Online](https://incoherency.co.uk/image-steganography) - Dies ist ein clientseitiges Javascript-Tool zum steganografischen Verstecken von Bildern in den unteren „Bits“ anderer Bilder
- [ImageMagick](http://www.imagemagick.org/script/index.php) - Tool zum Bearbeiten von Bildern.
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - Universelles Steganographie-Werkzeug.
- [Pngtools](https://packages.debian.org/sid/pngtools) - Für verschiedene Analysen im Zusammenhang mit PNGs.
  - `apt-get install pngtools`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - Wird zum Entschärfen und Korrigieren von defokussierten Bildern verwendet.
- [Steganabara](https://www.openhub.net/p/steganabara) -  In Java geschriebenes Tool für die Stegano-Analyse.
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - Online-Steganographie-Encoder und -Decoder.
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - Startet Brute-Force-Wörterbuchangriffe auf JPG-Bilder.
- [StegCracker](https://github.com/Paradoxis/StegCracker) - Steganographie-Brute-Force-Dienstprogramm zum Aufdecken versteckter Daten in Dateien.
- [stegextract](https://github.com/evyatarmeged/stegextract) - Erkennen Sie versteckte Dateien und Text in Bildern.
- [Steghide](http://steghide.sourceforge.net/) - Daten in verschiedenen Bildtypen ausblenden.
- [StegOnline](https://georgeom.net/StegOnline/upload) - Führen Sie eine Vielzahl von Bild-Steganografie-Vorgängen durch, z. B. das Verbergen/Aufdecken von in Bits verborgenen Dateien (Open Source).
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - Wenden Sie verschiedene Steganographietechniken auf Bilder an.
- [Zsteg](https://github.com/zed-0xff/zsteg/) - PNG/BMP-Analyse.

## Web <span id="web-1"></span>

*Tools zur Lösung von Web-Herausforderungen*

- [BurpSuite](https://portswigger.net/burp) - Ein grafisches Tool zum Testen der Website-Sicherheit.
- [Commix](https://github.com/commixproject/commix) - Automatisiertes All-in-One-Tool zur Injektion und Ausnutzung von Betriebssystembefehlen.
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Firefox-Add-on für einfache Web-Ausnutzung.
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - Abfangender Proxy zum Wiedergeben, Debuggen und Fuzzen von HTTP-Anfragen und -Antworten
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - Add-on für Chrome zum Debuggen von Netzwerkanfragen.
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - Ein leistungsstarkes offensives Sicherheitstool zur Aufklärung und zum Scannen von Schwachstellen.
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - Automatisches SQL-Injection- und Datenbankübernahmetool.
  ```pip install sqlmap```
- [W3af](https://github.com/andresriancho/w3af) -  Web Application Attack and Audit Framework.
- [XSSer](http://xsser.sourceforge.net/) - Automatisierter XSS-Tester.


# Ressourcen <span id="resources"></span>

*Wo Sie mehr über CTF erfahren können*

## Betriebssysteme <span id="operating-systems"></span>

*Penetrationstests und Sicherheitslabor Betriebssysteme*

- [Android Tamer](https://androidtamer.com/) - Basierend auf Debian.
- [BackBox](https://backbox.org/) - Basierend auf Ubuntu.
- [BlackArch Linux](https://blackarch.org/) - Basierend auf Arch Linux.
- [Fedora Security Lab](https://labs.fedoraproject.org/security/) - Basierend auf Fedora.
- [Kali Linux](https://www.kali.org/) - Basierend auf Debian.
- [Parrot Security OS](https://www.parrotsec.org/) - Basierend auf Debian.
- [Pentoo](http://www.pentoo.ch/) - Basierend auf Gentoo.
- [URIX OS](http://urix.us/) - Basierend auf openSUSE.
- [Wifislax](http://www.wifislax.com/) - Basierend auf Slackware.

*Malware-Analysten und Reverse Engineering*

- [Flare VM](https://github.com/fireeye/flare-vm/) - Basierend auf Windows.
- [REMnux](https://remnux.org/) - Basierend auf Debian.

## Starterpakete <span id="starter-packs"></span>

*Sammlungen von Installationsskripten, nützliche Tools*

- [CTF Tools](https://github.com/zardus/ctf-tools) - Sammlung von Setup-Skripten zur Installation verschiedener Sicherheitsforschungstools.
- [LazyKali](https://github.com/jlevitsk/lazykali) - Eine Aktualisierung von LazyKali aus dem Jahr 2016, die die Installation von Tools und die Konfiguration vereinfacht.

## Anleitungen <span id="tutorials"></span>

*Tutorials zum Erlernen des Spielens von CTFs*

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Field Guide von Trails of Bits.
- [CTF Resources](http://ctfs.github.io/resources/) -  Startanleitung, gepflegt von der Community.
- [How to Get Started in CTF](https://www.endgame.com/blog/how-get-started-ctf) - Kurzanleitung für CTF-Anfänger von Endgame
- [Intro. to CTF Course](https://www.hoppersroppers.org/courseCTF.html) - Ein kostenloser Kurs, der Anfängern die Grundlagen von Forensik, Krypto und Web-Ex vermittelt.
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - Video-Tutorials und Komplettlösungen für beliebte CTF-Plattformen.
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - Video-Tutorials zum Thema Ausbeutung.
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - Ein kleiner Kurs für Anfänger in CTFs (auf Russisch).


## Sicherheits-Übungsspiele <span id="wargames"></span>

*Immer online CTFs*

- [Backdoor](https://backdoor.sdslabs.co/) - Sicherheitsplattform von SDSLabs.
- [Crackmes](https://crackmes.one/) - Reverse Engineering-Herausforderungen.
- [CryptoHack](https://cryptohack.org/) - Unterhaltsame Kryptographie-Herausforderungen.
- [echoCTF.RED](https://echoctf.red/) - Online-CTF mit einer Vielzahl von Angriffszielen.
- [Exploit Exercises](https://exploit-exercises.lains.space/) - Verschiedene VMs zum Erlernen verschiedener Computersicherheitsprobleme.
- [Exploit.Education](http://exploit.education) - Verschiedene VMs zum Erlernen verschiedener Computersicherheitsprobleme.
- [Gracker](https://github.com/Samuirai/gracker) - Binäre Herausforderungen mit einer langsamen Lernkurve und Zuschreibungen für jedes Level.
- [Hack The Box](https://www.hackthebox.eu) - Wöchentliche CTFs für alle Arten von Sicherheitsbegeisterten.
- [Hack This Site](https://www.hackthissite.org/) - Trainingsgelände für Hacker.
- [Hacker101](https://www.hacker101.com/) - CTF von HackerOne
- [Hacking-Lab](https://hacking-lab.com/) - Plattform für ethisches Hacking, Computernetzwerke und Sicherheitsherausforderungen.
- [Hone Your Ninja Skills](https://honeyourskills.ninja/) - Web-Herausforderungen, beginnend mit den grundlegenden.
- [IO](http://io.netgarage.org/) - Kriegsspiel für binäre Herausforderungen.
- [Microcorruption](https://microcorruption.com) - Integriertes Sicherheits-CTF.
- [Over The Wire](http://overthewire.org/wargames/) - Kriegsspiel, verwaltet von der OvertheWire Community.
- [PentesterLab](https://pentesterlab.com/) - Verschiedene VM- und Online-Herausforderungen (kostenpflichtig).
- [PicoCTF](https://2019game.picoctf.com) - Ganzjähriges CTF-Spiel. Fragen aus dem jährlichen picoCTF-Wettbewerb.
- [PWN Challenge](http://pwn.eonew.cn/) - binäres Exploitation-Kriegsspiel.
- [Pwnable.kr](http://pwnable.kr/) - Pwn-Spiel.
- [Pwnable.tw](https://pwnable.tw/) - Binäres Kriegsspiel.
- [Pwnable.xyz](https://pwnable.xyz/) - binäres Exploitation-Kriegsspiel.
- [Reversin.kr](http://reversing.kr/) - Rückfahr-Challenge.
- [Ringzer0Team](https://ringzer0team.com/) - ringzer0 Team Online CTF.
- [Root-Me](https://www.root-me.org/) - Lernplattform für Hacking und Informationssicherheit.
- [ROP Wargames](https://github.com/xelenonz/game) - ROP-Kriegsspiele.
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - Herausforderungen mit Feiertagsthema
wird jährlich veröffentlicht und von SANS gepflegt.
- [SmashTheStack](http://smashthestack.org/) - Eine Vielzahl von Kriegsspielen, die von der SmashTheStack-Community gepflegt werden.
- [Viblo CTF](https://ctf.viblo.asia) - Verschiedene tolle CTF-Herausforderungen in vielen verschiedenen Kategorien. Hat sowohl einen Übungsmodus als auch einen Wettbewerbsmodus.
- [VulnHub](https://www.vulnhub.com/) - VM-basiert für praktische Übungen in den Bereichen digitale Sicherheit, Computeranwendungen und Netzwerkadministration.
- [W3Challs](https://w3challs.com) - Eine Penetrationstest-Trainingsplattform, die verschiedene Computerherausforderungen in verschiedenen Kategorien bietet.
- [WebHacking](http://webhacking.kr) - Hacking-Herausforderungen für das Web.


*Selbst gehostete CTFs*
- [Damn Vulnerable Web Application](http://www.dvwa.co.uk/) - PHP/MySQL-Webanwendung, die verdammt anfällig ist.
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - Skripte und Tools zum einfachen Hosten eines CTF auf [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project).

## Websites <span id="websites"></span>

*Verschiedene allgemeine Websites über und auf CTF*

- [Awesome CTF Cheatsheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - CTF-Spickzettel.
- [CTF Time](https://ctftime.org/) - Allgemeine Informationen zu CTF, die weltweit auftreten.
- [Reddit Security CTF](http://www.reddit.com/r/securityctf) - Reddit CTF-Kategorie.

## Wikis <span id="wikis"></span>

*Verschiedene Wikis zum Erlernen von CTFs verfügbar*

- [Bamboofox](https://bamboofox.github.io/) - Chinesische Ressourcen zum Erlernen von CTF.
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - Wiki vom Team bi0s.
- [CTF Cheatsheet](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - CTF-Tipps und Tricks.
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - CTF Wiki vom Isis-Labor.
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - CTF-Tipps von OTA CTF-Teammitgliedern.

## Write-up-Sammlungen <span id="writeups-collections"></span>

*Sammlungen von CTF-Aufzeichnungen*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - Zuschreibungen zu CTF-Herausforderungen von 0e85dc6eaf
- [Captf](http://captf.com/) - Dumped CTF-Herausforderungen und Materialien von psifertex.
- [CTF write-ups (community)](https://github.com/ctfs/) - CTF-Herausforderungen + Zuschreibungsarchiv, das von der Community verwaltet wird.
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - Löscht alle Aufzeichnungen von CTF Time und organisiert, welche zuerst gelesen werden sollen.
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - CTF-Aufzeichnungs-Repo, verwaltet vom HackThisSite-Team.
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - CTF-Wettbewerbsberichte von mzfr
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - Eine Sammlung von CTF-Beschreibungen, die alle pwntools verwenden.
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - Eine Sammlung von CTF-Beiträgen des SababaSec-Teams
- [Shell Storm](http://shell-storm.org/repo/CTF/) - CTF-Challenge-Archiv, gepflegt von Jonathan Salwan.
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - CTF-Zuschreibungs-Repo, verwaltet vom SmokeLeetEveryday-Team.

### Lizenz

CC0 :)
