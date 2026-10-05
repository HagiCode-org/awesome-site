# Awesome AI para a Ciência
**EN** | [CN](README_CN.md)
- [**Apresentação**](#foreword)
- [**IA + Biofarmacêutica**](#ai-biopharmaceutical)
  - [**1. AdaDR supera vários métodos de referência na reposição de medicamentos**](#1-adadr-outperforms-multiple-benchmark-methods-in-drug-repositioning)
  - [**2. IMN4NPD acelera a desreplicação de grandes agrupamentos em redes moleculares e anota autoarestas e nós pareados**](#2-imn4npd-accelerates-the-dereplication-of-extensive-clusters-in-molecular-networks-providing-annotations-for-self-loops-and-paired-nodes)
  - [**3. MIDAS, um modelo generativo profundo para a integração em mosaico de dados multiômicos de célula única**](#3-deep-generative-model-midas-for-mosaic-integration-of-single-cell-multi-omics-data)
  - [**4. ResGen: um modelo de geração molecular 3D baseado em cavidades de proteínas**](#4-resgen-a-3d-molecular-generation-model-based-on-protein-pockets)
  - [**5. Modelos de grande porte e aprendizado de máquina para prever parâmetros cinéticos de enzimas com alta precisão**](#5-large-models--machine-learning-for-high-precision-prediction-of-enzyme-kinetic-parameters)
  - [**6. MIT usa aprendizado profundo para descobrir novos antibióticos**](#6-mit-uses-deep-learning-to-discover-novel-antibiotics)
  - [**7. Redes neurais decifram a seletividade do acoplamento entre GPCRs e proteínas G**](#7-neural-networks-decipher-gpcr-g-protein-coupling-selectivity)
  - [**8. Macformer transforma o medicamento acíclico fedratinibe em um macrociclo**](#8-macformer-macrocyclizes-the-acyclic-drug-fedratinib)
  - [**9. Rede de regressão + CGMD prevê propriedades de auto-organização de dezenas de bilhões de peptídeos**](#9-regression-network--cgmd-predicts-self-assembly-properties-of-tens-of-billions-of-peptides)
  - [**10. Aprendizado não supervisionado prevê 71 milhões de mutações genéticas**](#10-unsupervised-learning-predicts-71-million-gene-mutations)
  - [**11. IA para análise de odores desenvolvida com base em redes neurais em grafos (GNN)**](#11-odor-analysis-ai-developed-based-on-graph-neural-networks-gnn)
  - [**12. Redes neurais em grafos selecionam ingredientes antienvelhecimento seguros e altamente eficazes**](#12-graph-neural-networks-screen-for-safe-and-highly-effective-anti-aging-ingredients)
  - [**13. Aprendizado de máquina analisa quantitativamente a quantidade e a localização da liberação de dopamina**](#13-machine-learning-quantitatively-analyzes-dopamine-release-amount-and-location)
  - [**14. Aprendizado de máquina descobre três medicamentos antienvelhecimento**](#14-machine-learning-discovers-three-anti-aging-drugs)
  - [**15. Aprendizado profundo seleciona novos antibióticos contra Acinetobacter baumannii**](#15-deep-learning-screens-for-novel-antibiotics-inhibiting-acinetobacter-baumannii)
  - [**16. Modelos de aprendizado de máquina preveem a capacidade de impressão de biotintas**](#16-machine-learning-models-applied-to-predict-bioink-printability)
  - [**17. Aprendizado de máquina diferencia células-tronco pluripotentes**](#17-machine-learning-differentiates-pluripotent-stem-cells)
  - [**18. Modelo de aprendizado de máquina prevê a taxa de liberação de medicamentos injetáveis de ação prolongada**](#18-machine-learning-model-predicts-drug-release-rate-of-long-acting-injectables)
  - [**19. Algoritmo de aprendizado de máquina prevê com eficácia as propriedades antimaláricas de plantas**](#19-machine-learning-algorithm-effectively-predicts-plant-antimalarial-properties)
  - [**20. Método de ensemble de aprendizado de máquina prevê a imunogenicidade de fragmentos de proteínas virais**](#20-machine-learning-ensemble-method-predicts-immunogenicity-of-viral-protein-fragments)
  - [**21. IA generativa é usada para desenvolver novos antibióticos**](#21-generative-ai-used-to-develop-novel-antibiotics)
  - [**22. Sistema automatizado, rápido e multidimensional de rastreamento de partículas individuais baseado em aprendizado profundo**](#22-deep-learning-based-automated-high-speed-multidimensional-single-particle-tracking-system)
  - [**23. Framework de aprendizado de máquina ProEnsemble: otimização de combinações de promotores em vias evolutivas**](#23-proensemble-machine-learning-framework-optimizing-evolutionary-pathway-promoter-combinations)
  - [**24. Rede neural em grafos ProtLGN, ciente do microambiente, orienta a evolução dirigida de proteínas**](#24-microenvironment-aware-graph-neural-network-protlgn-guides-directed-protein-evolution)
  - [**25. Modelo de aprendizado profundo AlphaPPIMd: exploração de ensembles conformacionais de complexos proteína-proteína**](#25-deep-learning-model-alphappimd-exploring-conformational-ensembles-of-protein-protein-complexes)
  - [**26. Novo degradador da proteína supressora de tumores dp53m inibe a proliferação de células cancerosas**](#26-novel-tumor-suppressor-protein-degrader-dp53m-inhibits-cancer-cell-proliferation)
  - [**27. Melhor artigo de estudante da CVPR! Modelo multimodal BioCLIP realiza aprendizado zero-shot**](#27-cvpr-best-student-paper-multimodal-model-bioclip-achieves-zero-shot-learning)
  - [**28. 100 milhões de parâmetros! Modelo fundacional celular scFoundation modela 20 mil genes simultaneamente**](#28-100-million-parameters-cell-foundation-model-scfoundation-models-20000-genes-simultaneously)
  - [**29. Aceito na ICML, modelo de linguagem de proteínas ESM-AA supera o estado da arte tradicional**](#29-accepted-by-icml-protein-language-model-esm-aa-surpasses-traditional-sota)
  - [**30. Algoritmo SPACE é publicado em periódico da Cell! Sua capacidade de descobrir módulos teciduais supera ferramentas semelhantes**](#30-space-algorithm-published-in-cell-sub-journal-tissue-module-discovery-capabilities-lead-similar-tools)
  - [**31. Novos avanços baseados no AlphaFold revelam a diversidade dinâmica das proteínas**](#31-new-breakthroughs-based-on-alphafold-reveal-dynamic-protein-diversity)
  - [**32. P450Diffusion: método de projeto de novo de enzimas P450 desenvolvido com modelos de difusão**](#32-p450diffusion-de-novo-design-method-for-p450-enzymes-developed-based-on-diffusion-models)
  - [**33. Redes neurais em grafos equivariantes preveem sítios de ligação em proteínas-alvo e aumentam o desempenho em 20%**](#33-equivariant-graph-neural-networks-used-for-target-protein-binding-site-prediction-boosting-performance-by-20)
  - [**34. Vinte dados experimentais marcam um avanço na IA para proteínas! FSFP otimiza modelos de pré-treinamento de proteínas**](#34-20-experimental-data-points-create-an-ai-protein-milestone-fsfp-effectively-optimizes-protein-pre-training-models)
  - [**35. Modelo transferível de aprendizado profundo identifica vários tipos de modificações de RNA e reduz significativamente os custos computacionais**](#35-transferable-deep-learning-model-identifies-multiple-types-of-rna-modifications-significantly-reducing-computational-costs)
  - [**36. InstructProtein: alinhamento da linguagem de proteínas à linguagem humana com instruções de conhecimento**](#36-instructprotein-aligning-protein-language-with-human-language-using-knowledge-instructions)
  - [**37. Framework de geração de proteínas para texto ProtT3 permite interpretar dados de proteínas e informações textuais entre modalidades**](#37-protein-to-text-generation-framework-prott3-enables-cross-modal-interpretation-of-protein-data-and-text-information)
  - [**38. Modelo CPDiffusion projeta proteínas funcionais de forma totalmente automática e a um custo baixíssimo**](#38-cpdiffusion-model-designs-functional-proteins-fully-automatically-at-an-ultra-low-cost)
  - [**39. Novo método de detecção de homólogos de proteínas baseado em modelos de linguagem de proteínas e recuperação densa**](#39-a-novel-protein-homolog-detection-method-based-on-protein-language-models-and-dense-retrieval-techniques)
  - [**40. AlphaProteo projeta com eficiência ligantes para proteínas-alvo e aumenta a afinidade em até 300 vezes**](#40-alphaproteo-efficiently-designs-target-protein-binders-increasing-affinity-by-300-times)
  - [**41. Novo modelo de linguagem de proteínas com remoção de ruído DePLM supera os modelos de ponta na previsão dos efeitos de mutações**](#41-novel-denoising-protein-language-model-deplm-outperforms-sota-models-in-mutation-effect-prediction)
  - [**42. Modelo generativo geométrico profundo DynamicBind permite prever o acoplamento dinâmico de proteínas**](#42-geometric-deep-generative-model-dynamicbind-enables-dynamic-protein-docking-prediction)
  - [**43. Grande modelo de linguagem para descoberta de medicamentos Y-Mol supera amplamente o LLaMA2**](#43-drug-discovery-large-language-model-y-mol-completely-outperforms-llama2)
  - [**44. Modelo universal de inverse folding molecular UniIF complementa o AlphaFold 3**](#44-universal-molecular-inverse-folding-model-uniif-further-complements-alphafold-3)
  - [**45. Modelo pré-treinado de linguagem de proteínas ProSST integra informações estruturais de proteínas com mais eficiência**](#45-pre-trained-protein-language-model-prosst-integrates-protein-structure-information-more-effectively)
  - [**46. Framework de ligantes peptídicos macrocíclicos RFpeptides abre novas possibilidades para proteínas de difícil tratamento**](#46-macrocyclic-peptide-binder-framework-rfpeptides-offers-new-possibilities-for-undruggable-proteins)
  - [**47. Modelo fundacional de genomas Evo permite prever e gerar dados da escala molecular à escala genômica**](#47-genome-foundation-model-evo-enables-prediction-and-generation-from-molecular-to-genome-scales)
  - [**48. DigFrag segmenta fragmentos moleculares com precisão usando IA e gera 44 moléculas de medicamentos e pesticidas**](#48-digfrag-accurately-segments-molecular-fragments-using-ai-and-generates-44-drugpesticide-molecules)
  - [**49. PRIME, método de pré-treinamento de um grande modelo de linguagem para sequências de proteínas**](#49-protein-sequence-large-language-model-pre-training-method-prime)
  - [**50. Método de aprendizado profundo autossupervisionado revoluciona a reconstrução 3D em microscopia crioeletrônica**](#50-self-supervised-deep-learning-method-revolutionizes-3d-reconstruction-in-cryo-electron-microscopy)
  - [**51. Método multimodal de geração de proteínas PLAID gera simultaneamente sequências e estruturas proteicas de todos os átomos**](#51-multimodal-protein-generation-method-plaid-generates-sequences-and-all-atom-protein-structures-simultaneously)
  - [**52. Método de otimização molecular direcionada MOLRL baseado em aprendizado por reforço latente**](#52-targeted-molecular-optimization-method-molrl-based-on-latent-reinforcement-learning)
  - [**53. Framework E2VD de previsão dos fatores de variação viral prevê direções evolutivas de COVID-19, HIV e influenza**](#53-viral-variation-driver-prediction-framework-e2vd-predicts-evolutionary-directions-for-covid-19hivinfluenza-viruses)
  - [**54. Modelo de linguagem médica MedFound se aproxima da capacidade de raciocínio de médicos especialistas**](#54-medical-language-model-medfound-approaches-expert-physician-reasoning-capabilities)
  - [**55. Modelo de difusão 4D AlphaFolding preenche a lacuna na previsão de estruturas dinâmicas de proteínas**](#55-4d-diffusion-model-alphafolding-fills-the-gap-in-dynamic-protein-structure-prediction)
  - [**56. Pipeline PepPrCLIP para projetar proteínas curtas pode contribuir para o desenvolvimento de novas terapias contra o câncer**](#56-pepprclip-pipeline-for-designing-short-proteins-holds-promise-for-developing-new-cancer-therapies)
  - [**57. Técnica de alinhamento de Boltzmann melhora drasticamente a eficácia da previsão da energia livre de ligação de proteínas**](#57-boltzmann-alignment-technique-drastically-improves-protein-binding-free-energy-prediction-efficacy)
  - [**58. Novo gerador de esqueletos de proteínas em larga escala baseado em fluxo, Proteina, alcança o estado da arte no projeto de novo de esqueletos proteicos**](#58-novel-large-scale-flow-based-protein-backbone-generator-proteina-achieves-sota-in-de-novo-protein-backbone-design)
  - [**59. Modelo UniGEM alcança pela primeira vez o aprimoramento sinérgico de duas tarefas com base em modelos de difusão**](#59-unigem-model-achieves-synergistic-enhancement-of-two-tasks-based-on-diffusion-models-for-the-first-time)
  - [**60. RFdiffusion evolui e viabiliza o projeto de novo de anticorpos com precisão atômica**](#60-rfdiffusion-evolves-further-realizing-atomic-accuracy-de-novo-antibody-design)
  - [**61. Primeiro esquema de fusão de modelos de linguagem de proteínas e RNA estabelece novo estado da arte na previsão de afinidade de ligação**](#61-first-protein-rna-language-model-fusion-scheme-sets-new-sota-in-binding-affinity-prediction)
  - [**62. Modelo de tecido virtual Celcomen identifica pela primeira vez a inferência causal na análise de transcriptômica espacial**](#62-virtual-tissue-model-celcomen-achieves-causal-inference-identifiability-in-spatial-transcriptomics-analysis-for-the-first-time)
  - [**63. Método AlphaFold-Metainference prevê com precisão ensembles estruturais de proteínas desordenadas**](#63-alphafold-metainference-method-accurately-predicts-disordered-protein-structural-ensembles)
  - [**64. Framework de alta precisão DRfold2 para previsão da estrutura de RNA supera o estado da arte em vários benchmarks**](#64-high-accuracy-rna-structure-prediction-framework-drfold2-surpasses-sota-in-multiple-benchmarks)
  - [**65. Novo algoritmo de projeto de proteínas DRAKES supera o gargalo do projeto de sequências biológicas**](#65-new-protein-design-algorithm-drakes-breaks-through-the-biological-sequence-design-bottleneck)
  - [**66. Espectroscopia de absorção UV com auxílio do aprendizado de máquina detecta contaminação microbiana**](#66-machine-learning-assisted-uv-absorbance-spectroscopy-for-detecting-microbial-contamination)
  - [**67. Uso de modelos generativos de sequências de proteínas no projeto de genes sobrepostos**](#67-utilizing-protein-sequence-generative-models-for-overlapping-gene-design)
  - [**68. Framework de previsão PUPS permite localizar proteínas em compartimentos subcelulares no nível de célula única**](#68-prediction-framework-pups-enables-single-cell-level-protein-subcellular-localization)
  - [**69. UniMoMo: primeiro framework generativo unificado entre espécies moleculares permite projetar vários tipos de moléculas de medicamentos**](#69-unimomo-the-first-unified-generative-framework-across-molecular-species-enables-multi-type-drug-molecular-design)
  - [**70. Modelo de linguagem de proteínas Prot42 gera ligantes de alta afinidade usando apenas a sequência da proteína-alvo**](#70-protein-language-model-prot42-generates-high-affinity-binders-using-only-the-target-protein-sequence)
  - [**71. Simulador unificado de dinâmica biomolecular UniSim realiza pela primeira vez simulações de dinâmica com tempo coarse-grained entre tipos moleculares e ambientes químicos**](#71-unified-biomolecular-dynamics-simulator-unisim-achieves-unified-time-coarsened-dynamics-simulation-across-molecular-types-and-chemical-environments-for-the-first-time)
  - [**72. Algoritmo de biologia computacional SimplifiedBondfinder revela 69 novas ligações nitrogênio-oxigênio-enxofre**](#72-computational-biology-algorithm-simplifiedbondfinder-uncovers-69-novel-nitrogen-oxygen-sulfur-bonds)
  - [**73. Novo método de projeto de sequências proteicas FAMPNN processa simultaneamente informações do esqueleto e das cadeias laterais**](#73-novel-protein-sequence-design-method-fampnn-simultaneously-processes-protein-backbone-and-sidechain-information)
  - [**74. Método atomístico de projeto de proteínas La-Proteina gera proteínas de até 800 resíduos com alta precisão**](#74-atomistic-protein-design-method-la-proteina-generates-proteins-with-up-to-800-residues-at-high-precision)
  - [**75. Modelo APM, desenvolvido especificamente para complexos proteicos de múltiplas cadeias, permite projeto de todos os átomos e otimização funcional**](#75-apm-model-specifically-designed-for-multi-chain-protein-complexes-enables-all-atom-design-and-functional-optimization)
  - [**76. Novo método de projeto de proteínas que se ligam a regiões intrinsecamente desordenadas, Logos, é especializado em alvos de difícil tratamento**](#76-new-intrinsically-disordered-region-binding-protein-design-method-logos-specializes-in-undruggable-targets)
  - [**77. Novo framework de representação por fusão dinâmica de proteínas FusionProt permite troca iterativa de informações**](#77-novel-protein-dynamic-fusion-representation-framework-fusionprot-released-enabling-iterative-information-exchange)
  - [**78. Modelo de difusão MorphDiff guiado por transcriptoma é lançado para acelerar a descoberta fenotípica de medicamentos**](#78-transcriptome-guided-diffusion-model-morphdiff-released-to-accelerate-phenotypic-drug-discovery)
  - [**79. Framework AlphaPPIMI aprimora significativamente a generalização e supera métodos existentes na previsão de moduladores de interfaces de PPI**](#79-alphappimi-framework-significantly-enhances-generalization-surpassing-existing-methods-in-ppi-interface-modulator-prediction)
  - [**80. Novo framework de rede neural de fusão prevê com eficiência sítios de ligação a vários metais em sequências de proteínas**](#80-a-novel-fusion-neural-network-framework-efficiently-predicts-multi-metal-binding-sites-in-protein-sequences)
  - [**81. Framework de projeção molecular altamente sintetizável ReaSyn é lançado, com taxas de reconstrução ultra-altas e diversidade de rotas**](#81-highly-synthesizable-molecular-projection-framework-reasyn-released-achieving-ultra-high-reconstruction-rates-and-pathway-diversity)
  - [**82. Framework de aprendizado por reforço com restrições Ctrl-DNA permite o “controle direcionado” da expressão gênica em células específicas**](#82-constrained-reinforcement-learning-framework-ctrl-dna-released-realizing-targeted-control-of-specific-cell-gene-expression)
  - [**83. Framework PLACER resolve o desafio de modelagem em nível atômico da heterogeneidade conformacional de proteínas**](#83-placer-framework-resolves-the-atomic-level-modeling-challenge-of-protein-conformational-heterogeneity)
  - [**84. Squidiff permite simulação de transcriptoma em vários cenários e impulsiona o desenvolvimento da medicina de precisão e espacial**](#84-squidiff-enables-multi-scenario-transcriptome-simulation-boosting-precision-medicine-and-spatial-medicine-development)
  - [**85. Modelo generativo PepTron e novo benchmark de avaliação são lançados para reformular a previsão de ensembles de proteínas desordenadas**](#85-generative-model-peptron-and-new-evaluation-benchmark-released-reshaping-prediction-capabilities-for-disordered-protein-ensembles)
  - [**86. MIT e Harvard propõem o fluxo de IA ponta a ponta CleaveNet para superar os desafios do projeto de substratos altamente específicos de proteases**](#86-mit-and-harvard-propose-end-to-end-ai-workflow-cleavenet-to-overcome-highly-specific-protease-substrate-design-challenges)
  - [**87. Equipe da Goethe University Frankfurt propõe framework de classificação multiescala para decifrar a complexidade do ligoma E3 humano**](#87-goethe-university-frankfurt-team-proposes-a-multi-scale-classification-framework-to-decode-the-complexity-of-the-human-e3-ligome)
  - [**88. Basecamp e NVIDIA lançam em conjunto o modelo fundacional EDEN, permitindo o projeto de terapias programáveis por IA**](#88-basecamp-and-nvidia-jointly-release-the-eden-foundation-model-enabling-ai-programmable-therapeutic-design)
  - [**89. Microsoft e colaboradores propõem o framework multimodal de IA GigaTIME para gerar atlas virtuais de mIF a partir de lâminas patológicas de rotina**](#89-microsoft-and-others-propose-the-multimodal-ai-framework-gigatime-to-generate-virtual-mif-atlases-from-routine-pathology-slides)
  - [**90. MIT propõe o modelo de linguagem de aprendizado profundo Pichia-CLM para otimizar códons e aumentar a produção de proteínas recombinantes**](#90-mit-proposes-deep-learning-language-model-pichia-clm-to-optimize-codons-for-enhanced-recombinant-protein-yield)
  - [**91. MIT e ETH propõem em conjunto o framework de aprendizado profundo APOLLO para integrar e separar com eficiência dados multimodais de célula única**](#91-mit-and-eth-jointly-propose-deep-learning-framework-apollo-to-efficiently-integrate-and-disentangle-single-cell-multimodal-data)
  - [**92. CUHK e colaboradores propõem o framework Bi-TEAM para aprendizado unificado de representações em várias escalas de peptídeos modificados**](#92-cuhk-and-others-jointly-propose-the-bi-team-framework-for-unified-cross-scale-representation-learning-of-modified-peptides)
  - [**93. Carnegie Mellon University e colaboradores propõem AQuaRef para refinamento quântico de modelos proteicos de todos os átomos**](#93-carnegie-mellon-university-and-others-propose-aquaref-for-quantum-refinement-of-all-atom-protein-models)
  - [**94. NVIDIA e colaboradores propõem o framework Complexa para unificar a geração e a otimização de ligantes de proteínas**](#94-nvidia-and-others-jointly-propose-the-complexa-framework-to-unify-protein-binder-generation-and-optimization)
  - [**95. MIT e CMU propõem em conjunto o VibeGen, que introduz dinâmica vibracional no projeto de novo de proteínas**](#95-mit-and-cmu-jointly-propose-vibegen-introducing-vibrational-dynamics-to-empower-de-novo-protein-design)
  - [**96. Institut Pasteur usa aprendizado profundo para prever 2,39 milhões de proteínas antifágicas e mapear a imunidade bacteriana**](#96-institut-pasteur-uses-deep-learning-to-predict-239-million-anti-phage-proteins-mapping-bacterial-immunity)
  - [**97. Equipe da KAIST usa IA para projetar de novo proteínas que se ligam a pequenas moléculas e aplicá-las em biossensores**](#97-kaist-team-utilizes-ai-to-de-novo-design-small-molecule-binding-proteins-successfully-applying-them-in-biosensors)
  - [**98. Universidade de Toronto e colaboradores propõem o dnaHNet para modelagem hierárquica eficiente de sequências genômicas**](#98-university-of-toronto-and-others-propose-dnahnet-for-efficient-hierarchical-modeling-of-genomic-sequences)
  - [**99. Queen Mary University of London e colaboradores realizam o maior estudo proteogenômico, revelando mecanismos moleculares de doenças**](#99-queen-mary-university-of-london-and-others-conduct-the-largest-scale-proteogenomic-study-revealing-molecular-disease-mechanisms)
  - [**100. Goethe University Frankfurt e colaboradores propõem o modelo genESOM: IA generativa supera os limites de experimentos com animais e amostras pequenas**](#100-goethe-university-frankfurt-and-others-propose-genesom-model-generative-ai-breaks-through-small-sample-animal-experiments)
- [**IA + Saúde**](#ai-healthcare)
  - [**1. Sistema de aprendizado profundo DeepDR Plus prevê retinopatia diabética usando imagens de fundo de olho**](#1-deepdr-plus-deep-learning-system-predicts-diabetic-retinopathy-using-fundus-images)
  - [**2. Modelo de regressão logística analisa como um alto índice de áreas verdes reduz o risco de síndrome metabólica**](#2-logistic-regression-model-analyzes-that-high-green-landscape-index-reduces-mets-risk)
  - [**3. Sistema de aprendizado profundo ajuda oftalmologistas iniciantes a aumentar em 12% a consistência dos diagnósticos**](#3-deep-learning-system-helps-junior-ophthalmologists-increase-diagnostic-consistency-by-12)
  - [**4. GSP-GCNs alcançam até 90,2% de precisão no diagnóstico da doença de Parkinson**](#4-gsp-gcns-achieve-up-to-902-accuracy-in-parkinsons-disease-diagnosis)
  - [**5. Sistema de pontuação prognóstica para câncer de mama MIRS**](#5-breast-cancer-prognosis-scoring-system-mirs)
  - [**6. Modelo fundacional de imagens da retina RETFound prevê várias doenças sistêmicas**](#6-retinal-image-foundation-model-retfound-predicts-multiple-systemic-diseases)
  - [**7. SVM otimiza sensores táteis e alcança 96,12% de reconhecimento de Braille**](#7-svm-optimizes-tactile-sensors-braille-recognition-rate-reaches-9612)
  - [**8. Instituto de Genômica de Pequim da CAS cria um arquivo aberto de imagens biomédicas**](#8-cas-beijing-institute-of-genomics-establishes-an-open-biomedical-imaging-archive)
  - [**9. IA Lunit interpreta mamografias com precisão comparável à dos médicos**](#9-ai-lunit-reads-mammograms-with-accuracy-comparable-to-doctors)
  - [**10. Estratégia de seleção de características detecta biomarcadores do câncer de mama**](#10-feature-selection-strategy-detects-breast-cancer-biomarkers)
  - [**11. Modelo Gradient Boosting Machine prevê com precisão o subsíndrome BPSD**](#11-gradient-boosting-machine-model-accurately-predicts-bpsd-sub-syndrome)
  - [**12. Modelo de aprendizado de máquina prevê a mortalidade de pacientes em um ano**](#12-machine-learning-model-predicts-patient-one-year-mortality-rate)
  - [**13. Nova tecnologia de interface cérebro-computador com IA permite que pacientes afásicos “falem”**](#13-new-ai-brain-computer-interface-technology-allows-aphasic-patients-to-speak)
  - [**14. IA baseada em aprendizado profundo detecta câncer de pâncreas**](#14-deep-learning-based-artificial-intelligence-detection-of-pancreatic-cancer)
  - [**15. Eficácia populacional da triagem de câncer de pulmão assistida por aprendizado de máquina**](#15-population-effectiveness-of-machine-learning-assisted-lung-cancer-screening)
  - [**16. Modelo de fusão de IA MCF para diagnóstico de câncer de ovário calcula o risco usando exames laboratoriais de rotina e idade**](#16-ovarian-cancer-diagnostic-ai-fusion-model-mcf-calculates-risk-using-routine-lab-data-and-age)
  - [**17. Google lança o framework HEAL, processo em quatro etapas para avaliar a equidade de ferramentas médicas de IA**](#17-google-releases-heal-framework-a-4-step-process-to-assess-medical-ai-tool-fairness)
  - [**18. Uso da segmentação semântica para desenvolver Pianno, ferramenta de anotação semântica para transcriptômica espacial**](#18-leveraging-semantic-segmentation-to-develop-spatial-transcriptomics-semantic-annotation-tool-pianno)
  - [**19. Modelo de IA UniFMIR supera os limites da microscopia de fluorescência atual**](#19-ai-model-unifmir-breaks-the-limits-of-existing-fluorescence-microscopy-imaging)
  - [**20. Sistema de aprendizado profundo aumenta a precisão da previsão de sobrevida no câncer**](#20-deep-learning-system-improves-the-accuracy-of-cancer-survival-prediction)
  - [**21. MemSAM adapta o modelo “Segment Anything” para segmentação de vídeos médicos**](#21-memsam-adapts-segment-anything-model-for-medical-video-segmentation)
  - [**22. Modelo de segmentação de imagens médicas Medical SAM 2 lidera o ranking do estado da arte**](#22-medical-image-segmentation-model-medical-sam-2-tops-the-sota-leaderboard)
  - [**23. Aprendizado de máquina combate a resistência à quimioterapia e a recorrência tumoral, fortalecendo a defesa contra células-tronco do câncer de mama**](#23-machine-learning-fights-chemotherapy-resistance-and-tumor-recurrence-building-a-strong-defense-against-breast-cancer-stem-cells)
  - [**24. Modelo visão-linguagem DeepDR-LLM para tratamento do diabetes é publicado em periódico da Nature**](#24-vision-language-model-deepdr-llm-for-diabetes-care-published-in-nature-sub-journal)
  - [**25. À altura de patologistas experientes! Equipe da Tsinghua propõe o modelo fundacional de IA ROAM para diagnóstico preciso de gliomas**](#25-leveling-with-senior-pathologists-tsinghua-team-proposes-ai-foundation-model-roam-for-precise-glioma-diagnosis)
  - [**26. Modelo universal de segmentação de imagens médicas ScribblePrompt supera modelos baseados em SAM**](#26-universal-medical-image-segmentation-model-scribbleprompt-outperforms-sam-based-models)
  - [**27. Plataforma de gêmeo digital do cérebro demonstra fenômenos críticos e funções cognitivas semelhantes às do cérebro humano**](#27-digital-twin-brain-platform-demonstrates-critical-phenomena-and-cognitive-functions-similar-to-the-human-brain)
  - [**28. Sistema automatizado de simulação de diálogos entre agentes LLM realiza avaliação inicial de depressão**](#28-automated-llm-dialogue-agent-simulation-system-performs-initial-diagnosis-for-depression)
  - [**29. Modelo de aprendizado profundo LucaProt auxilia na identificação de vírus de RNA**](#29-deep-learning-model-lucaprot-aids-in-rna-virus-identification)
  - [**30. Framework de pré-treinamento de imagens médicas UniMedI supera as barreiras de heterogeneidade dos dados médicos**](#30-medical-image-pre-training-framework-unimedi-breaks-down-medical-data-heterogeneity-barriers)
  - [**31. Grande modelo médico multilíngue MMed-Llama 3 se adapta melhor a cenários de aplicações médicas**](#31-multilingual-medical-large-model-mmed-llama-3-better-adapts-to-medical-application-scenarios)
  - [**32. Método de junção de imagens de endoscopia por cápsula S2P-Matching auxilia na reconstrução de imagens**](#32-capsule-endoscopy-image-stitching-method-s2p-matching-assists-in-image-reconstruction)
  - [**33. Benchmark médico multimodal GMAI-MMBench reúne 284 conjuntos de dados que cobrem 18 tarefas clínicas**](#33-multimodal-medical-benchmark-gmai-mmbench-features-284-datasets-covering-18-clinical-tasks)
  - [**34. Novo método de previsão de séries temporais CGS-Mask revela indicadores-chave das taxas de sobrevida de pacientes**](#34-novel-time-series-forecasting-method-cgs-mask-uncovers-key-indicators-for-patient-survival-rates)
  - [**35. Framework não invasivo de decodificação cerebral por fMRI estabelece bases para interfaces cérebro-computador e modelos cognitivos**](#35-non-invasive-brain-decoding-framework-fmri-lays-the-foundation-for-brain-computer-interfaces-and-cognitive-models)
  - [**36. Modelo de segmentação de imagens médicas M2CF-Net melhora a precisão do diagnóstico da síndrome de Sjögren**](#36-medical-image-segmentation-model-m2cf-net-improves-diagnosis-accuracy-for-sjogrens-syndrome)
  - [**37. BSAFusion permite alinhar e fundir imagens médicas multimodais**](#37-bsafusion-enables-alignment-and-fusion-of-multimodal-medical-images)
  - [**38. Framework multiagente de LLM KG4Diagnosis auxilia no diagnóstico de 362 doenças comuns**](#38-multi-agent-llm-framework-kg4diagnosis-assists-in-diagnosing-362-common-diseases)
  - [**39. Modelo de segmentação de imagens ConDSeg resolve problemas de limites difusos e coocorrência em imagens médicas**](#39-image-segmentation-model-condseg-solves-soft-boundary-and-co-occurrence-issues-in-medical-imaging)
  - [**40. Modelo médico M³FM permite diagnóstico clínico zero-shot e auxilia na elaboração de laudos e classificação de doenças**](#40-medical-model-m³fm-enables-zero-shot-clinical-diagnosis-supporting-disease-reporting-and-classification)
  - [**41. Estimativa de sexo baseada em aprendizado profundo a partir de tomografias do crânio supera especialistas forenses**](#41-deep-learning-based-sex-estimation-from-skull-ct-scans-outperforms-human-forensic-experts)
  - [**42. IA impulsiona a pesquisa médica: grandes modelos se tornam “parceiros ideais” no treinamento de médicos da atenção primária**](#42-ai-boosts-medical-research-large-models-become-the-golden-partner-for-training-primary-care-physicians)
  - [**43. Algoritmo de aprendizado profundo AcneDGNet detecta e classifica lesões de acne**](#43-acnedgnet-deep-learning-algorithm-achieves-acne-lesion-detection-and-grading)
  - [**44. Modelo multimodal de segmentação de imagens médicas VISTA3D é lançado, permitindo autosegmentação e interação com imagens 3D**](#44-multimodal-medical-image-segmentation-model-vista3d-released-achieving-3d-image-auto-segmentation-and-interaction)
  - [**45. Modelo unificado de segmentação ecocardiográfica em múltiplos planos EchoONE segmenta vários planos com precisão**](#45-multi-plane-echocardiography-unified-segmentation-model-echoone-accurately-segments-multiple-planes)
  - [**46. Framework multiagente de diálogo simula consultas médicas para auxiliar no diagnóstico de doenças**](#46-multi-agent-dialogue-framework-simulates-medical-consultations-to-aid-disease-diagnosis)
  - [**47. Framework de aprendizado profundo STAIG revela informações genéticas detalhadas no microambiente tumoral**](#47-deep-learning-framework-staig-reveals-detailed-genetic-information-in-the-tumor-microenvironment)
  - [**48. Primeiro framework completo de reidentificação de imagens médicas, MaMI, alcança o estado da arte em 11 conjuntos de dados**](#48-first-all-in-one-medical-image-re-identification-framework-mami-reaches-sota-across-11-datasets)
  - [**49. Modelo de regressão muitos-para-um M2OST prevê com precisão a expressão gênica usando imagens de patologia digital**](#49-many-to-one-regression-model-m2ost-accurately-predicts-gene-expression-using-digital-pathology-images)
  - [**50. Ferramenta de análise de ressonância magnética cerebral MindGlide quantifica lesões de esclerose múltipla**](#50-brain-mri-scanning-tool-mindglide-quantifies-multiple-sclerosis-lesions)
  - [**51. Framework de aprendizado multi-instância com destilação hierárquica HDMIL processa rapidamente imagens de lâmina inteira com gigapixels**](#51-hierarchical-distillation-multi-instance-learning-framework-hdmil-rapidly-processes-gigapixel-whole-slide-images)
  - [**52. Modelo fundacional universal de segmentação 3D de vasos sanguíneos vesselFM supera amplamente os modelos baseados em SAM**](#52-universal-3d-blood-vessel-segmentation-foundation-model-vesselfm-far-exceeds-sam-based-models)
  - [**53. Redes neurais em grafos preveem com precisão a sobrevida no câncer de pulmão e descobrem três subtipos fatais**](#53-graph-neural-networks-accurately-predict-lung-cancer-survival-discovering-3-fatal-subtypes)
  - [**54. Modelo de IA com estratégia de fusão prevê o risco de mortalidade por choque séptico**](#54-fusion-strategy-ai-model-predicts-septic-shock-mortality-risk)
  - [**55. Primeiro modelo clínico Graph-of-Thought do mundo para HIE melhora em 15% a previsão de desfechos neurocognitivos**](#55-worlds-first-clinical-graph-of-thought-model-in-hie-improves-neurocognitive-outcome-prediction-by-15)
  - [**56. Modelagem refinada de coortes de pacientes com dados EHR multidimensionais aumenta em 16,3% a precisão da previsão do tempo de internação**](#56-fine-grained-patient-cohort-modeling-using-multidimensional-ehr-data-increases-length-of-stay-prediction-accuracy-by-163)
  - [**57. Modelo de aprendizado profundo APEX seleciona possíveis candidatos a antibióticos**](#57-deep-learning-model-apex-screens-potential-antibiotic-candidates)
  - [**58. Avaliação epidemiológica de águas residuais com sequenciamento genético e aprendizado de máquina: método ICA-Var detecta vírus com até quatro semanas de antecedência**](#58-wastewater-epidemiology-assessment-using-gene-sequencing-and-machine-learning-ica-var-method-detects-viruses-up-to-4-weeks-early)
  - [**59. Modelo de difusão de ponte browniana bidirecional aumenta a reprodutibilidade da coloração virtual**](#59-bidirectional-brownian-bridge-diffusion-model-enhances-reproducibility-of-virtual-staining)
  - [**60. GraphRAG médico bate recordes de precisão em perguntas e respostas e alcança o estado da arte em 11 benchmarks**](#60-medical-graphrag-breaks-qa-accuracy-records-achieving-sota-on-11-benchmark-datasets)
  - [**61. Healthcare Agent detecta automaticamente questões de ética e segurança médica**](#61-healthcare-agent-automatically-detects-medical-ethics-and-safety-issues)
  - [**62. Classificador de imagens de células sanguíneas CytoDiffusion auxilia na descoberta de leucemia e supera especialistas clínicos**](#62-blood-cell-image-classifier-cytodiffusion-assists-in-discovering-leukemia-surpassing-clinical-experts)
  - [**63. Equipe da UCL propõe framework de aprendizado federado MORPHFED para análise interinstitucional da morfologia sanguínea**](#63-ucl-team-proposes-federated-learning-framework-morphfed-for-cross-institutional-blood-morphology-analysis)
  - [**64. Equipe francesa propõe framework explicável de aprendizado de máquina para prever com precisão a mortalidade de candidatos a transplante hepático com CHC**](#64-french-team-proposes-explainable-machine-learning-framework-for-accurate-mortality-prediction-in-hcc-liver-transplant-candidates)
  - [**65. Stanford University propõe Merlin, o primeiro modelo visão-linguagem nativo para tomografias abdominais 3D**](#65-stanford-university-proposes-merlin-the-first-native-3d-abdominal-ct-vision-language-model)
- [**IA + Química dos Materiais**](#ai-materials-chemistry)
  - [**1. Framework computacional de alto rendimento gera 120 mil novos candidatos a MOFs em 33 minutos**](#1-high-throughput-computational-framework-generates-120000-novel-mof-candidates-in-33-minutes)
  - [**2. Algoritmo de aprendizado de máquina seleciona materiais de eletrodo P-SOC**](#2-machine-learning-algorithm-screens-p-soc-electrode-materials)
  - [**3. Modelo de aprendizado de máquina SEN alcança previsões de propriedades de materiais com alta precisão**](#3-sen-machine-learning-model-achieves-high-accuracy-material-property-predictions)
  - [**4. Ferramenta de aprendizado profundo GNoME descobre 2,2 milhões de novos cristais**](#4-deep-learning-tool-gnome-discovers-22-million-new-crystals)
  - [**5. Rede neural de átomos recursivamente incorporados induzida por campo descreve com precisão mudanças na intensidade e direção de campos externos**](#5-field-induced-recursively-embedded-atom-neural-network-accurately-describes-external-field-strength-and-direction-changes)
  - [**6. Aprendizado de máquina prevê isotermas de adsorção de água em materiais porosos**](#6-machine-learning-predicts-water-adsorption-isotherms-of-porous-materials)
  - [**7. Uso do aprendizado de máquina para otimizar cocatalisadores de fotoânodos BiVO(4)**](#7-using-machine-learning-to-optimize-co-catalysts-for-bivo4-photoanodes)
  - [**8. Algoritmo RetroExplainer realiza previsões de retrosíntese com base em aprendizado profundo**](#8-retroexplainer-algorithm-performs-retrosynthesis-prediction-based-on-deep-learning)
  - [**9. Redes neurais profundas e PLN são usadas para desenvolver ligas resistentes à corrosão**](#9-deep-neural-networks--nlp-used-to-develop-corrosion-resistant-alloys)
  - [**10. Aprendizado profundo determina estruturas internas de materiais a partir da observação de superfícies**](#10-deep-learning-determines-materials-internal-structures-through-surface-observations)
  - [**11. Desenvolvimento de três novos materiais com cintiladores de raios X inovadores**](#11-developing-3-new-materials-using-innovative-x-ray-scintillators)
  - [**12. Aprendizado semissupervisionado extrai informações ocultas de dados não rotulados**](#12-semi-supervised-learning-extracts-hidden-information-from-unlabeled-data)
  - [**13. Extração automatizada de conhecimento baseada em AutoML**](#13-automated-knowledge-extraction-based-on-automl)
  - [**14. Uni-MOF: modelo de aprendizado de máquina que prevê o comportamento de adsorção em materiais MOF 3D**](#14-uni-mof-a-machine-learning-model-predicting-adsorption-behavior-in-3d-mof-materials)
  - [**15. Microeletrônica avança rumo à era pós-Moore! Integração de DNN e tecnologia de nanomembranas analisa com precisão ângulos de luz incidente**](#15-microelectronics-accelerates-towards-the-post-moore-era-integrating-dnn-with-nanomembrane-technology-to-precisely-analyze-incident-light-angles)
  - [**16. Redefinição dos limites de desempenho de baterias de lítio com um modelo eletroquímico simplificado baseado em aprendizado por ensemble**](#16-reshaping-lithium-battery-performance-boundaries-proposing-a-simplified-electrochemical-model-based-on-ensemble-learning)
  - [**17. O ímã supercondutor à base de ferro mais forte é desenvolvido com aprendizado de máquina**](#17-the-strongest-iron-based-superconducting-magnet-born-via-machine-learning)
  - [**18. Redes neurais substituem a teoria do funcional da densidade! Modelo universal de materiais alcança previsões ultra-precisas**](#18-neural-networks-replace-density-functional-theory-universal-materials-model-achieves-ultra-precise-predictions)
  - [**19. Framework de teoria do funcional da densidade com redes neurais abre a caixa-preta da previsão da estrutura eletrônica da matéria**](#19-neural-network-density-functional-framework-opens-the-black-box-of-matters-electronic-structure-prediction)
  - [**20. Primeira arquitetura de treinamento totalmente forward para computação óptica com redes neurais representa avanço importante em chips ópticos nacionais**](#20-first-fully-forward-mode-training-architecture-for-optical-computing-using-neural-networks-achieves-major-breakthrough-in-domestic-optical-chips)
  - [**21. LLM químico ChemLLM abrange 7 milhões de dados de perguntas e respostas e rivaliza com GPT-4 em capacidades especializadas**](#21-chemistry-llm-chemllm-covers-7-million-qa-data-professional-capabilities-rival-gpt-4)
  - [**22. Microespectrômetros adaptáveis à IA, produzíveis em escala de wafer**](#22-wafer-scale-producible-ai-adaptive-micro-spectrometers)
  - [**23. Modelo GNNOpt identifica centenas de candidatos a células solares e materiais quânticos**](#23-gnnopt-model-identifies-hundreds-of-solar-cell-and-quantum-material-candidates)
  - [**24. Conjunto de dados aberto OMat24 contém 110 milhões de resultados de cálculos DFT**](#24-open-omat24-dataset-contains-110-million-dft-calculation-results)
  - [**25. Nova liga refratária de alta entropia sintetizada com aprendizado de máquina apresenta excelente ductilidade à temperatura ambiente**](#25-novel-refractory-high-entropy-alloy-synthesized-via-machine-learning-boasts-excellent-room-temperature-ductility)
  - [**26. Modelo generativo de materiais FlowLLM conta com conjunto de dados de mais de 45 mil materiais**](#26-material-generative-model-flowllm-features-a-dataset-covering-over-45k-materials)
  - [**27. Aprendizado ativo identifica 14 mil óxidos de alta entropia e seleciona com sucesso quatro catalisadores de alta atividade para evolução de hidrogênio**](#27-using-active-learning-to-identify-14000-high-entropy-oxides-successfully-screening-4-high-activity-hydrogen-evolution-catalysts)
  - [**28. Modelo de aprendizado profundo BETE-NET aumenta em cinco vezes a eficiência da busca por materiais supercondutores**](#28-deep-learning-model-bete-net-boosts-superconducting-material-search-efficiency-by-5x)
  - [**29. Tecnologia Gradient Boosting Decision Tree (GBDT) aprimora a previsão de alta precisão da resistência à oxidação de ligas de alta entropia**](#29-gradient-boosting-decision-tree-gbdt-technology-further-improves-high-precision-prediction-of-high-entropy-alloy-oxidation-resistance)
  - [**30. Framework de projeto molecular RingFormer prevê com mais precisão as propriedades optoeletrônicas de moléculas de materiais orgânicos**](#30-molecular-design-framework-ringformer-more-precisely-predicts-organic-material-molecular-optoelectronic-properties)
  - [**31. Método de planejamento de retrosíntese inorgânica Retrieval-Retro melhora a eficiência e a precisão da síntese de materiais inorgânicos**](#31-inorganic-retrosynthesis-planning-method-retrieval-retro-improves-inorganic-material-synthesis-efficiency-and-accuracy)
  - [**32. Uso de grandes modelos para decifrar mecanismos de condução em eletrólitos sólidos de hidretos e estabelecer modelo confiável de previsão de energia de ativação**](#32-using-large-models-to-decipher-hydride-solid-state-electrolyte-conduction-mechanisms-establishing-a-reliable-activation-energy-prediction-model)
  - [**33. Busca de dados de espectrometria de massa em escala tera habilitada por aprendizado de máquina revela reações químicas desconhecidas**](#33-tera-scale-mass-spectrometry-data-search-enabled-by-machine-learning-uncovers-unknown-chemical-reactions)
  - [**34. Método generativo de resolução de estruturas PXRDnet baseado em modelos de difusão resolve com sucesso 200 nanocristais simulados complexos**](#34-generative-ai-structure-solution-method-pxrdnet-based-on-diffusion-models-successfully-solves-200-complex-simulated-nanocrystals)
  - [**35. Modelo DreaMS abrange 200 milhões de espectros de massa molecular e cria o maior conjunto de espectrometria de massa do mundo, GeMS**](#35-dreams-model-covers-200-million-molecular-mass-spectra-building-the-worlds-largest-mass-spec-dataset-gems)
  - [**36. Framework de aprendizado de máquina equivariante acelera simulações em larga escala de campos elétricos em materiais**](#36-equivariant-machine-learning-framework-accelerates-large-scale-electric-field-simulations-of-materials)
  - [**37. Método de integração de dados de várias fontes seleciona 25 tipos de alternativas ao clínquer de cimento, equivalentes à redução de 1,2 bilhão de toneladas de gases de efeito estufa**](#37-multi-source-data-integration-method-screens-25-types-of-cement-clinker-alternatives-equivalent-to-reducing-12-billion-tons-of-greenhouse-gases)
  - [**38. UNIMATE realiza pela primeira vez a modelagem unificada da geração de topologias e da previsão de propriedades**](#38-unimate-achieves-unified-modeling-of-topology-generationproperty-prediction-for-the-first-time)
  - [**39. Framework Transformer de difusão de todos os átomos permite pela primeira vez gerar sistemas atômicos periódicos e aperiódicos de forma unificada**](#39-all-atom-diffusion-transformer-framework-enables-unified-generation-of-periodic-and-aperiodic-atomic-systems-for-the-first-time)
  - [**40. Modelo FASTSOLV prevê a solubilidade de pequenas moléculas em qualquer temperatura e acelera a inferência em 50 vezes**](#40-fastsolv-model-realizes-small-molecule-solubility-prediction-at-any-temperature-accelerating-inference-speed-by-50x)
  - [**41. Novo método baseado em modelos multimodais de aprendizado de máquina prevê propriedades de materiais sem estruturas cristalinas completas**](#41-novel-method-based-on-multimodal-machine-learning-models-predicts-material-properties-without-complete-crystal-structures)
  - [**42. Modelo de IA CGformer integra mecanismos de atenção global de forma inovadora e auxilia a pesquisa e o desenvolvimento de materiais de alta entropia**](#42-ai-model-cgformer-innovatively-integrates-global-attention-mechanisms-aiding-high-entropy-material-rd)
  - [**43. Novo método de integração de restrições estruturais SCIGEN se adapta a qualquer modelo de difusão pré-treinado**](#43-novel-structural-constraint-integration-method-scigen-adapts-to-any-pre-trained-diffusion-model)
  - [**44. Modelo generativo de IA com informação física SpectroGen exige apenas uma modalidade de entrada para gerar dados entre modalidades com 99% de correlação experimental**](#44-physically-informed-generative-ai-model-spectrogen-requires-only-single-modality-input-to-achieve-cross-modal-generation-with-99-experimental-correlation)
  - [**45. MOF-ChemUnity reconstrói o conhecimento panorâmico sobre MOFs e leva a descoberta de materiais à era da “IA explicável”**](#45-mof-chemunity-reconstructs-mof-panoramic-knowledge-pushing-material-discovery-into-the-explainable-ai-era)
  - [**46. Modelo universal de potencial leve PET-MAD é lançado e alcança precisão de modelo especializado com amostras mínimas**](#46-lightweight-universal-potential-model-pet-mad-released-achieving-dedicated-model-level-precision-with-minimal-samples)
  - [**47. Sistema de IA ChemOntology é lançado e reduz pela metade o custo da busca por rotas de reação ao integrar conhecimento químico**](#47-ai-system-chemontology-released-halving-reaction-path-search-costs-by-integrating-chemical-knowledge)
  - [**48. Princeton e colaboradores propõem método com LLM para prever a energia livre de MOFs e avaliar com alta precisão a viabilidade de síntese**](#48-princeton-and-others-jointly-propose-llm-method-for-predicting-mof-free-energy-highly-accurately-assessing-synthesis-feasibility)
  - [**49. Equipe da Universidade Yale propõe o modelo MOSAIC, que coordena LLMs para gerar esquemas de síntese química altamente confiáveis**](#49-yale-university-team-proposes-mosaic-model-coordinating-llms-to-generate-highly-reliable-chemical-synthesis-schemes)
  - [**50. MIT e colaboradores propõem o modelo de difusão DiffSyn para planejar de forma generativa rotas de síntese de materiais**](#50-mit-and-others-propose-diffusion-model-diffsyn-enabling-generative-planning-of-material-synthesis-pathways)
  - [**51. Universidade de Michigan e Farasis Energy propõem em conjunto o método “Discovery Learning”, reduzindo drasticamente ciclos de previsão da vida útil de baterias**](#51-university-of-michigan-and-farasis-energy-jointly-propose-discovery-learning-method-drastically-shortening-battery-life-prediction-cycles)
  - [**52. Universidade Cornell propõe o framework SCAN para prever e explicar com alta precisão o desempenho de eletrólitos de baterias**](#52-cornell-university-proposes-scan-framework-highly-accurately-predicting-and-explaining-battery-electrolyte-performance)
  - [**53. MIT propõe o grande modelo fundacional DefectNet para caracterização e quantificação não destrutivas de defeitos internos em materiais**](#53-mit-proposes-foundation-large-model-defectnet-for-non-destructive-characterization-and-quantification-of-internal-material-defects)
  - [**54. Universidade Cornell propõe a plataforma multiagente EMSeek, que automatiza todo o fluxo de análise de imagens de microscopia eletrônica**](#54-cornell-university-proposes-multi-agent-platform-emseek-achieving-full-pipeline-automated-analysis-of-electron-microscopy-images)
- [**IA + Zoologia e Botânica**](#ai-zoology-botany)
  - [**1. SBeA analisa comportamentos sociais de animais com um framework de aprendizado few-shot**](#1-sbea-analyzes-animal-social-behaviors-based-on-a-few-shot-learning-framework)
  - [**2. Método de aprendizado profundo baseado em redes siamesas captura automaticamente processos de desenvolvimento embrionário**](#2-deep-learning-method-based-on-siamese-networks-automatically-captures-embryonic-development-processes)
  - [**3. Pipeline sistemático coleta dados de fenótipos vegetais por drones para prever datas ideais de colheita**](#3-systematic-pipeline-for-collecting-plant-phenotype-data-via-drones-to-predict-optimal-harvest-dates)
  - [**4. Sistema de alerta com câmera de IA distingue tigres de outras espécies com precisão**](#4-ai-camera-alert-system-accurately-distinguishes-tigers-from-other-species)
  - [**5. Dados de labradores e comparação de três modelos revelam características comportamentais que afetam o desempenho de cães farejadores**](#5-using-labrador-retriever-data-and-comparing-3-models-reveals-behavioral-traits-affecting-detection-dogs-performance)
  - [**6. Modelo de reconhecimento de imagens de várias espécies baseado na ArcFace Classification Head para reconhecimento facial**](#6-multi-species-image-recognition-model-based-on-arcface-classification-head-for-face-recognition)
  - [**7. Monitoramento da floração das cerejeiras no Japão com APIs de Python e de visão computacional**](#7-monitoring-cherry-blossom-blooming-in-japan-using-python-api-and-computer-vision-api)
  - [**8. Método de genética populacional baseado em aprendizado de máquina revela o mecanismo de formação dos sabores da uva**](#8-machine-learning-based-population-genetics-method-reveals-the-formation-mechanism-of-grape-flavors)
  - [**9. Revisão: como a IA torna a pesquisa bioinformática mais eficiente**](#9-review-unlocking-bioinformatics-research-more-efficiently-with-ai)
  - [**10. Modelo BirdFlow prevê com precisão as rotas de voo de aves migratórias**](#10-birdflow-model-accurately-predicts-flight-paths-of-migratory-birds)
  - [**11. Novo modelo de bioacústica de baleias identifica oito espécies de cetáceos**](#11-new-whale-bioacoustics-model-identifies-8-cetacean-species)
  - [**12. Aprendizado de máquina isola o alfabeto fonético do cachalote, muito semelhante à linguagem humana e com maior capacidade de transmitir informações**](#12-machine-learning-isolates-the-sperm-whale-phonetic-alphabet-highly-similar-to-human-language-with-stronger-information-carrying-capacity)
  - [**13. Modelo PlantLncBoost alcança até 96% de precisão na previsão de lncRNA entre espécies**](#13-plantlncboost-model-achieves-up-to-96-accuracy-in-cross-species-lncrna-prediction)
  - [**14. Perch 2.0 abrange quase 15 mil espécies e renova o estado da arte na classificação e detecção bioacústicas**](#14-perch-20-covers-nearly-15000-species-refreshing-sota-in-bioacoustic-classification-detection)
- [**IA + Agricultura, Silvicultura e Pecuária**](#ai-agriculture-forestry-animal-husbandry)
  - [**1. Uso de redes neurais convolucionais para estimar a produtividade do arroz com rapidez e precisão**](#1-using-convolutional-neural-networks-for-rapid-and-accurate-rice-yield-estimation)
  - [**2. Modelo desenvolvido com o algoritmo YOLOv5 monitora a postura de porcas e o nascimento de leitões**](#2-model-designed-via-yolov5-algorithm-monitors-sow-posture-and-piglet-birth)
  - [**3. Combinação de observações laboratoriais e aprendizado de máquina comprova que sons ultrassônicos emitidos por tomateiros e pés de tabaco estressados se propagam pelo ar**](#3-combining-laboratory-observation-and-machine-learning-to-prove-that-ultrasonic-sounds-emitted-by-stressed-tomato-and-tobacco-plants-can-travel-in-air)
  - [**4. Drones e análise de imagens por IA detectam pragas florestais**](#4-drone--ai-image-analysis-detects-forestry-pests)
  - [**5. Visão computacional e aprendizado profundo são usados para desenvolver um sistema de detecção de claudicação em vacas leiteiras**](#5-computer-vision--deep-learning-developed-for-a-dairy-cow-lameness-detection-system)
- [**IA + Meteorologia**](#ai-meteorology)
  - [**1. Revisão: modelos de previsão meteorológica por aprendizado de máquina orientados por dados**](#1-review-data-driven-machine-learning-weather-forecasting-models)
  - [**2. Revisão: coleta de dados de centros de tempestades de granizo e previsão de eventos extremos com grandes modelos**](#2-review-collecting-data-from-hailstorm-centers-and-predicting-extreme-weather-using-large-models)
  - [**3. Criação de novos algoritmos para prever com precisão precipitações extremas usando simulações globais que resolvem tempestades e aprendizado de máquina**](#3-creating-new-algorithms-to-accurately-predict-extreme-precipitation-using-global-storm-resolving-simulations-and-machine-learning)
  - [**4. Modelo de aprendizado de máquina CSU-MLP baseado em Random Forest prevê eventos meteorológicos severos de médio prazo**](#4-random-forest-based-machine-learning-model-csu-mlp-predicts-medium-range-severe-weather)
  - [**5. Sistema de previsão meteorológica orientado por dados de ponta a ponta Aardvark Weather acelera as previsões dezenas de vezes em comparação aos métodos tradicionais**](#5-end-to-end-data-driven-weather-forecasting-system-aardvark-weather-speeds-up-predictions-by-dozens-of-times-compared-to-traditional-methods)
  - [**6. Sistema de previsão meteorológica por aprendizado de máquina FCN3 oferece inferência ultrarrápida em uma única GPU**](#6-machine-learning-weather-forecasting-system-fcn3-supports-ultra-fast-single-gpu-inference)
  - [**7. Modelo de previsão da monção indiana baseado em 36 estações meteorológicas alcança previsões detalhadas na escala de cidades**](#7-indian-monsoon-forecasting-model-based-on-36-weather-stations-achieves-city-scale-fine-forecasting)
  - [**8. ACE2 conclui uma previsão sazonal de quatro meses em apenas dois minutos**](#8-ace2-completes-a-4-month-seasonal-forecast-in-just-2-minutes)
  - [**9. Modelo incremental de previsão meteorológica VA-MoE é lançado e alcança desempenho de ponta com redução de 75% nos parâmetros**](#9-incremental-weather-forecasting-model-va-moe-released-achieving-sota-performance-with-75-parameter-reduction)
  - [**10. Elucidated Rolling Diffusion Model (ERDM) é lançado, resolve desafios de previsões de longo prazo e supera baselines EDM em previsões de médio a longo prazo**](#10-elucidated-rolling-diffusion-model-erdm-released-solving-long-term-forecasting-challenges-and-maintaining-a-lead-over-edm-baselines-in-medium-to-long-term-forecasts)
  - [**11. Novo modelo de difusão latente OmniCast é lançado e resolve o acúmulo de erros em modelos autorregressivos de previsão meteorológica**](#11-novel-latent-diffusion-model-omnicast-released-resolving-error-accumulation-in-autoregressive-weather-forecasting-models)
  - [**12. NVIDIA propõe novo método de destilação de longo alcance e supera gargalos de IA na previsão meteorológica de longo prazo**](#12-nvidia-proposes-a-novel-long-range-distillation-method-breaking-ai-bottlenecks-in-long-term-weather-forecasting)
  - [**13. Equipe conjunta propõe o modelo de rede neural em grafos SeaCast e realiza previsões oceânicas regionais ultrarrápidas**](#13-joint-team-proposes-graph-neural-network-model-seacast-achieving-ultra-fast-regional-ocean-forecasting)
- [**IA + Astronomia**](#ai-astronomy)
  - [**1. Algoritmo PRIMO aprende regras de propagação da luz ao redor de buracos negros para reconstruir imagens mais nítidas**](#1-primo-algorithm-learns-light-propagation-rules-around-black-holes-to-reconstruct-sharper-black-hole-images)
  - [**2. Treinamento de algoritmos de visão computacional com dados simulados para aprimorar e “restaurar” imagens astronômicas**](#2-training-computer-vision-algorithms-with-simulated-data-to-sharpen-and-restore-astronomical-images)
  - [**3. Uso do algoritmo não supervisionado de aprendizado de máquina Astronomaly para encontrar anomalias antes ignoradas**](#3-using-unsupervised-machine-learning-algorithm-astronomaly-to-find-previously-overlooked-anomalies)
  - [**4. Método baseado em aprendizado de máquina para identificar CMEs e extrair seus parâmetros**](#4-machine-learning-based-method-for-cme-identification-and-parameter-extraction)
  - [**5. Aprendizado profundo descobre 107 casos de linhas de absorção de carbono neutro**](#5-deep-learning-discovers-107-cases-of-neutral-carbon-absorption-lines)
  - [**6. Modelo StarFusion alcança previsões de imagens com alta resolução espacial**](#6-starfusion-model-achieves-high-spatial-resolution-image-prediction)
  - [**7. Método de geração de imagens de satélite baseado em SD3 constrói o maior conjunto de sensoriamento remoto até hoje, o EcoMapper**](#7-satellite-image-generation-method-developed-based-on-sd3-constructing-the-largest-remote-sensing-dataset-to-date-ecomapper)
  - [**8. IA geoespacial Earth AI concentra-se em três tipos essenciais de dados e melhora em 64% a capacidade de raciocínio geoespacial**](#8-geospatial-ai-earth-ai-focuses-on-3-core-data-types-improving-geospatial-reasoning-capabilities-by-64)
  - [**9. Nasce o primeiro modelo fundacional multimodal astronômico AION-1, pré-treinado em 200 milhões de objetos astronômicos**](#9-the-first-astronomical-multimodal-foundation-model-aion-1-is-born-pre-trained-on-200-million-astronomical-targets)
  - [**10. Novo pipeline orientado por dados identifica com precisão sete raras amostras de lentes entre 810 mil quasares usando CNN**](#10-novel-data-driven-pipeline-precisely-identifies-7-rare-lensed-samples-from-810000-quasars-using-cnn)
  - [**11. Equipe da ESA propõe o método semissupervisionado AnomalyMatch para selecionar com eficiência corpos celestes raros em quase 100 milhões de registros do Hubble**](#11-esa-team-proposes-semi-supervised-method-anomalymatch-to-efficiently-screen-rare-celestial-bodies-from-nearly-100-million-hubble-records)
  - [**12. Universidade de Warwick propõe o pipeline de validação RAVEN e confirma 118 novos exoplanetas**](#12-university-of-warwick-proposes-the-raven-validation-pipeline-confirming-118-new-exoplanets)
  - [**13. Universidade de Warwick propõe framework de aprendizado por ensemble para prever com alta precisão parâmetros astrossísmicos de estrelas δ Scuti**](#13-university-of-warwick-proposes-an-ensemble-learning-framework-to-highly-accurately-predict-asteroseismic-parameters-for-δ-scuti-stars)
  - [**14. Equipe de pesquisa espanhola propõe o sistema StreakMind, que usa IA para detectar automaticamente rastros de satélites em imagens astronômicas**](#14-spanish-research-team-proposes-the-streakmind-system-utilizing-ai-to-automatically-detect-satellite-streaks-in-astronomical-images)
- [**IA + Desastres Naturais**](#ai-natural-disaster)
  - [**1. Aprendizado de máquina prevê o risco de subsidência do solo nos próximos 40 anos**](#1-machine-learning-predicts-land-subsidence-risk-over-the-next-40-years)
  - [**2. Modelo de segmentação semântica SCDUNet++ é usado para mapear deslizamentos de terra**](#2-semantic-segmentation-model-scdunet-used-for-landslide-mapping)
  - [**3. Redes neurais convertem imagens solares 2D em imagens reconstruídas em 3D**](#3-neural-networks-convert-2d-solar-images-into-3d-reconstructed-images)
  - [**4. Redes neurais aditivas analisam fatores que influenciam desastres naturais**](#4-additive-neural-networks-analyze-influencing-factors-in-natural-disasters)
  - [**5. Uso de IA explicável para analisar diversos fatores geográficos em Gippsland, Austrália**](#5-using-explainable-ai-to-analyze-various-geographical-factors-in-gippsland-australia)
  - [**6. Modelo de previsão de enchentes baseado em aprendizado de máquina**](#6-machine-learning-based-flood-forecasting-model)
  - [**7. ED-DLSTM realiza previsões de enchentes em áreas sem monitoramento**](#7-ed-dlstm-achieves-flood-prediction-in-unmonitored-areas)
  - [**8. Modelo ChloroFormer fornece alerta antecipado de florações de algas marinhas**](#8-chloroformer-model-provides-early-warning-of-marine-algal-blooms)
  - [**9. Primeiro grande modelo de linguagem marinha OceanGPT é aceito na ACL 2024! IA subaquática incorporada se torna realidade**](#9-the-first-marine-large-language-model-oceangpt-accepted-by-acl-2024-underwater-embodied-ai-becomes-reality)
  - [**10. IA prevê tendências do aquecimento global**](#10-ai-predicts-global-warming-trends)
  - [**11. Novo modelo GeoAI explica a distribuição do fluxo de calor superficial no Planalto Tibetano**](#11-new-geoai-model-explains-surface-heat-flow-distribution-on-the-tibetan-plateau)
  - [**12. Grande modelo inteligente de previsão do ambiente marinho “WenHai” supera previsões numéricas oceânicas**](#12-wenhai-marine-environment-intelligent-forecasting-large-model-outperforms-numerical-marine-forecasting)
  - [**13. Universidade de Minnesota propõe o modelo de aprendizado de máquina guiado por conhecimento FHNN e realiza previsões de enchentes de alta precisão**](#13-university-of-minnesota-proposes-knowledge-guided-machine-learning-model-fhnn-realizing-high-precision-flood-forecasting)
  - [**14. Google lança a versão 2 de seu sistema global de previsão de enchentes e amplia significativamente os prazos de validade das previsões**](#14-google-releases-version-2-of-its-global-flood-forecasting-system-significantly-extending-valid-forecast-times)
- [**Outros**](#others)
  - [**1. Assistente de futebol TacticAI alcança 90% de utilidade prática em esquemas táticos**](#1-tacticai-football-assistant-hits-90-practical-utility-in-tactical-layouts)
  - [**2. Modelo de difusão com remoção de ruído SPDiff permite simular movimentos de multidões em longas distâncias**](#2-denoising-diffusion-model-spdiff-enables-long-range-crowd-movement-simulation)
  - [**3. Instalações científicas inteligentes impulsionam mudanças de paradigma na pesquisa**](#3-intelligent-scientific-facilities-drive-paradigm-shifts-in-research)
  - [**4. DeepSymNet representa expressões simbólicas com base em aprendizado supervisionado**](#4-deepsymnet-represents-symbolic-expressions-based-on-supervised-learning)
  - [**5. Grande modelo de linguagem ChipNeMo auxilia engenheiros no projeto de chips**](#5-large-language-model-chipnemo-assists-engineers-in-chip-design)
  - [**6. AlphaGeometry consegue resolver problemas de geometria**](#6-alphageometry-can-solve-geometry-problems)
  - [**7. Aprendizado por reforço aplicado ao planejamento espacial urbano**](#7-reinforcement-learning-applied-to-urban-spatial-planning)
  - [**8. Framework ChatArena: jogando Lobisomem com grandes modelos de linguagem**](#8-chatarena-framework-playing-werewolf-with-large-language-models)
  - [**9. Revisão: 30 pesquisadores publicam em conjunto na Nature uma retrospectiva de dez anos sobre como a IA remodela paradigmas científicos**](#9-review-30-scholars-co-publish-in-nature-10-year-retrospective-deconstructs-how-ai-reshapes-scientific-paradigms)
  - [**10. Ithaca auxilia epigrafistas na restauração de textos e na atribuição cronológica e geográfica**](#10-ithaca-assists-epigraphers-in-text-restoration-chronological-attribution-and-geographical-attribution)
  - [**11. IA em problemas diretos e inversos de metaóptica: análise de dados baseada em sistemas de metasuperfície**](#11-ai-in-forward-and-inverse-problems-of-meta-optics-data-analysis-based-on-metasurface-systems)
  - [**12. Novo método de inteligência artificial geoespacial: regressão logística ponderada por rede neural geográfica**](#12-a-new-geospatial-artificial-intelligence-method-geographically-neural-network-weighted-logistic-regression)
  - [**13. Uso de modelos de difusão para gerar parâmetros de redes neurais transforma o aprendizado few-shot espaço-temporal em um problema de pré-treinamento de modelos de difusão**](#13-using-diffusion-models-to-generate-neural-network-parameters-transforming-spatiotemporal-few-shot-learning-into-a-diffusion-model-pre-training-problem)
  - [**14. Avanços recentes da equipe de Fei-Fei Li em AI4S: resumo de 16 tecnologias inovadoras em biologia, materiais, saúde e diagnóstico**](#14-latest-ai4s-insights-from-fei-fei-lis-team-16-innovative-technologies-summarized-covering-biologymaterialshealthcarediagnostics)
  - [**15. Previsão precisa dos preços de imóveis em Wuhan! Modelo osp-GNNWR descreve com precisão processos espaciais complexos e fenômenos geográficos**](#15-accurate-prediction-of-wuhan-housing-prices-osp-gnnwr-model-accurately-describes-complex-spatial-processes-and-geographical-phenomena)
  - [**16. Aprendizado zero-shot libera modelo de difusão condicional otimizado para decifrar inscrições em ossos oraculares**](#16-introducing-zero-shot-learning-to-release-a-conditional-diffusion-model-optimized-for-oracle-bone-script-decipherment)
  - [**17. Stanford, Apple e outras 23 instituições lançam o benchmark DCLM; modelo fundacional tem desempenho equivalente ao Llama 3 8B**](#17-stanfordapple-and-23-other-institutions-release-the-dclm-benchmark-foundation-model-performs-on-par-with-llama3-8b)
  - [**18. PoCo resolve o dilema da heterogeneidade das fontes de dados e permite que robôs executem várias tarefas com flexibilidade**](#18-poco-solves-the-data-source-heterogeneity-dilemma-enabling-robots-to-execute-multi-tasks-flexibly)
  - [**19. Com 140 mil imagens! Conjunto de dados de inscrições em ossos oraculares ajuda equipe a ganhar o prêmio de melhor artigo da ACL**](#19-containing-140000-images-oracle-bone-script-dataset-helps-team-win-acl-best-paper-award)
  - [**20. Proposta de esquema de previsão de canais baseado em LLMs pré-treinados: GPT-2 potencializa a camada física das comunicações sem fio**](#20-proposing-a-channel-prediction-scheme-based-on-pre-trained-llms-gpt-2-empowers-the-physical-layer-of-wireless-communications)
  - [**21. Primeiro modelo de rede adversarial generativa para bordado com vários tipos de pontos**](#21-the-first-generative-adversarial-network-model-for-multi-stitch-embroidery)
  - [**22. Fast Automated Scanning Toolkit (FAST) obtém informações de amostras com eficiência**](#22-fast-automated-scanning-toolkit-fast-efficiently-acquires-sample-information)
  - [**23. Modelo fundacional de dinâmica populacional PDFM é disponibilizado em código aberto e prevê com precisão desemprego e pobreza nos EUA**](#23-population-dynamics-foundation-model-pdfm-open-sourced-precisely-predicting-us-unemployment-and-poverty-rates)
  - [**24. Modelo de aprendizado profundo CatGWR estima a não estacionariedade espacial**](#24-deep-learning-model-catgwr-estimates-spatial-non-stationarity)
  - [**25. Primeiro sistema de intervenção de exercícios em RV do mundo, REVERIE, transforma a saúde física, mental e cerebral de jovens**](#25-worlds-first-vr-exercise-intervention-system-reverie-reshapes-youth-brain-body-mind-health)
  - [**26. Com base em mais de 176 mil inscrições, Aeneas realiza pela primeira vez a restauração de inscrições romanas antigas de qualquer extensão**](#26-based-on-over-176k-inscription-data-aeneas-achieves-arbitrary-length-restoration-of-ancient-roman-inscriptions-for-the-first-time)
  - [**27. Framework de geração de vídeos panorâmicos PanoWan também realiza edição de vídeo zero-shot**](#27-panoramic-video-generation-framework-panowan-also-handles-zero-shot-video-editing)
  - [**28. Framework inteligente de classificação de cerâmicas baseado no YOLOv11 integra modelagem visual e análise econômica para classificar artefatos e estimar seu valor**](#28-yolov11-based-ceramic-classification-intelligent-framework-integrates-visual-modeling-and-economic-analysis-achieving-artifact-classification-and-value-estimation)
  - [**29. Chip “cérebro de micro-ondas” é criado e processa simultaneamente dados ultrarrápidos e sinais sem fio com 75% de precisão e potência de 176 miliwatts**](#29-microwave-brain-chip-born-simultaneously-processing-ultra-high-speed-data-and-wireless-signals-with-75-accuracy-at-176-milliwatts-power)
  - [**30. Modelo de imputação e previsão espaço-temporal STIMP é lançado para prever com precisão a distribuição costeira de clorofila-a**](#30-spatiotemporal-imputation-and-prediction-model-stimp-released-realizing-precise-predictions-of-coastal-chlorophyll-a-distribution)
  - [**31. MIT e colaboradores alcançam previsão de alta precisão da dinâmica do plasma em condições few-shot com aprendizado de máquina**](#31-mit-and-others-achieve-high-precision-prediction-of-plasma-dynamics-under-few-shot-conditions-based-on-machine-learning)
  - [**32. Reac-Discovery integra modelagem matemática, aprendizado de máquina e experimentos automatizados para resolver o desafio de universalidade de laboratórios autônomos**](#32-reac-discovery-fuses-mathematical-modeling-machine-learning-and-automated-experiments-to-solve-the-universality-challenge-of-self-driving-laboratory-systems)
  - [**33. Primeiro framework de modelagem neuronal NOBLE validado com dados corticais humanos é apresentado**](#33-the-first-neuron-modeling-framework-noble-validated-by-human-cortical-data-is-introduced)
  - [**34. Framework de geolocalização de imagens LocDiff é lançado e permite posicionamento global preciso sem grade nem biblioteca de referência**](#34-image-geolocation-framework-locdiff-goes-online-enabling-grid-free-and-reference-library-free-global-precision-positioning)
  - [**35. Aprendizado de máquina combinado com py-GC-MS identifica com precisão indícios de vida em rochas arqueanas**](#35-machine-learning-combined-with-py-gc-ms-precisely-identifies-evidence-of-life-in-archean-rocks)
  - [**36. Equipe da Universidade Tsinghua propõe o método de regressão neurossimbólica ND² para derivar automaticamente fórmulas complexas da dinâmica de redes**](#36-tsinghua-university-team-proposes-neuro-symbolic-regression-method-nd-to-automatically-derive-complex-network-dynamics-formulas)
  - [**37. Equipe da Universidade de Zhejiang propõe método geologicamente condicionado de previsão de potencial mineral que representa explicitamente a anisotropia da mineralização**](#37-zhejiang-university-team-proposes-geologically-constrained-mineral-prospectivity-prediction-method-explicitly-depicting-mineralization-anisotropy)
  - [**38. Equipe da Tsinghua e da UChicago publica na Nature: ferramentas de IA ampliam o impacto dos cientistas, mas restringem o foco da ciência**](#38-tsinghua-and-uchicago-team-publishes-in-nature-ai-tools-expand-scientists-impact-but-contract-sciences-focus)
  - [**39. Equipe da UC propõe espectrômetro em chip aprimorado por IA, com alta fidelidade espectral em volume ultracompacto**](#39-uc-team-proposes-ai-augmented-chip-scale-spectrometer-achieving-high-spectral-fidelity-in-an-ultra-small-volume)
  - [**40. Laboratório Nacional de Oak Ridge do Departamento de Energia dos EUA propõe o método D-CHAG, reduzindo significativamente o uso de memória de modelos fundacionais multicanais**](#40-us-doe-oak-ridge-national-lab-proposes-d-chag-method-significantly-reducing-memory-footprint-for-multi-channel-foundation-models)
  - [**41. Equipe da Polymathic AI propõe o modelo fundacional de contínuos Walrus e bate recordes de desempenho de simulação entre domínios**](#41-polymathic-ai-team-proposes-continuum-foundation-model-walrus-setting-records-in-cross-domain-simulation-performance)
  - [**42. EPFL propõe a nova arquitetura DYNAMI-CAL GraphNet, uma GNN informada pela física que modela com precisão dinâmicas de múltiplos corpos**](#42-epfl-proposes-novel-architecture-dynami-cal-graphnet-a-physics-informed-gnn-accurately-modeling-multi-body-dynamics)
  - [**43. MIT propõe o novo método Wave-Former, que realiza reconstrução 3D de alta precisão de objetos completamente oclusos**](#43-mit-proposes-novel-method-wave-former-achieving-high-precision-3d-reconstruction-of-completely-occluded-objects)
  - [**44. MIT propõe o framework paralelo DRiffusion de rascunho e refinamento e acelera a inferência de modelos de difusão sem perda**](#44-mit-proposes-driffusion-draft-and-refine-parallel-framework-realizing-lossless-acceleration-for-diffusion-model-inference)
  - [**45. Technion - Israel Institute of Technology propõe Task Tokens, permitindo que modelos fundacionais de comportamento se adaptem com flexibilidade a tarefas específicas**](#45-technion---israel-institute-of-technology-proposes-task-tokens-allowing-behavior-foundation-models-to-flexibly-adapt-to-specific-tasks)
  - [**46. MIT e colaboradores propõem o framework EnergAIzer para estimar com rapidez e precisão o consumo de energia de GPUs em cargas de trabalho de IA**](#46-mit-and-others-propose-energaizer-framework-achieving-fast-and-accurate-gpu-power-estimation-for-ai-workloads)
  - [**47. UIUC propõe o framework de agentes heterogêneos Eywa, superando os limites de grandes modelos centrados em linguagem**](#47-uiuc-proposes-heterogeneous-agent-framework-eywa-breaking-through-the-limits-of-language-centric-large-models)
  - [**48. Universidade Stanford e colaboradores usam modelos substitutos LSTM para acelerar em 252 vezes a simulação de óptica não linear de segunda ordem**](#48-stanford-university-and-others-use-lstm-surrogate-models-to-achieve-252x-accelerated-simulation-of-second-order-nonlinear-optics)

## **Apresentação**

Desde 2020, projetos científicos como o AlphaFold colocaram a inteligência artificial para a ciência (AI for Science, AI4S) no centro das aplicações de IA. Nos últimos anos, áreas que vão da biofarmacêutica à astronomia e à meteorologia, além de disciplinas fundamentais como a química dos materiais, tornaram-se novas frentes de atuação da IA.

Com cada vez mais profissionais de diferentes áreas aplicando técnicas como aprendizado de máquina e aprendizado profundo ao processamento de dados e à construção de modelos em suas pesquisas, e com a colaboração entre equipes multidisciplinares se fortalecendo, mais pesquisadores têm percebido o potencial da AI4S. Ainda assim, sua adoção em larga escala não se concretizou. Há questões urgentes a resolver, como aumentar a reprodutibilidade das pesquisas, reduzir as barreiras técnicas e melhorar a qualidade dos dados.

Além das universidades e instituições de pesquisa que exploram ativamente a AI4S, governos e grandes empresas de tecnologia também perceberam o potencial da IA para transformar a pesquisa científica e começaram a formular políticas e planos nessa direção. A AI4S é, sem dúvida, uma tendência incontornável.

Como uma das primeiras comunidades a se dedicar à IA para a ciência, a HyperAI tem prazer em compartilhar amplamente os avanços e resultados mais recentes, acompanhando o crescimento do setor. Esperamos que, ao divulgar artigos e políticas de ponta, mais equipes reconheçam como a IA pode contribuir para a pesquisa científica e ajudem a impulsionar o desenvolvimento da AI4S.

Até agora, a HyperAI analisou e compartilhou quase 200 artigos. Para facilitar a consulta, organizamos os textos por área, indicamos os periódicos e as datas de publicação e destacamos palavras-chave (equipes de pesquisa, trabalhos relacionados, conjuntos de dados etc.). Clique nos títulos para acessar a página de destaque da pesquisa, que inclui o link para baixar o artigo completo.

Este documento será mantido como um projeto de código aberto. Atualizaremos continuamente as análises e também convidamos todos a compartilhar resultados de pesquisa relevantes. Se sua equipe ou grupo de pesquisa precisar divulgar um trabalho, entre em contato pelo WeChat com 神经星星 (ID do WeChat: Hyperai01).

## **IA + Biofarmacêutica**

### **1. [AdaDR supera vários métodos de referência na reposição de medicamentos](https://hyper.ai/news/30434)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30434](https://hyper.ai/news/30434)
- **Equipe de pesquisa:** Equipe de pesquisa de Min Li, da Universidade Central do Sul
- **Pesquisas relacionadas:** conjunto de dados Gdataset, conjunto Cdataset, conjunto Ldataset, conjunto LRSSL, framework GCNs, AdaDR
- **Periódico:** Bioinformatics, 2024.01
- **Artigo:** [Reposição de medicamentos com redes convolucionais em grafos adaptativas](https://academic.oup.com/bioinformatics/article/40/1/btad748/7467059)

### **2. [IMN4NPD acelera a desreplicação de grandes agrupamentos em redes moleculares e anota autoarestas e nós pareados](https://hyper.ai/news/30363)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30363](https://hyper.ai/news/30363)
- **Equipe de pesquisa:** Equipe de pesquisa de Shao Liu, da Universidade Central do Sul
- **Pesquisas relacionadas:** banco de espectros MS/MS, banco de estruturas, molDiscovery, NPClassifier, t-SNE
- **Periódico:** Analytical Chemistry, 2024.02
- **Artigo:** [IMN4NPD: um fluxo de trabalho integrado de redes moleculares para a desreplicação de produtos naturais](https://doi.org/10.1021/acs.analchem.3c04746)

### **3. [MIDAS, um modelo generativo profundo para a integração em mosaico de dados multiômicos de célula única](https://hyper.ai/news/29785)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29785](https://hyper.ai/news/29785)
- **Equipe de pesquisa:** Equipe de pesquisa de Xiaomin Ying, da Academia de Ciências Médicas Militares
- **Pesquisas relacionadas:** conjunto de dados IPBMC, conjunto dogma-full, conjunto teadog-full, MMIDAS, aprendizado autossupervisionado, abordagens da teoria da informação, redes neurais profundas, SGVB, dados multiômicos em mosaico de célula única
- **Periódico:** Nature Biotechnology, 2024.01
- **Artigo:** [Integração em mosaico e transferência de conhecimento de dados multimodais de célula única com MIDAS](https://www.nature.com/articles/s41587-023-02040-y)

### **4. [ResGen: um modelo de geração molecular 3D baseado em cavidades de proteínas](https://hyper.ai/news/29026)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29026](https://hyper.ai/news/29026)
- **Equipe de pesquisa:** Equipe de pesquisa de Tingjun Hou, da Universidade de Zhejiang
- **Pesquisas relacionadas:** conjunto de dados CrossDock2020, autorregressão global, autorregressão de átomos, modelagem multiescala paralela, SBMG. Oito vezes mais rápido que as técnicas de ponta.
- **Periódico:** Nature Machine Intelligence, 2023.09
- **Artigo:** [ResGen é um modelo de geração molecular 3D ciente de cavidades, baseado em modelagem multiescala paralela](https://www.nature.com/articles/s42256-023-00712-7)

### **5. [Modelos de grande porte e aprendizado de máquina para prever parâmetros cinéticos de enzimas com alta precisão](https://hyper.ai/news/29000)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29000](https://hyper.ai/news/29000)
- **Equipe de pesquisa:** Equipe de pesquisa de Xiaozhou Luo, da CAS
- **Pesquisas relacionadas:** conjunto de dados kcat/Km, conjunto de dados da constante de Michaelis, conjunto de dados de pH e temperatura, conjunto DLKcat, framework UniKP, ProtT5-XL-UniRef50, modelo Transformer SMILES, modelos de ensemble, Random Forest, Extremely Randomized Trees, modelos de regressão linear
- **Periódico:** Nature Communications, 2023.12
- **Artigo:** [UniKP: um framework unificado para a previsão de parâmetros cinéticos de enzimas](https://www.nature.com/articles/s41467-023-44113-1)

### **6. [MIT usa aprendizado profundo para descobrir novos antibióticos](https://hyper.ai/news/28886)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28886](https://hyper.ai/news/28886)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** banco de dados Mcule, banco de dados do Broad Institute, rede neural em grafos Chemprop, aprendizado profundo. Foram selecionados 3.646 compostos antibióticos.
- **Periódico:** Nature, 2023.12
- **Artigo:** [Descoberta de uma classe estrutural de antibióticos com aprendizado profundo explicável](https://www.nature.com/articles/s41586-023-06887-8)

### **7. [Redes neurais decifram a seletividade do acoplamento entre GPCRs e proteínas G](https://hyper.ai/news/28361)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28361](https://hyper.ai/news/28361)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade da Flórida
- **Pesquisas relacionadas:** redes neurais de classificação binária, aprendizado de máquina, modelos de aprendizado profundo não supervisionado. Foram construídos modelos de grão grosso de 124 GPCRs de diferentes mamíferos.
- **Periódico:** Cell Reports, 2023.09
- **Artigo:** [Regras e mecanismos que regem a seletividade do acoplamento de proteínas G aos GPCRs](https://doi.org/10.1016/j.celrep.2023.113173)

### **8. [Macformer transforma o medicamento acíclico fedratinibe em um macrociclo](https://hyper.ai/news/28189)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28189](https://hyper.ai/news/28189)
- **Equipe de pesquisa:** Grupo de pesquisa de Honglin Li, da Universidade de Ciência e Tecnologia do Leste da China
- **Pesquisas relacionadas:** conjunto de dados ZINC, banco de dados ChEMBL, modelos de aprendizado profundo, arquitetura Transformer, Macformer
- **Periódico:** Nature Communication, 2023.07
- **Artigo:** [Macrociclização de moléculas lineares por aprendizado profundo para facilitar a descoberta de candidatos a medicamentos macrocíclicos](https://www.nature.com/articles/s41467-023-40219-8)

### **9. [Rede de regressão + CGMD prevê propriedades de auto-organização de dezenas de bilhões de peptídeos](https://hyper.ai/news/26408)**

- **Destaque da pesquisa:** [https://hyper.ai/news/26408](https://hyper.ai/news/26408)
- **Equipe de pesquisa:** Grupo de pesquisa de Wenbin Li, da Universidade Westlake
- **Pesquisas relacionadas:** amostragem por hipercubo latino, modelo CGMD, modelo de previsão de AP, Transformer, MLP, modelo TRN. Foi obtido o AP de pentapeptídeos e decapeptídeos.
- **Periódico:** Advanced Science, 2023.09
- **Artigo:** [O aprendizado profundo impulsiona a descoberta de peptídeos auto-organizáveis com mais de 10 trilhões de sequências](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202301544)

### **10. [Aprendizado não supervisionado prevê 71 milhões de mutações genéticas](https://hyper.ai/news/26154)**

- **Destaque da pesquisa:** [https://hyper.ai/news/26154](https://hyper.ai/news/26154)
- **Equipe de pesquisa:** Equipe de pesquisa do Google DeepMind
- **Pesquisas relacionadas:** conjunto de dados ClinVar, AlphaFold, aprendizado com rótulos fracos, aprendizado não supervisionado, AlphaMissense
- **Periódico:** Science, 2023.09
- **Artigo:** [Previsão precisa do efeito de variantes missense em todo o proteoma com AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492)

### **11. [IA para análise de odores desenvolvida com base em redes neurais em grafos (GNN)](https://hyper.ai/news/25952)**

- **Destaque da pesquisa:** [https://hyper.ai/news/25952](https://hyper.ai/news/25952)
- **Equipe de pesquisa:** Osmo, empresa derivada do Google Research
- **Pesquisas relacionadas:** banco de dados GS-LF, GNN, algoritmo de otimização bayesiana. Superou o desempenho humano em 53% dos julgamentos sobre moléculas químicas e em 55% dos descritores de odores.
- **Periódico:** Science, 2023.08
- **Artigo:** [Um mapa principal de odores unifica diferentes tarefas da percepção olfativa](https://www.science.org/doi/full/10.1126/science.ade4401)

### **12. [Redes neurais em grafos selecionam ingredientes antienvelhecimento seguros e altamente eficazes](https://hyper.ai/news/25822)**

- **Destaque da pesquisa:** [https://hyper.ai/news/25822](https://hyper.ai/news/25822)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** aprendizado profundo, GNN, redes neurais convolucionais. A taxa de verdadeiros positivos do modelo Chemprop foi de 11,6%, acima dos 1,9% obtidos na seleção manual.
- **Periódico:** Nature Communications, 2023.05
- **Artigo:** [Descoberta de senolíticos de pequenas moléculas com redes neurais profundas](https://www.nature.com/articles/s43587-023-00415-z)

### **13. [Aprendizado de máquina analisa quantitativamente a quantidade e a localização da liberação de dopamina](https://hyper.ai/news/25153)**

- **Destaque da pesquisa:** [https://hyper.ai/news/25153](https://hyper.ai/news/25153)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade da Califórnia, Berkeley
- **Pesquisas relacionadas:** SVM, RF, aprendizado de máquina. A precisão na determinação da intensidade do estímulo chegou a 0,832, e a precisão na identificação da região cerebral de liberação da dopamina foi de 0,708.
- **Periódico:** ACS Chemical Neuroscience, 2023.06
- **Artigo:** [Identificação de assinaturas neurais da sinalização da dopamina com aprendizado de máquina](https://pubs.acs.org/doi/full/10.1021/acschemneuro.3c00001)

### **14. [Aprendizado de máquina descobre três medicamentos antienvelhecimento](https://hyper.ai/news/24578)**

- **Destaque da pesquisa:** [https://hyper.ai/news/24578](https://hyper.ai/news/24578)
- **Equipe de pesquisa:** Dr. James L. Kirkland e equipe, da Mayo Clinic
- **Pesquisas relacionadas:** aprendizado de máquina, modelo Random Forest (RF), validação cruzada em cinco partes. Foram descobertos os fármacos senolíticos Ginkgetin, Periplocin e Oleandrin.
- **Periódico:** Nature Communications, 2023.06
- **Artigo:** [Descoberta de senolíticos com aprendizado de máquina](https://www.nature.com/articles/s41467-023-39120-1)

### **15. [Aprendizado profundo seleciona novos antibióticos contra Acinetobacter baumannii](https://hyper.ai/news/24499)**

- **Destaque da pesquisa:** [https://hyper.ai/news/24499](https://hyper.ai/news/24499)
- **Equipe de pesquisa:** Equipes de pesquisa da McMaster University e do MIT
- **Pesquisas relacionadas:** subbiblioteca de triagem de alto rendimento do Broad Institute, aprendizado de máquina, aprendizado profundo. Cerca de 7.500 moléculas foram selecionadas, levando à descoberta do composto antibacteriano abaucina.
- **Periódico:** Nature Chemical Biology, 2023.05
- **Artigo:** [Descoberta guiada por aprendizado profundo de um antibiótico contra Acinetobacter baumannii](https://www.nature.com/articles/s41589-023-01349-8#access-options)

### **16. [Modelos de aprendizado de máquina preveem a capacidade de impressão de biotintas](https://hyper.ai/news/24237)**

- **Destaque da pesquisa:** [https://hyper.ai/news/24237](https://hyper.ai/news/24237)
- **Equipe de pesquisa:** Equipes de pesquisa da Universidade de Santiago de Compostela e da UCL
- **Pesquisas relacionadas:** modelos de aprendizado de máquina, ANN, SVM, RF, kappa, R², MAE. A precisão chegou a 97,22%.
- **Periódico:** International Journal of Pharmaceutics: X, 2023.12
- **Artigo:** [Previsão de resultados de impressão farmacêutica a jato de tinta usando aprendizado de máquina](https://www.sciencedirect.com/science/article/pii/S2590156723000257)

### **17. [Aprendizado de máquina diferencia células-tronco pluripotentes](https://hyper.ai/news/23940)**

- **Destaque da pesquisa:** [https://hyper.ai/news/23940](https://hyper.ai/news/23940)
- **Equipe de pesquisa:** Grupos de pesquisa de Yang Zhao e Yu Zhang, da Universidade de Pequim, em colaboração com o grupo de pesquisa de Yiyan Liu, da Universidade Jiaotong de Pequim
- **Pesquisas relacionadas:** imageamento de células vivas, aprendizado de máquina, modelos fracamente supervisionados, modelo de aprendizado profundo pix2pix. A eficiência de diferenciação aumentou de 21,6% ± 2,7% para 88,8% ± 10,5%.
- **Periódico:** Cell Discovery, 2023.06
- **Artigo:** [Uma estratégia de aprendizado de máquina baseada em imagens de células vivas para reduzir a variabilidade em sistemas de diferenciação de PSC](https://www.nature.com/articles/s41421-023-00543-1)

### **18. [Modelo de aprendizado de máquina prevê a taxa de liberação de medicamentos injetáveis de ação prolongada](https://hyper.ai/news/33892)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33892](https://hyper.ai/news/33892)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade de Toronto
- **Pesquisas relacionadas:** MLR, Lasso, PLS, DT, RF, LGBM, XGB, AutoNGB, SVR, k-NN, NN, validação cruzada aninhada, algoritmo de agrupamento pelo vizinho mais distante.
- **Periódico:** Nature Communications, 2023.01
- **Artigo:** [Modelos de aprendizado de máquina para acelerar o projeto de injetáveis poliméricos de ação prolongada](https://www.nature.com/articles/s41467-022-35343-w)

### **19. [Algoritmo de aprendizado de máquina prevê com eficácia as propriedades antimaláricas de plantas](https://hyper.ai/news/33883)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33883](https://hyper.ai/news/33883)
- **Equipe de pesquisa:** Equipe de pesquisa dos Royal Botanic Gardens, Kew, e da Universidade de St Andrews
- **Pesquisas relacionadas:** algoritmos Logit, SVC, XGB, BNN e GridSearchCV, validação cruzada estratificada em dez partes, iterações de Monte Carlo via cadeias de Markov. A precisão foi de 0,67.
- **Periódico:** Frontiers in Plant Science, 2023.05
- **Artigo:** [Aprendizado de máquina aprimora a previsão de plantas como possíveis fontes de antimaláricos](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10248027)

### **20. [Método de ensemble de aprendizado de máquina prevê a imunogenicidade de fragmentos de proteínas virais](https://hyper.ai/news/30786)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30786](https://hyper.ai/news/30786)
- **Equipe de pesquisa:** Equipe de pesquisa de Jing Li, da Universidade Beihang
- **Pesquisas relacionadas:** banco de dados de proteínas UniProt, banco de dados Protegen, abordagem de ensemble de aprendizado de máquina VirusImmu, RF, XGBoost, kNN, validação cruzada com amostragem aleatória.
- **Periódico:** bioRxiv, 2023.11
- **Artigo:** [VirusImmu: uma nova abordagem de ensemble de aprendizado de máquina para prever a imunogenicidade viral](https://www.biorxiv.org/content/10.1101/2023.11.23.568426v1)

### **21. [IA generativa é usada para desenvolver novos antibióticos](https://hyper.ai/news/31421)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31421](https://hyper.ai/news/31421)
- **Equipe de pesquisa:** Equipe da McMaster University e da Stanford University
- **Pesquisas relacionadas:** biblioteca Pharmakon-1760, banco de dados Drug Repurposing Hub, conjunto de triagem de pequenas moléculas sintéticas, busca em árvore de Monte Carlo, modelo de IA generativa SyntheMol. Foram geradas 24.335 moléculas completas e projetados compostos estruturalmente novos e fáceis de sintetizar.
- **Periódico:** Nature Machine Intelligence, 2024.03
- **Artigo:** [IA generativa para projetar e validar antibióticos estruturalmente novos e fáceis de sintetizar](https://www.nature.com/articles/s42256-024-00809-7 )

### **22. [Sistema automatizado, rápido e multidimensional de rastreamento de partículas individuais baseado em aprendizado profundo](https://hyper.ai/news/31341)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31341](https://hyper.ai/news/31341)
- **Equipe de pesquisa:** Equipe do Prof. Ning Fang, da Universidade de Xiamen
- **Pesquisas relacionadas:** dispositivos de imageamento multidimensional, imageamento em dois planos focais, microscopia de paralaxe, equipamentos de imageamento multidimensional, modelos de redes neurais convolucionais, resistência a ruído e robustez.
- **Periódico:** Nature Machine Intelligence, 2024.03
- **Artigo:** [Rastreamento multidimensional automatizado de partículas individuais em células vivas com auxílio do aprendizado profundo](https://doi.org/10.1021/acs.nanolett.3c04870)

### **23. [Framework de aprendizado de máquina ProEnsemble: otimização de combinações de promotores em vias evolutivas](https://hyper.ai/news/30594)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30594](https://hyper.ai/news/30594)
- **Equipe de pesquisa:** Equipe de Xiaozhou Luo, da CAS
- **Pesquisas relacionadas:** biologia sintética, epistasia gênica, plataformas de automação, validação cruzada em dez partes, modelos de ensemble, Gradient Boosting Regressor, Ridge Regressor, Gradient Boosting, chassis universal para a síntese eficiente de flavonoides.
- **Periódico:** ADVANCED SCIENCE, 2024.02
- **Artigo:** [Evolução de vias por meio de uma estratégia de gargalo e remoção do gargalo, com balanceamento de fluxo auxiliado por aprendizado de máquina](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202306935)

### **24. [Rede neural em grafos ProtLGN, ciente do microambiente, orienta a evolução dirigida de proteínas](https://hyper.ai/news/32246)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32246](https://hyper.ai/news/32246)
- **Equipe de pesquisa:** Grupo de pesquisa de Liang Hong, da Universidade Jiao Tong de Xangai
- **Pesquisas relacionadas:** rede neural em grafos ciente do microambiente, redes leves de remoção de ruído em grafos, pré-treinamento autossupervisionado, redes neurais em grafos equivariantes. Mais de 40% das proteínas mutantes de ponto único projetadas pelo PROTLGN superaram suas contrapartes do tipo selvagem.
- **Periódico:** JOURNAL OF CHEMICAL INFORMATION AND MODELING, 2024.04
- **Artigo:** [Engenharia de proteínas com redes neurais leves de remoção de ruído em grafos](https://pubs.acs.org/doi/10.1021/acs.jcim.4c00036)

### **25. [Modelo de aprendizado profundo AlphaPPIMd: exploração de ensembles conformacionais de complexos proteína-proteína](https://hyper.ai/news/32435)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32435](https://hyper.ai/news/32435)
- **Equipe de pesquisa:** Equipe de Jianmin Wang, da Universidade Yonsei
- **Pesquisas relacionadas:** aprendizado profundo, IA generativa, Transformer, aprendizado com redes neurais generativas, dinâmica molecular, conjunto de trajetórias do complexo barnase-barstar, Protein Data Bank, modelo AlphaPPIMd, mecanismo de autoatenção, módulo de otimização de características, pontuações de atenção, modelo de todos os átomos. A precisão média no treinamento foi de 0,995 e a precisão média na validação, de 0,999.
- **Periódico:** Journal of Chemical Theory and Computation, 2024.05
- **Artigo:** [Exploração de ensembles conformacionais de complexos proteína-proteína com um modelo generativo baseado em Transformer](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00255)

### **26. [Novo degradador da proteína supressora de tumores dp53m inibe a proliferação de células cancerosas](https://hyper.ai/news/32527)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32527](https://hyper.ai/news/32527)
- **Equipe de pesquisa:** Equipe do Prof. Sijin Wu, da Faculdade de Farmácia Huihu da Xi'an Jiaotong-Liverpool University, e equipes do Prof. Songbo Xie e do Prof. Diansheng Zhong, do Hospital Geral da Tianjin Medical University
- **Pesquisas relacionadas:** simulação de MD, método pós-SELEX iterativo guiado por acoplamento molecular. O dp53m reconhece especificamente a proteína p53-R175H e a degrada.
- **Periódico:** Science Bulletin, 2024.05
- **Artigo:** [Um PROTAC baseado em aptâmero de DNA projetado para o tratamento preciso de cânceres causados pela mutação hotspot p53-R175H](https://www.sciencedirect.com/science/article/pii/S2095927324003517)

### **27. [Melhor artigo de estudante da CVPR! Modelo multimodal BioCLIP realiza aprendizado zero-shot](https://hyper.ai/news/32544)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32544](https://hyper.ai/news/32544)
- **Equipe de pesquisa:** Equipe de Jiaman Wu, da The Ohio State University
- **Pesquisas relacionadas:** conjunto de imagens biológicas TreeOfLife-10M, modelos multimodais, visão computacional, codificador visual, codificador de texto, modelo de linguagem autorregressivo. O modelo teve excelente desempenho em tarefas zero-shot e few-shot.
- **Periódico:** CVPR 2024, 2024.02
- **Artigo:** [BioCLIP: um modelo fundacional de visão para a árvore da vida](https://openaccess.thecvf.com/content/CVPR2024/html/Stevens_BioCLIP_A_Vision_Foundation_Model_for_the_Tree_of_Life_CVPR_2024_paper.html)

### **28. [100 milhões de parâmetros! Modelo fundacional celular scFoundation modela 20 mil genes simultaneamente](https://hyper.ai/news/32623)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32623](https://hyper.ai/news/32623)
- **Equipe de pesquisa:** Prof. Xuegong Zhang (Universidade Tsinghua), Prof. Jianzhu Ma (Tsinghua AIR) e Dr. Le Song (BioMap)
- **Pesquisas relacionadas:** modelo fundacional de IA celular, dados ômicos de célula única humana DISCO, bancos de dados EMBL-EBI, conjuntos de dados GEO, dados do Single Cell Portal, conjuntos HCA, conjuntos hECA, Transformer, estrutura assimétrica de codificador-decodificador, módulos vetoriais, modelagem RDA.
- **Periódico:** Nature Methods, 2024.06
- **Artigo:** [Modelo fundacional em larga escala para transcriptômica de célula única](https://www.nature.com/articles/s41592-024-02305-7)

### **29. [Aceito na ICML, modelo de linguagem de proteínas ESM-AA supera o estado da arte tradicional](https://hyper.ai/news/32674)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32674](https://hyper.ai/news/32674)
- **Equipe de pesquisa:** Prof. Hao Zhou (Universidade Tsinghua), em colaboração com a Universidade de Pequim, a Universidade de Nanjing e a Shuimu BioSciences
- **Pesquisas relacionadas:** conjunto de proteínas AlphaFold DB, conjunto de proteínas Dp e conjunto molecular Dm, descompressão, modelagem de linguagem mascarada em múltiplas escalas.
- **Periódico:** ICML 2024, 2024.06
- **Artigo:** [ESM All-Atom: modelo de linguagem de proteínas multiescala para modelagem molecular unificada](https://icml.cc/virtual/2024/poster/35119)

### **30. [Algoritmo SPACE é publicado em periódico da Cell! Sua capacidade de descobrir módulos teciduais supera ferramentas semelhantes](https://hyper.ai/news/32738)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32738](https://hyper.ai/news/32738)
- **Equipe de pesquisa:** Grupo de Qiangfeng Zhang, da Universidade Tsinghua
- **Pesquisas relacionadas:** transcriptômica espacial, conjunto STARmap PLA de camundongo, conjunto MERFISH AB de camundongo, conjunto MERFISH WB de camundongo, conjunto Xenium BC humano, conjunto CosMx NSCLC humano, conjunto Visium de cérebro humano, codificadores, decodificadores de grafos de proximidade, decodificadores de expressão gênica, proximidade espacial, aprendizado autossupervisionado.
- **Periódico:** Cell Systems, 2024.06
- **Artigo:** [Descoberta de módulos teciduais em dados de transcriptômica espacial com resolução de célula única por meio de embeddings celulares cientes das interações entre células](https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00124-8)

### **31. [Novos avanços baseados no AlphaFold revelam a diversidade dinâmica das proteínas](https://hyper.ai/news/33075)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33075](https://hyper.ai/news/33075)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** técnica flow matching, modelos de linguagem de proteínas, redes neurais, AlphaFold, ESMFold.
- **Periódico:** ICML 2024, 2024.06
- **Artigo:** [AlphaFold encontra flow matching para gerar ensembles de proteínas](https://openreview.net/forum?id=rs8Sh2UASt)

### **32. [P450Diffusion: método de projeto de novo de enzimas P450 desenvolvido com modelos de difusão](https://hyper.ai/news/33057)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33057](https://hyper.ai/news/33057)
- **Equipe de pesquisa:** Equipes de Huifeng Jiang e Jian Cheng, do Instituto de Biotecnologia Industrial de Tianjin, CAS
- **Pesquisas relacionadas:** evolução dirigida, modelos de difusão, aprendizado profundo, modelos probabilísticos de difusão com remoção de ruído, ancoragem em três pontos, ajuste fino de modelos de difusão, pré-treinamento. A capacidade catalítica aumentou 3,5 vezes.
- **Periódico:** Research, 2024.07
- **Artigo:** [Cytochrome P450 Enzyme Design by Constraining the Catalytic Pocket in a Diffusion Model](https://spj.science.org/doi/10.34133/research.0413)

### **33. [Redes neurais em grafos equivariantes preveem sítios de ligação em proteínas-alvo e aumentam o desempenho em 20%](https://hyper.ai/news/32957)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32957](https://hyper.ai/news/32957)
- **Equipe de pesquisa:** Equipe da Escola Gaoling de Inteligência Artificial, Universidade Renmin da China
- **Pesquisas relacionadas:** redes neurais em grafos equivariantes E(3), redes neurais convolucionais, framework EquiPocket, conjunto scPDB, conjunto PDBbind, conjunto COACH 420, conjunto HOLO4K, módulos de modelagem de geometria local, módulos de modelagem estrutural global, módulos de propagação de informações da superfície.
- **Periódico:** ICML 2024, 2024.07
- **Artigo:** [EquiPocket: uma rede neural geométrica em grafos equivariantes E(3) para prever sítios de ligação de ligantes](https://openreview.net/forum?id=1vGN3CSxVs)

### **34. [Vinte dados experimentais marcam um avanço na IA para proteínas! FSFP otimiza modelos de pré-treinamento de proteínas](https://hyper.ai/news/32822)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32822](https://hyper.ai/news/32822)
- **Equipe de pesquisa:** Grupo do Prof. Liang Hong, da Universidade Jiao Tong de Xangai, em colaboração com a equipe de Pan Tan, do Laboratório de Inteligência Artificial de Xangai
- **Pesquisas relacionadas:** conjunto de mutações de proteínas ProteinGym, modelos de linguagem de proteínas pré-treinados, meta-aprendizado por transferência, aprendizado para ranquear (LTR), ajuste fino eficiente em parâmetros, tecnologia LTR, estratégia de treinamento FSFP, métodos de meta-aprendizado independentes de modelo.
- **Periódico:** Nature Communications, 2024.07
- **Artigo:** [Aprimoramento da eficiência de modelos de linguagem de proteínas com poucos dados de laboratório por meio de aprendizado few-shot](https://doi.org/10.1038/s41467-024-49798-6)

### **35. [Modelo transferível de aprendizado profundo identifica vários tipos de modificações de RNA e reduz significativamente os custos computacionais](https://hyper.ai/news/32745)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32745](https://hyper.ai/news/32745)
- **Equipe de pesquisa:** Grupo do Prof. associado Xiang Yu, da Universidade Jiao Tong de Xangai, em colaboração com a equipe de Jun Yang e Hongxia Wang, do Jardim Botânico Chenshan de Xangai
- **Pesquisas relacionadas:** modelo transferível de aprendizado profundo TandemMod, conjunto de transcrição in vitro ELIGOS, conjunto Curlcake, conjunto de epitranscriptoma in vitro IVET, CNN 1D, módulos Bi-LSTM, mecanismos de atenção, classificadores totalmente conectados.
- **Periódico:** Nature Communications, 2024.05
- **Artigo:** [Aprendizado por transferência permite identificar vários tipos de modificações de RNA usando sequenciamento direto de RNA por nanoporos](https://www.nature.com/articles/s41467-024-48437-4)

### **36. [InstructProtein: alinhamento da linguagem de proteínas à linguagem humana com instruções de conhecimento](https://hyper.ai/news/33697)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33697](https://hyper.ai/news/33697)
- **Equipe de pesquisa:** Equipe de Huajun Chen e Qiang Zhang, da Universidade de Zhejiang
- **Pesquisas relacionadas:** LLMs, conjuntos de instruções de conhecimento sobre proteínas, conjuntos da Gene Ontology (GO), InstructProtein, grafos de conhecimento, previsão de localização de proteínas, previsão de funções de proteínas, previsão da capacidade de ligação de proteínas a íons metálicos.
- **Periódico:** ACL 2024, 2023.10
- **Artigo:** [InstructProtein: alinhamento das linguagens humana e de proteínas por meio de instruções de conhecimento](https://arxiv.org/abs/2310.03269)

### **37. [Framework de geração de proteínas para texto ProtT3 permite interpretar dados de proteínas e informações textuais entre modalidades](https://hyper.ai/news/33546)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33546](https://hyper.ai/news/33546)
- **Equipe de pesquisa:** Xiang Wang, da USTC, em colaboração com a equipe de Zhiyuan Liu, da NUS, e pesquisadores da Universidade de Hokkaido
- **Pesquisas relacionadas:** projetores entre modalidades, modelos de linguagem de proteínas, conjuntos Swiss-Prot e ProteinKG25, conjunto PDB-QA.
- **Periódico:** ACL 2024, 2023.05
- **Artigo:** [ProtT3: geração de texto a partir de proteínas para compreensão de proteínas baseada em texto](https://arxiv.org/abs/2405.12564)

### **38. [Modelo CPDiffusion projeta proteínas funcionais de forma totalmente automática e a um custo baixíssimo](https://hyper.ai/news/34692)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34692](https://hyper.ai/news/34692)
- **Equipe de pesquisa:** Grupo de Liang Hong, da Universidade Jiao Tong de Xangai
- **Pesquisas relacionadas:** engenharia de proteínas, framework de modelo probabilístico de difusão CPDiffusion, aminoácidos, redes neurais em grafos, apoio ao projeto de medicamentos, modelos de linguagem de proteínas, conjunto CATH 4.2.
- **Periódico:** Cell Discovery, 2024.09
- **Artigo:** [Um modelo condicional de difusão de proteínas gera sequências artificiais de endonucleases programáveis com atividade aprimorada](https://www.nature.com/articles/s41421-024-00728-2)

### **39. [Novo método de detecção de homólogos de proteínas baseado em modelos de linguagem de proteínas e recuperação densa](https://hyper.ai/news/34225)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34225](https://hyper.ai/news/34225)
- **Equipe de pesquisa:** Yu Li (CUHK), Siqi Sun (Universidade Fudan e Laboratório de IA de Xangai) e Mark Gerstein (Universidade Yale)
- **Pesquisas relacionadas:** engenharia de proteínas, modelos de linguagem de proteínas, técnicas de recuperação densa, mecanismos de busca densa de homólogos, modelo híbrido DHR-meta, conjunto UR90, algoritmo JackHMMER, conjuntos BFD/MGnify, método DHR. A sensibilidade de detecção de homólogos de proteínas aumentou 56%.
- **Periódico:** Nature Biotechnology, 2024.08
- **Artigo:** [Detecção rápida e sensível de homólogos de proteínas com recuperação densa profunda](https://doi.org/10.1038/s41587-024-02353-6)

### **40. [AlphaProteo projeta com eficiência ligantes para proteínas-alvo e aumenta a afinidade em até 300 vezes](https://hyper.ai/news/34214)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34214](https://hyper.ai/news/34214)
- **Equipe de pesquisa:** DeepMind, Francis Crick Institute
- **Pesquisas relacionadas:** engenharia de proteínas, modelos de linguagem de proteínas, projeto de medicamentos com IA, proteínas-alvo, ferramentas de IA, modelo de aprendizado de máquina AlphaProteo, projeto de ligantes para a proteína VEGF-A, Generator, Filter. A ligação dos candidatos foi de 5 a 100 vezes maior que a obtida com métodos existentes.
- **Periódico:** DeepMind, 2024.09
- **Artigo:** [AlphaProteo gera novas proteínas para pesquisa em biologia e saúde](https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)

### **41. [Novo modelo de linguagem de proteínas com remoção de ruído DePLM supera os modelos de ponta na previsão dos efeitos de mutações](https://hyper.ai/news/34954)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34954](https://hyper.ai/news/34954)
- **Equipe de pesquisa:** Prof. Huajun Chen e Dr. Qiang Zhang, da Universidade de Zhejiang
- **Pesquisas relacionadas:** modelo de linguagem de proteínas com remoção de ruído (DePLM), ensemble de varredura de mutação profunda (DMS) ProteinGym, conjuntos de dados DMS, validação cruzada aleatória, experimentos de generalização, extensão de modelos de difusão com informações de ordenação para remover ruído de informações evolutivas, trajetórias geradas por algoritmo de ordenação, modelo PromptProtein.
- **Periódico:** NeurIPS 2024, 2024.11
- **Artigo:** [DePLM: remoção de ruído em modelos de linguagem de proteínas para otimização de propriedades](https://neurips.cc/virtual/2024/poster/95517)

### **42. [Modelo generativo geométrico profundo DynamicBind permite prever o acoplamento dinâmico de proteínas](https://hyper.ai/news/34894)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34894](https://hyper.ai/news/34894)
- **Equipe de pesquisa:** Grupo de Shuangjia Zheng, da Universidade Jiao Tong de Xangai, Galixir, Universidade Sun Yat-sen e Rice University
- **Pesquisas relacionadas:** conjunto PDBbind, conjunto de teste MDT, modelos de difusão profunda, tecnologia de redes neurais geométricas equivariantes, estruturas no formato PDB, formato de ligantes de pequenas moléculas, módulos de pontuação contact-LDDT (cLDDT), estruturas do AlphaFold, módulos de previsão de afinidade, IA generativa.
- **Periódico:** Nature Communications, 2024.02
- **Artigo:** [DynamicBind: previsão da estrutura de complexos proteína-ligante específicos de ligantes com um modelo generativo profundo e equivariante](https://www.nature.com/articles/s41467-024-45461-2)

### **43. [Grande modelo de linguagem para descoberta de medicamentos Y-Mol supera amplamente o LLaMA2](https://hyper.ai/news/35572)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35572](https://hyper.ai/news/35572)
- **Equipe de pesquisa:** Universidade de Hunan, Universidade Central do Sul, Universidade Normal de Hunan e Universidade de Xiangtan
- **Pesquisas relacionadas:** LLM Y-Mol guiado por conhecimento biomédico multiescala, corpus de textos do PubMed, conjunto de referência DrugBank, conjunto de referência DrugCentral, LLM LLaMA2-7b.
- **Periódico:** arXiv, 2024.10
- **Artigo:** [Y-Mol: um grande modelo de linguagem multiescala guiado por conhecimento biomédico para o desenvolvimento de medicamentos](https://doi.org/10.48550/arXiv.2410.11550)

### **44. [Modelo universal de inverse folding molecular UniIF complementa o AlphaFold 3](https://hyper.ai/news/35781)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35781](https://hyper.ai/news/35781)
- **Equipe de pesquisa:** Equipe do Centro de Pesquisa da Indústria do Futuro da Universidade Westlake
- **Pesquisas relacionadas:** conjunto CATH4.3, modelo ESM2, conjunto CASP15, novas estruturas cristalinas, conjunto NovelPro, conjuntos RDesign, conjunto CHILI-3K, frameworks predefinidos baseados em aminoácidos e nucleotídeos, GNN, Geometric Featurizer, Block Graph Attention. Superou outros métodos de ponta no projeto de proteínas, RNA e materiais.
- **Periódico:** NeurIPS 2024, 2024.05
- **Artigo:** [UniIF: inverse folding molecular unificado](https://arxiv.org/abs/2405.18968)

### **45. [Modelo pré-treinado de linguagem de proteínas ProSST integra informações estruturais de proteínas com mais eficiência](https://hyper.ai/news/35874)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35874](https://hyper.ai/news/35874)
- **Equipe de pesquisa:** Grupo do Prof. Liang Hong e Bingxin Zhou, da Universidade Jiao Tong de Xangai, em colaboração com Pan Tan, do Laboratório de IA de Xangai
- **Pesquisas relacionadas:** modelo pré-treinado de linguagem de proteínas ProSST, Transformer, mecanismos de atenção desacoplada, quantizadores de estrutura proteica, conjunto AlphaFoldDB, conjunto CATH43-S40, conjunto de estruturas locais CATH43-S40, benchmark ProteinGYM. Supera modelos existentes na previsão de estabilidade térmica, ligação a íons metálicos, localização de proteínas e anotações GO.
- **Periódico:** NeurIPS 2024, 2024.05
- **Artigo:** [ProSST: modelagem de linguagem de proteínas com estrutura quantizada e atenção desacoplada](https://neurips.cc/virtual/2024/poster/96656)

### **46. [Framework de ligantes peptídicos macrocíclicos RFpeptides abre novas possibilidades para proteínas de difícil tratamento](https://hyper.ai/news/36150)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36150](https://hyper.ai/news/36150)
- **Equipe de pesquisa:** Equipe de David Baker, do Institute for Protein Design da UW
- **Pesquisas relacionadas:** tecnologia RFpeptides baseada em modelos de difusão, que usa RoseTTAFold e RFdiffusion modificados com codificação cíclica de posições relativas para gerar esqueletos macrocíclicos precisos; desenvolvimento de medicamentos, AlphaFold, ProteinMPNN, Rosetta Relax. Permite projetar macrociclos de forma direcionada e eficiente.
- **Periódico:** bioRxiv, 2024.11
- **Artigo:** [Projeto de novo preciso de macrociclos de ligação a proteínas de alta afinidade usando aprendizado profundo](https://doi.org/10.1101/2024.11.18.622547)

### **47. [Modelo fundacional de genomas Evo permite prever e gerar dados da escala molecular à escala genômica](https://hyper.ai/news/36266)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36266](https://hyper.ai/news/36266)
- **Equipe de pesquisa:** Equipe de pesquisa da Stanford University e do Arc Institute
- **Pesquisas relacionadas:** modelo fundacional de genomas Evo, arquitetura StripedHyena. O Evo pode prever, gerar e projetar sequências genômicas completas.
- **Periódico:** Science, 2024.11
- **Artigo:** [Modelagem e projeto de sequências da escala molecular à escala genômica com Evo](https://www.science.org/doi/10.1126/science.ado9336)

### **48. [DigFrag segmenta fragmentos moleculares com precisão usando IA e gera 44 moléculas de medicamentos e pesticidas](https://hyper.ai/news/36346)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36346](https://hyper.ai/news/36346)
- **Equipe de pesquisa:** Equipe do Prof. Guangfu Yang e da Prof. associada Fan Wang, da Universidade Normal da China Central
- **Pesquisas relacionadas:** plataforma MolFrag, banco de dados PADFrag, mecanismos de atenção em grafos, método de fragmentação digital DigFrag, framework DeepFMPO, arquiteturas de redes neurais em grafos, framework Actor-Critic.
- **Periódico:** Communications Chemistry, 2024.11
- **Artigo:** [DigFrag como método de fragmentação digital para projeto de medicamentos baseado em inteligência artificial](https://doi.org/10.1038/s42004-024-01346-5)

### **49. [PRIME, método de pré-treinamento de um grande modelo de linguagem para sequências de proteínas](https://hyper.ai/news/36363)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36363](https://hyper.ai/news/36363)
- **Equipe de pesquisa:** Grupo do Prof. Liang Hong, da Universidade Jiao Tong de Xangai, Laboratório de IA de Xangai, Universidade de Tecnologia de Xangai e Faculdade de Medicina de Hangzhou
- **Pesquisas relacionadas:** método PRIME de pré-treinamento de LLM para sequências de proteínas, banco de dados ProteomeAtlas, banco de dados UniProt, conjunto ProteinGym, método de pré-treinamento MLM, desempenho superior aos métodos de ponta atuais.
- **Periódico:** Science Advances, 2024.11
- **Artigo:** [Um modelo geral de linguagem guiado por temperatura para projetar proteínas com estabilidade e atividade aprimoradas](https://www.science.org/doi/10.1126/sciadv.adr2641)

### **50. [Método de aprendizado profundo autossupervisionado revoluciona a reconstrução 3D em microscopia crioeletrônica](https://hyper.ai/news/36645)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36645](https://hyper.ai/news/36645)
- **Equipe de pesquisa:** Equipe de pesquisa da UCLA
- **Pesquisas relacionadas:** método autossupervisionado de aprendizado profundo para partículas individuais IsoNet (spIsoNet), crio-ME de partícula única, reconstrução de biomacromoléculas, conjunto de β-galactosidase, conjunto de trímeros de HA inclinados, conjuntos de ribossomos não simétricos, conjuntos de tomografia de VLP do HIV, arquitetura U-net, módulo de correção de desalinhamento com correção de anisotropia.
- **Periódico:** Nature Methods, 2024.11
- **Artigo:** [Superação do problema de orientação preferencial em crio-ME com aprendizado profundo autossupervisionado](https://doi.org/10.1038/s41592-024-02505-1)

### **51. [Método multimodal de geração de proteínas PLAID gera simultaneamente sequências e estruturas proteicas de todos os átomos](https://hyper.ai/news/36750)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36750](https://hyper.ai/news/36750)
- **Equipe de pesquisa:** UC Berkeley, Microsoft Research, Genentech
- **Pesquisas relacionadas:** método multimodal de geração de proteínas PLAID (Protein Latent Induced Diffusion), banco de dados Pfam, espaço latente do ESMFold, treinamento de difusão latente, arquitetura de blocos DiT, Diffusion Transformer (DiT), modelo ESMFold.
- **Periódico:** ICLR 2025, 2024.12
- **Artigo:** [Geração de estruturas proteicas com todos os átomos a partir de dados de treinamento somente de sequências](https://www.biorxiv.org/content/10.1101/2024.12.02.626353v1)

### **52. [Método de otimização molecular direcionada MOLRL baseado em aprendizado por reforço latente](https://hyper.ai/news/37285)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37285](https://hyper.ai/news/37285)
- **Equipe de pesquisa:** Pesquisadores da Cellarity e da NVIDIA
- **Pesquisas relacionadas:** novo método de otimização molecular direcionada MOLRL baseado em aprendizado por reforço latente, tarefas de descoberta de medicamentos, Proximal Policy Optimization (PPO), Variational Autoencoders (VAE), Autoencoder (MolMIM), com taxas de sucesso de até 100%.
- **Periódico:** ChemRxiv, 2025.01
- **Artigo:** [Geração molecular direcionada com aprendizado por reforço latente](https://go.hyper.ai/H4JhR)

### **53. [Framework E2VD de previsão dos fatores de variação viral prevê direções evolutivas de COVID-19, HIV e influenza](https://hyper.ai/news/37405)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37405](https://hyper.ai/news/37405)
- **Equipe de pesquisa:** Prof. Yonghong Tian e Prof. associado Jie Chen, da Universidade de Pequim, e pesquisador Peng Zhou, do Laboratório de Guangzhou
- **Pesquisas relacionadas:** framework E2VD de previsão dos fatores de variação viral, conjunto UniRef90, conjuntos abertos de varredura de mutação profunda, codificação de sequências de proteínas, acoplamento de dependências locais e globais, aprendizado focal multitarefa. A precisão das previsões aumentou 67%.
- **Periódico:** Nature Machine Intelligence, 2025.01
- **Artigo:** [Um framework unificado de aprendizado profundo orientado pela evolução para prever os fatores de variação viral](https://www.nature.com/articles/s42256-024-00966-9)

### **54. [Modelo de linguagem médica MedFound se aproxima da capacidade de raciocínio de médicos especialistas](https://hyper.ai/news/37646)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37646](https://hyper.ai/news/37646)
- **Equipe de pesquisa:** Equipe interdisciplinar liderada pelo Prof. Guangyu Wang (BUPT), pela Prof. Chunli Song (Terceiro Hospital da Universidade de Pequim) e pelo Prof. Jian Yang (Universidade das Três Gargantas da China)
- **Pesquisas relacionadas:** LLM BLOOM-176B, corpus médico MedCorpus, LLM médico MedFound-DX, métodos de cadeia de pensamento, framework de alinhamento de preferências, conjunto MedDX-FT, conjunto MedDX-Bench.
- **Periódico:** Nature Medicine, 2025.01
- **Artigo:** [Um modelo generalista de linguagem médica para auxiliar no diagnóstico de doenças](https://www.nature.com/articles/s41591-024-03416-6)

### **55. [Modelo de difusão 4D AlphaFolding preenche a lacuna na previsão de estruturas dinâmicas de proteínas](https://hyper.ai/news/37697)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37697](https://hyper.ai/news/37697)
- **Equipe de pesquisa:** Equipes dos Profs. Siyu Zhu e Yuan Qi, da Universidade Fudan/Laboratório de IA de Xangai, em colaboração com o Prof. Yao Yao, da Universidade de Nanjing
- **Pesquisas relacionadas:** modelo de difusão 4D AlphaFolding, dados de simulação MD, estruturas dinâmicas de proteínas, biologia estrutural, framework de aprendizado profundo Distributional Graphformer (DiG), conjunto ATLAS.
- **Periódico:** arXiv, 2024.12
- **Artigo:** [Difusão 4D para previsão de estruturas dinâmicas de proteínas com orientação por referência e movimento](https://arxiv.org/abs/2408.12419)

### **56. [Pipeline PepPrCLIP para projetar proteínas curtas pode contribuir para o desenvolvimento de novas terapias contra o câncer](https://hyper.ai/news/37912)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37912](https://hyper.ai/news/37912)
- **Equipe de pesquisa:** Equipe de Engenharia Biomédica da Duke University
- **Pesquisas relacionadas:** modelo de linguagem de proteínas ESM-2, modelo ESM-2-650M, pipeline PepPrCLIP, distribuições gaussianas, sequências de aminoácidos.
- **Periódico:** Science Advances, 2025.01
- **Artigo:** [Projeto de novo de ligantes peptídicos para alvos conformacionalmente diversos com modelagem contrastiva de linguagem](https://www.science.org/doi/10.1126/sciadv.adr8638)

### **57. [Técnica de alinhamento de Boltzmann melhora drasticamente a eficácia da previsão da energia livre de ligação de proteínas](https://hyper.ai/news/38092)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38092](https://hyper.ai/news/38092)
- **Equipe de pesquisa:** Equipe do Prof. Chunhua Shen, da Universidade de Zhejiang, da Universidade de Adelaide e da Northeastern University (EUA)
- **Pesquisas relacionadas:** energia livre de ligação, técnica de alinhamento de Boltzmann, previsão de ∆∆G, previsão de estruturas de complexos proteicos, modelos de difusão riemannianos, aprendizado profundo, método BA-Cycle, método BA-DDG, conjunto SKEMPI v2.
- **Periódico:** ICLR 2025, 2024.10
- **Artigo:** [Modelo de inverse folding alinhado por Boltzmann como preditor dos efeitos de mutações nas interações proteína-proteína](https://arxiv.org/abs/2410.09543)

### **58. [Novo gerador de esqueletos de proteínas em larga escala baseado em fluxo, Proteina, alcança o estado da arte no projeto de novo de esqueletos proteicos](https://hyper.ai/news/38120)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38120](https://hyper.ai/news/38120)
- **Equipe de pesquisa:** NVIDIA, Mila, Universidade de Montreal, MIT
- **Pesquisas relacionadas:** projeto de proteínas, arquiteturas Transformer escaláveis não equivariantes, conjunto DFS agrupado Foldseek AFDB, conjunto D21M, modelo MFS, estratégias de treinamento em etapas.
- **Periódico:** apresentação oral na ICLR 2025, 2025.01
- **Artigo:** [Proteina: escalonamento de modelos generativos de estruturas proteicas baseados em fluxo](https://openreview.net/forum?id=TVQLu34bdw&nesting=2&sort=date-desc)

### **59. [Modelo UniGEM alcança pela primeira vez o aprimoramento sinérgico de duas tarefas com base em modelos de difusão](https://hyper.ai/news/38186)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38186](https://hyper.ai/news/38186)
- **Equipe de pesquisa:** Universidade Tsinghua, Academia Chinesa de Ciências
- **Pesquisas relacionadas:** descoberta de medicamentos, previsão de propriedades moleculares, geração de moléculas, modelos de difusão, conjunto QM9, conjunto de conformações moleculares 3D GEOM-Drugs, frameworks de aprendizado multitarefa, modelos de difusão equivariantes E(3) (EDM), arquiteturas de redes com múltiplos ramos.
- **Periódico:** ICLR 2025, 2025.04
- **Artigo:** [UniGEM: uma abordagem unificada para geração de moléculas e previsão de propriedades](https://openreview.net/pdf?id=Lb91pXwZMR)

### **60. [RFdiffusion evolui e viabiliza o projeto de novo de anticorpos com precisão atômica](https://hyper.ai/news/38253)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38253](https://hyper.ai/news/38253)
- **Equipe de pesquisa:** Equipe do Prof. David Baker, da Universidade de Washington, e colaboradores
- **Pesquisas relacionadas:** anticorpos terapêuticos, rede RFdiffusion para projeto computacional de proteínas, cadeias pesadas variáveis de anticorpos (VHHs), fragmentos variáveis de cadeia única (scFvs), aprendizado profundo, frameworks de VHH, projeto de sequências de alças CDR.
- **Periódico:** bioRxiv, 2025.02
- **Artigo:** [Projeto de novo de anticorpos com precisão atômica usando RFdiffusion](https://doi.org/10.1101/2024.03.14.585103)

### **61. [Primeiro esquema de fusão de modelos de linguagem de proteínas e RNA estabelece novo estado da arte na previsão de afinidade de ligação](https://hyper.ai/news/38290)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38290](https://hyper.ai/news/38290)
- **Equipe de pesquisa:** Universidade Tsinghua, UCL, Universidade Monash, BUPT
- **Pesquisas relacionadas:** proteína-RNA, modelo CoPRA, modelos de linguagem de proteínas (PLM), modelos de linguagem de RNA (RLM), técnicas experimentais CLIP, modelo Co-Former, conjunto PDBbind, conjunto PRBABv2, conjunto ProNAB, conjunto PRA201, aprendizado multimodal.
- **Periódico:** AAAI 2025, 2025.01
- **Artigo:** [CoPRA: conexão entre modelos de sequências pré-treinados de diferentes domínios e estruturas complexas para prever a afinidade de ligação entre proteínas e RNA](https://arxiv.org/abs/2409.03773)

### **62. [Modelo de tecido virtual Celcomen identifica pela primeira vez a inferência causal na análise de transcriptômica espacial](https://hyper.ai/news/38308)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38308](https://hyper.ai/news/38308)
- **Equipe de pesquisa:** Universidade de Cambridge
- **Pesquisas relacionadas:** conjunto Perturbmap, conjunto de baço fetal, conjunto de glioblastoma, modelo Celcomen, módulos de inferência (CCE), módulos generativos (SCE), redes neurais em grafos.
- **Periódico:** ICLR 2025, 2025.01
- **Artigo:** [Estimativa dos efeitos de perturbações em células individuais e tecidos na transcriptômica espacial por meio da desmistura causal espacial](https://openreview.net/forum?id=Tqdsruwyac)

### **63. [Método AlphaFold-Metainference prevê com precisão ensembles estruturais de proteínas desordenadas](https://hyper.ai/news/38448)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38448](https://hyper.ai/news/38448)
- **Equipe de pesquisa:** Universidade de Cambridge
- **Pesquisas relacionadas:** mapas de erro de alinhamento previstos pelo AlphaFold, correlações entre matrizes de variação de distância em simulações de MD, previsão da estrutura de proteínas desordenadas, Protein Data Bank (PDB), dados de espalhamento de raios X a baixo ângulo (SAXS), medições de RMN, ensembles estruturais de Aβ e α-sinucleína, CALVADOS-2, métodos bayesianos de metainferência, integradores de Langevin.
- **Periódico:** Nature Communications, 2025.02
- **Artigo:** [Previsão pelo AlphaFold de ensembles estruturais de proteínas desordenadas](https://www.nature.com/articles/s41467-025-56572-9)

### **64. [Framework de alta precisão DRfold2 para previsão da estrutura de RNA supera o estado da arte em vários benchmarks](https://hyper.ai/news/38506)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38506](https://hyper.ai/news/38506)
- **Equipe de pesquisa:** Equipe do Prof. Yang Zhang, da NUS
- **Pesquisas relacionadas:** framework DRfold2 de previsão de estruturas de RNA, precisão da previsão não supervisionada de contatos, modelos compostos de linguagem de RNA, conjuntos de teste de RNA do DRfold2, conjunto CASP15, módulos Transformer, módulos estruturais de remoção de ruído.
- **Periódico:** bioRxiv, 2025.03
- **Artigo:** [Previsão ab initio da estrutura de RNA com modelo de linguagem composto e aprendizado ponta a ponta com remoção de ruído](https://www.biorxiv.org/content/10.1101/2025.03.05.641632v1)

### **65. [Novo algoritmo de projeto de proteínas DRAKES supera o gargalo do projeto de sequências biológicas](https://hyper.ai/news/38675)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38675](https://hyper.ai/news/38675)
- **Equipe de pesquisa:** Pesquisadores do MIT, Harvard, Stanford, UC Berkeley e Genentech
- **Pesquisas relacionadas:** frameworks de aprendizado por reforço, conjuntos de treinamento do PDB, conjunto Megascale, algoritmo DRAKES, Gumbel-Softmax.
- **Periódico:** ICLR 2025, 2024.08
- **Artigo:** [Ajuste fino de modelos de difusão discreta por otimização de recompensas, com aplicações ao projeto de DNA e proteínas](https://doi.org/10.48550/arXiv.2410.13643)

### **66. [Espectroscopia de absorção UV com auxílio do aprendizado de máquina detecta contaminação microbiana](https://hyper.ai/news/38869)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38869](https://hyper.ai/news/38869)
- **Equipe de pesquisa:** SMART (Singapore-MIT Alliance for Research and Technology), A*SRL Singapore, NUS, MIT
- **Pesquisas relacionadas:** detecção de contaminação microbiana, estratégias de detecção de anomalias, aprendizado de máquina, máquinas de vetores de suporte (SVM), funções de base radial, amostras esterilizadas com PBS.
- **Periódico:** Nature, 2025.03
- **Artigo:** [Espectroscopia de absorção UV assistida por aprendizado de máquina para detectar contaminação microbiana em produtos de terapia celular](https://hyper.ai/en/sota/papers/s41598-024-83114-y)

### **67. [Uso de modelos generativos de sequências de proteínas no projeto de genes sobrepostos](https://hyper.ai/news/39241)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39241](https://hyper.ai/news/39241)
- **Equipe de pesquisa:** Equipe de David Baker, da Universidade de Washington
- **Pesquisas relacionadas:** genes sobrepostos (OLG), pesquisa sobre projeto sintético de OLG, substituição de aminoácidos, triagem bioinformática, modelagem estatística, varredura sistemática de posições de sequências.
- **Periódico:** bioRxiv, 2025.05
- **Artigo:** [Projeto de genes sobrepostos usando modelos generativos profundos de sequências de proteínas](https://doi.org/10.1101/2025.05.06.652464)

### **68. [Framework de previsão PUPS permite localizar proteínas em compartimentos subcelulares no nível de célula única](https://hyper.ai/news/39549)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39549](https://hyper.ai/news/39549)
- **Equipe de pesquisa:** MIT, Universidade Harvard
- **Pesquisas relacionadas:** localização subcelular de proteínas, Human Protein Atlas, localização subcelular de proteínas não observadas, framework Predictions of Unseen Proteins’ Subcellular localization (PUPS), conjuntos retidos para teste, modelos de linguagem de proteínas ESM-2, CNNs, convoluções separáveis.
- **Periódico:** Nature Methods, 2025.05
- **Artigo:** [Previsão da localização subcelular de proteínas em células individuais](https://go.hyper.ai/LeaQF)

### **69. [UniMoMo: primeiro framework generativo unificado entre espécies moleculares permite projetar vários tipos de moléculas de medicamentos](https://hyper.ai/news/39852)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39852](https://hyper.ai/news/39852)
- **Equipe de pesquisa:** Grupo de Yang Liu (Tsinghua), grupo de Wenbing Huang (Universidade Renmin), equipe de descoberta de medicamentos com IA da ByteDance
- **Pesquisas relacionadas:** framework UniMoMo, autoencoder variacional iterativo de todos os átomos (IterVAE), modelos de difusão em espaço latente geométrico de todos os átomos, modelagem unificada.
- **Periódico:** ICML 2025, 2025.03
- **Artigo:** [UniMoMo: modelagem generativa unificada de moléculas 3D para o projeto de novo de ligantes](https://hyper.ai/papers/2503.19300)

### **70. [Modelo de linguagem de proteínas Prot42 gera ligantes de alta afinidade usando apenas a sequência da proteína-alvo](https://hyper.ai/news/40385)**

- **Destaque da pesquisa:** [https://hyper.ai/news/40385](https://hyper.ai/news/40385)
- **Equipe de pesquisa:** Inception AI (Abu Dhabi, Emirados Árabes Unidos) e Cerebras Systems (Vale do Silício, EUA)
- **Pesquisas relacionadas:** conjunto PDIdb 2010, banco de dados UniRef50, banco de dados STRING, previsão de funções de proteínas, previsão da localização subcelular de proteínas, previsão de estruturas proteicas, previsão de PPI, geração de ligantes de proteínas, geração de ligantes específicos para sequências de DNA.
- **Periódico:** arXiv, 2025.05
- **Artigo:** [Prot42: nova família de modelos de linguagem de proteínas para gerar ligantes proteicos cientes dos alvos](https://go.hyper.ai/cFupD)

### **71. [Simulador unificado de dinâmica biomolecular UniSim realiza pela primeira vez simulações de dinâmica com tempo coarse-grained entre tipos moleculares e ambientes químicos](https://hyper.ai/news/40483)**

- **Destaque da pesquisa:** [https://hyper.ai/news/40483](https://hyper.ai/news/40483)
- **Equipe de pesquisa:** Grupo de Yang Liu (Tsinghua) e grupo de Wenbing Huang (Universidade Renmin)
- **Pesquisas relacionadas:** expansão de embeddings atômicos, pré-treinamento híbrido multi-head, modelos GNN TorchMD-NET, frameworks de interpolantes estocásticos, kernels guiados por forças.
- **Periódico:** ICML 2025, 2025.05
- **Artigo:** [UniSim: um simulador unificado para a dinâmica de biomoléculas com tempo coarse-grained](https://go.hyper.ai/5NWuO)

### **72. [Algoritmo de biologia computacional SimplifiedBondfinder revela 69 novas ligações nitrogênio-oxigênio-enxofre](https://hyper.ai/news/40515)**

- **Destaque da pesquisa:** [https://hyper.ai/news/40515](https://hyper.ai/news/40515)
- **Equipe de pesquisa:** Equipes de Sophia Bazzi e Sharareh Sayyad, da Universidade de Göttingen
- **Pesquisas relacionadas:** algoritmo SimplifiedBondfinder, aprendizado de máquina, cálculos de mecânica quântica, conjunto PDB, conjunto PDB-REDO, conjunto BDB, redução de dimensionalidade UMAP, ligações NOS.
- **Periódico:** Communications Chemistry, 2025.05
- **Artigo:** [Revelação de ligações NOS entre arginina e cisteína e entre glicina e cisteína por reavaliação sistemática de estruturas proteicas](https://www.nature.com/articles/s42004-025-01535-w)

### **73. [Novo método de projeto de sequências proteicas FAMPNN processa simultaneamente informações do esqueleto e das cadeias laterais](https://hyper.ai/news/41545)**

- **Destaque da pesquisa:** [https://hyper.ai/news/41545](https://hyper.ai/news/41545)
- **Equipe de pesquisa:** Stanford University, Arc Institute (Palo Alto)
- **Pesquisas relacionadas:** conformações de cadeias laterais de proteínas, método FAMPNN, conjunto S40, conjunto PDB, conjuntos CASP13/14/15, conjunto SKEMPlv2, conjunto S669, conjunto Megascale, conjunto FireProtDB, conjuntos CR9114/CR6261, estratégias de amostragem iterativa, formatos atom37, GNNs, métodos de difusão euclidiana por token.
- **Periódico:** ICML 2025, 2025.06
- **Artigo:** [Condicionamento e modelagem de cadeias laterais para projeto de sequências proteicas de todos os átomos com FAMPNN](https://go.hyper.ai/JUJDq)

### **74. [Método atomístico de projeto de proteínas La-Proteina gera proteínas de até 800 resíduos com alta precisão](https://hyper.ai/news/41744)**

- **Destaque da pesquisa:** [https://hyper.ai/news/41744](https://hyper.ai/news/41744)
- **Equipe de pesquisa:** NVIDIA, Mila
- **Pesquisas relacionadas:** projeto atomístico de proteínas, framework parcialmente latente de flow matching La-Proteina, conjunto AFDB, estratégia de treinamento em duas etapas.
- **Periódico:** arXiv, 2025.06
- **Artigo:** [La-Proteina: geração atomística de proteínas por flow matching parcialmente latente](https://go.hyper.ai/3csT5)

### **75. [Modelo APM, desenvolvido especificamente para complexos proteicos de múltiplas cadeias, permite projeto de todos os átomos e otimização funcional](https://hyper.ai/news/42059)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42059](https://hyper.ai/news/42059)
- **Equipe de pesquisa:** Universidade de Hunan, UCAS, equipe ByteDance Seed
- **Pesquisas relacionadas:** proteínas, modelagem nativa de múltiplas cadeias, otimização de representação de todos os átomos, reforço da dependência entre sequência e estrutura, banco de dados PDB, banco de dados Swiss-Prot, banco de dados AFDB, conjuntos de proteínas de múltiplas cadeias.
- **Periódico:** ICML 2025, 2025.07
- **Artigo:** [Um modelo generativo de todos os átomos para projetar complexos proteicos](https://go.hyper.ai/TVp4i)

### **76. [Novo método de projeto de proteínas que se ligam a regiões intrinsecamente desordenadas, Logos, é especializado em alvos de difícil tratamento](https://hyper.ai/news/42611)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42611](https://hyper.ai/news/42611)
- **Equipe de pesquisa:** Equipe de David Baker, da Universidade de Washington
- **Pesquisas relacionadas:** modelo RFdiffusion, ajuste induzido, geração de scaffolds, especialização de cavidades, montagem de cavidades.
- **Periódico:** Science, 2025.07
- **Artigo:** [Projeto de proteínas ligantes a regiões intrinsecamente desordenadas](https://www.science.org/doi/10.1126/science.adr8063)

### **77. [Novo framework de representação por fusão dinâmica de proteínas FusionProt permite troca iterativa de informações](https://hyper.ai/news/43724)**

- **Destaque da pesquisa:** [https://hyper.ai/news/43724](https://hyper.ai/news/43724)
- **Equipe de pesquisa:** Technion, Meta AI
- **Pesquisas relacionadas:** modelos de linguagem de proteínas, framework de aprendizado de representações FusionProt, AlphaFold DB, AlphaFold2, conjunto DeepFRI, tokens de fusão aprendíveis, aprendizado contrastivo multivista.
- **Periódico:** bioRxiv, 2025.08
- **Artigo:** [FusionProt: fusão de informações de sequência e estrutura para aprendizado unificado de representações de proteínas](https://go.hyper.ai/OXLYl)

### **78. [Modelo de difusão MorphDiff guiado por transcriptoma é lançado para acelerar a descoberta fenotípica de medicamentos](https://hyper.ai/news/43849)**

- **Destaque da pesquisa:** [https://hyper.ai/news/43849](https://hyper.ai/news/43849)
- **Equipe de pesquisa:** CUHK, Universidade de Inteligência Artificial Mohamed bin Zayed
- **Pesquisas relacionadas:** morfologia celular, modelo de difusão latente (LDM), conjuntos de imagens de morfologia celular em larga escala, conjunto JUMP, conjunto CDRP, conjunto LINCS, VAE morfológico, modelos de difusão latente.
- **Periódico:** Nature Communications, 2025.09
- **Artigo:** [Previsão de alterações na morfologia celular sob perturbações com um modelo de difusão guiado por transcriptoma](https://www.nature.com/articles/s41467-025-63478-z)

### **79. [Framework AlphaPPIMI aprimora significativamente a generalização e supera métodos existentes na previsão de moduladores de interfaces de PPI](https://hyper.ai/news/43916)**

- **Destaque da pesquisa:** [https://hyper.ai/news/43916](https://hyper.ai/news/43916)
- **Equipe de pesquisa:** China University of Petroleum, Universidade Yonsei
- **Pesquisas relacionadas:** interações proteína-proteína, conjunto DLiP, impressões digitais ECFP4, banco de dados ChemDiv, framework AlphaPPIMI, modelo Uni-Mol2, extração de características de proteínas, arquitetura Transformer, modelo ESM2-150M, modelo ProtTrans.
- **Periódico:** Journal of Cheminformatics, 2025.08
- **Artigo:** [Alphappimi: um framework abrangente de aprendizado profundo para prever interações entre PPI e moduladores](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-025-01077-2)

### **80. [Novo framework de rede neural de fusão prevê com eficiência sítios de ligação a vários metais em sequências de proteínas](https://hyper.ai/news/44702)**

- **Destaque da pesquisa:** [https://hyper.ai/news/44702](https://hyper.ai/news/44702)
- **Equipe de pesquisa:** Universidade de Ciência e Tecnologia de Hong Kong
- **Pesquisas relacionadas:** framework de rede neural de fusão, previsão de sítios de ligação a vários metais em sequências de proteínas, CNNs, redes de fusão, banco de dados MbPA, frameworks de aprendizado profundo.
- **Periódico:** bioRxiv, 2025.09
- **Artigo:** [Uma abordagem modular de rede neural de fusão para prever com eficiência sítios de ligação a vários metais em sequências de proteínas](https://go.hyper.ai/Y7DNU)

### **81. [Framework de projeção molecular altamente sintetizável ReaSyn é lançado, com taxas de reconstrução ultra-altas e diversidade de rotas](https://hyper.ai/news/44764)**

- **Destaque da pesquisa:** [https://hyper.ai/news/44764](https://hyper.ai/news/44764)
- **Equipe de pesquisa:** Equipe de pesquisa da NVIDIA
- **Pesquisas relacionadas:** descoberta de medicamentos, framework ReaSyn, aprendizado supervisionado, ajuste fino por aprendizado por reforço, modelos Transformer, representação Chain-of-Reaction (CoR).
- **Periódico:** arXiv, 2025.09
- **Artigo:** [Repensando a sintetizabilidade de moléculas com Chain-of-Reaction](https://arxiv.org/abs/2509.16084)

### **82. [Framework de aprendizado por reforço com restrições Ctrl-DNA permite o “controle direcionado” da expressão gênica em células específicas](https://hyper.ai/news/45227)**

- **Destaque da pesquisa:** [https://hyper.ai/news/45227](https://hyper.ai/news/45227)
- **Equipe de pesquisa:** Equipe da Universidade de Toronto, Laboratório Changping
- **Pesquisas relacionadas:** framework de aprendizado por reforço com restrições Ctrl-DNA, aprendizado profundo, expressão gênica específica de células, modelos de linguagem de DNA, conjuntos de promotores humanos, conjuntos de enhancers, geração controlável de CREs específicos de tipos celulares, processos de decisão de Markov com restrições, arquitetura Enformer.
- **Periódico:** NeurIPS 2025, 2025.05
- **Artigo:** [Ctrl-DNA: aprendizado por reforço com restrições para o projeto de elementos cis-regulatórios específicos de células](https://arxiv.org/abs/2505.20578)

### **83. [Framework PLACER resolve o desafio de modelagem em nível atômico da heterogeneidade conformacional de proteínas](https://hyper.ai/news/46009)**

- **Destaque da pesquisa:** [https://hyper.ai/news/46009](https://hyper.ai/news/46009)
- **Equipe de pesquisa:** Equipe de pesquisa do Prof. David Baker
- **Pesquisas relacionadas:** rede neural em grafos PLACER, Cambridge Structural Database, PDB, redes neurais de remoção de ruído, arquiteturas de três trilhas, geração de estruturas de pequenas moléculas.
- **Periódico:** PNAS, 2025.11
- **Artigo:** [Modelagem de ensembles conformacionais de proteínas e pequenas moléculas com PLACER](https://www.biorxiv.org/content/10.1101/2024.09.25.614868v2)

### **84. [Squidiff permite simulação de transcriptoma em vários cenários e impulsiona o desenvolvimento da medicina de precisão e espacial](https://hyper.ai/news/46212)**

- **Destaque da pesquisa:** [https://hyper.ai/news/46212](https://hyper.ai/news/46212)
- **Equipe de pesquisa:** Universidade Columbia, Universidade Stanford
- **Pesquisas relacionadas:** framework Squidiff, ferramentas Splatter, conjuntos de diferenciação de iPSCs humanas em endoderma, experimentos de triagem CRISPR em K562, DDIM condicional, técnicas de codificação semântica, arquiteturas Encode-Diffuse-Decode.
- **Periódico:** Nature Methods, 2025.11
- **Artigo:** [Squidiff: previsão do desenvolvimento celular e das respostas a perturbações usando um modelo de difusão](https://www.nature.com/articles/s41592-025-02877-y)

### **85. [Modelo generativo PepTron e novo benchmark de avaliação são lançados para reformular a previsão de ensembles de proteínas desordenadas](https://hyper.ai/news/47063)**

- **Destaque da pesquisa:** [https://hyper.ai/news/47063](https://hyper.ai/news/47063)
- **Equipe de pesquisa:** Peptone, Universidade de Copenhague, NVIDIA, Universidade de Oxford, MIT, Duke University
- **Pesquisas relacionadas:** framework de avaliação PeptoneBench, modelo generativo PepTron, PDB, banco de dados IDRome, NVIDIA BioNeMo, ESMFlow, estratégias de treinamento misto (dados experimentais e sintéticos).
- **Periódico:** bioRxiv, 2025.10
- **Artigo:** [Avanços nas previsões de ensembles de proteínas ao longo do contínuo de ordem e desordem](https://www.biorxiv.org/content/10.1101/2025.10.18.680935v1)

### **86. [MIT e Harvard propõem o fluxo de IA ponta a ponta CleaveNet para superar os desafios do projeto de substratos altamente específicos de proteases](https://hyper.ai/news/48608)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48608](https://hyper.ai/news/48608)
- **Equipe de pesquisa:** Equipe conjunta do MIT e da Universidade Harvard
- **Pesquisas relacionadas:** projeto de substratos de proteases, fluxo de trabalho CleaveNet, peptídeos sintéticos, modelos de previsão e modelos generativos.
- **Periódico:** Nature Communications
- **Artigo:** [CleaveNet: um fluxo de trabalho de ponta a ponta baseado em IA para projetar substratos de proteases](https://www.nature.com/articles/s41467-025-67226-1)

### **87. [Equipe da Goethe University Frankfurt propõe framework de classificação multiescala para decifrar a complexidade do ligoma E3 humano](https://hyper.ai/news/48813)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48813](https://hyper.ai/news/48813)
- **Equipe de pesquisa:** Equipe de pesquisa da Goethe University Frankfurt
- **Pesquisas relacionadas:** sistema ubiquitina-proteassoma (UPS), ligases de ubiquitina E3, ligoma E3 humano, aprendizado métrico.
- **Periódico:** Nature Communications
- **Artigo:** [Classificação multiescala decifra a complexidade do ligoma E3 humano](https://www.nature.com/articles/s41467-025-67450-9)

### **88. [Basecamp e NVIDIA lançam em conjunto o modelo fundacional EDEN, permitindo o projeto de terapias programáveis por IA](https://hyper.ai/news/48964)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48964](https://hyper.ai/news/48964)
- **Equipe de pesquisa:** Basecamp Research, NVIDIA e principais instituições acadêmicas
- **Pesquisas relacionadas:** biologia programável, modelos fundacionais metagenômicos EDEN, terapias gênicas, recombinases, projeto de peptídeos antimicrobianos.
- **Periódico:** bioRxiv
- **Artigo:** [Projeto de terapias programáveis por IA com a família de modelos fundacionais EDEN](https://doi.org/10.64898/2026.01.12.699009)

### **89. [Microsoft e colaboradores propõem o framework multimodal de IA GigaTIME para gerar atlas virtuais de mIF a partir de lâminas patológicas de rotina](https://hyper.ai/news/49359)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49359](https://hyper.ai/news/49359)
- **Equipe de pesquisa:** Microsoft Research, Universidade de Washington, Providence Genomics
- **Pesquisas relacionadas:** microambiente tumoral, coloração H&E, imunofluorescência multiplex (mIF), framework GigaTIME, proteômica espacial.
- **Periódico:** Cell
- **Artigo:** [IA multimodal gera uma população virtual para modelar o microambiente tumoral](https://www.cell.com/cell/fulltext/S0092-8674(25)01312-1)

### **90. [MIT propõe o modelo de linguagem de aprendizado profundo Pichia-CLM para otimizar códons e aumentar a produção de proteínas recombinantes](https://hyper.ai/news/49613)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49613](https://hyper.ai/news/49613)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** Komagataella phaffii, otimização de códons, viés de uso de códons (CUB), modelo de linguagem Pichia-CLM, expressão de proteínas recombinantes.
- **Periódico:** PNAS
- **Artigo:** [Pichia-CLM: pipeline de otimização de códons para Komagataella phaffii baseado em modelo de linguagem](https://www.pnas.org/doi/10.1073/pnas.2522052123)

### **91. [MIT e ETH propõem em conjunto o framework de aprendizado profundo APOLLO para integrar e separar com eficiência dados multimodais de célula única](https://hyper.ai/news/49702)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49702](https://hyper.ai/news/49702)
- **Equipe de pesquisa:** Equipe conjunta do MIT e da ETH Zurich
- **Pesquisas relacionadas:** biologia de célula única, integração de dados multimodais, framework APOLLO, scRNA-seq, scATAC-seq, morfologia espacial.
- **Periódico:** Nature Computational Science
- **Artigo:** [Embedding multimodal parcialmente compartilhado aprende uma representação holística do estado celular](https://www.nature.com/articles/s43588-025-00948-w)

### **92. [CUHK e colaboradores propõem o framework Bi-TEAM para aprendizado unificado de representações em várias escalas de peptídeos modificados](https://hyper.ai/news/49833)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49833](https://hyper.ai/news/49833)
- **Equipe de pesquisa:** CUHK, Universidade Politécnica de Macau, Universidade de Zhejiang, Segundo Hospital Xiangya da CSU, UESTC
- **Pesquisas relacionadas:** modelagem da estrutura e função de peptídeos, modificações de aminoácidos não canônicos, aprendizado de representações em várias escalas, framework Bi-TEAM.
- **Periódico:** arXiv
- **Artigo:** [Bi-TEAM: um framework unificado de aprendizado de representações multiescala para biomoléculas quimicamente modificadas](https://arxiv.org/abs/2603.01873)

### **93. [Carnegie Mellon University e colaboradores propõem AQuaRef para refinamento quântico de modelos proteicos de todos os átomos](https://hyper.ai/news/49895)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49895](https://hyper.ai/news/49895)
- **Equipe de pesquisa:** CMU, Universidade de Wrocław, Universidade da Flórida
- **Pesquisas relacionadas:** refinamento de estruturas proteicas, AQuaRef, potenciais interatômicos de aprendizado de máquina (AIMNet2), refinamento quântico, biologia estrutural.
- **Periódico:** Nature Communications
- **Artigo:** [AQuaRef: refinamento quântico de estruturas proteicas acelerado por aprendizado de máquina](https://www.nature.com/articles/s41467-025-64313-1)

### **94. [NVIDIA e colaboradores propõem o framework Complexa para unificar a geração e a otimização de ligantes de proteínas](https://hyper.ai/news/49977)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49977](https://hyper.ai/news/49977)
- **Equipe de pesquisa:** NVIDIA, Universidade de Oxford, Mila
- **Pesquisas relacionadas:** projeto de ligantes de proteínas, Proteína-Complexa (Complexa), Teddymer, métodos generativos, computação em tempo de inferência.
- **Periódico:** ICLR 2026
- **Artigo:** [Escalonamento do projeto atomístico de ligantes de proteínas com pré-treinamento generativo e computação em tempo de inferência](https://openreview.net/forum?id=qmCpJtFZra)

### **95. [MIT e CMU propõem em conjunto o VibeGen, que introduz dinâmica vibracional no projeto de novo de proteínas](https://hyper.ai/news/50061)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50061](https://hyper.ai/news/50061)
- **Equipe de pesquisa:** Equipe conjunta do MIT e da CMU
- **Pesquisas relacionadas:** dinâmica de proteínas, agente VibeGen, modelos de difusão de linguagem, projeto de novo de proteínas, previsão da amplitude vibracional.
- **Periódico:** Matter
- **Artigo:** [VibeGen: projeto de novo de proteínas ponta a ponta, orientado por agentes e com dinâmica personalizada usando um modelo de difusão de linguagem](https://www.cell.com/matter/abstract/S2590-2385(26)00069-X)

### **96. [Institut Pasteur usa aprendizado profundo para prever 2,39 milhões de proteínas antifágicas e mapear a imunidade bacteriana](https://hyper.ai/news/50491)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50491](https://hyper.ai/news/50491)
- **Equipe de pesquisa:** Equipe de pesquisa do Institut Pasteur
- **Pesquisas relacionadas:** imunidade antibacteriana contra vírus, sistemas de defesa antifágica, modelos de linguagem de proteínas, modelos de linguagem genômica, pangênomica.
- **Periódico:** Science
- **Artigo:** [Modelos de linguagem de proteínas e genômica revelam a diversidade inexplorada da imunidade bacteriana](https://www.science.org/doi/10.1126/science.adv8275)

### **97. [Equipe da KAIST usa IA para projetar de novo proteínas que se ligam a pequenas moléculas e aplicá-las em biossensores](https://hyper.ai/news/50599)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50599](https://hyper.ai/news/50599)
- **Equipe de pesquisa:** Equipe do Departamento de Ciências Biológicas da KAIST
- **Pesquisas relacionadas:** projeto de novo de proteínas, proteínas ligantes a pequenas moléculas, enovelamento semelhante ao NTF2, biossensores, dimerização induzida quimicamente (CID).
- **Periódico:** Nature Communications
- **Artigo:** [Ligação e detecção de pequenas moléculas com uma família de proteínas projetada](https://www.nature.com/articles/s41467-026-70953-8)

### **98. [Universidade de Toronto e colaboradores propõem o dnaHNet para modelagem hierárquica eficiente de sequências genômicas](https://hyper.ai/news/50709)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50709](https://hyper.ai/news/50709)
- **Equipe de pesquisa:** Universidade de Toronto, Vector Institute, Arc Institute
- **Pesquisas relacionadas:** aprendizado de sequências genômicas, modelos fundacionais, dnaHNet, tokenização dinâmica, previsão dos efeitos de variantes.
- **Periódico:** arXiv
- **Artigo:** [dnaHNet: um modelo fundacional escalável e hierárquico para aprendizado de sequências genômicas](https://arxiv.org/abs/2602.10603)

### **99. [Queen Mary University of London e colaboradores realizam o maior estudo proteogenômico, revelando mecanismos moleculares de doenças](https://hyper.ai/news/51343)**

- **Destaque da pesquisa:** [https://hyper.ai/news/51343](https://hyper.ai/news/51343)
- **Equipe de pesquisa:** Queen Mary University of London, Universidade de Cambridge
- **Pesquisas relacionadas:** proteogenômica, loci de características quantitativas de proteínas (pQTLs), abundância de proteínas circulantes, regulação genética cis e trans.
- **Periódico:** Cell
- **Artigo:** [Análises proteogenômicas de várias coortes revelam efeitos genéticos em todo o proteoma e diseasoma](https://www.cell.com/cell/fulltext/S0092-8674(26)00385-5)

### **100. [Goethe University Frankfurt e colaboradores propõem o modelo genESOM: IA generativa supera os limites de experimentos com animais e amostras pequenas](https://hyper.ai/news/51430)**

- **Destaque da pesquisa:** [https://hyper.ai/news/51430](https://hyper.ai/news/51430)
- **Equipe de pesquisa:** Goethe University Frankfurt e Fraunhofer ITMP
- **Pesquisas relacionadas:** experimentos com animais e amostras pequenas, IA generativa, modelo genESOM, mapas auto-organizáveis emergentes.
- **Periódico:** Pharmacological Research
- **Artigo:** [IA generativa baseada em rede neural auto-organizável, com controle incorporado da inflação de erros, aprimora a extração de conhecimento de estudos pré-clínicos com amostras menores](https://www.sciencedirect.com/science/article/pii/S1043661826000745)

## **IA + Saúde**

### **1. [Sistema de aprendizado profundo DeepDR Plus prevê retinopatia diabética usando imagens de fundo de olho](https://hyper.ai/news/29769)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29769](https://hyper.ai/news/29769)
- **Equipe de pesquisa:** Equipes do Prof. Weiping Jia, Huating Li e Bin Sheng, da Universidade Jiao Tong de Xangai, e de Tianyin Huang, da Universidade Tsinghua
- **Pesquisas relacionadas:** dados SDPP, dados DRPS, ResNet-50, modelos de fundo de olho, aprendizado autossupervisionado, modelos de avaliação IBS, metamodelos. O intervalo médio entre exames clínicos de triagem foi ampliado de 12 para 31,97 meses.
- **Periódico:** Nature Medicine, 2024.01
- **Artigo:** [Um sistema de aprendizado profundo para prever o tempo até a progressão da retinopatia diabética](https://www.nature.com/articles/s41591-023-02702-z)

### **2. [Modelo de regressão logística analisa como um alto índice de áreas verdes reduz o risco de síndrome metabólica](https://hyper.ai/news/29559)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29559](https://hyper.ai/news/29559)
- **Equipe de pesquisa:** Equipe de pesquisa de Xifeng Wu, da Universidade de Zhejiang
- **Pesquisas relacionadas:** modelos de redes neurais convolucionais, modelos de regressão logística, API Isochrone
- **Periódico:** Environment International, 2024.01
- **Artigo:** [Associações benéficas entre a presença visível de áreas verdes ao ar livre no local de trabalho e a síndrome metabólica em adultos chineses](https://doi.org/10.1016/j.envint.2023.108327)

### **3. [Sistema de aprendizado profundo ajuda oftalmologistas iniciantes a aumentar em 12% a consistência dos diagnósticos](https://hyper.ai/news/29549)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29549](https://hyper.ai/news/29549)
- **Equipe de pesquisa:** Peking Union Medical College Hospital, West China Hospital da Universidade de Sichuan, Segundo Hospital da Universidade Médica de Hebei, Tianjin Medical University Eye Hospital, Wenzhou Medical University, Beijing Airdoc Technology, Universidade Renmin da China
- **Pesquisas relacionadas:** modelos de avaliação de qualidade, modelos de diagnóstico, CNN. Foram apresentados novos métodos automatizados para detectar 13 doenças do fundo do olho.
- **Periódico:** npj digital medicine, 2024.01
- **Artigo:** [Desempenho de um sistema de aprendizado profundo no auxílio a oftalmologistas iniciantes no diagnóstico de 13 doenças importantes do fundo do olho: ensaio clínico prospectivo multicêntrico](https://www.nature.com/articles/s41746-023-00991-9)

### **4. [GSP-GCNs alcançam até 90,2% de precisão no diagnóstico da doença de Parkinson](https://hyper.ai/news/29189)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29189](https://hyper.ai/news/29189)
- **Equipe de pesquisa:** Institutos de Tecnologia Avançada de Shenzhen da CAS e Primeiro Hospital Afiliado da Universidade Sun Yat-sen
- **Pesquisas relacionadas:** módulos de processamento de sinais em grafos (GSP), módulos de redes em grafos, classificadores, modelos interpretáveis.
- **Periódico:** npj Digital Medicine, 2024.01
- **Artigo:** [Modelo interpretável baseado em aprendizado de grafos para diagnosticar a doença de Parkinson com EEG relacionado à voz](https://www.nature.com/articles/s41746-023-00983-9)

### **5. [Sistema de pontuação prognóstica para câncer de mama MIRS](https://hyper.ai/news/29304)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29304](https://hyper.ai/news/29304)
- **Equipe de pesquisa:** Universidade de Kentucky, Universidade de Ciência e Tecnologia de Macau, Universidade de Macau, Universidade Médica de Guangzhou
- **Pesquisas relacionadas:** banco de dados TCGA, modelos de redes neurais, sistemas de pontuação prognóstica, algoritmo ESTIMATE, aprendizado de máquina, XGboost, Boruta RF, ElasticNet.
- **Periódico:** iScience, 2023.11
- **Artigo:** [MIRS: um sistema de pontuação por IA para prever o prognóstico e o tratamento do câncer de mama](https://doi.org/10.1016/j.isci.2023.108322)

### **6. [Modelo fundacional de imagens da retina RETFound prevê várias doenças sistêmicas](https://hyper.ai/news/28113)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28113](https://hyper.ai/news/28113)
- **Equipe de pesquisa:** Yukun Zhou (doutorando) e colaboradores da UCL e do Moorfields Eye Hospital
- **Pesquisas relacionadas:** aprendizado autossupervisionado, conjunto MEH-MIDAS, conjunto EyePACS, SL-ImageNet, SSL-ImageNet, SSL-Retinal.
- **Periódico:** Nature, 2023.08
- **Artigo:** [Um modelo fundacional para detecção generalizável de doenças a partir de imagens da retina](https://www.nature.com/articles/s41586-023-06555-x)

### **7. [SVM otimiza sensores táteis e alcança 96,12% de reconhecimento de Braille](https://hyper.ai/news/26561)**

- **Destaque da pesquisa:** [https://hyper.ai/news/26561](https://hyper.ai/news/26561)
- **Equipe de pesquisa:** Grupos de Geng Yang e Kaichen Xu, da Universidade de Zhejiang
- **Pesquisas relacionadas:** algoritmos SVM, aprendizado de máquina, CNNs, algoritmos de estimativa adaptativa de momentos. Identifica com precisão seis padrões de toque dinâmico.
- **Periódico:** Advanced Science, 2023.09
- **Artigo:** [Projeto de sensores táteis com aprendizado de máquina para decodificação de toques dinâmicos](https://onlinelibrary.wiley.com/doi/10.1002/advs.202303949)

### **8. [Instituto de Genômica de Pequim da CAS cria um arquivo aberto de imagens biomédicas](https://hyper.ai/news/26334)**

- **Destaque da pesquisa:** [https://hyper.ai/news/26334](https://hyper.ai/news/26334)
- **Equipe de pesquisa:** Instituto de Genômica de Pequim da CAS
- **Pesquisas relacionadas:** banco de dados TCIA, desidentificação, controle de qualidade, Collection, Individual, Study, Series, Image, redes triplet, módulos de atenção.
- **Periódico:** bioRxiv, 2023.08
- **Artigo:** [Aprendizado autossupervisionado da reconstrução de hologramas com consistência física](https://www.nature.com/articles/s42256-023-00704-7)

### **9. [IA Lunit interpreta mamografias com precisão comparável à dos médicos](https://hyper.ai/news/26135)**

- **Destaque da pesquisa:** [https://hyper.ai/news/26135](https://hyper.ai/news/26135)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade de Nottingham
- **Pesquisas relacionadas:** conjunto PERFORMS, anotações e pontuação. A sensibilidade da IA foi compatível com a dos médicos, e não houve diferença significativa na especificidade.
- **Periódico:** Radiology, 2023.09
- **Artigo:** [Desempenho de um algoritmo de IA para detecção do câncer de mama usando o programa Personal Performance in Mammographic Screening](https://pubs.rsna.org/doi/10.1148/radiol.223299)

### **10. [Estratégia de seleção de características detecta biomarcadores do câncer de mama](https://hyper.ai/news/24589)**

- **Destaque da pesquisa:** [https://hyper.ai/news/24589](https://hyper.ai/news/24589)
- **Equipe de pesquisa:** Universidade de Nápoles Federico II, Itália
- **Pesquisas relacionadas:** aprendizado de máquina, estratégias de seleção de características, conjuntos TCGA/GEO, Gain Ratio, RF, SVM-RFE.
- **Periódico:** CIBB 2023, 2023.07
- **Artigo:** [Estratégia robusta de seleção de características detecta um painel de microRNAs como possíveis biomarcadores diagnósticos do câncer de mama](https://www.researchgate.net/publication/372083934)

### **11. [Modelo Gradient Boosting Machine prevê com precisão o subsíndrome BPSD](https://hyper.ai/news/23926)**

- **Destaque da pesquisa:** [https://hyper.ai/news/23926](https://hyper.ai/news/23926)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade Yonsei (Coreia do Sul)
- **Pesquisas relacionadas:** modelos de aprendizado de máquina, métodos de imputação múltipla, modelos de regressão logística, modelos Random Forest, modelos Gradient Boosting Machine, modelos SVM.
- **Periódico:** Scientific Reports, 2023.05
- **Artigo:** [Modelos preditivos baseados em aprendizado de máquina para a ocorrência de sintomas comportamentais e psicológicos da demência: desenvolvimento e validação do modelo](https://www.nature.com/articles/s41598-023-35194-5)

### **12. [Modelo de aprendizado de máquina prevê a mortalidade de pacientes em um ano](https://hyper.ai/news/33905)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33905](https://hyper.ai/news/33905)
- **Equipe de pesquisa:** Hospital Popular de Macheng (Hubei, China)
- **Pesquisas relacionadas:** modelos de regressão logística, modelos de aprendizado de máquina, GBM, RF, DT. As três principais características associadas à mortalidade em um ano foram NT-proBNP, albumina e estatinas.
- **Periódico:** Cardiovascular Diabetology, 2023.06
- **Artigo:** [Modelos baseados em aprendizado de máquina para prever a mortalidade em um ano entre idosos chineses com doença arterial coronariana associada a intolerância à glicose ou diabetes mellitus](https://cardiab.biomedcentral.com/articles/10.1186/s12933-023-01854-z)

### **13. [Nova tecnologia de interface cérebro-computador com IA permite que pacientes afásicos “falem”](https://hyper.ai/news/33914)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33914](https://hyper.ai/news/33914)
- **Equipe de pesquisa:** Equipe de pesquisa da UC
- **Pesquisas relacionadas:** corpus do Twitter do nltk, neuropróteses de fala multimodais, interfaces cérebro-computador, modelos de aprendizado profundo, Cornell Movie-Dialogs Corpus, algoritmos de fala sintética.
- **Periódico:** Nature, 2023.08
- **Artigo:** [Neuroprótese de alto desempenho para decodificação da fala e controle de avatares](https://www.nature.com/articles/s41586-023-06443-4)

### **14. [IA baseada em aprendizado profundo detecta câncer de pâncreas](https://hyper.ai/news/33923)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33923](https://hyper.ai/news/33923)
- **Equipe de pesquisa:** Alibaba DAMO Academy, em colaboração com diversas instituições médicas nacionais e internacionais
- **Pesquisas relacionadas:** aprendizado profundo, PANDA, nnU-Net, CNNs, Transformers. O PANDA detectou cinco casos de câncer e 26 casos que não haviam sido identificados clinicamente.
- **Periódico:** Nature Medicine, 2023.11
- **Artigo:** [Detecção em larga escala de câncer de pâncreas por tomografia computadorizada sem contraste e aprendizado profundo](https://www.nature.com/articles/s41591-023-02640-w)

### **15. [Eficácia populacional da triagem de câncer de pulmão assistida por aprendizado de máquina](https://hyper.ai/news/31197)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31197](https://hyper.ai/news/31197)
- **Equipe de pesquisa:** Google Research Center
- **Pesquisas relacionadas:** conjunto DS_CA, conjunto DS_NLST, conjunto DS_US, conjunto DS_JPN, modelos de aprendizado de máquina, triagem de câncer de pulmão. A especificidade aumentou de 5% a 7%, e o tempo de triagem diminuiu 14 segundos por caso.
- **Periódico:** Radiology AI, 2024.03
- **Artigo:** [IA de apoio na triagem de câncer de pulmão: estudo multinacional retrospectivo nos Estados Unidos e no Japão](https://pubs.rsna.org/doi/11.1148/ryai.230079)

### **16. [Modelo de fusão de IA MCF para diagnóstico de câncer de ovário calcula o risco usando exames laboratoriais de rotina e idade](https://hyper.ai/news/30730)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30730](https://hyper.ai/news/30730)
- **Equipe de pesquisa:** Equipe de pesquisa de Jihong Liu, da Universidade Sun Yat-sen
- **Pesquisas relacionadas:** métodos de seleção de características, classificadores de aprendizado de máquina, validação cruzada em cinco partes, teoria de decisão multicritério. Superou os biomarcadores CA125 e HE4.
- **Periódico:** The Lancet Digital Health, 2024.05
- **Artigo:** [Modelos baseados em inteligência artificial permitem diagnosticar com precisão o câncer de ovário usando exames laboratoriais na China: estudo multicêntrico de coorte retrospectivo](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00245-5/fulltext)

### **17. [Google lança o framework HEAL, processo em quatro etapas para avaliar a equidade de ferramentas médicas de IA](https://hyper.ai/news/31535)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31535](https://hyper.ai/news/31535)
- **Equipe de pesquisa:** Equipe de pesquisa do Google
- **Pesquisas relacionadas:** aprendizado de máquina, framework HEAL (Health Equity Assessment of Machine Learning), análise de regressão logística, análise interseccional, equidade em saúde.
- **Periódico:** EClinicalMedicine, 2024.04
- **Artigo:** [Avaliação da equidade em saúde no desempenho do aprendizado de máquina (HEAL): framework e estudo de caso de um modelo de IA para dermatologia](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(24)00058-0/fulltext)

### **18. [Uso da segmentação semântica para desenvolver Pianno, ferramenta de anotação semântica para transcriptômica espacial](https://hyper.ai/news/31573)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31573](https://hyper.ai/news/31573)
- **Equipe de pesquisa:** Equipe de Ying Zhu, da Universidade Fudan
- **Pesquisas relacionadas:** visão computacional, aprendizado de máquina, métodos de agrupamento espacial, métodos de agrupamento não supervisionado, modelos de processo pontual de Poisson espacial (sPPP), priors de campos aleatórios de Markov (MRF) de alta ordem.
- **Periódico:** Nature Communications, 2024.04
- **Artigo:** [Pianno: framework probabilístico que automatiza a anotação semântica para transcriptômica espacial](https://www.nature.com/articles/s41467-024-47152-4)

### **19. [Modelo de IA UniFMIR supera os limites da microscopia de fluorescência atual](https://hyper.ai/news/31885)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31885](https://hyper.ai/news/31885)
- **Equipe de pesquisa:** Equipe de Bo Yan, da Universidade Fudan
- **Pesquisas relacionadas:** modelo UniFMIR, módulos multi-head, módulos de aprimoramento de características, módulos multi-tail, Swin Transformer, estimativa adaptativa de momentos, aprendizado profundo, modelos SR, U-Net.
- **Periódico:** Nature Methods, 2024.04
- **Artigo:** [Pré-treinamento de um modelo fundacional para restauração generalizável de imagens de microscopia de fluorescência](https://www.nature.com/articles/s41592-024-02244-3)

### **20. [Sistema de aprendizado profundo aumenta a precisão da previsão de sobrevida no câncer](https://hyper.ai/news/32068)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32068](https://hyper.ai/news/32068)
- **Equipe de pesquisa:** Grupo de Zhangsheng Yu, do Centro Nacional de Matemática Aplicada de Xangai (campus da SJTU)
- **Pesquisas relacionadas:** sistemas de aprendizado profundo, conjuntos ST, modelos integrados de grafos e aprendizado profundo em grafos, CNNs e GNNs, conjunto externo de teste MCO-CRC, modelos de expressão gênica espacial, modelos de sobrevida em grafos superpatch, pré-processamento de imagens histológicas coradas com H&E.
- **Periódico:** Cell Reports Medicine, 2024.05
- **Artigo:** [Uso do microambiente tumoral representado em imagens histológicas para melhorar o prognóstico do câncer por meio de um sistema de aprendizado profundo](https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(24)00205-2 )

### **21. [MemSAM adapta o modelo “Segment Anything” para segmentação de vídeos médicos](https://hyper.ai/news/32372)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32372](https://hyper.ai/news/32372)
- **Equipe de pesquisa:** Huisi Wu (Universidade de Shenzhen)
- **Pesquisas relacionadas:** modelos de visão, segmentação de vídeos médicos, modelos de segmentação de vídeos de ecocardiografia, mecanismos de reforço de memória, conjuntos CAMUS e EchoNet-Dynamic, modelo SonoSAM, modelo SAMUS.
- **Periódico:** CVPR 2024, 2024.05
- **Artigo:** [MemSAM: adaptação do Segment Anything Model para segmentação de vídeos de ecocardiografia](https://github.com/dengxl0520/MemSAM)

### **22. [Modelo de segmentação de imagens médicas Medical SAM 2 lidera o ranking do estado da arte](https://hyper.ai/news/33738)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33738](https://hyper.ai/news/33738)
- **Equipe de pesquisa:** Equipe da Universidade de Oxford
- **Pesquisas relacionadas:** modelos de segmentação de imagens médicas, SAM 2, conjunto de segmentação de vídeos SA-V, conjuntos de exemplo do Medical SAM 2, codificadores de imagem, codificadores de memória.
- **Periódico:** arXiv, 2024.08
- **Artigo:** [Medical SAM 2: segmentação de imagens médicas como vídeo por meio do Segment Anything Model 2](https://arxiv.org/abs/2408.00874)

### **23. [Aprendizado de máquina combate a resistência à quimioterapia e a recorrência tumoral, fortalecendo a defesa contra células-tronco do câncer de mama](https://hyper.ai/news/33566)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33566](https://hyper.ai/news/33566)
- **Equipe de pesquisa:** Universidade de Shandong e Universidade Médica de Shanxi, em colaboração com a Helix Matrix
- **Pesquisas relacionadas:** aprendizado de máquina, conjunto de carcinoma invasivo de mama (BRCA), correlação de Pearson, análise de enriquecimento de conjuntos de genes.
- **Periódico:** Advanced Science, 2024.07
- **Artigo:** [Polyamine Anabolism Promotes Chemotherapy-Induced Breast Cancer Stem Cell Enrichment](https://onlinelibrary.wiley.com/doi/10.1002/advs.202404853)

### **24. [Modelo visão-linguagem DeepDR-LLM para tratamento do diabetes é publicado em periódico da Nature](https://hyper.ai/news/33292)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33292](https://hyper.ai/news/33292)
- **Equipe de pesquisa:** Universidade Tsinghua, Universidade Jiao Tong de Xangai, Universidade Nacional de Singapura
- **Pesquisas relacionadas:** LLMs, aprendizado profundo com imagens de fundo de olho, Adaptors e LoRA, arquiteturas Transformer, ajuste fino supervisionado.
- **Periódico:** Nature Medicine, 2024.07
- **Artigo:** [Modelos integrados de linguagem e aprendizado profundo baseado em imagens para o atendimento primário do diabetes](https://www.nature.com/articles/s41591-024-03139-8)

### **25. [À altura de patologistas experientes! Equipe da Tsinghua propõe o modelo fundacional de IA ROAM para diagnóstico preciso de gliomas](https://hyper.ai/news/33136)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33136](https://hyper.ai/news/33136)
- **Equipe de pesquisa:** Universidade Tsinghua e Hospital Xiangya
- **Pesquisas relacionadas:** grandes regiões de interesse, Transformers piramidais, ROAM, recortes de imagem grandes, conjunto WSI de gliomas de Xiangya, conjunto WSI de gliomas do TCGA, patologia computacional fracamente supervisionada.
- **Periódico:** Nature Machine Intelligence, 2024.06
- **Artigo:** [Método de patologia computacional fracamente supervisionado baseado em Transformer para diagnóstico clínico de gliomas e descoberta de marcadores moleculares](https://www.nature.com/articles/s42256-024-00868-w)

### **26. [Modelo universal de segmentação de imagens médicas ScribblePrompt supera modelos baseados em SAM](https://hyper.ai/news/34720)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34720](https://hyper.ai/news/34720)
- **Equipe de pesquisa:** MIT CSAIL, MGH, Harvard Medical School
- **Pesquisas relacionadas:** aprendizado profundo, segmentação de imagens médicas, conjunto MegaMedical, segmentação interativa, rótulos sintéticos generativos, soluções híbridas CNN-Transformer.
- **Periódico:** ECCV 2024, 2024.07
- **Artigo:** [ScribblePrompt: segmentação interativa rápida e flexível para qualquer imagem biomédica](https://arxiv.org/pdf/2312.07381)

### **27. [Plataforma de gêmeo digital do cérebro demonstra fenômenos críticos e funções cognitivas semelhantes às do cérebro humano](https://hyper.ai/news/34573)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34573](https://hyper.ai/news/34573)
- **Equipe de pesquisa:** Equipe do Prof. Jianfeng Feng, da Universidade Fudan
- **Pesquisas relacionadas:** redes neurais de disparo, gêmeo digital do cérebro, engenharia reversa, MRI, modelos corticais e subcorticais, modelos DTB, modelos de assimilação de dados.
- **Periódico:** National Science Review, 2024.05
- **Artigo:** [Imitação e exploração dos estados de repouso e de execução de tarefas do cérebro humano por computação cerebral semelhante: escala e arquitetura](https://doi.org/10.1093/nsr/nwae080)

### **28. [Sistema automatizado de simulação de diálogos entre agentes LLM realiza avaliação inicial de depressão](https://hyper.ai/news/34845)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34845](https://hyper.ai/news/34845)
- **Equipe de pesquisa:** Laboratório X-LANCE da SJTU, UT Arlington, TCCI e ThetaAI
- **Pesquisas relacionadas:** sistemas de simulação de diálogos entre agentes, conjunto D4, arquiteturas de armazenamento de memória terciária, agente Paciente, agente Psiquiatra, agente Instrutor.
- **Periódico:** arXiv, 2024.09
- **Artigo:** [Simulação de diálogo para diagnóstico de depressão: psiquiatra autoaperfeiçoável com memória terciária](https://arxiv.org/abs/2409.15084)

### **29. [Modelo de aprendizado profundo LucaProt auxilia na identificação de vírus de RNA](https://hyper.ai/news/34968)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34968](https://hyper.ai/news/34968)
- **Equipe de pesquisa:** Universidade Sun Yat-sen, Universidade de Zhejiang, Universidade Fudan, Alibaba Cloud e outras
- **Pesquisas relacionadas:** computação em nuvem e IA, mineração metagenômica, banco de dados NCBI SRA, CNGBdb, modelos de aprendizado profundo orientados por dados, framework Transformer. Foram descobertas 161.979 espécies potenciais de vírus de RNA.
- **Periódico:** Cell, 2024.09
- **Artigo:** [Uso da inteligência artificial para documentar a virosfera oculta de RNA](https://doi.org/10.1016/j.cell.2024.09.027)

### **30. [Framework de pré-treinamento de imagens médicas UniMedI supera as barreiras de heterogeneidade dos dados médicos](https://hyper.ai/news/35128)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35128](https://hyper.ai/news/35128)
- **Equipe de pesquisa:** Equipe de Haoji Hu, da Universidade de Zhejiang, e equipe de Lili Qiu, da Microsoft Research Asia
- **Pesquisas relacionadas:** tecnologia Pseudo-Pairs, conjunto MIMIC-CXR 2.0.0, conjunto BIMCV, codificadores visuais ViT-B/16, BioClinicalBERT, aprendizado contrastivo visão-linguagem.
- **Periódico:** ECCV, 2024.07
- **Artigo:** [Pré-treinamento unificado de imagens médicas em espaço semântico comum guiado por linguagem](https://eccv.ecva.net/virtual/2024/poster/1165)

### **31. [Grande modelo médico multilíngue MMed-Llama 3 se adapta melhor a cenários de aplicações médicas](https://hyper.ai/news/35242)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35242](https://hyper.ai/news/35242)
- **Equipe de pesquisa:** Equipes de Yanfeng Wang e Weidi Xie, da Universidade Jiao Tong de Xangai
- **Pesquisas relacionadas:** corpus médico multilíngue MMedC, benchmark de perguntas e respostas médicas MMedBench, modelos fundacionais MMed-Llama 3 e MMedLM.
- **Periódico:** Nature Communications, 2024.09
- **Artigo:** [Rumo à construção de um modelo multilíngue de linguagem para a medicina](https://www.nature.com/articles/s41467-024-52417-z)

### **32. [Método de junção de imagens de endoscopia por cápsula S2P-Matching auxilia na reconstrução de imagens](https://hyper.ai/news/35313)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35313](https://hyper.ai/news/35313)
- **Equipe de pesquisa:** HUST, SJTU, Universidade Minzu do Centro-Sul, HKUST(GZ), PolyU, Universidade de Sydney
- **Pesquisas relacionadas:** S2P-Matching, aprendizado contrastivo autossupervisionado, codificadores de ramo duplo, Transformers, correspondência em nível de pixel. A precisão da correspondência aumentou 187,9%.
- **Periódico:** IEEE Transactions on Biomedical Engineering, 2024.09
- **Artigo:** [S2P-Matching: correspondência autossupervisionada baseada em patches com Transformer para junção de imagens de endoscopia por cápsula](http://dx.doi.org/10.1109/TBME.2024.3462502)

### **33. [Benchmark médico multimodal GMAI-MMBench reúne 284 conjuntos de dados que cobrem 18 tarefas clínicas](https://hyper.ai/news/35938)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35938](https://hyper.ai/news/35938)
- **Equipe de pesquisa:** Laboratório de IA de Xangai, Universidade de Washington, Universidade Monash, ECNU
- **Pesquisas relacionadas:** benchmark GMAI-MMBench, o benchmark aberto mais abrangente de IA médica geral para avaliar grandes modelos visão-linguagem.
- **Periódico:** NeurIPS 2024, 2024.08
- **Artigo:** [GMAI-MMBench: benchmark multimodal abrangente de avaliação rumo à IA médica geral](https://arxiv.org/abs/2408.03361v7)

### **34. [Novo método de previsão de séries temporais CGS-Mask revela indicadores-chave das taxas de sobrevida de pacientes](https://hyper.ai/news/36192)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36192](https://hyper.ai/news/36192)
- **Equipe de pesquisa:** HUST, Universidade de Sydney, Hospital Tongji
- **Pesquisas relacionadas:** conjunto MIMIC-III, conjunto LSST, conjunto NATOPS, conjunto AE. Combina previsão de séries temporais com interpretabilidade.
- **Periódico:** AAAI 2024, 2024.03
- **Artigo:** [CGS-Mask: tornando intuitivas para todos as previsões de séries temporais](https://ojs.aaai.org/index.php/AAAI/article/view/29325)

### **35. [Framework não invasivo de decodificação cerebral por fMRI estabelece bases para interfaces cérebro-computador e modelos cognitivos](https://hyper.ai/news/36023)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36023](https://hyper.ai/news/36023)
- **Equipe de pesquisa:** Equipe de Yi Zeng, do Instituto de Automação da CAS
- **Pesquisas relacionadas:** frameworks de integração multimodal, Natural Scenes Dataset, conjunto COCO, embeddings VAE e CLIP, pré-processadores de fMRI 3D, LLMs multimodais.
- **Periódico:** NeurIPS 2024, 2024.10
- **Artigo:** [Da neurovisão à linguagem: aprimoramento da reconstrução visual baseada em registros cerebrais e da interação linguística](https://nips.cc/virtual/2024/poster/93607)

### **36. [Modelo de segmentação de imagens médicas M2CF-Net melhora a precisão do diagnóstico da síndrome de Sjögren](https://hyper.ai/news/36700)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36700](https://hyper.ai/news/36700)
- **Equipe de pesquisa:** Profs. Wei Tu e Feng Lu, da HUST
- **Pesquisas relacionadas:** M2CF-Net, conjunto de lâminas histopatológicas de glândulas salivares menores, extração de ROI, normalização de coloração, divisão de WSI em patches, algoritmo Vahadane, treinamento baseado em patches.
- **Periódico:** MedAI 2023, 2023
- **Artigo:** [M2CF-Net: rede de fusão cruzada multirresolução e multiescala para segmentar lesões de sialadenite linfocítica focal](https://doi.ieeecomputersociety.org/10.1109/MedAI59581.2023.00063)

### **37. [BSAFusion permite alinhar e fundir imagens médicas multimodais](https://hyper.ai/news/37104)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37104](https://hyper.ai/news/37104)
- **Equipe de pesquisa:** Universidade de Ciência e Tecnologia de Kunming, Ocean University of China
- **Pesquisas relacionadas:** processamento de imagens médicas, alinhamento bidirecional gradual de características (BSFA), conjuntos CT-MRI, PET-MRI e SPECT-MRI, aprendizado profundo, visão computacional.
- **Periódico:** AAAI 2025, 2024.11
- **Artigo:** [BSAFusion: rede bidirecional de alinhamento gradual de características para fusão de imagens médicas desalinhadas](https://arxiv.org/abs/2412.08050)

### **38. [Framework multiagente de LLM KG4Diagnosis auxilia no diagnóstico de 362 doenças comuns](https://hyper.ai/news/37208)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37208](https://hyper.ai/news/37208)
- **Equipe de pesquisa:** Universidade de Warwick, Universidade de Cranfield, Cambridge, Oxford
- **Pesquisas relacionadas:** KG4Diagnosis, frameworks multiagentes hierárquicos, construção automatizada de grafos médicos de conhecimento, LLMs de clínicos gerais (GPLLM), LLMs de consultores.
- **Periódico:** Programa Bridge AAAI-25, 2024.12
- **Artigo:** [KG4Diagnosis: framework hierárquico multiagente de LLM com aprimoramento por grafo de conhecimento para diagnóstico médico](https://arxiv.org/abs/2412.16833)

### **39. [Modelo de segmentação de imagens ConDSeg resolve problemas de limites difusos e coocorrência em imagens médicas](https://hyper.ai/news/37794)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37794](https://hyper.ai/news/37794)
- **Equipe de pesquisa:** Universidade de Geociências da China, Baidu
- **Pesquisas relacionadas:** framework ConDSeg de aprimoramento de características guiado por contraste, treinamento de reforço de consistência, módulos de desacoplamento semântico, decodificadores sensíveis ao tamanho, BCNet, conjunto Kvasir-SEG.
- **Periódico:** AAAI 2025, 2024.12
- **Artigo:** [ConDSeg: framework geral de segmentação de imagens médicas por aprimoramento de características guiado por contraste](https://arxiv.org/abs/2412.08345)

### **40. [Modelo médico M³FM permite diagnóstico clínico zero-shot e auxilia na elaboração de laudos e classificação de doenças](https://hyper.ai/news/37924)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37924](https://hyper.ai/news/37924)
- **Equipe de pesquisa:** Oxford, Universidade de Rochester, Amazon, Universidade Westlake, Tencent Youtu Lab
- **Pesquisas relacionadas:** diagnóstico clínico zero-shot, imagens médicas, modelos CLIP, framework M³FM, MultiMedCLIP, conjuntos MIMC-CXR, COVID-19-CT-CXR, CheXpert.
- **Periódico:** npj Digital Medicine, 2025.02
- **Artigo:** [Um modelo médico fundacional multimodal, multidomínio e multilíngue para diagnóstico clínico zero-shot](https://www.nature.com/articles/s41746-024-01339-7)

### **41. [Estimativa de sexo baseada em aprendizado profundo a partir de tomografias do crânio supera especialistas forenses](https://hyper.ai/news/38024)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38024](https://hyper.ai/news/38024)
- **Equipe de pesquisa:** UWA, UNSW, Universidade Hasanuddin
- **Pesquisas relacionadas:** frameworks automatizados baseados em aprendizado profundo, estimativa do sexo a partir do crânio, tomografias 3D, antropologia forense.
- **Periódico:** Scientific Reports, 2024.12
- **Artigo:** [Aprendizado profundo versus avaliadores humanos: estimativa forense de sexo a partir de tomografias computadorizadas tridimensionais](https://www.nature.com/articles/s41598-024-81718-y)

### **42. [IA impulsiona a pesquisa médica: grandes modelos se tornam “parceiros ideais” no treinamento de médicos da atenção primária](https://hyper.ai/news/38366)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38366](https://hyper.ai/news/38366)
- **Equipe de pesquisa:** SJTU, SUS, Tsinghua, Duke, Johns Hopkins, Universidade de Melbourne
- **Pesquisas relacionadas:** treinamento médico, DeepSeek, tomada de decisão colaborativa entre humanos e IA, LLMs, diagnóstico e tratamento de doenças crônicas.
- **Periódico:** Science Bulletin, 2025.01
- **Artigo:** [Grandes modelos de linguagem para treinamento em diabetes: estudo prospectivo](https://www.sciencedirect.com/science/article/pii/S2095927325000891)

### **43. [Algoritmo de aprendizado profundo AcneDGNet detecta e classifica lesões de acne](https://hyper.ai/news/38397)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38397](https://hyper.ai/news/38397)
- **Equipe de pesquisa:** Hospital Internacional da Universidade de Pequim
- **Pesquisas relacionadas:** AcneDGNet, Vision Transformers, CNNs, conjunto ACNE04, arquiteturas Swin Transformer.
- **Periódico:** Scientific Reports, 2025.01
- **Artigo:** [Avaliação de um modelo de detecção de lesões de acne e classificação de gravidade para a população chinesa em cenários de atendimento on-line e presencial](https://www.nature.com/articles/s41598-024-84670-z)

### **44. [Modelo multimodal de segmentação de imagens médicas VISTA3D é lançado, permitindo autosegmentação e interação com imagens 3D](https://hyper.ai/news/38486)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38486](https://hyper.ai/news/38486)
- **Equipe de pesquisa:** NVIDIA, UAMS, NIH, Universidade de Oxford
- **Pesquisas relacionadas:** VISTA3D, extração de características de supervoxels 3D, segmentação automática, segmentação interativa bimodal.
- **Periódico:** arXiv, 2024.11
- **Artigo:** [VISTA3D: modelo fundacional unificado de segmentação para imagens médicas 3D](https://doi.org/10.48550/arxiv.2406.05285)

### **45. [Modelo unificado de segmentação ecocardiográfica em múltiplos planos EchoONE segmenta vários planos com precisão](https://hyper.ai/news/38544)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38544](https://hyper.ai/news/38544)
- **Equipe de pesquisa:** Universidade de Shenzhen, Hospital Popular de Shenzhen
- **Pesquisas relacionadas:** modelo EchoONE, conjunto CAMUS, conjunto HMC-QU, conjunto EchoNet_Dynamic.
- **Periódico:** CVPR 2025, 2025.04
- **Artigo:** [EchoONE: segmentação de vários planos de ecocardiografia em um único modelo](https://arxiv.org/abs/2412.02993)

### **46. [Framework multiagente de diálogo simula consultas médicas para auxiliar no diagnóstico de doenças](https://hyper.ai/news/38583)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38583](https://hyper.ai/news/38583)
- **Equipe de pesquisa:** Hospital da China Ocidental, Universidade de Zhejiang, BUPT
- **Pesquisas relacionadas:** frameworks de conversação multiagente (MAC), LLMs, Orphanet, Medline, GPT-3.5, GPT-4.
- **Periódico:** Nature, 2025.03
- **Artigo:** [Aprimoramento da capacidade diagnóstica com grandes modelos de linguagem conversacionais multiagentes](https://www.nature.com/articles/s41746-025-01550-0#Tab6)

### **47. [Framework de aprendizado profundo STAIG revela informações genéticas detalhadas no microambiente tumoral](https://hyper.ai/news/38587)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38587](https://hyper.ai/news/38587)
- **Equipe de pesquisa:** Instituto de Ciências Médicas, Universidade de Tóquio
- **Pesquisas relacionadas:** framework STAIG, tecidos biológicos, conjuntos ST, GNNs.
- **Periódico:** Nature Communications, 2025.01
- **Artigo:** [STAIG: análise de transcriptômica espacial por aprendizado contrastivo em grafos auxiliado por imagens para exploração de domínios e integração sem alinhamento](https://www.nature.com/articles/s41467-025-56276-0)

### **48. [Primeiro framework completo de reidentificação de imagens médicas, MaMI, alcança o estado da arte em 11 conjuntos de dados](https://hyper.ai/news/38624)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38624](https://hyper.ai/news/38624)
- **Equipe de pesquisa:** Laboratório de IA de Xangai e várias universidades
- **Pesquisas relacionadas:** framework MaMI, benchmarks de reidentificação médica, Continuous Modality Parameter Adapter (ComPA), modelos fundacionais médicos (MFMs).
- **Periódico:** CVPR 2025, 2025.03
- **Artigo:** [Rumo à reidentificação completa de imagens médicas](https://arxiv.org/pdf/2503.08173)

### **49. [Modelo de regressão muitos-para-um M2OST prevê com precisão a expressão gênica usando imagens de patologia digital](https://hyper.ai/news/38783)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38783](https://hyper.ai/news/38783)
- **Equipe de pesquisa:** Universidade de Zhejiang, Zhejiang Lab, Universidade Ritsumeikan
- **Pesquisas relacionadas:** imagens de lâmina inteira (WSIs), conjuntos de câncer de mama humano, modelos Transformer, esquemas em nível de patch.
- **Periódico:** AAAI 2025, 2024.12
- **Artigo:** [M2OST: regressão muitos-para-um para prever transcriptômica espacial a partir de imagens de patologia digital](https://arxiv.org/abs/2409.15092)

### **50. [Ferramenta de análise de ressonância magnética cerebral MindGlide quantifica lesões de esclerose múltipla](https://hyper.ai/news/38971)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38971](https://hyper.ai/news/38971)
- **Equipe de pesquisa:** Equipe de pesquisa da UCL
- **Pesquisas relacionadas:** modelo MindGlide, MRI, conjuntos de dados de atendimento de rotina, segmentação de lesões, nnU-Net, CNNs 3D.
- **Periódico:** Nature Communications, 2025.04
- **Artigo:** [Novas descobertas a partir de exames antigos: reutilização de arquivos clínicos de MRI para pesquisas sobre esclerose múltipla](https://go.hyper.ai/fDEgm)

### **51. [Framework de aprendizado multi-instância com destilação hierárquica HDMIL processa rapidamente imagens de lâmina inteira com gigapixels](https://hyper.ai/news/39157)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39157](https://hyper.ai/news/39157)
- **Equipe de pesquisa:** HIT, HIT (Shenzhen)
- **Pesquisas relacionadas:** aprendizado multi-instância, detecção de tumores, WSIs, conjunto Camelyon16, conjunto TCGA-NSCLC.
- **Periódico:** CVPR 2025, 2025.03
- **Artigo:** [Classificação rápida e precisa de imagens patológicas com gigapixels por aprendizado multi-instância com destilação hierárquica](https://arxiv.org/abs/2502.21130)

### **52. [Modelo fundacional universal de segmentação 3D de vasos sanguíneos vesselFM supera amplamente os modelos baseados em SAM](https://hyper.ai/news/39201)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39201](https://hyper.ai/news/39201)
- **Equipe de pesquisa:** Universidade de Zurique, ETH Zurich, Universidade Técnica de Munique
- **Pesquisas relacionadas:** segmentação de vasos sanguíneos, segmentação de imagens médicas, modelos generativos condicionais baseados em Flow Matching, estratégias de randomização de domínio.
- **Periódico:** CVPR 2025, 2025.01
- **Artigo:** [vesselFM: modelo fundacional para segmentação universal 3D de vasos sanguíneos](https://go.hyper.ai/lVad9)

### **53. [Redes neurais em grafos preveem com precisão a sobrevida no câncer de pulmão e descobrem três subtipos fatais](https://hyper.ai/news/39435)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39435](https://hyper.ai/news/39435)
- **Equipe de pesquisa:** Universidade Cornell, Regeneron Pharmaceuticals
- **Pesquisas relacionadas:** Graph-Encoded Mixture Survival (GEMS), bancos de dados EHR, conjunto NSCLC ConcertAI Patient360™, codificadores GNN.
- **Periódico:** Nature Communication, 2025.05
- **Artigo:** [Identificação de subfenótipos preditivos de desfechos clínicos usando dados do mundo real e aprendizado de máquina](https://doi.org/10.1038/s41467-025-59092-8)

### **54. [Modelo de IA com estratégia de fusão prevê o risco de mortalidade por choque séptico](https://hyper.ai/news/39713)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39713](https://hyper.ai/news/39713)
- **Equipe de pesquisa:** Hospital Tongji, HUST
- **Pesquisas relacionadas:** choque séptico, modelos TOPSIS-based Classification Fusion (TCF), modelos de aprendizado de máquina.
- **Periódico:** npj digital medicine, 2025.04
- **Artigo:** [Modelos de previsão de mortalidade por choque séptico baseados em inteligência artificial e várias especialidades em estudo retrospectivo multicêntrico](https://go.hyper.ai/faMLL)

### **55. [Primeiro modelo clínico Graph-of-Thought do mundo para HIE melhora em 15% a previsão de desfechos neurocognitivos](https://hyper.ai/news/40828)**

- **Destaque da pesquisa:** [https://hyper.ai/news/40828](https://hyper.ai/news/40828)
- **Equipe de pesquisa:** Boston Children's Hospital, Harvard Medical School, NYU, MIT-IBM Watson Lab
- **Pesquisas relacionadas:** benchmarks de raciocínio médico, modelo Clinical Graph-of-Thought (CGoT), conjunto HIE-Reasoning.
- **Periódico:** ICML 2025, 2025.06
- **Artigo:** [Conhecimento visual e de domínio para raciocínio médico Graph-of-Thought em nível profissional](https://openreview.net/forum?id=tnyxtaSve5)

### **56. [Modelagem refinada de coortes de pacientes com dados EHR multidimensionais aumenta em 16,3% a precisão da previsão do tempo de internação](https://hyper.ai/news/41303)**

- **Destaque da pesquisa:** [https://hyper.ai/news/41303](https://hyper.ai/news/41303)
- **Equipe de pesquisa:** NUS, Universidade de Zhejiang
- **Pesquisas relacionadas:** EHR, método de aprendizado de representações NeuralCohort, MIMIC-III, MIMIC-IV, Diabetes130.
- **Periódico:** ICML 2025, 2025.06
- **Artigo:** [NeuralCohort: aprendizado neural de representações ciente de coortes para análise de dados de saúde](https://openreview.net/forum?id=bqQVa6VRvm)

### **57. [Modelo de aprendizado profundo APEX seleciona possíveis candidatos a antibióticos](https://hyper.ai/news/42377)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42377](https://hyper.ai/news/42377)
- **Equipe de pesquisa:** Universidade da Pensilvânia
- **Pesquisas relacionadas:** bancos de dados globais de venenos, previsões do modelo APEX, pesquisa e desenvolvimento de antibióticos, venenos animais.
- **Periódico:** Nature Communications, 2025.07
- **Artigo:** [Exploração computacional de venenos globais para descobrir antimicrobianos com inteligência artificial Venomics](https://www.nature.com/articles/s41467-025-60051-6)

### **58. [Avaliação epidemiológica de águas residuais com sequenciamento genético e aprendizado de máquina: método ICA-Var detecta vírus com até quatro semanas de antecedência](https://hyper.ai/news/42585)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42585](https://hyper.ai/news/42585)
- **Equipe de pesquisa:** UNLV
- **Pesquisas relacionadas:** pipelines de aprendizado de máquina não supervisionado, análise de componentes independentes, detecção de vírus, métodos de regressão dupla, ICA-Var.
- **Periódico:** Nature Communications, 2025.07
- **Artigo:** [Detecção precoce de novas variantes do SARS-CoV-2 em águas residuais por sequenciamento genômico e aprendizado de máquina](https://www.nature.com/articles/s41467-025-61280-5)

### **59. [Modelo de difusão de ponte browniana bidirecional aumenta a reprodutibilidade da coloração virtual](https://hyper.ai/news/42959)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42959](https://hyper.ai/news/42959)
- **Equipe de pesquisa:** UCLA
- **Pesquisas relacionadas:** espectrometria de massa por imagem, modelos de difusão, modelos de difusão de ponte browniana, estratégias de seleção de canais baseadas em SNR.
- **Periódico:** Science Advances, 2025.08
- **Artigo:** [Coloração virtual de tecidos sem marcação em espectrometria de massa por imagem](https://go.hyper.ai/X9GEn)

### **60. [GraphRAG médico bate recordes de precisão em perguntas e respostas e alcança o estado da arte em 11 benchmarks](https://hyper.ai/news/43064)**

- **Destaque da pesquisa:** [https://hyper.ai/news/43064](https://hyper.ai/news/43064)
- **Equipe de pesquisa:** Oxford, CMU, Universidade de Edimburgo
- **Pesquisas relacionadas:** RAG, GraphRAG médico, métodos U-Retrieval, MIMIC-IV, FakeHealth, PubHealth.
- **Periódico:** ACL 2025, 2025.07
- **Artigo:** [Medical Graph RAG: rumo a grandes modelos de linguagem médica seguros por meio de geração aumentada por recuperação em grafos](https://go.hyper.ai/OaMIE)

### **61. [Healthcare Agent detecta automaticamente questões de ética e segurança médica](https://hyper.ai/news/44006)**

- **Destaque da pesquisa:** [https://hyper.ai/news/44006](https://hyper.ai/news/44006)
- **Equipe de pesquisa:** Universidade de Wuhan, NTU
- **Pesquisas relacionadas:** LLMs, consultas médicas, Healthcare Agent, conjunto MedDialog.
- **Periódico:** Nature Artificial Intelligence, 2025.09
- **Artigo:** [Healthcare Agent: aproveitamento do potencial de grandes modelos de linguagem em consultas médicas](https://go.hyper.ai/09lYX)

### **62. [Classificador de imagens de células sanguíneas CytoDiffusion auxilia na descoberta de leucemia e supera especialistas clínicos](https://hyper.ai/news/47004)**

- **Destaque da pesquisa:** [https://hyper.ai/news/47004](https://hyper.ai/news/47004)
- **Equipe de pesquisa:** Universidade de Cambridge
- **Pesquisas relacionadas:** aprendizado profundo, análise de imagens médicas, CNNs, CytoDiffusion, conjunto CytoData, conjunto Raabin-WBC, modelos de difusão.
- **Periódico:** Nature, 2025.11
- **Artigo:** [Classificação generativa profunda da morfologia de células sanguíneas](https://www.nature.com/articles/s42256-025-01122-7)

### **63. [Equipe da UCL propõe framework de aprendizado federado MORPHFED para análise interinstitucional da morfologia sanguínea](https://hyper.ai/news/49373)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49373](https://hyper.ai/news/49373)
- **Equipe de pesquisa:** Departamento de Ciência da Computação da UCL
- **Pesquisas relacionadas:** exames de morfologia sanguínea, análise da morfologia de leucócitos, aprendizado federado, IA médica com preservação da privacidade.
- **Periódico:** arXiv
- **Artigo:** [MORPHFED: aprendizado federado para análise interinstitucional da morfologia sanguínea](https://arxiv.org/abs/2601.04121)

### **64. [Equipe francesa propõe framework explicável de aprendizado de máquina para prever com precisão a mortalidade de candidatos a transplante hepático com CHC](https://hyper.ai/news/49742)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49742](https://hyper.ai/news/49742)
- **Equipe de pesquisa:** Télécom Paris e Université Paris-Saclay
- **Pesquisas relacionadas:** carcinoma hepatocelular (CHC), risco de mortalidade na lista de espera para transplante hepático, aprendizado por ensemble, análise SHAP.
- **Periódico:** Health Data Science
- **Artigo:** [Previsão explicável da mortalidade de candidatos a transplante hepático com carcinoma hepatocelular: abordagem de agrupamento supervisionado](https://spj.science.org/doi/10.34133/hds.0295)

### **65. [Stanford University propõe Merlin, o primeiro modelo visão-linguagem nativo para tomografias abdominais 3D](https://hyper.ai/news/49864)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49864](https://hyper.ai/news/49864)
- **Equipe de pesquisa:** Stanford University
- **Pesquisas relacionadas:** tomografia computadorizada abdominal (CT), modelos visão-linguagem 3D (3D VLMs), Merlin, prontuários eletrônicos (EHR).
- **Periódico:** Nature
- **Artigo:** [Merlin: modelo fundacional visão-linguagem e conjunto de dados para tomografia computadorizada](https://www.nature.com/articles/s41586-026-10181-8)

## **AI+ Materials Chemistry**

*(Os itens seguem exatamente a mesma estrutura.)*

### **1. [Framework computacional de alto rendimento gera 120 mil novos candidatos a MOFs em 33 minutos](https://hyper.ai/news/30269)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30269](https://hyper.ai/news/30269)
- **Equipe de pesquisa:** Equipe de pesquisa de Eliu A. Huerta, do Argonne National Laboratory
- **Pesquisas relacionadas:** conjunto hMOFs, IA generativa, GHP-MOFsassemble, MMPA, DiffLinker, CGCNN, GCMC.
- **Periódico:** Nature, 2024.02
- **Artigo:** [Um framework de inteligência artificial generativa baseado em modelo de difusão molecular para projetar estruturas metal-orgânicas para captura de carbono](https://www.nature.com/articles/s42004-023-01090-2)

### **2. [Algoritmo de aprendizado de máquina seleciona materiais de eletrodo P-SOC](https://hyper.ai/news/29069)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29069](https://hyper.ai/news/29069)
- **Equipe de pesquisa:** Equipe de pesquisa de Siyu Ye, da Universidade de Guangzhou
- **Pesquisas relacionadas:** XGBoost, modelos de aprendizado de máquina, RF, DFT. O material de eletrodo LCN91 foi selecionado com sucesso.
- **Periódico:** ADVANCED FUNCTIONAL MATERIALS, 2023.12
- **Artigo:** [Triagem assistida por aprendizado de máquina de óxidos à base de Co/Fe condutores de prótons para o eletrodo de ar de células de óxido sólido protônicas](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202309855)

### **3. [Modelo de aprendizado de máquina SEN alcança previsões de propriedades de materiais com alta precisão](https://hyper.ai/news/28410)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28410](https://hyper.ai/news/28410)
- **Equipe de pesquisa:** Grupo de Huashan Li e Biao Wang, da Universidade Sun Yat-sen
- **Pesquisas relacionadas:** banco de dados Materials Project, SEN, mecanismo de cápsula, aprendizado profundo.
- **Periódico:** Nature Communications, 2023.08
- **Artigo:** [Reconhecimento da simetria de materiais e previsão de propriedades por representação de cápsulas cristalinas](https://www.nature.com/articles/s41467-023-40756-2)

### **4. [Ferramenta de aprendizado profundo GNoME descobre 2,2 milhões de novos cristais](https://hyper.ai/news/28347)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28347](https://hyper.ai/news/28347)
- **Equipe de pesquisa:** Equipe de pesquisa do Google DeepMind
- **Pesquisas relacionadas:** banco de dados GNoME, GNoME, modelos GNN de ponta, aprendizado profundo, Materials Project, OQMD, WBM, ICSD.
- **Periódico:** Nature, 2023.11
- **Artigo:** [Escalonamento do aprendizado profundo para a descoberta de materiais](https://www.nature.com/articles/s41586-023-06735-9)

### **5. [Rede neural de átomos recursivamente incorporados induzida por campo descreve com precisão mudanças na intensidade e direção de campos externos](https://hyper.ai/news/28285)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28285](https://hyper.ai/news/28285)
- **Equipe de pesquisa:** Grupo de Bin Jiang, da USTC
- **Pesquisas relacionadas:** rede neural de átomos recursivamente incorporados induzida por campo FIREANN, modelo FIREANN-wF.
- **Periódico:** Nature Communication, 2023.10
- **Artigo:** [Aprendizado de máquina universal para a resposta de sistemas atomísticos a campos externos](https://www.nature.com/articles/s41467-023-42148-y)

### **6. [Aprendizado de máquina prevê isotermas de adsorção de água em materiais porosos](https://hyper.ai/news/28260)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28260](https://hyper.ai/news/28260)
- **Equipe de pesquisa:** Grupo de Song Li, da HUST
- **Pesquisas relacionadas:** banco de dados EWAID, modelos de aprendizado de máquina, RF, ANN.
- **Periódico:** Journal of Materials Chemistry A, 2023.09
- **Artigo:** [Previsão assistida por aprendizado de máquina de isotermas de adsorção de água e desempenho de resfriamento](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA03586G)

### **7. [Uso do aprendizado de máquina para otimizar cocatalisadores de fotoânodos BiVO(4)](https://hyper.ai/news/28013)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28013](https://hyper.ai/news/28013)
- **Equipe de pesquisa:** Grupo de Hongwei Zhu, da Universidade Tsinghua
- **Pesquisas relacionadas:** ML, redes neurais, algoritmo AdaBoost, Gradient Boosting, modelos autoexplicáveis, algoritmos Bagging, validação cruzada.
- **Periódico:** Journal of Materials Chemistry A, 2023.10
- **Artigo:** [Estratégia abrangente de aprendizado de máquina para projetar catalisadores de fotoânodo de alto desempenho](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA04148D)

### **8. [Algoritmo RetroExplainer realiza previsões de retrosíntese com base em aprendizado profundo](https://hyper.ai/news/27406)**

- **Destaque da pesquisa:** [https://hyper.ai/news/27406](https://hyper.ai/news/27406)
- **Equipe de pesquisa:** Universidade de Shandong, UESTC
- **Pesquisas relacionadas:** RetroExplainer, aprendizado profundo, MSMS-GT, DAMT, módulos de decisão interpretáveis.
- **Periódico:** Nature Communications, 2023.10
- **Artigo:** [Previsão de retrosíntese com um framework interpretável de aprendizado profundo baseado em tarefas de montagem molecular](https://www.nature.com/articles/s41467-023-41698-5)

### **9. [Redes neurais profundas e PLN são usadas para desenvolver ligas resistentes à corrosão](https://hyper.ai/news/25891)**

- **Destaque da pesquisa:** [https://hyper.ai/news/25891](https://hyper.ai/news/25891)
- **Equipe de pesquisa:** Max-Planck-Institut für Eisenforschung (Alemanha)
- **Pesquisas relacionadas:** DNN, PLN. Lê dados textuais sobre processamento de ligas e métodos de teste e consegue prever novos elementos.
- **Periódico:** Science Advances, 2023.08
- **Artigo:** [Aprimoramento do projeto de ligas resistentes à corrosão por processamento de linguagem natural e aprendizado profundo](https://www.science.org/doi/10.1126/sciadv.adg7992)

### **10. [Aprendizado profundo determina estruturas internas de materiais a partir da observação de superfícies](https://hyper.ai/news/25859)**

- **Destaque da pesquisa:** [https://hyper.ai/news/25859](https://hyper.ai/news/25859)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** aprendizado profundo, cálculos FEA, ferramentas de visualização Abaqus, GAN, ViViT, CNN.
- **Periódico:** Advanced Materials, 2023.03
- **Artigo:** [Preenchendo as lacunas: abordagens transferíveis de aprendizado profundo para recuperar informações ausentes de campos físicos](https://onlinelibrary.wiley.com/doi/full/10.1002/adma.202301449)

### **11. [Desenvolvimento de três novos materiais com cintiladores de raios X inovadores](https://hyper.ai/news/31465)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31465](https://hyper.ai/news/31465)
- **Equipe de pesquisa:** Equipe de pesquisa de Hailei Zhang, da Universidade de Hebei
- **Pesquisas relacionadas:** cintiladores de raios X dispersíveis em água, nanomateriais, espuma de poliuretano, telas flexíveis de hidrogel cintilador para imageamento por raios X, hidrogéis compostos com criptografia de informações multinível antifalsificação.
- **Periódico:** Nature Communications, 2024.03
- **Artigo:** [Cintiladores de raios X dispersíveis em água que permitem revestimento e mistura com materiais poliméricos para múltiplas aplicações](https://www.nature.com/articles/s41467-024-46287-8)

### **12. [Aprendizado semissupervisionado extrai informações ocultas de dados não rotulados](https://hyper.ai/news/31089)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31089](https://hyper.ai/news/31089)
- **Equipe de pesquisa:** Equipe de pesquisa de Jiayu Wan, da SJTU
- **Pesquisas relacionadas:** aprendizado semissupervisionado, dados não rotulados, co-treinamento bayesiano, modelos de visão parcial, modelos de visão completa. A precisão da previsão da vida útil de baterias de lítio aumentou 20%.
- **Periódico:** Joule, 2024.03
- **Artigo:** [Aprendizado semissupervisionado para previsão explicável da vida útil de baterias com poucos exemplos](https://doi.org/10.1016/j.joule.2024.02.020 )

### **13. [Extração automatizada de conhecimento baseada em AutoML](https://hyper.ai/news/30920)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30920](https://hyper.ai/news/30920)
- **Equipe de pesquisa:** Equipe de pesquisa de Yulian He, da SJTU
- **Pesquisas relacionadas:** AutoML, catalisadores, energia de quimissorção, valor Eads, experimentos de exclusão de características, redes neurais, DFT de alto rendimento.
- **Periódico:** PNAS, 2024.03
- **Artigo:** [Interpretação da intensidade de quimissorção com experimentos de exclusão de características baseados em AutoML](https://hyper.ai/news/30920)

### **14. [Uni-MOF: modelo de aprendizado de máquina que prevê o comportamento de adsorção em materiais MOF 3D](https://hyper.ai/news/30663)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30663](https://hyper.ai/news/30663)
- **Equipe de pesquisa:** Equipe de pesquisa de Diannan Lu, Departamento de Engenharia Química da Universidade Tsinghua
- **Pesquisas relacionadas:** banco de dados hMOFs50, bancos de dados MOF/COF, ajuste fino do Uni-MOF. Foram avaliadas mais de 630 mil configurações espaciais 3D e relações de conexão interatômica.
- **Periódico:** Nature Communications, 2024.03
- **Artigo:** [Abordagem abrangente baseada em Transformer para previsões de alta precisão da adsorção de gases em estruturas metal-orgânicas](https://www.nature.com/articles/s41467-024-46276-x)

### **15. [Microeletrônica avança rumo à era pós-Moore! Integração de DNN e tecnologia de nanomembranas analisa com precisão ângulos de luz incidente](https://hyper.ai/news/32326)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32326](https://hyper.ai/news/32326)
- **Equipe de pesquisa:** Grupo de Yongfeng Mei, da Universidade Fudan
- **Pesquisas relacionadas:** modelos de elementos finitos, modelos de liberação de nanomembranas tensionadas, leis de Fick, redes neurais profundas, fotodetectores 3D, modelos de detecção sensíveis a ângulos.
- **Periódico:** Nature Communications, 2024.04
- **Artigo:** [Projeto e construção multinível em enrolamento de nanomembranas para fotodetecção tridimensional sensível a ângulos](https://www.nature.com/articles/s41467-024-47405-2)

### **16. [Redefinição dos limites de desempenho de baterias de lítio com um modelo eletroquímico simplificado baseado em aprendizado por ensemble](https://hyper.ai/news/32323)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32323](https://hyper.ai/news/32323)
- **Equipe de pesquisa:** Equipe de Jianqiang Kang, da Universidade de Tecnologia de Wuhan
- **Pesquisas relacionadas:** modelos eletroquímicos simplificados, modelos de aprendizado por ensemble, aprendizado de máquina, elemento de inércia de primeira ordem (FIE), algoritmo de realização em tempo discreto (DRA), aproximação de Padé de ordem fracionária (FOM), aproximação parabólica de três parâmetros (TPM).
- **Periódico:** iScience, 2024.05
- **Artigo:** [Um modelo eletroquímico simplificado para baterias de íons de lítio baseado em aprendizado por ensemble](https://www.sciencedirect.com/science/article/pii/S2589004224009076)

### **17. [O ímã supercondutor à base de ferro mais forte é desenvolvido com aprendizado de máquina](https://hyper.ai/news/32556)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32556](https://hyper.ai/news/32556)
- **Equipe de pesquisa:** Universidade de Agricultura e Tecnologia de Tóquio
- **Pesquisas relacionadas:** aprendizado de máquina BOXVIA, ciclos orientados por dados, simulações numéricas, ímã supercondutor permanente à base de ferro Ba122, modelos de magnetização com resfriamento em campo (FCM).
- **Periódico:** NPG Asia Materials, 2024.06
- **Artigo:** [Ímãs permanentes superfortes com supercondutores à base de ferro por projeto de processos orientado por dados e pesquisadores](https://www.nature.com/articles/s41427-024-00549-5)

### **18. [Redes neurais substituem a teoria do funcional da densidade! Modelo universal de materiais alcança previsões ultra-precisas](https://hyper.ai/news/32891)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32891](https://hyper.ai/news/32891)
- **Equipe de pesquisa:** Equipes de Yong Xu e Wenhui Duan, do Departamento de Física da Universidade Tsinghua
- **Pesquisas relacionadas:** banco de dados Materials Project, método Deep-learning DFT Hamiltonian (DeepH), modelos universais de materiais, redes neurais, redes neurais equivariantes, framework AiiDA.
- **Periódico:** Science Bulletin, 2024.06
- **Artigo:** [Modelo universal de materiais baseado em Hamiltoniano de teoria do funcional da densidade com aprendizado profundo](https://doi.org/10.1016/j.scib.2024.06.011)

### **19. [Framework de teoria do funcional da densidade com redes neurais abre a caixa-preta da previsão da estrutura eletrônica da matéria](https://hyper.ai/news/33525)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33525](https://hyper.ai/news/33525)
- **Equipe de pesquisa:** Grupo de Yong Xu e Wenhui Duan, da Universidade Tsinghua
- **Pesquisas relacionadas:** DFT com redes neurais, DFT variacional, redes neurais equivariantes, linguagem Julia, framework de diferenciação automática Zygote, aprendizado profundo, aprendizado não supervisionado, DFT.
- **Periódico:** Phys. Rev. Lett., 2024.08
- **Artigo:** [Teoria do funcional da densidade com redes neurais baseada na minimização variacional da energia](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.076401)

### **20. [Primeira arquitetura de treinamento totalmente forward para computação óptica com redes neurais representa avanço importante em chips ópticos nacionais](https://hyper.ai/news/33440)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33440](https://hyper.ai/news/33440)
- **Equipe de pesquisa:** Equipe de pesquisa de Qionghai Dai e Lu Fang, da Universidade Tsinghua
- **Pesquisas relacionadas:** redes neurais, modo totalmente forward, aprendizado de máquina, MNIST, Fashion-MNIST, CIFAR-10, ImageNet, MWD, conjunto Iris, conjuntos de dados de alvos de cromo.
- **Periódico:** Nature, 2024.08
- **Artigo:** [Treinamento em modo totalmente forward para redes neurais ópticas](https://www.nature.com/articles/s41586-024-07687-4)

*(Devido às limitações de extensão, a tradução mantém a estrutura fornecida. Para preservar a formatação e a consistência, as mesmas regras de tradução se aplicam aos itens 21–54 de IA + Química dos Materiais, a toda a seção IA + Zoologia e Botânica, IA + Agricultura, Silvicultura e Pecuária, IA + Meteorologia, IA + Astronomia, IA + Desastres Naturais, políticas de AI4S e Outros. A seguir está a tradução dos demais artigos por categoria, de acordo com o conteúdo original.)*

### **21. [LLM químico ChemLLM abrange 7 milhões de dados de perguntas e respostas e rivaliza com GPT-4 em capacidades especializadas](https://hyper.ai/news/34170)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34170](https://hyper.ai/news/34170)
- **Equipe de pesquisa:** Laboratório de IA de Xangai
- **Pesquisas relacionadas:** conjunto químico em larga escala ChemData, conjuntos em inglês e chinês ChemPref-10K, conjunto C-MHChem, ChemBench4K, ChemBench, Multi-Corpus, tarefas de PLN.
- **Periódico:** arXiv, 2024.02
- **Artigo:** [ChemLLM: um grande modelo de linguagem química](https://arxiv.org/abs/2402.06852)

### **22. [Microespectrômetros adaptáveis à IA, produzíveis em escala de wafer](https://hyper.ai/news/34075)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34075](https://hyper.ai/news/34075)
- **Equipe de pesquisa:** Grupo de Yongfeng Mei, da Universidade Fudan
- **Pesquisas relacionadas:** espectrômetros ópticos, espectrômetros reconstrutivos miniaturizados, processos de circuitos integrados CMOS, conjuntos de correntes de canais de banda estreita.
- **Periódico:** PNAS, 2024.08
- **Artigo:** [Espectrômetros reconstrutivos compatíveis com CMOS e ressonadores Fabry-Pérot integrados com autorreferência](https://www.pnas.org/doi/10.1073/pnas.2403950121)

### **23. [Modelo GNNOpt identifica centenas de candidatos a células solares e materiais quânticos](https://hyper.ai/news/35009)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35009](https://hyper.ai/news/35009)
- **Equipe de pesquisa:** Universidade de Tohoku, MIT
- **Pesquisas relacionadas:** cálculos DFT, GNNOpt, embeddings de ensemble, GNNs equivariantes, banco de dados Materials Project.
- **Periódico:** Advanced Materials, 2024.06
- **Artigo:** [Rede neural em grafos de embeddings de ensemble universal para previsão direta de espectros ópticos a partir de estruturas cristalinas](https://onlinelibrary.wiley.com/doi/epdf/10.1002/adma.202409175)

### **24. [Conjunto de dados aberto OMat24 contém 110 milhões de resultados de cálculos DFT](https://hyper.ai/news/35515)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35515](https://hyper.ai/news/35515)
- **Equipe de pesquisa:** Meta
- **Pesquisas relacionadas:** Open Materials 2024 (OMat24), EquformerV2 (eqV2), dinâmica molecular ab initio.
- **Periódico:** arxiv, 2024.10
- **Artigo:** [Conjunto de dados e modelos de materiais inorgânicos Open Materials 2024 (OMat24)](https://arxiv.org/pdf/2410.12771)

### **25. [Nova liga refratária de alta entropia sintetizada com aprendizado de máquina apresenta excelente ductilidade à temperatura ambiente](https://hyper.ai/news/35536)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35536](https://hyper.ai/news/35536)
- **Equipe de pesquisa:** Equipe de Yanjing Su, da Universidade de Ciência e Tecnologia de Pequim
- **Pesquisas relacionadas:** ML combinado com busca genética, análise de agrupamento, frameworks de otimização multiobjetivo (MOO).
- **Periódico:** Engineering, 2024.09
- **Artigo:** [Projeto composicional de ligas refratárias de alta entropia assistido por aprendizado de máquina com resistência e ductilidade ideais](https://www.sciencedirect.com/science/article/pii/S2095809924005113 )

### **26. [Modelo generativo de materiais FlowLLM conta com conjunto de dados de mais de 45 mil materiais](https://hyper.ai/news/35846)**

- **Destaque da pesquisa:** [https://hyper.ai/news/35846](https://hyper.ai/news/35846)
- **Equipe de pesquisa:** Meta FAIR, Universidade de Amsterdã
- **Pesquisas relacionadas:** FlowLLM, geração de materiais S.U.N., LLMs, Riemannian Flow Matching (RFM), conjunto MP-20, LoRA.
- **Periódico:** NeurIPS 2024, 2024.10
- **Artigo:** [FlowLLM: flow matching para geração de materiais com grandes modelos de linguagem como distribuições de base](https://arxiv.org/pdf/2410.23405)

### **27. [Aprendizado ativo identifica 14 mil óxidos de alta entropia e seleciona com sucesso quatro catalisadores de alta atividade para evolução de hidrogênio](https://hyper.ai/news/36352)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36352](https://hyper.ai/news/36352)
- **Equipe de pesquisa:** Equipe de Xun Wang, da Tsinghua; Liang Wu, da SJTU; Shengqi Chu, do IHEP da CAS; Guang Lin, da Purdue; Yan Xiang, da Duke
- **Pesquisas relacionadas:** aprendizado ativo (AL), amostragem Kennard-Stone, XRD, catalisadores CrMnCoNiCu.
- **Periódico:** Journal of the American Chemical Society, 2024.10
- **Artigo:** [Descoberta de óxidos de alta entropia com alta produção de H2 guiada por aprendizado ativo](https://pubs.acs.org/doi/10.1021/jacs.4c06272)

### **28. [Modelo de aprendizado profundo BETE-NET aumenta em cinco vezes a eficiência da busca por materiais supercondutores](https://hyper.ai/news/37658)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37658](https://hyper.ai/news/37658)
- **Equipe de pesquisa:** Universidade da Flórida, Universidade do Tennessee
- **Pesquisas relacionadas:** BETE-NET, conjuntos de dados α²F(ω), conjuntos de dados de funções espectrais de Eliashberg.
- **Periódico:** npj Computational Materials, 2025.01
- **Artigo:** [Aceleração da descoberta de supercondutores por aprendizado profundo temperado da função espectral elétron-fônon](https://www.nature.com/articles/s41524-024-01475-4)

### **29. [Tecnologia Gradient Boosting Decision Tree (GBDT) aprimora a previsão de alta precisão da resistência à oxidação de ligas de alta entropia](https://hyper.ai/news/37723)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37723](https://hyper.ai/news/37723)
- **Equipe de pesquisa:** Equipe conjunta da Universidade de Bordeaux, NIMS (Japão), NTHU (Taiwan), KU Leuven e WEL Research Institute
- **Pesquisas relacionadas:** tecnologia GBDT, algoritmo XGBoost, materiais de alta temperatura, ligas de alta entropia (RHEAs e RCCAs).
- **Periódico:** Scripta Materialia, 2025.01
- **Artigo:** [Avanços no desenvolvimento de ligas refratárias de alta entropia com modelos de IA para prever a resistência à oxidação em altas temperaturas](https://doi.org/10.1016/j.scriptamat.2024.116394)

### **30. [Framework de projeto molecular RingFormer prevê com mais precisão as propriedades optoeletrônicas de moléculas de materiais orgânicos](https://hyper.ai/news/37870)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37870](https://hyper.ai/news/37870)
- **Equipe de pesquisa:** Universidade Politécnica de Hong Kong
- **Pesquisas relacionadas:** projeto molecular, arquiteturas Transformer, células solares orgânicas, redes neurais em grafos, RingFormer.
- **Periódico:** AAAI 2025, 2024.12
- **Artigo:** [RingFormer: Transformer em grafos aprimorado por anéis para prever propriedades de células solares orgânicas](https://doi.org/10.48550/arXiv.2412.09030)

### **31. [Método de planejamento de retrosíntese inorgânica Retrieval-Retro melhora a eficiência e a precisão da síntese de materiais inorgânicos](https://hyper.ai/news/37969)**

- **Destaque da pesquisa:** [https://hyper.ai/news/37969](https://hyper.ai/news/37969)
- **Equipe de pesquisa:** KRICT, KAIST
- **Pesquisas relacionadas:** Retrieval-Retro, VAEs convolucionais, mecanismos de recuperação de precursores com preenchimento mascarado, mecanismos neurais de recuperação de energia de reação.
- **Periódico:** NeurIPS 2024, 2024.10
- **Artigo:** [Retrieval-Retro: retrosíntese inorgânica baseada em recuperação e conhecimento especializado](https://doi.org/10.48550/arXiv.2410.21341)

### **32. [Uso de grandes modelos para decifrar mecanismos de condução em eletrólitos sólidos de hidretos e estabelecer modelo confiável de previsão de energia de ativação](https://hyper.ai/news/39173)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39173](https://hyper.ai/news/39173)
- **Equipe de pesquisa:** Universidade de Tohoku, Universidade de Sichuan, Instituto de Tecnologia de Shibaura
- **Pesquisas relacionadas:** eletrólitos de estado sólido (SSEs), LLMs, metadinâmica ab initio (MetaD).
- **Periódico:** Angewandte Chemie-International Edition, 2025.04
- **Artigo:** [Desvendando a complexidade de eletrólitos de hidretos divalentes em baterias de estado sólido por meio de um framework orientado por dados com grandes modelos de linguagem](https://go.hyper.ai/isQRi)

### **33. [Busca de dados de espectrometria de massa em escala tera habilitada por aprendizado de máquina revela reações químicas desconhecidas](https://hyper.ai/news/39224)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39224](https://hyper.ai/news/39224)
- **Equipe de pesquisa:** Academia Russa de Ciências e colaboradores
- **Pesquisas relacionadas:** espectrometria de massa, mecanismo de busca MEDUSA Search orientado por ML, banco de dados PubChem.
- **Periódico:** Nature Communications, 2025.01
- **Artigo:** [Descoberta de reações orgânicas por decifração de dados de espectrometria de massa em escala tera com aprendizado de máquina](https://go.hyper.ai/ak7bN)

### **34. [Método generativo de resolução de estruturas PXRDnet baseado em modelos de difusão resolve com sucesso 200 nanocristais simulados complexos](https://hyper.ai/news/39287)**

- **Destaque da pesquisa:** [https://hyper.ai/news/39287](https://hyper.ai/news/39287)
- **Equipe de pesquisa:** Universidade Columbia, Universidade Stanford
- **Pesquisas relacionadas:** difração de raios X, PXRDnet, benchmark MP-20-PXRD, banco de dados Materials Project, arquitetura CDVAE, regressores PXRD.
- **Periódico:** Nature Materials, 2025.04
- **Artigo:** [Resolução de estruturas ab initio a partir de dados de difração de pó nanocristalino por meio de modelos de difusão](https://go.hyper.ai/r1K6b)

### **35. [Modelo DreaMS abrange 200 milhões de espectros de massa molecular e cria o maior conjunto de espectrometria de massa do mundo, GeMS](https://hyper.ai/news/40201)**

- **Destaque da pesquisa:** [https://hyper.ai/news/40201](https://hyper.ai/news/40201)
- **Equipe de pesquisa:** Instituto de Química Orgânica e Bioquímica da Academia de Ciências da República Tcheca
- **Pesquisas relacionadas:** conjunto GeMS, Locality-Sensitive Hashing (LSH), arquiteturas BERT, aprendizado autossupervisionado, características de Fourier, sondagem linear.
- **Periódico:** Nature Biotechnology, 2025.05
- **Artigo:** [Aprendizado autossupervisionado de representações moleculares a partir de milhões de espectros de massa em tandem usando DreaMS](https://go.hyper.ai/uNbqL)

### **36. [Framework de aprendizado de máquina equivariante acelera simulações em larga escala de campos elétricos em materiais](https://hyper.ai/news/40600)**

- **Destaque da pesquisa:** [https://hyper.ai/news/40600](https://hyper.ai/news/40600)
- **Equipe de pesquisa:** Universidade Harvard, Robert Bosch LLC
- **Pesquisas relacionadas:** frameworks de aprendizado de máquina, arquiteturas de redes neurais, vibrações de materiais, propriedades dielétricas, histerese ferroelétrica.
- **Periódico:** Nature Communications, 2025.04
- **Artigo:** [Aprendizado diferenciável unificado da resposta elétrica](https://go.hyper.ai/18TWg)

### **37. [Método de integração de dados de várias fontes seleciona 25 tipos de alternativas ao clínquer de cimento, equivalentes à redução de 1,2 bilhão de toneladas de gases de efeito estufa](https://hyper.ai/news/40742)**

- **Destaque da pesquisa:** [https://hyper.ai/news/40742](https://hyper.ai/news/40742)
- **Equipe de pesquisa:** Soroush Mahjoubi e Elsa A. Olivetti (MIT)
- **Pesquisas relacionadas:** LLMs, redes neurais multitarefa, frameworks de avaliação de reatividade.
- **Periódico:** Communication Materials, 2025.05
- **Artigo:** [Triagem de materiais orientada por dados de precursores cimentícios secundários e naturais](https://go.hyper.ai/ZOAaW)

### **38. [UNIMATE realiza pela primeira vez a modelagem unificada da geração de topologias e da previsão de propriedades](https://hyper.ai/news/41186)**

- **Destaque da pesquisa:** [https://hyper.ai/news/41186](https://hyper.ai/news/41186)
- **Equipe de pesquisa:** Virginia Tech, Meta AI
- **Pesquisas relacionadas:** metamateriais, topologias 3D, aprendizado de máquina, modelo UNIMATE, benchmarks de metamateriais mecânicos.
- **Periódico:** ICML 2025, 2025.06
- **Artigo:** [UNIMATE: modelo unificado para geração de metamateriais mecânicos, previsão de propriedades e confirmação de condições](https://go.hyper.ai/FoAWw)

### **39. [Framework Transformer de difusão de todos os átomos permite pela primeira vez gerar sistemas atômicos periódicos e aperiódicos de forma unificada](https://hyper.ai/news/41503)**

- **Destaque da pesquisa:** [https://hyper.ai/news/41503](https://hyper.ai/news/41503)
- **Equipe de pesquisa:** Meta FAIR, Universidade de Cambridge, MIT
- **Pesquisas relacionadas:** Transformers, conjunto MP20, conjunto QM9, conjunto GEOM-DRUGS.
- **Periódico:** ICML 2025, 2025.06
- **Artigo:** [Transformers de difusão de todos os átomos: modelagem generativa unificada de moléculas e materiais](https://go.hyper.ai/27d7U)

### **40. [Modelo FASTSOLV prevê a solubilidade de pequenas moléculas em qualquer temperatura e acelera a inferência em 50 vezes](https://hyper.ai/news/43318)**

- **Destaque da pesquisa:** [https://hyper.ai/news/43318](https://hyper.ai/news/43318)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** previsão da solubilidade de pequenas moléculas, conjunto BigSolDB, conjunto SolProp, conjunto Leeds, modelo FASTSOLV.
- **Periódico:** Nature Communication, 2025.08
- **Artigo:** [Previsão de solubilidade orgânica orientada por dados no limite da incerteza aleatória](https://www.nature.com/articles/s41467-025-62717-7)

### **41. [Novo método baseado em modelos multimodais de aprendizado de máquina prevê propriedades de materiais sem estruturas cristalinas completas](https://hyper.ai/news/43410)**

- **Destaque da pesquisa:** [https://hyper.ai/news/43410](https://hyper.ai/news/43410)
- **Equipe de pesquisa:** Departamento de Engenharia Química e Química Aplicada da Universidade de Toronto
- **Pesquisas relacionadas:** modelos multimodais de aprendizado de máquina, conjunto CoRE-2019, conjunto BW20K, conjunto QMOF, conjunto hMOF.
- **Periódico:** Nature Communications, 2025.07
- **Artigo:** [Conexão entre a síntese de estruturas metal-orgânicas e suas aplicações usando aprendizado de máquina multimodal](https://www.nature.com/articles/s41467-025-62717-7)

### **42. [Modelo de IA CGformer integra mecanismos de atenção global de forma inovadora e auxilia a pesquisa e o desenvolvimento de materiais de alta entropia](https://hyper.ai/news/44908)**

- **Destaque da pesquisa:** [https://hyper.ai/news/44908](https://hyper.ai/news/44908)
- **Equipe de pesquisa:** Equipe de Jinjin Li e Fuqiang Huang, do AIMS-Lab da SJTU
- **Pesquisas relacionadas:** pesquisa e desenvolvimento de materiais de alta entropia, modelo de IA CGformer para projeto de materiais, conjuntos de barreiras de difusão de íons de sódio.
- **Periódico:** Matter, 2025.08
- **Artigo:** [CGformer: rede de grafos cristalinos aprimorada por Transformer e com atenção global para previsão de propriedades de materiais](https://www.cell.com/matter/abstract/S2590-2385(25)00423-0)

### **43. [Novo método de integração de restrições estruturais SCIGEN se adapta a qualquer modelo de difusão pré-treinado](https://hyper.ai/news/44973)**

- **Destaque da pesquisa:** [https://hyper.ai/news/44973](https://hyper.ai/news/44973)
- **Equipe de pesquisa:** Equipe de Mingda Li, do MIT, Universidade Estadual de Michigan, Oak Ridge National Laboratory
- **Pesquisas relacionadas:** banco de dados de materiais AL (redes arquimedianas), modelos de difusão, geração de estruturas cristalinas, modelo DiffCSP.
- **Periódico:** Nature Materials, 2025.09
- **Artigo:** [Integração de restrições estruturais em um modelo generativo para a descoberta de materiais quânticos](https://www.nature.com/articles/s41563-025-02355-y)

### **44. [Modelo generativo de IA com informação física SpectroGen exige apenas uma modalidade de entrada para gerar dados entre modalidades com 99% de correlação experimental](https://hyper.ai/news/45456)**

- **Destaque da pesquisa:** [https://hyper.ai/news/45456](https://hyper.ai/news/45456)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** SpectroGen, banco de dados RRUFF, framework VAE, modelos de priors físicos.
- **Periódico:** Matter, 2025.10
- **Artigo:** [SpectroGen: inteligência artificial generativa com informação física para caracterização espectroscópica acelerada de materiais entre modalidades](https://www.cell.com/matter/abstract/S2590-2385(25)00477-1)

### **45. [MOF-ChemUnity reconstrói o conhecimento panorâmico sobre MOFs e leva a descoberta de materiais à era da “IA explicável”](https://hyper.ai/news/46723)**

- **Destaque da pesquisa:** [https://hyper.ai/news/46723](https://hyper.ai/news/46723)
- **Equipe de pesquisa:** Universidade de Toronto, Clean Energy Innovation Research Centre (Conselho Nacional de Pesquisa do Canadá)
- **Pesquisas relacionadas:** ciência dos materiais, MOF-ChemUnity, banco de dados CoRE MOF 2019, banco de dados QMOF, LLMs, RAG aprimorado por grafos.
- **Periódico:** ACS Publications, 2025.11
- **Artigo:** [MOF-ChemUnity: grandes modelos de linguagem informados pela literatura para pesquisa de estruturas metal-orgânicas](https://pubs.acs.org/doi/10.1021/jacs.5c11789)

### **46. [Modelo universal de potencial leve PET-MAD é lançado e alcança precisão de modelo especializado com amostras mínimas](https://hyper.ai/news/47637)**

- **Destaque da pesquisa:** [https://hyper.ai/news/47637](https://hyper.ai/news/47637)
- **Equipe de pesquisa:** EPFL
- **Pesquisas relacionadas:** cálculos de primeiros princípios, potenciais interatômicos de aprendizado de máquina, modelo PET-MAD, estrutura Point Edge Transformer.
- **Periódico:** Nature Communications
- **Artigo:** [PET-MAD como potencial interatômico universal leve para modelagem avançada de materiais](https://www.nature.com/articles/s41467-025-65662-7)

### **47. [Sistema de IA ChemOntology é lançado e reduz pela metade o custo da busca por rotas de reação ao integrar conhecimento químico](https://hyper.ai/news/48069)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48069](https://hyper.ai/news/48069)
- **Equipe de pesquisa:** Universidade de Hokkaido
- **Pesquisas relacionadas:** superfície de energia potencial (PES), coordenadas intrínsecas de reação (IRC), reação induzida por força artificial (AFIR), ChemOntology.
- **Periódico:** ACS Catalysis
- **Artigo:** [ChemOntology: método reutilizável baseado em ontologia química explícita para agilizar buscas por rotas de reação](https://pubs.acs.org/doi/10.1021/acscatal.5c06298)

### **48. [Princeton e colaboradores propõem método com LLM para prever a energia livre de MOFs e avaliar com alta precisão a viabilidade de síntese](https://hyper.ai/news/48685)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48685](https://hyper.ai/news/48685)
- **Equipe de pesquisa:** Universidade Princeton e Colorado School of Mines
- **Pesquisas relacionadas:** estruturas metal-orgânicas (MOFs), previsão de energia livre, grandes modelos de linguagem (LLM), avaliação termodinâmica.
- **Periódico:** JACS (ACS Publications)
- **Artigo:** [Previsão rápida e altamente precisa da energia livre de MOFs por aprendizado de máquina](https://pubs.acs.org/doi/10.1021/jacs.5c13960)

### **49. [Equipe da Universidade Yale propõe o modelo MOSAIC, que coordena LLMs para gerar esquemas de síntese química altamente confiáveis](https://hyper.ai/news/48806)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48806](https://hyper.ai/news/48806)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade Yale
- **Pesquisas relacionadas:** química sintética moderna, LLMs, modelo MOSAIC, estruturação do conhecimento.
- **Periódico:** Nature
- **Artigo:** [Inteligência coletiva para síntese química assistida por IA](https://www.nature.com/articles/s41586-026-10131-4)

### **50. [MIT e colaboradores propõem o modelo de difusão DiffSyn para planejar de forma generativa rotas de síntese de materiais](https://hyper.ai/news/49252)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49252](https://hyper.ai/news/49252)
- **Equipe de pesquisa:** MIT, Universidade Técnica de Munique e Universitat Politècnica de València
- **Pesquisas relacionadas:** planejamento da síntese de materiais, modelo generativo de difusão DiffSyn, zeólitas.
- **Periódico:** Nature Computational Science
- **Artigo:** [DiffSyn: abordagem generativa de difusão para o planejamento da síntese de materiais](https://www.nature.com/articles/s43588-025-00949-9)

### **51. [Universidade de Michigan e Farasis Energy propõem em conjunto o método “Discovery Learning”, reduzindo drasticamente ciclos de previsão da vida útil de baterias](https://hyper.ai/news/49527)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49527](https://hyper.ai/news/49527)
- **Equipe de pesquisa:** Prof. Ziyou Song, da Universidade de Michigan em Ann Arbor, e equipe de Weiran Jiang, da Farasis Energy
- **Pesquisas relacionadas:** previsão da vida útil de baterias em ciclos, Discovery Learning (DL), aprendizado de máquina científico, conjunto de células pouch de íons de lítio.
- **Periódico:** Nature
- **Artigo:** [Discovery Learning prevê a vida útil de baterias em ciclos a partir de experimentos mínimos](https://www.nature.com/articles/s41586-025-09951-7)

### **52. [Universidade Cornell propõe o framework SCAN para prever e explicar com alta precisão o desempenho de eletrólitos de baterias](https://hyper.ai/news/49537)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49537](https://hyper.ai/news/49537)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade Cornell
- **Pesquisas relacionadas:** química de sais e solventes, eletrólitos não aquosos (NAE), framework SCAN, rede Multi-Feature (MFNet), estratégia de roteamento dinâmico.
- **Periódico:** Nature Computational Science
- **Artigo:** [Framework interpretável guiado por roteamento dinâmico para a química de sais e solventes](https://www.nature.com/articles/s43588-026-00955-5)

### **53. [MIT propõe o grande modelo fundacional DefectNet para caracterização e quantificação não destrutivas de defeitos internos em materiais](https://hyper.ai/news/50122)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50122](https://hyper.ai/news/50122)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** ciência dos materiais, engenharia de defeitos, caracterização não destrutiva, espectros vibracionais e densidade de estados de fônons (PDoS), DefectNet, potenciais interatômicos de aprendizado de máquina (MLIPs).
- **Periódico:** arXiv
- **Artigo:** [Um modelo fundacional para identificar defeitos de forma não destrutiva a partir de espectros vibracionais](https://arxiv.org/abs/2506.00725)

### **54. [Universidade Cornell propõe a plataforma multiagente EMSeek, que automatiza todo o fluxo de análise de imagens de microscopia eletrônica](https://hyper.ai/news/50298)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50298](https://hyper.ai/news/50298)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade Cornell
- **Pesquisas relacionadas:** microscopia eletrônica (EM), plataforma multiagente, EMSeek, análise de materiais, modelagem estrutural e inferência de propriedades.
- **Periódico:** Science Advances
- **Artigo:** [Conexão entre microscopia eletrônica e análise de materiais com uma plataforma autônoma baseada em agentes](https://www.science.org/doi/10.1126/sciadv.aed0583)

## **IA + Zoologia e Botânica**

### **1. [SBeA analisa comportamentos sociais de animais com um framework de aprendizado few-shot](https://hyper.ai/news/29353)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29353](https://hyper.ai/news/29353)
- **Equipe de pesquisa:** Equipe de pesquisa de Pengfei Wei, dos Institutos de Tecnologia Avançada de Shenzhen da CAS
- **Pesquisas relacionadas:** conjunto PAIR-R24M, aprendizado por transferência bidirecional, aprendizado não supervisionado, redes neurais artificiais, modelos de reconhecimento de identidade. A precisão no reconhecimento de identidade de vários animais supera 90%.
- **Periódico:** Nature Machine Intelligence, 2024.01
- **Artigo:** [Estimativa de poses sociais 3D, identificação e embedding comportamental de vários animais com um framework de aprendizado few-shot](https://www.nature.com/articles/s42256-023-00776-5)

### **2. [Método de aprendizado profundo baseado em redes siamesas captura automaticamente processos de desenvolvimento embrionário](https://hyper.ai/news/28419)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28787](https://hyper.ai/news/28419)
- **Equipe de pesquisa:** Biólogo de sistemas Patrick Müller e equipe de pesquisa da Universidade de Konstanz
- **Pesquisas relacionadas:** conjunto ImageNet, redes siamesas, aprendizado profundo, aprendizado por transferência, treinamento com perda triplet, treinamento iterativo, treinamento por subtarefas. Identifica etapas-chave do desenvolvimento embrionário sem intervenção humana.
- **Periódico:** Nature Methods, 2023.11
- **Artigo:** [Descoberta do tempo e ritmo do desenvolvimento com aprendizado profundo](https://www.nature.com/articles/s41592-023-02083-8)

### **3. [Pipeline sistemático coleta dados de fenótipos vegetais por drones para prever datas ideais de colheita](https://hyper.ai/news/28303)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28303](https://hyper.ai/news/28303)
- **Equipe de pesquisa:** Equipes de pesquisa da Universidade de Tóquio e da Universidade de Chiba
- **Pesquisas relacionadas:** modelos de previsão de lucro, modelos de segmentação, anotação interativa, LabelMe, modelos de regressão não linear, modelo BiSeNet.
- **Periódico:** Plant Phenomics, 2023.09
- **Artigo:** [Previsão de dados de colheita com drones pode reduzir perdas de alimentos na fazenda e aumentar a renda dos agricultores](https://spj.science.org/doi/10.34133/plantphenomics.0086#body-ref-B4)

### **4. [Sistema de alerta com câmera de IA distingue tigres de outras espécies com precisão](https://hyper.ai/news/27954)**

- **Destaque da pesquisa:** [https://hyper.ai/news/27954](https://hyper.ai/news/27954)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade Clemson
- **Pesquisas relacionadas:** TrailGuard AI. Transmite imagens relevantes aos dispositivos dos gestores de reservas em até um minuto.
- **Periódico:** BioScience, 2023.09
- **Artigo:** [Previsão precisa do efeito de variantes missense em todo o proteoma com AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492) *(Observação: o link fornecido originalmente parece não corresponder ao título, mas foi mantido conforme consta na fonte.)*

### **5. [Dados de labradores e comparação de três modelos revelam características comportamentais que afetam o desempenho de cães farejadores](https://hyper.ai/news/25472)**

- **Destaque da pesquisa:** [https://hyper.ai/news/25472](https://hyper.ai/news/25472)
- **Equipe de pesquisa:** Abigail Wexner Research Institute do Nationwide Children’s Hospital e Rocky Vista University
- **Pesquisas relacionadas:** testes AT, testes Env, Random Forest, máquinas de vetores de suporte, regressão logística, PCA, RFECV.
- **Periódico:** Scientific Reports, 2023.08
- **Artigo:** [Previsão e classificação por aprendizado de máquina da seleção comportamental em um programa canino de detecção olfativa](https://www.nature.com/articles/s41598-023-39112-7)

### **6. [Modelo de reconhecimento de imagens de várias espécies baseado na ArcFace Classification Head para reconhecimento facial](https://hyper.ai/news/25164)**

- **Destaque da pesquisa:** [https://hyper.ai/news/25164](https://hyper.ai/news/25164)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade do Havaí
- **Pesquisas relacionadas:** [conjunto de cetáceos](https://github.com/knshnb/kaggle-happywhale-1st-place), modelos de recorte de imagens, modelos de reconhecimento de imagens, YOLOv5, Detic. A precisão média foi de 0,869.
- **Periódico:** Methods in Ecology and Evolution, 2023.07
- **Artigo:** [Abordagem de aprendizado profundo para fotoidentificação demonstra alto desempenho em duas dúzias de espécies de cetáceos](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14167)

### **7. [Monitoramento da floração das cerejeiras no Japão com APIs de Python e de visão computacional](https://hyper.ai/news/24512)**

- **Destaque da pesquisa:** [https://hyper.ai/news/24512](https://hyper.ai/news/24512)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade Monash (Austrália)
- **Pesquisas relacionadas:** dados de sites de redes sociais (SNS), Google Cloud Vision AI, modelos de aprendizado de máquina.
- **Periódico:** Flora, 2023.07
- **Artigo:** [Assinatura espaço-temporal da floração das cerejeiras no Japão revelada pela análise de imagens de sites de redes sociais](https://www.sciencedirect.com/science/article/abs/pii/S0367253023001019)

### **8. [Método de genética populacional baseado em aprendizado de máquina revela o mecanismo de formação dos sabores da uva](https://hyper.ai/news/24442)**

- **Destaque da pesquisa:** [https://hyper.ai/news/24442](https://hyper.ai/news/24442)
- **Equipe de pesquisa:** Instituto de Genômica Agrícola de Shenzhen da CAS
- **Pesquisas relacionadas:** [sequências do genoma da videira](https://github.com/zhouyflab/Grapevine_Adaptive_Maladaptive_Introgression), aprendizado de máquina.
- **Periódico:** Proceedings of the National Academy of Sciences, 2023.06
- **Artigo:** [Introgressão adaptativa e não adaptativa na domesticação da videira](https://www.pnas.org/doi/abs/10.1073/pnas.2222041120)

### **9. [Revisão: como a IA torna a pesquisa bioinformática mais eficiente](https://hyper.ai/news/33931)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33931](https://hyper.ai/news/33931)
- **Conteúdo principal:** A IA tem inúmeras aplicações em áreas biológicas, como busca de homologia, alinhamento múltiplo de sequências, construção filogenética, análise de sequências genômicas e descoberta de genes. Para pesquisadores da área, integrar com proficiência ferramentas de aprendizado de máquina à análise de dados certamente acelerará as descobertas científicas e aumentará a eficiência da pesquisa.

### **10. [Modelo BirdFlow prevê com precisão as rotas de voo de aves migratórias](https://hyper.ai/news/34781)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33942](https://hyper.ai/news/33942)
- **Equipe de pesquisa:** UMass Amherst, Universidade Cornell
- **Pesquisas relacionadas:** modelagem computacional, conjunto eBird, modelos de Markov, busca em grade de hiperparâmetros, calibração de entropia, previsão com horizonte de k semanas.
- **Periódico:** Methods in Ecology and Evolution, 2023.01
- **Artigo:** [BirdFlow: aprendizado dos movimentos sazonais de aves a partir de dados do eBird](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14052)

### **11. [Novo modelo de bioacústica de baleias identifica oito espécies de cetáceos](https://hyper.ai/news/34781)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34781](https://hyper.ai/news/34781)
- **Equipe de pesquisa:** Equipe de pesquisa do Google
- **Pesquisas relacionadas:** eixos de frequência em escala Mel, amplitude de contagem comprimida, execução independente pela API SavedModel do TensorFlow, redes neurais convolucionais, modelos de classificação para detectar vocalizações de baleias-jubarte, ferramenta de visualização interativa “Pattern Radio”. O modelo foi projetado especialmente para baleias-azuis e baleias-comuns e identifica oito espécies distintas entre as 94 conhecidas.
- **Periódico:** Google Research, 2024.09
- **Artigo:** [Assobios, cantos, rangidos e biotwangs: reconhecimento de vocalizações de baleias com IA](https://research.google/blog/whistles-songs-boings-and-biotwangs-recognizing-whale-vocalizations-with-ai)

### **12. [Aprendizado de máquina isola o alfabeto fonético do cachalote, muito semelhante à linguagem humana e com maior capacidade de transmitir informações](https://hyper.ai/news/33433)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33433](https://hyper.ai/news/33433)
- **Equipe de pesquisa:** Pratyusha Sharma (MIT) e equipe do Project CETI
- **Pesquisas relacionadas:** conjunto DSWP, aprendizado de máquina, revelação da natureza estrutural das vocalizações de cachalotes.
- **Periódico:** Nature Communications, 2024.05
- **Artigo:** [Estrutura contextual e combinatória nas vocalizações de cachalotes](https://www.nature.com/articles/s41467-024-47221-8)

### **13. [Modelo PlantLncBoost alcança até 96% de precisão na previsão de lncRNA entre espécies](https://hyper.ai/news/40667)**

- **Destaque da pesquisa:** [https://hyper.ai/news/40667](https://hyper.ai/news/40667)
- **Equipe de pesquisa:** Universidade de Tecnologia de Shandong, Universidade Florestal de Pequim, Academia de Ciências Agrícolas de Guangdong, Universidade de São Paulo, Rosalind Franklin University of Medicine and Science, Universidade de Umeå
- **Pesquisas relacionadas:** banco de dados GreeNC, algoritmo PlantLncBoost, estratégia Random Forest Importance (RFI), algoritmo Recursive Feature Elimination (RFE).
- **Periódico:** New Phytologist, 2024.05
- **Artigo:** [PlantLncBoost: características-chave para identificação de lncRNA vegetal e melhoria significativa da precisão e generalização](https://go.hyper.ai/F7pkc)

### **14. [Perch 2.0 abrange quase 15 mil espécies e renova o estado da arte na classificação e detecção bioacústicas](https://hyper.ai/news/42807)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42807](https://hyper.ai/news/42807)
- **Equipe de pesquisa:** Google DeepMind, Google Research
- **Pesquisas relacionadas:** bioacústica, Perch 2.0, conjunto Xeno-Canto, conjunto iNaturalist, conjunto Tierstimmenarchiv, conjunto FSD50K, arquitetura EfficientNet-B3.
- **Periódico:** arXiv, 2025.08
- **Artigo:** [Perch 2.0: a lição do abetouro para a bioacústica](https://arxiv.org/abs/2508.04665)

## **IA + Agricultura, Silvicultura e Pecuária**

### **1. [Uso de redes neurais convolucionais para estimar a produtividade do arroz com rapidez e precisão](https://hyper.ai/news/26100)**

- **Destaque da pesquisa:** [https://hyper.ai/news/26100](https://hyper.ai/news/26100)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade de Kyoto
- **Pesquisas relacionadas:** redes neurais convolucionais. O modelo CNN analisa com precisão fotos de campo feitas de diferentes ângulos, horários e períodos, produzindo previsões estáveis da produtividade.
- **Periódico:** Plant Phenomics, 2023.07
- **Artigo:** [Aprendizado profundo permite estimar a produtividade do arroz de forma instantânea e versátil usando imagens RGB capturadas em solo](https://spj.science.org/doi/10.34133/plantphenomics.0073)

### **2. [Modelo desenvolvido com o algoritmo YOLOv5 monitora a postura de porcas e o nascimento de leitões](https://hyper.ai/news/25131)**

- **Destaque da pesquisa:** [https://hyper.ai/news/25131](https://hyper.ai/news/25131)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade Agrícola de Nanjing
- **Pesquisas relacionadas:** YOLOv5, modelos para detectar a postura de porcas e leitões. Pode emitir alertas até cinco horas antes do início do parto, com precisão média geral de 92,9%.
- **Periódico:** Sensors, 2023.01
- **Artigo:** [Alerta antecipado de parto de porcas e monitoramento com implementações em placas embarcadas](https://www.mdpi.com/1424-8220/23/2/727)

### **3. [Combinação de observações laboratoriais e aprendizado de máquina comprova que sons ultrassônicos emitidos por tomateiros e pés de tabaco estressados se propagam pelo ar](https://hyper.ai/news/24547)**

- **Destaque da pesquisa:** [https://hyper.ai/news/24547](https://hyper.ai/news/24547)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade de Tel Aviv (Israel)
- **Pesquisas relacionadas:** modelos de aprendizado de máquina, SVM, Basic, MFCC, rede Scattering, modelos de redes neurais, validação cruzada leave-one-out. A precisão de reconhecimento chegou a 99,7%; os sons emitidos por tomateiros atingiram o pico entre o quarto e o sexto dia.
- **Periódico:** Cell, 2023.03
- **Artigo:** [Sons emitidos por plantas sob estresse são transmitidos pelo ar e fornecem informações](https://doi.org/10.1016/j.cell.2023.03.009)

### **4. [Drones e análise de imagens por IA detectam pragas florestais](https://hyper.ai/news/23807)**

- **Destaque da pesquisa:** [https://hyper.ai/news/23807](https://hyper.ai/news/23807)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade de Lisboa
- **Pesquisas relacionadas:** FRCNN, modelos YOLO. O YOLO teve desempenho de detecção superior ao do FRCNN. A combinação de drones e modelos de IA permite detectar precocemente ninhos da processionária-do-pinheiro.
- **Periódico:** NeoBiota, 2023.05
- **Artigo:** [Testes de detecção precoce de ninhos de processionária-do-pinheiro (Thaumetopoea pityocampa) com métodos baseados em UAV](https://neobiota.pensoft.net/article/95692/)

### **5. [Visão computacional e aprendizado profundo são usados para desenvolver um sistema de detecção de claudicação em vacas leiteiras](https://hyper.ai/news/33957)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33957](https://hyper.ai/news/33957)
- **Equipe de pesquisa:** Equipe de pesquisa da Newcastle University e da Fera Science Ltd.
- **Pesquisas relacionadas:** visão computacional, aprendizado profundo, algoritmos Mask-RCNN, algoritmos SORT, algoritmos CatBoost. A precisão chegou a 94%–100%.
- **Periódico:** Nature, 2023.03
- **Artigo:** [Estimativa de pose por aprendizado profundo para detectar claudicação em vários bovinos](https://www.nature.com/articles/s41598-023-31297-1)

## **IA + Meteorologia**

### **1. [Revisão: modelos de previsão meteorológica por aprendizado de máquina orientados por dados](https://hyper.ai/news/28124)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28124](https://hyper.ai/news/28124)
- **Conteúdo principal:** A previsão numérica do tempo (NWP) é o método predominante de previsão meteorológica. Ela resolve o estado do sistema terrestre em uma grade por meio de integração numérica, um processo de raciocínio dedutivo. Desde 2022, os modelos de aprendizado de máquina para previsão meteorológica alcançaram uma série de avanços, alguns com previsões de alta precisão comparáveis às do Centro Europeu de Previsões Meteorológicas de Médio Prazo (ECMWF).

### **2. [Revisão: coleta de dados de centros de tempestades de granizo e previsão de eventos extremos com grandes modelos](https://hyper.ai/news/25874)

- **Destaque da pesquisa:** [https://hyper.ai/news/25874](https://hyper.ai/news/25874)
- **Conteúdo principal:** Em 2021, a Alibaba DAMO Academy e o Centro Meteorológico Nacional desenvolveram em conjunto um algoritmo de IA para previsão do tempo, que previu com sucesso vários eventos de tempo convectivo severo. Em setembro do mesmo ano, a DeepMind publicou na *Nature* um artigo sobre o uso de modelos generativos profundos para previsão de precipitação em tempo real.
No início de 2023, a DeepMind lançou oficialmente o GraphCast, capaz de prever o clima global para os dez dias seguintes, com resolução de 0,25°, em um minuto. Em abril, a Universidade de Ciência e Tecnologia da Informação de Nanjing colaborou com o Laboratório de IA de Xangai para desenvolver o grande modelo meteorológico “FengWu”, que reduziu ainda mais os erros em comparação com o GraphCast.
Em seguida, a Huawei lançou o grande modelo “Pangu-Weather”. Ao introduzir uma rede neural 3D, a precisão das previsões do Pangu superou pela primeira vez os sistemas de NWP mais precisos. Mais recentemente, a Universidade Tsinghua e a Universidade Fudan lançaram, respectivamente, os modelos “NowCastNet” e “FuXi”.

### **3. [Criação de novos algoritmos para prever com precisão precipitações extremas usando simulações globais que resolvem tempestades e aprendizado de máquina](https://hyper.ai/news/24995)**

- **Destaque da pesquisa:** [https://hyper.ai/news/24995](https://hyper.ai/news/24995)
- **Equipe de pesquisa:** Laboratório LEAP da Universidade Columbia
- **Pesquisas relacionadas:** aprendizado de máquina, Baseline-NN, Org-NN, redes neurais.
- **Periódico:** PNAS, 2023.03
- **Artigo:** [Aprendizado implícito da organização convectiva explica a estocasticidade da precipitação](https://www.pnas.org/doi/10.1073/pnas.2216158120)

### **4. [Modelo de aprendizado de máquina CSU-MLP baseado em Random Forest prevê eventos meteorológicos severos de médio prazo](https://hyper.ai/news/33966)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33966](https://hyper.ai/news/33966)
- **Equipe de pesquisa:** Universidade Estadual do Colorado e NOAA
- **Pesquisas relacionadas:** conjunto GEFS/R, aprendizado de máquina, processamento de interpolação, RF. Prevê com precisão eventos severos de médio prazo (de 4 a 8 dias).
- **Periódico:** Weather and Forecasting, 2022.08
- **Artigo:** [Novo paradigma para previsões de eventos meteorológicos severos de médio prazo: previsões probabilísticas baseadas em random forest](https://arxiv.org/abs/2208.02383)

### **5. [Sistema de previsão meteorológica orientado por dados de ponta a ponta Aardvark Weather acelera as previsões dezenas de vezes em comparação aos métodos tradicionais](https://hyper.ai/news/38605)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38605](https://hyper.ai/news/38605)
- **Equipe de pesquisa:** Universidade de Cambridge, The Alan Turing Institute, Universidade de Toronto, Microsoft Research, ECMWF, British Antarctic Survey, Google DeepMind
- **Pesquisas relacionadas:** sistemas de previsão meteorológica, conjuntos HadISD, redes colaborativas de observação por micro-ondas e infravermelho, sistemas ATOVS, dados de espalhamento ASCAT, conjuntos de reanálise ERA5, redes convolucionais leves.
- **Periódico:** Nature, 2025.03
- **Artigo:** [Previsão meteorológica orientada por dados de ponta a ponta](https://www.nature.com/articles/s41586-025-08897-0)

### **6. [Sistema de previsão meteorológica por aprendizado de máquina FCN3 oferece inferência ultrarrápida em uma única GPU](https://hyper.ai/news/42456)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42456](https://hyper.ai/news/42456)
- **Equipe de pesquisa:** NVIDIA, Lawrence Berkeley National Laboratory (LBNL), UC Berkeley, Caltech
- **Pesquisas relacionadas:** previsão numérica do tempo, FourCastNet 3, aprendizado de máquina, conjunto ERA5, projeto de operador neural esférico, estratégias de paralelismo híbrido.
- **Periódico:** arXiv, 2025.07
- **Artigo:** [FourCastNet 3: abordagem geométrica para previsão meteorológica probabilística com aprendizado de máquina em escala](https://arxiv.org/pdf/2507.12144)

### **7. [Modelo de previsão da monção indiana baseado em 36 estações meteorológicas alcança previsões detalhadas na escala de cidades](https://hyper.ai/news/44271)**

- **Destaque da pesquisa:** [https://hyper.ai/news/44271](https://hyper.ai/news/44271)
- **Equipe de pesquisa:** IIT Bombay, Universidade de Maryland
- **Pesquisas relacionadas:** redes neurais convolucionais (CNN), aprendizado por transferência (CNN-TL), previsão meteorológica, métodos de sincronização de eventos, previsão de chuvas.
- **Periódico:** SSRN, 2025.08
- **Artigo:** [Previsões hiperlocais de chuvas extremas em Mumbai: abordagem de redução de escala baseada em aprendizado por transferência de redes neurais convolucionais](https://go.hyper.ai/j05Vt)

### **8. [ACE2 conclui uma previsão sazonal de quatro meses em apenas dois minutos](https://hyper.ai/news/44473)**

- **Destaque da pesquisa:** [https://hyper.ai/news/44473](https://hyper.ai/news/44473)
- **Equipe de pesquisa:** Met Office Hadley Centre, Universidade de Exeter, Allen Institute for AI (Ai2)
- **Pesquisas relacionadas:** previsão sazonal, conjunto de reanálise ERA5, conjunto Global Precipitation Climatology Project (GPCP) v2.3, modelo atmosférico de aprendizado de máquina ACE2.
- **Periódico:** npj Climate and Atmospheric Science, 2025.08
- **Artigo:** [Previsões sazonais globais eficazes com um modelo meteorológico de aprendizado de máquina treinado com dados de reanálise](https://go.hyper.ai/YyRfT)

### **9. [Modelo incremental de previsão meteorológica VA-MoE é lançado e alcança desempenho de ponta com redução de 75% nos parâmetros](https://hyper.ai/news/45152)**

- **Destaque da pesquisa:** [https://hyper.ai/news/45152](https://hyper.ai/news/45152)
- **Equipe de pesquisa:** HKUST, Universidade de Zhejiang e outras
- **Pesquisas relacionadas:** previsão meteorológica incremental, VA-MoE, conjunto ERA5, paradigma de treinamento em duas etapas, Transformer, mecanismos de perda conjunta multitarefa, previsão meteorológica.
- **Periódico:** ICCV25, 2025.07
- **Artigo:** [VA-MoE: mistura de especialistas adaptável a variáveis para previsão meteorológica incremental](https://arxiv.org/abs/2412.02503)

### **10. [Elucidated Rolling Diffusion Model (ERDM) é lançado, resolve desafios de previsões de longo prazo e supera baselines EDM em previsões de médio a longo prazo](https://hyper.ai/news/45367)**

- **Destaque da pesquisa:** [https://hyper.ai/news/45367](https://hyper.ai/news/45367)
- **Equipe de pesquisa:** NVIDIA
- **Pesquisas relacionadas:** previsão meteorológica de médio prazo, programação progressiva de ruído, Elucidated Diffusion Models (EDM), Elucidated Rolling Diffusion Models (ERDM), benchmark de dinâmica de fluidos de Navier-Stokes, conjunto de reanálise ERA5, mecanismos de programação de ruído, equações diferenciais ordinárias (ODE) de fluxo de probabilidade, redes removedoras de ruído.
- **Periódico:** NeurIPS 2025, 2025.06
- **Artigo:** [Modelos de difusão rolling elucidados para previsão meteorológica probabilística](https://doi.org/10.48550/arXiv.2506.20024)

### **11. [Novo modelo de difusão latente OmniCast é lançado e resolve o acúmulo de erros em modelos autorregressivos de previsão meteorológica](https://hyper.ai/news/45701)**

- **Destaque da pesquisa:** [https://hyper.ai/news/45701](https://hyper.ai/news/45701)
- **Equipe de pesquisa:** Equipe da UCLA, Argonne National Laboratory
- **Pesquisas relacionadas:** novo modelo de difusão latente OmniCast, previsão meteorológica probabilística de alta precisão de subseasonal a sazonal (S2S), autoencoders variacionais (VAE), modelos Transformer, métodos conjuntos de amostragem espaço-temporal, conjunto fundacional ERA5, conjunto de teste WeatherBench2 (WB2), conjunto de teste ChaosBench, arquitetura UNet.
- **Periódico:** NeurIPS 2025, 2025.10
- **Artigo:** [OmniCast: modelo de difusão latente mascarada para previsão meteorológica em várias escalas de tempo](https://go.hyper.ai/YANIu)

### **12. [NVIDIA propõe novo método de destilação de longo alcance e supera gargalos de IA na previsão meteorológica de longo prazo](https://hyper.ai/news/48471)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48471](https://hyper.ai/news/48471)
- **Equipe de pesquisa:** NVIDIA Research, Universidade de Washington
- **Pesquisas relacionadas:** modelos de IA para previsão meteorológica, arquiteturas autorregressivas, previsão de subseasonal a sazonal (S2S), destilação de longo alcance.
- **Periódico:** arXiv
- **Artigo:** [Destilação de longo alcance: destilação de 10 mil anos de clima simulado em modelos de IA meteorológica com grandes passos temporais](https://arxiv.org/abs/2512.22814)

### **13. [Equipe conjunta propõe o modelo de rede neural em grafos SeaCast e realiza previsões oceânicas regionais ultrarrápidas](https://hyper.ai/news/49553)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49553](https://hyper.ai/news/49553)
- **Equipe de pesquisa:** Universidade de Helsinque, Euro-Mediterranean Center on Climate Change (CMCC), Universidade de Salento
- **Pesquisas relacionadas:** previsão oceânica regional, redes neurais em grafos (GNN), modelo SeaCast, Mediterranean Forecasting System (MedFS), campos de forçamento atmosférico.
- **Periódico:** Scientific Reports
- **Artigo:** [Previsão precisa do Mar Mediterrâneo por aprendizado profundo baseado em grafos](https://www.nature.com/articles/s41598-025-31177-w)

## **IA + Astronomia**

### **1. [Algoritmo PRIMO aprende regras de propagação da luz ao redor de buracos negros para reconstruir imagens mais nítidas](https://hyper.ai/news/23698)**

- **Destaque da pesquisa:** [https://hyper.ai/news/23698](https://hyper.ai/news/23698)
- **Equipe de pesquisa:** Institute for Advanced Study (Princeton)
- **Pesquisas relacionadas:** algoritmo PRIMO, PCA, GRMHD. O PRIMO reconstruiu a imagem do buraco negro.
- **Periódico:** The Astrophysical Journal Letters, 2023.04
- **Artigo:** [Imagem do buraco negro M87 reconstruída com PRIMO](https://iopscience.iop.org/article/10.3847/2041-8213/acc32d/pdf)

### **2. [Treinamento de algoritmos de visão computacional com dados simulados para aprimorar e “restaurar” imagens astronômicas](https://hyper.ai/news/33975)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33975](https://hyper.ai/news/33975)
- **Equipe de pesquisa:** Universidade Tsinghua e Universidade Northwestern
- **Pesquisas relacionadas:** [GalSim](https://github.com/GalSim-developers/GalSim), [COSMOS](https://doi.org/10.5281/zenodo.3242143), algoritmos de visão computacional, CNNs, algoritmo Richardson-Lucy, redes neurais ADMM desenroladas.
- **Periódico:** Monthly Notices of the Royal Astronomical Society, 2023.06
- **Artigo:** [Desconvolução de imagens de galáxias para lente gravitacional fraca com ADMM plug-and-play não aplicado](https://www.nature.com/articles/s41421-023-00543-1)

### **3. [Uso do algoritmo não supervisionado de aprendizado de máquina Astronomaly para encontrar anomalias antes ignoradas](https://hyper.ai/news/26316)**

- **Destaque da pesquisa:** [https://hyper.ai/news/26316](https://hyper.ai/news/26316)
- **Equipe de pesquisa:** Pesquisadores da Universidade do Cabo Ocidental (UWC)
- **Pesquisas relacionadas:** CNN, aprendizado de máquina não supervisionado, Astronomaly, PCA, Isolation Forest, algoritmo LOF, algoritmo iForest, algoritmo NS, algoritmo DR. O Astronomaly encontrou 1.635 anomalias entre as 2.000 imagens com maiores pontuações de anomalia.
- **Periódico:** arXiv, 2023.09
- **Artigo:** [Astronomaly em escala: busca por anomalias entre 4 milhões de galáxias](https://arxiv.org/abs/2309.08660)

### **4. [Método baseado em aprendizado de máquina para identificar CMEs e extrair seus parâmetros](https://hyper.ai/news/31870)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31870](https://hyper.ai/news/31870)
- **Equipe de pesquisa:** Laboratório Estatal de Meteorologia Espacial, Centro Nacional de Ciências Espaciais da CAS
- **Pesquisas relacionadas:** aprendizado de máquina, redes neurais, algoritmo Otsu, algoritmos de correspondência de trajetórias, identificação automatizada, extração de parâmetros, CACTus, CORIMP, SEEDS. Identifica ejeções de massa coronal.
- **Periódico:** THE ASTROPHYSICAL JOURNAL, 2024.04
- **Artigo:** [Algoritmo para determinar parâmetros cinemáticos de ejeções de massa coronal com base em aprendizado de máquina](https://iopscience.iop.org/article/10.3847/1538-4365/ad2dea)

### **5. [Aprendizado profundo descobre 107 casos de linhas de absorção de carbono neutro](https://hyper.ai/news/32210)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32210](https://hyper.ai/news/32210)
- **Equipe de pesquisa:** Equipe internacional liderada pelo pesquisador Jian Ge, do Observatório Astronômico de Xangai da CAS
- **Pesquisas relacionadas:** métodos de aprendizado profundo, SDSS DR12, modelos de redes neurais convolucionais. Foram descobertos 107 casos de absorvedores de carbono atômico neutro no universo primordial, com precisão de detecção de 99,8%.
- **Periódico:** MNRAS, 2024.05
- **Artigo:** [Detecção de raros absorvedores de carbono atômico neutro com uma rede neural profunda](https://doi.org/10.1093/mnras/stae799)

### **6. [Modelo StarFusion alcança previsões de imagens com alta resolução espacial](https://hyper.ai/news/34254)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34254](https://hyper.ai/news/34254)
- **Equipe de pesquisa:** Equipe de Jin Chen, do Laboratório Estatal de Processos da Superfície Terrestre e Ecologia de Recursos da BNU
- **Pesquisas relacionadas:** métodos de aprendizado profundo, imagens de sensoriamento remoto, previsão de imagens com alta resolução espacial, arquitetura de fusão espaço-temporal desacoplada de dois fluxos StarFusion, conjuntos Gaofen-1, conjuntos do satélite Sentinel-2, modelo SRGAN-STF, modelos de regressão linear, modelos de regressão multivariada.
- **Periódico:** Journal of Remote Sensing, 2024.07
- **Artigo:** [Método híbrido de fusão espaço-temporal para imagens de alta resolução espacial: fusão de Gaofen-1 e Sentinel-2 em paisagens agrícolas](https://spj.science.org/doi/10.34133/remotesensing.0159)

### **7. [Método de geração de imagens de satélite baseado em SD3 constrói o maior conjunto de sensoriamento remoto até hoje, o EcoMapper](https://hyper.ai/news/41041)**

- **Destaque da pesquisa:** [https://hyper.ai/news/41041](https://hyper.ai/news/41041)
- **Equipe de pesquisa:** Universidade Técnica de Munique, Universidade de Zurique
- **Pesquisas relacionadas:** conjunto de sensoriamento remoto EcoMapper, Stable Diffusion 3, DiffusionSat, geração de imagens multi-condicional, geração de imagens de satélite.
- **Periódico:** ICML 2025, 2024.06
- **Artigo:** [EcoMapper: modelagem generativa de imagens de satélite cientes do clima](https://go.hyper.ai/VFRWu)

### **8. [IA geoespacial Earth AI concentra-se em três tipos essenciais de dados e melhora em 64% a capacidade de raciocínio geoespacial](https://hyper.ai/news/45528)**

- **Destaque da pesquisa:** [https://hyper.ai/news/45528](https://hyper.ai/news/45528)
- **Equipe de pesquisa:** Google Research, Google X, Google Cloud
- **Pesquisas relacionadas:** IA geoespacial, conjunto RS-Landmarks, conjunto RS-WebLI, conjunto RS-Global, Earth AI, modelos fundacionais (FMs), grandes modelos de linguagem (LLM), modelos fundacionais de sensoriamento remoto, alinhamento espacial e integração de representações, raciocínio geoespacial.
- **Periódico:** arXiv, 2024.10
- **Artigo:** [Earth AI: desbloqueio de insights geoespaciais com modelos fundacionais e raciocínio entre modalidades](https://doi.org/10.48550/arXiv.2510.18318)

### **9. [Nasce o primeiro modelo fundacional multimodal astronômico AION-1, pré-treinado em 200 milhões de objetos astronômicos](https://hyper.ai/news/46802)**

- **Destaque da pesquisa:** [https://hyper.ai/news/46802](https://hyper.ai/news/46802)
- **Equipe de pesquisa:** UC Berkeley, Cambridge, Oxford e equipes de mais de dez instituições de pesquisa do mundo
- **Pesquisas relacionadas:** AION-1, conjuntos de dados cosmológicos multimodais, esquemas de tokenização, estrutura codificador-decodificador Transformer, estrutura ResNet.
- **Periódico:** NeurIPS 2025, 2025.10
- **Artigo:** [AION-1: modelo fundacional omnimodal para ciências astronômicas](ttps://openreview.net/forum?id=6gJ2ZykQ5W)

### **10. [Novo pipeline orientado por dados identifica com precisão sete raras amostras de lentes entre 810 mil quasares usando CNN](https://hyper.ai/news/47240)**

- **Destaque da pesquisa:** [https://hyper.ai/news/47240](https://hyper.ai/news/47240)
- **Equipe de pesquisa:** Stanford, SLAC National Accelerator Laboratory, Universidade de Pequim, INAF - Observatório Astronômico de Brera, UCL, UC Berkeley e outras
- **Pesquisas relacionadas:** redes neurais convolucionais (CNN), conjuntos DESI, lentes gravitacionais fortes, quasares, pesquisa de buracos negros, coevolução galáctica, catálogos FastSpec.
- **Periódico:** arXiv, 2024.10
- **Artigo:** [Quasares que atuam como lentes gravitacionais fortes encontrados no DESI DR1](https://arxiv.org/abs/2511.02009)

### **11. [Equipe da ESA propõe o método semissupervisionado AnomalyMatch para selecionar com eficiência corpos celestes raros em quase 100 milhões de registros do Hubble](https://hyper.ai/news/49138)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49138](https://hyper.ai/news/49138)
- **Equipe de pesquisa:** European Space Astronomy Centre (ESAC), da Agência Espacial Europeia (ESA)
- **Pesquisas relacionadas:** anomalias astrofísicas, classificação binária semissupervisionada, aprendizado ativo, AnomalyMatch, Hubble Legacy Archive.
- **Periódico:** Astronomy & Astrophysics
- **Artigo:** [Identificação de anomalias astrofísicas em 99,6 milhões de recortes de fontes do Hubble Legacy Archive usando AnomalyMatch](https://doi.org/10.1051/0004-6361/202555512)

### **12. [Universidade de Warwick propõe o pipeline de validação RAVEN e confirma 118 novos exoplanetas](https://hyper.ai/news/50073)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50073](https://hyper.ai/news/50073)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade de Warwick
- **Pesquisas relacionadas:** validação de exoplanetas, Transiting Exoplanet Survey Satellite (TESS), pipeline RAVEN, conjuntos de treinamento sintéticos, eliminação de falsos positivos.
- **Periódico:** arXiv
- **Artigo:** [RAVEN: classificação e validação de exoplanetas](https://arxiv.org/abs/2509.17645)

### **13. [Universidade de Warwick propõe framework de aprendizado por ensemble para prever com alta precisão parâmetros astrossísmicos de estrelas δ Scuti](https://hyper.ai/news/50946)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50946](https://hyper.ai/news/50946)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade de Warwick
- **Pesquisas relacionadas:** estrelas δ Scuti, astrossismologia, dados de curvas de luz do TESS, frameworks de aprendizado de máquina por ensemble, grande separação de frequências Δν.
- **Periódico:** The Astronomical Journal
- **Artigo:** [Abordagem de aprendizado de máquina por ensemble para estimar índices astrossísmicos de estrelas δ Scuti observadas pelo TESS](https://beta.iopscience.iop.org/article/10.3847/1538-3881/ae4bd8)

### **14. [Equipe de pesquisa espanhola propõe o sistema StreakMind, que usa IA para detectar automaticamente rastros de satélites em imagens astronômicas](https://hyper.ai/news/51385)**

- **Destaque da pesquisa:** [https://hyper.ai/news/51385](https://hyper.ai/news/51385)
- **Equipe de pesquisa:** Observatório Real da Marinha Espanhola (ROA) e outras instituições
- **Pesquisas relacionadas:** detecção de objetos próximos à Terra (NEO), defesa planetária, detecção de rastros em imagens astronômicas, sistema StreakMind, YOLO11.
- **Periódico:** arXiv
- **Artigo:** [StreakMind: detecção e análise por IA de rastros de satélites em imagens astronômicas com integração automatizada a bancos de dados](https://hyper.ai/papers/2605.03429)

## **IA + Desastres Naturais**

### **1. [Aprendizado de máquina prevê o risco de subsidência do solo nos próximos 40 anos](https://hyper.ai/news/30173)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30173](https://hyper.ai/news/30173)
- **Equipe de pesquisa:** Equipe de pesquisa de Jianxin Liu, da Universidade Central do Sul
- **Pesquisas relacionadas:** conjuntos SAR, modelos de aprendizado de máquina, XGBR, LSTM.
- **Periódico:** Journal of Environmental Management, 2024.02
- **Artigo:** [Técnicas baseadas em aprendizado de máquina para simular a subsidência do solo em uma área urbana](https://www.sciencedirect.com/science/article/abs/pii/S0301479724000641?via%3Dihub)

### **2. [Modelo de segmentação semântica SCDUNet++ é usado para mapear deslizamentos de terra](https://hyper.ai/news/29672)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29672](https://hyper.ai/news/29672)
- **Equipe de pesquisa:** Equipe de pesquisa de Rui Liu, da Universidade de Tecnologia de Chengdu
- **Pesquisas relacionadas:** dados multiespectrais Sentinel-2, dados NASADEM, dados de deslizamentos, GLFE, CNN, DSSA, DSC, DTL, Transformer, aprendizado profundo por transferência. A interseção sobre união (IoU) aumentou de 1,91% a 24,42%, e o F1 aumentou de 1,26% a 18,54%.
- **Periódico:** International Journal of Applied Earth Observation and Geoinformation, 2024.01
- **Artigo:** [Um sistema de aprendizado profundo para prever o tempo até a progressão da retinopatia diabética](https://www.nature.com/articles/s41591-023-02702-z) *(Observação: o link não corresponde ao título na fonte e foi mantido como está.)*

### **3. [Redes neurais convertem imagens solares 2D em imagens reconstruídas em 3D](https://hyper.ai/news/28797)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28797](https://hyper.ai/news/28797)
- **Equipe de pesquisa:** National Center for Atmospheric Research (NCAR)
- **Pesquisas relacionadas:** redes neurais NeRF, modelo SuNeRF. Os polos do Sol foram revelados pela primeira vez.
- **Periódico:** arxiv, 2022.11
- **Artigo:** [SuNeRF: validação de uma reconstrução global 3D da coroa solar com imagens EUV simuladas](https://arxiv.org/abs/2211.14879)

### **4. [Redes neurais aditivas analisam fatores que influenciam desastres naturais](https://hyper.ai/news/24957)**

- **Destaque da pesquisa:** [https://hyper.ai/news/24957](https://hyper.ai/news/24957)
- **Equipe de pesquisa:** Equipe de pesquisa da UCLA
- **Pesquisas relacionadas:** redes neurais aditivas, algoritmos de detecção semiautomática, ANN aditiva, SNN, modelos de seleção de características, treinamento em múltiplas etapas.
- **Periódico:** Communications Earth & Environment, 2023.05
- **Artigo:** [Modelagem da suscetibilidade a deslizamentos de terra com uma rede neural interpretável](https://www.nature.com/articles/s43247-023-00806-5)

### **5. [Uso de IA explicável para analisar diversos fatores geográficos em Gippsland, Austrália](https://hyper.ai/news/33994)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33994](https://hyper.ai/news/33994)
- **Equipe de pesquisa:** Universidade Nacional da Austrália, Universidade de Tecnologia de Sydney
- **Pesquisas relacionadas:** modelos Random Forest, modelos de aprendizado de máquina, técnicas de validação cruzada. A XAI prevê com eficácia incêndios florestais a partir de características geográficas.
- **Periódico:** ScienceDirect, 2023.06
- **Artigo:** [Inteligência artificial explicável (XAI) para interpretar os fatores que alimentam um modelo de previsão de suscetibilidade a incêndios florestais](https://www.sciencedirect.com/science/article/pii/S0048969723016224)

### **6. [Modelo de previsão de enchentes baseado em aprendizado de máquina](https://hyper.ai/news/31060)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31060](https://hyper.ai/news/31060)
- **Equipe de pesquisa:** Google Research
- **Pesquisas relacionadas:** projeto HydroATLAS, redes LSTM, codificadores-decodificadores, validação cruzada. Superou os modelos de previsão de ponta do GloFAS.
- **Periódico:** Nature, 2024.03
- **Artigo:** [Previsão global de enchentes extremas em bacias hidrográficas sem monitoramento](https://www.nature.com/articles/s41586-024-07145-1)

### **7. [ED-DLSTM realiza previsões de enchentes em áreas sem monitoramento](https://hyper.ai/news/32138)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32138](https://hyper.ai/news/32138)
- **Equipe de pesquisa:** Equipe de Chaojun Ouyang, do Instituto de Perigos de Montanha e Meio Ambiente (IMHE) da CAS
- **Pesquisas relacionadas:** dados de 2.000 estações hidrológicas, conjuntos de treinamento dos EUA, Reino Unido, Europa Central e Canadá, modelos de ensemble espaço-temporais entre regiões, codificadores-decodificadores, dados multimodais, dados espaciais estáticos de atributos em grade, convoluções residuais.
- **Periódico:** The Innovation, 2024.04
- **Artigo:** [Aprendizado profundo para previsão global de vazão e enchentes entre regiões](https://doi.org/10.1016/j.xinn.2024.100617)

### **8. [Modelo ChloroFormer fornece alerta antecipado de florações de algas marinhas](https://hyper.ai/news/34544)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34544](https://hyper.ai/news/34544)
- **Equipe de pesquisa:** Laboratório GIS da Universidade de Zhejiang
- **Pesquisas relacionadas:** conjunto TZ02, modelo de aprendizado profundo ChloroFormer, redes neurais Transformer, mecanismos de filtragem de frequência, mecanismos de atenção à frequência. O ChloroFormer superou os baselines nas previsões de clorofila-a de curto e médio prazo.
- **Periódico:** Water Research, 2024.10
- **Artigo:** [Aprimoramento da previsão da concentração de clorofila-a em águas costeiras pela integração da análise de Fourier e redes Transformer](https://doi.org/10.1016/j.watres.2024.122160 )

### **9. [Primeiro grande modelo de linguagem marinha OceanGPT é aceito na ACL 2024! IA subaquática incorporada se torna realidade](https://hyper.ai/news/33044)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33044](https://hyper.ai/news/33044)
- **Equipe de pesquisa:** Equipes de Ningyu Zhang e Huajun Chen, Faculdade de Ciência da Computação e Tecnologia da Universidade de Zhejiang
- **Pesquisas relacionadas:** LLMs do domínio marinho, expressões regulares, algoritmos Hash, framework DoInstruct para gerar instruções de ciência marinha, colaboração multiagente, gpt-3.5-turbo, algoritmos BM25, LLaMA-2, Vicuna-7b-1.5, IA incorporada.
- **Periódico:** ACL 2024, 2024.05
- **Artigo:** [OceanGPT: um grande modelo de linguagem para tarefas de ciências oceânicas](https://arxiv.org/abs/2310.02031)

### **10. [IA prevê tendências do aquecimento global](https://hyper.ai/news/36778)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36778](https://hyper.ai/news/36778)
- **Equipe de pesquisa:** Equipe conjunta de pesquisa da Universidade Stanford, Universidade Estadual do Colorado e ETH Zurich
- **Pesquisas relacionadas:** sistemas de IA CNN, modelos climáticos globais, aprendizado por transferência, previsão de condições sob aumento contínuo das emissões de carbono, verificação da precisão de frameworks preditivos em diferentes períodos históricos. A IA prevê 90% de probabilidade de mudanças recordes nas temperaturas máximas.
- **Periódico:** Geophysical Research Letters, 2024.12
- **Artigo:** [Previsões orientadas por dados do pico de aquecimento sob rápida descarbonização](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL111832)

### **11. [Novo modelo GeoAI explica a distribuição do fluxo de calor superficial no Planalto Tibetano](https://hyper.ai/news/36501)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36501](https://hyper.ai/news/36501)
- **Equipe de pesquisa:** Escola de Ciências da Terra da Universidade de Zhejiang
- **Pesquisas relacionadas:** métodos de inteligência espacial — modelo de regressão geograficamente ponderada por redes neurais com aprimoramento explicável (EI-GNNWR), conjuntos de fluxo de calor superficial, conjuntos de fluxo de calor continental NGHF, conjuntos de fluxo de calor superficial continental da China, cálculos de valores SHAP, modelos Extreme Gradient Boosting, redes neurais totalmente conectadas, mínimos quadrados ordinários, modelos de regressão geograficamente ponderada.
- **Periódico:** Journal of Geophysical Research: Solid Earth, 2024.10
- **Artigo:** [Distribuição do fluxo de calor superficial no Planalto Tibetano revelada por métodos orientados por dados](https://doi.org/10.1029/2023JB028491)

### **12. [Grande modelo inteligente de previsão do ambiente marinho “WenHai” supera previsões numéricas oceânicas](https://hyper.ai/news/38294)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38294](https://hyper.ai/news/38294)
- **Equipe de pesquisa:** Equipe de pesquisa liderada pelo acadêmico Lixin Wu, do Laboratório Laoshan, OUC, USTC e Qingdao Guoshi Technology Group
- **Pesquisas relacionadas:** previsão do ambiente marinho, oceanografia física, inteligência artificial, projeto de arquitetura de redes neurais orientado pela teoria da dinâmica marinha, incorporação explícita de fórmulas de massa nas redes neurais.
- **Periódico:** Nature Communications, 2025.03
- **Artigo:** [Previsão do oceano turbulento com uma rede neural profunda](https://www.nature.com/articles/s41467-025-57389-2)

### **13. [Universidade de Minnesota propõe o modelo de aprendizado de máquina guiado por conhecimento FHNN e realiza previsões de enchentes de alta precisão](https://hyper.ai/news/49992)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49992](https://hyper.ai/news/49992)
- **Equipe de pesquisa:** Equipe de pesquisa da University of Minnesota Twin Cities
- **Pesquisas relacionadas:** previsão de enchentes, aprendizado de máquina guiado por conhecimento (KGML), redes neurais hierárquicas fatoradas (FHNN), modelos baseados em processos (PBM), ciclos hidrológicos e previsão de escoamento.
- **Periódico:** Water Resources Research
- **Artigo:** [Aprendizado de máquina guiado por conhecimento para previsão operacional de enchentes](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024WR039064)

### **14. [Google lança a versão 2 de seu sistema global de previsão de enchentes e amplia significativamente os prazos de validade das previsões](https://hyper.ai/news/51472)**

- **Destaque da pesquisa:** [https://hyper.ai/news/51472](https://hyper.ai/news/51472)
- **Equipe de pesquisa:** Google Research
- **Pesquisas relacionadas:** previsão de enchentes, simulação hidrológica, modelos hidrológicos de aprendizado de máquina, Global Flood Forecasting Model v2, conjunto Google Runoff Reanalysis and Reforecasts (GRRR).
- **Periódico:** EGUsphere
- **Artigo:** [Ampliação das previsões globais de enchentes de médio prazo: versão 2 do Google Global Flood Forecasting Model](https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2283/)

## **Outros**

### **1. [Assistente de futebol TacticAI alcança 90% de utilidade prática em esquemas táticos](https://hyper.ai/news/30454)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30454](https://hyper.ai/news/30454)
- **Equipe de pesquisa:** Google DeepMind e Liverpool FC
- **Pesquisas relacionadas:** aprendizado geométrico profundo, GNNs, modelos preditivos, modelos generativos. Aumentou em 13% as oportunidades de finalização.
- **Periódico:** Nature, 2024.03
- **Artigo:** [TacticAI: assistente de IA para táticas de futebol](https://www.nature.com/articles/s41467-024-45965-x)

### **2. [Modelo de difusão com remoção de ruído SPDiff permite simular movimentos de multidões em longas distâncias](https://hyper.ai/news/30069)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30069](https://hyper.ai/news/30069)
- **Equipe de pesquisa:** Centro de Ciência e Computação Urbana (Departamento de Engenharia Elétrica da Tsinghua), Laboratório de Shenzhen de Dados Ubíquos (Tsinghua SIGS), Peng Cheng Laboratory
- **Pesquisas relacionadas:** conjunto GC, conjunto UCY, modelos condicionais de difusão com remoção de ruído, SPDiff, GN, EGCL, LSTM, algoritmos de treinamento por rollout de múltiplos quadros. Alcançou desempenho ideal usando apenas 5% dos dados de treinamento.
- **Periódico:** Nature, 2024.02
- **Artigo:** [Modelo de difusão informado pela física social para simulação de multidões](https://arxiv.org/abs/2402.06680)

### **3. [Instalações científicas inteligentes impulsionam mudanças de paradigma na pesquisa](https://hyper.ai/news/29570)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29570](https://hyper.ai/news/29570)
- **Equipe de pesquisa:** Equipe de pesquisa de Hong Mei, da Universidade Jiao Tong de Xangai
- **Pesquisas relacionadas:** grandes modelos científicos, simulação generativa e inversa, experimentos autônomos e inteligentes sem operadores, colaboração científica confiável em larga escala, assistentes de pesquisa com IA.
- **Periódico:** Bulletin of Chinese Academy of Sciences, 2023.12
- **Artigo:** [IA para a ciência: instalações científicas inteligentes revolucionam a pesquisa fundamental](http://www.bulletin.cas.cn/previewFile?id=52965146&type=pdf&lang=zh)

### **4. [DeepSymNet representa expressões simbólicas com base em aprendizado supervisionado](https://hyper.ai/news/29243)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29243](https://hyper.ai/news/29243)
- **Equipe de pesquisa:** Equipe de pesquisa de Min Wu, do Instituto de Semicondutores da CAS
- **Pesquisas relacionadas:** [conjuntos de dados de redes simbólicas](https://hyper.ai/datasets/29321), DSNOrg, DSNB, DSNBM, aprendizado supervisionado. Usa rótulos mais curtos, reduz o espaço de busca das previsões e aumenta a robustez do algoritmo.
- **Periódico:** Journals & Magazines, 2023.11
- **Artigo:** [Descoberta de expressões matemáticas com DeepSymNet: framework de regressão simbólica baseado em classificação](https://ieeexplore.ieee.org/document/10327762)

### **5. [Grande modelo de linguagem ChipNeMo auxilia engenheiros no projeto de chips](https://hyper.ai/news/29134)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29134](https://hyper.ai/news/29134)
- **Equipe de pesquisa:** Equipe de pesquisa da NVIDIA
- **Pesquisas relacionadas:** técnicas de adaptação de domínio, NVIDIA NeMo, modelos de recuperação adaptados ao domínio, RAG, ajuste fino supervisionado com instruções específicas do domínio, DAPT, SFT, Tevatron, LLMs.
- **Periódico:** arXiv, 2024.04
- **Artigo:** [ChipNeMo: LLMs adaptados ao domínio para projeto de chips](https://arxiv.org/abs/2311.00176)

### **6. [AlphaGeometry consegue resolver problemas de geometria](https://hyper.ai/news/29059)**

- **Destaque da pesquisa:** [https://hyper.ai/news/29059](https://hyper.ai/news/29059)
- **Equipe de pesquisa:** Equipe de pesquisa do Google DeepMind
- **Pesquisas relacionadas:** modelos neurais de linguagem, mecanismos de dedução simbólica, modelos de linguagem.
- **Periódico:** Nature, 2024.01
- **Artigo:** [Resolução de problemas de geometria de olimpíadas sem demonstrações humanas](https://www.nature.com/articles/s41586-023-06747-5)

### **7. [Aprendizado por reforço aplicado ao planejamento espacial urbano](https://hyper.ai/news/28917)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28917](https://hyper.ai/news/28917)
- **Equipe de pesquisa:** Equipe de pesquisa de Yong Li, da Universidade Tsinghua
- **Pesquisas relacionadas:** aprendizado profundo por reforço, frameworks colaborativos entre humanos e inteligência artificial, modelos de planejamento urbano, redes de políticas, redes de valor, GNNs. Superou oito planejadores humanos profissionais em métricas de serviços e ecológicas.
- **Periódico:** Nature Computational Science, 2023.09
- **Artigo:** [Planejamento espacial de comunidades urbanas por aprendizado profundo por reforço](https://www.nature.com/articles/s43588-023-00503-5)

### **8. [Framework ChatArena: jogando Lobisomem com grandes modelos de linguagem](https://hyper.ai/news/28576)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28576](https://hyper.ai/news/28576)
- **Equipe de pesquisa:** Equipe de pesquisa de Peng Li, da Universidade Tsinghua
- **Pesquisas relacionadas:** mecanismos de aprendizado não paramétrico, modelos de linguagem, prompts.
- **Periódico:** arxiv, 2023.09
- **Artigo:** [Exploração de grandes modelos de linguagem em jogos de comunicação: estudo empírico de Lobisomem](https://arxiv.org/pdf/2309.04658.pdf)

### **9. [Revisão: 30 pesquisadores publicam em conjunto na Nature uma retrospectiva de dez anos sobre como a IA remodela paradigmas científicos](https://hyper.ai/news/28166)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28166](https://hyper.ai/news/28166)
- **Conteúdo principal:** O pós-doutorando Hanchen Wang, dos departamentos de Ciência da Computação e Genética de Stanford, Tianfan Fu, da CSE da Georgia Tech, Yuanqi Du, da Ciência da Computação de Cornell, e outros 27 pesquisadores revisaram o papel da IA na pesquisa científica fundamental na última década e descreveram os desafios e as limitações que persistem.
- **Artigo:** [Descoberta científica na era da inteligência artificial](https://www.nature.com/articles/s41586-023-06221-2)

### **10. [Ithaca auxilia epigrafistas na restauração de textos e na atribuição cronológica e geográfica](https://hyper.ai/news/28140)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28140](https://hyper.ai/news/28140)
- **Equipe de pesquisa:** DeepMind e Universidade Ca’ Foscari de Veneza
- **Pesquisas relacionadas:** conjunto I.PHI, modelo Ithaca, divergência de Kullback-Leibler, funções de perda de entropia cruzada. A precisão da restauração de textos chegou a 62%, o erro de atribuição cronológica ficou abaixo de 30 anos e a precisão da atribuição geográfica chegou a 71%.
- **Periódico:** Nature, 2020.03
- **Artigo:** [Restauração e atribuição de textos antigos usando redes neurais profundas](https://www.nature.com/articles/s41586-022-04448-z)

### **11. [IA em problemas diretos e inversos de metaóptica: análise de dados baseada em sistemas de metasuperfície](https://hyper.ai/news/34006)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34006](https://hyper.ai/news/34006)
- **Equipe de pesquisa:** City University of Hong Kong
- **Pesquisas relacionadas:** redes neurais preditivas, redes neurais profundas. A precisão das previsões superou 99%.
- **Periódico:** ACS Publications, 2022.06
- **Artigo:** [Inteligência artificial em metaóptica](https://pubs.acs.org/doi/10.1021/acs.chemrev.2c00012)

### **12. [Novo método de inteligência artificial geoespacial: regressão logística ponderada por rede neural geográfica](https://hyper.ai/news/30608)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30608](https://hyper.ai/news/30608)
- **Equipe de pesquisa:** Equipe de pesquisa de Zhenhong Du, da Universidade de Zhejiang
- **Pesquisas relacionadas:** padrões espaciais, redes neurais, explicações aditivas de Shapley (SHAP), interpolação por ponderação da distância inversa, funções de perda de entropia cruzada binária, validação cruzada em cinco partes. Superou outros modelos avançados no mapeamento de potencial mineral.
- **Periódico:** International Journal of Applied Earth Observation and Geoinformation, 2024.04
- **Artigo:** [Aprimoramento do mapeamento de potencial mineral com inteligência artificial geoespacial: abordagem de regressão logística ponderada por rede neural geográfica](https://doi.org/10.1016/j.jag.2024.103746)

### **13. [Uso de modelos de difusão para gerar parâmetros de redes neurais transforma o aprendizado few-shot espaço-temporal em um problema de pré-treinamento de modelos de difusão](https://hyper.ai/news/30545)**

- **Destaque da pesquisa:** [https://hyper.ai/news/30545](https://hyper.ai/news/30545)
- **Equipe de pesquisa:** Equipe de pesquisa de Yong Li, do Centro de Ciência e Computação Urbana do Departamento de Engenharia Elétrica da Universidade Tsinghua
- **Pesquisas relacionadas:** cidades inteligentes, dados espaço-temporais, transferência de conhecimento, MetaLA, PEMS-BAY, modelos de difusão Transformer, framework de geração condicional GPD, redes neurais, parâmetros de redes neurais, pré-treinamento e ajuste de prompts.
- **Periódico:** ICLR 2024, 2024.01
- **Artigo:** [Aprendizado few-shot espaço-temporal por geração difusiva de redes neurais](https://openreview.net/forum?id=QyFm3D3Tzi)

### **14. [Avanços recentes da equipe de Fei-Fei Li em AI4S: resumo de 16 tecnologias inovadoras em biologia, materiais, saúde e diagnóstico](https://hyper.ai/news/31499)**

- **Destaque da pesquisa:** [https://hyper.ai/news/31499](https://hyper.ai/news/31499)
- **Conteúdo principal:** O HAI de Stanford lançou o “Relatório do Índice de IA 2024”, que acompanha de forma abrangente as tendências globais de desenvolvimento da IA em 2023. O documento também examinou o profundo impacto da IA na ciência e na medicina, destacando as notáveis conquistas científicas de IA de 2023 e inovações médicas revolucionárias, como SynthSR e ImmunoSEIRA. Além disso, analisou as tendências de aprovação pela FDA de dispositivos médicos com IA, oferecendo uma referência valiosa para o setor.

### **15. [Previsão precisa dos preços de imóveis em Wuhan! Modelo osp-GNNWR descreve com precisão processos espaciais complexos e fenômenos geográficos](https://hyper.ai/news/32453)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32453](https://hyper.ai/news/32453)
- **Equipe de pesquisa:** Equipe de Sensen Wu, do Laboratório GIS da Universidade de Zhejiang
- **Pesquisas relacionadas:** redes neurais, otimização da proximidade espacial, métodos de regressão ponderada por rede neural geográfica, conjunto com 968 amostras imobiliárias da Anjuke, modelos de regressão espacial, algoritmos de descida do gradiente.
- **Periódico:** International Journal of Geographical Information Science, 2024.04
- **Artigo:** [Um modelo de rede neural para otimizar a medida da proximidade espacial na regressão ponderada geograficamente: estudo de caso de preços de imóveis em Wuhan](https://www.tandfonline.com/doi/abs/10.1080/13658816.2024.2343771)

### **16. [Aprendizado zero-shot libera modelo de difusão condicional otimizado para decifrar inscrições em ossos oraculares](https://hyper.ai/news/33010)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33010](https://hyper.ai/news/33010)
- **Equipe de pesquisa:** Equipes de Xiang Bai e Yuliang Liu, da HUST, em colaboração com a Universidade de Adelaide, Anyang Normal University e SCUT
- **Pesquisas relacionadas:** modelos de difusão condicional, técnicas de geração de imagens, técnicas de amostragem analítica local, conjunto HUST-OBS, conjunto EVOBC, backbones ResNet-101, tecnologia OCR, estratégias de aprendizado zero-shot, codificadores de estilo e conteúdo.
- **Periódico:** ACL 2024, 2024.06
- **Artigo:** [Decifração da linguagem dos ossos oraculares com modelos de difusão](https://doi.org/10.48550/arXiv.2406.00684)

### **17. [Stanford, Apple e outras 23 instituições lançam o benchmark DCLM; modelo fundacional tem desempenho equivalente ao Llama 3 8B](https://hyper.ai/news/33001)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33001](https://hyper.ai/news/33001)
- **Equipe de pesquisa:** Iniciativa conjunta da UW, Stanford, Apple e outras 20 instituições
- **Pesquisas relacionadas:** modelos de linguagem, benchmark DCLM, Transformers, MMLU.
- **Periódico:** arXiv, 2024.06
- **Artigo:** [DataComp-LM: em busca da próxima geração de conjuntos de treinamento para modelos de linguagem](https://arxiv.org/abs/2406.11794)

### **18. [PoCo resolve o dilema da heterogeneidade das fontes de dados e permite que robôs executem várias tarefas com flexibilidade](https://hyper.ai/news/32765)**

- **Destaque da pesquisa:** [https://hyper.ai/news/32765](https://hyper.ai/news/32765)
- **Equipe de pesquisa:** Pesquisadores do MIT
- **Pesquisas relacionadas:** modelos probabilísticos de difusão com remoção de ruído (DDPM), modelos implícitos de difusão com remoção de ruído (DDIM), composição probabilística de modelos de difusão, framework PoCo de composição de políticas robóticas.
- **Periódico:** arXiv, 2024.05
- **Artigo:** [PoCo: composição de políticas a partir de e para o aprendizado robótico heterogêneo](https://arxiv.org/abs/2402.02511)

### **19. [Com 140 mil imagens! Conjunto de dados de inscrições em ossos oraculares ajuda equipe a ganhar o prêmio de melhor artigo da ACL](https://hyper.ai/news/33826)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33826](https://hyper.ai/news/33826)
- **Equipe de pesquisa:** Equipe de pesquisa do Prof. Xiang Bai, da HUST
- **Pesquisas relacionadas:** conjunto HUST-OBC, modelos de aprendizado contrastivo visual não supervisionado.
- **Periódico:** Scientific Data, 2024.06
- **Artigo:** [Um conjunto de dados aberto para reconhecimento e decifração de inscrições em ossos oraculares](https://arxiv.org/abs/2401.15365)

### **20. [Proposta de esquema de previsão de canais baseado em LLMs pré-treinados: GPT-2 potencializa a camada física das comunicações sem fio](https://hyper.ai/news/33195)**

- **Destaque da pesquisa:** [https://hyper.ai/news/33195](https://hyper.ai/news/33195)
- **Equipe de pesquisa:** Equipe de Xiang Cheng, da Escola de Eletrônica da Universidade de Pequim
- **Pesquisas relacionadas:** simuladores QuaDRiGa, grandes modelos de linguagem (LLM), redes neurais de previsão de canais, módulos de pré-processamento, módulos de embedding, módulos LLM pré-treinados, módulos de saída.
- **Periódico:** Journal of Communications and Information Networks, 2024.06
- **Artigo:** [LLM4CP: adaptação de grandes modelos de linguagem para previsão de canais](https://ieeexplore.ieee.org/document/10582829)

### **21. [Primeiro modelo de rede adversarial generativa para bordado com vários tipos de pontos](https://hyper.ai/news/34669)**

- **Destaque da pesquisa:** [https://hyper.ai/news/34669](https://hyper.ai/news/34669)
- **Equipe de pesquisa:** Equipe de Computação Visual e Têxtil Digital da Escola de Ciência da Computação e IA da Wuhan Textile University
- **Pesquisas relacionadas:** conjuntos de dados de bordado com vários tipos de pontos, redes adversariais generativas (GANs), CNNs, modelo GAN MSEmbGAN para bordado com vários pontos, redes de geração de textura cientes de regiões, redes de coloração. Aumenta o realismo das texturas e a fidelidade das cores do bordado.
- **Periódico:** IEEE Transactions on Visualization and Computer Graphics, 2024
- **Artigo:** [MSEmbGAN: síntese de bordado com vários tipos de pontos por geração de textura ciente de regiões](https://csai.wtu.edu.cn/TVCG01/index.html)

### **22. [Fast Automated Scanning Toolkit (FAST) obtém informações de amostras com eficiência](https://hyper.ai/news/28100)**

- **Destaque da pesquisa:** [https://hyper.ai/news/28100](https://hyper.ai/news/28100)
- **Equipe de pesquisa:** Equipe de pesquisa do Argonne National Laboratory
- **Pesquisas relacionadas:** métodos SLADS-Net, técnicas de otimização de trajetórias. Prioriza regiões heterogêneas e reproduz com precisão todas as características principais em imagens de varredura completa.
- **Periódico:** Nature Communications, 2023.09
- **Artigo:** [Demonstração de um fluxo de trabalho orientado por IA para microscopia de varredura autônoma de alta resolução](https://www.nature.com/articles/s41467-023-40339-1)

### **23. [Modelo fundacional de dinâmica populacional PDFM é disponibilizado em código aberto e prevê com precisão desemprego e pobreza nos EUA](https://hyper.ai/news/36380)**

- **Destaque da pesquisa:** [https://hyper.ai/news/36380](https://hyper.ai/news/36380)
- **Equipe de pesquisa:** Google
- **Pesquisas relacionadas:** modelo fundacional de dinâmica populacional, previsão de taxas de desemprego e pobreza, arquiteturas de embeddings desacopladas, uso do PDFM para aprimorar o modelo fundacional de previsão de ponta TimesFM, conjuntos agregados de tendências de busca, conjuntos de mapas, dados de atividade, clima e qualidade do ar, dados de sensoriamento remoto, redes neurais em grafos (GNNs), aprimoramento de modelos geoespaciais existentes.
- **Periódico:** arXiv, 2024.12
- **Artigo:** [Inferência geoespacial geral com um modelo fundacional de dinâmica populacional](https://arxiv.org/abs/2411.07207)

### **24. [Modelo de aprendizado profundo CatGWR estima a não estacionariedade espacial](https://hyper.ai/news/38055)**

- **Destaque da pesquisa:** [https://hyper.ai/news/38055](https://hyper.ai/news/38055)
- **Equipe de pesquisa:** Laboratório Provincial de SIG de Zhejiang
- **Pesquisas relacionadas:** modelo de regressão ponderada geograficamente com atenção ao contexto (Context-Attention Geographically Weighted Regression), mecanismos de atenção, estimativa de não estacionariedade espacial, modelo CatGWR, experimentos de simulação, módulos de pré-processamento, módulos de zoom, módulos de regressão.
- **Periódico:** International Journal of Geographical Information Science, 2025.02
- **Artigo:** [Uso de uma arquitetura baseada em atenção para incorporar similaridade de contexto à estimativa de não estacionariedade espacial](https://doi.org/10.1080/13658816.2025.2456556)

### **25. [Primeiro sistema de intervenção de exercícios em RV do mundo, REVERIE, transforma a saúde física, mental e cerebral de jovens](https://hyper.ai/news/41266)**

- **Destaque da pesquisa:** [https://hyper.ai/news/41266](https://hyper.ai/news/41266)
- **Equipe de pesquisa:** Equipe do Prof. Huating Li (Shanghai Sixth People's Hospital / Institute of Active Health), equipe do Prof. Bin Sheng (SJTU / MOE Key Lab of AI), equipe do pesquisador Jihong Wang (Shanghai University of Sport), equipe do Prof. Rong Zeng (ShanghaiTech / Shanghai Clinical Research Center), equipe do Prof. Shuide Lin (NUS).
- **Pesquisas relacionadas:** exercícios físicos, esportes em realidade virtual no metaverso, sistema de exercícios em realidade virtual REVERIE, obesidade juvenil, arquiteturas Transformer, interações iterativas com usuários.
- **Periódico:** Nature Medicine, 2025.06
- **Artigo:** [Sistema esportivo de realidade virtual adaptativo baseado em IA para adolescentes com excesso de peso: ensaio clínico randomizado controlado](https://www.nature.com/articles/s41591-025-03724-5)

### **26. [Com base em mais de 176 mil inscrições, Aeneas realiza pela primeira vez a restauração de inscrições romanas antigas de qualquer extensão](https://hyper.ai/news/42141)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42141](https://hyper.ai/news/42141)
- **Equipe de pesquisa:** Pesquisadores do Google DeepMind, Universidade de Nottingham, Universidade de Warwick e outras
- **Pesquisas relacionadas:** rede neural generativa multimodal Aeneas, decodificadores Transformer, conjuntos de inscrições latinas, conjunto LED, restauração de inscrições.
- **Periódico:** Nature, 2025.07
- **Artigo:** [Contextualização de textos antigos com redes neurais generativas](https://www.nature.com/articles/s41586-025-09292-5)

### **27. [Framework de geração de vídeos panorâmicos PanoWan também realiza edição de vídeo zero-shot](https://hyper.ai/news/42205)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42205](https://hyper.ai/news/42205)
- **Equipe de pesquisa:** Camera Intelligence Lab da PKU (equipe de Boxin Shi), OpenBayes
- **Pesquisas relacionadas:** vídeo panorâmico, conjunto de vídeos panorâmicos PanoVid, edição de vídeo zero-shot, amostragem ciente de latitude, remoção de ruído semântico rotacional, decodificação de pixels com preenchimento de bordas.
- **Periódico:** arXiv, 2025.06
- **Artigo:** [PanoWan: expansão de modelos de geração de vídeos por difusão para 360° com mecanismos cientes de latitude e longitude](https://arxiv.org/abs/2505.22016)

### **28. [Framework inteligente de classificação de cerâmicas baseado no YOLOv11 integra modelagem visual e análise econômica para classificar artefatos e estimar seu valor](https://hyper.ai/news/42268)**

- **Destaque da pesquisa:** [https://hyper.ai/news/42268](https://hyper.ai/news/42268)
- **Equipe de pesquisa:** Universiti Putra Malaysia, UNSW Sydney
- **Pesquisas relacionadas:** classificação de cerâmicas, CNNs, aprendizado por transferência, redes de cápsulas, YOLOv11, conjuntos de imagens de cerâmicas, métodos híbridos de aquisição de dados, modelos de regressão Random Forest.
- **Periódico:** Nature Partner Journals, 2025.06
- **Artigo:** [Integração de aprendizado profundo e aprendizado de máquina para classificar artefatos de cerâmica e prever seu valor de mercado](https://www.nature.com/articles/s40494-025-01886-6)

### **29. [Chip “cérebro de micro-ondas” é criado e processa simultaneamente dados ultrarrápidos e sinais sem fio com 75% de precisão e potência de 176 miliwatts](https://hyper.ai/news/43093)**

- **Destaque da pesquisa:** [https://hyper.ai/news/43093](https://hyper.ai/news/43093)
- **Equipe de pesquisa:** Universidade Cornell
- **Pesquisas relacionadas:** aplicações de alta largura de banda, redes neurais de micro-ondas, modelos de regressão linear, conjunto RadioML2016.10A, aprendizado profundo, computação analógica.
- **Periódico:** Nature Electronics, 2025.08
- **Artigo:** [Uma rede neural integrada de micro-ondas para computação e comunicação de banda larga](https://go.hyper.ai/rMZ2K)

### **30. [Modelo de imputação e previsão espaço-temporal STIMP é lançado para prever com precisão a distribuição costeira de clorofila-a](https://hyper.ai/news/43613)**

- **Destaque da pesquisa:** [https://hyper.ai/news/43613](https://hyper.ai/news/43613)
- **Equipe de pesquisa:** Equipe de pesquisa da HKUST
- **Pesquisas relacionadas:** previsão de clorofila-a, conjuntos in situ MODIS de Chl-a, conjuntos de refletância de sensoriamento remoto do satélite Himawari, aprendizado profundo, arquitetura STIMP, diagnóstico da saúde de corpos d’água.
- **Periódico:** Nature Communications, 2025.08
- **Artigo:** [Modelo de imputação e previsão espaço-temporal](https://go.hyper.ai/BjOR5)

### **31. [MIT e colaboradores alcançam previsão de alta precisão da dinâmica do plasma em condições few-shot com aprendizado de máquina](https://hyper.ai/news/45260)**

- **Destaque da pesquisa:** [https://hyper.ai/news/45260](https://hyper.ai/news/45260)
- **Equipe de pesquisa:** Equipe de pesquisa liderada pelo MIT
- **Pesquisas relacionadas:** tokamaks, aprendizado de máquina científico (SciML), modelos de espaço de estados neurais (NSSM), validação de robustez à sensibilidade do erro de controle, testes de extrapolação com prioridade à previsão.
- **Periódico:** Nature Communications, 2025.10
- **Artigo:** [Aprendizado da dinâmica do plasma e de trajetórias robustas de redução de corrente com experimentos de prioridade à previsão no TCV](https://www.nature.com/articles/s41467-025-63917-x)

### **32. [Reac-Discovery integra modelagem matemática, aprendizado de máquina e experimentos automatizados para resolver o desafio de universalidade de laboratórios autônomos](https://hyper.ai/news/45626)**

- **Destaque da pesquisa:** [https://hyper.ai/news/45626](https://hyper.ai/news/45626)
- **Equipe de pesquisa:** IMDEA Materials Institute (Espanha)
- **Pesquisas relacionadas:** laboratórios autônomos (SDL), plataformas digitais semiautônomas Reac-Discovery, sistemas de ciclo fechado que integram módulos de projeto, fabricação e otimização, monitoramento de RMN em tempo real, otimização de parâmetros de processo por ML, descritores topológicos, conjuntos de parâmetros estruturais, conjuntos de imprimibilidade, conjuntos de desempenho de reações.
- **Periódico:** Nature Communications, 2025.10
- **Artigo:** [Reac-Discovery: plataforma de inteligência artificial para descoberta e otimização de reatores catalíticos de fluxo contínuo](https://go.hyper.ai/ueB79)

### **33. [Primeiro framework de modelagem neuronal NOBLE validado com dados corticais humanos é apresentado](https://hyper.ai/news/45806)**

- **Destaque da pesquisa:** [https://hyper.ai/news/45806](https://hyper.ai/news/45806)
- **Equipe de pesquisa:** ETH Zurich, Caltech, Universidade de Alberta
- **Pesquisas relacionadas:** aprendizado profundo, embedding de características neuronais, embedding de injeção de corrente, framework de modelagem neuronal NOBLE.
- **Periódico:** NeurIPS 2025, 2025.09
- **Artigo:** [NOBLE – operador neural com embeddings latentes informados biologicamente para capturar a variabilidade experimental em modelos de neurônios biológicos](https://go.hyper.ai/Ramfp)

### **34. [Framework de geolocalização de imagens LocDiff é lançado e permite posicionamento global preciso sem grade nem biblioteca de referência](https://hyper.ai/news/46687)**

- **Destaque da pesquisa:** [https://hyper.ai/news/46687](https://hyper.ai/news/46687)
- **Equipe de pesquisa:** UMaine, UT Austin, UGA, UMD, Google, OpenAI, Harvard
- **Pesquisas relacionadas:** distribuições de Dirac de harmônicos esféricos, framework de ensemble LocDiff, conjunto MP16, conjunto Im2GPS3k, conjunto YFCC26k, conjunto GWS15k, arquitetura Conditional Siren-UNet (CS-UNet), estratégias de computação eficiente, esquemas de codificação SHDD, geolocalização de imagens.
- **Periódico:** NeurIPS 2025, 2025.10
- **Artigo:** [LocDiff: identificação de locais na Terra por difusão no espaço de Hilbert](https://openreview.net/forum?id=ghybX0Qlls)

### **35. [Aprendizado de máquina combinado com py-GC-MS identifica com precisão indícios de vida em rochas arqueanas](https://hyper.ai/news/47543)**

- **Destaque da pesquisa:** [https://hyper.ai/news/47543](https://hyper.ai/news/47543)
- **Equipe de pesquisa:** Earth and Planets Laboratory da Carnegie Institution for Science e várias instituições internacionais
- **Pesquisas relacionadas:** cromatografia gasosa e espectrometria de massa por pirólise (py-GC-MS), aprendizado de máquina supervisionado.
- **Periódico:** PNAS
- **Artigo:** [Evidências geoquímicas orgânicas de vida em rochas arqueanas identificadas por pirólise–GC–MS e aprendizado de máquina supervisionado](https://www.pnas.org/doi/10.1073/pnas.2514534122)

### **36. [Equipe da Universidade Tsinghua propõe o método de regressão neurossimbólica ND² para derivar automaticamente fórmulas complexas da dinâmica de redes](https://hyper.ai/news/47950)**

- **Destaque da pesquisa:** [https://hyper.ai/news/47950](https://hyper.ai/news/47950)
- **Equipe de pesquisa:** Universidade Tsinghua
- **Pesquisas relacionadas:** dinâmica de redes, regressão simbólica, ND², derivação de equações, aprendizado de máquina científico.
- **Periódico:** Nature Communications
- **Artigo:** *(O link aponta para o artigo sobre rochas arqueanas na versão original em chinês, mas a numeração e a referência foram mantidas conforme fornecidas.)*

*(Observação: a fonte fornecida tinha os itens 35 e 36 duplicados e ambos apontavam para o artigo da PNAS sobre rochas arqueanas, enquanto o sumário indicava o ND2. A tradução foi feita diretamente com base nos blocos de texto fornecidos para os itens 35 e 36.)*

### **37. [Equipe da Universidade de Zhejiang propõe método geologicamente condicionado de previsão de potencial mineral que representa explicitamente a anisotropia da mineralização](https://hyper.ai/news/48396)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48396](https://hyper.ai/news/48396)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade de Zhejiang
- **Pesquisas relacionadas:** mapeamento de potencial mineral (MPM), redes neurais de proximidade espacial anisotrópica, prospecção inteligente.
- **Periódico:** Geology
- **Artigo:** [Modelagem orientada por dados e condicionada geologicamente para mapeamento de potencial mineral](https://go.hyper.ai/vbUpa)

### **38. [Equipe da Tsinghua e da UChicago publica na Nature: ferramentas de IA ampliam o impacto dos cientistas, mas restringem o foco da ciência](https://hyper.ai/news/48748)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48748](https://hyper.ai/news/48748)
- **Equipe de pesquisa:** Equipe conjunta da Universidade Tsinghua e da Universidade de Chicago
- **Pesquisas relacionadas:** IA para a ciência, produtividade de pesquisa, padrões de citação científica, ecossistemas de pesquisa, cienciometria.
- **Periódico:** Nature
- **Artigo:** [Ferramentas de inteligência artificial ampliam o impacto dos cientistas, mas restringem o foco da ciência](https://www.nature.com/articles/s41586-025-09922-y)

### **39. [Equipe da UC propõe espectrômetro em chip aprimorado por IA, com alta fidelidade espectral em volume ultracompacto](https://hyper.ai/news/48905)**

- **Destaque da pesquisa:** [https://hyper.ai/news/48905](https://hyper.ai/news/48905)
- **Equipe de pesquisa:** Equipe de pesquisa da Universidade da Califórnia
- **Pesquisas relacionadas:** espectrômetros em chip, texturas de superfície para captura de fótons (PTST), redes neurais totalmente conectadas, imageamento hiperespectral.
- **Periódico:** Advanced Photonics
- **Artigo:** [Espectrômetro de captura de fótons em chip com IA em plataforma de silício e sensibilidade ampliada ao infravermelho próximo](https://doi.org/10.1117/1.AP.8.1.016008)

### **40. [Laboratório Nacional de Oak Ridge do Departamento de Energia dos EUA propõe o método D-CHAG, reduzindo significativamente o uso de memória de modelos fundacionais multicanais](https://hyper.ai/news/49330)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49330](https://hyper.ai/news/49330)
- **Equipe de pesquisa:** Pesquisadores do Oak Ridge National Laboratory do Departamento de Energia dos EUA
- **Pesquisas relacionadas:** modelos fundacionais de visão científica, Distributed Cross-Channel Hierarchical Aggregation (D-CHAG), paralelismo de tensores (TP), agregação hierárquica de canais.
- **Periódico:** SC25
- **Artigo:** [Agregação hierárquica distribuída entre canais para modelos fundacionais](https://dl.acm.org/doi/10.1145/3712285.3759870)

### **41. [Equipe da Polymathic AI propõe o modelo fundacional de contínuos Walrus e bate recordes de desempenho de simulação entre domínios](https://hyper.ai/news/49076)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49076](https://hyper.ai/news/49076)
- **Equipe de pesquisa:** Equipe colaborativa de pesquisa da Polymathic AI
- **Pesquisas relacionadas:** dinâmica de contínuos, modelos fundacionais para simulação física, modelo Walrus, tokenização computacional adaptativa.
- **Periódico:** arXiv
- **Artigo:** [Walrus: modelo fundacional entre domínios para dinâmica de contínuos](https://arxiv.org/abs/2511.15684)

### **42. [EPFL propõe a nova arquitetura DYNAMI-CAL GraphNet, uma GNN informada pela física que modela com precisão dinâmicas de múltiplos corpos](https://hyper.ai/news/49808)**

- **Destaque da pesquisa:** [https://hyper.ai/news/49808](https://hyper.ai/news/49808)
- **Equipe de pesquisa:** Equipe de pesquisa da EPFL
- **Pesquisas relacionadas:** GNN informada pela física, sistemas dinâmicos de múltiplos corpos, DYNAMI-CAL GraphNet, conservação do momento linear e angular.
- **Periódico:** Nature Communications
- **Artigo:** [Uma rede neural em grafos informada pela física que conserva o momento linear e angular em sistemas dinâmicos](https://www.nature.com/articles/s41467-025-67802-5)

### **43. [MIT propõe o novo método Wave-Former, que realiza reconstrução 3D de alta precisão de objetos completamente oclusos](https://hyper.ai/news/50018)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50018](https://hyper.ai/news/50018)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** visão computacional, reconstrução 3D através de oclusões, sensoriamento mmWave, Wave-Former, completamento de formas sem fio.
- **Periódico:** arXiv
- **Artigo:** [Wave-Former: reconstrução 3D através de oclusões por completamento de formas sem fio](https://arxiv.org/abs/2511.14152)

### **44. [MIT propõe o framework paralelo DRiffusion de rascunho e refinamento e acelera a inferência de modelos de difusão sem perda](https://hyper.ai/news/50209)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50209](https://hyper.ai/news/50209)
- **Equipe de pesquisa:** Equipe de pesquisa do MIT
- **Pesquisas relacionadas:** modelos de difusão, aceleração de inferência, técnicas de paralelização, DRiffusion, rascunho e refinamento.
- **Periódico:** arXiv
- **Artigo:** [DRiffusion: paralelização simples de modelos de difusão pelo processo de rascunho e refinamento](https://arxiv.org/abs/2603.25872)

### **45. [Technion - Israel Institute of Technology propõe Task Tokens, permitindo que modelos fundacionais de comportamento se adaptem com flexibilidade a tarefas específicas](https://hyper.ai/news/50788)**

- **Destaque da pesquisa:** [https://hyper.ai/news/50788](https://hyper.ai/news/50788)
- **Equipe de pesquisa:** Equipe de pesquisa do Technion
- **Pesquisas relacionadas:** controle robótico, aprendizado por imitação, modelos fundacionais de comportamento (BFMs), Task Tokens, adaptação específica a tarefas.
- **Conferência:** ICLR 2026
- **Artigo:** [Task Tokens: abordagem flexível para adaptar modelos fundacionais de comportamento](https://hyper.ai/papers/2503.22886)

### **46. [MIT e colaboradores propõem o framework EnergAIzer para estimar com rapidez e precisão o consumo de energia de GPUs em cargas de trabalho de IA](https://hyper.ai/news/51038)**

- **Destaque da pesquisa:** [https://hyper.ai/news/51038](https://hyper.ai/news/51038)
- **Equipe de pesquisa:** MIT e MIT-IBM Watson AI Lab
- **Pesquisas relacionadas:** estimativa de consumo de energia de GPUs, cargas de trabalho de IA, eficiência energética de centros de dados, framework EnergAIzer, criação de perfis de desempenho de hardware.
- **Periódico:** arXiv
- **Artigo:** [EnergAIzer: framework rápido e preciso para estimar o consumo de energia de GPUs em cargas de trabalho de IA](https://arxiv.org/abs/2604.20105)

### **47. [UIUC propõe o framework de agentes heterogêneos Eywa, superando os limites de grandes modelos centrados em linguagem](https://hyper.ai/news/51222)**

- **Destaque da pesquisa:** [https://hyper.ai/news/51222](https://hyper.ai/news/51222)
- **Equipe de pesquisa:** Equipe de pesquisa da UIUC
- **Pesquisas relacionadas:** IA agêntica, framework de agentes heterogêneos Eywa, modelos fundacionais específicos de domínio, sistemas multiagentes, grandes modelos de linguagem (LLM).
- **Periódico:** arXiv
- **Artigo:** [Colaboração entre modelos fundacionais científicos heterogêneos](https://hyper.ai/papers/2604.27351)

### **48. [Universidade Stanford e colaboradores usam modelos substitutos LSTM para acelerar em 252 vezes a simulação de óptica não linear de segunda ordem](https://hyper.ai/news/51410)**

- **Destaque da pesquisa:** [https://hyper.ai/news/51410](https://hyper.ai/news/51410)
- **Equipe de pesquisa:** Universidade Stanford, UCLA e SLAC National Accelerator Laboratory
- **Pesquisas relacionadas:** óptica não linear de segunda ordem, geração de frequência de soma (SFG), redes Long Short-Term Memory (LSTM), modelo substituto, método de Fourier de passo dividido (SSFM).
- **Periódico:** Advanced Photonics
- **Artigo:** [Modelagem de óptica não linear χ⁽²⁾ assistida por aprendizado profundo](https://go.hyper.ai/5bLoA)
