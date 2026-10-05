# Awesome de Privacidade
<p align="center"><img width="500" src="misc/logo.png"> </img></p>
<p align="center">
	<img src="https://awesome.re/badge.svg" alt="Awesome">
	<a href="https://codeberg.org/pluja/awesome-privacy"><img alt="Espelho" src="https://img.shields.io/badge/Mirror-Codeberg-blue"></img></a>
</p>
<p align="center">Lista de serviços gratuitos, de código aberto e que respeitam a privacidade, além de alternativas a serviços proprietários.</p>
<p align="center">
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/ABOUT.md"> Sobre </a> | 
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/Contributing.md"> Como contribuir </a> | 
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/QUOTES.md"> Citações </a> | 
	<a href="https://github.com/pluja/awesome-privacy/discussions"> Discussões </a>
</p>

> [!IMPORTANT]
> Anonimato, privacidade e segurança costumam ser usados como sinônimos, mas na verdade representam conceitos distintos. É importante entender as diferenças entre eles. [Saiba mais nesta seção abaixo](#privacy-vs-security-vs-anonymity).
> 
> O principal objetivo desta lista é oferecer alternativas que priorizem a privacidade. Elas dão a você controle sobre seus dados e não os coletam nem vendem.

## Sumário
- [Autenticação de dois fatores (2FA)](#2fa)
- [Análise de dados](#analytics)
- [Android](#android)
  - [Loja de aplicativos para Android](#android-app-store)
  - [Ferramentas para remover excessos do Android](#android-debloat-tools)
  - [Discador para Android](#android-dialer)
  - [Gerenciador de arquivos para Android](#android-file-manager)
  - [Galeria para Android](#android-gallery)
  - [Teclado para Android](#android-keyboard)
  - [Inicializador para Android](#android-launcher)
- [Inteligência artificial](#artificial-intelligence)
	- [ChatGPT](#chatgpt)
	- [Programação com IA](#ai-coding)
	- [Conversão de texto em fala](#text-to-speech)
 	- [Conversão de fala em texto](#speech-to-text)
	- [Geração de imagens](#image-generation)
- [Favoritos](#bookmarking)
    - [Anotações e destaques em livros e na Web](#book-and-web-annotationshighlights-management)
- [CAPTCHAs](#captchas)
- [Calendário](#calendar)
- [Sistemas de comentários (Disqus)](#commenting-engines)
- [Ofuscação](#cloaking)
- [Armazenamento em nuvem](#cloud-storage)
- [Ferramentas para criadores](#creator-tools)
- [Bancos de dados](#databases)
- [Aplicativos de relacionamento](#dating-apps)
- [Ferramentas de design](#design-tools)
- [Ferramentas para desenvolvedores](#developer-tools)
    - [IDEs](#ides)
- [Domínios e hospedagem](#domains--hosting)
- [Gerenciadores de downloads](#download-manager)
- [E-books](#ebooks)
- [Criptografia](#encryption)
- [Gerenciamento e compartilhamento de arquivos](#file-management-and-sharing)
- [Saúde e bem-estar](#fitness-and-health)
	- [Rastreadores de atividades físicas](#fitness-trackers)
	- [Alimentação](#food)
	- [Rastreadores do ciclo menstrual](#menstrual-cycle-trackers)
	- [Saúde médica](#medical-health)
- [Fontes](#fonts)
- [Formulários](#forms)
- [Jogos](#games)
    - [Mario Kart](#mario-kart)
    - [Minecraft](#minecraft)
    - [Pokémon](#pokemon)
    - [Sonic the Hedgehog](#sonic-the-hedgehog)
- [Assistentes domésticos](#home-assistants)
- [Mensagens instantâneas](#instant-messaging)
- [Ferramentas para links na bio](#link-in-bio-tools)
- [Encurtadores de links](#link-shorteners)
- [Rastreamento de localização](#location-tracking)
- [Serviços de e-mail](#mail-services)
- [Mapas e navegação](#maps-and-navigation)
- [Plataformas de streaming de mídia](#media-streaming-platforms)
    - [Vídeo e áudio](#video-and-audio)
    - [Áudio](#audio)
    - [Podcasts](#podcasts)
- [Reconhecimento musical (similar ao Shazam)](#music-recognition)
- [Notas e tarefas](#notes-and-tasks)
- [Suíte de escritório](#office)
- [Provedores de telefonia online (SMS)](#online-phone-providers)
- [Sistemas operacionais](#operating-systems)
    - [Android](#android)
    - [PC / macOS](#pc--macos)
    - [Smart TVs](#smart-tv)
- [Gerenciadores de senhas](#password-managers)
- [Pastebin e compartilhamento de segredos](#pastebin-and-secret-sharing)
- [Pagamentos](#payments)
- [Finanças pessoais](#personal-finances)
	- [Gestão financeira completa](#full-featured-financial-management)
 	- [Gestão de orçamento](#budget-management)
  	- [Despesas compartilhadas](#shared-expenses)
	- [Outros](#others)
 	- [Rastreadores de carteira de investimentos](#portfolio-trackers)
- [Edição e gerenciamento de fotos](#photo-editing-and-management)
- [Armazenamento de fotos](#photo-storage)
- [Ferramentas de privacidade](#privacy-tools)
- [Acesso e controle remoto](#remote-access-and-control)
- [Roteadores](#routers)
- [Leitores de RSS](#rss-readers)
- [Mecanismos de busca](#search-engines)
- [Redes e plataformas sociais](#social-networks-and-platforms)
    - [Plataformas de blog (Medium / Blogger)](#blogging-platforms-medium)
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
- [Gravação de tela](#screen-recording)
- [Ferramentas de trabalho em equipe](#teamworking-tools)
- [Tradução](#translation)
- [Sem categoria](#uncategorized)
- [Utilitários](#utilities)
- [Controle de versão](#version-control)
- [Videoconferência e chamadas de áudio](#video-and-audio-conferencing)
- [Edição de vídeo](#video-editing)
- [Redes privadas virtuais (VPNs)](#vpns)
- [Navegadores](#web-browser)
    - [Extensões de navegador](#browser-addons) 
    - [Sincronização do navegador](#browser-sync)
- [Denúncias de irregularidades](#whistleblowing)

## 2FA
⛔ Evite aplicativos que não permitam exportar suas chaves **com facilidade**.
- Authy
- Google Authenticator [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅ Em vez disso, use
- [🤖](#icons) [Aegis](https://getaegis.app/) - Aplicativo gratuito, seguro e de código aberto para Android, destinado ao gerenciamento de tokens de verificação em duas etapas. Aceita vários formatos de importação de outros aplicativos (Google Authenticator, Authy etc.), criptografa o cofre e permite exportar chaves (em texto simples ou criptografadas).
- [ente Auth](https://ente.com/auth/) - Aplicativo gratuito, multiplataforma, de código aberto e com criptografia de ponta a ponta para gerenciar tokens de verificação em duas etapas. Criado pela equipe do [ente Photos](https://ente.com), usa a mesma infraestrutura, amplamente testada em produção. Requer uma conta ente.io.
- [Owky](https://github.com/charlietango/owky) [💀](#icons) - Autenticador de dois fatores gratuito e de código aberto para usuários de iOS.
- [🤖](#icons) [FreeOTPPlus](https://github.com/helloworld1/FreeOTPPlus) - Versão aprimorada do FreeOTP-Android, com um autenticador 2FA repleto de recursos.
- [🤖](#icons) [Stratum](https://github.com/stratumauth/app) - Cliente de autenticação de dois fatores (2FA) para Android e Wear OS.
- [Proton Authenticator](https://proton.me/authenticator) - O Proton Authenticator é um aplicativo 2FA simples e gratuito, de [código aberto](https://proton.me/community/open-source#apps) e com [criptografia de ponta a ponta](https://proton.me/blog/password-encryption).
- [2FAS Auth](https://2fas.com/auth) - Autenticador TOTP de código aberto para iOS e Android, com extensão de navegador complementar e sem necessidade de conta. Licenciado sob GPL-3.0.

[Voltar ao topo 🔝](#contents)

## Analytics
⛔ Evite serviços de análise de dados do Google, Facebook, Microsoft ou de qualquer serviço proprietário. Esse tipo de análise prejudica a privacidade dos usuários.

✅  **Em vez disso, use**
- [Ackee](https://ackee.electerious.com/) - Análise de sites auto-hospedada.
- [Aptabase](https://aptabase.com) - Análise de dados simples, de código aberto e que prioriza a privacidade para aplicativos móveis e de desktop.
- [Cabin](https://withcabin.com) - Análise da Web que prioriza a privacidade e leva em conta o impacto de carbono.
- [GoatCounter](https://www.goatcounter.com/) - Plataforma leve e de código aberto para análise de dados, atenta à privacidade.
- [Matomo](https://matomo.org/) - Alternativa ao Google Analytics que protege seus dados e a privacidade de seus clientes.
- [Nullitics](https://nullitics.com/) - Análise de dados barata, de código aberto e sem esforço.
- [Pirsch](https://pirsch.io/) - O Pirsch é uma alternativa simples, leve, sem cookies e de código aberto ao Google Analytics, que respeita a privacidade e se integra facilmente a qualquer site ou back-end.
- [Plausible](https://plausible.io/) - Alternativa simples ao Google Analytics que respeita a privacidade.
- [Shynet](https://github.com/milesmcc/shynet) - Análise da Web moderna, detalhada e que respeita a privacidade, sem cookies nem JavaScript.
- [Swetrix](https://swetrix.com) - Serviço de análise da Web de código aberto (e auto-hospedável), com foco na privacidade e totalmente livre de cookies.
- [Umami](https://umami.is/) - Alternativa simples e rápida ao Google Analytics para análise de sites.
- [Unidentified Analytics](https://unidentifiedanalytics.web.app/) - Rastreamento ingênuo baseado em IP que funciona em qualquer lugar (Web, linha de comando, e-mail etc.). Não exige conta. Fácil para desenvolvedores.
- [Rybbit](https://rybbit.com) - Alternativa de código aberto e que respeita a privacidade ao Google Analytics, 10 vezes mais intuitiva.

[Voltar ao topo 🔝](#contents)

## Android

### Lojas de aplicativos para Android
⛔ **Evite**
- Google Play Store [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **Em vez disso, use**
- [F-Droid](https://f-droid.org/) - O F-Droid é um catálogo instalável de aplicativos FOSS (software livre e de código aberto) para a plataforma Android.
	- [Droid-ify](https://github.com/Droid-ify/client) - Cliente leve do F-Droid com interface Material.
	- [Aurora Droid](https://github.com/whyorean/AuroraDroid) [💀](#icons) - Cliente FOSS moderno para o F-Droid.
	- [Foxy Droid](https://github.com/kitsunyan/foxy-droid) [💀](#icons) - Cliente não oficial do F-Droid no estilo do aplicativo clássico.
- [FossDroid](https://fossdroid.com/) - O Fossdroid tem como objetivo promover os aplicativos gratuitos e de código aberto mais novos, populares e em alta para Android.
- [SkyDroid](https://github.com/redsolver/skydroid) [💀](#icons) - Loja descentralizada de aplicativos para Android.
- [Obtainium](https://github.com/ImranR98/Obtainium) - Receba atualizações de aplicativos diretamente da fonte.
- [Accrescent](https://github.com/accrescent/accrescent) - Loja de aplicativos inovadora para Android, com foco em segurança, privacidade e usabilidade.

### Clientes alternativos da Google Play Store
- [Aurora Store](https://auroraoss.com/download/#aurora-store) - Cliente de interface de código aberto que serve como alternativa à Google Play Store, desenvolvido com foco em privacidade e design moderno.

### Ferramentas para remover excessos do Android
⛔ **Evite**
- ADB AppControl - Um wrapper simples para adb com uma [política de privacidade péssima](https://adbappcontrol.com/en/terms/), que coleta informações como dados do dispositivo e os aplicativos que você instala ou desinstala.

✅ **Em vez disso, use**
- [Universal Android Debloater Next Generation](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/) - Interface gráfica multiplataforma escrita em Rust, que usa ADB para remover excessos de dispositivos Android sem root. Melhore a privacidade, a segurança e a duração da bateria do seu dispositivo.

### Discador para Android
⛔ **Evite**

Discadores de terceiros encontrados na Play Store. Eles podem conter anúncios/rastreadores e solicitar permissões desnecessárias.

✅  **Em vez disso, use**
- [Fossify Phone](https://github.com/FossifyOrg/Phone) - Prático gerenciador de chamadas telefônicas com agenda, bloqueio de números e suporte a vários chips.

### Gerenciador de arquivos para Android
⛔ **Evite**

Gerenciadores de arquivos pré-instalados e aplicativos de terceiros encontrados na Play Store. Eles podem conter anúncios/rastreadores e solicitar permissões desnecessárias.

✅  **Em vez disso, use**

- [Amaze File Manager](https://github.com/TeamAmaze/AmazeFileManager) - Gerenciador de arquivos simples e atraente para Android, com Material Design.
- [Material Files](https://github.com/zhanghai/MaterialFiles) - Gerenciador de arquivos de código aberto com Material Design, para Android 5.0 ou superior.
- [Ghost Commander](https://f-droid.org/packages/com.ghostsq.commander/) - Gerenciador de arquivos com dois painéis.
- [🤖](#icons) [Fossify File Manager](https://github.com/FossifyOrg/File-Manager) - Gerenciador de arquivos de código aberto para Android, sem anúncios, rastreamento ou permissão de acesso à Internet. Licenciado sob GPL-3.0.

### Teclados para Android
⛔ **Evite**
- GBoard (Google) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- SwiftKey [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **Em vez disso, use**
- [AnySoftKeyboard](https://anysoftkeyboard.github.io/) - O único teclado para Android de que você vai precisar. Gratuito como na liberdade de expressão e como uma cerveja grátis.
- [FlorisBoard](https://github.com/florisboard/florisboard) - O FlorisBoard é um teclado gratuito e de código aberto para dispositivos Android 6.0 ou superior. Busca ser moderno, fácil de usar e personalizável, respeitando plenamente sua privacidade. Atualmente está em fase beta inicial.
- [Futo Keyboard](https://keyboard.futo.tech/) - Teclado moderno que respeita sua privacidade e segurança, com recursos como entrada de voz offline, digitação por gestos e correção automática inteligente.
- [Heliboard](https://github.com/HeliBorg/HeliBoard) - Teclado personalizável e de código aberto, atento à privacidade e baseado no AOSP / OpenBoard, com vários recursos e melhorias, incluindo suporte a dicionários personalizados, temas e digitação por gestos.
- [Indic Keyboard](https://gitlab.com/indicproject/indic-keyboard) - Teclado versátil para usuários de Android que queiram digitar mensagens, escrever e-mails e realizar outras tarefas em idiomas índicos e indianos, além do inglês.
- [OpenBoard](https://github.com/openboard-team/openboard) [💀](#icons) - Teclado 100% FOSS baseado no AOSP, sem dependências de binários do Google e que respeita sua privacidade. Não recebe mais atualizações, mas ainda funciona.
- [Simple Keyboard](https://github.com/rkkr/simple-keyboard) - Apenas um teclado simples, sem nada além disso.

### Galeria para Android

A galeria do seu celular é uma parte muito pessoal da sua vida: pode conter imagens e vídeos de momentos íntimos, lugares e pessoas importantes para você. Proteger sua privacidade é essencial para evitar o uso indevido dessas informações e também garantir a privacidade de amigos e familiares retratados nas fotos, que talvez não autorizem o compartilhamento de suas imagens.

> [!NOTE]
> Para armazenar e fazer backup das suas fotos de forma privada, consulte a seção [Armazenamento de fotos](#photo-storage).

⛔ **Evite**
- **Google Photos** tem problemas de privacidade. O serviço coleta muitos dados sobre você, como descrito na [política de privacidade](https://policies.google.com/privacy?hl=en-US#infocollect). O Google pode analisar suas fotos e sinalizá-las por diversos motivos, como mostra este [caso](https://petapixel.com/2022/08/22/google-flags-photos-of-fathers-sick-son-as-child-abuse-informs-police/). A empresa também usa suas fotos para aprimorar a tecnologia de IA.
- **Amazon Photos** também tem problemas de privacidade semelhantes. Assim como o Google Photos, coleta muitas informações da sua galeria. Você pode ver alguns exemplos dos dados coletados na lista de [**exemplos**](https://www.amazon.com/gp/help/customer/display.html?nodeId=468496&ref_=footer_privacy#GUID-8966E75F-9B92-4A2B-BFD5-967D57513A40__SECTION_87C837F9CCD84769B4AE2BEB14AF4F01).
- Galeria da **Samsung, Huawei, Xiaomi etc.**

✅ **Em vez disso, use**
- [Aves](https://github.com/deckerst/aves) - Belo aplicativo de galeria e explorador de metadados, desenvolvido para Android com Flutter.
- [Fossify Gallery](https://github.com/FossifyOrg/Gallery) - Fork do Simple Gallery. Reviva suas lembranças sem interrupções com esta galeria de fotos e vídeos.

### Android Launcher
⛔ **Evite**

Inicializadores de terceiros encontrados na Play Store. Eles podem conter anúncios/rastreadores e solicitar permissões desnecessárias.

✅  **Em vez disso, use**
- [Lawnchair](https://lawnchair.app/) - Não precisa de um slogan engenhoso.
- [OpenLauncher](https://github.com/OpenLauncherTeam/openlauncher) [💀](#icons) - Inicializador personalizável e de código aberto para Android.
- [KISS](https://kisslauncher.com/) - Inicializador de código aberto para Android, extremamente rápido e com menos de 200 kB.
- [Olauncher](https://github.com/tanujnotes/Olauncher) - Inicializador minimalista (e sem anúncios) para Android.
- [Pie Launcher](https://github.com/markusfisch/PieLauncher) - Inicializador de tela inicial para Android que usa um menu circular dinâmico em vez de ícones em posições fixas.
- [Bliss Launcher](https://gitlab.e.foundation/e/os/BlissLauncher3) - Inicializador padrão do sistema operacional /e/, baseado no Android.
Permite criar e navegar facilmente por grupos de aplicativos e exibe indicadores de notificações nos ícones dos aplicativos.

[Voltar ao topo 🔝](#contents)

## Inteligência artificial

Ao usar serviços de IA baseados na nuvem, os dados inseridos costumam ser coletados e armazenados pelo provedor. Isso pode incluir não apenas o conteúdo das solicitações, mas também metadados, como horários ou endereços IP. Dependendo das políticas de privacidade, servidores de terceiros podem permitir que funcionários, parceiros ou até outros usuários acessem seus dados. Eles podem ser usados para diversos fins, inclusive treinamento de modelos, pesquisa ou marketing. Suas solicitações a um serviço de IA de terceiros podem ser associadas às informações do usuário e aos dados de pagamento, vinculando seus dados à sua identidade.

#### ChatGPT

- [Jan](https://github.com/janhq/jan) - Alternativa de código aberto ao ChatGPT, que funciona 100% offline no seu computador.
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Inferência do modelo LLaMA, do Facebook, em C/C++ puro, para execução local na CPU.
- [LocalAI](https://github.com/mudler/LocalAI) - API local simples e auto-hospedada, desenvolvida pela comunidade em Go e compatível com OpenAI. Pode substituir a OpenAI diretamente e funcionar na CPU de computadores comuns.
- [ollama](https://github.com/ollama/ollama) - Comece a usar Llama 2 e outros grandes modelos de linguagem localmente.
- [PasteGuard](https://github.com/sgasser/pasteguard) - Proxy de privacidade para APIs de LLM que oculta informações pessoais identificáveis e segredos antes que cheguem aos provedores de nuvem. Auto-hospedado, compatível com OpenAI e capaz de restaurar os dados originais nas respostas.
- [Shimmy](https://github.com/Michael-A-Kuykendall/shimmy) - Servidor de inferência de IA com foco em privacidade, compatível com a API da OpenAI, sem dependências da nuvem e com processamento local de modelos.
- [Tinfoil](https://tinfoil.sh/) - Chat de IA e inferência compatível com OpenAI na nuvem, com privacidade verificável. Usa computação confidencial da NVIDIA e código aberto registrado em um log de transparência para permitir verificação de ponta a ponta.
- [Open WebUI](https://openwebui.com) - Interface Web auto-hospedada para Ollama e outros modelos locais, que oferece um chat privado no estilo do ChatGPT. Licenciado sob BSD-3.
- [LibreChat](https://librechat.ai) - Interface de chat auto-hospedada que conecta vários modelos de IA em uma interface privada sob seu controle. Código aberto, licenciado sob MIT.

#### Programação com IA

- [Continue](https://github.com/continuedev/continue) - Piloto automático de código aberto para VS Code e JetBrains — a maneira mais fácil de programar com qualquer LLM.
- [Cline](https://cline.bot/) - Programação com IA de código aberto para VSCode. Acompanhe cada decisão e use seus próprios modelos.
	- [Zoo Code](https://github.com/Zoo-Code-Org/Zoo-Code) - Fork do Cline com algumas melhorias; sucessor comunitário do descontinuado Roo Code.
- [OpenCode](https://github.com/anomalyco/opencode/) - Agente de programação de código aberto. Conecte modelos locais ou qualquer provedor de sua preferência.
- [Aider](https://aider.chat) - Programador parceiro com IA para o terminal, que edita código no repositório Git local usando suas próprias chaves de API. Licenciado sob Apache-2.0.
- [Tabby](https://tabby.tabbyml.com) - Assistente auto-hospedado de preenchimento de código, executado no seu próprio hardware como alternativa ao GitHub Copilot. Licenciado sob Apache-2.0.

#### Conversão de texto em fala

- [Kokoro FastAPI](https://github.com/remsky/Kokoro-FastAPI) - Wrapper para FastAPI em contêiner Docker do modelo de conversão de texto em fala [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M), com suporte a CPU, ONNX e GPU NVIDIA, processamento e junção automática.
- [Piper](https://github.com/OHF-Voice/piper1-gpl) - Sistema neural local de conversão de texto em fala, rápido, com ótima sonoridade e otimizado para o Raspberry Pi 4.
- [Espeak](https://github.com/espeak-ng/espeak-ng) - O eSpeak NG é um sintetizador de fala de código aberto que oferece suporte a mais de cem idiomas e sotaques. As vozes soam um tanto robóticas.
- [Chatterbox](https://github.com/resemble-ai/chatterbox) - Modelo local de conversão de texto em fala com clonagem de voz, executado inteiramente na sua máquina. Código aberto, licenciado sob MIT.

#### Conversão de fala em texto

- **Modelos**
	- [Moonshine](https://github.com/moonshine-ai/moonshine) - Reconhecimento automático de fala (ASR) rápido e preciso para dispositivos de borda.
	- [OpenAI Whisper](https://github.com/openai/whisper) - O Whisper é um modelo de reconhecimento de fala de uso geral que pode ser executado localmente, sem conexão. Transcreve áudio de e para vários idiomas.
		- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - Inferência de alto desempenho do modelo de reconhecimento automático de fala (ASR) Whisper, da OpenAI.
		- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) - Reimplementação do Whisper com CTranslate2, que transcreve localmente até quatro vezes mais rápido. Licenciado sob MIT.
	- [ParakeetTDT](https://parakeettdt.com/) - Transcrição de áudio eficiente. Converta fala em texto com velocidade e precisão sem precedentes usando o modelo avançado de reconhecimento de fala por IA da NVIDIA.

- **Aplicativos e serviços**
	- [OpenWhispr](https://github.com/OpenWhispr/openwhispr) - Aplicativo de ditado e produtividade que converte voz em texto, com agentes de IA, transcrição de reuniões, notas e reconhecimento de fala local/na nuvem. Prioriza a privacidade e está disponível em várias plataformas. Alternativa de código aberto ao wisprflow.
	- [Sasayaki](https://github.com/pluja/sasayaki) - Pequeno aplicativo de ditado para Android que transforma a fala em texto claro.
	- [Speaches](https://github.com/speaches-ai/speaches) - Servidor compatível com a API da OpenAI, que oferece transcrição em fluxo contínuo, tradução e geração de fala.

#### Geração de imagens

- [ComfyUI](https://github.com/Comfy-Org/ComfyUI) - O ComfyUI permite executar fluxos avançados de geração de imagens por meio de uma interface completa. Disponível para Windows, Linux e macOS.
- [InvokeAI](https://github.com/invoke-ai/InvokeAI) - Gere e crie conteúdo visual impressionante localmente com as mais recentes tecnologias de IA.
- [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) - Interface Web local para Stable Diffusion e outros modelos de difusão, criada sobre uma infraestrutura ComfyUI. Licenciada sob MIT.

[Voltar ao topo 🔝](#contents)

## Favoritos
⛔ **Evite**
- Evernote Web Clipper - [Política de privacidade ruim](https://tosdr.org/en/service/207). [Os aplicativos têm muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.evernote/latest/) e exigem permissões demais.

✅  **Em vez disso, use**
- [42links](https://42links.tuxproject.de) - Serviço minimalista, de código aberto e auto-hospedado para armazenar favoritos.
- [Floccus](https://floccus.org/) - Sincronize seus favoritos com privacidade entre navegadores e dispositivos.
- [Grimoire](https://github.com/goniszewski/grimoire) - Gerenciador de favoritos moderno, de código aberto e auto-hospedado.
- [Karakeep](https://karakeep.app/) - (anteriormente Hoarder) Aplicativo de código aberto para «salvar tudo nos favoritos», que usa IA para marcar automaticamente o conteúdo que você adiciona.
- [LinkAce](https://github.com/Kovah/LinkAce) - Arquivo de favoritos de código aberto e auto-hospedado, que monitora e organiza os links salvos (GPL-3.0).
- [LinkDing](https://github.com/sissbruecker/linkding) - Gerenciador de favoritos de código aberto e auto-hospedado, criado para ser minimalista, rápido e fácil de executar com Docker (MIT).
- [Shiori](https://github.com/go-shiori/shiori) - Gerenciador de favoritos de código aberto e auto-hospedado, escrito em Go, que pode ser usado pela CLI ou como aplicativo Web (MIT).
- [Wallabag](https://wallabag.org/) - Serviço de leitura posterior de código aberto, opcionalmente auto-hospedado. Também oferece um serviço de hospedagem pago que prioriza a privacidade.
- [Linkwarden](https://linkwarden.app) - Gerenciador de favoritos auto-hospedado que salva e arquiva cópias completas das páginas que você coleta (AGPL-3.0).
- [Readeck](https://readeck.org) - Aplicativo auto-hospedado de leitura posterior, distribuído como um único binário, que salva e arquiva artigos para leitura offline (AGPL-3.0).

### Gerenciamento de anotações e destaques em livros e na Web

- [Blasta](https://git.xmpp-it.net/sch/Blasta) - Gerenciador colaborativo de favoritos para organizar conteúdo online.
- [Hypothesis](https://github.com/hypothesis/h/) - Faça anotações na Web, com qualquer pessoa, em qualquer lugar.
- [Kobuddy](https://github.com/karlicoss/kobuddy) - Exporte os favoritos e as anotações do seu leitor Kobo para um arquivo .txt.

[Voltar ao topo 🔝](#contents)

## CAPTCHAs
⛔ **Evite**

Os CAPTCHAs do Google usam cookies para rastrear usuários e classificar seus endereços IP.

- Google reCAPTCHA [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- hCaptcha [![](https://shields.tosdr.org/en_2207.svg)](https://tosdr.org/en/service/2207)

✅  **Em vez disso, use**
- [Altcha.org](https://altcha.org) - Alternativa gratuita, de código aberto e auto-hospedada a CAPTCHA, que usa um mecanismo de prova de trabalho.
- [mCaptcha](http://mcaptcha.org/) ([repositório](https://github.com/mCaptcha/mCaptcha)) - Sistema CAPTCHA de código aberto com uma experiência de uso fluida. O mCaptcha usa prova de trabalho (PoW) baseada em SHA256 para limitar a taxa de solicitações dos usuários.
- [Private Captcha](https://github.com/PrivateCaptcha/PrivateCaptcha) - Alternativa auto-hospedada a CAPTCHA com prova de trabalho, criada na União Europeia e que prioriza a privacidade.

[Voltar ao topo 🔝](#contents)

## Calendário

⛔ **Evite**

- **Google Calendar** - Rastreia seus eventos, integra-se ao ecossistema de publicidade do Google e armazena seus dados nos servidores da empresa sem criptografia de ponta a ponta.

✅  **Em vez disso, use**

- [🤖](#icons) [Etar](https://github.com/Etar-Group/Etar-Calendar) - Aplicativo de calendário de código aberto para Android, compatível com qualquer servidor CalDAV.
- [🤖](#icons) [Fossify Calendar](https://github.com/FossifyOrg/Calendar) - Aplicativo de calendário offline simples para Android, com suporte a widgets.
- [🤖](#icons) [KashCal](https://github.com/KashCal/KashCal) - Calendário para Android que prioriza o uso offline, com sincronização com iCloud/CalDAV, pesquisa de texto completo, eventos recorrentes e widget para a tela inicial. Licenciado sob Apache 2.0.
- [Nextcloud Calendar](https://apps.nextcloud.com/apps/calendar) - Aplicativo de calendário para Nextcloud, com suporte a CalDAV. Pode ser auto-hospedado.
- [Proton Calendar](https://proton.me/calendar) - Calendário da Proton com criptografia de ponta a ponta. Faz parte do ecossistema de privacidade da Proton.

[Voltar ao topo 🔝](#contents)

## Sistemas de comentários

⛔ **Evite**

- **Disqus** - Os sites que usam o serviço contêm muitos rastreadores. De acordo com a política de privacidade, o Disqus coleta: endereço IP, ID exclusivo de cookie, ID do dispositivo, dados de login, tipo e versão do navegador, fuso horário e localização, tipos e versões dos plug-ins do navegador, sistema operacional, plataforma e outras tecnologias dos dispositivos usados para acessar o serviço.

✅  **Em vez disso, use**

- [Comentario](https://comentario.app) - Sistema de comentários para a Web pequeno, de código aberto e com foco em privacidade, que adiciona discussões a páginas simples e sem graça.
- [Disgus](https://github.com/carlitoplatanito/disgus) - Comentários incorporáveis ao seu site, baseados no Nostr. Como o Disqus, mas com Nostr.
- [Isso](https://github.com/isso-comments/isso) - Servidor de comentários leve e auto-hospedado, escrito em Python e JavaScript. Foi criado para substituir o Disqus diretamente.
- [Remark42](https://remark42.com) - Sistema de comentários auto-hospedado, leve e simples (mas funcional), que não espiona os usuários.
- [Giscus](https://giscus.app) - Sistema de comentários que armazena discussões no GitHub Discussions, sem banco de dados, anúncios ou rastreamento. Código aberto, licenciado sob MIT.

[Voltar ao topo 🔝](#contents)

## Ofuscação
### Imagens
- [Fawkes](https://github.com/Shawn-Shan/fawkes) [💀](#icons) - Ferramenta que protege a privacidade contra sistemas de reconhecimento facial.
  - [CloakMe](https://github.com/pluja/CloakMe) [💀](#icons) - Interface Web para o algoritmo Fawkes.
- [ImageScrubber](https://github.com/everestpipkin/image-scrubber) [💀](#icons) - Ferramenta amigável, executada no navegador, para anonimizar fotografias tiradas em protestos ([versão hospedada fornecida por everestpipkin](https://everestpipkin.github.io/image-scrubber/)).

### Texto
- [Stegcloak](https://stegcloak.surge.sh/) [💀](#icons) - Oculte segredos em texto simples com caracteres invisíveis, protegendo-os com senhas ([repositório](https://github.com/kurolabs/stegcloak)).

[Voltar ao topo 🔝](#contents)

## Armazenamento em nuvem
⛔ **Evite**
- **Google Drive** - Pertence ao Google e tem uma política de privacidade [muito ruim](https://tosdr.org/en/service/217). Os dados ficam em servidores remotos da empresa, onde você perde o controle sobre eles. O serviço usa rastreadores e não oferece criptografia.
- **DropBox** - [Política de privacidade ruim](https://tosdr.org/en/service/270). O aplicativo contém [vários rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.dropbox.android/latest/) e exige muitas permissões.
- **OneDrive** - Pertence à Microsoft e tem uma política de privacidade [muito ruim](https://tosdr.org/en/service/244). Os dados ficam em servidores remotos da empresa, onde você perde o controle sobre eles. O serviço usa rastreadores e não oferece criptografia.

✅  **Em vez disso, use**
- [Nextcloud](https://nextcloud.com/) - Plataforma de produtividade auto-hospedada e de código aberto, que mantém você no controle.
- [Seafile](https://www.seafile.com/en/home/) - Sincronização e compartilhamento de arquivos de alto desempenho. Inclui wiki, edição WYSIWYG e outros recursos de gestão do conhecimento.
- [Peergos](https://peergos.org/) - Espaço online seguro e privado para armazenar, compartilhar e visualizar fotos, vídeos, músicas e documentos. Também inclui calendário, feed de notícias, listas de tarefas, chat e cliente de e-mail. É de código aberto e pode ser auto-hospedado.
- [Proton Drive](https://proton.me/drive) - Cofre suíço para arquivos, com criptografia de ponta a ponta que protege seus dados. [Leia este artigo sobre a prisão de uma ativista climática](https://proton.me/blog/climate-activist-arrest).
- [PrivateStorage](https://private.storage/) - Armazenamento em nuvem e sincronização de pastas sem conta, com foco em privacidade e criptografia no cliente.

**Outras ferramentas úteis**
- [Cryptomator](https://cryptomator.org) - O Cryptomator criptografa seus dados de forma rápida e fácil. Depois, você pode enviá-los protegidos ao seu serviço de nuvem favorito.
- [Syncthing](https://syncthing.net/) - Programa de sincronização contínua de arquivos. Sincroniza arquivos em tempo real entre dois ou mais computadores, protegendo-os com segurança de olhares curiosos.
- [Rclone](https://rclone.org/) - Programa de linha de comando para gerenciar arquivos em serviços de armazenamento na nuvem. É uma alternativa repleta de recursos às interfaces Web dos provedores e, assim como as ferramentas listadas acima, permite criptografar arquivos na nuvem.
- [Restic](https://restic.net/) - Programa de linha de comando para gerenciar arquivos em vários provedores de armazenamento na nuvem. O Restic usa criptografia por padrão. Entre seus recursos notáveis estão navegar pelo armazenamento em snapshots semelhantes aos do Git, sem custo adicional de espaço, deduplicar dados e economizar bastante espaço por meio da compactação.

[Voltar ao topo 🔝](#contents)

## Ferramentas para criadores

Prefira alternativas de código aberto e P2P que priorizem a privacidade dos dados, eliminem a interferência de terceiros e ofereçam recursos transparentes, apoiados pela comunidade, em vez de ferramentas populares como Riverside.fm, Restream e Camtasia.

- [vdo.ninja](https://vdo.ninja/) - Ferramenta poderosa que permite trazer transmissões de vídeo remotas para o OBS ou outros programas de estúdio via WebRTC.
	- [socialstream.ninja](https://github.com/steveseguin/social_stream#readme) - Reúna suas transmissões de mensagens de redes sociais ao vivo e muito mais.
- [OBS Studio](https://obsproject.com/) - Software gratuito e de código aberto para gravação de vídeo e transmissão ao vivo.
- [Screenity](https://screenity.io/) - Gravador de tela gratuito, privado e fácil de usar.

[Voltar ao topo 🔝](#contents)

## Bancos de dados
[![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
⛔ Evite usar bancos de dados proprietários que você não controla, como o Google Firebase.

✅ Em vez disso, use
- [Appwrite](https://appwrite.io/) - Servidor de back-end seguro e de código aberto para desenvolvedores Web, mobile e Flutter.
- [Supabase](https://supabase.com/) - Alternativa de código aberto ao Firebase ([auto-hospedagem limitada](https://github.com/supabase/supabase/issues/4934) [documentação de auto-hospedagem](https://github.com/supabase/supabase/issues/4440#issuecomment-992108832)).
- [Pocketbase](https://pocketbase.io/) - Back-end de código aberto escrito em Go e distribuído em um único arquivo.
- [TrailBase](https://trailbase.io/) - Alternativa de código aberto ao Firebase, composta por um único executável, criada com Rust e SQLite, com APIs REST e em tempo real seguras quanto aos tipos, autenticação e interface administrativa. Licenciada sob OSL-3.0.
- [Baserow](https://baserow.io/) - Banco de dados e planilha sem código, auto-hospedados, que funcionam como alternativa de código aberto ao Airtable. O núcleo é licenciado sob MIT.

[Voltar ao topo 🔝](#contents)

## Ferramentas para desenvolvedores
- [Beekeeper Studio](https://www.beekeeperstudio.io) - Editor SQL e gerenciador de bancos de dados de código aberto, cuja declaração de missão inclui o compromisso com a privacidade.

### IDEs
⛔ Evite IDEs proprietárias repletas de rastreadores e telemetria.

✅ Em vez disso, use
- [Neovim](https://neovim.io/) - Editor de texto baseado no Vim e altamente extensível.
- [VSCodium](https://vscodium.com/) - Binários de Software Livre e de Código Aberto do VSCode. O código-fonte do VSCode é aberto (licenciado sob MIT), mas o produto disponível para download (Visual Studio Code) está sob [uma licença que não é FLOSS](https://code.visualstudio.com/license) e contém telemetria/rastreamento.

[Voltar ao topo 🔝](#contents)

## Aplicativos de relacionamento

Aplicativos como o Tinder coletam e vendem informações pessoais e íntimas. Em particular, já se descobriu que o Tinder [cobra de usuários até cinco vezes mais pelo mesmo serviço](https://www.mozillafoundation.org/en/blog/new-research-tinders-opaque-unfair-pricing-algorithm-can-charge-users-up-to-five-times-more-for-same-service/), [faz estimativas sobre sua inteligência e outros dados psicométricos e os vende a terceiros](https://www.reddit.com/r/privacy/comments/k7x4s7/tinder_extrapolates_estimations_on_your/), [talvez saiba mais sobre você do que você mesmo](https://www.theguardian.com/technology/2017/sep/26/tinder-personal-data-dating-app-messages-hacked-sold) e pratica muitas outras coisas ruins que você pode encontrar na internet.

⛔ **Evite**
- [![](https://shields.tosdr.org/en_462.svg)](https://tosdr.org/en/service/462)
- Grindr
- Badoo
- Lovoo

✅  **Em vez disso, use**
- [Alovoa](https://alovoa.com/) - Plataforma de relacionamento gratuita e de código aberto que respeita sua privacidade.

[Voltar ao topo 🔝](#contents)

## Ferramentas de design

A predominância da **Adobe** em ferramentas de design limita as opções dos designers e compromete sua privacidade. A [falta de suporte ao Linux](https://helpx.adobe.com/in/download-install/kb/operating-system-guidelines.html) restringe os designers ao Windows ou macOS. Além disso, a [coleta de dados pela Creative Cloud](https://tosdr.org/en/service/417) e os [rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.adobe.psmobile/latest/) da Adobe aumentam ainda mais as preocupações com a privacidade. A empresa também pode estar [usando o trabalho dos usuários para treinar suas IAs](https://mastodon.art/@Krita/109632425661190494), o que pode gerar problemas de propriedade intelectual. Por esses motivos, designers podem considerar alternativas de código aberto que respeitam a privacidade e evitam a maioria desses problemas.

### InDesign

✅  **Em vez disso, use**
- [Scribus](https://www.scribus.net/) - Software gratuito e de código aberto para editoração eletrônica (DTP), disponível para a maioria dos sistemas operacionais de desktop. Foi desenvolvido para diagramação, composição tipográfica e preparação de arquivos para equipamentos profissionais de fotocomposição. O Scribus também pode criar apresentações e formulários PDF animados e interativos.

### Photoshop / Illustrator

✅  **Em vez disso, use**
- [GIMP](https://www.gimp.org/) - Editor de imagens rasterizadas gratuito e de código aberto, usado para manipulação (retoque) e edição de imagens, desenho à mão livre, conversão entre formatos de imagem e tarefas mais especializadas. Não foi projetado para desenho, embora alguns artistas e criadores o utilizem para isso.
- [Inkscape](https://inkscape.org/) - Editor de gráficos vetoriais gratuito e de código aberto para GNU/Linux, Windows e macOS. Oferece muitos recursos e é amplamente usado em ilustrações artísticas e técnicas, como desenhos animados, clip-art, logotipos, tipografia, diagramas e fluxogramas.
- [Krita](https://krita.org/) - Editor de imagens rasterizadas gratuito e de código aberto, projetado principalmente para arte digital e animação 2D.
- [Excalidraw](https://github.com/excalidraw/excalidraw) - Quadro branco virtual para esboçar diagramas com aparência de desenho à mão.

### Figma

✅  **Em vez disso, use**
- [Penpot](https://penpot.app/) - Plataforma de design e prototipagem de código aberto para equipes de produto.

[Voltar ao topo 🔝](#contents)

## Domínios e hospedagem
⛔ Evite registradores de domínio que invadam sua privacidade.

✅ Em vez disso, use
- [OrangeWebsite](https://www.orangewebsite.com/) - Serviço islandês de hospedagem Web que defende a liberdade de expressão, com cadastro anônimo e pagamento em criptomoeda ou dinheiro.
- [1984 Hosting](https://1984.hosting/) - Serviço islandês de hospedagem e registro de domínios, com foco em direitos civis, Monero e cadastro anônimo.
- [Veja mais em kycnot.me (categoria VPS)](https://kycnot.me/?categories=vps) - Provedores de VPS e hospedagem sem exigência de KYC.

[Voltar ao topo 🔝](#contents)

## Gerenciadores de downloads

- [Persepolis Download Manager](https://github.com/persepolisdm/persepolis) - O Persepolis é um gerenciador de downloads e uma interface gráfica para o Aria2. Escrito em Python, é um exemplo de software livre e de código aberto. Foi desenvolvido para distribuições GNU/Linux, BSDs, macOS e Microsoft Windows.
- [Motrix](https://github.com/agalwood/Motrix) - Gerenciador de downloads repleto de recursos.
- [Xtreme Download Manager](https://github.com/subhra74/xdm) - O Xtreme Download Manager (XDM) é uma ferramenta poderosa que aumenta a velocidade de downloads em até 500%, salva vídeos em streaming do YouTube, DailyMotion, Facebook, Vimeo, Google Video e mais de mil outros sites, retoma downloads interrompidos ou com falha, agenda e converte downloads.
- [axel](https://github.com/axel-download-accelerator/axel) - Acelerador de downloads leve para CLI. Oferece suporte aos protocolos HTTP, HTTPS, FTP e FTPS.

[Voltar ao topo 🔝](#contents)

## E-books

⛔ **Evite**

Plataformas comerciais de e-books rastreiam seus hábitos de leitura, vinculam compras a contas que podem ser revogadas e exigem ativação constante pela internet.

- **Amazon Kindle** - Rastreia a atividade de leitura, exige uma conta Amazon e tem um histórico documentado de [exclusões remotas](https://www.nytimes.com/2009/07/18/technology/18kindle.html).
- **Google Play Books** - Vinculado a uma conta Google, rastreia dados de leitura e não oferece modo exclusivamente offline.
- **Kobo / Apple Books** - Exigem contas e, por padrão, sincronizam dados de leitura com os servidores das empresas.

✅ **Em vez disso, use**

- [Calibre](https://calibre-ebook.com/) - Gerenciador de e-books de código aberto para Linux, Windows e macOS, com conversão de formatos, edição de metadados e leitor integrado (GPL-3.0).
- [Kavita](https://github.com/Kareadita/Kavita) - Biblioteca digital multiplataforma e auto-hospedada para e-books e quadrinhos, com leitor Web integrado (GPL-3.0).
- [Komga](https://github.com/gotson/komga) - Servidor de mídia auto-hospedado para quadrinhos, revistas e e-books, com interface Web responsiva e suporte a OPDS (MIT).

[Voltar ao topo 🔝](#contents)

## Criptografia
Lembre-se: sem criptografia forte, muitas pessoas poderão espionar você sistematicamente.

- [Veracrypt](https://www.veracrypt.fr/en/Home.html) - O VeraCrypt é um software gratuito e de código aberto para criptografia de discos no Windows, macOS e Linux.
- [Shufflecake](https://shufflecake.net/index.html) - Software gratuito e de código aberto para criar, no Linux, vários sistemas de arquivos ocultos com negação plausível.
- [Hat.sh](https://hat.sh/) - Criptografia de arquivos gratuita, rápida, segura e sem servidor.
- [Cryptomator](https://cryptomator.org/) - O Cryptomator criptografa seus dados de forma rápida e fácil. Depois, você pode enviá-los protegidos ao seu serviço de nuvem favorito.
- [Stegcloak](https://stegcloak.surge.sh/) [💀](#icons) - Oculte segredos em texto simples com caracteres invisíveis e proteja-os com senhas.
- [Photok](https://github.com/leonlatsch/Photok) - O Photok é um cofre gratuito para fotos. Armazena suas fotos criptografadas no dispositivo e as oculta de outras pessoas.
- [age](https://age-encryption.org) - Ferramenta moderna de linha de comando para criptografia de arquivos, com chaves pequenas e sem necessidade de gerenciar configuração ou chaveiro. Código aberto, licenciada sob BSD-3.
- [Tomb](https://dyne.org/software/tomb/) - Ferramenta de linha de comando para criar e gerenciar pastas de armazenamento criptografadas no GNU/Linux, baseada no LUKS e no cryptsetup padrão.

### Criptografia do sistema operacional

- [Cryptsetup](https://gitlab.com/cryptsetup/cryptsetup) - Criptografia de disco completo para Linux. O Cryptsetup é um utilitário usado para configurar facilmente a criptografia de disco baseada
no módulo do kernel DMCrypt.

[Voltar ao topo 🔝](#contents)

## Gerenciamento e compartilhamento de arquivos
⛔ **Evite**
- **WeTransfer** - [Política de privacidade ruim](https://tosdr.org/en/service/214). Os arquivos não são criptografados de ponta a ponta. O site tem muitos serviços de análise de dados e rastreadores.
- **SendAnywhere** - Não usa criptografia de ponta a ponta. O site tem muitos serviços de análise de dados e rastreadores do Facebook, Google, Cloudflare...

✅ **Em vez disso, use**
- [Blaze](https://blaze.vercel.app/) - Maneira rápida, P2P e radicalmente diferente de transferir arquivos.
- [Blindsend](https://github.com/blindnet-io/blindsend) [💀](#icons) - Ferramenta de código aberto para troca privada de arquivos com criptografia de ponta a ponta.
- [Croc](https://github.com/schollz/croc) - Envie arquivos de um computador para outro com facilidade e segurança.
- [Dat-cp](https://github.com/tom-james-watson/dat-cp) [💀](#icons) - Copie arquivos entre hosts em uma rede usando a rede ponto a ponto Dat.
- [Destiny](https://leastauthority.com/community-matters/destiny/) - Envie arquivos diretamente ao destinatário em tempo real. Desenvolvido para e com organizações de direitos humanos como uma alternativa gratuita de tecnologia para aprimorar a privacidade.
- [Gokapi](https://github.com/Forceu/Gokapi) - Alternativa leve e auto-hospedada ao Firefox Send, sem uploads públicos. Compatível com AWS S3.
- [Lufi](https://framagit.org/fiat-tux/hat-softwares/lufi) - Vamos enviar esse arquivo — software de compartilhamento de arquivos.
- [Localsend](https://localsend.org/) - Compartilhe arquivos com dispositivos próximos. Gratuito, de código aberto e multiplataforma.
- [Magic Wormhole](https://github.com/magic-wormhole/magic-wormhole) - Envie arquivos com segurança de um computador para outro.
- [OnionShare](https://github.com/onionshare/onionshare) - Ferramenta de código aberto que permite compartilhar arquivos com segurança e anonimato, hospedar sites e conversar com amigos pela rede Tor.
- [Paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) - Versão aprimorada do paperless-ng, com suporte da comunidade.
- [PairDrop](https://github.com/schlagmichdoch/PairDrop) - Versão aprimorada do Snapdrop, que também permite parear dispositivos e compartilhar arquivos fora da sua rede.
- [QRcp](https://github.com/claudiodangelis/qrcp) - Transfira arquivos do computador para o dispositivo móvel por Wi-Fi, lendo um código QR sem sair do terminal.
- [Send](https://gitlab.com/timvisee/send) - Compartilhamento de arquivos simples e privado. (Fork do Mozilla Send.)
- [Sharik](https://github.com/marchellodev/sharik) [💀](#icons) - O Sharik funciona por Wi-Fi ou tethering (ponto de acesso Wi-Fi). Não precisa de conexão com a internet. Disponível para Android, iOS, Linux, macOS e Windows.
- [Snapdrop](https://github.com/RobinLinus/snapdrop) - Aplicativo Web progressivo para compartilhamento local de arquivos, inspirado no AirDrop da Apple.
- [Winden](https://winden.app/) - Versão prática do Magic Wormhole que você pode usar no navegador, sem precisar instalar um aplicativo.
- [Yopass](https://github.com/jhaals/yopass) - Compartilhamento seguro de segredos, senhas e arquivos.
- [scrt.link](https://scrt.link/file) - Transferência de arquivos com criptografia de ponta a ponta. Armazenamento de até 100 GB por 30 dias, na Suíça.

[Voltar ao topo 🔝](#contents)

## Saúde e bem-estar
⛔ Sua saúde é uma parte **muito** importante dos seus **dados privados** e você deve se preocupar **bastante** com ela. Além disso, dados de saúde estão entre os mais cobiçados. Evite aplicativos do Google, Fitbit, Huawei, Xiaomi ou de qualquer empresa que queira coletar seus dados pessoais.

Se precisar de um aplicativo para **acompanhar o ciclo menstrual**, evite aplicativos como Clue, Period Tracker etc. Esses aplicativos cor-de-rosa tão fofinhos são ávidos por dados sobre seu ciclo menstrual e sua vida íntima e certamente os venderão. Proteja sua vida privada. Confira a lista abaixo para encontrar boas alternativas.

✅  **Em vez disso, use**

### Rastreadores de atividades físicas

- [🤖](#icons) [Fitotrack](https://codeberg.org/jannis/FitoTrack) - Rastreador de atividades físicas para Android com foco na privacidade.
- [🤖](#icons) [OpenTracks](https://codeberg.org/OpenTracksApp/OpenTracks) - Aplicativo de monitoramento esportivo que respeita totalmente sua privacidade.
- [🤖](#icons) [Gadgetbridge](https://codeberg.org/Freeyourgadget/Gadgetbridge) - Alternativa gratuita e sem nuvem aos aplicativos Android de código fechado dos fabricantes de dispositivos.
- [FitTrackee](https://codeberg.org/FitTrackee/FitTrackee) - Aplicativo Web auto-hospedado para registrar e analisar atividades ao ar livre a partir de arquivos GPS, como alternativa ao Strava (AGPL-3.0).

### Planejadores de treinos

- [wger](https://wger.de/en/software/features) - Aplicativo Web gratuito, de código aberto e auto-hospedado para gerenciar exercícios, treinos e alimentação.

### Alimentação
- [OpenFoodFacts](https://world.openfoodfacts.org/) - O Open Food Facts é um banco de dados de produtos alimentícios criado por todos e para todos. Você pode usá-lo para fazer escolhas alimentares melhores.
    - [OFF Apps](https://world.openfoodfacts.org/open-food-facts-mobile-app) - Aplicativos de código aberto para Android e iOS que leem códigos de barras de alimentos e mostram informações sobre ingredientes, aditivos e nutrição.

### Rastreadores do ciclo menstrual
- [🤖](#icons) [Bluemoon](https://gitlab.com/ngrob/bluemoon-android) - Aplicativo de código aberto e que respeita a privacidade para acompanhar a menstruação. Sua menstruação, seus dados!
- [🤖](#icons) [Drip](https://dripapp.org/) - Acompanhamento do ciclo menstrual e da fertilidade. Tudo o que você informa permanece no dispositivo.
- [Euki](https://eukiapp.org/) - O rastreador menstrual que não rastreia você.
- [🤖](#icons) [Periodical](https://codeberg.org/askaaron/periodical) - Calendário para acompanhar a menstruação e calcular possíveis dias férteis.
- [Poppy](https://poppy.usenostr.org) - Rastreador menstrual privado que funciona no navegador. Armazena os dados localmente e pode sincronizá-los e fazer backup por meio de relays Nostr, sem servidor nem conta Poppy, com tudo criptografado de ponta a ponta.

### Saúde médica
- [Fasten](https://github.com/fastenhealth/fasten-onprem) [💀](#icons) - Agregador de prontuários médicos eletrônicos pessoais e familiares, de código aberto e auto-hospedado, projetado para integrar-se a milhares de seguradoras, hospitais e clínicas.

[Voltar ao topo 🔝](#contents)

## Fontes
⛔ **Evite**
- Google Fonts (no selfhosted) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **Em vez disso, use**
### Alternativas ao Google Fonts
- [coolLabs Fonts](https://fonts.coollabs.io/) - Alternativa direta ao Google Fonts que respeita a privacidade.
- [Bunny Fonts](https://fonts.bunny.net/) - Plataforma de fontes Web de código aberto que prioriza a privacidade e busca devolvê-la à internet.

### Fundições tipográficas
- [Velvetyne](https://www.velvetyne.fr/) - Fundição tipográfica francesa que distribui fontes livres e de código aberto, gratuitas para uso pessoal e comercial.
- [OpenFoundry](https://open-foundry.com/) - Plataforma selecionada que apresenta fontes de código aberto, gratuitas para uso e modificação.

[Voltar ao topo 🔝](#contents)

## Formulários
⛔ **Evite**
- Google Forms [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **Em vez disso, use**
- [TypeBot](https://typebot.com) - Formulários conversacionais de código aberto.
- [CryptPad Forms](https://cryptpad.fr/form/) - Parte da suíte de colaboração CryptPad, de código aberto e com criptografia de ponta a ponta.
- [FramaForms](https://framaforms.org/) - Crie pesquisas online com facilidade e respeite seu público.
- [Formbricks](https://formbricks.com) - Criador auto-hospedado de pesquisas e formulários para coletar respostas sem entregar seus dados a terceiros (AGPL-3.0).

[Voltar ao topo 🔝](#contents)

## Jogos

### Mario Kart

A Nintendo [coleta dados dos usuários](https://www.reddit.com/r/privacy/comments/qtj9xt/til_nintendo_collects_data_from_switch_owners/) e, se você desativar esse recurso, pode [ativá-lo novamente](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretly-turns-on-user-data-sharing-adSyV7t35NPg). Além disso, há um plano pago que nem todos podem pagar.

✅  **Em vez disso, use**

- [SuperTuxKart](https://supertuxkart.net/Main_Page) - Jogo de corrida arcade 3D de código aberto, com diversos personagens, pistas e modos de jogo.
- [Sonic Robo Blast 2 Kart](https://mb.srb2.org/addons/srb2kart.2435/) - Jogo de corrida de kart em estilo clássico, com pistas bonitas e itens malucos.

### Minecraft

[![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

O jogo pertence à Microsoft. Como se isso não bastasse, desde 11 de março de 2022 é necessária uma conta Microsoft para jogar Minecraft. A Microsoft bloqueia contas pouco tempo depois da criação e [obriga o usuário](https://github.com/MultiMC/Launcher/issues/4093) [a fornecer](https://www.reddit.com/r/privacy/comments/e6x27o/microsoft_forcing_me_to_give_then_my_phone_number/) um **número de telefone**. Consulte: [FAQ do Minecraft](https://help.minecraft.net/hc/en-us/articles/360050865492-Minecraft-Java-Edition-Account-Migration-FAQ), [1](https://www.reddit.com/r/Minecraft/comments/sl8pkv/how_can_my_friend_migrate_her_account_to/hvq2sv6/), [2](https://www.reddit.com/r/privacy/comments/spcuj4/microsoft_is_going_to_attempt_to_move_everyone_on/).

Desde a versão v21w38a, o jogo contém [telemetria que não pode ser desativada](https://bugs.mojang.com/browse/MC-237493). Além disso, [está sujeito](https://www.minecraft.net/en-us/terms) aos [termos de privacidade da Microsoft](https://privacy.microsoft.com/en-us/privacystatement), um pesadelo para a privacidade.

✅  **Em vez disso, use**
- [Luanti](https://www.luanti.org/) - Mecanismo de jogo voxel de código aberto, repleto de recursos.
    - [Mineclonia](https://content.luanti.org/packages/ryvnf/mineclonia/) - Jogo de sobrevivência sandbox inspirado em Minecraft. Fork do MineClone2 com foco em estabilidade, desempenho multijogador e recursos.

#### Plugins para Minecraft

Se ainda quiser jogar Minecraft, você pode adicionar alguns plugins que ajudam a preservar um pouco sua privacidade. Ainda assim, lembre-se de que, dessa forma, você está apoiando a Microsoft.

✅  **Em vez disso, use**
- [No-Chat-Reports](https://github.com/Aizistral-Studios/No-Chat-Reports) - Plugin Spigot que remove as assinaturas criptográficas das mensagens dos jogadores, mas, por definição, interrompe o funcionamento de qualquer plugin de chat.
- [FreedomChat](https://github.com/ocelotpotpie/FreedomChat) - Ótima alternativa ao No-Chat-Reports, pois, por definição, não interrompe o funcionamento de nenhum plugin de chat.
- [No-Telemetry](https://github.com/kb-1000/no-telemetry) - Mod que desativa a coleta de dados de uso (telemetria) introduzida no Minecraft 1.18 (snapshot 21w38a).

### Pokémon

A Nintendo [coleta dados dos usuários](https://www.reddit.com/r/privacy/comments/qtj9xt/til_nintendo_collects_data_from_switch_owners/) e, se você desativar esse recurso, pode [ativá-lo novamente](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretly-turns-on-user-data-sharing-adSyV7t35NPg). Além disso, há um plano pago que nem todos podem pagar.

✅  **Em vez disso, use**

- [Pokete](https://github.com/lxgr-linux/pokete) - Pequeno jogo de terminal no estilo de um jogo muito popular e antigo da Game Freak.

### Sonic the Hedgehog

- [Sonic Robo Blast 2](https://www.srb2.org/) - Jogo de fãs 3D de Sonic the Hedgehog, de código aberto, criado com uma versão modificada do porte Doom Legacy de Doom.

[Voltar ao topo 🔝](#contents)

## Assistentes domésticos

Não use o Google Home nem a Alexa. Por favor, não use. Não os dê de presente a ninguém. Eles abrem as portas das casas para a vigilância. Esses dispositivos com atualização automática podem ser transformados em aparelhos de vigilância a qualquer momento.

Artigos interessantes: [1](https://www.theguardian.com/technology/2019/oct/09/alexa-are-you-invading-my-privacy-the-dark-side-of-our-voice-assistants), [2](https://www.theregister.com/2020/08/08/ai_in_brief/), [3](https://www.networkworld.com/article/3190176/virtual-assistants-hear-everything-so-watch-what-you-say-i-m-not-kidding.html), [4](https://www.democracynow.org/2017/1/4/privacy_advocates_warn_of_potential_surveillance), [5](https://www.mirror.co.uk/news/weird-news/woman-finds-amazon-thousands-recordings-25240984), [6](https://www.seattletimes.com/business/locked-down-lawyers-warned-alexa-is-hearing-confidential-calls/), [7](https://hide.me/en/blog/assistant-devices-are-a-privacy-nightmare/).

- Google Home [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Alexa [![](https://shields.tosdr.org/en_190.svg)](https://tosdr.org/en/service/190)
- Cortana [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Siri [![](https://shields.tosdr.org/en_158.svg)](https://tosdr.org/en/service/158)

✅  **Em vez disso, use**
- [OpenVoiceOS](https://openvoiceos.org) - Assistente de voz de código aberto e sucessor mantido do Mycroft, que funciona totalmente offline no seu próprio hardware. Licenciado sob Apache-2.0.
- [Home Assistant](https://www.home-assistant.io/) - Automação residencial de código aberto que prioriza o controle local e a privacidade.

[Voltar ao topo 🔝](#contents)

## Mensagens instantâneas
**Confira [este site](https://www.securemessagingapps.com/) para ver comparações*.

⛔ **Evite**
- WhatsApp | [![](https://shields.tosdr.org/en_198.svg)](https://tosdr.org/en/service/198)
- Instagram DM | [![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)
- Facebook Messenger | [![](https://shields.tosdr.org/en_182.svg)](https://tosdr.org/en/service/182)
- Skype | [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Zoom | [![](https://shields.tosdr.org/en_2198.svg)](https://tosdr.org/en/service/2198)
- Google Hangouts / Chat | [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **Em vez disso, use**

### Descentralizados
Não há um único ponto de controle ou falha. A rede descentralizada é operada por diferentes servidores administrados por voluntários de todo o mundo. Você escolhe onde seus dados ficam ou pode auto-hospedar seu próprio servidor. Os protocolos são um pouco mais complexos (devido à federação entre servidores) e algumas informações extras são adicionadas às mensagens (sem comprometer a privacidade).

- [Matrix (Protocol)](https://matrix.org/) - Rede aberta para comunicação segura e descentralizada.
   - [Element](https://element.io/) - Aplicativo de chat seguro e completo para equipes, amigos e organizações. Mantém suas conversas sob seu controle, protegidas de mineração de dados e anúncios. Usa criptografia de ponta a ponta.
   - [Cinny](https://cinny.in/) - Cliente Matrix com foco principal em uma interface simples, elegante e segura.
- [Jabber / XMPP (Protocol)](https://xmpp.org/) - Padrão universal e aberto de mensagens. Testado e comprovado. Independente. Focado na privacidade. Com criptografia de ponta a ponta.
  - [🤖](#icons) [Conversations](https://conversations.im/) - Cliente Jabber/XMPP para smartphones com Android 4.0 ou superior, otimizado para oferecer uma experiência móvel única.
  - [AstraChat](https://astrachat.com/) - Outro cliente XMPP.
  - [Dino](https://dino.im/) - Cliente XMPP moderno para desktop Linux, com criptografia de ponta a ponta OMEMO e OpenPGP. Código aberto, licenciado sob GPL-3.0.
  - [Gajim](https://gajim.org/) - Cliente XMPP multiplataforma com criptografia OMEMO, disponível para Linux, Windows e macOS. Código aberto, licenciado sob GPL-3.0.
  - [Snikket](https://snikket.org/) - Serviço XMPP auto-hospedado que reúne um servidor e clientes compatíveis para dispositivos móveis e desktop, tudo com um único comando. Código aberto e baseado em Docker.
- [DeltaChat](https://delta.chat/) - Converse por e-mail criptografado.
- [Session](https://getsession.org/) - Foco extremo em privacidade e anonimato. Usa tecnologia blockchain.
- [SimpleX Chat](https://simplex.chat/) - Primeira plataforma de chat 100% privada por design: não tem acesso ao seu grafo de conexões.
- [Status](https://status.app/) - Aplicativo seguro de mensagens, carteira de criptomoedas e navegador Web3, desenvolvido com tecnologia de ponta.

### Centralizados
O serviço é responsável por executar os servidores que permitem a comunicação entre usuários. Há um único ponto de falha e controle, mas ainda é 100% seguro e confiável se os protocolos e o código forem abertos e auditados.

- [Threema](https://threema.com/en) - Aplicativo de mensagens que prioriza a segurança e a privacidade. Pague uma vez, converse para sempre. Não coleta dados dos usuários. Cliente de código aberto.
- [Signal](https://signal.org/) - Foco extremo em privacidade, com todos os recursos que você espera. Criptografia forte por design. 100% de código aberto.
  - [🤖](#icons) [Molly](https://github.com/mollyim/mollyim-android) - Fork compatível com Signal, com alguns aprimoramentos de segurança.

### P2P
Não há servidores envolvidos. Tudo vai diretamente de um par a outro. Não existe ponto de falha ou controle central. A ausência de servidor reduz os recursos e pode deixar as mensagens mais lentas. É a melhor opção para conversas críticas.

- [Tox](https://tox.chat/) - Software fácil de usar que conecta você a amigos e familiares sem que outras pessoas escutem.
- [Briar](https://briarproject.org/) - Mensagens e fóruns criptografados ponto a ponto.
- [Tinfoil Chat](https://github.com/maqp/tfc) - Sistema seguro de mensagens com roteamento onion entre os endpoints.
- [Berty](https://berty.tech/) - Aplicativo de mensagens que prioriza a privacidade e funciona com ou sem acesso à internet, dados móveis ou confiança na rede.

[Voltar ao topo 🔝](#contents)

## Ferramentas para links na bio

- [Keyoxide](https://keyoxide.org/) - Plataforma moderna, segura e que respeita a privacidade para estabelecer sua identidade online descentralizada.
- [LinkStack](https://linkstack.org/) - Alternativa auto-hospedada e de código aberto ao Linktree.

[Voltar ao topo 🔝](#contents)

## Encurtadores de links

⛔ **Evite**

- Bit.ly

✅  **Em vez disso, use**

- [MagLit](https://maglit.me) - Serviço de encurtamento de links criptografado e que respeita a privacidade, com suporte a links Magnet.
- [Dub](https://github.com/dubinc/dub) - Você pode auto-hospedar o Dub.co para ter mais controle sobre seus dados e o design.
- [Yourls](https://yourls.org/) - Encurtador de URLs auto-hospedado, escrito em PHP.
- [tnyr.me](https://tnyr.me) - Encurtador de URLs com confiança zero e criptografia de ponta a ponta sem senha.
- [Kutt](https://kutt.it/) - Encurtador de URLs auto-hospedado, com domínios personalizados e links protegidos por senha. Código aberto, licenciado sob MIT.
- [Shlink](https://shlink.io/) - Encurtador de URLs auto-hospedado que mantém as próprias estatísticas de cliques no seu servidor. Código aberto, licenciado sob MIT.

[Voltar ao topo 🔝](#contents)

## Rastreamento de localização

⛔ **Evite**

- Google location history [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Google FindMyDevice [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **Em vez disso, use**

### Rastreamento
- [Nextcloud Phonetrack](https://apps.nextcloud.com/apps/phonetrack) - Aplicativo Nextcloud para rastrear o histórico de localização com um [aplicativo Android](https://gitlab.com/eneiluj/phonetrack-android) ([também aceita outros aplicativos](https://gitlab.com/eneiluj/phonetrack-oc/-/wikis/userdoc#logging-methods)). Permite armazenar posições em cache offline e enviá-las ao servidor em lotes. O aplicativo oficial oferece boas opções para economizar bateria.
- [OwnTracks](https://owntracks.org/) - Rastreamento de localização que mostra apenas a posição atual (com recursos limitados de histórico de localização).
- [Traccar](https://www.traccar.org/) - Software de rastreamento de localização desenvolvido para dispositivos GPS dedicados ao registro de trajetos.
- [Dawarich](https://github.com/Freika/dawarich) - Alternativa auto-hospedada ao Histórico de localização do Google.

### Encontrar meu dispositivo
- [Find My Device](https://gitlab.com/Nulide/findmydevice) - Encontre seu dispositivo Android por SMS.
- [GPSlogger](https://github.com/mendhak/gpslogger) - Aplicativo leve para registrar dados de GPS no Android. Sem servidores nem internet. Os dados são salvos em um arquivo simples no armazenamento local.

[Voltar ao topo 🔝](#contents)

## Serviços de e-mail
⛔ **Evite**
- Gmail
- Outlook
- Yandex Mail
- Yahoo! Mail

✅ **Em vez disso, use**

### De terceiros
- [Forward Email](https://forwardemail.net) - Serviço de e-mail 100% de código aberto e com foco em privacidade.
- [ProtonMail](https://proton.me/mail) - E-mail seguro, sediado na Suíça. [Leia este artigo sobre a prisão de uma ativista climática](https://proton.me/blog/climate-activist-arrest).
- [Tuta](https://tuta.com/) - E-mail seguro para todos. Código aberto.
- [mailbox.org](https://mailbox.org/) - Suíte paga de e-mail, calendário e escritório, sediada na Alemanha, com criptografia PGP integrada e sem anúncios.
- [Riseup](https://riseup.net/en/about-us) - Ferramentas de comunicação online para pessoas e grupos que trabalham por mudanças sociais libertadoras.
- [Mailfence](https://mailfence.com) - E-mail seguro e privado.

### Auto-hospedados
- [Docker mail server](https://github.com/docker-mailserver/docker-mailserver) - Servidor de e-mail simples e completo (SMTP, IMAP, LDAP, antispam, antivírus etc.) que usa Docker.
- [Mailcow: dockerized](https://github.com/mailcow/mailcow-dockerized) - Suíte de servidor de e-mail que faz «muuu».
- [Mail-in-a-box](https://github.com/mail-in-a-box/mailinabox) - O Mail-in-a-Box ajuda as pessoas a retomar o controle do e-mail oferecendo, com um clique, um servidor SMTP e tudo mais, fácil de implantar: um servidor de e-mail em uma caixa.
- [Mox](https://github.com/mjl-/mox) - Servidor de e-mail seguro, moderno, completo e de código aberto, para e-mail auto-hospedado de baixa manutenção.
- [Stalwart](https://stalw.art/) - Servidor de e-mail completo, escrito em Rust, que oferece SMTP, IMAP e JMAP e passou por duas auditorias de segurança independentes (AGPL-3.0).

### Clientes

#### Android / iOS
- [🤖](#icons) [FairEmail](https://github.com/M66B/FairEmail) - Aplicativo de e-mail para Android repleto de recursos, de código aberto e que respeita a privacidade.
- [🤖](#icons) [K9](https://k9mail.app/) - Aplicativo de e-mail de código aberto para Android.

#### Desktop
- [Thunderbird](https://www.thunderbird.net) - Cliente de e-mail gratuito, personalizável e de código aberto.

### Serviços de aliases de e-mail (encaminhamento anônimo)

Com aliases de e-mail, você pode finalmente criar uma identidade diferente para cada site. Proteja-se contra spam, phishing e vazamentos de dados. Você pode auto-hospedar qualquer uma das opções a seguir ou usar a plataforma dos próprios serviços.

- [SimpleLogin](https://github.com/simple-login/app) - Serviço de aliases de e-mail de código aberto e auto-hospedável, agora pertencente à Proton (AGPL-3.0).
- [AnonAddy](https://github.com/anonaddy/anonaddy) - Serviço de aliases e encaminhamento de e-mail de código aberto e auto-hospedável, agora chamado addy.io (AGPL-3.0).

[Voltar ao topo 🔝](#contents)

## Mapas e navegação
⛔ **Evite**
- Google Maps
- Apple Maps
- Yandex Maps
- Bing Maps
- Waze
- Sygic
- HERE WeGo
- Petal Maps

✅ **Em vez disso, use**
- [Open Street Map (OSM)](https://www.openstreetmap.org/) - O OpenStreetMap é criado por uma comunidade de mapeadores que contribuem e mantêm dados sobre estradas, trilhas, cafés, estações ferroviárias e muito mais, no mundo todo.
  - [OSMAnd](https://osmand.net/) - Aplicativo de navegação para Android/iOS que usa OSM. Tem todos os recursos que você espera e muitos outros.
- [Organic Maps](https://organicmaps.app/) - Ótimos mapas offline para caminhantes e ciclistas.
- [CoMaps](https://www.comaps.app/) - Aplicativo de mapas gratuito e de código aberto, baseado no OSM e desenvolvido pela comunidade.

[Voltar ao topo 🔝](#contents)

## Plataformas de streaming de mídia
⛔ **Evite**
- **Amazon Prime** - [Política de privacidade ruim](https://tosdr.org/en/service/2444). Os aplicativos têm [rastreadores do Google](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Exigem permissões demais para um aplicativo de streaming.
- **Netflix** - [Política de privacidade ruim](https://tosdr.org/en/service/185). Os aplicativos têm [rastreadores do Google](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Exigem permissões demais para um aplicativo de streaming.
- **Disney Plus** - [Política de privacidade muito ruim](https://tosdr.org/en/service/2745). Os aplicativos têm [vários rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Exigem permissões demais para um aplicativo de streaming.
- **Plex** - [Política de privacidade duvidosa](https://tosdr.org/en/service/1567). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.plexapp.android/latest/). Exigem permissões demais para um aplicativo de streaming.
- **Spotify** - [Política de privacidade muito ruim](https://tosdr.org/en/service/225). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/). Exigem permissões demais para um aplicativo de streaming.
- **Deezer** - [Política de privacidade ruim](https://tosdr.org/en/service/2516). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Exigem permissões demais para um aplicativo de streaming.
- **SoundCloud** - [Política de privacidade duvidosa](https://tosdr.org/en/service/276). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.soundcloud.android/latest/). Exigem permissões demais para um aplicativo de streaming.

✅  **Em vez disso, use**
#### Vídeo e áudio
- [Jellyfin](https://jellyfin.org/) - Solução de mídia criada por voluntários, que coloca você no controle do seu conteúdo. Transmita para qualquer dispositivo a partir do seu próprio servidor, sem restrições.
- [Dim](https://github.com/Dusk-Labs/dim) - Gerenciador de mídia auto-hospedado. Com configuração mínima, o Dim organiza e embeleza suas coleções de mídia, permitindo acessá-las e reproduzi-las a qualquer hora e em qualquer lugar.
- [Stremio](https://www.stremio.com/) - Central de mídia moderna que reúne tudo o que você precisa para assistir a vídeos.

#### Áudio
- [Funkwhale](https://funkwhale.audio/) - Plataforma social para curtir e compartilhar música (alternativa ao SoundCloud).
- [Subsonic](https://www.subsonic.org/pages/index.jsp) - Seu serviço completo e pessoal de streaming de música.
- [Ampache](https://ampache.org/) - Aplicativo Web de streaming de áudio/vídeo e gerenciador de arquivos.
- [Koel](https://koel.dev/) - Servidor pessoal de streaming de música que funciona.
- [Nuclear](https://nuclearplayer.com/) - Reprodutor de música moderno, focado em streaming de fontes gratuitas.
- [Navidrome](https://navidrome.org/) - Serviço pessoal de streaming de música leve, rápido e independente.
- [🤖](#icons) [mucke](https://github.com/moritz-weber/mucke) - Reprodutor de arquivos de música locais com opções exclusivas de reprodução personalizada.

**Clientes alternativos para Spotify**
 > Embora esses clientes reduzam o rastreamento, eles NÃO protegem sua privacidade, pois você continuará transmitindo dos servidores do Spotify com sua própria conta **premium (paga e identificada)**.

\* É necessário ter uma conta Premium.

- [Spot*](https://github.com/xou816/spot) - Cliente Spotify nativo, desenvolvido com GTK e Rust.
- [psst*](https://github.com/jpochyla/psst) - Cliente Spotify rápido e multiplataforma, com interface gráfica nativa.
- [ncspot*](https://github.com/hrkfdn/ncspot) - Cliente Spotify multiplataforma para ncurses, escrito em Rust e inspirado no ncmpc e similares.

Não é necessário ter uma conta Premium:

- [Spotube](https://github.com/team-spotube/spotube) - Cliente multiplataforma, gratuito e leve para Spotify.

**Clientes alternativos para YouTube Music**
- [Beatbump](https://github.com/snuffyDev/Beatbump) [💀](#icons) - Interface alternativa para YouTube Music, sem anúncios e com wrapper de API personalizado.
- [SimpMusic](https://github.com/Maxrave-Dev/SimpMusic) - Cliente de código aberto para YouTube Music no Android, mantido ativamente (sucessor dos descontinuados ViMusic e RiMusic).

**Clientes alternativos para Deezer**
- [dzr](https://github.com/yne/dzr) - Reprodutor Deezer de linha de comando para Linux, BSD e Android+Termux.

#### Podcasts

⛔ **Evite**

- **Spotify** - Política de privacidade [muito ruim](https://tosdr.org/en/service/225). Coleta uma enorme quantidade de dados sobre você: humor, tempo livre, gostos, desgostos, amigos... Além disso, os aplicativos têm [rastreadores demais](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/).
- **iVoox** - Os aplicativos estão [repletos de rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.ivoox.app/latest/). O site também tem rastreadores.
- **Audible** - Política de privacidade [muito ruim](https://tosdr.org/en/service/190). O aplicativo tem [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.audible.application/latest/).
- **Deezer** - [Política de privacidade ruim](https://tosdr.org/en/service/2516). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Exigem permissões demais para um aplicativo de streaming.

✅  **Em vez disso, use**

- [Antennapod](https://antennapod.org) - Reprodutor de podcasts totalmente aberto. Assine qualquer feed RSS.
- [Castopod](https://castopod.org) - Hospede seus podcasts com facilidade, mantenha o controle sobre suas criações e converse com seu público sem intermediários. Seu podcast e seu público pertencem somente a você.
- [Funkwhale](https://funkwhale.audio/) - Plataforma social para curtir e compartilhar áudio.

[Voltar ao topo 🔝](#contents)

## Notas e tarefas
⛔ **Evite**

Esses provedores oferecem aplicativos e serviços repletos de rastreadores de dados. Além disso, a maioria armazena suas notas nos próprios servidores e não oferece nenhum tipo de criptografia.

- Google Keep
    - [Keep To Markdown](https://github.com/erikelisath/keep-to-markdown) - Converta suas notas do Google Keep para o formato padrão Markdown + cabeçalho YAML.
- Evernote
- Squid
- Notion
- OneNote

✅  **Em vez disso, use**

- [Anytype](https://www.anytype.io/) - Alternativa de código aberto ao Notion, com criptografia de ponta a ponta e sincronização pela nuvem e pela rede local; pode ser auto-hospedada.
- [AppFlowy](https://appflowy.com/) - Alternativa de código aberto ao Notion. Você controla seus dados e personalizações.
- [HedgeDoc](https://hedgedoc.org/) - Anteriormente CodiMD (comunitário). Plataforma incrível para escrever e compartilhar Markdown.
- [Joplin](https://github.com/laurent22/joplin) - Aplicativo de notas e tarefas com recursos de sincronização e criptografia.
- [Logseq](https://logseq.com/) - Alternativa ao WorkFlowy que prioriza a privacidade.
- [Memos](https://github.com/usememos/memos) - Central de memorandos de código aberto e auto-hospedada, com gestão do conhecimento e recursos sociais.
- [Nextcloud Notes](https://github.com/nextcloud/notes/) - Aplicativo de notas do Nextcloud, sem distrações.
	- [Nextcloud Notes app](https://github.com/nextcloud/notes-android) - Cliente Android para Nextcloud Notes.
- [Notally](https://github.com/OmGodse/Notally) - Lindo aplicativo de notas (somente local, sem sincronização).
- [Notesnook](https://notesnook.com/) - Aplicativo de notas privadas, de código aberto e com conhecimento zero.
- [Obsidian](https://obsidian.md) - Aplicativo privado e flexível para fazer anotações. Tem código fechado, mas não possui rastreadores (no site nem nos aplicativos) e oferece sincronização com criptografia de ponta a ponta.
- [Quillpad](https://quillpad.github.io/) - Faça belas anotações em Markdown e mantenha tudo organizado com listas de tarefas. Fork do Quillnote.
- [SiYuan](https://github.com/siyuan-note/siyuan) - Sistema de gestão do conhecimento pessoal que prioriza o armazenamento local.
- [Standard Notes](https://standardnotes.com/) - Aplicativo de notas gratuito, de código aberto e totalmente criptografado.
- [TinyList](https://tinylist.app/) - Crie e compartilhe notas e listas de verificação sem abrir mão da sua privacidade.
- [Trilium Notes](https://github.com/TriliumNext/Trilium) - Crie sua base de conhecimento pessoal com o Trilium Notes.
- [Vikunja](https://vikunja.io) - Aplicativo de tarefas de código aberto para organizar sua vida.
- [YankNote](https://github.com/purocean/yn) - Aplicativo hackeável de notas em Markdown para programadores.
- [🤖](#icons) [Tasks.org](https://tasks.org) - Gerenciador de tarefas e afazeres de código aberto para Android, com sincronização CalDAV e uso offline. Licenciado sob GPL-3.0.

[Voltar ao topo 🔝](#contents)

## Reconhecimento musical

⛔ **Evite**

- Shazam - Está sujeito à [política de privacidade da Apple](https://tosdr.org/en/service/158). O aplicativo para Android [tem alguns rastreadores do Google](https://reports.exodus-privacy.eu.org/en/reports/com.shazam.android/latest/).
- SoundHound - Tem rastreadores [demais](https://reports.exodus-privacy.eu.org/en/reports/com.melodis.midomiMusicIdentifier.freemium/latest/) para um aplicativo de reconhecimento musical.
- Musicxmatch - O aplicativo [tem rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.musixmatch.android.lyrify/latest/) e exige um número perigoso de permissões.

✅  **Em vez disso, use**

**Clientes alternativos ao Shazam**

- [SongRec](https://github.com/marin-m/SongRec) - Cliente de código aberto do Shazam para Linux, escrito em Rust.
- [SongID Telegram Bot](https://github.com/smcclennon/SongID) - Bot do Telegram que identifica músicas em arquivos de áudio/vídeo enviados a ele.

[Voltar ao topo 🔝](#contents)

## Suíte de escritório

⛔ **Evite**
- Microsoft Office [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Google Docs [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **Em vez disso, use**
- [LibreOffice](https://www.libreoffice.org/) - Suíte de escritório offline, gratuita e de código aberto.
- [OnlyOffice](https://www.onlyoffice.com/) - Suíte de escritório online, gratuita e de código aberto, para colaboração.
- [Cryptpad](https://cryptpad.fr/) - Suíte de colaboração criptografada e de código aberto.
- [Etherpad](https://etherpad.org/) - Editor online de código aberto, altamente personalizável, que permite edição colaborativa realmente em tempo real.
- [Fileverse](https://fileverse.io) - O Fileverse está criando alternativas mais saudáveis, com soberania própria, privacidade desde o projeto e conformidade com padrões como princípios fundamentais.
	- [Ddocs](https://ddocs.new): alternativa ao Google Docs que aprimora a privacidade: on-chain, descentralizada e com criptografia de ponta a ponta.
 	- [dSheets](https://sheets.fileverse.io): alternativa descentralizada ao Excel e ao Google Sheets.
- [Grist](https://www.getgrist.com) - Combinação auto-hospedável de planilha e banco de dados para organizar informações, como alternativa de código aberto ao Airtable. Licenciada sob Apache-2.0.

[Voltar ao topo 🔝](#contents)

## Provedores de telefonia online

Muitos sites exigem a verificação do número de telefone. Esses serviços permitem receber (e, às vezes, enviar) mensagens SMS com foco na privacidade.

### Sem verificação por e-mail, aceita Monero
- [Crypton](https://crypton.sh/) - Cartão SIM seguro para SMS na nuvem. (Sediado na Islândia.)
- [Virtualsim](https://virtualsim.net/) - A Virtualsim oferece aluguel de cartões SIM físicos para verificações por SMS. (Sediada na Ucrânia.)
- [MoneroSMS](https://monerosms.com/) - Números virtuais para mensagens e verificações por SMS/MMS. CLI e aplicativo Web. (Sediado nos Estados Unidos.)

### Exige verificação por e-mail, aceita Monero
- [Onlinesim](https://onlinesim.io/) - Receba SMS online em um número de telefone virtual. (Sediado na Rússia.)

### Exige verificação por e-mail, aceita criptomoedas
- [SmsPVA](https://smspva.com/) - Serviço que fornece um número de telefone para o qual você pode enviar SMS e receber o conteúdo da mensagem. (Sediado na França.)

## Sistemas operacionais
### Android
⛔ Tente evitar o Android do Google ou versões modificadas e ajustadas por fabricantes como Xiaomi, Huawei, Samsung etc. O Android é um projeto de código aberto — [AOSP - Android Open Source Project](https://source.android.com/) — e há muitas versões que respeitam a privacidade e os dados dos usuários, sem compartilhá-los com servidores privados de fabricantes ou provedores de serviços.

✅ **Em vez disso, use**

> [!NOTE]
> **Compatibilidade de aplicativos Android**:
> Embora todos esses sistemas operacionais sejam Android, a compatibilidade com aplicativos pode não ser perfeita devido à ausência do GMS (Google Mobile Services), exigido por alguns aplicativos. No [Plexus](https://plexus.techlore.tech/), você pode verificar o funcionamento dos aplicativos com microG (alternativa gratuita e de código aberto ao GMS) ou sem GMS, e a comunidade pode informar como eles se comportam nesses ambientes.

> [!NOTE]
> **Segurança do Android**: ROMs personalizadas podem melhorar sua privacidade, mas também reduzir a segurança do Android. Use sempre ROMs compatíveis com inicialização verificada e criptografia e que **NÃO** tenham root ativado por padrão. Se possível, evite builds userdebug. Se seu modelo de ameaças exigir segurança, compre um Google Pixel e instale o GrapheneOS. [Saiba mais no PrivacyGuides](https://www.privacyguides.org/android/overview).

#### Baseados em Android

O **GrapheneOS** tem forte foco em segurança e privacidade. Ele implementa tecnologias para reduzir muitas vulnerabilidades e dificulta significativamente sua exploração. Melhora a segurança tanto do sistema operacional quanto dos aplicativos executados nele.

- [GrapheneOS](https://grapheneos.org/) - Sistema operacional móvel de código aberto com foco em privacidade e segurança e compatibilidade com aplicativos Android. Compatível somente com celulares **Google Pixel**.

Estas ROMs também oferecem boa privacidade e/ou suporte ampliado para uma variedade maior de dispositivos. Observe que elas também podem reduzir a segurança e aumentar a superfície de ataque do sistema operacional.

- [CalyxOS](https://calyxos.org/) - ROM projetada com privacidade em mente. Oferece segurança melhor que o LineageOS ou o Replicant.
- [LineageOS](https://lineageos.org/) - Sistema operacional gratuito e de código aberto para vários dispositivos, baseado na plataforma móvel Android.
- [/e/OS](https://e.foundation/e-os) - ROM Android sem Google, da Murena, que inclui microG e serviços de nuvem opcionais. Código aberto, licenciado sob GPL-3.0.
- [iodéOS](https://iode.tech/iodeos) - ROM Android sem Google, com firewall de rede integrado que bloqueia anúncios e rastreadores. Código aberto, licenciado sob GPL-3.0.

#### Baseados em Linux
- [UBPorts](https://www.ubports.com/) - Ubuntu Touch é a versão móvel do Ubuntu, otimizada para telas sensíveis ao toque.
- [Nura](https://nura.eco/) (anteriormente postmarketOS) - Versão do Alpine Linux otimizada para telas sensíveis ao toque e pré-configurada.
- [PureOS](https://www.pureos.net/) - Sistema operacional desenvolvido pela Purism para o Librem 5.
- [Plasma Mobile](https://www.plasma-mobile.org/) - Plasma no seu bolso. Ecossistema para celulares que respeita a privacidade, é de código aberto e seguro.
- [mobian](https://mobian-project.org/) - Debian para dispositivos móveis.
### Smart TV
⛔ Evite o Android TV do Google, o WebOS da LG ou qualquer outro sistema operacional de TV comum que invada a privacidade e venha pré-instalado na TV.

✅ **Em vez disso, use**

No momento, não conheço nenhum software para smart TV que respeite a privacidade. Se você conhecer algum, abra um pull request ou uma issue.

O software a seguir não é um **sistema operacional**, mas reúne aplicativos que podem ser usados em quase qualquer sistema. Esses aplicativos respeitam sua privacidade e oferecem recursos semelhantes aos de uma smart TV. Uma configuração recomendada é conectar à TV um [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) com GNU/Linux, instalar ferramentas como o [KDE Connect](https://kdeconnect.kde.org/) para controlar a mídia pelo celular e, em seguida, adicionar os aplicativos listados abaixo:

- [Kodi](https://kodi.tv/) - Central de entretenimento que reúne toda a sua mídia digital em um pacote bonito e fácil de usar. É 100% gratuito e de código aberto, altamente personalizável e funciona em vários dispositivos.
- [OSMC](https://osmc.tv/) - Central de mídia gratuita e de código aberto, feita pelas pessoas e para as pessoas.

Confira também a seção [Plataformas de streaming de mídia](https://github.com/pluja/awesome-privacy#media-streaming-platforms).

### PC / macOS
⛔ **Evite**
- MS Windows - Pertence à Microsoft e é conhecido por coletar muitos dados dos usuários e induzi-los a criar uma conta Microsoft. Se ainda quiser usar o Windows 10 ou 11, você pode recorrer ao [Win11Debloat](https://github.com/Raphire/Win11Debloat) ou a [esta outra ferramenta](https://www.w10privacy.de/english-home/) para ver e desativar as inúmeras configurações invasivas do Windows.
- MacOS.

✅ **Em vez disso, use**
#### [GNU/Linux](https://www.linux.com/what-is-linux/) 

GNU/Linux é uma família de sistemas operacionais livres (no sentido de liberdade e de cerveja grátis) e de código aberto, desenvolvidos em sua maioria pela comunidade. Se não sabe por onde começar, estas são boas opções para iniciantes:

- [Fedora](https://fedoraproject.org/) - Distribuição Linux comunitária patrocinada pela Red Hat, que disponibiliza software de código aberto recente em ciclos de seis meses.
- [Mint (Cinnamon)](https://linuxmint.com/edition.php?id=305) é uma distribuição fácil para iniciantes.
- [Qubes OS](https://qubes-os.org/) é um sistema operacional voltado à segurança, que isola diferentes espaços de trabalho em máquinas virtuais separadas para aprimorar a privacidade e a segurança.
- [Tails](https://tails.net/) é um sistema operacional portátil que protege contra vigilância e censura. Sempre inicia no mesmo estado limpo, e tudo o que você faz desaparece automaticamente ao desligar o Tails.
- [Whonix](https://www.whonix.org/) é um sistema operacional executado dentro de máquinas virtuais que força todas as conexões a passar pela rede Tor.
- [Kicksecure](https://www.kicksecure.com/) é uma distribuição reforçada baseada em Debian, dos desenvolvedores do Whonix, segura por padrão.
- [secureblue](https://secureblue.dev/) é uma imagem reforçada, baseada no Fedora Atomic Desktops, com configurações padrão voltadas à segurança e navegador reforçado.

> [!TIP]
>  Se quiser experimentar sem instalar no computador, use um [pendrive Live USB](https://www.fosslinux.com/274/how-to-create-linux-mint-live-usb-drive-on-windows.htm). Você também pode conhecer o [Ventoy](https://www.ventoy.net), que facilita baixar e testar distribuições Linux com um pendrive.

> [!TIP]
> Se quiser instalar Linux sem remover o sistema operacional atual, você pode configurar [dual boot](https://averagelinuxuser.com/dualboot-linux-windows/).

> [!NOTE]
> Nem todas as distribuições Linux são livres (no sentido de liberdade), gratuitas (como uma cerveja grátis) ou respeitam a privacidade dos usuários. Há inúmeras distribuições GNU/Linux; pesquise um pouco antes de escolher uma!

#### Outros sistemas operacionais:

- [AtlasOS](https://atlasos.net/) - Modificação de código aberto do Windows 10, projetada para otimizar o desempenho e a latência. O Atlas remove todos os tipos de rastreamento incorporados ao Windows e implementa várias políticas de grupo para minimizar a coleta de dados.
- [ReactOS](https://reactos.org/) - Sistema operacional gratuito e de código aberto, semelhante ao Windows, capaz de executar softwares e drivers do Windows.
- [RedoxOS](https://www.redox-os.org/) - Projeto em desenvolvimento que busca oferecer um sistema operacional semelhante ao Unix, escrito em Rust.

[Voltar ao topo 🔝](#contents)

## Gerenciadores de senhas
⛔ **Evite**
- LastPass
- Dashlane

✅  **Em vez disso, use**
- [AliasVault](https://www.aliasvault.com) - Gerenciador de senhas e aliases de código aberto com criptografia de ponta a ponta e servidor integrado de aliases de e-mail.
- [Bitwarden](https://bitwarden.com) - Gerenciador de senhas de código aberto baseado na nuvem.
  - [vaultwarden](https://github.com/dani-garcia/vaultwarden/) - Servidor auto-hospedado compatível com Bitwarden, não oficial e anteriormente conhecido como bitwarden_rs.
- [CarryPass](https://carrypass.net) - Gerenciador de senhas PWA com conhecimento zero, geração determinística, cofres criptografados e colaboração em equipe. ([Código-fonte](https://github.com/racz-zoltan/racz-zoltan.github.io)) `MIT`
- [KeepassXC](https://keepassxc.org/) - Armazene senhas com segurança usando criptografia padrão do setor; não sincroniza, apenas armazena.
  - [KeepassDX](https://www.keepassdx.com/) para Android.
  - [Strongbox](https://strongboxsafe.com/) para iOS.
  - [KeeWeb](https://keeweb.info/) para Web e outras plataformas.
- [LessPass](https://www.lesspass.com) - Gerenciador de senhas sem estado. Lembre-se de uma senha mestra para acessar suas senhas. Não precisa sincronizar.
- [Padloc](https://padloc.app/) - O último gerenciador de senhas que você vai querer usar.
- [Passbolt](https://www.passbolt.com) - Gerenciador de senhas de código aberto, projetado para colaboração em equipe.
- [Passky](https://passky.org) - Gerenciador de senhas simples, moderno, leve, seguro e de código aberto.
- [Proton Pass](https://proton.me/pass) - Gerenciador de senhas criptografado e de código aberto da Proton.

## Pastebin e compartilhamento de segredos

Estas ferramentas são úteis para compartilhar segredos, trechos de código ou qualquer outro tipo de texto de forma privada.

- [crypt.fyi](https://www.crypt.fyi) - Plataforma efêmera com conhecimento zero para compartilhar dados confidenciais, com clientes Web, CLI e extensão para Chrome.
- [NoPaste](https://github.com/bokub/nopaste) - Alternativa de código aberto ao Pastebin, sem banco de dados nem código de back-end. Os dados são compactados e armazenados inteiramente no link compartilhado, em nenhum outro lugar.
- [PrivateBin](https://github.com/PrivateBin/PrivateBin) - Pastebin online minimalista e de código aberto, cujo servidor não tem conhecimento dos dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits.
- [Yopass](https://github.com/jhaals/yopass) - Compartilhamento seguro de segredos, senhas e arquivos.
- [scrt.link](https://scrt.link) - Compartilhe um segredo. Criptografado de ponta a ponta. Efêmero. De código aberto.
- [dele-to](https://dele.to) - Aplicativo moderno e de código aberto para compartilhar credenciais e segredos confidenciais com segurança, usando criptografia AES-256 no cliente, arquitetura de conhecimento zero e autodestruição automática.

[Voltar ao topo 🔝](#contents)

## Pagamentos
⛔ **Evite**
- Visa / Mastercard
- PayPal [![](https://shields.tosdr.org/en_230.svg)](https://tosdr.org/en/service/230)
- WeChat
- _insertBigTechHere_Pay
- Bank payments (wire, SEPA, etc)

✅  **Em vez disso, use**
- [Monero](https://www.getmonero.org/) - O Monero é dinheiro vivo para um mundo conectado. É rápido, privado, impossível de rastrear e seguro.
- Dinheiro - Faça pagamentos entre pessoas usando cédulas e moedas físicas.

> [!WARNING]
> [Bitcoin](https://bitcoin.org) não é anônimo nem privado. É rastreável, transparente e pseudônimo. Para uma introdução básica, [assista ao vídeo de aantonop](https://yewtu.be/watch?v=JN1Bowgcle8). Usuários mais avançados podem assistir a esta [série sobre privacidade no Bitcoin](https://yewtu.be/watch?v=QEnL5k0R08w).

### Carteiras

- [Sparrow Wallet](https://www.sparrowwallet.com/) - Carteira de desktop multiplataforma e de código aberto, que oferece várias ferramentas para preservar a privacidade dos seus gastos.
- [Wasabi Wallet](https://www.wasabiwallet.io/) - Carteira Bitcoin de desktop, de código aberto, não custodial e com foco em privacidade.
- [Cake Wallet](https://cakewallet.com) - Carteira não custodial e de código aberto para Monero, Bitcoin e outras moedas, disponível para dispositivos móveis e desktop. Licenciada sob MIT.
- [Feather Wallet](https://featherwallet.org/) - Carteira Monero leve, de código aberto e para desktop, com Tor integrado e controle de moedas. Licenciada sob BSD-3.

### Processadores de pagamento

- [BTCPay Server](https://btcpayserver.org) - Processador de pagamentos com criptomoedas auto-hospedado e não custodial para comerciantes, como alternativa ao PayPal ou BitPay. Licenciado sob MIT.

### Onde usar Monero e Bitcoin

- [kycnot.me](https://kycnot.me/) - Diretório de corretoras sem KYC, processadores de pagamento e outros serviços de privacidade.

[Voltar ao topo 🔝](#contents)

## Finanças pessoais

### Gestão financeira completa

- [Actual](https://actualbudget.org) - Aplicativo super-rápido para gerenciar suas finanças, com foco na privacidade.
- [Firefly III](https://www.firefly-iii.org/) - Gerenciador de finanças pessoais gratuito e de código aberto.
- [GnuCash](https://gnucash.org/) - Software de contabilidade para finanças pessoais e pequenas empresas, licenciado livremente sob GNU GPL e disponível para GNU/Linux, BSD, Solaris, Mac OS X e Microsoft Windows.
- [Sure](https://github.com/we-promise/sure) - Sistema operacional seguro e de código aberto para suas finanças pessoais. Fork mantido pela comunidade do projeto arquivado [Maybe](https://github.com/maybe-finance/maybe).
- [ezBookkeeping](https://ezbookkeeping.mayswind.net/) - Aplicativo leve e auto-hospedado para finanças pessoais, com interface fácil de usar e recursos poderosos de contabilidade.

### Gestão de orçamento
- [ProExpense](https://github.com/arduia/ProExpense/) - Aplicativo financeiro gratuito e simples para registrar despesas diárias com segurança.
- [My Expenses](https://github.com/mtotschnig/MyExpenses) - Aplicativo Android repleto de recursos para acompanhar despesas, licenciado sob GPL.
- [Wallos](https://wallosapp.com) - Rastreador auto-hospedado de assinaturas e despesas recorrentes, com lembretes e estatísticas de gastos. Código aberto, licenciado sob GPL-3.0.

### Despesas compartilhadas

⛔ **Evite**

- Tricount - O aplicativo é enorme (cerca de 200 MB) e contém muitos rastreadores do Facebook, Google e Huawei.
- Splitwise - O aplicativo contém rastreadores do Google e da Amazon.

✅  **Em vez disso, use**

- [Spliit](https://github.com/spliit-app/spliit#readme) - Compartilhe despesas com amigos e familiares. Sem anúncios. Sem conta. Código aberto. Gratuito para sempre.
- [SplitPro](https://github.com/oss-apps/split-pro#readme) - [Site](https://splitpro.app) - Divida despesas com seus amigos gratuitamente. Alternativa de código aberto ao SplitWise.
- [IHateMoney](https://ihatemoney.org/) - Gerencie facilmente suas despesas compartilhadas. Não permite divisões desiguais.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Cliente Android para servidores Nextcloud Cospend e IHateMoney.
- [Nextcloud Cospend](https://apps.nextcloud.com/apps/cospend) - Gerenciador de orçamento em grupo/compartilhado inspirado no ótimo IHateMoney.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Cliente Android para servidores Nextcloud Cospend e IHateMoney.

### Outros

- [Debitum](https://github.com/Marmo/debitum) [💀](#icons) - Com o Debitum, você acompanha qualquer tipo de dívida, seja dinheiro ou itens emprestados.

### Rastreadores de carteira de investimentos

- [Ghostfolio](https://github.com/ghostfolio/ghostfolio#readme) - Software de código aberto para gestão de patrimônio, desenvolvido com tecnologias Web.
- [PortfolioPerformance](https://www.portfolio-performance.info/en/) - Ferramenta de código aberto para calcular o desempenho geral de uma carteira de investimentos.
- [Rotki](https://github.com/rotki/rotki) - Aplicativo incrível para acompanhar carteiras de investimento, fazer análises, contabilidade e declarações fiscais, protegendo sua privacidade.

## Edição e gerenciamento de fotos
⛔ **Evite**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- VSCO

✅  **Em vez disso, use**
#### Web
- [miniPaint](https://github.com/viliusle/miniPaint) - Alternativa de código aberto ao Photopea. O miniPaint funciona diretamente no navegador. Nada é enviado a nenhum servidor: tudo permanece no navegador.

#### Desktop
- [GIMP](https://www.gimp.org/) - Editor de imagens gratuito e de código aberto.
- [Krita](https://github.com/KDE/krita) - Aplicativo gratuito e de código aberto para pintura digital.
- [Czkawka](https://github.com/qarmin/czkawka) - Aplicativo multifuncional para encontrar arquivos duplicados, imagens semelhantes etc.
- [DigiKam](https://www.digikam.org/) - Gerenciamento profissional de fotos, incrível e com o poder do código aberto.
- [Inkscape](https://inkscape.org/) - Editor de gráficos vetoriais gratuito e de código aberto, usado para criar imagens vetoriais.
- [ImageGlass](https://imageglass.org/) - Aplicativo leve desenvolvido para ajudar você a visualizar imagens em um ambiente de trabalho limpo e intuitivo.
- [darktable](https://www.darktable.org/) - Aplicativo de fluxo de trabalho fotográfico e revelador RAW de código aberto.
- [RapidRAW](https://github.com/CyberTimon/RapidRAW) - Editor de imagens RAW elegante, não destrutivo e acelerado por GPU, desenvolvido com foco em desempenho. Alternativa multiplataforma leve (menos de 20 MB) ao Adobe Lightroom. Licenciado sob AGPL-3.0.
- [RawTherapee](https://rawtherapee.com) - Revelador de fotos RAW offline e de código aberto, que funciona bem com o darktable como alternativa ao Lightroom. Licenciado sob GPL-3.0.

#### Android
- [Pocket Paint](https://github.com/Catrobat/Paintroid) - Aplicativo padrão de manipulação de imagens do Catroid.
- [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif) - Remova os dados Exif das fotos antes de compartilhá-las.
- [ImagePipe](https://codeberg.org/Starfish/Imagepipe) - Reduz o tamanho das imagens e remove etiquetas Exif ao compartilhar imagens em dispositivos Android.

[Voltar ao topo 🔝](#contents)

## Armazenamento de fotos
⛔ **Evite**
- Google Photos [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
    - [Google Photos Takeout Helper](https://github.com/TheLastGimbus/GooglePhotosTakeoutHelper) [💀](#icons) - Script que organiza o arquivo bagunçado do Google Takeout em uma grande pasta cronológica. Use-o para sair do Google Photos :).
- Amazon Photos

✅  **Em vez disso, use**

### Auto-hospedados
- [Immich](https://github.com/immich-app/immich) - Solução auto-hospedada para fazer backup de fotos e vídeos diretamente do celular.
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - Fork ativo do [OwnPhotos](https://github.com/hooram/ownphotos). Alternativa auto-hospedada ao Google Photos.
- [Nextcloud](https://nextcloud.com/) - Plataforma de produtividade de código aberto e auto-hospedada, que mantém você no controle. Tem um plugin [*Photos*](https://github.com/nextcloud/photos) para ajudar a organizar e visualizar suas fotos.
- [Photoprism](https://photoprism.app) - Aplicativo baseado em servidor e repleto de recursos para visualizar, organizar e compartilhar sua coleção pessoal de fotos. É o mais parecido com o Google Photos.
- [Pigallery2](http://bpatrik.github.io/pigallery2/) - Site auto-hospedado de galeria de fotos, organizado primeiro por diretórios.
- [Photoview](https://photoview.github.io/) - Galeria de fotos para servidores pessoais auto-hospedados, com reconhecimento facial.
- [Photostructure](https://photostructure.com/) - Biblioteca de fotos auto-hospedada que torna agradável navegar e compartilhar lembranças de uma vida inteira.
- [Stingle Photos](https://stingle.org/) - Solução de código aberto que oferece segurança, privacidade e criptografia fortes para fazer backup das suas fotos.
- [Ente](https://ente.com/) - Armazenamento de fotos e vídeos com criptografia de ponta a ponta. Código aberto e [auditado](https://ente.com/blog/cryptography-audit/) de forma independente.

### De terceiros
- [Crypt.ee](https://crypt.ee/) - Espaço privado e criptografado para todas as suas fotos, documentos, notas e muito mais.
- [Ente](https://ente.com/) - Armazenamento de fotos e vídeos com criptografia de ponta a ponta. Código aberto e [auditado](https://ente.com/blog/cryptography-audit/) de forma independente.
- [Stingle Photos](https://stingle.org/) - Solução de código aberto que oferece segurança, privacidade e criptografia fortes para fazer backup das suas fotos.

### Local
- [DigiKam](https://www.digikam.org/) - Gerenciamento profissional de fotos, incrível e com o poder do código aberto.
- [Photok](https://github.com/leonlatsch/Photok) - O Photok é um cofre gratuito para fotos. Armazena suas fotos criptografadas no dispositivo e as oculta de outras pessoas.
- [ImageGlass](https://imageglass.org/) - Aplicativo leve desenvolvido para ajudar você a visualizar imagens em um ambiente de trabalho limpo e intuitivo.

[Voltar ao topo 🔝](#contents)

## Ferramentas de privacidade

Esta seção reúne ferramentas que podem ajudar os usuários a analisar o estado da privacidade em seus dispositivos.

### Desktop

- [Whoami Project](https://github.com/owerdogan/whoami-project) [💀](#icons) - O Whoami aprimora a privacidade e o anonimato em distribuições Linux baseadas em Debian e Arch.
- [BusKill](https://www.buskill.in/) - O BusKill é um interruptor de homem morto ativado quando um conector magnético se solta e interrompe a conexão USB.
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Firewall interativo de aplicativos para GNU/Linux que ajuda a detectar, monitorar e bloquear conexões de saída indesejadas.
- [MAT2](https://github.com/jvoisin/mat2) - Remove metadados de imagens, documentos, áudios e outros arquivos. Ferramenta de linha de comando com integração a gerenciadores de arquivos.
- [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) - Aplicativo simples para desktop, baseado no MAT2, que permite visualizar e remover metadados de arquivos.
- [Mobile Verification Toolkit](https://github.com/mvt-project/mvt) - Ferramenta forense da Anistia Internacional que verifica dispositivos Android e iOS em busca de rastros de spyware, como o Pegasus.

### Android

- [εxodus](https://reports.exodus-privacy.eu.org/en/) - Plataforma de auditoria de privacidade para aplicativos Android. Descubra quantos rastreadores seus aplicativos têm.
	- [ClassyShark3xodus](https://f-droid.org/en/packages/com.oF2pks.classyshark3xodus/) - Verifica APKs em busca de rastreadores conhecidos (identificados pelo Exodus), além de outros avisos e especificações.
- [Plexus](https://plexus.techlore.tech/) - Elimine a preocupação com a compatibilidade de aplicativos Android em dispositivos sem Google. Descubra se um aplicativo funcionará em um dispositivo sem Google.
- [Netguard](https://netguard.me/) - Maneira simples de bloquear o acesso à internet por aplicativo.
- [RethinkDNS + Firewall](https://github.com/celzero/rethink-app) - Firewall e modificador de DNS de código aberto para Android 6 ou superior, sem necessidade de root e com recursos anticensura.
- [🤖](#icons) [Orbot](https://orbot.app/) - Encaminha o tráfego dos aplicativos pela rede Tor, em todo o sistema como VPN ou por aplicativo. Criado pelo Guardian Project.

[Voltar ao topo 🔝](#contents)

## Acesso e controle remoto
⛔ **Evite**
- TeamViewer
- AnyDesk

✅  **Em vez disso, use**
- [RustDesk](https://rustdesk.com/) - Software cliente de desktop remoto, de código aberto e escrito em Rust. Funciona imediatamente, oferece controle total dos seus dados e não traz preocupações de segurança.
- [screego](https://screego.net/) - Compartilhamento de tela para desenvolvedores.
- [Remmina](https://remmina.org/) - Acesso remoto à tela e compartilhamento de arquivos do desktop (RDP).
- [UltraVNC](https://www.uvnc.com/) - Software gratuito, poderoso e fácil de usar para acesso remoto a PCs, que exibe na sua tela a imagem de outro computador pela internet ou rede local.
- [MeshCentral](https://meshcentral.com/) - Site repleto de recursos, multiplataforma, auto-hospedado e de código aberto para gerenciamento remoto de dispositivos.
- [Apache Guacamole](https://guacamole.apache.org) - Gateway auto-hospedado de desktop remoto, sem cliente, que permite acessar RDP, VNC e SSH pelo navegador. Licenciado sob Apache-2.0.
- [Sunshine + Moonlight](https://app.lizardbyte.dev/Sunshine) - Host auto-hospedado para streaming de desktop e jogos (Sunshine), com clientes correspondentes (Moonlight). Código aberto, licenciado sob GPL-3.0.

[Voltar ao topo 🔝](#contents)

## Roteadores
⛔ **Evite**
- Roteadores padrão de provedores de internet e firmwares de fabricantes: código fechado, atualizações de segurança lentas ou inexistentes e, muitas vezes, comunicação com o fabricante ou provedor.

✅  **Em vez disso, use**
- [OpenWrt](https://openwrt.org/) - Firmware Linux de código aberto que substitui o software padrão de centenas de roteadores domésticos, com anos de atualizações de segurança.
- [OPNsense](https://opnsense.org/) - Plataforma de código aberto para firewall e roteamento, baseada em FreeBSD e destinada a hardware dedicado ou a um PC reserva.
- [IPFire](https://www.ipfire.org/) - Distribuição Linux de firewall reforçada e de código aberto, com prevenção contra invasões e interface Web.

[Voltar ao topo 🔝](#contents)

## Leitores de RSS
⛔ **Evite**
- Feedly
- Inoreader
- Google News

Esses serviços criam um perfil com base em tudo o que você lê. Um leitor local ou auto-hospedado busca os feeds diretamente, para que ninguém veja sua lista de leitura.

✅  **Em vez disso, use**
- [FreshRSS](https://freshrss.org/) - Agregador de feeds auto-hospedado, com interface Web, suporte a vários usuários e API para aplicativos móveis.
- [Miniflux](https://miniflux.app/) - Leitor de feeds minimalista, auto-hospedado, sem rastreamento e escrito em Go.
- [NetNewsWire](https://netnewswire.com/) - Leitor RSS de código aberto para macOS e iOS, que funciona localmente ou sincroniza com serviços auto-hospedados.
- [Fluent Reader](https://github.com/yang991178/fluent-reader) - Leitor RSS de desktop, de código aberto, para Windows, macOS e Linux.
- [NewsFlash](https://gitlab.com/news-flash/news_flash_gtk) - Leitor RSS de código aberto para Linux, que funciona localmente ou com serviços auto-hospedados, como Miniflux e FreshRSS.
- [Newsboat](https://newsboat.org/) - Leitor RSS para o terminal.
- [🤖](#icons) [Feeder](https://github.com/spacecowboy/Feeder) - Leitor RSS de código aberto para Android, que busca feeds diretamente no dispositivo, sem exigir conta.
- [🤖](#icons) [Read You](https://github.com/ReadYouApp/ReadYou) - Leitor RSS de código aberto para Android, com Material You, que funciona localmente ou sincroniza com serviços auto-hospedados.
- [🤖](#icons) [Capy Reader](https://github.com/jocmp/capyreader) - Leitor RSS de código aberto para Android, que funciona localmente ou sincroniza com Miniflux e FreshRSS.

[Voltar ao topo 🔝](#contents)

## Mecanismos de busca

⛔ **Evite**
- Google [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Yahoo! [![](https://shields.tosdr.org/en_309.svg)](https://tosdr.org/en/service/309)
- Bing
- Yandex [![](https://shields.tosdr.org/en_860.svg)](https://tosdr.org/en/service/860)
- Ecosia [![](https://shields.tosdr.org/en_591.svg)](https://tosdr.org/en/service/591)

✅  **Em vez disso, use**
- [librengine](https://github.com/liameno/librengine) [💀](#icons) - Mecanismo de busca na Web que respeita a privacidade.
- [SearxNG](https://github.com/searxng/searxng) - Metamecanismo de busca gratuito na internet, que agrega resultados de vários serviços e bancos de dados.
- [DuckDuckGo](https://duckduckgo.com) - Mecanismo de busca que respeita a privacidade.
- [Brave Search](https://search.brave.com) - Mecanismo de busca que respeita a privacidade e tem [índice independente próprio](https://brave.com/search-independence/).
- [Qwant](https://www.qwant.com/) - Mecanismo de busca sem rastreamento, desenvolvido e hospedado na França, União Europeia.
- [Marginalia](https://marginalia-search.com/) - Mecanismo de busca independente, com rastreador e índice próprios, que prioriza páginas com muito texto e sem fins comerciais. Pode ser auto-hospedado, licenciado sob AGPL-3.0.
- [YaCy](https://yacy.net/) - Mecanismo de busca descentralizado e ponto a ponto, no qual cada usuário executa um nó e compartilha o índice. Código aberto, licenciado sob GPL-2.0.

[Voltar ao topo 🔝](#contents)

## Redes e plataformas sociais

> [!NOTE]
> **O fediverso**
>
> O fediverso é um "**uni**verso" de plataformas de redes sociais "**fede**radas", capazes de se comunicar entre si por meio de um protocolo aberto e padronizado. Isso significa que você pode acessar conteúdo de qualquer uma dessas redes a partir de outra. Você não fica preso a um único provedor e pode escolher livremente. [Assista a este vídeo](https://framatube.org/w/9dRFC6Ya11NCVeYKn8ZhiD?start=8s) da FramaSoft, que ilustra muito bem o conceito.
>
> O ideal seria migrarmos todos para o fediverso e abandonarmos as redes sociais centralizadas e monopolizadas que hoje são as mais populares (Twitter, Reddit, Instagram...).
>
> Todos os aplicativos compatíveis com o fediverso (ActivityPub) estão marcados com [🧩](#icons).

> [!NOTE]
> **Interfaces e clientes alternativos**
>
> Interfaces alternativas ajudam a proteger sua privacidade individual. Você ainda pode acessar conteúdo de serviços proprietários e prejudiciais à privacidade, com alguma proteção e anonimato. Mesmo usando a maioria dessas interfaces, os serviços proprietários ainda receberão solicitações sobre o conteúdo acessado (embora não saibam que é você). Isso ainda prejudica a privacidade coletiva e, de alguma forma, alimenta os algoritmos desses serviços. Somente interfaces (ou clientes) alternativos que funcionam como proxy ocultam seu IP real do provedor de conteúdo.
>
> Você pode usar estas extensões de navegador e aplicativos para redirecionar automaticamente links para interfaces alternativas que respeitam a privacidade:
> - [LibRedirect](https://github.com/libredirect/browser_extension#get) - Extensão Web que redireciona solicitações do YouTube, Twitter... para interfaces e back-ends alternativos que respeitam a privacidade.
> - [UntrackMe](https://www.f-droid.org/en/packages/app.fedilab.nitterizeme/) - Converta links do YouTube, Twitter e outros serviços em links para alternativas gratuitas e de código aberto.



### Plataformas de blog (Medium)

⛔ **Evite**:
- **Medium** - O site tem rastreadores e anúncios do Google.
- **Blogger** - Pertence ao Google e tem rastreadores e anúncios da empresa.

✅ **Alternativas:**
- [Plume](https://github.com/Plume-org/Plume) [🧩](#icons) - Aplicativo de blog federado graças ao ActivityPub.
- [WriteFreely](https://writefreely.org/) [🧩](#icons) - Plataforma de código aberto para criar um espaço de escrita na Web.

✅ **Interfaces alternativas para Medium:**
- [Scribe](https://git.sr.ht/~edwardloveall/scribe/) - Interface alternativa para Medium, inspirada no Invidious.

### Instagram

[![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)

⛔ Não use o Instagram (ou, pelo menos, o cliente oficial). O Instagram é um aplicativo muito invasivo à privacidade, com resultados e feeds tendenciosos baseados nos perfis dos usuários. Também é usado como ferramenta de manipulação e pratica muita censura contra a liberdade de expressão. Por fim, sua interface é tóxica e viciante.

✅ **Em vez disso, use**

**Alternativas ao Instagram**
- [Pixelfed](https://pixelfed.org/) [🧩](#icons) - Alternativa descentralizada, federada e de código aberto ao Instagram, com publicações, vídeos, stories, etiquetas etc.

### Quora

⛔ O site do Quora tem anúncios e rastreadores usados para coletar seus dados, que depois são vendidos ou compartilhados com terceiros. A [política de privacidade](https://tosdr.org/en/service/314) é ruim.

✅ **Interfaces alternativas para Quora (baseadas na Web):**
- [Quetre](https://github.com/zyachel/quetre) - Interface alternativa para Quora, que permite ver respostas sem anúncios, rastreadores e outros excessos.


### YouTube

[![](https://shields.tosdr.org/en_274.svg)](https://tosdr.org/en/service/274)

⛔ Não use o YouTube (ou, pelo menos, o cliente oficial). O YouTube invade muito a privacidade e cria um perfil bastante preciso com base nos seus interesses. Além disso, é uma [ferramenta de radicalização](https://www.pcmag.com/news/does-youtubes-algorithm-lead-to-radicalization) que exibe [conteúdo tendencioso aos usuários](https://arxiv.org/pdf/1908.08313.pdf) para gerar engajamento e fazê-los assistir a cada vez mais conteúdo, criando um [vício](https://medium.com/dataseries/how-youtube-is-addictive-259d5c575883). Nunca apresenta [opiniões alternativas](https://arxiv.org/pdf/1908.08313.pdf) à sua ideologia/tendência. O YouTube pratica muita censura e coleta MUITOS dados seus: interesses, tempo livre, ideologia, gostos, desgostos, preferências musicais etc.

✅ **Em vez disso, use**
- [Peertube](https://joinpeertube.org/en/) [🧩](#icons) - Alternativa gratuita, aberta e descentralizada às plataformas de vídeo.
- [Odysee](https://odysee.com/) - Plataforma de vídeo apoiada pelos criadores do lbry, que usa o protocolo blockchain lbry.
- [DTube](https://github.com/dtube/dtube) - Site descentralizado de compartilhamento de vídeos, repleto de recursos.

✅ **Interfaces alternativas para YouTube (baseadas na Web):**
- [Invidious](https://github.com/iv-org/invidious) - Interface alternativa para YouTube que respeita a privacidade.
- [Piped](https://github.com/TeamPiped/Piped) - Interface alternativa para YouTube, eficiente por design e que respeita a privacidade.
- [ViewTube](https://github.com/ViewTube/viewtube) - Interface alternativa para YouTube, escrita em Vue.js e que respeita a privacidade.
- [Youtube-Local](https://github.com/user234683/youtube-local) - Cliente baseado no navegador para assistir ao YouTube anonimamente e com melhor desempenho das páginas.

✅ **Clientes alternativos para YouTube (aplicativos):**
- [🤖](#icons) [NewPipe](https://newpipe.net/) - Aplicativo alternativo do YouTube para Android. Não exige conta, respeita a privacidade e não tem anúncios.
- [🤖](#icons) [SkyTube](https://github.com/SkyTubeTeam/SkyTube) - Aplicativo alternativo do YouTube para Android. Não exige conta, respeita a privacidade e não tem anúncios.
- [FreeTube](https://github.com/FreeTubeApp/FreeTube) - Reprodutor de YouTube para desktop, de código aberto e desenvolvido com foco na privacidade. (Usa a API RSS local ou o Invidious no back-end.)
- [🤖](#icons) [LibreTube](https://github.com/Libre-tube/LibreTube) - Interface alternativa para YouTube no Android, que usa o Piped.
- [Yattee](https://github.com/yattee/yattee) - Interface alternativa para YouTube no iOS, tvOS e macOS, baseada no Invidious e no Piped.
- [🤖](#icons) [Clipious](https://github.com/lamarios/clipious) [💀](#icons) Cliente Invidious para Android.

### TikTok

[![](https://shields.tosdr.org/en_1448.svg)](https://tosdr.org/en/service/1448)

⛔ Evite usar o TikTok: é um aplicativo de design tóxico, que prejudica não apenas a privacidade dos usuários, mas também sua integridade. Você pode ler [estas várias publicações](https://www.reddit.com/r/privacy/search?q=tiktok&restrict_sr=on&sort=top&t=all).

✅ **Interfaces alternativas para TikTok (baseadas na Web):**
- [ProxiTok](https://github.com/pablouser1/ProxiTok) - Interface alternativa de código aberto para TikTok.

### Twitter

[![](https://shields.tosdr.org/en_195.svg)](https://tosdr.org/en/service/195)

⛔ Evite usar o aplicativo/site oficial do Twitter. Ele rastreia os usuários e cria perfis com base no que seguem, retuítam e curtem. Por padrão, as políticas do Twitter [prejudicam e violam a privacidade dos usuários](https://www.eff.org/deeplinks/2017/05/how-opt-out-twitters-new-privacy-settings).

#### Auto-hospedados

- [Memos](https://github.com/usememos/memos) - Central de memorandos de código aberto e auto-hospedada, com gestão do conhecimento e recursos sociais.

#### Descentralizados

- [Nostr](https://nostr.com/) - Protocolo aberto capaz de criar uma rede «social» global resistente à censura. Não depende de nenhum servidor central confiável, portanto é resiliente; baseia-se em chaves e assinaturas criptográficas, por isso é inviolável; não depende de técnicas P2P e, portanto, funciona. **Observação**: o Nostr é um protocolo e pode oferecer muito mais do que uma alternativa ao Twitter.

> [!NOTE]
> **Redes sociais federadas**: uma rede social federada não é um único site como Twitter ou Facebook, mas sim uma rede de milhares de comunidades operadas por diferentes organizações e pessoas, que oferece uma experiência integrada de mídia social.

- [Mastodon](https://joinmastodon.org/) [🧩](#icons) - Rede social federada de microblogs, gratuita e baseada em protocolos abertos.
  - [Mastodon Apps](https://joinmastodon.org/apps) - Lista de aplicativos Mastodon para Android, iOS, Web e desktop.
- [Pleroma](https://pleroma.social/) [🧩](#icons) - Servidor de rede social federada, gratuito e baseado em protocolos abertos.
  - [Soapbox](https://gitlab.com/soapbox-pub/soapbox-fe) - Interface para Pleroma com foco em identidade visual personalizada e facilidade de uso.

#### Interfaces alternativas
- [Nitter](https://github.com/zedeus/nitter/wiki/Instances) [💀](#icons) - Interface alternativa gratuita e de código aberto para Twitter, com foco na privacidade.
- [Squawker](https://github.com/j-fbriere/squawker) - Cliente de Twitter de código aberto para Android, fork mantido do Fritter.
- [Feetter](https://codeberg.org/pluja/Feetter) [💀](#icons) - Crie, sincronize e gerencie feeds Nitter sem cadastro, em qualquer dispositivo.

### Reddit

[![](https://shields.tosdr.org/en_194.svg)](https://tosdr.org/en/service/194)

⛔ Tente evitar o Reddit ou, pelo menos, seus clientes oficiais, que têm muitos rastreadores e anúncios e compartilham dados desnecessários dos usuários com os servidores do serviço.

✅ **Alternativas ao Reddit:**
- [Aether](https://getaether.net/) - Comunidades públicas efêmeras ponto a ponto.
- [Mbin](https://github.com/MbinOrg/mbin) [🧩](#icons) - Agregador de conteúdo e plataforma de microblogs semelhante ao Reddit para o fediverso; continuação do kbin mantida pela comunidade.
- [Lemmy](https://join-lemmy.org/) [🧩](#icons) - Alternativa federada, escrita em Rust e de código aberto ao Reddit.

✅ **Clientes do Reddit que respeitam a privacidade:**
- [Redlib](https://github.com/redlib-org/redlib) - Interface privada alternativa ao Reddit, originada no Libreddit.

### Plataformas de streaming (Twitch)

[![](https://shields.tosdr.org/en_200.svg)](https://tosdr.org/en/service/200)

⛔ Evite plataformas como Twitch, Patreon e YouTube, pois invadem muito a privacidade tanto dos espectadores quanto a sua. Em vez disso, experimente plataformas auto-hospedadas que protegem a privacidade de todos.

✅ **Alternativas:**
- [Owncast](https://github.com/owncast/owncast) - Assuma o controle da transmissão ao vivo de vídeos executando seu próprio servidor. Streaming e chat prontos para usar.

✅ **Clientes do Twitch que respeitam a privacidade:**
- [🤖](#icons) [Twire](https://github.com/twireapp/Twire) - Navegador e reprodutor de streams do Twitch para Android, sem anúncios e de código aberto.

[Voltar ao topo 🔝](#contents)

### Imgur

[![](https://shields.tosdr.org/en_325.svg)](https://tosdr.org/en/service/325)

⛔ O site do Imgur está repleto de excessos, GIFs, cookies, JavaScript e rastreadores.

✅ **Alternativas:**
- [rimgo](https://codeberg.org/video-prize-ranch/rimgo#instances) - Interface alternativa para Imgur. Somente leitura, sem JavaScript, baseada no rimgu e reescrita em Go.

[Voltar ao topo 🔝](#contents)

### IMDb

⛔ O IMDb pertence à Amazon e seu site está carregado de anúncios e rastreadores de terceiros.

✅ **Interfaces alternativas para IMDb:**
- [libremdb](https://libremdb.iket.me/) - Interface alternativa ao IMDb que respeita a privacidade e remove anúncios e rastreadores. De código aberto e auto-hospedável (AGPL-3.0).

[Voltar ao topo 🔝](#contents)

### Fandom

⛔ As wikis do Fandom (anteriormente Wikia) estão sobrecarregadas de anúncios, vídeos com reprodução automática e rastreadores.

✅ **Interfaces alternativas para Fandom:**
- [BreezeWiki](https://breezewiki.com/) - Interface alternativa para wikis do Fandom, que remove anúncios, vídeos e excessos. De código aberto e auto-hospedável.

[Voltar ao topo 🔝](#contents)

## Ferramentas para trabalho em equipe
⛔ **Evite**
- [![](https://shields.tosdr.org/en_206.svg)](https://tosdr.org/en/service/206)
- Google Meet [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Microsoft Teams [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- [![](https://shields.tosdr.org/en_536.svg)](https://tosdr.org/en/service/536)

✅  **Em vez disso, use**
- [Zulip](https://zulip.com/) - Chat para equipes distribuídas.
- [Stoat](https://stoat.chat/) (anteriormente Revolt) - Plataforma de chat centrada no usuário e desenvolvida com tecnologias Web modernas.
- [Twake](https://twake.app/) - Trabalhe mais rápido em equipe. O Twake atende a todas as suas necessidades organizacionais em uma única plataforma.
- [RocketChat](https://rocket.chat/) - Controle suas comunicações, gerencie seus dados e tenha sua própria plataforma de colaboração para melhorar a produtividade da equipe.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Mantenha suas conversas privadas com o Nextcloud Talk.
- [Mattermost](https://mattermost.com/) - Alternativa de código aberto ao Slack.

> [!WARNING]
> **Clientes/modificações alternativos do Discord:**
> Seu IP e suas mensagens ainda serão compartilhados com o Discord e pertencerão à plataforma; eles não são criptografados.\
> Além disso, usar qualquer uma dessas modificações/clientes [viola](https://x.com/discord/status/1006178587731550208) os [termos de serviço do Discord](https://discord.com/terms), portanto não nos responsabilizamos por suspensões ou encerramentos da sua conta; **porém**, isso [ainda não deveria acontecer](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).

- [Consulte esta seção para ver modificações e clientes alternativos do Discord](https://github.com/pluja/awesome-privacy/blob/main/README.md#alternative-clientsmodifications-of-discord)

[Voltar ao topo 🔝](#contents)

## Gravação de tela

- [Screenity](https://screenity.io/) - Gravador de tela poderoso e que respeita a privacidade, com ferramenta de anotação para criar vídeos melhores para trabalho, educação e muito mais.
- [OBS](https://obsproject.com/) - Software gratuito e de código aberto para gravação de vídeo e transmissão ao vivo.

[Voltar ao topo 🔝](#contents)

## Tradução
⛔ **Evite**
- Google Translate [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- DeepL
- Bing Translator [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **Tradução de texto**
- [Mozilla Translate](https://mozilla.github.io/translate/) - Código aberto; executa o modelo localmente no navegador.
- [Libretranslate](https://libretranslate.com/) - Tradução automática de código aberto, 100% auto-hospedada. Sem limites nem vínculos com serviços proprietários.
- [Apertium](https://apertium.org/) - Plataforma de tradução automática gratuita e de código aberto, que funciona offline no computador.
- [Softcatala](https://www.softcatala.org/traductor/) - Ferramenta de tradução de código aberto, disponível somente para catalão, espanhol, inglês e francês (usa o Apertium).
- [TranslateLocally](https://github.com/XapaJIaMnu/translateLocally) – Tradução automática neural gratuita e de código aberto, que funciona offline no computador.
- [Linguist](https://linguister.io) - Solução de tradução completa, gratuita e de código aberto no navegador, com tradutor offline integrado e [tradutores personalizados](https://linguister.io/docs/CustomTranslator). Tradução de páginas inteiras, síntese de fala, dicionário, tradução de texto digitado pelo usuário e de trechos selecionados na página.

✅ **Interfaces alternativas para Google Translate**
- [Lingva](https://github.com/TheDavidDelta/lingva-translate) [💀](#icons) - Interface alternativa para Google Translate. [Demonstração](https://lingva.ml/).
- [Simplytranslate](https://codeberg.org/ManeraKai/simplytranslate) - Interface alternativa para Google Translate e LibreTranslate. [Demonstração](https://simplytranslate.org/)
- [Mozhi](https://codeberg.org/aryak/mozhi) - Interface alternativa que reúne Google Translate, DeepL, Yandex e outros mecanismos em uma única interface privada. Pode ser auto-hospedada, licenciada sob AGPL-3.0.

[Voltar ao topo 🔝](#contents)

## Sem categoria
- [Skymap](https://skymaponline.net/) - Programa de planetário online e aberto.
- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - fail2ban modernizado, colaborativo e de código aberto.
- [Hetty](https://github.com/dstotijn/hetty) - Kit de ferramentas HTTP para pesquisa de segurança, que busca ser uma alternativa de código aberto ao Burp Suite Pro.
- [Visited](https://github.com/didvc/visited) - Cole localmente o histórico de navegação dos navegadores.

[Voltar ao topo 🔝](#contents)

## Utilitários
- [Deskreen](https://github.com/pavlobu/deskreen) - Transforme qualquer dispositivo em uma segunda tela para o computador.

[Voltar ao topo 🔝](#contents)

## Controle de versão
⛔ **Evite**

- **Github** - [![](https://shields.tosdr.org/en_297.svg)](https://tosdr.org/en/service/297). Embora a política de privacidade não seja muito ruim, o serviço pertence à Microsoft, e é de conhecimento geral que ela usa o código hospedado para treinar modelos de IA.

✅  **Em vez disso, use**
- [Codeberg](https://codeberg.org/) - Plataforma de colaboração que oferece hospedagem Git e serviços para software, conteúdo e projetos livres e de código aberto.
- [Forgejo](https://forgejo.org/) - Forja de software leve e auto-hospedada.
- [GitLab](https://about.gitlab.com/) - Pacote de software DevOps para desenvolver, proteger e operar software.
- [Radicle](https://radicle.dev/) - Conjunto de ferramentas de colaboração em código, de código aberto e ponto a ponto, baseado em Git. Ao contrário das plataformas centralizadas de hospedagem de código, nenhuma entidade controla a rede. Os repositórios são replicados entre pares de forma descentralizada, e os usuários controlam totalmente seus dados e fluxo de trabalho.
- [Gitea](https://gitea.com) - Forja Git leve e auto-hospedada, da qual o Forgejo foi derivado. Código aberto, licenciada sob MIT.

[Voltar ao topo 🔝](#contents)

## Videoconferência e chamadas de áudio
⛔ **Evite**

- **Zoom** - [Política de privacidade muito ruim](https://tosdr.org/en/service/2198). Os aplicativos têm [rastreadores do Google](https://reports.exodus-privacy.eu.org/en/reports/us.zoom.videomeetings/latest/). Exigem muitas permissões.
- **Skype** - [Política de privacidade muito ruim](https://tosdr.org/en/service/244). Os aplicativos têm [rastreadores do Google e da Microsoft](https://reports.exodus-privacy.eu.org/en/reports/com.skype.insiders/latest/). Exigem permissões demais.
- **Google Meet** - [Política de privacidade muito ruim](https://tosdr.org/en/service/217). Os aplicativos têm [rastreadores do Google](https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.tachyon/latest/) integrados (por ser um aplicativo do Google). Exigem permissões demais.
- **Whatsapp** - [Política de privacidade ruim](https://tosdr.org/en/service/198). Os aplicativos têm [rastreadores do Google](https://reports.exodus-privacy.eu.org/en/reports/com.whatsapp/latest/) e, muito provavelmente, rastreadores do Facebook integrados (por ser um aplicativo do Facebook). Exigem permissões demais.
- **Instagram** - [Política de privacidade muito ruim](https://tosdr.org/en/service/219). Os aplicativos têm [rastreadores do Facebook](https://reports.exodus-privacy.eu.org/en/reports/com.instagram.android/latest/). Exigem permissões demais.
- **Discord** - [Política de privacidade muito ruim](https://tosdr.org/en/service/536). Os aplicativos têm [vários rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.discord/latest/). Exigem muitas permissões.
- Clubhouse

✅  **Em vez disso, use**
- [BigBlueButton](https://bigbluebutton.org/) - Sistema de conferência Web desenvolvido para o ensino online.
- [Briefing](https://github.com/holtwick/briefing/) - Chat de vídeo em grupo, direto e seguro. Usa somente tecnologias abertas (como WebRTC), compatíveis com todos os navegadores modernos.
- [Chitchatter](https://chitchatter.im/) - Chat P2P seguro, sem servidor, descentralizado e efêmero. Oferece suporte a texto, áudio, vídeo, compartilhamento de tela e arquivos.
- [Jam](https://github.com/jam-systems/jam) [💀](#icons) - Seu próprio Clubhouse de código aberto para pequenas conferências, amigos e comunidades.
- [Jami](https://jami.net/) - Conferências de áudio e vídeo P2P.
- [Jitsi Meet](https://github.com/jitsi/jitsi-meet) - Videoconferência mais segura, flexível e totalmente gratuita. Para usar a instância oficial, é necessário fazer login. Recomenda-se a auto-hospedagem.
- [Mirotalk P2P](https://p2p.mirotalk.com/) - Videoconferências WebRTC, P2P, gratuitas, simples, seguras e rápidas, em tempo real, com resolução de até 4K e 60 fps, compatíveis com todos os navegadores e plataformas.
- [Mumble](https://www.mumble.info/) - Aplicativo de comunicação por voz de código aberto e com recursos avançados.
- [PeerCalls](https://github.com/peer-calls/peer-calls) - Chamadas de vídeo em grupo ponto a ponto para todos, escritas em Go e TypeScript.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Chamadas de vídeo e chat auto-hospedados, executados no seu próprio servidor Nextcloud via WebRTC (AGPL-3.0).


##### Clientes/modificações alternativos do Discord:
> [!WARNING]
> Seu IP e suas mensagens ainda serão compartilhados com o Discord e pertencerão à plataforma; eles não são criptografados.\
> Além disso, usar qualquer uma dessas modificações/clientes [viola](https://x.com/discord/status/1006178587731550208) os [termos de serviço do Discord](https://discord.com/terms), portanto não nos responsabilizamos por suspensões ou encerramentos da sua conta; **porém**, isso [ainda não deveria acontecer](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).
- [OpenAsar](https://openasar.dev/) - Alternativa de código aberto ao app.asar do Discord para desktop, com uma opção [Sem rastreamento](https://github.com/GooseMod/OpenAsar#readme) que desativa os relatórios de falhas e erros do Discord.
- [Vencord](https://github.com/Vendicated/Vencord) - Modificação de cliente do Discord que faz as coisas de outra maneira.
- [BetterDiscord](https://betterdiscord.app/) - Modificação de cliente do Discord. Também é necessário instalar o plugin [DoNotTrack](https://betterdiscord.app/plugin/DoNotTrack) para bloquear rastreadores.
- [Kernel](https://github.com/kernel-mod/electron) [💀](#icons) - Modificação de cliente Electron muito pequena e rápida, com muitos recursos. Também é necessário instalar o pacote [Discord Utilities](https://github.com/slow/discord-utilities) para bloquear rastreadores.
- [Replugged](https://replugged.dev/) - Continuação da modificação de cliente descontinuada [Powercord](https://powercord.dev).
- [WebCord](https://github.com/SpacingBat3/WebCord) - Cliente para Discord e Fosscord sem APIs, desenvolvido com Electron.
- [🤖](#icons) [Aliucord](https://github.com/Aliucord/Aliucord) - Modificação do aplicativo Discord para Android que [desativa totalmente o rastreamento do Discord](https://github.com/Aliucord/Aliucord/blob/main/Aliucord/src/main/java/com/aliucord/coreplugins/NoTrack.java).
- [Vesktop](https://vesktop.dev/) - Cliente independente para desktop Discord, que bloqueia a telemetria e já vem com Vencord integrado. Código aberto, licenciado sob GPL-3.0.

[Voltar ao topo 🔝](#contents)

## Edição de vídeo
⛔ **Evite**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- Sony Vegas
- DaVinci Resolve

Esses programas vêm repletos de rastreadores e telemetria. Veja [aqui](https://www.gnu.org/proprietary/malware-adobe.html) a lista completa de motivos para **não** usar produtos Adobe. Quase o mesmo se aplica a muitos editores proprietários.

✅  **Em vez disso, use**

- [kdenlive](https://kdenlive.org/) - Editor de vídeo de código aberto. Gratuito, fácil de usar para qualquer finalidade e para sempre.
- [LosslessCut](https://github.com/mifi/lossless-cut) - O LosslessCut busca ser a interface gráfica multiplataforma definitiva do FFmpeg para operações extremamente rápidas e sem perdas em arquivos de vídeo, áudio, legendas e outras mídias relacionadas.
- [Olive Video Editor](https://olivevideoeditor.org/) - Editor de vídeo não linear avançado, gratuito e de código aberto, atualmente em fase alfa.
- [OpenCut](https://github.com/OpenCut-app/OpenCut) - [Beta] Editor de vídeo gratuito e de código aberto para Web, desktop e dispositivos móveis.
- [Shotcut](https://www.shotcut.org/) - Editor de vídeo multiplataforma simples, gratuito e de código aberto.

[Voltar ao topo 🔝](#contents)

## VPNs

⛔ **Evite**

- [VPNs gratuitos](https://techcrunch.com/2020/09/24/free-vpn-bad-for-privacy/) da Google Play ou de qualquer loja de aplicativos. Esses serviços não são gratuitos: eles sugam os dados da sua conexão, mantêm registros e criam seu perfil para [vender seus dados a anunciantes](https://thenextweb.com/news/be-cautious-free-vpns-are-selling-your-data-to-3rd-parties). Se um governo quiser rastrear alguém, esses aplicativos serão os primeiros a ceder.

- Aplicativos de VPN de código fechado, como Surfshark ou NordVPN, podem ser menos confiáveis, pois ninguém pode ter certeza de como eles lidam com seus dados. Além disso, pagar com cartão de crédito identifica você na transação. E, se for necessário informar seu e-mail, ele também poderá identificar você caso tenha sido usado em outros serviços.


✅  **Em vez disso, use**

Estas são algumas opções de código aberto e realmente privadas (sem necessidade de dados pessoais e/ou cartão de crédito):

- [IVPN](https://ivpn.net) - VPN sem registros, com aplicativos de código aberto, cadastro sem e-mail e pagamentos em dinheiro, Monero ou Bitcoin.
- [nadanada](https://nadanada.me) (anteriormente LNVPN) - VPN WireGuard com pagamento por uso, sem conta, paga pela Lightning Network ou por outras criptomoedas.
- [Mullvad VPN](https://mullvad.net) - VPN sem registros, com aplicativos de código aberto, contas numéricas anônimas e pagamentos em dinheiro ou criptomoedas.
- [Proton VPN](https://protonvpn.com) - VPN suíça sem registros, com aplicativos de código aberto e auditados em todas as plataformas e plano gratuito sem limite de dados.
- [SPN](https://safing.io/) - Rede de código aberto em todo o sistema, que encaminha cada conexão de aplicativo por uma rota própria entre vários nós, separando os endereços IP por conexão em vez de usar uma única saída compartilhada. Integrada ao firewall Safing Portmaster para Windows e Linux.
- [Amnezia VPN](https://amnezia.org) - VPN auto-hospedada e resistente à censura, implantada no seu próprio servidor, com aplicativos de código aberto auditados (GPL-3.0).
- [Veja mais em kycnot.me (categoria VPN)](https://kycnot.me/?categories=vpn) - Provedores de VPN sem exigência de KYC.

[Voltar ao topo 🔝](#contents)

## Navegadores

⛔ **Evite**

- **Google Chrome** - Pertence ao Google e é baseado no projeto de código aberto Chromium (que também pertence ao Google). Inclui muitos recursos invasivos à privacidade e, na maioria das vezes, fica conectado à sua conta Google. Está sujeito à [política de privacidade do Google](https://tosdr.org/en/service/217), conhecida por ser muito ruim. O Google pretende impor o [Manifest v3](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening), que prejudica diretamente os esforços pela privacidade.
- **Microsoft Edge** - Versão do Chromium com a identidade visual da Microsoft e rastreadores da Microsoft em vez dos do Google. Está sujeito à [política de privacidade da Microsoft](https://tosdr.org/en/service/244), que também é muito ruim. Se ainda quiser usá-lo, você pode [seguir este guia](https://anonymousplanet.net/guide/#hardening-edge) para reforçar um pouco a segurança.
- **Opera** - O Opera foi [adquirido por um consórcio de investidores chineses](https://en.wikipedia.org/wiki/Opera_(web_browser)#Acquisition_by_Chinese_consortium). O aplicativo tem [muitos rastreadores](https://reports.exodus-privacy.eu.org/de/reports/com.opera.browser/latest/).

✅  **Em vez disso, use**

#### Android / iOS
- [Brave](https://brave.com/) - Android/iOS. O Brave oferece, pronto para usar, um conjunto bastante bom de proteções de privacidade e contra rastreadores.
- [Firefox](https://www.firefox.com/en-US/mobile/) - Android/iOS.
    - [🤖](#icons) [IronFox](https://gitlab.com/ironfox-oss/IronFox) - Fork do navegador Mull. Fork reforçado do Firefox para Android, sem blobs proprietários.
- [🤖](#icons) [Vanadium](https://vanadium.app/) - Versões do Chromium aprimoradas pelo GrapheneOS quanto à privacidade e segurança.
- [🤖](#icons) [Privacy Browser](https://www.stoutner.com/privacy-browser/)
- [Tor Browser](https://www.torproject.org/) - iOS/Android. Proteja-se contra rastreamento e vigilância e contorne a censura.
- [Cromite](https://github.com/uazo/cromite) - Fork do Chromium baseado no Bromite, com bloqueio de anúncios integrado e foco na privacidade.

#### Desktop
- [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium) - Maneira leve de remover a dependência dos serviços Web do Google. O Ungoogled Chromium é o Chromium do Google sem essa dependência.
- [Brave](https://brave.com/) - O Brave oferece, pronto para usar, um conjunto bastante bom de proteções de privacidade e contra rastreadores.
- [Firefox](https://www.firefox.com/en-US/) - Navegador independente e de código aberto. Precisa de alguns [ajustes e reforços](https://anonymousplanet.net/guide/#hardening-firefox) para oferecer ótima privacidade.
  - [LibreWolf](https://librewolf.net/) - Fork do Firefox com foco na privacidade.
- [Tor Browser](https://www.torproject.org/) - Firefox reforçado que encaminha o tráfego pela rede Tor para resistir ao rastreamento, à vigilância e à censura.
- [Mullvad Browser](https://mullvad.net/en/browser/) - Navegador com as características de privacidade e segurança do Tor Browser, mas sem usar a rede Tor.
- [Zen Browser](https://zen-browser.app/) - Navegador baseado em Firefox, com proteção aprimorada contra rastreamento ativada por padrão e foco em uma navegação tranquila e sem excessos. Licenciado sob MPL-2.0.
- [Floorp](https://floorp.app/) - Fork do Firefox com telemetria desativada e personalização adicional, desenvolvido com foco na privacidade. Código aberto, licenciado sob MPL-2.0.

> [!TIP]
> Pode ser interessante aprender o que você pode fazer para reforçar a segurança do navegador. Siga esta seção do [Guia do Mochileiro para o Anonimato Online](https://anonymousplanet.net/guide/#hardening-browsers). Se não entender o que está fazendo, não faça isso, pois você pode acabar prejudicando sua privacidade em vez de protegê-la.

[Voltar ao topo 🔝](#contents)

### Extensões de navegador

#### Antirrastreamento
Leia sobre o que a extensão faz antes de instalá-la. Se não entender o que está fazendo, você pode acabar prejudicando sua privacidade. Além disso, extensões demais podem deixar a navegação lenta.

- [uBlock Origin](https://ublockorigin.com/) - Bloqueador de anúncios gratuito e de código aberto, leve para CPU e memória.
	- [Leia a documentação da extensão](https://github.com/gorhill/uBlock/wiki/Blocking-mode) e escolha um dos modos recomendados para aumentar sua privacidade.
	- Acesse Configurações > Lista de filtros > Incômodos e ative easylist-cookies. Isso evitará os irritantes pop-ups de cookies.
- [LibRedirect](https://github.com/libredirect/browser_extension) - Extensão Web simples que redireciona solicitações do Twitter, YouTube, Google Maps e muitos outros serviços para alternativas que respeitam a privacidade. O antigo Privacy Redirect não é mais mantido; o LibRedirect é um fork mantido.
- [Privacy Badger](https://privacybadger.org/) - Extensão de navegador da EFF que aprende a bloquear rastreadores enquanto você navega. Código aberto, licenciada sob GPL-3.0.
- [ClearURLs](https://clearurls.xyz/) - Extensão de navegador que remove automaticamente parâmetros de rastreamento de links e URLs. Código aberto, licenciada sob LGPL-3.0.

#### Ferramentas úteis
- [Single File](https://github.com/gildas-lormeau/SingleFile) - Salve uma cópia fiel de uma página Web inteira em um único arquivo HTML para usá-la offline.

### Sincronização do navegador
- [xBrowserSync](https://www.xbrowsersync.org/) - Sincronização de navegador como deve ser: segura, anônima e gratuita!

[Voltar ao topo 🔝](#contents)

## Denúncias de irregularidades

✅  **Em vez disso, use**
- [GlobaLeaks](https://www.globaleaks.org/) - Plataforma de denúncias auto-hospedável para organizações, redações e ativistas, que substitui portais de denúncia hospedados por terceiros. Código aberto (AGPL-3.0).
- [SecureDrop](https://securedrop.org/) - Sistema auto-hospedado de envio de informações, que permite às redações receber documentos de fontes anônimas pela rede Tor, substituindo e-mail e uploads na nuvem. Código aberto (AGPL-3.0).

[Voltar ao topo 🔝](#contents)

## Privacidade vs. segurança vs. anonimato

Anonimato, privacidade e segurança costumam ser usados como sinônimos, mas na verdade representam conceitos distintos. É importante entender as diferenças entre eles.

- Privacidade diz respeito a regular quem tem acesso às suas informações pessoais, saber quais dados são coletados sobre você e poder decidir quem pode acessá-los e de que forma. Em resumo, privacidade envolve controlar suas informações pessoais.

- Segurança refere-se à proteção das suas informações pessoais contra acesso não autorizado ou roubo. Isso envolve garantir que seus dados sejam protegidos e armazenados com segurança, dificultando o acesso por pessoas mal-intencionadas.

- Anonimato consiste em garantir que suas ações não possam ser rastreadas até você. Isso significa que, mesmo que alguém descubra o que você está fazendo, não conseguirá identificar você como a fonte.

É importante observar que privacidade e segurança não são necessariamente interdependentes. Por exemplo, os sistemas do Google são seguros e dificilmente serão invadidos, mas o Google ainda tem acesso aos seus dados pessoais e os utiliza.

Privacidade e anonimato também não estão necessariamente ligados. Serviços como o Signal oferecem altos níveis de privacidade, pois não coletam dados sobre o que você diz, com quem conversa ou como usa o aplicativo; ainda assim, talvez não sejam anônimos, pois você precisa se cadastrar com seu número de telefone (que, em muitos casos, está vinculado à sua identidade).

Por fim, existem serviços que podem oferecer os três aspectos: anonimato, privacidade e segurança. O principal objetivo desta lista é oferecer alternativas que priorizem a privacidade. Elas dão a você controle sobre seus dados e não os coletam nem vendem.

[Voltar ao topo 🔝](#contents)

## Ícones

| Ícone | Significado |
|-------|---------|
| 💀    | Atenção: o desenvolvimento deste serviço parece estar parado há muito tempo. Talvez o projeto tenha sido abandonado. Pesquise antes de usar. |
| ♻️    | O software é um fork: alguém fez uma cópia do projeto original e passou a desenvolvê-la de forma independente. |
| 🧩    | O software usa ActivityPub, um protocolo descentralizado de redes sociais. |
| 🤖    | Somente para Android. |

[Voltar ao topo 🔝](#contents)
