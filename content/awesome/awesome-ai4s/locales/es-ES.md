# IA increíble para la ciencia
**EN** | [CN](README_CN.md)
- [**Prefacio**](#foreword)
- [**IA + Biofarmacia**](#ai-biopharmaceutical)
  - [**1. AdaDR supera a varios métodos de referencia en el reposicionamiento de fármacos**](#1-adadr-outperforms-multiple-benchmark-methods-in-drug-repositioning)
  - [**2. IMN4NPD acelera la desreplicación de grandes clústeres en redes moleculares y anota los bucles propios y los nodos emparejados**](#2-imn4npd-accelerates-the-dereplication-of-extensive-clusters-in-molecular-networks-providing-annotations-for-self-loops-and-paired-nodes)
  - [**3. Modelo generativo profundo MIDAS para la integración en mosaico de datos multi-ómicos de célula única**](#3-deep-generative-model-midas-for-mosaic-integration-of-single-cell-multi-omics-data)
  - [**4. ResGen: Un modelo de generación molecular 3D basado en cavidades proteicas**](#4-resgen-a-3d-molecular-generation-model-based-on-protein-pockets)
  - [**5. Modelos grandes + aprendizaje automático para predecir con alta precisión los parámetros cinéticos de las enzimas**](#5-large-models--machine-learning-for-high-precision-prediction-of-enzyme-kinetic-parameters)
  - [**6. El MIT utiliza el aprendizaje profundo para descubrir nuevos antibióticos**](#6-mit-uses-deep-learning-to-discover-novel-antibiotics)
  - [**7. Las redes neuronales descifran la selectividad del acoplamiento entre los receptores GPCR y las proteínas G**](#7-neural-networks-decipher-gpcr-g-protein-coupling-selectivity)
  - [**8. Macformer macrocicliza el medicamento acíclico fedratinib**](#8-macformer-macrocyclizes-the-acyclic-drug-fedratinib)
  - [**9. Red de regresión + CGMD predice propiedades de autoensamblaje de decenas de miles de millones de péptidos**](#9-regression-network--cgmd-predicts-self-assembly-properties-of-tens-of-billions-of-peptides)
  - [**10. El aprendizaje no supervisado predice 71 millones de mutaciones genéticas**](#10-unsupervised-learning-predicts-71-million-gene-mutations)
  - [**11. IA para el análisis de olores, desarrollada mediante redes neuronales de grafos (GNN)**](#11-odor-analysis-ai-developed-based-on-graph-neural-networks-gnn)
  - [**12. Las redes neuronales de grafos seleccionan ingredientes antienvejecimiento seguros y muy eficaces**](#12-graph-neural-networks-screen-for-safe-and-highly-effective-anti-aging-ingredients)
  - [**13. El aprendizaje automático analiza cuantitativamente la cantidad y la ubicación de la liberación de dopamina**](#13-machine-learning-quantitatively-analyzes-dopamine-release-amount-and-location)
  - [**14. El aprendizaje automático descubre tres fármacos antienvejecimiento**](#14-machine-learning-discovers-three-anti-aging-drugs)
  - [**15. El aprendizaje profundo detecta nuevos antibióticos contra Acinetobacter baumannii**](#15-deep-learning-screens-for-novel-antibiotics-inhibiting-acinetobacter-baumannii)
  - [**16. Los modelos de aprendizaje automático aplicados para predecir la impresión de biotintas**](#16-machine-learning-models-applied-to-predict-bioink-printability)
  - [**17. El aprendizaje automático diferencia las células madre pluripotentes**](#17-machine-learning-differentiates-pluripotent-stem-cells)
  - [**18. El modelo de aprendizaje automático predice la tasa de liberación de fármacos de inyectables de acción prolongada**](#18-machine-learning-model-predicts-drug-release-rate-of-long-acting-injectables)
  - [**19. El algoritmo de aprendizaje automático predice efectivamente las propiedades antimalarias de las plantas**](#19-machine-learning-algorithm-effectively-predicts-plant-antimalarial-properties)
  - [**20. El método de aprendizaje automático del conjunto predice la inmunogenicidad de fragmentos de proteínas virales**](#20-machine-learning-ensemble-method-predicts-immunogenicity-of-viral-protein-fragments)
  - [**21. IA generativa utilizada para desarrollar nuevos antibióticos**](#21-generative-ai-used-to-develop-novel-antibiotics)
  - [**22. Sistema automatizado de seguimiento de partículas únicas multidimensionales de alta velocidad basado en el aprendizaje profundo**](#22-deep-learning-based-automated-high-speed-multidimensional-single-particle-tracking-system)
  - [**23. ProEnsemble marco de aprendizaje automático: Optimización de las combinaciones de promotores del camino evolutivo**](#23-proensemble-machine-learning-framework-optimizing-evolutionary-pathway-promoter-combinations)
  - [**24. Red neuronal de gráficos conscientes del microambiente ProtLGN guía la evolución proteica dirigida**](#24-microenvironment-aware-graph-neural-network-protlgn-guides-directed-protein-evolution)
  - [**25. Modelo de aprendizaje profundo AlphaPPIMd: Exploración de conjuntos conformacionales de complejos proteico-proteico**](#25-deep-learning-model-alphappimd-exploring-conformational-ensembles-of-protein-protein-complexes)
  - [**26. El nuevo degradador de proteínas de supresor tumoral dp53m inhibe la proliferación de células cancerosas**](#26-novel-tumor-suppressor-protein-degrader-dp53m-inhibits-cancer-cell-proliferation)
  - [**27. CVPR Mejor documento estudiantil! El modelo multimodal BioCLIP logra el aprendizaje a cero disparos**](#27-cvpr-best-student-paper-multimodal-model-bioclip-achieves-zero-shot-learning)
  - [**28. 100 millones de parámetros! Modelo de base celular scFoundation modela 20.000 genes simultáneamente**](#28-100-million-parameters-cell-foundation-model-scfoundation-models-20000-genes-simultaneously)
  - [**29. Aceptado por ICML, el modelo de lenguaje proteico ESM-AA supera al SOTA tradicional**](#29-accepted-by-icml-protein-language-model-esm-aa-surpasses-traditional-sota)
  - [**30. El algoritmo SPACE, publicado en una revista de Cell, destaca por descubrir módulos tisulares mejor que herramientas similares**](#30-space-algorithm-published-in-cell-sub-journal-tissue-module-discovery-capabilities-lead-similar-tools)
  - [**31. Los nuevos avances basados en AlphaFold revelan una diversidad dinámica de proteínas**](#31-new-breakthroughs-based-on-alphafold-reveal-dynamic-protein-diversity)
  - [**32. P450Difusión: Método de diseño de nuevo para enzimas P450 desarrollado basado en modelos de difusión**](#32-p450diffusion-de-novo-design-method-for-p450-enzymes-developed-based-on-diffusion-models)
  - [**33. Redes neuronales de gráficos equivalentes utilizadas para la predicción del sitio de unión de proteínas objetivo, aumentando el rendimiento en un 20%**](#33-equivariant-graph-neural-networks-used-for-target-protein-binding-site-prediction-boosting-performance-by-20)
  - [**34. 20 puntos de datos experimentales crean un hito de la proteína de IA!**](#34-20-experimental-data-points-create-an-ai-protein-milestone-fsfp-effectively-optimizes-protein-pre-training-models)
  - [**35. El modelo de aprendizaje profundo transferible identifica múltiples tipos de modificaciones del ARN, reduciendo significativamente los costos computacionales**](#35-transferable-deep-learning-model-identifies-multiple-types-of-rna-modifications-significantly-reducing-computational-costs)
  - [**36. InstructProtein: Alinear el lenguaje proteico con el lenguaje humano mediante instrucciones de conocimiento**](#36-instructprotein-aligning-protein-language-with-human-language-using-knowledge-instructions)
  - [**37. El marco de generación de proteínas a texto ProtT3 permite la interpretación transmodal de datos de proteínas e información de texto**](#37-protein-to-text-generation-framework-prott3-enables-cross-modal-interpretation-of-protein-data-and-text-information)
  - [**38. El modelo CPDiffusion diseña proteínas funcionales totalmente automáticamente a un coste ultra bajo.**](#38-cpdiffusion-model-designs-functional-proteins-fully-automatically-at-an-ultra-low-cost)
  - [**39. Un nuevo método de detección de homólogos proteicos basado en modelos de lenguaje proteico y técnicas de extracción densa**](#39-a-novel-protein-homolog-detection-method-based-on-protein-language-models-and-dense-retrieval-techniques)
  - [**40. AlphaProteo diseña de manera eficiente los ligandos de proteínas objetivo, aumentando la afinidad en 300 veces**](#40-alphaproteo-efficiently-designs-target-protein-binders-increasing-affinity-by-300-times)
  - [**41. El modelo de lenguaje proteico novedoso DePLM supera a los modelos SOTA en predicción de efectos de mutación**](#41-novel-denoising-protein-language-model-deplm-outperforms-sota-models-in-mutation-effect-prediction)
  - [**42. Modelo generativo geométrico profundo DynamicBind permite predicción dinámica de acoplamiento de proteínas**](#42-geometric-deep-generative-model-dynamicbind-enables-dynamic-protein-docking-prediction)
  - [**43. El modelo de lenguaje de descubrimiento de drogas Y-Mol supera por completo a LLaMA2**](#43-drug-discovery-large-language-model-y-mol-completely-outperforms-llama2)
  - [**44. El modelo universal de plegabilidad molecular inversa UniIF complementa aún más AlphaFold 3**](#44-universal-molecular-inverse-folding-model-uniif-further-complements-alphafold-3)
  - [**45. El modelo de lenguaje proteico pre-entrenado ProSST integra más eficazmente la información sobre la estructura de las proteínas**](#45-pre-trained-protein-language-model-prosst-integrates-protein-structure-information-more-effectively)
  - [**46. Marco de unión de péptidos macrociclicos RFpeptidos ofrece nuevas posibilidades para las proteínas no drágicas**](#46-macrocyclic-peptide-binder-framework-rfpeptides-offers-new-possibilities-for-undruggable-proteins)
  - [**47. El modelo de base del genoma Evo permite la predicción y generación desde escalas moleculares hasta genómicas**](#47-genome-foundation-model-evo-enables-prediction-and-generation-from-molecular-to-genome-scales)
  - [**48. DigFrag segmenta con precisión los fragmentos moleculares utilizando IA y genera 44 moléculas de fármacos/pesticidas**](#48-digfrag-accurately-segments-molecular-fragments-using-ai-and-generates-44-drugpesticide-molecules)
  - [**49. Secuencia de proteínas modelo de lenguaje grande método de pre-entrenamiento PRIME**](#49-protein-sequence-large-language-model-pre-training-method-prime)
  - [**50. El método de aprendizaje profundo auto-supervisado revoluciona la reconstrucción 3D en la microscopía cryoelectrónica**](#50-self-supervised-deep-learning-method-revolutionizes-3d-reconstruction-in-cryo-electron-microscopy)
  - [**51. Método de generación de proteínas multimodal PLAID genera secuencias y estructuras de proteínas atómicas simultáneamente**](#51-multimodal-protein-generation-method-plaid-generates-sequences-and-all-atom-protein-structures-simultaneously)
  - [**52. Método de optimización molecular dirigido MOLRL basado en el aprendizaje de refuerzo latente**](#52-targeted-molecular-optimization-method-molrl-based-on-latent-reinforcement-learning)
  - [**53. Marco de predicción de la variación viral del conductor E2VD predice direcciones evolutivas para los virus de COVID-19/VIH/Influenza**](#53-viral-variation-driver-prediction-framework-e2vd-predicts-evolutionary-directions-for-covid-19hivinfluenza-viruses)
  - [**54. El modelo de lenguaje médico MedFound se aproxima a las capacidades de razonamiento de los médicos expertos**](#54-medical-language-model-medfound-approaches-expert-physician-reasoning-capabilities)
  - [**55. El modelo de difusión 4D AlphaFolding cubre una laguna en la predicción de la estructura dinámica de las proteínas**](#55-4d-diffusion-model-alphafolding-fills-the-gap-in-dynamic-protein-structure-prediction)
  - [**56. La tubería de PepPrCLIP para el diseño de proteínas cortas es prometedora para el desarrollo de nuevas terapias contra el cáncer**](#56-pepprclip-pipeline-for-designing-short-proteins-holds-promise-for-developing-new-cancer-therapies)
  - [**57. La técnica de alineación de Boltzmann mejora drásticamente la eficacia de predicción de la energía libre de unión a las proteínas**](#57-boltzmann-alignment-technique-drastically-improves-protein-binding-free-energy-prediction-efficacy)
  - [**58. Nuevo generador de proteína de espina dorsal basado en flujo a gran escala Proteina logra SOTA en el diseño de espina dorsal de proteína de novo**](#58-novel-large-scale-flow-based-protein-backbone-generator-proteina-achieves-sota-in-de-novo-protein-backbone-design)
  - [**59. El modelo UniGEM logra por primera vez una mejora sinérgica de dos tareas basadas en modelos de difusión**](#59-unigem-model-achieves-synergistic-enhancement-of-two-tasks-based-on-diffusion-models-for-the-first-time)
  - [**60. La difusión de RF se desarrolla aún más, logrando el diseño de anticuerpos de precisión atómica de novo**](#60-rfdiffusion-evolves-further-realizing-atomic-accuracy-de-novo-antibody-design)
  - [**61. El primer esquema de fusión del modelo de lenguaje proteína-ARN establece un nuevo SOTA en la predicción de afinidad de unión**](#61-first-protein-rna-language-model-fusion-scheme-sets-new-sota-in-binding-affinity-prediction)
  - [**62. El modelo de tejido virtual Celcomen logra por primera vez la identificación de la inferencia causal en el análisis de transcriptomía espacial**](#62-virtual-tissue-model-celcomen-achieves-causal-inference-identifiability-in-spatial-transcriptomics-analysis-for-the-first-time)
  - [**63. El método AlphaFold-Metainference predice con precisión los conjuntos estructurales de proteínas desordenadas**](#63-alphafold-metainference-method-accurately-predicts-disordered-protein-structural-ensembles)
  - [**64. Marco de predicción de la estructura de ARN de alta precisión DRfold2 supera a SOTA en múltiples puntos de referencia**](#64-high-accuracy-rna-structure-prediction-framework-drfold2-surpasses-sota-in-multiple-benchmarks)
  - [**65. El nuevo algoritmo de diseño de proteínas DRAKES rompe el cuello de botella de diseño de secuencias biológicas**](#65-new-protein-design-algorithm-drakes-breaks-through-the-biological-sequence-design-bottleneck)
  - [**66. Espectroscopia de absorción UV asistida por aprendizaje automático para detectar contaminación microbiana**](#66-machine-learning-assisted-uv-absorbance-spectroscopy-for-detecting-microbial-contamination)
  - [**67. Utilizando modelos generativos de secuencias de proteínas para el diseño de genes superpuestos**](#67-utilizing-protein-sequence-generative-models-for-overlapping-gene-design)
  - [**68. Marco de predicción PUPS permite la localización subcelular de proteínas a nivel unicelular**](#68-prediction-framework-pups-enables-single-cell-level-protein-subcellular-localization)
  - [**69. UniMoMo: El primer marco generativo unificado entre las especies moleculares permite el diseño molecular de fármacos de varios tipos**](#69-unimomo-the-first-unified-generative-framework-across-molecular-species-enables-multi-type-drug-molecular-design)
  - [**70. El modelo de lenguaje proteico Prot42 genera ligandos de alta afinidad utilizando sólo la secuencia proteica objetivo.**](#70-protein-language-model-prot42-generates-high-affinity-binders-using-only-the-target-protein-sequence)
  - [**71. El simulador unificado de dinámica biomolecular UniSim logra por primera vez una simulación unificada de dinámica acelerada en el tiempo a través de tipos moleculares y entornos químicos**](#71-unified-biomolecular-dynamics-simulator-unisim-achieves-unified-time-coarsened-dynamics-simulation-across-molecular-types-and-chemical-environments-for-the-first-time)
  - [**72. Algoritmo de biología computacional SimplifiedBondfinder descubre 69 nuevos enlaces nitrógeno-oxígeno- azufre**](#72-computational-biology-algorithm-simplifiedbondfinder-uncovers-69-novel-nitrogen-oxygen-sulfur-bonds)
  - [**73. Nuevo método de diseño de secuencias de proteínas FAMPNN procesa simultáneamente la información sobre la columna vertebral y la cadena lateral de proteínas**](#73-novel-protein-sequence-design-method-fampnn-simultaneously-processes-protein-backbone-and-sidechain-information)
  - [**74. Método de diseño de proteínas atómicas La-Proteina genera proteínas con hasta 800 residuos a alta precisión**](#74-atomistic-protein-design-method-la-proteina-generates-proteins-with-up-to-800-residues-at-high-precision)
  - [**75. El modelo APM diseñado específicamente para complejos de proteínas de cadena múltiple permite el diseño de todo átomo y la optimización funcional**](#75-apm-model-specifically-designed-for-multi-chain-protein-complexes-enables-all-atom-design-and-functional-optimization)
  - [**76. Nuevo método de diseño de proteínas de unión de regiones intrínsecamente desordenadas Logos se especializa en objetivos no drogados**](#76-new-intrinsically-disordered-region-binding-protein-design-method-logos-specializes-in-undruggable-targets)
  - [**77. Se lanzó un nuevo marco de representación de fusión dinámica de proteínas FusionProt, que permite el intercambio de información iterativo**](#77-novel-protein-dynamic-fusion-representation-framework-fusionprot-released-enabling-iterative-information-exchange)
  - [**78. Modelo de difusión guiado por transcriptomas MorphDiff lanzado para acelerar el descubrimiento de fármacos fenotipos**](#78-transcriptome-guided-diffusion-model-morphdiff-released-to-accelerate-phenotypic-drug-discovery)
  - [**79. El marco AlphaPPIMI mejora significativamente la generalización, superando los métodos existentes en la predicción de moduladores de interfaz PPI**](#79-alphappimi-framework-significantly-enhances-generalization-surpassing-existing-methods-in-ppi-interface-modulator-prediction)
  - [**80. Un nuevo marco de red neuronal de fusión predice eficientemente los sitios de unión de múltiples metales en secuencias de proteínas**](#80-a-novel-fusion-neural-network-framework-efficiently-predicts-multi-metal-binding-sites-in-protein-sequences)
  - [**81. Se lanzó el marco de proyección molecular altamente sintetizable ReaSyn, logrando tasas de reconstrucción ultra altas y diversidad de vías**](#81-highly-synthesizable-molecular-projection-framework-reasyn-released-achieving-ultra-high-reconstruction-rates-and-pathway-diversity)
  - [**82. El marco de aprendizaje de refuerzo restringido Ctrl-DNA liberado, realizando el "control dirigido" de la expresión genética celular específica**](#82-constrained-reinforcement-learning-framework-ctrl-dna-released-realizing-targeted-control-of-specific-cell-gene-expression)
  - [**83. El marco PLACER resuelve el desafío de modelado a nivel atómico de la heterogeneidad conformacional de las proteínas.**](#83-placer-framework-resolves-the-atomic-level-modeling-challenge-of-protein-conformational-heterogeneity)
  - [**84. Squidiff permite la simulación de transcriptomas de múltiples escenarios, impulsando el desarrollo de la medicina de precisión y la medicina espacial**](#84-squidiff-enables-multi-scenario-transcriptome-simulation-boosting-precision-medicine-and-spatial-medicine-development)
  - [**85. El modelo generativo PepTron y el nuevo índice de referencia de evaluación lanzado, que remodela las capacidades de predicción de los conjuntos de proteínas desordenadas**](#85-generative-model-peptron-and-new-evaluation-benchmark-released-reshaping-prediction-capabilities-for-disordered-protein-ensembles)
  - [**86. MIT y Harvard proponen un flujo de trabajo de IA de extremo a extremo CleaveNet para superar desafíos de diseño de sustratos de proteasa altamente específicos**](#86-mit-and-harvard-propose-end-to-end-ai-workflow-cleavenet-to-overcome-highly-specific-protease-substrate-design-challenges)
  - [**87. El equipo de la Universidad Goethe de Frankfurt propone un marco de clasificación a múltiples escalas para descifrar la complejidad del ligoma humano E3**](#87-goethe-university-frankfurt-team-proposes-a-multi-scale-classification-framework-to-decode-the-complexity-of-the-human-e3-ligome)
  - [**88. Basecamp y NVIDIA lanzan conjuntamente el modelo de fundación EDEN, que permite el diseño terapéutico programable por IA**](#88-basecamp-and-nvidia-jointly-release-the-eden-foundation-model-enabling-ai-programmable-therapeutic-design)
  - [**89. Microsoft y otros proponen el marco multimodal de IA GigaTIME para generar atlas mIF virtuales a partir de diapositivas de patología de rutina**](#89-microsoft-and-others-propose-the-multimodal-ai-framework-gigatime-to-generate-virtual-mif-atlases-from-routine-pathology-slides)
  - [**90. El MIT propone el modelo de lenguaje de aprendizaje profundo Pichia-CLM para optimizar los codones para mejorar el rendimiento de proteínas recombinantes**](#90-mit-proposes-deep-learning-language-model-pichia-clm-to-optimize-codons-for-enhanced-recombinant-protein-yield)
  - [**91. MIT y ETH proponen conjuntamente el marco de aprendizaje profundo APOLLO para integrar y desentrañar eficientemente los datos multimodales de célula única**](#91-mit-and-eth-jointly-propose-deep-learning-framework-apollo-to-efficiently-integrate-and-disentangle-single-cell-multimodal-data)
  - [**92. CUHK y otros proponen conjuntamente el marco Bi-TEAM para el aprendizaje unificado de la representación a escala transversal de péptidos modificados**](#92-cuhk-and-others-jointly-propose-the-bi-team-framework-for-unified-cross-scale-representation-learning-of-modified-peptides)
  - [**93. La Universidad Carnegie Mellon y otros proponen AQuaRef para el refinamiento cuántico de modelos de proteínas de todo átomo**](#93-carnegie-mellon-university-and-others-propose-aquaref-for-quantum-refinement-of-all-atom-protein-models)
  - [**94. NVIDIA y otros proponen conjuntamente el marco Complexa para unificar la generación y la optimización de los ligandos de proteínas**](#94-nvidia-and-others-jointly-propose-the-complexa-framework-to-unify-protein-binder-generation-and-optimization)
  - [**95. MIT y CMU proponen conjuntamente VibeGen, que introduce la dinámica vibratoria para potenciar el diseño de proteínas de novo**](#95-mit-and-cmu-jointly-propose-vibegen-introducing-vibrational-dynamics-to-empower-de-novo-protein-design)
  - [**96. El Instituto Pasteur utiliza el aprendizaje profundo para predecir 2.39 millones de proteínas antifajas, mapeando la inmunidad bacteriana**](#96-institut-pasteur-uses-deep-learning-to-predict-239-million-anti-phage-proteins-mapping-bacterial-immunity)
  - [**97. El equipo del KAIST utiliza la IA para diseñar de novo proteínas de unión de pequeñas moléculas, aplicándolas con éxito en biosensores**](#97-kaist-team-utilizes-ai-to-de-novo-design-small-molecule-binding-proteins-successfully-applying-them-in-biosensors)
  - [**98. La Universidad de Toronto y otros proponen dnaHNet para el modelado jerárquico eficiente de las secuencias genómicas**](#98-university-of-toronto-and-others-propose-dnahnet-for-efficient-hierarchical-modeling-of-genomic-sequences)
  - [**99. La Universidad Queen Mary de Londres y otros conducen el estudio proteogenómico a mayor escala, revelando mecanismos moleculares de enfermedades**](#99-queen-mary-university-of-london-and-others-conduct-the-largest-scale-proteogenomic-study-revealing-molecular-disease-mechanisms)
  - [**100. Universidad Goethe Frankfurt y otros proponen el modelo genESOM: IA generativa rompe experimentos con animales de pequeña muestra**](#100-goethe-university-frankfurt-and-others-propose-genesom-model-generative-ai-breaks-through-small-sample-animal-experiments)
- [**Inteligencia artificial+ Cuidado de la salud**](#ai-healthcare)
  - [**1. El sistema de aprendizaje profundo DeepDR Plus predice la retinopatía diabética utilizando imágenes de fundus.**](#1-deepdr-plus-deep-learning-system-predicts-diabetic-retinopathy-using-fundus-images)
  - [**2. El modelo de regresión logística analiza que el alto índice de paisaje verde reduce el riesgo de MetS**](#2-logistic-regression-model-analyzes-that-high-green-landscape-index-reduces-mets-risk)
  - [**3. El sistema de aprendizaje profundo ayuda a los oftalmólogos menores a aumentar la coherencia del diagnóstico en un 12%**](#3-deep-learning-system-helps-junior-ophthalmologists-increase-diagnostic-consistency-by-12)
  - [**4. Los GSP-GCN alcanzan hasta un 90,2% de precisión en el diagnóstico de la enfermedad de Parkinson.**](#4-gsp-gcns-achieve-up-to-902-accuracy-in-parkinsons-disease-diagnosis)
  - [**5. Sistema de puntuación del pronóstico del cáncer de mama MIRS**](#5-breast-cancer-prognosis-scoring-system-mirs)
  - [**6. El modelo de base de imagen de la retina RETFound predice múltiples enfermedades sistémicas.**](#6-retinal-image-foundation-model-retfound-predicts-multiple-systemic-diseases)
  - [**7. SVM optimiza los sensores táctiles, la tasa de reconocimiento braille alcanza el 96,12%**](#7-svm-optimizes-tactile-sensors-braille-recognition-rate-reaches-9612)
  - [**8. El CAS Instituto de Genómica de Beijing establece un archivo abierto de imágenes biomédicas**](#8-cas-beijing-institute-of-genomics-establishes-an-open-biomedical-imaging-archive)
  - [**9. AI Lunit lee mamografías con una precisión comparable a la de los médicos**](#9-ai-lunit-reads-mammograms-with-accuracy-comparable-to-doctors)
  - [**10. La estrategia de selección de características detecta biomarcadores del cáncer de mama**](#10-feature-selection-strategy-detects-breast-cancer-biomarkers)
  - [**11. El modelo de máquina de impulso gradual predice con precisión el subsíndrome de BPSD**](#11-gradient-boosting-machine-model-accurately-predicts-bpsd-sub-syndrome)
  - [**12. El modelo de aprendizaje automático predice la tasa de mortalidad del paciente en un año**](#12-machine-learning-model-predicts-patient-one-year-mortality-rate)
  - [**13. La nueva tecnología de interfaz cerebro-computador de IA permite a los pacientes afásicos "hablar"**](#13-new-ai-brain-computer-interface-technology-allows-aphasic-patients-to-speak)
  - [**14. Detección de cáncer de páncreas por inteligencia artificial basada en el aprendizaje profundo**](#14-deep-learning-based-artificial-intelligence-detection-of-pancreatic-cancer)
  - [**15. Eficacia de las pruebas de detección del cáncer de pulmón asistidas por aprendizaje automático en la población**](#15-population-effectiveness-of-machine-learning-assisted-lung-cancer-screening)
  - [**16. El modelo de fusión de IA para el diagnóstico del cáncer ovárico MCF calcula el riesgo utilizando datos de laboratorio de rutina y edad**](#16-ovarian-cancer-diagnostic-ai-fusion-model-mcf-calculates-risk-using-routine-lab-data-and-age)
  - [**17. Google lanza el marco HEAL, un proceso de 4 pasos para evaluar la equidad de las herramientas de IA médicas**](#17-google-releases-heal-framework-a-4-step-process-to-assess-medical-ai-tool-fairness)
  - [**18. Aprovechar la segmentación semántica para desarrollar una herramienta de anotación semántica de transcriptomía espacial Pianno**](#18-leveraging-semantic-segmentation-to-develop-spatial-transcriptomics-semantic-annotation-tool-pianno)
  - [**19. El modelo de IA UniFMIR rompe los límites de la imagen de microscopía fluorescente existente**](#19-ai-model-unifmir-breaks-the-limits-of-existing-fluorescence-microscopy-imaging)
  - [**20. El sistema de aprendizaje profundo mejora la precisión de la predicción de la supervivencia del cáncer**](#20-deep-learning-system-improves-the-accuracy-of-cancer-survival-prediction)
  - [**21. MemSAM adapta el modelo de "Segmento de cualquier cosa" para la segmentación de videos médicos**](#21-memsam-adapts-segment-anything-model-for-medical-video-segmentation)
  - [**22. Modelo de segmentación de imágenes médicas Medical SAM 2 encabeza la tabla de clasificación de SOTA**](#22-medical-image-segmentation-model-medical-sam-2-tops-the-sota-leaderboard)
  - [**23. El aprendizaje automático combate la resistencia a la quimioterapia y la recurrencia del tumor, construyendo una fuerte defensa contra las células madre del cáncer de mama**](#23-machine-learning-fights-chemotherapy-resistance-and-tumor-recurrence-building-a-strong-defense-against-breast-cancer-stem-cells)
  - [**24. Modelo de lenguaje de visión DeepDR-LLM para el cuidado de la diabetes publicado en la sub-jornal Nature**](#24-vision-language-model-deepdr-llm-for-diabetes-care-published-in-nature-sub-journal)
  - [**25. Evaluación con los patólogos de alto nivel! El equipo de Tsinghua propone un modelo de base de IA ROAM para el diagnóstico preciso del glioma**](#25-leveling-with-senior-pathologists-tsinghua-team-proposes-ai-foundation-model-roam-for-precise-glioma-diagnosis)
  - [**26. El modelo universal de segmentación de imágenes médicas ScribblePrompt supera a los modelos basados en SAM**](#26-universal-medical-image-segmentation-model-scribbleprompt-outperforms-sam-based-models)
  - [**27. La plataforma digital del cerebro gemelo demuestra fenómenos críticos y funciones cognitivas similares al cerebro humano**](#27-digital-twin-brain-platform-demonstrates-critical-phenomena-and-cognitive-functions-similar-to-the-human-brain)
  - [**28. El sistema de simulación de agentes automático de diálogo LLM realiza el diagnóstico inicial de depresión**](#28-automated-llm-dialogue-agent-simulation-system-performs-initial-diagnosis-for-depression)
  - [**29. Modelo de aprendizaje profundo LucaProt ayuda en la identificación de virus de ARN**](#29-deep-learning-model-lucaprot-aids-in-rna-virus-identification)
  - [**30. UniMedI rompe las barreras de heterogeneidad de los datos médicos**](#30-medical-image-pre-training-framework-unimedi-breaks-down-medical-data-heterogeneity-barriers)
  - [**31. El modelo médico multimillonario MMed-Llama 3 se adapta mejor a los escenarios de aplicación médica**](#31-multilingual-medical-large-model-mmed-llama-3-better-adapts-to-medical-application-scenarios)
  - [**32. Método de costura de imágenes con endoscopia en cápsula S2P-Matching ayuda en la reconstrucción de imágenes**](#32-capsule-endoscopy-image-stitching-method-s2p-matching-assists-in-image-reconstruction)
  - [**33. El benchmark médico multimodal GMAI-MMBench cuenta con 284 conjuntos de datos que cubren 18 tareas clínicas.**](#33-multimodal-medical-benchmark-gmai-mmbench-features-284-datasets-covering-18-clinical-tasks)
  - [**34. El nuevo método de pronóstico de la serie temporal CGS-Mask revela indicadores clave para las tasas de supervivencia de los pacientes**](#34-novel-time-series-forecasting-method-cgs-mask-uncovers-key-indicators-for-patient-survival-rates)
  - [**35. El marco de decodificación cerebral no invasivo fMRI establece las bases para las interfaces cerebro-ordenador y los modelos cognitivos**](#35-non-invasive-brain-decoding-framework-fmri-lays-the-foundation-for-brain-computer-interfaces-and-cognitive-models)
  - [**36. El modelo médico de segmentación de imágenes M2CF-Net mejora la precisión del diagnóstico para el síndrome de Sjogren**](#36-medical-image-segmentation-model-m2cf-net-improves-diagnosis-accuracy-for-sjogrens-syndrome)
  - [**37. BSAFusion permite la alineación y fusión de imágenes médicas multimodal**](#37-bsafusion-enables-alignment-and-fusion-of-multimodal-medical-images)
  - [**38. El marco de LLM multiagente KG4Diagnosis ayuda a diagnosticar 362 enfermedades comunes**](#38-multi-agent-llm-framework-kg4diagnosis-assists-in-diagnosing-362-common-diseases)
  - [**39. Modelo de segmentación de imágenes ConDSeg resuelve problemas de frontera suave y coincidencia en la imágenes médicas**](#39-image-segmentation-model-condseg-solves-soft-boundary-and-co-occurrence-issues-in-medical-imaging)
  - [**40. El modelo médico M3FM permite un diagnóstico clínico de tiro cero, apoyando la notificación y clasificación de enfermedades**](#40-medical-model-m³fm-enables-zero-shot-clinical-diagnosis-supporting-disease-reporting-and-classification)
  - [**41. La estimación de sexo basada en el aprendizaje profundo a partir de tomografías de cráneo supera a los expertos forenses humanos**](#41-deep-learning-based-sex-estimation-from-skull-ct-scans-outperforms-human-forensic-experts)
  - [**42. La IA impulsa la investigación médica: los grandes modelos se convierten en el "socio de oro" para la formación de médicos de atención primaria**](#42-ai-boosts-medical-research-large-models-become-the-golden-partner-for-training-primary-care-physicians)
  - [**43. El algoritmo de aprendizaje profundo de AcneDGNet logra la detección y clasificación de lesiones de acné**](#43-acnedgnet-deep-learning-algorithm-achieves-acne-lesion-detection-and-grading)
  - [**44. Se lanzó el modelo multimodal de segmentación de imágenes médicas VISTA3D, logrando la segmentación automática y la interacción de imágenes en 3D**](#44-multimodal-medical-image-segmentation-model-vista3d-released-achieving-3d-image-auto-segmentation-and-interaction)
  - [**45. Modelo de segmentación unificada de ecocardiografía multiplano EchoONE segmenta con precisión varios planos**](#45-multi-plane-echocardiography-unified-segmentation-model-echoone-accurately-segments-multiple-planes)
  - [**46. El marco de diálogo entre múltiples agentes simula las consultas médicas para ayudar al diagnóstico de enfermedades**](#46-multi-agent-dialogue-framework-simulates-medical-consultations-to-aid-disease-diagnosis)
  - [**47. Marco de aprendizaje profundo STAIG revela información genética detallada en el microambiente tumoral**](#47-deep-learning-framework-staig-reveals-detailed-genetic-information-in-the-tumor-microenvironment)
  - [**48. El primer marco de re-identificación de imágenes médicas todo en uno MaMI llega a SOTA a través de 11 conjuntos de datos**](#48-first-all-in-one-medical-image-re-identification-framework-mami-reaches-sota-across-11-datasets)
  - [**49. El modelo de regresión multi-a-uno M2OST predice con precisión la expresión génica utilizando imágenes de patología digital**](#49-many-to-one-regression-model-m2ost-accurately-predicts-gene-expression-using-digital-pathology-images)
  - [**50. Herramienta de escaneo de MRI del cerebro MindGlide cuantifica las lesiones de esclerosis múltiple**](#50-brain-mri-scanning-tool-mindglide-quantifies-multiple-sclerosis-lesions)
  - [**51. Destilación jerárquica marco de aprendizaje multi-instancia HDMIL procesa rápidamente imágenes de diapositivas completas de gigapixel**](#51-hierarchical-distillation-multi-instance-learning-framework-hdmil-rapidly-processes-gigapixel-whole-slide-images)
  - [**52. Modelo universal de segmentación de vasos sanguíneos en 3D fundamento de vasos FM supera con creces los modelos basados en SAM**](#52-universal-3d-blood-vessel-segmentation-foundation-model-vesselfm-far-exceeds-sam-based-models)
  - [**53. Las redes neuronales gráficas predicen con precisión la supervivencia del cáncer de pulmón, descubriendo 3 subtipos fatales**](#53-graph-neural-networks-accurately-predict-lung-cancer-survival-discovering-3-fatal-subtypes)
  - [**54. Estrategia de fusión El modelo de IA predice el riesgo de mortalidad por choque séptico**](#54-fusion-strategy-ai-model-predicts-septic-shock-mortality-risk)
  - [**55. El primer modelo clínico de gráfico de pensamiento del mundo en HIE mejora la predicción de resultados neurocognitivos en un 15%**](#55-worlds-first-clinical-graph-of-thought-model-in-hie-improves-neurocognitive-outcome-prediction-by-15)
  - [**56. El modelado de la cohorte de pacientes de granos finos utilizando datos multidimensionales de EHR aumenta la precisión de la predicción de la duración de la estancia en un 16,3%.**](#56-fine-grained-patient-cohort-modeling-using-multidimensional-ehr-data-increases-length-of-stay-prediction-accuracy-by-163)
  - [**57. El modelo de aprendizaje profundo APEX examina los posibles candidatos a los antibióticos**](#57-deep-learning-model-apex-screens-potential-antibiotic-candidates)
  - [**58. Evaluación de la epidemiología de las aguas residuales mediante la secuenciación genética y el aprendizaje automático: el método ICA-Var detecta los virus hasta 4 semanas antes**](#58-wastewater-epidemiology-assessment-using-gene-sequencing-and-machine-learning-ica-var-method-detects-viruses-up-to-4-weeks-early)
  - [**59. Modelo de difusión del puente browniano bidireccional mejora la reproducibilidad de la coloración virtual**](#59-bidirectional-brownian-bridge-diffusion-model-enhances-reproducibility-of-virtual-staining)
  - [**60. Medical GraphRAG rompe récords de precisión de calificación, logrando SOTA en 11 conjuntos de datos de referencia**](#60-medical-graphrag-breaks-qa-accuracy-records-achieving-sota-on-11-benchmark-datasets)
  - [**61. El agente de atención médica detecta automáticamente los problemas de ética médica y seguridad**](#61-healthcare-agent-automatically-detects-medical-ethics-and-safety-issues)
  - [**62. Clasificador de imágenes de células sanguíneas CytoDiffusion ayuda a detectar la leucemia, superando a los expertos clínicos**](#62-blood-cell-image-classifier-cytodiffusion-assists-in-discovering-leukemia-surpassing-clinical-experts)
  - [**63. El equipo de la UCL propone un marco de aprendizaje federado MORPHFED para el análisis interinstitucional de la morfología sanguínea**](#63-ucl-team-proposes-federated-learning-framework-morphfed-for-cross-institutional-blood-morphology-analysis)
  - [**64. El equipo francés propone un marco explicable de aprendizaje automático para predicir con precisión la mortalidad en los candidatos a trasplante de hígado HCC**](#64-french-team-proposes-explainable-machine-learning-framework-for-accurate-mortality-prediction-in-hcc-liver-transplant-candidates)
  - [**65. La Universidad de Stanford propone Merlin, el primer modelo nativo de lenguaje de visión de CT abdominal 3D**](#65-stanford-university-proposes-merlin-the-first-native-3d-abdominal-ct-vision-language-model)
- [**IA + Materiales Química**](#ai-materials-chemistry)
  - [**1. El marco computacional de alto rendimiento genera 120.000 nuevos candidatos de MOF en 33 minutos.**](#1-high-throughput-computational-framework-generates-120000-novel-mof-candidates-in-33-minutes)
  - [**2. pantallas de algoritmo de aprendizaje automático de materiales de electrodos P-SOC**](#2-machine-learning-algorithm-screens-p-soc-electrode-materials)
  - [**3. El modelo de aprendizaje automático SEN logra predicciones de propiedades materiales de alta precisión**](#3-sen-machine-learning-model-achieves-high-accuracy-material-property-predictions)
  - [**4. La herramienta de aprendizaje profundo GNoME descubre 2,2 millones de nuevos cristales**](#4-deep-learning-tool-gnome-discovers-22-million-new-crystals)
  - [**5. La red neuronal atómica incrustada recursivamente inducida por el campo describe con precisión los cambios de fuerza y dirección del campo externo.**](#5-field-induced-recursively-embedded-atom-neural-network-accurately-describes-external-field-strength-and-direction-changes)
  - [**6. El aprendizaje automático predice la adsorción de agua en isotermías de materiales porosos**](#6-machine-learning-predicts-water-adsorption-isotherms-of-porous-materials)
  - [**7. El uso del aprendizaje automático para optimizar los co-catalisadores para los fotoanodos BiVO(4)**](#7-using-machine-learning-to-optimize-co-catalysts-for-bivo4-photoanodes)
  - [**8. El algoritmo RetroExplainer realiza predicciones de retrosíntesis basadas en el aprendizaje profundo**](#8-retroexplainer-algorithm-performs-retrosynthesis-prediction-based-on-deep-learning)
  - [**9. Redes neuronales profundas + PNL utilizada para desarrollar aleaciones resistentes a la corrosión**](#9-deep-neural-networks--nlp-used-to-develop-corrosion-resistant-alloys)
  - [**10. El aprendizaje profundo determina las estructuras internas de los materiales a través de observaciones superficiales**](#10-deep-learning-determines-materials-internal-structures-through-surface-observations)
  - [**11. Desarrollo de 3 nuevos materiales utilizando innovadores scintilladores de rayos X**](#11-developing-3-new-materials-using-innovative-x-ray-scintillators)
  - [**12. Aprendizaje semisupervisado extrae información oculta de datos sin etiquetado**](#12-semi-supervised-learning-extracts-hidden-information-from-unlabeled-data)
  - [**13. Extracción automática de conocimientos basada en AutoML**](#13-automated-knowledge-extraction-based-on-automl)
  - [**14. Uni-MOF: Un modelo de aprendizaje automático que predice el comportamiento de adsorción en materiales 3D MOF**](#14-uni-mof-a-machine-learning-model-predicting-adsorption-behavior-in-3d-mof-materials)
  - [**15. La microelectrónica se acelera hacia la era post-Moore! Integrando DNN con la tecnología de nanomembrana para analizar con precisión los ángulos de luz incidentes**](#15-microelectronics-accelerates-towards-the-post-moore-era-integrating-dnn-with-nanomembrane-technology-to-precisely-analyze-incident-light-angles)
  - [**16. Redescribir los límites de rendimiento de las baterías de litio, proponiendo un modelo electroquímico simplificado basado en el aprendizaje conjunto**](#16-reshaping-lithium-battery-performance-boundaries-proposing-a-simplified-electrochemical-model-based-on-ensemble-learning)
  - [**17. El imán superconductor más fuerte a base de hierro nacido a través del aprendizaje automático**](#17-the-strongest-iron-based-superconducting-magnet-born-via-machine-learning)
  - [**18. Las redes neuronales reemplazan a la teoría funcional de la densidad!**](#18-neural-networks-replace-density-functional-theory-universal-materials-model-achieves-ultra-precise-predictions)
  - [**19. El marco funcional de la densidad de la red neuronal abre la caja negra de la predicción de la estructura electrónica de la materia**](#19-neural-network-density-functional-framework-opens-the-black-box-of-matters-electronic-structure-prediction)
  - [**20. La primera arquitectura de capacitación en modo completamente avanzado para la computación óptica utilizando redes neuronales logra un gran avance en los chips ópticos domésticos**](#20-first-fully-forward-mode-training-architecture-for-optical-computing-using-neural-networks-achieves-major-breakthrough-in-domestic-optical-chips)
  - [**21. Química LLM ChemLLM cubre 7 millones de datos de calidad, capacidades profesionales rivales GPT-4**](#21-chemistry-llm-chemllm-covers-7-million-qa-data-professional-capabilities-rival-gpt-4)
  - [**22. Microspectómetros adaptativos de IA producibles a escala de wafer**](#22-wafer-scale-producible-ai-adaptive-micro-spectrometers)
  - [**23. El modelo GNNOpt identifica cientos de candidatos de células solares y materiales cuánticos**](#23-gnnopt-model-identifies-hundreds-of-solar-cell-and-quantum-material-candidates)
  - [**24. El conjunto de datos OMat24 abierto contiene 110 millones de resultados de cálculo de DFT**](#24-open-omat24-dataset-contains-110-million-dft-calculation-results)
  - [**25. La nueva aleación refractaria de alta entropía sintetizada a través del aprendizaje automático cuenta con una excelente ductilidad a temperatura ambiente**](#25-novel-refractory-high-entropy-alloy-synthesized-via-machine-learning-boasts-excellent-room-temperature-ductility)
  - [**26. El modelo generativo de materiales FlowLLM cuenta con un conjunto de datos que cubre más de 45 mil materiales**](#26-material-generative-model-flowllm-features-a-dataset-covering-over-45k-materials)
  - [**27. Utilizando el aprendizaje activo para identificar 14.000 óxidos de alta entropía, seleccionando con éxito 4 catalizadores de evolución de hidrógeno de alta actividad**](#27-using-active-learning-to-identify-14000-high-entropy-oxides-successfully-screening-4-high-activity-hydrogen-evolution-catalysts)
  - [**28. El modelo de aprendizaje profundo BETE-NET aumenta en 5 veces la eficiencia de búsqueda de materiales superconductores**](#28-deep-learning-model-bete-net-boosts-superconducting-material-search-efficiency-by-5x)
  - [**29. La tecnología de árbol de decisión de impulso gradual (GBDT) mejora aún más la predicción de alta precisión de la resistencia a la oxidación de aleaciones de alta entropía**](#29-gradient-boosting-decision-tree-gbdt-technology-further-improves-high-precision-prediction-of-high-entropy-alloy-oxidation-resistance)
  - [**30. Marco de diseño molecular RingFormer predice con mayor precisión las propiedades moleculares optoelectrónicas del material orgánico**](#30-molecular-design-framework-ringformer-more-precisely-predicts-organic-material-molecular-optoelectronic-properties)
  - [**31. Método de planificación de la retrosíntesis inorgánica Retrieval-Retro mejora la eficiencia y precisión de la síntesis de materiales inorgánicos**](#31-inorganic-retrosynthesis-planning-method-retrieval-retro-improves-inorganic-material-synthesis-efficiency-and-accuracy)
  - [**32. El uso de modelos grandes para descifrar los mecanismos de conducción de electrolitos de estado sólido de hidróxido, estableciendo un modelo fiable de predicción de la energía de activación**](#32-using-large-models-to-decipher-hydride-solid-state-electrolyte-conduction-mechanisms-establishing-a-reliable-activation-energy-prediction-model)
  - [**33. La búsqueda de datos de espectrometría de masas a escala de tera habilitada por el aprendizaje automático revela reacciones químicas desconocidas**](#33-tera-scale-mass-spectrometry-data-search-enabled-by-machine-learning-uncovers-unknown-chemical-reactions)
  - [**34. Método de solución de estructura de IA generativa PXRDnet basado en modelos de difusión resuelve con éxito 200 nanocristales simulados complejos**](#34-generative-ai-structure-solution-method-pxrdnet-based-on-diffusion-models-successfully-solves-200-complex-simulated-nanocrystals)
  - [**35. El modelo DreaMS cubre 200 millones de espectros de masa molecular, construyendo el conjunto de datos de especificaciones de masa más grande del mundo GeMS**](#35-dreams-model-covers-200-million-molecular-mass-spectra-building-the-worlds-largest-mass-spec-dataset-gems)
  - [**36. El marco de aprendizaje automático equivalente acelera las simulaciones a gran escala de campos eléctricos de materiales**](#36-equivariant-machine-learning-framework-accelerates-large-scale-electric-field-simulations-of-materials)
  - [**37. El método de integración de datos de múltiples fuentes muestra 25 tipos de alternativas de clinker de cemento, lo que equivale a reducir 1.200 millones de toneladas de gases de efecto invernadero**](#37-multi-source-data-integration-method-screens-25-types-of-cement-clinker-alternatives-equivalent-to-reducing-12-billion-tons-of-greenhouse-gases)
  - [**38. UNIMATE logra por primera vez un modelo unificado de generación de topología/predección de propiedades**](#38-unimate-achieves-unified-modeling-of-topology-generationproperty-prediction-for-the-first-time)
  - [**39. Transfusión de todo átomo El marco transformador permite por primera vez la generación unificada de sistemas atómicos periódicos y aperiódicos**](#39-all-atom-diffusion-transformer-framework-enables-unified-generation-of-periodic-and-aperiodic-atomic-systems-for-the-first-time)
  - [**40. El modelo FASTSOLV realiza predicciones de solubilidad de moléculas pequeñas a cualquier temperatura, acelerando la velocidad de inferencia en 50 veces**](#40-fastsolv-model-realizes-small-molecule-solubility-prediction-at-any-temperature-accelerating-inference-speed-by-50x)
  - [**41. Un nuevo método basado en modelos de aprendizaje automático multimodal predice las propiedades de los materiales sin estructuras cristalinas completas**](#41-novel-method-based-on-multimodal-machine-learning-models-predicts-material-properties-without-complete-crystal-structures)
  - [**42. El modelo de IA CGformer integra de manera innovadora los mecanismos de atención global, ayudando a la I+D de materiales de alta entropía**](#42-ai-model-cgformer-innovatively-integrates-global-attention-mechanisms-aiding-high-entropy-material-rd)
  - [**43. Nuevo método de integración de restricciones estructurales SCIGEN se adapta a cualquier modelo de difusión pre-entrenado**](#43-novel-structural-constraint-integration-method-scigen-adapts-to-any-pre-trained-diffusion-model)
  - [**44. El modelo de IA generativa con información física SpectroGen requiere solo una sola entrada de modalidad para lograr la generación transmodal con una correlación experimental del 99%.**](#44-physically-informed-generative-ai-model-spectrogen-requires-only-single-modality-input-to-achieve-cross-modal-generation-with-99-experimental-correlation)
  - [**45. MOF-ChemUnity reconstruye el conocimiento panorámico del MOF, empujando el descubrimiento de materiales a la era de la "IA explicable"**](#45-mof-chemunity-reconstructs-mof-panoramic-knowledge-pushing-material-discovery-into-the-explainable-ai-era)
  - [**46. Se lanzó el modelo PET-MAD de potencial universal ligero, logrando una precisión específica a nivel de modelo con muestras mínimas**](#46-lightweight-universal-potential-model-pet-mad-released-achieving-dedicated-model-level-precision-with-minimal-samples)
  - [**47. Sistema de IA ChemOntology lanzado, reduciendo a la mitad los costos de búsqueda de vías de reacción mediante la integración de conocimientos químicos**](#47-ai-system-chemontology-released-halving-reaction-path-search-costs-by-integrating-chemical-knowledge)
  - [**48. Princeton y otros proponen conjuntamente un método LLM para predecir la energía libre de MOF, evaluando con gran precisión la viabilidad de la síntesis**](#48-princeton-and-others-jointly-propose-llm-method-for-predicting-mof-free-energy-highly-accurately-assessing-synthesis-feasibility)
  - [**49. El equipo de la Universidad de Yale propone el modelo MOSAIC, coordinando los LLM para generar esquemas de síntesis química altamente confiables**](#49-yale-university-team-proposes-mosaic-model-coordinating-llms-to-generate-highly-reliable-chemical-synthesis-schemes)
  - [**50. MIT y otros proponen el modelo de difusión DiffSyn, que permite la planificación generativa de las vías de síntesis de materiales.**](#50-mit-and-others-propose-diffusion-model-diffsyn-enabling-generative-planning-of-material-synthesis-pathways)
  - [**51. La Universidad de Michigan y Farasis Energy proponen conjuntamente el método "Discovery Learning", que acortará drásticamente los ciclos de predicción de la vida de la batería**](#51-university-of-michigan-and-farasis-energy-jointly-propose-discovery-learning-method-drastically-shortening-battery-life-prediction-cycles)
  - [**52. La Universidad de Cornell propone un marco SCAN, que predice y explica con gran precisión el rendimiento de los electrolitos de la batería**](#52-cornell-university-proposes-scan-framework-highly-accurately-predicting-and-explaining-battery-electrolyte-performance)
  - [**53. MIT propone un modelo de base de gran tamaño DefectNet para la caracterización no destructiva y la cuantificación de defectos internos de materiales**](#53-mit-proposes-foundation-large-model-defectnet-for-non-destructive-characterization-and-quantification-of-internal-material-defects)
  - [**54. La Universidad de Cornell propone una plataforma multi-agente EMSeek, que logre el análisis automatizado de imágenes de microscopía electrónica en línea completa.**](#54-cornell-university-proposes-multi-agent-platform-emseek-achieving-full-pipeline-automated-analysis-of-electron-microscopy-images)
- [**IA + Zoología-Botánica**](#ai-zoology-botany)
  - [**1. La SBeA analiza los comportamientos sociales de los animales basándose en un marco de aprendizaje de pocos disparos**](#1-sbea-analyzes-animal-social-behaviors-based-on-a-few-shot-learning-framework)
  - [**2. El método de aprendizaje profundo basado en redes siamesas captura automáticamente los procesos de desarrollo embrionario**](#2-deep-learning-method-based-on-siamese-networks-automatically-captures-embryonic-development-processes)
  - [**3. Pipeline sistemática para recopilar datos de fenotipos de plantas a través de drones para predecir fechas óptimas de cosecha**](#3-systematic-pipeline-for-collecting-plant-phenotype-data-via-drones-to-predict-optimal-harvest-dates)
  - [**4. El sistema de alerta de cámaras AI distingue con precisión a los tigres de otras especies**](#4-ai-camera-alert-system-accurately-distinguishes-tigers-from-other-species)
  - [**5. El uso de datos de los Labrador retriever y la comparación de 3 modelos revela rasgos de comportamiento que afectan el rendimiento de los perros de detección**](#5-using-labrador-retriever-data-and-comparing-3-models-reveals-behavioral-traits-affecting-detection-dogs-performance)
  - [**6. Modelo de reconocimiento de imágenes de múltiples especies basado en la clasificación ArcFace Tela para el reconocimiento facial**](#6-multi-species-image-recognition-model-based-on-arcface-classification-head-for-face-recognition)
  - [**7. Monitorear el florecimiento de las cerezas en Japón utilizando la API Python y la API de visión por ordenador**](#7-monitoring-cherry-blossom-blooming-in-japan-using-python-api-and-computer-vision-api)
  - [**8. El método de genética de la población basado en el aprendizaje automático revela el mecanismo de formación de sabores de uva**](#8-machine-learning-based-population-genetics-method-reveals-the-formation-mechanism-of-grape-flavors)
  - [**9. Revisión: Desbloqueo de la investigación bioinformática de manera más eficiente con IA**](#9-review-unlocking-bioinformatics-research-more-efficiently-with-ai)
  - [**10. El modelo BirdFlow predice con precisión las rutas de vuelo de las aves migratorias**](#10-birdflow-model-accurately-predicts-flight-paths-of-migratory-birds)
  - [**11. El nuevo modelo de bioacústica de ballenas identifica 8 especies de cetáceos**](#11-new-whale-bioacoustics-model-identifies-8-cetacean-species)
  - [**12. El aprendizaje automático aisla el alfabeto fonético de las ballenas espermatozoides, muy similar al lenguaje humano con una capacidad de transporte de información más fuerte**](#12-machine-learning-isolates-the-sperm-whale-phonetic-alphabet-highly-similar-to-human-language-with-stronger-information-carrying-capacity)
  - [**13. El modelo PlantLncBoost alcanza hasta un 96% de precisión en la predicción interespecial de lncRNA**](#13-plantlncboost-model-achieves-up-to-96-accuracy-in-cross-species-lncrna-prediction)
  - [**14. Perch 2.0 cubre casi 15.000 especies, refrescante SOTA en la detección de clasificación bioacústica**](#14-perch-20-covers-nearly-15000-species-refreshing-sota-in-bioacoustic-classification-detection)
- [**Inteligencia artificial+ Agricultura-Forestación-Cultura de animales**](#ai-agriculture-forestry-animal-husbandry)
  - [**1. El uso de redes neuronales convolucionales para estimar rápidamente y con precisión el rendimiento del arroz**](#1-using-convolutional-neural-networks-for-rapid-and-accurate-rice-yield-estimation)
  - [**2. Modelo diseñado a través de monitores del algoritmo YOLOv5 de postura de semilla y nacimiento de cerdos**](#2-model-designed-via-yolov5-algorithm-monitors-sow-posture-and-piglet-birth)
  - [**3. Combinar la observación de laboratorio y el aprendizaje automático para demostrar que los sonidos ultrasónicos emitidos por las plantas de tomate y tabaco estresados pueden viajar en el aire**](#3-combining-laboratory-observation-and-machine-learning-to-prove-that-ultrasonic-sounds-emitted-by-stressed-tomato-and-tobacco-plants-can-travel-in-air)
  - [**4. Análisis de imagen de drones + IA detecta plagas forestales**](#4-drone--ai-image-analysis-detects-forestry-pests)
  - [**5. Visión por ordenador + aprendizaje profundo desarrollado para un sistema de detección de parálisis de vacas lecheras**](#5-computer-vision--deep-learning-developed-for-a-dairy-cow-lameness-detection-system)
- [**IA + Meteorología**](#ai-meteorology)
  - [**1. Revisión: Modelos de previsión del tiempo basados en datos de aprendizaje automático**](#1-review-data-driven-machine-learning-weather-forecasting-models)
  - [**2. Revisión: Recopilación de datos de centros de tormentas de granizo y predicción de condiciones meteorológicas extremas utilizando modelos grandes**](#2-review-collecting-data-from-hailstorm-centers-and-predicting-extreme-weather-using-large-models)
  - [**3. Crear nuevos algoritmos para predecir con precisión las precipitaciones extremas utilizando simulaciones globales de resolución de tormentas y aprendizaje automático**](#3-creating-new-algorithms-to-accurately-predict-extreme-precipitation-using-global-storm-resolving-simulations-and-machine-learning)
  - [**4. El modelo de aprendizaje automático basado en el bosque aleatorio CSU-MLP predice el clima severo de medio rango**](#4-random-forest-based-machine-learning-model-csu-mlp-predicts-medium-range-severe-weather)
  - [**5. Sistema de pronóstico del tiempo de extremo a extremo basado en datos Aardvark Meteorología acelera las predicciones en docenas de veces en comparación con los métodos tradicionales**](#5-end-to-end-data-driven-weather-forecasting-system-aardvark-weather-speeds-up-predictions-by-dozens-of-times-compared-to-traditional-methods)
  - [**6. El sistema de predicción del tiempo de aprendizaje automático FCN3 admite la inferencia de un solo GPU ultra rápida**](#6-machine-learning-weather-forecasting-system-fcn3-supports-ultra-fast-single-gpu-inference)
  - [**7. El modelo indio de previsión del monzón basado en 36 estaciones meteorológicas logra una previsión óptima a escala de la ciudad**](#7-indian-monsoon-forecasting-model-based-on-36-weather-stations-achieves-city-scale-fine-forecasting)
  - [**8. ACE2 completa un pronóstico estacional de 4 meses en sólo 2 minutos**](#8-ace2-completes-a-4-month-seasonal-forecast-in-just-2-minutes)
  - [**9. Se lanzó el modelo de previsión meteorológica incremental VA-MoE, logrando rendimiento SOTA con una reducción de parámetros del 75%**](#9-incremental-weather-forecasting-model-va-moe-released-achieving-sota-performance-with-75-parameter-reduction)
  - [**10. Se publicó el Modelo de Difusión en Rollo (ERDM), que resuelve los desafíos de previsión a largo plazo y mantiene una ventaja sobre las líneas de base de EDM en las previsiones a medio y largo plazo.**](#10-elucidated-rolling-diffusion-model-erdm-released-solving-long-term-forecasting-challenges-and-maintaining-a-lead-over-edm-baselines-in-medium-to-long-term-forecasts)
  - [**11. El nuevo modelo de difusión latente OmniCast se lanzó, resolviendo la acumulación de errores en los modelos de pronóstico meteorológico autoregresivos**](#11-novel-latent-diffusion-model-omnicast-released-resolving-error-accumulation-in-autoregressive-weather-forecasting-models)
  - [**12. NVIDIA propone un nuevo método de destilación a largo alcance, rompiendo los cuellos de botella de la IA en las previsiones meteorológicas a largo plazo**](#12-nvidia-proposes-a-novel-long-range-distillation-method-breaking-ai-bottlenecks-in-long-term-weather-forecasting)
  - [**13. El equipo conjunto propone el modelo SeaCast de la Red Neural Graphic, que permitirá alcanzar una previsión de océanos regionales muy rápida.**](#13-joint-team-proposes-graph-neural-network-model-seacast-achieving-ultra-fast-regional-ocean-forecasting)
- [**IA + Astronomía**](#ai-astronomy)
  - [**1. El algoritmo PRIMO aprende las reglas de propagación de la luz alrededor de los agujeros negros para reconstruir imágenes de agujeros negros más nítidos**](#1-primo-algorithm-learns-light-propagation-rules-around-black-holes-to-reconstruct-sharper-black-hole-images)
  - [**2. Entrenamiento de algoritmos de visión por computadora con datos simulados para afilar y "restaurar" imágenes astronómicas**](#2-training-computer-vision-algorithms-with-simulated-data-to-sharpen-and-restore-astronomical-images)
  - [**3. El uso de algoritmos de aprendizaje automático no supervisados Astronomía para encontrar anomalías previamente ignoradas**](#3-using-unsupervised-machine-learning-algorithm-astronomaly-to-find-previously-overlooked-anomalies)
  - [**4. Método basado en el aprendizaje automático para la identificación y extracción de parámetros CME**](#4-machine-learning-based-method-for-cme-identification-and-parameter-extraction)
  - [**5. El aprendizaje profundo descubre 107 casos de líneas de absorción neutra de carbono**](#5-deep-learning-discovers-107-cases-of-neutral-carbon-absorption-lines)
  - [**6. El modelo StarFusion logra una predicción de imágenes de alta resolución espacial**](#6-starfusion-model-achieves-high-spatial-resolution-image-prediction)
  - [**7. Método de generación de imágenes por satélite desarrollado basado en SD3, construyendo el conjunto de datos de detección remota más grande hasta la fecha, EcoMapper**](#7-satellite-image-generation-method-developed-based-on-sd3-constructing-the-largest-remote-sensing-dataset-to-date-ecomapper)
  - [**8. AI Geoespacial AI Tierra se centra en 3 tipos de datos principales, mejorando las capacidades de razonamiento geospacial en un 64%**](#8-geospatial-ai-earth-ai-focuses-on-3-core-data-types-improving-geospatial-reasoning-capabilities-by-64)
  - [**9. nace el primer modelo de fundación multimodal astronómico AION-1, pre-entrenado en 200 millones de objetivos astronómicos**](#9-the-first-astronomical-multimodal-foundation-model-aion-1-is-born-pre-trained-on-200-million-astronomical-targets)
  - [**10. La nueva tubería basada en datos identifica con precisión 7 muestras de lente raras de 810.000 quásares utilizando CNN**](#10-novel-data-driven-pipeline-precisely-identifies-7-rare-lensed-samples-from-810000-quasars-using-cnn)
  - [**11. El equipo de la ESA propone un método semi-supervisado AnomalyMatch para examinar eficientemente los cuerpos celestes raros de casi 100 millones de registros del Hubble**](#11-esa-team-proposes-semi-supervised-method-anomalymatch-to-efficiently-screen-rare-celestial-bodies-from-nearly-100-million-hubble-records)
  - [**12. La Universidad de Warwick propone la tubería de validación RAVEN, que confirma 118 nuevos exoplanetas**](#12-university-of-warwick-proposes-the-raven-validation-pipeline-confirming-118-new-exoplanets)
  - [**13. La Universidad de Warwick propone un marco de aprendizaje conjunto para predecir con gran precisión los parámetros asteroseísmicos de las estrellas δ Scuti**](#13-university-of-warwick-proposes-an-ensemble-learning-framework-to-highly-accurately-predict-asteroseismic-parameters-for-δ-scuti-stars)
  - [**14. El equipo de investigación español propone el sistema StreakMind, que utiliza IA para detectar automáticamente las tiras de satélite en imágenes astronómicas**](#14-spanish-research-team-proposes-the-streakmind-system-utilizing-ai-to-automatically-detect-satellite-streaks-in-astronomical-images)
- [**IA + Desastres naturales**](#ai-natural-disaster)
  - [**1. El aprendizaje automático predice el riesgo de subsidio de la tierra en los próximos 40 años**](#1-machine-learning-predicts-land-subsidence-risk-over-the-next-40-years)
  - [**2. Modelo de segmentación semántica SCDUNet++ utilizado para el mapeo de deslizamientos de tierra**](#2-semantic-segmentation-model-scdunet-used-for-landslide-mapping)
  - [**3. Las redes neuronales convierten imágenes solares 2D en imágenes reconstruidas en 3D**](#3-neural-networks-convert-2d-solar-images-into-3d-reconstructed-images)
  - [**4. Las redes neuronales aditivas analizan los factores que influyen en los desastres naturales**](#4-additive-neural-networks-analyze-influencing-factors-in-natural-disasters)
  - [**5. Usar inteligencia artificial explicable para analizar varios factores geográficos en Gippsland, Australia**](#5-using-explainable-ai-to-analyze-various-geographical-factors-in-gippsland-australia)
  - [**6. Modelo de previsión de inundaciones basado en el aprendizaje automático**](#6-machine-learning-based-flood-forecasting-model)
  - [**7. ED-DLSTM logra la predicción de inundaciones en zonas no controladas**](#7-ed-dlstm-achieves-flood-prediction-in-unmonitored-areas)
  - [**8. El modelo ChloroFormer proporciona una advertencia temprana de floración de algas marinas**](#8-chloroformer-model-provides-early-warning-of-marine-algal-blooms)
  - [**9. El primer modelo marino de lenguaje grande OceanGPT aceptado por ACL 2024!**](#9-the-first-marine-large-language-model-oceangpt-accepted-by-acl-2024-underwater-embodied-ai-becomes-reality)
  - [**10. La IA predice las tendencias del calentamiento global**](#10-ai-predicts-global-warming-trends)
  - [**11. Nuevo modelo GeoAI explica la distribución del flujo de calor superficial en la meseta tibetana**](#11-new-geoai-model-explains-surface-heat-flow-distribution-on-the-tibetan-plateau)
  - [**12. Medio marino "WenHai" previsión inteligente del modelo grande supera el pronóstico marítimo numérico**](#12-wenhai-marine-environment-intelligent-forecasting-large-model-outperforms-numerical-marine-forecasting)
  - [**13. La Universidad de Minnesota propone un modelo de aprendizaje automático guiado por el conocimiento, el FHNN, que realiza previsiones de inundaciones de alta precisión**](#13-university-of-minnesota-proposes-knowledge-guided-machine-learning-model-fhnn-realizing-high-precision-flood-forecasting)
  - [**14. Google lanza la versión 2 de su sistema global de previsión de inundaciones, extendiendo significativamente los tiempos de previsión válidos**](#14-google-releases-version-2-of-its-global-flood-forecasting-system-significantly-extending-valid-forecast-times)
- [**Otros**](#others)
  - [**1. TacticAI Asistente de fútbol alcanza el 90% de utilidad práctica en diseños tácticos**](#1-tacticai-football-assistant-hits-90-practical-utility-in-tactical-layouts)
  - [**2. El modelo de difusión SPDiff permite la simulación de movimientos de multitud a largo alcance.**](#2-denoising-diffusion-model-spdiff-enables-long-range-crowd-movement-simulation)
  - [**3. Las instalaciones científicas inteligentes impulsan cambios de paradigma en la investigación**](#3-intelligent-scientific-facilities-drive-paradigm-shifts-in-research)
  - [**4. DeepSymNet representa expresiones simbólicas basadas en el aprendizaje supervisado**](#4-deepsymnet-represents-symbolic-expressions-based-on-supervised-learning)
  - [**5. El modelo de lenguaje grande ChipNeMo ayuda a los ingenieros en el diseño de chips**](#5-large-language-model-chipnemo-assists-engineers-in-chip-design)
  - [**6. La AlfaGeometría puede resolver problemas geométricos**](#6-alphageometry-can-solve-geometry-problems)
  - [**7. Aprendizaje reforzado aplicado a la planificación espacial urbana**](#7-reinforcement-learning-applied-to-urban-spatial-planning)
  - [**8. Marco ChatArena: Juego de hombre lobo con grandes modelos de lenguaje**](#8-chatarena-framework-playing-werewolf-with-large-language-models)
  - [**9. Revisión: 30 académicos co-publican en Nature, una retrospectiva de 10 años que deconstruye cómo la IA remodela los paradigmas científicos**](#9-review-30-scholars-co-publish-in-nature-10-year-retrospective-deconstructs-how-ai-reshapes-scientific-paradigms)
  - [**10. Ithaca ayuda a los epígrafos en la restauración del texto, la atribución cronológica y la atribución geográfica**](#10-ithaca-assists-epigraphers-in-text-restoration-chronological-attribution-and-geographical-attribution)
  - [**11. IA en los problemas de meta-óptica hacia adelante e inverso, análisis de datos basado en sistemas meta-superficies**](#11-ai-in-forward-and-inverse-problems-of-meta-optics-data-analysis-based-on-metasurface-systems)
  - [**12. Un nuevo método de inteligencia artificial geoespacial: Regresión logística ponderada por la red neuronal geográficamente**](#12-a-new-geospatial-artificial-intelligence-method-geographically-neural-network-weighted-logistic-regression)
  - [**13. El uso de modelos de difusión para generar parámetros de redes neuronales, transformando el aprendizaje espacial-temporal de pocos disparos en un problema de pre-entrenamiento del modelo de difusión**](#13-using-diffusion-models-to-generate-neural-network-parameters-transforming-spatiotemporal-few-shot-learning-into-a-diffusion-model-pre-training-problem)
  - [**14. Últimos conocimientos de AI4S del equipo de Fei-Fei Li: 16 tecnologías innovadoras resumidas, que cubren biología/materiales/atención médica/diagnóstico**](#14-latest-ai4s-insights-from-fei-fei-lis-team-16-innovative-technologies-summarized-covering-biologymaterialshealthcarediagnostics)
  - [**15. Previsión precisa de los precios de la vivienda en Wuhan! el modelo osp-GNNWR describe con precisión los complejos procesos espaciales y los fenómenos geográficos**](#15-accurate-prediction-of-wuhan-housing-prices-osp-gnnwr-model-accurately-describes-complex-spatial-processes-and-geographical-phenomena)
  - [**16. Introducción del aprendizaje de disparos cero para liberar un modelo de difusión condicional optimizado para la descifrado de guiones óseos del oráculo**](#16-introducing-zero-shot-learning-to-release-a-conditional-diffusion-model-optimized-for-oracle-bone-script-decipherment)
  - [**17. Stanford/Apple y otras 23 instituciones publican el índice de referencia DCLM; el modelo de base funciona a la par de Llama3 8B**](#17-stanfordapple-and-23-other-institutions-release-the-dclm-benchmark-foundation-model-performs-on-par-with-llama3-8b)
  - [**18. PoCo resuelve el dilema de la heterogeneidad de las fuentes de datos, permitiendo a los robots ejecutar múltiples tareas de manera flexible**](#18-poco-solves-the-data-source-heterogeneity-dilemma-enabling-robots-to-execute-multi-tasks-flexibly)
  - [**19. Contiene 140.000 imágenes! Oracle hueso de escritura conjunto de datos ayuda al equipo a ganar ACL mejor papel premio**](#19-containing-140000-images-oracle-bone-script-dataset-helps-team-win-acl-best-paper-award)
  - [**20. Proponiendo un esquema de predicción de canales basado en LLM pre-entrenados, GPT-2 empodera la capa física de las comunicaciones inalámbricas.**](#20-proposing-a-channel-prediction-scheme-based-on-pre-trained-llms-gpt-2-empowers-the-physical-layer-of-wireless-communications)
  - [**21. El primer modelo de Red Generativa Adversarial para el bordado de múltiples puntas**](#21-the-first-generative-adversarial-network-model-for-multi-stitch-embroidery)
  - [**22. El kit de herramientas de escaneo automático rápido (FAST) adquiere información de muestra de manera eficiente.**](#22-fast-automated-scanning-toolkit-fast-efficiently-acquires-sample-information)
  - [**23. Population Dynamics Foundation Modelo PDFM de código abierto, prediciendo con precisión las tasas de desempleo y pobreza de Estados Unidos**](#23-population-dynamics-foundation-model-pdfm-open-sourced-precisely-predicting-us-unemployment-and-poverty-rates)
  - [**24. El modelo de aprendizaje profundo CatGWR estima la no estacionariedad espacial**](#24-deep-learning-model-catgwr-estimates-spatial-non-stationarity)
  - [**25. El primer sistema de intervención de ejercicios VR del mundo REVERIE remodela la salud del cerebro, cuerpo y mente de los jóvenes**](#25-worlds-first-vr-exercise-intervention-system-reverie-reshapes-youth-brain-body-mind-health)
  - [**26. Basándose en más de 176 mil datos de inscripciones, Eneas logra por primera vez la restauración arbitraria de inscripciones romanas antiguas**](#26-based-on-over-176k-inscription-data-aeneas-achieves-arbitrary-length-restoration-of-ancient-roman-inscriptions-for-the-first-time)
  - [**27. Panoramic video generation framework PanoWan también maneja la edición de vídeo de captura cero**](#27-panoramic-video-generation-framework-panowan-also-handles-zero-shot-video-editing)
  - [**28. El marco inteligente de clasificación cerámica basado en YOLOv11 integra el modelado visual y el análisis económico, logrando la clasificación de artefactos y la estimación del valor**](#28-yolov11-based-ceramic-classification-intelligent-framework-integrates-visual-modeling-and-economic-analysis-achieving-artifact-classification-and-value-estimation)
  - [**29. nacido el chip "Microwave Brain", procesando simultáneamente datos de ultra alta velocidad y señales inalámbricas con una precisión del 75% a una potencia de 176 milivatios**](#29-microwave-brain-chip-born-simultaneously-processing-ultra-high-speed-data-and-wireless-signals-with-75-accuracy-at-176-milliwatts-power)
  - [**30. Se publicó el modelo de imputación y predicción espacial-temporal STIMP, que realiza predicciones precisas de la distribución costera de clorofila-a**](#30-spatiotemporal-imputation-and-prediction-model-stimp-released-realizing-precise-predictions-of-coastal-chlorophyll-a-distribution)
  - [**31. MIT y otros logran predicciones de alta precisión de la dinámica plasmática en condiciones de pocos disparos basadas en el aprendizaje automático**](#31-mit-and-others-achieve-high-precision-prediction-of-plasma-dynamics-under-few-shot-conditions-based-on-machine-learning)
  - [**32. Reac-Discovery fusiona el modelado matemático, el aprendizaje automático y los experimentos automatizados para resolver el desafío de universalidad de los sistemas de laboratorio autónomos**](#32-reac-discovery-fuses-mathematical-modeling-machine-learning-and-automated-experiments-to-solve-the-universality-challenge-of-self-driving-laboratory-systems)
  - [**33. Se introduce el primer marco de modelado neuronal NOBLE validado por datos corticales humanos**](#33-the-first-neuron-modeling-framework-noble-validated-by-human-cortical-data-is-introduced)
  - [**34. Marco de geolocalización de imágenes LocDiff se pone en línea, permitiendo el posicionamiento global de precisión sin red y sin biblioteca de referencia**](#34-image-geolocation-framework-locdiff-goes-online-enabling-grid-free-and-reference-library-free-global-precision-positioning)
  - [**35. El aprendizaje automático combinado con py-GC-MS identifica con precisión la evidencia de vida en las rocas arqueanas**](#35-machine-learning-combined-with-py-gc-ms-precisely-identifies-evidence-of-life-in-archean-rocks)
  - [**36. El equipo de la Universidad de Tsinghua propone el método de regresión neuro-simbólica ND2 para derivar automáticamente fórmulas de dinámica de red compleja**](#36-tsinghua-university-team-proposes-neuro-symbolic-regression-method-nd-to-automatically-derive-complex-network-dynamics-formulas)
  - [**37. El equipo de la Universidad de Zhejiang propone un método de predicción de prospectividad mineral geológicamente limitado, que representa explícitamente la anisotropía de la mineralización**](#37-zhejiang-university-team-proposes-geologically-constrained-mineral-prospectivity-prediction-method-explicitly-depicting-mineralization-anisotropy)
  - [**38. El equipo de Tsinghua y UChicago publica en Nature: las herramientas de IA amplían el impacto de los científicos, pero el enfoque de la ciencia se contrae**](#38-tsinghua-and-uchicago-team-publishes-in-nature-ai-tools-expand-scientists-impact-but-contract-sciences-focus)
  - [**39. El equipo de UC propone un espectrómetro de escala de chip aumentado por IA, logrando una alta fidelidad espectral en un volumen ultra pequeño.**](#39-uc-team-proposes-ai-augmented-chip-scale-spectrometer-achieving-high-spectral-fidelity-in-an-ultra-small-volume)
  - [**40. US DOE Oak Ridge National Lab propone el método D-CHAG, reduciendo significativamente la huella de memoria para modelos de fundación multicanal**](#40-us-doe-oak-ridge-national-lab-proposes-d-chag-method-significantly-reducing-memory-footprint-for-multi-channel-foundation-models)
  - [**41. El equipo de IA polimática propone el modelo de fundación continua Walrus, estableciendo récords en el rendimiento de la simulación entre dominios**](#41-polymathic-ai-team-proposes-continuum-foundation-model-walrus-setting-records-in-cross-domain-simulation-performance)
  - [**42. EPFL propone una nueva arquitectura DYNAMI-CAL GraphNet, un GNN informado en física que modela con precisión la dinámica de múltiples cuerpos**](#42-epfl-proposes-novel-architecture-dynami-cal-graphnet-a-physics-informed-gnn-accurately-modeling-multi-body-dynamics)
  - [**43. MIT propone un nuevo método de wave-forming, logrando una reconstrucción 3D de alta precisión de objetos completamente ocultos**](#43-mit-proposes-novel-method-wave-former-achieving-high-precision-3d-reconstruction-of-completely-occluded-objects)
  - [**44. El MIT propone un marco paralelo de diseño y refinación de DRiffusion, realizando una aceleración sin pérdidas para la inferencia del modelo de difusión**](#44-mit-proposes-driffusion-draft-and-refine-parallel-framework-realizing-lossless-acceleration-for-diffusion-model-inference)
  - [**45. Technion - Instituto de Tecnología de Israel propone Tokens de tarea, lo que permite que los modelos de base de comportamiento se adapten flexiblemente a tareas específicas**](#45-technion---israel-institute-of-technology-proposes-task-tokens-allowing-behavior-foundation-models-to-flexibly-adapt-to-specific-tasks)
  - [**46. MIT y otros proponen el marco EnergAIzer, logrando una estimación rápida y precisa de la potencia de la GPU para las cargas de trabajo de IA**](#46-mit-and-others-propose-energaizer-framework-achieving-fast-and-accurate-gpu-power-estimation-for-ai-workloads)
  - [**47. UIUC propone un marco de agentes heterogéneo Eywa, rompiendo los límites de los grandes modelos centrados en el lenguaje**](#47-uiuc-proposes-heterogeneous-agent-framework-eywa-breaking-through-the-limits-of-language-centric-large-models)
  - [**48. La Universidad de Stanford y otros utilizan modelos sustitutivos de LSTM para lograr una simulación acelerada 252 veces de la óptica no lineal de segundo orden.**](#48-stanford-university-and-others-use-lstm-surrogate-models-to-achieve-252x-accelerated-simulation-of-second-order-nonlinear-optics)

## **Prefacio**

Desde 2020, los proyectos científicos representados por AlphaFold han empujado a la IA para la Ciencia (AI4S) a la etapa principal de las aplicaciones de IA. En los últimos años, desde biofarmacéuticos hasta astronomía y meteorología, y luego a disciplinas fundamentales como la química de materiales, todos se han convertido en nuevos campos de batalla para la IA.

A medida que un número cada vez mayor de talentos interdisciplinarios comienzan a aplicar tecnologías como el aprendizaje automático y el aprendizaje profundo al procesamiento de datos y la construcción de modelos en sus campos de investigación, junto con el fortalecimiento de la colaboración de equipos de investigación interdisciplinarios, las capacidades de AI4S están siendo notadas por más investigadores científicos. Sin embargo, aún no ha logrado el objetivo de aplicación a gran escala. Muchos problemas necesitan ser resueltos urgentemente, como mejorar la reproducibilidad de la investigación relacionada, reducir el umbral técnico y mejorar la calidad de los datos.

Actualmente, además de las universidades e instituciones de investigación que exploran activamente AI4S, muchos gobiernos y compañías tecnológicas líderes también han notado el potencial de la IA para revolucionar la investigación científica y han iniciado orientaciones y diseños de políticas relevantes.

Como una de las primeras comunidades en prestar atención a la IA para la Ciencia, "HyperAI" se complace en compartir los últimos avances y resultados de la investigación universalmente mientras acompaña el crecimiento de la industria. Esperamos que al interpretar documentos y políticas de vanguardia, más equipos puedan ver la ayuda que la IA aporta a la investigación científica, contribuyendo al desarrollo de la IA para la Ciencia.

Hasta la fecha, HyperAI ha interpretado y compartido casi 200 artículos. Para facilitar la recuperación, hemos clasificado los artículos por disciplina, mostrado las revistas y fechas de publicación y extraído palabras clave (equipos de investigación, investigaciones relacionadas, conjuntos de datos, etc.).

Este documento se presentará como un proyecto de código abierto. Actualizaremos continuamente los artículos de interpretación, y también damos la bienvenida a todos para presentar excelentes resultados de investigación. Si su equipo / grupo de investigación tiene necesidades de informes, puede agregar WeChat: 神经星星 (WeChat ID: Hyperai01).

## **IA + Biofarmacia**

### **1. [AdaDR supera a varios métodos de referencia en la reposicionamiento de medicamentos](https://hyper.ai/news/30434)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30434](https://hyper.ai/news/30434)
- **Equipo de investigación:** El equipo de investigación de Min Li en la Universidad Central Sur
- **Investigación relacionada:** Gdataset, Cdataset, Ldataset, conjunto de datos LRSSL, marco de GCNs, AdaDR
- **Revista científica:** Bioinformática, 2024.01
- **Enlace al artículo:**  [Reposicionamiento de fármacos con redes convolucionales de gráficos adaptativos](https://academic.oup.com/bioinformatics/article/40/1/btad748/7467059)

### **2. [IMN4NPD acelera la desreplicación de grandes racimos en redes moleculares, proporcionando anotaciones para los bucles automáticos y los nodos emparejados](https://hyper.ai/news/30363)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30363](https://hyper.ai/news/30363)
- **Equipo de investigación:** El equipo de investigación de Shao Liu en la Universidad Central del Sur
- **Investigación relacionada:** Base de datos espectral de MS/MS, base de datos de estructura, molDiscovery, NPClassifier, t-SNE
- **Revista científica:** Química analítica, 2024.02
- **Enlace al artículo:**  [IMN4NPD: Un flujo de trabajo integrado de redes moleculares para la desreplicación de productos naturales](https://doi.org/10.1021/acs.analchem.3c04746)

### **3. [Modelo generativo profundo MIDAS para la integración en mosaico de datos multiomicos de célula única](https://hyper.ai/news/29785)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29785](https://hyper.ai/news/29785)
- **Equipo de investigación:** El equipo de investigación de Xiaomin Ying en la Academia de Ciencias Médicas Militares
- **Investigación relacionada:** Conjunto de datos IPBMC, conjunto de datos completo de dogmas, conjunto de datos completo de conocimientos, MMIDAS, aprendizaje auto-supervisado, enfoques teóricos de la información, redes neuronales profundas, SGVB, datos mosaicos multicelulares de una sola célula
- **Revista científica:** Biotecnología de la naturaleza, 2024.01
- **Enlace al artículo:**  [Integración mósica y transferencia de conocimientos de datos multimodal de célula única con MIDAS](https://www.nature.com/articles/s41587-023-02040-y)

### **4. [ResGen: Un modelo de generación molecular 3D basado en cavidades proteicas](https://hyper.ai/news/29026)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29026](https://hyper.ai/news/29026)
- **Equipo de investigación:** Equipo de investigación de Tingjun Hou en la Universidad de Zhejiang
- **Investigación relacionada:** Set de datos CrossDock2020, autorregresividad global, autorregresividad atómica, modelado en múltiples escalas paralelas, SBMG. 8 veces más rápido que las técnicas de última generación.
- **Revista científica:** La inteligencia de la máquina de la naturaleza, 2023.09
- **Enlace al artículo:**  [ResGen es un modelo de generación molecular 3D consciente de bolsillo basado en el modelado multiscal paralelo](https://www.nature.com/articles/s42256-023-00712-7)

### **5. [Modelos grandes + aprendizaje automático para predicción de alta precisión de parámetros cinéticos enzimáticos](https://hyper.ai/news/29000)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29000](https://hyper.ai/news/29000)
- **Equipo de investigación:** El equipo de investigación de Xiaozhou Luo en CAS
- **Investigación relacionada:** conjunto de datos kcat/Km, conjunto de datos constante de Michaelis, conjunto de datos de pH y temperatura, conjunto de datos DLKcat, marco UniKP, ProtT5-XL-UniRef50, modelo SMILES Transformer, modelos de conjunto, Bosque aleatorio, árboles extremadamente aleatorios, modelos de regresión lineal
- **Revista científica:** Comunicaciones de la naturaleza, 2023.12
- **Enlace al artículo:**  [UniKP: un marco unificado para la predicción de los parámetros cinéticos de las enzimas](https://www.nature.com/articles/s41467-023-44113-1)

### **6. [El MIT utiliza el aprendizaje profundo para descubrir nuevos antibióticos](https://hyper.ai/news/28886)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28886](https://hyper.ai/news/28886)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** Base de datos de Mcule, base de datos de Broad Institute, Graph Neural Network Chemprop, aprendizaje profundo.
- **Revista científica:** Naturaleza, 2023.12
- **Enlace al artículo:**  [Descubrimiento de una clase estructural de antibióticos con aprendizaje profundo explicable](https://www.nature.com/articles/s41586-023-06887-8)

### **7. [Las redes neuronales descifran la selectividad de acoplamiento de proteínas GPCR-G](https://hyper.ai/news/28361)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28361](https://hyper.ai/news/28361)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Florida
- **Investigación relacionada:** Las redes neuronales de clasificación binaria, el aprendizaje automático, los modelos de aprendizaje profundo sin supervisión.
- **Revista científica:** Informes de células, 2023.09
- **Enlace al artículo:**  [Reglas y mecanismos que rigen la selectividad de acoplamiento de proteínas G de los GPCR](https://doi.org/10.1016/j.celrep.2023.113173)

### **8. [Macformer macrocicliza el medicamento acíclico fedratinib](https://hyper.ai/news/28189)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28189](https://hyper.ai/news/28189)
- **Equipo de investigación:** Grupo de Investigación de Honglin Li en la Universidad de Ciencia y Tecnología de China Oriental
- **Investigación relacionada:** Datos de base de datos ZINC, base de datos ChEMBL, modelos de aprendizaje profundo, arquitectura de transformadores, Macformer
- **Revista científica:** Comunicación sobre la naturaleza, 2023.07
- **Enlace al artículo:**  [Macrociclización de moléculas lineales mediante aprendizaje profundo para facilitar el descubrimiento de candidatos a fármacos macrociclicos](https://www.nature.com/articles/s41467-023-40219-8)

### **9. [Red de regresión + CGMD predice propiedades de autoensamblaje de decenas de miles de millones de péptidos](https://hyper.ai/news/26408)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/26408](https://hyper.ai/news/26408)
- **Equipo de investigación:** El grupo de investigación de Wenbin Li en la Universidad de Westlake
- **Investigación relacionada:** Muestreo de hipercubo latino, modelo CGMD, modelo de predicción AP, modelo Transformer, MLP, TRN. Obtuvo el AP de pentapeptidos y decapéptidos.
- **Revista científica:** Ciencia avanzada, 2023.09
- **Enlace al artículo:**  [El aprendizaje profundo permite el descubrimiento de péptidos autoensamblados con más de 10 billones de secuencias](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202301544)

### **10. [El aprendizaje no supervisado predice 71 millones de mutaciones genéticas](https://hyper.ai/news/26154)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/26154](https://hyper.ai/news/26154)
- **Equipo de investigación:** Equipo de investigación de Google DeepMind
- **Investigación relacionada:** ClinVar conjunto de datos, AlphaFold, aprendizaje de etiquetas débiles, aprendizaje sin supervisión, AlphaMissense
- **Revista científica:** Ciencia, 2023.09
- **Enlace al artículo:**  [Previsión exacta de los efectos de la variante de error de sentido en todo el proteoma con AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492)

### **11. [Análisis de olor AI desarrollado basado en las redes neuronales gráficas (GNN)](https://hyper.ai/news/25952)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/25952](https://hyper.ai/news/25952)
- **Equipo de investigación:** Osmo, una spin-off de Google Research
- **Investigación relacionada:** Base de datos GS-LF, GNN, algoritmo de optimización bayesiano. Superó a los humanos en el 53% de las moléculas químicas y el 55% de los juicios de descriptores de olor.
- **Revista científica:** Ciencia, 2023.08
- **Enlace al artículo:**  [Un mapa principal del olfato unifica diversas tareas en la percepción olfativa](https://www.science.org/doi/full/10.1126/science.ade4401)

### **12. [Las redes neurales gráficas exploran ingredientes seguros y altamente eficaces contra el envejecimiento](https://hyper.ai/news/25822)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/25822](https://hyper.ai/news/25822)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** La tasa verdadera positiva del modelo Chemprop fue del 11,6%, superior al 1,9% de la detección manual.
- **Revista científica:** Comunicaciones de la naturaleza, 2023.05
- **Enlace al artículo:**  [Descubrimiento de senolíticos de moléculas pequeñas con redes neuronales profundas](https://www.nature.com/articles/s43587-023-00415-z)

### **13. [El aprendizaje automático analiza cuantitativamente la cantidad y la ubicación de la liberación de dopamina](https://hyper.ai/news/25153)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/25153](https://hyper.ai/news/25153)
- **Equipo de investigación:** Equipo de investigación de la Universidad de California, Berkeley
- **Investigación relacionada:** SVM, RF, aprendizaje automático. La precisión para determinar la intensidad de estimulación alcanzó el 0,832, y la precisión para la región cerebral de liberación de dopamina fue del 0,708.
- **Revista científica:** ACS Neurociencia Química, 2023.06
- **Enlace al artículo:**  [Identificación de las firmas neuronales de la señalización de dopamina con aprendizaje automático](https://pubs.acs.org/doi/full/10.1021/acschemneuro.3c00001)

### **14. [El aprendizaje automático descubre tres fármacos antienvejecimiento](https://hyper.ai/news/24578)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/24578](https://hyper.ai/news/24578)
- **Equipo de investigación:** El Dr. James L. Kirkland y el equipo de la Clínica Mayo
- **Investigación relacionada:** Aprendizaje automático, modelo de bosque aleatorio (RF), validación cruzada de 5 veces.
- **Revista científica:** Comunicaciones de la naturaleza, 2023.06
- **Enlace al artículo:**  [Descubrimiento de Senolytics utilizando el aprendizaje automático](https://www.nature.com/articles/s41467-023-39120-1)

### **15. [Las pantallas de aprendizaje profundo para los nuevos antibióticos que inhiben Acinetobacter baumannii](https://hyper.ai/news/24499)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/24499](https://hyper.ai/news/24499)
- **Equipo de investigación:** Equipos de investigación de la Universidad McMaster y el MIT
- **Investigación relacionada:** La sub-biblioteca de detección de alto rendimiento del Broad Institute, aprendizaje automático, aprendizaje profundo. Se examinaron alrededor de 7.500 moléculas, descubriendo un compuesto antibacteriano llamado abaucina.
- **Revista científica:** Biología química de la naturaleza, 2023.05
- **Enlace al artículo:**  [Descubrimiento guiado por el aprendizaje profundo de un antibiótico dirigido a Acinetobacter baumannii](https://www.nature.com/articles/s41589-023-01349-8#access-options)

### **16. [Modelos de aprendizaje automático aplicados para predecir la impresión de biotintas](https://hyper.ai/news/24237)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/24237](https://hyper.ai/news/24237)
- **Equipo de investigación:** Equipos de investigación de la Universidad de Santiago de Compostela y UCL
- **Investigación relacionada:** Modelos de aprendizaje automático, ANN, SVM, RF, kappa, R2, MAE. La precisión alcanzó el 97,22%.
- **Revista científica:** Jornal Internacional de Farmacéutica: X, 2023.12
- **Enlace al artículo:**  [Predecir los resultados de la impresión de inyección de tinta farmacéutica mediante aprendizaje automático](https://www.sciencedirect.com/science/article/pii/S2590156723000257)

### **17. [El aprendizaje automático diferencia las células madre pluripotentes](https://hyper.ai/news/23940)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/23940](https://hyper.ai/news/23940)
- **Equipo de investigación:** Los grupos de investigación de Yang Zhao y Yu Zhang en la Universidad de Pekín, conjuntamente con el grupo de investigación de Yiyan Liu en la Universidad de Beijing Jiaotong
- **Investigación relacionada:** Imágenes de células en vivo, aprendizaje automático, modelos con poca supervisión, modelo de aprendizaje profundo de pix2pix.
- **Revista científica:** Descubrimiento de células, 2023.06
- **Enlace al artículo:**  [Una estrategia de aprendizaje automático basada en imágenes de células vivas para reducir la variabilidad en los sistemas de diferenciación de PSC](https://www.nature.com/articles/s41421-023-00543-1)

### **18. [El modelo de aprendizaje automático predice la tasa de liberación de fármacos de inyectables de acción prolongada](https://hyper.ai/news/33892)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33892](https://hyper.ai/news/33892)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Toronto
- **Investigación relacionada:** MLR, Lasso, PLS, DT, RF, LGBM, XGB, AutoNGB, SVR, k-NN, NN, validación cruzada anidada, algoritmo de agrupamiento de vecino más lejano.
- **Revista científica:** Comunicaciones de la naturaleza, 2023.01
- **Enlace al artículo:**  [Modelos de aprendizaje automático para acelerar el diseño de inyectables poliméricos de acción larga](https://www.nature.com/articles/s41467-022-35343-w)

### **19. [El algoritmo de aprendizaje automático predice efectivamente las propiedades antimalarias de las plantas](https://hyper.ai/news/33883)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33883](https://hyper.ai/news/33883)
- **Equipo de investigación:** El equipo de investigación de los Jardines Botánicos Reales, Kew y la Universidad de St Andrews
- **Investigación relacionada:** Logit, SVC, XGB, BNN, algoritmos GridSearchCV, validación cruzada estratificada 10 veces, iteraciones de la cadena de Markov Monte Carlo.
- **Revista científica:** Fronteras en ciencias vegetales, 2023.05
- **Enlace al artículo:**  [El aprendizaje automático mejora la predicción de las plantas como fuentes potenciales de antimalarios](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10248027)

### **20. [El método de ensamblado de aprendizaje automático predice la inmunogenicidad de los fragmentos de proteínas virales](https://hyper.ai/news/30786)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30786](https://hyper.ai/news/30786)
- **Equipo de investigación:** El equipo de investigación de Jing Li en la Universidad de Beihang
- **Investigación relacionada:** Base de datos de proteínas UniProt, base de datos de Protegen, enfoque de aprendizaje automático conjunto VirusImmu, RF, XGBoost, kNN, validación cruzada de muestras aleatorias.
- **Revista científica:** bioRxiv, 2023.11
- **Enlace al artículo:**  [VirusImmu: un nuevo enfoque de aprendizaje automático conjunto para la predicción de inmunogenicidad viral](https://www.biorxiv.org/content/10.1101/2023.11.23.568426v1)

### **21. [IA generativa utilizada para desarrollar nuevos antibióticos](https://hyper.ai/news/31421)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31421](https://hyper.ai/news/31421)
- **Equipo de investigación:** Equipo de la Universidad de McMaster y la Universidad de Stanford
- **Investigación relacionada:** Biblioteca Pharmakon-1760, base de datos de Drug Repurposing Hub, conjunto de detección de pequeñas moléculas sintéticas, Monte Carlo Tree Search, modelo generativo de IA SyntheMol.
- **Revista científica:** La inteligencia de la máquina de la naturaleza, 2024.03
- **Enlace al artículo:**  [Inteligencia artificial generativa para diseñar y validar antibióticos fácilmente sintetizables y estructuralmente nuevos](https://www.nature.com/articles/s42256-024-00809-7 )

### **22. [Sistema automatizado de seguimiento multidimensional de partículas únicas de alta velocidad basado en aprendizaje profundo](https://hyper.ai/news/31341)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31341](https://hyper.ai/news/31341)
- **Equipo de investigación:** El equipo del profesor Ning Fang en la Universidad de Xiamen
- **Investigación relacionada:** Dispositivos de imagen multidimensionales, imagen de plano de doble foco, microscopía de paralaje, equipos de imagen multidimensionales, modelos de red neuronal convolucionaria, resistencia al ruido y robustez.
- **Revista científica:** La inteligencia de la máquina de la naturaleza, 2024.03
- **Enlace al artículo:**  [El seguimiento automático de partículas únicas multidimensionales en células vivas con ayuda de aprendizaje profundo](https://doi.org/10.1021/acs.nanolett.3c04870)

### **23. [ProEnsemble marco de aprendizaje automático: optimización de las combinaciones de promotores de trayectorias evolutivas](https://hyper.ai/news/30594)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30594](https://hyper.ai/news/30594)
- **Equipo de investigación:** El equipo de Xiaozhou Luo en CAS
- **Investigación relacionada:** Biología sintética, epistasis genética, plataformas de automatización, validación cruzada de 10 veces, modelos de conjunto, Regresor de aumento de gradiente, Regresor de recta, Regresor de gradiente, Chasis universal para la síntesis eficiente de flavonoides.
- **Revista científica:** Ciencia avanzada, 2024.02
- **Enlace al artículo:**  [El camino de la evolución a través de una estrategia de cuello de botella-descuello de botella y el equilibrio de flujo ayudado por el aprendizaje automático](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202306935)

### **24. [Red neural gráfica consciente del microambiente ProtLGN guía la evolución proteica dirigida](https://hyper.ai/news/32246)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32246](https://hyper.ai/news/32246)
- **Equipo de investigación:** El grupo de investigación de Liang Hong en la Universidad de Shanghai Jiao Tong
- **Investigación relacionada:** Red neuronal de gráficos conscientes del microambiente, redes de desinfección de gráficos ligeros, redes neuronales de grafos pre-entrenamiento auto-supervisadas, equivalentes. Más del 40% de las proteínas mutantes de un solo punto diseñadas por PROTLGN superaron a sus homólogos de tipo salvaje.
- **Revista científica:** JURNAL DE INFORMACIÓN Y MODELLAJE CÍMICO, 2024.04
- **Enlace al artículo:**  [Ingeniería de proteínas con gráficos ligeros que denigran las redes neuronales](https://pubs.acs.org/doi/10.1021/acs.jcim.4c00036)

### **25. [Modelo de aprendizaje profundo AlphaPPIMd: exploración de conjuntos conformacionales de complejos proteico-proteico](https://hyper.ai/news/32435)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32435](https://hyper.ai/news/32435)
- **Equipo de investigación:** El equipo de Jianmin Wang en la Universidad Yonsei
- **Investigación relacionada:** Aprendizaje profundo, inteligencia artificial generativa, transformador, aprendizaje de redes neuronales generativas, dinámica molecular, conjunto de trayectorias complejas barnase-barstar, banco de datos de proteínas, modelo AlphaPPIMd, mecanismo de autoatención, módulo de optimización de características, puntajes de atención, modelo total. La precisión media de entrenamiento fue de 0,995, y la precisión media de validación fue de 0,999.
- **Revista científica:** Diario de la teoría química y la computación, 2024.05
- **Enlace al artículo:**  [Exploración de los conjuntos conformacionales del complejo proteico-proteico con modelo generativo basado en transformadores](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00255)

### **26. [El nuevo degradador de proteínas de supresor tumoral dp53m inhibe la proliferación de células cancerosas](https://hyper.ai/news/32527)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32527](https://hyper.ai/news/32527)
- **Equipo de investigación:** El equipo del profesor Sijin Wu en la Facultad de Farmacia Huihu de la Universidad Xi'an Jiaotong-Liverpool, y el equipo del profesor Songbo Xie y el profesor Diansheng Zhong en el Hospital General de la Universidad Médica de Tianjin
- **Investigación relacionada:** Simulación MD, método post-SELEX guiado por acoplamiento molecular iterativo. dp53m reconoce específicamente la proteína p53-R175H y la degrada.
- **Revista científica:** El boletín científico, 2024.05
- **Enlace al artículo:**  [PROTAC basado en un aptamer de ADN diseñado para la terapia precisa del cáncer de p53-R175H causado por mutantes de punto caliente](https://www.sciencedirect.com/science/article/pii/S2095927324003517)

### **27. [CVPR Mejor documento estudiantil! El modelo multimodal BioCLIP logra el aprendizaje a cero disparos](https://hyper.ai/news/32544)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32544](https://hyper.ai/news/32544)
- **Equipo de investigación:** El equipo de Jiaman Wu en la Universidad Estatal de Ohio
- **Investigación relacionada:** Set de datos de imágenes biológicas TreeOfLife-10M, modelos multimodal, visión por ordenador, codificador de visión, codificador de texto, modelo de lenguaje autoregresista.
- **Revista científica:** CVPR 2024, 2024.02
- **Enlace al artículo:**  [BIoCLIP: Un modelo de la Fundación Visión para el Árbol de la Vida](https://openaccess.thecvf.com/content/CVPR2024/html/Stevens_BioCLIP_A_Vision_Foundation_Model_for_the_Tree_of_Life_CVPR_2024_paper.html)

### **28. [100 millones de parámetros! Modelo de base celular scFoundation modela 20.000 genes simultáneamente](https://hyper.ai/news/32623)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32623](https://hyper.ai/news/32623)
- **Equipo de investigación:** El profesor Xuegong Zhang (Universidad de Tsinghua), el profesor Jianzhu Ma (Tsinghua AIR) y el doctor Le Song (BioMap)
- **Investigación relacionada:** Modelo de base de célula de IA, datos omicos humanos de célula única DISCO, bases de datos EMBL-EBI, conjuntos de datos GEO, conjuntos de datos del portal de célula única, conjuntos de datos HCA, conjuntos de datos hECA, transformador, estructura de codificador-decodificador asimétrica, módulos vectoriales, modelado RDA.
- **Revista científica:** Métodos de la naturaleza, 2024.06
- **Enlace al artículo:**  [Modelo de base a gran escala sobre la transcriptomía de células únicas](https://www.nature.com/articles/s41592-024-02305-7)

### **29. [Aceptado por ICML, el modelo de lenguaje proteico ESM-AA supera al SOTA tradicional](https://hyper.ai/news/32674)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32674](https://hyper.ai/news/32674)
- **Equipo de investigación:** El profesor Hao Zhou (Universidad de Tsinghua), conjuntamente con la Universidad de Pekín, la Universidad de Nanjing y Shuimu BioSciences
- **Investigación relacionada:** El conjunto de datos de proteínas AlphaFold DB, el conjunto de datos de proteínas Dp y un conjunto de datos molecular Dm, descompresión, modelado de lenguaje enmascarado a escala múltiple.
- **Revista científica:** CICML 2024, 2024.06
- **Enlace al artículo:**  [ESM All-Atom: Modelo de lenguaje proteico a escala múltiple para el modelado molecular unificado](https://icml.cc/virtual/2024/poster/35119)

### **30. [El algoritmo SPACE publicado en la sub-revista Cell! capacidades de descubrimiento de módulos de tejido conducen a herramientas similares](https://hyper.ai/news/32738)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32738](https://hyper.ai/news/32738)
- **Equipo de investigación:** El grupo de Qiangfeng Zhang en la Universidad de Tsinghua
- **Investigación relacionada:** Transcriptomía espacial, conjunto de datos PLA del ratón STARmap, conjunto de datos AB del ratón MERFISH, conjunto de datos WB del ratón MERFISH, conjunto de datos Xenium humano BC, conjunto de datos NSCLC humano CosMx, conjunto de datos del cerebro humano Visium, codificadores, decodificadores de gráficos de proximidad, decodificadores de expresión génica, proximidad espacial, aprendizaje auto supervisado.
- **Revista científica:** Sistemas celulares, 2024.06
- **Enlace al artículo:**  [Descubrimiento de módulos de tejido en datos de transcriptomía espacial de resolución de célula única a través de la incorporación celular consciente de la interacción celular](https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00124-8)

### **31. [Nuevos avances basados en AlphaFold revelan una diversidad dinámica de proteínas](https://hyper.ai/news/33075)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33075](https://hyper.ai/news/33075)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** Tecnología de combinación de flujos, modelos de lenguaje proteico, redes neuronales, AlphaFold, ESMFold.
- **Revista científica:** CICML 2024, 2024.06
- **Enlace al artículo:**  [AlphaFold se encuentra con la combinación de flujo para generar conjuntos de proteínas](https://openreview.net/forum?id=rs8Sh2UASt)

### **32. [P450Difusión: Método de diseño de nuevo para enzimas P450 desarrollado sobre la base de modelos de difusión](https://hyper.ai/news/33057)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33057](https://hyper.ai/news/33057)
- **Equipo de investigación:** El equipo de Huifeng Jiang y Jian Cheng en el Instituto de Biotecnología Industrial de Tianjin, CAS
- **Investigación relacionada:** Evolución dirigida, modelos de difusión, aprendizaje profundo, modelos probabilísticos de difusión, anclaje de tres puntos, modelos de difusión de ajuste fino, pre-entrenamiento. Mejora de la capacidad catalítica en 3,5 veces.
- **Revista científica:** Investigación, 2024.07
- **Enlace al artículo:**  [Diseño de la enzima citocromo P450 mediante la restricción del bolsillo catalítico en un modelo de difusión](https://spj.science.org/doi/10.34133/research.0413)

### **33. [Las redes neuronales de grafos equivalentes utilizadas para la predicción del sitio de unión de proteínas objetivo, aumentando el rendimiento en un 20%](https://hyper.ai/news/32957)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32957](https://hyper.ai/news/32957)
- **Equipo de investigación:** Equipo de investigación de la Escuela de Inteligencia Artificial Gaoling, Universidad Renmin de China
- **Investigación relacionada:** E(3) redes neuronales de grafos equivalentes, redes neuronales convolucionales, marco EquiPocket, conjunto de datos scPDB, conjunto de datos PDBbind, conjunto de datos COACH 420, conjunto de datos HOLO4K, módulos de modelado geométrico local, módulos de modelado estructural global, módulos de transmisión de información superficial.
- **Revista científica:** CICML 2024, 2024.07
- **Enlace al artículo:**  [EquiPocket: una red neuronal de gráficos geométricos E(3)-equivalente para predicción de sitios ligando ligand](https://openreview.net/forum?id=1vGN3CSxVs)

### **34. [20 puntos de datos experimentales crean un hito de la proteína de IA! FSFP optimiza efectivamente los modelos de pre-entrenamiento de proteínas](https://hyper.ai/news/32822)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32822](https://hyper.ai/news/32822)
- **Equipo de investigación:** Grupo del profesor Liang Hong en la Universidad de Shanghai Jiao Tong, junto con el equipo de Pan Tan en el Laboratorio de Inteligencia Artificial de Shanghai
- **Investigación relacionada:** Conjunto de datos de mutación de proteínas ProteinGym, modelos de lenguaje de proteínas pre-entrenados, aprendizaje de meta-transferencia, aprendizaje para clasificar (LTR), ajuste fino eficiente de parámetros, tecnología LTR, estrategia de entrenamiento FSFP, métodos de meta-aprendizaje modelo-agnóstico.
- **Revista científica:** Comunicaciones de la naturaleza, 2024.07
- **Enlace al artículo:**  [Mejora de la eficiencia de los modelos de lenguaje proteico con un mínimo de datos de laboratorio en humedad mediante el aprendizaje a pocos disparos](https://doi.org/10.1038/s41467-024-49798-6)

### **35. [El modelo de aprendizaje profundo transferible identifica múltiples tipos de modificaciones de ARN, reduciendo significativamente los costos computacionales](https://hyper.ai/news/32745)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32745](https://hyper.ai/news/32745)
- **Equipo de investigación:** Grupo del profesor asociado Xiang Yu en la Universidad de Shanghai Jiao Tong, junto con el equipo de Jun Yang/Hongxia Wang en el Jardín Botánico de Shanghai Chenshan
- **Investigación relacionada:** Modelo de aprendizaje profundo transferible TandemMod, conjunto de datos de transcripción in vitro ELIGOS, conjunto de datos Curlcake, conjunto de datos de epitranscripto in vitro IVET, 1D CNN, módulos Bi-LSTM, mecanismos de atención, clasificadores totalmente conectados.
- **Revista científica:** Comunicaciones de la naturaleza, 2024.05
- **Enlace al artículo:**  [El aprendizaje de transferencia permite la identificación de múltiples tipos de modificaciones de ARN mediante la secuenciación directa de ARN de nanoporos](https://www.nature.com/articles/s41467-024-48437-4)

### **36. [InstructProtein: Alinear el lenguaje proteico con el lenguaje humano mediante instrucciones de conocimiento](https://hyper.ai/news/33697)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33697](https://hyper.ai/news/33697)
- **Equipo de investigación:** El equipo de Huajun Chen y Qiang Zhang en la Universidad de Zhejiang
- **Investigación relacionada:** LLM, conjuntos de datos de instrucción de conocimiento de proteínas, conjuntos de datos de Ontología Genética (GO), InstructProtein, gráficos de conocimiento, predicción de localización de proteínas, predicción de función de proteínas, predicción de capacidad de unión de iones metálicos de proteínas.
- **Revista científica:** ACL 2024, 2023.10
- **Enlace al artículo:**  [InstructProtein: Alinear el lenguaje humano y el lenguaje proteico mediante la instrucción del conocimiento](https://arxiv.org/abs/2310.03269)

### **37. [El marco de generación de proteínas a texto ProtT3 permite la interpretación transmodal de datos de proteínas e información de texto](https://hyper.ai/news/33546)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33546](https://hyper.ai/news/33546)
- **Equipo de investigación:** Xiang Wang en el USTC, junto con el equipo de Zhiyuan Liu en el NUS y investigadores de la Universidad de Hokkaido
- **Investigación relacionada:** Proyectores transmódales, modelos de lenguaje proteico, conjuntos de datos Swiss-Prot y ProteinKG25, conjunto de datos PDB-QA.
- **Revista científica:** ACL 2024, 2023.05
- **Enlace al artículo:**  [ProtT3: Generación de proteínas a texto para la comprensión de proteínas basada en texto](https://arxiv.org/abs/2405.12564)

### **38. [El modelo CPDiffusion diseña proteínas funcionales totalmente automáticamente a un coste ultra bajo](https://hyper.ai/news/34692)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34692](https://hyper.ai/news/34692)
- **Equipo de investigación:** Grupo de Liang Hong en la Universidad de Shanghai Jiao Tong
- **Investigación relacionada:** Ingeniería de proteínas, marco de modelos probabilísticos de difusión CPDiffusión, aminoácidos, redes neuronales gráficas, diseño de fármacos auxiliares, modelos de lenguaje de proteínas, conjunto de datos CATH 4.2.
- **Revista científica:** Descubrimiento de células, 2024.09
- **Enlace al artículo:**  [Un modelo de difusión de proteínas condicionales genera secuencias de endonucleasa programables artificiales con mayor actividad.](https://www.nature.com/articles/s41421-024-00728-2)

### **39. [Un nuevo método de detección de homólogos proteicos basado en modelos de lenguaje proteico y técnicas de extracción densa](https://hyper.ai/news/34225)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34225](https://hyper.ai/news/34225)
- **Equipo de investigación:** Yu Li (CUHK), Siqi Sun (Fudan University & Shanghai AI Lab), y Mark Gerstein (Universidad de Yale)
- **Investigación relacionada:** Ingeniería de proteínas, modelos de lenguaje proteico, técnicas de recuperación densa, detectores de homólogos densos, modelo híbrido DHR-meta, conjunto de datos UR90, algoritmo JackHMMER, conjuntos de datos BFD/MGnify, método DHR. Mejora de la sensibilidad de detección de homólogos proteicos en un 56%.
- **Revista científica:** Biotecnología de la naturaleza, 2024.08
- **Enlace al artículo:**  [Detección rápida y sensible de homólogos de proteínas mediante la extracción profunda y densa](https://doi.org/10.1038/s41587-024-02353-6)

### **40. [AlphaProteo diseña de manera eficiente los ligandos de proteínas objetivo, aumentando la afinidad en 300 veces](https://hyper.ai/news/34214)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34214](https://hyper.ai/news/34214)
- **Equipo de investigación:** DeepMind, Instituto Francis Crick
- **Investigación relacionada:** Ingeniería de proteínas, modelos de lenguaje de proteínas, diseño de fármacos de IA, proteínas objetivo, herramientas de IA, modelo de aprendizaje automático AlphaProteo, diseño de vinculante de proteínas VEGF-A, generador, filtro.
- **Revista científica:** Mente profunda, 2024.09
- **Enlace al artículo:**  [AlphaProteo genera nuevas proteínas para la investigación en biología y salud](https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)

### **41. [Modelo de lenguaje proteico novedoso DePLM supera a los modelos SOTA en la predicción de efectos de mutación](https://hyper.ai/news/34954)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34954](https://hyper.ai/news/34954)
- **Equipo de investigación:** El profesor Huajun Chen y el Dr. Qiang Zhang en la Universidad de Zhejiang
- **Investigación relacionada:** Denoying Protein Language Model (DePLM), ProteinGym Deep Mutational Scanning (DMS), conjuntos de datos DMS, validación cruzada aleatoria, experimentos de generalización, extensión de modelos de difusión utilizando información de clasificación para denegar información evolutiva, clasificación de trayectorias generadas por algoritmos, modelo PromptProtein.
- **Revista científica:** NeurIPS 2024, 2024.11
- **Enlace al artículo:**  [DePLM: Denunciar los modelos de lenguaje proteico para la optimización de la propiedad](https://neurips.cc/virtual/2024/poster/95517)

### **42. [Modelo generativo geométrico profundo DynamicBind permite predicción dinámica de acoplamiento de proteínas](https://hyper.ai/news/34894)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34894](https://hyper.ai/news/34894)
- **Equipo de investigación:** Grupo de Shuangjia Zheng en la Universidad de Shanghai Jiao Tong, Galixir, Universidad de Sun Yat-sen, Universidad de Rice
- **Investigación relacionada:** Conjunto de datos PDBbind, conjunto de pruebas MDT, modelos de difusión profunda, tecnología de red neuronal geométrica equivariante, estructuras de formato PDB, formato de ligando de moléculas pequeñas, módulos de puntuación contact-LDDT (cLDDT), estructuras AlphaFold, módulos de predicción de afinidad, IA generativa.
- **Revista científica:** Comunicaciones de la naturaleza, 2024.02
- **Enlace al artículo:**  [DynamicBind: predicción de la estructura compleja ligando-específica de proteínas-ligando con un modelo generativo equivariante profundo](https://www.nature.com/articles/s41467-024-45461-2)

### **43. [El modelo de lenguaje de descubrimiento de drogas Y-Mol supera completamente a LLaMA2](https://hyper.ai/news/35572)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35572](https://hyper.ai/news/35572)
- **Equipo de investigación:** Universidad de Hunan, Universidad del Sur Central, Universidad Normal de Hunan, Universidad de Xiangtan
- **Investigación relacionada:** LLM biomédico multiscala guiado por conocimientos Y-Mol, PubMed corpus de texto, conjunto de datos de referencia de DrugBank, conjunto de datos de referencia de DrugCentral, LLM LLaMA2-7b.
- **Revista científica:** ArXiv, 2024.10
- **Enlace al artículo:**  [Y-Mol: un modelo de lenguaje grande para el desarrollo de medicamentos basado en conocimientos biomédicos a gran escala](https://doi.org/10.48550/arXiv.2410.11550)

### **44. [Modelo universal de plegamiento molecular inverso UniIF complementa aún más AlphaFold 3](https://hyper.ai/news/35781)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35781](https://hyper.ai/news/35781)
- **Equipo de investigación:** Equipo del Centro de Investigación de la Industria del Futuro de la Universidad de Westlake
- **Investigación relacionada:** Datos del conjunto CATH4.3, modelo ESM2, conjunto CASP15, nuevas estructuras de cristal, conjunto de datos NovelPro, conjunto de datos RDesign, conjunto de datos CHILI-3K, marcos predefinidos basados en aminoácidos y nucleótidos, GNN, Featurizer Geométrico, Atención de Block Graph.
- **Revista científica:** NeurIPS 2024, 2024.05
- **Enlace al artículo:**  [UniIF: Plegamiento inverso de moléculas unificadas](https://arxiv.org/abs/2405.18968)

### **45. [Modelo de lenguaje proteico pre-entrenado ProSST integra más eficazmente la información sobre la estructura de las proteínas](https://hyper.ai/news/35874)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35874](https://hyper.ai/news/35874)
- **Equipo de investigación:** El Grupo del Prof. Liang Hong y Bingxin Zhou en la Universidad de Shanghai Jiao Tong, conjuntamente con Pan Tan en el Laboratorio de Inteligencia Artificial de Shanghai
- **Investigación relacionada:** Modelo de lenguaje de proteínas pre-entrenado ProSST, Transformer, mecanismos de atención desentrañados, cuantizadores de estructura de proteínas, conjunto de datos AlphaFoldDB, conjunto de datos CATH43-S40, conjunto de datos de estructura local CATH43-S40, referencia ProteinGYM. Superó a los modelos existentes en la predicción de la estabilidad térmica, unión de iones metálicos, localización de proteínas y anotaciones GO.
- **Revista científica:** NeurIPS 2024, 2024.05
- **Enlace al artículo:**  [ProSST: Modelado del lenguaje proteico con estructura cuantizada y atención desentrañada](https://neurips.cc/virtual/2024/poster/96656)

### **46. [El marco de unión de peptidos macrociclicos RFpeptidos ofrece nuevas posibilidades para las proteínas no farmacológicas](https://hyper.ai/news/36150)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36150](https://hyper.ai/news/36150)
- **Equipo de investigación:** El equipo de David Baker en el Instituto de Diseño de Proteínas, UW
- **Investigación relacionada:** Tecnología basada en el modelo de difusión de RFpeptidos, utilizando RoseTTAFold modificado y RFdiffusion con codificación de posición relativa cíclica para generar espaldas macrocíclicas precisas, desarrollo de fármacos, AlphaFold, ProteinMPNN, Rosetta Relax. Permite un diseño específico y eficiente de macrociclos.
- **Revista científica:** bioRxiv, 2024.11
- **Enlace al artículo:**  [Diseño preciso de novo de macrociclos de unión a proteínas de alta afinidad utilizando el aprendizaje profundo](https://doi.org/10.1101/2024.11.18.622547)

### **47. [El modelo de fundación del genoma Evo permite la predicción y generación de escalas moleculares a genomas](https://hyper.ai/news/36266)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36266](https://hyper.ai/news/36266)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Stanford y el Instituto Arc
- **Investigación relacionada:** Modelo de base del genoma Evo, arquitectura de StripedHyena. Evo puede predecir, generar y diseñar secuencias del genoma enteras.
- **Revista científica:** Ciencia, 2024.11
- **Enlace al artículo:**  [Modelado y diseño de secuencias de escala molecular a genoma con Evo](https://www.science.org/doi/10.1126/science.ado9336)

### **48. [DigFrag segmenta con precisión los fragmentos moleculares utilizando IA y genera 44 moléculas de fármacos/pesticidas](https://hyper.ai/news/36346)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36346](https://hyper.ai/news/36346)
- **Equipo de investigación:** El profesor Guangfu Yang y el equipo del profesor asociado Fan Wang en la Universidad Normal de China Central
- **Investigación relacionada:** Plataforma MolFrag, base de datos PADFrag, mecanismos de atención a los gráficos, método de fragmentación digital DigFrag, marco DeepFMPO, arquitecturas de redes neuronales gráficas, marco Actor-Critic.
- **Revista científica:** Química de las comunicaciones, 2024.11
- **Enlace al artículo:**  [DigFrag como método de fragmentación digital utilizado para el diseño de fármacos basados en inteligencia artificial](https://doi.org/10.1038/s42004-024-01346-5)

### **49. [Secuencia de proteínas modelo de lenguaje grande método de pre-entrenamiento PRIME](https://hyper.ai/news/36363)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36363](https://hyper.ai/news/36363)
- **Equipo de investigación:** El grupo del profesor Liang Hong en la Universidad de Shanghai Jiao Tong, el laboratorio de IA de Shanghai, la Universidad de ShanghaiTech, el Colegio Médico de Hangzhou
- **Investigación relacionada:** Secuencia de proteínas Método de pre-entrenamiento LLM PRIME, base de datos ProteomeAtlas, base de datos UniProt, conjunto de datos ProteinGym, método de pre-entrenamiento MLM, superando los métodos actuales de SOTA.
- **Revista científica:** Avances de la ciencia, 2024.11
- **Enlace al artículo:**  [Un modelo general de lenguaje orientado a la temperatura para diseñar proteínas de mayor estabilidad y actividad](https://www.science.org/doi/10.1126/sciadv.adr2641)

### **50. [El método de aprendizaje profundo auto-supervisado revoluciona la reconstrucción 3D en la microscopía cryoelectrónica](https://hyper.ai/news/36645)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36645](https://hyper.ai/news/36645)
- **Equipo de investigación:** Equipo de investigación de la UCLA
- **Investigación relacionada:** Método de aprendizaje profundo auto supervisado IsoNet de partícula única (spIsoNet), cryo-EM de partícula única, reconstrucción de biomacromoléculas, conjunto de datos de β-galactosidasa, conjunto de datos inclinado por el trimer HA, conjuntos de datos de ribosomas no simétricos, conjuntos de datos de tomografía de VLP por VIH, arquitectura de red U, módulo de corrección de desalineamiento de conducción corregido por anisotropía.
- **Revista científica:** Métodos de la naturaleza, 2024.11
- **Enlace al artículo:**  [Superar el problema de la orientación preferida en el cryo-EM con el aprendizaje profundo auto-supervisado](https://doi.org/10.1038/s41592-024-02505-1)

### **51. [Método de generación de proteínas multimodal PLAID genera secuencias y estructuras de proteínas de todo átomo simultáneamente](https://hyper.ai/news/36750)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36750](https://hyper.ai/news/36750)
- **Equipo de investigación:** UC Berkeley, Microsoft Research, Genentech
- **Investigación relacionada:** Método de generación de proteínas multimodal PLAID (Protein Latent Induced Diffusion), base de datos Pfam, espacio latente ESMFold, entrenamiento de difusión latente, arquitectura de bloques DiT, Transformador de difusión (DiT), modelo ESMFold.
- **Revista científica:** CICLR 2025, 2024.12
- **Enlace al artículo:**  [Generar la estructura de las proteínas de todo átomo a partir de datos de entrenamiento de secuencia única](https://www.biorxiv.org/content/10.1101/2024.12.02.626353v1)

### **52. [Método de optimización molecular dirigida MOLRL basado en aprendizaje latente de refuerzo](https://hyper.ai/news/37285)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37285](https://hyper.ai/news/37285)
- **Equipo de investigación:** Investigadores de Cellarity y NVIDIA
- **Investigación relacionada:** Nuevo método de optimización molecular dirigido MOLRL basado en el aprendizaje de refuerzo latente, tareas de descubrimiento de fármacos, optimización de políticas proximas (PPO), autoencodadores variacionales (VAE), autoencoder (MolMIM), alcanzando hasta tasas de éxito del 100%.
- **Revista científica:** ChemRxiv, 2025.01
- **Enlace al artículo:**  [Generación molecular dirigida con aprendizaje de refuerzo latente](https://go.hyper.ai/H4JhR)

### **53. [Marco de predicción del conductor de variaciones virales E2VD predice direcciones evolutivas para los virus de COVID-19/VIH/Influenza](https://hyper.ai/news/37405)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37405](https://hyper.ai/news/37405)
- **Equipo de investigación:** El profesor Yonghong Tian y el profesor asociado Jie Chen en la Universidad de Pekín, el investigador Peng Zhou en el Laboratorio de Guangzhou
- **Investigación relacionada:** Marco de predicción de los controladores de variaciones virales E2VD, conjunto de datos UniRef90, conjuntos de datos de exploración de mutaciones profundas de código abierto, codificación de secuencias de proteínas, acoplamiento de dependencia local-global, aprendizaje focal multi-tareas.
- **Revista científica:** La inteligencia de la máquina de la naturaleza, 2025.01
- **Enlace al artículo:**  [Un marco unificado de aprendizaje profundo basado en la evolución para la predicción de los controladores de variaciones de virus](https://www.nature.com/articles/s42256-024-00966-9)

### **54. [El modelo de lenguaje médico MedFound se aproxima a las capacidades de razonamiento de los médicos expertos](https://hyper.ai/news/37646)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37646](https://hyper.ai/news/37646)
- **Equipo de investigación:** Equipo interdisciplinario dirigido por el profesor Guangyu Wang (BUPT), el profesor Chunli Song (Tercer Hospital de la Universidad de Pekín) y el profesor Jian Yang (Universidad de las Tres Gargantas de China)
- **Investigación relacionada:** LLM BLOOM-176B, conjunto de datos del cuerpo médico MedCorpus, LLM médico MedFound-DX, métodos de cadena de pensamiento, marco de alineación de preferencias, conjunto de datos MedDX-FT, conjunto de datos MedDX-Bench.
- **Revista científica:** Medicina de la naturaleza, 2025.01
- **Enlace al artículo:**  [Un modelo de lenguaje médico generalista para la asistencia en el diagnóstico de enfermedades](https://www.nature.com/articles/s41591-024-03416-6)

### **55. [El modelo de difusión 4D AlphaFolding cubre una laguna en la predicción de la estructura dinámica de las proteínas](https://hyper.ai/news/37697)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37697](https://hyper.ai/news/37697)
- **Equipo de investigación:** Los equipos del profesor Siyu Zhu y del profesor Yuan Qi en la Universidad de Fudan/Shanghai AI Lab, conjuntamente con el profesor Yao Yao en la Universidad de Nanjing
- **Investigación relacionada:** Modelo de difusión en 4D AlphaFolding, datos de simulación MD, estructuras dinámicas de proteínas, biología estructural, marco de aprendizaje profundo del gráfico de distribución (DiG), conjunto de datos ATLAS.
- **Revista científica:** ArXiv, 2024.12
- **Enlace al artículo:**  [Difusión 4D para predicción de la estructura dinámica de las proteínas con orientación de referencia y movimiento](https://arxiv.org/abs/2408.12419)

### **56. [La tubería de PepPrCLIP para diseñar proteínas cortas es prometedora para desarrollar nuevas terapias contra el cáncer](https://hyper.ai/news/37912)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37912](https://hyper.ai/news/37912)
- **Equipo de investigación:** Equipo de Ingeniería Biomédica de la Universidad de Duke
- **Investigación relacionada:** Modelo de lenguaje proteico ESM-2, modelo ESM-2-650M, pipeline PepPrCLIP, distribución gaussiana, secuencias de aminoácidos.
- **Revista científica:** Avances de la ciencia, 2025.01
- **Enlace al artículo:**  [Diseño de nuevo de los pegadores de péptidos a objetivos conformativamente diversos con modelado de lenguaje contrastante](https://www.science.org/doi/10.1126/sciadv.adr8638)

### **57. [La técnica de alineación de Boltzmann mejora drásticamente la eficacia de predicción de la energía libre de unión de proteínas](https://hyper.ai/news/38092)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38092](https://hyper.ai/news/38092)
- **Equipo de investigación:** Equipo del profesor Chunhua Shen en la Universidad de Zhejiang, la Universidad de Adelaide, la Universidad del Noreste (EE.UU.)
- **Investigación relacionada:** Energía libre vinculada, técnica de alineación de Boltzmann, predicción ∆∆G, predicción de la estructura compleja de proteínas, modelos de difusión Riemannian, aprendizaje profundo, método BA-Cycle, método BA-DDG, conjunto de datos SKEMPI v2.
- **Revista científica:** CCR 2025, 2024.10
- **Enlace al artículo:**  [Modelo de plegamiento inverso alineado con Boltzmann como predictor de los efectos mutacionales en las interacciones proteína-proteína](https://arxiv.org/abs/2410.09543)

### **58. [Nuevo generador de proteína de espina dorsal basado en flujo a gran escala Proteina logra SOTA en el diseño de espina dorsal de proteína de novo](https://hyper.ai/news/38120)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38120](https://hyper.ai/news/38120)
- **Equipo de investigación:** NVIDIA, Mila, Universidad de Montreal, MIT
- **Investigación relacionada:** Diseño de proteínas, arquitecturas escalables de transformadores no equivalentes, conjunto de datos DFS agrupado Foldseek AFDB, conjunto de datos D21M, modelo MFS, estrategias de entrenamiento en etapas.
- **Revista científica:** CICLR 2025 Oral, 2025.01
- **Enlace al artículo:**  [Proteína: Escalado Modelos generativos de estructura proteica basada en flujo](https://openreview.net/forum?id=TVQLu34bdw&nesting=2&sort=date-desc)

### **59. [El modelo UniGEM logra por primera vez una mejora sinérgica de dos tareas basadas en modelos de difusión](https://hyper.ai/news/38186)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38186](https://hyper.ai/news/38186)
- **Equipo de investigación:** Universidad de Tsinghua, Academia de Ciencias de China
- **Investigación relacionada:** Descubrimiento de fármacos, predicción de propiedades moleculares, generación de moléculas, modelos de difusión, conjunto de datos QM9, conjunto de datos de conformación molecular 3D de GEOM-Drugs, marcos de aprendizaje multi-tareas, E(3) Modelos de difusión equivalentes (EDM), arquitecturas de red multi-branca.
- **Revista científica:** CCR 2025, 2025.04
- **Enlace al artículo:**  [UniGEM: Un enfoque unificado para la generación y predicción de propiedades de las moléculas](https://openreview.net/pdf?id=Lb91pXwZMR)

### **60. [La difusión de RF evoluciona aún más, logrando el diseño de anticuerpos de precisión atómica de novo](https://hyper.ai/news/38253)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38253](https://hyper.ai/news/38253)
- **Equipo de investigación:** El equipo del profesor David Baker en la Universidad de Washington y sus colaboradores
- **Investigación relacionada:** Anticorpos terapéuticos, red de difusión de RF para el diseño computacional de proteínas, cadenas pesadas de variables de anticuerpos (VHH), fragmentos de variables de cadena única (scFvs), aprendizaje profundo, marcos de VHH, diseño de secuencias de circuitos CDR.
- **Revista científica:** bioRxiv, 2025.02
- **Enlace al artículo:**  [Diseño de nuevo de anticuerpos con difusión de RF con precisión atómica](https://doi.org/10.1101/2024.03.14.585103)

### **61. [El primer esquema de fusión del modelo de lenguaje proteína-ARN establece un nuevo SOTA en la predicción de la afinidad de unión](https://hyper.ai/news/38290)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38290](https://hyper.ai/news/38290)
- **Equipo de investigación:** Universidad de Tsinghua, UCL, Universidad de Monash, BUPT
- **Investigación relacionada:** Protein-RNA, modelo CoPRA, Modelos de lenguaje de proteínas (PLM), Modelos de lenguaje de RNA (RLM), técnicas experimentales CLIP, modelo Co-Former, conjunto de datos PDBbind, conjunto de datos PRBABv2, conjunto de datos ProNAB, conjunto de datos PRA201, aprendizaje multimodal.
- **Revista científica:** AAAI 2025, 2025.01
- **Enlace al artículo:**  [CoPRA: Puente de modelos de secuencia pre-entrenados de dominio cruzado con estructuras complejas para la predicción de afinidad de unión de proteínas-ARN](https://arxiv.org/abs/2409.03773)

### **62. [Modelo de tejido virtual Celcomen logra la identificación de la inferencia causal en el análisis de transcriptomía espacial por primera vez](https://hyper.ai/news/38308)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38308](https://hyper.ai/news/38308)
- **Equipo de investigación:** Universidad de Cambridge
- **Investigación relacionada:** Datos de Perturbmap, datos del bazo fetal, datos del glioblastoma, modelo Celcomen, módulos de inferencia (CCE), módulos generativos (SCE), redes neuronales gráficas.
- **Revista científica:** CCR 2025, 2025.01
- **Enlace al artículo:**  [Estimación del efecto de perturbación de células únicas y tejidos en transcriptomía espacial a través de Desentrajación Causal Espacial](https://openreview.net/forum?id=Tqdsruwyac)

### **63. [El método AlphaFold-Metainference predice con precisión los conjuntos estructurales de proteínas desordenadas](https://hyper.ai/news/38448)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38448](https://hyper.ai/news/38448)
- **Equipo de investigación:** Universidad de Cambridge
- **Investigación relacionada:** Mapa de error de alineación predicho por AlphaFold, correlaciones entre matrices de variación de distancia en simulaciones de MD, predicción de estructura proteica desordenada, Banco de datos de proteínas (PDB), datos de dispersión de rayos X de ángulo pequeño (SAXS), mediciones de NMR, conjuntos estructurales de Aβ y α-sinucleína, métodos de metainferencia bayesianos, integradores de Langevin.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.02
- **Enlace al artículo:**  [AlphaFold predicción de conjuntos estructurales de proteínas desordenadas](https://www.nature.com/articles/s41467-025-56572-9)

### **64. [Marco de predicción de la estructura de ARN de alta precisión DRfold2 supera a SOTA en múltiples puntos de referencia](https://hyper.ai/news/38506)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38506](https://hyper.ai/news/38506)
- **Equipo de investigación:** El equipo del profesor Yang Zhang en NUS
- **Investigación relacionada:** Marco de predicción de la estructura de ARN DRfold2, precisión de predicción de contactos sin supervisión, modelos de lenguaje de ARN compuesto, conjuntos de datos de pruebas de ARN DRfold2, conjunto de datos CASP15, módulos transformadores, denotación de módulos estructurales.
- **Revista científica:** bioRxiv, 2025.03
- **Enlace al artículo:**  [Predección de la estructura de ARN ab initio con modelo de lenguaje compuesto y aprendizaje de extremo a extremo desinfectado](https://www.biorxiv.org/content/10.1101/2025.03.05.641632v1)

### **65. [El nuevo algoritmo de diseño de proteínas DRAKES rompe el cuello de botella de diseño de secuencias biológicas](https://hyper.ai/news/38675)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38675](https://hyper.ai/news/38675)
- **Equipo de investigación:** Investigadores del MIT, Harvard, Stanford, UC Berkeley, Genentech
- **Investigación relacionada:** Marco de aprendizaje de refuerzo, conjuntos de capacitación de PDB, conjunto de datos de Megascale, algoritmo DRAKES, Gumbel-Softmax.
- **Revista científica:** CCR 2025, 2024.08
- **Enlace al artículo:**  [Modelos de difusión discreta de ajuste fino mediante optimización de recompensas con aplicaciones al diseño del ADN y las proteínas](https://doi.org/10.48550/arXiv.2410.13643)

### **66. [Espectroscopia de absorción UV asistida por aprendizaje automático para detectar contaminación microbiana](https://hyper.ai/news/38869)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38869](https://hyper.ai/news/38869)
- **Equipo de investigación:** SMART (Alianza Singapur-MIT para la Investigación y la Tecnología), A*SRL Singapur, NUS, MIT
- **Investigación relacionada:** Detección de contaminación microbiana, estrategias de detección de anomalías, aprendizaje automático, Máquinas de Vectores de Apoyo (SVM), funciones de base radial, muestras esterilizadas PBS.
- **Revista científica:** Naturaleza, 2025.03
- **Enlace al artículo:**  [Espectroscopia de absorción UV asistida por aprendizaje automático para la contaminación microbiana en productos de terapia celular](https://hyper.ai/en/sota/papers/s41598-024-83114-y)

### **67. [Utilizando modelos generativos de secuencias de proteínas para el diseño de genes superpuestos](https://hyper.ai/news/39241)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39241](https://hyper.ai/news/39241)
- **Equipo de investigación:** El equipo de David Baker en la Universidad de Washington
- **Investigación relacionada:** Genes superpuestos (OLG), investigación de diseño de OLG sintético, sustitución de aminoácidos, detección de bioinformática, modelado estadístico, exploración sistemática de posiciones de secuencia.
- **Revista científica:** bioRxiv, 2025.05
- **Enlace al artículo:**  [Diseño de genes superpuestos utilizando modelos generativos profundos de secuencias de proteínas](https://doi.org/10.1101/2025.05.06.652464)

### **68. [Marco de predicción PUPS permite la localización subcelular de proteínas a nivel unicelular](https://hyper.ai/news/39549)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39549](https://hyper.ai/news/39549)
- **Equipo de investigación:** MIT, Universidad de Harvard
- **Investigación relacionada:** Localización subcelular de proteínas, Atlas de proteínas humanas, localización subcelular de proteínas invisibles, Predicciones de proteínas invisibles Marco de localización subcelular (PUPS), conjuntos de datos sostenidos, modelos de lenguaje de proteínas ESM-2, CNNs, convulsiones separables.
- **Revista científica:** Métodos de la naturaleza, 2025.05
- **Enlace al artículo:**  [Predicción de la localización subcelular de proteínas en células individuales](https://go.hyper.ai/LeaQF)

### **69. [UniMoMo: El primer marco generativo unificado entre las especies moleculares permite el diseño molecular de fármacos de varios tipos](https://hyper.ai/news/39852)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39852](https://hyper.ai/news/39852)
- **Equipo de investigación:** El Grupo de Yang Liu (Tsinghua), el Grupo de Wenbing Huang (Universidad Renmin), el equipo de descubrimiento de drogas de ByteDance AI
- **Investigación relacionada:** Marco UniMoMo, Autoencoder Iterativo Iterativo Variativo (IterVAE), modelos de difusión de espacio latente geométrico de todo átomo, modelado unificado.
- **Revista científica:** CICML 2025, 2025.03
- **Enlace al artículo:**  [UniMoMo: Modelado generativo unificado de moléculas 3D para el diseño de enlaces De Novo](https://hyper.ai/papers/2503.19300)

### **70. [El modelo de lenguaje proteico Prot42 genera ligandos de alta afinidad utilizando solo la secuencia proteica objetivo](https://hyper.ai/news/40385)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/40385](https://hyper.ai/news/40385)
- **Equipo de investigación:** Iniciación de la IA (Abu Dhabi, Emiratos Árabes Unidos) y de los sistemas Cerebras (Valía del Silicio, EE.UU.)
- **Investigación relacionada:** PDIdb 2010 conjunto de datos, base de datos UniRef50, base de datos STRING, predicción de la función de proteínas, predicción de localización subcelular de proteínas, predicción de estructura de proteínas, predicción de PPI, generación de ligandos de proteínas, generación de ligandos específicos de secuencias de ADN.
- **Revista científica:** ArXiv, 2025.05
- **Enlace al artículo:**  [Prot42: una nueva familia de modelos de lenguaje de proteínas para la generación de proteínas ligadoras conscientes del objetivo](https://go.hyper.ai/cFupD)

### **71. [El simulador unificado de dinámica biomolecular UniSim logra por primera vez una simulación unificada de dinámica en tiempo intensificado en tipos moleculares y entornos químicos](https://hyper.ai/news/40483)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/40483](https://hyper.ai/news/40483)
- **Equipo de investigación:** El Grupo de Yang Liu (Tsinghua) y el Grupo de Wenbing Huang (Universidad Renmin)
- **Investigación relacionada:** Expansión de la incorporación atómica, pre-entrenamiento híbrido de múltiples cabezas, modelos GNN TorchMD-NET, marcos interpolantes estocásticos, núcleos guiados por la fuerza.
- **Revista científica:** CICML 2025, 2025.05
- **Enlace al artículo:**  [UniSim: un simulador unificado para la dinámica de las biomoleculas en tiempo](https://go.hyper.ai/5NWuO)

### **72. [Algoritmo de biología computacional SimplifiedBondfinder descubre 69 nuevos enlaces nitrógeno-oxígeno- azufre](https://hyper.ai/news/40515)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/40515](https://hyper.ai/news/40515)
- **Equipo de investigación:** El equipo de Sophia Bazzi y Sharareh Sayyad en la Universidad de Göttingen
- **Investigación relacionada:** Algorithm de Bondfinder simplificado, aprendizaje automático, cálculos mecánicos cuánticos, conjunto de datos PDB, conjunto de datos PDB-REDO, conjunto de datos BDB, reducción de dimensionalidad UMAP, enlaces NOS.
- **Revista científica:** Química de las comunicaciones, 2025.05
- **Enlace al artículo:**  [Revelar las conexiones NOS arginina-cisteína y glicina-cisteína mediante una reevaluación sistemática de las estructuras proteicas](https://www.nature.com/articles/s42004-025-01535-w)

### **73. [Nuevo método de diseño de secuencias de proteínas FAMPNN procesa simultáneamente la información sobre la columna vertebral y la cadena lateral de proteínas](https://hyper.ai/news/41545)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/41545](https://hyper.ai/news/41545)
- **Equipo de investigación:** Universidad de Stanford, Instituto Arc (Palo Alto)
- **Investigación relacionada:** Conformaciones de la cadena lateral de proteínas, método FAMPNN, conjunto de datos S40, conjunto de datos PDB, conjunto de datos CASP13/14/15, conjunto de datos SKEMPlv2, conjunto de datos S669, conjunto de datos Megascale, conjunto de datos FireProtDB, conjunto de datos CR9114/CR6261, estrategias de muestreo iterativo, formatos atom37, GNNs, métodos de difusión euclidiana con conocimiento de tokens.
- **Revista científica:** CICML 2025, 2025.06
- **Enlace al artículo:**  [Condicionamiento y modelado de cadenas laterales para el diseño de secuencias de proteínas de átomo completo con FAMPNN](https://go.hyper.ai/JUJDq)

### **74. [Método de diseño de proteínas atómicas La-Proteina genera proteínas con hasta 800 residuos a alta precisión](https://hyper.ai/news/41744)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/41744](https://hyper.ai/news/41744)
- **Equipo de investigación:** NVIDIA, Mila
- **Investigación relacionada:** Diseño de proteínas atómicas, marco de correspondencia de flujo parcialmente latente La-Proteina, conjunto de datos AFDB, estrategia de entrenamiento en dos etapas.
- **Revista científica:** ArXiv, 2025.06
- **Enlace al artículo:**  [La proteína: generación atómica de proteínas a través de la coincidencia de flujo parcialmente latente](https://go.hyper.ai/3csT5)

### **75. [El modelo APM diseñado específicamente para complejos de proteínas de cadena múltiple permite el diseño de todo átomo y la optimización funcional](https://hyper.ai/news/42059)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42059](https://hyper.ai/news/42059)
- **Equipo de investigación:** Universidad de Hunan, UCAS, equipo de semillas ByteDance
- **Investigación relacionada:** Proteínas, modelado nativo de múltiples cadenas, optimización de la representación de todos los átomos, refuerzo de la dependencia de la estructura de secuencia, base de datos PDB, base de datos Swiss-Prot, base de datos AFDB, conjuntos de datos de proteínas de múltiples cadenas.
- **Revista científica:** CICML 2025, 2025.07
- **Enlace al artículo:**  [Un modelo generativo totalmente atómico para el diseño de complejos de proteínas](https://go.hyper.ai/TVp4i)

### **76. [Nuevo método de diseño de proteínas de unión a regiones intrínsecamente desordenadas Logos se especializa en objetivos no farmacológicos](https://hyper.ai/news/42611)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42611](https://hyper.ai/news/42611)
- **Equipo de investigación:** El equipo de David Baker en la Universidad de Washington
- **Investigación relacionada:** Modelo de difusión RF, ajuste inducido, generación de escaleras, especialización de bolsillo, ensamblaje de bolsillo.
- **Revista científica:** Ciencia, 2025.07
- **Enlace al artículo:**  [Diseño de proteínas de unión de regiones intrínsecamente desordenadas](https://www.science.org/doi/10.1126/science.adr8063)

### **77. [Se lanzó un nuevo marco de representación de fusión dinámica de proteínas FusionProt, que permite el intercambio de información iterativo](https://hyper.ai/news/43724)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/43724](https://hyper.ai/news/43724)
- **Equipo de investigación:** Technion, Meta AI
- **Investigación relacionada:** Modelos de lenguaje de proteínas, marco de aprendizaje de representación FusionProt, AlphaFold DB, AlphaFold2, conjunto de datos DeepFRI, tokens de fusión aprendibles, aprendizaje multiview contrastivo.
- **Revista científica:** bioRxiv, 2025.08
- **Enlace al artículo:**  [FusionProt: Fusión de la secuencia y la información estructural para el aprendizaje de la representación proteica unificada](https://go.hyper.ai/OXLYl)

### **78. [Modelo de difusión guiado por transcriptoma MorphDiff lanzado para acelerar el descubrimiento de fármacos fenotipos](https://hyper.ai/news/43849)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/43849](https://hyper.ai/news/43849)
- **Equipo de investigación:** CUHK, Mohamed bin Zayed Universidad de Inteligencia Artificial
- **Investigación relacionada:** Morfología celular, Modelo de difusión latente (LDM), conjuntos de datos de imágenes de morfología celular a gran escala, conjunto de datos JUMP, conjunto de datos CDRP, conjunto de datos LINCS, VAE morfológico, modelos de difusión latente.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.09
- **Enlace al artículo:**  [Predicción de los cambios de morfología celular bajo perturbaciones con un modelo de difusión guiado por transcriptomas](https://www.nature.com/articles/s41467-025-63478-z)

### **79. [El marco AlphaPPIMI mejora significativamente la generalización, superando los métodos existentes en la predicción de moduladores de interfaz PPI](https://hyper.ai/news/43916)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/43916](https://hyper.ai/news/43916)
- **Equipo de investigación:** Universidad de Petróleo de China, Universidad de Yonsei
- **Investigación relacionada:** Interacciones proteína-proteína, conjunto de datos DLiP, huellas dactilares ECFP4, base de datos ChemDiv, marco AlphaPPIMI, modelo Uni-Mol2, extracción de características de proteínas, arquitectura de transformador, modelo ESM2-150M, modelo ProtTrans.
- **Revista científica:** Revista de Cheminformatics, 2025.08
- **Enlace al artículo:**  [Alphappimi: un marco integral de aprendizaje profundo para predecir las interacciones entre PPI y moduladores](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-025-01077-2)

### **80. [Un nuevo marco de red neuronal de fusión predice eficientemente los sitios de unión multi-metal en secuencias de proteínas](https://hyper.ai/news/44702)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/44702](https://hyper.ai/news/44702)
- **Equipo de investigación:** Universidad de Ciencia y Tecnología de Hong Kong
- **Investigación relacionada:** Marco de red neuronal de fusión, predicción de sitios de unión multi-metal de secuencias de proteínas, CNNs, redes de fusión, base de datos MbPA, marcos de aprendizaje profundo.
- **Revista científica:** bioRxiv, 2025.09
- **Enlace al artículo:**  [Un enfoque de red neuronal de fusión modular para predecir de manera eficiente los sitios de unión multi-metal en secuencias de proteínas](https://go.hyper.ai/Y7DNU)

### **81. [Se lanzó el marco de proyección molecular altamente sintetizable ReaSyn, logrando tasas de reconstrucción ultra altas y diversidad de vías](https://hyper.ai/news/44764)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/44764](https://hyper.ai/news/44764)
- **Equipo de investigación:** Equipo de investigación de NVIDIA
- **Investigación relacionada:** Descubrimiento de fármacos, marco ReaSyn, aprendizaje supervisado, ajuste del aprendizaje de refuerzo, modelos transformadores, representación de la cadena de reacción (CoR).
- **Revista científica:** ArXiv, 2025.09
- **Enlace al artículo:**  [Repensando la síntesis de moléculas con cadena de reacción](https://arxiv.org/abs/2509.16084)

### **82. [Marco de aprendizaje de refuerzo restringido Ctrl-DNA liberado, realizando el "control dirigido" de la expresión génica celular específica](https://hyper.ai/news/45227)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/45227](https://hyper.ai/news/45227)
- **Equipo de investigación:** Equipo de la Universidad de Toronto, Laboratorio Changping
- **Investigación relacionada:** Marco RL restringido Ctrl-DNA, aprendizaje profundo, expresión génica específica de la célula, modelos de lenguaje de ADN, conjuntos de datos de promotores humanos, conjuntos de datos de mejoradores, generación de CRE específica de tipo celular controlable, Procesos de decisión de Markov restringidos, arquitectura Enformer.
- **Revista científica:** NeurIPS 2025, 2025.05
- **Enlace al artículo:**  [Ctrl-DNA: Aprendizaje de refuerzo restringido para el diseño de elementos cis-regulatorios específicos de células](https://arxiv.org/abs/2505.20578)

### **83. [El marco PLACER resuelve el desafío de modelado a nivel atómico de la heterogeneidad conformacional de las proteínas](https://hyper.ai/news/46009)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/46009](https://hyper.ai/news/46009)
- **Equipo de investigación:** El equipo de investigación del profesor David Baker
- **Investigación relacionada:** Grafico de red neuronal PLACER, base de datos estructural de Cambridge, PDB, denociando redes neuronales, arquitecturas de 3 pistas, generación estructural de moléculas pequeñas.
- **Revista científica:** PNAS, 2025.11
- **Enlace al artículo:**  [Modelado de ensambles conformativos de moléculas pequeñas de proteínas con PLACER](https://www.biorxiv.org/content/10.1101/2024.09.25.614868v2)

### **84. [Squidiff permite la simulación de transcriptomas en múltiples escenarios, impulsando el desarrollo de la medicina de precisión y la medicina espacial](https://hyper.ai/news/46212)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/46212](https://hyper.ai/news/46212)
- **Equipo de investigación:** Universidad de Columbia, Universidad de Stanford
- **Investigación relacionada:** Marco de Squidiff, herramientas Splatter, conjuntos de datos de diferenciación iPSC-endoderm humano, experimentos de detección de K562 CRISPR, DDIM condicional, técnicas de codificación semántica, arquitecturas Encode-Diffuse-Decode.
- **Revista científica:** Métodos de la naturaleza, 2025.11
- **Enlace al artículo:**  [Squidiff: predicción del desarrollo celular y las respuestas a las perturbaciones utilizando un modelo de difusión](https://www.nature.com/articles/s41592-025-02877-y)

### **85. [Se lanzó el modelo generativo PepTron y un nuevo índice de referencia de evaluación, que remodela las capacidades de predicción de los conjuntos de proteínas desordenadas](https://hyper.ai/news/47063)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/47063](https://hyper.ai/news/47063)
- **Equipo de investigación:** Peptone, Universidad de Copenhague, NVIDIA, Universidad de Oxford, MIT, Universidad de Duke
- **Investigación relacionada:** Marco de evaluación PeptoneBench, modelo generativo PepTron, PDB, base de datos IDRome, NVIDIA BioNeMo, ESMFlow, estrategias de capacitación mixtas (datos experimentales + sintéticos).
- **Revista científica:** bioRxiv, 2025.10
- **Enlace al artículo:**  [Protein Ensemble Progresos Predicciones a través de la OrdenDesorden Continuum](https://www.biorxiv.org/content/10.1101/2025.10.18.680935v1)

### **86. [MIT y Harvard proponen un flujo de trabajo de IA de extremo a extremo CleaveNet para superar desafíos de diseño de sustrato de proteasa altamente específicos](https://hyper.ai/news/48608)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48608](https://hyper.ai/news/48608)
- **Equipo de investigación:** Equipo conjunto del MIT y la Universidad de Harvard
- **Investigación relacionada:** Diseño de sustratos de proteasa, flujo de trabajo de CleaveNet, péptidos sintéticos, modelos de predicción y modelos generativos.
- **Revista científica:** Comunicaciones de la naturaleza
- **Enlace al artículo:**  [CleaveNet: Un flujo de trabajo de diseño de extremo a extremo basado en IA para sustratos de proteasa](https://www.nature.com/articles/s41467-025-67226-1)

### **87. [El equipo de la Universidad Goethe de Frankfurt propone un marco de clasificación a múltiples escalas para descifrar la complejidad del ligoma humano E3](https://hyper.ai/news/48813)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48813](https://hyper.ai/news/48813)
- **Equipo de investigación:** Equipo de investigación de la Universidad Goethe en Frankfurt
- **Investigación relacionada:** Sistema de ubiquitina-proteasoma (UPS), ligasas de ubiquitina E3, ligoma humano E3, aprendizaje métrico.
- **Revista científica:** Comunicaciones de la naturaleza
- **Enlace al artículo:**  [La clasificación a múltiples escalas decodifica la complejidad del ligoma humano E3](https://www.nature.com/articles/s41467-025-67450-9)

### **88. [Basecamp y NVIDIA lanzan conjuntamente el modelo de fundación EDEN, que permite el diseño terapéutico programable por IA](https://hyper.ai/news/48964)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48964](https://hyper.ai/news/48964)
- **Equipo de investigación:** Basecamp Research, NVIDIA y las principales instituciones académicas
- **Investigación relacionada:** Biología programable, modelos de base metagenómica EDEN, terapias génicas, recombinaciones, diseño de péptidos antimicrobianos.
- **Revista científica:** bioRxiv
- **Enlace al artículo:**  [Diseño de terapias programables con IA con la familia de modelos de base EDEN](https://doi.org/10.64898/2026.01.12.699009)

### **89. [Microsoft y otros proponen el marco multimodal de IA GigaTIME para generar atlas mIF virtuales a partir de diapositivas de patología de rutina](https://hyper.ai/news/49359)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49359](https://hyper.ai/news/49359)
- **Equipo de investigación:** Investigación de Microsoft, Universidad de Washington, Providence Genomics
- **Investigación relacionada:** Microambiente tumoral, coloración H&E, inmunofluorescencia multiplexa (mIF), marco GigaTIME, proteomía espacial.
- **Revista científica:** Celular
- **Enlace al artículo:**  [La IA multimodal genera población virtual para el modelado del microambiente tumoral](https://www.cell.com/cell/fulltext/S0092-8674(25)01312-1)

### **90. [El MIT propone el modelo de lenguaje de aprendizaje profundo Pichia-CLM para optimizar los codones para mejorar el rendimiento de proteínas recombinantes](https://hyper.ai/news/49613)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49613](https://hyper.ai/news/49613)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** Komagataella phaffii, optimización del codón, Bias de uso del codón (CUB), modelo de lenguaje Pichia-CLM, expresión recombinante de la proteína.
- **Revista científica:** PNAS
- **Enlace al artículo:**  [Pichia-CLM: Un modelo de lenguaje basado en la optimización de codones para Komagataella phaffii](https://www.pnas.org/doi/10.1073/pnas.2522052123)

### **91. [MIT y ETH proponen conjuntamente el marco de aprendizaje profundo APOLLO para integrar y desentrañar eficientemente los datos multimodales de célula única](https://hyper.ai/news/49702)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49702](https://hyper.ai/news/49702)
- **Equipo de investigación:** Equipo conjunto del MIT y ETH Zurich
- **Investigación relacionada:** Biología unicelular, integración de datos multimodal, marco APOLLO, scRNA-seq, scATAC-seq, morfología espacial.
- **Revista científica:** Naturaleza Ciencia computacional
- **Enlace al artículo:**  [La incorporación multimodale parcialmente compartida aprende la representación holística del estado celular](https://www.nature.com/articles/s43588-025-00948-w)

### **92. [CUHK y otros proponen conjuntamente el marco Bi-TEAM para el aprendizaje unificado de representación a escala transversal de péptidos modificados](https://hyper.ai/news/49833)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49833](https://hyper.ai/news/49833)
- **Equipo de investigación:** CUHK, Universidad Politécnica de Macao, Universidad de Zhejiang, Segundo Hospital Xiangya de la CSU, UESTC
- **Investigación relacionada:** Modelado de la estructura y la función de los péptidos, modificaciones de aminoácidos no canónicos, aprendizaje de representación a escala, marco Bi-TEAM.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [Bi-TEAM: Un marco unificado para el aprendizaje de la representación a escala cruzada de las biomoleculas modificadas químicamente](https://arxiv.org/abs/2603.01873)

### **93. [La Universidad Carnegie Mellon y otros proponen AQuaRef para el refinamiento cuántico de modelos de proteínas de todo átomo](https://hyper.ai/news/49895)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49895](https://hyper.ai/news/49895)
- **Equipo de investigación:** CMU, Universidad de Wrocław, Universidad de Florida
- **Investigación relacionada:** Refinamiento de la estructura de las proteínas, AQuaRef, potenciales interatómicos de aprendizaje automático (AIMNet2), refinamiento cuántico, biología estructural.
- **Revista científica:** Comunicaciones de la naturaleza
- **Enlace al artículo:**  [AQuaRef: aprendizaje automático acelerado de la refinación cuántica de las estructuras de proteínas](https://www.nature.com/articles/s41467-025-64313-1)

### **94. [NVIDIA y otros proponen conjuntamente el marco Complexa para unificar la generación y la optimización de la unión de proteínas](https://hyper.ai/news/49977)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49977](https://hyper.ai/news/49977)
- **Equipo de investigación:** NVIDIA, Universidad de Oxford, Mila
- **Investigación relacionada:** Diseño de un enlazador de proteínas, Proteína-Complexa (Complexa), Teddymer, métodos generativos, Computación del tiempo de prueba.
- **Revista científica:** CICLR 2026
- **Enlace al artículo:**  [Desarrollo de un enlazador de proteínas atómico con computación de tiempo de preparación y prueba generativa](https://openreview.net/forum?id=qmCpJtFZra)

### **95. [El MIT y la CMU proponen conjuntamente VibeGen, que introduce la dinámica vibratoria para potenciar el diseño de proteínas de novo](https://hyper.ai/news/50061)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50061](https://hyper.ai/news/50061)
- **Equipo de investigación:** Equipo conjunto del MIT y CMU
- **Investigación relacionada:** Dinámica de proteínas, agente VibeGen, modelos de difusión del lenguaje, diseño de proteínas de novo, predicción de amplitud vibratoria.
- **Revista científica:** La materia
- **Enlace al artículo:**  [VibeGen: Diseño de proteínas agenciales de extremo a extremo de nuevo para dinámicas a medida utilizando un modelo de difusión del lenguaje](https://www.cell.com/matter/abstract/S2590-2385(26)00069-X)

### **96. [El Instituto Pasteur utiliza el aprendizaje profundo para predecir 2.39 millones de proteínas antifajas, mapeando la inmunidad bacteriana](https://hyper.ai/news/50491)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50491](https://hyper.ai/news/50491)
- **Equipo de investigación:** Equipo de Investigación del Instituto Pasteur
- **Investigación relacionada:** Inmunidad anti-viral bacteriana, sistemas de defensa antifágicos, modelos de lenguaje proteico, modelos genómicos de lenguaje, pangenómica.
- **Revista científica:** Ciencia
- **Enlace al artículo:**  [Los modelos de lenguaje proteico y genómico revelan la inexplorada diversidad de la inmunidad bacteriana](https://www.science.org/doi/10.1126/science.adv8275)

### **97. [El equipo de KAIST utiliza IA para diseñar de novo proteínas de unión de moléculas pequeñas, aplicándolas con éxito en biosensores](https://hyper.ai/news/50599)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50599](https://hyper.ai/news/50599)
- **Equipo de investigación:** Equipo de Investigación del Departamento de Ciencias Biológicas del KAIST
- **Investigación relacionada:** Diseño de proteínas de nuevo, proteínas de unión de moléculas pequeñas, pliegue similar a NTF2, biosensores, dimerización inducida químicamente (CID).
- **Revista científica:** Comunicaciones de la naturaleza
- **Enlace al artículo:**  [Enlace y detección de moléculas pequeñas con una familia de proteínas diseñada](https://www.nature.com/articles/s41467-026-70953-8)

### **98. [Universidad de Toronto y otros proponen dnaHNet para el modelado jerárquico eficiente de las secuencias genómicas](https://hyper.ai/news/50709)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50709](https://hyper.ai/news/50709)
- **Equipo de investigación:** Universidad de Toronto, Instituto Vector, Instituto Arc
- **Investigación relacionada:** Aprendizaje de secuencias genómicas, modelos de base, dnaHNet, tokenización dinámica, predicción de efectos variantes.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [dnaHNet: un modelo de base escalable y jerárquica para el aprendizaje de secuencias genómicas](https://arxiv.org/abs/2602.10603)

### **99. [La Universidad Queen Mary de Londres y otros conducen el estudio proteogenómico a mayor escala, revelando mecanismos moleculares de enfermedades](https://hyper.ai/news/51343)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/51343](https://hyper.ai/news/51343)
- **Equipo de investigación:** Universidad Queen Mary de Londres, Universidad de Cambridge
- **Investigación relacionada:** Proteogenomía, loci de rasgos cuantitativos de proteínas (pQTL), abundancia de proteínas en circulación, regulación cis y transgenética.
- **Revista científica:** Celular
- **Enlace al artículo:**  [Los análisis proteogenómicos de múltiples cohortas revelan efectos genéticos en todo el proteoma y en el diseño](https://www.cell.com/cell/fulltext/S0092-8674(26)00385-5)

### **100. [Goethe University Frankfurt y otros proponen el modelo genESOM: IA generativa rompe experimentos con animales de muestra pequeña](https://hyper.ai/news/51430)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/51430](https://hyper.ai/news/51430)
- **Equipo de investigación:** Universidad Goethe Frankfurt y Fraunhofer ITMP
- **Investigación relacionada:** Experimentos con animales de pequeña muestra, IA generativa, modelo genESOM, mapas emergentes de autoorganización.
- **Revista científica:** Investigación farmacológica
- **Enlace al artículo:**  [La IA generativa basada en redes neuronales autoorganizada con control de inflación de errores integrados mejora la extracción eficaz de conocimientos de estudios preclínicos con tamaño de muestra reducido](https://www.sciencedirect.com/science/article/pii/S1043661826000745)

## **Inteligencia artificial+ Cuidado de la salud**

### **1. [El sistema de aprendizaje profundo DeepDR Plus predice la retinopatía diabética usando imágenes de fundus](https://hyper.ai/news/29769)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29769](https://hyper.ai/news/29769)
- **Equipo de investigación:** El equipo del profesor Weiping Jia, Huating Li y Bin Sheng en la Universidad de Shanghai Jiao Tong; el equipo de investigación de Tianyin Huang en la Universidad de Tsinghua
- **Investigación relacionada:** Datos de SDPP, datos de DRPS, ResNet-50, modelos de fondos, aprendizaje auto supervisado, modelos de evaluación del SII, meta-modelos.
- **Revista científica:** Medicina de la naturaleza, 2024.01
- **Enlace al artículo:**  [Un sistema de aprendizaje profundo para predecir el tiempo hasta la progresión de la retinopatía diabética](https://www.nature.com/articles/s41591-023-02702-z)

### **2. [El modelo de regresión logística analiza que el alto índice de paisaje verde reduce el riesgo de MetS](https://hyper.ai/news/29559)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29559](https://hyper.ai/news/29559)
- **Equipo de investigación:** El equipo de investigación de Xifeng Wu en la Universidad de Zhejiang
- **Investigación relacionada:** Modelos de redes neuronales convolucionales, modelos de regresión logística, API Isochrone
- **Revista científica:** Medio Ambiente Internacional, 2024.01
- **Enlace al artículo:**  [Las asociaciones beneficiosas entre el verde exterior visible en el lugar de trabajo y el síndrome metabólico en adultos chinos](https://doi.org/10.1016/j.envint.2023.108327)

### **3. [El sistema de aprendizaje profundo ayuda a los oftalmólogos menores a aumentar la consistencia del diagnóstico en un 12%](https://hyper.ai/news/29549)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29549](https://hyper.ai/news/29549)
- **Equipo de investigación:** Hospital del Colegio Médico de la Unión de Pekín, Hospital de la Universidad de Sichuan de China Occidental, Segundo Hospital de la Universidad Médica de Hebei, Hospital Ocular de la Universidad Médica de Tianjin, Universidad Médica de Wenzhou, Beijing Airdoc Technology, Universidad Renmin de China
- **Investigación relacionada:** Modelos de evaluación de calidad, modelos de diagnóstico, CNN. Proporcionaron nuevos métodos de detección automática para 13 enfermedades del fundus.
- **Revista científica:** Medicina digital, 2024.01
- **Enlace al artículo:**  [El rendimiento de un sistema de aprendizaje profundo en la asistencia a los oftalmólogos menores en el diagnóstico de 13 enfermedades principales del fondo: un prospectivo ensayo clínico multicéntrico](https://www.nature.com/articles/s41746-023-00991-9)

### **4. [Los GSP-GCN alcanzan hasta un 90,2% de precisión en el diagnóstico de la enfermedad de Parkinson](https://hyper.ai/news/29189)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29189](https://hyper.ai/news/29189)
- **Equipo de investigación:** CAS Shenzhen Institutos de Tecnología Avanzada y Primer Hospital Afiliado de la Universidad Sun Yat-sen
- **Investigación relacionada:** Modulos de procesamiento de señales gráficas (GSP), módulos de redes gráficas, clasificadores, modelos interpretables.
- **Revista científica:** Medicina digital, 2024.01
- **Enlace al artículo:**  [Un modelo interpretable basado en el aprendizaje gráfico para el diagnóstico de la enfermedad de Parkinson con EEG relacionado con la voz](https://www.nature.com/articles/s41746-023-00983-9)

### **5. [Sistema de puntuación del pronóstico del cáncer de mama MIRS](https://hyper.ai/news/29304)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29304](https://hyper.ai/news/29304)
- **Equipo de investigación:** Universidad de Kentucky, Universidad de Ciencia y Tecnología de Macao, Universidad de Macao, Universidad Médica de Guangzhou
- **Investigación relacionada:** Base de datos de TCGA, modelos de redes neuronales, sistemas de puntuación de pronóstico, algoritmo ESTIMATE, aprendizaje automático, XGboost, Boruta RF, ElasticNet.
- **Revista científica:** Ciencia, 2023.11
- **Enlace al artículo:**  [MIRS: Un sistema de puntuación de IA para predecir el pronóstico y la terapia del cáncer de mama](https://doi.org/10.1016/j.isci.2023.108322)

### **6. [Modelo de base de imagen de la retina RETFound predice múltiples enfermedades sistémicas](https://hyper.ai/news/28113)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28113](https://hyper.ai/news/28113)
- **Equipo de investigación:** Yukun Zhou (candidato a doctorado) y otros de UCL y el Hospital Ocular Moorfields
- **Investigación relacionada:** Aprendizaje auto supervisado, conjunto de datos MEH-MIDAS, conjunto de datos EyePACS, SL-ImageNet, SSL-ImageNet, SSL-Retinal.
- **Revista científica:** Naturaleza, 2023.08
- **Enlace al artículo:**  [Un modelo de base para la detección generalizable de enfermedades a partir de imágenes de la retina](https://www.nature.com/articles/s41586-023-06555-x)

### **7. [SVM optimiza los sensores táctiles, la tasa de reconocimiento de braille alcanza el 96,12%](https://hyper.ai/news/26561)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/26561](https://hyper.ai/news/26561)
- **Equipo de investigación:** Grupos de Geng Yang y Kaichen Xu en la Universidad de Zhejiang
- **Investigación relacionada:** Algoritmos SVM, aprendizaje automático, CNNs, algoritmos de estimación de momento adaptativo. Identifica con precisión 6 patrones dinámicos de tacto.
- **Revista científica:** Ciencia avanzada, 2023.09
- **Enlace al artículo:**  [Diseño de sensores táctiles habilitados por aprendizaje automático para la descodificación táctil dinámica](https://onlinelibrary.wiley.com/doi/10.1002/advs.202303949)

### **8. [CAS Instituto de Genómica de Beijing establece un archivo abierto de imágenes biomédicas](https://hyper.ai/news/26334)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/26334](https://hyper.ai/news/26334)
- **Equipo de investigación:** CAS Instituto de Genómica de Beijing
- **Investigación relacionada:** Base de datos de la TCIA, desidentificación, control de calidad, colección, individuo, estudio, serie, imagen, redes triplet, módulos de atención.
- **Revista científica:** bioRxiv, 2023.08
- **Enlace al artículo:**  [Aprendizaje auto supervisado de la reconstrucción de hologramas utilizando la consistencia física](https://www.nature.com/articles/s42256-023-00704-7)

### **9. [AI Lunit lee mamografías con una precisión comparable a la de los médicos](https://hyper.ai/news/26135)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/26135](https://hyper.ai/news/26135)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Nottingham
- **Investigación relacionada:** PERFORMS conjunto de datos, anotaciones + puntuación. La sensibilidad de la IA fue consistente con los médicos, y la especificidad no mostró diferencias significativas.
- **Revista científica:** Radiología, 2023.09
- **Enlace al artículo:**  [Desempeño de un algoritmo de IA de detección del cáncer de mama utilizando el rendimiento personal en el esquema de detección mamográfica](https://pubs.rsna.org/doi/10.1148/radiol.223299)

### **10. [La estrategia de selección de características detecta biomarcadores del cáncer de mama](https://hyper.ai/news/24589)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/24589](https://hyper.ai/news/24589)
- **Equipo de investigación:** Universidad de Nápoles Federico II, Italia
- **Investigación relacionada:** Aprendizaje automático, estrategias de selección de características, conjuntos de datos TCGA/GEO, Ratio de ganancia, RF, SVM-RFE.
- **Revista científica:** CIBB 2023, 2023.07
- **Enlace al artículo:**  [Estrategia de selección de características robustas detecta un panel de microARN como biomarcadores de diagnóstico en el cáncer de mama](https://www.researchgate.net/publication/372083934)

### **11. [El modelo de máquina de impulso gradual predice con precisión el subsíndrome de BPSD](https://hyper.ai/news/23926)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/23926](https://hyper.ai/news/23926)
- **Equipo de investigación:** Equipo de investigación de la Universidad Yonsei (Corea del Sur)
- **Investigación relacionada:** Modelos de aprendizaje automático, métodos múltiples de imputación, modelos de regresión logística, modelos de bosque aleatorio, modelos de máquina de impulso gradual, modelos SVM.
- **Revista científica:** Informes científicos, 2023.05
- **Enlace al artículo:**  [Modelos predictivos basados en el aprendizaje automático para la aparición de síntomas conductuales y psicológicos de demencia: desarrollo y validación de modelos](https://www.nature.com/articles/s41598-023-35194-5)

### **12. [El modelo de aprendizaje automático predice la tasa de mortalidad del paciente en un año](https://hyper.ai/news/33905)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33905](https://hyper.ai/news/33905)
- **Equipo de investigación:** Hospital del Pueblo de Macheng (Hubei, China)
- **Investigación relacionada:** Modelos de regresión logística, modelos de aprendizaje automático, GBM, RF, DT. Las 3 principales características relacionadas con la mortalidad de 1 año fueron NT-proBNP, albumina y estatinas.
- **Revista científica:** Diabetología cardiovascular, 2023.06
- **Enlace al artículo:**  [Modelos basados en el aprendizaje automático para predecir la mortalidad de un año entre los pacientes chinos mayores con enfermedad arterial coronaria combinada con una tolerancia a la glucosa o diabetes mellitus](https://cardiab.biomedcentral.com/articles/10.1186/s12933-023-01854-z)

### **13. [La nueva tecnología de interfaz cerebro-computador de IA permite a los pacientes afásicos "hablar"](https://hyper.ai/news/33914)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33914](https://hyper.ai/news/33914)
- **Equipo de investigación:** Equipo de Investigación de la UC
- **Investigación relacionada:** Nltk corpus de Twitter, neuroproteses multimodales del habla, interfaces cerebro-ordenador, modelos de aprendizaje profundo, Cornell Movie-Dialogs Corpus, algoritmos de habla sintética.
- **Revista científica:** Naturaleza, 2023.08
- **Enlace al artículo:**  [Una neuroprotesis de alto rendimiento para la decodificación del habla y el control de avatares](https://www.nature.com/articles/s41586-023-06443-4)

### **14. [Detección de cáncer de páncreas por inteligencia artificial basada en el aprendizaje profundo](https://hyper.ai/news/33923)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33923](https://hyper.ai/news/33923)
- **Equipo de investigación:** Alibaba DAMO Academy junto con múltiples instituciones médicas nacionales e internacionales
- **Investigación relacionada:** El aprendizaje profundo, PANDA, nnU-Net, CNNs, Transformers. PANDA detectó 5 casos de cáncer y 26 casos clínicamente perdidos.
- **Revista científica:** Medicina de la naturaleza, 2023.11
- **Enlace al artículo:**  [Detección de cáncer de páncreas a gran escala mediante tomografía computarizada sin contraste y aprendizaje profundo](https://www.nature.com/articles/s41591-023-02640-w)

### **15. [Eficacia de las pruebas de detección del cáncer de pulmón asistidas por aprendizaje automático en la población](https://hyper.ai/news/31197)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31197](https://hyper.ai/news/31197)
- **Equipo de investigación:** Centro de Investigación de Google
- **Investigación relacionada:** D.S._conjunto de datos CA, DS_conjunto de datos NLST, DS_conjunto de datos de EE.UU., DS_Datos de JPN, modelos de aprendizaje automático, detección del cáncer de pulmón.
- **Revista científica:** Radiología AI, 2024.03
- **Enlace al artículo:**  [AI de asistencia en la detección del cáncer de pulmón: un estudio multinacional retrospectivo en los Estados Unidos y Japón](https://pubs.rsna.org/doi/11.1148/ryai.230079)

### **16. [El modelo de fusión de IA MCF para el diagnóstico del cáncer ovárico calcula el riesgo utilizando datos de laboratorio de rutina y edad](https://hyper.ai/news/30730)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30730](https://hyper.ai/news/30730)
- **Equipo de investigación:** Equipo de investigación de Jihong Liu en la Universidad Sun Yat-sen
- **Investigación relacionada:** Métodos de selección de características, clasificadores de aprendizaje automático, validación cruzada de 5 veces, teoría de la decisión de múltiples criterios. Biomarcadores CA125 y HE4 superados.
- **Revista científica:** La salud digital del Lancet, 2024.05
- **Enlace al artículo:**  [Modelos basados en inteligencia artificial que permiten un diagnóstico preciso del cáncer de ovario mediante pruebas de laboratorio en China: un estudio de cohorte multicéntrico y retrospectivo](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00245-5/fulltext)

### **17. [Google lanza el marco HEAL, un proceso de 4 pasos para evaluar la equidad de las herramientas de IA médicas](https://hyper.ai/news/31535)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31535](https://hyper.ai/news/31535)
- **Equipo de investigación:** Equipo de investigación de Google
- **Investigación relacionada:** Aprendizaje automático, marco HEAL (Health Equity Assessment of Machine Learning), análisis de regresión logística, análisis interseccional, equidad de salud.
- **Revista científica:** Medicina clínica, 2024.04
- **Enlace al artículo:**  [Evaluación de la equidad de salud del rendimiento del aprendizaje automático (HEAL): un marco y un estudio de caso del modelo de IA en dermatología](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(24)00058-0/fulltext)

### **18. [Aprovechando la segmentación semántica para desarrollar la transcriptomía espacial herramienta de anotación semántica Pianno](https://hyper.ai/news/31573)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31573](https://hyper.ai/news/31573)
- **Equipo de investigación:** El equipo de Ying Zhu en la Universidad de Fudan
- **Investigación relacionada:** Visión por computadora, aprendizaje automático, métodos de agrupamiento espacial, métodos de agrupamiento no supervisados, modelos de procesos espaciales de puntos de Poisson (sPPP), anteriores de campos aleatorios de Markov de alto orden (MRF).
- **Revista científica:** Comunicaciones de la naturaleza, 2024.04
- **Enlace al artículo:**  [Pianno: un marco probabilístico que automatiza la anotación semántica para la transcriptomía espacial](https://www.nature.com/articles/s41467-024-47152-4)

### **19. [Modelo de IA UniFMIR rompe los límites de la imagen de microscopía de fluorescencia existente](https://hyper.ai/news/31885)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31885](https://hyper.ai/news/31885)
- **Equipo de investigación:** El equipo de Bo Yan en la Universidad de Fudan
- **Investigación relacionada:** Modelo UniFMIR, módulos de múltiples cabezas, módulos de mejora de características, módulos de múltiples colas, transformador Swin, estimación de momento adaptativa, aprendizaje profundo, modelos SR, U-Net.
- **Revista científica:** Métodos de la naturaleza, 2024.04
- **Enlace al artículo:**  [Pre-entrenamiento de un modelo de base para la restauración de imágenes a base de microscopía de fluorescencia generalizable](https://www.nature.com/articles/s41592-024-02244-3)

### **20. [El sistema de aprendizaje profundo mejora la precisión de la predicción de supervivencia del cáncer](https://hyper.ai/news/32068)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32068](https://hyper.ai/news/32068)
- **Equipo de investigación:** Grupo de Zhangsheng Yu en el Centro Nacional de Matemáticas Aplicadas de Shanghái (Ramiente de la SJTU)
- **Investigación relacionada:** Sistemas de aprendizaje profundo, conjuntos de datos ST, gráficos integrados y modelos de aprendizaje profundo de gráficos, CNNs y GNNs, conjunto de pruebas externos MCO-CRC, modelos de expresión génica espacial, modelos de supervivencia de gráficos de superparches, preprocesamiento de imágenes histológicas manchadas H&E.
- **Revista científica:** Informes de células Medicina, 2024.05
- **Enlace al artículo:**  [Aprovechar el TME representado por imágenes histológicas para mejorar el pronóstico del cáncer a través de un sistema de aprendizaje profundo](https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(24)00205-2 )

### **21. [MemSAM adapta el modelo "Segmento Cualquier cosa" para la segmentación de videos médicos](https://hyper.ai/news/32372)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32372](https://hyper.ai/news/32372)
- **Equipo de investigación:** Huisi Wu (Universidad de Shenzhen)
- **Investigación relacionada:** Modelos de visión, segmentación de vídeo médico, modelos de segmentación de vídeo de ecocardiografía, mecanismos de refuerzo de la memoria, conjuntos de datos CAMUS y EchoNet-Dynamic, modelo SonoSAM, modelo SAMUS.
- **Revista científica:** CVPR 2024, 2024.05
- **Enlace al artículo:**  [MemSAM: Dominar cualquier segmento Modelo para la segmentación de vídeo de ecocardiografía](https://github.com/dengxl0520/MemSAM)

### **22. [Modelo de segmentación de imágenes médicas Medical SAM 2 encabeza la tabla de clasificación de SOTA](https://hyper.ai/news/33738)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33738](https://hyper.ai/news/33738)
- **Equipo de investigación:** Equipo de la Universidad de Oxford
- **Investigación relacionada:** Modelos médicos de segmentación de imágenes, SAM 2, conjunto de datos de segmentación de vídeo SA-V, conjuntos de datos de ejemplos de SAM 2 médicos, codificadores de imágenes, codificadores de memoria.
- **Revista científica:** ArXiv, 2024.08
- **Enlace al artículo:**  [SAM Médico 2: Segmentar imágenes médicas como video a través de Segmento Cualquier cosa Modelo 2](https://arxiv.org/abs/2408.00874)

### **23. [El aprendizaje automático combate la resistencia a la quimioterapia y la recurrencia del tumor, construyendo una fuerte defensa contra las células madre del cáncer de mama](https://hyper.ai/news/33566)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33566](https://hyper.ai/news/33566)
- **Equipo de investigación:** Universidad de Shandong y Universidad Médica de Shanxi, conjuntamente con Helix Matrix
- **Investigación relacionada:** Aprendizaje automático, conjunto de datos de cáncer de mama invasivo (BRCA), correlación Pearson, análisis de enriquecimiento de conjuntos de genes.
- **Revista científica:** Ciencia avanzada, 2024.07
- **Enlace al artículo:**  [El anabolismo de la poliamina promueve el enriquecimiento de células madre del cáncer de mama inducido por quimioterapia](https://onlinelibrary.wiley.com/doi/10.1002/advs.202404853)

### **24. [Modelo de lenguaje de visión DeepDR-LLM para el cuidado de la diabetes publicado en la sub-jornal Nature](https://hyper.ai/news/33292)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33292](https://hyper.ai/news/33292)
- **Equipo de investigación:** Universidad de Tsinghua, Universidad de Shanghai Jiao Tong, Universidad Nacional de Singapur
- **Investigación relacionada:** LLM, aprendizaje profundo basado en imágenes de fondo, adaptadores y LoRA, arquitecturas transformadoras, ajuste fino supervisado.
- **Revista científica:** Medicina de la naturaleza, 2024.07
- **Enlace al artículo:**  [Modelos integrados de aprendizaje profundo y de lenguaje basados en imágenes para la atención primaria de la diabetes](https://www.nature.com/articles/s41591-024-03139-8)

### **25. [El equipo de Tsinghua propone el modelo ROAM basado en la IA para el diagnóstico preciso del glioma](https://hyper.ai/news/33136)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33136](https://hyper.ai/news/33136)
- **Equipo de investigación:** Universidad de Tsinghua y Hospital de Xiangya
- **Investigación relacionada:** Grandes regiones de interés, transformadores de pirámide, ROAM, parches de imagen de gran tamaño, conjunto de datos WSI de glioma Xiangya, conjunto de datos WSI de glioma TCGA, patología computacional con poca supervisión.
- **Revista científica:** La inteligencia de la máquina de la naturaleza, 2024.06
- **Enlace al artículo:**  [Un método de patología computacional con supervisión débil basado en transformadores para el diagnóstico clínico y el descubrimiento de marcadores moleculares de gliomas](https://www.nature.com/articles/s42256-024-00868-w)

### **26. [Modelo universal de segmentación de imágenes médicas ScribblePrompt supera a los modelos basados en SAM](https://hyper.ai/news/34720)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34720](https://hyper.ai/news/34720)
- **Equipo de investigación:** MIT CSAIL, MGH, Facultad de Medicina de Harvard
- **Investigación relacionada:** Aprendizaje profundo, segmentación de imágenes médicas, conjunto de datos MegaMedical, segmentación interactiva, etiquetas sintéticas generativas, soluciones híbridas CNN-Transformer.
- **Revista científica:** ECCV 2024, 2024.07
- **Enlace al artículo:**  [ScribblePrompt: Segmentación interactiva rápida y flexible para cualquier imagen biomédica](https://arxiv.org/pdf/2312.07381)

### **27. [La plataforma digital del cerebro gemelo demuestra fenómenos críticos y funciones cognitivas similares al cerebro humano](https://hyper.ai/news/34573)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34573](https://hyper.ai/news/34573)
- **Equipo de investigación:** El equipo del profesor Jianfeng Feng en la Universidad de Fudan
- **Investigación relacionada:** Redes neuronales de punta, cerebro gemelo digital, ingeniería inversa, resonancia magnética, modelos cortico-subcorticales, modelos DTB, modelos de asimilación de datos.
- **Revista científica:** Revisión científica nacional, 2024.05
- **Enlace al artículo:**  [Imitar y explorar los estados de reposo y ejecución de tareas del cerebro humano a través de computadoras cerebrales similares: escala y arquitectura](https://doi.org/10.1093/nsr/nwae080)

### **28. [El sistema de simulación de agentes realiza el diagnóstico inicial de depresión](https://hyper.ai/news/34845)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34845](https://hyper.ai/news/34845)
- **Equipo de investigación:** Laboratorio X-LANCE en la SJTU, UT Arlington, TCCI y ThetaAI
- **Investigación relacionada:** Sistemas de simulación del agente de diálogo, conjunto de datos D4, arquitecturas de almacenamiento de memoria terciaria, agente del paciente, agente del psiquiatra, agente del instructor.
- **Revista científica:** ArXiv, 2024.09
- **Enlace al artículo:**  [Simulación de diálogo para el diagnóstico de la depresión: psiquiatra que se mejora a sí mismo con memoria terciaria](https://arxiv.org/abs/2409.15084)

### **29. [Modelo de aprendizaje profundo LucaProt ayuda en la identificación de virus de ARN](https://hyper.ai/news/34968)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34968](https://hyper.ai/news/34968)
- **Equipo de investigación:** Universidad de Sun Yat-sen, Universidad de Zhejiang, Universidad de Fudan, Alibaba Cloud, etc.
- **Investigación relacionada:** Computación en la nube y IA, minería metagenómica, base de datos NCBI SRA, CNGBdb, modelos de aprendizaje profundo basados en datos, marco Transformer, descubrimiento de 161.979 especies potenciales de virus de ARN.
- **Revista científica:** Celular, 2024.09
- **Enlace al artículo:**  [Usando inteligencia artificial para documentar la virosfera oculta de ARN](https://doi.org/10.1016/j.cell.2024.09.027)

### **30. [UniMedI rompe las barreras de heterogeneidad de los datos médicos](https://hyper.ai/news/35128)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35128](https://hyper.ai/news/35128)
- **Equipo de investigación:** El equipo de Haoji Hu en la Universidad de Zhejiang, el equipo de Lili Qiu en Microsoft Research Asia
- **Investigación relacionada:** Tecnología de Pseudo-Pairs, conjunto de datos MIMIC-CXR 2.0.0, conjunto de datos BIMCV, codificadores de visión ViT-B/16, BioClinicalBERT, aprendizaje de contraste del lenguaje de visión.
- **Revista científica:** ECCV, 2024.07
- **Enlace al artículo:**  [Formación previa de imagen médica unificada en el espacio semántico común guiado por el lenguaje](https://eccv.ecva.net/virtual/2024/poster/1165)

### **31. [El modelo médico multimillonario de gran tamaño MMed-Llama 3 se adapta mejor a los escenarios de aplicación médica](https://hyper.ai/news/35242)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35242](https://hyper.ai/news/35242)
- **Equipo de investigación:** Los equipos de Yanfeng Wang y Weidi Xie en la Universidad de Shanghai Jiao Tong
- **Investigación relacionada:** Corpus médico multilingüe MMedC, referente de calificación médica MMedBench, modelos de fundación MMed-Llama 3, MMedLM.
- **Revista científica:** Comunicaciones de la naturaleza, 2024.09
- **Enlace al artículo:**  [Hacia la construcción de un modelo lingüístico multilingüe para la medicina](https://www.nature.com/articles/s41467-024-52417-z)

### **32. [Método de costura de imágenes con endoscopia en cápsula S2P-Matching ayuda en la reconstrucción de imágenes](https://hyper.ai/news/35313)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35313](https://hyper.ai/news/35313)
- **Equipo de investigación:** HUST, SJTU, Universidad de Minzu del Sur-Centro, HKUST(GZ), PolyU, Universidad de Sydney
- **Investigación relacionada:** S2P-Matching, aprendizaje de contraste auto supervisado, codificadores de doble rama, transformadores, coincidencia a nivel de píxeles. La precisión de coincidencia mejoró en 187,9%.
- **Revista científica:** Transacciones de IEEE en Ingeniería Biomédica, 2024.09
- **Enlace al artículo:**  [S2P-Matching: Auto-supervisado Parche basado en la combinación utilizando transformador para cápsulas Endoscópicas imágenes de coser](http://dx.doi.org/10.1109/TBME.2024.3462502)

### **33. [El benchmark médico multimodal GMAI-MMBench cuenta con 284 conjuntos de datos que cubren 18 tareas clínicas.](https://hyper.ai/news/35938)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35938](https://hyper.ai/news/35938)
- **Equipo de investigación:** Laboratorio de IA de Shanghai, Universidad de Washington, Universidad de Monash, ECNU
- **Investigación relacionada:** GMAI-MMBench, el benchmark de IA médica general de código abierto más completo que evalúa modelos de lenguaje de visión de gran tamaño.
- **Revista científica:** NeurIPS 2024, 2024.08
- **Enlace al artículo:**  [GMAI-MMBench: Un punto de referencia de evaluación multimodal integral hacia la IA médica general](https://arxiv.org/abs/2408.03361v7)

### **34. [Método de pronóstico de serie temporal novedoso CGS-Mask revela indicadores clave para las tasas de supervivencia de los pacientes](https://hyper.ai/news/36192)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36192](https://hyper.ai/news/36192)
- **Equipo de investigación:** HUST, Universidad de Sydney, Hospital Tongji
- **Investigación relacionada:** MIMIC-III conjunto de datos, conjunto de datos LSST, conjunto de datos NATOPS, conjunto de datos AE.
- **Revista científica:** AAAI 2024, 2024.03
- **Enlace al artículo:**  [CGS-Mask: Hacer que las predicciones de las series temporales sean intuitivas para todos](https://ojs.aaai.org/index.php/AAAI/article/view/29325)

### **35. [El marco de decodificación cerebral no invasivo fMRI establece las bases para las interfaces cerebro-ordenador y los modelos cognitivos](https://hyper.ai/news/36023)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36023](https://hyper.ai/news/36023)
- **Equipo de investigación:** El equipo de Yi Zeng en el Instituto de Automatización, CAS
- **Investigación relacionada:** Marco de integración multimodal, conjunto de datos de escenarios naturales, conjunto de datos COCO, incorporaciones VAE y CLIP, preprocesadores 3D fMRI, LLM multimodal.
- **Revista científica:** NeurIPS 2024, 2024.10
- **Enlace al artículo:**  [Neuro-Visión al lenguaje: Mejora de la reconstrucción visual basada en grabación cerebral e interacción del lenguaje](https://nips.cc/virtual/2024/poster/93607)

### **36. [El modelo de segmentación de imágenes médicas M2CF-Net mejora la precisión del diagnóstico para el síndrome de Sjogren](https://hyper.ai/news/36700)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36700](https://hyper.ai/news/36700)
- **Equipo de investigación:** El profesor Wei Tu y el profesor Feng Lu en HUST
- **Investigación relacionada:** M2CF-Net, conjunto de datos de patología de las glándulas salivales menores, extracción de ROI, normalización de manchas, parche WSI, algoritmo Vahadane, entrenamiento basado en parches.
- **Revista científica:** MedAI 2023, 2023
- **Enlace al artículo:**  [M2CF-Net: una red de fusión cruzada multi-resolución y multi-escala para el segmentación de la lesión patológica de la síladenitis linfocítica focal](https://doi.ieeecomputersociety.org/10.1109/MedAI59581.2023.00063)

### **37. [BSAFusion permite la alineación y fusión de imágenes médicas multimodal](https://hyper.ai/news/37104)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37104](https://hyper.ai/news/37104)
- **Equipo de investigación:** Universidad de Ciencia y Tecnología de Kunming, Universidad del Océano de China
- **Investigación relacionada:** Procesamiento de imágenes médicas, Alineación de características bidireccional a nivel de paso (BSFA), conjuntos de datos CT-MRI, PET-MRI y SPECT-MRI, aprendizaje profundo, visión por ordenador.
- **Revista científica:** AAAI 2025, 2024.11
- **Enlace al artículo:**  [BSAFusion: una red bidireccional de alineación de características a pasos para la fusión de imágenes médicas no alineadas](https://arxiv.org/abs/2412.08050)

### **38. [En el marco del MLL multi-agente, el KG4Diagnosis ayuda a diagnosticar 362 enfermedades comunes.](https://hyper.ai/news/37208)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37208](https://hyper.ai/news/37208)
- **Equipo de investigación:** Universidad de Warwick, Universidad de Cranfield, Cambridge, Oxford
- **Investigación relacionada:** KG4Diagnosis, marcos jerárquicos multiagentes, construcción automática de gráficos de conocimientos médicos, LLM en General Practitioner (GPLLM), LLM en consultoría.
- **Revista científica:** Programa de puentes AAAI-25, 2024.12
- **Enlace al artículo:**  [KG4Diagnóstico: un marco jerárquico multiagente LLM con mejora del gráfico de conocimiento para el diagnóstico médico](https://arxiv.org/abs/2412.16833)

### **39. [Modelo de segmentación de imágenes ConDSeg resuelve problemas de frontera suave y coincidencia en la imágenes médicas](https://hyper.ai/news/37794)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37794](https://hyper.ai/news/37794)
- **Equipo de investigación:** Universidad de Geociencias de China, Baidu
- **Investigación relacionada:** Marco de mejora de características basado en contrastes ConDSeg, capacitación para el refuerzo de la consistencia, módulos de desacoplamiento semántico, decodificadores de tamaño, BCNet, conjunto de datos Kvasir-SEG.
- **Revista científica:** AAAI 2025, 2024.12
- **Enlace al artículo:**  [ConDSeg: un marco general de segmentación de imágenes médicas mediante el mejoramiento de características impulsado por contraste](https://arxiv.org/abs/2412.08345)

### **40. [El modelo médico M3FM permite un diagnóstico clínico de tiro cero, apoyando la notificación y clasificación de enfermedades](https://hyper.ai/news/37924)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37924](https://hyper.ai/news/37924)
- **Equipo de investigación:** Oxford, Universidad de Rochester, Amazon, Universidad de Westlake, Tencent Youtu Lab
- **Investigación relacionada:** Diagnóstico clínico de tiro cero, imágenes médicas, modelos CLIP, marco M3FM, MultiMedCLIP, conjuntos de datos MIMC-CXR, COVID-19-CT-CXR, CheXpert.
- **Revista científica:** Medicina digital, 2025.02
- **Enlace al artículo:**  [Un modelo multimodal de base médica multilingüe multidomain para el diagnóstico clínico de tiro cero](https://www.nature.com/articles/s41746-024-01339-7)

### **41. [La estimación de sexo basada en el aprendizaje profundo a partir de tomografías de cráneo supera a los expertos forenses humanos](https://hyper.ai/news/38024)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38024](https://hyper.ai/news/38024)
- **Equipo de investigación:** UWA, UNSW, Universidad de Hasanuddin
- **Investigación relacionada:** Marco automatizado basado en el aprendizaje profundo, estimación del sexo del cráneo, tomografías 3D, antropología forense.
- **Revista científica:** Informe científico, 2024.12
- **Enlace al artículo:**  [Aprendizaje profundo frente a evaluadores humanos: estimación forense del sexo a partir de tomografías computarizadas tridimensionales](https://www.nature.com/articles/s41598-024-81718-y)

### **42. [La IA impulsa la investigación médica: los grandes modelos se convierten en el "socio de oro" para la formación de médicos de atención primaria](https://hyper.ai/news/38366)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38366](https://hyper.ai/news/38366)
- **Equipo de investigación:** SJTU, SUS, Tsinghua, Duke, Johns Hopkins, Universidad de Melbourne
- **Investigación relacionada:** Formación de médicos, búsqueda profunda, toma de decisiones en colaboración entre humanos y IA, LLM, diagnóstico y tratamiento de enfermedades crónicas.
- **Revista científica:** El boletín científico, 2025.01
- **Enlace al artículo:**  [Modelos lingüísticos grandes para la formación en diabetes: un estudio prospectivo](https://www.sciencedirect.com/science/article/pii/S2095927325000891)

### **43. [El algoritmo de aprendizaje profundo de AcneDGNet logra la detección y clasificación de lesiones de acné](https://hyper.ai/news/38397)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38397](https://hyper.ai/news/38397)
- **Equipo de investigación:** Hospital Internacional de la Universidad de Pekín
- **Investigación relacionada:** AcneDGNet, Transformers de visión, CNNs, conjunto de datos ACNE04, arquitecturas Swin Transformer.
- **Revista científica:** Informes científicos, 2025.01
- **Enlace al artículo:**  [Evaluación de un modelo de detección de lesiones por acné y clasificación de gravedad para la población china en escenarios de atención médica en línea y fuera de línea](https://www.nature.com/articles/s41598-024-84670-z)

### **44. [Se lanzó el modelo multimodal de segmentación de imágenes médicas VISTA3D, logrando la segmentación automática y la interacción de imágenes en 3D](https://hyper.ai/news/38486)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38486](https://hyper.ai/news/38486)
- **Equipo de investigación:** NVIDIA, UAMS, NIH, Universidad de Oxford
- **Investigación relacionada:** VISTA3D, extracción de supervoxel 3D, segmentación automática, segmentación interactiva dual-modalidad.
- **Revista científica:** ArXiv, 2024.11
- **Enlace al artículo:**  [VISTA3D: Un modelo de base de segmentación unificada para imágenes médicas en 3D](https://doi.org/10.48550/arxiv.2406.05285)

### **45. [Modelo de segmentación unificada de ecocardiografía multiplano EchoONE segmenta con precisión varios planos](https://hyper.ai/news/38544)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38544](https://hyper.ai/news/38544)
- **Equipo de investigación:** Universidad de Shenzhen, Hospital del Pueblo de Shenzhen
- **Investigación relacionada:** Modelo EchoONE, conjunto de datos CAMUS, conjunto de datos HMC-QU, EchoNet_Datos dinámicos.
- **Revista científica:** CVPR 2025, 2025.04
- **Enlace al artículo:**  [EchoONE: Segmentación de varios planos de ecocardiografía en un solo modelo](https://arxiv.org/abs/2412.02993)

### **46. [El marco de diálogo entre varios agentes simula consultas médicas para ayudar al diagnóstico de enfermedades](https://hyper.ai/news/38583)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38583](https://hyper.ai/news/38583)
- **Equipo de investigación:** Hospital de China Occidental, Universidad de Zhejiang, BUPT
- **Investigación relacionada:** Marco de conversación entre múltiples agentes (MAC), LLM, Orphanet, Medline, GPT-3.5, GPT-4.
- **Revista científica:** Naturaleza, 2025.03
- **Enlace al artículo:**  [Mejora de la capacidad de diagnóstico con modelos de lenguaje de conversación de gran tamaño con múltiples agentes](https://www.nature.com/articles/s41746-025-01550-0#Tab6)

### **47. [Marco de aprendizaje profundo STAIG revela información genética detallada en el microambiente tumoral](https://hyper.ai/news/38587)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38587](https://hyper.ai/news/38587)
- **Equipo de investigación:** Instituto de Ciencias Médicas, Universidad de Tokio
- **Investigación relacionada:** Marco STAIG, tejidos biológicos, conjuntos de datos ST, GNNs.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.01
- **Enlace al artículo:**  [STAIG: Análisis de la transcriptomía espacial mediante aprendizaje de contraste con gráficos asistidos por imagen para la exploración de dominios e integración sin alineación](https://www.nature.com/articles/s41467-025-56276-0)

### **48. [El primer marco de re-identificación de imágenes médicas todo en uno MaMI llega a SOTA a través de 11 conjuntos de datos](https://hyper.ai/news/38624)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38624](https://hyper.ai/news/38624)
- **Equipo de investigación:** Shanghai AI Lab y varias universidades
- **Investigación relacionada:** En el marco de la MaMI, los puntos de referencia de re-identificación médica, el adaptador de parámetros de modalidad continua (ComPA), los modelos de fundación médica (MFMs).
- **Revista científica:** CVPR 2025, 2025.03
- **Enlace al artículo:**  [Hacia la identificación completa de la imagen médica](https://arxiv.org/pdf/2503.08173)

### **49. [El modelo de regresión multi-a-uno M2OST predice con precisión la expresión génica utilizando imágenes de patología digital](https://hyper.ai/news/38783)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38783](https://hyper.ai/news/38783)
- **Equipo de investigación:** Universidad de Zhejiang, laboratorio de Zhejiang, Universidad de Ritsumeikan
- **Investigación relacionada:** Imágenes de diapositivas completas, conjuntos de datos de cáncer de mama humano, modelos de transformador, esquemas a nivel de parches.
- **Revista científica:** AAAI 2025, 2024.12
- **Enlace al artículo:**  [M2OST: Regreso de muchos a uno para predecir la transcriptomía espacial a partir de imágenes de patología digital](https://arxiv.org/abs/2409.15092)

### **50. [Herramienta de exploración por resonancia magnética cerebral MindGlide cuantifica las lesiones de esclerosis múltiple](https://hyper.ai/news/38971)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38971](https://hyper.ai/news/38971)
- **Equipo de investigación:** Equipo de investigación de la UCL
- **Investigación relacionada:** Modelo de MindGlide, resonancia magnética, conjuntos de datos de atención de rutina, segmentación de lesiones, nnU-Net, CNNs 3D.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.04
- **Enlace al artículo:**  [Habilitar nuevas ideas de viejas exploraciones mediante la reutilización de archivos clínicos de resonancia magnética para la investigación de la esclerosis múltiple](https://go.hyper.ai/fDEgm)

### **51. [Destilación jerárquica marco de aprendizaje multi-instancia HDMIL procesar rápidamente imágenes de diapositivas completas de gigapixel](https://hyper.ai/news/39157)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39157](https://hyper.ai/news/39157)
- **Equipo de investigación:** HIT, HIT (Shenzhen)
- **Investigación relacionada:** Aprendizaje en múltiples instancias, detección de tumores, WSIs, conjunto de datos Camelyon16, conjunto de datos TCGA-NSCLC.
- **Revista científica:** CVPR 2025, 2025.03
- **Enlace al artículo:**  [Clasificación de imágenes patológicas de Gigapixel rápida y precisa con Distillación jerárquica de aprendizaje multi-instancia](https://arxiv.org/abs/2502.21130)

### **52. [Modelo universal de segmentación de los vasos sanguíneos 3D fundamento de los vasos FM supera con creces los modelos basados en SAM](https://hyper.ai/news/39201)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39201](https://hyper.ai/news/39201)
- **Equipo de investigación:** Universidad de Zurich, ETH Zurich, Universidad Técnica de Múnich
- **Investigación relacionada:** Segmentación de vasos sanguíneos, segmentación de imágenes médicas, modelos generativos condicionales basados en flujo, estrategias de aleatorización de dominios.
- **Revista científica:** CVPR 2025, 2025.01
- **Enlace al artículo:**  [VesselFM: Un modelo de base para la segmentación universal de vasos sanguíneos en 3D](https://go.hyper.ai/lVad9)

### **53. [Las redes neuronales gráficas predicen con precisión la supervivencia del cáncer de pulmón, descubriendo 3 subtipos mortales](https://hyper.ai/news/39435)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39435](https://hyper.ai/news/39435)
- **Equipo de investigación:** Universidad de Cornell, Regeneron Pharmaceuticals
- **Investigación relacionada:** Supervivencia de mezcla codificada por gráfico (GEMS), bases de datos de EHR, conjunto de datos ConcertAI Patient360TM NSCLC, codificadores GNN.
- **Revista científica:** Comunicación sobre la naturaleza, 2025.05
- **Enlace al artículo:**  [Identificación de subfenotipos predictivos para los resultados clínicos utilizando datos del mundo real y aprendizaje automático](https://doi.org/10.1038/s41467-025-59092-8)

### **54. [Estrategia de fusión El modelo de IA predice el riesgo de mortalidad por choque séptico](https://hyper.ai/news/39713)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39713](https://hyper.ai/news/39713)
- **Equipo de investigación:** El Hospital Tongji, HUST
- **Investigación relacionada:** Choque séptico, modelos de Fusión de Clasificación (TCF) basados en TOPSIS, modelos de aprendizaje automático.
- **Revista científica:** Medicina digital, 2025.04
- **Enlace al artículo:**  [Modelos de predicción de mortalidad multispecialidad basados en inteligencia artificial para la choque séptico en un estudio retrospectivo multicéntrico](https://go.hyper.ai/faMLL)

### **55. [El primer modelo clínico de gráfico de pensamiento en HIE mejora la predicción de resultados neurocognitivos en un 15%](https://hyper.ai/news/40828)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/40828](https://hyper.ai/news/40828)
- **Equipo de investigación:** El Hospital Infantil de Boston, la Facultad de Medicina de Harvard, la Universidad de Nueva York, el MIT-IBM Watson Lab
- **Investigación relacionada:** Indicadores de referencia de razonamiento médico, modelo de gráfico de pensamiento clínico (CGoT), conjunto de datos de razonamiento HIE.
- **Revista científica:** CICML 2025, 2025.06
- **Enlace al artículo:**  [Conocimientos visuales y de dominio para el razonamiento médico gráfico de pensamiento a nivel profesional](https://openreview.net/forum?id=tnyxtaSve5)

### **56. [La modelación de la cohorte de pacientes de granos finos utilizando datos multidimensionales de EHR aumenta la precisión de predicción de la duración de la estancia en un 16,3%](https://hyper.ai/news/41303)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/41303](https://hyper.ai/news/41303)
- **Equipo de investigación:** NUS, Universidad de Zhejiang
- **Investigación relacionada:** EHR, Método de aprendizaje de representación de NeuralCohort, MIMIC-III, MIMIC-IV, Diabetes130.
- **Revista científica:** CICML 2025, 2025.06
- **Enlace al artículo:**  [NeuralCohort: aprendizaje de representación neuronal consciente de la cohort para análisis de atención médica](https://openreview.net/forum?id=bqQVa6VRvm)

### **57. [Modelo de aprendizaje profundo APEX examina los posibles candidatos a los antibióticos](https://hyper.ai/news/42377)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42377](https://hyper.ai/news/42377)
- **Equipo de investigación:** Universidad de Pensilvania
- **Investigación relacionada:** bases de datos globales de venenos, predicción del modelo APEX, investigación y desarrollo de antibióticos, venenos animales.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.07
- **Enlace al artículo:**  [Exploración computacional de venenos globales para el descubrimiento de antimicrobianos con la inteligencia artificial de Venomics](https://www.nature.com/articles/s41467-025-60051-6)

### **58. [Evaluación de la epidemiología de las aguas residuales mediante la secuenciación genética y el aprendizaje automático: el método ICA-Var detecta los virus hasta 4 semanas antes](https://hyper.ai/news/42585)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42585](https://hyper.ai/news/42585)
- **Equipo de investigación:** La Universidad de Nueva York
- **Investigación relacionada:** Líneas de aprendizaje automático no supervisadas, Análisis de componentes independientes, detección de virus, métodos de regresión dual, ICA-Var.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.07
- **Enlace al artículo:**  [Detección temprana de las variantes emergentes de SARS-CoV-2 de las aguas residuales a través de la secuenciación del genoma y el aprendizaje automático](https://www.nature.com/articles/s41467-025-61280-5)

### **59. [Modelo de difusión del puente browniano bidireccional mejora la reproducibilidad de la coloración virtual](https://hyper.ai/news/42959)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42959](https://hyper.ai/news/42959)
- **Equipo de investigación:** UCLA
- **Investigación relacionada:** Imagen de espectrometría de masas, modelos de difusión, modelos de difusión del puente browniano, estrategias de selección de canales basadas en SNR.
- **Revista científica:** Avances de la ciencia, 2025.08
- **Enlace al artículo:**  [Coloración virtual de tejidos sin etiqueta en espectrometría de masa de imagen](https://go.hyper.ai/X9GEn)

### **60. [Medical GraphRAG rompe récords de precisión de QA, logrando SOTA en 11 conjuntos de datos de referencia](https://hyper.ai/news/43064)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/43064](https://hyper.ai/news/43064)
- **Equipo de investigación:** Oxford, CMU, Universidad de Edimburgo
- **Investigación relacionada:** RAG, Medical GraphRAG, métodos de recuperación de U, MIMIC-IV, FakeHealth, PubHealth.
- **Revista científica:** ACL 2025, 2025.07
- **Enlace al artículo:**  [RAG de gráficos médicos: hacia un modelo de lenguaje médico seguro a través de la generación aumentada de recuperación de gráficos](https://go.hyper.ai/OaMIE)

### **61. [El agente de atención médica detecta automáticamente problemas de ética médica y seguridad](https://hyper.ai/news/44006)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/44006](https://hyper.ai/news/44006)
- **Equipo de investigación:** Universidad de Wuhan, NTU
- **Investigación relacionada:** LLM, consultas médicas, agente de salud, conjunto de datos de MedDialog.
- **Revista científica:** Naturaleza Inteligencia artificial, 2025.09
- **Enlace al artículo:**  [Agente sanitario: aprovechando el poder de los grandes modelos lingüísticos para la consulta médica](https://go.hyper.ai/09lYX)

### **62. [Clasificador de imágenes de células sanguíneas CytoDiffusion ayuda a detectar la leucemia, superando a los expertos clínicos](https://hyper.ai/news/47004)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/47004](https://hyper.ai/news/47004)
- **Equipo de investigación:** Universidad de Cambridge
- **Investigación relacionada:** Aprendizaje profundo, análisis de imágenes médicas, CNNs, CytoDiffusion, conjunto de datos CytoData, conjunto de datos Raabin-WBC, modelos de difusión.
- **Revista científica:** Naturaleza, 2025.11
- **Enlace al artículo:**  [Clasificación generativa profunda de la morfología de las células sanguíneas](https://www.nature.com/articles/s42256-025-01122-7)

### **63. [El equipo de la UCL propone un marco de aprendizaje federado MORPHFED para el análisis de morfología sanguínea interinstitucional](https://hyper.ai/news/49373)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49373](https://hyper.ai/news/49373)
- **Equipo de investigación:** Departamento de Ciencias de la Computación de la UCL
- **Investigación relacionada:** Exámenes de morfología sanguínea, análisis de morfología de glóbulos blancos, aprendizaje federado, inteligencia artificial médica que preserva la privacidad.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [MORPHFED: Aprendizaje federado para el análisis de morfología sanguínea interinstitucional](https://arxiv.org/abs/2601.04121)

### **64. [El equipo francés propone un marco de aprendizaje automático explicable para predicir con precisión la mortalidad en los candidatos a trasplante de hígado HCC](https://hyper.ai/news/49742)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49742](https://hyper.ai/news/49742)
- **Equipo de investigación:** Télécom Paris y la Universidad Paris-Saclay
- **Investigación relacionada:** Carcinoma hepatocelular (HCC), riesgo de mortalidad en lista de espera de trasplante hepático, Ensemble Learning, análisis SHAP.
- **Revista científica:** Ciencia de los datos de salud
- **Enlace al artículo:**  [Predicción explicable de mortalidad para los candidatos a trasplante hepático con carcinoma hepatocelular: un enfoque de agrupación supervisada](https://spj.science.org/doi/10.34133/hds.0295)

### **65. [La Universidad de Stanford propone Merlin, el primer modelo nativo 3D abdominal CT de lenguaje de visión](https://hyper.ai/news/49864)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49864](https://hyper.ai/news/49864)
- **Equipo de investigación:** Universidad de Stanford
- **Investigación relacionada:** Tomografía computarizada abdominal (CT), modelos de lenguaje de visión 3D (3D VLMs), Merlin, registros electrónicos de salud (EHR).
- **Revista científica:** La naturaleza
- **Enlace al artículo:**  [Merlin: una visión tomográfica computarizadamodelo y conjunto de datos de base del lenguaje](https://www.nature.com/articles/s41586-026-10181-8)

## **IA + Materiales Química**

*(Las entradas continúan siguiendo la misma estructura exacta)*

### **1. [El marco computacional de alto rendimiento genera 120.000 nuevos candidatos de MOF en 33 minutos](https://hyper.ai/news/30269)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30269](https://hyper.ai/news/30269)
- **Equipo de investigación:** El equipo de investigación de Eliu A. Huerta en el Laboratorio Nacional Argonne
- **Investigación relacionada:** El objetivo de la Comisión es garantizar que los Estados miembros tengan en cuenta los requisitos de la legislación comunitaria en materia de protección de datos y de protección de datos.
- **Revista científica:** Naturaleza, 2024.02
- **Enlace al artículo:**  [Un marco generativo de inteligencia artificial basado en un modelo de difusión molecular para el diseño de marcos metálicos orgánicos para la captura de carbono](https://www.nature.com/articles/s42004-023-01090-2)

### **2. [Las pantallas de algoritmos de aprendizaje automático de materiales de electrodos P-SOC](https://hyper.ai/news/29069)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29069](https://hyper.ai/news/29069)
- **Equipo de investigación:** El equipo de investigación de Siyu Ye en la Universidad de Guangzhou
- **Investigación relacionada:** XGBoost, modelos de aprendizaje automático, RF, DFT. Material de electrodo seleccionado con éxito LCN91.
- **Revista científica:** Materiales funcionales avanzados, 2023.12
- **Enlace al artículo:**  [Protección asistida por aprendizaje automático de protones conductores de óxido basado en Co/Fe para el electrodo de aire de la célula de óxido sólido protónico](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202309855)

### **3. [El modelo de aprendizaje automático SEN logra predicciones de propiedades materiales de alta precisión](https://hyper.ai/news/28410)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28410](https://hyper.ai/news/28410)
- **Equipo de investigación:** Huashan Li y el grupo de Biao Wang en la Universidad Sun Yat-sen
- **Investigación relacionada:** Base de datos del proyecto de materiales, SEN, mecanismo de cápsula, aprendizaje profundo.
- **Revista científica:** Comunicaciones de la naturaleza, 2023.08
- **Enlace al artículo:**  [Reconocimiento de simetría material y predicción de propiedades realizadas mediante representación de cápsulas cristalinas](https://www.nature.com/articles/s41467-023-40756-2)

### **4. [La herramienta de aprendizaje profundo GNoME descubre 2,2 millones de nuevos cristales](https://hyper.ai/news/28347)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28347](https://hyper.ai/news/28347)
- **Equipo de investigación:** Equipo de investigación de Google DeepMind
- **Investigación relacionada:** Base de datos GNoME, GNoME, modelos SOTA GNN, aprendizaje profundo, Proyecto de materiales, OQMD, WBM, ICSD.
- **Revista científica:** Naturaleza, 2023.11
- **Enlace al artículo:**  [Escalado del aprendizaje profundo para el descubrimiento de materiales](https://www.nature.com/articles/s41586-023-06735-9)

### **5. [La red neuronal atómica incrustada recursivamente inducida por el campo describe con precisión los cambios de fuerza y dirección del campo externo](https://hyper.ai/news/28285)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28285](https://hyper.ai/news/28285)
- **Equipo de investigación:** Grupo de Bin Jiang en el USTC
- **Investigación relacionada:** Red neuronal atómica incrustada recursivamente inducida por el campo FIREANN, modelo FIREANN-wF.
- **Revista científica:** Comunicación sobre la naturaleza, 2023.10
- **Enlace al artículo:**  [Aprendizaje automático universal para la respuesta de los sistemas atómicos a campos externos](https://www.nature.com/articles/s41467-023-42148-y)

### **6. [El aprendizaje automático predice la adsorción de agua isotérmica de materiales porosos](https://hyper.ai/news/28260)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28260](https://hyper.ai/news/28260)
- **Equipo de investigación:** El grupo de Song Li en HUST
- **Investigación relacionada:** Base de datos EWAID, modelos de aprendizaje automático, RF, ANN.
- **Revista científica:** Revista de Química de Materiales A, 2023.09
- **Enlace al artículo:**  [Predección asistida por el aprendizaje automático de los isotérmicos de adsorción de agua y el rendimiento de enfriamiento](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA03586G)

### **7. [Utilizando el aprendizaje automático para optimizar los co-catalisadores para los fotoanodos BiVO(4)](https://hyper.ai/news/28013)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28013](https://hyper.ai/news/28013)
- **Equipo de investigación:** El Grupo de Hongwei Zhu en la Universidad de Tsinghua
- **Investigación relacionada:** ML, redes neurales, algoritmo AdaBoost, Gradient Boosting, modelos autoexplicables, algoritmos de embalaje, validación cruzada.
- **Revista científica:** Revista de Química de Materiales A, 2023.10
- **Enlace al artículo:**  [Una estrategia de aprendizaje automático integral para el diseño de catalizadores de fotoanodos de alto rendimiento](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA04148D)

### **8. [El algoritmo RetroExplainer realiza predicciones de retrosíntesis basadas en el aprendizaje profundo](https://hyper.ai/news/27406)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/27406](https://hyper.ai/news/27406)
- **Equipo de investigación:** Universidad de Shandong, UESTC
- **Investigación relacionada:** RetroExplainer, aprendizaje profundo, MSMS-GT, DAMT, módulos de decisión interpretables.
- **Revista científica:** Comunicaciones de la naturaleza, 2023.10
- **Enlace al artículo:**  [Predicción de la retrosíntesis con un marco de aprendizaje profundo interpretable basado en tareas de ensamblaje molecular](https://www.nature.com/articles/s41467-023-41698-5)

### **9. [Redes neuronales profundas + PNL utilizada para desarrollar aleaciones resistentes a la corrosión](https://hyper.ai/news/25891)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/25891](https://hyper.ai/news/25891)
- **Equipo de investigación:** El Instituto Max-Planck para la Investigación de Eisenforschung (Alemania)
- **Investigación relacionada:** DNN, NLP. Lea datos de texto sobre métodos de procesamiento y prueba de aleaciones, capaces de predecir nuevos elementos.
- **Revista científica:** Avances de la ciencia, 2023.08
- **Enlace al artículo:**  [Mejorar el diseño de aleaciones resistentes a la corrosión mediante el procesamiento del lenguaje natural y el aprendizaje profundo](https://www.science.org/doi/10.1126/sciadv.adg7992)

### **10. [El aprendizaje profundo determina las estructuras internas de los materiales a través de observaciones superficiales](https://hyper.ai/news/25859)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/25859](https://hyper.ai/news/25859)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** Aprendizaje profundo, computaciones FEA, herramientas de visualización Abaqus, GAN, ViViT, CNN.
- **Revista científica:** Materiales avanzados, 2023.03
- **Enlace al artículo:**  [Rellenar el vacío: enfoques transferibles de aprendizaje profundo para recuperar información física perdida](https://onlinelibrary.wiley.com/doi/full/10.1002/adma.202301449)

### **11. [Desarrollo de 3 nuevos materiales utilizando scintilladores de rayos X innovadores](https://hyper.ai/news/31465)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31465](https://hyper.ai/news/31465)
- **Equipo de investigación:** El equipo de investigación de Hailei Zhang en la Universidad de Hebei
- **Investigación relacionada:** Scintilladores de rayos X dispersibles en agua, nanomateriales, espuma de poliuretano, pantallas flexibles de scintillador de hidrogel para imágenes de rayos X, hidrogeles compuestos de información de cifrado antifalsificación de múltiples niveles.
- **Revista científica:** Comunicaciones de la naturaleza, 2024.03
- **Enlace al artículo:**  [Scintilladores de rayos X dispersibles en agua que permitan el revestimiento y la mezcla con materiales de polímero para múltiples aplicaciones](https://www.nature.com/articles/s41467-024-46287-8)

### **12. [Aprendizaje semi-supervisado extrae información oculta de datos sin etiquetado](https://hyper.ai/news/31089)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31089](https://hyper.ai/news/31089)
- **Equipo de investigación:** El equipo de investigación de Jiayu Wan en SJTU
- **Investigación relacionada:** Aprendizaje semisupervisado, datos no etiquetados, coentrenamiento bayesiano, modelos de visión parcial, modelos de visión completa.
- **Revista científica:** Juel, 2024.03
- **Enlace al artículo:**  [Aprendizaje semisupervisado para la predicción explicable de la vida útil de la batería con pocos disparos](https://doi.org/10.1016/j.joule.2024.02.020 )

### **13. [Extracción automática de conocimientos basada en AutoML](https://hyper.ai/news/30920)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30920](https://hyper.ai/news/30920)
- **Equipo de investigación:** Yulian es el equipo de investigación de la SJTU
- **Investigación relacionada:** AutoML, catalizadores, energía de quimiosorbción, valor Eads, experimentos de eliminación de características, redes neuronales, DFT de alto rendimiento.
- **Revista científica:** PNAS, 2024.03
- **Enlace al artículo:**  [Interpretación de la resistencia a la quimiosorbción con experimentos de eliminación de características basados en AutoML](https://hyper.ai/news/30920)

### **14. [Uni-MOF: Un modelo de aprendizaje automático que predice el comportamiento de adsorción en materiales 3D MOF](https://hyper.ai/news/30663)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30663](https://hyper.ai/news/30663)
- **Equipo de investigación:** Equipo de Investigación de Diannan Lu, Departamento de Ingeniería Química, Universidad de Tsinghua
- **Investigación relacionada:** base de datos hMOFs50, bases de datos MOF/COF, ajuste fino de Uni-MOF. Evaluado más de 630.000 configuraciones espaciales 3D y relaciones de conexión interatómica.
- **Revista científica:** Comunicaciones de la naturaleza, 2024.03
- **Enlace al artículo:**  [Un enfoque integral basado en transformadores para predicciones de adsorción de gases de alta precisión en estructuras orgánicas metálicas](https://www.nature.com/articles/s41467-024-46276-x)

### **15. [¡La microelectrónica se acelera hacia la era post-Moore! ¡Integrando DNN con la tecnología de nanomembranas para analizar con precisión los ángulos de luz incidentes](https://hyper.ai/news/32326)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32326](https://hyper.ai/news/32326)
- **Equipo de investigación:** El grupo de Yongfeng Mei en la Universidad de Fudan
- **Investigación relacionada:** Modelos de elementos finitos, modelos de liberación de nanomembranas tensadas, leyes de Fick, redes neuronales profundas, fotodetectores 3D, modelos de detección sensibles a ángulos.
- **Revista científica:** Comunicaciones de la naturaleza, 2024.04
- **Enlace al artículo:**  [Diseño y construcción de múltiples niveles en laminado de nanomembrana para la fotodetección sensitiva a ángulos tridimensionales](https://www.nature.com/articles/s41467-024-47405-2)

### **16. [Redesignación de los límites de rendimiento de las baterías de litio, proponiendo un modelo electroquímico simplificado basado en el aprendizaje conjunto](https://hyper.ai/news/32323)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32323](https://hyper.ai/news/32323)
- **Equipo de investigación:** El equipo de Jianqiang Kang en la Universidad Tecnológica de Wuhan
- **Investigación relacionada:** Modelos electroquímicos simplificados, modelos de aprendizaje conjunto, aprendizaje automático, Elementos de inercia de primer orden (FIE), algoritmo de realización en tiempo discreto (DRA), aproximación de Padé de orden fraccionario (FOM), aproximación parabólica de tres parámetros (TPM).
- **Revista científica:** Ciencia, 2024.05
- **Enlace al artículo:**  [Un modelo electroquímico simplificado para baterías de iones de litio basado en el aprendizaje conjunto](https://www.sciencedirect.com/science/article/pii/S2589004224009076)

### **17. [El imán superconductor más fuerte a base de hierro nacido a través del aprendizaje automático](https://hyper.ai/news/32556)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32556](https://hyper.ai/news/32556)
- **Equipo de investigación:** Universidad de Agricultura y Tecnología de Tokio
- **Investigación relacionada:** BOXVIA aprendizaje automático, bucles basados en datos, simulaciones numéricas, imanes permanentes superconductores basados en hierro Ba122, modelos de magnetismo refrigerado en campo (FCM).
- **Revista científica:** NPG Asia Materials, 2024.06
- **Enlace al artículo:**  [Magnetos permanentes de superfuerza con superconductores a base de hierro por diseño de procesos basados en datos y en investigadores](https://www.nature.com/articles/s41427-024-00549-5)

### **18. [Las redes neuronales reemplazan la teoría funcional de la densidad!](https://hyper.ai/news/32891)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32891](https://hyper.ai/news/32891)
- **Equipo de investigación:** El equipo de Yong Xu y Wenhui Duan en el Departamento de Física de la Universidad de Tsinghua
- **Investigación relacionada:** Base de datos del proyecto de materiales, método de aprendizaje profundo de DFT Hamiltoniano (DeepH), modelos de materiales universales, redes neuronales, redes neuronales equivalentes, marco AiiDA.
- **Revista científica:** El boletín científico, 2024.06
- **Enlace al artículo:**  [Modelo universal de materiales de la teoría funcional de la densidad de aprendizaje profundo Hamiltoniano](https://doi.org/10.1016/j.scib.2024.06.011)

### **19. [El marco funcional de la densidad de la red neuronal abre la caja negra de la predicción de la estructura electrónica de la materia](https://hyper.ai/news/33525)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33525](https://hyper.ai/news/33525)
- **Equipo de investigación:** El grupo de Yong Xu y Wenhui Duan en la Universidad de Tsinghua
- **Investigación relacionada:** Redes neuronales DFT, DFT variacional, redes neuronales equivalentes, lenguaje Julia, marco Zygote AD, aprendizaje profundo, aprendizaje sin supervisión, DFT.
- **Revista científica:** Fisiología Rev. Lett, 2024.08
- **Enlace al artículo:**  [Teoría funcional de la densidad de la red neuronal basada en la minimización de la energía variacional](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.076401)

### **20. [La primera arquitectura de capacitación en modo completamente avanzado para la computación óptica utilizando redes neuronales logra un gran avance en los chips ópticos domésticos](https://hyper.ai/news/33440)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33440](https://hyper.ai/news/33440)
- **Equipo de investigación:** El equipo de investigación de Qionghai Dai y Lu Fang en la Universidad de Tsinghua
- **Investigación relacionada:** Redes neuronales, modo totalmente avanzado, aprendizaje automático, MNIST, Fashion-MNIST, CIFAR-10, ImageNet, MWD, conjunto de datos Iris, conjuntos de datos objetivo Chromium.
- **Revista científica:** Naturaleza, 2024.08
- **Enlace al artículo:**  [Entrenamiento en modo avanzado completo para redes neuronales ópticas](https://www.nature.com/articles/s41586-024-07687-4)

*(Debido a las restricciones de longitud, la traducción mapea con precisión la estructura proporcionada. Para preservar el formato completo y la consistencia, se aplican reglas de traducción similares a las secciones 21-54 de IA + Materials Chemistry, la totalidad de IA + Zoology-Botany, IA + Agriculture-Forestry-Animal farming, IA + Meteorology, IA + Astronomy, IA + Natural Disaster, AI4S Policy, y otros. Aquí está el texto traducido para los artículos restantes categorizados que coinciden con su entrada exacta.)*

### **21. [Química LLM ChemLLM cubre 7 millones de datos de QA, capacidades profesionales rivales GPT-4](https://hyper.ai/news/34170)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34170](https://hyper.ai/news/34170)
- **Equipo de investigación:** Laboratorio de IA de Shanghai
- **Investigación relacionada:** Datos químicos a gran escala ChemData, ChemPref-10K Datos ingleses/cineses, Datos C-MHChem, ChemBench4K, ChemBench, Multi-Corpus, tareas de PNL.
- **Revista científica:** ArXiv, 2024.02
- **Enlace al artículo:**  [ChemLLM: un modelo de lenguaje químico grande](https://arxiv.org/abs/2402.06852)

### **22. [Microespectrómetros adaptativos de IA producibles a escala de wafer](https://hyper.ai/news/34075)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34075](https://hyper.ai/news/34075)
- **Equipo de investigación:** El grupo de Yongfeng Mei en la Universidad de Fudan
- **Investigación relacionada:** Espectrómetros ópticos, espectrómetros reconstructivos miniaturizados, procesos CMOS IC, conjuntos de datos de corriente de canal de banda estrecha.
- **Revista científica:** PNAS, 2024.08
- **Enlace al artículo:**  [Espectrómetros reconstructivos CMOS-compatibles con resonatores integrados de Fabry-Perot con auto-referenciación](https://www.pnas.org/doi/10.1073/pnas.2403950121)

### **23. [El modelo GNNOpt identifica cientos de candidatos de células solares y materiales cuánticos](https://hyper.ai/news/35009)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35009](https://hyper.ai/news/35009)
- **Equipo de investigación:** Universidad de Tohoku, MIT
- **Investigación relacionada:** Calculaciones DFT, GNNOpt, incorporaciones de ensambles, GNNs equivalentes, base de datos de proyectos de materiales.
- **Revista científica:** Materiales avanzados, 2024.06
- **Enlace al artículo:**  [Redes neuronales universales de integración de conjunto de gráficos para predicción directa del espectro óptico a partir de estructuras de cristal](https://onlinelibrary.wiley.com/doi/epdf/10.1002/adma.202409175)

### **24. [El conjunto de datos OMat24 abierto contiene 110 millones de resultados de cálculo de DFT](https://hyper.ai/news/35515)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35515](https://hyper.ai/news/35515)
- **Equipo de investigación:** Meta
- **Investigación relacionada:** Materiales abiertos 2024 (OMat24), EquformerV2 (eqV2), ab initio MD.
- **Revista científica:** Arxiv, 2024.10
- **Enlace al artículo:**  [Materiales abiertos 2024 (OMat24) Materiales inorgánicos Datos y modelos](https://arxiv.org/pdf/2410.12771)

### **25. [Una nueva aleación refractaria de alta entropía sintetizada a través del aprendizaje automático cuenta con una excelente ductilidad a temperatura ambiente](https://hyper.ai/news/35536)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35536](https://hyper.ai/news/35536)
- **Equipo de investigación:** El equipo de Yanjing Su en la Universidad de Ciencia y Tecnología de Beijing
- **Investigación relacionada:** ML combinado con búsqueda genética, análisis de agrupación, marcos de optimización multiobjetivo (MOO).
- **Revista científica:** Ingeniería, 2024.09
- **Enlace al artículo:**  [Diseño de composición asistida por aprendizaje automático de aleaciones refractarias de alta entropía con resistencia y ductilidad óptimas](https://www.sciencedirect.com/science/article/pii/S2095809924005113 )

### **26. [Modelo generativo de materiales FlowLLM cuenta con un conjunto de datos que cubre más de 45k materiales](https://hyper.ai/news/35846)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/35846](https://hyper.ai/news/35846)
- **Equipo de investigación:** Meta FAIR, Universidad de Ámsterdam
- **Investigación relacionada:** FlowLLM, generación de materiales S.U.N., LLMs, Riemannian Flow Matching (RFM), conjunto de datos MP-20, LoRA.
- **Revista científica:** NeurIPS 2024, 2024.10
- **Enlace al artículo:**  [FlowLLM: Combinación de flujo para la generación de materiales con modelos de lenguaje grandes como distribuciones básicas](https://arxiv.org/pdf/2410.23405)

### **27. [Utilizando el aprendizaje activo para identificar 14.000 óxidos de alta entropía, seleccionando con éxito 4 catalizadores de evolución de hidrógeno de alta actividad](https://hyper.ai/news/36352)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36352](https://hyper.ai/news/36352)
- **Equipo de investigación:** El equipo de Xun Wang en Tsinghua, Liang Wu en SJTU, Shengqi Chu en IHEP CAS, Guang Lin en Purdue, Yan Xiang en Duke
- **Investigación relacionada:** Aprendizaje activo (AL), muestreo Kennard- Stone, catalizadores XRD, CrMnCoNiCu.
- **Revista científica:** Revista de la Sociedad Americana de Química, 2024.10
- **Enlace al artículo:**  [Aprendizaje activo Descubrimiento guiado de óxidos de alta entropía con alta producción de H2](https://pubs.acs.org/doi/10.1021/jacs.4c06272)

### **28. [El modelo de aprendizaje profundo BETE-NET aumenta en 5 veces la eficiencia de búsqueda de materiales superconductores](https://hyper.ai/news/37658)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37658](https://hyper.ai/news/37658)
- **Equipo de investigación:** Universidad de Florida, Universidad de Tennessee
- **Investigación relacionada:** BETE-NET, α2F ((ω) conjuntos de datos, conjuntos de datos de funciones espectral Eliashberg.
- **Revista científica:** npj Materiales computacionales, 2025.01
- **Enlace al artículo:**  [Acelerar el descubrimiento de superconductores a través del aprendizaje profundo templado de la función espectral electrón-fonón](https://www.nature.com/articles/s41524-024-01475-4)

### **29. [La tecnología de árbol de decisión de impulso gradual (GBDT) mejora aún más la predicción de alta precisión de la resistencia a la oxidación de aleaciones de alta entropía](https://hyper.ai/news/37723)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37723](https://hyper.ai/news/37723)
- **Equipo de investigación:** Equipo conjunto de la Universidad de Burdeos, NIMS (Japón), NTHU (Taiwán), KU Leuven, Instituto de Investigación WEL
- **Investigación relacionada:** Tecnología GBDT, algoritmo XGBoost, materiales de alta temperatura, aleaciones de alta entropía (RHEAs y RCCAs).
- **Revista científica:** Scripta Materialia, 2025.01
- **Enlace al artículo:**  [Avanzar en el desarrollo de aleaciones refractarias de alta entropía con modelos predictivos de IA para la resistencia a la oxidación a altas temperaturas](https://doi.org/10.1016/j.scriptamat.2024.116394)

### **30. [Marco de diseño molecular RingFormer predice con mayor precisión las propiedades moleculares optoelectrónicas del material orgánico](https://hyper.ai/news/37870)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37870](https://hyper.ai/news/37870)
- **Equipo de investigación:** La Universidad Politécnica de Hong Kong
- **Investigación relacionada:** Diseño molecular, arquitecturas transformadoras, células solares orgánicas, redes neuronales gráficas, RingFormer.
- **Revista científica:** AAAI 2025, 2024.12
- **Enlace al artículo:**  [RingFormer: Un transformador gráfico mejorado en anillo para la predicción de propiedades de las células solares orgánicas](https://doi.org/10.48550/arXiv.2412.09030)

### **31. [Método de planificación de la retrosíntesis inorgánica Retrieval-Retro mejora la eficiencia y precisión de la síntesis de materiales inorgánicos](https://hyper.ai/news/37969)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/37969](https://hyper.ai/news/37969)
- **Equipo de investigación:** KRICT, KAIST
- **Investigación relacionada:** Retrieval-Retro, VAEs convolucionales, retrievers de completos de precursores enmascarados, retrievers de energía de reacción neuronal.
- **Revista científica:** NeurIPS 2024, 2024.10
- **Enlace al artículo:**  [Recuperación-Retro: Retrosíntesis inorgánica basada en la recuperación con conocimiento de expertos](https://doi.org/10.48550/arXiv.2410.21341)

### **32. [Usar modelos grandes para descifrar los mecanismos de conducción de electrolitos de estado sólido de hidróxido, estableciendo un modelo fiable de predicción de energía de activación](https://hyper.ai/news/39173)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39173](https://hyper.ai/news/39173)
- **Equipo de investigación:** Universidad de Tohoku, Universidad de Sichuan, Instituto de Tecnología de Shibaura
- **Investigación relacionada:** Electrolíticos de estado sólido (EES), LLM, metadínamics ab initio (MetaD).
- **Revista científica:** Angewandte Chemie - Edición Internacional, 2025.04
- **Enlace al artículo:**  [Desentrañando la complejidad de los electrolitos de hidróxido divalentes en baterías de estado sólido a través de un marco basado en datos con un modelo de lenguaje grande](https://go.hyper.ai/isQRi)

### **33. [La búsqueda de datos de espectrometría de masas a escala de Tera habilitada por el aprendizaje automático descubre reacciones químicas desconocidas](https://hyper.ai/news/39224)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39224](https://hyper.ai/news/39224)
- **Equipo de investigación:** Academia Rusa de Ciencias y otros
- **Investigación relacionada:** Espectrometría de masas, motor de búsqueda basado en ML MEDUSA Search, base de datos PubChem.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.01
- **Enlace al artículo:**  [Descubrimiento de reacciones orgánicas con una descifrado de datos de espectrometría de masa a escala de tera mediante aprendizaje automático](https://go.hyper.ai/ak7bN)

### **34. [Método de solución de estructura de IA generativa PXRDnet basado en modelos de difusión resuelve con éxito 200 nanocristales simulados complejos](https://hyper.ai/news/39287)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/39287](https://hyper.ai/news/39287)
- **Equipo de investigación:** Universidad de Columbia, Universidad de Stanford
- **Investigación relacionada:** Difracción de rayos X, red PXRD, conjunto de datos de referencia MP-20-PXRD, base de datos de proyectos de materiales, arquitectura CDVAE, regresores PXRD.
- **Revista científica:** Materiales de la naturaleza, 2025.04
- **Enlace al artículo:**  [Soluciones de estructura ab initio a partir de datos de difracción de polvo nanocristalino a través de modelos de difusión](https://go.hyper.ai/r1K6b)

### **35. [El modelo DreaMS cubre 200 millones de espectros de masa molecular, construyendo el conjunto de datos de especificaciones de masa más grande del mundo GeMS](https://hyper.ai/news/40201)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/40201](https://hyper.ai/news/40201)
- **Equipo de investigación:** Instituto de Química y Bioquímica Orgánica, Academia Checa de Ciencias
- **Investigación relacionada:** conjunto de datos GeMS, localidad-sensitivo Hashing (LSH), arquitecturas BERT, aprendizaje auto supervisado, características de Fourier, sondeo lineal.
- **Revista científica:** Biotecnología de la naturaleza, 2025.05
- **Enlace al artículo:**  [Aprendizaje auto-supervisado de las representaciones moleculares de millones de espectros de masa en tándem utilizando DreaMS](https://go.hyper.ai/uNbqL)

### **36. [El marco de aprendizaje automático equivalente acelera las simulaciones a gran escala de campos eléctricos de materiales](https://hyper.ai/news/40600)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/40600](https://hyper.ai/news/40600)
- **Equipo de investigación:** Universidad de Harvard, Robert Bosch LLC
- **Investigación relacionada:** Marco de aprendizaje automático, arquitecturas de redes neuronales, vibraciones de materiales, propiedades dielectricas, histeria ferroeléctrica.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.04
- **Enlace al artículo:**  [Aprendizaje diferenciable unificado de la respuesta eléctrica](https://go.hyper.ai/18TWg)

### **37. [El método de integración de datos de múltiples fuentes muestra 25 tipos de alternativas de clinker de cemento, lo que equivale a reducir 1.200 millones de toneladas de gases de efecto invernadero](https://hyper.ai/news/40742)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/40742](https://hyper.ai/news/40742)
- **Equipo de investigación:** Soroush Mahjoubi y Elsa A. Olivetti (MIT)
- **Investigación relacionada:** LLM, redes neuronales multitareales, marcos de evaluación de la reactividad.
- **Revista científica:** Materiales de comunicación, 2025.05
- **Enlace al artículo:**  [El análisis de materiales basado en datos de precursores secundarios y naturales de cemento](https://go.hyper.ai/ZOAaW)

### **38. [UNIMATE logra por primera vez un modelo unificado de generación de topología/predección de propiedades](https://hyper.ai/news/41186)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/41186](https://hyper.ai/news/41186)
- **Equipo de investigación:** Virginia Tech, Meta AI
- **Investigación relacionada:** Metamateriales, topologías 3D, aprendizaje automático, modelo UNIMATE, referencias mecánicas de metamateriales.
- **Revista científica:** CICML 2025, 2025.06
- **Enlace al artículo:**  [UNIMATE: Un modelo unificado para la generación mecánica de metamateriales, predicción de propiedades y confirmación de condiciones](https://go.hyper.ai/FoAWw)

### **39. [Transformer Framework permite la generación unificada de sistemas atómicos periódicos y aperiódicos por primera vez](https://hyper.ai/news/41503)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/41503](https://hyper.ai/news/41503)
- **Equipo de investigación:** Meta FAIR, Universidad de Cambridge, MIT
- **Investigación relacionada:** Transformadores, conjunto de datos MP20, conjunto de datos QM9, conjunto de datos GEOM-DRUGS, conjunto de datos QMOF.
- **Revista científica:** CICML 2025, 2025.06
- **Enlace al artículo:**  [Transformadores de difusión de todo átomo: Modelado generativo unificado de moléculas y materiales](https://go.hyper.ai/27d7U)

### **40. [El modelo FASTSOLV realiza predicciones de solubilidad de moléculas pequeñas a cualquier temperatura, acelerando la velocidad de inferencia en 50 veces](https://hyper.ai/news/43318)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/43318](https://hyper.ai/news/43318)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** Previsión de solubilidad de moléculas pequeñas, conjunto de datos BigSolDB, conjunto de datos SolProp, conjunto de datos de Leeds, modelo FASTSOLV.
- **Revista científica:** Comunicación sobre la naturaleza, 2025.08
- **Enlace al artículo:**  [Predicción de solubilidad orgánica basada en datos en el límite de incertidumbre aleatoria](https://www.nature.com/articles/s41467-025-62717-7)

### **41. [Un nuevo método basado en modelos de aprendizaje automático multimodal predice las propiedades de los materiales sin estructuras de cristal completas](https://hyper.ai/news/43410)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/43410](https://hyper.ai/news/43410)
- **Equipo de investigación:** Departamento de Ingeniería Química y Química Aplicada, Universidad de Toronto
- **Investigación relacionada:** Modelos de aprendizaje automático multimodal, conjunto de datos CoRE-2019, conjunto de datos BW20K, conjunto de datos QMOF, conjunto de datos hMOF.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.07
- **Enlace al artículo:**  [Conexión de la síntesis de marcos metálicos orgánicos a aplicaciones que utilizan el aprendizaje automático multimodal](https://www.nature.com/articles/s41467-025-62717-7)

### **42. [El modelo de IA CGformer integra de manera innovadora los mecanismos de atención global, ayudando a la I+D de materiales de alta entropía](https://hyper.ai/news/44908)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/44908](https://hyper.ai/news/44908)
- **Equipo de investigación:** El equipo de Jinjin Li y Fuqiang Huang en AIMS-Lab, SJTU
- **Investigación relacionada:** Materiales de alta entropía I+D, modelo de diseño de materiales de IA CGformer, conjuntos de datos de barreras de difusión de iones de sodio.
- **Revista científica:** La materia, 2025.08
- **Enlace al artículo:**  [CGformer: Red de gráficos de cristal reforzada por transformador con atención global para la predicción de propiedades materiales](https://www.cell.com/matter/abstract/S2590-2385(25)00423-0)

### **43. [Nuevo método de integración de restricciones estructurales SCIGEN se adapta a cualquier modelo de difusión pre-entrenado](https://hyper.ai/news/44973)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/44973](https://hyper.ai/news/44973)
- **Equipo de investigación:** El equipo de Mingda Li en el MIT, la Universidad Estatal de Michigan, el Laboratorio Nacional de Oak Ridge
- **Investigación relacionada:** Base de datos de materiales AL (redes arquímedesas), modelos de difusión, generación de estructuras de cristal, modelo DiffCSP.
- **Revista científica:** Materiales de la naturaleza, 2025.09
- **Enlace al artículo:**  [Integración de las restricciones estructurales en un modelo generativo para el descubrimiento de materiales cuánticos](https://www.nature.com/articles/s41563-025-02355-y)

### **44. [Modelo de IA generativo informado físicamente SpectroGen requiere solo una sola entrada de modalidad para lograr la generación transmodal con una correlación experimental del 99%](https://hyper.ai/news/45456)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/45456](https://hyper.ai/news/45456)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** SpectroGen, base de datos RRUFF, marco VAE, modelos físicos anteriores.
- **Revista científica:** La materia, 2025.10
- **Enlace al artículo:**  [SpectroGen: una inteligencia artificial generativa informada físicamente para la caracterización acelerada de materiales espectroscópicos transmodales](https://www.cell.com/matter/abstract/S2590-2385(25)00477-1)

### **45. [MOF-ChemUnity reconstruye el conocimiento panorámico del MOF, empujando el descubrimiento de materiales a la era de la "IA explicable"](https://hyper.ai/news/46723)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/46723](https://hyper.ai/news/46723)
- **Equipo de investigación:** Universidad de Toronto, Centro de Investigación de Innovación en Energía Limpia (NRC Canadá)
- **Investigación relacionada:** Ciencia de los materiales, MOF-ChemUnity, base de datos CoRE MOF 2019, base de datos QMOF, LLM, RAG aumentado con gráfico.
- **Revista científica:** Publicaciones de la ACS, 2025.11
- **Enlace al artículo:**  [MOF-ChemUnity: modelos de lenguaje informados en la literatura para la investigación del marco orgánico de metal](https://pubs.acs.org/doi/10.1021/jacs.5c11789)

### **46. [Se lanzó el modelo PET-MAD de potencial universal ligero, que logra una precisión de nivel de modelo específica con muestras mínimas](https://hyper.ai/news/47637)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/47637](https://hyper.ai/news/47637)
- **Equipo de investigación:** EPFL
- **Investigación relacionada:** Calculaciones de principios, potenciales interatómicos de aprendizaje automático, modelo PET-MAD, estructura del transformador Point Edge.
- **Revista científica:** Comunicaciones de la naturaleza
- **Enlace al artículo:**  [PET-MAD como un potencial interatómico universal ligero para el modelado de materiales avanzados](https://www.nature.com/articles/s41467-025-65662-7)

### **47. [Sistema de IA ChemOntology lanzado, reduciendo a la mitad los costos de búsqueda de vías de reacción mediante la integración de conocimientos químicos](https://hyper.ai/news/48069)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48069](https://hyper.ai/news/48069)
- **Equipo de investigación:** Universidad de Hokkaido
- **Investigación relacionada:** Superficie energética potencial (PES), Coordenadas intrínsecas de reacción (IRC), reacción inducida por fuerza artificial (AFIR), quimiontología.
- **Revista científica:** Catálisis de ACS
- **Enlace al artículo:**  [Quimiontología: un método reutilizable basado en la ontología química explícita para acelerar las búsquedas de vías de reacción](https://pubs.acs.org/doi/10.1021/acscatal.5c06298)

### **48. [Princeton y otros proponen conjuntamente un método de LLM para predecir la energía libre de MOF, evaluando con gran precisión la viabilidad de la síntesis](https://hyper.ai/news/48685)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48685](https://hyper.ai/news/48685)
- **Equipo de investigación:** Universidad de Princeton y Escuela de Minas de Colorado
- **Investigación relacionada:** Marco Metálico-Organico (MOF), predicción de energía libre, Modelos de lenguaje grande (LLM), evaluación termodinámica.
- **Revista científica:** JACS (Publicaciones de ACS)
- **Enlace al artículo:**  [Previsión de la energía libre de MOF con alta precisión y rapidez a través del aprendizaje automático](https://pubs.acs.org/doi/10.1021/jacs.5c13960)

### **49. [El equipo de la Universidad de Yale propone el modelo MOSAIC, coordinando los LLM para generar esquemas de síntesis química altamente confiables](https://hyper.ai/news/48806)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48806](https://hyper.ai/news/48806)
- **Equipo de investigación:** Equipo de Investigación de la Universidad de Yale
- **Investigación relacionada:** Química sintética moderna, LLM, modelo MOSAIC, estructuración del conocimiento.
- **Revista científica:** La naturaleza
- **Enlace al artículo:**  [Inteligencia colectiva para la síntesis química asistida por IA](https://www.nature.com/articles/s41586-026-10131-4)

### **50. [MIT y otros proponen el modelo de difusión DiffSyn, que permite la planificación generativa de las vías de síntesis de materiales](https://hyper.ai/news/49252)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49252](https://hyper.ai/news/49252)
- **Equipo de investigación:** MIT, la Universidad Técnica de Múnich y la Universitat Politècnica de Valencia
- **Investigación relacionada:** Planificación de la síntesis de materiales, modelo de difusión generativa DiffSyn, zeolitas.
- **Revista científica:** Naturaleza Ciencia computacional
- **Enlace al artículo:**  [DiffSyn: un enfoque de difusión generativa para la planificación de la síntesis de materiales](https://www.nature.com/articles/s43588-025-00949-9)

### **51. [La Universidad de Michigan y Farasis Energy proponen conjuntamente el método "Discovery Learning", que acortará drásticamente los ciclos de predicción de la vida de la batería](https://hyper.ai/news/49527)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49527](https://hyper.ai/news/49527)
- **Equipo de investigación:** El profesor Ziyou Song en la Universidad de Michigan, Ann Arbor, y el equipo de Weiran Jiang en Farasis Energy
- **Investigación relacionada:** Previsión de la vida útil del ciclo de la batería, aprendizaje de descubrimiento (DL), aprendizaje científico de la máquina, conjunto de datos de células de bolsa de iones de litio.
- **Revista científica:** La naturaleza
- **Enlace al artículo:**  [Discovery Learning predice la vida útil del ciclo de la batería a partir de experimentos mínimos](https://www.nature.com/articles/s41586-025-09951-7)

### **52. [La Universidad de Cornell propone un marco SCAN, que predice y explica con gran precisión el rendimiento de los electrolitos de la batería](https://hyper.ai/news/49537)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49537](https://hyper.ai/news/49537)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Cornell
- **Investigación relacionada:** Química de solventes de sal, electrolitos no acuosos (NAE), marco SCAN, red de múltiples características (MFNet), estrategia de enrutamiento dinámico.
- **Revista científica:** Naturaleza Ciencia computacional
- **Enlace al artículo:**  [Un marco de interpretación dinámico guiado por la ruta para la química de los disolventes de sal](https://www.nature.com/articles/s43588-026-00955-5)

### **53. [El MIT propone un modelo de base de gran tamaño DefectNet para la caracterización no destructiva y la cuantificación de defectos internos de materiales](https://hyper.ai/news/50122)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50122](https://hyper.ai/news/50122)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** Ciencia de los materiales, ingeniería de defectos, caracterización no destructiva, espectros vibracionales y densidad de teléfonos de estados (PDoS), DefectNet, potenciales interatómicos de aprendizaje automático (MLIPs).
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [Un modelo de base para la identificación de defectos no destructivos a partir de espectros vibracionales](https://arxiv.org/abs/2506.00725)

### **54. [La Universidad de Cornell propone una plataforma multi-agente EMSeek, logrando un análisis automatizado de las imágenes de microscopía electrónica en línea completa](https://hyper.ai/news/50298)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50298](https://hyper.ai/news/50298)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Cornell
- **Investigación relacionada:** Microscopía electrónica (EM), plataforma multiagente, EMSeek, análisis de materiales, modelado estructural y inferencia de propiedades.
- **Revista científica:** Los avances científicos
- **Enlace al artículo:**  [Microscopía electrónica de puente y análisis de materiales con una plataforma agencial autónoma](https://www.science.org/doi/10.1126/sciadv.aed0583)

## **IA + Zoología-Botánica**

### **1. [SBeA analiza los comportamientos sociales de los animales basándose en un marco de aprendizaje de pocos disparos](https://hyper.ai/news/29353)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29353](https://hyper.ai/news/29353)
- **Equipo de investigación:** Equipo de investigación de Pengfei Wei en los Institutos de Tecnología Avanzada de Shenzhen, CAS
- **Investigación relacionada:** Datos de PAIR-R24M, aprendizaje bidireccional de transferencia, aprendizaje no supervisado, redes neuronales artificiales, modelos de reconocimiento de identidad.
- **Revista científica:** La inteligencia de la máquina de la naturaleza, 2024.01
- **Enlace al artículo:**  [Estimación, identificación y comportamiento de posturas sociales 3D multianimal integrado con un marco de aprendizaje de pocos disparos](https://www.nature.com/articles/s42256-023-00776-5)

### **2. [El método de aprendizaje profundo basado en redes siamesas captura automáticamente los procesos de desarrollo embrionario](https://hyper.ai/news/28419)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28787](https://hyper.ai/news/28419)
- **Equipo de investigación:** El biólogo de sistemas Patrick Müller y el equipo de investigación de la Universidad de Konstanz
- **Investigación relacionada:** ImageNet conjunto de datos, redes siamesas, aprendizaje profundo, aprendizaje de transferencia, entrenamiento de pérdida de triplet, entrenamiento iterativo, entrenamiento de subtareas. Identifica las etapas clave del desarrollo embrionario sin intervención humana.
- **Revista científica:** Métodos de la naturaleza, 2023.11
- **Enlace al artículo:**  [Descubrir el tiempo y el ritmo de desarrollo mediante el aprendizaje profundo](https://www.nature.com/articles/s41592-023-02083-8)

### **3. [Pipeline sistemática para recopilar datos de fenotipos de plantas a través de drones para predecir fechas óptimas de cosecha](https://hyper.ai/news/28303)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28303](https://hyper.ai/news/28303)
- **Equipo de investigación:** Equipos de investigación de la Universidad de Tokio y la Universidad de Chiba
- **Investigación relacionada:** Modelos de predicción de beneficios, modelos de segmentación, anotación interactiva, LabelMe, modelos de regresión no lineales, modelo BiSeNet.
- **Revista científica:** Fenomía de las plantas, 2023.09
- **Enlace al artículo:**  [La predicción de los datos de cosecha basados en drones puede reducir la pérdida de alimentos en las granjas y mejorar los ingresos de los agricultores](https://spj.science.org/doi/10.34133/plantphenomics.0086#body-ref-B4)

### **4. [El sistema de alerta de cámara de IA distingue con precisión a los tigres de otras especies](https://hyper.ai/news/27954)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/27954](https://hyper.ai/news/27954)
- **Equipo de investigación:** Equipo de Investigación de la Universidad de Clemson
- **Investigación relacionada:** TrailGuard AI. Transmite imágenes relevantes a los dispositivos de los gerentes de reservas en un minuto.
- **Revista científica:** Biociencia, 2023.09
- **Enlace al artículo:**  [Previsión exacta de los efectos de la variante de error de sentido en todo el proteoma con AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492) (Nota: El enlace original proporcionado parece no coincidir con el título, pero se mantiene basado en el texto fuente).

### **5. [El uso de datos de los Labrador retriever y la comparación de 3 modelos revela rasgos de comportamiento que afectan el rendimiento de los perros de detección](https://hyper.ai/news/25472)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/25472](https://hyper.ai/news/25472)
- **Equipo de investigación:** Instituto de Investigación Abigail Wexner en el Hospital Nacional de Niños y la Universidad Rocky Vista
- **Investigación relacionada:** Pruebas de AT, pruebas de Env, Bosque aleatorio, Máquinas de soporte vectorial, Regresión logística, PCA, RFECV.
- **Revista científica:** Informe científico, 2023.08
- **Enlace al artículo:**  [Predicción de aprendizaje automático y clasificación de la selección conductual en un programa de detección olfativa canina](https://www.nature.com/articles/s41598-023-39112-7)

### **6. [Modelo de reconocimiento de imágenes de múltiples especies basado en la clasificación ArcFace Cabeza para el reconocimiento facial](https://hyper.ai/news/25164)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/25164](https://hyper.ai/news/25164)
- **Equipo de investigación:** Equipo de Investigación de la Universidad de Hawai
- **Investigación relacionada:**  [Datos sobre cetáceos](https://github.com/knshnb/kaggle-happywhale-1st-place), modelos de recorte de imágenes, modelos de reconocimiento de imágenes, YOLOv5, Detic. logró una precisión media de 0,869.
- **Revista científica:** Métodos en Ecología y Evolución, 2023.07
- **Enlace al artículo:**  [Un enfoque de aprendizaje profundo para la fotoidentificación demuestra un alto rendimiento en dos docenas de especies de cetáceos](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14167)

### **7. [Monitorear la floración de la cereza en Japón utilizando Python API y API de visión por ordenador](https://hyper.ai/news/24512)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/24512](https://hyper.ai/news/24512)
- **Equipo de investigación:** Equipo de Investigación de la Universidad de Monash (Australia)
- **Investigación relacionada:** Datos de sitios de redes sociales (SNS), Google Cloud Vision AI, modelos de aprendizaje automático.
- **Revista científica:** Flora, 2023.07
- **Enlace al artículo:**  [La firma espacial-temporal de la flor de cerezo floreciendo en todo Japón se reveló a través del análisis de imágenes de sitios de redes sociales](https://www.sciencedirect.com/science/article/abs/pii/S0367253023001019)

### **8. [El método de genética de poblaciones basado en el aprendizaje automático revela el mecanismo de formación de sabores de uva](https://hyper.ai/news/24442)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/24442](https://hyper.ai/news/24442)
- **Equipo de investigación:** Instituto de Genómica Agrícola de Shenzhen, CAS
- **Investigación relacionada:**  [Secuencias del genoma de la uva](https://github.com/zhouyflab/Grapevine_Adaptive_Maladaptive_Introgression), aprendizaje automático.
- **Revista científica:** Procesos de la Academia Nacional de Ciencias, 2023.06
- **Enlace al artículo:**  [Introgresión adaptativa y mala adaptativa en la domesticación de la uva](https://www.pnas.org/doi/abs/10.1073/pnas.2222041120)

### **9. [Revisión: Desbloqueo de la investigación bioinformática de manera más eficiente con IA](https://hyper.ai/news/33931)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33931](https://hyper.ai/news/33931)
- **Contenido principal:** La IA tiene abundantes casos de aplicación en campos biológicos como la búsqueda de homología, la alineación de secuencias múltiples, la construcción filogenética, el análisis de secuencias genómicas y el descubrimiento de genes. Para los investigadores biológicos, integrar hábilmente las herramientas de aprendizaje automático en el análisis de datos sin duda acelerará los descubrimientos científicos y mejorará la eficiencia de la investigación.

### **10. [El modelo BirdFlow predice con precisión las rutas de vuelo de las aves migratorias](https://hyper.ai/news/34781)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33942](https://hyper.ai/news/33942)
- **Equipo de investigación:** UMass Amherst, Universidad de Cornell
- **Investigación relacionada:** Modelado por computadora, conjunto de datos de eBird, modelos de Markov, búsqueda de red de hiperparámetros, calibración de Entropy, pronóstico de k-semana.
- **Revista científica:** Métodos en Ecología y Evolución, 2023.01
- **Enlace al artículo:**  [BirdFlow: Aprender los movimientos estacionales de las aves a partir de datos de eBird](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14052)

### **11. [Nuevo modelo de bioacústica de ballenas identifica 8 especies de cetáceos](https://hyper.ai/news/34781)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34781](https://hyper.ai/news/34781)
- **Equipo de investigación:** Equipo de investigación de Google
- **Investigación relacionada:** Ejes de frecuencia a escala mel, amplitud de recuento comprimida, invocación independiente a través de la API SavedModel de TensorFlow, redes neuronales convolucionales, modelos de clasificación para detectar llamadas de ballena jorobada, herramienta de visualización interactiva "Pattern Radio". El modelo está específicamente diseñado para ballenas azules y aletañas y puede identificar 8 especies distintas de 94 especies conocidas de ballenas.
- **Revista científica:** Investigación de Google, 2024.09
- **Enlace al artículo:**  [Silbidos, canciones, boings y biotwangs: Reconociendo vocalizaciones de ballenas con IA](https://research.google/blog/whistles-songs-boings-and-biotwangs-recognizing-whale-vocalizations-with-ai)

### **12. [El aprendizaje automático aisla el alfabeto fonético de las ballenas espermatozoides, muy similar al lenguaje humano con una capacidad de transporte de información más fuerte](https://hyper.ai/news/33433)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33433](https://hyper.ai/news/33433)
- **Equipo de investigación:** Pratyusha Sharma (MIT) y el equipo del proyecto CETI
- **Investigación relacionada:** Datos de DSWP, aprendizaje automático, revelando la naturaleza estructural de las vocalizaciones de las ballenas espermatozoides.
- **Revista científica:** Comunicaciones de la naturaleza, 2024.05
- **Enlace al artículo:**  [Estructura contextual y combinatoria de las vocalizaciones de las ballenas espermatozoides](https://www.nature.com/articles/s41467-024-47221-8)

### **13. [El modelo PlantLncBoost alcanza hasta un 96% de precisión en la predicción interespecial de lncRNA](https://hyper.ai/news/40667)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/40667](https://hyper.ai/news/40667)
- **Equipo de investigación:** Universidad de Tecnología de Shandong, Universidad Forestal de Beijing, Academia de Ciencias Agrícolas de Guangdong, Universidad de São Paulo, Universidad de Medicina y Ciencias Rosalind Franklin, Universidad de Umeå
- **Investigación relacionada:** Base de datos GreeNC, algoritmo PlantLncBoost, estrategia de importancia forestal aleatoria (RFI), algoritmo de eliminación de características recurrentes (RFE).
- **Revista científica:** Nuevo fitólogo, 2024.05
- **Enlace al artículo:**  [PlantLncBoost: características clave para la identificación de los lncRNA de las plantas y una mejora significativa en la precisión y generalización](https://go.hyper.ai/F7pkc)

### **14. [Perch 2.0 cubre casi 15.000 especies, refrescante SOTA en la detección de clasificación bioacoustic](https://hyper.ai/news/42807)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42807](https://hyper.ai/news/42807)
- **Equipo de investigación:** Google DeepMind, Google Investigación
- **Investigación relacionada:** Bioacoustics, Perch 2.0, conjunto de datos Xeno-Canto, conjunto de datos iNaturalist, conjunto de datos Tierstimmenarchiv, conjunto de datos FSD50K, arquitectura EfficientNet-B3.
- **Revista científica:** ArXiv, 2025.08
- **Enlace al artículo:**  [Perch 2.0: La amarga lección de la bioacústica](https://arxiv.org/abs/2508.04665)

## **Inteligencia artificial+ Agricultura-Forestación-Cultura de animales**

### **1. [El uso de redes neuronales convolucionales para la estimación rápida y precisa del rendimiento del arroz](https://hyper.ai/news/26100)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/26100](https://hyper.ai/news/26100)
- **Equipo de investigación:** Equipo de Investigación de la Universidad de Kyoto
- **Investigación relacionada:** Las redes neuronales convolucionales. El modelo de CNN puede analizar con precisión las fotos de campo obtenidas desde diferentes ángulos de disparo, tiempos y períodos, logrando resultados estables de predicción de rendimiento.
- **Revista científica:** Fenomía de las plantas, 2023.07
- **Enlace al artículo:**  [El aprendizaje profundo permite una estimación instantánea y versátil del rendimiento del arroz utilizando imágenes RGB basadas en el suelo](https://spj.science.org/doi/10.34133/plantphenomics.0073)

### **2. [Modelo diseñado a través de monitores del algoritmo YOLOv5 de postura de semilla y nacimiento de cerdos](https://hyper.ai/news/25131)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/25131](https://hyper.ai/news/25131)
- **Equipo de investigación:** Equipo de investigación de la Universidad Agrícola de Nanjing
- **Investigación relacionada:** YOLOv5, modelos que detectan la postura de los cerdos y los cerdos. Puede emitir alertas 5 horas antes de que comience la cría con una precisión promedio general del 92,9%.
- **Revista científica:** Sensores, 2023.01
- **Enlace al artículo:**  [La semilla de cultivos de la alerta temprana y la supervisión de las implementaciones de la tabla integrada](https://www.mdpi.com/1424-8220/23/2/727)

### **3. [Combinando observaciones de laboratorio y aprendizaje automático para demostrar que los sonidos ultrasónicos emitidos por las plantas de tomate y tabaco estresados pueden viajar en el aire](https://hyper.ai/news/24547)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/24547](https://hyper.ai/news/24547)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Tel Aviv (Israel)
- **Investigación relacionada:** Modelos de aprendizaje automático, SVM, Basic, MFCC, red de dispersión, modelos de red neuronal, validación cruzada de exclusión. La precisión de reconocimiento alcanzó el 99,7%; los gritos de tomate alcanzaron su punto máximo en los días 4-6.
- **Revista científica:** Celular, 2023.03
- **Enlace al artículo:**  [Los sonidos emitidos por las plantas bajo estrés son transmitidos en el aire e informativos](https://doi.org/10.1016/j.cell.2023.03.009)

### **4. [Análisis de imágenes de drones + IA detecta plagas forestales](https://hyper.ai/news/23807)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/23807](https://hyper.ai/news/23807)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Lisboa
- **Investigación relacionada:** El modelo YOLO mostró un rendimiento de detección más alto que el FRCNN. La combinación de drones y modelos de IA puede permitir efectivamente la detección temprana de nidos de polillas procesadoras de pinos.
- **Revista científica:** NeoBiota, 2023.05
- **Enlace al artículo:**  [Pruebas de detección temprana de los nidos de la mariposa del pino Thaumetopoea pityocampa utilizando métodos basados en UAV](https://neobiota.pensoft.net/article/95692/)

### **5. [Visión por ordenador + aprendizaje profundo desarrollado para un sistema de detección de parálisis de vacas lecheras](https://hyper.ai/news/33957)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33957](https://hyper.ai/news/33957)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Newcastle y Fera Science Ltd.
- **Investigación relacionada:** Visión por computadora, aprendizaje profundo, algoritmos Mask-RCNN, algoritmos SORT, algoritmos CatBoost. La precisión alcanzó el 94%-100%.
- **Revista científica:** Naturaleza, 2023.03
- **Enlace al artículo:**  [Estimación de las posiciones de aprendizaje profundo para la detección de la parálisis de varios ganados](https://www.nature.com/articles/s41598-023-31297-1)

## **IA + Meteorología**

### **1. [Revisión: Modelos de previsión del tiempo basados en datos de aprendizaje automático](https://hyper.ai/news/28124)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28124](https://hyper.ai/news/28124)
- **Contenido principal:** La predicción meteorológica numérica (NWP) es el método principal de pronóstico meteorológico. Resolve el estado del sistema terrestre en una base de cuadrícula por cuadrícula a través de la integración numérica, que es un proceso de razonamiento deductivo. Desde 2022, los modelos de aprendizaje automático en la predicción meteorológica han logrado una serie de avances, algunos de los cuales coinciden con las predicciones de alta precisión del Centro Europeo de Pronósticos Meteorológicos de Rango Medio (ECMWF).

### **2. [Revisión: Recopilación de datos de centros de tormentas de granizo y predicción de clima extremo utilizando modelos grandes](https://hyper.ai/news/25874)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/25874](https://hyper.ai/news/25874)
- **Contenido principal:** En 2021, la Academia Alibaba DAMO y el Centro Meteorológico Nacional desarrollaron conjuntamente un algoritmo de IA para la predicción del tiempo, prediciendo con éxito múltiples eventos meteorológicos convectivos severos. *La naturaleza* el uso de modelos generativos profundos para la previsión de precipitaciones en tiempo real.
A principios de 2023, DeepMind lanzó oficialmente GraphCast, capaz de pronosticar el clima global para los próximos 10 días a una resolución de 0.25 ° en un minuto. En abril, la Universidad de Ciencias y Tecnología de la Información de Nanjing colaboró con el Laboratorio de IA de Shanghai para desarrollar el modelo meteorológico de gran tamaño "FengWu", reduciendo aún más los errores en comparación con GraphCast.
Posteriormente, Huawei lanzó el modelo grande "Pangu-Weather". Al introducir una red neuronal 3D, la precisión de predicción de Pangu superó por primera vez los sistemas de pronóstico NWP más precisos. Recientemente, la Universidad de Tsinghua y la Universidad de Fudan lanzaron consecutivamente los modelos "NowCastNet" y "FuXi".

### **3. [Crear nuevos algoritmos para predecir con precisión las precipitaciones extremas utilizando simulaciones globales de resolución de tormentas y aprendizaje automático](https://hyper.ai/news/24995)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/24995](https://hyper.ai/news/24995)
- **Equipo de investigación:** Laboratorio LEAP en la Universidad de Columbia
- **Investigación relacionada:** Aprendizaje automático, línea de base-NN, org-NN, redes neuronales.
- **Revista científica:** PNAS, 2023.03
- **Enlace al artículo:**  [El aprendizaje implícito de la organización convectiva explica la estocástica de las precipitaciones](https://www.pnas.org/doi/10.1073/pnas.2216158120)

### **4. [El modelo de aprendizaje automático basado en el bosque aleatorio CSU-MLP predice el clima severo de mediano alcance](https://hyper.ai/news/33966)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33966](https://hyper.ai/news/33966)
- **Equipo de investigación:** Universidad Estatal de Colorado y NOAA
- **Investigación relacionada:** GEFS/R conjunto de datos, aprendizaje automático, procesamiento de interpolación, RF. Capaz de predecir con precisión el tiempo severo en el rango medio (4-8 días).
- **Revista científica:** Meteorología y previsiones, 2022.08
- **Enlace al artículo:**  [Un nuevo paradigma para las previsiones meteorológicas severas de mediano rango: predicciones probabilísticas aleatorias basadas en bosques](https://arxiv.org/abs/2208.02383)

### **5. [Sistema de pronóstico del tiempo de extremo a extremo basado en datos Aardvark Meteorología acelera las predicciones en docenas de veces en comparación con los métodos tradicionales](https://hyper.ai/news/38605)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38605](https://hyper.ai/news/38605)
- **Equipo de investigación:** Universidad de Cambridge, Instituto Alan Turing, Universidad de Toronto, Microsoft Research, ECMWF, British Antarctic Survey, Google DeepMind
- **Investigación relacionada:** Sistemas de pronóstico meteorológico, conjuntos de datos de HadISD, redes colaborativas de observación de microondas infrarrojas, sistemas ATOVS, datos del dispersor ASCAT, conjuntos de datos de reanálisis ERA5, redes convolucionales ligeras.
- **Revista científica:** Naturaleza, 2025.03
- **Enlace al artículo:**  [Previsión del tiempo basada en datos de extremo a extremo](https://www.nature.com/articles/s41586-025-08897-0)

### **6. [El sistema de predicción del tiempo de aprendizaje automático FCN3 admite la inferencia de un solo GPU ultra rápida](https://hyper.ai/news/42456)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42456](https://hyper.ai/news/42456)
- **Equipo de investigación:** NVIDIA, Laboratorio Nacional Lawrence Berkeley (LBNL), UC Berkeley, Caltech
- **Investigación relacionada:** Predicción del tiempo numérica, FourCastNet 3, aprendizaje automático, conjunto de datos ERA5, diseño de operadores neurales esféricos, estrategias paralelas híbridas.
- **Revista científica:** ArXiv, 2025.07
- **Enlace al artículo:**  [FourCastNet 3: Un enfoque geométrico para la previsión del tiempo probabilística de aprendizaje automático a escala](https://arxiv.org/pdf/2507.12144)

### **7. [El modelo indio de pronóstico del monzón basado en 36 estaciones meteorológicas logra una excelente pronóstico a escala de la ciudad](https://hyper.ai/news/44271)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/44271](https://hyper.ai/news/44271)
- **Equipo de investigación:** IIT Bombay, Universidad de Maryland
- **Investigación relacionada:** Redes Neurales Convolucionales (CNN), Aprendizaje de Transferencia (CNN-TL), pronóstico del tiempo, métodos de sincronización de eventos, predicción de lluvias.
- **Revista científica:** RSI, 2025.08
- **Enlace al artículo:**  [Pronóstico de lluvias extremas hiperlocales en Mumbai: enfoque de reducción de escala basado en el aprendizaje de la transferencia de redes neuronales convolucionales](https://go.hyper.ai/j05Vt)

### **8. [ACE2 completa un pronóstico estacional de 4 meses en sólo 2 minutos](https://hyper.ai/news/44473)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/44473](https://hyper.ai/news/44473)
- **Equipo de investigación:** Centro Met Office Hadley, Universidad de Exeter, Instituto Allen para la IA (Ai2)
- **Investigación relacionada:** Previsión estacional, conjunto de datos de reanálisis ERA5, conjunto de datos del Proyecto Climatológico Mundial de Precipitación (GPCP) v2.3, modelo atmosférico de aprendizaje automático ACE2.
- **Revista científica:** npj Ciencia del clima y la atmósfera, 2025.08
- **Enlace al artículo:**  [Predicciones estacionales globales hábiles a partir de un modelo meteorológico de aprendizaje automático entrenado en datos de reanálisis](https://go.hyper.ai/YyRfT)

### **9. [Se lanzó el modelo de previsión meteorológica incremental VA-MoE, logrando un rendimiento SOTA con una reducción de parámetros del 75%](https://hyper.ai/news/45152)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/45152](https://hyper.ai/news/45152)
- **Equipo de investigación:** HKUST, Universidad de Zhejiang, y otros
- **Investigación relacionada:** Previsión meteorológica incremental, VA-MoE, conjunto de datos ERA5, paradigma de entrenamiento en dos etapas, Transformer, mecanismos de pérdida conjunta de múltiples tareas, previsión meteorológica.
- **Revista científica:** CICV25, 2025.07
- **Enlace al artículo:**  [VA-MoE: mezcla adaptativa de variables de expertos para la previsión meteorológica incremental](https://arxiv.org/abs/2412.02503)

### **10. [Se publicó el modelo de difusión en rodadura (ERDM) elucidado, que resuelve los desafíos de pronóstico a largo plazo y mantiene una ventaja sobre las líneas de base de EDM en las previsiones a medio y largo plazo](https://hyper.ai/news/45367)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/45367](https://hyper.ai/news/45367)
- **Equipo de investigación:** NVIDIA
- **Investigación relacionada:** Previsión meteorológica de medio alcance, programación progresiva del ruido, Modelos de difusión eleucida (EDM), Modelos de difusión en movimiento eleucida (ERDM), conjunto de datos de referencia de dinámica de fluidos de Navier-Stokes, conjunto de datos de reanálisis ERA5, mecanismos de programación del ruido, Equaciones diferenciales ordinarias de flujo de probabilidad (ODE), redes denoizadoras.
- **Revista científica:** NeurIPS 2025, 2025.06
- **Enlace al artículo:**  [Modelos de difusión en movimiento elucidados para previsiones meteorológicas probabilísticas](https://doi.org/10.48550/arXiv.2506.20024)

### **11. [El nuevo modelo de difusión latente OmniCast se lanzó, resolviendo la acumulación de errores en los modelos de pronóstico meteorológico autoregresivos](https://hyper.ai/news/45701)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/45701](https://hyper.ai/news/45701)
- **Equipo de investigación:** Equipo de la UCLA, Laboratorio Nacional Argonne
- **Investigación relacionada:** Modelo de difusión latente OmniCast, pronóstico meteorológico probabilístico S2S de alta precisión, Autoencodadores de variación (VAE), modelos transformadores, métodos conjuntos de muestreo espacial-temporal, conjunto de datos de base ERA5, conjunto de pruebas WeatherBench2 (WB2), conjunto de pruebas ChaosBench, arquitectura UNet.
- **Revista científica:** NeurIPS 2025, 2025.10
- **Enlace al artículo:**  [OmniCast: un modelo de difusión latente enmascarado para la predicción del tiempo a través de escalas temporales](https://go.hyper.ai/YANIu)

### **12. [NVIDIA propone un nuevo método de destilación a largo alcance, rompiendo los cuellos de botella de la IA en las previsiones meteorológicas a largo plazo](https://hyper.ai/news/48471)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48471](https://hyper.ai/news/48471)
- **Equipo de investigación:** Investigación NVIDIA, Universidad de Washington
- **Investigación relacionada:** Modelos de pronóstico meteorológico de IA, arquitecturas autoregresivas, pronóstico subsacional a estacional (S2S), destilación a largo alcance.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [Destilación a largo plazo: destilación de 10.000 años de clima simulado en modelos meteorológicos de IA a largo plazo](https://arxiv.org/abs/2512.22814)

### **13. [El equipo conjunto propone el modelo de Red Neural Graphic SeaCast, que logre un pronóstico regional de océanos ultra rápido](https://hyper.ai/news/49553)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49553](https://hyper.ai/news/49553)
- **Equipo de investigación:** Universidad de Helsinki, Centro Euro-Mediterráneo sobre el Cambio Climático (CMCC), Universidad de Salento
- **Investigación relacionada:** Previsión regional del océano, redes neuronales gráficas (GNN), modelo SeaCast, Sistema de Previsión del Mediterráneo (MedFS), campos de fuerza atmosférica.
- **Revista científica:** Informes científicos
- **Enlace al artículo:**  [Previsión precisa del Mar Mediterráneo mediante el aprendizaje profundo basado en gráficos](https://www.nature.com/articles/s41598-025-31177-w)

## **IA + Astronomía**

### **1. [El algoritmo PRIMO aprende las reglas de propagación de la luz alrededor de los agujeros negros para reconstruir imágenes de agujeros negros más nítidos](https://hyper.ai/news/23698)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/23698](https://hyper.ai/news/23698)
- **Equipo de investigación:** Instituto de Estudios Avanzados (Princeton)
- **Investigación relacionada:** El algoritmo PRIMO, PCA, GRMHD, reconstruyó la imagen del agujero negro.
- **Revista científica:** Las cartas de la revista astrofísica, 2023.04
- **Enlace al artículo:**  [La imagen del agujero negro M87 reconstruido con PRIMO](https://iopscience.iop.org/article/10.3847/2041-8213/acc32d/pdf)

### **2. [Formación de algoritmos de visión por ordenador con datos simulados para afilar y "restaurar" imágenes astronómicas](https://hyper.ai/news/33975)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33975](https://hyper.ai/news/33975)
- **Equipo de investigación:** Universidad de Tsinghua y Universidad del noroeste
- **Investigación relacionada:**  [GalSim](https://github.com/GalSim-developers/GalSim), [Cosmos](https://doi.org/10.5281/zenodo.3242143), algoritmos de visión por computadora, CNNs, algoritmo Richardson-Lucy, redes neuronales ADMM desenrolladas.
- **Revista científica:** Notificaciones mensuales de la Sociedad Astronómica Real, 2023.06
- **Enlace al artículo:**  [Deconvolución de imagen de la galaxia para lente gravitacional débil con ADMM enchufe y juego desarrollado](https://www.nature.com/articles/s41421-023-00543-1)

### **3. [Usando un algoritmo de aprendizaje automático no supervisado Astronomía para encontrar anomalías previamente ignoradas](https://hyper.ai/news/26316)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/26316](https://hyper.ai/news/26316)
- **Equipo de investigación:** Investigadores de la Universidad del Cabo Occidental (UWC)
- **Investigación relacionada:** CNN, aprendizaje automático no supervisado, Astronomía, PCA, Selva de aislamiento, algoritmo LOF, iForest algoritmo, NS algoritmo, algoritmo DR. Astronomía encontró 1.635 anomalías de las 2.000 imágenes con la puntuación de anomalías más alta.
- **Revista científica:** ArXiv, 2023.09
- **Enlace al artículo:**  [Astronomía a escala: búsqueda de anomalías entre 4 millones de galaxias](https://arxiv.org/abs/2309.08660)

### **4. [Método basado en el aprendizaje automático para la identificación y extracción de parámetros CME](https://hyper.ai/news/31870)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31870](https://hyper.ai/news/31870)
- **Equipo de investigación:** Laboratorio clave estatal de clima espacial, Centro Nacional de Ciencias Espaciales, CAS
- **Investigación relacionada:** Aprendizaje automático, redes neuronales, algoritmo Otsu, algoritmos de coincidencia de trayectoria, identificación automática, extracción de parámetros, CACTus, CORIMP, SEEDS. Capaz de identificar Ejecciones de Masa Coronal.
- **Revista científica:** El diario astrofísico, 2024.04
- **Enlace al artículo:**  [Un algoritmo para la determinación de los parámetros cinemáticos de la expulsión de masa coronal basados en el aprendizaje automático](https://iopscience.iop.org/article/10.3847/1538-4365/ad2dea)

### **5. [Aprendizaje profundo descubre 107 casos de líneas de absorción neutra de carbono](https://hyper.ai/news/32210)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32210](https://hyper.ai/news/32210)
- **Equipo de investigación:** Equipo internacional dirigido por el investigador Jian Ge en el Observatorio Astronómico de Shanghai, CAS
- **Investigación relacionada:** Métodos de aprendizaje profundo, SDSS DR12, modelos de Red Neural Convolutional. Descubierto 107 casos de absorbentes atómicos-carbono neutros en el universo temprano, con una precisión de detección del 99,8%.
- **Revista científica:** MNRAS, 2024.05
- **Enlace al artículo:**  [Detección de absorbedores neutros de carbono atómico raros con una red neuronal profunda](https://doi.org/10.1093/mnras/stae799)

### **6. [El modelo StarFusion logra una alta resolución espacial de la predicción de imágenes](https://hyper.ai/news/34254)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34254](https://hyper.ai/news/34254)
- **Equipo de investigación:** Equipo de Jin Chen en el Laboratorio Estatal Clave de Procesos de Superficie de la Tierra y Ecología de Recursos, BNU
- **Investigación relacionada:** Métodos de aprendizaje profundo, imágenes de detección remota, predicción de imágenes de alta resolución espacial, modelo de arquitectura de fusión desacoplada de doble corriente espacial-temporal propuesto StarFusion, conjuntos de datos Gaofen-1, conjuntos de datos satelitales Sentinel-2, modelo SRGAN-STF, modelos de regresión lineal, modelos de regresión multivariados.
- **Revista científica:** Diario de detección remota, 2024.07
- **Enlace al artículo:**  [Un método híbrido de fusión espacial-temporal para imágenes de alta resolución espacial: fusión de Gaofen-1 y Sentinel-2 sobre paisajes agrícolas](https://spj.science.org/doi/10.34133/remotesensing.0159)

### **7. [Método de generación de imágenes por satélite desarrollado basado en SD3, construyendo el mayor conjunto de datos de detección remota hasta la fecha, EcoMapper](https://hyper.ai/news/41041)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/41041](https://hyper.ai/news/41041)
- **Equipo de investigación:** Universidad Técnica de Múnich, Universidad de Zúrich
- **Investigación relacionada:** conjunto de datos de detección remota EcoMapper, Estable Diffusion 3, DiffusionSat, generación de imágenes multiconditionales, generación de imágenes satelitales.
- **Revista científica:** CICML 2025, 2024.06
- **Enlace al artículo:**  [EcoMapper: Modelado generativo para imágenes satelitales conscientes del clima](https://go.hyper.ai/VFRWu)

### **8. [La IA de la Tierra se centra en 3 tipos de datos principales, mejorando las capacidades de razonamiento geospacial en un 64%](https://hyper.ai/news/45528)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/45528](https://hyper.ai/news/45528)
- **Equipo de investigación:** Investigación de Google, Google X, Google Nube
- **Investigación relacionada:** AI geoespacial, conjunto de datos RS-Landmarks, conjunto de datos RS-WebLI, conjunto de datos RS-Global, IA de la Tierra, Modelos de Fundación (FMs), Modelos de Lenguaje Grande (LLM), modelos de fundación de detección remota, alineación espacial + integración de representación, razonamiento geospacial.
- **Revista científica:** ArXiv, 2024.10
- **Enlace al artículo:**  [IA de la Tierra: Desbloqueo de las ideas geospaciales con modelos de fundación y razonamiento transmodal](https://doi.org/10.48550/arXiv.2510.18318)

### **9. [Nace el primer modelo de fundación multimodal astronómico AION-1, pre-entrenado en 200 millones de objetivos astronómicos](https://hyper.ai/news/46802)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/46802](https://hyper.ai/news/46802)
- **Equipo de investigación:** UC Berkeley, Cambridge, Oxford, y equipos de más de 10 instituciones de investigación globales
- **Investigación relacionada:** AION-1, conjuntos de datos cosmológicos multimodal, esquemas de tokenización, estructura de codificación y decodificación de transformadores, estructura de ResNet.
- **Revista científica:** NeurIPS 2025, 2025.10
- **Enlace al artículo:**  [AION-1: Modelo de la Fundación Omnimodal para las Ciencias Astronómicas](ttps://openreview.net/forum?id=6gJ2ZykQ5W)

### **10. [La nueva tubería basada en datos identifica con precisión 7 muestras de lente raras de 810.000 cuásares usando CNN](https://hyper.ai/news/47240)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/47240](https://hyper.ai/news/47240)
- **Equipo de investigación:** Stanford, Laboratorio Nacional de Aceleradores de la SLAC, Universidad de Pekín, INAF - Observatorio Astronómico de Brera, UCL, UC Berkeley, etc.
- **Investigación relacionada:** Redes Neurales Convolucionales (CNN), conjuntos de datos DESI, lentes gravitacionales fuertes, quásares, investigación de agujeros negros, coevolución galáctica, catálogos FastSpec.
- **Revista científica:** ArXiv, 2024.10
- **Enlace al artículo:**  [Los quásares que actúan como lentes fuertes encontrados en DESI DR1](https://arxiv.org/abs/2511.02009)

### **11. [El equipo de la ESA propone un método semi-supervisado AnomalyMatch para examinar eficientemente cuerpos celestes raros de casi 100 millones de registros de Hubble](https://hyper.ai/news/49138)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49138](https://hyper.ai/news/49138)
- **Equipo de investigación:** Centro Europeo de Astronomía Espacial (ESAC) bajo la Agencia Espacial Europea (ESA)
- **Investigación relacionada:** Anomalias astrofísicas, clasificación binaria semi-supervisada, aprendizaje activo, AnomalyMatch, Archivo legado de Hubble.
- **Revista científica:** Astronomía y astrofísica
- **Enlace al artículo:**  [Identificación de anomalías astrofísicas en 99,6 millones de recortes de fuentes del archivo legado del Hubble usando AnomalyMatch](https://doi.org/10.1051/0004-6361/202555512)

### **12. [La Universidad de Warwick propone la tubería de validación RAVEN, confirmando 118 nuevos exoplanetas](https://hyper.ai/news/50073)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50073](https://hyper.ai/news/50073)
- **Equipo de investigación:** Equipo de Investigación de la Universidad de Warwick
- **Investigación relacionada:** Validación de exoplanetas, Satélite de Encuesta de Exoplanetas en Tránsito (TESS), tubería RAVEN, conjuntos de datos de formación sintética, eliminación falsa positiva.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [RAVEN: Calificación y validación de exoplanetas](https://arxiv.org/abs/2509.17645)

### **13. [La Universidad de Warwick propone un marco de aprendizaje conjunto para predecir con gran precisión los parámetros asteroseísmicos de las estrellas δ Scuti](https://hyper.ai/news/50946)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50946](https://hyper.ai/news/50946)
- **Equipo de investigación:** Equipo de Investigación de la Universidad de Warwick
- **Investigación relacionada:** δ Estrellas de Scuti, asteroseismología, datos de curva de luz TESS, marcos de aprendizaje automático conjunto, gran separación de frecuencia Δν.
- **Revista científica:** La revista Astronómica
- **Enlace al artículo:**  [Ensemble Machine Learning Approach para estimar los índices asteroisismos para δ estrellas de Scuti observadas por TESS](https://beta.iopscience.iop.org/article/10.3847/1538-3881/ae4bd8)

### **14. [El equipo de investigación español propone el sistema StreakMind, utilizando IA para detectar automáticamente las tiras de satélite en imágenes astronómicas](https://hyper.ai/news/51385)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/51385](https://hyper.ai/news/51385)
- **Equipo de investigación:** Observatorio Naval Real Español (ROA) y otras instituciones
- **Investigación relacionada:** Detección de objetos cercanos a la Tierra (NEO), defensa planetaria, detección de rayas de imágenes astronómicas, sistema StreakMind, YOLO11.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [StreakMind: Detección y análisis de IA de las tiras de satélite en imágenes astronómicas con integración automatizada de bases de datos](https://hyper.ai/papers/2605.03429)

## **IA + Desastres naturales**

### **1. [El aprendizaje automático predice el riesgo de subsidio de la tierra en los próximos 40 años](https://hyper.ai/news/30173)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30173](https://hyper.ai/news/30173)
- **Equipo de investigación:** El equipo de investigación de Jianxin Liu en la Universidad Central del Sur
- **Investigación relacionada:** Los conjuntos de datos SAR, modelos de aprendizaje automático, XGBR, LSTM.
- **Revista científica:** Diario de gestión del medio ambiente, 2024.02
- **Enlace al artículo:**  [Técnicas basadas en el aprendizaje automático para la simulación de la subida de la tierra en una zona urbana](https://www.sciencedirect.com/science/article/abs/pii/S0301479724000641?via%3Dihub)

### **2. [Modelo de segmentación semántica SCDUNet++ utilizado para el mapeo de deslizamientos de tierra](https://hyper.ai/news/29672)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29672](https://hyper.ai/news/29672)
- **Equipo de investigación:** Equipo de investigación de Rui Liu en la Universidad Tecnológica de Chengdu
- **Investigación relacionada:** Los datos multispétrales de Sentinel-2, los datos de NASADEM, los datos de deslizamiento de tierra, GLFE, CNN, DSSA, DSC, DTL, Transformer, aprendizaje de transferencia profunda. La intersección sobre la Unión (IoU) aumentó en un 1,91% - 24,42%, y F1 aumentó en un 1,26% - 18,54%.
- **Revista científica:** Jornal Internacional de Observación y Geoinformación de la Tierra Aplicada, 2024.01
- **Enlace al artículo:**  [Un sistema de aprendizaje profundo para predecir el tiempo hasta la progresión de la retinopatía diabética](https://www.nature.com/articles/s41591-023-02702-z)  *(Nota: Desajuste de enlace presente en la fuente, mantenido tal como está).*

### **3. [Las redes neuronales convierten imágenes solares 2D en imágenes reconstruidas en 3D](https://hyper.ai/news/28797)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28797](https://hyper.ai/news/28797)
- **Equipo de investigación:** Centro Nacional de Investigación Atmosférica (NCAR)
- **Investigación relacionada:** Las redes neuronales de NeRF, modelo SuNeRF, revelaron los polos del sol por primera vez.
- **Revista científica:** Arxiv, 2022.11
- **Enlace al artículo:**  [SuNeRF: Validación de una reconstrucción global en 3D de la corona solar utilizando imágenes EUV simuladas](https://arxiv.org/abs/2211.14879)

### **4. [Las redes neuronales adictivas analizan los factores que influyen en los desastres naturales](https://hyper.ai/news/24957)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/24957](https://hyper.ai/news/24957)
- **Equipo de investigación:** Equipo de investigación de la UCLA
- **Investigación relacionada:** Redes neuronales aditivas, algoritmos de detección semiautomáticos, ANN aditivo, SNN, modelos de selección de características, capacitación en múltiples etapas.
- **Revista científica:** Comunicaciones Tierra y medio ambiente, 2023.05
- **Enlace al artículo:**  [Modelado de susceptibilidad a deslizamientos por red neuronal interpretable](https://www.nature.com/articles/s43247-023-00806-5)

### **5. [Utilizando inteligencia artificial explicable para analizar varios factores geográficos en Gippsland, Australia](https://hyper.ai/news/33994)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33994](https://hyper.ai/news/33994)
- **Equipo de investigación:** Universidad Nacional de Australia, Universidad de Tecnología de Sydney
- **Investigación relacionada:** Modelos forestales aleatorios, modelos de aprendizaje automático, técnicas de validación cruzada.
- **Revista científica:** Ciencias Directas, 2023.06
- **Enlace al artículo:**  [Inteligencia artificial explicable (IAC) para interpretar los factores contribuyentes que se incorporan al modelo de predicción de la susceptibilidad a incendios forestales](https://www.sciencedirect.com/science/article/pii/S0048969723016224)

### **6. [Modelo de previsión de inundaciones basado en el aprendizaje automático](https://hyper.ai/news/31060)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31060](https://hyper.ai/news/31060)
- **Equipo de investigación:** Investigación de Google
- **Investigación relacionada:** Proyecto HydroATLAS, redes LSTM, codificadores-decodificadores, validación cruzada. El rendimiento superó los modelos de pronóstico GloFAS de última generación.
- **Revista científica:** Naturaleza, 2024.03
- **Enlace al artículo:**  [Previsión global de inundaciones extremas en cuencas de agua no cubiertas](https://www.nature.com/articles/s41586-024-07145-1)

### **7. [ED-DLSTM logra la predicción de inundaciones en zonas no controladas](https://hyper.ai/news/32138)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32138](https://hyper.ai/news/32138)
- **Equipo de investigación:** Equipo de Chaojun Ouyang en el Instituto de Peligros y Medio Ambiente de las Montañas (IMHE), CAS
- **Investigación relacionada:** Datos de 2.000 estaciones hidrológicas, conjuntos de datos de capacitación de EE.UU., Reino Unido, Europa Central, Canadá, modelos interregionales de conjuntos espaciotemporales, codificadores-decodificadores, datos multimodal, datos de atributos de la red estática espacial, convoluciones residuales.
- **Revista científica:** La innovación, 2024.04
- **Enlace al artículo:**  [Aprendizaje profundo para la previsión de flujos y inundaciones transregionales a escala mundial](https://doi.org/10.1016/j.xinn.2024.100617)

### **8. [El modelo ChloroFormer proporciona una advertencia temprana de floración de algas marinas](https://hyper.ai/news/34544)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34544](https://hyper.ai/news/34544)
- **Equipo de investigación:** Laboratorio de SIG en la Universidad de Zhejiang
- **Investigación relacionada:** El conjunto de datos TZ02, el modelo de aprendizaje profundo ChloroFormer, las redes neuronales del transformador, los mecanismos de filtro de frecuencia, los mecanismos de atención de frecuencia.
- **Revista científica:** Investigación del agua, 2024.10
- **Enlace al artículo:**  [Mejora del pronóstico de la concentración de clorofila en aguas costeras mediante la integración de las redes de análisis de Fourier y Transformer](https://doi.org/10.1016/j.watres.2024.122160 )

### **9. [El primer modelo marino de lenguaje grande OceanGPT aceptado por ACL 2024!](https://hyper.ai/news/33044)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33044](https://hyper.ai/news/33044)
- **Equipo de investigación:** Ningyu Zhang y el equipo de Huajun Chen, Facultad de Ciencias y Tecnología de la Computación, Universidad de Zhejiang
- **Investigación relacionada:** LLM de dominio marino, expresiones regulares, algoritmos Hash, marco de generación de instrucciones de ciencias marinas DoInstruct, colaboración multiagente, gpt-3.5-turbo, algoritmos BM25, LLaMA-2, Vicuna-7b-1.5, encarnado AI.
- **Revista científica:** ACL 2024, 2024.05
- **Enlace al artículo:**  [OceanGPT: un modelo de lenguaje amplio para las tareas de ciencia oceánica](https://arxiv.org/abs/2310.02031)

### **10. [La IA predice las tendencias del calentamiento global](https://hyper.ai/news/36778)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36778](https://hyper.ai/news/36778)
- **Equipo de investigación:** Equipo de Investigación Conjunta de la Universidad de Stanford, la Universidad Estatal de Colorado y la ETH Zurich
- **Investigación relacionada:** AI sistemas CNN, modelos climáticos globales, aprendizaje de transferencia, predicción de condiciones bajo continuamente aumentando las emisiones de carbono, verificación de la precisión de los marcos predictivos en diferentes períodos históricos. AI predice una probabilidad del 90% de cambios máximos de temperatura récord.
- **Revista científica:** Letras de investigación geofísica, 2024.12
- **Enlace al artículo:**  [Predicciones basadas en datos sobre el máximo calentamiento bajo rápida descarbonización](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL111832)

### **11. [Nuevo modelo GeoAI explica la distribución del flujo de calor superficial en la meseta tibetana](https://hyper.ai/news/36501)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36501](https://hyper.ai/news/36501)
- **Equipo de investigación:** Escuela de Ciencias de la Tierra, Universidad de Zhejiang
- **Investigación relacionada:** Métodos de inteligencia espacialModelo de regresión ponderada de redes neuronales geográficas (EI-GNNWR) mejorado por explicación, conjuntos de datos de flujo de calor superficial, conjuntos de datos de flujo de calor continental NGHF, conjuntos de datos de flujo de calor superficial continental chino, cálculos de valor SHAP, modelos de impulso de gradiente extremo, modelos de red neuronal completamente conectados, cuadrados mínimos ordinarios, modelos de regresión ponderados geográficamente.
- **Revista científica:** Journal of Geophysical Research: Tierra sólida, 2024.10
- **Enlace al artículo:**  [La distribución del flujo de calor superficial en la meseta tibetana revelada por métodos basados en datos](https://doi.org/10.1029/2023JB028491)

### **12. ["WenHai" medio ambiente marino inteligente pronóstico modelo grande supera el pronóstico marino numérico](https://hyper.ai/news/38294)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38294](https://hyper.ai/news/38294)
- **Equipo de investigación:** Equipo de investigación dirigido por el académico Lixin Wu en el Laboratorio Laoshan, OUC, USTC, Qingdao Guoshi Technology Group
- **Investigación relacionada:** Pronóstico ambiental marino, oceanografía física, inteligencia artificial, diseño de arquitectura de redes neuronales basado en la teoría de la dinámica marina, incorporación explícita de fórmulas en masa en redes neuronales.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.03
- **Enlace al artículo:**  [Predicción del océano Eddying con una red neuronal profunda](https://www.nature.com/articles/s41467-025-57389-2)

### **13. [La Universidad de Minnesota propone el modelo de aprendizaje automático guiado por el conocimiento FHNN, que realiza pronósticos de inundaciones de alta precisión](https://hyper.ai/news/49992)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49992](https://hyper.ai/news/49992)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Minnesota Twin Cities
- **Investigación relacionada:** Previsión de inundaciones, aprendizaje automático guiado por conocimiento (KGML), redes neuronales jerárquicas factorizadas (FHNN), modelos basados en procesos (PBM), ciclos hidrológicos y predicción de flujo.
- **Revista científica:** Investigación de los recursos hídricos
- **Enlace al artículo:**  [Aprendizaje automático guiado por el conocimiento para la previsión de inundaciones operacionales](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024WR039064)

### **14. [Google lanza la versión 2 de su sistema global de previsión de inundaciones, extendiendo significativamente los tiempos de previsión válidos](https://hyper.ai/news/51472)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/51472](https://hyper.ai/news/51472)
- **Equipo de investigación:** Investigación de Google
- **Investigación relacionada:** Previsión de inundaciones, simulación hidrológica, modelos hidrológicos de aprendizaje automático, Modelo global de previsión de inundaciones v2, conjunto de datos de análisis y previsiones de flujo de agua de Google (GRRR).
- **Revista científica:** Esfera de la atmósfera
- **Enlace al artículo:**  [Extender las previsiones globales de inundaciones de mediano alcance: el modelo de previsión global de inundaciones de Google versión 2](https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2283/)

## **Otros**

### **1. [TacticAI Asistente de fútbol alcanza el 90% de utilidad práctica en diseños tácticos](https://hyper.ai/news/30454)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30454](https://hyper.ai/news/30454)
- **Equipo de investigación:** Google DeepMind y el Liverpool FC
- **Investigación relacionada:** Aprendizaje profundo geométrico, GNNs, modelos predictivos, modelos generativos. Aumentaron las oportunidades de disparo en un 13%.
- **Revista científica:** Naturaleza, 2024.03
- **Enlace al artículo:**  [TacticAI: un asistente de IA para tácticas de fútbol](https://www.nature.com/articles/s41467-024-45965-x)

### **2. [El modelo de difusión SPDiff permite la simulación de movimientos de multitud a largo alcance](https://hyper.ai/news/30069)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30069](https://hyper.ai/news/30069)
- **Equipo de investigación:** Centro de Ciencia Urbana y Computación (EE Dept, Tsinghua), Laboratorio clave de Shenzhen de Habilitación de Datos Ubiquitos (Tsinghua SIGS), Laboratorio Peng Cheng
- **Investigación relacionada:** Datos de GC, UCY, modelos de difusión de denotación condicional, SPDiff, GN, EGCL, LSTM, algoritmos de entrenamiento de despliegue de múltiples marcos.
- **Revista científica:** Naturaleza, 2024.02
- **Enlace al artículo:**  [Física social Modelo de difusión informada para la simulación de la multitud](https://arxiv.org/abs/2402.06680)

### **3. [Las instalaciones científicas inteligentes impulsan cambios de paradigma en la investigación](https://hyper.ai/news/29570)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29570](https://hyper.ai/news/29570)
- **Equipo de investigación:** El equipo de investigación de Hong Mei en la Universidad de Shanghai Jiao Tong
- **Investigación relacionada:** Modelos científicos grandes, simulación generativa e inversión, experimentos no tripulados inteligentes autónomos, colaboración científica de confianza a gran escala, asistentes de investigación de IA.
- **Revista científica:** Boletín de la Academia de Ciencias de China, 2023.12
- **Enlace al artículo:**  [IA para la ciencia: las instalaciones científicas inteligentes revolucionan la investigación fundamental](http://www.bulletin.cas.cn/previewFile?id=52965146&type=pdf&lang=zh)

### **4. [DeepSymNet representa expresiones simbólicas basadas en el aprendizaje supervisado](https://hyper.ai/news/29243)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29243](https://hyper.ai/news/29243)
- **Equipo de investigación:** Equipo de investigación de Min Wu en el Instituto de Semiconductores, CAS
- **Investigación relacionada:**  [conjuntos de datos de red simbólicas](https://hyper.ai/datasets/29321), DSNOrg, DSNB, DSNBM, aprendizaje supervisado. Utiliza etiquetas más cortas, reduce el espacio de búsqueda de predicciones y mejora la robustez del algoritmo.
- **Revista científica:** Diarios y revistas, 2023.11
- **Enlace al artículo:**  [Descubrir expresiones matemáticas a través de DeepSymNet: un marco de regresión simbólica basado en la clasificación](https://ieeexplore.ieee.org/document/10327762)

### **5. [El modelo de lenguaje grande ChipNeMo ayuda a los ingenieros en el diseño de chips](https://hyper.ai/news/29134)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29134](https://hyper.ai/news/29134)
- **Equipo de investigación:** Equipo de investigación de NVIDIA
- **Investigación relacionada:** Técnicas de adaptación de dominios, NVIDIA NeMo, modelos de recuperación adaptados al dominio, RAG, ajuste fino supervisado con instrucciones específicas del dominio, DAPT, SFT, Tevatron, LLM.
- **Revista científica:** ArXiv, 2024.04
- **Enlace al artículo:**  [ChipNeMo: LLM adaptados a los dominios para el diseño de chips](https://arxiv.org/abs/2311.00176)

### **6. [AlphaGeometry puede resolver problemas de geometría](https://hyper.ai/news/29059)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/29059](https://hyper.ai/news/29059)
- **Equipo de investigación:** Equipo de investigación de Google DeepMind
- **Investigación relacionada:** Modelos neuronales de lenguaje, motores de deducción simbólica, modelos de lenguaje.
- **Revista científica:** Naturaleza, 2024.01
- **Enlace al artículo:**  [Resolver la geometría de las Olimpiadas sin demostraciones humanas](https://www.nature.com/articles/s41586-023-06747-5)

### **7. [Aprendizaje de refuerzo aplicado a la planificación espacial urbana](https://hyper.ai/news/28917)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28917](https://hyper.ai/news/28917)
- **Equipo de investigación:** El equipo de investigación de Yong Li en la Universidad de Tsinghua
- **Investigación relacionada:** Aprendizaje de refuerzo profundo, marcos colaborativos de inteligencia artificial humana, modelos de planificación urbana, redes políticas, redes de valor, GNN.
- **Revista científica:** Ciencia computacional de la naturaleza, 2023.09
- **Enlace al artículo:**  [Planificación espacial de las comunidades urbanas mediante el aprendizaje de refuerzo profundo](https://www.nature.com/articles/s43588-023-00503-5)

### **8. [ChatArena framework: Jugar a un hombre lobo con grandes modelos de lenguaje](https://hyper.ai/news/28576)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28576](https://hyper.ai/news/28576)
- **Equipo de investigación:** El equipo de investigación de Peng Li en la Universidad de Tsinghua
- **Investigación relacionada:** Mecanismos de aprendizaje no paramétricos, modelos de lenguaje, instrucciones.
- **Revista científica:** Arxiv, 2023.09
- **Enlace al artículo:**  [Explorar grandes modelos de lenguaje para juegos de comunicación: un estudio empírico sobre el hombre lobo](https://arxiv.org/pdf/2309.04658.pdf)

### **9. [Revisión: 30 académicos co-publican en Nature, una retrospectiva de 10 años que deconstruye cómo la IA remodela los paradigmas científicos](https://hyper.ai/news/28166)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28166](https://hyper.ai/news/28166)
- **Contenido principal:** El postdoc Hanchen Wang de la Ciencia de la Computación y la Genética de Stanford, junto con Tianfan Fu de Georgia Tech CSE, Yuanqi Du de Cornell CS y otros 27, revisaron el papel de la IA en la investigación científica fundamental durante la última década y delinearon los desafíos y deficiencias persistentes.
- **Enlace al artículo:**  [Descubrimiento científico en la era de la inteligencia artificial](https://www.nature.com/articles/s41586-023-06221-2)

### **10. [Ithaca ayuda a los epígrafos en la restauración del texto, la atribución cronológica y la atribución geográfica](https://hyper.ai/news/28140)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28140](https://hyper.ai/news/28140)
- **Equipo de investigación:** DeepMind y Ca' Foscari Universidad de Venecia
- **Investigación relacionada:** Datos I.PHI, modelo Ithaca, divergencia Kullback-Leibler, funciones de pérdida de entropía cruzada. La precisión de restauración de texto alcanzó el 62%, el error de atribución cronológica dentro de 30 años, y la precisión de atribución geográfica alcanzó el 71%.
- **Revista científica:** Naturaleza, 2020.03
- **Enlace al artículo:**  [Restauración y atribución de textos antiguos utilizando redes neuronales profundas](https://www.nature.com/articles/s41586-022-04448-z)

### **11. [IA en problemas futuros e invertidos de meta-óptica, análisis de datos basados en sistemas meta-superficiales](https://hyper.ai/news/34006)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34006](https://hyper.ai/news/34006)
- **Equipo de investigación:** Universidad de la ciudad de Hong Kong
- **Investigación relacionada:** Predicción de NNs, redes neurales profundas. Precisión de predicción superó el 99%.
- **Revista científica:** Publicaciones de la ACS, 2022.06
- **Enlace al artículo:**  [Inteligencia artificial en meta-óptica](https://pubs.acs.org/doi/10.1021/acs.chemrev.2c00012)

### **12. [Un nuevo método de inteligencia artificial geoespacial: Regresión logística ponderada por la red geográficamente neuronal](https://hyper.ai/news/30608)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30608](https://hyper.ai/news/30608)
- **Equipo de investigación:** El equipo de investigación de Zhenhong Du en la Universidad de Zhejiang
- **Investigación relacionada:** Padrones espaciales, redes neuronales, Explicaciones Aditivas de Shapley (SHAP), Interpolación de Peso de Distancia Inversa, funciones binarias de pérdida de entropía cruzada, validación cruzada de 5 veces.
- **Revista científica:** Jornal Internacional de Observación y Geoinformación de la Tierra Aplicada, 2024.04
- **Enlace al artículo:**  [Mejorar el mapeo de prospectividad mineral con inteligencia artificial geospacial: Un enfoque de regresión logística ponderado por redes geográficamente neuronales](https://doi.org/10.1016/j.jag.2024.103746)

### **13. [Utilizando modelos de difusión para generar parámetros de red neuronal, transformando el aprendizaje espacial-temporal de pocos disparos en un problema de pre-entrenamiento del modelo de difusión](https://hyper.ai/news/30545)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/30545](https://hyper.ai/news/30545)
- **Equipo de investigación:** Equipo de investigación de Yong Li en el Centro de Ciencia Urbana y Computación, EE Dept, Universidad de Tsinghua
- **Investigación relacionada:** Ciudades inteligentes, datos espacio-temporales, transferencia de conocimientos, MetaLA, PEMS-BAy, modelos de difusión de transformadores, marco de generación condicional GPD, redes neuronales, parámetros de redes neuronales, pre-entrenamiento + ajuste rápido.
- **Revista científica:** CCR 2024, 2024.01
- **Enlace al artículo:**  [Aprendizaje espacial-temporal de pocos disparos a través de la generación de redes neuronales difusas](https://openreview.net/forum?id=QyFm3D3Tzi)

### **14. [Últimos conocimientos de AI4S del equipo de Fei-Fei Li: 16 tecnologías innovadoras resumidas, que cubren biología/materiales/atención médica/diagnóstico](https://hyper.ai/news/31499)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/31499](https://hyper.ai/news/31499)
- **Contenido principal:** La HAI de Stanford publicó el "Informe del Índice de IA de 2024," que rastrea de forma exhaustiva las tendencias mundiales de desarrollo de IA en 2023. También exploró el profundo impacto de la IA en la ciencia y la medicina, destacando los brillantes logros de IA en la ciencia y las innovaciones médicas como SynthSR e ImmunoSEIRA.

### **15. [Previsión precisa de los precios de la vivienda en Wuhan! el modelo osp-GNNWR describe con precisión los complejos procesos espaciales y los fenómenos geográficos](https://hyper.ai/news/32453)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32453](https://hyper.ai/news/32453)
- **Equipo de investigación:** El equipo de Sensen Wu en el laboratorio de SIG, Universidad de Zhejiang
- **Investigación relacionada:** Redes neuronales, optimización de proximidad espacial, métodos de regresión pesada de la red geográficamente neuronal, conjunto de datos de muestras de bienes raíces de 968 Anjuke, modelos de regresión espacial, algoritmos de descenso de gradiente.
- **Revista científica:** Diario Internacional de Ciencias de la Información Geográfica, 2024.04
- **Enlace al artículo:**  [Un modelo de red neuronal para optimizar la medida de la proximidad espacial en el enfoque de regresión geográficamente ponderado: un estudio de caso sobre el precio de la vivienda en Wuhan](https://www.tandfonline.com/doi/abs/10.1080/13658816.2024.2343771)

### **16. [Introducción de aprendizaje de tiro cero para liberar un modelo de difusión condicional optimizado para la descifrado de escritura ósea del oráculo](https://hyper.ai/news/33010)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33010](https://hyper.ai/news/33010)
- **Equipo de investigación:** El equipo de Xiang Bai y Yuliang Liu en HUST, conjuntamente con la Universidad de Adelaida, la Universidad Normal de Anyang, SCUT
- **Investigación relacionada:** Modelos de difusión condicional, técnicas de generación de imágenes, técnicas de muestreo analítico local, conjunto de datos HUST-OBS, conjunto de datos EVOBC, columna vertebral de ResNet-101, tecnología OCR, estrategias de aprendizaje de disparos cero, codificadores de estilo, codificadores de contenido.
- **Revista científica:** ACL 2024, 2024.06
- **Enlace al artículo:**  [Descifrar el lenguaje óseo de Oracle con modelos de difusión](https://doi.org/10.48550/arXiv.2406.00684)

### **17. [Stanford/Apple y otras 23 instituciones publican el índice de referencia DCLM; el modelo de fundación funciona a la par de Llama3 8B](https://hyper.ai/news/33001)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33001](https://hyper.ai/news/33001)
- **Equipo de investigación:** Un esfuerzo conjunto de UW, Stanford, Apple y otras 20 instituciones
- **Investigación relacionada:** Modelos de lenguaje, punto de referencia DCLM, Transformers, MMLU.
- **Revista científica:** ArXiv, 2024.06
- **Enlace al artículo:**  [DataComp-LM: En busca de la próxima generación de conjuntos de formación para modelos lingüísticos](https://arxiv.org/abs/2406.11794)

### **18. [PoCo resuelve el dilema de la heterogeneidad de las fuentes de datos, permitiendo a los robots ejecutar múltiples tareas de manera flexible](https://hyper.ai/news/32765)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/32765](https://hyper.ai/news/32765)
- **Equipo de investigación:** Investigadores del MIT
- **Investigación relacionada:** Modelos probabilísticos de difusión (DDPM), modelos implícitos de difusión (DDIM), composición probabilística de modelos de difusión, marco de composición de políticas robóticas PoCo.
- **Revista científica:** ArXiv, 2024.05
- **Enlace al artículo:**  [PoCo: Composición de las políticas de y para el aprendizaje heterogéneo de robots](https://arxiv.org/abs/2402.02511)

### **19. [Contiene 140.000 imágenes! Oracle ayuda al equipo a ganar el premio ACL Best Paper](https://hyper.ai/news/33826)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33826](https://hyper.ai/news/33826)
- **Equipo de investigación:** El equipo de investigación del profesor Xiang Bai en HUST
- **Investigación relacionada:** conjunto de datos HUST-OBC, modelos de aprendizaje visual contrastivo sin supervisión.
- **Revista científica:** Datos científicos, 2024.06
- **Enlace al artículo:**  [Un conjunto de datos abierto para el reconocimiento y descifrado de guiones óseos del oráculo](https://arxiv.org/abs/2401.15365)

### **20. [Proponiendo un esquema de predicción de canales basado en LLM pre-entrenados, GPT-2 empodera la capa física de las comunicaciones inalámbricas](https://hyper.ai/news/33195)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/33195](https://hyper.ai/news/33195)
- **Equipo de investigación:** El equipo de Xiang Cheng en la Escuela de Electrónica de la Universidad de Pekín
- **Investigación relacionada:** Simuladores de QuaDRiGa, Modelos de Lenguaje Grande (LLM), redes neuronales de predicción de canales, módulos de preprocesamiento, módulos de incorporación, módulos de LLM pre-entrenados, módulos de salida.
- **Revista científica:** Diario de Comunicaciones y Redes de Información, 2024.06
- **Enlace al artículo:**  [LLM4CP: Adaptación de grandes modelos de lenguaje para la predicción de canales](https://ieeexplore.ieee.org/document/10582829)

### **21. [El primer modelo de Red Generativa Adversarial para bordados con múltiples puntos de sutura](https://hyper.ai/news/34669)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/34669](https://hyper.ai/news/34669)
- **Equipo de investigación:** Equipo de Computación Visual y Textil Digital, Escuela de Ciencias de la Computación y la Inteligencia Artificial, Universidad Textil de Wuhan
- **Investigación relacionada:** Los conjuntos de datos de bordado de múltiples puntos, redes adversarias generales (GAN), CNNs, modelo GAN de bordado de múltiples puntos MSEmbGAN, redes de generación de textura conscientes de la región, redes de coloración. Mejora el realismo de la textura y la fidelidad del color en el bordado.
- **Revista científica:** Transacciones de IEEE en visualización y gráficos informáticos, 2024
- **Enlace al artículo:**  [MSEmbGAN: Síntesis de bordados multipuñada a través de generación de texturas conscientes de la región](https://csai.wtu.edu.cn/TVCG01/index.html)

### **22. [El kit de herramientas de escaneo automático rápido (FAST) adquiere de manera eficiente la información de la muestra](https://hyper.ai/news/28100)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/28100](https://hyper.ai/news/28100)
- **Equipo de investigación:** Equipo de Investigación del Laboratorio Nacional Argonne
- **Investigación relacionada:** Métodos SLADS-Net, técnicas de optimización de trayectoria. Prioriza regiones heterogéneas y replica con precisión todas las características principales en imágenes de escaneo completo.
- **Revista científica:** Comunicaciones de la naturaleza, 2023.09
- **Enlace al artículo:**  [Demonstración de un flujo de trabajo impulsado por IA para la microscopía de escaneo autónoma de alta resolución](https://www.nature.com/articles/s41467-023-40339-1)

### **23. [Modelo de la Fundación Dinámica de la Población PDFM de código abierto, prediciendo con precisión las tasas de desempleo y pobreza de EE.UU.](https://hyper.ai/news/36380)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/36380](https://hyper.ai/news/36380)
- **Equipo de investigación:** Google también
- **Investigación relacionada:** Modelo de la Fundación de Dinámica de la Población, predicción de tasas de desempleo y pobreza, arquitecturas de incorporación desacopladas, utilizando PDFM para mejorar el modelo de base de pronóstico de SOTA TimesFM, conjuntos de datos de tendencias de búsqueda agregados, conjuntos de datos de mapas, conjuntos de datos de actividad, clima y calidad del aire, datos de detección remota, redes neuronales gráficas (GNNs), mejorando los modelos geospaciales existentes.
- **Revista científica:** ArXiv, 2024.12
- **Enlace al artículo:**  [Inferencia geospacial general con un modelo de base de la dinámica de la población](https://arxiv.org/abs/2411.07207)

### **24. [Modelo de aprendizaje profundo CatGWR estima la no estacionariedad espacial](https://hyper.ai/news/38055)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/38055](https://hyper.ai/news/38055)
- **Equipo de investigación:** Laboratorio clave de SIG de la provincia de Zhejiang
- **Investigación relacionada:** Modelo de aprendizaje profundo Contexto-atención Regresión geográficamente ponderada, mecanismos de atención, estimación de la no estacionariedad espacial, modelo CatGWR, experimentos de simulación, módulos de preprocesamiento, módulos de zoom-in, módulos de regresión.
- **Revista científica:** Diario Internacional de Ciencias de la Información Geográfica, 2025.02
- **Enlace al artículo:**  [Usar una arquitectura basada en la atención para incorporar la similitud de contexto en la estimación de no estacionariedad espacial](https://doi.org/10.1080/13658816.2025.2456556)

### **25. [El primer sistema de intervención de ejercicios VR del mundo REVERIE remodela la salud del cerebro, cuerpo y mente de los jóvenes](https://hyper.ai/news/41266)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/41266](https://hyper.ai/news/41266)
- **Equipo de investigación:** El equipo del profesor Huating Li (Shanghai Sixth People's Hospital / Instituto de Salud Activa), el equipo del profesor Bin Sheng (SJTU / MOE Key Lab of AI), el equipo del investigador Jihong Wang (Universidad de Deportes de Shanghai), el equipo del profesor Rong Zeng (ShanghaiTech / Shanghai Clinical Research Center), el equipo del profesor Shuide Lin (NUS).
- **Investigación relacionada:** El ejercicio físico, el mundo virtual (metaverso) deportes VR, el sistema de ejercicios de realidad virtual REVERIE, obesidad juvenil, arquitecturas de transformadores, interacciones iterativas con los usuarios.
- **Revista científica:** Medicina de la naturaleza, 2025.06
- **Enlace al artículo:**  [Sistema de deportes de realidad virtual adaptativo basado en IA para adolescentes con exceso de peso corporal: un ensayo controlado aleatorio](https://www.nature.com/articles/s41591-025-03724-5)

### **26. [Basado en más de 176 mil datos de inscripciones, Eneas logra la restauración de longitud arbitraria de las antiguas inscripciones romanas por primera vez](https://hyper.ai/news/42141)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42141](https://hyper.ai/news/42141)
- **Equipo de investigación:** Investigadores de Google DeepMind, la Universidad de Nottingham, la Universidad de Warwick, etc.
- **Investigación relacionada:** Red neuronal generativa multimodal Aeneas, decodificadores transformadores, conjuntos de datos de inscripciones latinas, conjunto de datos LED, restauración de inscripciones.
- **Revista científica:** Naturaleza, 2025.07
- **Enlace al artículo:**  [Contextualización de textos antiguos con redes neuronales generativas](https://www.nature.com/articles/s41586-025-09292-5)

### **27. [Marco de generación de vídeo panorámico PanoWan también maneja la edición de vídeo de captura cero](https://hyper.ai/news/42205)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42205](https://hyper.ai/news/42205)
- **Equipo de investigación:** Laboratorio de Inteligencia de la Cámara @ PKU (Equipo de Boxin Shi), OpenBayes
- **Investigación relacionada:** Video panorámico, conjunto de datos de video panorámico PanoVid, edición de vídeo de captura cero, muestreo consciente de latitud, denociación semántica rotativa, decodificación con píxeles bordados.
- **Revista científica:** ArXiv, 2025.06
- **Enlace al artículo:**  [PanoWan: elevación de los modelos de generación de video de difusión a 360° con mecanismos conscientes de latitud/longitud](https://arxiv.org/abs/2505.22016)

### **28. [El marco inteligente de clasificación cerámica basado en YOLOv11 integra el modelado visual y el análisis económico, logrando la clasificación de los artefactos y la estimación del valor](https://hyper.ai/news/42268)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/42268](https://hyper.ai/news/42268)
- **Equipo de investigación:** Universiti Putra Malasia, UNSW Sydney
- **Investigación relacionada:** Clasificación cerámica, CNNs, aprendizaje de transferencia, redes cápsulas, YOLOv11, conjuntos de datos de imágenes cerámicas, métodos híbridos de adquisición de datos, modelos de regresión de la selva aleatoria.
- **Revista científica:** Diarios asociados de la naturaleza, 2025.06
- **Enlace al artículo:**  [Integrar el aprendizaje profundo y el aprendizaje automático para la clasificación de artefactos cerámicos y la predicción del valor de mercado](https://www.nature.com/articles/s40494-025-01886-6)

### **29. [Nacido chip "Microwave Brain", procesando simultáneamente datos de ultra alta velocidad y señales inalámbricas con una precisión del 75% a una potencia de 176 milliwatts](https://hyper.ai/news/43093)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/43093](https://hyper.ai/news/43093)
- **Equipo de investigación:** Universidad de Cornell
- **Investigación relacionada:** Aplicaciones de gran ancho de banda, redes neuronales de microondas, modelos de regresión lineal, conjunto de datos RadioML2016.10A, aprendizaje profundo, computación analógica.
- **Revista científica:** Nature Electronic, 2025.08
- **Enlace al artículo:**  [Una red neuronal integrada de microondas para la computación y comunicación de banda ancha](https://go.hyper.ai/rMZ2K)

### **30. [El modelo de imputación y predicción espacial-temporal STIMP se publicó, realizando predicciones precisas de la distribución costera de clorofila-a](https://hyper.ai/news/43613)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/43613](https://hyper.ai/news/43613)
- **Equipo de investigación:** Equipo de investigación de HKUST
- **Investigación relacionada:** Clorofillo, predicción, conjuntos de datos MODIS in situ Chl-a, conjuntos de datos de reflexión de detección remota por satélite Himawari, aprendizaje profundo, arquitectura STIMP, diagnóstico de salud del cuerpo hídrico.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.08
- **Enlace al artículo:**  [Modelo de imputación y predicción espacial-temporal](https://go.hyper.ai/BjOR5)

### **31. [MIT y otros logran predicciones de alta precisión de la dinámica plasmática en condiciones de pocos disparos basadas en el aprendizaje automático](https://hyper.ai/news/45260)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/45260](https://hyper.ai/news/45260)
- **Equipo de investigación:** Equipo de investigación dirigido por el MIT
- **Investigación relacionada:** Tokamaks, aprendizaje científico por máquina (SciML), Modelos de estado y espacio neuronales (NSSM), validación de robustez de la sensibilidad a los errores de control, prueba de extrapolación de predicción por primera vez.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.10
- **Enlace al artículo:**  [Aprender la dinámica plasmática y las trayectorias de descenso robustas con los primeros experimentos de predicción en el TCV](https://www.nature.com/articles/s41467-025-63917-x)

### **32. [Reac-Discovery fusiona el modelado matemático, el aprendizaje automático y los experimentos automatizados para resolver el desafío de universalidad de los sistemas de laboratorio autónomos](https://hyper.ai/news/45626)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/45626](https://hyper.ai/news/45626)
- **Equipo de investigación:** Instituto de Materiales de la IMDEA (España)
- **Investigación relacionada:** Laboratorios de conducción autónoma (SDL), plataformas digitales semiautónomas de Reac-Discovery, sistemas de circuito cerrado que integran módulos de diseño/fabricación/optimización, monitoreo en tiempo real de RMN, optimización de parámetros del proceso ML, descriptores topológicos, conjuntos de datos de parametrización estructural, conjuntos de datos de impresión, conjuntos de datos de rendimiento de reacción.
- **Revista científica:** Comunicaciones de la naturaleza, 2025.10
- **Enlace al artículo:**  [Reac-Discovery: una plataforma impulsada por la inteligencia artificial para el descubrimiento y la optimización de reactores catalíticos de flujo continuo](https://go.hyper.ai/ueB79)

### **33. [Se introduce el primer marco de modelado neuronal NOBLE validado por datos corticales humanos](https://hyper.ai/news/45806)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/45806](https://hyper.ai/news/45806)
- **Equipo de investigación:** ETH Zurich, Caltech, Universidad de Alberta
- **Investigación relacionada:** Aprendizaje profundo, incorporación de funciones neuronales, incorporación de inyección de corriente, marco de modelado de neuronas NOBLE.
- **Revista científica:** NeurIPS 2025, 2025.09
- **Enlace al artículo:**  [NOBLE  Operador Neural con Embedments Latentes Biológicamente Informados para Captar la Variabilidad Experimental en Modelos Biológicos de Neurones](https://go.hyper.ai/Ramfp)

### **34. [Marco de geolocalización de imágenes LocDiff se pone en línea, permitiendo posicionamiento global de precisión sin red y sin biblioteca de referencia](https://hyper.ai/news/46687)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/46687](https://hyper.ai/news/46687)
- **Equipo de investigación:** UMaine, UT Austin, UGA, UMD, Google, OpenAI, Harvard
- **Investigación relacionada:** Distribuciones Dirac de Armonía Esférica, marco de conjunto LocDiff, conjunto de datos MP16, conjunto de datos Im2GPS3k, conjunto de datos YFCC26k, conjunto de datos GWS15k, arquitectura de Sirena Condicional-UNet (CS-UNet), estrategias de computación eficientes, esquemas de codificación SHDD, geolocalización de imágenes.
- **Revista científica:** NeurIPS 2025, 2025.10
- **Enlace al artículo:**  [LocDiff: Identificación de ubicaciones en la Tierra mediante la difusión en el espacio Hilbert](https://openreview.net/forum?id=ghybX0Qlls)

### **35. [El aprendizaje automático combinado con py-GC-MS identifica con precisión la evidencia de vida en las rocas arqueanas](https://hyper.ai/news/47543)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/47543](https://hyper.ai/news/47543)
- **Equipo de investigación:** Laboratorio de la Tierra y los Planetas en la Institución Carnegie para la Ciencia, junto con varias instituciones globales
- **Investigación relacionada:** Cromatografía de gas de pirólisis-espectrometría de masa (py-GC-MS), aprendizaje automático supervisado.
- **Revista científica:** PNAS
- **Enlace al artículo:**  [Evidencia geoquímica orgánica de vida en rocas arqueanas identificadas por pirólisis GC MS y aprendizaje automático supervisado](https://www.pnas.org/doi/10.1073/pnas.2514534122)

### **36. [El equipo de la Universidad de Tsinghua propone el método de regresión neuro-simbólica ND2 para derivar automáticamente fórmulas de dinámica de red compleja](https://hyper.ai/news/47950)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/47950](https://hyper.ai/news/47950)
- **Equipo de investigación:** Universidad de Tsinghua
- **Investigación relacionada:** Dinámica de la red, regresión simbólica, ND2, derivación de ecuaciones, aprendizaje científico de la máquina.
- **Revista científica:** Comunicaciones de la naturaleza
- **Enlace al artículo:**  *(Un enlace apunta al papel de rocas arqueanas en chino original, pero mantiene la numeración y la traducción de referencia según lo proporcionado)*

*(Nota: La fuente proporcionada tenía una copia de los puntos 35 y 36 que vinculan a las rocas arqueanas del PNAS, mientras que el TOC indicaba ND2. Traducido directamente basándose en los puntos 35/36 del bloque de texto proporcionado)*

### **37. [El equipo de la Universidad de Zhejiang propone un método de predicción de prospectividad mineral geológicamente limitado, que representa explícitamente la anisotropía de la mineralización](https://hyper.ai/news/48396)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48396](https://hyper.ai/news/48396)
- **Equipo de investigación:** Equipo de investigación de la Universidad de Zhejiang
- **Investigación relacionada:** Mapeo de prospectividad mineral (MPM), redes neuronales de proximidad espacial anisotrópica, prospección inteligente.
- **Revista científica:** Geología
- **Enlace al artículo:**  [Modelado geológicamente limitado basado en datos para el mapeo de prospectividad mineral](https://go.hyper.ai/vbUpa)

### **38. [El equipo de Tsinghua y UChicago publica en Nature: las herramientas de IA amplían el impacto de los científicos pero contratan el enfoque de la ciencia](https://hyper.ai/news/48748)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48748](https://hyper.ai/news/48748)
- **Equipo de investigación:** Equipo conjunto de la Universidad de Tsinghua y la Universidad de Chicago
- **Investigación relacionada:** IA para la Ciencia, productividad de la investigación, patrones de citas científicas, ecosistemas de investigación, cientificometría.
- **Revista científica:** La naturaleza
- **Enlace al artículo:**  [Las herramientas de inteligencia artificial amplían el impacto de los científicos, pero el enfoque de la ciencia se contrae.](https://www.nature.com/articles/s41586-025-09922-y)

### **39. [El equipo de UC propone un espectrómetro a escala de chip aumentado por IA, logrando una alta fidelidad espectral en un volumen ultra pequeño](https://hyper.ai/news/48905)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/48905](https://hyper.ai/news/48905)
- **Equipo de investigación:** Equipo de Investigación de la Universidad de California
- **Investigación relacionada:** Espectrómetros a escala de chips, texturas de superficie atrapadas por fotones (PTST), redes neuronales totalmente conectadas, imágenes hiperspectrales.
- **Revista científica:** Fotónica avanzada
- **Enlace al artículo:**  [Espectómetro de captura de fotones aumentado por IA en un chip en plataforma de silicio con una sensibilidad al infrarrojo cercano ampliada](https://doi.org/10.1117/1.AP.8.1.016008)

### **40. [US DOE Oak Ridge National Lab propone el método D-CHAG, reduciendo significativamente la huella de memoria para modelos de fundación multicanal](https://hyper.ai/news/49330)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49330](https://hyper.ai/news/49330)
- **Equipo de investigación:** Investigadores del Laboratorio Nacional de Oak Ridge
- **Investigación relacionada:** Modelos de fundación de la ciencia de la visión, agregación jerárquica distribuida a través de canales (D-CHAG), paralelismo de tensores (TP), agregación de canales jerárquicos.
- **Revista científica:** SC25
- **Enlace al artículo:**  [Agregación jerárquica distribuida entre canales para modelos de fundación](https://dl.acm.org/doi/10.1145/3712285.3759870)

### **41. [El equipo de IA polimática propone el modelo de fundación continua Walrus, estableciendo récords en el rendimiento de la simulación entre dominios](https://hyper.ai/news/49076)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49076](https://hyper.ai/news/49076)
- **Equipo de investigación:** Equipo de Investigación Colaborativa de Inteligencia Artificial Polímática
- **Investigación relacionada:** Dinámica continua, modelos de base de simulación de física, modelo de Walrus, tokenización computacional adaptativa.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [Walrus: un modelo de base de dominio cruzado para la dinámica del continuo](https://arxiv.org/abs/2511.15684)

### **42. [EPFL propone una nueva arquitectura DYNAMI-CAL GraphNet, un GNN informado en física que modela con precisión la dinámica multicorpo](https://hyper.ai/news/49808)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/49808](https://hyper.ai/news/49808)
- **Equipo de investigación:** Equipo de Investigación de la EPFL
- **Investigación relacionada:** GNN informado en física, sistemas dinámicos multicorpos, DYNAMI-CAL GraphNet, conservación del impulso lineal y angular.
- **Revista científica:** Comunicaciones de la naturaleza
- **Enlace al artículo:**  [Una red neuronal gráfica informada de física que conserva el impulso lineal y angular para sistemas dinámicos](https://www.nature.com/articles/s41467-025-67802-5)

### **43. [El MIT propone un nuevo método Wave-Former, logrando una reconstrucción 3D de alta precisión de objetos completamente ocultos](https://hyper.ai/news/50018)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50018](https://hyper.ai/news/50018)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** Visión por computadora, reconstrucción 3D a través de la oclusión, detección de ondas mm, Formante de ondas, finalización de forma inalámbrica.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [Formante de ondas: Reconstrucción 3D a través de la oclusión a través de la finalización de la forma inalámbrica](https://arxiv.org/abs/2511.14152)

### **44. [El MIT propone un marco paralelo DRiffusion draft-and-refine, realizando una aceleración sin pérdidas para la inferencia del modelo de difusión](https://hyper.ai/news/50209)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50209](https://hyper.ai/news/50209)
- **Equipo de investigación:** Equipo de Investigación del MIT
- **Investigación relacionada:** Modelos de difusión, aceleración de la inferencia, técnicas de paralelalización, DRiffusion, proyección y refinación.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [DRiffusion: el proceso de elaboración y refinación paralela fácilmente los modelos de difusión](https://arxiv.org/abs/2603.25872)

### **45. [Technion - Instituto de Tecnología de Israel propone Tokens de tarea, lo que permite que los modelos de base de comportamiento se adapten flexiblemente a tareas específicas](https://hyper.ai/news/50788)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/50788](https://hyper.ai/news/50788)
- **Equipo de investigación:** Equipo de Investigación del Technion
- **Investigación relacionada:** Control robótico, aprendizaje por imitación, Modelos de base de comportamiento (BFMs), Tokens de tarea, adaptación específica de tarea.
- **Conferencia publicada:** CICLR 2026
- **Enlace al artículo:**  [Tokens de tareas: un enfoque flexible para adaptar modelos de base de comportamiento](https://hyper.ai/papers/2503.22886)

### **46. [MIT y otros proponen el marco EnergAIzer, logrando una estimación rápida y precisa de la potencia de la GPU para las cargas de trabajo de IA](https://hyper.ai/news/51038)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/51038](https://hyper.ai/news/51038)
- **Equipo de investigación:** MIT y MIT-IBM Watson Lab de Inteligencia Artificial
- **Investigación relacionada:** Estimación de potencia de la GPU, cargas de trabajo de IA, eficiencia energética del centro de datos, marco EnergAIzer, perfiles de rendimiento de hardware.
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [EnergAIzer: Marco de estimación de potencia de GPU rápido y preciso para cargas de trabajo de IA](https://arxiv.org/abs/2604.20105)

### **47. [UIUC propone un marco de agentes heterogéneo Eywa, rompiendo los límites de los grandes modelos centrados en el lenguaje](https://hyper.ai/news/51222)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/51222](https://hyper.ai/news/51222)
- **Equipo de investigación:** Equipo de Investigación de la UIUC
- **Investigación relacionada:** Inteligencia artificial agencial, marco de agentes heterogéneos Eywa, modelos de fundación específicos de dominio, sistemas multiagentes, modelos de lenguaje grande (LLM).
- **Revista científica:** ArXiv
- **Enlace al artículo:**  [El modelo de colaboración de la Fundación Científica heterogénea](https://hyper.ai/papers/2604.27351)

### **48. [La Universidad de Stanford y otros utilizan modelos sustitutivos de LSTM para lograr una simulación acelerada 252 veces de óptica no lineal de segundo orden](https://hyper.ai/news/51410)**

- **Aspectos destacados de la investigación:**  [https://hyper.ai/news/51410](https://hyper.ai/news/51410)
- **Equipo de investigación:** Universidad de Stanford, UCLA, y el Laboratorio Nacional de Aceleradores SLAC
- **Investigación relacionada:** Óptica no lineal de segundo orden, generación de frecuencia suma (SFG), redes de memoria a corto plazo larga (LSTM), modelo sustituto, método de Fourier en etapas divididas (SSFM).
- **Revista científica:** Fotónica avanzada
- **Enlace al artículo:**  [Modelado asistido por aprendizaje profundo para la óptica no lineal χ(2)](https://go.hyper.ai/5bLoA)
