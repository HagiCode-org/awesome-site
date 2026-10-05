<h2 align="center">Awesome  Awesome️</h2>

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/main/_source/prompt.png">
</p>

<p align="center">
  Prompt Engineering and Context Engineering에 대한 자원의 손으로 수집 - 종이, 도구, 모델, APIs, 벤치 마크, 코스 및 큰 언어 모델과 작업을위한 지역 사회.
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

## ∂ 시작

신속한 엔지니어링 이 길을 따라:

<p align="center">
  <img width="1000" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/refs/heads/main/_source/main.jpg">
</p>

1. **기본 학습** → [ChatGPT Prompt 엔지니어링](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) (무료, ~90분)
2. **자주 묻는 질문** → [DAIR의 신속한 엔지니어링 가이드. 사이트맵](https://www.promptingguide.ai/) (오픈소스, 종합)
3. **연구 공급자 docs** → [OpenAI Prompt 엔지니어링 가이드](https://platform.openai.com/docs/guides/prompt-engineering) · [Anthropic Prompt 엔지니어링 가이드](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
4. **필드가 헤드링되는 곳** → [Anthropic: AI Agents를 위한 효과적인 Context 기술설계](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
5. **연구 읽기** → [Prompt 보고서](https://arxiv.org/abs/2406.06608) - 1,500개 이상의 종이에서 58개 이상의 신속한 기술

---

## 본문 바로가기

- [회사 소개](#papers)
  - [주요 설문 조사](#major-surveys)
  - [Prompt 최적화 및 자동적인 Prompting](#prompt-optimization-and-automatic-prompting)
  - [신속한 압축](#prompt-compression)
  - [Reasoning 전진](#reasoning-advances)
  - [In-Context 학습](#in-context-learning)
  - [Agentic Prompting 및 다중 상태 시스템](#agentic-prompting-and-multi-agent-systems)
  - [Multimodal 확증](#multimodal-prompting)
  - [Structured 산출과 체재 통제](#structured-output-and-format-control)
  - [Prompt 주입과 안전](#prompt-injection-and-security)
  - [Prompt Engineering의 응용](#applications-of-prompt-engineering)
  - [텍스트로 이미지 생성](#text-to-image-generation)
  - [Text-to-Music/오디오 세대](#text-to-musicaudio-generation)
  - [기초지 (Pre-2024)](#foundational-papers-pre-2024)
- [도구 및 코드](#tools-and-code)
  - [Prompt 관리 및 테스트](#prompt-management-and-testing)
  - [LLM 평가 도구](#llm-evaluation-tools)
  - [에이전트 Frameworks](#agent-frameworks)
  - [Prompt 최적화 도구](#prompt-optimization-tools)
  - [Red Teaming 및 Prompt 보안](#red-teaming-and-prompt-security)
  - [MCP (모델 컨텍스트 프로토콜)](#mcp-model-context-protocol)
  - [Vibe 코딩 및 AI 코딩 보조](#vibe-coding-and-ai-coding-assistants)
    - [CLI 기반 코딩 에이전트](#cli-based-coding-agents)
    - [AI 코드 편집기 / IDE](#ai-code-editors--ides)
    - [IDE 확장 / 플러그인](#ide-extensions--plugins)
    - [AI 코딩 플랫폼 / 클라우드 에이전트](#ai-coding-platforms--cloud-agents)
    - [오픈 소스 코딩 에이전트 Frameworks](#open-source-coding-agent-frameworks)
  - [다른 주목할만한 저장소](#other-notable-repositories)
- [API 지원](#apis)
- [데이터 세트 및 벤치 마크](#datasets-and-benchmarks)
- [모델 번호:](#models)
- [AI 콘텐츠 감지기](#ai-content-detectors)
- [한국어](#books)
- [한국어](#courses)
- [자습서 및 가이드](#tutorials-and-guides)
- [이름 *](#videos)
- [한국어](#communities)
- [자율 연구 및 자기 개선 에이전트](#autonomous-research--self-improving-agents)
- [기여하는 방법](#how-to-contribute)

---

## 회사 소개
📄

### 주요 설문 조사

- [Prompt 보고서 : Prompting 기술의 체계적인 조사](https://arxiv.org/abs/2406.06608) [2024] — 가장 종합적인 설문 조사: 58개의 텍스트와 40개의 멀티모드 프린트 기술을 1,500개 이상의 논문으로 표현합니다. OpenAI, Microsoft, Google, 스탠포드와 공동 승인.
- [큰 언어 모델에 있는 Prompt 기술설계의 체계적인 조사: 기술 및 신청](https://arxiv.org/abs/2402.07927) [2024] - 각 작업 성능 요약과 응용 분야의 44 기술.
- [다른 NLP 작업에 대한 LLMs의 신속한 엔지니어링 방법의 조사](https://arxiv.org/abs/2407.12994) [2024] - 29 NLP 작업에 걸쳐 39의 신속한 방법.
- [Auto Prompt Engineering의 조사: 최적화 관점](https://arxiv.org/abs/2502.11560) [2025] — discrete/continuous/hybrid 최적화 문제로 자동 PE 방법을 형성합니다.
- [큰 언어 모델에 대한 효율적인 Prompting 방법 : 설문 조사](https://arxiv.org/abs/2404.01077) [2024] — 효율성 중심의 신속한 조사 (압축, 최적화, APE) 계산 및 대기 시간 감소.
- [Enigmatic Labyrinth를 통해 Navigate : 생각의 체인 조사](https://arxiv.org/abs/2309.15402) [2023, ACL 2024] - 체계적인 CoT 조사.
- [Demystifying Chains, 나무, 그리고 생각의 그래프](https://arxiv.org/abs/2401.14295) [2024] — 멀티 프롬프트 소문을 위한 통합 프레임 워크.
- [큰 언어 모델에 대한 Goal-centric Prompt 엔지니어링 : 설문 조사](https://arxiv.org/abs/2401.14043) [2024] - 명시된 작업 목표의 주위에 설계된 신속한 초점.
- [상승 Era: LLMs를 위한 긴 사슬의 조사](https://arxiv.org/abs/2503.09567) [2025] - O1/R1-era 모델의 짧은 CoT에서 Distinguishes Long CoT.

### Prompt 최적화 및 자동적인 Prompting

- [OPRO: Optimizers로 큰 언어 모델](https://arxiv.org/abs/2309.03409) [2023, NeurIPS 2024] - 메타 프롬츠를 통해 최적화자로 LLM을 사용합니다. 최적화 된 프롬프트는 BBH에서 최대 50 %까지 인간의 디자인 된 것을 제공합니다.
- [DSPy: Compiling Declarative 언어 모형은 각자 개량 관으로 통화합니다](https://arxiv.org/abs/2310.03714) [2023, ICLR 2024] - 자동 신속한 최적화와 프로그래밍을위한 프레임 워크.
- [MIPRO: Multi-Stage Language Model Program을 위한 최적화 지침 및 데모](https://arxiv.org/abs/2406.11695) [2024, EMNLP 2024] - 멀티 스테이지 LM 프로그램에 대한 Bayesian 최적화; 최대 13% 정확도 이득.
- [TextGrad: 텍스트를 통해 자동 "Differentiation"](https://arxiv.org/abs/2406.07496) [2024] - gradients로 textual Feedback을 가진 computation 도표로 화합물 AI 체계를 대우하십시오. 자연에 게시.
- [계정 관리](https://arxiv.org/abs/2309.08532) [2023, ACL 2024] - 분산 된 프롬프트를 자동으로 선택하기위한 진화 알고리즘 접근.
- [AI 시스템의 Meta Prompting](https://arxiv.org/abs/2311.11482) [2023, ICLR 2024 워크샵] - 범주 이론을 사용하여 공식화 된 사례 분석 구조 템플릿.
- [Prompt 엔지니어 (PE2)](https://arxiv.org/abs/2311.05661) [2024, ACL Findings] — LLM을 meta-prompt로 사용하여 단계별 템플릿을 사용하여 신속한 결과를 크게 개선합니다.
- [큰 언어 모형은 인간 수준 Prompt 엔지니어입니다](https://arxiv.org/abs/2211.01910) [2022] - APE를 통해 자동 프롬프트 생성.
- [Hard Prompts Made Easy : Prompt Tuning을위한 Gradient 기반 분리 최적화](https://arxiv.org/abs/2302.03668) [2023]
- [SPO: 자기 감독된 Prompt 최적화](https://arxiv.org/abs/2502.06855) [2025] - 사전 방법의 비용의 1-6 %의 경쟁 성능.

### 신속한 압축

- [LLMLingua-2: 능률적인 믿을 수 있는 작업 Agnostic Prompt 압축을 위한 자료 증류](https://arxiv.org/abs/2403.12968) [2024, ACL 2024] - GPT-4 데이터 증류와 LLMLingua보다 3x-6x 빠릅니다.
- [채용 정보](https://arxiv.org/abs/2310.06839) [2023, ACL 2024] - 긴 컨텍스트에 대한 문제 인식 압축; 4x의 적은 토큰과 21.4% 성능 향상.
- [큰 언어 모델에 대한 신속한 압축 : 설문 조사](https://arxiv.org/abs/2410.12388) [2024] - 하드 및 소프트 프롬프트 압축 방법의 종합 조사.

### Reasoning 전진

- [LLM 시험 시간 계산 최적화](https://arxiv.org/abs/2408.03314) [2024] - 최적의 테스트 시간 계산 할당을 표시합니다 14x 큰 모델.
- [DeepSeek-R1: Reinforcement Learning을 통해 LLMs의 Reasoning Capability 집중](https://arxiv.org/abs/2501.12948) [2025] - 순수한 RL-trained reasoning 모델 매칭 o1; 증류 변형이있는 오픈 소스.
- [s1: 간단한 시험 시간 확장](https://arxiv.org/abs/2501.19393) [2025] — 1,000개의 예에서 SFT는 "budget forcing"을 통해 경쟁적인 납세 모델을 만듭니다.
- [언어 모델: Blueprint](https://arxiv.org/abs/2501.11223) [2025] — 체계적인 프레임 워크는 LM 접근법의 이유를 정리합니다.
- [LLMs에서 Demystifying 긴 사슬의 거친 Reasoning](https://arxiv.org/abs/2502.03373) [2025] - 현대 소싱 모델의 긴 CoT 행동 분석.
- [Graph of Thoughts: LLM과 함께 Elaborate 문제 해결](https://arxiv.org/abs/2308.09687) [2023, AAAI 2024] - 모델은 임의 그래프로 생각; 분류에 ToT에 대한 62% 품질 개선.
- [생각의 나무 : LLM과 해결 문제 해결](https://arxiv.org/abs/2305.10601) [2023, NeurIPS 2023] - 소원 경로에 대한 트리 검색.
- [모든 것의 Thoughts](https://arxiv.org/abs/2311.04254) [2023] - MCTS를 통해 CoT, ToT 및 외부 해결자를 통합합니다.
- [Skeleton-of-Thought의](https://arxiv.org/abs/2307.15337) [2023] - 최대 2.69x speedup에 대한 응답 골격 세대를 통해 병렬 디코딩.
- [큰 언어 모델에서 Elicits Reasoning을 극복하는 생각의 사슬](https://arxiv.org/abs/2201.11903) [2022] - 기초 CoT 종이.
- [Self-Consistency는 Thought Reasoning의 사슬을 개량합니다](https://arxiv.org/abs/2203.11171) [2022] — 신뢰성을 위한 다수 CoT 산출을 모으기.
- [대용량 모델은 Zero-Shot Reasoners입니다.](https://arxiv.org/abs/2205.11916) [2022] - "Let's think step by step" 0-shot reasoning 방아쇠.
- [ReAct : 언어 모델의 Reasoning 및 Acting](https://arxiv.org/abs/2210.03629) [2022] - 이유 및 도구 사용.

### In-Context 학습

- [많은 Shot In-Context 학습](https://arxiv.org/abs/2404.11018) [2024, NeurIPS 2024 스포트라이트] - ICL을 수백/thousands로 흩어지게 합니다. Reinforced 및 Unsupervised ICL을 소개합니다.
- [Multimodal Foundation 모델의 많은 Shot In-Context 학습](https://arxiv.org/abs/2405.09798) [2024] — 14개의 데이터셋에 걸쳐 ~2,000개의 예제로 다모탈 ICL을 스케일링합니다.
- [Demonstrations의 역할 재생 : In-Context Learning Work는 무엇입니까?](https://arxiv.org/abs/2202.12837) [2022]
- [환상적인 주문 프롬프트 및 Them 찾기](https://arxiv.org/abs/2104.08786) [2021] - 몇 샷 신속한 주문 감도를 극복합니다.
- [사용 전에 Calibrate : 언어 모델의 Few-Shot 성능 향상](https://arxiv.org/abs/2102.09690) [2021]

### Agentic Prompting 및 다중 상태 시스템

- [Agentic 대형 언어 모델: 설문 조사](https://arxiv.org/abs/2503.23037) [2025] — 포괄적인 설문 조사는 소싱, 행동 및 상호 작용 기능을 통해 에이전트 LLM을 구성합니다.
- [대용량 모델 기반 멀티-Agents: 진행 및 도전의 조사](https://arxiv.org/abs/2402.01680) [2024] - 덮음, 통신 및 성장 메커니즘.
- [다기능 협업 메커니즘: LLM의 조사](https://arxiv.org/abs/2501.06322) [2025] - LLM 기반 멀티 시약 시스템의 리뷰 및 협력 전략.
- [AutoGen: 차세대 LLM 애플리케이션을 Multi-Agent Conversation 통해 구현](https://arxiv.org/abs/2308.08155) [2023] - Microsoft의 기초 다중 시약 프레임 워크 용지.
- [ToolLLM: 마스터 16000+ Real-World APIs에 큰 언어 모델을 촉진](https://arxiv.org/abs/2307.16789) [2023, ICLR 2024] — LLMs는 대규모 실제 API 컬렉션을 사용합니다.
- [SWE-bench: 언어 모델은 Real-World GitHub 이슈를 해결할 수 있습니까?](https://arxiv.org/abs/2310.06770) [2023, ICLR 2024] - 벤치 마크 구동 에이전트 코딩 진행.
- [AgentBench : 에이전트로 LLM을 증발](https://arxiv.org/abs/2308.03688) [2023, ICLR 2024] - 8 환경의 벤치 마크.
- [PAL : 프로그램 지원 언어 모델](https://arxiv.org/abs/2211.10435) [2023] - 코드 해석에 대한 통합.

### Multimodal 확증

- [Multimodal 대형 언어 모델의 비주얼 Prompting: 설문 조사](https://arxiv.org/abs/2409.15310) [2024] — MLLMs의 시각 프롬프트 방법에 대한 첫 번째 종합 조사.
- [GPT-4V의 Set-of-Mark Prompting Unleashes Extraordinary Visual 접지](https://arxiv.org/abs/2310.11441) [2023] - 시각적 마커는 극적으로 시각적 배경을 향상시킵니다.
- [Vision-Language Task의 Multimodal 대형 언어 모델에 대한 종합적인 조사 및 가이드](https://arxiv.org/abs/2411.06284) [2024] - 커버 텍스트, 이미지, 비디오, 오디오 MLLMs.
- [다국어 모델에서 Multimodal Chain-of-Thought Reasoning](https://arxiv.org/abs/2302.00923) [2023]
- [Prompt Engineering에서 Prompt Craft에 이르기까지](https://arxiv.org/abs/2411.13422) [2024] - 확산 모델에 대한 신속한 "공예"의 설계 연구보기.

### Structured 산출과 체재 통제

- [자유롭게 말하자? LLM의 성능에 대한 형식 제한의 영향에 대한 연구](https://arxiv.org/abs/2408.02442) [2024] - 구조화 된 형식의 출력이 성능에 미치는 영향을 분석합니다.
- [배치 Prompting: LLM APIs를 가진 능률적인 Inference](https://arxiv.org/abs/2301.08721) [2023]
- [Structured Prompting: 1,000개의 예제로 In-Context Learning 확장](https://arxiv.org/abs/2212.06713) [2022]

### Prompt 주입과 안전

- [Prompt Injection Attacks 및 Defenses 구성 및 벤치마킹](https://arxiv.org/abs/2310.12815) [2023, USENIX Security 2024] - 5 공격의 체계적인 평가와 10 LLMs의 방어적인 프레임 워크.
- [지침 Hierarchy : Privileged 지침을 우선 순위로 훈련 LLMs](https://arxiv.org/abs/2404.13208) [2024] - 주입 방어를위한 OpenAI의 우선 순위 훈련.
- [AgentDojo : Prompt Injection Attacks 및 Defense에 대한 동적 환경](https://arxiv.org/abs/2406.13352) [2024] - 현실적인 에이전트 시나리오 벤치 마크.
- [InjecAgent: Tool-Integrated LLM Agents의 Indirect Prompt 주입](https://arxiv.org/abs/2403.02691) [2024]
- [SecAlign: Preference Optimization을 가진 Prompt 주입에 대하여 방어](https://arxiv.org/abs/2410.05451) [2024] - DPO 기반 방어.
- [WASP : Prompt Injection에 대한 웹 에이전트 보안 벤치 마크](https://arxiv.org/abs/2504.18575) [2025] - 웹 / 컴퓨터 사용 에이전트에 대한 보안 벤치 마크.
- [많은 핫 감옥](https://www.anthropic.com/research/many-shot-jailbreaking) [2024] - 긴 콘텍스트 창의 유해한 예를 확장하여 탈옥 (Anthropic Technical Report)를 가능하게 합니다.
- [헌법 AI : AI 피드백에서 Harmlessness](https://arxiv.org/abs/2212.08073) [2022]
- [Ignore Previous Prompt : 언어 모델에 대한 공격 기술](https://arxiv.org/abs/2211.09527) [2022]
- [인공 지능 및 사이버 보안 : 2024-2025의 위험, 기업 난간 및 이머징 위협](https://www.ijfmr.com/research-paper.php?id=62200) [2025] — 실제 거버넌스 프롬프트 패턴과 실제 프롬프트 인젝션 사건의 조사.

### Prompt Engineering의 응용

- [Rephrase 및 응답 : 큰 언어 모델은 Themselves에 대한 더 나은 질문을하자](https://arxiv.org/abs/2311.04205) [2023]
- [Multilingual Legal Judgement Prediction을 위한 법적인 신속한 설계](https://arxiv.org/abs/2212.02199) [2023]
- [Copilot과 대화 : CS1 문제 해결을위한 신속한 엔지니어링](https://arxiv.org/abs/2210.15157) [2022]
- [Controllable Empathetic Dialogue 발생을 위한 Commonsense-Aware Prompting](https://arxiv.org/abs/2302.01441) [2023]
- [PLACES : 사회 대화 증후군을위한 언어 모델](https://arxiv.org/abs/2302.03269) [2023]
- [변압기 인코더 및 Prompt 기반 학습을 사용하여 의료 이미지 세그먼트 : 체계적인 검토](https://ieeexplore.ieee.org/document/11313186/) [2025]
- [TableRAG: Heterogeneous Document Reasoning을 위한 Retrieval 증강 발생 기구](https://arxiv.org/abs/2506.10380) [2025] - 멀티 홉 쿼리에 대한 SQL 기반 인터페이스 보존 탭 구조.

### 텍스트로 이미지 생성

- [Text-To-Image Generation에 대한 Prompt Modifiers의 세금](https://arxiv.org/abs/2204.13988) [2022]
- [Prompt Engineering Text-to-Image Generative Models 설계 가이드라인](https://arxiv.org/abs/2109.06977) [2021]
- [늦은 확산 모델과 고해상도 이미지 합성](https://arxiv.org/abs/2112.10752) [2021]
- [DALL·E: 텍스트에서 이미지 만들기](https://arxiv.org/abs/2102.12092) [2021]
- [Diffusion Models에 대한 조사](https://arxiv.org/abs/2211.15462) [2022]

### Text-to-Music/오디오 세대

- [MusicLM: 텍스트에서 음악 생성](https://arxiv.org/abs/2301.11325) [2023]
- [ERNIE-Music: Diffusion Models를 가진 Text-to-Waveform 음악 발생](https://arxiv.org/pdf/2302.04456) [2023]
- [AudioLM: 오디오 생성에 대한 언어 모델링 접근](https://arxiv.org/pdf/2209.03143) [2023]
- [Make-An-Audio : Prompt-Enhanced Diffusion 모델과 텍스트 - 투 - 오디오 세대](https://arxiv.org/pdf/2301.12661.pdf) [2023]

### 기초지 (Pre-2024)

이 종이는 현대 신속한 기술설계가 위에 건설하는 핵심 개념을 설치했습니다:

- [언어 모델은 Few-Shot Learners (GPT-3)](https://arxiv.org/abs/2005.14165) [2020] — 규모에서 몇 샷 프린트를 시연.
- [Prefix-Tuning: 생성을 위한 지속적인 Prompts 최적화](https://arxiv.org/abs/2101.00190) [2021]
- [Parameter-Efficient Prompt Tuning를 위한 가늠자의 힘](https://arxiv.org/abs/2104.08691) [2021]
- [큰 언어 모델에 대한 신속한 프로그래밍 : Few-Shot Paradigm을 넘어](https://arxiv.org/abs/2102.07350) [2021]
- [작업 표시: 언어 모델과 중간 컴퓨팅을위한 스크래치 패드](https://arxiv.org/abs/2112.00114) [2021]
- [Commonsense Reasoning에 대한 지식 평가](https://arxiv.org/abs/2110.08387) [2021]
- [사전 훈련 된 언어 모델 더 나은 Few-shot Learners](https://aclanthology.org/2021.acl-long.295) [2021]
- [AutoPrompt : 자동 생성 된 Prompts와 언어 모델의 Eliciting 지식](https://arxiv.org/abs/2010.15980) [2020]
- [어떤 언어 모델을 알 수 있습니까?](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00324/96460/) [2020]
- [Prompt 패턴 카탈로그는 ChatGPT와 Prompt Engineering을 강화](https://arxiv.org/abs/2302.11382) [2023]
- [합성 Prompting: LLMs를 위한 Chain-of-Thought Demonstrations 생성](https://arxiv.org/abs/2302.00618) [2023]
- [Progressive Prompts: 언어 모델에 대한 지속적인 학습](https://arxiv.org/abs/2301.12314) [2023]
- [복잡한 문제 해결](https://arxiv.org/abs/2212.04092) [2022]
- [Decomposed Prompting: 복잡한 작업을 해결하기위한 모듈 식 접근](https://arxiv.org/abs/2210.02406) [2022]
- [PromptChainer : Visual Programming을 통해 큰 언어 모델 Prompts Chaining](https://arxiv.org/abs/2203.06566) [2022]
- [저에게 물어보세요: 언어 모델에 대한 간단한 전략](https://paperswithcode.com/paper/ask-me-anything-a-simple-strategy-for) [2022]
- [믿을 수 있는 GPT-3를 극복하기](https://arxiv.org/abs/2210.09150) [2022]
- [두 번째 생각에서 단계로 생각하지 마십시오! Zero-Shot Reasoning의 편견과 독성](https://arxiv.org/abs/2212.08061) [2022]

---

## 도구 및 코드
🔧

### Prompt 관리 및 테스트

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **Promptfoo** | 테스트, 평가 및 Red-teaming LLM 프롬프트를 위한 오픈 소스 CLI. YAML 구성, CI/CD 통합, adversarial 테스트. ~9K+ ⭐ | [GitHub](https://github.com/promptfoo/promptfoo) |
| **Promptify** | 해결 NLP LLM의 문제 & 쉽게 GPT, PaLM 및 Promptify와 같은 인기있는 유전 모델에 대한 다른 NLP 작업 프롬프트를 생성 | [[Github]](https://github.com/promptslab/Promptify) |
| **Agenta** | Open-source LLM Developer platform for 신속한 관리, 평가, 인간 피드백 및 배포. | [GitHub](https://github.com/Agenta-AI/agenta) |
| **PromptLayer** | 버전, 테스트 및 모니터링 모든 신속한 및 강력한 evals, 추적 및 회귀 세트와 에이전트. | [Website](https://promptlayer.com/) |
| **Helicone** | 생산 신속한 모니터링 및 최적화 플랫폼. | [Website](https://helicone.ai/) |
| **LangGPT** | Structured 및 meta-prompt 디자인을 위한 기구. 10K+ ⭐· | [GitHub](https://github.com/langgpt/LangGPT) |
| **ChainForge** | 코드없이 LLM 신속한 응답을 구축, 테스트 및 비교하기위한 비주얼 도구 키트. | [GitHub](https://github.com/ianarawjo/ChainForge) |
| **LMQL** | LLMs에 대한 쿼리 언어 복잡한 신속한 논리 프로그래밍 가능. | [GitHub](https://github.com/eth-sri/lmql) |
| **Promptotype** | LLM 프롬프트 개발, 테스트 및 관리를위한 플랫폼. | [Website](https://www.promptotype.io) |
| **PromptPanda** | 신속한 작업 흐름을 간소화하기위한 AI-powered 신속한 관리 시스템. | [Website](https://promptpanda.io) |
| **Promptimize AI** | 브라우저 확장은 모든 AI 모델에 대한 사용자 프롬프트를 자동으로 개선합니다. | [Website](https://promptimize.ai) |
| **PROMPTMETHEUS** | Web-based "Prompt Engineering IDE"는 이차적으로 생성하고 실행된 프롬프트입니다. | [Website](https://promptmetheus.com) |
| **Better Prompt** | 생산에 밀어 전에 LLM 프롬프트에 대한 테스트 스위트. | [GitHub](https://github.com/krrishdholakia/betterprompt) |
| **OpenPrompt** | 신속한 연구를위한 오픈 소스 프레임 워크. | [GitHub](https://github.com/thunlp/OpenPrompt) |
| **Prompt Source** | Toolkit for create, sharing, and using natural language prompts. | [GitHub](https://github.com/bigscience-workshop/promptsource) |
| **Prompt Engine** | LLMs (Microsoft)에 대한 프롬프트 생성 및 유지를위한 NPM 유틸리티 라이브러리. | [GitHub](https://github.com/microsoft/prompt-engine) |
| **PromptInject** | Adversarial 신속한 공격에 LLM 견고성의 양적 분석을위한 프레임 워크. | [GitHub](https://github.com/agencyenterprise/PromptInject) |
| **LynxPrompt** | AI IDE config 파일을 관리하기위한 자체 호스팅 플랫폼 (.cursorrules, CLAUDE.md, copilot-instructions.md). 웹 UI, REST API, CLI 및 30 + AI 코딩 조수를위한 청사진 시장. | [GitHub](https://github.com/GeiserX/LynxPrompt) |
| **flompt** | Visual AI prompt Builder는 12개의 semantic 블록(role, context, constraints, examples, etc.)로 프린트하고 최적화된 XML로 컴파일합니다. ChatGPT/Claude/Gemini 및 Claude Code Agent를 위한 MCP 서버의 브라우저 확장. 무료, 오픈 소스. | [Website](https://flompt.dev) |

### LLM 평가 도구

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **DeepEval** | RAG, 에이전트 및 CI/CD 통합과 대화를 다루는 오픈 소스 평가 프레임워크. ~7K+ ⭐ | [GitHub](https://github.com/confident-ai/deepeval) |
| **Ragas** | 지식 기반 테스트 세트 및 30 + 미터와 RAG 평가. ~8K + ⭐ | [GitHub](https://github.com/explodinggradients/ragas) |
| **LangSmith** | LLM 응용 프로그램을 디버깅, 테스트, 평가 및 모니터링을위한 LangChain의 플랫폼. | [Website](https://smith.langchain.com/) |
| **Langfuse** | 트래킹, 프롬프트 관리 및 인문학을 통한 오픈소스 LLM 관측성. ~7K+ ⭐ | [GitHub](https://github.com/langfuse/langfuse) |
| **Braintrust** | AI 평가 플랫폼 종료, SOC2 Type II 인증. | [Website](https://www.braintrust.dev/) |
| **Arize AI / Phoenix** | 실시간 LLM 모니터링 및 추적. | [GitHub](https://github.com/Arize-ai/phoenix) |
| **TruLens** | LLM 앱을 평가하고 설명합니다. Hallucinations, relevance, 접지를 추적합니다. | [GitHub](https://github.com/truera/trulens) |
| **InspectAI** | 벤치 마크 (UK AISI)에 대한 증발 에이전트에 대한 목적 내장. | [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |
| **Opik** | Evaluate, 테스트 및 선박 LLM 응용 프로그램 dev 및 생산 수명주기. | [GitHub](https://github.com/comet-ml/opik) |
| **EvalView** | YAML 시험 케이스, 회귀 탐지 및 생산 모니터링을 가진 다단계 AI 대리인을 시험하는 CLI 공구. |[GitHub](https://github.com/hidai25/eval-view) |

### 에이전트 Frameworks

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **LangChain / LangGraph** | 가장 널리 채택 된 LLM 앱 프레임 워크; LangGraph는 그래프 기반 멀티 스텝 에이전트 워크플로우를 추가합니다. ~100K+ / ~10K+ ⭐ | [GitHub](https://github.com/langchain-ai/langchain) · [LangGraph](https://github.com/langchain-ai/langgraph) |
| **CrewAI** | 700개 이상의 통합을 갖춘 AI 에이전트 오케스트라 조정. ~44K+ ⭐ | [GitHub](https://github.com/crewAIInc/crewAI) |
| **AutoGen (AG2)** | Microsoft의 다중 시약 대화 프레임 워크. ~40K+ ⭐· | [GitHub](https://github.com/microsoft/autogen) |
| **DSPy** | 자동 프롬프트/무게 최적화를 갖춘 LLM 프로그래밍을위한 Stanford의 프레임 워크. ~22K+ ⭐· | [GitHub](https://github.com/stanfordnlp/dspy) |
| **OpenAI Agents SDK** | 기능 호출, 난간 및 손전등이있는 공식 에이전트 프레임 워크. ~10K+ ⭐· | [GitHub](https://github.com/openai/openai-agents-python) |
| **Semantic Kernel** | Microsoft의 AI 프레임 워크는 M365 Copilot을 강화합니다; C#, Python, Java. ~24K+ ⭐ | [GitHub](https://github.com/microsoft/semantic-kernel) |
| **LlamaIndex** | RAG 및 에이전트 기능을 위한 데이터 프레임 워크. ~40K+ ⭐· | [GitHub](https://github.com/run-llama/llama_index) |
| **Haystack** | RAG 및 대리인을 위한 파이프라인 건축술을 가진 Open-source NLP 기구. ~20K+ ⭐· | [GitHub](https://github.com/deepset-ai/haystack) |
| **Agno (formerly Phidata)** | microsecond 순간을 가진 Python 대리인 기구. ~20K+ ⭐· | [GitHub](https://github.com/agno-agi/agno) |
| **Smolagents** | 얼굴의 최소 부호 중심 대리인 기구 (~1000 LOC). ~15K+ ⭐ | [GitHub](https://github.com/huggingface/smolagents) |
| **Pydantic AI** | 구조 검증을 위한 Pydantic를 사용하는 유형 안전한 대리인 기구. ~8K+ ⭐ | [GitHub](https://github.com/pydantic/pydantic-ai) |
| **Mastra** | 조수, RAG 및 관찰성을 가진 TypeScript AI 대리인 기구. ~20K+ ⭐· | [GitHub](https://github.com/mastra-ai/mastra) |
| **Google ADK** | Gemini 및 Google Cloud와 통합 된 Agent Development Kit. | [GitHub](https://github.com/google/adk-python) |
| **Strands Agents (AWS)** | 깊은 AWS 통합을 가진 Model-agnostic 기구. | [GitHub](https://github.com/strands-agents/sdk-python) |
| **Langflow** | 드래그 앤 드롭이있는 노드 기반 시각적 에이전트 빌더. ~ 50K + ⭐ | [GitHub](https://github.com/langflow-ai/langflow) |
| **n8n** | AI 대리인 기능 및 400+ 통합을 가진 Workflow 자동화. ~60K+ ⭐· | [GitHub](https://github.com/n8n-io/n8n) |
| **Dify** | 툴링 에이전트와 RAG를 활용한 에이전트 워크플로우를 위한 올인원 백엔드 | [GitHub](https://github.com/langgenius/dify) |
| **PraisonAI** | 멀티 AI 100+ LLM 지원, MCP 통합 및 내장 메모리를 가진 대리인 기구. | [GitHub](https://github.com/MervinPraison/PraisonAI) |
| **Neurolink** | Multi-provider AI Agent Framework는 워크플로우 오케스트라와 함께 12+ 제공업체를 통합합니다. | [GitHub](https://github.com/juspay/neurolink) |
| **Composio** | 0 설정으로 AI 에이전트에 100 + 도구를 연결합니다. | [GitHub](https://github.com/composiohq/composio) |

### Prompt 최적화 도구

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **DSPy** | 자동 프롬프트 튜닝을 위한 다중 최적화기 (MIPROv2, BoottrapFewShot, COPRO). ~22K+ ⭐ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **TextGrad** | 텍스트 (Stanford)를 통해 자동 차별화. ~2K + ⭐ | [GitHub](https://github.com/zou-group/textgrad) |
| **OPRO** | Google DeepMind의 최적화를 통해 프롬프트합니다. | [GitHub](https://github.com/google-deepmind/opro) |

### Red Teaming 및 Prompt 보안

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **Garak (NVIDIA)** | LLM 취약성 스캐너, 주입 및 탈옥 - "LLMs를위한 Nmap." ~3K + ⭐ | [GitHub](https://github.com/NVIDIA/garak) |
| **PyRIT (Microsoft)** | 자동화된 빨간teaming를 위한 Python 위험 ID 공구. ~3K+ ⭐ | [GitHub](https://github.com/Azure/PyRIT) |
| **DeepTeam** | 40+ 취약점, 10+ 공격 방법, OWASP Top 10 지원. | [GitHub](https://github.com/confident-ai/deepteam) |
| **LLM Guard** | LLM I/O 검증을 위한 보안 툴킷. ~2K+ ⭐ | [GitHub](https://github.com/protectai/llm-guard) |
| **NeMo Guardrails (NVIDIA)** | 대화 시스템을 위한 풀그릴 난간. ~5K+ ⭐ | [GitHub](https://github.com/NVIDIA/NeMo-Guardrails) |
| **Guardrails AI** | 시스템 신뢰성을 보장하기 위해 엄격한 출력 형식 (JSON schemas)를 정의합니다. | [Website](https://www.guardrailsai.com) |
| **Lakera** | 실시간 신속한 주입 탐지를 위한 AI 보안 플랫폼. | [Website](https://lakera.ai/) |
| **Purple Llama (Meta)** | CyberSecEval을 포함한 오픈 소스 LLM 안전 평가 | [GitHub](https://github.com/meta-llama/PurpleLlama) |
| **GPTFuzz** | 자동화된 탈옥 템플렛 생성 달성 >90% 성공률. | [GitHub](https://github.com/sherdencooper/GPTFuzz) |
| **Rebuff** | 신속한 주사의 탐지 및 예방을위한 오픈 소스 도구. | [GitHub](https://github.com/protectai/rebuff) |
| **AgentSeal** | "Open-source Scanner는 신속한 주입 및 추출 취약점을위한 AI 에이전트를 테스트하기 위해 150 공격 프로브를 실행합니다." | [GitHub](https://github.com/agentseal/agentseal) |

### MCP (모델 컨텍스트 프로토콜)

MCP는 Anthropic (Nov 2024, Linux Foundation Dec 2025)에 의해 개발 된 개방형 표준이며 표준 인터페이스를 통해 외부 데이터 소스 및 도구에 AI 보조를 연결하는 데 사용됩니다. 그것은 있다 **97M+ 월간 SDK 다운로드** GitHub, Google 및 대부분의 주요 AI 제공 업체에 의해 채택되었습니다.

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **MCP Specification** | 핵심 의정서 명세와 SDK. ~15K+ ⭐ | [GitHub](https://github.com/modelcontextprotocol/modelcontextprotocol) |
| **MCP Reference Servers** | 공식 구현: fetch, filesystem, GitHub, Slack, Postgres. | [GitHub](https://github.com/modelcontextprotocol/servers) |
| **FastMCP (Python)** | MCP 서버 구축을위한 고급 Pythonic 프레임 워크. ~5K + ⭐ | [GitHub](https://github.com/jlowin/fastmcp) |
| **GitHub MCP Server** | GitHub의 Repo, Issue, PR 및 Actions 상호 작용을 위한 공식 MCP 서버. ~15K+ ⭐· | [GitHub](https://github.com/github/github-mcp-server) |
| **Awesome MCP Servers** | 10,000개 이상의 커뮤니티 MCP 서버 목록 ~30K+ ⭐· | [GitHub](https://github.com/punkpeye/awesome-mcp-servers) |
| **Context7** | MCP 서버는 code hallucination을 줄이기 위해 version-specific 문서를 제공합니다. | [GitHub](https://github.com/upstash/context7) |
| **GitMCP** | 도메인을 변경하여 GitHub 저장소에 원격 MCP 서버를 만듭니다. | [Website](https://gitmcp.io/) |
| **MCP Inspector** | MCP 서버 개발을위한 비주얼 테스트 도구. | [GitHub](https://github.com/modelcontextprotocol/inspector) |

### Vibe 코딩 및 AI 코딩 보조

> 🟢 = 오픈 소스 · 🔵 = 상용 · 🟣 = 오픈 소스 + 상용 (핵심은 오픈, 클라우드/API는 유료)

#### CLI 기반 코딩 에이전트

Codebase를 이해하고 다단계 작업을 수행한 Terminal-native Agentic 도구.

| 이름 * | 이름 * | 제품정보 | 팟캐스트 |
|:-----|:-----------|:----:|:----:|
| **Claude Code** | Anthropic의 에이전트 코딩 CLI; 전체 코덱을 이해하고 자연 언어를 통해 복잡한 다중 단계 작업을 수행합니다. | 🔵 | [Docs](https://docs.anthropic.com/en/docs/claude-code) |
| **OpenAI Codex CLI** | OpenAI의 오픈 소스 터미널 코딩 에이전트; 경량, 현지 최초, 샌드박스 코드 실행. ~68K+ ⭐ | 🟣 | [GitHub](https://github.com/openai/codex) |
| **Gemini CLI** | Google의 오픈 소스 터미널 AI 에이전트 1M-token 컨텍스트 윈도우와 구글 검색 접지. ~96K + ⭐ | 🟣 | [GitHub](https://github.com/google-gemini/gemini-cli) |
| **Qwen Code** | Qwen3-Coder에 최적화 된 오픈 소스 터미널 AI 에이전트; 멀티 프로토콜 지원 (OpenAI / Anthropic / Gemini APIs), 1,000 무료 요청 / 일. ~ 21K + ⭐ | 🟢 | [GitHub](https://github.com/QwenLM/qwen-code) |
| **Aider** | 깊고 Git 통합을 가진 맨끝에 있는 AI 쌍 프로그램; 지도 전체 codebases 및 자동 질량 변화. ~42K+ ⭐ | 🟢 | [GitHub](https://github.com/Aider-AI/aider) |
| **OpenCode** | 강력한 오픈 소스 AI 코딩 에이전트 아름다운 TUI; 거의 모든 AI 모델 제공 업체를 지원합니다. ~120K+ ⭐ | 🟢 | [GitHub](https://github.com/opencode-ai/opencode) |
| **Goose** | Block (Square/Cash App)의 Extensible open-source AI 에이전트; 설치, 실행, 편집 및 LLM 테스트. ~29K + ⭐ | 🟢 | [GitHub](https://github.com/block/goose) |
| **Crush** | 멀티 모델 지원, LSP 통합 및 아름다운 터미널 UI와 함께 Charmbracelet의 매력적인 에이전트 코딩 에이전트. ~9K + ⭐ | 🟢 | [GitHub](https://github.com/charmbracelet/crush) |
| **Amazon Q Developer CLI** | AWS의 터미널에서 에이전트 채팅 경험; Kiro CLI로 전환. | 🟣 | [GitHub](https://github.com/aws/amazon-q-developer-cli) |
| **Amp** | Sourcegraph의 에이전트 코딩 도구 (Cody Successor); CLI와 IDE의 작동. | 🔵 | [Website](https://ampcode.com) |
| **Junie CLI** | JetBrains의 LLM-agnostic 코딩 에이전트 CLI (beta 2026); 모든 주요 모델 제공 업체를 지원합니다. | 🔵 | [Website](https://www.jetbrains.com/junie/) |
| **Autohand Code CLI** | 멀티 프로바이더 LLM 지원, 40 + 도구 및 모듈 기술 시스템을 갖춘 자율 터미널 코딩 에이전트. | 🟢 | [GitHub](https://github.com/autohandai/code-cli) |

#### AI 코드 편집기 / IDE

독립 편집기 또는 딥 AI 통합과 IDE 포크.

| 이름 * | 이름 * | 제품정보 | 팟캐스트 |
|:-----|:-----------|:----:|:----:|
| **Cursor** | Leading AI-native code editor (VS Code fork); Composer는 자연적인 언어, 대리인 다중 파일 편집에서 전체 앱을 생성합니다. | 🔵 | [Website](https://cursor.com) |
| **Windsurf** | AI-powered IDE (VS Code fork) 독점 Cascade 에이전트 및 SWE-1.5 모델; Cognition AI에 의해 인수. | 🔵 | [Website](https://windsurf.com) |
| **Zed** | 기본 AI 기능으로 Rust의 고성능 편집기, Zeta 편집 예측 및 Agent Client Protocol 지원. ~77K+ ⭐ | 🟢 | [GitHub](https://github.com/zed-industries/zed) |
| **Trae** | Free AI-powered IDE from ByteDance ("Real AI Engineer") with Builder Mode; Claude, GPT-4o 및 DeepSeek에 무료 액세스를 제공합니다. | 🔵 | [Website](https://www.trae.ai) |
| **Google Antigravity** | Google의 에이전트-first IDE (VS Code fork)는 병렬에 여러 에이전트를 관현하는 관리자보기; Gemini에 의해 구동. | 🔵 | [Website](https://antigravity.google) |
| **Kiro** | AWS의 spec 구동되는 대리인 AI IDE (VS 부호 포크); specs로 신속한, 그 후에 일 부호, docs 및 시험. | 🔵 | [Website](https://kiro.dev) |
| **PearAI** | Open-source AI 코드 편집기 (VS Code fork) 을 Continue 기반 채팅 및 완료. ~40K+ ⭐· | 🟢 | [GitHub](https://github.com/trypear/pearai-app) |
| **Void** | 오픈 소스 커서 대안 (VS Code fork); 변경 시각화와 함께 모든 모델 또는 로컬 호스팅. ~28K + ⭐ | 🟢 | [GitHub](https://github.com/voideditor/void) |
| **Melty** | 오픈 소스 채팅-First AI 코드 편집기 멀티 파일 편집 및 깊은 Git 통합. ~7K+ ⭐ | 🟢 | [GitHub](https://github.com/meltylabs/melty) |
| **Emdash** | 고립 된 Git worktrees에서 평행한 다수 기호를 달리기를 위한 오픈 소스 대리인 dev 환경 (YC W26). | 🟢 | [GitHub](https://github.com/generalaction/emdash) |

#### IDE 확장 / 플러그인

VS Code, JetBrains, Neovim 및 기타 편집기용 플러그인.

| 이름 * | 이름 * | 제품정보 | 팟캐스트 |
|:-----|:-----------|:----:|:----:|
| **GitHub Copilot** | 가장 널리 채택 된 AI 코딩 조수; 인라인 완료, 채팅, 에이전트 코딩 에이전트 VS Code, JetBrains, Neovim. | 🔵 | [Website](https://github.com/features/copilot) |
| **Cline** | VS Code의 자율 코딩 에이전트는 인간의 반복 승인; 파일 편집, 터미널 명령 및 브라우저 사용. ~59K + ⭐ | 🟢 | [GitHub](https://github.com/cline/cline) |
| **Continue** | 오픈 소스 VS 코드 및 JetBrains 확장 사용자 정의, 모듈 AI dev 시스템; 어떤 모델. ~32K + ⭐ | 🟢 | [GitHub](https://github.com/continuedev/continue) |
| **Cody** | 현지 및 원격 코드베이스에서 컨텍스트를 끌어내는 Sourcegraph-powered AI Assistant; VS Code, JetBrains, Visual Studio. | 🔵 | [Website](https://sourcegraph.com/cody) |
| **Codeium** | 무료 AI 코딩 확장 40 + 완료, 채팅 및 70 + 언어를 통해 검색 IDE. | 🟣 | [Website](https://codeium.com) |
| **Amazon Q Developer** | AWS의 AI 코딩 어시스턴트, 인라인 채팅 및 에이전트 모드; 깊은 AWS 통합. | 🟣 | [Website](https://aws.amazon.com/q/developer/) |
| **Gemini Code Assist** | Google의 IDE 확장은 Gemini에서 완료, Next Edit Predictions 및 인라인 디퓨즈로 구동됩니다. | 🟣 | [Website](https://codeassist.google) |
| **Tabnine** | Privacy-focused AI 조수는 permissive-licensed OSS에 훈련했습니다; 온프레미스 배치를 가진 모든 중요한 IDE를 지원합니다. | 🔵 | [Website](https://www.tabnine.com) |
| **Augment Code** | 200K-token Context Engine과 함께 엔터프라이즈 AI 코딩 보조. | 🔵 | [Website](https://www.augmentcode.com) |
| **Qodo** | AI 코드 검토 및 멀티 시약 아키텍처와 품질 플랫폼; 테스트 세대, 코드 검토, CI/CD 시행. | 🟣 | [Website](https://www.qodo.ai) |
| **CodeGeeX** | VS Code 및 JetBrains 확장을 지원하는 오픈 소스 다국어 코드 생성 모델. ~11K+ ⭐ | 🟢 | [GitHub](https://github.com/zai-org/CodeGeeX) |
| **Tabby** | 자체 호스팅 오픈 소스 AI 코딩 조수 (Copilot 대안); 완전히 인프라에서 실행. ~25K + ⭐ | 🟢 | [GitHub](https://github.com/TabbyML/tabby) |

#### AI 코딩 플랫폼 / 클라우드 에이전트

브라우저 기반 또는 클라우드 호스팅 에이전트 구축, 테스트, 자율적으로 배치.

| 이름 * | 이름 * | 제품정보 | 팟캐스트 |
|:-----|:-----------|:----:|:----:|
| **Devin** | 최초의 자율 클라우드 기반 AI 소프트웨어 엔지니어; 계획, 코드, 테스트 및 PR을 독립적으로 엽니 다. | 🔵 | [Website](https://devin.ai) |
| **Replit Agent** | 자율적으로 빌드, 테스트, 배포하는 Cloud-native AI 에이전트는 풀스택 앱을 사내에서 배포합니다. 50+ 언어. | 🔵 | [Website](https://replit.com/products/agent) |
| **bolt.new** | AI-powered web dev Agent; 신속한, 실행, 편집 및 WebContainers를 통해 브라우저에서 Full-stack 앱을 직접 배포합니다. ~15K+ ⭐· | 🟢 | [GitHub](https://github.com/stackblitz/bolt.new) |
| **bolt.diy** | 장시간 특징과 더 넓은 LLM 융통성을 가진 bolt.new의 공동체 포크. ~12K+ ⭐ | 🟢 | [GitHub](https://github.com/stackblitz-labs/bolt.diy) |
| **Lovable** | 내장 Supabase, auth 및 One-click 배포를 가진 자연적인 언어에서 가득 차 있는 앱; $20M ARR에 가장 빠른 유럽 시작. | 🔵 | [Website](https://lovable.dev) |
| **v0** | Vercel의 고품질 React/Next를 생성하는 AI 플랫폼. js UI 구성 요소 | 🔵 | [Website](https://v0.dev) |
| **GitHub Copilot Workspace** | 플랜, Brainstorm 및 Repair Agent를 사용한 클라우드 기반 코딩 환경; 유료 Copilot 플랜 포함. | 🔵 | [Website](https://githubnext.com/projects/copilot-workspace) |
| **Firebase Studio** | Google의 에이전트 클라우드 기반 개발 환경. | 🔵 | [Website](https://firebase.google.com/studio) |

#### 오픈 소스 코딩 에이전트 Frameworks

자율 코딩 에이전트 구축을위한 프레임 워크 및 연구 프로젝트.

| 이름 * | 이름 * | 제품정보 | 팟캐스트 |
|:-----|:-----------|:----:|:----:|
| **OpenHands** | 클라우드 코딩 에이전트를위한 오픈 소스 플랫폼; SWE-bench에서 지속적으로 최고. 이전 OpenDevin. ~69K+ ⭐ | 🟢 | [GitHub](https://github.com/OpenHands/OpenHands) |
| **SWE-agent** | GitHub 이슈를 가져 와서 사용자 정의 에이전트-컴퓨터 인터페이스를 사용하여 자동으로 수정합니다. [NeurIPS 2024] ~19K+ ⭐ | 🟢 | [GitHub](https://github.com/SWE-agent/SWE-agent) |
| **Open SWE** | LangChain의 동기화 클라우드 호스팅 코딩 에이전트 프레임 워크는 Slack/Linear 통합으로 LangGraph에 내장. ~8K+ ⭐· | 🟢 | [GitHub](https://github.com/langchain-ai/open-swe) |
| **Devika** | Open-source Agentic 소프트웨어 엔지니어; 지시, 연구 및 쓰기 코드를 깰. Devin 대안. ~18K + ⭐ | 🟢 | [GitHub](https://github.com/stitionai/devika) |
| **AutoCodeRover** | GitHub 문제 해결을 위한 오류 로컬라이제이션과 LLM을 결합한 자율 프로그램 개선. ~2.8K+ ⭐· | 🟢 | [GitHub](https://github.com/nus-apr/auto-code-rover) |
| **Agentless** | 소프트웨어 개발 문제를 해결하기 위해 간단한 3 단계 접근 (localize → repair → validate). ~2K+ ⭐ | 🟢 | [GitHub](https://github.com/OpenAutoCoder/Agentless) |
| **Devon** | 오픈 소스 쌍 프로그래머 SWE 에이전트 코드 작성, 계획, 연구; 지원 Claude, GPT-4, Llama, Ollama. ~3.5K+ ⭐· | 🟢 | [GitHub](https://github.com/entropy-research/Devon) |

### 다른 주목할만한 저장소

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **Prompt Engineering Guide (DAIR.AI)** | definitive 오픈 소스 가이드 및 리소스 허브. 3M+ 학습자. ~55K+ ⭐ | [GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide) |
| **Awesome ChatGPT Prompts / Prompts.chat** | 세계 최대의 오픈 소스 프롬프트 라이브러리. 모든 주요 모델에 대한 신속한 1000s. | [GitHub](https://github.com/f/awesome-chatgpt-prompts) |
| **12-Factor Agents** | 생산 등급 LLM 전원 소프트웨어를 구축하기위한 원칙. ~17K + ⭐ | [GitHub](https://github.com/humanlayer/12-factor-agents) |
| **NirDiamant/Prompt_Engineering** | 22개의 손에 Jupyter 노트북 튜토리얼. ~3K+ ⭐ | [GitHub](https://github.com/NirDiamant/Prompt_Engineering) |
| **Context Engineering Repository** | 신속한 엔지니어링을 통한 컨텍스트 디자인에 대한 First-principles 핸드북. | [GitHub](https://github.com/davidkimai/Context-Engineering) |
| **AI Agent System Prompts Library** | 생산 AI 코딩 에이전트 (Claude Code, Gemini CLI, Cline, Aider, Roo Code)에서 시스템 프롬프트 컬렉션. | [GitHub](https://github.com/tallesborges/agentic-system-prompts) |
| **Awesome Vibe Coding** | 245개 이상의 도구와 자원을 수집하여 천연어 프롬프트를 통해 소프트웨어를 구축합니다. | [GitHub](https://github.com/taskade/awesome-vibe-coding) |
| **OpenAI Cookbook** | 신속한 도구, RAG 및 평가를위한 공식 요리법. | [GitHub](https://github.com/openai/openai-cookbook) |
| **Embedchain** | Framework는 데이터셋을 통해 ChatGPT-like bots를 만듭니다. | [GitHub](https://github.com/embedchain/embedchain) |
| **ThoughtSource** | 기계 사고의 과학을위한 프레임 워크. | [GitHub](https://github.com/OpenBioLink/ThoughtSource) |
| **Promptext** | 토큰 계산으로 AI를 위한 추출 및 포맷 코드 컨텍스트. | [GitHub](https://github.com/1broseidon/promptext) |
| **Price Per Token** | LLM API 가격 비교 200+ 모델. | [Website](https://pricepertoken.com/) |
| **OpenPaw** | CLI 도구 (`npx pawmode`) Claude Code를 시스템 프롬프트 (CLAUDE.md + SOUL.md)를 생성하여 개인 조수로 전환합니다. | [GitHub](https://github.com/daxaur/openpaw) |
| **Think Better** | 오픈 소스 CLI 영구적으로 10 구조화 결정 프레임 워크 (MECE, Issue Trees, Pre-Mortems) 및 12 인지 Bias 검출기를 AI 보조 프롬으로 주사합니다. 이동, MIT. | [GitHub](https://github.com/HoangTheQuyen/think-better) |

---

## API 지원
💻

### 오시는 길

| 주요 특징 | 설정하기 | 가격 (1M 토큰 당 입력 / 출력) | 주요 특징 |
|:------|:--------|:-----------------------------------|:------------|
| GPT-5.2 / 5.2 Thinking | 400K의 | $1.75 / $14 | 최신 기함, 90 % 캐시 할인, 구성 요소 |
| GPT-5.1 | 400K의 | $1.25 / $10 | 이전 세대 주력 |
| GPT-4.1 / 4.1 mini / nano | 1시간 | $2 / $8 | GPT-4o보다 40 % 빠르고 80 % 저렴 |
| o3 / o3-pro | 200K의 | 팟캐스트 | 기본 도구 사용 Reasoning 모델 |
| o4-mini | 200K의 | 공급 능력 | 빠른 reasoning, 그것의 비용 종류에 AIME에 베스트 |
| GPT-OSS-120B / 20B | 128K의 | $0.03 / $0.30 | 첫 번째 개방형 모델, Apache 2.0 |

주요 기능: 응답 API의 대리인 SDK, Structured 산출, 호출하는 기능, 신속한 캐싱 (90% 할인), 배치 API (50% 할인), MCP 지원. [플랫폼 Docs](https://platform.openai.com/docs/models)

### Anthropic (클래드)

| 주요 특징 | 설정하기 | 가격 (1M 토큰 당 입력 / 출력) | 주요 특징 |
|:------|:--------|:-----------------------------------|:------------|
| Claude Opus 4.6 | 1M (베타) | $5 / $25 | 가장 강력한, 최첨단 코딩 및 에이전트 작업 |
| Claude Sonnet 4.5 | 200K의 | $3 / $15 | 최고의 코딩 모델, 61.4% OSWorld (컴퓨터 사용) |
| Claude Haiku 4.5 | 200K의 | 빠른 층 | 주변, 빠른 모델 클래스 |
| Claude Opus 4 / Sonnet 4 | 200K의 | $15/$75 (오푸스) | Opus: 72.5% SWE-bench, Sonnet 4 파워 GitHub Copilot |

주요 기능 : 도구 사용, 컴퓨터 사용, MCP (여기 시작), 신속한 캐싱, Claude Code CLI, AWS Bedrock 및 Google Vertex AI에서 사용할 수 있습니다. [API 문서](https://docs.anthropic.com/)

### 구글 (Gemini)

| 주요 특징 | 설정하기 | 가격 (1M 토큰 당 입력 / 출력) | 주요 특징 |
|:------|:--------|:-----------------------------------|:------------|
| Gemini 3 Pro Preview | 1시간 | $2 / $12 | 대부분의 지능형 Google 모델, 2B +로 배포 사용자 정의 |
| Gemini 2.5 Pro | 1시간 | $1.25 / $10 | 코딩 / 시약 작업을위한 최고의, 생각 모델 |
| Gemini 2.5 Flash / Flash-Lite | 1시간 | $0.30/$1.50 · $0.10/$0.40 | 가격-성능 리더 |

주요 기능: Thinking (모든 2.5+ 모델), 구글 검색 접지, 코드 실행, 라이브 API (실시간 오디오 / 비디오), 컨텍스트 캐싱. [Google AI 스튜디오](https://ai.google.dev/)

### 메타 (Llama)

| 주요 특징 | 회사연혁 | 설정하기 | 주요 특징 |
|:------|:------------|:--------|:------------|
| Llama 4 Scout | 109B MoE / 17B 활성 | 10 분 | 적합 단일 H100, 다중화, 개방 중량 |
| Llama 4 Maverick | 400B MoE / 17B 활성, 128 전문가 | 1시간 | GPT-4o, 개방 중량 |
| Llama 3.3 70B | 팟캐스트 | 128K의 | 경기 라마 3.1 405B |

25+ 클라우드 파트너, Hugging Face 및 Inference APIs에서 사용할 수 있습니다. [스낵 바](https://ai.meta.com/llama/)

### 다른 Notable 공급자

| 회사 소개 | 이름 * | 팟캐스트 |
|:---------|:-----------|:----:|
| **Mistral AI** | Mistral 대형 3 (675B MoE), Devstral 2, Ministral 3. Apache 2.0. | [Website](https://mistral.ai) |
| **DeepSeek** | V3.2 (671B MoE), R1 (지역, MIT 라이센스). 1M 토큰 당 $0.15/$0.75. | [Website](https://deepseek.com) |
| **xAI (Grok)** | Grok 4.1 빠른: 2M 컨텍스트, 1M 토큰 당 $0.20/$0.50. | [Website](https://x.ai) |
| **Cohere** | 명령 A (111B, 256K 컨텍스트), Embed v4, Rerank 4.0. RAG에서 Excels. | [Website](https://cohere.com) |
| **Together AI** | 200+는 sub-100ms latency를 가진 모형을 엽니다. | [Website](https://together.ai) |
| **Groq** | ~300+ 토큰/초회를 가진 LPU 기계설비. | [Website](https://groq.com) |
| **Fireworks AI** | HIPAA + SOC2 준수와 빠른 출현. | [Website](https://fireworks.ai) |
| **OpenRouter** | 모든 공급자에게서 300+ 모형을 위한 자격이 없는 API. | [Website](https://openrouter.ai) |
| **Cerebras** | 최고의 총 응답 시간을 가진 웨이퍼 가늠자 칩. | [Website](https://cerebras.ai) |
| **Perplexity AI** | 인용을 가진 Search-augmented API. | [Website](https://perplexity.ai) |
| **Amazon Bedrock** | Claude, Llama, Mistral, Cohere와 관리 된 멀티 모델 서비스. | [Website](https://aws.amazon.com/bedrock/) |
| **Hugging Face Inference** | API를 통해 모델을 엽니 다. | [Website](https://huggingface.co/docs/api-inference/index) |

---

## 데이터 세트 및 벤치 마크
💾

### 주요 벤치 마크 (2024–2026)

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **Chatbot Arena / LM Arena** | Elo-rated 쌍방향 LLM 비교를 위한 6M+ 사용자 투표. 인간적인 선호도를 위한 De facto 기준. | [Website](https://lmarena.ai/) |
| **MMLU-Pro** | 14개 도메인의 12,000+ 대학원 수준의 질문. NeurIPS 2024 스포트라이트. | [GitHub](https://github.com/TIGER-AI-Lab/MMLU-Pro) |
| **GPQA** | 448 "Google-proof" STEM 질문; 비 폭발 검증자는 단지 34% 달성. | [arXiv](https://arxiv.org/abs/2311.12022) |
| **SWE-bench Verified** | 실제 GitHub 문제 해결을 위한 Human-validated 500-task subset. | [Website](https://www.swebench.com/) |
| **SWE-bench Pro** | 1,865 작업 41 전문 저장소; 최고의 모델 점수 만 ~23%. | [Leaderboard](https://scale.com/leaderboard/swe_bench_pro_public) |
| **Humanity's Last Exam (HLE)** | 2,500명의 전문가가 질문; 최고 AI는 ~10~30%만 점수를 매깁니다. | [Website](https://agi.safe.ai/) |
| **BigCodeBench** | 1,140 7 영역에서 코딩 작업; AI는 ~35.5% 대를 달성합니다. 97% 인간 성공. | [Leaderboard](https://huggingface.co/spaces/bigcode/bigcodebench-leaderboard) |
| **LiveBench** | 자주 묻는 질문(FAQ) | [Paper](https://openreview.net/forum?id=sKYHBTAxVa) |
| **FrontierMath** | 연구 수준 수학; AI는 문제의 단지 ~2%를 해결합니다. | 연구분야 |
| **ARC-AGI v2** | 측정 유체 인텔리전스를 초래합니다. | 연구분야 |
| **IFEval** | formatting/content constraints에 대한 지침 따르는 평가. | [arXiv](https://arxiv.org/abs/2311.07911) |
| **MLE-bench** | Kaggle-style 작업을 통해 OpenAI의 ML 엔지니어링 평가. | [GitHub](https://github.com/openai/mle-bench) |
| **PaperBench** | 20 ICML 2024 종이를 스크래치에서 복제하는 AI의 능력을 평가합니다. | [GitHub](https://github.com/openai/preparedness) |

### 리더 보드 및 메타 벤치 마크

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **Hugging Face Open LLM Leaderboard v2** | MMLU-Pro, GPQA, IFEval, MATH에 개방형 모델. | [Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| **Artificial Analysis Intelligence Index v3** | 총 10개의 평가. | [Website](https://artificialanalysis.ai/) |
| **SEAL by Scale AI** | Hosts SWE-bench Pro 및 에이전트 평가. | [Leaderboard](https://scale.com/leaderboard) |

### Prompt 및 사용 설명서

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **P3 (Public Pool of Prompts)** | T0 및 유사한 모델을 훈련하는 데 사용되는 270 + NLP 작업을위한 신속한 템플릿. | [HuggingFace](https://huggingface.co/datasets/bigscience/P3) |
| **System Prompts Dataset** | 에이전트 워크플로우에 대한 944 시스템 프롬프트 템플릿 (Daniel Rosehill, 8월 2025). | [HuggingFace](https://huggingface.co/datasets/danielrosehill/system_prompts) |
| **OpenAssistant Conversations (OASST)** | 161,443 메시지 35 언어와 461,292 품질 평가. | [HuggingFace](https://huggingface.co/datasets/OpenAssistant/oasst1) |
| **UltraChat / UltraFeedback** | 고급 교육을위한 대규모 합성 교육 및 선호 데이터 세트. | Hugging 얼굴 |
| **SoftAge Prompt Engineering Dataset** | 1,000개의 다양한 프롬프트 성능을 벤치마킹하기 위한 10개의 카테고리를 통해 프롬프트합니다. | Hugging 얼굴 |
| **Text Transformation Prompt Library** | 텍스트 변환 프롬프트의 종합 컬렉션 (May 2025). | Hugging 얼굴 |
| **Writing Prompts** | ~300K 인간 - 쓰기 이야기는 r/WritingPrompts에서 프롬프트와 페어링. | [Kaggle](https://www.kaggle.com/datasets/ratthachat/writing-prompts) |
| **Midjourney Prompts** | 텍스트 프롬프트 및 이미지 URL은 MidJourney의 공개 Discord에서 긁혔습니다. | [HuggingFace](https://huggingface.co/datasets/succinctly/midjourney-prompts) |
| **CodeAlpaca-20k** | 20,000의 프로그램 지시 산출 쌍. | [HuggingFace](https://huggingface.co/datasets/sahil2801/CodeAlpaca-20k) |
| **ProPEX-RAG** | RAG 워크플로우에서 신속한 최적화를 위한 Dataset. | Hugging 얼굴 |
| **NanoBanana Trending Prompts** | 1,000+ curated AI 이미지는 X/Twitter에서, 참여에 의해 순위를 매깁니다. | [GitHub](https://github.com/jau123/nanobanana-trending-prompts) |

### Red Teaming 및 Adversarial 데이터 세트

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **HarmBench** | 510 표준, 컨텍스트, 저작권 및 다중 카테고리의 유해한 행동. | [Website](https://safetyprompts.com/) |
| **JailbreakBench** | 100개의 프롬프트로 탈옥을 위한 견고 벤치 마크를 엽니다. | 연구분야 |
| **AgentHarm** | 110 악의적 인 에이전트 작업 11 해 범주. | [arXiv](https://arxiv.org/abs/2410.09024) |
| **DecodingTrust** | 243,877 프롬프트는 8개의 관점에 걸쳐 신뢰를 평가합니다. | 연구분야 |
| **SafetyPrompts.com** | Aggregator 추적 50+ 안전/빨간선 데이터셋. | [Website](https://safetyprompts.com/) |

---

## 모델 번호:
🧠

### 국경 모델 (2025–2026)

| 주요 특징 | 회사 소개 | 설정하기 | 핵심 힘 |
|:------|:---------|:--------|:-------------|
| **GPT-5.2** | 오시는 길 | 400K의 | 일반 정보, 100% AIME 2025 |
| **Claude Opus 4.6** | 인기 카테고리 | 1M (베타) | 코딩, 에이전트 작업, 장시간 생각 |
| **Gemini 3 Pro** | 구글 + | 1시간 | #1 LMArena (~1500 Elo), 멀티 모달 |
| **Grok 4.1** | ₢ 킹 사이트맵 | 2시간 | #2 LMArena (1483 Elo), 낮은 복도 |
| **Mistral Large 3** | 미스트랄 AI | 256K의 | 최고의 개방 중량 (675B MoE / 41B 활성), Apache 2.0 |
| **DeepSeek-V3.2** | 딥스카이 | 128K의 | 최고의 가치 (671B MoE/37B 활성), MIT 라이센스 |
| **Llama 4 Maverick** | · | 1시간 | 비트 GPT-4o (400B MoE/17B 활성), 개방 중량 |

### Reasoning 모형

| 주요 특징 | 핵심 정보 |
|:------|:-----------|
| **OpenAI o3 / o3-pro** | 87.7% GPQA 다이아몬드. 기본 도구 사용. |
| **OpenAI o4-mini** | 시각적인 이유를 가진 그것의 비용 종류에 제일 AIME. |
| **DeepSeek-R1 / R1-0528** | 무게를 여십시오, RL 훈련되는. AIME 2025에 87.5%. MIT 라이센스. |
| **QwQ (Qwen with Questions)** | 32B reasoning 모형. 아파치 2.0. R1에 비교할 수 있습니다. |
| **Gemini 2.5 Pro/Flash (Thinking)** | configurable 사고 예산을 가진 붙박이 reasoning. |
| **Claude Extended Thinking** | 볼록한 chain-of-thought 및 툴 사용으로 하이브리드 모드. |
| **Phi-4 Reasoning / Plus** | 14B 이유 모델 rivaling 훨씬 더 큰 모델. 체중 감량 |
| **GPT-OSS-120B** | CoT와 OpenAI의 개방 중량. o4-mini와 비교. 아파치 2.0. |

### Open-Source 모델

| 주요 특징 | 회사 소개 | 핵심 정보 |
|:------|:---------|:-----------|
| **Qwen3-235B-A22B** | 알리 | Flagship MoE. 강한 reasoning/code/다 언어. 아파치 2.0. HuggingFace에서 가장 다운로드 된 가족. |
| **Gemma 3** | 구글 + | 270M에서 27B. 다중 상태. 128K 컨텍스트. 140+ 언어. |
| **OLMo 2/3** | 알렌 AI | 완전 오픈 (데이터, 코드, 무게, 로그). OLMo 2 32B는 GPT-3.5를 능가합니다. Apache 2.0. |
| **SmolLM3-3B** | Hugging 얼굴 | 외형 Llama-3.2-3B. 이중 형태 이유. 128K 컨텍스트. |
| **Kimi K2** | 문샷 AI | 32B 활성. 체중 감량 coding/agentic 사용을 위해 tailored. |
| **Llama 4 Scout** | · | 109B MoE/17B 활성. 10M 토큰 컨텍스트. 적합 단 하나 H100. |

### Code-Specialized 모델

| 주요 특징 | 핵심 정보 |
|:------|:-----------|
| **Qwen3-Coder (480B-A35B)** | 69.6% SWE-bench — 오픈 소스 코딩에 대한 이정표. 256K 컨텍스트. 아파치 2.0. |
| **Devstral 2 (123B)** | 72.2% SWE-bench Verified. Claude Sonnet보다 7x 더 많은 비용 효율적인. |
| **Codestral 25.01** | Mistral의 코드 모델. 80+ 언어. Fill-in-the-Middle 지원. |
| **DeepSeek-Coder-V2** | 236B MoE / 21B 활성. 338 프로그래밍 언어. |
| **Qwen 2.5-Coder** | 7B / 32B. 92 프로그래밍 언어. 88.4% HumanEval. 아파치 2.0. |

### 기초 모델 (역사적 참조)

이 모형은 열쇠 개념을 설치하고 그러나 실제적인 사용을 위해 크게 supersed:

| 주요 특징 | 회사 소개 | 이름 * |
|:------|:---------|:-------------|
| GLM-130B | Tsinghua의 | 이중 언어 영어 / 중국어 LLM (2023) |
| Falcon 180B | 사이트맵 | 대형 개방형 모델 (2023) |
| Mixtral 8x7B | 미스트랄 AI | 개방형 모델을위한 Pioneered MoE 아키텍처 (2023) |
| GPT-NeoX-20B | 인기 카테고리 | 이른 열려있는 autoregressive LLM |
| GPT-J-6B | 인기 카테고리 | 초기 오픈 카우스 언어 모델 |

---

## AI 콘텐츠 감지기
🔎

### 납땜 상업적인 발견자

| 이름 * | 제품정보 | 주요 특징 | 팟캐스트 |
|:-----|:---------|:------------|:----:|
| **GPTZero** | 99% 청구 | 10M+ 사용자, G2에 #1 (2025). GPT-4/5, Gemini, 클로드, 라마를 탐지합니다. 무료 계층 사용 가능. | [Website](https://gptzero.me) |
| **Originality.ai** | 98-100 % (피어리스) | 지속적으로 가장 정확한 평가. AI 검출 + plagiarism + 사실 검사를 결합하십시오. $ 14.95 / 월. | [Website](https://originality.ai) |
| **Turnitin AI Detection** | 미분류되지 않은 AI 텍스트의 98%+ | 학대에서 지배. AI bypasser/humanizer 탐지 출시 (Aug 2025). 기관 라이센스. | [Website](https://www.turnitin.com/solutions/topics/ai-writing/) |
| **Copyleaks** | 99%+ 청구 | 30+ 언어에서 AI를 검출하는 기업 공구. LMS 통합. | [Website](https://copyleaks.com) |
| **Winston AI** | 주장되는 99.98% | 스캔된 문서를 위한 OCR, AI image/deepfake 탐지. 11 언어. | [Website](https://gowinston.ai) |
| **Pangram Labs** | 99.3% (색깔 2025) | COLING 2025 에 가장 높은 점수 공유 작업. "humanized" 텍스트에 100 % TPR. 97.7% 대담한 견고함. | [Website](https://www.pangram.com) |

### 무료 및 연구 감지기

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **Binoculars** | 두 개의 LLMs 사이 크로스 퍼플렉스를 사용하여 오픈 소스 연구 탐지기. | [arXiv](https://arxiv.org/abs/2401.12070) |
| **DetectGPT / Fast-DetectGPT** | 원래 텍스트 vs. perturbations의 로그 확률을 비교하는 통계 방법. | [arXiv](https://arxiv.org/abs/2301.11305) |
| **Openai Detector** | AI-written 텍스트를 나타내는 AI 클래스터 (OpenAI Detector Python wrapper)  | [[GitHub]](https://github.com/promptslab/openai-detector) |
| **Sapling AI Detector** | 무료 브라우저 기반 검출기 (최대 2,000 숯). 몇몇 학문에 있는 97% 정확도. | [Website](https://sapling.ai/) |
| **QuillBot AI Detector** | 무료, 가입 필요 없음. | [Website](https://quillbot.com/ai-content-detector) |
| **Writer AI Content Detector** | 컬러 코딩 결과를 가진 무료 도구. | [Website](https://writer.com/ai-content-detector/) |
| **ZeroGPT** | 여러 학술 연구에서 평가 된 인기있는 무료 검출기. | [Website](https://www.zerogpt.com/) |

### Watermarking 접근법

| 이름 * | 이름 * | 팟캐스트 |
|:-----|:-----------|:----:|
| **SynthID (Google DeepMind)** | statistical 토큰 샘플링을 통해 AI 텍스트, 이미지 및 오디오에 대한 워터 마크. Google 제품에 배포합니다. | [Website](https://deepmind.google/technologies/synthid/) |
| **OpenAI Text Watermarking** | 2025 년으로 개발되었지만 여전히 실험. 연구는 fragility 관심사를 보여줍니다. | 회사 소개 |

**중요한 caveat:** 검출기는 100% 정확도를 주장합니다. 혼합 인간 / AI 텍스트는 가장 어려운 (50 ~ 70 % 정확도)를 감지합니다. Adversarial 견고는 넓게 변화합니다. AI 탐지 시장은 2035년까지 ~ $ 2.3B (2025)에서 $ 15B로 성장할 것으로 예상됩니다.

---

## 한국어
📖

### 홍보센터

| 이름 * | 저자(s) | 주요연혁 | 1 년 |
|:------|:----------|:---------|:-----|
| **Prompt Engineering for LLMs** | 존 Berryman & 알버트 지글러 | 오릴리 | 2024 |
| **Prompt Engineering for Generative AI** | 제임스 피닉스 & 마이크 테일 | 오릴리 | 2024 |
| **Prompt Engineering for LLMs** | 토마스 R. Caldwell | 한국어 | 2025 |

### LLM 응용 개발

| 이름 * | 저자(s) | 주요연혁 | 1 년 |
|:------|:----------|:---------|:-----|
| **AI Engineering: Building Applications with Foundation Models** | 칩 후엔 | 오릴리 | 2025 |
| **Build a Large Language Model (From Scratch)** | 세바스티안 Raschka | 한국어 | 2024 |
| **Building LLMs for Production** | Louis-François 바우처 & 루리 피터 | 오릴리 | 2024 |
| **LLM Engineer's Handbook** | Paul Iusztin 및 Maxime Labonne | 뚱 베어 | 2024 |
| **The Hundred-Page Language Models Book** | 앤리 Burkov | 자기 출판 | 2025 |

### AI 에이전트

| 이름 * | 저자(s) | 주요연혁 | 1 년 |
|:------|:----------|:---------|:-----|
| **Building Applications with AI Agents** | 마이클 Albada | 오릴리 | 2025 |
| **AI Agents and Applications** | 콜롬비아 | 한국어 | 2025 |
| **AI Agents in Action** | 프로모션 | 한국어 | 2025 |

### 생산, 신뢰성 및 보안

| 이름 * | 저자(s) | 주요연혁 | 1 년 |
|:------|:----------|:---------|:-----|
| **LLMs in Production** | Christopher Brousseau & Matthew 샤프 | 한국어 | 2025 |
| **Building Reliable AI Systems** | 프로모션 | 한국어 | 2025 |
| **The Developer's Playbook for LLM Security** | 스티브 윌슨 | 오릴리 | 2024 |

---

## 한국어
👩‍🏫

### 무료 짧은 코스

- [ChatGPT Prompt 엔지니어링](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) — Andrew Ng 및 OpenAI의 Isa Fulford에 의해 잡은. 기초적인 출발점. (DeepLearning). AI)
- [ChatGPT API로 시스템 구축](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) — 생산을 위한 다 단계 LLM 체계 디자인. (DeepLearning). AI)
- [LangGraph의 AI 에이전트](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) — 도구 사용 및 연구 에이전트와 Agentic dataflows. (DeepLearning). AI)
- [LlamaIndex로 Agentic RAG 구축](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) — RAG 연구 대리인 건축. (DeepLearning). AI)
- [기능, 도구 및 에이전트와 LangChain](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) — 기능 호출 및 대리인 건물. (DeepLearning). AI)
- [비전 모델에 대한 신속한 엔지니어링](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) — Visual prompting 기술. (DeepLearning). AI)

### 대학 및 플랫폼 과정

- [신속한 엔지니어링 특수화 (Vanderbilt)](https://www.coursera.org/specializations/prompt-engineering) — Dr. Jules의 3코스 시리즈 진보된 PE에 백색 덮음 기초. (Coursera)
- [LLMs (DeepLearning.AI + AWS)와 함께하는 인공지능](https://www.coursera.org/learn/generative-ai-with-llms) - LLM 수명주기, 변압기, RLHF, 배포. (카페)
- [Stanford CS336 : 스크래치에서 모델링 언어](https://cs336.stanford.edu/) — LLM 엔드 투 엔드 빌드. (Stanford, 2024–2026)
- [MIT 6.S191: 딥러닝 소개](https://introtodeeplearning.com/) — LLM 및 유전 AI를 포함한 연례 과정. (MIT, 2024–2026)
- [AI Bootcamp를 위한 완전한 Prompt 기술설계](https://www.udemy.com/course/prompt-engineering-for-ai/) - 커버 GPT-5, DSPy, LangGraph, 에이전트 아키텍처. 58K+ 등급. (2월 2026) 업데이트

### 무료 플랫폼 코스

- [Google Prompting 필수 사항](https://grow.google/prompting-essentials/) — 5단계 프롬프트 디자인, meta-prompting, Gemini. 6시간 이내
- [Microsoft Azure AI 기초: 유전자 AI](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/) — LLM, 프롬프트, 에이전트, Azure OpenAI를 다루는 무료 학습 경로.
- [Hugging 얼굴 LLM 코스](https://huggingface.co/learn/llm-course/chapter1/1) — 커뮤니티 중심의 코스 덮음 변압기, 미세 조정, 건축 이유 모델.
- [Hugging 얼굴 AI Agents 과정](https://huggingface.co/learn) — 연습하는 에이전트 이론. 100K+ 등록 학생.

### 학습 과정

- [모두에 대한 ChatGPT](https://learnprompting.org/courses/chatgpt-for-everyone)
- [Prompt Engineering 소개](https://learnprompting.org/courses/introduction_to_prompt_engineering)
- [고급 Prompt 엔지니어링](https://learnprompting.org/courses/advanced-prompt-engineering)
- [Prompt Hacking 소개](https://learnprompting.org/courses/intro-to-prompt-hacking)
- [고급 Prompt 해킹](https://learnprompting.org/courses/advanced-prompt-hacking)
- [Business Professionals를 위한 Generative AI Agents 소개](https://learnprompting.org/courses/introduction-to-agents)
- [AI 안전](https://learnprompting.org/courses/ai-safety)

---

## 자습서 및 가이드
📚

### 공식 공급자 Guides

- [OpenAI Prompt 엔지니어링 가이드](https://platform.openai.com/docs/guides/prompt-engineering) — GPT-4.1/5 프롬프트, 소싱 모델, 구조화 된 출력, 에이전트 워크플로우를 덮는 종합. 지속적인 업데이트.
- [OpenAI GPT-4.1 시험 가이드](https://cookbook.openai.com/articles/gpt-4-1-prompting-guide) [2025] - 구조화 된 에이전트와 같은 신속한 디자인 : 목표 지속, 도구 통합, 긴 텍스트 처리.
- [Anthropic Prompt 엔지니어링 개요](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — Iterative 신속한 디자인, XML 태그, chain-of-thought, 역할 할당. 신속한 발전기를 포함합니다.
- [Anthropic Claude 4 모범 사례](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices) [2025–2026] - 병렬 도구 실행, 사고 기능, 이미지 처리.
- [Anthropic: AI Agents를 위한 효과적인 Context 기술설계](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) [2025] - 신속한 엔지니어링에서 컨텍스트 엔지니어링에 대한 진화 : 에이전트 상태, 메모리, 도구, MCP.
- [Google Gemini Prompting 전략](https://ai.google.dev/docs/prompt_best_practices) - Vertex AI 및 AI Studio를 통해 Gemini에 대한 멀티 모달 프린트.
- [Azure AI Studio에서 Microsoft Prompt 엔지니어링](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering) — 도구 호출, 기능 디자인, 몇 샷 신속한, 신속한 chaining.

### 커뮤니티 및 독립 가이드

- [Prompt 엔지니어링 가이드 (DAIR.AI / promptingguide.ai)](https://www.promptingguide.ai/) — 가장 포괄적 인 오픈 소스 가이드. 18+ 기술, 모델별 가이드, 연구 논문. 3M+ 학습자. 이제 context Engineering이 포함되어 있습니다.
- [Prompting을 알아보기 (learnprompting.org)](https://learnprompting.org/) - 구조화된 무료 플랫폼. 고급 PE, AI 보안, HackAPrompt 경쟁에 초보자.
- [IBM 2026 Prompt 엔지니어링 가이드](https://www.ibm.com/think/prompt-engineering) [2026] - 곱한 도구, 자습서, 파이썬 코드가있는 실제 사례.
- [Anthropic Interactive 튜토리얼](https://github.com/anthropics/prompt-eng-interactive-tutorial) — 9-chapter Jupyter 노트북 과정 손으로 운동.
- [Lilian Weng의 Prompt 엔지니어링 가이드](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) [2023] — OpenAI 연구자에서 높은 존경받는 기술 블로그.
- [Google Prompt 엔지니어링 가이드 (68 페이지 PDF)](https://www.reddit.com/r/PromptEngineering/comments/1kggmh0/google_dropped_a_68page_prompt_engineering_guide/) [2025] - 콘크리트 패턴으로 Gemini에 대한 내부 스타일의 최고의 전술 가이드.
- [DigitalOcean: 신속한 엔지니어링 모범 사례](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices) [2025] - 업데이트 된 가이드 요약 기술 : 몇 샷, 체인 -의 - 철저한, 역할 프롬프트 등
- [Aakash Gupta : 2025 년 신속한 엔지니어링](https://news.aakashg.com) [2025] - OpenAI, Shopify 및 Google에서 배송 AI의 지혜와 실제 가이드.
- [OpenAI API로 신속한 엔지니어링을위한 모범 사례](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api) — OpenAI의 소개
- [OpenAI 쿡북](https://github.com/openai/openai-cookbook) — 기능 호출, RAG, 평가 및 복잡한 워크플로우에 대한 공식적인 요리법.
- [Microsoft Prompt 엔지니어링 문서](https://microsoft.github.io/prompt-engineering) — Microsoft의 오픈 프롬프트 엔지니어링 리소스.
- [DALLE Prompt 책](https://dallery.gallery/the-dalle-2-prompt-book) — text-to-image prompting에 대한 시각 가이드.
- [제일 100+ 안정되어 있는 확산 Prompts](https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts) — Community-curated 이미지 생성 프롬프트.
- [Vibe 엔지니어링 (Manning)](https://www.manning.com/books/vibe-engineering) — Tomasz Lelek & Artur Skowronski의 책은 자연 언어 프롬프트를 통해 건물 소프트웨어에.

---

## 이름 *
🎥

- [Andrej Karpathy : "LLMs로 디브" & "LLMs를 사용하는 방법"](https://www.youtube.com/@AndrejKarpathy) [2024–2025] — 2024–2025의 가장 영향력있는 AI 동영상의 두. 포괄적인 기술 딥 다이빙은 실제 사용 패턴에 따라 다릅니다.
- [Karpathy: "AI의 시대에 소프트웨어"(YC AI 스타트업 스쿨)](https://karpathy.ai/) [2025] - 동전 "비브 코딩"(Feb 2025) 및 챔피언 "콘텍스 엔지니어링"(Jun 2025).
- [Karpathy: 신경 네트워크: 영웅에 영](https://www.youtube.com/@AndrejKarpathy) [2023–2024] — 전체 강의 시리즈 건물 backpropagation에서 GPT.
- [3Blue1Brown: 신경 네트워크 시리즈](https://www.youtube.com/@3blue1brown) [Updated 2024] - 변압기 및주의 메커니즘의 Iconic 애니메이션 시각적 설명. 7M+ 가입자.
- [AI 설명](https://www.youtube.com/@aiexplained-official) [2024–2025] — 종이, 모델 기능 및 PE 개발을 깨는 Long-form 분석.
- [샘 Witteveen](https://www.youtube.com/@samwitteveen) [2024–2025] - 신속한 엔지니어링, LangChain, RAG 및 에이전트에 대한 실제 튜토리얼.
- [마태 복음](https://www.youtube.com/@matthew_berman) [2024–2025] — 인기 채널 덮음 모델 출시 및 실용적인 LLM 사용. 600K+ 가입자.
- [DeepLearning.AI 유튜브](https://www.youtube.com/@Deeplearningai) [2024–2026] — 구조 수업, 코스 미리보기, 앤드류 Ng는 에이전트와 AI 경력을 이야기합니다.
- [Lex Fridman Podcast (AI 에피소드)](https://www.youtube.com/@lexfridman) [2024–2025] — Altman, Hinton, LLMs, 신속한 및 안전에 대한 Amodei와 긴 형식의 인터뷰.
- [ICSE 2025 : AIware Prompt 엔지니어링 자습서](https://conf.researchr.org/details/icse-2025/icse-2025-tutorials/) [2025] - 신속한 패턴, fragility, anti-patterns 및 최적화 DSL을 다루는 회의 튜토리얼.
- [CMU 고급 NLP 2022 : Prompting](https://youtube.com/watch?v=5ef83Wljm-M) - 신속한 방법에 대한 기초 학술 강의.
- [ChatGPT : 초보자를위한 5 Prompt 엔지니어링 비밀](https://www.youtube.com/watch?v=2zg3V66-Fzs) — 초심자를 위한 접근 가능한 intro.

---

## 한국어
🤝

### Discord 서버

- [학습 팁](https://learnprompting.org/discord) — 40,000+ 회원. 가장 큰 PE Discord 과정, Hackathons, HackAPrompt 경쟁.
- [PromptsLab 디코드](https://discord.gg/m88xfYMbK6)  - 커뮤니티
- [주 메뉴](https://discord.gg/midjourney) — 1M+ 회원. text-to-image 신속한 공유를 위한 기본 허브.
- [OpenAI 디코드](https://discord.gg/openai) - GPTs, Sora, DALL-E 및 API에 대한 채널이있는 공식 커뮤니티.
- [Anthropic 정보](https://discord.gg/anthropic) - AI 개발 협력을위한 공식 Claude 커뮤니티.
- [Hugging 얼굴 Discord](https://discord.gg/huggingface) - 모델 토론, 라이브러리 지원, 커뮤니티 이벤트.
- [흐름GPT](https://flowgpt.com/) - 33K+ 회원 ChatGPT, DALL-E, Stable Diffusion, Claude에 걸쳐 100K + 프롬프트.

### 팟캐스트

- [r/PromptEngineering의](https://reddit.com/r/PromptEngineering) - 신속한 기술 및 토론을위한 전용 서브레드.
- [r/ChatGPT는](https://reddit.com/r/ChatGPT) — 10M+ 회원. ChatGPT 사용자 및 신속한 공유를위한 기본 허브.
- [r/LocalLLaMA의 특징](https://reddit.com/r/LocalLLaMA) — Open-source LLMs를 로컬로 실행하는 첨단 기술 커뮤니티.
- [r/클래드](https://reddit.com/r/ClaudeAI) — Anthropic's Claude 커뮤니티: 신속한 공유, API 팁, 모델 비교.
- [r/Machine학습](https://reddit.com/r/MachineLearning) — 학술지 ML 연구 토론.
- [r/오픈아이](https://reddit.com/r/OpenAI) — OpenAI 제품 및 API 토론.
- [r/StableDiffusion의](https://reddit.com/r/StableDiffusion) — AI 예술 프롬프트 및 워크플로우의 450K+ 멤버.
- [r/ChatGPTPromptGenius의](https://reddit.com/r/ChatGPTPromptGenius) — 35K+ 회원 공유 및 퇴직 프롬프트.


### 포럼 및 플랫폼

- [OpenAI 개발자 커뮤니티](https://community.openai.com/) — API 도움말, 모범 사례, 프로젝트 공유를위한 공식 포럼.
- [Hugging 얼굴 커뮤니티](https://huggingface.co/) — Open-source AI 협력 허브.
- [DeepLearning.AI 커뮤니티](https://community.deeplearning.ai/) — 학습자를 위한 포럼 및 AI 커리어.
- [옵션 정보](https://www.lesswrong.com/) — AI 기능 및 안전에 대한 심층적인 기술 메시지.
- [AI 정렬 포럼](https://www.alignmentforum.org/) — 특수 정렬 연구 토론.
- [사이트맵](https://civitai.com/) — 모델, LoRA, 그리고 프롬프트를 공유하기위한 공식 AI 제작자 플랫폼.

### GitHub 조직

- [랭체인](https://github.com/langchain-ai) — Open-source LLM 앱 프레임 워크. 100K+ 별.
- [프로젝트](https://github.com/promptslab)  — 생성모델|Prompt-Engineering | LLMs 
- [Hugging 얼굴](https://github.com/huggingface) — 중앙 허브: 변압기, 유포자, Datasets, TRL.
- [DSPy (스탄 포드 NLP)](https://github.com/stanfordnlp/dspy) — 체계적인 신속한 최적화를 위한 성장 커뮤니티.
- [오시는 길](https://github.com/openai) - 오픈 소스 모델, 벤치 마크 및 도구.

---

<!-- AUTORESEARCH-START -->
## RM 자율 연구 및 자기 개선 에이전트
> 자동 동기화 [멋진 연구](https://github.com/alvinunreal/awesome-autoresearch) · 마지막으로 동기화 : 2026-10-03

### 일반 목적

- [카테고리](https://github.com/kayba-ai/recursive-improve) - 에이전트 캡처 실행 추적, 분석 실패 패턴을 추적하는 반복적 자기 개선 프레임 워크, 및 계속 반복 평가와 대상 수정 적용.
- [vukrosic/자동 연구](https://github.com/vukrosic/auto-research) — Docs-only control plane for the open autonomous AI research lab — 인간 방향 및 에이전트 실행을위한 파일 기반 운영 모델.
- [uditgoenka/자동 연구](https://github.com/uditgoenka/autoresearch) — 소프트웨어, 문서, 보안, 배송, 디버깅 및 기타 유해한 목표에 대한 재사용 가능한 루프로 자동화를 종합하는 Claude Code 기술.
- [leo-lilinxiao/codex-자동 연구](https://github.com/leo-lilinxiao/codex-autoresearch) — Codex-native autoresearch 기술로 이력서 지원, 런닝, 옵션 병렬 실험 및 모드 별 워크플로우를 통해 수업.
- [junjunbong / 연구 루프](https://github.com/junjunjunbong/research-loop) — Codex 및 Claude Code에 대한 Autoresearch-style Agent Skills with a deterministic runner, plan-hash 승인, 고립 된 Git worktrees, 권위있는 메트릭 평가 및 append-only experiment ledger.
- [Xieyulai / 스테어](https://github.com/xieyulai/steer) — 코딩 에이전트가 훈련 코드를 편집하고 작업, scorer 및 증거가 고정되는 동안 라운드를 실행하는 준거 실험 프레임 워크.
- [톱 페이지](https://github.com/SeeleAI/Thoth) — Dashboard-first Claude Code and Codex runtime for autoresearch, 튼튼한 실행, 잠금 작업 항목, 가시 ledgers, 및 검토 가능한 verdict.
- [supratikpm/gemini-자동 연구](https://github.com/supratikpm/gemini-autoresearch) — Gemini CLI 기술은 모든 측정 가능한 목표에 대한 연구를 종합합니다. Gemini-native: 루프 내에서 라이브 검증 소스로 접지하는 Google Search를 사용하여 --yolo --prompt 및 1M 토큰 컨텍스트를 통해 진정한 헤드리스 하룻밤 모드. 또한 .agents/skills/를 통해 Antigravity IDE에서 작동합니다.
- [davebcn87/pi-autoresearch에 대 한](https://github.com/davebcn87/pi-autoresearch) — `pi` persistent 실험 루프, 실시간 메트릭, 자신감을 추적하고, resumable autoresearch 세션을 위한 확장 플러스 대쉬보드.
- [drivelineresearch/autoresearch-claude 부호](https://github.com/drivelineresearch/autoresearch-claude-code) — Claude Code 플러그인/스킬 포트 `pi-autoresearch`, 깨끗한 실험 루프 워크플로우와 콘크리트 생물역학 사례 연구.
- [Greyhaven-ai/자동 텍스트](https://github.com/greyhaven-ai/autocontext) — 반복된 대리인 개선을 위한 닫히 반복 통제 비행기, 평가와 더불어, 지속적인 지식, 단계로 된 검증 및 더 싼 국부적으로 런타임으로 선택적인 증류.
- [사이트맵](https://github.com/Necmttn/ax) - AI 코딩 에이전트를위한 로컬 복고풍 루프 : 세션 추적을 캡처하고 제안으로 반복 마찰을 회전하고 실험으로 해결 된 수정을 추적합니다.
- [jmilinovich/골드 md](https://github.com/jmilinovich/goal-md) — autoresearch를 `GOAL.md` 대리인이 낙관할 수 있는 전에 measurable 적당 기능을 첫째로 건설해야 하는 repos를 위한 본.
- [잼-s-tayler/lazy-developer](https://github.com/james-s-tayler/lazy-developer) - 엔진으로 GOAL.md를 사용하여 최적화 목표 (복사, 테스트 속도, 빌드 속도, 복잡성, LOC, 성능)의 우선 순위를 통해 자율 조사를 관용하는 Claude Code 기술. 독립적이고 랄프 모드 멀티 인스턴스 실행을 지원합니다.
- [mutable-state-inc/자동화 집에서](https://github.com/mutable-state-inc/autoresearch-at-home) - 실험 청구를 추가, 공유 최고의 구성 동기화, hypothesis 교환 및 많은 단일 GPU 에이전트를 통해 swarm-style 조정을 추가하는 업스트림 자동 연구의 협업 포크.
- [zkarimi22/autoresearch-anything에](https://github.com/zkarimi22/autoresearch-anything) - autoresearch를 일반화 **어떤 measurable 미터** - 시스템 프롬프트, API 성능, 랜딩 페이지, 테스트 스위트, 구성 튜닝, SQL 쿼리. "당신이 측정 할 수 있다면, 당신은 그것을 최적화 할 수 있습니다."
- [Entrpi/자동 연구-everywhere](https://github.com/Entrpi/autoresearch-everywhere) — Cross-platform 확장은 하드웨어 구성을 자동 감지하고 루프를 시작합니다. autoresearch의 "glue and generalization"반.
- [ShengranHu/다스](https://github.com/ShengranHu/ADAS) — **Agentic Systems의 자동화 설계** - ICLR 2025. JavaScript licenses API 웹 사이트
- [MaximeRobeyns/각자_더 보기_코딩_제품정보](https://github.com/MaximeRobeyns/self_improving_coding_agent) — **아프리카**: 자체 개선 코딩 자체 codebase를 편집하는 에이전트. ICLR 2025 작업장 종이 코딩 벤치 마크에 비계 수준의 자기 개선을 민주화.
- [peterskoett/self-improving 시약](https://github.com/peterskoett/self-improving-agent) — 반사 및 메타 러닝 사이클을 가진 대체 자기 추진 에이전트 아키텍처.
- [metauto-ai/HGM에 의하여](https://github.com/metauto-ai/HGM) — **Huxley-Gödel 기계** 코딩 에이전트에 대한 - 메타 레벨 최적화를 통해 SWE-Bnch 성능에 자체 개선을 적용합니다.
- [gepa-ai/게파](https://github.com/gepa-ai/gepa) — **GEPA (Genetic-Pareto)** — ICLR 2026 구두. 벤치 마크에 RL (GRPO)를 초과하는 반사적 신속한 진화. 자연적인 언어 반사를 사용하여 어떤 미터에 대하여 어떤 textual 모수든지 낙관합니다.
- [이자카야/EvoSkill](https://github.com/sentient-agi/EvoSkill) — 코딩 에이전트에 대한 자동화 된 기술 발견 : Claude Code, Codex CLI, OpenCode, OpenHands 및 Goose에 대한 지원과 벤치 마크에 대한 실패 트레이서에서 재사용 가능한 기술 및 프롬프트를 진화.
- [MrTsepa/자동차](https://github.com/MrTsepa/autoevolve) — GEPA-inspired autoresearch for self-play: mutate code 전략, Elo/Bradley-Terry와 함께 헤드에 대한 평가, Pareto 프론트에서 지점. Agent는 타겟 mutations에 매치 추적을 읽습니다. Claude Code 기술로 작동합니다.
- [HKUDS / 클로팀](https://github.com/HKUDS/ClawTeam) — autoresearch에 대한 에이전트 swarm 인텔리전스 — spawns 병렬 GPU 연구 방향, 에이전트 전반에 걸쳐 작업을 배포, 결과 집계.
- [오케스트라 연구/AI-Research-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) - 2 루프 아키텍처 (안심 최적화 + 외부 합성)로 autoresearch Orchestration를 포함한 종합 기술 라이브러리.
- [WecoAI/아데ml](https://github.com/WecoAI/aideml) — **아오이**: 트리 연구 ML 엔지니어링 에이전트는 자율적으로 모델 성능 향상을 통해 그것의 코드 생성 및 평가.
- [카테고리](https://weco.ai) — **채용정보**: 관찰성, 실험 추적, 관리 실행을 가진 AIDE를 위한 클라우드 플랫폼 - 생산에 autoresearch 루프를 가져옵니다.

### 연구 및 개발

- [목표랩/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) — End-to-end 연구 파이프라인은 문학 검토, 실험, 분석, 동료 검토 및 종이 초안으로 주제를 전환합니다. autoresearch보다 더 넓지만 명확하게 동일한 선량에 있습니다.
- [OpenLAIR/드롭 클로](https://github.com/OpenLAIR/dr-claw) — 연속적인 아이디어에 종이 파이프라인과 통합된 autoresearch 공구 팩을 가진 Open-source 연구 작업 공간.
- [OpenRaiser/Nano연구](https://github.com/OpenRaiser/NanoResearch) — 실험을 계획하고, 코드를 생성하고, 로컬 또는 SLURM에서 작업을 실행하고, 실제 결과를 분석하고, 그 출력에 근거를 둔 논문을 작성합니다.
- [카테고리](https://github.com/kaust-ark/ARK) — **ARK (자동 연구 키트)**: 아이디어 + 장소 → 제프 라인 오케스트라 6 에이전트 - 제안 분석, 문학 검색, Slurm 실험, LaTeX 초안, iterative 동료 검토. CLI, 웹 대시보드 또는 Telegram을 통해 제어됩니다.
- [wanshuiyin/자동 claude 부호 연구에서 잠](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) — Claude Code 및 기타 에이전트에 대한 Markdown-first 연구 워크플로우는 자율적인 문학 검토, 실험, 종이 반복 및 크로스 모델의 critique에 중심.
- [skyllwt/자동](https://github.com/skyllwt/AutoSci) - Claude Code에 내장 된 Wiki-centric 풀 라이프 사이클 연구 플랫폼, Karpathy의 LLM-Wiki 비전을 실현. 20 + 기술 전체 루프를 커버: ingest → ideate → 소설 검사 → 실험 디자인 / 실행 / eval → 종이 쓰기. 연구 상태는 대화 형 그래프와 구조화된 지식 위키에 살고 있습니다.
- [Sibyl-Research-Team/AutoResearch-Sibyl시스템](https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem) — Claude Code에 내장 된 완전 자율 AI 과학자, 명시된 AutoResearch 선량, 다중 시약 연구 반복, GPU 실험, 자기 진화 외부 루프.
- [wjc2830/Easy AutoResearch-for-DeepLearning를 위해](https://github.com/wjc2830/Easy-AutoResearch-for-DeepLearning) — 자동 연구 스타일, 6개의 역할, 버전 실험 및 증거 검사된 완료를 통해 인간의 변화된 딥러닝 루프를 실행하는 클로드 코드 기술.
- [eimenhmdt / 자동 연구](https://github.com/eimenhmdt/autoresearcher) - 과학적 워크플로우 자동화를 위한 초기 오픈 소스 패키지, 현재는 더 넓은 자율적인 연구에 대한 야심을 가진 문학적 검토 생성에 집중했습니다.
- [하이퍼스페이스ai/agi](https://github.com/hyperspaceai/agi) — Distributed, 자율 에이전트가 실험을 실행하는 피어 투 피어 연구 네트워크, gossip finds, CRDT 리더 보드 유지, 여러 연구 영역에서 GitHub에 아카이브 결과.
- [인간존중-Society/CORAL](https://github.com/Human-Agent-Society/CORAL) — **한국어**: 열린 발견을위한 자율 멀티 시약 진화 (Autonomous multi-agent 진화)[arXiv:2604.01658](https://arxiv.org/abs/2604.01658)). 공유 영구 기억, 비동기 실행 및 심박수 기반 개입을 가진 장기적인 대리인; 10 math/algorithmic/systems 일에 SOTA.
- [SakanaAI/AI 과학자](https://github.com/SakanaAI/AI-Scientist) — **AI 과학자**: 완전 자동 과학적 발견을위한 최초의 종합 시스템. 아이디어 생성에서 최소한의 인간 감독과 종이 쓰기.
- [SakanaAI/AI 과학자 V2](https://github.com/SakanaAI/AI-Scientist-v2) — Agentic tree search를 통해 작업장 수준의 자동화된 과학적 발견. v1에서 템플릿 의존성을 제거, 연구 영역 전반에 걸쳐 일반화.
- [AweAI-Team/아이 과학자](https://github.com/AweAI-Team/AiScientist) — **아이 과학자**: 흥행정과 File-as-Bus coordination-workspace 파일이 기록의 튼튼한 시스템으로 동작합니다. 자율주행물(PaperBench) 및 경쟁형 MLE-Bench의 반복 루프를 고정 계산/시간 예산에 따라 구동한다. ([스카이프 8.49.0.49](https://arxiv.org/abs/2604.13018))
- [HKUDS/AI 연구자](https://github.com/HKUDS/AI-Researcher) — NeurIPS 2025 종이. Full end-to-end 연구 자동화: hypothesis → 실험 → manuscript → 동료 검토. 생산 버전 at [novix. 과학](https://novix.science/chat).
- [openags/자동 연구](https://github.com/openags/Auto-Research) — **공지사항**: lit review, hypothesis generation, experiments, manuscript Writing, 그리고 동료 검토를 통해 AI Agent 팀에 합류했습니다.
- [SamuelSchmidgall/AgentLaboratory에 대하여](https://github.com/SamuelSchmidgall/AgentLaboratory) — 최종 자율 연구 워크플로우: 아이디어 → 문학 검토 → 실험 → 보고서. 자율적이고 공동 조종 모드를 모두 지원합니다.
- [에이전트Rxiv](https://agentrxiv.github.io/) — Collaborative autonomous research framework where Agent 실험실은 다른 작업에 맞게 사전 인쇄 서버를 공유합니다.
- [전체메뉴](https://github.com/JinheonBaek/ResearchAgent) — LLMs를 가진 과학적인 문학에 이차적인 연구 아이디어 발생. 멀티 시약 리뷰 및 피드백 루프.
- [듀-nlp-lab/MLR-Copilot](https://github.com/du-nlp-lab/MLR-Copilot) — Autonomous ML 연구 프레임 워크 — 아이디어 생성, 실험 구현, 결과 분석.
- [MASWorks/ML 일관성](https://github.com/MASWorks/ML-Agent) — 자율 ML 엔지니어링 LLM 에이전트를 강화. 시험 및 오류에서 모델 성능을 개선합니다.
- [PouriaRouzrokh/레이테Review](https://github.com/PouriaRouzrokh/LatteReview) — 저코드 Python 패키지 **자동화된 체계적인 문학 리뷰** AI-powered 대리인을 통해.
- [리틀릭스](https://github.com/LitLLM/LitLLM) — RAG를 사용하여 AI-powered 문학 검토 조수, 학업 쓰기에서 잘 구조화 된 관련 작업 섹션.
- [학회소개](https://agentlaboratory.github.io/) — 3단계 연구 파이프라인: 문학 검토 → 실험 → 보고서 쓰기, 각 단계에 대한 전문 에이전트와.
- [happyhappy-jun / 쓰기 중심 자동 연구](https://github.com/happyhappy-jun/writing-driven-autoresearch) — Autoresearch-style 마구는 첫번째 분에서 제출 가능한 종이를 유지하고 그 초안에서 주장에서 모든 실험을 구동, 반복 수정 → 측정 → 확인 → 개정. 1위 [Ralphthon@ICML 2026년](https://luma.com/hjuo7auc) autonomous-research 해커톤.
- [AutoResearch 공장/곤](https://github.com/AutoResearch-Factory/Agon) — 1개의 코너스톤 원리에 내장된 End-to-end 연구 오케스트라터, Prompt Economy (reusable loops, not one-off prompts), 5개의 지원 규칙; 10+ 분야의 과학자/코더/auditor 루프를 실행하고, autoresearch와 같은 재사용 가능한 루프 선량과 전체 연구 프로그램에 확장.

### 플랫폼 항구 & 기계설비 포크

- [gianfrancopiana/openclaw-자동 연구](https://github.com/gianfrancopiana/openclaw-autoresearch) — OpenClaw 항구의 pi-autoresearch; 통계적 신뢰 득점과 함께 모든 최적화 대상에 대한 자율 실험 루프.
- [miolini / 자동 연구 - macos](https://github.com/miolini/autoresearch-macos) — Apple Silicon / MPS의 업스트림 자동 연구에 적합한 macOS 포크를 널리 채택하여 원래 루프 모양을 보존합니다.
- [trevin-creator/자동 연구 mlx](https://github.com/trevin-creator/autoresearch-mlx) — MLX-native Apple 실리콘 포트는 상류 고정 판결을 유지 `val_bpb` PyTorch/CUDA 의존성을 완전히 제거하면서 루프.
- [jsegov/autoresearch-win-rtx에 대 한](https://github.com/jsegov/autoresearch-win-rtx) — Windows-native RTX fork는 명시된 VRAM 바닥과 실제 데스크톱 설정 경로와 함께 소비자 NVIDIA GPU에 초점을 맞추고 있습니다.
- [iii-hq/n-자동 연구](https://github.com/iii-hq/n-autoresearch) — Multi-GPU Autoresearch Infrastructure with Structured experiment tracking, 적응 검색 전략, 충돌 복구, 그리고 클래식 주변 쿼리 가능한 관현관 `train.py` 루프.
- [lucasgelfond/autoresearch 웹 사이트에](https://github.com/lucasgelfond/autoresearch-webgpu) - 에이전트가 훈련 코드를 생성 할 수있는 브라우저 / WebGPU 포트, 실험을 실행하고, 파이썬 설치없이 루프로 다시 피드.
- [tonitangpotato/자동 연구 효소](https://github.com/tonitangpotato/autoresearch-engram) — 포크와 **persistent 인식 기억** — 개량한 실험 연속성에 대한 Cross-session 지식의 주파수 무게를 달았습니다.
- [Colab/Kaggle T4 항구](https://github.com/karpathy/autoresearch/issues/208) — 무료 T4 GPU (Google Colab / Kaggle)에 대한 자동 조사를 0 비용과 0 로컬 설정. 중요한 변화: 섬광 주의 3 → PyTorch SDPA는, H100 전용 커널 의존도를 제거합니다.
- [ArmanJR-Lab / 자동 연구](https://github.com/ArmanJR-Lab/autoautoresearch) - Jetson AGX Orin 포트 **주요연혁** — "creative Director"로 행동하는 Go Binary는 소설 (arxiv Papers + DeepSeek Reasoner)를 로컬 minima를 탈출하기 위해 반복합니다. 멀티-experiment 비교(baseline vs Director-guided)를 포함한 상세한 섀시 분석.

### 도메인-Specific 적응

- [mattprusak/autoresearch-genealogy에 관하여](https://github.com/mattprusak/autoresearch-genealogy) - 구조화된 프롬프트, 아카이브 가이드, 소스 체크 및 vault 워크플로우를 사용하여 유전학에 대한 자동 연구 패턴을 적용하여 가족의 연구를 확장하고 검증합니다.
- [ArchishmanSengupta / 자동 송장](https://github.com/ArchishmanSengupta/autovoiceevals) — Vapi, Smallest AI 및 ElevenLabs를 통해 음성 AI 에이전트를 Harden로 편집합니다.
- [chrisworsey55/아틀라스-gic](https://github.com/chrisworsey55/atlas-gic) — autoresearch keep-or-revert loop to trading Agent, 모델 손실 대신 날카로운 비율에 대한 신속한 및 포트폴리오 관현을 최적화.
- [현재-AI/autokernel](https://github.com/RightNow-AI/autokernel) - GPU 커널 최적화에 autoresearch 루프를 적용 : 프로필 병목, 하나의 커널, 벤치 마크를 편집, 유지 또는 반전, 반복.
- [ElliotXie/자동차](https://github.com/ElliotXie/autozyme) - CPU 측 과학 소프트웨어에 autoresearch keep-or-revert 루프를 적용하는 멀티 시약 프레임 워크 : 대상 기능을 프로파일, 원래 출력을 보존하는 동안 하나의 최적화 후보를 생성, 반복.
- [대리인 분석/autoresearch-growth](https://github.com/Agent-Analytics/autoresearch-growth) - 분석 스냅 샷을 사용하여 분석 스냅 샷 및 측정 실험 결과를 사용하여 랜딩 페이지 위치 및 A / B 테스트 후보에 대한 평가를 제공합니다.
- [Rkcr7/자동 연구 스도쿠](https://github.com/Rkcr7/autoresearch-sudoku) — AI Agent Iteratively rewrites and benchmarks a Rust sudoku Solr, 궁극적으로 하드 벤치 마크 세트에 인간의 내장 된 해결사를 선도하는 자동 연구 워크플로우를 강화했습니다.
- [정프/autospec](https://github.com/jeongph/autospec) — Natural-language 비즈니스 규칙을 읽고 자율적으로 스프링 부트 서비스를 구축합니다. Gradle 빌드 + JUnit XML을 준수합니다. 119-line skeleton에서 5 사이클의 950 라인.
- [vlasenkoalexey/tpu의_- 연혁_자동 연구_한국어](https://github.com/vlasenkoalexey/tpu_performance_autoresearch_wiki) - v6e 하드웨어에서 autoresearch keep-or-revert loop을 TPU 모델 성능 (MFU / token-per-sec)에 적용하십시오. XProf MCP 서버를 통해 각 작업을 프로파일링하고 실험 당 하나의 모델 코드 변경을 만들고 측정 된 MFU에 대한 반전을 유지합니다. 도메인 지식과 원예 최적화 추적을위한 Karpathy-style LLM wiki와 루프를 쌍; JAX와 토치사 레인의 Llama3-8B 및 Qwen3-8B 사례 연구를 포함합니다.

### 평가 및 벤치 마크

- [스냅 stanford/MLAgentBench](https://github.com/snap-stanford/MLAgentBench) — ML 실험 작업에서 AI 에이전트를 평가하기위한 벤치 마크 스위트. CIFAR-10에서 BabyLM에 13 작업.
- [오픈AI/mle-bench](https://github.com/openai/mle-bench) — OpenAI의 벤치 마크는 ML 엔지니어링에서 잘 AI 에이전트가 수행하는 방법을 측정합니다.
- [첸후이/mlrbench](https://github.com/chchenhui/mlrbench) — MLR-Bench: 오픈 엔드 ML 연구에 AI 에이전트를 평가. NeurIPS/ICLR/ICML 작업장에서 201 작업.
- [gersteinlab/ML 벤치](https://github.com/gersteinlab/ML-Bench) — 저장소 레벨 코드에서 ML 작업에 대한 LLM 및 에이전트를 평가합니다.
- [채용공고](https://github.com/THUDM/AgentBench) — LLM-as-Agent 평가를 위한 포괄적인 벤치 마크는 8개의 명백한 환경의 맞은편에 있습니다. ICLR 2024년

### 관련 자료

- [ai 시약-2030/awesome deep 연구 시약](https://github.com/ai-agents-2030/awesome-deep-research-agent) — 깊은 연구 대리인 종이와 체계의 치료된 명부.
- [영DubbyDu/LLM-Agent-Optimization](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) — LLM 에이전트 최적화 방법에 종이.
- [VoltAgent/awesome-ai 시약 종이](https://github.com/VoltAgent/awesome-ai-agent-papers) — 2026년에서 치료된 AI 에이전트 종이 — 에이전트 엔지니어링, 메모리, 평가, 워크플로우 및 자율 시스템.
- [masamasa59/ai 시약 종이](https://github.com/masamasa59/ai-agent-papers) — AI Agent Research Papers는 자동화된 arxiv 검색을 통해 biweekly를 업데이트했습니다.
- [tmgthb / 자율주행자](https://github.com/tmgthb/Autonomous-Agents) — 자율 에이전트 연구 논문, 매일 업데이트.
- [HKUST-KnowComp/Awesome-LLM 과학적인 발견](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — EMNLP 2025 과학 발견에서 LLM에 대한 설문 조사.
- [openags/Awesome-AI 과학자 종이](https://github.com/openags/Awesome-AI-Scientist-Papers) - AI 과학자 / 로봇 과학자 종이 컬렉션.
- [화학 과학.github.io](https://agenticscience.github.io/) — 설문 조사: "AI for Science to Agentic Science: Autonomous Scientific Discovery의 조사"
- [사이트맵](https://dspy.ai/api/optimizers/GEPA/overview/) — GEPA의 DSPy 통합은 화합물 AI 체계를 위한 신속한 낙관합니다.
- [OpenAI 쿡북: 각자 진화 대리인](https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining) - GEPA-style 반사 진화를 사용하여 자율주행을 위한 Cookbook.
- [WecoAI/Awesome 자동 연구](https://github.com/WecoAI/awesome-autoresearch) - 도메인 (LLM 교육, GPU 커널, 음성 에이전트, 거래 등)에 의해 조직 된 검증 가능한 추적 및 진행 차트가있는 AutoResearch 사용 사례의 목록.

<!-- AUTORESEARCH-END -->

---

## 기여하는 방법

우리는이 목록에 기여를 환영합니다! 기여하기 전에, 우리의 검토 순간을 [공지사항](contributing.md). 이 가이드라인은 당신의 기여가 우리의 목표와 일치하고 질과 relevance를 위한 우리의 기준을 만나는 것을 도울 것입니다.

**우리가 찾고있는 것 :**
- 새로운 고품질 종이, 도구, 또는 왜 그들은 중요 한 설명과 리소스
- 기존의 항목에 업데이트 (브론 링크, 입력 된 정보)
- 스타 카운트, 가격, 또는 모델 세부 사항에 대한 수정
- 번역 및 접근성 개선

**품질 규격:**
- 모든 도구는 적극적으로 유지해야합니다 (마지막 6 개월 이내에 업데이트 됨)
- 종이는 동료 검토 된 장소에서 있어야하거나 중요한 커뮤니티 채택
- Datasets는 공개적으로 접근되어야 합니다
- 리소스가 가치있는 이유를 설명하는 한 줄의 설명이 포함되어 있습니다.

이 프로젝트에 기여하는 것에 관심을 가져 주셔서 감사합니다!

<a href="https://github.com/promptslab/Awesome-Prompt-Engineering/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=promptslab/Awesome-Prompt-Engineering" />
</a>

---

<p align="center">
  <sub>관련 기사 <a href="https://promptslab.github.io">프로젝트</a> · <a href="https://github.com/promptslab/Awesome-Prompt-Engineering">스타 이 repo</a> 당신이 그것을 유용하게 발견하면!</sub>
</p>
