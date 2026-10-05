# Awesome CTF [![Build Status](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Una lista seleccionada de marcos, bibliotecas, recursos, software y tutoriales [Capture The Flag](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF). Esta lista tiene como objetivo ayudar a los principiantes y a los jugadores experimentados de CTF a encontrar todo lo relacionado con los CTF en un solo lugar.

### Contribuir

Primero eche un vistazo rápido al [directrices de contribución](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md).

#### _Si conoces una herramienta que no aparece aquí, no dudes en abrir una solicitud de incorporación de cambios._

### ¿Por qué?

Se necesita tiempo para crear una colección de herramientas utilizadas en CTF y recordarlas todas. Este repositorio ayuda a mantener todas estas herramientas dispersas en un solo lugar.

### Contenido

- [Awesome CTF](#awesome-ctf)
  - [Crear](#create)
    - [Análisis forense](#forensics)
    - [Plataformas](#platforms)
    - [Esteganografía](#steganography)
    - [Web](#web)
  - [Resolver](#solve)
    - [Ataques](#attacks)
    - [Herramientas de fuerza bruta](#bruteforcers)
    - [Criptografía](#crypto)
    - [Explotación de vulnerabilidades](#exploits)
    - [Análisis forense](#forensics-1)
    - [Redes](#networking)
    - [Ingeniería inversa](#reversing)
    - [Servicios](#services)
    - [Esteganografía](#steganography-1)
    - [Web](#web-1)

- [Recursos](#resources)
  - [Sistemas operativos](#operating-systems)
  - [Paquetes de inicio](#starter-packs)
  - [Tutoriales](#tutorials)
  - [Juegos de guerra](#wargames)
  - [Sitios web](#websites)
  - [Wikis](#wikis)
  - [Colecciones de write-ups](#writeups-collections)


# Crear <span id="create"></span>

*Herramientas utilizadas para crear desafíos CTF*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - Libro en línea sobre cómo crear, probar y personalizar sus propios desafíos de Capture the Flag.


## Análisis forense <span id="forensics"></span>

*Herramientas utilizadas para crear desafíos forenses*

- [Dnscat2](https://github.com/iagox86/dnscat2) - Comunicación del host a través de DNS.
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - Programa de triaje.
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - Herramienta DFIR centrada en artefactos.
- [Registry Dumper](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_registry_keys.html) - Vuelque su registro.

## Plataformas <span id="platforms"></span>

*Proyectos que se pueden utilizar para albergar un CTF*

- [CTFd](https://github.com/isislab/CTFd) - Plataforma para albergar CTF de estilo arriesgado de ISISLab, NYU Tandon.
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - Desarrolla, implementa y mantiene tu propia infraestructura CTF.
- [FBCTF](https://github.com/facebook/fbctf) - Plataforma para albergar competiciones de Captura la Bandera de Facebook.
- [Haaukins](https://github.com/aau-network-security/haaukins) - Plataforma de virtualización muy accesible y automatizada para la formación en seguridad.
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - Plataforma de puntuación CTF.
- [Mellivora](https://github.com/Nakiami/mellivora) - Un motor CTF escrito en PHP.
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - Una potente plataforma ligera para alojar CTF. No requiere JavaScript.
- [NightShade](https://github.com/UnrealAkama/NightShade) - Un marco CTF de seguridad simple.
- [OpenCTF](https://github.com/easyctf/openctf) - CTF en una caja. Se requiere una configuración mínima.
- [PicoCTF](https://github.com/picoCTF/picoCTF) - La plataforma utilizada para ejecutar picoCTF. Un gran marco para albergar cualquier CTF.
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - Pequeño marco para crear/administrar/empaquetar desafíos CTF en peligro.
- [RootTheBox](https://github.com/moloch--/RootTheBox) - Un juego de hackers (marcador CTF y administrador de juegos).
- [Scorebot](https://github.com/legitbs/scorebot) - Plataforma para CTF de Legitbs (Defcon).
- [SecGen](https://github.com/cliffe/SecGen) - Generador de escenarios de seguridad. Crea máquinas virtuales vulnerables aleatoriamente.

## Esteganografía <span id="steganography"></span>

*Herramientas utilizadas para crear desafíos stego*

Consulte la sección de resolución para esteganografía.

## Web <span id="web"></span>

*Herramientas utilizadas para crear desafíos web*

*Ofuscadores de JavaScript*

- [Metasploit JavaScript Obfuscator](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


# Resolver <span id="solve"></span>

*Herramientas utilizadas para resolver desafíos CTF*

## Ataques <span id="attacks"></span>

*Herramientas utilizadas para realizar varios tipos de ataques*

- [Bettercap](https://github.com/bettercap/bettercap) - Framework para realizar ataques MITM (Man in the Middle).
- [Yersinia](https://github.com/tomac/yersinia) - Ataque a varios protocolos en capa 2.

## Criptografía <span id="crypto"></span>

*Herramientas utilizadas para resolver desafíos criptográficos*

- [CyberChef](https://gchq.github.io/CyberChef) - Aplicación web para analizar y decodificar datos.
- [FeatherDuster](https://github.com/nccgroup/featherduster) - Una herramienta de criptoanálisis modular y automatizada.
- [Hash Extender](https://github.com/iagox86/hash_extender) - Una herramienta de utilidad para realizar ataques de extensión de longitud de hash.
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - Una herramienta CLI para ejecutar ataques de Oracle de relleno.
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - Una herramienta para romper el cifrado PkZip.
- [QuipQuip](https://quipqiup.com) - Una herramienta en línea para descifrar cifrados de sustitución o cifrados vigenere (sin clave).
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - Una herramienta para recuperar la clave privada RSA con varios ataques.
- [RSATool](https://github.com/ius/rsatool) - Generar clave privada con conocimiento de p y q.
- [XORTool](https://github.com/hellman/xortool) - Una herramienta para analizar cifrado xor multibyte.

## Herramientas de fuerza bruta <span id="bruteforcers"></span>

*Herramientas utilizadas para varios tipos de fuerza bruta (contraseñas, etc.)*

- [Hashcat](https://hashcat.net/hashcat/) - Descifrador de contraseñas
- [Hydra](https://tools.kali.org/password-attacks/hydra) - Un cracker de inicio de sesión en paralelo que admite numerosos protocolos de ataque
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - Versión mejorada de la comunidad de John the Ripper.
- [John The Ripper](http://www.openwall.com/john/) - Descifrador de contraseñas.
- [Nozzlr](https://github.com/intrd/nozzlr) - Nozzlr es un marco de fuerza bruta, verdaderamente modular y compatible con scripts.
- [Ophcrack](http://ophcrack.sourceforge.net/) - Cracker de contraseñas de Windows basado en tablas de arcoíris.
- [Patator](https://github.com/lanjelot/patator) - Patator es un fuerza bruta multiusos, con un diseño modular.
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - Extensión Burp Suite para enviar una gran cantidad de solicitudes HTTP

## Explotación de vulnerabilidades <span id="exploits"></span>

*Herramientas utilizadas para resolver desafíos de exploits*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - Inyectar dlls en procesos.
- [libformatstr](https://github.com/hellman/libformatstr) - Simplificar la explotación de cadenas de formato.
- [Metasploit](http://www.metasploit.com/) - Software de pruebas de penetración.
  - [Hoja de trucos](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)
- [one_gadget](https://github.com/david942j/one_gadget) -  Una herramienta para encontrar la llamada `execve('/bin/sh', NULL, NULL)` del dispositivo.
  - `gem install one_gadget`
- [Pwntools](https://github.com/Gallopsled/pwntools) - Marco CTF para escribir exploits.
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - Analizador de tiempo de ejecución interactivo QEMU.
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - Marco para explotación ROP.
- [V0lt](https://github.com/P1kachu/v0lt) - Kit de herramientas de seguridad CTF.

## Análisis forense <span id="forensics-1"></span>

*Herramientas utilizadas para resolver desafíos forenses*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - Descifrar claves 802.11 WEP y WPA-PSK.
  - `apt-get install aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - Analizar archivos de sonido (mp3, m4a, lo que sea).
  - `apt-get install audacity`
- [Bkhive and Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - Volcar archivos SISTEMA y SAM.
  - `apt-get install samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - Editor PE.
- [Creddump](https://github.com/moyix/creddump) - Volcar credenciales de Windows.
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - Rips de sistemas de control de versiones accesibles (distribuidos) por web.
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - Leer, escribir y editar metadatos de archivos.
- [Extundelete](http://extundelete.sourceforge.net/) - Se utiliza para recuperar datos perdidos de imágenes montables.
- [Fibratus](https://github.com/rabbitstack/fibratus) - Herramienta de exploración y rastreo del kernel de Windows.
- [Foremost](http://foremost.sourceforge.net/) - Extrae un tipo concreto de archivos mediante encabezados.
  - `apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - Se utiliza para reparar sistemas de archivos corruptos.
- [Malzilla](http://malzilla.sourceforge.net/) - Herramienta de búsqueda de malware.
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - Herramienta de análisis forense de red.
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - Busque y extraiga archivos zlib comprimidos en archivos PDF.
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - Verifica la integridad de PNG y vuelca toda la información a nivel de fragmento en un formato legible por humanos.
  - `apt-get install pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - Extrae varios tipos de archivos de archivos ejecutables.
- [Shellbags](https://github.com/williballenthin/shellbags) - Investigar archivos NT\_USER.dat.
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - Una herramienta de esteganografía de espacios en blanco.
- [USBRip](https://github.com/snovvcrash/usbrip) - Herramienta forense CLI simple para rastrear artefactos de dispositivos USB (historial de eventos USB) en GNU/Linux.
- [Volatility](https://github.com/volatilityfoundation/volatility) - Para investigar volcados de memoria.
- [Wireshark](https://www.wireshark.org) - Se utiliza para analizar archivos pcap o pcapng.

*Visores del registro*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - Herramienta sencilla para Windows que le permite leer archivos de Registro sin conexión desde una unidad externa y ver la clave de Registro deseada en formato de archivo .reg.
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - Se utiliza para ver los registros de Windows.

## Redes <span id="networking"></span>

*Herramientas utilizadas para resolver desafíos de Networking*

- [Masscan](https://github.com/robertdavidgraham/masscan) - Escáner masivo de puertos IP, escáner de puertos TCP.
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - Una herramienta de Linux para verificar un host en la red (y otras actividades fuera de la red).
- [Nipe](https://github.com/GouveaHeitor/nipe) - Nipe es un script para hacer de Tor Network su puerta de enlace predeterminada.
- [Nmap](https://nmap.org/) - Una utilidad de código abierto para descubrimiento de redes y auditoría de seguridad.
- [Wireshark](https://www.wireshark.org/) - Analizar los volcados de la red.
  - `apt-get install wireshark`
- [Zeek](https://www.zeek.org) - Un monitor de seguridad de red de código abierto.
- [Zmap](https://zmap.io/) - Un escáner de red de código abierto.

## Ingeniería inversa <span id="reversing"></span>

*Herramientas utilizadas para resolver desafíos de inversión*

- [Androguard](https://github.com/androguard/androguard) - Aplicaciones Android de ingeniería inversa.
- [Angr](https://github.com/angr/angr) - Marco de análisis binario independiente de la plataforma.
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - Otro descompilador de Android más.
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - Descompilador de Android.
- [Barf](https://github.com/programa-stic/barf-project) - Marco de análisis binario e ingeniería inversa.
- [Binary Ninja](https://binary.ninja/) - Marco de análisis binario.
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - Colección de herramientas binarias.
- [BinWalk](https://github.com/devttys0/binwalk) - Analizar, realizar ingeniería inversa y extraer imágenes de firmware.
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - Descompilar binarios x86/SPARC/PowerPC/ST-20 en C.
- [ctf_import](https://github.com/docileninja/ctf_import) – run basic functions from stripped binaries cross platform.
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - cwe_checker encuentra patrones vulnerables en ejecutables binarios.
- [demovfuscator](https://github.com/kirschju/demovfuscator) - Un desofuscador en proceso para archivos binarios movuscados.
- [Frida](https://github.com/frida/) - Inyección de código dinámico.
- [GDB](https://www.gnu.org/software/gdb/) - El depurador del proyecto GNU.
- [GEF](https://github.com/hugsy/gef) - Complemento GDB.
- [Ghidra](https://ghidra-sre.org/) - Conjunto de herramientas de ingeniería inversa de código abierto.  Similar a IDA Pro.
- [Hopper](http://www.hopperapp.com/) - Herramienta de ingeniería inversa (desensamblador) para OSX y Linux.
- [IDA Pro](https://www.hex-rays.com/products/ida/) - Software de marcha atrás más utilizado.
- [Jadx](https://github.com/skylot/jadx) - Descompilar archivos de Android.
- [Java Decompilers](http://www.javadecompilers.com) - Un descompilador en línea para APK de Java y Android.
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Descompilador y desensamblador de Java.
- [Objection](https://github.com/sensepost/objection) - Exploración móvil en tiempo de ejecución. Complemento
- [PEDA](https://github.com/longld/peda) - GDB (solo python2.7).
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - Una herramienta de instrumentación binaria dinámica de Intel.
- [PINCE](https://github.com/korcankaraokcu/PINCE) - Herramienta de ingeniería inversa/front-end de GDB, enfocada en la automatización y piratería de juegos.
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - Una herramienta que utiliza Intel Pin para el análisis del canal lateral.
- [Plasma](https://github.com/joelpx/plasma) - Un desensamblador interactivo para x86/ARM/MIPS que puede generar pseudocódigo sangrado con sintaxis coloreada.
- [Pwndbg](https://github.com/pwndbg/pwndbg) - Un complemento de GDB que proporciona un conjunto de utilidades para piratear GDB fácilmente.
- [radare2](https://github.com/radare/radare2) - Un marco reversible portátil.
- [Triton](https://github.com/JonathanSalwan/Triton/) - Marco de análisis binario dinámico (DBA).
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - Descompilar archivos binarios de Python 2.7 (.pyc).
- [WinDbg](http://www.windbg.org/) - Depurador de Windows distribuido por Microsoft.
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - Programa que puede copiar ejecutables con permiso de ejecución, pero sin permiso de lectura.
- [Z3](https://github.com/Z3Prover/z3) - Un demostrador de teoremas de Microsoft Research.

*Desofuscadores de JavaScript*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - Una herramienta de análisis de malware Javascript.
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - Analizar código Javascript ofuscado.

*Analizadores SWF*
- [RABCDAsm](https://github.com/CyberShadow/RABCDAsm) - Colección de utilidades que incluyen un ensamblador/desensamblador de ActionScript 3.
- [Swftools](http://www.swftools.org/) - Colección de utilidades para trabajar con archivos SWF.
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) -  Un script de Python para analizar archivos Flash.

## Servicios <span id="services"></span>

*Varios tipos de servicios útiles disponibles en Internet*

- [CSWSH](http://cow.cat/cswsh.html) - Probador de secuestro de WebSocket entre sitios.
- [Request Bin](https://requestbin.com/) - Le permite inspeccionar solicitudes http a una URL particular.

## Esteganografía <span id="steganography-1"></span>

*Herramientas utilizadas para resolver desafíos de esteganografía*

- [AperiSolve](https://aperisolve.fr/) - Aperi'Solve es una plataforma que realiza análisis de capas en imágenes (código abierto).
- [Convert](http://www.imagemagick.org/script/convert.php) - Convierte imágenes a formatos b/n y aplica filtros.
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - Muestra información EXIF ​​en archivos JPEG.
- [Exiftool](https://linux.die.net/man/1/exiftool) - Leer y escribir metainformación en archivos.
- [Exiv2](http://www.exiv2.org/manpage.html) - Herramienta de manipulación de metadatos de imágenes.
- [Image Steganography](https://sourceforge.net/projects/image-steg/) - Incrusta texto y archivos en imágenes con cifrado opcional. Interfaz de usuario fácil de usar.
- [Image Steganography Online](https://incoherency.co.uk/image-steganography) - Esta es una herramienta Javascript del lado del cliente para ocultar imágenes esteganográficamente dentro de los "bits" inferiores de otras imágenes.
- [ImageMagick](http://www.imagemagick.org/script/index.php) - Herramienta de manipulación de imágenes.
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - Herramienta esteganográfica universal.
- [Pngtools](https://packages.debian.org/sid/pngtools) - Para diversos análisis relacionados con PNG.
  - `apt-get install pngtools`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - Se utiliza para desenfocar y corregir imágenes desenfocadas.
- [Steganabara](https://www.openhub.net/p/steganabara) -  Herramienta de análisis stegano escrita en Java.
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - Codificador y decodificador de esteganografía online.
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - Lanza ataques de diccionario de fuerza bruta en imágenes JPG.
- [StegCracker](https://github.com/Paradoxis/StegCracker) - Utilidad de fuerza bruta de esteganografía para descubrir datos ocultos dentro de archivos.
- [stegextract](https://github.com/evyatarmeged/stegextract) - Detecta archivos y texto ocultos en imágenes.
- [Steghide](http://steghide.sourceforge.net/) - Ocultar datos en varios tipos de imágenes.
- [StegOnline](https://georgeom.net/StegOnline/upload) - Realiza una amplia gama de operaciones de esteganografía de imágenes, como ocultar/revelar archivos ocultos dentro de bits (código abierto).
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - Aplicar diversas técnicas de esteganografía a las imágenes.
- [Zsteg](https://github.com/zed-0xff/zsteg/) - Análisis PNG/BMP.

## Web <span id="web-1"></span>

*Herramientas utilizadas para resolver desafíos web*

- [BurpSuite](https://portswigger.net/burp) - Una herramienta gráfica para probar la seguridad de sitios web.
- [Commix](https://github.com/commixproject/commix) - Herramienta automatizada de inyección y explotación de comandos del sistema operativo todo en uno.
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Complemento de Firefox para una fácil explotación web.
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - Interceptación de proxy para reproducir, depurar y difuminar solicitudes y respuestas HTTP
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - Complemento para Chrome para depurar solicitudes de red.
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - Una herramienta de seguridad ofensiva de alto rendimiento para reconocimiento y escaneo de vulnerabilidades.
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - Herramienta automática de inyección SQL y toma de control de bases de datos.
  ```pip install sqlmap```
- [W3af](https://github.com/andresriancho/w3af) -  Marco de auditoría y ataque de aplicaciones web.
- [XSSer](http://xsser.sourceforge.net/) - Probador XSS automatizado.


# Recursos <span id="resources"></span>

*Dónde descubrir sobre CTF*

## Sistemas operativos <span id="operating-systems"></span>

*Laboratorio de pruebas de penetración y seguridad Sistemas Operativos*

- [Android Tamer](https://androidtamer.com/) - Basado en Debian.
- [BackBox](https://backbox.org/) - Basado en Ubuntu.
- [BlackArch Linux](https://blackarch.org/) - Basado en Arch Linux.
- [Fedora Security Lab](https://labs.fedoraproject.org/security/) - Basado en Fedora.
- [Kali Linux](https://www.kali.org/) - Basado en Debian.
- [Parrot Security OS](https://www.parrotsec.org/) - Basado en Debian.
- [Pentoo](http://www.pentoo.ch/) - Basado en Gentoo.
- [URIX OS](http://urix.us/) - Basado en openSUSE.
- [Wifislax](http://www.wifislax.com/) - Basado en Slackware.

*Analistas de malware e ingeniería inversa*

- [Flare VM](https://github.com/fireeye/flare-vm/) - Basado en Windows.
- [REMnux](https://remnux.org/) - Basado en Debian.

## Paquetes de inicio <span id="starter-packs"></span>

*Colecciones de scripts de instalación, herramientas útiles*

- [CTF Tools](https://github.com/zardus/ctf-tools) - Colección de scripts de configuración para instalar diversas herramientas de investigación de seguridad.
- [LazyKali](https://github.com/jlevitsk/lazykali) - Una actualización de 2016 de LazyKali que simplifica la instalación de herramientas y la configuración.

## Tutoriales <span id="tutorials"></span>

*Tutoriales para aprender a jugar CTF*

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Guía de campo por Trails of Bits.
- [CTF Resources](http://ctfs.github.io/resources/) -  Guía de inicio mantenida por la comunidad.
- [How to Get Started in CTF](https://www.endgame.com/blog/how-get-started-ctf) - Breve guía para principiantes en CTF de Endgame
- [Intro. to CTF Course](https://www.hoppersroppers.org/courseCTF.html) - Un curso gratuito que enseña a los principiantes los conceptos básicos de ciencia forense, criptografía y web-ex.
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - Videotutoriales y tutoriales de plataformas CTF populares.
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - Vídeos tutoriales sobre Explotación.
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - Un pequeño curso para principiantes en CTF (en ruso).


## Juegos de guerra <span id="wargames"></span>

*CTF siempre disponibles en línea*

- [Backdoor](https://backdoor.sdslabs.co/) - Plataforma de seguridad de SDSLabs.
- [Crackmes](https://crackmes.one/) - Desafíos de ingeniería inversa.
- [CryptoHack](https://cryptohack.org/) - Divertidos desafíos de criptografía.
- [echoCTF.RED](https://echoctf.red/) - CTF en línea con una variedad de objetivos para atacar.
- [Exploit Exercises](https://exploit-exercises.lains.space/) - Variedad de máquinas virtuales para aprender diversos problemas de seguridad informática.
- [Exploit.Education](http://exploit.education) - Variedad de máquinas virtuales para aprender diversos problemas de seguridad informática.
- [Gracker](https://github.com/Samuirai/gracker) - Los desafíos binarios tienen una curva de aprendizaje lenta y reseñas para cada nivel.
- [Hack The Box](https://www.hackthebox.eu) - CTF semanales para todo tipo de entusiastas de la seguridad.
- [Hack This Site](https://www.hackthissite.org/) - Campo de entrenamiento para hackers.
- [Hacker101](https://www.hacker101.com/) - CTF de HackerOne
- [Hacking-Lab](https://hacking-lab.com/) - Plataforma de desafío de seguridad, redes informáticas y hacking ético.
- [Hone Your Ninja Skills](https://honeyourskills.ninja/) - Retos web empezando por los básicos.
- [IO](http://io.netgarage.org/) - Wargame para desafíos binarios.
- [Microcorruption](https://microcorruption.com) - CTF de seguridad integrada.
- [Over The Wire](http://overthewire.org/wargames/) - Juego de guerra mantenido por la comunidad OvertheWire.
- [PentesterLab](https://pentesterlab.com/) - Variedad de VM y desafíos en línea (pagos).
- [PicoCTF](https://2019game.picoctf.com) - Juego ctf todo el año. Preguntas del concurso anual picoCTF.
- [PWN Challenge](http://pwn.eonew.cn/) - Juego de guerra de explotación binaria.
- [Pwnable.kr](http://pwnable.kr/) - Juego de personajes.
- [Pwnable.tw](https://pwnable.tw/) - Juego de guerra binario.
- [Pwnable.xyz](https://pwnable.xyz/) - Juego de guerra de explotación binaria.
- [Reversin.kr](http://reversing.kr/) - Desafío de marcha atrás.
- [Ringzer0Team](https://ringzer0team.com/) - Ringzer0 Equipo CTF en línea.
- [Root-Me](https://www.root-me.org/) - Plataforma de aprendizaje de Hacking y Seguridad de la Información.
- [ROP Wargames](https://github.com/xelenonz/game) - Juegos de guerra ROP.
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - Retos con temática navideña
publicado anualmente y mantenido por SANS.
- [SmashTheStack](http://smashthestack.org/) - Una variedad de juegos de guerra mantenidos por la comunidad SmashTheStack.
- [Viblo CTF](https://ctf.viblo.asia) - Varios desafíos CTF increíbles, en muchas categorías diferentes. Tiene tanto el modo Práctica como el modo Concurso.
- [VulnHub](https://www.vulnhub.com/) - Basado en VM para prácticas en seguridad digital, aplicaciones informáticas y administración de redes.
- [W3Challs](https://w3challs.com) - Una plataforma de capacitación en pruebas de penetración, que ofrece varios desafíos informáticos, en varias categorías.
- [WebHacking](http://webhacking.kr) - Retos de hacking para web.


*CTF autoalojados*
- [Damn Vulnerable Web Application](http://www.dvwa.co.uk/) - Aplicación web PHP/MySQL que es muy vulnerable.
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - Scripts y herramientas para alojar un CTF en [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project) fácilmente.

## Sitios web <span id="websites"></span>

*Varios sitios web generales sobre CTF*

- [Awesome CTF Cheatsheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - Hoja de referencia de CTF.
- [CTF Time](https://ctftime.org/) - Información general sobre CTF que ocurre en todo el mundo.
- [Reddit Security CTF](http://www.reddit.com/r/securityctf) - Categoría Reddit CTF.

## Wikis <span id="wikis"></span>

*Varios wikis disponibles para aprender sobre CTF*

- [Bamboofox](https://bamboofox.github.io/) - Recursos chinos para aprender CTF.
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - Wiki del equipo bi0s. Consejos y trucos de
- [CTF Cheatsheet](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - CTF.
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - CTF Wiki del laboratorio Isis.
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - Consejos de CTF de miembros del equipo de OTA CTF.

## Colecciones de write-ups <span id="writeups-collections"></span>

*Colecciones de reseñas de CTF*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - Artículos escritos para impugnaciones del CTF por 0e85dc6eaf
- [Captf](http://captf.com/) - Desafíos y materiales CTF objeto de dumping por psifertex.
- [CTF write-ups (community)](https://github.com/ctfs/) - Desafíos CTF + archivo de reseñas mantenido por la comunidad.
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - Elimina todos los escritos de CTF Time y organiza cuál leer primero.
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - Repositorio de reseñas de CTF mantenido por el equipo de HackThisSite.
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - Reseñas del concurso CTF por mzfr
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - Una colección de artículos de CTF, todos ellos utilizando pwntools.
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - Una colección de artículos de CTF del equipo de SababaSec
- [Shell Storm](http://shell-storm.org/repo/CTF/) - Archivo de desafío CTF mantenido por Jonathan Salwan.
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - Repositorio de reseñas de CTF mantenido por el equipo de SmokeLeetEveryday.

### Licencia

CC0 :)
