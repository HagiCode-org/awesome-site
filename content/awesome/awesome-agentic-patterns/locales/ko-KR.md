# Awesome Agentic Patterns

![Awesome Agentic Patterns](/agentic-patterns.jpeg)

자율 또는 반자율 AI 에이전트가 프로덕션에서 유용한 작업을 수행하도록 돕는 실전 기법, 워크플로, 소규모 아키텍처인 **에이전틱 AI 패턴**을 엄선한 카탈로그입니다.

 > **왜 필요한가요?**
> 튜토리얼은 단순한 데모를 보여 주지만 실제 제품에는 복잡한 부분이 숨어 있습니다. 이 목록은 그 간극을 메우는 재사용 가능한 패턴을 소개해 더 똑똑하고 빠른 에이전트를 출시하도록 돕습니다.

---

## 패턴의 기준

* **반복 가능** – 둘 이상의 팀이 사용하고 있습니다.
* **에이전트 중심** – AI 에이전트의 인식, 추론 또는 행동 방식을 개선합니다.
* **추적 가능** – 블로그 글, 발표, 저장소 또는 논문 등 공개 자료로 뒷받침됩니다.

이 기준에 맞는 링크라면 여기에 추가할 수 있습니다.

---

## 🌐 웹사이트 둘러보기

