# Awesome Chrome DevTools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Chrome DevTools 생태계의 훌륭한 도구와 리소스

Chrome DevTools와 Chrome DevTools Protocol(CDP)을 중심으로 구축된 도구, 프로토콜 드라이버, 트레이스 뷰어, 독립형 프론트엔드입니다. [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md)에 따라 이 목록은 해당 분야의 모든 것을 색인하기보다 정말 유용한 것에 집중합니다.

## 목차

- [학습](#learning)
- [트레이싱 및 프로파일링](#tracing--profiling)
- [Chrome DevTools Protocol](#chrome-devtools-protocol)
- [다른 플랫폼에서 DevTools 프론트엔드 사용하기](#using-devtools-frontend-with-other-platforms)
- [DevTools 확장 프로그램](#devtools-extensions)
- [졸업(구) 프로젝트](#alumni)

---

## 학습
- [Dev Tips](https://umaar.com/dev-tips/) - 애니메이션 gif로 된 팁 모음.
- [DevTools Tips](https://devtoolstips.org/) - 미니 튜토리얼 형식의 일러스트 팁 모음.
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - 개발자가 아닌 사람을 위한 브라우저 개발자 도구.
- [Dear Console](https://codepo8.github.io/dearconsole) - 브라우저 콘솔에서 사용할 스니펫 모음.
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - Chrome의 내부 `chrome://` 페이지와 진단 도구에 대한 가이드.
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - DevTools, 프레임워크 확장, IDE를 아우르는 프론트엔드 디버깅 실용 가이드.

---

## 트레이싱 및 프로파일링

DevTools Performance 트레이스와 V8 `.cpuprofile` 로그는 본질적으로 그냥 JSON이며, 몇몇 독립형 뷰어가 이를 가지고 멋진 일을 합니다:

- [trace.cafe](https://trace.cafe/) - DevTools Performance 패널에서 웹 성능 트레이스를 직접 공유하고 확인([소스](https://github.com/paulirish/trace.cafe)).
- [speedscope](https://github.com/jlfwong/speedscope) - Chrome의 `.cpuprofile`과 타임라인 트레이스를 가져오는 빠르고 대화형 플레임그래프 뷰어.
- [cpupro](https://github.com/discoveryjs/cpupro) - 플레임그래프, 호출 트리, 핫스팟 진단을 갖춘 심층적인 V8/Chrome `.cpuprofile` 분석기.
- [Perfetto](https://github.com/google/perfetto) - 시스템 프로파일링 및 트레이스 분석 제품군([ui.perfetto.dev](https://ui.perfetto.dev/)). Chromium 트레이스 지원과 SQL 트레이스 쿼리를 제공.

---

## Chrome DevTools Protocol

전문가 팁: Chrome 내장 [Protocol Monitor](https://developer.chrome.com/docs/devtools/protocol-monitor)(`More tools > Protocol monitor`)를 켜면 브라우저에서 실시간 CDP 트래픽을 보고 원시 명령을 바로 날릴 수 있습니다.

- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **프로토콜 JSON의 정식 위치**. TypeScript 타입과 프로토콜 버그를 위한 이슈 트래커를 포함.
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - 프로토콜의 도메인, 메서드, 이벤트를 탐색할 수 있는 브라우저형 UI.

### 프로토콜로 개발하기
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - 흔한 원시 CDP 작업을 위한 요령 모음.
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - CDP 클라이언트 트래픽을 검사하고 디버깅하기 위한 프록시.

### 두 대형 자동화 라이브러리
- [Puppeteer](https://github.com/puppeteer/puppeteer) - CDP와 WebDriver BiDi를 통해 Chrome을 제어하는 고수준 Node.js API. [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer)도 참고.
- [Playwright](https://github.com/microsoft/playwright) - Chromium, Firefox, WebKit을 위한 크로스 브라우저 자동화. Node.js, Python, .NET, Java 지원. [awesome-playwright](https://github.com/mxschmitt/awesome-playwright)도 참고.

### 프로토콜(또는 그 위 계층)을 구동하는 라이브러리

- JavaScript/Node.js: [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - 저수준 CDP 클라이언트
- Rust: [chromiumoxide](https://github.com/mattsse/chromiumoxide) - 생성된 타입을 갖춘 비동기/tokio 라이브러리
- Rust: [Rust Headless Chrome](https://github.com/rust-headless-chrome/rust-headless-chrome) - 고수준 헤드리스 Chrome 클라이언트
- Java: [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client) - 저수준 프로토콜 클라이언트
- Java: [jvppeteer](https://github.com/fanyong920/jvppeteer) - Java용 헤드리스 Chrome
- Python: [Zendriver](https://github.com/cdpdriver/zendriver) - 비동기 CDP 브라우저 자동화
- Python: [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - 입출력 없는 래퍼([Trio driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol)도 참고)
- Python: [ChromeController](https://github.com/fake-name/ChromeController) - 고수준 브라우저 관리
- Go: [chromedp](https://github.com/chromedp/chromedp) - 고수준 동작 및 작업
- Go: [Rod](https://github.com/go-rod/rod) - 고수준 자동화 및 스크래핑
- Go: [cdp](https://github.com/mafredri/cdp) - CDP를 위한 타입 안전 바인딩
- C#/.NET: [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Puppeteer 이식판
- C#/.NET: [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - 런타임 라이브러리 및 스키마 코드 생성
- Ruby: [Ferrum](https://github.com/rubycdp/ferrum) - Chrome을 제어하는 고수준 API
- Ruby: [Cuprite](https://github.com/rubycdp/cuprite) - Capybara 드라이버
- Kotlin: [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - 코루틴 기반 클라이언트 라이브러리
- Kotlin: [kdriver](https://github.com/cdpdriver/kdriver) - 코루틴 기반 고수준 자동화
- Clojure: [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - 자동 생성된 CDP 래퍼
- Clojure: [cuic](https://github.com/milankinen/cuic) - 고수준 UI 테스트 자동화
- PHP: [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - 클라이언트 라이브러리

### 에이전트형 브라우저 자동화

> 이 섹션은 *매우* 까다롭습니다. 지금은 누구나 브라우저를 에이전트용으로 감싸고 있습니다 — 실제 영향력이 있고 내부에서 CDP로 새로운 것을 하지 않는 한, 다른 MCP 서버나 에이전트 CLI를 추가하는 PR은 닫힐 것입니다.

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Chrome DevTools 공식 MCP 서버. 그 안에 [CLI](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/skills/chrome-devtools-cli/SKILL.md)도 포함.
- [Webcmd](https://github.com/agentrhq/webcmd) - 사이트 탐색을 AI 에이전트용 사이트별 결정적 CLI 명령으로 컴파일.
- [Lumen](https://github.com/omxyz/lumen) - 시각 우선 브라우저 에이전트. CDP 위에서 자가 치유되는 결정적 재생 제공.
- [bdg](https://github.com/szymdzum/browser-debugger-cli) - DOM, 네트워크, 콘솔, 원시 프로토콜 메서드를 셸 명령으로 노출하는 영속 백그라운드 CDP 세션.

### 브라우저 어댑터
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - 클라이언트 측 JS로 구현된 CDP 에이전트를 통해 웹 페이지를 원격 디버깅.
- [Inspect](https://inspect.dev/) - iOS 및 Android 브라우저와 WebView에 대해 DevTools 사용. **(클로즈드 소스)**

## 다른 플랫폼에서 DevTools 프론트엔드 사용하기

DevTools UI는 WebSocket을 통해 CDP를 말하는 웹 앱이므로, Node, Ruby, 모바일 WebView, 사용자 정의 런타임에 임베드하거나 그쪽을 가리키게 할 수 있습니다(내장 대상은 `chrome://inspect` 참고).

- [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend) - Chrome DevTools UI의 정식 소스 저장소(npm에 [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend)로 게시).
- [Chii](https://github.com/liriliri/chii) 및 [Eruda](https://github.com/liriliri/eruda) - 실제 `devtools-frontend` UI(`Chii`, 현대적 Weinre 대체품)와 페이지 내 모바일 DevTools 콘솔(`Eruda`)을 사용하는 원격 디버깅 서버.
- [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) - VS Code를 뒷받침하는 공식 DAP 호환 JavaScript 및 Chrome CDP 디버거.
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - VS Code 내에 내장된 Elements 및 Network 패널.
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - `node --inspect`로 Node.js를 디버깅하고 프로파일링하는 가이드.
- [ruby/debug](https://github.com/ruby/debug) - Ruby 공식 디버거. CDP를 통해 Chrome DevTools 연결 지원(`rdbg --open=chrome`).

---

## DevTools 확장 프로그램

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - React 컴포넌트 계층, props, 프로파일러 플레임그래프 검사.
- [Vue.js Developer Tools](https://github.com/vuejs/devtools) - Vue.js 컴포넌트, 상태, 라우팅 검사.
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - Angular용 컴포넌트 트리 검사 및 변경 감지 프로파일링.
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - Redux용 타임 트래블 디버깅 및 액션 기록.
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - Ember.js 객체, 라우트, 데이터 검사.
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - 페이지의 커스텀 요소와 섀도우 DOM을 검사, 수정, 관찰.
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - DevTools에서의 PHP 애플리케이션 프로파일링 및 요청 검사.
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Ruby on Rails 요청 및 SQL 프로파일링 패널.

## 졸업(구) 프로젝트
오래된 프로젝트, 아마 더 이상 유지보수되지 않음… 하지만 여전히 멋짐.

- [ndb](https://github.com/GoogleChromeLabs/ndb) - DevTools 프론트엔드 위에 구축된 향상된 Node.js 디버깅 경험.
- [thetool](https://github.com/sfninja/thetool) - Node.js용 CPU, 메모리, 커버리지, 타입 프로파일링.
- [Facebook Stetho](https://github.com/facebook/stetho) - Chrome DevTools를 사용한 네이티브 Android 디버깅.
- [PonyDebugger](https://github.com/square/PonyDebugger) - Chrome DevTools를 통한 iOS 앱의 원격 네트워크 및 Core Data 디버깅.
- [betwixt](https://github.com/kdzwinel/betwixt) - 독립형 DevTools Network 패널로 검사되는 시스템 수준 네트워크 프록시.
- [Dirac](https://github.com/binaryage/dirac) - 커스텀 DevTools 포크를 사용한 ClojureScript 디버깅.
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - VS Code용 최초의 Chrome 디버거(풍부한 CDP/DAP 구현을 갖춘 내장 [vscode-js-debug](https://github.com/microsoft/vscode-js-debug)으로 대체됨).
- [noice-json-rpc](https://github.com/nojvek/noice-json-rpc) - CDP 도메인을 직접 API로 노출하는 프록시 기반 TypeScript/JS 라이브러리.
- [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - Node Puppeteer에 대한 PHP 브리지.
- [Insight](https://github.com/3Dparallax/insight/) - Chrome DevTools용 WebGL 디버깅 툴킷.
- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - 디버깅 클라이언트를 한 번에 여러 브라우저에 연결.
  - 다중 사용자 DevTools: [DevTools Remote](https://github.com/auchenberg/devtools-remote) - 다른 사람의 브라우저를 원격 디버깅.
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - 임의의 웹 환경을 디버깅하기 위한 Chrome DevTools 백엔드 독립 구현.
- Python CDP 드라이버: [pychrome](https://github.com/fate0/pychrome) - 저수준 CDP 전송 핸들러.
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - Mobile Safari 및 UIWebView 인스턴스를 CDP로 노출.
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - `ios-webkit-debug-proxy`를 기반으로 하며 WebKit의 Remote Debugging Protocol을 CDP로 변환.
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - IE 11을 CDP로 변환하는 프로토콜 어댑터.
