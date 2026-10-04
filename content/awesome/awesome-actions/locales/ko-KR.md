<p align="center">
  <br>
    <img src="awesome-actions.png" width="150"/>
  <br>
</p>

# Awesome Actions [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [<!--lint ignore no-dead-urls-->![GitHub Actions status | sdras/awesome-actions](https://github.com/sdras/awesome-actions/workflows/Lint%20Awesome%20List/badge.svg)](https://github.com/sdras/awesome-actions/actions?workflow=Lint+Awesome+List)

> GitHub Actions와 관련된 멋진 자료를 엄선한 목록입니다.

Actions는 저장소에서 GitHub 플랫폼 이벤트에 의해 직접 트리거되며, 이에 응답해 Linux, Windows 또는 macOS 가상 머신이나 컨테이너 안에서 필요에 따라 워크플로를 실행합니다. GitHub Actions를 사용하면 아이디어 구상부터 프로덕션까지 워크플로를 자동화할 수 있습니다.

## 목차

- [공식 자료](#official-resources)
  - [워크플로 예제](#workflow-examples)
  - [공식 Actions](#official-actions)
  - [직접 Actions 만들기](#create-your-actions)
- [커뮤니티 자료](#community-resources)
  - [GitHub 도구 및 관리](#github-tools-and-management)
  - [Actions 모음](#collection-of-actions)
  - [유틸리티](#utility)
  - [정적 분석](#static-analysis)
  - [동적 분석](#dynamic-analysis)
  - [모니터링](#monitoring)
  - [Pull Request](#pull-requests)
  - [GitHub Pages](#github-pages)
  - [알림 및 메시지](#notifications-and-messages)
  - [배포](#deployment)
  - [외부 서비스](#external-services)
  - [프런트엔드 도구](#frontend-tools)
  - [머신러닝 운영](#machine-learning-ops)
  - [빌드](#build)
  - [데이터베이스](#database)
  - [네트워킹](#networking)
  - [현지화](#localization)
  - [재미](#fun)
  - [치트 시트](#cheat-sheet)
- [튜토리얼](#tutorials)

## 공식 자료

- [공식 사이트](https://github.com/features/actions)
- [공식 문서](https://help.github.com/en/actions)
- [공식 Actions 조직](https://github.com/actions)
  - [actions/virtual-environments](https://github.com/actions/virtual-environments) - GitHub Actions 가상 환경입니다.
  - [actions/runner](https://github.com/actions/runner) - GitHub Actions용 Runner입니다.
- [GitHub 블로그 공지](https://github.blog/2018-10-17-action-demos/)

### 워크플로 예제

- [actions/starter-workflows](https://github.com/actions/starter-workflows) - 시작 워크플로 관리입니다.
- [actions/example-services](https://github.com/actions/example-services) - 서비스 컨테이너를 사용하는 워크플로 예제입니다.

### 공식 Actions

<!--lint disable no-dead-urls-->

#### 워크플로 도구 Actions

워크플로에 사용하는 도구 Action입니다.

<!--lint ignore awesome-spell-check-->

- [actions/checkout](https://github.com/actions/checkout) - 워크플로에서 저장소를 설정합니다.
- [actions/upload-artifact](https://github.com/actions/upload-artifact) - 워크플로에서 아티팩트를 업로드합니다.
- [actions/download-artifact](https://github.com/actions/download-artifact) - 빌드에서 아티팩트를 다운로드합니다.
- [actions/cache](https://github.com/actions/cache) - GitHub Actions에서 종속성과 빌드 출력을 캐시합니다.
- [actions/github-script](https://github.com/actions/github-script) - GitHub API 및 워크플로 컨텍스트를 위한 스크립트를 작성합니다.

#### GitHub 자동화를 위한 Actions

이슈, Pull Request 및 릴리스 관리를 자동화합니다.

- [actions/create-release](https://github.com/actions/create-release) - GitHub Release API를 통해 릴리스를 만드는 Action입니다.
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - GitHub Release API를 통해 릴리스 에셋을 업로드하는 Action입니다.
- [actions/first-interaction](https://github.com/actions/first-interaction) - 첫 기여자의 Pull Request와 이슈를 필터링하는 Action입니다.
- [actions/stale](https://github.com/actions/stale) - 최근 상호작용이 없는 이슈와 Pull Request에 표시합니다.
- [actions/labeler](https://github.com/actions/labeler) - Pull Request에 자동으로 라벨을 지정하는 Action입니다.
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - GitHub Packages에서 패키지 버전을 삭제합니다.

#### 설정 Actions

특정 버전의 프로그래밍 언어를 사용하도록 GitHub Actions 워크플로를 설정합니다.

- [actions/setup-node: Node.js](https://github.com/actions/setup-node)
- [actions/setup-python: Python](https://github.com/actions/setup-python)
- [actions/setup-go: Go](https://github.com/actions/setup-go)
- [actions/setup-dotnet: .NET core sdk](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC and Cabal)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir](https://github.com/actions/setup-elixir)
- [actions/setup-julia: Julia](https://github.com/julia-actions/setup-julia)

### 직접 Actions 만들기

#### JavaScript 및 TypeScript Actions

- [actions/toolkit](https://github.com/actions/toolkit) - GitHub Actions 개발을 위한 GitHub ToolKit입니다.
- [actions/hello-world-javascript-action](https://github.com/actions/hello-world-javascript-action) - JavaScript Action 빌드 방법을 보여주는 템플릿입니다.
- [actions/javascript-action](https://github.com/actions/javascript-action) - JavaScript Action을 만듭니다.
- [actions/typescript-action](https://github.com/actions/typescript-action) - TypeScript Action을 만듭니다.
- [actions/http-client](https://github.com/actions/http-client) - Action에서 사용하도록 최적화된 경량 HTTP 클라이언트이며, 제네릭과 async/await를 사용하는 TypeScript로 작성되었습니다.

#### Docker 컨테이너 Actions

- [actions/hello-world-docker-action](https://github.com/actions/hello-world-docker-action) - Docker Action 빌드 방법을 보여주는 템플릿입니다.
- [actions/container-toolkit-action](https://github.com/actions/container-toolkit-action) - actions/toolkit으로 컨테이너 Action을 만들기 위한 템플릿 저장소입니다.

## 커뮤니티 자료

### GitHub 도구 및 관리

- [GitHub 라벨을 선언적으로 설정하기](https://github.com/lannonbr/issue-label-manager-action)
- [GitHub 라벨을 선언적으로 동기화하는 Action](https://github.com/micnncim/action-label-syncer)
- [GitHub에 릴리스 추가하기](https://github.com/elgohr/Github-Release-Action)
- [Docker 이미지를 Docker Hub에 게시하기](https://github.com/elgohr/Publish-Docker-Github-Action)
- [파일 내용을 사용해 이슈 만들기](https://github.com/peter-evans/create-issue-from-file)
- [에셋과 함께 GitHub 릴리스 게시하기](https://github.com/softprops/action-gh-release)
- [GitHub Project Automation+](https://github.com/alex-page/github-project-automation-plus) - 모든 웹훅 이벤트를 사용해 GitHub Project 카드를 자동화합니다.
- [웹 인터페이스로 GitHub Actions를 로컬에서 실행하기](https://github.com/phishy/wflow)
- [터미널에서 GitHub Actions를 로컬로 실행하기](https://github.com/nektos/act)
- [Android 디버그 APK 빌드 및 게시하기](https://github.com/ShaunLWM/action-release-debugapk)
- [GitHub Actions용 순차 빌드 번호 생성하기](https://github.com/einaregilsson/build-number)
- [인증 문제 없이 Git 변경 사항을 GitHub 저장소에 푸시하기](https://github.com/ad-m/github-push-action)
- [이벤트를 바탕으로 릴리스 노트 생성하기](https://github.com/Decathlon/release-notes-generator-action)
- [제공된 Markdown 파일을 바탕으로 GitHub 위키 페이지 만들기](https://github.com/Decathlon/wiki-page-creator-action)
- [커밋된 파일을 사용해 Pull Request에 자동으로 라벨 지정하기](https://github.com/Decathlon/pull-request-labeler-action)
- [작성자 팀 이름을 기준으로 Pull Request에 라벨 추가하기](https://github.com/JulienKode/team-labeler-action)
- [PR/푸시의 파일 변경 목록 가져오기](https://github.com/trilom/file-changes-action)
- [모든 워크플로에서 비공개 Action 사용하기](https://github.com/InVisionApp/private-action-loader)
- [이슈 내용을 사용해 이슈에 라벨 지정하기](https://github.com/damccorm/tag-ur-it)
- [GitHub 릴리스 롤백하기](https://github.com/author/action-rollback)
- [일정 기간 활동이 없으면 닫힌 이슈와 Pull Request 잠그기](https://github.com/dessant/lock-threads)
- [두 브랜치 간 커밋 차이 수 가져오기](https://github.com/jessicalostinspace/commit-difference-action)
- [Git 참조를 바탕으로 릴리스 노트 생성하기](https://github.com/metcalfc/changelog-generator)
- [GitHub 저장소와 커밋에 정책 적용하기](https://github.com/talos-systems/conform)
- [이슈 설명을 바탕으로 이슈에 자동으로 라벨 지정하기](https://github.com/Renato66/auto-label)
- [설정된 GitHub Actions를 최신 버전으로 업데이트하기](https://github.com/fabasoad/ghacu)
- [이슈 브랜치 만들기](https://github.com/robvanderleek/create-issue-branch)
- [오래된 아티팩트 제거하기](https://github.com/c-hive/gha-remove-artifacts)
- [Git 커밋 데이터를 환경 변수로 노출하기](https://github.com/rlespinasse/git-commit-data-action)
- [지정한 파일/바이너리를 위키 또는 외부 저장소와 동기화하기](https://github.com/kai-tub/external-repo-sync-action)
- [파일을 바탕으로 GitHub 위키 페이지 만들기/업데이트/삭제하기](https://github.com/Andrew-Chen-Wang/github-wiki-action)
- [Prow GitHub Actions](https://github.com/jpmcb/prow-github-actions) - 정책 적용, ChatOps 및 PR 자동 병합을 자동화합니다.
- [워크플로에서 GitHub 상태 확인하기](https://github.com/crazy-max/ghaction-github-status)
- [코드로 GitHub 라벨 관리(생성/이름 변경/업데이트/삭제)하기](https://github.com/crazy-max/ghaction-github-labeler)
- [프로젝트 기여자와 종속성에 지속적으로 자금 분배하기](https://github.com/protontypes/libreselery)
- [GitHub용 Herald 규칙: PR에 구독자, 담당자, 라벨 등을 추가하기](https://github.com/gagoar/use-herald-action)
- [GitHub Codeowners Validator](https://github.com/mszostok/codeowners-validator) - GitHub CODEOWNERS 파일의 정확성을 확인합니다. 공개 및 비공개 GitHub 저장소와 GitHub Enterprise 설치 환경을 지원합니다.
- [Copybara Action](https://github.com/olivr/copybara-action) - 저장소 간에 코드를 이동하고 변환합니다(모노레포 하나에서 여러 저장소를 관리하는 데 적합).

### Actions 모음

- [HashiCorp Terraform 사용하기](https://github.com/hashicorp/setup-terraform)
- [Yarn 1용 GitHub Actions](https://github.com/Borales/actions-yarn)
- [Yarn 2용 GitHub Actions](https://github.com/sergioramos/yarn-actions)
- [Go용 GitHub Actions](https://github.com/cedrickring/golang-action)
- [R 및 관련 #rstats 패키지용 GitHub Actions](http://maxheld.de/ghactions/)
- [WordPress용 GitHub Actions](https://github.com/10up/actions-wordpress/)
- [Composer용 GitHub Actions](https://github.com/MilesChou/composer-action)
- [Flutter용 GitHub Actions](https://github.com/subosito/flutter-action)
- [PHP용 GitHub Actions](https://github.com/shivammathur/setup-php)
- [Rust용 GitHub Actions](https://github.com/actions-rs)
- [Android용 GitHub Actions](https://github.com/Malinskiy/action-android)
- [Logtalk 및 Prolog용 GitHub Actions](https://github.com/logtalk-actions)
- [Deno용 GitHub Actions](https://github.com/denolib/setup-deno)
- [Unity용 GitHub Actions](https://github.com/webbertakken/unity-actions)
- [Octions - GitHub Actions for GitHub REST API](https://github.com/maxkomarychev/octions)
- [Docker용 GitHub Actions](https://github.com/docker/github-actions)
- [AWS용 GitHub Actions](https://github.com/clowdhaus/aws-github-actions)
- [Actions Hub](https://github.com/actionshub)

### 유틸리티

- [`ssh-agent` 설정하기](https://github.com/webfactory/ssh-agent) - 추가 SSH 키를 사용해 `ssh-agent`를 실행하여 비공개 저장소에 접근합니다.
- [README용 GitHub Actions 배지](https://github.com/atrox/github-actions-badge)
- [poetry를 사용하는 Python 프로젝트용 GitHub Actions](https://github.com/abatilo/actions-poetry)
- [pyenv를 사용하는 Python 프로젝트용 GitHub Actions](https://github.com/gabrielfalcao/pyenv-action)
- [LaTeX 문서를 컴파일하는 GitHub Actions](https://github.com/xu-cheng/latex-action)
- [MaxMind 데이터베이스 업데이트하기](https://github.com/meetup/maxmind-updater)
- [tmate를 통한 SSH로 디버깅하기](https://github.com/mxschmitt/action-tmate) - SSH 연결을 제공해 Action을 직접 디버깅합니다.
- [git-crypt 파일 잠금 해제하기](https://github.com/sliteteam/github-action-git-crypt-unlock)
- [Golang CGO 크로스 컴파일러](https://github.com/crazy-max/ghaction-xgo)
- [다른 아키텍처(arm32, aarch64 등)에서 작업 실행하기](https://github.com/uraimo/run-on-arch-action)
- [목차 생성하기](https://github.com/technote-space/toc-generator)
- [이슈에 라벨 또는 담당자를 자동으로 추가하기](https://github.com/Naturalclar/issue-action)
- [lgtm이라고 할 때 이미지 또는 GIF로 LGTM 반응 보내기](https://github.com/micnncim/action-lgtm-reaction)
- [여러 범위에 걸쳐 빌드 번호 생성하기](https://github.com/zyborg/gh-action-buildnum)
- [GitHub 릴리스 아티팩트 게시하기](https://github.com/skx/github-action-publish-binaries)
- [Jekyll Diff Action](https://github.com/David-Byrne/jekyll-diff-action) - 변경 후 빌드된 Jekyll 사이트를 비교하고 그 결과를 GitHub 댓글로 남깁니다.
- [브랜치 보호 봇](https://github.com/benjefferies/branch-protection-bot) - 브랜치 보호에서 "관리자 포함" 옵션을 일시적으로 비활성화했다가 다시 활성화합니다.
- [커밋 상태가 모두 성공하거나 하나라도 실패할 때까지 기다리고 그에 맞는 상태 출력을 설정하기](https://github.com/WyriHaximus/github-action-wait-for-status) - 모든 상태와 검사가 성공하거나 하나라도 실패할 때까지 기다린 다음, 결과에 맞춰 상태 출력을 설정합니다.
- [최신 태그 가져오기](https://github.com/WyriHaximus/github-action-get-previous-tag) - git에서 이전 태그를 가져옵니다.
- [마일스톤 만들기](https://github.com/WyriHaximus/github-action-create-milestone) - 제목과 설명을 지정해 새 열린 마일스톤을 만듭니다.
- [마일스톤 닫기](https://github.com/WyriHaximus/github-action-close-milestone) - 지정된 마일스톤을 닫습니다.
- [브랜치 이름 지정 규칙을 적용하는 Action](https://github.com/deepakputhraya/action-branch-name)
- [일부 GitHub 변수의 slug 노출하기](https://github.com/marketplace/actions/github-slug)
- [GitHub Action으로 사용하는 awesome-lint](https://github.com/max/awesome-lint)
- [JSON 파일 편집하기](https://github.com/deef0000dragon1/json-edit-action)
- [Slate 문서 빌드하기](https://github.com/Decathlon/slate-builder-action)
- [속성 읽기](https://github.com/christian-draeger/read-properties) - `.properties` 파일에서 값을 읽습니다.
- [속성 쓰기](https://github.com/christian-draeger/write-properties) - `.properties` 파일에 값을 씁니다.
- [Autotag](https://github.com/butlerlogic/action-autotag) - 매니페스트 파일(예: `package.json`) 버전이 변경되면 새 태그를 자동 생성합니다.
- [Jinja2 템플릿 적용하기](https://github.com/cuchi/jinja2-action) - Jinja2 템플릿 엔진을 사용해 템플릿에서 파일을 생성합니다.
- [Has Changes](https://github.com/UnicornGlobal/has-changes-action) - 이전 단계에서 코드 변경 사항이 있었는지 확인합니다.
- [Mind Your Language Action](https://github.com/tailaiw/mind-your-language-action) - 이슈와 Pull Request에서 공격적인 댓글을 감지하고 작성자에게 경고합니다.
- [YAML/JSON/XML 변환기](https://github.com/fabasoad/yaml-json-xml-converter-action) - YAML/JSON/XML 파일 형식을 서로 변환합니다.
- [NSFW 콘텐츠 감지](https://github.com/fabasoad/nsfw-detection-action) - 커밋된 파일에서 NSFW 콘텐츠를 감지합니다.
- [변경된 경로 확인하기](https://github.com/MarceloPrado/has-changed-path) - 변경된 경로를 기준으로 조건부로 Action을 실행합니다.
- [Linguist](https://github.com/fabasoad/linguist-action) - 저장소를 확인하고 사용된 언어 정보를 출력합니다.
- [Twilio 음성 통화](https://github.com/fabasoad/twilio-voice-call-action/) - 지정된 텍스트로 Twilio 음성 통화를 합니다.
- [Xcode 설정하기](https://github.com/maxim-lobanov/setup-xcode) - macOS 이미지에 사전 설치된 Xcode 버전 간 전환합니다.
- [Xamarin 설정하기](https://github.com/maxim-lobanov/setup-xamarin) - macOS 이미지에 사전 설치된 Xamarin 및 Mono 버전 간 전환합니다.
- [Memer Action](https://github.com/Bhupesh-V/memer-action) - 프로그래머 밈을 위한 GitHub Action입니다 xD.
- [Cocoapods 설정하기](https://github.com/maxim-lobanov/setup-cocoapods) - 특정 버전의 Cocoapods를 설정합니다.
- [공개 IP](https://github.com/haythem/public-ip) - GitHub Actions 러너의 공개 IP 주소를 조회합니다.
- [Lazarus/FPC용 GitHub Actions](https://github.com/gcarreno/setup-lazarus)
- [Twilio 팩스](https://github.com/fabasoad/twilio-fax-action/) - Twilio 계정으로 문서를 팩스로 보냅니다.
- [Kubernetes 도구 설정하기](https://github.com/yokawasa/action-setup-kube-tools) - 러너에 Kubernetes 도구(kubectl, kustomize, helm, kubeval, conftest, yq)를 설치합니다.
- [Elastic Cloud Control 도구 설정하기](https://github.com/yokawasa/action-setup-ecctl) - 러너에 특정 버전의 ecctl을 설치합니다.
- [PowerShell 스크립트](https://github.com/Amadevus/pwsh-script) - 워크플로 컨텍스트(예: `$github.token`)와 cmdlet을 사용해 PowerShell 스크립트를 실행하고 반환값을 Action 출력으로 제공합니다.
- [VirusTotal로 파일 업로드 및 검사하기](https://github.com/crazy-max/ghaction-virustotal)
- [GPG 키 가져오기](https://github.com/crazy-max/ghaction-import-gpg)
- [UPX로 압축하기](https://github.com/crazy-max/ghaction-upx) - 실행 파일을 위한 궁극의 패커입니다.
- [새 Go 모듈 버전을 프록시 캐시로 가져오기](https://github.com/andrewslotin/go-proxy-pull-action) - Go 모듈의 최신 버전이 프록시 캐시에 있도록 보장합니다. 릴리스 시 pkg.go.dev 문서도 업데이트합니다.
- [실행 아티팩트 삭제하기](https://github.com/marketplace/actions/delete-run-artifacts) - 워크플로 실행이 끝날 때 모든 아티팩트를 삭제합니다.
- [GitHub 환경 변수 Action](https://github.com/FranzDiebold/github-env-vars-action) - 브랜치/태그 이름, 저장소 slug, ref slug 등의 환경 변수를 노출합니다.
- [GitHub Action 잠금](https://github.com/abatilo/github-action-locks/blob/master/README.md) - GitHub Action 워크플로가 원자적으로 실행되도록 보장합니다.
- [경로 필터](https://github.com/dorny/paths-filter) - PR, 기능 브랜치 또는 푸시된 커밋에서 수정된 파일을 기준으로 조건부 Action을 실행합니다.
- [Minisauras](https://github.com/TeamTigers/minisauras) -기준 브랜치에서 모든 JavaScript 및 CSS 파일을 가져와 압축하고 새 브랜치로 Pull Request를 만듭니다.
- [웹사이트를 GIF로 변환](https://github.com/PabloLec/website-to-gif) - 모든 웹페이지를 README, 문서 등에 표시할 GIF로 변환합니다.
- [Interactive Inputs - 런타임 워크플로 입력값](https://github.com/boasiHQ/interactive-inputs) - GitHub Actions 워크플로에 런타임 동적 입력값을 추가합니다.

#### 환경

- [envfile 만들기](https://github.com/SpicyPizza/create-envfile)
- [이후 빌드 단계에서 사용할 전역 환경 변수 내보내기](https://github.com/zweitag/github-actions)
- [이후 단계에서 사용할 환경 변수를 프로그래밍 방식으로 설정하기](https://github.com/allenevans/set-env)
- [Python용 Conda 환경 설치하기](https://github.com/goanpeca/setup-miniconda)
- [NativeScript 설정하기](https://github.com/hrueger/setup-nativescript)
- [JSON 환경 파일 만들기](https://github.com/schdck/create-env-json)

#### 종속성

- [캐시를 사용해 NPM 종속성 설치하기](https://github.com/bahmutov/npm-install)
- [새 NPM 종속성 강조 표시하기](https://github.com/hiwelo/new-dependencies-action) - 새로 추가된 NPM 종속성 정보를 Pull Request 댓글로 남깁니다.
- [NPM 종속성 캐시하기](https://github.com/c-hive/gha-npm-cache)
- [Yarn 종속성 캐시하기](https://github.com/c-hive/gha-yarn-cache)

#### 시맨틱 버전 관리

- [Next SemVers](https://github.com/WyriHaximus/github-action-next-semvers) - 주어진 semver 버전을 바탕으로 다음 major, minor, patch 버전을 출력합니다.
- [검색 문자열로 최신 SemVer와 브랜치 이름 가져오기](https://github.com/jessicalostinspace/github-action-get-regex-branch)
- [릴리스 브랜치 분기하기](https://github.com/jessicalostinspace/cut-release-action) - 브랜치 접두사와 선택적 시맨틱 버전을 지정해 릴리스 브랜치를 생성합니다.
- [시맨틱 버전 증가시키기](https://github.com/christian-draeger/increment-semantic-version) - 릴리스 유형에 따라 지정된 시맨틱 버전(SemVer)을 올립니다.

### 정적 분석

- [PHPStan 정적 코드 분석기 Action](https://github.com/OskarStark/phpstan-ga)
- [GraphQL Inspector Action](https://github.com/kamilkisiela/graphql-inspector)
- [PSScriptAnalyzer를 사용한 PowerShell 정적 분석](https://github.com/devblackops/github-action-psscriptanalyzer)
- [tfsec을 실행하고 reviewdog 출력을 PR에 표시하기](https://github.com/reviewdog/action-tfsec)

#### 테스트

- [헤드리스 Chrome Node API인 Puppeteer로 테스트 실행하기](https://github.com/ianwalter/puppeteer)
- [xUnit Slack Reporter: xUnit 보고서의 테스트 요약을 Slack 채널로 전송](https://github.com/ivanklee86/xunit-slack-reporter)
- [Codeception 테스트 실행하기](https://github.com/joelwmale/codeception-action)
- [TestCafe 테스트 실행하기](https://github.com/DevExpress/testcafe-action)
- [Unity 테스트 실행하기](https://github.com/webbertakken/unity-test-runner)
- [Cypress E2E 테스트 실행하기](https://github.com/cypress-io/github-action)
- [Molecule로 Ansible 역할 테스트하기](https://github.com/robertdebock/molecule-action)
- [artillery.io로 성능 테스트 실행하기](https://github.com/kenju/github-actions-artillery)
- [BuildPulse로 불안정한 테스트 감지하기](https://github.com/Workshop64/buildpulse-action)
- [Jest 테스트의 인라인 코드 주석 표시하기](https://github.com/IgnusG/jest-report-action)
- [Julia 테스트 실행하기](https://github.com/julia-actions/julia-runtest)

#### 린트

- [PHP 코딩 표준 수정 Action](https://github.com/OskarStark/php-cs-fixer-ga)
- [저장소 안의 Dockerfile에 Hadolint 실행하기](https://github.com/burdzwastaken/hadolint-action)
- [ESLint를 실행하고 reviewdog 출력을 PR에 표시하기](https://github.com/reviewdog/action-eslint)
- [\*.workflow 파일용 JavaScript 기반 린터](https://github.com/OmarTawfik/github-actions-js)
- [tflint로 Terraform 파일을 린트하고 reviewdog 출력을 PR에 표시하기](https://github.com/reviewdog/action-tflint)
- [autopep8: PEP 8 스타일 가이드에 맞게 Python 코드를 자동 포맷](https://github.com/peter-evans/autopep8)
- [PHP 프로젝트의 `composer.json` 정규화를 확인하기 위해 `ergebnis/composer-normalize` 실행하기](https://github.com/ergebnis/composer-normalize-action)
- [패키지에 필요한 `runtime` 아티팩트만 있는지 확인하기 위해 `stolt/lean-package-validator` 실행하기](https://github.com/raphaelstolt/lean-package-validator-action)
- [PR 이벤트에서 Go 린트 검사 실행하기](https://github.com/ArangoGutierrez/GoLinty-Action)
- [Node.js - 패키지에서 사용하는 `format` 및/또는 `lint` 스크립트 자동 실행하기](https://github.com/MarvinJWendt/run-node-formatter)
- [Stylelinter - stylelint를 실행하는 GitHub Action](https://github.com/exelban/stylelint)
- [stylelint를 실행하고 reviewdog 출력을 PR에 표시하기](https://github.com/reviewdog/action-stylelint)
- [PyCodeStyle Action - pycodestyle(autopep8) 피드백을 PR 댓글로 남기는 GitHub Action](https://github.com/ankitvgupta/pycodestyle-action)
- [wemake-python-styleguide - 가장 엄격하고 강한 의견을 가진 Python 린터이며, reviewdog 출력을 PR에 선택적으로 표시](https://github.com/wemake-services/wemake-python-styleguide)
- [상태 검사 및 파일 diff 주석과 함께 TSLint 실행하기](https://github.com/mooyoul/tslint-actions)
- [commitlint로 Pull Request 커밋 린트하기](https://github.com/wagoid/commitlint-github-action)
- [vint를 실행하고 reviewdog 출력을 PR에 표시하기](https://github.com/reviewdog/action-vint)
- [mispell을 실행하고 reviewdog 출력을 PR에 표시하기](https://github.com/reviewdog/action-misspell)
- [golangci-lint를 실행하고 reviewdog 출력을 PR에 표시하기](https://github.com/reviewdog/action-golangci-lint)
- [shellcheck를 실행하고 reviewdog 출력을 PR에 표시하기](https://github.com/reviewdog/action-shellcheck)
- [Markdown 문서에서 배려 없거나 무례한 표현 찾아내기](https://github.com/theashraf/alex-action)
- [dotenv-linter 실행 - .env 파일을 간편하게 린트하고, reviewdog 출력을 PR에 선택적으로 표시](https://github.com/wemake-services/dotenv-linter)
- [dotenv-linter를 실행하고 reviewdog 출력을 PR에 표시하기](https://github.com/mgrachev/action-dotenv-linter)
- [여러 프로그래밍 언어의 린트 오류를 표시하고 자동 수정하기](https://github.com/samuelmeuli/lint-action)
- [PHP_CodeSniffer(주석 포함)](https://github.com/chekalsky/phpcs-action)
- [Markdown용 린터(프리셋 포함)](https://github.com/avto-dev/markdown-lint)
- [주석을 생성하는 Stylelint 문제 매처](https://github.com/xt0rted/stylelint-problem-matcher)
- [PR에서 sqlcheck를 실행해 SQL 쿼리의 안티패턴 식별하기](https://github.com/yokawasa/action-sqlcheck)
- [Play Store 가이드라인에 따라 Fastlane Supply 메타데이터 검증하기](https://github.com/ashutoshgngwr/validate-fastlane-supply-metadata)
- [Golang 코드 린트를 위해 Golint 실행하기](https://github.com/Jerome1337/golint-action)

#### 보안

- [Docker 이미지 취약점 스캐너](https://github.com/phonito/phonito-scanner-action)
- [Dependabot 업데이트 자동 승인 및 병합하기](https://github.com/ridedott/dependabot-auto-merge-action)
- [Python 코드에 dlint 보안 린터 실행하기](https://github.com/xen0l/dlint-check)
- [AWS Secrets Manager Actions](https://github.com/say8425/aws-secrets-manager-actions) - AWS Secrets Manager 시크릿을 환경 변수로 정의합니다.
- [AWS IAM 정책 문서의 정확성 및 보안 문제 린트하기](https://github.com/xen0l/iam-lint)
- [Secret Spreader](https://github.com/webfactory/secret-spreader) - 엄밀히 말해 Action은 아니지만, 여러 저장소의 Actions 시크릿을 관리하는 도구입니다.
- [Secrets Sync Action](https://github.com/google/secrets-sync-action) - 여러 저장소 간에 시크릿을 동기화하는 Action입니다.
- [Snyk Test Action](https://github.com/snyk/actions)
- [간단한 CLI로 GitHub Actions 시크릿 관리하기](https://github.com/unfor19/githubsecrets)
- [SecretHub](https://github.com/secrethub/actions) - 시크릿을 위한 단일 기준 소스를 마련하고 필요할 때 GitHub Actions로 불러옵니다.

#### 코드 커버리지

- [SonarCloud로 코드 검사하기](https://github.com/sonarsource/sonarcloud-github-action)
- [코드 커버리지를 codecov.io로 전송하기](https://github.com/codecov/codecov-action)
- [CodeClimate에 코드 커버리지 게시하기](https://github.com/paambaati/codeclimate-action)
- [저장소의 Go Report Card 업데이트하기](https://github.com/creekorful/goreportcard-action)

### 동적 분석

- [Gofmt를 실행해 Golang 코드 포맷 확인하기](https://github.com/Jerome1337/gofmt-action)
- [Goimports를 실행해 Golang import 순서 확인하기](https://github.com/Jerome1337/goimports-action)

### 모니터링

- [Google Chrome Lighthouse 테스트로 웹페이지 감사하기](https://github.com/jakejarvis/lighthouse-action)
- [Lighthouse를 실행하고 결과를 PR과 Slack에 게시하기](https://github.com/foo-software/lighthouse-check-action)
- [GitHub Actions를 사용해 CI에서 Lighthouse 실행하기](https://github.com/treosh/lighthouse-ci-action)
- [Go용 지속적 벤치마킹 및 벤치마크 시각화](https://github.com/bobheadxi/gobenchdata)
- [크기 제한 Action](https://github.com/andresz1/size-limit-action) - PR에 JavaScript 비용 비교 댓글을 남기고 한도를 넘으면 PR을 거부합니다.
- [bundlephobia 확인하기](https://github.com/carlesnunez/check-my-bundlephobia) - bundlephobia.io에 따라 새 패키지와 수정된 패키지의 크기를 댓글로 남기고 기준을 초과하면 PR을 거부합니다.

### Pull Request

- [담당자를 기준으로 PR 리뷰어 설정하기](https://github.com/pullreminders/assignee-to-reviewer-action)
- [브랜치 푸시 시 PR 열기 또는 업데이트하기(브랜치 선택 포함)](https://github.com/vsoch/pull-request-action)
- [PR 자동 리베이스하기](https://github.com/cirrus-actions/rebase)
- [지정된 수의 승인을 받으면 PR에 라벨 지정하기](https://github.com/pullreminders/label-when-approved-action)
- [일치하는 파일 패턴을 기준으로 PR에 라벨 추가하기](https://github.com/banyan/auto-label)
- [PR 자동 승인하기](https://github.com/hmarr/auto-approve-action)
- [구성 파일을 기준으로 PR에 리뷰어 자동 추가하기](https://github.com/kentaro-m/auto-assign-action)
- [브랜치 이름 패턴을 기준으로 PR에 라벨 추가하기](https://github.com/TimonVS/pr-labeler-action)
- [diff 전체 크기를 기준으로 PR에 라벨 추가하기](https://github.com/pascalgn/size-label-action)
- [준비된 PR 자동 병합하기](https://github.com/pascalgn/automerge-action)
- [PR에 티켓 참조가 포함되어 있는지 확인하기](https://github.com/vijaykramesh/pr-lint-action)
- [Actions 작업 공간에서 저장소 변경 사항의 PR 만들기](https://github.com/peter-evans/create-pull-request)
- [PR 린트하기](https://github.com/seferov/pr-lint-action)
- [PR용 ChatOps](https://github.com/machine-learning-apps/actions-chatops)
- [브랜치 이름에서 추출한 텍스트를 바탕으로 PR 제목과 본문에 접두사 붙이기](https://github.com/tzkhan/pr-update-action)
- [Autosquash 커밋 차단하기](https://github.com/xt0rted/block-autosquash-commits-action)
- [병합 시 버전 증가 및 태그 자동 지정하기](https://github.com/anothrNick/github-tag-action)
- [오래된 검사가 있는 PR을 자동 업데이트하고 모든 브랜치 보호 규칙에 부합하는 PR은 스쿼시 병합하기](https://github.com/tibdex/autosquash)
- [Merge Pal - PR 자동 업데이트 및 병합](https://github.com/maxkomarychev/merge-pal-action)
- [Pull Request 제목에 이름 지정 규칙 적용하기](https://github.com/deepakputhraya/action-pr-title)
- [Pull Request 정체 알림기](https://github.com/jrylan/github-action-stuck-pr-notifier)
- [commitlint로 Pull Request 이름 린트하기(스쿼시 병합 시 유용!)](https://github.com/JulienKode/pull-request-name-linter-action)
- [대상 브랜치 검사가 실패하면 PR 병합 차단하기](https://github.com/cirrus-actions/branch-guard)
- [Pull Request로 생성된 정적 사이트 스크린샷 업데이트하기](https://github.com/ssowonny/diff-pages-action)
- [Pull Request가 아직 진행 중인지에 따라 라벨 추가하기](https://github.com/AlbertHernandez/working-label-action)
- [티켓 확인 Action](https://github.com/neofinancial/ticket-check-action) - 모든 Pull Request 제목 앞에 티켓 또는 이슈 번호를 자동으로 추가합니다.
- [정규식을 사용한 Pull Request 린트](https://github.com/MorrisonCole/pr-lint-action)
- [Pull Request Landmines](https://github.com/tylermurry/github-pr-landmine)
- [Checkstyle XML 보고서를 바탕으로 GitHub Pull Request에 주석 달기](https://github.com/staabm/annotate-pull-request-from-checkstyle)
- [Pull Request 통계](https://github.com/flowwer-dev/pull-request-stats) -리뷰어와 관련된 통계를 출력합니다.
- [Pull Request 설명 강제기](https://github.com/derkinderfietsen/pr-description-enforcer) - Pull Request 설명 작성을 강제합니다.

### GitHub Pages

- [Zola 사이트를 GitHub Pages에 배포하기](https://github.com/shalzz/zola-deploy-action)
- [Hugo 정적 콘텐츠 사이트를 빌드하고 gh-pages 브랜치에 게시하기](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages)
- [사용자 지정 Jekyll 플러그인 및 빌드 스크립트로 Jekyll 사이트를 빌드하고 Gh-Pages 브랜치에 배포하기](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages)
- [Google Dataset Search 메타데이터](https://www.github.com/openschemas/extractors/) - 그 밖의 schema.org 추출기와 함께 데이터셋을 GitHub Pages에서 검색할 수 있도록 합니다.
- [정적 사이트 생성기로 GitHub Pages에 배포하는 GitHub Actions](https://github.com/peaceiris/actions-gh-pages)
- [Hexo용 GitHub Action](https://github.com/heowc/action-hexo)
- [Google Analytics 통계를 GitHub Pages에 배포하기](https://github.com/cristianpb/analytics-google)
- [GitHub Actions, Pages 및 Jekyll 기반 Jupyter Notebook 블로그 플랫폼](https://github.com/fastai/fastpages)
- [정적 사이트를 GitHub Pages에 배포하기](https://github.com/appleboy/gh-pages-action) - 사용자 지정 디렉터리에 배포하고 폴더/파일을 무시합니다.
- [고급 설정으로 GitHub Pages에 배포하기](https://github.com/crazy-max/ghaction-github-pages)

### 알림 및 메시지

- [Discord 알림 보내기](https://github.com/Ilshidur/action-discord)
- [봇으로 Slack 메시지 게시하기](https://github.com/pullreminders/slack-action)
- [Nexmo를 사용해 GitHub Actions에서 SMS 보내기](https://github.com/nexmo-community/nexmo-sms-action)
- [Clockworksms를 사용해 GitHub Actions에서 SMS 보내기](https://github.com/bharathvaj1995/clockwork-sms-action)
- [Telegram 메시지 보내기](https://github.com/appleboy/telegram-action)
- [Discord에 파일 또는 텍스트 메시지 보내기(색상, 사용자 이름 또는 아바타 사용자 지정)](https://github.com/appleboy/discord-action)
- [Pull Request를 사용해 트윗 공동 작업하기](https://github.com/gr2m/twitter-together)
- [Push by Techulus를 통해 푸시 알림 보내기](https://github.com/techulus/push-github-action)
- [SendGrid로 이메일 보내기](https://github.com/peter-evans/sendgrid-action)
- [Join을 통해 푸시 알림 보내기](https://github.com/ShaunLWM/action-join)
- [npm용 새 패키지 버전 확인기](https://github.com/MeilCli/npm-update-check-action)
- [NuGet용 새 패키지 버전 확인기](https://github.com/MeilCli/nuget-update-check-action)
- [Gradle용 새 패키지 버전 확인기](https://github.com/MeilCli/gradle-update-check-action)
- [Pushbullet을 통해 푸시 알림 보내기](https://github.com/ShaunLWM/action-pushbullet)
- [Microsoft Graph를 사용해 Outlook 캘린더 이벤트 만들기](https://github.com/anoopt/ms-graph-create-event)
- [GitHub Wiki 페이지 변경 사항을 감시하고 Slack에 게시하기](https://github.com/benmatselby/gollum-page-watcher-action)
- [MessageBird를 사용해 SMS 보내기](https://github.com/nikitasavinov/messagebird-sms-action)
- [오래된 봇에 응답하기](https://github.com/c-hive/fresh-bot)
- [Discord에 Embed 메시지 보내기](https://github.com/sarisia/actions-status-discord)
- [PR을 Teamwork 작업과 동기화 상태로 유지하기](https://github.com/Teamwork/github-sync)
- [Microsoft Teams 알림 보내기](https://github.com/opsless/ms-teams-github-actions)

### 배포

- [Netlify에 배포하기](https://github.com/netlify/actions)
- [Actions를 사용해 Probot 앱 배포하기](https://probot.github.io/docs/deployment/#github-actions)
- [재생 목록을 Spotify에 배포하기](https://github.com/swinton/SpotHub)
- [vsce로 VS Code 확장 배포하기](https://github.com/lannonbr/vsce-action)
- [웹사이트 업데이트 후 Cloudflare 캐시 비우기](https://github.com/jakejarvis/cloudflare-purge-action)
- [DNS Control을 사용해 DNS 구성 배포하기](https://github.com/koenrh/dnscontrol-action)
- [Shopify에 테마 배포하기](https://github.com/pgrimaud/action-shopify)
- [여러 GitLab CI 파이프라인 트리거하기](https://github.com/appleboy/gitlab-ci-action)
- [여러 Jenkins 작업 트리거하기](https://github.com/appleboy/jenkins-action)
- [Homebrew Tap용 GitHub Action](https://github.com/izumin5210/action-homebrew-tap)
- [SSH를 통해 파일과 아티팩트 복사하기](https://github.com/appleboy/scp-action)
- [원격 SSH 명령 실행하기](https://github.com/appleboy/ssh-action)
- [Python 배포 패키지를 PyPI에 게시하기](https://github.com/pypa/gh-action-pypi-publish)
- [정적 웹사이트를 Azure Storage에 배포하기](https://github.com/feeloor/azure-static-website-deploy)
- [패키지 빌드 및 게시를 위한 크로스 플랫폼 Chocolatey CLI](https://github.com/crazy-max/ghaction-chocolatey)
- [iOS Pod 라이브러리를 Cocoapods에 배포하기](https://github.com/michaelhenry/deploy-to-cocoapods-github-action)
- [TencentCloud Serverless용 GitHub Action](https://github.com/Juliiii/action-scf)
- [npm (프리)릴리스 게시하기](https://github.com/epeli/npm-release/)
- [정적 사이트를 Surge.sh에 배포하기](https://github.com/yavisht/deploy-via-surge.sh-github-action-template)
- [Go 프로젝트용 릴리스 자동화 도구 GoReleaser를 위한 GitHub Action](https://github.com/goreleaser/goreleaser-action)
- [FTP Deploy Action, GitHub Actions를 사용해 GitHub 프로젝트를 FTP 서버에 배포](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Dev.to에 글 게시하기](https://github.com/tylerauerbeck/publish-to-dev.to-action)
- [Semantic Release용 Action](https://github.com/cycjimmy/semantic-release-action)
- [컬렉션을 Ansible Galaxy에 배포하기](https://github.com/artis3n/ansible_galaxy_collection)
- [모듈을 Puppet Forge에 게시하기](https://github.com/barnumbirr/action-forge-publish)
- [Electron 앱 빌드 및 게시하기](https://github.com/samuelmeuli/action-electron-builder)
- [Maven 패키지 게시하기](https://github.com/samuelmeuli/action-maven-publish)
- [Ghost CMS용 테마 빌드 및 배포하기](https://github.com/TryGhost/action-deploy-theme)
- [Ansible 역할을 Ansible Galaxy에 배포하기](https://github.com/robertdebock/galaxy-action)
- [하나 이상의 JS 모듈을 레지스트리에 게시하기](https://github.com/author/action-publish)
- [Slack을 사용해 2FA로 패키지 게시하기](https://github.com/erezrokah/2fa-with-slack-action)
- [지속적 배포 파이프라인의 워크플로 실행을 순차 처리하기](https://github.com/softprops/turnstyle)
- [각 커밋마다 실행되는 Netlify 배포 GitHub Action](https://github.com/nwtgck/actions-netlify)
- [Ansible 플레이북 실행하기](https://github.com/arillso/action.playbook)
- [Python 배포 패키지를 Anaconda Cloud에 게시하기](https://github.com/fcakyon/conda-publish-action)
- [VS Code 확장을 Visual Studio Marketplace 또는 Open VSX Registry에 배포하기](https://github.com/HaaLeo/publish-vscode-extension)
- [YouTube 동영상을 Anchor.fm 팟캐스트에 배포하기](https://github.com/Schrodinger-Hat/youtube-to-anchorfm)
- [AWS CodeDeploy로 배포하기](https://github.com/webfactory/create-aws-codedeploy-deployment)

#### Docker

- [README.md에서 Docker Hub 저장소 설명 업데이트하기](https://github.com/peter-evans/dockerhub-description)
- [Docker 이미지를 GitHub Package Registry(GPR)에 게시하기](https://github.com/machine-learning-apps/gpr-docker-publish)
- [Docker Hub에서 저장소의 "전체 설명" 업데이트하기](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata)
- [Kaniko를 사용해 Docker 이미지를 빌드하고 모든 레지스트리에 게시하기](https://github.com/outillage/kaniko-action)
- [Docker 이미지 크기 모니터링 및 제한하기](https://github.com/wemake-services/docker-image-size-limit)
- [Docker 이미지를 Amazon Elastic Container Registry(ECR)에 게시하기](https://github.com/appleboy/docker-ecr-action)
- [각 단계를 캐시해 빌드 시간을 줄이면서 Docker 이미지 빌드 및 푸시하기](https://github.com/whoan/docker-build-with-cache-action)
- [Docker Buildx 설정하기](https://github.com/crazy-max/ghaction-docker-buildx)
- [브랜치 또는 태그 이름을 Docker 호환 이미지 태그로 변환하기](https://github.com/ankitvgupta/ref-to-tag-action/)
- [README.md에서 컨테이너 저장소 설명 업데이트하기](https://github.com/marketplace/actions/update-container-description-action) - 지원 레지스트리: Docker Hub, Quay, Harbor.

#### Kubernetes

- [Pulumi를 사용해 모든 클라우드 또는 Kubernetes에 배포하기](https://github.com/pulumi/actions)
- [kubectl로 Kubernetes에 배포하기](https://github.com/steebchen/kubectl)
- [Google Kubernetes Engine(GKE)에서 Kubeconfig 파일 가져오기](https://github.com/machine-learning-apps/gke-kubeconfig)
- [Kubernetes 구성 YAML을 Kustomize로 관리하기](https://github.com/karancode/kustomize-github-action)
- [Krucible을 사용해 테스트용 Kubernetes 클러스터 만들기](https://github.com/Krucible/krucible-github-action)

#### AWS

- [디렉터리를 AWS S3 버킷에 동기화/업로드하기](https://github.com/jakejarvis/s3-sync-action)
- [기존 함수에 Lambda 코드 배포하기](https://github.com/appleboy/lambda-action)

#### Terraform

- [Terraform 문서 생성하기](https://github.com/Dirrk/terraform-docs) - terraform-docs를 사용해 Terraform 모듈 문서를 생성합니다.
- [Terraform으로 GitHub 관리를 검증하고 적용하는 예제](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows)

### 외부 서비스

- [Jenkinsfile 사용하기](https://github.com/jonico/jenkinsfile-runner-github-actions)
- [Firebase용 GitHub Action](https://github.com/w9jds/firebase-action)
- [Contentful Migration CLI용 GitHub Action](https://github.com/Shy/contentful-action)
- [Pixela(a-know/pi)용 GitHub Actions](https://github.com/peaceiris/actions-pixela)
- [Google Cloud Platform(GCP)용 GitHub Action](https://github.com/exelban/gcloud)
- [모든 OpenStack Swift 서비스 공급자에 파일 업로드하기](https://github.com/iksaku/openstack-swift-action)
- [Stack Overflow 게시물을 Slack으로 보내는 GitHub Action](https://github.com/logankilpatrick/StackOverflowBot)
- [AWS 역할 맡기](https://github.com/nordcloud/aws-assume-role/)
- [JSONbin을 사용해 사용자 지정 응답 생성하기](https://github.com/fabasoad/jsonbin-action)

### 프런트엔드 도구

- [Gradle 작업 실행하기](https://github.com/MrRamych/gradle-actions)
- [JS 빌드 Actions](https://github.com/elstudio/actions-js-build) - Grunt 또는 Gulp 빌드 작업을 실행하고 파일 변경 사항을 커밋합니다.
- [Gatsby CLI용 GitHub Action](https://github.com/jzweifel/gatsby-cli-github-action)
- [WebPageTest 감사를 실행하고 결과를 커밋 댓글로 출력하기](https://github.com/JCofman/webPagetestAction)
- [Hugo extended용 GitHub Actions](https://github.com/peaceiris/actions-hugo)
- [OG 이미지 생성하기](https://github.com/BoyWithSilverWings/generate-og-image) - Markdown 파일에서 사용자 지정 가능한 Open Graph 이미지를 생성합니다.
- [mdBook용 GitHub Actions](https://github.com/peaceiris/actions-mdbook)
- [Mint 설정하기](https://github.com/fabasoad/setup-mint-action) - Mint 설정(싱글 페이지 애플리케이션 작성용 프로그래밍 언어)입니다.
- [Gatsby AWS S3 배포](https://github.com/jonelantha/gatsby-s3-action) - Gatsby를 S3에 배포합니다(CloudFront 지원).

### 머신러닝 운영

- [Argo Workflows 제출(클라우드 독립적)](https://github.com/machine-learning-apps/actions-argo)
- [GKE에 Argo Workflows 제출하기](https://github.com/machine-learning-apps/gke-argo)
- [Weights & Biases에서 실험 추적 결과 조회하기](https://github.com/machine-learning-apps/wandb-action)
- [매개변수가 지정된 Jupyter Notebook 실행하기](https://github.com/yaananth/run-notebook)
- [Kubeflow 파이프라인 컴파일, 배포 및 실행하기](https://github.com/NikeNano/kubeflow-github-action)
- [데이터 과학 저장소를 Jupyter 서버로 자동 Docker화하기](https://github.com/jupyterhub/repo2docker-action)
- [GitHub Actions를 사용한 Azure Machine Learning](https://github.com/machine-learning-apps/ml-template-azure)

### 빌드

- [run-cmake](https://github.com/lukka/run-cmake) - [CMake](https://cmake.org)와 [Ninja](https://ninja-build.org/)로 C/C++ 소프트웨어를 빌드하는 멀티플랫폼 Action입니다.
- [run-vcpkg](https://github.com/lukka/run-vcpkg) - [vcpkg](https://github.com/microsoft/vcpkg)로 C/C++ 종속성을 빌드하고 설치하는 멀티플랫폼 Action입니다.
- [여러 플랫폼용 Go 애플리케이션 빌드하기](https://github.com/izumin5210/action-go-crossbuild)
- [Maven 빌드용 ~/.m2/settings.xml 생성하기](https://github.com/whelk-io/maven-settings-xml-action)
- [Pascal 스크립트 실행하기](https://github.com/fabasoad/pascal-action)
- [Brainfuck 설정하기](https://github.com/fabasoad/setup-brainfuck-action) - Brainfuck 인터프리터를 설정합니다.
- [Go 바이너리를 GitHub 릴리스 에셋으로 게시하기](https://github.com/wangyoucao577/go-release-action)
- [COBOL 설정하기](https://github.com/fabasoad/setup-cobol-action)
- [Gradle 버전 확인하기](https://github.com/madhead/check-gradle-version) - Gradle 버전을 최신 상태로 유지합니다.

### 데이터베이스

- [Cassandra 스키마 설정하기](https://github.com/fabasoad/setup-cassandra-action) - 제공된 폴더의 스크립트를 Cassandra 클러스터에서 실행합니다.

### 네트워킹

- [ZeroTier 설정하기](https://github.com/zerotier/github-action) - 러너를 ZeroTier 네트워크에 연결합니다.

### 현지화

- [코드의 오타와 문법 오류 찾아 자동 수정하기](https://github.com/sobolevn/misspell-fixer-action)
- [Translation](https://github.com/fabasoad/translation-action) - 모든 언어의 텍스트를 다른 언어로 번역합니다.

### 재미

- [README에 좋아요 버튼과 같은 기능 추가하기](https://github.com/ariary/Readme-Like-Button) - README의 특정 부분에 대한 커뮤니티의 동의를 시각화합니다(투표로 사용할 수 있음).

### 치트 시트

- [GitHub Actions 브랜딩 치트 시트](https://haya14busa.github.io/github-action-brandings/)

## 튜토리얼

- [Up을 사용한 Next.js 앱의 지속적 배포](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400)
- [Docker 기반 Action을 JavaScript/TypeScript로 변환하기](https://httgp.com/converting-github-actions-from-docker-to-javascript/)
- [Swift/iOS 프로젝트용 GitHub Actions CI](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a)
- [GitHub Actions 활용하기](https://jeffrafter.com/working-with-github-actions)
- [Rails 개발자를 위한 GitHub Actions](https://www.youtube.com/watch?v=gGUXydw22zw)
- [GitHub Actions 강림절 달력](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html)
- [GitHub Actions를 사용한 무중단 Laravel 배포](https://atymic.dev/blog/github-actions-laravel-ci-cd/)
- [사용자 지정 GitHub Actions 만들기: Pluralsight 강의](https://www.pluralsight.com/courses/building-custom-github-actions/)
- [Docker와 GitHub Actions를 사용해 Django를 DigitalOcean에 지속적으로 배포하기](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/)
- [Docker로 자체 호스팅 GitHub Actions 러너 배포하기](https://testdriven.io/blog/github-actions-docker/) - Docker와 Docker Swarm을 사용해 자체 호스팅 GitHub Actions 러너를 DigitalOcean에 배포합니다.
- [AWS Spot 인스턴스에서 자동 확장되는 자체 호스팅 GitHub Actions 러너 설정하기](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners)
- [GitHub Actions 핵심 파악하기](https://gist.github.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6)

> 공유할 자료가 더 있다면 언제든지 PR을 보내 주세요. 자세한 내용은 [contributing.md](contributing.md)를 확인하세요.
