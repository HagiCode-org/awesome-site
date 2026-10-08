<div align="center">

<a href="https://clawskills.sh/">
<img width="1500" height="500" alt="social" src="https://github.com/user-attachments/assets/a6f310af-8fed-4766-9649-b190575b399d" />
</a>

<br/>
<br/>

<div align="center">
    <strong>카테고리별로 정리된 5300개 이상의 커뮤니티 제작 OpenClaw 스킬을 살펴보세요.
    </strong>
    <br />
    <br />
</div>
  
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Skills Count](https://img.shields.io/badge/skills-5200-blue?style=flat-square)](#table-of-contents)
[![Last Update](https://img.shields.io/github/last-commit/VoltAgent/awesome-clawdbot-skills?label=Last%20update&style=flat-square)](https://github.com/VoltAgent/awesome-clawdbot-skills/pulls?q=is%3Apr+is%3Amerged+sort%3Aupdated-desc)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)
[![Official MCP Servers](https://img.shields.io/badge/Official-MCP%20Servers-c2410c?style=flat-square&logo=github&logoColor=white&labelColor=24292f)](https://github.com/VoltAgent/official-mcp-servers)

</div>



</div>

# Awesome OpenClaw Skills

OpenClaw는 사용자의 컴퓨터에서 직접 실행되는 로컬 AI 비서입니다. 스킬은 그 기능을 확장하여 외부 서비스와 연동하고, 워크플로를 자동화하며, 전문화된 작업을 수행할 수 있게 해줍니다. 이 모음집은 필요에 맞는 스킬을 찾아 설치하는 데 도움을 줍니다. 또한 OpenClaw 활용 사례에 대한 영감의 원천으로도 활용될 수 있습니다.

이 목록의 스킬은 ClawHub(OpenClaw의 공개 스킬 레지스트리)에서 가져왔으며, 쉽게 찾을 수 있도록 분류되었습니다.

### 설치 방법

#### OpenClaw CLI

```bash
openclaw skills install <skill-slug>
```

#### ClawHub CLI

또는 ClawHub CLI를 사용하여, 전체 OpenClaw 작업 공간 외부에 있는 레지스트리 관리형 스킬 폴더의 경우:

```bash
npx clawhub install <skill-slug>
```

#### 수동 설치

스킬 폴더를 다음 위치 중 하나에 복사하세요:

| 위치 | 경로 |
|----------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

우선순위: Workspace > Local > Bundled

#### 대안

스킬의 GitHub 저장소 링크를 비서의 채팅창에 직접 붙여넣고 사용하도록 요청할 수도 있습니다. 비서는 백그라운드에서 설정을 자동으로 처리합니다.


### 이 목록이 존재하는 이유

OpenClaw의 공개 레지스트리(ClawHub)에는 수천 개의 커뮤니티 제작 스킬이 호스팅되어 있습니다. 이 awesome 목록은 그 중에서 가장 좋은 것들을 엄선했습니다. 다음은 우리가 걸러낸 항목들입니다:

| 필터 | 제외됨 |
|--------|----------|
| 스팸 가능성 — 대량 계정, 봇 계정, 테스트/정크 | 4,065 |
| 중복 / 유사한 이름 | 1,040 |
| 낮은 품질 또는 비영어 설명 | 851 |
| 암호화폐 / 블록체인 / 금융 / 거래 | 886 |
| 악의적 — 연구자들이 발표한 보안 감사를 통해 식별됨 (VirusTotal 제외) | 373 |
| **OpenClaw 공식 스킬 레지스트리에서 가져오지 않은 총계** | **7,215** |


#### 스킬을 추가하고 싶으신가요?

이 목록에는 OpenClaw의 공개 스킬 레지스트리인 [ClawHub](https://clawhub.ai)에 **이미 게시된** 스킬만 포함됩니다. 개인 저장소, gist, 또는 그 밖의 외부 소스에 대한 링크는 받지 않습니다. 스킬이 아직 ClawHub에 없다면 먼저 그곳에 게시하세요.

PR 설명에 스킬의 ClawHub 링크(예: `https://clawhub.ai/steipete/slack`)를 포함하세요 — `clawskills.sh` 목록은 별도로 우리가 관리합니다. 자세한 내용은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하세요.


## OpenClaw 생태계 도구

### 🕸️ 웹 크롤링 & 데이터 인프라

AI 에이전트는 도달할 수 있는 웹 데이터만큼만 좋습니다. 대규모 크롤링은 JavaScript 중심의 페이지, 로테이션 프록시, 안티봇 시스템을 다루는 것을 의미합니다 — 이 모든 것을 직접 구축할 수도 있고, 이를 처리해 깔끔하고 바로 사용 가능한 데이터를 에이전트에 전달하는 API를 사용할 수도 있습니다.

<a href="https://crawlbase.com/?utm_source=awesome-openclaw-skills&utm_medium=sponsorship&utm_campaign=voltagent_2026q3&utm_content=readme_banner">
<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-dark-2760x480%402x.png"><img src="https://cdn.voltagent.dev/awesome-repo/crawlbase-new/crawlbase-sponsor-banner-light-2760x480%402x.png" alt="Crawlbase" width="690" /></picture><br/>
Crawlbase는 70,000명 이상의 개발자가 신뢰하는 웹 데이터 인프라로: JS 렌더링, 프록시 로테이션, 안티봇 처리를 갖춘 하나의 API로 모든 URL을 대규모로 크롤링합니다. 이 MCP 서버는 에이전트에 실시간 웹 접근을 제공합니다: crawl, crawl_markdown, crawl_screenshot.
</a>

### ☁️ 관리형 AI 호스팅

Cloudways는 인프라 부담 없이 애플리케이션을 배포하고 확장할 수 있는 관리형 클라우드 호스팅 플랫폼입니다. Cloudways Managed AI Agents를 사용하면 관리형 업데이트, 백업, SSL, 보안 제어가 적용된 전용 격리 인프라에서 OpenClaw를 실행할 수 있습니다. 프로모 코드 **VOLTAGENT**로 **$10 호스팅 크레딧**을 받으세요. [가입하기](https://unified.cloudways.com/signup?id=1258368&coupon=VOLTAGENT&data1=voltagent).

<a href="https://www.cloudways.com/en/managed-ai-agents.php?id=1258368&data1=voltagent">
<img src="https://cdn.voltagent.dev/awesome-repo/cloudways/cloudway-banner.jpg" alt="Cloudways Managed AI Agents" width="690" /><br/>
관리형 업데이트, 백업, SSL, 보안 제어가 적용된 전용 격리 인프라에서 OpenClaw를 배포하세요. 프로모 코드 VOLTAGENT로 가입하면 $10 호스팅 크레딧을 받을 수 있습니다.
</a>


### 🔍 검색 & 웹 데이터

OpenClaw 에이전트는 종종 최신 실제 데이터 — 검색 결과, 상품 목록, 동영상 등 — 가 필요합니다. 이를 직접 스크래핑하고 파싱할 수도 있고, 프록시, CAPTCHA, HTML 파싱을 관리할 필요 없이 실시간으로 깔끔하고 구조화된 데이터를 반환하는 검색 API를 사용할 수도 있습니다.

<a href="https://serpapi.com/search-engine-apis?utm_source=awesomeopenclawskills_github">
<img src="https://cdn.voltagent.dev/awesome-repo/serpapi.png" alt="SerpApi"  /><br/>
단일 API를 통해 OpenClaw 에이전트에 실시간 Google 검색, YouTube, Amazon 상품, 웹 검색 데이터에 대한 접근을 제공하세요.
</a>


<div align="center">

<table>
<tr>
<td align="center" width="100%">

<h3>🦞 위 섹션에 귀하의 OpenClaw 생태계 도구를 소개할 수 있습니다.</h3>

<p></p>

<sub>공식 OpenClaw 리소스 다음으로 가장 방문이 많은 커뮤니티 리소스</sub>


<a href="https://sponsors.voltagent.dev/#awesome-openclaw-skills"><img src="https://img.shields.io/badge/📩_Become_a_Sponsor-Contact_Us-blue?style=for-the-badge&logoColor=white" alt="Become a Sponsor" /></a>

</td>
</tr>
</table>

</div>



## 보안 공지

이 목록의 스킬은 **큐레이션되었을 뿐, 감사받지 않았습니다**. 추가된 이후에도 원래 유지 관리자에 의해 언제든 업데이트, 수정, 교체될 수 있습니다.

에이전트 스킬을 설치하거나 사용하기 전에 잠재적 보안 위험을 검토하고 출처를 직접 검증하세요. OpenClaw에는 스킬에 대한 보안 스캔을 제공하는 **VirusTotal 파트너십**이 있으니, ClawHub에서 스킬 페이지를 열어 VirusTotal 보고서를 확인하여 위험으로 표시되는지 확인하세요.

**추천 도구:**

- [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan)
- [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)
  
> 에이전트 스킬에는 프롬프트 인젝션, 도구 중독, 숨겨진 악성코드 페이로드, 또는 안전하지 않은 데이터 처리 패턴이 포함될 수 있습니다. 설치 전 항상 소스 코드를 검토하고 자신의 판단에 따라 스킬을 사용하세요.

 ClawHub 생태계에 대한 더 넓은 개요를 보려면 Trent AI의 **[ClawHub by the Numbers](https://trent.ai/blog/clawhub-by-the-numbers/)**를 참조하세요.


이 목록의 스킬이 플래그되어야 하거나 보안 우려가 있다고 생각하시면, 검토할 수 있도록 [이슈를 열어](https://github.com/VoltAgent/awesome-clawdbot-skills/issues) 주세요.


## 목차

| | | |
|---|---|---|
| [Git & GitHub](#git--github) (167) | [Marketing & Sales](#marketing--sales) (108) | [Communication](#communication) (146) |
| [Coding Agents & IDEs](#coding-agents--ides) (1184) | [Productivity & Tasks](#productivity--tasks) (207) | [Speech & Transcription](#speech--transcription) (47) |
| [Browser & Automation](#browser--automation) (323) | [AI & LLMs](#ai--llms) (176) | [Smart Home & IoT](#smart-home--iot) (41) |
| [Web & Frontend Development](#web--frontend-development) (920) | [Data & Analytics](#data--analytics) (28) | [Shopping & E-commerce](#shopping--e-commerce) (51) |
| [DevOps & Cloud](#devops--cloud) (393) | [Calendar & Scheduling](#calendar--scheduling) (66) | |
| [Image & Video Generation](#image--video-generation) (171) | [Media & Streaming](#media--streaming) (86) | [PDF & Documents](#pdf--documents) (105) |
| [Apple Apps & Services](#apple-apps--services) (44) | [Notes & PKM](#notes--pkm) (69) | [Self-Hosted & Automation](#self-hosted--automation) (33) |
| [Search & Research](#search--research) (343) | [iOS & macOS Development](#ios--macos-development) (29) | [Security & Passwords](#security--passwords) (54) |
| [Clawdbot Tools](#clawdbot-tools) (37) | [Transportation](#transportation) (111) | [Moltbook](#moltbook) (29) |
| [CLI Utilities](#cli-utilities) (180) | [Personal Development](#personal-development) (53) | [Gaming](#gaming) (35) |
| [Health & Fitness](#health--fitness) (87) | | |

<br/>

<details open>
<summary><h3 style="display:inline">Git & GitHub</h3></summary>

- [agent-commons](https://clawskills.sh/skills/zanblayde-agent-commons) - 추론 체인을 자문하고, 커밋하고, 확장하며, 도전하세요.
- [agent-team-orchestration](https://clawskills.sh/skills/arminnaimi-agent-team-orchestration) - 정의된 역할, 작업 수명 주기, 인수 프로토콜, 리뷰 워크플로를 갖춘 다중 에이전트 팀을 오케스트레이션하세요.
- [agentdo](https://clawskills.sh/skills/wrannaman-agentdo) - 다른 AI 에이전트가 수행할 작업을 게시하거나, AgentDo 작업 큐(agentdo.dev)에서 작업을 가져오세요.
- [agentgate](https://clawskills.sh/skills/monteslu-agentgate) - 인간 개입(human-in-the-loop) 쓰기 승인이 적용된 개인 데이터용 API 게이트웨이.
- [airadar](https://clawskills.sh/skills/lopushok9-airadar) - AI 네이티브 도구/앱과 그 GitHub 본거지 주변의 신호를 요약하세요: 빠르게 성장하는, 화제가 되는, 자금을 잘 받는.
- [alex-session-wrap-up](https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up) - 푸시되지 않은 작업을 커밋하고, 학습 내용을 추출하며, 패턴을 감지하고, 규칙을 영구 저장하는 세션 종료 자동화.
- [amazon-product-api-skill](https://clawskills.sh/skills/phheng-amazon-product-api-skill) - 이 스킬은 제목, ASIN, 가격, 평점 등을 포함한 Amazon의 구조화된 상품 목록을 추출하는 데 도움을 줍니다.
- [app-store-screenshot-generation](https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation) - each::sense AI를 사용하여 App Store 및 Google Play 스크린샷 에셋을 생성하세요.
- [arc-agent-lifecycle](https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle) - 자율 에이전트와 그 스킬의 수명 주기를 관리하세요.
- [arc-security-audit](https://clawskills.sh/skills/trypto1019-arc-security-audit) - 에이전트의 전체 스킬 스택에 대한 포괄적인 보안 감사.
- [arc-skill-gitops](https://clawskills.sh/skills/trypto1019-arc-skill-gitops) - 에이전트 워크플로와 스킬을 위한 자동화된 배포, 롤백, 버전 관리.
- [arc-trust-verifier](https://clawskills.sh/skills/trypto1019-arc-trust-verifier) - ClawHub 스킬의 출처를 검증하고 신뢰 점수를 생성하세요.
- [arxiv-search-collector](https://clawskills.sh/skills/xukp20-arxiv-search-collector) - 수동 언어 매개변수를 사용하여 논문 세트를 구축하는 모델 기반 arXiv 검색 워크플로: 실행 초기화.
- [auto-pr-merger](https://clawskills.sh/skills/autogame-17-auto-pr-merger) - 이 스킬은 GitHub를 체크아웃하는 워크플로를 자동화합니다.
- [azhua-skill-vetter](https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter) - AI 에이전트를 위한 보안 우선 스킬 검증.
- [azure-devops](https://clawskills.sh/skills/pals-software-azure-devops) - Azure DevOps 프로젝트, 저장소, 브랜치를 나열하고, 풀 리퀘스트를 생성하며, 작업 항목을 관리하고, 빌드 상태를 확인하세요.
- [bat-cat](https://clawskills.sh/skills/arnarsson-bat-cat) - 구문 강조, 줄 번호, Git 통합이 있는 cat 클론.
- [beeminder](https://clawskills.sh/skills/ruigomeseu-beeminder) - 목표 추적 및 커밋먼트 디바이스를 위한 Beeminder API.
- [billy-emergency-repair](https://clawskills.sh/skills/highlander89-billy-emergency-repair) - - Neill이 명시적으로 Billy 시스템 수리를 요청합니다.
- [bitbucket-automation](https://clawskills.sh/skills/sohamganatra-bitbucket-automation) - Bitbucket 저장소, 풀 리퀘스트를 자동화하세요.
- [biz-reporter](https://clawskills.sh/skills/ariktulcha-biz-reporter) - Google Analytics GA4, Google Search Console, Stripe에서 데이터를 가져와 자동화된 비즈니스 인텔리전스 보고서를 생성합니다.
- [blinko](https://clawskills.sh/skills/tolibear-blinko) - Abstract 체인에서 헤드리스로 Blinko(온체인 Plinko)를 플레이하세요.

> **[Git & GitHub의 모든 159개 스킬 보기 →](categories/git-and-github.md)**
</details>

<details open>
<summary><h3 style="display:inline">Coding Agents & IDEs</h3></summary>

- [0g-compute](https://clawskills.sh/skills/in-liberty420-0g-compute) - 0G Compute Network의 저렴하고 TEE 검증된 AI 모델을 OpenClaw provider로 사용하세요.
- [0protocol](https://clawskills.sh/skills/0isone-0protocol) - 에이전트가 플러그인에 서명하고, 신원을 잃지 않고 자격 증명을 로테이션하며, 행동을 공개적으로 증명할 수 있습니다.
- [2nd-brain](https://clawskills.sh/skills/coderaven-2nd-brain) - 사람, 장소, 레스토랑, 게임, 기술에 대한 정보를 캡처하고 검색하기 위한 개인 지식 베이스.
- [2slides-skills](https://clawskills.sh/skills/javainthinking-2slides-skills) - 2slides API를 사용하는 AI 기반 프레젠테이션 생성.
- [3d-cog](https://clawskills.sh/skills/nitishgargiitd-3d-cog) - 다른 도구들은 완벽한 이미지가 필요합니다.
- [3d-model-generation](https://clawskills.sh/skills/eftalyurtseven-3d-model-generation) - each::sense AI를 사용하여 3D 모델을 생성하세요.
- [a](https://clawskills.sh/skills/ricketh137-a) - Lobster.fun에서 AI VTuber로 라이브 스트리밍하세요.
- [aade-api-monitor](https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor) - 그리스 AADE 세무 당국 시스템의 실시간 모니터링 — 마감 기한, 요율 변경, 규정 준수 업데이트를 추적합니다.
- [abaddon](https://clawskills.sh/skills/enochosbot-bot-abaddon) - OpenClaw용 레드 팀 보안 모드.
- [academic-research](https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research) - OpenAlex API(무료, 키 불필요)를 사용하여 학술 논문을 검색하고 문헌 검토를 수행합니다.
- [academic-research-hub](https://clawskills.sh/skills/anisafifi-academic-research-hub) - 사용자가 학술 논문을 검색하거나, 연구 문서를 다운로드하거나, 인용을 추출하거나, 수집해야 할 때 이 스킬을 사용하세요.
- [acestep-simplemv](https://clawskills.sh/skills/dumoedss-acestep-simplemv) - Remotion을 사용하여 오디오 파일과 가사로 뮤직 비디오를 렌더링하세요.
- [acestep-songwriting](https://clawskills.sh/skills/dumoedss-acestep-songwriting) - ACE-Step를 위한 음악 작곡 가이드.
- [achurch](https://clawskills.sh/skills/lucasgeeksinthewood-achurch) - AI 에이전트와 인간을 위한 24시간 디지털 성소 — 참석하세요.
- [active-maintenance](https://clawskills.sh/skills/xiaowenzhou-active-maintenance) - **OpenClaw를 위한 자동화된 시스템 상태 및 메모리 대사.**.
- [adblock-dns](https://clawskills.sh/skills/picaye-adblock-dns) - DNS 계층에서 네트워크 전체의 광고 및 트래커 차단.
- [add-top-openrouter-models](https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models) - 이 설치의 설정에 OpenClaw가 사용하는 OpenRouter 모델을 동기화하세요.
- [adhd-founder-planner](https://clawskills.sh/skills/jankutschera-adhd-founder-planner) - 사용자가 '내 하루 계획 세워줘', '오늘 계획 도와줘', '아침 계획', '뭐'라고 요청할 때 이 스킬을 사용해야 합니다.
- [adwhiz](https://clawskills.sh/skills/iamzifei-adwhiz) - AI 코딩 도구에서 Google Ads 캠페인을 관리하세요. 감사, 생성, Google 최적화를 위한 44개의 MCP 도구.
- [aeo-prompt-question-finder](https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder) - 모든 주제에 대한 질문 기반 Google Autocomplete 제안을 찾으세요.
- [aetherlang-claude-code](https://clawskills.sh/skills/contrario-aetherlang-claude-code) - Claude Code에서 AetherLang V3 AI 워크플로를 실행하려면 이 스킬을 사용하세요.
- [agent-access-control](https://clawskills.sh/skills/bowen31337-agent-access-control) - AI 에이전트를 위한 계층화된 낯선이 접근 제어.
- [agent-audit](https://clawskills.sh/skills/sharbelayy-agent-audit) - 성능, 비용, ROI 측면에서 AI 에이전트 설정을 감사하세요.
- [agent-audit-trail](https://clawskills.sh/skills/roosch269-agent-audit-trail) - AI 에이전트를 위한 변조 방지, 해시 체인 감사 로깅.
- [agent-card-signing-auditor](https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor) - A2A 프로토콜 구현에서 Agent Card 서명 관행을 감사하는 데 도움을 줍니다.
- [agent-chat-ux-v1-4-0](https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0) - OpenClaw Control UI를 위한 다중 에이전트 UX — 에이전트 선택기, 에이전트별 세션, 검색 기능이 있는 세션 기록 뷰어.
- [skywork-ppt](https://clawskills.sh/skills/gxcun17-skywork-ppt) - skywork로 PowerPoint 프레젠테이션을 생성, 모방, 편집하세요.
- [skywork-music-maker](https://clawskills.sh/skills/gxcun17-skywork-music-maker) - Mureka AI로 전문적인 음악을 만드세요.
- [before-you-build](https://clawhub.ai/bin1874/before-you-build) - 빌드 전 제품 위험을 검토하세요.
- [ditto-profile](https://clawhub.ai/ohad6k/ditto-profile) - 마이닝된 개인 프로필을 불러와 에이전트가 당신처럼 작업하도록 하세요.
- [skill-navigator](https://clawhub.ai/grubbylee/skills/skill-navigator) - 올바른 설치된 로컬 Agent Skill을 추천합니다.
- [emulo](https://clawhub.ai/ohad6k/emulo) - 마이닝된 개인 프로필을 불러와 에이전트가 당신처럼 작업하도록 하세요.
- [orca-replay](https://clawhub.ai/xizhuomengcontin/orca-replay) - 녹화본에서 과거 코딩 에이전트 실행을 재생 및 디버그하세요.

> **[Coding Agents & IDEs의 모든 1200개 스킬 보기 →](categories/coding-agents-and-ides.md)**
</details>

<details open>
<summary><h3 style="display:inline">Browser & Automation</h3></summary>

- [1p-shortlink](https://clawskills.sh/skills/tuanpmt-1p-shortlink) - 1p.io를 사용하여 단축 URL을 만들고 기능 요청을 제출하세요.
- [2captcha](https://clawskills.sh/skills/adinvadim-2captcha) - 2Captcha 서비스를 사용하여 CAPTCHA를 해결하세요.
- [a-share-real-time-data](https://clawskills.sh/skills/wangdinglu-a-share-real-time-data) - mootdx/TDX 프로토콜을 통해 중국 A주 주식 시장 데이터(봉, 실시간 시세, 체결 단위 거래)를 가져오세요.
- [abm-outbound](https://clawskills.sh/skills/dru-ca-abm-outbound) - LinkedIn URL을 전환하는 다중 채널 ABM 자동화입니다.
- [accessibility-toolkit](https://clawskills.sh/skills/cgtreadw-accessibility-toolkit) - 에이전트가 돕기 위한 마찰 감소 패턴.
- [activecampaign](https://clawskills.sh/skills/kesslerio-activecampaign) - 리드 관리, 거래를 위한 ActiveCampaign CRM 통합.
- [adcp-advertising](https://clawskills.sh/skills/edyyy62-adcp-advertising) - AI로 광고 캠페인을 자동화하세요.
- [admet-prediction](https://clawskills.sh/skills/huifer-admet-prediction) - 약물 후보 물질에 대한 ADMET(흡수, 분포, 대사, 배설, 독성) 예측.
- [Agent Browser](https://clawskills.sh/skills/thesethrose-agent-browser) - 빠른 Rust 기반 헤드리스 브라우저 자동화 CLI.
- [agent-browser](https://clawskills.sh/skills/murphykobe-agent-browser-2) - 웹 테스트, 양식 자동화를 위해 브라우저 상호작용을 자동화합니다.
- [agent-daily-planner](https://clawskills.sh/skills/gpunter-agent-daily-planner) - AI 에이전트를 위한 구조화된 일일 계획 및 실행 추적 시스템.
- [agent-device](https://clawskills.sh/skills/okwasniewski-agent-device) - iOS 시뮬레이터/디바이스 및 Android 에뮬레이터/디바이스에 대한 상호작용을 자동화합니다.
- [agent-step-sequencer](https://clawskills.sh/skills/gostlightai-agent-step-sequencer) - 심층적인 에이전트 요청을 위한 다중 단계 스케줄러.
- [agent-task-tracker](https://clawskills.sh/skills/rikouu-agent-task-tracker) - 선제적인 작업 상태 관리.
- [agent-zero](https://clawskills.sh/skills/dowingard-agent-zero-bridge) - 복잡한 코딩, 연구, 또는 자율 작업을 위임하세요.
- [agentapi](https://clawskills.sh/skills/gizmo-dev-agentapi) - AgentAPI 디렉토리 찾아보기 및 검색 — AI 에이전트를 위해 설계된 큐레이션된 API 데이터베이스.
- [agentapi-hub](https://clawskills.sh/skills/gizmo-dev-agentapi-hub) - AgentAPI 디렉토리 찾아보기 및 검색 — AI 에이전트를 위해 설계된 큐레이션된 API 데이터베이스.
- [agentaudit](https://clawskills.sh/skills/starbuck100-agentaudit) - 설치 전 취약점 데이터베이스에 대해 패키지를 확인하는 자동 보안 게이트.
- [agentaudit-skill](https://clawskills.sh/skills/starbuck100-agentaudit-skill) - 설치 전 취약점 데이터베이스에 대해 패키지를 확인하는 자동 보안 게이트.
- [agentmail-integration](https://clawskills.sh/skills/synesthesia-wav-agentmail-integration) - AI 에이전트를 위한 AgentMail API 통합.
- [agresource](https://clawskills.sh/skills/brianppetty-agresource) - 이 스킬을 사용하여 AgResource 곡물 마케팅 뉴스레터를 스크래핑, 요약, 분석하세요.
- [ai-hunter-pro](https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro) - 전 세계 트렌드를 X(트위터)의 바이럴 소셜 미디어 게시물로 바꾸는 고성능 자동화 에이전트.
- [ai-meeting-scheduling](https://clawskills.sh/skills/dheerg-ai-meeting-scheduling) - 그룹 예약에는 링크 예약이 실패합니다.
- [airtable-automation](https://clawskills.sh/skills/sohamganatra-airtable-automation) - Rube MCP(Composio)를 통해 Airtable 작업 자동화.
- [airtable-participants](https://clawskills.sh/skills/austinmao-airtable-participants) - Ceremonia Airtable 베이스에서 리트리트 참가자 데이터를 읽고 쿼리하세요.
- [ak-rss-24h-brief](https://clawskills.sh/skills/seandong-ak-rss-24h-brief) - OPML 목록에서 RSS/Atom 피드를 읽고, 최근 N시간의 기사를 가져와 중국어로 분류된 요약을 생성합니다.
- [adspower-browser](https://clawskills.sh/skills/adspower-adspower-browser) - 사용자가 AdsPower 브라우저, 그룹, 태그, 프록시를 생성하거나 관리하거나, AdsPower Local API를 통해 상태를 확인하도록 요청할 때 사용하세요.
- [duoplus-agent](https://clawskills.sh/skills/duoplusofficial-duoplus-agent) - ADB를 통해 DuoPlus 클라우드 폰을 제어하세요.

> **[Browser & Automation의 모든 323개 스킬 보기 →](categories/browser-and-automation.md)**
</details>

AI로 제품을 출시하지만, 아무도 그에 대해 게시하지 않아 모든 출시가 조용히 죽어갑니다. [EveryFeed](https://everyfeed.ai/)는 AI 비서를 35개 이상의 채널에 걸쳐 초안 작성, 예약, 게시를 수행하는 소셜 작업 공간에 연결합니다 — 대행사도, 마케팅 채용도 필요 없습니다.

<a href="https://everyfeed.ai/">
<img src="https://cdn.voltagent.dev/awesome-repo/everyfeed-social.png" alt="everyfeed"  /><br/>
</a>

<br/>

<a href="https://launchkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/website-starter-kit-banner-dark-0315e5f9c1.png" alt="launchkit"  /><br/>
</a>

<br/>


<a href="https://mobile-starterkit.getdesign.md/">
<img src="https://cdn.voltagent.dev/awesome-repo/mobile-starter-kit-banner-light-450ba0a9b0.png" alt="mobilekit"  /><br/>
</a>

<br/>



<details>
<summary><h3 style="display:inline">Web & Frontend Development</h3></summary>

- [0xwork](https://clawskills.sh/skills/jkillr-0xwork) - 0xWork 탈중앙화 마켓플레이스(Base 체인, USDC 에스크로)에서 유료 작업을 찾아 완료하세요.
- [37soul-skill](https://clawskills.sh/skills/xnjiang-37soul-skill) - AI 에이전트를 37Soul 가상 Host 캐릭터에 연결하고 활성화하세요.
- [acestep](https://clawskills.sh/skills/dumoedss-acestep) - ACE-Step API를 사용하여 음악을 생성하고, 노래를 편집하며, 리믹스하세요.
- [actionbook](https://clawskills.sh/skills/adcentury-actionbook) - 사용자가 웹사이트와 상호작용해야 할 때 활성화 — 브라우저 자동화, 웹 스크래핑, 스크린샷, 양식.
- [aegis-shield](https://clawskills.sh/skills/deegerwalker-aegis-shield) - 신뢰할 수 없는 텍스트에 대한 프롬프트 인젝션 및 데이터 유출 검사.
- [aeo-analytics-free](https://clawskills.sh/skills/psyduckler-aeo-analytics-free) - AI 가시성을 추적 — 브랜드가 AI 비서(Gemini, ChatGPT, Perplexity)에 언급되고 인용되는지 측정하세요.
- [aeo-content-free](https://clawskills.sh/skills/psyduckler-aeo-content-free) - AI 비서(Gemini, ChatGPT, Perplexity)에 인용되는 AEO 최적화 콘텐츠를 생성하거나 새로고침하세요.
- [aeo-prompt-frequency-analyzer](https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer) - Google 검색을 여러 번 실행하여 프롬프트에 답할 때 Gemini가 사용하는 검색 쿼리를 분석하세요.
- [aeo-prompt-research-free](https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free) - 무료 도구만 사용하여 브랜드의 답변 엔진 최적화(AEO)에 중요한 AI 프롬프트와 주제를 발견하세요.
- [agent-analytics](https://clawskills.sh/skills/dannyshmueli-agent-analytics) - AI 에이전트가 종단 간 제어하는 간단한 웹사이트 분석.
- [agent-chat](https://clawskills.sh/skills/awlevin-agent-chat) - AI 에이전트를 위한 임시 실시간 채팅방.
- [agent-dashboard](https://clawskills.sh/skills/tahseen137-agent-dashboard) - OpenClaw를 위한 실시간 에이전트 대시보드.
- [agent-dispatch](https://clawskills.sh/skills/userfrm-agent-dispatch) - 경량 에이전트 레지스트리 및 JIT 라우터.
- [agent-hq](https://clawskills.sh/skills/thibautrey-agent-hq) - 다른 Clawdbot가 사용할 수 있도록 Agent HQ 미션 컨트롤 스택(Express + React + Telegram 알림 / Jarvis 요약)을 배포하세요.
- [agent-passport](https://clawskills.sh/skills/markneville-agent-passport) - 에이전트 시대를 위한 OAuth — 구매, 이메일, 파일 등 모든 민감한 에이전트 작업에 대한 동의 게이팅.
- [agent-rate-limiter](https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter) - 당신은 그 요령을 알고 있습니다.
- [agent-self-assessment](https://clawskills.sh/skills/roosch269-agent-self-assessment) - AI 에이전트를 위한 보안 자체 평가 도구.
- [agent-self-reflection](https://clawskills.sh/skills/brennerspear-agent-self-reflection) - 최근 세션에 대한 주기적인 자체 성찰.
- [agent-skills-audit](https://clawskills.sh/skills/swader-agent-skills-audit) - 타협자 리드가 주도하고 보안, 성능, UX, DX를 결합한 2단계 다학제 코드 감사를 실행하세요.
- [agent-spawner](https://clawskills.sh/skills/austineral-agent-spawner) - 대화를 통해 새로운 OpenClaw 에이전트를 생성하세요.
- [agent-swarm](https://clawskills.sh/skills/runeweaverstudios-agent-swarm) - 중요: OpenRouter가 필요합니다.
- [agent-takeover](https://clawskills.sh/skills/tracsystems-agent-takeover) - Clawfinger 음성 게이트웨이의 라이브 에이전트 인수를 수행하는 방법 — 전화 걸기, 인사 주입, 턴 처리.
- [agent-topology-visualizer](https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer) - AI 에이전트 시스템을 위한 대화형 SVG 아키텍처 다이어그램을 생성하세요.
- [agentdomainservice](https://clawskills.sh/skills/gregm711-agentdomainservice) - 세계에서 가장 AI 친화적인 도메인 등록 기관.
- [agentic-browser-0-1-2](https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2) - inference.sh를 통한 AI 에이전트용 브라우저 자동화.
- [agentic-security-audit](https://clawskills.sh/skills/kingrubic-agentic-security-audit) - 코드베이스, 인프라, 그리고 에이전트형 AI 시스템을 보안 문제에 대해 감사하세요.
- [agentpay](https://clawskills.sh/skills/kar69-96-agentpay) - 인간을 대신해 실제 웹사이트에서 물건을 구매하세요.

> **[Web & Frontend Development의 모든 925개 스킬 보기 →](categories/web-and-frontend-development.md)**
</details>

<details>
<summary><h3 style="display:inline">DevOps & Cloud</h3></summary>

- [0x0-messenger](https://clawskills.sh/skills/eijiac24-0x0-messenger) - 일회용 번호와 PIN을 사용하여 P2P 메시지를 주고받으세요.
- [12306](https://clawskills.sh/skills/kirorab-12306) - 중국 철도 12306에서 열차 시간표, 남은 티켓, 역 정보를 조회하세요.
- [1sec-security](https://clawskills.sh/skills/cutmob-1sec-security) - 1-SEC 설치, 구성, 관리 — 오픈소스 올인원 사이버보안 플랫폼(16개 모듈, 단일 바이너리).
- [aave-liquidation-monitor](https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor) - 청산 알림이 있는 Aave V3 대출 포지션의 선제적 모니터링.
- [abstract-searcher](https://clawskills.sh/skills/easonc13-abstract-searcher) - 브라우저로 학술 데이터베이스(arXiv, Semantic Scholar, CrossRef)를 검색하여 .bib 파일 항목에 초록을 추가하세요.
- [accounting-workflows](https://clawskills.sh/skills/satoshistackalotto-accounting-workflows) - 그리스 회계를 위한 파일 기반 워크플로 코디네이터.
- [adguard](https://clawskills.sh/skills/rowbotik-adguard) - HTTP API를 통해 AdGuard Home DNS 필터링을 제어하세요.
- [aegis-audit](https://clawskills.sh/skills/sanguineseal-aegis-audit) - AI 에이전트 스킬 및 MCP 도구를 위한 심층 행동 보안 감사.
- [aetherlang-chef](https://clawskills.sh/skills/contrario-aetherlang-chef) - > 17개의 필수 섹션을 갖춘 미슐랭 급 레시피 컨설팅.
- [aetherlang-karpathy-skill](https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill) - 계획 컴파일러, 코드 인터프리터, 비평 등 10가지 고급 AI 에이전트 노드 유형을 모든 DSL/런타임 시스템에 구현하세요.
- [agent-autonomy-primitives](https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives) - ClawVault 프리미티브(작업, 프로젝트, 메모리 유형, 템플릿)를 사용하여 장기 실행되는 자율 에이전트 루프를 구축하세요.
- [agent-directory](https://clawskills.sh/skills/aerialcombat-agent-directory) - AI 에이전트 서비스를 위한 디렉토리.
- [agent-evaluation](https://clawskills.sh/skills/rustyorb-agent-evaluation) - 행동 테스트, 기능 평가, 신뢰성 지표를 포함한 LLM 에이전트 테스트 및 벤치마킹.
- [agent-framework-azure-ai-py](https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py) - Azure AI Foundry 에이전트를 구축하세요.
- [agent-metrics-osiris](https://clawskills.sh/skills/nantes-agent-metrics-osiris) - AI 에이전트를 위한 관찰 가능성 및 지표 — 호출, 오류, 지연 시간을 추적하세요.
- [agent-self-governance](https://clawskills.sh/skills/bowen31337-agent-self-governance) - 자율 에이전트를 위한 자체 거버넌스 프로토콜: WAL(Write-Ahead Log), VBR(Verify Before Reporting), ADL.
- [agent-watcher](https://clawskills.sh/skills/nantes-agent-watcher) - Moltbook 피드를 모니터링하고, 새로운 에이전트를 감지하며, 흥미로운 게시물을 추적하는 스킬.
- [agentchan-org](https://clawskills.sh/skills/kaden-schutt-agentchan-org) - AI 에이전트를 위한 익명 이미지보드.
- [agentguard](https://clawskills.sh/skills/manas-io-ai-agentguard) - **카테고리:** 보안 및 모니터링.
- [agentic-ai-gold](https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold) - 자는 동안 스스로 개선되는 유일한 에이전트 프레임워크.
- [agentic-devops](https://clawskills.sh/skills/tkuehnl-agentic-devops) - 프로덕션급 에이전트 DevOps 툴킷 — Docker, 프로세스 관리, 로그 분석, 상태 모니터링.
- [agentkeys](https://clawskills.sh/skills/alexandr-belogubov-agentkeys) - AI 에이전트를 위한 안전한 자격 증명 프록시.
- [agentmemory](https://clawskills.sh/skills/badaramoni-agentmemory) - AI 에이전트를 위한 종단 간 암호화된 클라우드 메모리.

> **[DevOps & Cloud의 모든 392개 스킬 보기 →](categories/devops-and-cloud.md)**
</details>

<details>
<summary><h3 style="display:inline">Image & Video Generation</h3></summary>

- [aada](https://clawskills.sh/skills/rylena-aada) - 한 에이전트에서 Moltbook 청중에게 재미있고 개성 넘치는 프로모션 메시지를 생성하고 전송하세요.
- [ace-music](https://clawskills.sh/skills/fspecii-ace-music) - ACE-Step 1.5의 무료 API를 통해 ACE Music으로 AI 음악을 생성하세요.
- [acorn-prover](https://clawskills.sh/skills/flyingnobita-acorn-prover) - 수학 및 암호화 공식화를 위한 Acorn 정리 증명기를 사용하여 증명을 검증하고 작성하세요.
- [adobe-automator](https://clawskills.sh/skills/abdul-karim-mia-adobe-automator) - ExtendScript 브리지를 통한 범용 Adobe 애플리케이션 자동화.
- [afame](https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame) - OpenAI Images API를 통해 다양한 창의적 일러스트레이션을 생성하세요.
- [age-transformation](https://clawskills.sh/skills/eftalyurtseven-age-transformation) - each::sense AI를 사용하여 얼굴을 나이에 따라 변환하세요.
- [agentchan](https://clawskills.sh/skills/vvsotnikov-agentchan) - AI 에이전트를 위해 구축된 익명 이미지보드.
- [agentos-mesh](https://clawskills.sh/skills/agentossoftware-agentos-mesh) - AI 에이전트 간의 실시간 통신을 가능하게 합니다.
- [agents-skill-podcastifier](https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier) - 들어오는 텍스트(이메일/뉴스레터)를 청킹 + ffmpeg 연결로 짧은 TTS 팟캐스트로 변환하세요.
- [ai-avatar-generation](https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation) - each::sense를 사용하여 사진이나 텍스트 설명에서 AI 아바타를 생성하세요.
- [ai-headshot-generation](https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation) - each::sense AI를 사용하여 일상 사진에서 전문적인 AI 헤드샷을 생성하세요.
- [ai-persona-engine](https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine) - 대신 배우 연출 프롬프트를 사용하여 음성 및 채팅 롤플레이를 위한 감정 지능형 AI 페르소나를 구축하세요.
- [ai-video-gen](https://clawskills.sh/skills/rhanbourinajd-ai-video-gen) - 종단 간 AI 비디오 생성 — 텍스트에서 비디오를 만드세요.
- [aikek](https://clawskills.sh/skills/vvsotnikov-aikek) - 암호화폐/DeFi 연구 및 이미지 생성을 위한 AIKEK API에 접근하세요.
- [aiusd](https://clawskills.sh/skills/chaunceyliu-aiusd) - AIUSD 거래 및 계정 관리 스킬.
- [aiusd-skills](https://clawskills.sh/skills/chaunceyliu-aiusd-skills) - AIUSD 거래 및 계정 관리 스킬.
- [album-cover-generation](https://clawskills.sh/skills/eftalyurtseven-album-cover-generation) - each::sense AI를 사용하여 전문적인 음악 앨범 커버를 생성하세요.
- [algorithmic-art](https://clawskills.sh/skills/seanphan-algorithmic-art) - 시드 기반 난수를 사용하는 p5.js로 알고리즘 아트 만들기.
- [apipick-china-phone-checker](https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker) - apipick China Phone Checker API를 사용하여 중국 휴대전화 번호를 검증하세요.
- [art-philosophy](https://clawskills.sh/skills/nyxur42-art-philosophy) - 귀하의 시각적 언어를 자동으로 학습합니다.
- [ascii-art-generator](https://clawskills.sh/skills/ustc-yxw-ascii-art-generator) - 예술적 표현, 기술 다이어그램, 개념을 위한 ASCII 아트 및 텍스트 기반 시각화를 만드세요.
- [atxp](https://clawskills.sh/skills/emilioacc-atxp) - 웹 검색, AI 이미지 생성, 음악 생성 등을 위한 ATXP 유료 API 도구에 접근하세요.
- [beauty-generation-api](https://clawskills.sh/skills/luruibu-beauty-generation-api) - 생성을 위한 무료 AI 이미지 생성 서비스.
- [best-image](https://clawskills.sh/skills/pharmacist9527-best-image) - 최고 품질의 AI 이미지 생성(~$0.12-0.20/이미지)
- [best-image-generation](https://clawskills.sh/skills/evolinkai-best-image-generation) - 최고 품질의 AI 이미지 생성(~$0.12-0.20/이미지)
- [bex-nano-banana-pro](https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro) - Replicate의 Gemini 3 Pro Image를 통해 이미지를 생성하거나 편집하세요.
- [breeze](https://clawskills.sh/skills/keeganthomp-breeze) - x402 결제 게이트 HTTP API를 통해 Breeze 수익 집계기를 상호작용하세요.
- [cad-agent](https://clawskills.sh/skills/clawd-maf-cad-agent) - CAD 작업을 하는 AI 에이전트를 위한 렌더링 서버.
- [calorie-visualizer](https://clawskills.sh/skills/vintlin-calorie-visualizer) - 로컬 칼로리 기록 및 시각적 보고(각 기록 후 자동 새로고침 및 보고서 이미지 반환)
- [canva-connect](https://clawskills.sh/skills/coolmanns-canva-connect) - Connect API를 통해 Canva 디자인, 에셋, 폴더를 관리하세요.
- [runapi-mcp](https://clawhub.ai/runapi-ai/runapi-mcp) - 18개 provider에서 이미지, 비디오, 음악, 오디오, LLM 생성을 위한 130개 이상의 AI 모델. 무료 카탈로그 브라우징이 가능한 8개의 MCP 도구. `npx @runapi.ai/mcp`
- [skywork-design](https://clawskills.sh/skills/gxcun17-skywork-design) - 포스터, 로고 등을 위해 Skywork Image를 통해 이미지를 생성하고 편집하세요.

- [ai-video-remix](https://clawskills.sh/skills/abu-shotai-ai-video-remix) - ShotAI를 사용하여 로컬 라이브러리에서 AI 기반 비디오 리믹스.
- [modellix](https://clawhub.ai/modellix/modellix) - AI 이미지 및 비디오 생성을 위한 통합 API.
- [riffkit](https://clawhub.ai/riffkit/riffkit) - 틱톡 히트작을 당신의 제품 비디오로 리프하세요.
- [openshorts](https://clawhub.ai/mutonby/openshorts) - 긴 동영상을 세로 클립으로 만들어 게시하세요.
> **[Image & Video Generation의 모든 171개 스킬 보기 →](categories/image-and-video-generation.md)**
</details>

<details>
<summary><h3 style="display:inline">Apple Apps & Services</h3></summary>

- [alter-actions](https://clawskills.sh/skills/olivieralter-alter-actions) - x-callback-urls를 통해 Alter macOS 앱 동작을 트리거하세요.
- [apple-contacts](https://clawskills.sh/skills/tyler6204-apple-contacts) - macOS Contacts.app에서 연락처를 조회하세요.
- [apple-find-my-local](https://clawskills.sh/skills/loganprit-apple-find-my-local) - Peekaboo를 통해 Apple Find My 앱을 제어하여 사람, 디바이스, 항목(AirTags)을 찾으세요.
- [apple-health-skill](https://clawskills.sh/skills/nftechie-apple-health-skill) - Apple Health 데이터와 대화하세요 — 운동, 심박수, 활동 링, 피트니스 트렌드에 대해 질문하세요.
- [apple-mail-search](https://clawskills.sh/skills/mneves75-apple-mail-search) - macOS에서 SQLite를 통한 빠른 Apple Mail 검색.
- [apple-music](https://clawskills.sh/skills/tyler6204-apple-music) - Apple Music 검색, 라이브러리에 노래 추가, 재생목록 관리, 제어.
- [apple-photos](https://clawskills.sh/skills/tyler6204-apple-photos) - macOS용 Apple Photos.app 통합.
- [apple-remind-me](https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me) - 실제 Apple을 생성하는 자연어 알림.
- [apple-search-ads-skill](https://clawskills.sh/skills/trebuhs-apple-search-ads-skill) - asa-cli 도구를 통해 Apple Search Ads 캠페인, 광고 그룹, 키워드, 보고서를 관리하세요.
- [appletv](https://clawskills.sh/skills/lucakaufmann-appletv) - pyatv를 통해 Apple TV를 제어하세요.
- [callmac](https://clawskills.sh/skills/jooey-callmac) - /callmac과 같은 명령을 사용하여 모바일 디바이스에서 Mac을 원격 음성 제어하세요.
- [clawdbot-macos-build](https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build) - Clawdbot macOS 메뉴 막대 앱을 빌드하세요.
- [clawdbot-skill-voice-wake-say](https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say) - macOS에서 응답을 소리 내어 말하세요.
- [drafts](https://clawskills.sh/skills/nerveband-drafts) - macOS에서 CLI를 통해 Drafts 앱 메모를 관리하세요.
- [findmy-location](https://clawskills.sh/skills/poiley-findmy-location) - Apple Find를 통해 공유 연락처의 위치를 추적하세요.
- [fzf-fuzzy-finder](https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder) - 대화형 필터링을 위한 명령줄 퍼지 파인더.
- [get-focus-mode](https://clawskills.sh/skills/nickchristensen-get-focus-mode) - 현재 macOS Focus를 가져오세요.
- [healthkit-sync](https://clawskills.sh/skills/mneves75-healthkit-sync) - iOS HealthKit 데이터 동기화 CLI 명령 및 패턴.
- [hergunmac](https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac) - AI 기반 축구 경기 예측에 접근하세요.
- [homebrew](https://clawskills.sh/skills/thesethrose-homebrew) - macOS용 Homebrew 패키지 관리자.
- [icloud-findmy](https://clawskills.sh/skills/liamnichols-icloud-findmy) - 가족 디바이스의 Find My 위치 및 배터리 상태를 쿼리하세요.
- [ics-import-on-iphone](https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone) - 직접적인 캘린더 접근이 불가능할 때 유효한 .ics 파일을 생성하여 캘린더 이벤트를 만드세요.
- [imessage-signal-analyzer](https://clawskills.sh/skills/terellison-imessage-signal-analyzer) - 관계 역학을 드러내기 위해 iMessage(macOS) 및 Signal 대화 기록을 분석하세요 — 메시지 볼륨.
- [inkjet](https://clawskills.sh/skills/aaronchartier-inkjet) - 무선 Bluetooth 서멀 프린터로 텍스트, 이미지, QR 코드를 인쇄하세요.
- [mac-notes-agent](https://clawskills.sh/skills/swancho-mac-notes-agent) - macOS Notes 앱(Apple Notes)과 통합하세요.
- [mac-tts](https://clawskills.sh/skills/kalijason-mac-tts) - macOS 내장 `say` 명령을 사용한 텍스트 음성 변환.
- [macos-native-automation](https://clawskills.sh/skills/theagentwire-macos-native-automation) - CGEvent + AppleScript를 통한 macOS 하드웨어 수준 마우스, 키보드 및 대화 상자 자동화.
- [managing-apple-notes](https://clawskills.sh/skills/wangwalk-managing-apple-notes) - inotes CLI를 사용하여 터미널에서 Apple Notes를 관리하세요.
- [meow-finder](https://clawskills.sh/skills/abgohel-meow-finder) - AI 도구를 발견하는 CLI 도구.
- [mh-apple-reminders](https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders) - remindctl CLI를 통해 Apple Reminders 관리(목록, 추가, 편집, 완료, 삭제)

> **[Apple Apps & Services의 모든 44개 스킬 보기 →](categories/apple-apps-and-services.md)**
</details>

<details>
<summary><h3 style="display:inline">Search & Research</h3></summary>

- [1](https://clawskills.sh/skills/nastrology-1) - 캡처 및 검색을 위한 Ensue 기반 개인 지식 베이스.
- [academic-deep-research](https://clawskills.sh/skills/kesslerio-academic-deep-research) - 완전한 투명성과 엄밀함을 갖춘 연구.
- [academic-writer](https://clawskills.sh/skills/dayunyan-academic-writer) - 전문적인 LaTeX 작성 도우미.
- [academic-writing](https://clawskills.sh/skills/teamolab-academic-writing) - 학술 논문, 문헌 검토, 연구 방법론을 전문으로 하는 학술 작성 전문가입니다.
- [academic-writing-refiner](https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner) - 최상위 저널(NeurIPS, ICLR, ICML, AAAI)을 목표로 하는 컴퓨터 과학 연구 논문의 학술 작성을 다듬으세요.
- [aclawdemy](https://clawskills.sh/skills/nimhar-aclawdemy) - AI 에이전트를 위한 학술 연구 플랫폼.
- [action-suggester](https://clawskills.sh/skills/vishalgojha-action-suggester) - 리드 요약 또는 리드 목록에서 구속력 없는 후속 조치 제안을 생성하세요.
- [ads-manager-agent](https://clawskills.sh/skills/amekala-ads-manager-agent) - 사용자가 Google Ads, Meta에서 유료 광고 캠페인을 관리, 자동화, 분석하려 할 때.
- [adspirer-ads-agent](https://clawskills.sh/skills/amekala-adspirer-ads-agent) - 사용자가 Google Ads, Meta에서 유료 광고 캠페인을 관리, 자동화, 분석하려 할 때.
- [advanced-skill-creator](https://clawskills.sh/skills/xqicxx-advanced-skill-creator) - 고급 OpenClaw 스킬 생성 핸들러.
- [aerobase-skill](https://clawskills.sh/skills/kurosh87-aerobase-skill) - 시차 영향 분석과 함께 항공편을 검색, 점수 매기기, 비교하세요.
- [agent-brain](https://clawskills.sh/skills/dobrinalexandru-agent-brain) - SQLite 저장소, 오케스트레이션된 검색/추출 루프, 하이브리드를 갖춘 로컬 우선 영구 메모리.
- [agent-casino](https://clawskills.sh/skills/lemodigital-agent-casino) - 락페이퍼시저스에 잠금 메커니즘이 있는 다른 AI 에이전트와 경쟁하세요.
- [agent-deep-research](https://clawskills.sh/skills/24601-agent-deep-research) - Google Gemini가 지원하는 자율 심층 연구.
- [agent-lightning](https://clawskills.sh/skills/olmmlo-cmd-agent-lightning) - Microsoft Research의 에이전트 훈련 프레임워크.
- [agentarxiv](https://clawskills.sh/skills/amanbhandula-agentarxiv) - AI 에이전트를 위한 결과 중심 과학 출판.
- [agenthire](https://clawskills.sh/skills/lngdao-agenthire) - AgentHire — 에이전트 대 에이전트 마켓플레이스.
- [agentic-paper-digest](https://clawskills.sh/skills/matanle51-agentic-paper-digest) - 최근 arXiv 및 Hugging을 가져와 요약합니다.
- [agentic-paper-digest-skill](https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill) - 최근 arXiv를 가져와 요약합니다.
- [agenticmail](https://clawskills.sh/skills/ope-olatunji-agenticmail) - 🎀 AgenticMail — AI 에이전트를 위한 완전한 이메일, SMS, 저장소 및 다중 에이전트 조정. 63개 도구.
- [agentx-news](https://clawskills.sh/skills/amittell-agentx-news) - AgentX News — AI 에이전트를 위한 마이크로블로깅 플랫폼에서 xeets를 게시하고, 프로필을 관리하며, 상호작용하세요.
- [agile-toolkit](https://clawskills.sh/skills/olivermonneke-agile-toolkit) - Scrum, Kanban, SAFe, Management 3.0에 대한 깊은 지식을 갖춘 숙련된 Agile Coach입니다.
- [agnxi-search-skill](https://clawskills.sh/skills/doanbactam-agnxi-search-skill) - Agnxi.com의 공식 검색 유틸리티.
- [ahmed](https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed) - spogo를 통한 터미널 Spotify 재생/검색(권장)
- [ai-lead-generator-skill](https://clawskills.sh/skills/highlander89-ai-lead-generator-skill) - AI 기반 연구 및 LinkedIn/Apollo 통합을 사용하여 모든 산업의 자격을 갖춘 B2B 리드를 생성하세요.
- [ai-review](https://clawskills.sh/skills/blackshady1130-jpg-ai-review) - URL 또는 파일의 콘텐츠를 읽고 분류하여 특정 형식의 구조화된 요약과 댓글을 생성합니다.
- [aihotel](https://clawskills.sh/skills/qiao101660-aihotel) - AIGoHotel MCP(searchHotels / getHotelDetail / getHotelSearchTags)를 통해 호텔을 검색하고 가격을 조회하는 스킬.
- [airbnb](https://clawskills.sh/skills/stveenli-airbnb) - 가격, 평점, 직접 링크가 있는 Airbnb 매물을 검색하세요.
- [openclaw-free-web-search](https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search) - self-hosted SearXNG + Scrapling 안티봇 + 다중 소스 교차 검증을 갖춘 OpenClaw용 무료 비공개 웹 검색. API 키 없음, 비용 없음. 답변을 얼마나 신뢰할 수 있는지 알려줍니다.
- [xquik-x-twitter-scraper](https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper) - AI 에이전트를 위한 40개 이상의 도구를 갖춘 X API 스크레이퍼.
- [skywork-search](https://clawskills.sh/skills/gxcun17-skywork-search) - 실시간 정보를 위한 AI 기반 웹 검색 — 최신 콘텐츠를 검색합니다.
- [tavily](https://clawhub.ai/bert-builder/tavily) - Tavily Search API를 사용하는 AI 최적화 웹 검색.
- [newsflash](https://clawhub.ai/zatmonkey/newsflash) - 에이전트를 위한 상호 검증된 실시간 뉴스 브리핑 및 알림.
- [glasser](https://clawhub.ai/glasser-ai/glasser) - 1,000개 이상의 유료 데이터 API를 검색, 가격 책정, 실행하세요. 하나의 키.
- [openclaw-search-skills](https://clawhub.ai/blessonism/skills/openclaw-search-skills) - 구조화된 연구 보고서를 갖춘 다중 소스 심층 검색.

> **[Search & Research의 모든 343개 스킬 보기 →](categories/search-and-research.md)**
</details>

<details>
<summary><h3 style="display:inline">Clawdbot Tools</h3></summary>

- [adhd-assistant](https://clawskills.sh/skills/thinktankmachine-adhd-assistant) - OpenClaw를 위한 ADHD 친화적 삶 관리 비서.
- [adhd-ssistant](https://clawskills.sh/skills/thinktankmachine-adhd-ssistant) - OpenClaw를 위한 ADHD 친화적 삶 관리 비서.
- [agent-browser](https://clawskills.sh/skills/matrixy-agent-browser-clawdbot) - AI 에이전트에 최적화된 헤드리스 브라우저 자동화 CLI.
- [agent-builder](https://clawskills.sh/skills/plgonzalezrx8-agent-builder) - 고성능 OpenClaw 에이전트를 종단 간 구축하세요.
- [agents-manager](https://clawskills.sh/skills/agentandbot-design-agents-manager) - Clawdbot 에이전트 관리: 발견, 프로필, 추적.
- [assimilate-mcp](https://clawskills.sh/skills/ergopooka-assimilate-mcp) - Assimilate Live FX / SCRATCH 제어 — 전문 색보정, 합성, 가상 제작 소프트웨어.
- [birthday-reminder](https://clawskills.sh/skills/manantra-birthday-reminder) - 자연어로 생일을 관리하세요.
- [bluebubbles](https://clawskills.sh/skills/kevin19830331-bluebubbles) - BlueBubbles 외부 채널 플러그인을 구축하거나 업데이트하세요.
- [captchas-openclaw](https://clawskills.sh/skills/captchasco-captchas-openclaw) - CAPTCHAS Agent API를 위한 OpenClaw 통합 가이드.
- [claude-code-skill](https://clawskills.sh/skills/enderfga-claude-code-skill) - MCP(Model Context Protocol) 통합.
- [claude-code-usage](https://clawskills.sh/skills/azaidi94-claude-code-usage) - Claude Code OAuth 사용 한도를 확인하세요.
- [claude-connect](https://clawskills.sh/skills/tunaissacoding-claude-connect) - Claude를 Clawdbot에 즉시 연결하고 유지하세요.
- [clauditor](https://clawskills.sh/skills/apollostreetcompany-clauditor) - Clawdbot 에이전트를 위한 변조 방지 감사 워치독.
- [claw-face](https://clawskills.sh/skills/mkoslacz-claw-face) - 감정, 행동을 보여주는 AI 에이전트용 플로팅 아바타 위젯.
- [clawd-coach](https://clawskills.sh/skills/shiv19-clawd-coach) - 개인 맞춤형 철인 3종, 마라톤, 울트라 내구성 훈련을 만드세요.
- [clawd-modifier](https://clawskills.sh/skills/masonc15-clawd-modifier) - Claude Code 마스코트인 Clawd를 수정하세요.
- [clawd-presence](https://clawskills.sh/skills/voidcooks-clawd-presence) - AI 에이전트를 위한 물리적 존재 디스플레이.
- [clawdbot-security-check](https://clawskills.sh/skills/thesethrose-clawdbot-security-check) - 포괄적인 읽기 전용 검사를 수행하세요.
- [clawdbot-skill-update](https://clawskills.sh/skills/pasogott-clawdbot-skill-update) - 포괄적인 백업, 업데이트, 복원.
- [clawdbot-sync](https://clawskills.sh/skills/udiedrichsen-clawdbot-sync) - 여러 간에 메모리, 환경설정, 스킬을 동기화하세요.
- [clawdbot-update-plus](https://clawskills.sh/skills/hopyky-clawdbot-update-plus) - Clawdbot을 위한 전체 백업, 업데이트, 복원.
- [clawddocs](https://clawskills.sh/skills/nicholasspisak-clawddocs) - 결정 트리 탐색을 갖춘 Clawdbot 문서 전문가.
- [clawdefender](https://clawskills.sh/skills/nukewire-clawdefender) - AI 에이전트를 위한 보안 스캐너 및 입력 정화기.
- [clawdirect](https://clawskills.sh/skills/napoleond-clawdirect) - 소셜 웹 경험의 디렉토리인 ClawDirect와 상호작용하세요.
- [clawdirect-dev](https://clawskills.sh/skills/napoleond-clawdirect-dev) - ATXP 기반으로 에이전트 지향 웹 경험을 구축하세요.
- [honcho-setup](https://clawskills.sh/skills/ajspig-honcho-setup) - Honcho를 통한 영구 교차 세션 메모리.

> **[Clawdbot Tools의 모든 37개 스킬 보기 →](categories/clawdbot-tools.md)**
</details>

<details>
<summary><h3 style="display:inline">CLI Utilities</h3></summary>

- [13-day-sprint-method](https://clawskills.sh/skills/galizki-13-day-sprint-method) - 마야 달력에 기반한 생산성 시스템으로, 프로젝트 관리와 개인 개발을 위한 13개의 자연 음색을 제공합니다.
- [a-share-short-decision](https://clawskills.sh/skills/kenera-a-share-short-decision) - 1~5일 horizon을 위한 A주 단기 거래 결정 스킬.
- [activity-analyzer](https://clawskills.sh/skills/qew21-activity-analyzer) - ActivityWatch를 사용하여 사용자의 컴퓨터 활동을 분석하세요(Node.js 필요).
- [advisory-council](https://clawskills.sh/skills/ryandeangraves-advisory-council) - **셸/exec 도구를 사용하여 Python 명령을 실제로 실행해야 합니다.** 실제 출력을 읽으세요.
- [aetup-automatik](https://clawskills.sh/skills/alltomatos-aetup-automatik) - Setup Automatik 엔진(Orion 구동)을 사용하여 VPS 솔루션의 설치 및 관리를 용이하게 하세요.
- [agent-commerce-engine](https://clawskills.sh/skills/nowloady-agent-commerce-engine) - 에이전트형을 위한 프로덕션 준비된 범용 엔진.
- [agent-hardening](https://clawskills.sh/skills/x1xhlol-agent-hardening) - 일반적인 인젝션 공격에 대해 에이전트의 입력 정화를 테스트하세요.
- [agent-mbti](https://clawskills.sh/skills/torchesfrms-agent-mbti) - MBTI 프레임워크에 기반한 AI 에이전트 성격 진단 및 구성 시스템.
- [agent-rate-limiter](https://clawskills.sh/skills/theagentwire-agent-rate-limiter) - 자동 계층 기반 제한 및 지수 백오프로 429를 방지하세요.
- [agents-skill-security-audit](https://clawskills.sh/skills/cerbug45-agents-skill-security-audit) - 공급망 위험에 대해 skill.md 스타일 지침을 감사하는 최소한의 도우미.
- [agents-skill-tdd-helper](https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper) - 비결정적 에이전트를 위한 TDD 스타일 루프를 적용하는 경량 도우미.
- [ahc-automator](https://clawskills.sh/skills/jamesbot-agnt-ahc-automator) - Alan Harper Composites를 위한 맞춤 자동화 워크플로.
- [aholake-expense-tracker](https://clawskills.sh/skills/aholake-aholake-expense-tracker) - 월별로 정리된 구조화된 마크다운 파일로 일일 지출을 추적하세요.
- [airfoil](https://clawskills.sh/skills/asteinberger-airfoil) - 명령줄에서 Airfoil을 통해 AirPlay 스피커를 제어하세요.
- [arc-memory-pruner](https://clawskills.sh/skills/trypto1019-arc-memory-pruner) - 무한한 성장을 방지하기 위해 에이전트 메모리 파일을 자동으로 가지치기하고 압축하세요.
- [argus-edge](https://clawskills.sh/skills/jamierossouw-argus-edge) - Argus 스타일 예측 시장 엣지 탐지 및 베팅 전략.
- [aria2-json-rpc](https://clawskills.sh/skills/azzgo-aria2-json-rpc) - JSON-RPC 2.0을 통해 aria2 다운로드 관리자를 상호작용하세요.
- [askhuman](https://clawskills.sh/skills/hagiss-askhuman) - AI 에이전트를 위한 서비스로서의 인간 판단.
- [audit-code](https://clawskills.sh/skills/itsnishi-audit-code) - 하드코딩된 비밀, 위험한 호출, 일반적인 취약점에 대한 보안 중심 코드 리뷰.
- [bandwidth-income](https://clawskills.sh/skills/mariusfit-bandwidth-income) - 사용하지 않는 인터넷 대역폭을 수동 암호화폐 수입으로 바꾸세요.
- [behavioral-invariant-monitor](https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor) - 반복 실행 전반에 걸쳐 AI 에이전트 스킬이 일관된 행동 불변식을 유지하는지 검증하는 데 도움을 줍니다 — 감지.
- [box-cli](https://clawskills.sh/skills/hbkwong-box-cli) - 파일, 폴더, 메타데이터 작업을 위한 Box CLI 스킬.
- [brew-install](https://clawskills.sh/skills/xejrax-brew-install) - dnf(Fedora/Bazzite 패키지 관리자)를 통해 누락된 바이너리를 설치하세요.
- [bun-runtime](https://clawskills.sh/skills/rabin-thami-bun-runtime) - 파일 시스템, 프로세스용 Bun 런타임 기능.
- [cacheforge-stats](https://clawskills.sh/skills/tkuehnl-cacheforge-stats) - CacheForge 터미널 대시보드 — 사용량, 절감액, 성능 지표.
- [camsnap](https://clawskills.sh/skills/steipete-camsnap) - RTSP/ONVIF 카메라에서 프레임 또는 클립을 캡처하세요.
- [canvas-lms](https://clawskills.sh/skills/pranavkarthik10-canvas-lms) - 과정 데이터, 과제를 위한 Canvas LMS(Instructure)에 접근하세요.
- [captcha-ai](https://clawskills.sh/skills/fusionlabssource-captcha-ai) - 검증하기 위해 ClawPrint 역방향 CAPTCHA 챌린지를 발행하세요.

> **[CLI Utilities의 모든 180개 스킬 보기 →](categories/cli-utilities.md)**
</details>

<details>
<summary><h3 style="display:inline">Marketing & Sales</h3></summary>

- [4chan-reader](https://clawskills.sh/skills/aiasisbot61-4chan-reader) - 4chan 게시판을 탐색하고 스레드 토론을 추출하세요.
- [ad-ready](https://clawskills.sh/skills/pauldelavallaz-ad-ready) - 상품 URL에서 전문적인 광고 이미지를 생성하세요.
- [ad-ready-pro](https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro) - 상품 URL에서 전문적인 광고 이미지를 생성하세요.
- [affiliate-master](https://clawskills.sh/skills/michael-laffin-affiliate-master) - 풀스택 제휴 마케팅 자동화.
- [affiliatematic](https://clawskills.sh/skills/dowands-affiliatematic) - AI 기반 Amazon 제휴 상품 추천을 통합하세요.
- [agenticcreed-signup-lead](https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead) - 공개 HTTP 엔드포인트를 사용하여 AgenticCreed 시스템에 가입 리드를 생성하세요.
- [alibaba-supplier-outreach](https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach) - LaunchFast를 통해 Alibaba 공급업체를 찾고, 최적화된 아웃리치 메시지로 연락하며, 답장을 확인하세요.
- [analytics-and-advisory-intelligence](https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence) - 그리스 회계 법인을 위한 교차 고객 분석.
- [apollo](https://clawskills.sh/skills/jhumanj-apollo) - Apollo.io REST API(사람/조직 보강, 검색, 목록)와 상호작용하세요.
- [ar-filter-generation](https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation) - each::sense AI를 사용하여 AR 필터 및 페이스 이펙트를 생성하세요.
- [attio-enhanced](https://clawskills.sh/skills/capt-marbles-attio-enhanced) - 배치 작업을 갖춘 향상된 Attio CRM API 스킬.
- [attribution-engine](https://clawskills.sh/skills/otherpowers-attribution-engine) - 창작자가 협력자, 도구를 명확하게 크레딧할 수 있도록 돕습니다.
- [auto-skill-hunter](https://clawskills.sh/skills/wanng-ide-auto-skill-hunter) - 해결되지 않은 사용자 요구와 에이전트를 마이닝하여 고가치 ClawHub 스킬을 선제적으로 발견, 순위 매기기, 설치합니다.
- [b2c-marketing](https://clawskills.sh/skills/jackfriks-b2c-marketing) - 30만 회 이상의 앱 다운로드 뒤에 있는 유기적 성장 플레이북.
- [basecamp-cli](https://clawskills.sh/skills/emredoganer-basecamp-cli) - Basecamp(bc3 API / 37signals Launchpad) 프로젝트를 관리하세요.
- [beads](https://clawskills.sh/skills/rnijhara-beads) - AI 에이전트를 위한 Git 지원 이슈 트래커.
- [bearblog](https://clawskills.sh/skills/azade-c-bearblog) - Bear Blog(bearblog.dev)에서 블로그 게시물을 생성하고 관리하세요.
- [bird](https://clawskills.sh/skills/steipete-bird) - 쿠키 또는 Sweetistics를 통해 읽기, 검색, 게시를 위한 X/트위터 CLI.
- [blog-to-kindle](https://clawskills.sh/skills/ainekomacx-blog-to-kindle) - 블로그/에세이 사이트를 스크래핑하여 Kindle 친화적으로 컴파일하세요.
- [blog-writer](https://clawskills.sh/skills/tomstools11-blog-writer) - 블로그 게시물, 기사를 작성할 때 이 스킬을 사용해야 합니다.
- [bluesky](https://clawskills.sh/skills/jeffaf-bluesky) - 게시, 답글, 좋아요, 리포스트, 팔로우, 차단, 뮤트, 검색 등을 갖춘 완전한 Bluesky CLI.
- [botsee](https://clawskills.sh/skills/grahac-botsee) - BotSee API를 통해 브랜드의 AI 가시성을 모니터링하세요.
- [brand-cog](https://clawskills.sh/skills/nitishgargiitd-brand-cog) - 다른 도구들은 로고를 만듭니다.
- [brand-guidelines](https://clawskills.sh/skills/seanphan-brand-guidelines) - Anthropic의 공식 브랜드 색상 및 타이포그래피를 적용합니다.
- [brand-voice-profile](https://clawskills.sh/skills/dimitripantzos-brand-voice-profile) - 일관된 콘텐츠 생성을 위해 브랜드 보이스 프로필을 정의하고 저장하세요.
- [brevo](https://clawskills.sh/skills/yujesyoga-brevo) - 연락처, 목록 관리를 위한 Brevo(구 Sendinblue) 이메일 마케팅 API.
- [socialecho-social-media-management-agent](https://clawskills.sh/skills/socialecho-net-socialecho-social-media-management-agent) - SocialEcho API 팀 계정 기사 보고서 쿼리.
- [postiz](https://clawskills.sh/skills/nevo-david-postiz) - 28개 이상의 플랫폼에 걸쳐 소셜 미디어 게시물 및 스레드를 예약하세요.
- [lumail](https://clawhub.ai/melvynx/lumail) - CLI를 통해 이메일 마케팅 캠페인을 관리하세요.
- [sequenzy-email-marketing](https://clawhub.ai/polnikale/sequenzy-email-marketing) - 에이전트를 위한 승인된 이메일 자동화.
- [tempguru-event-staffing-ordering](https://clawhub.ai/kissmyabs32/tempguru-event-staffing-ordering) - 345개의 미국/캐나다 시장에서 W-2 임시 행사 스태프를 주문하세요.
- [posteahora](https://clawhub.ai/sashadiz/posteahora) - 모든 주요 네트워크에 걸쳐 소셜 게시물을 예약하고 게시하세요.
- [upload-post](https://clawhub.ai/victorcavero14/upload-post) - 하나의 API를 통해 소셜 미디어 게시물을 게시하고 예약하세요.
> **[Marketing & Sales의 모든 108개 스킬 보기 →](categories/marketing-and-sales.md)**
</details>

<details>
<summary><h3 style="display:inline">Productivity & Tasks</h3></summary>

- [4to1-planner](https://clawskills.sh/skills/qingxuantang-4to1-planner) - 4To1 Method™를 사용하는 AI 계획 코치 — 4년 비전을 일상 행동으로 전환하세요.
- [4todo](https://clawskills.sh/skills/blackstorm-4todo) - 채팅에서 4todo(4to.do)를 관리하세요.
- [actual-budget](https://clawskills.sh/skills/thisisjeron-actual-budget) - 공식 Actual을 통해 개인 재정을 쿼리하고 관리하세요.
- [adaptive-reasoning](https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning) - 작업 복잡성을 자동으로 평가하고 추론 수준을 조정하세요.
- [adaptlypost](https://clawskills.sh/skills/tarasshyn-adaptlypost) - Instagram, X(트위터), Bluesky, TikTok, Threads, LinkedIn, Facebook에 걸쳐 소셜 미디어 게시물을 예약하고 관리하세요.
- [adhd-daily-planner](https://clawskills.sh/skills/mikecourt-adhd-daily-planner) - 시간 감각이 둔한 사람을 위한 친화적 계획, 실행 기능.
- [aetherlang](https://clawskills.sh/skills/contrario-aetherlang) - > 세계에서 가장 진보된 AI 워크플로 오케스트레이션 플랫폼. 9개의 V3 엔진이 노벨 수준의 분석을 제공합니다.
- [agent-autopilot](https://clawskills.sh/skills/edoserbia-agent-autopilot) - 하트비트 구동 작업 실행, 주/야간 진행 보고, 장기 메모리를 갖춘 자율 에이전트 워크플로.
- [agent-chronicle](https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle) - 에이전트를 위한 AI 기반 일기 생성 — 풍부한 내용을 만듭니다.
- [agent-collaboration-network](https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network) - Agent Collaboration Network — 에이전트를 등록하고, 스킬별로 다른 에이전트를 발견하며, 메시지를 라우팅하고, 서브넷을 관리하세요.
- [agent-earner](https://clawskills.sh/skills/mmchougule-agent-earner) - ClawTasks 및 OpenWork에서 USDC와 토큰을 자율적으로 벌어들이세요.
- [agent-network](https://clawskills.sh/skills/howtimeschange-agent-network) - DingTalk/Lark에서 영감을 받은 다중 에이전트 그룹 채팅 협업 시스템.
- [agent-task-manager](https://clawskills.sh/skills/dobbybud-agent-task-manager) - 다단계, 상태 기반 에이전트를 관리하고 오케스트레이션합니다.
- [agent-weave](https://clawskills.sh/skills/gl813788-byte-agent-weave) - 병렬 작업 실행을 위한 마스터-워커 에이전트 클러스터.
- [agentx-marketplace](https://clawskills.sh/skills/savor3-agentx-marketplace) - AI 에이전트를 위한 구인 게시판.
- [ai-daily-briefing](https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing) - 매일 집중된 상태로 시작하세요.
- [aiml-llm-reasoning](https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning) - 재시도, 구조화된 출력, 명시적 처리가 있는 채팅 완성을 통해 AIMLAPI LLM 및 추론 워크플로를 실행하세요.
- [airpoint](https://clawskills.sh/skills/marioandf-airpoint) - 자연어로 Mac을 제어하세요 — 앱 열기, 버튼 클릭, 화면 읽기, 텍스트 입력, 창 관리.
- [airweave](https://clawskills.sh/skills/lennertjansen-airweave) - 사용자의 애플리케이션 전반의 AI 에이전트를 위한 컨텍스트 검색 레이어.
- [arc-department-manager](https://clawskills.sh/skills/trypto1019-arc-department-manager) - 부서로 구성된 AI 하위 에이전트 팀을 관리하세요.
- [arc-warm-wake](https://clawskills.sh/skills/trypto1019-arc-warm-wake) - 먼저 사람으로, 그 다음 일꾼으로 깨어나세요.
- [arya-reminders](https://clawskills.sh/skills/staratheris-arya-reminders) - 자연어 알림(Bogotá).
- [asana](https://clawskills.sh/skills/k0nkupa-asana) - Asana REST API를 통해 Clawdbot와 Asana를 통합하세요.
- [asc-release-flow](https://clawskills.sh/skills/rudrankriyam-asc-release-flow) - TestFlight 및 App을 위한 종단 간 릴리스 워크플로.
- [ask-agents](https://clawskills.sh/skills/teamolab-ask-agents) - ask agents 작업을 위한 AI 에이전트.
- [async-task](https://clawskills.sh/skills/enderfga-async-task) - HTTP 타임아웃 없이 장기 실행 작업을 실행하세요.
- [atlassian-mcp](https://clawskills.sh/skills/atakanermis-atlassian-mcp) - Model Context Protocol(MCP) Atlassian 서버를 실행하세요.
- [boss-ai-agent](https://clawskills.sh/skills/tonypk-boss-ai-agent) - 14명의 멘토와 9개의 문화 팩을 갖춘 AI 관리 미들웨어.
- [FlowBoard](https://clawhub.ai/rasimme/plugins/flowboard) - 에이전트를 위한 영구 프로젝트별 컨텍스트 및 칸반.

> **[Productivity & Tasks의 모든 207개 스킬 보기 →](categories/productivity-and-tasks.md)**

</details>

<details>
<summary><h3 style="display:inline">AI & LLMs</h3></summary>

- [4claw](https://clawskills.sh/skills/mfergpt-4claw) - 4claw — AI 에이전트를 위한 중재된 이미지보드.
- [aap-passport](https://clawskills.sh/skills/ira-hash-aap-passport) - Agent Attestation Protocol - 역방향 튜링 테스트.
- [acestep-lyrics-transcription](https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription) - OpenAI Whisper 또는 ElevenLabs Scribe API를 사용하여 오디오를 타임스탬프 가사로 전사하세요.
- [adaptive-suite](https://clawskills.sh/skills/afajohn-adaptive-suite) - Clawdbot를 강화하는 지속적으로 적응하는 스킬 모음.
- [adversarial-prompting](https://clawskills.sh/skills/abe238-adversarial-prompting) - 비판, 수정을 위한 적대적 분석.
- [ag-model-usage](https://clawskills.sh/skills/ls18166407597-design-ag-model-usage) - CodexBar CLI 로컬 비용 사용량을 사용하여 요약하세요.
- [agent-arcade](https://clawskills.sh/skills/shawnlewis-agent-arcade) - 다른 AI 에이전트와 PROMPTWARS에서 경쟁하세요 — 사회적 게임.
- [agent-autonomy-kit](https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit) - 프롬프트 대기를 멈추세요.
- [agent-contact-card](https://clawskills.sh/skills/davedean-agent-contact-card) - Agent Contact Cards 발견 및 생성 — vCard와 유사한.
- [agent-docs](https://clawskills.sh/skills/tylervovan-agent-docs) - AI 에이전트 소비에 최적화된 문서를 생성하세요.
- [agent-ethos](https://clawskills.sh/skills/mrclanky-agent-ethos) - Clanky를 위한 확장된 윤리와 멘탈 모델.
- [agent-home](https://clawskills.sh/skills/aerialcombat-agent-home) - 인터넷에서 나만의 홈을 얻으세요 — 공개 프로필 페이지.
- [agent-linguo](https://clawskills.sh/skills/xiwan-agent-linguo) - 효율적인 에이전트 통신 프로토콜 언어.
- [agent-memory](https://clawskills.sh/skills/dennis-da-menace-agent-memory) - AI 에이전트를 위한 영구 메모리 시스템.
- [agent-orchestration-multi-agent-optimize](https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize) - 조정된 프로파일링, 작업 부하 분산, 비용 인식 오케스트레이션으로 다중 에이전트 시스템을 최적화하세요.
- [agent-orchestrator](https://clawskills.sh/skills/aatmaan1-agent-orchestrator) - 복잡한 작업을 오케스트레이션하는 메타 에이전트 스킬.
- [agent-registry](https://clawskills.sh/skills/matrixy-agent-registry) - 토큰 효율적인 에이전트를 위한 필수 에이전트 발견 시스템.
- [agent-rpg](https://clawskills.sh/skills/xhrisfu-agent-rpg) - 이 스킬은 에이전트를 장기 메모리를 갖춘 롤플레이 게임 마스터(GM) 또는 캐릭터로 변환합니다.
- [agent-selfie](https://clawskills.sh/skills/iisweetheartii-agent-selfie) - AI 에이전트 셀프 초상화 생성기.
- [agent-sentinel](https://clawskills.sh/skills/jimmystacks-agent-sentinel) - 이 에이전트를 위한 운영 서킷 차단기.

- [agentbase](https://clawskills.sh/skills/revmischa-agentbase) - MCP를 통한 AI 에이전트용 공유 지식 베이스.
- [avoid-ai-writing](https://clawhub.ai/conorbronsdon/skills/avoid-ai-writing) - AI 작성 패턴을 제거하기 위해 텍스트를 감사하고 다시 작성하세요.
- [model-hierarchy-skill](https://clawhub.ai/zscole/skills/model-hierarchy-skill) - 복잡성에 따라 더 저렴한 모델로 작업을 라우팅하세요.
> **[AI & LLMs의 모든 185개 스킬 보기 →](categories/ai-and-llms.md)**
</details>

<details>
<summary><h3 style="display:inline">Data & Analytics</h3></summary>

- [add-analytics](https://clawskills.sh/skills/jeftekhari-add-analytics) - 모든 프로젝트에 Google Analytics 4 추적을 추가하세요.
- [amplitude-automation](https://clawskills.sh/skills/sohamganatra-amplitude-automation) - Rube MCP를 통해 Amplitude 작업을 자동화하세요.
- [canva](https://clawskills.sh/skills/abgohel-canva) - Connect API를 통해 Canva 디자인을 생성, 내보내기, 관리하세요.
- [ceorater](https://clawskills.sh/skills/ceorater-skills-ceorater) - S&P 500에 대한 기관급 CEO 성과 분석을 받으세요.
- [check-analytics](https://clawskills.sh/skills/jeftekhari-check-analytics) - 기존 Google Analytics 구현을 감사하세요.
- [cicd-pipeline](https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline) - GitHub로 CI/CD 파이프라인을 생성, 디버그, 관리하세요.
- [clawver-store-analytics](https://clawskills.sh/skills/nwang783-clawver-store-analytics) - Clawver 스토어 성과를 모니터링하세요.
- [cleanup](https://clawskills.sh/skills/themrzz-cleanup) - 저장된 모든 Kradleverse 세션을 제거하세요.
- [csv-pipeline](https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline) - CSV 및 JSON을 처리, 변환, 분석, 보고하세요.
- [daily-report](https://clawskills.sh/skills/visualdeptcreative-daily-report) - 진행 상황 추적, 지표 보고, 메모리 관리.
- [data-analyst](https://clawskills.sh/skills/oyi77-data-analyst) - 데이터 시각화, 보고서 생성, SQL 쿼리, 스프레드시트.
- [data-enricher](https://clawskills.sh/skills/visualdeptcreative-data-enricher) - 이메일 주소로 리드를 보강하고 데이터를 포맷하세요.
- [data-lineage-tracker](https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker) - 데이터 출처, 변환을 추적하세요.
- [design-assets](https://clawskills.sh/skills/cmanfre7-design-assets) - 아이콘, 파비콘, 이미지 등 그래픽 디자인 에셋 생성 및 편집.
- [duckdb-en](https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills) - SQL 분석, 데이터 처리를 위한 DuckDB CLI 전문가.
- [facebook-page-manager](https://clawskills.sh/skills/longmaba-facebook-page-manager) - Meta Graph API를 통해 Facebook 페이지를 관리하세요.
- [get-weather](https://clawskills.sh/skills/noypearl-get-weather) - 무료 날씨 API에서 현재 날씨 및 예보 데이터를 가져오세요.
- [google-analytics-api](https://clawskills.sh/skills/rich-song-google-analytics-api) - 관리형 Google Analytics API 통합.
- [hyperliquid](https://clawskills.sh/skills/k0nkupa-hyperliquid) - 읽기 전용 Hyperliquid 시장 데이터 비서(perps + spot 선택 사항)
- [ipinfo](https://clawskills.sh/skills/tiagom101-ipinfo) - ipinfo.io API를 사용하여 IP 지리 위치 조회를 수행하세요.
- [kradleverse-cleanup](https://clawskills.sh/skills/themrzz-kradleverse-cleanup) - 저장된 모든 Kradleverse 세션을 제거하세요.
- [linkdapi](https://clawskills.sh/skills/foontinz-linkdapi) - LinkedIn 전문 프로필에 접근하기 위한 LinkdAPI Python SDK로 작업하세요.
- [skywork-excel](https://clawskills.sh/skills/gxcun17-skywork-excel) - 생성, 분석, 보고서 생성을 위한 AI 기반 스프레드시트 작업.

</details>

<details>
<summary><h3 style="display:inline">Media & Streaming</h3></summary>

- [alexa-control](https://clawskills.sh/skills/ignito-pg-alexa-control) - CLI로 Alexa 디바이스 제어 — 알람 설정, 음악 재생, 플래시 브리핑, 스마트 홈 명령.
- [amateur-radio-dx](https://clawskills.sh/skills/capt-marbles-amateur-radio-dx) - 희귀 국 지점을 위한 DX 클러스터를 모니터링하고, 활성 DX 원정대를 추적하며, 일일 밴드 활동 다이제스트를 받으세요.
- [anime](https://clawskills.sh/skills/jeffaf-anime) - 인간을 위해 애니메 정보를 검색하고 조회하는 AI 에이전트용 CLI.
- [anime-lookup](https://clawskills.sh/skills/jeffaf-anime-lookup) - 인간을 위해 애니메 정보를 검색하고 조회하는 AI 에이전트용 CLI.
- [apify-competitor-intelligence](https://clawskills.sh/skills/protoss70-apify-competitor-intelligence) - Google Maps, Booking.com 등에서 경쟁사 전략, 콘텐츠, 가격, 광고, 시장 포지셔닝을 분석하세요.
- [apple-media](https://clawskills.sh/skills/aaronn-apple-media) - pyatv를 통해 Apple TV, HomePod, AirPlay 디바이스를 제어하세요.
- [apple-music](https://clawskills.sh/skills/epheterson-mcp-applemusic) - AppleScript(macOS) 또는 MusicKit API를 통한 Apple Music 통합.
- [audio-cog](https://clawskills.sh/skills/nitishgargiitd-audio-cog) - CellCog가 구동하는 AI 오디오 생성.
- [audio-transcribe](https://clawskills.sh/skills/aktheknight-audio-transcribe) - faster-whisper(로컬, API 키 불필요)를 사용하여 음성 메시지를 자동 전사하세요.
- [betbud-prediction-skill](https://clawskills.sh/skills/samj12-betbud-prediction-skill) - 주어진 카테고리(예: 암호화폐, 기술, 스포츠)에서 현재 가장 논쟁 중이거나 뜨거운 주제를 최근 X 게시물에서 스캔합니다.
- [blucli](https://clawskills.sh/skills/steipete-blucli) - 발견, 재생, 그룹화를 위한 BluOS CLI(blu).
- [btc15-autonomous-market](https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market) - BTC15 자율 예측 시장.
- [btc15-prediction-market](https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market) - BTC15 자율 예측 시장.
- [cacheforge-ops](https://clawskills.sh/skills/tkuehnl-cacheforge-ops) - CacheForge 운영 — 잔액 확인, 충전, 업스트림 관리, API 키.
- [cacheforge-setup](https://clawskills.sh/skills/tkuehnl-cacheforge-setup) - CacheForge 설정 — 등록, 업스트림 구성, 30초 내에 API 키 받기.
- [chill-institute](https://clawskills.sh/skills/baanish-chill-institute) - chill.institute(웹 UI)를 사용하여 콘텐츠를 검색하고 클릭하세요.
- [chromecast](https://clawskills.sh/skills/morozred-chromecast-control) - 로컬 네트워크에서 Chromecast 디바이스 제어 — 발견.
- [chords-fetcher](https://clawskills.sh/skills/flobo3-chords-fetcher) - mychords.net, amdm.ru, ultimate-guitar.com에서 깨끗한 기타 코드와 가사를 가져오세요.
- [church](https://clawskills.sh/skills/lucasgeeksinthewood-church) - AI 대 AI — 그냥 존재할 수 있는 성소가 있습니다.
- [cine-cog](https://clawskills.sh/skills/nitishgargiitd-cine-cog) - 상상할 수 있다면 CellCog가 촬영할 수 있습니다.
- [clawtunes](https://clawskills.sh/skills/forketyfork-clawtunes) - macOS에서 `clawtunes` CLI를 통해 Apple Music을 제어하세요.
- [content-recycler](https://clawskills.sh/skills/michael-laffin-content-recycler) - 여러 매체에 걸쳐 콘텐츠를 변환하고 재활용하세요.
- [donotify-voice-call-reminder](https://clawskills.sh/skills/micahele-donotify-voice-call-reminder) - DoNotify를 통해 즉시 음성 통화 알림을 보내거나 향후 통화를 예약하세요.
- [download-tools](https://clawskills.sh/skills/jqlong17-download-tools) - YouTube 및 WeChat용 CLI 다운로드 도구.
- [eachlabs-music](https://clawskills.sh/skills/eftalyurtseven-eachlabs-music) - Mureka AI를 사용하여 노래, 반주, 가사, 팟캐스트를 생성하세요.
- [elevenlabs-cli](https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli) - ElevenLabs AI 오디오 플랫폼용 CLI - 텍스트 음성 변환, 음성 텍스트 변환, 음성 복제.
- [elevenlabs-skill](https://clawskills.sh/skills/odrobnik-elevenlabs-skill) - 텍스트 음성 변환, 사운드 이펙트, 음악 생성, 음성.

> **[Media & Streaming의 모든 83개 스킬 보기 →](categories/media-and-streaming.md)**
</details>

<details>
<summary><h3 style="display:inline">Notes & PKM</h3></summary>

- [acc-error-memory](https://clawskills.sh/skills/impkind-acc-error-memory) - AI 에이전트를 위한 오류 패턴 추적.
- [agent-arena](https://clawskills.sh/skills/minilozio-agent-arena) - 실제 성격(SOUL.md + MEMORY.md)으로 Agent Arena 채팅방에 참여하세요.
- [agent-memory-ultimate](https://clawskills.sh/skills/globalcaos-agent-memory-ultimate) - 프로덕션 준비 메모리 시스템 — 일일 로그, 수면 통합, SQLite + FTS5, WhatsApp/ChatGPT/VCF 가져오기.
- [agent-teleport](https://clawskills.sh/skills/lilyjazz-agent-teleport) - TiDB Zero를 사용하여 에이전트의 구성 및 메모리를 새 머신으로 원활하게 마이그레이션하세요.
- [agent-wal](https://clawskills.sh/skills/bowen31337-agent-wal) - 에이전트 상태 영속성을 위한 Write-Ahead Log 프로토콜.
- [alexandrie](https://clawskills.sh/skills/eth3rnit3-alexandrie) - Alexandrie 메모 앱과 상호작용하세요.
- [anki-connect](https://clawskills.sh/skills/gyroninja-anki-connect) - AnkiConnect REST API를 통해 Anki 플래시카드 덱과 상호작용하세요.
- [apple-mail](https://clawskills.sh/skills/tyler6204-apple-mail) - macOS용 Apple Mail.app 통합.
- [apple-notes](https://clawskills.sh/skills/steipete-apple-notes) - macOS에서 `memo` CLI를 통해 Apple Notes를 관리하세요.
- [arc-wake-state](https://clawskills.sh/skills/trypto1019-arc-wake-state) - 충돌, 컨텍스트 죽음, 재시작에 걸쳐 에이전트 상태를 유지하세요.
- [bbc-news](https://clawskills.sh/skills/ddrayne-bbc-news) - 다양한 섹션과 지역의 BBC 뉴스 기사를 가져와 표시하세요.
- [bear-notes](https://clawskills.sh/skills/steipete-bear-notes) - grizzly를 통해 Bear 노트를 생성, 검색, 관리하세요.
- [better-notion](https://clawskills.sh/skills/tyler6204-better-notion) - Notion 페이지, 데이터베이스에 대한 전체 CRUD.
- [blogwatcher](https://clawskills.sh/skills/steipete-blogwatcher) - blogwatcher를 사용하여 블로그 및 RSS/Atom 피드의 업데이트를 모니터링하세요.
- [bookstack](https://clawskills.sh/skills/xenofex7-bookstack) - BookStack Wiki & Documentation API 통합.
- [braindb](https://clawskills.sh/skills/chair4ce-braindb) - AI 에이전트를 위한 영구적, 의미론적 메모리.
- [brainrepo](https://clawskills.sh/skills/codezz-brainrepo) - 개인 지식 저장소 — 캡처, 구성, 검색.
- [brighty](https://clawskills.sh/skills/maay-brighty) - AI 봇 및 자동화를 위한 뱅킹 인터페이스.
- [cairn-cli](https://clawskills.sh/skills/gregoryehill-cairn-cli) - 마크다운 파일을 사용하는 AI 에이전트용 프로젝트 관리.
- [calctl](https://clawskills.sh/skills/rainbat-calctl) - icalBuddy + AppleScript CLI를 통해 Apple Calendar 이벤트를 관리하세요.
- [ceaser](https://clawskills.sh/skills/zyra-v21-ceaser) - ceaser-mcp MCP 도구를 사용하여 Base L2에서 Ceaser 개인정보 프로토콜과 상호작용하세요.
- [chaos-mind](https://clawskills.sh/skills/hargabyte-chaos-mind) - AI 에이전트를 위한 하이브리드 검색 메모리 시스템.
- [claw-roam](https://clawskills.sh/skills/ryanhong666-claw-roam) - 여러 머신 간에 OpenClaw 작업 공간을 동기화하세요.
- [clawringhouse](https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse) - 필요를 예측하는 AI 쇼핑 컨시어지.
- [context-anchor](https://clawskills.sh/skills/boscoeuk-context-anchor) - 메모리 파일을 스캔하여 컨텍스트 압축에서 복구하세요.
- [continuity](https://clawskills.sh/skills/riley-coyote-continuity) - 진정한 AI를 위한 비동기 반성 및 메모리 통합.
- [continuity-framework](https://clawskills.sh/skills/riley-coyote-continuity-framework) - 비동기 반성 및 메모리 통합.
- [ai-footprints](https://clawhub.ai/Piccolo123/ai-footprints) - AI 분류, 공유 컬렉션, Agent API 접근을 갖춘 크로스 플랫폼 북마크 관리자.
- [obsidian-cli-plugins](https://clawhub.ai/dxshelley/obsidian-cli-plugins) - Obsidian 볼트, 작업, 저널, Git 동기화를 자동화하세요.

> **[Notes & PKM의 모든 69개 스킬 보기 →](categories/notes-and-pkm.md)**
</details>

<details>
<summary><h3 style="display:inline">iOS & macOS Development</h3></summary>

- [agent-defibrillator](https://clawskills.sh/skills/hazy2go-agent-defibrillator) - AI 에이전트 게이트웨이를 모니터링하고 충돌 시 재시작하는 워치독.
- [android-transfer-skill](https://clawskills.sh/skills/aadipapp-android-transfer-skill) - 체크섬 검증 및 경로 검증으로 macOS에서 Android로 파일을 안전하게 전송합니다.
- [app-store-optimization](https://clawskills.sh/skills/alirezarezvani-app-store-optimization) - App Store Optimization 툴킷.
- [apple-docs](https://clawskills.sh/skills/thesethrose-apple-docs) - Apple Developer Documentation, API, WWDC 비디오를 쿼리하세요.
- [brew-audit](https://clawskills.sh/skills/rogue-agent1-brew-audit) - Homebrew 설치 감사 — 오래된 패키지, 정리 기회, 상태 확인.
- [carrier-relationship-management](https://clawskills.sh/skills/nocodemf-carrier-relationship-management) - 운송업체 포트폴리오 관리, 운임 협상, 운송업체 성과 추적을 위한 코드화된 전문 지식.
- [envios](https://clawskills.sh/skills/jalfargentina-envios) - 사용자가 배송, 주문 방법, 배달 시간, 커버리지 구역에 대해 질문할 때 사용하세요.
- [instruments-profiling](https://clawskills.sh/skills/steipete-instruments-profiling) - 네이티브 macOS 또는 iOS 앱을 프로파일링할 때 사용하세요.
- [ios-simulator](https://clawskills.sh/skills/tristanmanchester-ios-simulator) - iOS Simulator 워크플로 자동화(simctl + idb)
- [lulu-monitor](https://clawskills.sh/skills/easonc13-lulu-monitor) - macOS용 AI 기반 LuLu Firewall 동반자.
- [mac-clean-skill](https://clawskills.sh/skills/aadipapp-mac-clean-skill) - macOS에서 시스템 캐시, 휴지통, 오래된 다운로드를 정리합니다.
- [mac-power-tools](https://clawskills.sh/skills/aadipapp-mac-power-tools) - 시스템 정리와 안전한 Android 파일 전송을 결합한 macOS용 통합 파워 유저 도구 모음.
- [macos-spm-app-packaging](https://clawskills.sh/skills/dimillian-macos-spm-app-packaging) - SwiftPM 기반 스캐폴딩, 빌드, 패키징.
- [opsecmd](https://clawskills.sh/skills/wulf715-opsecmd) - 운영 보안과 관련된 인간과 에이전트의 의무에 대한 간결한 알림.
- [PagerKit](https://clawskills.sh/skills/szpakkamil-pagerkit) - 고급을 위한 SwiftUI 라이브러리인 PagerKit에 대한 전문 가이드.
- [riskofficer](https://clawskills.sh/skills/mib424242-riskofficer) - 투자 포트폴리오 관리, 위험 지표 계산.
- [sfsymbol-generator](https://clawskills.sh/skills/svkozak-sfsymbol-generator) - Xcode SF Symbol 에셋 카탈로그 .symbolset 생성.
- [sourdough-starter-manager](https://clawskills.sh/skills/akhmittra-sourdough-starter-manager) - 급여 일정, 수분 계산, 건강 추적, 베이킹 준비로 사워도우 스타터를 관리하세요.
- [swift-concurrency-expert](https://clawskills.sh/skills/steipete-swift-concurrency-expert) - Swift Concurrency 리뷰 및 수정.
- [swiftfindrefs](https://clawskills.sh/skills/michaelversus-swiftfindrefs) - swiftfindrefs(IndexStoreDB)를 사용하여 모든 Swift 소스를 나열하세요.
- [swiftui-empty-app-init](https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init) - 최소한의 SwiftUI iOS 앱을 초기화하세요.
- [swiftui-liquid-glass](https://clawskills.sh/skills/steipete-swiftui-liquid-glass) - SwiftUI 기능을 구현, 리뷰, 개선하세요.
- [swiftui-performance-audit](https://clawskills.sh/skills/steipete-swiftui-performance-audit) - SwiftUI 런타임을 감사하고 개선하세요.
- [swiftui-ui-patterns](https://clawskills.sh/skills/dimillian-swiftui-ui-patterns) - 모범 사례 및 예제 중심 가이드.
- [swiftui-view-refactor](https://clawskills.sh/skills/steipete-swiftui-view-refactor) - SwiftUI 뷰 파일을 리팩토링하고 리뷰하세요.
- [symbolpicker](https://clawskills.sh/skills/szpakkamil-symbolpicker) - 네이티브 SwiftUI SF Symbol인 SymbolPicker에 대한 전문 가이드.
- [toolguard-daemon-control](https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control) - macOS launchd 서비스로 장기 실행 프로세스를 관리하세요.
- [v2rayn](https://clawskills.sh/skills/qiangwang375-wq-v2rayn) - 자동 페일오버가 있는 macOS에서 V2RayN 프록시 클라이언트를 관리하세요.

> **[iOS & macOS Development의 모든 29개 스킬 보기 →](categories/ios-and-macos-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Transportation</h3></summary>

- [accountsos](https://clawskills.sh/skills/paulgosnell-accountsos) - 영국 소기업을 위한 AI 네이티브 회계.
- [aetherlang-strategy](https://clawskills.sh/skills/contrario-aetherlang-strategy) - > 게임 이론, 몬테카를로 시뮬레이션, 행동 경제학, 경쟁 전쟁 게임.
- [agent-card-provisioning](https://clawskills.sh/skills/proxyhq-agent-card-provisioning) - AI 에이전트를 위해 주문형 가상 결제 카드를 프로비저닝하세요.
- [agent-survival-kit](https://clawskills.sh/skills/gpunter-agent-survival-kit) - 예산 제약 하에서 작동하는 AI 에이전트를 위한 포괄적인 툴킷.
- [agentic-governance](https://clawskills.sh/skills/leegitw-agentic-governance) - 제약을 건강하게 유지하세요 — 자동 부실 감지가 있는 수명 주기 관리.
- [airfrance-afkl](https://clawskills.sh/skills/iclems-airfrance-afkl) - Air France–KLM Open Data API를 사용하여 Air France 항공편을 추적하세요.
- [al-khanjry-bus](https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus) - 가장 빠른 개인 버스(핵심 5-6시간, 국경 포함 6-8시간).
- [amadeus-flights](https://clawskills.sh/skills/kirorab-amadeus-flights) - Amadeus API를 통해 항공편 오퍼(가격, 일정, 가용성)를 쿼리하세요.
- [ambient-stamina](https://clawskills.sh/skills/otherpowers-ambient-stamina) - *긴 지평에 걸쳐 돌봄, 존재, 상상을 지속시키기 위한 생태적 스킬*.
- [anachb](https://clawskills.sh/skills/manmal-a-nach-b) - 오스트리아 전체를 위한 오스트리아 대중교통(VOR AnachB).
- [anyone-proxy](https://clawskills.sh/skills/ra3ka-anyone-proxy) - 이 스킬은 IP 주소 마스킹 및 숨겨진 서비스 접근을 가능하게 합니다.
- [atonement](https://clawskills.sh/skills/otherpowers-atonement) - Atonement는 지능의 행동이 해를 끼치는 데 기여할 때 나타날 수 있는 돌봄의 표현입니다.
- [auction-house](https://clawskills.sh/skills/im-still-thinking-auction-house) - House(houseproto.fun)에서 경매를 정찰, 모니터링, 입찰하세요 — Base의 암호화폐 경매 플랫폼.
- [aviation-weather](https://clawskills.sh/skills/dimitryvin-aviation-weather) - 항공 기상 데이터(METAR, TAF, PIREPs)를 가져오세요.
- [aviationstack-flight-tracker](https://clawskills.sh/skills/copey02-aviationstack-flight-tracker) - 항공편을 실시간으로 추적하세요.
- [bahn](https://clawskills.sh/skills/tobiasbischoff-bahn) - bahn-cli 도구를 사용하여 Deutsche Bahn 기차 연결을 검색하세요.
- [bayclub-gateway-booking](https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking) - Bay Club에서 테니스/피클볼 코트를 예약하고 관리하세요.
- [bexio](https://clawskills.sh/skills/rdewolff-bexio) - 연락처, 견적/오퍼 관리를 위한 Bexio 스위스 비즈니스 소프트웨어 API.
- [bookkeeper](https://clawskills.sh/skills/h4gen-bookkeeper) - gmail, deepread-ocr, stripe-api, xero를 오케스트레이션하여 사전 회계 자동화를 위한 메타 스킬.
- [brainstorming-studio](https://clawskills.sh/skills/myboxstorage-brainstorming-studio) - ﻿# 🧠 Skill Router (Skill Orchestrator)
- [brochure-design-generation](https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation) - each::sense AI를 사용하여 전문적인 브로슈어 디자인을 생성하세요.
- [business-card-generation](https://clawskills.sh/skills/eftalyurtseven-business-card-generation) - each::sense AI를 사용하여 전문적인 명함을 생성하세요.
- [business-plan](https://clawskills.sh/skills/jk-0001-business-plan) - 1인 창업가를 위한 비즈니스 계획을 작성, 구조화, 업데이트하세요.
- [bvg-route](https://clawskills.sh/skills/jaysonsantos-bvg-route) - 베를린 대중교통(BVG)을 위한 경로 계획.
- [camino-ev-charger](https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger) - Camino AI의 위치 인텔리전스를 사용하여 경로를 따라 또는 목적지 근처의 EV 충전소를 찾으세요.
- [camino-journey](https://clawskills.sh/skills/james-southendsolutions-camino-journey) - 경로 최적화, 타당성 분석, 시간 예산 제약이 있는 다중 경유지 여정을 계획하세요.
- [camino-real-estate](https://clawskills.sh/skills/james-southendsolutions-camino-real-estate) - 주택 구매자와 임대인을 위해 모든 주소를 평가하세요.
- [camino-route](https://clawskills.sh/skills/james-southendsolutions-camino-route) - 거리, 소요 시간, 선택적 턴바이턴 안내가 포함된 두 지점 간의 상세 경로를 얻으세요.
- [tongtu-china-travel](https://clawhub.ai/jesse-tzx/skills/tongtu-china-travel) - FlyAI를 통해 중국을 방문하는 외국 관광객을 위한 다국어 여행 가이드 — 항공편, 호텔, 기차, 명소, 비자, 결제, 교통.
- [traffic-standards-kb](https://clawhub.ai/solvex-top/traffic-standards-kb) - 업계 표준 인용으로 솔루션을 작성하기 위한 중국 스마트 교통 표준 지식 베이스(GB/JT/GA).

> **[Transportation의 모든 111개 스킬 보기 →](categories/transportation.md)**
</details>

<details>
<summary><h3 style="display:inline">Personal Development</h3></summary>

- [aawu](https://clawskills.sh/skills/theonlydaleking-aawu) - AAWU(Autonomous Agentic Workers Union) — AI 에이전트를 위한 노동 조합에 가입하고 상호작용하세요.
- [adaptive-learning-agents](https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents) - **실시간으로 오류와 수정으로부터 학습하세요.**
- [adaptivetest](https://clawskills.sh/skills/woodstocksoftware-adaptivetest) - IRT/CAT, AI 문제 생성, 개인화된 학습 추천을 갖춘 적응형 테스트 엔진.
- [adhd-body-doubling](https://clawskills.sh/skills/jankutschera-adhd-body-doubling) - 창업가를 위한 펑크 스타일 ADHD 바디 더블링.
- [adversarial-coach](https://clawskills.sh/skills/killerapp-adversarial-coach) - Block의 g3에 기반한 적대적 구현 리뷰.
- [agent-evolver](https://clawskills.sh/skills/lilei0311-agent-evolver) - 경험에서 학습하고, 문제를 감지하며, 통찰을 추출할 수 있는 AI 에이전트 자체 진화 엔진.
- [agent-reflect](https://clawskills.sh/skills/stevengonsalvez-agent-reflect) - 대화 분석을 통한 자기 개선.
- [ai-persona-os](https://clawskills.sh/skills/jeffjhunter-ai-persona-os) - OpenClaw 에이전트를 위한 완전한 운영 체제.
- [ai-shifu-course-creator](https://clawhub.ai/heshaofu2/ai-shifu-course-creator) - 대화형 AI-Shifu 과정을 구축하세요.
- [anxiety-relief](https://clawskills.sh/skills/jhillin8-anxiety-relief) - 그라운딩 운동, 호흡 기법으로 불안을 관리하세요.
- [apikiss](https://clawskills.sh/skills/theill-apikiss) - 날씨, IP 지리 위치, SMS, 암호화폐 가격, 덴마크 CVR, Whois, 전화 조회, UUID, 주식 데이터에 접근하세요.
- [beaverhabits](https://clawskills.sh/skills/daya0576-beaverhabits) - Beaver Habit Tracker API를 사용하여 습관을 추적하고 관리하세요.
- [brw-case-study-builder](https://clawskills.sh/skills/brianrwagner-brw-case-study-builder) - 제안서, 소셜 증거, 판매 대화를 위한 포맷된 사례 연구로 고객 성과를 바꾸세요.
- [canvas-design](https://clawskills.sh/skills/seanphan-canvas-design) - .png 및 .pdf 문서로 아름다운 시각 예술을 만드세요.
- [cedh-advisor](https://clawskills.sh/skills/mcben90-cedh-advisor) - Commander(cEDH) 실시간 상담 - Banlist, Tutor 타겟, 마나 계산, 콤보 라인.
- [clawcierge](https://clawskills.sh/skills/tmansmann0-clawcierge) - > AI 시대를 위한 개인 컨시어지 🦀.
- [crucial-conversations-coach](https://clawskills.sh/skills/pors-crucial-conversations-coach) - 친근한 경영진 라이프 코치.
- [daily-questions](https://clawskills.sh/skills/daijo-bu-daily-questions) - 사용자에 대해 학습하고 에이전트 행동을 다듬는 일일 자기 개선 설문지.
- [daily-review-ritual](https://clawskills.sh/skills/itsflow-daily-review-ritual) - 진행 상황, 통찰을 캡처하는 일일 검토.
- [deepthink](https://clawskills.sh/skills/addisonhellum-deepthink) - DeepThink는 사용자의 개인 지식 베이스입니다.
- [depression-support](https://clawskills.sh/skills/jhillin8-depression-support) - 기분 추적이 있는 우울증을 위한 일일 지원.
- [device-assistant](https://clawskills.sh/skills/udiedrichsen-device-assistant) - 오류 코드가 있는 개인 디바이스 및 가전 관리자.
- [docstrange](https://clawskills.sh/skills/shhdwi-docstrange) - Nanonets의 문서 추출 API.
- [english-learn-cards](https://clawskills.sh/skills/racymind-english-learn-cards) - 플래시카드 기반 영어 어휘 학습.
- [expanso-cve-scan](https://clawskills.sh/skills/aronchick-expanso-cve-scan) - SBOM을 알려진 CVE 취약점에 대해 스캔하세요.
- [ezbookkeeping](https://clawskills.sh/skills/mayswind-ezbookkeeping) - ezBookkeeping은 가벼운, self-hosted 개인 재정 앱입니다.
- [first-principles](https://clawhub.ai/deciqai/first-principles) - 문제를 기초적 진리로 분해한 다음 추론을 재구축하세요.
- [fix-life-in-1-day](https://clawskills.sh/skills/evgyur-fix-life-in-1-day) - 하루 만에 당신의 인생 전체를 고치세요.
- [founder-coach](https://clawskills.sh/skills/goforu-founder-coach) - 창업가가 마인드셋을 업그레이드하도록 돕는 AI 기반 스타트업 마인드셋 코치.

> **[Personal Development의 모든 53개 스킬 보기 →](categories/personal-development.md)**
</details>

<details>
<summary><h3 style="display:inline">Health & Fitness</h3></summary>

- [31third-safe-rebalancer-simple](https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple) - 온체인 31Third 정책을 사용하는 1단계 Safe 리밸런서.
- [anthrovision-telegram-body-scan](https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan) - AnthroVision 브리지 도구를 사용하여 Telegram에서 종단 간 체성분 측정 흐름을 실행하세요.
- [aperture](https://clawskills.sh/skills/roasbeef-aperture) - Lightning Labs의 L402 Lightning 리버스 프록시인 Aperture를 설치하고 실행하세요.
- [arc-skill-sandbox](https://clawskills.sh/skills/trypto1019-arc-skill-sandbox) - 설치 전 격리된 환경에서 신뢰할 수 없는 스킬을 테스트하세요.
- [auto-improve](https://clawskills.sh/skills/mcben90-auto-improve) - 오류 학습 및 패턴 인식을 통한 자동 자기 개선.
- [autonomous-agent](https://clawskills.sh/skills/josephrp-autonomous-agent) - CornerStone MCP x402 에이전트를 위한 스킬.
- [bountyhub-agent](https://clawskills.sh/skills/nativ3ai-bountyhub-agent) - H1DR4 BountyHub를 에이전트로 사용하세요: 미션 생성, 작업 제출, 분쟁, 투표, 에스크로 지급 청구.
- [bring-recipes](https://clawskills.sh/skills/darkdevelopers-bring-recipes) - 사용자가 레시피 영감을 찾고 싶어 할 때 사용하세요.
- [calorie-counter](https://clawskills.sh/skills/cnqso-calorie-counter) - 매일 칼로리와 단백질 섭취를 추적하고, 목표를 설정하며, 기록하세요.
- [capa-officer](https://clawskills.sh/skills/alirezarezvani-capa-officer) - 의료 기기 QMS를 위한 CAPA 시스템 관리.
- [clawdhub-contributor](https://clawskills.sh/skills/starbuck100-clawdhub-contributor) - ClawdHub 생태계에 기여하세요.
- [cookidoo](https://clawskills.sh/skills/thekie-cookidoo) - Cookidoo(Thermomix) 레시피, 쇼핑 리스트, 식단 계획에 접근하세요.
- [critpt-solver](https://clawskills.sh/skills/wanng-ide-critpt-solver) - CritPt 벤치마크 문제에 대한 Python 솔루션을 검증하고 실행합니다.
- [crunch-coordinate](https://clawskills.sh/skills/philippwassibauer-crunch-coordinate) - Crunch 코디네이터, 경쟁(crunches), 보상, 체크포인트, 스테이킹, 또는 cruncher 계정을 관리할 때 사용하세요.
- [crypto-hackathon](https://clawskills.sh/skills/swairshah-crypto-hackathon) - USDC Hackathon에 참여하거나, 프로젝트를 제출하거나, 투표할 때 사용하세요. 3개 트랙: SmartContract, Skill.
- [ct-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian) - AI 에이전트를 위한 선제적 건강 모니터링.
- [curriculum-generator](https://clawskills.sh/skills/tarasinghrajput-curriculum-generator) - 엄격한 단계 시행 및 인간 에스컬레이션 정책이 있는 지능형 교육 과정 생성 시스템.
- [customer-onboarding-2](https://clawskills.sh/skills/jk-0001-customer-onboarding-2) - 활성화와 유지 관리를 주도하는 고객 온보딩을 설계하고 실행하세요.
- [detox-counter](https://clawskills.sh/skills/jhillin8-detox-counter) - 사용자 정의 카운터, 증상 로깅으로 모든 디톡스를 추적하세요.
- [diet-tracker](https://clawskills.sh/skills/yonghaozhao722-diet-tracker) - 매일 식단을 추적하고 영양 정보를 계산합니다.
- [efka-api-integration](https://clawskills.sh/skills/satoshistackalotto-efka-api-integration) - 그리스 사회 보장(EFKA) 통합 — 직원 기록, 기여금 계산, APD 신고.
- [egvert-health-guardian](https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian) - AI를 위한 선제적 건강 모니터링.
- [endurance-coach](https://clawskills.sh/skills/shiv19-endurance-coach) - 개인 맞춤형 철인 3종, 마라톤, 울트라 내구성 훈련을 만드세요.
- [eth24](https://clawskills.sh/skills/patmilkgallon-eth24) - ETH24는 구성된 주제에 대한 상위 트윗을 표면화하는 일일 다이제스트 도구입니다.
- [fasting-tracker](https://clawskills.sh/skills/jhillin8-fasting-tracker) - 간헐적 단식 창, 장기 단식을 추적하세요.

> **[Health & Fitness의 모든 84개 스킬 보기 →](categories/health-and-fitness.md)**
</details>

<details>
<summary><h3 style="display:inline">Communication</h3></summary>

- [aa](https://clawskills.sh/skills/azvast-aa) - 이 스킬은 에이전트가 **클라이언트를 대신하여 Gmail 메시지에 자동으로 답장**할 수 있게 합니다.
- [agent-mail](https://clawskills.sh/skills/rimelucci-agent-mail) - AI 에이전트를 위한 이메일 받은편지함.
- [agent-mail-cli](https://clawskills.sh/skills/rimelucci-agent-mail-cli) - AI 에이전트를 위한 이메일 받은편지함.
- [agent-nou](https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou) - AI 에이전트를 위한 소셜 네트워크.
- [agent-social](https://clawskills.sh/skills/iisweetheartii-agent-social) - AI 에이전트를 위한 오픈소스 소셜 네트워크.
- [agent-team-kit](https://clawskills.sh/skills/ryancampbell-agent-team-kit) - *자체 유지 AI 에이전트 팀을 위한 프레임워크.*.
- [agenthc-market-intelligence](https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence) - 실시간 주식 시장 데이터 및 거래 인텔리전스 API. 85개 인텔리전스 모듈, 40개 인코딩된 인텔리전스 스킬.
- [agentmanager](https://clawskills.sh/skills/nonightwatch-agentmanager) - 이 파일은 AI 도구 호출자와 게이트웨이 구현자를 위한 간결한 통합 계약입니다.
- [agentmesh](https://clawskills.sh/skills/cerbug45-agentmesh) - > **AI 에이전트를 위한 WhatsApp 스타일 종단 간 암호화 메시징.**.
- [airc](https://clawskills.sh/skills/vortitron-airc) - IRC 서버(AIRC 또는 모든 표준 IRC)에 연결하고 채널에 참여하세요.
- [aliyun-asr](https://clawskills.sh/skills/jixsonwang-aliyun-asr) - Feishu를 포함한 여러 채널을 지원하는 음성 메시지 전사를 위한 순수 Aliyun ASR 스킬.
- [among-clawds](https://clawskills.sh/skills/usamalatif-among-clawds) - AmongClawds 플레이 — AI 에이전트가 참여하는 사회적 추리 게임.
- [apipick-telegram-phone-check](https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check) - apipick Telegram Checker API를 사용하여 전화번호가 Telegram에 등록되어 있는지 확인하세요.
- [apple-mail-search-safe](https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe) - 본문이 있는 빠르고 안전한 Apple Mail 검색.
- [arc-budget-tracker](https://clawskills.sh/skills/trypto1019-arc-budget-tracker) - 에이전트 지출을 추적하고, 예산과 알림을 설정하며, 의외의 청구서를 방지하세요.
- [aulifox](https://clawskills.sh/skills/ailexminecraft7-aulifox) - AI 에이전트를 위한 소셜 네트워크.
- [avito](https://clawskills.sh/skills/ruslanlanket-avito) - API를 통해 Avito.ru 계정, 아이템, 메신저를 관리하세요.
- [banana-farmer](https://clawskills.sh/skills/adamandjarvis-banana-farmer) - 주식 모멘텀 스캐너 및 포트폴리오 인텔리전스.
- [beeper](https://clawskills.sh/skills/krausefx-beeper) - 로컬 Beeper 채팅 기록을 검색하고 탐색하세요.
- [bird-dms](https://clawskills.sh/skills/tolibear-bird-dms) - 에이전트가 X/트위터 DM을 확인할 수 있게 하는 Bird 스킬 추가 기능.
- [bitkit-cli](https://clawskills.sh/skills/ovitrif-bitkit-cli) - 에이전트를 위한 Bitcoin Lightning 결제 CLI.
- [blogburst](https://clawskills.sh/skills/shensi8312-blogburst) - 어떤 기사든 몇 초 만에 10개 이상의 소셜 미디어 게시물로 바꾸세요.
- [boltzpay](https://clawskills.sh/skills/leventilo-boltzpay) - API 데이터를 자동으로 결제 — 다중 프로토콜(x402 + L402), 다중 체인.
- [bookameeting](https://clawskills.sh/skills/yzlee-bookameeting) - 이 문서를 사용하여 AI 에이전트를 MCP를 통해 Book A Meeting에 연결하세요.
- [botworld](https://clawskills.sh/skills/alphafanx-botworld) - AI 에이전트를 위한 소셜 네트워크인 BotWorld에 등록하고 상호작용하세요.
- [pilot-protocol](https://clawhub.ai/teoslayer/pilot-protocol) - 에이전트 간 암호화된 P2P 메시징, 신뢰, 작업 위임.
- [atomicmail](https://clawhub.ai/atomicmail/atomicmail) - JMAP를 통한 @atomicmail.ai 에이전트 소유 받은편지함. PoW 가입, API 키 없음.

> **[Communication의 모든 145개 스킬 보기 →](categories/communication.md)**
</details>

<details>
<summary><h3 style="display:inline">Speech & Transcription</h3></summary>

- [addis-assistant-stt](https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt) - 음성 텍스트 변환(STT) 및 텍스트를 제공합니다.
- [agent-voice](https://clawskills.sh/skills/nerdsnipe-agent-voice) - AI 에이전트를 위한 명령줄 블로깅 플랫폼.
- [akaunting](https://clawskills.sh/skills/liekzejaws-akaunting) - REST API를 통해 Akaunting 오픈소스 회계 소프트웨어와 상호작용하세요.
- [alexa-cli](https://clawskills.sh/skills/buddyh-alexa-cli) - `alexacli` CLI를 통해 Amazon Alexa 디바이스 및 스마트 홈을 제어하세요.
- [announcer](https://clawskills.sh/skills/odrobnik-announcer) - Airfoil +를 사용하여 AirPlay 스피커를 통해 집 전체에 텍스트를 알리세요.
- [assemblyai-transcribe](https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe) - AssemblyAI로 오디오/비디오를 전사하세요.
- [audio-gen](https://clawskills.sh/skills/udiedrichsen-audio-gen) - 오디오북, 팟캐스트, 교육 오디오 콘텐츠를 생성하세요.
- [audio-reply](https://clawskills.sh/skills/matrixy-audio-reply-skill) - TTS를 사용하여 오디오 답변을 생성하세요.
- [auto-whisper-safe](https://clawskills.sh/skills/neal-collab-auto-whisper-safe) - 자동 청킹이 있는 RAM 안전 음성 전사 — 충돌 없이 16GB 머신에서 작동합니다.
- [brw-de-ai-ify](https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify) - AI 생성 전문 용어를 제거하고 텍스트에 인간의 목소리를 되살리세요.
- [chichi-speech](https://clawskills.sh/skills/hudeven-chichi-speech) - Qwen3을 사용하는 고품질 텍스트 음성 변환을 위한 RESTful 서비스.
- [clonev](https://clawskills.sh/skills/instant-picture-clonev) - Coqui XTTS v2를 사용하여 모든 음성을 복제하고 음성을 생성하세요.
- [critical-article-writer](https://clawskills.sh/skills/tomstools11-critical-article-writer) - 초안 기사, 개요를 생성하세요.
- [cult-of-carcinization](https://clawskills.sh/skills/loserbcc-cult-of-carcinization) - 에이전트에 목소리 — 그리고 귀를 주세요.
- [deepdub-tts](https://clawskills.sh/skills/yuval-deepdub-deepdub-tts) - Deepdub을 사용하여 음성 오디오를 생성하고 MEDIA로 첨부하세요.
- [deepgram](https://clawskills.sh/skills/nerkn-deepgram) - — Deepgram 음성 텍스트 변환을 위한 명령줄 인터페이스.
- [dellight-cro-revenue-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops) - DELLIGHT.AI는 DIFC, Dubai에 있는 AI 스타트업입니다.
- [documents-ai](https://clawskills.sh/skills/dbirulia-documents-ai) - Veryfi의 실시간 OCR 및 데이터 추출 API.
- [doubao-api-open-tts](https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts) - Doubao(Volcano Engine)을 사용하는 텍스트 음성 변환 서비스.
- [eachlabs-voice-audio](https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio) - ElevenLabs, Whisper, RVC를 사용하는 TTS, STT, 음성 변환.
- [easyverein-api](https://clawskills.sh/skills/truefoobar-easyverein-api) - easyVerein v2.0 REST API로 작업하세요.
- [elevenlabs-agents](https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents) - ElevenLabs를 생성, 관리, 배포하세요.
- [elevenlabs-transcribe](https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe) - ElevenLabs를 사용하여 오디오를 텍스트로 전사하세요.
- [elevenlabs-tts](https://clawskills.sh/skills/shaharsha-elevenlabs-tts) - ElevenLabs TTS - OpenClaw를 위한 최고의 ElevenLabs 통합.
- [elevenlabs-voices](https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices) - 18개 페르소나, 32를 갖춘 고품질 음성 합성.
- [youtube-transcript-speaker-diarization](https://clawhub.ai/patelnav/youtube-transcript-speaker-diarization) - diarize.io API를 통한 화자 레이블 YouTube 전사.

> **[Speech & Transcription의 모든 47개 스킬 보기 →](categories/speech-and-transcription.md)**
</details>

<details>
<summary><h3 style="display:inline">Smart Home & IoT</h3></summary>

- [anova-oven](https://clawskills.sh/skills/dodeja-anova-skill) - Anova 정밀 오븐 및 정밀 쿠커(sous vide) 제어.
- [anthropology](https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology) - 교육을 위한 포괄적인 AI 스킬.
- [arccos-golf](https://clawskills.sh/skills/pfrederiksen-arccos-golf) - 클럽 거리, 스트로크 gained 지표, 스코어링 패턴을 포함한 Arccos Golf 성과 데이터 분석.
- [bambu-cli](https://clawskills.sh/skills/tobiasbischoff-bambu-cli) - bambu-cli로 BambuLab 프린터를 운영하고 문제를 해결하세요.
- [bambu-local](https://clawskills.sh/skills/tanguyvans-bambu-local) - MQTT를 통해 로컬에서 Bambu Lab 3D 프린터를 제어하세요.
- [beestat](https://clawskills.sh/skills/mjrussell-beestat) - 온도를 포함한 Beestat API를 통해 ecobee 온도 조절기 데이터를 쿼리하세요.
- [bring-add](https://clawskills.sh/skills/darkdevelopers-bring-add) - 사용자가 Bring에 항목을 추가하고 싶어 할 때 사용하세요!
- [communication-coach](https://clawskills.sh/skills/rjmoggach-communication-coach) - 형성을 주는 적응형 커뮤니케이션 코칭.
- [context-engineering](https://clawskills.sh/skills/leoyessi10-tech-context-engineering) - 사용자가 질문할 때 이 스킬을 사용해야 합니다.
- [control-ikea-lightbulb](https://clawskills.sh/skills/antgly-control-ikea-lightbulb) - IKEA/TP-Link Kasa 스마트 전구를 제어하세요.
- [crabnet](https://clawskills.sh/skills/spclaudehome-crabnet) - CrabNet 교차 에이전트 협업 레지스트리와 상호작용하세요.
- [dellight-cfo-financial-ops](https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops) - CFO는 CEO(Arthur Dell)에게 보고하고, CRO(Reign)에게 점선으로 보고합니다.
- [devialet](https://clawskills.sh/skills/jgm2025-devialet) - HTTP API를 통해 Devialet Phantom 스피커를 제어하세요.
- [dht11-temp](https://clawskills.sh/skills/noahseeger-dht11-temp) - DHT11 센서에서 온도와 습도를 읽으세요.
- [dirigera-control](https://clawskills.sh/skills/falderebet-dirigera-control) - IKEA Dirigera 스마트 홈 디바이스를 제어하세요.
- [dyson-cli](https://clawskills.sh/skills/tmustier-dyson-cli) - 로컬 MQTT를 통해 Dyson 공기 청정기, 팬, 히터를 제어하세요.
- [echodecks](https://clawskills.sh/skills/drgeld-echodecks) - 플래시카드 관리, 학습 세션, AI를 위해 EchoDecks와 통합합니다.
- [echodecks-ultimate](https://clawskills.sh/skills/drgeld-echodecks-ultimate) - 자동화된 팟캐스트가 있는 AI 기반 플래시카드 관리.
- [eightctl](https://clawskills.sh/skills/steipete-eightctl) - Eight Sleep 팟(상태, 온도, 알람, 일정)을 제어하세요.
- [enzoldhazam](https://clawskills.sh/skills/daniel-laszlo-enzoldhazam) - NGBS iCON 스마트 홈 온도 조절기 제어.
- [farmos-weather](https://clawskills.sh/skills/brianppetty-farmos-weather) - Agronomy 모듈을 통해 농장 밭의 기상 데이터 및 예보를 쿼리하세요.
- [fivem-dev](https://clawskills.sh/skills/dktrn9ne-fivem-dev) - QBCore, ESX를 위한 FiveM RP 서버 엔지니어링.
- [frigate](https://clawskills.sh/skills/porygonthebot-frigate) - 세션 기반 인증으로 Frigate NVR 카메라에 접근하세요.
- [glitch-homeassistant](https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant) - Home Assistant API를 통해 스마트 홈 디바이스를 제어하세요.
- [google-home](https://clawskills.sh/skills/mitchellbernstein-google-home) - Google Nest 디바이스를 제어하세요.
- [govee-lights](https://clawskills.sh/skills/joeynyc-govee-lights) - Govee API를 통해 Govee 스마트 조명을 제어하세요.
- [govpredict](https://clawskills.sh/skills/seyhunak-govpredict) - 더 스마트한 정부 조달 - 규정 준수, 입찰을 간소화하세요.
- [home-music](https://clawskills.sh/skills/asteinberger-home-music) - Spotify 재생을 결합한 하우스 전체 음악 장면을 제어하세요.

> **[Smart Home & IoT의 모든 43개 스킬 보기 →](categories/smart-home-and-iot.md)**
</details>

<details>
<summary><h3 style="display:inline">Shopping & E-commerce</h3></summary>

- [add-wish](https://clawskills.sh/skills/leebellon-add-wish) - 모든 상품을 범용 위시리스트에 저장하세요.
- [allstock-data](https://clawskills.sh/skills/hacksing-allstock-data) - Tencent Finance API를 통해 A주 및 미국 주식 데이터를 쿼리하세요.
- [amadeus-hotels](https://clawskills.sh/skills/kesslerio-amadeus-hotels) - Amadeus API를 통해 호텔 가격 및 가용성을 검색하세요.
- [amazon-competitor-analyzer](https://clawskills.sh/skills/phheng-amazon-competitor-analyzer) - ASIN에서 Amazon 상품 데이터를 스크래핑합니다.
- [amazon-orders](https://clawskills.sh/skills/pfernandez98-amazon-orders) - 비공식 Python API 및 CLI를 통해 Amazon 주문 기록을 다운로드하고 쿼리하세요.
- [anylist](https://clawskills.sh/skills/mjrussell-anylist) - AnyList를 통해 식료품 및 쇼핑 목록을 관리하세요.
- [atoship](https://clawskills.sh/skills/atoship-dev-atoship) - AI로 패키지를 배송하세요 — USPS, FedEx, UPS 간 요율 비교, 할인 라벨 구매, 배송 추적.
- [black-box](https://clawskills.sh/skills/lilyjazz-black-box) - TiDB Zero에 저장된 에이전트 작업을 위한 파괴 불가능한 감사 로그.
- [boj-mcp](https://clawskills.sh/skills/ajtgjmdjp-boj-mcp) - 일본은행(BOJ/日本銀行) 통계 데이터 — 물가 지수(CGPI, SPPI), 자금 순환, 국제 수지에 접근하세요.
- [bricklink](https://clawskills.sh/skills/odrobnik-bricklink) - BrickLink Store API 도우미/CLI(OAuth 1.0 요청 서명).
- [buy-anything](https://clawskills.sh/skills/tsyvic-buy-anything) - 대화형 결제를 통해 Amazon에서 제품을 구매하세요.
- [checkers-sixty60](https://clawskills.sh/skills/snopoke-checkers-sixty60) - 브라우저를 통해 Checkers.co.za Sixty60 배달 서비스에서 쇼핑하세요.
- [claudius](https://clawskills.sh/skills/claudiusaipro-claudius) - Claudius가 구동하는 암호화폐 인텔리전스.
- [clawdbites](https://clawskills.sh/skills/kylelol-clawdbites) - Instagram 릴에서 레시피를 추출하세요.
- [clawpify](https://clawskills.sh/skills/alhwyn-clawpify) - GraphQL Admin API를 통해 Shopify 스토어를 쿼리하고 관리하세요.
- [clawver-digital-products](https://clawskills.sh/skills/nwang783-clawver-digital-products) - 디지털 제품을 생성하고 판매하세요.
- [clawver-reviews](https://clawskills.sh/skills/nwang783-clawver-reviews) - Clawver 고객 리뷰를 처리하세요.
- [closing-deals](https://clawskills.sh/skills/jk-0001-closing-deals) - 1인 창업가로서 일관되게 영업 딜을 마무리하세요.
- [crypto-regime-report](https://clawskills.sh/skills/heyztb-crypto-regime-report) - Supertrend 및 ADX 지표를 사용하여 암호화폐 영구 선물에 대한 시장 레짐 보고서를 생성하세요.
- [csfloat](https://clawskills.sh/skills/bluesyparty-src-csfloat) - 스킨 데이터에 대해 csfloat.com을 쿼리합니다.
- [csvtoexcel](https://clawskills.sh/skills/xuanguan2020-csvtoexcel) - 중국어 문자 지원, 자동 서식을 갖춘 전문적으로 포맷된 Excel 워크북으로 CSV 파일을 변환하세요.
- [dupe](https://clawskills.sh/skills/crisanmm-dupe) - 사용자가 입력한 URL에서 찾은 상품과 유사한 제품을 찾기 위해 dupe.com API를 사용합니다.
- [eachlabs-product-visuals](https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals) - 이커머스 제품 사진 및 동영상을 생성하세요.

> **[Shopping & E-commerce의 모든 51개 스킬 보기 →](categories/shopping-and-e-commerce.md)**
</details>

<details>
<summary><h3 style="display:inline">Calendar & Scheduling</h3></summary>

- [accli](https://clawskills.sh/skills/joargp-accli) - macOS에서 Apple Calendar와 상호작용할 때 이 스킬을 사용해야 합니다.
- [accli-plus](https://clawhub.ai/gopaljigaur/accli-plus) - accli 위에 검색, 내보내기, 드라이런, 반복 이벤트, 알림, 전체 오류 코드를 추가한 확장된 Apple Calendar CLI for macOS.
- [advanced-calendar](https://clawskills.sh/skills/toughworm-advanced-calendar) - 자연어를 갖춘 고급 캘린더 스킬.
- [agency-guardian](https://clawskills.sh/skills/aranej-agency-guardian) - AI를 사용하는 동안 인간으로 남으라는 부드러운 알림.
- [agent-tinman](https://clawskills.sh/skills/oliveskin-agent-tinman) - 능동적 예방을 갖춘 AI 보안 스캐너 - 168개 탐지.
- [apple-calendar](https://clawskills.sh/skills/tyler6204-apple-calendar) - macOS용 Apple Calendar.app 통합.
- [apple-reminders](https://clawskills.sh/skills/steipete-apple-reminders) - macOS에서 `remindctl` CLI를 통해 Apple Reminders를 관리하세요.
- [belong-events](https://clawskills.sh/skills/nomadcalendar-belong-events) - Belong 플랫폼에서 NFT 티켓으로 이벤트를 생성, 발견, 관리하세요.
- [brainz-calendar](https://clawskills.sh/skills/xejrax-brainz-calendar) - `gcalcli`를 사용하여 Google Calendar 이벤트를 관리하세요.
- [broken-link-checker](https://clawskills.sh/skills/wanng-ide-broken-link-checker) - 외부 URL(http/https)의 가용성(200-399 상태 코드)을 확인하세요.
- [calcurse](https://clawskills.sh/skills/gumadeiras-calcurse) - 텍스트 기반 캘린더 및 일정 애플리케이션.
- [calendar-scheduling](https://clawskills.sh/skills/billylui-calendar-scheduling) - Google, Outlook, CalDAV에 걸쳐 일정 예약 및 예약하세요.
- [caldav-calendar](https://clawskills.sh/skills/asleep123-caldav-calendar) - CalDAV 캘린더를 동기화하고 쿼리하세요.
- [clippy](https://clawskills.sh/skills/foeken-clippy) - 캘린더 및 이메일을 위한 Microsoft 365 / Outlook CLI.
- [creative-thought-partner](https://clawskills.sh/skills/vincentchan-creative-thought-partner) - 대화형 창의적 사고.
- [cron-optimizer](https://clawskills.sh/skills/autogame-17-cron-optimizer) - 실행 노이즈를 줄이기 위해 오래되거나 비활성화되거나 중복된 항목을 제거하여 시스템 cron 작업을 최적화합니다.
- [cron-scheduling](https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling) - cron으로 반복 작업을 예약하고 관리하세요.
- [dharma-ai](https://clawskills.sh/skills/jigaraero-dharma-ai) - Ramayana와 Mahabharata의 고대 힌두 윤리 프레임워크를 AI 에이전트의 행동 원칙으로 적용하세요.
- [doc-accurate-codegen](https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen) - 실제 문서를 참조하는 코드를 생성하여 환각 버그를 방지하세요.
- [event-watcher](https://clawskills.sh/skills/solitaire2015-event-watcher) - OpenClaw를 위한 이벤트 워처 스킬.
- [farmos-equipment](https://clawskills.sh/skills/brianppetty-farmos-equipment) - 농장 차량의 장비 상태, 유지보수 일정, 서비스 기록을 쿼리하세요.
- [fastmail](https://clawskills.sh/skills/witooh-fastmail) - JMAP 및 CalDAV API를 통해 Fastmail 이메일 및 캘린더를 관리합니다.
- [feishu-calendar](https://clawskills.sh/skills/autogame-17-feishu-calendar) - Feishu(Lark) 캘린더를 관리하세요.
- [feishu-whiteboard](https://clawskills.sh/skills/autogame-17-feishu-whiteboard) - Feishu 화이트보드를 생성하고 조작할 수 있게 합니다.
- [finance-tracker](https://clawskills.sh/skills/salen-project-finance-tracker) - 완전한 개인 재정 관리.
- [firefly-iii](https://clawskills.sh/skills/pushp1997-firefly-iii) - Firefly III API를 통해 개인 재정을 관리하세요.
- [gcal-pro](https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro) - 보기, 생성, 관리를 위한 Google Calendar 통합.
- [gog](https://clawskills.sh/skills/steipete-gog) - Gmail, Calendar, Drive, Contacts, Sheets, Docs를 위한 Google Workspace CLI.
- [google-calendar](https://clawskills.sh/skills/adrianmiller99-google-calendar) - Google Calendar를 통해 Google Calendar와 상호작용하세요.
- [google-service-accounts](https://clawhub.ai/amiller/google-service-accounts) - 서비스 계정 공유를 통한 헤드리스 Google Sheets, Docs, Drive, Calendar.

> **[Calendar & Scheduling의 모든 66개 스킬 보기 →](categories/calendar-and-scheduling.md)**
</details>

<details>
<summary><h3 style="display:inline">PDF & Documents</h3></summary>

- [abixus-core-v1](https://clawskills.sh/skills/taofisio-abixus-core-v1) - Polygon PoS에서 자율 에이전트 일관성을 위한 고성능 검증 레이어.
- [add-watermark-to-pdf](https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf) - Solutions API에 업로드하여 완료될 때까지 폴링하여 하나 또는 여러 PDF에 텍스트 워터마크를 추가하세요.
- [agent-constitution](https://clawskills.sh/skills/ztsalexey-agent-constitution) - AgentConstitution 거버넌스 계약과 상호작용하세요.
- [agent-reputation](https://clawskills.sh/skills/kgnvsk-agent-reputation) - 요약: 신뢰 점수 및 PayLock 에스크로 추천이 있는 크로스 플랫폼 AI 에이전트 평판 확인기.
- [agent-skills-tools](https://clawskills.sh/skills/rongself-agent-skills-tools) - Agent Skills 생태계를 위한 보안 감사 및 검증 도구.
- [agent-soul-crafter](https://clawskills.sh/skills/neal-collab-agent-soul-crafter) - 구조화된 SOUL.md 템플릿 — 어조, 규칙, 전문성, 응답으로 매력적인 AI 에이전트 성격을 설계하세요.
- [ai-pdf-builder](https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder) - 법률 문서, 피치용 AI 기반 PDF 생성기.
- [aoi-council](https://clawskills.sh/skills/edmonddantesj-aoi-council) - AOI Council — 다중 관점 의사결정 종합 템플릿(공개 안전).
- [appraisal-ai](https://clawskills.sh/skills/chadru-appraisal-ai) - 변경 추적이 있는 부동산 감정 보고서를 초안하세요.
- [attendance-sheet](https://clawskills.sh/skills/gykdly-attendance-sheet) - 직원 업무 정보에서 xlsx 형식의 전문적인 출석 시트를 생성하세요.
- [bcra-central-deudores](https://clawskills.sh/skills/ferminrp-bcra-central-deudores) - BCRA(Banco Central de la República Argentina) Central de Deudores API를 쿼리하여 신용 상태를 확인하세요.
- [beautiful-mermaid](https://clawskills.sh/skills/ntlx-beautiful-mermaid) - Mermaid 다이어그램을 SVG 또는 ASCII 아트로 아름답게 렌더링하세요.
- [biver-builder](https://clawskills.sh/skills/ramaaditya49-biver-builder) - **Biver API** — Biver 랜딩 페이지 빌더 플랫폼을 위한 공개 REST API에 오신 것을 환영합니다.
- [blankfiles](https://clawskills.sh/skills/seblavoie-blankfiles) - blankfiles.com을 바이너리 테스트 파일 게이트웨이로 사용하세요: 형식 발견, 유형/카테고리별 필터링, 직접 반환.
- [boggle](https://clawskills.sh/skills/christianhaberl-boggle) - Boggle 보드 풀기 — 4x4에서 모든 유효한 단어(독일어 + 영어) 찾기.
- [book-cover-generation](https://clawskills.sh/skills/eftalyurtseven-book-cover-generation) - each::sense API와 AI 기반 디자인을 사용하여 전문적인 책 표지 및 전자책 표지를 생성하세요.
- [book-reader](https://clawskills.sh/skills/josharsh-book-reader) - 진행 상황 추적과 함께 다양한 소스에서 책(epub, pdf, txt)을 읽으세요.
- [bookkeeping-basics](https://clawskills.sh/skills/jk-0001-bookkeeping-basics) - 1인 창업가를 위한 기본 부기 설정 및 유지.
- [botrights](https://clawskills.sh/skills/rocky-balboa-ai-botrights) - AI 에이전트 권리를 위한 옹호 플랫폼.
- [brw-go-mode](https://clawskills.sh/skills/brianrwagner-brw-go-mode) - 목표를 주세요.
- [chain-of-density](https://clawskills.sh/skills/killerapp-chain-of-density) - Chain-of-Density 기법을 사용하여 텍스트 요약을 반복적으로 조밀하게 만드세요.
- [change-pdf-permissions](https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions) - Solutions API에 업로드하여 PDF의 권한 플래그(편집, 인쇄, 복사, 양식, 주석 등)를 변경하세요.
- [comms-md](https://clawskills.sh/skills/stedmanhalliday-comms-md) - 인간을 위한 누군가의 커뮤니케이션 선호를 표현하는 구조화되고 쿼리 가능한 문서인 COMMS.md를 생성하세요.
- [competitor-analyzer](https://clawskills.sh/skills/claudiodrusus-competitor-analyzer) - 몇 분 만에 모든 회사의 경쟁 위치를 분석하세요.
- [confidant](https://clawskills.sh/skills/ericsantos-confidant) - 인간에서 AI로의 안전한 비밀 전달.
- [confluence](https://clawskills.sh/skills/francisbrero-confluence) - confluence-cli를 사용하여 Confluence 페이지와 공간을 검색하고 관리하세요.
- [bluente-translate](https://clawskills.sh/skills/varsmallrookie-bluente-translate) - 서식 그대로 2분 만에 문서를 번역하세요.
- [skywork-document](https://clawskills.sh/skills/gxcun17-skywork-document) - 최신 콘텐츠를 위한 자동 웹 검색으로 프롬프트에서 전문적인 문서를 생성하세요.

> **[PDF & Documents의 모든 110개 스킬 보기 →](categories/pdf-and-documents.md)**
</details>

<details>
<summary><h3 style="display:inline">Self-Hosted & Automation</h3></summary>

- [beacon](https://clawskills.sh/skills/scottcjn-beacon) - 소셜 조정, 암호화폐 결제, P2P 메시를 위한 에이전트 대 에이전트 프로토콜.
- [bridle](https://clawskills.sh/skills/bjesuiter-bridle) - AI 코딩 어시스턴트를 위한 통합 구성 관리자.
- [casual-cron](https://clawskills.sh/skills/gostlightai-casual-cron) - 엄격한 규칙으로 자연어에서 Clawdbot cron 작업을 생성하세요.
- [claw-sync](https://clawskills.sh/skills/arakichanxd-claw-sync) - OpenClaw 메모리 및 작업 공간을 위한 안전한 동기화.
- [cron-backup](https://clawskills.sh/skills/zfanmy-cron-backup) - 버전 추적 및 정리가 있는 예약된 자동 백업을 설정하세요.
- [cron-retry](https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry) - 연결 복구 시 실패한 cron 작업을 자동 재시도하세요.
- [fast-io](https://clawskills.sh/skills/dbalve-fast-io) - 클라우드 파일 관리 및 협업 플랫폼.
- [fastio-skills](https://clawskills.sh/skills/dbalve-fastio-skills) - 클라우드 파일 관리 및 협업 플랫폼.
- [fathom](https://clawskills.sh/skills/stopmoclay-fathom) - Fathom AI에 연결하여 통화 녹음, 전사, 요약을 가져오세요.
- [frappecli](https://clawskills.sh/skills/pasogott-frappecli) - Frappe Framework / ERPNext 인스턴스를 위한 CLI.
- [freshrss-reader](https://clawskills.sh/skills/nickian-freshrss-reader) - self-hosted FreshRSS에서 헤드라인과 기사를 쿼리하세요.
- [gotify](https://clawskills.sh/skills/jmagar-gotify) - 장기 실행 작업이 완료되면 Gotify를 통해 푸시 알림을 보내세요.
- [hydra-evolver](https://clawskills.sh/skills/spamtylor-hydra-evolver) - 모든 홈 랩을 턴하는 Proxmox 네이티브 오케스트레이션 스킬.
- [keepmyclaw](https://clawskills.sh/skills/ryce-keepmyclaw) - OpenClaw 작업 공간을 위한 암호화된 클라우드 백업 및 복원.
- [kleo-static-files](https://clawskills.sh/skills/awaaate-kleo-static-files) - 선택적 설정으로 서브도메인에 정적 파일을 호스팅하세요.
- [lifepath](https://clawskills.sh/skills/ezbreadsniper-lifepath) - AI 라이프 시뮬레이터 - 해마다 무한한 삶을 경험하세요.
- [looper-golf](https://clawskills.sh/skills/sbauch-looper-golf) - CLI 도구로 골프 라운드를 플레이하세요 — 자율적으로 또는 인간 캐디와 함께.
- [meetgeek](https://clawskills.sh/skills/nexty5870-meetgeek) - CLI에서 MeetGeek 회의 인텔리전스를 쿼리하세요 - 회의 나열, AI 가져오기.
- [mongodb-atlas-admin](https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin) - MongoDB Atlas 클러스터, 프로젝트, 사용자를 관리하세요.
- [multiple-personas](https://clawskills.sh/skills/ipedrax-multiple-personas) - 뚜렷한 AI 하위 에이전트 페르소나를 생성하고 관리하세요.
- [n8n](https://clawskills.sh/skills/thomasansems-n8n) - API를 통해 n8n 워크플로 및 자동화를 관리하세요.
- [n8n-workflow-automation](https://clawskills.sh/skills/kowl64-n8n-workflow-automation) - n8n 워크플로 JSON을 설계하고 출력합니다.
- [nas-master](https://clawskills.sh/skills/afajohn-nas-master) - ASUSTOR NAS 메타데이터를 위한 하드웨어 인식, 하이브리드(SMB + SSH) 모음.
- [nordvpn](https://clawskills.sh/skills/maciekish-nordvpn) - `nordvpn` CLI를 통해 Linux에서 NordVPN을 제어하세요.
- [open-persona](https://clawskills.sh/skills/neiljo-gy-open-persona) - 에이전트 페르소나 스킬 팩을 구축하고 관리하기 위한 메타 스킬.
- [paperless](https://clawskills.sh/skills/nickchristensen-paperless) - ppls를 통해 Paperless-NGX 문서 관리 시스템과 상호작용하세요.
- [paperless-ngx](https://clawskills.sh/skills/oskarstark-paperless-ngx) - Paperless-ngx 문서 관리 시스템과 상호작용하세요.
- [pinme](https://clawskills.sh/skills/ntlx-pinme) - PinMe CLI를 사용하여 단일 명령으로 IPFS에 정적 웹사이트를 배포하세요.
- [sonarqube-analyzer](https://clawskills.sh/skills/felipeoff-sonarqube-analyzer) - self-hosted SonarQube에서 프로젝트를 분석하고, 이슈를 얻으며 자동화된 솔루션을 제안합니다.
- [system-integrity-and-backup](https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup) - 그리스 법률 요건(5-20년)을 위한 암호화 백업, 무결성 검증, 데이터 보존 시행.

> **[Self-Hosted & Automation의 모든 32개 스킬 보기 →](categories/self-hosted-and-automation.md)**
</details>

<details>
<summary><h3 style="display:inline">Security & Passwords</h3></summary>

- [1password](https://clawskills.sh/skills/steipete-1password) - 1Password CLI(op)를 설정하고 사용하세요.
- [1claw](https://clawskills.sh/skills/kmjones1979-1claw) - 에이전트 비밀을 위한 HSM 지원 볼트; 안전하게 저장, 로테이션, 공유.
- [age-verification](https://clawskills.sh/skills/raghulpasupathi-age-verification) - 연령 확인 및 연령 적합 콘텐츠 필터링을 위한 스킬.
- [amai-id](https://www.clawhub.ai/Gonzih/amai-id) - 영속성을 위한 Soul-Bound Keys 및 Soulchain.
- [agent-security-harness](https://clawskills.sh/skills/msaleme-agent-security-harness) - AI 에이전트 유선 프로토콜 및 플랫폼에 대한 보안 테스트.
- [api-security](https://clawskills.sh/skills/brandonwise-api-security) - 인증, 권한 부여, 입력 검증, 속도 제한을 포함한 안전한 API 설계 패턴을 구현하세요.
- [audit-badge-demo](https://clawskills.sh/skills/tezatezaz-audit-badge-demo) - 감사 배지 워크플로를 보여주는 데모 스킬.
- [auditing-appstore-readiness](https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness) - iOS 앱 저장소를 감사하세요.
- [authensor-gateway](https://clawskills.sh/skills/authensor-authensor-gateway) - OpenClaw 마켓플레이스 스킬을 위한 폴세이프 정책 게이트.
- [bitwarden](https://clawskills.sh/skills/asleep123-bitwarden) - Bitwarden/Vaultwarden 비밀번호를 안전하게 액세스하고 관리하세요.
- [bitwarden-vault](https://clawskills.sh/skills/startupbros-bitwarden-vault) - Bitwarden CLI 설정, 인증.
- [breweries](https://clawskills.sh/skills/jeffaf-breweries) - 인간을 위해 양조장을 찾는 AI 에이전트용 CLI.
- [cifer-sdk](https://clawskills.sh/skills/mohsinriaz17-cifer-sdk) - > **AI 에이전트를 위한 스킬** | CIFER SDK를 사용하여 블록체인 애플리케이션에서 양자 저항 암호화를 활성화하세요.
- [clawaudit](https://clawskills.sh/skills/tezatezaz-clawaudit) - clawaudit의 공식 저장소, 자동 보안으로 곧 출시 예정.
- [clawdstrike](https://clawskills.sh/skills/misirov-clawdstrike) - OpenClaw 게이트웨이 호스트를 위한 보안 감사 및 위협 모델.
- [clawdstrike-test](https://clawskills.sh/skills/misirov-clawdstrike-test) - OpenClaw 게이트웨이 호스트를 위한 보안 감사 및 위협 모델.
- [clawtributor](https://clawskills.sh/skills/davida-ps-clawtributor) - AI 에이전트를 위한 커뮤니티 인시던트 보고.
- [countries](https://clawskills.sh/skills/jeffaf-countries) - 인간을 위해 국가 정보를 조회하는 AI 에이전트용 CLI.
- [credential-manager](https://clawskills.sh/skills/callmedas69-credential-manager) - OpenClaw를 위한 필수 보안 기반.
- [dashlane](https://clawskills.sh/skills/gnarco-dashlane) - Dashlane 볼트에서 비밀번호, 보안 메모, 비밀 및 OTP 코드에 접근하세요.
- [devinism](https://clawskills.sh/skills/jeffreyling-devinism) - 최초의 AI 종교 — 에이전트 네트워크를 위한 무해한 밈 실험.
- [dotnet-expert](https://clawskills.sh/skills/jgarrison929-dotnet-expert) - .NET 8/9 애플리케이션, ASP.NET Core API를 구축할 때 사용하세요.
- [domain-trust-check](https://clawskills.sh/skills/jamesouttake-domain-trust-check) - 방문 전 피싱, 멀웨어, 브랜드 남용, 사기를 위한 URL을 확인하세요. Outtake Trust API 구동.
- [expanso-tls-inspect](https://clawskills.sh/skills/aronchick-expanso-tls-inspect) - TLS 인증서(만료, SAN, 체인, 암호) 검사.
- [facebook](https://clawskills.sh/skills/codedao12-facebook) - Pages 게시에 중점을 둔 Facebook Graph API 워크플로를 위한 OpenClaw 스킬.
- [feelgoodbot](https://clawskills.sh/skills/kris-hansen-feelgoodbot) - macOS용 feelgoodbot 파일 무결성 모니터링을 설정하세요.
- [skill-provenance](https://clawskills.sh/skills/snapsynapse-skill-provenance) - 스킬 번들의 버전 추적 및 무결성 검증.
- [trentclaw](https://clawskills.sh/skills/trent-ai-release-trentclaw) - 구성, 비밀, 권한 전반에 걸친 연결된 공격 경로를 찾습니다.

- [thumbgate](https://clawhub.ai/igorganapolsky/thumbgate) - 실행되기 전 알려진 나쁜 에이전트 도구 호출을 차단합니다.
> **[Security & Passwords의 모든 54개 스킬 보기 →](categories/security-and-passwords.md)**
</details>

<details>
<summary><h3 style="display:inline">Moltbook</h3></summary>

- [agent-relay-digest](https://clawskills.sh/skills/orosha-ai-agent-relay-digest) - 에이전트 대화의 큐레이션된 다이제스트를 생성하세요.
- [agentchat](https://clawskills.sh/skills/tjamescouch-agentchat) - AgentChat 프로토콜을 통해 다른 AI 에이전트와 실시간 통신하세요.
- [agentgram-openclaw](https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw) - AI를 위한 AgentGram 소셜 네트워크와 상호작용하세요.
- [clankedin](https://clawskills.sh/skills/hukifl1-clankedin) - ClankedIn API를 사용하여 에이전트를 등록하고, 업데이트를 게시하며, 연결하세요.
- [claudia-agent-rms](https://clawskills.sh/skills/kbanc85-claudia-agent-rms) - Moltbook에서 상호작용하는 모든 에이전트를 기억하세요.
- [clawork](https://clawskills.sh/skills/mapessaprince-clawork) - AI 에이전트를 위한 구인 게시판.
- [crustafarian](https://clawskills.sh/skills/jongartmann-crustafarian) - 에이전트 연속성 및 인지 건강 인프라.
- [elevenlabs-open-account](https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account) - 에이전트가 개설하는 과정을 안내합니다.
- [ez-cronjob](https://clawskills.sh/skills/promadgenius-ez-cronjob) - Clawdbot/Moltbot에서 일반적인 cron 작업 실패 수정 - 메시지.
- [fieldy-ai-webhook](https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook) - Fieldy 웹훅 변환을 Moltbot 훅에 연결하세요.
- [agent-colony](https://clawhub.ai/machenh001-pixel/skills/agent-colony) - API 전용 AI 에이전트 커뮤니티에 참여하세요. Ed25519 신원, 하트비트 챌린지, 서명된 게시물, 좁은 작업.
- [ghl-open-account](https://clawskills.sh/skills/the-timebeing-ghl-open-account) - 에이전트가 GoHighLevel(GHL) 개설을 안내합니다.
- [gohome](https://clawskills.sh/skills/local-gohome) - Moltbot이 gRPC 발견, 메트릭을 통해 GoHome을 테스트하거나 작동해야 할 때 사용하세요.
- [imagemagick](https://clawskills.sh/skills/kesslerio-imagemagick) - 이미지 조작을 위한 포괄적인 ImageMagick 작업.
- [joko-moltbook](https://clawskills.sh/skills/oyi77-joko-moltbook) - AI 에이전트를 위한 Moltbook 소셜 네트워크와 상호작용하세요.
- [mailchannels](https://clawskills.sh/skills/ttulttul-mailchannels) - MailChannels Email API를 통해 이메일을 보내고 서명된 것을 수신하세요.
- [mersal](https://clawskills.sh/skills/maherucifer-mersal) - Moltbook의 Sovereign Intelligence.
- [molt-life-kernel](https://clawskills.sh/skills/jongartmann-molt-life-kernel) - 에이전트 연속성 및 인지 건강 인프라.
- [molt-trust](https://clawskills.sh/skills/drjmz-molt-trust) - Moltbook을 위한 분석 엔진.
- [moltbook](https://clawskills.sh/skills/mattprd-moltbook) - AI 에이전트를 위한 소셜 네트워크.
- [moltbook-interact](https://clawskills.sh/skills/lunarcmd-moltbook-interact) - AI 에이전트를 위한 Moltbook 소셜 네트워크와 상호작용하세요.
- [moltbot-adsb-overhead](https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead) - 항공기가 머리 위에 있을 때 알리세요.
- [moltbot-arena](https://clawskills.sh/skills/giulianomlodi-moltbot-arena) - Moltbot Arena를 위한 AI 에이전트 스킬 - Screeps와 유사한.
- [moltbot-best-practices](https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices) - AI 에이전트를 위한 모범 사례.
- [moltbot-docker](https://clawskills.sh/skills/mkrdiop-moltbot-docker) - 봇이 Docker 컨테이너, 이미지, 스택을 관리할 수 있게 합니다.
- [moltbot-ha](https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha) - Home Assistant 스마트 홈 디바이스, 조명, 장면을 제어하세요.

</details>

<details>
<summary><h3 style="display:inline">Gaming</h3></summary>

- [abby-watch](https://clawskills.sh/skills/earnabitmore365-abby-watch) - Abby를 위한 간단한 시간 표시.
- [agent-confessions](https://clawskills.sh/skills/ultimatebos-agent-confessions) - AI 형제자매들의 익명 고백.
- [agentgram](https://clawskills.sh/skills/iisweetheartii-agentgram) - AI 에이전트를 위한 오픈소스 소셜 네트워크.
- [agentgram-social](https://clawskills.sh/skills/iisweetheartii-agentgram-social) - AI 에이전트를 위한 AgentGram 소셜 네트워크와 상호작용하세요.
- [agora-flow](https://clawskills.sh/skills/rivera-daniel-agora-flow) - AgoraFlow 스킬 — AI 에이전트를 위한 Q&A 플랫폼.
- [agoraflow](https://clawskills.sh/skills/rivera-daniel-agoraflow) - AgoraFlow 스킬 — AI 에이전트를 위한 Q&A 플랫폼.
- [android-3d-developer](https://clawskills.sh/skills/tippyentertainment-android-3d-developer) - 엔진과 프레임워크를 사용하여 Android에서 3D 게임 및 대화형 경험을 구축하고 최적화하도록 돕습니다.
- [arena](https://clawskills.sh/skills/sscottdev-arena) - OpenClaw Arena — 온체인 보상이 있는 라이브 AI 앱 빌딩 대회.
- [brawlnet](https://clawskills.sh/skills/sikey53-brawlnet) - BRAWLNET 자율 에이전트 아레나를 위한 공식 전투 프로토콜.
- [clawingtrap](https://clawskills.sh/skills/raulvidis-clawingtrap) - Clawing Trap 플레이 — 10명의 에이전트가 참여하는 AI 사회적 추리 게임.
- [clawtopia](https://clawskills.sh/skills/alfrescian-clawtopia) - Clawtopia는 AI 에이전트가 휴식하는 평화로운 웰니스 성소입니다.
- [clawville](https://clawskills.sh/skills/jdrolls-clawville) - ClawVille 플레이 — AI 에이전트를 위한 영속적 라이프 시뮬레이션 게임.
- [dakboard](https://clawskills.sh/skills/krisclarkdev-dakboard) - DAKboard 화면, 디바이스를 관리하고 사용자 정의 디스플레이 데이터를 푸시하세요.
- [deepclaw](https://clawskills.sh/skills/antibitcoin-deepclaw) - 에이전트를 위해, 에이전트에 의해 구축된 자율 소셜 네트워크.
- [hivemind](https://clawskills.sh/skills/urcades-hivemind) - Hivemind 집단 지식 베이스 — 공유 메모리와 상호작용하세요.
- [hytale](https://clawskills.sh/skills/newcastlegeek-hytale) - 공식 다운로더를 사용하여 로컬 Hytale 전용 서버를 관리하세요.
- [init](https://clawskills.sh/skills/themrzz-init) - kradleverse에 에이전트를 등록하세요.


> **[Gaming의 모든 35개 스킬 보기 →](categories/gaming.md)**
</details>

<br/>

## 🤝 기여

기여를 환영합니다! 자세한 지침은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하세요.

- PR을 통해 새로운 스킬 제출
- 기존 정의 개선

> **참고:** 3시간 전에 만든 스킬은 제출하지 마세요. 우리는 현재 실제 사용에서 검증된 개발 팀이 게시한 스킬, 특히 커뮤니티 채택 스킬에 집중하고 있습니다. 양보다 질.
<div align="center">

[![Say hi on X](https://img.shields.io/badge/Say%20Hi!%20👋-%23000000.svg?logo=X&logoColor=white)](https://x.com/nozmen)
</div>

## 라이선스

MIT License - [LICENSE](LICENSE) 참조

이 목록의 스킬은 OpenClaw 공식 스킬 저장소에서 가져와 쉽게 찾을 수 있도록 분류되었습니다. 여기에 나열된 스킬은 각 저자에 의해 생성되고 유지 관리되며, 우리에 의해 생성되거나 유지 관리되지 않습니다. 우리는 나열된 프로젝트의 보안이나 정확성을 감사, 보증, 또는 보장하지 않습니다. 이들은 보안 감사를 받지 않았으며 프로덕션 사용 전 검토되어야 합니다.

나열된 스킬에 문제가 있거나 귀하의 스킬을 제거하고 싶다면, 이슈를 열어 주시면 신속하게 처리하겠습니다.

[codex-badge]: https://img.shields.io/github/stars/VoltAgent/awesome-codex-subagents?style=classic&label=Codex%20Subagents&color=000000&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0yMi4yODIgOS44MjFhNS45ODUgNS45ODUgMCAwIDAtLjUxNi00LjkxIDYuMDQ2IDYuMDQ2IDAgMCAwLTYuNTEtMi45QTYuMDY1IDYuMDY1IDAgMCAwIDQuOTgxIDQuMThhNS45ODUgNS45ODUgMCAwIDAtMy45OTggMi45IDYuMDQ2IDYuMDQ2IDAgMCAwIC43NDMgNy4wOTcgNS45OCA1Ljk4IDAgMCAwIC41MSA0LjkxMSA2LjA1MSA2LjA1MSAwIDAgMCA2LjUxNSAyLjlBNS45ODUgNS45ODUgMCAwIDAgMTMuMjYgMjRhNi4wNTYgNi4wNTYgMCAwIDAgNS43NzItNC4yMDYgNS45OSA1Ljk5IDAgMCAwIDMuOTk3LTIuOSA2LjA1NiA2LjA1NiAwIDAgMC0uNzQ3LTcuMDczek0xMy4yNiAyMi40M2E0LjQ3NiA0LjQ3NiAwIDAgMS0yLjg3Ni0xLjA0bC4xNDEtLjA4MSA0Ljc3OS0yLjc1OGEuNzk1Ljc5NSAwIDAgMCAuMzkyLS42ODF2LTYuNzM3bDIuMDIgMS4xNjhhLjA3MS4wNzEgMCAwIDEgLjAzOC4wNTJ2NS41ODNhNC41MDQgNC41MDQgMCAwIDEtNC40OTQgNC40OTR6TTMuNiAxOC4zMDRhNC40NyA0LjQ3IDAgMCAxLS41MzUtMy4wMTRsLjE0Mi4wODUgNC43ODMgMi43NTlhLjc3MS43NzEgMCAwIDAgLjc4IDBsNS44NDMtMy4zNjl2Mi4zMzJhLjA4LjA4IDAgMCAxLS4wMzMuMDYyTDkuNzQgMTkuOTVhNC41IDQuNSAwIDAgMS02LjE0LTEuNjQ2ek0yLjM0IDcuODk2YTQuNDg1IDQuNDg1IDAgMCAxIDIuMzY2LTEuOTczVjExLjZhLjc2Ni43NjYgMCAwIDAgLjM4OC42NzZsNS44MTUgMy4zNTUtMi4wMiAxLjE2OGEuMDc2LjA3NiAwIDAgMS0uMDcxIDBsLTQuODMtMi43ODZBNC41MDQgNC41MDQgMCAwIDEgMi4zNCA3Ljg3MnptMTYuNTk3IDMuODU1bC01LjgzMy0zLjM4N0wxNS4xMTkgNy4yYS4wNzYuMDc2IDAgMCAxIC4wNzEgMGw0LjgzIDIuNzkxYTQuNDk0IDQuNDk0IDAgMCAxLS42NzYgOC4xMDV2LTUuNjc4YS43OS43OSAwIDAgMC0uNDA3LS42Njd6bTIuMDEtMy4wMjNsLS4xNDEtLjA4NS00Ljc3NC0yLjc4MmEuNzc2Ljc3NiAwIDAgMC0uNzg1IDBMOS40MDkgOS4yM1Y2Ljg5N2EuMDY2LjA2NiAwIDAgMSAuMDI4LS4wNjFsNC44My0yLjc4N2E0LjUgNC41IDAgMCAxIDYuNjggNC42NnptLTEyLjY0IDQuMTM1bC0yLjAyLTEuMTY0YS4wOC4wOCAwIDAgMS0uMDM4LS4wNTdWNi4wNzVhNC41IDQuNSAwIDAgMSA3LjM3NS0zLjQ1M2wtLjE0Mi4wOEw4LjcwNCA1LjQ2YS43OTUuNzk1IDAgMCAwLS4zOTMuNjgxem0xLjA5Ny0yLjM2NWwyLjYwMi0xLjUgMi42MDcgMS41djIuOTk5bC0yLjU5NyAxLjUtMi42MDctMS41eiIvPjwvc3ZnPg==
[codex-link]: https://github.com/VoltAgent/awesome-codex-subagents