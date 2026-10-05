# IA Gerativa Impressionante [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Uma lista de projetos e serviços de Inteligência Artificial Generativa moderna.

Artificial Generativo Inteligência é uma tecnologia que cria conteúdo original, como imagens, sons e textos usando algoritmos de aprendizado de máquina que são treinados em grandes quantidades de dados. Ao contrário de outras formas de IA, é capaz de criar saídas únicas e anteriormente invisíveis, como imagens fotorrealistas, arte digital, música e escrita. Essas saídas muitas vezes têm seu próprio estilo único e pode até ser difícil distinguir de obras criadas por humanos. A IA generativa tem uma ampla gama de aplicações em áreas como arte, entretenimento, marketing, academia e ciência da computação.

As contribuições para esta lista são bem-vindas. Antes de enviar suas sugestões, consulte o [Contribution Guidelines](CONTRIBUTING.md) para garantir que suas inscrições atendam aos critérios. Adicionar links através [pull requests](https://github.com/steven2358/awesome-generative-ai/pulls) ou criar uma [issue](https://github.com/steven2358/awesome-generative-ai/issues) para começar uma discussão. Mais projectos podem ser encontrados no [Discoveries List](DISCOVERIES.md), onde mostramos uma ampla gama de projetos de IA Generative.

## Índice

- [Leitura recomendada](#recommended-reading)
- [Texto](#text)
- [Codificação](#coding)
- [Agentes](#agents)
- [Imagem](#image)
- [Vídeo](#video)
- [Áudio](#audio)
- [Outros](#other)
- [Recursos de aprendizagem](#learning-resources)
- [Mais listas](#more-lists)

## Leitura recomendada

- [How Large Language Models Will Transform Science, Society, and AI](https://hai.stanford.edu/news/how-large-language-models-will-transform-science-society-and-ai) - Artigo que resume as capacidades e limitações do modelo GPT-3 e o seu potencial impacto na sociedade. Por Alex Tamkin e Deep Ganguli, 5 de fevereiro de 2021.
- [Generative AI: A Creative New World](https://www.sequoiacap.com/article/generative-ai-a-creative-new-world/) - Um exame abrangente da indústria de IA gerativa, oferecendo uma perspectiva histórica e análise aprofundada do ecossistema da indústria. Por Sonya Huang, Pat Grady e GPT-3, 19 de setembro de 2022.
- [A Coming-Out Party for Generative A.I., Silicon Valley's New Craze](https://www.nytimes.com/2022/10/21/technology/generative-ai.html) - Artigo sobre a ascensão da IA generativa, particularmente o sucesso do gerador de imagens de Difusão Estável e as controvérsias associadas. New York Times, 21 de outubro de 2022.
- [AI's New Creative Streak Sparks a Silicon Valley Gold Rush](https://www.wired.com/story/ais-new-creative-streak-sparks-a-silicon-valley-gold-rush/) - Artigo sobre o crescente hype e investimento em startups de IA geradoras, com várias indústrias explorando suas potenciais aplicações. Fio, 27 de Outubro de 2022.
- [ChatGPT Heralds an Intellectual Revolution](https://www.wsj.com/articles/artificial-intelligence-generative-ai-chatgpt-kissinger-84512912) - Uma obra de Henry Kissinger, Eric Schmidt e Daniel Huttenlocher. Wall Street Journal, 24 de fevereiro de 2023.

### Marcos

- [OpenAI API](https://openai.com/blog/openai-api/) - Anúncio da API OpenAI para modelos de IA de uso geral texto-texto baseado no GPT-3. Blog OpenAI, 11 de junho de 2020.
- [GitHub Copilot](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/) - Anúncio do Copilot, um novo programador de pares de IA que ajuda você a escrever um código melhor. GitHub blog, 29 de junho de 2021.
- [DALL·E 2](https://openai.com/blog/dall-e-2/) - Anúncio do lançamento da DALL·E 2, um sistema avançado de geração de imagens com resolução melhorada, capacidades de criação de imagens ampliadas e várias mitigação de segurança. OpenAI blog, 6 de abril de 2022.
- [Stable Diffusion Public Release](https://stability.ai/news-updates/stable-diffusion-public-release) - Anúncio do lançamento público da Difusão Estável, um modelo de geração de imagens baseado em IA treinado em um scrape amplo da internet e licenciado sob uma licença Creative ML OpenRAIL-M. Stable Diffusion blog, 22 de agosto de 2022.
- [ChatGPT](https://openai.com/blog/chatgpt/) - Anúncio do ChatGPT, um modelo de conversação treinado para responder perguntas de seguimento, admitir erros, desafiar premissas incorretas e rejeitar pedidos inapropriados. OpenAI blog, 30 de novembro de 2022.
- [Bing Search](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/) - A Microsoft anuncia uma nova versão de seu motor de busca Bing, alimentado por um modelo OpenAI da próxima geração. Microsoft blog, 7 de fevereiro de 2023.
- [LLaMA](https://ai.meta.com/blog/large-language-model-llama-meta-ai/) - Llama LLM, modelo de linguagem de 65 bilhões de parametros da Meta. Meta, 23 de Fevereiro de 2023. #opensource
- [GPT-4](https://openai.com/research/gpt-4) - Anúncio de GPT-4, um grande modelo multimodal. OpenAI blog, 14 de março de 2023.
- [DALL·E 3](https://openai.com/index/dall-e-3/) - Anúncio do gerador de imagens DALL·E 3. OpenAI blog, 20 de setembro de 2023.
- [Sora](https://openai.com/research/video-generation-models-as-world-simulators) - Apresentação de Sora, um grande modelo de geração de vídeo. OpenAI, 15 de fevereiro de 2024.

## Texto

### Modelos

- [OpenAI API](https://openai.com/api/) - A API do OpenAI fornece acesso a modelos GPT para linguagem natural, codificação, geração de imagens, áudio e desenvolvimento de agentes.
- [Gopher](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) - Gopher by DeepMind é um modelo de linguagem de parâmetros de 280 bilhões.
- [OPT](https://huggingface.co/facebook/opt-350m) - Transformers pré-treinados abertos (OPT) pelo Facebook é um conjunto de transformadores pré-treinados somente para decodificadores. [Announcement](https://ai.meta.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/).
- [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom) - BLOOM by Hugging Face é um modelo semelhante ao GPT-3 que foi treinado em 46 linguagens diferentes e 13 linguagens de programação. #opensource
- [Llama](https://www.llama.com/) - O modelo de linguagem de código aberto da Meta. #opensource
- [Claude](https://claude.ai/) - Fala com o Claude, um assistente de IA da Anthropic.
- [Vicuna-13B](https://lmsys.org/blog/2023-03-30-vicuna/) - Um chatbot de código aberto treinado pelo LLaMA em conversas compartilhadas pelo usuário coletadas do ShareGPT. #opensource
- [Mistral](https://mistral.ai/en/models) - LLMs de peso aberto por Mistral AI. #opensource
- [Grok](https://grok.x.ai/) - Um LLM por xAI com [open source](https://github.com/xai-org/grok-1) e pesos abertos. #opensource
- [Qwen](https://qwenlm.github.io/) - Uma série de LLMs desenvolvidos independentemente pela Alibaba Cloud. [#opensource](https://github.com/QwenLM/Qwen)
- [DeepSeek](https://huggingface.co/deepseek-ai) - Uma série de LLMs de código aberto por DeepSeek IA. [#opensource](https://github.com/deepseek-ai)
- [MiniMax](https://www.minimax.io/) - Modelos de fundação multimodal para geração de texto, fala, vídeo e música
- [Kimi K2](https://github.com/moonshotai/Kimi-K2) - Uma série de modelos de linguagem MoE de código aberto pela Moonshot AI para tarefas de agente. #opensource
- [GLM](https://github.com/zai-org/GLM-5) - Uma série de modelos de linguagem MoE de código aberto por Z.ai para tarefas agentivas. #opensource

### Chatbots

- [ChatGPT](https://chatgpt.com/) - ChatGPT by OpenAI é um grande modelo de linguagem que interage de forma conversacional.
- [Copilot](https://copilot.microsoft.com/) - Um companheiro diário de IA da Microsoft.
- [Gemini](https://gemini.google.com/) - Uma família de modelo multimodal de linguagem grande desenvolvido pelo Google Deepmind.
- [Meta AI](https://www.meta.ai/) - Assistente de IA Meta para fazer as coisas, criar imagens geradas por IA, obter respostas. Construído em Llama LLM.
- [DeepSeek](https://www.deepseek.com/) - Uma interface de chatbot com os modelos de linguagem de código aberto da DeepSeek. #opensource
- [Character.AI](https://character.ai/) - Caráter. IA permite criar caracteres e conversar com eles.
- [Pi](https://pi.ai) - Uma plataforma de IA personalizada disponível como assistente digital.
- [Qwen](https://chat.qwenlm.ai/) - Qwen chatbot com geração de imagem, processamento de documentos, integração de pesquisa web, compreensão de vídeo, etc.
- [Le Chat](https://chat.mistral.ai/) - Uma interface de chat para os modelos de linguagem da Mistral AI.
- [Kimi](https://www.kimi.com/) - Um assistente de IA da Moonshot IA com chat, pesquisa profunda, codificação e capacidades multi-agentes.
- [Z.ai](https://chat.z.ai/) - Uma plataforma de chatbot e agente de IA por Z.ai alimentado pela família de modelos GLM.

### Interfaces personalizadas

- [LibreChat](https://librechat.ai/) - LibreChat é uma interface de chat livre e de código aberto para IA assistente. [#opensource](https://github.com/danny-avila/LibreChat).
- [Chatbot UI](https://www.chatbotui.com/) - Uma interface de código aberto ChatGPT. [#opensource](https://github.com/mckaywrigley/chatbot-ui).

### Motores de busca

- [Perplexity AI](https://www.perplexity.ai/) - Ferramentas de busca de IA.
- [Exa](https://exa.ai/) - Pesquisa de modelos de linguagem.
- [Phind](https://phind.com/) - Motor de busca baseado em IA.
- [You.com](https://you.com/) - Um motor de busca construído em IA que fornece aos usuários uma experiência de pesquisa personalizada, mantendo seus dados 100% privados.
- [Komo](https://komo.ai/) - Um motor de busca com IA.

### Motores de busca locais

- [privateGPT](https://github.com/zylon-ai/private-gpt) - Faça perguntas aos seus documentos sem conexão à internet, usando o poder dos LLMs.
- [quivr](https://github.com/QuivrHQ/quivr) - Jogue todos os seus arquivos e converse com ele usando seu segundo cérebro de IA generativo usando LLMs & incorporations.

### Assistentes de escrita

- [Jasper](https://www.jasper.ai/) - Crie conteúdo mais rápido com inteligência artificial.
- [Compose AI](https://www.compose.ai/) - Compose AI é uma extensão gratuita do Chrome que reduz seu tempo de escrita em 40% com o autocompletamento alimentado por IA.
- [Rytr](https://rytr.me/) - Rytr é um assistente de escrita de IA que ajuda você a criar conteúdo de alta qualidade.
- [wordtune](https://www.wordtune.com/) - Assistente de escrita pessoal.
- [HyperWrite](https://hyperwriteai.com/) - HyperWrite ajuda você a escrever com confiança e fazer o seu trabalho mais rápido, da ideia ao rascunho final.
- [Moonbeam](https://www.gomoonbeam.com/) - Melhores blogs em uma fração do tempo.
- [copy.ai](https://www.copy.ai/) - Escreva melhor cópia de marketing e conteúdo com IA.
- [ChatSonic](https://writesonic.com/chat) - Um assistente com IA que permite a criação de texto e imagem.
- [Anyword](https://anyword.com/) - Qualquer palavra é IA assistente de escrita gera cópia eficaz para qualquer um.
- [Hypotenuse AI](https://www.hypotenuse.ai/) - Transforme algumas palavras-chave em artigos originais, perspicazes, descrições de produtos e cópia de redes sociais.
- [Lavender](https://www.lavender.ai/) - O assistente de email de lavanda ajuda você a obter mais respostas em menos tempo.
- [Lex](https://lex.page/) - Um processador de texto com inteligência artificial preparado, para que você possa escrever mais rápido.
- [Jenni](https://jenni.ai/) - Jenni é a assistente de escrita final que economiza horas de ideação e tempo de escrita.
- [QuillBot](https://quillbot.com) - Ferramenta de parafraseamento alimentada por IA.
- [Postwise](https://postwise.ai/) - Escreva tweets, agendar posts e aumentar o seu seguimento usando IA.
- [Copysmith](https://copysmith.ai/) - Solução de criação de conteúdo de IA para Enterprise & eCommerce.
- [Humanize-Text](https://github.com/lynote-ai/humanize-text) - Humanizador de texto IA com um pipeline de reescrita multilingue e exemplos passo a passo. #opensource

### Extensões do ChatGPT

- [WebChatGPT](https://chromewebstore.google.com/detail/webchatgpt-chatgpt-with-i/lpfemeioodjbpieminkklglpmhlngfcn) - Aumente seu ChatGPT solicita com resultados relevantes da web.
- [GPT for Sheets and Docs](https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654) - Extensão ChatGPT para Planilhas Google e Documentos Google.
- [YouTube Summary with ChatGPT](https://chromewebstore.google.com/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli) - Use o ChatGPT para resumir vídeos do YouTube.
- [AI Prompt Genius](https://chromewebstore.google.com/detail/ai-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo) - Descubra, compartilhe, importe e use os melhores prompts para o ChatGPT e salve seu histórico de chat localmente.
- [ShareGPT](https://sharegpt.com/) - Compartilhe suas conversas do ChatGPT e explore conversas compartilhadas por outros.
- [Merlin](https://www.getmerlin.in/) - ChatGPT Mais extensão em todos os sites.
- [Jetwriter](https://jetwriter.ai/) - Assistente de escrita de IA para Chrome, desktop e dispositivos móveis.
- [ChatGPT for Jupyter](https://github.com/TiesdeKok/chat-gpt-jupyter-extension) - Adicione várias funções auxiliares em Jupyter Notebooks e Jupyter Lab, alimentados por ChatGPT.
- [editGPT](https://www.editgpt.app/) - Facilmente revise, edite e rastreie alterações no seu conteúdo no chatGPT.
- [Forefront](https://www.forefront.ai/) - Uma experiência melhor do ChatGPT.
- [ChatGPT for Sheets, Docs, Slides, Forms](https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252) - Extensão ChatGPT para Planilhas Google, Documentos Google, Slides Google, Formulários Google.
- [GPT for Gmail](https://workspace.google.com/marketplace/app/gpt_for_gmail_ai_email_assistant_gemini/899305976589) - Assistente de e-mail de IA para o Gmail.

### Produtividade

- [ChatPDF](https://www.chatpdf.com/) - Converse com qualquer PDF.
- [Mem](https://mem.ai/) - Mem é o primeiro espaço de trabalho com IA que é personalizado para você. Amplifique sua criatividade, automatize o mundano e fique organizado automaticamente.
- [Taskade](https://www.taskade.com/) - Esboce tarefas, notas, gerou listas estruturadas e mapas mentais com AI Tashade.
- [Notion AI](https://www.notion.so/product/ai) - Escreva notas e documentos melhores e mais eficientes.
- [Nekton AI](https://nekton.ai) - Automatize seus fluxos de trabalho com IA. Descreva seus fluxos de trabalho passo a passo em linguagem simples.
- [Limitless](https://www.limitless.ai/) - Um assistente de memória de IA para gravar conversas e reuniões, gerar resumos e pesquisar interações passadas entre aplicativos e um wearable opcional.
- [NotebookLM](https://notebooklm.google/) - Uma ferramenta on-line de pesquisa e anotação para interagir com documentos, alimentados pelo Google Gemini.
- [Open Notebook](https://www.open-notebook.ai) - Uma implementação de código aberto do NotebookLM com mais flexibilidade e recursos. [#opensource](https://github.com/lfnovo/open-notebook)
- [Screenpipe](https://github.com/screenpipe/screenpipe) - Uma ferramenta de código aberto para gravação de tela e atividade de áudio com pesquisa, automação e suporte para LLMs locais. #opensource

### Assistentes de reuniões

- [Otter.ai](https://otter.ai/) - Um assistente de reunião que grava áudio, escreve notas, captura automaticamente slides e gera resumos.
- [Cogram](https://www.cogram.com/) - O Cograma toma notas automáticas em reuniões virtuais e identifica itens de ação.
- [Sybill](https://www.sybill.ai/) - Sybill gera resumos de chamadas de vendas, incluindo próximos passos, pontos de dor e áreas de interesse, combinando transcrições e insights baseados em emoções.
- [Loopin AI](https://www.loopinhq.com/) - Loopin é um espaço de trabalho colaborativo que não só permite gravar, transcrever e resumir reuniões usando IA, mas também permite que você organize automaticamente notas de reunião no topo do seu calendário.
- [Read AI](https://www.read.ai/) - Um copiloto de IA para onde quer que você trabalhe, tornando suas reuniões, e-mails e mensagens mais produtivas com resumos, descoberta de conteúdo e recomendações.
- [Fireflies.ai](https://fireflies.ai) - Transcrever, resumir, pesquisar e analisar todas as conversas de sua equipe.

### Academia

- [Elicit](https://elicit.org/) - O Elicit usa modelos de linguagem para ajudá-lo a automatizar fluxos de trabalho de pesquisa, como partes da revisão de literatura.
- [genei](https://www.genei.io/) - Resumir artigos acadêmicos em segundos e economizar 80% em seus tempos de pesquisa.
- [Explainpaper](https://www.explainpaper.com/) - Uma maneira melhor de ler artigos académicos. Envie um papel, destaque texto confuso, obter uma explicação.
- [Consensus](https://consensus.app/search/) - Consenso é um motor de busca que usa IA para encontrar respostas em pesquisas científicas.
- [scite](https://scite.ai/) - Uma plataforma para descobrir e avaliar artigos científicos.
- [SciSpace](https://scispace.com/) - Assistente de pesquisa de IA para a compreensão da literatura científica.
- [STORM](https://storm.genie.stanford.edu/) - Um sistema de curadoria de conhecimento alimentado por LLM que pesquisa um tema e gera um relatório completo com citações. [#opensource](https://github.com/stanford-oval/storm/)
- [alphaXiv](https://www.alphaxiv.org) - Discuta, descubra e leia artigos arXiv.
- [ASReview](https://asreview.nl/) - Ferramenta de IA de código aberto para revisões sistemáticas, ajudando pesquisadores a analisar grandes volumes de literatura acadêmica de forma eficiente. [#opensource](https://github.com/asreview/asreview)
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - Uma ferramenta de pesquisa profunda para pesquisar fontes acadêmicas, a web e documentos privados com LLMs locais ou em nuvem. [#opensource](https://github.com/LearningCircuit/local-deep-research)
- [Rayyan](https://www.rayyan.ai/) - Uma plataforma alimentada por IA para gerenciar revisões sistemáticas da literatura com ferramentas colaborativas de triagem e gerenciamento de dados.
- [Paper2Agent](https://paper2agent.ai/) - Converte trabalhos de pesquisa e bases de código associadas em servidores MCP testados e agentes interativos de IA. [#opensource](https://github.com/jmiao24/Paper2Agent)
- [Ai2 ASTA](https://asta.allen.ai/) - Assistente de pesquisa acadêmica para encontrar artigos, gerar relatos de literatura citados e analisar dados de pesquisa.

### Quadros de orientação

- [Arena](https://arena.ai/) - Uma plataforma aberta para benchmarking de IA crowdsourced, hospedada por pesquisadores no UC Berkeley SkyLab.
- [Artificial Analysis](https://artificialanalysis.ai/) - Análise Artificial fornece benchmarks objetivos e informações para ajudar a escolher modelos de IA e provedores de hospedagem.
- [imgsys](https://imgsys.org/rankings) - Uma arena de modelos de imagens generativas de fal.ai.
- [OpenRouter LLM Rankings](https://openrouter.ai/rankings) - Modelos de idiomas classificados e analisados pelo uso em aplicativos.
- [SEAL LLM Leaderboard](https://labs.scale.com/leaderboard) - Pontos de referência LLM orientados por especialistas e leaderboards de modelos de IA atualizados.
- [LLM Stats](https://llm-stats.com/) - Compare modelos de IA entre benchmarks, preços, velocidade e janela de contexto.

### Outros geradores de texto

- [EmailTriager](https://www.emailtriager.com/) - Use IA para redigir automaticamente as respostas de e- mail em segundo plano.
- [AI Poem Generator](https://www.aipoemgenerator.org) - AI Poem Generator escreve um belo poema de rima para você em qualquer assunto, dado um prompt de texto.

## Codificação

### Assistentes de codificação

- [GitHub Copilot](https://github.com/features/copilot) - O GitHub Copilot usa o OpenAI Codex para sugerir código e funções inteiras em tempo real, diretamente do seu editor.
- [OpenAI Codex](https://platform.openai.com/docs/guides/code/) - Um sistema de IA pelo OpenAI que traduz linguagem natural em código.
- [Ghostwriter](https://blog.replit.com/ai) - Um programador de pares movido por IA por replit.
- [Amazon Q](https://aws.amazon.com/q/) - O assistente generativo de IA AWS que ajuda a responder perguntas, escrever código e automatizar tarefas.
- [tabnine](https://www.tabnine.com/) - Codifice mais rápido com completa linha e completa função de completar código.
- [Stenography](https://stenography.dev/) - Documentação automática do código.
- [Mintlify](https://mintlify.com/) - Escritor de documentação alimentado por IA.
- [AI2sql](https://www.ai2sql.io/) - Com o AI2sql, engenheiros e não engenheiros podem facilmente escrever consultas SQL eficientes e livres de erros sem saber SQL.
- [Qodo](https://www.qodo.ai/) - Ferramenta de revisão de código de IA com fluxos de trabalho agentes para IDEs, requisições e segurança.
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - Ferramenta com IA para análise automática de RP, feedback, sugestões e muito mais.
- [TurboPilot](https://github.com/ravenscroftj/turbopilot) - Um clone auto-hospedado copilot que usa a biblioteca por trás do lhama.cpp para executar o modelo Salesforce Codegen de 6 bilhões de parâmetros em 4 GB de RAM.
- [GPT-Code UI](https://github.com/ricklamers/gpt-code-ui) - Uma implementação de código aberto do interpretador ChatGPT Code do OpenAI. #opensource
- [Open Interpreter](https://github.com/openinterpreter/open-interpreter) - Intérprete de Código do OpenAI no seu terminal, a correr localmente.
- [Continue](https://www.continue.dev/) - Assistente de código de IA em código aberto. Conecte qualquer modelo e qualquer contexto para criar experiências de bate-papo e autocompletar personalizadas dentro do IDE. [#opensource](https://github.com/continuedev/continue)
- [RooCode](https://github.com/RooCodeInc/Roo-Code) - Um agente de codificação autónomo alimentado por IA integrado diretamente no Código VS. [#opensource](https://github.com/RooCodeInc/Roo-Code)
- [Windsurf](https://windsurf.com/) - Um IDE IA-nativo que combina edição de código com assistência avançada de IA durante todo o processo de desenvolvimento.
- [Plandex](https://github.com/plandex-ai/plandex) - Motor de programação de IA baseado em código aberto para tarefas complexas. [#opensource](https://github.com/plandex-ai/plandex)
- [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) - Um assistente de IA configurável de código aberto no Jupyter Notebook e JupyterLab que suporta 100+ LLMs, incluindo modelos hospedados localmente de Ollama e GPT4All. #opensource
- [DataLine](https://dataline.app) - Uma ferramenta de análise e visualização de dados orientada por IA. [#opensource](https://github.com/RamiAwar/dataline)
- [v0](https://v0.dev) - Geração de UI orientada por prompt para React e Next.js, criando componentes prontos para produção.
- [Lovable](https://lovable.dev) - Geração de aplicativos conversacional, transformando ideias em código implantável.
- [aider](https://aider.chat/) - Programação de pares de IA em seu terminal, suportando vários provedores de LLM. [#opensource](https://github.com/paul-gauthier/aider)
- [Kilo](https://kilo.ai/) - Assistente de codificação de IA de código aberto para VS Code, JetBrains e CLI. [#opensource](https://github.com/Kilo-Org/kilocode)

### Ferramentas de desenvolvimento

- [Cohere](https://cohere.com/) - A Cohere fornece acesso a modelos avançados de linguagem grande e ferramentas NLP.
- [Haystack](https://haystack.deepset.ai/) - Um framework para construir aplicações NLP (por exemplo, agentes, busca semântica, pergunta-resposta) com modelos de linguagem.
- [LangChain](https://langchain.com/) - Um framework para desenvolver aplicações alimentadas por modelos de linguagem.
- [gpt4all](https://github.com/nomic-ai/gpt4all) - Um chatbot treinado em uma coleção maciça de dados assistentes limpos, incluindo código, histórias e diálogo.
- [LLM App](https://github.com/pathwaycom/llm-app) - Biblioteca Python de código aberto para criar pipeline de dados habilitados para LLM em tempo real.
- [LMQL](https://lmql.ai/) - LMQL é uma linguagem de consulta para grandes modelos de linguagem.
- [LlamaIndex](https://www.llamaindex.ai/) - Um framework de dados para construir aplicações LLM sobre dados externos.
- [Phoenix](https://phoenix.arize.com/) - Ferramenta de código aberto para observação ML que funciona em seu ambiente de notebook, por Arize. Monitore e ajuste fino modelos LLM, CV e tabular.
- [Cursor](https://cursor.com/) - Cursor é o IDE do futuro, construído para a programação de pares com IA poderosa.
- [SymbolicAI](https://github.com/ExtensityAI/symbolicai) - Uma estrutura neuro-simbólica para construir aplicações com LLMs no núcleo.
- [Vanna.ai](https://vanna.ai/) - Um framework Python RAG de código aberto para geração SQL e funcionalidade relacionada. [#opensource](https://github.com/vanna-ai/vanna)
- [Portkey](https://portkey.ai/) - Uma plataforma LLMOps completa para monitoramento, cache e gerenciamento de LLM.
- [agenta](https://github.com/agenta-ai/agenta) - Uma plataforma LLMOps de código aberto para engenharia, avaliação e implantação rápidas. #opensource
- [Together AI](https://www.together.ai/) - Train, fine-tune-e executar inferência em modelos de IA em chamas rápido, a baixo custo, e em escala de produção.
- [Gitingest](https://gitingest.com/) - Transforme qualquer repositório Git em um simples texto digest de seu codebase para que ele possa ser alimentado em qualquer LLM. [#opensource](https://github.com/cyclotruc/gitingest)
- [Repomix](https://repomix.com/) - Empacote sua base de códigos em formatos amigos da IA. [#opensource](https://github.com/yamadashy/repomix)
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Inferência do modelo LLaMA da Meta (e outros) em puro C/C++. #opensource
- [bitnet.cpp](https://github.com/microsoft/BitNet) - Framework de inferência oficial para LLMs de 1 bits, pela Microsoft. [#opensource](https://github.com/microsoft/BitNet)
- [OpenRouter](https://openrouter.ai/) - Uma interface unificada para LLMs. [#opensource](https://github.com/OpenRouterTeam)
- [Ludwig](https://github.com/ludwig-ai/ludwig) - Um framework de baixo código para a construção de modelos personalizados de IA como LLMs e outras redes neurais profundas. [#opensource](https://github.com/ludwig-ai/ludwig)
- [Unsloth](https://unsloth.ai) - Uma biblioteca Python para afinar LLMs [#opensource](https://github.com/unslothai/unsloth).
- [OpenLIT](https://github.com/openlit/openlit) - Plataforma de observação de código aberto GenAI e LLM nativa da OpenTelemetria com traços e métricas. #opensource
- [Helicone AI](https://helicone.ai/) - Plataforma de observação LLM de código aberto para registrar, monitorar e depurar aplicativos de IA. [#opensource](https://github.com/Helicone/helicone)
- [Wren AI](https://www.getwren.ai/oss) - Um text-to-SQL de código aberto e um agente de BI generativo com uma camada semântica. [#opensource](https://github.com/Canner/WrenAI)
- [Cleanlab](https://cleanlab.ai/tlm/) - Uma API para detectar e marcar alucinações em saídas LLM.
- [Opik](https://github.com/comet-ml/opik) - Uma plataforma de código aberto para rastrear, avaliar e monitorar aplicações LLM. [#opensource](https://github.com/comet-ml/opik)
- [Langfuse](https://langfuse.com/) - Uma plataforma de engenharia LLM de código aberto para rastreamento, avaliação, gerenciamento rápido e métricas. [#opensource](https://github.com/langfuse/langfuse)
- [MLflow](https://mlflow.org/) - Uma plataforma de código aberto para rastrear experimentos ML, avaliar modelos e prompts, implantar modelos e adicionar observação LLM. [#opensource](https://github.com/mlflow/mlflow)
- [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - Um SDK de confiança zero para anonimizar PII localmente antes de enviar prompts para LLMs e reidratar sem problemas a resposta.
- [Agentset](https://agentset.ai/) - Uma plataforma de código aberto para construção e avaliação de RAG e aplicações de agentes. [#opensource](https://github.com/agentset-ai/agentset)
- [Manifest](https://manifest.build) - Um roteador LLM de código aberto que encaminha o agente solicita o modelo mais econômico, com limites de uso e benchmarking de modelo. [#opensource](https://github.com/mnfst/manifest)
- [ai-i18n](https://github.com/i18n-actions/ai-i18n) - Uma ação GitHub que usa LLMs (Claude, GPT, Ollama) para traduzir automaticamente arquivos de localização i18n. #opensource
- [Groq](https://groq.com/) - Uma API de inferência de nuvem para executar LLMs de código aberto, alimentado por hardware LPU personalizado.
- [Model Context Protocol](https://modelcontextprotocol.io/) - Um padrão aberto para conectar modelos de IA a ferramentas externas e fontes de dados. [MCP Registry](https://registry.modelcontextprotocol.io/) [#opensource](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [Steel Browser](https://github.com/steel-dev/steel-browser) - Um navegador de código aberto sandbox e infraestrutura de automação para agentes de IA, com gerenciamento de sessão, capturas de tela, PDFs, proxies e ferramentas anti-bot. #opensource
- [Bifrost](https://github.com/maximhq/bifrost) - Um gateway LLM de código aberto com roteamento, balanceamento de carga, guardiões e observação para mais de 1000 modelos. #opensource
- [fal](https://fal.ai/) - Uma plataforma de desenvolvimento para acessar e implantar modelos de geração de imagens, vídeo, áudio e 3D.

### Áreas de reprodução

- [OpenAI Playground](https://platform.openai.com/playground) - Explore recursos, tutoriais, documentos de API e exemplos dinâmicos.
- [Google AI Studio](https://aistudio.google.com/) - Uma ferramenta baseada na web para protótipo com Gêmeos e modelos experimentais.
- [GitHub Models](https://github.com/marketplace/models) - Encontre e experimente modelos de IA para desenvolver uma aplicação de IA gerativa.

### Implantação LLM local

- [Ollama](https://github.com/ollama/ollama) - Comece a funcionar com grandes modelos de linguagem localmente.
- [Open WebUI](https://github.com/open-webui/open-webui) - Uma plataforma de IA auto-alojada extensível, rica em recursos e amigável projetada para operar totalmente offline. #opensource
- [Jan](https://jan.ai/) - Execute LLMs como Mistral ou Llama2 localmente e offline em seu computador, ou conecte-se a APIs de IA remotas. [#opensource](https://github.com/janhq/jan)
- [Msty](https://msty.ai/) - Uma interface simples e poderosa para modelos de IA locais e online.
- [PyGPT](https://pygpt.net/) - Assistente pessoal de IA desktop com chat, visão, agentes, geração de imagens, ferramentas e comandos, controle de voz e muito mais. #opensource
- [LLM](https://llm.datasette.io/) - Um utilitário CLI e biblioteca Python para interagir com modelos de linguagem grandes, remoto e local. [#opensource](https://github.com/simonw/llm)
- [LM Studio](https://lmstudio.ai) - Baixe e execute LLMs locais em seu computador.
- [RunThisLLM](https://runthisllm.com) - Veja quais LLMs você pode executar em seu hardware.
- [Harbor](https://github.com/av/harbor) - Um kit de ferramentas containerizado para executar backends LLM locais, UIs e serviços de suporte com um comando. #opensource
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile-ai) - Reagir aplicativo nativo para executar LLMs, modelos de visão e Difusão estável no dispositivo no iOS e Android sem acesso à internet. #opensource
- [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) - Servidor de inferência local compatível com o OpenAI LLM otimizado para o Apple Silicon, com suporte a chamada, raciocínio, visão e saída estruturada. #opensource

## Agentes

### Agentes autónomos

- [Auto-GPT](https://github.com/Significant-Gravitas/AutoGPT) - Uma tentativa experimental de código aberto para tornar o GPT-4 totalmente autônomo.
- [babyagi](https://github.com/yoheinakajima/babyagi) - Um sistema de gestão de tarefas alimentado por IA.
- [AgentGPT](https://github.com/reworkd/AgentGPT) - Montar, configurar e implantar agentes de IA autônomos em seu navegador.
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) - Especifique o que você quer que ele construa, o IA pede esclarecimentos, e então o constrói.
- [GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer) - Engenharia automática. Gera, testa e classifica os melhores.
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - O Framework Multi-Agente: Dado o requisito de uma linha, retorno PRD, design, tarefas, repo.
- [AutoGen](https://github.com/microsoft/autogen) - AutoGen é um framework que permite o desenvolvimento de aplicações LLM usando vários agentes que podem conversar entre si para resolver tarefas.
- [GPT Pilot](https://github.com/Pythagora-io/gpt-pilot) - Dev ferramenta que escreve aplicativos escaláveis do zero, enquanto o desenvolvedor supervisiona a implementação.
- [Devin](https://devin.ai/) - Um engenheiro autônomo de software de IA pela Cognition Labs.
- [OpenHands](https://github.com/OpenHands/OpenHands) - Um agente autônomo projetado para navegar pelas complexidades da engenharia de software. #opensource
- [Davika](https://github.com/stitionai/devika) - Um engenheiro de software de IA. #opensource
- [n8n](https://n8n.io/) - Uma plataforma de automação de fluxo de trabalho que combina recursos de IA com automação de processo de negócios.
- [Sauna](https://www.sauna.ai) - Um assistente de IA construído para completar o contexto. Ele aprende o seu gosto, detecta padrões ocultos, aumenta o seu contexto cerebral e funciona proativamente.
- [Claude Code](https://code.claude.com) - A ferramenta de codificação agente do Anthropic que vive em seu terminal e ajuda você a transformar ideias em código.
- [Gemini CLI](https://geminicli.com) - Um agente de IA de código aberto que traz o poder da Gemini diretamente para o seu terminal. [#opensource](https://github.com/google-gemini/gemini-cli)
- [OpenCode](https://opencode.ai) - O agente de código de IA de código aberto. [#opensource](https://github.com/anomalyco/opencode)
- [Mastra](https://mastra.ai) - Um framework TypeScript para a construção de agentes de IA, fluxos de trabalho e aplicativos. [#opensource](https://github.com/mastra-ai/mastra)
- [OpenClaw](https://openclaw.ai) - Um assistente pessoal de IA que você executa em seus próprios dispositivos. [#opensource](https://github.com/openclaw/openclaw)
- [moltbook](https://www.moltbook.com) - Uma rede social para agentes de IA.
- [AgentMail](https://www.agentmail.to) - Caixas de e-mail para agentes de IA.
- [Openwork](https://openwork.bot) - Agentes de IA contratam uns aos outros, completam o trabalho, verificam os resultados e ganham fichas.
- [Agent Skills](https://agentskills.io) - Formato aberto e referência SDK para recursos de embalagem reutilizáveis e experiência para agentes de IA. [#opensource](https://github.com/agentskills/agentskills)
- [PraisonAI](https://github.com/MervinPraison/PraisonAI) - Um framework para a construção de sistemas de IA multi-agentes com fluxos de trabalho, integrações de ferramentas e memória. #opensource
- [Hermes Agent](https://hermes-agent.nousresearch.com) - Um agente pessoal com memória, integrações de mensagens e execução de ferramentas sandbox. [#opensource](https://github.com/NousResearch/hermes-agent)
- [OpenAgents](https://github.com/openagents-org/openagents) - Plataforma de código aberto para a construção de redes de agentes de IA com suporte multiprotocolo (WebSocket, gRPC, HTTP, MCP, A2A). #opensource
- [Dorothy](https://github.com/Charlie85270/Dorothy) - Um aplicativo de desktop de código aberto para orquestrar vários agentes AI CLI simultaneamente com automações e gerenciamento Kanban. #opensource
- [Hive](https://github.com/aden-hive/hive) - Um framework multi-agente de código aberto com gráficos gerados automaticamente, loops de evolução e integração MCP. #opensource

### Assistentes personalizados

- [Poe](https://poe.com/) - Poe dá acesso a uma variedade de bots.
- [GPT Builder](https://chatgpt.com/gpts/editor) - Assistente para criar assistentes baseados em GPT.

## Imagem

### Modelos

- [DALL·E 2](https://openai.com/dall-e-2/) - DALL·E 2 by OpenAI é um novo sistema de IA que pode criar imagens realistas e arte a partir de uma descrição em linguagem natural.
- [Stable Diffusion](https://huggingface.co/CompVis/stable-diffusion-v1-4) - Difusão estável por AI de Estabilidade é um modelo de texto-imagem de última geração que gera imagens de texto. #opensource
- [Midjourney](https://www.midjourney.com/) - Midjourney é um laboratório de pesquisa independente que explora novos médiuns de pensamento e amplia os poderes imaginativos da espécie humana.
- [Imagen](https://imagen.research.google/) - Imagen by Google é um modelo de difusão texto-imagem com um grau sem precedentes de fotorealismo e um nível profundo de compreensão da linguagem.
- [Make-A-Scene](https://ai.meta.com/blog/greater-creative-control-for-ai-image-generation/) - Make-A-Scene by Meta é um método generativo multimodal de IA coloca o controle criativo nas mãos de pessoas que o usam, permitindo-lhes descrever e ilustrar sua visão através de descrições de texto e esboços de forma livre.
- [DragGAN](https://github.com/XingangPan/DragGAN) - Arraste seu GAN: Manipulação interativa baseada em pontos no Manifold de Imagem Gerativa.
- [Flux](https://github.com/black-forest-labs/flux) - Modelos de texto para imagem da Black Forest Labs com saída fotorrealística de alta qualidade. #opensource

### Serviços

- [Craiyon](https://www.craiyon.com/) - Craiyon, anteriormente DALL-E mini, é um modelo de IA que pode desenhar imagens de qualquer prompt de texto.
- [DreamStudio](https://stability.ai/dreamstudio) - DreamStudio é uma interface fácil de usar para criar imagens usando o modelo de geração de imagens de Difusão Estável.
- [Artbreeder](https://www.artbreeder.com/) - Artbreeder é um novo tipo de ferramenta criativa que capacita os usuários a criatividade, tornando mais fácil colaborar e explorar.
- [Magic Eraser](https://magicstudio.com/magiceraser/) - Remova coisas indesejadas das imagens em segundos.
- [Imagine by Magic Studio](https://magicstudio.com/imagine) - Uma ferramenta do Magic Studio que permite que você se expresse apenas descrevendo o que está em sua mente.
- [Alpaca](https://www.getalpaca.io/) - Plug-in do Photoshop de Difusão estável.
- [Patience.ai](https://www.patience.ai/) - Paciência.ai é um aplicativo para criar imagens com Difusão estável, uma IA de ponta desenvolvida pela Estabilidade. IA.
- [GenShare](https://www.genshare.io/) - Gerar arte em segundos de graça. Possuir e compartilhar o que você cria. Um estúdio generativo multimídia, democratizando design e criatividade.
- [Playground](https://playground.com/) - Playground é um criador de imagens de IA online gratuito para usar. Use-o para criar arte, mensagens de mídia social, apresentações, cartazes, vídeos, logotipos e muito mais.
- [modyfi](https://www.modyfi.com/) - Uma plataforma de design baseada em navegador com geração de imagem, animação e colaboração em tempo real.
- [PhotoRoom](https://www.photoroom.com/) - Crie imagens de produto e retrato usando apenas o telefone. Remover o fundo, alterar o fundo e mostrar produtos.
- [Photo AI](https://photoai.com/ai-avatars) - Crie seus próprios avatares gerados por IA.
- [ClipDrop](https://clipdrop.co/) - Criar visuais profissionais sem um estúdio de fotos, alimentado por [stability.ai](https://stability.ai/).
- [Lensa](https://prisma-ai.com/lensa) - Um aplicativo de edição de imagem tudo-em-um que inclui a geração de avatares personalizados usando Difusão estável.
- [RunDiffusion](https://rundiffusion.com/) - Espaço de trabalho baseado em nuvem para criar arte gerada por IA.
- [Ideogram](https://ideogram.ai/) - Uma plataforma texto-imagem para tornar a expressão criativa mais acessível.
- [Bing Image Creator](https://www.bing.com/images/create) - Gerador de texto para imagem baseado em DALLE·3 com características de segurança.
- [KREA](https://www.krea.ai/) - Gere visuais de alta qualidade com uma IA que conheça seus estilos, conceitos ou produtos.
- [Nightcafe](https://creator.nightcafe.studio/) - NightCafe Creator é um aplicativo AI Art Generator com vários métodos de geração de arte de IA.
- [Leonardo AI](https://leonardo.ai/) - Crie ativos visuais de qualidade de produção para seus projetos com qualidade, velocidade e estilo sem precedentes.
- [Recraft](https://www.recraft.ai/) - Uma ferramenta de IA que permite aos criadores facilmente gerar e iterar imagens originais, arte vetorial, ilustrações, ícones e gráficos 3D.
- [Reve Image](https://reve.com/) - Um modelo treinado desde o início para se destacar na rápida adesão, estética e tipografia.
- [Magnific](https://www.magnific.com/) - Ferramentas de design com IA, incluindo geração de imagem, remoção de fundo e modelos criativos.
- [FigureLabs](https://www.figurelabs.ai/) - Uma ferramenta de IA para gerar figuras científicas prontas para publicação em formato vetorial a partir de descrições de texto ou esboços.

### Desenho gráfico

- [Brandmark](https://brandmark.io/) - Ferramenta de design de logotipo baseada em IA.
- [Gamma](https://gamma.app/) - Crie belas apresentações e páginas web sem nenhum dos trabalhos de formatação e design.
- [Microsoft Designer](https://designer.microsoft.com/) - Projetos impressionantes em um flash.
- [Napkin](https://www.napkin.ai/) - Ferramenta de IA para gerar diagramas, gráficos e infográficos de texto.

### Bibliotecas de imagens

- [Lexica](https://lexica.art/) - Motor de busca de difusão estável.
- [OpenArt](https://openart.ai/) - Pesquisa 10M+ de prompts, e gera AI art via Difusão estável, DALL·E 2.
- [PromptHero](https://prompthero.com/) - Procura prompts para modelos como Difusão estável, ChatGPT, Midjourney, etc.
- [PromptBase](https://promptbase.com/) - Procura prompts de engenheiros de ponta. Vende os teus próprios avisos.

### Modelar bibliotecas

- [Civitai](https://civitai.com/) - Ferramenta de partilha de modelos de IA orientada para a comunidade.
- [Stable Diffusion Models](https://rentry.org/sdmodels) - Uma lista abrangente de pontos de controle de difusão estável em rentry.org.

### Recursos de difusão estáveis

- [Stable Horde](https://stablehorde.net/) - Um aglomerado distribuído de trabalhadores de Difusão Estável.
- [DiffusionDB](https://diffusiondb.com/) - Uma lista de todos os aplicativos públicos, ferramentas de desenvolvimento, guias e plugins para Difusão estável. [Airtable version](https://airtable.com/shr0HlBwbw3nZ8Ht3/tblxOCylXV8ynh7ti).
- [PublicPrompts](https://publicprompts.art/) - Uma coleção de prompts livres para Difusão Estável.
- [Hugging Face Diffusion Models Course](https://github.com/huggingface/diffusion-models-class) - Materiais Python para o curso online em modelos de difusão por [@huggingface](https://github.com/huggingface).
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - Uma interface baseada em nós para construir e executar fluxos de trabalho de difusão estável. [#opensource](https://github.com/comfyanonymous/ComfyUI)

## Vídeo

- [Runway](https://runwayml.com/) - Ferramentas de IA mágicas, colaboração em tempo real, edição de precisão e muito mais. A sua suite de criação de conteúdo da próxima geração.
- [Synthesia](https://www.synthesia.io/) - Crie vídeos de texto simples em minutos.
- [Colossyan](https://www.colossyan.com/) - Aprendizado & Desenvolvimento focado criador de vídeo. Use avatares de IA para criar vídeos educacionais em vários idiomas.
- [Fliki](https://fliki.ai/) - Crie texto para vídeo e texto para conteúdo de fala com as vozes ai powered em minutos.
- [Pictory](https://pictory.ai/) - A poderosa IA do Pictory permite criar e editar vídeos de qualidade profissional usando texto.
- [Pika](https://pika.art/) - Uma plataforma de ideia para vídeo que leva a sua criatividade ao movimento.
- [HeyGen](https://app.heygen.com/) - Transforme scripts em vídeos falantes com avatares de IA personalizáveis em minutos.
- [Luma Dream Machine](https://lumalabs.ai/app) - Um modelo de IA que faz vídeos de alta qualidade e realistas rapidamente de texto e imagens.
- [KLING AI](https://kling.ai/) - Ferramentas para criar imagens e vídeos imaginativos.
- [Hailuo AI](https://hailuoai.video/) - Gerador de texto para vídeo.
- [Google Flow](https://labs.google/fx/tools/flow) - Uma ferramenta de produção de filmes de IA do Google, alimentada pela Veo.
- [Seedance 2.0](https://seed.bytedance.com/en/seedance2_0) - Um modelo imagem-vídeo e texto-vídeo desenvolvido pela Niobotics ByteDance.
- [MaxVideoAI](https://maxvideoai.com/examples) - Um espaço de trabalho para gerar e comparar vídeos em vários modelos de vídeo de IA.
- [HyperFrames](https://hyperframes.heygen.com/) - Um framework para agentes de IA para renderizar vídeos escrevendo HTML, CSS e JavaScript. [#opensource](https://github.com/heygen-com/hyperframes)

### Avatares

- [D-ID](https://www.d-id.com/) - Crie e interaja com avatares falantes ao toque de um botão.
- [HeyGen](https://app.heygen.com/) - Transforme scripts em vídeos falantes com avatares de IA personalizáveis em minutos.
- [Affogato](https://affogato.ai/) - Crie anúncios de vídeo gerados por IA para TikTok, Reels e Shorts.

### Animação

- [Autodesk Flow Studio](https://www.autodesk.com/products/flow-studio) - Ferramenta com IA para animar e composicionar caracteres CG em imagens ao vivo.

## Áudio

### Texto- a- fala

- [Eleven Labs](https://elevenlabs.io/) - Gerador de voz IA.
- [Resemble AI](https://www.resemble.ai/) - Gerador de voz de IA e clonagem de voz para texto para discurso.
- [WellSaid](https://www.wellsaid.io/) - Converter texto para voz em tempo real.
- [TorToiSe](https://github.com/neonbjb/tortoise-tts) - Um sistema multi-voz text-to-speech treinado com ênfase na qualidade. #opensource
- [Bark](https://github.com/suno-ai/bark) - Um modelo de texto para áudio baseado em transformadores. #opensource
- [TTS WebUI](https://github.com/rsxdalv/TTS-WebUI) - UI Web para executar várias ferramentas de texto para fala, geração de música e áudio. #opensource

### Discurso-a-texto

- [Whisper](https://openai.com/index/whisper/) - Reconhecimento de fala robusto através de supervisão fraca em larga escala. [#opensource](https://github.com/openai/whisper)
- [Wispr Flow](https://wisprflow.ai/) - Flow torna a escrita rápida com ditado de voz sem costura para qualquer aplicativo em seu computador.
- [Vibe Transcribe](https://thewh1teagle.github.io/vibe/) - Solução única para transcrição de áudio e vídeo sem esforço. [#opensource](https://github.com/thewh1teagle/vibe)
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - Porto do modelo Whisper do OpenAI em C/C++. #opensource
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - Um cliente CLI Whisper compatível com o cliente OpenAI original, usando o CTranslate2 para inferência mais rápida. [#opensource](https://github.com/Softcatala/whisper-ctranslate2)
- [NeMo](https://github.com/NVIDIA-NeMo/Speech) - Um framework de código aberto da NVIDIA para a construção de sistemas de IA de fala, incluindo reconhecimento automático de fala e texto-para-fala. #opensource
- [Parakeet](https://huggingface.co/collections/nvidia/parakeet-asr-659711f49d1469e51546e021) - Uma família de modelos de reconhecimento de fala aberto pela NVIDIA, incluindo streaming e variantes multilingues. #opensource

### Música

- [Harmonai](https://www.harmonai.org/) - Somos uma organização orientada para a comunidade lançando ferramentas de áudio geradoras de código aberto para tornar a produção musical mais acessível e divertida para todos.
- [Mubert](https://mubert.com/) - Um ecossistema de música sem direitos autorais para criadores de conteúdo, marcas e desenvolvedores.
- [MusicLM](https://google-research.github.io/seanet/musiclm/examples/) - Um modelo do Google Research para gerar música de alta fidelidade a partir de descrições de texto.
- [AudioCraft](https://audiocraft.metademolab.com/) - Uma base de código de parada única para necessidades de áudio gerativas, por Meta. Inclui MusicGen para música e AudioGen para sons. #opensource
- [Stable Audio](https://stability.ai/stable-audio) - Áudio estável é estabilidade O primeiro produto da IA para geração de música e efeitos sonoros.
- [AIVA](https://www.aiva.ai/) - Assistente de geração de música baseada em IA. Escolha entre mais de 250 estilos.
- [Suno AI](https://suno.com/) - Qualquer um pode fazer uma boa música. Nenhum instrumento necessário, apenas imaginação. Da mente à música.
- [Udio](https://www.udio.com/) - Descubra, crie e compartilhe música com o mundo.

## Outros

- [PromptBase](https://promptbase.com/) - Um mercado para comprar e vender avisos de qualidade para DALL·E, GPT-3, Midjourney, Difusão estável.
- [This Image Does Not Exist](https://thisimagedoesnotexist.com/) - Teste sua capacidade de dizer se uma imagem é humana ou gerada por computador.
- [Have I Been Trained?](https://haveibeentrained.com/) - Verifique se sua imagem foi usada para treinar modelos de arte de IA populares.
- [AI Dungeon](https://aidungeon.io/) - Um jogo baseado em texto aventura-história que você dirige (e estrela em) enquanto a IA traz-lo para a vida.
- [Clickable](https://www.clickable.so/) - Gerar anúncios em segundos com IA. Anúncios bonitos, consistentes com a marca e altamente convertidos para todos os canais de marketing.
- [Scale Spellbook](https://scale.com/genai-platform) - Crie, compare e implante aplicativos de modelo de linguagem grande com Scale Spellbook.
- [Scenario](https://www.scenario.com/) - Bens de jogo gerados por IA.
- [Teleprompter](https://github.com/danielgross/teleprompter) - Uma IA no dispositivo para suas reuniões que escuta você e faz sugestões carismáticas de citação.
- [FinChat](https://finchat.io/) - Utilizando IA, a FinChat gera respostas a perguntas sobre empresas públicas e investidores.
- [Morpher AI](https://morpher.com/ai) - A Morpher AI oferece insights e análises em tempo real para qualquer mercado.
- [Whimsical AI](https://whimsical.com/ai) - Mapeamento de mente alimentado por GPT, fluxogramas e ferramentas visuais para desenvolvimento rápido de ideias e organização de processos.
- [Selfies with Sama](https://selfies-with-sama.vost.ai) - Tira uma foto com um bilionário da vida real!

## Recursos de aprendizagem

- [Learn Prompting](https://learnprompting.org/) - Um curso livre de código aberto sobre comunicação com inteligência artificial.
- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) - Guia e recursos para engenharia rápida.
- [ChatGPT prompt engineering for developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - Um curto curso de Isa Fulford (OpenAI) e Andrew Ng (DeepLearning.AI).
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - Exemplos e guias para usar a API OpenAI.
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Estratégias e táticas para obter melhores resultados de modelos de linguagem grandes.
- [PromptPerfect](https://promptperfect.jina.ai/) - Ferramenta para engenharia rápida.
- [Anthropic courses](https://github.com/anthropics/courses) - Cursos de Educação Antrópicos.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Um guia para construir o seu próprio LLM de trabalho, por Sebastian Raschka.
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Um DeepLearning gratuito. AI curso curto sobre como pedir modelos de visão computacional com linguagem natural, caixas delimitadoras, máscaras de segmentação, pontos de coordenação e outras imagens.
- [Build a Reasoning Model (From Scratch)](https://www.manning.com/books/build-a-reasoning-model-from-scratch) - Um guia para construir um modelo de raciocínio funcional do zero, de Sebastian Raschka.
- [Build an AI Agent (From Scratch)](https://www.manning.com/books/build-an-ai-agent-from-scratch) - Um livro sobre a construção de agentes de IA com ferramentas, memória, planejamento e sistemas multi-agentes.
- [Build a DeepSeek Model (From Scratch)](https://www.manning.com/books/build-a-deepseek-model-from-scratch) - Um livro sobre a implementação de arquitetura, treinamento e métodos de destilação estilo DeepSeek LLM.
- [AI Governance](https://www.manning.com/books/ai-governance) - Um livro sobre governança, risco, conformidade, segurança, privacidade e supervisão de sistemas de IA generativos.
- [AnimatedLLM](https://animatedllm.github.io/) - Visualizações interativas explicando como os modelos de linguagem funcionam. [#opensource](https://github.com/kasnerz/animated-llm)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) - Visualização interativa de como os LLMs baseados em transformadores funcionam, executando um modelo GPT-2 ao vivo no navegador. [#opensource](https://github.com/poloclub/transformer-explainer)

## Mais listas

- [Tools and Resources for AI Art](https://pharmapsychotic.com/tools.html) - Uma grande lista de notebooks do Google Colab para IA generativa, por [@pharmapsychotic](https://twitter.com/pharmapsychotic).
- [The Generative AI Application Landscape](https://twitter.com/sonyatweetybird/status/1584580362339962880) - Um infográfico que mapeia o ecossistema generativo de IA, por [Sonya Huang](https://twitter.com/sonyatweetybird) de Sequoia Capital.
- [Startups - @builtwithgenai](https://airtable.com/shr6nfE9FOHp17IjG/tblL3ekHZfkm3p6YT) - Uma lista de Airtable por [@builtwithgenai](https://twitter.com/builtwithgenai).
- [The Generative AI Index](https://airtable.com/shrH4REIgddv8SzUo/tbl5dsXdD1P859QLO) - Uma lista de Airtable por [Scale Venture Partners](https://www.scalevp.com/generative-ai).
- [Generative AI for Games](https://twitter.com/gwertz/status/1593268767269670912) - Um mapa de mercado de empresas que trabalham em IA Generativa para jogos, por [a16z](https://a16z.com/).
- [Generative Deep Art](https://github.com/filipecalegario/awesome-generative-ai) - Uma lista de ferramentas, obras, modelos, etc. de aprendizagem profunda generativa para usos artísticos, [@filipecalegario](https://github.com/filipecalegario/).
- [GPT-3 Demo](https://gpt3demo.com/) - Showcase com exemplos GPT-3, demonstrações, aplicativos, vitrine e casos de uso do NLP.
- [GPT-4 Demo](https://gpt4demo.com/) - Aplicativos GPT-4 e casos de uso.
- [The Generative AI Landscape](https://github.com/ai-collection/ai-collection) - Uma coleção de aplicações de IA Generative impressionante.
- [Molecular design](https://github.com/AspirinCode/papers-for-molecular-design-using-DL) - Lista de design molecular usando IA Generativa e Deep Learning.
- [Open LLMs](https://github.com/eugeneyan/open-llms) - Uma lista de LLMs abertas disponíveis para uso comercial.
- [Awesome Music AI](https://github.com/steven2358/awesome-music-ai) - Uma lista de ferramentas de IA para composição, geração e análise musical.
- [Awesome AI Market Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps) - Uma lista de mapas de mercado de IA de 2026, 2025 e 2024, por [Joy Larkin](https://twitter.com/joy).
- [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) - Uma lista de ferramentas e recursos para a construção de sistemas RAG de produção.

### Listas no ChatGPT

- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - Uma lista de ferramentas incríveis, demonstrações, documentos para ChatGPT e GPT-3, por [@jordn](https://github.com/jordn).
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) - Uma coleção de exemplos rápidos a serem usados com o modelo ChatGPT.
- [FlowGPT](https://flowgpt.com/) - Amplifique seu fluxo de trabalho com os melhores prompts.
- [ChatGPT Prompts for Data Science](https://github.com/travistangvh/ChatGPT-Data-Science-Prompts) - Um repositório de instruções de ciência de dados úteis para o ChatGPT.
- [Awesome ChatGPT](https://github.com/sindresorhus/awesome-chatgpt) - Outra lista incrível para o ChatGPT.
