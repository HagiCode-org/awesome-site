# 😎 검색 증강 생성(RAG) 리소스 모음
[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Danielskry/Awesome-RAG) [![Awesome-RAG Agent Plugin](https://img.shields.io/badge/Agent_Plugin-Available-blueviolet)](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)

검색 증강 생성(RAG) 시스템을 구축하기 위한 도구, 프레임워크, 기법 및 학습 자료를 엄선해 정리했습니다. 이 저장소는 RAG 생태계를 소개하고 RAG 애플리케이션을 탐색하고 구축하는 데 도움이 되는 권위 있는 자료, 튜토리얼 및 구현 링크를 제공합니다.

VS Code, GitHub Copilot CLI, Claude Code용 [에이전트 플러그인으로도 제공됩니다](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin).

## 개요

**검색 증강 생성(RAG)**은 생성 과정에서 외부 지식 소스의 관련 맥락을 동적으로 검색해 반영함으로써 대규모 언어 모델(LLM)을 강화하는 생성형 AI의 고급 기법입니다. 사전 학습된 지식에만 의존하는 기존 LLM과 달리 RAG 시스템은 최신 정보, 도메인별 정보 또는 독점 정보에 접근할 수 있어 정확도를 크게 높이고 환각을 줄이며 실시간 지식 통합을 가능하게 합니다.

### 주요 이점

- **환각 감소**: 검색된 사실 정보를 바탕으로 답변을 생성합니다
- **도메인 적응**: 미세 조정 없이 LLM이 전문 지식을 활용할 수 있습니다
- **실시간 업데이트**: 모델을 다시 학습하지 않고 최신 정보를 반영합니다
- **비용 효율성**: 도메인별 작업에서 미세 조정보다 비용 효율적입니다
- **투명성**: 생성된 콘텐츠에 출처를 표시합니다
- **개인정보 보호 및 보안**: 민감한 데이터를 비공개 지식 베이스에 보관합니다

## 목차

- [ℹ️ RAG 일반 정보](#ℹ%EF%B8%8F-general-information-on-rag)
- [🏗️ 아키텍처 패턴](#%EF%B8%8F-architecture-patterns)
- [🎯 고급 접근 방식](#-advanced-approaches)
- [🧰 RAG 지원 프레임워크](#-frameworks-that-facilitate-rag)
- [🐍 RAG용 Python 생태계](#-python-ecosystem-for-rag)
- [🛠️ 기법](#-techniques)
- [📊 지표 및 평가](#-metrics--evaluation)
- [💾 데이터베이스](#-databases)
- [🔌 플랫폼별 RAG 구현](#-platform-specific-rag-implementations)
- [🚀 프로덕션 고려 사항](#-production-considerations)
- [💡 모범 사례](#-best-practices)

## ℹ️ RAG 일반 정보

RAG는 지식 기준 시점이 고정되어 있고 외부 정보에 접근할 수 없다는 LLM의 근본적인 한계를 해결합니다. 기존 RAG 구현은 검색 파이프라인을 통해 지식 베이스의 관련 문서로 LLM 프롬프트를 보강합니다. 예를 들어 특정 주택의 리모델링 자재를 묻는 경우 LLM은 일반적인 리모델링 지식은 있어도 해당 주택의 세부 정보는 알지 못할 수 있습니다. RAG 시스템은 설계도, 자재 사양, 지역 건축 법규 등의 관련 문서를 검색해 정확하고 맥락에 맞는 답변을 제공합니다.

### 구현 리소스

#### Python 튜토리얼 및 예제

- [Python 기본 RAG 구현](https://github.com/Danielskry/LangChain-Chroma-RAG-demo-2024): LangChain과 Chroma를 사용하는 풀스택 RAG 예제
- [LangChain RAG 튜토리얼](https://python.langchain.com/docs/use_cases/question_answering/): RAG 애플리케이션 구축을 위한 종합 안내서
- [LlamaIndex RAG 튜토리얼](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/): RAG를 위한 LlamaIndex 시작하기
- [Haystack RAG 파이프라인](https://docs.haystack.deepset.ai/docs/retrieval-augmented-generation): Haystack으로 RAG 파이프라인 구축하기
- [RAG Techniques](https://github.com/NirDiamant/RAG_Techniques): 실행 가능한 Jupyter 노트북으로 제공되는 고급 검색 증강 생성 기법의 종합 오픈 소스 모음입니다.
- [RAG Interview System](https://github.com/ather-techie/rag-interview-system): 29가지 RAG 아키텍처 패턴을 다루는 엄선된 질의응답 418쌍(기초 → 고급)을 갖춘 RAG 기반 면접 준비 시스템입니다.

- [Search with Jev and Milvus](https://github.com/milvus-io/bootcamp/tree/master/bootcamp/RAG/search_with_jev): Gemini 임베딩, Milvus 검색, Jev 판단을 결합해 재순위화, 컨텍스트 필터링, 검색 중단, 라우팅, 캐시 재사용, 큐레이션, 가드레일 및 평가를 다루는 실행 가능한 Python 노트북 9개입니다.

#### 프로덕션 및 모범 사례

- [프로덕션 RAG 패턴 및 모범 사례](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): 프로덕션 환경에 바로 적용할 수 있는 RAG 최적화 전략
- [LangChain 프로덕션 가이드](https://python.langchain.com/docs/production/): LangChain 애플리케이션을 프로덕션 환경에 배포하기
- [Python 비동기 모범 사례](https://docs.python.org/3/library/asyncio-dev.html): AI 애플리케이션을 위한 효율적인 비동기 Python 코드 작성

## 🏗️ 아키텍처 패턴

RAG 시스템은 요구 사항에 따라 다양한 패턴으로 설계할 수 있습니다.

- **Naive RAG**: 최적화 없이 검색 후 생성하는 기본 파이프라인
- **Advanced RAG**: 질의 재작성, 재순위화, 컨텍스트 압축을 통합합니다
- **Modular RAG**: 검색, 순위화, 생성을 위한 조립 가능한 구성 요소를 사용합니다
- **Agentic RAG**: LLM 기반 에이전트가 검색 여부와 방법을 동적으로 결정합니다
- **Self-RAG**: 검색 품질을 자체적으로 성찰하고 전략을 조정하는 모델입니다
- **Graph RAG**: 구조화된 정보 검색에 지식 그래프를 활용합니다
- **Reasoning-Based RAG**: 다단계 LLM 추론으로 검색을 계획하고 탐색하며 실행합니다

## 🎯 고급 접근 방식

RAG 구현은 단순한 문서 검색부터 반복 피드백 루프, 멀티 에이전트 시스템, 도메인별 개선을 통합한 고급 기법까지 다양합니다. 최신 접근 방식은 다음과 같습니다.

- [Vision-RAG](https://www.youtube.com/watch?v=npkp4mSweEg): 전체 페이지를 이미지로 임베딩해 비전 모델이 텍스트 RAG처럼 텍스트를 파싱하지 않고 직접 추론하도록 합니다.
- [Cache-Augmented Generation (CAG)](https://medium.com/@ronantech/cache-augmented-generation-cag-in-llms-a-step-by-step-tutorial-6ac35d415eec): 관련 문서를 모델 컨텍스트에 미리 로드하고 추론 상태(키-값(KV) 캐시)를 저장합니다.
- [Agentic RAG](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/): 검색 에이전트라고도 하며 검색 프로세스에 대한 결정을 내릴 수 있습니다.
- [A-RAG](https://github.com/Ayanami0730/arag): 키워드, 의미, 청크 수준의 계층적 검색 인터페이스를 갖춘 에이전트형 RAG로, LLM 에이전트가 여러 세분성 수준에서 자율적으로 검색하고 정보를 가져올 수 있습니다. ([논문](https://arxiv.org/abs/2602.03442))
- [Corrective RAG](https://arxiv.org/pdf/2401.15884.pdf) (CRAG): 검색된 정보를 LLM 응답에 통합하기 전에 수정하거나 다듬는 방법입니다.
- [Retrieval-Augmented Fine-Tuning](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/raft-a-new-way-to-teach-llms-to-be-better-at-rag/ba-p/4084674) (RAFT): 검색 및 생성 작업을 강화하도록 LLM을 미세 조정하는 기법입니다.
- [Self Reflective RAG](https://selfrag.github.io/): 모델 성능 피드백을 바탕으로 검색 전략을 동적으로 조정하는 모델입니다.
- [RAG Fusion](https://arxiv.org/abs/2402.03367): 여러 검색 방법을 결합해 컨텍스트 통합을 개선하는 기법입니다.
- [Temporal Augmented Retrieval](https://adam-rida.medium.com/temporal-augmented-retrieval-tar-dynamic-rag-ad737506dfcc) (TAR): 검색 과정에서 시간에 민감한 데이터를 고려합니다.
- [Plan-then-RAG](https://arxiv.org/abs/2406.12430) (PlanRAG): 복잡한 작업에서 RAG를 실행하기 전에 계획 단계를 두는 전략입니다.
- [GraphRAG](https://github.com/microsoft/graphrag): 지식 그래프를 활용해 컨텍스트 통합과 추론을 강화하는 구조화된 접근 방식입니다.
- [Code-Graph-RAG](https://github.com/vitali87/code-graph-rag): 다국어 코드베이스 분석을 위한 지식 그래프 RAG 시스템입니다.
- [FLARE](https://medium.com/etoai/better-rag-with-active-retrieval-augmented-generation-flare-3b66646e2a9f) - 능동적 검색 증강 생성을 도입해 응답 품질을 높이는 접근 방식입니다.
- [GNN-RAG](https://github.com/cmavro/GNN-RAG): 대규모 언어 모델 추론을 위한 그래프 신경망 검색입니다.
- [Multimodal RAG](https://developer.nvidia.com/blog/an-easy-introduction-to-multimodal-retrieval-augmented-generation/): RAG를 텍스트, 이미지, 오디오 등 여러 모달리티로 확장합니다.
- [VideoRAG](https://arxiv.org/abs/2501.05874): 대규모 비디오 언어 모델(LVLM)을 사용해 RAG를 비디오로 확장하고 시각 및 텍스트 콘텐츠를 검색·통합해 멀티모달 생성을 수행합니다.
- [REFRAG](https://arxiv.org/pdf/2509.01092): 생성 전에 검색된 컨텍스트를 임베딩으로 압축해 RAG 디코딩을 최적화하고 출력 품질을 유지하면서 지연 시간을 줄입니다.
- [InstructRAG](https://github.com/weizhepei/InstructRAG): 모델이 자체 생성한 추론을 활용한 지시문 미세 조정으로 RAG 시스템의 검색 및 생성 품질을 향상합니다.
- [PageIndex](https://github.com/VectifyAI/PageIndex): 벡터를 사용하지 않는 추론 기반 RAG 프레임워크로, 계층형 문서 트리를 만들고 임베딩 및 벡터 유사도 대신 LLM 기반 트리 검색으로 정보를 가져옵니다. 청킹과 벡터 데이터베이스 없이 복잡한 전문 문서에 대해 설명 가능하고 맥락을 고려한 검색을 제공합니다.

## 🧰 RAG 지원 프레임워크

- [Haystack](https://github.com/deepset-ai/haystack): 사용자 지정이 가능하고 프로덕션에 바로 적용할 수 있는 LLM 애플리케이션을 구축하는 LLM 오케스트레이션 프레임워크입니다.
- [LangChain](https://python.langchain.com/docs/modules/data_connection/): LLM 작업 전반에 사용할 수 있는 범용 프레임워크입니다.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel): 생성형 AI 애플리케이션 개발을 위한 Microsoft SDK입니다.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): 사용자 지정 데이터 소스를 LLM에 연결하는 프레임워크입니다.
- [Dify](https://github.com/langgenius/dify): 오픈 소스 LLM 앱 개발 플랫폼입니다.
- [Verba](https://github.com/weaviate/Verba): 별도 설정 없이 바로 사용할 수 있는 오픈 소스 RAG 애플리케이션입니다.
- [Mastra](https://github.com/mastra-ai/mastra): AI 애플리케이션 구축을 위한 TypeScript 프레임워크입니다.
- [Letta](https://github.com/letta-ai/letta): 상태를 유지하는 LLM 애플리케이션 구축을 위한 오픈 소스 프레임워크입니다.
- [Flowise](https://github.com/FlowiseAI/Flowise): 드래그 앤 드롭 UI로 맞춤형 LLM 흐름을 구축합니다.
- [Kreuzberg](https://github.com/kreuzberg-dev/kreuzberg): Rust 코어와 Python, TypeScript, Go 바인딩을 갖춘 다국어 문서 인텔리전스 라이브러리로, 62개 이상의 문서 형식에서 텍스트, 표, 메타데이터를 추출해 RAG 수집 파이프라인에 제공합니다.
- [Swiftide](https://github.com/bosun-ai/swiftide): 모듈식 스트리밍 LLM 애플리케이션을 구축하기 위한 Rust 프레임워크입니다.
- [CocoIndex](https://github.com/cocoindex-io/cocoindex): 실시간 증분 업데이트를 지원하는 AI용(예: RAG) 데이터 인덱싱 ETL 프레임워크입니다.
- [Pathway](https://github.com/pathwaycom/pathway/): Rust 런타임을 사용하는 고성능 오픈 소스 Python ETL 프레임워크로, 300개 이상의 데이터 소스를 지원합니다.
- [Pathway AI Pipelines](https://github.com/pathwaycom/llm-app/): 다양한 데이터 소스에서 실시간 인덱싱, 검색, 변경 추적을 지원하는 프로덕션용 RAG 프레임워크입니다.
- [LiteLLM](https://docs.litellm.ai/): 로깅, 모니터링, 비용 추적 기능을 제공하는 여러 LLM 제공업체(OpenAI, Anthropic, Hugging Face, Replicate)용 통합 인터페이스입니다.
- [Agentset](https://github.com/agentset-ai/agentset): 에이전트 추론, 하이브리드 검색, 멀티모달 지원 기능이 내장된 프로덕션용 오픈 소스 RAG 플랫폼입니다.
- [OpenAgent](https://github.com/the-open-agent/openagent): LLM, RAG 지식 베이스, 브라우저 사용·셸 실행·MCP 도구를 지원하는 자율 에이전트 루프를 결합한 오픈 소스 개인용 AI 비서 플랫폼입니다.
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research): 웹, arXiv, PubMed, 비공개 문서에서 검색하고 20개 이상의 연구 전략을 제공하는 로컬 우선 심층 에이전트 연구 프레임워크입니다.

## 🐍 RAG용 Python 생태계

Python은 현재 가장 성숙한 RAG 생태계를 갖추고 있으며 다음을 폭넓게 지원합니다:
LLM, 임베딩, 벡터 데이터베이스, 평가 및 프로덕션 도구.

전체 가이드: [RAG용 Python 생태계](docs/python-ecosystem.md)

## 🛠️ 기법

### 데이터 정제

- [데이터 정제 기법](https://medium.com/intel-tech/four-data-cleaning-techniques-to-improve-large-language-model-llm-performance-77bee9003625): 입력 데이터를 정제하고 모델 성능을 높이는 전처리 단계입니다.

### 프롬프트 작성

- **전략**
  - [Tagging and Labeling](https://python.langchain.com/v0.1/docs/use_cases/tagging/): 검색된 데이터에 의미 태그나 레이블을 추가해 관련성을 높입니다.
  - [Chain of Thought (CoT)](https://www.promptingguide.ai/techniques/cot): 응답 전에 모델이 단계적으로 생각하도록 유도합니다.
  - [Chain of Verification (CoVe)](https://sourajit16-02-93.medium.com/chain-of-verification-cove-understanding-implementation-e7338c7f4cb5): 모델이 추론의 각 단계를 검증해 정확성을 확인하도록 요청합니다.
  - [Self-Consistency](https://www.promptingguide.ai/techniques/consistency): 여러 추론 경로를 생성하고 가장 일관된 답변을 선택합니다.
  - [Zero-Shot Prompting](https://www.promptingguide.ai/techniques/zeroshot): 예시 없이 모델을 안내하는 프롬프트를 설계합니다.
  - [Few-Shot Prompting](https://python.langchain.com/docs/how_to/few_shot_examples/): 원하는 응답 형식을 보여 주는 몇 가지 예시를 프롬프트에 제공합니다.
  - [Reason & Act (ReAct) prompting](https://www.promptingguide.ai/techniques/react): 추론(예: CoT)과 행동(예: 도구 호출)을 결합합니다.
- **캐싱**
  - [Prompt Caching](https://medium.com/@1kg/prompt-cache-what-is-prompt-caching-a-comprehensive-guide-e6cbae48e6a3): 미리 계산된 어텐션 상태를 저장하고 재사용해 LLM을 최적화합니다.
- **구조화**
  -  [Token-Oriented Object Notation](https://github.com/toon-format/toon): LLM 프롬프트를 위한 간결하고 결정적인 JSON 형식입니다.

### 청킹

청킹 전략은 RAG 시스템 설계에서 가장 중요한 결정 중 하나이며 검색 정밀도와 컨텍스트 품질에 직접 영향을 미칩니다. 최적의 방식은 문서 유형, 도메인 특성, 질의 패턴에 따라 달라집니다.

- **[Fixed-Size Chunking](https://medium.com/@anuragmishra_27746/five-levels-of-chunking-strategies-in-rag-notes-from-gregs-video-7b735895694d)**
  - **사용 사례**: 구조가 덜 중요한 단순한 문서
  - **특징**: 텍스트를 일정한 크기(일반적으로 256~512 토큰)로 나누고 10~20%의 겹침을 설정합니다
  - **장점**: 구현이 간단하고 청크 크기를 예측할 수 있으며 처리 효율이 높습니다
  - **단점**: 문장과 단락이 잘리고 문서 구조와 의미 단위가 손실될 수 있습니다
  - **Implementation**: [CharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/) (LangChain), [SentenceSplitter](https://docs.llamaindex.ai/en/stable/api_reference/node_parsers/sentence_splitter/) (LlamaIndex)

- **[Recursive Chunking](https://medium.com/@AbhiramiVS/chunking-methods-all-to-know-about-it-65c10aa7b24e)**
  - **사용 사례**: 계층 구조가 있는 문서(Markdown, HTML, 코드)
  - **특징**: 구분자(단락 → 문장 → 단어)를 기준으로 목표 크기에 도달할 때까지 재귀적으로 나눕니다
  - **장점**: 자연스러운 경계와 문서 계층을 보존해 의미적 일관성을 높입니다
  - **단점**: 더 복잡하고 청크 크기가 일정하지 않으며 구분자를 신중히 설정해야 합니다
  - **Implementation**: [RecursiveCharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/) (LangChain)

- **[Document-Based Chunking](https://medium.com/@david.richards.tech/document-chunking-for-rag-ai-applications-04363d48fbf7)**
  - **사용 사례**: Markdown 제목, PDF 섹션, 데이터베이스 레코드처럼 섹션이 명확한 구조화 문서
  - **특징**: 문서 메타데이터, 서식 단서 또는 구조 요소를 기준으로 구간을 나눕니다
  - **장점**: 문서 구조와 맥락을 유지하고 메타데이터가 풍부한 검색을 지원합니다
  - **단점**: 구조화된 입력이 필요하며 너무 크거나 작은 청크가 생길 수 있습니다
  - **구현**: [MarkdownHeaderTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/) (LangChain)
  - **멀티모달**: [OpenCLIP](https://github.com/mlfoundations/open_clip) 같은 모델로 이미지와 텍스트를 처리합니다

- **[Semantic Chunking](https://www.youtube.com/watch?v=8OJC21T2SL4&t=1933s)**
  - **사용 사례**: 의미적 일관성이 중요한 문서(서사, 기술 문서)
  - **특징**: 임베딩 유사도를 사용해 자연스러운 의미 경계를 찾습니다
  - **장점**: 의미 단위를 보존하고 콘텐츠에 맞춰 조정되어 검색 관련성을 높입니다
  - **단점**: 계산 비용이 크고 임베딩 모델이 필요하며 청크 크기를 예측하기 어렵습니다
  - **적합한 용도**: 맥락 보존이 무엇보다 중요한 고품질 검색

- **[Agentic Chunking](https://youtu.be/8OJC21T2SL4?si=8VnYaGUaBmtZhCsg&t=2882)**
  - **사용 사례**: 지능적인 분할 판단이 필요한 복잡한 문서
  - **특징**: LLM으로 콘텐츠를 분석해 최적의 청크 경계를 결정합니다
  - **장점**: 적응성이 높고 맥락을 이해하며 도메인 지식을 적용할 수 있습니다
  - **단점**: 비용이 높고 처리 속도가 느리며 LLM API 접근이 필요합니다
  - **적합한 용도**: 표준 청킹으로는 충분하지 않은 전문 분야

- **[Adaptive Chunking](https://github.com/ekimetrics/adaptive-chunking)**
  - **사용 사례**: 문서마다 서로 다른 분할 전략이 효과적인 혼합 문서 모음
  - **특징**: 내재적 지표로 여러 청킹 방식을 평가하고 문서별로 최적의 방식을 선택합니다
  - **장점**: 일률적인 청킹보다 유연하고 구조와 의미적 일관성을 보존하며 사용자 지정 분할기와 지표를 지원합니다
  - **단점**: 고정 크기 또는 재귀 청킹보다 평가 부담과 구현 복잡도가 커집니다

**청킹 모범 사례:**
- **겹침 전략**: 경계 전후의 맥락을 유지하도록 10~20% 겹치게 합니다
- **크기 최적화**: 청크 크기의 균형을 맞춥니다(클수록 맥락이 많고, 작을수록 정밀도가 높습니다)
- **메타데이터 보존**: 문서 구조, 제목, 서식을 청크 메타데이터에 유지합니다
- **다중 세분성**: 계층형 접근 방식(검색에는 작은 청크, 맥락에는 큰 청크)을 고려합니다

### 임베딩

임베딩은 RAG 시스템의 의미 검색을 구성하는 기반입니다. 임베딩 모델 선택은 검색 품질에 큰 영향을 줍니다.

- **모델 선택**
  - **[MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard)**: 여러 작업과 언어에서 임베딩 모델을 평가하는 종합 벤치마크입니다. 사용 사례(검색, 클러스터링, 분류)에 관련된 작업에서 성능이 좋은 모델을 선택하세요.
  - **모델 특성**: 다음 기준에 따라 모델을 평가합니다.
    - **차원**: 더 높은 차원(768~1024)은 일반적으로 품질이 우수하지만 저장 및 연산 비용이 증가합니다
    - **컨텍스트 길이**: 모델이 문서 청크 크기를 지원하는지 확인합니다
    - **다국어 지원**: 국제적인 애플리케이션에 필요합니다
    - **도메인 특화**: 범용 모델과 도메인 특화 모델(예: 과학, 법률, 의료)을 비교합니다
  
- **사용자 지정 임베딩**
  - **미세 조정**: 대조 학습, 트리플렛 손실 또는 지도 미세 조정을 사용해 사전 학습 모델을 도메인에 맞게 조정합니다
  - **처음부터 학습**: 레이블이 지정된 데이터가 충분한 고도로 전문화된 도메인에 사용합니다
  - **멀티모달 임베딩**: 텍스트, 이미지 또는 오디오 이해가 필요한 애플리케이션에 사용합니다(예: CLIP, ImageBind)
  - **앙상블 방법**: 여러 임베딩 모델을 결합해 견고성을 높입니다

### 검색

- **검색 방법**
  - [Vector Store Flat Index](https://weaviate.io/developers/academy/py/vector_index/flat)
    - 단순하고 효율적인 검색 방식입니다.
    - 콘텐츠를 벡터화해 평탄한 콘텐츠 벡터로 저장합니다.
  - [Hierarchical Index Retrieval](https://pixion.co/blog/rag-strategies-hierarchical-index-retrieval)
    - 데이터를 계층별로 세분화합니다.
    - 계층 순서에 따라 검색을 수행합니다.
  - [Hypothetical Questions](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - 데이터베이스 청크와 질의 간 유사도를 높이는 데 사용합니다(HyDE와 동일한 목적입니다).
    - LLM을 사용해 각 텍스트 청크에 대한 구체적인 질문을 생성합니다.
    - 생성된 질문을 벡터 임베딩으로 변환합니다.
    - 검색할 때 질의를 질문 벡터 인덱스와 대조합니다.
  - [Hypothetical Document Embeddings (HyDE)](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - 데이터베이스 청크와 질의 간 유사도를 높이는 데 사용합니다(가상 질문과 동일한 목적입니다).
    - LLM을 사용해 질의를 바탕으로 가상의 응답을 생성합니다.
    - 이 응답을 벡터 임베딩으로 변환합니다.
    - 질의 벡터와 가상 응답 벡터를 비교합니다.
  - [Small to Big Retrieval](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/small_to_big_rag/small_to_big_rag.ipynb)
    - 검색에는 작은 청크를, 컨텍스트에는 큰 청크를 사용해 검색 품질을 높입니다.
    - 작은 하위 청크를 더 큰 상위 청크와 연결합니다.
  - [Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval)
    - 청킹 과정에서 일반적으로 손실되는 문서 맥락을 보존해 RAG 검색 정확도를 높입니다.
    - 임베딩 및 인덱싱 전에 각 텍스트 청크에 모델이 생성한 짧은 요약을 더해 컨텍스트 임베딩과 컨텍스트 BM25를 만듭니다.
    - 이 방식을 재순위화와 함께 사용하면 의미 및 어휘 일치도가 모두 향상되고 검색 실패율이 낮아집니다.
  - [Adaptive Retrieval](https://arxiv.org/abs/2403.14403)
    - 생성 중 언제, 어느 정도 검색할지 동적으로 결정합니다.
  - [Query Reformulation and Expansion](https://haystack.deepset.ai/cookbook/query-expansion)
    - 재현율을 높이기 위해 검색 전에 질의를 자동으로 다시 쓰거나 확장합니다.
    - 길거나 모호한 사용자 질의에 유용합니다.
- **[Re-ranking](https://developer.nvidia.com/blog/enhancing-rag-pipelines-with-re-ranking/)**: 처음 검색된 문서의 순서를 바꿔 질의와 의미적으로 가장 관련 있는 문서를 우선시함으로써 RAG 파이프라인의 검색 결과를 개선합니다.

### 판단 및 결정 모델

판단 모델은 검색된 콘텐츠, 질의, 생성된 응답 또는 파이프라인 상태에 대해 범위가 제한된 의미적 결정을 내립니다. 생성형 LLM과 달리 RAG 파이프라인에서 재순위화, 필터링, 라우팅, 검증 및 평가를 위한 프로그래밍 가능한 의사결정 지점으로 사용할 수 있습니다.

- **[Jev](https://typesafe.ai/)**: 빠르고 타입이 지정된 결정을 내리는 TypeSafe AI의 System One 모델입니다. RAG에서는 재순위화, 필터링, 라우팅, 검증, 가드레일 및 평가를 지원합니다.
- **[AnyJev](https://github.com/nokia-applied-research/AnyJev)**: 오픈 LLM을 Jev 방식의 타입 지정 결정 모델로 바꾸며, 레이블 없이 편향을 보정하고 임계값 기반 결정에 선택적 보정을 적용합니다.

### 응답 품질 및 안전성

프로덕션 RAG 시스템에서는 고품질의 안전하고 신뢰할 수 있는 응답을 보장하는 것이 중요합니다.

- **환각 완화**
  - **[Detection Techniques](https://machinelearningmastery.com/rag-hallucination-detection-techniques/)**: 모델이 근거 없는 정보를 생성하는 경우를 식별하는 방법을 구현합니다
  - **근거 확인**: 생성된 주장을 검색된 맥락과 대조합니다
  - **신뢰도 점수화**: 출처 품질을 바탕으로 생성된 응답에 신뢰도 점수를 부여합니다
  - **출처 표시**: 모든 사실 주장에 인용을 요구합니다
  - **검색 품질**: 검색 정밀도를 높여 환각 위험을 줄입니다

- **가드레일 및 안전성**
  - **[Implementation Guide](https://developer.ibm.com/tutorials/awb-how-to-implement-llm-guardrails-for-rag-applications/)**: 안전 메커니즘 구현을 위한 종합적인 접근 방식입니다
  - **콘텐츠 조정**: 입력 및 출력 단계에서 유해하거나 편향되었거나 부적절한 콘텐츠를 필터링합니다
  - **편향 완화**: 검색된 콘텐츠와 생성된 응답의 편향을 감지하고 완화합니다
  - **팩트체크**: 권위 있는 출처나 지식 베이스와 대조해 주장을 확인합니다
  - **유해성 감지**: 분류기를 사용해 유해한 콘텐츠를 식별하고 필터링합니다

- **프롬프트 인젝션 방지**
  - **[Security Guide](https://hiddenlayer.com/innovation-hub/prompt-injection-attacks-on-llms/)**: 프롬프트 인젝션 공격을 이해하고 방지하는 안내서입니다
  - **입력 검증**: 허용 목록, 길이 제한, 패턴 매칭을 사용해 모든 외부 입력을 엄격히 검증하고 정제합니다
  - **콘텐츠 분리**: 명확한 구분자, 템플릿 시스템, 역할 기반 프롬프트를 사용해 지시와 사용자 데이터를 분리합니다
  - **출력 모니터링**: 응답에서 이상 징후, 예기치 않은 동작 또는 보안 위반을 지속적으로 모니터링합니다
  - **요청 속도 제한**: 체계적인 공격을 방지하도록 속도 제한과 악용 감지를 구현합니다
  - **샌드박싱**: LLM 실행 환경을 격리해 인젝션이 성공했을 때의 잠재적 피해를 제한합니다

## 📊 지표 및 평가

### 임베딩 유사도 지표

이 지표는 임베딩 간 유사도를 측정하며, RAG 시스템이 외부 문서나 데이터 소스를 얼마나 효과적으로 검색하고 통합하는지 평가하는 데 중요합니다. 적절한 유사도 지표를 선택하면 RAG 시스템의 성능과 정확도를 최적화할 수 있습니다. 특정 분야의 미묘한 차이를 반영하고 관련성을 높이기 위해 맞춤형 지표를 개발할 수도 있습니다.

- **[Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity)**

  - 다차원 공간에서 두 벡터 사이 각도의 코사인 값을 측정합니다.
  - 벡터 방향이 의미 정보를 나타내는 텍스트 임베딩 비교에 매우 효과적입니다.
  - RAG 시스템에서 질의 임베딩과 문서 임베딩 간 의미적 유사도를 측정하는 데 흔히 사용됩니다.

- **[Dot Product](https://en.wikipedia.org/wiki/Dot_product)**

  - 두 숫자열에서 서로 대응하는 항목의 곱을 모두 더합니다.
  - 벡터가 정규화된 경우 코사인 유사도와 같습니다.
  - 단순하고 효율적이며 대규모 연산에서 하드웨어 가속과 함께 자주 사용됩니다.

- **[Euclidean Distance](https://en.wikipedia.org/wiki/Euclidean_distance)**

  - 유클리드 공간에서 두 점 사이의 직선 거리를 계산합니다.
  - 임베딩에도 사용할 수 있지만, 고차원 공간에서는 "[차원의 저주](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions)"로 효과가 떨어질 수 있습니다.
  - 차원 축소 후 K-means 같은 클러스터링 알고리즘에서 자주 사용됩니다.

- **[Jaccard Similarity](https://en.wikipedia.org/wiki/Jaccard_index)**
  - 두 유한 집합의 교집합 크기를 합집합 크기로 나누어 집합 간 유사도를 측정합니다.
  - Bag-of-Words 모델이나 n-gram 비교처럼 토큰 집합을 비교할 때 유용합니다.
  - LLM이 생성하는 연속형 임베딩에는 적용하기 어렵습니다.

> **참고:** 코사인 유사도와 내적은 일반적으로 고차원 임베딩의 유사도를 측정하는 가장 효과적인 지표로 여겨집니다.

### 응답 평가 지표

RAG 솔루션의 응답 평가는 다양한 지표를 사용해 언어 모델 출력의 품질을 평가합니다. 다음은 응답을 평가하는 체계적인 방법입니다.

- **자동 벤치마킹**

  - **[BLEU](https://en.wikipedia.org/wiki/BLEU):** 기계 생성 출력과 참조 출력 간 n-gram 중복을 평가해 정밀도를 파악합니다.
  - **[ROUGE](<https://en.wikipedia.org/wiki/ROUGE_(metric)>):** 참조 출력과 n-gram, 스킵 바이그램 또는 최장 공통 부분 수열을 비교해 재현율을 측정합니다.
  - **[METEOR](https://en.wikipedia.org/wiki/METEOR):** 기계 번역의 정확한 일치, 어간 추출, 동의어, 정렬을 중점적으로 평가합니다.

- **사람의 평가**
  사람이 다음 기준으로 응답을 평가합니다.
  - **관련성:** 사용자 질의와의 부합 정도
  - **유창성:** 문법 및 문체의 품질
  - **사실 정확성:** 권위 있는 출처를 기준으로 주장을 확인하는 정도
  - **일관성:** 응답 내 논리적 일관성
  
  다음과 같은 방법이 있습니다.
  - **[주석 큐](https://docs.langchain.com/langsmith/annotation-queues):** 사람이 특정 실행 기록에 피드백을 추가할 수 있도록 간결하고 목적에 맞는 화면을 제공합니다.

- **모델 평가**
  사전 학습된 평가기를 활용해 다양한 기준으로 출력을 벤치마킹합니다.

  - **[TuringBench](https://turingbench.ist.psu.edu/):** 다양한 언어 벤치마크에 대한 종합 평가를 제공합니다.
  - **[Hugging Face Evaluate](https://huggingface.co/docs/evaluate/en/index):** 사람의 선호도와의 일치도를 계산합니다.

- **주요 평가 차원**
  - **근거성:** 응답이 제공된 맥락에 전적으로 기반하는지 평가합니다. 근거성이 낮으면 환각이거나 관련 없는 정보에 의존할 수 있습니다.
  - **완전성:** 응답이 질의의 모든 측면에 답하는지 측정합니다.
  - **접근 방식:** AI 지원 검색 점수화 및 프롬프트 기반 의도 검증
  - **활용도:** 검색된 데이터가 응답에 기여하는 정도를 평가합니다.
  - **분석:** LLM을 사용해 검색된 청크가 응답에 포함되었는지 확인합니다.

#### 도구

이 도구는 사용자 피드백 추적, 질의 상호작용 기록, 여러 평가 지표의 시간 경과별 비교 등 RAG 시스템 성능 평가를 지원합니다.

- **[LangFuse](https://github.com/langfuse/langfuse)**: LLM 지표 추적, 관측 가능성, 프롬프트 관리를 위한 오픈 소스 도구입니다.
- **[Opik](https://github.com/comet-ml/opik)**: LLM 관측 가능성, 평가, 프롬프트 최적화를 위한 오픈 소스 플랫폼입니다.
- **[Ragas](https://docs.ragas.io/en/stable/)**: RAG 파이프라인 평가를 지원하는 프레임워크입니다.
- **[WFGY Problem Map](https://github.com/onestardao/WFGY/tree/main/ProblemMap)**: RAG 및 LLM의 실패를 진단하는 16가지 모드의 체크리스트입니다.
- **[LangSmith](https://docs.smith.langchain.com/)**: 프로덕션 수준의 LLM 애플리케이션을 구축하고 애플리케이션을 면밀히 모니터링 및 평가할 수 있는 플랫폼입니다.
- **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)**: 텍스트 품질 평가를 위해 BLEU, ROUGE 등의 지표를 계산하는 도구입니다.
- **[Weights & Biases](https://wandb.ai/wandb-japan/rag-hands-on/reports/Step-for-developing-and-evaluating-RAG-application-with-W-B--Vmlldzo1NzU4OTAx)**: 실험을 추적하고 지표를 기록하며 성능을 시각화합니다.

## 💾 데이터베이스

벡터 데이터베이스는 임베딩의 효율적인 저장과 유사도 검색을 제공하는 RAG 시스템의 핵심 구성 요소입니다. 적합한 데이터베이스는 규모, 지연 시간 요구 사항, 배포 모델(클라우드 또는 온프레미스), 필요한 기능(하이브리드 검색, 필터링 등)에 따라 선택합니다. 다음은 RAG 애플리케이션에 적합한 데이터베이스 시스템 목록입니다.

### 벤치마크

- [벡터 데이터베이스 선택하기](https://benchmark.vectorview.ai/vectordbs.html)

### 분산 데이터 처리 및 서빙 엔진:

- [Apache Cassandra](https://cassandra.apache.org/doc/latest/cassandra/vector-search/concepts.html): 분산형 NoSQL 데이터베이스 관리 시스템입니다.
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-vector-search): 벡터 검색 기능이 통합된 글로벌 분산형 멀티모델 데이터베이스 서비스입니다.
- [Vespa](https://vespa.ai/): 실시간 애플리케이션용으로 설계된 오픈 소스 빅데이터 처리 및 서빙 엔진입니다.

### 벡터 기능이 있는 검색 엔진:

- [Elasticsearch](https://www.elastic.co/elasticsearch): 기존 검색 기능과 함께 벡터 검색 기능을 제공합니다.
- [OpenSearch](https://github.com/opensearch-project/OpenSearch): Elasticsearch에서 분기된 분산 검색 및 분석 엔진입니다.

### 벡터 데이터베이스:

- [Chroma DB](https://github.com/chroma-core/chroma): AI에 최적화된 오픈 소스 임베딩 데이터베이스입니다.
- [Milvus](https://github.com/milvus-io/milvus): AI 기반 애플리케이션을 위한 오픈 소스 벡터 데이터베이스입니다.
- [Pinecone](https://www.pinecone.io/): 머신러닝 워크플로에 최적화된 서버리스 벡터 데이터베이스입니다.
- [Oracle AI Vector Search](https://www.oracle.com/database/ai-vector-search/#retrieval-augmented-generation): Oracle Database에 벡터 검색 기능을 통합해 벡터 임베딩 기반 의미 검색을 지원합니다.

### 관계형 데이터베이스 확장:

- [Pgvector](https://github.com/pgvector/pgvector): PostgreSQL에서 벡터 유사도 검색을 지원하는 오픈 소스 확장입니다.
- [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s): BM25 계열 어휘 검색을 위한 PostgreSQL 확장으로, 키워드 및 하이브리드 검색 파이프라인에 유용합니다.

### 기타 데이터베이스 시스템:

- [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-database): 벡터 검색 기능이 통합된 글로벌 분산형 멀티모델 데이터베이스 서비스입니다.
- [Couchbase](https://www.couchbase.com/products/vector-search/): 분산형 NoSQL 클라우드 데이터베이스입니다.
- [Lantern](https://lantern.dev/): 개인정보 보호를 고려한 개인 검색 엔진입니다.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/storing/vector_stores/): 신속한 실험을 위해 간단한 인메모리 벡터 저장소를 사용합니다.
- [Neo4j](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/): 그래프 데이터베이스 관리 시스템입니다.
- [Qdrant](https://github.com/neo4j/neo4j): 유사도 검색용으로 설계된 오픈 소스 벡터 데이터베이스입니다.
- [Redis Stack](https://redis.io/docs/latest/develop/interact/search-and-query/): 데이터베이스, 캐시, 메시지 브로커로 사용하는 인메모리 데이터 구조 저장소입니다.
- [SurrealDB](https://github.com/surrealdb/surrealdb): 시계열 데이터에 최적화된 확장 가능한 멀티모델 데이터베이스입니다.
- [Weaviate](https://github.com/weaviate/weaviate): 클라우드 네이티브 오픈 소스 벡터 검색 엔진입니다.

### 벡터 검색 라이브러리 및 도구:

- [FAISS](https://github.com/facebookresearch/faiss): 대규모 데이터셋을 처리하고 최근접 이웃을 빠르게 검색하도록 최적화된, 밀집 벡터의 효율적인 유사도 검색 및 클러스터링 라이브러리입니다.

## 🚀 프로덕션 고려 사항

프로덕션 수준의 RAG 시스템을 구축하려면 핵심 검색 및 생성 파이프라인 외에도 여러 중요 사항을 다뤄야 합니다.

### 확장성 및 성능

- **인덱싱 처리량**: 증분 업데이트를 통해 대량 문서 수집을 처리할 수 있도록 파이프라인을 설계합니다
- **질의 지연 시간**: 효율적인 인덱싱(HNSW, IVF), 캐싱 전략, 병렬 처리를 통해 검색 속도를 최적화합니다
- **동시 요청**: 트래픽이 많은 상황에 대비해 연결 풀링, 요청 큐잉, 부하 분산을 구현합니다
- **리소스 관리**: GPU/CPU 사용률, 메모리 소비량, 데이터베이스 연결 풀을 모니터링합니다

### 안정성 및 모니터링

- **관측 가능성**: 포괄적인 로깅, 추적, 지표 수집(지연 시간, 처리량, 오류율)을 구현합니다
- **상태 확인**: 임베딩 서비스 가용성, 벡터 데이터베이스 연결, LLM API 상태를 모니터링합니다
- **오류 처리**: 재시도 로직, 서킷 브레이커, 우아한 성능 저하 전략을 구현합니다
- **A/B 테스트**: 서로 다른 검색 전략, 청킹 방식, 프롬프트 템플릿을 비교합니다

### 데이터 관리

- **증분 업데이트**: 전체 재인덱싱 없이 실시간 또는 거의 실시간으로 문서를 인덱싱할 수 있도록 지원합니다
- **버전 관리**: 문서 버전, 임베딩 모델 버전, 프롬프트 템플릿을 추적합니다
- **데이터 품질**: 손상된 임베딩, 누락된 메타데이터, 오래된 콘텐츠를 감지하는 검증 파이프라인을 구현합니다
- **백업 및 복구**: 벡터 인덱스와 메타데이터 저장소를 정기적으로 백업합니다

### 보안 및 규정 준수

- **접근 제어**: 인증, 권한 부여, 감사 로그를 구현합니다
- **데이터 개인정보 보호**: 저장 및 전송 중인 데이터를 암호화하고 데이터 상주 요건을 지원합니다
- **콘텐츠 필터링**: 콘텐츠 조정, 개인 식별 정보(PII) 감지, 규정 준수 검사를 적용합니다
- **요청 속도 제한**: 악용을 방지하고 리소스를 공정하게 배분합니다

### 비용 최적화

- **임베딩 캐싱**: 자주 사용하는 임베딩을 캐시해 API 비용을 줄입니다
- **선택적 검색**: 질의 라우팅을 사용해 불필요한 검색 작업을 피합니다
- **모델 선택**: 임베딩 및 LLM 모델을 선택할 때 비용과 성능의 균형을 맞춥니다
- **적정 리소스 규모 조정**: 실제 사용 패턴에 따라 인프라를 최적화합니다

## 🔌 플랫폼별 RAG 구현

플랫폼별 자세한 구현 가이드는 다음 문서를 참조하세요.

- [Supabase 통합 가이드](docs/supabase-integration.md): Supabase, pgvector, Edge Functions를 사용해 RAG 시스템을 구축합니다

## 💡 모범 사례

### 청킹 전략

- **도메인 인식 청킹**: 맥락을 더 잘 보존하도록 고정 크기보다 의미 또는 문서 구조 기반 청킹을 사용합니다
- **겹침 관리**: 경계 간 맥락을 유지하도록 전략적으로 10~20% 겹치게 합니다
- **메타데이터 보존**: 문서 구조, 제목, 서식 단서를 청크 메타데이터에 유지합니다
- **다중 세분성**: 계층형 청킹(검색에는 작은 청크, 맥락에는 큰 청크)을 고려합니다

### 임베딩 선택

- **모델 평가**: MTEB 리더보드와 도메인별 벤치마크를 사용해 적절한 모델을 선택합니다
- **차원 최적화**: 임베딩 차원의 균형을 맞춥니다(높을수록 품질이 좋고 낮을수록 검색이 빠릅니다)
- **도메인 미세 조정**: 가능하면 도메인별 데이터로 임베딩을 미세 조정합니다
- **일관성**: 인덱싱과 질의에 동일한 임베딩 모델을 사용합니다

### 검색 최적화

- **하이브리드 검색**: 재현율을 높이기 위해 의미(벡터) 검색과 어휘(BM25/키워드) 검색을 결합합니다
- **재순위화**: 정밀도를 높이도록 크로스 인코더나 학습 기반 순위화 모델을 적용합니다
- **질의 이해**: 질의 분류, 의도 감지, 질의 확장을 구현합니다
- **결과 다양화**: 다양성 제약을 적용해 중복 결과를 방지합니다

### 프롬프트 엔지니어링

- **명확한 지시**: 검색된 맥락을 어떻게 사용할지 명확히 지시합니다
- **출처 표시**: 인용을 요청하고 제공된 맥락에 근거하도록 요구합니다
- **Few-Shot 예시**: 원하는 응답 형식과 품질을 보여 주는 예시를 포함합니다
- **컨텍스트 압축**: 맥락이 제한을 초과하면 요약이나 추출 등의 기법을 사용합니다

### 평가 프레임워크

- **다차원 지표**: 관련성, 정확성, 완전성, 근거성을 평가합니다
- **사람 참여형 절차**: 지속적인 개선을 위해 사람의 피드백을 반영합니다
- **합성 평가**: 자동 테스트를 위한 테스트 질의와 기대 출력을 생성합니다
- **프로덕션 모니터링**: 사용자 만족도, 질의 패턴, 실패 유형을 추적합니다

### 반복적 개선

- **피드백 루프**: 사용자 피드백, 질의 로그, 성능 지표를 수집합니다
- **실험**: 통제된 실험으로 개선 사항(청킹, 검색, 프롬프트)을 체계적으로 테스트합니다
- **모델 업데이트**: 임베딩 모델 업그레이드 및 마이그레이션 전략을 계획합니다
- **문서화**: 아키텍처, 결정 사항, 운영 절차를 명확히 문서화합니다

---

## 기여하기

커뮤니티가 함께 만들고 계속 발전시키는 자료입니다. 기여를 환영합니다! 리소스를 추가하거나 오류를 수정하거나 구성을 개선하려면 다음 단계를 따르세요.

1. 저장소를 포크합니다
2. 변경 사항을 위한 브랜치를 만듭니다
3. 명확한 설명과 함께 풀 리퀘스트를 제출합니다

새 항목을 추가할 때는 링크가 작동하고 설명이 정확하고 간결하며 알맞은 섹션에 포함되는지 확인하세요.

## 라이선스

이 프로젝트는 [CC0 1.0 Universal](LICENSE) 라이선스를 따릅니다.
