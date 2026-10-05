# Awesome Privacy
<p align="center"><img width="500" src="misc/logo.png"> </img></p>
<p align="center">
	<img src="https://awesome.re/badge.svg" alt="Awesome">
	<a href="https://codeberg.org/pluja/awesome-privacy"><img alt="Mirror" src="https://img.shields.io/badge/Mirror-Codeberg-blue"></img></a>
</p>
<p align="center">Lista de servicios gratuitos, de código abierto y respetuosos con la privacidad, y alternativas a los servicios privativos.</p>
<p align="center">
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/ABOUT.md"> Acerca de </a> | 
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/Contributing.md"> Cómo contribuir </a> | 
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/QUOTES.md"> Citas </a> | 
	<a href="https://github.com/pluja/awesome-privacy/discussions"> Debates </a>
</p>

> [!IMPORTANT]
> El anonimato, la privacidad y la seguridad suelen usarse indistintamente, pero en realidad son conceptos distintos. Es importante comprender sus diferencias. [Más información en esta sección](#privacy-vs-security-vs-anonymity).
> 
> El objetivo principal de esta lista es ofrecer alternativas que prioricen la privacidad. Estas alternativas te permiten controlar tus datos y no los recopilan ni los venden.

## Contenido
- [2FA](#2fa)
- [Analítica](#analytics)
- [Android](#android)
  - [Tiendas de aplicaciones para Android](#android-app-store)
  - [Herramientas para limpiar Android](#android-debloat-tools)
  - [Marcador de Android](#android-dialer)
  - [Gestor de archivos para Android](#android-file-manager)
  - [Galería de Android](#android-gallery)
  - [Teclado de Android](#android-keyboard)
  - [Lanzador de Android](#android-launcher)
- [Inteligencia artificial](#artificial-intelligence)
	- [ChatGPT](#chatgpt)
	- [Programación con IA](#ai-coding)
	- [Texto a voz](#text-to-speech)
 	- [Voz a texto](#speech-to-text)
	- [Generación de imágenes](#image-generation)
- [Marcadores](#bookmarking)
    - [Anotaciones de libros y páginas web](#book-and-web-annotationshighlights-management)
- [CAPTCHA](#captchas)
- [Calendario](#calendar)
- [Motores de comentarios (Disqus)](#commenting-engines)
- [Ofuscación](#cloaking)
- [Almacenamiento en la nube](#cloud-storage)
- [Herramientas para creadores](#creator-tools)
- [Bases de datos](#databases)
- [Aplicaciones de citas](#dating-apps)
- [Herramientas de diseño](#design-tools)
- [Herramientas para desarrolladores](#developer-tools)
    - [IDE](#ides)
- [Dominios y alojamiento](#domains--hosting)
- [Gestores de descargas](#download-manager)
- [Libros electrónicos](#ebooks)
- [Cifrado](#encryption)
- [Gestión e intercambio de archivos](#file-management-and-sharing)
- [Actividad física y salud](#fitness-and-health)
	- [Rastreadores de actividad física](#fitness-trackers)
	- [Alimentación](#food)
	- [Seguimiento del ciclo menstrual](#menstrual-cycle-trackers)
	- [Salud médica](#medical-health)
- [Fuentes tipográficas](#fonts)
- [Formularios](#forms)
- [Juegos](#games)
    - [Mario Kart](#mario-kart)
    - [Minecraft](#minecraft)
    - [Pokémon](#pokemon)
    - [Sonic el erizo](#sonic-the-hedgehog)
- [Asistentes domésticos](#home-assistants)
- [Mensajería instantánea](#instant-messaging)
- [Herramientas para enlaces en la biografía](#link-in-bio-tools)
- [Acortadores de enlaces](#link-shorteners)
- [Seguimiento de ubicación](#location-tracking)
- [Servicios de correo electrónico](#mail-services)
- [Mapas y navegación](#maps-and-navigation)
- [Plataformas de streaming multimedia](#media-streaming-platforms)
    - [Vídeo y audio](#video-and-audio)
    - [Audio](#audio)
    - [Pódcast](#podcasts)
- [Reconocimiento de música (alternativas a Shazam)](#music-recognition)
- [Notas y tareas](#notes-and-tasks)
- [Ofimática](#office)
- [Proveedores de telefonía en línea (SMS)](#online-phone-providers)
- [Sistemas operativos](#operating-systems)
    - [Android](#android)
    - [PC / macOS](#pc--macos)
    - [Smart TV](#smart-tv)
- [Gestores de contraseñas](#password-managers)
- [Pastebin y uso compartido de secretos](#pastebin-and-secret-sharing)
- [Pagos](#payments)
- [Finanzas personales](#personal-finances)
	- [Gestión financiera completa](#full-featured-financial-management)
 	- [Gestión de presupuestos](#budget-management)
  	- [Gastos compartidos](#shared-expenses)
	- [Otros](#others)
 	- [Seguimiento de carteras](#portfolio-trackers)
- [Edición y gestión de fotos](#photo-editing-and-management)
- [Almacenamiento de fotos](#photo-storage)
- [Herramientas de privacidad](#privacy-tools)
- [Acceso y control remotos](#remote-access-and-control)
- [Routers](#routers)
- [Lectores RSS](#rss-readers)
- [Motores de búsqueda](#search-engines)
- [Redes y plataformas sociales](#social-networks-and-platforms)
    - [Plataformas de blogs (Medium / Blogger)](#blogging-platforms-medium)
    - [Fandom](#fandom)
    - [IMDb](#imdb)
    - [Imgur](#imgur)
    - [Instagram](#instagram)
    - [Quora](#quora)
    - [Reddit](#reddit)
    - [Plataformas de streaming (Twitch)](#streaming-platforms-twitch)
    - [TikTok](#tiktok)
    - [Twitter](#twitter)
    - [YouTube](#youtube)
- [Grabación de pantalla](#screen-recording)
- [Herramientas de trabajo en equipo](#teamworking-tools)
- [Traducción](#translation)
- [Sin categoría](#uncategorized)
- [Utilidades](#utilities)
- [Control de versiones](#version-control)
- [Videoconferencias y audioconferencias](#video-and-audio-conferencing)
- [Edición de vídeo](#video-editing)
- [Redes privadas virtuales (VPN)](#vpns)
- [Navegadores web](#web-browser)
    - [Complementos para navegadores](#browser-addons) 
    - [Sincronización del navegador](#browser-sync)
- [Denuncias de irregularidades](#whistleblowing)

## 2FA
⛔ Evita usar aplicaciones que no permitan exportar tus claves **fácilmente**.
- Authy
- Google Authenticator [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅ En su lugar, utiliza
- [🤖](#icons) [Aegis](https://getaegis.app/) - Aplicación gratuita, segura y de código abierto para Android que permite gestionar tokens de verificación en dos pasos. Admite diversas formas de importación desde otras aplicaciones (Google Authenticator, Authy, etc.), cifrado de la bóveda y exportación de claves (en texto plano o cifradas).
- [ente Auth](https://ente.com/auth/) - Aplicación gratuita, multiplataforma, cifrada de extremo a extremo y de código abierto para gestionar tokens de verificación en dos pasos. De los creadores de [ente Photos](https://ente.com), utiliza la misma infraestructura ampliamente probada. Requiere una cuenta de ente.io.
- [Owky](https://github.com/charlietango/owky) [💀](#icons) - Autenticador de dos factores gratuito y de código abierto para usuarios de iOS.
- [🤖](#icons) [FreeOTPPlus](https://github.com/helloworld1/FreeOTPPlus) - Versión mejorada de FreeOTP-Android que ofrece un autenticador 2FA repleto de funciones.
- [🤖](#icons) [Stratum](https://github.com/stratumauth/app) - Cliente de autenticación de dos factores (2FA) para Android y Wear OS.
- [Proton Authenticator](https://proton.me/authenticator) - Proton Authenticator es una aplicación 2FA sencilla y gratuita, [de código abierto](https://proton.me/community/open-source#apps) y [cifrada de extremo a extremo](https://proton.me/blog/password-encryption).
- [2FAS Auth](https://2fas.com/auth) - Autenticador TOTP de código abierto para iOS y Android, con una extensión complementaria para el navegador y sin necesidad de cuenta. Con licencia GPL-3.0.

[Back to top 🔝](#contents)

## Analítica
⛔ Evita cualquier servicio de analítica de Google, Facebook, Microsoft o cualquier empresa privada. Este tipo de analítica perjudica la privacidad de los usuarios.

✅  **En su lugar, utiliza**
- [Ackee](https://ackee.electerious.com/) - Analítica web autoalojada.
- [Aptabase](https://aptabase.com) - Analítica sencilla, de código abierto y centrada en la privacidad para aplicaciones móviles y de escritorio.
- [Cabin](https://withcabin.com) - Analítica web que prioriza la privacidad y tiene en cuenta la huella de carbono.
- [GoatCounter](https://www.goatcounter.com/) - Plataforma de analítica ligera, de código abierto y respetuosa con la privacidad.
- [Matomo](https://matomo.org/) - Alternativa a Google Analytics que protege tus datos y la privacidad de tus clientes.
- [Nullitics](https://nullitics.com/) - Analítica económica y de código abierto que no requiere esfuerzo.
- [Pirsch](https://pirsch.io/) - Alternativa sencilla, ligera, sin cookies y de código abierto a Google Analytics, respetuosa con la privacidad e integrable fácilmente en cualquier sitio web o backend.
- [Plausible](https://plausible.io/) - Alternativa sencilla a Google Analytics que respeta la privacidad.
- [Shynet](https://github.com/milesmcc/shynet) - Analítica web moderna, detallada y respetuosa con la privacidad, que funciona sin cookies ni JavaScript.
- [Swetrix](https://swetrix.com) - Servicio de analítica web de código abierto (y autoalojable), centrado en la privacidad y totalmente libre de cookies.
- [Umami](https://umami.is/) - Alternativa sencilla y rápida a Google Analytics para sitios web.
- [Unidentified Analytics](https://unidentifiedanalytics.web.app/) - Seguimiento ingenuo basado en IP que funciona en todas partes (web, línea de comandos, correo electrónico, etc.). No requiere cuenta. Fácil para desarrolladores.
- [Rybbit](https://rybbit.com) - Alternativa de código abierto y respetuosa con la privacidad a Google Analytics, diez veces más intuitiva.

[Back to top 🔝](#contents)

## Android

### Tiendas de aplicaciones para Android
⛔ **Evita**
- Google Play Store [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **En su lugar, utiliza**
- [F-Droid](https://f-droid.org/) - Catálogo instalable de aplicaciones FOSS (software libre y de código abierto) para Android.
	- [Droid-ify](https://github.com/Droid-ify/client) - Cliente ligero de F-Droid con interfaz Material.
	- [Aurora Droid](https://github.com/whyorean/AuroraDroid) [💀](#icons) - Cliente FOSS moderno para F-Droid.
	- [Foxy Droid](https://github.com/kitsunyan/foxy-droid) [💀](#icons) - Cliente no oficial de F-Droid con el estilo de la versión clásica.
- [FossDroid](https://fossdroid.com/) - Fossdroid tiene como objetivo promover las aplicaciones gratuitas y de código abierto para Android, desde las más recientes y populares hasta las más novedosas.
- [SkyDroid](https://github.com/redsolver/skydroid) [💀](#icons) - Tienda descentralizada de aplicaciones para Android.
- [Obtainium](https://github.com/ImranR98/Obtainium) - Recibe actualizaciones de las aplicaciones directamente desde su origen.
- [Accrescent](https://github.com/accrescent/accrescent) - Una novedosa tienda de aplicaciones para Android centrada en la seguridad, la privacidad y la facilidad de uso.

### Clientes alternativos de Google Play Store
- [Aurora Store](https://auroraoss.com/download/#aurora-store) - Cliente frontend de código abierto alternativo a Google Play Store, diseñado teniendo en cuenta la privacidad y una apariencia moderna.

### Herramientas para limpiar Android
⛔ **Evita**
- ADB AppControl - Sencillo contenedor de ADB con una [política de privacidad pésima](https://adbappcontrol.com/en/terms/) que recopila datos como la información del dispositivo y las aplicaciones que instalas o desinstalas.

✅ **En su lugar, utiliza**
- [Universal Android Debloater Next Generation](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/) - Interfaz gráfica multiplataforma escrita en Rust que utiliza ADB para limpiar dispositivos Android sin root. Mejora la privacidad, la seguridad y la duración de la batería de tu dispositivo.

### Marcador de Android
⛔ **Evita**

Los marcadores de terceros disponibles en Play Store pueden contener anuncios o rastreadores y solicitar permisos innecesarios.

✅  **En su lugar, utiliza**
- [Fossify Phone](https://github.com/FossifyOrg/Phone) - Práctico gestor de llamadas con agenda, bloqueo de números y compatibilidad con varias tarjetas SIM.

### Gestor de archivos para Android
⛔ **Evita**

Los gestores de archivos preinstalados y las aplicaciones de terceros disponibles en Play Store pueden contener anuncios o rastreadores y solicitar permisos innecesarios.

✅  **En su lugar, utiliza**

- [Amaze File Manager](https://github.com/TeamAmaze/AmazeFileManager) - Gestor de archivos sencillo y atractivo para Android con Material Design.
- [Material Files](https://github.com/zhanghai/MaterialFiles) - Gestor de archivos de código abierto para Android 5.0 o posterior, con Material Design.
- [Ghost Commander](https://f-droid.org/packages/com.ghostsq.commander/) - Gestor de archivos de doble panel.
- [🤖](#icons) [Fossify File Manager](https://github.com/FossifyOrg/File-Manager) - Gestor de archivos de código abierto para Android, sin anuncios, seguimiento ni permiso de acceso a Internet. Con licencia GPL-3.0.

### Teclado de Android
⛔ **Evita**
- GBoard (Google) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- SwiftKey [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **En su lugar, utiliza**
- [AnySoftKeyboard](https://anysoftkeyboard.github.io/) - El único teclado para Android que necesitarás. Libre como en libertad y gratuito.
- [FlorisBoard](https://github.com/florisboard/florisboard) - Teclado gratuito y de código abierto para dispositivos Android 6.0 o posteriores. Aspira a ser moderno, fácil de usar y personalizable, respetando plenamente tu privacidad. Actualmente se encuentra en una fase beta temprana.
- [Futo Keyboard](https://keyboard.futo.tech/) - Teclado moderno que respeta tu privacidad y seguridad, con funciones como entrada de voz sin conexión, escritura deslizando el dedo y autocorrección inteligente.
- [Heliboard](https://github.com/HeliBorg/HeliBoard) - Teclado de código abierto, personalizable y atento a la privacidad, basado en AOSP / OpenBoard y con numerosas funciones y mejoras, como diccionarios personalizados, temas y escritura deslizando el dedo.
- [Indic Keyboard](https://gitlab.com/indicproject/indic-keyboard) - Teclado versátil para usuarios de Android que quieran escribir mensajes y correos en idiomas índicos e indios, o prefieran usarlos además del inglés en su teléfono.
- [OpenBoard](https://github.com/openboard-team/openboard) [💀](#icons) - Teclado FOSS al 100 % basado en AOSP, sin dependencias de binarios de Google y respetuoso con tu privacidad. Ya no se actualiza, pero sigue funcionando.
- [Simple Keyboard](https://github.com/rkkr/simple-keyboard) - Un teclado sencillo y nada más.

### Galería de Android

La galería de tu teléfono es un aspecto muy personal de tu vida: puede contener imágenes y vídeos que reflejan momentos íntimos, lugares y personas importantes para ti. Proteger su privacidad es esencial para evitar el uso indebido de esta información. Además de protegerte a ti, también preserva la privacidad de los amigos y familiares que aparecen en esas fotos y que quizá no hayan dado su consentimiento para compartirlas.

> [!NOTE]
> Para guardar y hacer copias de seguridad de tus fotos de forma privada, consulta la sección [Almacenamiento de fotos](#photo-storage).

⛔ **Evita**
- **Google Photos** tiene problemas de privacidad. Recopila muchos datos sobre ti, como se indica en su [política de privacidad](https://policies.google.com/privacy?hl=en-US#infocollect). Google puede analizar tus fotos y marcarlas por distintos motivos, como muestra este [incidente](https://petapixel.com/2022/08/22/google-flags-photos-of-fathers-sick-son-as-child-abuse-informs-police/). También utiliza tus fotos para mejorar su tecnología de IA.
- **Amazon Photos** también presenta problemas de privacidad similares. Al igual que Google Photos, recopila mucha información de tu galería. Puedes ver algunos de los datos que recopila en su lista de [**ejemplos**](https://www.amazon.com/gp/help/customer/display.html?nodeId=468496&ref_=footer_privacy#GUID-8966E75F-9B92-4A2B-BFD5-967D57513A40__SECTION_87C837F9CCD84769B4AE2BEB14AF4F01).
- Galerías de **Samsung, Huawei, Xiaomi, etc.**

✅ **En su lugar, utiliza**
- [Aves](https://github.com/deckerst/aves) - Hermosa aplicación de galería y explorador de metadatos, desarrollada para Android con Flutter.
- [Fossify Gallery](https://github.com/FossifyOrg/Gallery) - Bifurcación de Simple Gallery. Explora tus recuerdos sin interrupciones con esta galería de fotos y vídeos.

### Lanzador de Android
⛔ **Evita**

Los lanzadores de terceros disponibles en Play Store pueden contener anuncios o rastreadores y solicitar permisos innecesarios.

✅ **En su lugar, utiliza**
- [Lawnchair](https://lawnchair.app/) - No necesita un eslogan ingenioso.
- [OpenLauncher](https://github.com/OpenLauncherTeam/openlauncher) [💀](#icons) - Lanzador personalizable y de código abierto para Android.
- [KISS](https://kisslauncher.com/) - Lanzador de Android de código abierto, rapidísimo y de menos de 200 kB.
- [Olauncher](https://github.com/tanujnotes/Olauncher) - Aplicación de lanzador minimalista y sin anuncios para Android.
- [Pie Launcher](https://github.com/markusfisch/PieLauncher) - Lanzador de pantalla de inicio para Android que utiliza un menú circular dinámico en lugar de iconos en posiciones fijas.
- [Bliss Launcher](https://gitlab.e.foundation/e/os/BlissLauncher3) - Lanzador predeterminado del sistema operativo basado en Android /e/.
Permite crear y explorar fácilmente grupos de aplicaciones y muestra insignias de notificación en los iconos.

[Back to top 🔝](#contents)

## Inteligencia artificial

Al utilizar servicios de IA en la nube, el proveedor suele recopilar y almacenar los datos que introduces. Esto puede incluir no solo el contenido de tus solicitudes, sino también metadatos, como marcas de tiempo o direcciones IP. Según sus políticas de privacidad, los servidores de terceros pueden dar acceso a tus datos a sus empleados, socios e incluso a otros usuarios. Los datos pueden utilizarse para diversos fines, como entrenar modelos, realizar investigaciones o actividades de marketing. Tus solicitudes a un servicio de IA de terceros pueden vincularse a tu información de usuario y datos de pago, relacionando tus datos con tu identidad.

#### ChatGPT

- [Jan](https://github.com/janhq/jan) - Alternativa de código abierto a ChatGPT que funciona completamente sin conexión en tu ordenador.
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Inferencia del modelo LLaMA de Facebook en C/C++ puro para ejecutarlo localmente en una CPU.
- [LocalAI](https://github.com/mudler/LocalAI) - API local sencilla y autoalojada, compatible con OpenAI y desarrollada por la comunidad en Go. Puede sustituir directamente a OpenAI y ejecutarse en una CPU con hardware de consumo.
- [ollama](https://github.com/ollama/ollama) - Pon en marcha Llama 2 y otros modelos de lenguaje grandes localmente.
- [PasteGuard](https://github.com/sgasser/pasteguard) - Proxy de privacidad para API de LLM que oculta información personal identificable y secretos antes de que lleguen a proveedores en la nube. Es autoalojable, compatible con OpenAI y restaura los datos originales en las respuestas.
- [Shimmy](https://github.com/Michael-A-Kuykendall/shimmy) - Servidor de inferencia de IA centrado en la privacidad, compatible con la API de OpenAI, sin dependencias de la nube y con procesamiento local de modelos.
- [Tinfoil](https://tinfoil.sh/) - Chat de IA verificablemente privado e inferencia en la nube compatible con OpenAI. Utiliza computación confidencial de NVIDIA y código abierto registrado en un log de transparencia para poder verificarlo de extremo a extremo.
- [Open WebUI](https://openwebui.com) - Interfaz web autoalojada para Ollama y otros modelos locales que ofrece un chat privado al estilo de ChatGPT. Con licencia BSD-3.
- [LibreChat](https://librechat.ai) - Interfaz de chat autoalojada que conecta numerosos modelos de IA en una interfaz privada bajo tu control. De código abierto, con licencia MIT.

#### Programación con IA

- [Continue](https://github.com/continuedev/continue) - Piloto automático de código abierto para VS Code y JetBrains: la forma más sencilla de programar con cualquier LLM.
- [Cline](https://cline.bot/) - Programación con IA de código abierto para VS Code. Consulta cada decisión y utiliza tus propios modelos.
	- [Zoo Code](https://github.com/Zoo-Code-Org/Zoo-Code) - Bifurcación de Cline con algunas mejoras; sucesor comunitario de Roo Code, cuyo desarrollo se interrumpió.
- [OpenCode](https://github.com/anomalyco/opencode/) - Agente de programación de código abierto. Conecta modelos locales o cualquier proveedor que elijas.
- [Aider](https://aider.chat) - Programador colaborativo con IA para el terminal que edita código en tu repositorio Git local utilizando tus propias claves de API. Con licencia Apache-2.0.
- [Tabby](https://tabby.tabbyml.com) - Asistente autoalojado de autocompletado de código que se ejecuta en tu propio hardware como alternativa a GitHub Copilot. Con licencia Apache-2.0.

#### Texto a voz

- [Kokoro FastAPI](https://github.com/remsky/Kokoro-FastAPI) - Contenedor FastAPI en Docker para el modelo de texto a voz [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M), con compatibilidad con CPU, ONNX y GPU NVIDIA, gestión y unión automática de segmentos.
- [Piper](https://github.com/OHF-Voice/piper1-gpl) - Sistema neuronal local y rápido de texto a voz, con un sonido excelente y optimizado para Raspberry Pi 4.
- [Espeak](https://github.com/espeak-ng/espeak-ng) - eSpeak NG es un sintetizador de voz de código abierto compatible con más de cien idiomas y acentos. Las voces suenan algo robóticas.
- [Chatterbox](https://github.com/resemble-ai/chatterbox) - Modelo local de texto a voz con clonación de voz que funciona íntegramente en tu equipo. De código abierto, con licencia MIT.

#### Voz a texto

- **Models**
	- [Moonshine](https://github.com/moonshine-ai/moonshine) - Reconocimiento automático del habla (ASR) rápido y preciso para dispositivos periféricos.
	- [OpenAI Whisper](https://github.com/openai/whisper) - Modelo de reconocimiento de voz de propósito general que puede ejecutarse localmente sin conexión. Transcribe audio desde y hacia varios idiomas.
		- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - Inferencia de alto rendimiento del modelo de reconocimiento automático del habla (ASR) Whisper de OpenAI.
		- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) - Reimplementación de Whisper con CTranslate2 que transcribe localmente hasta cuatro veces más rápido. Con licencia MIT.
	- [ParakeetTDT](https://parakeettdt.com/) - Transcripción de audio eficiente. Convierte voz a texto con una velocidad y precisión sin precedentes usando el avanzado modelo de reconocimiento de voz con IA de NVIDIA.

- **Apps and services**
	- [OpenWhispr](https://github.com/OpenWhispr/openwhispr) - Aplicación de dictado por voz y productividad con agentes de IA, transcripción de reuniones, notas y reconocimiento de voz local o en la nube. Prioriza la privacidad y está disponible en varias plataformas. Alternativa de código abierto a wisprflow.
	- [Sasayaki](https://github.com/pluja/sasayaki) - Pequeña aplicación de dictado para Android que convierte el habla en texto claro.
	- [Speaches](https://github.com/speaches-ai/speaches) - Servidor compatible con la API de OpenAI que admite transcripción en streaming, traducción y generación de voz.

#### Generación de imágenes

- [ComfyUI](https://github.com/Comfy-Org/ComfyUI) - Permite ejecutar flujos avanzados de generación de imágenes mediante una interfaz avanzada. Disponible para Windows, Linux y macOS.
- [InvokeAI](https://github.com/invoke-ai/InvokeAI) - Genera y crea contenido visual impresionante localmente con las tecnologías más recientes basadas en IA.
- [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) - Interfaz web local para Stable Diffusion y otros modelos de difusión, basada en ComfyUI. Con licencia MIT.

[Back to top 🔝](#contents)

## Marcadores
⛔ **Evita**
- Evernote Web Clipper - [Política de privacidad deficiente](https://tosdr.org/en/service/207). [Sus aplicaciones tienen muchos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.evernote/latest/) y requieren demasiados permisos.

✅  **En su lugar, utiliza**
- [42links](https://42links.tuxproject.de) - Servicio minimalista de almacenamiento de marcadores, de código abierto y autoalojado.
- [Floccus](https://floccus.org/) - Sincroniza tus marcadores de forma privada entre navegadores y dispositivos.
- [Grimoire](https://github.com/goniszewski/grimoire) - Gestor de marcadores moderno, de código abierto y autoalojado.
- [Karakeep](https://karakeep.app/) - (antes Hoarder) Aplicación de código abierto para «guardar cualquier cosa» como marcador, que usa IA para etiquetar automáticamente el contenido que añades.
- [LinkAce](https://github.com/Kovah/LinkAce) - Archivo de marcadores de código abierto y autoalojado que supervisa y organiza tus enlaces guardados (GPL-3.0).
- [LinkDing](https://github.com/sissbruecker/linkding) - Gestor de marcadores de código abierto y autoalojado, diseñado para ser minimalista, rápido y fácil de ejecutar con Docker (MIT).
- [Shiori](https://github.com/go-shiori/shiori) - Gestor de marcadores de código abierto y autoalojado, escrito en Go y utilizable como CLI o aplicación web (MIT).
- [Wallabag](https://wallabag.org/) - Servidor de código abierto para guardar artículos y leerlos más tarde, que también puede autoalojarse. Ofrece un servicio de alojamiento de pago que tiene en cuenta la privacidad.
- [Linkwarden](https://linkwarden.app) - Gestor de marcadores autoalojado que guarda y archiva copias completas de las páginas que recopilas (AGPL-3.0).
- [Readeck](https://readeck.org) - Aplicación autoalojada de un solo binario para guardar artículos y leerlos más tarde; los archiva para leerlos sin conexión (AGPL-3.0).

### Gestión de anotaciones y subrayados de libros y páginas web

- [Blasta](https://git.xmpp-it.net/sch/Blasta) - Gestor colaborativo de marcadores para organizar contenido en línea.
- [Hypothesis](https://github.com/hypothesis/h/) - Anota la web con cualquier persona, desde cualquier lugar.
- [Kobuddy](https://github.com/karlicoss/kobuddy) - Exporta los marcadores y las anotaciones de tu lector Kobo a un archivo .txt.

[Back to top 🔝](#contents)

## CAPTCHA
⛔ **Evita**

Los CAPTCHA de Google utilizan cookies para rastrear a los usuarios y clasificar sus direcciones IP.

- Google reCAPTCHA [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- hCaptcha [![](https://shields.tosdr.org/en_2207.svg)](https://tosdr.org/en/service/2207)

✅  **En su lugar, utiliza**
- [Altcha.org](https://altcha.org) - Alternativa gratuita, de código abierto y autoalojada a los CAPTCHA, basada en un mecanismo de prueba de trabajo.
- [mCaptcha](http://mcaptcha.org/) ([repositorio](https://github.com/mCaptcha/mCaptcha)) - Sistema CAPTCHA de código abierto con una experiencia de usuario fluida. mCaptcha utiliza una prueba de trabajo (PoW) basada en SHA256 para limitar la frecuencia de solicitudes de los usuarios.
- [Private Captcha](https://github.com/PrivateCaptcha/PrivateCaptcha) - Alternativa de CAPTCHA basada en prueba de trabajo, autoalojada y que prioriza la privacidad, desarrollada en la UE.

[Back to top 🔝](#contents)

## Calendario

⛔ **Evita**

- **Google Calendar** - Rastrea tus eventos, se integra con el ecosistema publicitario de Google y almacena tus datos en sus servidores sin cifrado de extremo a extremo.

✅  **En su lugar, utiliza**

- [🤖](#icons) [Etar](https://github.com/Etar-Group/Etar-Calendar) - Aplicación de calendario de código abierto para Android que funciona con cualquier servidor CalDAV.
- [🤖](#icons) [Fossify Calendar](https://github.com/FossifyOrg/Calendar) - Aplicación de calendario sencilla y sin conexión para Android, compatible con widgets.
- [🤖](#icons) [KashCal](https://github.com/KashCal/KashCal) - Calendario para Android que prioriza el uso sin conexión, con sincronización de iCloud/CalDAV, búsqueda de texto completo, eventos periódicos y widget para la pantalla de inicio. Con licencia Apache 2.0.
- [Nextcloud Calendar](https://apps.nextcloud.com/apps/calendar) - Aplicación de calendario para Nextcloud compatible con CalDAV. Se puede autoalojar.
- [Proton Calendar](https://proton.me/calendar) - Calendario de Proton cifrado de extremo a extremo, parte del ecosistema de privacidad de Proton.

[Back to top 🔝](#contents)

## Motores de comentarios

⛔ **Evita**

- **Disqus** - Sus sitios contienen numerosos rastreadores. Según su política de privacidad, Disqus recopila: dirección IP, identificador único de cookie, identificador del dispositivo, datos de inicio de sesión, tipo y versión del navegador, zona horaria y ubicación, tipos y versiones de complementos del navegador, sistema operativo y plataforma, así como otra información tecnológica de los dispositivos que utilizas para acceder al servicio.

✅  **En su lugar, utiliza**

- [Comentario](https://comentario.app) - Motor de comentarios web pequeño, de código abierto y centrado en la privacidad, que añade debates a las páginas web sencillas.
- [Disgus](https://github.com/carlitoplatanito/disgus) - Comentarios integrables en tu sitio web, basados en Nostr. Como Disqus, pero con Nostr.
- [Isso](https://github.com/isso-comments/isso) - Servidor de comentarios ligero y autoalojado, escrito en Python y JavaScript. Aspira a sustituir directamente a Disqus.
- [Remark42](https://remark42.com) - Motor de comentarios autoalojado, ligero y sencillo (pero funcional) que no espía a los usuarios.
- [Giscus](https://giscus.app) - Sistema de comentarios que guarda los debates en GitHub Discussions, sin base de datos, anuncios ni seguimiento. De código abierto, con licencia MIT.

[Back to top 🔝](#contents)

## Ofuscación
### Imágenes
- [Fawkes](https://github.com/Shawn-Shan/fawkes) [💀](#icons) - Herramienta para proteger la privacidad frente a los sistemas de reconocimiento facial.
  - [CloakMe](https://github.com/pluja/CloakMe) [💀](#icons) - Interfaz web para el algoritmo Fawkes.
- [ImageScrubber](https://github.com/everestpipkin/image-scrubber) [💀](#icons) - Herramienta sencilla en el navegador para anonimizar fotografías tomadas en protestas ([versión alojada por everestpipkin](https://everestpipkin.github.io/image-scrubber/)).

### Texto
- [Stegcloak](https://stegcloak.surge.sh/) [💀](#icons) - Oculta secretos de forma segura en texto sin formato mediante caracteres invisibles y contraseñas ([repositorio](https://github.com/kurolabs/stegcloak)).

[Back to top 🔝](#contents)

## Almacenamiento en la nube
⛔ **Evita**
- **Google Drive** - Es propiedad de Google y su política de privacidad es [muy deficiente](https://tosdr.org/en/service/217). Los datos se almacenan en servidores remotos, donde pierdes el control sobre ellos. Utiliza rastreadores y no ofrece cifrado.
- **DropBox** - [Política de privacidad deficiente](https://tosdr.org/en/service/270). La aplicación contiene [varios rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.dropbox.android/latest/) y requiere muchos permisos.
- **OneDrive** - Es propiedad de Microsoft y su política de privacidad es [muy deficiente](https://tosdr.org/en/service/244). Los datos se almacenan en servidores remotos, donde pierdes el control sobre ellos. Utiliza rastreadores y no ofrece cifrado.

✅  **En su lugar, utiliza**
- [Nextcloud](https://nextcloud.com/) - Plataforma de productividad autoalojada y de código abierto que te permite mantener el control.
- [Seafile](https://www.seafile.com/en/home/) - Sincronización e intercambio de archivos de alto rendimiento. Incluye una wiki, edición WYSIWYG y otras funciones de gestión del conocimiento.
- [Peergos](https://peergos.org/) - Espacio en línea seguro y privado donde guardar, compartir y ver fotos, vídeos, música y documentos. También incluye calendario, noticias, listas de tareas, chat y cliente de correo. De código abierto y autoalojable.
- [Proton Drive](https://proton.me/drive) - Bóveda suiza para tus archivos, cifrada de extremo a extremo y diseñada para proteger tus datos. [Lee este artículo sobre la detención de un activista climático](https://proton.me/blog/climate-activist-arrest).
- [PrivateStorage](https://private.storage/) - Almacenamiento en la nube y sincronización de carpetas centrados en la privacidad, sin cuenta y con cifrado en el cliente.

**Otras herramientas útiles**
- [Cryptomator](https://cryptomator.org) - Cryptomator cifra tus datos de forma rápida y sencilla. Después puedes subirlos protegidos a tu servicio en la nube favorito.
- [Syncthing](https://syncthing.net/) - Programa de sincronización continua de archivos. Sincroniza archivos entre dos o más ordenadores en tiempo real, protegidos de forma segura frente a miradas indiscretas.
- [Rclone](https://rclone.org/) - Programa de línea de comandos para gestionar archivos en servicios de almacenamiento en la nube. Es una alternativa con muchas funciones a las interfaces web de los proveedores y, como las herramientas anteriores, permite cifrar los archivos almacenados en la nube.
- [Restic](https://restic.net/) - Programa de línea de comandos para gestionar archivos en varios proveedores de almacenamiento en la nube. Restic cifra los datos de forma predeterminada. Entre sus funciones destacadas se encuentran explorar el almacenamiento mediante instantáneas similares a las de Git sin costes adicionales, deduplicar datos y ahorrar espacio significativamente mediante compresión.

[Back to top 🔝](#contents)

## Herramientas para creadores

En lugar de herramientas populares como Riverside.fm, Restream y Camtasia, opta por alternativas de código abierto y P2P que prioricen la privacidad de los datos, eliminen la intervención de terceros y ofrezcan funciones transparentes respaldadas por la comunidad.

- [vdo.ninja](https://vdo.ninja/) - Potente herramienta que permite incorporar transmisiones de vídeo remotas a OBS u otro software de estudio mediante WebRTC.
	- [socialstream.ninja](https://github.com/steveseguin/social_stream#readme) - Agrupa tus transmisiones de mensajes en redes sociales y mucho más.
- [OBS Studio](https://obsproject.com/) - Software gratuito y de código abierto para grabar vídeo y emitir en directo.
- [Screenity](https://screenity.io/) - Grabador de pantalla gratuito, privado y fácil de usar.

[Back to top 🔝](#contents)

## Bases de datos
[![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
⛔ Evita utilizar bases de datos privativas que no controles, como Google Firebase.

✅ En su lugar, utiliza
- [Appwrite](https://appwrite.io/) - Servidor backend seguro y de código abierto para desarrolladores web, móviles y de Flutter.
- [Supabase](https://supabase.com/) - Alternativa de código abierto a Firebase ([autoalojamiento](https://github.com/supabase/supabase/issues/4934) [limitado](https://github.com/supabase/supabase/issues/4440#issuecomment-992108832))
- [Pocketbase](https://pocketbase.io/) - Backend de código abierto escrito en Go y contenido en un único archivo.
- [TrailBase](https://trailbase.io/) - Alternativa de código abierto a Firebase, basada en Rust y SQLite y distribuida en un solo ejecutable. Incluye API REST y en tiempo real con seguridad de tipos, autenticación e interfaz de administración. Con licencia OSL-3.0.
- [Baserow](https://baserow.io/) - Base de datos y hoja de cálculo sin código, autoalojada, que sirve como alternativa de código abierto a Airtable. El núcleo tiene licencia MIT.

[Back to top 🔝](#contents)

## Herramientas para desarrolladores
- [Beekeeper Studio](https://www.beekeeperstudio.io) - Editor SQL y gestor de bases de datos de código abierto cuya misión incluye el compromiso con la privacidad.

### IDE
⛔ Evita utilizar IDE privativos repletos de rastreadores y telemetría.

✅ En su lugar, utiliza
- [Neovim](https://neovim.io/) - Editor de texto basado en Vim y altamente extensible.
- [VSCodium](https://vscodium.com/) - Binarios de software libre y de código abierto de VS Code. El código fuente de VS Code es de código abierto (con licencia MIT), pero el producto descargable (Visual Studio Code) se distribuye con [una licencia que no es de software libre](https://code.visualstudio.com/license) e incluye telemetría y seguimiento.

[Back to top 🔝](#contents)

## Aplicaciones de citas

Aplicaciones como Tinder recopilan y venden información personal e íntima. En particular, se ha descubierto que Tinder puede [cobrar a algunos usuarios hasta cinco veces más por el mismo servicio](https://www.mozillafoundation.org/en/blog/new-research-tinders-opaque-unfair-pricing-algorithm-can-charge-users-up-to-five-times-more-for-same-service/), [deducir estimaciones sobre tu inteligencia y otros aspectos psicométricos y venderlas a terceros](https://www.reddit.com/r/privacy/comments/k7x4s7/tinder_extrapolates_estimations_on_your/), y [quizá sepa más de ti que tú mismo](https://www.theguardian.com/technology/2017/sep/26/tinder-personal-data-dating-app-messages-hacked-sold), entre otras prácticas cuestionables que puedes encontrar en Internet.

⛔ **Evita**
- [![](https://shields.tosdr.org/en_462.svg)](https://tosdr.org/en/service/462)
- Grindr
- Badoo
- Lovoo

✅  **En su lugar, utiliza**
- [Alovoa](https://alovoa.com/) - Plataforma de citas gratuita y de código abierto que respeta tu privacidad.

[Back to top 🔝](#contents)

## Herramientas de diseño

El dominio de **Adobe** en las herramientas de diseño limita las opciones de los diseñadores y pone en riesgo su privacidad. La [falta de compatibilidad con Linux](https://helpx.adobe.com/in/download-install/kb/operating-system-guidelines.html) los obliga a utilizar Windows o macOS. Además, la [recopilación de datos mediante Creative Cloud](https://tosdr.org/en/service/417) y los [rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.adobe.psmobile/latest/) de Adobe agravan los problemas de privacidad. También es posible que [utilicen el trabajo de los usuarios para entrenar sus sistemas de IA](https://mastodon.art/@Krita/109632425661190494), lo que podría generar problemas de propiedad intelectual. Por estos motivos, los diseñadores pueden optar por alternativas de código abierto que respeten la privacidad y eviten la mayoría de estos problemas.

### InDesign

✅  **En su lugar, utiliza**
- [Scribus](https://www.scribus.net/) - Software gratuito y de código abierto de autoedición (DTP), disponible para la mayoría de los sistemas operativos de escritorio. Está diseñado para maquetar, componer texto y preparar archivos para equipos de fotocomposición profesional. Scribus también puede crear presentaciones y formularios PDF animados e interactivos.

### Photoshop / Illustrator

✅  **En su lugar, utiliza**
- [GIMP](https://www.gimp.org/) - Editor de gráficos rasterizados gratuito y de código abierto para manipular y retocar imágenes, dibujar libremente, convertir entre formatos de imagen y realizar otras tareas especializadas. No está diseñado para dibujar, aunque algunos artistas y creadores lo utilizan con ese fin.
- [Inkscape](https://inkscape.org/) - Editor de gráficos vectoriales gratuito y de código abierto para GNU/Linux, Windows y macOS. Ofrece numerosas funciones y se utiliza ampliamente para ilustraciones artísticas y técnicas, como dibujos animados, imágenes prediseñadas, logotipos, tipografía, diagramas y diagramas de flujo.
- [Krita](https://krita.org/) - Editor de gráficos rasterizados gratuito y de código abierto, diseñado principalmente para el arte digital y la animación 2D.
- [Excalidraw](https://github.com/excalidraw/excalidraw) - Pizarra virtual para dibujar diagramas con aspecto de trazos a mano.

### Figma

✅  **En su lugar, utiliza**
- [Penpot](https://penpot.app/) - Plataforma de diseño y creación de prototipos de código abierto para equipos de producto.

[Back to top 🔝](#contents)

## Dominios y alojamiento
⛔ Evita los registradores de dominios que invadan tu privacidad.

✅ En su lugar, utiliza
- [OrangeWebsite](https://www.orangewebsite.com/) - Alojamiento web en Islandia, favorable a la libertad de expresión, con registro anónimo y pagos en efectivo o criptomonedas.
- [1984 Hosting](https://1984.hosting/) - Alojamiento y registro de dominios en Islandia, centrado en los derechos civiles, con Monero y registro anónimo.
- [Encuentra más en kycnot.me (categoría VPS)](https://kycnot.me/?categories=vps) - Proveedores de VPS y alojamiento que no exigen verificación de identidad (KYC).

[Back to top 🔝](#contents)

## Gestores de descargas

- [Persepolis Download Manager](https://github.com/persepolisdm/persepolis) - Gestor de descargas e interfaz gráfica para Aria2, escrito en Python. Es un ejemplo de software libre y de código abierto, desarrollado para distribuciones GNU/Linux, BSD, macOS y Microsoft Windows.
- [Motrix](https://github.com/agalwood/Motrix) - Gestor de descargas con todas las funciones.
- [Xtreme Download Manager](https://github.com/subhra74/xdm) - Potente herramienta que puede aumentar la velocidad de descarga hasta un 500 %, guardar vídeos en streaming de YouTube, DailyMotion, Facebook, Vimeo, Google Video y más de mil sitios web, reanudar descargas interrumpidas, programarlas y convertirlas.
- [axel](https://github.com/axel-download-accelerator/axel) - Acelerador de descargas ligero para CLI. Compatible con los protocolos HTTP, HTTPS, FTP y FTPS.

[Back to top 🔝](#contents)

## Libros electrónicos

⛔ **Evita**

Las plataformas comerciales de libros electrónicos rastrean tus hábitos de lectura, vinculan las compras a cuentas que pueden revocarse y exigen activación permanente en línea.

- **Amazon Kindle** - Registra la actividad de lectura, requiere una cuenta de Amazon y cuenta con antecedentes documentados de [eliminación remota](https://www.nytimes.com/2009/07/18/technology/18kindle.html).
- **Google Play Books** - Está vinculado a una cuenta de Google, registra los datos de lectura y no ofrece un modo exclusivamente sin conexión.
- **Kobo / Apple Books** - Requieren cuentas y sincronizan de forma predeterminada los datos de lectura con los servidores de la empresa.

✅ **En su lugar, utiliza**

- [Calibre](https://calibre-ebook.com/) - Gestor de libros electrónicos de código abierto para Linux, Windows y macOS, con conversión de formatos, edición de metadatos y lector integrado (GPL-3.0).
- [Kavita](https://github.com/Kareadita/Kavita) - Biblioteca digital multiplataforma y autoalojada para libros electrónicos y cómics, con lector web integrado (GPL-3.0).
- [Komga](https://github.com/gotson/komga) - Servidor multimedia autoalojado para cómics, revistas y libros electrónicos, con interfaz web adaptable y compatibilidad con OPDS (MIT).

[Back to top 🔝](#contents)

## Cifrado
Recuerda: sin un cifrado sólido, muchas personas podrán espiarte sistemáticamente.

- [Veracrypt](https://www.veracrypt.fr/en/Home.html) - Software gratuito y de código abierto para cifrar discos en Windows, macOS y Linux.
- [Shufflecake](https://shufflecake.net/index.html) - Herramienta gratuita y de código abierto para crear varios sistemas de archivos ocultos en Linux con negación plausible.
- [Hat.sh](https://hat.sh/) - Cifrado de archivos gratuito, rápido, seguro y sin servidor.
- [Cryptomator](https://cryptomator.org/) - Cryptomator cifra tus datos de forma rápida y sencilla. Después puedes subirlos protegidos a tu servicio en la nube favorito.
- [Stegcloak](https://stegcloak.surge.sh/) [💀](#icons) - Oculta secretos de forma segura en texto sin formato mediante caracteres invisibles y contraseñas.
- [Photok](https://github.com/leonlatsch/Photok) - Caja fuerte gratuita para fotos. Guarda tus imágenes cifradas en el dispositivo y las oculta de otras personas.
- [age](https://age-encryption.org) - Herramienta moderna de línea de comandos para cifrar archivos, con claves pequeñas y sin necesidad de gestionar configuraciones ni anillos de claves. De código abierto, con licencia BSD-3.
- [Tomb](https://dyne.org/software/tomb/) - Herramienta de línea de comandos para crear y gestionar carpetas de almacenamiento cifradas en GNU/Linux, basada en LUKS y cryptsetup estándar.

### Cifrado del sistema operativo

- [Cryptsetup](https://gitlab.com/cryptsetup/cryptsetup) - Cifrado de disco completo para Linux. Cryptsetup es una utilidad para configurar cómodamente el cifrado de disco basado
en el módulo del kernel DMCrypt.

[Back to top 🔝](#contents)

## Gestión e intercambio de archivos
⛔ **Evita**
- **WeTransfer** - [Política de privacidad deficiente](https://tosdr.org/en/service/214). Los archivos no están cifrados de extremo a extremo. El sitio web incluye numerosas herramientas de analítica y rastreadores.
- **SendAnywhere** - No ofrece cifrado de extremo a extremo. El sitio web incluye montones de herramientas de analítica y rastreadores de Facebook, Google, Cloudflare...

✅ **En su lugar, utiliza**
- [Blaze](https://blaze.vercel.app/) - Forma rápida, P2P y radicalmente distinta de transferir archivos.
- [Blindsend](https://github.com/blindnet-io/blindsend) [💀](#icons) - Herramienta de código abierto para intercambiar archivos de forma privada y con cifrado de extremo a extremo.
- [Croc](https://github.com/schollz/croc) - Envía archivos fácilmente y de forma segura de un ordenador a otro.
- [Dat-cp](https://github.com/tom-james-watson/dat-cp) [💀](#icons) - Copia archivos entre equipos de una red mediante la red P2P Dat.
- [Destiny](https://leastauthority.com/community-matters/destiny/) - Envía archivos directamente al destinatario en tiempo real. Desarrollado para y junto con organizaciones de derechos humanos como alternativa gratuita de tecnología para mejorar la privacidad.
- [Gokapi](https://github.com/Forceu/Gokapi) - Alternativa ligera y autoalojada a Firefox Send que no ofrece cargas públicas. Compatible con AWS S3.
- [Lufi](https://framagit.org/fiat-tux/hat-softwares/lufi) - «Subamos ese archivo»: software para compartir archivos.
- [Localsend](https://localsend.org/) - Comparte archivos con dispositivos cercanos. Gratuito, de código abierto y multiplataforma.
- [Magic Wormhole](https://github.com/magic-wormhole/magic-wormhole) - Transfiere archivos de un ordenador a otro de forma segura.
- [OnionShare](https://github.com/onionshare/onionshare) - Herramienta de código abierto que permite compartir archivos de forma segura y anónima, alojar sitios web y chatear con amigos mediante la red Tor.
- [Paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) - Versión mejorada de paperless, respaldada por la comunidad y basada en paperless-ng.
- [PairDrop](https://github.com/schlagmichdoch/PairDrop) - Versión mejorada de Snapdrop que también permite emparejar dispositivos y compartir archivos fuera de tu red.
- [QRcp](https://github.com/claudiodangelis/qrcp) - Transfiere archivos por wifi desde tu ordenador a tu dispositivo móvil escaneando un código QR, sin salir del terminal.
- [Send](https://gitlab.com/timvisee/send) - Intercambio de archivos sencillo y privado (bifurcación de Mozilla Send).
- [Sharik](https://github.com/marchellodev/sharik) [💀](#icons) - Funciona mediante Wi-Fi o anclaje de red (punto de acceso Wi-Fi). No requiere conexión a Internet. Disponible para Android, iOS, Linux, macOS y Windows.
- [Snapdrop](https://github.com/RobinLinus/snapdrop) - Aplicación web progresiva para compartir archivos localmente, inspirada en AirDrop de Apple.
- [Winden](https://winden.app/) - Versión práctica de Magic Wormhole que puedes usar desde el navegador, sin instalar ninguna aplicación.
- [Yopass](https://github.com/jhaals/yopass) - Comparte secretos, contraseñas y archivos de forma segura.
- [scrt.link](https://scrt.link/file) - Transferencia de archivos cifrada de extremo a extremo. Hasta 100 GB y 30 días de retención. Los datos se almacenan en Suiza.

[Back to top 🔝](#contents)

## Actividad física y salud
⛔ Tu salud es una parte **muy** importante de tus **datos privados** y deberías protegerla **mucho**. Además, los datos relacionados con la salud son de los más codiciados. No utilices aplicaciones de Google, Fitbit, Huawei, Xiaomi ni de ninguna empresa que pretenda recopilar tus datos personales.

Si necesitas una aplicación para **seguir tu ciclo menstrual**, no utilices aplicaciones como Clue, Period Tracker, etc. Esas simpáticas aplicaciones rosas ansían obtener datos sobre tu ciclo menstrual y tu vida íntima, y seguro que los venderán. Protege tu vida privada. Consulta la lista siguiente para encontrar buenas alternativas.

✅  **En su lugar, utiliza**

### Rastreadores de actividad física

- [🤖](#icons) [Fitotrack](https://codeberg.org/jannis/FitoTrack) - Rastreador de actividad física para Android que prioriza la privacidad.
- [🤖](#icons) [OpenTracks](https://codeberg.org/OpenTracksApp/OpenTracks) - Aplicación para registrar actividades deportivas que respeta plenamente tu privacidad.
- [🤖](#icons) [Gadgetbridge](https://codeberg.org/Freeyourgadget/Gadgetbridge) - Sustituto gratuito y sin nube de las aplicaciones cerradas para Android de los fabricantes de dispositivos.
- [FitTrackee](https://codeberg.org/FitTrackee/FitTrackee) - Aplicación web autoalojada para registrar y analizar actividades al aire libre a partir de archivos GPS, como alternativa a Strava (AGPL-3.0).

### Planificadores de entrenamiento

- [wger](https://wger.de/en/software/features) - Aplicación web gratuita, de código abierto y autoalojada para gestionar ejercicios, entrenamientos y alimentación.

### Alimentación
- [OpenFoodFacts](https://world.openfoodfacts.org/) - Base de datos de productos alimenticios creada por todo el mundo y para todo el mundo. Puedes utilizarla para tomar mejores decisiones alimentarias.
    - [OFF Apps](https://world.openfoodfacts.org/open-food-facts-mobile-app) - Aplicaciones de código abierto para Android e iOS que escanean códigos de barras de alimentos y muestran información sobre ingredientes, aditivos y nutrición.

### Seguimiento del ciclo menstrual
- [🤖](#icons) [Bluemoon](https://gitlab.com/ngrob/bluemoon-android) - Aplicación de código abierto para seguir la menstruación y respetuosa con la privacidad. ¡Tu periodo, tus datos!
- [🤖](#icons) [Drip](https://dripapp.org/) - Seguimiento del ciclo menstrual y la fertilidad. Todo lo que introduces permanece en tu dispositivo.
- [Euki](https://eukiapp.org/) - El rastreador menstrual que no te rastrea.
- [🤖](#icons) [Periodical](https://codeberg.org/askaaron/periodical) - Calendario para seguir la menstruación y calcular los posibles días fértiles.
- [Poppy](https://poppy.usenostr.org) - Rastreador menstrual privado que funciona en el navegador. Almacena los datos localmente y puede sincronizarlos y hacer copias de seguridad mediante relés Nostr, sin servidor ni cuenta de Poppy; todo queda cifrado de extremo a extremo.

### Salud médica
- [Fasten](https://github.com/fastenhealth/fasten-onprem) [💀](#icons) - Agregador de historias clínicas electrónicas personales y familiares, autoalojado y de código abierto, diseñado para integrarse con miles de aseguradoras, hospitales y clínicas.

[Back to top 🔝](#contents)

## Fuentes tipográficas
⛔ **Evita**
- Google Fonts (no selfhosted) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **En su lugar, utiliza**
### Alternativas a Google Fonts
- [coolLabs Fonts](https://fonts.coollabs.io/) - Alternativa directa a Google Fonts que respeta la privacidad.
- [Bunny Fonts](https://fonts.bunny.net/) - Plataforma de fuentes web de código abierto que prioriza la privacidad y pretende devolverla a Internet.

### Fundiciones tipográficas
- [Velvetyne](https://www.velvetyne.fr/) - Fundición tipográfica francesa que distribuye tipografías libres y de código abierto para uso personal y comercial.
- [OpenFoundry](https://open-foundry.com/) - Plataforma seleccionada que presenta tipografías de código abierto, gratuitas para usar y modificar.

[Back to top 🔝](#contents)

## Formularios
⛔ **Evita**
- Google Forms [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **En su lugar, utiliza**
- [TypeBot](https://typebot.com) - Formularios conversacionales de código abierto.
- [CryptPad Forms](https://cryptpad.fr/form/) - Parte de la suite colaborativa CryptPad, cifrada de extremo a extremo y de código abierto.
- [FramaForms](https://framaforms.org/) - Diseña encuestas en línea fácilmente y respetando a quienes las responden.
- [Formbricks](https://formbricks.com) - Herramienta autoalojada para crear encuestas y formularios y recopilar respuestas sin entregar tus datos a terceros (AGPL-3.0).

[Back to top 🔝](#contents)

## Juegos

### Mario Kart

Nintendo [recopila datos de los usuarios](https://www.reddit.com/r/privacy/comments/qtj9xt/til_nintendo_collects_data_from_switch_owners/) y, si desactivas esa función, puede [volver a activarla](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretly-turns-on-user-data-sharing-adSyV7t35NPg). Además, ofrece un plan de pago que no está al alcance de todo el mundo.

✅  **En su lugar, utiliza**

- [SuperTuxKart](https://supertuxkart.net/Main_Page) - Juego de carreras arcade en 3D y de código abierto, con numerosos personajes, circuitos y modos de juego.
- [Sonic Robo Blast 2 Kart](https://mb.srb2.org/addons/srb2kart.2435/) - Juego de carreras de karts de estilo clásico, con circuitos preciosos y objetos disparatados.

### Minecraft

[![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

El juego pertenece a Microsoft. Por si eso no fuera suficiente, desde el 11 de marzo de 2022 se necesita una cuenta de Microsoft para jugar a Minecraft. Microsoft bloquea algunas cuentas poco después de crearlas y [obliga a los usuarios](https://github.com/MultiMC/Launcher/issues/4093) [a proporcionar](https://www.reddit.com/r/privacy/comments/e6x27o/microsoft_forcing_me_to_give_then_my_phone_number/) un **número de teléfono**. Consulta: [preguntas frecuentes de Minecraft](https://help.minecraft.net/hc/en-us/articles/360050865492-Minecraft-Java-Edition-Account-Migration-FAQ), [1](https://www.reddit.com/r/Minecraft/comments/sl8pkv/how_can_my_friend_migrate_her_account_to/hvq2sv6/), [2](https://www.reddit.com/r/privacy/comments/spcuj4/microsoft_is_going_to_attempt_to_move_everyone_on/)

El juego incluye [telemetría desde la versión v21w38a, que no se puede desactivar](https://bugs.mojang.com/browse/MC-237493). Además, [está sujeto](https://www.minecraft.net/en-us/terms) a los [términos de privacidad de Microsoft](https://privacy.microsoft.com/en-us/privacystatement), una pesadilla para la privacidad.

✅  **En su lugar, utiliza**
- [Luanti](https://www.luanti.org/) - Motor de juegos de vóxeles de código abierto y con numerosas funciones.
    - [Mineclonia](https://content.luanti.org/packages/ryvnf/mineclonia/) - Juego de supervivencia tipo sandbox inspirado en Minecraft. Bifurcación de MineClone2 centrada en la estabilidad, el rendimiento multijugador y sus funciones.

#### Complementos para Minecraft

Si aun así quieres jugar a Minecraft, puedes añadir algunos complementos que te ayuden a preservar un poco tu privacidad. No obstante, ten en cuenta que de esta forma sigues apoyando a Microsoft.

✅  **En su lugar, utiliza**
- [No-Chat-Reports](https://github.com/Aizistral-Studios/No-Chat-Reports) - Complemento para Spigot que elimina las firmas criptográficas de los mensajes de los jugadores, aunque por diseño rompe cualquier complemento de chat.
- [FreedomChat](https://github.com/ocelotpotpie/FreedomChat) - Excelente alternativa a No-Chat-Reports, ya que por diseño no rompe ningún complemento de chat.
- [No-Telemetry](https://github.com/kb-1000/no-telemetry) - Mod que desactiva la recopilación de datos de uso (telemetría) introducida en Minecraft 1.18 (snapshot 21w38a).

### Pokémon

Nintendo [recopila datos de los usuarios](https://www.reddit.com/r/privacy/comments/qtj9xt/til_nintendo_collects_data_from_switch_owners/) y, si desactivas esa función, puede [volver a activarla](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretly-turns-on-user-data-sharing-adSyV7t35NPg). Además, ofrece un plan de pago que no está al alcance de todo el mundo.

✅  **En su lugar, utiliza**

- [Pokete](https://github.com/lxgr-linux/pokete) - Pequeño juego para terminal, inspirado en un título muy popular y antiguo de Game Freak.

### Sonic el erizo

- [Sonic Robo Blast 2](https://www.srb2.org/) - Juego de fans de Sonic the Hedgehog en 3D y de código abierto, desarrollado con una versión modificada del port Doom Legacy de Doom.

[Back to top 🔝](#contents)

## Asistentes domésticos

No uses Google Home ni Alexa. Por favor, no lo hagas. Tampoco se los regales a nadie. Abren las puertas de tu hogar a la vigilancia. En cualquier momento pueden convertir estos dispositivos que se actualizan automáticamente en aparatos de vigilancia.

Artículos interesantes: [1](https://www.theguardian.com/technology/2019/oct/09/alexa-are-you-invading-my-privacy-the-dark-side-of-our-voice-assistants), [2](https://www.theregister.com/2020/08/08/ai_in_brief/), [3](https://www.networkworld.com/article/3190176/virtual-assistants-hear-everything-so-watch-what-you-say-i-m-not-kidding.html), [4](https://www.democracynow.org/2017/1/4/privacy_advocates_warn_of_potential_surveillance), [5](https://www.mirror.co.uk/news/weird-news/woman-finds-amazon-thousands-recordings-25240984), [6](https://www.seattletimes.com/business/locked-down-lawyers-warned-alexa-is-hearing-confidential-calls/), [7](https://hide.me/en/blog/assistant-devices-are-a-privacy-nightmare/).

- Google Home [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Alexa [![](https://shields.tosdr.org/en_190.svg)](https://tosdr.org/en/service/190)
- Cortana [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Siri [![](https://shields.tosdr.org/en_158.svg)](https://tosdr.org/en/service/158)

✅  **En su lugar, utiliza**
- [OpenVoiceOS](https://openvoiceos.org) - Asistente de voz de código abierto y sucesor mantenido de Mycroft, que funciona completamente sin conexión en tu propio hardware. Con licencia Apache-2.0.
- [Home Assistant](https://www.home-assistant.io/) - Sistema de domótica de código abierto que prioriza el control local y la privacidad.

[Back to top 🔝](#contents)

## Mensajería instantánea
**Consulta [este sitio](https://www.securemessagingapps.com/) para ver comparativas*.

⛔ **Evita**
- WhatsApp | [![](https://shields.tosdr.org/en_198.svg)](https://tosdr.org/en/service/198)
- Instagram DM | [![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)
- Facebook Messenger | [![](https://shields.tosdr.org/en_182.svg)](https://tosdr.org/en/service/182)
- Skype | [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Zoom | [![](https://shields.tosdr.org/en_2198.svg)](https://tosdr.org/en/service/2198)
- Google Hangouts / Chat | [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **En su lugar, utiliza**

### Descentralizadas
No existe un único punto de control o fallo. La red descentralizada funciona mediante servidores administrados por voluntarios de todo el mundo. Puedes elegir dónde se guardan tus datos o autoalojar tu propio servidor. Los protocolos son algo más complejos (debido a la federación entre servidores) y se añaden algunos metadatos a los mensajes, sin comprometer la privacidad.

- [Matrix (protocolo)](https://matrix.org/) - Red abierta para comunicarse de forma segura y descentralizada.
   - [Element](https://element.io/) - Aplicación de chat segura e integral para equipos, amigos y organizaciones. Mantiene las conversaciones bajo tu control, a salvo de la minería de datos y los anuncios. Cifrado de extremo a extremo.
   - [Cinny](https://cinny.in/) - Cliente de Matrix centrado principalmente en una interfaz sencilla, elegante y segura.
- [Jabber / XMPP (protocolo)](https://xmpp.org/) - Estándar de mensajería universal y abierto. Probado y fiable, independiente, centrado en la privacidad y cifrado de extremo a extremo.
  - [🤖](#icons) [Conversations](https://conversations.im/) - Cliente Jabber/XMPP para teléfonos Android 4.0 o posteriores, optimizado para ofrecer una experiencia móvil única.
  - [AstraChat](https://astrachat.com/) - Otro cliente XMPP.
  - [Dino](https://dino.im/) - Cliente XMPP moderno para Linux, con cifrado de extremo a extremo OMEMO y OpenPGP. De código abierto, con licencia GPL-3.0.
  - [Gajim](https://gajim.org/) - Cliente XMPP multiplataforma con cifrado OMEMO para Linux, Windows y macOS. De código abierto, con licencia GPL-3.0.
  - [Snikket](https://snikket.org/) - Servicio XMPP autoalojado que se instala con un solo comando e incluye un servidor y clientes compatibles para móviles y ordenadores. De código abierto y basado en Docker.
- [DeltaChat](https://delta.chat/) - Chatea mediante correo electrónico cifrado.
- [Session](https://getsession.org/) - Se centra especialmente en la privacidad y el anonimato. Utiliza tecnología blockchain.
- [SimpleX Chat](https://simplex.chat/) - Primera plataforma de chat 100 % privada por diseño: no tiene acceso a tu grafo de conexiones.
- [Status](https://status.app/) - Aplicación de mensajería segura, monedero de criptomonedas y navegador Web3, desarrollada con tecnología de vanguardia.

### Centralizadas
El servicio administra los servidores que permiten comunicarse a los usuarios. Existe un único punto de fallo y control, pero sigue siendo 100 % segura y fiable si los protocolos y el código son abiertos y se auditan.

- [Threema](https://threema.com/en) - Mensajería que prioriza la seguridad y la privacidad. Paga una vez y chatea para siempre. No recopila datos de los usuarios. Cliente de código abierto.
- [Signal](https://signal.org/) - Gran énfasis en la privacidad junto con todas las funciones que esperas. Cifrado sólido por diseño. 100 % de código abierto.
  - [🤖](#icons) [Molly](https://github.com/mollyim/mollyim-android) - Cliente derivado compatible con Signal y con algunas mejoras de seguridad.

### P2P
No intervienen servidores. Todo se transmite directamente de un par a otro, sin un punto de fallo o control. Al no haber servidor, ofrece menos funciones y la mensajería puede ser más lenta. Es la mejor opción para conversaciones críticas.

- [Tox](https://tox.chat/) - Software fácil de usar que te conecta con amigos y familiares sin que nadie más escuche.
- [Briar](https://briarproject.org/) - Mensajería y foros cifrados entre pares.
- [Tinfoil Chat](https://github.com/maqp/tfc) - Sistema de mensajería seguro entre extremos que enruta las comunicaciones por una red onion.
- [Berty](https://berty.tech/) - Aplicación de mensajería que prioriza la privacidad y funciona con o sin acceso a Internet, datos móviles o confianza en la red.

[Back to top 🔝](#contents)

## Herramientas para enlaces en la biografía

- [Keyoxide](https://keyoxide.org/) - Plataforma moderna, segura y respetuosa con la privacidad para establecer tu identidad descentralizada en línea.
- [LinkStack](https://linkstack.org/) - Alternativa autoalojada y de código abierto a Linktree.

[Back to top 🔝](#contents)

## Acortadores de enlaces

⛔ **Evita**

- Bit.ly

✅  **En su lugar, utiliza**

- [MagLit](https://maglit.me) - Servicio de acortamiento de enlaces cifrado y respetuoso con la privacidad, compatible también con enlaces Magnet.
- [Dub](https://github.com/dubinc/dub) - Puedes autoalojar Dub.co para tener más control sobre tus datos y el diseño.
- [Yourls](https://yourls.org/) - Acortador de URL autoalojado escrito en PHP.
- [tnyr.me](https://tnyr.me) - Acortador de URL de confianza cero con cifrado de extremo a extremo sin contraseña.
- [Kutt](https://kutt.it/) - Acortador de URL autoalojado con dominios personalizados y enlaces protegidos con contraseña. De código abierto, con licencia MIT.
- [Shlink](https://shlink.io/) - Acortador de URL autoalojado que guarda sus propias estadísticas de clics en tu servidor. De código abierto, con licencia MIT.

[Back to top 🔝](#contents)

## Seguimiento de ubicación

⛔ **Evita**

- Google location history [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Google FindMyDevice [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **En su lugar, utiliza**

### Seguimiento
- [Nextcloud Phonetrack](https://apps.nextcloud.com/apps/phonetrack) - Aplicación de Nextcloud para registrar el historial de ubicaciones mediante una [aplicación para Android](https://gitlab.com/eneiluj/phonetrack-android) ([también admite otras aplicaciones](https://gitlab.com/eneiluj/phonetrack-oc/-/wikis/userdoc#logging-methods)). Permite guardar posiciones sin conexión y enviarlas al servidor por lotes. La aplicación oficial ofrece buenas opciones para ahorrar batería.
- [OwnTracks](https://owntracks.org/) - Seguimiento de ubicación que muestra únicamente la ubicación actual (con funciones limitadas de historial de ubicaciones).
- [Traccar](https://www.traccar.org/) - Software de seguimiento de ubicación diseñado para dispositivos dedicados al registro GPS.
- [Dawarich](https://github.com/Freika/dawarich) - Alternativa autoalojada al historial de ubicaciones de Google.

### Encontrar mi dispositivo
- [Find My Device](https://gitlab.com/Nulide/findmydevice) - Encuentra tu dispositivo Android mediante SMS.
- [GPSlogger](https://github.com/mendhak/gpslogger) - Aplicación ligera para registrar datos GPS en Android. Sin servidores ni Internet. Los datos se guardan en un archivo sencillo del almacenamiento local.

[Back to top 🔝](#contents)

## Servicios de correo electrónico
⛔ **Evita**
- Gmail
- Outlook
- Yandex Mail
- Yahoo! Mail

✅ **En su lugar, utiliza**

### De terceros
- [Forward Email](https://forwardemail.net) - Servicio de correo electrónico centrado en la privacidad y 100 % de código abierto.
- [ProtonMail](https://proton.me/mail) - Correo electrónico seguro con sede en Suiza. [Lee este artículo sobre la detención de un activista climático](https://proton.me/blog/climate-activist-arrest).
- [Tuta](https://tuta.com/) - Correo electrónico seguro para todo el mundo. De código abierto.
- [mailbox.org](https://mailbox.org/) - Correo electrónico, calendario y suite ofimática de pago con sede en Alemania, cifrado PGP integrado y sin anuncios.
- [Riseup](https://riseup.net/en/about-us) - Herramientas de comunicación en línea para personas y colectivos que trabajan por el cambio social emancipador.
- [Mailfence](https://mailfence.com) - Correo electrónico seguro y privado.

### Autoalojados
- [Docker mail server](https://github.com/docker-mailserver/docker-mailserver) - Servidor de correo sencillo pero integral (SMTP, IMAP, LDAP, antispam, antivirus, etc.) que utiliza Docker.
- [Mailcow: dockerized](https://github.com/mailcow/mailcow-dockerized) - Suite de servidor de correo con su característico «muu».
- [Mail-in-a-box](https://github.com/mail-in-a-box/mailinabox) - Permite recuperar el control del correo electrónico mediante la definición de un servidor SMTP y demás servicios fácil de implementar con un solo clic: un servidor de correo en una caja.
- [Mox](https://github.com/mjl-/mox) - Servidor de correo seguro, moderno, de código abierto y con todas las funciones, para correo autoalojado de bajo mantenimiento.
- [Stalwart](https://stalw.art/) - Servidor de correo integral escrito en Rust que incluye SMTP, IMAP y JMAP y cuenta con dos auditorías de seguridad independientes (AGPL-3.0).

### Clientes

#### Android / iOS
- [🤖](#icons) [FairEmail](https://github.com/M66B/FairEmail) - Aplicación de correo electrónico para Android completa, de código abierto y respetuosa con la privacidad.
- [🤖](#icons) [K9](https://k9mail.app/) - Aplicación de correo electrónico de código abierto para Android.

#### Escritorio
- [Thunderbird](https://www.thunderbird.net) - Cliente de correo electrónico gratuito, personalizable y de código abierto.

### Servicios de alias de correo (reenvío anónimo)

Con los alias de correo electrónico, por fin puedes crear una identidad distinta para cada sitio web. Protégete contra el correo no deseado, el phishing y las filtraciones de datos. Puedes autoalojar cualquiera de las opciones siguientes o utilizar la plataforma que ofrecen como servicio.

- [SimpleLogin](https://github.com/simple-login/app) - Servicio de alias de correo electrónico de código abierto y autoalojable, ahora propiedad de Proton (AGPL-3.0).
- [AnonAddy](https://github.com/anonaddy/anonaddy) - Servicio de alias y reenvío de correo electrónico de código abierto y autoalojable, ahora llamado addy.io (AGPL-3.0).

[Back to top 🔝](#contents)

## Mapas y navegación
⛔ **Evita**
- Google Maps
- Apple Maps
- Yandex Maps
- Bing Maps
- Waze
- Sygic
- HERE WeGo
- Petal Maps

✅ **En su lugar, utiliza**
- [Open Street Map (OSM)](https://www.openstreetmap.org/) - OpenStreetMap es obra de una comunidad de cartógrafos que contribuye y mantiene datos de carreteras, senderos, cafeterías, estaciones de tren y mucho más en todo el mundo.
  - [OSMAnd](https://osmand.net/) - Aplicación de navegación para Android/iOS basada en OSM. Incluye todas las funciones que puedas esperar.
- [Organic Maps](https://organicmaps.app/) - Excelentes mapas sin conexión para excursionistas y ciclistas.
- [CoMaps](https://www.comaps.app/) - Aplicación de mapas gratuita y de código abierto basada en OSM y dirigida por la comunidad.

[Back to top 🔝](#contents)

## Plataformas de streaming multimedia
⛔ **Evita**
- **Amazon Prime** - [Política de privacidad deficiente](https://tosdr.org/en/service/2444). Sus aplicaciones incluyen [rastreadores de Google](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/) y exigen demasiados permisos para una aplicación de streaming.
- **Netflix** - [Política de privacidad deficiente](https://tosdr.org/en/service/185). Sus aplicaciones incluyen [rastreadores de Google](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/) y exigen demasiados permisos para una aplicación de streaming.
- **Disney Plus** - [Política de privacidad muy deficiente](https://tosdr.org/en/service/2745). Sus aplicaciones incluyen [varios rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/) y exigen demasiados permisos para una aplicación de streaming.
- **Plex** - [Política de privacidad dudosa](https://tosdr.org/en/service/1567). Sus aplicaciones incluyen [muchos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.plexapp.android/latest/) y exigen demasiados permisos para una aplicación de streaming.
- **Spotify** - [Política de privacidad muy deficiente](https://tosdr.org/en/service/225). Sus aplicaciones incluyen [muchos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/) y exigen demasiados permisos para una aplicación de streaming.
- **Deezer** - [Política de privacidad deficiente](https://tosdr.org/en/service/2516). Sus aplicaciones incluyen [muchos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/) y exigen demasiados permisos para una aplicación de streaming.
- **SoundCloud** - [Política de privacidad dudosa](https://tosdr.org/en/service/276). Sus aplicaciones incluyen [muchos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.soundcloud.android/latest/) y exigen demasiados permisos para una aplicación de streaming.

✅  **En su lugar, utiliza**
#### Vídeo y audio
- [Jellyfin](https://jellyfin.org/) - Solución multimedia creada por voluntarios que te permite controlar tus archivos. Transmite a cualquier dispositivo desde tu propio servidor, sin ataduras.
- [Dim](https://github.com/Dusk-Labs/dim) - Gestor multimedia autoalojado que organiza y mejora la presentación de tus colecciones con una configuración mínima, para que puedas acceder a ellas y reproducirlas en cualquier momento y lugar.
- [Stremio](https://www.stremio.com/) - Centro multimedia moderno que ofrece una solución integral para el entretenimiento en vídeo.

#### Audio
- [Funkwhale](https://funkwhale.audio/) - Plataforma social para disfrutar y compartir música (alternativa a SoundCloud).
- [Subsonic](https://www.subsonic.org/pages/index.jsp) - Tu plataforma personal e integral para escuchar música en streaming.
- [Ampache](https://ampache.org/) - Aplicación web de streaming de audio y vídeo y gestor de archivos.
- [Koel](https://koel.dev/) - Servidor personal de streaming de música que funciona.
- [Nuclear](https://nuclearplayer.com/) - Reproductor de música moderno centrado en el streaming desde fuentes gratuitas.
- [Navidrome](https://navidrome.org/) - Plataforma personal de streaming de música ligera, rápida y autónoma.
- [🤖](#icons) [mucke](https://github.com/moritz-weber/mucke) - Reproductor de archivos de música locales con opciones de reproducción personalizadas y únicas.

**Clientes alternativos de Spotify**
 > Aunque estos clientes reducen el seguimiento, NO protegen en absoluto tu privacidad, ya que seguirás reproduciendo desde los servidores de Spotify con tu propia cuenta **premium (de pago e identificada)**.

\* Requiere Premium.

- [Spot*](https://github.com/xou816/spot) - Cliente nativo de Spotify desarrollado con GTK y Rust.
- [psst*](https://github.com/jpochyla/psst) - Cliente de Spotify rápido y multiplataforma, con interfaz gráfica nativa.
- [ncspot*](https://github.com/hrkfdn/ncspot) - Cliente multiplataforma de Spotify para ncurses, escrito en Rust e inspirado en ncmpc y herramientas similares.

No requiere Premium:

- [Spotube](https://github.com/team-spotube/spotube) - Cliente ligero, gratuito y multiplataforma de Spotify.

**Clientes alternativos de YouTube Music**
- [Beatbump](https://github.com/snuffyDev/Beatbump) [💀](#icons) - Interfaz alternativa para YouTube Music, sin anuncios y con un contenedor de API personalizado.
- [SimpMusic](https://github.com/Maxrave-Dev/SimpMusic) - Cliente de YouTube Music para Android, de código abierto y en mantenimiento activo (sucesor de ViMusic y RiMusic, cuyo desarrollo se interrumpió).

**Clientes alternativos de Deezer**
- [dzr](https://github.com/yne/dzr) - Reproductor de Deezer para la línea de comandos en Linux, BSD y Android con Termux.

#### Pódcast

⛔ **Evita**

- **Spotify** - [Política de privacidad muy deficiente](https://tosdr.org/en/service/225). Recopila montones de datos sobre ti: estado de ánimo, tiempo libre, gustos, preferencias, amistades... Además, sus aplicaciones tienen [demasiados rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/).
- **iVoox** - Sus aplicaciones están [repletas de rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.ivoox.app/latest/). Su sitio web también los incluye.
- **Audible** - [Política de privacidad muy deficiente](https://tosdr.org/en/service/190). Su aplicación tiene [muchos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.audible.application/latest/).
- **Deezer** - [Política de privacidad deficiente](https://tosdr.org/en/service/2516). Sus aplicaciones tienen [muchos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/) y exigen demasiados permisos para una aplicación de streaming.

✅  **En su lugar, utiliza**

- [Antennapod](https://antennapod.org) - Reproductor de pódcast completamente abierto. Suscríbete a cualquier fuente RSS.
- [Castopod](https://castopod.org) - Aloja tus pódcast fácilmente, mantén el control de lo que creas y habla con tu audiencia sin intermediarios. Tu pódcast y tu audiencia te pertenecen exclusivamente.
- [Funkwhale](https://funkwhale.audio/) - Plataforma social para disfrutar y compartir audio.

[Back to top 🔝](#contents)

## Notas y tareas
⛔ **Evita**

Estos proveedores ofrecen aplicaciones y servicios repletos de rastreadores de datos. Además, la mayoría guarda tus notas en sus servidores y no ofrece ningún tipo de cifrado.

- Google Keep
    - [Keep To Markdown](https://github.com/erikelisath/keep-to-markdown) - Convierte tus notas de Google Keep a un formato estándar Markdown con encabezado YAML.
- Evernote
- Squid
- Notion
- OneNote

✅  **En su lugar, utiliza**

- [Anytype](https://www.anytype.io/) - Alternativa de código abierto a Notion. Cifrado de extremo a extremo, sincronización en la nube y en la red local, y posibilidad de autoalojamiento.
- [AppFlowy](https://appflowy.com/) - Alternativa de código abierto a Notion. Tú controlas tus datos y las personalizaciones.
- [HedgeDoc](https://hedgedoc.org/) - Antes CodiMD (comunidad). Excelente plataforma para escribir y compartir Markdown.
- [Joplin](https://github.com/laurent22/joplin) - Aplicación para tomar notas y gestionar tareas, con funciones de sincronización y cifrado.
- [Logseq](https://logseq.com/) - Alternativa a WorkFlowy que prioriza la privacidad.
- [Memos](https://github.com/usememos/memos) - Centro de notas autoalojado y de código abierto, con funciones de gestión del conocimiento y socialización.
- [Nextcloud Notes](https://github.com/nextcloud/notes/) - Aplicación de Nextcloud para tomar notas sin distracciones.
	- [Aplicación Nextcloud Notes](https://github.com/nextcloud/notes-android) - Cliente de Android para Nextcloud Notes.
- [Notally](https://github.com/OmGodse/Notally) - Bonita aplicación de notas (solo local, sin sincronización).
- [Notesnook](https://notesnook.com/) - Aplicación de notas privada, de código abierto y con conocimiento cero.
- [Obsidian](https://obsidian.md) - Aplicación privada y flexible para tomar notas. Es de código cerrado, pero no tiene rastreadores (ni en el sitio web ni en las aplicaciones) y ofrece sincronización cifrada de extremo a extremo.
- [Quillpad](https://quillpad.github.io/) - Toma bonitas notas en Markdown y organízate con listas de tareas. Bifurcación de Quillnote.
- [SiYuan](https://github.com/siyuan-note/siyuan) - Sistema de gestión del conocimiento personal que prioriza el almacenamiento local.
- [Standard Notes](https://standardnotes.com/) - Aplicación de notas gratuita, de código abierto y completamente cifrada.
- [TinyList](https://tinylist.app/) - Crea y comparte notas y listas de comprobación sin renunciar a tu privacidad.
- [Trilium Notes](https://github.com/TriliumNext/Trilium) - Crea tu base de conocimiento personal con Trilium Notes.
- [Vikunja](https://vikunja.io) - Aplicación de código abierto para organizar tu vida con listas de tareas.
- [YankNote](https://github.com/purocean/yn) - Aplicación de notas Markdown modificable para programadores.
- [🤖](#icons) [Tasks.org](https://tasks.org) - Gestor de tareas y listas de código abierto para Android, con sincronización CalDAV y uso sin conexión. Con licencia GPL-3.0.

[Back to top 🔝](#contents)

## Reconocimiento de música

⛔ **Evita**

- Shazam - Está sujeto a la [política de privacidad de Apple](https://tosdr.org/en/service/158). La aplicación para Android [incluye algunos rastreadores de Google](https://reports.exodus-privacy.eu.org/en/reports/com.shazam.android/latest/).
- SoundHound - Tiene demasiados [rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.melodis.midomiMusicIdentifier.freemium/latest/) para una aplicación de reconocimiento de música.
- Musicxmatch - La aplicación [incluye rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.musixmatch.android.lyrify/latest/) y requiere una cantidad peligrosa de permisos.

✅  **En su lugar, utiliza**

**Clientes alternativos a Shazam**

- [SongRec](https://github.com/marin-m/SongRec) - Cliente de Shazam de código abierto para Linux, escrito en Rust.
- [SongID Telegram Bot](https://github.com/smcclennon/SongID) - Bot de Telegram que identifica la música de los archivos de audio o vídeo que le envíes.

[Back to top 🔝](#contents)

## Ofimática

⛔ **Evita**
- Microsoft Office [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Google Docs [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **En su lugar, utiliza**
- [LibreOffice](https://www.libreoffice.org/) - Suite ofimática gratuita, de código abierto y sin conexión.
- [OnlyOffice](https://www.onlyoffice.com/) - Suite of ofimática en línea, gratuita y de código abierto, para colaborar.
- [Cryptpad](https://cryptpad.fr/) - Suite colaborativa cifrada y de código abierto.
- [Etherpad](https://etherpad.org/) - Editor en línea de código abierto y altamente personalizable, con edición colaborativa realmente en tiempo real.
- [Fileverse](https://fileverse.io) - Fileverse desarrolla alternativas más saludables basadas en la soberanía propia, la privacidad desde el diseño y el cumplimiento de estándares.
	- [Ddocs](https://ddocs.new): alternativa a Google Docs que mejora la privacidad, descentralizada, en cadena y cifrada de extremo a extremo.
 	- [dSheets](https://sheets.fileverse.io): alternativa descentralizada a Excel y Google Sheets.
- [Grist](https://www.getgrist.com) - Híbrido de hoja de cálculo y base de datos autoalojable para organizar datos, como alternativa de código abierto a Airtable. Con licencia Apache-2.0.

[Back to top 🔝](#contents)

## Proveedores de telefonía en línea

Muchos sitios web exigen verificar un número de teléfono. Estos servicios permiten recibir (y a veces enviar) mensajes SMS de forma respetuosa con la privacidad.

### Sin verificación por correo electrónico y acepta Monero
- [Crypton](https://crypton.sh/) - Tarjeta SIM segura para SMS en la nube (con sede en Islandia).
- [Virtualsim](https://virtualsim.net/) - Ofrece el alquiler de tarjetas SIM físicas para verificaciones por SMS (con sede en Ucrania).
- [MoneroSMS](https://monerosms.com/) - Números virtuales para mensajería y verificaciones por SMS/MMS. CLI y aplicación web (con sede en Estados Unidos).

### Requiere verificación por correo electrónico y acepta Monero
- [Onlinesim](https://onlinesim.io/) - Recibe SMS en línea en un número de teléfono virtual (con sede en Rusia).

### Requiere verificación por correo electrónico y acepta criptomonedas
- [SmsPVA](https://smspva.com/) - Servicio que proporciona un número de teléfono al que puedes enviar cualquier SMS y recibir su contenido (con sede en Francia).

## Sistemas operativos
### Android
⛔ Intenta evitar Google Android y cualquier versión de Android modificada y personalizada por fabricantes como Xiaomi, Huawei, Samsung, etc. Android es un proyecto de código abierto —[AOSP, Android Open Source Project](https://source.android.com/)— y existen muchas versiones que respetan la privacidad y los datos de los usuarios y no los comparten con servidores privados de fabricantes o proveedores de servicios.

✅ **En su lugar, utiliza**

> [!NOTE]
> **Compatibilidad de aplicaciones de Android**:
> Aunque todos estos sistemas operativos se basan en Android, la compatibilidad de las aplicaciones puede no ser perfecta porque no incluyen GMS (Google Mobile Services), que algunas aplicaciones necesitan. En [Plexus](https://plexus.techlore.tech/) puedes consultar el funcionamiento de las aplicaciones con microG (alternativa gratuita y de código abierto a GMS) o sin GMS; la comunidad puede informar de cómo funcionan las aplicaciones de Android en esos entornos.

> [!NOTE]
> **Seguridad de Android**: Las ROM personalizadas pueden mejorar tu privacidad, pero también reducir la seguridad de Android. Utiliza siempre ROM que admitan arranque verificado y cifrado y que **NO** tengan root activado de forma predeterminada. Si es posible, no utilices compilaciones userdebug. Si tu modelo de amenazas requiere seguridad, compra un Google Pixel e instala GrapheneOS. [Más información en PrivacyGuides](https://www.privacyguides.org/android/overview).

#### Basados en Android

**GrapheneOS** se centra especialmente en la seguridad y la privacidad. Implementa tecnologías para mitigar numerosas vulnerabilidades y dificulta considerablemente su explotación. Mejora la seguridad tanto del sistema operativo como de las aplicaciones que ejecuta.

- [GrapheneOS](https://grapheneos.org/) - Sistema operativo móvil de código abierto centrado en la privacidad y la seguridad, compatible con aplicaciones de Android. Solo es compatible con teléfonos **Google Pixel**.

Estas ROM también ofrecen buena privacidad o compatibilidad ampliada con una mayor variedad de dispositivos. Ten en cuenta que pueden reducir la seguridad y aumentar la superficie de ataque del sistema operativo.

- [CalyxOS](https://calyxos.org/) - ROM diseñada para proteger la privacidad. Ofrece mejor seguridad que LineageOS o Replicant.
- [LineageOS](https://lineageos.org/) - Sistema operativo gratuito y de código abierto para diversos dispositivos, basado en la plataforma móvil Android.
- [/e/OS](https://e.foundation/e-os) - ROM de Android sin Google de Murena, con microG y servicios en la nube opcionales. De código abierto, con licencia GPL-3.0.
- [iodéOS](https://iode.tech/iodeos) - ROM de Android sin Google con cortafuegos de red integrado que bloquea anuncios y rastreadores. De código abierto, con licencia GPL-3.0.

#### Basados en Linux
- [UBPorts](https://www.ubports.com/) - Ubuntu Touch es la versión móvil de Ubuntu, adaptada para pantallas táctiles.
- [Nura](https://nura.eco/) (antes postmarketOS) - Versión de Alpine Linux optimizada para pantallas táctiles y preconfigurada.
- [PureOS](https://www.pureos.net/) - Sistema operativo desarrollado por Purism para Librem 5.
- [Plasma Mobile](https://www.plasma-mobile.org/) - Plasma en tu bolsillo: ecosistema móvil seguro, de código abierto y respetuoso con la privacidad.
- [mobian](https://mobian-project.org/) - Debian para dispositivos móviles.
### Smart TV
⛔ No utilices Android TV de Google, LG WebOS ni ningún otro sistema operativo de TV habitual e invasivo para la privacidad que venga preinstalado.

✅ **En su lugar, utiliza**

Actualmente no conozco ningún software para Smart TV que respete la privacidad. Si conoces alguno, abre una solicitud de incorporación de cambios o una incidencia.

El siguiente software no es un **sistema operativo**, sino un conjunto de aplicaciones que pueden utilizarse en casi cualquier sistema operativo. Estas aplicaciones respetan tu privacidad y ofrecen funciones similares a las de una Smart TV. Una configuración recomendada consiste en conectar al televisor una [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) con GNU/Linux, instalar herramientas como [KDE Connect](https://kdeconnect.kde.org/) para controlar los medios desde el teléfono y, después, añadir las aplicaciones indicadas a continuación:

- [Kodi](https://kodi.tv/) - Centro de entretenimiento que reúne todos tus medios digitales en un paquete atractivo y fácil de usar. Es 100 % gratuito y de código abierto, muy personalizable y funciona en una amplia variedad de dispositivos.
- [OSMC](https://osmc.tv/) - Centro multimedia gratuito y de código abierto, creado por y para la comunidad.

También puedes consultar la sección [Plataformas de streaming multimedia](https://github.com/pluja/awesome-privacy#media-streaming-platforms).

### PC / macOS
⛔ **Evita**
- MS Windows - Es propiedad de Microsoft y se sabe que recopila muchos datos de los usuarios y los engaña para que creen una cuenta de Microsoft. Si aun así quieres utilizar Windows 10 u 11, puedes usar [Win11Debloat](https://github.com/Raphire/Win11Debloat) o [esta otra herramienta](https://www.w10privacy.de/english-home/) para consultar y desactivar los numerosos ajustes de Windows que invaden la privacidad.
- MacOS.

✅ **En su lugar, utiliza**
#### [GNU/Linux](https://www.linux.com/what-is-linux/) 

GNU/Linux es una familia de sistemas operativos libres (en el sentido de libertad y de gratuidad) y de código abierto, desarrollados en su mayoría por la comunidad. Si no sabes por dónde empezar, estas son buenas opciones para principiantes:

- [Fedora](https://fedoraproject.org/) - Distribución Linux comunitaria patrocinada por Red Hat, que publica software de código abierto reciente cada seis meses.
- [Mint (Cinnamon)](https://linuxmint.com/edition.php?id=305) - Distribución fácil de usar para principiantes.
- [Qubes OS](https://qubes-os.org/) - Sistema operativo orientado a la seguridad que aísla distintos espacios de trabajo en máquinas virtuales separadas para mejorar la privacidad y la seguridad.
- [Tails](https://tails.net/) - Sistema operativo portátil que protege frente a la vigilancia y la censura. Siempre se inicia en el mismo estado limpio y todo lo que haces desaparece automáticamente al apagar Tails.
- [Whonix](https://www.whonix.org/) - Sistema operativo que funciona dentro de máquinas virtuales y obliga a que todas las conexiones pasen por Tor.
- [Kicksecure](https://www.kicksecure.com/) - Distribución reforzada basada en Debian, desarrollada por el equipo de Whonix y segura de forma predeterminada.
- [secureblue](https://secureblue.dev/) - Imagen reforzada basada en Fedora Atomic Desktops, con opciones predeterminadas centradas en la seguridad y un navegador reforzado.

> [!TIP]
> Si quieres probarlo sin instalarlo en el ordenador, puedes utilizar una [memoria USB Live](https://www.fosslinux.com/274/how-to-create-linux-mint-live-usb-drive-on-windows.htm). También puedes explorar [Ventoy](https://www.ventoy.net) para descargar y probar fácilmente distribuciones Linux desde una memoria USB.

> [!TIP]
> Si quieres instalar Linux y conservar tu sistema operativo actual, puedes configurar un [arranque dual](https://averagelinuxuser.com/dualboot-linux-windows/).

> [!NOTE]
> No todas las distribuciones Linux son libres (en el sentido de libertad), gratuitas o respetuosas con la privacidad de los usuarios. Hay muchísimas distribuciones GNU/Linux: ¡investiga un poco antes de decidirte por una!

#### Otros sistemas operativos:

- [AtlasOS](https://atlasos.net/) - Modificación de código abierto de Windows 10, diseñada para optimizar el rendimiento y la latencia. Atlas elimina todo tipo de seguimiento integrado en Windows e implementa numerosas directivas de grupo para minimizar la recopilación de datos.
- [ReactOS](https://reactos.org/) - Sistema operativo gratuito y de código abierto, con aspecto similar a Windows y capaz de ejecutar programas y controladores de Windows.
- [RedoxOS](https://www.redox-os.org/) - Proyecto en desarrollo que pretende ofrecer un sistema operativo tipo Unix escrito en Rust.

[Back to top 🔝](#contents)

## Gestores de contraseñas
⛔ **Evita**
- LastPass
- Dashlane

✅  **En su lugar, utiliza**
- [AliasVault](https://www.aliasvault.com) - Gestor de contraseñas y alias de código abierto, con cifrado de extremo a extremo y servidor de alias de correo integrado.
- [Bitwarden](https://bitwarden.com) - Gestor de contraseñas en la nube y de código abierto.
  - [vaultwarden](https://github.com/dani-garcia/vaultwarden/) - Servidor autoalojado no oficial compatible con Bitwarden, antes conocido como bitwarden_rs.
- [CarryPass](https://carrypass.net) - Gestor de contraseñas PWA con conocimiento cero, generación determinista, bóvedas cifradas y colaboración en equipo. ([Código fuente](https://github.com/racz-zoltan/racz-zoltan.github.io)) `MIT`
- [KeepassXC](https://keepassxc.org/) - Guarda tus contraseñas de forma segura con cifrado estándar del sector. No sincroniza: solo almacena.
    - [KeepassDX](https://www.keepassdx.com/) para Android.
    - [Strongbox](https://strongboxsafe.com/) para iOS.
    - [KeeWeb](https://keeweb.info/) para la web y otras plataformas.
- [LessPass](https://www.lesspass.com) - Gestor de contraseñas sin estado. Recuerda una contraseña maestra para acceder a tus contraseñas. No necesita sincronización.
- [Padloc](https://padloc.app/) - El último gestor de contraseñas que querrás utilizar.
- [Passbolt](https://www.passbolt.com) - Gestor de contraseñas de código abierto diseñado para la colaboración en equipo.
- [Passky](https://passky.org) - Gestor de contraseñas sencillo, moderno, ligero, seguro y de código abierto.
- [Proton Pass](https://proton.me/pass) - Gestor de contraseñas cifrado y de código abierto de Proton.

## Pastebin y uso compartido de secretos

Estas herramientas son útiles para compartir secretos, fragmentos de código o cualquier otro tipo de texto de forma privada.

- [crypt.fyi](https://www.crypt.fyi) - Plataforma efímera con conocimiento cero para compartir datos sensibles, con clientes web, CLI y extensión de Chrome.
- [NoPaste](https://github.com/bokub/nopaste) - Alternativa a Pastebin de código abierto que funciona sin base de datos ni código de backend. Los datos se comprimen y almacenan íntegramente en el enlace que compartes, y en ningún otro lugar.
- [PrivateBin](https://github.com/PrivateBin/PrivateBin) - Pastebin en línea minimalista y de código abierto cuyo servidor no puede acceder a los datos pegados. Los datos se cifran y descifran en el navegador con AES de 256 bits.
- [Yopass](https://github.com/jhaals/yopass) - Comparte secretos, contraseñas y archivos de forma segura.
- [scrt.link](https://scrt.link) - Comparte un secreto. Cifrado de extremo a extremo, efímero y de código abierto.
- [dele-to](https://dele.to) - Aplicación moderna de código abierto para compartir credenciales y secretos de forma segura, con cifrado AES-256 en el cliente, arquitectura de conocimiento cero y autodestrucción automática.

[Back to top 🔝](#contents)

## Pagos
⛔ **Evita**
- Visa / Mastercard
- PayPal [![](https://shields.tosdr.org/en_230.svg)](https://tosdr.org/en/service/230)
- WeChat
- _insertBigTechHere_Pay
- Pagos bancarios (transferencia, SEPA, etc.)

✅  **En su lugar, utiliza**
- [Monero](https://www.getmonero.org/) - Monero es dinero en efectivo para un mundo conectado. Es rápido, privado, imposible de rastrear y seguro.
- Efectivo - Realiza pagos entre personas con billetes y monedas.

> [!WARNING]
> [Bitcoin](https://bitcoin.org) no es anónimo ni privado. Es rastreable, transparente y seudónimo. Para una introducción básica, [mira el vídeo de aantonop](https://yewtu.be/watch?v=JN1Bowgcle8). Los usuarios más avanzados pueden ver esta [serie sobre la privacidad de Bitcoin](https://yewtu.be/watch?v=QEnL5k0R08w).

### Monederos

- [Sparrow Wallet](https://www.sparrowwallet.com/) - Monedero de escritorio multiplataforma y de código abierto que ofrece numerosas herramientas para gastar preservando la privacidad.
- [Wasabi Wallet](https://www.wasabiwallet.io/) - Monedero Bitcoin de escritorio, de código abierto, sin custodia y centrado en la privacidad.
- [Cake Wallet](https://cakewallet.com) - Monedero de código abierto y sin custodia para Monero, Bitcoin y otras monedas, disponible en móviles y ordenadores. Con licencia MIT.
- [Feather Wallet](https://featherwallet.org/) - Monedero ligero de escritorio para Monero, de código abierto y con Tor integrado y control de monedas. Con licencia BSD-3.

### Procesadores de pagos

- [BTCPay Server](https://btcpayserver.org) - Procesador de pagos en criptomonedas autoalojado y sin custodia para comerciantes, como alternativa a PayPal o BitPay. Con licencia MIT.

### Dónde utilizar Monero y Bitcoin

- [kycnot.me](https://kycnot.me/) - Directorio de plataformas de intercambio sin KYC, procesadores de pagos y otros servicios de privacidad.

[Back to top 🔝](#contents)

## Finanzas personales

### Gestión financiera completa

- [Actual](https://actualbudget.org) - Aplicación rapidísima y centrada en la privacidad para gestionar tus finanzas.
- [Firefly III](https://www.firefly-iii.org/) - Gestor de finanzas personales gratuito y de código abierto.
- [GnuCash](https://gnucash.org/) - Software de contabilidad financiera personal y para pequeñas empresas, distribuido gratuitamente con licencia GNU GPL y disponible para GNU/Linux, BSD, Solaris, Mac OS X y Microsoft Windows.
- [Sure](https://github.com/we-promise/sure) - Sistema operativo seguro y de código abierto para tus finanzas personales. Bifurcación mantenida por la comunidad del proyecto archivado [Maybe](https://github.com/maybe-finance/maybe).
- [ezBookkeeping](https://ezbookkeeping.mayswind.net/) - Aplicación ligera y autoalojada de finanzas personales, con una interfaz fácil de usar y potentes funciones de contabilidad.

### Gestión de presupuestos
- [ProExpense](https://github.com/arduia/ProExpense/) - Sencilla aplicación gratuita de finanzas para registrar de forma segura los gastos diarios.
- [My Expenses](https://github.com/mtotschnig/MyExpenses) - Aplicación Android completa para registrar gastos, con licencia GPL.
- [Wallos](https://wallosapp.com) - Rastreador autoalojado de suscripciones y gastos periódicos, con recordatorios y estadísticas de gastos. De código abierto, con licencia GPL-3.0.

### Gastos compartidos

⛔ **Evita**

- Tricount - La aplicación ocupa muchísimo espacio (unos 200 MB) e incluye numerosos rastreadores de Facebook, Google y Huawei.
- Splitwise - La aplicación incluye rastreadores de Google y Amazon.

✅  **En su lugar, utiliza**

- [Spliit](https://github.com/spliit-app/spliit#readme) - Comparte gastos con amigos y familiares. Sin anuncios ni cuenta. De código abierto. Gratis para siempre.
- [SplitPro](https://github.com/oss-apps/split-pro#readme) - [Sitio web](https://splitpro.app) - Comparte gastos con tus amigos gratis. Alternativa de código abierto a SplitWise.
- [IHateMoney](https://ihatemoney.org/) - Gestiona fácilmente tus gastos compartidos. No permite dividirlos de forma desigual.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Cliente Android para los servidores Nextcloud Cospend e IHateMoney.
- [Nextcloud Cospend](https://apps.nextcloud.com/apps/cospend) - Gestor de presupuestos compartidos o grupales inspirado en el excelente IHateMoney.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Cliente Android para los servidores Nextcloud Cospend e IHateMoney.

### Otros

- [Debitum](https://github.com/Marmo/debitum) [💀](#icons) - Permite llevar un registro de todo tipo de deudas, ya sea dinero o artículos prestados.

### Seguimiento de carteras

- [Ghostfolio](https://github.com/ghostfolio/ghostfolio#readme) - Software de código abierto para gestionar el patrimonio, desarrollado con tecnologías web.
- [PortfolioPerformance](https://www.portfolio-performance.info/en/) - Herramienta de código abierto para calcular el rendimiento global de una cartera de inversión.
- [Rotki](https://github.com/rotki/rotki) - Excelente aplicación de seguimiento y análisis de carteras, contabilidad e informes fiscales que protege tu privacidad.

## Edición y gestión de fotos
⛔ **Evita**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- VSCO

✅  **En su lugar, utiliza**
#### Web
- [miniPaint](https://github.com/viliusle/miniPaint) - Alternativa de código abierto a Photopea. Funciona directamente en el navegador. No se envía nada a ningún servidor: todo permanece en tu navegador.

#### Desktop
- [GIMP](https://www.gimp.org/) - Editor de imágenes gratuito y de código abierto.
- [Krita](https://github.com/KDE/krita) - Aplicación gratuita y de código abierto para pintura digital.
- [Czkawka](https://github.com/qarmin/czkawka) - Aplicación multifunción para encontrar duplicados, imágenes similares y mucho más.
- [DigiKam](https://www.digikam.org/) - Excelente herramienta profesional de gestión fotográfica con la potencia del código abierto.
- [Inkscape](https://inkscape.org/) - Editor de gráficos vectoriales gratuito y de código abierto para crear imágenes vectoriales.
- [ImageGlass](https://imageglass.org/) - Aplicación ligera cuyo propósito es ayudarte a ver imágenes en un entorno de trabajo limpio e intuitivo.
- [darktable](https://www.darktable.org/) - Aplicación de código abierto para el flujo de trabajo fotográfico y el revelado de archivos RAW.
- [RapidRAW](https://github.com/CyberTimon/RapidRAW) - Editor de imágenes RAW atractivo, no destructivo y acelerado por GPU, diseñado para ofrecer un gran rendimiento. Alternativa multiplataforma y ligera (menos de 20 MB) a Adobe Lightroom. Con licencia AGPL-3.0.
- [RawTherapee](https://rawtherapee.com) - Revelador de fotos RAW de código abierto y sin conexión que complementa a darktable como alternativa a Lightroom. Con licencia GPL-3.0.

#### Android
- [Pocket Paint](https://github.com/Catrobat/Paintroid) - Aplicación estándar de manipulación de imágenes para Catroid.
- [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif) - Elimina los datos Exif de las imágenes antes de compartirlas.
- [ImagePipe](https://codeberg.org/Starfish/Imagepipe) - Reduce el tamaño de las imágenes y elimina las etiquetas Exif al compartirlas desde dispositivos Android.

[Back to top 🔝](#contents)

## Almacenamiento de fotos
⛔ **Evita**
- Google Photos [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
    - [Google Photos Takeout Helper](https://github.com/TheLastGimbus/GooglePhotosTakeoutHelper) [💀](#icons) - Script que organiza el desordenado archivo de Google Takeout en una gran carpeta cronológica. Usa este script para salir de Google Photos :).
- Amazon Photos

✅  **En su lugar, utiliza**

### Autoalojado
- [Immich](https://github.com/immich-app/immich) - Solución autoalojada para hacer copias de seguridad de fotos y vídeos directamente desde tu teléfono móvil.
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - Bifurcación activa de [OwnPhotos](https://github.com/hooram/ownphotos). Alternativa autoalojada a Google Photos.
- [Nextcloud](https://nextcloud.com/) - Plataforma de productividad autoalojada y de código abierto que te permite mantener el control. Incluye un complemento de [*Fotos*](https://github.com/nextcloud/photos) para organizar y visualizar tus imágenes.
- [Photoprism](https://photoprism.app) - Aplicación de servidor repleta de funciones para explorar, organizar y compartir tu colección personal de fotos. La más parecida a Google Photos.
- [Pigallery2](http://bpatrik.github.io/pigallery2/) - Sitio web de galería fotográfica autoalojado que prioriza los directorios.
- [Photoview](https://photoview.github.io/) - Galería de fotos para servidores personales autoalojados, con reconocimiento facial.
- [Photostructure](https://photostructure.com/) - Biblioteca fotográfica autoalojada que facilita y hace agradable explorar y compartir toda una vida de recuerdos.
- [Stingle Photos](https://stingle.org/) - Solución de código abierto que ofrece gran seguridad, privacidad y cifrado para hacer copias de seguridad de tus fotos.
- [Ente](https://ente.com/) - Almacenamiento cifrado de extremo a extremo para fotos y vídeos. De código abierto y [auditado](https://ente.com/blog/cryptography-audit/) de forma independiente.

### De terceros
- [Crypt.ee](https://crypt.ee/) - Espacio privado y cifrado para todas tus fotos, documentos, notas y mucho más.
- [Ente](https://ente.com/) - Almacenamiento cifrado de extremo a extremo para fotos y vídeos. De código abierto y [auditado](https://ente.com/blog/cryptography-audit/) de forma independiente.
- [Stingle Photos](https://stingle.org/) - Solución de código abierto que ofrece gran seguridad, privacidad y cifrado para hacer copias de seguridad de tus fotos.

### Local
- [DigiKam](https://www.digikam.org/) - Excelente herramienta profesional de gestión fotográfica con la potencia del código abierto.
- [Photok](https://github.com/leonlatsch/Photok) - Caja fuerte gratuita para fotos. Guarda tus imágenes cifradas en el dispositivo y las oculta de otras personas.
- [ImageGlass](https://imageglass.org/) - Aplicación ligera cuyo propósito es ayudarte a ver imágenes en un entorno de trabajo limpio e intuitivo.

[Back to top 🔝](#contents)

## Herramientas de privacidad

Esta sección está dedicada a herramientas que pueden ayudar a los usuarios a analizar el estado de la privacidad en sus dispositivos.

### Escritorio

- [Whoami Project](https://github.com/owerdogan/whoami-project) [💀](#icons) - Whoami mejora la privacidad y el anonimato en distribuciones Linux basadas en Debian y Arch.
- [BusKill](https://www.buskill.in/) - Interruptor de hombre muerto que se activa al soltarse una conexión magnética y corta la conexión USB.
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Cortafuegos interactivo para aplicaciones GNU/Linux que ayuda a detectar, supervisar y bloquear conexiones salientes no deseadas.
- [MAT2](https://github.com/jvoisin/mat2) - Elimina metadatos de imágenes, documentos, archivos de audio y otros archivos. Herramienta de línea de comandos con integración en gestores de archivos.
- [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) - Aplicación de escritorio sencilla, basada en MAT2, para ver y eliminar metadatos de archivos.
- [Mobile Verification Toolkit](https://github.com/mvt-project/mvt) - Herramienta forense de Amnistía Internacional que busca rastros de programas espía como Pegasus en dispositivos Android e iOS.

### Android

- [εxodus](https://reports.exodus-privacy.eu.org/en/) - Plataforma de auditoría de privacidad para aplicaciones de Android. Descubre cuántos rastreadores tienen tus aplicaciones.
	- [ClassyShark3xodus](https://f-droid.org/en/packages/com.oF2pks.classyshark3xodus/) - Comprueba si los APK incluyen rastreadores conocidos (según Exodus), además de otras advertencias y especificaciones.
- [Plexus](https://plexus.techlore.tech/) - Descubre si una aplicación funcionará en un dispositivo Android sin Google y deja de preocuparte por la compatibilidad.
- [Netguard](https://netguard.me/) - Forma sencilla de bloquear el acceso a Internet aplicación por aplicación.
- [RethinkDNS + Firewall](https://github.com/celzero/rethink-app) - Cortafuegos y modificador de DNS de código abierto que no requiere root y cuenta con funciones anticensura para Android 6 o posterior.
- [🤖](#icons) [Orbot](https://orbot.app/) - Enruta el tráfico de las aplicaciones por la red Tor, en todo el sistema como VPN o aplicación por aplicación. Desarrollado por Guardian Project.

[Back to top 🔝](#contents)

## Acceso y control remotos
⛔ **Evita**
- TeamViewer
- AnyDesk

✅  **En su lugar, utiliza**
- [RustDesk](https://rustdesk.com/) - Software cliente de escritorio remoto de código abierto, escrito en Rust. Funciona desde el primer momento y te ofrece el control total de tus datos sin preocupaciones de seguridad.
- [screego](https://screego.net/) - Compartir pantalla para desarrolladores.
- [Remmina](https://remmina.org/) - Acceso remoto al escritorio y uso compartido de archivos (RDP).
- [UltraVNC](https://www.uvnc.com/) - Potente software gratuito y fácil de usar para acceder a ordenadores de forma remota, que muestra en tu pantalla la de otro ordenador a través de Internet o de una red.
- [MeshCentral](https://meshcentral.com/) - Sitio web de código abierto, multiplataforma y autoalojado, repleto de funciones para la gestión remota de dispositivos.
- [Apache Guacamole](https://guacamole.apache.org) - Pasarela de escritorio remoto autoalojada y sin cliente, que proporciona acceso RDP, VNC y SSH desde el navegador. Con licencia Apache-2.0.
- [Sunshine + Moonlight](https://app.lizardbyte.dev/Sunshine) - Servidor autoalojado para transmitir el escritorio y juegos (Sunshine), con sus clientes correspondientes (Moonlight). De código abierto, con licencia GPL-3.0.

[Back to top 🔝](#contents)

## Routers
⛔ **Evita**
- Routers predeterminados de los proveedores de Internet y firmware de fabricantes: son de código cerrado, reciben actualizaciones de seguridad lentas o inexistentes y, a menudo, se comunican con el fabricante o el proveedor de Internet.

✅  **En su lugar, utiliza**
- [OpenWrt](https://openwrt.org/) - Firmware Linux de código abierto que sustituye al software original de cientos de routers de consumo y recibe actualizaciones de seguridad durante años.
- [OPNsense](https://opnsense.org/) - Plataforma de cortafuegos y enrutamiento de código abierto basada en FreeBSD, para hardware dedicado o un PC en desuso.
- [IPFire](https://www.ipfire.org/) - Distribución Linux de cortafuegos reforzada y de código abierto, con prevención de intrusiones e interfaz web.

[Back to top 🔝](#contents)

## Lectores RSS
⛔ **Evita**
- Feedly
- Inoreader
- Google News

Estos servicios crean un perfil a partir de todo lo que lees. Un lector local o autoalojado obtiene las fuentes directamente, así que nadie ve tu lista de lectura.

✅  **En su lugar, utiliza**
- [FreshRSS](https://freshrss.org/) - Agregador de fuentes autoalojado con interfaz web, compatibilidad con varios usuarios y API para aplicaciones móviles.
- [Miniflux](https://miniflux.app/) - Lector de fuentes minimalista, autoalojado, sin rastreo y escrito en Go.
- [NetNewsWire](https://netnewswire.com/) - Lector RSS de código abierto para macOS e iOS que funciona localmente o se sincroniza con servicios autoalojados.
- [Fluent Reader](https://github.com/yang991178/fluent-reader) - Lector RSS de escritorio de código abierto para Windows, macOS y Linux.
- [NewsFlash](https://gitlab.com/news-flash/news_flash_gtk) - Lector RSS de código abierto para Linux que funciona localmente o con servicios autoalojados como Miniflux y FreshRSS.
- [Newsboat](https://newsboat.org/) - Lector RSS para el terminal.
- [🤖](#icons) [Feeder](https://github.com/spacecowboy/Feeder) - Lector RSS de código abierto para Android que obtiene las fuentes directamente en el dispositivo y no requiere cuenta.
- [🤖](#icons) [Read You](https://github.com/ReadYouApp/ReadYou) - Lector RSS de código abierto para Android con Material You, local o sincronizado con servicios autoalojados.
- [🤖](#icons) [Capy Reader](https://github.com/jocmp/capyreader) - Lector RSS de código abierto para Android, local o sincronizado con Miniflux y FreshRSS.

[Back to top 🔝](#contents)

## Motores de búsqueda

⛔ **Evita**
- Google [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Yahoo! [![](https://shields.tosdr.org/en_309.svg)](https://tosdr.org/en/service/309)
- Bing
- Yandex [![](https://shields.tosdr.org/en_860.svg)](https://tosdr.org/en/service/860)
- Ecosia [![](https://shields.tosdr.org/en_591.svg)](https://tosdr.org/en/service/591)

✅  **En su lugar, utiliza**
- [librengine](https://github.com/liameno/librengine) [💀](#icons) - Motor de búsqueda web privado.
- [SearxNG](https://github.com/searxng/searxng) - Metabuscador gratuito de Internet que reúne resultados de distintos servicios de búsqueda y bases de datos.
- [DuckDuckGo](https://duckduckgo.com) - Motor de búsqueda que respeta la privacidad.
- [Brave Search](https://search.brave.com) - Motor de búsqueda que respeta la privacidad y cuenta con [su propio índice independiente](https://brave.com/search-independence/).
- [Qwant](https://www.qwant.com/) - Motor de búsqueda sin seguimiento, desarrollado y alojado en Francia, en la UE.
- [Marginalia](https://marginalia-search.com/) - Motor de búsqueda independiente con rastreador e índice propios, que favorece las páginas con mucho texto y sin fines comerciales. Autoalojable, con licencia AGPL-3.0.
- [YaCy](https://yacy.net/) - Motor de búsqueda descentralizado entre pares, donde cada usuario ejecuta un nodo y comparte el índice. De código abierto, con licencia GPL-2.0.

[Back to top 🔝](#contents)

## Redes y plataformas sociales

> [!NOTE]
> **El fediverso**
>
> El fediverso es un «uni**verso**» de redes sociales «**federadas**» que pueden comunicarse entre sí mediante un protocolo estándar y abierto. Esto significa que puedes acceder al contenido de cualquier red desde cualquiera de estas plataformas. No estás limitado a un único proveedor: puedes elegir libremente. [Mira este vídeo](https://framatube.org/w/9dRFC6Ya11NCVeYKn8ZhiD?start=8s) de FramaSoft, que ilustra muy bien el concepto.
>
> Lo ideal sería que todos nos pasáramos al fediverso y abandonáramos las redes sociales centralizadas y monopolizadas que son actualmente las más populares (Twitter, Reddit, Instagram...).
>
> Todas las aplicaciones compatibles con el fediverso (ActivityPub) se indican con [🧩](#icons).

> [!NOTE]
> **Interfaces y clientes alternativos**
>
> Las interfaces alternativas son útiles para proteger tu privacidad individual. Puedes seguir accediendo al contenido de servicios privativos que perjudican la privacidad, protegiendo la tuya y manteniendo cierto anonimato. Sin embargo, incluso al utilizar la mayoría de estas interfaces, los servicios privativos seguirán recibiendo solicitudes sobre el contenido que consultas (aunque no sepan que eres tú). Esto sigue perjudicando la privacidad colectiva y, de algún modo, alimenta sus algoritmos con datos. Solo las interfaces o los clientes alternativos que actúan como proxy ocultan tu IP real al proveedor del contenido.
>
> Puedes utilizar estas extensiones y aplicaciones del navegador para redirigir automáticamente los enlaces a interfaces alternativas que respetan la privacidad:
> - [LibRedirect](https://github.com/libredirect/browser_extension#get) - Extensión web que redirige las solicitudes a YouTube, Twitter y otros servicios hacia interfaces y backends alternativos que respetan la privacidad.
> - [UntrackMe](https://www.f-droid.org/en/packages/app.fedilab.nitterizeme/) - Convierte enlaces de YouTube, Twitter y otros servicios en enlaces a alternativas gratuitas y de código abierto.



### Plataformas de blogs (Medium)

⛔ **Evita**:
- **Medium** - El sitio web contiene rastreadores y anuncios de Google.
- **Blogger** - Es propiedad de Google y contiene rastreadores y anuncios de Google.

✅ **Alternativas:**
- [Plume](https://github.com/Plume-org/Plume) [🧩](#icons) - Aplicación federada para blogs, gracias a ActivityPub.
- [WriteFreely](https://writefreely.org/) [🧩](#icons) - Plataforma de código abierto para crear un espacio de escritura en la web.

✅ **Interfaces alternativas para Medium:**
- [Scribe](https://git.sr.ht/~edwardloveall/scribe/) - Interfaz alternativa para Medium, inspirada en Invidious.

### Instagram

[![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)

⛔ No utilices Instagram (o, al menos, su cliente oficial). Es una aplicación muy invasiva para la privacidad, con resultados y feeds sesgados según los perfiles de los usuarios. También se utiliza como herramienta de manipulación y aplica mucha censura, en detrimento de la libertad de expresión. Por último, su interfaz de usuario es adictiva y tóxica.

✅ **En su lugar, utiliza**

**Alternativas a Instagram**
- [Pixelfed](https://pixelfed.org/) [🧩](#icons) - Alternativa a Instagram descentralizada, federada y de código abierto, con publicaciones, vídeos, historias, etiquetas, etc.

### Quora

⛔ El sitio web de Quora tiene anuncios y rastreadores que recopilan tus datos para después venderlos o compartirlos con terceros. Su [política de privacidad](https://tosdr.org/en/service/314) es deficiente.

✅ **Interfaces alternativas para Quora (web):**
- [Quetre](https://github.com/zyachel/quetre) - Interfaz alternativa para Quora que permite consultar respuestas sin anuncios, rastreadores ni otras molestias.


### YouTube

[![](https://shields.tosdr.org/en_274.svg)](https://tosdr.org/en/service/274)

⛔ No utilices YouTube (o, al menos, su cliente oficial). YouTube invade mucho la privacidad y crea un perfil muy preciso basado en tus intereses. Además, es una [herramienta de radicalización](https://www.pcmag.com/news/does-youtubes-algorithm-lead-to-radicalization) que muestra a los usuarios [contenido sesgado](https://arxiv.org/pdf/1908.08313.pdf) para aumentar la participación y conseguir que vean cada vez más contenido, lo que genera [adicción](https://medium.com/dataseries/how-youtube-is-addictive-259d5c575883). Nunca te muestra [opiniones alternativas](https://arxiv.org/pdf/1908.08313.pdf) a tu ideología o tus sesgos. YouTube censura mucho. Recopila MUCHOS datos tuyos: intereses, tiempo libre, ideología, gustos, aversiones, preferencias musicales, etc.

✅ **En su lugar, utiliza**
- [Peertube](https://joinpeertube.org/en/) [🧩](#icons) - Alternativa gratuita, abierta y descentralizada a las plataformas de vídeo.
- [Odysee](https://odysee.com/) - Plataforma de vídeo respaldada por los creadores de lbry y que utiliza el protocolo blockchain lbry.
- [DTube](https://github.com/dtube/dtube) - Sitio web descentralizado para compartir vídeos y con todas las funciones.

✅ **Interfaces alternativas para YouTube (web):**
- [Invidious](https://github.com/iv-org/invidious) - Interfaz alternativa para YouTube que respeta la privacidad.
- [Piped](https://github.com/TeamPiped/Piped) - Interfaz alternativa para YouTube, respetuosa con la privacidad y eficiente por diseño.
- [ViewTube](https://github.com/ViewTube/viewtube) - Interfaz alternativa para YouTube, respetuosa con la privacidad y escrita en Vue.js.
- [Youtube-Local](https://github.com/user234683/youtube-local) - Cliente de navegador para ver YouTube de forma anónima y con un mayor rendimiento de página.

✅ **Clientes alternativos para YouTube (aplicaciones):**
- [🤖](#icons) [NewPipe](https://newpipe.net/) - Aplicación alternativa de YouTube para Android. No requiere cuenta, respeta la privacidad y no tiene anuncios.
- [🤖](#icons) [SkyTube](https://github.com/SkyTubeTeam/SkyTube) - Aplicación alternativa de YouTube para Android. No requiere cuenta, respeta la privacidad y no tiene anuncios.
- [FreeTube](https://github.com/FreeTubeApp/FreeTube) - Reproductor de YouTube de escritorio y de código abierto, diseñado para proteger la privacidad. (Utiliza la API RSS local o Invidious como backend).
- [🤖](#icons) [LibreTube](https://github.com/Libre-tube/LibreTube) - Interfaz alternativa para YouTube en Android que utiliza Piped.
- [Yattee](https://github.com/yattee/yattee) - Interfaz alternativa para YouTube en iOS, tvOS y macOS, basada en Invidious y Piped.
- [🤖](#icons) [Clipious](https://github.com/lamarios/clipious) [💀](#icons) Cliente de Invidious para Android.

### TikTok

[![](https://shields.tosdr.org/en_1448.svg)](https://tosdr.org/en/service/1448)

⛔ Evita TikTok: es una aplicación diseñada de forma tóxica que perjudica no solo la privacidad, sino también la integridad de los usuarios. Puedes leer [estas publicaciones](https://www.reddit.com/r/privacy/search?q=tiktok&restrict_sr=on&sort=top&t=all).

✅ **Interfaces alternativas para TikTok (web):**
- [ProxiTok](https://github.com/pablouser1/ProxiTok) - Interfaz alternativa de código abierto para TikTok.

### Twitter

[![](https://shields.tosdr.org/en_195.svg)](https://tosdr.org/en/service/195)

⛔ Evita la aplicación o el sitio web oficial de Twitter. Rastrea a los usuarios y crea perfiles según las cuentas que siguen, los tuits que retuitean y los que marcan con «Me gusta». Sus políticas [perjudican e invaden la privacidad de forma predeterminada](https://www.eff.org/deeplinks/2017/05/how-opt-out-twitters-new-privacy-settings).

#### Autoalojado

- [Memos](https://github.com/usememos/memos) - Centro de notas autoalojado y de código abierto, con funciones de gestión del conocimiento y socialización.

#### Descentralizadas

- [Nostr](https://nostr.com/) - Protocolo abierto que permite crear una red «social» global resistente a la censura. No depende de ningún servidor central de confianza, por lo que es resiliente; se basa en claves y firmas criptográficas, así que es resistente a la manipulación; y no depende de técnicas P2P, por lo que funciona. **Nota**: Nostr es un protocolo y puede ofrecer mucho más que una alternativa a Twitter.

> [!NOTE]
> **Redes sociales federadas**: una red social federada no es un único sitio web como Twitter o Facebook, sino una red de miles de comunidades administradas por distintas organizaciones y personas que ofrece una experiencia de redes sociales fluida.

- [Mastodon](https://joinmastodon.org/) [🧩](#icons) - Red social de microblogs federada y gratuita, basada en protocolos abiertos.
  - [Aplicaciones de Mastodon](https://joinmastodon.org/apps) - Lista de aplicaciones de Mastodon para Android, iOS, web y escritorio.
- [Pleroma](https://pleroma.social/) [🧩](#icons) - Servidor de redes sociales federado y gratuito, basado en protocolos abiertos.
  - [Soapbox](https://gitlab.com/soapbox-pub/soapbox-fe) - Interfaz para Pleroma centrada en la personalización de marca y la facilidad de uso.

#### Interfaces alternativas
- [Nitter](https://github.com/zedeus/nitter/wiki/Instances) [💀](#icons) - Interfaz alternativa para Twitter, gratuita, de código abierto y centrada en la privacidad.
- [Squawker](https://github.com/j-fbriere/squawker) - Cliente de Twitter de código abierto para Android y bifurcación mantenida de Fritter.
- [Feetter](https://codeberg.org/pluja/Feetter) [💀](#icons) - Crea, sincroniza y gestiona fuentes de Nitter desde cualquier dispositivo, sin registrarte.

### Reddit

[![](https://shields.tosdr.org/en_194.svg)](https://tosdr.org/en/service/194)

⛔ Intenta evitar Reddit o, al menos, sus clientes oficiales, ya que tienen muchísimos rastreadores y anuncios y comparten datos innecesarios de los usuarios con sus servidores.

✅ **Alternativas a Reddit:**
- [Aether](https://getaether.net/) - Comunidades públicas efímeras entre pares.
- [Mbin](https://github.com/MbinOrg/mbin) [🧩](#icons) - Agregador de contenido y plataforma de microblogs similar a Reddit para el fediverso; continuación de kbin mantenida por la comunidad.
- [Lemmy](https://join-lemmy.org/) [🧩](#icons) - Alternativa federada y abierta a Reddit, escrita en Rust.

✅ **Clientes de Reddit que respetan la privacidad:**
- [Redlib](https://github.com/redlib-org/redlib) - Interfaz privada alternativa para Reddit, originada en Libreddit.

### Plataformas de streaming (Twitch)

[![](https://shields.tosdr.org/en_200.svg)](https://tosdr.org/en/service/200)

⛔ Evita plataformas como Twitch, Patreon y YouTube, ya que invaden mucho la privacidad tanto de tus espectadores como la tuya. En su lugar, puedes probar plataformas autoalojadas que protejan la privacidad de todos.

✅ **Alternativas:**
- [Owncast](https://github.com/owncast/owncast) - Toma el control de tus retransmisiones en directo al alojarlas tú mismo. Incluye streaming y chat desde el primer momento.

✅ **Clientes de Twitch que respetan la privacidad:**
- [🤖](#icons) [Twire](https://github.com/twireapp/Twire) - Navegador y reproductor de streams de Twitch para Android, de código abierto y sin anuncios.

[Back to top 🔝](#contents)

### Imgur

[![](https://shields.tosdr.org/en_325.svg)](https://tosdr.org/en/service/325)

⛔ El sitio web de Imgur está repleto de elementos innecesarios, GIF, cookies, JavaScript y rastreadores.

✅ **Alternativas:**
- [rimgo](https://codeberg.org/video-prize-ranch/rimgo#instances) - Interfaz alternativa para Imgur. Solo lectura, sin JavaScript, basada en rimgu y reescrita en Go.

[Back to top 🔝](#contents)

### IMDb

⛔ IMDb es propiedad de Amazon y su sitio web está repleto de anuncios y rastreadores de terceros.

✅ **Interfaces alternativas para IMDb:**
- [libremdb](https://libremdb.iket.me/) - Interfaz alternativa para IMDb que respeta la privacidad y elimina anuncios y rastreadores. De código abierto y autoalojable (AGPL-3.0).

[Back to top 🔝](#contents)

### Fandom

⛔ Las wikis de Fandom (antes Wikia) están sobrecargadas de anuncios, vídeos de reproducción automática y rastreadores.

✅ **Interfaces alternativas para Fandom:**
- [BreezeWiki](https://breezewiki.com/) - Interfaz alternativa para las wikis de Fandom que elimina anuncios, vídeos y contenido innecesario. De código abierto y autoalojable.

[Back to top 🔝](#contents)

## Herramientas de trabajo en equipo
⛔ **Evita**
- [![](https://shields.tosdr.org/en_206.svg)](https://tosdr.org/en/service/206)
- Google Meet [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Microsoft Teams [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- [![](https://shields.tosdr.org/en_536.svg)](https://tosdr.org/en/service/536)

✅  **En su lugar, utiliza**
- [Zulip](https://zulip.com/) - Chat para equipos distribuidos.
- [Stoat](https://stoat.chat/) (antes Revolt) - Plataforma de chat centrada en los usuarios y desarrollada con tecnologías web modernas.
- [Twake](https://twake.app/) - Trabaja más rápido en equipo. Twake cubre todas las necesidades de tu organización desde una sola plataforma.
- [RocketChat](https://rocket.chat/) - Controla tus comunicaciones, gestiona tus datos y utiliza tu propia plataforma colaborativa para mejorar la productividad del equipo.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Mantén tus conversaciones privadas con Nextcloud Talk.
- [Mattermost](https://mattermost.com/) - Alternativa de código abierto a Slack.

> [!WARNING]
> **Clientes o modificaciones alternativas de Discord:**
> Tu IP y tus mensajes seguirán compartiéndose con Discord y perteneciendo a la plataforma; además, no están cifrados.\
> El uso de cualquiera de estas modificaciones o clientes también [infringe](https://x.com/discord/status/1006178587731550208) las [condiciones de servicio de Discord](https://discord.com/terms), por lo que no nos hacemos responsables de la suspensión o cancelación de tu cuenta; **sin embargo**, esto [no debería ocurrir **todavía**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).

- [Consulta esta sección sobre modificaciones y clientes alternativos de Discord](https://github.com/pluja/awesome-privacy/blob/main/README.md#alternative-clientsmodifications-of-discord)

[Back to top 🔝](#contents)

## Grabación de pantalla

- [Screenity](https://screenity.io/) - Potente grabador de pantalla y herramienta de anotación que respeta la privacidad, para crear mejores vídeos de trabajo, educación y otros ámbitos.
- [OBS](https://obsproject.com/) - Software gratuito y de código abierto para grabar vídeo y emitir en directo.

[Back to top 🔝](#contents)

## Traducción
⛔ **Evita**
- Google Translate [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- DeepL
- Bing Translator [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **Traducción de texto**
- [Mozilla Translate](https://mozilla.github.io/translate/) - De código abierto; ejecuta el modelo localmente en el navegador.
- [Libretranslate](https://libretranslate.com/) - Traducción automática de código abierto, 100 % autoalojada, sin límites ni vínculos con servicios privativos.
- [Apertium](https://apertium.org/) - Plataforma de traducción automática gratuita y de código abierto que funciona sin conexión en tu ordenador.
- [Softcatala](https://www.softcatala.org/traductor/) - Herramienta de traducción de código abierto, solo para catalán, español, inglés y francés (utiliza Apertium).
- [TranslateLocally](https://github.com/XapaJIaMnu/translateLocally) – Traducción automática neuronal gratuita y de código abierto que funciona sin conexión en tu ordenador.
- [Linguist](https://linguister.io) - Solución de traducción completa, gratuita y de código abierto en el navegador, con traductor sin conexión integrado y [traductores personalizados](https://linguister.io/docs/CustomTranslator). Traducción de páginas completas, texto a voz, diccionario y traducción de entradas y del texto seleccionado en la página.

✅ **Interfaces alternativas para Google Translate**
- [Lingva](https://github.com/TheDavidDelta/lingva-translate) [💀](#icons) - Interfaz alternativa para Google Translate. [Demostración](https://lingva.ml/).
- [Simplytranslate](https://codeberg.org/ManeraKai/simplytranslate) - Interfaz alternativa para Google Translate y LibreTranslate. [Demostración](https://simplytranslate.org/)
- [Mozhi](https://codeberg.org/aryak/mozhi) - Interfaz alternativa que agrupa Google Translate, DeepL, Yandex y otros motores en una sola interfaz privada. Autoalojable, con licencia AGPL-3.0.

[Back to top 🔝](#contents)

## Sin categoría
- [Skymap](https://skymaponline.net/) - Programa de planetario en línea y de código abierto.
- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - fail2ban modernizado, colaborativo y de código abierto.
- [Hetty](https://github.com/dstotijn/hetty) - Kit de herramientas HTTP para la investigación de seguridad, cuyo objetivo es ser una alternativa de código abierto a Burp Suite Pro.
- [Visited](https://github.com/didvc/visited) - Recopila localmente el historial de navegación de varios navegadores.

[Back to top 🔝](#contents)

## Utilidades
- [Deskreen](https://github.com/pavlobu/deskreen) - Convierte cualquier dispositivo en una pantalla secundaria para tu ordenador.

[Back to top 🔝](#contents)

## Control de versiones
⛔ **Evita**

- **Github** - [![](https://shields.tosdr.org/en_297.svg)](https://tosdr.org/en/service/297). Aunque su política de privacidad no es muy deficiente, es propiedad de Microsoft y es bien sabido que utiliza el código que aloja para entrenar modelos de IA.

✅  **En su lugar, utiliza**
- [Codeberg](https://codeberg.org/) - Plataforma colaborativa que ofrece alojamiento Git y servicios para software, contenidos y proyectos gratuitos y de código abierto.
- [Forgejo](https://forgejo.org/) - Forja de software ligera y autoalojada.
- [GitLab](https://about.gitlab.com/) - Paquete de software DevOps para desarrollar, proteger y operar software.
- [Radicle](https://radicle.dev/) - Conjunto de herramientas de colaboración en código P2P y de código abierto, basado en Git. A diferencia de las plataformas centralizadas de alojamiento de código, ninguna entidad controla la red. Los repositorios se replican entre pares de forma descentralizada y los usuarios controlan plenamente sus datos y flujos de trabajo.
- [Gitea](https://gitea.com) - Forja Git ligera y autoalojada, proyecto del que se bifurcó Forgejo. De código abierto, con licencia MIT.

[Back to top 🔝](#contents)

## Videoconferencias y audioconferencias
⛔ **Evita**

- **Zoom** - [Política de privacidad muy deficiente](https://tosdr.org/en/service/2198). Sus aplicaciones incluyen [rastreadores de Google](https://reports.exodus-privacy.eu.org/en/reports/us.zoom.videomeetings/latest/) y requieren muchos permisos.
- **Skype** - [Política de privacidad muy deficiente](https://tosdr.org/en/service/244). Sus aplicaciones incluyen [rastreadores de Google y Microsoft](https://reports.exodus-privacy.eu.org/en/reports/com.skype.insiders/latest/) y requieren demasiados permisos.
- **Google Meet** - [Política de privacidad muy deficiente](https://tosdr.org/en/service/217). Sus aplicaciones incluyen [rastreadores de Google](https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.tachyon/latest/) integrados (al ser una aplicación de Google) y requieren demasiados permisos.
- **Whatsapp** - [Política de privacidad deficiente](https://tosdr.org/en/service/198). Sus aplicaciones incluyen [rastreadores de Google](https://reports.exodus-privacy.eu.org/en/reports/com.whatsapp/latest/) y probablemente también rastreadores de Facebook (al ser una aplicación de Facebook); además, requieren demasiados permisos.
- **Instagram** - [Política de privacidad muy deficiente](https://tosdr.org/en/service/219). Sus aplicaciones incluyen [rastreadores de Facebook](https://reports.exodus-privacy.eu.org/en/reports/com.instagram.android/latest/) y requieren demasiados permisos.
- **Discord** - [Política de privacidad muy deficiente](https://tosdr.org/en/service/536). Sus aplicaciones incluyen [varios rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.discord/latest/) y requieren muchos permisos.
- Clubhouse

✅  **En su lugar, utiliza**
- [BigBlueButton](https://bigbluebutton.org/) - Sistema de conferencias web diseñado para el aprendizaje en línea.
- [Briefing](https://github.com/holtwick/briefing/) - Chat grupal de vídeo directo y seguro. Utiliza únicamente tecnologías abiertas (como WebRTC), compatibles con todos los navegadores modernos.
- [Chitchatter](https://chitchatter.im/) - Chat P2P seguro, sin servidores, descentralizado y efímero. Admite compartir texto, audio, vídeo, pantalla y archivos.
- [Jam](https://github.com/jam-systems/jam) [💀](#icons) - Tu propio Clubhouse de código abierto para miniconferencias, amistades y comunidades.
- [Jami](https://jami.net/) - Conferencias de audio y vídeo P2P.
- [Jitsi Meet](https://github.com/jitsi/jitsi-meet) - Videoconferencias más seguras, flexibles y completamente gratuitas. Si utilizas la instancia oficial, tendrás que iniciar sesión. Se recomienda el autoalojamiento.
- [Mirotalk P2P](https://p2p.mirotalk.com/) - Videoconferencias WebRTC P2P gratuitas, sencillas, seguras y rápidas, en tiempo real y hasta 4K y 60 fps; compatible con todos los navegadores y plataformas.
- [Mumble](https://www.mumble.info/) - Aplicación de comunicación por voz de código abierto y con funciones avanzadas.
- [PeerCalls](https://github.com/peer-calls/peer-calls) - Videollamadas grupales entre pares para todo el mundo, escritas en Go y TypeScript.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Videollamadas y chat autoalojados que funcionan mediante WebRTC en tu propio servidor Nextcloud (AGPL-3.0).


##### Clientes o modificaciones alternativas de Discord:
> [!WARNING]
> Tu IP y tus mensajes seguirán compartiéndose con Discord y perteneciendo a la plataforma; además, no están cifrados.\
> El uso de cualquiera de estas modificaciones o clientes también [infringe](https://x.com/discord/status/1006178587731550208) las [condiciones de servicio de Discord](https://discord.com/terms), por lo que no nos hacemos responsables de la suspensión o cancelación de tu cuenta; **sin embargo**, esto [no debería ocurrir **todavía**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).
- [OpenAsar](https://openasar.dev/) - Alternativa de código abierto al archivo app.asar de Discord para escritorio, con una opción de [no seguimiento](https://github.com/GooseMod/OpenAsar#readme) que desactiva los informes de errores y fallos de Discord.
- [Vencord](https://github.com/Vendicated/Vencord) - Modificación del cliente de Discord que hace las cosas de otra manera.
- [BetterDiscord](https://betterdiscord.app/) - Modificación del cliente de Discord; también debes instalar el complemento [DoNotTrack](https://betterdiscord.app/plugin/DoNotTrack) para bloquear los rastreadores.
- [Kernel](https://github.com/kernel-mod/electron) [💀](#icons) - Modificación del cliente Electron muy pequeña y rápida, con muchas funciones. También debes instalar el paquete [Discord Utilities](https://github.com/slow/discord-utilities) para bloquear los rastreadores.
- [Replugged](https://replugged.dev/) - Continuación de la modificación de cliente obsoleta [Powercord](https://powercord.dev).
- [WebCord](https://github.com/SpacingBat3/WebCord) - Cliente para Discord y Fosscord sin API, creado con Electron.
- [🤖](#icons) [Aliucord](https://github.com/Aliucord/Aliucord) - Modificación de la aplicación Discord para Android que [desactiva por completo el seguimiento de Discord](https://github.com/Aliucord/Aliucord/blob/main/Aliucord/src/main/java/com/aliucord/coreplugins/NoTrack.java).
- [Vesktop](https://vesktop.dev/) - Cliente de escritorio independiente para Discord que bloquea la telemetría e incluye Vencord. De código abierto, con licencia GPL-3.0.

[Back to top 🔝](#contents)

## Edición de vídeo
⛔ **Evita**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- Sony Vegas
- DaVinci Resolve

Estos programas están repletos de rastreadores y telemetría. Puedes consultar [aquí](https://www.gnu.org/proprietary/malware-adobe.html) una lista completa de motivos por los que **no** deberías utilizar Adobe. Casi lo mismo se aplica a muchos editores privativos.

✅  **En su lugar, utiliza**

- [kdenlive](https://kdenlive.org/) - Editor de vídeo de código abierto. Gratuito, fácil de usar para cualquier propósito y para siempre.
- [LosslessCut](https://github.com/mifi/lossless-cut) - Aspira a ser la interfaz gráfica multiplataforma definitiva de FFmpeg para procesar con extrema rapidez y sin pérdidas archivos de vídeo, audio, subtítulos y otros medios relacionados.
- [Olive Video Editor](https://olivevideoeditor.org/) - Editor de vídeo no lineal avanzado, gratuito y de código abierto, actualmente en fase alfa.
- [OpenCut](https://github.com/OpenCut-app/OpenCut) - [Beta] Editor de vídeo gratuito y de código abierto para web, escritorio y móviles.
- [Shotcut](https://www.shotcut.org/) - Editor de vídeo sencillo, gratuito, multiplataforma y de código abierto.

[Back to top 🔝](#contents)

## VPN

⛔ **Evita**

- [VPN gratuitas](https://techcrunch.com/2020/09/24/free-vpn-bad-for-privacy/) de Google Play o de cualquier tienda de aplicaciones. Estos servicios no son gratuitos: extraen los datos de tus conexiones, guardan registros y crean un perfil tuyo para [vender tus datos a anunciantes](https://thenextweb.com/news/be-cautious-free-vpns-are-selling-your-data-to-3rd-parties). Si un gobierno quiere rastrear a alguien, estas aplicaciones serán las primeras en ceder.

- Las aplicaciones VPN de código cerrado, como Surfshark o NordVPN, pueden ser menos fiables porque nadie puede saber con certeza cómo gestionan tus datos. Además, pagar con tarjeta de crédito te identifica en la transacción. Si también tienes que proporcionar tu correo electrónico, te identificarán si has utilizado esa misma dirección en otros servicios.


✅  **En su lugar, utiliza**

Estas son algunas opciones de código abierto y realmente privadas (no requieren datos personales ni tarjeta de crédito):

- [IVPN](https://ivpn.net) - VPN sin registros, con aplicaciones de código abierto, registro sin correo electrónico y pago en efectivo, Monero o Bitcoin.
- [nadanada](https://nadanada.me) (antes LNVPN) - VPN WireGuard de pago por uso, sin cuenta, que se paga mediante Lightning Network u otras criptomonedas.
- [Mullvad VPN](https://mullvad.net) - VPN sin registros, con aplicaciones de código abierto, cuentas anónimas con número y pago en efectivo o criptomonedas.
- [Proton VPN](https://protonvpn.com) - VPN suiza sin registros, con aplicaciones de código abierto auditadas para todas las plataformas y un plan gratuito sin límite de datos.
- [SPN](https://safing.io/) - Red de código abierto para todo el sistema que enruta cada conexión de una aplicación por una ruta propia a través de varios nodos. Así separa la IP de cada conexión, en lugar de compartir una sola salida. Integrada en el cortafuegos Safing Portmaster para Windows y Linux.
- [Amnezia VPN](https://amnezia.org) - VPN autoalojada y resistente a la censura, que instalas en tu propio servidor y cuenta con aplicaciones auditadas de código abierto (GPL-3.0).
- [Encuentra más en kycnot.me (categoría VPN)](https://kycnot.me/?categories=vpn) - Proveedores de VPN que no exigen verificación de identidad (KYC).

[Back to top 🔝](#contents)

## Navegadores web

⛔ **Evita**

- **Google Chrome** - Es propiedad de Google y se basa en el proyecto de código abierto Chromium (también propiedad de Google). Incluye muchas funciones invasivas para la privacidad y suele estar conectado a tu cuenta de Google. Está sujeto a la [política de privacidad de Google](https://tosdr.org/en/service/217), conocida por ser muy deficiente. Google pretende imponer [Manifest v3](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening), que perjudica directamente los esfuerzos por proteger la privacidad.
- **Microsoft Edge** - Versión de Chromium con la imagen de Microsoft, que sustituye los rastreadores de Google por los de Microsoft. Está sujeto a la [política de privacidad de Microsoft](https://tosdr.org/en/service/244), también muy deficiente. Si aun así quieres usarlo, puedes [seguir esta guía](https://anonymousplanet.net/guide/#hardening-edge) para reforzarlo un poco.
- **Opera** - Fue [adquirido por un consorcio de inversores chinos](https://en.wikipedia.org/wiki/Opera_(web_browser)#Acquisition_by_Chinese_consortium). La aplicación tiene [muchos rastreadores](https://reports.exodus-privacy.eu.org/de/reports/com.opera.browser/latest/).

✅  **En su lugar, utiliza**

#### Android / iOS
- [Brave](https://brave.com/) - Android/iOS. Brave ofrece de serie un conjunto bastante bueno de protecciones de privacidad y contra rastreadores.
- [Firefox](https://www.firefox.com/en-US/mobile/) - Android/iOS.
    - [🤖](#icons) [IronFox](https://gitlab.com/ironfox-oss/IronFox) - Bifurcación del navegador Mull. Versión reforzada de Firefox para Android, sin blobs propietarios.
- [🤖](#icons) [Vanadium](https://vanadium.app/) - Versiones de Chromium mejoradas en privacidad y seguridad por GrapheneOS.
- [🤖](#icons) [Privacy Browser](https://www.stoutner.com/privacy-browser/)
- [Tor Browser](https://www.torproject.org/) - iOS/Android. Protégete del seguimiento y la vigilancia y elude la censura.
- [Cromite](https://github.com/uazo/cromite) - Bifurcación de Chromium basada en Bromite, con bloqueo de anuncios integrado y centrada en la privacidad.

#### Escritorio
- [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium) - Enfoque ligero para eliminar la dependencia de los servicios web de Google. Ungoogled Chromium es Chromium de Google, pero sin depender de los servicios web de Google.
- [Brave](https://brave.com/) - Brave ofrece de serie un conjunto bastante bueno de protecciones de privacidad y contra rastreadores.
- [Firefox](https://www.firefox.com/en-US/) - Navegador independiente y de código abierto. Necesita algunos [ajustes y refuerzos](https://anonymousplanet.net/guide/#hardening-firefox) para ofrecer una gran privacidad.
  - [LibreWolf](https://librewolf.net/) - Bifurcación de Firefox centrada en la privacidad.
- [Tor Browser](https://www.torproject.org/) - Firefox reforzado que enruta el tráfico a través de la red Tor para resistir el seguimiento, la vigilancia y la censura.
- [Mullvad Browser](https://mullvad.net/en/browser/) - Navegador con las implicaciones de privacidad y seguridad de Tor Browser, pero sin utilizar la red Tor.
- [Zen Browser](https://zen-browser.app/) - Navegador basado en Firefox, con protección mejorada contra el seguimiento activada de forma predeterminada y centrado en una navegación tranquila y despejada. Con licencia MPL-2.0.
- [Floorp](https://floorp.app/) - Bifurcación de Firefox con telemetría desactivada y más opciones de personalización, diseñada teniendo en cuenta la privacidad. De código abierto, con licencia MPL-2.0.

> [!TIP]
> Puede ser interesante aprender qué puedes hacer para reforzar tu navegador. Para ello, puedes seguir esta sección de la [Guía del autoestopista para el anonimato en línea](https://anonymousplanet.net/guide/#hardening-browsers). Si no entiendes lo que estás haciendo, no lo hagas: podrías perjudicar tu privacidad en lugar de protegerla.

[Back to top 🔝](#contents)

### Complementos para navegadores

#### Antirrastreo
Infórmate sobre lo que hace el complemento antes de instalarlo. Si no entiendes lo que estás haciendo, podrías acabar perjudicando tu privacidad. Además, demasiados complementos pueden ralentizar la navegación.

- [uBlock Origin](https://ublockorigin.com/) - Bloqueador de anuncios gratuito y de código abierto que consume pocos recursos de CPU y memoria.
	- [Lee la documentación de la extensión](https://github.com/gorhill/uBlock/wiki/Blocking-mode) y elige uno de los modos recomendados para aumentar tu privacidad.
	- Ve a configuración > lista de filtros > molestias y activa easylist-cookies. Así evitarás las molestas ventanas emergentes de cookies.
- [LibRedirect](https://github.com/libredirect/browser_extension) - Extensión web sencilla que redirige solicitudes a Twitter, YouTube, Google Maps y muchos otros servicios a alternativas respetuosas con la privacidad. Privacy Redirect ya no se mantiene; LibRedirect es una bifurcación mantenida.
- [Privacy Badger](https://privacybadger.org/) - Extensión del navegador de la EFF que aprende a bloquear rastreadores mientras navegas. De código abierto, con licencia GPL-3.0.
- [ClearURLs](https://clearurls.xyz/) - Extensión del navegador que elimina automáticamente los parámetros de seguimiento de enlaces y URL. De código abierto, con licencia LGPL-3.0.

#### Herramientas útiles
- [Single File](https://github.com/gildas-lormeau/SingleFile) - Guarda una copia fiel de una página web completa en un único archivo HTML para poder usarla sin conexión.

### Sincronización del navegador
- [xBrowserSync](https://www.xbrowsersync.org/) - Sincronización del navegador como debe ser: segura, anónima y gratuita.

[Back to top 🔝](#contents)

## Denuncia de irregularidades

✅  **En su lugar, utiliza**
- [GlobaLeaks](https://www.globaleaks.org/) - Plataforma autoalojable para denuncias de organizaciones, redacciones y activistas, que sustituye a los portales de denuncia alojados por terceros. De código abierto (AGPL-3.0).
- [SecureDrop](https://securedrop.org/) - Sistema de recepción autoalojado que permite a las redacciones recibir documentos de fuentes anónimas a través de Tor, sustituyendo el correo electrónico y las cargas en la nube. De código abierto (AGPL-3.0).

[Back to top 🔝](#contents)

## Privacidad, seguridad y anonimato

El anonimato, la privacidad y la seguridad suelen usarse indistintamente, pero en realidad son conceptos distintos. Es importante comprender sus diferencias.

- La privacidad consiste en regular quién tiene acceso a tu información personal, ser consciente de los datos que se recopilan sobre ti y poder decidir quién puede acceder a ellos y cómo. En resumen, la privacidad implica controlar tu información personal.

- La seguridad consiste en proteger tu información personal contra accesos no autorizados o robos. Implica garantizar que tus datos estén protegidos y almacenados de forma segura, dificultando el acceso de agentes maliciosos.

- El anonimato consiste en garantizar que tus acciones no puedan remontarse hasta ti. Esto significa que, aunque alguien descubra lo que haces, no podrá identificarte como su autor.

Es importante tener en cuenta que la privacidad y la seguridad no son necesariamente interdependientes. Por ejemplo, los sistemas de Google son seguros y es poco probable que sean pirateados, pero Google sigue teniendo acceso a tus datos personales y los utiliza.

La privacidad y el anonimato tampoco están necesariamente vinculados. Servicios como Signal ofrecen un alto nivel de privacidad porque no recopilan datos sobre lo que dices, con quién hablas ni cómo utilizas la aplicación; sin embargo, quizá no sean anónimos, ya que debes registrarte con tu número de teléfono (que en muchos casos está vinculado a tu identidad).

Por último, hay servicios que pueden ofrecer las tres cosas: anonimato, privacidad y seguridad. El objetivo principal de esta lista es ofrecer alternativas que prioricen la privacidad. Estas alternativas te permiten controlar tus datos y no los recopilan ni los venden.

[Back to top 🔝](#contents)

## Iconos

| Icono | Significado |
|-------|---------|
| 💀    | Precaución: parece que el desarrollo de este servicio lleva mucho tiempo inactivo. Es posible que el proyecto esté abandonado. Investiga antes de usarlo. |
| ♻️    | El software es una bifurcación: alguien ha copiado el proyecto original y ha empezado a desarrollarlo por su cuenta. |
| 🧩    | El software utiliza ActivityPub, un protocolo descentralizado para redes sociales. |
| 🤖    | Solo para Android. |

[Back to top 🔝](#contents)
