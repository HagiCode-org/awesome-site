![Banner](/assets/awesome_banner.png)

<div align="center">

# Awesome AI Apps [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<a href="https://trendshift.io/repositories/14662" target="_blank"><img src="https://trendshift.io/api/badge/repositories/14662" alt="Arindam200%2Fawesome-ai-apps | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

</div>

Este repositorio es una colección completa de **132 proyectos**, tutoriales y recetas para construir potentes aplicaciones impulsadas por LLM, incluyendo agentes de texto, asistentes de voz, aplicaciones RAG y herramientas respaldadas por MCP. Estos proyectos sirven de guía para desarrolladores que trabajan con diversos frameworks y stacks de IA.

## 📋 Tabla de contenidos

- [🚀 Aplicaciones de IA destacadas](#-featured-ai-apps)
  - [🧩 Agentes iniciales](#-starter-agents)
  - [🪶 Agentes simples](#-simple-agents)
  - [🎙️ Agentes de voz](#-voice-agents)
  - [🗂️ Agentes MCP](#️-mcp-agents)
  - [🧠 Agentes con memoria](#-memory-agents)
  - [📚 Aplicaciones RAG](#-rag-applications)
  - [🔬 Agentes avanzados](#-advanced-agents)
  - [🧬 Fine-Tuning](#-fine-tuning)
- [📺 Tutoriales y vídeos](#-tutorials--videos)
- [🚀 Primeros pasos](#getting-started)
- [🤝 Contribuir](#-contributing)

---

<div align="center">

## 💎 Patrocinadores

<p align="center">
  ¡Un enorme agradecimiento a nuestros patrocinadores por su generoso apoyo!
</p>

<table align="center" cellpadding="10" style="width:100%; border-collapse:collapse;">
  <tr align="center">
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/brightdata" target="_blank" title="Visitar Bright Data">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Bright_Data.svg" height="35" style="max-width:180px;" alt="Bright Data - Web Data Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Plataforma de datos web</span>
        <br>
        <a href="https://dub.sh/brightdata" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visitar el sitio de Bright Data">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/nebius" target="_blank" title="Visitar Nebius Token Factory">
        <img src="./assets/nebius.png" height="36" style="max-width:180px;" alt="Nebius Token Factory">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Proveedor de inferencia de IA</span>
        <br>
        <a href="https://dub.sh/nebius" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visitar Nebius Token Factory">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/scrapegraphai" target="_blank" title="Visitar ScrapeGraphAI en GitHub">
        <img src="https://raw.githubusercontent.com/ScrapeGraphAI/ScrapeGraph-AI/main/docs/assets/scrapegraphai_logo.png" height="44" style="max-width:180px;" alt="ScrapeGraphAI - Web Scraping Library">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Framework de web scraping de IA</span>
        <br>
        <a href="https://dub.sh/scrapegraphai" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Ver ScrapeGraphAI en GitHub">
        </a>
      </sub>
    </td>
  </tr>
  <tr align="center">
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/memorilabs" target="_blank" title="Visitar Memorilabs">
        <img src="assets/memori.png" height="36" style="max-width:180px;" alt="Memori - SQL Native Memory for AI">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Memoria SQL nativa para IA</span>
        <br>
        <a href="https://dub.sh/memorilabs" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visitar el sitio de Memorilabs">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/copilotkit" target="_blank" title="Visitar CopilotKit">
        <img src="assets/copilot-kit-logo.svg" height="36" style="max-width:180px;" alt="CopilotKit - Agentic Application Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Plataforma de aplicaciones agenticas</span>
        <br>
        <a href="https://dub.sh/copilotkit" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visitar el sitio de CopilotKit">
        </a>
      </sub>
    </td>
    <td width="300" valign="middle" align="center">
      <a href="https://dub.sh/scalekitt" target="_blank" title="Visitar ScaleKit">
        <img src="assets/scalekit.svg" height="36" style="max-width:180px;" alt="ScaleKit - Auth Stack for AI">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Stack de autenticación para IA</span>
        <br>
        <a href="https://dub.sh/scalekitt" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visitar el sitio de ScaleKit">
        </a>
      </sub>
    </td>
  </tr>
  <tr align="center">
    <td width="200" valign="middle" align="center">
      <a href="https://okahu.ai" target="_blank" title="Visitar Okahu">
        <img src="assets/okahu.png" height="36" style="max-width:180px;" alt="Okahu - AI Platform">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Plataforma de observabilidad de IA</span>
        <br>
        <a href="https://okahu.ai" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visitar el sitio de Okahu">
        </a>
      </sub>
    </td>
    <td width="200" valign="middle" align="center">
      <a href="https://dub.sh/agentfield" target="_blank" title="Visitar AgentField">
        <img src="assets/agentfield.png" height="40" style="max-width:180px;" alt="AgentField - Kubernetes for AI Agents">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Kubernetes para agentes de IA</span>
        <br>
        <a href="https://dub.sh/agentfield" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visitar el sitio de AgentField">
        </a>
      </sub>
    </td>
    <td width="200" valign="middle" align="center">
      <a href="https://dub.sh/byteful" target="_blank" title="Visitar Byteful">
      <img src="https://byteful.com/favicon.ico" height="40" style="max-width:180px;" alt="Byteful">
      </a>
      <br>
      <sub>
        <span style="white-space:nowrap;">Byteful</span>
        <br>
        <a href="https://dub.sh/byteful" target="_blank">
          <img src="https://img.shields.io/badge/Visit%20Site-blue?style=flat-square" alt="Visitar el sitio de Byteful">
        </a>
      </sub>
    </td>
  </tr>

</table>

### 💎 Conviértete en patrocinador

<p align="center">
¿Interesado en patrocinar este proyecto? ¡No dudes en contactarnos!
<br/>
<a href="mailto:contact@studio1hq.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
</a>
</p>

</div>

---

## 🚀 Aplicaciones de IA destacadas

### 🧩 Agentes iniciales

**Agentes de inicio rápido para aprender y extender diferentes frameworks de IA.** _21 proyectos_

- [AutoGen Tool-Calling Starter](starter_ai_agents/autogen_starter): Microsoft AutoGen `AssistantAgent` con una herramienta personalizada, impulsado por Nebius Token Factory
- [AWS Strands Agent Starter](starter_ai_agents/aws_strands_starter): Agente de informe meteorológico usando el SDK AWS Strands
- [CAMEL AI Model Benchmark](starter_ai_agents/camel_ai_starter): Herramienta de benchmarking de rendimiento que compara varios modelos de IA
- [Coding Harness Starter](starter_ai_agents/coding_harness_starter): Bucle de codificación del SDK OpenAI Agents con plan, ediciones con aprobación, pruebas fijas y revisión acotada, impulsado por Nebius Token Factory
- [CrewAI Research Crew](starter_ai_agents/crewai_starter): Ejemplo de equipo de investigación multiagente
- [Docker cagent Multi-Agent Starter](starter_ai_agents/cagent_starter): Runtime multiagente de código abierto y personalizable de Docker
- [DSPy Optimization Starter](starter_ai_agents/dspy_starter): Framework DSPy para construir y optimizar sistemas de IA
- [Google Agent Development Kit Starter](starter_ai_agents/google_adk_starter): Plantilla inicial de Google Agent Development Kit
- [Hacker News Trend Analyst (Agno)](starter_ai_agents/agno_starter): Agente basado en Agno para análisis de tendencias en Hacker News
- [Hugging Face smolagents Starter](starter_ai_agents/smolagents_starter): Agente de búsqueda web code-first de Hugging Face smolagents
- [KAOS Kubernetes Multi-Agent Starter](starter_ai_agents/kaos_starter): Sistema multiagente nativo de Kubernetes con herramientas MCP y LLM in-cluster
- [LangChain Tool-Calling Starter](starter_ai_agents/langchain_starter): Agente de llamada a herramientas de LangChain con `create_tool_calling_agent` + `AgentExecutor`, impulsado por Nebius
- [LangGraph ReAct Agent Starter](starter_ai_agents/langgraph_starter): Agente ReAct preconstruido de LangGraph (`create_react_agent`) con herramientas personalizadas, impulsado por Nebius
- [Letta Stateful Memory Agent](starter_ai_agents/letta_starter): Agente con estado con memoria a largo plazo persistente entre sesiones
- [LlamaIndex Task Manager](starter_ai_agents/llamaindex_starter): Asistente de tareas impulsado por LlamaIndex
- [Mastra Tool-Calling Starter](starter_ai_agents/mastra_starter): Agente TypeScript-first con una herramienta personalizada impulsado por Nebius Token Factory
- [Microsoft Agent Framework Starter](starter_ai_agents/microsoft_agents_starter): Demos de planificación de viajes multiagente construidas sobre Microsoft Agent Framework
- [OpenAI Agents SDK Starter](starter_ai_agents/openai_agents_sdk): SDK OpenAI Agents con ejemplos de asistente de correo y escritor de haikus
- [PydanticAI Weather Bot](starter_ai_agents/pydantic_starter): Agente de información meteorológica en tiempo real
- [Sayna Realtime Voice Agent](starter_ai_agents/sayna_starter): Infraestructura de voz en tiempo real con STT/TTS multiproveedor (Deepgram, ElevenLabs, Azure, Google) y streaming WebSocket
- [Semantic Kernel Starter](starter_ai_agents/semantic_kernel_starter): `ChatCompletionAgent` de Microsoft Semantic Kernel con llamada a herramientas basada en plugins

### 🪶 Agentes simples

**Casos de uso directos y prácticos para aplicaciones de IA cotidianas.** _18 proyectos_

- [Agno Agent Examples](simple_ai_agents/agno_ai_examples): Ejemplos de agentes simples a multiagente con búsqueda web y una base de conocimientos
- [Agno Agent UI](simple_ai_agents/agno_ui_agent): Interfaz interactiva para agentes web y financieros
- [AI Agent Registry Explorer](simple_ai_agents/agent_discovery_agent): Encuentra y compara agentes de IA en los registros NANDA, MCP, Virtuals, A2A y ERC-8004
- [Calendar Assistant](simple_ai_agents/cal_scheduling_agent): Integración de programación de calendario con Cal.com
- [Cost-Aware Model Router (RouteLLM)](simple_ai_agents/llm_router): Enrutamiento inteligente de modelos con RouteLLM (GPT-4o-mini vs Nebius Llama) para optimización de costos
- [Email-to-Calendar Assistant](simple_ai_agents/email_to_calendar_scheduler): Lector de Gmail y gestor de Google Calendar impulsado por IA
- [Financial Reasoning Agent](simple_ai_agents/reasoning_agent): Demostración de razonamiento financiero paso a paso
- [Human-in-the-Loop Agent](simple_ai_agents/human_in_the_loop_agent): Acciones HITL para ejecución segura de tareas de IA
- [LangChain Operations Agent Collection](simple_ai_agents/langchain_simple_agents): Agentes de respuesta a incidentes, soporte, riesgo de proveedores y calidad de datos impulsados por Nebius, con salidas tipadas y herramientas protegidas
- [Mastra Weather Bot](simple_ai_agents/mastra_ai_weather_agent): Actualizaciones meteorológicas usando el framework Mastra AI
- [Natural-Language Database Assistant](simple_ai_agents/talk_to_db): Consultas a bases de datos en lenguaje natural con GibsonAI y LangChain
- [Natural-Language SQL Agent (LangChain)](simple_ai_agents/langchain_data_agent_poc): Agente de datos de lenguaje natural a SQL con LangGraph, Nebius, seguridad SQL de solo lectura y gráficos Streamlit
- [Nebius Chat](simple_ai_agents/nebius_chat): Interfaz de chat para Nebius Token Factory
- [Newsletter Generator](simple_ai_agents/newsletter_agent): Generador de boletines impulsado por IA con integración Firecrawl
- [Stock Market Finance Agent](simple_ai_agents/finance_agent): Agente de seguimiento de datos bursátiles y de mercado en tiempo real
- [Stock Portfolio Analyst](simple_ai_agents/stock_portfolio_analyst): Valoración de cartera en vivo, análisis de concentración, marcas de riesgo e ideas de reequilibrio con Agno
- [VoyageCompass Travel Planner](simple_ai_agents/nebius_travel_planner): Planificador de viajes LangChain y Nebius con herramientas de clima, investigación, conversión de moneda, presupuestos y equipaje
- [Web Automation Agent](simple_ai_agents/browser_agent): Agente de automatización de navegador usando Nebius y browser-use

### 🎙️ Agentes de voz

**Asistentes de voz en tiempo real y pipelines de voz en streaming** — incluyendo LiveKit, Pipecat, Gradium y [VoxCode](voice_agents/Cursor_code_editor) (Deepgram + Cursor SDK). _9 proyectos_

- [AI Pitch Coach (Gradium + Nebius)](voice_agents/voice-agent-gradium-nebius-langchain): Entrenador de pitches conversacional usando Gradium STT/TTS, orquestación LangChain y razonamiento Nebius
- [Customer Support Voice Agent (LiveKit)](voice_agents/customer_support_agent): Agente de soporte de voz impulsado por Nebius con transferencia a un manager de IA que preserva el contexto, cancelación de ruido y manejo de inactividad
- [Gemini Realtime Voice Agent (LiveKit)](voice_agents/livekit_gemini_agents): LiveKit Agents con Google Gemini Live (`gemini` multimodal en tiempo real) para conversaciones de voz de baja latencia en una sala LiveKit
- [Healthcare Voice Contact Center](voice_agents/healthcare_contact_center): Centro de contacto sanitario Pipecat con reserva de citas, gestión de FAQ y escalado a supervisión
- [Multilingual Voice Agent (Pipecat + Sarvam)](voice_agents/pipecat_agent): Pipeline de voz Pipecat con STT/TTS Sarvam y OpenAI para chat; transporte WebRTC (navegador) o Daily vía el runner Pipecat
- [RSVP Confirmation Voice Agent (LiveKit)](voice_agents/livekit_rsvp_agent): Agente de voz saliente que llama a los asistentes, confirma RSVPs y actualiza una base de datos de eventos respaldada en JSON
- [Speed-to-Lead Sales Voice Agent](voice_agents/speed_to_lead_agent): Agente de voz basado en LiveKit que llama instantáneamente a los leads entrantes, los enruta a especialistas y registra en un CRM simulado
- [VoxCode — Deepgram + Cursor Voice Coding Agent](voice_agents/Cursor_code_editor): Espacio de trabajo de voz local para resúmenes de base de código y preguntas de arquitectura; orquestación Deepgram Voice Agent, razonamiento Nebius e inspección y edición opcional de archivos Cursor SDK
- [Web-Search Voice Agent (LiveKit)](voice_agents/livekit_web_search_agent): Agente de voz LiveKit + Gemini en tiempo real con una herramienta `web_search` respaldada por Olostep para respuestas frescas y citadas

### 🗂️ Agentes MCP

**Ejemplos que usan el Model Context Protocol para integración de herramientas externas.** _14 proyectos_

- [Couchbase LangGraph MCP Agent](mcp_ai_agents/langchain_langgraph_mcp_agent): Agente ReAct de LangChain con integración Couchbase
- [Couchbase MCP Server](mcp_ai_agents/couchbase_mcp_server): Integración de base de datos Couchbase con el protocolo MCP
- [Custom MCP Server Starter](mcp_ai_agents/custom_mcp_server): Ejemplo de implementación de servidor MCP personalizado
- [Documentation Q&A MCP Agent](mcp_ai_agents/docs_qna_agent): Agente de preguntas y respuestas de documentación con MCP
- [Documentation RAG MCP Server](mcp_ai_agents/doc_mcp): Sistema semántico de documentación y Q&A RAG
- [GibsonAI Database MCP Agent](mcp_ai_agents/database_mcp_agent): Agente de IA conversacional para gestionar proyectos y esquemas de base de datos GibsonAI
- [GitHub MCP Agent](mcp_ai_agents/github_mcp_agent): Información y análisis de repositorios vía MCP
- [GitHub MCP Agent Starter](mcp_ai_agents/mcp_starter): Plantilla inicial de analizador de repositorios GitHub
- [Hotel Finder Agent](mcp_ai_agents/hotel_finder_agent): Búsqueda y reserva de hoteles usando integración MCP
- [Sandboxed Code Execution MCP Agent (Docker + E2B)](mcp_ai_agents/e2b_docker_mcp_agent): Agente de IA seguro para ejecutar agentes en entornos Docker aislados vía MCP Gateway
- [Secure Database MCP Agent (MCP Toolbox)](mcp_ai_agents/mcp_toolbox_security_agent): Agente de e-commerce seguro sobre PostgreSQL y MongoDB; MCP Toolbox aplica acceso por usuario, roles de mínimo privilegio y herramientas autorizadas
- [Secure MCP Access Agent (ScaleKit + Exa)](mcp_ai_agents/scalekit-exa-mcp-security): Integración MCP centrada en seguridad con búsqueda Exa
- [Self-Healing Text-to-SQL Agent (Okahu)](mcp_ai_agents/telemetry-mcp-okahu): Demostración Text-to-SQL autocurable usando trazas de Okahu Cloud vía MCP alojado
- [Taskade MCP Agent](mcp_ai_agents/taskade_mcp_agent): Agente de espacio de trabajo impulsado por IA para gestionar proyectos, tareas y flujos de trabajo vía Taskade MCP

### 🧠 Agentes con memoria

**Agentes con capacidades de memoria avanzadas para retención de contexto y personalización.** _13 proyectos_

- [AI Research Consultant with Long-Term Memory](memory_agents/ai_consultant_agent/): Agente consultor impulsado por IA que usa **Memori v3** como tejido de memoria a largo plazo y **ExaAI** para investigación
- [arXiv Researcher Agent with Memori](memory_agents/arxiv_researcher_agent_with_memori): Asistente de investigación que usa OpenAI Agents y GibsonAI Memori
- [AWS Strands Persistent Memory Agent](memory_agents/aws_strands_agent_with_memori): Agente AWS Strands mejorado con el sistema de memoria Memori
- [Blog Writing Agent](memory_agents/blog_writing_agent): Agente de escritura de blog personalizado con memoria para consistencia de estilo
- [Brand Reputation Monitor](memory_agents/brand_reputation_monitor): Monitor de reputación de marca impulsado por IA con análisis de noticias y seguimiento de sentimiento
- [Customer Support Voice Agent](memory_agents/customer_support_voice_agent): Asistente de soporte de voz con Memori v3 y Firecrawl para gestión de base de conocimientos
- [Engineering Content Agent](memory_agents/engineering_content_agent): App Agno chat-first que convierte demanda HN, brechas de oferta DEV.to y memoria Weaviate Engram en un digest de tendencias para desarrolladores más ideas de charlas DevRel y blogs vía Nebius
- [Job Search Agent](memory_agents/job_search_agent): Agente de búsqueda de empleo con memoria para seguimiento de preferencias
- [Persistent Memory Agent (Agno)](memory_agents/agno_memory_agent): Agente basado en Agno con capacidades de memoria persistente
- [Product Launch Agent](memory_agents/product_launch_agent): Herramienta de inteligencia competitiva para analizar lanzamientos de productos de competidores
- [Social Media Agent](memory_agents/social_media_agent): Agente de automatización de redes sociales con memoria para la voz de marca
- [Study Coach Agent](memory_agents/study_coach_agent): Entrenador de estudio impulsado por IA con Memori v3 y LangGraph para verificación multi-paso de comprensión
- [YouTube Trend Agent](memory_agents/youtube_trend_agent): Agente de análisis de canal de YouTube con Memori, Agno y Exa para análisis de tendencias e ideas de vídeo

### 📚 Aplicaciones RAG

**Ejemplos de generación aumentada por recuperación para comprensión de documentos y bases de conocimiento.** _18 proyectos_

- [Agentic RAG with Agno and GPT-5](rag_apps/agentic_rag): Implementación RAG agentica con Agno y GPT-5
- [Agentic Typed RAG with LlamaIndex](rag_apps/agentic_typed_rag_llamaindex): RAG tipada y verificable por citas, con respuestas estructuradas, parsing local de documentos y rechazo determinista ante evidencia débil
- [Codebase Q&A RAG](rag_apps/chat_with_code): Explorador de código conversacional y asistente de documentación
- [Enterprise Contextual RAG](rag_apps/contextual_ai_rag): RAG de nivel empresarial con almacenes de datos gestionados y evaluación de calidad
- [Gemma 3 Document OCR](rag_apps/gemma_ocr/): Procesador de documentos e imágenes basado en OCR usando el modelo Gemma 3
- [GraphRAG with Neo4j](rag_apps/graphrag_neo4j): Extracción de grafo de conocimiento y recuperación con Cypher usando Neo4j y Nebius
- [LiteParse Invoice & Receipt Auditor](rag_apps/liteparse_invoice_auditor): OCR local con cajas delimitadoras LiteParse, auditoría LLM Nebius de errores matemáticos y cargos duplicados, fijación de evidencia en escaneos y resumen por lotes LLM
- [LlamaIndex RAG Starter](rag_apps/llamaIndex_starter): Plantilla inicial RAG de LlamaIndex y Nebius
- [LLM and RAG Debugger (WFGY 16-Problem Map)](rag_apps/wfgy_llm_debugger): Depurador basado en mapa de 16 modos para errores de LLM y RAG
- [Multi-PDF RAG Analyzer](rag_apps/pdf_rag_analyser): Sistema de chat y análisis multi-PDF
- [Nebius RAG Starter](rag_apps/simple_rag): Implementación RAG básica con Nebius para inicios rápidos
- [NVIDIA Nemotron Document OCR](rag_apps/nvidia_ocr/): Parsing de documentos e imágenes basado en OCR usando NVIDIA Nemotron-Nano-V2-12b
- [Production PDF RAG with Reranking](rag_apps/advanced_rag_with_reranking): PDF RAG de forma producción con recuperación contextual, búsqueda híbrida Qdrant, reranking, respuestas en streaming, ingesta de subidas y citas clicables
- [Qwen3 PDF RAG Chat](rag_apps/qwen3_rag): Interfaz de chatbot PDF construida con Streamlit
- [Resume Optimizer](rag_apps/resume_optimizer): Herramienta de optimización y mejora de currículums impulsada por IA
- [Trustworthy RAG](rag_apps/trustworthy_rag): Verificación de citas, comprobaciones de evidencia por afirmación y puntuación de alucinaciones para respuestas RAG
- [Video Q&A with Timestamp Citations](rag_apps/video_rag): Recuperación de vídeo multimodal con embeddings Gemini, Weaviate, Nebius y citas con marca de tiempo clicables
- [Web-Augmented Agentic RAG](rag_apps/agentic_rag_with_web_search): RAG avanzada con CrewAI, Qdrant y Exa para capacidades de búsqueda híbrida

### 🔬 Agentes avanzados

**Pipelines multiagente complejos para flujos de trabajo de extremo a extremo listos para producción.** _35 proyectos_

- [AI Hedge Fund Research Team](advance_ai_agents/ai-hedgefund): Flujo de trabajo agentico para análisis financiero integral
- [AI Trend Research Agent](advance_ai_agents/trend_analyzer_agent): Minería y análisis de tendencias de IA con Google ADK
- [Candidate Profile Analyzer (Candilyzer)](advance_ai_agents/candidate_analyser): Herramienta de análisis de candidatos para perfiles de GitHub y LinkedIn
- [Car Finder Agent](advance_ai_agents/car_finder_agent): Sistema de recomendación de coches de segunda mano impulsado por IA con CrewAI y MongoDB
- [Conference Proposal Generator](advance_ai_agents/conference_agnositc_cfp_generator): Sistema automatizado de generación de propuestas de conferencia
- [Conference Talk Abstract Generator](advance_ai_agents/conference_talk_abstract_generator): Generación automatizada de resúmenes de charlas con Google ADK y Couchbase
- [Contract Review Crew (Paralegal)](advance_ai_agents/paralegal_crew): Flujo de revisión de contratos CrewAI para extracción de cláusulas, análisis de riesgo y redlines recomendadas
- [Cosmos Arena Debate Council](advance_ai_agents/cosmos_arena_debate_council): Consejo de debate multiagente construido con LangGraph y el modelo de razonamiento NVIDIA Cosmos vía Nebius Token Factory
- [Customer Support Resolution Agent](advance_ai_agents/customer_support_resolution_agent): Agente de soporte LangChain y Nebius con recuperación de base de conocimientos, búsqueda de pedidos y escalado a tickets humanos
- [Deep Research + Writing Agents Workshop](advance_ai_agents/deep_research_writing_agents_nebius_okahu): Taller LangChain MCP impulsado por Nebius con investigación Exa, generación de imágenes Gemini y observabilidad de eval Okahu/Monocle
- [Deep Research Workflow](advance_ai_agents/deep_researcher_agent): Agente de investigación multi-etapa con Agno y ScrapeGraph AI
- [Due Diligence Agent](advance_ai_agents/due_diligence_agent): Pipeline multiagente de due diligence de empresas con AG2 y scraping profundo de web TinyFish
- [Financial Document OS](advance_ai_agents/financial_document_os): Convierte PDFs financieros en una base de datos relacional editable con citas a nivel de fuente
- [Financial Market Data Service](advance_ai_agents/finance_service_agent): Servidor FastAPI para datos y predicciones de acciones con Agno
- [Financial Research Agent (AgentField)](advance_ai_agents/agentfield_finance_research_agent): Agente de investigación financiera con AgentField
- [GitHub and LinkedIn Job Finder](advance_ai_agents/job_finder_agent): Automatización de búsqueda de empleo en LinkedIn con integración Bright Data
- [Jev Social Research Agent](advance_ai_agents/jev_social_research_agent): Enrutamiento Jev tipado, evidencia local CLI socai y síntesis Nebius vinculada a evidencia para investigación en Instagram, TikTok y LinkedIn
- [Local File-Editing Agent Prototype](advance_ai_agents/coding_harness_agent): Prototipo de agente de codificación local con herramientas de descubrimiento, lectura y edición de archivos
- [Maintainer Intelligence Brief](advance_ai_agents/maintainer_brief): Informes semanales de inteligencia de código abierto de señales de comunidad, seguridad y documentos con citas de fuentes
- [Meeting Assistant Agent](advance_ai_agents/meeting_assistant_agent): Notas de reuniones y creación de tareas automatizadas a partir de conversaciones
- [Multi-Agent Coding Harness](advance_ai_agents/coding_agent_harness): Equipo de codificación LangGraph profundo con planificación, exploración de repositorio, ediciones de archivos con aprobación humana y bucles de pruebas sandboxeadas E2B
- [Nebius Autonomous Pipeline Optimizer](advance_ai_agents/nebius-autoresearch-autoresearch-mar30): Optimizador de pipeline analítico de taxis NYC con búsqueda de código iterativa usando inferencia Nebius Token Factory en tiempo real o por lotes
- [Pre-Meeting Intel Agent (Briefing Room)](advance_ai_agents/meeting_briefing_agent): Bucle plan-research-reflect LangGraph con búsqueda web Tavily que convierte un nombre de empresa en un brief de reunión de una página citado
- [Price Monitoring Agent](advance_ai_agents/price_monitoring_agent): Agente de monitoreo y alerta de precios impulsado por CrewAI, Twilio y Nebius
- [Prompt Format Benchmark](advance_ai_agents/context_engineering_pipeline): Banco de pruebas para comparar formatos de prompt XML, JSON y Markdown en precisión, latencia y uso de tokens
- [Sandboxed Browser Game Generator](advance_ai_agents/pydantic_game_agent): Estudio multiagente FastAPI que genera juegos de navegador sandboxeados desde un prompt usando Pydantic AI y GLM-5.2 en Nebius
- [SEO Content Strategy Team](advance_ai_agents/content_team_agent): Flujo de optimización de contenido SEO con Agno y SerpAPI para el ranking de Google AI Search
- [Shark Tank Pitch Practice Agent](advance_ai_agents/shark_tank_agent): Sala Shark Tank 3D interactiva con tres tiburones inversores Mastra respaldados por Nebius, Q&A por rondas, memorandos de acuerdo e historial de informes SQLite
- [Software Engineering Model Arena](advance_ai_agents/coding_model_arena): Benchmark [Nebius Token Factory](https://dub.sh/nebius) para dos modelos de codificación con siete desafíos curados, pruebas ocultas locales ponderadas, puntuación de crédito parcial y un juez independiente
- [Startup Go-to-Market Strategy Agent](advance_ai_agents/smart_gtm_agent): Agente de estrategia go-to-market y análisis competitivo
- [Startup Idea Validator Agent](advance_ai_agents/startup_idea_validator_agent): Flujo de trabajo agentico para validar y analizar ideas de startups
- [Temporal Agents](advance_ai_agents/temporal_agents/): Ejemplos de agentes de IA basados en Temporal
- [Temporal Transaction Agent Evaluation (Okahu + Monocle)](advance_ai_agents/temporal_agents/temporal_okahu_agent/temporal-tx-agent-eval): Bucle de evaluación y regresión para un agente Temporal de procesamiento de fraude, usando trazas OpenTelemetry, comprobaciones deterministas y evaluaciones Okahu puntuadas por LLM
- [Web Intelligence Agent](advance_ai_agents/web_intelligence_agent): Pipeline multiagente Mastra que convierte evidencia web Olostep en casos de estudio verificados por Nemotron con persistencia SQLite y rastro de auditoría Velt
- [Workflow Audit Trail (FlowSentinel)](advance_ai_agents/flowsentinal_audittrail): Centro de comando de flujos Next.js con razonamiento Nebius Nemotron, orquestación n8n, registros de actividad Velt y exposición opcional Tailscale Funnel

### 🧬 Fine-Tuning

**Ejemplos de extremo a extremo para fine-tuning de LLM open-source, desde la preparación de datos hasta el despliegue.** _6 proyectos_

- [Customer Support Fine-Tuning with Data Lab](fine_tuning/customer_support_datalab): Flujo de destilación profesor-estudiante para generar datos de soporte, curarlos en Data Lab, hacer fine-tuning y desplegar
- [Insurance Claims Fine-Tuning](fine_tuning/insurance_claims_finetuning): Data Lab, fine-tuning LoRA y una app de comparación Gradio para reclamaciones de seguros
- [Legal Tech Fine-Tuning (Self-Hosted)](fine_tuning/legal-tech-fine-tuning-nebius-cloud): Fine-tune de Gemma sobre legislación del Reino Unido con LoRA, sirve con vLLM y expone una capa FastAPI
- [Legal Tech Fine-Tuning (Token Factory)](fine_tuning/legal-tech-fine-tuning-token-factory): Fine-tuning LoRA gestionado en Nebius Token Factory con despliegue de modelo privado
- [Open-Source LLM Fine-Tuning on Token Factory](fine_tuning/open_source_llms_token_factory): Recorrido LoRA Colab-first para subir un dataset, entrenar, monitorear y desplegar
- [Standalone Customer Support Fine-Tuning (Colab)](fine_tuning/customer_support_standalone_colab): Notebook Colab totalmente independiente para el flujo de destilación y fine-tuning de soporte

## 📺 Tutoriales y vídeos

### 🎓 Listas de reproducción de cursos

- [**AWS Strands Course**](course/aws_strands): Curso completo de 8 lecciones sobre construcción de agentes de IA con el SDK AWS Strands ([ver la lista de reproducción](https://www.youtube.com/playlist?list=PLMZM1DAlf0Lrc43ZtUXAwYu9DhnqxzRKZ))
- [**Voice Agents Playlist**](https://www.youtube.com/watch?v=c6t4q0tE61E&list=PLKCdxubW1354): Tutoriales sobre construcción de agentes de voz

### 🔧 Tutoriales de frameworks

- [**AI Agents, MCP y más...**](https://www.youtube.com/playlist?list=PL2ambAOfYA6-LDz0KpVKu9vJKAqhv0KKI): Tutoriales mixtos y demos de proyectos
- [**Build AI Agents**](https://www.youtube.com/playlist?list=PLMZM1DAlf0LqixhAG9BDk4O_FjqnaogK8): Tutoriales generales de desarrollo de agentes de IA
- [**Build with MCP**](https://www.youtube.com/playlist?list=PLMZM1DAlf0Lolxax4L2HS54Me8gn1gkz4): Tutoriales y ejemplos del Model Context Protocol

---

<div align="center">

## 📥 Mantente actualizado con Daily AI Insight

Recibe tutoriales semanales fáciles de seguir y análisis profundos sobre IA, LLMs y frameworks de agentes. Perfecto para desarrolladores que quieren aprender, construir y mantenerse a la vanguardia con la nueva tecnología. ¡Suscríbete a nuestro boletín!

[![Suscríbete a nuestro boletín](https://github.com/user-attachments/assets/990d1947-337b-4e87-a7e6-e619ec19dee6)](https://mranand.substack.com/subscribe)

</div>

---

## Primeros pasos

### Requisitos previos

- **Python 3.10+** (se recomienda Python 3.11+ para proyectos más nuevos)
- **Git** para clonar el repositorio
- **Gestor de paquetes**: `pip` o `uv` (recomendado para instalaciones más rápidas)
- **Claves API**: La mayoría de los proyectos requieren claves API (consulta los README de cada proyecto)

### Inicio rápido

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Arindam200/awesome-ai-apps.git
   cd awesome-ai-apps
   ```

2. **Elegir un proyecto** y navegar a su directorio

   ```bash
   cd starter_ai_agents/agno_starter  # Example: Start with Agno starter
   ```

3. **Configurar variables de entorno**

   ```bash
   cp .env.example .env  # Copy example environment file
   # Edit .env with your API keys
   ```

4. **Instalar dependencias**

   ```bash
   # Using pip
   pip install -r requirements.txt

   # OR using uv (recommended - faster)
   uv sync
   # or
   uv pip install -e .
   ```

5. **Ejecutar el proyecto**

   ```bash
   python main.py
   # or for Streamlit apps
   streamlit run app.py
   ```

## 🤝 Contribuir

¡Damos la bienvenida a las contribuciones de la comunidad! Así puedes ayudar:

- 💡 **Añadir nuevos proyectos**: Envía tus propios ejemplos de agentes de IA
- 🔧 **Arreglar problemas**: Contribuye con mejoras de código y correcciones de bugs
- 📝 **Mejorar la documentación**: Ayuda a hacer los proyectos más accesibles
- 🐛 **Reportar bugs** o sugerir mejoras vía [GitHub Issues](https://github.com/Arindam200/awesome-ai-apps/issues)

**Antes de contribuir:**

- Lee nuestras [Guías de contribución](CONTRIBUTING.md) para información detallada
- Revisa los issues existentes para evitar duplicados
- Sigue la estructura y las convenciones de nomenclatura del proyecto
- Asegúrate de que tu proyecto incluya un README.md completo

**Importante:** Este proyecto sigue un [Código de conducta de colaboradores](CODE_OF_CONDUCT.md). Al participar, aceptas cumplir sus términos.

## 📜 Licencia

Este repositorio está bajo la [licencia MIT](./LICENSE). Siéntete libre de usar y modificar los ejemplos para tus proyectos.

## 👥 Core Maintainers

Este proyecto es mantenido activamente por:

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

Para cualquier pregunta, sugerencia o contribución, no dudes en contactar a los mantenedores.

## Thank You for the Support! 🙏

[![Star History Chart](https://star-history.dera.page/svg?repos=Arindam200/awesome-ai-apps&type=Date)](https://star-history.dera.page/#Arindam200/awesome-ai-apps&Date)
