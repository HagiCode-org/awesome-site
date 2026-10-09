// pt-BR translator for awesome-site masked batches.
// Preserves @@Lx@@ / @@Cx@@ tokens, emoji, URLs and markdown structure.
// Translates only the natural-language prose into Brazilian Portuguese.
// No external API/engine: dictionary + phrase rules written directly here.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const srcDir = join(root, "zh-CN");
const outDir = join(root, "pt-BR");
mkdirSync(outDir, { recursive: true });

const TOKEN_RE = /@@[LC]\d+@@/g;

// Words left unchanged (case-insensitive): acronyms + proper nouns + tech terms.
const KEEP = new Set([
  "mcp","api","apis","json","url","uri","urls","sdk","cli","llm","llms","ai","oauth","oauth2",
  "http","https","ide","sql","usdc","ui","db","x402","base","solana","algorand","github","git",
  "postgresql","sqlite","kubernetes","docker","google","gpt","claude","gemini","openai","crypto",
  "blockchain","dex","evm","rpc","dns","whois","tls","ssl","ip","tcp","udp","csv","pdf","png","jpg",
  "svg","html","css","xml","midi","mp3","nosql","rest","graphql","soap","jwt","ssh","ftp","smtp",
  "imap","fhir","hl7","dicom","snomed","icd","loinc","rxnorm","mesh","atc","cid10","omop","openapi",
  "swagger","redis","kafka","grpc","amqp","mqtt","websocket","zapier","slack","notion","stripe",
  "gmail","spotify","apple","music","chatgpt","discord","reddit","youtube","bilibili","steam","nft",
  "defi","dao","usdt","stablecoin","macos","windows","linux","ios","android","chrome","firefox",
  "safari","edge","blender","figma","photopea","comfyui","openai","anthropic","qwen","deepseek",
  "grok","mistral","llama","ollama","fal","veo","sora","kling","elevenlabs","imagen","nano","banana",
  "flux","seedream","csharp","c#","javacript","typescript","javascript","python","rust","golang","go",
  "ruby","java","c++","sql","noaa","nasa","fcc","itu","unoosa","faa","eip","erc","usdc","sol","eth",
  "btc","paypal","stripe","openweather","open-meteo","met","aic","wikipedia","wikimedia","europeana",
  "tmdb","discogs","quran","bible","ao3","anilist","spotify","tmdb","imslp","lrc","lrclib",
]);

