# Absolutamente impressionante React Componentes e Bibliotecas

Esta é uma lista de componentes AWESOME. Não, não é uma lista completa de cada React componente sob o sol. Então, o que significa "ótimo"? Bem...

- Resolve um problema real.
- Fá-lo de uma forma única, bonita ou excepcional. (E não é super popular e bem conhecido ... nenhum ponto em listar esses.)
- Tem sido recente. code Commits!

Procure por um , para projetos verdadeiramente surpreendentes. E procure comentários de manutenção rápida e comentários em  (itálico parens)  após algumas listas de nota.

Ver também: [Awesome React Frameworks](https://github.com/brillout/awesome-react-frameworks).

Mantenedores:

- [@petebray](https://github.com/bluepeter), author of [Fluxguard](https://fluxguard.com) &mdash; monitor PROD website changes.
- [@brillout](https://twitter.com/brillout), author of [Vike](https://vike.dev) &mdash; a fast Vite-based React framework that is flexible, lean, community-driven and dependable.

### Contribuir

Por favor, reveja o nosso [Orientações de contribuição](https://github.com/brillout/awesome-react-components/blob/master/CONTRIBUTING.md). Nós mantemos esta lista fresca por **exigindo todas as RPs para remover uma ou mais entradas não-awesome desta lista**. Por favor, apenas RP um novo recurso se você também está removendo um.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Sumário

- [UI Componentes](#ui-components)
  - [Grade de dados editável / planilha](#editable-data-grid--spreadsheet)
  - [Quadro](#table)
  - [Rolo Infinito](#infinite-scroll)
  - [Sobreposição](#overlay)
  - [Notificação](#notification)
  - [Dicas](#tooltip)
  - [Menu](#menu)
  - [Fixo](#sticky)
  - [Páginas](#tabs)
  - [Carregador](#loader)
  - [Captcha](#captcha)
  - [Carrossel](#carousel)
  - [Botões](#buttons)
  - [Recolher](#collapse)
  - [Gráfico](#chart)
  - [Paleta de comando](#command-palette)
  - [Árvore](#tree)
  - [UI Navegação](#ui-navigation)
  - [Barra de Rolos Personalizada](#custom-scrollbar)
  - [Áudio / Vídeo](#audio--video)
  - [Mapa](#map)
  - [Hora / Data / Idade](#time--date--age)
  - [Foto / Imagem](#photo--image)
  - [Ícones](#icons)
  - [Paginador](#paginator)
  - [Markdown Visualizador](#markdown-viewer)
  - [Tela](#canvas)
  - [Imagem](#screenshot)
  - [Diversos](#miscellaneous)
  - [Componentes do Formulário](#form-components)
    - [Data / Selector de tempo](#date--time-picker)
    - [Emoji chocker](#emoji-picker)
    - [Tipos de Entrada](#input-types)
    - [Completar automaticamente](#autocomplete)
    - [Selecionar](#select)
    - [Selector de Cores](#color-picker)
    - [Alternar](#toggle)
    - [Barra deslizante](#slider)
    - [Botão de Rádio](#radio-button)
    - [Tipo Selecionar](#type-select)
    - [Entrada de etiquetas](#tag-input)
    - [Tamanho automático de entrada / área de texto](#autosize-input--textarea)
    - [Classificação das Estrelas](#star-rating)
    - [Arrastar e Soltar](#drag-and-drop)
    - [Lista ordenável](#sortable-list)
    - [Editor de Texto Rico](#rich-text-editor)
    - [Markdown Editor](#markdown-editor)
    - [Edição de Imagens](#image-editing)
    - [Colecções de Componentes de Formulário](#form-component-collections)
    - [Diversos](#miscellaneous-1)
    - [Realce de Sintaxe](#syntax-highlight)
- [UI Disposição](#ui-layout)
- [UI Animação](#ui-animation)
  - [Paralaxe](#parallax)
- [UI Quadros](#ui-frameworks)
  - [Resposta](#responsive)
    - [Material Design](#material-design)
  - [Telemóvel](#mobile)
  - [Coleções de Componentes](#component-collections)
- [UI Utilitários](#ui-utilities)
  - [Repórter](#reporter)
    - [Relatório de Visibilidade](#visibility-reporter)
    - [Relatório de medição](#measurement-reporter)
  - [Entrada do Dispositivo](#device-input)
    - [Eventos do Teclado](#keyboard-events)
    - [Rolar Eventos](#scroll-events)
    - [Toque em Deslizar](#touch-swipe)
    - [Eventos do Mouse](#mouse-events)
  - [Meta- Etiquetas](#meta-tags)
  - [Portal](#portal)
  - [Testar o Comportamento do Usuário](#test-user-behavior)
- [Code Design](#code-design)
  - [Armazenagem de Dados](#data-store)
  - [Lógica do Formulário](#form-logic)
  - [Roteador](#router)
  - [Propriedades do servidor](#props-from-server)
  - [Comunicação com o servidor](#communication-with-server)
  - [CSS / Estilo](#css--style)
  - [HTML Modelo](#html-template)
  - [Aplicativos Isomórficos](#isomorphic-apps)
  - [Caldeira](#boilerplate)
  - [Diversos](#miscellaneous-2)
- [Utilitários](#utilities)
  - [i18n](#i18n)
  - [Ligações/integrações do quadro](#framework-bindings--integrations)
  - [Integração com serviços de terceiros](#integrations-with-third-party-services)
- [Desempenho](#performance)
  - [UI](#ui)
    - [Inspecionar](#inspect)
    - [Carga Preguiçosa](#lazy-load)
  - [Tamanho da Aplicação](#app-size)
  - [Renderização do lado do servidor](#server-side-rendering)
- [Ferramentas Dev](#dev-tools)
  - [Ensaio](#test)
  - [Redux](#redux)
  - [Inspecionar](#inspect-1)
  - [Diversos](#miscellaneous-3)
- [Diversos](#miscellaneous-4)
  - [Gerador de Website Estático](#static-website-generator)
- [Soluções em nuvem](#cloud-solutions)
  - [Bases de dados](#databases)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## UI Componentes

**[`Back to top ⬆️`](#table-of-contents)**

### Grade de dados editável / planilha

- [AG Grid](https://github.com/ag-grid/ag-grid) - Grade avançada de dados / Tabela de dados de suporte Javascript / React / AngularJS / Componentes Web.
- [fortune-sheet](https://github.com/ruilisi/fortune-sheet) - Um componente de planilha online que fornece recursos fora da caixa como o Excel.
- [gigatables-react](https://github.com/GigaTables/reactables) - Ordenação, paginação/rolagem infinita, pesquisa global/coluna, AJAX CRUD, e mais.
- [Handsontable](https://github.com/handsontable/handsontable) - [demo](https://handsontable.com/demo) - [docs](https://handsontable.com/docs/react-data-grid/) - Grade de dados com folha de cálculo UI apoio React, Angular, TypeScript e JavaScript.
- [jqwidgets-react-grid](https://www.jqwidgets.com/react/react-grid/) - Filtragem, Paginação, Agrupamento, Exportação para Excel, PDF, CRUD e mais.
- [MUI X Data grid](https://github.com/mui/mui-x) - [demo/docs](https://mui.com/x/react-data-grid/) - Grade de dados rápida e personalizável com recursos avançados para usuários de energia e casos de uso complexos.
- [react-data-grid](https://github.com/adazzle/react-data-grid) - Grade tipo Excel.
- [ReactGrid](https://github.com/silevis/reactgrid) - [demo/docs](https://reactgrid.com/docs/) - Adicionar comportamento de planilha ao seu aplicativo
- [revo-grid](https://github.com/revolist/revogrid) - [demo/docs](https://revolist.github.io/revogrid/) - Grelha de dados Powerfull para React / AngularJS / Vue / Componentes Web com personalização avançada.
- [SheetXL](https://github.com/sheetxl/sheetxl) – A high-performance spreadsheet grid. TypeScript, ESM, Node/browser, Excel-compatible functions.
- [SVAR React DataGrid](https://svar.dev/react/datagrid/) - [demo](https://docs.svar.dev/react/grid/samples/#/base/willow) - [docs](https://docs.svar.dev/react/grid/getting_started/) - React DataGrid com edição em célula, dados em árvore, menu de contexto, rolagem virtual, etc.

### Quadro

- [ka-table](https://github.com/komarovalexander/ka-table) - [demo](https://komarovalexander.github.io/ka-table/#/overview) - Componente de tabela personalizável com ordenação, filtragem, agrupamento, virtualização, edição etc.
- [mantine-datatable](https://github.com/icflorescu/mantine-datatable) - [demo/docs](https://icflorescu.github.io/mantine-datatable/) - Componente de mesa leve para Mantina UI aplicações, com muitos recursos
- [material-table](https://github.com/mbrn/material-table) - [demo/docs](https://material-table.com/) - Construído em Material UI, plus: agrupamento, dados em árvore, linhas expansíveis, exportação, edição em linha
- [mui-datatables](https://github.com/gregnb/mui-datatables) - Construído em Material UI. Pesquisa, estilo, filtragem, redimensionar/esconder colunas, exportar, imprimir, selecionar/expandir linhas.
- [react-data-table](https://github.com/jbetancur/react-data-table-component) - [demo/docs](https://jbetancur.github.io/react-data-table-component/?) - tabela acessível, responsiva, temática, declarativamente configurável com classificação, linhas selecionáveis, linhas expansíveis, paginação
- [TanStack Table](https://github.com/tannerlinsley/react-table) - [demo](https://tanstack.com/table/v8/docs/examples/react/basic) - Sem cabeça. UI para a construção de tabelas e redes de dados poderosas
- [react-table-library](https://github.com/table-library/react-table-library) - [demo](https://react-table-library.com/) - React Biblioteca de tabelas -- uma biblioteca de mesas quase sem cabeça -- para construir mesas melhores.
- [rsuite-table](https://github.com/rsuite/rsuite-table) - [demo/docs](http://rsuite.github.io/rsuite-table/) - Um componente de tabela que suporta virtualizado.
- [DevExtreme React Grid](https://devexpress.github.io/devextreme-reactive/react/grid/) - Grade de dados baseada em plug-ins de alto desempenho para Bootstrap e Material Design.
- [Smart React Grid](https://htmlelements.com/react/demos/grid/overview/) - Grade de dados rápida e completa com recursos Material Design.
- [simple-table](https://github.com/petera2c/simple-table) - [demo](https://www.simple-table.com/examples) - [docs](https://www.simple-table.com/docs) - Leve, rápido e rico. Ordenação/filtragem, virtualização, dados de árvore, cabeçalhos aninhados, colunas fixas, estilo personalizado etc.

- [KendoReact Grid](https://www.telerik.com/kendo-react-ui/components/grid/) - Componente poderoso da grade de dados com recursos 100+ prontos para usar, como paging, triagem, exportação para Excel e muito mais.

- [Material-React-Table](https://github.com/KevinVandy/material-react-table) - Uma apresentação completa Material UI V5 implementação do TanStack React Quadro V8, escrito desde o início em TypeScript

### Rolo Infinito

- [@egjs/react-infinitegrid](https://github.com/naver/egjs-infinitegrid/blob/master/packages/react-infinitegrid) - [npm](https://www.npmjs.com/package/@egjs/react-infinitegrid) - [demo](https://naver.github.io/egjs-infinitegrid/storybook/) - Um módulo usado para organizar elementos de cartão, incluindo conteúdo infinitamente de acordo com vários tipos de layout.
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload) - Lazyload seu componente, imagem ou qualquer outra coisa onde o desempenho importa.
- [react-list](https://github.com/orgsync/react-list) - Um rolo versátil infinito React componente.
- [@af-utils/virtual](https://github.com/nowaalex/af-utils) - [demo/docs](https://af-utils.com/virtual) - Render grandes listas de rolagem e grades.
- [react-window](https://github.com/bvaughn/react-window) - [demo](https://react-window.now.sh/) - React componentes para renderizar eficientemente grandes listas e dados tabulares
- [virtua](https://github.com/inokawa/virtua) - [demo](https://inokawa.github.io/virtua/) - Um componente de lista virtual de configuração zero, rápido e pequeno (~3kB) para React, Vue e Solid.

### Sobreposição

Exibir sobreposição / modal / alerta / diálogo / lightbox / popup 

- [react-aria-modal](https://github.com/davidtheclark/react-aria-modal) - Um totalmente acessível e flexível React modal construído de acordo WAI-ARIA Práticas de autoria.
- [react-modal](https://github.com/reactjs/react-modal) - Componente de diálogo modal acessível para React.
- [@paratco/async-modal](https://github.com/Paratco/async-modal) - Manipulador modal assync simples para React.
- [reoverlay](https://github.com/hiradary/reoverlay) - [demo](https://hiradary.github.io/reoverlay/) - A solução em falta para gerir modais.
- [sweetalert2](https://github.com/sweetalert2/sweetalert2) - [demo/docs](https://sweetalert2.github.io/) - Um bonito, responsivo, altamente personalizável e acessível (WAI-ARIA) substituição JavaScriptSão caixas popup. Zero dependências.
- [sweetalert2-react-content](https://github.com/sweetalert2/sweetalert2-react-content) - Melhorador oficial SweetAlert2 adicionando suporte para React elementos como conteúdo

### Notificação

Torradeira / snackbar — Notifique o usuário com um pequeno popup temporário modeless 

- [react-notifications-component](https://github.com/teodosii/react-notifications-component) - [demo](https://teodosii.github.io/react-notifications-component/) - Componente altamente personalizável e fácil de usar para notificações.
- [notistack](https://iamhosseindhv.com/notistack) - [demo](https://codesandbox.io/s/github/iamhosseindhv/notistack/tree/master/examples/simple-example??hidenavigation=1&module=%2FApp.js) - [docs](https://iamhosseindhv.com/notistack/api) - Lanches de notificação altamente personalizáveis (torrados) que podem ser empilhados em cima um do outro
- [react-local-toast](https://github.com/OlegWock/react-local-toast) - [demo](https://react-local-toast.netlify.app/showcase/) - [docs](https://react-local-toast.netlify.app/tutorial) - mostrar feedback ligado a determinado componente em vez de brindes de aplicação.
- [react-toast](https://github.com/moharnadreza/react-toast) - [demo](https://codesandbox.io/s/byqvk) - [docs](https://github.com/moharnadreza/react-toast/blob/main/README.md) - Notificações mínimas de brindes.
- 🚀 [react-toastify](https://github.com/fkhadra/react-toastify) - [demo](https://fkhadra.github.io/react-toastify/) - melhor apostar lá fora neste momento. Suporte de ganchos. Sem árbitros.
- [react-confirm-lite](https://github.com/SaadNasir-git/react-confirm-lite) - [demo](https://stackblitz.com/edit/vitejs-vite-bfthlpmw) - é uma janela de confirmação leve e baseada em promessas para React com revestimento interior Tailwind CSS apoio. É projetado para ser tão simples de usar como react-para astificar, mantendo-se totalmente personalizável.
- [reapop](https://github.com/LouisBarranqueiro/reapop) - A React & Redux Sistema de notificações.
- [react-hot-toast](https://github.com/timolins/react-hot-toast) - [demo](https://react-hot-toast.com/) - Fumar quente Notificações para React. Leve, personalizável e bonito por padrão.
- [Sonner](https://sonner.emilkowal.ski/) - Um componente de brinde opinado para React.

### Dicas

- [react-tooltip](https://github.com/wwayne/react-tooltip) - React componente de dicas.

### Menu

Menu / barras laterais 

- [hamburger-react](https://github.com/luukdv/hamburger-react) - [demo/docs](https://hamburger-react.netlify.app/) - Ícones animados menu hambúrguer para React.
- [react-burger-menu](https://github.com/negomi/react-burger-menu) - Uma barra lateral off-canvas com efeitos e estilos.
- [react-offcanvas](https://github.com/vutran/react-offcanvas) - Menus desligados para React.
- [react-planet](https://github.com/innFactory/react-planet) - [demo](https://innfactory.github.io/react-planet/) - Criar menus circulares que parecem planetas.
- [mantine-contextmenu](https://github.com/icflorescu/mantine-contextmenu) - [demo/docs](https://icflorescu.github.io/mantine-contextmenu/) - Contexto-menu gancho / componente para aplicações construídas com Mantine UI.

### Fixo

Cabeçalhos  fixos / cabeçalhos de rolagem/elementos pegajosos 

- [react-headroom](https://github.com/KyleAMathews/react-headroom) - Esconde o cabeçalho até precisar.
- [react-stickynode](https://github.com/yahoo/react-stickynode) - Um performante e abrangente React pegajoso.

### Páginas

- [react-tabs](https://github.com/reactjs/react-tabs) - React componente de tabs.
- [react-tabtab](https://github.com/ctxhou/react-tabtab) - React, tabs.

### Carregador

Carregadores / spinners / barras de progresso — Deixe o usuário saber que algo está carregando 

- [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) - Conjunto de recolha de react- para uma operação de sincronização.
- [react-redux-loading-bar](https://github.com/mironov/react-redux-loading-bar) - Barra de carregamento simples para Redux e React.
- [react-spinners-css](https://github.com/JoshK2/react-spinners-css) - Incrível coleção de react Componentes de spinners.
- [react-spinners](https://github.com/davidhu2000/react-spinners) - Uma coleção de componentes de spinner de carga para react.
- [react-content-loader](https://github.com/danilowoz/react-content-loader) - Componente SVG-Desenvolvido para criar facilmente carregamentos placeholder (como carregamento de cartões do Facebook).

### Captcha

- [react-simple-captcha](https://github.com/masroorejaz/react-simple-captcha) - [npm](https://www.npmjs.com/package/react-simple-captcha) - [demo](https://www.scriptse.com/blog/add-captcha-in-reactjs-application/react-simple-captcha-demo/) - React Captcha simples é um muito poderoso, altamente personalizável e fácil de usar captcha para React JS.
- [procaptcha](https://github.com/prosopo/captcha) - [demo](https://prosopo.io/) - [docs](https://docs.prosopo.io/) - Privacy focou CAPTCHA livre

### Carrossel

- [@egjs/react-flicking](https://github.com/naver/egjs-flicking/blob/master/packages/react-flicking/) - [npm](https://www.npmjs.com/package/@egjs/react-flicking) - [demo](https://naver.github.io/egjs-flicking/) - É de confiança, flexível e extensível.
- [react-awesome-slider](https://github.com/rcaferati/react-awesome-slider) - [demo](https://fullpage.caferati.me/) - Fullpage, 3D animado, 60fps mídia e conteúdo slider / carrossel.
- [pure-react-carousel](https://github.com/express-labs/pure-react-carousel) - Construído do zero e não altamente opinado.
- [react-id-swiper](https://github.com/kidjp85/react-id-swiper) - Uma biblioteca para usar o Swiper ReactJs componente
- [react-instagram-zoom-slider](https://github.com/skozer/react-instagram-zoom-slider) - [demo](https://skozer.github.io/react-instagram-zoom-slider/) - Componente de controle deslizante com capacidade de zoom inspirado no Instagram.
- [react-responsive-carousel](https://github.com/leandrowd/react-responsive-carousel) - React.js Carrossel Responsivo (com Swipe).
- [react-slick](https://github.com/akiran/react-slick) - React componente do carrossel.
- [keen-slider](https://github.com/rcbyr/keen-slider) - [demo](https://keen-slider.io/examples/#examples) - Carrossel performant/slider com native comportamento toque/sujeito.
- [swiper](https://github.com/nolimits4web/Swiper) - [demo](https://swiperjs.com/demos) - [docs](https://swiperjs.com/react) - O mais moderno slider de toque móvel livre com transições aceleradas de hardware e surpreendente native comportamento.

### Botões

- [react-awesome-button](https://github.com/rcaferati/react-awesome-button) - [demo](https://caferati.me/demo/react-awesome-button) - 3D animado botões 60fps com progresso de carga e ações de compartilhamento social.
- [reactive-button](https://github.com/arifszn/reactive-button) - [demo](https://arifszn.github.io/reactive-button/docs/playground) - [docs](https://arifszn.github.io/reactive-button) - Um belo componente de botão animado com indicador de progresso.

### Recolher

- [react-accessible-accordion](https://github.com/springload/react-accessible-accordion) - Componente de acordeão acessível para React.
- [react-collapse](https://github.com/nkbt/react-collapse) - Embalagem de componentes para animação em colapso com react- movimento.
- [react-tabbordion](https://github.com/Merri/react-tabbordion) - [demo](https://merri.github.io/react-tabbordion) - Universal, semântico e CSS-somente componentes para criar Acordeões e Tabs.

### Gráfico

Exibir dados em gráficos / gráficos / diagramas 

- [essential js 2 charts](https://github.com/syncfusion/ej2-react-ui-components/tree/master/components/charts) - Gráficos e gráficos bonitos e interativos para react.
- [EazyChart](https://github.com/Hexastack/eazychart) - [demo](https://docs.eazychart.com/#demos) - [docs](https://docs.eazychart.com) - Transformar facilmente os dados em gráficos significativos
- [echarts for react](https://github.com/hustcc/echarts-for-react) - Embrulho em torno de belos Apache Echarts
- [jscharting-react](https://github.com/jscharting/jscharting-react) – React chart component offering a complete set of chart types and engaging data visualizations with [JSCharting](https://jscharting.com/).
- [react-chartist](https://github.com/fraserxu/react-chartist) - React componente para Chartist.js.
- [react-charty](https://github.com/99ff00/react-charty) - [demo](https://99ff00.github.io/react-charty/) - Pequenos, mas poderosos dados interativos viz com vários tipos de gráficos, animações, zoom, theming.
- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) - Frequentes react cartografando componentes usando Chart.js 2.0.
- [react-d3-components](https://github.com/codesuki/react-d3-components) - D3 Componentes para React.
- [react-google-charts](https://github.com/RakanNimer/react-google-charts) - React- google-charts React componente.
- [react-highcharts](https://github.com/kirjs/react-highcharts) - React- gráficos altos.
- [react-sparklines](https://github.com/borisyankov/react-sparklines) - Linda e expressiva Sparklines React componente.
- [react-timeseries-charts](https://github.com/esnet/react-timeseries-charts) - Gráficos de séries temporais declarativas.
- [react-vis](https://github.com/uber/react-vis) - Biblioteca de visualização de dados baseada em React e d3.
- [recharts](https://github.com/recharts/recharts) - Biblioteca de gráficos redefinida construída com React e D3.
- [rumble-charts](https://github.com/rumble-charts/rumble-charts) - React componentes para a construção de gráficos composíveis e flexíveis.
- [victory](https://github.com/FormidableLabs/victory) - Viz de dados para React.
- [semiotic](https://semiotic.nteract.io/) - Semiótica é uma estrutura de visualização de dados para React.
- [SVAR React Gantt](https://svar.dev/react/gantt/) - [demo](https://docs.svar.dev/react/gantt/samples/#/base/willow) - [docs](https://docs.svar.dev/react/gantt/getting_started/) - Componente de gráfico Gantt interativo personalizável
- [DevExtreme React Chart](https://devexpress.github.io/devextreme-reactive/react/chart/) - Gráfico baseado em plugins de alto desempenho para Bootstrap e Material Design.
- [Smart React Chart](https://www.htmlelements.com/react/demos/chart/overview/) - Recurso completa biblioteca de gráficos.
- [react-muze](https://github.com/chartshq/react-muze) - React embrulho para [muze](https://muzejs.org/)(Biblioteca gratuita de visualização de dados para criar visualizações exploratórias de dados no navegador, usando WebAssembly)
- [Flowchart React](https://github.com/joyceworks/flowchart-react) - Designer de Fluxograma e Fluxograma para React.js.
- [react-dashboard](https://github.com/flatlogic/react-dashboard) - Dashboards isomórficos.

### Paleta de comando

- [cmdk](https://cmdk.paco.me/) - Menu de comandos rápido, composível e sem estilo para React.
- [kbar](https://github.com/timc1/kbar) - [demo](https://kbar.vercel.app) - Interface cmd+k rápida, portátil e extensível.

### Árvore

Exibir uma estrutura de dados em árvore 

- [json-edit-react](https://github.com/CarlosNZ/json-edit-react) - [demo](https://carlosnz.github.io/json-edit-react/) - Visualizador e editor em árvore altamente configurável JSON/Object
- [react-arborist](https://github.com/brimdata/react-arborist) - [demo](https://react-arborist.netlify.app/) - Uma visão em árvore completa: sem cabeça, virtualizado, multi-selecionável, drag-n-drop, navegação de teclado, pesquisa
- [react-complex-tree](https://github.com/lukasbach/react-complex-tree) - [demo](https://rct.lukasbach.com/) - [docs](https://rct.lukasbach.com/docs/getstarted) - Componente de Árvore Acessível Sem Opinião com Multi-Selecção, Arrastar e Procurar
- [he-tree-react](https://github.com/phphe/he-tree-react) - [demo](https://he-tree-react.phphe.com/v1/examples) - [docs](https://he-tree-react.phphe.com/) - Árvore, personalizável UI, dados planos, dados de árvore, drag-n-drop, placeholder para drop, dobrável, caixa de seleção, virtualizada.

### UI Navegação

Caminho para navegar views 

- [react-scroll](https://github.com/fisshy/react-scroll) - React componente de rolagem.
- [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) - A React Componente para abas ligadas e vistas móveis.

### Barra de Rolos Personalizada

- [rc-scrollbars](https://github.com/sakhnyuk/rc-scrollbars) - [demo](https://rc-scrollbars.vercel.app/) - Barras personalizáveis com opções flex e 60FPS
- [react-custom-scroll](https://github.com/rommguy/react-custom-scroll) - [demo](http://rommguy.github.io/react-custom-scroll/example/demo.html) - Personalizar facilmente a barra de rolagem do navegador com native Comportamento de rolagem do SO.
- [react-shadow-scroll](https://github.com/andrelmlins/react-shadow-scroll) - O componente que personaliza a imagem e insere sombra quando o rolagem existe.

### Áudio / Vídeo

- [react-dailymotion](https://github.com/u-wave/react-dailymotion) - Componente do jogador de movimento diário para React.
- [react-player](https://github.com/CookPete/react-player) - A react componente para reproduzir uma variedade de URLs, incluindo o YouTube.
- [react-soundplayer](https://github.com/soundblogs/react-soundplayer) - Criar jogadores de SoundCloud personalizados com React.
- [react-youtube](https://github.com/troybetz/react-youtube) - React.js componente do leitor do YouTube.
- [video-react](https://github.com/video-react/video-react) - Um leitor de vídeo web construído para o mundo HTML5 usando React biblioteca.
- [material-ui-audio-player](https://github.com/Werter12/material-ui-audio-player) - Reprodutor de áudio para material ui design.
- [react-vision-camera](https://github.com/xulihang/react-vision-camera) - Componente da câmara para React usando getUserMedia. Podemos usar este componente para tarefas de visão computacional, como digitalização de código de barras, reconhecimento de texto, etc.
- [react-barcode-qrcode-scanner](https://github.com/xulihang/react-barcode-qrcode-scanner) - Código de barras e QR code componente de scanner para React. Usa react-visão-câmera para acessar a câmera e leitor de código de barras Dynamsoft para ler códigos de barras.

### Mapa

- [google-map-react](https://github.com/istarkov/google-map-react) - Mapa universal do Google react componente, permite renderização react componentes no mapa do Google.
- [mapkit](https://github.com/1amageek/mapkit) - Uma biblioteca para integrar o Apple Maps usando o MapKit JS, com anotações, sobreposições e pesquisa.
- [pigeon-maps](https://github.com/mariusandra/pigeon-maps) - [demo](https://pigeon-maps.js.org/) - ReactJS Mapas sem dependências externas.
- [react-geosuggest](https://github.com/ubilabs/react-geosuggest) - A React autosuggest para a API do Google Maps Places.
- [react-leaflet](https://github.com/PaulLeCam/react-leaflet) - React componentes para mapas do Folheto Informativo.
- [react-map-gl](https://github.com/uber/react-map-gl) - A React wrapper para MapboxGL-js e API de sobreposição.
- [react-svg-map](https://github.com/VictorCazanave/react-svg-map) - [demo](https://victorcazanave.github.io/react-svg-map/) - Um conjunto de componentes para exibir um mapa SVG interativo.

### Hora / Data / Idade

Exibir hora / data / idade 

- [react-timeago](https://github.com/nmn/react-timeago) - Um componente de tempo simples para ReactJs.
- [timeago-react](https://github.com/hustcc/timeago-react) - Formatar data com `*** time ago` declaração. Por exemplo: "há 3 horas".
- [react-google-flight-datepicker](https://github.com/JSLancerTeam/react-google-flight-datepicker) - Pesquisador de data de voo do Google implementado em ReactJS.

### Foto / Imagem

Exibir imagens / fotos 

- [lightGallery](https://github.com/sachinchoolur/lightGallery) - [demo](https://www.lightgalleryjs.com/) - [docs](https://www.lightgalleryjs.com/docs/react/) - Componente completo da galeria lightbox.
- [react-compare-image](https://github.com/junkboy0315/react-compare-image) - [demo](https://react-compare-image.yuuniworks.com/) - React componente para comparar duas imagens usando uma barra deslizante.
- [react-image-gallery](https://github.com/xiaolin/react-image-gallery) - Galeria de imagens responsiva, carrossel, controle deslizante de imagem react componente.
- [yet-another-react-lightbox](https://github.com/igordanchenko/yet-another-react-lightbox) - [demo](https://yet-another-react-lightbox.com/examples) - [docs](https://yet-another-react-lightbox.com/documentation) - React componente da caixa de luz.
- [react-intense](https://github.com/brycedorn/react-intense) - A React componente para visualizar imagens grandes de perto.
- [react-photo-album](https://github.com/igordanchenko/react-photo-album) - [demo](https://react-photo-album.com/examples) - [docs](https://react-photo-album.com/documentation) - Responder React Galeria de fotos.
- [react-svg-pan-zoom](https://github.com/chrvadala/react-svg-pan-zoom) - A React componente que adiciona características de pan e zoom ao SVG.
- [react-particle-image](https://github.com/malerba118/react-particle-image) - [demo](https://malerba118.github.io/react-particle-image-demo/) - Render imagens como partículas interativas.
- [react-imgix](https://github.com/imgix/react-imgix) - Adicione imagens rápidas e responsivas como imagem, imagem ou fundo!
- [@frameright/react-image-display-control](https://github.com/Frameright/react-image-display-control) - Defina regiões de zoom para imagens responsivas inteligentes.
- [zoom-image](https://github.com/willnguyen1312/zoom-image) - [demo](https://willnguyen1312.github.io/zoom-image/examples/react.html) - [docs](https://willnguyen1312.github.io/zoom-image) - Uma pequena mas poderosa biblioteca agnóstico framework para ampliar a imagem na web
- [react-infinite-gallery](https://github.com/AlirezaAzizi145/react-infinite-gallery) – Infinite-scroll image gallery component for React apps.

### Ícones

Exibir ícones / ícone definido / emojis 

- [iconify-react](https://github.com/iconify/iconify-react) - Mais de 40k ícones de 50+ conjuntos de ícones, incluindo todos os ícones populares e emoji conjuntos.
- [react-icons](https://github.com/gorangajic/react-icons) - Svg react ícones de pacotes de ícones populares usando importações ES6.
- [react-open-doodles](https://github.com/lunahq/react-open-doodles) - Impressionante ilustrações grátis como react componentes.
- [react-icomoon](https://github.com/aykutkardas/react-icomoon) - Com react-comooon você pode facilmente usar os ícones que você selecionou ou criou em icomoon.
- [tabler-icons-react](https://tabler-icons-react.vercel.app) - Um conjunto de mais de 450 ícones SVG de alta qualidade licenciados pelo MIT.
- [Lucide](https://github.com/lucide-icons/lucide) - Belo kit de ferramentas de ícone & consistente feito pela comunidade. Projeto de código aberto e um garfo de Ícones de Pena.

### Paginador

Exibir um elemento de controle para paginar 

- [react-paginate](https://github.com/AdeleD/react-paginate) - A ReactJS componente que cria uma paginação.
- [react-laravel-paginex](https://github.com/lionix-team/react-laravel-paginex) - Paginação Laravel com ReactJS (personalizável).
- [paginated](https://github.com/makotot/paginated) - React renderizar adereços & gancho personalizado para construir paginação.
- [react-steps](https://github.com/tkwant/react-steps) - [Demo](https://stepper.tkwant.de/) - Responder React Stepper.

### Markdown Visualizador

Exibir o código de marcação analisado 

- [react-markdown](https://github.com/rexxars/react-markdown) - Renderizar Markdown como React componentes.

### Tela

Etiquetar a entrada usando Canvas ou SVG 

- [react-konva](https://github.com/konvajs/react-konva) - React Konva é um JavaScript biblioteca para desenhar gráficos complexos de tela com ligações ao Konva Framework.
- [react-sketch](https://github.com/tbolis/react-sketch) - Uma ferramenta de desenho para React aplicações baseadas, apoiadas pela FabricJS
- [react-sketch-canvas](https://github.com/vinothpandian/react-sketch-canvas) - [Demo](https://vinoth.info/react-sketch-canvas/?path=/story/*) Ferramenta de desenho vetorial de mão livre para React usando SVG como tela. Aceita a entrada do mouse, toque e tablets gráficos
- [react-heat-map](https://github.com/uiwjs/react-heat-map) - Um mapa de calor de calendário leve react componente construído no SVG, versão personalizável do GitHubgráfico de contribuição.

### Imagem

- [html2canvas](https://github.com/niklasvh/html2canvas) - Tire imagens de qualquer parte da sua página web usando Javascript.

### Diversos

- [puck](https://github.com/measuredco/puck) - [demo](https://puck-editor-demo.vercel.app/edit) - O editor visual self-hosted para React
- [react-advanced-news-ticker](https://github.com/ahmetcanaydemir/react-advanced-news-ticker) - [demo](https://www.ahmetcanaydemir.com/react-advanced-news-ticker/) - Um componente de notícias verticais flexível e animado
- [react-avatar-generator](https://github.com/JosephSmith127/react-avatar-generator) - Permite que os usuários criem caleidoscópios aleatórios para serem usados como avatares.
- [react-awesome-query-builder](https://github.com/ukrbublik/react-awesome-query-builder) - [demo](https://ukrbublik.github.io/react-awesome-query-builder/) - Construtor de consultas visuais a partir de campos de formulário, com SQL, MongoDB e JSON exportação
- [react-blur](https://github.com/javierbyte/react-blur) - React componente para fundos turvos.
- [react-demo-tab](https://github.com/mkosir/react-demo-tab) - [demo](https://mkosir.github.io/react-demo-tab) - A React componente para criar facilmente demonstrações de outros componentes.
- [fastcomments-react](https://github.com/fastcomments/fastcomments-react) - [demo](<https://blog.fastcomments.com/(12-30-2019)-fastcomments-demo.html>) - Componente de comentários rápidos para incorporar um tópico de comentários ao vivo em uma página ou SPA.
- [react-pdf-viewer](https://github.com/phuoc-ng/react-pdf-viewer) - [docs](https://react-pdf-viewer.dev) - A React componente para visualizar a PDF Documento.
- [react-simple-chatbot](https://github.com/LucasBassetti/react-simple-chatbot) - [demo](https://github.com/anishagg17/PIzzaBuilder) - Um componente chatbot simples para criar conversas.
- [react-file-reader-input](https://github.com/ngokevin/react-file-reader-input) - Componente de entrada de arquivo para controle para leitura de arquivos de estilo e abstração.
- [react-filter-control](https://github.com/komarovalexander/react-filter-control) - A React componente filterbuilder para a construção dos critérios de filtro no UI.
- [react-headings](https://github.com/alexnault/react-headings) - Auto-incremento seu HTML cabeçalhos (h1, h2, etc.) para melhor acessibilidade e SEO, não importa sua estrutura de componentes, enquanto você mantém o controle total do que é renderizado.
- [react-joyride](https://github.com/gilbarbara/react-joyride) - Criar passeios e visitas guiadas para o seu ReactJS aplicações. Agora com dicas autônomas!.
- [react-mouse-select](https://github.com/andreizanik/react-mouse-select) - [Demo](https://andreizanik.github.io/react-mouse-select/) Um componente que permite selecionar DOM elementos movendo o mouse
- [react-resizable-and-movable](https://github.com/bokuweb/react-resizable-and-movable) - Componente resistente e móvel para React.
- [react-resizable-box](https://github.com/bokuweb/react-resizable-box) - Componente resistente para React. #reactjs.
- [react-searchbox-awesome](https://github.com/axmz/react-searchbox-awesome) - [demo](https://axmz.github.io/react-searchbox-awesome-page/) - Caixa de pesquisa minimalista.
- [react-split-pane](https://github.com/tomkp/react-split-pane) - React Componente de painel dividido.
- [react-swipe-to-delete-ios](https://github.com/arnaudambro/react-swipe-to-delete-ios) - [demo](https://arnaudambro.github.io/react-swipe-to-delete-ios/) - Apagar um item numa lista da mesma forma que o iOS.
- [react-swipeable-list](https://github.com/marekrozmus/react-swipeable-list) - [demo](https://marekrozmus.github.io/react-swipeable-list/) - Componente configurável para renderizar lista com itens deslizáveis.
- [typography](https://github.com/KyleAMathews/typography.js) - Um poderoso kit de ferramentas para construir sites com tipografia bonita.
- [react-pulse-text](https://github.com/Kelsier90/React-Pulse-Text) - [demo/docs](https://kelsier90.github.io/React-Pulse-Text/) - Permite-lhe animar o texto de qualquer propriedade de outro componente.
- [captcha-image](https://github.com/tpkahlon/captcha-image) - Permite- lhe gerar uma imagem captcha aleatória com opções.
- [react-pdf](https://github.com/wojtekmaj/react-pdf) - Mostrar PDFs no seu React app tão facilmente como se fossem imagens.
- [react-customizable-chat-bot](https://github.com/chithakumar13/react-chat-bot) - [Demo](https://chithakumar13.github.io/bot-example) - Construa o seu próprio chatbot que corresponda às necessidades da sua marca em minutos.
- [@restpace/schema-form](https://github.com/restspace/schema-form) - [Demo](https://restspace.io/react/schema-form/demo) - Construir facilmente formas complexas automaticamente a partir de um esquema JSON.
- [react-darkreader](https://github.com/Turkyden/react-darkreader) - A React Gancho para adicionar um modo escuro / noite para o seu site inspirado no leitor escuro.
- [react-apple-signin-auth](https://github.com/A-Tokyo/react-apple-signin-auth) - Assinatura da Apple para React utilizando o Apple JS SDK oficial.
- [react-mrz-scanner](https://github.com/tony-xlh/react-mrz-scanner) - A React componente para verificar MRZ em passaportes, cartões de visto, etc. É baseado no Dynamsoft Label Reconhecer.

### Componentes do Formulário

Deixar o usuário inserir dados 

#### Data / Selector de tempo

Selector de data/selector de hora/selector de data/selector de gama de datas 

- [date-range-picker](https://github.com/almogtavor/date-range-picker) - [demo](https://almogtavor.github.io/date-range-picker/) - Um componente de calendário que suporta data, intervalo e intervalos escolhe.
- [react-big-calendar](https://github.com/intljusticemission/react-big-calendar) - Gcal/outlook como componente de calendário.
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker) - Um componente datepicker simples e reutilizável para React.
- [react-day-picker](https://github.com/gpbl/react-day-picker) - Selector de datas flexível para React.
- [react-flatpickr](https://github.com/coderhaoxin/react-flatpickr) - Catador para React.
- [react-simple-timefield](https://github.com/antonfisher/react-simple-timefield) - [demo](https://antonfisher.com/react-simple-timefield/) - Campo de entrada de tempo simples.
- [react-timezone-select](https://github.com/ndom91/react-timezone-select) - [demo](https://ndom91.github.io/react-timezone-select/) - Dinâmica e sucinta selecção de fuso horário. Baseado em `react-select`.
- [DevExtreme React Scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/) - Agendador/calendar baseado em plug-in de alto desempenho para Material Design.
- [jQWidgets Scheduler](https://www.jqwidgets.com/react/react-scheduler/) - Biblioteca de programação completa do recurso.
- [react-calendar](https://github.com/wojtekmaj/react-calendar) - Calendário final para o seu React app.
- [react-date-picker](https://github.com/wojtekmaj/react-date-picker) - Um selecionador de datas para o seu React app.
- [schedule-x](https://github.com/schedule-x/schedule-x) - Material design calendário de eventos e componentes do seletor de datas. Local de demonstração: https://schedule-x.dev/

#### Emoji chocker

- [interweave-emoji-picker](https://github.com/milesj/interweave/tree/master/packages/emoji-picker) - A React Picker emoji baseado alimentado por Interweave e Emojibase.

#### Tipos de Entrada

Entradas em massa, entradas especializadas; e-mail / número de telefone / cartão de crédito / etc. 

- [react-credit-cards](https://github.com/amarofashion/react-credit-cards) - Lindos cartões de crédito para os seus formulários de pagamento.
- [react-payment-inputs](https://github.com/medipass/react-payment-inputs) - [demo](https://medipass.github.io/react-payment-inputs/?path=/story/usepaymentinputs--basic-no-styles) - Um recipiente de dependência zero para ajudar com os campos de entrada do cartão de pagamento.
- [react-input-mask](https://github.com/sanniassin/react-input-mask) - [demo](http://sanniassin.github.io/react-input-mask/demo.html) - Mais um. react componente para mascaramento de entrada.
- [@lunasec/react-sdk](https://github.com/lunasec-io/lunasec) - [docs](https://www.lunasec.io/docs/) - Componentes de forma segura e endurecida que criptografam/tokenizam todos os dados automaticamente.
- [react-numpad](https://github.com/gpietro/react-numpad) - [demo](https://gpietro.github.io/react-numpad-demo/) - Controlo numérico extenso para números, datas e horários.
- [react-multi-email](https://github.com/axisj/react-multi-email) - [demo](https://react-multi-email.vercel.app/) - Formatar vários e-mails como os tipos de usuário.

#### Completar automaticamente

Sugerir automaticamente/completar automaticamente/ digitar 

- [react-autosuggest](https://github.com/moroshko/react-autosuggest) - WAI-ARIA conformidade React autosugerir componente.
- [react-typeahead](https://github.com/fmoo/react-typeahead) - Puro react-com base no tipoahead e no tipoahead-tokenizer.

#### Selecionar

- [react-aria-menubutton](https://github.com/davidtheclark/react-aria-menubutton) - Um totalmente acessível, facilmente temaizável, React- Botão de menu alimentado.
- [react-functional-select](https://github.com/based-ghost/react-functional-select) - [demo](https://based-ghost.github.io/react-functional-select/) - Micro-tamanho & micro-otimizado componente de seleção para React.js.
- [react-mobile-picker](https://github.com/adcentury/react-mobile-picker) - [demo](https://react-mobile-picker.vercel.app/) - Um iOS como componente da caixa de seleção.
- [react-select](https://github.com/JedWatson/react-select) - Um controle de seleção construído com e para React JS.
- [react-column-select](https://github.com/chr-ge/react-column-select) - Uma coluna selecionar componente construído para react.
- [react-select-search](https://github.com/tbleckert/react-select-search) - [demo](https://react-select-search.com/) - Um componente select leve para React

#### Selector de Cores

- [coloreact](https://github.com/elrumordelaluz/coloreact) - Um minúsculo seletor de cores para React.
- [react-color](https://github.com/uiwjs/react-color) - É um componente minúsculo do elemento de selecção de cores para React aplicações.
- [react-colorful](https://github.com/omgovich/react-colorful) - Um minúsculo (2,5 KB), componente de seleção de cores livre de dependência, rápida e acessível.
- [react-input-color](https://github.com/wangzuo/react-input-color) - React componente de cor de entrada com o coletor de cores hsv.

#### Alternar

- [@anatoliygatt/heart-switch](https://github.com/anatoliygatt/heart-switch) - [demo](https://codesandbox.io/s/demo-for-anatoliygatt-heart-switch-cds5p) - Um componente de comutador totalmente temático e acessível em forma de coração.
- [react-ios-switch](https://github.com/clari/react-ios-switch) - React mudar de componente.
- [react-toggle](https://github.com/instructure-react/react-toggle) - Um componente elegante e acessível para alternar React. Também uma caixa de seleção glorificada.
- [ui-switch](https://github.com/yairEO/ui-switch) - O componente  Alternar mais completo

#### Barra deslizante

- [react-slider](https://github.com/mpowaga/react-slider) - Componente deslizante para React.

#### Botão de Rádio

- [react-radio-group](https://github.com/chenglou/react-radio-group) - Melhores botões de rádio.

#### Tipo Selecionar

Deixe o usuário selecionar algo (por exemplo, uma tag) enquanto digita 

- [react-autocomplete-input](https://github.com/yury-dymov/react-autocomplete-input) - Completar automaticamente o campo de entrada para React.
- [react-mentions](https://github.com/effektif/react-mentions) - Mencione pessoas em uma área de texto.
- [rich-textarea](https://github.com/inokawa/rich-textarea) - Uma área de texto para colorir, destacar, decorar textos e oferecer autocompletar.

#### Entrada de etiquetas

Deixe o usuário adicionar várias tags em uma única entrada 

- [react-tag-input](https://github.com/prakhar1989/react-tags) - Um componente de marcação fantasticamente simples para o seu React Projectos.
- [react-tagsinput](https://github.com/olahol/react-tagsinput) - Um simples react componente para a introdução de etiquetas.
- [react-tokeninput](https://github.com/instructure-react/react-tokeninput) - Componente Tokeninput para React.
- [tagify](https://github.com/yairEO/tagify) - [demo & docs](https://yaireo.github.io/tagify/) - Leve, eficiente componente de entrada Tags.

#### Tamanho automático de entrada / área de texto

- [react-input-autosize](https://github.com/JedWatson/react-input-autosize) - Redimensionando automaticamente o campo de entrada para React.
- [react-autowidth-input](https://github.com/kierien/react-autowidth-input) - Altamente configurável e extensível campo de entrada de tamanho automático construído com ganchos.
- [react-textarea-autosize](https://github.com/andreypopp/react-textarea-autosize) - Componente &lt;textarea /&gt; para React que cresce com o conteúdo.

#### Classificação das Estrelas

- [react-rating](https://github.com/smastrom/react-rating) - [demo](https://react-rating.onrender.com/) - Zero-dependência, componente de classificação altamente personalizável.
- [react-awesome-stars-rating](https://github.com/fedoryakubovich/react-awesome-stars-rating) - [demo](https://react-awesome-stars-rating.herokuapp.com/) - O componente de classificação de estrelas com acessibilidade.
- [react-star-rating-input](https://github.com/ikr/react-star-rating-input) - React.js componente para entrar em 0-5 (ou mais) estrelas.

#### Arrastar e Soltar

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Belo e acessível arrastar e soltar para listas com React
- [react-dnd](https://github.com/gaearon/react-dnd) - Arrastar e Soltar para React.
- [react-drag-sizing](https://github.com/fritx/react-drag-sizing) - "Drag to resize" (dimensionamento) como React Componente.
- [react-draggable](https://github.com/mzabriskie/react-draggable) - React componente arrastável.
- [react-dragula](https://github.com/bevacqua/react-dragula) - Arraste e solte tão simples que dói.
- [react-dropzone](https://github.com/okonet/react-dropzone) - Zona de drag-drop HTML5 simples com React.js.
- [react-movable](https://github.com/tajo/react-movable) - Biblioteca acessível e minimalista (<4kB gzipped) para arrastar e soltar verticalmente em listas e tabelas.
- [react-sortable-pane](https://github.com/bokuweb/react-sortable-pane) - Componente de painel dimensionável e dimensionável para React.
- [neodrag](https://github.com/PuruVJ/neodrag) - Bibliotecas multi-quadro para arrastar. Escolha seu framework, o comportamento de arrastar API permanecerá o mesmo.

#### Lista ordenável

Deixe o usuário definir uma ordem em uma lista 

- [react-anything-sortable](https://github.com/jasonslyvia/react-anything-sortable) - Ordenar quaisquer crianças com suporte ao toque e compatibilidade IE8.
- [sortablejs](https://github.com/SortableJS/Sortable) - Listas reordenáveis por arrastar e soltar, dentro e entre listas.

#### Editor de Texto Rico

- [alloyeditor](https://github.com/liferay/alloy-editor) - Editor WYSIWYG baseado no CKEditor com reescrita completa UI.
- [ckeditor4-react](https://github.com/ckeditor/ckeditor4-react) - Um editor de texto CKEditor 4 oficial.
- [ckeditor5-react](https://github.com/ckeditor/ckeditor5-react) - Um editor de texto CKEditor 5 oficial.
- [draft-js](https://github.com/facebook/draft-js) - A React quadro para a construção de editores de texto.
- [edtr-io](https://github.com/edtr-io/edtr-io) - [demo](https://edtr.io/) - [docs](https://edtr.io/docs/getting-started) - WYSIWYG editor web em linha com plugins.
- [megadraft](https://github.com/globocom/megadraft) - Editor de texto rico construído em cima do rascunho.js.
- [react-ace](https://github.com/securingsincity/react-ace) - Ás (Avançado Code Embalagem.
- [react-codemirror](https://github.com/uiwjs/react-codemirror) - [demo](https://uiwjs.github.io/react-codemirror/) - CodeMirror componente para React.
- [react-contenteditable](https://github.com/lovasoa/react-contenteditable) - React componente para um div com conteúdo editável.
- [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) - Editor WYSIWYG compila em cima de [DraftJS](https://draftjs.org/).
- [react-editor](https://github.com/fritx/react-editor) - Editor richtext simples que pode inserir imagens e HTML.
- [react-medium-editor](https://github.com/wangzuo/react-medium-editor) - Embrulho de editor médio.
- [react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor) - Componente do Editor Mónaco para React.
- [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor) - No-frills simples code editor com realce de sintaxe
- [react-quill](https://github.com/zenoamaro/react-quill) - Papel Quill.
- [react-trumbowyg](https://github.com/RD17/react-trumbowyg) - [Trumbowyg](https://alex-d.github.io/Trumbowyg/) Embrulho.
- [remirror](https://github.com/remirror/remirror) - [demo](https://remirror.io/playground) - [docs](https://remirror.io/docs) - Kit de ferramentas ProseMirror para React.
- [slate](https://github.com/ianstormtaylor/slate) - [demo](http://slatejs.org/) - [docs](https://docs.slatejs.org/) - Uma estrutura totalmente personalizável para construir editores de texto ricos.
- [smartblock](https://github.com/appleple/smartblock) - [demo](https://appleple.github.io/smartblock/) - [docs](https://appleple.github.io/smartblock/get-started) - Editor WYSIWYG baseado em bloco baseado no ProseMirror.
- [tiptap](https://github.com/ueberdosis/tiptap) - [demo](https://tiptap.dev/) - [docs](https://tiptap.dev/introduction) - A estrutura de editor sem cabeça para artesãos web.

#### Markdown Editor

- [react-simplemde-editor](https://github.com/RIP21/react-simplemde-editor) - React invólucro de componentes para [EasyMDE (the most fresh SimpleMDE fork)](https://github.com/Ionaru/easy-markdown-editor).
- [react-markdown-editor](https://github.com/jrm2k6/react-markdown-editor) - A markdown editor usando React- Refluxo.
- [react-md-editor](https://github.com/uiwjs/react-md-editor) - Um simples markdown editor com antevisão, implementado com React.js e TypeScript.

#### Edição de Imagens

Manipulação de  imagem 

- [react-avatar-editor](https://github.com/mosch/react-avatar-editor) - Facebook-like, avatar / perfil imagem componente.
- [react-avatar-generator](https://github.com/JosephSmith127/react-avatar-generator) - Gerar caleidoscópio divertido para avatares de usuário.
- [react-easy-crop](https://github.com/ricardo-ch/react-easy-crop) - Componente para cortar/rotar imagens/vídeos com interações fáceis. Toque amigável.
- [react-image-crop](https://github.com/DominicTobias/react-image-crop) - Uma ferramenta de corte de imagens responsiva para React.
- [react-image-cropper](https://github.com/jerryshew/react-image-cropper) - Cortador de imagens.
- [react-advanced-cropper](https://github.com/advanced-cropper/react-advanced-cropper) - A react biblioteca cropper para criar o cropper exatamente adequado para o seu site design.
- [react-mobile-cropper](https://github.com/advanced-cropper/react-mobile-cropper) - Uma biblioteca de recorte de imagem pronta para usar altamente inspírito por cortadores Android populares. Baseado em `react-advanced-cropper`.

#### Colecções de Componentes de Formulário

- [formsy-material-ui](https://github.com/mbrookes/formsy-material-ui) - Um invólucro de compatibilidade formsy para Material UI Formar componentes.
- [formsy-react-components](https://github.com/twisty/formsy-react-components) - Um conjunto de React Componentes JS para uso em formareact Forma.
- [react-input-enhancements](https://github.com/alexkuz/react-input-enhancements) - Conjunto de melhorias para o controle de entrada.
- [react-widgets](https://github.com/jquense/react-widgets) - Um conjunto à la carte do &agrave; de entradas polidas, extensíveis e acessíveis.

#### Diversos

- [@anatoliygatt/numeric-stepper](https://github.com/anatoliygatt/numeric-stepper) - [demo](https://codesandbox.io/s/demo-for-anatoliygatt-numeric-stepper-mllfyl) - Um componente numérico totalmente temática e acessível.
- [interweave](https://github.com/milesj/interweave) - React biblioteca a renderizar com segurança HTML, atributos de filtro, texto autowrap com fósforos, renderizar caracteres emoji, e muito mais.
- [react-designer](https://github.com/react-designer/react-designer) - Gráficos vetoriais fáceis de configurar, leves e editáveis react componentes.
- [react-upload-gallery](https://github.com/TPMinan/react-upload-gallery) - React para Enviar Galeria de Imagens. Arrastar & Soltar, Classificar, Personalizar.

#### Realce de Sintaxe

- [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter) - Componente de realce de sintaxe com Prismjs ou Highlightjs AST usando estilos em linha.

## UI Disposição

**[`Back to top ⬆️`](#table-of-contents)**

Componentes para o layout da interface da aplicação

- [autoresponsive-react](https://github.com/xudafeng/autoresponsive-react) - Biblioteca de layout de grade de resposta automática.
- [hedron](https://github.com/JSBros/hedron) - Um sistema de grade flexbox sem frills, alimentado por componentes estilo.
- [m-react-splitters](https://github.com/martinnov92/React-Splitters) - Componente separador, escrito em TypeScript.
- [muuri-react](https://github.com/Paol-imi/muuri-react) - [demo](https://1czo5.csb.app/) - [docs](https://paol-imi.github.io/muuri-react) - Disposição de grade responsiva, ordenável, filtrante e arrastável.
- [react-grid-layout](https://github.com/STRML/react-grid-layout) - Um layout de grade arrastável e redimensionável com pontos de interrupção responsivos, para React.
- [react-layman](https://github.com/Jeshwin/react-layman) - [demo](https://jeshwin.github.io/react-layman/) - Gerenciador de layout de tiling dinâmico com abas
- [react-masonry-component](https://github.com/eiriklv/react-masonry-component) - Embrulho para a Alvenaria @desandro.
- [react-reflex](https://github.com/leefsmp/Re-Flex) - Componente do recipiente de layout flexível para avançado React aplicações web.
- [react-spaces](https://github.com/aeagle/react-spaces) - [demo/docs](https://www.allaneagle.com/react-spaces/demo/) - Componentes confortáveis ancorados, redimensionáveis e roláveis.
- [react-stonecutter](https://github.com/dantrain/react-stonecutter) - Componente de layout animado da grade.
- [react-colrow](https://github.com/phphe/react-colrow) - Componentes de layout de grade responsivo. Baseado em css Flexbox. Suporte de largura de fração, crescimento automático.
- [react-schematic](https://github.com/umeshmk/react-schematic) - [demo](https://umeshmk.github.io/react-schematic) - Construir layouts responsivos usando esquemas estilo sem uma sobrecarga de qualquer configuração do tema

## UI Animação

**[`Back to top ⬆️`](#table-of-contents)**

Animar transições 

- [data-driven-motion](https://github.com/tkh44/data-driven-motion) - Animar facilmente seus dados.
- [react-animatable](https://github.com/inokawa/react-animatable) - Uma biblioteca de animação usando a API Web Animations.
- [react-anime](https://github.com/stelatech/react-anime) - Uma biblioteca de animação super fácil.
- [react-flip-move](https://github.com/joshwcomeau/react-flip-move) - Animação sem esforço entre DOM alterações (por exemplo, reordenação da lista) utilizando a técnica FLIP.
- [react-gsap-enhancer](https://github.com/azazdeaz/react-gsap-enhancer) - Usar o poder total de React e GSAP juntos.
- [react-tsparticles](https://github.com/matteobruni/tsparticles/blob/master/components/react/README.md) - Um componente leve para criar facilmente animações de partículas interativas
- [react-motion](https://github.com/chenglou/react-motion) - Uma mola que resolve os seus problemas de animação.
- [react-mt-svg-lines](https://github.com/moarwick/react-mt-svg-lines) - Embrulhador para animar o traço de linha em SVGs.
- [react-router-transition](https://github.com/maisano/react-router-transition) - Transições construídas para react- roteador, alimentado por react- movimento.
- [react-spring](https://github.com/react-spring/react-spring) - Uma biblioteca de animação baseada em física de primavera.
- [react-ts-typewriter](https://github.com/gerardmarquinarubio/ReactTypewriter) - [demo](https://codesandbox.io/s/react-typewriter-example-mgyclf) - Efeito de máquina de escrever fácil de usar e personalizável para qualquer texto.
- [framer-motion](https://github.com/framer/motion) - Uma biblioteca de animação e gestos.
- [react-spark-scroll](https://github.com/gilbox/react-spark-scroll) - Ações e animações baseadas em rolagem para react.
- [react-track](https://github.com/gilbox/react-track) - Acompanhar a posição de DOM elementos. Crie animações legais.
- [react-transitive-number](https://github.com/Lapple/react-transitive-number) - Aplique o efeito de transição em strings numéricas, um temporizador Groupon antigo.
- [react-web-animation](https://github.com/bringking/react-web-animation) - React componentes para a API Web Animations -.
- [auto-size-transition](https://github.com/DualWield/auto-size-transition) - Um componente que escala dinamicamente de acordo com o tamanho interno das crianças
- [react-particles-bg](https://github.com/lindelof/particles-bg) - Fundo de partículas.
- [gooey-react](https://github.com/luukdv/gooey-react) - [demo/docs](https://gooey-react.netlify.app/) - O efeito gooey para React, usado para forma blobbing / metaballs.
- [react-voodoo](https://github.com/react-voodoo/react-voodoo) - [demo/samples](https://github.com/react-voodoo/react-voodoo-samples) - Motor de animação aditivo permitindo animações complexas android/iOs-like, renderizando controles deslizantes em SSR, inércia preditiva, multitouch, etc

### Paralaxe

- [simple-parallax-js](https://github.com/geosigno/simpleParallax.js) - [demo](https://simpleparallax.com) - A maneira mais fácil de obter um efeito paralaxe com React e JavaScript em imagens
- [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt) - [demo](https://mkosir.github.io/react-parallax-tilt) - Facilmente aplicar efeito hover inclinação paralaxe em componentes.

## UI Quadros

**[`Back to top ⬆️`](#table-of-contents)**

### Resposta

Set de componentes + sistema de layout responsivo 

- [ant-design](https://github.com/ant-design/ant-design) - [demo/docs](https://ant.design/docs/react/introduce) - A UI Design Linguagem da China. Individual [components](http://react-component.github.io/) disponível.
- [atlaskit](https://atlaskit.atlassian.com/packages) - Oficial da Atlassian UI biblioteca, com componentes de  badge  para  tree table .
- [base web](https://baseweb.design) - Base Web é uma base para iniciar, evoluir e unificar produtos web.
- [carbon](https://github.com/carbon-design-system/carbon) - [demo/docs](https://www.carbondesignsystem.com/) - A design sistema construído pela IBM.
- [cdbreact](https://github.com/Devwares-Team/cdbreact) - [demo](https://www.devwares.com/product/contrast) - [docs](https://www.devwares.com/docs/contrast/react/index) - Elegante. UI Biblioteca Kit e componentes reutilizáveis para a construção de sites móveis e responsivos e aplicativos web.
- [chakra-ui](https://github.com/chakra-ui/chakra-ui) - [demo/docs](https://chakra-ui.com) - Simples, modular e acessível UI Componentes para o seu React Aplicações.
- [ChatUI](https://github.com/alibaba/ChatUI) - [demo/docs](https://chatui.io/) - O UI design língua e React biblioteca para Conversacional UI
- [CoreUI for React](https://github.com/coreui/coreui-react) - [demo/docs](https://coreui.io/react) - Open Source UI Biblioteca de componentes.
- [evergreen](https://github.com/segmentio/evergreen) - [demo/docs](https://evergreen.segment.com) - Evergreen. React UI Quadro por Segmento.
- [fluentui](https://github.com/microsoft/fluentui) - Frameworks UX para criar belos aplicativos multiplataforma que compartilham code, design, e comportamento de interação.
- [gestalt](https://github.com/pinterest/gestalt) - [demo/docs](https://pinterest.github.io/gestalt/#/) - Um conjunto de componentes que suporta Pinterest design linguagem.
- [grommet](https://github.com/grommet/grommet) - O framework UX mais avançado para aplicações empresariais.
- [kokonut-ui](https://github.com/kokonut-labs/kokonutui) - Grátis moderno e personalizável UI componentes.
- [Mantine](https://github.com/mantinedev/mantine) - [demo/docs](https://mantine.dev/) - Uma biblioteca com mais de 100 ganchos e componentes com native suporte ao tema escuro
- [orbit](https://github.com/kiwicom/orbit) - Componentes para construção de projetos orientados para viagens.
- [flowbite-react](https://github.com/themesberg/flowbite-react) - Código aberto UI biblioteca de componentes baseada em React, Tailwind CSS, e Flowbite.
- [primereact](https://github.com/primefaces/primereact) - Uma completa UI Framework com mais de 50 componentes com material, bootstrap e temas personalizados.
- [radix-ui](https://www.radix-ui.com/) - Componentes não decorados e acessíveis para construção de alta qualidade design sistemas e aplicações web.
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Bootstrap componentes construídos com React.
- [react-foundation](https://github.com/digiaonline/react-foundation) - Fundação como React componentes.
- [reakit](https://github.com/ariakit/ariakit) - [demo/docs](https://reakit.io/docs/button/) Kit de ferramentas para a construção de aplicativos web ricos acessíveis
- [searchkit](https://github.com/searchkit/searchkit) - React UI componentes / widgets. A maneira mais fácil de construir uma grande experiência de pesquisa com Elasticsearch.
- [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React) - O oficial Semântico...UI-React integração.
- [semi-design](https://github.com/DouyinFE/semi-design) - [demo/docs](https://semi.design/) - Um moderno, abrangente, flexível design sistema.
- [shadcn/ui](https://github.com/shadcn-ui/ui) - [demo](https://ui.shadcn.com/examples/mail) - [docs](https://ui.shadcn.com/docs) - Componentes lindamente projetados que você pode copiar e colar em seus aplicativos.
- [shineout](https://github.com/sheinsight/shineout) - [demo](https://shine.wiki/1.4.x/en/components/GetStart) - Chinês-friendly conjunto de componentes: elementos de formulário, navegação, tabela, árvore, árvore selecionar drop-down etc.
- [Tremor](https://github.com/tremorlabs/tremor-raw) - [demo](https://tremor.so/charts) - [docs](https://tremor.so/docs/getting-started/installation) - Componentes de código aberto para construir gráficos e painéis.
- [untitled-ui-react](https://github.com/untitleduico/react) - [demo](https://www.untitledui.com/react/) - Belamente crafted coleção de componentes construídos com React Aria e Tailwind CSS.

#### Material Design

- 🚀 [Material UI](https://github.com/mui/material-ui) - Conjunto completo de componentes. Construir o seu próprio design sistema, ou começar com Material Design.
  - [Autocomplete](https://mui.com/material-ui/react-autocomplete/) - Completar automaticamente, combobox, multiselecção
  - [Material Icons](https://mui.com/material-ui/material-icons/) - 1000+ SVG material ícones.
  - [Modal](https://mui.com/material-ui/react-modal/) - Componente de diálogo modal acessível.
  - [Slider](https://mui.com/material-ui/react-slider/) - Componente de controle deslizante acessível.
  - [Table](https://mui.com/material-ui/react-table/) - tabela com ordenação, seleção, paginação, virtualizada.
  - [Tree View](https://mui.com/material-ui/react-tree-view/) - Componente de visualização em árvore acessível para React.
- [react-essence](https://github.com/Evo-Forge/Essence) - Essência - O Essencial Material Design Quadro.
- [react-materialize](https://github.com/react-materialize/react-materialize) - Material design em vez de react, alimentado por materializecss.
- [react-toolbox](https://github.com/react-toolbox/react-toolbox) - Um conjunto de React componentes que implementam o Google Material Design.
- [mdbootstrap](https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design) - React Bootstrap com Material Design

### Telemóvel

- [antd-mobile](https://github.com/ant-design/ant-design-mobile) - Móvel Configurável UI da China.
- [Ionic React](https://ionicframework.com/blog/announcing-ionic-react/) - Ionic Framework: facilmente construir Android, desktop e aplicações Web progressivas com um code Base.
- [OnsenUI](https://github.com/OnsenUI/OnsenUI/) - [demo/docs](https://onsen.io/v2/guide/react/) - App framework móvel com Material e projetos planos (iOS). Baseado em Componentes Web.

### Coleções de Componentes

- [blueprint](https://github.com/palantir/blueprint) - [demo](https://blueprintjs.com/) - [docs](https://blueprintjs.com/docs/) - UI toolkit para construção de interfaces web complexas e densas para aplicações de desktop (não móveis).
- [dataminr-react-components](https://github.com/dataminr/react-components) - Recolha de reutilizáveis React Componentes e funções de utilidade.
- [shards-react](https://github.com/DesignRevision/shards-react) - [docs/demo](https://designrevision.com/docs/shards-react/getting-started) - Uma bela e moderna React design sistema. Freemium.
- [aframe-react](https://github.com/ngokevin/aframe-react) - Construir experiências de realidade virtual com A-Frame e React.
- [react-admin](https://github.com/marmelab/react-admin) - Crie experiências de usuário administrador em cima dos serviços REST e GraphQL.
- [refine](https://github.com/pankod/refine) - [demo](https://example.refine.dev) - [docs](https://refine.dev/docs) - Construir aplicações intensivas em pouco tempo. Navega com Formiga Design Sistema, um nível empresarial UI Kit de ferramentas.
- [matrix-card](https://github.com/MehmetKaplan/matrix-card) - [demo](https://mehmetkaplan.github.io/matrix-card/) - Componente mais simples possível para gerar cartas de estilo de chuva matriz.
- [rsuite](https://github.com/rsuite/rsuite) - [demo/docs](https://rsuitejs.com/) - Conjunto de componentes para "produtos do sistema empresarial".
- [lens-ui](https://github.com/luciancaetano/lens-ui) - [docs](https://github.com/luciancaetano/lens-ui/blob/main/docs/introduction.md) - Um terno de componentes focado na simplicidade.
- [Tailwindadmin](https://github.com/Tailwind-Admin/free-tailwind-admin-dashboard-template) - [docs](https://tailwind-admin.com/components) - Uma coleção de ShadCN pronto UI componentes que você pode conectar diretamente em seu React/Next.js Projectos.

## UI Utilitários

**[`Back to top ⬆️`](#table-of-contents)**

### Repórter

Relatar os estilos calculados 

#### Relatório de Visibilidade

Relatar quando um componente se torna visível/escondido 

- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - React implementação da API do Observador de Intersecção.
- [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) - Componente sensor.
- [react-waypoint](https://github.com/brigade/react-waypoint) - A React componente para executar uma função sempre que você deslocar para um elemento.

#### Relatório de medição

Determinar e reportar medições de um elemento 

- [react-component-queries](https://github.com/ctrlplusb/react-component-queries) - Forneça adereços para seus Componentes com base em sua Largura e/ou Altura.
- [react-container-dimensions](https://github.com/okonet/react-container-dimensions) - Componente do wrapper que detecta o redimensionamento do elemento.
- [react-dimensions](https://github.com/digidem/react-dimensions) - React componente de ordem superior para obter dimensões do recipiente.
- [react-height](https://github.com/nkbt/react-height) - Componente-embrulho para determinar e relatar a altura dos elementos das crianças.
- [react-measure](https://github.com/souporserious/react-measure) - Medições de cálculo de uma React componente.
- [react-sizeme](https://github.com/ctrlplusb/react-sizeme) - Faça o seu React Componentes conscientes de sua largura e altura.

### Entrada do Dispositivo

Virar a entrada do usuário em ações 

#### Eventos do Teclado

- [react-hotkeys](https://github.com/chrisui/react-hotkeys) - Tecla de atalho declarativa e gerenciamento de área de foco para React.
- [react-key-handler](https://github.com/ayrton/react-key-handler) - React componente para lidar com eventos de teclado.
- [react-keydown](https://github.com/glortho/react-keydown) - Embrulho de chave para baixo leve React componentes.
- [react-shortcuts](https://github.com/avocode/react-shortcuts) - Gerenciar atalhos de teclado de um lugar.
- [useKeyCapture](https://github.com/pranesh239/use-key-capture) - Um gancho personalizado para facilitar os ouvintes de teclas de um alvo/global.
- [react-keyboard-navigator](https://github.com/zheeeng/react-keyboard-navigator) - Um conjunto de React componentes e gancho para selecionar componentes irmãos através do teclado.

#### Rolar Eventos

- [react-scroll-components](https://github.com/jeroencoumans/react-scroll-components) - Um conjunto de componentes que react página de rolagem.

#### Toque em Deslizar

- [react-swipe](https://github.com/voronianski/react-swipe) - Swipe.js como um React componente.

#### Eventos do Mouse

- [react-hook-mighty-mouse](https://github.com/mkosir/react-hook-mighty-mouse) - [demo](https://mkosir.github.io/react-hook-mighty-mouse) - Gancho que rastreia eventos do mouse em elemento selecionado.

### Meta- Etiquetas

Definir meta tags, <title>, filhos de <head>_

- [react-helmet-async](https://github.com/staylor/react-helmet-async#readme) - Capacete seguro para roscas React 16+ e amigos
- [react-helmet](https://github.com/nfl/react-helmet) - Um gerenciador de cabeça de documento para React.

### Portal

Remeter um elemento para um arbitrário DOM nó 

- [react-layer-stack](https://github.com/fckt/react-layer-stack) - Sistema de camadas simples, mas ubiquosamente poderoso e agnóstico para React.
- [react-portal](https://github.com/tajo/react-portal) - React componente para transporte de modais, lightboxes, barras de carregamento... para document.body.

### Testar o Comportamento do Usuário

A/B ensaios, experiências, ... 

- [react-experiments](https://github.com/HubSpot/react-experiments) - React componentes para implementação UI experiências.

## Code Design

**[`Back to top ⬆️`](#table-of-contents)**

Bibliotecas que ajudam code desenho 

### Armazenagem de Dados

Fluxo de dados / gerenciamento de dados / armazenamento de dados / componentes estado / fluxo de dados 

- [baobab-react](https://github.com/Yomguithereal/baobab-react) - React integração para Baobab.
- [cerebral](https://github.com/cerebral/cerebral) - Um controlador de estado com seu próprio depurador.
- [effector-react](https://github.com/effector/effector) - React ligações para efetor, um gestor de estado eficaz multi-armazenagem.
- [fireproof](https://github.com/fireproof-storage/fireproof) - [demo](https://fireproof.storage/try-free/) - [docs](https://use-fireproof.com/docs/welcome) Puro JS, zero dependência, banco de dados CRDT - roda no navegador e se conecta a qualquer nuvem ou infra-estrutura
- [RxDB](https://rxdb.info/) - [demo](https://github.com/pubkey/rxdb/tree/master/examples/react) - [docs](https://rxdb.info/quickstart.html) Um banco de dados rápido, local primeiro, reativo para JavaScript Aplicações
- [fluxible](https://github.com/yahoo/fluxible) - Um recipiente plugável para aplicações de fluxo universal.
- [kea](https://github.com/mariusandra/kea) - Arquitetura de alto nível para React aplicações.
- [react-i13n](https://github.com/yahoo/react-i13n) - Uma abordagem performante, escalável e plugável para instrumentar seu React aplicação.
- [react-redux](https://github.com/reactjs/react-redux) - Oficial React ligações para Redux.
- [redux-batched-actions](https://github.com/tshelburne/redux-batched-actions) - Redutor + ação para reduzir ações sob uma única notificação de assinante.
- [redux](https://github.com/reactjs/redux) - Recipiente de estado previsível para JavaScript aplicações.
- [reselect](https://github.com/reactjs/reselect) - Biblioteca selector para Redux.
- [resourcerer](https://github.com/SiftScience/resourcerer) - Framework declarativo de arquivos de dados para APIs REST
- [synergies](https://github.com/lukasbach/synergies) - [docs](https://synergies.js.org) Uma biblioteca de estado de contexto para criar reutilizáveis React lógica de estado, sinergizando peças de contexto atomar.
- [zustand](https://zustand.surge.sh/) - [docs](https://github.com/pmndrs/zustand) - Uma solução rápida de gerenciamento de estado de Bearbones usando princípios de fluxo simplificados e api gancho sem caldeira.
- [teaful](https://github.com/teafuljs/teaful) - Pequeno, fácil e poderoso React gestão do estado

### Lógica do Formulário

- [data-driven-forms](https://github.com/data-driven-forms/react-forms) - Uma forma declarativa de construir formulários com toda a funcionalidade.
- [formik](https://github.com/jaredpalmer/formik) - Construa formulários sem lágrimas e suporte a validação com facilidade.
- [formsy-react](https://github.com/formsy/formsy-react/) - Um construtor de entrada de formulário e validador para React JS.
- [Phormal](https://github.com/phormal/phormal) - [Docs & Demos](https://phormal.dev/getting-started/react) - Formulários multilingues responsivos com validação integrada, suporte para o modo escuro e linguagens direita-esquerda.
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - React ganchos para validação de formulário sem o incômodo.
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) - A React componente para a construção de formulários Web da JSONSchema.
- [react-client-validation](https://github.com/0529bill/react-client-validation) - Validação simples e super leve para React.
- [react-final-form](https://github.com/final-form/react-final-form) - Gestão do estado do formulário baseado na assinatura
- [react-formawesome](https://github.com/MAKARD/react-formawesome) - Biblioteca complexa para criar formas incríveis.
- [surveyjs](https://github.com/surveyjs/survey-library) - Biblioteca avançada de Inquéritos e Formulários
- [Formily](https://github.com/alibaba/formily) - Alto desempenho, extensível, e Typescript amigável
- [hook-form-react](https://github.com/luoanb/hook-form-react) - [docs](https://luoanb.github.io/hook-form-react) - Uma solução leve, livre de dependência React ganchos para validação do formulário.

### Roteador

- [react-router-component](https://github.com/STRML/react-router-component) - Componente declarativo do roteador para React.
- [react-router-scroll](https://github.com/taion/react-router-scroll) - React Gestão de roteadores.
- [react-router](https://github.com/reactjs/react-router) - Uma biblioteca de roteamento completa para React.
- [redux-first-history](https://github.com/salvoravida/redux-first-history) - Redux Primeira História - Redux suporte de ligação ao histórico react-router - @reach/router - wouter
- [universal-router](https://github.com/kriasoft/universal-router) - Um roteador simples estilo middleware para isomórfico JavaScript aplicações web.
- [wouter](https://github.com/molefrog/wouter) - Uma biblioteca de roteamento minimalista ~1.3KB. Nada mais além de ganchos.
- [tanstack-router](https://github.com/TanStack/router) - Roteador tipo seguro com caching embutido & URL gestão do estado

### Propriedades do servidor

Propriedades  componentes assíncronas obtidas através da rede 

- [react-refetch](https://github.com/heroku/react-refetch) - Uma forma simples, declarativa e composível de obter dados para React componentes.
- [redux-connect](https://github.com/makeomatic/redux-connect) - Fornece decorador para resolver acessórios async em react- Roteador.
- [axios-react](https://github.com/soroushchehresa/axios-react) - Componente de cliente HTTP para React.

### Comunicação com o servidor

- [apollo-client](https://github.com/apollostack/apollo-client) - Um cliente de cache simples para qualquer servidor GraphQL e UI quadro.
- [react-relay](https://github.com/facebook/relay) - Relé é um JavaScript quadro para a construção de dados React Pedidos.
- [query](https://github.com/TanStack/query) - [docs](https://tanstack.com/query/v4) Gerenciamento de estado assíncrono poderoso, utilitários de estado servidor e coleta de dados para TS/JS, React, Sólido, Svelte e Vue.

### CSS / Estilo

- [aesthetic](https://github.com/milesj/aesthetic) - Um poderoso tipo seguro, estrutura agnóstico, CSS-in-JS library for styling components, quer seja objetos simples, importação de folhas de estilo, ou simplesmente referenciando nomes de classe externos.
- [aphrodite](https://github.com/Khan/aphrodite) - Os estilos em linha, mas funcionam!.
- [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer) - Autoprefixer em tempo de execução para objetos em linha estilo.
- [@classmatejs/react](https://github.com/richard-unterberg/classmatejs/tree/master/packages/react) - Um construtor de componentes de nome de classe focado com uma sintaxe como componentes estilo e o açúcar das variantes do cva.
- [react-container-query](https://github.com/d6u/react-container-query) - Componente de resposta modular.
- [react-responsive](https://github.com/contra/react-responsive) - Consultas de mídia em react para responder design.
- [reactponsive](https://github.com/jmlweb/reactponsive) - Componentes responsivos e ganchos.
- [styled-components](https://github.com/styled-components/styled-components) - Primitivos visuais para a idade do componente.
- [stitches](https://github.com/stitchesjs/stitches) - CSS-in-JS com quase zero runtime, SSR, suporte multivariante.

### HTML Modelo

- [jsx-control-statements](https://github.com/AlexGilleran/jsx-control-statements) - Cogumelo Se e Para React JSX.

### Aplicativos Isomórficos

- [hypernova](https://github.com/airbnb/hypernova) - Um serviço para renderização do seu servidor JavaScript Vistas.
- [isomorphic-style-loader](https://github.com/kriasoft/isomorphic-style-loader) - Isomórfico CSS carregador de estilo para Webpack.
- [react-server](https://github.com/redfin/react-server) - React framework com renderização do servidor para carregar rapidamente a página.
- [rill](https://github.com/rill-js/rill) - Framework universal de aplicação web.
- [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) - renderização do lado do servidor para seus aplicativos criados pelo Webpack (por exemplo: React).

### Caldeira

Andaimes / kit de arranque / gerador Yeoman / conjunto de pilhas / semente 

- [create-react-app](https://github.com/facebookincubator/create-react-app) - Criar React aplicações sem configuração de compilação.
- [crisp-react](https://github.com/winwiz1/crisp-react) - Integração expressa em TypeScript com suporte para múltiplas SPA e prevenção de armadilhas.
- [cra-template-redux-auth-starter](https://github.com/Nilanth/cra-template-redux-auth-starter) - A Redux auth starter caldeiraplate para PCR.
- [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate) - Desenvolvimento de edição ao vivo no aplicativo desktop.
- [elegant](https://github.com/elegantframework/elegant-cli) - [docs](https://www.elegantframework.com/docs/installation) - [demo](https://www.elegantframework.com/) - Um simples React framework para a construção rápida de aplicações web bonitas e expressivas com Next.js, Tailwind CSS, e Markdown Carregar.
- [extensive-react-boilerplate](https://github.com/brocoders/extensive-react-boilerplate) - Caldeira com Next.js, Auth (Assinar, Registrar-se, Reiniciar senha, Confirmar e-mail, Atualizar Token), Material UI, React Forma de gancho, I18N, Envios de arquivos (apoio aos drivers locais e Amazon S3, Tests, CI.
- [generator-starhackit](https://github.com/FredericHeem/starhackit) - Kit de arranque completo.
- [nwb](https://github.com/insin/nwb) - Ferramenta CLI e devDependência para React apps & amp; componentes e módulos npm.
- [nx](https://nx.dev) - Sistema de construção de próxima geração com suporte monorepo de primeira classe e integrações poderosas.
- [PBandJ](https://github.com/moishinetzer/pbandj) - Framework de componentes reutilizáveis de Zero-Config.
- [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) - Minimal live-editing caldeiraplate para o seu próximo ReactJS projecto.
- [rockpack](https://github.com/AlexSergey/rockpack) - Solução simples para criação React aplicação com SSR, agrupamento, fiação, testes em 5 minutos.
- [create-react-dependency](https://github.com/andrelmlins/create-react-dependency) - Criar react dependências sem configuração de compilação.
- [phoenix](https://github.com/Sazito/phoenix) - Uma caldeira simples que ajuda você a fazer o seu react aplicação com suporte de renderização e localização lateral do servidor.
- [react-enterprise-starter-kit](https://github.com/anandgupta193/react-enterprise-starter-kit) - Altamente escalável e performant impressionante React Kit inicial para uma aplicação empresarial com uma base de código muito fácil de manter.
- [Tailwindadmin](https://tailwind-admin.com/) - Modelo de painel Shadcn livre construído sobre React e Tailwind CSS vem com suporte a múltiplos quadros

### Diversos

- [react-inlinesvg](https://github.com/matthewwithanm/react-inlinesvg) - Um componente de carga SVG para ReactJS.
- [react-godfather](https://github.com/kapolos/react-godfather) - Uma nova maneira de escrever componentes funcionais, sem ganchos.
- [react-vvm](https://github.com/behnamrhp/React-VVM) - Uma nova abordagem da MVM em React, para forçar a separação limpa de preocupações, reduzir a placa de caldeira e otimização automática de re-render para escalonável UI lógica.
- [react-call](https://github.com/desko27/react-call) - Chama o teu React componentes.
- [redux-auth-patch](https://github.com/lynndylanhurley/redux-auth) - Sistema completo de autenticação de fichas para react + redux que suporta renderização isomórfica.
- [redux-search](https://github.com/treasure-data/redux-search) - Redux ligações para a pesquisa do lado do cliente.
- [tcomb-react](https://github.com/gcanti/tcomb-react) - Sintaxe alternativa para PropTypes.
- [react-universal-hooks](https://github.com/salvoravida/react-universal-hooks) - :tada: suporte react ganchos em toda parte (Funcional ou Componente de Classe).

## Utilitários

**[`Back to top ⬆️`](#table-of-contents)**

- [qrcode.react](https://github.com/zpao/qrcode.react) - Um componente &lt;QRCode/&gt; para uso com React.
- [`<qr-code>`](https://github.com/bitjson/qr-code) – A no-dependencies, customizable, animate-able, SVG-based `<qr-code>` element.
- [react-children-utilities](https://github.com/fernandopasik/react-children-utilities) - Usos estendidos para ReactCrianças.
- [react-media](https://github.com/ReactTraining/react-media) - A CSS componente de pesquisa de mídia para React.
- [react-middle-ellipsis](https://github.com/bluepeter/react-middle-ellipsis) - [demo](https://bluepeter.github.io/react-middle-ellipsis/) - Trincar cordas longas no meio em vez do fim.
- [react-translate-component](https://github.com/martinandert/react-translate-component) - Conteúdo de texto multilingue/localizado.

### i18n

Internacionalização / L10n / localização / tradução 

- [react-i18next](https://github.com/i18next/react-i18next) - Internacionalização para react Fez bem. Usando o i18next i18n ecossistema.
- [react-intl](https://github.com/yahoo/react-intl) - Internacionalizar React aplicações.
- [react-localized](https://github.com/fakundo/react-localized) - Internacionalização para React componentes baseados em `gettext` formato.
- [react-translate-maker](https://github.com/CherryProjects/react-translate-maker) - Internacionalização universal (i18n) biblioteca de código aberto para React.
- [react-intl-universal](https://github.com/alibaba/react-intl-universal) - [demo](https://g.alicdn.com/alishu/common/0.0.95/intl-example/index.html) Internacionalizar React aplicações. Não só para React.Componente, mas também para Vanilla JS.
- [@tolgee/react](https://github.com/tolgee/tolgee-js/tree/main/packages/react) - [docs](https://tolgee.io/docs/web/using_with_react/installation) – Ferramenta de localização baseada na Web que permite aos usuários traduzir diretamente no React app eles desenvolvem
- [js-lingui](https://github.com/lingui/js-lingui) - [docs](https://lingui.js.org) – Internacionalização legível, automatizada e otimizada (5 kb) para JavaScript.

### Ligações/integrações do quadro

- [backbone-react-component](https://github.com/magalhas/backbone-react-component) - Um pouco de cola bacana que automaticamente liga seus modelos Backbone.
- [elm-react-component](https://github.com/KtorZ/elm-react-component) - A React componente que envolve um módulo Elm a ser usado em uma React aplicação.
- [gl-react](https://github.com/ProjectSeptemberInc/gl-react) - Links OpenGL / WebGL para React implementar efeitos complexos sobre imagens e conteúdo.
- [react-backbone](https://github.com/jhudson8/react-backbone) - Misturas conscientes da espinha dorsal para react E muito mais.
- [react-d3-library](https://github.com/react-d3-library/react-d3-library) - Biblioteca de código aberto para usar o D3 in React.
- [react-elm-components](https://github.com/evancz/react-elm-components) - Escrever React componentes em Elm.
- [react-famous](https://github.com/pilwon/react-famous) - React ponte para Famo.us.
- [react-localstorage](https://github.com/STRML/react-localstorage) - Implementação simples de armazenamento local componente para o Facebook React.
- [react-lottie-player](https://github.com/mifi/react-lottie-player) - [demo](https://mifi.github.io/react-lottie-player/) - Leitor de animação declarativa.
- [react-on-rails](https://github.com/shakacode/react_on_rails) - Integração React + Webpack + Rails para construir aplicativos universais (isomórficos).
- [react-three-renderer](https://github.com/toxicFork/react-three-renderer) - Renderizar para uma tela three.js usando React.
- [react-threejs](https://github.com/fritx/react-threejs) - Ligações mais simples entre React & Três. js
- [reactfire](https://github.com/firebase/reactfire) - ReactJS mixin para fácil integração Firebase.
- [reactive-elements](https://github.com/PixelsCommander/ReactiveElements) - Permite a utilização React.js componente como HTML elemento (componente web).
- [react-unity-webgl](https://github.com/elraccoone/react-unity-webgl) - Intergração de unidade com comunicação bidirecional usando um Sistema de Evento integrado.

### Integração com serviços de terceiros

- [react-ga](https://github.com/react-ga/react-ga) - React Módulo Google Analytics.
- [react-google-analytics](https://github.com/hzdg/react-google-analytics) - Componente de análise do Google.
- [react-google-autocomplete](https://github.com/ErrorPro/react-google-autocomplete) - Google Coloca componentes de API e ganchos.
- [react-recaptcha](https://github.com/appleboy/react-recaptcha) - A react.js reCAPTCHA para Google.
- [react-stripe-checkout](https://github.com/azmenak/react-stripe-checkout) - Carregar a lista &# 39;s checkout.js como um react componente. Maneira mais fácil de usar checkout com React.
- [redux-segment](https://github.com/rangle/redux-segment) - Integração de análise Segment.io para redux.
- [react-slack-notification](https://github.com/Nilanth/react-slack-notification) - Envie mensagens e registros de erro diretamente para um canal Slack.
- [react-firebase-hooks](https://github.com/csfrequency/react-firebase-hooks) - Ganchos para integrar a base de fogo em sua aplicação.

## Desempenho

**[`Back to top ⬆️`](#table-of-contents)**

### UI

- [inferno](https://github.com/trueadm/inferno) - Um extremamente rápido, React- Como? JavaScript biblioteca para a construção de interfaces de usuário modernas.
- [react-fastclick](https://github.com/JakeSidSmith/react-fastclick) - Eventos de toque rápido para React.
- [react-static-container](https://github.com/reactjs/react-static-container) - Muda o conteúdo estático de forma eficiente.

#### Inspecionar

- [react-perf-tool](https://github.com/RamonGebben/react-perf-tool) - Desempenho de depuração do seu React aplicação.
- [react-render-visualizer](https://github.com/redsunsoft/react-render-visualizer) - Visualizador de renderização para ReactJS.

#### Carga Preguiçosa

- [react-infinite-grid](https://github.com/ggordan/react-infinite-grid) - A React componente que transforma uma grelha de elementos.
- [react-infinite](https://github.com/seatgeek/react-infinite) - Um recipiente de rolagem eficiente pronto para navegador baseado no UITableView.
- [react-lazy-load](https://github.com/loktar00/react-lazy-load) - React componente que transforma os elementos das crianças quando entram no viewport.
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload) - Carregar preguiçoso o seu Componente, Imagem ou qualquer coisa importa o desempenho.
- [react-virtualized](https://github.com/bvaughn/react-virtualized) - React componentes para renderização eficiente de grandes listas e dados tabulares.

### Tamanho da Aplicação

- [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) - Remover desnecessário React PropTypes.
- [react-lite](https://github.com/Lucifier129/react-lite) - Uma implementação de React que otimiza para tamanho de script pequeno.

### Renderização do lado do servidor

- [iSSR](https://github.com/AlexSergey/issr) - A maneira mais fácil de mover o seu React aplicação para renderização do lado do servidor. Lida com efeitos colaterais e sincroniza Estado.
- [react-esi](https://github.com/dunglas/react-esi) - Uma biblioteca para aumentar o desempenho da RSS expondo React componentes como Fragmentos Edge Side Includes (ESI)

## Ferramentas Dev

**[`Back to top ⬆️`](#table-of-contents)**

### Ensaio

- [enzyme](https://github.com/airbnb/enzyme) - JavaScript Testando utilitários para React.
- [jest-cli](https://github.com/facebook/jest) - Dor JavaScript Testando.
- [react-unit](https://github.com/pzavolinsky/react-unit) - Biblioteca de teste de unidade leve para ReactJS.
- [redux-test-recorder](https://github.com/conorhastings/redux-test-recorder) - A redux middleware para gerar automaticamente testes para redutores através ui interacção.
- [rut](https://github.com/milesj/rut) - React teste feito fácil com `react-test-renderer`. Suportes DOM e renderizadores personalizados.
- [unexpected-react](https://github.com/bruderstein/unexpected-react) - Plug- in para o inesperado para habilitar o teste completo React virtual DOM, e também o renderizador raso.
- [playwright](https://github.com/microsoft/playwright) enables reliable end-to-end testing for modern web apps.

### Redux

- [redux-devtools-chart-monitor](https://github.com/romseguy/redux-devtools-chart-monitor) - Um monitor gráfico para Redux DevTools.
- [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) - Um cais redimensionável e móvel para Redux Monitores DevTools.
- [redux-devtools-filterable-log-monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor) - Monitor filtrante em árvore para Redux DevTools.
- [redux-devtools-inspector](https://github.com/alexkuz/redux-devtools-inspector) - Outro Redux Monitor DevTools.
- [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor) - O monitor padrão para Redux DevTools com uma visão em árvore.
- [redux-devtools](https://github.com/gaearon/redux-devtools) - DevTools para Redux com recarga quente, replay de ação e personalizável UI.
- [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) - Redux DevTools remotamente.

### Inspecionar

- [fluxguard](https://fluxguard.com) - Monitoramento de mudanças PROD que destaca tudo DOM + design alterações.
- [react-inspector](https://github.com/xyc/react-inspector) - Poder do navegador DevTools inspetores dentro de seu React app.
- [reactotron](https://github.com/reactotron/reactotron) - Um aplicativo CLI e OS X para inspecionar seu React JS e React Native aplicações.
- [Tail Lens](https://taillens.io) - Tailwind editor no navegador : Inspecionar, editar, visualizar, copiar.

### Diversos

- [component-controls](https://github.com/ccontrols/component-controls) - [demo](https://component-controls.com) - [docs](https://component-controls.com/tutorial) - Uma ferramenta de próxima geração para criar sites de documentação rápida.
- [cosmos-js](https://github.com/skidding/cosmos) - Ferramenta DX para projetar verdadeiramente encapsulada React componentes.
- [react-demo-tab-cli](https://github.com/mkosir/react-demo-tab-cli) - Ferramenta CLI para criar demonstrações de react componentes.
- [react-styleguidist](https://github.com/sapegin/react-styleguidist) - React gerador guia estilo.
- [standard-react](https://github.com/feross/standard) - JavaScript Guia de Estilo Padrão.
- [Plasmic](https://www.plasmic.app/) - Poderoso design ferramenta para construir o seu React componentes visualmente.
- [SimpleLocalize](https://github.com/simplelocalize/simplelocalize-cli) - Ferramenta CLI de código aberto para encontrar i18n chaves em React Projectos.
- [react-device-frameset](https://github.com/zheeeng/react-device-frameset) - React componente de frameset do dispositivo.

## Diversos

**[`Back to top ⬆️`](#table-of-contents)**

- [DataFormsJS JSX Loader](https://github.com/dataformsjs/dataformsjs/blob/master/docs/jsx-loader.md) - Pequeno JavaScript Compilador para converter rapidamente JSX para JS diretamente em uma página web.
- [html-to-react-components](https://github.com/roman01la/html-to-react-components) - Extrair partes anotadas de HTML em React componentes como módulos separados.
- [htmltojsx](https://github.com/reactjs/react-magic) - Automaticamente AJAXify plain HTML com o poder de ReactA magia dele!.
- [jsonx](https://github.com/repetere/jsonx) - React JSON Syntax.
- [mozaik](https://github.com/plouc/mozaik) - Moza&iuml;k é uma ferramenta baseada em nodejs / react / d3 / stylus para criar facilmente belos painéis.
- [react-blessed](https://github.com/Yomguithereal/react-blessed) - A react Dador para abençoado.
- [jsondiffpatch-react](https://github.com/bluepeter/jsondiffpatch-react) - O JSON está a diffing.
- [iron-session](https://github.com/vvo/iron-session) - Biblioteca de sessão segura, sem estado e baseada em cookies.

### Gerador de Website Estático

- [gatsby](https://github.com/gatsbyjs/gatsby) - Transformar texto simples em blogs e sites dinâmicos usando React.js.

## Soluções em nuvem

**[`Back to top ⬆️`](#table-of-contents)**

### Bases de dados

- [BCMS](https://github.com/bcms/cms) - Sistema de gerenciamento de conteúdo auto-hostável baseado em API, código aberto para Gatsby, Nuxt e Next.
- [crisp-bigquery](https://github.com/winwiz1/crisp-bigquery) - Pilha completa Google BigQuery com Expresso em TypeScript.
- [react-server-routing-example](https://github.com/mhart/react-server-routing-example) - Roteamento universal cliente/servidor e dados com AWS DynamoDB.
