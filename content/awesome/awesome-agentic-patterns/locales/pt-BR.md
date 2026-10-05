# Awesome Agentic Patterns

![Awesome Agentic Patterns](/agentic-patterns.jpeg)

Um catálogo selecionado de **padrões de IA agêntica** — truques, fluxos de trabalho e miniarquiteturas do mundo real que ajudam agentes de IA autônomos ou semiautônomos a realizar tarefas úteis em produção.

 > **Por quê?**
> Tutoriais mostram demonstrações simplificadas. Produtos reais escondem as partes complexas. Esta lista apresenta padrões reutilizáveis que preenchem essa lacuna para que todos possam lançar agentes mais inteligentes e rápidos.

---

## O que conta como padrão?

* **Repetível** – usado por mais de uma equipe.
* **Centrado no agente** – melhora a percepção, o raciocínio ou as ações de um agente de IA.
* **Rastreável** – respaldado por uma referência pública: artigo, palestra, repositório ou publicação.

Se seu link atender a esses critérios, ele pertence a esta lista.

---

## 🌐 Explore o site

**Acesse:** [https://agentic-patterns.com](https://agentic-patterns.com)

O site oferece ferramentas avançadas de descoberta além deste README:

- **Pattern Explorer**: navegue, filtre e pesquise todos os padrões por categoria, status, complexidade e outros critérios
- **Compare Tool**: compare vários padrões lado a lado por seus atributos comuns
- **Decision Explorer**: guia interativo para encontrar o padrão adequado ao seu caso de uso
- **Graph Visualization**: mapa visual das relações e conexões entre padrões
- **Pattern Packs**: coleções selecionadas de padrões para arquiteturas de agentes comuns
- **Developer Guides**: documentação detalhada sobre seleção e uso dos padrões
- **Dark Mode**: suporte completo a temas para uma leitura confortável em qualquer ambiente

Criado com [Astro](https://astro.build), implantado na [Vercel](https://vercel.com), código-fonte em [`apps/web/`](./apps/web/).

---

## Visão geral das categorias

<!-- AUTO-GENERATED TOC START -->
|  Categoria                                             |  O que você encontrará                                   |
| ------------------------------------------------------ | --------------------------------------------------------- |
| [**Contexto e memória**](#context-memory)              | Curadoria por janela deslizante, cache vetorial, memória episódica |
| [**Ciclos de feedback**](#feedback-loops)               | Compiladores, CI, revisão humana, novas tentativas autocorretivas |
| [**Aprendizado e adaptação**](#learning-adaptation)    | Agent RFT, bibliotecas de habilidades, RL baseado em variância |
| [**Orquestração e controle**](#orchestration-control)  | Decomposição de tarefas, criação de subagentes, roteamento de ferramentas |
| [**Confiabilidade e avaliação**](#reliability-eval)     | Proteções, estruturas de avaliação, registros, reprodutibilidade |
| [**Segurança e proteção**](#security-safety)            | VMs isoladas, tokenização de dados pessoais, varredura de segurança |
| [**Uso de ferramentas e ambiente**](#tool-use-environment) | Shell, navegador, banco de dados, Playwright, técnicas de sandbox |
| [**UX e colaboração**](#ux-collaboration)               | Transferência de prompts, commits preparados, agentes em segundo plano assíncronos |
<!-- AUTO-GENERATED TOC END -->

*As categorias são flexíveis — abra uma PR se encontrar uma divisão melhor!*
As tabelas abaixo são geradas automaticamente a partir da pasta `patterns/`.

---

<!-- …existing content above… -->

<!-- AUTO-GENERATED PATTERNS START -->

### <a name="context-memory"></a>Contexto e memória

- [Agent-Powered Codebase Q&A / Onboarding](patterns/agent-powered-codebase-qa-onboarding.md)
- [Context Budget as a Governed Resource](patterns/context-budget-as-a-governed-resource.md)
- [Context Window Anxiety Management](patterns/context-window-anxiety-management.md)
- [Context Window Auto-Compaction](patterns/context-window-auto-compaction.md)
- [Context-Minimization Pattern](patterns/context-minimization-pattern.md)
- [Cross-Agent Lesson Sharing via Git](patterns/cross-agent-lesson-sharing.md)
- [Curated Code Context Window](patterns/curated-code-context-window.md)
- [Curated File Context Window](patterns/curated-file-context-window.md)
- [Dynamic Context Injection](patterns/dynamic-context-injection.md)
- [Episodic Memory Retrieval & Injection](patterns/episodic-memory-retrieval-injection.md)
- [Filesystem-Based Agent State](patterns/filesystem-based-agent-state.md)
- [Layered Configuration Context](patterns/layered-configuration-context.md)
- [Memory Synthesis from Execution Logs](patterns/memory-synthesis-from-execution-logs.md)
- [Proactive Agent State Externalization](patterns/proactive-agent-state-externalization.md)
- [Progressive Disclosure for Large Files](patterns/progressive-disclosure-large-files.md)
- [Prompt Caching via Exact Prefix Preservation](patterns/prompt-caching-via-exact-prefix-preservation.md)
- [Schema-Guided Graph Retrieval for Multi-Hop Reasoning](patterns/schema-guided-graph-retrieval.md)
- [Self-Identity Accumulation](patterns/self-identity-accumulation.md)
- [Semantic Context Filtering Pattern](patterns/semantic-context-filtering.md)
- [Session-Scoped Context Runtime for Agent Tools](patterns/session-scoped-context-runtime-for-agent-tools.md)
- [Tool Search Lazy Loading](patterns/tool-search-lazy-loading.md)
- [Working Memory via TodoWrite](patterns/working-memory-via-todos.md)

### <a name="feedback-loops"></a>Ciclos de feedback

- [AI-Assisted Code Review / Verification](patterns/ai-assisted-code-review-verification.md)
- [Background Agent with CI Feedback](patterns/background-agent-ci.md)
- [Coding Agent CI Feedback Loop](patterns/coding-agent-ci-feedback-loop.md)
- [Deterministic Grader in the Loop](patterns/deterministic-grader-in-the-loop.md)
- [Dogfooding with Rapid Iteration for Agent Improvement](patterns/dogfooding-with-rapid-iteration-for-agent-improvement.md)
- [Graph of Thoughts (GoT)](patterns/graph-of-thoughts.md)
- [Incident-to-Eval Synthesis](patterns/incident-to-eval-synthesis.md)
- [Inference-Healed Code Review Reward](patterns/inference-healed-code-review-reward.md)
- [Iterative Prompt & Skill Refinement](patterns/iterative-prompt-skill-refinement.md)
- [Reflection Loop](patterns/reflection.md)
- [Rendered UI Finish Gate](patterns/rendered-ui-finish-gate.md)
- [Rich Feedback Loops > Perfect Prompts](patterns/rich-feedback-loops.md)
- [Self-Critique Evaluator Loop](patterns/self-critique-evaluator-loop.md)
- [Self-Discover: LLM Self-Composed Reasoning Structures](patterns/self-discover-reasoning-structures.md)
- [Spec-As-Test Feedback Loop](patterns/spec-as-test-feedback-loop.md)
- [Tool Use Incentivization via Reward Shaping](patterns/tool-use-incentivization-via-reward-shaping.md)

### <a name="learning-adaptation"></a>Aprendizado e adaptação

- [Agent Reinforcement Fine-Tuning (Agent RFT)](patterns/agent-reinforcement-fine-tuning.md)
- [Commitment Ledger with Reality-Gated Credit](patterns/commitment-ledger-reality-gated-credit.md)
- [Compounding Engineering Pattern](patterns/compounding-engineering-pattern.md)
- [Frontier-Focused Development](patterns/frontier-focused-development.md)
- [Memory Reinforcement Learning (MemRL)](patterns/memory-reinforcement-learning-memrl.md)
- [Persistent Test Memory Feedback Loop](patterns/persistent-test-memory-feedback-loop.md)
- [Shipping as Research](patterns/shipping-as-research.md)
- [Skill Library Evolution](patterns/skill-library-evolution.md)
- [Variance-Based RL Sample Selection](patterns/variance-based-rl-sample-selection.md)

### <a name="orchestration-control"></a>Orquestração e controle

- [402-First Machine Payments (Price-Before-Work Tool Purchases)](patterns/402-first-machine-payments.md)
- [Action-Selector Pattern](patterns/action-selector-pattern.md)
- [Agent Modes by Model Personality](patterns/agent-modes-by-model-personality.md)
- [Agent-Driven Research](patterns/agent-driven-research.md)
- [Artifact-Driven Analysis Pipeline Orchestration](patterns/multi-step-analysis-pipeline-orchestration.md)
- [Autonomous Workflow Agent Architecture](patterns/autonomous-workflow-agent-architecture.md)
- [Board-Mediated Async Inter-Agent Coordination](patterns/board-mediated-inter-agent-coordination.md)
- [Budget-Aware Model Routing with Hard Cost Caps](patterns/budget-aware-model-routing-with-hard-cost-caps.md)
- [Burn the Boats](patterns/burn-the-boats.md)
- [Capability-Escrow-Receipt](patterns/capability-escrow-receipt.md)
- [Classify-Then-Act for Background Agents](patterns/classify-then-act-for-background-agents.md)
- [Conditional Parallel Tool Execution](patterns/parallel-tool-execution.md)
- [Continuous Autonomous Task Loop Pattern](patterns/continuous-autonomous-task-loop-pattern.md)
- [Cross-Cycle Consensus Relay](patterns/cross-cycle-consensus-relay.md)
- [Cross-Domain Agent Conflict Resolution](patterns/cross-domain-agent-conflict-resolution.md)
- [Custom Sandboxed Background Agent](patterns/custom-sandboxed-background-agent.md)
- [Declarative Multi-Agent Topology Definition](patterns/declarative-multi-agent-topology-definition.md)
- [Design-Time File Partition as Concurrency Control](patterns/design-time-file-partition.md)
- [Deterministic Zero-LLM Orchestration](patterns/deterministic-zero-llm-orchestration.md)
- [Discrete Phase Separation](patterns/discrete-phase-separation.md)
- [Disposable Scaffolding Over Durable Features](patterns/disposable-scaffolding-over-durable-features.md)
- [Distributed Execution with Cloud Workers](patterns/distributed-execution-cloud-workers.md)
- [Dual LLM Pattern](patterns/dual-llm-pattern.md)
- [Dual-Rail Message Delivery](patterns/dual-rail-message-delivery.md)
- [Economic Value Signaling in Multi-Agent Networks](patterns/economic-value-signaling-multi-agent.md)
- [Explicit Posterior-Sampling Planner](patterns/explicit-posterior-sampling-planner.md)
- [Factory over Assistant](patterns/factory-over-assistant.md)
- [Feature List as Immutable Contract](patterns/feature-list-as-immutable-contract.md)
- [Hybrid LLM/Code Workflow Coordinator](patterns/hybrid-llm-code-workflow-coordinator.md)
- [Inference-Time Scaling](patterns/inference-time-scaling.md)
- [Initializer-Maintainer Dual Agent Architecture](patterns/initializer-maintainer-dual-agent.md)
- [Inversion of Control](patterns/inversion-of-control.md)
- [Iterative Multi-Agent Brainstorming](patterns/iterative-multi-agent-brainstorming.md)
- [Lane-Based Execution Queueing](patterns/lane-based-execution-queueing.md)
- [Language Agent Tree Search (LATS)](patterns/language-agent-tree-search-lats.md)
- [LLM Map-Reduce Pattern](patterns/llm-map-reduce-pattern.md)
- [Markdown Polis — Multi-Vendor Agent Coordination via Filesystem Constitution](patterns/markdown-polis-coordination.md)
- [Multi-Model Orchestration for Complex Edits](patterns/multi-model-orchestration-for-complex-edits.md)
- [Non-Generative Judgment Routing with Typed Escalation](patterns/non-generative-judgment-routing.md)
- [Opponent Processor / Multi-Agent Debate Pattern](patterns/opponent-processor-multi-agent-debate.md)
- [Oracle and Worker Multi-Model Approach](patterns/oracle-and-worker-multi-model.md)
- [Parallel Tool Call Learning](patterns/parallel-tool-call-learning.md)
- [Plan-Then-Execute Pattern](patterns/plan-then-execute-pattern.md)
- [Planner-Worker Separation for Long-Running Agents](patterns/planner-worker-separation-for-long-running-agents.md)
- [Progressive Autonomy with Model Evolution](patterns/progressive-autonomy-with-model-evolution.md)
- [Progressive Complexity Escalation](patterns/progressive-complexity-escalation.md)
- [Recursive Best-of-N Delegation](patterns/recursive-best-of-n-delegation.md)
- [Self-Rewriting Meta-Prompt Loop](patterns/self-rewriting-meta-prompt-loop.md)
- [Signal-Driven Agent Activation](patterns/signal-driven-agent-activation.md)
- [Specification-Driven Agent Development](patterns/specification-driven-agent-development.md)
- [Stop Hook Auto-Continue Pattern](patterns/stop-hook-auto-continue-pattern.md)
- [Sub-Agent Spawning](patterns/sub-agent-spawning.md)
- [Subject Hygiene for Task Delegation](patterns/subject-hygiene.md)
- [Swarm Migration Pattern](patterns/swarm-migration-pattern.md)
- [Three-Stage Perception Architecture](patterns/three-stage-perception-architecture.md)
- [Tool Capability Compartmentalization](patterns/tool-capability-compartmentalization.md)
- [Tool Selection Guide](patterns/tool-selection-guide.md)
- [Tracker-as-Desired-State Reconciliation](patterns/tracker-as-desired-state-reconciliation.md)
- [Tree-of-Thought Reasoning](patterns/tree-of-thought-reasoning.md)
- [Workspace-Native Multi-Agent Orchestration](patterns/workspace-native-multi-agent-orchestration.md)

### <a name="reliability-eval"></a>Confiabilidade e avaliação

- [Action Caching & Replay Pattern](patterns/action-caching-replay.md)
- [Adaptive Sandbox Fan-Out Controller](patterns/adaptive-sandbox-fanout-controller.md)
- [Agent Circuit Breaker](patterns/agent-circuit-breaker.md)
- [Anti-Reward-Hacking Grader Design](patterns/anti-reward-hacking-grader-design.md)
- [Asynchronous Coding Agent Pipeline](patterns/asynchronous-coding-agent-pipeline.md)
- [Canary Rollout and Automatic Rollback for Agent Policy Changes](patterns/canary-rollout-and-automatic-rollback-for-agent-policy-changes.md)
- [CriticGPT-Style Code Review](patterns/criticgpt-style-evaluation.md)
- [Dead-Man's Switch for Scheduled Agent Jobs](patterns/dead-mans-switch-for-scheduled-agent-jobs.md)
- [Evidence-Layered Evaluation for Interactive Agents](patterns/evidence-layered-evaluation-for-interactive-agents.md)
- [Extended Coherence Work Sessions](patterns/extended-coherence-work-sessions.md)
- [Failover-Aware Model Fallback](patterns/failover-aware-model-fallback.md)
- [Lethal Trifecta Threat Model](patterns/lethal-trifecta-threat-model.md)
- [LLM Observability](patterns/llm-observability.md)
- [Merged Code + Language Skill Model](patterns/merged-code-language-skill-model.md)
- [No-Token-Limit Magic](patterns/no-token-limit-magic.md)
- [Orchestration Prompt-Writing Benchmark](patterns/orchestration-prompt-writing-benchmark.md)
- [Out-of-Process Provider-Boundary Replay](patterns/out-of-process-provider-boundary-replay.md)
- [Output Verification Loop](patterns/output-verification-loop.md)
- [Own-Check Fault Injection](patterns/own-check-fault-injection.md)
- [Reasoning-Token Firewall](patterns/reasoning-token-firewall.md)
- [Reliability Problem Map Checklist for RAG and Agents](patterns/wfgy-reliability-problem-map.md)
- [RLAIF (Reinforcement Learning from AI Feedback)](patterns/rlaif-reinforcement-learning-from-ai-feedback.md)
- [Schema Validation Retry with Cross-Step Learning](patterns/schema-validation-retry-cross-step-learning.md)
- [Skill Activation as a Precision/Recall Measurement](patterns/skill-activation-as-precision-recall.md)
- [Structured Output Specification](patterns/structured-output-specification.md)
- [Subagent Compilation Checker](patterns/subagent-compilation-checker.md)
- [Tier Auto-Apply by Mechanical Impact](patterns/tier-auto-apply-by-mechanical-impact.md)
- [Versioned Constitution Governance](patterns/versioned-constitution-governance.md)
- [Workflow Evals with Mocked Tools](patterns/workflow-evals-with-mocked-tools.md)

### <a name="security-safety"></a>Segurança e proteção

- [Authenticated Authority Channel](patterns/authenticated-authority-channel.md)
- [Black-Box Skill Invocation](patterns/black-box-skill-invocation.md)
- [Consequence-Family Coverage Audit](patterns/consequence-family-coverage-audit.md)
- [Cryptographic Governance Audit Trail](patterns/cryptographic-governance-audit-trail.md)
- [Denial Tracking & Permission Escalation](patterns/denial-tracking-permission-escalation.md)
- [Deterministic Security Scanning Build Loop](patterns/deterministic-security-scanning-build-loop.md)
- [Deterministic Threat Rule Scanning](patterns/deterministic-threat-rule-scanning.md)
- [Evidence Questions, Not Verdict Questions](patterns/evidence-questions-not-verdict-questions.md)
- [Exact-Action Authorization Binding](patterns/exact-action-authorization-binding.md)
- [External Credential Sync](patterns/external-credential-sync.md)
- [Hook-Based Safety Guard Rails for Autonomous Code Agents](patterns/hook-based-safety-guard-rails.md)
- [Isolated VM per RL Rollout](patterns/isolated-vm-per-rl-rollout.md)
- [Local-First Credential Broker](patterns/local-first-credential-broker.md)
- [Non-Custodial Spending Controls](patterns/non-custodial-spending-controls.md)
- [One OS User per Agent](patterns/one-os-user-per-agent.md)
- [PII Tokenization](patterns/pii-tokenization.md)
- [Policy-Gated Tool Proxy](patterns/policy-gated-tool-proxy.md)
- [Sandboxed Tool Authorization](patterns/sandboxed-tool-authorization.md)
- [Soulbound Identity Verification](patterns/soulbound-identity-verification.md)
- [Transitive Vouch-Chain Trust](patterns/transitive-vouch-chain-trust.md)
- [Zero-Knowledge Verified Agent Egress](patterns/zero-knowledge-verified-agent-egress.md)
- [Zero-Trust Agent Mesh](patterns/zero-trust-agent-mesh.md)

### <a name="tool-use-environment"></a>Uso de ferramentas e ambiente

- [Agent SDK for Programmatic Control](patterns/agent-sdk-for-programmatic-control.md)
- [Agent-First Tool Discovery](patterns/agent-first-tool-discovery.md)
- [Agent-First Tooling and Logging](patterns/agent-first-tooling-and-logging.md)
- [Agentic Search Over Vector Embeddings](patterns/agentic-search-over-vector-embeddings.md)
- [AI Web Search Agent Loop](patterns/ai-web-search-agent-loop.md)
- [CLI-First Skill Design](patterns/cli-first-skill-design.md)
- [CLI-Native Agent Orchestration](patterns/cli-native-agent-orchestration.md)
- [Code Mode MCP Tool Interface Improvement Pattern](patterns/code-first-tool-interface-pattern.md)
- [Code-Over-API Pattern](patterns/code-over-api-pattern.md)
- [Code-Then-Execute Pattern](patterns/code-then-execute-pattern.md)
- [Cross-Protocol Agent Discovery](patterns/cross-protocol-agent-discovery.md)
- [Dual-Use Tool Design](patterns/dual-use-tool-design.md)
- [Dynamic Code Injection (On-Demand File Fetch)](patterns/dynamic-code-injection-on-demand-file-fetch.md)
- [Egress Lockdown (No-Exfiltration Channel)](patterns/egress-lockdown-no-exfiltration-channel.md)
- [Filesystem-Mediated Host Delegation](patterns/filesystem-mediated-host-delegation.md)
- [Intelligent Bash Tool Execution](patterns/intelligent-bash-tool-execution.md)
- [LLM-Friendly API Design](patterns/llm-friendly-api-design.md)
- [MCP Pattern Injection](patterns/mcp-pattern-injection.md)
- [Multi-Platform Communication Aggregation](patterns/multi-platform-communication-aggregation.md)
- [Multi-Platform Webhook Triggers](patterns/multi-platform-webhook-triggers.md)
- [Patch Steering via Prompted Tool Selection](patterns/patch-steering-via-prompted-tool-selection.md)
- [Precomputed Code Graph Lookup](patterns/precomputed-code-graph-lookup.md)
- [Progressive Tool Discovery](patterns/progressive-tool-discovery.md)
- [Shell Command Contextualization](patterns/shell-command-contextualization.md)
- [Static Service Manifest for Agents](patterns/static-service-manifest-for-agents.md)
- [Tool Use Steering via Prompting](patterns/tool-use-steering-via-prompting.md)
- [Unified Tool Gateway](patterns/unified-tool-gateway.md)
- [Virtual Machine Operator Agent](patterns/virtual-machine-operator-agent.md)
- [Visual AI Multimodal Integration](patterns/visual-ai-multimodal-integration.md)

### <a name="ux-collaboration"></a>UX e colaboração

- [Abstracted Code Representation for Review](patterns/abstracted-code-representation-for-review.md)
- [Agent-Assisted Scaffolding](patterns/agent-assisted-scaffolding.md)
- [Agent-Friendly Workflow Design](patterns/agent-friendly-workflow-design.md)
- [AI-Accelerated Learning and Skill Development](patterns/ai-accelerated-learning-and-skill-development.md)
- [Chain-of-Thought Monitoring & Interruption](patterns/chain-of-thought-monitoring-interruption.md)
- [Codebase Optimization for Agents](patterns/codebase-optimization-for-agents.md)
- [Democratization of Tooling via Agents](patterns/democratization-of-tooling-via-agents.md)
- [Dev Tooling Assumptions Reset](patterns/dev-tooling-assumptions-reset.md)
- [Human-in-the-Loop Approval Framework](patterns/human-in-loop-approval-framework.md)
- [Latent Demand Product Discovery](patterns/latent-demand-product-discovery.md)
- [Milestone Escrow for Agent Resource Funding](patterns/agentfund-crowdfunding.md)
- [Proactive Trigger Vocabulary](patterns/proactive-trigger-vocabulary.md)
- [Seamless Background-to-Foreground Handoff](patterns/seamless-background-to-foreground-handoff.md)
- [Spectrum of Control / Blended Initiative](patterns/spectrum-of-control-blended-initiative.md)
- [Team-Shared Agent Configuration as Code](patterns/team-shared-agent-configuration.md)
- [Verbose Reasoning Transparency](patterns/verbose-reasoning-transparency.md)

<!-- AUTO-GENERATED PATTERNS END -->

<!-- …existing content below… -->

---

## Para assistentes de IA (llms.txt)

Este projeto inclui [`llms.txt`](https://agentic-patterns.com/llms.txt), um arquivo de documentação legível por máquinas criado para ajudar assistentes de IA e LLMs a entender e recomendar padrões adequados.

**O que está incluído:**
- Categorias de padrões e suas finalidades
- Padrões principais com descrições concisas
- Diretrizes de uso para assistentes de IA
- Estratégias de seleção de padrões conforme os requisitos do caso de uso

**Para desenvolvedores de assistentes de IA:**
O arquivo `llms.txt` pode ser fornecido aos LLMs como contexto para melhorar as recomendações de padrões. Ele é otimizado para:
- Sistemas RAG que indexam este catálogo
- Assistentes de programação com IA que sugerem padrões
- Ferramentas com LLMs que recomendam padrões agênticos

**Acesso:** https://agentic-patterns.com/llms.txt (também disponível em [`apps/web/public/llms.txt`](./apps/web/public/llms.txt))

---

## Contribua em 3 etapas

1. **Faça um fork e crie uma branch** → `git checkout -b add-my-pattern`
2. **Adicione um arquivo de padrão** em `patterns/` usando o modelo acima.
3. **Execute** `bun run build:data` para atualizar as seções geradas do README e os dados do site.
4. **Abra uma PR** com o título `Add: my-pattern-name`.
5. Este repositório prioriza padrões: propostas que sejam principalmente anúncios ou promoções de produtos serão rejeitadas, mesmo que sejam tecnicamente válidas.

Consulte [`CONTRIBUTING.md`](https://github.com/nibzard/awesome-agentic-patterns/blob/main/CONTRIBUTING.md) para ver os detalhes.

---

## Inspiração

Este projeto começou após o artigo [**“O que a Sourcegraph aprendeu ao criar agentes de programação com IA”**](https://www.nibzard.com/ampcode) (28 de maio de 2025) e o diário em vídeo contínuo *Raising an Agent*. Muitos dos primeiros padrões vieram diretamente dessas lições — obrigado a todos que compartilham sua jornada abertamente!

---

## Licença

Apache‑2.0. Consulte [`LICENSE`](https://github.com/nibzard/awesome-agentic-patterns/blob/main/LICENSE).

---

## Histórico de estrelas

[![Star History Chart](https://star-history.dera.page/svg?repos=nibzard/awesome-agentic-patterns&type=date&legend=top-left)](https://star-history.dera.page/#nibzard/awesome-agentic-patterns&type=date&legend=top-left)