// English -> Portuguese dictionary (lowercased keys).
const W = {
  a:"",an:"",the:"",and:"e",or:"ou",of:"de",to:"para",for:"para",in:"em",on:"em",with:"com",
  without:"sem",via:"via",by:"por",from:"de",as:"como",at:"em",into:"em",over:"sobre",across:"em",
  through:"através",your:"seu",you:"você",its:"seu",their:"seus",they:"eles",them:"os",it:"ele",
  this:"este",that:"que",these:"estes",those:"aqueles",what:"o que",is:"é",are:"são",was:"era",
  were:"eram",be:"ser",being:"sendo",do:"fazer",does:"faz",did:"fez",have:"ter",has:"tem",had:"tinha",
  can:"pode",cannot:"não pode",will:"vai",would:"iria",should:"deve",could:"poderia",may:"pode",
  access:"acessar",accesses:"acessa",accessed:"acessado",accessible:"acessível",accessing:"acessando",
  search:"pesquisar",searches:"pesquisa",searching:"pesquisando",
  query:"consultar",queries:"consultas",querying:"consultando",
  manage:"gerenciar",manages:"gerencia",managed:"gerenciado",management:"gerenciamento",
  read:"ler",reads:"lê",reading:"leitura",readonly:"somente-leitura",
  view:"visualizar",views:"visualiza",viewing:"visualização",
  control:"controlar",controls:"controla",controlled:"controlado",controlling:"controlando",
  edit:"editar",edits:"edita",editing:"edição",editable:"editável",
  analyze:"analisar",analyzes:"analisa",analyzing:"analisando",analysis:"análise",
  generate:"gerar",generates:"gera",generated:"gerado",generation:"geração",generating:"gerando",
  create:"criar",creates:"cria",created:"criado",creation:"criação",creating:"criando",
  build:"construir",builds:"constrói",built:"construído",building:"construção",
  deploy:"implantar",deploys:"implanta",deployed:"implantado",deployment:"implantação",
  run:"executar",runs:"executa",running:"executando",runner:"executor",
  use:"usar",uses:"usa",used:"usado",using:"usando",usage:"uso",usages:"usos",
  provide:"fornecer",provides:"fornece",provided:"fornecido",providing:"fornecendo",provider:"provedor",
  support:"suportar",supports:"suporta",supported:"suportado",supporting:"suportando",
  connect:"conectar",connects:"conecta",connected:"conectado",connecting:"conectando",connection:"conexão",
  bridge:"fazer ponte",bridges:"faz ponte",bridging:"fazendo ponte",
  integrate:"integrar",integrates:"integra",integrated:"integrado",integrating:"integrando",integration:"integração",
  discover:"descobrir",discovers:"descobre",discovering:"descobrindo",discovery:"descoberta",
  browse:"navegar",browses:"navega",browsing:"navegação",browser:"navegador",
  local:"local",locally:"localmente",cloud:"nuvem",remote:"remoto",remotely:"remotamente",
  selfhosted:"auto-hospedado",self:"próprio",hosted:"hospedado",hosting:"hospedagem",host:"host",
  first:"primeiro",data:"dados",file:"arquivo",files:"arquivos",filename:"nome de arquivo",
  image:"imagem",images:"imagens",video:"vídeo",videos:"vídeos",audio:"áudio",
  model:"modelo",models:"modelos",server:"servidor",servers:"servidores",
  tool:"ferramenta",tools:"ferramentas",agent:"agente",agents:"agentes",
  assistant:"assistente",assistants:"assistentes",assistance:"assistência",
  database:"banco de dados",databases:"bancos de dados",
  service:"serviço",services:"serviços",platform:"plataforma",platforms:"plataformas",
  library:"biblioteca",libraries:"bibliotecas",client:"cliente",clients:"clientes",
  session:"sessão",sessions:"sessões",code:"código",document:"documento",documents:"documentos",
  documentation:"documentação",chat:"conversa",completion:"conclusão",completions:"conclusões",
  coding:"de programação",program:"programa",programs:"programas",programming:"programação",
  music:"música",song:"música",songs:"músicas",playlist:"lista de reprodução",playlists:"listas de reprodução",
  text:"texto",texts:"textos",prompt:"prompt",prompts:"prompts",
  natural:"natural",language:"linguagem",languages:"linguagens",
  user:"usuário",users:"usuários",human:"humano",humans:"humanos",
  developer:"desenvolvedor",developers:"desenvolvedores",development:"desenvolvimento",develop:"desenvolver",
  system:"sistema",systems:"sistemas",project:"projeto",projects:"projetos",
  workflow:"fluxo de trabalho",workflows:"fluxos de trabalho",
  task:"tarefa",tasks:"tarefas",process:"processo",processes:"processos",processing:"processamento",
  security:"segurança",secure:"seguro",securely:"com segurança",
  performance:"desempenho",cost:"custo",costs:"custos",pricing:"preços",price:"preço",prices:"preços",
  free:"gratuito",paid:"pago",pay:"pagar",payment:"pagamento",payments:"pagamentos",paying:"pagando",
  realtime:"em tempo real",real:"real",time:"tempo",times:"vezes",live:"ao vivo",
  open:"aberto",opens:"abre",opening:"abrindo",source:"fonte",protocol:"protocolo",
  list:"lista",lists:"listas",curated:"curada",curate:"curadoria",awesome:"incrível",
  production:"produção",experimental:"experimental",ready:"pronto",
  capabilities:"capacidades",capability:"capacidade",capabilitiesc:"capacidades",
  extend:"estender",extends:"estende",extending:"estendendo",extension:"extensão",extensions:"extensões",
  fileaccess:"acesso a arquivos",interactions:"interações",interaction:"interação",
  standardized:"padronizado",standard:"padrão",standards:"padrões",
  implementations:"implementações",implementation:"implementação",implement:"implementar",
  resources:"recursos",resource:"recurso",
  enable:"permitir",enables:"permite",enabled:"habilitado",enabling:"permitindo",
  allows:"permite",allow:"permitir",allowed:"permitido",allowing:"permitindo",
  help:"ajudar",helps:"ajuda",helping:"ajudando",
  work:"trabalhar",works:"funciona",working:"trabalhando",worked:"trabalhou",
  make:"fazer",makes:"faz",making:"fazendo",made:"feito",
  add:"adicionar",adds:"adiciona",added:"adicionado",adding:"adicionando",
  remove:"remover",removes:"remove",removed:"removido",removing:"removendo",
  convert:"converter",converts:"converte",converted:"convertido",converting:"convertendo",conversion:"conversão",
  render:"renderizar",renders:"renderiza",rendered:"renderizado",rendering:"renderização",
  compare:"comparar",compares:"compara",compared:"comparado",comparison:"comparação",
  recommend:"recomendar",recommends:"recomenda",recommended:"recomendado",recommendation:"recomendação",recommendations:"recomendações",
  notify:"notificar",notifies:"notifica",notification:"notificação",notifications:"notificações",
  monitor:"monitorar",monitors:"monitora",monitored:"monitorado",monitoring:"monitoramento",
  schedule:"agendar",schedules:"agenda",scheduled:"agendado",scheduling:"agendamento",
  trigger:"disparar",triggers:"dispara",triggered:"disparado",
  automate:"automatizar",automates:"automatiza",automated:"automatizado",automating:"automatizando",automation:"automação",
  configure:"configurar",configures:"configura",configured:"configurado",configuration:"configuração",config:"configuração",configs:"configurações",
  setup:"configuração",install:"instalar",installs:"instala",installed:"instalado",installation:"instalação",
  update:"atualizar",updates:"atualiza",updated:"atualizado",upgrading:"atualizando",upgrade:"atualizar",
  delete:"excluir",deletes:"exclui",deleted:"excluído",
  sync:"sincronizar",synced:"sincronizado",syncing:"sincronizando",
  cache:"cache",cached:"em cache",caching:"cache",
  secure:"seguro",secured:"protegido",securing:"protegendo",
  encryption:"criptografia",encrypted:"criptografado",encrypt:"criptografar",
  auth:"autenticação",authentication:"autenticação",authenticate:"autenticar",authenticated:"autenticado",
  authorize:"autorizar",authorized:"autorizado",authorization:"autorização",
  login:"login",logout:"logout",token:"token",tokens:"tokens",
  key:"chave",keys:"chaves",credential:"credencial",credentials:"credenciais",secret:"segredo",secrets:"segredos",
  password:"senha",permissions:"permissões",permission:"permissão",
  role:"função",roles:"funções",policy:"política",policies:"políticas",rule:"regra",rules:"regras",
  limit:"limite",limits:"limites",rate:"taxa",error:"erro",errors:"erros",debug:"depurar",
  trace:"rastrear",tracing:"rastreamento",metric:"métrica",metrics:"métricas",
  health:"saúde",status:"status",state:"estado",report:"relatório",reports:"relatórios",
  alert:"alerta",alerts:"alertas",event:"evento",events:"eventos",
  message:"mensagem",messages:"mensagens",request:"solicitação",requests:"solicitações",response:"resposta",responses:"respostas",
  call:"chamar",calls:"chamadas",endpoint:"endpoint",endpoints:"endpoints",
  host:"host",hosts:"hosts",node:"nó",nodes:"nós",cluster:"cluster",container:"contêiner",containers:"contêineres",
  table:"tabela",tables:"tabelas",row:"linha",rows:"linhas",column:"coluna",columns:"colunas",field:"campo",fields:"campos",record:"registro",records:"registros",
  index:"índice",queue:"fila",job:"trabalho",jobs:"trabalhos",
  pipeline:"pipeline",flow:"fluxo",flows:"fluxos",step:"etapa",steps:"etapas",
  env:"ambiente",environment:"ambiente",settings:"configurações",option:"opção",options:"opções",
  feature:"recurso",features:"recursos",capability:"capacidade",capabilities:"capacidades",
  plugin:"plugin",plugins:"plugins",module:"módulo",modules:"módulos",package:"pacote",packages:"pacotes",
  framework:"framework",template:"modelo",templates:"modelos",sample:"exemplo",samples:"exemplos",example:"exemplo",examples:"exemplos",
  doc:"documento",docs:"documentos",guide:"guia",tutorial:"tutorial",readme:"README",
  issue:"problema",issues:"problemas",bug:"bug",bugs:"bugs",fix:"correção",fixes:"corrige",fixed:"corrigido",
  version:"versão",versions:"versões",release:"lançamento",releases:"lançamentos",
  repo:"repositório",repository:"repositório",commit:"commit",branch:"branch",
  folder:"pasta",directory:"diretório",path:"caminho",
  link:"link",links:"links",site:"site",page:"página",pages:"páginas",app:"aplicativo",apps:"aplicativos",application:"aplicativo",applications:"aplicativos",
  os:"sistema operacional",mobile:"móvel",desktop:"desktop",
  deploy:"implantar",deployment:"implantação",runtime:"runtime",compile:"compilar",compiled:"compilado",
  start:"iniciar",starts:"inicia",starting:"iniciando",stop:"parar",stops:"para",stopping:"parando",restart:"reiniciar",restarted:"reiniciado",
  test:"testar",tests:"testes",testing:"testando",
  dev:"dev",prod:"produção",staging:"staging",
  account:"conta",accounts:"contas",profile:"perfil",profiles:"perfis",team:"equipe",teams:"equipes",
  org:"organização",organization:"organização",admin:"administrador",adminc:"administradores",
  key:"chave",apikey:"chave de API",
  store:"armazenar",stored:"armazenado",storage:"armazenamento",save:"salvar",saved:"salvo",
  load:"carregar",loaded:"carregado",send:"enviar",sends:"envia",sent:"enviado",receive:"receber",received:"recebido",
  extract:"extrair",extracts:"extrai",extracted:"extraído",extraction:"extração",
  scrape:"extrair",scraping:"extração",scrape:"raspar",
  process:"processar",processed:"processado",
  write:"escrever",writes:"escreve",writing:"escrevendo",writingc:"escrevendo",
  fetch:"buscar",fetches:"busca",fetched:"buscado",
  export:"exportar",exports:"exporta",exported:"exportado",
  import:"importar",imports:"importa",imported:"importado",
  track:"rastrear",tracks:"rastreia",tracking:"rastreamento",
  find:"encontrar",finds:"encontra",found:"encontrado",finding:"encontrando",
  inspect:"inspecionar",inspects:"inspeciona",inspection:"inspeção",inspecting:"inspecionando",
  check:"verificar",checks:"verifica",checked:"verificado",checking:"verificando",
  validate:"validar",validates:"valida",validated:"validado",validation:"validação",validating:"validando",
  verify:"verificar",verifies:"verifica",verified:"verificado",verification:"verificação",verifying:"verificando",
  audit:"auditar",audits:"audita",audited:"auditado",auditing:"auditando",
  review:"revisar",reviews:"revisa",reviewed:"revisado",
  score:"pontuação",scores:"pontuações",scoring:"pontuação",scored:"pontuado",
  rank:"classificar",ranks:"classifica",ranking:"classificação",ranked:"classificado",
  graph:"grafo",graphs:"grafos",
  public:"público",private:"privado",
  content:"conteúdo",contents:"conteúdos",
  signal:"sinal",signals:"sinais",
  against:"contra",
  screenshot:"captura de tela",screenshots:"capturas de tela",
  persistent:"persistente",
  analytics:"análise",analytic:"analítico",
  aware:"ciente",
  evidence:"evidência",
  dependency:"dependência",dependencies:"dependências",dependent:"dependente",
  wallet:"carteira",
  transaction:"transação",transactions:"transações",
  other:"outro",another:"outro",
  bridge:"ponte",
  discover:"descobrir",discovers:"descobre",discovery:"descoberta",
  engine:"motor",
  chain:"cadeia",chains:"cadeias",
  network:"rede",networks:"redes",
  such:"como",suchas:"como",
  name:"nome",
  metadata:"metadados",
  stock:"ações",
  postgresql:"PostgreSQL",
  content:"conteúdo",
  url:"URL",
  // category / section words
  aerospace:"aeroespacial",astrodynamics:"astrodinâmica",agreements:"acordos",coordination:"coordenação",
  accessibility:"acessibilidade",culture:"cultura",architectures:"arquiteturas",
  biology:"biologia",medicine:"medicina",bioinformatics:"bioinformática",automations:"automações",
  browser:"navegador",automation:"automação",aggregators:"agregadores",clients:"clientes",
  tutorials:"tutoriais",community:"comunidade",legend:"legenda",implementations:"implementações",
  art:"arte",designc:"design",frameworkc:"framework",
  // common adjectives / misc
  new:"novo",old:"antigo",big:"grande",small:"pequeno",fast:"rápido",slow:"lento",easy:"fácil",
  simple:"simples",complex:"complexo",smart:"inteligente",digital:"digital",global:"global",
  daily:"diário",weekly:"semanal",monthly:"mensal",automatic:"automático",automatically:"automaticamente",
  interactive:"interativo",visual:"visual",voice:"voz",
  // verbs continued
  interact:"interagir",interacts:"interage",interacting:"interagindo",
  get:"obter",gets:"obtém",getting:"obtendo",
  market:"mercado",
  based:"baseado",
  plus:"além disso",
  checks:"verificações",checkc:"verificações",
  only:"somente",
  more:"mais",
  any:"qualquer",
  full:"completo",
  cross:"transversal",
  structured:"estruturado",
  intelligence:"inteligência",
  semantic:"semântico",
  including:"incluindo",
  commands:"comandos",
  context:"contexto",
  history:"histórico",
  risk:"risco",risks:"riscos",
  memory:"memória",
  verification:"verificação",
  project:"projeto",
  deterministic:"determinístico",
  markdown:"markdown",
  runs:"executa",
  inspection:"inspeção",
  pay:"pagar",
  payments:"pagamentos",
  generation:"geração",
  status:"status",
  inspect:"inspecionar",
  mail:"e-mail",
  tasks:"tarefas",
  docs:"documentos",
  monitoring:"monitoramento",
  price:"preço",
  network:"rede",
  google:"Google",
  storage:"armazenamento",
  metadata:"metadados",
  app:"aplicativo",
  stock:"ações",
  github:"GitHub",
  postgresql:"PostgreSQL",
  content:"conteúdo",
  url:"URL",
  signals:"sinais",
  tokens:"tokens",
  screenshots:"capturas de tela",
  kubernetes:"Kubernetes",
  git:"Git",
  persistent:"persistente",
  apps:"aplicativos",
  review:"revisão",
  human:"humano",
  cost:"custo",
  sessions:"sessões",
  dependency:"dependência",
  first:"primeiro",
  images:"imagens",
  workflows:"fluxos de trabalho",
  wallet:"carteira",
  export:"exportar",
  fetch:"buscar",
  pdf:"PDF",
  transactions:"transações",
  other:"outro",
  bridge:"ponte",
  discover:"descobrir",
  chat:"conversa",
  engine:"motor",
  chains:"cadeias",
  scores:"pontuações",
  sqlite:"SQLite",
  analytics:"análise",
  aware:"ciente",
  evidence:"evidência",
  page:"página",
  projects:"projetos",
  ssh:"SSH",
  locally:"localmente",
  scoring:"pontuação",
  index:"índice",
  metrics:"métricas",
  rules:"regras",
  user:"usuário",
  one:"um",
  // additional common words for list-item descriptions
  routes:"rotas",unified:"unificado",aggregates:"agrega",aggregate:"agregar",custom:"personalizado",
  bundles:"pacotes",bundle:"pacote",providers:"provedores",provider:"provedor",
  integrations:"integrações",integration:"integração",credentials:"credenciais",
  machine:"máquina",lets:"permite",let:"deixe",so:"assim",each:"cada",own:"próprio",
  demand:"demanda",orchestrate:"orquestra",orchestrates:"orquestra",orchestrating:"orquestrando",
  referral:"indicação",referrals:"indicações",bilateral:"bilateral",trust:"confiança",
  like:"como",maps:"mapeia",map:"mapear",once:"uma vez",typed:"tipados",
  deterministically:"deterministicamente",capability:"capacidade",capabilities:"capacidades",
  fly:"tempo real",quele:"que",thus:"assim",onto:"para",upon:"sobre",where:"onde",
  many:"muitos",then:"então",also:"também",still:"ainda",very:"muito",
  whose:"cujo",whom:"quem",which:"que",while:"enquanto",whether:"se",within:"dentro",
  toolkits:"kits de ferramentas",toolkit:"kit de ferramentas",wrapper:"wrapper",wrappers:"wrappers",
  proxy:"proxy",proxies:"proxies",gateway:"gateway",gateways:"gateways",router:"roteador",routers:"roteadores",
  registry:"registro",registries:"registros",marketplace:"marketplace",catalog:"catálogo",catalogue:"catálogo",
  catalogues:"catálogos",directory:"diretório",bot:"bot",bots:"bots",daemon:"daemon",
  plugin:"plugin",plugins:"plugins",addon:"complemento",addons:"complementos",extensionc:"extensão",
  wrapper:"wrapper",bridgec:"ponte",layer:"camada",layers:"camadas",enginec:"motor",
  assistantc:"assistentes",clientsc:"clientes",serversc:"servidores",agentsc:"agentes",
  toolsc:"ferramentas",modelc:"modelos",datac:"dados",filec:"arquivos",
  integrationc:"integração",servicec:"serviços",platformc:"plataformas",
  searchc:"pesquisa",queryc:"consulta",managec:"gerencia",createc:"cria",buildc:"constrói",
  connectc:"conecta",generatec:"gera",accessc:"acessa",readc:"lê",viewc:"visualiza",
  controlc:"controla",editc:"edita",analyze:"analisa",discoverc:"descobre",
  providerc:"provedor",credentialc:"credenciais",integrationc2:"integrações",
  chatc:"conversa",agentc:"agente",serverc:"servidor",toolc:"ferramenta",
  realtimec:"em tempo real",livec:"ao vivo",localc:"local",cloudc:"nuvem",remotec:"remoto",
  selfc:"próprio",hostedc:"hospedado",open:"aberto",curatedc:"curada",awesomec:"incrível",
  fast:"rápido",slow:"lento",simple:"simples",complex:"complexo",smart:"inteligente",
  digital:"digital",global:"global",daily:"diário",weekly:"semanal",monthly:"mensal",
  automatic:"automático",automatically:"automaticamente",interactive:"interativo",
  visual:"visual",voice:"voz",new:"novo",old:"antigo",big:"grande",small:"pequeno",
  securec:"seguro",securelyc:"com segurança",
};

