# 🚀 Absolut fantastisch React Komponenten & Bibliotheken

Dies ist eine Liste von fantastischen Komponenten. Nein, es ist keine umfassende Liste von jedem React Komponente unter der Sonne. Was bedeutet "großartig"? Nun,

- Es löst ein echtes Problem
- Dies geschieht auf eine einzigartige, wunderschöne oder außergewöhnliche Weise. (Und es ist nicht sehr beliebt und bekannt ... es hat keinen Sinn, diese aufzulisten.)
- Es hat kürzlich code Commits!

Suchen Sie nach einem 🚀 für wirklich erstaunliche Projekte. Und suchen sie nach quickie-maintainer-kommentar und bewertungen in   (italic parens)   nach einigen notizen.

Siehe auch: [Awesome React Frameworks](https://github.com/brillout/awesome-react-frameworks).

Instandhaltungspersonal:

- [@petebray](https://github.com/bluepeter), author of [Fluxguard](https://fluxguard.com) &mdash; monitor PROD website changes.
- [@brillout](https://twitter.com/brillout), author of [Vike](https://vike.dev) &mdash; a fast Vite-based React framework that is flexible, lean, community-driven and dependable.

### Beitrag

Bitte überprüfen Sie unsere [Beitragsleitlinien](https://github.com/brillout/awesome-react-components/blob/master/CONTRIBUTING.md)Wir halten diese Liste frisch, indem wir von allen PRs verlangen, dass sie einen oder mehrere nicht geniale Einträge aus dieser Liste entfernen**. Bitte PR eine neue Ressource, wenn Sie auch eine entfernen.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Inhaltsverzeichnis

- [UI Komponenten](#ui-components)
  - [Editierbares Datengitter/Tabelle](#editable-data-grid--spreadsheet)
  - [Tabelle](#table)
  - [Unendlicher Scroll](#infinite-scroll)
  - [Überlagerung](#overlay)
  - [Anmeldung](#notification)
  - [Tooltip](#tooltip)
  - [Menü](#menu)
  - [klebrig](#sticky)
  - [Tabs](#tabs)
  - [Beladung](#loader)
  - [Captcha](#captcha)
  - [Karussell](#carousel)
  - [Knöpfe](#buttons)
  - [Kollaps](#collapse)
  - [Karte](#chart)
  - [Kommandopalette](#command-palette)
  - [Baum](#tree)
  - [UI Navigation](#ui-navigation)
  - [Custom Scrollbar](#custom-scrollbar)
  - [Audio/Video](#audio--video)
  - [Karte](#map)
  - [Uhrzeit / Datum / Alter](#time--date--age)
  - [Foto / Bild](#photo--image)
  - [Icons](#icons)
  - [Paginator](#paginator)
  - [Markdown Betrachter](#markdown-viewer)
  - [Leinwand](#canvas)
  - [Bildschirmfoto](#screenshot)
  - [Verschiedenes](#miscellaneous)
  - [Formteile](#form-components)
    - [Datum / Zeitmesser](#date--time-picker)
    - [Emoji-Pflücker](#emoji-picker)
    - [Inputarten](#input-types)
    - [Autovervollständigung](#autocomplete)
    - [Wählen](#select)
    - [Farbwähler](#color-picker)
    - [Umschalter](#toggle)
    - [Schieber](#slider)
    - [Funktaste](#radio-button)
    - [Typ ausgewählt](#type-select)
    - [Tag-Input](#tag-input)
    - [Automatisierte Eingabe / Textarea](#autosize-input--textarea)
    - [Star Rating](#star-rating)
    - [Drag und Drop](#drag-and-drop)
    - [Sortierbare Liste](#sortable-list)
    - [Rich Text Editor](#rich-text-editor)
    - [Markdown Herausgeber](#markdown-editor)
    - [Bildbearbeitung](#image-editing)
    - [Form Component Collections](#form-component-collections)
    - [Verschiedenes](#miscellaneous-1)
    - [Syntax Highlight](#syntax-highlight)
- [UI Layout](#ui-layout)
- [UI Animation](#ui-animation)
  - [Parallaxen](#parallax)
- [UI Rahmen](#ui-frameworks)
  - [Reaktionsweise](#responsive)
    - [Material Design](#material-design)
  - [Mobil](#mobile)
  - [Komponentensammlungen](#component-collections)
- [UI Versorgungsunternehmen](#ui-utilities)
  - [Reporter](#reporter)
    - [Sichtbarkeitsmelder](#visibility-reporter)
    - [Mess-Reporter](#measurement-reporter)
  - [Geräteeingang](#device-input)
    - [Keyboard Events](#keyboard-events)
    - [Scroll-Events](#scroll-events)
    - [Touch Swipe](#touch-swipe)
    - [Mouse Events](#mouse-events)
  - [Meta-Tags](#meta-tags)
  - [Portal](#portal)
  - [Testbenutzerverhalten](#test-user-behavior)
- [Code Design](#code-design)
  - [Datenspeicher](#data-store)
  - [Form Logic](#form-logic)
  - [Router](#router)
  - [Requisiten vom Server](#props-from-server)
  - [Kommunikation mit dem Server](#communication-with-server)
  - [CSS / Stil](#css--style)
  - [HTML Meldebogen](#html-template)
  - [Isomorphe Apps](#isomorphic-apps)
  - [Boilerplate](#boilerplate)
  - [Verschiedenes](#miscellaneous-2)
- [Versorgungsunternehmen](#utilities)
  - [i18n](#i18n)
  - [Framework-Bindungen / Integrationen](#framework-bindings--integrations)
  - [Integrationen mit Drittanbieterdiensten](#integrations-with-third-party-services)
- [Leistung](#performance)
  - [UI](#ui)
    - [Inspektion](#inspect)
    - [Lazy Load](#lazy-load)
  - [App Größe](#app-size)
  - [Server-Side Rendering](#server-side-rendering)
- [Dev Tools](#dev-tools)
  - [Test](#test)
  - [Redux](#redux)
  - [Inspektion](#inspect-1)
  - [Verschiedenes](#miscellaneous-3)
- [Verschiedenes](#miscellaneous-4)
  - [Statischer Website Generator](#static-website-generator)
- [Cloud-Lösungen](#cloud-solutions)
  - [Datenbanken](#databases)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## UI Komponenten

**[`Back to top ⬆️`](#table-of-contents)**

### Editierbares Datengitter/Tabelle

- [AG Grid](https://github.com/ag-grid/ag-grid) - Advanced Data Grid / Data Table unterstützt Javascript / React / AngularJS / Webkomponenten.
- [fortune-sheet](https://github.com/ruilisi/fortune-sheet) - Eine Online-Spreedsheet-Komponente, die Out-of-the-Box-Funktionen wie Excel bietet.
- [gigatables-react](https://github.com/GigaTables/reactables) - Sortierung, Paginierung/Infinite Scroll, globale/Spaltensuche, AJAX CRUD und mehr.
- [Handsontable](https://github.com/handsontable/handsontable) - [demo](https://handsontable.com/demo) - [docs](https://handsontable.com/docs/react-data-grid/) - Data Grid mit Tabellenkalkulation UI Stützen React, Angular, TypeScript und JavaScript.
- [jqwidgets-react-grid](https://www.jqwidgets.com/react/react-grid/) - Filtern, Paginieren, Gruppieren, Exportieren nach Excel, PDFCRUD und mehr.
- [MUI X Data grid](https://github.com/mui/mui-x) - [demo/docs](https://mui.com/x/react-data-grid/) - Schnelles und anpassbares Datenraster mit erweiterten Funktionen für Power User und komplexe Anwendungsfälle.
- [react-data-grid](https://github.com/adazzle/react-data-grid) - Excel-ähnliches Raster.
- [ReactGrid](https://github.com/silevis/reactgrid) - [demo/docs](https://reactgrid.com/docs/) - Fügen Sie Tabellenkalkulationsverhalten zu Ihrer App hinzu
- [revo-grid](https://github.com/revolist/revogrid) - [demo/docs](https://revolist.github.io/revogrid/) Leistungsstarkes Data Grid für React / AngularJS / Vue / Web-Komponenten mit erweiterter Anpassung.
- [SheetXL](https://github.com/sheetxl/sheetxl) – A high-performance spreadsheet grid. TypeScript, ESM, Node/browser, Excel-compatible functions.
- [SVAR React DataGrid](https://svar.dev/react/datagrid/) - [demo](https://docs.svar.dev/react/grid/samples/#/base/willow) - [docs](https://docs.svar.dev/react/grid/getting_started/) - React DataGrid mit In-Cell-Bearbeitung, Baumdaten, Kontextmenü, virtuellem Scrollen usw.

### Tabelle

- [ka-table](https://github.com/komarovalexander/ka-table) - [demo](https://komarovalexander.github.io/ka-table/#/overview) Anpassbare Tabellenkomponente mit Sortierung, Filterung, Gruppierung, Virtualisierung, Bearbeitung usw.
- [mantine-datatable](https://github.com/icflorescu/mantine-datatable) - [demo/docs](https://icflorescu.github.io/mantine-datatable/) Leichte Tischkomponente für Mantine UI Anwendungen, mit vielen Features
- [material-table](https://github.com/mbrn/material-table) - [demo/docs](https://material-table.com/) - Gebaut auf Material UI, plus: Gruppierung, Baumdaten, erweiterbare Zeilen, Export, Inline-Bearbeitung
- [mui-datatables](https://github.com/gregnb/mui-datatables) - gebaut auf Material UISuchen, Styling, Filtern, Größenänderung/Ausblenden von Spalten, Exportieren, Drucken, Auswählen/Erweitern von Zeilen.
- [react-data-table](https://github.com/jbetancur/react-data-table-component) - [demo/docs](https://jbetancur.github.io/react-data-table-component/?) - zugängliche, responsive, themengebundene, deklarativ konfigurierbare Tabelle mit Sortierung, auswählbaren Zeilen, erweiterbaren Zeilen, Paginierung
- [TanStack Table](https://github.com/tannerlinsley/react-table) - [demo](https://tanstack.com/table/v8/docs/examples/react/basic) - Headless UI für den Aufbau leistungsfähiger Tabellen & Datagrids
- [react-table-library](https://github.com/table-library/react-table-library) - [demo](https://react-table-library.com/) - React Tischbibliothek - eine fast kopflose Tischbibliothek - um bessere Tische zu bauen.
- [rsuite-table](https://github.com/rsuite/rsuite-table) - [demo/docs](http://rsuite.github.io/rsuite-table/) - Eine Tabellenkomponente, die virtualisiert unterstützt.
- [DevExtreme React Grid](https://devexpress.github.io/devextreme-reactive/react/grid/) - Hochleistungs-Plugin-basiertes Datenraster für Bootstrap und Material Design.
- [Smart React Grid](https://htmlelements.com/react/demos/grid/overview/) - Schnelles und funktionsvollständiges Datenraster mit Material Design.
- [simple-table](https://github.com/petera2c/simple-table) - [demo](https://www.simple-table.com/examples) - [docs](https://www.simple-table.com/docs) Leichtgewichtig, schnell und funktionsreich. Sortieren/Filtern, Virtualisierung, Baumdaten, verschachtelte Header, gepinnte Spalten, angepasstes Styling etc.

- [KendoReact Grid](https://www.telerik.com/kendo-react-ui/components/grid/) - Leistungsstarke Datengitterkomponente mit über 100 gebrauchsfertigen Funktionen wie Paging, Sortierung, Export nach Excel und mehr.

- [Material-React-Table](https://github.com/KevinVandy/material-react-table) - Ein voll ausgestattetes Material UI V5-Implementierung von TanStack React Tabelle V8, geschrieben von Grund auf in TypeScript

### Unendlicher Scroll

- [@egjs/react-infinitegrid](https://github.com/naver/egjs-infinitegrid/blob/master/packages/react-infinitegrid) - [npm](https://www.npmjs.com/package/@egjs/react-infinitegrid) - [demo](https://naver.github.io/egjs-infinitegrid/storybook/) Ein Modul, das verwendet wird, um Kartenelemente einschließlich Inhalt unendlich nach verschiedenen Layout-Typen anzuordnen.
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload) - Lazyloaden Sie Ihre Komponente, Ihr Image oder etwas anderes, wo die Leistung wichtig ist.
- [react-list](https://github.com/orgsync/react-list) - Eine vielseitige unendliche Rolle React Bauteil.
- [@af-utils/virtual](https://github.com/nowaalex/af-utils) - [demo/docs](https://af-utils.com/virtual) - Rendern Sie große scrollbare Listen und Gitter.
- [react-window](https://github.com/bvaughn/react-window) - [demo](https://react-window.now.sh/) - React Komponenten zum effizienten Rendern großer Listen und tabellarischer Daten
- [virtua](https://github.com/inokawa/virtua) - [demo](https://inokawa.github.io/virtua/) - Eine Zero-Config, schnelle und kleine (~3kB) virtuelle Listenkomponente für React, Vue und Solid.

### Überlagerung

Display Overlay / Modal / Alarm / Dialog / Lightbox / Popup 

- [react-aria-modal](https://github.com/davidtheclark/react-aria-modal) - Eine voll zugängliche und flexible React modal gebaut nach WAI-ARIA Authoring Practices.
- [react-modal](https://github.com/reactjs/react-modal) - Zugängliche Modaldialogkomponente für React.
- [@paratco/async-modal](https://github.com/Paratco/async-modal) - Einfacher async Modal Handler für React.
- [reoverlay](https://github.com/hiradary/reoverlay) - [demo](https://hiradary.github.io/reoverlay/) - Die fehlende Lösung für die Verwaltung von Modals.
- [sweetalert2](https://github.com/sweetalert2/sweetalert2) - [demo/docs](https://sweetalert2.github.io/) - Eine schöne, reaktionsschnelle, hochgradig anpassbare und zugänglicheWAI-ARIAErsatz für JavaScriptPopup-Boxen. Null Abhängigkeiten.
- [sweetalert2-react-content](https://github.com/sweetalert2/sweetalert2-react-content) - Official SweetAlert2 Enhancer bietet Unterstützung für React Elemente als Inhalt

### Anmeldung

Toaster / Snackbar - Benachrichtigen Sie den Benutzer mit einem modelosen temporären kleinen Popup 

- [react-notifications-component](https://github.com/teodosii/react-notifications-component) - [demo](https://teodosii.github.io/react-notifications-component/) - Sehr anpassbare und benutzerfreundliche Komponente für Benachrichtigungen.
- [notistack](https://iamhosseindhv.com/notistack) - [demo](https://codesandbox.io/s/github/iamhosseindhv/notistack/tree/master/examples/simple-example??hidenavigation=1&module=%2FApp.js) - [docs](https://iamhosseindhv.com/notistack/api) - Sehr anpassbare Benachrichtigungs-Snackbars (Toasts), die übereinander gestapelt werden können
- [react-local-toast](https://github.com/OlegWock/react-local-toast) - [demo](https://react-local-toast.netlify.app/showcase/) - [docs](https://react-local-toast.netlify.app/tutorial) - Feedback zeigen, das mit einer bestimmten Komponente verknüpft ist, anstatt app-weite Toasts.
- [react-toast](https://github.com/moharnadreza/react-toast) - [demo](https://codesandbox.io/s/byqvk) - [docs](https://github.com/moharnadreza/react-toast/blob/main/README.md) - Minimale Toast-Benachrichtigungen.
- 🚀 [react-toastify](https://github.com/fkhadra/react-toastify) - [demo](https://fkhadra.github.io/react-toastify/) - Beste Wette da draußen im Moment. Hakenunterstützung. Keine Refs.
- [react-confirm-lite](https://github.com/SaadNasir-git/react-confirm-lite) - [demo](https://stackblitz.com/edit/vitejs-vite-bfthlpmw) - ist ein leichter, versprechensbasierter Bestätigungsdialog für React mit eingebautem Tailwind CSS Unterstützung. Es ist so konzipiert, dass es so einfach zu bedienen ist wie react-toastify, während es vollständig anpassbar bleibt.
- [reapop](https://github.com/LouisBarranqueiro/reapop) - A React & Redux Meldesystem.
- [react-hot-toast](https://github.com/timolins/react-hot-toast) - [demo](https://react-hot-toast.com/) - Heiße Rauchmeldungen für ReactLeichtgewichtig, anpassbar und standardmäßig schön.
- [Sonner](https://sonner.emilkowal.ski/) - Eine Meinung Toast-Komponente für React.

### Tooltip

- [react-tooltip](https://github.com/wwayne/react-tooltip) - React Tooltip-Komponente.

### Menü

Menus / Sidebars 

- [hamburger-react](https://github.com/luukdv/hamburger-react) - [demo/docs](https://hamburger-react.netlify.app/) - Animierte Hamburger Menü-Icons für React.
- [react-burger-menu](https://github.com/negomi/react-burger-menu) - Eine Off-Canvas Sidebar mit Effekten und Stilen.
- [react-offcanvas](https://github.com/vutran/react-offcanvas) - Off-Canvas Menüs für React.
- [react-planet](https://github.com/innFactory/react-planet) - [demo](https://innfactory.github.io/react-planet/) - Erstellen Sie kreisförmige Menüs, die wie Planeten aussehen.
- [mantine-contextmenu](https://github.com/icflorescu/mantine-contextmenu) - [demo/docs](https://icflorescu.github.io/mantine-contextmenu/) - Kontext-Menühaken/Komponente für Anwendungen, die mit Mantine gebaut wurden UI.

### klebrig

Fixed Header / Scroll-up Header / Sticky Elemente 

- [react-headroom](https://github.com/KyleAMathews/react-headroom) - Verstecke deinen Header, bis du ihn brauchst.
- [react-stickynode](https://github.com/yahoo/react-stickynode) - Performant und umfassend React klebrig.

### Tabs

- [react-tabs](https://github.com/reactjs/react-tabs) - React Tabs-Komponente.
- [react-tabtab](https://github.com/ctxhou/react-tabtab) - React, Tabs.

### Beladung

Loader / Spinner / Fortschrittsbalken - Lassen Sie den Benutzer wissen, dass etwas geladen wird 

- [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) - Sammelsatz von react-Spinner für async Betrieb.
- [react-redux-loading-bar](https://github.com/mironov/react-redux-loading-bar) - Einfache Ladeleiste für Redux und React.
- [react-spinners-css](https://github.com/JoshK2/react-spinners-css) - Erstaunliche Sammlung von react Spinnerkomponenten.
- [react-spinners](https://github.com/davidhu2000/react-spinners) - Eine Sammlung von ladenden Spinnerkomponenten für react.
- [react-content-loader](https://github.com/danilowoz/react-content-loader) - SVG-Powered-Komponente zum einfachen Erstellen von Platzhalter-Laden (wie das Laden von Facebook-Karten).

### Captcha

- [react-simple-captcha](https://github.com/masroorejaz/react-simple-captcha) - [npm](https://www.npmjs.com/package/react-simple-captcha) - [demo](https://www.scriptse.com/blog/add-captcha-in-reactjs-application/react-simple-captcha-demo/) - React Simple Captcha ist ein sehr leistungsfähiges, hochgradig anpassbares und einfach zu bedienendes Captcha für React JS.
- [procaptcha](https://github.com/prosopo/captcha) - [demo](https://prosopo.io/) - [docs](https://docs.prosopo.io/) - Datenschutz fokussiert kostenlos CAPTCHA

### Karussell

- [@egjs/react-flicking](https://github.com/naver/egjs-flicking/blob/master/packages/react-flicking/) - [npm](https://www.npmjs.com/package/@egjs/react-flicking) - [demo](https://naver.github.io/egjs-flicking/) - Es ist zuverlässig, flexibel und erweiterbar Karussell.
- [react-awesome-slider](https://github.com/rcaferati/react-awesome-slider) - [demo](https://fullpage.caferati.me/) - Vollseite, 3D-animiert, 60fps Medien- und Inhalts-Slider / Karussell.
- [pure-react-carousel](https://github.com/express-labs/pure-react-carousel) - Gebaut von Grund auf neu und nicht sehr eigensinnig.
- [react-id-swiper](https://github.com/kidjp85/react-id-swiper) - Eine Bibliothek, um idangerous Swiper als ReactJs Komponente
- [react-instagram-zoom-slider](https://github.com/skozer/react-instagram-zoom-slider) - [demo](https://skozer.github.io/react-instagram-zoom-slider/) - Eine Slider-Komponente mit Pinch-to-Zoom-Funktionen, die von Instagram inspiriert wurde.
- [react-responsive-carousel](https://github.com/leandrowd/react-responsive-carousel) - React.js Responsive Carousel (mit Swipe).
- [react-slick](https://github.com/akiran/react-slick) - React Karussellkomponente.
- [keen-slider](https://github.com/rcbyr/keen-slider) - [demo](https://keen-slider.io/examples/#examples) - Performant Karussell / Slider mit native Berührungs-/Wischverhalten.
- [swiper](https://github.com/nolimits4web/Swiper) - [demo](https://swiperjs.com/demos) - [docs](https://swiperjs.com/react) - Der modernste kostenlose mobile Touch-Slider mit Hardware beschleunigten Übergängen und erstaunlich native Verhalten.

### Knöpfe

- [react-awesome-button](https://github.com/rcaferati/react-awesome-button) - [demo](https://caferati.me/demo/react-awesome-button) - 3D animierte 60fps Tasten mit Ladefortschritt und Social Share Aktionen.
- [reactive-button](https://github.com/arifszn/reactive-button) - [demo](https://arifszn.github.io/reactive-button/docs/playground) - [docs](https://arifszn.github.io/reactive-button) - Eine schöne animierte Button-Komponente mit Fortschrittsanzeige.

### Kollaps

- [react-accessible-accordion](https://github.com/springload/react-accessible-accordion) - Accessible Accordion-Komponente für React.
- [react-collapse](https://github.com/nkbt/react-collapse) - Component-Wrapper für die Crash-Animation mit react-Motion.
- [react-tabbordion](https://github.com/Merri/react-tabbordion) - [demo](https://merri.github.io/react-tabbordion) - Universal, semantisch und CSS-nur Komponenten zum Erstellen von Accordions und Tabs.

### Karte

Anzeigedaten in Diagrammen / Graphen / Diagrammen 

- [essential js 2 charts](https://github.com/syncfusion/ej2-react-ui-components/tree/master/components/charts) - Schöne und interaktive Charts & Graphen für react.
- [EazyChart](https://github.com/Hexastack/eazychart) - [demo](https://docs.eazychart.com/#demos) - [docs](https://docs.eazychart.com) - Einfach Daten in aussagekräftige Charts umwandeln
- [echarts for react](https://github.com/hustcc/echarts-for-react) - Wrapper um schöne Apache Echarts
- [jscharting-react](https://github.com/jscharting/jscharting-react) – React chart component offering a complete set of chart types and engaging data visualizations with [JSCharting](https://jscharting.com/).
- [react-chartist](https://github.com/fraserxu/react-chartist) - React Komponente für Chartist.js.
- [react-charty](https://github.com/99ff00/react-charty) - [demo](https://99ff00.github.io/react-charty/) - Kleine, aber leistungsstarke interaktive Daten mit mehreren Diagrammtypen, Animationen, Zoomen, Thematisierung.
- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) - Allgemein react Diagrammkomponenten mit Chart.js 2.0.
- [react-d3-components](https://github.com/codesuki/react-d3-components) - D3 Komponenten für React.
- [react-google-charts](https://github.com/RakanNimer/react-google-charts) - React-google-charts React Bauteil.
- [react-highcharts](https://github.com/kirjs/react-highcharts) - React-Highcharts.
- [react-sparklines](https://github.com/borisyankov/react-sparklines) - Schöne und ausdrucksstarke Sparklines React Bauteil.
- [react-timeseries-charts](https://github.com/esnet/react-timeseries-charts) - Deklarative Zeitreihendiagramme.
- [react-vis](https://github.com/uber/react-vis) - Datenvisualisierungsbibliothek basierend auf React und d3.
- [recharts](https://github.com/recharts/recharts) - Eine neu definierte Chart-Bibliothek, die mit React und D3.
- [rumble-charts](https://github.com/rumble-charts/rumble-charts) - React Komponenten für den Aufbau zusammensetzbarer und flexibler Karten.
- [victory](https://github.com/FormidableLabs/victory) - Daten für React.
- [semiotic](https://semiotic.nteract.io/) - Semiotic ist ein Data Visualisierung Framework für React.
- [SVAR React Gantt](https://svar.dev/react/gantt/) - [demo](https://docs.svar.dev/react/gantt/samples/#/base/willow) - [docs](https://docs.svar.dev/react/gantt/getting_started/) Anpassbare, interaktive Gantt-Diagrammkomponente
- [DevExtreme React Chart](https://devexpress.github.io/devextreme-reactive/react/chart/) - Hochleistungs-Plugin-basierte Charts für Bootstrap und Material Design.
- [Smart React Chart](https://www.htmlelements.com/react/demos/chart/overview/) - Komplette Charting-Bibliothek.
- [react-muze](https://github.com/chartshq/react-muze) - React Umschlag für [muze](https://muzejs.org/)(kostenlose Datenvisualisierungsbibliothek zum Erstellen explorativer Datenvisualisierungen im Browser mithilfe von WebAssembly)
- [Flowchart React](https://github.com/joyceworks/flowchart-react) - Flowchart & Flowchart Designer für React.js.
- [react-dashboard](https://github.com/flatlogic/react-dashboard) - Isomorphe Dashboards.

### Kommandopalette

- [cmdk](https://cmdk.paco.me/) - Schnelles, komponierbares, unstilisiertes Kommandomenü für React.
- [kbar](https://github.com/timc1/kbar) - [demo](https://kbar.vercel.app) - Schnelles, tragbares und erweiterbares cmd+k Interface.

### Baum

Anzeigen einer Baumdatenstruktur 

- [json-edit-react](https://github.com/CarlosNZ/json-edit-react) - [demo](https://carlosnz.github.io/json-edit-react/) - Hochkonfigurierbarer JSON/Object Tree Viewer und Editor
- [react-arborist](https://github.com/brimdata/react-arborist) - [demo](https://react-arborist.netlify.app/) - Eine voll ausgestattete Baumansicht: kopflos, virtualisiert, multiselektierbar, Drag-n-Drop, Tastaturnavigation, Suche
- [react-complex-tree](https://github.com/lukasbach/react-complex-tree) - [demo](https://rct.lukasbach.com/) - [docs](https://rct.lukasbach.com/docs/getstarted) Unbeeindruckte barrierefreie Baumkomponente mit Multi-Select, Drag-and-Drop und Suche
- [he-tree-react](https://github.com/phphe/he-tree-react) - [demo](https://he-tree-react.phphe.com/v1/examples) - [docs](https://he-tree-react.phphe.com/) Baum, anpassbar UI, flat data, tree data, drag-n-drop, placeholder for drop, foldable, checkbox, virtualisiert.

### UI Navigation

Wege zum Navigieren von Ansichten 

- [react-scroll](https://github.com/fisshy/react-scroll) - React Scroll-Komponente.
- [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) - A React Komponente für gebundene Tabs und Swipeable Views.

### Custom Scrollbar

- [rc-scrollbars](https://github.com/sakhnyuk/rc-scrollbars) - [demo](https://rc-scrollbars.vercel.app/) Anpassbare Scrollbars mit Flex-Optionen und 60FPS
- [react-custom-scroll](https://github.com/rommguy/react-custom-scroll) - [demo](http://rommguy.github.io/react-custom-scroll/example/demo.html) - Passen Sie einfach die Browser-Scrollleiste mit native OS Scroll Verhalten.
- [react-shadow-scroll](https://github.com/andrelmlins/react-shadow-scroll) - Eine Komponente, die das Bild anpasst und Schatten einfügt, wenn gescrollt wird.

### Audio/Video

- [react-dailymotion](https://github.com/u-wave/react-dailymotion) - Dailymotion Player-Komponente für React.
- [react-player](https://github.com/CookPete/react-player) - A react Eine Komponente zum Abspielen einer Vielzahl von URLs, einschließlich YouTube.
- [react-soundplayer](https://github.com/soundblogs/react-soundplayer) - Erstellen Sie benutzerdefinierte SoundCloud-Player mit React.
- [react-youtube](https://github.com/troybetz/react-youtube) - React.js powered YouTube Player-Komponente.
- [video-react](https://github.com/video-react/video-react) - Ein Web-Video-Player für die HTML5-Welt mit React Bibliothek.
- [material-ui-audio-player](https://github.com/Werter12/material-ui-audio-player) - Audio Player für material ui design.
- [react-vision-camera](https://github.com/xulihang/react-vision-camera) - Kamerakomponente für React mit getUserMedia. Wir können diese Komponente für Computer Vision-Aufgaben wie Barcode-Scannen, Texterkennung usw. verwenden.
- [react-barcode-qrcode-scanner](https://github.com/xulihang/react-barcode-qrcode-scanner) - Barcode und QR code Scannerkomponente für ReactEs verwendet react-vision-Kamera zum Zugriff auf die Kamera und Dynamsoft Barcode Reader zum Lesen von Barcodes.

### Karte

- [google-map-react](https://github.com/istarkov/google-map-react) - Universal Google Map react Komponente, ermöglicht Render react Komponenten auf der Google Map.
- [mapkit](https://github.com/1amageek/mapkit) - Eine Bibliothek zur Integration von Apple Maps mit MapKit JS mit Anmerkungen, Overlays und Suche.
- [pigeon-maps](https://github.com/mariusandra/pigeon-maps) - [demo](https://pigeon-maps.js.org/) - ReactJS Karten ohne externe Abhängigkeiten.
- [react-geosuggest](https://github.com/ubilabs/react-geosuggest) - A React autosuggest für die Google Maps Places API.
- [react-leaflet](https://github.com/PaulLeCam/react-leaflet) - React Komponenten für Flugblattkarten.
- [react-map-gl](https://github.com/uber/react-map-gl) - A React Wrapper für MapboxGL-js und Overlay API.
- [react-svg-map](https://github.com/VictorCazanave/react-svg-map) - [demo](https://victorcazanave.github.io/react-svg-map/) - Eine Reihe von Komponenten, um eine interaktive SVG-Karte anzuzeigen.

### Uhrzeit / Datum / Alter

Anzeigezeit / Datum / Alter 

- [react-timeago](https://github.com/nmn/react-timeago) - Eine einfache Time-Age-Komponente für ReactJs.
- [timeago-react](https://github.com/hustcc/timeago-react) - Format Datum mit `*** time ago` Erklärung. Zum Beispiel: "Vor 3 Stunden".
- [react-google-flight-datepicker](https://github.com/JSLancerTeam/react-google-flight-datepicker) - Google Flight Date Picker implementiert in ReactJS.

### Foto / Bild

Bilder/Fotos 

- [lightGallery](https://github.com/sachinchoolur/lightGallery) - [demo](https://www.lightgalleryjs.com/) - [docs](https://www.lightgalleryjs.com/docs/react/) - Voll funktionsfähige Lightbox-Galeriekomponente.
- [react-compare-image](https://github.com/junkboy0315/react-compare-image) - [demo](https://react-compare-image.yuuniworks.com/) - React Komponente, um zwei Bilder mit einem Slider zu vergleichen.
- [react-image-gallery](https://github.com/xiaolin/react-image-gallery) - Responsive Bildergalerie, Karussell, Bildschieber react Bauteil.
- [yet-another-react-lightbox](https://github.com/igordanchenko/yet-another-react-lightbox) - [demo](https://yet-another-react-lightbox.com/examples) - [docs](https://yet-another-react-lightbox.com/documentation) - React Lightbox-Komponente.
- [react-intense](https://github.com/brycedorn/react-intense) - A React Bauteil zum Betrachten großer Bilder aus nächster Nähe.
- [react-photo-album](https://github.com/igordanchenko/react-photo-album) - [demo](https://react-photo-album.com/examples) - [docs](https://react-photo-album.com/documentation) - Responsive React Fotogalerie.
- [react-svg-pan-zoom](https://github.com/chrvadala/react-svg-pan-zoom) - A React Komponente, die schwenk- und zoomfunktionen zu svg hinzufügt.
- [react-particle-image](https://github.com/malerba118/react-particle-image) - [demo](https://malerba118.github.io/react-particle-image-demo/) Rendern Sie Bilder als interaktive Partikel.
- [react-imgix](https://github.com/imgix/react-imgix) - Fügen Sie schnelle, responsive Bilder als Bild, Bild oder Hintergrund hinzu!
- [@frameright/react-image-display-control](https://github.com/Frameright/react-image-display-control) - Definieren Sie Zoomregionen für intelligente responsive Bilder.
- [zoom-image](https://github.com/willnguyen1312/zoom-image) - [demo](https://willnguyen1312.github.io/zoom-image/examples/react.html) - [docs](https://willnguyen1312.github.io/zoom-image) - Eine kleine, aber leistungsstarke Framework-Agnostik-Bibliothek, um das Bild im Web zu zoomen
- [react-infinite-gallery](https://github.com/AlirezaAzizi145/react-infinite-gallery) – Infinite-scroll image gallery component for React apps.

### Icons

Icons/Icon Set/Emojis 

- [iconify-react](https://github.com/iconify/iconify-react) - Über 40k Icons aus 50+ Icon-Sets, einschließlich aller beliebten Icons und Emoji-Sets.
- [react-icons](https://github.com/gorangajic/react-icons) - Svg react Icons von beliebten Icon-Packs mit ES6-Importen.
- [react-open-doodles](https://github.com/lunahq/react-open-doodles) - Tolle kostenlose Illustrationen als react Bauteile.
- [react-icomoon](https://github.com/aykutkardas/react-icomoon) - mit react-icomoon Sie können ganz einfach die Symbole verwenden, die Sie in icomoon ausgewählt oder erstellt haben.
- [tabler-icons-react](https://tabler-icons-react.vercel.app) - Ein Set von über 450 kostenlosen MIT-lizenzierten hochwertigen SVG-Icons.
- [Lucide](https://github.com/lucide-icons/lucide) - Schönes & konsistentes Icon-Toolkit, das von der Community erstellt wurde. Open-Source-Projekt und eine Abzweigung von Feather Icons.

### Paginator

Display ein Steuerelement zu paginieren 

- [react-paginate](https://github.com/AdeleD/react-paginate) - A ReactJS Eine Komponente, die eine Paginierung erzeugt.
- [react-laravel-paginex](https://github.com/lionix-team/react-laravel-paginex) - Laravel Pagination mit ReactJS (anpassbar).
- [paginated](https://github.com/makotot/paginated) - React Render Requisiten & benutzerdefinierten Haken, um Paginierung zu bauen.
- [react-steps](https://github.com/tkwant/react-steps) - [Demo](https://stepper.tkwant.de/) - Responsive React Stepper.

### Markdown Betrachter

Display analysierte Markdowquelle 

- [react-markdown](https://github.com/rexxars/react-markdown) - Render Markdown als React Bauteile.

### Leinwand

Sketch-Eingabe mit Canvas oder SVG 

- [react-konva](https://github.com/konvajs/react-konva) - React Konva ist eine JavaScript Bibliothek zum Zeichnen komplexer Canvas-Grafiken mit Bindungen an das Konva Framework.
- [react-sketch](https://github.com/tbolis/react-sketch) - Ein Sketch-Tool für React basierende Anwendungen, gesichert durch FabricJS
- [react-sketch-canvas](https://github.com/vinothpandian/react-sketch-canvas) - [Demo](https://vinoth.info/react-sketch-canvas/?path=/story/*) Freihand-Vektorziehwerkzeug für React Verwendung von SVG als Canvas. Akzeptiert Eingaben von Maus, Touch und Grafiktabletts
- [react-heat-map](https://github.com/uiwjs/react-heat-map) - Eine leichte Kalender-Heatmap react auf SVG aufgebaute Komponente, anpassbare Version von GitHubBeitragsgraph.

### Bildschirmfoto

- [html2canvas](https://github.com/niklasvh/html2canvas) - Machen Sie Screenshots von jedem Teil Ihrer Webseite mit Javascript.

### Verschiedenes

- [puck](https://github.com/measuredco/puck) - [demo](https://puck-editor-demo.vercel.app/edit) - Der selbst gehostete Visual Editor für React
- [react-advanced-news-ticker](https://github.com/ahmetcanaydemir/react-advanced-news-ticker) - [demo](https://www.ahmetcanaydemir.com/react-advanced-news-ticker/) - Eine flexible und animierte vertikale Nachrichten-Ticker-Komponente
- [react-avatar-generator](https://github.com/JosephSmith127/react-avatar-generator) - Ermöglicht es Benutzern, zufällige Kaleidoskope zu erstellen, die als Avatare verwendet werden können.
- [react-awesome-query-builder](https://github.com/ukrbublik/react-awesome-query-builder) - [demo](https://ukrbublik.github.io/react-awesome-query-builder/) Visual Query Builder aus Formularfeldern, mit SQL, MongoDB und JSON Export
- [react-blur](https://github.com/javierbyte/react-blur) - React Komponente für unscharfe Hintergründe.
- [react-demo-tab](https://github.com/mkosir/react-demo-tab) - [demo](https://mkosir.github.io/react-demo-tab) - A React Eine Komponente, um Demos anderer Komponenten einfach zu erstellen.
- [fastcomments-react](https://github.com/fastcomments/fastcomments-react) - [demo](<https://blog.fastcomments.com/(12-30-2019)-fastcomments-demo.html>) - FastComments-Komponente zum Einbetten eines Live-Kommentar-Threads auf einer Seite oder SPA.
- [react-pdf-viewer](https://github.com/phuoc-ng/react-pdf-viewer) - [docs](https://react-pdf-viewer.dev) - A React Komponente zum Betrachten eines PDF Dokument.
- [react-simple-chatbot](https://github.com/LucasBassetti/react-simple-chatbot) - [demo](https://github.com/anishagg17/PIzzaBuilder) Eine einfache chatbot-komponente zum erstellen von konversationschats.
- [react-file-reader-input](https://github.com/ngokevin/react-file-reader-input) - Dateieingabekomponente zur Steuerung für das Styling und Abstraktion von Dateilesen.
- [react-filter-control](https://github.com/komarovalexander/react-filter-control) - Die React Filterbuilder-Komponente zum Aufbau der Filterkriterien im UI.
- [react-headings](https://github.com/alexnault/react-headings) - Auto-Increment Ihre HTML Überschriften (h1, h2, etc.) für verbesserte Zugänglichkeit und SEO, unabhängig von Ihrer Komponentenstruktur, während Sie die volle Kontrolle darüber behalten, was gerendert wird.
- [react-joyride](https://github.com/gilbarbara/react-joyride) - Erstellen Sie Walkthroughs und geführte Touren für Ihre ReactJS Apps. Jetzt mit Standalone-Tooltips!
- [react-mouse-select](https://github.com/andreizanik/react-mouse-select) - [Demo](https://andreizanik.github.io/react-mouse-select/) Eine Komponente, die die Auswahl ermöglicht DOM Elemente durch Bewegen der Maus
- [react-resizable-and-movable](https://github.com/bokuweb/react-resizable-and-movable) - Größere und bewegliche Komponente für React.
- [react-resizable-box](https://github.com/bokuweb/react-resizable-box) - Resifizierbares Bauteil für React. #reactjs.
- [react-searchbox-awesome](https://github.com/axmz/react-searchbox-awesome) - [demo](https://axmz.github.io/react-searchbox-awesome-page/) Minimalistische Suchbox.
- [react-split-pane](https://github.com/tomkp/react-split-pane) - React Split-Pane-Komponente.
- [react-swipe-to-delete-ios](https://github.com/arnaudambro/react-swipe-to-delete-ios) - [demo](https://arnaudambro.github.io/react-swipe-to-delete-ios/) So löschen Sie ein Element in einer Liste auf die gleiche Weise wie iOS.
- [react-swipeable-list](https://github.com/marekrozmus/react-swipeable-list) - [demo](https://marekrozmus.github.io/react-swipeable-list/) - Konfigurierbare Komponente zum Rendern einer Liste mit wischbaren Elementen.
- [typography](https://github.com/KyleAMathews/typography.js) - Ein leistungsstarkes Toolkit zum Erstellen von Websites mit schöner Typografie.
- [react-pulse-text](https://github.com/Kelsier90/React-Pulse-Text) - [demo/docs](https://kelsier90.github.io/React-Pulse-Text/) - Ermöglicht Ihnen, den Text einer beliebigen Eigenschaft einer anderen Komponente zu animieren.
- [captcha-image](https://github.com/tpkahlon/captcha-image) - Ermöglicht es Ihnen, ein zufälliges Captcha-Bild mit Optionen zu generieren.
- [react-pdf](https://github.com/wojtekmaj/react-pdf) - PDFs in Ihrem React App so einfach, als ob sie bilder wären.
- [react-customizable-chat-bot](https://github.com/chithakumar13/react-chat-bot) - [Demo](https://chithakumar13.github.io/bot-example) Erstellen Sie Ihren eigenen Chatbot, der Ihren Markenanforderungen in wenigen Minuten entspricht.
- [@restpace/schema-form](https://github.com/restspace/schema-form) - [Demo](https://restspace.io/react/schema-form/demo) Erstellen Sie einfach komplexe Formulare automatisch aus einem JSON Schema.
- [react-darkreader](https://github.com/Turkyden/react-darkreader) - A React Hook zum Hinzufügen eines Dark / Night-Modus zu Ihrer Website inspiriert von Darkreader.
- [react-apple-signin-auth](https://github.com/A-Tokyo/react-apple-signin-auth) - Apple signin für React mit dem offiziellen Apple JS SDK.
- [react-mrz-scanner](https://github.com/tony-xlh/react-mrz-scanner) - A React Komponente zum Scannen von MRZ auf Pässen, Visakarten usw. Es basiert auf Dynamsoft Label Recognizer.

### Formteile

Lassen Sie den Benutzer Daten eingeben 

#### Datum / Zeitmesser

Datumspflücker/Zeitpflücker/Datumspflücker/Datumsbereichspflücker 

- [date-range-picker](https://github.com/almogtavor/date-range-picker) - [demo](https://almogtavor.github.io/date-range-picker/) - Eine Kalenderkomponente, die Datums-, Range- & Range-Picks unterstützt.
- [react-big-calendar](https://github.com/intljusticemission/react-big-calendar) - Gcal/Outlook wie Kalenderkomponente.
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker) - Eine einfache und wiederverwendbare datepicker-komponente für. React.
- [react-day-picker](https://github.com/gpbl/react-day-picker) - Flexibler Date Picker für React.
- [react-flatpickr](https://github.com/coderhaoxin/react-flatpickr) - Flatpickr für React.
- [react-simple-timefield](https://github.com/antonfisher/react-simple-timefield) - [demo](https://antonfisher.com/react-simple-timefield/) - Einfaches Zeiteingabefeld.
- [react-timezone-select](https://github.com/ndom91/react-timezone-select) - [demo](https://ndom91.github.io/react-timezone-select/) - Dynamische, prägnante Zeitzonenauswahl. Basierend auf `react-select`.
- [DevExtreme React Scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/) - Hochleistungs-Plugin-basierter Zeitplan/Kalender für Material Design.
- [jQWidgets Scheduler](https://www.jqwidgets.com/react/react-scheduler/) - Komplette Planungsbibliothek.
- [react-calendar](https://github.com/wojtekmaj/react-calendar) - Der ultimative Kalender für Ihre React App.
- [react-date-picker](https://github.com/wojtekmaj/react-date-picker) - Ein Date Picker für Ihre React App.
- [schedule-x](https://github.com/schedule-x/schedule-x) - Material design Komponenten für Ereigniskalender und Datumsauswahl. Demoseite: https://schedule-x.dev/

#### Emoji-Pflücker

- [interweave-emoji-picker](https://github.com/milesj/interweave/tree/master/packages/emoji-picker) - A React Der Emoji-Picker basiert auf Interweave und Emojibase.

#### Inputarten

Maskierte Eingaben, spezialisierte Eingaben; E-Mail / Telefonnummer / Kreditkarte / etc. 

- [react-credit-cards](https://github.com/amarofashion/react-credit-cards) - Schöne Kreditkarten für Ihre Zahlungsformulare.
- [react-payment-inputs](https://github.com/medipass/react-payment-inputs) - [demo](https://medipass.github.io/react-payment-inputs/?path=/story/usepaymentinputs--basic-no-styles) - Ein Null-Abhängigkeits-Container, der bei Zahlungskarteneingabefeldern hilft.
- [react-input-mask](https://github.com/sanniassin/react-input-mask) - [demo](http://sanniassin.github.io/react-input-mask/demo.html) - Noch eine weitere react Bauteil zur Eingabemaskierung.
- [@lunasec/react-sdk](https://github.com/lunasec-io/lunasec) - [docs](https://www.lunasec.io/docs/) Sichere, gehärtete Formularkomponenten, die alle Daten automatisch verschlüsseln/tokenisieren.
- [react-numpad](https://github.com/gpietro/react-numpad) - [demo](https://gpietro.github.io/react-numpad-demo/) - Erweiterbare Nummer Pad Steuerung für Zahlen, Daten und Zeiten.
- [react-multi-email](https://github.com/axisj/react-multi-email) - [demo](https://react-multi-email.vercel.app/) Formatieren Sie mehrere E-Mails als Benutzertypen.

#### Autovervollständigung

Autosuggest / autocomplete / typeahead 

- [react-autosuggest](https://github.com/moroshko/react-autosuggest) - WAI-ARIA konform React Autosuggest-Komponente.
- [react-typeahead](https://github.com/fmoo/react-typeahead) - Rein reactTypahead und Typahead-Tokenizer.

#### Wählen

- [react-aria-menubutton](https://github.com/davidtheclark/react-aria-menubutton) - Ein vollständig zugängliches, leicht thematisierbares, React-powered Menü-Button.
- [react-functional-select](https://github.com/based-ghost/react-functional-select) - [demo](https://based-ghost.github.io/react-functional-select/) - Micro-sized & mikro-optimierte Komponente für React.js.
- [react-mobile-picker](https://github.com/adcentury/react-mobile-picker) - [demo](https://react-mobile-picker.vercel.app/) - Eine iOS-ähnliche Select-Box-Komponente.
- [react-select](https://github.com/JedWatson/react-select) - Eine Auswahlsteuerung, die mit und für React JS.
- [react-column-select](https://github.com/chr-ge/react-column-select) - Eine Spaltenauswahlkomponente, die für react.
- [react-select-search](https://github.com/tbleckert/react-select-search) - [demo](https://react-select-search.com/) - Eine leichte ausgewählte Komponente für React

#### Farbwähler

- [coloreact](https://github.com/elrumordelaluz/coloreact) - Ein kleiner Color Picker für React.
- [react-color](https://github.com/uiwjs/react-color) - Ist eine winzige Color Picker Widget-Komponente für React Apps.
- [react-colorful](https://github.com/omgovich/react-colorful) - Eine winzige (2,5 KB), abhängigkeitsfreie, schnelle und zugängliche Farbauswahlkomponente.
- [react-input-color](https://github.com/wangzuo/react-input-color) - React Eingangsfarbkomponente mit hsv Farbwähler.

#### Umschalter

- [@anatoliygatt/heart-switch](https://github.com/anatoliygatt/heart-switch) - [demo](https://codesandbox.io/s/demo-for-anatoliygatt-heart-switch-cds5p) - Eine vollständig thematisierbare und zugängliche herzförmige Kippschalterkomponente.
- [react-ios-switch](https://github.com/clari/react-ios-switch) - React Schalterkomponente.
- [react-toggle](https://github.com/instructure-react/react-toggle) - Eine elegante, zugängliche Kippkomponente für ReactAuch eine verherrlichte Checkbox.
- [ui-switch](https://github.com/yairEO/ui-switch) - Die vollständigste  Toggle -Komponente

#### Schieber

- [react-slider](https://github.com/mpowaga/react-slider) - Schieberbauteil für React.

#### Funktaste

- [react-radio-group](https://github.com/chenglou/react-radio-group) - Bessere Radio-Buttons.

#### Typ ausgewählt

Lassen Sie den Benutzer etwas auswählen (z. B. ein Tag), während Sie eingeben 

- [react-autocomplete-input](https://github.com/yury-dymov/react-autocomplete-input) - Autocomplete Eingabefeld für React.
- [react-mentions](https://github.com/effektif/react-mentions) - Erwähnen Sie Personen in einem Textbereich.
- [rich-textarea](https://github.com/inokawa/rich-textarea) - Eine Textfläche zum Einfärben, Hervorheben, Dekorieren von Texten und Autovervollständigen.

#### Tag-Input

Lassen Sie den Benutzer mehrere Tags in einer einzigen Eingabe hinzufügen 

- [react-tag-input](https://github.com/prakhar1989/react-tags) - Eine fantastisch einfache Tagging-Komponente für Ihre React Projekte.
- [react-tagsinput](https://github.com/olahol/react-tagsinput) - Eine einfache react Komponente zur Eingabe von Tags.
- [react-tokeninput](https://github.com/instructure-react/react-tokeninput) - Tokeninput-Komponente für React.
- [tagify](https://github.com/yairEO/tagify) - [demo & docs](https://yaireo.github.io/tagify/) - Leichtgewichtige, effiziente Tags Eingabekomponente.

#### Automatisierte Eingabe / Textarea

- [react-input-autosize](https://github.com/JedWatson/react-input-autosize) - Autoresizing-Eingabefeld für React.
- [react-autowidth-input](https://github.com/kierien/react-autowidth-input) - Hoch konfigurierbares und erweiterbares automatisch bemessenes Eingabefeld, das mit Haken aufgebaut ist.
- [react-textarea-autosize](https://github.com/andreypopp/react-textarea-autosize) - &lt;textarea /&gt;Komponente für React die mit dem Inhalt wächst.

#### Star Rating

- [react-rating](https://github.com/smastrom/react-rating) - [demo](https://react-rating.onrender.com/) - Null-Abhängigkeit, hochgradig anpassbare Bewertungskomponente.
- [react-awesome-stars-rating](https://github.com/fedoryakubovich/react-awesome-stars-rating) - [demo](https://react-awesome-stars-rating.herokuapp.com/) - Die Sternbewertungskomponente mit Zugänglichkeit.
- [react-star-rating-input](https://github.com/ikr/react-star-rating-input) - React.js Komponente für den Eintritt in 0-5 (oder mehr) Sterne.

#### Drag und Drop

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Schön und zugänglich Drag & Drop für Listen mit React
- [react-dnd](https://github.com/gaearon/react-dnd) - Drag & Drop für React.
- [react-drag-sizing](https://github.com/fritx/react-drag-sizing) - "Drag to resize" (Größe ändern) als React Komponente.
- [react-draggable](https://github.com/mzabriskie/react-draggable) - React schleppbares Bauteil.
- [react-dragula](https://github.com/bevacqua/react-dragula) - Drag and drop so einfach, dass es weh tut.
- [react-dropzone](https://github.com/okonet/react-dropzone) - Einfache HTML5 Drag-Drop-Zone mit React.js.
- [react-movable](https://github.com/tajo/react-movable) - Zugängliche und minimalistische Bibliothek (<4kB gzipped) für vertikales Drag & Drop in Listen und Tabellen.
- [react-sortable-pane](https://github.com/bokuweb/react-sortable-pane) - Sortierbare und rezisierbare Scheibenkomponente für React.
- [neodrag](https://github.com/PuruVJ/neodrag) - Multi-Framework-Bibliotheken zum Ziehen. Wählen Sie Ihr Framework, das ziehende API-Verhalten bleibt gleich.

#### Sortierbare Liste

Lassen Sie den Benutzer eine Reihenfolge auf einer Liste definieren 

- [react-anything-sortable](https://github.com/jasonslyvia/react-anything-sortable) - Sortieren Sie Kinder mit Touch-Unterstützung und IE8-Kompatibilität.
- [sortablejs](https://github.com/SortableJS/Sortable) - Listen, die per Drag-and-Drop innerhalb und zwischen Listen neu geordnet werden können.

#### Rich Text Editor

- [alloyeditor](https://github.com/liferay/alloy-editor) - WYSIWYG Editor basierend auf CKEditor mit komplett neu geschrieben UI.
- [ckeditor4-react](https://github.com/ckeditor/ckeditor4-react) - Ein offizieller CKEditor 4 Rich Text Editor Wrapper.
- [ckeditor5-react](https://github.com/ckeditor/ckeditor5-react) - Ein offizieller CKEditor 5 Rich Text Editor Wrapper.
- [draft-js](https://github.com/facebook/draft-js) - A React Framework zum Erstellen von Texteditoren.
- [edtr-io](https://github.com/edtr-io/edtr-io) - [demo](https://edtr.io/) - [docs](https://edtr.io/docs/getting-started) - WYSIWYG Inline Web Editor mit Plugins.
- [megadraft](https://github.com/globocom/megadraft) - Rich Text Editor basiert auf draft.js.
- [react-ace](https://github.com/securingsincity/react-ace) - Ass (fortgeschritten) Code Editor) Wraper.
- [react-codemirror](https://github.com/uiwjs/react-codemirror) - [demo](https://uiwjs.github.io/react-codemirror/) - CodeMirror-Komponente für React.
- [react-contenteditable](https://github.com/lovasoa/react-contenteditable) - React Komponente für eine div mit editierbaren Inhalten.
- [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) - WYSIWYG Editor auf der Oberseite von [DraftJS](https://draftjs.org/).
- [react-editor](https://github.com/fritx/react-editor) - Einfacher Richtext-Editor, der Bilder einfügen und HTML.
- [react-medium-editor](https://github.com/wangzuo/react-medium-editor) - Medium-Editor Wrapper.
- [react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor) - Monaco Editor Komponente für React.
- [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor) - Einfache No-Frills code Editor mit Syntax Highlighting
- [react-quill](https://github.com/zenoamaro/react-quill) - Quill Wrapper.
- [react-trumbowyg](https://github.com/RD17/react-trumbowyg) - [Trumbowyg](https://alex-d.github.io/Trumbowyg/) Wrapper.
- [remirror](https://github.com/remirror/remirror) - [demo](https://remirror.io/playground) - [docs](https://remirror.io/docs) ProseMirror Toolkit für React.
- [slate](https://github.com/ianstormtaylor/slate) - [demo](http://slatejs.org/) - [docs](https://docs.slatejs.org/) - Ein vollständig anpassbares Framework zum Erstellen von Rich Text Editoren.
- [smartblock](https://github.com/appleple/smartblock) - [demo](https://appleple.github.io/smartblock/) - [docs](https://appleple.github.io/smartblock/get-started) Blockbasierter WYSIWYG-Editor basierend auf ProseMirror.
- [tiptap](https://github.com/ueberdosis/tiptap) - [demo](https://tiptap.dev/) - [docs](https://tiptap.dev/introduction) - Das Headless Editor Framework für Webartisans.

#### Markdown Herausgeber

- [react-simplemde-editor](https://github.com/RIP21/react-simplemde-editor) - React Bauteilhülle für [EasyMDE (the most fresh SimpleMDE fork)](https://github.com/Ionaru/easy-markdown-editor).
- [react-markdown-editor](https://github.com/jrm2k6/react-markdown-editor) - A markdown Editor mit React/Reflux.
- [react-md-editor](https://github.com/uiwjs/react-md-editor) - Eine einfache markdown Editor mit Vorschau, implementiert mit React.js und TypeScript.

#### Bildbearbeitung

Bildmanipulation

- [react-avatar-editor](https://github.com/mosch/react-avatar-editor) - Facebook-ähnliche, Avatar / Profilbildkomponente.
- [react-avatar-generator](https://github.com/JosephSmith127/react-avatar-generator) - Generieren sie lustiges kaleidoskop für benutzer-avatare.
- [react-easy-crop](https://github.com/ricardo-ch/react-easy-crop) - Komponente zum Zuschneiden / Drehen von Bildern / Videos mit einfachen Interaktionen. Touch freundlich.
- [react-image-crop](https://github.com/DominicTobias/react-image-crop) - Ein Responsive Image Crawling Tool für React.
- [react-image-cropper](https://github.com/jerryshew/react-image-cropper) - Bild beschneiden.
- [react-advanced-cropper](https://github.com/advanced-cropper/react-advanced-cropper) - A react cropper Bibliothek, um den cropper genau für Ihre Website zu erstellen design.
- [react-mobile-cropper](https://github.com/advanced-cropper/react-mobile-cropper) - Eine gebrauchsfertige Bildzuschnittbibliothek, die von beliebten Android-Croppern sehr inspiriert wird. Basierend auf `react-advanced-cropper`.

#### Form Component Collections

- [formsy-material-ui](https://github.com/mbrookes/formsy-material-ui) - Ein Formsy Kompatibilität Wrapper für Material UI Bauteile bilden.
- [formsy-react-components](https://github.com/twisty/formsy-react-components) - Eine Reihe von React JS-Komponenten zur Verwendung in einem formy-react Form.
- [react-input-enhancements](https://github.com/alexkuz/react-input-enhancements) - Reihe von Verbesserungen für die Eingabesteuerung.
- [react-widgets](https://github.com/jquense/react-widgets) - Ein &agrave; la carte Set von polierten, erweiterbaren und zugänglichen Inputs.

#### Verschiedenes

- [@anatoliygatt/numeric-stepper](https://github.com/anatoliygatt/numeric-stepper) - [demo](https://codesandbox.io/s/demo-for-anatoliygatt-numeric-stepper-mllfyl) - Eine vollständig thematisierbare und zugängliche numerische Schrittkomponente.
- [interweave](https://github.com/milesj/interweave) - React Bibliothek zum sicheren Rendern HTML, filterattribute, autowrap-text mit matchern, rendern emoji-zeichen und vieles mehr.
- [react-designer](https://github.com/react-designer/react-designer) - Einfach zu konfigurierende, leichte, editierbare Vektorgrafiken in Ihrem react Bauteile.
- [react-upload-gallery](https://github.com/TPMinan/react-upload-gallery) - React für Upload Image Gallery. Drag & Drop, Sortable, Customize.

#### Syntax Highlight

- [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter) - Syntax Hervorhebung Komponente mit Prismjs oder Highlightjs AST mit Inline-Styles.

## UI Layout

**[`Back to top ⬆️`](#table-of-contents)**

Komponenten zum Layout der Benutzeroberfläche der App 

- [autoresponsive-react](https://github.com/xudafeng/autoresponsive-react) - Auto Responsive Grid Layout Library.
- [hedron](https://github.com/JSBros/hedron) - Ein schnörkelloses Flexbox-Grid-System, das von gestylten Komponenten angetrieben wird.
- [m-react-splitters](https://github.com/martinnov92/React-Splitters) - Splitter-Komponente, geschrieben in TypeScript.
- [muuri-react](https://github.com/Paol-imi/muuri-react) - [demo](https://1czo5.csb.app/) - [docs](https://paol-imi.github.io/muuri-react) Responsive, sortierbare, filterbare und Draggable Grid Layouts.
- [react-grid-layout](https://github.com/STRML/react-grid-layout) - Ein Draggable und Resizable Grid Layout mit Responsive Breakpoints, für React.
- [react-layman](https://github.com/Jeshwin/react-layman) - [demo](https://jeshwin.github.io/react-layman/) - Dynamischer Tiling Layout Manager mit Tabs
- [react-masonry-component](https://github.com/eiriklv/react-masonry-component) - Wrapper für @desandro's Masonry.
- [react-reflex](https://github.com/leefsmp/Re-Flex) - Flex Layout Container-Komponente für fortschrittliche React Web-Anwendungen.
- [react-spaces](https://github.com/aeagle/react-spaces) - [demo/docs](https://www.allaneagle.com/react-spaces/demo/) - Nestable verankerte, resizable, scrollbare Komponenten.
- [react-stonecutter](https://github.com/dantrain/react-stonecutter) - Animierte Rasterlayout-Komponente.
- [react-colrow](https://github.com/phphe/react-colrow) - Responsive Rasterlayout-Komponenten. Basierend auf css Flexbox. Support Fraktion Breite, Auto wachsen.
- [react-schematic](https://github.com/umeshmk/react-schematic) - [demo](https://umeshmk.github.io/react-schematic) Erstellen Sie responsive Layouts mit stilisierten Schaltplänen ohne Overhead einer Theme-Konfiguration

## UI Animation

**[`Back to top ⬆️`](#table-of-contents)**

Animate Transitions 

- [data-driven-motion](https://github.com/tkh44/data-driven-motion) - Animieren Sie Ihre Daten ganz einfach.
- [react-animatable](https://github.com/inokawa/react-animatable) - Eine Animationsbibliothek mit Web Animations API.
- [react-anime](https://github.com/stelatech/react-anime) - Eine super einfache Animationsbibliothek.
- [react-flip-move](https://github.com/joshwcomeau/react-flip-move) - Mühelose Animation zwischen DOM Änderungen (z. B. Listenneuordnung) mithilfe der FLIP-Technik.
- [react-gsap-enhancer](https://github.com/azazdeaz/react-gsap-enhancer) - Nutzen Sie die volle Power von React und GSAP zusammen.
- [react-tsparticles](https://github.com/matteobruni/tsparticles/blob/master/components/react/README.md) - Eine leichte Komponente zum einfachen Erstellen interaktiver Partikelanimationen
- [react-motion](https://github.com/chenglou/react-motion) - Eine Feder, die Ihre Animationsprobleme löst.
- [react-mt-svg-lines](https://github.com/moarwick/react-mt-svg-lines) - Wrapper, um den Strich in SVGs zu animieren.
- [react-router-transition](https://github.com/maisano/react-router-transition) - Übergänge gebaut für reactRouter, powered by react-Motion.
- [react-spring](https://github.com/react-spring/react-spring) - Eine Frühlingsphysik basierte Animationsbibliothek.
- [react-ts-typewriter](https://github.com/gerardmarquinarubio/ReactTypewriter) - [demo](https://codesandbox.io/s/react-typewriter-example-mgyclf) - Einfach zu bedienender und anpassbarer Schreibmaschineneffekt für jeden Text.
- [framer-motion](https://github.com/framer/motion) - Eine Animations- und Gestenbibliothek.
- [react-spark-scroll](https://github.com/gilbox/react-spark-scroll) - Scroll-basierte Aktionen und Animationen für react.
- [react-track](https://github.com/gilbox/react-track) - Verfolgen Sie die Position des DOM Elemente. Erstellen Sie coole Animationen.
- [react-transitive-number](https://github.com/Lapple/react-transitive-number) - Wenden Sie Übergangseffekt auf numerische Strings an, a la alte Groupon-Timer.
- [react-web-animation](https://github.com/bringking/react-web-animation) - React Komponenten für die Web Animations API -.
- [auto-size-transition](https://github.com/DualWield/auto-size-transition) - Eine Komponente, die dynamisch entsprechend der internen Kindergröße skaliert wird
- [react-particles-bg](https://github.com/lindelof/particles-bg) - Hintergrund der Partikel.
- [gooey-react](https://github.com/luukdv/gooey-react) - [demo/docs](https://gooey-react.netlify.app/) - Der klebrige Effekt für React, verwendet für Shape Blobbing / Metaballs.
- [react-voodoo](https://github.com/react-voodoo/react-voodoo) - [demo/samples](https://github.com/react-voodoo/react-voodoo-samples) - Additive Animation Engine ermöglicht komplexe Android / iOS-ähnliche Animationen, Rendern von SSR, prädiktive Trägheit, Multitouch, etc.

### Parallaxen

- [simple-parallax-js](https://github.com/geosigno/simpleParallax.js) - [demo](https://simpleparallax.com) - Der einfachste Weg, um einen Parallaxeneffekt mit React und JavaScript auf Bildern
- [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt) - [demo](https://mkosir.github.io/react-parallax-tilt) - Tragen Sie einfach den Parallax Tilt Hover-Effekt auf Komponenten auf.

## UI Rahmen

**[`Back to top ⬆️`](#table-of-contents)**

### Reaktionsweise

Set von Komponenten + Responsive Layout System 

- [ant-design](https://github.com/ant-design/ant-design) - [demo/docs](https://ant.design/docs/react/introduce) - A UI Design Sprache aus China. Einzelperson [components](http://react-component.github.io/) verfügbar.
- [atlaskit](https://atlaskit.atlassian.com/packages) - Atlassians Beamter UI Bibliothek, mit Komponenten von  badge  bis  tree table .
- [base web](https://baseweb.design) - Base Web ist eine Grundlage für die Initiierung, Weiterentwicklung und Vereinheitlichung von Webprodukten.
- [carbon](https://github.com/carbon-design-system/carbon) - [demo/docs](https://www.carbondesignsystem.com/) - A design Das System wurde von IBM gebaut.
- [cdbreact](https://github.com/Devwares-Team/cdbreact) - [demo](https://www.devwares.com/product/contrast) - [docs](https://www.devwares.com/docs/contrast/react/index) - Elegant UI Kit-Bibliothek und wiederverwendbare Komponenten zum Erstellen von mobilen, responsiven Websites und Web-Apps.
- [chakra-ui](https://github.com/chakra-ui/chakra-ui) - [demo/docs](https://chakra-ui.com) Einfach, modular und zugänglich UI Komponenten für Ihre React Anwendungen.
- [ChatUI](https://github.com/alibaba/ChatUI) - [demo/docs](https://chatui.io/) - Die UI design Sprache und React Bibliothek für Conversational UI
- [CoreUI for React](https://github.com/coreui/coreui-react) - [demo/docs](https://coreui.io/react) - Open Source UI Komponentenbibliothek.
- [evergreen](https://github.com/segmentio/evergreen) - [demo/docs](https://evergreen.segment.com) Evergreen React UI Framework nach Segment.
- [fluentui](https://github.com/microsoft/fluentui) - UX Frameworks zum Erstellen schöner, plattformübergreifender Apps, die code, designund Interaktionsverhalten.
- [gestalt](https://github.com/pinterest/gestalt) - [demo/docs](https://pinterest.github.io/gestalt/#/) - Eine Reihe von Komponenten, die Pinterest unterstützt design Sprache.
- [grommet](https://github.com/grommet/grommet) - Das fortschrittlichste UX-Framework für Unternehmensanwendungen.
- [kokonut-ui](https://github.com/kokonut-labs/kokonutui) - Free Modern und anpassbar UI Bauteile.
- [Mantine](https://github.com/mantinedev/mantine) - [demo/docs](https://mantine.dev/) - Eine voll ausgestattete Bibliothek mit 100+ Hooks und Komponenten mit native Dark Theme Unterstützung
- [orbit](https://github.com/kiwicom/orbit) - Komponenten für den Bau reiseorientierter Projekte.
- [flowbite-react](https://github.com/themesberg/flowbite-react) - Open Source UI Komponentenbibliothek basierend auf React, Tailwind CSSund Flowbite.
- [primereact](https://github.com/primefaces/primereact) - A vollständig UI Framework mit 50+ Komponenten mit material, bootstrap und Custom Themes.
- [radix-ui](https://www.radix-ui.com/) - Ungestylte, zugängliche Komponenten für das Bauen von hoher Qualität design Systeme und Web-Apps.
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Bootstrap Komponenten, die mit React.
- [react-foundation](https://github.com/digiaonline/react-foundation) - Stiftung als React Bauteile.
- [reakit](https://github.com/ariakit/ariakit) - [demo/docs](https://reakit.io/docs/button/) Toolkit zum Erstellen zugänglicher Rich Web Apps
- [searchkit](https://github.com/searchkit/searchkit) - React UI Komponenten / Widgets. Der einfachste Weg, eine großartige Sucherfahrung mit Elasticsearch zu erstellen.
- [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React) - Die offizielle Semantik-UI-React Integration.
- [semi-design](https://github.com/DouyinFE/semi-design) - [demo/docs](https://semi.design/) - Eine moderne, umfassende, flexible design System.
- [shadcn/ui](https://github.com/shadcn-ui/ui) - [demo](https://ui.shadcn.com/examples/mail) - [docs](https://ui.shadcn.com/docs) - Schön gestaltete Komponenten, die Sie kopieren und in Ihre Apps einfügen können.
- [shineout](https://github.com/sheinsight/shineout) - [demo](https://shine.wiki/1.4.x/en/components/GetStart) - Chinesisch-freundliches Set von Komponenten: Formularelemente, Navigation, Tisch, Baum, Baumauswahl Dropdown usw.
- [Tremor](https://github.com/tremorlabs/tremor-raw) - [demo](https://tremor.so/charts) - [docs](https://tremor.so/docs/getting-started/installation) Open-Source-Komponenten zum Erstellen von Diagrammen und Dashboards.
- [untitled-ui-react](https://github.com/untitleduico/react) - [demo](https://www.untitledui.com/react/) - Wunderschön gestaltete Sammlung von Komponenten, die mit React Aria und Tailwind CSS.

#### Material Design

- 🚀 [Material UI](https://github.com/mui/material-ui) - Vollständige Suite von Komponenten. Bauen Sie Ihre eigenen design System, oder beginnen mit Material Design.
  - [Autocomplete](https://mui.com/material-ui/react-autocomplete/) - Zugängliche Autovervollständigung, Combobox, Multiselect
  - [Material Icons](https://mui.com/material-ui/material-icons/) - 1000+ SVG material Icons.
  - [Modal](https://mui.com/material-ui/react-modal/) - Zugängliche modale Dialogkomponente.
  - [Slider](https://mui.com/material-ui/react-slider/) - Zugängliche Schieberkomponente.
  - [Table](https://mui.com/material-ui/react-table/) - Tisch mit Sortieren, Auswählen, Paginieren, virtualisiert.
  - [Tree View](https://mui.com/material-ui/react-tree-view/) - Zugängliche Baumansichtskomponente für React.
- [react-essence](https://github.com/Evo-Forge/Essence) - Essenz - Das Wesentliche Material Design Rahmen.
- [react-materialize](https://github.com/react-materialize/react-materialize) - Material design für reactPowered by materializecss.
- [react-toolbox](https://github.com/react-toolbox/react-toolbox) - Eine Reihe von React Komponenten, die Google implementieren Material Design.
- [mdbootstrap](https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design) - React Bootstrap mit Material Design

### Mobil

- [antd-mobile](https://github.com/ant-design/ant-design-mobile) - Konfigurierbar mobil UI aus China.
- [Ionic React](https://ionicframework.com/blog/announcing-ionic-react/) - Ionic Framework: Einfach Android, Desktop und Progressive Web Apps mit einem code Base.
- [OnsenUI](https://github.com/OnsenUI/OnsenUI/) - [demo/docs](https://onsen.io/v2/guide/react/) Mobile App Framework mit Material und flache (iOS) Designs. Basierend auf Web Components.

### Komponentensammlungen

- [blueprint](https://github.com/palantir/blueprint) - [demo](https://blueprintjs.com/) - [docs](https://blueprintjs.com/docs/) - UI Toolkit zum Erstellen komplexer, datendichter Web-Schnittstellen für Desktop-Anwendungen (nicht mobile).
- [dataminr-react-components](https://github.com/dataminr/react-components) - Sammlung von Wiederverwendbaren React Komponenten und Versorgungsfunktionen.
- [shards-react](https://github.com/DesignRevision/shards-react) - [docs/demo](https://designrevision.com/docs/shards-react/getting-started) - Eine schöne und moderne React design System. Freemium.
- [aframe-react](https://github.com/ngokevin/aframe-react) - Erstellen Sie Virtual-Reality-Erfahrungen mit A-Frame und React.
- [react-admin](https://github.com/marmelab/react-admin) - Erstellen Sie Admin-Benutzererfahrungen auf Basis von REST- und GraphQL-Diensten.
- [refine](https://github.com/pankod/refine) - [demo](https://example.refine.dev) - [docs](https://refine.dev/docs) Erstellen Sie datenintensive Anwendungen in kürzester Zeit. Schiffe mit Ant Design System, auf Unternehmensebene UI Toolkit.
- [matrix-card](https://github.com/MehmetKaplan/matrix-card) - [demo](https://mehmetkaplan.github.io/matrix-card/) - Einfachste mögliche Komponente, um Matrix-Regen-Style-Karten zu generieren.
- [rsuite](https://github.com/rsuite/rsuite) - [demo/docs](https://rsuitejs.com/) - Suite von Komponenten für "Unternehmenssystemprodukte".
- [lens-ui](https://github.com/luciancaetano/lens-ui) - [docs](https://github.com/luciancaetano/lens-ui/blob/main/docs/introduction.md) - Ein Anzug von Komponenten, die sich auf Einfachheit konzentrieren.
- [Tailwindadmin](https://github.com/Tailwind-Admin/free-tailwind-admin-dashboard-template) - [docs](https://tailwind-admin.com/components) - Eine Sammlung von Ready-made ShadCN UI Komponenten, die Sie direkt in Ihre React/Next.js Projekte.

## UI Versorgungsunternehmen

**[`Back to top ⬆️`](#table-of-contents)**

### Reporter

Report berechnete Stile 

#### Sichtbarkeitsmelder

Bericht, wenn eine Komponente sichtbar/versteckt wird 

- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - React Implementierung der Intersection Observer API.
- [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) - Sensorkomponente.
- [react-waypoint](https://github.com/brigade/react-waypoint) - A React Komponente zum Ausführen einer Funktion, wenn Sie zu einem Element scrollen.

#### Mess-Reporter

Bestimmen und berichten Sie Messungen eines Elements 

- [react-component-queries](https://github.com/ctrlplusb/react-component-queries) - Stellen Sie Ihren Komponenten Requisiten basierend auf ihrer Breite und / oder Höhe zur Verfügung.
- [react-container-dimensions](https://github.com/okonet/react-container-dimensions) - Wrapper-Komponente, die Elementveränderungen erkennt.
- [react-dimensions](https://github.com/digidem/react-dimensions) - React Komponente höherer Ordnung, um Dimensionen des Containers zu erhalten.
- [react-height](https://github.com/nkbt/react-height) - Component-Wrapper zur Bestimmung und Meldung der Höhe der Kinderelemente.
- [react-measure](https://github.com/souporserious/react-measure) - Berechnungsmessungen eines React Bauteil.
- [react-sizeme](https://github.com/ctrlplusb/react-sizeme) - Machen Sie Ihre React Komponenten, die sich ihrer Breite und Höhe bewusst sind.

### Geräteeingang

Turn Benutzereingabe in Aktionen 

#### Keyboard Events

- [react-hotkeys](https://github.com/chrisui/react-hotkeys) - Deklaratives Hotkey- und Fokusbereichsmanagement für React.
- [react-key-handler](https://github.com/ayrton/react-key-handler) - React Eine Komponente zum Behandeln von Tastaturereignissen.
- [react-keydown](https://github.com/glortho/react-keydown) - Leichte Keydown-Wrapper für React Bauteile.
- [react-shortcuts](https://github.com/avocode/react-shortcuts) - Verwalten Sie Tastenkombinationen von einem Ort.
- [useKeyCapture](https://github.com/pranesh239/use-key-capture) - Ein benutzerdefinierter Haken, um die Key-Press-Hörer eines Ziels / Global zu erleichtern.
- [react-keyboard-navigator](https://github.com/zheeeng/react-keyboard-navigator) - Eine Suite von React Komponenten und Haken zum Auswählen von Geschwisterkomponenten durch die Tastatur.

#### Scroll-Events

- [react-scroll-components](https://github.com/jeroencoumans/react-scroll-components) - Eine Reihe von Komponenten, die react zum Page Scrolling.

#### Touch Swipe

- [react-swipe](https://github.com/voronianski/react-swipe) - Swipe.js als React Bauteil.

#### Mouse Events

- [react-hook-mighty-mouse](https://github.com/mkosir/react-hook-mighty-mouse) - [demo](https://mkosir.github.io/react-hook-mighty-mouse) Haken, der Mausereignisse auf ausgewählten Elementen verfolgt.

### Meta-Tags

Meta-Tags setzen, <title>Kinder von <head>_

- [react-helmet-async](https://github.com/staylor/react-helmet-async#readme) - Gewindesicherer Helm für React 16+ und Freunde
- [react-helmet](https://github.com/nfl/react-helmet) - Ein Dokumentenleiter für React.

### Portal

Rendern Sie ein Element bei einer beliebigen DOM Knotenpunkt

- [react-layer-stack](https://github.com/fckt/react-layer-stack) - Einfaches, aber ubiquitär leistungsfähiges und agnostisches Schichtsystem für React.
- [react-portal](https://github.com/tajo/react-portal) - React Komponente für den Transport von Modals, Lightboxes, Load Bars ... zu document.body.

### Testbenutzerverhalten

A/B-Tests, Experimente, ... 

- [react-experiments](https://github.com/HubSpot/react-experiments) - React Komponenten zur Durchführung UI Experimente.

## Code Design

**[`Back to top ⬆️`](#table-of-contents)**

Bibliotheken, die helfen code Design   

### Datenspeicher

Datenfluss / Datenmanagement / Datenspeicher / Komponenten Zustand / Datenfluss

- [baobab-react](https://github.com/Yomguithereal/baobab-react) - React Integration für Baobab.
- [cerebral](https://github.com/cerebral/cerebral) - Ein State Controller mit eigenem Debugger.
- [effector-react](https://github.com/effector/effector) - React Bindungen für Effector, einen effektiven Multi-Store-State Manager.
- [fireproof](https://github.com/fireproof-storage/fireproof) - [demo](https://fireproof.storage/try-free/) - [docs](https://use-fireproof.com/docs/welcome) Pure JS, Zero Dependency, CRDT Datenbank - läuft im Browser und verbindet sich mit jeder Cloud oder jedem Backend
- [RxDB](https://rxdb.info/) - [demo](https://github.com/pubkey/rxdb/tree/master/examples/react) - [docs](https://rxdb.info/quickstart.html) Eine schnelle, lokale erste, reaktive Datenbank für JavaScript Anträge
- [fluxible](https://github.com/yahoo/fluxible) - Ein steckbarer Behälter für universelle Flussmittelanwendungen.
- [kea](https://github.com/mariusandra/kea) - High Level Architektur für React Apps.
- [react-i13n](https://github.com/yahoo/react-i13n) - Ein performanter, skalierbarer und steckbarer Ansatz zur Instrumentierung Ihrer React Anwendung.
- [react-redux](https://github.com/reactjs/react-redux) - Beamter React Bindungen für Redux.
- [redux-batched-actions](https://github.com/tshelburne/redux-batched-actions) - Reducer + Aktion zum Reduzieren von Aktionen unter einer einzigen Abonnentenbenachrichtigung.
- [redux](https://github.com/reactjs/redux) - Vorhersagbarer Zustandsbehälter für JavaScript Apps.
- [reselect](https://github.com/reactjs/reselect) - Selector Library für Redux.
- [resourcerer](https://github.com/SiftScience/resourcerer) - Deklaratives Data-Fetching Framework für REST APIs
- [synergies](https://github.com/lukasbach/synergies) - [docs](https://synergies.js.org) Eine performante und verteilte Kontext-State-Bibliothek zum Erstellen von Wiederverwendbaren React Zustandslogik durch Synergisieren atomarer Kontextstücke.
- [zustand](https://zustand.surge.sh/) - [docs](https://github.com/pmndrs/zustand) - Eine schnelle Bearbones State-Management-Lösung mit vereinfachten Flux-Prinzipien und boilerplate-freien Haken-Api.
- [teaful](https://github.com/teafuljs/teaful) - Winzig, leicht und kraftvoll React Staatliche Verwaltung

### Form Logic

- [data-driven-forms](https://github.com/data-driven-forms/react-forms) - Eine deklarative Art, Formen mit aller Funktionalität zu erstellen.
- [formik](https://github.com/jaredpalmer/formik) - Bauen Sie Formen ohne Tränen und unterstützt Validierung in Leichtigkeit.
- [formsy-react](https://github.com/formsy/formsy-react/) - Form Input Builder und Validator für React JS.
- [Phormal](https://github.com/phormal/phormal) - [Docs & Demos](https://phormal.dev/getting-started/react) Responsive, mehrsprachige Formulare mit eingebauter Validierung, Unterstützung für den dunklen Modus und Rechts-nach-Links-Sprachen.
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - React Hooks für die Formularvalidierung ohne den Aufwand.
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) - A React Eine Komponente zum Erstellen von Webformularen aus JSONSchema.
- [react-client-validation](https://github.com/0529bill/react-client-validation) - Einfache und superleichte Validierung für React.
- [react-final-form](https://github.com/final-form/react-final-form) - Subskriptionsbasierte Form State Management
- [react-formawesome](https://github.com/MAKARD/react-formawesome) - Komplexe Bibliothek zum Erstellen fantastischer Formen.
- [surveyjs](https://github.com/surveyjs/survey-library) - Die Advanced Survey and Form Bibliothek
- [Formily](https://github.com/alibaba/formily) - Hohe Leistung, erweiterbar und Typescript freundlich
- [hook-form-react](https://github.com/luoanb/hook-form-react) - [docs](https://luoanb.github.io/hook-form-react) - Eine leichte, abhängigkeitsfreie Lösung React Haken zur Formularvalidierung.

### Router

- [react-router-component](https://github.com/STRML/react-router-component) - Deklarative Routerkomponente für React.
- [react-router-scroll](https://github.com/taion/react-router-scroll) - React Router Scroll Management.
- [react-router](https://github.com/reactjs/react-router) - Eine komplette Routing-Bibliothek für React.
- [redux-first-history](https://github.com/salvoravida/redux-first-history) - Redux Erste Geschichte - Redux Historisch verbindliche Unterstützung react-router - @reach/router - wouter
- [universal-router](https://github.com/kriasoft/universal-router) - Ein einfacher Middleware-Router für isomorphe JavaScript Web Apps.
- [wouter](https://github.com/molefrog/wouter) - Eine minimalistisch freundliche ~1,3KB Routing-Bibliothek. Nichts anderes als Haken.
- [tanstack-router](https://github.com/TanStack/router) - Typsicherer Router mit eingebautem Caching & URL Staatliche Verwaltung

### Requisiten vom Server

Komponenteneigenschaften asynchron über das Netzwerk abgerufen 

- [react-refetch](https://github.com/heroku/react-refetch) - Eine einfache, deklarative und zusammensetzbare Möglichkeit, Daten für React Bauteile.
- [redux-connect](https://github.com/makeomatic/redux-connect) - Bietet Dekorateur zum Auflösen von async Props in reactRouter.
- [axios-react](https://github.com/soroushchehresa/axios-react) - HTTP Client-Komponente für React.

### Kommunikation mit dem Server

- [apollo-client](https://github.com/apollostack/apollo-client) - Ein einfacher Caching-Client für jeden GraphQL-Server und UI Rahmen.
- [react-relay](https://github.com/facebook/relay) - Relais ist ein JavaScript Framework für die Erstellung datengesteuert React Anträge.
- [query](https://github.com/TanStack/query) - [docs](https://tanstack.com/query/v4) Leistungsstarkes asynchrones Zustandsmanagement, Server-State-Dienstprogramme und Datenabruf für TS/JS, React, Solid, Svelte und Vue.

### CSS / Stil

- [aesthetic](https://github.com/milesj/aesthetic) - Ein leistungsfähiger typsicherer, Framework-Agnostiker, CSS-in-JS-Bibliothek für das Styling von Komponenten, sei es einfache Objekte, das Importieren von Stylesheets oder einfach das Verweisen auf externe Klassennamen.
- [aphrodite](https://github.com/Khan/aphrodite) - It&#39;s Inline-Stile, aber sie funktionieren!.
- [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer) - Laufzeit Autoprefixer für Inline Style Objects.
- [@classmatejs/react](https://github.com/richard-unterberg/classmatejs/tree/master/packages/react) - Ein auf Klassennamen fokussierter Komponentenbauer mit einer Syntax wie gestylte Komponenten und dem Zucker der Varianten von cva.
- [react-container-query](https://github.com/d6u/react-container-query) - Modulare Responsive-Komponente.
- [react-responsive](https://github.com/contra/react-responsive) - Medienanfragen in react für responsive design.
- [reactponsive](https://github.com/jmlweb/reactponsive) - Responsive Komponenten und Haken.
- [styled-components](https://github.com/styled-components/styled-components) - Visuelle Primitive für die Komponente Alter.
- [stitches](https://github.com/stitchesjs/stitches) - CSS-in-JS mit fast Null Laufzeit, SSR, multivarianter Unterstützung.

### HTML Meldebogen

- [jsx-control-statements](https://github.com/AlexGilleran/jsx-control-statements) - Neater Wenn und For For React JSX.

### Isomorphe Apps

- [hypernova](https://github.com/airbnb/hypernova) - Ein Service für serverseitiges Rendern Ihrer JavaScript Ansichten.
- [isomorphic-style-loader](https://github.com/kriasoft/isomorphic-style-loader) - Isomorph CSS Style Loader für Webpack.
- [react-server](https://github.com/redfin/react-server) - React Framework mit Server-Render zum schnellen Seitenladen.
- [rill](https://github.com/rill-js/rill) - Universal Web Application Framework.
- [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) - Serverseitiges Rendering für Ihre Webpack-Anwendungen (z.B.) React).

### Boilerplate

Gerüst / Starterkit / Yeoman-Generator / Stack-Ensemble / Seed 

- [create-react-app](https://github.com/facebookincubator/create-react-app) - Schaffen React Apps ohne Build-Konfiguration.
- [crisp-react](https://github.com/winwiz1/crisp-react) - Express Integration in TypeScript mit Unterstützung für mehrere SPAs und Fallstrickvermeidung.
- [cra-template-redux-auth-starter](https://github.com/Nilanth/cra-template-redux-auth-starter) - A Redux Auth Starter Boilerplate für CRA.
- [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate) - Live-Editing-Entwicklung auf Desktop-App.
- [elegant](https://github.com/elegantframework/elegant-cli) - [docs](https://www.elegantframework.com/docs/installation) - [demo](https://www.elegantframework.com/) - Eine einfache React Framework zum schnellen Aufbau schöner und ausdrucksstarker Web-Anwendungen mit Next.js, Tailwind CSS, und Markdown Beladung.
- [extensive-react-boilerplate](https://github.com/brocoders/extensive-react-boilerplate) - Boilerplate mit Next.js, Auth (Anmelden, Anmelden, Passwort zurücksetzen, E-Mail bestätigen, Token aktualisieren), Material UI, React Hakenform I18N, Datei-Uploads (unterstützt lokale und Amazon S3-Treiber), Tests, CI.
- [generator-starhackit](https://github.com/FredericHeem/starhackit) - Full-Stack Starter Kit.
- [nwb](https://github.com/insin/nwb) - CLI Tool und devDependency für React apps &amp; Komponenten und npm Module.
- [nx](https://nx.dev) - Build System der nächsten Generation mit erstklassiger Monorepo-Unterstützung und leistungsstarken Integrationen.
- [PBandJ](https://github.com/moishinetzer/pbandj) - Zero-Config Reusable Component Framework.
- [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) - Minimale Live-Bearbeitung Boilerplate für Ihre nächste ReactJS Projekt.
- [rockpack](https://github.com/AlexSergey/rockpack) - Einfache Lösung zum Erstellen React Anwendung mit SSR, Bündelung, Auskleidung, Prüfung innerhalb von 5 Minuten.
- [create-react-dependency](https://github.com/andrelmlins/create-react-dependency) - Schaffen react Abhängigkeiten ohne Build-Konfiguration.
- [phoenix](https://github.com/Sazito/phoenix) - Eine einfache Boilerplate, die Ihnen hilft, Ihre react Anwendung mit Server Side Rendering & Localization Unterstützung.
- [react-enterprise-starter-kit](https://github.com/anandgupta193/react-enterprise-starter-kit) - Sehr skalierbar und performant Awesome React Starter Kit für eine Unternehmensanwendung mit einer sehr einfach zu wartenden Codebasis.
- [Tailwindadmin](https://tailwind-admin.com/) - Free Shadcn Dashboard Template auf React und Tailwind CSS Mehrfache Framework-Unterstützung

### Verschiedenes

- [react-inlinesvg](https://github.com/matthewwithanm/react-inlinesvg) - Eine SVG-Ladekomponente für ReactJS.
- [react-godfather](https://github.com/kapolos/react-godfather) - Eine neue Art, funktionale Komponenten zu schreiben, ohne Haken.
- [react-vvm](https://github.com/behnamrhp/React-VVM) - Ein neuer Ansatz für MVVM in React, um eine saubere Trennung von Bedenken zu erzwingen, die Boilerplate zu reduzieren und die automatische Re-Render-Optimierung für skalierbare UI Logik.
- [react-call](https://github.com/desko27/react-call) - Rufen Sie an React Bauteile.
- [redux-auth-patch](https://github.com/lynndylanhurley/redux-auth) - Vollständiges Token-Authentifizierungssystem für react + redux die isomorphe Wiedergabe unterstützt.
- [redux-search](https://github.com/treasure-data/redux-search) - Redux Bindungen für die clientseitige Suche.
- [tcomb-react](https://github.com/gcanti/tcomb-react) - Alternative Syntax für PropTypes.
- [react-universal-hooks](https://github.com/salvoravida/react-universal-hooks) - :tada: Unterstützung react Haken überall (funktionale oder Klassenkomponente).

## Versorgungsunternehmen

**[`Back to top ⬆️`](#table-of-contents)**

- [qrcode.react](https://github.com/zpao/qrcode.react) - A &lt;QRCode/&gt;Komponente zur Verwendung mit React.
- [`<qr-code>`](https://github.com/bitjson/qr-code) – A no-dependencies, customizable, animate-able, SVG-based `<qr-code>` element.
- [react-children-utilities](https://github.com/fernandopasik/react-children-utilities) - Erweiterte Utils für ReactKinder.
- [react-media](https://github.com/ReactTraining/react-media) - A CSS Medienabfragekomponente für React.
- [react-middle-ellipsis](https://github.com/bluepeter/react-middle-ellipsis) - [demo](https://bluepeter.github.io/react-middle-ellipsis/) - Lange Saiten in der Mitte statt am Ende.
- [react-translate-component](https://github.com/martinandert/react-translate-component) - Mehrsprachiger/lokalisierter Textinhalt.

### i18n

Internationalisierung / L10n / Lokalisierung / Übersetzung 

- [react-i18next](https://github.com/i18next/react-i18next) - Internationalisierung für react richtig gemacht. Mit dem i18next i18n Ökosystem.
- [react-intl](https://github.com/yahoo/react-intl) - Internationalisierung React Apps.
- [react-localized](https://github.com/fakundo/react-localized) - Internationalisierung für React Komponenten basierend auf `gettext` Format.
- [react-translate-maker](https://github.com/CherryProjects/react-translate-maker) - Universale Internationalisierung ()i18nOpen Source Bibliothek für React.
- [react-intl-universal](https://github.com/alibaba/react-intl-universal) - [demo](https://g.alicdn.com/alishu/common/0.0.95/intl-example/index.html) Internationalisierung React Apps. Nicht nur für React.Component aber auch für Vanilla JS.
- [@tolgee/react](https://github.com/tolgee/tolgee-js/tree/main/packages/react) - [docs](https://tolgee.io/docs/web/using_with_react/installation) – Webbasiertes Lokalisierungstool, mit dem Benutzer direkt im React App, die sie entwickeln
- [js-lingui](https://github.com/lingui/js-lingui) - [docs](https://lingui.js.org) – Eine lesbare, automatisierte und optimierte (5 kb) Internationalisierung für JavaScript.

### Framework-Bindungen / Integrationen

- [backbone-react-component](https://github.com/magalhas/backbone-react-component) - Ein bisschen raffinierter Kleber, der Ihre Backbone-Modelle automatisch anschließt.
- [elm-react-component](https://github.com/KtorZ/elm-react-component) - A React Bauteil, das ein Elm-Modul zur Verwendung in einem React Anwendung.
- [gl-react](https://github.com/ProjectSeptemberInc/gl-react) - OpenGL / WebGL Bindungen für React komplexe Effekte über Bilder und Inhalte zu implementieren.
- [react-backbone](https://github.com/jhudson8/react-backbone) - Backbone-aware Mixins für react Und noch viel mehr.
- [react-d3-library](https://github.com/react-d3-library/react-d3-library) - Open-Source-Bibliothek zur Verwendung von D3 in React.
- [react-elm-components](https://github.com/evancz/react-elm-components) - Schreiben React Komponenten in Elm.
- [react-famous](https://github.com/pilwon/react-famous) - React Brücke zu Famo.us.
- [react-localstorage](https://github.com/STRML/react-localstorage) - Einfache, komponentenbasierte Localstorage-Implementierung für Facebook&#39;s React.
- [react-lottie-player](https://github.com/mifi/react-lottie-player) - [demo](https://mifi.github.io/react-lottie-player/) - Deklarative Lottie Animation Player.
- [react-on-rails](https://github.com/shakacode/react_on_rails) - Integration von React + Webpack + Rails zum Erstellen universeller (isomorpher) Apps.
- [react-three-renderer](https://github.com/toxicFork/react-three-renderer) - Rendern in ein Three.js Canvas mit React.
- [react-threejs](https://github.com/fritx/react-threejs) - Einfachste Bindungen zwischen React & Three.js
- [reactfire](https://github.com/firebase/reactfire) - ReactJS Mixin für einfache Firebase-Integration.
- [reactive-elements](https://github.com/PixelsCommander/ReactiveElements) - Ermöglicht die Verwendung React.js Komponente als HTML Element (Webkomponente).
- [react-unity-webgl](https://github.com/elraccoone/react-unity-webgl) - Einheitsintergration mit Zwei-Wege-Kommunikation unter Verwendung eines eingebauten Ereignissystems.

### Integrationen mit Drittanbieterdiensten

- [react-ga](https://github.com/react-ga/react-ga) - React Google Analytics Modul.
- [react-google-analytics](https://github.com/hzdg/react-google-analytics) - Google Analytics Komponente.
- [react-google-autocomplete](https://github.com/ErrorPro/react-google-autocomplete) - Google platziert API-Komponenten und Hooks.
- [react-recaptcha](https://github.com/appleboy/react-recaptcha) - A react.js reCAPTCHA für Google.
- [react-stripe-checkout](https://github.com/azmenak/react-stripe-checkout) - Load stripe&#39;s checkout.js als ein react Bauteil. Einfachste Möglichkeit, Checkout mit React.
- [redux-segment](https://github.com/rangle/redux-segment) - Segment.io Analytics Integration für redux.
- [react-slack-notification](https://github.com/Nilanth/react-slack-notification) - Senden Sie Nachrichten und Fehlerprotokolle direkt an einen Slack-Kanal.
- [react-firebase-hooks](https://github.com/csfrequency/react-firebase-hooks) - Haken, um Firebase in Ihre Anwendung zu integrieren.

## Leistung

**[`Back to top ⬆️`](#table-of-contents)**

### UI

- [inferno](https://github.com/trueadm/inferno) - Eine extrem schnelle, React- wie JavaScript Bibliothek zum Aufbau moderner Benutzeroberflächen.
- [react-fastclick](https://github.com/JakeSidSmith/react-fastclick) - Fast Touch Events für React.
- [react-static-container](https://github.com/reactjs/react-static-container) - Rendert statische Inhalte effizient.

#### Inspektion

- [react-perf-tool](https://github.com/RamonGebben/react-perf-tool) - Debug-Leistung Ihrer React Anwendung.
- [react-render-visualizer](https://github.com/redsunsoft/react-render-visualizer) - Render Visualizer für ReactJS.

#### Lazy Load

- [react-infinite-grid](https://github.com/ggordan/react-infinite-grid) - A React eine Komponente, die ein Raster von Elementen darstellt.
- [react-infinite](https://github.com/seatgeek/react-infinite) - Ein browserbereiter effizienter Scrolling-Container basierend auf UITableView.
- [react-lazy-load](https://github.com/loktar00/react-lazy-load) - React Eine Komponente, die Kinderelemente darstellt, wenn sie den Viewport betreten.
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload) - Lazyload Ihre Komponente, Bild oder alles, was die Leistung zählt.
- [react-virtualized](https://github.com/bvaughn/react-virtualized) - React Komponenten zum effizienten Rendern großer Listen und tabellarischer Daten.

### App Größe

- [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) - unnötig entfernen React propTypes.
- [react-lite](https://github.com/Lucifier129/react-lite) - Eine Umsetzung von React Optimiert für kleine Skriptgröße.

### Server-Side Rendering

- [iSSR](https://github.com/AlexSergey/issr) - Der einfachste Weg, Ihre React Anwendung auf Server-Side Rendering. Behandelt Nebenwirkungen und synchronisiert den Zustand.
- [react-esi](https://github.com/dunglas/react-esi) - Eine Bibliothek zur Steigerung der SSR-Leistung durch Belichtung React Komponenten als Edge Side Includes (ESI) Fragmente

## Dev Tools

**[`Back to top ⬆️`](#table-of-contents)**

### Test

- [enzyme](https://github.com/airbnb/enzyme) - JavaScript Testprogramme für React.
- [jest-cli](https://github.com/facebook/jest) - schmerzlos JavaScript Prüfung.
- [react-unit](https://github.com/pzavolinsky/react-unit) - Leichtgewichtsprüfbibliothek für ReactJS.
- [redux-test-recorder](https://github.com/conorhastings/redux-test-recorder) - A redux Middleware zur automatischen Generierung von Tests für Reduzierer durch ui Interaktion.
- [rut](https://github.com/milesj/rut) - React Testen leicht gemacht mit `react-test-renderer`. Stützen DOM und Custom Renderer.
- [unexpected-react](https://github.com/bruderstein/unexpected-react) - Plugin für Unerwartetes, um das Testen der vollen React Virtuelle DOMund auch der flache Renderer.
- [playwright](https://github.com/microsoft/playwright) enables reliable end-to-end testing for modern web apps.

### Redux

- [redux-devtools-chart-monitor](https://github.com/romseguy/redux-devtools-chart-monitor) - Ein Chartmonitor für Redux DevTools.
- [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) - Ein veränderliches und bewegliches Dock für Redux DevTools überwacht.
- [redux-devtools-filterable-log-monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor) - Filterbarer Baumansichtsmonitor für Redux DevTools.
- [redux-devtools-inspector](https://github.com/alexkuz/redux-devtools-inspector) - Ein anderes Redux DevTools Monitor.
- [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor) - Der Default Monitor für Redux DevTools mit einer Baumansicht.
- [redux-devtools](https://github.com/gaearon/redux-devtools) - DevTools für Redux mit Hot Reloading, Action Replay und anpassbar UI.
- [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) - Redux DevTools remote.

### Inspektion

- [fluxguard](https://fluxguard.com) - PROD Change Monitoring, das alle hervorhebt DOM + design Änderungen.
- [react-inspector](https://github.com/xyc/react-inspector) - Power of Browser DevTools Inspektoren direkt in Ihrem React App.
- [reactotron](https://github.com/reactotron/reactotron) - Eine CLI- und OS X-App zur Inspektion Ihrer React JS und React Native Apps.
- [Tail Lens](https://taillens.io) - Tailwind Editor im Browser: Inspect, Edit, Preview, Copy.

### Verschiedenes

- [component-controls](https://github.com/ccontrols/component-controls) - [demo](https://component-controls.com) - [docs](https://component-controls.com/tutorial) Ein Werkzeug der nächsten Generation, um blitzschnelle Dokumentationsseiten zu erstellen.
- [cosmos-js](https://github.com/skidding/cosmos) - DX-Tool zum Entwerfen wirklich gekapselt React Bauteile.
- [react-demo-tab-cli](https://github.com/mkosir/react-demo-tab-cli) - CLI-Tool zum Erstellen von Demos von react Bauteile.
- [react-styleguidist](https://github.com/sapegin/react-styleguidist) - React Style Guide Generator.
- [standard-react](https://github.com/feross/standard) - JavaScript Standard Style Guide.
- [Plasmic](https://www.plasmic.app/) - Mächtig design Werkzeug zum Aufbau Ihres React Komponenten visuell.
- [SimpleLocalize](https://github.com/simplelocalize/simplelocalize-cli) - Open Source CLI Tool zum Finden i18n Schlüssel in React Projekte.
- [react-device-frameset](https://github.com/zheeeng/react-device-frameset) - React Geräterahmensatzkomponente.

## Verschiedenes

**[`Back to top ⬆️`](#table-of-contents)**

- [DataFormsJS JSX Loader](https://github.com/dataformsjs/dataformsjs/blob/master/docs/jsx-loader.md) - Klein JavaScript Compiler zum schnellen Konvertieren von JSX in JS direkt auf einer Webseite.
- [html-to-react-components](https://github.com/roman01la/html-to-react-components) - Extrakt annotierte Teile von HTML in React Komponenten als separate Module.
- [htmltojsx](https://github.com/reactjs/react-magic) - Automatisch AJAXify plain HTML Mit der Kraft der ReactEs &#39;s Magie!
- [jsonx](https://github.com/repetere/jsonx) - React JSON Syntax.
- [mozaik](https://github.com/plouc/mozaik) - Moza&iuml;k ist ein Tool basierend auf nodejs / react / d3 / Stylus, um einfach schöne Dashboards zu erstellen.
- [react-blessed](https://github.com/Yomguithereal/react-blessed) - A react Renderer für gesegnet.
- [jsondiffpatch-react](https://github.com/bluepeter/jsondiffpatch-react) - JSON diffing.
- [iron-session](https://github.com/vvo/iron-session) - Sichere, zustandslose und Cookie-basierte Sitzungsbibliothek.

### Statischer Website Generator

- [gatsby](https://github.com/gatsbyjs/gatsby) - Verwandeln Sie Klartext in dynamische Blogs und Websites mit React.js.

## Cloud-Lösungen

**[`Back to top ⬆️`](#table-of-contents)**

### Datenbanken

- [BCMS](https://github.com/bcms/cms) - API-basiertes, Open-Source, selbsthostables Content Management System für Gatsby, Nuxt und Next.
- [crisp-bigquery](https://github.com/winwiz1/crisp-bigquery) - Google BigQuery mit Express in TypeScript.
- [react-server-routing-example](https://github.com/mhart/react-server-routing-example) - Universales Client/Server-Routing und Daten mit AWS DynamoDB.
