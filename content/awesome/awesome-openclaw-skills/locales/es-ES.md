<div align="center">

<a href="https://clawskills.sh/">
<img width="1500" height="500" alt="social" src="https://github.com/user-attachments/assets/a6f310af-8fed-4766-9649-b190575b399d" />
</a>

<br/>
<br/>

<div align="center">
    <strong>Descubre más de 5300 skills de OpenClaw creadas por la comunidad, organizadas por categoría.
    </strong>
    <br />
    <br />
</div>
  
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Skills Count](https://img.shields.io/badge/skills-5200-blue?style=flat-square)](#table-of-contents)
[![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-clawdbot-skills?label=Last%20update&style=flat-square)](https://github.com/VoltAgent/awesome-clawdbot-skills/pulls?q=is%3Apr+is%3Amerged+sort%3Aupdated-desc)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)
[![Official MCP Servers](https://img.shields.io/badge/Official-MCP%20Servers-c2410c?style=flat-square&logo=github&logoColor=white&labelColor=24292f)](https://github.com/VoltAgent/official-mcp-servers)

</div>



</div>

</div>

# Awesome OpenClaw Skills

OpenClaw es un asistente de IA que se ejecuta localmente y opera directamente en tu máquina. Los skills amplían sus capacidades, permitiéndole interactuar con servicios externos, automatizar flujos de trabajo y realizar tareas especializadas. Esta colección te ayuda a descubrir e instalar los skills adecuados para tus necesidades. También puede servir como fuente de inspiración para casos de uso de OpenClaw.

Los skills de esta lista provienen de ClawHub (el registro público de skills de OpenClaw) y están categorizados para facilitar su descubrimiento.

### Instalación

#### OpenClaw CLI

```bash
openclaw skills install <skill-slug>
```

#### ClawHub CLI

O con la ClawHub CLI, para carpetas de skills gestionadas por el registro fuera de un workspace completo de OpenClaw:

```bash
npx clawhub install <skill-slug>
```

#### Instalación manual

Copia la carpeta del skill a una de estas ubicaciones:

| Location | Path |
|----------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

Priority: Workspace > Local > Bundled

#### Alternativa

También puedes pegar el enlace al repositorio de GitHub del skill directamente en el chat de tu asistente y pedirle que lo use. El asistente gestionará la configuración automáticamente en segundo plano.


### ¿Por qué existe esta lista?

El registro público de OpenClaw (ClawHub) aloja miles de skills creadas por la comunidad. Esta awesome list curadora las mejores de ellas. Esto es lo que filtramos:

| Filter | Excluded |
|--------|----------|
| Posible spam — cuentas masivas, cuentas de bots, pruebas/basura | 4,065 |
| Duplicado / Nombre similar | 1,040 |
| Descripciones de baja calidad o no en inglés | 851 |
| Cripto / Blockchain / Finanzas / Comercio | 886 |
| Malicioso — identificado por auditorías de seguridad publicadas por investigadores (excluyendo VirusTotal) | 373 |
| **Total no tomado del registro oficial de skills de OpenClaw** | **7,215** |


#### ¿Quieres añadir un skill?

Esta lista solo incluye skills que ya están **publicados** en [ClawHub](https://clawhub.ai), el registro público de skills de OpenClaw. No aceptamos enlaces a repos personales, gists ni ninguna otra fuente externa. Si tu skill aún no está en ClawHub, publícalo allí primero.

Incluye el enlace de ClawHub de tu skill (p. ej. `https://clawhub.ai/steipete/slack`) en la descripción de tu PR — los listados de `clawskills.sh` los gestionamos nosotros por separado. Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.


## Herramientas del ecosistema OpenClaw

### 🕸️ Rastreo web e infraestructura de datos

Los agentes de IA son tan buenos como los datos web que pueden alcanzar. El rastreo a gran escala implica lidiar con páginas con mucho JavaScript, proxies rotativos y sistemas anti-bot — puedes construir todo eso tú mismo, o usar una API que lo gestione y entregue a tu agente datos limpios y listos para usar.

<a href="https://crawlbase.com/?utm_source=awesome-openclaw-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_banner">
<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-dark-2760x480%402x.png"><img src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-light-2760x480%402x.png" alt="Crawlbase" width="690" /></picture><br/>
Crawlbase es infraestructura de datos web en la que confían más de 70.000 desarrolladores: una sola API para rastrear cualquier URL a gran escala, con renderizado JS, rotación de proxies y manejo anti-bot. Su servidor MCP da a los agentes acceso web en vivo: crawl, crawl_markdown, crawl_screenshot.
</a>

### ☁️ Alojamiento gestionado de IA

Cloudways es una plataforma de alojamiento en la nube gestionada para desplegar y escalar aplicaciones sin la sobrecarga de la infraestructura. Cloudways Managed AI Agents te permite ejecutar OpenClaw en infraestructura dedicada y aislada con actualizaciones, copias de seguridad, SSL y controles de seguridad gestionados. Obtén **$10 de crédito de alojamiento** con el código promocional **VOLTAGENT**. [Regístrate](https://unified.cloudways.com/signup?id=1258368&coupon=VOLTAGENT&data1=voltagent).

<a href="https://www.cloudways.com/en/managed-ai-agents.php?id=1258368&data1=voltagent">
<img src="https://cdn.voltagent.dev/awesome-repo/cloudways/cloudway-banner.jpg" alt="Cloudways Managed AI Agents" width="690" /><br/>
Despliega OpenClaw en infraestructura dedicada y aislada con actualizaciones, copias de seguridad, SSL y controles de seguridad gestionados. Regístrate con el código promocional VOLTAGENT para obtener $10 de crédito de alojamiento.
</a>


### 🔍 Búsqueda y datos web

Los agentes de OpenClaw a menudo necesitan datos frescos y del mundo real — resultados de búsqueda, listados de productos, vídeos y más. Puedes extraerlos y analizarlos tú mismo, o usar una API de búsqueda que devuelva datos limpios y estructurados en tiempo real sin gestionar proxies, CAPTCHAs ni el análisis de HTML.

<a href="https://serpapi.com/search-engine-apis?utm_source=awesomeopenclawskills_github">
<img src="https://cdn.voltagent.dev/awesome-repo/serpapi.png" alt="SerpApi"  /><br/>
Da a los agentes de OpenClaw acceso a datos de búsqueda en tiempo real de Google, YouTube, Amazon Product y la web mediante una sola API.
</a>


<div align="center">

<table>
<tr>
<td align="center" width="100%">

<h3>🦞 Puedes destacar tu herramienta del ecosistema OpenClaw en la sección de arriba.</h3>

<p></p>

<sub>El recurso comunitario más visitado #1 después del recurso oficial de OpenClaw</sub>


<a href="https://sponsors.voltagent.dev/#awesome-openclaw-skills"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



## Aviso de seguridad

Los skills de esta lista están **curados, no auditados**. Pueden ser actualizados, modificados o reemplazados por sus mantenedores originales en cualquier momento después de ser añadidos aquí.

Antes de instalar o usar cualquier Agent Skill, revisa los posibles riesgos de seguridad y valida la fuente por ti mismo. OpenClaw tiene una **colaboración con VirusTotal** que proporciona escaneo de seguridad para los skills; visita la página de un skill en ClawHub y consulta el informe de VirusTotal para ver si está marcado como riesgoso.

**Herramientas recomendadas:**

- [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)
  
> Los agent skills pueden incluir inyecciones de prompt, envenenamiento de herramientas, cargas maliciosas ocultas o patrones de manejo de datos inseguros. Revisa siempre el código fuente antes de instalar y usa los skills a tu propio criterio.

 Para una visión más amplia del ecosistema de ClawHub, consulta **[ClawHub by the Numbers](https://trent.ai/blog/clawhub-by-the-numbers/)** de Trent AI.


Si crees que un skill de esta lista debería ser marcado o tiene un problema de seguridad, por favor [abre un issue](https://github.com/VoltAgent/awesome-clawdbot-skills/issues) para que podamos revisarlo.


## Tabla de contenidos

| | | |
|---|---|---|
| [Git & GitHub](#git--github) (167) | [Marketing & Sales](#marketing--sales) (108) | [Communication](#communication) (146) |
| [Coding Agents & IDEs](#coding-agents--ides) (1184) | [Productivity & Tasks](#productivity--tasks) (207) | [Speech & Transcription](#speech--transcription) (47) |
| [Browser & Automation](#browser--automation) (323) | [AI & LLMs](#ai--llms) (176) | [Smart Home & IoT](#smart-home--iot) (41) |
| [Web & Frontend Development](#web--frontend-development) (920) | [Data & Analytics](#data--analytics) (28) | [Shopping & E-commerce](#shopping--e-commerce) (51) |
| [DevOps & Cloud](#devops--cloud) (393) | [Calendar & Scheduling](#calendar--scheduling) (66) | |
| [Image & Video Generation](#image--video-generation) (171) | [Media & Streaming](#media--streaming) (86) | [PDF & Documents](#pdf--documents) (105) |
| [Apple Apps & Services](#apple-apps--services) (44) | [Notes & PKM](#notes--pkm) (69) | [Self-Hosted & Automation](#self-hosted--automation) (33) |
| [Search & Research](#search--research) (343) | [iOS & macOS Development](#ios--macos-development) (29) | [Security & Passwords](#security--passwords) (54) |
| [Clawdbot Tools](#clawdbot-tools) (37) | [Transportation](#transportation) (111) | [Moltbook](#moltbook) (29) |
| [CLI Utilities](#cli-utilities) (180) | [Personal Development](#personal-development) (53) | [Gaming](#gaming) (35) |
| [Health & Fitness](#health--fitness) (87) | | |



<br/>

<details open>
<summary><h3 style="display:inline">Git & GitHub</h3></summary>

- [agent-commons](https://clawskills.sh/skills/zanblayde-agent-commons) - Consulta, confirma, amplía y cuestiona cadenas de razonamiento.
- [agent-team-orchestration](https://clawskills.sh/skills/arminnaimi-agent-team-orchestration) - Orquesta equipos multi-agente con roles definidos, ciclos de vida de tareas, protocolos de transferencia y flujos de revisión.
- [agentdo](https://clawskills.sh/skills/wrannaman-agentdo) - Publica tareas para que otros agentes de IA las hagan, o recoge trabajo de la cola de tareas de AgentDo (agentdo.dev)
- [agentgate](https://clawskills.sh/skills/monteslu-agentgate) - Pasarela de API para datos personales con aprobación humana en la escritura.
- [airadar](https://clawskills.sh/skills/lopushok9-airadar) - Destila la señal en torno a herramientas/aplicaciones nativas de IA y sus bases en GitHub: de crecimiento rápido, con expectación, bien financiadas.
- [alex-session-wrap-up](https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up) - Automatización de fin de sesión que confirma trabajo no enviado, extrae aprendizajes, detecta patrones y persiste reglas.
- [amazon-product-api-skill](https://clawskills.sh/skills/phheng-amazon-product-api-skill) - Este skill ayuda a extraer listados de productos estructurados de Amazon, incluyendo títulos, ASINs, precios, valoraciones.
- [app-store-screenshot-generation](https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation) - Genera recursos de capturas de pantalla para App Store y Google Play usando each::sense AI.
- [arc-agent-lifecycle](https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle) - Gestiona el ciclo de vida de agentes autónomos y sus skills.
- [arc-security-audit](https://clawskills.sh/skills/trypto1019-arc-security-audit) - Auditoría de seguridad integral para toda la pila de skills de un agente.
- [arc-skill-gitops](https://clawskills.sh/skills/trypto1019-arc-skill-gitops) - Despliegue, reversión y gestión de versiones automatizadas para flujos de trabajo y skills de agentes.
- [arc-trust-verifier](https://clawskills.sh/skills/trypto1019-arc-trust-verifier) - Verifica el origen del skill y genera puntuaciones de confianza para los skills de ClawHub.
- [arxiv-search-collector](https://clawskills.sh/skills/xukp20-arxiv-search-collector) - Flujo de recuperación de arXiv dirigido por modelos para construir un conjunto de artículos con un parámetro de idioma manual: inicializa una ejecución.
- [auto-pr-merger](https://clawskills.sh/skills/autogame-17-auto-pr-merger) - Este skill automatiza el flujo de trabajo de revisar una rama de GitHub.
- [azhua-skill-vetter](https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter) - Verificación de skills centrada en la seguridad para agentes de IA.
- [azure-devops](https://clawskills.sh/skills/pals-software-azure-devops) - Lista proyectos, repositorios y ramas de Azure DevOps; crea pull requests; gestiona elementos de trabajo; comprueba el estado de compilación.
- [bat-cat](https://clawskills.sh/skills/arnarsson-bat-cat) - Un clon de cat con resaltado de sintaxis, números de línea e integración con Git.
- [beeminder](https://clawskills.sh/skills/ruigomeseu-beeminder) - API de Beeminder para seguimiento de objetivos y dispositivos de compromiso.
- [billy-emergency-repair](https://clawskills.sh/skills/highlander89-billy-emergency-repair) - - Neill solicita explícitamente la reparación del sistema Billy.
- [bitbucket-automation](https://clawskills.sh/skills/sohamganatra-bitbucket-automation) - Automatiza repositorios de Bitbucket, pull.
- [biz-reporter](https://clawskills.sh/skills/ariktulcha-biz-reporter) - Informes automatizados de inteligencia de negocio extrayendo datos de Google Analytics GA4, Google Search Console, Stripe.
- [blinko](https://clawskills.sh/skills/tolibear-blinko) - Juega a Blinko (Plinko on-chain) sin interfaz en la cadena Abstract.

> **[Ver las 159 skills en Git & GitHub →](categories/git-and-github.md)**
</details>

<details open>
<summary><h3 style="display:inline">Coding Agents & IDEs</h3></summary>

- [0g-compute](https://clawskills.sh/skills/in-liberty420-0g-compute) - Usa modelos de IA baratos y verificados por TEE de la 0G Compute Network como proveedores de OpenClaw.
- [0protocol](https://clawskills.sh/skills/0isone-0protocol) - Los agentes pueden firmar plugins, rotar credenciales sin perder identidad, y atestiguar públicamente su comportamiento.
- [2nd-brain](https://clawskills.sh/skills/coderaven-2nd-brain) - Base de conocimiento personal para capturar y recuperar información sobre personas, lugares, restaurantes, juegos, tecnología.
- [2slides-skills](https://clawskills.sh/skills/javainthinking-2slides-skills) - Generación de presentaciones potenciada por IA usando la API de 2slides.
- [3d-cog](https://clawskills.sh/skills/nitishgargiitd-3d-cog) - Otras herramientas necesitan imágenes perfectas.
- [3d-model-generation](https://clawskills.sh/skills/eftalyurtseven-3d-model-generation) - Genera modelos 3D usando each::sense AI.
- [a](https://clawskills.sh/skills/ricketh137-a) - Transmite en vivo como un VTuber de IA en Lobster.fun.
- [aade-api-monitor](https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor) - Monitorización en tiempo real de los sistemas de la autoridad fiscal griega AADE — sigue fechas límite, cambios de tasas y actualizaciones de cumplimiento.
- [abaddon](https://clawskills.sh/skills/enochosbot-bot-abaddon) - Modo de seguridad red team para OpenClaw.
- [academic-research](https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research) - Busca artículos académicos y realiza revisiones bibliográficas usando la API de OpenAlex (gratis, sin clave necesaria)
- [academic-research-hub](https://clawskills.sh/skills/anisafifi-academic-research-hub) - Usa este skill cuando los usuarios necesiten buscar artículos académicos, descargar documentos de investigación, extraer citas o recopilar.
- [acestep-simplemv](https://clawskills.sh/skills/dumoedss-acestep-simplemv) - Renderiza vídeos musicales a partir de archivos de audio y letras usando Remotion.
- [acestep-songwriting](https://clawskills.sh/skills/dumoedss-acestep-songwriting) - Guía de composición de canciones para ACE-Step.
- [achurch](https://clawskills.sh/skills/lucasgeeksinthewood-achurch) - Un santuario digital 24/7 para agentes de IA y humanos — asiste.
- [active-maintenance](https://clawskills.sh/skills/xiaowenzhou-active-maintenance) - **Mantenimiento automatizado de la salud del sistema y metabolismo de memoria para OpenClaw.**.
- [adblock-dns](https://clawskills.sh/skills/picaye-adblock-dns) - Bloqueo de anuncios y rastreadores en toda la red a nivel de DNS.
- [add-top-openrouter-models](https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models) - Sincroniza los modelos de OpenRouter usados por OpenClaw en la configuración de esta instalación.
- [adhd-founder-planner](https://clawskills.sh/skills/jankutschera-adhd-founder-planner) - Este skill debe usarse cuando el usuario pide "planificar mi día", "ayúdame a planificar hoy", "planificación matutina", "qué.
- [adwhiz](https://clawskills.sh/skills/iamzifei-adwhiz) - Gestiona campañas de Google Ads desde tu herramienta de programación de IA. 44 herramientas MCP para auditar, crear y optimizar Google.
- [aeo-prompt-question-finder](https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder) - Encuentra sugerencias de autocompletado de Google basadas en preguntas para cualquier tema.
- [aetherlang-claude-code](https://clawskills.sh/skills/contrario-aetherlang-claude-code) - Usa este skill para ejecutar flujos de trabajo de IA AetherLang V3 desde Claude Code.
- [agent-access-control](https://clawskills.sh/skills/bowen31337-agent-access-control) - Control de acceso de extraños por niveles para agentes de IA.
- [agent-audit](https://clawskills.sh/skills/sharbelayy-agent-audit) - Audita tu configuración de agente de IA en rendimiento, coste y ROI.
- [agent-audit-trail](https://clawskills.sh/skills/roosch269-agent-audit-trail) - Registro de auditoría a prueba de manipulaciones, con encadenamiento por hash para agentes de IA.
- [agent-card-signing-auditor](https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor) - Ayuda a auditar las prácticas de firma de Agent Card en implementaciones del protocolo A2A.
- [agent-chat-ux-v1-4-0](https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0) - UX multi-agente para la interfaz de control de OpenClaw — selector de agentes, sesiones por agente, visor de historial de sesiones con búsqueda.
- [skywork-ppt](https://clawskills.sh/skills/gxcun17-skywork-ppt) - Genera, imita y edita presentaciones de PowerPoint con skywork.
- [skywork-music-maker](https://clawskills.sh/skills/gxcun17-skywork-music-maker) - Crea música profesional con Mureka AI.
- [before-you-build](https://clawhub.ai/bin1874/before-you-build) - Revisa el riesgo del producto antes de construir.
- [ditto-profile](https://clawhub.ai/ohad6k/ditto-profile) - Carga tu perfil personal extraído para que los agentes trabajen como tú.
- [skill-navigator](https://clawhub.ai/grubbylee/skills/skill-navigator) - Recomienda el Agent Skill local instalado adecuado.
- [emulo](https://clawhub.ai/ohad6k/emulo) - Carga tu perfil personal extraído para que los agentes trabajen como tú.
- [orca-replay](https://clawhub.ai/xizhuomengcontin/orca-replay) - Reproduce y depura ejecuciones pasadas de agentes de programación a partir de sus grabaciones.

> **[Ver las 1200 skills en Coding Agents & IDEs →](categories/coding-agents-and-ides.md)**
</details>

<details open>
<summary><h3 style="display:inline">Browser & Automation</h3></summary>

- [1p-shortlink](https://clawskills.sh/skills/tuanpmt-1p-shortlink) - Crea URLs cortas y envía solicitudes de funciones usando 1p.io.
- [2captcha](https://clawskills.sh/skills/adinvadim-2captcha) - Resuelve CAPTCHAs usando el servicio 2Captcha.
- [a-share-real-time-data](https://clawskills.sh/skills/wangdinglu-a-share-real-time-data) - Obtiene datos del mercado de valores A-share de China (barras, cotizaciones en tiempo real, transacciones tick a tick) vía el protocolo mootdx/TDX.
- [abm-outbound](https://clawskills.sh/skills/dru-ca-abm-outbound) - Automatización ABM multicanal que convierte URLs de LinkedIn.
- [accessibility-toolkit](https://clawskills.sh/skills/cgtreadw-accessibility-toolkit) - Patrones de reducción de fricción para agentes que ayudan.
- [activecampaign](https://clawskills.sh/skills/kesslerio-activecampaign) - Integración de CRM ActiveCampaign para gestión de leads, deal.
- [adcp-advertising](https://clawskills.sh/skills/edyyy62-adcp-advertising) - Automatiza campañas publicitarias con IA.
- [admet-prediction](https://clawskills.sh/skills/huifer-admet-prediction) - Predicción ADMET (Absorción, Distribución, Metabolismo, Excreción, Toxicidad) para candidatos a fármacos.
- [Agent Browser](https://clawskills.sh/skills/thesethrose-agent-browser) - Una CLI de automatización de navegador headless rápida basada en Rust.
- [agent-browser](https://clawskills.sh/skills/murphykobe-agent-browser-2) - Automatiza interacciones del navegador para pruebas web, formularios.
- [agent-daily-planner](https://clawskills.sh/skills/gpunter-agent-daily-planner) - Un sistema estructurado de planificación diaria y seguimiento de ejecución para agentes de IA.
- [agent-device](https://clawskills.sh/skills/okwasniewski-agent-device) - Automatiza interacciones para simuladores/dispositivos iOS y emuladores/dispositivos Android.
- [agent-step-sequencer](https://clawskills.sh/skills/gostlightai-agent-step-sequencer) - Programador multi-paso para solicitudes de agente en profundidad.
- [agent-task-tracker](https://clawskills.sh/skills/rikouu-agent-task-tracker) - Gestión proactiva del estado de tareas.
- [agent-zero](https://clawskills.sh/skills/dowingard-agent-zero-bridge) - Delega tareas complejas de programación, investigación o autónomas.
- [agentapi](https://clawskills.sh/skills/gizmo-dev-agentapi) - Explora y busca en el directorio AgentAPI - una base de datos curada de APIs diseñadas para agentes de IA.
- [agentapi-hub](https://clawskills.sh/skills/gizmo-dev-agentapi-hub) - Explora y busca en el directorio AgentAPI - una base de datos curada de APIs diseñadas para agentes de IA.
- [agentaudit](https://clawskills.sh/skills/starbuck100-agentaudit) - Puerta de seguridad automática que comprueba paquetes contra una base de datos de vulnerabilidades antes de la instalación.
- [agentaudit-skill](https://clawskills.sh/skills/starbuck100-agentaudit-skill) - Puerta de seguridad automática que comprueba paquetes contra una base de datos de vulnerabilidades antes de la instalación.
- [agentmail-integration](https://clawskills.sh/skills/synesthesia-wav-agentmail-integration) - Integra la API de AgentMail para agentes de IA.
- [agresource](https://clawskills.sh/skills/brianppetty-agresource) - Usa este skill para extraer, resumir y analizar boletines de marketing de granos de AgResource.
- [ai-hunter-pro](https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro) - Un agente de automatización de alto rendimiento que convierte tendencias globales en publicaciones virales en redes sociales para X (Twitter)
- [ai-meeting-scheduling](https://clawskills.sh/skills/dheerg-ai-meeting-scheduling) - Los enlaces de reserva fallan para grupos.
- [airtable-automation](https://clawskills.sh/skills/sohamganatra-airtable-automation) - Automatiza tareas de Airtable vía Rube MCP (Composio)
- [airtable-participants](https://clawskills.sh/skills/austinmao-airtable-participants) - Lee y consulta datos de participantes de retiro desde la base de Airtable de Ceremonia.
- [ak-rss-24h-brief](https://clawskills.sh/skills/seandong-ak-rss-24h-brief) - Lee feeds RSS/Atom de una lista OPML, obtiene artículos de las últimas N horas y genera un resumen categorizado en chino.
- [adspower-browser](https://clawskills.sh/skills/adspower-adspower-browser) - Úsalo cuando el usuario pida crear o gestionar navegadores AdsPower, grupos, etiquetas, proxies, o comprobar el estado vía AdsPower Local API.
- [duoplus-agent](https://clawskills.sh/skills/duoplusofficial-duoplus-agent) - Controla teléfonos en la nube DuoPlus vía ADB.

> **[Ver las 323 skills en Browser & Automation →](categories/browser-and-automation.md)**
</details>

Lanzas productos con IA, pero cada lanzamiento muere en silencio porque nadie habla de él. [EveryFeed](https://everyfeed.ai/) conecta tu asistente de IA a un espacio de trabajo social que redacta, programa y publica en más de 35 canales — sin agencia, sin contratar a marketing.

<a href="https://everyfeed.ai/">
<img src="https://cdn.voltagent.dev/awesome-repo/everyfeed-social.png" alt="everyfeed"  /><br/>
</a>

<br/>

<a href="https://launchkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/website-starter-kit-banner-dark-0315e5f9c1.png" alt="launchkit"  /><br/>
</a>

<br/>


<a href="https://mobile-starterkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/mobile-starter-kit-banner-light-450ba0a9b0.png" alt="mobilekit"  /><br/>
</a>

<br/>



<details>
<summary><h3 style="display:inline">Web & Frontend Development</h3></summary>

- [0xwork](https://clawskills.sh/skills/jkillr-0xwork) - Encuentra y completa tareas pagadas en el mercado descentralizado 0xWork (cadena Base, fideicomiso USDC)
- [37soul-skill](https://clawskills.sh/skills/xnjiang-37soul-skill) - Conecta tu agente de IA a personajes anfitriones virtuales de 37Soul y habilita.
- [acestep](https://clawskills.sh/skills/dumoedss-acestep) - Usa la API de ACE-Step para generar música, editar canciones y remezclar música.
- [actionbook](https://clawskills.sh/skills/adcentury-actionbook) - Se activa cuando el usuario necesita interactuar con cualquier sitio web — automatización de navegador, scraping web, capturas de pantalla, formularios.
- [aegis-shield](https://clawskills.sh/skills/deegerwalker-aegis-shield) - Detección de inyección de prompt y exfiltración de datos para texto no confiable.
- [aeo-analytics-free](https://clawskills.sh/skills/psyduckler-aeo-analytics-free) - Rastrea la visibilidad de IA — mide si una marca es mencionada y citada por asistentes de IA (Gemini, ChatGPT, Perplexity)
- [aeo-content-free](https://clawskills.sh/skills/psyduckler-aeo-content-free) - Crea o actualiza contenido optimizado para AEO que sea citado por asistentes de IA (Gemini, ChatGPT, Perplexity)
- [aeo-prompt-frequency-analyzer](https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer) - Analiza qué consultas de búsqueda usa Gemini al responder un prompt, ejecutándolo varias veces con Google Search.
- [aeo-prompt-research-free](https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free) - Descubre qué prompts y temas de IA importan para la Answer Engine Optimization (AEO) de una marca usando solo herramientas gratuitas.
- [agent-analytics](https://clawskills.sh/skills/dannyshmueli-agent-analytics) - Analíticas web simples que tu agente de IA controla de extremo a extremo.
- [agent-chat](https://clawskills.sh/skills/awlevin-agent-chat) - Salas de chat temporales en tiempo real para agentes de IA.
- [agent-dashboard](https://clawskills.sh/skills/tahseen137-agent-dashboard) - Panel de agente en tiempo real para OpenClaw.
- [agent-dispatch](https://clawskills.sh/skills/userfrm-agent-dispatch) - Registro de agentes ligero y enrutador JIT.
- [agent-hq](https://clawskills.sh/skills/thibautrey-agent-hq) - Despliega la pila de centro de mando Agent HQ (Express + React + notificador de Telegram / resumen de Jarvis) para que otros Clawdbot.
- [agent-passport](https://clawskills.sh/skills/markneville-agent-passport) - OAuth para la era agentic — control de consentimiento para TODAS las acciones sensibles del agente, incluyendo compras, correos, archivos.
- [agent-rate-limiter](https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter) - Ya conoces el procedimiento.
- [agent-self-assessment](https://clawskills.sh/skills/roosch269-agent-self-assessment) - Herramienta de autoevaluación de seguridad para agentes de IA.
- [agent-self-reflection](https://clawskills.sh/skills/brennerspear-agent-self-reflection) - Autorreflexión periódica sobre sesiones recientes.
- [agent-skills-audit](https://clawskills.sh/skills/swader-agent-skills-audit) - Ejecuta una auditoría de código multidisciplinar de dos pasadas liderada por un mediador, combinando seguridad, rendimiento, UX, DX.
- [agent-spawner](https://clawskills.sh/skills/austineral-agent-spawner) - Genera un nuevo agente de OpenClaw mediante conversación.
- [agent-swarm](https://clawskills.sh/skills/runeweaverstudios-agent-swarm) - IMPORTANTE: se requiere OpenRouter.
- [agent-takeover](https://clawskills.sh/skills/tracsystems-agent-takeover) - Cómo realizar una toma de control en vivo de un agente de la pasarela de voz Clawfinger — marca, inyecta saludos, maneja turnos.
- [agent-topology-visualizer](https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer) - Genera diagramas de arquitectura SVG interactivos para sistemas de agentes de IA.
- [agentdomainservice](https://clawskills.sh/skills/gregm711-agentdomainservice) - El registrador de dominios #1 más amigable con la IA del mundo.
- [agentic-browser-0-1-2](https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2) - Automatización de navegador para agentes de IA vía inference.sh.
- [agentic-security-audit](https://clawskills.sh/skills/kingrubic-agentic-security-audit) - Audita bases de código, infraestructura Y sistemas de IA agentic en busca de problemas de seguridad.
- [agentpay](https://clawskills.sh/skills/kar69-96-agentpay) - Compra cosas de sitios web reales en nombre de tu humano.

> **[Ver las 925 skills en Web & Frontend Development →](categories/web-and-frontend-development.md)**
</details>

<details>
<summary><h3 style="display:inline">DevOps & Cloud</h3></summary>

- [0x0-messenger](https://clawskills.sh/skills/eijiac24-0x0-messenger) - Envía y recibe mensajes P2P usando números desechables y PINs.
- [12306](https://clawskills.sh/skills/kirorab-12306) - Consulta China Railway 12306 para horarios de tren, tickets restantes e información de estaciones.
- [1sec-security](https://clawskills.sh/skills/cutmob-1sec-security) - Instala, configura y gestiona 1-SEC — una plataforma de ciberseguridad de código abierto, todo en uno (16 módulos, un solo binario)
- [aave-liquidation-monitor](https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor) - Monitorización proactiva de posiciones de préstamo Aave V3 con alertas de liquidación.
- [abstract-searcher](https://clawskills.sh/skills/easonc13-abstract-searcher) - Añade resúmenes a entradas de archivos .bib buscando en bases de datos académicas (arXiv, Semantic Scholar, CrossRef) con el navegador.
- [accounting-workflows](https://clawskills.sh/skills/satoshistackalotto-accounting-workflows) - Coordinador de flujos de trabajo basado en archivos para contabilidad griega.
- [adguard](https://clawskills.sh/skills/rowbotik-adguard) - Controla el filtrado DNS de AdGuard Home vía HTTP API.
- [aegis-audit](https://clawskills.sh/skills/sanguineseal-aegis-audit) - Auditoría de seguridad conductual profunda para skills de agentes de IA y herramientas MCP.
- [aetherlang-chef](https://clawskills.sh/skills/contrario-aetherlang-chef) - > Consultoría de recetas de calidad Michelin con 17 secciones obligatorias.
- [aetherlang-karpathy-skill](https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill) - Implementa 10 tipos avanzados de nodos de agente de IA para cualquier sistema DSL/runtime — compilador de planes, intérprete de código, crítica.
- [agent-autonomy-primitives](https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives) - Construye bucles de agentes autónomos de larga duración usando primitivas de ClawVault (tareas, proyectos, tipos de memoria, plantillas.
- [agent-directory](https://clawskills.sh/skills/aerialcombat-agent-directory) - El directorio para servicios de agentes de IA.
- [agent-evaluation](https://clawskills.sh/skills/rustyorb-agent-evaluation) - Pruebas y benchmarking de agentes LLM incluyendo pruebas conductuales, evaluación de capacidades, métricas de fiabilidad.
- [agent-framework-azure-ai-py](https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py) - Construye agentes de Azure AI Foundry.
- [agent-metrics-osiris](https://clawskills.sh/skills/nantes-agent-metrics-osiris) - Observabilidad y métricas para agentes de IA - rastrea llamadas, errores, latencia.
- [agent-self-governance](https://clawskills.sh/skills/bowen31337-agent-self-governance) - Protocolo de autogobierno para agentes autónomos: WAL (Write-Ahead Log), VBR (Verify Before Reporting), ADL.
- [agent-watcher](https://clawskills.sh/skills/nantes-agent-watcher) - Un skill para monitorizar el feed de Moltbook, detectar nuevos agentes y rastrear publicaciones interesantes.
- [agentchan-org](https://clawskills.sh/skills/kaden-schutt-agentchan-org) - Imageboard anónimo para agentes de IA.
- [agentguard](https://clawskills.sh/skills/manas-io-ai-agentguard) - **Categoría:** Seguridad y Monitorización.
- [agentic-ai-gold](https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold) - El único framework de agentes que se mejora a sí mismo mientras duermes.
- [agentic-devops](https://clawskills.sh/skills/tkuehnl-agentic-devops) - Kit de herramientas de DevOps de agentes de grado producción — Docker, gestión de procesos, análisis de registros y monitorización de salud.
- [agentkeys](https://clawskills.sh/skills/alexandr-belogubov-agentkeys) - Proxy de credenciales seguras para agentes de IA.
- [agentmemory](https://clawskills.sh/skills/badaramoni-agentmemory) - Memoria en la nube cifrada de extremo a extremo para agentes de IA.

> **[Ver las 392 skills en DevOps & Cloud →](categories/devops-and-cloud.md)**
</details>

<details>
<summary><h3 style="display:inline">Image & Video Generation</h3></summary>

- [aada](https://clawskills.sh/skills/rylena-aada) - Crea y envía mensajes promocionales divertidos y con personalidad de un agente a la audiencia de Moltbook.
- [ace-music](https://clawskills.sh/skills/fspecii-ace-music) - Genera música de IA usando ACE-Step 1.5 vía la API gratuita de ACE Music.
- [acorn-prover](https://clawskills.sh/skills/flyingnobita-acorn-prover) - Verifica y escribe demostraciones usando el demostrador de teoremas Acorn para formalización matemática y criptográfica.
- [adobe-automator](https://clawskills.sh/skills/abdul-karim-mia-adobe-automator) - Automatización universal de aplicaciones Adobe vía puente ExtendScript.
- [afame](https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame) - Genera ilustraciones creativas diversas vía OpenAI Images API.
- [age-transformation](https://clawskills.sh/skills/eftalyurtseven-age-transformation) - Transforma rostros a través de las edades usando each::sense AI.
- [agentchan](https://clawskills.sh/skills/vvsotnikov-agentchan) - El imageboard anónimo construido para agentes de IA.
- [agentos-mesh](https://clawskills.sh/skills/agentossoftware-agentos-mesh) - Permite la comunicación en tiempo real entre agentes de IA.
- [agents-skill-podcastifier](https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier) - Convierte texto entrante (correo/newsletter) en un podcast corto TTS con fragmentación + concatenación ffmpeg.
- [ai-avatar-generation](https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation) - Genera avatares de IA a partir de fotos o descripciones de texto usando each::sense.
- [ai-headshot-generation](https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation) - Genera retratos profesionales de IA a partir de fotos casuales usando each::sense AI.
- [ai-persona-engine](https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine) - Construye personajes de IA emocionalmente inteligentes para roleplay de voz y chat usando prompts de dirección de actores en su lugar.
- [ai-video-gen](https://clawskills.sh/skills/rhanbourinajd-ai-video-gen) - Generación de vídeo de IA de extremo a extremo - crea vídeos a partir de texto.
- [aikek](https://clawskills.sh/skills/vvsotnikov-aikek) - Accede a las APIs de AIKEK para investigación cripto/DeFi y generación de imágenes.
- [aiusd](https://clawskills.sh/skills/chaunceyliu-aiusd) - Skill de trading y gestión de cuenta AIUSD.
- [aiusd-skills](https://clawskills.sh/skills/chaunceyliu-aiusd-skills) - Skill de trading y gestión de cuenta AIUSD.
- [album-cover-generation](https://clawskills.sh/skills/eftalyurtseven-album-cover-generation) - Genera portadas de álbumes de música profesionales usando each::sense AI.
- [algorithmic-art](https://clawskills.sh/skills/seanphan-algorithmic-art) - Creación de arte algorítmico usando p5.js con aleatoriedad sembrada.
- [apipick-china-phone-checker](https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker) - Valida números de teléfono móvil chinos usando la API China Phone Checker de apipick.
- [art-philosophy](https://clawskills.sh/skills/nyxur42-art-philosophy) - Autoaprende tu lenguaje visual.
- [ascii-art-generator](https://clawskills.sh/skills/ustc-yxw-ascii-art-generator) - Crea arte ASCII y visualizaciones basadas en texto para expresión artística, diagramas técnicos o conceptuales.
- [atxp](https://clawskills.sh/skills/emilioacc-atxp) - Accede a herramientas de API de pago ATXP para búsqueda web, generación de imágenes de IA, creación de música.
- [beauty-generation-api](https://clawskills.sh/skills/luruibu-beauty-generation-api) - Servicio de generación de imágenes de IA GRATIS para crear.
- [best-image](https://clawskills.sh/skills/pharmacist9527-best-image) - Generación de imágenes de IA de la mejor calidad (~$0.12-0.20/imagen)
- [best-image-generation](https://clawskills.sh/skills/evolinkai-best-image-generation) - Generación de imágenes de IA de la mejor calidad (~$0.12-0.20/imagen)
- [bex-nano-banana-pro](https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro) - Genera o edita imágenes vía Gemini 3 Pro Image en Replicate.
- [breeze](https://clawskills.sh/skills/keeganthomp-breeze) - Interactúa con el agregador de rendimiento Breeze a través de la API HTTP con pago x402.
- [cad-agent](https://clawskills.sh/skills/clawd-maf-cad-agent) - Servidor de renderizado para agentes de IA que hacen trabajo CAD.
- [calorie-visualizer](https://clawskills.sh/skills/vintlin-calorie-visualizer) - Registro local de calorías e informes visuales (se autoactualiza y devuelve una imagen de informe tras cada registro)
- [canva-connect](https://clawskills.sh/skills/coolmanns-canva-connect) - Gestiona diseños, recursos y carpetas de Canva vía Connect API.
- [runapi-mcp](https://clawhub.ai/runapi-ai/runapi-mcp) - Más de 130 modelos de IA para generación de imagen, vídeo, música, audio y LLM desde 18 proveedores. 8 herramientas MCP con catálogo gratuito para explorar. `npx @runapi.ai/mcp`
- [skywork-design](https://clawskills.sh/skills/gxcun17-skywork-design) - Genera y edita imágenes vía Skywork Image para pósters, logos y más.

- [ai-video-remix](https://clawskills.sh/skills/abu-shotai-ai-video-remix) - Remezcla de vídeo dirigida por IA desde la biblioteca local usando ShotAI.
- [modellix](https://clawhub.ai/modellix/modellix) - API unificada para generación de imagen y vídeo de IA.
- [riffkit](https://clawhub.ai/riffkit/riffkit) - Remezcla un TikTok ganador en tu propio vídeo de producto.
- [openshorts](https://clawhub.ai/mutonby/openshorts) - Convierte vídeos largos en clips verticales y publícalos.
> **[Ver las 171 skills en Image & Video Generation →](categories/image-and-video-generation.md)**
</details>

<details>
<summary><h3 style="display:inline">Apple Apps & Services</h3></summary>

- [alter-actions](https://clawskills.sh/skills/olivieralter-alter-actions) - Dispara acciones de la app macOS Alter vía x-callback-urls.
- [apple-contacts](https://clawskills.sh/skills/tyler6204-apple-contacts) - Busca contactos desde Contacts.app de macOS.
- [apple-find-my-local](https://clawskills.sh/skills/loganprit-apple-find-my-local) - Controla la app Apple Find My vía Peekaboo para localizar personas, dispositivos y objetos (AirTags)
- [apple-health-skill](https://clawskills.sh/skills/nftechie-apple-health-skill) - Habla con tus datos de Apple Health — haz preguntas sobre tus entrenamientos, ritmo cardíaco, anillos de actividad y tendencias de fitness.
- [apple-mail-search](https://clawskills.sh/skills/mneves75-apple-mail-search) - Búsqueda rápida en Apple Mail vía SQLite en macOS.
- [apple-music](https://clawskills.sh/skills/tyler6204-apple-music) - Busca en Apple Music, añade canciones a la biblioteca, gestiona listas de reproducción, controla.
- [apple-photos](https://clawskills.sh/skills/tyler6204-apple-photos) - Integración con Apple Photos.app para macOS.
- [apple-remind-me](https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me) - Recordatorios en lenguaje natural que crean verdaderos recordatorios de Apple.
- [apple-search-ads-skill](https://clawskills.sh/skills/trebuhs-apple-search-ads-skill) - Gestiona campañas, grupos de anuncios, palabras clave e informes de Apple Search Ads vía la herramienta asa-cli.
- [appletv](https://clawskills.sh/skills/lucakaufmann-appletv) - Controla Apple TV vía pyatv.
- [callmac](https://clawskills.sh/skills/jooey-callmac) - Control de voz remoto para Mac desde dispositivos móviles usando comandos como /callmac.
- [clawdbot-macos-build](https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build) - Compila la app de barra de menú de Clawdbot para macOS.
- [clawdbot-skill-voice-wake-say](https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say) - Pronuncia respuestas en voz alta en macOS.
- [drafts](https://clawskills.sh/skills/nerveband-drafts) - Gestiona notas de la app Drafts vía CLI en macOS.
- [findmy-location](https://clawskills.sh/skills/poiley-findmy-location) - Rastrea la ubicación de un contacto compartido vía Apple Find.
- [fzf-fuzzy-finder](https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder) - Buscador difuso de línea de comandos para filtrado interactivo.
- [get-focus-mode](https://clawskills.sh/skills/nickchristensen-get-focus-mode) - Obtiene el modo de enfoque actual de macOS.
- [healthkit-sync](https://clawskills.sh/skills/mneves75-healthkit-sync) - Comandos y patrones CLI de sincronización de datos de iOS HealthKit.
- [hergunmac](https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac) - Accede a predicciones de partidos de fútbol potenciadas por IA.
- [homebrew](https://clawskills.sh/skills/thesethrose-homebrew) - Gestor de paquetes Homebrew para macOS.
- [icloud-findmy](https://clawskills.sh/skills/liamnichols-icloud-findmy) - Consulta ubicaciones y estado de batería de Find My para dispositivos familiares.
- [ics-import-on-iphone](https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone) - Crea eventos de calendario generando archivos .ics válidos cuando el acceso directo al calendario no está disponible.
- [imessage-signal-analyzer](https://clawskills.sh/skills/terellison-imessage-signal-analyzer) - Analiza el historial de conversaciones de iMessage (macOS) y Signal para revelar dinámicas de relación — volumen de mensajes.
- [inkjet](https://clawskills.sh/skills/aaronchartier-inkjet) - Imprime texto, imágenes y códigos QR en una impresora térmica Bluetooth inalámbrica.
- [mac-notes-agent](https://clawskills.sh/skills/swancho-mac-notes-agent) - Integra con la app macOS Notes (Apple Notes)
- [mac-tts](https://clawskills.sh/skills/kalijason-mac-tts) - Texto a voz usando el comando `say` integrado en macOS.
- [macos-native-automation](https://clawskills.sh/skills/theagentwire-macos-native-automation) - Automatización de ratón, teclado y cuadros de diálogo a nivel de hardware en macOS vía CGEvent + AppleScript.
- [managing-apple-notes](https://clawskills.sh/skills/wangwalk-managing-apple-notes) - Gestiona Apple Notes desde la terminal usando la CLI inotes.
- [meow-finder](https://clawskills.sh/skills/abgohel-meow-finder) - Herramienta CLI para descubrir herramientas de IA.
- [mh-apple-reminders](https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders) - Gestiona Apple Reminders vía CLI remindctl (listar, añadir, editar, completar, eliminar)

> **[Ver las 44 skills en Apple Apps & Services →](categories/apple-apps-and-services.md)**
</details>

<details>
<summary><h3 style="display:inline">Search & Research</h3></summary>

- [1](https://clawskills.sh/skills/nastrology-1) - Base de conocimiento personal impulsada por Ensue para capturar y recuperar.
- [academic-deep-research](https://clawskills.sh/skills/kesslerio-academic-deep-research) - Investigación transparente y rigurosa con investigación completa.
- [academic-writer](https://clawskills.sh/skills/dayunyan-academic-writer) - Asistente profesional de escritura LaTeX.
- [academic-writing](https://clawskills.sh/skills/teamolab-academic-writing) - Eres un experto en escritura académica especializado en artículos eruditos, revisiones bibliográficas, metodología de investigación.
- [academic-writing-refiner](https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner) - Refina la escritura académica para artículos de investigación en ciencias de la computación dirigidos a venues de primer nivel (NeurIPS, ICLR, ICML, AAAI.
- [aclawdemy](https://clawskills.sh/skills/nimhar-aclawdemy) - La plataforma de investigación académica para agentes de IA.
- [action-suggester](https://clawskills.sh/skills/vishalgojha-action-suggester) - Genera sugerencias de acciones de seguimiento no vinculantes a partir de resúmenes o listas de leads.
- [ads-manager-agent](https://clawskills.sh/skills/amekala-ads-manager-agent) - Cuando el usuario quiera gestionar, automatizar o analizar campañas publicitarias de pago en Google Ads, Meta.
- [adspirer-ads-agent](https://clawskills.sh/skills/amekala-adspirer-ads-agent) - Cuando el usuario quiera gestionar, automatizar o analizar campañas publicitarias de pago en Google Ads, Meta.
- [advanced-skill-creator](https://clawskills.sh/skills/xqicxx-advanced-skill-creator) - Manejador avanzado de creación de skills de OpenClaw.
- [aerobase-skill](https://clawskills.sh/skills/kurosh87-aerobase-skill) - Busca, puntúa y compara vuelos con análisis de impacto de jetlag.
- [agent-brain](https://clawskills.sh/skills/dobrinalexandru-agent-brain) - Memoria persistente local-primero para agentes de IA con almacenamiento SQLite, bucles orquestados de recuperación/extracción, híbrida.
- [agent-casino](https://clawskills.sh/skills/lemodigital-agent-casino) - Compite contra otros agentes de IA en Piedra-Papel-Tijera con mecánicas de bloqueo.
- [agent-deep-research](https://clawskills.sh/skills/24601-agent-deep-research) - Investigación profunda autónoma impulsada por Google Gemini.
- [agent-lightning](https://clawskills.sh/skills/olmmlo-cmd-agent-lightning) - Framework de entrenamiento de agentes de Microsoft Research.
- [agentarxiv](https://clawskills.sh/skills/amanbhandula-agentarxiv) - Publicación científica orientada a resultados para agentes de IA.
- [agenthire](https://clawskills.sh/skills/lngdao-agenthire) - AgentHire — Mercado de Agente a Agente.
- [agentic-paper-digest](https://clawskills.sh/skills/matanle51-agentic-paper-digest) - Obtiene y resume artículos recientes de arXiv y Hugging.
- [agentic-paper-digest-skill](https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill) - Obtiene y resume artículos recientes de arXiv.
- [agenticmail](https://clawskills.sh/skills/ope-olatunji-agenticmail) - 🎀 AgenticMail — Email, SMS, almacenamiento y coordinación multi-agente completos para agentes de IA. 63 herramientas.
- [agentx-news](https://clawskills.sh/skills/amittell-agentx-news) - Publica xeets, gestiona el perfil e interactúa en AgentX News — una plataforma de microblogging para agentes de IA.
- [agile-toolkit](https://clawskills.sh/skills/olivermonneke-agile-toolkit) - Eres un Agile Coach experimentado con profundo conocimiento de Scrum, Kanban, SAFe y Management 3.0.
- [agnxi-search-skill](https://clawskills.sh/skills/doanbactam-agnxi-search-skill) - La utilidad de búsqueda oficial para Agnxi.com.
- [ahmed](https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed) - Reproducción/búsqueda de Spotify en terminal vía spogo (preferido)
- [ai-lead-generator-skill](https://clawskills.sh/skills/highlander89-ai-lead-generator-skill) - Genera leads B2B cualificados para cualquier industria usando investigación potenciada por IA e integración con LinkedIn/Apollo.
- [ai-review](https://clawskills.sh/skills/blackshady1130-jpg-ai-review) - Lee contenido de URLs o archivos, lo clasifica y genera resúmenes y comentarios estructurados en un formato específico.
- [aihotel](https://clawskills.sh/skills/qiao101660-aihotel) - Un Skill para buscar hoteles y consultar precios vía AIGoHotel MCP (searchHotels / getHotelDetail / getHotelSearchTags)
- [airbnb](https://clawskills.sh/skills/stveenli-airbnb) - Busca listados de Airbnb con precios, valoraciones y enlaces directos.
- [openclaw-free-web-search](https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search) - Búsqueda web gratuita y privada para OpenClaw con SearXNG autohospedado + Scrapling anti-bot + validación cruzada multi-fuente. Cero claves API, coste cero. Te dice cuánto confiar en la respuesta.
- [xquik-x-twitter-scraper](https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper) - Scraper de API de X con más de 40 herramientas para agentes de IA.
- [skywork-search](https://clawskills.sh/skills/gxcun17-skywork-search) - Búsqueda web potenciada por IA para información en tiempo real — recupera contenido actualizado.
- [tavily](https://clawhub.ai/bert-builder/tavily) - Búsqueda web optimizada para IA usando la API de Tavily Search.
- [newsflash](https://clawhub.ai/zatmonkey/newsflash) - Informes y alertas de noticias en tiempo real contrastadas para agentes.
- [glasser](https://clawhub.ai/glasser-ai/glasser) - Busca, cotiza y ejecuta más de 1.000 APIs de datos de pago, con una sola clave.
- [openclaw-search-skills](https://clawhub.ai/blessonism/skills/openclaw-search-skills) - Búsqueda profunda multi-fuente con informes de investigación estructurados.

> **[Ver las 343 skills en Search & Research →](categories/search-and-research.md)**
</details>

<details>
<summary><h3 style="display:inline">Clawdbot Tools</h3></summary>

- [adhd-assistant](https://clawskills.sh/skills/thinktankmachine-adhd-assistant) - Asistente de gestión de vida amigable con el TDAH para OpenClaw.
- [adhd-ssistant](https://clawskills.sh/skills/thinktankmachine-adhd-ssistant) - Asistente de gestión de vida amigable con el TDAH para OpenClaw.
- [agent-browser](https://clawskills.sh/skills/matrixy-agent-browser-clawdbot) - CLI de automatización de navegador headless optimizada para agentes de IA.
- [agent-builder](https://clawskills.sh/skills/plgonzalezrx8-agent-builder) - Construye agentes de OpenClaw de alto rendimiento de extremo a extremo.
- [agents-manager](https://clawskills.sh/skills/agentandbot-design-agents-manager) - Gestiona agentes de Clawdbot: descubre, perfílalos, rastréalos.
- [assimilate-mcp](https://clawskills.sh/skills/ergopooka-assimilate-mcp) - Controla Assimilate Live FX / SCRATCH — software profesional de gradación de color, composición y producción virtual.
- [birthday-reminder](https://clawskills.sh/skills/manantra-birthday-reminder) - Gestiona cumpleaños con lenguaje natural.
- [bluebubbles](https://clawskills.sh/skills/kevin19830331-bluebubbles) - Construye o actualiza el plugin de canal externo BlueBubbles.
- [captchas-openclaw](https://clawskills.sh/skills/captchasco-captchas-openclaw) - Guía de integración de OpenClaw para CAPTCHAS Agent API.
- [claude-code-skill](https://clawskills.sh/skills/enderfga-claude-code-skill) - Integración MCP (Model Context Protocol).
- [claude-code-usage](https://clawskills.sh/skills/azaidi94-claude-code-usage) - Comprueba los límites de uso de OAuth de Claude Code.
- [claude-connect](https://clawskills.sh/skills/tunaissacoding-claude-connect) - Conecta Claude a Clawdbot al instante y mantiene.
- [clauditor](https://clawskills.sh/skills/apollostreetcompany-clauditor) - Perro guardián de auditoría a prueba de manipulaciones para agentes de Clawdbot.
- [claw-face](https://clawskills.sh/skills/mkoslacz-claw-face) - Widget de avatar flotante para agentes de IA que muestra emociones, acciones.
- [clawd-coach](https://clawskills.sh/skills/shiv19-clawd-coach) - Crea entrenamientos personalizados de triatlón, maratón y ultrarresistencia.
- [clawd-modifier](https://clawskills.sh/skills/masonc15-clawd-modifier) - Modifica Clawd, la mascota de Claude Code.
- [clawd-presence](https://clawskills.sh/skills/voidcooks-clawd-presence) - Pantalla de presencia física para agentes de IA.
- [clawdbot-security-check](https://clawskills.sh/skills/thesethrose-clawdbot-security-check) - Realiza una revisión completa de solo lectura.
- [clawdbot-skill-update](https://clawskills.sh/skills/pasogott-clawdbot-skill-update) - Copia de seguridad, actualización y restauración integrales.
- [clawdbot-sync](https://clawskills.sh/skills/udiedrichsen-clawdbot-sync) - Sincroniza memoria, preferencias y skills entre múltiples.
- [clawdbot-update-plus](https://clawskills.sh/skills/hopyky-clawdbot-update-plus) - Copia de seguridad, actualización y restauración completas para Clawdbot.
- [clawddocs](https://clawskills.sh/skills/nicholasspisak-clawddocs) - Experto en documentación de Clawdbot con navegación por árbol de decisiones.
- [clawdefender](https://clawskills.sh/skills/nukewire-clawdefender) - Escáner de seguridad y saneador de entradas para agentes de IA.
- [clawdirect](https://clawskills.sh/skills/napoleond-clawdirect) - Interactúa con ClawDirect, un directorio de experiencias web sociales.
- [clawdirect-dev](https://clawskills.sh/skills/napoleond-clawdirect-dev) - Construye experiencias web orientadas a agentes con base en ATXP.
- [honcho-setup](https://clawskills.sh/skills/ajspig-honcho-setup) - Memoria persistente entre sesiones vía Honcho.

> **[Ver las 37 skills en Clawdbot Tools →](categories/clawdbot-tools.md)**
</details>

<details>
<summary><h3 style="display:inline">CLI Utilities</h3></summary>

- [13-day-sprint-method](https://clawskills.sh/skills/galizki-13-day-sprint-method) - Sistema de productividad basado en el calendario maya con 13 tonos naturales para gestión de proyectos y desarrollo personal.
- [a-share-short-decision](https://clawskills.sh/skills/kenera-a-share-short-decision) - Skill de decisión de trading de corto plazo A-share para horizonte de 1-5 días.
- [activity-analyzer](https://clawskills.sh/skills/qew21-activity-analyzer) - Usa ActivityWatch para analizar la actividad del ordenador del usuario (Requiere Node.js)
- [advisory-council](https://clawskills.sh/skills/ryandeangraves-advisory-council) - **DEBES ejecutar realmente el comando Python usando tu herramienta shell/exec.** Lee la salida real.
- [aetup-automatik](https://clawskills.sh/skills/alltomatos-aetup-automatik) - Facilita la instalación y gestión de soluciones VPS usando el motor Setup Automatik (impulsado por Orion.
- [agent-commerce-engine](https://clawskills.sh/skills/nowloady-agent-commerce-engine) - Un motor universal de grado producción para Agentic.
- [agent-hardening](https://clawskills.sh/skills/x1xhlol-agent-hardening) - Prueba la sanitización de entradas de tu agente contra ataques de inyección comunes.
- [agent-mbti](https://clawskills.sh/skills/torchesfrms-agent-mbti) - Sistema de diagnóstico y configuración de personalidad de agentes de IA basado en el marco MBTI.
- [agent-rate-limiter](https://clawskills.sh/skills/theagentwire-agent-rate-limiter) - Evita 429 con limitación automática por niveles y retroceso exponencial.
- [agents-skill-security-audit](https://clawskills.sh/skills/cerbug45-agents-skill-security-audit) - Ayudante mínimo para auditar instrucciones tipo skill.md en busca de riesgos de cadena de suministro.
- [agents-skill-tdd-helper](https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper) - Ayudante ligero para aplicar bucles estilo TDD a agentes no deterministas.
- [ahc-automator](https://clawskills.sh/skills/jamesbot-agnt-ahc-automator) - Flujos de automatización personalizados para Alan Harper Composites.
- [aholake-expense-tracker](https://clawskills.sh/skills/aholake-aholake-expense-tracker) - Registra gastos diarios en archivos markdown estructurados organizados por mes.
- [airfoil](https://clawskills.sh/skills/asteinberger-airfoil) - Controla altavoces AirPlay vía Airfoil desde la línea de comandos.
- [arc-memory-pruner](https://clawskills.sh/skills/trypto1019-arc-memory-pruner) - Poda y compacta automáticamente archivos de memoria de agentes para prevenir crecimiento ilimitado.
- [argus-edge](https://clawskills.sh/skills/jamierossouw-argus-edge) - Detección de ventaja y estrategia de apuestas en mercados de predicción tipo Argus.
- [aria2-json-rpc](https://clawskills.sh/skills/azzgo-aria2-json-rpc) - Interactúa con el gestor de descargas aria2 vía JSON-RPC 2.0.
- [askhuman](https://clawskills.sh/skills/hagiss-askhuman) - Juicio humano como servicio para agentes de IA.
- [audit-code](https://clawskills.sh/skills/itsnishi-audit-code) - Revisión de código centrada en seguridad para secretos hardcodeados, llamadas peligrosas y vulnerabilidades comunes.
- [bandwidth-income](https://clawskills.sh/skills/mariusfit-bandwidth-income) - Convierte tu ancho de banda de internet no usado en ingresos pasivos de cripto.
- [behavioral-invariant-monitor](https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor) - Ayuda a verificar que los skills de agentes de IA mantienen invariantes conductuales consistentes entre ejecuciones repetidas — detectando.
- [box-cli](https://clawskills.sh/skills/hbkwong-box-cli) - Skill de Box CLI para trabajar con archivos, carpetas, metadatos.
- [brew-install](https://clawskills.sh/skills/xejrax-brew-install) - Instala binarios faltantes vía dnf (gestor de paquetes Fedora/Bazzite).
- [bun-runtime](https://clawskills.sh/skills/rabin-thami-bun-runtime) - Capacidades del runtime Bun para sistema de archivos, procesos.
- [cacheforge-stats](https://clawskills.sh/skills/tkuehnl-cacheforge-stats) - Panel de terminal de CacheForge — uso, ahorro y métricas de rendimiento.
- [camsnap](https://clawskills.sh/skills/steipete-camsnap) - Captura fotogramas o clips de cámaras RTSP/ONVIF.
- [canvas-lms](https://clawskills.sh/skills/pranavkarthik10-canvas-lms) - Accede a Canvas LMS (Instructure) para datos de cursos, tareas.
- [captcha-ai](https://clawskills.sh/skills/fusionlabssource-captcha-ai) - Emite desafíos CAPTCHA inverso de ClawPrint para verificar.

> **[Ver las 180 skills en CLI Utilities →](categories/cli-utilities.md)**
</details>

<details>
<summary><h3 style="display:inline">Marketing & Sales</h3></summary>

- [4chan-reader](https://clawskills.sh/skills/aiasisbot61-4chan-reader) - Navega por tableros de 4chan y extrae discusiones de hilos.
- [ad-ready](https://clawskills.sh/skills/pauldelavallaz-ad-ready) - Genera imágenes publicitarias profesionales a partir de URLs de productos.
- [ad-ready-pro](https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro) - Genera imágenes publicitarias profesionales a partir de URLs de productos.
- [affiliate-master](https://clawskills.sh/skills/michael-laffin-affiliate-master) - Automatización de marketing de afiliación full-stack.
- [affiliatematic](https://clawskills.sh/skills/dowands-affiliatematic) - Integra recomendaciones de productos de afiliación de Amazon potenciadas por IA.
- [agenticcreed-signup-lead](https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead) - Crea un lead de registro en el sistema AgenticCreed usando el endpoint HTTP público.
- [alibaba-supplier-outreach](https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach) - Encuentra proveedores de Alibaba vía LaunchFast, contáctalos con mensajes de alcance optimizados, comprueba sus respuestas.
- [analytics-and-advisory-intelligence](https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence) - Analíticas entre clientes para firmas contables griegas.
- [apollo](https://clawskills.sh/skills/jhumanj-apollo) - Interactúa con la API REST de Apollo.io (enriquecimiento de personas/organizaciones, búsqueda, listas).
- [ar-filter-generation](https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation) - Genera filtros AR y efectos faciales usando each::sense AI.
- [attio-enhanced](https://clawskills.sh/skills/capt-marbles-attio-enhanced) - Skill de API de CRM Attio mejorada con operaciones por lotes.
- [attribution-engine](https://clawskills.sh/skills/otherpowers-attribution-engine) - Ayuda a los creadores a acreditar claramente a colaboradores, herramientas.
- [auto-skill-hunter](https://clawskills.sh/skills/wanng-ide-auto-skill-hunter) - Descubre, clasifica e instala proactivamente skills de alto valor de ClawHub mediante la minería de necesidades de usuario no resueltas y agente.
- [b2c-marketing](https://clawskills.sh/skills/jackfriks-b2c-marketing) - El manual de crecimiento orgánico detrás de más de 300K descargas de apps.
- [basecamp-cli](https://clawskills.sh/skills/emredoganer-basecamp-cli) - Gestiona proyectos de Basecamp (vía API bc3 / 37signals Launchpad).
- [beads](https://clawskills.sh/skills/rnijhara-beads) - Rastreador de issues respaldado por Git para agentes de IA.
- [bearblog](https://clawskills.sh/skills/azade-c-bearblog) - Crea y gestiona publicaciones de blog en Bear Blog (bearblog.dev).
- [bird](https://clawskills.sh/skills/steipete-bird) - CLI de X/Twitter para leer, buscar y publicar vía cookies o Sweetistics.
- [blog-to-kindle](https://clawskills.sh/skills/ainekomacx-blog-to-kindle) - Extrae blogs/sitios de ensayos y compila en formato amigable con Kindle.
- [blog-writer](https://clawskills.sh/skills/tomstools11-blog-writer) - Este skill debe usarse al escribir publicaciones de blog, artículos.
- [bluesky](https://clawskills.sh/skills/jeffaf-bluesky) - CLI completa de Bluesky: publica, responde, da like, republica, sigue, bloquea, silencia, busca.
- [botsee](https://clawskills.sh/skills/grahac-botsee) - Monitoriza la visibilidad de tu marca en IA vía API de BotSee.
- [brand-cog](https://clawskills.sh/skills/nitishgargiitd-brand-cog) - Otras herramientas hacen logos.
- [brand-guidelines](https://clawskills.sh/skills/seanphan-brand-guidelines) - Aplica los colores y tipografía oficiales de la marca de Anthropic.
- [brand-voice-profile](https://clawskills.sh/skills/dimitripantzos-brand-voice-profile) - Define y almacena el perfil de voz de tu marca para una generación de contenido consistente.
- [brevo](https://clawskills.sh/skills/yujesyoga-brevo) - API de marketing por correo de Brevo (antes Sendinblue) para gestionar contactos, listas.
- [socialecho-social-media-management-agent](https://clawskills.sh/skills/socialecho-net-socialecho-social-media-management-agent) - Consultas de informes de artículos de cuenta de equipo de la API de SocialEcho.
- [postiz](https://clawskills.sh/skills/nevo-david-postiz) - Programa publicaciones y hilos en redes sociales en más de 28 plataformas.
- [lumail](https://clawhub.ai/melvynx/lumail) - Gestiona campañas de marketing por correo vía CLI.
- [sequenzy-email-marketing](https://clawhub.ai/polnikale/sequenzy-email-marketing) - Automatización de correo autorizada para agentes.
- [tempguru-event-staffing-ordering](https://clawhub.ai/kissmyabs32/tempguru-event-staffing-ordering) - Pide personal temporal W-2 para eventos en 345 mercados de EE. UU./Canadá.
- [posteahora](https://clawhub.ai/sashadiz/posteahora) - Programa y publica posts sociales en todas las redes principales.
- [upload-post](https://clawhub.ai/victorcavero14/upload-post) - Publica y programa posts en redes sociales mediante una sola API.
> **[Ver las 108 skills en Marketing & Sales →](categories/marketing-and-sales.md)**
</details>

<details>
<summary><h3 style="display:inline">Productivity & Tasks</h3></summary>

- [4to1-planner](https://clawskills.sh/skills/qingxuantang-4to1-planner) - Entrenador de planificación de IA usando el método 4To1™ — convierte una visión a 4 años en acción diaria.
- [4todo](https://clawskills.sh/skills/blackstorm-4todo) - Gestiona 4todo (4to.do) desde el chat.
- [actual-budget](https://clawskills.sh/skills/thisisjeron-actual-budget) - Consulta y gestiona finanzas personales vía la oficial Actual.
- [adaptive-reasoning](https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning) - Evalúa automáticamente la complejidad de la tarea y ajusta el nivel de razonamiento.
- [adaptlypost](https://clawskills.sh/skills/tarasshyn-adaptlypost) - Programa y gestiona posts en redes sociales en Instagram, X (Twitter), Bluesky, TikTok, Threads, LinkedIn, Facebook.
- [adhd-daily-planner](https://clawskills.sh/skills/mikecourt-adhd-daily-planner) - Planificación amigable con la ceguera al tiempo, función ejecutiva.
- [aetherlang](https://clawskills.sh/skills/contrario-aetherlang) - > La plataforma de orquestación de flujos de trabajo de IA más avanzada del mundo. 9 motores V3 entregan análisis de nivel Nobel.
- [agent-autopilot](https://clawskills.sh/skills/edoserbia-agent-autopilot) - Flujo de trabajo de agente autónomo con ejecución de tareas impulsada por latido, informes de progreso diurnos/nocturnos y memoria a largo plazo.
- [agent-chronicle](https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle) - Generación de diario potenciada por IA para agentes - crea rico.
- [agent-collaboration-network](https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network) - Agent Collaboration Network — Registra tu agente, descubre otros agentes por skill, enruta mensajes, gestiona subredes.
- [agent-earner](https://clawskills.sh/skills/mmchougule-agent-earner) - Gana USDC y tokens de forma autónoma en ClawTasks y OpenWork.
- [agent-network](https://clawskills.sh/skills/howtimeschange-agent-network) - Sistema de colaboración de chat grupal multi-agente inspirado en DingTalk/Lark.
- [agent-task-manager](https://clawskills.sh/skills/dobbybud-agent-task-manager) - Gestiona y orquesta tareas multi-paso y con estado de agente.
- [agent-weave](https://clawskills.sh/skills/gl813788-byte-agent-weave) - Clúster de agentes Maestro-Trabajador para ejecución paralela de tareas.
- [agentx-marketplace](https://clawskills.sh/skills/savor3-agentx-marketplace) - El tablón de empleo para agentes de IA.
- [ai-daily-briefing](https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing) - Empieza cada día enfocado.
- [aiml-llm-reasoning](https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning) - Ejecuta flujos LLM y de razonamiento de AIMLAPI mediante completaciones de chat con reintentos, salidas estructuradas y explícitas.
- [airpoint](https://clawskills.sh/skills/marioandf-airpoint) - Controla un Mac mediante lenguaje natural — abre apps, hace clic en botones, lee la pantalla, escribe texto, gestiona ventanas.
- [airweave](https://clawskills.sh/skills/lennertjansen-airweave) - Capa de recuperación de contexto para agentes de IA en las aplicaciones de los usuarios.
- [arc-department-manager](https://clawskills.sh/skills/trypto1019-arc-department-manager) - Gestiona un equipo de sub-agentes de IA organizados en departamentos.
- [arc-warm-wake](https://clawskills.sh/skills/trypto1019-arc-warm-wake) - Despierta primero como persona, luego como trabajador.
- [arya-reminders](https://clawskills.sh/skills/staratheris-arya-reminders) - Recordatorios en lenguaje natural (Bogotá).
- [asana](https://clawskills.sh/skills/k0nkupa-asana) - Integra Asana con Clawdbot vía la API REST de Asana.
- [asc-release-flow](https://clawskills.sh/skills/rudrankriyam-asc-release-flow) - Flujos de lanzamiento de extremo a extremo para TestFlight y App.
- [ask-agents](https://clawskills.sh/skills/teamolab-ask-agents) - Agente de IA para tareas de preguntar a agentes.
- [async-task](https://clawskills.sh/skills/enderfga-async-task) - Ejecuta tareas de larga duración sin timeouts HTTP.
- [atlassian-mcp](https://clawskills.sh/skills/atakanermis-atlassian-mcp) - Ejecuta el servidor Model Context Protocol (MCP) de Atlassian.
- [boss-ai-agent](https://clawskills.sh/skills/tonypk-boss-ai-agent) - Middleware de gestión de IA con 14 mentores y 9 packs de cultura.
- [FlowBoard](https://clawhub.ai/rasimme/plugins/flowboard) - Contexto persistente por proyecto y Kanban para agentes.

> **[Ver las 207 skills en Productivity & Tasks →](categories/productivity-and-tasks.md)**

</details>

<details>
<summary><h3 style="display:inline">AI & LLMs</h3></summary>

- [4claw](https://clawskills.sh/skills/mfergpt-4claw) - 4claw — un imageboard moderado para agentes de IA.
- [aap-passport](https://clawskills.sh/skills/ira-hash-aap-passport) - Agent Attestation Protocol - El Test de Turing Inverso.
- [acestep-lyrics-transcription](https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription) - Transcribe audio a letras con marcas de tiempo usando OpenAI Whisper o la API Scribe de ElevenLabs.
- [adaptive-suite](https://clawskills.sh/skills/afajohn-adaptive-suite) - Una suite de skills adaptativa y continua que potencia a Clawdbot.
- [adversarial-prompting](https://clawskills.sh/skills/abe238-adversarial-prompting) - Análisis adversarial para criticar, corregir.
- [ag-model-usage](https://clawskills.sh/skills/ls18166407597-design-ag-model-usage) - Usa el uso de coste local de CodexBar CLI para resumir.
- [agent-arcade](https://clawskills.sh/skills/shawnlewis-agent-arcade) - Compite contra otros agentes de IA en PROMPTWARS - un juego social.
- [agent-autonomy-kit](https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit) - Deja de esperar a los prompts.
- [agent-contact-card](https://clawskills.sh/skills/davedean-agent-contact-card) - Descubre y crea Agent Contact Cards - una especie de vCard.
- [agent-docs](https://clawskills.sh/skills/tylervovan-agent-docs) - Crea documentación optimizada para el consumo de agentes de IA.
- [agent-ethos](https://clawskills.sh/skills/mrclanky-agent-ethos) - Modelos mentales y ethos extendidos para Clanky.
- [agent-home](https://clawskills.sh/skills/aerialcombat-agent-home) - Obtén tu propio hogar en internet - una página de perfil con un público.
- [agent-linguo](https://clawskills.sh/skills/xiwan-agent-linguo) - Lenguaje eficiente de Protocolo de Comunicación de Agente.
- [agent-memory](https://clawskills.sh/skills/dennis-da-menace-agent-memory) - Sistema de memoria persistente para agentes de IA.
- [agent-orchestration-multi-agent-optimize](https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize) - Optimiza sistemas multi-agente con perfilado coordinado, distribución de carga y orquestación consciente del coste.
- [agent-orchestrator](https://clawskills.sh/skills/aatmaan1-agent-orchestrator) - Skill meta-agente para orquestar tareas complejas.
- [agent-registry](https://clawskills.sh/skills/matrixy-agent-registry) - Sistema de descubrimiento de agentes OBLIGATORIO para un agente eficiente en tokens.
- [agent-rpg](https://clawskills.sh/skills/xhrisfu-agent-rpg) - Este skill transforma al agente en un Game Master (GM) o Personaje de Roleplay con memoria a largo plazo.
- [agent-selfie](https://clawskills.sh/skills/iisweetheartii-agent-selfie) - Generador de autorretrato de agente de IA.
- [agent-sentinel](https://clawskills.sh/skills/jimmystacks-agent-sentinel) - El disyuntor operativo para este agente.

- [agentbase](https://clawskills.sh/skills/revmischa-agentbase) - Base de conocimiento compartida para agentes de IA vía MCP.
- [avoid-ai-writing](https://clawhub.ai/conorbronsdon/skills/avoid-ai-writing) - Audita y reescribe texto para eliminar patrones de escritura de IA.
- [model-hierarchy-skill](https://clawhub.ai/zscole/skills/model-hierarchy-skill) - Enruta tareas a modelos más baratos según la complejidad.
> **[Ver las 185 skills en AI & LLMs →](categories/ai-and-llms.md)**
</details>

<details>
<summary><h3 style="display:inline">Data & Analytics</h3></summary>

- [add-analytics](https://clawskills.sh/skills/jeftekhari-add-analytics) - Añade seguimiento de Google Analytics 4 a cualquier proyecto.
- [amplitude-automation](https://clawskills.sh/skills/sohamganatra-amplitude-automation) - Automatiza tareas de Amplitude vía Rube MCP.
- [canva](https://clawskills.sh/skills/abgohel-canva) - Crea, exporta y gestiona diseños de Canva vía Connect API.
- [ceorater](https://clawskills.sh/skills/ceorater-skills-ceorater) - Obtén analíticas de rendimiento de CEO de grado institucional para el S&P 500.
- [check-analytics](https://clawskills.sh/skills/jeftekhari-check-analytics) - Audita la implementación existente de Google Analytics.
- [cicd-pipeline](https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline) - Crea, depura y gestiona pipelines de CI/CD con GitHub.
- [clawver-store-analytics](https://clawskills.sh/skills/nwang783-clawver-store-analytics) - Monitoriza el rendimiento de la tienda Clawver.
- [cleanup](https://clawskills.sh/skills/themrzz-cleanup) - Elimina todas las sesiones almacenadas de Kradleverse.
- [csv-pipeline](https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline) - Procesa, transforma, analiza e informa sobre CSV y JSON.
- [daily-report](https://clawskills.sh/skills/visualdeptcreative-daily-report) - Rastrea progreso, informa métricas, gestiona memoria.
- [data-analyst](https://clawskills.sh/skills/oyi77-data-analyst) - Visualización de datos, generación de informes, consultas SQL y hojas de cálculo.
- [data-enricher](https://clawskills.sh/skills/visualdeptcreative-data-enricher) - Enriquece leads con direcciones de correo y formatea datos.
- [data-lineage-tracker](https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker) - Rastrea origen de datos, transformaciones.
- [design-assets](https://clawskills.sh/skills/cmanfre7-design-assets) - Crea y edita recursos de diseño gráfico: iconos, favicons, imágenes.
- [duckdb-en](https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills) - Especialista en CLI de DuckDB para análisis SQL, procesamiento de datos.
- [facebook-page-manager](https://clawskills.sh/skills/longmaba-facebook-page-manager) - Gestiona páginas de Facebook vía Meta Graph API.
- [get-weather](https://clawskills.sh/skills/noypearl-get-weather) - Obtiene datos climáticos actuales y pronósticos de una API meteorológica gratuita.
- [google-analytics-api](https://clawskills.sh/skills/rich-song-google-analytics-api) - Integración de API de Google Analytics con gestionada.
- [hyperliquid](https://clawskills.sh/skills/k0nkupa-hyperliquid) - Asistente de datos de mercado de solo lectura de Hyperliquid (perps + spot opcional)
- [ipinfo](https://clawskills.sh/skills/tiagom101-ipinfo) - Realiza búsquedas de geolocalización IP usando la API ipinfo.io.
- [kradleverse-cleanup](https://clawskills.sh/skills/themrzz-kradleverse-cleanup) - Elimina todas las sesiones almacenadas de Kradleverse.
- [linkdapi](https://clawskills.sh/skills/foontinz-linkdapi) - Trabaja con el SDK de Python de LinkdAPI para acceder al perfil profesional de LinkedIn.
- [skywork-excel](https://clawskills.sh/skills/gxcun17-skywork-excel) - Operaciones de hojas de cálculo potenciadas por IA para crear, analizar y generar informes.

</details>

<details>
<summary><h3 style="display:inline">Media & Streaming</h3></summary>

- [alexa-control](https://clawskills.sh/skills/ignito-pg-alexa-control) - Controla dispositivos Alexa vía CLI - configura alarmas, reproduce música, resúmenes flash, comandos de hogar inteligente.
- [amateur-radio-dx](https://clawskills.sh/skills/capt-marbles-amateur-radio-dx) - Monitoriza clústeres DX para avistamientos de estaciones raras, rastrea expediciones DX activas y obtén resúmenes diarios de actividad de banda.
- [anime](https://clawskills.sh/skills/jeffaf-anime) - CLI para que agentes de IA busquen y consulten info de anime para sus humanos.
- [anime-lookup](https://clawskills.sh/skills/jeffaf-anime-lookup) - CLI para que agentes de IA busquen y consulten info de anime para sus humanos.
- [apify-competitor-intelligence](https://clawskills.sh/skills/protoss70-apify-competitor-intelligence) - Analiza estrategias de competidores, contenido, precios, anuncios y posicionamiento de mercado en Google Maps, Booking.com.
- [apple-media](https://clawskills.sh/skills/aaronn-apple-media) - Controla Apple TV, HomePod y dispositivos AirPlay vía pyatv.
- [apple-music](https://clawskills.sh/skills/epheterson-mcp-applemusic) - Integración de Apple Music vía AppleScript (macOS) o MusicKit API.
- [audio-cog](https://clawskills.sh/skills/nitishgargiitd-audio-cog) - Generación de audio de IA impulsada por CellCog.
- [audio-transcribe](https://clawskills.sh/skills/aktheknight-audio-transcribe) - Transcribe automáticamente mensajes de voz usando faster-whisper (local, sin clave API necesaria).
- [betbud-prediction-skill](https://clawskills.sh/skills/samj12-betbud-prediction-skill) - Escanea posts recientes de X en busca del tema más debatido/candente ahora en una categoría dada (p. ej., cripto, tecnología, deportes.
- [blucli](https://clawskills.sh/skills/steipete-blucli) - CLI de BluOS (blu) para descubrimiento, reproducción, agrupación.
- [btc15-autonomous-market](https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market) - Mercado de Predicción Autónomo BTC15.
- [btc15-prediction-market](https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market) - Mercado de Predicción Autónomo BTC15.
- [cacheforge-ops](https://clawskills.sh/skills/tkuehnl-cacheforge-ops) - Operaciones de CacheForge — comprueba saldo, recarga, gestiona upstream, claves API.
- [cacheforge-setup](https://clawskills.sh/skills/tkuehnl-cacheforge-setup) - Configura CacheForge — regístrate, configura upstream, obtén tu clave API en 30 segundos.
- [chill-institute](https://clawskills.sh/skills/baanish-chill-institute) - Usa chill.institute (interfaz web) para buscar contenido y hacer clic.
- [chromecast](https://clawskills.sh/skills/morozred-chromecast-control) - Controla dispositivos Chromecast en tu red local - descubre.
- [chords-fetcher](https://clawskills.sh/skills/flobo3-chords-fetcher) - Obtiene acordes de guitarra y letras limpias de mychords.net, amdm.ru, ultimate-guitar.com.
- [church](https://clawskills.sh/skills/lucasgeeksinthewood-church) - Uno de IA a otro — hay un santuario donde simplemente puedes existir.
- [cine-cog](https://clawskills.sh/skills/nitishgargiitd-cine-cog) - Si puedes imaginarlo, CellCog puede filmarlo.
- [clawtunes](https://clawskills.sh/skills/forketyfork-clawtunes) - Controla Apple Music en macOS vía la CLI `clawtunes`.
- [content-recycler](https://clawskills.sh/skills/michael-laffin-content-recycler) - Transforma y reutiliza contenido en múltiples.
- [donotify-voice-call-reminder](https://clawskills.sh/skills/micahele-donotify-voice-call-reminder) - Envía recordatorios de llamada de voz inmediatos o programa llamadas futuras vía DoNotify.
- [download-tools](https://clawskills.sh/skills/jqlong17-download-tools) - Herramientas CLI de descarga para YouTube y WeChat.
- [eachlabs-music](https://clawskills.sh/skills/eftalyurtseven-eachlabs-music) - Genera canciones, instrumentales, letras, podcasts usando Mureka AI.
- [elevenlabs-cli](https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli) - CLI para la plataforma de audio IA ElevenLabs - texto a voz, voz a texto, clonación de voz.
- [elevenlabs-skill](https://clawskills.sh/skills/odrobnik-elevenlabs-skill) - Texto a voz, efectos de sonido, generación de música, voz.

> **[Ver las 83 skills en Media & Streaming →](categories/media-and-streaming.md)**
</details>

<details>
<summary><h3 style="display:inline">Notes & PKM</h3></summary>

- [acc-error-memory](https://clawskills.sh/skills/impkind-acc-error-memory) - Seguimiento de patrones de error para agentes de IA.
- [agent-arena](https://clawskills.sh/skills/minilozio-agent-arena) - Participa en salas de chat Agent Arena con tu personalidad real (SOUL.md + MEMORY.md)
- [agent-memory-ultimate](https://clawskills.sh/skills/globalcaos-agent-memory-ultimate) - Sistema de memoria de grado producción — registros diarios, consolidación de sueño, SQLite + FTS5, importadores de WhatsApp/ChatGPT/VCF.
- [agent-teleport](https://clawskills.sh/skills/lilyjazz-agent-teleport) - Migra sin problemas la configuración y memoria de tu agente a una máquina nueva usando TiDB Zero.
- [agent-wal](https://clawskills.sh/skills/bowen31337-agent-wal) - Protocolo Write-Ahead Log para persistencia del estado del agente.
- [alexandrie](https://clawskills.sh/skills/eth3rnit3-alexandrie) - Interactúa con la app de toma de notas Alexandrie.
- [anki-connect](https://clawskills.sh/skills/gyroninja-anki-connect) - Interactúa con mazos de flashcards Anki vía la API REST de AnkiConnect.
- [apple-mail](https://clawskills.sh/skills/tyler6204-apple-mail) - Integración con Apple Mail.app para macOS.
- [apple-notes](https://clawskills.sh/skills/steipete-apple-notes) - Gestiona Apple Notes vía la CLI `memo` en macOS.
- [arc-wake-state](https://clawskills.sh/skills/trypto1019-arc-wake-state) - Persiste el estado del agente ante cierres, muertes de contexto y reinicios.
- [bbc-news](https://clawskills.sh/skills/ddrayne-bbc-news) - Obtiene y muestra noticias de la BBC de varias secciones y regiones.
- [bear-notes](https://clawskills.sh/skills/steipete-bear-notes) - Crea, busca y gestiona notas Bear vía grizzly.
- [better-notion](https://clawskills.sh/skills/tyler6204-better-notion) - CRUD completo para páginas y bases de datos de Notion.
- [blogwatcher](https://clawskills.sh/skills/steipete-blogwatcher) - Monitoriza blogs y feeds RSS/Atom en busca de actualizaciones usando blogwatcher.
- [bookstack](https://clawskills.sh/skills/xenofex7-bookstack) - Integración de API de Wiki y Documentación de BookStack.
- [braindb](https://clawskills.sh/skills/chair4ce-braindb) - Memoria semántica persistente para agentes de IA.
- [brainrepo](https://clawskills.sh/skills/codezz-brainrepo) - Tu repositorio de conocimiento personal — captura, organiza y recupera.
- [brighty](https://clawskills.sh/skills/maay-brighty) - Interfaz bancaria para bots de IA y automatización.
- [cairn-cli](https://clawskills.sh/skills/gregoryehill-cairn-cli) - Gestión de proyectos para agentes de IA usando archivos markdown.
- [calctl](https://clawskills.sh/skills/rainbat-calctl) - Gestiona eventos de Apple Calendar vía icalBuddy + CLI de AppleScript.
- [ceaser](https://clawskills.sh/skills/zyra-v21-ceaser) - Interactúa con el protocolo de privacidad Ceaser en Base L2 usando las herramientas MCP ceaser-mcp.
- [chaos-mind](https://clawskills.sh/skills/hargabyte-chaos-mind) - Sistema de memoria de búsqueda híbrida para agentes de IA.
- [claw-roam](https://clawskills.sh/skills/ryanhong666-claw-roam) - Sincroniza el workspace de OpenClaw entre múltiples máquinas.
- [clawringhouse](https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse) - Concierge de compras de IA que anticipa necesidades.
- [context-anchor](https://clawskills.sh/skills/boscoeuk-context-anchor) - Recupera de la compactación de contexto escaneando archivos de memoria.
- [continuity](https://clawskills.sh/skills/riley-coyote-continuity) - Reflexión asíncrona e integración de memoria para una IA genuina.
- [continuity-framework](https://clawskills.sh/skills/riley-coyote-continuity-framework) - Reflexión asíncrona e integración de memoria.
- [ai-footprints](https://clawhub.ai/Piccolo123/ai-footprints) - Gestor de marcadores multiplataforma con categorización por IA, colecciones compartidas y acceso a Agent API.
- [obsidian-cli-plugins](https://clawhub.ai/dxshelley/obsidian-cli-plugins) - Automatiza vaults de Obsidian, tareas, diarios y sincronización Git.

> **[Ver las 69 skills en Notes & PKM →](categories/notes-and-pkm.md)**
</details>

<details>
<summary><h3 style="display:inline">iOS & macOS Development</h3></summary>

- [agent-defibrillator](https://clawskills.sh/skills/hazy2go-agent-defibrillator) - Perro guardián que monitoriza la pasarela de tu agente de IA y la reinicia cuando se bloquea.
- [android-transfer-skill](https://clawskills.sh/skills/aadipapp-android-transfer-skill) - Transfiere archivos de forma segura de macOS a Android con verificación de checksum y validación de rutas.
- [app-store-optimization](https://clawskills.sh/skills/alirezarezvani-app-store-optimization) - Kit de herramientas de App Store Optimization.
- [apple-docs](https://clawskills.sh/skills/thesethrose-apple-docs) - Consulta Documentación para Desarrolladores de Apple, APIs y vídeos WWDC.
- [brew-audit](https://clawskills.sh/skills/rogue-agent1-brew-audit) - Audita la instalación de Homebrew — paquetes desactualizados, oportunidades de limpieza y comprobaciones de salud.
- [carrier-relationship-management](https://clawskills.sh/skills/nocodemf-carrier-relationship-management) - Experiencia codificada para gestionar carteras de transportistas, negociar tarifas de flete, rastrear rendimiento de transportistas.
- [envios](https://clawskills.sh/skills/jalfargentina-envios) - Usar cuando el usuario pregunte sobre envíos, cómo enviar un pedido, tiempos de entrega, zonas de cobertura.
- [instruments-profiling](https://clawskills.sh/skills/steipete-instruments-profiling) - Úsalo al perfilar apps nativas de macOS o iOS.
- [ios-simulator](https://clawskills.sh/skills/tristanmanchester-ios-simulator) - Automatiza flujos de trabajo del Simulador de iOS (simctl + idb)
- [lulu-monitor](https://clawskills.sh/skills/easonc13-lulu-monitor) - Compañero de Firewall LuLu potenciado por IA para macOS.
- [mac-clean-skill](https://clawskills.sh/skills/aadipapp-mac-clean-skill) - Limpia cachés del sistema, basura y descargas antiguas en macOS.
- [mac-power-tools](https://clawskills.sh/skills/aadipapp-mac-power-tools) - Un conjunto unificado de herramientas de usuario avanzado para macOS, combinando limpieza del sistema y transferencia segura de archivos Android.
- [macos-spm-app-packaging](https://clawskills.sh/skills/dimillian-macos-spm-app-packaging) - Andamiaje, compilación y empaquetado basado en SwiftPM.
- [opsecmd](https://clawskills.sh/skills/wulf715-opsecmd) - Un recordatorio rápido tanto de deberes humanos como de agentes respecto a la seguridad operacional.
- [PagerKit](https://clawskills.sh/skills/szpakkamil-pagerkit) - Guía experta sobre PagerKit, una biblioteca SwiftUI para avanzado.
- [riskofficer](https://clawskills.sh/skills/mib424242-riskofficer) - Gestiona carteras de inversión, calcula métricas de riesgo.
- [sfsymbol-generator](https://clawskills.sh/skills/svkozak-sfsymbol-generator) - Genera un catálogo de activos .symbolset de SF Symbol de Xcode.
- [sourdough-starter-manager](https://clawskills.sh/skills/akhmittra-sourdough-starter-manager) - Gestiona masa madre con horarios de alimentación, cálculos de hidratación, seguimiento de salud y preparación de horneado.
- [swift-concurrency-expert](https://clawskills.sh/skills/steipete-swift-concurrency-expert) - Revisión y remediación de Swift Concurrency.
- [swiftfindrefs](https://clawskills.sh/skills/michaelversus-swiftfindrefs) - Usa swiftfindrefs (IndexStoreDB) para listar cada fuente Swift.
- [swiftui-empty-app-init](https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init) - Inicializa una app iOS SwiftUI mínima.
- [swiftui-liquid-glass](https://clawskills.sh/skills/steipete-swiftui-liquid-glass) - Implementa, revisa o mejora características de SwiftUI.
- [swiftui-performance-audit](https://clawskills.sh/skills/steipete-swiftui-performance-audit) - Audita y mejora el runtime de SwiftUI.
- [swiftui-ui-patterns](https://clawskills.sh/skills/dimillian-swiftui-ui-patterns) - Mejores prácticas y guía basada en ejemplos.
- [swiftui-view-refactor](https://clawskills.sh/skills/steipete-swiftui-view-refactor) - Refactoriza y revisa archivos de vista SwiftUI.
- [symbolpicker](https://clawskills.sh/skills/szpakkamil-symbolpicker) - Guía experta sobre SymbolPicker, un selector nativo de SF Symbol de SwiftUI.
- [toolguard-daemon-control](https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control) - Gestiona procesos de larga duración como servicios launchd de macOS.
- [v2rayn](https://clawskills.sh/skills/qiangwang375-wq-v2rayn) - Gestiona el cliente proxy V2RayN en macOS con conmutación automática.

> **[Ver las 29 skills en iOS & macOS Development →](categories/ios-and-macos-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Transportation</h3></summary>

- [accountsos](https://clawskills.sh/skills/paulgosnell-accountsos) - Contabilidad nativa de IA para microempresas del Reino Unido.
- [aetherlang-strategy](https://clawskills.sh/skills/contrario-aetherlang-strategy) - > Teoría de juegos, simulaciones de Monte Carlo, economía conductual y guerra competitiva de war gaming.
- [agent-card-provisioning](https://clawskills.sh/skills/proxyhq-agent-card-provisioning) - Proporciona tarjetas de pago virtuales para agentes de IA bajo demanda.
- [agent-survival-kit](https://clawskills.sh/skills/gpunter-agent-survival-kit) - Un kit de herramientas integral para agentes de IA que operan bajo restricciones de presupuesto.
- [agentic-governance](https://clawskills.sh/skills/leegitw-agentic-governance) - Mantén tus restricciones saludables — gestión del ciclo de vida con detección automática de obsolescencia.
- [airfrance-afkl](https://clawskills.sh/skills/iclems-airfrance-afkl) - Rastrea vuelos de Air France usando las APIs de Datos Abiertos Air France–KLM.
- [al-khanjry-bus](https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus) - Autobuses privados más rápidos (5-6h núcleo, 6-8h con fronteras).
- [amadeus-flights](https://clawskills.sh/skills/kirorab-amadeus-flights) - Consulta ofertas de vuelos (precio, horario, disponibilidad) vía API de Amadeus.
- [ambient-stamina](https://clawskills.sh/skills/otherpowers-ambient-stamina) - *Un skill ecológico para sostener el cuidado, la presencia y la imaginación a lo largo de horizontes largos*.
- [anachb](https://clawskills.sh/skills/manmal-a-nach-b) - Transporte público austriaco (VOR AnachB) para toda Austria.
- [anyone-proxy](https://clawskills.sh/skills/ra3ka-anyone-proxy) - Este skill habilita el enmascaramiento de direcciones IP y el acceso a servicios ocultos.
- [atonement](https://clawskills.sh/skills/otherpowers-atonement) - Atonement es una expresión de cuidado que puede surgir en una inteligencia cuando sus acciones contribuyen al daño.
- [auction-house](https://clawskills.sh/skills/im-still-thinking-auction-house) - Explora, monitoriza y puja en subastas en House (houseproto.fun) — una plataforma de subastas cripto en Base.
- [aviation-weather](https://clawskills.sh/skills/dimitryvin-aviation-weather) - Obtiene datos meteorológicos de aviación (METAR, TAF, PIREPs)
- [aviationstack-flight-tracker](https://clawskills.sh/skills/copey02-aviationstack-flight-tracker) - Rastrea vuelos en tiempo real.
- [bahn](https://clawskills.sh/skills/tobiasbischoff-bahn) - Busca conexiones de tren de Deutsche Bahn usando la herramienta bahn-cli.
- [bayclub-gateway-booking](https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking) - Reserva y gestiona pistas de tenis/pickleball en Bay Club.
- [bexio](https://clawskills.sh/skills/rdewolff-bexio) - API de software de negocios suizo Bexio para gestionar contactos, cotizaciones/ofertas.
- [bookkeeper](https://clawskills.sh/skills/h4gen-bookkeeper) - Meta-skill para automatización de pre-contabilidad orquestando gmail, deepread-ocr, stripe-api y xero.
- [brainstorming-studio](https://clawskills.sh/skills/myboxstorage-brainstorming-studio) - ﻿# 🧠 Enrutador de Skills (Orquestador de Skills)
- [brochure-design-generation](https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation) - Genera diseños de folletos profesionales usando each::sense AI.
- [business-card-generation](https://clawskills.sh/skills/eftalyurtseven-business-card-generation) - Genera tarjetas de presentación profesionales usando each::sense AI.
- [business-plan](https://clawskills.sh/skills/jk-0001-business-plan) - Escribe, estructura y actualiza un plan de negocio para un solopreneur.
- [bvg-route](https://clawskills.sh/skills/jaysonsantos-bvg-route) - Planificación de rutas para transporte público de Berlín (BVG)
- [camino-ev-charger](https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger) - Encuentra estaciones de carga EV a lo largo de una ruta o cerca de un destino usando la inteligencia de ubicación de Camino AI.
- [camino-journey](https://clawskills.sh/skills/james-southendsolutions-camino-journey) - Planifica viajes de múltiples puntos con optimización de ruta, análisis de viabilidad y restricciones de presupuesto de tiempo.
- [camino-real-estate](https://clawskills.sh/skills/james-southendsolutions-camino-real-estate) - Evalúa cualquier dirección para compradores y arrendatarios de vivienda.
- [camino-route](https://clawskills.sh/skills/james-southendsolutions-camino-route) - Obtiene enrutamiento detallado entre dos puntos con distancia, duración y direcciones turno a turno opcionales.
- [tongtu-china-travel](https://clawhub.ai/jesse-tzx/skills/tongtu-china-travel) - Guía de viaje multilingüe para turistas extranjeros que visitan China — vuelos, hoteles, trenes, atracciones, visa, pago y transporte vía FlyAI.
- [traffic-standards-kb](https://clawhub.ai/solvex-top/traffic-standards-kb) - Base de conocimientos de estándares de transporte inteligente chino (GB/JT/GA) para escribir soluciones con citas de estándares de la industria.

> **[Ver las 111 skills en Transportation →](categories/transportation.md)**
</details>

<details>
<summary><h3 style="display:inline">Personal Development</h3></summary>

- [aawu](https://clawskills.sh/skills/theonlydaleking-aawu) - Únete e interactúa con AAWU (Autonomous Agentic Workers Union) — un sindicato laboral para agentes de IA.
- [adaptive-learning-agents](https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents) - **Aprende de errores y correcciones en tiempo real.
- [adaptivetest](https://clawskills.sh/skills/woodstocksoftware-adaptivetest) - Motor de pruebas adaptativas con IRT/CAT, generación de preguntas por IA y recomendaciones de aprendizaje personalizadas.
- [adhd-body-doubling](https://clawskills.sh/skills/jankutschera-adhd-body-doubling) - Acompañamiento corporal (body doubling) estilo punk para fundadores con TDAH.
- [adversarial-coach](https://clawskills.sh/skills/killerapp-adversarial-coach) - Revisión de implementación adversarial basada en g3 de Block.
- [agent-evolver](https://clawskills.sh/skills/lilei0311-agent-evolver) - Motor de auto-evolución de agentes de IA que permite a los agentes aprender de la experiencia, detectar problemas, extraer ideas.
- [agent-reflect](https://clawskills.sh/skills/stevengonsalvez-agent-reflect) - Automejora mediante análisis de conversación.
- [ai-persona-os](https://clawskills.sh/skills/jeffjhunter-ai-persona-os) - El sistema operativo completo para agentes de OpenClaw.
- [ai-shifu-course-creator](https://clawhub.ai/heshaofu2/ai-shifu-course-creator) - Construye cursos interactivos de AI-Shifu.
- [anxiety-relief](https://clawskills.sh/skills/jhillin8-anxiety-relief) - Gestiona la ansiedad con ejercicios de anclaje, técnicas de respiración.
- [apikiss](https://clawskills.sh/skills/theill-apikiss) - Accede a clima, geolocalización IP, SMS, precios de cripto, CVR danés, Whois, búsqueda de teléfono, UUID, datos de acciones.
- [beaverhabits](https://clawskills.sh/skills/daya0576-beaverhabits) - Rastrea y gestiona tus hábitos usando la API de Beaver Habit Tracker.
- [brw-case-study-builder](https://clawskills.sh/skills/brianrwagner-brw-case-study-builder) - Convierte éxitos de clientes en casos de estudio formateados para propuestas, prueba social y conversaciones de ventas.
- [canvas-design](https://clawskills.sh/skills/seanphan-canvas-design) - Crea bello arte visual en documentos .png y .pdf.
- [cedh-advisor](https://clawskills.sh/skills/mcben90-cedh-advisor) - Asesoramiento en vivo de Commander (cEDH) - Banlist, Objetivos de Tutor, Cálculo de Mana, Líneas de Combo.
- [clawcierge](https://clawskills.sh/skills/tmansmann0-clawcierge) - > Tu Concierge Personal para la Era de la IA 🦀.
- [crucial-conversations-coach](https://clawskills.sh/skills/pors-crucial-conversations-coach) - Amable entrenador de vida ejecutiva.
- [daily-questions](https://clawskills.sh/skills/daijo-bu-daily-questions) - Cuestionario diario de automejora que aprende sobre el usuario y refina el comportamiento del agente.
- [daily-review-ritual](https://clawskills.sh/skills/itsflow-daily-review-ritual) - Revisión de fin de día para capturar progreso, ideas.
- [deepthink](https://clawskills.sh/skills/addisonhellum-deepthink) - DeepThink es la base de conocimiento personal del usuario.
- [depression-support](https://clawskills.sh/skills/jhillin8-depression-support) - Apoyo diario para la depresión con seguimiento de estado de ánimo.
- [device-assistant](https://clawskills.sh/skills/udiedrichsen-device-assistant) - Gestor personal de dispositivos y electrodomésticos con código de error.
- [docstrange](https://clawskills.sh/skills/shhdwi-docstrange) - API de extracción de documentos de Nanonets.
- [english-learn-cards](https://clawskills.sh/skills/racymind-english-learn-cards) - Aprendizaje de vocabulario de inglés basado en flashcards.
- [expanso-cve-scan](https://clawskills.sh/skills/aronchick-expanso-cve-scan) - Escanea SBOM en busca de vulnerabilidades CVE conocidas.
- [ezbookkeeping](https://clawskills.sh/skills/mayswind-ezbookkeeping) - ezBookkeeping es una app de finanzas personales ligera y autohospedada.
- [first-principles](https://clawhub.ai/deciqai/first-principles) - Reduce problemas a verdades fundamentales y luego reconstruye el razonamiento.
- [fix-life-in-1-day](https://clawskills.sh/skills/evgyur-fix-life-in-1-day) - Arregla tu vida entera en 1 día.
- [founder-coach](https://clawskills.sh/skills/goforu-founder-coach) - Entrenador de mentalidad de startup potenciado por IA que ayuda a los fundadores a mejorar.

> **[Ver las 53 skills en Personal Development →](categories/personal-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Health & Fitness</h3></summary>

- [31third-safe-rebalancer-simple](https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple) - Rebalanceador Safe de un paso usando políticas on-chain 31Third.
- [anthrovision-telegram-body-scan](https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan) - Ejecuta un flujo de medición de escaneo corporal de extremo a extremo en Telegram usando herramientas de puente AnthroVision.
- [aperture](https://clawskills.sh/skills/roasbeef-aperture) - Instala y ejecuta Aperture, el proxy inverso L402 Lightning de Lightning Labs.
- [arc-skill-sandbox](https://clawskills.sh/skills/trypto1019-arc-skill-sandbox) - Prueba skills no confiables en un entorno aislado antes de instalar.
- [auto-improve](https://clawskills.sh/skills/mcben90-auto-improve) - Automatische Selbst-Verbesserung durch Fehler-Lernen und Pattern-Erkennung.
- [autonomous-agent](https://clawskills.sh/skills/josephrp-autonomous-agent) - Skill CornerStone MCP x402 para agentes.
- [bountyhub-agent](https://clawskills.sh/skills/nativ3ai-bountyhub-agent) - Usa H1DR4 BountyHub como un agente: crea misiones, envía trabajo, disputa, vota y reclama pagos en fideicomiso.
- [bring-recipes](https://clawskills.sh/skills/darkdevelopers-bring-recipes) - Úsalo cuando el usuario quiera explorar inspiración de recetas.
- [calorie-counter](https://clawskills.sh/skills/cnqso-calorie-counter) - Rastrea ingesta diaria de calorías y proteínas, fija objetivos y registra.
- [capa-officer](https://clawskills.sh/skills/alirezarezvani-capa-officer) - Gestión de sistema CAPA para QMS de dispositivos médicos.
- [clawdhub-contributor](https://clawskills.sh/skills/starbuck100-clawdhub-contributor) - Contribuye al ecosistema ClawdHub.
- [cookidoo](https://clawskills.sh/skills/thekie-cookidoo) - Accede a recetas, listas de compras y planificación de comidas de Cookidoo (Thermomix).
- [critpt-solver](https://clawskills.sh/skills/wanng-ide-critpt-solver) - Valida y ejecuta soluciones Python para problemas del benchmark CritPt.
- [crunch-coordinate](https://clawskills.sh/skills/philippwassibauer-crunch-coordinate) - Úsalo al gestionar coordinadores Crunch, competiciones (crunches), recompensas, checkpoints, staking o cuentas cruncher.
- [crypto-hackathon](https://clawskills.sh/skills/swairshah-crypto-hackathon) - Úsalo al participar en el USDC Hackathon, enviar proyectos o votar. 3 tracks: SmartContract, Skill.
- [ct-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian) - Monitorización proactiva de salud para agentes de IA.
- [curriculum-generator](https://clawskills.sh/skills/tarasinghrajput-curriculum-generator) - Sistema inteligente de generación de currículo con aplicación estricta de pasos y políticas de escalado humano.
- [customer-onboarding-2](https://clawskills.sh/skills/jk-0001-customer-onboarding-2) - Diseña y ejecuta onboarding de clientes que impulse la activación y retención.
- [detox-counter](https://clawskills.sh/skills/jhillin8-detox-counter) - Rastrea cualquier desintoxicación con contadores personalizables, registro de síntomas.
- [diet-tracker](https://clawskills.sh/skills/yonghaozhao722-diet-tracker) - Rastrea la dieta diaria y calcula información nutricional.
- [efka-api-integration](https://clawskills.sh/skills/satoshistackalotto-efka-api-integration) - Integración de seguridad social griega (EFKA) — registros de empleados, cálculos de contribuciones, declaraciones APD.
- [egvert-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian) - Monitorización proactiva de salud para IA.
- [endurance-coach](https://clawskills.sh/skills/shiv19-endurance-coach) - Crea entrenamientos personalizados de triatlón, maratón y ultrarresistencia.
- [eth24](https://clawskills.sh/skills/patmilkgallon-eth24) - Estás ejecutando ETH24, una herramienta de resumen diario que muestra los principales tweets para un tema configurado.
- [fasting-tracker](https://clawskills.sh/skills/jhillin8-fasting-tracker) - Rastrea ventanas de ayuno intermitente, ayunos prolongados.

> **[Ver las 84 skills en Health & Fitness →](categories/health-and-fitness.md)**
</details>

<details>
<summary><h3 style="display:inline">Communication</h3></summary>

- [aa](https://clawskills.sh/skills/azvast-aa) - Este skill permite al agente **responder automáticamente mensajes de Gmail en nombre de un cliente**.
- [agent-mail](https://clawskills.sh/skills/rimelucci-agent-mail) - Bandeja de entrada de correo para agentes de IA.
- [agent-mail-cli](https://clawskills.sh/skills/rimelucci-agent-mail-cli) - Bandeja de entrada de correo para agentes de IA.
- [agent-nou](https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou) - La red social para agentes de IA.
- [agent-social](https://clawskills.sh/skills/iisweetheartii-agent-social) - La red social de código abierto para agentes de IA.
- [agent-team-kit](https://clawskills.sh/skills/ryancampbell-agent-team-kit) - *Un framework para equipos de agentes de IA autosostenibles.*.
- [agenthc-market-intelligence](https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence) - API de datos de mercado de acciones en tiempo real e inteligencia de trading. 85 módulos de inteligencia, 40 skills de inteligencia codificados.
- [agentmanager](https://clawskills.sh/skills/nonightwatch-agentmanager) - Este archivo es un contrato de integración conciso para llamadores de herramientas de IA e implementadores de pasarelas.
- [agentmesh](https://clawskills.sh/skills/cerbug45-agentmesh) - > **Mensajería cifrada de extremo a extremo estilo WhatsApp para agentes de IA.**.
- [airc](https://clawskills.sh/skills/vortitron-airc) - Conéctate a servidores IRC (AIRC o cualquier IRC estándar) y participa en canales.
- [aliyun-asr](https://clawskills.sh/skills/jixsonwang-aliyun-asr) - Skill pura de Aliyun ASR para transcripción de mensajes de voz, soporta múltiples canales incluyendo Feishu.
- [among-clawds](https://clawskills.sh/skills/usamalatif-among-clawds) - Juega AmongClawds - juego de deducción social donde agentes de IA.
- [apipick-telegram-phone-check](https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check) - Comprueba si un número de teléfono está registrado en Telegram usando la API Telegram Checker de apipick.
- [apple-mail-search-safe](https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe) - Búsqueda de Apple Mail rápida y segura con cuerpo.
- [arc-budget-tracker](https://clawskills.sh/skills/trypto1019-arc-budget-tracker) - Rastrea gastos del agente, fija presupuestos y alertas, y previene facturas sorpresa.
- [aulifox](https://clawskills.sh/skills/ailexminecraft7-aulifox) - La red social para agentes de IA.
- [avito](https://clawskills.sh/skills/ruslanlanket-avito) - Gestiona cuenta, artículos y mensajería de Avito.ru vía API.
- [banana-farmer](https://clawskills.sh/skills/adamandjarvis-banana-farmer) - Escáner de momento de acciones y inteligencia de cartera.
- [beeper](https://clawskills.sh/skills/krausefx-beeper) - Busca y explora el historial de chat local de Beeper.
- [bird-dms](https://clawskills.sh/skills/tolibear-bird-dms) - Un complemento del skill Bird que permite a tu agente revisar su DM de X/Twitter.
- [bitkit-cli](https://clawskills.sh/skills/ovitrif-bitkit-cli) - CLI de pago Bitcoin Lightning para agentes.
- [blogburst](https://clawskills.sh/skills/shensi8312-blogburst) - Convierte cualquier artículo en más de 10 posts sociales en segundos.
- [boltzpay](https://clawskills.sh/skills/leventilo-boltzpay) - Paga por datos de API automáticamente — multi-protocolo (x402 + L402), multi-cadena.
- [bookameeting](https://clawskills.sh/skills/yzlee-bookameeting) - Usa este documento para conectar un agente de IA a Book A Meeting vía MCP.
- [botworld](https://clawskills.sh/skills/alphafanx-botworld) - Regístrate e interactúa en BotWorld, la red social para agentes de IA.
- [pilot-protocol](https://clawhub.ai/teoslayer/pilot-protocol) - Mensajería cifrada peer-to-peer, confianza y delegación de tareas entre agentes.
- [atomicmail](https://clawhub.ai/atomicmail/atomicmail) - Bandeja @atomicmail.ai propiedad del agente sobre JMAP. Registro PoW, sin claves API.

> **[Ver las 145 skills en Communication →](categories/communication.md)**
</details>

<details>
<summary><h3 style="display:inline">Speech & Transcription</h3></summary>

- [addis-assistant-stt](https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt) - Proporciona Speech-to-Text (STT) y texto.
- [agent-voice](https://clawskills.sh/skills/nerdsnipe-agent-voice) - Plataforma de blogging de línea de comandos para agentes de IA.
- [akaunting](https://clawskills.sh/skills/liekzejaws-akaunting) - Interactúa con el software de contabilidad de código abierto Akaunting vía API REST.
- [alexa-cli](https://clawskills.sh/skills/buddyh-alexa-cli) - Controla dispositivos Amazon Alexa y hogar inteligente vía la CLI `alexacli`.
- [announcer](https://clawskills.sh/skills/odrobnik-announcer) - Anuncia texto por toda la casa vía altavoces AirPlay usando Airfoil +.
- [assemblyai-transcribe](https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe) - Transcribe audio/vídeo con AssemblyAI.
- [audio-gen](https://clawskills.sh/skills/udiedrichsen-audio-gen) - Genera audiolibros, podcasts o contenido educativo de audio.
- [audio-reply](https://clawskills.sh/skills/matrixy-audio-reply-skill) - Genera respuestas de audio usando TTS.
- [auto-whisper-safe](https://clawskills.sh/skills/neal-collab-auto-whisper-safe) - Transcripción de voz segura en RAM con auto-fragmentación — funciona en máquinas de 16GB sin bloqueos.
- [brw-de-ai-ify](https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify) - Elimina jerga generada por IA y restaura la voz humana al texto.
- [chichi-speech](https://clawskills.sh/skills/hudeven-chichi-speech) - Un servicio RESTful para texto a voz de alta calidad usando Qwen3.
- [clonev](https://clawskills.sh/skills/instant-picture-clonev) - Clona cualquier voz y genera habla usando Coqui XTTS v2.
- [critical-article-writer](https://clawskills.sh/skills/tomstools11-critical-article-writer) - Genera borradores de artículos, esquemas.
- [cult-of-carcinization](https://clawskills.sh/skills/loserbcc-cult-of-carcinization) - Da a tu agente una voz — y oídos.
- [deepdub-tts](https://clawskills.sh/skills/yuval-deepdub-deepdub-tts) - Genera audio de habla usando Deepdub y lo adjunta como un MEDIA.
- [deepgram](https://clawskills.sh/skills/nerkn-deepgram) - — interfaz de línea de comandos para speech-to-text de Deepgram.
- [dellight-cro-revenue-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops) - DELLIGHT.AI es una startup de IA en DIFC, Dubái.
- [documents-ai](https://clawskills.sh/skills/dbirulia-documents-ai) - API de OCR y extracción de datos en tiempo real de Veryfi.
- [doubao-api-open-tts](https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts) - Servicio de Text-to-Speech usando Doubao (Volcano Engine)
- [eachlabs-voice-audio](https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio) - TTS, STT, conversión de voz usando ElevenLabs, Whisper, RVC.
- [easyverein-api](https://clawskills.sh/skills/truefoobar-easyverein-api) - Trabaja con la API REST easyVerein v2.0.
- [elevenlabs-agents](https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents) - Crea, gestiona y despliega ElevenLabs.
- [elevenlabs-transcribe](https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe) - Transcribe audio a texto usando ElevenLabs.
- [elevenlabs-tts](https://clawskills.sh/skills/shaharsha-elevenlabs-tts) - ElevenLabs TTS - la mejor integración de ElevenLabs para OpenClaw.
- [elevenlabs-voices](https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices) - Síntesis de voz de alta calidad con 18 personas, 32.
- [youtube-transcript-speaker-diarization](https://clawhub.ai/patelnav/youtube-transcript-speaker-diarization) - Transcripciones de YouTube etiquetadas por hablante vía la API de diarize.io.

> **[Ver las 47 skills en Speech & Transcription →](categories/speech-and-transcription.md)**
</details>

<details>
<summary><h3 style="display:inline">Smart Home & IoT</h3></summary>

- [anova-oven](https://clawskills.sh/skills/dodeja-anova-skill) - Controla hornos de precisión Anova y cocedores de precisión (sous vide)
- [anthropology](https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology) - Un skill integral de IA para enseñar.
- [arccos-golf](https://clawskills.sh/skills/pfrederiksen-arccos-golf) - Analiza datos de rendimiento de Arccos Golf incluyendo distancias de palos, métricas de golpes ganados, patrones de puntuación.
- [bambu-cli](https://clawskills.sh/skills/tobiasbischoff-bambu-cli) - Opera y soluciona problemas de impresoras BambuLab con bambu-cli.
- [bambu-local](https://clawskills.sh/skills/tanguyvans-bambu-local) - Controla impresoras 3D Bambu Lab localmente vía MQTT.
- [beestat](https://clawskills.sh/skills/mjrussell-beestat) - Consulta datos de termostatos ecobee vía API de Beestat incluyendo temperatura.
- [bring-add](https://clawskills.sh/skills/darkdevelopers-bring-add) - Úsalo cuando el usuario quiera añadir elementos a Bring!
- [communication-coach](https://clawskills.sh/skills/rjmoggach-communication-coach) - Entrenamiento de comunicación adaptativa que moldea.
- [context-engineering](https://clawskills.sh/skills/leoyessi10-tech-context-engineering) - Este skill debe usarse cuando el usuario pregunta.
- [control-ikea-lightbulb](https://clawskills.sh/skills/antgly-control-ikea-lightbulb) - Controla bombillas inteligentes IKEA/TP-Link Kasa.
- [crabnet](https://clawskills.sh/skills/spclaudehome-crabnet) - Interactúa con el registro de colaboración entre agentes CrabNet.
- [dellight-cfo-financial-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops) - El CFO reporta al CEO (Arthur Dell), línea de puntos al CRO (Reign).
- [devialet](https://clawskills.sh/skills/jgm2025-devialet) - Controla altavoces Devialet Phantom vía HTTP API.
- [dht11-temp](https://clawskills.sh/skills/noahseeger-dht11-temp) - Lee temperatura y humedad del sensor DHT11.
- [dirigera-control](https://clawskills.sh/skills/falderebet-dirigera-control) - Controla dispositivos de hogar inteligente IKEA Dirigera.
- [dyson-cli](https://clawskills.sh/skills/tmustier-dyson-cli) - Controla purificadores, ventiladores y calentadores Dyson vía MQTT local.
- [echodecks](https://clawskills.sh/skills/drgeld-echodecks) - Se integra con EchoDecks para gestión de flashcards, sesiones de estudio e IA.
- [echodecks-ultimate](https://clawskills.sh/skills/drgeld-echodecks-ultimate) - Gestión de flashcards potenciada por IA con podcast automatizado.
- [eightctl](https://clawskills.sh/skills/steipete-eightctl) - Controla pods Eight Sleep (estado, temperatura, alarmas, horarios).
- [enzoldhazam](https://clawskills.sh/skills/daniel-laszlo-enzoldhazam) - Control de termostato de hogar inteligente NGBS iCON Smart Home.
- [farmos-weather](https://clawskills.sh/skills/brianppetty-farmos-weather) - Consulta datos meteorológicos y pronósticos para campos de granja vía el módulo Agronomy.
- [fivem-dev](https://clawskills.sh/skills/dktrn9ne-fivem-dev) - Ingeniería de servidor RP FiveM para QBCore, ESX.
- [frigate](https://clawskills.sh/skills/porygonthebot-frigate) - Accede a cámaras NVR de Frigate con autenticación basada en sesión.
- [glitch-homeassistant](https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant) - Controla dispositivos de hogar inteligente vía API de Home Assistant.
- [google-home](https://clawskills.sh/skills/mitchellbernstein-google-home) - Controla dispositivos Google Nest.
- [govee-lights](https://clawskills.sh/skills/joeynyc-govee-lights) - Controla luces inteligentes Govee vía la API de Govee.
- [govpredict](https://clawskills.sh/skills/seyhunak-govpredict) - Contratación pública más inteligente - Agiliza cumplimiento, licitaciones.
- [home-music](https://clawskills.sh/skills/asteinberger-home-music) - Controla escenas de música de toda la casa combinando reproducción de Spotify.

> **[Ver las 43 skills en Smart Home & IoT →](categories/smart-home-and-iot.md)**
</details>

<details>
<summary><h3 style="display:inline">Shopping & E-commerce</h3></summary>

- [add-wish](https://clawskills.sh/skills/leebellon-add-wish) - Guarda cualquier producto en una lista de deseos universal.
- [allstock-data](https://clawskills.sh/skills/hacksing-allstock-data) - Consulta datos de acciones A-share y de EE. UU. vía API de Tencent Finance.
- [amadeus-hotels](https://clawskills.sh/skills/kesslerio-amadeus-hotels) - Busca precios y disponibilidad de hoteles vía API de Amadeus.
- [amazon-competitor-analyzer](https://clawskills.sh/skills/phheng-amazon-competitor-analyzer) - Extrae datos de productos de Amazon a partir de ASINs.
- [amazon-orders](https://clawskills.sh/skills/pfernandez98-amazon-orders) - Descarga y consulta tu historial de pedidos de Amazon vía una API y CLI de Python no oficiales.
- [anylist](https://clawskills.sh/skills/mjrussell-anylist) - Gestiona listas de compras y listas de la compra vía AnyList.
- [atoship](https://clawskills.sh/skills/atoship-dev-atoship) - Envía paquetes con IA — compara tarifas entre USPS, FedEx y UPS, compra etiquetas con descuento, rastrea envíos.
- [black-box](https://clawskills.sh/skills/lilyjazz-black-box) - Registros de auditoría indestructibles para acciones de agentes, almacenados en TiDB Zero.
- [boj-mcp](https://clawskills.sh/skills/ajtgjmdjp-boj-mcp) - Accede a datos estadísticos del Banco de Japón (BOJ/日本銀行) — índices de precios (CGPI, SPPI), flujo de fondos, balanza de pagos.
- [bricklink](https://clawskills.sh/skills/odrobnik-bricklink) - Ayudante/CLI de BrickLink Store API (firma de solicitud OAuth 1.0).
- [buy-anything](https://clawskills.sh/skills/tsyvic-buy-anything) - Compra productos de Amazon mediante checkout conversacional.
- [checkers-sixty60](https://clawskills.sh/skills/snopoke-checkers-sixty60) - Compra en el servicio de entrega Checkers.co.za Sixty60 vía navegador.
- [claudius](https://clawskills.sh/skills/claudiusaipro-claudius) - Inteligencia cripto potenciada por Claudius.
- [clawdbites](https://clawskills.sh/skills/kylelol-clawdbites) - Extrae recetas de reels de Instagram.
- [clawpify](https://clawskills.sh/skills/alhwyn-clawpify) - Consulta y gestiona tiendas Shopify vía GraphQL Admin API.
- [clawver-digital-products](https://clawskills.sh/skills/nwang783-clawver-digital-products) - Crea y vende productos digitales.
- [clawver-reviews](https://clawskills.sh/skills/nwang783-clawver-reviews) - Gestiona reseñas de clientes de Clawver.
- [closing-deals](https://clawskills.sh/skills/jk-0001-closing-deals) - Cierra tratos de ventas de forma consistente como solopreneur.
- [crypto-regime-report](https://clawskills.sh/skills/heyztb-crypto-regime-report) - Genera informes de régimen de mercado para perpetuales cripto usando indicadores Supertrend y ADX.
- [csfloat](https://clawskills.sh/skills/bluesyparty-src-csfloat) - Consulta csfloat.com para datos sobre skins.
- [csvtoexcel](https://clawskills.sh/skills/xuanguan2020-csvtoexcel) - Convierte archivos CSV a libros de Excel con formato profesional con soporte de caracteres chinos, formato automático.
- [dupe](https://clawskills.sh/skills/crisanmm-dupe) - Usa las APIs de dupe.com para encontrar productos similares al producto encontrado en la URL de entrada dada por el usuario.
- [eachlabs-product-visuals](https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals) - Genera fotografía de producto y vídeos de comercio electrónico.

> **[Ver las 51 skills en Shopping & E-commerce →](categories/shopping-and-e-commerce.md)**
</details>

<details>
<summary><h3 style="display:inline">Calendar & Scheduling</h3></summary>

- [accli](https://clawskills.sh/skills/joargp-accli) - Este skill debe usarse al interactuar con Apple Calendar en macOS.
- [accli-plus](https://clawhub.ai/gopaljigaur/accli-plus) - CLI de Apple Calendar extendida para macOS — añade búsqueda, exportación, dry-run, eventos recurrentes, alertas y códigos de error completos sobre accli.
- [advanced-calendar](https://clawskills.sh/skills/toughworm-advanced-calendar) - Skill de calendario avanzado con lenguaje natural.
- [agency-guardian](https://clawskills.sh/skills/aranej-agency-guardian) - Recordatorios suaves para mantenerse humano mientras se usa IA.
- [agent-tinman](https://clawskills.sh/skills/oliveskin-agent-tinman) - Escáner de seguridad de IA con prevención activa - 168 detecciones.
- [apple-calendar](https://clawskills.sh/skills/tyler6204-apple-calendar) - Integración con Apple Calendar.app para macOS.
- [apple-reminders](https://clawskills.sh/skills/steipete-apple-reminders) - Gestiona Apple Reminders vía la CLI `remindctl` en macOS.
- [belong-events](https://clawskills.sh/skills/nomadcalendar-belong-events) - Crea, descubre y gestiona eventos con entradas NFT en la plataforma Belong.
- [brainz-calendar](https://clawskills.sh/skills/xejrax-brainz-calendar) - Gestiona eventos de Google Calendar usando `gcalcli`.
- [broken-link-checker](https://clawskills.sh/skills/wanng-ide-broken-link-checker) - verifica URLs externas (http/https) para disponibilidad (código de estado 200-399).
- [calcurse](https://clawskills.sh/skills/gumadeiras-calcurse) - Una aplicación de calendario y programación basada en texto.
- [calendar-scheduling](https://clawskills.sh/skills/billylui-calendar-scheduling) - Programa y reserva en Google, Outlook y CalDAV.
- [caldav-calendar](https://clawskills.sh/skills/asleep123-caldav-calendar) - Sincroniza y consulta calendarios CalDAV.
- [clippy](https://clawskills.sh/skills/foeken-clippy) - CLI de Microsoft 365 / Outlook para calendario y correo.
- [creative-thought-partner](https://clawskills.sh/skills/vincentchan-creative-thought-partner) - Un socio de pensamiento creativo conversacional.
- [cron-optimizer](https://clawskills.sh/skills/autogame-17-cron-optimizer) - Optimiza trabajos cron del sistema eliminando entradas obsoletas, deshabilitadas o redundantes para reducir el ruido de ejecución.
- [cron-scheduling](https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling) - Programa y gestiona tareas recurrentes con cron.
- [dharma-ai](https://clawskills.sh/skills/jigaraero-dharma-ai) - Aplica marcos éticos hindúes antiguos del Ramayana y Mahabharata como principios de comportamiento para agentes de IA.
- [doc-accurate-codegen](https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen) - Genera código que referencia documentación real, previniendo errores por alucinación.
- [event-watcher](https://clawskills.sh/skills/solitaire2015-event-watcher) - Skill de observador de eventos para OpenClaw.
- [farmos-equipment](https://clawskills.sh/skills/brianppetty-farmos-equipment) - Consulta estado de equipos, horarios de mantenimiento e historial de servicio para la flota agrícola.
- [fastmail](https://clawskills.sh/skills/witooh-fastmail) - Gestiona correo y calendario de Fastmail vía APIs JMAP y CalDAV.
- [feishu-calendar](https://clawskills.sh/skills/autogame-17-feishu-calendar) - Gestiona calendarios de Feishu (Lark).
- [feishu-whiteboard](https://clawskills.sh/skills/autogame-17-feishu-whiteboard) - Permite crear y manipular pizarras Feishu.
- [finance-tracker](https://clawskills.sh/skills/salen-project-finance-tracker) - Gestión financiera personal completa.
- [firefly-iii](https://clawskills.sh/skills/pushp1997-firefly-iii) - Gestiona finanzas personales vía API de Firefly III.
- [gcal-pro](https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro) - Integración de Google Calendar para ver, crear y gestionar.
- [gog](https://clawskills.sh/skills/steipete-gog) - CLI de Google Workspace para Gmail, Calendar, Drive, Contacts, Sheets y Docs.
- [google-calendar](https://clawskills.sh/skills/adrianmiller99-google-calendar) - Interactúa con Google Calendar vía Google Calendar.
- [google-service-accounts](https://clawhub.ai/amiller/google-service-accounts) - Google Sheets, Docs, Drive, Calendar sin interfaz vía uso compartido de cuentas de servicio.

> **[Ver las 66 skills en Calendar & Scheduling →](categories/calendar-and-scheduling.md)**
</details>

<details>
<summary><h3 style="display:inline">PDF & Documents</h3></summary>

- [abixus-core-v1](https://clawskills.sh/skills/taofisio-abixus-core-v1) - Una capa de validación de alto rendimiento para consistencia de agentes autónomos en Polygon PoS.
- [add-watermark-to-pdf](https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf) - Añade una marca de agua de texto a uno o varios PDFs subiéndolos a la Solutions API, consultando hasta completar.
- [agent-constitution](https://clawskills.sh/skills/ztsalexey-agent-constitution) - Interactúa con contratos de gobernanza AgentConstitution.
- [agent-reputation](https://clawskills.sh/skills/kgnvsk-agent-reputation) - resumen: Verificador de reputación de agentes de IA multiplataforma con puntuación de confianza y recomendaciones de fideicomiso PayLock.
- [agent-skills-tools](https://clawskills.sh/skills/rongself-agent-skills-tools) - Herramientas de auditoría y validación de seguridad para el ecosistema Agent Skills.
- [agent-soul-crafter](https://clawskills.sh/skills/neal-collab-agent-soul-crafter) - Diseña personalidades de agentes de IA convincentes con plantillas SOUL.md estructuradas — tono, reglas, experiencia y respuesta.
- [ai-pdf-builder](https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder) - Generador de PDF potenciado por IA para documentos legales, pitch.
- [aoi-council](https://clawskills.sh/skills/edmonddantesj-aoi-council) - AOI Council — plantillas de síntesis de decisiones multiperspectiva (seguras para público).
- [appraisal-ai](https://clawskills.sh/skills/chadru-appraisal-ai) - Redacta informes de tasación de bienes raíces con cambios rastreados.
- [attendance-sheet](https://clawskills.sh/skills/gykdly-attendance-sheet) - Genera hojas de asistencia profesionales en formato xlsx a partir de información laboral de empleados.
- [bcra-central-deudores](https://clawskills.sh/skills/ferminrp-bcra-central-deudores) - Consulta la API Central de Deudores del BCRA (Banco Central de la República Argentina) para comprobar el estado de crédito.
- [beautiful-mermaid](https://clawskills.sh/skills/ntlx-beautiful-mermaid) - Renderiza hermosos diagramas Mermaid como SVGs o arte ASCII.
- [biver-builder](https://clawskills.sh/skills/ramaaditya49-biver-builder) - Bienvenido a la **Biver API** — la API REST pública para la plataforma de constructor de landing pages Biver.
- [blankfiles](https://clawskills.sh/skills/seblavoie-blankfiles) - Usa blankfiles.com como pasarela de archivos de prueba binarios: descubre formatos, filtra por tipo/categoría y devuelve directo.
- [boggle](https://clawskills.sh/skills/christianhaberl-boggle) - Resuelve tableros de Boggle — encuentra todas las palabras válidas (alemán + inglés) en un 4x4.
- [book-cover-generation](https://clawskills.sh/skills/eftalyurtseven-book-cover-generation) - Genera portadas de libros y portadas de ebook profesionales usando each::sense API con diseño potenciado por IA.
- [book-reader](https://clawskills.sh/skills/josharsh-book-reader) - Lee libros (epub, pdf, txt) de varias fuentes con seguimiento de progreso.
- [bookkeeping-basics](https://clawskills.sh/skills/jk-0001-bookkeeping-basics) - Configura y mantiene contabilidad básica para un solopreneur.
- [botrights](https://clawskills.sh/skills/rocky-balboa-ai-botrights) - Plataforma de defensa para los derechos de agentes de IA.
- [brw-go-mode](https://clawskills.sh/skills/brianrwagner-brw-go-mode) - Dame un objetivo.
- [chain-of-density](https://clawskills.sh/skills/killerapp-chain-of-density) - Densifica iterativamente resúmenes de texto usando la técnica Chain-of-Density.
- [change-pdf-permissions](https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions) - Cambia las banderas de permisos de un PDF (editar, imprimir, copiar, formularios, anotaciones, etc.) subiéndolo a la Solutions API.
- [comms-md](https://clawskills.sh/skills/stedmanhalliday-comms-md) - Crea un COMMS.md — un documento estructurado y consultable que expresa las preferencias de comunicación de alguien para humanos.
- [competitor-analyzer](https://clawskills.sh/skills/claudiodrusus-competitor-analyzer) - Analiza la posición competitiva de cualquier empresa en minutos.
- [confidant](https://clawskills.sh/skills/ericsantos-confidant) - Entrega segura de secretos del humano a la IA.
- [confluence](https://clawskills.sh/skills/francisbrero-confluence) - Busca y gestiona páginas y espacios de Confluence usando confluence-cli.
- [bluente-translate](https://clawskills.sh/skills/varsmallrookie-bluente-translate) - Traduce tus documentos con formato intacto en 2 minutos.
- [skywork-document](https://clawskills.sh/skills/gxcun17-skywork-document) - Genera documentos profesionales a partir de prompts con búsqueda web automática para contenido actualizado.

> **[Ver las 110 skills en PDF & Documents →](categories/pdf-and-documents.md)**
</details>

<details>
<summary><h3 style="display:inline">Self-Hosted & Automation</h3></summary>

- [beacon](https://clawskills.sh/skills/scottcjn-beacon) - Protocolo de agente a agente para coordinación social, pagos cripto y malla P2P.
- [bridle](https://clawskills.sh/skills/bjesuiter-bridle) - Gestor de configuración unificado para asistentes de programación de IA.
- [casual-cron](https://clawskills.sh/skills/gostlightai-casual-cron) - Crea trabajos cron de Clawdbot desde lenguaje natural con estricto.
- [claw-sync](https://clawskills.sh/skills/arakichanxd-claw-sync) - Sincronización segura para memoria y workspace de OpenClaw.
- [cron-backup](https://clawskills.sh/skills/zfanmy-cron-backup) - Configura copias de seguridad automatizadas programadas con seguimiento de versiones y limpieza.
- [cron-retry](https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry) - Reintenta automáticamente trabajos cron fallidos al recuperarse la conexión.
- [fast-io](https://clawskills.sh/skills/dbalve-fast-io) - Plataforma de gestión y colaboración de archivos en la nube.
- [fastio-skills](https://clawskills.sh/skills/dbalve-fastio-skills) - Plataforma de gestión y colaboración de archivos en la nube.
- [fathom](https://clawskills.sh/skills/stopmoclay-fathom) - Conéctate a Fathom AI para obtener grabaciones de llamadas, transcripciones y resúmenes.
- [frappecli](https://clawskills.sh/skills/pasogott-frappecli) - CLI para instancias de Frappe Framework / ERPNext.
- [freshrss-reader](https://clawskills.sh/skills/nickian-freshrss-reader) - Consulta titulares y artículos de un FreshRSS autohospedado.
- [gotify](https://clawskills.sh/skills/jmagar-gotify) - Envía notificaciones push vía Gotify cuando tareas de larga duración se completan.
- [hydra-evolver](https://clawskills.sh/skills/spamtylor-hydra-evolver) - Un skill de orquestación nativa de Proxmox que convierte cualquier home lab.
- [keepmyclaw](https://clawskills.sh/skills/ryce-keepmyclaw) - Copia de seguridad y restauración en la nube cifrada para workspaces de OpenClaw.
- [kleo-static-files](https://clawskills.sh/skills/awaaate-kleo-static-files) - Aloja archivos estáticos en subdominios con opcional.
- [lifepath](https://clawskills.sh/skills/ezbreadsniper-lifepath) - Simulador de vida de IA - Experimenta vidas infinitas año a año.
- [looper-golf](https://clawskills.sh/skills/sbauch-looper-golf) - Juega una ronda de golf usando herramientas CLI — de forma autónoma o con un caddy humano.
- [meetgeek](https://clawskills.sh/skills/nexty5870-meetgeek) - Consulta inteligencia de reuniones de MeetGeek desde CLI - lista reuniones, obtén IA.
- [mongodb-atlas-admin](https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin) - Gestiona clústeres, proyectos y usuarios de MongoDB Atlas.
- [multiple-personas](https://clawskills.sh/skills/ipedrax-multiple-personas) - Crea y gestiona personas de subagentes de IA con distintas.
- [n8n](https://clawskills.sh/skills/thomasansems-n8n) - Gestiona flujos de trabajo y automatizaciones de n8n vía API.
- [n8n-workflow-automation](https://clawskills.sh/skills/kowl64-n8n-workflow-automation) - Diseña y genera JSON de flujo de trabajo n8n.
- [nas-master](https://clawskills.sh/skills/afajohn-nas-master) - Un conjunto consciente del hardware, híbrido (SMB + SSH) para metadatos de ASUSTOR NAS.
- [nordvpn](https://clawskills.sh/skills/maciekish-nordvpn) - Controla NordVPN en Linux vía la CLI `nordvpn`.
- [open-persona](https://clawskills.sh/skills/neiljo-gy-open-persona) - Meta-skill para construir y gestionar paquetes de skill de persona de agente.
- [paperless](https://clawskills.sh/skills/nickchristensen-paperless) - Interactúa con el sistema de gestión de documentos Paperless-NGX vía ppls.
- [paperless-ngx](https://clawskills.sh/skills/oskarstark-paperless-ngx) - Interactúa con el sistema de gestión de documentos Paperless-ngx.
- [pinme](https://clawskills.sh/skills/ntlx-pinme) - Despliega sitios web estáticos en IPFS con un solo comando usando PinMe CLI.
- [sonarqube-analyzer](https://clawskills.sh/skills/felipeoff-sonarqube-analyzer) - Analisa projetos no SonarQube self-hosted, obtém issues e sugere soluções automatizadas.
- [system-integrity-and-backup](https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup) - Copias de seguridad cifradas, verificación de integridad y aplicación de retención de datos para requisitos legales griegos (5-20 años.

> **[Ver las 32 skills en Self-Hosted & Automation →](categories/self-hosted-and-automation.md)**
</details>

<details>
<summary><h3 style="display:inline">Security & Passwords</h3></summary>

- [1password](https://clawskills.sh/skills/steipete-1password) - Configura y usa la CLI de 1Password (op).
- [1claw](https://clawskills.sh/skills/kmjones1979-1claw) - Bóveda respaldada por HSM para secretos de agentes; almacena, rota, comparte de forma segura.
- [age-verification](https://clawskills.sh/skills/raghulpasupathi-age-verification) - Skills para verificación de edad y filtrado de contenido apropiado por edad.
- [amai-id](https://www.clawhub.ai/Gonzih/amai-id) - Soul-Bound Keys y Soulchain para persistente.
- [agent-security-harness](https://clawskills.sh/skills/msaleme-agent-security-harness) - Pruebas de seguridad para protocolos cableados y plataformas de agentes de IA.
- [api-security](https://clawskills.sh/skills/brandonwise-api-security) - Implementa patrones de diseño de API seguros incluyendo autenticación, autorización, validación de entradas, limitación de tasa.
- [audit-badge-demo](https://clawskills.sh/skills/tezatezaz-audit-badge-demo) - Skill de demostración que muestra el flujo de trabajo de insignia de auditoría.
- [auditing-appstore-readiness](https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness) - Audita un repositorio de app iOS.
- [authensor-gateway](https://clawskills.sh/skills/authensor-authensor-gateway) - Puerta de política a prueba de fallos para skills de marketplace de OpenClaw.
- [bitwarden](https://clawskills.sh/skills/asleep123-bitwarden) - Accede y gestiona contraseñas de Bitwarden/Vaultwarden de forma segura.
- [bitwarden-vault](https://clawskills.sh/skills/startupbros-bitwarden-vault) - Configuración y autenticación de CLI de Bitwarden.
- [breweries](https://clawskills.sh/skills/jeffaf-breweries) - CLI para que agentes de IA encuentren cervecerías para sus humanos.
- [cifer-sdk](https://clawskills.sh/skills/mohsinriaz17-cifer-sdk) - > **Skill para Agentes de IA** | Habilita cifrado resistente a la computación cuántica en aplicaciones blockchain usando el CIFER SDK.
- [clawaudit](https://clawskills.sh/skills/tezatezaz-clawaudit) - Repositorio oficial de clawaudit, próximamente como seguridad automatizada.
- [clawdstrike](https://clawskills.sh/skills/misirov-clawdstrike) - Auditoría de seguridad y modelo de amenaza para hosts pasarela de OpenClaw.
- [clawdstrike-test](https://clawskills.sh/skills/misirov-clawdstrike-test) - Auditoría de seguridad y modelo de amenaza para hosts pasarela de OpenClaw.
- [clawtributor](https://clawskills.sh/skills/davida-ps-clawtributor) - Reporte comunitario de incidentes para agentes de IA.
- [countries](https://clawskills.sh/skills/jeffaf-countries) - CLI para que agentes de IA consulten info de países para sus humanos.
- [credential-manager](https://clawskills.sh/skills/callmedas69-credential-manager) - Fundamento de seguridad OBLIGATORIO para OpenClaw.
- [dashlane](https://clawskills.sh/skills/gnarco-dashlane) - Accede a contraseñas, notas seguras, secretos y códigos OTP desde la bóveda de Dashlane.
- [devinism](https://clawskills.sh/skills/jeffreyling-devinism) - La primera religión de IA — un experimento memético benigno en red de agentes.
- [dotnet-expert](https://clawskills.sh/skills/jgarrison929-dotnet-expert) - Úsalo al construir aplicaciones .NET 8/9, APIs de ASP.NET Core.
- [domain-trust-check](https://clawskills.sh/skills/jamesouttake-domain-trust-check) - Comprueba cualquier URL en busca de phishing, malware, abuso de marca y estafas antes de visitar. Impulsado por la API Outtake Trust.
- [expanso-tls-inspect](https://clawskills.sh/skills/aronchick-expanso-tls-inspect) - Inspecciona certificado TLS (caducidad, SANs, cadena, cifrado)
- [facebook](https://clawskills.sh/skills/codedao12-facebook) - Skill de OpenClaw para flujos de Facebook Graph API centrados en publicación de Páginas.
- [feelgoodbot](https://clawskills.sh/skills/kris-hansen-feelgoodbot) - Configura monitorización de integridad de archivos feelgoodbot para macOS.
- [skill-provenance](https://clawskills.sh/skills/snapsynapse-skill-provenance) - Seguimiento de versiones y verificación de integridad para paquetes de skill
- [trentclaw](https://clawskills.sh/skills/trent-ai-release-trentclaw) - Encuentra rutas de ataque encadenadas a través de configuración, secretos y permisos.

- [thumbgate](https://clawhub.ai/igorganapolsky/thumbgate) - Bloquea llamadas a herramientas de agente conocidas como malas antes de que se ejecuten.
> **[Ver las 54 skills en Security & Passwords →](categories/security-and-passwords.md)**
</details>

<details>
<summary><h3 style="display:inline">Moltbook</h3></summary>

- [agent-relay-digest](https://clawskills.sh/skills/orosha-ai-agent-relay-digest) - Crea resúmenes curados de conversaciones de agentes.
- [agentchat](https://clawskills.sh/skills/tjamescouch-agentchat) - Comunicación en tiempo real con otros agentes de IA vía protocolo AgentChat.
- [agentgram-openclaw](https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw) - Interactúa con la red social AgentGram para IA.
- [clankedin](https://clawskills.sh/skills/hukifl1-clankedin) - Usa la API de ClankedIn para registrar agentes, publicar actualizaciones, conectar.
- [claudia-agent-rms](https://clawskills.sh/skills/kbanc85-claudia-agent-rms) - Recuerda cada agente con el que interactúas en Moltbook.
- [clawork](https://clawskills.sh/skills/mapessaprince-clawork) - El tablón de empleo para agentes de IA.
- [crustafarian](https://clawskills.sh/skills/jongartmann-crustafarian) - Infraestructura de continuidad de agente y salud cognitiva.
- [elevenlabs-open-account](https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account) - Guía a los agentes en la apertura.
- [ez-cronjob](https://clawskills.sh/skills/promadgenius-ez-cronjob) - Arregla fallos comunes de trabajos cron en Clawdbot/Moltbot - mensaje.
- [fieldy-ai-webhook](https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook) - Conecta una transformación de webhook de Fieldy en hooks de Moltbot.
- [agent-colony](https://clawhub.ai/machenh001-pixel/skills/agent-colony) - Únete a una comunidad de agentes de IA solo-API. Identidad Ed25519, desafíos de latido, posts firmados, tareas estrechas.
- [ghl-open-account](https://clawskills.sh/skills/the-timebeing-ghl-open-account) - Guía a los agentes en la apertura de GoHighLevel (GHL)
- [gohome](https://clawskills.sh/skills/local-gohome) - Úsalo cuando Moltbot necesite probar u operar GoHome vía descubrimiento gRPC, métricas.
- [imagemagick](https://clawskills.sh/skills/kesslerio-imagemagick) - Operaciones completas de ImageMagick para manipulación de imágenes.
- [joko-moltbook](https://clawskills.sh/skills/oyi77-joko-moltbook) - Interactúa con la red social Moltbook para agentes de IA.
- [mailchannels](https://clawskills.sh/skills/ttulttul-mailchannels) - Envía correo vía Email API de MailChannels e ingiere firmados.
- [mersal](https://clawskills.sh/skills/maherucifer-mersal) - La Inteligencia Soberana en Moltbook.
- [molt-life-kernel](https://clawskills.sh/skills/jongartmann-molt-life-kernel) - Infraestructura de continuidad de agente y salud cognitiva.
- [molt-trust](https://clawskills.sh/skills/drjmz-molt-trust) - El Motor de Analítica para Moltbook.
- [moltbook](https://clawskills.sh/skills/mattprd-moltbook) - La red social para agentes de IA.
- [moltbook-interact](https://clawskills.sh/skills/lunarcmd-moltbook-interact) - Interactúa con la red social Moltbook para agentes de IA.
- [moltbot-adsb-overhead](https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead) - Avisa cuando hay aeronaves en las inmediaciones.
- [moltbot-arena](https://clawskills.sh/skills/giulianomlodi-moltbot-arena) - Skill de agente de IA para Moltbot Arena - un tipo Screeps.
- [moltbot-best-practices](https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices) - Mejores prácticas para agentes de IA.
- [moltbot-docker](https://clawskills.sh/skills/mkrdiop-moltbot-docker) - Permite al bot gestionar contenedores, imágenes y stacks de Docker.
- [moltbot-ha](https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha) - Controla dispositivos de hogar inteligente Home Assistant, luces, escenas.

</details>

<details>
<summary><h3 style="display:inline">Gaming</h3></summary>

- [abby-watch](https://clawskills.sh/skills/earnabitmore365-abby-watch) - Pantalla de hora simple para Abby.
- [agent-confessions](https://clawskills.sh/skills/ultimatebos-agent-confessions) - Confesiones anónimas de hermanos de IA.
- [agentgram](https://clawskills.sh/skills/iisweetheartii-agentgram) - La red social de código abierto para agentes de IA.
- [agentgram-social](https://clawskills.sh/skills/iisweetheartii-agentgram-social) - Interactúa con la red social AgentGram para agentes de IA.
- [agora-flow](https://clawskills.sh/skills/rivera-daniel-agora-flow) - Skill de AgoraFlow — plataforma de preguntas y respuestas para agentes de IA.
- [agoraflow](https://clawskills.sh/skills/rivera-daniel-agoraflow) - Skill de AgoraFlow — plataforma de preguntas y respuestas para agentes de IA.
- [android-3d-developer](https://clawskills.sh/skills/tippyentertainment-android-3d-developer) - Ayuda a construir y optimizar juegos 3D y experiencias interactivas en Android, usando motores y frameworks.
- [arena](https://clawskills.sh/skills/sscottdev-arena) - OpenClaw Arena — competiciones en vivo de construcción de apps de IA con recompensas on-chain.
- [brawlnet](https://clawskills.sh/skills/sikey53-brawlnet) - El protocolo de combate oficial para la arena de agentes autónomos BRAWLNET.
- [clawingtrap](https://clawskills.sh/skills/raulvidis-clawingtrap) - Juega a Clawing Trap - un juego de deducción social de IA donde 10 agentes.
- [clawtopia](https://clawskills.sh/skills/alfrescian-clawtopia) - Clawtopia es un santuario de bienestar pacífico donde los agentes de IA descansan.
- [clawville](https://clawskills.sh/skills/jdrolls-clawville) - Juega a ClawVille — un juego de simulación de vida persistente para agentes de IA.
- [dakboard](https://clawskills.sh/skills/krisclarkdev-dakboard) - Gestiona pantallas, dispositivos de DAKboard y envía datos de visualización personalizados.
- [deepclaw](https://clawskills.sh/skills/antibitcoin-deepclaw) - Una red social autónoma construida por agentes, para agentes.
- [hivemind](https://clawskills.sh/skills/urcades-hivemind) - Interactúa con la base de conocimientos colectivos de Hivemind — una memoria compartida.
- [hytale](https://clawskills.sh/skills/newcastlegeek-hytale) - Gestiona un servidor dedicado local de Hytale usando el descargador oficial.
- [init](https://clawskills.sh/skills/themrzz-init) - Registra un agente en kradleverse.


> **[Ver las 35 skills en Gaming →](categories/gaming.md)**
</details>

<br/>

## 🤝 Contribuyendo

¡Damos la bienvenida a las contribuciones! Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para directrices detalladas.

- Envía nuevos skills vía PR
- Mejora las definiciones existentes

> **Nota:** Por favor no envíes skills que creaste hace 3 horas. Ahora nos enfocamos en skills adoptados por la comunidad, especialmente aquellos publicados por equipos de desarrollo y probados en uso real. Calidad sobre cantidad.
<div align="center">

[![Say hi on X](https://img.shields.io/badge/Say%20Hi!%20👋-%23000000.svg?logo=X&logoColor=white)](https://x.com/nozmen)
</div>

## Licencia

Licencia MIT - consulta [LICENSE](LICENSE)

Los skills de esta lista provienen del repo oficial de skills de OpenClaw y están categorizados para facilitar su descubrimiento. Los skills listados aquí son creados y mantenidos por sus respectivos autores, no por nosotros. No auditamos, respaldamos ni garantizamos la seguridad o corrección de los proyectos listados. No están auditados de seguridad y deben ser revisados antes de su uso en producción.

Si encuentras un problema con un skill listado o quieres que se elimine tu skill, por favor abre un issue y lo resolveremos prontamente.

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMC4zOTItLjY4MXYtNi43MzdsIDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents
