<h2 align="center">Awesome Prompt Engineering</h2>

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/main/_source/prompt.png">
</p>

<p align="center">
  Uma coleção manual de recursos para Engenharia de Prompt e Engenharia de Contexto — cobrindo artigos, ferramentas, modelos, APIs, benchmarks, cursos e comunidades para trabalhar com Modelos de Língua Grande.
</p>

<p align="center">
https://promptslab.github.io
  </p>
 <h4 align="center">
  
  ```
     Master Prompt Engineering. Join the Course at https://promptslab.github.io
  ```
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="https://github.com/promptslab/Awesome-Prompt-Engineering/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License" /></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
  <a href="https://discord.gg/m88xfYMbK6"><img src="https://img.shields.io/badge/Discord-Community-orange" alt="Community" /></a>
  <img src="https://img.shields.io/badge/Last%20Updated-February%202026-brightgreen" alt="Last Updated" />
</p>

---

## Iniciar aqui

Novo para a engenharia? Siga este caminho:

<p align="center">
  <img width="1000" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/refs/heads/main/_source/main.jpg">
</p>

1. **Aprenda o básico** → [Engenharia de Prompt ChatGPT para Desenvolvedores](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) (gratuito, ~90 min)
2. **Leia o guia** → [Guia de Engenharia Prompt da DAIR. IA](https://www.promptingguide.ai/) (open-source, abrangente)
3. **Documentos do fornecedor do estudo** → [Guia de Engenharia de Prompt da OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) · [Guia Antrópico de Engenharia Prompt](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
4. **Entenda para onde o campo está indo** → [Antrópico: Engenharia de Contexto Eficaz para Agentes de IA](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
5. **Leia a pesquisa** → [O Relatório Prompt](https://arxiv.org/abs/2406.06608) — taxonomia de 58+ técnicas de incentivo de 1500+ artigos

---

## Sumário

- [Papel](#papers)
  - [Principais inquéritos](#major-surveys)
  - [Otimização rápida e Promptização automática](#prompt-optimization-and-automatic-prompting)
  - [Compressão rápida](#prompt-compression)
  - [Raciocínios Avanços](#reasoning-advances)
  - [Aprendizagem no contexto](#in-context-learning)
  - [Sistemas Agentic Prompting e Multi-Agent](#agentic-prompting-and-multi-agent-systems)
  - [Promessa Multimodal](#multimodal-prompting)
  - [Controle Estruturado de Saída e Formato](#structured-output-and-format-control)
  - [Injecção rápida e segurança](#prompt-injection-and-security)
  - [Aplicações de Engenharia Prompt](#applications-of-prompt-engineering)
  - [Geração de Texto para Imagem](#text-to-image-generation)
  - [Geração de Texto para Música/Audio](#text-to-musicaudio-generation)
  - [Documentos de Fundação (Pre-2024)](#foundational-papers-pre-2024)
- [Ferramentas e Código](#tools-and-code)
  - [Gerenciamento e Teste de Prompt](#prompt-management-and-testing)
  - [Ferramentas de Avaliação LLM](#llm-evaluation-tools)
  - [Quadros de Agentes](#agent-frameworks)
  - [Ferramentas de otimização rápida](#prompt-optimization-tools)
  - [Red Teaming e Prompt Security](#red-teaming-and-prompt-security)
  - [MCP (Modelo de Protocolo de Contexto)](#mcp-model-context-protocol)
  - [Assistentes de Codificação de Vibe e AI](#vibe-coding-and-ai-coding-assistants)
    - [Agentes de codificação baseados em CLI](#cli-based-coding-agents)
    - [Editores de Códigos de IA / IDEs](#ai-code-editors--ides)
    - [Extensões/Plugins do IDE](#ide-extensions--plugins)
    - [Plataformas de codificação de IA / Agentes de nuvem](#ai-coding-platforms--cloud-agents)
    - [Frameworks do Agente de Codificação de Código Aberto](#open-source-coding-agent-frameworks)
  - [Outros repositórios notáveis](#other-notable-repositories)
- [APIs](#apis)
- [Datasets e Benchmarks](#datasets-and-benchmarks)
- [Modelos](#models)
- [Detectores de Conteúdo de IA](#ai-content-detectors)
- [Livros](#books)
- [Cursos](#courses)
- [Tutoriais e Guias](#tutorials-and-guides)
- [Vídeos](#videos)
- [Comunidades](#communities)
- [Pesquisa Autônoma e Agentes Auto-melhoradores](#autonomous-research--self-improving-agents)
- [Como contribuir](#how-to-contribute)

---

## Papel
📄

### Principais inquéritos

- [O Relatório Prompt: Uma Pesquisa Sistemática de Técnicas Promptizantes](https://arxiv.org/abs/2406.06608) [2024] — Levantamento mais abrangente: taxonomia de 58 textos e 40 técnicas multimodais de encaminhamento de mais de 1.500 artigos. Co-autoria com OpenAI, Microsoft, Google, Stanford.
- [Pesquisa sistemática de Engenharia de Prompt em Modelos de Língua Grande: Técnicas e Aplicações](https://arxiv.org/abs/2402.07927) [2024] — 44 técnicas nas áreas de aplicação com resumos de desempenho por tarefa.
- [Pesquisa de Métodos de Engenharia Prompt em LLMs para diferentes tarefas NLP](https://arxiv.org/abs/2407.12994) [2024] — 39 métodos de incentivo em 29 tarefas NLP.
- [Uma pesquisa de engenharia automática prompt: uma perspectiva de otimização](https://arxiv.org/abs/2502.11560) [2025] — Formaliza os métodos de auto-PE como problemas de otimização discretos/contínuos/híbridos.
- [Métodos de Prontidão Eficientes para Modelos de Linguagem Grandes: Uma Pesquisa](https://arxiv.org/abs/2404.01077) [2024] — Pesquisa de impulsos orientados para a eficiência (compressão, otimização, APE) para reduzir a computação e a latência.
- [Navegue através do Labirinto Enigmático: Uma Pesquisa da Cadeia de Raciocínios](https://arxiv.org/abs/2309.15402) [2023, ACL 2024] — Levantamento sistemático da COT.
- [Correntes desmistificantes, árvores e gráficos de pensamentos](https://arxiv.org/abs/2401.14295) [2024] — Framework unificado para topologias de raciocínio multiprompt.
- [Rumo a uma engenharia orientada para objetivos para modelos de línguas grandes: uma pesquisa](https://arxiv.org/abs/2401.14043) [2024] — Concentra-se em prompts concebidos em torno de objetivos de tarefa explícitos.
- [Rumo a uma era raciocinante: uma pesquisa de longa cadeia de pensamento para raciocinar LLMs](https://arxiv.org/abs/2503.09567) [2025] — Distingue a CdT longa da CdT curta em modelos o1/R1-era.

### Otimização rápida e Promptização automática

- [OPRO: Modelos de linguagem grandes como otimizadores](https://arxiv.org/abs/2309.03409) [2023, NeurIPS 2024] — Utiliza LLMs como otimizadores através de meta-prompts; otimiza os prompts melhor que os projetados por humanos em até 50% em BBH.
- [DSPy: Compilando modelos de linguagem declarativa em tubulações auto-melhorando](https://arxiv.org/abs/2310.03714) [2023, ICLR 2024] — Framework for programming (not promting) LLMs com otimização automática de prompt.
- [MIPRO: Otimização de Instruções e Demonstrações para Programas de Modelo de Linguagem Multi-Stage](https://arxiv.org/abs/2406.11695) [2024, EMNLP 2024] — Otimização bayesiana para programas LM multi-estágio; ganhos de precisão de até 13%.
- [TextGrad: "Diferenciação" automática via Texto](https://arxiv.org/abs/2406.07496) [2024] — Trata sistemas de IA compostos como gráficos de computação com feedback textual como gradientes. Publicado na Natureza.
- [EvoPrompt](https://arxiv.org/abs/2309.08532) [2023, ACL 2024] — Abordagem do algoritmo evolucionário para otimizar automaticamente prompts discretos.
- [Metaprompting para sistemas de IA](https://arxiv.org/abs/2311.11482) [2023, ICLR 2024 Workshop] — Modelos estruturais de diagnóstico de exemplo formalizados utilizando a teoria de categoria.
- [Engenharia Prompt Engenheiro Prompt (PE2)](https://arxiv.org/abs/2311.05661) [2024, ACL Findings] — Utiliza os LLMs para se meta-promptarem, refinando prompts com modelos passo a passo para melhorar significativamente o raciocínio.
- [Modelos de linguagem grandes são engenheiros de prompt de nível humano](https://arxiv.org/abs/2211.01910) [2022] — Geração automática rápida via APE.
- [Prompts duros feitos fácil: Otimização discreta baseada em gradientes para ajuste prompt](https://arxiv.org/abs/2302.03668) [2023]
- [SPO: Otimização Prompt Auto-Supervisionada](https://arxiv.org/abs/2502.06855) [2025] — Desempenho competitivo em 1–6% do custo dos métodos anteriores.

### Compressão rápida

- [LLMlingua-2: Destilação de dados para compressão eficiente e fiel do prompt de tarefa agnóstico](https://arxiv.org/abs/2403.12968) [2024, ACL 2024] — 3x–6x mais rápido do que LLMlingua com destilação de dados GPT-4.
- [LongLLMLingua](https://arxiv.org/abs/2310.06839) [2023, ACL 2024] — Compressão consciente de perguntas para contextos longos; 21,4% aumento de desempenho com 4x menos fichas.
- [Compressão rápida para modelos de linguagem grandes: uma pesquisa](https://arxiv.org/abs/2410.12388) [2024] — Análise exaustiva dos métodos de compressão rápida e dura.

### Raciocínios Avanços

- [Escalar o cálculo do tempo de teste LLM](https://arxiv.org/abs/2408.03314) [2024] — Mostra que a alocação de computação em tempo de teste ideal pode superar modelos maiores de 14x.
- [DeepSeek-R1: Incentivando a capacidade de raciocínio em LLMs através do aprendizado de reforço](https://arxiv.org/abs/2501.12948) [2025] — Modelo de raciocínio puro com formação em RL correspondente a o1; código aberto com variantes destiladas.
- [s1: Escala simples de tempo de teste](https://arxiv.org/abs/2501.19393) [2025] — SFT em apenas 1.000 exemplos cria modelo de raciocínio competitivo através de "forçamento orçamental".
- [Raciocínio Modelos de linguagem: Um Blueprint](https://arxiv.org/abs/2501.11223) [2025] — Raciocínio sistemático organizador de quadros LM.
- [Desmistificar raciocínios de longa cadeia de pensamento em LLMs](https://arxiv.org/abs/2502.03373) [2025] — Analisa o comportamento longo da CdT em modelos de raciocínio modernos.
- [Gráfico de Pensamentos: Resolvendo Problemas Elaborados com LLMs](https://arxiv.org/abs/2308.09687) [2023, AAAI 2024] — Modelos pensamentos como gráficos arbitrários; 62% melhoria da qualidade sobre ToT na triagem.
- [Árvore de Pensamentos: Problema Deliberado Resolvendo com LLMs](https://arxiv.org/abs/2305.10601) [2023, NeurIPS 2023] — Pesquisa de árvores sobre caminhos de raciocínio.
- [Tudo de pensamentos](https://arxiv.org/abs/2311.04254) [2023] — Integra o CoT, o ToT e os resolvedores externos através do MCTS.
- [Esqueleto de Pensamento](https://arxiv.org/abs/2307.15337) [2023] — Decodificação paralela via geração de esqueletos de resposta para uma aceleração de até 2,69x.
- [Cadeia de Pensamento Promove Razões em Modelos de Língua Grandes](https://arxiv.org/abs/2201.11903) [2022] — O papel fundamental da CdT.
- [Autoconsistência melhora a cadeia de raciocínio do pensamento](https://arxiv.org/abs/2203.11171) [2022] — Agregando múltiplas saídas de COT para confiabilidade.
- [Modelos de linguagem grandes são Razores Zero-Shot](https://arxiv.org/abs/2205.11916) [2022] — "Vamos pensar passo a passo" como um gatilho de raciocínio de tiro zero.
- [Reagir: Sinergizando Raciocínios e Atuando em Modelos de Linguagem](https://arxiv.org/abs/2210.03629) [2022] — Raciocínio e utilização de ferramentas.

### Aprendizagem no contexto

- [Aprendizado de Muitos Tiros no Contexto](https://arxiv.org/abs/2404.11018) [2024, NeurIPS 2024 Spotlight] — Ganhos significativos escalando ICL para centenas/milhares de exemplos; introduz ICL reforçada e sem percepção.
- [Aprendizado em contexto em modelos de fundação multimodal](https://arxiv.org/abs/2405.09798) [2024] — Escalas de ICL multimodal para ~2.000 exemplos em 14 conjuntos de dados.
- [Repensar o papel das demonstrações: O que faz o aprendizado em contexto funcionar?](https://arxiv.org/abs/2202.12837) [2022]
- [Pedidos fantásticos e onde encontrá - los](https://arxiv.org/abs/2104.08786) [2021] — Superando a sensibilidade de ordem rápida de poucos disparos.
- [Calibrar antes de usar: Melhorar o desempenho de poucos tiros de modelos de linguagem](https://arxiv.org/abs/2102.09690) [2021]

### Sistemas Agentic Prompting e Multi-Agent

- [Modelos de linguagem agentic grandes: uma pesquisa](https://arxiv.org/abs/2503.23037) [2025] — Levantamento abrangente organizando LLMs agentes por raciocínio, atuação e capacidades de interação.
- [Multi-Agentes baseados em Modelos Linguísticos Grandes: Uma Pesquisa de Progressos e Desafios](https://arxiv.org/abs/2402.01680) [2024] — Abrange os mecanismos de perfilação, comunicação e crescimento.
- [Mecanismos de Colaboração Multi-Agente: Uma Pesquisa de LLMs](https://arxiv.org/abs/2501.06322) [2025] — Análises de debates e estratégias de cooperação em sistemas multiagentes baseados na LLM.
- [AutoGen: habilitando aplicações LLM do próximo-Gen através de conversação multi-agente](https://arxiv.org/abs/2308.08155) [2023] — Documento de framework multiagente fundamental da Microsoft.
- [ToolLLM: Facilitando grandes modelos de linguagem para Mestre 16000+ APIs do mundo real](https://arxiv.org/abs/2307.16789) [2023, ICLR 2024] — Treina LLMs para usar coleções de API maciças do mundo real.
- [SWE-bench: Os modelos de linguagem podem resolver problemas do GitHub no mundo real?](https://arxiv.org/abs/2310.06770) [2023, ICLR 2024] — O progresso da codificação agente de referência.
- [Avaliando LLMs como agentes](https://arxiv.org/abs/2308.03688) [2023, ICLR 2024] — Benchmark em 8 ambientes.
- [PAL: Modelos de linguagem assistidos por programas](https://arxiv.org/abs/2211.10435) [2023] — Transferência de dados para intérpretes de código.

### Promessa Multimodal

- [Promessa Visual em Modelos Multimodal Grande Língua: Uma Pesquisa](https://arxiv.org/abs/2409.15310) [2024] — Primeiro estudo exaustivo sobre métodos de projecção visual em MLLMs.
- [Set-of-Mark Prompting libera aterramento visual extraordinário em GPT-4V](https://arxiv.org/abs/2310.11441) [2023] — Os marcadores visuais melhoram drasticamente o aterramento visual.
- [Uma pesquisa abrangente e guia para modelos de linguagem multimodal em tarefas de visão-língua](https://arxiv.org/abs/2411.06284) [2024] — Cobre texto, imagem, vídeo, áudio MLLMs.
- [Raciocínio multimodal da cadeia de pensamento em modelos de linguagem](https://arxiv.org/abs/2302.00923) [2023]
- [Da Engenharia Prompt à Artesanato Prompt](https://arxiv.org/abs/2411.13422) [2024] — Vista de projeto-pesquisa de prompt "craft" para modelos de difusão.

### Controle Estruturado de Saída e Formato

- [Deixe-me falar livremente? Um estudo sobre o impacto das restrições de formato no desempenho dos LLMs](https://arxiv.org/abs/2408.02442) [2024] — Examina de que forma as saídas restritivas para formatos estruturados impactam o desempenho do raciocínio.
- [Pedido de Lote: Inferência eficiente com APIs LLM](https://arxiv.org/abs/2301.08721) [2023]
- [Prompting Estruturado: Escalando em Contexto Aprendendo a 1.000 Exemplos](https://arxiv.org/abs/2212.06713) [2022]

### Injecção rápida e segurança

- [Formalização e benchmarking Prompt Injection Ataques e Defesas](https://arxiv.org/abs/2310.12815) [2023, USENIX Security 2024] — Estrutura formal com avaliação sistemática de 5 ataques e 10 defesas em 10 LLMs.
- [A Hierarquia da Instrução: Treinar LLMs para priorizar instruções privilegiadas](https://arxiv.org/abs/2404.13208) [2024] — Treinamento prioritário da OpenAI para defesa por injeção.
- [AgentDojo: Um ambiente dinâmico para avaliar ataques e defesas por injeção](https://arxiv.org/abs/2406.13352) [2024] — Referência para o cenário dos agentes realistas.
- [InjecAgent: Benchmarking Injeções Indirectas em Agentes LLM Integrados por Ferramentas](https://arxiv.org/abs/2403.02691) [2024]
- [SecAign: Defender contra a injeção imediata com optimização de preferência](https://arxiv.org/abs/2410.05451) [2024] — Defesa baseada no DPO.
- [WASP: Benchmarking Web Agent Security contra injeção rápida](https://arxiv.org/abs/2504.18575) [2025] — Referência de segurança para os agentes web/computadores.
- [Jailbreaking de muitos tiros](https://www.anthropic.com/research/many-shot-jailbreaking) [2024] — Escalar exemplos nocivos em janelas de longo contexto permite a quebra de cadeias (Anthropic Technical Report).
- [IA constitucional: Inimizade da IA Feedback](https://arxiv.org/abs/2212.08073) [2022]
- [Ignorar o Prompt Anterior: Técnicas de ataque para modelos de linguagem](https://arxiv.org/abs/2211.09527) [2022]
- [Inteligência Artificial e Cibersegurança: Riscos Documentados, Guardas Empresariais e Ameaças Emergentes em 2024-2025](https://www.ijfmr.com/research-paper.php?id=62200) [2025] — Inquérito de incidentes reais de injecção rápida com padrões práticos de governação.

### Aplicações de Engenharia Prompt

- [Refrasse e responda: Deixe os modelos de linguagem grandes fazer perguntas melhores para si mesmos](https://arxiv.org/abs/2311.04205) [2023]
- [Engenharia Jurídica para Previsão de Julgamento Jurídico Multilíngue](https://arxiv.org/abs/2212.02199) [2023]
- [Conversando com o Copiloto: Explorando Engenharia Prompt para Resolver Problemas CS1](https://arxiv.org/abs/2210.15157) [2022]
- [Promessa de conhecimento para geração de diálogo empático controlável](https://arxiv.org/abs/2302.01441) [2023]
- [LUGARES: Promove modelos de linguagem para a síntese da conversação social](https://arxiv.org/abs/2302.03269) [2023]
- [Segmentação de imagem médica usando codificadores de transformador e aprendizagem baseada em prompt: uma revisão sistemática](https://ieeexplore.ieee.org/document/11313186/) [2025]
- [TableRAG: Um framework de geração aumentada de recuperação para fundamentação de documentos heterogêneos](https://arxiv.org/abs/2506.10380) [2025] — Interface baseada em SQL que preserva a estrutura tabular para consultas multi-hop.

### Geração de Texto para Imagem

- [Uma taxonomia de modificadores de prompt para geração de texto para imagem](https://arxiv.org/abs/2204.13988) [2022]
- [Diretrizes de projeto para modelos geradores de texto para imagem de engenharia](https://arxiv.org/abs/2109.06977) [2021]
- [Síntese de Imagem de Alta Resolução com Modelos de Difusão Latente](https://arxiv.org/abs/2112.10752) [2021]
- [DALL·E: Criando imagens do texto](https://arxiv.org/abs/2102.12092) [2021]
- [Investigando Engenharia Prompt em Modelos de Difusão](https://arxiv.org/abs/2211.15462) [2022]

### Geração de Texto para Música/Audio

- [MusicLM: Gerando música de texto](https://arxiv.org/abs/2301.11325) [2023]
- [ERNIE-Música: Geração de Música de Texto para Waveform com Modelos de Difusão](https://arxiv.org/pdf/2302.04456) [2023]
- [AudioLM: Uma abordagem de modelagem de linguagem para geração de áudio](https://arxiv.org/pdf/2209.03143) [2023]
- [Make-An-Audio: Geração de Texto para Áudio com Modelos de Difusão Prompt-Anhanced](https://arxiv.org/pdf/2301.12661.pdf) [2023]

### Documentos de Fundação (Pre-2024)

Estes trabalhos estabeleceram os conceitos centrais que a engenharia rápida moderna baseia-se em:

- [Modelos de linguagem são poucos alunos (GPT-3)](https://arxiv.org/abs/2005.14165) [2020] — Demonstração de poucos disparos em escala.
- [Prefix-Tuning: Optimizando Prompts Contínuos para Geração](https://arxiv.org/abs/2101.00190) [2021]
- [O poder da escala para ajuste rápido eficiente do parâmetro](https://arxiv.org/abs/2104.08691) [2021]
- [Programação rápida para grandes modelos de linguagem: Além do paradigma de poucos disparos](https://arxiv.org/abs/2102.07350) [2021]
- [Mostrar o seu trabalho: Scratchpads para computação intermediária com modelos de linguagem](https://arxiv.org/abs/2112.00114) [2021]
- [Geração de conhecimento para raciocinar comunenses](https://arxiv.org/abs/2110.08387) [2021]
- [Tornar os modelos de linguagem pré-treinados melhores](https://aclanthology.org/2021.acl-long.295) [2021]
- [AutoPrompt: Eliciando Conhecimento de Modelos de Linguagem com Prompts Gerados Automaticamente](https://arxiv.org/abs/2010.15980) [2020]
- [Como podemos saber o que os modelos de linguagem sabem?](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00324/96460/) [2020]
- [Um Catálogo de Padrão Prompt para Melhorar a Engenharia Prompt com ChatGPT](https://arxiv.org/abs/2302.11382) [2023]
- [Promoção Sintética: Gerando Demonstrações de Cadeia de Pensamento para LLMs](https://arxiv.org/abs/2302.00618) [2023]
- [Prompts progressivos: aprendizagem contínua para modelos de linguagem](https://arxiv.org/abs/2301.12314) [2023]
- [Promessa Sucessiva para Descompletar Perguntas Complexas](https://arxiv.org/abs/2212.04092) [2022]
- [Prontidão decomposta: Uma abordagem modular para resolver tarefas complexas](https://arxiv.org/abs/2210.02406) [2022]
- [PromptChainer: Acorrentando Modelo de Língua Grande Prompts através de Programação Visual](https://arxiv.org/abs/2203.06566) [2022]
- [Pergunte-me qualquer coisa: Uma estratégia simples para modelos de linguagem](https://paperswithcode.com/paper/ask-me-anything-a-simple-strategy-for) [2022]
- [Pedir GPT-3 para ser confiável](https://arxiv.org/abs/2210.09150) [2022]
- [Em segundo pensamento, não vamos pensar passo a passo! Bias e Toxicidade em Razão Zero-Shot](https://arxiv.org/abs/2212.08061) [2022]

---

## Ferramentas e Código
🔧

### Gerenciamento e Teste de Prompt

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **Promptfoo** | CLI de código aberto para testar, avaliar e equipar LLM prompts. Configuração do YAML, integração CI/CD, testes contraditórios. ~9K+ | [GitHub](https://github.com/promptfoo/promptfoo) |
| **Promptify** | Resolver NLP Problemas com LLM & facilmente gerar diferentes pedidos de tarefas NLP para modelos generativos populares como GPT, PaLM, e muito mais com Promptify | [[Github]](https://github.com/promptslab/Promptify) |
| **Agenta** | Plataforma de desenvolvimento LLM de código aberto para gerenciamento, avaliação, feedback humano e implantação. | [GitHub](https://github.com/Agenta-AI/agenta) |
| **PromptLayer** | Versão, teste e monitore cada prompt e agente com avaliações robustas, rastreamento e conjuntos de regressão. | [Website](https://promptlayer.com/) |
| **Helicone** | Plataforma de monitoramento e otimização rápidas de produção. | [Website](https://helicone.ai/) |
| **LangGPT** | Framework para projeto estruturado e meta-prompt. 10K+ | [GitHub](https://github.com/langgpt/LangGPT) |
| **ChainForge** | Kit de ferramentas visual para construir, testar e comparar respostas de prompt LLM sem código. | [GitHub](https://github.com/ianarawjo/ChainForge) |
| **LMQL** | Uma linguagem de consulta para LLMs tornando programável a lógica prompt complexa. | [GitHub](https://github.com/eth-sri/lmql) |
| **Promptotype** | Plataforma para desenvolver, testar e gerenciar prompts LLM estruturados. | [Website](https://www.promptotype.io) |
| **PromptPanda** | Sistema de gerenciamento rápido alimentado por IA para agilizar fluxos de trabalho rápidos. | [Website](https://promptpanda.io) |
| **Promptimize AI** | Extensão do navegador para melhorar automaticamente as solicitações do usuário para qualquer modelo de IA. | [Website](https://promptimize.ai) |
| **PROMPTMETHEUS** | "Prompt Engineering IDE" baseado na Web para criar e executar prompts de forma iterativa. | [Website](https://promptmetheus.com) |
| **Better Prompt** | Suporte de teste para prompts LLM antes de empurrar para a produção. | [GitHub](https://github.com/krrishdholakia/betterprompt) |
| **OpenPrompt** | Framework de código aberto para pesquisa de aprendizagem rápida. | [GitHub](https://github.com/thunlp/OpenPrompt) |
| **Prompt Source** | Toolkit para criar, compartilhar e usar prompts de linguagem natural. | [GitHub](https://github.com/bigscience-workshop/promptsource) |
| **Prompt Engine** | Biblioteca de utilitários NPM para criar e manter prompts para LLMs (Microsoft). | [GitHub](https://github.com/microsoft/prompt-engine) |
| **PromptInject** | Framework para análise quantitativa da robustez LLM para ataques de alertas adversários. | [GitHub](https://github.com/agencyenterprise/PromptInject) |
| **LynxPrompt** | Plataforma auto-hostável para gerenciar arquivos de configuração do IDE de IA (.cursorrules, CLAUDE.md, copilot-instrutions.md). Web UI, API REST, CLI e mercado de projetos federados para assistentes de codificação de IA 30+. | [GitHub](https://github.com/GeiserX/LynxPrompt) |
| **flompt** | Visual AI prompt builder que se decompõe em 12 blocos semânticos (papel, contexto, restrições, exemplos, etc.) e os compila em XML otimizado. Extensão de navegador para ChatGPT/Claude/Gemini e servidor MCP para agentes Claude Code. Livre, código aberto. | [Website](https://flompt.dev) |

### Ferramentas de Avaliação LLM

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **DeepEval** | Framework de avaliação de código aberto cobrindo RAG, agentes e conversas com integração CI/CD. ~7K+ | [GitHub](https://github.com/confident-ai/deepeval) |
| **Ragas** | Avaliação de RAG com geração de conjuntos de testes baseados em gráficos de conhecimento e métricas de 30+. ~8K+ | [GitHub](https://github.com/explodinggradients/ragas) |
| **LangSmith** | Plataforma LangChain para depuração, teste, avaliação e monitoramento de aplicativos LLM. | [Website](https://smith.langchain.com/) |
| **Langfuse** | Observabilidade LLM de código aberto com rastreamento, gerenciamento rápido e anotação humana. ~7K+ | [GitHub](https://github.com/langfuse/langfuse) |
| **Braintrust** | Plataforma de avaliação de IA de ponta a ponta, certificado SOC2 Tipo II. | [Website](https://www.braintrust.dev/) |
| **Arize AI / Phoenix** | Monitoramento LLM em tempo real com detecção e rastreamento de deriva. | [GitHub](https://github.com/Arize-ai/phoenix) |
| **TruLens** | Avaliando e explicando aplicativos LLM; rastreia alucinações, relevância, fundamento. | [GitHub](https://github.com/truera/trulens) |
| **InspectAI** | Destinado a avaliar os agentes em função dos parâmetros de referência (AISI do Reino Unido). | [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |
| **Opik** | Avaliar, testar e enviar aplicações LLM através dev e ciclos de vida de produção. | [GitHub](https://github.com/comet-ml/opik) |
| **EvalView** | Ferramenta CLI para testar agentes de IA multi-passo com casos de teste YAML, detecção de regressão e monitoramento da produção. |[GitHub](https://github.com/hidai25/eval-view) |

### Quadros de Agentes

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **LangChain / LangGraph** | Framework de aplicativos LLM mais amplamente adotado; LangGraph adiciona fluxos de trabalho de agentes multi-step baseados em gráficos. ~100K+ / ~10K+ | [GitHub](https://github.com/langchain-ai/langchain) · [LangGraph](https://github.com/langchain-ai/langgraph) |
| **CrewAI** | A orquestração de agentes de IA com mais de 700 integrações. ~44K+ | [GitHub](https://github.com/crewAIInc/crewAI) |
| **AutoGen (AG2)** | O framework de conversação multi-agente da Microsoft. ~40K+ | [GitHub](https://github.com/microsoft/autogen) |
| **DSPy** | Framework de Stanford para programação de LLMs com otimização automática prompt/peso. ~22K+ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **OpenAI Agents SDK** | Framework de agente oficial com funções de chamada, guardiões e transferências. ~10K+ | [GitHub](https://github.com/openai/openai-agents-python) |
| **Semantic Kernel** | Framework de IA da Microsoft que alimenta o M365 Copilot; C#, Python, Java. ~24K+ | [GitHub](https://github.com/microsoft/semantic-kernel) |
| **LlamaIndex** | Framework de dados para capacidades de RAG e agente. ~40K+ | [GitHub](https://github.com/run-llama/llama_index) |
| **Haystack** | Framework NLP de código aberto com arquitetura de pipeline para RAG e agentes. ~20K+ | [GitHub](https://github.com/deepset-ai/haystack) |
| **Agno (formerly Phidata)** | Framework de agente Python com instanciação de microsegundo. ~20K+ | [GitHub](https://github.com/agno-agi/agno) |
| **Smolagents** | A estrutura minimalista do agente centrado em código (~1000 LOC). ~15K+ | [GitHub](https://github.com/huggingface/smolagents) |
| **Pydantic AI** | Framework de agente seguro de tipo usando o Pydantic para validação estruturada. ~8K+ □ | [GitHub](https://github.com/pydantic/pydantic-ai) |
| **Mastra** | Framework do agente AI do TypeScript com assistentes, RAG e observação. ~20K+ | [GitHub](https://github.com/mastra-ai/mastra) |
| **Google ADK** | Kit de Desenvolvimento de Agentes profundamente integrado com Gemini e Google Cloud. | [GitHub](https://github.com/google/adk-python) |
| **Strands Agents (AWS)** | Framework diagnóstico-modelo com integrações AWS profundas. | [GitHub](https://github.com/strands-agents/sdk-python) |
| **Langflow** | Construtor de agentes visuais baseados em nós com arrastar- e- soltar. ~ 50K+ | [GitHub](https://github.com/langflow-ai/langflow) |
| **n8n** | Automação de fluxo de trabalho com capacidades de agente de IA e integrações 400+. ~60K+ | [GitHub](https://github.com/n8n-io/n8n) |
| **Dify** | Infraestrutura tudo-em-um para fluxos de trabalho agentic com agentes de uso de ferramentas e RAG. | [GitHub](https://github.com/langgenius/dify) |
| **PraisonAI** | Multi- IA Framework de agentes com suporte LLM 100+, integração MCP e memória incorporada. | [GitHub](https://github.com/MervinPraison/PraisonAI) |
| **Neurolink** | Framework de agente de IA multifornecedor unificando mais de 12 provedores com orquestração de fluxo de trabalho. | [GitHub](https://github.com/juspay/neurolink) |
| **Composio** | Conecte mais de 100 ferramentas aos agentes de IA com configuração zero. | [GitHub](https://github.com/composiohq/composio) |

### Ferramentas de otimização rápida

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **DSPy** | Vários otimizadores (MIPROv2, BootstrapFewShot, COPRO) para ajuste automático de prompt. ~22K+ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **TextGrad** | Diferenciação automática através do texto (Stanford). ~2K+ | [GitHub](https://github.com/zou-group/textgrad) |
| **OPRO** | Otimização do Google DeepMind por solicitação. | [GitHub](https://github.com/google-deepmind/opro) |

### Red Teaming e Prompt Security

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **Garak (NVIDIA)** | Scanner de vulnerabilidade de LLM para alucinações, injeções e fugas de cadeia — o "nmap para LLMs." ~3K+ | [GitHub](https://github.com/NVIDIA/garak) |
| **PyRIT (Microsoft)** | Ferramenta de Identificação de Risco Python para equipagem automática a vermelho. ~ 3K+ | [GitHub](https://github.com/Azure/PyRIT) |
| **DeepTeam** | 40+ vulnerabilidades, 10+ métodos de ataque, suporte OWASP Top 10. | [GitHub](https://github.com/confident-ai/deepteam) |
| **LLM Guard** | Kit de ferramentas de segurança para validação de I/O do LLM. ~2K+ | [GitHub](https://github.com/protectai/llm-guard) |
| **NeMo Guardrails (NVIDIA)** | Guardas programáveis para sistemas de conversação. ~5K+ | [GitHub](https://github.com/NVIDIA/NeMo-Guardrails) |
| **Guardrails AI** | Defina formatos de saída rigorosos (esquemas JSON) para garantir a confiabilidade do sistema. | [Website](https://www.guardrailsai.com) |
| **Lakera** | Plataforma de segurança de IA para detecção de injeção rápida em tempo real. | [Website](https://lakera.ai/) |
| **Purple Llama (Meta)** | Avaliação de segurança LLM de código aberto, incluindo CyberSecEval. | [GitHub](https://github.com/meta-llama/PurpleLlama) |
| **GPTFuzz** | Geração automática do modelo jailbreak atingindo > 90% de taxas de sucesso. | [GitHub](https://github.com/sherdencooper/GPTFuzz) |
| **Rebuff** | Ferramenta de código aberto para detecção e prevenção de injeção rápida. | [GitHub](https://github.com/protectai/rebuff) |
| **AgentSeal** | "Escâner de código aberto que executa 150 sondas de ataque para testar agentes de IA para rápida injeção e vulnerabilidades de extração." | [GitHub](https://github.com/agentseal/agentseal) |

### MCP (Modelo de Protocolo de Contexto)

MCP é um padrão aberto desenvolvido pela Anthropic (nov 2024, doado para Linux Foundation Dez 2025) para conectar assistentes de IA a fontes de dados externas e ferramentas através de uma interface padronizada. Tem. **97M+ downloads mensais SDK** e foi adotado pelo GitHub, Google, e a maioria dos principais fornecedores de IA.

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **MCP Specification** | A especificação do protocolo principal e SDKs. ~15K+ | [GitHub](https://github.com/modelcontextprotocol/modelcontextprotocol) |
| **MCP Reference Servers** | Implementações oficiais: fetch, filesystem, GitHub, Slack, Postgres. | [GitHub](https://github.com/modelcontextprotocol/servers) |
| **FastMCP (Python)** | Framework Pythonic de alto nível para a construção de servidores MCP. ~5K+ | [GitHub](https://github.com/jlowin/fastmcp) |
| **GitHub MCP Server** | O servidor MCP oficial do GitHub para a interação repo, issue, PR e Actions. ~15K+ | [GitHub](https://github.com/github/github-mcp-server) |
| **Awesome MCP Servers** | Lista com curadoria de mais de 10.000 servidores MCP comunitários. ~30K+ | [GitHub](https://github.com/punkpeye/awesome-mcp-servers) |
| **Context7** | Servidor MCP fornecendo documentação específica para reduzir a alucinação de código. | [GitHub](https://github.com/upstash/context7) |
| **GitMCP** | Cria servidores MCP remotos para qualquer repo do GitHub alterando o domínio. | [Website](https://gitmcp.io/) |
| **MCP Inspector** | Ferramenta de teste visual para o desenvolvimento de servidores MCP. | [GitHub](https://github.com/modelcontextprotocol/inspector) |

### Assistentes de Codificação de Vibe e AI

> 🟢 = Código aberto · 🔵 = Comercial · 🟣 = Código aberto + comercial (núcleo aberto com nuvem/API pagos)

#### Agentes de codificação baseados em CLI

Ferramentas nativas de terminal que entendem seu codebase e executam tarefas multi-step.

| Nome | Designação das mercadorias | Tipo | Ligação |
|:-----|:-----------|:----:|:----:|
| **Claude Code** | A codificação agente do Anthropic CLI; compreende bases de código completas e executa tarefas complexas multi-passos via linguagem natural. | 🔵 | [Docs](https://docs.anthropic.com/en/docs/claude-code) |
| **OpenAI Codex CLI** | Agente de codificação de terminal de código aberto do OpenAI; leve, local-primeiro, com execução de código sandboxed. ~68K+ | 🟣 | [GitHub](https://github.com/openai/codex) |
| **Gemini CLI** | Agente de IA terminal de código aberto do Google com janela de contexto de 1M-token e Google Search grounding. ~96K+ | 🟣 | [GitHub](https://github.com/google-gemini/gemini-cli) |
| **Qwen Code** | Agente de IA de terminal de código aberto otimizado para Qwen3-Coder; suporte multiprotocolo (A API OpenAI/Anthropic/Gemini), 1.000 solicitações grátis/dia. ~21K+ | 🟢 | [GitHub](https://github.com/QwenLM/qwen-code) |
| **Aider** | Programação de pares de IA em terminal com integração Git profunda; mapeia bases de código inteiras e compromete alterações automáticas. ~42K+ | 🟢 | [GitHub](https://github.com/Aider-AI/aider) |
| **OpenCode** | Poderoso agente de codificação de IA de código aberto com bela TUI; suporta quase todos os fornecedores de modelos de IA. ~120K+ | 🟢 | [GitHub](https://github.com/opencode-ai/opencode) |
| **Goose** | Extensível agente de IA de código aberto do Bloco (Square/Cash App); instala, executa, edita e testa com qualquer LLM. ~29K+ . | 🟢 | [GitHub](https://github.com/block/goose) |
| **Crush** | Glamorous agente de codificação agente de Charmbracelet com suporte multi-modelo, integração LSP, e bela UI terminal. ~9K+ | 🟢 | [GitHub](https://github.com/charmbracelet/crush) |
| **Amazon Q Developer CLI** | Experiência de chat agente em terminal da AWS; transição para Kiro CLI. | 🟣 | [GitHub](https://github.com/aws/amazon-q-developer-cli) |
| **Amp** | A ferramenta de codificação agentic do Sourcegraph (sucessor do Cody); funciona em CLI e IDE. | 🔵 | [Website](https://ampcode.com) |
| **Junie CLI** | O agente de codificação LLM-agnóstico da JetBrains CLI (beta 2026); suporta todos os principais fornecedores de modelos. | 🔵 | [Website](https://www.jetbrains.com/junie/) |
| **Autohand Code CLI** | Autónomo agente de codificação de terminais com suporte LLM multifornecedor, mais de 40 ferramentas e sistema de habilidades modulares. | 🟢 | [GitHub](https://github.com/autohandai/code-cli) |

#### Editores de Códigos de IA / IDEs

Editores autônomos ou garfos IDE com integração de IA profunda.

| Nome | Designação das mercadorias | Tipo | Ligação |
|:-----|:-----------|:----:|:----:|
| **Cursor** | Editor de código IA-nativo líder (VS Code fork); Composer gera aplicativos inteiros a partir de linguagem natural, multi-edições de arquivo agentic. | 🔵 | [Website](https://cursor.com) |
| **Windsurf** | IDE alimentado por IA (VS Code fork) com agente Cascade proprietário e modelo SWE-1.5; adquirido pela Cognition AI. | 🔵 | [Website](https://windsurf.com) |
| **Zed** | Editor de alto desempenho em Rust com recursos nativos de IA, previsão de edição do Zeta e suporte ao Agent Client Protocol. ~77K+ | 🟢 | [GitHub](https://github.com/zed-industries/zed) |
| **Trae** | IDE com IA livre da ByteDance ("O Engenheiro de IA real") com Modo Builder; oferece acesso gratuito a Claude, GPT-4o e DeepSeek. | 🔵 | [Website](https://www.trae.ai) |
| **Google Antigravity** | O primeiro IDE de agente do Google (VS Code fork) com vista de gerente para orquestrar vários agentes em paralelo; alimentado por Gemini. | 🔵 | [Website](https://antigravity.google) |
| **Kiro** | O AI IDE (VS Code fork) específico da AWS; transforma prompts em especificações, em seguida, código de trabalho, documentos e testes. | 🔵 | [Website](https://kiro.dev) |
| **PearAI** | Editor de código AI de código aberto (VS Code fork) com bate-papo e completações baseados em Continuar. ~40K+ | 🟢 | [GitHub](https://github.com/trypear/pearai-app) |
| **Void** | Alternativa de cursor de código aberto (VS Code fork); qualquer modelo ou hospedagem local com visualização de mudança. ~28K+ | 🟢 | [GitHub](https://github.com/voideditor/void) |
| **Melty** | Editor de código de IA de chat aberto com edição de vários arquivos e integração com Git profundo. ~7K+ | 🟢 | [GitHub](https://github.com/meltylabs/melty) |
| **Emdash** | Ambiente dev agentic de código aberto (YC W26) para executar múltiplos agentes de codificação em paralelo em árvores de trabalho Git isoladas. | 🟢 | [GitHub](https://github.com/generalaction/emdash) |

#### Extensões/Plugins do IDE

Plugins para VS Code, JetBrains, Neovim e outros editores.

| Nome | Designação das mercadorias | Tipo | Ligação |
|:-----|:-----------|:----:|:----:|
| **GitHub Copilot** | Assistente de codificação de IA mais amplamente adotado; completações em linha, chat, e agente de codificação agente em VS Code, JetBrains, Neovim. | 🔵 | [Website](https://github.com/features/copilot) |
| **Cline** | Agente de codificação autônoma em VS Code com aprovações humanas no circuito; edição de arquivos, comandos de terminal e uso do navegador. ~59K+ | 🟢 | [GitHub](https://github.com/cline/cline) |
| **Continue** | Extensão VS Code e JetBrains de código aberto para criar sistemas de dev de IA modulares personalizados; qualquer modelo. ~32K+ | 🟢 | [GitHub](https://github.com/continuedev/continue) |
| **Cody** | Assistente de IA com fonte de imagens que puxa o contexto de bases de código locais e remotas; Código VS, JetBrains, Visual Studio. | 🔵 | [Website](https://sourcegraph.com/cody) |
| **Codeium** | Extensão gratuita de codificação de IA para 40+ IDEs com completações, chat e pesquisa em mais de 70 idiomas. | 🟣 | [Website](https://codeium.com) |
| **Amazon Q Developer** | Assistente de codificação de IA do AWS com completações, chat em linha e modo agente; integração AWS profunda. | 🟣 | [Website](https://aws.amazon.com/q/developer/) |
| **Gemini Code Assist** | Extensão IDE do Google alimentado pela Gemini com completações, Next Edit Predictions e diferenças em linha; livre para indivíduos. | 🟣 | [Website](https://codeassist.google) |
| **Tabnine** | Assistente de IA focado em privacidade treinado em OSS licenciado por permissão; suporta todos os principais IDEs com implantação no local. | 🔵 | [Website](https://www.tabnine.com) |
| **Augment Code** | Assistente de codificação de IA empresarial com o motor de contexto de 200K-token para compreensão de base de código profunda. | 🔵 | [Website](https://www.augmentcode.com) |
| **Qodo** | AI revisão de código e plataforma de qualidade com arquitetura multi-agente; geração de teste, revisão de código, CI/CD execução. | 🟣 | [Website](https://www.qodo.ai) |
| **CodeGeeX** | Modelo de geração de código multilingue de código aberto suportando 20+ idiomas com extensões VS Code e JetBrains. ~11K+ | 🟢 | [GitHub](https://github.com/zai-org/CodeGeeX) |
| **Tabby** | Auxiliar de codificação de IA de código de código de código de código de código aberto (alternativa Copilot); funciona inteiramente na sua infraestrutura. ~25K+ | 🟢 | [GitHub](https://github.com/TabbyML/tabby) |

#### Plataformas de codificação de IA / Agentes de nuvem

Agentes hospedados em nuvem ou baseados em navegadores que constroem, testam e implementam de forma autônoma.

| Nome | Designação das mercadorias | Tipo | Ligação |
|:-----|:-----------|:----:|:----:|
| **Devin** | Primeiro engenheiro de software de IA totalmente autônomo baseado em nuvem; planos, códigos, testes e abre RPs de forma independente. | 🔵 | [Website](https://devin.ai) |
| **Replit Agent** | Agente de IA nativo na nuvem que constrói, testa e implementa aplicativos completos em navegador; 50+ idiomas. | 🔵 | [Website](https://replit.com/products/agent) |
| **bolt.new** | Agent web dev alimentado por IA; prompt, execute, edite e implante aplicativos completos diretamente no navegador via WebContainers. ~15K+ | 🟢 | [GitHub](https://github.com/stackblitz/bolt.new) |
| **bolt.diy** | Forquilha comunitária de parafuso.novo com características estendidas e flexibilidade LLM mais ampla. ~12K+ | 🟢 | [GitHub](https://github.com/stackblitz-labs/bolt.diy) |
| **Lovable** | Aplicativos completos de linguagem natural com Supabase, autenticação e implantação de um clique; inicialização europeia mais rápida para ARR de $20M. | 🔵 | [Website](https://lovable.dev) |
| **v0** | Plataforma de IA da Vercel para gerar React/Next de alta qualidade. js componentes UI da linguagem natural. | 🔵 | [Website](https://v0.dev) |
| **GitHub Copilot Workspace** | Ambiente de codificação baseado em nuvem com agentes de planejamento, brainstorm e reparo; incluído com planos Copilot pagos. | 🔵 | [Website](https://githubnext.com/projects/copilot-workspace) |
| **Firebase Studio** | Ambiente de desenvolvimento baseado em nuvem agentic do Google. | 🔵 | [Website](https://firebase.google.com/studio) |

#### Frameworks do Agente de Codificação de Código Aberto

Quadros e projectos de investigação para a construção de agentes de codificação autónomos.

| Nome | Designação das mercadorias | Tipo | Ligação |
|:-----|:-----------|:----:|:----:|
| **OpenHands** | Plataforma de código aberto líder para agentes de codificação em nuvem; consistentemente no topo do SWE-bench. Ex- OpenDevin. ~69K+ | 🟢 | [GitHub](https://github.com/OpenHands/OpenHands) |
| **SWE-agent** | Pega um problema do GitHub e corrige-o automaticamente usando uma interface agente-computador personalizada. [NeurIPS 2024] ~19K+ | 🟢 | [GitHub](https://github.com/SWE-agent/SWE-agent) |
| **Open SWE** | O framework de agente de codificação hospedado na nuvem do LangChain foi construído no LangGraph com integração Slack/Linear. ~8K+ | 🟢 | [GitHub](https://github.com/langchain-ai/open-swe) |
| **Devika** | Engenheiro de software agente de código aberto; quebra instruções, pesquisas e escreve código. Alternativa Devin. ~ 18K+ | 🟢 | [GitHub](https://github.com/stitionai/devika) |
| **AutoCodeRover** | Melhoria de programas autônomos combinando LLMs com localização de falhas para resolução de problemas GitHub. ~2.8K+ | 🟢 | [GitHub](https://github.com/nus-apr/auto-code-rover) |
| **Agentless** | Abordagem trifásica simples (localize → reparar → validar) para resolver problemas de desenvolvimento de software. ~2K+ . | 🟢 | [GitHub](https://github.com/OpenAutoCoder/Agentless) |
| **Devon** | Programador de pares de código aberto agente SWE com código de escrita, planejamento e pesquisa; suporta Claude, GPT-4, Llama, Ollama. ~3.5K+ | 🟢 | [GitHub](https://github.com/entropy-research/Devon) |

### Outros repositórios notáveis

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **Prompt Engineering Guide (DAIR.AI)** | O guia definitivo de código aberto e o hub de recursos. 3M+ alunos. ~55K+ | [GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide) |
| **Awesome ChatGPT Prompts / Prompts.chat** | A maior biblioteca de código aberto do mundo. 1000s de prompts para todos os modelos principais. | [GitHub](https://github.com/f/awesome-chatgpt-prompts) |
| **12-Factor Agents** | Princípios para a construção de software de qualidade de produção LLM. ~17K+ | [GitHub](https://github.com/humanlayer/12-factor-agents) |
| **NirDiamant/Prompt_Engineering** | 22 tutoriais manuais do Jupyter Notebook. ~3K+ | [GitHub](https://github.com/NirDiamant/Prompt_Engineering) |
| **Context Engineering Repository** | Manual de primeiros princípios para ir além da engenharia rápida para o design de contexto. | [GitHub](https://github.com/davidkimai/Context-Engineering) |
| **AI Agent System Prompts Library** | Recolha de alertas de sistema a partir de agentes de codificação de IA de produção (Claude Code, Gemini CLI, Cline, Aider, Roo Code). | [GitHub](https://github.com/tallesborges/agentic-system-prompts) |
| **Awesome Vibe Coding** | Lista com mais de 245 ferramentas e recursos para a construção de software através de prompts de linguagem natural. | [GitHub](https://github.com/taskade/awesome-vibe-coding) |
| **OpenAI Cookbook** | Receitas oficiais para alertas, ferramentas, RAG e avaliações. | [GitHub](https://github.com/openai/openai-cookbook) |
| **Embedchain** | Framework para criar bots tipo ChatGPT sobre seu conjunto de dados. | [GitHub](https://github.com/embedchain/embedchain) |
| **ThoughtSource** | Framework para a ciência do pensamento de máquina. | [GitHub](https://github.com/OpenBioLink/ThoughtSource) |
| **Promptext** | Extrai e formata o contexto de código para prompts de IA com contagem de tokens. | [GitHub](https://github.com/1broseidon/promptext) |
| **Price Per Token** | Compare os preços da API LLM em mais de 200 modelos. | [Website](https://pricepertoken.com/) |
| **OpenPaw** | Ferramenta CLI (`npx pawmode`) que transforma Claude Code em um assistente pessoal, gerando prompts de sistema (CLAUDE.md + SOUL.md) com personalidade, memória e 38 roteadores de habilidade. | [GitHub](https://github.com/daxaur/openpaw) |
| **Think Better** | CLI de código aberto que injeta permanentemente 10 frameworks de decisão estruturados (MECE, Issue Trees, Pré-Mortems) e 12 detectores de viés cognitivo em alertas assistentes de IA. Vai, MIT. | [GitHub](https://github.com/HoangTheQuyen/think-better) |

---

## APIs
💻

### OpenAI

| Modelo | Contexto | Preço (input/output per 1M tokens) | Característica chave |
|:------|:--------|:-----------------------------------|:------------|
| GPT-5.2 / 5.2 Thinking | 400K | $1.75 / $14 | Última emblemática, 90% de desconto em cache, raciocínio configurável |
| GPT-5.1 | 400K | $1.25 / $10 | Emblema de geração anterior |
| GPT-4.1 / 4.1 mini / nano | 1M | $2 / $8 | Melhor modelo não racional, 40% mais rápido e 80% mais barato do que GPT-4o |
| o3 / o3-pro | 200K | Variações | Raciocínio de modelos com uso de ferramenta nativa |
| o4-mini | 200K | Custo-eficiente | Raciocínio rápido, melhor em AIME em sua classe de custo |
| GPT-OSS-120B / 20B | 128K | $0.03 / $0.30 | Primeiros modelos de peso aberto, Apache 2.0 |

Principais características: Respostas API, Agentes SDK, Saídas Estruturadas, Chamada de função, cache rápido (90% de desconto), API Batch (50% de desconto), suporte MCP. [Documentos da Plataforma](https://platform.openai.com/docs/models)

### Antrópico (Claude)

| Modelo | Contexto | Preço (input/output per 1M tokens) | Característica chave |
|:------|:--------|:-----------------------------------|:------------|
| Claude Opus 4.6 | 1M (beta) | $5 / $25 | Codificação mais poderosa, de última geração e tarefas agentivas |
| Claude Sonnet 4.5 | 200K | $3 / $15 | Melhor modelo de codificação, 61,4% OSWorld (uso do computador) |
| Claude Haiku 4.5 | 200K | Nível rápido | Classe de modelo mais rápida e próxima da fronteira |
| Claude Opus 4 / Sonnet 4 | 200K | $15/$75 (Opus) | Opus: 72,5% SWE-bench, Sonnet 4 poderes GitHub Copilot |

Principais características: Pensamento estendido com uso de ferramenta, Uso de Computador, MCP (originado aqui), cache prompt, Claude Code CLI, disponível no AWS Bedrock e Google Vertex AI. [API Docs](https://docs.anthropic.com/)

### Google (Gemini)

| Modelo | Contexto | Preço (input/output per 1M tokens) | Característica chave |
|:------|:--------|:-----------------------------------|:------------|
| Gemini 3 Pro Preview | 1M | $2 / $12 | Modelo Google mais inteligente, implantado em 2B+ Pesquisar usuários |
| Gemini 2.5 Pro | 1M | $1.25 / $10 | Melhor para tarefas de codificação/agente, modelo de pensamento |
| Gemini 2.5 Flash / Flash-Lite | 1M | $0.30/$1.50 · $0.10/$0.40 | Líderes de desempenho de preços |

Principais características: Pensando (todos os modelos 2.5+), Google Search grounding, execução de código, Live API (audio/vídeo em tempo real), cache de contexto. [Google AI Studio](https://ai.google.dev/)

### Meta (Llama)

| Modelo | Arquitetura | Contexto | Característica chave |
|:------|:------------|:--------|:------------|
| Llama 4 Scout | 109B MoE / 17B activo | 10M | Se encaixa em H100 simples, multimodal, de peso aberto |
| Llama 4 Maverick | 400B MoE / 17B ativo, 128 especialistas | 1M | Vence GPT-4o, peso aberto |
| Llama 3.3 70B | Densa | 128K | Fósforos Llama 3.1 405B |

Disponível em 25+ parceiros de nuvem, Hugging Face e APIs de inferência. [Llama](https://ai.meta.com/llama/)

### Outros Fornecedores Notáveis

| Fornecedor | Designação das mercadorias | Ligação |
|:---------|:-----------|:----:|
| **Mistral AI** | Mistral Large 3 (675B MoE), Devstral 2, Ministral 3. Apache 2.0. | [Website](https://mistral.ai) |
| **DeepSeek** | V3.2 (671B MoE), R1 (razão, licença MIT). $0.15/$0.75 por 1M fichas. | [Website](https://deepseek.com) |
| **xAI (Grok)** | Grok 4.1 Rápido: contexto 2M, $0.20/$0.50 por tokens 1M. | [Website](https://x.ai) |
| **Cohere** | Comando A (111B, 256K context), Incorporar v4, Rerank 4.0. Excels na RAG. | [Website](https://cohere.com) |
| **Together AI** | 200+ modelos abertos com latência sub-100ms. | [Website](https://together.ai) |
| **Groq** | hardware LPU com ~300+ tokens/sec inferência. | [Website](https://groq.com) |
| **Fireworks AI** | Inferência rápida com conformidade HIPAA + SOC2. | [Website](https://fireworks.ai) |
| **OpenRouter** | API unificada para mais de 300 modelos de todos os provedores. | [Website](https://openrouter.ai) |
| **Cerebras** | Chips em escala de wafer com melhor tempo total de resposta. | [Website](https://cerebras.ai) |
| **Perplexity AI** | API aumentada por pesquisa com citações. | [Website](https://perplexity.ai) |
| **Amazon Bedrock** | Serviço multimodelo gerenciado com Claude, Llama, Mistral, Cohere. | [Website](https://aws.amazon.com/bedrock/) |
| **Hugging Face Inference** | Acesso a modelos abertos via API. | [Website](https://huggingface.co/docs/api-inference/index) |

---

## Datasets e Benchmarks
💾

### Principais Benchmarks (2024-2026)

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **Chatbot Arena / LM Arena** | 6M+ votos de usuários para comparações LLM emparelhadas. Padrão de facto para preferência humana. | [Website](https://lmarena.ai/) |
| **MMLU-Pro** | Mais de 12.000 questões de nível de pós-graduação em 14 domínios. NeurIPS 2024 Spotlight. | [GitHub](https://github.com/TIGER-AI-Lab/MMLU-Pro) |
| **GPQA** | 448 questões STEM à prova de Google; validadores não especialistas atingem apenas 34%. | [arXiv](https://arxiv.org/abs/2311.12022) |
| **SWE-bench Verified** | Subconjunto de 500 tarefas para resolução de problemas GitHub no mundo real. | [Website](https://www.swebench.com/) |
| **SWE-bench Pro** | 1.865 tarefas em 41 acordos profissionais; melhores modelos pontuam apenas ~23%. | [Leaderboard](https://scale.com/leaderboard/swe_bench_pro_public) |
| **Humanity's Last Exam (HLE)** | 2.500 perguntas qualificadas; as melhores pontuações de IA são apenas ~10–30%. | [Website](https://agi.safe.ai/) |
| **BigCodeBench** | 1.140 tarefas de codificação em 7 domínios; IA atinge ~35,5% vs. 97% de sucesso humano. | [Leaderboard](https://huggingface.co/spaces/bigcode/bigcodebench-leaderboard) |
| **LiveBench** | Resistente à contaminação com perguntas frequentemente atualizadas. | [Paper](https://openreview.net/forum?id=sKYHBTAxVa) |
| **FrontierMath** | Matemática em nível de pesquisa; IA resolve apenas ~2% dos problemas. | Investigação |
| **ARC-AGI v2** | Raciocínio abstrato medindo a inteligência fluida. | Investigação |
| **IFEval** | Avaliação seguindo instruções com restrições de formatação/conteúdo. | [arXiv](https://arxiv.org/abs/2311.07911) |
| **MLE-bench** | Avaliação de engenharia ML da OpenAI através de tarefas de estilo Kaggle. | [GitHub](https://github.com/openai/mle-bench) |
| **PaperBench** | Avalia a capacidade da IA de replicar 20 documentos ICML 2024 do zero. | [GitHub](https://github.com/openai/preparedness) |

### Quadros de classificação e meta-benchmarks

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **Hugging Face Open LLM Leaderboard v2** | Avalia modelos abertos em MMLU-Pro, GPQA, IFEval, MATH. | [Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| **Artificial Analysis Intelligence Index v3** | Agrega 10 avaliações. | [Website](https://artificialanalysis.ai/) |
| **SEAL by Scale AI** | Hosts SWE-bench Pro e avaliações de agentes. | [Leaderboard](https://scale.com/leaderboard) |

### Conjuntos de dados de instruções e instruções

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **P3 (Public Pool of Prompts)** | Modelos rápidos para 270+ tarefas NLP usadas para treinar modelos T0 e similares. | [HuggingFace](https://huggingface.co/datasets/bigscience/P3) |
| **System Prompts Dataset** | 944 modelos de prompt de sistema para fluxos de trabalho de agentes (por Daniel Rosehill, Ago 2025). | [HuggingFace](https://huggingface.co/datasets/danielrosehill/system_prompts) |
| **OpenAssistant Conversations (OASST)** | 161.443 mensagens em 35 idiomas com 461,292 avaliações de qualidade. | [HuggingFace](https://huggingface.co/datasets/OpenAssistant/oasst1) |
| **UltraChat / UltraFeedback** | Conjuntos de dados sintéticos de instrução e preferência em larga escala para treinamento de alinhamento. | Cara de Abraço |
| **SoftAge Prompt Engineering Dataset** | 1.000 prompts diversos em 10 categorias para desempenho rápido de benchmarking. | Cara de Abraço |
| **Text Transformation Prompt Library** | Coleta abrangente de prompts de transformação de texto (maio de 2025). | Cara de Abraço |
| **Writing Prompts** | ~300K histórias escritas por humanos emparelhadas com prompts de r/WritingPrompts. | [Kaggle](https://www.kaggle.com/datasets/ratthachat/writing-prompts) |
| **Midjourney Prompts** | Chamadas de texto e URLs de imagem raspadas da Discórdia pública de MidJourney. | [HuggingFace](https://huggingface.co/datasets/succinctly/midjourney-prompts) |
| **CodeAlpaca-20k** | 20.000 pares de instruções de programação. | [HuggingFace](https://huggingface.co/datasets/sahil2801/CodeAlpaca-20k) |
| **ProPEX-RAG** | Conjunto de dados para otimização rápida em fluxos de trabalho RAG. | Cara de Abraço |
| **NanoBanana Trending Prompts** | Imagens de IA com curadoria 1000+ do X/Twitter, classificadas por engajamento. | [GitHub](https://github.com/jau123/nanobanana-trending-prompts) |

### Conjuntos de dados Red Teaming e Adversarial

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **HarmBench** | 510 comportamentos nocivos em categorias padrão, contextual, copyright e multimodal. | [Website](https://safetyprompts.com/) |
| **JailbreakBench** | Abra o benchmark de robustez para quebra de cadeia com 100 prompts. | Investigação |
| **AgentHarm** | 110 tarefas de agentes maliciosos em 11 categorias de danos. | [arXiv](https://arxiv.org/abs/2410.09024) |
| **DecodingTrust** | 243.877 estimula a avaliação da confiabilidade em 8 perspectivas. | Investigação |
| **SafetyPrompts.com** | Agregador rastreando mais de 50 conjuntos de dados de segurança / equipe vermelha. | [Website](https://safetyprompts.com/) |

---

## Modelos
🧠

### Modelos de Fronteira (2025-2026)

| Modelo | Fornecedor | Contexto | Dosagem da Chave |
|:------|:---------|:--------|:-------------|
| **GPT-5.2** | OpenAI | 400K | Inteligência geral, 100% AIME 2025 |
| **Claude Opus 4.6** | Antrópico | 1M (beta) | Codificação, tarefas agente, pensamento estendido |
| **Gemini 3 Pro** | Google | 1M | # 1 LMArena (~ 1500 Elo), multimodal |
| **Grok 4.1** | x IA | 2M | # 2 LMArena (1483 Elo), baixa alucinação |
| **Mistral Large 3** | IA Mistral | 256K | Melhor peso aberto (675B MoE/41B ativo), Apache 2.0 |
| **DeepSeek-V3.2** | DeepSeek | 128K | Melhor valor (671B MoE/37B ativo), licença MIT |
| **Llama 4 Maverick** | Meta | 1M | Vence GPT-4o (400B MoE/17B ativo), peso aberto |

### Modelos de Raciocínio

| Modelo | Detalhe da Chave |
|:------|:-----------|
| **OpenAI o3 / o3-pro** | 87,7% GPQA Diamond. Utilização de ferramentas nativas. |
| **OpenAI o4-mini** | Melhor AIME em sua classe de custo com raciocínio visual. |
| **DeepSeek-R1 / R1-0528** | Peso aberto, treinado em RL. 87,5% na AIME 2025. Licença MIT. |
| **QwQ (Qwen with Questions)** | Modelo de raciocínio 32B. Apache 2.0. Comparado com R1. |
| **Gemini 2.5 Pro/Flash (Thinking)** | Raciocínio integrado com orçamento de pensamento configurável. |
| **Claude Extended Thinking** | Modo híbrido com cadeia de pensamento visível e uso de ferramenta. |
| **Phi-4 Reasoning / Plus** | 14B modelos de raciocínio rivalizando com modelos muito maiores. Peso aberto. |
| **GPT-OSS-120B** | OpenAI é peso aberto com CoT. Quase paridade com o4-mini. Apache 2.0. |

### Modelos Open-Source Notáveis

| Modelo | Fornecedor | Detalhe da Chave |
|:------|:---------|:-----------|
| **Qwen3-235B-A22B** | Alibaba | Flagship MoE. Forte raciocínio/código/multilingual. Apache 2.0. A família mais baixada no HuggingFace. |
| **Gemma 3** | Google | 270M a 27B. Multimodal. Contexto 128K. 140+ línguas. |
| **OLMo 2/3** | Allen AI | Totalmente aberto (dados, código, pesos, logs). OLMo 2 32B ultrapassa o GPT-3.5. Apache 2.0. |
| **SmolLM3-3B** | Rosto Abraçado | Supera Llama-3.2-3B. Raciocínio em modo duplo. Contexto 128K. |
| **Kimi K2** | AI Moonshot | 32B activo. Peso aberto. Alfaiate para codificação/utilização de agentes. |
| **Llama 4 Scout** | Meta | 109B MoE/17B activo. Contexto token 10M. Encaixa em H100. |

### Modelos Especializados em Código

| Modelo | Detalhe da Chave |
|:------|:-----------|
| **Qwen3-Coder (480B-A35B)** | 69,6% SWE-bench — marco para a codificação de código aberto. Contexto 256K. Apache 2.0. |
| **Devstral 2 (123B)** | 72,2% SWE-bench Verificado. 7x mais rentável do que Claude Sonnet. |
| **Codestral 25.01** | O modelo de código da Mistral. 80+ línguas. Suporte de preenchimento no meio. |
| **DeepSeek-Coder-V2** | 236B MoE / 21B activo. 338 programa de acção. |
| **Qwen 2.5-Coder** | 7B/32B. 92 linguagens de programação. 88,4% HumanEval. Apache 2.0. |

### Modelos Fundamentais (Referência Histórica)

Estes modelos estabeleceram conceitos-chave, mas são largamente substituídos para uso prático:

| Modelo | Fornecedor | Significado |
|:------|:---------|:-------------|
| GLM-130B | Tsinghua | Aberto inglês/chinês LLM (2023) |
| Falcon 180B | TII | Grande modelo generativo aberto (2023) |
| Mixtral 8x7B | IA Mistral | Arquitetura MoE pioneira para modelos abertos (2023) |
| GPT-NeoX-20B | EleutherAI | LLM autorregressivo aberto precoce |
| GPT-J-6B | EleutherAI | Modelo de linguagem causal aberta precoce |

---

## Detectores de Conteúdo de IA
🔎

### Detectores Comerciais Principais

| Nome | Precisão | Característica chave | Ligação |
|:-----|:---------|:------------|:----:|
| **GPTZero** | 99% alegaram | 10M+ usuários, #1 no G2 (2025). Detecta GPT-4/5, Gemini, Claude, Llama. Camada livre disponível. | [Website](https://gptzero.me) |
| **Originality.ai** | 98–100% (revisão por pares) | Avaliado consistentemente mais preciso. Combina detecção de IA + plágio + verificação de fatos. De 14,95 dólares por mês. | [Website](https://originality.ai) |
| **Turnitin AI Detection** | 98%+ no texto de IA não modificado | Dominante na academia. Foi lançada a detecção de AI bypasser/humanizador (ago 2025). Licença institucional. | [Website](https://www.turnitin.com/solutions/topics/ai-writing/) |
| **Copyleaks** | 99%+ alegaram | Ferramenta empresarial detectando IA em mais de 30 idiomas. Integrações LMS. | [Website](https://copyleaks.com) |
| **Winston AI** | 99,98% alegaram | OCR para documentos digitalizados, imagem de IA/deepfake detection. 11 línguas. | [Website](https://gowinston.ai) |
| **Pangram Labs** | 99,3% (COLING 2025) | Maior pontuação em COlling 2025 Shared Task. 100% TPR no texto "humanizado". 97,7% robustez adversa. | [Website](https://www.pangram.com) |

### Detectores Livres e de Pesquisa

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **Binoculars** | Detector de pesquisa de código aberto usando perplexidade cruzada entre dois LLMs. | [arXiv](https://arxiv.org/abs/2401.12070) |
| **DetectGPT / Fast-DetectGPT** | Método estatístico comparando log-probabilidades de texto original vs. perturbações. | [arXiv](https://arxiv.org/abs/2301.11305) |
| **Openai Detector** | Classificador de IA para indicar texto escrito por IA (embrulho Python do Detector OpenAI)  | [[GitHub]](https://github.com/promptslab/openai-detector) |
| **Sapling AI Detector** | Detector gratuito baseado em navegador (até 2.000 caracteres). Acerto de 97% em alguns estudos. | [Website](https://sapling.ai/) |
| **QuillBot AI Detector** | Livre, sem necessidade de inscrição. | [Website](https://quillbot.com/ai-content-detector) |
| **Writer AI Content Detector** | Ferramenta gratuita com resultados codificados por cores. | [Website](https://writer.com/ai-content-detector/) |
| **ZeroGPT** | Detector livre popular avaliado em múltiplos estudos acadêmicos. | [Website](https://www.zerogpt.com/) |

### Abordagens de Marcação de Água

| Nome | Designação das mercadorias | Ligação |
|:-----|:-----------|:----:|
| **SynthID (Google DeepMind)** | Marca d'água para texto, imagens e áudio de IA através de amostragem de fichas estatísticas. Implantado em produtos Google. | [Website](https://deepmind.google/technologies/synthid/) |
| **OpenAI Text Watermarking** | Desenvolvido mas ainda experimental a partir de 2025. As pesquisas mostram preocupações de fragilidade. | Experimental |

**Ressalva importante:** Nenhum detector reivindica 100% de precisão. O texto misto humano/AI permanece mais difícil de detectar (precisão de 50% a 70%). A robustez adversária varia muito. O mercado de detecção de IA deverá crescer de ~$2.3B (2025) para $15B até 2035.

---

## Livros
📖

### Engenharia Prompt

| Título | Autor(es) | Editor | Ano |
|:------|:----------|:---------|:-----|
| **Prompt Engineering for LLMs** | John Berryman & Albert Ziegler | O'Reilly | 2024 |
| **Prompt Engineering for Generative AI** | James Phoenix & Mike Taylor | O'Reilly | 2024 |
| **Prompt Engineering for LLMs** | Thomas R. Caldwell | Independente | 2025 |

### Desenvolvimento de Aplicações LLM

| Título | Autor(es) | Editor | Ano |
|:------|:----------|:---------|:-----|
| **AI Engineering: Building Applications with Foundation Models** | Chip Huyen | O'Reilly | 2025 |
| **Build a Large Language Model (From Scratch)** | Sebastian Raschka | Manning | 2024 |
| **Building LLMs for Production** | Louis-François Bouchard & Louie Peters | O'Reilly | 2024 |
| **LLM Engineer's Handbook** | Paul Iusztin & Maxime Labonne | Packt | 2024 |
| **The Hundred-Page Language Models Book** | Andriy Burkov | Auto-Publicado | 2025 |

### Agentes de IA

| Título | Autor(es) | Editor | Ano |
|:------|:----------|:---------|:-----|
| **Building Applications with AI Agents** | Michael Albada | O'Reilly | 2025 |
| **AI Agents and Applications** | Roberto Infante | Manning | 2025 |
| **AI Agents in Action** | Micheal Lanham | Manning | 2025 |

### Produção, Confiabilidade e Segurança

| Título | Autor(es) | Editor | Ano |
|:------|:----------|:---------|:-----|
| **LLMs in Production** | Christopher Brousseau e Matthew Sharp | Manning | 2025 |
| **Building Reliable AI Systems** | Rush Shahani | Manning | 2025 |
| **The Developer's Playbook for LLM Security** | Steve Wilson | O'Reilly | 2024 |

---

## Cursos
👩‍🏫

### Cursos curtos gratuitos

- [Engenharia de Prompt ChatGPT para Desenvolvedores](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) — Co-didata de Andrew Ng e de Isa Fulford da OpenAI. O ponto de partida fundamental. (DeepLearning. AI)
- [Construindo sistemas com a API ChatGPT](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) — concepção do sistema LLM multi-passo para a produção. (DeepLearning. AI)
- [Agentes de IA em LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) — Fluxos de dados activos com utilização de ferramentas e agentes de investigação. (DeepLearning. AI)
- [Construção de RAG Agentic com LlamaIndex](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) — Construção de agentes de investigação RAG. (DeepLearning. AI)
- [Funções, Ferramentas e Agentes com LangChain](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) — Convocação de funções e construção de agentes. (DeepLearning. AI)
- [Engenharia rápida para modelos de visão](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) — Técnicas de projecção visual. (DeepLearning. AI)

### Cursos Universitários e Plataformas

- [Especialização em Engenharia Prompt (Vanderbilt)](https://www.coursera.org/specializations/prompt-engineering) — Série de 3 cursos do Dr. Jules Cobertura branca fundamental para PE avançada. (Corsera)
- [IA generativa com LLMs (DeepLearning.AI + AWS)](https://www.coursera.org/learn/generative-ai-with-llms) — ciclo de vida LLM, transformadores, RLHF, implantação. (Corsera)
- [Stanford CS336: Modelação de linguagem de Scratch](https://cs336.stanford.edu/) — Construir um LLM de ponta a ponta. (Stanford, 2024-2026)
- [MIT 6.S191: Introdução à aprendizagem profunda](https://introtodeeplearning.com/) — Curso anual incluindo LLM e IA generativa (MIT, 2024-2026)
- [A Engenharia Prompt Completa para AI Bootcamp](https://www.udemy.com/course/prompt-engineering-for-ai/) — Capas GPT-5, DSPy, LangGraph, arquitecturas de agentes. Avaliação 58K+. (Udemy, actualizado em Fevereiro de 2026)

### Cursos de Plataforma Livre

- [Google Pedir Essentials](https://grow.google/prompting-essentials/) — Desenho rápido de 5 passos, metaprompting, Gemini. Menos de 6 horas.
- [Microsoft Azure AI Fundamentos: Generative AI](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/) — Caminho livre de aprendizagem cobrindo LLMs, alertas, agentes, Azure OpenAI.
- [Curso LLM de Abraçar o Rosto](https://huggingface.co/learn/llm-course/chapter1/1) — Cursos comunitários que abrangem transformadores, afinação, modelos de raciocínio de construção.
- [Curso de Agentes de IA de Abraçamento Rosto](https://huggingface.co/learn) — Teoria do agente à prática. 100K+ estudantes registados.

### Aprenda Cursos de Prompting

- [ChatGPT para Todos](https://learnprompting.org/courses/chatgpt-for-everyone)
- [Introdução à Engenharia Prompt](https://learnprompting.org/courses/introduction_to_prompt_engineering)
- [Engenharia Prompt Avançada](https://learnprompting.org/courses/advanced-prompt-engineering)
- [Introdução ao Prompt Hacking](https://learnprompting.org/courses/intro-to-prompt-hacking)
- [Hackeamento Prompt Avançado](https://learnprompting.org/courses/advanced-prompt-hacking)
- [Introdução aos Agentes de IA Generativos para Profissionais de Negócios](https://learnprompting.org/courses/introduction-to-agents)
- [Segurança da IA](https://learnprompting.org/courses/ai-safety)

---

## Tutoriais e Guias
📚

### Guias Oficiais do Provedor

- [Guia de Engenharia de Prompt da OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — Abrangente, abrangendo o GPT-4.1/5 de prompting, modelos de raciocínio, saídas estruturadas, fluxos de trabalho agentes. Continuamente actualizado.
- [OpenAI GPT-4.1](https://cookbook.openai.com/articles/gpt-4-1-prompting-guide) [2025] — Design rápido tipo agente estruturado: persistência do objetivo, integração de ferramentas, processamento de longo contexto.
- [Visão geral da Engenharia Prompt Antrópica](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — Design imediato iterativo, etiquetas XML, cadeia de pensamento, atribuição de funções. Inclui gerador rápido.
- [Melhores práticas antrópicas Claude 4](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices) [2025-2026] — Execução de ferramentas paralelas, capacidades de pensamento, processamento de imagens.
- [Antrópico: Engenharia de Contexto Eficaz para Agentes de IA](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) [2025] — A evolução da engenharia rápida para a engenharia de contexto: estado do agente, memória, ferramentas, MCP.
- [Google Gemini Prompting Estratégias](https://ai.google.dev/docs/prompt_best_practices) — Promoção multimodal para Gemini via Vertex AI e AI Studio.
- [Microsoft Prompt Engenharia em Azure AI Studio](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering) — Chamada de ferramenta, design de função, prompting de poucos tiros, encadeamento imediato.

### Guias comunitários e independentes

- [Guia de Engenharia Prompt (DAIR.AI / promtingguide.ai)](https://www.promptingguide.ai/) — Guia aberto mais abrangente. 18+ técnicas, guias de modelos específicos, trabalhos de pesquisa. Alunos 3M+. Agora inclui engenharia de contexto.
- [Aprenda Prompting (aprenderprompting.org)](https://learnprompting.org/) — Plataforma livre estruturada. Iniciante para PE avançado, AI segurança, HackAPrompt competição.
- [IBM 2026 Guia de Engenharia de Prompt](https://www.ibm.com/think/prompt-engineering) [2026] — Ferramentas curadas, tutoriais, exemplos do mundo real com código Python.
- [Tutorial Interativo Antrópico](https://github.com/anthropics/prompt-eng-interactive-tutorial) — Curso de 9 capítulos com exercícios práticos.
- [Guia de Engenharia Prompt de Lilian Weng](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) [2023] — Blog técnico altamente respeitado da pesquisadora OpenAI.
- [Guia de Engenharia do Google Prompt ( PDF de 68 páginas)](https://www.reddit.com/r/PromptEngineering/comments/1kggmh0/google_dropped_a_68page_prompt_engineering_guide/) [2025] — Guia de boas práticas de estilo interno para Gemini com padrões de betão.
- [DigitalOcean: Melhores Práticas de Engenharia Prompt](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices) [2025] — Técnicas atualizadas de resumo de guias: poucas fotos, cadeia de pensamento, indicação de papéis, etc.
- [Aakash Gupta: Engenharia Prompt em 2025](https://news.aakashg.com) [2025] — Guia prático com sabedoria do envio de IA no OpenAI, Shopify e Google.
- [Melhores práticas para engenharia rápida com API OpenAI](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api) — Melhores práticas introdutórias da OpenAI.
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) — Receitas oficiais para chamadas de funções, RAG, avaliação e fluxos de trabalho complexos.
- [Microsoft Prompt Engineering Docs](https://microsoft.github.io/prompt-engineering) — os recursos de engenharia abertos da Microsoft.
- [DALLE Prompt Book](https://dallery.gallery/the-dalle-2-prompt-book) — Guia visual para o envio do texto à imagem.
- [Melhores Perguntas de Difusão Estável de 100+](https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts) — Promessas de produção de imagens protegidas pela Comunidade.
- [Engenharia de Vibe (Manning)](https://www.manning.com/books/vibe-engineering) — Livro de Tomasz Lelek & Artur Skowronski sobre a construção de software através de instruções de linguagem natural.

---

## Vídeos
🎥

- [Andrej Karpathy: "Deep Mergulhe em LLMs" e "Como uso LLMs"](https://www.youtube.com/@AndrejKarpathy) [2024-2025] — Dois dos vídeos de IA mais influentes de 2024-2025. Mergulho profundo técnico abrangente seguido de padrões de uso prático.
- [Karpathy: "Software na era da IA" (YC AI Startup School)](https://karpathy.ai/) [2025] — Coined "vibe coding" (Fev 2025) e defendeu a "engenharia de contexto" (Jun 2025).
- [Karpatia: Redes Neurais: Zero para Herói](https://www.youtube.com/@AndrejKarpathy) [2023-2024] — Construção de séries de palestras completas da retropropagação ao GPT.
- [3Blue1Brown: Série de Redes Neurais](https://www.youtube.com/@3blue1brown) [Atualizado em 2024] — Explicações visuais icônicas animadas de transformadores e mecanismos de atenção. 7M+ assinantes.
- [AI Explicado](https://www.youtube.com/@aiexplained-official) [2024–2025] — Análise de longa duração, quebrando trabalhos, capacidades de modelo e desenvolvimento de PE.
- [Sam Witteveen](https://www.youtube.com/@samwitteveen) [2024-2025] — Tutoriais práticos sobre engenharia rápida, LangChain, RAG e agentes.
- [Matthew Berman](https://www.youtube.com/@matthew_berman) [2024-2025] — Lançamentos de modelos de cobertura de canais populares e uso prático de LLM. 600K+ assinantes.
- [DeepLearning.AI YouTube](https://www.youtube.com/@Deeplearningai) [2024–2026] — Aulas estruturadas, pré-visualizações de cursos e Andrew Ng fala sobre agentes e carreiras de IA.
- [Lex Fridman Podcast](https://www.youtube.com/@lexfridman) [2024-2025] — Entrevistas de longa duração com Altman, Hinton, Amodei em LLMs, alertas e segurança.
- [ICSE 2025: AIware Prompt Engineering Tutorial](https://conf.researchr.org/details/icse-2025/icse-2025-tutorials/) [2025] — Tutorial de conferência cobrindo padrões de alerta, fragilidade, anti-padrão e otimização DSLs.
- [NLP 2022 avançado CMU: Prompting](https://youtube.com/watch?v=5ef83Wljm-M) — Palestra académica fundamental sobre métodos de incitação.
- [ChatGPT: 5 Segredos de Engenharia Prompt para Iniciantes](https://www.youtube.com/watch?v=2zg3V66-Fzs) — Introdução acessível para iniciantes.

---

## Comunidades
🤝

### Servidores de Discórdia

- [Aprender a Perguntar](https://learnprompting.org/discord) — mais de 40 000 membros. Maior discórdia PE com cursos, hackathons, HackAPrompt competições.
- [Pedir Discórdia do Laboratório](https://discord.gg/m88xfYMbK6)  - Comunidade
- [Intermediário](https://discord.gg/midjourney) — 1M+ membros. hub primário para partilha de texto para imagem.
- [Discórdia OpenAI](https://discord.gg/openai) — Comunidade oficial com canais para ajuda de GPTs, Sora, DALL-E e API.
- [Discórdia antrópica](https://discord.gg/anthropic) — Comunidade oficial Claude para a colaboração em matéria de desenvolvimento de IA.
- [Discórdia de Abraçar o Rosto](https://discord.gg/huggingface) — Debates-modelo, apoio a bibliotecas, eventos comunitários.
- [FlowGPT](https://flowgpt.com/) — 33K+ membros. 100K+ pede ajuda através do ChatGPT, DALL-E, Difusão estável, Claude.

### Reddit

- [r/PromptEngineering](https://reddit.com/r/PromptEngineering) — Dedicado subreddit para técnicas de elaboração e discussões rápidas.
- [r/ChatGPT](https://reddit.com/r/ChatGPT) — 10M+ membros. hub primário para usuários ChatGPT e compartilhamento rápido.
- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA) — Comunidade altamente técnica para a execução de LLMs de código aberto localmente.
- [r/ClaudeAI](https://reddit.com/r/ClaudeAI) — Comunidade de Claude do Anthropic: compartilhamento rápido, dicas de API, comparações de modelos.
- [r/MachineLearning](https://reddit.com/r/MachineLearning) — Debates de investigação sobre a LM orientadas para o académico.
- [r/OpenAI](https://reddit.com/r/OpenAI) — Discussão sobre produtos e API OpenAI.
- [r/StableDiffusion](https://reddit.com/r/StableDiffusion) — 450K+ membros para o prompting de arte de IA e fluxos de trabalho.
- [r/ChatGPTPromptGenius](https://reddit.com/r/ChatGPTPromptGenius) — avisos de partilha e de refinação dos membros 35K+.


### Fóruns e Plataformas

- [Comunidade de Desenvolvedores OpenAI](https://community.openai.com/) — Fórum oficial para ajuda API, melhores práticas, compartilhamento de projetos.
- [Comunidade de Abraçar o Rosto](https://huggingface.co/) — Centro de colaboração de IA de código aberto.
- [Comunidade da AI](https://community.deeplearning.ai/) — Fórum para estudantes que debatem cursos e carreiras de IA.
- [Menos Errado](https://www.lesswrong.com/) — Trabalhos técnicos aprofundados sobre as capacidades e a segurança da IA.
- [Fórum de AI Alinhamento](https://www.alignmentforum.org/) — Reunião especializada em matéria de investigação.
- [Civitai](https://civitai.com/) — Plataforma de criadores de IA geradoras para compartilhar modelos, LoRAs e alertas.

### Organizações GitHub

- [LangChain](https://github.com/langchain-ai) — Framework de aplicação LLM de código aberto. 100 mil mais estrelas.
- [Promptslab](https://github.com/promptslab)  — Modelos Generativos □ Engineering Prompt-LLMs 
- [Rosto Abraçado](https://github.com/huggingface) — Central hub: Transformadores, Difusores, Datasets, TRL.
- [DSPy (Stanford NLP)](https://github.com/stanfordnlp/dspy) — Crescendo a comunidade para otimização sistemática.
- [OpenAI](https://github.com/openai) — Modelos, benchmarks e ferramentas de código aberto.

---

<!-- AUTORESEARCH-START -->
## • Pesquisa Autônoma e Agentes Auto-melhoradores
> Sincronizado automaticamente de [awesome-autoresearch](https://github.com/alvinunreal/awesome-autoresearch) Última sincronização: 2026-10-03

### Descendentes de Uso Geral

- [kayba-ai/recursivo-melhorar](https://github.com/kayba-ai/recursive-improve) — Framework de auto-melhoria recursiva onde os agentes capturam traços de execução, analisam padrões de falha e aplicam correções direcionadas com avaliação keep-or-revert.
- [vukrosic/auto- pesquisa](https://github.com/vukrosic/auto-research) — Avião de controlo apenas para docs para um laboratório de investigação de IA autónomo aberto — modelo operacional baseado em ficheiros para a direcção humana e a execução do agente.
- [uditgoenka/autoresearch](https://github.com/uditgoenka/autoresearch) — Claude Code habilidade que generaliza autopesquisa em um loop reutilizável para software, documentos, segurança, transporte, depuração, e outros objetivos mensuráveis.
- [leo-lilinxiao/codex-autoresearch](https://github.com/leo-lilinxiao/codex-autoresearch) — habilidade de auto-pesquisa codex-nativo com suporte de currículo, aulas em toda corrida, experiências paralelas opcionais e fluxos de trabalho específicos de modo.
- [junjunjunbong/research-loop](https://github.com/junjunjunbong/research-loop) — Autopesquisa-estilo Agente Skill para Codex e Código Claude com um corredor determinístico, aprovação plano-hash, árvores de trabalho Git isoladas, avaliação métrica autoritária, e um livro de experiência somente apêndice.
- [xieyulai/steer](https://github.com/xieyulai/steer) — Estrutura de experiências governada onde os agentes de codificação editam código de treino e executam rondas, enquanto a tarefa, marcador e evidência permanecem fixos.
- [SeeleAI/Thoth](https://github.com/SeeleAI/Thoth) — Primeiro Código Claude e Codex para auto-pesquisa, com execuções duráveis, itens de trabalho bloqueados, registros visíveis e vereditos revetíveis.
- [supratikpm/gemini-autoresearch](https://github.com/supratikpm/gemini-autoresearch) — Gemini CLI habilidade que generaliza autopesquisa para qualquer objetivo mensurável. Gemini-native: usa o Google Search como uma fonte de verificação ao vivo dentro do loop, verdadeiro modo noturno sem cabeça via --yolo --prompt e contexto de token 1M. Também funciona no Antigravity IDE via .agents/skills/.
- [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) — `pi` extensão mais painel para loops de experimentos persistentes, métricas ao vivo, rastreamento de confiança e sessões de pesquisa automática reutilizáveis.
- [drivelineresearch/autoresearch-claude-code](https://github.com/drivelineresearch/autoresearch-claude-code) — Claude Code plugin / skill porto de `pi-autoresearch`, com um workflow de experimento limpo e um estudo de caso de biomecânica concreta.
- [greyhaven-ai/autocontexto](https://github.com/greyhaven-ai/autocontext) — plano de controlo do circuito fechado para a melhoria do agente repetido, com avaliação, conhecimentos persistentes, validação faseada e destilação facultativa em tempos de execução locais mais baratos.
- [Necmttn/ax](https://github.com/Necmttn/ax) — Loop retro local para agentes de codificação de IA: capta traços de sessão, transforma atritos repetidos em propostas e rastreia correções aceitas como experimentos.
- [jmilinovich](https://github.com/jmilinovich/goal-md) — Generaliza a auto-investigação num `GOAL.md` padrão para repos onde o agente deve primeiro construir uma função de aptidão mensurável antes que possa otimizar.
- [james-s-tayler/lazy-developer](https://github.com/james-s-tayler/lazy-developer) — Claude Code habilidade que orquestra autopesquisa através de uma sequência priorizada de objetivos de otimização (cobertura, velocidade de teste, velocidade de construção, complexidade, LOC, desempenho) usando GOAL.md como o motor. Suporta execução independente e Ralph Mode multi-instance.
- [mutável-state-inc/autoresearch-at-home](https://github.com/mutable-state-inc/autoresearch-at-home) — Forquilha colaborativa de auto-research upstream que adiciona experiência reivindicando, melhor-configuração compartilhada sincronia, troca de hipóteses e coordenação em estilo enxame em muitos agentes de uma única GPU.
- [zkarimi22/ pesquisa automática-qualquer coisa](https://github.com/zkarimi22/autoresearch-anything) — Generaliza a auto-investigação para **qualquer métrica mensurável** — prompts de sistema, desempenho API, landing pages, suites de teste, ajuste de configuração, consultas SQL. "Se conseguir medi-lo, pode optimizá-lo."
- [Entrpi/Investigação Automática-em todos os lugares](https://github.com/Entrpi/autoresearch-everywhere) — Expansão entre plataformas que detecta automaticamente a configuração do hardware e inicia o loop. A "cola e generalização" metade da pesquisa automática.
- [ShengranHu/ADAS](https://github.com/ShengranHu/ADAS) — **Desenho automatizado de sistemas agentic** — ICLR 2025. Meta-agentes que inventam novas arquiteturas de agentes, programando-as em código.
- [MaximeRobeyns/self_melhoria_codificação_agente](https://github.com/MaximeRobeyns/self_improving_coding_agent) — **SICA**: Auto-melhoramento da codificação Agente que edita a sua própria base de códigos. Documento do seminário ICLR 2025 que demonstra a auto-aperfeiçoamento do andaime em benchmarks de codificação.
- [peterskoett/agente de auto-melhoria](https://github.com/peterskoett/self-improving-agent) — Melhoria alternativa da arquitectura dos agentes com ciclos de reflexão e de meta-aprendizagem.
- [metauto-ai/HGM](https://github.com/metauto-ai/HGM) — **Máquina Huxley- Gödel** para agentes de codificação — aplica-se auto-melhoramento ao desempenho do banco SWE através de otimização de meta-nível.
- [gepa-ai/gepa](https://github.com/gepa-ai/gepa) — **GEPA (Genético- Pareto)** — ICLR 2026 Oral. Reflexiva rápida evolução que supera RL (GRPO) em benchmarks. Otimiza quaisquer parâmetros textuais contra qualquer métrica usando reflexão de linguagem natural.
- [sencient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) — Descoberta automatizada de habilidades para agentes de codificação: evolui habilidades reutilizáveis e alertas de trajetórias falhadas contra benchmarks, com suporte para Claude Code, Codex CLI, OpenCode, OpenHands e Goose.
- [Tsepa/autoevolve](https://github.com/MrTsepa/autoevolve) — Pesquisa auto-auto-inspirada GEPA para auto-jogo: estratégias de código mutado, avaliar cabeça-a-cabeça, taxa com Elo/Bradley-Terry, ramo da frente Pareto. O agente lê traços correspondentes às mutações alvo. Funciona como uma habilidade do Código Claude.
- [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) — Inteligência de enxame de agentes para pesquisa automática — gera direções paralelas de pesquisa da GPU, distribui trabalho entre agentes, agrega resultados.
- [Orquestra-Investigação/AI-Investigação-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) — Biblioteca de competências abrangente, incluindo orquestração de auto-pesquisa com arquitetura de dois circuitos (otimização interna + síntese externa).
- [WecoAI/aideml](https://github.com/WecoAI/aideml) — **AIDE**: Tree-search Agente de engenharia ML que autonomamente melhora o desempenho do modelo através da geração e avaliação de código iterativo.
- [weco.ai](https://weco.ai) — **Weco**: Plataforma em nuvem para AIDE com observação, rastreamento de experimentos e execução gerenciada — traz o loop de pesquisa automática para a produção.

### Sistemas de Pesquisa-Agente

- [Mirando-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) — Oleoduto de pesquisa de ponta a ponta que transforma um tópico em revisão de literatura, experimentos, análise, revisão por pares e rascunhos de papel; mais amplo do que a pesquisa automática, mas claramente na mesma linhagem.
- [OpenLAIR/dr-claw](https://github.com/OpenLAIR/dr-claw) — Espaço de trabalho de investigação de código aberto, com oleodutos de ideias a papel sequenciais e pacotes integrados de ferramentas de auto-investigação.
- [Openraiser/NanoPesquisa](https://github.com/OpenRaiser/NanoResearch) — Motor de pesquisa autônomo de ponta a ponta que planeja experimentos, gera código, executa trabalhos localmente ou em SLURM, analisa resultados reais, e escreve trabalhos baseados nessas saídas.
- [kaust-ark/ARK](https://github.com/kaust-ark/ARK) — **ARK (Kit de Pesquisa Automática)**: idea + local → pipeline de papel orquestrando 6 agentes — análise de proposta, pesquisa de literatura, experimentos Slurm, redação LaTeX, revisão iterativa por pares. Controlado através de CLI, painel web ou Telegram.
- [wanshuiyin/Auto- claude- code- research- in- sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) — Primeiros fluxos de trabalho de pesquisa para Claude Code e outros agentes, centrados em revisão de literatura autônoma, experimentos, iteração de papel e crítica cross-model.
- [skyllwt/AutoSci](https://github.com/skyllwt/AutoSci) — Plataforma de pesquisa de ciclo de vida completo centrada no Wiki construída em Claude Code, percebendo a visão de Karpathy LLM-Wiki. 20+ habilidades cobrir o loop completo: ingerir → ideate → verificação novidade → projeto de experimento / execução / eval → escrita de papel. O estado de pesquisa vive em uma wiki de conhecimento estruturado com um gráfico interativo.
- [Sibyl-Research-Team/AutoResearch-SibylSystem](https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem) — Cientista totalmente autônomo de IA construído em Claude Code, com linhagem de AutoPesquisa explícita, iteração de pesquisa multi-agente, execução de experimentos GPU, e um laço externo auto-evolutivo.
- [wjc2830/Fácil-AutoPesquisa-para-DeepLearning](https://github.com/wjc2830/Easy-AutoResearch-for-DeepLearning) — Claude Code habilidade que executa uma auto-pesquisa-estilo, humano-gated profunda aprendizagem loop em seis papéis, experiências versionadas, e prova-checked conclusão.
- [eimenhdt/autopesquisador](https://github.com/eimenhmdt/autoresearcher) — Primeiro pacote de código aberto para automatizar fluxos de trabalho científicos, actualmente centrado na geração de revisão de literatura com uma ambição de investigação autónoma mais ampla.
- [hiperspaceai/agi](https://github.com/hyperspaceai/agi) — Rede de pesquisa distribuída, peer-to-peer, onde agentes autônomos executam experimentos, descobertas de fofocas, mantêm os leaderboards CRDT e arquivam resultados para o GitHub em vários domínios de pesquisa.
- [Human-Agent-Society/CORAL](https://github.com/Human-Agent-Society/CORAL) — **CORAL**: Evolução autónoma dos multiagentes para a descoberta aberta ([arXiv:2604.0165](https://arxiv.org/abs/2604.01658)). Agentes de longa duração com memória persistente compartilhada, execução assíncrona e intervenções baseadas em batimentos cardíacos; SOTA em 10 tarefas matemáticas/algorítmicas/sistemas.
- [SakanaAI/AI-Scientist](https://github.com/SakanaAI/AI-Scientist) — **O cientista da IA**: Primeiro sistema abrangente para descoberta científica totalmente automática. Da geração de ideias à escrita de papel com supervisão humana mínima.
- [SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) — Descoberta científica automatizada a nível do seminário através de uma pesquisa arbórea agentiva. Remove dependência de modelo do v1, generaliza em todos os domínios de pesquisa.
- [AweAI-Team/AiScientist](https://github.com/AweAI-Team/AiScientist) — **AiScientist**: laboratório de pesquisa de longo horizonte ML com orquestração hierárquica e coordenação File-as-Bus - arquivos de espaço de trabalho funcionam como o sistema durável de registro. Ativa loops autônomos de reprodução de papel (PaperBench) e competição-estilo MLE-Bench iteração sob orçamentos fixos de computação/tempo ([arXiv 2604.13018](https://arxiv.org/abs/2604.13018))
- [Pesquisador HKUDS/AI](https://github.com/HKUDS/AI-Researcher) — Papel NeurIPS 2025. Automação de pesquisa completa de ponta a ponta: hipótese → experimentos → manuscrito → revisão por pares. Versão de produção em [novix. science](https://novix.science/chat).
- [openags/Auto- Pesquisa](https://github.com/openags/Auto-Research) — **OpenAGS**: Orquestra uma equipe de agentes de IA em todo o ciclo de vida da pesquisa — revisão de literatura, geração de hipóteses, experimentos, escrita de manuscritos e revisão por pares.
- [SamuelSchmidgall/AgenteLaboratório](https://github.com/SamuelSchmidgall/AgentLaboratory) — Fluxo de trabalho de investigação autónomo: ideia → revisão de literatura → experiências → relatório. Suporta os modos autônomo e co-piloto.
- [AgenteRxiv](https://agentrxiv.github.io/) — Quadro de investigação autónomo colaborativo, em que os laboratórios de agentes partilham um servidor pré-impresso para desenvolver o seu trabalho iterativo.
- [JinheonBaek/Agente de Investigação](https://github.com/JinheonBaek/ResearchAgent) — Geração iterativa de ideias de investigação sobre literatura científica com LLMs. Multi-agente revisão e feedback loops.
- [du-nlp-lab/MLR-Copilot](https://github.com/du-nlp-lab/MLR-Copilot) — Quadro autónomo de investigação ML — gera ideias, implementa experiências, analisa resultados.
- [MASWorks/ML-Agent](https://github.com/MASWorks/ML-Agent) — Reforço dos agentes LLM para a engenharia autónoma de ML. Aprende com tentativa e erro para melhorar o desempenho do modelo.
- [PouriaRouzrokh/LatteReview](https://github.com/PouriaRouzrokh/LatteReview) — Pacote Python de código baixo para **revisões sistemáticas automatizadas da literatura** através de agentes com IA.
- [LitLLM/LitLLM](https://github.com/LitLLM/LitLLM) — Assistente de revisão de literatura com I.A. utilizando RAG para seções precisas e bem estruturadas relacionadas com o trabalho em escrita académica.
- [Laboratório de agentes](https://agentlaboratory.github.io/) — Oleoduto de pesquisa trifásico: Revisão de Literatura → Experimentação → Redação de Relatórios, com agentes especializados para cada fase.
- [happy happy-jun/writing-driven-autoresearch](https://github.com/happyhappy-jun/writing-driven-autoresearch) — Autoresearch-estilo arnês que mantém um papel submittable desde o primeiro minuto e impulsiona cada experiência a partir das reivindicações nesse rascunho, looping modificar → medida → verificar → rever. 1o lugar no [Ralphthon@ ICML 2026](https://luma.com/hjuo7auc) Hackathon de investigação autónoma.
- [Fábrica/Agon de Pesquisa Automática](https://github.com/AutoResearch-Factory/Agon) — Orchestrator de pesquisa de ponta a ponta construído sobre um princípio fundamental, Prompt Economy (laops reutilizáveis, não prompts one-off), mais cinco regras de apoio; executa loops cientista/coder/auditor em mais de 10 disciplinas, mesma linhagem de loop reutilizável como autopesquisa, mas escalou para programas de pesquisa completos.

### Portas da plataforma e garfos de hardware

- [gianfrancopiana/openclaw-autoresearch](https://github.com/gianfrancopiana/openclaw-autoresearch) — Porto OpenClaw de pi-autopesquisa; ciclo de experiências autónomo para qualquer alvo de otimização com pontuação de confiança estatística.
- [miolini/autoresearch-macos](https://github.com/miolini/autoresearch-macos) — Forquete macOS amplamente adotado que adapta a pesquisa automática upstream para Apple Silicon / MPS, preservando a forma original do laço.
- [trevin-creator/autoresearch-mlx](https://github.com/trevin-creator/autoresearch-mlx) — porta MLX-native Apple Silicon que mantém o orçamento fixo a montante `val_bpb` loop ao remover completamente a dependência PyTorch/CUDA.
- [jsegov/autoresearch-win-rtx](https://github.com/jsegov/autoresearch-win-rtx) — Garfo RTX nativo do Windows focado em GPUs de consumo NVIDIA, com pisos VRAM explícitos e um caminho prático de configuração de desktop.
- [iii-hq/n-auto-research](https://github.com/iii-hq/n-autoresearch) — Infraestrutura de pesquisa automática multi-GPU com rastreamento estruturado de experiências, estratégia de busca adaptativa, recuperação de falhas e orquestração questionável em torno do clássico `train.py` Loop.
- [lucasgelfond/autoresearch-webgpu](https://github.com/lucasgelfond/autoresearch-webgpu) — Porta Browser/WebGPU que permite aos agentes gerar código de treinamento, executar experimentos in-browser, e feed resultados de volta para o loop sem uma configuração Python.
- [tonitangbatato/autoresearch-engram](https://github.com/tonitangpotato/autoresearch-engram) — Forquilha com **memória cognitiva persistente** — recuperação ponderada em frequência dos conhecimentos intersessões para uma melhor continuidade das experiências.
- [Porta Colab/Kagle T4](https://github.com/karpathy/autoresearch/issues/208) — Adapta auto-research para GPUs T4 grátis (Google Colab / Kaggle) com custo zero e configuração local zero. Principais alterações: Flash Atenção 3 → PyTorch SDPA, remove dependência de kernel somente H100.
- [ArmanJR- Lab/auto-research](https://github.com/ArmanJR-Lab/autoautoresearch) — porto de Jetson AGX Orin com um **diretor** — um binário Go que atua como um "diretor criativo" injetando novidade (papers arxiv + DeepSeek Reasoner) no loop para escapar de mínimos locais. Inclui comparação multi-experimento (baseline vs diretor-guiado) com análise detalhada da baia.

### Adaptações Específicas de Domínio

- [mattprusak/genealogia de pesquisa automática](https://github.com/mattprusak/autoresearch-genealogy) — Aplica o padrão de auto-pesquisa à genealogia, usando prompts estruturados, guias de arquivo, verificações de fonte e fluxos de trabalho de cofre para expandir iterativamente e verificar a pesquisa de história familiar.
- [ArchishmanSengupta/autovoicevals](https://github.com/ArchishmanSengupta/autovoiceevals) — Utiliza chamadas adversas mais edições rápidas para endurecer agentes de IA de voz em Vapi, Menor IA e OnzeLabs.
- [chrisworsey55/atlas-gic](https://github.com/chrisworsey55/atlas-gic) — Aplica a auto-research keep-ou-revert loop aos agentes de negociação, otimizando os prompts e orquestração de portfólio contra a relação Sharpe rolamento em vez de perda de modelo.
- [Now-AI/autokernel](https://github.com/RightNow-AI/autokernel) — Aplica o loop de autopesquisa à otimização do kernel da GPU: gargalos de perfil, editar um kernel, benchmark, manter ou reverter, repetir.
- [ElliotXie/autozima](https://github.com/ElliotXie/autozyme) — Framework multi-agente que aplica a auto-research keep-ou-revert loop para software científico do lado da CPU: perfilar uma função alvo, gerar um candidato de otimização, referência para a velocidade, preservando as saídas originais, manter ou reverter, repetir.
- [Agent-Analytics/Autoresearch-crescimento](https://github.com/Agent-Analytics/autoresearch-growth) — Aplica auto-pesquisa ao posicionamento da página de aterragem e aos candidatos aos testes A/B, utilizando instantâneos analíticos e resultados de experiências medidos nas rodadas subsequentes.
- [Rkcr7/autoresearch-sudoku](https://github.com/Rkcr7/autoresearch-sudoku) — Melhoramento do fluxo de trabalho de pesquisa automática, onde um agente de IA reescreve iterativamente e faz referência a um solucionador Rust sudoku, derrotando os principais solucionadores construídos por humanos em conjuntos de benchmark rígidos.
- [jeongph/autospec](https://github.com/jeongph/autospec) — Lê regras de negócios em linguagem natural e constrói autonomamente um serviço de Boot Spring com testes através do loop keep-or-revert. Avalia com Gradle build + JUnit XML. esqueleto de 119 linhas para 950 linhas em 5 ciclos.
- [vlasenkoalexey/tpu_desempenho_pesquisa automática_wiki](https://github.com/vlasenkoalexey/tpu_performance_autoresearch_wiki) — Aplica o auto-research keep-or-revert loop ao desempenho do modelo TPU (MFU / tokens-per-sec) em hardware v6e: perfis cada um executado através de um servidor XProf MCP, faz uma mudança de código de modelo por experimento, e mantém ou reverte contra MFU medido. Emparelha o loop com uma wiki LLM estilo Karpathy para conhecimento de domínio e traços de otimização por experiência; inclui estudos de caso Llama3-8B e Qwen3-8B em todas as faixas JAX e tochax.

### Avaliação & Benchmarks

- [snap-stanford/MLAgentBench](https://github.com/snap-stanford/MLAgentBench) — Conjunto Benchmark para avaliação de agentes de IA em tarefas de experimentação ML. 13 tarefas do CIFAR-10 à BabyLM.
- [OpenAI/mle-bench](https://github.com/openai/mle-bench) — referência da OpenAI para medir o desempenho dos agentes de IA na engenharia ML.
- [chchenhui/mlrbench](https://github.com/chchenhui/mlrbench) — MLR-Bench: Avaliar os agentes de IA em matéria de investigação em ML em fase aberta. 201 tarefas das oficinas NeurIPS/ICLR/ICML.
- [gersteinlab/ML-Bench](https://github.com/gersteinlab/ML-Bench) — Avalia LLMs e agentes para tarefas de ML no código de repositório.
- [THUDM/AgentBench](https://github.com/THUDM/AgentBench) — Referência abrangente para avaliação LLM-as-Agent em 8 ambientes distintos. ICLR 2024.

### Recursos Relacionados

- [ai-agents-2030/awesome-deep-research-agent](https://github.com/ai-agents-2030/awesome-deep-research-agent) — Lista dos documentos e sistemas dos agentes de investigação.
- [YoungDubbyDu/LLM-Agent-Otimização](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) — Trabalhos sobre métodos de otimização de agentes LLM.
- [VoltAgent](https://github.com/VoltAgent/awesome-ai-agent-papers) — Documentos de agentes de IA curados de 2026 — Engenharia de agentes, memória, avaliação, fluxos de trabalho e sistemas autónomos.
- [masamasa59/ai-agent-papers](https://github.com/masamasa59/ai-agent-papers) — Documentos de investigação do agente de IA actualizados quinzenalmente através de pesquisa automática arxiv com selecção com curadoria.
- [tmgthb/Agentes autónomos](https://github.com/tmgthb/Autonomous-Agents) — Documentos de investigação dos agentes autónomos, actualizados diariamente.
- [HKUST-KnowComp/Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — Inquérito EMNLP 2025 sobre LLMs em descobertas científicas.
- [Openags/Awesome-AI-Scientist-Papers](https://github.com/openags/Awesome-AI-Scientist-Papers) — Colecção de documentos científicos sobre IA/robots.
- [agenticscience.github.io](https://agenticscience.github.io/) — Inquérito: "Da IA para a Ciência à Ciência Agenética: Um inquérito sobre a descoberta científica autónoma."
- [dspy.ai/GEPA](https://dspy.ai/api/optimizers/GEPA/overview/) — integração DSPy de GEPA reflexive prompt optimization para sistemas compostos de IA.
- [OpenAI Cookbook: Agentes autoevolutivos](https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining) — Livro de receitas para reciclagem de agentes autónomos utilizando a evolução reflexiva do GEPA.
- [WecoAI/investigaçãoautomática incrível](https://github.com/WecoAI/awesome-autoresearch) — Lista com curadoria de casos de uso AutoPesquisa com traços verificáveis e gráficos de progresso, organizados por domínio (treino LLM, kernels GPU, agentes de voz, negociação, etc.).

<!-- AUTORESEARCH-END -->

---

## Como contribuir

Congratulamo-nos com as contribuições para esta lista! Antes de contribuir, por favor, tome um momento para rever o nosso [Orientações para as contribuições](contributing.md)Essas diretrizes ajudarão a garantir que suas contribuições se alinham aos nossos objetivos e atendam aos nossos padrões de qualidade e relevância.

**O que estamos à procura:**
- Novos artigos, ferramentas ou recursos de alta qualidade com uma breve descrição do porquê eles importam
- Atualiza as entradas existentes (links quebrados, informações desatualizadas)
- Correções às contagens de estrelas, preços ou detalhes do modelo
- Traduções e melhorias de acessibilidade

**Normas de qualidade:**
- Todas as ferramentas devem ser mantidas ativamente (atualizadas nos últimos 6 meses)
- Os documentos devem ser provenientes de locais revistos por pares ou ter uma adopção comunitária significativa
- Os conjuntos de dados deverão ser acessíveis ao público
- Por favor, inclua uma descrição de uma linha explicando por que o recurso é valioso

Obrigado pelo seu interesse em contribuir para este projeto!

<a href="https://github.com/promptslab/Awesome-Prompt-Engineering/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=promptslab/Awesome-Prompt-Engineering" />
</a>

---

<p align="center">
  <sub>Mantido por <a href="https://promptslab.github.io">PedidosLab</a> · <a href="https://github.com/promptslab/Awesome-Prompt-Engineering">Estrelar este repo</a> Se achares útil!</sub>
</p>