// Whole-line / whole-rest phrase matches. If the trimmed line matches, the
// replacement is returned verbatim (good Portuguese, never re-translated).
const FULL_PHRASES = [
  [/a curated list of awesome Model Context Protocol \(MCP\) servers\./i, "Uma lista curada de servidores incríveis do Model Context Protocol (MCP)."],
  [/what is MCP\?/i, "O que é o MCP?"],
  [/@@L0@@ is an open protocol that enables AI models to securely interact with local and remote resources through standardized server implementations\. This list focuses on production-ready and experimental MCP servers that extend AI capabilities through file access, database connections, API integrations, and other contextual services\./i,
   "@@L0@@ é um protocolo aberto que permite que modelos de IA interajam com segurança com recursos locais e remotos por meio de implementações de servidores padronizadas. Esta lista foca em servidores MCP prontos para produção e experimentais que estendem as capacidades da IA por meio de acesso a arquivos, conexões de banco de dados, integrações de API e outros serviços contextuais."],
  [/checkout @@L0@@ and @@L1@@\./i, "Confira @@L0@@ e @@L1@@."],
  [/this list is for servers with a GitHub repo you install and run yourself\. looking for a hosted server you just connect to over a URL\? see @@L0@@\./i, "Esta lista é para servidores com um repositório GitHub que você instala e executa você mesmo. Procurando um servidor hospedado ao qual você se conecta apenas por uma URL? Veja @@L0@@."],
  [/we now have a @@L0@@ that is synced with the repository\./i, "Agora temos um @@L0@@ sincronizado com o repositório."],
  [/confused about local 🏠 vs cloud ☁️\?/i, "Confuso sobre Local 🏠 vs Nuvem ☁️?"],
  [/use local when MCP server is talking to a locally installed software, e\.g\. taking control over Chrome browser\./i, "Use local quando o servidor MCP estiver falando com um software instalado localmente, por exemplo, assumindo o controle do navegador Chrome."],
  [/use cloud when MCP server is talking to remote APIs, e\.g\. weather API\./i, "Use nuvem quando o servidor MCP estiver falando com APIs remotas, por exemplo, API de clima."],
  [/servers for accessing many apps and tools through a single MCP server\./i, "Servidores para acessar muitos aplicativos e ferramentas através de um único servidor MCP."],
  [/mcp servers for creating, coordinating, and executing agreements: commitments, escrow, and multi-party decision workflows across humans, agents, and organizations\./i, "Servidores MCP para criar, coordenar e executar acordos: compromissos, custódia e fluxos de decisão multipartidários entre humanos, agentes e organizações."],
  [/access and explore art collections, cultural heritage, and museum databases\. enables AI models to search and analyze artistic and cultural content\./i, "Acesse e explore coleções de arte, patrimônio cultural e bancos de dados de museus. Permite que modelos de IA pesquisem e analisem conteúdo artístico e cultural."],
  [/design and visualize software architecture, system diagrams, and technical documentation\. enables AI models to generate professional diagrams and architectural documentation\./i, "Projete e visualize arquitetura de software, diagramas de sistema e documentação técnica. Permite que modelos de IA gerem diagramas profissionais e documentação arquitetural."],
  [/web content access and automation capabilities\. enables searching, scraping, and processing web content in AI-friendly formats\./i, "Acesso e capacidades de automação de conteúdo web. Permite pesquisar, extrair e processar conteúdo web em formatos amigáveis à IA."],
  [/from idea to a production-grade MCP server in under a minute! 🦜/i, "da ideia a um servidor MCP de nível de produção em menos de um minuto! 🦜"],
];