**방문:** [https://agentic-patterns.com](https://agentic-patterns.com)

웹사이트는 이 README 외에도 강력한 탐색 도구를 제공합니다.

- **Pattern Explorer**: 범주, 상태, 복잡도 등으로 모든 패턴을 탐색하고 필터링 및 검색합니다
- **Compare Tool**: 여러 패턴의 공통 속성을 나란히 비교합니다
- **Decision Explorer**: 사용 사례에 적합한 패턴을 찾는 대화형 가이드입니다
- **Graph Visualization**: 패턴 간 관계와 연결을 시각적으로 보여 줍니다
- **Pattern Packs**: 일반적인 에이전트 아키텍처를 위한 엄선된 패턴 모음입니다
- **Developer Guides**: 패턴 선택과 사용에 관한 심층 문서입니다
- **Dark Mode**: 어떤 환경에서도 편안하게 읽을 수 있도록 전체 테마를 지원합니다

[Astro](https://astro.build)로 제작하고 [Vercel](https://vercel.com)에 배포했으며, 소스 코드는 [`apps/web/`](./apps/web/)에 있습니다.

---

## 범주 빠르게 보기

<!-- AUTO-GENERATED TOC START -->
|  범주                                                  |  포함 내용                                               |
| ------------------------------------------------------ | --------------------------------------------------------- |
| [**컨텍스트 및 메모리**](#context-memory)              | 슬라이딩 윈도 큐레이션, 벡터 캐시, 에피소드 메모리          |
| [**피드백 루프**](#feedback-loops)                      | 컴파일러, CI, 사람의 검토, 자동 복구 재시도                |
| [**학습 및 적응**](#learning-adaptation)                | Agent RFT, 스킬 라이브러리, 분산 기반 RL                    |
| [**오케스트레이션 및 제어**](#orchestration-control)    | 작업 분해, 하위 에이전트 생성, 도구 라우팅                  |
| [**신뢰성 및 평가**](#reliability-eval)                  | 가드레일, 평가 도구, 로깅, 재현성                            |
| [**보안 및 안전**](#security-safety)                     | 격리 VM, 개인 정보 토큰화, 보안 검사                         |
| [**도구 사용 및 환경**](#tool-use-environment)           | 셸, 브라우저, DB, Playwright, 샌드박스 기법                 |
| [**UX 및 협업**](#ux-collaboration)                      | 프롬프트 전달, 스테이징된 커밋, 비동기 백그라운드 에이전트    |
<!-- AUTO-GENERATED TOC END -->

*범주는 유동적입니다. 더 나은 분류가 있다면 PR을 열어 주세요!*
아래 표는 `patterns/` 폴더에서 자동 생성됩니다.

---

<!-- …existing content above… -->

<!-- AUTO-GENERATED PATTERNS START -->

### <a name="context-memory"></a>컨텍스트 및 메모리

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

### <a name="feedback-loops"></a>피드백 루프

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

### <a name="learning-adaptation"></a>학습 및 적응

- [Agent Reinforcement Fine-Tuning (Agent RFT)](patterns/agent-reinforcement-fine-tuning.md)
- [Commitment Ledger with Reality-Gated Credit](patterns/commitment-ledger-reality-gated-credit.md)
- [Compounding Engineering Pattern](patterns/compounding-engineering-pattern.md)
- [Frontier-Focused Development](patterns/frontier-focused-development.md)
- [Memory Reinforcement Learning (MemRL)](patterns/memory-reinforcement-learning-memrl.md)
- [Persistent Test Memory Feedback Loop](patterns/persistent-test-memory-feedback-loop.md)
- [Shipping as Research](patterns/shipping-as-research.md)
- [Skill Library Evolution](patterns/skill-library-evolution.md)
- [Variance-Based RL Sample Selection](patterns/variance-based-rl-sample-selection.md)

### <a name="orchestration-control"></a>오케스트레이션 및 제어

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

### <a name="reliability-eval"></a>신뢰성 및 평가

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

### <a name="security-safety"></a>보안 및 안전

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

### <a name="tool-use-environment"></a>도구 사용 및 환경

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

### <a name="ux-collaboration"></a>UX 및 협업

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

## AI 어시스턴트용 (llms.txt)

이 프로젝트에는 AI 어시스턴트와 LLM이 적절한 패턴을 이해하고 추천하도록 돕는 기계 판독형 문서인 [`llms.txt`](https://agentic-patterns.com/llms.txt)가 포함되어 있습니다.

**포함 항목:**
- 패턴 범주와 목적
- 간결한 설명이 포함된 주요 패턴
- AI 어시스턴트 사용 지침
- 사용 사례 요구 사항에 따른 패턴 선택 전략

**AI 어시스턴트를 만드는 개발자용:**
패턴 추천을 개선하기 위해 `llms.txt` 파일을 LLM에 컨텍스트로 제공할 수 있습니다. 다음에 최적화되어 있습니다.
- 이 카탈로그를 인덱싱하는 RAG 시스템
- 패턴을 제안하는 AI 코딩 어시스턴트
- 에이전틱 패턴을 추천하는 LLM 기반 도구

**접근:** https://agentic-patterns.com/llms.txt ([`apps/web/public/llms.txt`](./apps/web/public/llms.txt)에서도 이용할 수 있습니다)

---

## 3단계로 기여하기

1. **포크하고 브랜치 만들기** → `git checkout -b add-my-pattern`
2. 위 템플릿을 사용해 `patterns/` 아래에 패턴 파일을 추가합니다.
3. **`bun run build:data`를 실행**해 자동 생성된 README 섹션과 사이트 데이터를 갱신합니다.
4. `Add: my-pattern-name`이라는 제목으로 PR을 엽니다.
5. 이 저장소는 패턴을 우선합니다. 제품 공지나 홍보가 주된 제안은 기술적으로 유효하더라도 거절됩니다.

자세한 내용은 [`CONTRIBUTING.md`](https://github.com/nibzard/awesome-agentic-patterns/blob/main/CONTRIBUTING.md)를 참조하세요.

---

## 영감

이 프로젝트는 글 [**「AI 코딩 에이전트를 만들며 Sourcegraph가 배운 점」**](https://www.nibzard.com/ampcode)(2025년 5월 28일)과 연재 중인 *Raising an Agent* 영상 일기를 계기로 시작되었습니다. 초기 패턴 대부분은 그 교훈에서 비롯되었습니다. 여정을 공개적으로 공유해 주신 모든 분께 감사드립니다!

---

## 라이선스

Apache‑2.0. [`LICENSE`](https://github.com/nibzard/awesome-agentic-patterns/blob/main/LICENSE)를 참조하세요.

---

## Star 기록

[![Star History Chart](https://star-history.dera.page/svg?repos=nibzard/awesome-agentic-patterns&type=date&legend=top-left)](https://star-history.dera.page/#nibzard/awesome-agentic-patterns&type=date&legend=top-left)
