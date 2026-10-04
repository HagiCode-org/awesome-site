# 😎 Recursos essenciais sobre geração aumentada por recuperação (RAG)
[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Danielskry/Awesome-RAG) [![Awesome-RAG Agent Plugin](https://img.shields.io/badge/Agent_Plugin-Available-blueviolet)](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)

Uma seleção de ferramentas, frameworks, técnicas e materiais de aprendizagem para criar sistemas de geração aumentada por recuperação (RAG). Este repositório cataloga o ecossistema RAG e reúne links para fontes confiáveis, tutoriais e implementações que ajudam você a explorar e criar aplicações RAG.

Também disponível como [plugin de agente](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin) para VS Code, GitHub Copilot CLI e Claude Code.

## Visão geral

A **geração aumentada por recuperação (RAG)** é uma técnica avançada de IA generativa que aprimora grandes modelos de linguagem (LLMs) ao recuperar e incorporar dinamicamente contexto relevante de fontes externas de conhecimento durante a geração. Ao contrário dos LLMs tradicionais, que dependem apenas do conhecimento pré-treinado, sistemas RAG acessam informações atualizadas, específicas de um domínio ou proprietárias, melhorando significativamente a precisão, reduzindo alucinações e permitindo a integração de conhecimento em tempo real.

### Principais benefícios

- **Redução de alucinações**: Fundamenta as respostas em informações factuais recuperadas
- **Adaptação ao domínio**: Permite que LLMs usem conhecimento especializado sem ajuste fino
- **Atualizações em tempo real**: Incorpora informações atualizadas sem retreinar o modelo
- **Eficiência de custos**: Mais econômico que o ajuste fino para tarefas específicas de um domínio
- **Transparência**: Fornece atribuição de fontes para o conteúdo gerado
- **Privacidade e segurança**: Mantém dados confidenciais em bases de conhecimento privadas

## Conteúdo

- [ℹ️ Informações gerais sobre RAG](#ℹ%EF%B8%8F-general-information-on-rag)
- [🏗️ Padrões de arquitetura](#%EF%B8%8F-architecture-patterns)
- [🎯 Abordagens avançadas](#-advanced-approaches)
- [🧰 Frameworks que facilitam RAG](#-frameworks-that-facilitate-rag)
- [🐍 Ecossistema Python para RAG](#-python-ecosystem-for-rag)
- [🛠️ Técnicas](#-techniques)
- [📊 Métricas e avaliação](#-metrics--evaluation)
- [💾 Bancos de dados](#-databases)
- [🔌 Implementações de RAG específicas por plataforma](#-platform-specific-rag-implementations)
- [🚀 Considerações para produção](#-production-considerations)
- [💡 Boas práticas](#-best-practices)

## ℹ️ Informações gerais sobre RAG

RAG resolve uma limitação fundamental dos LLMs: o corte estático de conhecimento e a incapacidade de acessar informações externas. Implementações tradicionais de RAG usam um pipeline de recuperação que enriquece os prompts do LLM com documentos contextualmente relevantes de uma base de conhecimento. Por exemplo, ao perguntar sobre materiais de reforma para uma casa específica, o LLM pode conhecer práticas gerais de reforma, mas não os detalhes daquele imóvel. Um sistema RAG pode recuperar documentos pertinentes (como plantas, especificações de materiais e códigos locais de construção) para fornecer respostas precisas e contextualizadas.

### Recursos de implementação

#### Tutoriais e exemplos de Python

- [Implementação básica completa de RAG em Python](https://github.com/Danielskry/LangChain-Chroma-RAG-demo-2024): Exemplo completo de RAG com LangChain e Chroma
- [Tutorial de RAG do LangChain](https://python.langchain.com/docs/use_cases/question_answering/): Guia abrangente para criar aplicações RAG
- [Tutorial de RAG do LlamaIndex](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/): Introdução ao LlamaIndex para RAG
- [Pipeline RAG do Haystack](https://docs.haystack.deepset.ai/docs/retrieval-augmented-generation): Como criar pipelines RAG com Haystack
- [RAG Techniques](https://github.com/NirDiamant/RAG_Techniques): Coleção abrangente e de código aberto de técnicas avançadas de geração aumentada por recuperação, disponibilizadas como notebooks Jupyter executáveis.
- [RAG Interview System](https://github.com/ather-techie/rag-interview-system): Sistema de preparação para entrevistas baseado em RAG, com 418 pares de perguntas e respostas selecionados (do básico ao avançado), que abrangem 29 padrões de arquitetura RAG.

- [Busca com Jev e Milvus](https://github.com/milvus-io/bootcamp/tree/master/bootcamp/RAG/search_with_jev): Nove notebooks Python executáveis que combinam embeddings Gemini, recuperação com Milvus e avaliações Jev para reordenação, filtragem de contexto, encerramento da busca, roteamento, reutilização de cache, curadoria, proteções e avaliação.

#### Produção e boas práticas

- [Padrões de RAG e boas práticas para produção](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): Estratégias de otimização de RAG prontas para produção
- [Guia do LangChain para produção](https://python.langchain.com/docs/production/): Como implantar aplicações LangChain em produção
- [Boas práticas de programação assíncrona em Python](https://docs.python.org/3/library/asyncio-dev.html): Como escrever código Python assíncrono eficiente para aplicações de IA

## 🏗️ Padrões de arquitetura

Os sistemas RAG podem ser projetados com diferentes padrões, conforme os requisitos:

- **Naive RAG**: Pipeline básico de recuperação seguida de geração, sem otimização
- **Advanced RAG**: Incorpora reescrita de consultas, reordenação e compressão de contexto
- **Modular RAG**: Componentes combináveis para recuperação, classificação e geração
- **Agentic RAG**: Agentes orientados por LLM que decidem dinamicamente como recuperar informações
- **Self-RAG**: Modelos que refletem sobre a qualidade da recuperação e ajustam suas estratégias
- **Graph RAG**: Usa grafos de conhecimento para recuperar informações estruturadas
- **Reasoning-Based RAG**: Usa raciocínio em várias etapas do LLM para planejar, navegar e executar a recuperação

## 🎯 Abordagens avançadas

As implementações de RAG variam da simples recuperação de documentos a técnicas avançadas que integram ciclos iterativos de feedback, sistemas multiagente e aprimoramentos específicos do domínio. Entre as abordagens modernas estão:

- [Vision-RAG](https://www.youtube.com/watch?v=npkp4mSweEg): Incorpora páginas inteiras como imagens, permitindo que modelos de visão raciocinem diretamente sem analisar texto como no RAG textual.
- [Cache-Augmented Generation (CAG)](https://medium.com/@ronantech/cache-augmented-generation-cag-in-llms-a-step-by-step-tutorial-6ac35d415eec): Pré-carrega documentos relevantes no contexto do modelo e armazena o estado de inferência (cache Key-Value, KV).
- [Agentic RAG](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/): Também conhecidos como agentes de recuperação, podem tomar decisões sobre processos de recuperação.
- [A-RAG](https://github.com/Ayanami0730/arag): RAG agêntico com interfaces de recuperação hierárquicas (palavras-chave, semântica e nível de bloco), permitindo que agentes LLM pesquisem e recuperem dados autonomamente em várias granularidades. ([Paper](https://arxiv.org/abs/2602.03442))
- [Corrective RAG](https://arxiv.org/pdf/2401.15884.pdf) (CRAG): Métodos para corrigir ou refinar as informações recuperadas antes de integrá-las às respostas do LLM.
- [Retrieval-Augmented Fine-Tuning](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/raft-a-new-way-to-teach-llms-to-be-better-at-rag/ba-p/4084674) (RAFT): Técnicas para ajustar LLMs especificamente para aprimorar tarefas de recuperação e geração.
- [Self Reflective RAG](https://selfrag.github.io/): Modelos que ajustam dinamicamente as estratégias de recuperação com base no feedback de desempenho.
- [RAG Fusion](https://arxiv.org/abs/2402.03367): Técnicas que combinam vários métodos de recuperação para melhorar a integração do contexto.
- [Temporal Augmented Retrieval](https://adam-rida.medium.com/temporal-augmented-retrieval-tar-dynamic-rag-ad737506dfcc) (TAR): Considera dados sensíveis ao tempo durante a recuperação.
- [Plan-then-RAG](https://arxiv.org/abs/2406.12430) (PlanRAG): Estratégias que incluem uma etapa de planejamento antes de executar RAG em tarefas complexas.
- [GraphRAG](https://github.com/microsoft/graphrag): Abordagem estruturada que usa grafos de conhecimento para aprimorar a integração de contexto e o raciocínio.
- [Code-Graph-RAG](https://github.com/vitali87/code-graph-rag): Sistema RAG com grafo de conhecimento para análise de bases de código multilíngues.
- [FLARE](https://medium.com/etoai/better-rag-with-active-retrieval-augmented-generation-flare-3b66646e2a9f) - Abordagem que incorpora geração aumentada por recuperação ativa para melhorar a qualidade das respostas.
- [GNN-RAG](https://github.com/cmavro/GNN-RAG): Recuperação por redes neurais de grafos para raciocínio de grandes modelos de linguagem.
- [Multimodal RAG](https://developer.nvidia.com/blog/an-easy-introduction-to-multimodal-retrieval-augmented-generation/): Estende o RAG a várias modalidades, como texto, imagens e áudio.
- [VideoRAG](https://arxiv.org/abs/2501.05874): Estende o RAG a vídeos usando grandes modelos de linguagem de vídeo (LVLMs) para recuperar e integrar conteúdo visual e textual na geração multimodal.
- [REFRAG](https://arxiv.org/pdf/2509.01092): Otimiza a decodificação RAG ao comprimir o contexto recuperado em embeddings antes da geração, reduzindo a latência sem comprometer a qualidade da saída.
- [InstructRAG](https://github.com/weizhepei/InstructRAG): Aprimora a qualidade de recuperação e geração dos sistemas RAG com ajuste fino baseado em instruções e justificativas sintetizadas pelo próprio modelo.
- [PageIndex](https://github.com/VectifyAI/PageIndex): Framework sem vetores baseado em raciocínio: cria árvores hierárquicas de documentos e realiza a recuperação por busca em árvore guiada por LLM, em vez de embeddings e similaridade vetorial. Elimina blocos e bancos vetoriais, oferecendo recuperação explicável e contextualizada para documentos profissionais complexos.

## 🧰 Frameworks que facilitam RAG

- [Haystack](https://github.com/deepset-ai/haystack): Framework de orquestração de LLMs para criar aplicações LLM personalizáveis e prontas para produção.
- [LangChain](https://python.langchain.com/docs/modules/data_connection/): Framework de uso geral para trabalhar com LLMs.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel): SDK da Microsoft para desenvolver aplicações de IA generativa.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): Framework para conectar fontes de dados personalizadas a LLMs.
- [Dify](https://github.com/langgenius/dify): Plataforma de código aberto para desenvolver aplicações com LLMs.
- [Verba](https://github.com/weaviate/Verba): Aplicação de código aberto que oferece RAG pronto para uso.
- [Mastra](https://github.com/mastra-ai/mastra): Framework TypeScript para criar aplicações de IA.
- [Letta](https://github.com/letta-ai/letta): Framework de código aberto para criar aplicações LLM com estado.
- [Flowise](https://github.com/FlowiseAI/Flowise): Interface de arrastar e soltar para criar fluxos personalizados com LLMs.
- [Kreuzberg](https://github.com/kreuzberg-dev/kreuzberg): Biblioteca poliglota de inteligência documental (núcleo em Rust com vinculações para Python, TypeScript e Go) que extrai texto, tabelas e metadados de mais de 62 formatos para pipelines de ingestão RAG.
- [Swiftide](https://github.com/bosun-ai/swiftide): Framework Rust para criar aplicações LLM modulares e em fluxo contínuo.
- [CocoIndex](https://github.com/cocoindex-io/cocoindex): Framework ETL para indexar dados para IA, como RAG, com atualizações incrementais em tempo real.
- [Pathway](https://github.com/pathwaycom/pathway/): Framework ETL Python de código aberto e alto desempenho, com execução em Rust e suporte a mais de 300 fontes de dados.
- [Pathway AI Pipelines](https://github.com/pathwaycom/llm-app/): Framework RAG pronto para produção, com indexação e recuperação em tempo real e acompanhamento de alterações em diversas fontes de dados.
- [LiteLLM](https://docs.litellm.ai/): Interface unificada para vários provedores de LLM (OpenAI, Anthropic, Hugging Face e Replicate), com registro, monitoramento e acompanhamento de custos.
- [Agentset](https://github.com/agentset-ai/agentset): Plataforma RAG de código aberto pronta para produção, com raciocínio agêntico integrado, busca híbrida e suporte multimodal.
- [OpenAgent](https://github.com/the-open-agent/openagent): Plataforma de assistente pessoal de IA de código aberto que combina LLMs, base de conhecimento RAG e ciclos autônomos de agentes, com uso de navegador, execução de shell e suporte a ferramentas MCP.
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research): Framework local-first de pesquisa agêntica aprofundada, com recuperação em várias fontes (web, arXiv, PubMed e documentos privados) e mais de 20 estratégias de pesquisa.

## 🐍 Ecossistema Python para RAG

Atualmente, Python tem o ecossistema RAG mais maduro, com amplo suporte a
LLMs, embeddings, bancos de dados vetoriais, avaliação e ferramentas de produção.

Veja o guia completo: [Ecossistema Python para RAG](docs/python-ecosystem.md)

## 🛠️ Técnicas

### Limpeza de dados

- [Técnicas de limpeza de dados](https://medium.com/intel-tech/four-data-cleaning-techniques-to-improve-large-language-model-llm-performance-77bee9003625): Etapas de pré-processamento para refinar os dados de entrada e melhorar o desempenho do modelo.

### Criação de prompts

- **Estratégias**
  - [Atribuição de tags e rótulos](https://python.langchain.com/v0.1/docs/use_cases/tagging/): Adiciona tags ou rótulos semânticos aos dados recuperados para aumentar a relevância.
  - [Chain of Thought (CoT)](https://www.promptingguide.ai/techniques/cot): Incentiva o modelo a pensar passo a passo antes de responder.
  - [Chain of Verification (CoVe)](https://sourajit16-02-93.medium.com/chain-of-verification-cove-understanding-implementation-e7338c7f4cb5): Pede ao modelo que verifique cada etapa do raciocínio quanto à precisão.
  - [Self-Consistency](https://www.promptingguide.ai/techniques/consistency): Gera vários caminhos de raciocínio e seleciona a resposta mais consistente.
  - [Zero-Shot Prompting](https://www.promptingguide.ai/techniques/zeroshot): Cria prompts que orientam o modelo sem exemplos.
  - [Few-Shot Prompting](https://python.langchain.com/docs/how_to/few_shot_examples/): Fornece alguns exemplos no prompt para demonstrar o formato de resposta esperado.
  - [Reason & Act (ReAct) prompting](https://www.promptingguide.ai/techniques/react): Combina raciocínio (por exemplo, CoT) com ação (por exemplo, chamadas de ferramentas).
- **Cache**
  - [Prompt Caching](https://medium.com/@1kg/prompt-cache-what-is-prompt-caching-a-comprehensive-guide-e6cbae48e6a3): Otimiza LLMs armazenando e reutilizando estados de atenção pré-computados.
- **Estruturação**
  -  [Notação de objetos orientada a tokens](https://github.com/toon-format/toon): Formato JSON compacto e determinístico para prompts de LLM.

### Divisão em blocos

A estratégia de divisão em blocos é uma das decisões mais importantes no projeto de sistemas RAG e afeta diretamente a precisão da recuperação e a qualidade do contexto. A abordagem ideal depende dos tipos de documento, das características do domínio e dos padrões de consulta.

- **[Divisão em blocos de tamanho fixo](https://medium.com/@anuragmishra_27746/five-levels-of-chunking-strategies-in-rag-notes-from-gregs-video-7b735895694d)**
  - **Caso de uso**: Documentos simples, cuja estrutura é menos importante
  - **Características**: Divide o texto em segmentos uniformes (geralmente 256–512 tokens), com sobreposição ajustável de 10–20%
  - **Vantagens**: Fácil de implementar, tamanho previsível dos blocos e processamento eficiente
  - **Desvantagens**: Pode separar frases e parágrafos, perder a estrutura documental e fragmentar unidades semânticas
  - **Implementação**: [CharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/) (LangChain), [SentenceSplitter](https://docs.llamaindex.ai/en/stable/api_reference/node_parsers/sentence_splitter/) (LlamaIndex)

- **[Divisão recursiva em blocos](https://medium.com/@AbhiramiVS/chunking-methods-all-to-know-about-it-65c10aa7b24e)**
  - **Caso de uso**: Documentos com estrutura hierárquica (Markdown, HTML, código)
  - **Características**: Divide recursivamente por separadores (parágrafos → frases → palavras) até atingir o tamanho desejado
  - **Vantagens**: Preserva limites naturais e hierarquia documental, melhorando a coerência semântica
  - **Desvantagens**: Mais complexo, com tamanhos variáveis e separadores que exigem configuração cuidadosa
  - **Implementação**: [RecursiveCharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/) (LangChain)

- **[Divisão em blocos baseada em documentos](https://medium.com/@david.richards.tech/document-chunking-for-rag-ai-applications-04363d48fbf7)**
  - **Caso de uso**: Documentos estruturados com seções claras (cabeçalhos Markdown, seções de PDF, registros de banco de dados)
  - **Características**: Segmenta com base nos metadados do documento, em indicações de formatação ou em elementos estruturais
  - **Vantagens**: Mantém a estrutura documental, preserva o contexto e permite recuperação enriquecida com metadados
  - **Desvantagens**: Exige entradas estruturadas e pode criar blocos muito grandes ou muito pequenos
  - **Implementação**: [MarkdownHeaderTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/) (LangChain)
  - **Multimodal**: Processa imagens e texto com modelos como [OpenCLIP](https://github.com/mlfoundations/open_clip)

- **[Divisão semântica em blocos](https://www.youtube.com/watch?v=8OJC21T2SL4&t=1933s)**
  - **Caso de uso**: Documentos em que a coerência semântica é essencial (narrativas, documentação técnica)
  - **Características**: Usa a similaridade entre embeddings para identificar limites semânticos naturais
  - **Vantagens**: Preserva unidades semânticas, adapta-se ao conteúdo e melhora a relevância da recuperação
  - **Desvantagens**: Tem alto custo computacional, exige um modelo de embeddings e produz blocos de tamanho menos previsível
  - **Ideal para**: Recuperação de alta qualidade em que preservar o contexto é essencial

- **[Divisão agêntica em blocos](https://youtu.be/8OJC21T2SL4?si=8VnYaGUaBmtZhCsg&t=2882)**
  - **Caso de uso**: Documentos complexos que exigem decisões inteligentes de segmentação
  - **Características**: Usa LLMs para analisar o conteúdo e determinar os limites ideais dos blocos
  - **Vantagens**: Altamente adaptável, compreende o contexto e pode aplicar conhecimento do domínio
  - **Desvantagens**: Alto custo, processamento mais lento e necessidade de acesso à API de um LLM
  - **Ideal para**: Domínios especializados em que a divisão padrão em blocos não funciona

- **[Divisão adaptativa em blocos](https://github.com/ekimetrics/adaptive-chunking)**
  - **Caso de uso**: Coleções heterogêneas em que diferentes documentos se beneficiam de diferentes estratégias de divisão
  - **Características**: Avalia vários métodos de divisão com métricas intrínsecas e seleciona o melhor para cada documento
  - **Vantagens**: Mais flexível que uma abordagem única, preserva a estrutura e a coerência semântica e aceita divisores e métricas personalizados
  - **Desvantagens**: Acrescenta custo de avaliação e complexidade de implementação em comparação com a divisão de tamanho fixo ou recursiva

**Boas práticas de divisão em blocos:**
- **Estratégia de sobreposição**: Use 10–20% de sobreposição para manter o contexto entre os limites dos blocos
- **Otimização do tamanho**: Equilibre o tamanho dos blocos (maiores = mais contexto; menores = mais precisão)
- **Preservação de metadados**: Mantenha a estrutura documental, os cabeçalhos e a formatação nos metadados dos blocos
- **Várias granularidades**: Considere abordagens hierárquicas (blocos pequenos para recuperação e maiores para contexto)

### Embeddings

Embeddings são a base da busca semântica em sistemas RAG. A escolha do modelo de embeddings afeta significativamente a qualidade da recuperação.

- **Seleção do modelo**
  - **[MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard)**: Benchmark abrangente para avaliar modelos de embeddings em várias tarefas e idiomas. Considere modelos com bom desempenho nas tarefas relevantes ao seu caso de uso (recuperação, agrupamento e classificação).
  - **Características do modelo**: avalie os modelos com base nos seguintes critérios:
    - **Dimensões**: Dimensões maiores (768–1024) geralmente oferecem melhor qualidade, mas aumentam os custos de armazenamento e processamento
    - **Comprimento do contexto**: Verifique se o modelo aceita o tamanho dos blocos dos seus documentos
    - **Suporte multilíngue**: Necessário para aplicações internacionais
    - **Especialização por domínio**: Modelos de uso geral ou especializados (por exemplo, científicos, jurídicos ou médicos)
  
- **Embeddings personalizados**
  - **Ajuste fino**: Adapte modelos pré-treinados ao seu domínio usando aprendizado contrastivo, triplet loss ou ajuste fino supervisionado
  - **Treinamento do zero**: Indicado para domínios altamente especializados com dados rotulados suficientes
  - **Embeddings multimodais**: Para aplicações que precisam compreender texto, imagens ou áudio (por exemplo, CLIP e ImageBind)
  - **Métodos de ensemble**: Combine vários modelos de embeddings para aumentar a robustez

### Recuperação

- **Métodos de busca**
  - [Índice plano de armazenamento vetorial](https://weaviate.io/developers/academy/py/vector_index/flat)
    - Forma simples e eficiente de recuperação.
    - O conteúdo é vetorizado e armazenado como vetores planos.
  - [Recuperação por índice hierárquico](https://pixion.co/blog/rag-strategies-hierarchical-index-retrieval)
    - Restringe os dados hierarquicamente a diferentes níveis.
    - Executa a recuperação seguindo uma ordem hierárquica.
  - [Perguntas hipotéticas](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - Aumenta a similaridade entre os blocos do banco de dados e as consultas (assim como o HyDE).
    - Usa um LLM para gerar perguntas específicas para cada bloco de texto.
    - Converte essas perguntas em embeddings vetoriais.
    - Durante a busca, compara as consultas com esse índice de vetores de perguntas.
  - [Embeddings de documentos hipotéticos (HyDE)](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - Aumenta a similaridade entre os blocos do banco de dados e as consultas (assim como as perguntas hipotéticas).
    - Usa um LLM para gerar uma resposta hipotética com base na consulta.
    - Converte essa resposta em um embedding vetorial.
    - Compara o vetor da consulta com o vetor da resposta hipotética.
  - [Recuperação do pequeno ao grande](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/small_to_big_rag/small_to_big_rag.ipynb)
    - Melhora a recuperação usando blocos menores na busca e blocos maiores para fornecer contexto.
    - Os blocos-filhos menores fazem referência a blocos-pai maiores.
  - [Recuperação contextual](https://www.anthropic.com/engineering/contextual-retrieval)
    - Aumenta a precisão da recuperação RAG preservando o contexto documental que normalmente se perde na divisão em blocos.
    - Cada bloco de texto recebe um resumo curto, gerado pelo modelo, antes da criação dos embeddings e da indexação, resultando em embeddings contextuais e BM25 contextual.
    - Essa combinação melhora as correspondências semânticas e lexicais, reduzindo falhas de recuperação quando usada com reordenação.
  - [Recuperação adaptativa](https://arxiv.org/abs/2403.14403)
    - Decide dinamicamente quando e quanto recuperar durante a geração.
  - [Reformulação e expansão de consultas](https://haystack.deepset.ai/cookbook/query-expansion)
    - Reescreve ou expande automaticamente a consulta antes da recuperação para aumentar a revocação.
    - É útil para consultas longas ou ambíguas.
- **[Re-ranking](https://developer.nvidia.com/blog/enhancing-rag-pipelines-with-re-ranking/)**: Melhora os resultados de busca em pipelines RAG reordenando os documentos recuperados inicialmente e priorizando os mais relevantes semanticamente para a consulta.

### Modelos de julgamento e decisão

Modelos de julgamento tomam decisões semânticas delimitadas sobre conteúdo recuperado, consultas, respostas geradas ou o estado do pipeline. Ao contrário de LLMs generativos, podem funcionar como pontos de decisão programáveis em pipelines RAG para reordenação, filtragem, roteamento, verificação e avaliação.

- **[Jev](https://typesafe.ai/)**: Modelo System One da TypeSafe AI para decisões rápidas e tipadas. Em RAG, pode apoiar reordenação, filtragem, roteamento, verificação, proteções e avaliação.
- **[AnyJev](https://github.com/nokia-applied-research/AnyJev)**: Transforma LLMs abertos em modelos de decisão tipados no estilo Jev, com correção de viés de rótulo zero e calibração opcional para decisões baseadas em limiares.

### Qualidade e segurança das respostas

Garantir respostas de alta qualidade, seguras e confiáveis é essencial para sistemas RAG em produção.

- **Mitigação de alucinações**
  - **[Técnicas de detecção](https://machinelearningmastery.com/rag-hallucination-detection-techniques/)**: Implemente métodos para identificar quando os modelos geram informações sem respaldo
  - **Verificação de fundamentação**: Compare as afirmações geradas com o contexto recuperado
  - **Pontuação de confiança**: Atribua pontuações de confiança às respostas geradas com base na qualidade das fontes
  - **Atribuição de fontes**: Exija citações para todas as afirmações factuais
  - **Qualidade da recuperação**: Melhore a precisão da recuperação para reduzir o risco de alucinações

- **Proteções e segurança**
  - **[Guia de implementação](https://developer.ibm.com/tutorials/awb-how-to-implement-llm-guardrails-for-rag-applications/)**: Abordagem abrangente para implementar mecanismos de segurança
  - **Moderação de conteúdo**: Filtre conteúdo nocivo, tendencioso ou inadequado nas etapas de entrada e saída
  - **Mitigação de vieses**: Detecte e reduza vieses no conteúdo recuperado e nas respostas geradas
  - **Verificação de fatos**: Confira afirmações em fontes confiáveis ou bases de conhecimento
  - **Detecção de toxicidade**: Use classificadores para identificar e filtrar conteúdo tóxico

- **Prevenção de injeção de prompts**
  - **[Guia de segurança](https://hiddenlayer.com/innovation-hub/prompt-injection-attacks-on-llms/)**: Entenda e previna ataques de injeção de prompts
  - **Validação de entrada**: Valide e higienize rigorosamente todas as entradas externas usando listas de permissões, limites de tamanho e correspondência de padrões
  - **Separação de conteúdo**: Use delimitadores claros, sistemas de templates e prompts baseados em papéis para separar instruções dos dados do usuário
  - **Monitoramento de saída**: Monitore continuamente as respostas em busca de anomalias, comportamentos inesperados ou violações de segurança
  - **Limitação de taxa**: Implemente limites de taxa e detecção de abuso para prevenir ataques sistemáticos
  - **Isolamento em sandbox**: Isole os ambientes de execução de LLMs para limitar possíveis danos causados por injeções bem-sucedidas

## 📊 Métricas e avaliação

### Métricas de similaridade para embeddings

Essas métricas medem a similaridade entre embeddings, algo essencial para avaliar a eficácia com que sistemas RAG recuperam e integram documentos ou fontes de dados externas. A escolha de métricas apropriadas ajuda a otimizar o desempenho e a precisão do sistema RAG. Também é possível criar métricas personalizadas para o domínio ou nicho específico, capturando suas nuances e aumentando a relevância.

- **[Similaridade do cosseno](https://en.wikipedia.org/wiki/Cosine_similarity)**

  - Mede o cosseno do ângulo entre dois vetores em um espaço multidimensional.
  - É altamente eficaz para comparar embeddings de texto cuja direção representa informações semânticas.
  - É comumente usada em sistemas RAG para medir a similaridade semântica entre embeddings de consultas e de documentos.

- **[Produto escalar](https://en.wikipedia.org/wiki/Dot_product)**

  - Calcula a soma dos produtos dos elementos correspondentes de duas sequências numéricas.
  - Equivale à similaridade do cosseno quando os vetores são normalizados.
  - É simples e eficiente, e costuma ser usada com aceleração de hardware em cálculos de grande escala.

- **[Distância euclidiana](https://en.wikipedia.org/wiki/Euclidean_distance)**

  - Calcula a distância em linha reta entre dois pontos no espaço euclidiano.
  - Pode ser usada com embeddings, mas talvez perca eficácia em espaços de alta dimensionalidade devido à "[maldição da dimensionalidade](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions)."
  - É frequentemente usada em algoritmos de agrupamento, como K-means, após a redução de dimensionalidade.

- **[Similaridade de Jaccard](https://en.wikipedia.org/wiki/Jaccard_index)**
  - Mede a similaridade entre dois conjuntos finitos como o tamanho da interseção dividido pelo tamanho da união.
  - É útil para comparar conjuntos de tokens, como em modelos bag-of-words ou comparações de n-gramas.
  - É menos aplicável a embeddings contínuos produzidos por LLMs.

> **Observação:** A similaridade do cosseno e o produto escalar são geralmente considerados as métricas mais eficazes para medir a similaridade entre embeddings de alta dimensionalidade.

### Métricas de avaliação de respostas

A avaliação de respostas em soluções RAG envolve analisar a qualidade das saídas de modelos de linguagem usando métricas variadas. Veja abordagens estruturadas para essa avaliação:

- **Avaliação automatizada**

  - **[BLEU](https://en.wikipedia.org/wiki/BLEU):** Avalia a sobreposição de n-gramas entre saídas geradas por máquina e saídas de referência, oferecendo uma medida de precisão.
  - **[ROUGE](<https://en.wikipedia.org/wiki/ROUGE_(metric)>):** Mede a revocação comparando n-gramas, skip-bigrams ou a maior subsequência comum com as saídas de referência.
  - **[METEOR](https://en.wikipedia.org/wiki/METEOR):** Considera correspondências exatas, lematização, sinônimos e alinhamento na tradução automática.

- **Avaliação humana**
  Envolve avaliadores humanos que analisam as respostas quanto a:
  - **Relevância:** Adequação às consultas dos usuários.
  - **Fluência:** Qualidade gramatical e estilística.
  - **Precisão factual:** Verificação de afirmações em fontes confiáveis.
  - **Coerência:** Consistência lógica das respostas.
  
  As abordagens incluem:
  - **[Filas de anotação](https://docs.langchain.com/langsmith/annotation-queues):** Oferecem uma visualização direcionada e simplificada para que anotadores humanos associem feedback a execuções específicas.

- **Avaliação por modelos**
  Usa avaliadores pré-treinados para comparar as saídas com diversos critérios:

  - **[TuringBench](https://turingbench.ist.psu.edu/):** Oferece avaliações abrangentes em benchmarks de linguagem.
  - **[Hugging Face Evaluate](https://huggingface.co/docs/evaluate/en/index):** Calcula o alinhamento com as preferências humanas.

- **Dimensões principais da avaliação**
  - **Fundamentação:** Avalia se as respostas se baseiam inteiramente no contexto fornecido. Um nível baixo pode indicar dependência de informações alucinadas ou irrelevantes.
  - **Completude:** Mede se a resposta contempla todos os aspectos de uma consulta.
  - **Abordagens:** Pontuação de recuperação assistida por IA e verificação de intenção baseada em prompts.
  - **Utilização:** Avalia o quanto os dados recuperados contribuem para a resposta.
  - **Análise:** Use LLMs para verificar se os blocos recuperados estão incluídos nas respostas.

#### Ferramentas

Essas ferramentas ajudam a avaliar o desempenho do sistema RAG, acompanhando feedback de usuários, registrando interações com consultas e comparando várias métricas de avaliação ao longo do tempo.

- **[LangFuse](https://github.com/langfuse/langfuse)**: Ferramenta de código aberto para acompanhar métricas de LLMs, observabilidade e gerenciamento de prompts.
- **[Opik](https://github.com/comet-ml/opik)**: Plataforma de código aberto para observabilidade e avaliação de LLMs e otimização de prompts.
- **[Ragas](https://docs.ragas.io/en/stable/)**: Framework que ajuda a avaliar pipelines RAG.
- **[WFGY Problem Map](https://github.com/onestardao/WFGY/tree/main/ProblemMap)**: Lista de verificação com 16 modos para diagnosticar falhas de RAG e LLMs.
- **[LangSmith](https://docs.smith.langchain.com/)**: Plataforma para criar aplicações LLM de nível de produção, permitindo monitorar e avaliar a aplicação de perto.
- **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)**: Ferramenta para calcular métricas como BLEU e ROUGE e avaliar a qualidade do texto.
- **[Weights & Biases](https://wandb.ai/wandb-japan/rag-hands-on/reports/Step-for-developing-and-evaluating-RAG-application-with-W-B--Vmlldzo1NzU4OTAx)**: Acompanha experimentos, registra métricas e visualiza o desempenho.

## 💾 Bancos de dados

Bancos de dados vetoriais são componentes essenciais de sistemas RAG, oferecendo armazenamento eficiente e busca por similaridade de embeddings. A escolha do banco de dados depende de fatores como escala, requisitos de latência, modelo de implantação (nuvem ou local) e recursos necessários (busca híbrida, filtros etc.). A lista abaixo apresenta sistemas de banco de dados adequados a aplicações RAG:

### Benchmarks comparativos

- [Como escolher um banco de dados vetorial](https://benchmark.vectorview.ai/vectordbs.html)

### Mecanismos distribuídos de processamento e disponibilização de dados:

- [Apache Cassandra](https://cassandra.apache.org/doc/latest/cassandra/vector-search/concepts.html): Sistema distribuído de gerenciamento de banco de dados NoSQL.
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-vector-search): Serviço de banco de dados multimodelo distribuído globalmente, com busca vetorial integrada.
- [Vespa](https://vespa.ai/): Mecanismo de processamento e disponibilização de big data de código aberto, projetado para aplicações em tempo real.

### Mecanismos de busca com recursos vetoriais:

- [Elasticsearch](https://www.elastic.co/elasticsearch): Oferece recursos de busca vetorial e funcionalidades de busca tradicionais.
- [OpenSearch](https://github.com/opensearch-project/OpenSearch): Mecanismo distribuído de busca e análise, derivado do Elasticsearch.

### Bancos de dados vetoriais:

- [Chroma DB](https://github.com/chroma-core/chroma): Banco de dados de embeddings de código aberto, projetado nativamente para IA.
- [Milvus](https://github.com/milvus-io/milvus): Banco de dados vetorial de código aberto para aplicações baseadas em IA.
- [Pinecone](https://www.pinecone.io/): Banco de dados vetorial sem servidor, otimizado para fluxos de trabalho de aprendizado de máquina.
- [Oracle AI Vector Search](https://www.oracle.com/database/ai-vector-search/#retrieval-augmented-generation): Integra recursos de busca vetorial ao Oracle Database para consultas semânticas baseadas em embeddings vetoriais.

### Extensões de bancos de dados relacionais:

- [Pgvector](https://github.com/pgvector/pgvector): Extensão de código aberto para busca por similaridade vetorial no PostgreSQL.
- [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s): Extensão do PostgreSQL para recuperação lexical da família BM25, útil em pipelines de busca por palavras-chave e busca híbrida.

### Outros sistemas de banco de dados:

- [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-database): Serviço de banco de dados multimodelo distribuído globalmente, com busca vetorial integrada.
- [Couchbase](https://www.couchbase.com/products/vector-search/): Banco de dados NoSQL distribuído na nuvem.
- [Lantern](https://lantern.dev/): Mecanismo de busca pessoal que prioriza a privacidade.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/storing/vector_stores/): Usa um armazenamento vetorial em memória simples para experimentação rápida.
- [Neo4j](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/): Sistema de gerenciamento de banco de dados em grafo.
- [Qdrant](https://github.com/neo4j/neo4j): Banco de dados vetorial de código aberto projetado para busca por similaridade.
- [Redis Stack](https://redis.io/docs/latest/develop/interact/search-and-query/): Armazenamento em memória de estruturas de dados usado como banco de dados, cache e agente de mensagens.
- [SurrealDB](https://github.com/surrealdb/surrealdb): Banco de dados multimodelo escalável, otimizado para dados de séries temporais.
- [Weaviate](https://github.com/weaviate/weaviate): Mecanismo de busca vetorial nativo da nuvem e de código aberto.

### Bibliotecas e ferramentas de busca vetorial:

- [FAISS](https://github.com/facebookresearch/faiss): Biblioteca para busca eficiente por similaridade e agrupamento de vetores densos, projetada para lidar com grandes conjuntos de dados e otimizada para recuperar rapidamente os vizinhos mais próximos.

## 🚀 Considerações para produção

A criação de sistemas RAG prontos para produção exige atenção a vários aspectos críticos além do pipeline central de recuperação e geração:

### Escalabilidade e desempenho

- **Vazão de indexação**: Projete pipelines para processar a ingestão de grandes volumes de documentos com atualizações incrementais
- **Latência de consultas**: Otimize a velocidade de recuperação com indexação eficiente (HNSW, IVF), estratégias de cache e processamento paralelo
- **Solicitações concorrentes**: Implemente pools de conexões, filas de solicitações e balanceamento de carga para cenários de alto tráfego
- **Gerenciamento de recursos**: Monitore a utilização de GPU/CPU, o consumo de memória e os pools de conexões do banco de dados

### Confiabilidade e monitoramento

- **Observabilidade**: Implemente registro, rastreamento e coleta de métricas abrangentes (latência, vazão e taxas de erro)
- **Verificações de integridade**: Monitore a disponibilidade do serviço de embeddings, a conectividade do banco vetorial e o status da API do LLM
- **Tratamento de erros**: Implemente lógica de novas tentativas, disjuntores e estratégias de degradação gradual
- **Testes A/B**: Compare diferentes estratégias de recuperação, métodos de divisão em blocos e modelos de prompt

### Gerenciamento de dados

- **Atualizações incrementais**: Aceite a indexação de documentos em tempo real ou quase real, sem reindexar tudo
- **Controle de versões**: Acompanhe versões dos documentos, dos modelos de embeddings e dos templates de prompt
- **Qualidade dos dados**: Implemente pipelines de validação para detectar embeddings corrompidos, metadados ausentes ou conteúdo desatualizado
- **Backup e recuperação**: Faça backups regulares dos índices vetoriais e dos armazenamentos de metadados

### Segurança e conformidade

- **Controle de acesso**: Implemente autenticação, autorização e registro de auditoria
- **Privacidade dos dados**: Criptografe os dados em repouso e em trânsito e atenda aos requisitos de residência de dados
- **Filtragem de conteúdo**: Aplique moderação de conteúdo, detecção de informações pessoais identificáveis (PII) e verificações de conformidade
- **Limitação de taxa**: Proteja contra abusos e assegure uma alocação justa de recursos

### Otimização de custos

- **Cache de embeddings**: Armazene em cache embeddings acessados com frequência para reduzir custos de API
- **Recuperação seletiva**: Use o roteamento de consultas para evitar operações de recuperação desnecessárias
- **Seleção de modelos**: Equilibre custo e desempenho ao escolher modelos de embeddings e LLMs
- **Dimensionamento adequado de recursos**: Otimize a infraestrutura com base nos padrões reais de uso

## 🔌 Implementações de RAG específicas por plataforma

Para obter guias detalhados de implementação por plataforma, consulte a documentação:

- [Guia de integração do Supabase](docs/supabase-integration.md): Como criar sistemas RAG com Supabase, pgvector e Edge Functions

## 💡 Boas práticas

### Estratégia de divisão em blocos

- **Divisão em blocos orientada ao domínio**: Prefira a divisão semântica ou baseada na estrutura documental à de tamanho fixo para preservar melhor o contexto
- **Gerenciamento de sobreposição**: Inclua uma sobreposição estratégica (10–20%) para manter o contexto entre os limites dos blocos
- **Preservação de metadados**: Mantenha a estrutura documental, os cabeçalhos e as indicações de formatação nos metadados dos blocos
- **Várias granularidades**: Considere a divisão hierárquica em blocos (blocos pequenos para recuperação e maiores para contexto)

### Seleção de embeddings

- **Avaliação de modelos**: Use o ranking MTEB e benchmarks específicos do domínio para selecionar modelos adequados
- **Otimização de dimensões**: Equilibre as dimensões dos embeddings (mais dimensões = melhor qualidade; menos = recuperação mais rápida)
- **Ajuste fino ao domínio**: Ajuste os embeddings com dados específicos do domínio sempre que possível
- **Consistência**: Use o mesmo modelo de embeddings na indexação e nas consultas

### Otimização da recuperação

- **Busca híbrida**: Combine busca semântica (vetorial) e lexical (BM25/palavras-chave) para aumentar a revocação
- **Reordenação**: Aplique cross-encoders ou modelos de classificação aprendida para melhorar a precisão
- **Compreensão de consultas**: Implemente classificação de consultas, detecção de intenção e expansão de consultas
- **Diversificação de resultados**: Evite resultados redundantes aplicando restrições de diversidade

### Engenharia de prompts

- **Instruções claras**: Forneça instruções explícitas sobre como usar o contexto recuperado
- **Atribuição de fontes**: Solicite citações e exija que as respostas se fundamentem no contexto fornecido
- **Exemplos few-shot**: Inclua exemplos que demonstrem o formato e a qualidade desejados para as respostas
- **Compressão de contexto**: Use técnicas como sumarização ou extração quando o contexto exceder os limites

### Estrutura de avaliação

- **Métricas multidimensionais**: Avalie relevância, precisão, completude e fundamentação
- **Intervenção humana**: Incorpore feedback humano para melhoria contínua
- **Avaliação sintética**: Gere consultas de teste e saídas esperadas para testes automatizados
- **Monitoramento em produção**: Acompanhe a satisfação dos usuários, os padrões de consulta e os modos de falha

### Melhoria iterativa

- **Ciclos de feedback**: Colete feedback dos usuários, registros de consultas e métricas de desempenho
- **Experimentação**: Teste melhorias sistematicamente (divisão em blocos, recuperação e prompts) com experimentos controlados
- **Atualizações de modelos**: Planeje atualizações dos modelos de embeddings e estratégias de migração
- **Documentação**: Mantenha documentação clara da arquitetura, das decisões e dos procedimentos operacionais

---

## Como contribuir

Este recurso é mantido pela comunidade e continua evoluindo. Contribuições são bem-vindas! Para adicionar recursos, corrigir erros ou melhorar a organização:

1. Crie um fork do repositório
2. Crie uma branch para suas alterações
3. Envie um pull request com uma descrição clara

Ao adicionar itens, verifique se os links funcionam, se as descrições são precisas e concisas e se o conteúdo está na seção apropriada.

## Licença

Este projeto está licenciado sob a [CC0 1.0 Universal](LICENSE).