// Light partial fixes (only when no whole-line phrase matched).
const PARTIAL_PHRASES = [
  [/model context protocol/i, "Model Context Protocol"],
  [/production-grade/i, "de nível de produção"],
];

// Whole-line (or whole-rest) phrase matches. If the trimmed line matches,
// the replacement is returned verbatim (already good Portuguese, never re-translated).
function applyFull(s) {
  const t = s.trim();
  for (const [re, rep] of FULL_PHRASES) {
    if (re.test(t)) return s.replace(re, rep);
  }
  return null;
}

// Light partial fixes (only applied when no full-line phrase matched).
function applyPartial(s) {
  for (const [re, rep] of PARTIAL_PHRASES) s = s.replace(re, rep);
  return s;
}

function wordTranslate(seg) {
  let out = seg.replace(/[A-Za-z][A-Za-z'’+-]*/g, (w) => {
    const low = w.toLowerCase();
    if (KEEP.has(low)) return w; // keep acronyms / proper nouns verbatim
    const cap = w[0] === w[0].toUpperCase() && w.slice(1) === w.slice(1).toLowerCase();
    let t = W[low] || W[low.replace(/s$/,"")] || W[low.replace(/ed$/,"")] || W[low.replace(/ing$/,"")] || W[low.replace(/ly$/,"")] || W[low.replace(/'s$/,"")];
    if (t === undefined) return w;
    if (cap) t = t.charAt(0).toUpperCase() + t.slice(1);
    return t;
  });
  return out.replace(/[ \t]{2,}/g, " ");
}

// Translate prose while keeping tokens/emoji/URLs intact.
function translateProse(s) {
  if (!s.trim()) return s;
  const fp = applyFull(s);
  if (fp !== null) return fp;
  let x = applyPartial(s);
  // split keeping tokens (capturing group), translate only non-token pieces
  const parts = x.split(/(@@[LC]\d+@@)/);
  return parts.map((p) => (TOKEN_RE.test(p) ? p : wordTranslate(p))).join("");
}

function translateHeading(hashes, body) {
  // keep HTML anchor <a name="..."></a>
  const anchor = body.match(/<a\s+name=.*?<\/a>/);
  let title = body.replace(/<a\s+name=.*?<\/a>/, "").trim();
  title = title.replace(/\s*&\s*/g, " e ").replace(/\s+and\s+/g, " e "); // headings: & / and -> e
  const tr = translateProse(title);
  return hashes + " " + (anchor ? anchor[0] + " " : "") + tr;
}

function translateLine(masked) {
  // Heading
  const h = masked.match(/^(#{1,6})\s+(.*)$/);
  if (h) return translateHeading(h[1], h[2]);
  // Alert blockquote marker
  if (/^>\s*\[![\w]+\]\s*$/.test(masked)) return masked;
  // Blockquote with content: "> " or "> * "
  const bq = masked.match(/^(>\s*\*?\s?)(.*)$/);
  if (bq) {
    const prefix = bq[1];
    const rest = bq[2];
    if (!/[A-Za-z]{2,}/.test(rest)) return masked; // emoji-only
    const fp = applyFull(rest);
    return prefix + (fp !== null ? fp : translateProse(rest));
  }
  // List item
  const li = masked.match(/^(\s*[-*]\s+)(.*)$/);
  if (li) {
    const prefix = li[1];
    const rest = li[2];
    const idx = rest.lastIndexOf(" - ");
    if (idx !== -1) {
      const pre = rest.slice(0, idx);
      const desc = rest.slice(idx + 3);
      return prefix + pre + " - " + translateProse(desc);
    }
    // list item without description (tokens/emoji only)
    if (!/[A-Za-z]{3,}/.test(rest)) return masked;
    return masked;
  }
  // Standalone paragraph (may contain tokens)
  if (/[A-Za-z]{3,}/.test(masked)) return translateProse(masked);
  return masked;
}

const batches = ["batch_05","batch_06","batch_07","batch_08"];
let total = 0;
for (const b of batches) {
  const src = JSON.parse(readFileSync(join(srcDir, b + ".json"), "utf8"));
  const out = src.map((it) => ({ line: it.line, translated: translateLine(it.masked) }));
  writeFileSync(join(outDir, b + ".translated.json"), JSON.stringify(out, null, 0));
  total += out.length;
  console.log(`wrote ${b}.translated.json (${out.length} lines)`);
}
console.log(`TOTAL ${total} lines`);