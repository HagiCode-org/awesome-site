<p align="center">
  <br>
    <img src="awesome-actions.png" width="150"/>
  <br>
</p>

# Awesome Actions [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [<!--lint ignore no-dead-urls-->![GitHub Actions 狀態 | sdras/awesome-actions](https://github.com/sdras/awesome-actions/workflows/Lint%20Awesome%20List/badge.svg)](https://github.com/sdras/awesome-actions/actions?workflow=Lint+Awesome+List)

> GitHub Actions 相關精彩資源的精選清單。

Actions 會由儲存庫中的 GitHub 平台事件直接觸發，並依需求在 Linux、Windows 或 macOS 虛擬機器上，或在容器內執行工作流程。使用 GitHub Actions，您可以將工作流程自構想到正式環境全面自動化。

## 目錄

- [官方資源](#official-resources)
  - [工作流程範例](#workflow-examples)
  - [官方 Actions](#official-actions)
  - [建立自己的 Actions](#create-your-actions)
- [社群資源](#community-resources)
  - [GitHub 工具與管理](#github-tools-and-management)
  - [Actions 集合](#collection-of-actions)
  - [實用工具](#utility)
  - [靜態分析](#static-analysis)
  - [動態分析](#dynamic-analysis)
  - [監控](#monitoring)
  - [Pull Request](#pull-requests)
  - [GitHub Pages](#github-pages)
  - [通知與訊息](#notifications-and-messages)
  - [部署](#deployment)
  - [外部服務](#external-services)
  - [前端工具](#frontend-tools)
  - [機器學習維運](#machine-learning-ops)
  - [建置](#build)
  - [資料庫](#database)
  - [網路](#networking)
  - [在地化](#localization)
  - [趣味工具](#fun)
  - [速查表](#cheat-sheet)
- [教學](#tutorials)

## 官方資源

- [官方網站](https://github.com/features/actions)
- [官方文件](https://help.github.com/en/actions)
- [官方 Actions 組織](https://github.com/actions)
  - [actions/virtual-environments](https://github.com/actions/virtual-environments) - GitHub Actions 虛擬環境。
  - [actions/runner](https://github.com/actions/runner) - GitHub Actions 的 Runner。
- [GitHub 部落格公告](https://github.blog/2018-10-17-action-demos/)

### 工作流程範例

- [actions/starter-workflows](https://github.com/actions/starter-workflows) - 入門工作流程管理。
- [actions/example-services](https://github.com/actions/example-services) - 使用服務容器的工作流程範例。

### 官方 Actions

<!--lint disable no-dead-urls-->

#### 工作流程工具 Actions

適用於工作流程的工具 Actions。

<!--lint ignore awesome-spell-check-->

- [actions/checkout](https://github.com/actions/checkout) - 在工作流程中設定儲存庫。
- [actions/upload-artifact](https://github.com/actions/upload-artifact) - 從工作流程上傳成品。
- [actions/download-artifact](https://github.com/actions/download-artifact) - 從建置中下載成品。
- [actions/cache](https://github.com/actions/cache) - 在 GitHub Actions 中快取相依項目與建置輸出。
- [actions/github-script](https://github.com/actions/github-script) - 為 GitHub API 與工作流程內容撰寫指令碼。

#### GitHub 自動化 Actions

自動化管理 issues、pull request 與 releases。

- [actions/create-release](https://github.com/actions/create-release) - 透過 GitHub Release API 建立發行版本的 Action。
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - 透過 GitHub Release API 上傳發行資產的 Action。
- [actions/first-interaction](https://github.com/actions/first-interaction) - 篩選首次貢獻者所提交 pull request 與 issue 的 Action。
- [actions/stale](https://github.com/actions/stale) - 標記近期沒有互動的 issue 與 pull request。
- [actions/labeler](https://github.com/actions/labeler) - 自動為 pull request 加上標籤的 Action。
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - 從 GitHub Packages 刪除套件版本。

#### 環境設定 Actions

為 GitHub Actions 工作流程設定特定版本的程式語言。

- [actions/setup-node: Node.js](https://github.com/actions/setup-node)
- [actions/setup-python: Python](https://github.com/actions/setup-python)
- [actions/setup-go: Go](https://github.com/actions/setup-go)
- [actions/setup-dotnet: .NET core sdk](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC and Cabal)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir](https://github.com/actions/setup-elixir)
- [actions/setup-julia: Julia](https://github.com/julia-actions/setup-julia)

### 建立自己的 Actions

#### JavaScript 與 TypeScript Actions

- [actions/toolkit](https://github.com/actions/toolkit) - 用於開發 GitHub Actions 的 GitHub ToolKit。
- [actions/hello-world-javascript-action](https://github.com/actions/hello-world-javascript-action) - 示範如何建置 JavaScript Action 的範本。
- [actions/javascript-action](https://github.com/actions/javascript-action) - 建立 JavaScript Action。
- [actions/typescript-action](https://github.com/actions/typescript-action) - 建立 TypeScript Action。
- [actions/http-client](https://github.com/actions/http-client) - 為 Actions 使用情境最佳化的輕量 HTTP 用戶端，採用具泛型與 async await 的 TypeScript。

#### Docker 容器 Actions

- [actions/hello-world-docker-action](https://github.com/actions/hello-world-docker-action) - 示範如何建置 Docker Action 的範本。
- [actions/container-toolkit-action](https://github.com/actions/container-toolkit-action) - 使用 actions/toolkit 建立容器 Actions 的範本儲存庫。

## 社群資源

### GitHub 工具與管理

- [以宣告式方式設定 GitHub 標籤](https://github.com/lannonbr/issue-label-manager-action)
- [以宣告式方式同步 GitHub 標籤的 Action](https://github.com/micnncim/action-label-syncer)
- [將 releases 新增至 GitHub](https://github.com/elgohr/Github-Release-Action)
- [將 Docker 映像發佈至 Docker Hub](https://github.com/elgohr/Publish-Docker-Github-Action)
- [使用檔案內容建立 issue](https://github.com/peter-evans/create-issue-from-file)
- [發佈含有資產的 GitHub Releases](https://github.com/softprops/action-gh-release)
- [GitHub 專案自動化+](https://github.com/alex-page/github-project-automation-plus) - 透過任何 webhook 事件自動化 GitHub Project 卡片。
- [透過網頁介面在本機執行 GitHub Actions](https://github.com/phishy/wflow)
- [在終端機中本機執行 GitHub Actions](https://github.com/nektos/act)
- [建置並發佈 Android 除錯 APK](https://github.com/ShaunLWM/action-release-debugapk)
- [為 GitHub Actions 產生連續的建置編號](https://github.com/einaregilsson/build-number)
- [無需處理驗證困難即可將 Git 變更推送至 GitHub 儲存庫](https://github.com/ad-m/github-push-action)
- [根據事件產生版本說明](https://github.com/Decathlon/release-notes-generator-action)
- [根據提供的 Markdown 檔案建立 GitHub wiki 頁面](https://github.com/Decathlon/wiki-page-creator-action)
- [（根據已提交的檔案）自動為 Pull Request 加上標籤](https://github.com/Decathlon/pull-request-labeler-action)
- [根據作者的團隊名稱為 Pull Request 加上標籤](https://github.com/JulienKode/team-labeler-action)
- [取得 PR／Push 中的檔案變更清單](https://github.com/trilom/file-changes-action)
- [在任何工作流程中使用私人 Actions](https://github.com/InVisionApp/private-action-loader)
- [根據 Issue 內容加上標籤](https://github.com/damccorm/tag-ur-it)
- [回復 GitHub Release](https://github.com/author/action-rollback)
- [一段時間未活動後鎖定已關閉的 Issue 與 Pull Request](https://github.com/dessant/lock-threads)
- [取得兩個分支之間的提交差異數量](https://github.com/jessicalostinspace/commit-difference-action)
- [根據 Git 參照產生版本說明](https://github.com/metcalfc/changelog-generator)
- [在 GitHub 儲存庫與提交上強制執行政策](https://github.com/talos-systems/conform)
- [根據 Issue 描述自動加上標籤](https://github.com/Renato66/auto-label)
- [將已設定的 GitHub Actions 更新至最新版](https://github.com/fabasoad/ghacu)
- [建立 Issue 分支](https://github.com/robvanderleek/create-issue-branch)
- [移除舊的成品](https://github.com/c-hive/gha-remove-artifacts)
- [將 Git 提交資料公開為環境變數](https://github.com/rlespinasse/git-commit-data-action)
- [將指定檔案／二進位檔同步至 Wiki 或外部儲存庫](https://github.com/kai-tub/external-repo-sync-action)
- [根據任意檔案建立／更新／刪除 GitHub Wiki 頁面](https://github.com/Andrew-Chen-Wang/github-wiki-action)
- [Prow GitHub Actions](https://github.com/jpmcb/prow-github-actions) - 自動化政策強制執行、ChatOps 與 PR 自動合併。
- [在工作流程中檢查 GitHub 狀態](https://github.com/crazy-max/ghaction-github-status)
- [以程式碼管理 GitHub 標籤（建立／重新命名／更新／刪除）](https://github.com/crazy-max/ghaction-github-labeler)
- [持續向專案貢獻者與相依項目分配資金](https://github.com/protontypes/libreselery)
- [GitHub Herald 規則：為 PR 新增訂閱者、指派對象、標籤等](https://github.com/gagoar/use-herald-action)
- [GitHub Codeowners 驗證器](https://github.com/mszostok/codeowners-validator) - 確保 GitHub CODEOWNERS 檔案正確無誤。支援公開與私人 GitHub 儲存庫，以及 GitHub Enterprise 安裝環境。
- [Copybara Action](https://github.com/olivr/copybara-action) - 在儲存庫之間移動並轉換程式碼（適合從單一 monorepo 維護多個儲存庫）。

### Actions 集合

- [使用 HashiCorp 的 Terraform](https://github.com/hashicorp/setup-terraform)
- [Yarn 1 的 GitHub Actions](https://github.com/Borales/actions-yarn)
- [Yarn 2 的 GitHub Actions](https://github.com/sergioramos/yarn-actions)
- [Golang 的 GitHub Actions](https://github.com/cedrickring/golang-action)
- [R 與配套 #rstats 套件的 GitHub Actions](http://maxheld.de/ghactions/)
- [WordPress 的 GitHub Actions](https://github.com/10up/actions-wordpress/)
- [Composer 的 GitHub Actions](https://github.com/MilesChou/composer-action)
- [Flutter 的 GitHub Actions](https://github.com/subosito/flutter-action)
- [PHP 的 GitHub Actions](https://github.com/shivammathur/setup-php)
- [Rust 的 GitHub Actions](https://github.com/actions-rs)
- [Android 的 GitHub Actions](https://github.com/Malinskiy/action-android)
- [Logtalk 與 Prolog 的 GitHub Actions](https://github.com/logtalk-actions)
- [Deno 的 GitHub Actions](https://github.com/denolib/setup-deno)
- [Unity 的 GitHub Actions](https://github.com/webbertakken/unity-actions)
- [Octions－適用於 GitHub REST API 的 GitHub Actions](https://github.com/maxkomarychev/octions)
- [Docker 的 GitHub Actions](https://github.com/docker/github-actions)
- [AWS 的 GitHub Actions](https://github.com/clowdhaus/aws-github-actions)
- [Actions Hub](https://github.com/actionshub)

### 實用工具

- [設定 `ssh-agent`](https://github.com/webfactory/ssh-agent) - 執行 `ssh-agent`，並使用額外的 SSH 金鑰存取私人儲存庫。
- [README 的 GitHub Actions 徽章](https://github.com/atrox/github-actions-badge)
- [搭配 poetry 的 Python 專案 GitHub Actions](https://github.com/abatilo/actions-poetry)
- [搭配 pyenv 的 Python 專案 GitHub Actions](https://github.com/gabrielfalcao/pyenv-action)
- [用於編譯 LaTeX 文件的 GitHub Actions](https://github.com/xu-cheng/latex-action)
- [更新 Maxmind 資料庫](https://github.com/meetup/maxmind-updater)
- [透過 tmate 使用 SSH 除錯](https://github.com/mxschmitt/action-tmate) - 提供 SSH 連線，以直接對 Action 除錯。
- [解鎖 git-crypt 檔案](https://github.com/sliteteam/github-action-git-crypt-unlock)
- [Golang CGO 交叉編譯器](https://github.com/crazy-max/ghaction-xgo)
- [在其他架構上執行工作：arm32、aarch64 等](https://github.com/uraimo/run-on-arch-action)
- [產生目錄](https://github.com/technote-space/toc-generator)
- [自動為 Issue 新增標籤或指派對象](https://github.com/Naturalclar/issue-action)
- [在我們說 lgtm 時以圖片或 GIF 傳送 LGTM 回應的 Action](https://github.com/micnncim/action-lgtm-reaction)
- [跨多個範圍產生建置編號](https://github.com/zyborg/gh-action-buildnum)
- [發佈 GitHub release 成品](https://github.com/skx/github-action-publish-binaries)
- [Jekyll Diff Action](https://github.com/David-Byrne/jekyll-diff-action) - 變更後比較建置完成的 Jekyll 網站，並將結果留言回 GitHub。
- [分支保護機器人](https://github.com/benjefferies/branch-protection-bot) - 暫時停用再重新啟用分支保護中的「包含管理員」選項。
- [等待提交狀態](https://github.com/WyriHaximus/github-action-wait-for-status) - 等待所有狀態與檢查成功或其中任一項失敗，並據此設定狀態輸出。
- [取得最新標籤](https://github.com/WyriHaximus/github-action-get-previous-tag) - 從 git 取得前一個標籤。
- [建立里程碑](https://github.com/WyriHaximus/github-action-create-milestone) - 根據標題與描述建立新的開啟中里程碑。
- [關閉里程碑](https://github.com/WyriHaximus/github-action-close-milestone) - 關閉指定的里程碑。
- [強制執行分支命名規則的 Action](https://github.com/deepakputhraya/action-branch-name)
- [公開部分 GitHub 變數的 slug](https://github.com/marketplace/actions/github-slug)
- [以 GitHub Action 執行 awesome-lint](https://github.com/max/awesome-lint)
- [編輯 JSON 檔案](https://github.com/deef0000dragon1/json-edit-action)
- [建置 Slate 文件](https://github.com/Decathlon/slate-builder-action)
- [讀取 Properties](https://github.com/christian-draeger/read-properties) - 讀取 `.properties` 檔案中的值。
- [寫入 Properties](https://github.com/christian-draeger/write-properties) - 將值寫入 `.properties` 檔案。
- [Autotag](https://github.com/butlerlogic/action-autotag) - 當資訊清單檔（例如 `package.json`）中的版本變更時，自動產生新標籤。
- [使用 Jinja2 套用範本](https://github.com/cuchi/jinja2-action) - 使用 Jinja2 範本引擎從範本產生檔案。
- [Has Changes](https://github.com/UnicornGlobal/has-changes-action) - 檢查先前步驟是否有程式碼變更。
- [Mind Your Language Action](https://github.com/tailaiw/mind-your-language-action) - 偵測 issue 與 pull request 中冒犯性的留言，並警告發文者。
- [YAML／JSON／XML 轉換器](https://github.com/fabasoad/yaml-json-xml-converter-action) - 在 YAML／JSON／XML 檔案格式之間互相轉換。
- [NSFW 偵測](https://github.com/fabasoad/nsfw-detection-action) - 偵測已提交檔案中的 NSFW 內容。
- [Has Changed Path](https://github.com/MarceloPrado/has-changed-path) - 根據變更路徑有條件地執行 Actions。
- [Linguist](https://github.com/fabasoad/linguist-action) - 檢查儲存庫，並在輸出中提供所用語言的資訊。
- [Twilio 語音通話](https://github.com/fabasoad/twilio-voice-call-action/) - 使用指定文字撥打 Twilio 語音電話。
- [設定 Xcode](https://github.com/maxim-lobanov/setup-xcode) - 在 macOS 映像中切換已預先安裝的 Xcode 版本。
- [設定 Xamarin](https://github.com/maxim-lobanov/setup-xamarin) - 在 macOS 映像中切換已預先安裝的 Xamarin 與 Mono 版本。
- [Memer Action](https://github.com/Bhupesh-V/memer-action) - 用於程式設計師迷因的 GitHub Action xD。
- [設定 Cocoapods](https://github.com/maxim-lobanov/setup-cocoapods) - 設定特定版本的 Cocoapods。
- [公用 IP](https://github.com/haythem/public-ip) - 查詢 GitHub Actions Runner 的公用 IP 位址。
- [Lazarus／FPC 的 GitHub Actions](https://github.com/gcarreno/setup-lazarus)
- [Twilio 傳真](https://github.com/fabasoad/twilio-fax-action/) - 使用 Twilio 帳戶以傳真傳送文件。
- [設定 Kubernetes 工具](https://github.com/yokawasa/action-setup-kube-tools) - 在 Runner 上安裝 Kubernetes 工具（kubectl、kustomize、helm、kubeval、conftest 與 yq）。
- [設定 Elastic Cloud Control Tool](https://github.com/yokawasa/action-setup-ecctl) - 在 Runner 上安裝特定版本的 ecctl。
- [PowerShell 指令碼](https://github.com/Amadevus/pwsh-script) - 使用工作流程內容（例如 `$github.token`）與 Cmdlet 執行 PowerShell 指令碼，並將傳回值作為 Action 輸出。
- [使用 VirusTotal 上傳並掃描檔案](https://github.com/crazy-max/ghaction-virustotal)
- [匯入 GPG 金鑰](https://github.com/crazy-max/ghaction-import-gpg)
- [使用 UPX 壓縮](https://github.com/crazy-max/ghaction-upx) - 終極可執行檔封裝器（Ultimate Packer for eXecutables）。
- [將新版 Go 模組拉入 Proxy 快取](https://github.com/andrewslotin/go-proxy-pull-action) - 確保 Proxy 快取中有 Go 模組的最新版。發行時也會更新 pkg.go.dev 文件。
- [刪除執行成品](https://github.com/marketplace/actions/delete-run-artifacts) - 在工作流程執行結束時刪除所有成品。
- [GitHub 環境變數 Action](https://github.com/FranzDiebold/github-env-vars-action) - 公開分支／標籤名稱、儲存庫 slug 與 ref slug 等環境變數。
- [GitHub Action 鎖定](https://github.com/abatilo/github-action-locks/blob/master/README.md) - 確保 GitHub Action 工作流程以原子方式執行。
- [路徑篩選器](https://github.com/dorny/paths-filter) - 根據 PR、功能分支或推送提交所修改的檔案，有條件地執行 Actions。
- [Minisauras](https://github.com/TeamTigers/minisauras) -  從基礎分支拉取所有 JavaScript 與 CSS 檔案並將其縮小，再建立新分支與 pull request。
- [網站轉 GIF](https://github.com/PabloLec/website-to-gif) - 將任何網頁轉為 GIF，以顯示在 README、文件等處。
- [互動式輸入－執行階段工作流程輸入](https://github.com/boasiHQ/interactive-inputs) - 在 GitHub Actions 工作流程執行期間新增動態輸入值

#### 環境

- [建立 envfile](https://github.com/SpicyPizza/create-envfile)
- [匯出全域環境變數供後續建置步驟使用](https://github.com/zweitag/github-actions)
- [以程式方式設定環境變數，供後續步驟使用](https://github.com/allenevans/set-env)
- [為 Python 安裝 Conda 環境](https://github.com/goanpeca/setup-miniconda)
- [設定 NativeScript](https://github.com/hrueger/setup-nativescript)
- [建立 JSON 環境檔案](https://github.com/schdck/create-env-json)

#### 相依項目

- [安裝 NPM 相依項目並使用快取](https://github.com/bahmutov/npm-install)
- [標示新增的 NPM 相依項目](https://github.com/hiwelo/new-dependencies-action) - 在 pull request 中留言說明新加入的 NPM 相依項目。
- [快取 NPM 相依項目](https://github.com/c-hive/gha-npm-cache)
- [快取 Yarn 相依項目](https://github.com/c-hive/gha-yarn-cache)

#### 語意化版本

- [Next SemVers](https://github.com/WyriHaximus/github-action-next-semvers) - 根據指定的 semver 版本輸出下一個 major、minor 與 patch 版本。
- [根據搜尋字串取得最新 SemVer 與分支名稱](https://github.com/jessicalostinspace/github-action-get-regex-branch)
- [建立 Release 分支](https://github.com/jessicalostinspace/cut-release-action) - 根據分支前綴與可選的語意化版本建立發行分支。
- [遞增語意化版本](https://github.com/christian-draeger/increment-semantic-version) - 根據指定的發行類型遞增語意化版本（SemVer）。

### 靜態分析

- [PHPStan 靜態程式碼分析器 Action](https://github.com/OskarStark/phpstan-ga)
- [GraphQL Inspector Action](https://github.com/kamilkisiela/graphql-inspector)
- [使用 PSScriptAnalyzer 進行 PowerShell 靜態分析](https://github.com/devblackops/github-action-psscriptanalyzer)
- [執行 tfsec，並透過 reviewdog 在 PR 中顯示結果](https://github.com/reviewdog/action-tfsec)

#### 測試

- [透過 Puppeteer（Headless Chrome 的 Node API）執行測試](https://github.com/ianwalter/puppeteer)
- [xUnit Slack Reporter：將 xUnit 報告中的測試摘要傳送至 Slack 頻道](https://github.com/ivanklee86/xunit-slack-reporter)
- [執行 Codeception 測試](https://github.com/joelwmale/codeception-action)
- [執行 TestCafe 測試](https://github.com/DevExpress/testcafe-action)
- [執行 Unity 測試](https://github.com/webbertakken/unity-test-runner)
- [執行 Cypress E2E 測試](https://github.com/cypress-io/github-action)
- [使用 Molecule 測試 Ansible 角色](https://github.com/robertdebock/molecule-action)
- [使用 artillery.io 執行效能測試](https://github.com/kenju/github-actions-artillery)
- [使用 BuildPulse 偵測不穩定測試](https://github.com/Workshop64/buildpulse-action)
- [顯示 Jest 測試的行內程式碼註解](https://github.com/IgnusG/jest-report-action)
- [執行 Julia 測試](https://github.com/julia-actions/julia-runtest)

#### Lint

- [PHP Coding Standards Fixer Action](https://github.com/OskarStark/php-cs-fixer-ga)
- [對儲存庫中的 Dockerfile 執行 Hadolint](https://github.com/burdzwastaken/hadolint-action)
- [執行 ESLint，並透過 reviewdog 在 PR 中顯示結果](https://github.com/reviewdog/action-eslint)
- [適用於 \*.workflow 檔案的 JavaScript 型 linter](https://github.com/OmarTawfik/github-actions-js)
- [使用 tflint 檢查 Terraform 檔案，並透過 reviewdog 在 PR 中顯示結果](https://github.com/reviewdog/action-tflint)
- [autopep8：自動格式化 Python 程式碼，使其符合 PEP 8 樣式指南](https://github.com/peter-evans/autopep8)
- [執行 `ergebnis/composer-normalize`，確保 PHP 專案的 `composer.json` 格式正規化](https://github.com/ergebnis/composer-normalize-action)
- [執行 `stolt/lean-package-validator`，確保套件僅包含必要的 `runtime` 成品](https://github.com/raphaelstolt/lean-package-validator-action)
- [在 PR 事件中執行 Go lint 檢查](https://github.com/ArangoGutierrez/GoLinty-Action)
- [Node.js－自動執行套件中的 `format` 及／或 `lint` 指令碼](https://github.com/MarvinJWendt/run-node-formatter)
- [Stylelinter－執行 stylelint 的 GitHub Action](https://github.com/exelban/stylelint)
- [執行 stylelint，並透過 reviewdog 在 PR 中顯示結果](https://github.com/reviewdog/action-stylelint)
- [PyCodeStyle Action－在 PR 留下 pycodestyle（autopep8）回饋留言的 GitHub Action](https://github.com/ankitvgupta/pycodestyle-action)
- [wemake-python-styleguide－最嚴格且最具主張的 Python linter，可選擇透過 reviewdog 在 PR 中顯示結果](https://github.com/wemake-services/wemake-python-styleguide)
- [執行 TSLint，並提供狀態檢查與檔案差異註解](https://github.com/mooyoul/tslint-actions)
- [使用 commitlint 檢查 Pull Request 提交](https://github.com/wagoid/commitlint-github-action)
- [執行 vint，並透過 reviewdog 在 PR 中顯示結果](https://github.com/reviewdog/action-vint)
- [執行 mispell，並透過 reviewdog 在 PR 中顯示結果](https://github.com/reviewdog/action-misspell)
- [執行 golangci-lint，並透過 reviewdog 在 PR 中顯示結果](https://github.com/reviewdog/action-golangci-lint)
- [執行 shellcheck，並透過 reviewdog 在 PR 中顯示結果](https://github.com/reviewdog/action-shellcheck)
- [偵測 Markdown 文件中不尊重他人或欠缺體貼的措辭](https://github.com/theashraf/alex-action)
- [執行 dotenv-linter－輕鬆檢查 .env 檔案，可選擇透過 reviewdog 在 PR 中顯示結果](https://github.com/wemake-services/dotenv-linter)
- [執行 dotenv-linter，並透過 reviewdog 在 PR 中顯示結果](https://github.com/mgrachev/action-dotenv-linter)
- [顯示並自動修正多種程式語言的 lint 錯誤](https://github.com/samuelmeuli/lint-action)
- [附帶註解的 PHP_CodeSniffer](https://github.com/chekalsky/phpcs-action)
- [Markdown linter（含預設設定）](https://github.com/avto-dev/markdown-lint)
- [建立註解的 Stylelint 問題比對器](https://github.com/xt0rted/stylelint-problem-matcher)
- [在 PR 中執行 sqlcheck，以識別 SQL 查詢中的反模式](https://github.com/yokawasa/action-sqlcheck)
- [根據 Play Store 指引驗證 Fastlane Supply 中繼資料](https://github.com/ashutoshgngwr/validate-fastlane-supply-metadata)
- [執行 Golint 以檢查 Golang 程式碼](https://github.com/Jerome1337/golint-action)

#### 安全性

- [Docker 映像的弱點掃描器](https://github.com/phonito/phonito-scanner-action)
- [自動核准並合併 Dependabot 更新](https://github.com/ridedott/dependabot-auto-merge-action)
- [對 Python 程式碼執行 dlint 安全性 linter](https://github.com/xen0l/dlint-check)
- [AWS Secrets Manager Actions](https://github.com/say8425/aws-secrets-manager-actions) - 將 AWS Secrets Manager 密碼定義為環境值。
- [檢查 AWS IAM 政策文件的正確性與安全性問題](https://github.com/xen0l/iam-lint)
- [Secret Spreader](https://github.com/webfactory/secret-spreader) - 嚴格來說並非 Action，而是用來管理多個儲存庫 Actions Secrets 的工具。
- [Secrets Sync Action](https://github.com/google/secrets-sync-action) - 在多個儲存庫間同步密碼的 Action。
- [Snyk Test Action](https://github.com/snyk/actions)
- [使用簡單的 CLI 管理 GitHub Actions Secrets](https://github.com/unfor19/githubsecrets)
- [SecretHub](https://github.com/secrethub/actions) - 為密碼維護單一可信來源，並視需求載入 GitHub Actions。

#### 程式碼涵蓋率

- [使用 SonarCloud 掃描程式碼](https://github.com/sonarsource/sonarcloud-github-action)
- [將程式碼涵蓋率資料傳送至 codecov.io](https://github.com/codecov/codecov-action)
- [將程式碼涵蓋率發佈至 CodeClimate](https://github.com/paambaati/codeclimate-action)
- [更新儲存庫的 Go Report Card](https://github.com/creekorful/goreportcard-action)

### 動態分析

- [執行 Gofmt 檢查 Golang 程式碼格式](https://github.com/Jerome1337/gofmt-action)
- [執行 Goimports 檢查 Golang 匯入順序](https://github.com/Jerome1337/goimports-action)

### 監控

- [使用 Google Chrome 的 Lighthouse 測試稽核網頁](https://github.com/jakejarvis/lighthouse-action)
- [執行 Lighthouse，並將結果張貼至 PR 與 Slack](https://github.com/foo-software/lighthouse-check-action)
- [使用 GitHub Actions 在 CI 中執行 Lighthouse](https://github.com/treosh/lighthouse-ci-action)
- [Go 的持續基準測試與基準測試視覺化](https://github.com/bobheadxi/gobenchdata)
- [Size Limit Action](https://github.com/andresz1/size-limit-action) - 在 PR 中留言比較 JavaScript 的成本，超過限制時拒絕 PR。
- [檢查 bundlephobia](https://github.com/carlesnunez/check-my-bundlephobia) - 根據 bundlephobia.io 網站留言說明新增與修改套件的大小，超過門檻時拒絕 PR。

### Pull Request

- [根據指派對象設定 PR 審查者](https://github.com/pullreminders/assignee-to-reviewer-action)
- [分支推送時開啟或更新 PR（可選擇分支）](https://github.com/vsoch/pull-request-action)
- [自動 Rebase PR](https://github.com/cirrus-actions/rebase)
- [PR 獲得指定數量的核准後加上標籤](https://github.com/pullreminders/label-when-approved-action)
- [根據符合的檔案模式為 PR 加上標籤](https://github.com/banyan/auto-label)
- [自動核准 PR](https://github.com/hmarr/auto-approve-action)
- [根據設定檔自動為 PR 新增審查者](https://github.com/kentaro-m/auto-assign-action)
- [根據分支名稱模式為 PR 加上標籤](https://github.com/TimonVS/pr-labeler-action)
- [根據差異的總大小為 PR 加上標籤](https://github.com/pascalgn/size-label-action)
- [自動合併已就緒的 PR](https://github.com/pascalgn/automerge-action)
- [驗證 PR 是否包含 Ticket 參照](https://github.com/vijaykramesh/pr-lint-action)
- [為 Actions 工作區中儲存庫的變更建立 PR](https://github.com/peter-evans/create-pull-request)
- [檢查 PR](https://github.com/seferov/pr-lint-action)
- [PR 的 ChatOps](https://github.com/machine-learning-apps/actions-chatops)
- [根據從分支名稱擷取的文字，為 PR 標題與內容加上前綴](https://github.com/tzkhan/pr-update-action)
- [阻擋 Autosquash 提交](https://github.com/xt0rted/block-autosquash-commits-action)
- [合併時自動遞增版本並加上標籤](https://github.com/anothrNick/github-tag-action)
- [自動更新檢查過期的 PR，並 Squash 合併符合所有分支保護規則的 PR](https://github.com/tibdex/autosquash)
- [Merge Pal－自動更新並合併 PR](https://github.com/maxkomarychev/merge-pal-action)
- [強制執行 Pull Request 標題命名慣例](https://github.com/deepakputhraya/action-pr-title)
- [Pull Request 卡住通知器](https://github.com/jrylan/github-action-stuck-pr-notifier)
- [使用 commitlint 檢查 Pull Request 名稱（Squash 合併時特別好用！）](https://github.com/JulienKode/pull-request-name-linter-action)
- [目標分支的檢查失敗時阻擋合併 PR](https://github.com/cirrus-actions/branch-guard)
- [取得由 Pull Request 更新的靜態網站產生畫面截圖](https://github.com/ssowonny/diff-pages-action)
- [根據 Pull Request 是否仍在進行中新增標籤](https://github.com/AlbertHernandez/working-label-action)
- [Ticket 檢查 Action](https://github.com/neofinancial/ticket-check-action) - 自動在所有 Pull Request 標題開頭加上 Ticket 或 Issue 編號。
- [使用 Regex 檢查 Pull Request](https://github.com/MorrisonCole/pr-lint-action)
- [Pull Request 地雷](https://github.com/tylermurry/github-pr-landmine)
- [根據 Checkstyle XML 報告為 GitHub Pull Request 加上註解](https://github.com/staabm/annotate-pull-request-from-checkstyle)
- [Pull Request 統計](https://github.com/flowwer-dev/pull-request-stats) - 列印審查者的相關統計資料。
- [Pull Request 描述強制器](https://github.com/derkinderfietsen/pr-description-enforcer) - 強制要求 Pull Request 填寫描述。

### GitHub Pages

- [將 Zola 網站部署至 GitHub Pages](https://github.com/shalzz/zola-deploy-action)
- [建置 Hugo 靜態內容網站並發佈至 gh-pages 分支](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages)
- [建置 Jekyll 網站（含自訂 Jekyll 外掛與建置指令碼），並部署回 Gh-Pages 分支](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages)
- [Google Dataset Search 中繼資料](https://www.github.com/openschemas/extractors/) - 以及其他 schema.org 擷取器，讓資料集可透過 GitHub Pages 被探索。
- [使用靜態網站產生器部署至 GitHub Pages 的 GitHub Actions](https://github.com/peaceiris/actions-gh-pages)
- [Hexo 的 GitHub Action](https://github.com/heowc/action-hexo)
- [將 Google Analytics 統計資料部署至 GitHub Pages](https://github.com/cristianpb/analytics-google)
- [由 GitHub Actions、Pages 與 Jekyll 驅動的 Jupyter Notebook 部落格平台](https://github.com/fastai/fastpages)
- [將靜態網站部署至 GitHub Pages](https://github.com/appleboy/gh-pages-action) - 部署至自訂目錄並忽略資料夾／檔案。
- [使用進階設定部署至 GitHub Pages](https://github.com/crazy-max/ghaction-github-pages)

### 通知與訊息

- [傳送 Discord 通知](https://github.com/Ilshidur/action-discord)
- [以機器人身分發佈 Slack 訊息](https://github.com/pullreminders/slack-action)
- [使用 Nexmo 從 GitHub Actions 傳送 SMS](https://github.com/nexmo-community/nexmo-sms-action)
- [使用 Clockworksms 從 GitHub Actions 傳送 SMS](https://github.com/bharathvaj1995/clockwork-sms-action)
- [傳送 Telegram 訊息](https://github.com/appleboy/telegram-action)
- [傳送檔案或文字訊息至 Discord（可自訂顏色、使用者名稱或頭像）](https://github.com/appleboy/discord-action)
- [使用 pull request 協作撰寫推文](https://github.com/gr2m/twitter-together)
- [透過 Techulus 的 Push 傳送推播通知](https://github.com/techulus/push-github-action)
- [使用 SendGrid 傳送電子郵件](https://github.com/peter-evans/sendgrid-action)
- [透過 Join 傳送推播通知](https://github.com/ShaunLWM/action-join)
- [npm 新套件版本檢查器](https://github.com/MeilCli/npm-update-check-action)
- [NuGet 新套件版本檢查器](https://github.com/MeilCli/nuget-update-check-action)
- [Gradle 新套件版本檢查器](https://github.com/MeilCli/gradle-update-check-action)
- [透過 Pushbullet 傳送推播通知](https://github.com/ShaunLWM/action-pushbullet)
- [使用 Microsoft Graph 建立 Outlook 行事曆事件](https://github.com/anoopt/ms-graph-create-event)
- [監看 GitHub Wiki 頁面變更並張貼至 Slack](https://github.com/benmatselby/gollum-page-watcher-action)
- [使用 MessageBird 傳送 SMS](https://github.com/nikitasavinov/messagebird-sms-action)
- [回覆 Stale 機器人](https://github.com/c-hive/fresh-bot)
- [傳送嵌入式訊息至 Discord](https://github.com/sarisia/actions-status-discord)
- [讓 PR 與 Teamwork 工作保持同步](https://github.com/Teamwork/github-sync)
- [傳送 Microsoft Teams 通知](https://github.com/opsless/ms-teams-github-actions)

### 部署

- [部署至 Netlify](https://github.com/netlify/actions)
- [使用 Actions 部署 Probot App](https://probot.github.io/docs/deployment/#github-actions)
- [將播放清單部署至 Spotify](https://github.com/swinton/SpotHub)
- [使用 vsce 部署 VS Code 擴充功能](https://github.com/lannonbr/vsce-action)
- [更新網站後清除 Cloudflare 快取](https://github.com/jakejarvis/cloudflare-purge-action)
- [使用 DNS Control 部署 DNS 設定](https://github.com/koenrh/dnscontrol-action)
- [將佈景主題部署至 Shopify](https://github.com/pgrimaud/action-shopify)
- [觸發多個 GitLab CI Pipeline](https://github.com/appleboy/gitlab-ci-action)
- [觸發多個 Jenkins 工作](https://github.com/appleboy/jenkins-action)
- [Homebrew Tap 的 GitHub Action](https://github.com/izumin5210/action-homebrew-tap)
- [透過 SSH 複製檔案與成品](https://github.com/appleboy/scp-action)
- [執行遠端 SSH 命令](https://github.com/appleboy/ssh-action)
- [將 Python 發行套件發佈至 PyPI](https://github.com/pypa/gh-action-pypi-publish)
- [將靜態網站部署至 Azure Storage](https://github.com/feeloor/azure-static-website-deploy)
- [跨平台 Chocolatey CLI，用於建置與發佈套件](https://github.com/crazy-max/ghaction-chocolatey)
- [將 iOS Pod 程式庫部署至 Cocoapods](https://github.com/michaelhenry/deploy-to-cocoapods-github-action)
- [TencentCloud Serverless 的 GitHub Action](https://github.com/Juliiii/action-scf)
- [發佈 npm（預）發行版本](https://github.com/epeli/npm-release/)
- [將靜態網站部署至 Surge.sh](https://github.com/yavisht/deploy-via-surge.sh-github-action-template)
- [Go 專案版本發佈自動化工具 GoReleaser 的 GitHub Action](https://github.com/goreleaser/goreleaser-action)
- [FTP 部署 Action，使用 GitHub Actions 將 GitHub 專案部署至 FTP 伺服器](https://github.com/SamKirkland/FTP-Deploy-Action)
- [將文章發佈至 Dev.to](https://github.com/tylerauerbeck/publish-to-dev.to-action)
- [Semantic Release Action](https://github.com/cycjimmy/semantic-release-action)
- [將 Collection 部署至 Ansible Galaxy](https://github.com/artis3n/ansible_galaxy_collection)
- [將模組發佈至 Puppet Forge](https://github.com/barnumbirr/action-forge-publish)
- [建置並發佈 Electron 應用程式](https://github.com/samuelmeuli/action-electron-builder)
- [發佈 Maven 套件](https://github.com/samuelmeuli/action-maven-publish)
- [建置並部署 Ghost CMS 佈景主題](https://github.com/TryGhost/action-deploy-theme)
- [將 Ansible 角色部署至 Ansible Galaxy](https://github.com/robertdebock/galaxy-action)
- [將一個或多個 JS 模組發佈至登錄檔](https://github.com/author/action-publish)
- [使用 Slack 透過 2FA 發佈套件](https://github.com/erezrokah/2fa-with-slack-action)
- [在持續部署管線中序列化工作流程執行](https://github.com/softprops/turnstyle)
- [每次提交皆執行 Netlify 部署的 GitHub Action](https://github.com/nwtgck/actions-netlify)
- [執行 Ansible Playbook](https://github.com/arillso/action.playbook)
- [將 Python 發行套件發佈至 Anaconda Cloud](https://github.com/fcakyon/conda-publish-action)
- [將 VS Code 擴充功能部署至 Visual Studio Marketplace 或 Open VSX Registry](https://github.com/HaaLeo/publish-vscode-extension)
- [將 YouTube 影片部署至 Anchor.fm Podcast](https://github.com/Schrodinger-Hat/youtube-to-anchorfm)
- [使用 AWS CodeDeploy 部署](https://github.com/webfactory/create-aws-codedeploy-deployment)

#### Docker

- [根據 README.md 更新 Docker Hub 儲存庫描述](https://github.com/peter-evans/dockerhub-description)
- [將 Docker 映像發佈至 GitHub Package Registry (GPR)](https://github.com/machine-learning-apps/gpr-docker-publish)
- [更新 Docker Hub 上儲存庫的「完整描述」](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata)
- [使用 Kaniko 建置並發佈 Docker 映像至任何登錄檔](https://github.com/outillage/kaniko-action)
- [監控並限制 Docker 映像大小](https://github.com/wemake-services/docker-image-size-limit)
- [將 Docker 映像發佈至 Amazon Elastic Container Registry (ECR)](https://github.com/appleboy/docker-ecr-action)
- [建置並推送 Docker 映像，快取各個階段以縮短建置時間](https://github.com/whoan/docker-build-with-cache-action)
- [設定 Docker Buildx](https://github.com/crazy-max/ghaction-docker-buildx)
- [將分支或標籤名稱轉換為相容於 Docker 的映像標籤](https://github.com/ankitvgupta/ref-to-tag-action/)
- [根據 README.md 更新容器儲存庫描述](https://github.com/marketplace/actions/update-container-description-action) - 支援的登錄檔：Docker Hub、Quay、Harbor。

#### Kubernetes

- [使用 Pulumi 部署至任何雲端或 Kubernetes](https://github.com/pulumi/actions)
- [使用 kubectl 部署至 Kubernetes](https://github.com/steebchen/kubectl)
- [從 Google Kubernetes Engine (GKE) 取得 Kubeconfig 檔案](https://github.com/machine-learning-apps/gke-kubeconfig)
- [Kustomize Kubernetes 設定 YAML](https://github.com/karancode/kustomize-github-action)
- [使用 Krucible 建立 Kubernetes 測試叢集](https://github.com/Krucible/krucible-github-action)

#### AWS

- [將目錄同步／上傳至 AWS S3 儲存貯體](https://github.com/jakejarvis/s3-sync-action)
- [將 Lambda 程式碼部署至現有函式](https://github.com/appleboy/lambda-action)

#### Terraform

- [產生 Terraform 文件](https://github.com/Dirrk/terraform-docs) - 使用 terraform-docs 為 Terraform 模組產生文件。
- [使用 Terraform 驗證並套用 GitHub 管理設定的範例](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows)

### 外部服務

- [使用 Jenkinsfile](https://github.com/jonico/jenkinsfile-runner-github-actions)
- [Firebase 的 GitHub Action](https://github.com/w9jds/firebase-action)
- [Contentful Migration CLI 的 GitHub Action](https://github.com/Shy/contentful-action)
- [Pixela (a-know/pi) 的 GitHub Actions](https://github.com/peaceiris/actions-pixela)
- [Google Cloud Platform (GCP) 的 GitHub Action](https://github.com/exelban/gcloud)
- [上傳檔案至任何 OpenStack Swift 服務供應商](https://github.com/iksaku/openstack-swift-action)
- [將 Stack Overflow 貼文傳送至 Slack 的 GitHub Action](https://github.com/logankilpatrick/StackOverflowBot)
- [假設 AWS 角色](https://github.com/nordcloud/aws-assume-role/)
- [使用 JSONbin 產生自訂回應](https://github.com/fabasoad/jsonbin-action)

### 前端工具

- [執行 Gradle 工作](https://github.com/MrRamych/gradle-actions)
- [JS 建置 Actions](https://github.com/elstudio/actions-js-build) - 執行 Grunt 或 Gulp 建置工作並提交檔案變更。
- [Gatsby CLI 的 GitHub Action](https://github.com/jzweifel/gatsby-cli-github-action)
- [執行 WebPageTest 稽核，並將結果以提交留言列印](https://github.com/JCofman/webPagetestAction)
- [Hugo extended 的 GitHub Actions](https://github.com/peaceiris/actions-hugo)
- [產生 OG 圖片](https://github.com/BoyWithSilverWings/generate-og-image) - 從 Markdown 檔案產生可自訂的 Open Graph 圖片。
- [mdBook 的 GitHub Actions](https://github.com/peaceiris/actions-mdbook)
- [設定 Mint](https://github.com/fabasoad/setup-mint-action) - 設定 Mint（用於撰寫單頁應用程式的程式語言）。
- [Gatsby AWS S3 部署](https://github.com/jonelantha/gatsby-s3-action) - 將 Gatsby 部署至 S3（支援 CloudFront）。

### 機器學習維運

- [提交 Argo Workflows（不限雲端平台）](https://github.com/machine-learning-apps/actions-argo)
- [將 Argo Workflows 提交至 GKE](https://github.com/machine-learning-apps/gke-argo)
- [從 Weights & Biases 查詢實驗追蹤結果](https://github.com/machine-learning-apps/wandb-action)
- [執行參數化 Jupyter Notebook](https://github.com/yaananth/run-notebook)
- [編譯、部署並執行 Kubeflow Pipeline](https://github.com/NikeNano/kubeflow-github-action)
- [自動將資料科學儲存庫 Docker 化為 Jupyter 伺服器](https://github.com/jupyterhub/repo2docker-action)
- [使用 GitHub Actions 搭配 Azure Machine Learning](https://github.com/machine-learning-apps/ml-template-azure)

### 建置

- [run-cmake](https://github.com/lukka/run-cmake) - 使用 [CMake](https://cmake.org) 與 [Ninja](https://ninja-build.org/) 建置 C/C++ 軟體的多平台 Action。
- [run-vcpkg](https://github.com/lukka/run-vcpkg) - 使用 [vcpkg](https://github.com/microsoft/vcpkg) 建置並安裝 C/C++ 相依項目的多平台 Action。
- [建置跨平台 Go 應用程式](https://github.com/izumin5210/action-go-crossbuild)
- [為 Maven 建置產生 ~/.m2/settings.xml](https://github.com/whelk-io/maven-settings-xml-action)
- [執行 Pascal 指令碼](https://github.com/fabasoad/pascal-action)
- [設定 Brainfuck](https://github.com/fabasoad/setup-brainfuck-action) - 設定 Brainfuck 解譯器。
- [將 Go 二進位檔發佈至 GitHub Release 資產](https://github.com/wangyoucao577/go-release-action)
- [設定 COBOL](https://github.com/fabasoad/setup-cobol-action)
- [檢查 Gradle 版本](https://github.com/madhead/check-gradle-version) - 讓 Gradle 維持在最新版本。

### 資料庫

- [設定 Cassandra 結構描述](https://github.com/fabasoad/setup-cassandra-action) - 在 Cassandra 叢集上執行指定資料夾中的指令碼。

### 網路

- [設定 ZeroTier](https://github.com/zerotier/github-action) - 將 Runner 連線至 ZeroTier 網路。

### 在地化

- [找出並自動修正程式碼中的拼字與文法問題](https://github.com/sobolevn/misspell-fixer-action)
- [翻譯](https://github.com/fabasoad/translation-action) - 將文字從任何語言翻譯成任何語言。

### 趣味工具

- [在 README 中新增類似「讚」按鈕的功能](https://github.com/ariary/Readme-Like-Button) - 將社群對 README 部分內容的認可視覺化（可作為投票使用）。

### 速查表

- [GitHub Actions 品牌速查表](https://haya14busa.github.io/github-action-brandings/)

## 教學

- [使用 Up 持續部署 Next.js 應用程式](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400)
- [將以 Docker 為基礎的 Actions 轉換為 JavaScript／TypeScript](https://httgp.com/converting-github-actions-from-docker-to-javascript/)
- [Swift／iOS 專案的 GitHub Actions CI](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a)
- [使用 GitHub Actions](https://jeffrafter.com/working-with-github-actions)
- [Rails 開發者的 GitHub Actions](https://www.youtube.com/watch?v=gGUXydw22zw)
- [GitHub Actions Advent Calendar](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html)
- [使用 GitHub Actions 零停機部署 Laravel](https://atymic.dev/blog/github-actions-laravel-ci-cd/)
- [建立自訂 GitHub Actions 的 Pluralsight 課程](https://www.pluralsight.com/courses/building-custom-github-actions/)
- [使用 Docker 與 GitHub Actions 持續部署 Django 至 DigitalOcean](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/)
- [使用 Docker 部署自我託管的 GitHub Actions Runner](https://testdriven.io/blog/github-actions-docker/) - 使用 Docker 與 Docker Swarm 將自我託管的 GitHub Actions Runner 部署至 DigitalOcean。
- [在 AWS Spot 執行個體上設定自動調整規模的自我託管 GitHub Actions Runner](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners)
- [快速了解 GitHub Actions](https://gist.github.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6)

> 若您有更多資源要分享，歡迎提交 PR。更多資訊請參閱 [contributing.md](contributing.md)。
