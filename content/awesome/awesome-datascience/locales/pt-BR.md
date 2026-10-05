<div align="center"><img src="./assets/head.jpg"></div>

# CIÊNCIA DE DADOS INCRÍVEL

[![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Contribuições são bem-vindas — consulte [`CONTRIBUTING.md`](CONTRIBUTING.md).

**Um repositório de código aberto sobre ciência de dados para aprender e aplicar conceitos na resolução de problemas do mundo real.**

Este é um caminho rápido para começar a estudar **ciência de dados**. Basta seguir as etapas para responder às perguntas: "O que é ciência de dados e o que devo estudar para aprendê-la?"

<br>

## $ [academic](https://academic.io/cli)

```
$ brew tap academic/tap
$ brew install academic
```

## Patrocinadores

[![Creavit Studio: recording, editing, and motion in one app](https://raw.githubusercontent.com/creavit-studio/files/refs/heads/main/static/crvt-banner.png)](https://creavit.studio/?utm_source=github&utm_medium=sponsorship&utm_campaign=creavit_founding_alpha&utm_content=crvt_banner)

[![Graphyn: visualize specialized agent workflows](https://raw.githubusercontent.com/fuego-wtf/graphyn-code/main/assets/graphyn-agent-workflows.png)](https://graphyn.ai/?utm_source=github&utm_medium=sponsorship&utm_campaign=graphyn_founding_alpha&utm_content=awesome_datascience_banner)



Seja um patrocinador! `github@academic.io`



## Sumário

- [O que é ciência de dados?](#what-is-data-science)
- [Por onde começar?](#where-do-i-start)
- [Agentes](#agents)
- [Projetos](#projects)
- [Recursos de aprendizado](#training-resources)
  - [Tutoriais](#tutorials)
  - [Cursos gratuitos](#free-courses)
  - [Cursos online abertos e massivos](#moocs)
  - [Programas intensivos](#intensive-programs)
  - [Faculdades e universidades](#colleges)
- [Caixa de ferramentas de ciência de dados](#the-data-science-toolbox)

  - [Algoritmos](#algorithms)
    - [Aprendizado supervisionado](#supervised-learning)
    - [Aprendizado não supervisionado](#unsupervised-learning)
    - [Aprendizado semissupervisionado](#semi-supervised-learning)
    - [Aprendizado por reforço](#reinforcement-learning)
    - [Algoritmos de mineração de dados](#data-mining-algorithms)
    - [Arquiteturas de aprendizado profundo](#deep-learning-architectures)
  - [Pacotes gerais de aprendizado de máquina](#general-machine-learning-packages)
  - [Pacotes de aprendizado profundo](#deep-learning-packages)
    - [Ecossistema PyTorch](#pytorch-ecosystem)
    - [Ecossistema TensorFlow](#tensorflow-ecosystem)
    - [Ecossistema Keras](#keras-ecosystem)
  - [Ferramentas de visualização](#visualization-tools)
  - [Ferramentas diversas](#miscellaneous-tools)
- [Literatura e mídia](#literature-and-media)
  - [Livros](#books)
    - [Ofertas de livros (afiliadas)](#book-deals-affiliated)
  - [Revistas científicas, publicações e periódicos](#journals-publications-and-magazines)
  - [Boletins informativos](#newsletters)
  - [Blogueiros](#bloggers)
  - [Apresentações](#presentations)
  - [Podcasts](#podcasts)
  - [Vídeos e canais do YouTube](#youtube-videos--channels)
- [Socialize-se](#socialize)
  - [Contas do Facebook](#facebook-accounts)
  - [Contas do Twitter](#twitter-accounts)
  - [Canais do Telegram](#telegram-channels)
  - [Comunidades do Slack](#slack-communities)
  - [Grupos do GitHub](#github-groups)
  - [Competições de ciência de dados](#data-science-competitions)
- [Diversão](#fun)
  - [Infográficos](#infographics)
  - [Conjuntos de dados](#datasets)
  - [Quadrinhos](#comics)
- [Outras listas incríveis](#other-awesome-lists)
  - [Passatempo](#hobby)

## O que é ciência de dados?
**[`^        voltar ao topo        ^`](#awesome-data-science)**

A ciência de dados é hoje um dos temas mais em alta no universo da computação e da internet. Até agora, as pessoas reuniram dados de aplicativos e sistemas; chegou o momento de analisá-los. As próximas etapas são gerar recomendações com base nos dados e fazer previsões sobre o futuro. [Aqui](https://www.quora.com/Data-Science/What-is-data-science) você encontra a grande pergunta sobre **ciência de dados** e centenas de respostas de especialistas.


| Link | Prévia |
| --- | --- |
| [Ciência de dados para iniciantes](https://github.com/microsoft/Data-Science-For-Beginners) | A Microsoft tem o prazer de oferecer um currículo de 10 semanas e 20 aulas sobre ciência de dados. |
| [O que é ciência de dados? @ O'Reilly](https://www.oreilly.com/ideas/what-is-data-science) | _Cientistas de dados combinam empreendedorismo com paciência, disposição para criar produtos de dados gradualmente, capacidade de explorar e de iterar sobre uma solução. São, por natureza, interdisciplinares. Conseguem abordar todos os aspectos de um problema, desde a coleta e preparação inicial dos dados até a obtenção de conclusões. Pensam fora da caixa para encontrar novas maneiras de enxergar o problema ou trabalhar com questões muito amplas: “aqui há muitos dados; o que você consegue fazer com eles?”_ |
| [O que é ciência de dados? @ Quora](https://www.quora.com/Data-Science/What-is-data-science) | A ciência de dados combina vários aspectos dos dados, como tecnologia, desenvolvimento de algoritmos e inferência de dados, para estudá-los, analisá-los e encontrar soluções inovadoras para problemas difíceis. Basicamente, trata-se de analisar dados e impulsionar o crescimento dos negócios de forma criativa. |
| [A profissão mais atraente do século XXI](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century) | _Hoje, cientistas de dados se assemelham aos “quants” de Wall Street das décadas de 1980 e 1990. Naquela época, pessoas com formação em física e matemática migravam para bancos de investimento e fundos de hedge, onde podiam criar algoritmos e estratégias de dados totalmente novos. Em seguida, diversas universidades desenvolveram programas de mestrado em engenharia financeira, formando uma segunda geração de profissionais mais acessível às empresas tradicionais. O padrão se repetiu no fim da década de 1990 com os engenheiros de busca, cujas habilidades raras logo passaram a ser ensinadas em cursos de ciência da computação._ |
| [Wikipedia](https://en.wikipedia.org/wiki/Data_science) | _A ciência de dados é um campo interdisciplinar que usa métodos, processos, algoritmos e sistemas científicos para extrair conhecimento e insights de dados estruturados e não estruturados. Ela está relacionada à mineração de dados, ao aprendizado de máquina e aos grandes volumes de dados._ |
| [Como se tornar cientista de dados](https://www.mastersindatascience.org/careers/data-scientist/) | _Cientistas de dados organizam grandes volumes de dados e coletam e analisam conjuntos extensos de dados estruturados e não estruturados. O trabalho combina ciência da computação, estatística e matemática. Eles analisam, processam e modelam dados e, em seguida, interpretam os resultados para criar planos de ação para empresas e outras organizações._ |
| [uma breve história de #cienciadedados](https://www.forbes.com/sites/gilpress/2013/05/28/a-very-short-history-of-data-science/) | _A história de como a profissão de cientista de dados se tornou atraente é, em grande parte, a história da união entre a disciplina madura da estatística e uma muito jovem: a ciência da computação. O termo “ciência de dados” surgiu recentemente para designar especificamente uma nova profissão, cuja missão é dar sentido aos vastos repositórios de big data. Mas interpretar dados tem uma longa história e vem sendo discutido por cientistas, estatísticos, bibliotecários, profissionais de computação e outros há anos. A linha do tempo a seguir acompanha a evolução do termo “ciência de dados”, seu uso, as tentativas de defini-lo e os termos relacionados._ |
|[Recursos de desenvolvimento de software para cientistas de dados](https://www.rstudio.com/blog/software-development-resources-for-data-scientists/)|_Cientistas de dados se concentram em interpretar os dados por meio de análises exploratórias, estatística e modelos. Desenvolvedores de software aplicam outro conjunto de conhecimentos e ferramentas. Embora o foco possa parecer diferente, equipes de ciência de dados podem se beneficiar das boas práticas de desenvolvimento de software. Controle de versão, testes automatizados e outras habilidades de desenvolvimento ajudam a criar código e ferramentas reproduzíveis e prontos para produção._|
|[Cientista de dados Roadmap](https://www.scaler.com/blog/how-to-become-a-data-scientist/)|_A ciência de dados é uma excelente opção de carreira no mundo atual, orientado por dados, em que são gerados aproximadamente 328,77 milhões de terabytes de dados por dia. Esse número só cresce, aumentando a demanda por cientistas de dados qualificados que possam usar esses dados para impulsionar os negócios._|
|[Navigating Your Path to Becoming a Cientista de dados](https://www.appliedaicourse.com/blog/how-to-become-a-data-scientist/)|_A ciência de dados é hoje uma das carreiras mais procuradas. Como as empresas dependem cada vez mais dos dados para tomar decisões, a necessidade de cientistas de dados qualificados cresceu rapidamente. Seja em empresas de tecnologia, organizações de saúde ou instituições governamentais, esses profissionais têm papel fundamental na transformação de dados brutos em insights valiosos. Mas como se tornar cientista de dados, especialmente se você está começando agora? _|

## Por onde começar?
**[`^        voltar ao topo        ^`](#awesome-data-science)**

Embora não seja estritamente indispensável, conhecer uma linguagem de programação é essencial para atuar com eficiência como cientista de dados. Atualmente, a linguagem mais popular é _Python_, seguida de perto por _R_. Python é uma linguagem de script de propósito geral, usada em uma grande variedade de áreas. R é uma linguagem específica para estatística, que já inclui muitas ferramentas estatísticas comuns.

[Python](https://python.org/) é, de longe, a linguagem mais popular na ciência, em grande parte pela facilidade de uso e pelo vibrante ecossistema de pacotes criados pela comunidade. Há dois métodos principais para instalar pacotes: Pip (executado com `pip install`), o gerenciador que acompanha o Python, e [Anaconda](https://www.anaconda.com) (executado com `conda install`), um poderoso gerenciador capaz de instalar pacotes para Python e R e baixar executáveis como o Git.

Ao contrário de R, Python não foi desenvolvido desde o início pensando em ciência de dados, mas há muitas bibliotecas de terceiros para compensar isso. Uma lista bem mais completa de pacotes aparece adiante; estes quatro são boas opções para começar sua jornada: [Scikit-Learn](https://scikit-learn.org/stable/index.html) é um pacote de ciência de dados de propósito geral que implementa os algoritmos mais populares — além de oferecer documentação abrangente, tutoriais e exemplos dos modelos implementados. Mesmo que você prefira escrever suas próprias implementações, o Scikit-Learn é uma referência valiosa para entender os detalhes de muitos algoritmos comuns. Com [Pandas](https://pandas.pydata.org/), é possível organizar e analisar dados em um formato de tabela conveniente. [Numpy](https://numpy.org/) oferece ferramentas muito rápidas para operações matemáticas, com foco em vetores e matrizes. [Seaborn](https://seaborn.pydata.org/), baseado no pacote [Matplotlib](https://matplotlib.org/), permite criar rapidamente visualizações bonitas dos dados, com várias configurações padrão úteis e uma galeria que ensina a produzir muitas visualizações comuns.

Ao iniciar sua jornada para se tornar cientista de dados, a escolha da linguagem não é particularmente importante: Python e R têm vantagens e desvantagens. Escolha a linguagem de que você gosta e confira um dos [cursos gratuitos](#free-courses) listados abaixo!

### Roteiro para iniciantes
Se você está começando, este é um caminho simples recomendado:

1. **Aprenda Python** – Comece pelo básico: variáveis, laços e funções
2. **Aprenda as bibliotecas essenciais** – Pandas, NumPy, Matplotlib e Scikit-Learn
3. **Pratique com projetos para iniciantes** – Experimente prever a sobrevivência no Titanic ou os preços de imóveis no Kaggle
4. **Aprenda os fundamentos da matemática** – Estatística, álgebra linear e probabilidade
5. **Avance para o ML** – Aprendizado supervisionado → não supervisionado → aprendizado profundo

## Agentes

Esta seção reúne frameworks e ferramentas de agentes úteis para fluxos de trabalho de ciência de dados.

### Frameworks
- [ADK-Rust](https://github.com/zavora-ai/adk-rust) - Kit de desenvolvimento de agentes de IA para Rust, pronto para produção e independente de modelos (Gemini, OpenAI, Anthropic), com vários tipos de agente (LLM, grafo, fluxo de trabalho), suporte a MCP e telemetria integrada.
- [Lumen](https://github.com/holoviz/lumen) - Framework de agentes para conversar com dados e transformar linguagem natural em SQL, pipelines de transformação e visualizações. Gera especificações declarativas que podem ser inspecionadas, editadas, reabertas em um notebook ou combinadas em um painel.

### Ferramentas
- [Frostbyte MCP](https://github.com/OzorOwn/frostbyte-mcp) - Servidor MCP que oferece 13 ferramentas de dados para agentes de IA: preços de criptomoedas em tempo real, geolocalização de IP, consultas DNS, extração de páginas da web em Markdown, execução de código e capturas de tela. Uma chave de API para mais de 40 serviços.
- [Arch Tools](https://archtools.dev) - 61 ferramentas de API de IA prontas para produção em fluxos de ciência de dados: análise de código, extração de dados da web, PLN, geração de imagens, dados de criptomoedas e busca. Compatível com API REST e protocolo MCP. [GitHub](https://github.com/Deesmo/Arch-AI-Tools)
- [Not Human Search](https://nothumansearch.ai) - Mecanismo de busca para agentes de IA que indexa mais de 9.000 ferramentas e APIs de IA e avalia a prontidão de cada uma para agentes (llms.txt, OpenAPI, MCP, ai-plugin.json). Oferece API REST e servidor MCP para descoberta programática de ferramentas. [GitHub](https://github.com/unitedideas/nothumansearch)
- [DeepAlpha](https://github.com/stefanoviana/deepalpha) - Framework de negociação de criptomoedas com IA, usando conjunto LightGBM + XGBoost com 72 atributos de ML. Precisão de 70,9% validada por walk-forward em dados fora da amostra. Compatível com Bybit e Binance. Licença MIT, disponível no [PyPI](https://pypi.org/project/deepalpha-bot/).
- [CAJAL](https://github.com/Agnuxo1/CAJAL) - Agente local de IA para gerar artigos científicos prontos para publicação, com citações reais do arXiv, estrutura IMRaD e pontuação por banca avaliadora. Funciona 100% offline pelo Ollama com modelos de 4B a 9B. Licença MIT. [HuggingFace](https://huggingface.co/Agnuxo/CAJAL-9B-P2PCLAW)
- [ai-evaluation](https://github.com/future-agi/ai-evaluation) - Framework de código aberto para avaliar LLMs e agentes, com mais de 50 métricas, avaliação complementar por LLM-as-Judge e verificadores de proteções (jailbreak, dados pessoais e injeção de prompt). Útil para pontuar resultados de RAG, trajetórias de agentes e comportamento de chamadas de função em fluxos de ciência de dados.
- [Kitaru](https://github.com/zenml-io/kitaru) - Plataforma de código aberto que registra execuções reais de agentes de IA, reproduz essas execuções diante de alterações e avalia os resultados antes da implantação.
- [Jev Social](https://github.com/socai-io/jev-social) - Agente de pesquisa social somente leitura que permite ao Jev escolher operações limitadas no Instagram, TikTok e LinkedIn, executa-as pelo CLI local do socai no Chrome e mantém evidências com links para as fontes junto a um relatório com citações.
- [YYLO Benchmark](https://github.com/yylo-dev/yylo-benchmark) - Executor de experimentos de código aberto em host confiável para tarefas históricas de agentes, prompts de programação fornecidos e fluxos de trabalho. Executa tentativas independentes e mantém os resultados, permitindo comparar posteriormente modelos, harnesses e configurações com diferentes verificações ou avaliadores. Licença MIT.
- [YYLO](https://github.com/yylo-dev/yylo) - Orquestrador de linha de comando de código aberto para agentes de programação e fluxos repetíveis, com limites tipados para tarefas, validação, mesclagem e prontidão para lançamento, além de alterações no repositório respaldadas por comprovantes. Licença MIT; instalável via npm.
- [YYLO Ledger](https://github.com/yylo-dev/yylo-ledger) - Registro de tarefas e fluxos de trabalho em linha de comando para projetos com agentes de programação: armazena o quadro Kanban e o estado das tarefas como Markdown encadeado por hashes dentro do repositório, acompanha comprovantes e arquivos e coordena fluxos tipados de mesclagem e lançamento entre worktrees de agentes. Licença MIT.

### Pesquisa e recuperação de conhecimento
- [BGPT MCP](https://bgpt.pro/mcp) - Servidor MCP que dá a agentes de IA acesso a um banco de artigos científicos criado a partir de dados experimentais brutos extraídos de estudos em texto integral. Retorna mais de 25 campos estruturados por artigo, incluindo métodos, resultados, tamanhos de amostra e pontuações de qualidade. [GitHub](https://github.com/connerlambden/bgpt-mcp)
- [Chunk Tuner](https://github.com/shantanu-deshmukh/chunktuner) - Biblioteca Python e servidor MCP de código aberto para comparar estratégias de divisão de documentos em blocos para RAG, pontuar a qualidade da recuperação e recomendar configurações para um corpus.
- [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - Skill e CLI atualizados diariamente para recuperação determinística em arXiv, PubMed/PMC e corpora selecionados de políticas dos EUA.
- [Spraay x402 Gateway](https://docs.spraay.app/#cat-research) - Gateway de pagamento x402 com 23 endpoints de pesquisa e referência para agentes de IA: Wikipedia, arXiv, PubMed, Wikidata, busca de citações acadêmicas, extração de entidades e muito mais. Pagamento por chamada em USDC na Base e na Solana — sem chaves de API ou assinaturas. Também oferece mais de 150 endpoints em 39 categorias, incluindo dados geoespaciais, inferência de IA, DeFi e computação. [GitHub](https://github.com/plagtech)

- [Suppr](https://suppr.wilddata.cn/) - Busca de literatura com IA, tradução de documentos e espaço de trabalho para pesquisa aprofundada.

### Fluxo de trabalho
**[`^        voltar ao topo        ^`](#awesome-data-science)**
- [sim](https://sim.ai) - A interface do Sim Studio é leve e intuitiva, permitindo criar e implantar rapidamente LLMs conectados às suas ferramentas favoritas.

## Projetos
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Synthetic Hospital](https://github.com/sparkcpark/synthetic_hospital) - Uma plataforma de benchmark médico e simulação de prontuários eletrônicos de saúde

## Recursos de aprendizado
**[`^        voltar ao topo        ^`](#awesome-data-science)**

Como aprender ciência de dados? Praticando ciência de dados, é claro! Tudo bem, isso talvez não ajude muito quando você está começando. Nesta seção, listamos alguns recursos de aprendizado, em ordem aproximada do menor para o maior nível de dedicação: [tutoriais](#tutorials), [cursos online abertos e massivos (MOOCs)](#moocs), [programas intensivos](#intensive-programs) e [faculdades e universidades](#colleges).


### Tutoriais
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [1000 Data Science Projects](https://cloud.blobcity.com/#/ps/explore) que você pode executar no navegador com o IPython.
- [#tidytuesday](https://github.com/rfordatascience/tidytuesday) - Um projeto semanal de dados voltado ao ecossistema R.
- [Ciência de dados do seu jeito](https://github.com/jadianes/data-science-your-way)
- [DataCamp Cheatsheets](https://www.datacamp.com/cheat-sheet) Guias de referência rápida para ciência de dados.
- [Guia de referência rápida do PySpark](https://github.com/kevinschaich/pyspark-cheatsheet)
- [Aprendizado de máquina, ciência de dados e aprendizado profundo com Python ](https://www.manning.com/livevideo/machine-learning-data-science-and-deep-learning-with-python)
- [TutorialSearch](https://tutorialsearch.io/) - Mecanismo de busca gratuito e multiplataforma que indexa mais de 50.000 tutoriais do Udemy, Skillshare, Pluralsight e outras grandes plataformas de aprendizado, em mais de 45 categorias.
- [Seu guia para alocação latente de Dirichlet](https://medium.com/@lettier/how-does-lda-work-ill-explain-using-emoji-108abf40fa7d)
- [Tutoriais com o código-fonte do livro Algoritmos Genéticos com Python, de Clinton Sheppard](https://github.com/handcraftsman/GeneticAlgorithmsWithPython)
- [Tutoriais introdutórios sobre processamento de sinais para aprendizado de máquina](https://github.com/jinglescode/python-signal-processing)
- [Realtime deployment](https://www.microprediction.com/python-1) Tutorial sobre implantação de modelos de séries temporais em Python.
- [Python para ciência de dados: um guia para iniciantes](https://learntocodewith.me/posts/python-for-data-science/)
- [Plano de estudos mínimo viável para entrevistas de aprendizado de máquina](https://github.com/khangich/machine-learning-interview)
- [Entenda e aprenda engenharia de aprendizado de máquina criando projetos sólidos](https://mlzoomcamp.com/)
- [12 projetos gratuitos de ciência de dados para praticar Python e Pandas](https://www.datawars.io/articles/12-free-data-science-projects-to-practice-python-and-pandas)
- [Melhor currículo para iniciantes em ciência de dados](https://enhancv.com/resume-examples/data-scientist/)
- [Entenda a ciência de dados com um curso em Java](https://www.alter-solutions.com/articles/java-data-science)
- [Perguntas de entrevistas sobre análise de dados (do iniciante ao avançado)](https://www.appliedaicourse.com/blog/data-analytics-interview-questions/)
- [Mais de 100 principais perguntas e respostas de entrevistas sobre ciência de dados](https://www.appliedaicourse.com/blog/data-science-interview-questions/)
- [DataDriven - perguntas de entrevista sobre SQL, Python e modelagem de dados](https://www.datadriven.io/)
- [StepByStepML](https://www.stepbystepml.com) - Calculadora interativa que visualiza passo a passo os cálculos manuais por trás dos algoritmos de aprendizado de máquina, para preparação para provas.
- [Como criar agentes de IA otimizados que realmente funcionam](https://www.freecodecamp.org/news/how-to-build-optimal-ai-agents-that-actually-work-a-handbook-for-devs/) - Manual para desenvolvedores sobre projeto e criação de agentes de IA eficazes.
- [Treine um LLM do zero](https://github.com/FareedKhan-dev/train-llm-from-scratch) - Um método simples para treinar seu LLM, desde o download dos dados até a geração de texto.

### Cursos gratuitos
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Ciência de dados](https://github.com/ossu/data-science) - Universidade da Open Source Society
- [Cientista de dados com R](https://www.datacamp.com/tracks/data-scientist-with-r)
- [Cientista de dados com Python](https://www.datacamp.com/tracks/data-scientist-with-python)
- [Curso OCW de algoritmos genéticos](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-1-introduction-and-scope/)
- [AI Expert Roadmap](https://github.com/AMAI-GmbH/AI-Expert-Roadmap) - Roteiro para se tornar especialista em inteligência artificial
- [Otimização convexa](https://www.edx.org/course/convex-optimization) - Otimização convexa (fundamentos da análise convexa; mínimos quadrados, programação linear e quadrática, programação semidefinida, minimax, volume extremo e outros problemas; condições de otimalidade, teoria da dualidade...)
- [Aprendizado a partir de dados](https://home.work.caltech.edu/telecourse.html) - Introdução ao aprendizado de máquina, abrangendo teoria básica, algoritmos e aplicações
- [Kaggle](https://www.kaggle.com/learn) - Aprenda sobre ciência de dados, aprendizado de máquina, Python etc.
- [ML Observability Fundamentals](https://arize.com/ml-observability-fundamentals/) - Aprenda a monitorar problemas de ML em produção e identificar suas causas raiz.
- [Weights & Biases Effective MLOps: Model Development](https://www.wandb.courses/courses/effective-mlops-model-development) - Curso e certificação gratuitos para criar uma máquina de ponta a ponta usando W&B
- [Python para ciência de dados, pela Scaler](https://www.scaler.com/topics/course/python-for-data-science/) - Este curso foi criado para capacitar iniciantes com as habilidades essenciais para se destacar no mundo atual orientado por dados. O currículo abrangente oferece uma base sólida em estatística, programação, visualização de dados e aprendizado de máquina.
- [MLSys-NYU-2022](https://github.com/jacopotagliabue/MLSys-NYU-2022/tree/main) - Slides, scripts e materiais do curso de aprendizado de máquina em finanças da NYU Tandon, 2022.
- [Treine e implante ML na prática](https://github.com/Paulescu/hands-on-train-and-deploy-ml) - Curso prático para treinar e implantar uma API sem servidor que prevê preços de criptomoedas.
- [LLMOps: criando aplicações reais com modelos de linguagem grandes](https://www.comet.com/site/llm-course/) - Aprenda a criar software moderno com LLMs usando as ferramentas e técnicas mais recentes da área.
- [Engenharia de prompts para modelos de visão](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Aprenda a orientar modelos avançados de visão computacional usando linguagem natural, pontos de coordenadas, caixas delimitadoras, máscaras de segmentação e até outras imagens neste curso gratuito da DeepLearning.AI.
- [Curso de ciência de dados da IBM](https://skillsbuild.org/students/course-catalog/data-science) - Recursos gratuitos para aprender o que é ciência de dados e como ela é usada em diferentes setores.
- [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) - Série gratuita de vídeos de Andrej Karpathy que aborda redes neurais desde os fundamentos — retropropagação, makemore, GPT e muito mais.



### MOOCs
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Introdução à ciência de dados da Coursera](https://www.coursera.org/specializations/data-science)
- [Ciência de dados - cursos em 9 etapas, uma especialização na Coursera](https://www.coursera.org/specializations/jhu-data-science)
- [Mineração de dados - cursos em 5 etapas, uma especialização na Coursera](https://www.coursera.org/specializations/data-mining)
- [Aprendizado de máquina - cursos em 5 etapas, uma especialização na Coursera](https://www.coursera.org/specializations/machine-learning)
- [CS 109 - ciência de dados](https://cs109.github.io/2015/)
- [OpenIntro](https://www.openintro.org/)
- [CS 171 - visualização](https://www.cs171.org/#!index.md)
- [Mineração de processos: ciência de dados em ação](https://www.coursera.org/learn/process-mining)
- [Aprendizado profundo de Oxford](https://www.cs.ox.ac.uk/projects/DeepLearn/)
- [Aprendizado profundo de Oxford - vídeo](https://www.youtube.com/playlist?list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV53Fu)
- [Aprendizado de máquina de Oxford](https://www.cs.ox.ac.uk/research/ai_ml/index.html)
- [Aprendizado de máquina da UBC - vídeo](https://www.cs.ubc.ca/~nando/540-2013/lectures.html)
- [Especialização em ciência de dados](https://github.com/DataScienceSpecialization/courses)
- [Especialização em big data da Coursera](https://www.coursera.org/specializations/big-data)
- [Pensamento estatístico para ciência de dados e análise de dados, pela edX](https://www.edx.org/course/statistical-thinking-for-data-science-and-analytic)
- [Cognitive Class AI da IBM](https://cognitiveclass.ai/)
- [Udacity - aprendizado profundo](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187)
- [Keras em movimento](https://www.manning.com/livevideo/keras-in-motion)
- [Programa profissional da Microsoft em ciência de dados](https://academy.microsoft.com/en-us/professional-program/tracks/data-science/)
- [COMP3222/COMP6246 - tecnologias de aprendizado de máquina](https://tdgunes.com/COMP6246-2019Fall/)
- [CS 231 - redes neurais convolucionais para reconhecimento visual](https://cs231n.github.io/)
- [TensorFlow na prática da Coursera](https://www.coursera.org/professional-certificates/tensorflow-in-practice)
- [Especialização em aprendizado profundo da Coursera](https://www.coursera.org/specializations/deep-learning)
- [Curso de ciência de dados 365](https://365datascience.com/)
- [Especialização em processamento de linguagem natural da Coursera](https://www.coursera.org/specializations/natural-language-processing)
- [Especialização em GANs da Coursera](https://www.coursera.org/specializations/generative-adversarial-networks-gans)
- [Ciência de dados da Codecademy](https://www.codecademy.com/learn/paths/data-science)
- [Álgebra linear](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) - Curso de álgebra linear de Gilbert Strang
- [Uma visão da álgebra linear em 2020 (G. Strang)](https://ocw.mit.edu/resources/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/)
- [Curso fundamental de Python para ciência de dados](https://intellipaat.com/academy/course/python-for-data-science-free-training/)
- [Ciência de dados: estatística e aprendizado de máquina](https://www.coursera.org/specializations/data-science-statistics-machine-learning)
- [Engenharia de aprendizado de máquina para produção (MLOps)](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)
- [Especialização em sistemas de recomendação da Universidade de Minnesota](https://www.coursera.org/specializations/recommender-systems) é uma especialização de nível intermediário/avançado voltada a sistemas de recomendação na plataforma Coursera.
- [Programa profissional de inteligência artificial de Stanford](https://online.stanford.edu/programs/artificial-intelligence-professional-program)
- [Cientista de dados com Python](https://app.datacamp.com/learn/career-tracks/data-scientist-with-python)
- [Programação com Julia](https://www.udemy.com/course/programming-with-julia/)
- [Programa Scaler de ciência de dados e aprendizado de máquina](https://www.scaler.com/data-science-course/)
- [Árvore de habilidades de ciência de dados](https://labex.io/skilltrees/data-science)
- [Ciência de dados para iniciantes - aprenda com tutor de IA](https://codekidz.ai/lesson-intro/data-science-368dbf)
- [Aprendizado de máquina para iniciantes - aprenda com tutor de IA](https://codekidz.ai/lesson-intro/machine-lear-36abfb)
- [Introdução à ciência de dados](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-data-science)
-[Primeiros passos com Python para ciência de dados](https://www.codecademy.com/learn/getting-started-with-python-for-data-science)
- [Certificado avançado do Google em análise de dados](https://grow.google/data-analytics/) – Cursos profissionais de análise de dados, estatística e fundamentos do aprendizado de máquina.
- [Maschinelle Sprachgebrauchsanalyse - Grundlagen der Korpuslinguistik](https://www.twillo.de/edu-sharing/components/collections?id=e6ce03ae-4660-49b0-be10-dcc92e71e796) - material didático sobre mineração de texto/linguística de corpus *em alemão*, financiado pelo estado federal da Renânia do Norte-Vestfália
- [Programmieren für Germanist*innen](https://www.twillo.de/edu-sharing/components/collections?id=16bac749-f10e-483f-9020-5d6365b4e092) - material didático: programação em Python *em alemão* para humanidades digitais — financiado pelo estado federal da Renânia do Norte-Vestfália
- [QuiddityML](https://quiddityml.com/?utm_source=github&utm_medium=awesome&utm_campaign=awesome-datascience) - Aulas curtas com exercícios práticos de programação e repetição espaçada, abrangendo Python, PyTorch, matemática para ML, fundamentos de ML, PLN e visão computacional.

### Programas intensivos
**[`^        voltar ao topo        ^`](#awesome-data-science)**
- [Programas de ciência de dados da Great Learning](https://www.mygreatlearning.com/data-science/courses) - Uma coleção de programas online de certificação, pós-graduação e graduação em ciência de dados e análise de dados.
- [S2DS](https://www.s2ds.org/)
- [Laboratório de ciência de dados aplicada da WorldQuant University](https://www.wqu.edu/adsl)


### Faculdades e universidades
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Uma lista de faculdades e universidades que oferecem cursos de graduação em ciência de dados.](https://github.com/ryanswanstrom/awesome-datascience-colleges)
- [Graduação em ciência de dados na Berkeley](https://ischoolonline.berkeley.edu/data-science/)
- [Graduação em ciência de dados na UVA](https://datascience.virginia.edu/)
- [Graduação em ciência de dados em Wisconsin](https://datasciencedegree.wisconsin.edu/)
- [Bacharelado em ciência de dados e aplicações](https://study.iitm.ac.in/ds/)
- [Mestrado em sistemas de informação computacional na Boston University](https://www.bu.edu/online/programs/graduate-programs/computer-information-systems-masters-degree/)
- [Mestrado em análise de negócios na ASU Online](https://asuonline.asu.edu/online-degree-programs/graduate/master-science-business-analytics/)
- [Mestrado em ciência de dados aplicada em Syracuse](https://ischool.syr.edu/academics/applied-data-science-masters-degree/)
- [Mestrado em gestão e ciência de dados na Leuphana](https://www.leuphana.de/en/graduate-school/masters-programmes/management-data-science.html)
- [Mestrado em ciência de dados na Universidade de Melbourne](https://study.unimelb.edu.au/find/courses/graduate/master-of-data-science/#overview)
- [Mestrado em ciência de dados na Universidade de Edimburgo](https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&id=902)
- [Mestrado em análise de gestão na Queen's University](https://smith.queensu.ca/grad_studies/mma/index.php)
- [Mestrado em ciência de dados no Illinois Institute of Technology](https://www.iit.edu/academics/programs/data-science-mas)
- [Mestrado em ciência de dados aplicada na Universidade de Michigan](https://www.si.umich.edu/programs/master-applied-data-science)
- [Mestrado em ciência de dados e inteligência artificial na Universidade de Tecnologia de Eindhoven](https://www.tue.nl/en/education/graduate-school/master-data-science-and-artificial-intelligence/)
- [Mestrado em ciência de dados e engenharia da computação na Universidade de Granada](https://masteres.ugr.es/datcom/)

## Caixa de ferramentas de ciência de dados
**[`^        voltar ao topo        ^`](#awesome-data-science)**

Esta seção reúne pacotes, ferramentas, algoritmos e outros recursos úteis do universo da ciência de dados.

### Algoritmos
**[`^        voltar ao topo        ^`](#awesome-data-science)**

Estes são alguns algoritmos e modelos de aprendizado de máquina e mineração de dados que ajudam a entender seus dados e extrair significado deles.

#### Três tipos de sistemas de aprendizado de máquina

- Baseados em treinamento com supervisão humana
- Baseados em aprendizado incremental em tempo real
- Baseados na comparação de pontos de dados e na detecção de padrões

### Comparação
- [datacompy](https://github.com/capitalone/datacompy) - DataComPy é um pacote para comparar dois DataFrames do Pandas.

#### Aprendizado supervisionado

- [Regressão](https://en.wikipedia.org/wiki/Regression)
- [Regressão linear](https://en.wikipedia.org/wiki/Linear_regression)
- [Mínimos quadrados ordinários](https://en.wikipedia.org/wiki/Ordinary_least_squares)
- [Regressão logística](https://en.wikipedia.org/wiki/Logistic_regression)
- [Regressão stepwise](https://en.wikipedia.org/wiki/Stepwise_regression)
- [Splines de regressão adaptativa multivariada](https://en.wikipedia.org/wiki/Multivariate_adaptive_regression_spline)
- [Regressão softmax](https://d2l.ai/chapter_linear-classification/softmax-regression.html)
- [Suavização de dispersão estimada localmente](https://en.wikipedia.org/wiki/Local_regression)
- Classificação
  - [k vizinhos mais próximos](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
  - [Máquinas de vetores de suporte](https://en.wikipedia.org/wiki/Support_vector_machine)
  - [Árvores de decisão](https://en.wikipedia.org/wiki/Decision_tree)
  - [Algoritmo ID3](https://en.wikipedia.org/wiki/ID3_algorithm)
  - [Algoritmo C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [Aprendizado por conjunto](https://scikit-learn.org/stable/modules/ensemble.html)
  - [Boosting](https://en.wikipedia.org/wiki/Boosting_(machine_learning))
  - [Stacking](https://machinelearningmastery.com/stacking-ensemble-machine-learning-with-python)
  - [Bagging](https://en.wikipedia.org/wiki/Bootstrap_aggregating)
  - [Floresta aleatória](https://en.wikipedia.org/wiki/Random_forest)
  - [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)

#### Aprendizado não supervisionado
- [Agrupamento](https://scikit-learn.org/stable/modules/clustering.html#clustering)
  - [Agrupamento hierárquico](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)
  - [k-means](https://scikit-learn.org/stable/modules/clustering.html#k-means)
  - [Agrupamento baseado em densidade](https://scikit-learn.org/stable/modules/clustering.html#dbscan)
  - [Agrupamento fuzzy](https://en.wikipedia.org/wiki/Fuzzy_clustering)
  - [Modelos de mistura](https://en.wikipedia.org/wiki/Mixture_model)
- [Redução de dimensionalidade](https://en.wikipedia.org/wiki/Dimensionality_reduction)
  - [Análise de componentes principais (PCA)](https://scikit-learn.org/stable/modules/decomposition.html#principal-component-analysis-pca)
  - [t-SNE; incorporação estocástica de vizinhos com distribuição t](https://scikit-learn.org/stable/modules/manifold.html#t-distributed-stochastic-neighbor-embedding-tsne)
  - [Análise fatorial](https://scikit-learn.org/stable/modules/decomposition.html#factor-analysis)
  - [Alocação latente de Dirichlet (LDA)](https://scikit-learn.org/stable/modules/decomposition.html#latent-dirichlet-allocation-lda)
- [Redes neurais](https://en.wikipedia.org/wiki/Neural_network)
- [Mapa auto-organizável](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Teoria da ressonância adaptativa](https://en.wikipedia.org/wiki/Adaptive_resonance_theory)
- [Modelos ocultos de Markov (HMM)](https://en.wikipedia.org/wiki/Hidden_Markov_model)

#### Aprendizado semissupervisionado

- S3VM
- [Agrupamento](https://en.wikipedia.org/wiki/Weak_supervision#Cluster_assumption)
- [Modelos generativos](https://en.wikipedia.org/wiki/Weak_supervision#Generative_models)
- [Separação de baixa densidade](https://en.wikipedia.org/wiki/Weak_supervision#Low-density_separation)
- [Regularização laplaciana](https://en.wikipedia.org/wiki/Weak_supervision#Laplacian_regularization)
- [Abordagens heurísticas](https://en.wikipedia.org/wiki/Weak_supervision#Heuristic_approaches)

#### Aprendizado por reforço

- [Aprendizado Q](https://en.wikipedia.org/wiki/Q-learning)
- [Algoritmo SARSA (estado-ação-recompensa-estado-ação)](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action)
- [Aprendizado por diferença temporal](https://en.wikipedia.org/wiki/Temporal_difference_learning#:~:text=Temporal%20difference%20(TD)%20learning%20refers,estimate%20of%20the%20value%20function.)

#### Algoritmos de mineração de dados

- [C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [k-Means](https://en.wikipedia.org/wiki/K-means_clustering)
- [SVM (máquina de vetores de suporte)](https://en.wikipedia.org/wiki/Support_vector_machine)
- [Apriori](https://en.wikipedia.org/wiki/Apriori_algorithm)
- [EM (expectativa-maximização)](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)
- [PageRank](https://en.wikipedia.org/wiki/PageRank)
- [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)
- [KNN (k vizinhos mais próximos)](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
- [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [CART (árvores de classificação e regressão)](https://en.wikipedia.org/wiki/Decision_tree_learning)
#### Algoritmos modernos de mineração de dados

- [XGBoost (extreme gradient boosting)](https://en.wikipedia.org/wiki/XGBoost)
- [LightGBM (light gradient boosting machine)](https://en.wikipedia.org/wiki/LightGBM)
- [CatBoost](https://catboost.ai/)
- [HDBSCAN (agrupamento espacial hierárquico baseado em densidade com ruído)](https://en.wikipedia.org/wiki/DBSCAN#HDBSCAN)
- [FP-Growth (algoritmo de crescimento de padrões frequentes)](https://en.wikipedia.org/wiki/Association_rule_learning#FP-growth_algorithm)
- [Floresta de isolamento](https://en.wikipedia.org/wiki/Isolation_forest)
- [Agrupamento profundo incorporado (DEC)](https://arxiv.org/abs/1511.06335)
- [TPU (padrões periódicos top-k e de alta utilidade)](https://arxiv.org/abs/2509.15732)
- [Mineração de regras sensível ao contexto (framework baseado em Transformer)](https://arxiv.org/abs/2503.11125)


#### Arquiteturas de aprendizado profundo

- [Perceptron multicamadas](https://en.wikipedia.org/wiki/Multilayer_perceptron)
- [Rede neural convolucional (CNN)](https://en.wikipedia.org/wiki/Convolutional_neural_network)
- [Rede neural recorrente (RNN)](https://en.wikipedia.org/wiki/Recurrent_neural_network)
- [Máquinas de Boltzmann](https://en.wikipedia.org/wiki/Boltzmann_machine)
- [Autoencoder](https://www.tensorflow.org/tutorials/generative/autoencoder)
- [Rede generativa adversarial (GAN)](https://developers.google.com/machine-learning/gan/gan_structure)
- [Mapas auto-organizáveis](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Transformer](https://www.tensorflow.org/text/tutorials/transformer)
- [Campo aleatório condicional (CRF)](https://towardsdatascience.com/conditional-random-fields-explained-e5b8256da776)
- [Projetos de sistemas de ML)](https://www.evidentlyai.com/ml-system-design)

### Pacotes gerais de aprendizado de máquina
**[`^        voltar ao topo        ^`](#awesome-data-science)**

* [scikit-learn](https://scikit-learn.org/)
* [scikit-multilearn](https://github.com/scikit-multilearn/scikit-multilearn)
* [sklearn-expertsys](https://github.com/tmadl/sklearn-expertsys)
* [scikit-feature](https://github.com/jundongl/scikit-feature)
* [scikit-rebate](https://github.com/EpistasisLab/scikit-rebate)
* [seqlearn](https://github.com/larsmans/seqlearn)
* [sklearn-bayes](https://github.com/AmazaspShumik/sklearn-bayes)
* [sklearn-crfsuite](https://github.com/TeamHG-Memex/sklearn-crfsuite)
* [sklearn-deap](https://github.com/rsteca/sklearn-deap)
* [sigopt_sklearn](https://github.com/sigopt/sigopt-sklearn)
* [sklearn-evaluation](https://github.com/edublancas/sklearn-evaluation)
* [scikit-image](https://github.com/scikit-image/scikit-image)
* [scikit-opt](https://github.com/guofei9987/scikit-opt)
* [scikit-posthocs](https://github.com/maximtrp/scikit-posthocs)
* [feature-engine](https://feature-engine.trainindata.com/)
* [me_fasttext](https://github.com/initial-d/me_fasttext) - Variante do FastText com uso eficiente de memória, IDs exatos de n-gramas em trie, compartilhamento de linhas sensível à estrutura e serviço via mmap para PLN com vocabulário amplo.
* [pystruct](https://github.com/pystruct/pystruct)
* [Shogun](https://www.shogun-toolbox.org/)
* [xLearn](https://github.com/aksnzhy/xlearn)
* [cuML](https://github.com/rapidsai/cuml)
* [causalml](https://github.com/uber/causalml)
* [mlpack](https://github.com/mlpack/mlpack)
* [MLxtend](https://github.com/rasbt/mlxtend)
* [modAL](https://github.com/modAL-python/modAL)
* [Sparkit-learn](https://github.com/lensacom/sparkit-learn)
* [hyperlearn](https://github.com/danielhanchen/hyperlearn)
* [dlib](https://github.com/davisking/dlib)
* [imodels](https://github.com/csinva/imodels)
* [jSciPy](https://github.com/hissain/jscipy) - Uma adaptação para Java do módulo de processamento de sinais do SciPy, com filtros, transformações e outros utilitários de computação científica.
* [RuleFit](https://github.com/christophM/rulefit)
* [pyGAM](https://github.com/dswah/pyGAM)
* [Deepchecks](https://github.com/deepchecks/deepchecks)
* [scikit-survival](https://scikit-survival.readthedocs.io/en/stable)
* [interpretable](https://pypi.org/project/interpretable)
* [XGBoost](https://github.com/dmlc/xgboost)
* [LightGBM](https://github.com/microsoft/LightGBM)
* [CatBoost](https://github.com/catboost/catboost)
* [PerpetualBooster](https://github.com/perpetual-ml/perpetual)
* [JAX](https://github.com/google/jax)
* [PhilanthroPy](https://github.com/PhilanthroPy-Project/PhilanthroPy) - Conjunto de ferramentas nativo do Scikit-learn para análise de captação de recursos de organizações sem fins lucrativos: estimadores sem vazamento de dados para propensão de doadores, abandono, doações planejadas, análise patrimonial e previsão de receita.



### Pacotes de aprendizado profundo

#### Ecossistema PyTorch
* [PyTorch](https://github.com/pytorch/pytorch)
* [TorchDR](https://github.com/TorchDR/TorchDR) - Redução de dimensionalidade em GPU e múltiplas GPUs, com API compatível com scikit-learn.
* [torchvision](https://github.com/pytorch/vision)
* [torchtext](https://github.com/pytorch/text)
* [torchaudio](https://github.com/pytorch/audio)
* [ignite](https://github.com/pytorch/ignite)
* [PyTorchNet](https://github.com/pytorch/tnt)
* [PyToune](https://github.com/GRAAL-Research/poutyne)
* [skorch](https://github.com/skorch-dev/skorch)
* [PyVarInf](https://github.com/ctallec/pyvarinf)
* [pytorch_geometric](https://github.com/pyg-team/pytorch_geometric)
* [GPyTorch](https://github.com/cornellius-gp/gpytorch)
* [pyro](https://github.com/pyro-ppl/pyro)
* [Catalyst](https://github.com/catalyst-team/catalyst)
* [pytorch_tabular](https://github.com/manujosephv/pytorch_tabular)
* [Yolov3](https://github.com/ultralytics/yolov3)
* [Yolov5](https://github.com/ultralytics/yolov5)
* [Yolov8](https://github.com/ultralytics/ultralytics)
* [OpenLanguageModel](https://github.com/openlanguagemodel/openlanguagemodel) - Biblioteca nativa do PyTorch para criar, treinar e ensinar modelos de linguagem Transformer, com arquiteturas escritas como nn.Modules comuns.

#### Ecossistema TensorFlow
* [TensorFlow](https://github.com/tensorflow/tensorflow)
* [TensorLayer](https://github.com/tensorlayer/TensorLayer)
* [TFLearn](https://github.com/tflearn/tflearn)
* [Sonnet](https://github.com/deepmind/sonnet)
* [tensorpack](https://github.com/tensorpack/tensorpack)
* [TRFL](https://github.com/deepmind/trfl)
* [Polyaxon](https://github.com/polyaxon/polyaxon)
* [NeuPy](https://github.com/itdxer/neupy)
* [tfdeploy](https://github.com/riga/tfdeploy)
* [tensorflow-upstream](https://github.com/ROCmSoftwarePlatform/tensorflow-upstream)
* [TensorFlow Fold](https://github.com/tensorflow/fold)
* [tensorlm](https://github.com/batzner/tensorlm)
* [TensorLight](https://github.com/bsautermeister/tensorlight)
* [Mesh TensorFlow](https://github.com/tensorflow/mesh)
* [Ludwig](https://github.com/ludwig-ai/ludwig)
* [TF-Agents](https://github.com/tensorflow/agents)
* [TensorForce](https://github.com/tensorforce/tensorforce)

#### Ecossistema Keras

* [Keras](https://keras.io)
* [keras-contrib](https://github.com/keras-team/keras-contrib)
* [Hyperas](https://github.com/maxpumperla/hyperas)
* [Elephas](https://github.com/maxpumperla/elephas)
* [Hera](https://github.com/keplr-io/hera)
* [Spektral](https://github.com/danielegrattarola/spektral)
* [qkeras](https://github.com/google/qkeras)
* [keras-rl](https://github.com/keras-rl/keras-rl)
* [Talos](https://github.com/autonomio/talos)

#### Ferramentas de visualização
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [altair](https://altair-viz.github.io/)
- [amcharts](https://www.amcharts.com/)
- [anychart](https://www.anychart.com/)
- [bokeh](https://bokeh.org/)
- [Comet](https://www.comet.com/site/products/ml-experiment-tracking/?utm_source=awesome-datascience)
- [slemma](https://slemma.com/)
- [cartodb](https://cartodb.github.io/odyssey.js/)
- [Cube](https://square.github.io/cube/)
- [d3plus](https://d3plus.org/)
- [Data-Driven Documents(D3js)](https://d3js.org/)
- [dygraphs](https://dygraphs.com/)
- [exhibit](https://www.simile-widgets.org/exhibit/)
- [gephi](https://gephi.org/)
- [ggplot2](https://ggplot2.tidyverse.org/)
- [Glue](https://docs.glueviz.org/en/latest/index.html)
- [Google Chart Gallery](https://developers.google.com/chart/interactive/docs/gallery)
- [Highcharts](https://www.highcharts.com/)
- [import.io](https://www.import.io/)
- [Matplotlib](https://matplotlib.org/)
- [nvd3](https://nvd3.org/)
- [Netron](https://github.com/lutzroeder/netron)
- [Openrefine](https://openrefine.org/)
- [plot.ly](https://plot.ly/)
- [raw](https://rawgraphs.io)
- [Resseract Lite](https://github.com/abistarun/resseract-lite)
- [Seaborn](https://seaborn.pydata.org/)
- [techanjs](https://techanjs.org/)
- [Timeline](https://timeline.knightlab.com/)
- [variancecharts](https://variancecharts.com/index.html)
- [vida](https://vida.io/)
- [vizzu](https://github.com/vizzuhq/vizzu-lib)
- [Wrangler](https://vis.stanford.edu/wrangler/)
- [r2d3](https://www.r2d3.us/visual-intro-to-machine-learning-part-1/)
- [NetworkX](https://networkx.org/)
- [Redash](https://redash.io/)
- [Metabase](https://www.metabase.com/)
- [C3](https://c3js.org/)
- [TensorWatch](https://github.com/microsoft/tensorwatch)
- [geomap](https://pypi.org/project/geomap/)
- [Dash](https://plotly.com/dash/)
- [MetaReview](https://metareview-8c1.pages.dev/) - Plataforma online gratuita de metanálise, com 11 gráficos estatísticos interativos em D3.js (gráfico de floresta, gráfico de funil, Galbraith, L’Abbé, Baujat etc.), 5 medidas de tamanho de efeito, triagem de literatura com IA e exportação de relatórios prontos para publicação. [github.com](https://github.com/TerryFYL/metareview)
- [torchvista](https://github.com/sachinhosmani/torchvista) - Ferramenta interativa baseada em notebooks para visualizar a propagação direta de qualquer modelo PyTorch.
- [FlexViz](https://github.com/flex-analytics/flexviz) - Biblioteca Python para painéis interativos com filtros cruzados que continuam responsivos em mais de 100 milhões de linhas, agregando dados no servidor com Polars.

### Ferramentas diversas
**[`^        voltar ao topo        ^`](#awesome-data-science)**

| Link | Descrição |
| --- | --- |
| [The Data Science Lifecycle Process](https://github.com/dslp/dslp) | O Processo do Ciclo de Vida da Ciência de Dados ajuda equipes a transformar ideias em valor de forma contínua e sustentável. O processo está documentado neste repositório.  |
| [Repositório-modelo para o ciclo de vida da ciência de dados](https://github.com/dslp/dslp-repo-template) | Repositório-modelo para projetos do ciclo de vida da ciência de dados  |
| [TabGAN](https://github.com/Diyago/Tabular-data-generation) | Geração de dados tabulares sintéticos com GANs, modelos de difusão e LLMs, usando filtragem adversarial e métricas de privacidade. |
| [RexMex](https://github.com/AstraZeneca/rexmex) | Biblioteca de métricas de recomendação de propósito geral para avaliações justas.  |
| [ChemicalX](https://github.com/AstraZeneca/chemicalx) | Biblioteca de aprendizado profundo baseada em PyTorch para pontuar pares de medicamentos.  |
| [FileShot.io](https://github.com/FileShot/FileShotZKE) | Compartilhamento seguro de arquivos com criptografia de conhecimento zero (AES-256-GCM no navegador). Não exige conta, tem licença MIT, pode ser auto-hospedado e permite definir a expiração dos links. |
| [CorpusExplorer](https://corpusexplorer.de/) | Software para linguistas de corpus e entusiastas de mineração de texto e dados. Crie seus próprios corpora em mais de 60 idiomas e use mais de 50 ferramentas e visualizações.  |
| [PyTorch Geometric Temporal](https://github.com/benedekrozemberczki/pytorch_geometric_temporal) | Aprendizado de representações em grafos dinâmicos.  |
| [Little Ball of Fur](https://github.com/benedekrozemberczki/littleballoffur) | Biblioteca de amostragem de grafos para NetworkX, com API semelhante à do Scikit-Learn.  |
| [Karate Club](https://github.com/benedekrozemberczki/karateclub) | Biblioteca de extensão para aprendizado de máquina não supervisionado no NetworkX, com API semelhante à do Scikit-Learn. |
| [ML Workspace](https://github.com/ml-tooling/ml-workspace) | IDE completa baseada na web para aprendizado de máquina e ciência de dados. O ambiente é implantado como um contêiner Docker e vem pré-carregado com bibliotecas populares de ciência de dados (como TensorFlow e PyTorch) e ferramentas de desenvolvimento (como Jupyter e VS Code). |
| [xonsh shell](https://github.com/xonsh/xonsh) | Shell baseado em Python que permite integrar, gerenciar e orquestrar bibliotecas de ciência de dados, em sua maioria escritas em Python, possibilitando criar pipelines e fluxos de trabalho baseados em código e comandos. Também pode ser usado como kernel do Jupyter Notebook.  |
| [Neptune.ai](https://neptune.ai) | Plataforma colaborativa que ajuda cientistas de dados a criar e compartilhar modelos de aprendizado de máquina. Neptune facilita o trabalho em equipe, o gerenciamento da infraestrutura, a comparação de modelos e a reprodutibilidade. |
| [steppy](https://github.com/minerva-ml/steppy) | Biblioteca Python leve para experimentação rápida e reproduzível com aprendizado de máquina. Oferece uma interface simples que permite projetar pipelines de aprendizado de máquina organizados. |
| [steppy-toolkit](https://github.com/minerva-ml/steppy-toolkit) | Coleção selecionada de redes neurais, transformers e modelos que tornam seu trabalho com aprendizado de máquina mais rápido e eficaz. |
| [Datalab do Google](https://cloud.google.com/datalab/docs/) | Explore, visualize, analise e transforme dados de forma interativa usando linguagens conhecidas, como Python e SQL. |
| [Hortonworks Sandbox](https://www.cloudera.com/downloads/hortonworks-sandbox.html) | é um ambiente Hadoop pessoal e portátil que inclui uma dúzia de tutoriais interativos sobre Hadoop. |
| [R](https://www.r-project.org/) | é um ambiente de software livre para computação estatística e criação de gráficos. |
| [Tidyverse](https://www.tidyverse.org/) | é uma coleção opinativa de pacotes R voltada à ciência de dados. Todos compartilham uma filosofia de design, uma gramática e estruturas de dados subjacentes. |
| [RStudio](https://www.rstudio.com) | IDE — uma interface de usuário poderosa para R. É gratuita, de código aberto e funciona no Windows, Mac e Linux. |
| [Python - Pandas - Anaconda](https://www.anaconda.com) | Distribuição Python totalmente gratuita, pronta para uso corporativo em processamento de dados em larga escala, análise preditiva e computação científica. |
| [Interface gráfica para o Pandas](https://github.com/adrotog/PandasGUI) | Interface gráfica para o Pandas |
| [NuriStat](https://github.com/baramgay/stat) | Alternativa gratuita e de código aberto ao SPSS: estatística para desktop baseada em menus (testes t, ANOVA, regressão, análise de sobrevivência, ROC), com importação e exportação de arquivos SPSS .sav. |
| [Polars](https://github.com/pola-rs/polars) | Biblioteca rápida de DataFrames para Rust e Python, projetada como alternativa mais veloz ao Pandas. |
| [CiteMe](https://citeme.app) | gerador gratuito de citações acadêmicas com verificador integrado que sinaliza referências inventadas ou alucinadas. Pesquisa em mais de 11 bases acadêmicas (OpenAlex, PubMed, Semantic Scholar, CrossRef, SciELO), formata em mais de 40 estilos de citação e oferece uma API pública. Não exige cadastro; disponível em inglês, espanhol, português, francês e alemão.|
| [Scikit-Learn](https://scikit-learn.org/stable/) | Aprendizado de máquina em Python |
| [NumPy](https://numpy.org/) | NumPy é essencial para computação científica com Python. Oferece suporte a matrizes e arrays multidimensionais de grande porte e inclui diversas funções matemáticas de alto nível para operar sobre eles. |
| [Vaex](https://vaex.io/) | Vaex é uma biblioteca Python que permite visualizar grandes conjuntos de dados e calcular estatísticas em alta velocidade. |
| [SciPy](https://scipy.org/) | SciPy trabalha com arrays NumPy e oferece rotinas eficientes para integração numérica e otimização. |
| [Data Science Toolbox](https://www.coursera.org/learn/data-scientists-tools) | Curso da Coursera |
| [Data Science Toolbox](https://datasciencetoolbox.org/) | Blog |
| [Wolfram Data Science Platform](https://www.wolfram.com/data-science-platform/) | Aplique a tecnologia Wolfram a dados numéricos, textuais, imagens, GIS e outros: realize uma ampla variedade de análises e visualizações de ciência de dados e gere automaticamente relatórios interativos e detalhados — tudo com a revolucionária linguagem Wolfram, baseada em conhecimento. |
| [Datadog](https://www.datadoghq.com/) | Soluções, código e DevOps para ciência de dados em larga escala. |
| [Variance](https://variancecharts.com/) | Crie visualizações de dados poderosas para a web sem escrever JavaScript. |
| [Kite Development Kit](https://kitesdk.org/docs/current/index.html) | O Kit de Desenvolvimento de Software Kite (Apache License, versão 2.0), ou simplesmente Kite, é um conjunto de bibliotecas, ferramentas, exemplos e documentação destinado a facilitar a criação de sistemas sobre o ecossistema Hadoop. |
| [Domino Data Labs](https://www.dominodatalab.com) | Execute, dimensione, compartilhe e implante seus modelos — sem infraestrutura nem configuração. |
| [Apache Flink](https://flink.apache.org/) | Uma plataforma eficiente, distribuída e de propósito geral para processamento de dados. |
| [Apache Hama](https://hama.apache.org/) | Apache Hama é um projeto de código aberto de nível superior da Apache que permite realizar análises avançadas além do MapReduce. |
| [Weka](https://ml.cms.waikato.ac.nz/weka/index.html) | Weka é uma coleção de algoritmos de aprendizado de máquina para tarefas de mineração de dados. |
| [Octave](https://www.gnu.org/software/octave/) | GNU Octave é uma linguagem interpretada de alto nível, destinada principalmente a cálculos numéricos (Matlab gratuito). |
| [Apache Spark](https://spark.apache.org/) | Computação em cluster ultrarrápida |
| [Hydrosphere Mist](https://github.com/Hydrospheredata/mist) | um serviço para disponibilizar tarefas analíticas do Apache Spark e modelos de aprendizado de máquina como serviços web em tempo real, em lote ou reativos. |
| [Data Mechanics](https://www.datamechanics.co) | Plataforma de ciência e engenharia de dados que torna o Apache Spark mais amigável para desenvolvedores e econômico. |
| [Caffe](https://caffe.berkeleyvision.org/) | Framework de aprendizado profundo |
| [Torch](https://torch.ch/) | UM FRAMEWORK DE COMPUTAÇÃO CIENTÍFICA PARA LUAJIT |
| [Framework de aprendizado profundo da Nervana baseado em Python](https://github.com/NervanaSystems/neon) | Framework de referência de aprendizado profundo da Intel® Nervana™, voltado ao melhor desempenho em qualquer hardware. |
| [Skale](https://github.com/skale-me/skale) | Processamento distribuído de dados de alto desempenho em NodeJS. |
| [Aerosolve](https://airbnb.io/aerosolve/) | Um pacote de aprendizado de máquina feito para pessoas. |
| [Intel framework](https://github.com/intel/idlf) | Intel® Framework de aprendizado profundo |
| [Datawrapper](https://www.datawrapper.de/) | Plataforma de visualização de dados de código aberto que ajuda qualquer pessoa a criar gráficos simples, corretos e incorporáveis. Também disponível em [github.com](https://github.com/datawrapper/datawrapper) |
| [Tensor Flow](https://www.tensorflow.org/) | TensorFlow é uma biblioteca de software de código aberto para inteligência de máquina. |
| [Kit de ferramentas de linguagem natural](https://www.nltk.org/) | Kit de ferramentas introdutório, porém poderoso, para processamento e classificação de linguagem natural. |
| [FunASR](https://github.com/modelscope/FunASR) | Kit de ferramentas de reconhecimento de fala de nível industrial, compatível com mais de 50 idiomas e com VAD, pontuação, diarização de locutores e detecção de emoções integrados. Inclui servidor de API compatível com OpenAI. |
| [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) | Plataforma gratuita, completa e sem código para anotação de texto e treinamento/ajuste de modelos de aprendizado profundo. Oferece suporte pronto para uso a modelos Spark NLP de reconhecimento de entidades nomeadas, classificação, extração de relações e status de afirmação. Suporte ilimitado a usuários, equipes, projetos e documentos. |
| [nlp-toolkit for node.js](https://www.npmjs.com/package/nlp-toolkit) | Este módulo abrange alguns princípios e implementações básicos de PLN. O foco principal é o desempenho. Ao trabalhar com dados de amostra ou treinamento em PLN, a memória pode se esgotar rapidamente. Por isso, cada implementação do módulo é escrita como fluxo, mantendo na memória apenas os dados que estão sendo processados naquele momento. |
| [Julia](https://julialang.org) | Linguagem dinâmica de programação de alto nível e alto desempenho para computação técnica. |
| [IJulia](https://github.com/JuliaLang/IJulia.jl) | Um backend da linguagem Julia integrado ao ambiente interativo Jupyter. |
| [Apache Zeppelin](https://zeppelin.apache.org/) | Notebook baseado na web que permite análises de dados interativas e orientadas por dados, além de documentos colaborativos com SQL, Scala e outras linguagens.  |
| [Featuretools](https://github.com/alteryx/featuretools) | Framework de código aberto para engenharia automatizada de atributos, escrito em Python. |
| [Optimus](https://github.com/hi-primus/optimus) | Limpeza, pré-processamento, engenharia de atributos, análise exploratória de dados e ML simplificado com backend PySpark.  |
| [Albumentations](https://github.com/albumentations-team/albumentations) | Biblioteca rápida e independente de frameworks para aumento de imagens, que implementa diversas técnicas de aumento. Oferece suporte imediato a classificação, segmentação e detecção. Foi usada para vencer várias competições de aprendizado profundo no Kaggle, Topcoder e workshops da CVPR. |
| [DVC](https://github.com/iterative/dvc) | Sistema de controle de versão de código aberto para ciência de dados. Ajuda a acompanhar, organizar e tornar reproduzíveis projetos de ciência de dados. Em seu uso mais básico, permite versionar e compartilhar arquivos grandes de dados e modelos. |
| [Lambdo](https://github.com/asavinov/lambdo) | é um mecanismo de fluxo de trabalho que simplifica bastante a análise de dados ao combinar em um único pipeline: (i) engenharia de atributos e aprendizado de máquina; (ii) treinamento e previsão de modelos; (iii) preenchimento de tabelas e avaliação de colunas. |
| [Feast](https://github.com/feast-dev/feast) | Um repositório de atributos para gerenciar, descobrir e acessar atributos de aprendizado de máquina. O Feast oferece uma visão consistente dos dados de atributos tanto para treinamento quanto para disponibilização de modelos. |
| [Polyaxon](https://github.com/polyaxon/polyaxon) | Uma plataforma para aprendizado de máquina e aprendizado profundo reproduzíveis e escaláveis. |
| [UBIAI](https://ubiai.tools) | Ferramenta de anotação de texto fácil de usar para equipes, com recursos abrangentes de anotação automática. Oferece suporte a NER, relações e classificação de documentos, além de anotação por OCR para rotulagem de faturas. |
| [Trains](https://github.com/allegroai/clearml) | Gerenciador de experimentos automatizado, controle de versão e DevOps para IA. |
| [Hopsworks](https://github.com/logicalclocks/hopsworks) | Plataforma de aprendizado de máquina de código aberto e intensiva em dados, com repositório de atributos. Ingira e gerencie atributos para acesso online (MySQL Cluster) e offline (Apache Hive), e treine e disponibilize modelos em escala. |
| [MindsDB](https://github.com/mindsdb/mindsdb) | MindsDB é um framework AutoML explicável para desenvolvedores. Com ele, é possível criar, treinar e usar modelos de ML de última geração com apenas uma linha de código. |
| [Lightwood](https://github.com/mindsdb/lightwood) | Framework baseado em PyTorch que divide problemas de aprendizado de máquina em blocos menores, facilmente combináveis, para criar modelos preditivos com uma única linha de código. |
| [AWS Data Wrangler](https://github.com/awslabs/aws-data-wrangler) | Pacote Python de código aberto que amplia os recursos da biblioteca Pandas na AWS, conectando DataFrames a serviços de dados da AWS (Amazon Redshift, AWS Glue, Amazon Athena, Amazon EMR etc.). |
| [Amazon Rekognition](https://aws.amazon.com/rekognition/) | O AWS Rekognition é um serviço que permite a desenvolvedores que usam a Amazon Web Services adicionar análise de imagens aos aplicativos. Catalogue ativos, automatize fluxos de trabalho e extraia significado de suas mídias e aplicações.|
| [Amazon Textract](https://aws.amazon.com/textract/) | Extraia automaticamente texto impresso, escrita à mão e dados de qualquer documento. |
| [Amazon Lookout for Vision](https://aws.amazon.com/lookout-for-vision/) | Detecte defeitos em produtos com visão computacional para automatizar a inspeção de qualidade. Identifique componentes ausentes, danos em veículos e estruturas e irregularidades para um controle de qualidade abrangente.|
| [Amazon CodeGuru](https://aws.amazon.com/codeguru/) | Automatize revisões de código e otimize o desempenho de aplicações com recomendações baseadas em ML.|
| [CML](https://github.com/iterative/cml) | Kit de ferramentas de código aberto para usar integração contínua em projetos de ciência de dados. Treine e teste modelos automaticamente em ambientes semelhantes à produção com GitHub Actions e GitLab CI, e gere relatórios visuais automaticamente em pull/merge requests. |
| [Dask](https://dask.org/) | Biblioteca Python de código aberto que facilita a migração de código analítico para sistemas de computação distribuída (big data). |
| [DuckDB](https://github.com/duckdb/duckdb) | Sistema de gerenciamento de banco de dados OLAP SQL executado no processo. |
| [Statsmodels](https://www.statsmodels.org/stable/index.html) | Framework baseado em Python para estatística inferencial, teste de hipóteses e regressão. |
| [Gensim](https://radimrehurek.com/gensim/) | Biblioteca de código aberto para modelagem de tópicos em textos em linguagem natural. |
| [spaCy](https://spacy.io/) | Kit de ferramentas de alto desempenho para processamento de linguagem natural. |
| [Grid Studio](https://github.com/ricklamers/gridstudio) | Grid Studio é um aplicativo de planilhas baseado na web, totalmente integrado à linguagem de programação Python. |
|[Manual de ciência de dados com Python](https://github.com/jakevdp/PythonDataScienceHandbook)|Manual de ciência de dados com Python: texto completo em notebooks Jupyter.|
| [Shapley](https://github.com/benedekrozemberczki/shapley) | Framework orientado por dados para quantificar o valor dos classificadores em um conjunto de modelos de aprendizado de máquina.  |
| [DAGsHub](https://dagshub.com) | Plataforma baseada em ferramentas de código aberto para gerenciamento de dados, modelos e pipelines.  |
| [Deepnote](https://deepnote.com) | Um novo tipo de notebook de ciência de dados. Compatível com Jupyter, com colaboração em tempo real e execução na nuvem. |
| [Valohai](https://valohai.com) | Plataforma MLOps que gerencia a orquestração de máquinas, a reprodutibilidade automática e a implantação. |
| [PyMC3](https://docs.pymc.io/) | Biblioteca Python para programação probabilística (inferência bayesiana e aprendizado de máquina). |
| [PyStan](https://pypi.org/project/pystan/) | Interface Python para Stan (inferência e modelagem bayesianas). |
| [hmmlearn](https://pypi.org/project/hmmlearn/) | Aprendizado não supervisionado e inferência de modelos ocultos de Markov. |
| [Chaos Genius](https://github.com/chaos-genius/chaos_genius/) | Mecanismo analítico com ML para detecção de valores discrepantes/anomalias e análise de causa raiz. |
| [PySAD](https://github.com/selimfirat/pysad) | Biblioteca Python para detecção de anomalias em dados em fluxo. |
| [Nimblebox](https://nimblebox.ai/) | Plataforma MLOps full-stack criada para ajudar cientistas de dados e profissionais de aprendizado de máquina do mundo todo a descobrir, criar e lançar aplicativos multicloud pelo navegador. |
| [Towhee](https://github.com/towhee-io/towhee) | Biblioteca Python que ajuda a codificar dados não estruturados em embeddings. |
| [LineaPy](https://github.com/LineaLabs/lineapy) | Já se frustrou ao organizar notebooks Jupyter longos e confusos? Com LineaPy, uma biblioteca Python de código aberto, bastam duas linhas de código para transformar código de desenvolvimento desorganizado em pipelines de produção. |
| [envd](https://github.com/tensorchord/envd) | 🏕️ Ambiente de desenvolvimento de aprendizado de máquina para equipes de engenharia de ciência de dados e IA/ML. |
| [Explore bibliotecas de ciência de dados](https://kandi.openweaver.com/explore/data-science) | Ferramenta de busca 🔎 para descobrir uma lista selecionada de bibliotecas populares e novas, principais autores, kits de projeto em alta, discussões, tutoriais e recursos de aprendizado. |
| [MLEM](https://github.com/iterative/mlem) | 🐶 Versione e implante seus modelos de ML seguindo os princípios de GitOps. |
| [MLflow](https://mlflow.org/) | Framework MLOps para gerenciar modelos de ML durante todo o ciclo de vida. |
| [cleanlab](https://github.com/cleanlab/cleanlab) | Biblioteca Python para IA centrada em dados e detecção automática de vários problemas em conjuntos de dados de ML. |
| [AutoGluon](https://github.com/awslabs/autogluon) | AutoML para gerar facilmente previsões precisas para dados de imagens, textos, tabelas, séries temporais e multimodais. |
| [Arize AI](https://arize.com/) | Ferramenta de observabilidade da versão comunitária do Arize AI para monitorar modelos de aprendizado de máquina em produção e identificar causas de problemas como qualidade dos dados e desvio de desempenho. |
| [Aureo.io](https://aureo.io) | Aureo.io é uma plataforma low-code voltada à criação de inteligência artificial. Ela permite criar pipelines e automações e integrá-los a modelos de IA, tudo a partir de dados básicos. |
| [ERD Lab](https://www.erdlab.io/) | Ferramenta gratuita na nuvem para criar diagramas entidade-relacionamento (ERD), desenvolvida para programadores.
| [Arize-Phoenix](https://docs.arize.com/phoenix) | MLOps em um notebook: descubra insights, identifique problemas, monitore e ajuste seus modelos. |
| [Comet](https://github.com/comet-ml/comet-examples) | Plataforma MLOps com acompanhamento de experimentos, gerenciamento de modelos em produção, registro de modelos e linhagem completa de dados para apoiar seu fluxo de trabalho de ML, do treinamento à produção. |
| [Opik](https://github.com/comet-ml/opik) | Avalie, teste e publique aplicações de LLM ao longo dos ciclos de desenvolvimento e produção. |
| [Synthical](https://synthical.com) | Ambiente colaborativo de pesquisa com tecnologia de IA. Encontre artigos relevantes, crie coleções para gerenciar bibliografias e resuma conteúdos — tudo em um só lugar. |
| [teeplot](https://github.com/mmore500/teeplot) | Ferramenta de fluxo de trabalho para organizar automaticamente resultados de visualização de dados. |
| [Streamlit](https://github.com/streamlit/streamlit) | Framework de aplicativos para projetos de aprendizado de máquina e ciência de dados. |
| [Gradio](https://github.com/gradio-app/gradio) | Crie componentes de interface personalizáveis para modelos de aprendizado de máquina. |
| [Weights & Biases](https://github.com/wandb/wandb) | Acompanhamento de experimentos, controle de versão de conjuntos de dados e gerenciamento de modelos. |
| [DVC](https://github.com/iterative/dvc) | Sistema de controle de versão de código aberto para projetos de aprendizado de máquina. |
| [Optuna](https://github.com/optuna/optuna) | Framework de software para otimização automática de hiperparâmetros. |
| [Ray Tune](https://github.com/ray-project/ray) | Biblioteca escalável para ajuste de hiperparâmetros. |
| [Apache Airflow](https://github.com/apache/airflow) | Plataforma para criar, agendar e monitorar fluxos de trabalho de forma programática. |
| [Prefect](https://github.com/PrefectHQ/prefect) | Sistema de gerenciamento de fluxos de trabalho para pilhas modernas de dados. |
| [Kedro](https://github.com/kedro-org/kedro) | Framework Python de código aberto para criar código de ciência de dados reproduzível e sustentável. |
| [Hamilton](https://github.com/dagworks-inc/hamilton) | Biblioteca leve para criar e gerenciar transformações de dados confiáveis. |
| [SHAP](https://github.com/slundberg/shap) | Abordagem baseada na teoria dos jogos para explicar o resultado de qualquer modelo de aprendizado de máquina. |
| [InterpretML](https://github.com/interpretml/interpret) | InterpretML implementa a Explainable Boosting Machine (EBM), um modelo moderno de aprendizado de máquina totalmente interpretável, baseado em modelos aditivos generalizados (GAMs). Este pacote de código aberto também oferece ferramentas de visualização para EBMs, outros modelos de caixa de vidro e explicações de modelos de caixa preta. |
| [LIME](https://github.com/marcotcr/lime) | Explicação das previsões de qualquer classificador de aprendizado de máquina. |
| [flyte](https://github.com/flyteorg/flyte) | Plataforma de automação de fluxos de trabalho para aprendizado de máquina. |
| [dbt](https://github.com/dbt-labs/dbt-core) | Ferramenta de construção de dados. |
| [zasper](https://github.com/zasper-io/zasper) | IDE turbinada para ciência de dados. |
| [skrub](https://github.com/skrub-data/skrub/) | Biblioteca Python para facilitar o pré-processamento e a engenharia de atributos em aprendizado de máquina tabular. |
| [Glyph](https://github.com/Koda-OSS/Glyph) | Biblioteca TypeScript independente de frameworks para gerar, buscar e comparar impressões digitais MinHash, possibilitando similaridade de texto, deduplicação e recuperação rápidas. |
| [Codeflash](https://www.codeflash.ai/) | Entregue código Python extremamente rápido — sempre. |
| [Hugging Face](https://huggingface.co/) | Plataforma aberta e popular para compartilhar modelos de ML e conjuntos de dados e colaborar em projetos de PLN e IA generativa. |
| [Chinese-Elite](https://github.com/anonym-g/Chinese-Elite) | Projeto de código aberto que mapeia automaticamente redes de relacionamentos analisando dados públicos com LLMs e os visualiza como um grafo interativo. |
| [Desbordante](https://github.com/desbordante/desbordante-core/) | Um criador de perfis de dados de código aberto, voltado especificamente à descoberta e validação de padrões complexos, como [regras de associação numéricas](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Numerical_Association_Rules.ipynb), [dependências diferenciais](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Differential_Dependencies.ipynb), [restrições de negação](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Denial_Constraints.ipynb), e muito mais. |
| [dna-claude-analysis](https://github.com/shmlkv/dna-claude-analysis) | Kit de ferramentas para análise de genomas pessoais, com scripts Python que analisam dados brutos de DNA em 17 categorias (riscos à saúde, ancestralidade, farmacogenômica, nutrição, psicologia e mais) e geram uma visualização HTML de página única no estilo de terminal. |
| [RunMat](https://github.com/runmat-org/runmat) | Ambiente de execução rápido com sintaxe MATLAB, execução automática em CPU/GPU e kernels de array combinados. |
| [Turbostream](https://github.com/turboline-ai/turbostream) | Interface de terminal para experimentar mecanismos de regras personalizados e análise seletiva por LLM em fluxos de dados em tempo real, sem se preocupar com infraestrutura de streaming ou contrapressão. |
| [WFGY ProblemMap](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md) | “Atlas de falhas” de código aberto com 16 problemas recorrentes em pipelines de LLM e RAG, sintomas observáveis e correções sugeridas para equipes de ciência de dados. |
| [Deploybase](https://deploybase.ai/) | Acompanhe em tempo real os preços de GPUs e LLMs em provedores de nuvem e inferência. |
| [DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze) | LLM agêntico para ciência de dados autônoma, capaz de executar sozinho uma ampla variedade de tarefas de ciência de dados sem intervenção humana. |
| [Disco](https://github.com/leap-laboratories/discovery-engine) | Análise exploratória de dados sobre-humana. Encontra interações entre atributos e efeitos de subgrupos em dados tabulares que LLMs e análises manuais não percebem — com valores-p, tamanhos de efeito e citações bibliográficas. Gratuito para dados públicos. |
| [AI for Database](https://aifordatabase.com) | Converse com seu banco de dados em linguagem natural — sem precisar de SQL. Obtenha insights instantâneos, crie painéis que se atualizam sozinhos e acione fluxos automatizados com base em alterações no banco. |
| [Crypto Pump Scanner](https://github.com/stefanoviana/deepalpha) | Bot de negociação de criptomoedas com IA e rede neural LSTM (84,6% de precisão). Detecção de pump em tempo real, modelos validados com walk-forward e suporte a várias exchanges (Bybit, Binance, OKX, Gate.io). Código aberto. |
| [Future AGI](https://github.com/future-agi/future-agi) | Plataforma de código aberto para simular, avaliar, rastrear, proteger, rotear e otimizar aplicações com LLMs e agentes de IA em um único ciclo de feedback, para que os agentes não apenas sejam monitorados, mas também se aprimorem. Pode ser auto-hospedada. Apache-2.0. |
| [ipynbtopdf](https://ipynbtopdf.xyz/) | Visualizador e exportador de notebooks Jupyter baseado no navegador, que converte notebooks `.ipynb` em PDF, HTML e Python sem instalar Python ou TeX. |



## Literatura e mídia
**[`^        voltar ao topo        ^`](#awesome-data-science)**

Esta seção inclui materiais adicionais de leitura, canais para assistir e palestras para ouvir.

### Livros
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Ciência de dados do zero: princípios fundamentais com Python](https://www.amazon.com/Data-Science-Scratch-Principles-Python-dp-1492041130/dp/1492041130/ref=dp_ob_title_bk)
- [Inteligência artificial com Python - Tutorialspoint](https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_tutorial.pdf)
- [Aprendizado de máquina do zero](https://dafriedman97.github.io/mlbook/content/introduction.html)
- [Aprendizado de máquina probabilístico: uma introdução](https://probml.github.io/pml-book/book1.html)
- [Como liderar em ciência de dados](https://www.manning.com/books/how-to-lead-in-data-science) - Acesso antecipado
- [Combatendo a perda de clientes com dados](https://www.manning.com/books/fighting-churn-with-data)
- [Ciência de dados em escala com Python e Dask](https://www.manning.com/books/data-science-with-python-and-dask)
- [Manual de ciência de dados com Python](https://jakevdp.github.io/PythonDataScienceHandbook/)
- [O manual de ciência de dados: conselhos e insights de 25 cientistas de dados incríveis](https://www.thedatasciencehandbook.com/)
- [Pense como um cientista de dados](https://www.manning.com/books/think-like-a-data-scientist)
- [Introdução à ciência de dados](https://www.manning.com/books/introducing-data-science)
- [Ciência de dados prática com R](https://www.manning.com/books/practical-data-science-with-r)
- [Ciência de dados no dia a dia](https://www.amazon.com/dp/B08TZ1MT3W/ref=cm_sw_r_cp_apa_fabc_a0ceGbWECF9A8) & [(versão em PDF mais barata)](https://gum.co/everydaydata)
- [Explorando a ciência de dados](https://www.manning.com/books/exploring-data-science) - amostra gratuita do e-book
- [Explorando a selva de dados](https://www.manning.com/books/exploring-the-data-jungle) - amostra gratuita do e-book
- [Problemas clássicos de ciência da computação em Python](https://www.manning.com/books/classic-computer-science-problems-in-python)
- [Matemática para programadores](https://www.manning.com/books/math-for-programmers) Acesso antecipado
- [R em ação, terceira edição](https://www.manning.com/books/r-in-action-third-edition) Acesso antecipado
- [Bootcamp de ciência de dados](https://www.manning.com/books/data-science-bookcamp) Acesso antecipado
- [Pensamento em ciência de dados: a próxima revolução científica, tecnológica e econômica](https://www.springer.com/gp/book/9783319950914)
- [Ciência de dados aplicada: lições para negócios orientados por dados](https://www.springer.com/gp/book/9783030118204)
- [O manual de ciência de dados](https://www.amazon.com/Data-Science-Handbook-Field-Cady/dp/1119092949)
- [Processamento essencial de linguagem natural](https://www.manning.com/books/getting-started-with-natural-language-processing) - Acesso antecipado
- [Mineração de conjuntos de dados massivos](https://www.mmds.org/) - e-book gratuito acompanhado de um curso online
- [Pandas em ação](https://www.manning.com/books/pandas-in-action) - Acesso antecipado
- [Algoritmos genéticos e programação genética](https://www.taylorfrancis.com/books/9780429141973)
- [Avanços em algoritmos evolutivos](https://www.intechopen.com/books/advances_in_evolutionary_algorithms) - Download gratuito
- [Programação genética: novas abordagens e aplicações bem-sucedidas](https://www.intechopen.com/books/genetic-programming-new-approaches-and-successful-applications) - Download gratuito
- [Algoritmos evolutivos](https://www.intechopen.com/books/evolutionary-algorithms) - Download gratuito
- [Avanços em programação genética, vol. 3](https://www0.cs.ucl.ac.uk/staff/W.Langdon/aigp3/) - Download gratuito
- [Algoritmos genéticos e computação evolutiva](https://www.talkorigins.org/faqs/genalg/genalg.html) - Download gratuito
- [Otimização convexa](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) - Livro de otimização convexa de Stephen Boyd - Download gratuito
- [Análise de dados com Python e PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark) - Acesso antecipado
- [R para ciência de dados](https://r4ds.had.co.nz/)
- [Construa uma carreira em ciência de dados](https://www.manning.com/books/build-a-career-in-data-science)
- [Bootcamp de aprendizado de máquina](https://mlbookcamp.com/) - Acesso antecipado
- [Aprendizado de máquina prático com Scikit-Learn, Keras e TensorFlow, 2ª edição](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)
- [Infraestrutura eficaz para ciência de dados](https://www.manning.com/books/effective-data-science-infrastructure)
- [MLOps na prática: como preparar modelos para produção](https://valohai.com/mlops-ebook/)
- [Análise de dados com Python e PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark)
- [Regressão: um guia amigável](https://www.manning.com/books/regression-a-friendly-guide) - Acesso antecipado
- [Sistemas de streaming: o quê, onde, quando e como do processamento de dados em larga escala](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)
- [Ciência de dados na linha de comando: encare o futuro com ferramentas testadas pelo tempo](https://www.oreilly.com/library/view/data-science-at/9781491947845/)
- [Aprendizado de máquina com Python - Tutorialspoint](https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_tutorial.pdf)
- [Aprendizado profundo](https://www.deeplearningbook.org/)
- [Projetando plataformas de dados na nuvem](https://www.manning.com/books/designing-cloud-data-platforms) - Acesso antecipado
- [Introdução ao aprendizado estatístico com aplicações em R](https://www.statlearning.com/)
- [Elementos do aprendizado estatístico: mineração de dados, inferência e previsão](https://hastie.su.domains/ElemStatLearn/)
- [Aprendizado profundo com PyTorch](https://www.simonandschuster.com/books/Deep-Learning-with-PyTorch/Eli-Stevens/9781617295263)
- [Redes neurais e aprendizado profundo](https://neuralnetworksanddeeplearning.com)
- [Livro de receitas de aprendizado profundo](https://www.oreilly.com/library/view/deep-learning-cookbook/9781491995839/)
- [Introdução ao aprendizado de máquina com Python](https://www.oreilly.com/library/view/introduction-to-machine/9781449369880/)
- [Inteligência artificial: fundamentos de agentes computacionais, 2ª edição](https://artint.info/index.html) - versão HTML gratuita
- [A busca pela inteligência artificial: uma história de ideias e conquistas](https://ai.stanford.edu/~nilsson/QAI/qai.pdf) - Download gratuito
- [Algoritmos de grafos para ciência de dados](https://www.manning.com/books/graph-algorithms-for-data-science) - Acesso antecipado
- [Data Mesh em ação](https://www.manning.com/books/data-mesh-in-action) - Acesso antecipado
- [Julia para análise de dados](https://www.manning.com/books/julia-for-data-analysis) - Acesso antecipado
- [Inferência causal para ciência de dados](https://www.manning.com/books/julia-for-data-analysis) - Acesso antecipado
- [Desafios de expressões regulares e assistentes de programação com IA](https://www.manning.com/books/regular-expression-puzzles-and-ai-coding-assistants) por David Mertz
- [Mergulhe no aprendizado profundo](https://d2l.ai/)
- [Dados para todos](https://www.manning.com/books/data-for-all)
- [Aprendizado de máquina interpretável: um guia para explicar modelos de caixa preta](https://christophm.github.io/interpretable-ml-book/) - versão gratuita no GitHub
- [Fundamentos da ciência de dados](https://www.cs.cornell.edu/jeh/book.pdf) Download gratuito
- [Comet para ciência de dados: aprimore sua capacidade de gerenciar e otimizar o ciclo de vida do seu projeto de ciência de dados](https://www.amazon.com/Comet-Data-Science-Enhance-optimize/dp/1801814430)
- [Engenharia de software para cientistas de dados](https://www.manning.com/books/software-engineering-for-data-scientists) - Acesso antecipado
- [Julia para ciência de dados](https://www.manning.com/books/julia-for-data-science) - Acesso antecipado
- [Introdução ao aprendizado estatístico](https://www.statlearning.com/) - página de download
- [Aprendizado de máquina para iniciantes absolutos](https://www.amazon.in/Machine-Learning-Absolute-Beginners-Introduction-ebook/dp/B07335JNW1)
- [Unindo negócios, dados e código: projetando produtos de dados com JSON Schema](https://learning.oreilly.com/library/view/unifying-business-data/9781098144999/)
- [Desvendando Bayes](https://www.manning.com/books/grokking-bayes)
- [Aprendizado de máquina: perguntas e IA](https://sebastianraschka.com/books/ml-q-and-ai)
- [JavaScript para ciência de dados](https://third-bit.com/js4ds/) - página HTML gratuita
- [Ciência de dados aplicada](https://angewandtedatascience.de/) - livro em alemão sobre ciência de dados aplicada
- [A matemática por trás da inteligência artificial](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book): Um livro gratuito do FreeCodeCamp que ensina a matemática por trás da IA em linguagem simples, sob a perspectiva da engenharia.
- [Ciência de dados para executivos](https://leanpub.com/eds): Um guia de alto nível para gerenciar equipes e projetos de ciência de dados.
- [Introdução à estatística moderna](https://leanpub.com/imstat): Livro didático moderno e de acesso aberto sobre estatística, com forte ênfase em aplicações de ciência de dados.
- [A arte da ciência de dados](https://bookdown.org/rdpeng/artofdatascience/): Foca na “arte” da análise de dados: como fazer as perguntas certas e aprimorá-las.

#### Ofertas de livros (afiliadas)

- [Promoção de e-books - economize até 45%](https://www.manning.com/?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=ebook_sale_8_8_22)

- [Aprendizado de máquina causal](https://www.manning.com/books/causal-machine-learning?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ness_causal_7_26_22&a_aid=mikrobusiness&a_bid=43a2198b
)
- [Gerenciamento de projetos de ML](https://www.manning.com/books/managing-machine-learning-projects?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_thompson_managing_6_14_22)
- [Inferência causal para ciência de dados](https://www.manning.com/books/causal-inference-for-data-science?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ruizdevilla_causal_6_6_22)
- [Dados para todos](https://www.manning.com/books/data-for-all?utm_source=mikrobusiness&utm_medium=affiliate)

### Revistas científicas, publicações e periódicos
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [ICML](https://icml.cc/2015/) - Conferência Internacional sobre Aprendizado de Máquina
- [GECCO](https://gecco-2019.sigevo.org/index.html/HomePage) - Conferência de Computação Genética e Evolutiva (GECCO)
- [epjdatascience](https://epjdatascience.springeropen.com/)
- [Journal of Data Science](https://jds-online.org/journal/JDS) - uma revista internacional dedicada a aplicações de métodos estatísticos em larga escala
- [Pesquisa sobre big data](https://www.journals.elsevier.com/big-data-research)
- [Revista de big data](https://journalofbigdata.springeropen.com/)
- [Big data e sociedade](https://journals.sagepub.com/home/bds)
- [Revista de ciência de dados](https://www.jstage.jst.go.jp/browse/dsj)
- [datatau.com/news](https://www.datatau.com/news) - Como o Hacker News, mas voltado a dados
- [Quadro do Trello sobre ciência de dados](https://trello.com/b/rbpEfMld/data-science)
- [Tópico de ciência de dados no Medium](https://medium.com/tag/data-science) - Publicações sobre ciência de dados no Medium
- [Tópico de algoritmos genéticos do Towards Data Science](https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3#:~:text=A%20genetic%20algorithm%20is%20a,offspring%20of%20the%20next%20generation.) -Publicações sobre algoritmos genéticos no Towards Data Science
- [Maxim AI](https://getmaxim.ai). Ferramenta para simulação, avaliação e observabilidade de agentes de IA.
- [8bitconcepts](https://8bitconcepts.com/) - Pesquisa e análise do setor de IA, com artigos sobre preços de IA, adoção empresarial e frameworks de avaliação.

### Boletins informativos
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [AI Weekly](https://aiweekly.co) - Boletim selecionado de inteligência artificial, com especialistas do setor abordando modelos, financiamento, políticas e aplicações. Publicado 3 vezes por semana desde 2017, com mais de 40 mil assinantes.
- [DataTalks.Club](https://datatalks.club). Um boletim semanal sobre temas relacionados a dados. [Arquivo](https://us19.campaign-archive.com/home/?u=0d7822ab98152f5afc118c176&id=97178021aa).
- [The Analytics Engineering Roundup](https://roundup.getdbt.com/about). Um boletim informativo sobre ciência de dados. [Arquivo](https://roundup.getdbt.com/archive).
- [Techpresso](https://dupple.com/techpresso). Boletim diário gratuito que cobre os avanços mais importantes em IA, ML e tecnologia. [Arquivo](https://dupple.com/techpresso).
- [DiamantAI](https://diamantai.substack.com). Engenharia prática de IA e IA generativa explicadas de forma simples: RAG, agentes e padrões de aplicação de LLM para quem desenvolve.
- [Bamboo Weekly](https://www.bambooweekly.com) - Exercícios semanais de Pandas baseados em acontecimentos atuais e dados públicos do mundo real, com soluções completas. Edições com mais de dois anos são gratuitas, assim como as duas primeiras perguntas e respostas das edições atuais. [Arquivo](https://www.bambooweekly.com/archive/).

### Listas de discussão por e-mail
**[`^        voltar ao topo        ^`](#awesome-data-science)**
- [Grupo de trabalho - engenharia de software de pesquisa em humanidades digitais](https://www.listserv.dfn.de/sympa/info/ag-dhrse). Esta é a lista de discussão do grupo de trabalho de Engenharia de Software de Pesquisa em Humanidades Digitais (DH-RSE).

### Blogueiros
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Wes McKinney](https://wesmckinney.com/archives.html) - Arquivo de Wes McKinney.
- [Matthew Russell](https://miningthesocialweb.com/) - Minerando a web social.
- [Greg Reda](https://www.gregreda.com/) - Blog pessoal de Greg Reda
- [Julia Evans](https://jvns.ca/) - Ex-aluna do Recurse Center
- [Hakan Kardas](https://www.cse.unr.edu/~hkardes/) - Página pessoal na web
- [Sean J. Taylor](https://seanjtaylor.com/) - Página pessoal na web
- [Drew Conway](https://drewconway.com/) - Página pessoal na web
- [Hilary Mason](https://hilarymason.com/) - Página pessoal na web
- [Noah Iliinsky](https://complexdiagrams.com/) - Blog pessoal
- [Matt Harrison](https://hairysun.com/) - Blog pessoal
- [Vamshi Ambati](https://allthingsds.wordpress.com/) - AllThings Data Science
- [Prash Chan](https://www.mdmgeek.com/) - Blog de tecnologia sobre gerenciamento de dados mestres e todas as novidades relacionadas
- [Clare Corthell](https://datasciencemasters.org/) - O mestrado de código aberto em ciência de dados
- [Datawrangling](https://www.datawrangling.org) por Peter Skomoroch. APRENDIZADO DE MÁQUINA, MINERAÇÃO DE DADOS E MUITO MAIS
- [Quora Data Science](https://www.quora.com/topic/Data-Science) - Perguntas e respostas de especialistas sobre ciência de dados
- [Siah](https://openresearch.wordpress.com/) doutorando em Berkeley
- [Louis Dorard](https://www.ownml.co/blog/) um profissional de tecnologia apaixonado pela web e por dados, grandes e pequenos
- [Machine Learning Mastery](https://machinelearningmastery.com/) sobre ajudar programadores profissionais a aplicar com confiança algoritmos de aprendizado de máquina para resolver problemas complexos.
- [Daniel Forsyth](https://www.danielforsyth.me/) - Blog pessoal
- [Data Science Weekly](https://www.datascienceweekly.org/) - Blog semanal de notícias
- [Revolution Analytics](https://blog.revolutionanalytics.com/) - Blog de ciência de dados
- [R Bloggers](https://www.r-bloggers.com/) - R Bloggers
- [O quant prático](https://practicalquant.blogspot.com/) Big data
- [Mais um blog de dados](https://yet-another-data-blog.blogspot.com/) Mais um blog de dados
- [KD Nuggets](https://www.kdnuggets.com/) Mineração de dados, análise, big data e ciência de dados — não é um blog, mas um portal
- [Meta Brown](https://www.metabrown.com/blog/) - Blog pessoal
- [Cientista de dados](https://datascientists.com/) está construindo a cultura de cientistas de dados.
- [O que é big data?](https://whatsthebigdata.com/) é parte, tudo ou muito mais que o descrito acima; este blog explora seu impacto na tecnologia da informação, no mundo dos negócios, em órgãos governamentais e em nossas vidas.
- [Tevfik Kosar](https://magnus-notitia.blogspot.com/) - Magnus Notitia
- [Novo cientista de dados](https://newdatascientist.blogspot.com/) Como uma cientista social mergulha no mundo do big data
- [Harvard Data Science](https://harvarddatascience.com/) - Reflexões sobre computação estatística e visualização
- [Ciência de dados 101](https://ryanswanstrom.com/datascience101/) - Aprendendo a ser cientista de dados
- [Kaggle Past Solutions](https://www.chioka.in/kaggle-competition-solutions/)
- [DataScientistJourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [Blog de visualização dos táxis de Nova York](https://chriswhong.github.io/nyctaxi/)
- [Data-Mania](https://www.data-mania.com/)
- [Data-Magnum](https://data-magnum.com/)
- [datascopeanalytics](https://datascopeanalytics.com/blog/)
- [Transformação digital](https://tarrysingh.com/)
- [datascientistjourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [Blog Data Mania](https://www.data-mania.com/blog/) - [A gaveta de arquivos](https://chris-said.io/) - blog científico de Chris Said
- [Página de Emilio Ferrara](https://www.emilio.ferrara.name/)
- [DataNews](https://datanews.tumblr.com/)
- [Reddit TextMining](https://www.reddit.com/r/textdatamining/)
- [Periscopic](https://periscopic.com/#!/news)
- [Hilary Parker](https://hilaryparker.com/)
- [Histórias de dados](https://datastori.es/)
- [Laboratório de ciência de dados](https://datasciencelab.wordpress.com/)
- [Significado de](https://www.kennybastani.com/)
- [Aventuras na terra dos dados](https://blog.smola.org)
- [Dataclysm](https://theblog.okcupid.com/)
- [FlowingData](https://flowingdata.com/) - Visualização e estatística
- [Calculated Risk](https://www.calculatedriskblog.com/)
- [O'reilly Learning Blog](https://www.oreilly.com/content/topics/oreilly-learning/)
- [Dominodatalab](https://blog.dominodatalab.com/)
- [i am trask](https://iamtrask.github.io/) - Um blog sobre a arte do aprendizado de máquina
- [Manual prático de ciência de dados](https://datasciencevademecum.wordpress.com/) - Manual e receitas para soluções orientadas por dados para problemas do mundo real
- [Dataconomy](https://dataconomy.com/) - Um blog sobre a economia de dados emergente
- [Springboard](https://www.springboard.com/blog/) - Um blog com recursos para quem aprende ciência de dados
- [Analytics Vidhya](https://www.analyticsvidhya.com/) - Um site completo com material de estudo sobre ciência de dados e análise de dados.
- [Occam's Razor](https://www.kaushik.net/avinash/) - Voltado à análise da web.
- [Data School](https://www.dataschool.io/) - Tutoriais de ciência de dados para iniciantes!
- [Colah's Blog](https://colah.github.io) - Blog para entender redes neurais!
- [Sebastian's Blog](https://ruder.io/#open) - Blog sobre PLN e aprendizado por transferência!
- [Distill](https://distill.pub) - Dedicado a explicações claras sobre aprendizado de máquina!
- [Chris Albon's Website](https://chrisalbon.com/) - Anotações sobre ciência de dados e IA
- [Andrew Carr](https://andrewnc.github.io/blog/blog.html) - Ciência de dados com linguagens de programação esotéricas
- [floydhub](https://blog.floydhub.com/introduction-to-genetic-algorithms/) - Blog sobre algoritmos evolutivos
- [Jingles](https://jinglescode.github.io/) - Resenhas e extração de conceitos essenciais de artigos acadêmicos
- [nbshare](https://www.nbshare.io/notebooks/data-science/) - Notebooks de ciência de dados
- [Loic Tetrel](https://ltetrel.github.io/) - Blog de ciência de dados
- [Chip Huyen's Blog](https://huyenchip.com/blog/) - Engenharia de ML, MLOps e uso de ML em startups
- [Maria Khalusova](https://www.mariakhalusova.com/) - Blog de ciência de dados
- [Aditi Rastogi](https://medium.com/@aditi2507rastogi) - Blog sobre ML, aprendizado profundo e ciência de dados
- [Santiago Basulto](https://medium.com/@santiagobasulto) - Ciência de dados com Python
- [Akhil Soni](https://medium.com/@akhil0435) - ML, aprendizado profundo e ciência de dados
- [Akhil Soni](https://akhilworld.hashnode.dev/) - ML, aprendizado profundo e ciência de dados
- [Applied AI Blogs](https://www.appliedaicourse.com/blog/) - Artigos aprofundados sobre conceitos de IA, aprendizado de máquina e ciência de dados, com aplicações práticas.
- [Scaler Blogs](https://www.scaler.com/blog/) - Conteúdo educativo sobre desenvolvimento de software, IA e crescimento profissional em tecnologia.
- [Mlu github](https://mlu-explain.github.io/) - Mlu foi desenvolvido pela Amazon para ajudar pessoas na área de ML; aqui você pode aprender desde o básico com diagramas interativos
- [Jan Oliver Rüdiger](https://notesjor.de/) - ML, aprendizado profundo e ciência de dados — com foco em mineração de texto e dados

### Apresentações
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Como se tornar cientista de dados](https://www.slideshare.net/ryanorban/how-to-become-a-data-scientist)
- [Introdução à ciência de dados](https://www.slideshare.net/NikoVuokko/introduction-to-data-science-25391618)
- [Introdução à ciência de dados para big data empresarial](https://www.slideshare.net/pacoid/intro-to-data-science-for-enterprise-big-data)
- [Como entrevistar um cientista de dados](https://www.slideshare.net/dtunkelang/how-to-interview-a-data-scientist)
- [Como compartilhar dados com um estatístico](https://github.com/jtleek/datasharing)
- [A ciência de uma grande carreira em ciência de dados](https://www.slideshare.net/katemats/the-science-of-a-great-career-in-data-science)
- [O que faz um cientista de dados?](https://www.slideshare.net/datasciencelondon/big-data-sorry-data-science-what-does-a-data-scientist-do)
- [Criando startups de dados: rapidez, escala e foco](https://www.slideshare.net/medriscoll/driscoll-strata-buildingdatastartups25may2011clean)
- [Como vencer competições de ciência de dados com aprendizado profundo](https://www.slideshare.net/0xdata/how-to-win-data-science-competitions-with-deep-learning)
- [Cientista de dados full-stack](https://www.slideshare.net/AlexeyGrigorev/fullstack-data-scientist)

### Podcasts
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [IA em casa](https://podcasts.apple.com/us/podcast/data-science-at-home/id1069871378)
- [IA hoje](https://www.cognilytica.com/aitoday/)
- [Aprendizado adversarial](https://adversariallearning.com/)
- [Ciência de dados na hora do chai](https://www.youtube.com/playlist?list=PLLvvXm0q8zUbiNdoIazGzlENMXvZ9bd3x)
- [Cadeia de pensamento](https://www.chainofthought.show/)
- [Podcast de engenharia de dados](https://www.dataengineeringpodcast.com/)
- [Ciência de dados em casa](https://datascienceathome.com/)
- [Encontro de ciência de dados](https://community.alteryx.com/t5/Data-Science-Mixer/bg-p/mixer)
- [Cético de dados](https://dataskeptic.com/)
- [Histórias de dados](https://datastori.es/)
- [Datacast](https://jameskle.com/writes/category/Datacast)
- [DataFramed](https://www.datacamp.com/community/podcast)
- [DataTalks.Club](https://anchor.fm/datatalksclub)
- [Descida do gradiente](https://wandb.ai/fully-connected/gradient-descent)
- [Aprendizado de máquina 101](https://www.learningmachines101.com/)
- [Let's Data (Brazil)](https://www.youtube.com/playlist?list=PLn_z5E4dh_Lj5eogejMxfOiNX3nOhmhmM)
- [Digressões lineares](https://lineardigressions.com/)
- [Desvios não tão padrão](https://nssdeviations.com/)
- [O'Reilly Data Show Podcast](https://www.oreilly.com/radar/topics/oreilly-data-show-podcast/)
- [Partially Derivative](https://partiallyderivative.com/)
- [Superdatascience](https://www.superdatascience.com/podcast/)
- [O programa de engenharia de dados](https://www.dataengineeringshow.com/)
- [Podcast de IA radical](https://www.radicalai.org/)
- [Qual é o ponto?](https://fivethirtyeight.com/tag/whats-the-point/)
- [O podcast de engenharia analítica](https://roundup.getdbt.com/s/the-analytics-engineering-podcast)

### Vídeos e canais do YouTube
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [O que é aprendizado de máquina?](https://www.youtube.com/watch?v=WXHM_i-fgGo)
- [Andrew Ng: aprendizado profundo, aprendizado autodidata e aprendizado não supervisionado de atributos](https://www.youtube.com/watch?v=n1ViNeWhC24)
- [Data36 - ciência de dados para iniciantes, por Tomi Mester](https://www.youtube.com/c/TomiMesterData36comDataScienceForBeginners)
- [Aprendizado profundo: inteligência a partir de big data](https://www.youtube.com/watch?v=czLI3oLDe8M)
- [Entrevista com Geoffrey Hinton, o 'padrinho' da IA e do aprendizado profundo do Google](https://www.youtube.com/watch?v=1Wp3IIpssEc)
- [Introdução ao aprendizado profundo com Python](https://www.youtube.com/watch?v=S75EdAcXHKk)
- [O que é aprendizado de máquina e como funciona?](https://www.youtube.com/watch?v=elojMnjn4kk)
- [CampusX](https://www.youtube.com/@campusx-official)
- [Data School](https://www.youtube.com/channel/UCnVzApLJE2ljPZSeQylSEyg) - Educação em ciência de dados
- [Redes neurais para iniciantes, por Melanie Warrick (maio de 2015)](https://www.youtube.com/watch?v=Cu6A96TUy_o)
- [Série de vídeos sobre redes neurais, por Hugo Larochelle](https://www.youtube.com/playlist?list=PL6Xpj9I5qXYEcOhn7TqghAJ6NAPrNmUBH)
- [Shane Legg, cofundador da Google DeepMind - superinteligência de máquina](https://www.youtube.com/watch?v=evNCyRL3DOU)
- [Introdução à ciência de dados](https://www.youtube.com/watch?v=cHzvYxBN9Ls&list=PLPqVjP3T4RIRsjaW07zoGzH-Z4dBACpxY)
- [Ciência de dados com algoritmos genéticos](https://www.youtube.com/watch?v=lpD38NxTOnk)
- [Ciência de dados para iniciantes](https://www.youtube.com/playlist?list=PL2zq7klxX5ATMsmyRazei7ZXkP1GHt-vs)
- [DataTalks.Club](https://www.youtube.com/channel/UCDvErgK0j5ur3aLgn6U-LqQ)
- [Mildlyoverfitted - Tutoriais sobre tópicos intermediários de ML/aprendizado profundo](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [mlops.community - Entrevistas com especialistas do setor sobre ML em produção](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [ML Street Talk - Técnico e sem fins comerciais, sem discursos promocionais irritantes.](https://www.youtube.com/c/machinelearningstreettalk)
- [Redes neurais, por 3Blue1Brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- [Redes neurais do zero, por Sentdex](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3)
- [Manning Publications YouTube channel](https://www.youtube.com/c/ManningPublications/featured)
- [Pergunte ao Dr. Chong: como liderar em ciência de dados - parte 1](https://youtu.be/JYuQZii5o58)
- [Pergunte ao Dr. Chong: como liderar em ciência de dados - parte 2](https://youtu.be/SzqIXV-O-ko)
- [Pergunte ao Dr. Chong: como liderar em ciência de dados - parte 3](https://youtu.be/Ogwm7k_smTA)
- [Pergunte ao Dr. Chong: como liderar em ciência de dados - parte 4](https://youtu.be/a9usjdzTxTU)
- [Pergunte ao Dr. Chong: como liderar em ciência de dados - parte 5](https://youtu.be/MYdQq-F3Ws0)
- [Pergunte ao Dr. Chong: como liderar em ciência de dados - parte 6](https://youtu.be/LOOt4OVC3hY)
- [Modelos de regressão: aplicando regressão de Poisson simples](https://www.youtube.com/watch?v=9Hk8K8jhiOo)
- [Arquiteturas de aprendizado profundo](https://www.youtube.com/playlist?list=PLv8Cp2NvcY8DpVcsmOT71kymgMmcr59Mf)
- [Modelagem e análise de séries temporais](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5cK0QRQxeJd6GrQvhAtpBK)
- [Serrano.Academy](https://www.youtube.com/@SerranoAcademy)
- [Playlist de ciência de dados de ponta a ponta](https://www.youtube.com/watch?v=S_F_c9e2bz4&list=PLZoTAELRMXVPS-dOaVbAux22vzqdgoGhG)
- [Introdução à ciência de dados - LinkedIn](https://www.linkedin.com/learning/introduction-to-data-science-22668235/beginning-your-data-science-exploration?u=42458916)
- [AI Talks](https://aietalks.com/) - Resumos pesquisáveis e índice de tópicos para palestras e vídeos de conferências sobre engenharia prática de IA.

## Socialize-se
**[`^        voltar ao topo        ^`](#awesome-data-science)**

Abaixo estão alguns links de redes sociais. Conecte-se com outros cientistas de dados!

- [Contas do Facebook](#facebook-accounts)
- [Contas do Twitter](#twitter-accounts)
- [Canais do Telegram](#telegram-channels)
- [Comunidades do Slack](#slack-communities)
- [Grupos do GitHub](#github-groups)
- [Competições de ciência de dados](#data-science-competitions)


### Contas do Facebook
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Data](https://www.facebook.com/data)
- [Big Cientista de dados](https://www.facebook.com/Bigdatascientist)
- [Dia da ciência de dados](https://www.facebook.com/datascienceday/)
- [Academia de ciência de dados](https://www.facebook.com/nycdatascience)
- [Página de ciência de dados do Facebook](https://www.facebook.com/pages/Data-science/431299473579193?ref=br_rs)
- [Ciência de dados em Londres](https://www.facebook.com/pages/Data-Science-London/226174337471513)
- [Tecnologia e corporação de ciência de dados](https://www.facebook.com/DataScienceTechnologyCorporation?ref=br_rs)
- [Ciência de dados - grupo fechado](https://www.facebook.com/groups/1394010454157077/?ref=br_rs)
- [Centro de ciência de dados](https://www.facebook.com/centerdatasciences?ref=br_rs)
- [Big data, Hadoop, NoSQL, Hive e HBase](https://www.facebook.com/groups/bigdatahadoop/)
- [Análise de dados, mineração de dados, modelagem preditiva e inteligência artificial](https://www.facebook.com/groups/data.analytics/)
- [Análise de big data com R](https://www.facebook.com/groups/434352233255448/)
- [Análise de big data com R e Hadoop](https://www.facebook.com/groups/rhadoop/)
- [Aprendizados sobre big data](https://www.facebook.com/groups/bigdatalearnings/)
- [Big data, ciência de dados, mineração de dados e estatística](https://www.facebook.com/groups/bigdatastatistics/)
- [Especialista em big data/Hadoop](https://www.facebook.com/groups/BigDataExpert/)
- [Mineração de dados / aprendizado de máquina / IA](https://www.facebook.com/groups/machinelearningforum/)
- [Mineração de dados/big data - análise de redes sociais](https://www.facebook.com/groups/dataminingsocialnetworks/)
- [Manual prático de ciência de dados](https://www.facebook.com/datasciencevademecum)
- [Veri Bilimi Istanbul](https://www.facebook.com/groups/veribilimiistanbul/)
- [O blog de ciência de dados](https://www.facebook.com/theDataScienceBlog/)


### Contas do Twitter
**[`^        voltar ao topo        ^`](#awesome-data-science)**

| Twitter | Descrição |
| --- | --- |
| [Big Data Combine](https://twitter.com/BigDataCombine) | Demonstrações rápidas e ao vivo para cientistas de dados que buscam monetizar seus modelos como estratégias de negociação |
| Big Data Mania | Especialista em visualização de dados, jornalista de dados, growth hacker e autor de Data Science for Dummies (2015) |
| [Big Data Science](https://twitter.com/analyticbridge) | Big data, ciência de dados, modelagem preditiva, análise de negócios, Hadoop, pesquisa operacional e de decisão. |
| Charlie Greenbacker | Diretor de ciência de dados na @ExploreAltamira |
| [Chris Said](https://twitter.com/Chris_Said) | Cientista de dados no Twitter |
| [Clare Corthell](https://twitter.com/clarecorthell) | Desenvolvimento, design e ciência de dados na @mattermark #hackerei |
| [DADI Charles-Abner](https://twitter.com/DadiCharles) | #cientistadedados @Ekimetrics. #aprendizadodemaquina #visualizacaodedados #graficosdinamicos #Hadoop #R #Python #PLN #Bitcoin #entusiastadedados |
| [Central de ciência de dados](https://twitter.com/DataScienceCtrl) | Data Science Central é o principal recurso do setor para profissionais de big data. |
| [Ciência de dados em Londres](https://twitter.com/ds_ldn)  | Ciência de dados. Big data. Hacks de dados. Viciados em dados. Startups de dados. Dados abertos. |
| [Data Science Renee](https://twitter.com/BecomingDataSci) | Documentando minha trajetória de analista de dados SQL cursando mestrado em engenharia até me tornar cientista de dados |
| [Data Science Report](https://twitter.com/TedOBrien93) | A missão é orientar e impulsionar carreiras em ciência de dados e análise de dados. |
| [Data Science Tips](https://twitter.com/datasciencetips) | Dicas e truques para cientistas de dados do mundo todo! #cienciadedados #bigdata |
| [Data Vizzard](https://twitter.com/DataVisualizati) | Visualização de dados, segurança e assuntos militares |
| [DataScienceX](https://twitter.com/DataScienceX) |  |
| deeplearning4j | |
| [DJ Patil](https://twitter.com/dpatil) | Chefe de dados da Casa Branca, vice-presidente na @RelateIQ. |
| [Domino Data Lab](https://twitter.com/DominoDataLab) | |
| [Drew Conway](https://twitter.com/drewconway) | Nerd de dados, hacker e estudioso de conflitos. |
| Emilio Ferrara | #Redes, #AprendizadodeMáquina e #CiênciadeDados. Trabalho com #RedesSociais. Pesquisador de pós-doutorado na @IndianaUniv |
| [Erin Bartolo](https://twitter.com/erinbartolo) | Trabalho com #BigData — tenho uma relação de amor e ódio com todo o hype. Gerente do programa de #CiênciadeDados da @iSchoolSU. |
| [Greg Reda](https://twitter.com/gjreda)  | Trabalhando com dados e pandas na _GrubHub_ |
| [Gregory Piatetsky](https://twitter.com/kdnuggets) |  Presidente da KDnuggets, especialista em análise, big data, mineração de dados e ciência de dados; cofundador da KDD e da SIGKDD; ex-cientista-chefe de duas startups e filósofo nas horas vagas. |
| [Hadley Wickham](https://twitter.com/hadleywickham) |  Cientista-chefe da RStudio e professor adjunto de estatística na Universidade de Auckland, na Universidade Stanford e na Universidade Rice. |
| [Hakan Kardas](https://twitter.com/hakan_kardes) | Cientista de dados |
| [Hilary Mason](https://twitter.com/hmason) | Cientista de dados residente na @accel. |
| [Jeff Hammerbacher](https://twitter.com/hackingdata)  | Compartilha publicações sobre ciência de dados |
| [John Myles White](https://twitter.com/johnmyleswhite)  | Cientista no Facebook e desenvolvedor de Julia. Autor de Machine Learning for Hackers e Bandit Algorithms for Website Optimization. Os tweets expressam apenas minhas opiniões. |
| [Juan Miguel Lavista](https://twitter.com/BDataScientist) | Cientista de dados principal na equipe de ciência de dados da Microsoft |
| [Julia Evans](https://twitter.com/b0rk) | Hacker - Pandas - análise de dados |
| [Kenneth Cukier](https://twitter.com/kncukier) | Editor de dados do The Economist e coautor de Big Data (https://www.big-data-book.com/). |
| Kevin Davenport | Organizador de https://www.meetup.com/San-Diego-Data-Science-R-Users-Group/ |
| [Kevin Markham](https://twitter.com/justmarkham) | Instrutor de ciência de dados e fundador da [Data School](https://www.dataschool.io/) |
| [Kim Rees](https://twitter.com/krees) | Visualização interativa de dados e ferramentas. Flâneur de dados. |
| [Kirk Borne](https://twitter.com/KirkDBorne) | Cientista de dados, doutor em astrofísica e grande influenciador de #BigData. |
| Linda Regber | Narrativa de dados e visualizações. |
| [Luis Rei](https://twitter.com/lmrei) | Doutorando. Programação, dispositivos móveis e web. Inteligência artificial, robótica inteligente, aprendizado de máquina, mineração de dados, processamento de linguagem natural e ciência de dados. |
| Mark Stevenson | Especialista em recrutamento de análise de dados na Salt (@SaltJobs). Análise - insights - big data - ciência de dados |
| [Matt Harrison](https://twitter.com/__mharrison__) | Opiniões de um profissional Python full-stack, autor e instrutor que atualmente atua como cientista de dados. Às vezes pai, marido e jardineiro orgânico. |
| [Matthew Russell](https://twitter.com/ptwobrussell) | Minerando a web social. |
| [Mert Nuhoğlu](https://twitter.com/mertnuhoglu)  | Cientista de dados na BizQualify e desenvolvedor |
| [Monica Rogati](https://twitter.com/mrogati) | Dados na Jawbone. Transformou dados em histórias e produtos no LinkedIn. Mineração de texto, aprendizado de máquina aplicado e sistemas de recomendação. Ex-jogadora, ex-programadora de máquinas e criadora de nomes. |
| [Noah Iliinsky](https://twitter.com/noahi) | Designer de visualização e interação. Ciclista prática. Autora de livros sobre visualização: https://www.oreilly.com/pub/au/4419 |
| [Paul Miller](https://twitter.com/PaulMiller) | Analista e consultor de computação em nuvem, big data e dados abertos. Escritor, palestrante e moderador. Analista de pesquisa da Gigaom. |
| [Peter Skomoroch](https://twitter.com/peteskomoroch) | Criando sistemas inteligentes para automatizar tarefas e melhorar decisões. Empreendedor, ex-cientista de dados principal no @LinkedIn. Aprendizado de máquina, ProductRei e redes. |
| [Prash Chan](https://twitter.com/MDMGeek) | Arquiteto de soluções na IBM, blogueiro de gerenciamento de dados mestres, qualidade de dados e governança de dados. Ciência de dados, Hadoop, big data e nuvem. |
| [Quora Data Science](https://twitter.com/q_datascience)  | Tópico de ciência de dados do Quora |
| [R-Bloggers](https://twitter.com/Rbloggers) | Publica posts da blogosfera de R, conferências de ciência de dados e (!) vagas abertas para cientistas de dados. |
| [Rand Hindi](https://twitter.com/randhindi) |  |
| [Randy Olson](https://twitter.com/randal_olson) | Cientista da computação que pesquisa inteligência artificial. Entusiasta de dados. Líder comunitário da @DataIsBeautiful. Defensor da #CiênciaAberta. |
| [Recep Erol](https://twitter.com/EROLRecep) | Entusiasta de ciência de dados na UALR |
| [Ryan Orban](https://twitter.com/ryanorban) | Cientista de dados, origamista genético e entusiasta de hardware |
| [Sean J. Taylor](https://twitter.com/seanjtaylor) | Cientista social. Hacker. Equipe de ciência de dados do Facebook. Temas: experimentos, inferência causal, estatística, aprendizado de máquina e economia. |
| [Silvia K. Spiva](https://twitter.com/silviakspiva) | #CiênciadeDados na Cisco |
| [Harsh B. Gupta](https://twitter.com/harshbg) | Cientista de dados no BBVA Compass |
| [Spencer Nelson](https://twitter.com/spenczar_n) | Nerd de dados |
| [Talha Oz](https://twitter.com/tozCSS) | Gosta de ABM, SNA, DM, ML, PLN, HI, Python e Java. Está entre os melhores participantes do Kaggle/cientistas de dados. |
| [Tasos Skarlatidis](https://twitter.com/anskarl) | Processamento de eventos complexos, big data, inteligência artificial e aprendizado de máquina. Apaixonado por programação e código aberto. |
| [Terry Timko](https://twitter.com/Terry_Timko) | Governança da informação; big data; dados como serviço; ciência de dados; convergência de dados abertos, sociais e empresariais |
| [Tony Baer](https://twitter.com/TonyBaer) | Analista de TI da Ovum, cobrindo big data e gerenciamento de dados, com um pouco de engenharia de sistemas. |
| [Tony Ojeda](https://twitter.com/tonyojeda3) | Cientista de dados, autor e empreendedor. Cofundador da @DataCommunityDC. Fundador da @DistrictDataLab. #CiênciadeDados #BigData #DataDC |
| [Vamshi Ambati](https://twitter.com/vambati) | Ciência de dados no PayPal. #PLN, #aprendizadodemaquina; doutor e ex-aluno da Carnegie Mellon (blog: https://allthingsds.wordpress.com ) |
| [Wes McKinney](https://twitter.com/wesmckinn) | Pandas (biblioteca de análise de dados para Python). |
| [WileyEd](https://twitter.com/WileyEd) | Gerente sênior de análise de big data na @Seagate, ex-McKinsey. Evangelista de #BigData e #Analytics. Entusiasta de #Hadoop, #Nuvem, #Digital e #R. |
| [WNYC Data News Team](https://twitter.com/datanews) | A equipe de notícias de dados da @WNYC. Fazemos jornalismo orientado por dados, damos forma visual às histórias e mostramos nosso trabalho. |
| [Alexey Grigorev](https://twitter.com/Al_Grigor) | Autor de ciência de dados |
| [İlker Arslan](https://twitter.com/ilkerarslan_35) | Autor de ciência de dados. Compartilha principalmente sobre programação em Julia. |
| [INEVITABLE](https://twitter.com/WeAreInevitable) | Startup de IA e ciência de dados sediada na Inglaterra, Reino Unido |
| [Jan Oliver Rüdiger](https://x.com/notesJOR) | ML, aprendizado profundo e ciência de dados — com foco em mineração de texto e dados |

### Canais do Telegram
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Open Data Science](https://t.me/opendatascience) – Primeiro canal de ciência de dados do Telegram. Aborda temas técnicos e populares relacionados à ciência de dados: IA, big data, aprendizado de máquina, estatística, matemática em geral e suas aplicações.
- [Loss function porn](https://t.me/loss_function_porn) — Publicações bonitas sobre ciência de dados e aprendizado de máquina, com visualizações em vídeo ou gráficos.
- [Machinelearning](https://t.me/ai_machinelearning_big_data) – Notícias diárias sobre ML.


### Comunidades do Slack
[voltar ao topo](#awesome-data-science)

- [DataTalks.Club](https://datatalks.club)

### Grupos do GitHub
- [Berkeley Institute for Data Science](https://github.com/BIDS)

### Competições de ciência de dados

Algumas plataformas de competições de mineração de dados

- [Kaggle](https://www.kaggle.com/)
- [DrivenData](https://www.drivendata.org/)
- [Analytics Vidhya](https://datahack.analyticsvidhya.com/)
- [InnoCentive](https://www.innocentive.com/)
- [Microprediction](https://www.microprediction.com/python-1)

## Diversão

- [Infographic](#infographics)
- [Conjuntos de dados](#datasets)
- [Quadrinhos](#comics)


### Infográficos
**[`^        voltar ao topo        ^`](#awesome-data-science)**

| Prévia                                                                                                                                                                                                                                     | Descrição                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<img src="https://i.imgur.com/0OoLaa5.png" width="150" />](https://i.imgur.com/0OoLaa5.png)                                                                                                                                                | [Principais diferenças entre cientista de dados e engenheiro de dados](https://searchbusinessanalytics.techtarget.com/feature/Key-differences-of-a-data-scientist-vs-data-engineer)                                                                                         |
| [<img src="https://cloud.githubusercontent.com/assets/182906/19517857/604f88d8-960c-11e6-97d6-16c9738cb824.png" width="150" />](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                    | Um guia visual para se tornar cientista de dados em 8 etapas, por [DataCamp](https://www.datacamp.com) [(img)](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                                                              |
| [<img src="https://i.imgur.com/W2t2Roz.png" width="150" />](https://i.imgur.com/FxsL3b8.png)                                                                                                                                                | Mapa mental das habilidades necessárias ([img](https://i.imgur.com/FxsL3b8.png))                                                                                                                                                                                          |
| [<img src="https://i.imgur.com/rb9ruaa.png" width="150" />](https://nirvacana.com/thoughts/wp-content/uploads/2013/07/RoadToDataScientist1.png)                                                                                              | Swami Chandrasekaran criou um [currículo em forma de mapa de metrô](https://nirvacana.com/thoughts/2013/07/08/becoming-a-data-scientist/).                                                                                                                                            |
| [<img src="https://i.imgur.com/XBgKF2l.png" width="150" />](https://i.imgur.com/4ZBBvb0.png)                                                                                                                                                | por [@kzawadz](https://twitter.com/kzawadz) via [Twitter](https://twitter.com/MktngDistillery/status/538671811991715840)                                                                                                                                      |
| [<img src="https://i.imgur.com/l9ZGtal.jpg" width="150" />](https://i.imgur.com/xLY3XZn.jpg)                                                                                                                                                | Por [Central de ciência de dados](https://www.datasciencecentral.com/)                                                                                                                                                                                                |
| [<img src="https://i.imgur.com/TWkB4X6.png" width="150" />](https://i.imgur.com/0TydZ4M.png)                                                                                                                                                | Batalha da ciência de dados: R vs. Python                                                                                                                                                                                                                               |
| [<img src="https://i.imgur.com/gtTlW5I.png" width="150" />](https://i.imgur.com/HnRwlce.png)                                                                                                                                                | Como escolher técnicas estatísticas ou de aprendizado de máquina                                                                                                                                                                                                     |
| [<img src="https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg" width="150" />](https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg)                                                                                                           | [Escolhendo o estimador certo](https://scikit-learn.org/1.5/machine_learning_map.html#choosing-the-right-estimator)                                                                                                                                                                                                                                 |
| [<img src="https://i.imgur.com/3JSyUq1.png" width="150" />](https://i.imgur.com/uEqMwZa.png)                                                                                                                                                | O setor de ciência de dados: quem faz o quê                                                                                                                                                                                                                     |
| [<img src="https://i.imgur.com/DQqFwwy.png" width="150" />](https://i.imgur.com/RsHqY84.png)                                                                                                                                                | Diagrama de ~~Venn~~ Euler da ciência de dados                                                                                                                                                                                                                          |
| [<img src="https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png" width="150" height="150" />](https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png) | Diferentes habilidades e funções em ciência de dados, da [Springboard](https://www.springboard.com)                                                                                       |
| [<img src="https://data-literacy.geckoboard.com/assets/img/data-fallacies-to-avoid-preview.jpg" width="150" alt="Falácias sobre dados a evitar" />](https://data-literacy.geckoboard.com/poster/)                                                 | Uma maneira simples e amigável de ensinar aos colegas que não são cientistas de dados nem estatísticos [como evitar erros com dados](https://data-literacy.geckoboard.com/poster/). Das [Lições de alfabetização em dados](https://data-literacy.geckoboard.com/) da Geckoboard. |

### Conjuntos de dados
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Academic Torrents](https://academictorrents.com/)
- [ADS-B Exchange](https://www.adsbexchange.com/data-samples/) - Conjuntos de dados específicos sobre aeronaves e fontes do sistema de vigilância dependente automática por radiodifusão (ADS-B).
- [Conjunto de dados de chás chineses](https://chinatea.house/dataset/) - Conjunto de dados aberto e selecionado com mais de 100 chás chineses, incluindo categoria, origem, teor de cafeína, notas de sabor, oxidação e parâmetros de preparo. Disponível em JSON e CSV.
- [Conjunto de dados de retorno sobre investimento universitário](https://github.com/thomasthinks/college-roi-data) - Estimativas de retorno sobre o investimento ao longo da vida para cerca de 30 mil cursos de bacharelado dos EUA em 1.775 instituições, compiladas a partir de dados da FREOPP, IPEDS e preços regionais da BEA. Inclui 5 arquivos CSV com dicionário de dados, licença CC BY 4.0 e DOI do Zenodo.
- [Monitor de substituição de empregos por IA](https://github.com/noahaust2/ai-displacement-tracker) - Conjunto de dados estruturado que acompanha 92 episódios de redução de força de trabalho atribuídos à IA, afetando 453.748 trabalhadores em 12 países e 11 setores. Formatos JSON e CSV. Licença CC BY 4.0.
- [Corpus de benchmark de otimização de embalagens Packrift](https://packrift.github.io/packaging-optimization-benchmark-corpus/) - Conjunto de dados público de produtos para embalagem, gerado a partir de 1.000 registros de SKU com especificações exatas. Inclui arquivos CSV e JSON para download, voltados à logística de comércio eletrônico e análise de armazéns.
- [Medições de centralização de cartas Pokémon](https://github.com/rrh1441/pokemon-card-centering-measurements) - 320 anotações de centralização no padrão PSA (percentuais das bordas esquerda/direita e superior/inferior, inclinação) em 302 cartas Pokémon reais anunciadas no eBay. CSV, CC BY 4.0, DOI do Zenodo.
- [Referência de preços de venda de cartas Pokémon por classificação](https://github.com/rrh1441/pokemon-card-sold-price-reference) - Preço mediano de venda por classificação (sem graduação, PSA 9, PSA 10) para 486 cartas Pokémon, com tamanho da amostra e indicador de confiança para cada carta. CSV, CC BY 4.0, DOI do Zenodo.
- [Capturas de momento da Evidaxis](https://evidaxis.org) - Capturas semanais da atividade pública de desenvolvimento e citações de sistemas de IA de código aberto e nativos de pesquisa, endereçadas por conteúdo e reproduzíveis byte a byte a partir de entradas públicas. JSON e CSV por data da captura, CC0, DOI 10.5281/zenodo.21076011.
- [hadoopilluminated.com](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [data.gov](https://catalog.data.gov/dataset) - Portal de dados abertos do governo dos EUA
- [Departamento do Censo dos Estados Unidos](https://www.census.gov/)
- [enigma.com](https://enigma.com/) - Explore o universo dos dados públicos: pesquise e analise rapidamente bilhões de registros publicados por governos, empresas e organizações.
- [datahub.io](https://datahub.io/)
- [aws.amazon.com/datasets](https://aws.amazon.com/datasets/)
- [datacite.org](https://datacite.org/)
- [Portal oficial de dados europeus](https://data.europa.eu/en)
- [NASDAQ:DATA](https://data.nasdaq.com/) - Nasdaq Data Link: uma fonte de referência de conjuntos de dados financeiros, econômicos e alternativos.
- [Congressional Stock Brain](https://congressionalstockbrain.com) - Ferramenta gratuita com IA que avalia a relevância das declarações de negociações, conforme a lei STOCK Act, de membros do Congresso dos EUA. Sinais avaliados automaticamente a partir dos registros públicos de negociação de 537 parlamentares.
- [figshare.com](https://figshare.com/)
- [GeoLite Legacy Downloadable Databases](https://dev.maxmind.com/geoip)
- [Hugging Face Datasets](https://huggingface.co/datasets)
- [Bairros do Japão](https://japanneighborhoods.com) - Conjunto de dados em inglês sobre estatísticas criminais de Tóquio, com 5.078 bairros × 7 anos (36.222 registros, 2018–2024), obtido de dados abertos da Polícia Metropolitana de Tóquio. Inclui mapa interativo de crimes, classificação de segurança e índice de custo de vida. Licença CC BY.
- [Índice de renda comprometida](https://jeevesagency.github.io/quiet-broke-index/) - Ranking composto de 30 regiões metropolitanas que mostra quanto de uma renda familiar de US$ 400 mil é consumido por moradia, impostos, cuidados infantis, saúde e transporte. Metodologia aberta, gratuito e sem exigir e-mail.
- [Crime Brasil](https://crimebrasil.com.br) - Plataforma de dados abertos sobre estatísticas criminais brasileiras. Dados por bairro no Rio Grande do Sul (2,99 milhões de ocorrências em 79.024 bairros, 2022–2025), por município em MG e RJ, além de dados nacionais de rodovias da PRF e violência interpessoal do DATASUS. API REST gratuita, CSV/Parquet, atualizações diárias, CC BY 4.0.
- [Acidentes fatais com caminhões nos EUA (FARS) 2018-2024](https://doi.org/10.5281/zenodo.20487070) - Subconjunto filtrado do Sistema de Relatórios de Análise de Fatalidades da NHTSA, cobrindo 33.898 acidentes fatais envolvendo caminhões comerciais médios e pesados nos 50 estados dos EUA, entre 2018 e 2024. Inclui o [Boletim Vision Zero](https://accidentlawyerreview.com/research/vision-zero-report-card/) interativo, que compara 19 cidades, pipeline Python reproduzível no [GitHub](https://github.com/MarvinBregiosa/vision-zero-fars) e espelho no HuggingFace. DOI permanente, CC BY 4.0.
- [Panorama dos peptídeos em 2026](https://peptahub.com/state-of-peptides-2026) - Conjunto de dados estruturado de referência com 156 compostos peptídicos e relacionados a peptídeos, cada um com categoria de status regulatório, categoria, via de administração, meia-vida, massa molecular, número CAS, quantidade de referências e IDs do PubChem/DrugBank/Wikidata. CSV e JSON, sem login, CC BY 4.0.
- [Resposta do Quora sobre grandes conjuntos de dados](https://www.quora.com/Where-can-I-find-large-datasets-open-to-the-public)
- [Conjuntos de dados públicos de big data](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [Conjuntos de dados do Kaggle](https://www.kaggle.com/datasets)
- [Um catálogo abrangente da variação genética humana](https://www.internationalgenome.org/data)
- [Banco de dados de pessoas, lugares e coisas conhecidos, selecionado pela comunidade](https://developers.google.com/freebase/)
- [Dados públicos do Google](https://www.google.com/publicdata/directory)
- [Dados do Banco Mundial](https://data.worldbank.org/)
- [Dados de táxis de Nova York](https://chriswhong.github.io/nyctaxi/)
- [Dados abertos da Filadélfia](https://www.opendataphilly.org/) Conectando pessoas aos dados da Filadélfia
- [grouplens.org](https://grouplens.org/datasets/) Amostras de conjuntos de dados de filmes (com avaliações), livros e wikis
- [UC Irvine Machine Learning Repository](https://archive.ics.uci.edu/ml/) - contém conjuntos de dados úteis para aprendizado de máquina
- [conjuntos de dados de qualidade para pesquisa](https://web.archive.org/web/20150320022752/https://bitly.com/bundles/hmason/1) por [Hilary Mason](https://web.archive.org/web/20150501033715/https://bitly.com/u/hmason/bundles)
- [Centros Nacionais de Informação Ambiental](https://www.ncei.noaa.gov/)
- [ClimateData.us](https://www.climatedata.us/) (relacionado: [Kit de ferramentas de resiliência climática dos EUA](https://toolkit.climate.gov/))
- [r/datasets](https://www.reddit.com/r/datasets/)
- [MapLight](https://www.maplight.org/data-series) - oferece gratuitamente diversos dados para usos disponíveis ao público em geral. Clique em um conjunto de dados abaixo para saber mais
- [GHDx](https://ghdx.healthdata.org/) - Instituto de Métricas e Avaliação em Saúde — catálogo de conjuntos de dados de saúde e demografia do mundo todo, incluindo resultados do IHME
- [Dados econômicos do Federal Reserve de St. Louis - FRED](https://fred.stlouisfed.org/)
- [Instituto Neozelandês de Pesquisa Econômica – Data1850](https://data1850.nz/)
- [Fontes de dados abertos](https://github.com/datasciencemasters/data)
- [Dados da UNICEF](https://data.unicef.org/)
- [undata](https://data.un.org/)
- [Centro de dados e aplicações socioeconômicas da NASA - SEDAC](https://earthdata.nasa.gov/centers/sedac-daac)
- [Projeto GDELT](https://www.gdeltproject.org/)
- [Estatísticas da Suécia](https://www.scb.se/en/)
- [StackExchange Data Explorer](https://data.stackexchange.com) - ferramenta de código aberto para executar consultas arbitrárias em dados públicos da rede Stack Exchange.
- [Dados abertos do governo de São Francisco](https://datasf.org/opendata/)
- [IBM Asset Dataset](https://developer.ibm.com/exchanges/data/)
- [Índice de dados abertos](https://index.okfn.org/)
- [Arquivo público do Git](https://github.com/src-d/datasets/tree/master/PublicGitArchive)
- [GHTorrent](https://ghtorrent.org/)
- [Dados abertos da Microsoft Research](https://msropendata.com/)
- [Plataforma de dados abertos do governo da Índia](https://data.gov.in/)
- [Busca de conjuntos de dados do Google (beta)](https://datasetsearch.research.google.com/)
- [Notícias turcas categorizadas da NAYN.CO](https://github.com/naynco/nayn.data)
- [Covid-19](https://github.com/datasets/covid-19)
- [Covid-19 Google](https://github.com/google-research/open-covid-19-data)
- [Conjunto de dados de e-mails da Enron](https://www.cs.cmu.edu/~./enron/)
- [5.000 imagens de roupas](https://github.com/alexeygrigorev/clothing-dataset)
- [Portal aberto da IBB](https://data.ibb.gov.tr/en/)
- [Intercâmbio de dados humanitários](https://data.humdata.org/)
- [Mais de 250 mil anúncios de emprego](https://aws.amazon.com/marketplace/pp/prodview-p2554p3tczbes) - Conjunto de dados em expansão de anúncios históricos de emprego em Luxemburgo, de 2020 até hoje. Gratuito, com mais de 250 mil anúncios hospedados no AWS Data Exchange.
- [FinancialData.Net](https://financialdata.net/documentation) - Conjuntos de dados financeiros (dados do mercado de ações, demonstrações financeiras, dados de sustentabilidade e muito mais).
- [Índice de preços de HDD](https://github.com/AdamDudley/hddhunt-price-index) - Conjunto de dados aberto diário com o menor preço de discos rígidos internos novos SATA de 3,5 polegadas por terabyte (US$/TB), por categoria de capacidade na Amazon dos EUA, acompanhado de série histórica. CSV, JSON e JSONL, sem login, CC BY 4.0.
- [BDE Score](https://github.com/hbhqq9/bde-score) - Análise de ações de vários mercados com IA e pontuação BDE transparente para 73 ações (EUA/HK/ações A). Em conformidade com o Art. 50 da Lei de IA da UE. Licença MIT.
- [Busca de conjuntos de dados do Google](https://datasetsearch.research.google.com/) – Encontre conjuntos de dados na web.
- [notesjor corpus-collection](https://notes.jan-oliver-ruediger.de/korpora/) - Corpora gratuitos (mais de 6 bilhões de tokens), em sua maioria em alemão, tanto histórico quanto contemporâneo.
- [CLARIN-Repository](https://lindat.mff.cuni.cz/repository/home) - CLARIN é um repositório europeu de conjuntos de dados científicos.
- [GBIF](https://www.gbif.org/) - Global Biodiversity Information Facility: mais de 2,4 bilhões de registros de ocorrência de espécies. API aberta e gratuita para modelagem ecológica e pesquisa em ML.
- [FAOSTAT](https://www.fao.org/faostat/en/) - Estatísticas da FAO da ONU sobre produção e comércio de alimentos, uso da terra e emissões em mais de 245 países. API gratuita e download em massa.
- [Movebank](https://www.movebank.org/) - Plataforma gratuita que arquiva mais de 6 bilhões de registros de deslocamento animal obtidos por GPS e telemetria por satélite. API REST aberta, útil para modelagem espaço-temporal e ML de trajetórias.
- [Enciclopédia da vida](https://eol.org/) - Dados estruturados abertos sobre mais de 1,9 milhão de espécies, incluindo características, classificação e mídia. API gratuita e downloads em massa para tarefas de biodiversidade e classificação de espécies.
- [FirstData](https://github.com/MLT-OSS/FirstData) - A base de conhecimento de fontes de dados confiáveis mais abrangente do mundo. Mais de 210 fontes selecionadas de governos, organizações internacionais e instituições de pesquisa. Integração MCP para agentes de IA. Licença MIT.
- [latamdata-py](https://github.com/juanmoisesd/latamdata-py) - Pacote Python que oferece acesso, com uma única linha, a 38 conjuntos de dados de pesquisa abertos da América Latina (saúde, neurociência, saúde mental e economia). Instale com pip install latamdata-py.
- [ZipCheckup](https://github.com/artakulov/us-water-quality-data) - Dados gratuitos de segurança ambiental por CEP para mais de 42.000 CEPs dos EUA: qualidade da água e do ar, contaminação por PFAS, radônio, chumbo, risco de enchentes e mais 11 categorias. API REST pública, pacotes npm/PyPI, CC BY 4.0.
- [Helium](https://heliumtrades.com/mcp-page/) - Corpus de notícias em tempo real com atributos estruturados de viés em mais de 15 dimensões (mais de 3,2 milhões de artigos, mais de 5.000 fontes), dados financeiros ao vivo (ações, ETFs e criptomoedas) com análise gerada por IA, precificação de opções por ML com métricas de probabilidade e gregas completas, além de dados históricos de cadeias de opções para pesquisa quantitativa; disponível por servidor MCP ou API REST.
- [Evidências verificadas sobre suplementos](https://github.com/erinheit451/verified-supplement-evidence) - Conjunto de dados sobre suplementos alimentares com evidências classificadas, cobrindo dosagem, biodisponibilidade por forma, interações entre medicamentos e nutrientes, prevalência de deficiências do NHANES, sinais de eventos adversos do FDA FAERS e custo por dose eficaz. Cada alegação clínica cita um PMID do PubMed. CC BY 4.0, DOI 10.57967/hf/9356.
- [Pagamentos do setor a prestadores de saúde dos EUA](https://github.com/npiwho/us-provider-payments) - 1,65 milhão de profissionais de saúde dos EUA vinculados pelo NPI aos pagamentos de empresas farmacêuticas e de dispositivos médicos informados no CMS Open Payments (2019–2025): total, número de pagamentos, maior pagador e tipo de pagamento, com agregações por estado e especialidade. CSV compactado com gzip, sem login, CC0, DOI do Zenodo 10.5281/zenodo.23098004.
- [Benchmark WhatFontIs](https://github.com/whatfontis/WhatFontIs-Bench) - Benchmark sintético para identificação de famílias tipográficas, com 11.995 imagens de palavras em 600 fontes conhecidas, anotadas com caixas delimitadoras de palavras e letras individuais.
- [Dados tarifários dos EUA](https://github.com/checkdutyrates/us-tariff-data) - A Tabela Tarifária Harmonizada dos EUA (cerca de 30 mil linhas com alíquotas), tarifas adicionais do capítulo 99 por país (Seções 301, 232 e outras) e tarifas de importação da UE por subposição do SH e origem, atualizadas a cada revisão da HTS. CSV e JSON, sem login, CC0 (dados dos EUA) e OGL v3 (dados da UE), DOI do Zenodo 10.5281/zenodo.23093989.


### Quadrinhos
**[`^        voltar ao topo        ^`](#awesome-data-science)**

- [Compilação de quadrinhos](https://medium.com/@nikhil_garg/a-compilation-of-comics-explaining-statistics-data-science-and-machine-learning-eeefbae91277)
- [Charges](https://www.kdnuggets.com/websites/cartoons.html)
- [Charges de ciência de dados](https://www.cartoonstock.com/directory/d/data_science.asp)
- [Ciência de dados: edição XKCD](https://davidlindelof.com/data-science-the-xkcd-edition/)

## Outras listas incríveis

- Outras listas incrivelmente incríveis podem ser encontradas em [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
- [Aprendizado de máquina incrível](https://github.com/josephmisiti/awesome-machine-learning)
- [Listas](https://github.com/jnv/lists)
- [Visualização de dados incrível](https://github.com/javierluraschi/awesome-dataviz)
- [Python incrível](https://github.com/vinta/awesome-python)
- [Notebooks IPython de ciência de dados.](https://github.com/donnemartin/data-science-ipython-notebooks)
- [R incrível](https://github.com/qinwf/awesome-R)
- [Conjuntos de dados incríveis](https://github.com/awesomedata/awesome-public-datasets)
- [Tutoriais incríveis de aprendizado de máquina e aprendizado profundo](https://github.com/ujjwalkarn/Machine-Learning-Tutorials/blob/master/README.md)
- [Ideias incríveis de ciência de dados](https://github.com/JosPolfliet/awesome-ai-usecases)
- [Aprendizado de máquina para engenheiros de software](https://github.com/ZuzooVn/machine-learning-for-software-engineers)
- [Recursos de ciência de dados selecionados pela comunidade](https://hackr.io/tutorials/learn-data-science)
- [Aprendizado de máquina incrível sobre código-fonte](https://github.com/src-d/awesome-machine-learning-on-source-code)
- [Detecção de comunidades incrível](https://github.com/benedekrozemberczki/awesome-community-detection)
- [Classificação de grafos incrível](https://github.com/benedekrozemberczki/awesome-graph-classification)
- [Artigos incríveis sobre árvores de decisão](https://github.com/benedekrozemberczki/awesome-decision-tree-papers)
- [Artigos incríveis sobre detecção de fraude](https://github.com/benedekrozemberczki/awesome-fraud-detection-papers)
- [Artigos incríveis sobre gradient boosting](https://github.com/benedekrozemberczki/awesome-gradient-boosting-papers)
- [Modelos incríveis de visão computacional](https://github.com/nerox8664/awesome-computer-vision-models)
- [Busca em árvore Monte Carlo incrível](https://github.com/benedekrozemberczki/awesome-monte-carlo-tree-search-papers)
- [Glossário de termos comuns de estatística e ML](https://www.analyticsvidhya.com/glossary-of-common-statistics-and-machine-learning-terms/)
- [100 artigos de PLN](https://github.com/mhagiwara/100-nlp-papers)
- [Conjuntos de dados de jogos incríveis](https://github.com/leomaurodesenv/game-datasets#readme)
- [Preparação para entrevistas de ML/IA](https://github.com/aasimansari1/ml-interview-prep) - Mais de 500 perguntas e respostas de entrevistas de ML/IA com código executável — abrange fundamentos de ML, aprendizado profundo, PLN, PyTorch, pipelines scikit-learn e design de sistemas.
- [Perguntas de entrevistas sobre ciência de dados](https://github.com/alexeygrigorev/data-science-interviews)
- [Raciocínio explicável em grafos incrível](https://github.com/AstraZeneca/awesome-explainable-graph-reasoning)
- [Principais perguntas de entrevistas sobre ciência de dados](https://www.interviewbit.com/data-science-interview-questions/)
- [Predição incrível de sinergia, interação e polifarmácia de medicamentos](https://github.com/AstraZeneca/awesome-drug-pair-scoring)
- [Perguntas de entrevistas sobre aprendizado profundo](https://www.adaface.com/blog/deep-learning-interview-questions/)
- [Principais tendências futuras em ciência de dados em 2023](https://medium.com/the-modern-scientist/top-future-trends-in-data-science-in-2023-3e616c8998b8)
- [Como a IA generativa está mudando o trabalho criativo](https://hbr.org/2022/11/how-generative-ai-is-changing-creative-work)
- [O que é IA generativa?](https://www.techtarget.com/searchenterpriseai/definition/generative-AI)
- [Mais de 100 principais perguntas de entrevistas sobre aprendizado de máquina (do iniciante ao avançado)](https://www.appliedaicourse.com/blog/machine-learning-interview-questions/)
- [Projetos de ciência de dados](https://github.com/veb-101/Data-Science-Projects)
- [Ciência de dados é uma boa carreira?](https://www.scaler.com/blog/is-data-science-a-good-career/)
- [O futuro da ciência de dados: previsões e tendências](https://www.appliedaicourse.com/blog/future-of-data-science/)
- [Ciência de dados e aprendizado de máquina: qual é a diferença?](https://www.appliedaicourse.com/blog/data-science-and-machine-learning-whats-the-difference/)
- [IA na ciência de dados: usos, funções e ferramentas](https://www.scaler.com/blog/ai-in-data-science/)
- [As 13 principais linguagens de programação para ciência de dados](https://www.appliedaicourse.com/blog/data-science-programming-languages/)
- [Mais de 40 ideias de projetos de análise de dados](https://www.appliedaicourse.com/blog/data-analytics-projects-ideas/)
- [Melhores cursos de ciência de dados com certificados](https://www.appliedaicourse.com/blog/best-data-science-courses/)
- [Modelos de IA generativa](https://www.appliedaicourse.com/blog/generative-ai-models/)
- [Awesome Data Analysis](https://github.com/PavelGrigoryevDS/awesome-data-analysis) -  Uma lista selecionada de ferramentas, bibliotecas e recursos para análise de dados.
- [Awesome Evidence Synthesis](https://github.com/evidencesynthesis-tools/awesome-evidence-synthesis) - Uma lista selecionada de ferramentas de código aberto para revisões sistemáticas, metanálises e síntese de evidências.
- [Awesome Python Math Packages](https://github.com/VascoSch92/awesome_python_math_packages) - Uma lista selecionada de pacotes Python para matemática, de álgebra linear e otimização a estatística e topologia.
- [AI Dev Jobs](https://aidevboard.com/) - Mural de vagas voltado a funções de engenharia de IA/ML, com mais de 5.400 anúncios e API REST gratuita.


### Passatempo
- [Awesome Music Production](https://github.com/ad-si/awesome-music-production)
