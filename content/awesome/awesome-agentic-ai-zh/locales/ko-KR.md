<div align="right">
  <strong>한국어</strong> | <a href="./README.zh-Hans.md">간체 중국어</a> | <a href="./README.en.md">영어</a>
</div>

<div align="center" markdown="1">

![Stage 0–2 공통 기초에서 CLI와 Agent 경로로 갈라지고, Stage 5·8을 공유한 뒤 필요에 따라 역할 경로를 선택](resources/diagrams/banner.svg)

# awesome-agentic-ai-zh

**🤖 「AI Agent가 무엇인가」에서 「신뢰할 수 있는 시스템을 만들 수 있는 곳」까지 이어지는 학습 지도**

**먼저 하나의 경로를 고르고, 그다음은 한 걸음씩 가세요. 핵심 개념·실습·엄선 자원은 모두 순서대로 배치돼 있습니다.**

[![License](https://img.shields.io/badge/license-MIT-blue?style=flat)](LICENSE)
[![繁中](https://img.shields.io/badge/語言-繁體中文-red?style=flat)](README.md)
[![简中](https://img.shields.io/badge/語言-简体中文-orange?style=flat)](README.zh-Hans.md)
[![EN](https://img.shields.io/badge/lang-English-blue?style=flat)](README.en.md)
![GitHub stars](https://img.shields.io/github/stars/WenyuChiou/awesome-agentic-ai-zh?style=flat&logo=github)
[![온라인 독서 사이트](https://img.shields.io/badge/線上閱讀-立即開始-2ea44f?style=flat)](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)

</div>

> 📱 모바일에서 읽을 때는 [온라인 독서 사이트](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)를 이용하세요.

## 🎯 이 지도가 무엇을 도와주나요?

**AI Agent**(AI 에이전트)는 「사람의 목표를 위해 다음 단계를 스스로 판단하고 행동하는 AI 시스템」입니다. 목표를 주면 현재 상황을 보고 다음 단계를 선택하고, 필요하면 도구를 사용한 뒤 결과에 따라 계속 진행·수정·정지하거나 사람에게 제어권을 돌립니다. 사람을 대신해 작업을 자동으로 끝낼 수 있지만, 사람이 준 규칙과 권한 범위 안에서만 움직입니다. 한 번만 답하는 챗봇이나 매 단계가 정해진 스크립트는 반드시 Agent라고 할 수 없습니다. 이 repo는 처음부터 모든 용어를 알기를 요구하지 않고, 다음 세 가지를 순서대로 경험하게 합니다:

1. **먼저 기초 이해**: LLM(Large Language Model, 언어를 읽고 쓰는 모델), Prompt, API(Application Programming Interface, 프로그램이 서비스를 호출하는 인터페이스), Token이란 무엇인가.
2. **그다음 무언가 만들기**: 모델이 도구를 호출하고, Agent Loop를 돌며, 문서를 읽고 사물을 기억하게 하기.
3. **마지막으로 신뢰되게 하기**: 권한, Eval, 사람 승인, 관측, 실패 복구 추가하기.

여기서의 역할은 **학습 로드맵 + 엄선 자원 + 바로 실행 가능한 작은 연습**입니다. 전체 장이 필요하면 별도의 백과사전을 다시 쓰는 대신 공식 문서, [Datawhale Hello-Agents](https://github.com/datawhalechina/hello-agents) 또는 해당 Cookbook으로 안내합니다. 모델에 연결할 때는 각 연습에서 클라우드 또는 로컬 경로를 설명합니다.

중요한 기술 용어는 처음 나올 때 먼저 풀어서 설명하고, 그 위에 공식 영어 표기를 남깁니다. 용어를 잊었다면 [용어집](resources/glossary.md)을 바로 찾으세요.

## 🚀 지금 바로 시작

1. **프로그래밍을 전혀 해본 적 없음**: [Stage 0: 기초 준비](stages/00-foundations.md)부터. API나 CLI Agent가 익숙하지 않으면 [입문 설정 가이드](resources/setup-guide.md)를 함께 보세요.
2. **이미 Python·Git·API를 다룰 줄 앎**: [Stage 1: LLM 기초](stages/01-llm-basics.md)부터.
3. **어떤 경로로 갈지 아직 모르겠음**: 아래 Track A／Track B 선택 표를 먼저 보세요.

Track A 또는 Track B로 가기 전에 먼저 Stage 0–2를 확인합니다. 일상 사용자 경로만 가는 사람은 역할 가이드를 바로 열면 됩니다.

| 지금 하고 싶은 것? | 추천 경로 | 경로 입구 |
|---|---|---|
| Claude Code, Codex, OpenCode 같은 CLI Agent로 작업 끝내기 | **Track A — CLI 파워 유저** | [A1: CLI Agent 고르기](tracks/cli/A1-cli-intro.md) |
| 직접 Agent·도구 루프·Workflow·서비스 작성하기 | **Track B — Agent 빌더** | [Stage 3: 첫 Agent Loop](stages/03-tool-use-and-hello-agent.md) |
| 일상에서 AI를 안전하게 쓰기만 하고 당분간은 안 짜기 | **일상 사용자 경로** | [일상 사용자 가이드](branches/for-everyday-users.md) |

<details markdown="1">
<summary>💻 펼치기: 로컬로 다운로드</summary>

```powershell
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
cd awesome-agentic-ai-zh
```

다운로드 후에는 먼저 `stages/00-foundations.md`를 열거나, 위 표에서 자신에게 맞는 첫 역으로 바로 이동하세요.

</details>

## Stage 0부터 Stage 8까지, 그리고 Stage 7.5 읽기 역 있음

![AI Agent 학습 지도](resources/diagrams/learning-map.png)

이 지도는 합쳐서 **주제 Stage 8개 + Stage 0 준비 관문 + Stage 7.5 심화 읽기 역**, 즉 **학습역 10개**로 이루어집니다. Track A／B 독자는 먼저 **Stage 0–2 공통 기초**를 확인합니다. 이미 Python·Git·API를 다루는 사람은 Stage 0을 건너뛸 수 있습니다. 일상 사용자는 역할 가이드로 바로 갈 수 있습니다.

### 공통 기초: Stage 0–2

| Stage | 이 단계가 해결하는 것? | 완료 후 할 수 있는 것? |
|---|---|---|
| **0** · [기초 준비](stages/00-foundations.md) | 컴퓨터와 기본 도구 준비가 되었나요? | Python으로 공개 API를 호출하고, JSON(JavaScript Object Notation, 프로그램 간 데이터 교환에 자주 쓰는 텍스트 형식)을 읽고, Git으로 결과를 저장합니다 |
| **1** · [LLM 기초](stages/01-llm-basics.md) | LLM·Token·Context·모델의 차이는? | LLM을 호출하고, 필요에 따라 클라우드 또는 로컬 모델을 선택합니다 |
| **2** · [Prompt 설계](stages/02-prompt-engineering.md) | 목표·데이터·규칙·출력을 어떻게 명확히 전달하나요? | 고정 사례로 Zero-Shot·One-Shot·Few-Shot·CoT(Chain-of-Thought, 중간 단계로 문제를 처리하는 추론 프롬프트 기법)의 경계를 비교합니다 |

### Track A: CLI Agent를 써서 작업 완수하기

공식 순서는 `A1 → A2 → Stage 5 → A3 → Stage 8`입니다.

| 순서 | 이 단계가 해결하는 것? | 완료 후 할 수 있는 것? |
|---|---|---|
| **A1** · [CLI Agent 고르기](tracks/cli/A1-cli-intro.md) | OpenRouter·OpenCode·Pi·Ollama는 각각 무엇인가요? | 올바른 도구를 고르고 첫 작은 작업을 완료합니다 |
| **A2** · [반복 가능한 흐름 만들기](tracks/cli/A2-cli-workflow.md) | 규칙과 단계를 다음을 위해 어떻게 남기나요? | Project Instructions·Skill·재사용 워크플로를 씁니다 |
| **5** · [Claude Code 생태계](stages/05-claude-code-ecosystem.md) | MCP·Skills·Plugins·Hooks·Subagents의 구분은? | 먼저 핵심 5.1–5.4를 읽고, 5.5–5.8은 업무 필요에 따라 선택적으로 읽습니다 |
| **A3** · [실제 작업에 연결](tracks/cli/A3-cli-production.md) | 외부 도구·CI·팀 흐름을 어떻게 안전히 연결하나요? | 최소 권한·사람 확인·기록으로 통합을 완료합니다 |
| **8** · [Agent 조작 인터페이스](stages/08-agent-interfaces.md) | Agent는 브라우저·화면·Sandbox를 어떻게 조작하나요? | 작업에 CLI·Browser·Computer Use·API 중 무엇이 맞는지 판단합니다 |

### Track B: 처음부터 Agent 만들기

| 순서 | 이 단계가 해결하는 것? | 완료 후 할 수 있는 것? |
|---|---|---|
| **3** · [도구 사용과 첫 Agent Loop](stages/03-tool-use-and-hello-agent.md) | 모델은 도구를 안전히 호출하고 다음 단계를 어떻게 반복하나요? | 최대 라운드 수가 있고 인자를 검증하는 Agent Loop를 만듭니다 |
| **4** · [Workflow Graph와 Agent 프레임워크](stages/04-agent-frameworks.md) | 여러 단계를 어떻게 작업 지도로 그리나요? | Workflow·Agent·Graph·Framework를 선택합니다 |
| **5** · [Claude Code 생태계](stages/05-claude-code-ecosystem.md) | MCP·Skills·Plugins·Hooks·Subagents는 어떻게 협력하나요? | 도구·규칙·재사용 능력을 조합합니다 |
| **6** · [Memory·RAG(Retrieval-Augmented Generation, 먼저 관련 자료를 찾고 그에 기초해 답함)](stages/06-memory-rag.md) | Agent는 문서를 어떻게 검색하고 중요 정보를 저장·복구하나요? | 최소 RAG·long-term memory·contextual retrieval 흐름을 만듭니다 |
| **7** · [Agent 운영 엔지니어링: 테스트 가능·관측 가능·정지 가능·복구 가능](stages/07-multi-agent-production.md) | Agent는 실제 환경에서 어떻게 안정히 동작하나요? | Eval·관측·예산·Human-in-the-loop(HITL, 사람 승인)·복구를 추가합니다 |
| **7.5** · [심화 Agentic 개념 지도](stages/07.5-advanced-agentic-concepts.md) | 더 알 만한 가치가 있는 심화 패턴은? | 12개 개념 중 PAR loop·agent-as-judge 등 필요한 주제를 선택해 읽습니다 |
| **8** · [Agent 조작 인터페이스](stages/08-agent-interfaces.md) | Agent는 API 밖의 실제 환경을 어떻게 조작하나요? | Computer Use·Browser Use·Code Sandbox를 선택합니다 |

Stage 4에서는 먼저 **Workflow Graph**를 이해하고, 그것을 framework로 만듭니다. Stage 7에서 Eval·관측·승인·복구를 더해 같은 작업 지도가 안정히 돌아가게 합니다.

> 🔭 **학습 순서**: Stage 2 Prompt → Stage 3 **Agent Loop** → Stage 4 **Workflow Graph**／Framework → Stage 5 도구와 규칙 → Stage 6 **Context Engineering** → Stage 7 production. Prompt·Context·Harness·Loop·Graph는 함께 작동합니다. 이들은 5개 층위도 아니고, 서로 대체되는 제품 세대도 아닙니다.

A3 또는 Stage 7 완료 후 [Capstone 프로젝트](CAPSTONE.md)를 시작할 수 있습니다. 진도 기록은 [PROGRESS.md](PROGRESS.md)를 쓰세요.

<details markdown="1">
<summary>⏱️ 펼치기: 시간 추정(계획 참고, 마감 아님)</summary>

- **Track A**: 약 8–10주. 기존 CLI Agent를 써서 작업을 끝내는 것이 중점입니다.
- **Track B**: 본류 약 16–22주. 주당 5–8시간이면 보통 5–7개월 걸립니다.
- **Stage 5**는 도구와 규칙 Hub: Track A는 쓰는 법, Track B는 조합하는 법을 봅니다.
- **Stage 8**은 조작 인터페이스 Hub: Track A는 위임하는 법, Track B는 자기 Agent에 연결하는 법을 봅니다.

일정은 계획 참고일 뿐입니다. 눈앞의 한 걸음을 먼저 끝내면 되고, 지도 전체를 한 번에 읽을 필요는 없습니다.

</details>

### 자신의 역할에 따라 계속 가기

![연구·개발·교육·지식 작업·일상 사용은 다섯 가지 선택으로, 필요에 따라 읽고 모두 다 돌 필요 없음](resources/diagrams/branch-decision-tree.svg)

[정적 이미지](resources/diagrams/branch-decision-tree.png)

| 경로 | 대상 | 다루는 내용 |
|---|---|---|
| 🔬 [연구자](branches/for-researcher.md) | 대학원생, 포닥, PI | 문헌 증거, 재현 가능한 흐름, Multi-Agent Review |
| 💻 [개발자](branches/for-developer.md) | 소프트웨어 엔지니어 | CLI Delegation, Code Review, 테스트와 복원 |
| 🎓 [교사](branches/for-teacher.md) | 선생님, 강사 | 수업 준비, 피드백, 프라이버시와 교육 Prompt |
| 📊 [지식 근로자](branches/for-knowledge-worker.md) | 컨설턴트, PM, 분석가 | 이메일·회의·보고서 워크플로 |
| 👥 [일상 사용자](branches/for-everyday-users.md) | 반드시 코딩하지 않는 AI 사용자 | 글쓰기, 학습, 프라이버시와 안전한 사용 |

## 💡 막히지 않고 배우는 법

1. **한 번에 Stage 하나만**: 먼저 이 장의 핵심 질문에 답하세요.
2. **핵심어와 필독을 먼저**: 뒤 연습에서 바로 쓰입니다.
3. **첫 명령을 그대로 복사**: 먼저 오프라인 테스트를 돌리고, 빈 파일을 베끼지 않아도 됩니다.
4. **한 번에 하나만 바꾸기**: 끝내자마자 바로 테스트를 다시 돌려, 어느 변경이 결과를 냈는지 압니다.
5. **완료 조건을 만족하고 나서 다음으로**: 이해한 것과 해낼 수 있는 것은 다릅니다.

각 `starter.py`는 실행 가능한 참고입니다. 먼저 문제와 성공 조건을 읽고, 한 곳을 고친 뒤 테스트를 다시 돌리세요. 전체 방법은 [이 교재 사용법](docs/HOW_TO_USE.md)을 보세요.

## 📚 먼저 저장할 학습 입구

여기에는 가장 자주 쓰는 입구만 두고, 전체 목록은 [RESOURCES.md](RESOURCES.md)에 있습니다. 별표는 프로젝트 순위가 아니라 **학습 우선순위**를 나타냅니다.

<table>
  <thead><tr><th>용도</th><th>입구</th><th>언제 쓰나요?</th><th>중요도</th></tr></thead>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">시작</th><td><a href="resources/setup-guide.md">입문 설정 가이드</a></td><td>첫 설치와 실행</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="docs/HOW_TO_USE.md">이 교재 사용법</a></td><td>첫 실습 전</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="PROGRESS.md">학습 진도표</a></td><td>다음 단계나 완료 항목 기록</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">학습</th><td><a href="resources/glossary.md">핵심 용어집</a></td><td>Token·RAG·MCP 등 낯선 단어를 만났을 때</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="examples/README.md">실행 가능 예제 입구</a></td><td>오프라인 테스트와 작은 사례를 바로 돌리고 싶을 때</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cookbook.md">실전 Cookbook</a></td><td>Skill·MCP·Office·Zotero·로컬 LLM을 만들고 싶을 때</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="4">찾기</th><td><a href="resources/README.md">자원 창고</a></td><td>Guide·Catalog·Cookbook 중 무엇을 볼지 모를 때</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="RESOURCES.md">전체 자원 목록</a></td><td>공식 문서·강좌·커뮤니티·심화 읽기를 찾을 때</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cli-agents-guide.md">CLI Agent 선택 가이드</a></td><td>Track A 준비나 CLI 도구 비교</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/courses.md">강좌와 인증 지도</a></td><td>수료증·스킬 배지·인증 시험 구분</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
</table>

## 🤝 이 지도를 함께 개선하기

- 내용 오류·끊긴 링크·오래된 정보: [Issue](https://github.com/WenyuChiou/awesome-agentic-ai-zh/issues)를 여세요.
- 프로젝트나 학습 자원을 보태려면: 어느 Stage의 무엇을 가르치는지 덧붙이세요.
- PR을 낼 준비: 먼저 [CONTRIBUTING.md](CONTRIBUTING.md)와 [작성 규범](resources/style-guide.md)을 보세요.
- 최근 업데이트: [CHANGELOG.md](CHANGELOG.md)를 확인하세요.

<details markdown="1">
<summary>🧰 펼치기: 전체 기여 방법과 자동 검사</summary>

글 수정, 삼언어 미러 추가, 빠진 주제 보고, 또는 Stage／역할 경로 장기 유지가 가능합니다. GitHub 프로젝트 링크를 새로 추가하면 자동 검사가 아카이브 상태·라이선스·최근 업데이트 확인을 돕습니다. 수록 여부는 학습 가치에 따라 메인테이너가 판단합니다.

전체 역할과 규칙은 [CONTRIBUTORS.md](CONTRIBUTORS.md)에 있습니다.

</details>

## 🙏 중요한 영감과 관련 프로젝트

- [**Datawhale Hello-Agents**](https://github.com/datawhalechina/hello-agents) — 완전한 장과 심층 구현이 필요한 독자에게 적합.
- [**Datawhale 커뮤니티**](https://github.com/datawhalechina) — 중국어 머신러닝 공동 학습 커뮤니티로, 많은 신뢰할 만한 학습 입구를 제공.
- [**liyupi/ai-guide**](https://github.com/liyupi/ai-guide) — 폭넓은 자원 라이브러리 성향. 본 repo는 학습 순서를 담당합니다.

<details markdown="1">
<summary>📖 펼치기: 기여자와 인용 형식</summary>

[![Contributors](https://contrib.rocks/image?repo=WenyuChiou/awesome-agentic-ai-zh)](https://github.com/WenyuChiou/awesome-agentic-ai-zh/graphs/contributors)

```bibtex
@misc{awesome_agentic_ai_zh_2026,
  title = {awesome-agentic-ai-zh: A Structured Learning Roadmap for Agentic AI},
  author = {Chiou, Wenyu},
  year = {2026},
  url = {https://github.com/WenyuChiou/awesome-agentic-ai-zh}
}
```

</details>

## ☕ 후원과 연락

이 학습 지도는 MIT 라이선스로, 계속 무료 공개합니다. 일반 문의와 제안은 Issue를 이용하세요. 비공개 연락은 [wenyuchiou12@gmail.com](mailto:wenyuchiou12@gmail.com)으로 메일 주세요.

이 지도가 도움이 되었다면 ⭐ Star를 주시거나, [저자에게 커피를 사주세요](https://www.buymeacoffee.com/wenyuchiou).

## License

MIT. Maintained by [@WenyuChiou](https://github.com/WenyuChiou).
