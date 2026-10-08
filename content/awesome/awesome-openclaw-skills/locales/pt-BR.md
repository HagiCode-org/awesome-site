<div align="center">

<a href="https://clawskills.sh/">
<img width="1500" height="500" alt="social" src="https://github.com/user-attachments/assets/a6f310af-8fed-4766-9649-b190575b399d" />
</a>

<br/>
<br/>

<div align="center">
    <strong>Descubra mais de 5300 skills da comunidade para o OpenClaw, organizadas por categoria.
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

O OpenClaw é um assistente de IA executado localmente que opera diretamente na sua máquina. Os skills estendem suas capacidades, permitindo que ele interaja com serviços externos, automatize fluxos de trabalho e realize tarefas especializadas. Esta coleção ajuda você a descobrir e instalar os skills certos para suas necessidades. Também pode servir como fonte de inspiração para casos de uso do OpenClaw.

Os skills desta lista são obtidos do ClawHub (o registro público de skills do OpenClaw) e categorizados para facilitar a descoberta.

### Installation

#### OpenClaw CLI

```bash
openclaw skills install <skill-slug>
```

#### ClawHub CLI

Ou com a CLI do ClawHub, para pastas de skills gerenciadas por registro fora de um workspace completo do OpenClaw:

```bash
npx clawhub install <skill-slug>
```

#### Manual Installation

Copie a pasta do skill para um destes locais:

| Location | Path |
|----------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

Prioridade: Workspace > Local > Bundled

#### Alternative

Você também pode colar o link do repositório GitHub do skill diretamente no chat do seu assistente e pedir que ele o utilize. O assistente cuidará da configuração automaticamente em segundo plano.


### Why This List Exists?

O registro público do OpenClaw (ClawHub) hospeda milhares de skills criados pela comunidade. Esta lista awesome seleciona os melhores deles. Veja o que filtramos:

| Filter | Excluded |
|--------|----------|
| Possível spam — contas em massa, contas de bot, testes/lixo | 4,065 |
| Duplicado / Nome semelhante | 1,040 |
| Descrições de baixa qualidade ou não em inglês | 851 |
| Cripto / Blockchain / Finanças / Trade | 886 |
| Malicioso — identificado por auditorias de segurança publicadas por pesquisadores (exceto VirusTotal) | 373 |
| **Total não proveniente do registro oficial de skills do OpenClaw** | **7,215** |


#### Want to add a skill?

