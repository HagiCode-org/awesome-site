<p align="center">
  <br>
    <img src="awesome-actions.png" width="150"/>
  <br>
</p>

# Awesome Actions [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [<!--lint ignore no-dead-urls-->![GitHub Actions status | sdras/awesome-actions](https://github.com/sdras/awesome-actions/workflows/Lint%20Awesome%20List/badge.svg)](https://github.com/sdras/awesome-actions/actions?workflow=Lint+Awesome+List)

> Uma lista selecionada de recursos incríveis relacionados ao GitHub Actions.

As Actions são acionadas por eventos da plataforma GitHub diretamente em um repositório e executam fluxos de trabalho sob demanda em máquinas virtuais Linux, Windows ou macOS, ou em um contêiner, em resposta a esses eventos. Com o GitHub Actions, você pode automatizar seu fluxo de trabalho da ideia à produção.

## Conteúdo

- [Recursos oficiais](#official-resources)
  - [Exemplos de fluxos de trabalho](#workflow-examples)
  - [Actions oficiais](#official-actions)
  - [Crie suas Actions](#create-your-actions)
- [Recursos da comunidade](#community-resources)
  - [Ferramentas e gerenciamento do GitHub](#github-tools-and-management)
  - [Coleção de Actions](#collection-of-actions)
  - [Utilitários](#utility)
  - [Análise estática](#static-analysis)
  - [Análise dinâmica](#dynamic-analysis)
  - [Monitoramento](#monitoring)
  - [Pull requests](#pull-requests)
  - [GitHub Pages](#github-pages)
  - [Notificações e mensagens](#notifications-and-messages)
  - [Implantação](#deployment)
  - [Serviços externos](#external-services)
  - [Ferramentas de frontend](#frontend-tools)
  - [Operações de machine learning](#machine-learning-ops)
  - [Compilação](#build)
  - [Banco de dados](#database)
  - [Rede](#networking)
  - [Localização](#localization)
  - [Diversão](#fun)
  - [Guia de referência](#cheat-sheet)
- [Tutoriais](#tutorials)

## Recursos oficiais

- [Site oficial](https://github.com/features/actions)
- [Documentação oficial](https://help.github.com/en/actions)
- [Organização oficial do GitHub Actions](https://github.com/actions)
  - [actions/virtual-environments](https://github.com/actions/virtual-environments) - Ambientes virtuais do GitHub Actions.
  - [actions/runner](https://github.com/actions/runner) - O runner do GitHub Actions.
- [Anúncio no blog do GitHub](https://github.blog/2018-10-17-action-demos/)

### Exemplos de fluxos de trabalho

- [actions/starter-workflows](https://github.com/actions/starter-workflows) - Gerenciamento de fluxos de trabalho iniciais.
- [actions/example-services](https://github.com/actions/example-services) - Exemplos de fluxos de trabalho que usam contêineres de serviço.

### Actions oficiais

<!--lint disable no-dead-urls-->

#### Actions de ferramentas de fluxo de trabalho

Actions de ferramentas para seu fluxo de trabalho.

<!--lint ignore awesome-spell-check-->

- [actions/checkout](https://github.com/actions/checkout) - Configure seu repositório no fluxo de trabalho.
- [actions/upload-artifact](https://github.com/actions/upload-artifact) - Envie artefatos do seu fluxo de trabalho.
- [actions/download-artifact](https://github.com/actions/download-artifact) - Baixe artefatos da sua compilação.
- [actions/cache](https://github.com/actions/cache) - Armazene dependências e resultados de compilação em cache no GitHub Actions.
- [actions/github-script](https://github.com/actions/github-script) - Escreva um script para a API do GitHub e os contextos do fluxo de trabalho.

#### Actions para automação do GitHub

Automatize o gerenciamento de issues, pull requests e releases.

- [actions/create-release](https://github.com/actions/create-release) - Uma Action para criar releases pela API do GitHub Release.
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - Uma Action para enviar um ativo de release pela API do GitHub Release.
- [actions/first-interaction](https://github.com/actions/first-interaction) - Uma Action para filtrar pull requests e issues de colaboradores iniciantes.
- [actions/stale](https://github.com/actions/stale) - Marca issues e pull requests sem interação recente.
- [actions/labeler](https://github.com/actions/labeler) - Uma Action para rotular pull requests automaticamente.
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - Exclua versões de um pacote do GitHub Packages.

#### Actions de configuração

Configure seu fluxo de trabalho do GitHub Actions com uma versão específica das linguagens de programação.

- [actions/setup-node: Node.js](https://github.com/actions/setup-node)
- [actions/setup-python: Python](https://github.com/actions/setup-python)
- [actions/setup-go: Go](https://github.com/actions/setup-go)
- [actions/setup-dotnet: .NET core sdk](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC and Cabal)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir](https://github.com/actions/setup-elixir)
- [actions/setup-julia: Julia](https://github.com/julia-actions/setup-julia)

### Crie suas Actions

#### Actions de JavaScript e TypeScript

- [actions/toolkit](https://github.com/actions/toolkit) - O kit de ferramentas do GitHub para desenvolver GitHub Actions.
- [actions/hello-world-javascript-action](https://github.com/actions/hello-world-javascript-action) - Um modelo que demonstra como criar uma Action em JavaScript.
- [actions/javascript-action](https://github.com/actions/javascript-action) - Crie uma Action em JavaScript.
- [actions/typescript-action](https://github.com/actions/typescript-action) - Crie uma Action em TypeScript.
- [actions/http-client](https://github.com/actions/http-client) - Um cliente HTTP leve otimizado para uso com Actions, com TypeScript, genéricos e async/await.

#### Actions de contêiner Docker

- [actions/hello-world-docker-action](https://github.com/actions/hello-world-docker-action) - Um modelo que demonstra como criar uma Action Docker.
- [actions/container-toolkit-action](https://github.com/actions/container-toolkit-action) - Repositório-modelo para criar Actions de contêiner usando actions/toolkit.

## Recursos da comunidade

### Ferramentas e gerenciamento do GitHub

- [Configure declarativamente os rótulos do GitHub](https://github.com/lannonbr/issue-label-manager-action)
- [Action para sincronizar rótulos do GitHub de forma declarativa](https://github.com/micnncim/action-label-syncer)
- [Adicione releases ao GitHub](https://github.com/elgohr/Github-Release-Action)
- [Publique uma imagem Docker no Docker Hub](https://github.com/elgohr/Publish-Docker-Github-Action)
- [Crie uma issue usando o conteúdo de um arquivo](https://github.com/peter-evans/create-issue-from-file)
- [Publique releases do GitHub com ativos](https://github.com/softprops/action-gh-release)
- [Automação de projetos do GitHub+](https://github.com/alex-page/github-project-automation-plus) - Automatize cartões do GitHub Projects com qualquer evento de webhook.
- [Execute o GitHub Actions localmente com uma interface web](https://github.com/phishy/wflow)
- [Execute o GitHub Actions localmente no terminal](https://github.com/nektos/act)
- [Compile e publique um APK de depuração do Android](https://github.com/ShaunLWM/action-release-debugapk)
- [Gere números de compilação sequenciais para o GitHub Actions](https://github.com/einaregilsson/build-number)
- [Envie alterações do Git para um repositório GitHub sem complicações de autenticação](https://github.com/ad-m/github-push-action)
- [Gere notas de release com base nos seus eventos](https://github.com/Decathlon/release-notes-generator-action)
- [Crie uma página wiki do GitHub com base no arquivo Markdown fornecido](https://github.com/Decathlon/wiki-page-creator-action)
- [Rotule seus pull requests automaticamente (usando arquivos commitados)](https://github.com/Decathlon/pull-request-labeler-action)
- [Adicione um rótulo aos seus pull requests com base no nome da equipe do autor](https://github.com/JulienKode/team-labeler-action)
- [Obtenha uma lista de alterações de arquivos em um PR ou push](https://github.com/trilom/file-changes-action)
- [Use Actions privadas em qualquer fluxo de trabalho](https://github.com/InVisionApp/private-action-loader)
- [Rotule suas issues com base no conteúdo delas](https://github.com/damccorm/tag-ur-it)
- [Reverta uma release do GitHub](https://github.com/author/action-rollback)
- [Bloqueie issues e pull requests fechados após um período de inatividade](https://github.com/dessant/lock-threads)
- [Obtenha a quantidade de diferenças de commits entre duas branches](https://github.com/jessicalostinspace/commit-difference-action)
- [Gere notas de release com base em referências do Git](https://github.com/metcalfc/changelog-generator)
- [Aplique políticas a repositórios e commits do GitHub](https://github.com/talos-systems/conform)
- [Rotule issues automaticamente com base na descrição](https://github.com/Renato66/auto-label)
- [Atualize as GitHub Actions configuradas para as versões mais recentes](https://github.com/fabasoad/ghacu)
- [Crie uma branch para uma issue](https://github.com/robvanderleek/create-issue-branch)
- [Remova artefatos antigos](https://github.com/c-hive/gha-remove-artifacts)
- [Disponibilize dados de commits do Git como variáveis de ambiente](https://github.com/rlespinasse/git-commit-data-action)
- [Sincronize arquivos/binários definidos com uma wiki ou repositórios externos](https://github.com/kai-tub/external-repo-sync-action)
- [Crie, atualize ou exclua uma página wiki do GitHub com base em qualquer arquivo](https://github.com/Andrew-Chen-Wang/github-wiki-action)
- [Prow GitHub Actions](https://github.com/jpmcb/prow-github-actions) - Automação da aplicação de políticas, chat-ops e mesclagem automática de PRs.
- [Verifique o status do GitHub no seu fluxo de trabalho](https://github.com/crazy-max/ghaction-github-status)
- [Gerencie rótulos no GitHub (crie, renomeie, atualize e exclua) como código](https://github.com/crazy-max/ghaction-github-labeler)
- [Distribuição contínua de financiamento aos colaboradores e dependências do seu projeto](https://github.com/protontypes/libreselery)
- [Regras do Herald para GitHub: adicione inscritos, responsáveis, rótulos e muito mais ao seu PR](https://github.com/gagoar/use-herald-action)
- [Validador de Codeowners do GitHub](https://github.com/mszostok/codeowners-validator) - Garante a correção do seu arquivo GitHub CODEOWNERS. Oferece suporte a repositórios públicos e privados do GitHub e também a instalações do GitHub Enterprise.
- [Action Copybara](https://github.com/olivr/copybara-action) - Mova e transforme código entre repositórios (ideal para manter vários repositórios a partir de um monorepo).

### Coleção de Actions

- [Use o Terraform da HashiCorp](https://github.com/hashicorp/setup-terraform)
- [GitHub Actions para Yarn 1](https://github.com/Borales/actions-yarn)
- [GitHub Actions para Yarn 2](https://github.com/sergioramos/yarn-actions)
- [GitHub Actions para Golang](https://github.com/cedrickring/golang-action)
- [GitHub Actions para R e o pacote #rstats associado](http://maxheld.de/ghactions/)
- [GitHub Actions para WordPress](https://github.com/10up/actions-wordpress/)
- [GitHub Actions para Composer](https://github.com/MilesChou/composer-action)
- [GitHub Actions para Flutter](https://github.com/subosito/flutter-action)
- [GitHub Actions para PHP](https://github.com/shivammathur/setup-php)
- [GitHub Actions para Rust](https://github.com/actions-rs)
- [GitHub Actions para Android](https://github.com/Malinskiy/action-android)
- [GitHub Actions para Logtalk e Prolog](https://github.com/logtalk-actions)
- [GitHub Actions para Deno](https://github.com/denolib/setup-deno)
- [GitHub Actions para Unity](https://github.com/webbertakken/unity-actions)
- [Octions - GitHub Actions para a API REST do GitHub](https://github.com/maxkomarychev/octions)
- [GitHub Actions para Docker](https://github.com/docker/github-actions)
- [GitHub Actions para AWS](https://github.com/clowdhaus/aws-github-actions)
- [Actions Hub](https://github.com/actionshub)

### Utilitários

- [Configure o `ssh-agent`](https://github.com/webfactory/ssh-agent) - Execute o `ssh-agent` com chaves SSH adicionais para acessar repositórios privados.
- [Emblemas do GitHub Actions para seu README](https://github.com/atrox/github-actions-badge)
- [GitHub Actions para projetos Python com poetry](https://github.com/abatilo/actions-poetry)
- [GitHub Actions para projetos Python com pyenv](https://github.com/gabrielfalcao/pyenv-action)
- [GitHub Actions para compilar documentos LaTeX](https://github.com/xu-cheng/latex-action)
- [Atualize bancos de dados MaxMind](https://github.com/meetup/maxmind-updater)
- [Depure com SSH via tmate](https://github.com/mxschmitt/action-tmate) - Depure a Action diretamente fornecendo uma conexão SSH.
- [Desbloqueie arquivos git-crypt](https://github.com/sliteteam/github-action-git-crypt-unlock)
- [Compilador cruzado CGO para Golang](https://github.com/crazy-max/ghaction-xgo)
- [Execute seu job em outra arquitetura: arm32, aarch64 e outras](https://github.com/uraimo/run-on-arch-action)
- [Gere um sumário](https://github.com/technote-space/toc-generator)
- [Adicione automaticamente um rótulo ou responsável a uma issue](https://github.com/Naturalclar/issue-action)
- [Action que envia uma reação LGTM como imagem ou GIF quando dizemos lgtm](https://github.com/micnncim/action-lgtm-reaction)
- [Gere números de compilação em vários escopos](https://github.com/zyborg/gh-action-buildnum)
- [Publique artefatos de release do GitHub](https://github.com/skx/github-action-publish-binaries)
- [Action de comparação do Jekyll](https://github.com/David-Byrne/jekyll-diff-action) - Compara o site Jekyll compilado após uma alteração e publica o resultado como comentário no GitHub.
- [Bot de proteção de branches](https://github.com/benjefferies/branch-protection-bot) - Desative e reative temporariamente a opção "Incluir administradores" na proteção de branches.
- [Aguarde os status dos commits](https://github.com/WyriHaximus/github-action-wait-for-status) - Aguarda até que todos os status e verificações sejam bem-sucedidos ou que algum falhe, e define a saída de status correspondente.
- [Obtenha a tag mais recente](https://github.com/WyriHaximus/github-action-get-previous-tag) - Obtenha a tag anterior do Git.
- [Crie um milestone](https://github.com/WyriHaximus/github-action-create-milestone) - Crie um novo milestone aberto com o título e a descrição informados.
- [Feche um milestone](https://github.com/WyriHaximus/github-action-close-milestone) - Feche o milestone informado.
- [Action para aplicar regras de nomenclatura de branches](https://github.com/deepakputhraya/action-branch-name)
- [Disponibilize o slug de algumas variáveis do GitHub](https://github.com/marketplace/actions/github-slug)
- [awesome-lint como uma GitHub Action](https://github.com/max/awesome-lint)
- [Edite um arquivo JSON](https://github.com/deef0000dragon1/json-edit-action)
- [Compile a documentação Slate](https://github.com/Decathlon/slate-builder-action)
- [Leia propriedades](https://github.com/christian-draeger/read-properties) - Leia valores de arquivos `.properties`.
- [Grave propriedades](https://github.com/christian-draeger/write-properties) - Grave valores em arquivos `.properties`.
- [Autotag](https://github.com/butlerlogic/action-autotag) - Gere automaticamente uma nova tag quando a versão do arquivo de manifesto (por exemplo, `package.json`) mudar.
- [Aplique modelos com Jinja2](https://github.com/cuchi/jinja2-action) - Use o mecanismo de modelos Jinja2 para gerar arquivos a partir de modelos.
- [Detecta alterações](https://github.com/UnicornGlobal/has-changes-action) - Verifique se houve alterações de código nas etapas anteriores.
- [Action Mind Your Language](https://github.com/tailaiw/mind-your-language-action) - Detecte comentários ofensivos em issues e pull requests e alerte os autores.
- [Conversor YAML/JSON/XML](https://github.com/fabasoad/yaml-json-xml-converter-action) - Converte formatos de arquivo YAML/JSON/XML entre si.
- [Detecção de conteúdo NSFW](https://github.com/fabasoad/nsfw-detection-action) - Detecte conteúdo NSFW em arquivos commitados.
- [Detecta caminhos alterados](https://github.com/MarceloPrado/has-changed-path) - Execute Actions condicionalmente com base nos caminhos alterados.
- [Linguist](https://github.com/fabasoad/linguist-action) - Verifica um repositório e gera informações sobre as linguagens usadas.
- [Chamada de voz do Twilio](https://github.com/fabasoad/twilio-voice-call-action/) - Faça uma chamada de voz pelo Twilio com o texto definido.
- [Configure o Xcode](https://github.com/maxim-lobanov/setup-xcode) - Alterne entre versões pré-instaladas do Xcode nas imagens do macOS.
- [Configure o Xamarin](https://github.com/maxim-lobanov/setup-xamarin) - Alterne entre versões pré-instaladas do Xamarin e do Mono nas imagens do macOS.
- [Action Memer](https://github.com/Bhupesh-V/memer-action) - Uma GitHub Action para memes de programação xD.
- [Configure o Cocoapods](https://github.com/maxim-lobanov/setup-cocoapods) - Configure uma versão específica do Cocoapods.
- [IP público](https://github.com/haythem/public-ip) - Consulta o endereço IP público do runner do GitHub Actions.
- [GitHub Actions para Lazarus/FPC](https://github.com/gcarreno/setup-lazarus)
- [Fax do Twilio](https://github.com/fabasoad/twilio-fax-action/) - Envia um documento por fax usando sua conta Twilio.
- [Configure ferramentas do Kubernetes](https://github.com/yokawasa/action-setup-kube-tools) - Instale ferramentas do Kubernetes (kubectl, kustomize, helm, kubeval, conftest e yq) no runner.
- [Configure o Elastic Cloud Control Tool](https://github.com/yokawasa/action-setup-ecctl) - Instale uma versão específica do ecctl no runner.
- [Script PowerShell](https://github.com/Amadevus/pwsh-script) - Execute scripts PowerShell com contextos do fluxo de trabalho (por exemplo, `$github.token`) e cmdlets; valor de retorno => saída da Action.
- [Envie e analise arquivos com VirusTotal](https://github.com/crazy-max/ghaction-virustotal)
- [Importe uma chave GPG](https://github.com/crazy-max/ghaction-import-gpg)
- [Comprima com UPX](https://github.com/crazy-max/ghaction-upx) - O compactador definitivo de executáveis.
- [Busque a nova versão do módulo Go no cache do proxy](https://github.com/andrewslotin/go-proxy-pull-action) - Garante que a versão mais recente do seu módulo Go esteja no cache do proxy. Também atualiza a documentação no pkg.go.dev após o lançamento.
- [Exclua artefatos da execução](https://github.com/marketplace/actions/delete-run-artifacts) - Exclui todos os artefatos ao final de uma execução do fluxo de trabalho.
- [Action de variáveis de ambiente do GitHub](https://github.com/FranzDiebold/github-env-vars-action) - Disponibiliza variáveis de ambiente, como nome da branch/tag, slug do repositório e slug da referência.
- [Bloqueios de GitHub Actions](https://github.com/abatilo/github-action-locks/blob/master/README.md) - Garante a execução atômica dos seus fluxos de trabalho do GitHub Actions.
- [Filtro de caminhos](https://github.com/dorny/paths-filter) - Execute Actions condicionalmente com base nos arquivos modificados por PR, branch de funcionalidade ou commits enviados.
- [Minisauras](https://github.com/TeamTigers/minisauras) -  Busca todos os arquivos JavaScript e CSS da sua branch base, minifica-os e cria um pull request em uma nova branch.
- [Site para GIF](https://github.com/PabloLec/website-to-gif) - Transforme qualquer página da web em um GIF para exibir no seu README, na documentação etc.
- [Entradas interativas - entradas de fluxo de trabalho em tempo de execução](https://github.com/boasiHQ/interactive-inputs) - Adicione entradas dinâmicas em tempo de execução aos fluxos de trabalho do GitHub Actions

#### Ambientes

- [Crie um arquivo de ambiente](https://github.com/SpicyPizza/create-envfile)
- [Exporte variáveis de ambiente globais para as etapas de compilação seguintes](https://github.com/zweitag/github-actions)
- [Defina programaticamente variáveis de ambiente para uso nas etapas seguintes](https://github.com/allenevans/set-env)
- [Instale ambientes Conda para Python](https://github.com/goanpeca/setup-miniconda)
- [Configure o NativeScript](https://github.com/hrueger/setup-nativescript)
- [Crie um arquivo de ambiente JSON](https://github.com/schdck/create-env-json)

#### Dependências

- [Instale dependências do NPM com cache](https://github.com/bahmutov/npm-install)
- [Destaque novas dependências do NPM](https://github.com/hiwelo/new-dependencies-action) - Comenta nos pull requests informações sobre dependências NPM recém-adicionadas.
- [Armazene dependências NPM em cache](https://github.com/c-hive/gha-npm-cache)
- [Armazene dependências Yarn em cache](https://github.com/c-hive/gha-yarn-cache)

#### Versionamento semântico

- [Próximas versões SemVer](https://github.com/WyriHaximus/github-action-next-semvers) - Gere as próximas versões major, minor e patch com base na versão semver informada.
- [Obtenha a versão SemVer mais recente e o nome da branch a partir de uma string de busca](https://github.com/jessicalostinspace/github-action-get-regex-branch)
- [Crie uma branch de release](https://github.com/jessicalostinspace/cut-release-action) - Cria uma branch de release com o prefixo de branch e a versão semântica opcional informados.
- [Incremente a versão semântica](https://github.com/christian-draeger/increment-semantic-version) - Incremente uma versão semântica (SemVer) conforme o tipo de release informado.

### Análise estática

- [Action do analisador estático de código PHPStan](https://github.com/OskarStark/phpstan-ga)
- [Action GraphQL Inspector](https://github.com/kamilkisiela/graphql-inspector)
- [Análise estática de PowerShell com PSScriptAnalyzer](https://github.com/devblackops/github-action-psscriptanalyzer)
- [Execute tfsec e publique a saída do reviewdog no PR](https://github.com/reviewdog/action-tfsec)

#### Testes

- [Execute testes com o Puppeteer, a API Node do Chrome headless](https://github.com/ianwalter/puppeteer)
- [xUnit Slack Reporter: envia um resumo dos testes dos relatórios xUnit para um canal do Slack](https://github.com/ivanklee86/xunit-slack-reporter)
- [Execute testes do Codeception](https://github.com/joelwmale/codeception-action)
- [Execute testes do TestCafe](https://github.com/DevExpress/testcafe-action)
- [Execute testes do Unity](https://github.com/webbertakken/unity-test-runner)
- [Execute testes E2E do Cypress](https://github.com/cypress-io/github-action)
- [Teste roles do Ansible com Molecule](https://github.com/robertdebock/molecule-action)
- [Execute testes de desempenho com artillery.io](https://github.com/kenju/github-actions-artillery)
- [Detecte testes instáveis com BuildPulse](https://github.com/Workshop64/buildpulse-action)
- [Exiba anotações de código em linha para testes do Jest](https://github.com/IgnusG/jest-report-action)
- [Execute testes do Julia](https://github.com/julia-actions/julia-runtest)

#### Lint

- [Action PHP Coding Standards Fixer](https://github.com/OskarStark/php-cs-fixer-ga)
- [Execute o Hadolint em um Dockerfile dentro de um repositório](https://github.com/burdzwastaken/hadolint-action)
- [Execute o ESLint e publique a saída do reviewdog no PR](https://github.com/reviewdog/action-eslint)
- [Linter baseado em JavaScript para arquivos \*.workflow](https://github.com/OmarTawfik/github-actions-js)
- [Analise arquivos Terraform com tflint e publique a saída do reviewdog no PR](https://github.com/reviewdog/action-tflint)
- [autopep8: Formata automaticamente código Python para seguir o guia de estilo PEP 8](https://github.com/peter-evans/autopep8)
- [Execute `ergebnis/composer-normalize` para garantir que seu projeto PHP tenha um `composer.json` normalizado](https://github.com/ergebnis/composer-normalize-action)
- [Execute `stolt/lean-package-validator` para garantir que seu pacote contenha apenas os artefatos `runtime` necessários](https://github.com/raphaelstolt/lean-package-validator-action)
- [Execute verificações de lint do Go em eventos de PR](https://github.com/ArangoGutierrez/GoLinty-Action)
- [Node.js - Execute automaticamente o script `format` e/ou `lint` usado pelo pacote](https://github.com/MarvinJWendt/run-node-formatter)
- [Stylelinter - GitHub Action que executa o stylelint](https://github.com/exelban/stylelint)
- [Execute o stylelint e publique a saída do reviewdog no PR](https://github.com/reviewdog/action-stylelint)
- [PyCodeStyle Action - uma GitHub Action que comenta no seu PR o retorno do pycodestyle (autopep8)](https://github.com/ankitvgupta/pycodestyle-action)
- [wemake-python-styleguide - o linter de Python mais rigoroso e opinativo, com saída opcional do reviewdog no PR](https://github.com/wemake-services/wemake-python-styleguide)
- [Execute o TSLint com verificações de status e anotações de diferenças nos arquivos](https://github.com/mooyoul/tslint-actions)
- [Analise commits de pull requests com commitlint](https://github.com/wagoid/commitlint-github-action)
- [Execute o vint e publique a saída do reviewdog no PR](https://github.com/reviewdog/action-vint)
- [Execute o mispell e publique a saída do reviewdog no PR](https://github.com/reviewdog/action-misspell)
- [Execute o golangci-lint e publique a saída do reviewdog no PR](https://github.com/reviewdog/action-golangci-lint)
- [Execute o shellcheck e publique a saída do reviewdog no PR](https://github.com/reviewdog/action-shellcheck)
- [Detecte linguagem insensível ou desrespeitosa na documentação Markdown](https://github.com/theashraf/alex-action)
- [Execute dotenv-linter - analisa seus arquivos .env com facilidade e oferece saída opcional do reviewdog no PR](https://github.com/wemake-services/dotenv-linter)
- [Execute dotenv-linter e publique a saída do reviewdog no PR](https://github.com/mgrachev/action-dotenv-linter)
- [Exiba e corrija automaticamente erros de lint em várias linguagens de programação](https://github.com/samuelmeuli/lint-action)
- [PHP_CodeSniffer com anotações](https://github.com/chekalsky/phpcs-action)
- [Linter para Markdown (com predefinições)](https://github.com/avto-dev/markdown-lint)
- [Correspondência de problemas do Stylelint para criar anotações](https://github.com/xt0rted/stylelint-problem-matcher)
- [Execute sqlcheck no PR para identificar antipadrões em consultas SQL](https://github.com/yokawasa/action-sqlcheck)
- [Valide metadados do Fastlane Supply com as diretrizes da Play Store](https://github.com/ashutoshgngwr/validate-fastlane-supply-metadata)
- [Execute Golint para analisar seu código Golang](https://github.com/Jerome1337/golint-action)

#### Segurança

- [Um scanner de vulnerabilidades para suas imagens Docker](https://github.com/phonito/phonito-scanner-action)
- [Aprove e mescle atualizações do Dependabot automaticamente](https://github.com/ridedott/dependabot-auto-merge-action)
- [Execute o linter de segurança dlint no seu código Python](https://github.com/xen0l/dlint-check)
- [AWS Secrets Manager Actions](https://github.com/say8425/aws-secrets-manager-actions) - Defina secrets do AWS Secrets Manager como valores de ambiente.
- [Analise documentos de políticas do AWS IAM quanto à correção e a problemas de segurança](https://github.com/xen0l/iam-lint)
- [Secret Spreader](https://github.com/webfactory/secret-spreader) - Não é exatamente uma Action, mas uma ferramenta para gerenciar Actions Secrets em uma lista de repositórios.
- [Secrets Sync Action](https://github.com/google/secrets-sync-action) - A Action sincroniza secrets entre vários repositórios.
- [Snyk Test Action](https://github.com/snyk/actions)
- [Gerencie seus secrets do GitHub Actions com uma CLI simples](https://github.com/unfor19/githubsecrets)
- [SecretHub](https://github.com/secrethub/actions) - Mantenha uma única fonte de verdade para seus secrets e carregue-os no GitHub Actions sob demanda.

#### Cobertura de código

- [Analise código com SonarCloud](https://github.com/sonarsource/sonarcloud-github-action)
- [Envie a cobertura do seu código para codecov.io](https://github.com/codecov/codecov-action)
- [Publique a cobertura de código no CodeClimate](https://github.com/paambaati/codeclimate-action)
- [Atualize o Go Report Card do repositório](https://github.com/creekorful/goreportcard-action)

### Análise dinâmica

- [Execute Gofmt para verificar a formatação do código Golang](https://github.com/Jerome1337/gofmt-action)
- [Execute Goimports para verificar a ordem dos imports do Golang](https://github.com/Jerome1337/goimports-action)

### Monitoramento

- [Audite uma página da web com os testes Lighthouse do Google Chrome](https://github.com/jakejarvis/lighthouse-action)
- [Executa o Lighthouse e publica os resultados em PRs e no Slack](https://github.com/foo-software/lighthouse-check-action)
- [Execute o Lighthouse na CI usando GitHub Actions](https://github.com/treosh/lighthouse-ci-action)
- [Benchmarking contínuo e visualização de benchmarks para Go](https://github.com/bobheadxi/gobenchdata)
- [Size Limit Action](https://github.com/andresz1/size-limit-action) - Comenta a comparação de custos do seu JS nos PRs e os rejeita se o limite for excedido.
- [Verifique o bundlephobia](https://github.com/carlesnunez/check-my-bundlephobia) - Comenta o tamanho de pacotes novos e modificados conforme o site bundlephobia.io e rejeita o PR quando o limite é ultrapassado.

### Pull requests

- [Defina revisores de PR com base nos responsáveis](https://github.com/pullreminders/assignee-to-reviewer-action)
- [Abra ou atualize um PR ao enviar para uma branch (com seleção de branch)](https://github.com/vsoch/pull-request-action)
- [Rebaseie um PR automaticamente](https://github.com/cirrus-actions/rebase)
- [Rotule um PR ao atingir uma quantidade especificada de aprovações](https://github.com/pullreminders/label-when-approved-action)
- [Adicione rótulos a um PR com base em padrões de arquivos correspondentes](https://github.com/banyan/auto-label)
- [Aprove PRs automaticamente](https://github.com/hmarr/auto-approve-action)
- [Adicione revisores automaticamente ao PR com base no arquivo de configuração](https://github.com/kentaro-m/auto-assign-action)
- [Adicione rótulos a um PR com base em padrões de nomes de branches](https://github.com/TimonVS/pr-labeler-action)
- [Adicione rótulos a um PR com base no tamanho total do diff](https://github.com/pascalgn/size-label-action)
- [Mescle automaticamente PRs que estiverem prontos](https://github.com/pascalgn/automerge-action)
- [Verifique se os PRs contêm uma referência de ticket](https://github.com/vijaykramesh/pr-lint-action)
- [Crie um PR para alterações no seu repositório no workspace do Actions](https://github.com/peter-evans/create-pull-request)
- [Analise um PR com lint](https://github.com/seferov/pr-lint-action)
- [ChatOps para PRs](https://github.com/machine-learning-apps/actions-chatops)
- [Adicione prefixos ao título e ao corpo de um PR com base no texto extraído do nome da branch](https://github.com/tzkhan/pr-update-action)
- [Bloqueie commits de autosquash](https://github.com/xt0rted/block-autosquash-commits-action)
- [Incremente a versão e crie uma tag automaticamente ao mesclar](https://github.com/anothrNick/github-tag-action)
- [Atualize automaticamente PRs com verificações desatualizadas e faça squash e merge daqueles que atendem a todas as proteções de branch](https://github.com/tibdex/autosquash)
- [Merge Pal - atualize e mescle PRs automaticamente](https://github.com/maxkomarychev/merge-pal-action)
- [Aplique uma convenção de nomenclatura ao título do pull request](https://github.com/deepakputhraya/action-pr-title)
- [Notificador de pull requests parados](https://github.com/jrylan/github-action-stuck-pr-notifier)
- [Analise o nome do pull request com commitlint (ótimo se você fizer squash merge!)](https://github.com/JulienKode/pull-request-name-linter-action)
- [Bloqueie merges de PRs quando as verificações das branches de destino falharem](https://github.com/cirrus-actions/branch-guard)
- [Obtenha capturas de tela atualizadas do site estático gerado pelo pull request](https://github.com/ssowonny/diff-pages-action)
- [Adicione rótulos dependendo de o pull request ainda estar em andamento](https://github.com/AlbertHernandez/working-label-action)
- [Ticket Check Action](https://github.com/neofinancial/ticket-check-action) - Adiciona automaticamente um número de ticket ou issue ao início de todos os títulos de pull request.
- [Análise de pull request com Regex](https://github.com/MorrisonCole/pr-lint-action)
- [Armadilhas de Pull Request](https://github.com/tylermurry/github-pr-landmine)
- [Anote um pull request do GitHub com base em um relatório XML do Checkstyle](https://github.com/staabm/annotate-pull-request-from-checkstyle)
- [Estatísticas de Pull Request](https://github.com/flowwer-dev/pull-request-stats) -  Exibe estatísticas relevantes sobre os revisores.
- [Validador de descrição de Pull Request](https://github.com/derkinderfietsen/pr-description-enforcer) - Exige uma descrição nos pull requests.

### GitHub Pages

- [Implante um site Zola no GitHub Pages](https://github.com/shalzz/zola-deploy-action)
- [Compile um site de conteúdo estático Hugo e publique-o na branch gh-pages](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages)
- [Compile um site Jekyll — com plugins Jekyll personalizados e scripts de compilação — e implante-o de volta na branch Gh-Pages](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages)
- [Metadados do Google Dataset Search](https://www.github.com/openschemas/extractors/) - E outros extratores schema.org para facilitar a descoberta de conjuntos de dados nas páginas do GitHub.
- [GitHub Actions para implantação no GitHub Pages com geradores de sites estáticos](https://github.com/peaceiris/actions-gh-pages)
- [GitHub Action para Hexo](https://github.com/heowc/action-hexo)
- [Implante estatísticas do Google Analytics no GitHub Pages](https://github.com/cristianpb/analytics-google)
- [Uma plataforma de blogs com Jupyter Notebook baseada em GitHub Actions, Pages e Jekyll](https://github.com/fastai/fastpages)
- [Implante um site estático no GitHub Pages](https://github.com/appleboy/gh-pages-action) - Implante em um diretório personalizado e ignore uma pasta ou arquivo.
- [Implante no GitHub Pages com configurações avançadas](https://github.com/crazy-max/ghaction-github-pages)

### Notificações e mensagens

- [Envie uma notificação ao Discord](https://github.com/Ilshidur/action-discord)
- [Publique uma mensagem no Slack como bot](https://github.com/pullreminders/slack-action)
- [Envie um SMS pelo GitHub Actions usando Nexmo](https://github.com/nexmo-community/nexmo-sms-action)
- [Envie um SMS pelo GitHub Actions usando Clockworksms](https://github.com/bharathvaj1995/clockwork-sms-action)
- [Envie uma mensagem pelo Telegram](https://github.com/appleboy/telegram-action)
- [Envie um arquivo ou mensagem de texto ao Discord (com cor, nome de usuário ou avatar personalizados)](https://github.com/appleboy/discord-action)
- [Colabore em tweets usando pull requests](https://github.com/gr2m/twitter-together)
- [Envie uma notificação push pelo Push by Techulus](https://github.com/techulus/push-github-action)
- [Envie e-mails com SendGrid](https://github.com/peter-evans/sendgrid-action)
- [Envie uma notificação push pelo Join](https://github.com/ShaunLWM/action-join)
- [Verificador de novas versões de pacotes npm](https://github.com/MeilCli/npm-update-check-action)
- [Verificador de novas versões de pacotes NuGet](https://github.com/MeilCli/nuget-update-check-action)
- [Verificador de novas versões de pacotes Gradle](https://github.com/MeilCli/gradle-update-check-action)
- [Envie uma notificação push pelo Pushbullet](https://github.com/ShaunLWM/action-pushbullet)
- [Crie um evento no Calendário do Outlook usando o Microsoft Graph](https://github.com/anoopt/ms-graph-create-event)
- [Monitore alterações em páginas da Wiki do GitHub e publique-as no Slack](https://github.com/benmatselby/gollum-page-watcher-action)
- [Envie um SMS usando MessageBird](https://github.com/nikitasavinov/messagebird-sms-action)
- [Responda a bots de inatividade](https://github.com/c-hive/fresh-bot)
- [Envie uma mensagem incorporada ao Discord](https://github.com/sarisia/actions-status-discord)
- [Mantenha seus PRs sincronizados com tarefas do Teamwork](https://github.com/Teamwork/github-sync)
- [Envie uma notificação ao Microsoft Teams](https://github.com/opsless/ms-teams-github-actions)

### Implantação

- [Implante no Netlify](https://github.com/netlify/actions)
- [Implante um app Probot usando Actions](https://probot.github.io/docs/deployment/#github-actions)
- [Implante uma playlist no Spotify](https://github.com/swinton/SpotHub)
- [Implante extensões do VS Code com vsce](https://github.com/lannonbr/vsce-action)
- [Limpe o cache do Cloudflare após atualizar um site](https://github.com/jakejarvis/cloudflare-purge-action)
- [Implante sua configuração DNS usando DNS Control](https://github.com/koenrh/dnscontrol-action)
- [Implante um tema no Shopify](https://github.com/pgrimaud/action-shopify)
- [Acione vários pipelines de CI do GitLab](https://github.com/appleboy/gitlab-ci-action)
- [Acione vários jobs do Jenkins](https://github.com/appleboy/jenkins-action)
- [GitHub Action para Homebrew Tap](https://github.com/izumin5210/action-homebrew-tap)
- [Copie arquivos e artefatos via SSH](https://github.com/appleboy/scp-action)
- [Execute comandos SSH remotamente](https://github.com/appleboy/ssh-action)
- [Publique um pacote de distribuição Python no PyPI](https://github.com/pypa/gh-action-pypi-publish)
- [Implante um site estático no Azure Storage](https://github.com/feeloor/azure-static-website-deploy)
- [CLI multiplataforma do Chocolatey para compilar e publicar pacotes](https://github.com/crazy-max/ghaction-chocolatey)
- [Implante uma biblioteca Pod do iOS no Cocoapods](https://github.com/michaelhenry/deploy-to-cocoapods-github-action)
- [GitHub Action para TencentCloud Serverless](https://github.com/Juliiii/action-scf)
- [Publique (pré-)releases no npm](https://github.com/epeli/npm-release/)
- [Implante um site estático no Surge.sh](https://github.com/yavisht/deploy-via-surge.sh-github-action-template)
- [GitHub Action para GoReleaser, ferramenta de automação de releases para projetos Go](https://github.com/goreleaser/goreleaser-action)
- [FTP Deploy Action: implante um projeto GitHub em um servidor FTP usando GitHub Actions](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Publique um artigo no Dev.to](https://github.com/tylerauerbeck/publish-to-dev.to-action)
- [Action para Semantic Release](https://github.com/cycjimmy/semantic-release-action)
- [Implante uma coleção no Ansible Galaxy](https://github.com/artis3n/ansible_galaxy_collection)
- [Publique um módulo no Puppet Forge](https://github.com/barnumbirr/action-forge-publish)
- [Compile e publique aplicativos Electron](https://github.com/samuelmeuli/action-electron-builder)
- [Publique um pacote Maven](https://github.com/samuelmeuli/action-maven-publish)
- [Compile e implante um tema no Ghost CMS](https://github.com/TryGhost/action-deploy-theme)
- [Implante uma role do Ansible no Ansible Galaxy](https://github.com/robertdebock/galaxy-action)
- [Publique um ou mais módulos JS em um registro](https://github.com/author/action-publish)
- [Publique um pacote com 2FA usando o Slack](https://github.com/erezrokah/2fa-with-slack-action)
- [Serialize execuções de fluxos de trabalho em pipelines de implantação contínua](https://github.com/softprops/turnstyle)
- [GitHub Action de implantação no Netlify para cada commit](https://github.com/nwtgck/actions-netlify)
- [Execute playbooks do Ansible](https://github.com/arillso/action.playbook)
- [Publique um pacote de distribuição Python no Anaconda Cloud](https://github.com/fcakyon/conda-publish-action)
- [Implante uma extensão do VS Code no Visual Studio Marketplace ou no registro Open VSX](https://github.com/HaaLeo/publish-vscode-extension)
- [Publique um vídeo do YouTube no podcast do Anchor.fm](https://github.com/Schrodinger-Hat/youtube-to-anchorfm)
- [Implante com AWS CodeDeploy](https://github.com/webfactory/create-aws-codedeploy-deployment)

#### Docker

- [Atualize a descrição de um repositório Docker Hub a partir do README.md](https://github.com/peter-evans/dockerhub-description)
- [Publique imagens Docker no GitHub Package Registry (GPR)](https://github.com/machine-learning-apps/gpr-docker-publish)
- [Atualize a "Descrição completa" de um repositório no Docker Hub](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata)
- [Compile e publique imagens Docker em qualquer registro usando Kaniko](https://github.com/outillage/kaniko-action)
- [Monitore e limite o tamanho da sua imagem Docker](https://github.com/wemake-services/docker-image-size-limit)
- [Publique imagens Docker no Amazon Elastic Container Registry (ECR)](https://github.com/appleboy/docker-ecr-action)
- [Compile e envie suas imagens Docker armazenando cada etapa em cache para reduzir o tempo de compilação](https://github.com/whoan/docker-build-with-cache-action)
- [Configure o Docker Buildx](https://github.com/crazy-max/ghaction-docker-buildx)
- [Converta o nome de uma branch ou tag em uma tag de imagem compatível com Docker](https://github.com/ankitvgupta/ref-to-tag-action/)
- [Atualize a descrição de um repositório de contêiner a partir do README.md](https://github.com/marketplace/actions/update-container-description-action) - Registros compatíveis: Docker Hub, Quay e Harbor.

#### Kubernetes

- [Implante em qualquer nuvem ou no Kubernetes usando Pulumi](https://github.com/pulumi/actions)
- [Implante no Kubernetes com kubectl](https://github.com/steebchen/kubectl)
- [Obtenha o arquivo Kubeconfig do Google Kubernetes Engine (GKE)](https://github.com/machine-learning-apps/gke-kubeconfig)
- [Personalize arquivos YAML de configuração do Kubernetes com Kustomize](https://github.com/karancode/kustomize-github-action)
- [Crie um cluster Kubernetes para testes usando Krucible](https://github.com/Krucible/krucible-github-action)

#### AWS

- [Sincronize/envie um diretório para um bucket do AWS S3](https://github.com/jakejarvis/s3-sync-action)
- [Implante código Lambda em uma função existente](https://github.com/appleboy/lambda-action)

#### Terraform

- [Gere documentação do Terraform](https://github.com/Dirrk/terraform-docs) - Usa terraform-docs para gerar documentação de módulos do Terraform.
- [Exemplo de uso do Terraform para validar e aplicar configurações administrativas do GitHub](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows)

### Serviços externos

- [Use um Jenkinsfile](https://github.com/jonico/jenkinsfile-runner-github-actions)
- [GitHub Action para Firebase](https://github.com/w9jds/firebase-action)
- [GitHub Action para Contentful Migration CLI](https://github.com/Shy/contentful-action)
- [GitHub Actions para Pixela (a-know/pi)](https://github.com/peaceiris/actions-pixela)
- [GitHub Action para Google Cloud Platform (GCP)](https://github.com/exelban/gcloud)
- [Envie arquivos para qualquer provedor de serviços OpenStack Swift](https://github.com/iksaku/openstack-swift-action)
- [GitHub Action para enviar publicações do Stack Overflow ao Slack](https://github.com/logankilpatrick/StackOverflowBot)
- [Assuma uma role da AWS](https://github.com/nordcloud/aws-assume-role/)
- [Gere uma resposta personalizada usando JSONbin](https://github.com/fabasoad/jsonbin-action)

### Ferramentas de frontend

- [Execute uma tarefa do Gradle](https://github.com/MrRamych/gradle-actions)
- [Actions de compilação JS](https://github.com/elstudio/actions-js-build) - Execute tarefas de compilação do Grunt ou Gulp e faça commit das alterações nos arquivos.
- [GitHub Action para Gatsby CLI](https://github.com/jzweifel/gatsby-cli-github-action)
- [Executa uma auditoria do WebPageTest e publica os resultados como comentário no commit](https://github.com/JCofman/webPagetestAction)
- [GitHub Actions para Hugo extended](https://github.com/peaceiris/actions-hugo)
- [Gere uma imagem OG](https://github.com/BoyWithSilverWings/generate-og-image) - Gere imagens Open Graph personalizáveis a partir de arquivos Markdown.
- [GitHub Actions para mdBook](https://github.com/peaceiris/actions-mdbook)
- [Configure o Mint](https://github.com/fabasoad/setup-mint-action) - Configure o Mint (linguagem de programação para criar aplicações de página única).
- [Implantação do Gatsby no AWS S3](https://github.com/jonelantha/gatsby-s3-action) - Implante o Gatsby no S3 (compatível com CloudFront).

### Operações de machine learning

- [Envie Argo Workflows (independente de nuvem)](https://github.com/machine-learning-apps/actions-argo)
- [Envie Argo Workflows para o GKE](https://github.com/machine-learning-apps/gke-argo)
- [Consulte resultados de rastreamento de experimentos no Weights & Biases](https://github.com/machine-learning-apps/wandb-action)
- [Execute notebooks Jupyter parametrizados](https://github.com/yaananth/run-notebook)
- [Compile, implante e execute um pipeline Kubeflow](https://github.com/NikeNano/kubeflow-github-action)
- [Transforme automaticamente um repositório de ciência de dados em um servidor Jupyter com Docker](https://github.com/jupyterhub/repo2docker-action)
- [Azure Machine Learning com GitHub Actions](https://github.com/machine-learning-apps/ml-template-azure)

### Compilação

- [run-cmake](https://github.com/lukka/run-cmake) - Action multiplataforma para compilar software C/C++ com [CMake](https://cmake.org) e [Ninja](https://ninja-build.org/).
- [run-vcpkg](https://github.com/lukka/run-vcpkg) - Action multiplataforma para compilar e instalar dependências C/C++ com [vcpkg](https://github.com/microsoft/vcpkg).
- [Compile aplicações Go para várias plataformas](https://github.com/izumin5210/action-go-crossbuild)
- [Gere ~/.m2/settings.xml para compilações Maven](https://github.com/whelk-io/maven-settings-xml-action)
- [Execute um script Pascal](https://github.com/fabasoad/pascal-action)
- [Configure o Brainfuck](https://github.com/fabasoad/setup-brainfuck-action) - Configure o interpretador Brainfuck.
- [Publique binários Go nos ativos de release do GitHub](https://github.com/wangyoucao577/go-release-action)
- [Configure COBOL](https://github.com/fabasoad/setup-cobol-action)
- [Verifique a versão do Gradle](https://github.com/madhead/check-gradle-version) - Mantenha sua versão do Gradle atualizada.

### Banco de dados

- [Configure o esquema do Cassandra](https://github.com/fabasoad/setup-cassandra-action) - Execute scripts da pasta fornecida no cluster Cassandra.

### Rede

- [Configure o ZeroTier](https://github.com/zerotier/github-action) - Conecte seu runner a uma rede ZeroTier.

### Localização

- [Encontre e corrija automaticamente erros de digitação e gramática no seu código](https://github.com/sobolevn/misspell-fixer-action)
- [Tradução](https://github.com/fabasoad/translation-action) - Traduza textos de qualquer idioma para qualquer outro idioma.

### Diversão

- [Adicione ao README algo equivalente a um botão de curtir](https://github.com/ariary/Readme-Like-Button) - Visualize a aprovação da comunidade em uma parte do seu README (pode ser usado como enquete).

### Guia de referência

- [Guia de referência de identidade visual do GitHub Actions](https://haya14busa.github.io/github-action-brandings/)

## Tutoriais

- [Implantação contínua de um app Next.js com Up](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400)
- [Convertendo Actions baseadas em Docker para JavaScript/TypeScript](https://httgp.com/converting-github-actions-from-docker-to-javascript/)
- [CI do GitHub Actions para projetos Swift/iOS](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a)
- [Trabalhando com GitHub Actions](https://jeffrafter.com/working-with-github-actions)
- [GitHub Actions para desenvolvedores Rails](https://www.youtube.com/watch?v=gGUXydw22zw)
- [Calendário do Advento do GitHub Actions](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html)
- [Implantações do Laravel sem indisponibilidade com GitHub Actions](https://atymic.dev/blog/github-actions-laravel-ci-cd/)
- [Curso Pluralsight sobre criação de GitHub Actions personalizadas](https://www.pluralsight.com/courses/building-custom-github-actions/)
- [Implantação contínua do Django no DigitalOcean com Docker e GitHub Actions](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/)
- [Implantando runners auto-hospedados do GitHub Actions com Docker](https://testdriven.io/blog/github-actions-docker/) - Implante runners auto-hospedados do GitHub Actions no DigitalOcean com Docker e Docker Swarm.
- [Configure runners auto-hospedados do GitHub Actions com escala automática em instâncias Spot da AWS](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners)
- [Entenda o essencial do GitHub Actions](https://gist.github.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6)

> Não hesite em abrir um PR se tiver mais recursos para compartilhar. Consulte [contributing.md](contributing.md) para obter mais informações.
