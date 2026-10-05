# Absolument génial React Composants et bibliothèques

Ceci est une liste de composants AWESOME. Non, ce n'est pas une liste complète de chaque React composant sous le soleil. Qu'est-ce que ça veut dire ? Et bien :

- Ça résout un vrai problème.
- Il le fait de façon unique, magnifique ou exceptionnelle. (Et ce n'est pas super populaire et bien connu... aucun intérêt à les énumérer.)
- Il a récemment code s'engage !

Cherchez un .. pour des projets vraiment étonnants. Et recherchez des commentaires et des avis sur quickie maintener dans  (italic parens)  après quelques annonces de note.

Voir aussi: [Awesome React Frameworks](https://github.com/brillout/awesome-react-frameworks).

Mainteneurs:

- [@petebray](https://github.com/bluepeter), author of [Fluxguard](https://fluxguard.com) &mdash; monitor PROD website changes.
- [@brillout](https://twitter.com/brillout), author of [Vike](https://vike.dev) &mdash; a fast Vite-based React framework that is flexible, lean, community-driven and dependable.

### Contribution

Veuillez consulter notre [lignes directrices pour la contribution](https://github.com/brillout/awesome-react-components/blob/master/CONTRIBUTING.md). Nous gardons cette liste fraîche par **exiger que toutes les PR suppriment une ou plusieurs entrées non-souvent de cette liste**. S'il vous plaît PR seulement une nouvelle ressource si vous supprimez ALSO une.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Sommaire

- [UI Composantes](#ui-components)
  - [Grille de données modifiable / tableur](#editable-data-grid--spreadsheet)
  - [Tableau](#table)
  - [Scroll infini](#infinite-scroll)
  - [Couverture](#overlay)
  - [Notification](#notification)
  - [Outils](#tooltip)
  - [Menu](#menu)
  - [Sticky](#sticky)
  - [Tables](#tabs)
  - [Chargeur](#loader)
  - [Captcha](#captcha)
  - [Carrousel](#carousel)
  - [Boutons](#buttons)
  - [Effacement](#collapse)
  - [Graphique](#chart)
  - [Palette des commandes](#command-palette)
  - [Arbre](#tree)
  - [UI Navigation](#ui-navigation)
  - [Barre de défilement personnalisée](#custom-scrollbar)
  - [Audio / Vidéo](#audio--video)
  - [Carte](#map)
  - [Heure / Date / Âge](#time--date--age)
  - [Photo / Image](#photo--image)
  - [Icônes](#icons)
  - [Paginateur](#paginator)
  - [Markdown Affichage](#markdown-viewer)
  - [Toile](#canvas)
  - [Capture d'écran](#screenshot)
  - [Divers](#miscellaneous)
  - [Composants du formulaire](#form-components)
    - [Date / Sélection du temps](#date--time-picker)
    - [Picker Emoji](#emoji-picker)
    - [Types d'entrée](#input-types)
    - [Autocomplet](#autocomplete)
    - [Sélectionner](#select)
    - [Cueillette de couleurs](#color-picker)
    - [Basculer](#toggle)
    - [Slider](#slider)
    - [Bouton radio](#radio-button)
    - [Type Sélectionner](#type-select)
    - [Entrée de l'étiquette](#tag-input)
    - [Entrée automatique / zone de texte](#autosize-input--textarea)
    - [Catégorie](#star-rating)
    - [Faites glisser et déposez](#drag-and-drop)
    - [Liste triable](#sortable-list)
    - [Éditeur de texte riche](#rich-text-editor)
    - [Markdown Éditeur](#markdown-editor)
    - [Édition de l'image](#image-editing)
    - [Recouvrement des composantes du formulaire](#form-component-collections)
    - [Divers](#miscellaneous-1)
    - [Syntaxe mise en évidence](#syntax-highlight)
- [UI Mise en page](#ui-layout)
- [UI Animation](#ui-animation)
  - [Parallaxe](#parallax)
- [UI Cadres](#ui-frameworks)
  - [Réceptif](#responsive)
    - [Material Design](#material-design)
  - [Mobile](#mobile)
  - [Recouvrement des composantes](#component-collections)
- [UI Services publics](#ui-utilities)
  - [Reporter](#reporter)
    - [Rapporteur de visibilité](#visibility-reporter)
    - [Rapporteur de mesure](#measurement-reporter)
  - [Entrée du périphérique](#device-input)
    - [Événements clavier](#keyboard-events)
    - [Faire défiler les événements](#scroll-events)
    - [Touchez Swipe](#touch-swipe)
    - [Événements de la souris](#mouse-events)
  - [Meta Tags](#meta-tags)
  - [Portail](#portal)
  - [Tester le comportement de l'utilisateur](#test-user-behavior)
- [Code Design](#code-design)
  - [Magasin de données](#data-store)
  - [Logique du formulaire](#form-logic)
  - [Routeur](#router)
  - [Props depuis le serveur](#props-from-server)
  - [Communication avec le serveur](#communication-with-server)
  - [CSS / Style](#css--style)
  - [HTML Modèle](#html-template)
  - [Applications isomorphes](#isomorphic-apps)
  - [Chaudière](#boilerplate)
  - [Divers](#miscellaneous-2)
- [Services publics](#utilities)
  - [i18n](#i18n)
  - [Fixations-cadres / intégrations](#framework-bindings--integrations)
  - [Intégrations avec des services tiers](#integrations-with-third-party-services)
- [Rendement](#performance)
  - [UI](#ui)
    - [Inspecter](#inspect)
    - [Charge paresseuse](#lazy-load)
  - [Taille de l'application](#app-size)
  - [Rendu à l'aide du serveur](#server-side-rendering)
- [Outils Dev](#dev-tools)
  - [Essai](#test)
  - [Redux](#redux)
  - [Inspecter](#inspect-1)
  - [Divers](#miscellaneous-3)
- [Divers](#miscellaneous-4)
  - [Générateur de site Web statique](#static-website-generator)
- [Solutions Cloud](#cloud-solutions)
  - [Bases de données](#databases)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## UI Composantes

**[`Back to top ⬆️`](#table-of-contents)**

### Grille de données modifiable / tableur

- [AG Grid](https://github.com/ag-grid/ag-grid) - Grille de données avancée / Tableau de données Javascript / React / AngularJS / Composants Web.
- [fortune-sheet](https://github.com/ruilisi/fortune-sheet) - Un composant de spreedsheet en ligne qui fournit des fonctionnalités hors de la boîte tout comme Excel.
- [gigatables-react](https://github.com/GigaTables/reactables) - Tri, pagination / défilement infini, recherche globale / colonne, AJAX Et plus encore.
- [Handsontable](https://github.com/handsontable/handsontable) - [demo](https://handsontable.com/demo) - [docs](https://handsontable.com/docs/react-data-grid/) - Grille de données avec tableur UI soutien React, Angular, TypeScript et JavaScript.
- [jqwidgets-react-grid](https://www.jqwidgets.com/react/react-grid/) - Filtrage, Pagination, Groupement, Exporter vers Excel, PDF, CRUD et plus.
- [MUI X Data grid](https://github.com/mui/mui-x) - [demo/docs](https://mui.com/x/react-data-grid/) - Grille de données rapide et personnalisable avec des fonctionnalités avancées pour les utilisateurs de puissance et des cas d'utilisation complexes.
- [react-data-grid](https://github.com/adazzle/react-data-grid) - Une grille comme Excel.
- [ReactGrid](https://github.com/silevis/reactgrid) - [demo/docs](https://reactgrid.com/docs/) - Ajouter un comportement semblable à un tableur à votre application
- [revo-grid](https://github.com/revolist/revogrid) - [demo/docs](https://revolist.github.io/revogrid/) - Grille de données Powerfull pour React / AngularJS / Vue / Composants Web avec personnalisation avancée.
- [SheetXL](https://github.com/sheetxl/sheetxl) – A high-performance spreadsheet grid. TypeScript, ESM, Node/browser, Excel-compatible functions.
- [SVAR React DataGrid](https://svar.dev/react/datagrid/) - [demo](https://docs.svar.dev/react/grid/samples/#/base/willow) - [docs](https://docs.svar.dev/react/grid/getting_started/) - React DataGrid avec édition en cellule, données arborescentes, menu contextuel, défilement virtuel, etc.

### Tableau

- [ka-table](https://github.com/komarovalexander/ka-table) - [demo](https://komarovalexander.github.io/ka-table/#/overview) - Composant de table personnalisable avec tri, filtrage, regroupement, virtualisation, édition, etc.
- [mantine-datatable](https://github.com/icflorescu/mantine-datatable) - [demo/docs](https://icflorescu.github.io/mantine-datatable/) - Composant de table léger pour Mantine UI applications, avec beaucoup de fonctionnalités
- [material-table](https://github.com/mbrn/material-table) - [demo/docs](https://material-table.com/) - Construit sur Material UI, plus : regroupement, données arborescentes, lignes extensibles, exportation, édition en ligne
- [mui-datatables](https://github.com/gregnb/mui-datatables) - Construit sur Material UI. Rechercher, styler, filtrer, redimensionner/cacher les colonnes, exporter, imprimer, sélectionner/développer les lignes.
- [react-data-table](https://github.com/jbetancur/react-data-table-component) - [demo/docs](https://jbetancur.github.io/react-data-table-component/?) - table accessible, réceptive, ajustable, clairement configurable avec tri, lignes sélectionnables, lignes extensibles, pagination
- [TanStack Table](https://github.com/tannerlinsley/react-table) - [demo](https://tanstack.com/table/v8/docs/examples/react/basic) - Sans tête UI pour construire des tables et des datagrids puissants
- [react-table-library](https://github.com/table-library/react-table-library) - [demo](https://react-table-library.com/) - React Bibliothèque de table -- une bibliothèque de table presque sans tête -- pour construire de meilleures tables.
- [rsuite-table](https://github.com/rsuite/rsuite-table) - [demo/docs](http://rsuite.github.io/rsuite-table/) - Un composant de table qui prend en charge la virtualisation.
- [DevExtreme React Grid](https://devexpress.github.io/devextreme-reactive/react/grid/) - Grille de données haute performance basée sur le plugin pour Bootstrap et Material Design.
- [Smart React Grid](https://htmlelements.com/react/demos/grid/overview/) - Grille de données rapide et complète avec Material Design.
- [simple-table](https://github.com/petera2c/simple-table) - [demo](https://www.simple-table.com/examples) - [docs](https://www.simple-table.com/docs) - Léger, rapide et riche. Tri/filtrage, virtualisation, données arborescentes, en-têtes imbriqués, colonnes épinglées, style personnalisé, etc.

- [KendoReact Grid](https://www.telerik.com/kendo-react-ui/components/grid/) - Composant puissant de la grille de données avec plus de 100 fonctionnalités prêtes à l'emploi comme la recherche, le tri, l'exportation vers Excel, et plus encore.

- [Material-React-Table](https://github.com/KevinVandy/material-react-table) - Une présentation complète Material UI V5 mise en œuvre de TanStack React Tableau V8, écrit à partir de la base en TypeScript

### Scroll infini

- [@egjs/react-infinitegrid](https://github.com/naver/egjs-infinitegrid/blob/master/packages/react-infinitegrid) - [npm](https://www.npmjs.com/package/@egjs/react-infinitegrid) - [demo](https://naver.github.io/egjs-infinitegrid/storybook/) - Un module utilisé pour organiser les éléments de carte, y compris le contenu infiniment selon différents types de mise en page.
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload) - Chargez votre composant, votre image ou tout autre élément important.
- [react-list](https://github.com/orgsync/react-list) - Un rouleau infini polyvalent React composante.
- [@af-utils/virtual](https://github.com/nowaalex/af-utils) - [demo/docs](https://af-utils.com/virtual) - Renvoyez de grandes listes et grilles défilantes.
- [react-window](https://github.com/bvaughn/react-window) - [demo](https://react-window.now.sh/) - React composants pour rendre efficacement les grandes listes et les données tabulaires
- [virtua](https://github.com/inokawa/virtua) - [demo](https://inokawa.github.io/virtua/) - Un composant de liste virtuelle 0-config, rapide et petit (~3kB) pour React, Vue et solide.

### Couverture

Afficher la superposition / modale / alerte / boîte à lumière / popup

- [react-aria-modal](https://github.com/davidtheclark/react-aria-modal) - Un accès complet et flexible React modale construite selon WAI-ARIA Pratiques d'écriture.
- [react-modal](https://github.com/reactjs/react-modal) - Composant de dialogue modale accessible pour React.
- [@paratco/async-modal](https://github.com/Paratco/async-modal) - Manipulation async modale simple pour React.
- [reoverlay](https://github.com/hiradary/reoverlay) - [demo](https://hiradary.github.io/reoverlay/) - La solution manquante pour gérer les modes.
- [sweetalert2](https://github.com/sweetalert2/sweetalert2) - [demo/docs](https://sweetalert2.github.io/) - Une belle, réactive, hautement personnalisable et accessible (WAI-ARIA) remplacement pour JavaScriptLes boîtes popup. Aucune dépendance.
- [sweetalert2-react-content](https://github.com/sweetalert2/sweetalert2-react-content) - Enhancer officiel SweetAlert2 ajoutant le soutien pour React éléments en tant que contenu

### Notification

Taster / snackbar — Prévenez l'utilisateur avec un petit popup temporaire sans mode 

- [react-notifications-component](https://github.com/teodosii/react-notifications-component) - [demo](https://teodosii.github.io/react-notifications-component/) - Composant hautement personnalisable et facile à utiliser pour les notifications.
- [notistack](https://iamhosseindhv.com/notistack) - [demo](https://codesandbox.io/s/github/iamhosseindhv/notistack/tree/master/examples/simple-example??hidenavigation=1&module=%2FApp.js) - [docs](https://iamhosseindhv.com/notistack/api) - Snacks de notification hautement personnalisables (toits) qui peuvent être empilés l'un sur l'autre
- [react-local-toast](https://github.com/OlegWock/react-local-toast) - [demo](https://react-local-toast.netlify.app/showcase/) - [docs](https://react-local-toast.netlify.app/tutorial) - montrer les commentaires liés à une composante particulière au lieu de toasts à l'échelle de l'application.
- [react-toast](https://github.com/moharnadreza/react-toast) - [demo](https://codesandbox.io/s/byqvk) - [docs](https://github.com/moharnadreza/react-toast/blob/main/README.md) - Notification minimale de toast.
- 🚀 [react-toastify](https://github.com/fkhadra/react-toastify) - [demo](https://fkhadra.github.io/react-toastify/) - mieux vaut parier là-bas pour le moment. Soutien des crochets. Pas de réf.
- [react-confirm-lite](https://github.com/SaadNasir-git/react-confirm-lite) - [demo](https://stackblitz.com/edit/vitejs-vite-bfthlpmw) - est un dialogue de confirmation léger, basé sur des promesses pour React avec intégré Tailwind CSS Soutien. Il est conçu pour être aussi simple à utiliser que react- Toastify, tout en restant entièrement personnalisable.
- [reapop](https://github.com/LouisBarranqueiro/reapop) - A React & Redux système de notification.
- [react-hot-toast](https://github.com/timolins/react-hot-toast) - [demo](https://react-hot-toast.com/) - Fumer des notifications chaudes pour React. Léger, personnalisable et beau par défaut.
- [Sonner](https://sonner.emilkowal.ski/) - Une composante de toast opinionnée pour React.

### Outils

- [react-tooltip](https://github.com/wwayne/react-tooltip) - React composant tooltip.

### Menu

Menus / barres latérales 

- [hamburger-react](https://github.com/luukdv/hamburger-react) - [demo/docs](https://hamburger-react.netlify.app/) - icônes du menu hamburger animé pour React.
- [react-burger-menu](https://github.com/negomi/react-burger-menu) - Une barre latérale off-canvas avec des effets et des styles.
- [react-offcanvas](https://github.com/vutran/react-offcanvas) - Menus off-canvas pour React.
- [react-planet](https://github.com/innFactory/react-planet) - [demo](https://innfactory.github.io/react-planet/) - Créer des menus circulaires qui ressemblent à des planètes.
- [mantine-contextmenu](https://github.com/icflorescu/mantine-contextmenu) - [demo/docs](https://icflorescu.github.io/mantine-contextmenu/) - Contexte-menu crochet / composant pour les applications construites avec Mantine UI.

### Sticky

En-têtes fixes / en-têtes déroulants / éléments collants 

- [react-headroom](https://github.com/KyleAMathews/react-headroom) - Cachez votre en-tête jusqu'à ce que vous en ayez besoin.
- [react-stickynode](https://github.com/yahoo/react-stickynode) - Un performant et complet React collant.

### Tables

- [react-tabs](https://github.com/reactjs/react-tabs) - React composante onglets.
- [react-tabtab](https://github.com/ctxhou/react-tabtab) - React- Des onglets.

### Chargeur

Loaders / spinners / barre de progression — Faites savoir à l'utilisateur que quelque chose charge 

- [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) - Ensemble de collecte react- pour l'opération Async.
- [react-redux-loading-bar](https://github.com/mironov/react-redux-loading-bar) - Barre de chargement simple pour Redux et React.
- [react-spinners-css](https://github.com/JoshK2/react-spinners-css) - Incroyable collection de react composants de spinners.
- [react-spinners](https://github.com/davidhu2000/react-spinners) - Une collection de composants de charge pour react.
- [react-content-loader](https://github.com/danilowoz/react-content-loader) - Composant SVG-Powered pour créer facilement des chargements de placeholder (comme le chargement des cartes Facebook).

### Captcha

- [react-simple-captcha](https://github.com/masroorejaz/react-simple-captcha) - [npm](https://www.npmjs.com/package/react-simple-captcha) - [demo](https://www.scriptse.com/blog/add-captcha-in-reactjs-application/react-simple-captcha-demo/) - React Simple Captcha est un captcha très puissant, hautement personnalisable et facile à utiliser pour React JS.
- [procaptcha](https://github.com/prosopo/captcha) - [demo](https://prosopo.io/) - [docs](https://docs.prosopo.io/) - Protection des renseignements personnels CAPTCHA

### Carrousel

- [@egjs/react-flicking](https://github.com/naver/egjs-flicking/blob/master/packages/react-flicking/) - [npm](https://www.npmjs.com/package/@egjs/react-flicking) - [demo](https://naver.github.io/egjs-flicking/) - C'est un carrousel fiable, flexible et extensible.
- [react-awesome-slider](https://github.com/rcaferati/react-awesome-slider) - [demo](https://fullpage.caferati.me/) - Fullpage, 3D animée, 60fps médias et contenu slider/carousel.
- [pure-react-carousel](https://github.com/express-labs/pure-react-carousel) - Construit à partir de zéro et pas très Opinioné.
- [react-id-swiper](https://github.com/kidjp85/react-id-swiper) - Une bibliothèque à utiliser comme une ReactJs composante
- [react-instagram-zoom-slider](https://github.com/skozer/react-instagram-zoom-slider) - [demo](https://skozer.github.io/react-instagram-zoom-slider/) - Un composant slider avec pince pour zoomer des fonctionnalités inspirées par Instagram.
- [react-responsive-carousel](https://github.com/leandrowd/react-responsive-carousel) - React.js Carousel réactif (avec Swipe).
- [react-slick](https://github.com/akiran/react-slick) - React composant carrousel.
- [keen-slider](https://github.com/rcbyr/keen-slider) - [demo](https://keen-slider.io/examples/#examples) - Carrousel/glisseur performant avec native Comportement tactile/swipe.
- [swiper](https://github.com/nolimits4web/Swiper) - [demo](https://swiperjs.com/demos) - [docs](https://swiperjs.com/react) - Le slider mobile le plus moderne avec des transitions accélérées et incroyables native comportement.

### Boutons

- [react-awesome-button](https://github.com/rcaferati/react-awesome-button) - [demo](https://caferati.me/demo/react-awesome-button) - Boutons d'animation 3D 60fps avec progression de charge et actions de partage social.
- [reactive-button](https://github.com/arifszn/reactive-button) - [demo](https://arifszn.github.io/reactive-button/docs/playground) - [docs](https://arifszn.github.io/reactive-button) - Un magnifique composant de bouton animé avec indicateur de progression.

### Effacement

- [react-accessible-accordion](https://github.com/springload/react-accessible-accordion) - Composante d'accordéon accessible pour React.
- [react-collapse](https://github.com/nkbt/react-collapse) - Component-wrapper pour animation d'effondrement avec react- Ça va.
- [react-tabbordion](https://github.com/Merri/react-tabbordion) - [demo](https://merri.github.io/react-tabbordion) - Universel, sémantique et CSS-seulement des composants pour créer des accordéons et des onglets.

### Graphique

Afficher les données dans les graphiques / graphiques / diagrammes 

- [essential js 2 charts](https://github.com/syncfusion/ej2-react-ui-components/tree/master/components/charts) - Beaux et interactifs graphiques & graphiques pour react.
- [EazyChart](https://github.com/Hexastack/eazychart) - [demo](https://docs.eazychart.com/#demos) - [docs](https://docs.eazychart.com) - Transformer facilement les données en graphiques significatifs
- [echarts for react](https://github.com/hustcc/echarts-for-react) - Enveloppe autour de belles cartes Apache
- [jscharting-react](https://github.com/jscharting/jscharting-react) – React chart component offering a complete set of chart types and engaging data visualizations with [JSCharting](https://jscharting.com/).
- [react-chartist](https://github.com/fraserxu/react-chartist) - React composant pour Chartist.js.
- [react-charty](https://github.com/99ff00/react-charty) - [demo](https://99ff00.github.io/react-charty/) - Petites mais puissantes données interactives avec plusieurs types de cartes, animations, zoom, thème.
- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) - Fréquent react composants de cartographie utilisant Chart.js 2.0.
- [react-d3-components](https://github.com/codesuki/react-d3-components) - D3 Composants pour React.
- [react-google-charts](https://github.com/RakanNimer/react-google-charts) - React- Cartes Google React composante.
- [react-highcharts](https://github.com/kirjs/react-highcharts) - React- Des cartes hautes.
- [react-sparklines](https://github.com/borisyankov/react-sparklines) - Belle et expressive Sparklines React composante.
- [react-timeseries-charts](https://github.com/esnet/react-timeseries-charts) - Tableaux des chronologies déclaratives.
- [react-vis](https://github.com/uber/react-vis) - Bibliothèque de visualisation des données basée sur React et d3.
- [recharts](https://github.com/recharts/recharts) - Bibliothèque graphique redéfinie construite avec React et D3.
- [rumble-charts](https://github.com/rumble-charts/rumble-charts) - React composants pour la construction de cartes compactes et flexibles.
- [victory](https://github.com/FormidableLabs/victory) - Données pour React.
- [semiotic](https://semiotic.nteract.io/) - Sémiotique est un cadre de visualisation des données pour React.
- [SVAR React Gantt](https://svar.dev/react/gantt/) - [demo](https://docs.svar.dev/react/gantt/samples/#/base/willow) - [docs](https://docs.svar.dev/react/gantt/getting_started/) - Composant graphique Gantt personnalisable et interactif
- [DevExtreme React Chart](https://devexpress.github.io/devextreme-reactive/react/chart/) - Graphique haute performance basé sur le plugin pour Bootstrap et Material Design.
- [Smart React Chart](https://www.htmlelements.com/react/demos/chart/overview/) - Caractère complet Bibliothèque graphique.
- [react-muze](https://github.com/chartshq/react-muze) - React emballage pour [muze](https://muzejs.org/)(bibliothèque gratuite de visualisation de données pour créer des visualisations de données exploratoires dans le navigateur, en utilisant WebAssembly)
- [Flowchart React](https://github.com/joyceworks/flowchart-react) - Logigramme & concepteur de logigramme pour React.js.
- [react-dashboard](https://github.com/flatlogic/react-dashboard) - Tableau de bord isomorphe.

### Palette des commandes

- [cmdk](https://cmdk.paco.me/) - Menu de commande rapide, Composable, non style pour React.
- [kbar](https://github.com/timc1/kbar) - [demo](https://kbar.vercel.app) - Interface rapide, portable et extensible cmd+k.

### Arbre

Afficher une structure de données arborescente 

- [json-edit-react](https://github.com/CarlosNZ/json-edit-react) - [demo](https://carlosnz.github.io/json-edit-react/) - Visualiseur et éditeur d'arborescence JSON/Object hautement configurable
- [react-arborist](https://github.com/brimdata/react-arborist) - [demo](https://react-arborist.netlify.app/) - Une vue de l'arbre complet: sans tête, virtualisé, multi-sélectionnable, glisser-n-drop, navigation du clavier, recherche
- [react-complex-tree](https://github.com/lukasbach/react-complex-tree) - [demo](https://rct.lukasbach.com/) - [docs](https://rct.lukasbach.com/docs/getstarted) - Composant d'arbre accessible sans opinion avec multi-sélection, Drag-And-Drop et recherche
- [he-tree-react](https://github.com/phphe/he-tree-react) - [demo](https://he-tree-react.phphe.com/v1/examples) - [docs](https://he-tree-react.phphe.com/) - Arbre personnalisable UI, données plates, données arborescentes, drag-n-drop, placeholder pour drop, pliable, case à cocher, virtualisé.

### UI Navigation

Ways pour naviguer dans les vues 

- [react-scroll](https://github.com/fisshy/react-scroll) - React composant de défilement.
- [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) - A React Composant pour les onglets liés et les vues mobiles.

### Barre de défilement personnalisée

- [rc-scrollbars](https://github.com/sakhnyuk/rc-scrollbars) - [demo](https://rc-scrollbars.vercel.app/) - Barres de défilement personnalisables avec options flex et 60FPS
- [react-custom-scroll](https://github.com/rommguy/react-custom-scroll) - [demo](http://rommguy.github.io/react-custom-scroll/example/demo.html) - Personnalisez facilement la barre de défilement du navigateur avec native Comportement de défilement OS.
- [react-shadow-scroll](https://github.com/andrelmlins/react-shadow-scroll) - Composant qui personnalise l'image et insère l'ombre lors du défilement existe.

### Audio / Vidéo

- [react-dailymotion](https://github.com/u-wave/react-dailymotion) - Composant de lecteur Dailymotion pour React.
- [react-player](https://github.com/CookPete/react-player) - A react composant pour jouer une variété d'URL, y compris YouTube.
- [react-soundplayer](https://github.com/soundblogs/react-soundplayer) - Créez des lecteurs SoundCloud personnalisés avec React.
- [react-youtube](https://github.com/troybetz/react-youtube) - React.js composant de lecteur YouTube alimenté.
- [video-react](https://github.com/video-react/video-react) - Un lecteur vidéo web construit pour le monde HTML5 en utilisant React bibliothèque.
- [material-ui-audio-player](https://github.com/Werter12/material-ui-audio-player) - Lecteur audio pour material ui design.
- [react-vision-camera](https://github.com/xulihang/react-vision-camera) - Composant caméra pour React utilisant getUserMedia. Nous pouvons utiliser ce composant pour les tâches de vision d'ordinateur comme la numérisation de code-barres, la reconnaissance de texte, etc.
- [react-barcode-qrcode-scanner](https://github.com/xulihang/react-barcode-qrcode-scanner) - Code à barres et QR code composant scanner pour React. Il utilise react-vision-camera pour accéder à la caméra et Dynamsoft Barcode Reader pour lire les codes-barres.

### Carte

- [google-map-react](https://github.com/istarkov/google-map-react) - Carte universelle de Google react composant, permet le rendu react composants sur la carte Google.
- [mapkit](https://github.com/1amageek/mapkit) - Une bibliothèque pour intégrer Apple Maps à l'aide de MapKit JS, avec annotations, superpositions et recherche.
- [pigeon-maps](https://github.com/mariusandra/pigeon-maps) - [demo](https://pigeon-maps.js.org/) - ReactJS Cartes sans dépendances externes.
- [react-geosuggest](https://github.com/ubilabs/react-geosuggest) - A React autosuggérer pour l'API de Google Maps Places.
- [react-leaflet](https://github.com/PaulLeCam/react-leaflet) - React composants pour les cartes en feuilles.
- [react-map-gl](https://github.com/uber/react-map-gl) - A React wrapper pour MapboxGL-js et superposition API.
- [react-svg-map](https://github.com/VictorCazanave/react-svg-map) - [demo](https://victorcazanave.github.io/react-svg-map/) - Un ensemble de composants pour afficher une carte SVG interactive.

### Heure / Date / Âge

Afficher l'heure / la date / l'âge 

- [react-timeago](https://github.com/nmn/react-timeago) - Un élément de temps simple pour ReactJs.
- [timeago-react](https://github.com/hustcc/timeago-react) - Date du format avec `*** time ago` déclaration. Par exemple, il y a 3 heures.
- [react-google-flight-datepicker](https://github.com/JSLancerTeam/react-google-flight-datepicker) - Sélection de date de vol Google implémenté dans ReactJS.

### Photo / Image

Afficher les images / photos 

- [lightGallery](https://github.com/sachinchoolur/lightGallery) - [demo](https://www.lightgalleryjs.com/) - [docs](https://www.lightgalleryjs.com/docs/react/) - Composant de galerie de lightbox complet.
- [react-compare-image](https://github.com/junkboy0315/react-compare-image) - [demo](https://react-compare-image.yuuniworks.com/) - React composant pour comparer deux images à l'aide d'un curseur.
- [react-image-gallery](https://github.com/xiaolin/react-image-gallery) - Galerie d'images réactive, carrousel, slider d'images react composante.
- [yet-another-react-lightbox](https://github.com/igordanchenko/yet-another-react-lightbox) - [demo](https://yet-another-react-lightbox.com/examples) - [docs](https://yet-another-react-lightbox.com/documentation) - React composant de la boîte à lumière.
- [react-intense](https://github.com/brycedorn/react-intense) - A React composant pour visionner de grandes images de près.
- [react-photo-album](https://github.com/igordanchenko/react-photo-album) - [demo](https://react-photo-album.com/examples) - [docs](https://react-photo-album.com/documentation) - Responsive React Galerie de photos.
- [react-svg-pan-zoom](https://github.com/chrvadala/react-svg-pan-zoom) - A React composant qui ajoute des fonctionnalités de panoramique et de zoom à SVG.
- [react-particle-image](https://github.com/malerba118/react-particle-image) - [demo](https://malerba118.github.io/react-particle-image-demo/) - Images de rendu comme particules interactives.
- [react-imgix](https://github.com/imgix/react-imgix) - Ajoutez des images rapides et réactives en tant qu'image, image ou arrière-plan!
- [@frameright/react-image-display-control](https://github.com/Frameright/react-image-display-control) - Définir les régions de zoom pour les images intelligentes réactives.
- [zoom-image](https://github.com/willnguyen1312/zoom-image) - [demo](https://willnguyen1312.github.io/zoom-image/examples/react.html) - [docs](https://willnguyen1312.github.io/zoom-image) - Une petite bibliothèque framework agnostic pour zoomer l'image sur le web
- [react-infinite-gallery](https://github.com/AlirezaAzizi145/react-infinite-gallery) – Infinite-scroll image gallery component for React apps.

### Icônes

Afficher les icônes / jeu d'icônes / emojis 

- [iconify-react](https://github.com/iconify/iconify-react) - Plus de 40k icônes à partir de 50 jeux d'icônes, y compris tous les jeux d'icônes populaires et d'emoji.
- [react-icons](https://github.com/gorangajic/react-icons) - Svg react icônes des packs d'icônes populaires utilisant les importations ES6.
- [react-open-doodles](https://github.com/lunahq/react-open-doodles) - Impressionnant illustrations gratuites comme react composants.
- [react-icomoon](https://github.com/aykutkardas/react-icomoon) - Avec react-icomoon vous pouvez facilement utiliser les icônes que vous avez sélectionnées ou créées dans icomoon.
- [tabler-icons-react](https://tabler-icons-react.vercel.app) - Un ensemble de plus de 450 icônes SVG de haute qualité sous licence MIT.
- [Lucide](https://github.com/lucide-icons/lucide) - Belle et cohérente boîte à outils d'icônes faite par la communauté. Projet open-source et une fourche d'icônes Feather.

### Paginateur

Afficher un élément de contrôle pour paginer 

- [react-paginate](https://github.com/AdeleD/react-paginate) - A ReactJS composant qui crée une pagination.
- [react-laravel-paginex](https://github.com/lionix-team/react-laravel-paginex) - Pagination larave avec ReactJS (personnable).
- [paginated](https://github.com/makotot/paginated) - React rendre les accessoires & crochet personnalisé pour construire la pagination.
- [react-steps](https://github.com/tkwant/react-steps) - [Demo](https://stepper.tkwant.de/) - Responsive React Pas de pas.

### Markdown Affichage

Afficher la source de balisage analysée 

- [react-markdown](https://github.com/rexxars/react-markdown) - Rendu Markdown comme React composants.

### Toile

Entrée  Sketch en utilisant Canvas ou SVG 

- [react-konva](https://github.com/konvajs/react-konva) - React Konva est un JavaScript bibliothèque pour dessiner des graphiques de toile complexes avec des fixations au cadre Konva.
- [react-sketch](https://github.com/tbolis/react-sketch) - Un outil Sketch pour React applications basées, soutenues par FabricJS
- [react-sketch-canvas](https://github.com/vinothpandian/react-sketch-canvas) - [Demo](https://vinoth.info/react-sketch-canvas/?path=/story/*) Outil de dessin vectoriel à main libre pour React utilisant SVG comme toile. Accepte les données de la souris, du toucher et des tablettes graphiques
- [react-heat-map](https://github.com/uiwjs/react-heat-map) - Un calendrier léger thermomap react composant construit sur SVG, version personnalisable de GitHubLe graphique de contribution.

### Capture d'écran

- [html2canvas](https://github.com/niklasvh/html2canvas) - Prendre des captures d'écran de n'importe quelle partie de votre page Web en utilisant Javascript.

### Divers

- [puck](https://github.com/measuredco/puck) - [demo](https://puck-editor-demo.vercel.app/edit) - L'éditeur visuel auto-organisé pour React
- [react-advanced-news-ticker](https://github.com/ahmetcanaydemir/react-advanced-news-ticker) - [demo](https://www.ahmetcanaydemir.com/react-advanced-news-ticker/) - Un composant flexible et animé de nouvelles verticales
- [react-avatar-generator](https://github.com/JosephSmith127/react-avatar-generator) - Permet aux utilisateurs de créer des kaléidoscopes aléatoires à utiliser comme avatars.
- [react-awesome-query-builder](https://github.com/ukrbublik/react-awesome-query-builder) - [demo](https://ukrbublik.github.io/react-awesome-query-builder/) - Constructeur de requêtes visuelles à partir de champs de formulaire, avec exportation SQL, MongoDB et JSON
- [react-blur](https://github.com/javierbyte/react-blur) - React composant pour les fonds flous.
- [react-demo-tab](https://github.com/mkosir/react-demo-tab) - [demo](https://mkosir.github.io/react-demo-tab) - A React composant pour créer facilement des démos d'autres composants.
- [fastcomments-react](https://github.com/fastcomments/fastcomments-react) - [demo](<https://blog.fastcomments.com/(12-30-2019)-fastcomments-demo.html>) - FastComments composant pour intégrer un fil de commentaire en direct sur une page ou un SPA.
- [react-pdf-viewer](https://github.com/phuoc-ng/react-pdf-viewer) - [docs](https://react-pdf-viewer.dev) - A React composant pour voir une PDF document.
- [react-simple-chatbot](https://github.com/LucasBassetti/react-simple-chatbot) - [demo](https://github.com/anishagg17/PIzzaBuilder) - Un simple composant de chatbot pour créer des conversations.
- [react-file-reader-input](https://github.com/ngokevin/react-file-reader-input) - Composant d'entrée de fichier pour le contrôle pour le style de lecture de fichier et l'abstraction.
- [react-filter-control](https://github.com/komarovalexander/react-filter-control) - Les React composant de fabricant de filtre pour construire les critères de filtre dans le UI.
- [react-headings](https://github.com/alexnault/react-headings) - Incrément automatique de votre HTML rubriques (h1, h2, etc.) pour améliorer l'accessibilité et le référencement, peu importe la structure de votre composant, pendant que vous gardez le contrôle total de ce qui est rendu.
- [react-joyride](https://github.com/gilbarbara/react-joyride) - Créez des parcours et des visites guidées pour votre ReactJS les applications. Maintenant avec des tooltips autonomes!.
- [react-mouse-select](https://github.com/andreizanik/react-mouse-select) - [Demo](https://andreizanik.github.io/react-mouse-select/) Un composant qui permet de sélectionner DOM éléments en déplaçant la souris
- [react-resizable-and-movable](https://github.com/bokuweb/react-resizable-and-movable) - Composant redimensionnable et mobile pour React.
- [react-resizable-box](https://github.com/bokuweb/react-resizable-box) - Composant redimensionnable pour React. #reactjs.
- [react-searchbox-awesome](https://github.com/axmz/react-searchbox-awesome) - [demo](https://axmz.github.io/react-searchbox-awesome-page/) - Boîte de recherche minimaliste.
- [react-split-pane](https://github.com/tomkp/react-split-pane) - React Composant à double face.
- [react-swipe-to-delete-ios](https://github.com/arnaudambro/react-swipe-to-delete-ios) - [demo](https://arnaudambro.github.io/react-swipe-to-delete-ios/) - Pour supprimer un élément dans une liste comme iOS.
- [react-swipeable-list](https://github.com/marekrozmus/react-swipeable-list) - [demo](https://marekrozmus.github.io/react-swipeable-list/) - Composant configurable pour rendre la liste avec des éléments mobiles.
- [typography](https://github.com/KyleAMathews/typography.js) - Une puissante boîte à outils pour construire des sites Web avec une belle typographie.
- [react-pulse-text](https://github.com/Kelsier90/React-Pulse-Text) - [demo/docs](https://kelsier90.github.io/React-Pulse-Text/) - Vous permet d'animer le texte de toute propriété d'un autre composant.
- [captcha-image](https://github.com/tpkahlon/captcha-image) - Permet de générer une image captcha aléatoire avec des options.
- [react-pdf](https://github.com/wojtekmaj/react-pdf) - Afficher les PDF dans votre React app aussi facilement que s'ils étaient des images.
- [react-customizable-chat-bot](https://github.com/chithakumar13/react-chat-bot) - [Demo](https://chithakumar13.github.io/bot-example) - Construisez votre propre chatbot correspondant aux besoins de votre marque en quelques minutes.
- [@restpace/schema-form](https://github.com/restspace/schema-form) - [Demo](https://restspace.io/react/schema-form/demo) - Construire facilement des formes complexes automatiquement à partir d'un schéma JSON.
- [react-darkreader](https://github.com/Turkyden/react-darkreader) - A React Crochet pour ajouter un mode noir / nuit à votre site inspiré par darkreader.
- [react-apple-signin-auth](https://github.com/A-Tokyo/react-apple-signin-auth) - Signine de pomme pour React utilisant le SDK officiel Apple JS.
- [react-mrz-scanner](https://github.com/tony-xlh/react-mrz-scanner) - A React composant pour scanner la ZMR sur les passeports, les cartes de visa, etc. Il est basé sur Dynamsoft Label Recognator.

### Composants du formulaire

Laissez l'utilisateur saisir des données 

#### Date / Sélection du temps

Choix de date / choix d'heure / choix d'heure / choix d'échelle de date 

- [date-range-picker](https://github.com/almogtavor/date-range-picker) - [demo](https://almogtavor.github.io/date-range-picker/) - Un composant de calendrier qui prend en charge les choix de dates, de plages et de gammes.
- [react-big-calendar](https://github.com/intljusticemission/react-big-calendar) - Composant de calendrier Gcal/outlook.
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker) - Un composant datapicker simple et réutilisable pour React.
- [react-day-picker](https://github.com/gpbl/react-day-picker) - Sélection de date flexible pour React.
- [react-flatpickr](https://github.com/coderhaoxin/react-flatpickr) - Flatpickr pour React.
- [react-simple-timefield](https://github.com/antonfisher/react-simple-timefield) - [demo](https://antonfisher.com/react-simple-timefield/) - Champ d'entrée de temps simple.
- [react-timezone-select](https://github.com/ndom91/react-timezone-select) - [demo](https://ndom91.github.io/react-timezone-select/) - Dynamique, sélection du fuseau horaire succinct. Sur la base `react-select`.
- [DevExtreme React Scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/) - Planificateur/calendrier haute performance pour Material Design.
- [jQWidgets Scheduler](https://www.jqwidgets.com/react/react-scheduler/) - Caractéristique complète bibliothèque Scheduling.
- [react-calendar](https://github.com/wojtekmaj/react-calendar) - Calendrier ultime pour votre React Annexe
- [react-date-picker](https://github.com/wojtekmaj/react-date-picker) - Un choix de dates pour votre React Annexe
- [schedule-x](https://github.com/schedule-x/schedule-x) - Material design le calendrier de l'événement et les composants de sélection de date. Site de démonstration : https://schedule-x.dev/

#### Picker Emoji

- [interweave-emoji-picker](https://github.com/milesj/interweave/tree/master/packages/emoji-picker) - A React base emoji picker propulsé par Interweave et Emojibase.

#### Types d'entrée

Inputs masqués, inputs spécialisés; courriel / numéro de téléphone / carte de crédit / etc. 

- [react-credit-cards](https://github.com/amarofashion/react-credit-cards) - Belles cartes de crédit pour vos formulaires de paiement.
- [react-payment-inputs](https://github.com/medipass/react-payment-inputs) - [demo](https://medipass.github.io/react-payment-inputs/?path=/story/usepaymentinputs--basic-no-styles) - Un conteneur à dépendance zéro pour aider avec les champs d'entrée de carte de paiement.
- [react-input-mask](https://github.com/sanniassin/react-input-mask) - [demo](http://sanniassin.github.io/react-input-mask/demo.html) - Encore un autre react composant pour le masque d'entrée.
- [@lunasec/react-sdk](https://github.com/lunasec-io/lunasec) - [docs](https://www.lunasec.io/docs/) - Composants sécurisés et durcis qui chiffrent/tokenisent automatiquement toutes les données.
- [react-numpad](https://github.com/gpietro/react-numpad) - [demo](https://gpietro.github.io/react-numpad-demo/) - Contrôle des nombres, des dates et des heures.
- [react-multi-email](https://github.com/axisj/react-multi-email) - [demo](https://react-multi-email.vercel.app/) - Formater plusieurs courriels comme types d'utilisateurs.

#### Autocomplet

Autosuggest / autocomplet / typeahead 

- [react-autosuggest](https://github.com/moroshko/react-autosuggest) - WAI-ARIA conforme React Autosuggérer un composant.
- [react-typeahead](https://github.com/fmoo/react-typeahead) - Pure react- à base de typeahead et typeahead-tokenizer.

#### Sélectionner

- [react-aria-menubutton](https://github.com/davidtheclark/react-aria-menubutton) - Un entièrement accessible, facilement thématique, React- Bouton de menu motorisé.
- [react-functional-select](https://github.com/based-ghost/react-functional-select) - [demo](https://based-ghost.github.io/react-functional-select/) - Composant de sélection micro et micro-optimisé pour React.js.
- [react-mobile-picker](https://github.com/adcentury/react-mobile-picker) - [demo](https://react-mobile-picker.vercel.app/) - Un composant iOS comme select box.
- [react-select](https://github.com/JedWatson/react-select) - Un contrôle Select construit avec et pour React JS.
- [react-column-select](https://github.com/chr-ge/react-column-select) - Un composant de sélection de colonne construit pour react.
- [react-select-search](https://github.com/tbleckert/react-select-search) - [demo](https://react-select-search.com/) - Un composant de sélection léger pour React

#### Cueillette de couleurs

- [coloreact](https://github.com/elrumordelaluz/coloreact) - Un petit sélectionneur de couleurs pour React.
- [react-color](https://github.com/uiwjs/react-color) - Est un petit composant de widget de sélection de couleur pour React les applications.
- [react-colorful](https://github.com/omgovich/react-colorful) - Un petit (2,5 KB), sans dépendance, rapide et accessible composant de sélection de couleurs.
- [react-input-color](https://github.com/wangzuo/react-input-color) - React composant de couleur d'entrée avec sélectionneur de couleur hsv.

#### Basculer

- [@anatoliygatt/heart-switch](https://github.com/anatoliygatt/heart-switch) - [demo](https://codesandbox.io/s/demo-for-anatoliygatt-heart-switch-cds5p) - Un élément de bascule en forme de cœur entièrement à thème et accessible.
- [react-ios-switch](https://github.com/clari/react-ios-switch) - React interrupteur.
- [react-toggle](https://github.com/instructure-react/react-toggle) - Un élégant composant toggle accessible pour React. Aussi une case à cocher glorifiée.
- [ui-switch](https://github.com/yairEO/ui-switch) - Le composant  Toggle  le plus complet

#### Slider

- [react-slider](https://github.com/mpowaga/react-slider) - Composant slider pour React.

#### Bouton radio

- [react-radio-group](https://github.com/chenglou/react-radio-group) - De meilleurs boutons radio.

#### Type Sélectionner

Laissez l'utilisateur sélectionner quelque chose (par exemple une balise) en tapant 

- [react-autocomplete-input](https://github.com/yury-dymov/react-autocomplete-input) - Champ d'entrée automatique pour React.
- [react-mentions](https://github.com/effektif/react-mentions) - Mentionnez les gens dans une zone de texte.
- [rich-textarea](https://github.com/inokawa/rich-textarea) - Une zone de texte pour coloriser, mettre en valeur, décorer des textes et offrir autocomplet.

#### Entrée de l'étiquette

Laissez l'utilisateur ajouter plusieurs balises en une seule entrée 

- [react-tag-input](https://github.com/prakhar1989/react-tags) - Un composant de marquage fantastiquement simple pour votre React projets.
- [react-tagsinput](https://github.com/olahol/react-tagsinput) - Une simple react composant pour entrer les étiquettes.
- [react-tokeninput](https://github.com/instructure-react/react-tokeninput) - Composant tokeninput pour React.
- [tagify](https://github.com/yairEO/tagify) - [demo & docs](https://yaireo.github.io/tagify/) - Composant d'entrée des étiquettes léger et efficace.

#### Entrée automatique / zone de texte

- [react-input-autosize](https://github.com/JedWatson/react-input-autosize) - Champ d'entrée de redimensionnement automatique pour React.
- [react-autowidth-input](https://github.com/kierien/react-autowidth-input) - Champ d'entrée de taille automatique hautement configurable et extensible construit avec des crochets.
- [react-textarea-autosize](https://github.com/andreypopp/react-textarea-autosize) - Composante &lt;textarea /&gt; pour React qui se développe avec du contenu.

#### Catégorie

- [react-rating](https://github.com/smastrom/react-rating) - [demo](https://react-rating.onrender.com/) - Dépendance zéro, composant de notation hautement personnalisable.
- [react-awesome-stars-rating](https://github.com/fedoryakubovich/react-awesome-stars-rating) - [demo](https://react-awesome-stars-rating.herokuapp.com/) - La composante étoiles avec accessibilité.
- [react-star-rating-input](https://github.com/ikr/react-star-rating-input) - React.js composant pour entrer 0-5 (ou plus) étoiles.

#### Faites glisser et déposez

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Belle et accessible glisser-déposer pour les listes avec React
- [react-dnd](https://github.com/gaearon/react-dnd) - Faites glisser et déposez pour React.
- [react-drag-sizing](https://github.com/fritx/react-drag-sizing) - "Drag pour redimensionner" (dimensionnement) comme React Composante.
- [react-draggable](https://github.com/mzabriskie/react-draggable) - React composant dragable.
- [react-dragula](https://github.com/bevacqua/react-dragula) - Faites glisser et laissez tomber si simple que ça fait mal.
- [react-dropzone](https://github.com/okonet/react-dropzone) - Simple zone de glisser-déposer HTML5 avec React.js.
- [react-movable](https://github.com/tajo/react-movable) - Bibliothèque accessible et minimaliste (<4kB gzipped) pour glisser et déposer verticalement dans les listes et les tables.
- [react-sortable-pane](https://github.com/bokuweb/react-sortable-pane) - Composant de vitre triable et redimensionnable pour React.
- [neodrag](https://github.com/PuruVJ/neodrag) - Bibliothèques multi-cadres pour traîner. Choisissez votre cadre, le comportement de l'API de glisser restera le même.

#### Liste triable

Laissez l'utilisateur définir un ordre sur une liste 

- [react-anything-sortable](https://github.com/jasonslyvia/react-anything-sortable) - Triez tous les enfants avec support tactile et compatibilité IE8.
- [sortablejs](https://github.com/SortableJS/Sortable) - Listes réordonnées par glisser-déposer, à l'intérieur et entre les listes.

#### Éditeur de texte riche

- [alloyeditor](https://github.com/liferay/alloy-editor) - WYSIWYG éditeur basé sur CKEditor avec entièrement réécrit UI.
- [ckeditor4-react](https://github.com/ckeditor/ckeditor4-react) - Un emballage officiel CKEditor 4 riche éditeur de texte.
- [ckeditor5-react](https://github.com/ckeditor/ckeditor5-react) - Un emballage officiel CKEditor 5 riche éditeur de texte.
- [draft-js](https://github.com/facebook/draft-js) - A React cadre pour la construction des éditeurs de texte.
- [edtr-io](https://github.com/edtr-io/edtr-io) - [demo](https://edtr.io/) - [docs](https://edtr.io/docs/getting-started) - WYSIWYG éditeur web en ligne avec plugins.
- [megadraft](https://github.com/globocom/megadraft) - Éditeur de texte riche construit sur brouillon.js.
- [react-ace](https://github.com/securingsincity/react-ace) - Ace (Avancé Code Rédacteur en chef).
- [react-codemirror](https://github.com/uiwjs/react-codemirror) - [demo](https://uiwjs.github.io/react-codemirror/) - Composant CodeMirror pour React.
- [react-contenteditable](https://github.com/lovasoa/react-contenteditable) - React composant pour un div avec contenu modifiable.
- [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) - WYSIWYG éditer construire sur le dessus de [DraftJS](https://draftjs.org/).
- [react-editor](https://github.com/fritx/react-editor) - Simple éditeur de texte riche qui peut insérer des images et HTML.
- [react-medium-editor](https://github.com/wangzuo/react-medium-editor) - Enveloppe d'édition moyenne.
- [react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor) - Composant éditeur de Monaco React.
- [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor) - Simple sans fissuration code éditeur avec mise en évidence syntaxique
- [react-quill](https://github.com/zenoamaro/react-quill) - Coussin d'emballage.
- [react-trumbowyg](https://github.com/RD17/react-trumbowyg) - [Trumbowyg](https://alex-d.github.io/Trumbowyg/) Enveloppe.
- [remirror](https://github.com/remirror/remirror) - [demo](https://remirror.io/playground) - [docs](https://remirror.io/docs) - Boîte à outils ProseMirror pour React.
- [slate](https://github.com/ianstormtaylor/slate) - [demo](http://slatejs.org/) - [docs](https://docs.slatejs.org/) - Un cadre entièrement personnalisable pour construire des éditeurs de texte riches.
- [smartblock](https://github.com/appleple/smartblock) - [demo](https://appleple.github.io/smartblock/) - [docs](https://appleple.github.io/smartblock/get-started) - Éditeur WYSIWYG basé sur ProseMirror.
- [tiptap](https://github.com/ueberdosis/tiptap) - [demo](https://tiptap.dev/) - [docs](https://tiptap.dev/introduction) - Le cadre d'éditeur sans tête pour les artisans du web.

#### Markdown Éditeur

- [react-simplemde-editor](https://github.com/RIP21/react-simplemde-editor) - React enveloppe de composants pour [EasyMDE (the most fresh SimpleMDE fork)](https://github.com/Ionaru/easy-markdown-editor).
- [react-markdown-editor](https://github.com/jrm2k6/react-markdown-editor) - A markdown éditeur utilisant React/Réflux.
- [react-md-editor](https://github.com/uiwjs/react-md-editor) - Une simple markdown éditeur avec prévisualisation, implémenté avec React.js et TypeScript.

#### Édition de l'image

Manipulation d'images

- [react-avatar-editor](https://github.com/mosch/react-avatar-editor) - Component d'image Facebook, avatar / profil.
- [react-avatar-generator](https://github.com/JosephSmith127/react-avatar-generator) - Générer un kaléidoscope amusant pour les avatars utilisateurs.
- [react-easy-crop](https://github.com/ricardo-ch/react-easy-crop) - Composant pour crop/rotation des images/vidéos avec des interactions faciles. Toucher amical.
- [react-image-crop](https://github.com/DominicTobias/react-image-crop) - Un outil de recadrage d'image réactif pour React.
- [react-image-cropper](https://github.com/jerryshew/react-image-cropper) - Cropper d'image.
- [react-advanced-cropper](https://github.com/advanced-cropper/react-advanced-cropper) - A react cropper bibliothèque pour créer le cropper exactement adapté pour votre site Web design.
- [react-mobile-cropper](https://github.com/advanced-cropper/react-mobile-cropper) - Une bibliothèque de recadrage d'image prête à l'emploi, fortement inspirée par les populaires croppers Android. Sur la base `react-advanced-cropper`.

#### Recouvrement des composantes du formulaire

- [formsy-material-ui](https://github.com/mbrookes/formsy-material-ui) - Un emballage de compatibilité Formy pour Material UI forme des composants.
- [formsy-react-components](https://github.com/twisty/formsy-react-components) - Une série de React Composants JS destinés à être utilisésreact formulaire.
- [react-input-enhancements](https://github.com/alexkuz/react-input-enhancements) - Ensemble d'améliorations pour le contrôle d'entrée.
- [react-widgets](https://github.com/jquense/react-widgets) - Un ensemble &agrave; la carte d'entrées polies, extensibles et accessibles.

#### Divers

- [@anatoliygatt/numeric-stepper](https://github.com/anatoliygatt/numeric-stepper) - [demo](https://codesandbox.io/s/demo-for-anatoliygatt-numeric-stepper-mllfyl) - Une composante de stepper numérique entièrement thématique et accessible.
- [interweave](https://github.com/milesj/interweave) - React bibliothèque à rendre en toute sécurité HTML, attributs de filtre, autowrap texte avec les correspondants, rendre les caractères emoji, et beaucoup plus.
- [react-designer](https://github.com/react-designer/react-designer) - Facile à configurer, léger, vectoriel modifiable graphiques dans votre react composants.
- [react-upload-gallery](https://github.com/TPMinan/react-upload-gallery) - React pour télécharger la galerie d'images. Faites glisser et déposez, triez, personnalisez.

#### Syntaxe mise en évidence

- [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter) - Composant syntax avec Prismjs ou Highlightjs AST utilisant des styles en ligne.

## UI Mise en page

**[`Back to top ⬆️`](#table-of-contents)**

Composants pour mettre en page l'interface utilisateur de l'application

- [autoresponsive-react](https://github.com/xudafeng/autoresponsive-react) - Librairie de mise en page automatique du réseau.
- [hedron](https://github.com/JSBros/hedron) - Un système de grille flexbox sans fissures, alimenté par des composants de style.
- [m-react-splitters](https://github.com/martinnov92/React-Splitters) - Composant diviseur, écrit en TypeScript.
- [muuri-react](https://github.com/Paol-imi/muuri-react) - [demo](https://1czo5.csb.app/) - [docs](https://paol-imi.github.io/muuri-react) - Mises en page réceptives, triables, filtrables et dragables.
- [react-grid-layout](https://github.com/STRML/react-grid-layout) - Une disposition de grille dragable et redimensionnable avec des points d'arrêt réactifs, pour React.
- [react-layman](https://github.com/Jeshwin/react-layman) - [demo](https://jeshwin.github.io/react-layman/) - Gestionnaire de mise en page dynamique avec onglets
- [react-masonry-component](https://github.com/eiriklv/react-masonry-component) - Enveloppe pour la maçonnerie de @desandro.
- [react-reflex](https://github.com/leefsmp/Re-Flex) - Composant de conteneur de disposition flexible pour avancé React applications Web.
- [react-spaces](https://github.com/aeagle/react-spaces) - [demo/docs](https://www.allaneagle.com/react-spaces/demo/) - Composants nidables ancrés, redimensionnables, défilants.
- [react-stonecutter](https://github.com/dantrain/react-stonecutter) - Composante de mise en page animée de la grille.
- [react-colrow](https://github.com/phphe/react-colrow) - Composants de disposition de grilles réactives. Sur la base css flexbox. Prise en charge de la largeur de la fraction, croissance automatique.
- [react-schematic](https://github.com/umeshmk/react-schematic) - [demo](https://umeshmk.github.io/react-schematic) - Construisez des mises en page réactives en utilisant des schémas de style sans dépasser aucune configuration de thème

## UI Animation

**[`Back to top ⬆️`](#table-of-contents)**

Animer les transitions 

- [data-driven-motion](https://github.com/tkh44/data-driven-motion) - Animez facilement vos données.
- [react-animatable](https://github.com/inokawa/react-animatable) - Une bibliothèque d'animation utilisant l'API Web Animations.
- [react-anime](https://github.com/stelatech/react-anime) - Une bibliothèque d'animation super facile.
- [react-flip-move](https://github.com/joshwcomeau/react-flip-move) - animation sans effort entre DOM les modifications (p. ex. la réorganisation de la liste) en utilisant la technique FLIP.
- [react-gsap-enhancer](https://github.com/azazdeaz/react-gsap-enhancer) - Utiliser toute la puissance de React et GSAP ensemble.
- [react-tsparticles](https://github.com/matteobruni/tsparticles/blob/master/components/react/README.md) - Un composant léger pour créer facilement des animations de particules interactives
- [react-motion](https://github.com/chenglou/react-motion) - Une source qui résout vos problèmes d'animation.
- [react-mt-svg-lines](https://github.com/moarwick/react-mt-svg-lines) - Enrouleur pour animer la course en SVG.
- [react-router-transition](https://github.com/maisano/react-router-transition) - Transitions construites pour react-routeur, alimenté par react- Ça va.
- [react-spring](https://github.com/react-spring/react-spring) - Une bibliothèque d'animation basée sur la physique du printemps.
- [react-ts-typewriter](https://github.com/gerardmarquinarubio/ReactTypewriter) - [demo](https://codesandbox.io/s/react-typewriter-example-mgyclf) - Facile à utiliser et effet machine à écrire personnalisable pour tout texte.
- [framer-motion](https://github.com/framer/motion) - Une bibliothèque d'animation et de geste.
- [react-spark-scroll](https://github.com/gilbox/react-spark-scroll) - Actions et animations basées sur le défilement pour react.
- [react-track](https://github.com/gilbox/react-track) - Suivre la position de DOM éléments. Créez des animations cool.
- [react-transitive-number](https://github.com/Lapple/react-transitive-number) - Appliquez l'effet de transition aux chaînes numériques, une la old Groupon timers.
- [react-web-animation](https://github.com/bringking/react-web-animation) - React composants pour l'API Web Animations -.
- [auto-size-transition](https://github.com/DualWield/auto-size-transition) - Une composante qui s'échelle dynamiquement en fonction de la taille interne des enfants
- [react-particles-bg](https://github.com/lindelof/particles-bg) - Des particules.
- [gooey-react](https://github.com/luukdv/gooey-react) - [demo/docs](https://gooey-react.netlify.app/) - L'effet gooy pour React, utilisé pour la forme blobbing / métaballes.
- [react-voodoo](https://github.com/react-voodoo/react-voodoo) - [demo/samples](https://github.com/react-voodoo/react-voodoo-samples) - Moteur d'animation additive permettant des animations complexes comme des androïdes/iOs, le rendu des curseurs sur SSR, l'inertie prédictive, multitouch, etc

### Parallaxe

- [simple-parallax-js](https://github.com/geosigno/simpleParallax.js) - [demo](https://simpleparallax.com) - La meilleure façon d'obtenir un effet parallax avec React et JavaScript sur les images
- [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt) - [demo](https://mkosir.github.io/react-parallax-tilt) - Appliquer facilement l'effet de vol stationnaire parallaxe sur les composants.

## UI Cadres

**[`Back to top ⬆️`](#table-of-contents)**

### Réceptif

Set de composants + système de mise en page responsive 

- [ant-design](https://github.com/ant-design/ant-design) - [demo/docs](https://ant.design/docs/react/introduce) - A UI Design Langue chinoise. Individuel [components](http://react-component.github.io/) disponible.
- [atlaskit](https://atlaskit.atlassian.com/packages) - Le fonctionnaire d'Atlassian UI bibliothèque, avec composants de  badge  à  tree table .
- [base web](https://baseweb.design) - Base Web est une base pour lancer, développer et unifier des produits Web.
- [carbon](https://github.com/carbon-design-system/carbon) - [demo/docs](https://www.carbondesignsystem.com/) - A design système construit par IBM.
- [cdbreact](https://github.com/Devwares-Team/cdbreact) - [demo](https://www.devwares.com/product/contrast) - [docs](https://www.devwares.com/docs/contrast/react/index) - Élégant UI Kit bibliothèque et composants réutilisables pour construire mobile-premier, sites Web réactifs et applications Web.
- [chakra-ui](https://github.com/chakra-ui/chakra-ui) - [demo/docs](https://chakra-ui.com) - Simple, modulaire et accessible UI Composants pour votre React Demandes.
- [ChatUI](https://github.com/alibaba/ChatUI) - [demo/docs](https://chatui.io/) - Les UI design langue et React bibliothèque pour Conversational UI
- [CoreUI for React](https://github.com/coreui/coreui-react) - [demo/docs](https://coreui.io/react) - Source ouverte UI bibliothèque de composants.
- [evergreen](https://github.com/segmentio/evergreen) - [demo/docs](https://evergreen.segment.com) - Evergreen React UI Cadre par segment.
- [fluentui](https://github.com/microsoft/fluentui) - Cadres UX pour créer de belles applications multiplateformes qui partagent code, design, et comportement d'interaction.
- [gestalt](https://github.com/pinterest/gestalt) - [demo/docs](https://pinterest.github.io/gestalt/#/) - Un ensemble de composants qui supporte Pinterests design langue.
- [grommet](https://github.com/grommet/grommet) - Le cadre UX le plus avancé pour les applications d'entreprise.
- [kokonut-ui](https://github.com/kokonut-labs/kokonutui) - Gratuit Moderne et personnalisable UI composants.
- [Mantine](https://github.com/mantinedev/mantine) - [demo/docs](https://mantine.dev/) - Une bibliothèque entièrement équipée avec 100 crochets et composants avec native soutien thème sombre
- [orbit](https://github.com/kiwicom/orbit) - Composantes pour la construction de projets axés sur les voyages.
- [flowbite-react](https://github.com/themesberg/flowbite-react) - Source ouverte UI bibliothèque de composants basée sur React, Tailwind CSSEt Flowbite.
- [primereact](https://github.com/primefaces/primereact) - Une version complète UI Cadre avec plus de 50 composants material, bootstrap et des thèmes personnalisés.
- [radix-ui](https://www.radix-ui.com/) - Composants sans style et accessibles pour la construction de haute qualité design systèmes et applications web.
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Bootstrap composants construits avec React.
- [react-foundation](https://github.com/digiaonline/react-foundation) - Fondation React composants.
- [reakit](https://github.com/ariakit/ariakit) - [demo/docs](https://reakit.io/docs/button/) Toolkit pour construire des applications Web riches et accessibles
- [searchkit](https://github.com/searchkit/searchkit) - React UI composants / widgets. La meilleure façon de construire une grande expérience de recherche avec Elasticsearch.
- [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React) - La sémantique officielle...UI-React l'intégration.
- [semi-design](https://github.com/DouyinFE/semi-design) - [demo/docs](https://semi.design/) - Un moderne, complet, flexible design système.
- [shadcn/ui](https://github.com/shadcn-ui/ui) - [demo](https://ui.shadcn.com/examples/mail) - [docs](https://ui.shadcn.com/docs) - Composants magnifiquement conçus que vous pouvez copier et coller dans vos applications.
- [shineout](https://github.com/sheinsight/shineout) - [demo](https://shine.wiki/1.4.x/en/components/GetStart) - Ensemble de composants adaptés aux Chinois : éléments de forme, navigation, table, arbre, arbre, sélection d'arborescence, etc.
- [Tremor](https://github.com/tremorlabs/tremor-raw) - [demo](https://tremor.so/charts) - [docs](https://tremor.so/docs/getting-started/installation) - Composants open-source pour construire des graphiques et des tableaux de bord.
- [untitled-ui-react](https://github.com/untitleduico/react) - [demo](https://www.untitledui.com/react/) - Belle collection de composants construits avec React Aria et Tailwind CSS.

#### Material Design

- 🚀 [Material UI](https://github.com/mui/material-ui) - Ensemble complet de composants. Construisez votre propre design ou commencer par Material Design.
  - [Autocomplete](https://mui.com/material-ui/react-autocomplete/) - Autocomplet accessible, combobox, multisélection
  - [Material Icons](https://mui.com/material-ui/material-icons/) - 1 000 + SVG material les icônes.
  - [Modal](https://mui.com/material-ui/react-modal/) - Composant de dialogue modale accessible.
  - [Slider](https://mui.com/material-ui/react-slider/) - Composant coulissant accessible.
  - [Table](https://mui.com/material-ui/react-table/) - table avec tri, sélection, pagination, virtualisation.
  - [Tree View](https://mui.com/material-ui/react-tree-view/) - Composant de vue arborescente accessible pour React.
- [react-essence](https://github.com/Evo-Forge/Essence) - Essence - L'essentiel Material Design Cadre.
- [react-materialize](https://github.com/react-materialize/react-materialize) - Material design pour react, alimenté par matérialistes.
- [react-toolbox](https://github.com/react-toolbox/react-toolbox) - Une série de React composants mettant en œuvre Google Material Design.
- [mdbootstrap](https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design) - React Bootstrap avec Material Design

### Mobile

- [antd-mobile](https://github.com/ant-design/ant-design-mobile) - Mobile configurable UI de Chine.
- [Ionic React](https://ionicframework.com/blog/announcing-ionic-react/) - Cadre ionique: construire facilement Android, Bureau et applications Web progressives avec une code base.
- [OnsenUI](https://github.com/OnsenUI/OnsenUI/) - [demo/docs](https://onsen.io/v2/guide/react/) - Cadre d'application mobile avec Material et à plat (iOS). Basé sur les composants Web.

### Recouvrement des composantes

- [blueprint](https://github.com/palantir/blueprint) - [demo](https://blueprintjs.com/) - [docs](https://blueprintjs.com/docs/) - UI boîte à outils pour construire des interfaces Web complexes et denses pour les applications de bureau (pas mobiles).
- [dataminr-react-components](https://github.com/dataminr/react-components) - Collecte de données réutilisables React Composants et fonctions d'utilité.
- [shards-react](https://github.com/DesignRevision/shards-react) - [docs/demo](https://designrevision.com/docs/shards-react/getting-started) - Une belle et moderne React design système. Le freemium.
- [aframe-react](https://github.com/ngokevin/aframe-react) - Construire des expériences de réalité virtuelle avec A-Frame et React.
- [react-admin](https://github.com/marmelab/react-admin) - Créez des expériences utilisateur admin en plus des services REST et GraphQL.
- [refine](https://github.com/pankod/refine) - [demo](https://example.refine.dev) - [docs](https://refine.dev/docs) - Construisez rapidement des applications à forte intensité de données. Il est livré avec Ant Design Système, un niveau d'entreprise UI Une boîte à outils.
- [matrix-card](https://github.com/MehmetKaplan/matrix-card) - [demo](https://mehmetkaplan.github.io/matrix-card/) - Composant le plus simple possible pour générer des cartes de style de pluie matrice.
- [rsuite](https://github.com/rsuite/rsuite) - [demo/docs](https://rsuitejs.com/) - Suite de composants pour "produits du système d'entreprise".
- [lens-ui](https://github.com/luciancaetano/lens-ui) - [docs](https://github.com/luciancaetano/lens-ui/blob/main/docs/introduction.md) - Une combinaison de composants axée sur la simplicité.
- [Tailwindadmin](https://github.com/Tailwind-Admin/free-tailwind-admin-dashboard-template) - [docs](https://tailwind-admin.com/components) - Une collection de ShadCN ready-made UI composants que vous pouvez brancher directement dans votre React/Next.js projets.

## UI Services publics

**[`Back to top ⬆️`](#table-of-contents)**

### Reporter

Rapporter les styles calculés 

#### Rapporteur de visibilité

Signaler lorsqu'un composant devient visible/caché 

- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - React mise en œuvre de l'API d'observateur intersection.
- [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) - Composant capteur.
- [react-waypoint](https://github.com/brigade/react-waypoint) - A React composant pour exécuter une fonction chaque fois que vous défilez vers un élément.

#### Rapporteur de mesure

Déterminer et rapporter les mesures d'un élément 

- [react-component-queries](https://github.com/ctrlplusb/react-component-queries) - Fournissez des accessoires à vos Composants en fonction de leur Largeur et/ou Hauteur.
- [react-container-dimensions](https://github.com/okonet/react-container-dimensions) - Composant Wrapper qui détecte la redimensionnement de l'élément.
- [react-dimensions](https://github.com/digidem/react-dimensions) - React composant d'ordre supérieur pour obtenir les dimensions du conteneur.
- [react-height](https://github.com/nkbt/react-height) - Component-wrapper pour déterminer et signaler la hauteur des éléments enfants.
- [react-measure](https://github.com/souporserious/react-measure) - Calcul des mesures d'un React composante.
- [react-sizeme](https://github.com/ctrlplusb/react-sizeme) - Faites votre React Composants conscients de leur largeur et de leur hauteur.

### Entrée du périphérique

Turner l'entrée de l'utilisateur dans les actions 

#### Événements clavier

- [react-hotkeys](https://github.com/chrisui/react-hotkeys) - Gestion de la clé de frappe et du domaine d'intervention React.
- [react-key-handler](https://github.com/ayrton/react-key-handler) - React composant pour gérer les événements clavier.
- [react-keydown](https://github.com/glortho/react-keydown) - Enveloppe de clé légère pour React composants.
- [react-shortcuts](https://github.com/avocode/react-shortcuts) - Gérer les raccourcis clavier à partir d'un seul endroit.
- [useKeyCapture](https://github.com/pranesh239/use-key-capture) - Un crochet personnalisé pour faciliter l'écoute d'une cible/globale.
- [react-keyboard-navigator](https://github.com/zheeeng/react-keyboard-navigator) - Une suite de React composants et crochet pour sélectionner les composants de la soeur à travers le clavier.

#### Faire défiler les événements

- [react-scroll-components](https://github.com/jeroencoumans/react-scroll-components) - Un ensemble de composants qui react à faire défiler la page.

#### Touchez Swipe

- [react-swipe](https://github.com/voronianski/react-swipe) - Swipe.js comme un React composante.

#### Événements de la souris

- [react-hook-mighty-mouse](https://github.com/mkosir/react-hook-mighty-mouse) - [demo](https://mkosir.github.io/react-hook-mighty-mouse) - Crochet qui suit les événements de la souris sur l'élément sélectionné.

### Meta Tags

Fixer des balises méta, <title>Enfants de <head>_

- [react-helmet-async](https://github.com/staylor/react-helmet-async#readme) - Casque sans fil pour React 16+ et amis
- [react-helmet](https://github.com/nfl/react-helmet) - Un responsable de document pour React.

### Portail

Rendre un élément à un arbitraire DOM noeud 

- [react-layer-stack](https://github.com/fckt/react-layer-stack) - Système de superposition simple mais omniprésent et agnostique pour React.
- [react-portal](https://github.com/tajo/react-portal) - React composante pour le transport des modals, boîtes à lumière, barres de chargement... vers document.body.

### Tester le comportement de l'utilisateur

A/B tests, expériences, ... 

- [react-experiments](https://github.com/HubSpot/react-experiments) - React les éléments de mise en œuvre UI des expériences.

## Code Design

**[`Back to top ⬆️`](#table-of-contents)**

Bibliothèques qui aident avec code conception 

### Magasin de données

Flux de données / Gestion de données / Stockages de données / État des composants / Flux de données 

- [baobab-react](https://github.com/Yomguithereal/baobab-react) - React intégration pour Baobab.
- [cerebral](https://github.com/cerebral/cerebral) - Un contrôleur d'État avec son propre débogueur.
- [effector-react](https://github.com/effector/effector) - React des liens pour effector, un gestionnaire d'état multi-store efficace.
- [fireproof](https://github.com/fireproof-storage/fireproof) - [demo](https://fireproof.storage/try-free/) - [docs](https://use-fireproof.com/docs/welcome) Pure JS, aucune dépendance, base de données CRDT - fonctionne dans le navigateur et se connecte à tout cloud ou backend
- [RxDB](https://rxdb.info/) - [demo](https://github.com/pubkey/rxdb/tree/master/examples/react) - [docs](https://rxdb.info/quickstart.html) Une première base de données rapide, locale, réactive pour JavaScript Demandes
- [fluxible](https://github.com/yahoo/fluxible) - Un conteneur rechargeable pour les applications de flux universel.
- [kea](https://github.com/mariusandra/kea) - Architecture de haut niveau pour React les applications.
- [react-i13n](https://github.com/yahoo/react-i13n) - Une approche performante, évolutive et rechargeable pour instrumenter votre React demande.
- [react-redux](https://github.com/reactjs/react-redux) - Fonctionnaires React fixations pour Redux.
- [redux-batched-actions](https://github.com/tshelburne/redux-batched-actions) - Réducteur + action pour réduire les actions sous une seule notification d'abonné.
- [redux](https://github.com/reactjs/redux) - Conteneur à état prévisible pour JavaScript les applications.
- [reselect](https://github.com/reactjs/reselect) - Bibliothèque de sélection pour Redux.
- [resourcerer](https://github.com/SiftScience/resourcerer) - Cadre déclaratif de saisie des données pour les API REST
- [synergies](https://github.com/lukasbach/synergies) - [docs](https://synergies.js.org) Une bibliothèque de contexte-état performante et distribuée pour créer réutilisable React la logique d'état en synchronisant des morceaux de contexte atomar.
- [zustand](https://zustand.surge.sh/) - [docs](https://github.com/pmndrs/zustand) - Une solution de gestion d'état des os d'ours rapides utilisant des principes de flux simplifiés et un crochet sans plaque de chaudière api.
- [teaful](https://github.com/teafuljs/teaful) - Petit, facile et puissant React gestion de l'État

### Logique du formulaire

- [data-driven-forms](https://github.com/data-driven-forms/react-forms) - Un moyen déclaratif pour construire des formulaires avec toutes les fonctionnalités.
- [formik](https://github.com/jaredpalmer/formik) - Construire des formes sans larmes et soutient Validation en toute simplicité.
- [formsy-react](https://github.com/formsy/formsy-react/) - Un constructeur d'entrées de formulaire et un validateur pour React JS.
- [Phormal](https://github.com/phormal/phormal) - [Docs & Demos](https://phormal.dev/getting-started/react) - Formes réactives et multilingues avec validation intégrée, support pour le mode sombre et les langues de droite à gauche.
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - React des crochets pour la validation de formulaire sans le tracas.
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) - A React composant pour la construction de formulaires Web de JSONSchema.
- [react-client-validation](https://github.com/0529bill/react-client-validation) - Validation simple et super légère pour React.
- [react-final-form](https://github.com/final-form/react-final-form) - Gestion de l'État par abonnement
- [react-formawesome](https://github.com/MAKARD/react-formawesome) - Bibliothèque complexe pour créer des formes impressionnantes.
- [surveyjs](https://github.com/surveyjs/survey-library) - La bibliothèque avancée des enquêtes et des formulaires
- [Formily](https://github.com/alibaba/formily) - Haute performance, extensible, et Typescript amical
- [hook-form-react](https://github.com/luoanb/hook-form-react) - [docs](https://luoanb.github.io/hook-form-react) - Une solution légère et sans dépendance React crochets pour la validation du formulaire.

### Routeur

- [react-router-component](https://github.com/STRML/react-router-component) - Composant routeur déclaratif pour React.
- [react-router-scroll](https://github.com/taion/react-router-scroll) - React Gestion du défilement du routeur.
- [react-router](https://github.com/reactjs/react-router) - Une bibliothèque de routage complète pour React.
- [redux-first-history](https://github.com/salvoravida/redux-first-history) - Redux Première histoire - Redux soutien de liaison historique react-routeur - @reach/routeur - wuter
- [universal-router](https://github.com/kriasoft/universal-router) - Un simple routeur de style intergiciel pour isomorphe JavaScript applications web.
- [wouter](https://github.com/molefrog/wouter) - Une bibliothèque de routage minimaliste ~1.3Ko. Rien d'autre que des crochets.
- [tanstack-router](https://github.com/TanStack/router) - Routeur à sécurité de type avec cache intégré & URL gestion de l'État

### Props depuis le serveur

Propriétés des composants asynchrones récupérées sur le réseau 

- [react-refetch](https://github.com/heroku/react-refetch) - Une façon simple, déclarative et Composable de récupérer des données pour React composants.
- [redux-connect](https://github.com/makeomatic/redux-connect) - Fournit décorateur pour résoudre les accessoires async dans react- Routeur.
- [axios-react](https://github.com/soroushchehresa/axios-react) - Composant client HTTP pour React.

### Communication avec le serveur

- [apollo-client](https://github.com/apollostack/apollo-client) - Un simple client de cache pour n'importe quel serveur GraphQL et UI cadre.
- [react-relay](https://github.com/facebook/relay) - Le relais est un JavaScript cadre pour la mise en place React les demandes.
- [query](https://github.com/TanStack/query) - [docs](https://tanstack.com/query/v4) Gestion d'état asynchrone puissante, utilitaires serveur-état et récupération de données pour TS/JS, React, Solide, Svelte et Vue.

### CSS / Style

- [aesthetic](https://github.com/milesj/aesthetic) - Un puissant agnostique de type sûr, CSS-en-JS bibliothèque pour les composants de style, qu'il s'agisse d'objets simples, d'importation de feuilles de style, ou simplement de référencement de noms de classe externes.
- [aphrodite](https://github.com/Khan/aphrodite) - Il&#39;s styles en ligne, mais ils fonctionnent!.
- [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer) - Autopréfixeur temps d'exécution pour les objets de style en ligne.
- [@classmatejs/react](https://github.com/richard-unterberg/classmatejs/tree/master/packages/react) - Un constructeur de composants centré sur le nom de classe avec une syntaxe comme les composants style et le sucre des variantes de cva.
- [react-container-query](https://github.com/d6u/react-container-query) - Composant modulaire réactif.
- [react-responsive](https://github.com/contra/react-responsive) - Questions des médias react pour répondre design.
- [reactponsive](https://github.com/jmlweb/reactponsive) - Composants et crochets réactifs.
- [styled-components](https://github.com/styled-components/styled-components) - Les primitifs visuels pour l'âge des composants.
- [stitches](https://github.com/stitchesjs/stitches) - CSS-en-JS avec presque zéro runtime, SSR, support multivariant.

### HTML Modèle

- [jsx-control-statements](https://github.com/AlexGilleran/jsx-control-statements) - Neater Si et pour React JSX.

### Applications isomorphes

- [hypernova](https://github.com/airbnb/hypernova) - Un service de rendu côté serveur JavaScript vue.
- [isomorphic-style-loader](https://github.com/kriasoft/isomorphic-style-loader) - Isomorphique CSS chargeur de style pour Webpack.
- [react-server](https://github.com/redfin/react-server) - React framework avec rendu serveur pour la charge rapide des pages.
- [rill](https://github.com/rill-js/rill) - Cadre d'application web universel.
- [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) - Le rendu côté serveur pour vos applications Webpack (p. ex. React).

### Chaudière

Scaffold / kit de démarrage / Générateur Yeoman / ensemble de piles / seed 

- [create-react-app](https://github.com/facebookincubator/create-react-app) - Créer React applications sans configuration de construction.
- [crisp-react](https://github.com/winwiz1/crisp-react) - Intégration rapide dans TypeScript avec le soutien de multiples SPA et l'évitement des pièges.
- [cra-template-redux-auth-starter](https://github.com/Nilanth/cra-template-redux-auth-starter) - A Redux la plaque de démarrage pour CRA.
- [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate) - Développement d'édition en direct sur l'application de bureau.
- [elegant](https://github.com/elegantframework/elegant-cli) - [docs](https://www.elegantframework.com/docs/installation) - [demo](https://www.elegantframework.com/) - Une simple React cadre pour construire rapidement de belles et expressives applications web avec Next.js, Tailwind CSSet Markdown chargement.
- [extensive-react-boilerplate](https://github.com/brocoders/extensive-react-boilerplate) - Plaque de chaudière Next.js, Auth (S'inscrire, S'inscrire, Réinitialiser le mot de passe, Confirmer l'e-mail, Refresh Token), Material UI, React Forme de crochet, I18N, Téléchargement de fichiers (support des pilotes locaux et Amazon S3), Tests, CI.
- [generator-starhackit](https://github.com/FredericHeem/starhackit) - Kit de démarrage complet.
- [nwb](https://github.com/insin/nwb) - Outil CLI et devDependency pour React composants d'applications &amp; et modules npm.
- [nx](https://nx.dev) - Système de construction de nouvelle génération avec support monorepo de première classe et intégrations puissantes.
- [PBandJ](https://github.com/moishinetzer/pbandj) - Cadre des composants réutilisables Zero-Config.
- [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) - Plaque de chaudière minimale pour votre prochaine ReactJS Projet.
- [rockpack](https://github.com/AlexSergey/rockpack) - Solution simple pour créer React application avec SSR, regroupement, lintage, test dans les 5 minutes.
- [create-react-dependency](https://github.com/andrelmlins/create-react-dependency) - Créer react dépendances sans configuration de construction.
- [phoenix](https://github.com/Sazito/phoenix) - Une simple plaque de chaudière qui vous aide à faire votre react application avec support de rendu et de localisation côté serveur.
- [react-enterprise-starter-kit](https://github.com/anandgupta193/react-enterprise-starter-kit) - Très scalable et performant React Kit de démarrage pour une application d'entreprise avec une base de code très facile à entretenir.
- [Tailwindadmin](https://tailwind-admin.com/) - Modèle de tableau de bord Shadcn construit gratuitement React et Tailwind CSS est livré avec support multi-cadre

### Divers

- [react-inlinesvg](https://github.com/matthewwithanm/react-inlinesvg) - Un composant de chargeur SVG pour ReactJS.
- [react-godfather](https://github.com/kapolos/react-godfather) - Une nouvelle façon d'écrire des composants fonctionnels, sans crochet.
- [react-vvm](https://github.com/behnamrhp/React-VVM) - Une nouvelle approche du MVVM React, afin d'assurer une séparation nette des préoccupations, de réduire la plaque de chaudière et d'optimiser automatiquement la re-rendement pour les scalables UI logique.
- [react-call](https://github.com/desko27/react-call) - Appelez votre React composants.
- [redux-auth-patch](https://github.com/lynndylanhurley/redux-auth) - Système d'authentification token complet pour react + redux qui supporte le rendu isomorphe.
- [redux-search](https://github.com/treasure-data/redux-search) - Redux des liens pour la recherche côté client.
- [tcomb-react](https://github.com/gcanti/tcomb-react) - Syntaxe alternative pour PropTypes.
- [react-universal-hooks](https://github.com/salvoravida/react-universal-hooks) - :tada: soutien react hameçons partout (composante fonctionnelle ou de classe).

## Services publics

**[`Back to top ⬆️`](#table-of-contents)**

- [qrcode.react](https://github.com/zpao/qrcode.react) - Composante A &lt;QRCode/&gt; pour utilisation avec React.
- [`<qr-code>`](https://github.com/bitjson/qr-code) – A no-dependencies, customizable, animate-able, SVG-based `<qr-code>` element.
- [react-children-utilities](https://github.com/fernandopasik/react-children-utilities) - Outils étendus pour ReactLes enfants.
- [react-media](https://github.com/ReactTraining/react-media) - A CSS composant de requête multimédia pour React.
- [react-middle-ellipsis](https://github.com/bluepeter/react-middle-ellipsis) - [demo](https://bluepeter.github.io/react-middle-ellipsis/) - Tranchez de longues cordes au milieu au lieu de la fin.
- [react-translate-component](https://github.com/martinandert/react-translate-component) - Contenu textuel multilingue/localisé.

### i18n

Internationalisation / L10n / localisation / traduction 

- [react-i18next](https://github.com/i18next/react-i18next) - Internationalisation pour react C'est bien. Utilisation du i18next i18n l'écosystème.
- [react-intl](https://github.com/yahoo/react-intl) - Internationaliser React les applications.
- [react-localized](https://github.com/fakundo/react-localized) - Internationalisation pour React composants basés sur `gettext` modèle.
- [react-translate-maker](https://github.com/CherryProjects/react-translate-maker) - Internationalisation universelle (i18n) bibliothèque open source pour React.
- [react-intl-universal](https://github.com/alibaba/react-intl-universal) - [demo](https://g.alicdn.com/alishu/common/0.0.95/intl-example/index.html) Internationaliser React les applications. Pas seulement pour React.Component mais aussi pour Vanilla JS.
- [@tolgee/react](https://github.com/tolgee/tolgee-js/tree/main/packages/react) - [docs](https://tolgee.io/docs/web/using_with_react/installation) – outil de localisation Web permettant aux utilisateurs de traduire directement React app qu'ils développent
- [js-lingui](https://github.com/lingui/js-lingui) - [docs](https://lingui.js.org) – Une internationalisation lisible, automatisée et optimisée (5 kb) pour JavaScript.

### Fixations-cadres / intégrations

- [backbone-react-component](https://github.com/magalhas/backbone-react-component) - Un peu de colle qui branche automatiquement vos modèles Backbone.
- [elm-react-component](https://github.com/KtorZ/elm-react-component) - A React composant qui enveloppe un module Elm à utiliser dans un React demande.
- [gl-react](https://github.com/ProjectSeptemberInc/gl-react) - Liens OpenGL / WebGL pour React mettre en œuvre des effets complexes sur les images et le contenu.
- [react-backbone](https://github.com/jhudson8/react-backbone) - Mélangeurs à os pour react Et bien plus encore.
- [react-d3-library](https://github.com/react-d3-library/react-d3-library) - Bibliothèque open source pour utiliser D3 dans React.
- [react-elm-components](https://github.com/evancz/react-elm-components) - Écrire React composants en Elm.
- [react-famous](https://github.com/pilwon/react-famous) - React pont vers Famo.us.
- [react-localstorage](https://github.com/STRML/react-localstorage) - Mise en oeuvre simple de stockage local composé pour Facebook&#39; React.
- [react-lottie-player](https://github.com/mifi/react-lottie-player) - [demo](https://mifi.github.io/react-lottie-player/) - Joueur d'animation de lotie.
- [react-on-rails](https://github.com/shakacode/react_on_rails) - Intégration des React + Webpack + Rails pour construire des applications universelles (isomorphes).
- [react-three-renderer](https://github.com/toxicFork/react-three-renderer) - Rendu dans une toile de trois.js en utilisant React.
- [react-threejs](https://github.com/fritx/react-threejs) - Les liaisons les plus simples entre React & Trois.js
- [reactfire](https://github.com/firebase/reactfire) - ReactJS mixin pour une intégration facile Firebase.
- [reactive-elements](https://github.com/PixelsCommander/ReactiveElements) - Permet d'utiliser React.js composant comme HTML élément (composante web).
- [react-unity-webgl](https://github.com/elraccoone/react-unity-webgl) - Intergration d'unité avec communication bidirectionnelle avec un système d'événements intégré.

### Intégrations avec des services tiers

- [react-ga](https://github.com/react-ga/react-ga) - React Module Google Analytics.
- [react-google-analytics](https://github.com/hzdg/react-google-analytics) - Composant d'analyse Google.
- [react-google-autocomplete](https://github.com/ErrorPro/react-google-autocomplete) - Google Place les composants et les crochets de l'API.
- [react-recaptcha](https://github.com/appleboy/react-recaptcha) - A react.js reCAPTCHA pour Google.
- [react-stripe-checkout](https://github.com/azmenak/react-stripe-checkout) - Charger stripe&#39;s checkout.js comme un react composante. Mode d'utilisation le plus facile avec React.
- [redux-segment](https://github.com/rangle/redux-segment) - Intégration de segment.io analytique pour redux.
- [react-slack-notification](https://github.com/Nilanth/react-slack-notification) - Envoyez directement des messages et des journaux d'erreurs sur un canal Slack.
- [react-firebase-hooks](https://github.com/csfrequency/react-firebase-hooks) - Crochets pour intégrer la base de feu dans votre application.

## Rendement

**[`Back to top ⬆️`](#table-of-contents)**

### UI

- [inferno](https://github.com/trueadm/inferno) - Un très rapide, React- comme JavaScript bibliothèque pour construire des interfaces utilisateur modernes.
- [react-fastclick](https://github.com/JakeSidSmith/react-fastclick) - Événements Fast Touch pour React.
- [react-static-container](https://github.com/reactjs/react-static-container) - Render le contenu statique efficacement.

#### Inspecter

- [react-perf-tool](https://github.com/RamonGebben/react-perf-tool) - Déboguez la performance de votre React demande.
- [react-render-visualizer](https://github.com/redsunsoft/react-render-visualizer) - Visualiseur de rendu pour ReactJS.

#### Charge paresseuse

- [react-infinite-grid](https://github.com/ggordan/react-infinite-grid) - A React composant qui rend une grille d'éléments.
- [react-infinite](https://github.com/seatgeek/react-infinite) - Un conteneur de défilement efficace basé sur UITableView.
- [react-lazy-load](https://github.com/loktar00/react-lazy-load) - React composant qui rend les éléments d'enfant lorsqu'ils entrent dans le viewport.
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload) - Chargez votre composant, image ou tout ce qui importe la performance.
- [react-virtualized](https://github.com/bvaughn/react-virtualized) - React composants pour rendre efficacement les grandes listes et les données tabulaires.

### Taille de l'application

- [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) - Supprimer inutile React propTypes.
- [react-lite](https://github.com/Lucifier129/react-lite) - Une mise en œuvre React qui optimise pour une petite taille de script.

### Rendu à l'aide du serveur

- [iSSR](https://github.com/AlexSergey/issr) - La façon la plus facile de déplacer votre React application sur le rendu à l'aide du serveur. Gérez les effets secondaires et synchronise l'état.
- [react-esi](https://github.com/dunglas/react-esi) - Une bibliothèque pour augmenter les performances de SSR en exposant React composants en tant que fragments Edge Side Inclut (ESI)

## Outils Dev

**[`Back to top ⬆️`](#table-of-contents)**

### Essai

- [enzyme](https://github.com/airbnb/enzyme) - JavaScript Essais des services publics React.
- [jest-cli](https://github.com/facebook/jest) - Sans douleur JavaScript Essais.
- [react-unit](https://github.com/pzavolinsky/react-unit) - Librairie d'essais unitaires légers pour ReactJS.
- [redux-test-recorder](https://github.com/conorhastings/redux-test-recorder) - A redux intergiciel pour générer automatiquement des tests pour les réducteurs à travers ui l'interaction.
- [rut](https://github.com/milesj/rut) - React testing rendu facile avec `react-test-renderer`. Soutiens DOM et des rendus personnalisés.
- [unexpected-react](https://github.com/bruderstein/unexpected-react) - Plugin pour imprévu pour permettre de tester la totalité React virtuel DOM, et aussi le renduur peu profond.
- [playwright](https://github.com/microsoft/playwright) enables reliable end-to-end testing for modern web apps.

### Redux

- [redux-devtools-chart-monitor](https://github.com/romseguy/redux-devtools-chart-monitor) - Un moniteur graphique pour Redux DevTools.
- [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) - Un quai redimensionnable et mobile pour Redux Moniteurs DevTools.
- [redux-devtools-filterable-log-monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor) - Moniteur de vue arborescente filtrable pour Redux DevTools.
- [redux-devtools-inspector](https://github.com/alexkuz/redux-devtools-inspector) - Un autre Redux DevTools Monitor.
- [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor) - Le moniteur par défaut pour Redux DevTools avec vue sur l'arbre.
- [redux-devtools](https://github.com/gaearon/redux-devtools) - DevTools pour Redux avec rechargement à chaud, replay d'action et personnalisable UI.
- [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) - Redux DevTools à distance.

### Inspecter

- [fluxguard](https://fluxguard.com) - Surveillance du changement PROD qui met en évidence tout DOM + design changements.
- [react-inspector](https://github.com/xyc/react-inspector) - Puissance du navigateur DevTools inspecteurs à l'intérieur de votre React Annexe
- [reactotron](https://github.com/reactotron/reactotron) - Une application CLI et OS X pour React JS et React Native les applications.
- [Tail Lens](https://taillens.io) - Tailwind éditeur dans le navigateur : Inspecter, éditer, prévisualiser, copier.

### Divers

- [component-controls](https://github.com/ccontrols/component-controls) - [demo](https://component-controls.com) - [docs](https://component-controls.com/tutorial) - Un outil de nouvelle génération pour créer des sites de documentation rapides.
- [cosmos-js](https://github.com/skidding/cosmos) - Outil DX pour la conception vraiment encapsulé React composants.
- [react-demo-tab-cli](https://github.com/mkosir/react-demo-tab-cli) - Outil CLI pour créer des démos de react composants.
- [react-styleguidist](https://github.com/sapegin/react-styleguidist) - React générateur de guide de style.
- [standard-react](https://github.com/feross/standard) - JavaScript Guide de style standard.
- [Plasmic](https://www.plasmic.app/) - Puissant design outil pour construire votre React composants visuellement.
- [SimpleLocalize](https://github.com/simplelocalize/simplelocalize-cli) - Outil CLI open source pour trouver i18n clés en React projets.
- [react-device-frameset](https://github.com/zheeeng/react-device-frameset) - React composant de cadre de dispositif.

## Divers

**[`Back to top ⬆️`](#table-of-contents)**

- [DataFormsJS JSX Loader](https://github.com/dataformsjs/dataformsjs/blob/master/docs/jsx-loader.md) - Petites JavaScript Compilateur pour convertir rapidement JSX en JS directement sur une page Web.
- [html-to-react-components](https://github.com/roman01la/html-to-react-components) - Extrait des parties annotées HTML dans React composants en tant que modules séparés.
- [htmltojsx](https://github.com/reactjs/react-magic) - AJAXify automatiquement HTML avec la puissance de React. C'est...
- [jsonx](https://github.com/repetere/jsonx) - React JSON Syntaxe.
- [mozaik](https://github.com/plouc/mozaik) - Moza&iuml;k est un outil basé sur nodejs / react / d3 / stylet pour créer facilement de beaux tableaux de bord.
- [react-blessed](https://github.com/Yomguithereal/react-blessed) - A react rendu pour béni.
- [jsondiffpatch-react](https://github.com/bluepeter/jsondiffpatch-react) - JSON se dispute.
- [iron-session](https://github.com/vvo/iron-session) - Bibliothèque de session sécurisée, apatride et basée sur les cookies.

### Générateur de site Web statique

- [gatsby](https://github.com/gatsbyjs/gatsby) - Transformer le texte simple en blogs et sites Web dynamiques React.js.

## Solutions Cloud

**[`Back to top ⬆️`](#table-of-contents)**

### Bases de données

- [BCMS](https://github.com/bcms/cms) - Système de gestion de contenu basé sur l'API, open-source, auto-installable pour Gatsby, Nuxt et Next.
- [crisp-bigquery](https://github.com/winwiz1/crisp-bigquery) - Complète pile Google BigQuery avec Express dans TypeScript.
- [react-server-routing-example](https://github.com/mhart/react-server-routing-example) - Routage client/serveur universel et données avec AWS DynamoDB.
