# Awesome Agentic Patterns

![Awesome Agentic Patterns](/agentic-patterns.jpeg)

Un catalogue sélectionné de **modèles d’IA agentique** : astuces, flux de travail et mini-architectures du monde réel qui aident les agents IA autonomes ou semi-autonomes à accomplir des tâches utiles en production.

> **Pourquoi ?**
> Les tutoriels montrent des démonstrations simplistes. Les vrais produits cachent les aspects complexes. Cette liste met en évidence les modèles reproductibles qui comblent l’écart afin que nous puissions tous livrer des agents plus intelligents et plus rapides.

---

## Qu’est-ce qu’un modèle ?

* **Reproductible** – utilisé par plusieurs équipes.
* **Centré sur l’agent** – améliore la perception, le raisonnement ou l’action d’un agent IA.
* **Traçable** – étayé par une référence publique : article, conférence, dépôt ou publication.

Si votre lien répond à ces critères, il a sa place ici.

---

## 🌐 Explorer le site web

**Visiter :** [https://agentic-patterns.com](https://agentic-patterns.com)

Le site propose des outils de découverte avancés en complément de ce README :

- **Pattern Explorer** : parcourir, filtrer et rechercher tous les modèles par catégorie, statut, complexité et plus encore
- **Compare Tool** : comparer côte à côte plusieurs modèles selon leurs attributs communs
- **Decision Explorer** : guide interactif pour trouver le modèle adapté à votre cas d’usage
- **Graph Visualization** : représentation visuelle des relations entre les modèles
- **Pattern Packs** : collections sélectionnées de modèles pour les architectures d’agents courantes
- **Developer Guides** : documentation détaillée sur le choix et l’utilisation des modèles
- **Dark Mode** : prise en charge complète des thèmes pour une lecture confortable dans tout environnement

Réalisé avec [Astro](https://astro.build), déployé sur [Vercel](https://vercel.com), code source dans [`apps/web/`](./apps/web/).

---

## Aperçu des catégories

<!-- AUTO-GENERATED TOC START -->
|  Catégorie                                             |  Ce que vous trouverez                                    |
| ------------------------------------------------------ | --------------------------------------------------------- |
| [**Contexte et mémoire**](#context-memory)              | Sélection par fenêtre glissante, cache vectoriel, mémoire épisodique |
| [**Boucles de rétroaction**](#feedback-loops)           | Compilateurs, CI, revue humaine, nouvelles tentatives autoréparatrices |
| [**Apprentissage et adaptation**](#learning-adaptation) | Agent RFT, bibliothèques de compétences, RL fondé sur la variance |
| [**Orchestration et contrôle**](#orchestration-control) | Décomposition des tâches, création de sous-agents, routage des outils |
| [**Fiabilité et évaluation**](#reliability-eval)        | Garde-fous, bancs d’évaluation, journalisation, reproductibilité |
| [**Sécurité et sûreté**](#security-safety)             | Machines virtuelles isolées, tokenisation des données personnelles, analyse de sécurité |
| [**Outils et environnement**](#tool-use-environment)    | Shell, navigateur, base de données, Playwright, astuces de bac à sable |
| [**UX et collaboration**](#ux-collaboration)            | Passation des prompts, commits préparés, agents d’arrière-plan asynchrones |
<!-- AUTO-GENERATED TOC END -->

*Les catégories évoluent : ouvrez une PR si vous trouvez un meilleur découpage !*
Les tableaux ci-dessous sont générés automatiquement à partir du dossier `patterns/`.

---

<!-- …existing content above… -->

<!-- AUTO-GENERATED PATTERNS START -->

### <a name="context-memory"></a>Contexte et mémoire

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

### <a name="feedback-loops"></a>Boucles de rétroaction

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

### <a name="learning-adaptation"></a>Apprentissage et adaptation

- [Agent Reinforcement Fine-Tuning (Agent RFT)](patterns/agent-reinforcement-fine-tuning.md)
- [Commitment Ledger with Reality-Gated Credit](patterns/commitment-ledger-reality-gated-credit.md)
- [Compounding Engineering Pattern](patterns/compounding-engineering-pattern.md)
- [Frontier-Focused Development](patterns/frontier-focused-development.md)
- [Memory Reinforcement Learning (MemRL)](patterns/memory-reinforcement-learning-memrl.md)
- [Persistent Test Memory Feedback Loop](patterns/persistent-test-memory-feedback-loop.md)
- [Shipping as Research](patterns/shipping-as-research.md)
- [Skill Library Evolution](patterns/skill-library-evolution.md)
- [Variance-Based RL Sample Selection](patterns/variance-based-rl-sample-selection.md)

### <a name="orchestration-control"></a>Orchestration et contrôle

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

### <a name="reliability-eval"></a>Fiabilité et évaluation

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

### <a name="security-safety"></a>Sécurité et sûreté

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

### <a name="tool-use-environment"></a>Utilisation des outils et environnement

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

### <a name="ux-collaboration"></a>UX et collaboration

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

## Pour les assistants IA (llms.txt)

Ce projet inclut [`llms.txt`](https://agentic-patterns.com/llms.txt), un fichier de documentation lisible par machine conçu pour aider les assistants IA et les LLM à comprendre et recommander les modèles adaptés.

**Contenu :**
- Catégories de modèles et leurs objectifs
- Modèles clés avec des descriptions concises
- Consignes d’utilisation pour les assistants IA
- Stratégies de sélection des modèles selon les besoins du cas d’usage

**Pour les développeurs qui créent des assistants IA :**
Le fichier `llms.txt` peut être fourni aux LLM comme contexte afin d’améliorer leurs recommandations de modèles. Il est optimisé pour :
- Les systèmes RAG qui indexent ce catalogue
- Les assistants de programmation IA qui suggèrent des modèles
- Les outils basés sur des LLM qui recommandent des modèles agentiques

**Accès :** https://agentic-patterns.com/llms.txt (également disponible dans [`apps/web/public/llms.txt`](./apps/web/public/llms.txt))

---

## Contribuer en 3 étapes

1. **Fork et branche** → `git checkout -b add-my-pattern`
2. **Ajoutez un fichier de modèle** dans `patterns/` en utilisant le modèle ci-dessus.
3. **Exécutez** `bun run build:data` pour actualiser les sections générées du README et les données du site.
4. **Ouvrez une PR** intitulée `Add: my-pattern-name`.
5. Ce dépôt privilégie les modèles : les propositions principalement constituées d’annonces ou de promotions de produits seront rejetées, même si elles sont techniquement valides.

Consultez [`CONTRIBUTING.md`](https://github.com/nibzard/awesome-agentic-patterns/blob/main/CONTRIBUTING.md) pour les détails.

---

## Inspirations

Ce projet a débuté après l’article [**« Ce que Sourcegraph a appris en créant des agents de programmation IA »**](https://www.nibzard.com/ampcode) (28 mai 2025) et le journal vidéo continu *Raising an Agent*. De nombreux premiers modèles proviennent directement de ces enseignements — merci à toutes les personnes qui partagent ouvertement leur parcours !

---

## Licence

Apache‑2.0. Consultez [`LICENSE`](https://github.com/nibzard/awesome-agentic-patterns/blob/main/LICENSE).

---

## Historique des étoiles

[![Star History Chart](https://star-history.dera.page/svg?repos=nibzard/awesome-agentic-patterns&type=date&legend=top-left)](https://star-history.dera.page/#nibzard/awesome-agentic-patterns&type=date&legend=top-left)
