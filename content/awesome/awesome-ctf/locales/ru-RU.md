# Awesome CTF [![Build Status](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Подборка фреймворков, библиотек, ресурсов, программ и руководств по [Capture The Flag](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF). Список поможет новичкам и опытным игрокам найти всё о CTF в одном месте.

### Участие

Сначала ознакомьтесь с [правилами участия](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md).

#### _Если вы знаете инструмент, которого здесь нет, смело создавайте pull request._

### Зачем?

Собрать коллекцию инструментов для CTF и запомнить их все непросто. Этот репозиторий объединяет разрозненные инструменты в одном месте.

### Содержание

- [Awesome CTF](#awesome-ctf)
  - [Создание](#create)
    - [Криминалистика](#forensics)
    - [Платформы](#platforms)
    - [Стеганография](#steganography)
    - [Веб](#web)
  - [Решение](#solve)
    - [Атаки](#attacks)
    - [Перебор паролей](#bruteforcers)
    - [Криптография](#crypto)
    - [Эксплуатация уязвимостей](#exploits)
    - [Криминалистика](#forensics-1)
    - [Сети](#networking)
    - [Реверс-инжиниринг](#reversing)
    - [Сервисы](#services)
    - [Стеганография](#steganography-1)
    - [Веб](#web-1)

- [Ресурсы](#resources)
  - [Операционные системы](#operating-systems)
  - [Стартовые наборы](#starter-packs)
  - [Руководства](#tutorials)
  - [Варгеймы](#wargames)
  - [Сайты](#websites)
  - [Вики](#wikis)
  - [Коллекции write-up](#writeups-collections)


# Создание <span id="create"></span>

*Инструменты для создания заданий CTF*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - Онлайн-книга о создании, тестировании и настройке собственных заданий Capture the Flag.


## Криминалистика <span id="forensics"></span>

*Инструменты для создания заданий по цифровой криминалистике*

- [Dnscat2](https://github.com/iagox86/dnscat2) - Организует обмен данными через DNS.
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - Программа для первичной сортировки данных.
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - Инструмент DFIR для анализа артефактов.
- [Registry Dumper](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_registry_keys.html) - Создаёт дамп реестра.

## Платформы <span id="platforms"></span>

*Проекты для размещения CTF*

- [CTFd](https://github.com/isislab/CTFd) - Платформа ISISLab, NYU Tandon, для проведения CTF в стиле Jeopardy.
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - Разрабатывайте, развёртывайте и обслуживайте собственную инфраструктуру CTF.
- [FBCTF](https://github.com/facebook/fbctf) - Платформа Facebook для проведения соревнований Capture the Flag.
- [Haaukins](https://github.com/aau-network-security/haaukins) - Доступная и автоматизированная платформа виртуализации для обучения безопасности.
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - Платформа подсчёта очков CTF.
- [Mellivora](https://github.com/Nakiami/mellivora) - Движок CTF, написанный на PHP.
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - Мощная лёгкая платформа для проведения CTF. Без JavaScript.
- [NightShade](https://github.com/UnrealAkama/NightShade) - Простой фреймворк для соревнований CTF по безопасности.
- [OpenCTF](https://github.com/easyctf/openctf) - CTF в готовой коробке; требуется минимум настройки.
- [PicoCTF](https://github.com/picoCTF/picoCTF) - Платформа picoCTF и отличный фреймворк для проведения любых CTF.
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - Небольшой фреймворк для создания, управления и упаковки заданий CTF в стиле Jeopardy.
- [RootTheBox](https://github.com/moloch--/RootTheBox) - Игра хакеров: таблица результатов и управление игрой CTF.
- [Scorebot](https://github.com/legitbs/scorebot) - Платформа CTF от Legitbs (Defcon).
- [SecGen](https://github.com/cliffe/SecGen) - Генератор сценариев безопасности, случайным образом создающий уязвимые виртуальные машины.

## Стеганография <span id="steganography"></span>

*Инструменты для создания заданий по стеганографии*

См. раздел решения заданий по стеганографии.

## Веб <span id="web"></span>

*Инструменты для создания веб-заданий*

*Обфускаторы JavaScript*

- [Metasploit JavaScript Obfuscator](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


# Решение <span id="solve"></span>

*Инструменты для решения заданий CTF*

## Атаки <span id="attacks"></span>

*Инструменты для различных видов атак*

- [Bettercap](https://github.com/bettercap/bettercap) - Фреймворк для атак MITM (перехват между сторонами).
- [Yersinia](https://github.com/tomac/yersinia) - Атакует различные протоколы канального уровня.

## Криптография <span id="crypto"></span>

*Инструменты для решения криптографических заданий*

- [CyberChef](https://gchq.github.io/CyberChef) - Веб-приложение для анализа и декодирования данных.
- [FeatherDuster](https://github.com/nccgroup/featherduster) - Автоматизированный модульный инструмент криптоанализа.
- [Hash Extender](https://github.com/iagox86/hash_extender) - Утилита для атак с расширением длины хеша.
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - Инструмент командной строки для атак с padding oracle.
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - Инструмент для взлома шифрования PkZip.
- [QuipQuip](https://quipqiup.com) - Онлайн-инструмент для взлома шифров подстановки и Виженера без ключа.
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - Восстанавливает закрытые ключи RSA с помощью различных атак.
- [RSATool](https://github.com/ius/rsatool) - Создаёт закрытый ключ, если известны p и q.
- [XORTool](https://github.com/hellman/xortool) - Инструмент анализа многобайтных XOR-шифров.

## Перебор паролей <span id="bruteforcers"></span>

*Инструменты для перебора (паролей и других данных)*

- [Hashcat](https://hashcat.net/hashcat/) - Взломщик паролей.
- [Hydra](https://tools.kali.org/password-attacks/hydra) - Параллельный взломщик учётных данных с поддержкой множества протоколов.
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - Улучшенная сообществом версия John the Ripper.
- [John The Ripper](http://www.openwall.com/john/) - Взломщик паролей.
- [Nozzlr](https://github.com/intrd/nozzlr) - Модульный фреймворк для перебора, удобный для скриптов.
- [Ophcrack](http://ophcrack.sourceforge.net/) - Взломщик паролей Windows на основе радужных таблиц.
- [Patator](https://github.com/lanjelot/patator) - Универсальный модульный инструмент перебора.
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - Расширение Burp Suite для отправки большого числа HTTP-запросов.

## Эксплуатация уязвимостей <span id="exploits"></span>

*Инструменты для решения заданий на эксплуатацию уязвимостей*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - Внедряет DLL в процессы.
- [libformatstr](https://github.com/hellman/libformatstr) - Упрощает эксплуатацию уязвимостей форматных строк.
- [Metasploit](http://www.metasploit.com/) - Программное обеспечение для тестирования на проникновение.
  - [Шпаргалка](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)
- [one_gadget](https://github.com/david942j/one_gadget) - Инструмент для поиска единственного гаджета-вызова `execve('/bin/sh', NULL, NULL)`.
  - `gem install one_gadget`
- [Pwntools](https://github.com/Gallopsled/pwntools) - Фреймворк CTF для написания эксплойтов.
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - Интерактивный анализатор среды выполнения QEMU.
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - Фреймворк для эксплуатации ROP.
- [V0lt](https://github.com/P1kachu/v0lt) - Набор инструментов для CTF по безопасности.

## Криминалистика <span id="forensics-1"></span>

*Инструменты для решения заданий по криминалистике*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - Взламывает ключи 802.11 WEP и WPA-PSK.
  - `apt-get install aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - Анализирует аудиофайлы (MP3, M4A и другие).
  - `apt-get install audacity`
- [Bkhive and Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - Создаёт дампы файлов SYSTEM и SAM.
  - `apt-get install samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - Редактор PE-файлов.
- [Creddump](https://github.com/moyix/creddump) - Извлекает учётные данные Windows.
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - Извлекает доступные через веб распределённые системы контроля версий.
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - Читает, записывает и редактирует метаданные файлов.
- [Extundelete](http://extundelete.sourceforge.net/) - Восстанавливает данные из монтируемых образов.
- [Fibratus](https://github.com/rabbitstack/fibratus) - Инструмент исследования и трассировки ядра Windows.
- [Foremost](http://foremost.sourceforge.net/) - Извлекает файлы определённых типов по заголовкам.
  - `apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - Исправляет повреждённые файловые системы.
- [Malzilla](http://malzilla.sourceforge.net/) - Инструмент поиска вредоносных программ.
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - Инструмент сетевой криминалистики.
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - Находит и извлекает сжатые zlib-файлы из PDF.
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - Проверяет целостность PNG и отображает сведения о блоках.
  - `apt-get install pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - Извлекает различные типы файлов из исполняемых файлов.
- [Shellbags](https://github.com/williballenthin/shellbags) - Исследует файлы NT_USER.dat.
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - Инструмент стеганографии с пробелами.
- [USBRip](https://github.com/snovvcrash/usbrip) - CLI-инструмент для отслеживания артефактов USB в GNU/Linux.
- [Volatility](https://github.com/volatilityfoundation/volatility) - Исследует дампы памяти.
- [Wireshark](https://www.wireshark.org) - Анализирует файлы pcap и pcapng.

*Просмотрщики реестра*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - Инструмент Windows для чтения автономных файлов реестра с внешних дисков и просмотра ключей в формате .reg.
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - Используется для просмотра реестра Windows.

## Сети <span id="networking"></span>

*Инструменты для решения сетевых заданий*

- [Masscan](https://github.com/robertdavidgraham/masscan) - Массовый сканер IP-адресов и TCP-портов.
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - Инструмент Linux для проверки сетевого узла и других действий.
- [Nipe](https://github.com/GouveaHeitor/nipe) - Скрипт, который задаёт сеть Tor шлюзом по умолчанию.
- [Nmap](https://nmap.org/) - Открытая утилита для обнаружения сетей и аудита безопасности.
- [Wireshark](https://www.wireshark.org/) - Анализирует сетевые дампы.
  - `apt-get install wireshark`
- [Zeek](https://www.zeek.org) - Открытый монитор сетевой безопасности.
- [Zmap](https://zmap.io/) - Открытый сетевой сканер.

## Реверс-инжиниринг <span id="reversing"></span>

*Инструменты для решения заданий по реверс-инжинирингу*

- [Androguard](https://github.com/androguard/androguard) - Выполняет обратную разработку приложений Android.
- [Angr](https://github.com/angr/angr) - Платформонезависимый фреймворк анализа бинарных файлов.
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - Ещё один декомпилятор Android.
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - Декомпилятор Android.
- [Barf](https://github.com/programa-stic/barf-project) - Фреймворк анализа бинарных файлов и обратной разработки.
- [Binary Ninja](https://binary.ninja/) - Фреймворк анализа бинарных файлов.
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - Набор бинарных утилит.
- [BinWalk](https://github.com/devttys0/binwalk) - Анализирует, исследует и извлекает образы прошивок.
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - Декомпилирует бинарные файлы x86/SPARC/PowerPC/ST-20 в C.
- [ctf_import](https://github.com/docileninja/ctf_import) – Запускает базовые функции stripped-бинарных файлов на разных платформах.
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - Находит уязвимые шаблоны в исполняемых бинарных файлах.
- [demovfuscator](https://github.com/kirschju/demovfuscator) - Разрабатываемый деобфускатор для movfuscated-бинарных файлов.
- [Frida](https://github.com/frida/) - Динамическое внедрение кода.
- [GDB](https://www.gnu.org/software/gdb/) - Отладчик проекта GNU.
- [GEF](https://github.com/hugsy/gef) - Плагин для GDB.
- [Ghidra](https://ghidra-sre.org/) - Открытый набор инструментов обратной разработки, аналогичный IDA Pro.
- [Hopper](http://www.hopperapp.com/) - Инструмент обратной разработки и дизассемблер для OSX и Linux.
- [IDA Pro](https://www.hex-rays.com/products/ida/) - Популярное программное обеспечение для реверс-инжиниринга.
- [Jadx](https://github.com/skylot/jadx) - Декомпилирует файлы Android.
- [Java Decompilers](http://www.javadecompilers.com) - Онлайн-декомпилятор Java и APK Android.
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Декомпилятор и дизассемблер Java.
- [Objection](https://github.com/sensepost/objection) - Исследование мобильных устройств во время выполнения.
- [PEDA](https://github.com/longld/peda) - Плагин GDB (только Python 2.7).
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - Инструмент динамической бинарной инструментации Intel.
- [PINCE](https://github.com/korcankaraokcu/PINCE) - Интерфейс к GDB и инструмент обратной разработки для взлома игр и автоматизации.
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - Инструмент анализа побочных каналов с использованием Intel Pin.
- [Plasma](https://github.com/joelpx/plasma) - Интерактивный дизассемблер x86/ARM/MIPS с генерацией цветного псевдокода.
- [Pwndbg](https://github.com/pwndbg/pwndbg) - Плагин GDB с набором удобных инструментов.
- [radare2](https://github.com/radare/radare2) - Переносимый фреймворк обратной разработки.
- [Triton](https://github.com/JonathanSalwan/Triton/) - Фреймворк динамического анализа бинарных файлов (DBA).
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - Декомпилирует бинарные файлы Python 2.7 (.pyc).
- [WinDbg](http://www.windbg.org/) - Отладчик Windows от Microsoft.
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - Копирует исполняемые файлы с разрешением на запуск, но без разрешения на чтение.
- [Z3](https://github.com/Z3Prover/z3) - Доказатель теорем от Microsoft Research.

*Деобфускаторы JavaScript*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - Инструмент анализа вредоносных программ JavaScript.
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - Анализирует обфусцированный код JavaScript.

*Анализаторы SWF*
- [RABCDAsm](https://github.com/CyberShadow/RABCDAsm) - Набор утилит, включая ассемблер/дизассемблер ActionScript 3.
- [Swftools](http://www.swftools.org/) - Набор утилит для работы с файлами SWF.
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) - Скрипт Python для анализа Flash-файлов.

## Сервисы <span id="services"></span>

*Полезные интернет-сервисы*

- [CSWSH](http://cow.cat/cswsh.html) - Тестер Cross-Site WebSocket Hijacking.
- [Request Bin](https://requestbin.com/) - Позволяет просматривать HTTP-запросы к заданному URL.

## Стеганография <span id="steganography-1"></span>

*Инструменты для решения заданий по стеганографии*

- [AperiSolve](https://aperisolve.fr/) - Открытая платформа для анализа слоёв изображения.
- [Convert](http://www.imagemagick.org/script/convert.php) - Преобразует изображения между форматами и применяет фильтры.
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - Показывает сведения EXIF в файлах JPEG.
- [Exiftool](https://linux.die.net/man/1/exiftool) - Читает и записывает метаданные файлов.
- [Exiv2](http://www.exiv2.org/manpage.html) - Инструмент обработки метаданных изображений.
- [Image Steganography](https://sourceforge.net/projects/image-steg/) - Встраивает текст и файлы в изображения, при желании шифруя их; простой интерфейс.
- [Image Steganography Online](https://incoherency.co.uk/image-steganography) - Клиентский инструмент JavaScript для сокрытия изображений в младших битах других изображений.
- [ImageMagick](http://www.imagemagick.org/script/index.php) - Инструмент обработки изображений.
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - Универсальный инструмент стеганографии.
- [Pngtools](https://packages.debian.org/sid/pngtools) - Различные инструменты анализа PNG.
  - `apt-get install pngtools`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - Устраняет размытие и расфокусировку изображений.
- [Steganabara](https://www.openhub.net/p/steganabara) - Инструмент анализа стеганографии на Java.
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - Онлайн-кодировщик и декодировщик стеганографии.
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - Запускает перебор по словарю для JPG-изображений.
- [StegCracker](https://github.com/Paradoxis/StegCracker) - Инструмент перебора для поиска скрытых данных в файлах.
- [stegextract](https://github.com/evyatarmeged/stegextract) - Обнаруживает скрытые файлы и текст в изображениях.
- [Steghide](http://steghide.sourceforge.net/) - Скрывает данные в изображениях разных типов.
- [StegOnline](https://georgeom.net/StegOnline/upload) - Выполняет различные операции стеганографии изображений, включая сокрытие и извлечение файлов из битов.
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - Применяет к изображениям различные методы стеганографии.
- [Zsteg](https://github.com/zed-0xff/zsteg/) - Анализ PNG/BMP.

## Веб <span id="web-1"></span>

*Инструменты для решения веб-заданий*

- [BurpSuite](https://portswigger.net/burp) - Графический инструмент для проверки безопасности веб-сайтов.
- [Commix](https://github.com/commixproject/commix) - Автоматизированный комплекс для внедрения и эксплуатации команд ОС.
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Дополнение Firefox для упрощения веб-эксплуатации.
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - Перехватывающий прокси для повтора, отладки и тестирования HTTP-запросов и ответов.
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - Дополнение Chrome для отладки сетевых запросов.
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - Высокопроизводительный инструмент наступательной безопасности для разведки и поиска уязвимостей.
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - Автоматическая SQL-инъекция и захват баз данных.
  ```pip install sqlmap```
- [W3af](https://github.com/andresriancho/w3af) - Фреймворк атак и аудита веб-приложений.
- [XSSer](http://xsser.sourceforge.net/) - Автоматизированный тестер XSS.


# Ресурсы <span id="resources"></span>

*Где искать материалы о CTF*

## Операционные системы <span id="operating-systems"></span>

*ОС для тестирования на проникновение и лабораторий безопасности*

- [Android Tamer](https://androidtamer.com/) - Основан на Debian.
- [BackBox](https://backbox.org/) - Основан на Ubuntu.
- [BlackArch Linux](https://blackarch.org/) - Основан на Arch Linux.
- [Fedora Security Lab](https://labs.fedoraproject.org/security/) - Основан на Fedora.
- [Kali Linux](https://www.kali.org/) - Основан на Debian.
- [Parrot Security OS](https://www.parrotsec.org/) - Основан на Debian.
- [Pentoo](http://www.pentoo.ch/) - Основан на Gentoo.
- [URIX OS](http://urix.us/) - Основан на openSUSE.
- [Wifislax](http://www.wifislax.com/) - Основан на Slackware.

*Для аналитиков вредоносных программ и реверс-инжиниринга*

- [Flare VM](https://github.com/fireeye/flare-vm/) - Основана на Windows.
- [REMnux](https://remnux.org/) - Основан на Debian.

## Стартовые наборы <span id="starter-packs"></span>

*Коллекции установочных скриптов и полезных инструментов*

- [CTF Tools](https://github.com/zardus/ctf-tools) - Коллекция скриптов для установки различных инструментов исследования безопасности.
- [LazyKali](https://github.com/jlevitsk/lazykali) - Обновлённая в 2016 году версия LazyKali, упрощающая установку инструментов и настройку.

## Руководства <span id="tutorials"></span>

*Руководства для начинающих играть в CTF*

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Практическое руководство от Trails of Bits.
- [CTF Resources](http://ctfs.github.io/resources/) - Вводное руководство, поддерживаемое сообществом.
- [How to Get Started in CTF](https://www.endgame.com/blog/how-get-started-ctf) - Краткое руководство для начинающих CTF от Endgame.
- [Intro. to CTF Course](https://www.hoppersroppers.org/courseCTF.html) - Бесплатный курс по основам криминалистики, криптографии и веб-эксплуатации.
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - Видеоруководства и разборы популярных платформ CTF.
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - Видеоуроки по эксплуатации уязвимостей.
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - Небольшой вводный курс по CTF (на русском языке).


## Учебные игры <span id="wargames"></span>

*Постоянно доступные онлайн-CTF*

- [Backdoor](https://backdoor.sdslabs.co/) - Платформа безопасности от SDSLabs.
- [Crackmes](https://crackmes.one/) - Задания по обратной разработке.
- [CryptoHack](https://cryptohack.org/) - Увлекательные задания по криптографии.
- [echoCTF.RED](https://echoctf.red/) - Онлайн-CTF с различными целями для атаки.
- [Exploit Exercises](https://exploit-exercises.lains.space/) - Виртуальные машины для изучения различных проблем компьютерной безопасности.
- [Exploit.Education](http://exploit.education) - Виртуальные машины для изучения различных проблем компьютерной безопасности.
- [Gracker](https://github.com/Samuirai/gracker) - Бинарные задания с постепенным усложнением и решениями для каждого уровня.
- [Hack The Box](https://www.hackthebox.eu) - Еженедельные CTF для любителей безопасности.
- [Hack This Site](https://www.hackthissite.org/) - Учебная площадка для хакеров.
- [Hacker101](https://www.hacker101.com/) - CTF от HackerOne.
- [Hacking-Lab](https://hacking-lab.com/) - Платформа этичного хакинга, компьютерных сетей и задач безопасности.
- [Hone Your Ninja Skills](https://honeyourskills.ninja/) - Веб-задания, начиная с базовых.
- [IO](http://io.netgarage.org/) - Учебная игра с заданиями по бинарным файлам.
- [Microcorruption](https://microcorruption.com) - CTF по безопасности встроенных систем.
- [Over The Wire](http://overthewire.org/wargames/) - Учебная игра, поддерживаемая сообществом OvertheWire.
- [PentesterLab](https://pentesterlab.com/) - Виртуальные машины и онлайн-задания (платно).
- [PicoCTF](https://2019game.picoctf.com) - Круглогодичная игра CTF с заданиями ежегодного соревнования picoCTF.
- [PWN Challenge](http://pwn.eonew.cn/) - Учебная игра по эксплуатации бинарных уязвимостей.
- [Pwnable.kr](http://pwnable.kr/) - Игра Pwn.
- [Pwnable.tw](https://pwnable.tw/) - Учебная игра с бинарными заданиями.
- [Pwnable.xyz](https://pwnable.xyz/) - Учебная игра по эксплуатации бинарных уязвимостей.
- [Reversin.kr](http://reversing.kr/) - Задание по реверс-инжинирингу.
- [Ringzer0Team](https://ringzer0team.com/) - Онлайн-CTF команды Ringzer0.
- [Root-Me](https://www.root-me.org/) - Учебная платформа по хакингу и информационной безопасности.
- [ROP Wargames](https://github.com/xelenonz/game) - Учебные игры по ROP.
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - Задания на праздничную тему
  публикуются ежегодно и поддерживаются SANS.
- [SmashTheStack](http://smashthestack.org/) - Различные варгеймы сообщества SmashTheStack.
- [Viblo CTF](https://ctf.viblo.asia) - Разнообразные интересные CTF-задания с режимами практики и соревнования.
- [VulnHub](https://www.vulnhub.com/) - Виртуальные машины для практики цифровой безопасности, работы с приложениями и администрирования сетей.
- [W3Challs](https://w3challs.com) - Платформа обучения тестированию на проникновение с компьютерными заданиями разных категорий.
- [WebHacking](http://webhacking.kr) - Задания по веб-взлому.


*Самостоятельно размещаемые CTF*
- [Damn Vulnerable Web Application](http://www.dvwa.co.uk/) - Уязвимое веб-приложение на PHP/MySQL.
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - Скрипты и инструменты для простого размещения CTF на [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project).

## Сайты <span id="websites"></span>

*Общие сайты о CTF*

- [Awesome CTF Cheatsheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - Шпаргалка по CTF.
- [CTF Time](https://ctftime.org/) - Общие сведения о CTF по всему миру.
- [Reddit Security CTF](http://www.reddit.com/r/securityctf) - Категория CTF на Reddit.

## Вики <span id="wikis"></span>

*Различные вики для изучения CTF*

- [Bamboofox](https://bamboofox.github.io/) - Китайские ресурсы для изучения CTF.
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - Вики команды bi0s.
- [CTF Cheatsheet](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - Советы и рекомендации по CTF.
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - Вики CTF от ISIS Lab.
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - Советы по CTF от участников команды OTA CTF.

## Коллекции write-up <span id="writeups-collections"></span>

*Коллекции разборов заданий CTF*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - Разборы заданий CTF от 0e85dc6eaf.
- [Captf](http://captf.com/) - Собранные задания и материалы CTF от psifertex.
- [CTF write-ups (community)](https://github.com/ctfs/) - Архив заданий и разборов CTF, поддерживаемый сообществом.
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - Собирает разборы с CTF Time и упорядочивает их для чтения.
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - Репозиторий разборов CTF команды HackThisSite.
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - Разборы соревнований CTF от mzfr.
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - Коллекция разборов CTF с использованием pwntools.
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - Коллекция разборов команды SababaSec.
- [Shell Storm](http://shell-storm.org/repo/CTF/) - Архив заданий CTF от Jonathan Salwan.
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - Репозиторий разборов CTF команды SmokeLeetEveryday.

### Лицензия

CC0 :)
