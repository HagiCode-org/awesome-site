<div align="center">
	<div>
		<img width="500" src="media/logo.svg" alt="Awesome Node.js">
		<br>
	</div>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<p>
		<p>
			<sup>
				<a href="https://github.com/sponsors/sindresorhus">제 오픈 소스 활동은 커뮤니티의 후원을 받고 있습니다</a>
			</sup>
		</p>
		<sup>특별히 감사드립니다:</sup>
		<br>
		<br>
		<br>
		<a href="https://depot.dev?utm_source=github&utm_medium=sindresorhus">
			<div>
				<picture>
					<source width="180" media="(prefers-color-scheme: dark)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-dark.svg">
					<source width="180" media="(prefers-color-scheme: light)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-light.svg">
					<img width="180" src="https://sindresorhus.com/assets/thanks/depot-logo-light.svg" alt="Depot 로고">
				</picture>
			</div>
			<b>빠른 원격 컨테이너 빌드와 GitHub Actions 실행기.</b>
		</a>
		<br>
		<br>
		<br>
	</p>
	<hr>
	<br>
	<br>
	<br>
	<br>
	<br>
	<a href="https://awesome.re">
		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	</a>
	<p>
		<sub><a href="https://node.cool"><code>node.cool</code></a>을 입력하면 이 페이지로 이동합니다. <a href="https://twitter.com/sindresorhus">Twitter</a>에서 저를 팔로우하세요.</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a>는 서버와 명령줄 도구를 작성하기 위한 오픈 소스 크로스 플랫폼 JavaScript 런타임입니다.
	</p>
	<br>
</div>

## 목차

- [공식](#official)
- [패키지](#packages)
	- [기상천외한 프로젝트](#mad-science)
	- [명령줄 앱](#command-line-apps)
	- [함수형 프로그래밍](#functional-programming)
	- [HTTP](#http)
	- [디버깅 / 프로파일링](#debugging--profiling)
	- [로깅](#logging)
	- [명령줄 유틸리티](#command-line-utilities)
	- [빌드 도구](#build-tools)
	- [하드웨어](#hardware)
	- [템플릿](#templating)
	- [웹 프레임워크](#web-frameworks)
	- [문서](#documentation)
	- [파일 시스템](#filesystem)
	- [제어 흐름](#control-flow)
	- [스트림](#streams)
	- [실시간](#real-time)
	- [이미지](#image)
	- [텍스트](#text)
	- [숫자](#number)
	- [수학](#math)
	- [날짜](#date)
	- [URL](#url)
	- [데이터 검증](#data-validation)
	- [파싱](#parsing)
	- [사람이 읽기 쉬운 형식](#humanize)
	- [압축](#compression)
	- [네트워크](#network)
	- [데이터베이스](#database)
	- [테스트](#testing)
	- [보안](#security)
	- [벤치마킹](#benchmarking)
	- [압축기](#minifiers)
	- [인증](#authentication)
	- [권한 부여](#authorization)
	- [이메일](#email)
	- [작업 큐](#job-queues)
	- [Node.js 관리](#nodejs-management)
	- [크로스 플랫폼 통합](#cross-platform-integration)
	- [자연어 처리](#natural-language-processing)
	- [프로세스 관리](#process-management)
	- [자동화](#automation)
	- [AST](#ast)
	- [정적 사이트 생성기](#static-site-generators)
	- [콘텐츠 관리 시스템](#content-management-systems)
	- [포럼](#forum)
	- [블로깅](#blogging)
	- [별난 프로젝트](#weird)
	- [직렬화](#serialization)
	- [기타](#miscellaneous)
- [패키지 관리자](#package-manager)
- [자료](#resources)
	- [튜토리얼](#tutorials)
	- [탐색](#discovery)
	- [아티클](#articles)
	- [뉴스레터](#newsletters)
	- [동영상](#videos)
	- [도서](#books)
	- [블로그](#blogs)
	- [강좌](#courses)
	- [치트시트](#cheatsheets)
	- [도구](#tools)
	- [커뮤니티](#community)
	- [기타](#miscellaneous-1)
- [관련 목록](#related-lists)

## 공식

- [웹사이트](https://nodejs.org)
- [문서](https://nodejs.org/dist/latest/docs/api/)
- [저장소](https://github.com/nodejs/node)

## 패키지

### 기상천외한 프로젝트

- [webtorrent](https://github.com/webtorrent/webtorrent) - Node.js와 브라우저에서 사용할 수 있는 스트리밍 토렌트 클라이언트.
- [peerflix](https://github.com/mafintosh/peerflix) - 스트리밍 토렌트 클라이언트.
- [ipfs](https://github.com/ipfs/helia) - 모든 컴퓨팅 장치를 동일한 파일 시스템으로 연결하는 것을 목표로 하는 분산 파일 시스템.
- [stackgl](https://github.com/stackgl) - browserify와 npm을 기반으로 구축된 WebGL 오픈 소스 생태계.
- [peerwiki](https://github.com/mafintosh/peerwiki) - BitTorrent로 제공되는 위키백과 전체.
- [peercast](https://github.com/mafintosh/peercast) - 토렌트 동영상을 Chromecast로 스트리밍.
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - 깔끔하고 읽기 쉬우며 검증된 Bitcoin 라이브러리.
- [Bitcore](https://github.com/bitpay/bitcore) - 순수하고 강력한 Bitcoin 라이브러리.
- [PDFKit](https://github.com/foliojs/pdfkit) - PDF 생성 라이브러리.
- [turf](https://github.com/Turfjs/turf) - 모듈식 지리 공간 데이터 처리 및 분석 엔진.
- [webcat](https://github.com/mafintosh/webcat) - GitHub 비공개/공개 키를 인증에 사용하는 WebRTC 기반 웹 P2P 파이프.
- [NodeOS](https://github.com/NodeOS/NodeOS) - npm으로 구동되는 최초의 운영 체제.
- [YodaOS](https://github.com/yodaos-project/yodaos) - AI 운영 체제.
- [Brain.js](https://github.com/BrainJS/brain.js) - 머신러닝 프레임워크.
- [Pipcook](https://github.com/alibaba/pipcook) - 머신러닝 파이프라인을 만드는 프런트엔드 알고리즘 프레임워크.
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - 그래프 이론(네트워크라고도 함) 모델링 및 분석.
- [js-git](https://github.com/creationix/js-git) - JavaScript로 구현한 Git.
- [xlsx](https://github.com/SheetJS/sheetjs) - 순수 JavaScript로 만든 Excel 스프레드시트 읽기 및 쓰기 라이브러리.
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - 순수 JavaScript로 구현한 Git.

### 명령줄 앱

- [np](https://github.com/sindresorhus/np) - 더 나은 `npm publish` 대안.
- [npm-name](https://github.com/sindresorhus/npm-name) - npm에서 패키지 이름을 사용할 수 있는지 확인.
- [gh-home](https://github.com/sindresorhus/gh-home) - 현재 디렉터리의 저장소 GitHub 페이지를 엽니다.
- [npm-home](https://github.com/sindresorhus/npm-home) - 패키지의 npm 페이지를 엽니다.
- [trash](https://github.com/sindresorhus/trash) - `rm`보다 안전한 대안.
- [speed-test](https://github.com/sindresorhus/speed-test) - 인터넷 연결 속도와 핑을 측정.
- [pageres](https://github.com/sindresorhus/pageres) - 웹사이트 스크린샷을 캡처.
- [cpy](https://github.com/sindresorhus/cpy) - 파일을 복사.
- [vtop](https://github.com/MrRio/vtop) - 차트를 보기 좋게 표시하는 더욱 뛰어난 `top`.
- [empty-trash](https://github.com/sindresorhus/empty-trash) - 휴지통을 비웁니다.
- [is-up](https://github.com/sindresorhus/is-up) - 웹사이트가 작동 중인지 중단되었는지 확인.
- [is-online](https://github.com/sindresorhus/is-online) - 인터넷 연결이 활성 상태인지 확인.
- [public-ip](https://github.com/sindresorhus/public-ip) - 공인 IP 주소를 가져옵니다.
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - 터미널에서 복사 및 붙여넣기.
- [XO](https://github.com/xojs/xo) - JavaScript happiness 스타일을 사용해 엄격한 코드 스타일을 적용.
- [ESLint](https://github.com/eslint/eslint) - JavaScript용 플러그인 가능한 린팅 유틸리티.
- [David](https://github.com/alanshaw/david) - 패키지의 npm 종속성이 오래되었는지 알려줍니다.
- [http-server](https://github.com/http-party/http-server) - 설정이 필요 없는 간단한 명령줄 HTTP 서버.
- [Live Server](https://github.com/tapio/live-server) - 라이브 리로드 기능을 지원하는 개발용 HTTP 서버.
- [bcat](https://github.com/kessler/node-bcat) - 명령의 출력을 웹 브라우저로 파이프합니다.
- [normit](https://github.com/pawurb/normit) - 터미널에서 음성 합성을 지원하는 Google 번역.
- [fkill](https://github.com/sindresorhus/fkill-cli) - 프로세스를 간편하게 종료합니다. 크로스 플랫폼을 지원합니다.
- [pjs](https://github.com/danielstjules/pjs) - 파이프로 연결해 쓰는 JavaScript. 터미널에서 빠르게 필터링, 매핑, 축약할 수 있습니다.
- [license-checker](https://github.com/davglass/license-checker) - 앱 종속 항목의 라이선스를 확인.
- [browser-run](https://github.com/juliangruber/browser-run) - 브라우저 환경에서 코드를 간편하게 실행.
- [tmpin](https://github.com/sindresorhus/tmpin) - 파일 입력을 받는 모든 CLI 앱에 표준 입력 지원을 추가.
- [wallpaper](https://github.com/sindresorhus/wallpaper) - 데스크톱 배경화면을 변경.
- [pen](https://github.com/hatashiro/pen) - 즐겨 사용하는 편집기의 Markdown을 브라우저에서 실시간 미리 보기.
- [dark-mode](https://github.com/sindresorhus/dark-mode) - macOS 다크 모드를 전환.
- [Jsome](https://github.com/Javascipt/Jsome) - JSON을 설정 가능한 색상과 들여쓰기로 보기 좋게 출력.
- [mobicon](https://github.com/samverschueren/mobicon-cli) - 모바일 앱 아이콘 생성기.
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - 모바일 앱 스플래시 화면 생성기.
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - 보기 좋은 Git diff를 HTML로 변환하는 생성기.
- [trymodule](https://github.com/victorb/trymodule) - 터미널에서 npm 패키지를 시험 사용.
- [jscpd](https://github.com/kucherenko/jscpd) - 소스 코드의 복사/붙여넣기 탐지기.
- [atmo](https://github.com/Raathigesh/Atmo) - 서버 측 API 모킹.
- [auto-install](https://github.com/siddharthkp/auto-install) - 코드를 작성하는 동안 종속 항목을 자동으로 설치.
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - 작업 속도를 저하시키는 종속 항목을 찾아냅니다.
- [localtunnel](https://github.com/localtunnel/localtunnel) - 로컬호스트를 인터넷에 공개.
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - SVG를 통해 터미널 세션을 공유.
- [gtop](https://github.com/aksakalli/gtop) - 터미널용 시스템 모니터링 대시보드.
- [themer](https://github.com/themerdev/themer) - 편집기, 터미널, 배경화면, Slack 등의 테마를 생성.
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - 터미널에서 바로 코드의 멋진 이미지를 생성.
- [cash-cli](https://github.com/xxczaki/cash-cli) - 170개 통화 간 환전.
- [taskbook](https://github.com/klaussinani/taskbook) - 명령줄 환경을 위한 작업, 보드 및 메모.
- [discharge](https://github.com/brandonweiss/discharge) - 정적 웹사이트를 Amazon S3에 간편하게 배포.
- [npkill](https://github.com/voidcosmos/npkill) - 오래되고 용량이 큰 node_modules 폴더를 쉽게 찾아 삭제.

### 함수형 프로그래밍

- [lodash](https://github.com/lodash/lodash) - 일관성, 사용자 지정, 성능 등 다양한 기능을 제공하는 유틸리티 라이브러리. Underscore.js보다 더 우수하고 빠릅니다.
- [immutable](https://github.com/immutable-js/immutable-js) - 불변 데이터 컬렉션.
- [Ramda](https://github.com/ramda/ramda) - 자동 커링과 역순 인수 전달로 유연한 함수 조합에 중점을 둔 유틸리티 라이브러리. 데이터를 변경하지 않습니다.
- [Mout](https://github.com/mout/mout) - 기존 유틸리티 라이브러리와 가장 큰 차이는 필요한 모듈/함수만 선택해 불필요한 오버헤드 없이 불러올 수 있다는 점입니다.
- [RxJS](https://github.com/reactivex/rxjs) - 다양한 종류의 데이터를 변환, 조합, 질의하는 함수형 반응형 라이브러리.
- [Kefir.js](https://github.com/kefirjs/kefir) - 고성능과 낮은 메모리 사용량에 중점을 둔 반응형 라이브러리.

### HTTP

- [got](https://github.com/sindresorhus/got) - 내장 `http` 모듈을 더 편리하게 사용할 수 있는 인터페이스.
- [undici](https://github.com/nodejs/undici) - 종속성이 전혀 없이 처음부터 작성한 고성능 HTTP 클라이언트.
- [ky-universal](https://github.com/sindresorhus/ky-universal) - Fetch 기반 범용 HTTP 클라이언트.
- [node-fetch](https://github.com/node-fetch/node-fetch) - Node.js용 `window.fetch`.
- [axios](https://github.com/axios/axios) - 브라우저에서도 작동하는 Promise 기반 HTTP 클라이언트.
- [superagent](https://github.com/visionmedia/superagent) - HTTP 요청 라이브러리.
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - 설정 가능한 경로를 통해 JSON 파일이나 JavaScript 객체의 내용을 제공하는 가짜 백엔드를 구축.
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - RFC를 준수하는 캐시 지원으로 네이티브 HTTP 요청을 감쌉니다.
- [gotql](https://github.com/khaosdoctor/gotql) - [got](https://github.com/sindresorhus/got)을 기반으로 만든 GraphQL 요청 라이브러리.
- [global-agent](https://github.com/gajus/global-agent) - 환경 변수로 설정할 수 있는 전역 HTTP/HTTPS 프록시 에이전트.
- [smoke](https://github.com/sinedied/smoke) - 요청 기록 기능을 갖춘 파일 기반 HTTP 모의 서버.
- [purest](https://github.com/simov/purest) - REST 클라이언트.

### 디버깅 / 프로파일링

- [debug](https://github.com/debug-js/debug) - 작고 간편한 디버깅 유틸리티.
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.js가 실행 중인데 이유를 모르시나요?
- [njsTrace](https://github.com/valyouw/njstrace) - 코드를 계측하고 추적해 모든 함수 호출, 인수, 반환값과 각 함수의 실행 시간을 확인.
- [vstream](https://github.com/joyent/node-vstream) - 스트림 파이프라인을 검사할 수 있는 계측 가능한 스트림 믹스인.
- [stackman](https://github.com/watson/stackman) - 코드 발췌 및 기타 유용한 정보를 추가해 오류 스택 추적을 개선.
- [locus](https://github.com/alidavut/locus) - 실행 중 모든 변수에 접근할 수 있는 REPL을 시작.
- [0x](https://github.com/davidmarkclements/0x) - 플레임 그래프 프로파일링.
- [ctrace](https://github.com/automation-stack/ctrace) - 시스템 호출과 시그널을 보기 좋게 개선해 출력하는 추적 시스템.
- [leakage](https://github.com/andywer/leakage) - 메모리 누수 테스트 작성.
- [llnode](https://github.com/nodejs/llnode) - 충돌한 Node.js 프로세스의 객체를 검사하고 정보를 얻을 수 있는 사후 분석 도구.
- [thetool](https://github.com/sfninja/thetool) - Chrome DevTools에서 보기 좋은 형식으로 앱의 CPU, 메모리 및 기타 프로파일을 캡처.
- [swagger-stats](https://github.com/slanatech/swagger-stats) - API 호출을 추적하고 API 성능, 상태 및 사용 지표를 모니터링.
- [NiM](https://github.com/june07/nim) - DevTools 디버깅 작업 흐름을 관리.
- [dats](https://github.com/immobiliare/dats) - 최소한의 기능으로 구성되고 종속성이 없는 [StatsD](https://github.com/statsd/statsd) 클라이언트.

### 로깅

- [pino](https://github.com/pinojs/pino) - Bunyan에서 영감을 얻은 초고속 로거.
- [winston](https://github.com/winstonjs/winston) - 여러 전송 방식을 지원하는 비동기 로깅 라이브러리.
- [console-log-level](https://github.com/watson/console-log-level) - 로그 수준과 사용자 지정 접두사를 지원하는 가장 단순한 로거.
- [storyboard](https://github.com/guigrpa/storyboard) - 종단 간 계층형 실시간 컬러 로그 및 스토리.
- [consola](https://github.com/unjs/consola) - 콘솔 로거.

### 명령줄 유틸리티

- [chalk](https://github.com/chalk/chalk) - 터미널 문자열 스타일을 제대로 지정.
- [meow](https://github.com/sindresorhus/meow) - CLI 앱용 도우미.
- [yargs](https://github.com/yargs/yargs) - 세련된 사용자 인터페이스를 자동 생성하는 명령줄 파서.
- [ora](https://github.com/sindresorhus/ora) - 세련된 터미널 스피너.
- [get-stdin](https://github.com/sindresorhus/get-stdin) - 표준 입력을 더 간편하게 처리.
- [log-update](https://github.com/sindresorhus/log-update) - 터미널에서 이전 출력을 덮어써서 로그를 표시합니다. 진행률 표시줄, 애니메이션 등을 렌더링할 때 유용합니다.
- [Ink](https://github.com/vadimdemedes/ink) - 대화형 명령줄 앱을 위한 React.
- [listr2](https://github.com/listr2/listr2) - 터미널 작업 목록.
- [conf](https://github.com/sindresorhus/conf) - 앱 또는 모듈을 위한 간단한 구성 처리.
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - 터미널을 제어하는 ANSI 이스케이프 코드.
- [log-symbols](https://github.com/sindresorhus/log-symbols) - 다양한 로그 수준을 위한 색상 기호.
- [figures](https://github.com/sindresorhus/figures) - Windows CMD 대체 문자를 지원하는 유니코드 기호.
- [boxen](https://github.com/sindresorhus/boxen) - 터미널에 상자를 생성.
- [terminal-link](https://github.com/sindresorhus/terminal-link) - 터미널에 클릭 가능한 링크를 생성.
- [terminal-image](https://github.com/sindresorhus/terminal-image) - 터미널에 이미지를 표시.
- [string-width](https://github.com/sindresorhus/string-width) - 문자열을 표시하는 데 필요한 열 수를 기준으로 시각적 너비를 계산.
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - 터미널에서 문자열을 지정된 너비로 자릅니다.
- [blessed](https://github.com/chjj/blessed) - Curses와 유사한 라이브러리.
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - 대화형 명령줄 프롬프트.
- [yn](https://github.com/sindresorhus/yn) - 예/아니요와 같은 값을 파싱.
- [cli-table3](https://github.com/cli-table/cli-table3) - 보기 좋은 유니코드 표.
- [drawille](https://github.com/madbence/node-drawille) - 유니코드 점자 문자로 터미널에 그림을 그립니다.
- [ascii-charts](https://github.com/jstrace/chart) - 터미널용 ASCII 막대 차트.
- [progress](https://github.com/visionmedia/node-progress) - 유연한 ASCII 진행률 표시줄.
- [insight](https://github.com/yeoman/insight) - 사용량 지표를 Google Analytics에 익명으로 보고해 도구의 사용 방식을 파악하도록 지원.
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - CLI 커서를 표시하거나 숨깁니다.
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - 열 단위로 정렬된 유니코드 및 ANSI 안전 텍스트 목록.
- [cfonts](https://github.com/dominikwilkowski/cfonts) - 콘솔용 멋진 ASCII 글꼴.
- [multispinner](https://github.com/codekirei/node-multispinner) - 여러 CLI 스피너를 동시에 개별 제어.
- [omelette](https://github.com/f/omelette) - 셸 자동 완성 도우미.
- [cross-env](https://github.com/kentcdodds/cross-env) - 크로스 플랫폼 환경 변수를 설정.
- [shelljs](https://github.com/shelljs/shelljs) - 이식 가능한 Unix 셸 명령.
- [sudo-block](https://github.com/sindresorhus/sudo-block) - 사용자가 루트 권한으로 앱을 실행하지 못하도록 차단.
- [sparkly](https://github.com/sindresorhus/sparkly) - 스파크라인 `▁▂▃▅▂▇`을 생성.
- [Bit](https://github.com/teambit/bit) - 저장소 전반에서 작은 모듈과 컴포넌트를 만들고, 관리하고, 찾아 사용.
- [gradient-string](https://github.com/bokub/gradient-string) - 터미널 출력에 아름다운 색상 그라데이션을 적용.
- [oclif](https://github.com/oclif/oclif) - 파서, 자동 문서화, 테스트 및 플러그인을 모두 갖춘 CLI 프레임워크.
- [terminal-size](https://github.com/sindresorhus/terminal-size) - 터미널 창 크기를 안정적으로 가져옵니다.
- [Cliffy](https://github.com/drew-y/cliffy) - 대화형 CLI용 프레임워크.
- [zx](https://github.com/google/zx) - JavaScript로 셸 스크립트를 작성.

### 빌드 도구

- [parcel](https://github.com/parcel-bundler/parcel) - 설정 없이 사용할 수 있는 초고속 웹 앱 번들러.
- [webpack](https://github.com/webpack/webpack) - 브라우저용 모듈과 에셋을 묶습니다.
- [rollup](https://github.com/rollup/rollup) - 차세대 ES2015 모듈 번들러.
- [gulp](https://github.com/gulpjs/gulp) - 설정보다 코드를 중시하는 빠른 스트리밍 빌드 시스템.
- [Broccoli](https://github.com/broccolijs/broccoli) - 상시 빠른 재빌드와 간결한 빌드 정의를 지원하는 빠르고 안정적인 에셋 파이프라인.
- [Brunch](https://github.com/brunch/brunch) - 간단한 선언형 구성, 빠른 증분 컴파일, 의견이 반영된 작업 흐름을 제공하는 프런트엔드 웹 앱 빌드 도구.
- [FuseBox](https://github.com/fuse-box/fuse-box) - webpack, JSPM, SystemJS의 장점을 결합하고 TypeScript를 기본 지원하는 빠른 빌드 시스템.
- [pkg](https://github.com/vercel/pkg) - Node.js 프로젝트를 실행 파일로 패키징.
- [Vite](https://github.com/vitejs/vite) - 핫 모듈 교체와 정적 에셋 번들링을 지원하는 프런트엔드 빌드 도구.

### 하드웨어

- [johnny-five](https://github.com/rwaldron/johnny-five) - Firmata 기반 Arduino 프레임워크.
- [serialport](https://github.com/serialport/node-serialport) - 직렬 포트에서 데이터를 읽고 쓸 수 있습니다.
- [usb](https://github.com/node-usb/node-usb) - USB 라이브러리.
- [i2c-bus](https://github.com/fivdi/i2c-bus) - I2C 직렬 버스에 접근.
- [onoff](https://github.com/fivdi/onoff) - GPIO 접근 및 인터럽트 감지.
- [spi-device](https://github.com/fivdi/spi-device) - SPI 직렬 버스에 접근.
- [pigpio](https://github.com/fivdi/pigpio) - Raspberry Pi에서 고속 GPIO, PWM, 서보 제어, 상태 변경 알림 및 인터럽트 처리를 지원.
- [gps](https://github.com/infusion/GPS.js) - GPS 수신기를 처리하는 NMEA 파서.
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - 순수 JavaScript로 구현한 MODBUS-RTU(직렬 및 TCP).

### 템플릿

- [marko](https://github.com/marko-js/marko) - 템플릿을 CommonJS 모듈로 컴파일하며 스트리밍, 비동기 렌더링 및 사용자 지정 태그를 지원하는 HTML 기반 템플릿 엔진.
- [nunjucks](https://github.com/mozilla/nunjucks) - 상속과 비동기 제어 등을 지원하는 템플릿 엔진(Jinja2에서 영감을 받음).
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - 헬퍼와 고급 블록 등의 강력한 기능을 추가한 Mustache 템플릿 상위 집합.
- [EJS](https://github.com/mde/ejs) - 간단하고 특정 방식에 얽매이지 않는 템플릿 언어.
- [Pug](https://github.com/pugjs/pug) - Haml의 영향을 크게 받은 고성능 템플릿 엔진.

### 웹 프레임워크

- [Fastify](https://github.com/fastify/fastify) - 빠르고 오버헤드가 적은 웹 프레임워크.
- [Next.js](https://github.com/vercel/next.js) - 서버 렌더링 범용 JavaScript 웹 앱을 위한 미니멀한 프레임워크.
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - 서버 렌더링 Vue.js 앱을 위한 미니멀한 프레임워크.
- [Hapi](https://github.com/hapijs/hapi) - 애플리케이션과 서비스를 만들기 위한 프레임워크.
- [Micro](https://github.com/vercel/micro) - 비동기 방식을 사용하는 미니멀한 마이크로서비스 프레임워크.
- [Koa](https://github.com/koajs/koa) - Express 팀이 설계한 프레임워크로, 더 작고 표현력이 풍부하며 견고한 웹 애플리케이션 및 API 기반을 지향합니다.
- [Express](https://github.com/expressjs/express) - 단일 페이지, 다중 페이지 및 하이브리드 웹 애플리케이션을 만드는 데 필요한 다양한 기능을 제공하는 웹 애플리케이션 프레임워크.
- [Feathers](https://github.com/feathersjs/feathers) - Express의 정신을 이어받아 구축한 마이크로서비스 프레임워크.
- [LoopBack](https://github.com/loopbackio/loopback-next) - REST API를 만들고 백엔드 데이터 소스에 쉽게 연결할 수 있는 강력한 프레임워크.
- [Meteor](https://github.com/meteor/meteor) - 데이터베이스를 어디서나 사용할 수 있고 데이터를 전송하며 순수 JavaScript로 작성된 매우 간단한 웹 프레임워크. ([awesome-meteor](https://github.com/Urigo/awesome-meteor)도 참고하세요.)
- [Restify](https://github.com/restify/node-restify) - 올바른 REST 웹 서비스를 구축할 수 있도록 지원.
- [ThinkJS](https://github.com/thinkjs/thinkjs) - ES2015+, WebSocket 및 REST API를 지원하는 프레임워크.
- [ActionHero](https://github.com/actionhero/actionhero) - TCP 소켓, WebSocket 및 HTTP 클라이언트용 재사용 가능하고 확장 가능한 API를 만드는 프레임워크.
- [seneca](https://github.com/senecajs/seneca) - 마이크로서비스 작성을 위한 도구 모음.
- [AdonisJs](https://github.com/adonisjs/core) - 의존성 주입과 IoC 컨테이너를 기반으로 탄탄하게 구축한 진정한 Node.js MVC 프레임워크.
- [Moleculer](https://github.com/moleculerjs/moleculer) - 빠르고 강력한 마이크로서비스 프레임워크.
- [Nest](https://github.com/nestjs/nest) - 효율적이고 확장 가능한 서버 측 앱을 만드는 Angular 기반 프레임워크.
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - 클래스와 데코레이터를 사용해 TypeScript로 GraphQL API를 만드는 최신 프레임워크.
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - 현대적이고 빠른 Express 유사 웹 프레임워크.
- [Marble.js](https://github.com/marblejs/marble) - TypeScript와 RxJS를 기반으로 구축된 서버 측 앱용 함수형 반응형 프레임워크.
- [Lad](https://github.com/ladjs/lad) - 웹, API, 작업 및 프록시 서버를 하나로 묶은, Express 기술 위원회와 Koa의 전 구성원이 만든 프레임워크.
- [Ts.ED](https://github.com/tsedio/tsed) - Express.js 또는 Koa.js 기반으로 서버 측 앱을 만드는 직관적인 TypeScript 프레임워크.
- [Hono](https://github.com/honojs/hono) - 작고 빠른 웹 프레임워크.

### 문서

- [documentation.js](https://github.com/documentationjs/documentation) - ES2015+ 및 Flow 주석을 지원하는 API 문서 생성기.
- [Docco](https://github.com/jashkenas/docco) - 코드와 주석을 함께 보여주는 HTML 문서를 생성하는 문서 생성기.
- [JSDoc](https://github.com/jsdoc/jsdoc) - JavaDoc 또는 PHPDoc과 유사한 API 문서 생성기.
- [Docusaurus](https://github.com/facebook/docusaurus) - React와 Markdown을 활용하며 번역 및 버전 관리 기능을 제공하는 문서 웹사이트 생성기.

### 파일 시스템

- [del](https://github.com/sindresorhus/del) - glob 패턴을 사용해 파일/폴더를 삭제.
- [globby](https://github.com/sindresorhus/globby) - 여러 패턴을 지원하는 glob 파일 검색.
- [chokidar](https://github.com/paulmillr/chokidar) - `fs.watch`와 `fs.watchFile`의 이벤트를 안정화하고 macOS의 네이티브 `fsevents`도 활용하는 파일 시스템 감시기.
- [find-up](https://github.com/sindresorhus/find-up) - 상위 디렉터리를 따라가며 파일을 찾습니다.
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - 프로세스 간 및 컴퓨터 간 잠금 파일 유틸리티.
- [load-json-file](https://github.com/sindresorhus/load-json-file) - JSON 파일을 읽고 파싱.
- [write-json-file](https://github.com/sindresorhus/write-json-file) - JSON을 문자열로 변환해 파일에 원자적으로 기록.
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - `fs.createWriteStream()`과 비슷하지만 원자적으로 작동.
- [filenamify](https://github.com/sindresorhus/filenamify) - 문자열을 유효한 파일 이름으로 변환.
- [istextorbinary](https://github.com/bevry/istextorbinary) - 파일이 텍스트인지 바이너리인지 확인.
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - 일상적인 편의를 위해 파일 시스템 API를 완전히 새롭게 설계.
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - `fs` 모듈에 추가 메서드를 제공합니다.
- [package-directory](https://github.com/sindresorhus/package-directory) - npm 패키지의 루트 디렉터리를 찾습니다.
- [filehound](https://github.com/nspragg/filehound) - 파일 시스템 검색을 위한 유연하고 자연스러운 인터페이스.
- [move-file](https://github.com/sindresorhus/move-file) - 장치 간 이동도 가능한 파일 이동 도구.
- [tempy](https://github.com/sindresorhus/tempy) - 임시 파일 또는 디렉터리의 임의 경로를 가져옵니다.

### 제어 흐름

- 프로미스
	- [pify](https://github.com/sindresorhus/pify) - 콜백 스타일 함수를 Promise 기반으로 변환.
	- [delay](https://github.com/sindresorhus/delay) - 지정된 시간 동안 Promise 처리를 지연.
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - 만료 및 미리 가져오기를 지원하는 Promise 반환 함수 메모이제이션.
	- [valvelet](https://github.com/lpinca/valvelet) - Promise 반환 함수의 실행 속도를 제한.
	- [p-map](https://github.com/sindresorhus/p-map) - 여러 Promise를 동시에 처리하며 매핑.
	- [더 보기…](https://github.com/sindresorhus/promise-fun)
- 옵저버블
	- [RxJS](https://github.com/ReactiveX/RxJS) - 반응형 프로그래밍.
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - Observable을 Promise로 변환.
	- [더 보기…](https://github.com/sindresorhus/awesome-observables)
- 스트림
	- [Highland.js](https://github.com/caolan/highland) - 표준 JavaScript와 Node 유사 스트림만으로 동기 및 비동기 코드를 쉽게 관리.

### 스트림

- [get-stream](https://github.com/sindresorhus/get-stream) - 스트림을 문자열이나 버퍼로 가져옵니다.
- [from2](https://github.com/hughsk/from2) - `through2`에서 영감을 받은 ReadableStream용 편리한 래퍼.
- [into-stream](https://github.com/sindresorhus/into-stream) - 버퍼/문자열/배열/객체를 스트림으로 변환.
- [duplexify](https://github.com/mafintosh/duplexify) - 쓰기 스트림과 읽기 스트림을 단일 streams2 양방향 스트림으로 변환.
- [pumpify](https://github.com/mafintosh/pumpify) - 여러 스트림 배열을 하나의 양방향 스트림으로 결합.
- [peek-stream](https://github.com/mafintosh/peek-stream) - 파싱 방식을 결정하기 전에 첫 번째 줄을 미리 확인할 수 있는 변환 스트림.
- [binary-split](https://github.com/maxogden/binary-split) - 줄바꿈 또는 다른 구분자를 기준으로 나누는 스트림.
- [byline](https://github.com/jahewson/node-byline) - 매우 간단한 줄 단위 스트림 리더.
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - 스트림의 첫 번째 청크를 변환.
- [pad-stream](https://github.com/sindresorhus/pad-stream) - 스트림의 각 줄에 패딩을 추가.
- [multistream](https://github.com/feross/multistream) - 여러 스트림을 하나로 결합.
- [readable-stream](https://github.com/nodejs/readable-stream) - 코어 Streams2 및 Streams3 구현의 미러.
- [through2-concurrent](https://github.com/almost/through2-concurrent) - 객체 스트림을 동시에 변환.

### 실시간

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - 확장성이 매우 뛰어난 WebSocket 서버 및 클라이언트 라이브러리.
- [Socket.io](https://github.com/socketio/socket.io) - 실시간 양방향 이벤트 기반 통신을 지원.
- [Faye](https://github.com/faye/faye) - Bayeux 프로토콜 기반의 실시간 클라이언트-서버 메시지 버스.
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - 여러 CPU 코어에서 실행할 수 있는 확장 가능한 HTTP 및 WebSocket 엔진.
- [Primus](https://github.com/primus/primus) - 실시간 프레임워크에 종속되지 않도록 하는 추상화 계층.
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - 확장 가능한 실시간 마이크로서비스 프레임워크.
- [Kalm](https://github.com/kalm/kalm.js) - 저수준 소켓 라우터 및 미들웨어 프레임워크.
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - TCP/IP에서 사용하는 발행-구독 메시징 프로토콜 MQTT용 클라이언트.
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - WebSocket을 통한 JSON-RPC 2.0 구현.
- [Aedes](https://github.com/moscajs/aedes) - 모든 스트림 서버에서 실행 가능한 기본형 MQTT 서버.

### 이미지

- [sharp](https://github.com/lovell/sharp) - JPEG, PNG, WebP 및 TIFF 이미지 크기 조정을 위한 가장 빠른 모듈.
- [image-type](https://github.com/sindresorhus/image-type) - 이미지 형식을 감지.
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - 이미지 크기를 가져옵니다.
- [lwip](https://github.com/EyalAr/lwip) - ImageMagick이 필요 없는 경량 이미지 프로세서.
- [pica](https://github.com/nodeca/pica) - 순수 JavaScript로 구현한 고품질 고속(lanczos3) 크기 조정 도구. 픽셀화가 허용되지 않을 때 canvas의 drawImage()를 대체합니다.
- [jimp](https://github.com/oliver-moran/jimp) - 순수 JavaScript로 구현한 이미지 처리.
- [qrcode](https://github.com/soldair/node-qrcode) - QR 코드 및 바코드 생성기.
- [ImageScript](https://github.com/matmen/ImageScript) - 성능 향상을 위해 WebAssembly를 활용하는 JavaScript 이미지 처리 도구.

### 텍스트

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - 문자 인코딩을 변환.
- [string-length](https://github.com/sindresorhus/string-length) - 보조 평면 문자 수를 올바르게 계산하고 ANSI 이스케이프 코드를 무시해 문자열의 실제 길이를 가져옵니다.
- [camelcase](https://github.com/sindresorhus/camelcase) - 대시/점/밑줄/공백으로 구분된 문자열을 camelCase로 변환: foo-bar → fooBar.
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - 정규식의 특수 문자를 이스케이프.
- [splice-string](https://github.com/sindresorhus/splice-string) - `Array#splice`처럼 문자열의 일부를 제거하거나 바꿉니다.
- [indent-string](https://github.com/sindresorhus/indent-string) - 문자열의 각 줄을 들여씁니다.
- [strip-indent](https://github.com/sindresorhus/strip-indent) - 문자열의 모든 줄에서 앞쪽 공백을 제거.
- [detect-indent](https://github.com/sindresorhus/detect-indent) - 코드의 들여쓰기를 감지.
- [he](https://github.com/mathiasbynens/he) - HTML 엔티티 인코더/디코더.
- [i18n-node](https://github.com/mashpie/i18n-node) - 동적 JSON 저장소를 사용하는 간단한 번역 모듈.
- [babelfish](https://github.com/nodeca/babelfish) - 복수형 구문을 간편하게 작성할 수 있는 i18n.
- [matcher](https://github.com/sindresorhus/matcher) - 간단한 와일드카드 일치 검사.
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - 시각적으로 유사한 유니코드 문자를 정규화.
- [i18next](https://github.com/i18next/i18next) - 국제화 프레임워크.
- [nanoid](https://github.com/ai/nanoid) - 작고 안전하며 URL에 적합한 고유 문자열 ID 생성기.
- [StegCloak](https://github.com/kurolabs/stegcloak) - 문자열 안에 비밀 정보를 눈에 띄지 않게 숨깁니다.

### 숫자

- [random-int](https://github.com/sindresorhus/random-int) - 임의의 정수를 생성.
- [random-float](https://github.com/sindresorhus/random-float) - 임의의 부동소수점 수를 생성.
- [unique-random](https://github.com/sindresorhus/unique-random) - 연속해서 중복되지 않는 임의의 숫자를 생성.
- [round-to](https://github.com/sindresorhus/round-to) - 숫자를 지정된 소수 자릿수로 반올림: `1.234` → `1.2`.

### 수학

- [ndarray](https://github.com/scijs/ndarray) - 다차원 배열.
- [mathjs](https://github.com/josdejong/mathjs) - 다양한 기능을 갖춘 수학 라이브러리.
- [math-clamp](https://github.com/sindresorhus/math-clamp) - 숫자를 지정된 범위로 제한.
- [algebra](https://github.com/fibo/algebra) - 대수 구조.
- [multimath](https://github.com/nodeca/multimath) - WebAssembly와 JavaScript에서 빠른 이미지 연산을 구현하는 기반.

### 날짜

- [Luxon](https://github.com/moment/luxon) - 날짜와 시간을 다루는 라이브러리.
- [date-fns](https://github.com/date-fns/date-fns) - 최신 날짜 유틸리티.
- [Day.js](https://github.com/iamkun/dayjs) - Moment.js를 대체하는 불변 날짜 라이브러리.
- [dateformat](https://github.com/felixge/node-dateformat) - 날짜 형식 지정.
- [tz-format](https://github.com/samverschueren/tz-format) - 시간대를 포함해 날짜 형식을 지정: `2015-11-30T10:40:35+01:00`.
- [cctz](https://github.com/floatdrop/node-cctz) - 날짜의 빠른 파싱, 형식 지정 및 시간대 변환.

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - URL을 정규화.
- [humanize-url](https://github.com/sindresorhus/humanize-url) - URL을 읽기 쉬운 형태로 바꿉니다: https://sindresorhus.com → sindresorhus.com.
- [url-unshort](https://github.com/nodeca/url-unshort) - 단축 URL을 원래 주소로 확장.
- [speakingurl](https://github.com/pid/speakingurl) - 문자열의 음역 결과로 슬러그를 생성.
- [linkify-it](https://github.com/markdown-it/linkify-it) - 유니코드를 완벽히 지원하는 링크 패턴 감지기.
- [url-pattern](https://github.com/snd/url-pattern) - URL 및 기타 문자열의 패턴을 정규식 문자열 일치보다 쉽게 처리.
- [embedza](https://github.com/nodeca/embedza) - oEmbed, Open Graph 및 메타 태그 정보로 URL의 HTML 코드 조각/임베드를 생성.

### 데이터 검증

- [joi](https://github.com/sideway/joi) - JavaScript 객체를 위한 객체 스키마 설명 언어 및 검증기.
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - 코드 생성을 사용해 매우 빠르게 동작하는 JSON Schema 검증기.
- [property-validator](https://github.com/nettofarah/property-validator) - Express용 간단한 속성 검증.
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - JSON API 데이터 정제 및 검증.
- [ajv](https://github.com/ajv-validator/ajv) - 가장 빠른 JSON Schema 검증기. v5, v6, v7 제안을 지원합니다.
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - JavaScript(및 TypeScript)에서 데이터를 검증하는 간단하고 조합 가능한 방법.
- [yup](https://github.com/jquense/yup) - 객체 스키마 검증.
- [zod](https://github.com/colinhacks/zod) - 정적 타입 추론을 지원하는 TypeScript 우선 스키마 검증기.

### 파싱

- [remark](https://github.com/remarkjs/remark) - 플러그인 기반 Markdown 처리기.
- [markdown-it](https://github.com/markdown-it/markdown-it) - CommonMark를 100% 지원하며 확장 및 구문 플러그인을 제공하는 Markdown 파서.
- [parse5](https://github.com/inikulin/parse5) - 빠르고 모든 기능을 갖춘 사양 준수 HTML 파서.
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - Rust로 작성한 CSS 파서, 변환기 및 최소화 도구.
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - JSON에서 주석을 제거.
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - CSS에서 주석을 제거.
- [parse-json](https://github.com/sindresorhus/parse-json) - 더 유용한 오류를 제공하는 JSON 파서.
- [URI.js](https://github.com/medialize/URI.js) - URL 변경 도구.
- [JSONStream](https://github.com/dominictarr/JSONStream) - 스트리밍 방식의 JSON.parse 및 stringify.
- [neat-csv](https://github.com/sindresorhus/neat-csv) - 빠른 CSV 파서. 위 파서의 콜백 인터페이스.
- [csv-parser](https://github.com/mafintosh/csv-parser) - 다른 어떤 파서보다 빠른 것을 목표로 하는 스트리밍 CSV 파서.
- [PEG.js](https://github.com/pegjs/pegjs) - 빠르고 오류 보고가 뛰어난 파서를 생성하는 간단한 파서 생성기.
- [x-ray](https://github.com/matthewmueller/x-ray) - 웹 스크래핑 유틸리티.
- [nearley](https://github.com/kach/nearley) - JavaScript용 간단하고 빠르며 강력한 파서.
- [binary-extract](https://github.com/juliangruber/binary-extract) - 버퍼 전체를 파싱하지 않고 JSON 버퍼에서 값을 추출.
- [Stylecow](https://github.com/stylecow/stylecow) - 최신 CSS를 파싱, 조작 및 변환해 모든 브라우저와 호환되도록 합니다. 플러그인으로 확장할 수 있습니다.
- [js-yaml](https://github.com/nodeca/js-yaml) - 매우 빠른 YAML 파서.
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - XML을 JavaScript 객체로 변환.
- [Jison](https://github.com/zaach/jison) - Bison, Yacc 등의 계보를 잇는 사용하기 쉬운 JavaScript 파서 생성기.
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - 전화번호를 파싱, 형식 지정, 저장 및 검증.
- [ref](https://github.com/TooTallNate/ref) - 버퍼의 구조화된 바이너리 데이터를 읽고 씁니다.
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - Excel XLSX 파일을 읽고 씁니다.
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - 매우 빠르고 기능이 풍부한 JavaScript 파서 구축 도구 모음.
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - XML을 검증하고 파싱.

### 사람이 읽기 쉬운 형식

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - 바이트를 사람이 읽기 쉬운 문자열로 변환: `1337` → `1.34 kB`.
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - 밀리초를 사람이 읽기 쉬운 문자열로 변환: `1337000000` → `15d 11h 23m 20s`.
- [ms](https://github.com/vercel/ms) - 작은 밀리초 변환 유틸리티.
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - 군더더기가 적은 오류 표시.
- [read-art](https://github.com/Tjatse/node-readability) - 모든 페이지에서 읽기 쉬운 콘텐츠를 추출.

### 압축

- [yazl](https://github.com/thejoshwolfe/yazl) - ZIP 압축.
- [yauzl](https://github.com/thejoshwolfe/yauzl) - ZIP 압축 해제.
- [Archiver](https://github.com/archiverjs/node-archiver) - ZIP 및 TAR를 지원하는 아카이브 생성용 스트리밍 인터페이스.
- [pako](https://github.com/nodeca/pako) - 순수 JavaScript로 포팅한 고속 zlib(deflate, inflate, gzip).
- [tar-stream](https://github.com/mafintosh/tar-stream) - 스트리밍 TAR 파서 및 생성기. [tar-fs](https://github.com/mafintosh/tar-fs)도 참고하세요.

### 네트워크

- [get-port](https://github.com/sindresorhus/get-port) - 사용 가능한 포트를 가져옵니다.
- [ipify](https://github.com/sindresorhus/ipify) - 공인 IP 주소를 가져옵니다.
- [getmac](https://github.com/bevry/getmac) - 컴퓨터의 MAC 주소를 가져옵니다.
- [DHCP](https://github.com/infusion/node-dhcp) - DHCP 클라이언트 및 서버.
- [netcat](https://github.com/roccomuso/netcat) - 순수 JavaScript로 구현한 Netcat 포트.

### 데이터베이스

- 드라이버
	- [PostgreSQL](https://github.com/brianc/node-postgres) - 순수 JavaScript 및 네이티브 libpq 바인딩을 지원하는 PostgreSQL 클라이언트.
	- [Redis](https://github.com/luin/ioredis) - Redis 클라이언트.
	- [LevelUP](https://github.com/Level/levelup) - LevelDB 데이터베이스.
	- [MySQL](https://github.com/mysqljs/mysql) - MySQL 클라이언트.
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - CouchDB 클라이언트.
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Aerospike 클라이언트.
	- [Couchbase](https://github.com/couchbase/couchnode) - Couchbase 클라이언트.
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - MongoDB 드라이버.
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - PostgreSQL, SQLite, MySQL 등을 지원하는 다중 방언 ORM.
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - Backbone.js 스타일의 PostgreSQL, MySQL 및 SQLite3용 ORM.
	- [Mongoose](https://github.com/Automattic/mongoose) - 우아한 MongoDB 객체 모델링.
	- [Waterline](https://github.com/balderdashy/waterline) - 데이터 저장소에 구애받지 않으며 하나 이상의 데이터베이스와의 상호작용을 크게 간소화하는 도구.
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - PostgreSQL, MySQL, SQLite3 및 RESTful 데이터 저장소용 ORM. ActiveRecord와 유사합니다.
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - Promise를 사용해 네이티브 SQL을 처리하는 PostgreSQL 프레임워크.
	- [slonik](https://github.com/gajus/slonik) - 엄격한 타입, 상세한 로깅 및 어설션을 지원하는 PostgreSQL 클라이언트.
	- [Objection.js](https://github.com/Vincit/objection.js) - SQL 쿼리 빌더 Knex를 기반으로 구축한 경량 ORM.
	- [TypeORM](https://github.com/typeorm/typeorm) - PostgreSQL, MariaDB, MySQL, SQLite 등을 위한 ORM.
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - Data Mapper, Unit of Work 및 Identity Map 패턴 기반 TypeScript ORM. MongoDB, PostgreSQL, MySQL 및 SQLite를 지원합니다.
	- [Prisma](https://github.com/prisma/prisma) - 최신 데이터베이스 접근 도구(ORM 대안). 자동 생성되는 타입 안전 TypeScript 쿼리 빌더로 PostgreSQL, MySQL 및 SQLite를 지원합니다.
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - PostgreSQL 등 다양한 데이터베이스를 지원하는 TypeScript ORM.
- 쿼리 빌더
	- [Knex](https://github.com/knex/knex) - 유연하고 이식성이 뛰어나며 사용하기 즐거운 PostgreSQL, MySQL 및 SQLite3용 쿼리 빌더.
- 기타
	- [NeDB](https://github.com/louischatriot/nedb) - JavaScript로 작성된 내장형 영구 데이터베이스.
	- [Lowdb](https://github.com/typicode/lowdb) - Lodash 기반의 소형 JavaScript 데이터베이스.
	- [Keyv](https://github.com/jaredwray/keyv) - 여러 백엔드를 지원하는 간단한 키-값 저장소.
	- [Finale](https://github.com/tommybananas/finale) - Sequelize 모델용 RESTful 엔드포인트 생성기.
	- [database-js](https://github.com/mlaanderson/database-js) - JDBC와 유사한 연결 방식을 제공하는 여러 데이터베이스용 래퍼.
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - JavaScript 및 JSON 파일로 MongoDB 데이터베이스를 채웁니다.
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - SQL 인젝션 위험 없이 일반 SQL로 PostgreSQL, MySQL 및 SQLite3를 질의.
	- [pg-mem](https://github.com/oguimbal/pg-mem) - 테스트용 인메모리 PostgreSQL 인스턴스.

### 테스트

- [AVA](https://github.com/avajs/ava) - 미래 지향적인 테스트 러너.
- [Mocha](https://github.com/mochajs/mocha) - 비동기 테스트를 간단하고 즐겁게 만드는 기능이 풍부한 테스트 프레임워크.
- [nyc](https://github.com/istanbuljs/nyc) - 하위 프로세스에서도 작동하는 istanbul 기반 코드 커버리지 도구.
- [tap](https://github.com/tapjs/node-tap) - TAP 테스트 프레임워크.
- [tape](https://github.com/substack/tape) - TAP을 생성하는 테스트 하네스.
- [power-assert](https://github.com/power-assert-js/power-assert) - 표준 assert 인터페이스로 자세한 어설션 메시지를 제공합니다.
- [Mochify](https://github.com/mantoni/mochify.js) - Browserify, Mocha, PhantomJS 및 WebDriver를 사용하는 TDD.
- [trevor](https://github.com/vadimdemedes/trevor) - 버전을 직접 전환하거나 Travis CI에 푸시하지 않고 여러 Node.js 버전에서 테스트를 실행.
- [loadtest](https://github.com/alexfernandez/loadtest) - 자동화 API를 제공하는 웹 애플리케이션 부하 테스트 도구.
- [Sinon.JS](https://github.com/sinonjs/sinon) - 테스트 스파이, 스텁 및 모의 객체.
- [navit](https://github.com/nodeca/navit) - 브라우저 테스트 스크립트 작성을 간소화하는 PhantomJS / SlimerJS 래퍼.
- [Nock](https://github.com/nock/nock) - HTTP 모킹 및 기대값 설정.
- [intern](https://github.com/theintern/intern) - 코드 테스트 도구 모음.
- [toxy](https://github.com/h2non/toxy) - 실패 상황과 네트워크 상태를 시뮬레이션할 수 있는 사용자 지정 가능한 HTTP 프록시.
- [hook-std](https://github.com/sindresorhus/hook-std) - stdout/stderr를 후킹하고 수정.
- [testen](https://github.com/egoist/testen) - NVM을 사용해 로컬에서 여러 Node.js 버전의 테스트를 실행.
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Selenium WebDriver 기반 자동 UI 테스트 프레임워크.
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - WebDriver 프로토콜 기반 자동 테스트.
- [Jest](https://github.com/facebook/jest) - 간편한 JavaScript 테스트.
- [Vitest](https://github.com/vitest-dev/vitest) - Vite 기반 고속 단위 테스트 프레임워크.
- [TestCafe](https://github.com/DevExpress/testcafe) - 자동화된 브라우저 테스트.
- [abstruse](https://github.com/bleenco/abstruse) - 지속적 통합 서버.
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - 엔드투엔드 테스트.
- [Puppeteer](https://github.com/puppeteer/puppeteer) - 헤드리스 Chrome.
- [Playwright](https://github.com/microsoft/playwright) - 단일 API로 헤드리스 Chromium, WebKit 및 Firefox를 제어.
- [nve](https://github.com/ehmicky/nve) - 로컬에서 여러 Node.js 버전으로 명령을 실행.
- [axe-core](https://github.com/dequelabs/axe-core) - 자동화된 웹 UI 테스트를 위한 접근성 엔진.
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - Docker 컨테이너에서 실행 가능한 일반 데이터베이스, Selenium 웹 브라우저 등의 경량 일회용 인스턴스를 제공합니다.

### 보안

- [upash](https://github.com/simonepri/upash) - 모든 비밀번호 해싱 알고리즘을 위한 통합 API.
- [themis](https://github.com/cossacklabs/themis) - 저장 데이터, 인증된 데이터 교환, 전송 보호, 인증 등에 필요한 일반적인 암호화 방식을 쉽게 사용할 수 있게 하는 다국어 프레임워크.
- [GuardRails](https://github.com/apps/guardrails) - 풀 리퀘스트에 보안 피드백을 제공하는 GitHub 앱.
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - 무차별 대입 및 DDoS 공격 방지.
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - 비동기 논블로킹 해싱.
- [jose-simple](https://github.com/davesag/jose-simple) - JOSE(JSON Object Signing and Encryption) 표준을 사용한 데이터 암호화 및 복호화.

### 벤치마킹

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - 고해상도 타이머를 지원하고 통계적으로 유의미한 결과를 제공하는 벤치마킹 라이브러리.

### 압축기

- [babel-minify](https://github.com/babel/minify) - Babel 도구 체인을 기반으로 한 ES2015+ 지원 최소화 도구.
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - JavaScript 최소화 도구.
- [clean-css](https://github.com/clean-css/clean-css) - CSS 최소화 도구.
- [minimize](https://github.com/Swaagie/minimize) - HTML 최소화 도구.
- [imagemin](https://github.com/imagemin/imagemin) - 이미지 최소화 도구.

### 인증

- [Passport](https://github.com/jaredhanson/passport) - 간단하고 눈에 거슬리지 않는 인증.
- [Grant](https://github.com/simov/grant) - Express, Koa, Hapi, Fastify, AWS Lambda, Azure, Google Cloud, Vercel 등 다양한 플랫폼용 OAuth 공급자.

### 권한 부여

- [CASL](https://github.com/stalniy/casl) - UI와 API를 위한 동형 인증 및 권한 부여.
- [node-casbin](https://github.com/casbin/node-casbin) - ACL, RBAC, ABAC와 같은 접근 제어 모델을 지원하는 권한 부여 라이브러리.

### 이메일

- [Nodemailer](https://github.com/nodemailer/nodemailer) - 이메일을 가장 빠르게 처리하는 방법.
- [emailjs](https://github.com/eleith/emailjs) - 모든 SMTP 서버로 첨부 파일이 포함된 텍스트/HTML 이메일을 전송.
- [email-templates](https://github.com/forwardemail/email-templates) - 사용자 지정 이메일 템플릿을 만들고, 미리 보고, 전송.
- [MJML](https://github.com/mjmlio/mjml) - 반응형 이메일 작성의 어려움을 줄이기 위해 설계된 마크업 언어.
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - 오픈 소스이며 자체 호스팅 가능한 이메일 서비스.

### 작업 큐

- [bull](https://github.com/OptimalBits/bull) - 영구 작업 및 메시지 큐.
- [agenda](https://github.com/agenda/agenda) - MongoDB 기반 작업 스케줄링.
- [idoit](https://github.com/nodeca/idoit) - 고급 작업 제어 기능을 갖춘 Redis 기반 작업 큐 엔진.
- [node-resque](https://github.com/actionhero/node-resque) - Redis 기반 작업 큐.
- [rsmq](https://github.com/smrchy/rsmq) - Redis 기반 메시지 큐.
- [bee-queue](https://github.com/bee-queue/bee-queue) - 고성능 Redis 기반 작업 큐.
- [RedisSMQ](https://github.com/weyoss/redis-smq) - 실시간 모니터링을 지원하는 간단하고 고성능인 Redis 메시지 큐.
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - 보일러플레이트 없이 Amazon Simple Queue Service(SQS) 기반 앱을 구축.
- [better-queue](https://github.com/diamondio/better-queue) - Redis를 사용할 수 없을 때 적합한 간단하고 효율적인 작업 큐.
- [bullmq](https://github.com/taskforcesh/bullmq) - 영구 작업 및 메시지 큐.
- [bree](https://github.com/breejs/bree) - 워커 스레드, cron, 날짜 및 자연어 구문을 지원하는 작업 스케줄러.
- [graphile-worker](https://github.com/graphile/worker) - 고성능 PostgreSQL 작업 큐.

### Node.js 관리

- [n](https://github.com/tj/n) - Node.js 버전 관리.
- [nave](https://github.com/isaacs/nave) - Node.js 가상 환경.
- [nodeenv](https://github.com/ekalinin/nodeenv) - Python virtualenv와 호환되는 Node.js 가상 환경.
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Windows용 버전 관리.
- [nodenv](https://github.com/nodenv/nodenv) - Ruby rbenv와 유사한 버전 관리자. 버전을 자동으로 전환합니다.
- [fnm](https://github.com/Schniz/fnm) - Rust로 구축된 크로스 플랫폼 Node.js 버전 관리자.

### 크로스 플랫폼 통합

- [napi-rs](https://github.com/napi-rs/napi-rs) - Node-API를 통해 Rust로 컴파일되는 Node.js 애드온을 구축하는 프레임워크.
- [Neon](https://github.com/neon-bindings/neon) - 안전하고 빠른 네이티브 Node.js 모듈 작성을 위한 Rust 바인딩.
- [Edge.js](https://github.com/agracio/edge-js) - Windows, macOS 및 Linux의 동일 프로세스에서 .NET과 Node.js 코드를 실행.
- [DotNetJS](https://github.com/Elringus/DotNetJS) - .NET 상호 운용 계층을 사용해 Node.js에서 .NET 라이브러리를 사용.

### 자연어 처리

- [retext](https://github.com/retextjs/retext) - 확장 가능한 자연어 처리 시스템.
- [franc](https://github.com/wooorm/franc) - 텍스트의 언어를 감지.
- [leven](https://github.com/sindresorhus/leven) - Levenshtein 거리 알고리즘을 사용해 두 문자열의 차이를 측정.
- [natural](https://github.com/NaturalNode/natural) - 자연어 처리 도구.
- [nlp.js](https://github.com/axa-group/nlp.js) - 개체 추출, 감정 분석, 자동 언어 식별 등을 지원하는 봇 구축 도구.

### 프로세스 관리

- [PM2](https://github.com/Unitech/pm2) - 고급 프로세스 관리자.
- [nodemon](https://github.com/remy/nodemon) - 앱의 변경 사항을 감시하고 서버를 자동으로 다시 시작.
- [node-mac](https://github.com/coreybutler/node-mac) - 스크립트를 네이티브 Mac 데몬으로 실행하고 콘솔 앱에 로그를 기록.
- [node-linux](https://github.com/coreybutler/node-linux) - 스크립트를 네이티브 시스템 서비스로 실행하고 syslog에 로그를 기록.
- [node-windows](https://github.com/coreybutler/node-windows) - 스크립트를 네이티브 Windows 서비스로 실행하고 이벤트 뷰어에 로그를 기록.
- [supervisor](https://github.com/petruisfan/node-supervisor) - 스크립트가 충돌하거나 `*.js` 파일이 변경되면 다시 시작.
- [Phusion Passenger](https://github.com/phusion/passenger) - Nginx와 직접 통합되는 편리한 프로세스 관리자.

### 자동화

- [robotjs](https://github.com/octalmage/robotjs) - 데스크톱 자동화: 마우스와 키보드를 제어하고 화면을 읽습니다.
- [nut.js](https://github.com/nut-tree/nut.js) - 이미지 매칭 기능을 제공하고 Jest와 통합되는 크로스 플랫폼 네이티브 GUI 자동화/테스트 프레임워크.

### AST

- [Acorn](https://github.com/acornjs/acorn) - 작고 빠른 JavaScript 파서.
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Babel에서 사용하는 JavaScript 파서.

### 정적 사이트 생성기

- [DocPad](https://github.com/docpad/docpad) - 동적 기능과 방대한 플러그인 생태계를 갖춘 정적 사이트 생성기.
- [docsify](https://github.com/docsifyjs/docsify) - 정적으로 빌드한 HTML 파일 없이 Markdown 문서 사이트를 생성.
- [Charge](https://github.com/brandonweiss/charge) - JSX와 MDX를 사용하는, 의견이 반영된 설정 없는 정적 사이트 생성기.

### 콘텐츠 관리 시스템

- [KeystoneJS](https://github.com/keystonejs/keystone) - Express와 MongoDB를 기반으로 구축된 CMS 및 웹 애플리케이션 플랫폼.
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - Express와 MongoDB를 기반으로 구축되어 직관적인 프런트엔드 콘텐츠 편집 및 관리에 중점을 둔 콘텐츠 관리 시스템.
- [Strapi](https://github.com/strapi/strapi) - 강력한 API를 구축하기 위한 콘텐츠 관리 프레임워크(헤드리스 CMS).
- [Factor](https://github.com/FactorJS/factor) - Vue.js 대시보드 프레임워크 및 헤드리스 CMS.
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - 모든 리소스를 대상으로 CRUD를 제공하는 자동 생성 관리자 패널.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS 및 헤드리스 GraphQL API.

### 포럼

- [nodeBB](https://github.com/NodeBB/NodeBB) - 현대적인 웹을 위한 포럼 플랫폼.

### 블로깅

- [Ghost](https://github.com/TryGhost/Ghost) - 간단하고 강력한 게시 플랫폼.
- [Hexo](https://github.com/hexojs/hexo) - 빠르고 간단하며 강력한 블로그 프레임워크.

### 별난 프로젝트

- [cows](https://github.com/sindresorhus/cows) - ASCII 소.
- [superb](https://github.com/sindresorhus/superb) - 멋진 단어를 가져옵니다.
- [cat-names](https://github.com/sindresorhus/cat-names) - 인기 있는 고양이 이름을 가져옵니다.
- [dog-names](https://github.com/sindresorhus/dog-names) - 인기 있는 강아지 이름을 가져옵니다.
- [superheroes](https://github.com/sindresorhus/superheroes) - 슈퍼히어로 이름을 가져옵니다.
- [supervillains](https://github.com/sindresorhus/supervillains) - 슈퍼빌런 이름을 가져옵니다.
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - 멋진 ASCII 얼굴을 가져옵니다.
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`
- [nerds](https://github.com/SkyHacks/nerds) - Harry Potter, Star Wars, Pokémon 등 괴짜 취향의 주제에서 데이터를 가져옵니다.

### 직렬화

- [snappy](https://github.com/kesla/node-snappy) - Google의 Snappy 압축 라이브러리를 위한 네이티브 바인딩.
- [protobuf](https://github.com/protobufjs/protobuf.js) - Protocol Buffers 구현.
- [compactr](https://github.com/compactr/compactr.js) - Compactr 프로토콜 구현.

### 기타

- [execa](https://github.com/sindresorhus/execa) - 더 나은 `child_process`.
- [cheerio](https://github.com/cheeriojs/cheerio) - 서버 전용으로 설계된 빠르고 유연하며 가벼운 jQuery 코어 구현.
- [open](https://github.com/sindresorhus/open) - 웹사이트, 파일, 실행 파일 등을 엽니다.
- [hasha](https://github.com/sindresorhus/hasha) - 간편한 해싱. 버퍼/문자열/스트림/파일의 해시를 가져옵니다.
- [dot-prop](https://github.com/sindresorhus/dot-prop) - 점으로 구분된 경로를 사용해 중첩 객체의 속성을 가져옵니다.
- [onetime](https://github.com/sindresorhus/onetime) - 함수를 한 번만 실행.
- [mem](https://github.com/sindresorhus/mem) - 동일한 입력의 호출 결과를 캐시해 후속 함수 호출을 빠르게 하는 최적화 기법인 함수 메모이제이션.
- [strip-bom](https://github.com/sindresorhus/strip-bom) - 문자열/버퍼/스트림에서 UTF-8 바이트 순서 표시(BOM)를 제거.
- [os-locale](https://github.com/sindresorhus/os-locale) - 시스템 로캘을 가져옵니다.
- [ssh2](https://github.com/mscdex/ssh2) - SSH2 클라이언트 및 서버 모듈.
- [adit](https://github.com/markelog/adit) - 간편한 SSH 터널링.
- [file-type](https://github.com/sindresorhus/file-type) - Buffer의 파일 형식을 감지.
- [Bottleneck](https://github.com/SGrondin/bottleneck) - 스로틀링을 간편하게 하는 속도 제한기.
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - 네이티브 스레드를 사용하는 경량 Web Worker API 구현.
- [clipboardy](https://github.com/sindresorhus/clipboardy) - 시스템 클립보드에 접근(복사/붙여넣기).
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - 바이너리에서 Node.js C++ 애드온을 쉽게 게시하고 설치.
- [opencv](https://github.com/peterbraden/node-opencv) - OpenCV 바인딩. 사실상의 컴퓨터 비전 라이브러리.
- [dotenv](https://github.com/motdotla/dotenv) - .env 파일에서 환경 변수를 불러옵니다.
- [semver](https://github.com/npm/node-semver) - 시맨틱 버전 파서.
- [nodegit](https://github.com/nodegit/nodegit) - Git용 네이티브 바인딩.
- [json-strictify](https://github.com/pigulla/json-strictify) - 데이터를 손실하거나 무한 루프에 빠지지 않고 값을 JSON으로 안전하게 직렬화.
- [jsdom](https://github.com/jsdom/jsdom) - HTML 및 DOM의 JavaScript 구현.
- [@sindresorhus/is](https://github.com/sindresorhus/is) - 값의 타입을 확인.
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - 점으로 구분된 경로를 사용해 process.env의 중첩 속성을 가져오거나, 설정하거나, 삭제.
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - MP4 및 FLV 동영상 파일을 처리하고 HLS 스트리밍용 MPEG-TS 청크를 만드는 순수 JavaScript 라이브러리.
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - FTP/FTPS 클라이언트.
- [cashify](https://github.com/xxczaki/cashify) - 통화 변환.
- [genepi](https://github.com/Geode-solutions/genepi) - C++ 코드에서 네이티브 Node.js 애드온을 자동 생성.
- [husky](https://github.com/typicode/husky) - Git 훅 스크립트 생성.
- [patch-package](https://github.com/ds300/patch-package) - npm 종속성에 대한 수정 사항을 적용하고 유지.
- [editly](https://github.com/mifi/editly) - 선언형 동영상 편집 API.
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - 와일드카드와 정규식을 지원하는 객체 속성 경로.
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - Uint8Array 및 Buffer 작업에 유용한 유틸리티.

## 패키지 관리자

- [npm](https://docs.npmjs.com/about-npm) - 기본 패키지 관리자.
- [pnpm](https://pnpm.io) - 디스크 공간을 효율적으로 사용하는 패키지 관리자.
- [yarn](https://yarnpkg.com) - 대체 패키지 관리자.
- [bun](https://bun.sh) - JavaScript 및 TypeScript 앱을 위한 올인원 툴킷.

## 자료

### 튜토리얼

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - 여러 언어로 제공되는 Node.js 모범 사례 관련 최고 평가 콘텐츠의 요약 및 선별 목록.
- [Nodeschool](https://github.com/nodeschool) - 대화형 강의를 통해 Node.js를 학습.
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Node.js 입문서.
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - 새로운 npm 모듈을 작성할 때 유용한 모범 사례.
- [The Node Way](https://github.com/FredKSchott/the-node-way) - 유지 관리가 쉽고 확장 가능한 모듈, 실제로 읽기 즐거운 코드를 작성하기 위한 Node.js 모범 사례와 지침을 아우르는 철학.
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Node.js 핵심 기능과 비동기 JavaScript 입문.
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - 이식성 있고 크로스 플랫폼인 Node.js 코드를 작성하는 실용 안내서.
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - 몇 가지 간단한 라이브러리와 Node.js 코어 모듈을 사용해 실제 웹 앱을 만들고 배포하는 데 도움을 주는 동영상 튜토리얼/라이브 스트림 모음.

### 탐색

- [npms](https://npms.io) - [다양한 지표](https://npms.io/about)를 사용해 패키지 품질을 심층 분석하는 뛰어난 패키지 검색 서비스.
- [npm addict](https://npmaddict.com) - 매일 받아보는 npm 패키지 소식.

### 글

- [Error Handling in Node.js](https://sematext.com/blog/node-js-error-handling/)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### 뉴스레터

- [Node Weekly](https://nodeweekly.com) - Node.js 뉴스와 기사를 매주 모아 보내는 이메일 뉴스레터.

### 동영상

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - V8 가비지 컬렉터에 관한 이야기.
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Node.js 제작자가 몇 가지 한계에 관해 들려주는 통찰력 있는 강연.
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - Node.js로 REST API를 만드는 방법을 다루는 동영상 강좌.
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - Express 같은 프레임워크를 사용하지 않고 REST API를 구축.
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - V8 아키텍처의 기본 사항과 JavaScript 실행 최적화 방법.
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - V8이 JavaScript 실행을 최적화하는 방법.
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - V8 지식을 바탕으로 앱의 병목 지점을 찾고 성능을 최적화하는 방법.
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - V8과 libuv를 중심으로 Node.js 내부 동작을 설명.
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - 소스 코드를 통해 살펴보는 `libuv` 아키텍처, 스레드 풀 및 이벤트 루프.
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - 스레드를 실제로 사용하는 위치 등 `libuv` 아키텍처를 자세히 설명.
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - V8, libuv, 이벤트 루프, 모듈, 스트림 및 클러스터에 관한 퀴즈로 Node.js 내부 구조를 설명.

### 도서

- [Node.js in Action](https://www.manning.com/books/node-js-in-action-second-edition)
- [Node.js in Practice](https://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939)
- [Mastering Node](https://visionmedia.github.io/masteringnode/)
- [Node.js 8 the Right Way](https://pragprog.com/book/jwnode2/node-js-8-the-right-way/)
- [Professional Node.js: Building JavaScript Based Scalable Software](https://www.amazon.com/Professional-Node-js-Building-JavaScript-Scalable-ebook/dp/B009L7QETY/)
- [Secure Your Node.js Web Application](https://www.amazon.com/Secure-Your-Node-js-Web-Application/dp/1680500856)
- [Express in Action](https://www.manning.com/books/express-in-action)
- [Practical Modern JavaScript](https://www.amazon.com/Practical-Modern-JavaScript-Dive-Future/dp/149194353X)
- [Mastering Modular JavaScript](https://www.amazon.com/Mastering-Modular-JavaScript-Nicolas-Bevacqua/dp/1491955686/)
- [Get Programming with Node.js](https://www.manning.com/books/get-programming-with-node-js)
- [Node.js Cookbook](https://www.amazon.com/dp/1838558756)
- [Node.js Design Patterns](https://www.nodejsdesignpatterns.com)

### 블로그

- [Node.js blog](https://nodejs.org/en/blog/)
- [webapplog.com](https://webapplog.com/tag/node-js/) - Practical Node.js와 Pro Express.js의 저자 Azat Mardan이 작성한 Node.js 및 JavaScript 블로그 글.

### 강좌

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Wes Bos가 진행하는 동영상 강좌.
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### 치트시트

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - 페이지 매김, 이벤트 등을 다루며 스트림에 관한 일반적인 질문에 답변.
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Node.js 웹 서비스 소스 코드 보안 분석을 위한 체크리스트.

### 도구

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - GitHub의 package.json, .js, .jsx, .coffee 및 .md 파일에서 종속 항목을 링크로 바꿔 주는 Chrome 확장 프로그램.
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - 저장소 README 하단에 npm 종속 항목을 표시하는 Chrome 확장 프로그램.
- [RunKit](https://runkit.com) - 모든 웹사이트에 Node.js 환경을 임베드.
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - GitHub에 npm 다운로드 통계를 표시하는 Chrome 확장 프로그램.
- [npm semver calculator](https://semver.npmjs.com) - semver 범위와 일치하는 패키지 버전을 시각적으로 살펴봅니다.
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - 온라인 IDE 및 프로토타이핑 도구.
- [Amplication](https://github.com/amplication/amplication) - 완전한 기능을 갖춘 앱을 자동 생성.
- [RunJS](https://runjs.app) - 데스크톱용 JavaScript 플레이그라운드.

### 커뮤니티

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### 기타

- [nodebots](https://nodebots.io) - JavaScript로 구동되는 로봇.
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Node 모듈 제작을 시작하기 위한 보일러플레이트.
- [modern-node](https://github.com/sheerun/modern-node) - Jest, Prettier, ESLint 및 Standard를 사용해 Node 모듈을 만드는 툴킷.
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Node 모듈의 기본 골격을 생성.
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Microsoft 플랫폼에서 Node.js를 사용하는 팁, 요령 및 자료.
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - 필요한 JavaScript 모듈을 요청하거나 모듈 아이디어를 얻습니다.
- [v8-perf](https://github.com/thlorenz/v8-perf) - V8 및 이에 따른 Node.js 성능 관련 참고 사항과 자료.

## 관련 목록

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - npm 사용을 위한 자료와 팁.
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - 크로스 플랫폼 코드 작성 및 테스트를 위한 자료.
