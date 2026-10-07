![Banner](/assets/awesome_banner.png)

<div align="center">

# Awesome AI Apps [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<a href="https://trendshift.io/repositories/14662" target="_blank"><img src="https://trendshift.io/api/badge/repositories/14662" alt="Arindam200%2Fawesome-ai-apps | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

</div>

Este repositório é uma coleção abrangente de **132 projetos**, tutoriais e receitas para construir aplicações poderosas impulsionadas por LLM, incluindo agentes de texto, assistentes de voz, aplicativos RAG e ferramentas baseadas em MCP. Esses projetos servem como um guia para desenvolvedores que trabalham com diversos frameworks e stacks de IA.

## 📋 Tabela de Conteúdo

- [🚀 Aplicativos de IA em Destaque](#-featured-ai-apps)
  - [🧩 Agentes Iniciais](#-starter-agents)
  - [🪶 Agentes Simples](#-simple-agents)
  - [🎙️ Agentes de Voz](#-voice-agents)
  - [🗂️ Agentes MCP](#️-mcp-agents)
  - [🧠 Agentes de Memória](#-memory-agents)
  - [📚 Aplicações RAG](#-rag-applications)
  - [🔬 Agentes Avançados](#-advanced-agents)
  - [🧬 Ajuste Fino](#-fine-tuning)
- [📺 Tutoriais e Vídeos](#-tutorials--videos)
- [🚀 Introdução](#getting-started)
- [🤝 Contribuindo](#-contributing)

---

<div align="center">

## 💎 Patrocinadores

<p align="center">
  Um enorme agradecimento aos nossos patrocinadores pelo seu generoso apoio!
</p>

<table align="center" cellpadding="10" style="width:100%; border-collapse:collapse;">
  <tr align="center">
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/brightdata" target="_blank" title="Visit Bright Data">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Bright_Data.svg" height="35" style="max-width:180px;" alt="Bright Data - Web Data Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Plataforma de Dados Web</span>
        <br>
        <a href="https://dub.sh/brightdata" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visit Bright Data website">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/nebius" target="_blank" title="Visit Nebius Token Factory">
        <img src="./assets/nebius.png" height="36" style="max-width:180px;" alt="Nebius Token Factory">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Provedor de Inferência de IA</span>
        <br>
        <a href="https://dub.sh/nebius" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visit Nebius Token Factory">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/scrapegraphai" target="_blank" title="Visit ScrapeGraphAI on GitHub">
        <img src="https://raw.githubusercontent.com/ScrapeGraphAI/ScrapeGraph-AI/main/docs/assets/scrapegraphai_logo.png" height="44" style="max-width:180px;" alt="ScrapeGraphAI - Web Scraping Library">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Framework de Web Scraping com IA</span>
        <br>
        <a href="https://dub.sh/scrapegraphai" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="View ScrapeGraphAI on GitHub">
        </a>
      </sub>
    </td>
  </tr>
  <tr align="center">
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/memorilabs" target="_blank" title="Visit Memorilabs">
        <img src="assets/memori.png" height="36" style="max-width:180px;" alt="Memori - SQL Native Memory for AI">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Memória SQL Nativa para IA</span>
        <br>
        <a href="https://dub.sh/memorilabs" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visit Memorilabs website">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/copilotkit" target="_blank" title="Visit CopilotKit">
        <img src="assets/copilot-kit-logo.svg" height="36" style="max-width:180px;" alt="CopilotKit - Agentic Application Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Plataforma de Aplicações Agênticas</span>
        <br>
        <a href="https://dub.sh/copilotkit" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visit CopilotKit website">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/scalekitt" target="_blank" title="Visit ScaleKit">
        <img src="assets/scalekit.svg" height="36" style="max-width:180px;" alt="ScaleKit - Auth Stack for AI">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Pilha de Autenticação para IA</span>
        <br>
        <a href="https://dub.sh/scalekitt" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visit ScaleKit website">
        </a>
      </sub>
    </td>
  </tr>
  <tr align="center">
    <td width="200" valign="middle" align="center">
      <a href="https://okahu.ai" target="_blank" title="Visit Okahu">
        <img src="assets/okahu.png" height="36" style="max-width:180px;" alt="Okahu - AI Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Plataforma de Observabilidade de IA</span>
        <br>
        <a href="https://okahu.ai" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visit Okahu website">
        </a>
      </sub>
    </td>
    <td width="200" valign="middle" align="center">
      <a href="https://dub.sh/agentfield" target="_blank" title="Visit AgentField">
        <img src="assets/agentfield.png" height="40" style="max-width:180px;" alt="AgentField - Kubernetes for AI Agents">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Kubernetes para Agentes de IA</span>
        <br>
        <a href="https://dub.sh/agentfield" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visit AgentField website">
        </a>
      </sub>
    </td>
    <td width="200" valign="middle" align="center">
      <a href="https://dub.sh/byteful" target="_blank" title="Visit Byteful">
      <img src="https://byteful.com/favicon.ico" height="40" style="max-width:180px;" alt="Byteful">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Byteful</span>
        <br>
        <a href="https://dub.sh/byteful" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visit Byteful website">
        </a>
      </sub>
    </td>
  </tr>

</table>

### 💎 Torne-se um Patrocinador

<p align="center">
Interessado em patrocinar este projeto? Sinta-se à vontade para entrar em contato!
<br/>
<a href="mailto:contact@studio1hq.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
</a>
</p>

</div>

---

## 🚀 Aplicativos de IA em Destaque

### 🧩 Agentes Iniciais

**Agentes de início rápido para aprender e estender diferentes frameworks de IA.** _21 projetos_

- [AutoGen Tool-Calling Starter](starter_ai_agents/autogen_starter): Microsoft AutoGen `AssistantAgent` com uma ferramenta personalizada, alimentado pela Nebius Token Factory
- [AWS Strands Agent Starter](starter_ai_agents/aws_strands_starter): Agente de relatório meteorológico usando o AWS Strands SDK
- [CAMEL AI Model Benchmark](starter_ai_agents/camel_ai_starter): Ferramenta de benchmark de desempenho comparando vários modelos de IA
- [Coding Harness Starter](starter_ai_agents/coding_harness_starter): Loop de codificação do OpenAI Agents SDK com planejamento, edições aprovadas por gates, testes fixos e revisão limitada, alimentado pela Nebius Token Factory
- [CrewAI Research Crew](starter_ai_agents/crewai_starter): Exemplo de equipe de pesquisa multiagente
- [Docker cagent Multi-Agent Starter](starter_ai_agents/cagent_starter): Runtime multiagente de código aberto e personalizável da Docker
- [DSPy Optimization Starter](starter_ai_agents/dspy_starter): Framework DSPy para construir e otimizar sistemas de IA
- [Google Agent Development Kit Starter](starter_ai_agents/google_adk_starter): Modelo inicial do Google Agent Development Kit
- [Hacker News Trend Analyst (Agno)](starter_ai_agents/agno_starter): Agente baseado em Agno para análise de tendências no Hacker News
- [Hugging Face smolagents Starter](starter_ai_agents/smolagents_starter): Agente de busca na web centrado em código do Hugging Face smolagents
- [KAOS Kubernetes Multi-Agent Starter](starter_ai_agents/kaos_starter): Sistema multiagente nativo do Kubernetes com ferramentas MCP e LLM em cluster
- [LangChain Tool-Calling Starter](starter_ai_agents/langchain_starter): Agente de chamada de ferramentas do LangChain com `create_tool_calling_agent` + `AgentExecutor`, alimentado pela Nebius
- [LangGraph ReAct Agent Starter](starter_ai_agents/langgraph_starter): Agente ReAct pré-construído do LangGraph (`create_react_agent`) com ferramentas personalizadas, alimentado pela Nebius
- [Letta Stateful Memory Agent](starter_ai_agents/letta_starter): Agente com estado e memória de longo prazo persistente entre sessões
- [LlamaIndex Task Manager](starter_ai_agents/llamaindex_starter): Assistente de tarefas baseado em LlamaIndex
- [Mastra Tool-Calling Starter](starter_ai_agents/mastra_starter): Agente de primeira linha em TypeScript com uma ferramenta personalizada alimentado pela Nebius Token Factory
- [Microsoft Agent Framework Starter](starter_ai_agents/microsoft_agents_starter): Demos de planejamento de viagens multiagente construídas sobre o Microsoft Agent Framework
- [OpenAI Agents SDK Starter](starter_ai_agents/openai_agents_sdk): OpenAI Agents SDK com exemplos de auxiliar de e-mail e escritor de haikai
- [PydanticAI Weather Bot](starter_ai_agents/pydantic_starter): Agente de informações meteorológicas em tempo real
- [Sayna Realtime Voice Agent](starter_ai_agents/sayna_starter): Infraestrutura de voz em tempo real com STT/TTS multi-provedor (Deepgram, ElevenLabs, Azure, Google) e streaming via WebSocket
- [Semantic Kernel Starter](starter_ai_agents/semantic_kernel_starter): `ChatCompletionAgent` do Microsoft Semantic Kernel com chamada de ferramentas baseada em plugins

### 🪶 Agentes Simples

**Casos de uso diretos e práticos para aplicações de IA do dia a dia.** _18 projetos_

- [Agno Agent Examples](simple_ai_agents/agno_ai_examples): Exemplos de agentes simples a multiagente com busca na web e uma base de conhecimento
- [Agno Agent UI](simple_ai_agents/agno_ui_agent): Interface interativa para agentes web e financeiros
- [AI Agent Registry Explorer](simple_ai_agents/agent_discovery_agent): Encontrar e comparar agentes de IA em registros NANDA, MCP, Virtuals, A2A e ERC-8004
- [Calendar Assistant](simple_ai_agents/cal_scheduling_agent): Integração de agendamento de calendário com Cal.com
- [Cost-Aware Model Router (RouteLLM)](simple_ai_agents/llm_router): Roteamento inteligente de modelos com RouteLLM (GPT-4o-mini vs Nebius Llama) para otimização de custos
- [Email-to-Calendar Assistant](simple_ai_agents/email_to_calendar_scheduler): Leitor de Gmail e gerenciador do Google Calendar com IA
- [Financial Reasoning Agent](simple_ai_agents/reasoning_agent): Demonstração de raciocínio financeiro passo a passo
- [Human-in-the-Loop Agent](simple_ai_agents/human_in_the_loop_agent): Ações HITL para execução segura de tarefas de IA
- [LangChain Operations Agent Collection](simple_ai_agents/langchain_simple_agents): Agentes de resposta a incidentes, suporte, risco de fornecedores e qualidade de dados da Nebius com saídas tipadas e ferramentas protegidas
- [Mastra Weather Bot](simple_ai_agents/mastra_ai_weather_agent): Atualizações meteorológicas usando o framework Mastra AI
- [Natural-Language Database Assistant](simple_ai_agents/talk_to_db): Consultas de banco de dados em linguagem natural com GibsonAI e LangChain
- [Natural-Language SQL Agent (LangChain)](simple_ai_agents/langchain_data_agent_poc): Agente de dados de linguagem natural para SQL com LangGraph, Nebius, segurança de SQL somente leitura e gráficos Streamlit
- [Nebius Chat](simple_ai_agents/nebius_chat): Interface de chat para a Nebius Token Factory
- [Newsletter Generator](simple_ai_agents/newsletter_agent): Construtor de newsletter com IA com integração Firecrawl
- [Stock Market Finance Agent](simple_ai_agents/finance_agent): Agente de rastreamento de dados de ações e mercado em tempo real
- [Stock Portfolio Analyst](simple_ai_agents/stock_portfolio_analyst): Valoração de carteira ao vivo, análise de concentração, sinais de risco e ideias de rebalanceamento com Agno
- [VoyageCompass Travel Planner](simple_ai_agents/nebius_travel_planner): Planejador de viagens LangChain e Nebius com ferramentas de clima, pesquisa, conversão de moeda, orçamentos e lista de bagagem
- [Web Automation Agent](simple_ai_agents/browser_agent): Agente de automação de navegador usando Nebius e browser-use

### 🎙️ Agentes de Voz

**Assistentes de voz em tempo real e pipelines de fala em streaming** — incluindo LiveKit, Pipecat, Gradium e [VoxCode](voice_agents/Cursor_code_editor) (Deepgram + Cursor SDK). _9 projetos_

- [AI Pitch Coach (Gradium + Nebius)](voice_agents/voice-agent-gradium-nebius-langchain): Coach de pitch conversacional usando Gradium STT/TTS, orquestração LangChain e raciocínio Nebius
- [Customer Support Voice Agent (LiveKit)](voice_agents/customer_support_agent): Agente de suporte de voz da Nebius com transferência para gerente de IA preservando contexto, cancelamento de ruído e tratamento de inatividade
- [Gemini Realtime Voice Agent (LiveKit)](voice_agents/livekit_gemini_agents): LiveKit Agents com Google Gemini Live (`gemini` multimodal em tempo real) para conversas de voz de baixa latência em uma sala LiveKit
- [Healthcare Voice Contact Center](voice_agents/healthcare_contact_center): Central de contato de saúde Pipecat com agendamento de consultas, tratamento de perguntas frequentes e escalonamento para supervisão
- [Multilingual Voice Agent (Pipecat + Sarvam)](voice_agents/pipecat_agent): Pipeline de voz Pipecat com Sarvam STT/TTS e OpenAI para chat; transporte WebRTC (navegador) ou Daily via runner Pipecat
- [RSVP Confirmation Voice Agent (LiveKit)](voice_agents/livekit_rsvp_agent): Agente de voz de saída que liga para participantes, confirma RSVPs e atualiza um banco de dados de eventos com suporte JSON
- [Speed-to-Lead Sales Voice Agent](voice_agents/speed_to_lead_agent): Agente de voz baseado em LiveKit que liga instantaneamente para leads de entrada, os encaminha a especialistas e registra em um CRM simulado
- [VoxCode — Deepgram + Cursor Voice Coding Agent](voice_agents/Cursor_code_editor): Workspace de voz local para resumos de base de código e perguntas sobre arquitetura; orquestração Deepgram Voice Agent, raciocínio Nebius e inspeção e edição opcional de arquivos via Cursor SDK
- [Web-Search Voice Agent (LiveKit)](voice_agents/livekit_web_search_agent): Agente de voz em tempo real LiveKit + Gemini com uma ferramenta `web_search` baseada em Olostep para respostas frescas e citadas por fonte

### 🗂️ Agentes MCP

**Exemplos usando o Model Context Protocol para integração de ferramentas externas.** _14 projetos_

- [Couchbase LangGraph MCP Agent](mcp_ai_agents/langchain_langgraph_mcp_agent): Agente ReAct do LangChain com integração Couchbase
- [Couchbase MCP Server](mcp_ai_agents/couchbase_mcp_server): Integração de banco de dados Couchbase com protocolo MCP
- [Custom MCP Server Starter](mcp_ai_agents/custom_mcp_server): Exemplo de implementação de servidor MCP personalizado
- [Documentation Q&A MCP Agent](mcp_ai_agents/docs_qna_agent): Agente de perguntas e respostas de documentação com MCP
- [Documentation RAG MCP Server](mcp_ai_agents/doc_mcp): Sistema semântico de documentação e Q&A RAG
- [GibsonAI Database MCP Agent](mcp_ai_agents/database_mcp_agent): Agente de IA conversacional para gerenciar projetos e esquemas de banco de dados GibsonAI
- [GitHub MCP Agent](mcp_ai_agents/github_mcp_agent): Insights e análise de repositório via MCP
- [GitHub MCP Agent Starter](mcp_ai_agents/mcp_starter): Modelo inicial de analisador de repositório GitHub
- [Hotel Finder Agent](mcp_ai_agents/hotel_finder_agent): Busca e reserva de hotéis usando integração MCP
- [Sandboxed Code Execution MCP Agent (Docker + E2B)](mcp_ai_agents/e2b_docker_mcp_agent): Agente de IA seguro para executar agentes em ambientes Docker isolados via MCP Gateway
- [Secure Database MCP Agent (MCP Toolbox)](mcp_ai_agents/mcp_toolbox_security_agent): Agente de e-commerce seguro sobre PostgreSQL e MongoDB; MCP Toolbox aplica acesso por usuário, funções de mínimo privilégio e ferramentas autorizadas
- [Secure MCP Access Agent (ScaleKit + Exa)](mcp_ai_agents/scalekit-exa-mcp-security): Integração MCP com foco em segurança com busca Exa
- [Self-Healing Text-to-SQL Agent (Okahu)](mcp_ai_agents/telemetry-mcp-okahu): Demonstração Text-to-SQL auto-corrigível usando traces do Okahu Cloud via MCP hospedado
- [Taskade MCP Agent](mcp_ai_agents/taskade_mcp_agent): Agente de workspace com IA para gerenciar projetos, tarefas e fluxos de trabalho via Taskade MCP

### 🧠 Agentes de Memória

**Agentes com recursos avançados de memória para retenção de contexto e personalização.** _13 projetos_

- [AI Research Consultant with Long-Term Memory](memory_agents/ai_consultant_agent/): Agente de consultoria com IA usando **Memori v3** como tecido de memória de longo prazo e **ExaAI** para pesquisa
- [arXiv Researcher Agent with Memori](memory_agents/arxiv_researcher_agent_with_memori): Assistente de pesquisa usando OpenAI Agents e GibsonAI Memori
- [AWS Strands Persistent Memory Agent](memory_agents/aws_strands_agent_with_memori): Agente AWS Strands aprimorado com o sistema de memória Memori
- [Blog Writing Agent](memory_agents/blog_writing_agent): Agente de escrita de blog personalizado com memória para consistência de estilo
- [Brand Reputation Monitor](memory_agents/brand_reputation_monitor): Monitoramento de reputação de marca com IA com análise de notícias e rastreamento de sentimento
- [Customer Support Voice Agent](memory_agents/customer_support_voice_agent): Assistente de suporte ao cliente com voz usando Memori v3 e Firecrawl para gerenciamento de base de conhecimento
- [Engineering Content Agent](memory_agents/engineering_content_agent): Aplicativo Agno centrado em chat que transforma demanda do HN, lacunas de oferta do DEV.to e memória Weaviate Engram em um digest de tendências de desenvolvedores, mais ideias de palestras DevRel e blog via Nebius
- [Job Search Agent](memory_agents/job_search_agent): Agente de busca de emprego com memória para rastreamento de preferências
- [Persistent Memory Agent (Agno)](memory_agents/agno_memory_agent): Agente baseado em Agno com capacidades de memória persistente
- [Product Launch Agent](memory_agents/product_launch_agent): Ferramenta de inteligência competitiva para analisar lançamentos de produtos de concorrentes
- [Social Media Agent](memory_agents/social_media_agent): Agente de automação de mídias sociais com memória para voz da marca
- [Study Coach Agent](memory_agents/study_coach_agent): Coach de estudos com IA usando Memori v3 e LangGraph para verificação multi-etapas de compreensão
- [YouTube Trend Agent](memory_agents/youtube_trend_agent): Agente de análise de canal do YouTube com Memori, Agno e Exa para análise de tendências e ideias de vídeos

### 📚 Aplicações RAG

**Exemplos de geração aumentada por recuperação para compreensão de documentos e bases de conhecimento.** _18 projetos_

- [Agentic RAG with Agno and GPT-5](rag_apps/agentic_rag): Implementação RAG agêntica com Agno e GPT-5
- [Agentic Typed RAG with LlamaIndex](rag_apps/agentic_typed_rag_llamaindex): RAG tipada e verificada por citação com respostas estruturadas, análise local de documentos e recusa determinística para evidências fracas
- [Codebase Q&A RAG](rag_apps/chat_with_code): Explorador de código conversacional e assistente de documentação
- [Enterprise Contextual RAG](rag_apps/contextual_ai_rag): RAG em nível empresarial com armazenamentos gerenciados e avaliação de qualidade
- [Gemma 3 Document OCR](rag_apps/gemma_ocr/): Processador de documentos e imagens baseado em OCR usando o modelo Gemma 3
- [GraphRAG with Neo4j](rag_apps/graphrag_neo4j): Extração de grafo de conhecimento e recuperação via Cypher com Neo4j e Nebius
- [LiteParse Invoice & Receipt Auditor](rag_apps/liteparse_invoice_auditor): OCR local com caixas delimitadoras LiteParse, auditoria LLM Nebius para erros de matemática e cobranças duplicadas, fixação de evidências em scans e um resumo em lote por LLM
- [LlamaIndex RAG Starter](rag_apps/llamaIndex_starter): Modelo inicial RAG LlamaIndex e Nebius
- [LLM and RAG Debugger (WFGY 16-Problem Map)](rag_apps/wfgy_llm_debugger): Depurador baseado em mapa de 16 modos para bugs de LLM e RAG
- [Multi-PDF RAG Analyzer](rag_apps/pdf_rag_analyser): Sistema de chat e análise multi-PDF
- [Nebius RAG Starter](rag_apps/simple_rag): Implementação RAG básica com Nebius para inícios rápidos
- [NVIDIA Nemotron Document OCR](rag_apps/nvidia_ocr/): Análise de documentos e imagens baseada em OCR usando NVIDIA Nemotron-Nano-V2-12b
- [Production PDF RAG with Reranking](rag_apps/advanced_rag_with_reranking): RAG de PDF pronto para produção com recuperação contextual, busca híbrida Qdrant, reranking, respostas em streaming, ingestão de uploads e citações clicáveis
- [Qwen3 PDF RAG Chat](rag_apps/qwen3_rag): Interface de chatbot PDF construída com Streamlit
- [Resume Optimizer](rag_apps/resume_optimizer): Ferramenta de otimização e aprimoramento de currículo com IA
- [Trustworthy RAG](rag_apps/trustworthy_rag): Verificação de citações, checagens de evidência por afirmação e pontuação de alucinação para respostas RAG
- [Video Q&A with Timestamp Citations](rag_apps/video_rag): Recuperação multimodal de vídeo com embeddings Gemini, Weaviate, Nebius e citações de timestamp clicáveis
- [Web-Augmented Agentic RAG](rag_apps/agentic_rag_with_web_search): RAG avançado com CrewAI, Qdrant e Exa para capacidades de busca híbrida

### 🔬 Agentes Avançados

**Pipelines multiagente complexos para fluxos de trabalho de ponta a ponta prontos para produção.** _35 projetos_

- [AI Hedge Fund Research Team](advance_ai_agents/ai-hedgefund): Fluxo de trabalho agêntico para análise financeira abrangente
- [AI Trend Research Agent](advance_ai_agents/trend_analyzer_agent): Mineração e análise de tendências de IA com Google ADK
- [Candidate Profile Analyzer (Candilyzer)](advance_ai_agents/candidate_analyser): Ferramenta de análise de candidatos para perfis do GitHub e LinkedIn
- [Car Finder Agent](advance_ai_agents/car_finder_agent): Sistema de recomendação de carros usados com IA usando CrewAI e MongoDB
- [Conference Proposal Generator](advance_ai_agents/conference_agnositc_cfp_generator): Sistema automatizado de geração de propostas de conferência
- [Conference Talk Abstract Generator](advance_ai_agents/conference_talk_abstract_generator): Geração automatizada de resumo de palestra com Google ADK e Couchbase
- [Contract Review Crew (Paralegal)](advance_ai_agents/paralegal_crew): Fluxo de revisão de contratos CrewAI para extração de cláusulas, análise de risco e redlines recomendados
- [Cosmos Arena Debate Council](advance_ai_agents/cosmos_arena_debate_council): Conselho de debate multiagente construído com LangGraph e o modelo de raciocínio NVIDIA Cosmos via Nebius Token Factory
- [Customer Support Resolution Agent](advance_ai_agents/customer_support_resolution_agent): Agente de suporte LangChain e Nebius com recuperação de base de conhecimento, consulta de pedidos e escalonamento de tickets humanos
- [Deep Research + Writing Agents Workshop](advance_ai_agents/deep_research_writing_agents_nebius_okahu): Workshop LangChain MCP da Nebius com pesquisa Exa, geração de imagens Gemini e observabilidade de avaliação Okahu/Monocle
- [Deep Research Workflow](advance_ai_agents/deep_researcher_agent): Agente de pesquisa multi-estágio com Agno e ScrapeGraph AI
- [Due Diligence Agent](advance_ai_agents/due_diligence_agent): Pipeline multiagente de due diligence de empresa com AG2 e raspagem profunda da web TinyFish
- [Financial Document OS](advance_ai_agents/financial_document_os): Transforma PDFs financeiros em um banco de dados relacional editável com citações em nível de fonte
- [Financial Market Data Service](advance_ai_agents/finance_service_agent): Servidor FastAPI para dados e previsões de ações com Agno
- [Financial Research Agent (AgentField)](advance_ai_agents/agentfield_finance_research_agent): Agente de pesquisa financeira com AgentField
- [GitHub and LinkedIn Job Finder](advance_ai_agents/job_finder_agent): Automação de busca de emprego no LinkedIn com integração Bright Data
- [Jev Social Research Agent](advance_ai_agents/jev_social_research_agent): Roteamento tipado Jev, evidência local da CLI socai e síntese Nebius vinculada a evidências para pesquisa de Instagram, TikTok e LinkedIn
- [Local File-Editing Agent Prototype](advance_ai_agents/coding_harness_agent): Protótipo de agente de codificação local com ferramentas de descoberta, leitura e edição de arquivos
- [Maintainer Intelligence Brief](advance_ai_agents/maintainer_brief): Briefings semanais de inteligência de código aberto de sinais de comunidade, segurança e documentos com citações de fonte
- [Meeting Assistant Agent](advance_ai_agents/meeting_assistant_agent): Notas de reunião e criação de tarefas automatizadas a partir de conversas
- [Multi-Agent Coding Harness](advance_ai_agents/coding_agent_harness): Equipe de codificação LangGraph profunda com planejamento, exploração de repositório, edições de arquivos com gate humano e loops de teste em sandbox E2B
- [Nebius Autonomous Pipeline Optimizer](advance_ai_agents/nebius-autoresearch-autoresearch-mar30): Otimizador de pipeline de análise de táxi de NYC com busca de código iterativa usando inferência Nebius Token Factory em tempo real ou em lote
- [Pre-Meeting Intel Agent (Briefing Room)](advance_ai_agents/meeting_briefing_agent): Loop LangGraph plan-research-reflect com busca web Tavily que transforma um nome de empresa em um brief de reunião de uma página com citações
- [Price Monitoring Agent](advance_ai_agents/price_monitoring_agent): Agente de monitoramento e alerta de preços alimentado por CrewAI, Twilio e Nebius
- [Prompt Format Benchmark](advance_ai_agents/context_engineering_pipeline): Harness de benchmark para comparar formatos de prompt XML, JSON e Markdown em precisão, latência e uso de tokens
- [Sandboxed Browser Game Generator](advance_ai_agents/pydantic_game_agent): Estúdio multiagente FastAPI que gera jogos de navegador em sandbox a partir de um prompt usando Pydantic AI e GLM-5.2 na Nebius
- [SEO Content Strategy Team](advance_ai_agents/content_team_agent): Fluxo de otimização de conteúdo SEO com Agno e SerpAPI para ranqueamento no Google AI Search
- [Shark Tank Pitch Practice Agent](advance_ai_agents/shark_tank_agent): Sala Shark Tank 3D interativa com três tubarões investidores Mastra da Nebius, Q&A por rodadas, memorandos de negócio e histórico de relatório SQLite
- [Software Engineering Model Arena](advance_ai_agents/coding_model_arena): [Nebius Token Factory](https://dub.sh/nebius) benchmark para dois modelos de codificação com sete desafios curados, testes locais ocultos ponderados, pontuação de crédito parcial e um juiz independente
- [Startup Go-to-Market Strategy Agent](advance_ai_agents/smart_gtm_agent): Agente de estratégia de go-to-market e análise competitiva
- [Startup Idea Validator Agent](advance_ai_agents/startup_idea_validator_agent): Fluxo de trabalho agêntico para validar e analisar ideias de startups
- [Temporal Agents](advance_ai_agents/temporal_agents/): Exemplos de agentes de IA baseados em Temporal
- [Temporal Transaction Agent Evaluation (Okahu + Monocle)](advance_ai_agents/temporal_agents/temporal_okahu_agent/temporal-tx-agent-eval): Loop de avaliação e regressão para um agente de processamento de fraude Temporal, usando traces OpenTelemetry, verificações determinísticas e avaliações Okahu graduadas por LLM
- [Web Intelligence Agent](advance_ai_agents/web_intelligence_agent): Pipeline multiagente Mastra que transforma evidências web Olostep em estudos de caso verificados por Nemotron com persistência SQLite e trilha de auditoria Velt
- [Workflow Audit Trail (FlowSentinel)](advance_ai_agents/flowsentinal_audittrail): Central de comando de fluxo de trabalho Next.js com raciocínio Nebius Nemotron, orquestração n8n, logs de atividade Velt e exposição opcional via Tailscale Funnel

### 🧬 Ajuste Fino

**Exemplos de ponta a ponta de ajuste fino de LLMs de código aberto, da preparação de dados à implantação.** _6 projetos_

- [Customer Support Fine-Tuning with Data Lab](fine_tuning/customer_support_datalab): Fluxo de destilação professor-aluno para gerar dados de suporte, curá-los no Data Lab, ajustar e implantar
- [Insurance Claims Fine-Tuning](fine_tuning/insurance_claims_finetuning): Data Lab, ajuste fino LoRA e um app de comparação Gradio para sinistros de seguro
- [Legal Tech Fine-Tuning (Self-Hosted)](fine_tuning/legal-tech-fine-tuning-nebius-cloud): Ajusta o Gemma na legislação do Reino Unido com LoRA, serve com vLLM e expõe uma camada FastAPI
- [Legal Tech Fine-Tuning (Token Factory)](fine_tuning/legal-tech-fine-tuning-token-factory): Ajuste fino LoRA gerenciado na Nebius Token Factory com implantação de modelo privado
- [Open-Source LLM Fine-Tuning on Token Factory](fine_tuning/open_source_llms_token_factory): Passo a passo de ajuste fino LoRA primeiro em Colab para enviar um dataset, treinar, monitorar e implantar
- [Standalone Customer Support Fine-Tuning (Colab)](fine_tuning/customer_support_standalone_colab): Notebook Colab totalmente autônomo para o fluxo de destilação e ajuste fino de suporte ao cliente

## 📺 Tutoriais e Vídeos

### 🎓 Listas de Cursos

- [**AWS Strands Course**](course/aws_strands): Curso completo de 8 lições sobre construção de agentes de IA com AWS Strands SDK ([assistir à playlist](https://www.youtube.com/playlist?list=PLMZM1DAlf0Lrc43ZtUXAwYu9DhnqxzRKZ))
- [**Voice Agents Playlist**](https://www.youtube.com/watch?v=c6t4q0tE61E&list=PLKCdxubW1354): Tutoriais sobre construção de agentes de voz

### 🔧 Tutoriais de Frameworks

- [**AI Agents, MCP e mais...**](https://www.youtube.com/playlist?list=PL2ambAOfYA6-LDz0KpVKu9vJKAqhv0KKI): Tutoriais mistos e demos de projetos
- [**Build AI Agents**](https://www.youtube.com/playlist?list=PLMZM1DAlf0LqixhAG9BDk4O_FjqnaogK8): Tutoriais gerais de desenvolvimento de agentes de IA
- [**Build with MCP**](https://www.youtube.com/playlist?list=PLMZM1DAlf0Lolxax4L2HS54Me8gn1gkz4): Tutoriais e exemplos do Model Context Protocol

---

<div align="center">

## 📥 Fique por Dentro com o Daily AI Insight!

Receba tutoriais semanais fáceis de seguir e análises profundas sobre IA, LLMs e frameworks de agentes. Perfeito para desenvolvedores que querem aprender, construir e se manter à frente com as novas tecnologias. Assine nossa Newsletter!

[![Subscribe to our Newsletter](https://github.com/user-attachments/assets/990d1947-337b-4e87-a7e6-e619ec19dee6)](https://mranand.substack.com/subscribe)

</div>

---

## Introdução

### Pré-requisitos

- **Python 3.10+** (Python 3.11+ recomendado para projetos mais recentes)
- **Git** para clonar o repositório
- **Gerenciador de Pacotes**: `pip` ou `uv` (recomendado para instalações mais rápidas)
- **Chaves de API**: A maioria dos projetos requer chaves de API (consulte os READMEs individuais dos projetos)

### Início Rápido

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Arindam200/awesome-ai-apps.git
   cd awesome-ai-apps
   ```

2. **Escolha um projeto** e navegue até seu diretório

   ```bash
   cd starter_ai_agents/agno_starter  # Exemplo: Comece com o starter Agno
   ```

3. **Configure as variáveis de ambiente**

   ```bash
   cp .env.example .env  # Copie o arquivo de ambiente de exemplo
   # Edite .env com suas chaves de API
   ```

4. **Instale as dependências**

   ```bash
   # Usando pip
   pip install -r requirements.txt

   # OU usando uv (recomendado - mais rápido)
   uv sync
   # ou
   uv pip install -e .
   ```

5. **Execute o projeto**

   ```bash
   python main.py
   # ou para apps Streamlit
   streamlit run app.py
   ```

## 🤝 Contribuindo

Convidamos contribuições da comunidade! Veja como você pode ajudar:

- 💡 **Adicionar novos projetos**: Envie seus próprios exemplos de agentes de IA
- 🔧 **Corrigir problemas**: Contribua com melhorias de código e correções de bugs
- 📝 **Melhorar a documentação**: Ajude a tornar os projetos mais acessíveis
- 🐛 **Reportar bugs** ou sugerir melhorias via [GitHub Issues](https://github.com/Arindam200/awesome-ai-apps/issues)

**Antes de contribuir:**

- Leia nossas [Diretrizes de Contribuição](CONTRIBUTING.md) para informações detalhadas
- Verifique issues existentes para evitar duplicatas
- Siga a estrutura e as convenções de nomenclatura do projeto
- Garanta que seu projeto inclua um README.md abrangente

**Importante:** Este projeto segue um [Código de Conduta do Colaborador](CODE_OF_CONDUCT.md). Ao participar, você concorda em cumprir seus termos.

## 📜 Licença

Este repositório está licenciado sob a [MIT License](./LICENSE). Sinta-se à vontade para usar e modificar os exemplos em seus projetos.

## 👥 Principais Mantenedores

Este projeto é mantido ativamente por:

<p align="center">
  <a href="https://github.com/Arindam200" title="Arindam Majumder">
    <img src="https://avatars.githubusercontent.com/u/109217591?s=128&v=4" width="72" height="72" alt="Arindam Majumder" style="border-radius: 50%;" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/shivaylamba" title="Shivay Lamba">
    <img src="https://avatars.githubusercontent.com/u/19529592?s=128&v=4" width="72" height="72" alt="Shivay Lamba" style="border-radius: 50%;" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/Astrodevil" title="Astrodevil">
    <img src="https://avatars.githubusercontent.com/u/73425223?s=128&v=4" width="72" height="72" alt="Astrodevil" style="border-radius: 50%;" />
  </a>
</p>

<p align="center">
  <sub>
    <a href="https://github.com/Arindam200">Arindam Majumder</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/shivaylamba">Shivay Lamba</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/Astrodevil">Amitesh Anand</a>
  </sub>
</p>

Para quaisquer dúvidas, sugestões ou contribuições, sinta-se à vontade para entrar em contato com os mantenedores.

## Thank You for the Support! 🙏

[![Star History Chart](https://star-history.dera.page/svg?repos=Arindam200/awesome-ai-apps&type=Date)](https://star-history.dera.page/#Arindam200/awesome-ai-apps&Date)