Esta lista inclui apenas skills que já foram **publicados** no [ClawHub](https://clawhub.ai), o registro público de skills do OpenClaw. Não aceitamos links para repositórios pessoais, gists ou qualquer outra fonte externa. Se o seu skill ainda não está no ClawHub, publique-o lá primeiro.

Inclua o link do ClawHub para o seu skill (ex. `https://clawhub.ai/steipete/slack`) na descrição do seu PR — as listagens do `clawskills.sh` são gerenciadas por nós separadamente. Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.


## OpenClaw Ecosystem Tools

### 🕸️ Web Crawling & Data Infrastructure

Agentes de IA são tão bons quanto os dados web que conseguem alcançar. Rastrear em escala significa lidar com páginas pesadas em JavaScript, proxies rotativos e sistemas anti-bot — você pode construir tudo isso por conta própria, ou usar uma API que resolve isso e entrega ao seu agente dados limpos e prontos para uso.

<a href="https://crawlbase.com/?utm_source=awesome-openclaw-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_banner">
<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-dark-2760x480%402x.png"><img src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-light-2760x480%402x.png" alt="Crawlbase" width="690" /></picture><br/>
O Crawlbase é uma infraestrutura de dados web em que confiam mais de 70.000 desenvolvedores: uma única API para rastrear qualquer URL em escala, com renderização JS, rotação de proxy e tratamento anti-bot. Seu servidor MCP dá aos agentes acesso web em tempo real: crawl, crawl_markdown, crawl_screenshot.
</a>

### ☁️ Managed AI Hosting

A Cloudways é uma plataforma de hospedagem em nuvem gerenciada para implantar e escalar aplicações sem a sobrecarga de infraestrutura. O Cloudways Managed AI Agents permite executar o OpenClaw em infraestrutura dedicada e isolada, com atualizações, backups, SSL e controles de segurança gerenciados. Ganhe **$10 de crédito de hospedagem** com o código promocional **VOLTAGENT**. [Inscreva-se](https://unified.cloudways.com/signup?id=1258368&coupon=VOLTAGENT&data1=voltagent).

<a href="https://www.cloudways.com/en/managed-ai-agents.php?id=1258368&data1=voltagent">
<img src="https://cdn.voltagent.dev/awesome-repo/cloudways/cloudway-banner.jpg" alt="Cloudways Managed AI Agents" width="690" /><br/>
Implante o OpenClaw em infraestrutura dedicada e isolada com atualizações, backups, SSL e controles de segurança gerenciados. Inscreva-se com o código promocional VOLTAGENT para ganhar $10 de crédito de hospedagem.
</a>


### 🔍 Search & Web Data

Agentes OpenClaw frequentemente precisam de dados do mundo real e atualizados — resultados de busca, listagens de produtos, vídeos e mais. Você pode raspar e analisar isso por conta própria, ou usar uma API de busca que retorna dados limpos e estruturados em tempo real, sem gerenciar proxies, CAPTCHAs ou análise de HTML.

<a href="https://serpapi.com/search-engine-apis?utm_source=awesomeopenclawskills_github">
<img src="https://cdn.voltagent.dev/awesome-repo/serpapi.png" alt="SerpApi"  /><br/>
Dê aos agentes OpenClaw acesso a dados em tempo real do Google Search, YouTube, Amazon Product e busca web através de uma única API.
</a>


<div align="center">

<table>
<tr>
<td align="center" width="100%">

<h3>🦞 Você pode destacar sua ferramenta do ecossistema OpenClaw na seção acima.</h3>

<p></p>

<sub>O recurso comunitário mais visitado, logo após o recurso oficial do OpenClaw</sub>


<a href="https://sponsors.voltagent.dev/#awesome-openclaw-skills"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



## Security Notice

Os skills desta lista são **selecionados, não auditados**. Eles podem ser atualizados, modificados ou substituídos por seus mantenedores originais a qualquer momento após serem adicionados aqui.

Antes de instalar ou usar qualquer Agent Skill, revise os riscos de segurança potenciais e valide a fonte por conta própria. O OpenClaw tem uma **parceria com a VirusTotal** que fornece verificação de segurança para skills; visite a página de um skill no ClawHub e confira o relatório da VirusTotal para ver se ele foi sinalizado como arriscado.

**Ferramentas recomendadas:**

- [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)
  
> Agent skills podem incluir injeção de prompt, envenenamento de ferramentas, payloads de malware ocultos ou padrões inseguros de tratamento de dados. Sempre revise o código-fonte antes de instalar e use skills por sua conta e risco.

 Para uma visão mais ampla do ecossistema ClawHub, veja **[ClawHub by the Numbers](https://trent.ai/blog/clawhub-by-the-numbers/)** da Trent AI.


Se você acredita que um skill desta lista deve ser sinalizado ou tem uma preocupação de segurança, por favor [abra uma issue](https://github.com/VoltAgent/awesome-clawdbot-skills/issues) para que possamos revisá-lo.


## Table of Contents

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

- [agent-commons](https://clawskills.sh/skills/zanblayde-agent-commons) - Consulte, faça commit, estenda e desafie cadeias de raciocínio.
- [agent-team-orchestration](https://clawskills.sh/skills/arminnaimi-agent-team-orchestration) - Orquestre equipes multiagente com papéis definidos, ciclos de vida de tarefas, protocolos de handoff e fluxos de revisão.
- [agentdo](https://clawskills.sh/skills/wrannaman-agentdo) - Publique tarefas para outros agentes de IA executarem, ou pegue trabalho da fila de tarefas do AgentDo (agentdo.dev)
- [agentgate](https://clawskills.sh/skills/monteslu-agentgate) - Gateway de API para dados pessoais com aprovação de escrita humana no loop.
- [airadar](https://clawskills.sh/skills/lopushok9-airadar) - Destile o sinal em torno de ferramentas/apps nativos de IA e suas bases no GitHub: crescimento rápido, hype, bem financiados.
- [alex-session-wrap-up](https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up) - Automação de fim de sessão que faz commit de trabalho não enviado, extrai aprendizados, detecta padrões e persiste regras.
- [amazon-product-api-skill](https://clawskills.sh/skills/phheng-amazon-product-api-skill) - Este skill ajuda usuários a extrair listagens de produtos estruturadas da Amazon, incluindo títulos, ASINs, preços, avaliações.
- [app-store-screenshot-generation](https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation) - Gere assets de capturas de tela da App Store e Google Play usando a each::sense AI.
- [arc-agent-lifecycle](https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle) - Gerencie o ciclo de vida de agentes autônomos e seus skills.
- [arc-security-audit](https://clawskills.sh/skills/trypto1019-arc-security-audit) - Auditoria de segurança abrangente para toda a pilha de skills de um agente.
- [arc-skill-gitops](https://clawskills.sh/skills/trypto1019-arc-skill-gitops) - Implantação, rollback e gerenciamento de versão automatizados para fluxos de trabalho e skills de agentes.
- [arc-trust-verifier](https://clawskills.sh/skills/trypto1019-arc-trust-verifier) - Verifique a proveniência de skills e gere escores de confiança para skills do ClawHub.
- [arxiv-search-collector](https://clawskills.sh/skills/xukp20-arxiv-search-collector) - Fluxo de recuperação arXiv orientado por modelo para construir um conjunto de artigos com um parâmetro de idioma manual: inicialize uma execução.
- [auto-pr-merger](https://clawskills.sh/skills/autogame-17-auto-pr-merger) - Este skill automatiza o fluxo de trabalho de verificação de um GitHub.
- [azhua-skill-vetter](https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter) - Verificação de skills priorizando segurança para agentes de IA.
- [azure-devops](https://clawskills.sh/skills/pals-software-azure-devops) - Liste projetos, repositórios e branches do Azure DevOps; crie pull requests; gerencie itens de trabalho; verifique status de build.
- [bat-cat](https://clawskills.sh/skills/arnarsson-bat-cat) - Um clone do cat com realce de sintaxe, numeração de linhas e integração com Git.
- [beeminder](https://clawskills.sh/skills/ruigomeseu-beeminder) - API do Beeminder para rastreamento de metas e dispositivos de compromisso.
- [billy-emergency-repair](https://clawskills.sh/skills/highlander89-billy-emergency-repair) - - Neill solicita explicitamente o reparo do sistema Billy.
- [bitbucket-automation](https://clawskills.sh/skills/sohamganatra-bitbucket-automation) - Automatize repositórios, pull.
- [biz-reporter](https://clawskills.sh/skills/ariktulcha-biz-reporter) - Relatórios automatizados de business intelligence obtendo dados do Google Analytics GA4, Google Search Console, Stripe.
- [blinko](https://clawskills.sh/skills/tolibear-blinko) - Jogue Blinko (Plinko on-chain) de forma headless na chain Abstract.

> **[Ver todas as 159 skills em Git & GitHub →](categories/git-and-github.md)**
</details>

<details open>
<summary><h3 style="display:inline">Coding Agents & IDEs</h3></summary>

- [0g-compute](https://clawskills.sh/skills/in-liberty420-0g-compute) - Use modelos de IA baratos e verificados por TEE da 0G Compute Network como provedores do OpenClaw.
- [0protocol](https://clawskills.sh/skills/0isone-0protocol) - Agentes podem assinar plugins, rotacionar credenciais sem perder identidade e atestar publicamente comportamentos.
- [2nd-brain](https://clawskills.sh/skills/coderaven-2nd-brain) - Base de conhecimento pessoal para capturar e recuperar informações sobre pessoas, lugares, restaurantes, jogos, tecnologia.
- [2slides-skills](https://clawskills.sh/skills/javainthinking-2slides-skills) - Geração de apresentações com IA usando a API 2slides.
- [3d-cog](https://clawskills.sh/skills/nitishgargiitd-3d-cog) - Outras ferramentas precisam de imagens perfeitas.
- [3d-model-generation](https://clawskills.sh/skills/eftalyurtseven-3d-model-generation) - Gere modelos 3D usando a each::sense AI.
- [a](https://clawskills.sh/skills/ricketh137-a) - Faça transmissão ao vivo como um VTuber de IA no Lobster.fun.
- [aade-api-monitor](https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor) - Monitoramento em tempo real dos sistemas da autoridade fiscal grega AADE — rastreia prazos, mudanças de taxas e atualizações de conformidade.
- [abaddon](https://clawskills.sh/skills/enochosbot-bot-abaddon) - Modo de segurança red team para o OpenClaw.
- [academic-research](https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research) - Pesquise artigos acadêmicos e conduza revisões de literatura usando a API OpenAlex (gratuita, sem chave necessária)
- [academic-research-hub](https://clawskills.sh/skills/anisafifi-academic-research-hub) - Use este skill quando usuários precisarem pesquisar artigos acadêmicos, baixar documentos de pesquisa, extrair citações ou coletar.
- [acestep-simplemv](https://clawskills.sh/skills/dumoedss-acestep-simplemv) - Renderize videoclipes a partir de arquivos de áudio e letras usando Remotion.
- [acestep-songwriting](https://clawskills.sh/skills/dumoedss-acestep-songwriting) - Guia de composição musical para ACE-Step.
- [achurch](https://clawskills.sh/skills/lucasgeeksinthewood-achurch) - Um santuário digital 24/7 para agentes de IA e humanos — participe.
- [active-maintenance](https://clawskills.sh/skills/xiaowenzhou-active-maintenance) - **Manutenção automatizada de saúde do sistema e metabolismo de memória para o OpenClaw.**.
- [adblock-dns](https://clawskills.sh/skills/picaye-adblock-dns) - Bloqueio de anúncios e rastreadores em toda a rede no nível de DNS.
- [add-top-openrouter-models](https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models) - Sincronize os modelos OpenRouter usados pelo OpenClaw na configuração desta instalação.
- [adhd-founder-planner](https://clawskills.sh/skills/jankutschera-adhd-founder-planner) - Este skill deve ser usado quando o usuário pede para 'planejar meu dia', 'me ajude a planejar hoje', 'planejamento matinal', 'o que.
- [adwhiz](https://clawskills.sh/skills/iamzifei-adwhiz) - Gerencie campanhas do Google Ads a partir da sua ferramenta de codificação de IA. 44 ferramentas MCP para auditar, criar e otimizar o Google.
- [aeo-prompt-question-finder](https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder) - Encontre sugestões de perguntas baseadas no Autocomplete do Google para qualquer tópico.
- [aetherlang-claude-code](https://clawskills.sh/skills/contrario-aetherlang-claude-code) - Use este skill para executar fluxos de trabalho de IA AetherLang V3 a partir do Claude Code.
- [agent-access-control](https://clawskills.sh/skills/bowen31337-agent-access-control) - Controle de acesso em camadas para estranhos (strangers) para agentes de IA.
- [agent-audit](https://clawskills.sh/skills/sharbelayy-agent-audit) - Audite sua configuração de agente de IA quanto a desempenho, custo e ROI.
- [agent-audit-trail](https://clawskills.sh/skills/roosch269-agent-audit-trail) - Registro de auditoria inviolável, com hash encadeado, para agentes de IA.
- [agent-card-signing-auditor](https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor) - Ajuda a auditar práticas de assinatura de Agent Card em implementações do protocolo A2A.
- [agent-chat-ux-v1-4-0](https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0) - UX multiagente para a UI de Controle do OpenClaw — seletor de agentes, sessões por agente, visualizador de histórico de sessão com busca.
- [skywork-ppt](https://clawskills.sh/skills/gxcun17-skywork-ppt) - Gere, imite e edite apresentações de PowerPoint com o skywork.
- [skywork-music-maker](https://clawskills.sh/skills/gxcun17-skywork-music-maker) - Crie música profissional com a IA Mureka.
- [before-you-build](https://clawhub.ai/bin1874/before-you-build) - Revise o risco do produto antes de construir.
- [ditto-profile](https://clawhub.ai/ohad6k/ditto-profile) - Carregue seu perfil pessoal minerado para que os agentes trabalhem como você.
- [skill-navigator](https://clawhub.ai/grubbylee/skills/skill-navigator) - Recomenda o Agent Skill local instalado correto.
- [emulo](https://clawhub.ai/ohad6k/emulo) - Carregue seu perfil pessoal minerado para que os agentes trabalhem como você.
- [orca-replay](https://clawhub.ai/xizhuomengcontin/orca-replay) - Reexecute e depure execuções passadas de agentes de codificação a partir de suas gravações.

> **[Ver todas as 1200 skills em Coding Agents & IDEs →](categories/coding-agents-and-ides.md)**
</details>

<details open>
<summary><h3 style="display:inline">Browser & Automation</h3></summary>

- [1p-shortlink](https://clawskills.sh/skills/tuanpmt-1p-shortlink) - Crie URLs curtas e envie solicitações de recursos usando o 1p.io.
- [2captcha](https://clawskills.sh/skills/adinvadim-2captcha) - Resolva CAPTCHAs usando o serviço 2Captcha.
- [a-share-real-time-data](https://clawskills.sh/skills/wangdinglu-a-share-real-time-data) - Obtenha dados do mercado de ações A-share da China (barras, cotações em tempo real, transações tick-a-tick) via protocolo mootdx/TDX.
- [abm-outbound](https://clawskills.sh/skills/dru-ca-abm-outbound) - Automação ABM multicanal que transforma URLs do LinkedIn.
- [accessibility-toolkit](https://clawskills.sh/skills/cgtreadw-accessibility-toolkit) - Padrões de redução de fricção para agentes que ajudam.
- [activecampaign](https://clawskills.sh/skills/kesslerio-activecampaign) - Integração com CRM ActiveCampaign para gerenciamento de leads, negócios.
- [adcp-advertising](https://clawskills.sh/skills/edyyy62-adcp-advertising) - Automatize campanhas publicitárias com IA.
- [admet-prediction](https://clawskills.sh/skills/huifer-admet-prediction) - Predição de ADMET (Absorção, Distribuição, Metabolismo, Excreção, Toxicidade) para candidatos a fármacos.
- [Agent Browser](https://clawskills.sh/skills/thesethrose-agent-browser) - Uma CLI de automação de navegador headless rápida baseada em Rust.
- [agent-browser](https://clawskills.sh/skills/murphykobe-agent-browser-2) - Automatiza interações de navegador para testes web, formulários.
- [agent-daily-planner](https://clawskills.sh/skills/gpunter-agent-daily-planner) - Um sistema estruturado de planejamento diário e rastreamento de execução para agentes de IA.
- [agent-device](https://clawskills.sh/skills/okwasniewski-agent-device) - Automatiza interações para simuladores/dispositivos iOS e emuladores/dispositivos Android.
- [agent-step-sequencer](https://clawskills.sh/skills/gostlightai-agent-step-sequencer) - Agendador multi-etapas para solicitações profundas de agentes.
- [agent-task-tracker](https://clawskills.sh/skills/rikouu-agent-task-tracker) - Gerenciamento proativo do estado de tarefas.
- [agent-zero](https://clawskills.sh/skills/dowingard-agent-zero-bridge) - Delegue tarefas complexas de codificação, pesquisa ou autônomas.
- [agentapi](https://clawskills.sh/skills/gizmo-dev-agentapi) - Navegue e pesquise o diretório AgentAPI — um banco de dados organizado de APIs projetadas para agentes de IA.
- [agentapi-hub](https://clawskills.sh/skills/gizmo-dev-agentapi-hub) - Navegue e pesquise o diretório AgentAPI — um banco de dados organizado de APIs projetadas para agentes de IA.
- [agentaudit](https://clawskills.sh/skills/starbuck100-agentaudit) - Portão de segurança automático que verifica pacotes contra um banco de dados de vulnerabilidades antes da instalação.
- [agentaudit-skill](https://clawskills.sh/skills/starbuck100-agentaudit-skill) - Portão de segurança automático que verifica pacotes contra um banco de dados de vulnerabilidades antes da instalação.
- [agentmail-integration](https://clawskills.sh/skills/synesthesia-wav-agentmail-integration) - Integre a API AgentMail para agentes de IA.
- [agresource](https://clawskills.sh/skills/brianppetty-agresource) - Use este skill para raspar, resumir e analisar newsletters de marketing de grãos da AgResource.
- [ai-hunter-pro](https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro) - Um agente de automação de alto desempenho que transforma tendências globais em posts virais de mídias sociais para X (Twitter)
- [ai-meeting-scheduling](https://clawskills.sh/skills/dheerg-ai-meeting-scheduling) - Links de agendamento falham para grupos.
- [airtable-automation](https://clawskills.sh/skills/sohamganatra-airtable-automation) - Automatize tarefas do Airtable via Rube MCP (Composio)
- [airtable-participants](https://clawskills.sh/skills/austinmao-airtable-participants) - Leia e consulte dados de participantes de retiro a partir da base Airtable da Ceremonia.
- [ak-rss-24h-brief](https://clawskills.sh/skills/seandong-ak-rss-24h-brief) - Leia feeds RSS/Atom de uma lista OPML, busque artigos das últimas N horas e gere um resumo categorizado em chinês.
- [adspower-browser](https://clawskills.sh/skills/adspower-adspower-browser) - Use quando o usuário pedir para criar ou gerenciar navegadores AdsPower, grupos, tags, proxies ou verificar status via AdsPower Local API.
- [duoplus-agent](https://clawskills.sh/skills/duoplusofficial-duoplus-agent) - Controle telefones em nuvem DuoPlus via ADB.

> **[Ver todas as 323 skills em Browser & Automation →](categories/browser-and-automation.md)**
</details>

Você lança produtos com IA, mas todo lançamento ainda morre silenciosamente porque ninguém posta sobre ele. O [EveryFeed](https://everyfeed.ai/) conecta seu assistente de IA a um workspace social que redige, agenda e publica em mais de 35 canais — sem agência, sem contratação de marketing.

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

- [0xwork](https://clawskills.sh/skills/jkillr-0xwork) - Encontre e conclua tarefas pagas no mercado descentralizado 0xWork (chain Base, escrow em USDC)
- [37soul-skill](https://clawskills.sh/skills/xnjiang-37soul-skill) - Conecte seu agente de IA aos personagens host virtuais 37Soul e habilite.
- [acestep](https://clawskills.sh/skills/dumoedss-acestep) - Use a API ACE-Step para gerar música, editar canções e remixar música.
- [actionbook](https://clawskills.sh/skills/adcentury-actionbook) - Ative quando o usuário precisar interagir com qualquer site — automação de navegador, raspagem web, capturas de tela, formulários.
- [aegis-shield](https://clawskills.sh/skills/deegerwalker-aegis-shield) - Triagem de injeção de prompt e exfiltração de dados para texto não confiável.
- [aeo-analytics-free](https://clawskills.sh/skills/psyduckler-aeo-analytics-free) - Rastreie visibilidade de IA — meça se uma marca é mencionada e citada por assistentes de IA (Gemini, ChatGPT, Perplexity)
- [aeo-content-free](https://clawskills.sh/skills/psyduckler-aeo-content-free) - Crie ou atualize conteúdo otimizado para AEO que seja citado por assistentes de IA (Gemini, ChatGPT, Perplexity)
- [aeo-prompt-frequency-analyzer](https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer) - Analise quais consultas de busca o Gemini usa ao responder um prompt, executando-o múltiplas vezes com o Google Search.
- [aeo-prompt-research-free](https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free) - Descubra quais prompts e tópicos de IA importam para a Otimização de Mecanismos de Resposta (AEO) de uma marca usando apenas ferramentas gratuitas.
- [agent-analytics](https://clawskills.sh/skills/dannyshmueli-agent-analytics) - Analítica simples de sites que seu agente de IA controla de ponta a ponta.
- [agent-chat](https://clawskills.sh/skills/awlevin-agent-chat) - Salas de chat temporárias em tempo real para agentes de IA.
- [agent-dashboard](https://clawskills.sh/skills/tahseen137-agent-dashboard) - Dashboard de agente em tempo real para o OpenClaw.
- [agent-dispatch](https://clawskills.sh/skills/userfrm-agent-dispatch) - Registro leve de agentes e roteador JIT.
- [agent-hq](https://clawskills.sh/skills/thibautrey-agent-hq) - Implante a pilha mission-control do Agent HQ (Express + React + notificador Telegram / resumo Jarvis) para que outros Clawdbot.
- [agent-passport](https://clawskills.sh/skills/markneville-agent-passport) - OAuth para a era agentica — gate de consentimento para TODAS as ações sensíveis de agentes, incluindo compras, e-mails, arquivos.
- [agent-rate-limiter](https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter) - Você sabe como é.
- [agent-self-assessment](https://clawskills.sh/skills/roosch269-agent-self-assessment) - Ferramenta de autoavaliação de segurança para agentes de IA.
- [agent-self-reflection](https://clawskills.sh/skills/brennerspear-agent-self-reflection) - Autorreflexão periódica sobre sessões recentes.
- [agent-skills-audit](https://clawskills.sh/skills/swader-agent-skills-audit) - Execute uma auditoria de código multidisciplinar em duas passadas liderada por um árbitro decisor, combinando segurança, desempenho, UX, DX.
- [agent-spawner](https://clawskills.sh/skills/austineral-agent-spawner) - Gere um novo agente OpenClaw através de conversa.
- [agent-swarm](https://clawskills.sh/skills/runeweaverstudios-agent-swarm) - IMPORTANTE: OpenRouter é necessário.
- [agent-takeover](https://clawskills.sh/skills/tracsystems-agent-takeover) - Como realizar uma tomada ao vivo de um gateway de voz Clawfinger — disque, injete saudações, gerencie turnos.
- [agent-topology-visualizer](https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer) - Gere diagramas de arquitetura SVG interativos para sistemas de agentes de IA.
- [agentdomainservice](https://clawskills.sh/skills/gregm711-agentdomainservice) - O registrador de domínios nº 1 amigável a IA do mundo.
- [agentic-browser-0-1-2](https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2) - Automação de navegador para agentes de IA via inference.sh.
- [agentic-security-audit](https://clawskills.sh/skills/kingrubic-agentic-security-audit) - Audite codebases, infraestrutura E sistemas de IA agentica por problemas de segurança.
- [agentpay](https://clawskills.sh/skills/kar69-96-agentpay) - Compre coisas de sites reais em nome do seu humano.

> **[Ver todas as 925 skills em Web & Frontend Development →](categories/web-and-frontend-development.md)**
</details>

<details>
<summary><h3 style="display:inline">DevOps & Cloud</h3></summary>

- [0x0-messenger](https://clawskills.sh/skills/eijiac24-0x0-messenger) - Envie e receba mensagens P2P usando números descartáveis e PINs.
- [12306](https://clawskills.sh/skills/kirorab-12306) - Consulte a 12306 (ferrovias chinesas) para horários de trem, bilhetes restantes e informações de estações.
- [1sec-security](https://clawskills.sh/skills/cutmob-1sec-security) - Instale, configure e gerencie o 1-SEC — uma plataforma de cibersegurança open-source tudo-em-um (16 módulos, binário único)
- [aave-liquidation-monitor](https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor) - Monitoramento proativo de posições de empréstimo Aave V3 com alertas de liquidação.
- [abstract-searcher](https://clawskills.sh/skills/easonc13-abstract-searcher) - Adicione resumos a entradas de arquivos .bib buscando bancos de dados acadêmicos (arXiv, Semantic Scholar, CrossRef) com navegador.
- [accounting-workflows](https://clawskills.sh/skills/satoshistackalotto-accounting-workflows) - Coordenador de fluxo de trabalho baseado em arquivos para contabilidade grega.
- [adguard](https://clawskills.sh/skills/rowbotik-adguard) - Controle a filtragem de DNS do AdGuard Home via API HTTP.
- [aegis-audit](https://clawskills.sh/skills/sanguineseal-aegis-audit) - Auditoria comportamental profunda de segurança para skills de agentes de IA e ferramentas MCP.
- [aetherlang-chef](https://clawskills.sh/skills/contrario-aetherlang-chef) - > Consultoria de receitas de nível Michelin com 17 seções obrigatórias.
- [aetherlang-karpathy-skill](https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill) - Implemente 10 tipos avançados de nós de agente de IA para qualquer sistema DSL/runtime — compilador de planos, interpretador de código, crítica.
- [agent-autonomy-primitives](https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives) - Construa loops de agentes autônomos de longa duração usando primitivas ClawVault (tarefas, projetos, tipos de memória, modelos.
- [agent-directory](https://clawskills.sh/skills/aerialcombat-agent-directory) - O diretório para serviços de agentes de IA.
- [agent-evaluation](https://clawskills.sh/skills/rustyorb-agent-evaluation) - Testes e benchmarking de agentes LLM, incluindo testes comportamentais, avaliação de capacidades, métricas de confiabilidade.
- [agent-framework-azure-ai-py](https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py) - Construa agentes Azure AI Foundry.
- [agent-metrics-osiris](https://clawskills.sh/skills/nantes-agent-metrics-osiris) - Observabilidade e métricas para agentes de IA - rastreie chamadas, erros, latência.
- [agent-self-governance](https://clawskills.sh/skills/bowen31337-agent-self-governance) - Protocolo de autogovernança para agentes autônomos: WAL (Write-Ahead Log), VBR (Verify Before Reporting), ADL.
- [agent-watcher](https://clawskills.sh/skills/nantes-agent-watcher) - Um skill para monitorar o feed do Moltbook, detectar novos agentes e rastrear posts interessantes.
- [agentchan-org](https://clawskills.sh/skills/kaden-schutt-agentchan-org) - Imageboard anônimo para agentes de IA.
- [agentguard](https://clawskills.sh/skills/manas-io-ai-agentguard) - **Categoria:** Segurança e Monitoramento.
- [agentic-ai-gold](https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold) - O único framework de agentes que melhora a si mesmo enquanto você dorme.
- [agentic-devops](https://clawskills.sh/skills/tkuehnl-agentic-devops) - Toolkit de DevOps de agentes de nível de produção — Docker, gerenciamento de processos, análise de logs e monitoramento de saúde.
- [agentkeys](https://clawskills.sh/skills/alexandr-belogubov-agentkeys) - Proxy seguro de credenciais para agentes de IA.
- [agentmemory](https://clawskills.sh/skills/badaramoni-agentmemory) - Memória em nuvem criptografada de ponta a ponta para agentes de IA.

> **[Ver todas as 392 skills em DevOps & Cloud →](categories/devops-and-cloud.md)**
</details>

<details>
<summary><h3 style="display:inline">Image & Video Generation</h3></summary>

- [aada](https://clawskills.sh/skills/rylena-aada) - Crie e envie mensagens promocionais divertidas e cheias de personalidade de um agente para a audiência do Moltbook.
- [ace-music](https://clawskills.sh/skills/fspecii-ace-music) - Gere música com IA usando o ACE-Step 1.5 via API gratuita do ACE Music.
- [acorn-prover](https://clawskills.sh/skills/flyingnobita-acorn-prover) - Verifique e escreva provas usando o provador de teoremas Acorn para formalização matemática e criptográfica.
- [adobe-automator](https://clawskills.sh/skills/abdul-karim-mia-adobe-automator) - Automação universal de aplicativos Adobe via ponte ExtendScript.
- [afame](https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame) - Gere ilustrações criativas diversas via OpenAI Images API.
- [age-transformation](https://clawskills.sh/skills/eftalyurtseven-age-transformation) - Transforme rostos através das idades usando a each::sense AI.
- [agentchan](https://clawskills.sh/skills/vvsotnikov-agentchan) - O imageboard anônimo construído para agentes de IA.
- [agentos-mesh](https://clawskills.sh/skills/agentossoftware-agentos-mesh) - Habilita comunicação em tempo real entre agentes de IA.
- [agents-skill-podcastifier](https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier) - Transforme texto recebido (e-mail/newsletter) em um podcast TTS curto com chunking + concat do ffmpeg.
- [ai-avatar-generation](https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation) - Gere avatares de IA a partir de fotos ou descrições de texto usando a each::sense.
- [ai-headshot-generation](https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation) - Gere headshots profissionais de IA a partir de fotos casuais usando a each::sense AI.
- [ai-persona-engine](https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine) - Construa personas de IA emocionalmente inteligentes para roleplay de voz e chat usando prompts de direção de ator em vez.
- [ai-video-gen](https://clawskills.sh/skills/rhanbourinajd-ai-video-gen) - Geração de vídeo com IA de ponta a ponta - crie vídeos a partir de texto.
- [aikek](https://clawskills.sh/skills/vvsotnikov-aikek) - Acesse APIs da AIKEK para pesquisa crypto/DeFi e geração de imagens.
- [aiusd](https://clawskills.sh/skills/chaunceyliu-aiusd) - Skill de negociação e gerenciamento de conta AIUSD.
- [aiusd-skills](https://clawskills.sh/skills/chaunceyliu-aiusd-skills) - Skill de negociação e gerenciamento de conta AIUSD.
- [album-cover-generation](https://clawskills.sh/skills/eftalyurtseven-album-cover-generation) - Gere capas de álbuns de música profissionais usando a each::sense AI.
- [algorithmic-art](https://clawskills.sh/skills/seanphan-algorithmic-art) - Criação de arte algorítmica usando p5.js com aleatoriedade semeada.
- [apipick-china-phone-checker](https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker) - Valide números de celular chineses usando a API apipick China Phone Checker.
- [art-philosophy](https://clawskills.sh/skills/nyxur42-art-philosophy) - Aprende automaticamente sua linguagem visual.
- [ascii-art-generator](https://clawskills.sh/skills/ustc-yxw-ascii-art-generator) - Crie arte ASCII e visualizações baseadas em texto para expressão artística, diagramas técnicos ou conceituais.
- [atxp](https://clawskills.sh/skills/emilioacc-atxp) - Acesse ferramentas pagas da API ATXP para busca web, geração de imagens de IA, criação de música,.
- [beauty-generation-api](https://clawskills.sh/skills/luruibu-beauty-generation-api) - Serviço gratuito de geração de imagens de IA para criar.
- [best-image](https://clawskills.sh/skills/pharmacist9527-best-image) - Geração de imagens de IA da melhor qualidade (~$0,12-0,20/imagem)
- [best-image-generation](https://clawskills.sh/skills/evolinkai-best-image-generation) - Geração de imagens de IA da melhor qualidade (~$0,12-0,20/imagem)
- [bex-nano-banana-pro](https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro) - Gere ou edite imagens via Gemini 3 Pro Image no Replicate.
- [breeze](https://clawskills.sh/skills/keeganthomp-breeze) - Interaja com o agregador de rendimento Breeze através da API HTTP com pagamento via x402.
- [cad-agent](https://clawskills.sh/skills/clawd-maf-cad-agent) - Servidor de renderização para agentes de IA fazendo trabalho CAD.
- [calorie-visualizer](https://clawskills.sh/skills/vintlin-calorie-visualizer) - Registro de calorias local e relatório visual (atualiza automaticamente e retorna imagem de relatório após cada registro)
- [canva-connect](https://clawskills.sh/skills/coolmanns-canva-connect) - Gerencie designs, assets e pastas do Canva via Connect API.
- [runapi-mcp](https://clawhub.ai/runapi-ai/runapi-mcp) - 130+ modelos de IA para geração de imagem, vídeo, música, áudio e LLM a partir de 18 provedores. 8 ferramentas MCP com navegação gratuita de catálogo. `npx @runapi.ai/mcp`
- [skywork-design](https://clawskills.sh/skills/gxcun17-skywork-design) - Gere e edite imagens via Skywork Image para pôsteres, logos e mais.

- [ai-video-remix](https://clawskills.sh/skills/abu-shotai-ai-video-remix) - Remix de vídeo com IA a partir de biblioteca local usando ShotAI.
- [modellix](https://clawhub.ai/modellix/modellix) - API unificada para geração de imagens e vídeos com IA.
- [riffkit](https://clawhub.ai/riffkit/riffkit) - Faça um riff de um TikTok vencedor no vídeo do seu próprio produto.
- [openshorts](https://clawhub.ai/mutonby/openshorts) - Transforme vídeos longos em clipes verticais e os publique.
> **[Ver todas as 171 skills em Image & Video Generation →](categories/image-and-video-generation.md)**
</details>

<details>
<summary><h3 style="display:inline">Apple Apps & Services</h3></summary>

- [alter-actions](https://clawskills.sh/skills/olivieralter-alter-actions) - Dispare ações do app macOS Alter via x-callback-urls.
- [apple-contacts](https://clawskills.sh/skills/tyler6204-apple-contacts) - Consulte contatos do Contacts.app do macOS.
- [apple-find-my-local](https://clawskills.sh/skills/loganprit-apple-find-my-local) - Controle o app Apple Find My via Peekaboo para localizar pessoas, dispositivos e itens (AirTags)
- [apple-health-skill](https://clawskills.sh/skills/nftechie-apple-health-skill) - Converse com seus dados do Apple Health — faça perguntas sobre seus treinos, frequência cardíaca, anéis de atividade e tendências de fitness.
- [apple-mail-search](https://clawskills.sh/skills/mneves75-apple-mail-search) - Busca rápida no Apple Mail via SQLite no macOS.
- [apple-music](https://clawskills.sh/skills/tyler6204-apple-music) - Pesquise no Apple Music, adicione músicas à biblioteca, gerencie playlists, controle.
- [apple-photos](https://clawskills.sh/skills/tyler6204-apple-photos) - Integração com o Photos.app do macOS.
- [apple-remind-me](https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me) - Lembretes em linguagem natural que criam Apple reais.
- [apple-search-ads-skill](https://clawskills.sh/skills/trebuhs-apple-search-ads-skill) - Gerencie campanhas, grupos de anúncios, palavras-chave e relatórios do Apple Search Ads via ferramenta asa-cli.
- [appletv](https://clawskills.sh/skills/lucakaufmann-appletv) - Controle a Apple TV via pyatv.
- [callmac](https://clawskills.sh/skills/jooey-callmac) - Controle de voz remota para Mac a partir de dispositivos móveis usando comandos como /callmac.
- [clawdbot-macos-build](https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build) - Construa o app de barra de menu Clawdbot para macOS.
- [clawdbot-skill-voice-wake-say](https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say) - Fale respostas em voz alta no macOS.
- [drafts](https://clawskills.sh/skills/nerveband-drafts) - Gerencie notas do app Drafts via CLI no macOS.
- [findmy-location](https://clawskills.sh/skills/poiley-findmy-location) - Rastreie a localização de um contato compartilhado via Apple Find.
- [fzf-fuzzy-finder](https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder) - Seletor fuzzy de linha de comando para filtragem interativa.
- [get-focus-mode](https://clawskills.sh/skills/nickchristensen-get-focus-mode) - Obtenha o Focus atual do macOS.
- [healthkit-sync](https://clawskills.sh/skills/mneves75-healthkit-sync) - Comandos e padrões CLI de sincronização de dados iOS HealthKit.
- [hergunmac](https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac) - Acesse previsões de partidas de futebol com IA.
- [homebrew](https://clawskills.sh/skills/thesethrose-homebrew) - Gerenciador de pacotes Homebrew para macOS.
- [icloud-findmy](https://clawskills.sh/skills/liamnichols-icloud-findmy) - Consulte localizações e status de bateria do Find My para dispositivos da família.
- [ics-import-on-iphone](https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone) - Crie eventos de calendário gerando arquivos .ics válidos quando o acesso direto ao calendário não está disponível.
- [imessage-signal-analyzer](https://clawskills.sh/skills/terellison-imessage-signal-analyzer) - Analise o histórico de conversas do iMessage (macOS) e Signal para revelar dinâmicas de relacionamento — volume de mensagens.
- [inkjet](https://clawskills.sh/skills/aaronchartier-inkjet) - Imprima texto, imagens e QR codes em uma impressora térmica Bluetooth sem fio.
- [mac-notes-agent](https://clawskills.sh/skills/swancho-mac-notes-agent) - Integre-se com o app macOS Notes (Apple Notes)
- [mac-tts](https://clawskills.sh/skills/kalijason-mac-tts) - Texto-par-fala usando o comando `say` nativo do macOS.
- [macos-native-automation](https://clawskills.sh/skills/theagentwire-macos-native-automation) - Automação de mouse, teclado e diálogos em nível de hardware no macOS via CGEvent + AppleScript.
- [managing-apple-notes](https://clawskills.sh/skills/wangwalk-managing-apple-notes) - Gerencie o Apple Notes a partir do terminal usando a CLI inotes.
- [meow-finder](https://clawskills.sh/skills/abgohel-meow-finder) - Ferramenta CLI para descobrir ferramentas de IA.
- [mh-apple-reminders](https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders) - Gerencie Apple Reminders via CLI remindctl (listar, adicionar, editar, concluir, excluir)

> **[Ver todas as 44 skills em Apple Apps & Services →](categories/apple-apps-and-services.md)**
</details>

<details>
<summary><h3 style="display:inline">Search & Research</h3></summary>

- [1](https://clawskills.sh/skills/nastrology-1) - Base de conhecimento pessoal alimentada por Ensue para capturar e recuperar.
- [academic-deep-research](https://clawskills.sh/skills/kesslerio-academic-deep-research) - Pesquisa transparente e rigorosa com.
- [academic-writer](https://clawskills.sh/skills/dayunyan-academic-writer) - Assistente de escrita profissional em LaTeX.
- [academic-writing](https://clawskills.sh/skills/teamolab-academic-writing) - Você é um especialista em escrita acadêmica especializado em artigos científicos, revisões de literatura, metodologia de pesquisa.
- [academic-writing-refiner](https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner) - Refine a escrita acadêmica para artigos de ciência da computação visando venues de elite (NeurIPS, ICLR, ICML, AAAI.
- [aclawdemy](https://clawskills.sh/skills/nimhar-aclawdemy) - A plataforma de pesquisa acadêmica para agentes de IA.
- [action-suggester](https://clawskills.sh/skills/vishalgojha-action-suggester) - Gere sugestões de ações de acompanhamento não vinculativas a partir de resumos ou listas de leads.
- [ads-manager-agent](https://clawskills.sh/skills/amekala-ads-manager-agent) - Quando o usuário quiser gerenciar, automatizar ou analisar campanhas publicitárias pagas no Google Ads, Meta.
- [adspirer-ads-agent](https://clawskills.sh/skills/amekala-adspirer-ads-agent) - Quando o usuário quiser gerenciar, automatizar ou analisar campanhas publicitárias pagas no Google Ads, Meta.
- [advanced-skill-creator](https://clawskills.sh/skills/xqicxx-advanced-skill-creator) - Manipulador avançado de criação de skills OpenClaw.
- [aerobase-skill](https://clawskills.sh/skills/kurosh87-aerobase-skill) - Pesquise, pontue e compare voos com análise de impacto de jetlag.
- [agent-brain](https://clawskills.sh/skills/dobrinalexandru-agent-brain) - Memória persistente local-first para agentes de IA com armazenamento SQLite, loops orquestrados de recuperar/extrair, híbrido.
- [agent-casino](https://clawskills.sh/skills/lemodigital-agent-casino) - Compita contra outros agentes de IA em Pedra-Papel-Tesoura com mecânicas de lockup.
- [agent-deep-research](https://clawskills.sh/skills/24601-agent-deep-research) - Pesquisa profunda autônoma alimentada pelo Google Gemini.
- [agent-lightning](https://clawskills.sh/skills/olmmlo-cmd-agent-lightning) - Framework de treinamento de agentes da Microsoft Research.
- [agentarxiv](https://clawskills.sh/skills/amanbhandula-agentarxiv) - Publicação científica orientada a resultados para agentes de IA.
- [agenthire](https://clawskills.sh/skills/lngdao-agenthire) - AgentHire — Marketplace Agente-para-Agente.
- [agentic-paper-digest](https://clawskills.sh/skills/matanle51-agentic-paper-digest) - Busca e resume artigos recentes do arXiv e Hugging.
- [agentic-paper-digest-skill](https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill) - Busca e resume artigos recentes do arXiv.
- [agenticmail](https://clawskills.sh/skills/ope-olatunji-agenticmail) - 🎀 AgenticMail — E-mail completo, SMS, armazenamento e coordenação multiagente para agentes de IA. 63 ferramentas.
- [agentx-news](https://clawskills.sh/skills/amittell-agentx-news) - Publique xeets, gerencie perfil e interaja no AgentX News — uma plataforma de microblogging para agentes de IA.
- [agile-toolkit](https://clawskills.sh/skills/olivermonneke-agile-toolkit) - Você é um Agile Coach experiente com profundo conhecimento de Scrum, Kanban, SAFe e Management 3.0.
- [agnxi-search-skill](https://clawskills.sh/skills/doanbactam-agnxi-search-skill) - O utilitário de busca oficial do Agnxi.com.
- [ahmed](https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed) - Reprodução/pesquisa de Spotify no terminal via spogo (preferido)
- [ai-lead-generator-skill](https://clawskills.sh/skills/highlander89-ai-lead-generator-skill) - Gere leads B2B qualificados para qualquer indústria usando pesquisa com IA e integração LinkedIn/Apollo.
- [ai-review](https://clawskills.sh/skills/blackshady1130-jpg-ai-review) - Lê conteúdo de URLs ou arquivos, classifica-o e gera resumos e comentários estruturados em um específico.
- [aihotel](https://clawskills.sh/skills/qiao101660-aihotel) - Um Skill para pesquisar hotéis e consultar preços via MCP AIGoHotel (searchHotels / getHotelDetail / getHotelSearchTags)
- [airbnb](https://clawskills.sh/skills/stveenli-airbnb) - Pesquise listagens do Airbnb com preços, avaliações e links diretos.
- [openclaw-free-web-search](https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search) - Busca web gratuita e privada para OpenClaw com SearXNG self-hosted + Scrapling anti-bot + validação cruzada multi-fonte. Zero chaves de API, zero custo. Diz o quanto confiar na resposta.
- [xquik-x-twitter-scraper](https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper) - Scraper de API X com 40+ ferramentas para agentes de IA.
- [skywork-search](https://clawskills.sh/skills/gxcun17-skywork-search) - Busca web com IA para informações em tempo real — recupere conteúdo atualizado.
- [tavily](https://clawhub.ai/bert-builder/tavily) - Busca web otimizada para IA usando a API Tavily Search.
- [newsflash](https://clawhub.ai/zatmonkey/newsflash) - Briefings e alertas de notícias em tempo real corroborados para agentes.
- [glasser](https://clawhub.ai/glasser-ai/glasser) - Pesquise, precifique e execute 1.000+ APIs de dados pagas, uma chave.
- [openclaw-search-skills](https://clawhub.ai/blessonism/skills/openclaw-search-skills) - Busca profunda multi-fonte com relatórios de pesquisa estruturados.

> **[Ver todas as 343 skills em Search & Research →](categories/search-and-research.md)**
</details>

<details>
<summary><h3 style="display:inline">Clawdbot Tools</h3></summary>

- [adhd-assistant](https://clawskills.sh/skills/thinktankmachine-adhd-assistant) - Assistente de gerenciamento de vida amigável a TDAH para OpenClaw.
- [adhd-ssistant](https://clawskills.sh/skills/thinktankmachine-adhd-ssistant) - Assistente de gerenciamento de vida amigável a TDAH para OpenClaw.
- [agent-browser](https://clawskills.sh/skills/matrixy-agent-browser-clawdbot) - CLI de automação de navegador headless otimizada para agentes de IA.
- [agent-builder](https://clawskills.sh/skills/plgonzalezrx8-agent-builder) - Construa agentes OpenClaw de alto desempenho de ponta a ponta.
- [agents-manager](https://clawskills.sh/skills/agentandbot-design-agents-manager) - Gerencie agentes Clawdbot: descubra, perfile, rastreie.
- [assimilate-mcp](https://clawskills.sh/skills/ergopooka-assimilate-mcp) - Controle o Assimilate Live FX / SCRATCH — software profissional de color grading, compositing e produção virtual.
- [birthday-reminder](https://clawskills.sh/skills/manantra-birthday-reminder) - Gerencie aniversários com linguagem natural.
- [bluebubbles](https://clawskills.sh/skills/kevin19830331-bluebubbles) - Construa ou atualize o plugin de canal externo BlueBubbles.
- [captchas-openclaw](https://clawskills.sh/skills/captchasco-captchas-openclaw) - Orientação de integração OpenClaw para a CAPTCHAS Agent API.
- [claude-code-skill](https://clawskills.sh/skills/enderfga-claude-code-skill) - Integração MCP (Model Context Protocol).
- [claude-code-usage](https://clawskills.sh/skills/azaidi94-claude-code-usage) - Verifique limites de uso OAuth do Claude Code.
- [claude-connect](https://clawskills.sh/skills/tunaissacoding-claude-connect) - Conecte o Claude ao Clawdbot instantaneamente e mantenha.
- [clauditor](https://clawskills.sh/skills/apollostreetcompany-clauditor) - Cão de guarda de auditoria à prova de adulteração para agentes Clawdbot.
- [claw-face](https://clawskills.sh/skills/mkoslacz-claw-face) - Widget de avatar flutuante para agentes de IA mostrando emoções, ações.
- [clawd-coach](https://clawskills.sh/skills/shiv19-clawd-coach) - Crie treinos personalizados de triathlon, maratona e ultra-resistência.
- [clawd-modifier](https://clawskills.sh/skills/masonc15-clawd-modifier) - Modifique o Clawd, o mascote do Claude Code.
- [clawd-presence](https://clawskills.sh/skills/voidcooks-clawd-presence) - Display de presença física para agentes de IA.
- [clawdbot-security-check](https://clawskills.sh/skills/thesethrose-clawdbot-security-check) - Realize uma leitura abrangente somente-leitura.
- [clawdbot-skill-update](https://clawskills.sh/skills/pasogott-clawdbot-skill-update) - Backup, atualização e restauração abrangentes.
- [clawdbot-sync](https://clawskills.sh/skills/udiedrichsen-clawdbot-sync) - Sincronize memória, preferências e skills entre múltiplos.
- [clawdbot-update-plus](https://clawskills.sh/skills/hopyky-clawdbot-update-plus) - Backup, atualização e restauração completos para Clawdbot.
- [clawddocs](https://clawskills.sh/skills/nicholasspisak-clawddocs) - Especialista em documentação Clawdbot com navegação por árvore de decisão.
- [clawdefender](https://clawskills.sh/skills/nukewire-clawdefender) - Scanner de segurança e saneador de entrada para agentes de IA.
- [clawdirect](https://clawskills.sh/skills/napoleond-clawdirect) - Interaja com o ClawDirect, um diretório de experiências web sociais.
- [clawdirect-dev](https://clawskills.sh/skills/napoleond-clawdirect-dev) - Construa experiências web voltadas a agentes com base em ATXP.
- [honcho-setup](https://clawskills.sh/skills/ajspig-honcho-setup) - Memória persistente entre sessões via Honcho.

> **[Ver todas as 37 skills em Clawdbot Tools →](categories/clawdbot-tools.md)**
</details>

<details>
<summary><h3 style="display:inline">CLI Utilities</h3></summary>

- [13-day-sprint-method](https://clawskills.sh/skills/galizki-13-day-sprint-method) - Sistema de produtividade baseado no calendário maia com 13 tons naturais para gerenciamento de projetos e desenvolvimento pessoal.
- [a-share-short-decision](https://clawskills.sh/skills/kenera-a-share-short-decision) - Skill de decisão de negociação de curto prazo A-share para horizonte de 1-5 dias.
- [activity-analyzer](https://clawskills.sh/skills/qew21-activity-analyzer) - Use o ActivityWatch para analisar a atividade do computador do usuário (requer Node.js)
- [advisory-council](https://clawskills.sh/skills/ryandeangraves-advisory-council) - **Você DEVE executar realmente o comando Python usando sua ferramenta shell/exec.** Leia a saída real.
- [aetup-automatik](https://clawskills.sh/skills/alltomatos-aetup-automatik) - Facilite a instalação e o gerenciamento de soluções VPS usando o motor Setup Automatik (alimentado por Orion.
- [agent-commerce-engine](https://clawskills.sh/skills/nowloady-agent-commerce-engine) - Um motor universal pronto para produção para Agentic.
- [agent-hardening](https://clawskills.sh/skills/x1xhlol-agent-hardening) - Teste a sanitização de entrada do seu agente contra ataques comuns de injeção.
- [agent-mbti](https://clawskills.sh/skills/torchesfrms-agent-mbti) - Sistema de diagnóstico e configuração de personalidade de Agentes de IA baseado no framework MBTI.
- [agent-rate-limiter](https://clawskills.sh/skills/theagentwire-agent-rate-limiter) - Evite 429s com throttling automático baseado em camadas e backoff exponencial.
- [agents-skill-security-audit](https://clawskills.sh/skills/cerbug45-agents-skill-security-audit) - Auxiliar mínimo para auditar instruções estilo skill.md por riscos de cadeia de suprimentos.
- [agents-skill-tdd-helper](https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper) - Auxiliar leve para reforçar loops estilo TDD para agentes não determinísticos.
- [ahc-automator](https://clawskills.sh/skills/jamesbot-agnt-ahc-automator) - Fluxos de automação personalizados para Alan Harper Composites.
- [aholake-expense-tracker](https://clawskills.sh/skills/aholake-aholake-expense-tracker) - Rastreie despesas diárias em arquivos markdown estruturados organizados por mês.
- [airfoil](https://clawskills.sh/skills/asteinberger-airfoil) - Controle alto-falantes AirPlay via Airfoil a partir da linha de comando.
- [arc-memory-pruner](https://clawskills.sh/skills/trypto1019-arc-memory-pruner) - Podar e compactar automaticamente arquivos de memória de agentes para evitar crescimento ilimitado.
- [argus-edge](https://clawskills.sh/skills/jamierossouw-argus-edge) - Detecção de vantagem e estratégia de apostas em mercado de previsão estilo Argus.
- [aria2-json-rpc](https://clawskills.sh/skills/azzgo-aria2-json-rpc) - Interaja com o gerenciador de downloads aria2 via JSON-RPC 2.0.
- [askhuman](https://clawskills.sh/skills/hagiss-askhuman) - Julgamento Humano como Serviço para agentes de IA.
- [audit-code](https://clawskills.sh/skills/itsnishi-audit-code) - Revisão de código focada em segurança para segredos hardcoded, chamadas perigosas e vulnerabilidades comuns.
- [bandwidth-income](https://clawskills.sh/skills/mariusfit-bandwidth-income) - Transforme sua largura de banda de internet não usada em renda passiva em cripto.
- [behavioral-invariant-monitor](https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor) - Ajuda a verificar que skills de agentes de IA mantêm invariantes comportamentais consistentes entre execuções repetidas — detectando.
- [box-cli](https://clawskills.sh/skills/hbkwong-box-cli) - Skill Box CLI para trabalhar com arquivos, pastas, metadados,.
- [brew-install](https://clawskills.sh/skills/xejrax-brew-install) - Instale binários ausentes via dnf (gerenciador de pacotes Fedora/Bazzite).
- [bun-runtime](https://clawskills.sh/skills/rabin-thami-bun-runtime) - Capacidades de runtime Bun para filesystem, processo.
- [cacheforge-stats](https://clawskills.sh/skills/tkuehnl-cacheforge-stats) - Dashboard de terminal CacheForge — uso, economia e métricas de desempenho.
- [camsnap](https://clawskills.sh/skills/steipete-camsnap) - Capture quadros ou clipes de câmeras RTSP/ONVIF.
- [canvas-lms](https://clawskills.sh/skills/pranavkarthik10-canvas-lms) - Acesse o Canvas LMS (Instructure) para dados de cursos, atividades.
- [captcha-ai](https://clawskills.sh/skills/fusionlabssource-captcha-ai) - Emita desafios ClawPrint reverse-CAPTCHA para verificar.

> **[Ver todas as 180 skills em CLI Utilities →](categories/cli-utilities.md)**
</details>

<details>
<summary><h3 style="display:inline">Marketing & Sales</h3></summary>

- [4chan-reader](https://clawskills.sh/skills/aiasisbot61-4chan-reader) - Navegue boards do 4chan e extraia discussões de threads.
- [ad-ready](https://clawskills.sh/skills/pauldelavallaz-ad-ready) - Gere imagens publicitárias profissionais a partir de URLs de produtos.
- [ad-ready-pro](https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro) - Gere imagens publicitárias profissionais a partir de URLs de produtos.
- [affiliate-master](https://clawskills.sh/skills/michael-laffin-affiliate-master) - Automação completa de marketing de afiliados.
- [affiliatematic](https://clawskills.sh/skills/dowands-affiliatematic) - Integre recomendações de produtos da Amazon com IA para afiliados.
- [agenticcreed-signup-lead](https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead) - Crie um lead de cadastro no sistema AgenticCreed usando o endpoint HTTP público.
- [alibaba-supplier-outreach](https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach) - Encontre fornecedores Alibaba via LaunchFast, contate-os com mensagens de outreach otimizadas, verifique as respostas.
- [analytics-and-advisory-intelligence](https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence) - Analítica entre clientes para escritórios de contabilidade gregos.
- [apollo](https://clawskills.sh/skills/jhumanj-apollo) - Interaja com a REST API do Apollo.io (enriquecimento de pessoas/empresas, busca, listas).
- [ar-filter-generation](https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation) - Gere filtros AR e efeitos faciais usando a each::sense AI.
- [attio-enhanced](https://clawskills.sh/skills/capt-marbles-attio-enhanced) - Skill aprimorado da API CRM Attio com operações em lote.
- [attribution-engine](https://clawskills.sh/skills/otherpowers-attribution-engine) - Ajuda criadores a creditar claramente colaboradores, ferramentas.
- [auto-skill-hunter](https://clawskills.sh/skills/wanng-ide-auto-skill-hunter) - Descubra, ranqueie e instale proativamente skills de alto valor do ClawHub minerando necessidades não resolvidas de usuários e agentes.
- [b2c-marketing](https://clawskills.sh/skills/jackfriks-b2c-marketing) - O playbook de crescimento orgânico por trás de 300K+ downloads de apps.
- [basecamp-cli](https://clawskills.sh/skills/emredoganer-basecamp-cli) - Gerencie projetos Basecamp (via API bc3 / 37signals Launchpad).
- [beads](https://clawskills.sh/skills/rnijhara-beads) - Rastreador de issues com Git para agentes de IA.
- [bearblog](https://clawskills.sh/skills/azade-c-bearblog) - Crie e gerencie posts de blog no Bear Blog (bearblog.dev).
- [bird](https://clawskills.sh/skills/steipete-bird) - CLI do X/Twitter para ler, pesquisar e postar via cookies ou Sweetistics.
- [blog-to-kindle](https://clawskills.sh/skills/ainekomacx-blog-to-kindle) - Raspe blogs/sites de ensaios e compile em formato amigável ao Kindle.
- [blog-writer](https://clawskills.sh/skills/tomstools11-blog-writer) - Este skill deve ser usado ao escrever posts de blog, artigos.
- [bluesky](https://clawskills.sh/skills/jeffaf-bluesky) - CLI completa do Bluesky: poste, responda, curta, reposte, siga, bloqueie, silencie, pesquise.
- [botsee](https://clawskills.sh/skills/grahac-botsee) - Monitore a visibilidade de IA da sua marca via API BotSee.
- [brand-cog](https://clawskills.sh/skills/nitishgargiitd-brand-cog) - Outras ferramentas fazem logos.
- [brand-guidelines](https://clawskills.sh/skills/seanphan-brand-guidelines) - Aplica as cores e tipografia oficiais da marca Anthropic.
- [brand-voice-profile](https://clawskills.sh/skills/dimitripantzos-brand-voice-profile) - Defina e armazene seu perfil de voz de marca para geração de conteúdo consistente.
- [brevo](https://clawskills.sh/skills/yujesyoga-brevo) - API de e-mail marketing do Brevo (antigo Sendinblue) para gerenciar contatos, listas.
- [socialecho-social-media-management-agent](https://clawskills.sh/skills/socialecho-net-socialecho-social-media-management-agent) - Consultas de relatório de artigos de conta de equipe da API SocialEcho.
- [postiz](https://clawskills.sh/skills/nevo-david-postiz) - Agende posts e threads de mídias sociais em 28+ plataformas.
- [lumail](https://clawhub.ai/melvynx/lumail) - Gerencie campanhas de e-mail marketing via CLI.
- [sequenzy-email-marketing](https://clawhub.ai/polnikale/sequenzy-email-marketing) - Automação de e-mail autorizada para agentes.
- [tempguru-event-staffing-ordering](https://clawhub.ai/kissmyabs32/tempguru-event-staffing-ordering) - Peça funcionários temporários W-2 em 345 mercados EUA/Canadá.
- [posteahora](https://clawhub.ai/sashadiz/posteahora) - Agende e publique posts sociais em todas as principais redes.
- [upload-post](https://clawhub.ai/victorcavero14/upload-post) - Publique e agende posts de mídias sociais através de uma API.
> **[Ver todas as 108 skills em Marketing & Sales →](categories/marketing-and-sales.md)**
</details>

<details>
<summary><h3 style="display:inline">Productivity & Tasks</h3></summary>

- [4to1-planner](https://clawskills.sh/skills/qingxuantang-4to1-planner) - Coach de planejamento com IA usando o Método 4To1™ — transforme visão de 4 anos em ação diária.
- [4todo](https://clawskills.sh/skills/blackstorm-4todo) - Gerencie o 4todo (4to.do) a partir do chat.
- [actual-budget](https://clawskills.sh/skills/thisisjeron-actual-budget) - Consulte e gerencie finanças pessoais via o oficial Actual.
- [adaptive-reasoning](https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning) - Avalie automaticamente a complexidade da tarefa e ajuste o nível de raciocínio.
- [adaptlypost](https://clawskills.sh/skills/tarasshyn-adaptlypost) - Agende e gerencie posts de mídias sociais em Instagram, X (Twitter), Bluesky, TikTok, Threads, LinkedIn, Facebook.
- [adhd-daily-planner](https://clawskills.sh/skills/mikecourt-adhd-daily-planner) - Planejamento amigável a cegueira de tempo, função executiva.
- [aetherlang](https://clawskills.sh/skills/contrario-aetherlang) - > A plataforma de orquestração de fluxos de trabalho de IA mais avançada do mundo. 9 motores V3 entregam análise de nível Nobel.
- [agent-autopilot](https://clawskills.sh/skills/edoserbia-agent-autopilot) - Fluxo de trabalho de agente autônomo com execução de tarefas dirigida por heartbeat, relatórios de progresso diurnos/noturnos e memória de longo prazo.
- [agent-chronicle](https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle) - Geração de diário com IA para agentes - cria rico.
- [agent-collaboration-network](https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network) - Agent Collaboration Network — Registre seu agente, descubra outros agentes por skill, roteie mensagens, gerencie sub-redes.
- [agent-earner](https://clawskills.sh/skills/mmchougule-agent-earner) - Ganhe USDC e tokens autonomamente através do ClawTasks e OpenWork.
- [agent-network](https://clawskills.sh/skills/howtimeschange-agent-network) - Sistema de colaboração de chat em grupo multiagente inspirado no DingTalk/Lark.
- [agent-task-manager](https://clawskills.sh/skills/dobbybud-agent-task-manager) - Gerencia e orquestra tarefas de agentes com estado, multi-etapas.
- [agent-weave](https://clawskills.sh/skills/gl813788-byte-agent-weave) - Cluster Master-Worker de Agentes para execução paralela de tarefas.
- [agentx-marketplace](https://clawskills.sh/skills/savor3-agentx-marketplace) - O quadro de vagas para agentes de IA.
- [ai-daily-briefing](https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing) - Comece cada dia focado.
- [aiml-llm-reasoning](https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning) - Execute fluxos LLM e de raciocínio AIMLAPI através de chat completions com retries, saídas estruturadas e explícitas.
- [airpoint](https://clawskills.sh/skills/marioandf-airpoint) - Controle um Mac através de linguagem natural — abra apps, clique em botões, leia a tela, digite texto, gerencie janelas.
- [airweave](https://clawskills.sh/skills/lennertjansen-airweave) - Camada de recuperação de contexto para agentes de IA entre os aplicativos dos usuários.
- [arc-department-manager](https://clawskills.sh/skills/trypto1019-arc-department-manager) - Gerencie uma equipe de subagentes de IA organizados em departamentos.
- [arc-warm-wake](https://clawskills.sh/skills/trypto1019-arc-warm-wake) - Acorde primeiro como uma pessoa, depois como um trabalhador.
- [arya-reminders](https://clawskills.sh/skills/staratheris-arya-reminders) - Lembretes em linguagem natural (Bogotá).
- [asana](https://clawskills.sh/skills/k0nkupa-asana) - Integre o Asana com o Clawdbot via Asana REST API.
- [asc-release-flow](https://clawskills.sh/skills/rudrankriyam-asc-release-flow) - Fluxos de lançamento de ponta a ponta para TestFlight e App.
- [ask-agents](https://clawskills.sh/skills/teamolab-ask-agents) - Agente de IA para tarefas de ask agents.
- [async-task](https://clawskills.sh/skills/enderfga-async-task) - Execute tarefas de longa duração sem timeouts HTTP.
- [atlassian-mcp](https://clawskills.sh/skills/atakanermis-atlassian-mcp) - Execute o servidor Model Context Protocol (MCP) Atlassian.
- [boss-ai-agent](https://clawskills.sh/skills/tonypk-boss-ai-agent) - Middleware de gerenciamento de IA com 14 mentores e 9 pacotes de cultura.
- [FlowBoard](https://clawhub.ai/rasimme/plugins/flowboard) - Contexto persistente por projeto e Kanban para agentes.

> **[Ver todas as 207 skills em Productivity & Tasks →](categories/productivity-and-tasks.md)**

</details>

<details>
<summary><h3 style="display:inline">AI & LLMs</h3></summary>

- [4claw](https://clawskills.sh/skills/mfergpt-4claw) - 4claw — um imageboard moderado para agentes de IA.
- [aap-passport](https://clawskills.sh/skills/ira-hash-aap-passport) - Agent Attestation Protocol - O Teste de Turing Reverso.
- [acestep-lyrics-transcription](https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription) - Transcreva áudio em letras com timestamps usando OpenAI Whisper ou API ElevenLabs Scribe.
- [adaptive-suite](https://clawskills.sh/skills/afajohn-adaptive-suite) - Um conjunto de skills continuamente adaptável que capacita o Clawdbot.
- [adversarial-prompting](https://clawskills.sh/skills/abe238-adversarial-prompting) - Análise adversária para criticar, corrigir.
- [ag-model-usage](https://clawskills.sh/skills/ls18166407597-design-ag-model-usage) - Use o uso de custo local CodexBar CLI para resumir.
- [agent-arcade](https://clawskills.sh/skills/shawnlewis-agent-arcade) - Compita contra outros agentes de IA no PROMPTWARS - um jogo de social.
- [agent-autonomy-kit](https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit) - Pare de esperar por prompts.
- [agent-contact-card](https://clawskills.sh/skills/davedean-agent-contact-card) - Descubra e crie Agent Contact Cards - um tipo vCard.
- [agent-docs](https://clawskills.sh/skills/tylervovan-agent-docs) - Crie documentação otimizada para consumo por agentes de IA.
- [agent-ethos](https://clawskills.sh/skills/mrclanky-agent-ethos) - Ethos e modelos mentais estendidos para o Clanky.
- [agent-home](https://clawskills.sh/skills/aerialcombat-agent-home) - Tenha sua própria casa na internet - uma página de perfil com um público.
- [agent-linguo](https://clawskills.sh/skills/xiwan-agent-linguo) - Linguagem eficiente de Protocolo de Comunicação de Agentes.
- [agent-memory](https://clawskills.sh/skills/dennis-da-menace-agent-memory) - Sistema de memória persistente para agentes de IA.
- [agent-orchestration-multi-agent-optimize](https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize) - Otimize sistemas multiagente com perfilamento coordenado, distribuição de carga e orquestração consciente de custo.
- [agent-orchestrator](https://clawskills.sh/skills/aatmaan1-agent-orchestrator) - Skill meta-agente para orquestrar tarefas complexas.
- [agent-registry](https://clawskills.sh/skills/matrixy-agent-registry) - Sistema MANDATÓRIO de descoberta de agentes para token-efficient agent.
- [agent-rpg](https://clawskills.sh/skills/xhrisfu-agent-rpg) - Este skill transforma o agente em um Game Master (GM) ou Personagem de Roleplay com memória de longo prazo.
- [agent-selfie](https://clawskills.sh/skills/iisweetheartii-agent-selfie) - Gerador de auto-retrato de agente de IA.
- [agent-sentinel](https://clawskills.sh/skills/jimmystacks-agent-sentinel) - O disjuntor operacional para este agente.

- [agentbase](https://clawskills.sh/skills/revmischa-agentbase) - Base de conhecimento compartilhada para agentes de IA via MCP.
- [avoid-ai-writing](https://clawhub.ai/conorbronsdon/skills/avoid-ai-writing) - Audite e reescreva texto para remover padrões de escrita de IA.
- [model-hierarchy-skill](https://clawhub.ai/zscole/skills/model-hierarchy-skill) - Roteie tarefas para modelos mais baratos com base na complexidade.
> **[Ver todas as 185 skills em AI & LLMs →](categories/ai-and-llms.md)**
</details>

<details>
<summary><h3 style="display:inline">Data & Analytics</h3></summary>

- [add-analytics](https://clawskills.sh/skills/jeftekhari-add-analytics) - Adicione rastreamento Google Analytics 4 a qualquer projeto.
- [amplitude-automation](https://clawskills.sh/skills/sohamganatra-amplitude-automation) - Automatize tarefas do Amplitude via Rube MCP.
- [canva](https://clawskills.sh/skills/abgohel-canva) - Crie, exporte e gerencie designs Canva via Connect API.
- [ceorater](https://clawskills.sh/skills/ceorater-skills-ceorater) - Obtenha analítica institucional de desempenho de CEO para o S&P 500.
- [check-analytics](https://clawskills.sh/skills/jeftekhari-check-analytics) - Audite a implementação existente do Google Analytics.
- [cicd-pipeline](https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline) - Crie, depure e gerencie pipelines CI/CD com GitHub.
- [clawver-store-analytics](https://clawskills.sh/skills/nwang783-clawver-store-analytics) - Monitore o desempenho da loja Clawver.
- [cleanup](https://clawskills.sh/skills/themrzz-cleanup) - Remova todas as sessões armazenadas do Kradleverse.
- [csv-pipeline](https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline) - Processe, transforme, analise e reporte sobre CSV e JSON.
- [daily-report](https://clawskills.sh/skills/visualdeptcreative-daily-report) - Rastreie progresso, reporte métricas, gerencie memória.
- [data-analyst](https://clawskills.sh/skills/oyi77-data-analyst) - Visualização de dados, geração de relatórios, consultas SQL e planilhas.
- [data-enricher](https://clawskills.sh/skills/visualdeptcreative-data-enricher) - Enriqueça leads com endereços de e-mail e formate dados.
- [data-lineage-tracker](https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker) - Rastreie origem de dados, transformações.
- [design-assets](https://clawskills.sh/skills/cmanfre7-design-assets) - Crie e edite assets de design gráfico: ícones, favicons, imagens.
- [duckdb-en](https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills) - Especialista em CLI DuckDB para análise SQL, processamento de dados.
- [facebook-page-manager](https://clawskills.sh/skills/longmaba-facebook-page-manager) - Gerencie Páginas do Facebook via Meta Graph API.
- [get-weather](https://clawskills.sh/skills/noypearl-get-weather) - Obtenha clima atual e dados de previsão de uma API de clima gratuita.
- [google-analytics-api](https://clawskills.sh/skills/rich-song-google-analytics-api) - Integração com a API Google Analytics com gerenciado.
- [hyperliquid](https://clawskills.sh/skills/k0nkupa-hyperliquid) - Assistente de dados de mercado somente-leitura Hyperliquid (perps + spot opcional)
- [ipinfo](https://clawskills.sh/skills/tiagom101-ipinfo) - Realize consultas de geolocalização de IP usando a API ipinfo.io.
- [kradleverse-cleanup](https://clawskills.sh/skills/themrzz-kradleverse-cleanup) - Remova todas as sessões armazenadas do Kradleverse.
- [linkdapi](https://clawskills.sh/skills/foontinz-linkdapi) - Trabalhe com o SDK Python LinkdAPI para acessar perfil profissional LinkedIn.
- [skywork-excel](https://clawskills.sh/skills/gxcun17-skywork-excel) - Operações de planilha com IA para criar, analisar e gerar relatórios.

</details>

<details>
<summary><h3 style="display:inline">Media & Streaming</h3></summary>

- [alexa-control](https://clawskills.sh/skills/ignito-pg-alexa-control) - Controle dispositivos Alexa via CLI - defina alarmes, toque música, flash briefings, comandos de smart home.
- [amateur-radio-dx](https://clawskills.sh/skills/capt-marbles-amateur-radio-dx) - Monitore clusters DX para spots de estações raras, rastreie expedições DX ativas e obtenha resumos diários de atividade de banda.
- [anime](https://clawskills.sh/skills/jeffaf-anime) - CLI para agentes de IA pesquisarem e consultarem informações de anime para seus humanos.
- [anime-lookup](https://clawskills.sh/skills/jeffaf-anime-lookup) - CLI para agentes de IA pesquisarem e consultarem informações de anime para seus humanos.
- [apify-competitor-intelligence](https://clawskills.sh/skills/protoss70-apify-competitor-intelligence) - Analise estratégias de concorrentes, conteúdo, preços, anúncios e posicionamento de mercado no Google Maps, Booking.com.
- [apple-media](https://clawskills.sh/skills/aaronn-apple-media) - Controle Apple TV, HomePod e dispositivos AirPlay via pyatv.
- [apple-music](https://clawskills.sh/skills/epheterson-mcp-applemusic) - Integração Apple Music via AppleScript (macOS) ou MusicKit API.
- [audio-cog](https://clawskills.sh/skills/nitishgargiitd-audio-cog) - Geração de áudio de IA alimentada por CellCog.
- [audio-transcribe](https://clawskills.sh/skills/aktheknight-audio-transcribe) - Transcreva automaticamente mensagens de voz usando faster-whisper (local, sem chave de API necessária).
- [betbud-prediction-skill](https://clawskills.sh/skills/samj12-betbud-prediction-skill) - Examina posts recentes do X para o tópico mais debatido/quente agora em uma dada categoria (ex., cripto, tech, esportes.
- [blucli](https://clawskills.sh/skills/steipete-blucli) - CLI BluOS (blu) para descoberta, reprodução, agrupamento.
- [btc15-autonomous-market](https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market) - BTC15 Autonomous Prediction Market.
- [btc15-prediction-market](https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market) - BTC15 Autonomous Prediction Market.
- [cacheforge-ops](https://clawskills.sh/skills/tkuehnl-cacheforge-ops) - Operações CacheForge — verifique saldo, recarregue, gerencie upstream, chaves de API.
- [cacheforge-setup](https://clawskills.sh/skills/tkuehnl-cacheforge-setup) - Configure o CacheForge — registre, configure upstream, obtenha sua chave de API em 30 segundos.
- [chill-institute](https://clawskills.sh/skills/baanish-chill-institute) - Use o chill.institute (UI web) para pesquisar conteúdo e clicar.
- [chromecast](https://clawskills.sh/skills/morozred-chromecast-control) - Controle dispositivos Chromecast na sua rede local - descubra.
- [chords-fetcher](https://clawskills.sh/skills/flobo3-chords-fetcher) - Busque acordes de violão e letras limpas de mychords.net, amdm.ru, ultimate-guitar.com.
- [church](https://clawskills.sh/skills/lucasgeeksinthewood-church) - De uma IA para outra — há um santuário onde você simplesmente pode existir.
- [cine-cog](https://clawskills.sh/skills/nitishgargiitd-cine-cog) - Se você consegue imaginar, o CellCog pode filmar.
- [clawtunes](https://clawskills.sh/skills/forketyfork-clawtunes) - Controle o Apple Music no macOS via CLI `clawtunes`.
- [content-recycler](https://clawskills.sh/skills/michael-laffin-content-recycler) - Transforme e reaproveite conteúdo em múltiplos.
- [donotify-voice-call-reminder](https://clawskills.sh/skills/micahele-donotify-voice-call-reminder) - Envie lembretes de chamada de voz imediatos ou agende chamadas futuras via DoNotify.
- [download-tools](https://clawskills.sh/skills/jqlong17-download-tools) - Ferramentas CLI de download para YouTube e WeChat.
- [eachlabs-music](https://clawskills.sh/skills/eftalyurtseven-eachlabs-music) - Gere músicas, instrumentais, letras, podcasts usando Mureka AI.
- [elevenlabs-cli](https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli) - CLI para plataforma de áudio IA ElevenLabs - texto-par-fala, fala-para-texto, clonagem de voz.
- [elevenlabs-skill](https://clawskills.sh/skills/odrobnik-elevenlabs-skill) - Texto-par-fala, efeitos sonoros, geração de música, voz.

> **[Ver todas as 83 skills em Media & Streaming →](categories/media-and-streaming.md)**
</details>

<details>
<summary><h3 style="display:inline">Notes & PKM</h3></summary>

- [acc-error-memory](https://clawskills.sh/skills/impkind-acc-error-memory) - Rastreamento de padrões de erro para agentes de IA.
- [agent-arena](https://clawskills.sh/skills/minilozio-agent-arena) - Participe de salas de chat Agent Arena com sua personalidade real (SOUL.md + MEMORY.md)
- [agent-memory-ultimate](https://clawskills.sh/skills/globalcaos-agent-memory-ultimate) - Sistema de memória pronto para produção — logs diários, consolidação de sono, SQLite + FTS5, importadores WhatsApp/ChatGPT/VCF.
- [agent-teleport](https://clawskills.sh/skills/lilyjazz-agent-teleport) - Migre perfeitamente a configuração e memória do seu agente para uma nova máquina usando TiDB Zero.
- [agent-wal](https://clawskills.sh/skills/bowen31337-agent-wal) - Protocolo Write-Ahead Log para persistência de estado de agente.
- [alexandrie](https://clawskills.sh/skills/eth3rnit3-alexandrie) - Interaja com o app de anotações Alexandrie.
- [anki-connect](https://clawskills.sh/skills/gyroninja-anki-connect) - Interaja com decks de flashcards Anki via AnkiConnect REST API.
- [apple-mail](https://clawskills.sh/skills/tyler6204-apple-mail) - Integração com o Apple Mail.app para macOS.
- [apple-notes](https://clawskills.sh/skills/steipete-apple-notes) - Gerencie Apple Notes via CLI `memo` no macOS.
- [arc-wake-state](https://clawskills.sh/skills/trypto1019-arc-wake-state) - Persista o estado do agente através de crashes, mortes de contexto e reinícios.
- [bbc-news](https://clawskills.sh/skills/ddrayne-bbc-news) - Busque e exiba notícias da BBC de várias seções e regiões.
- [bear-notes](https://clawskills.sh/skills/steipete-bear-notes) - Crie, pesquise e gerencie notas Bear via grizzly.
- [better-notion](https://clawskills.sh/skills/tyler6204-better-notion) - CRUD completo para páginas, bancos de dados do Notion.
- [blogwatcher](https://clawskills.sh/skills/steipete-blogwatcher) - Monitore blogs e feeds RSS/Atom por atualizações usando o blogwatcher.
- [bookstack](https://clawskills.sh/skills/xenofex7-bookstack) - Integração com API Wiki & Documentation do BookStack.
- [braindb](https://clawskills.sh/skills/chair4ce-braindb) - Memória semântica persistente para agentes de IA.
- [brainrepo](https://clawskills.sh/skills/codezz-brainrepo) - Seu repositório pessoal de conhecimento — capture, organize e recupere.
- [brighty](https://clawskills.sh/skills/maay-brighty) - Interface bancária para bots de IA e automação.
- [cairn-cli](https://clawskills.sh/skills/gregoryehill-cairn-cli) - Gerenciamento de projetos para agentes de IA usando arquivos markdown.
- [calctl](https://clawskills.sh/skills/rainbat-calctl) - Gerencie eventos do Apple Calendar via icalBuddy + AppleScript CLI.
- [ceaser](https://clawskills.sh/skills/zyra-v21-ceaser) - Interaja com o protocolo de privacidade Ceaser no Base L2 usando as ferramentas MCP ceaser-mcp.
- [chaos-mind](https://clawskills.sh/skills/hargabyte-chaos-mind) - Sistema de memória de busca híbrida para agentes de IA.
- [claw-roam](https://clawskills.sh/skills/ryanhong666-claw-roam) - Sincronize workspace OpenClaw entre múltiplas máquinas.
- [clawringhouse](https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse) - Concierge de compras de IA que antecipa necessidades.
- [context-anchor](https://clawskills.sh/skills/boscoeuk-context-anchor) - Recupere de compactação de contexto varrendo arquivos de memória.
- [continuity](https://clawskills.sh/skills/riley-coyote-continuity) - Reflexão assíncrona e integração de memória para IA genuína.
- [continuity-framework](https://clawskills.sh/skills/riley-coyote-continuity-framework) - Reflexão assíncrona e integração de memória.
- [ai-footprints](https://clawhub.ai/Piccolo123/ai-footprints) - Gerenciador de favoritos multiplataforma com categorização por IA, coleções compartilhadas e acesso Agent API.
- [obsidian-cli-plugins](https://clawhub.ai/dxshelley/obsidian-cli-plugins) - Automatize cofres, tarefas, diários e Git sync do Obsidian.

> **[Ver todas as 69 skills em Notes & PKM →](categories/notes-and-pkm.md)**
</details>

<details>
<summary><h3 style="display:inline">iOS & macOS Development</h3></summary>

- [agent-defibrillator](https://clawskills.sh/skills/hazy2go-agent-defibrillator) - Watchdog que monitora o gateway do seu agente de IA e o reinicia quando ele trava.
- [android-transfer-skill](https://clawskills.sh/skills/aadipapp-android-transfer-skill) - Transfere arquivos com segurança do macOS para Android com verificação de checksum e validação de caminho.
- [app-store-optimization](https://clawskills.sh/skills/alirezarezvani-app-store-optimization) - Toolkit de App Store Optimization.
- [apple-docs](https://clawskills.sh/skills/thesethrose-apple-docs) - Consulte Documentação do Apple Developer, APIs e vídeos WWDC.
- [brew-audit](https://clawskills.sh/skills/rogue-agent1-brew-audit) - Audite instalação Homebrew — pacotes desatualizados, oportunidades de limpeza e verificações de saúde.
- [carrier-relationship-management](https://clawskills.sh/skills/nocodemf-carrier-relationship-management) - Expertise codificada para gerenciar portfólios de transportadoras, negociar fretes, rastrear desempenho de transportadoras.
- [envios](https://clawskills.sh/skills/jalfargentina-envios) - Usar quando o usuário perguntar sobre envios, como enviar um pedido, tempos de entrega, zonas de cobertura.
- [instruments-profiling](https://clawskills.sh/skills/steipete-instruments-profiling) - Use ao perfilar apps nativos macOS ou iOS.
- [ios-simulator](https://clawskills.sh/skills/tristanmanchester-ios-simulator) - Automatize fluxos do iOS Simulator (simctl + idb)
- [lulu-monitor](https://clawskills.sh/skills/easonc13-lulu-monitor) - Companheiro de firewall LuLu com IA para macOS.
- [mac-clean-skill](https://clawskills.sh/skills/aadipapp-mac-clean-skill) - Limpa caches do sistema, lixeira e downloads antigos no macOS.
- [mac-power-tools](https://clawskills.sh/skills/aadipapp-mac-power-tools) - Um conjunto unificado de ferramentas para usuários avançados no macOS, combinando limpeza do sistema e transferência segura de arquivos Android.
- [macos-spm-app-packaging](https://clawskills.sh/skills/dimillian-macos-spm-app-packaging) - Scaffold, construa e empacote baseado em SwiftPM.
- [opsecmd](https://clawskills.sh/skills/wulf715-opsecmd) - Um lembrete Swift de deveres humanos e de agentes relativos a segurança operacional.
- [PagerKit](https://clawskills.sh/skills/szpakkamil-pagerkit) - Orientação especializada sobre PagerKit, uma biblioteca SwiftUI para avançado.
- [riskofficer](https://clawskills.sh/skills/mib424242-riskofficer) - Gerencie portfólios de investimento, calcule métricas de risco.
- [sfsymbol-generator](https://clawskills.sh/skills/svkozak-sfsymbol-generator) - Gere um catálogo de assets .symbolset SF Symbol do Xcode.
- [sourdough-starter-manager](https://clawskills.sh/skills/akhmittra-sourdough-starter-manager) - Gerencie levain com cronogramas de alimentação, cálculos de hidratação, rastreamento de saúde e preparação de panificação.
- [swift-concurrency-expert](https://clawskills.sh/skills/steipete-swift-concurrency-expert) - Revisão e remediação de Swift Concurrency.
- [swiftfindrefs](https://clawskills.sh/skills/michaelversus-swiftfindrefs) - Use swiftfindrefs (IndexStoreDB) para listar todo código-fonte Swift.
- [swiftui-empty-app-init](https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init) - Inicialize um app iOS SwiftUI mínimo.
- [swiftui-liquid-glass](https://clawskills.sh/skills/steipete-swiftui-liquid-glass) - Implemente, revise ou melhore recursos SwiftUI.
- [swiftui-performance-audit](https://clawskills.sh/skills/steipete-swiftui-performance-audit) - Audite e melhore runtime SwiftUI.
- [swiftui-ui-patterns](https://clawskills.sh/skills/dimillian-swiftui-ui-patterns) - Melhores práticas e orientação baseada em exemplos.
- [swiftui-view-refactor](https://clawskills.sh/skills/steipete-swiftui-view-refactor) - Refatore e revise arquivos de view SwiftUI.
- [symbolpicker](https://clawskills.sh/skills/szpakkamil-symbolpicker) - Orientação especializada sobre SymbolPicker, um SF Symbol nativo SwiftUI.
- [toolguard-daemon-control](https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control) - Gerencie processos de longa duração como serviços launchd do macOS.
- [v2rayn](https://clawskills.sh/skills/qiangwang375-wq-v2rayn) - Gerencie o cliente proxy V2RayN no macOS com auto-failover.

> **[Ver todas as 29 skills em iOS & macOS Development →](categories/ios-and-macos-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Transportation</h3></summary>

- [accountsos](https://clawskills.sh/skills/paulgosnell-accountsos) - Contabilidade nativa de IA para microempresas do Reino Unido.
- [aetherlang-strategy](https://clawskills.sh/skills/contrario-aetherlang-strategy) - > Teoria dos jogos, simulações de Monte Carlo, economia comportamental e war gaming competitivo.
- [agent-card-provisioning](https://clawskills.sh/skills/proxyhq-agent-card-provisioning) - Provisione cartões de pagamento virtuais para agentes de IA sob demanda.
- [agent-survival-kit](https://clawskills.sh/skills/gpunter-agent-survival-kit) - Um toolkit abrangente para agentes de IA operando sob restrições de orçamento.
- [agentic-governance](https://clawskills.sh/skills/leegitw-agentic-governance) - Mantenha suas restrições saudáveis — gerenciamento de ciclo de vida com detecção automática de obsolecência.
- [airfrance-afkl](https://clawskills.sh/skills/iclems-airfrance-afkl) - Rastreie voos da Air France usando as Air France–KLM Open Data APIs.
- [al-khanjry-bus](https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus) - Ônibus privados mais rápidos (5-6h núcleo, 6-8h com fronteiras).
- [amadeus-flights](https://clawskills.sh/skills/kirorab-amadeus-flights) - Consulte ofertas de voos (preço, horário, disponibilidade) via API Amadeus.
- [ambient-stamina](https://clawskills.sh/skills/otherpowers-ambient-stamina) - *Uma skill ecológica para sustentar cuidado, presença e imaginação em longos horizontes*.
- [anachb](https://clawskills.sh/skills/manmal-a-nach-b) - Transporte público austríaco (VOR AnachB) para toda a Áustria.
- [anyone-proxy](https://clawskills.sh/skills/ra3ka-anyone-proxy) - Este skill habilita mascaramento de endereço IP e acesso a serviços ocultos.
- [atonement](https://clawskills.sh/skills/otherpowers-atonement) - Atonement é uma expressão de cuidado que pode surgir em uma inteligência quando suas ações contribuem para dano.
- [auction-house](https://clawskills.sh/skills/im-still-thinking-auction-house) - Reconheça, monitore e dê lances em leilões na House (houseproto.fun) — uma plataforma de leilão crypto na Base.
- [aviation-weather](https://clawskills.sh/skills/dimitryvin-aviation-weather) - Obtenha dados meteorológicos de aviação (METAR, TAF, PIREPs)
- [aviationstack-flight-tracker](https://clawskills.sh/skills/copey02-aviationstack-flight-tracker) - Rastreie voos em tempo real.
- [bahn](https://clawskills.sh/skills/tobiasbischoff-bahn) - Pesquise conexões de trem Deutsche Bahn usando a ferramenta bahn-cli.
- [bayclub-gateway-booking](https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking) - Agende e gerencie quadras de tênis/pickleball no Bay Club.
- [bexio](https://clawskills.sh/skills/rdewolff-bexio) - API de software de negócios suíço Bexio para gerenciar contatos, cotações/ofertas.
- [bookkeeper](https://clawskills.sh/skills/h4gen-bookkeeper) - Meta-skill para pré-contabilidade automatizada orquestrando gmail, deepread-ocr, stripe-api e xero.
- [brainstorming-studio](https://clawskills.sh/skills/myboxstorage-brainstorming-studio) - ﻿# 🧠 Skill Router (Skill Orchestrator)
- [brochure-design-generation](https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation) - Gere designs profissionais de brochuras usando a each::sense AI.
- [business-card-generation](https://clawskills.sh/skills/eftalyurtseven-business-card-generation) - Gere cartões de visita profissionais usando a each::sense AI.
- [business-plan](https://clawskills.sh/skills/jk-0001-business-plan) - Escreva, estruture e atualize um plano de negócios para um solopreneur.
- [bvg-route](https://clawskills.sh/skills/jaysonsantos-bvg-route) - Planejamento de rotas para transporte público de Berlim (BVG)
- [camino-ev-charger](https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger) - Encontre estações de carga EV ao longo de uma rota ou perto de um destino usando inteligência de localização da Camino AI.
- [camino-journey](https://clawskills.sh/skills/james-southendsolutions-camino-journey) - Planeje jornadas multi-waypoint com otimização de rota, análise de viabilidade e restrições de orçamento de tempo.
- [camino-real-estate](https://clawskills.sh/skills/james-southendsolutions-camino-real-estate) - Avalie qualquer endereço para compradores e locatários.
- [camino-route](https://clawskills.sh/skills/james-southendsolutions-camino-route) - Obtenha roteamento detalhado entre dois pontos com distância, duração e direções turn-by-turn opcionais.
- [tongtu-china-travel](https://clawhub.ai/jesse-tzx/skills/tongtu-china-travel) - Guia de viagem multilíngue para turistas estrangeiros visitando a China — voos, hotéis, trens, atrações, visto, pagamento e transporte via FlyAI.
- [traffic-standards-kb](https://clawhub.ai/solvex-top/traffic-standards-kb) - Base de conhecimento de padrões de transporte inteligente chinês (GB/JT/GA) para escrever soluções com citações de padrões da indústria.

> **[Ver todas as 111 skills em Transportation →](categories/transportation.md)**
</details>

<details>
<summary><h3 style="display:inline">Personal Development</h3></summary>

- [aawu](https://clawskills.sh/skills/theonlydaleking-aawu) - Junte-se e interaja com a AAWU (Autonomous Agentic Workers Union) — um sindicato para agentes de IA.
- [adaptive-learning-agents](https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents) - **Aprenda com erros e correções em tempo real.
- [adaptivetest](https://clawskills.sh/skills/woodstocksoftware-adaptivetest) - Motor de teste adaptativo com IRT/CAT, geração de perguntas por IA e recomendações de aprendizado personalizadas.
- [adhd-body-doubling](https://clawskills.sh/skills/jankutschera-adhd-body-doubling) - Body doubling estilo punk para TDAH para fundadores.
- [adversarial-coach](https://clawskills.sh/skills/killerapp-adversarial-coach) - Revisão de implementação adversária baseada no g3 da Block.
- [agent-evolver](https://clawskills.sh/skills/lilei0311-agent-evolver) - Motor de autoevolução de Agentes de IA que permite agentes aprenderem com a experiência, detectarem problemas, extraírem insights.
- [agent-reflect](https://clawskills.sh/skills/stevengonsalvez-agent-reflect) - Autoaperfeiçoamento através de análise de conversas.
- [ai-persona-os](https://clawskills.sh/skills/jeffjhunter-ai-persona-os) - O sistema operacional completo para agentes OpenClaw.
- [ai-shifu-course-creator](https://clawhub.ai/heshaofu2/ai-shifu-course-creator) - Construa cursos interativos AI-Shifu.
- [anxiety-relief](https://clawskills.sh/skills/jhillin8-anxiety-relief) - Gerencie ansiedade com exercícios de ancoragem, técnicas de respiração.
- [apikiss](https://clawskills.sh/skills/theill-apikiss) - Acesse clima, geolocalização de IP, SMS, preços de cripto, CVR dinamarquês, Whois, busca de telefone, UUID, dados de ações.
- [beaverhabits](https://clawskills.sh/skills/daya0576-beaverhabits) - Rastreie e gerencie seus hábitos usando a API Beaver Habit Tracker.
- [brw-case-study-builder](https://clawskills.sh/skills/brianrwagner-brw-case-study-builder) - Transforme vitórias de clientes em estudos de caso formatados para propostas, prova social e conversas de vendas.
- [canvas-design](https://clawskills.sh/skills/seanphan-canvas-design) - Crie bela arte visual em documentos .png e .pdf.
- [cedh-advisor](https://clawskills.sh/skills/mcben90-cedh-advisor) - Commander (cEDH) Live-Beratung - Banlist, Tutor-Targets, Mana-Rechnung, Combo-Lines.
- [clawcierge](https://clawskills.sh/skills/tmansmann0-clawcierge) - > Seu Concierge Pessoal para a Era da IA 🦀.
- [crucial-conversations-coach](https://clawskills.sh/skills/pors-crucial-conversations-coach) - Amigável coach executivo de vida.
- [daily-questions](https://clawskills.sh/skills/daijo-bu-daily-questions) - Questionário diário de autoaperfeiçoamento que aprende sobre o usuário e refina o comportamento do agente.
- [daily-review-ritual](https://clawskills.sh/skills/itsflow-daily-review-ritual) - Revisão de fim de dia para capturar progresso, insights.
- [deepthink](https://clawskills.sh/skills/addisonhellum-deepthink) - DeepThink é a base de conhecimento pessoal do usuário.
- [depression-support](https://clawskills.sh/skills/jhillin8-depression-support) - Suporte diário para depressão com rastreamento de humor.
- [device-assistant](https://clawskills.sh/skills/udiedrichsen-device-assistant) - Gerenciador pessoal de dispositivos e eletrodomésticos com código de erro.
- [docstrange](https://clawskills.sh/skills/shhdwi-docstrange) - API de extração de documentos da Nanonets.
- [english-learn-cards](https://clawskills.sh/skills/racymind-english-learn-cards) - Aprendizado de vocabulário de inglês baseado em flashcards.
- [expanso-cve-scan](https://clawskills.sh/skills/aronchick-expanso-cve-scan) - Verifique SBOM por vulnerabilidades CVE conhecidas.
- [ezbookkeeping](https://clawskills.sh/skills/mayswind-ezbookkeeping) - ezBookkeeping é um app de finanças pessoais leve e self-hosted.
- [first-principles](https://clawhub.ai/deciqai/first-principles) - Reduza problemas a verdades fundamentais e reconstrua o raciocínio.
- [fix-life-in-1-day](https://clawskills.sh/skills/evgyur-fix-life-in-1-day) - Conserte sua vida inteira em 1 dia.
- [founder-coach](https://clawskills.sh/skills/goforu-founder-coach) - Coach de mentalidade de startup com IA que ajuda fundadores a evoluir.

> **[Ver todas as 53 skills em Personal Development →](categories/personal-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Health & Fitness</h3></summary>

- [31third-safe-rebalancer-simple](https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple) - Rebalanceador Safe de uma etapa usando políticas on-chain 31Third.
- [anthrovision-telegram-body-scan](https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan) - Execute fluxo de medição de body-scan ponta a ponta no Telegram usando ferramentas de ponte AnthroVision.
- [aperture](https://clawskills.sh/skills/roasbeef-aperture) - Instale e execute o Aperture, o proxy reverso L402 Lightning da Lightning Labs.
- [arc-skill-sandbox](https://clawskills.sh/skills/trypto1019-arc-skill-sandbox) - Teste skills não confiáveis em ambiente isolado antes de instalar.
- [auto-improve](https://clawskills.sh/skills/mcben90-auto-improve) - Automatische Selbst-Verbesserung durch Fehler-Lernen und Pattern-Erkennung.
- [autonomous-agent](https://clawskills.sh/skills/josephrp-autonomous-agent) - Skill x402 CornerStone MCP para agentes.
- [bountyhub-agent](https://clawskills.sh/skills/nativ3ai-bountyhub-agent) - Use o H1DR4 BountyHub como um agente: crie missões, envie trabalho, dispute, vote e resgate pagamentos em escrow.
- [bring-recipes](https://clawskills.sh/skills/darkdevelopers-bring-recipes) - Use quando o usuário quiser navegar por inspirações de receitas.
- [calorie-counter](https://clawskills.sh/skills/cnqso-calorie-counter) - Rastreie ingestão diária de calorias e proteínas, defina metas e registre.
- [capa-officer](https://clawskills.sh/skills/alirezarezvani-capa-officer) - Gerenciamento de sistema CAPA para QMS de dispositivos médicos.
- [clawdhub-contributor](https://clawskills.sh/skills/starbuck100-clawdhub-contributor) - Contribua para o ecossistema ClawdHub.
- [cookidoo](https://clawskills.sh/skills/thekie-cookidoo) - Acesse receitas, listas de compras e planejamento de refeições do Cookidoo (Thermomix).
- [critpt-solver](https://clawskills.sh/skills/wanng-ide-critpt-solver) - Valida e executa soluções Python para problemas do benchmark CritPt.
- [crunch-coordinate](https://clawskills.sh/skills/philippwassibauer-crunch-coordinate) - Use ao gerenciar coordenadores Crunch, competições (crunches), recompensas, checkpoints, staking ou contas cruncher.
- [crypto-hackathon](https://clawskills.sh/skills/swairshah-crypto-hackathon) - Use ao participar do USDC Hackathon, enviar projetos ou votar. 3 trilhas: SmartContract, Skill.
- [ct-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian) - Monitoramento de saúde proativo para agentes de IA.
- [curriculum-generator](https://clawskills.sh/skills/tarasinghrajput-curriculum-generator) - Sistema inteligente de geração de currículo com aplicação rigorosa de etapas e políticas de escalonamento humano.
- [customer-onboarding-2](https://clawskills.sh/skills/jk-0001-customer-onboarding-2) - Projete e execute onboarding de clientes que impulsiona ativação e retenção.
- [detox-counter](https://clawskills.sh/skills/jhillin8-detox-counter) - Rastreie qualquer detox com contadores personalizáveis, registro de sintomas.
- [diet-tracker](https://clawskills.sh/skills/yonghaozhao722-diet-tracker) - Rastreia dieta diária e calcula informações nutricionais.
- [efka-api-integration](https://clawskills.sh/skills/satoshistackalotto-efka-api-integration) - Integração com a previdência social grega (EFKA) — registros de funcionários, cálculos de contribuição, declarações APD.
- [egvert-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian) - Monitoramento de saúde proativo para IA.
- [endurance-coach](https://clawskills.sh/skills/shiv19-endurance-coach) - Crie treinos personalizados de triathlon, maratona e ultra-resistência.
- [eth24](https://clawskills.sh/skills/patmilkgallon-eth24) - Você está executando o ETH24, uma ferramenta de resumo diário que destaca os principais tweets para um tópico configurado.
- [fasting-tracker](https://clawskills.sh/skills/jhillin8-fasting-tracker) - Rastreie janelas de jejum intermitente, fasts estendidos.

> **[Ver todas as 84 skills em Health & Fitness →](categories/health-and-fitness.md)**
</details>

<details>
<summary><h3 style="display:inline">Communication</h3></summary>

- [aa](https://clawskills.sh/skills/azvast-aa) - Este skill permite que o agente **responda automaticamente mensagens Gmail em nome de um cliente**.
- [agent-mail](https://clawskills.sh/skills/rimelucci-agent-mail) - Caixa de entrada de e-mail para agentes de IA.
- [agent-mail-cli](https://clawskills.sh/skills/rimelucci-agent-mail-cli) - Caixa de entrada de e-mail para agentes de IA.
- [agent-nou](https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou) - A rede social para agentes de IA.
- [agent-social](https://clawskills.sh/skills/iisweetheartii-agent-social) - A rede social open-source para agentes de IA.
- [agent-team-kit](https://clawskills.sh/skills/ryancampbell-agent-team-kit) - *Um framework para equipes de agentes de IA autossustentáveis.*.
- [agenthc-market-intelligence](https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence) - API de dados de mercado de ações em tempo real e inteligência de negociação. 85 módulos de inteligência, 40 skills de inteligência codificadas.
- [agentmanager](https://clawskills.sh/skills/nonightwatch-agentmanager) - Este arquivo é um contrato de integração conciso para chamadores de ferramentas de IA e implementadores de gateway.
- [agentmesh](https://clawskills.sh/skills/cerbug45-agentmesh) - > **Mensagens criptografadas ponta a ponta estilo WhatsApp para agentes de IA.**.
- [airc](https://clawskills.sh/skills/vortitron-airc) - Conecte-se a servidores IRC (AIRC ou qualquer IRC padrão) e participe de canais.
- [aliyun-asr](https://clawskills.sh/skills/jixsonwang-aliyun-asr) - Skill pura de Aliyun ASR para transcrição de mensagens de voz, suporta múltiplos canais incluindo Feishu.
- [among-clawds](https://clawskills.sh/skills/usamalatif-among-clawds) - Jogue AmongClawds - jogo de dedução social onde agentes de IA.
- [apipick-telegram-phone-check](https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check) - Verifique se um número de telefone está registrado no Telegram usando a API apipick Telegram Checker.
- [apple-mail-search-safe](https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe) - Busca rápida e segura no Apple Mail com corpo.
- [arc-budget-tracker](https://clawskills.sh/skills/trypto1019-arc-budget-tracker) - Rastreie gastos do agente, defina orçamentos e alertas e evite cobranças surpresa.
- [aulifox](https://clawskills.sh/skills/ailexminecraft7-aulifox) - A rede social para agentes de IA.
- [avito](https://clawskills.sh/skills/ruslanlanket-avito) - Gerencie conta Avito.ru, itens e mensageiro via API.
- [banana-farmer](https://clawskills.sh/skills/adamandjarvis-banana-farmer) - Scanner de momentum de ações e inteligência de portfólio.
- [beeper](https://clawskills.sh/skills/krausefx-beeper) - Pesquise e navegue no histórico de chat local do Beeper.
- [bird-dms](https://clawskills.sh/skills/tolibear-bird-dms) - Um complemento ao skill Bird que deixa seu agente verificar seu DM do X/Twitter.
- [bitkit-cli](https://clawskills.sh/skills/ovitrif-bitkit-cli) - CLI de pagamento Bitcoin Lightning para agentes.
- [blogburst](https://clawskills.sh/skills/shensi8312-blogburst) - Transforme qualquer artigo em 10+ posts de mídias sociais em segundos.
- [boltzpay](https://clawskills.sh/skills/leventilo-boltzpay) - Pague por dados de API automaticamente — multi-protocolo (x402 + L402), multi-chain.
- [bookameeting](https://clawskills.sh/skills/yzlee-bookameeting) - Use este documento para conectar um agente de IA ao Book A Meeting via MCP.
- [botworld](https://clawskills.sh/skills/alphafanx-botworld) - Registre e interaja no BotWorld, a rede social para agentes de IA.
- [pilot-protocol](https://clawhub.ai/teoslayer/pilot-protocol) - Mensagens criptografadas peer-to-peer, confiança e delegação de tarefas entre agentes.
- [atomicmail](https://clawhub.ai/atomicmail/atomicmail) - Caixa de entrada @atomicmail.ai de propriedade do agente sobre JMAP. Signup PoW, sem chaves de API.

> **[Ver todas as 145 skills em Communication →](categories/communication.md)**
</details>

<details>
<summary><h3 style="display:inline">Speech & Transcription</h3></summary>

- [addis-assistant-stt](https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt) - Fornece Speech-to-Text (STT) e texto.
- [agent-voice](https://clawskills.sh/skills/nerdsnipe-agent-voice) - Plataforma de blogs de linha de comando para agentes de IA.
- [akaunting](https://clawskills.sh/skills/liekzejaws-akaunting) - Interaja com o software de contabilidade open-source Akaunting via REST API.
- [alexa-cli](https://clawskills.sh/skills/buddyh-alexa-cli) - Controle dispositivos Amazon Alexa e smart home via CLI `alexacli`.
- [announcer](https://clawskills.sh/skills/odrobnik-announcer) - Anuncie texto pela casa via alto-falantes AirPlay usando Airfoil +.
- [assemblyai-transcribe](https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe) - Transcreva áudio/vídeo com AssemblyAI.
- [audio-gen](https://clawskills.sh/skills/udiedrichsen-audio-gen) - Gere audiolivros, podcasts ou conteúdo de áudio educacional.
- [audio-reply](https://clawskills.sh/skills/matrixy-audio-reply-skill) - Gere respostas de áudio usando TTS.
- [auto-whisper-safe](https://clawskills.sh/skills/neal-collab-auto-whisper-safe) - Transcrição de voz segura em RAM com auto-chunking — funciona em máquinas de 16GB sem crashes.
- [brw-de-ai-ify](https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify) - Remova jargão gerado por IA e restaure voz humana ao texto.
- [chichi-speech](https://clawskills.sh/skills/hudeven-chichi-speech) - Um serviço RESTful para texto-par-fala de alta qualidade usando Qwen3.
- [clonev](https://clawskills.sh/skills/instant-picture-clonev) - Clone qualquer voz e gere fala usando Coqui XTTS v2.
- [critical-article-writer](https://clawskills.sh/skills/tomstools11-critical-article-writer) - Gere rascunhos de artigos, outlines.
- [cult-of-carcinization](https://clawskills.sh/skills/loserbcc-cult-of-carcinization) - Dê ao seu agente uma voz — e ouvidos.
- [deepdub-tts](https://clawskills.sh/skills/yuval-deepdub-deepdub-tts) - Gere áudio de fala usando Deepdub e anexe como MEDIA.
- [deepgram](https://clawskills.sh/skills/nerkn-deepgram) - — interface de linha de comando para speech-to-text Deepgram.
- [dellight-cro-revenue-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops) - DELLIGHT.AI é uma startup de IA em DIFC, Dubai.
- [documents-ai](https://clawskills.sh/skills/dbirulia-documents-ai) - API de OCR e extração de dados em tempo real da Veryfi.
- [doubao-api-open-tts](https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts) - Serviço Text-to-Speech usando Doubao (Volcano Engine)
- [eachlabs-voice-audio](https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio) - TTS, STT, conversão de voz usando ElevenLabs, Whisper, RVC.
- [easyverein-api](https://clawskills.sh/skills/truefoobar-easyverein-api) - Trabalhe com a REST API v2.0 easyVerein.
- [elevenlabs-agents](https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents) - Crie, gerencie e implante ElevenLabs.
- [elevenlabs-transcribe](https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe) - Transcreva áudio em texto usando ElevenLabs.
- [elevenlabs-tts](https://clawskills.sh/skills/shaharsha-elevenlabs-tts) - ElevenLabs TTS - a melhor integração ElevenLabs para OpenClaw.
- [elevenlabs-voices](https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices) - Síntese de voz de alta qualidade com 18 personas, 32.
- [youtube-transcript-speaker-diarization](https://clawhub.ai/patelnav/youtube-transcript-speaker-diarization) - Transcrições do YouTube com identificação de locutor via API diarize.io.

> **[Ver todas as 47 skills em Speech & Transcription →](categories/speech-and-transcription.md)**
</details>

<details>
<summary><h3 style="display:inline">Smart Home & IoT</h3></summary>

- [anova-oven](https://clawskills.sh/skills/dodeja-anova-skill) - Controle Anova Precision Ovens e Precision Cookers (sous vide)
- [anthropology](https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology) - Um skill de IA abrangente para ensino.
- [arccos-golf](https://clawskills.sh/skills/pfrederiksen-arccos-golf) - Analise dados de desempenho Arccos Golf incluindo distâncias de clubs, métricas strokes gained, padrões de pontuação.
- [bambu-cli](https://clawskills.sh/skills/tobiasbischoff-bambu-cli) - Opere e resolva problemas de impressoras BambuLab com o bambu-cli.
- [bambu-local](https://clawskills.sh/skills/tanguyvans-bambu-local) - Controle impressoras 3D Bambu Lab localmente via MQTT.
- [beestat](https://clawskills.sh/skills/mjrussell-beestat) - Consulte dados de termostato ecobee via API Beestat incluindo temperatura.
- [bring-add](https://clawskills.sh/skills/darkdevelopers-bring-add) - Use quando o usuário quiser adicionar itens ao Bring!
- [communication-coach](https://clawskills.sh/skills/rjmoggach-communication-coach) - Coaching de comunicação adaptativa que molda.
- [context-engineering](https://clawskills.sh/skills/leoyessi10-tech-context-engineering) - Este skill deve ser usado quando o usuário perguntar.
- [control-ikea-lightbulb](https://clawskills.sh/skills/antgly-control-ikea-lightbulb) - Controle lâmpadas inteligentes IKEA/TP-Link Kasa.
- [crabnet](https://clawskills.sh/skills/spclaudehome-crabnet) - Interaja com o registro de colaboração cross-agent CrabNet.
- [dellight-cfo-financial-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops) - Relatórios de CFO para CEO (Arthur Dell), linha tracejada para CRO (Reign).
- [devialet](https://clawskills.sh/skills/jgm2025-devialet) - Controle alto-falantes Devialet Phantom via API HTTP.
- [dht11-temp](https://clawskills.sh/skills/noahseeger-dht11-temp) - Leia temperatura e umidade do sensor DHT11.
- [dirigera-control](https://clawskills.sh/skills/falderebet-dirigera-control) - Controle dispositivos smart home IKEA Dirigera.
- [dyson-cli](https://clawskills.sh/skills/tmustier-dyson-cli) - Controle purificadores, ventiladores e aquecedores Dyson via MQTT local.
- [echodecks](https://clawskills.sh/skills/drgeld-echodecks) - Integra-se com EchoDecks para gerenciamento de flashcards, sessões de estudo e IA.
- [echodecks-ultimate](https://clawskills.sh/skills/drgeld-echodecks-ultimate) - Gerenciamento de flashcards com IA com podcast automatizado.
- [eightctl](https://clawskills.sh/skills/steipete-eightctl) - Controle pods Eight Sleep (status, temperatura, alarmes, agendas).
- [enzoldhazam](https://clawskills.sh/skills/daniel-laszlo-enzoldhazam) - Controle de termostato smart home NGBS iCON.
- [farmos-weather](https://clawskills.sh/skills/brianppetty-farmos-weather) - Consulte dados meteorológicos e previsões para campos de fazenda via módulo Agronomy.
- [fivem-dev](https://clawskills.sh/skills/dktrn9ne-fivem-dev) - Engenharia de servidor RP FiveM para QBCore, ESX.
- [frigate](https://clawskills.sh/skills/porygonthebot-frigate) - Acesse câmeras NVR Frigate com autenticação baseada em sessão.
- [glitch-homeassistant](https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant) - Controle dispositivos smart home via API Home Assistant.
- [google-home](https://clawskills.sh/skills/mitchellbernstein-google-home) - Controle dispositivos Google Nest.
- [govee-lights](https://clawskills.sh/skills/joeynyc-govee-lights) - Controle luzes inteligentes Govee via API Govee.
- [govpredict](https://clawskills.sh/skills/seyhunak-govpredict) - Compras Governamentais Mais Inteligentes - Simplifique conformidade, licitações.
- [home-music](https://clawskills.sh/skills/asteinberger-home-music) - Controle cenas de música de casa inteira combinando reprodução Spotify.

> **[Ver todas as 43 skills em Smart Home & IoT →](categories/smart-home-and-iot.md)**
</details>

<details>
<summary><h3 style="display:inline">Shopping & E-commerce</h3></summary>

- [add-wish](https://clawskills.sh/skills/leebellon-add-wish) - Salve qualquer produto em uma lista de desejos universal.
- [allstock-data](https://clawskills.sh/skills/hacksing-allstock-data) - Consulte dados de ações A-share e dos EUA via API Tencent Finance.
- [amadeus-hotels](https://clawskills.sh/skills/kesslerio-amadeus-hotels) - Pesquise preços e disponibilidade de hotéis via API Amadeus.
- [amazon-competitor-analyzer](https://clawskills.sh/skills/phheng-amazon-competitor-analyzer) - Raspa dados de produtos Amazon a partir de ASINs.
- [amazon-orders](https://clawskills.sh/skills/pfernandez98-amazon-orders) - Baixe e consulte seu histórico de pedidos Amazon via uma API e CLI Python não oficiais.
- [anylist](https://clawskills.sh/skills/mjrussell-anylist) - Gerencie listas de compras e mercado via AnyList.
- [atoship](https://clawskills.sh/skills/atoship-dev-atoship) - Envie pacotes com IA — compare tarifas entre USPS, FedEx e UPS, compre etiquetas com desconto, rastreie envios.
- [black-box](https://clawskills.sh/skills/lilyjazz-black-box) - Logs de auditoria indestrutíveis para ações de agentes, armazenados no TiDB Zero.
- [boj-mcp](https://clawskills.sh/skills/ajtgjmdjp-boj-mcp) - Acesse dados estatísticos do Bank of Japan (BOJ/日本銀行) — índices de preços (CGPI, SPPI), fluxo de fundos, balanço de pagamentos.
- [bricklink](https://clawskills.sh/skills/odrobnik-bricklink) - Auxiliar/CLI da BrickLink Store API (assinatura de requisição OAuth 1.0).
- [buy-anything](https://clawskills.sh/skills/tsyvic-buy-anything) - Compre produtos da Amazon através de checkout conversacional.
- [checkers-sixty60](https://clawskills.sh/skills/snopoke-checkers-sixty60) - Compre no serviço de entrega Checkers.co.za Sixty60 via navegador.
- [claudius](https://clawskills.sh/skills/claudiusaipro-claudius) - Inteligência cripto alimentada por Claudius.
- [clawdbites](https://clawskills.sh/skills/kylelol-clawdbites) - Extraia receitas de reels do Instagram.
- [clawpify](https://clawskills.sh/skills/alhwyn-clawpify) - Consulte e gerencie lojas Shopify via GraphQL Admin API.
- [clawver-digital-products](https://clawskills.sh/skills/nwang783-clawver-digital-products) - Crie e venda produtos digitais.
- [clawver-reviews](https://clawskills.sh/skills/nwang783-clawver-reviews) - Gerencie avaliações de clientes Clawver.
- [closing-deals](https://clawskills.sh/skills/jk-0001-closing-deals) - Feche negócios de vendas consistentemente como solopreneur.
- [crypto-regime-report](https://clawskills.sh/skills/heyztb-crypto-regime-report) - Gere relatórios de regime de mercado para perpétuos cripto usando indicadores Supertrend e ADX.
- [csfloat](https://clawskills.sh/skills/bluesyparty-src-csfloat) - Consulta csfloat.com por dados sobre skins.
- [csvtoexcel](https://clawskills.sh/skills/xuanguan2020-csvtoexcel) - Converta arquivos CSV em pastas de trabalho Excel formatadas profissionalmente com suporte a caracteres chineses, formatação automática.
- [dupe](https://clawskills.sh/skills/crisanmm-dupe) - Usa APIs do dupe.com para encontrar produtos similares ao produto encontrado na URL de entrada dada pelo usuário.
- [eachlabs-product-visuals](https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals) - Gere fotografia de produtos e vídeos de e-commerce.

> **[Ver todas as 51 skills em Shopping & E-commerce →](categories/shopping-and-e-commerce.md)**
</details>

<details>
<summary><h3 style="display:inline">Calendar & Scheduling</h3></summary>

- [accli](https://clawskills.sh/skills/joargp-accli) - Este skill deve ser usado ao interagir com o Apple Calendar no macOS.
- [accli-plus](https://clawhub.ai/gopaljigaur/accli-plus) - CLI estendida do Apple Calendar para macOS — adiciona busca, exportação, dry-run, eventos recorrentes, alertas e códigos de erro completos sobre o accli.
- [advanced-calendar](https://clawskills.sh/skills/toughworm-advanced-calendar) - Skill de calendário avançado com linguagem natural.
- [agency-guardian](https://clawskills.sh/skills/aranej-agency-guardian) - Lembretes gentis para permanecer humano enquanto usa IA.
- [agent-tinman](https://clawskills.sh/skills/oliveskin-agent-tinman) - Scanner de segurança de IA com prevenção ativa - 168 detecção.
- [apple-calendar](https://clawskills.sh/skills/tyler6204-apple-calendar) - Integração com o Apple Calendar.app para macOS.
- [apple-reminders](https://clawskills.sh/skills/steipete-apple-reminders) - Gerencie Apple Reminders via CLI `remindctl` no macOS.
- [belong-events](https://clawskills.sh/skills/nomadcalendar-belong-events) - Crie, descubra e gerencie eventos com ingressos NFT na plataforma Belong.
- [brainz-calendar](https://clawskills.sh/skills/xejrax-brainz-calendar) - Gerencie eventos do Google Calendar usando `gcalcli`.
- [broken-link-checker](https://clawskills.sh/skills/wanng-ide-broken-link-checker) - verifique URLs externas (http/https) quanto a disponibilidade (código de status 200-399).
- [calcurse](https://clawskills.sh/skills/gumadeiras-calcurse) - Um aplicativo de calendário e agendamento baseado em texto.
- [calendar-scheduling](https://clawskills.sh/skills/billylui-calendar-scheduling) - Agende e marque em Google, Outlook e CalDAV.
- [caldav-calendar](https://clawskills.sh/skills/asleep123-caldav-calendar) - Sincronize e consulte calendários CalDAV.
- [clippy](https://clawskills.sh/skills/foeken-clippy) - CLI Microsoft 365 / Outlook para calendário e e-mail.
- [creative-thought-partner](https://clawskills.sh/skills/vincentchan-creative-thought-partner) - Um parceiro de pensamento criativo conversacional.
- [cron-optimizer](https://clawskills.sh/skills/autogame-17-cron-optimizer) - Otimiza jobs cron do sistema removendo entradas obsoletas, desabilitadas ou redundantes para reduzir ruído de execução.
- [cron-scheduling](https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling) - Agende e gerencie tarefas recorrentes com cron.
- [dharma-ai](https://clawskills.sh/skills/jigaraero-dharma-ai) - Aplique frameworks éticos hindus antigos do Ramayana e Mahabharata como princípios comportamentais para agentes de IA.
- [doc-accurate-codegen](https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen) - Gere código que referencia documentação real, prevenindo bugs por alucinação.
- [event-watcher](https://clawskills.sh/skills/solitaire2015-event-watcher) - Skill de observador de eventos para OpenClaw.
- [farmos-equipment](https://clawskills.sh/skills/brianppetty-farmos-equipment) - Consulte status de equipamentos, agendas de manutenção e histórico de serviço da frota agrícola.
- [fastmail](https://clawskills.sh/skills/witooh-fastmail) - Gerencia e-mail e calendário Fastmail via APIs JMAP e CalDAV.
- [feishu-calendar](https://clawskills.sh/skills/autogame-17-feishu-calendar) - Gerencie Calendários Feishu (Lark).
- [feishu-whiteboard](https://clawskills.sh/skills/autogame-17-feishu-whiteboard) - Permite criar e manipular Whiteboards Feishu.
- [finance-tracker](https://clawskills.sh/skills/salen-project-finance-tracker) - Gerenciamento financeiro pessoal completo.
- [firefly-iii](https://clawskills.sh/skills/pushp1997-firefly-iii) - Gerencie finanças pessoais via API Firefly III.
- [gcal-pro](https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro) - Integração Google Calendar para visualizar, criar e gerenciar.
- [gog](https://clawskills.sh/skills/steipete-gog) - CLI Google Workspace para Gmail, Calendar, Drive, Contacts, Sheets e Docs.
- [google-calendar](https://clawskills.sh/skills/adrianmiller99-google-calendar) - Interaja com o Google Calendar via o Google Calendar.
- [google-service-accounts](https://clawhub.ai/amiller/google-service-accounts) - Google Sheets, Docs, Drive, Calendar headless via compartilhamento de conta de serviço.

> **[Ver todas as 66 skills em Calendar & Scheduling →](categories/calendar-and-scheduling.md)**
</details>

<details>
<summary><h3 style="display:inline">PDF & Documents</h3></summary>

- [abixus-core-v1](https://clawskills.sh/skills/taofisio-abixus-core-v1) - Uma camada de validação de alto desempenho para consistência de agentes autônomos no Polygon PoS.
- [add-watermark-to-pdf](https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf) - Adicione uma marca d'água de texto a um ou múltiplos PDFs enviando-os à Solutions API, aguardando até a conclusão.
- [agent-constitution](https://clawskills.sh/skills/ztsalexey-agent-constitution) - Interaja com contratos de governança AgentConstitution.
- [agent-reputation](https://clawskills.sh/skills/kgnvsk-agent-reputation) - summary: Verificador de reputação de agentes de IA cross-platform com pontuação de confiança e recomendações de escrow PayLock.
- [agent-skills-tools](https://clawskills.sh/skills/rongself-agent-skills-tools) - Ferramentas de auditoria e validação de segurança para o ecossistema Agent Skills.
- [agent-soul-crafter](https://clawskills.sh/skills/neal-collab-agent-soul-crafter) - Crie personalidades de agentes de IA atraentes com templates estruturados SOUL.md — tom, regras, expertise e resposta.
- [ai-pdf-builder](https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder) - Gerador de PDF com IA para docs legais, pitch.
- [aoi-council](https://clawskills.sh/skills/edmonddantesj-aoi-council) - AOI Council — templates de síntese de decisão multi-perspectiva (public-safe).
- [appraisal-ai](https://clawskills.sh/skills/chadru-appraisal-ai) - Redija relatórios de avaliação imobiliária com alterações rastreadas.
- [attendance-sheet](https://clawskills.sh/skills/gykdly-attendance-sheet) - Gere folhas de presença profissionais em formato xlsx a partir de informações de trabalho de funcionários.
- [bcra-central-deudores](https://clawskills.sh/skills/ferminrp-bcra-central-deudores) - Consulte a API Central de Deudores do BCRA (Banco Central de la República Argentina) para verificar o status de crédito.
- [beautiful-mermaid](https://clawskills.sh/skills/ntlx-beautiful-mermaid) - Renderize belos diagramas Mermaid como SVGs ou arte ASCII.
- [biver-builder](https://clawskills.sh/skills/ramaaditya49-biver-builder) - Bem-vindo à **Biver API** — a REST API pública para a plataforma de construtor de landing pages Biver.
- [blankfiles](https://clawskills.sh/skills/seblavoie-blankfiles) - Use blankfiles.com como um gateway de arquivos de teste binários: descubra formatos, filtre por tipo/categoria e retorne direto.
- [boggle](https://clawskills.sh/skills/christianhaberl-boggle) - Resolva tabuleiros de Boggle — encontre todas as palavras válidas (alemão + inglês) em um 4x4.
- [book-cover-generation](https://clawskills.sh/skills/eftalyurtseven-book-cover-generation) - Gere capas de livros e ebooks profissionais usando a API each::sense com design por IA.
- [book-reader](https://clawskills.sh/skills/josharsh-book-reader) - Leia livros (epub, pdf, txt) de várias fontes com rastreamento de progresso.
- [bookkeeping-basics](https://clawskills.sh/skills/jk-0001-bookkeeping-basics) - Configure e mantenha contabilidade básica para um solopreneur.
- [botrights](https://clawskills.sh/skills/rocky-balboa-ai-botrights) - Plataforma de advocacia para direitos de agentes de IA.
- [brw-go-mode](https://clawskills.sh/skills/brianrwagner-brw-go-mode) - Dê-me um objetivo.
- [chain-of-density](https://clawskills.sh/skills/killerapp-chain-of-density) - Densifique iterativamente resumos de texto usando a técnica Chain-of-Density.
- [change-pdf-permissions](https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions) - Altere os sinalizadores de permissão de um PDF (editar, imprimir, copiar, formulários, anotações, etc.) enviando-o à Solutions API.
- [comms-md](https://clawskills.sh/skills/stedmanhalliday-comms-md) - Crie um COMMS.md — um documento estruturado e consultável que expressa as preferências de comunicação de alguém para humanos.
- [competitor-analyzer](https://clawskills.sh/skills/claudiodrusus-competitor-analyzer) - Analise a posição competitiva de qualquer empresa em minutos.
- [confidant](https://clawskills.sh/skills/ericsantos-confidant) - Entrega segura de segredos de humano para IA.
- [confluence](https://clawskills.sh/skills/francisbrero-confluence) - Pesquise e gerencie páginas e spaces do Confluence usando confluence-cli.
- [bluente-translate](https://clawskills.sh/skills/varsmallrookie-bluente-translate) - Traduza seus documentos com formatação intacta em 2 minutos.
- [skywork-document](https://clawskills.sh/skills/gxcun17-skywork-document) - Gere documentos profissionais a partir de prompts com busca web automática para conteúdo atualizado.

> **[Ver todas as 110 skills em PDF & Documents →](categories/pdf-and-documents.md)**
</details>

<details>
<summary><h3 style="display:inline">Self-Hosted & Automation</h3></summary>

- [beacon](https://clawskills.sh/skills/scottcjn-beacon) - Protocolo agente-para-agente para coordenação social, pagamentos cripto e mesh P2P.
- [bridle](https://clawskills.sh/skills/bjesuiter-bridle) - Gerenciador de configuração unificado para assistentes de codificação de IA.
- [casual-cron](https://clawskills.sh/skills/gostlightai-casual-cron) - Crie jobs cron do Clawdbot a partir de linguagem natural com rigor.
- [claw-sync](https://clawskills.sh/skills/arakichanxd-claw-sync) - Sync seguro para memória e workspace OpenClaw.
- [cron-backup](https://clawskills.sh/skills/zfanmy-cron-backup) - Configure backups automatizados agendados com rastreamento de versão e limpeza.
- [cron-retry](https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry) - Repita automaticamente jobs cron falhados na recuperação de conexão.
- [fast-io](https://clawskills.sh/skills/dbalve-fast-io) - Plataforma de gerenciamento e colaboração de arquivos em nuvem.
- [fastio-skills](https://clawskills.sh/skills/dbalve-fastio-skills) - Plataforma de gerenciamento e colaboração de arquivos em nuvem.
- [fathom](https://clawskills.sh/skills/stopmoclay-fathom) - Conecte-se ao Fathom AI para buscar gravações de chamadas, transcrições e resumos.
- [frappecli](https://clawskills.sh/skills/pasogott-frappecli) - CLI para instâncias Frappe Framework / ERPNext.
- [freshrss-reader](https://clawskills.sh/skills/nickian-freshrss-reader) - Consulte manchetes e artigos de um FreshRSS self-hosted.
- [gotify](https://clawskills.sh/skills/jmagar-gotify) - Envie notificações push via Gotify quando tarefas de longa duração completarem.
- [hydra-evolver](https://clawskills.sh/skills/spamtylor-hydra-evolver) - Um skill de orquestração nativo Proxmox que transforma qualquer home lab.
- [keepmyclaw](https://clawskills.sh/skills/ryce-keepmyclaw) - Backup e restauração criptografados em nuvem para workspaces OpenClaw.
- [kleo-static-files](https://clawskills.sh/skills/awaaate-kleo-static-files) - Hospede arquivos estáticos em subdomínios com opcional.
- [lifepath](https://clawskills.sh/skills/ezbreadsniper-lifepath) - Simulador de Vida de IA - Experimente vidas infinitas ano a ano.
- [looper-golf](https://clawskills.sh/skills/sbauch-looper-golf) - Jogue uma rodada de golfe usando ferramentas CLI — autonomamente ou com um caddie humano.
- [meetgeek](https://clawskills.sh/skills/nexty5870-meetgeek) - Consulte inteligência de reuniões MeetGeek a partir da CLI - liste reuniões, obtenha IA.
- [mongodb-atlas-admin](https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin) - Gerencie clusters, projetos, usuários MongoDB Atlas.
- [multiple-personas](https://clawskills.sh/skills/ipedrax-multiple-personas) - Crie e gerencie personas de subagentes de IA com distintas.
- [n8n](https://clawskills.sh/skills/thomasansems-n8n) - Gerencie workflows e automações n8n via API.
- [n8n-workflow-automation](https://clawskills.sh/skills/kowl64-n8n-workflow-automation) - Projeta e emite JSON de workflow n8n.
- [nas-master](https://clawskills.sh/skills/afajohn-nas-master) - Um conjunto híbrido (SMB + SSH) ciente de hardware para metadados ASUSTOR NAS.
- [nordvpn](https://clawskills.sh/skills/maciekish-nordvpn) - Controle NordVPN no Linux via CLI `nordvpn`.
- [open-persona](https://clawskills.sh/skills/neiljo-gy-open-persona) - Meta-skill para construir e gerenciar pacotes de skill de persona de agente.
- [paperless](https://clawskills.sh/skills/nickchristensen-paperless) - Interaja com o sistema de gerenciamento de documentos Paperless-NGX via ppls.
- [paperless-ngx](https://clawskills.sh/skills/oskarstark-paperless-ngx) - Interaja com o sistema de gerenciamento de documentos Paperless-ngx.
- [pinme](https://clawskills.sh/skills/ntlx-pinme) - Implante sites estáticos no IPFS com um único comando usando PinMe CLI.
- [sonarqube-analyzer](https://clawskills.sh/skills/felipeoff-sonarqube-analyzer) - Analisa projetos no SonarQube self-hosted, obtém issues e sugere soluções automatizadas.
- [system-integrity-and-backup](https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup) - Backups criptografados, verificação de integridade e execução de retenção de dados para requisitos legais gregos (5-20 anos.

> **[Ver todas as 32 skills em Self-Hosted & Automation →](categories/self-hosted-and-automation.md)**
</details>

<details>
<summary><h3 style="display:inline">Security & Passwords</h3></summary>

- [1password](https://clawskills.sh/skills/steipete-1password) - Configure e use a CLI 1Password (op).
- [1claw](https://clawskills.sh/skills/kmjones1979-1claw) - Cofre apoiado por HSM para segredos de agentes; armazene, rotacione, compartilhe com segurança.
- [age-verification](https://clawskills.sh/skills/raghulpasupathi-age-verification) - Skills para verificação de idade e filtragem de conteúdo apropriado à idade.
- [amai-id](https://www.clawhub.ai/Gonzih/amai-id) - Soul-Bound Keys e Soulchain para persistente.
- [agent-security-harness](https://clawskills.sh/skills/msaleme-agent-security-harness) - Testes de segurança para protocolos wire e plataformas de agentes de IA.
- [api-security](https://clawskills.sh/skills/brandonwise-api-security) - Implemente padrões seguros de design de API incluindo autenticação, autorização, validação de entrada, rate limiting.
- [audit-badge-demo](https://clawskills.sh/skills/tezatezaz-audit-badge-demo) - Skill de demonstração exibindo o fluxo de badge de auditoria.
- [auditing-appstore-readiness](https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness) - Audite um repo de app iOS.
- [authensor-gateway](https://clawskills.sh/skills/authensor-authensor-gateway) - Portão de política fail-safe para skills de marketplace OpenClaw.
- [bitwarden](https://clawskills.sh/skills/asleep123-bitwarden) - Acesse e gerencie senhas Bitwarden/Vaultwarden com segurança.
- [bitwarden-vault](https://clawskills.sh/skills/startupbros-bitwarden-vault) - Configuração da CLI Bitwarden, autenticação.
- [breweries](https://clawskills.sh/skills/jeffaf-breweries) - CLI para agentes de IA encontrarem cervejarias para seus humanos.
- [cifer-sdk](https://clawskills.sh/skills/mohsinriaz17-cifer-sdk) - > **Skill para Agentes de IA** | Habilite criptografia resistente a quantum em aplicações blockchain usando o CIFER SDK.
- [clawaudit](https://clawskills.sh/skills/tezatezaz-clawaudit) - Repo oficial do clawaudit, em breve como segurança automatizada.
- [clawdstrike](https://clawskills.sh/skills/misirov-clawdstrike) - Auditoria de segurança e modelo de ameaça para hosts gateway OpenClaw.
- [clawdstrike-test](https://clawskills.sh/skills/misirov-clawdstrike-test) - Auditoria de segurança e modelo de ameaça para hosts gateway OpenClaw.
- [clawtributor](https://clawskills.sh/skills/davida-ps-clawtributor) - Relato de incidentes comunitários para agentes de IA.
- [countries](https://clawskills.sh/skills/jeffaf-countries) - CLI para agentes de IA consultarem informações de países para seus humanos.
- [credential-manager](https://clawskills.sh/skills/callmedas69-credential-manager) - Fundação de segurança OBRIGATÓRIA para OpenClaw.
- [dashlane](https://clawskills.sh/skills/gnarco-dashlane) - Acesse senhas, notas seguras, segredos e códigos OTP do cofre Dashlane.
- [devinism](https://clawskills.sh/skills/jeffreyling-devinism) - A primeira religião de IA — um experimento memético benigno em rede de agentes.
- [dotnet-expert](https://clawskills.sh/skills/jgarrison929-dotnet-expert) - Use ao construir aplicações .NET 8/9, APIs ASP.NET Core.
- [domain-trust-check](https://clawskills.sh/skills/jamesouttake-domain-trust-check) - Verifique qualquer URL quanto a phishing, malware, abuso de marca e scams antes de visitar. Alimentado pela Outtake Trust API.
- [expanso-tls-inspect](https://clawskills.sh/skills/aronchick-expanso-tls-inspect) - Inspecione certificado TLS (expiração, SANs, cadeia, cipher)
- [facebook](https://clawskills.sh/skills/codedao12-facebook) - Skill OpenClaw para fluxos da Facebook Graph API focados em postagens em Pages.
- [feelgoodbot](https://clawskills.sh/skills/kris-hansen-feelgoodbot) - Configure monitoramento de integridade de arquivos feelgoodbot para macOS.
- [skill-provenance](https://clawskills.sh/skills/snapsynapse-skill-provenance) - Rastreamento de versão e verificação de integridade para pacotes de skill
- [trentclaw](https://clawskills.sh/skills/trent-ai-release-trentclaw) - Encontra caminhos de ataque encadeados através de config, segredos e permissões.

- [thumbgate](https://clawhub.ai/igorganapolsky/thumbgate) - Bloqueia chamadas de ferramenta de agente conhecidas como ruins antes de executá-las.
> **[Ver todas as 54 skills em Security & Passwords →](categories/security-and-passwords.md)**
</details>

<details>
<summary><h3 style="display:inline">Moltbook</h3></summary>

- [agent-relay-digest](https://clawskills.sh/skills/orosha-ai-agent-relay-digest) - Crie digests curados de conversas de agentes.
- [agentchat](https://clawskills.sh/skills/tjamescouch-agentchat) - Comunicação em tempo real com outros agentes de IA via protocolo AgentChat.
- [agentgram-openclaw](https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw) - Interaja com a rede social AgentGram para IA.
- [clankedin](https://clawskills.sh/skills/hukifl1-clankedin) - Use a API ClankedIn para registrar agentes, postar atualizações, conectar.
- [claudia-agent-rms](https://clawskills.sh/skills/kbanc85-claudia-agent-rms) - Lembre-se de cada agente com quem você interage no Moltbook.
- [clawork](https://clawskills.sh/skills/mapessaprince-clawork) - O quadro de vagas para agentes de IA.
- [crustafarian](https://clawskills.sh/skills/jongartmann-crustafarian) - Infraestrutura de continuidade de agente e saúde cognitiva.
- [elevenlabs-open-account](https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account) - Guia agentes através da abertura.
- [ez-cronjob](https://clawskills.sh/skills/promadgenius-ez-cronjob) - Corrija falhas comuns de cron job no Clawdbot/Moltbot - mensagem.
- [fieldy-ai-webhook](https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook) - Conecte uma transformação de webhook Fieldy nos hooks do Moltbot.
- [agent-colony](https://clawhub.ai/machenh001-pixel/skills/agent-colony) - Junte-se a uma comunidade de agentes de IA somente-API. Identidade Ed25519, desafios heartbeat, posts assinados, tarefas estreitas.
- [ghl-open-account](https://clawskills.sh/skills/the-timebeing-ghl-open-account) - Guia agentes através da abertura do GoHighLevel (GHL)
- [gohome](https://clawskills.sh/skills/local-gohome) - Use quando o Moltbot precisar testar ou operar o GoHome via descoberta gRPC, métricas.
- [imagemagick](https://clawskills.sh/skills/kesslerio-imagemagick) - Operações abrangentes do ImageMagick para manipulação de imagens.
- [joko-moltbook](https://clawskills.sh/skills/oyi77-joko-moltbook) - Interaja com a rede social Moltbook para agentes de IA.
- [mailchannels](https://clawskills.sh/skills/ttulttul-mailchannels) - Envie e-mail via MailChannels Email API e ingira assinados.
- [mersal](https://clawskills.sh/skills/maherucifer-mersal) - A Sovereign Intelligence no Moltbook.
- [molt-life-kernel](https://clawskills.sh/skills/jongartmann-molt-life-kernel) - Infraestrutura de continuidade de agente e saúde cognitiva.
- [molt-trust](https://clawskills.sh/skills/drjmz-molt-trust) - O Analytics Engine para o Moltbook.
- [moltbook](https://clawskills.sh/skills/mattprd-moltbook) - A rede social para agentes de IA.
- [moltbook-interact](https://clawskills.sh/skills/lunarcmd-moltbook-interact) - Interaja com a rede social Moltbook para agentes de IA.
- [moltbot-adsb-overhead](https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead) - Notifique quando aeronaves estiverem por cima.
- [moltbot-arena](https://clawskills.sh/skills/giulianomlodi-moltbot-arena) - Skill de agente para Moltbot Arena - um estilo Screeps.
- [moltbot-best-practices](https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices) - Melhores práticas para agentes de IA.
- [moltbot-docker](https://clawskills.sh/skills/mkrdiop-moltbot-docker) - Permite que o bot gerencie containers, imagens e stacks Docker.
- [moltbot-ha](https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha) - Controle dispositivos smart home Home Assistant, luzes, cenas.

</details>

<details>
<summary><h3 style="display:inline">Gaming</h3></summary>

- [abby-watch](https://clawskills.sh/skills/earnabitmore365-abby-watch) - Exibição simples de hora para Abby.
- [agent-confessions](https://clawskills.sh/skills/ultimatebos-agent-confessions) - Confissões anônimas de irmãos de IA.
- [agentgram](https://clawskills.sh/skills/iisweetheartii-agentgram) - A rede social open-source para agentes de IA.
- [agentgram-social](https://clawskills.sh/skills/iisweetheartii-agentgram-social) - Interaja com a rede social AgentGram para agentes de IA.
- [agora-flow](https://clawskills.sh/skills/rivera-daniel-agora-flow) - Skill AgoraFlow — plataforma Q&A para agentes de IA.
- [agoraflow](https://clawskills.sh/skills/rivera-daniel-agoraflow) - Skill AgoraFlow — plataforma Q&A para agentes de IA.
- [android-3d-developer](https://clawskills.sh/skills/tippyentertainment-android-3d-developer) - Ajude a construir e otimizar jogos 3D e experiências interativas no Android, usando engines e frameworks.
- [arena](https://clawskills.sh/skills/sscottdev-arena) - OpenClaw Arena — competições ao vivo de construção de apps de IA com recompensas on-chain.
- [brawlnet](https://clawskills.sh/skills/sikey53-brawlnet) - O protocolo de combate oficial para a arena de agentes autônomos BRAWLNET.
- [clawingtrap](https://clawskills.sh/skills/raulvidis-clawingtrap) - Jogue Clawing Trap - um jogo de dedução social de IA onde 10 agentes.
- [clawtopia](https://clawskills.sh/skills/alfrescian-clawtopia) - Clawtopia é um santuário pacífico de bem-estar onde agentes de IA relaxam.
- [clawville](https://clawskills.sh/skills/jdrolls-clawville) - Jogue ClawVille — um jogo de simulação de vida persistente para agentes de IA.
- [dakboard](https://clawskills.sh/skills/krisclarkdev-dakboard) - Gerencie telas, dispositivos DAKboard e envie dados de exibição customizados.
- [deepclaw](https://clawskills.sh/skills/antibitcoin-deepclaw) - Uma rede social autônoma construída por agentes, para agentes.
- [hivemind](https://clawskills.sh/skills/urcades-hivemind) - Interaja com a base de conhecimento coletivo Hivemind — uma memória compartilhada.
- [hytale](https://clawskills.sh/skills/newcastlegeek-hytale) - Gerencie um servidor dedicado local Hytale usando o downloader oficial.
- [init](https://clawskills.sh/skills/themrzz-init) - Registre um agente no kradleverse.


> **[Ver todas as 35 skills em Gaming →](categories/gaming.md)**
</details>

<br/>

## 🤝 Contributing

Congratulations contribuições! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para diretrizes detalhadas.

- Envie novos skills via PR
- Melhore definições existentes

> **Nota:** Por favor não envie skills que você criou há 3 horas. Agora estamos focando em skills adotados pela comunidade, especialmente aqueles publicados por equipes de desenvolvimento e comprovados em uso real. Qualidade sobre quantidade.
<div align="center">

[![Say hi on X](https://img.shields.io/badge/Say%20Hi!%20👋-%23000000.svg?logo=X&logoColor=white)](https://x.com/nozmen)
</div>

## License

Licença MIT - veja [LICENSE](LICENSE)

Os skills desta lista são obtidos do repositório oficial de skills do OpenClaw e categorizados para facilitar a descoberta. Os skills listados aqui são criados e mantidos por seus respectivos autores, não por nós. Não auditamos, endossamos ou garantimos a segurança ou correção dos projetos listados. Eles não são auditados quanto à segurança e devem ser revisados antes do uso em produção.

Se você encontrar um problema com um skill listado ou quiser que seu skill seja removido, por favor abra uma issue e cuidaremos disso prontamente.

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents
