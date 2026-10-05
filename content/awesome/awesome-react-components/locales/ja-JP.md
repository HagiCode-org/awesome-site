# Â 絶対に awesome React コンポーネントとライブラリ

AWESOMEコンポーネントのリストです。 ノーピー、それはすべての包括的なリストではありません React 太陽の下の部品。 「すごい」とはどういう意味ですか? まあ:

- それは本当の問題を解決します
- それは、とてもユニークな、美しい、または例外的な方法で行います。 (そして、それは超人気でよく知られていない...それらのリストにポイントはありません。)
- 最近の投稿 code コミット!

本当に素晴らしいプロジェクトのための OST を探します。 そして、メモのいくつかのリストの後、 (italic parens) で迅速なメンテナの解説とレビューを探します。

参照: [Awesome React Frameworks](https://github.com/brillout/awesome-react-frameworks).

メンター:

- [@petebray](https://github.com/bluepeter), author of [Fluxguard](https://fluxguard.com) &mdash; monitor PROD website changes.
- [@brillout](https://twitter.com/brillout), author of [Vike](https://vike.dev) &mdash; a fast Vite-based React framework that is flexible, lean, community-driven and dependable.

### 貢献する

お問い合わせ [貢献ガイドライン](https://github.com/brillout/awesome-react-components/blob/master/CONTRIBUTING.md). 私たちは、このリストから1つ以上の非恐ろしいエントリを削除するためにすべてのPRを必要とする**によって、このリストを新鮮に保ちます**。 ALSOが削除する場合は、新しいリソースをPRしてください。

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## コンテンツの表

- [UI コンポーネント](#ui-components)
  - [編集可能なデータグリッド/スプレッドシート](#editable-data-grid--spreadsheet)
  - [テーブル](#table)
  - [無限スクロール](#infinite-scroll)
  - [オーバーレイ](#overlay)
  - [お知らせ](#notification)
  - [ツールチップ](#tooltip)
  - [メニュー](#menu)
  - [スティッキー](#sticky)
  - [タブ](#tabs)
  - [ローダー](#loader)
  - [キャップチャ](#captcha)
  - [カルーセル](#carousel)
  - [ボタン](#buttons)
  - [ログイン](#collapse)
  - [チャート](#chart)
  - [コマンドパレット](#command-palette)
  - [ツリー](#tree)
  - [UI ナビゲーション](#ui-navigation)
  - [カスタムスクロールバー](#custom-scrollbar)
  - [可聴周波/ビデオ](#audio--video)
  - [サイトマップ](#map)
  - [時間/日付/年齢](#time--date--age)
  - [写真・画像](#photo--image)
  - [アイコン](#icons)
  - [パジネータ](#paginator)
  - [Markdown ビューア](#markdown-viewer)
  - [キャンバス](#canvas)
  - [スクリーンショット](#screenshot)
  - [ツイート](#miscellaneous)
  - [フォームコンポーネント](#form-components)
    - [日付 / タイムピッカー](#date--time-picker)
    - [絵文字ピッカー](#emoji-picker)
    - [入力タイプ](#input-types)
    - [オートコンプリート](#autocomplete)
    - [選択する](#select)
    - [カラーピッカー](#color-picker)
    - [トピックス](#toggle)
    - [スライダー](#slider)
    - [ラジオボタン](#radio-button)
    - [タイプ 選択](#type-select)
    - [札の入力](#tag-input)
    - [オートサイズ入力/Textarea](#autosize-input--textarea)
    - [スター評価](#star-rating)
    - [ドラッグ&ドロップ](#drag-and-drop)
    - [ソート可能なリスト](#sortable-list)
    - [リッチテキストエディタ](#rich-text-editor)
    - [Markdown ダウンロード](#markdown-editor)
    - [画像編集](#image-editing)
    - [フォームコンポーネントコレクション](#form-component-collections)
    - [ツイート](#miscellaneous-1)
    - [シンタックスハイライト](#syntax-highlight)
- [UI レイアウト](#ui-layout)
- [UI アニメーション](#ui-animation)
  - [パララックス](#parallax)
- [UI フレームワーク](#ui-frameworks)
  - [責任ある](#responsive)
    - [Material Design](#material-design)
  - [モバイル](#mobile)
  - [コンポーネントコレクション](#component-collections)
- [UI ユーティリティ](#ui-utilities)
  - [レポーター](#reporter)
    - [可視性レポーター](#visibility-reporter)
    - [測定レポーター](#measurement-reporter)
  - [デバイス入力](#device-input)
    - [キーボードイベント](#keyboard-events)
    - [スクロールイベント](#scroll-events)
    - [タッチスワイプ](#touch-swipe)
    - [マウスイベント](#mouse-events)
  - [メタタグ](#meta-tags)
  - [サイトマップ](#portal)
  - [ユーザー行動をテストする](#test-user-behavior)
- [Code Design](#code-design)
  - [データストア](#data-store)
  - [フォームロジック](#form-logic)
  - [ルーター](#router)
  - [サーバからのプロップ](#props-from-server)
  - [サーバとのコミュニケーション](#communication-with-server)
  - [CSS / スタイル](#css--style)
  - [HTML テンプレート](#html-template)
  - [Isomorphic アプリ](#isomorphic-apps)
  - [ボイラープレート](#boilerplate)
  - [ツイート](#miscellaneous-2)
- [ユーティリティ](#utilities)
  - [i18n](#i18n)
  - [フレームワーク結合/統合](#framework-bindings--integrations)
  - [第三者サービスとの連携](#integrations-with-third-party-services)
- [パフォーマンス](#performance)
  - [UI](#ui)
    - [トピックス](#inspect)
    - [レイジー負荷](#lazy-load)
  - [アプリサイズ](#app-size)
  - [サーバサイドレンダリング](#server-side-rendering)
- [Dev ツール](#dev-tools)
  - [テスト](#test)
  - [Redux](#redux)
  - [トピックス](#inspect-1)
  - [ツイート](#miscellaneous-3)
- [ツイート](#miscellaneous-4)
  - [静的なウェブサイトの発電機](#static-website-generator)
- [クラウドソリューション](#cloud-solutions)
  - [データベース](#databases)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## UI コンポーネント

**[`Back to top ⬆️`](#table-of-contents)**

### 編集可能なデータグリッド/スプレッドシート

- [AG Grid](https://github.com/ag-grid/ag-grid) - 高度なデータグリッド/データテーブルのサポート Javascript / React / AngularJS / Webコンポーネント。
- [fortune-sheet](https://github.com/ruilisi/fortune-sheet) - Excel と同様に、アウト・オブ・ザ・ボックス機能を提供するオンライン・スプレッズ・コンポーネント。
- [gigatables-react](https://github.com/GigaTables/reactables) - ソート、パジネーション/無限スクロール、グローバル/列検索、 AJAX クラウドなど
- [Handsontable](https://github.com/handsontable/handsontable) - [demo](https://handsontable.com/demo) - [docs](https://handsontable.com/docs/react-data-grid/) - スプレッドシートのようなデータグリッド UI サポート React, Angular, TypeScript そして、 JavaScript.
- [jqwidgets-react-grid](https://www.jqwidgets.com/react/react-grid/) - フィルタリング、パジネーション、グループ化、Excelへのエクスポート、 PDF、CRUDおよび多く。
- [MUI X Data grid](https://github.com/mui/mui-x) - [demo/docs](https://mui.com/x/react-data-grid/) - パワーユーザーと複雑なユースケースのための高度な機能を備えた迅速かつカスタマイズ可能なデータグリッド。
- [react-data-grid](https://github.com/adazzle/react-data-grid) - Excelのような格子。
- [ReactGrid](https://github.com/silevis/reactgrid) - [demo/docs](https://reactgrid.com/docs/) - アプリにスプレッドシートのような動作を追加
- [revo-grid](https://github.com/revolist/revogrid) - [demo/docs](https://revolist.github.io/revogrid/) - 強力なデータグリッド React / AngularJS / Vue / 高度のカスタム化の網の部品。
- [SheetXL](https://github.com/sheetxl/sheetxl) – A high-performance spreadsheet grid. TypeScript, ESM, Node/browser, Excel-compatible functions.
- [SVAR React DataGrid](https://svar.dev/react/datagrid/) - [demo](https://docs.svar.dev/react/grid/samples/#/base/willow) - [docs](https://docs.svar.dev/react/grid/getting_started/) - React セル内編集、ツリーデータ、コンテクストメニュー、仮想スクロールなどのデータグリッド

### テーブル

- [ka-table](https://github.com/komarovalexander/ka-table) - [demo](https://komarovalexander.github.io/ka-table/#/overview) - ソート、フィルタリング、グループ化、仮想化、編集などのカスタマイズ可能なテーブルコンポーネント。
- [mantine-datatable](https://github.com/icflorescu/mantine-datatable) - [demo/docs](https://icflorescu.github.io/mantine-datatable/) - マンチンのための軽量のテーブルの部品 UI たくさんの特徴の塗布、
- [material-table](https://github.com/mbrn/material-table) - [demo/docs](https://material-table.com/) - 上に構築 Material UI、プラス:グループ化、ツリーデータ、拡張可能な行、エクスポート、インライン編集
- [mui-datatables](https://github.com/gregnb/mui-datatables) - 作り付け Material UI. 検索、スタイリング、フィルタリング、サイズ変更/非表示の列、エクスポート、プリント、選択/展開行。
- [react-data-table](https://github.com/jbetancur/react-data-table-component) - [demo/docs](https://jbetancur.github.io/react-data-table-component/?) - 選択可能な行、拡張可能な行、ペジネーションを並べ替えて、アクセス可能で、応答性、対応可能
- [TanStack Table](https://github.com/tannerlinsley/react-table) - [demo](https://tanstack.com/table/v8/docs/examples/react/basic) - ヘッドレス UI 強力なテーブルとデータグリッドを構築する
- [react-table-library](https://github.com/table-library/react-table-library) - [demo](https://react-table-library.com/) - React 表ライブラリ -- ほとんどのヘッドレステーブルライブラリ -- より良いテーブルを構築します。
- [rsuite-table](https://github.com/rsuite/rsuite-table) - [demo/docs](http://rsuite.github.io/rsuite-table/) - 仮想化をサポートするテーブルコンポーネント。
- [DevExtreme React Grid](https://devexpress.github.io/devextreme-reactive/react/grid/) - 高性能プラグインベースのデータグリッド Bootstrap そして、 Material Design.
- [Smart React Grid](https://htmlelements.com/react/demos/grid/overview/) - 高速で機能的なデータグリッド Material Design.
- [simple-table](https://github.com/petera2c/simple-table) - [demo](https://www.simple-table.com/examples) - [docs](https://www.simple-table.com/docs) - 軽量、速くおよび特徴豊富な。 ソート/フィルタリング、仮想化、ツリーデータ、ネストされたヘッダー、ピン留めされた列、カスタマイズされたスタイリングなど。

- [KendoReact Grid](https://www.telerik.com/kendo-react-ui/components/grid/) - Paging、ソート、Excelへのエクスポートなどの100以上の既製の機能を備えた強力なデータグリッドコンポーネント。

- [Material-React-Table](https://github.com/KevinVandy/material-react-table) - 十分に特色にされる Material UI TanStackのV5実装 React 表V8、地面から上に書かれている TypeScript

### 無限スクロール

- [@egjs/react-infinitegrid](https://github.com/naver/egjs-infinitegrid/blob/master/packages/react-infinitegrid) - [npm](https://www.npmjs.com/package/@egjs/react-infinitegrid) - [demo](https://naver.github.io/egjs-infinitegrid/storybook/) - さまざまなレイアウトタイプに応じて無限にコンテンツを含むカード要素を整理するのに使用されるモジュール。
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload) - コンポーネント、画像、その他のパフォーマンスが重要である場合のレイジーロード。
- [react-list](https://github.com/orgsync/react-list) - 多彩な無限スクロール React コンポーネント。
- [@af-utils/virtual](https://github.com/nowaalex/af-utils) - [demo/docs](https://af-utils.com/virtual) - レンダリングの大きいスクロール可能なリストおよび格子。
- [react-window](https://github.com/bvaughn/react-window) - [demo](https://react-window.now.sh/) - React 大規模なリストと表形式のデータを効率的にレンダリングするためのコンポーネント
- [virtua](https://github.com/inokawa/virtua) - [demo](https://inokawa.github.io/virtua/) - ゼロ構成、速く、小さい(~3kB)のための仮想リストの部品 React, Vue そして固体。

### オーバーレイ

ディスプレイオーバーレイ/モーダル/アラート/ダイアログ/ライトボックス/ポップアップ 

- [react-aria-modal](https://github.com/davidtheclark/react-aria-modal) - 十分にアクセス可能で、適用範囲が広いです React modal は一致しました WAI-ARIA 執筆練習。
- [react-modal](https://github.com/reactjs/react-modal) - アクセシブルなモーダルダイアログコンポーネント React.
- [@paratco/async-modal](https://github.com/Paratco/async-modal) - シンプルな非同期モーダルハンドラ React.
- [reoverlay](https://github.com/hiradary/reoverlay) - [demo](https://hiradary.github.io/reoverlay/) - モーダルを管理するための不足しているソリューション。
- [sweetalert2](https://github.com/sweetalert2/sweetalert2) - [demo/docs](https://sweetalert2.github.io/) - 美しく、敏感で、高度にカスタマイズ可能およびアクセス可能()WAI-ARIA) のための取り替え JavaScriptポップアップボックス。 ゼロ依存関係。
- [sweetalert2-react-content](https://github.com/sweetalert2/sweetalert2-react-content) - オフィシャルSweetAlert2エンハンサー追加サポート React コンテンツとしての要素

### お知らせ

Toaster/スナックバー — モデレス一時停止ポップアップでユーザーを通知 

- [react-notifications-component](https://github.com/teodosii/react-notifications-component) - [demo](https://teodosii.github.io/react-notifications-component/) - 通知のための高度にカスタマイズ可能で、使いやすい部品。
- [notistack](https://iamhosseindhv.com/notistack) - [demo](https://codesandbox.io/s/github/iamhosseindhv/notistack/tree/master/examples/simple-example??hidenavigation=1&module=%2FApp.js) - [docs](https://iamhosseindhv.com/notistack/api) - お互いの上に積み重ねることができる高度にカスタマイズ可能な通知スナックバー(トースト)
- [react-local-toast](https://github.com/OlegWock/react-local-toast) - [demo](https://react-local-toast.netlify.app/showcase/) - [docs](https://react-local-toast.netlify.app/tutorial) - アプリ全体のトーストの代わりに、特定のコンポーネントにリンクされたフィードバックを表示します。
- [react-toast](https://github.com/moharnadreza/react-toast) - [demo](https://codesandbox.io/s/byqvk) - [docs](https://github.com/moharnadreza/react-toast/blob/main/README.md) - 最小限のトースト通知。
- 🚀 [react-toastify](https://github.com/fkhadra/react-toastify) - [demo](https://fkhadra.github.io/react-toastify/) - 瞬間にそこに最善を尽くします。 ホック サポート。 参照無し。
- [react-confirm-lite](https://github.com/SaadNasir-git/react-confirm-lite) - [demo](https://stackblitz.com/edit/vitejs-vite-bfthlpmw) - 軽量で約束ベースの確認ダイアログです。 React 組み込み Tailwind CSS サポート シンプルに使えるようにデザインされています。 react-toastifyは、完全にカスタマイズ可能なまま。
- [reapop](https://github.com/LouisBarranqueiro/reapop) - ツイート React & Redux 通知システム。
- [react-hot-toast](https://github.com/timolins/react-hot-toast) - [demo](https://react-hot-toast.com/) - 喫煙ホット通知のための React. ライト級選手、カスタマイズ可能およびデフォルトによって美しい。
- [Sonner](https://sonner.emilkowal.ski/) - ご意見・ご要望・ご要望 React.

### ツールチップ

- [react-tooltip](https://github.com/wwayne/react-tooltip) - React ツールチップコンポーネント。

### メニュー

メナス/サイドバー 

- [hamburger-react](https://github.com/luukdv/hamburger-react) - [demo/docs](https://hamburger-react.netlify.app/) - アニメーションハンバーガーメニューのアイコン React.
- [react-burger-menu](https://github.com/negomi/react-burger-menu) - 効果とスタイルを持つオフカンバのサイドバー。
- [react-offcanvas](https://github.com/vutran/react-offcanvas) - オフキャンバスメニュー React.
- [react-planet](https://github.com/innFactory/react-planet) - [demo](https://innfactory.github.io/react-planet/) - 惑星のように見える円形メニューを作成します。
- [mantine-contextmenu](https://github.com/icflorescu/mantine-contextmenu) - [demo/docs](https://icflorescu.github.io/mantine-contextmenu/) - Mantineと造られる適用のためのコンテキスト・メニューのホック/component UI.

### スティッキー

固定ヘッダー/スクロールアップヘッダー/スティッキー要素 

- [react-headroom](https://github.com/KyleAMathews/react-headroom) - 必要に応じてヘッダーを非表示にします。
- [react-stickynode](https://github.com/yahoo/react-stickynode) - 出演者と総合力 React スティッキー。

### タブ

- [react-tabs](https://github.com/reactjs/react-tabs) - React コンポーネントのタブ。
- [react-tabtab](https://github.com/ctxhou/react-tabtab) - React, タブ.

### ローダー

Loaders / スピナー / 進捗バー — 何かがロードされていることをユーザーに知らせる 

- [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) - コレクションセット react-非同期動作のスプナー。
- [react-redux-loading-bar](https://github.com/mironov/react-redux-loading-bar) - 簡単なローディング棒のための Redux そして、 React.
- [react-spinners-css](https://github.com/JoshK2/react-spinners-css) - 素晴らしいコレクション react Spinnersコンポーネント。
- [react-spinners](https://github.com/davidhu2000/react-spinners) - スピンナーコンポーネントをロードするコレクション react.
- [react-content-loader](https://github.com/danilowoz/react-content-loader) - SVG-Poweredコンポーネントは、プレースホルダーのロード(Facebookのカードロードなど)を簡単に作成できます。

### キャップチャ

- [react-simple-captcha](https://github.com/masroorejaz/react-simple-captcha) - [npm](https://www.npmjs.com/package/react-simple-captcha) - [demo](https://www.scriptse.com/blog/add-captcha-in-reactjs-application/react-simple-captcha-demo/) - React シンプルなカプチャは非常に強力で、高度にカスタマイズ可能で使いやすいカプチャです React JSについて
- [procaptcha](https://github.com/prosopo/captcha) - [demo](https://prosopo.io/) - [docs](https://docs.prosopo.io/) - プライバシーは、無料のCAPTCHAを集中

### カルーセル

- [@egjs/react-flicking](https://github.com/naver/egjs-flicking/blob/master/packages/react-flicking/) - [npm](https://www.npmjs.com/package/@egjs/react-flicking) - [demo](https://naver.github.io/egjs-flicking/) - それは信頼できる、適用範囲が広く、拡張可能なカルーセルです。
- [react-awesome-slider](https://github.com/rcaferati/react-awesome-slider) - [demo](https://fullpage.caferati.me/) - フルページ、3Dアニメーション、60fpsメディアとコンテンツスライダ/カルーセル。
- [pure-react-carousel](https://github.com/express-labs/pure-react-carousel) - 傷から作られ、高く評価されていない。
- [react-id-swiper](https://github.com/kidjp85/react-id-swiper) - idangerous Swiper を idangerous Swiper として使うライブラリ ReactJs コンポーネント
- [react-instagram-zoom-slider](https://github.com/skozer/react-instagram-zoom-slider) - [demo](https://skozer.github.io/react-instagram-zoom-slider/) - Instagramに触発されたズーム機能にピンチ付きのスライダコンポーネント。
- [react-responsive-carousel](https://github.com/leandrowd/react-responsive-carousel) - React.js レスポンシブカルーセル(スワイプ付き)。
- [react-slick](https://github.com/akiran/react-slick) - React カルーセルコンポーネント。
- [keen-slider](https://github.com/rcbyr/keen-slider) - [demo](https://keen-slider.io/examples/#examples) - パフォーマントカルーセル/スライダと native タッチ/スワイプ動作。
- [swiper](https://github.com/nolimits4web/Swiper) - [demo](https://swiperjs.com/demos) - [docs](https://swiperjs.com/react) - ハードウェアの加速された転移および驚くべき最も現代自由な移動式接触スライダー native 行動。

### ボタン

- [react-awesome-button](https://github.com/rcaferati/react-awesome-button) - [demo](https://caferati.me/demo/react-awesome-button) - ロード進行と社会的共有アクションで3Dアニメーション60fpsボタン。
- [reactive-button](https://github.com/arifszn/reactive-button) - [demo](https://arifszn.github.io/reactive-button/docs/playground) - [docs](https://arifszn.github.io/reactive-button) - 進行インジケーターを備えた美しいアニメーションボタンコンポーネント。

### ログイン

- [react-accessible-accordion](https://github.com/springload/react-accessible-accordion) - アクセシブルなアコーディオンコンポーネント React.
- [react-collapse](https://github.com/nkbt/react-collapse) - コンポーネント・ラッパー でアニメーションを崩壊させる react-感情。
- [react-tabbordion](https://github.com/Merri/react-tabbordion) - [demo](https://merri.github.io/react-tabbordion) - ユニバーサル、セマンティック、 CSS-アコーディオンとタブを作成するコンポーネントのみ。

### チャート

チャート/グラフ/図表にデータを表示

- [essential js 2 charts](https://github.com/syncfusion/ej2-react-ui-components/tree/master/components/charts) - 美しくインタラクティブなチャートとグラフ react.
- [EazyChart](https://github.com/Hexastack/eazychart) - [demo](https://docs.eazychart.com/#demos) - [docs](https://docs.eazychart.com) - データを意味のあるチャートに簡単に変換
- [echarts for react](https://github.com/hustcc/echarts-for-react) - 美しい Apache Echarts の周りの Wrapper
- [jscharting-react](https://github.com/jscharting/jscharting-react) – React chart component offering a complete set of chart types and engaging data visualizations with [JSCharting](https://jscharting.com/).
- [react-chartist](https://github.com/fraserxu/react-chartist) - React Chartist.js のコンポーネント
- [react-charty](https://github.com/99ff00/react-charty) - [demo](https://99ff00.github.io/react-charty/) - 複数のチャートタイプ、アニメーション、ズーム、テーマで、小型で強力なインタラクティブなデータヴィーズ。
- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) - よくある質問 react Chart.js 2.0 を使ってコンポーネントをグラフ化します。
- [react-d3-components](https://github.com/codesuki/react-d3-components) - D3コンポーネント React.
- [react-google-charts](https://github.com/RakanNimer/react-google-charts) - React-Googleチャート React コンポーネント。
- [react-highcharts](https://github.com/kirjs/react-highcharts) - React-ハイチャーツ。
- [react-sparklines](https://github.com/borisyankov/react-sparklines) - 美しく表現力のあるスパークライン React コンポーネント。
- [react-timeseries-charts](https://github.com/esnet/react-timeseries-charts) - 決定的な時系列チャート。
- [react-vis](https://github.com/uber/react-vis) - データ可視化ライブラリ React と d3.
- [recharts](https://github.com/recharts/recharts) - 再定義されたチャートライブラリは、 React と D3.
- [rumble-charts](https://github.com/rumble-charts/rumble-charts) - React 互換性のある柔軟なチャートを構築するためのコンポーネント。
- [victory](https://github.com/FormidableLabs/victory) - データバイス React.
- [semiotic](https://semiotic.nteract.io/) - Semiotic はデータ可視化フレームワークです。 React.
- [SVAR React Gantt](https://svar.dev/react/gantt/) - [demo](https://docs.svar.dev/react/gantt/samples/#/base/willow) - [docs](https://docs.svar.dev/react/gantt/getting_started/) - カスタマイズ可能なインタラクティブガントチャートコンポーネント
- [DevExtreme React Chart](https://devexpress.github.io/devextreme-reactive/react/chart/) - 高性能プラグインベースチャート Bootstrap そして、 Material Design.
- [Smart React Chart](https://www.htmlelements.com/react/demos/chart/overview/) - 特徴 完全なチャート作成ライブラリ。
- [react-muze](https://github.com/chartshq/react-muze) - React ラッパー用 [muze](https://muzejs.org/)(WebAssemblyを使用して、ブラウザでデータを視覚化するための無料のデータ可視化ライブラリ)
- [Flowchart React](https://github.com/joyceworks/flowchart-react) - フローチャート&フローチャートデザイナー React.js.
- [react-dashboard](https://github.com/flatlogic/react-dashboard) - Isomorphicダッシュボード。

### コマンドパレット

- [cmdk](https://cmdk.paco.me/) - 速く、composable、unstyled コマンド メニュー React.
- [kbar](https://github.com/timc1/kbar) - [demo](https://kbar.vercel.app) - 速く、携帯用および拡張可能なcmd+kインターフェイス。

### ツリー

ツリーデータ構造を表示 

- [json-edit-react](https://github.com/CarlosNZ/json-edit-react) - [demo](https://carlosnz.github.io/json-edit-react/) - JSON/Object ツリービューアとエディタを高度に構成可能
- [react-arborist](https://github.com/brimdata/react-arborist) - [demo](https://react-arborist.netlify.app/) - フル機能ツリービュー:ヘッドレス、仮想化、マルチ選択、ドラッグ&ドロップ、キーボードナビゲーション、検索
- [react-complex-tree](https://github.com/lukasbach/react-complex-tree) - [demo](https://rct.lukasbach.com/) - [docs](https://rct.lukasbach.com/docs/getstarted) - 複数の選択、ドラッグ アンド ドロップおよび調査の途上国指定のアクセシブル ツリーの部品
- [he-tree-react](https://github.com/phphe/he-tree-react) - [demo](https://he-tree-react.phphe.com/v1/examples) - [docs](https://he-tree-react.phphe.com/) - 木、カスタマイズ可能 UI、平らなデータ、木データ、ドラッグ・アンド・ドロップ、ドロップのためのプレースホルダー、折り畳み式、チェックボックス、仮想化。

### UI ナビゲーション

ビューをナビゲートするウェイ 

- [react-scroll](https://github.com/fisshy/react-scroll) - React スクロールコンポーネント。
- [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) - ツイート React 結合されたタブとスワイプ可能なビューのコンポーネント。

### カスタムスクロールバー

- [rc-scrollbars](https://github.com/sakhnyuk/rc-scrollbars) - [demo](https://rc-scrollbars.vercel.app/) - フレックスオプションと60FPSのカスタマイズ可能なスクロールバー
- [react-custom-scroll](https://github.com/rommguy/react-custom-scroll) - [demo](http://rommguy.github.io/react-custom-scroll/example/demo.html) - ブラウザのスクロールバーを簡単にカスタマイズ native OS のスクロール動作。
- [react-shadow-scroll](https://github.com/andrelmlins/react-shadow-scroll) - スクロール時に画像をカスタマイズして影を差し込みます。

### 可聴周波/ビデオ

- [react-dailymotion](https://github.com/u-wave/react-dailymotion) - Dailymotionプレーヤーコンポーネント React.
- [react-player](https://github.com/CookPete/react-player) - ツイート react YouTubeを含むさまざまなURLを再生するためのコンポーネント。
- [react-soundplayer](https://github.com/soundblogs/react-soundplayer) - カスタムのSoundCloudプレーヤーを作成 React.
- [react-youtube](https://github.com/troybetz/react-youtube) - React.js パワードYouTubeプレーヤーコンポーネント。
- [video-react](https://github.com/video-react/video-react) - HTML5の世界に向けて構築されたウェブビデオプレーヤー React ライブラリ。
- [material-ui-audio-player](https://github.com/Werter12/material-ui-audio-player) - オーディオプレーヤー material ui design.
- [react-vision-camera](https://github.com/xulihang/react-vision-camera) - カメラコンポーネント React getUserMedia を使う。 バーコードスキャン、テキスト認識などのコンピュータビジョンタスクにこのコンポーネントを使用できます。
- [react-barcode-qrcode-scanner](https://github.com/xulihang/react-barcode-qrcode-scanner) - バーコードとQR code スキャナーコンポーネント React. それは使用します react-カメラとDynamsoftバーコードリーダーにアクセスしてバーコードを読み取ります。

### サイトマップ

- [google-map-react](https://github.com/istarkov/google-map-react) - ユニバーサルグーグルマップ react コンポーネントは、レンダー react グーグルマップ上のコンポーネント。
- [mapkit](https://github.com/1amageek/mapkit) - 注釈、オーバーレイ、検索で、MapKit JSを使用してAppleマップを統合するためのライブラリ。
- [pigeon-maps](https://github.com/mariusandra/pigeon-maps) - [demo](https://pigeon-maps.js.org/) - ReactJS 外部の依存関係のないマップ。
- [react-geosuggest](https://github.com/ubilabs/react-geosuggest) - ツイート React GoogleマップがAPIを配置するための自動提案。
- [react-leaflet](https://github.com/PaulLeCam/react-leaflet) - React リーフレットマップのコンポーネント。
- [react-map-gl](https://github.com/uber/react-map-gl) - ツイート React MapboxGL-jsとオーバーレイAPI用のラッパー。
- [react-svg-map](https://github.com/VictorCazanave/react-svg-map) - [demo](https://victorcazanave.github.io/react-svg-map/) - インタラクティブなSVGマップを表示するコンポーネントのセット。

### 時間/日付/年齢

表示時間/日付/年齢 

- [react-timeago](https://github.com/nmn/react-timeago) - シンプルなタイムアゴコンポーネント ReactJs.
- [timeago-react](https://github.com/hustcc/timeago-react) - フォーマット日付と `*** time ago` ステートメント。 例: '3 時間前に'.
- [react-google-flight-datepicker](https://github.com/JSLancerTeam/react-google-flight-datepicker) - Googleのフライト日付ピッカーが実施 ReactJS.

### 写真・画像

画像の表示/写真 

- [lightGallery](https://github.com/sachinchoolur/lightGallery) - [demo](https://www.lightgalleryjs.com/) - [docs](https://www.lightgalleryjs.com/docs/react/) - フル機能のライトボックスギャラリーコンポーネント。
- [react-compare-image](https://github.com/junkboy0315/react-compare-image) - [demo](https://react-compare-image.yuuniworks.com/) - React スライダーを使用して2つの画像を比較するコンポーネント。
- [react-image-gallery](https://github.com/xiaolin/react-image-gallery) - レスポンシブイメージギャラリー、カルーセル、イメージスライダ react コンポーネント。
- [yet-another-react-lightbox](https://github.com/igordanchenko/yet-another-react-lightbox) - [demo](https://yet-another-react-lightbox.com/examples) - [docs](https://yet-another-react-lightbox.com/documentation) - React lightboxコンポーネント。
- [react-intense](https://github.com/brycedorn/react-intense) - ツイート React 大きいイメージを間近で見るためのコンポーネント。
- [react-photo-album](https://github.com/igordanchenko/react-photo-album) - [demo](https://react-photo-album.com/examples) - [docs](https://react-photo-album.com/documentation) - 応答性 React フォトギャラリー
- [react-svg-pan-zoom](https://github.com/chrvadala/react-svg-pan-zoom) - ツイート React パンとズーム機能をSVGに追加するコンポーネント。
- [react-particle-image](https://github.com/malerba118/react-particle-image) - [demo](https://malerba118.github.io/react-particle-image-demo/) - インタラクティブな粒子としてレンダリング画像。
- [react-imgix](https://github.com/imgix/react-imgix) - 画像、画像、背景などの高速で応答性の高い画像を追加!
- [@frameright/react-image-display-control](https://github.com/Frameright/react-image-display-control) - ズーム領域を定義して、スマートな応答画像を作成します。
- [zoom-image](https://github.com/willnguyen1312/zoom-image) - [demo](https://willnguyen1312.github.io/zoom-image/examples/react.html) - [docs](https://willnguyen1312.github.io/zoom-image) - Web上で画像をズームするための少しまだ強力なフレームワークアグノスティックライブラリ
- [react-infinite-gallery](https://github.com/AlirezaAzizi145/react-infinite-gallery) – Infinite-scroll image gallery component for React apps.

### アイコン

表示アイコン/アイコンセット/絵文字 

- [iconify-react](https://github.com/iconify/iconify-react) - 全人気アイコンと絵文字セットを含む50以上のアイコンセットから40k以上のアイコン。
- [react-icons](https://github.com/gorangajic/react-icons) - スヴォーグ react ES6のインポートで人気のアイコンパックのアイコン。
- [react-open-doodles](https://github.com/lunahq/react-open-doodles) - 素晴らしい無料イラストとして react コンポーネント。
- [react-icomoon](https://github.com/aykutkardas/react-icomoon) - と react-icomoon では、選択したアイコンや icomoon で簡単に作成できます。
- [tabler-icons-react](https://tabler-icons-react.vercel.app) - 450以上のMITライセンスの高品質SVGアイコンをセット。
- [Lucide](https://github.com/lucide-icons/lucide) - コミュニティによって作られた美しく一貫性のあるアイコンツールキット。 オープンソースプロジェクトとフェザーアイコンのフォーク。

### パジネータ

制御要素をpaginate に表示する

- [react-paginate](https://github.com/AdeleD/react-paginate) - ツイート ReactJS pagination を作成するコンポーネント。
- [react-laravel-paginex](https://github.com/lionix-team/react-laravel-paginex) - Laravelパジネーション ReactJS (カスタマイズ可能)。
- [paginated](https://github.com/makotot/paginated) - React props をレンダリングし、pagination をビルドするためのカスタム ホック。
- [react-steps](https://github.com/tkwant/react-steps) - [Demo](https://stepper.tkwant.de/) - 応答性 React ステッピング。

### Markdown ビューア

ディスプレイはマークドウソースを解析 

- [react-markdown](https://github.com/rexxars/react-markdown) - リンダー Markdown として React コンポーネント。

### キャンバス

キャンバスまたはSVG を使用したスケッチ入力

- [react-konva](https://github.com/konvajs/react-konva) - React コンヴァは JavaScript Konvaフレームワークにバインディングを施した複雑なキャンバスグラフィックを描画するためのライブラリ。
- [react-sketch](https://github.com/tbolis/react-sketch) - スケッチツール React ベースアプリケーション、FabricJSによるバックアップ
- [react-sketch-canvas](https://github.com/vinothpandian/react-sketch-canvas) - [Demo](https://vinoth.info/react-sketch-canvas/?path=/story/*) フリーハンドベクトル描画ツール React SVGをキャンバスに使用 マウス、タッチ、グラフィックタブレットからの入力を受け入れます
- [react-heat-map](https://github.com/uiwjs/react-heat-map) - 軽量カレンダーヒートマップ react SVGで構築されたコンポーネント、カスタマイズ可能なバージョン GitHubの貢献グラフ。

### スクリーンショット

- [html2canvas](https://github.com/niklasvh/html2canvas) - ウェブページの任意の部分のスクリーンショットを撮る Javascript.

### ツイート

- [puck](https://github.com/measuredco/puck) - [demo](https://puck-editor-demo.vercel.app/edit) - セルフホスト型ビジュアルエディタ React
- [react-advanced-news-ticker](https://github.com/ahmetcanaydemir/react-advanced-news-ticker) - [demo](https://www.ahmetcanaydemir.com/react-advanced-news-ticker/) - 柔軟でアニメーション的な垂直ニュースティッカーコンポーネント
- [react-avatar-generator](https://github.com/JosephSmith127/react-avatar-generator) - ユーザーがアバターとして使用するためにランダムなカレイドスコープを作成することを可能にします。
- [react-awesome-query-builder](https://github.com/ukrbublik/react-awesome-query-builder) - [demo](https://ukrbublik.github.io/react-awesome-query-builder/) - フォームフィールド、SQL、MongoDB、JSONエクスポートのビジュアルクエリビルダー
- [react-blur](https://github.com/javierbyte/react-blur) - React 空白の背景のためのコンポーネント。
- [react-demo-tab](https://github.com/mkosir/react-demo-tab) - [demo](https://mkosir.github.io/react-demo-tab) - A React コンポーネントは他のコンポーネントのデモを簡単に作成できます。
- [fastcomments-react](https://github.com/fastcomments/fastcomments-react) - [demo](<https://blog.fastcomments.com/(12-30-2019)-fastcomments-demo.html>) - ページまたはSPAにライブコメントスレッドを埋め込むためのFastCommentsコンポーネント。
- [react-pdf-viewer](https://github.com/phuoc-ng/react-pdf-viewer) - [docs](https://react-pdf-viewer.dev) - A React コンポーネントを表示 PDF ドキュメント。
- [react-simple-chatbot](https://github.com/LucasBassetti/react-simple-chatbot) - [demo](https://github.com/anishagg17/PIzzaBuilder) - 会話チャットを作成する簡単なチャットボットコンポーネント。
- [react-file-reader-input](https://github.com/ngokevin/react-file-reader-input) - ファイル入力コンポーネントは、スタイリングと抽象化を読み込みます。
- [react-filter-control](https://github.com/komarovalexander/react-filter-control) - ザ・オブ・ザ・ React filterbuilder コンポーネントは、フィルタの基準を構成します。 UI.
- [react-headings](https://github.com/alexnault/react-headings) - オートインクリメント HTML コンポーネント構造に関係なく、アクセス性やSEOを向上させるための見出し(h1、h2など)は、レンダリングされたものの完全な制御を維持します。
- [react-joyride](https://github.com/gilbarbara/react-joyride) - ウォークスルーやガイド付きツアーを作成 ReactJS アプリ。 スタンドアローンツールチップで今すぐ!
- [react-mouse-select](https://github.com/andreizanik/react-mouse-select) - [Demo](https://andreizanik.github.io/react-mouse-select/) 選択できるコンポーネント DOM マウスを動かすことによって要素
- [react-resizable-and-movable](https://github.com/bokuweb/react-resizable-and-movable) - Resizableおよび取り外し可能な部品のための React.
- [react-resizable-box](https://github.com/bokuweb/react-resizable-box) - 再構成可能なコンポーネント React. #reactjs.
- [react-searchbox-awesome](https://github.com/axmz/react-searchbox-awesome) - [demo](https://axmz.github.io/react-searchbox-awesome-page/) - ミニチュア検索ボックス。
- [react-split-pane](https://github.com/tomkp/react-split-pane) - React スプリットパンコンポーネント。
- [react-swipe-to-delete-ios](https://github.com/arnaudambro/react-swipe-to-delete-ios) - [demo](https://arnaudambro.github.io/react-swipe-to-delete-ios/) - リスト内の項目を削除するには、iOS が同じようにします。
- [react-swipeable-list](https://github.com/marekrozmus/react-swipeable-list) - [demo](https://marekrozmus.github.io/react-swipeable-list/) - リストをスワイプ可能な項目でレンダリングする構成可能なコンポーネント。
- [typography](https://github.com/KyleAMathews/typography.js) - 美しいタイポグラフィを持つウェブサイトを構築するための強力なツールキット。
- [react-pulse-text](https://github.com/Kelsier90/React-Pulse-Text) - [demo/docs](https://kelsier90.github.io/React-Pulse-Text/) - 別のコンポーネントの任意のプロパティのテキストをアニメーション化することができます。
- [captcha-image](https://github.com/tpkahlon/captcha-image) - オプションでランダムなキャプチャイメージを生成することができます。
- [react-pdf](https://github.com/wojtekmaj/react-pdf) - PDF を表示 React 画像があったら簡単にアプリ。
- [react-customizable-chat-bot](https://github.com/chithakumar13/react-chat-bot) - [Demo](https://chithakumar13.github.io/bot-example) - あなたのブランドのニーズに合ったチャットボットを作成しましょう。
- [@restpace/schema-form](https://github.com/restspace/schema-form) - [Demo](https://restspace.io/react/schema-form/demo) - JSON スキーマから複雑なフォームを自動的に簡単に作成できます。
- [react-darkreader](https://github.com/Turkyden/react-darkreader) - ツイート React darkreaderにインスパイアされたサイトにダーク/ナイトモードを追加するためのホック。
- [react-apple-signin-auth](https://github.com/A-Tokyo/react-apple-signin-auth) - アップルのサインイン React 公式のApple JS SDKを使って下さい。
- [react-mrz-scanner](https://github.com/tony-xlh/react-mrz-scanner) - ツイート React パスポート、ビザカードなどでMRZをスキャンするコンポーネント それはDynamsoftのラベルの認識装置に基づいています。

### フォームコンポーネント

ユーザーがデータを入力するように 

#### 日付 / タイムピッカー

日付ピッカー/時間ピッカー/日付ピッカー/日付範囲ピッカー 

- [date-range-picker](https://github.com/almogtavor/date-range-picker) - [demo](https://almogtavor.github.io/date-range-picker/) - 日付、範囲及び範囲の選択を支えるカレンダーの部品。
- [react-big-calendar](https://github.com/intljusticemission/react-big-calendar) - カレンダーコンポーネントのようなGcal/outlook。
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker) - シンプルで再利用可能なDatepickerコンポーネント React.
- [react-day-picker](https://github.com/gpbl/react-day-picker) - 柔軟な日付ピッカー React.
- [react-flatpickr](https://github.com/coderhaoxin/react-flatpickr) - フラットピッカー React.
- [react-simple-timefield](https://github.com/antonfisher/react-simple-timefield) - [demo](https://antonfisher.com/react-simple-timefield/) - 簡単な時間の入力分野。
- [react-timezone-select](https://github.com/ndom91/react-timezone-select) - [demo](https://ndom91.github.io/react-timezone-select/) - 動的、succinct タイムゾーン選択。 会社概要 `react-select`.
- [DevExtreme React Scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/) - 高性能プラグインベースのスケジューラ/カレンダー Material Design.
- [jQWidgets Scheduler](https://www.jqwidgets.com/react/react-scheduler/) - 特徴 完全な Scheduling の図書館。
- [react-calendar](https://github.com/wojtekmaj/react-calendar) - 究極のカレンダー React アプリ。
- [react-date-picker](https://github.com/wojtekmaj/react-date-picker) - あなたの日付ピッカー React アプリ。
- [schedule-x](https://github.com/schedule-x/schedule-x) - Material design イベントカレンダーと日付ピッカーコンポーネント。 デモサイト: https://schedule-x.dev/

#### 絵文字ピッカー

- [interweave-emoji-picker](https://github.com/milesj/interweave/tree/master/packages/emoji-picker) - ツイート React Interweave と Emojibase が開発した emoji ピッカー。

#### 入力タイプ

入力、専用入力、Eメール/電話番号/クレジットカード/その他 

- [react-credit-cards](https://github.com/amarofashion/react-credit-cards) - 支払いフォームの美しいクレジットカード。
- [react-payment-inputs](https://github.com/medipass/react-payment-inputs) - [demo](https://medipass.github.io/react-payment-inputs/?path=/story/usepaymentinputs--basic-no-styles) - 決済カード入力フィールドに役立ちますゼロ依存コンテナ。
- [react-input-mask](https://github.com/sanniassin/react-input-mask) - [demo](http://sanniassin.github.io/react-input-mask/demo.html) - その他 react 入力マスキングのためのコンポーネント。
- [@lunasec/react-sdk](https://github.com/lunasec-io/lunasec) - [docs](https://www.lunasec.io/docs/) - すべてのデータを自動的に暗号化/トークン化する、固定された形態の部品。
- [react-numpad](https://github.com/gpietro/react-numpad) - [demo](https://gpietro.github.io/react-numpad-demo/) - 数字、日付、時刻の拡張可能なナンバー パッド制御。
- [react-multi-email](https://github.com/axisj/react-multi-email) - [demo](https://react-multi-email.vercel.app/) - 複数のメールをユーザタイプとしてフォーマットします。

#### オートコンプリート

Autosuggest/オートコンプリート/typeahead 

- [react-autosuggest](https://github.com/moroshko/react-autosuggest) - WAI-ARIA コンプライアンス React autosuggestコンポーネント。
- [react-typeahead](https://github.com/fmoo/react-typeahead) - ピュア react-typeaheadおよびtypeahead-tokenizerに基づく。

#### 選択する

- [react-aria-menubutton](https://github.com/davidtheclark/react-aria-menubutton) - 十分にアクセス可能で、容易に主題的、 React-パワードメニューボタン。
- [react-functional-select](https://github.com/based-ghost/react-functional-select) - [demo](https://based-ghost.github.io/react-functional-select/) - マイクロ サイズ及びマイクロ最適化された選択の部品のための React.js.
- [react-mobile-picker](https://github.com/adcentury/react-mobile-picker) - [demo](https://react-mobile-picker.vercel.app/) - 選択ボックスコンポーネントのようなiOS。
- [react-select](https://github.com/JedWatson/react-select) - 選択制御と組み合わせて React JSについて
- [react-column-select](https://github.com/chr-ge/react-column-select) - カラムは、ビルドされたコンポーネントを選択します。 react.
- [react-select-search](https://github.com/tbleckert/react-select-search) - [demo](https://react-select-search.com/) - 軽量選択コンポーネント React

#### カラーピッカー

- [coloreact](https://github.com/elrumordelaluz/coloreact) - 小さい色のピッカーのための React.
- [react-color](https://github.com/uiwjs/react-color) - 小さな色のピッカーウィジェットコンポーネントは、 React アプリ。
- [react-colorful](https://github.com/omgovich/react-colorful) - 小さな(2,5 KB)、無依存性、高速でアクセス可能なカラーピッカーコンポーネント。
- [react-input-color](https://github.com/wangzuo/react-input-color) - React hsv色のピッカーが付いている入力色の部品。

#### トピックス

- [@anatoliygatt/heart-switch](https://github.com/anatoliygatt/heart-switch) - [demo](https://codesandbox.io/s/demo-for-anatoliygatt-heart-switch-cds5p) - 完全にテーマとアクセス可能なハート型トグルスイッチコンポーネント。
- [react-ios-switch](https://github.com/clari/react-ios-switch) - React スイッチコンポーネント。
- [react-toggle](https://github.com/instructure-react/react-toggle) - エレガントなアクセス可能なトグルコンポーネント React. また、栄光のチェックボックス。
- [ui-switch](https://github.com/yairEO/ui-switch) - 最も完全な  Toggle  コンポーネント

#### スライダー

- [react-slider](https://github.com/mpowaga/react-slider) - スライダーコンポーネント React.

#### ラジオボタン

- [react-radio-group](https://github.com/chenglou/react-radio-group) - より良いラジオボタン。

#### タイプ 選択

 ユーザが typing  で何か (例えば、タグ) を選択してみましょう。

- [react-autocomplete-input](https://github.com/yury-dymov/react-autocomplete-input) - オートコンプリート入力フィールド React.
- [react-mentions](https://github.com/effektif/react-mentions) - テキストエリアの人々を言及.
- [rich-textarea](https://github.com/inokawa/rich-textarea) - テキストを色付け、強調表示、装飾し、オートコンプリートするテキストエリア。

#### 札の入力

1つのinput に複数のタグを追加してみましょう

- [react-tag-input](https://github.com/prakhar1989/react-tags) - あなたの素晴らしいシンプルなタグ付けコンポーネント React プロジェクト。
- [react-tagsinput](https://github.com/olahol/react-tagsinput) - シンプル react タグを入力するコンポーネント。
- [react-tokeninput](https://github.com/instructure-react/react-tokeninput) - Tokeninput コンポーネント React.
- [tagify](https://github.com/yairEO/tagify) - [demo & docs](https://yaireo.github.io/tagify/) - 軽量で効率的なタグ入力コンポーネント。

#### オートサイズ入力/Textarea

- [react-input-autosize](https://github.com/JedWatson/react-input-autosize) - オートレス化入力フィールド React.
- [react-autowidth-input](https://github.com/kierien/react-autowidth-input) - 非常に構成可能で、拡張可能はホックによって造られる自動的に大きさで分類された入力分野自動的に。
- [react-textarea-autosize](https://github.com/andreypopp/react-textarea-autosize) - &lt;textarea /&gt;コンポーネント React コンテンツで成長する。

#### スター評価

- [react-rating](https://github.com/smastrom/react-rating) - [demo](https://react-rating.onrender.com/) - ゼロ依存性、高度にカスタマイズ可能な評価の部品。
- [react-awesome-stars-rating](https://github.com/fedoryakubovich/react-awesome-stars-rating) - [demo](https://react-awesome-stars-rating.herokuapp.com/) - アクセシビリティを備えたスター評価コンポーネント。
- [react-star-rating-input](https://github.com/ikr/react-star-rating-input) - React.js 0-5(以上)星に入るコンポーネント。

#### ドラッグ&ドロップ

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - リストの美しいアクセス可能なドラッグ&ドロップ React
- [react-dnd](https://github.com/gaearon/react-dnd) - ドラッグ&ドロップ React.
- [react-drag-sizing](https://github.com/fritx/react-drag-sizing) - 「サイズ変更」として React コンポーネント。
- [react-draggable](https://github.com/mzabriskie/react-draggable) - React ドラッグ可能なコンポーネント。
- [react-dragula](https://github.com/bevacqua/react-dragula) - ドラッグ&ドロップで簡単に傷つきます。
- [react-dropzone](https://github.com/okonet/react-dropzone) - シンプルなHTML5ドラッグドロップゾーン React.js.
- [react-movable](https://github.com/tajo/react-movable) - 垂直ドラッグとリストとテーブルのドロップのためのアクセシブルでミニマルな(<4kB gzipped)ライブラリ。
- [react-sortable-pane](https://github.com/bokuweb/react-sortable-pane) - ソート可能で再現可能なペインコンポーネント React.
- [neodrag](https://github.com/PuruVJ/neodrag) - ドラッグするためのマルチフレームワークライブラリ。 フレームワークを選択すると、ドラッグAPIの動作が同じになります。

#### ソート可能なリスト

ユーザがリストで注文を定義してみましょう 

- [react-anything-sortable](https://github.com/jasonslyvia/react-anything-sortable) - タッチサポートとIE8の互換性で子供をソートします。
- [sortablejs](https://github.com/SortableJS/Sortable) - ドラッグアンドドロップ、リスト内、リスト内のリオーダー可能です。

#### リッチテキストエディタ

- [alloyeditor](https://github.com/liferay/alloy-editor) - WYSIWYGエディタは、完全に書き換えられたCKEditorに基づく UI.
- [ckeditor4-react](https://github.com/ckeditor/ckeditor4-react) - 公式CKEditor 4リッチテキストエディタラッパー。
- [ckeditor5-react](https://github.com/ckeditor/ckeditor5-react) - 公式CKEditor 5リッチテキストエディタラッパー。
- [draft-js](https://github.com/facebook/draft-js) - ツイート React テキストエディタの構築のためのフレームワーク。
- [edtr-io](https://github.com/edtr-io/edtr-io) - [demo](https://edtr.io/) - [docs](https://edtr.io/docs/getting-started) - プラグイン付きのWYSIWYGインラインWebエディタ。
- [megadraft](https://github.com/globocom/megadraft) - ドラフト.jsの上に構築されたリッチテキストエディタ。
- [react-ace](https://github.com/securingsincity/react-ace) - エース(上級) Code エディタ) ラッパー。
- [react-codemirror](https://github.com/uiwjs/react-codemirror) - [demo](https://uiwjs.github.io/react-codemirror/) - コードミラーコンポーネント React.
- [react-contenteditable](https://github.com/lovasoa/react-contenteditable) - React 編集可能な内容でdivのコンポーネント。
- [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) - WYSIWYGエディタは、トップ上に構築 [DraftJS](https://draftjs.org/).
- [react-editor](https://github.com/fritx/react-editor) - 画像を差し込むことができる簡単なリッチテキストエディタ HTML.
- [react-medium-editor](https://github.com/wangzuo/react-medium-editor) - 媒体の編集者ラッパー。
- [react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor) - モナコエディタコンポーネント React.
- [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor) - シンプルなフリル code シンタックスハイライトのエディタ
- [react-quill](https://github.com/zenoamaro/react-quill) - クイルラッパー。
- [react-trumbowyg](https://github.com/RD17/react-trumbowyg) - [Trumbowyg](https://alex-d.github.io/Trumbowyg/) ラッパー。
- [remirror](https://github.com/remirror/remirror) - [demo](https://remirror.io/playground) - [docs](https://remirror.io/docs) - ProseMirrorツールキット React.
- [slate](https://github.com/ianstormtaylor/slate) - [demo](http://slatejs.org/) - [docs](https://docs.slatejs.org/) - 豊富なテキストエディタを構築するための完全にカスタマイズ可能なフレームワーク。
- [smartblock](https://github.com/appleple/smartblock) - [demo](https://appleple.github.io/smartblock/) - [docs](https://appleple.github.io/smartblock/get-started) - ProseMirrorに基づいてWYSIWYGエディタベースのブロック。
- [tiptap](https://github.com/ueberdosis/tiptap) - [demo](https://tiptap.dev/) - [docs](https://tiptap.dev/introduction) - ウェブアーティストのためのヘッドレスエディタフレームワーク。

#### Markdown ダウンロード

- [react-simplemde-editor](https://github.com/RIP21/react-simplemde-editor) - React コンポーネント用ラッパー [EasyMDE (the most fresh SimpleMDE fork)](https://github.com/Ionaru/easy-markdown-editor).
- [react-markdown-editor](https://github.com/jrm2k6/react-markdown-editor) - ツイート markdown エディタの使用 React/Reflux。
- [react-md-editor](https://github.com/uiwjs/react-md-editor) - シンプル markdown プレビュー付きエディタ、実装 React.js そして、 TypeScript.

#### 画像編集

画像操作 

- [react-avatar-editor](https://github.com/mosch/react-avatar-editor) - Facebookのような、アバター/プロフィールの映像の部品。
- [react-avatar-generator](https://github.com/JosephSmith127/react-avatar-generator) - ユーザーのアバターのための楽しいカレイドスコープを生成します。
- [react-easy-crop](https://github.com/ricardo-ch/react-easy-crop) - コンポーネントは、簡単なインタラクションで画像/ビデオをクロップ/回転させます。 タッチフレンドリー。
- [react-image-crop](https://github.com/DominicTobias/react-image-crop) - レスポンシブなイメージクロッピングツール React.
- [react-image-cropper](https://github.com/jerryshew/react-image-cropper) - イメージクロップパー。
- [react-advanced-cropper](https://github.com/advanced-cropper/react-advanced-cropper) - ツイート react cropper ライブラリを使用して、ウェブサイトに適したクロップパーを作成できます。 design.
- [react-mobile-cropper](https://github.com/advanced-cropper/react-mobile-cropper) - 使いやすいイメージクロッピングライブラリは、一般的なAndroidのクロップパーによって非常に刺激されます。 会社概要 `react-advanced-cropper`.

#### フォームコンポーネントコレクション

- [formsy-material-ui](https://github.com/mbrookes/formsy-material-ui) - ホルムシーの互換性ラッパー Material UI フォームコンポーネント。
- [formsy-react-components](https://github.com/twisty/formsy-react-components) - Aセット React JS コンポーネントはフォーマルで使うreact フォーム
- [react-input-enhancements](https://github.com/alexkuz/react-input-enhancements) - 入力制御のための強化のセット。
- [react-widgets](https://github.com/jquense/react-widgets) - &agrave;磨かれた、拡張可能およびアクセス可能な入力のlaのカルト セット。

#### ツイート

- [@anatoliygatt/numeric-stepper](https://github.com/anatoliygatt/numeric-stepper) - [demo](https://codesandbox.io/s/demo-for-anatoliygatt-numeric-stepper-mllfyl) - 完全にテーマとアクセス可能な数値ステッピングコンポーネント。
- [interweave](https://github.com/milesj/interweave) - React 安全にレンダリングするライブラリ HTML, 属性をフィルタリング, 一致するテキストの自動ラップ, 絵文字をレンダリング, など.
- [react-designer](https://github.com/react-designer/react-designer) - 簡単に構成、軽量、編集可能なベクトルグラフィック react コンポーネント。
- [react-upload-gallery](https://github.com/TPMinan/react-upload-gallery) - React アップロードイメージギャラリーのため。 ドラッグ&ドロップ、ソート可能、カスタマイズ。

#### シンタックスハイライト

- [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter) - Prismjs または Highlightjs AST のコンポーネントをインラインスタイルで強調表示します。

## UI レイアウト

**[`Back to top ⬆️`](#table-of-contents)**

アプリのUI をレイアウトする  Components

- [autoresponsive-react](https://github.com/xudafeng/autoresponsive-react) - 自動レスポンシブグリッドレイアウトライブラリ。
- [hedron](https://github.com/JSBros/hedron) - スタイル化されたコンポーネントによって動力を与えられる nofrills の flexbox の格子システム。
- [m-react-splitters](https://github.com/martinnov92/React-Splitters) - スプリッタコンポーネント, 書かれています。 TypeScript.
- [muuri-react](https://github.com/Paol-imi/muuri-react) - [demo](https://1czo5.csb.app/) - [docs](https://paol-imi.github.io/muuri-react) - レスポンシブ、ソート可能、フィルタブル、ドラッグ可能なグリッドレイアウト。
- [react-grid-layout](https://github.com/STRML/react-grid-layout) - レスポンシブなブレークポイントでドラッグ可能なグリッドレイアウト React.
- [react-layman](https://github.com/Jeshwin/react-layman) - [demo](https://jeshwin.github.io/react-layman/) - タブ付きの動的タイルレイアウトマネージャ
- [react-masonry-component](https://github.com/eiriklv/react-masonry-component) - @desandro's Masonry 用の Wrapper です。
- [react-reflex](https://github.com/leefsmp/Re-Flex) - 高度なフレックスレイアウトコンテナコンポーネント React ウェブアプリケーション。
- [react-spaces](https://github.com/aeagle/react-spaces) - [demo/docs](https://www.allaneagle.com/react-spaces/demo/) - 固定、再構成可能、スクロール可能な部品。
- [react-stonecutter](https://github.com/dantrain/react-stonecutter) - グリッドレイアウトコンポーネントのアニメーション化
- [react-colrow](https://github.com/phphe/react-colrow) - レスポンシブグリッドレイアウトコンポーネント。 会社概要 css フレックスボックス。 fractionの幅、自動成長を支えて下さい。
- [react-schematic](https://github.com/umeshmk/react-schematic) - [demo](https://umeshmk.github.io/react-schematic) - 任意のテーマ構成のオーバーヘッドなしでスタイルされた回路図を使用してレスポンシブレイアウトを構築

## UI アニメーション

**[`Back to top ⬆️`](#table-of-contents)**

アニメーション移行 

- [data-driven-motion](https://github.com/tkh44/data-driven-motion) - データを簡単にアニメーション化できます。
- [react-animatable](https://github.com/inokawa/react-animatable) - WebアニメーションAPIを使用したアニメーションライブラリ。
- [react-anime](https://github.com/stelatech/react-anime) - 超簡単なアニメーションライブラリ。
- [react-flip-move](https://github.com/joshwcomeau/react-flip-move) - 楽しいアニメーション DOM FLIP技術を用いた変更(リスト再オーダー)
- [react-gsap-enhancer](https://github.com/azazdeaz/react-gsap-enhancer) - パワーを最大限に活用 React そして一緒にGSAP。
- [react-tsparticles](https://github.com/matteobruni/tsparticles/blob/master/components/react/README.md) - インタラクティブなパーティクルアニメーションを簡単に作成できる軽量コンポーネント
- [react-motion](https://github.com/chenglou/react-motion) - アニメーションの問題を解決する春。
- [react-mt-svg-lines](https://github.com/moarwick/react-mt-svg-lines) - Wrapper は、SVG でラインストロークをアニメーション化します。
- [react-router-transition](https://github.com/maisano/react-router-transition) - トランジションは、 react-router、動力を与えられる react-感情。
- [react-spring](https://github.com/react-spring/react-spring) - 春の物理ベースのアニメーションライブラリ。
- [react-ts-typewriter](https://github.com/gerardmarquinarubio/ReactTypewriter) - [demo](https://codesandbox.io/s/react-typewriter-example-mgyclf) - どんなテキストでも使いやすく、カスタマイズ可能なタイプライター効果。
- [framer-motion](https://github.com/framer/motion) - アニメーションとジェスチャーライブラリ。
- [react-spark-scroll](https://github.com/gilbox/react-spark-scroll) - スクロールベースのアクションとアニメーション react.
- [react-track](https://github.com/gilbox/react-track) - 位置を追跡する DOM 要素。 クールなアニメーションを作成します。
- [react-transitive-number](https://github.com/Lapple/react-transitive-number) - 数値文字列に遷移効果を適用します。, ラ 古いGrouponタイマー.
- [react-web-animation](https://github.com/bringking/react-web-animation) - React Web Animations API のコンポーネント -.
- [auto-size-transition](https://github.com/DualWield/auto-size-transition) - 内部の子供のサイズに応じて動的にスケールするコンポーネント
- [react-particles-bg](https://github.com/lindelof/particles-bg) - 粒子の背景。
- [gooey-react](https://github.com/luukdv/gooey-react) - [demo/docs](https://gooey-react.netlify.app/) - gooeyの効果のための React、形のblobbing/metballsに使用する。
- [react-voodoo](https://github.com/react-voodoo/react-voodoo) - [demo/samples](https://github.com/react-voodoo/react-voodoo-samples) - Additive アニメーションエンジンは、複雑な Android/iOs のようなアニメーションを可能にし、SSR のスライダをレンダリングし、予測的な慣性、マルチタッチなど

### パララックス

- [simple-parallax-js](https://github.com/geosigno/simpleParallax.js) - [demo](https://simpleparallax.com) - パララックス効果を得る最も簡単な方法 React そして、 JavaScript イメージ
- [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt) - [demo](https://mkosir.github.io/react-parallax-tilt) - 簡単にコンポーネントにパララックスチルトホバー効果を適用します。

## UI フレームワーク

**[`Back to top ⬆️`](#table-of-contents)**

### 責任ある

コンポーネントのセット+レスポンシブレイアウトシステム 

- [ant-design](https://github.com/ant-design/ant-design) - [demo/docs](https://ant.design/docs/react/introduce) - A UI Design 中国からの言語。 個人のお客様 [components](http://react-component.github.io/) 利用できる。
- [atlaskit](https://atlaskit.atlassian.com/packages) - アトラスシアンの公式 UI ライブラリ、  badge  から  tree table  までのコンポーネント。
- [base web](https://baseweb.design) - ベースウェブは、Webプロダクトの立ち上げ、進化、統一の基盤です。
- [carbon](https://github.com/carbon-design-system/carbon) - [demo/docs](https://www.carbondesignsystem.com/) - A design IBMが構築したシステム。
- [cdbreact](https://github.com/Devwares-Team/cdbreact) - [demo](https://www.devwares.com/product/contrast) - [docs](https://www.devwares.com/docs/contrast/react/index) - エレガント UI モバイルファースト、レスポンシブなWebサイト、Webアプリの構築のためのキットライブラリと再利用可能なコンポーネント。
- [chakra-ui](https://github.com/chakra-ui/chakra-ui) - [demo/docs](https://chakra-ui.com) - 簡単、モジュラー及びアクセス可能 UI あなたのコンポーネント React アプリケーション。
- [ChatUI](https://github.com/alibaba/ChatUI) - [demo/docs](https://chatui.io/) - ザ・ UI design 言語と言語 React 会話ライブラリ UI
- [CoreUI for React](https://github.com/coreui/coreui-react) - [demo/docs](https://coreui.io/react) - オープンソース UI コンポーネントライブラリ。
- [evergreen](https://github.com/segmentio/evergreen) - [demo/docs](https://evergreen.segment.com) - エバーグリーン React UI セグメント別フレームワーク
- [fluentui](https://github.com/microsoft/fluentui) - UXフレームワークは、共有する美しいクロスプラットフォームアプリを作成する code, design, 相互作用の動作.
- [gestalt](https://github.com/pinterest/gestalt) - [demo/docs](https://pinterest.github.io/gestalt/#/) - Pinterestの対応コンポーネントのセット design 言語。
- [grommet](https://github.com/grommet/grommet) - 企業アプリケーション向けの最も高度なUXフレームワーク。
- [kokonut-ui](https://github.com/kokonut-labs/kokonutui) - 自由な現代およびカスタマイズ可能 UI コンポーネント。
- [Mantine](https://github.com/mantinedev/mantine) - [demo/docs](https://mantine.dev/) - 100以上のホックおよび部品が付いている十分に特色にされた図書館 native ダークテーマのサポート
- [orbit](https://github.com/kiwicom/orbit) - 旅行指向のプロジェクトを造るための部品。
- [flowbite-react](https://github.com/themesberg/flowbite-react) - オープンソース UI コンポーネントライブラリに基づく React, Tailwind CSSフロービト
- [primereact](https://github.com/primefaces/primereact) - A 完了 UI フレームワーク 50以上のコンポーネント material, bootstrap そして注文の主題。
- [radix-ui](https://www.radix-ui.com/) - 高品質を築き上げるための非加工、アクセス可能なコンポーネント design システムとWebアプリ。
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Bootstrap 組み立てられた部品 React.
- [react-foundation](https://github.com/digiaonline/react-foundation) - 基礎として React コンポーネント。
- [reakit](https://github.com/ariakit/ariakit) - [demo/docs](https://reakit.io/docs/button/) 豊富なWebアプリの構築
- [searchkit](https://github.com/searchkit/searchkit) - React UI コンポーネント/ウィジェット。 Elasticsearch で素晴らしい検索体験を構築する最も簡単な方法。
- [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React) - オフィシャル・セマンティックUI-React 統合。
- [semi-design](https://github.com/DouyinFE/semi-design) - [demo/docs](https://semi.design/) - 現代、広範囲、適用範囲が広い design システム。
- [shadcn/ui](https://github.com/shadcn-ui/ui) - [demo](https://ui.shadcn.com/examples/mail) - [docs](https://ui.shadcn.com/docs) - あなたのアプリにコピーして貼り付けることができる美しく設計されたコンポーネント。
- [shineout](https://github.com/sheinsight/shineout) - [demo](https://shine.wiki/1.4.x/en/components/GetStart) - コンポーネントの中国語対応セット:フォーム要素、ナビゲーション、テーブル、ツリー、ツリー選択ドロップダウンなど
- [Tremor](https://github.com/tremorlabs/tremor-raw) - [demo](https://tremor.so/charts) - [docs](https://tremor.so/docs/getting-started/installation) - チャートとダッシュボードをビルドするためのオープンソースコンポーネント。
- [untitled-ui-react](https://github.com/untitleduico/react) - [demo](https://www.untitledui.com/react/) - 組み立てられたコンポーネントの美しいコレクション React Aria そして、 Tailwind CSS.

#### Material Design

- 🚀 [Material UI](https://github.com/mui/material-ui) - コンポーネントの完全なスイート。 自分で構築 design システム、または開始 Material Design.
  - [Autocomplete](https://mui.com/material-ui/react-autocomplete/) - アクセシブルなオートコンプリート、コンボボックス、マルチセレクト
  - [Material Icons](https://mui.com/material-ui/material-icons/) - 1,000+SVG(SVG) material アイコン。
  - [Modal](https://mui.com/material-ui/react-modal/) - アクセシブルなモーダル ダイアログ コンポーネント。
  - [Slider](https://mui.com/material-ui/react-slider/) - アクセシブルなスライダーコンポーネント。
  - [Table](https://mui.com/material-ui/react-table/) - ソート、選択、パジネーション、仮想化したテーブル。
  - [Tree View](https://mui.com/material-ui/react-tree-view/) - アクセシブルツリービューコンポーネント React.
- [react-essence](https://github.com/Evo-Forge/Essence) - エッセンシャル - エッセンシャル Material Design フレームワーク
- [react-materialize](https://github.com/react-materialize/react-materialize) - Material design お問い合わせ react、材料化物によって動力を与えられる。
- [react-toolbox](https://github.com/react-toolbox/react-toolbox) - Aセット React Googleのコンポーネント実装 Material Design.
- [mdbootstrap](https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design) - React Bootstrap お問い合わせ Material Design

### モバイル

- [antd-mobile](https://github.com/ant-design/ant-design-mobile) - 設定可能なモバイル UI 中国から。
- [Ionic React](https://ionicframework.com/blog/announcing-ionic-react/) - Ionic Framework:Android、デスクトップ、プログレッシブWebアプリを1つで簡単に構築 code ベース。
- [OnsenUI](https://github.com/OnsenUI/OnsenUI/) - [demo/docs](https://onsen.io/v2/guide/react/) - モバイルアプリフレームワークと Material そしてフラット(iOS)のデザイン。 Webコンポーネントに基づく。

### コンポーネントコレクション

- [blueprint](https://github.com/palantir/blueprint) - [demo](https://blueprintjs.com/) - [docs](https://blueprintjs.com/docs/) - UI デスクトップ(モバイルではない)アプリケーション用の複雑なデータ密なWebインターフェイスを構築するツールキット。
- [dataminr-react-components](https://github.com/dataminr/react-components) - 再利用可能な回収 React コンポーネントとユーティリティ機能。
- [shards-react](https://github.com/DesignRevision/shards-react) - [docs/demo](https://designrevision.com/docs/shards-react/getting-started) - 美しくモダンな React design システム。 フリーミウム
- [aframe-react](https://github.com/ngokevin/aframe-react) - A-Frame で仮想現実体験を構築し、 React.
- [react-admin](https://github.com/marmelab/react-admin) - REST および GraphQL サービスのトップで管理者ユーザーエクスペリエンスを構築します。
- [refine](https://github.com/pankod/refine) - [demo](https://example.refine.dev) - [docs](https://refine.dev/docs) - データ集約型アプリケーションをゼロに構築 それはAntで出荷します Design 企業レベルのシステム UI ツールキット。
- [matrix-card](https://github.com/MehmetKaplan/matrix-card) - [demo](https://mehmetkaplan.github.io/matrix-card/) - 行列の雨スタイルのカードを生成する最も簡単なコンポーネント。
- [rsuite](https://github.com/rsuite/rsuite) - [demo/docs](https://rsuitejs.com/) - 「エンタープライズシステム製品」のコンポーネントのスイート。
- [lens-ui](https://github.com/luciancaetano/lens-ui) - [docs](https://github.com/luciancaetano/lens-ui/blob/main/docs/introduction.md) - シンプルさに焦点を当てたコンポーネントのスーツ。
- [Tailwindadmin](https://github.com/Tailwind-Admin/free-tailwind-admin-dashboard-template) - [docs](https://tailwind-admin.com/components) - 既製のShadCNのコレクション UI 直接接続できるコンポーネント React/Next.js プロジェクト。

## UI ユーティリティ

**[`Back to top ⬆️`](#table-of-contents)**

### レポーター

レポート計算スタイル 

#### 可視性レポーター

コンポーネントが見える/hidden のときの報告

- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - React Intersection Observer API の実装。
- [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) - センサーコンポーネント。
- [react-waypoint](https://github.com/brigade/react-waypoint) - ツイート React 要素にスクロールするときに関数を実行するコンポーネント。

#### 測定レポーター

要素の測定とレポートの決定

- [react-component-queries](https://github.com/ctrlplusb/react-component-queries) - 幅および/または高さに基づいて、コンポーネントにプロップを提供します。
- [react-container-dimensions](https://github.com/okonet/react-container-dimensions) - 要素のサイズを検知する Wrapper コンポーネント。
- [react-dimensions](https://github.com/digidem/react-dimensions) - React コンテナの寸法を取得するには、より高い順序コンポーネント。
- [react-height](https://github.com/nkbt/react-height) - コンポーネント・ラッパーは、子供要素の高さを特定し、報告します。
- [react-measure](https://github.com/souporserious/react-measure) - 計算の計算 React コンポーネント。
- [react-sizeme](https://github.com/ctrlplusb/react-sizeme) - あなたの React 幅と高さを意識した部品。

### デバイス入力

アクションに入力したユーザを強制する 

#### キーボードイベント

- [react-hotkeys](https://github.com/chrisui/react-hotkeys) - 決定的なホットキーとフォーカスエリア管理のための React.
- [react-key-handler](https://github.com/ayrton/react-key-handler) - React キーボードイベントを処理するコンポーネント。
- [react-keydown](https://github.com/glortho/react-keydown) - 軽量のキーダウンのラッパーのための React コンポーネント。
- [react-shortcuts](https://github.com/avocode/react-shortcuts) - キーボードショートカットを1か所から管理します。
- [useKeyCapture](https://github.com/pranesh239/use-key-capture) - ターゲット/グローバルのキープレスリスナーを容易にするためのカスタムホック。
- [react-keyboard-navigator](https://github.com/zheeeng/react-keyboard-navigator) - スイート React コンポーネントとキーボードから兄弟コンポーネントを選択するためのホック。

#### スクロールイベント

- [react-scroll-components](https://github.com/jeroencoumans/react-scroll-components) - コンポーネントのセット react ページのスクロールに。

#### タッチスワイプ

- [react-swipe](https://github.com/voronianski/react-swipe) - Swipe.js を React コンポーネント。

#### マウスイベント

- [react-hook-mighty-mouse](https://github.com/mkosir/react-hook-mighty-mouse) - [demo](https://mkosir.github.io/react-hook-mighty-mouse) - 選択した要素でマウスイベントを追跡するホック。

### メタタグ

メタタグの設定、 <title>, 子供の子供 <head>_

- [react-helmet-async](https://github.com/staylor/react-helmet-async#readme) - スレッドセーフヘルメット React 16+ 友達
- [react-helmet](https://github.com/nfl/react-helmet) - ドキュメントヘッドマネージャー React.

### サイトマップ

任意で要素をレンダリングする DOM ノード

- [react-layer-stack](https://github.com/fckt/react-layer-stack) - シンプルながら、ユビキタス力強く、アゴスティックなレイヤーシステム React.
- [react-portal](https://github.com/tajo/react-portal) - React modals、lightboxes、ロードバーの輸送のためのコンポーネント...ドキュメント.body.

### ユーザー行動をテストする

A/Bテスト、実験、... 

- [react-experiments](https://github.com/HubSpot/react-experiments) - React 実装のためのコンポーネント UI 実験。

## Code Design

**[`Back to top ⬆️`](#table-of-contents)**

助ける図書館 code デザイン 

### データストア

データフロー/データ管理/データストア/コンポーネントの状態/データフロー 

- [baobab-react](https://github.com/Yomguithereal/baobab-react) - React Baobabの統合。
- [cerebral](https://github.com/cerebral/cerebral) - 独自のデバッガを持つステートコントローラー。
- [effector-react](https://github.com/effector/effector) - React 効果的なマルチストア・ステート・マネージャーのためのバインディング。
- [fireproof](https://github.com/fireproof-storage/fireproof) - [demo](https://fireproof.storage/try-free/) - [docs](https://use-fireproof.com/docs/welcome) 純粋なJS、ゼロ依存性、CRDTデータベース - ブラウザで実行し、任意のクラウドまたはバックエンドに接続します
- [RxDB](https://rxdb.info/) - [demo](https://github.com/pubkey/rxdb/tree/master/examples/react) - [docs](https://rxdb.info/quickstart.html) ファースト、ローカル、リアクティブデータベース JavaScript アプリケーション
- [fluxible](https://github.com/yahoo/fluxible) - ユニバーサルフラックスアプリケーション用のプラグイン可能なコンテナ。
- [kea](https://github.com/mariusandra/kea) - 高いレベルのアーキテクチャ React アプリ。
- [react-i13n](https://github.com/yahoo/react-i13n) - 実行者、スケーラブルでプラグイン可能なアプローチで、 React アプリケーション。
- [react-redux](https://github.com/reactjs/react-redux) - 公式HP React 結合のための Redux.
- [redux-batched-actions](https://github.com/tshelburne/redux-batched-actions) - 単一の加入者通知の下でアクションを減らすために、減速+アクション。
- [redux](https://github.com/reactjs/redux) - 予測可能な状態コンテナ JavaScript アプリ。
- [reselect](https://github.com/reactjs/reselect) - セレクターライブラリ Redux.
- [resourcerer](https://github.com/SiftScience/resourcerer) - REST API のデータ取得フレームワークの決定
- [synergies](https://github.com/lukasbach/synergies) - [docs](https://synergies.js.org) 再利用可能な作成のための実行者と分散コンテキストステートライブラリ React 原子のコンテキストピースを合成することにより、状態ロジック。
- [zustand](https://zustand.surge.sh/) - [docs](https://github.com/pmndrs/zustand) - 単純化されたフラックスの原則およびボイラープレートなしのホックAPIを使用して速い熊骨の州管理の解決。
- [teaful](https://github.com/teafuljs/teaful) - 小さく、簡単で、強力 React 状態管理

### フォームロジック

- [data-driven-forms](https://github.com/data-driven-forms/react-forms) - すべての機能でフォームを構築するための宣言的な方法。
- [formik](https://github.com/jaredpalmer/formik) - フォームを破損せずに作成し、検証を容易にサポートします。
- [formsy-react](https://github.com/formsy/formsy-react/) - フォーム入力ビルダーとバリデータ React JSについて
- [Phormal](https://github.com/phormal/phormal) - [Docs & Demos](https://phormal.dev/getting-started/react) - レスポンシブ、組み込みの検証、ダークモードのサポート、右から左の言語の多言語フォーム。
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - React 手間をかけずにフォーム検証のためのホック。
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) - ツイート React JSONSchema から Web フォームを作成するコンポーネント。
- [react-client-validation](https://github.com/0529bill/react-client-validation) - シンプルで超軽量な検証 React.
- [react-final-form](https://github.com/final-form/react-final-form) - サブスクリプションベースのフォーム状態管理
- [react-formawesome](https://github.com/MAKARD/react-formawesome) - 素晴らしいフォームを作成するための複雑なライブラリ。
- [surveyjs](https://github.com/surveyjs/survey-library) - 高度な調査とフォームライブラリ
- [Formily](https://github.com/alibaba/formily) - 高性能、拡張可能および Typescript よくある質問
- [hook-form-react](https://github.com/luoanb/hook-form-react) - [docs](https://luoanb.github.io/hook-form-react) - 軽量、依存性のないソリューション React フォーム検証のためのホック。

### ルーター

- [react-router-component](https://github.com/STRML/react-router-component) - 決定的なルータコンポーネント React.
- [react-router-scroll](https://github.com/taion/react-router-scroll) - React ルーターのスクロール管理。
- [react-router](https://github.com/reactjs/react-router) - 完全なルーティングライブラリ React.
- [redux-first-history](https://github.com/salvoravida/redux-first-history) - Redux 最初の歴史 - Redux 歴史の結合サポート react-router - @reach/router - ウーター
- [universal-router](https://github.com/kriasoft/universal-router) - isomorphicのシンプルなミドルウェアスタイルのルータ JavaScript ウェブアプリ
- [wouter](https://github.com/molefrog/wouter) - 最小限に優しい〜1.3KBルーティングライブラリ。 他にはないが、ホック。
- [tanstack-router](https://github.com/TanStack/router) - 内蔵キャッシュとタイプセーフルータ URL 状態管理

### サーバからのプロップ

Component プロパティをネットワーク上で非同期的に取得 

- [react-refetch](https://github.com/heroku/react-refetch) - シンプルで宣言的、そしてデータの取得可能な方法 React コンポーネント。
- [redux-connect](https://github.com/makeomatic/redux-connect) - 非同期プロップを解決するためのデコレータを提供 react-ルーター。
- [axios-react](https://github.com/soroushchehresa/axios-react) - HTTP クライアントコンポーネント React.

### サーバとのコミュニケーション

- [apollo-client](https://github.com/apollostack/apollo-client) - 任意の GraphQL サーバーおよび UI フレームワーク。
- [react-relay](https://github.com/facebook/relay) - リレーは JavaScript データドリブンの構築フレームワーク React アプリケーション。
- [query](https://github.com/TanStack/query) - [docs](https://tanstack.com/query/v4) 強力な非同期状態管理、TS/JS のサーバー状態ユーティリティとデータ取得、 React、固体、スヴェルトおよび Vue.

### CSS / スタイル

- [aesthetic](https://github.com/milesj/aesthetic) - 強力なタイプ安全、フレームワークの非浸透、 CSS-in-JS コンポーネントをスタイリングするためのライブラリ、オブジェクトをプレーンするか、スタイルシートをインポートするか、または外部クラス名を参照するだけです。
- [aphrodite](https://github.com/Khan/aphrodite) - it&#39;s インライン スタイル, しかし、彼らは動作します!.
- [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer) - インラインスタイルオブジェクトの実行時間オートプレフィクサ。
- [@classmatejs/react](https://github.com/richard-unterberg/classmatejs/tree/master/packages/react) - クラス名は、スタイルされたコンポーネントや、cva の variant の砂糖などの構文を持つコンポーネントビルダーを集中しました。
- [react-container-query](https://github.com/d6u/react-container-query) - モジュラー応答コンポーネント。
- [react-responsive](https://github.com/contra/react-responsive) - 媒体の問い合わせ react 応答性のため design.
- [reactponsive](https://github.com/jmlweb/reactponsive) - 応答性の部品およびホック。
- [styled-components](https://github.com/styled-components/styled-components) - コンポーネントの年齢に応じた視覚的プリミティブ。
- [stitches](https://github.com/stitchesjs/stitches) - CSS-in-JS は、ほぼゼロランタイム、SSR、多変量サポートを備えた。

### HTML テンプレート

- [jsx-control-statements](https://github.com/AlexGilleran/jsx-control-statements) - Neater もし と のために React JSXの特長

### Isomorphic アプリ

- [hypernova](https://github.com/airbnb/hypernova) - サーバ側のレンダリングのためのサービス JavaScript ビュー。
- [isomorphic-style-loader](https://github.com/kriasoft/isomorphic-style-loader) - イソモルフィック CSS Webpack 用のスタイルローダー。
- [react-server](https://github.com/redfin/react-server) - React 速いページの読み込みをブレイズするためのサーバーレンダー付きのフレームワーク。
- [rill](https://github.com/rill-js/rill) - ユニバーサルWebアプリケーションフレームワーク。
- [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) - Webpack 組み込みアプリケーション用のサーバー側レンダリング(例: React).

### ボイラープレート

足場/始動機のキット/Yeomanの発電機/積み重ねのensemble/種 

- [create-react-app](https://github.com/facebookincubator/create-react-app) - 作成する React ビルド構成のないアプリ。
- [crisp-react](https://github.com/winwiz1/crisp-react) - エクスプレス統合 TypeScript 複数の鉱泉および下落回避のためのサポートを使って。
- [cra-template-redux-auth-starter](https://github.com/Nilanth/cra-template-redux-auth-starter) - ツイート Redux CRAのためのauthの始動機のボイラー版。
- [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate) - デスクトップアプリでのライブ編集開発
- [elegant](https://github.com/elegantframework/elegant-cli) - [docs](https://www.elegantframework.com/docs/installation) - [demo](https://www.elegantframework.com/) - シンプル React 美しく表現的なWebアプリケーションを迅速に構築するためのフレームワーク Next.js, Tailwind CSSと Markdown ローディング。
- [extensive-react-boilerplate](https://github.com/brocoders/extensive-react-boilerplate) - ボイラープレートと Next.js, Auth (サインイン, サインアップ, パスワードを再設定, 確認メール, トークンをリフレッシュ), Material UI, React ホックの形態, I18N、ファイルアップロード(ローカルおよびアマゾンS3の運転者を支えて下さい)、テスト、CI。
- [generator-starhackit](https://github.com/FredericHeem/starhackit) - フルスタックスターターキット。
- [nwb](https://github.com/insin/nwb) - CLI ツールと devDependency for React app &amp;コンポーネントとnpmモジュール。
- [nx](https://nx.dev) - 次世代ビルドシステム、ファーストクラスのモノレポサポートと強力な統合。
- [PBandJ](https://github.com/moishinetzer/pbandj) - Zero-Config 再利用可能なコンポーネントフレームワーク。
- [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) - あなたの次ののための最小限のライブ編集ボイラープレート ReactJS プロジェクト
- [rockpack](https://github.com/AlexSergey/rockpack) - 作成のための簡単なソリューション React SSR、bundling、ライニング、5分以内のテストとアプリケーション。
- [create-react-dependency](https://github.com/andrelmlins/create-react-dependency) - 作成する react ビルド構成なしの依存関係。
- [phoenix](https://github.com/Sazito/phoenix) - シンプルなボイラプレートで、あなたを助けます react サーバサイドレンダリングとローカリゼーションのサポート
- [react-enterprise-starter-kit](https://github.com/anandgupta193/react-enterprise-starter-kit) - 非常にスケーラブルでパフォーマンな素晴らしい React 非常に容易な維持できるコードベースが付いている企業の適用のための始動機のキット。
- [Tailwindadmin](https://tailwind-admin.com/) - 自由な Shadcn のダッシュボードのテンプレートは造りました React そして、 Tailwind CSS 複数のフレームワークのサポートが付属しています

### ツイート

- [react-inlinesvg](https://github.com/matthewwithanm/react-inlinesvg) - SVG ローダコンポーネント ReactJS.
- [react-godfather](https://github.com/kapolos/react-godfather) - 機能的なコンポーネントを、ホックなしで書き込む新しい方法。
- [react-vvm](https://github.com/behnamrhp/React-VVM) - MVVM の新しいアプローチ React、心配のきれいな分離を強制するために、スケーラブルのためのボイラー版および自動再レンダリングの最適化を減らして下さい UI ロジック。
- [react-call](https://github.com/desko27/react-call) - お問い合わせ React コンポーネント。
- [redux-auth-patch](https://github.com/lynndylanhurley/redux-auth) - 完全なトークン認証システム react + redux isomorphic レンダリングをサポートする。
- [redux-search](https://github.com/treasure-data/redux-search) - Redux クライアント側の検索のためのバインディング。
- [tcomb-react](https://github.com/gcanti/tcomb-react) - PropTypes の代替構文。
- [react-universal-hooks](https://github.com/salvoravida/react-universal-hooks) - :tada: サポート react どこでもホック(機能かクラスの部品)。

## ユーティリティ

**[`Back to top ⬆️`](#table-of-contents)**

- [qrcode.react](https://github.com/zpao/qrcode.react) - A &lt;QRCode/&gt; 使用するコンポーネント React.
- [`<qr-code>`](https://github.com/bitjson/qr-code) – A no-dependencies, customizable, animate-able, SVG-based `<qr-code>` element.
- [react-children-utilities](https://github.com/fernandopasik/react-children-utilities) - 延長utilsのための React.お子様
- [react-media](https://github.com/ReactTraining/react-media) - ツイート CSS メディアクエリコンポーネント React.
- [react-middle-ellipsis](https://github.com/bluepeter/react-middle-ellipsis) - [demo](https://bluepeter.github.io/react-middle-ellipsis/) - 端の代わりに中間に長い文字列をトランクします。
- [react-translate-component](https://github.com/martinandert/react-translate-component) - 多言語/ローカライズされたテキストコンテンツ。

### i18n

国際化/L10n/ローカリゼーション/翻訳 

- [react-i18next](https://github.com/i18next/react-i18next) - 国際化のための react 正しい。 i18next の使用 i18n エコシステム。
- [react-intl](https://github.com/yahoo/react-intl) - 国際化 React アプリ。
- [react-localized](https://github.com/fakundo/react-localized) - 国際化のための React コンポーネントに基づく `gettext` フォーマット。
- [react-translate-maker](https://github.com/CherryProjects/react-translate-maker) - ユニバーサル国際化(Universal internationalization)i18n) オープンソースライブラリ React.
- [react-intl-universal](https://github.com/alibaba/react-intl-universal) - [demo](https://g.alicdn.com/alishu/common/0.0.95/intl-example/index.html) 国際化 React アプリ。 だけでなく、 React.Component は、Vanilla JS にも使えます。
- [@tolgee/react](https://github.com/tolgee/tolgee-js/tree/main/packages/react) - [docs](https://tolgee.io/docs/web/using_with_react/installation) - Webベースのローカリゼーションツールにより、ユーザーは直接翻訳できます。 React 開発アプリ
- [js-lingui](https://github.com/lingui/js-lingui) - [docs](https://lingui.js.org) - 読みやすく、自動化され、最適化された(5 kb)の国際化 JavaScript.

### フレームワーク結合/統合

- [backbone-react-component](https://github.com/magalhas/backbone-react-component) - バックボーンモデルを自動的に差し込むニフティ接着剤のビット。
- [elm-react-component](https://github.com/KtorZ/elm-react-component) - ツイート React Elm モジュールをラップするコンポーネント React アプリケーション。
- [gl-react](https://github.com/ProjectSeptemberInc/gl-react) - OpenGL / WebGLのバインディング React 画像やコンテンツに対する複雑な効果を実装します。
- [react-backbone](https://github.com/jhudson8/react-backbone) - バックボーン・アウェア・ミキサー react たくさんあります。
- [react-d3-library](https://github.com/react-d3-library/react-d3-library) - D3 を使用したオープンソースライブラリ React.
- [react-elm-components](https://github.com/evancz/react-elm-components) - ログイン React エルムのコンポーネント。
- [react-famous](https://github.com/pilwon/react-famous) - React Famo.usへの橋。
- [react-localstorage](https://github.com/STRML/react-localstorage) - Facebook&#39;s のためのシンプルなコンポーネント化された localstorage 実装 React.
- [react-lottie-player](https://github.com/mifi/react-lottie-player) - [demo](https://mifi.github.io/react-lottie-player/) - 決定的な宝くじアニメーションプレーヤー。
- [react-on-rails](https://github.com/shakacode/react_on_rails) - インテグレーション React + ユニバーサル(Isomorphic)アプリを構築するためのWebpack + Rails。
- [react-three-renderer](https://github.com/toxicFork/react-three-renderer) - 3.jsキャンバスにレンダー React.
- [react-threejs](https://github.com/fritx/react-threejs) - 最小結合間 React ・3.js
- [reactfire](https://github.com/firebase/reactfire) - ReactJS 簡単にFirebaseの統合のためのmixin。
- [reactive-elements](https://github.com/PixelsCommander/ReactiveElements) - 使用を許可します React.js コンポーネントとして HTML 要素(webコンポーネント)。
- [react-unity-webgl](https://github.com/elraccoone/react-unity-webgl) - ビルトインイベントシステムを用いた双方向通信によるUnityのインターグレーション

### 第三者サービスとの連携

- [react-ga](https://github.com/react-ga/react-ga) - React Google Analytics モジュール。
- [react-google-analytics](https://github.com/hzdg/react-google-analytics) - Googleの分析コンポーネント。
- [react-google-autocomplete](https://github.com/ErrorPro/react-google-autocomplete) - Google は API コンポーネントとホックを配置します。
- [react-recaptcha](https://github.com/appleboy/react-recaptcha) - ツイート react.js Google用のreCAPTCHA。
- [react-stripe-checkout](https://github.com/azmenak/react-stripe-checkout) - stripe&#39;s checkout.js を a としてロードする react コンポーネント。 チェックアウトを使用する最も簡単な方法 React.
- [redux-segment](https://github.com/rangle/redux-segment) - Segment.io アナリティクスの統合 redux.
- [react-slack-notification](https://github.com/Nilanth/react-slack-notification) - メッセージとエラーログをSlackチャンネルに直接送信します。
- [react-firebase-hooks](https://github.com/csfrequency/react-firebase-hooks) - アプリケーション内の firebase を統合するホック。

## パフォーマンス

**[`Back to top ⬆️`](#table-of-contents)**

### UI

- [inferno](https://github.com/trueadm/inferno) - 非常に速く、 React-いいね JavaScript 現代的なユーザー インターフェイスを造るためのライブラリ。
- [react-fastclick](https://github.com/JakeSidSmith/react-fastclick) - 速い接触でき事のためのでき事 React.
- [react-static-container](https://github.com/reactjs/react-static-container) - 静的コンテンツを効率的にレンダリングします。

#### トピックス

- [react-perf-tool](https://github.com/RamonGebben/react-perf-tool) - あなたの破壊的なパフォーマンス React アプリケーション。
- [react-render-visualizer](https://github.com/redsunsoft/react-render-visualizer) - レンダリングの視覚化装置のための ReactJS.

#### レイジー負荷

- [react-infinite-grid](https://github.com/ggordan/react-infinite-grid) - ツイート React 要素のグリッドをレンダリングするコンポーネント。
- [react-infinite](https://github.com/seatgeek/react-infinite) - UITableViewに基づくブラウザ対応の効率的なスクロールコンテナ。
- [react-lazy-load](https://github.com/loktar00/react-lazy-load) - React ビューポートを入力すると、子要素をレンダーするコンポーネント。
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload) - コンポーネント、イメージ、またはパフォーマンスの重要事項をレイジーロードします。
- [react-virtualized](https://github.com/bvaughn/react-virtualized) - React 大規模なリストと表形式のデータを効率的にレンダリングするためのコンポーネント。

### アプリサイズ

- [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) - 不要な削除 React propTypes。
- [react-lite](https://github.com/Lucifier129/react-lite) - 導入事例 React 小さなスクリプトサイズを最適化します。

### サーバサイドレンダリング

- [iSSR](https://github.com/AlexSergey/issr) - あなたの移動する最も簡単な方法 React Server-Sideレンダリングへのアプリケーション。 副作用を扱い、状態を同期させます。
- [react-esi](https://github.com/dunglas/react-esi) - SSRのパフォーマンスを高めるライブラリ React Edge Side Includes (ESI) フラグメントとしてコンポーネント

## Dev ツール

**[`Back to top ⬆️`](#table-of-contents)**

### テスト

- [enzyme](https://github.com/airbnb/enzyme) - JavaScript ユーティリティのテスト React.
- [jest-cli](https://github.com/facebook/jest) - 痛みのない JavaScript テスト。
- [react-unit](https://github.com/pzavolinsky/react-unit) - 軽量ユニットテストライブラリ ReactJS.
- [redux-test-recorder](https://github.com/conorhastings/redux-test-recorder) - ツイート redux 減力剤を自動生成するミドルウェア ui インタラクション。
- [rut](https://github.com/milesj/rut) - React 容易になされるテスト `react-test-renderer`. サポート DOM そして注文のレンダリング。
- [unexpected-react](https://github.com/bruderstein/unexpected-react) - 予期しないプラグインでテストを完全に有効化 React 仮想 DOMおよびまた浅いレンダリング者。
- [playwright](https://github.com/microsoft/playwright) enables reliable end-to-end testing for modern web apps.

### Redux

- [redux-devtools-chart-monitor](https://github.com/romseguy/redux-devtools-chart-monitor) - チャートモニター Redux DevTools。
- [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) - 再構成可能で移動可能なドック Redux DevToolsは監視します。
- [redux-devtools-filterable-log-monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor) - フィルター可能なツリービューモニター Redux DevTools。
- [redux-devtools-inspector](https://github.com/alexkuz/redux-devtools-inspector) - その他 Redux DevToolsモニター。
- [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor) - デフォルトのモニター Redux ツリービューのDevTools。
- [redux-devtools](https://github.com/gaearon/redux-devtools) - DevTools について Redux ホットリロード、アクションリプレイ、カスタマイズ可能 UI.
- [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) - Redux DevToolsリモートで。

### トピックス

- [fluxguard](https://fluxguard.com) - PRODは、すべてを強調表示する監視を変更します DOM + design 変更。
- [react-inspector](https://github.com/xyc/react-inspector) - ブラウザのDevToolsのインスペクターの電源は、右あなたの内側に React アプリ。
- [reactotron](https://github.com/reactotron/reactotron) - あなたの検査のためのCLIとOS Xアプリ React JSとJS React Native アプリ。
- [Tail Lens](https://taillens.io) - Tailwind ブラウザのエディタ : 視点, 編集, プレビュー, コピー.

### ツイート

- [component-controls](https://github.com/ccontrols/component-controls) - [demo](https://component-controls.com) - [docs](https://component-controls.com/tutorial) - 超高速ドキュメントサイトを作成する次世代ツール。
- [cosmos-js](https://github.com/skidding/cosmos) - 本当にカプセル化された設計のためのDX用具 React コンポーネント。
- [react-demo-tab-cli](https://github.com/mkosir/react-demo-tab-cli) - デモを作成するためのCLIツール react コンポーネント。
- [react-styleguidist](https://github.com/sapegin/react-styleguidist) - React 様式ガイドの発電機。
- [standard-react](https://github.com/feross/standard) - JavaScript 標準的な様式ガイド。
- [Plasmic](https://www.plasmic.app/) - パワフル design あなたの構築のためのツール React コンポーネントを視覚的に。
- [SimpleLocalize](https://github.com/simplelocalize/simplelocalize-cli) - オープンソースを見つけるためのCLIツール i18n キーの React プロジェクト。
- [react-device-frameset](https://github.com/zheeeng/react-device-frameset) - React デバイスフレームセットコンポーネント。

## ツイート

**[`Back to top ⬆️`](#table-of-contents)**

- [DataFormsJS JSX Loader](https://github.com/dataformsjs/dataformsjs/blob/master/docs/jsx-loader.md) - スモール JavaScript JSXからJSをWebページに直接変換するためのコンパイル。
- [html-to-react-components](https://github.com/roman01la/html-to-react-components) - 注釈部分の抽出 HTML お問い合わせ React 別々のモジュールとしてコンポーネント。
- [htmltojsx](https://github.com/reactjs/react-magic) - 自動的に AJAXify プレーン HTML 力のと React. It&#39;s 魔法!.
- [jsonx](https://github.com/repetere/jsonx) - React JSON シンタックス
- [mozaik](https://github.com/plouc/mozaik) - Moza&iuml;k は nodejs に基づくツールです。 react / d3 / 美しいダッシュボードを簡単に作成するスタイラス。
- [react-blessed](https://github.com/Yomguithereal/react-blessed) - ツイート react 祝福のためのレンダー。
- [jsondiffpatch-react](https://github.com/bluepeter/jsondiffpatch-react) - JSON の拡散。
- [iron-session](https://github.com/vvo/iron-session) - セキュアでステートレスで、Cookieベースのセッションライブラリ。

### 静的なウェブサイトの発電機

- [gatsby](https://github.com/gatsbyjs/gatsby) - プレーンテキストを動的ブログやウェブサイトに変える React.js.

## クラウドソリューション

**[`Back to top ⬆️`](#table-of-contents)**

### データベース

- [BCMS](https://github.com/bcms/cms) - Gatsby、Nuxt、Next用のAPIベース、オープンソース、セルフホスト可能なコンテンツ管理システム。
- [crisp-bigquery](https://github.com/winwiz1/crisp-bigquery) - フルスタック Google BigQuery と Express で TypeScript.
- [react-server-routing-example](https://github.com/mhart/react-server-routing-example) - AWS DynamoDB を使用した、ユニバーサルクライアント/サーバーのルーティングとデータ。
