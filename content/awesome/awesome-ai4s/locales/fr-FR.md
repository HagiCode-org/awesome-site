# L’IA au service des sciences
**EN** | [CN](README_CN.md)
- [**Avant-propos**](#foreword)
- [**IA + biopharmaceutique**](#ai-biopharmaceutical)
  - [**1. AdaDR surpasse plusieurs méthodes de référence pour le repositionnement de médicaments**](#1-adadr-outperforms-multiple-benchmark-methods-in-drug-repositioning)
  - [**2. IMN4NPD accélère la déréplication de vastes groupes dans les réseaux moléculaires et annote les boucles et les paires de nœuds**](#2-imn4npd-accelerates-the-dereplication-of-extensive-clusters-in-molecular-networks-providing-annotations-for-self-loops-and-paired-nodes)
  - [**3. Modèle génératif profond MIDAS pour l’intégration en mosaïque de données multi-omiques unicellulaires**](#3-deep-generative-model-midas-for-mosaic-integration-of-single-cell-multi-omics-data)
  - [**4. ResGen : un modèle de génération moléculaire 3D fondé sur les poches protéiques**](#4-resgen-a-3d-molecular-generation-model-based-on-protein-pockets)
  - [**5. Grands modèles et apprentissage automatique pour prédire avec précision les paramètres cinétiques des enzymes**](#5-large-models--machine-learning-for-high-precision-prediction-of-enzyme-kinetic-parameters)
  - [**6. Le MIT découvre de nouveaux antibiotiques grâce à l’apprentissage profond**](#6-mit-uses-deep-learning-to-discover-novel-antibiotics)
  - [**7. Les réseaux neuronaux décryptent la sélectivité du couplage GPCR-protéine G**](#7-neural-networks-decipher-gpcr-g-protein-coupling-selectivity)
  - [**8. Macformer macrocyclise le médicament acyclique fedratinib**](#8-macformer-macrocyclizes-the-acyclic-drug-fedratinib)
  - [**9. Un réseau de régression et CGMD prédisent les propriétés d’auto-assemblage de dizaines de milliards de peptides**](#9-regression-network--cgmd-predicts-self-assembly-properties-of-tens-of-billions-of-peptides)
  - [**10. L’apprentissage non supervisé prédit 71 millions de mutations génétiques**](#10-unsupervised-learning-predicts-71-million-gene-mutations)
  - [**11. Une IA d’analyse des odeurs fondée sur les réseaux neuronaux de graphes (GNN)**](#11-odor-analysis-ai-developed-based-on-graph-neural-networks-gnn)
  - [**12. Les réseaux neuronaux de graphes sélectionnent des ingrédients anti-âge sûrs et très efficaces**](#12-graph-neural-networks-screen-for-safe-and-highly-effective-anti-aging-ingredients)
  - [**13. L’apprentissage automatique analyse quantitativement la quantité et l’emplacement de la libération de dopamine**](#13-machine-learning-quantitatively-analyzes-dopamine-release-amount-and-location)
  - [**14. L’apprentissage automatique découvre trois médicaments anti-âge**](#14-machine-learning-discovers-three-anti-aging-drugs)
  - [**15. L’apprentissage profond sélectionne de nouveaux antibiotiques contre Acinetobacter baumannii**](#15-deep-learning-screens-for-novel-antibiotics-inhibiting-acinetobacter-baumannii)
  - [**16. Des modèles d’apprentissage automatique prédisent l’imprimabilité des bio-encres**](#16-machine-learning-models-applied-to-predict-bioink-printability)
  - [**17. L’apprentissage automatique différencie les cellules souches pluripotentes**](#17-machine-learning-differentiates-pluripotent-stem-cells)
  - [**18. Un modèle d’apprentissage automatique prédit la vitesse de libération des médicaments injectables à action prolongée**](#18-machine-learning-model-predicts-drug-release-rate-of-long-acting-injectables)
  - [**19. Un algorithme d’apprentissage automatique prédit efficacement les propriétés antipaludiques des plantes**](#19-machine-learning-algorithm-effectively-predicts-plant-antimalarial-properties)
  - [**20. Une méthode d’ensemble d’apprentissage automatique prédit l’immunogénicité de fragments de protéines virales**](#20-machine-learning-ensemble-method-predicts-immunogenicity-of-viral-protein-fragments)
  - [**21. L’IA générative mise à profit pour développer de nouveaux antibiotiques**](#21-generative-ai-used-to-develop-novel-antibiotics)
  - [**22. Système automatisé, rapide et multidimensionnel de suivi de particules individuelles fondé sur l’apprentissage profond**](#22-deep-learning-based-automated-high-speed-multidimensional-single-particle-tracking-system)
  - [**23. Cadre d’apprentissage automatique ProEnsemble : optimisation des combinaisons de promoteurs des voies évolutives**](#23-proensemble-machine-learning-framework-optimizing-evolutionary-pathway-promoter-combinations)
  - [**24. Le réseau neuronal de graphes ProtLGN, sensible au microenvironnement, guide l’évolution dirigée des protéines**](#24-microenvironment-aware-graph-neural-network-protlgn-guides-directed-protein-evolution)
  - [**25. Le modèle d’apprentissage profond AlphaPPIMd explore les ensembles conformationnels de complexes protéine-protéine**](#25-deep-learning-model-alphappimd-exploring-conformational-ensembles-of-protein-protein-complexes)
  - [**26. Le nouveau dégradeur de protéine suppresseur de tumeur dp53m inhibe la prolifération des cellules cancéreuses**](#26-novel-tumor-suppressor-protein-degrader-dp53m-inhibits-cancer-cell-proliferation)
  - [**27. Meilleur article étudiant du CVPR ! Le modèle multimodal BioCLIP réalise l’apprentissage en zéro-shot**](#27-cvpr-best-student-paper-multimodal-model-bioclip-achieves-zero-shot-learning)
  - [**28. Cent millions de paramètres ! Le modèle fondamental cellulaire scFoundation modélise simultanément 20 000 gènes**](#28-100-million-parameters-cell-foundation-model-scfoundation-models-20000-genes-simultaneously)
  - [**29. Retenu à l’ICML, le modèle de langage protéique ESM-AA dépasse les méthodes SOTA traditionnelles**](#29-accepted-by-icml-protein-language-model-esm-aa-surpasses-traditional-sota)
  - [**30. L’algorithme SPACE, publié dans une revue de la famille Cell, découvre des modules tissulaires mieux que les outils comparables**](#30-space-algorithm-published-in-cell-sub-journal-tissue-module-discovery-capabilities-lead-similar-tools)
  - [**31. De nouvelles avancées fondées sur AlphaFold révèlent la diversité dynamique des protéines**](#31-new-breakthroughs-based-on-alphafold-reveal-dynamic-protein-diversity)
  - [**32. P450Diffusion : conception de novo d’enzymes P450 à l’aide de modèles de diffusion**](#32-p450diffusion-de-novo-design-method-for-p450-enzymes-developed-based-on-diffusion-models)
  - [**33. Les réseaux neuronaux de graphes équivariants améliorent de 20 % la prédiction des sites de liaison des protéines cibles**](#33-equivariant-graph-neural-networks-used-for-target-protein-binding-site-prediction-boosting-performance-by-20)
  - [**34. Vingt données expérimentales marquent une étape pour l’IA des protéines ! FSFP optimise efficacement les modèles de préentraînement protéique**](#34-20-experimental-data-points-create-an-ai-protein-milestone-fsfp-effectively-optimizes-protein-pre-training-models)
  - [**35. Un modèle transférable d’apprentissage profond identifie plusieurs types de modifications de l’ARN et réduit considérablement les coûts de calcul**](#35-transferable-deep-learning-model-identifies-multiple-types-of-rna-modifications-significantly-reducing-computational-costs)
  - [**36. InstructProtein : aligner le langage des protéines et le langage humain à l’aide d’instructions de connaissances**](#36-instructprotein-aligning-protein-language-with-human-language-using-knowledge-instructions)
  - [**37. Le cadre de génération protéine-texte ProtT3 permet l’interprétation intermodale des données protéiques et textuelles**](#37-protein-to-text-generation-framework-prott3-enables-cross-modal-interpretation-of-protein-data-and-text-information)
  - [**38. Le modèle CPDiffusion conçoit automatiquement des protéines fonctionnelles à un coût extrêmement faible**](#38-cpdiffusion-model-designs-functional-proteins-fully-automatically-at-an-ultra-low-cost)
  - [**39. Nouvelle méthode de détection d’homologues de protéines fondée sur des modèles de langage protéique et la recherche dense**](#39-a-novel-protein-homolog-detection-method-based-on-protein-language-models-and-dense-retrieval-techniques)
  - [**40. AlphaProteo conçoit efficacement des liants de protéines cibles, avec une affinité multipliée par 300**](#40-alphaproteo-efficiently-designs-target-protein-binders-increasing-affinity-by-300-times)
  - [**41. Le nouveau modèle de langage protéique débruité DePLM dépasse les modèles SOTA pour prédire les effets des mutations**](#41-novel-denoising-protein-language-model-deplm-outperforms-sota-models-in-mutation-effect-prediction)
  - [**42. Le modèle génératif géométrique profond DynamicBind permet de prédire l’amarrage dynamique des protéines**](#42-geometric-deep-generative-model-dynamicbind-enables-dynamic-protein-docking-prediction)
  - [**43. Le grand modèle de langage Y-Mol pour la découverte de médicaments surpasse largement LLaMA2**](#43-drug-discovery-large-language-model-y-mol-completely-outperforms-llama2)
  - [**44. Le modèle universel de repliement inverse moléculaire UniIF complète AlphaFold 3**](#44-universal-molecular-inverse-folding-model-uniif-further-complements-alphafold-3)
  - [**45. Le modèle de langage protéique préentraîné ProSST intègre plus efficacement les informations de structure des protéines**](#45-pre-trained-protein-language-model-prosst-integrates-protein-structure-information-more-effectively)
  - [**46. Le cadre de liants peptidiques macrocycliques RFpeptides ouvre de nouvelles possibilités pour les protéines non ciblables par les médicaments**](#46-macrocyclic-peptide-binder-framework-rfpeptides-offers-new-possibilities-for-undruggable-proteins)
  - [**47. Le modèle fondamental du génome Evo permet prédiction et génération de l’échelle moléculaire à l’échelle du génome**](#47-genome-foundation-model-evo-enables-prediction-and-generation-from-molecular-to-genome-scales)
  - [**48. DigFrag segmente précisément les fragments moléculaires par IA et génère 44 molécules médicamenteuses ou pesticides**](#48-digfrag-accurately-segments-molecular-fragments-using-ai-and-generates-44-drugpesticide-molecules)
  - [**49. Méthode de préentraînement PRIME pour les grands modèles de langage des séquences protéiques**](#49-protein-sequence-large-language-model-pre-training-method-prime)
  - [**50. Une méthode d’apprentissage profond auto-supervisé révolutionne la reconstruction 3D en cryo-microscopie électronique**](#50-self-supervised-deep-learning-method-revolutionizes-3d-reconstruction-in-cryo-electron-microscopy)
  - [**51. La méthode multimodale de génération de protéines PLAID génère simultanément séquences et structures protéiques à tous les atomes**](#51-multimodal-protein-generation-method-plaid-generates-sequences-and-all-atom-protein-structures-simultaneously)
  - [**52. Méthode d’optimisation moléculaire ciblée MOLRL fondée sur l’apprentissage par renforcement latent**](#52-targeted-molecular-optimization-method-molrl-based-on-latent-reinforcement-learning)
  - [**53. Le cadre E2VD prédit les moteurs de variation virale et l’évolution des virus de la COVID-19, du VIH et de la grippe**](#53-viral-variation-driver-prediction-framework-e2vd-predicts-evolutionary-directions-for-covid-19hivinfluenza-viruses)
  - [**54. Le modèle de langage médical MedFound approche les capacités de raisonnement des médecins experts**](#54-medical-language-model-medfound-approaches-expert-physician-reasoning-capabilities)
  - [**55. Le modèle de diffusion 4D AlphaFolding comble le manque en prédiction de la structure dynamique des protéines**](#55-4d-diffusion-model-alphafolding-fills-the-gap-in-dynamic-protein-structure-prediction)
  - [**56. Le pipeline PepPrCLIP de conception de protéines courtes ouvre la voie à de nouveaux traitements contre le cancer**](#56-pepprclip-pipeline-for-designing-short-proteins-holds-promise-for-developing-new-cancer-therapies)
  - [**57. La technique d’alignement de Boltzmann améliore considérablement l’efficacité de la prédiction de l’énergie libre de liaison des protéines**](#57-boltzmann-alignment-technique-drastically-improves-protein-binding-free-energy-prediction-efficacy)
  - [**58. Le nouveau générateur de squelette protéique Proteina, fondé sur les flux et à grande échelle, atteint le niveau SOTA en conception de novo**](#58-novel-large-scale-flow-based-protein-backbone-generator-proteina-achieves-sota-in-de-novo-protein-backbone-design)
  - [**59. Le modèle UniGEM améliore pour la première fois de manière synergique deux tâches à l’aide de modèles de diffusion**](#59-unigem-model-achieves-synergistic-enhancement-of-two-tasks-based-on-diffusion-models-for-the-first-time)
  - [**60. RFdiffusion évolue encore et permet la conception de novo d’anticorps à la précision atomique**](#60-rfdiffusion-evolves-further-realizing-atomic-accuracy-de-novo-antibody-design)
  - [**61. La première fusion de modèles de langage protéique et ARN établit un nouveau SOTA pour la prédiction de l’affinité de liaison**](#61-first-protein-rna-language-model-fusion-scheme-sets-new-sota-in-binding-affinity-prediction)
  - [**62. Le modèle de tissu virtuel Celcomen permet pour la première fois d’identifier l’inférence causale dans l’analyse transcriptomique spatiale**](#62-virtual-tissue-model-celcomen-achieves-causal-inference-identifiability-in-spatial-transcriptomics-analysis-for-the-first-time)
  - [**63. La méthode AlphaFold-Metainference prédit avec précision les ensembles structuraux de protéines désordonnées**](#63-alphafold-metainference-method-accurately-predicts-disordered-protein-structural-ensembles)
  - [**64. Le cadre de prédiction de structure de l’ARN DRfold2 dépasse le niveau SOTA sur plusieurs bancs d’essai**](#64-high-accuracy-rna-structure-prediction-framework-drfold2-surpasses-sota-in-multiple-benchmarks)
  - [**65. Le nouvel algorithme de conception protéique DRAKES franchit le goulot d’étranglement de la conception de séquences biologiques**](#65-new-protein-design-algorithm-drakes-breaks-through-the-biological-sequence-design-bottleneck)
  - [**66. Spectroscopie d’absorbance UV assistée par apprentissage automatique pour détecter la contamination microbienne**](#66-machine-learning-assisted-uv-absorbance-spectroscopy-for-detecting-microbial-contamination)
  - [**67. Conception de gènes chevauchants à l’aide de modèles génératifs de séquences protéiques**](#67-utilizing-protein-sequence-generative-models-for-overlapping-gene-design)
  - [**68. Le cadre de prédiction PUPS permet la localisation subcellulaire des protéines à l’échelle de la cellule unique**](#68-prediction-framework-pups-enables-single-cell-level-protein-subcellular-localization)
  - [**69. UniMoMo, premier cadre génératif unifié entre espèces moléculaires, permet la conception de plusieurs types de molécules médicamenteuses**](#69-unimomo-the-first-unified-generative-framework-across-molecular-species-enables-multi-type-drug-molecular-design)
  - [**70. Le modèle de langage protéique Prot42 génère des liants à haute affinité à partir de la seule séquence de la protéine cible**](#70-protein-language-model-prot42-generates-high-affinity-binders-using-only-the-target-protein-sequence)
  - [**71. Le simulateur unifié de dynamique biomoléculaire UniSim réalise pour la première fois une simulation dynamique à pas de temps grossier entre types moléculaires et environnements chimiques**](#71-unified-biomolecular-dynamics-simulator-unisim-achieves-unified-time-coarsened-dynamics-simulation-across-molecular-types-and-chemical-environments-for-the-first-time)
  - [**72. L’algorithme de biologie computationnelle SimplifiedBondfinder découvre 69 nouvelles liaisons azote-oxygène-soufre**](#72-computational-biology-algorithm-simplifiedbondfinder-uncovers-69-novel-nitrogen-oxygen-sulfur-bonds)
  - [**73. La nouvelle méthode de conception de séquences protéiques FAMPNN traite simultanément les informations des squelettes et chaînes latérales**](#73-novel-protein-sequence-design-method-fampnn-simultaneously-processes-protein-backbone-and-sidechain-information)
  - [**74. La méthode atomistique La-Proteina génère avec précision des protéines comportant jusqu’à 800 résidus**](#74-atomistic-protein-design-method-la-proteina-generates-proteins-with-up-to-800-residues-at-high-precision)
  - [**75. Le modèle APM, conçu pour les complexes protéiques multichaînes, permet la conception tous atomes et l’optimisation fonctionnelle**](#75-apm-model-specifically-designed-for-multi-chain-protein-complexes-enables-all-atom-design-and-functional-optimization)
  - [**76. La nouvelle méthode Logos de conception de protéines se liant aux régions intrinsèquement désordonnées cible les protéines non médicamentables**](#76-new-intrinsically-disordered-region-binding-protein-design-method-logos-specializes-in-undruggable-targets)
  - [**77. Le nouveau cadre de représentation par fusion dynamique des protéines FusionProt permet des échanges itératifs d’informations**](#77-novel-protein-dynamic-fusion-representation-framework-fusionprot-released-enabling-iterative-information-exchange)
  - [**78. Le modèle de diffusion MorphDiff guidé par le transcriptome accélère la découverte de médicaments phénotypiques**](#78-transcriptome-guided-diffusion-model-morphdiff-released-to-accelerate-phenotypic-drug-discovery)
  - [**79. Le cadre AlphaPPIMI améliore considérablement la généralisation et dépasse les méthodes existantes pour prédire les modulateurs d’interfaces PPI**](#79-alphappimi-framework-significantly-enhances-generalization-surpassing-existing-methods-in-ppi-interface-modulator-prediction)
  - [**80. Un nouveau cadre de réseau neuronal à fusion prédit efficacement les sites de liaison de plusieurs métaux dans les séquences protéiques**](#80-a-novel-fusion-neural-network-framework-efficiently-predicts-multi-metal-binding-sites-in-protein-sequences)
  - [**81. Le cadre de projection moléculaire hautement synthétisable ReaSyn atteint des taux de reconstruction et une diversité des voies exceptionnellement élevés**](#81-highly-synthesizable-molecular-projection-framework-reasyn-released-achieving-ultra-high-reconstruction-rates-and-pathway-diversity)
  - [**82. Le cadre d’apprentissage par renforcement contraint Ctrl-DNA permet de contrôler de façon ciblée l’expression génique de cellules spécifiques**](#82-constrained-reinforcement-learning-framework-ctrl-dna-released-realizing-targeted-control-of-specific-cell-gene-expression)
  - [**83. Le cadre PLACER résout le défi de modélisation atomique de l’hétérogénéité conformationnelle des protéines**](#83-placer-framework-resolves-the-atomic-level-modeling-challenge-of-protein-conformational-heterogeneity)
  - [**84. Squidiff simule des transcriptomes dans plusieurs scénarios et favorise la médecine de précision et spatiale**](#84-squidiff-enables-multi-scenario-transcriptome-simulation-boosting-precision-medicine-and-spatial-medicine-development)
  - [**85. Le modèle génératif PepTron et un nouveau banc d’essai remodèlent la prédiction des ensembles de protéines désordonnées**](#85-generative-model-peptron-and-new-evaluation-benchmark-released-reshaping-prediction-capabilities-for-disordered-protein-ensembles)
  - [**86. Le MIT et Harvard proposent CleaveNet, un pipeline d’IA de bout en bout pour concevoir des substrats de protéases très spécifiques**](#86-mit-and-harvard-propose-end-to-end-ai-workflow-cleavenet-to-overcome-highly-specific-protease-substrate-design-challenges)
  - [**87. L’équipe de l’université Goethe de Francfort propose un cadre de classification multi-échelle pour décoder la complexité du ligome E3 humain**](#87-goethe-university-frankfurt-team-proposes-a-multi-scale-classification-framework-to-decode-the-complexity-of-the-human-e3-ligome)
  - [**88. Basecamp et NVIDIA lancent conjointement le modèle fondamental EDEN pour la conception de thérapies programmables par IA**](#88-basecamp-and-nvidia-jointly-release-the-eden-foundation-model-enabling-ai-programmable-therapeutic-design)
  - [**89. Microsoft et d’autres proposent le cadre multimodal GigaTIME pour générer des atlas mIF virtuels à partir de lames de pathologie courantes**](#89-microsoft-and-others-propose-the-multimodal-ai-framework-gigatime-to-generate-virtual-mif-atlases-from-routine-pathology-slides)
  - [**90. Le MIT propose le modèle de langage d’apprentissage profond Pichia-CLM pour optimiser les codons et accroître le rendement en protéines recombinantes**](#90-mit-proposes-deep-learning-language-model-pichia-clm-to-optimize-codons-for-enhanced-recombinant-protein-yield)
  - [**91. Le MIT et l’ETH proposent le cadre d’apprentissage profond APOLLO pour intégrer et démêler efficacement les données multimodales unicellulaires**](#91-mit-and-eth-jointly-propose-deep-learning-framework-apollo-to-efficiently-integrate-and-disentangle-single-cell-multimodal-data)
  - [**92. CUHK et ses partenaires proposent le cadre Bi-TEAM pour apprendre une représentation unifiée à plusieurs échelles des peptides modifiés**](#92-cuhk-and-others-jointly-propose-the-bi-team-framework-for-unified-cross-scale-representation-learning-of-modified-peptides)
  - [**93. Carnegie Mellon et ses partenaires proposent AQuaRef pour le raffinement quantique de modèles protéiques tous atomes**](#93-carnegie-mellon-university-and-others-propose-aquaref-for-quantum-refinement-of-all-atom-protein-models)
  - [**94. NVIDIA et ses partenaires proposent le cadre Complexa pour unifier la génération et l’optimisation de liants protéiques**](#94-nvidia-and-others-jointly-propose-the-complexa-framework-to-unify-protein-binder-generation-and-optimization)
  - [**95. Le MIT et CMU proposent VibeGen, qui mobilise la dynamique vibrationnelle pour la conception de novo de protéines**](#95-mit-and-cmu-jointly-propose-vibegen-introducing-vibrational-dynamics-to-empower-de-novo-protein-design)
  - [**96. L’Institut Pasteur utilise l’apprentissage profond pour prédire 2,39 millions de protéines anti-phages et cartographier l’immunité bactérienne**](#96-institut-pasteur-uses-deep-learning-to-predict-239-million-anti-phage-proteins-mapping-bacterial-immunity)
  - [**97. L’équipe de KAIST utilise l’IA pour concevoir de novo des protéines se liant à de petites molécules et les applique à des biocapteurs**](#97-kaist-team-utilizes-ai-to-de-novo-design-small-molecule-binding-proteins-successfully-applying-them-in-biosensors)
  - [**98. L’université de Toronto et ses partenaires proposent dnaHNet pour modéliser efficacement les séquences génomiques de façon hiérarchique**](#98-university-of-toronto-and-others-propose-dnahnet-for-efficient-hierarchical-modeling-of-genomic-sequences)
  - [**99. L’université Queen Mary de Londres et ses partenaires mènent la plus vaste étude protéogénomique et révèlent les mécanismes moléculaires des maladies**](#99-queen-mary-university-of-london-and-others-conduct-the-largest-scale-proteogenomic-study-revealing-molecular-disease-mechanisms)
  - [**100. L’université Goethe de Francfort et ses partenaires proposent genESOM : l’IA générative surmonte les limites des expériences animales à petit échantillon**](#100-goethe-university-frankfurt-and-others-propose-genesom-model-generative-ai-breaks-through-small-sample-animal-experiments)
- [**IA + santé**](#ai-healthcare)
  - [**1. Le système d’apprentissage profond DeepDR Plus prédit la rétinopathie diabétique à partir d’images du fond d’œil**](#1-deepdr-plus-deep-learning-system-predicts-diabetic-retinopathy-using-fundus-images)
  - [**2. Un modèle de régression logistique montre qu’un indice élevé de végétation réduit le risque de syndrome métabolique**](#2-logistic-regression-model-analyzes-that-high-green-landscape-index-reduces-mets-risk)
  - [**3. Un système d’apprentissage profond aide les jeunes ophtalmologistes à améliorer de 12 % la cohérence de leurs diagnostics**](#3-deep-learning-system-helps-junior-ophthalmologists-increase-diagnostic-consistency-by-12)
  - [**4. GSP-GCNs atteint une précision de 90,2 % pour le diagnostic de la maladie de Parkinson**](#4-gsp-gcns-achieve-up-to-902-accuracy-in-parkinsons-disease-diagnosis)
  - [**5. MIRS, un système de score pronostique du cancer du sein**](#5-breast-cancer-prognosis-scoring-system-mirs)
  - [**6. Le modèle fondamental d’images rétiniennes RETFound prédit plusieurs maladies systémiques**](#6-retinal-image-foundation-model-retfound-predicts-multiple-systemic-diseases)
  - [**7. La SVM optimise les capteurs tactiles : le taux de reconnaissance du braille atteint 96,12 %**](#7-svm-optimizes-tactile-sensors-braille-recognition-rate-reaches-9612)
  - [**8. L’Institut de génomique de Pékin de l’Académie chinoise des sciences crée une archive ouverte d’imagerie biomédicale**](#8-cas-beijing-institute-of-genomics-establishes-an-open-biomedical-imaging-archive)
  - [**9. L’IA Lunit interprète les mammographies avec une précision comparable à celle des médecins**](#9-ai-lunit-reads-mammograms-with-accuracy-comparable-to-doctors)
  - [**10. Une stratégie de sélection de caractéristiques détecte les biomarqueurs du cancer du sein**](#10-feature-selection-strategy-detects-breast-cancer-biomarkers)
  - [**11. Le modèle de gradient boosting prédit avec précision un sous-syndrome de BPSD**](#11-gradient-boosting-machine-model-accurately-predicts-bpsd-sub-syndrome)
  - [**12. Un modèle d’apprentissage automatique prédit la mortalité des patients à un an**](#12-machine-learning-model-predicts-patient-one-year-mortality-rate)
  - [**13. Une nouvelle interface cerveau-ordinateur permet aux patients aphasiques de « parler »**](#13-new-ai-brain-computer-interface-technology-allows-aphasic-patients-to-speak)
  - [**14. Détection du cancer du pancréas par intelligence artificielle fondée sur l’apprentissage profond**](#14-deep-learning-based-artificial-intelligence-detection-of-pancreatic-cancer)
  - [**15. Efficacité en population du dépistage du cancer du poumon assisté par apprentissage automatique**](#15-population-effectiveness-of-machine-learning-assisted-lung-cancer-screening)
  - [**16. Le modèle fusionné d’IA diagnostique le cancer de l’ovaire à partir des analyses de routine et de l’âge**](#16-ovarian-cancer-diagnostic-ai-fusion-model-mcf-calculates-risk-using-routine-lab-data-and-age)
  - [**17. Google publie HEAL, un cadre en quatre étapes pour évaluer l’équité des outils d’IA médicale**](#17-google-releases-heal-framework-a-4-step-process-to-assess-medical-ai-tool-fairness)
  - [**18. La segmentation sémantique permet de créer Pianno, un outil d’annotation sémantique de la transcriptomique spatiale**](#18-leveraging-semantic-segmentation-to-develop-spatial-transcriptomics-semantic-annotation-tool-pianno)
  - [**19. Le modèle d’IA UniFMIR repousse les limites actuelles de l’imagerie par microscopie à fluorescence**](#19-ai-model-unifmir-breaks-the-limits-of-existing-fluorescence-microscopy-imaging)
  - [**20. Un système d’apprentissage profond améliore la précision de la prédiction de la survie au cancer**](#20-deep-learning-system-improves-the-accuracy-of-cancer-survival-prediction)
  - [**21. MemSAM adapte le modèle « Segment Anything » à la segmentation des vidéos médicales**](#21-memsam-adapts-segment-anything-model-for-medical-video-segmentation)
  - [**22. Medical SAM 2, modèle de segmentation d’images médicales, arrive en tête du classement SOTA**](#22-medical-image-segmentation-model-medical-sam-2-tops-the-sota-leaderboard)
  - [**23. L’apprentissage automatique combat la résistance à la chimiothérapie et la récidive tumorale, protégeant les cellules souches du cancer du sein**](#23-machine-learning-fights-chemotherapy-resistance-and-tumor-recurrence-building-a-strong-defense-against-breast-cancer-stem-cells)
  - [**24. Le modèle vision-langage DeepDR-LLM pour les soins du diabète est publié dans une revue de la famille Nature**](#24-vision-language-model-deepdr-llm-for-diabetes-care-published-in-nature-sub-journal)
  - [**25. À armes égales avec les pathologistes chevronnés ! L’équipe de Tsinghua propose ROAM, modèle fondamental d’IA pour diagnostiquer précisément les gliomes**](#25-leveling-with-senior-pathologists-tsinghua-team-proposes-ai-foundation-model-roam-for-precise-glioma-diagnosis)
  - [**26. Le modèle universel de segmentation d’images médicales ScribblePrompt dépasse les modèles fondés sur SAM**](#26-universal-medical-image-segmentation-model-scribbleprompt-outperforms-sam-based-models)
  - [**27. Une plateforme de jumeau numérique du cerveau révèle des phénomènes critiques et des fonctions cognitives proches de celles du cerveau humain**](#27-digital-twin-brain-platform-demonstrates-critical-phenomena-and-cognitive-functions-similar-to-the-human-brain)
  - [**28. Un système de simulation d’agents conversationnels LLM pose un premier diagnostic de dépression**](#28-automated-llm-dialogue-agent-simulation-system-performs-initial-diagnosis-for-depression)
  - [**29. Le modèle d’apprentissage profond LucaProt facilite l’identification des virus à ARN**](#29-deep-learning-model-lucaprot-aids-in-rna-virus-identification)
  - [**30. Le cadre de préentraînement d’images médicales UniMedI lève les obstacles liés à l’hétérogénéité des données médicales**](#30-medical-image-pre-training-framework-unimedi-breaks-down-medical-data-heterogeneity-barriers)
  - [**31. Le grand modèle médical multilingue MMed-Llama 3 s’adapte mieux aux usages médicaux**](#31-multilingual-medical-large-model-mmed-llama-3-better-adapts-to-medical-application-scenarios)
  - [**32. La méthode d’assemblage d’images d’endoscopie capsulaire S2P-Matching facilite la reconstruction d’images**](#32-capsule-endoscopy-image-stitching-method-s2p-matching-assists-in-image-reconstruction)
  - [**33. Le banc d’essai médical multimodal GMAI-MMBench couvre 284 jeux de données et 18 tâches cliniques**](#33-multimodal-medical-benchmark-gmai-mmbench-features-284-datasets-covering-18-clinical-tasks)
  - [**34. La nouvelle méthode de prévision de séries temporelles CGS-Mask révèle des indicateurs clés de survie des patients**](#34-novel-time-series-forecasting-method-cgs-mask-uncovers-key-indicators-for-patient-survival-rates)
  - [**35. Le cadre de décodage cérébral non invasif fMRI pose les bases des interfaces cerveau-ordinateur et des modèles cognitifs**](#35-non-invasive-brain-decoding-framework-fmri-lays-the-foundation-for-brain-computer-interfaces-and-cognitive-models)
  - [**36. Le modèle de segmentation d’images médicales M2CF-Net améliore la précision du diagnostic du syndrome de Sjögren**](#36-medical-image-segmentation-model-m2cf-net-improves-diagnosis-accuracy-for-sjogrens-syndrome)
  - [**37. BSAFusion permet l’alignement et la fusion d’images médicales multimodales**](#37-bsafusion-enables-alignment-and-fusion-of-multimodal-medical-images)
  - [**38. Le cadre multi-agents LLM KG4Diagnosis aide à diagnostiquer 362 maladies courantes**](#38-multi-agent-llm-framework-kg4diagnosis-assists-in-diagnosing-362-common-diseases)
  - [**39. Le modèle de segmentation ConDSeg résout les problèmes de contours flous et de cooccurrence en imagerie médicale**](#39-image-segmentation-model-condseg-solves-soft-boundary-and-co-occurrence-issues-in-medical-imaging)
  - [**40. Le modèle médical M³FM permet le diagnostic clinique en zéro-shot et prend en charge les comptes rendus et la classification des maladies**](#40-medical-model-m³fm-enables-zero-shot-clinical-diagnosis-supporting-disease-reporting-and-classification)
  - [**41. L’estimation du sexe à partir de scanners CT du crâne par apprentissage profond dépasse les experts médico-légaux**](#41-deep-learning-based-sex-estimation-from-skull-ct-scans-outperforms-human-forensic-experts)
  - [**42. L’IA stimule la recherche médicale : les grands modèles deviennent le « partenaire idéal » de la formation des médecins généralistes**](#42-ai-boosts-medical-research-large-models-become-the-golden-partner-for-training-primary-care-physicians)
  - [**43. L’algorithme d’apprentissage profond AcneDGNet détecte et classe les lésions acnéiques**](#43-acnedgnet-deep-learning-algorithm-achieves-acne-lesion-detection-and-grading)
  - [**44. Le modèle multimodal de segmentation d’images médicales VISTA3D permet l’auto-segmentation et l’interaction sur des images 3D**](#44-multimodal-medical-image-segmentation-model-vista3d-released-achieving-3d-image-auto-segmentation-and-interaction)
  - [**45. Le modèle unifié de segmentation multi-plans EchoONE segmente avec précision plusieurs vues échocardiographiques**](#45-multi-plane-echocardiography-unified-segmentation-model-echoone-accurately-segments-multiple-planes)
  - [**46. Un cadre de dialogue multi-agents simule des consultations médicales pour aider au diagnostic des maladies**](#46-multi-agent-dialogue-framework-simulates-medical-consultations-to-aid-disease-diagnosis)
  - [**47. Le cadre d’apprentissage profond STAIG révèle des informations génétiques détaillées dans le microenvironnement tumoral**](#47-deep-learning-framework-staig-reveals-detailed-genetic-information-in-the-tumor-microenvironment)
  - [**48. Le premier cadre tout-en-un de réidentification d’images médicales MaMI atteint le niveau SOTA sur 11 jeux de données**](#48-first-all-in-one-medical-image-re-identification-framework-mami-reaches-sota-across-11-datasets)
  - [**49. Le modèle de régression many-to-one M2OST prédit avec précision l’expression génétique à partir d’images d’anatomopathologie numérique**](#49-many-to-one-regression-model-m2ost-accurately-predicts-gene-expression-using-digital-pathology-images)
  - [**50. L’outil d’analyse d’IRM cérébrales MindGlide quantifie plusieurs lésions de sclérose en plaques**](#50-brain-mri-scanning-tool-mindglide-quantifies-multiple-sclerosis-lesions)
  - [**51. Le cadre d’apprentissage multi-instances par distillation hiérarchique HDMIL traite rapidement les lames entières de gigapixels**](#51-hierarchical-distillation-multi-instance-learning-framework-hdmil-rapidly-processes-gigapixel-whole-slide-images)
  - [**52. Le modèle fondamental universel vesselFM pour segmenter les vaisseaux sanguins en 3D dépasse largement les modèles fondés sur SAM**](#52-universal-3d-blood-vessel-segmentation-foundation-model-vesselfm-far-exceeds-sam-based-models)
  - [**53. Les réseaux neuronaux de graphes prédisent avec précision la survie au cancer du poumon et découvrent trois sous-types mortels**](#53-graph-neural-networks-accurately-predict-lung-cancer-survival-discovering-3-fatal-subtypes)
  - [**54. Un modèle d’IA à stratégie de fusion prédit le risque de mortalité lié au choc septique**](#54-fusion-strategy-ai-model-predicts-septic-shock-mortality-risk)
  - [**55. Le premier modèle clinique Graph-of-Thought au monde, appliqué à l’encéphalopathie hypoxo-ischémique, améliore de 15 % la prédiction des résultats neurocognitifs**](#55-worlds-first-clinical-graph-of-thought-model-in-hie-improves-neurocognitive-outcome-prediction-by-15)
  - [**56. La modélisation fine des cohortes à partir de données de DSE multidimensionnelles améliore de 16,3 % la prédiction de la durée d’hospitalisation**](#56-fine-grained-patient-cohort-modeling-using-multidimensional-ehr-data-increases-length-of-stay-prediction-accuracy-by-163)
  - [**57. Le modèle d’apprentissage profond APEX sélectionne des candidats antibiotiques potentiels**](#57-deep-learning-model-apex-screens-potential-antibiotic-candidates)
  - [**58. L’épidémiologie des eaux usées associée au séquençage génétique et à l’apprentissage automatique : ICA-Var détecte les virus jusqu’à quatre semaines à l’avance**](#58-wastewater-epidemiology-assessment-using-gene-sequencing-and-machine-learning-ica-var-method-detects-viruses-up-to-4-weeks-early)
  - [**59. Le modèle de diffusion bidirectionnel de pont brownien améliore la reproductibilité de la coloration virtuelle**](#59-bidirectional-brownian-bridge-diffusion-model-enhances-reproducibility-of-virtual-staining)
  - [**60. Medical GraphRAG bat les records de précision en questions-réponses et atteint le niveau SOTA sur 11 bancs d’essai**](#60-medical-graphrag-breaks-qa-accuracy-records-achieving-sota-on-11-benchmark-datasets)
  - [**61. Healthcare Agent détecte automatiquement les problèmes d’éthique médicale et de sécurité**](#61-healthcare-agent-automatically-detects-medical-ethics-and-safety-issues)
  - [**62. Le classificateur d’images de cellules sanguines CytoDiffusion aide à détecter la leucémie et dépasse les experts cliniques**](#62-blood-cell-image-classifier-cytodiffusion-assists-in-discovering-leukemia-surpassing-clinical-experts)
  - [**63. L’équipe de l’UCL propose MORPHFED, un cadre d’apprentissage fédéré pour analyser la morphologie sanguine entre établissements**](#63-ucl-team-proposes-federated-learning-framework-morphfed-for-cross-institutional-blood-morphology-analysis)
  - [**64. Une équipe française propose un cadre d’apprentissage automatique explicable pour prédire avec précision la mortalité des candidats à une transplantation hépatique pour un CHC**](#64-french-team-proposes-explainable-machine-learning-framework-for-accurate-mortality-prediction-in-hcc-liver-transplant-candidates)
  - [**65. Stanford propose Merlin, le premier modèle vision-langage natif 3D pour les scanners CT abdominaux**](#65-stanford-university-proposes-merlin-the-first-native-3d-abdominal-ct-vision-language-model)
- [**IA + chimie des matériaux**](#ai-materials-chemistry)
  - [**1. Un cadre informatique à haut débit génère 120 000 nouveaux candidats MOF en 33 minutes**](#1-high-throughput-computational-framework-generates-120000-novel-mof-candidates-in-33-minutes)
  - [**2. Un algorithme d’apprentissage automatique sélectionne des matériaux d’électrode P-SOC**](#2-machine-learning-algorithm-screens-p-soc-electrode-materials)
  - [**3. Le modèle d’apprentissage automatique SEN prédit les propriétés des matériaux avec une grande précision**](#3-sen-machine-learning-model-achieves-high-accuracy-material-property-predictions)
  - [**4. L’outil d’apprentissage profond GNoME découvre 2,2 millions de nouveaux cristaux**](#4-deep-learning-tool-gnome-discovers-22-million-new-crystals)
  - [**5. Le réseau neuronal à atomes incorporés de façon récursive sous l’effet d’un champ décrit précisément les variations d’intensité et de direction du champ externe**](#5-field-induced-recursively-embedded-atom-neural-network-accurately-describes-external-field-strength-and-direction-changes)
  - [**6. L’apprentissage automatique prédit les isothermes d’adsorption de l’eau dans les matériaux poreux**](#6-machine-learning-predicts-water-adsorption-isotherms-of-porous-materials)
  - [**7. L’apprentissage automatique optimise les co-catalyseurs des photoanodes BiVO(4)**](#7-using-machine-learning-to-optimize-co-catalysts-for-bivo4-photoanodes)
  - [**8. L’algorithme RetroExplainer effectue des prédictions de rétrosynthèse à l’aide de l’apprentissage profond**](#8-retroexplainer-algorithm-performs-retrosynthesis-prediction-based-on-deep-learning)
  - [**9. Des réseaux neuronaux profonds et le traitement automatique du langage servent à développer des alliages résistants à la corrosion**](#9-deep-neural-networks--nlp-used-to-develop-corrosion-resistant-alloys)
  - [**10. L’apprentissage profond détermine la structure interne des matériaux à partir d’observations de surface**](#10-deep-learning-determines-materials-internal-structures-through-surface-observations)
  - [**11. Trois nouveaux matériaux développés à l’aide de scintillateurs à rayons X innovants**](#11-developing-3-new-materials-using-innovative-x-ray-scintillators)
  - [**12. L’apprentissage semi-supervisé extrait des informations cachées de données non étiquetées**](#12-semi-supervised-learning-extracts-hidden-information-from-unlabeled-data)
  - [**13. Extraction automatisée des connaissances fondée sur AutoML**](#13-automated-knowledge-extraction-based-on-automl)
  - [**14. Uni-MOF : un modèle d’apprentissage automatique prédit le comportement d’adsorption des matériaux MOF 3D**](#14-uni-mof-a-machine-learning-model-predicting-adsorption-behavior-in-3d-mof-materials)
  - [**15. Les microélectroniques accélèrent vers l’ère post-Moore ! L’association d’un DNN à une technologie de nanomembranes analyse avec précision les angles d’incidence de la lumière**](#15-microelectronics-accelerates-towards-the-post-moore-era-integrating-dnn-with-nanomembrane-technology-to-precisely-analyze-incident-light-angles)
  - [**16. Repousser les limites de performance des batteries au lithium grâce à un modèle électrochimique simplifié fondé sur l’apprentissage d’ensemble**](#16-reshaping-lithium-battery-performance-boundaries-proposing-a-simplified-electrochemical-model-based-on-ensemble-learning)
  - [**17. Le plus puissant aimant supraconducteur à base de fer, conçu grâce à l’apprentissage automatique**](#17-the-strongest-iron-based-superconducting-magnet-born-via-machine-learning)
  - [**18. Les réseaux neuronaux remplacent la théorie de la fonctionnelle de la densité ! Un modèle universel des matériaux produit des prédictions ultra-précises**](#18-neural-networks-replace-density-functional-theory-universal-materials-model-achieves-ultra-precise-predictions)
  - [**19. Le cadre de fonctionnelle de densité par réseau neuronal ouvre la boîte noire de la prédiction de la structure électronique de la matière**](#19-neural-network-density-functional-framework-opens-the-black-box-of-matters-electronic-structure-prediction)
  - [**20. Une première architecture d’entraînement entièrement en mode direct pour le calcul optique par réseaux neuronaux marque une avancée majeure pour les puces optiques nationales**](#20-first-fully-forward-mode-training-architecture-for-optical-computing-using-neural-networks-achieves-major-breakthrough-in-domestic-optical-chips)
  - [**21. Le LLM de chimie ChemLLM couvre 7 millions de questions-réponses et rivalise avec GPT-4 en expertise**](#21-chemistry-llm-chemllm-covers-7-million-qa-data-professional-capabilities-rival-gpt-4)
  - [**22. Des microspectromètres adaptatifs à l’IA, fabricables à l’échelle d’une plaquette**](#22-wafer-scale-producible-ai-adaptive-micro-spectrometers)
  - [**23. Le modèle GNNOpt identifie des centaines de candidats pour les cellules solaires et les matériaux quantiques**](#23-gnnopt-model-identifies-hundreds-of-solar-cell-and-quantum-material-candidates)
  - [**24. Le jeu de données ouvert OMat24 contient 110 millions de résultats de calcul DFT**](#24-open-omat24-dataset-contains-110-million-dft-calculation-results)
  - [**25. Un nouvel alliage réfractaire à haute entropie synthétisé par apprentissage automatique présente une excellente ductilité à température ambiante**](#25-novel-refractory-high-entropy-alloy-synthesized-via-machine-learning-boasts-excellent-room-temperature-ductility)
  - [**26. Le modèle génératif de matériaux FlowLLM s’appuie sur un jeu de données couvrant plus de 45 000 matériaux**](#26-material-generative-model-flowllm-features-a-dataset-covering-over-45k-materials)
  - [**27. L’apprentissage actif identifie 14 000 oxydes à haute entropie et sélectionne quatre catalyseurs très actifs pour la production d’hydrogène**](#27-using-active-learning-to-identify-14000-high-entropy-oxides-successfully-screening-4-high-activity-hydrogen-evolution-catalysts)
  - [**28. Le modèle d’apprentissage profond BETE-NET multiplie par cinq l’efficacité de la recherche de matériaux supraconducteurs**](#28-deep-learning-model-bete-net-boosts-superconducting-material-search-efficiency-by-5x)
  - [**29. La technologie des arbres de décision à gradient boosting (GBDT) améliore encore la prédiction précise de la résistance à l’oxydation des alliages à haute entropie**](#29-gradient-boosting-decision-tree-gbdt-technology-further-improves-high-precision-prediction-of-high-entropy-alloy-oxidation-resistance)
  - [**30. Le cadre de conception moléculaire RingFormer prédit plus précisément les propriétés optoélectroniques des molécules organiques**](#30-molecular-design-framework-ringformer-more-precisely-predicts-organic-material-molecular-optoelectronic-properties)
  - [**31. La méthode de planification de la rétrosynthèse inorganique Retrieval-Retro améliore l’efficacité et la précision de la synthèse des matériaux inorganiques**](#31-inorganic-retrosynthesis-planning-method-retrieval-retro-improves-inorganic-material-synthesis-efficiency-and-accuracy)
  - [**32. Des grands modèles décryptent les mécanismes de conduction des électrolytes solides hydrurés et établissent un modèle fiable de prédiction de l’énergie d’activation**](#32-using-large-models-to-decipher-hydride-solid-state-electrolyte-conduction-mechanisms-establishing-a-reliable-activation-energy-prediction-model)
  - [**33. La recherche de données de spectrométrie de masse à l’échelle du téraoctet, rendue possible par l’apprentissage automatique, révèle des réactions chimiques inconnues**](#33-tera-scale-mass-spectrometry-data-search-enabled-by-machine-learning-uncovers-unknown-chemical-reactions)
  - [**34. La méthode de résolution structurale générative PXRDnet, fondée sur des modèles de diffusion, résout 200 nanocristaux simulés complexes**](#34-generative-ai-structure-solution-method-pxrdnet-based-on-diffusion-models-successfully-solves-200-complex-simulated-nanocrystals)
  - [**35. Le modèle DreaMS couvre 200 millions de spectres de masse moléculaires et constitue GeMS, le plus grand jeu de données de spectrométrie de masse au monde**](#35-dreams-model-covers-200-million-molecular-mass-spectra-building-the-worlds-largest-mass-spec-dataset-gems)
  - [**36. Le cadre d’apprentissage automatique équivariant accélère les simulations à grande échelle des champs électriques dans les matériaux**](#36-equivariant-machine-learning-framework-accelerates-large-scale-electric-field-simulations-of-materials)
  - [**37. Une méthode d’intégration de données multi-sources sélectionne 25 types de substituts au clinker de ciment, soit l’équivalent de 1,2 milliard de tonnes de gaz à effet de serre évitées**](#37-multi-source-data-integration-method-screens-25-types-of-cement-clinker-alternatives-equivalent-to-reducing-12-billion-tons-of-greenhouse-gases)
  - [**38. UNIMATE réalise pour la première fois une modélisation unifiée de la génération de topologies et de la prédiction de propriétés**](#38-unimate-achieves-unified-modeling-of-topology-generationproperty-prediction-for-the-first-time)
  - [**39. Le cadre Transformer de diffusion tous atomes génère pour la première fois de façon unifiée des systèmes atomiques périodiques et apériodiques**](#39-all-atom-diffusion-transformer-framework-enables-unified-generation-of-periodic-and-aperiodic-atomic-systems-for-the-first-time)
  - [**40. Le modèle FASTSOLV prédit la solubilité des petites molécules à toute température et accélère l’inférence d’un facteur 50**](#40-fastsolv-model-realizes-small-molecule-solubility-prediction-at-any-temperature-accelerating-inference-speed-by-50x)
  - [**41. Une nouvelle méthode fondée sur des modèles d’apprentissage automatique multimodaux prédit les propriétés des matériaux sans structure cristalline complète**](#41-novel-method-based-on-multimodal-machine-learning-models-predicts-material-properties-without-complete-crystal-structures)
  - [**42. Le modèle d’IA CGformer intègre de façon novatrice des mécanismes d’attention globale pour faciliter la R&D des matériaux à haute entropie**](#42-ai-model-cgformer-innovatively-integrates-global-attention-mechanisms-aiding-high-entropy-material-rd)
  - [**43. La nouvelle méthode d’intégration de contraintes structurelles SCIGEN s’adapte à tout modèle de diffusion préentraîné**](#43-novel-structural-constraint-integration-method-scigen-adapts-to-any-pre-trained-diffusion-model)
  - [**44. Le modèle d’IA générative SpectroGen, guidé par la physique, réalise une génération intermodale avec une corrélation expérimentale de 99 % à partir d’une seule modalité en entrée**](#44-physically-informed-generative-ai-model-spectrogen-requires-only-single-modality-input-to-achieve-cross-modal-generation-with-99-experimental-correlation)
  - [**45. MOF-ChemUnity reconstitue une connaissance panoramique des MOF et fait entrer la découverte des matériaux dans l’ère de l’IA explicable**](#45-mof-chemunity-reconstructs-mof-panoramic-knowledge-pushing-material-discovery-into-the-explainable-ai-era)
  - [**46. Le modèle de potentiel universel léger PET-MAD atteint, avec un minimum d’échantillons, la précision de modèles spécialisés**](#46-lightweight-universal-potential-model-pet-mad-released-achieving-dedicated-model-level-precision-with-minimal-samples)
  - [**47. Le système d’IA ChemOntology réduit de moitié le coût de recherche des voies réactionnelles en intégrant les connaissances chimiques**](#47-ai-system-chemontology-released-halving-reaction-path-search-costs-by-integrating-chemical-knowledge)
  - [**48. Princeton et ses partenaires proposent une méthode LLM de prédiction de l’énergie libre des MOF qui évalue avec grande précision la faisabilité de leur synthèse**](#48-princeton-and-others-jointly-propose-llm-method-for-predicting-mof-free-energy-highly-accurately-assessing-synthesis-feasibility)
  - [**49. L’équipe de Yale propose le modèle MOSAIC, qui coordonne des LLM pour générer des protocoles de synthèse chimique très fiables**](#49-yale-university-team-proposes-mosaic-model-coordinating-llms-to-generate-highly-reliable-chemical-synthesis-schemes)
  - [**50. Le MIT et ses partenaires proposent le modèle de diffusion DiffSyn pour planifier de façon générative les voies de synthèse des matériaux**](#50-mit-and-others-propose-diffusion-model-diffsyn-enabling-generative-planning-of-material-synthesis-pathways)
  - [**51. L’université du Michigan et Farasis Energy proposent la méthode « Discovery Learning », qui raccourcit considérablement les cycles de prédiction de la durée de vie des batteries**](#51-university-of-michigan-and-farasis-energy-jointly-propose-discovery-learning-method-drastically-shortening-battery-life-prediction-cycles)
  - [**52. Cornell propose le cadre SCAN, qui prédit et explique avec une grande précision les performances des électrolytes de batterie**](#52-cornell-university-proposes-scan-framework-highly-accurately-predicting-and-explaining-battery-electrolyte-performance)
  - [**53. Le MIT propose DefectNet, grand modèle fondamental de caractérisation et de quantification non destructives des défauts internes des matériaux**](#53-mit-proposes-foundation-large-model-defectnet-for-non-destructive-characterization-and-quantification-of-internal-material-defects)
  - [**54. Cornell propose la plateforme multi-agents EMSeek pour automatiser intégralement l’analyse d’images de microscopie électronique**](#54-cornell-university-proposes-multi-agent-platform-emseek-achieving-full-pipeline-automated-analysis-of-electron-microscopy-images)
- [**IA + zoologie-botanique**](#ai-zoology-botany)
  - [**1. SBeA analyse les comportements sociaux des animaux à l’aide d’un cadre d’apprentissage few-shot**](#1-sbea-analyzes-animal-social-behaviors-based-on-a-few-shot-learning-framework)
  - [**2. Une méthode d’apprentissage profond fondée sur des réseaux siamois capture automatiquement le développement embryonnaire**](#2-deep-learning-method-based-on-siamese-networks-automatically-captures-embryonic-development-processes)
  - [**3. Pipeline systématique de collecte par drone de données sur les phénotypes végétaux afin de prédire les dates optimales de récolte**](#3-systematic-pipeline-for-collecting-plant-phenotype-data-via-drones-to-predict-optimal-harvest-dates)
  - [**4. Un système d’alerte par caméra IA distingue précisément les tigres des autres espèces**](#4-ai-camera-alert-system-accurately-distinguishes-tigers-from-other-species)
  - [**5. L’analyse de données de labradors et la comparaison de trois modèles révèlent les traits comportementaux qui influent sur les performances des chiens détecteurs**](#5-using-labrador-retriever-data-and-comparing-3-models-reveals-behavioral-traits-affecting-detection-dogs-performance)
  - [**6. Un modèle de reconnaissance multi-espèces fondé sur la tête de classification ArcFace pour la reconnaissance faciale**](#6-multi-species-image-recognition-model-based-on-arcface-classification-head-for-face-recognition)
  - [**7. Suivi de la floraison des cerisiers au Japon à l’aide d’une API Python et d’une API de vision par ordinateur**](#7-monitoring-cherry-blossom-blooming-in-japan-using-python-api-and-computer-vision-api)
  - [**8. Une méthode de génétique des populations fondée sur l’apprentissage automatique révèle la formation des arômes du raisin**](#8-machine-learning-based-population-genetics-method-reveals-the-formation-mechanism-of-grape-flavors)
  - [**9. Revue : accélérer la recherche en bio-informatique grâce à l’IA**](#9-review-unlocking-bioinformatics-research-more-efficiently-with-ai)
  - [**10. Le modèle BirdFlow prédit avec précision les trajectoires de vol des oiseaux migrateurs**](#10-birdflow-model-accurately-predicts-flight-paths-of-migratory-birds)
  - [**11. Un nouveau modèle de bioacoustique des baleines identifie huit espèces de cétacés**](#11-new-whale-bioacoustics-model-identifies-8-cetacean-species)
  - [**12. L’apprentissage automatique isole l’alphabet phonétique du cachalot, proche du langage humain et doté d’une plus grande capacité informationnelle**](#12-machine-learning-isolates-the-sperm-whale-phonetic-alphabet-highly-similar-to-human-language-with-stronger-information-carrying-capacity)
  - [**13. Le modèle PlantLncBoost atteint une précision de 96 % pour la prédiction interespèces des lncRNA**](#13-plantlncboost-model-achieves-up-to-96-accuracy-in-cross-species-lncrna-prediction)
  - [**14. Perch 2.0 couvre près de 15 000 espèces et établit un nouveau SOTA en classification et détection bioacoustiques**](#14-perch-20-covers-nearly-15000-species-refreshing-sota-in-bioacoustic-classification-detection)
- [**IA + agriculture, foresterie et élevage**](#ai-agriculture-forestry-animal-husbandry)
  - [**1. Estimer rapidement et précisément le rendement du riz à l’aide de réseaux neuronaux convolutifs**](#1-using-convolutional-neural-networks-for-rapid-and-accurate-rice-yield-estimation)
  - [**2. Un modèle conçu avec l’algorithme YOLOv5 surveille la posture des truies et les mises bas**](#2-model-designed-via-yolov5-algorithm-monitors-sow-posture-and-piglet-birth)
  - [**3. Des observations en laboratoire et l’apprentissage automatique montrent que les ultrasons émis par des plants de tomate et de tabac stressés se propagent dans l’air**](#3-combining-laboratory-observation-and-machine-learning-to-prove-that-ultrasonic-sounds-emitted-by-stressed-tomato-and-tobacco-plants-can-travel-in-air)
  - [**4. Des drones et l’analyse d’images par IA détectent les ravageurs forestiers**](#4-drone--ai-image-analysis-detects-forestry-pests)
  - [**5. Un système de détection de la boiterie des vaches laitières conçu par vision par ordinateur et apprentissage profond**](#5-computer-vision--deep-learning-developed-for-a-dairy-cow-lameness-detection-system)
- [**IA + météorologie**](#ai-meteorology)
  - [**1. Revue : modèles de prévision météorologique fondés sur l’apprentissage automatique et les données**](#1-review-data-driven-machine-learning-weather-forecasting-models)
  - [**2. Revue : collecte de données dans les centres de grêle et prédiction des phénomènes météorologiques extrêmes à l’aide de grands modèles**](#2-review-collecting-data-from-hailstorm-centers-and-predicting-extreme-weather-using-large-models)
  - [**3. De nouveaux algorithmes prédisent précisément les précipitations extrêmes grâce aux simulations globales résolvant les tempêtes et à l’apprentissage automatique**](#3-creating-new-algorithms-to-accurately-predict-extreme-precipitation-using-global-storm-resolving-simulations-and-machine-learning)
  - [**4. Le modèle d’apprentissage automatique CSU-MLP, fondé sur les forêts aléatoires, prédit les phénomènes météorologiques violents à moyen terme**](#4-random-forest-based-machine-learning-model-csu-mlp-predicts-medium-range-severe-weather)
  - [**5. Le système de prévision météorologique de bout en bout Aardvark Weather, piloté par les données, accélère les prévisions de plusieurs dizaines de fois par rapport aux méthodes traditionnelles**](#5-end-to-end-data-driven-weather-forecasting-system-aardvark-weather-speeds-up-predictions-by-dozens-of-times-compared-to-traditional-methods)
  - [**6. Le système de prévision météorologique FCN3 fondé sur l’apprentissage automatique permet une inférence ultra-rapide sur un seul GPU**](#6-machine-learning-weather-forecasting-system-fcn3-supports-ultra-fast-single-gpu-inference)
  - [**7. Un modèle de prévision de la mousson indienne fondé sur 36 stations météorologiques fournit des prévisions fines à l’échelle urbaine**](#7-indian-monsoon-forecasting-model-based-on-36-weather-stations-achieves-city-scale-fine-forecasting)
  - [**8. ACE2 réalise en deux minutes une prévision saisonnière couvrant quatre mois**](#8-ace2-completes-a-4-month-seasonal-forecast-in-just-2-minutes)
  - [**9. Le modèle incrémental de prévision météorologique VA-MoE atteint le niveau SOTA avec 75 % de paramètres en moins**](#9-incremental-weather-forecasting-model-va-moe-released-achieving-sota-performance-with-75-parameter-reduction)
  - [**10. Le modèle de diffusion glissante explicité ERDM résout les défis de la prévision à long terme et devance les références EDM à moyen et long terme**](#10-elucidated-rolling-diffusion-model-erdm-released-solving-long-term-forecasting-challenges-and-maintaining-a-lead-over-edm-baselines-in-medium-to-long-term-forecasts)
  - [**11. Le nouveau modèle de diffusion latente OmniCast résout l’accumulation d’erreurs dans les modèles autorégressifs de prévision météorologique**](#11-novel-latent-diffusion-model-omnicast-released-resolving-error-accumulation-in-autoregressive-weather-forecasting-models)
  - [**12. NVIDIA propose une nouvelle méthode de distillation à longue portée qui lève les obstacles de l’IA à la prévision météorologique à long terme**](#12-nvidia-proposes-a-novel-long-range-distillation-method-breaking-ai-bottlenecks-in-long-term-weather-forecasting)
  - [**13. Une équipe conjointe propose SeaCast, modèle de réseau neuronal de graphes pour des prévisions océaniques régionales ultra-rapides**](#13-joint-team-proposes-graph-neural-network-model-seacast-achieving-ultra-fast-regional-ocean-forecasting)
- [**IA + astronomie**](#ai-astronomy)
  - [**1. L’algorithme PRIMO apprend les règles de propagation de la lumière autour des trous noirs pour en reconstruire des images plus nettes**](#1-primo-algorithm-learns-light-propagation-rules-around-black-holes-to-reconstruct-sharper-black-hole-images)
  - [**2. Des algorithmes de vision par ordinateur entraînés sur des données simulées améliorent et « restaurent » les images astronomiques**](#2-training-computer-vision-algorithms-with-simulated-data-to-sharpen-and-restore-astronomical-images)
  - [**3. L’algorithme d’apprentissage automatique non supervisé Astronomaly découvre des anomalies jusqu’alors ignorées**](#3-using-unsupervised-machine-learning-algorithm-astronomaly-to-find-previously-overlooked-anomalies)
  - [**4. Méthode fondée sur l’apprentissage automatique pour identifier les éjections de masse coronale (CME) et en extraire les paramètres**](#4-machine-learning-based-method-for-cme-identification-and-parameter-extraction)
  - [**5. L’apprentissage profond découvre 107 cas de raies d’absorption du carbone neutre**](#5-deep-learning-discovers-107-cases-of-neutral-carbon-absorption-lines)
  - [**6. Le modèle StarFusion prédit des images à haute résolution spatiale**](#6-starfusion-model-achieves-high-spatial-resolution-image-prediction)
  - [**7. Une méthode de génération d’images satellitaires fondée sur SD3 crée EcoMapper, le plus grand jeu de données de télédétection à ce jour**](#7-satellite-image-generation-method-developed-based-on-sd3-constructing-the-largest-remote-sensing-dataset-to-date-ecomapper)
  - [**8. L’IA géospatiale Earth AI se concentre sur trois types de données essentiels et améliore de 64 % les capacités de raisonnement géospatial**](#8-geospatial-ai-earth-ai-focuses-on-3-core-data-types-improving-geospatial-reasoning-capabilities-by-64)
  - [**9. Naissance d’AION-1, premier modèle fondamental multimodal d’astronomie, préentraîné sur 200 millions de cibles astronomiques**](#9-the-first-astronomical-multimodal-foundation-model-aion-1-is-born-pre-trained-on-200-million-astronomical-targets)
  - [**10. Un nouveau pipeline piloté par les données identifie précisément, par CNN, sept rares objets lenticulaires parmi 810 000 quasars**](#10-novel-data-driven-pipeline-precisely-identifies-7-rare-lensed-samples-from-810000-quasars-using-cnn)
  - [**11. L’ESA propose AnomalyMatch, méthode semi-supervisée qui sélectionne efficacement les astres rares dans près de 100 millions d’archives Hubble**](#11-esa-team-proposes-semi-supervised-method-anomalymatch-to-efficiently-screen-rare-celestial-bodies-from-nearly-100-million-hubble-records)
  - [**12. L’université de Warwick propose le pipeline de validation RAVEN et confirme 118 nouvelles exoplanètes**](#12-university-of-warwick-proposes-the-raven-validation-pipeline-confirming-118-new-exoplanets)
  - [**13. L’université de Warwick propose un cadre d’apprentissage d’ensemble pour prédire avec une grande précision les paramètres astérosismiques des étoiles δ Scuti**](#13-university-of-warwick-proposes-an-ensemble-learning-framework-to-highly-accurately-predict-asteroseismic-parameters-for-δ-scuti-stars)
  - [**14. Une équipe espagnole propose StreakMind, système qui détecte automatiquement les traînées de satellites dans les images astronomiques grâce à l’IA**](#14-spanish-research-team-proposes-the-streakmind-system-utilizing-ai-to-automatically-detect-satellite-streaks-in-astronomical-images)
- [**IA + catastrophes naturelles**](#ai-natural-disaster)
  - [**1. L’apprentissage automatique prédit le risque d’affaissement du sol au cours des 40 prochaines années**](#1-machine-learning-predicts-land-subsidence-risk-over-the-next-40-years)
  - [**2. Le modèle de segmentation sémantique SCDUNet++ sert à cartographier les glissements de terrain**](#2-semantic-segmentation-model-scdunet-used-for-landslide-mapping)
  - [**3. Des réseaux neuronaux transforment des images solaires 2D en reconstructions 3D**](#3-neural-networks-convert-2d-solar-images-into-3d-reconstructed-images)
  - [**4. Les réseaux neuronaux additifs analysent les facteurs qui influent sur les catastrophes naturelles**](#4-additive-neural-networks-analyze-influencing-factors-in-natural-disasters)
  - [**5. L’IA explicable sert à analyser divers facteurs géographiques de Gippsland, en Australie**](#5-using-explainable-ai-to-analyze-various-geographical-factors-in-gippsland-australia)
  - [**6. Modèle de prévision des inondations fondé sur l’apprentissage automatique**](#6-machine-learning-based-flood-forecasting-model)
  - [**7. ED-DLSTM prévoit les inondations dans les zones non surveillées**](#7-ed-dlstm-achieves-flood-prediction-in-unmonitored-areas)
  - [**8. Le modèle ChloroFormer prévient précocement les proliférations d’algues marines**](#8-chloroformer-model-provides-early-warning-of-marine-algal-blooms)
  - [**9. OceanGPT, premier grand modèle de langage marin, est retenu à ACL 2024 ! L’IA incarnée sous-marine devient réalité**](#9-the-first-marine-large-language-model-oceangpt-accepted-by-acl-2024-underwater-embodied-ai-becomes-reality)
  - [**10. L’IA prédit les tendances du réchauffement planétaire**](#10-ai-predicts-global-warming-trends)
  - [**11. Le nouveau modèle GeoAI explique la distribution des flux de chaleur de surface sur le plateau tibétain**](#11-new-geoai-model-explains-surface-heat-flow-distribution-on-the-tibetan-plateau)
  - [**12. Le grand modèle de prévision intelligente de l’environnement marin « WenHai » dépasse les prévisions numériques océaniques**](#12-wenhai-marine-environment-intelligent-forecasting-large-model-outperforms-numerical-marine-forecasting)
  - [**13. L’université du Minnesota propose FHNN, un modèle d’apprentissage automatique guidé par les connaissances pour prévoir les crues avec précision**](#13-university-of-minnesota-proposes-knowledge-guided-machine-learning-model-fhnn-realizing-high-precision-flood-forecasting)
  - [**14. Google publie la version 2 de son système mondial de prévision des inondations et prolonge considérablement la durée de validité des prévisions**](#14-google-releases-version-2-of-its-global-flood-forecasting-system-significantly-extending-valid-forecast-times)
- [**Autres**](#others)
  - [**1. L’assistant de football TacticAI atteint 90 % d’utilité pratique dans les dispositifs tactiques**](#1-tacticai-football-assistant-hits-90-practical-utility-in-tactical-layouts)
  - [**2. Le modèle de diffusion débruitant SPDiff simule les déplacements de foule à longue distance**](#2-denoising-diffusion-model-spdiff-enables-long-range-crowd-movement-simulation)
  - [**3. Les installations scientifiques intelligentes entraînent un changement de paradigme de la recherche**](#3-intelligent-scientific-facilities-drive-paradigm-shifts-in-research)
  - [**4. DeepSymNet représente les expressions symboliques à partir de l’apprentissage supervisé**](#4-deepsymnet-represents-symbolic-expressions-based-on-supervised-learning)
  - [**5. Le grand modèle de langage ChipNeMo aide les ingénieurs à concevoir des puces**](#5-large-language-model-chipnemo-assists-engineers-in-chip-design)
  - [**6. AlphaGeometry résout des problèmes de géométrie**](#6-alphageometry-can-solve-geometry-problems)
  - [**7. L’apprentissage par renforcement appliqué à la planification de l’espace urbain**](#7-reinforcement-learning-applied-to-urban-spatial-planning)
  - [**8. Le cadre ChatArena : jouer au Loup-garou avec de grands modèles de langage**](#8-chatarena-framework-playing-werewolf-with-large-language-models)
  - [**9. Revue : 30 chercheurs publient dans Nature une rétrospective de dix ans sur la façon dont l’IA transforme les paradigmes scientifiques**](#9-review-30-scholars-co-publish-in-nature-10-year-retrospective-deconstructs-how-ai-reshapes-scientific-paradigms)
  - [**10. Ithaca aide les épigraphistes à restaurer les textes, à les dater et à déterminer leur provenance géographique**](#10-ithaca-assists-epigraphers-in-text-restoration-chronological-attribution-and-geographical-attribution)
  - [**11. L’IA dans les problèmes directs et inverses de la méta-optique : analyse de données fondée sur les systèmes de métasurfaces**](#11-ai-in-forward-and-inverse-problems-of-meta-optics-data-analysis-based-on-metasurface-systems)
  - [**12. Nouvelle méthode d’IA géospatiale : régression logistique pondérée par réseau neuronal géographique**](#12-a-new-geospatial-artificial-intelligence-method-geographically-neural-network-weighted-logistic-regression)
  - [**13. Des modèles de diffusion génèrent des paramètres de réseaux neuronaux et transforment l’apprentissage few-shot spatio-temporel en problème de préentraînement par diffusion**](#13-using-diffusion-models-to-generate-neural-network-parameters-transforming-spatiotemporal-few-shot-learning-into-a-diffusion-model-pre-training-problem)
  - [**14. Les dernières avancées AI4S de l’équipe de Fei-Fei Li : 16 technologies innovantes en biologie, matériaux, santé et diagnostic**](#14-latest-ai4s-insights-from-fei-fei-lis-team-16-innovative-technologies-summarized-covering-biologymaterialshealthcarediagnostics)
  - [**15. Prédiction précise des prix de l’immobilier à Wuhan ! Le modèle osp-GNNWR décrit précisément les processus spatiaux complexes et les phénomènes géographiques**](#15-accurate-prediction-of-wuhan-housing-prices-osp-gnnwr-model-accurately-describes-complex-spatial-processes-and-geographical-phenomena)
  - [**16. L’apprentissage en zéro-shot permet de lancer un modèle de diffusion conditionnelle optimisé pour déchiffrer les inscriptions oraculaires**](#16-introducing-zero-shot-learning-to-release-a-conditional-diffusion-model-optimized-for-oracle-bone-script-decipherment)
  - [**17. Stanford, Apple et 23 autres institutions publient le banc d’essai DCLM ; le modèle fondamental égale Llama 3 8B**](#17-stanfordapple-and-23-other-institutions-release-the-dclm-benchmark-foundation-model-performs-on-par-with-llama3-8b)
  - [**18. PoCo résout l’hétérogénéité des sources de données et permet aux robots d’exécuter plusieurs tâches avec souplesse**](#18-poco-solves-the-data-source-heterogeneity-dilemma-enabling-robots-to-execute-multi-tasks-flexibly)
  - [**19. Avec 140 000 images, un jeu de données d’inscriptions oraculaires aide une équipe à remporter le prix du meilleur article d’ACL**](#19-containing-140000-images-oracle-bone-script-dataset-helps-team-win-acl-best-paper-award)
  - [**20. Un schéma de prédiction de canal fondé sur des LLM préentraînés : GPT-2 renforce la couche physique des communications sans fil**](#20-proposing-a-channel-prediction-scheme-based-on-pre-trained-llms-gpt-2-empowers-the-physical-layer-of-wireless-communications)
  - [**21. Premier modèle de réseau antagoniste génératif pour la broderie multistitch**](#21-the-first-generative-adversarial-network-model-for-multi-stitch-embroidery)
  - [**22. La boîte à outils d’analyse automatisée rapide FAST acquiert efficacement des informations sur les échantillons**](#22-fast-automated-scanning-toolkit-fast-efficiently-acquires-sample-information)
  - [**23. Le modèle fondamental de dynamique des populations PDFM est open source et prédit précisément le chômage et la pauvreté aux États-Unis**](#23-population-dynamics-foundation-model-pdfm-open-sourced-precisely-predicting-us-unemployment-and-poverty-rates)
  - [**24. Le modèle d’apprentissage profond CatGWR estime la non-stationnarité spatiale**](#24-deep-learning-model-catgwr-estimates-spatial-non-stationarity)
  - [**25. Le premier système d’intervention par exercice en réalité virtuelle REVERIE au monde favorise la santé cérébrale, physique et mentale des jeunes**](#25-worlds-first-vr-exercise-intervention-system-reverie-reshapes-youth-brain-body-mind-health)
  - [**26. À partir de plus de 176 000 inscriptions, Aeneas réalise pour la première fois la restauration d’inscriptions romaines de longueur arbitraire**](#26-based-on-over-176k-inscription-data-aeneas-achieves-arbitrary-length-restoration-of-ancient-roman-inscriptions-for-the-first-time)
  - [**27. Le cadre de génération vidéo panoramique PanoWan permet aussi le montage vidéo en zéro-shot**](#27-panoramic-video-generation-framework-panowan-also-handles-zero-shot-video-editing)
  - [**28. Le cadre intelligent de classification de céramiques fondé sur YOLOv11 associe modélisation visuelle et analyse économique pour classer et estimer la valeur des artefacts**](#28-yolov11-based-ceramic-classification-intelligent-framework-integrates-visual-modeling-and-economic-analysis-achieving-artifact-classification-and-value-estimation)
  - [**29. La puce « Microwave Brain » traite simultanément des données ultra-rapides et des signaux sans fil avec une précision de 75 % pour 176 milliwatts**](#29-microwave-brain-chip-born-simultaneously-processing-ultra-high-speed-data-and-wireless-signals-with-75-accuracy-at-176-milliwatts-power)
  - [**30. Le modèle d’imputation et de prédiction spatio-temporelle STIMP prédit avec précision la distribution côtière de la chlorophylle a**](#30-spatiotemporal-imputation-and-prediction-model-stimp-released-realizing-precise-predictions-of-coastal-chlorophyll-a-distribution)
  - [**31. Le MIT et ses partenaires prédisent avec précision la dynamique des plasmas en contexte few-shot grâce à l’apprentissage automatique**](#31-mit-and-others-achieve-high-precision-prediction-of-plasma-dynamics-under-few-shot-conditions-based-on-machine-learning)
  - [**32. Reac-Discovery associe modélisation mathématique, apprentissage automatique et expériences automatisées pour résoudre le problème de généralité des laboratoires autonomes**](#32-reac-discovery-fuses-mathematical-modeling-machine-learning-and-automated-experiments-to-solve-the-universality-challenge-of-self-driving-laboratory-systems)
  - [**33. Présentation de NOBLE, premier cadre de modélisation neuronale validé par des données du cortex humain**](#33-the-first-neuron-modeling-framework-noble-validated-by-human-cortical-data-is-introduced)
  - [**34. Le cadre de géolocalisation d’images LocDiff est lancé ; il permet un positionnement mondial précis sans grille ni bibliothèque de référence**](#34-image-geolocation-framework-locdiff-goes-online-enabling-grid-free-and-reference-library-free-global-precision-positioning)
  - [**35. L’apprentissage automatique associé à py-GC-MS identifie avec précision des indices de vie dans les roches archéennes**](#35-machine-learning-combined-with-py-gc-ms-precisely-identifies-evidence-of-life-in-archean-rocks)
  - [**36. L’équipe de Tsinghua propose ND², une méthode de régression neuro-symbolique qui dérive automatiquement des formules complexes de dynamique des réseaux**](#36-tsinghua-university-team-proposes-neuro-symbolic-regression-method-nd-to-automatically-derive-complex-network-dynamics-formulas)
  - [**37. L’équipe de l’université du Zhejiang propose une méthode de prédiction du potentiel minier contrainte par la géologie, qui décrit explicitement l’anisotropie de la minéralisation**](#37-zhejiang-university-team-proposes-geologically-constrained-mineral-prospectivity-prediction-method-explicitly-depicting-mineralization-anisotropy)
  - [**38. Tsinghua et UChicago publient dans Nature : les outils d’IA accroissent l’influence des scientifiques, mais réduisent la diversité des sujets scientifiques**](#38-tsinghua-and-uchicago-team-publishes-in-nature-ai-tools-expand-scientists-impact-but-contract-sciences-focus)
  - [**39. L’équipe de l’UC propose un spectromètre à l’échelle d’une puce augmenté par l’IA, offrant une grande fidélité spectrale dans un volume minuscule**](#39-uc-team-proposes-ai-augmented-chip-scale-spectrometer-achieving-high-spectral-fidelity-in-an-ultra-small-volume)
  - [**40. Le laboratoire national d’Oak Ridge du département américain de l’Énergie propose D-CHAG, qui réduit considérablement l’empreinte mémoire des modèles fondamentaux multicanaux**](#40-us-doe-oak-ridge-national-lab-proposes-d-chag-method-significantly-reducing-memory-footprint-for-multi-channel-foundation-models)
  - [**41. L’équipe Polymathic AI propose Walrus, modèle fondamental de dynamique des milieux continus qui établit des records de simulation interdomaines**](#41-polymathic-ai-team-proposes-continuum-foundation-model-walrus-setting-records-in-cross-domain-simulation-performance)
  - [**42. EPFL propose la nouvelle architecture DYNAMI-CAL GraphNet, un GNN informé par la physique qui modélise précisément la dynamique à plusieurs corps**](#42-epfl-proposes-novel-architecture-dynami-cal-graphnet-a-physics-informed-gnn-accurately-modeling-multi-body-dynamics)
  - [**43. Le MIT propose Wave-Former, nouvelle méthode de reconstruction 3D précise d’objets entièrement occultés**](#43-mit-proposes-novel-method-wave-former-achieving-high-precision-3d-reconstruction-of-completely-occluded-objects)
  - [**44. Le MIT propose DRiffusion, cadre parallèle de rédaction puis de raffinement qui accélère sans perte l’inférence des modèles de diffusion**](#44-mit-proposes-driffusion-draft-and-refine-parallel-framework-realizing-lossless-acceleration-for-diffusion-model-inference)
  - [**45. Le Technion – Institut de technologie d’Israël propose Task Tokens, qui adaptent avec souplesse les modèles fondamentaux de comportement à des tâches spécifiques**](#45-technion---israel-institute-of-technology-proposes-task-tokens-allowing-behavior-foundation-models-to-flexibly-adapt-to-specific-tasks)
  - [**46. Le MIT et ses partenaires proposent EnergAIzer, cadre d’estimation rapide et précise de la puissance GPU pour les charges de travail d’IA**](#46-mit-and-others-propose-energaizer-framework-achieving-fast-and-accurate-gpu-power-estimation-for-ai-workloads)
  - [**47. UIUC propose Eywa, cadre d’agents hétérogènes qui repousse les limites des grands modèles centrés sur le langage**](#47-uiuc-proposes-heterogeneous-agent-framework-eywa-breaking-through-the-limits-of-language-centric-large-models)
  - [**48. Stanford et ses partenaires accélèrent d’un facteur 252 la simulation de l’optique non linéaire du second ordre grâce à des modèles substitutifs LSTM**](#48-stanford-university-and-others-use-lstm-surrogate-models-to-achieve-252x-accelerated-simulation-of-second-order-nonlinear-optics)

## **Avant-propos**

Depuis 2020, des projets scientifiques comme AlphaFold ont placé l’IA pour la science (AI4S) au premier plan des applications de l’intelligence artificielle. Ces dernières années, la biopharmaceutique, l’astronomie, la météorologie, puis des disciplines fondamentales comme la chimie des matériaux sont toutes devenues de nouveaux champs de bataille pour l’IA.

De plus en plus de personnes aux profils interdisciplinaires appliquent des technologies telles que l’apprentissage automatique et l’apprentissage profond au traitement des données et à la construction de modèles dans leurs domaines de recherche. Grâce aussi au renforcement de la collaboration entre équipes de recherche de différentes disciplines, les capacités de l’AI4S sont remarquées par un nombre croissant de chercheurs. Toutefois, l’objectif d’une application à grande échelle n’est pas encore atteint. De nombreux problèmes doivent être résolus de toute urgence : améliorer la reproductibilité des recherches concernées, abaisser le seuil technique et améliorer la qualité des données.

Aujourd’hui, outre les universités et les instituts de recherche qui explorent activement l’AI4S, de nombreux gouvernements et grandes entreprises technologiques ont également pris conscience du potentiel de l’IA pour révolutionner la recherche scientifique et ont engagé des orientations et des plans d’action politiques en conséquence. L’AI4S est incontestablement une tendance de fond.

En tant que l’une des premières communautés à s’intéresser à l’IA pour la science, « HyperAI » est heureuse de partager largement les dernières avancées et les résultats de la recherche tout en accompagnant la croissance du secteur. Nous espérons qu’en présentant des articles et des politiques de pointe, davantage d’équipes pourront constater l’apport de l’IA à la recherche scientifique et contribuer ainsi au développement de l’IA pour la science.

À ce jour, HyperAI a présenté et partagé près de 200 articles. Pour en faciliter la consultation, nous les avons classés par discipline, indiqué les revues et dates de publication, et extrait des mots-clés (équipes de recherche, travaux connexes, jeux de données, etc.). Cliquez sur les titres pour accéder à la page de présentation de l’article (qui contient le lien de téléchargement du texte intégral).

Ce document est proposé sous la forme d’un projet open source. Nous continuerons à mettre à jour les articles de présentation et invitons également chacun à soumettre d’excellents résultats de recherche. Si votre équipe ou votre groupe de recherche souhaite faire connaître ses travaux, vous pouvez ajouter sur WeChat : 神经星星 (identifiant WeChat : Hyperai01).

## **IA + biopharmaceutique**

### **1. [AdaDR surpasse plusieurs méthodes de référence pour le repositionnement de médicaments](https://hyper.ai/news/30434)**

- **Article de recherche :** [https://hyper.ai/news/30434](https://hyper.ai/news/30434)
- **Équipe de recherche :** Équipe de recherche de Min Li à Central South University
- **Travaux connexes :** Gdataset, Cdataset, Ldataset, LRSSL dataset, GCNs framework, AdaDR
- **Revue de publication :** Bioinformatics, 2024.01
- **Lien vers l’article :** [Drug repositioning with adaptive graph convolutional networks](https://academic.oup.com/bioinformatics/article/40/1/btad748/7467059)

### **2. [IMN4NPD accélère la déréplication de vastes groupes dans les réseaux moléculaires et annote les boucles et les paires de nœuds](https://hyper.ai/news/30363)**

- **Article de recherche :** [https://hyper.ai/news/30363](https://hyper.ai/news/30363)
- **Équipe de recherche :** Équipe de recherche de Shao Liu à Central South University
- **Travaux connexes :** MS/MS spectral database, Structure database, molDiscovery, NPClassifier, t-SNE
- **Revue de publication :** Analytical Chemistry, 2024.02
- **Lien vers l’article :** [IMN4NPD: An Integrated Molecular Networking Workflow for Natural Product Dereplication](https://doi.org/10.1021/acs.analchem.3c04746)

### **3. [Modèle génératif profond MIDAS pour l’intégration en mosaïque de données multi-omiques unicellulaires](https://hyper.ai/news/29785)**

- **Article de recherche :** [https://hyper.ai/news/29785](https://hyper.ai/news/29785)
- **Équipe de recherche :** Équipe de recherche de Xiaomin Ying à l’académie de Military Medical Sciences
- **Travaux connexes :** IPBMC dataset, dogma-full dataset, teadog-full dataset, MMIDAS, self-supervised learning, information-theoretic approaches, deep neural networks, SGVB, single-cell multi-omics mosaic data
- **Revue de publication :** Nature Biotechnology, 2024.01
- **Lien vers l’article :** [Mosaic integration and knowledge transfer of single-cell multimodal data with MIDAS](https://www.nature.com/articles/s41587-023-02040-y)

### **4. [ResGen : un modèle de génération moléculaire 3D fondé sur les poches protéiques](https://hyper.ai/news/29026)**

- **Article de recherche :** [https://hyper.ai/news/29026](https://hyper.ai/news/29026)
- **Équipe de recherche :** Équipe de recherche de Tingjun Hou à Zhejiang University
- **Travaux connexes :** CrossDock2020 dataset, global autoregressive, atom autoregressive, parallel multiscale modeling, SBMG. 8 fois plus rapide que les techniques de pointe.
- **Revue de publication :** Nature Machine Intelligence, 2023.09
- **Lien vers l’article :** [ResGen is a pocket-aware 3D molecular generation model based on parallel multiscale modelling](https://www.nature.com/articles/s42256-023-00712-7)

### **5. [Grands modèles et apprentissage automatique pour prédire avec précision les paramètres cinétiques des enzymes](https://hyper.ai/news/29000)**

- **Article de recherche :** [https://hyper.ai/news/29000](https://hyper.ai/news/29000)
- **Équipe de recherche :** Équipe de recherche de Xiaozhou Luo à CAS
- **Travaux connexes :** kcat/Km dataset, Michaelis constant dataset, pH and temperature dataset, DLKcat dataset, UniKP framework, ProtT5-XL-UniRef50, SMILES Transformer model, ensemble models, Random Forest, Extremely Randomized Trees, linear regression models
- **Revue de publication :** Nature Communications, 2023.12
- **Lien vers l’article :** [UniKP: a unified framework for the prediction of enzyme kinetic parameters](https://www.nature.com/articles/s41467-023-44113-1)

### **6. [Le MIT découvre de nouveaux antibiotiques grâce à l’apprentissage profond](https://hyper.ai/news/28886)**

- **Article de recherche :** [https://hyper.ai/news/28886](https://hyper.ai/news/28886)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** Mcule database, Broad Institute database, Graph Neural Network Chemprop, deep learning. 3 646 composés antibiotiques ont été sélectionnés.
- **Revue de publication :** Nature, 2023.12
- **Lien vers l’article :** [Discovery of a structural class of antibiotics with explainable deep learning](https://www.nature.com/articles/s41586-023-06887-8)

### **7. [Les réseaux neuronaux décryptent la sélectivité du couplage GPCR-protéine G](https://hyper.ai/news/28361)**

- **Article de recherche :** [https://hyper.ai/news/28361](https://hyper.ai/news/28361)
- **Équipe de recherche :** Équipe de recherche de the University of Florida
- **Travaux connexes :** Binary classification neural networks, machine learning, unsupervised deep learning models. Des modèles grossiers de 124 GPCR de différents mammifères ont été construits.
- **Revue de publication :** Cell Reports, 2023.09
- **Lien vers l’article :** [Rules and mechanisms governing G protein coupling selectivity of GPCRs](https://doi.org/10.1016/j.celrep.2023.113173)

### **8. [Macformer macrocyclise le médicament acyclique fedratinib](https://hyper.ai/news/28189)**

- **Article de recherche :** [https://hyper.ai/news/28189](https://hyper.ai/news/28189)
- **Équipe de recherche :** Groupe de recherche de Honglin Li à East China University of Science et Technology
- **Travaux connexes :** ZINC dataset, ChEMBL database, deep learning models, Transformer architecture, Macformer
- **Revue de publication :** Nature Communication, 2023.07
- **Lien vers l’article :** [Macrocyclization of linear molecules by deep learning to facilitate macrocyclic drug candidates discovery](https://www.nature.com/articles/s41467-023-40219-8)

### **9. [Un réseau de régression et CGMD prédisent les propriétés d’auto-assemblage de dizaines de milliards de peptides](https://hyper.ai/news/26408)**

- **Article de recherche :** [https://hyper.ai/news/26408](https://hyper.ai/news/26408)
- **Équipe de recherche :** Groupe de recherche de Wenbin Li à Westlake University
- **Travaux connexes :** Latin Hypercube Sampling, CGMD model, AP prediction model, Transformer, MLP, TRN model. L’AP de pentapeptides et de décapeptides a été obtenue.
- **Revue de publication :** Advanced Science, 2023.09
- **Lien vers l’article :** [Deep Learning Empowers the Discovery of Self-Assembling Peptides with Over 10 Trillion Sequences](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202301544)

### **10. [L’apprentissage non supervisé prédit 71 millions de mutations génétiques](https://hyper.ai/news/26154)**

- **Article de recherche :** [https://hyper.ai/news/26154](https://hyper.ai/news/26154)
- **Équipe de recherche :** Équipe de recherche de Google DeepMind
- **Travaux connexes :** ClinVar dataset, AlphaFold, weak-label learning, unsupervised learning, AlphaMissense
- **Revue de publication :** Science, 2023.09
- **Lien vers l’article :** [Accurate proteome-wide missense variant effect prediction with AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492)

### **11. [Une IA d’analyse des odeurs fondée sur les réseaux neuronaux de graphes (GNN)](https://hyper.ai/news/25952)**

- **Article de recherche :** [https://hyper.ai/news/25952](https://hyper.ai/news/25952)
- **Équipe de recherche :** Osmo, a spin-off of Google Research
- **Travaux connexes :** GS-LF database, GNN, Bayesian optimization algorithm. Le modèle a surpassé les humains pour le jugement de 53 % des molécules chimiques et de 55 % des descripteurs d’odeur.
- **Revue de publication :** Science, 2023.08
- **Lien vers l’article :** [A principal odor map unifies diverse tasks in olfactory perception](https://www.science.org/doi/full/10.1126/science.ade4401)

### **12. [Les réseaux neuronaux de graphes sélectionnent des ingrédients anti-âge sûrs et très efficaces](https://hyper.ai/news/25822)**

- **Article de recherche :** [https://hyper.ai/news/25822](https://hyper.ai/news/25822)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** Deep learning, GNN, Convolutional Neural Networks. Le taux de vrais positifs du modèle Chemprop était de 11,6 %, contre 1,9 % pour la sélection manuelle.
- **Revue de publication :** Nature Communications, 2023.05
- **Lien vers l’article :** [Discovering small-molecule senolytics with deep neural networks](https://www.nature.com/articles/s43587-023-00415-z)

### **13. [L’apprentissage automatique analyse quantitativement la quantité et l’emplacement de la libération de dopamine](https://hyper.ai/news/25153)**

- **Article de recherche :** [https://hyper.ai/news/25153](https://hyper.ai/news/25153)
- **Équipe de recherche :** Équipe de recherche de the University of California, Berkeley
- **Travaux connexes :** SVM, RF, machine learning. La précision de détermination de l’intensité de stimulation a atteint 0,832, et celle de la région cérébrale de libération de dopamine, 0,708.
- **Revue de publication :** ACS Chemical Neuroscience, 2023.06
- **Lien vers l’article :** [Identifying Neural Signatures of Dopamine Signaling with Machine Learning](https://pubs.acs.org/doi/full/10.1021/acschemneuro.3c00001)

### **14. [L’apprentissage automatique découvre trois médicaments anti-âge](https://hyper.ai/news/24578)**

- **Article de recherche :** [https://hyper.ai/news/24578](https://hyper.ai/news/24578)
- **Équipe de recherche :** Dr. James L. Kirkland et team à Mayo Clinic
- **Travaux connexes :** Machine learning, Random Forest (RF) model, 5-fold cross-validation. Les médicaments sénolytiques Ginkgetin, Periplocin et Oleandrin ont été découverts.
- **Revue de publication :** Nature Communications, 2023.06
- **Lien vers l’article :** [Discovery of Senolytics using machine learning](https://www.nature.com/articles/s41467-023-39120-1)

### **15. [L’apprentissage profond sélectionne de nouveaux antibiotiques contre Acinetobacter baumannii](https://hyper.ai/news/24499)**

- **Article de recherche :** [https://hyper.ai/news/24499](https://hyper.ai/news/24499)
- **Équipe de recherche :** Équipe de recherche de McMaster University et MIT
- **Travaux connexes :** Broad Institute's high-throughput screening sub-library, machine learning, deep learning. Environ 7 500 molécules ont été sélectionnées, révélant un composé antibactérien nommé abaucine.
- **Revue de publication :** Nature Chemical Biology, 2023.05
- **Lien vers l’article :** [Deep learning-guided discovery of an antibiotic targeting Acinetobacter baumannii](https://www.nature.com/articles/s41589-023-01349-8#access-options)

### **16. [Des modèles d’apprentissage automatique prédisent l’imprimabilité des bio-encres](https://hyper.ai/news/24237)**

- **Article de recherche :** [https://hyper.ai/news/24237](https://hyper.ai/news/24237)
- **Équipe de recherche :** Équipe de recherche de the University of Santiago de Compostela et UCL
- **Travaux connexes :** Machine learning models, ANN, SVM, RF, kappa, R², MAE. La précision a atteint 97,22 %.
- **Revue de publication :** International Journal of Pharmaceutics: X, 2023.12
- **Lien vers l’article :** [Predicting pharmaceutical inkjet printing outcomes using machine learning](https://www.sciencedirect.com/science/article/pii/S2590156723000257)

### **17. [L’apprentissage automatique différencie les cellules souches pluripotentes](https://hyper.ai/news/23940)**

- **Article de recherche :** [https://hyper.ai/news/23940](https://hyper.ai/news/23940)
- **Équipe de recherche :** Groupe de recherche de Yang Zhao's et Yu Zhang's Research Groups à Peking University, jointly with Yiyan Liu à Beijing Jiaotong University
- **Travaux connexes :** Live-cell imaging, machine learning, weakly supervised models, pix2pix deep learning model. L’efficacité de différenciation est passée de 21,6 % ± 2,7 % à 88,8 % ± 10,5 %.
- **Revue de publication :** Cell Discovery, 2023.06
- **Lien vers l’article :** [A live-cell image-based machine learning strategy for reducing variability in PSC differentiation systems](https://www.nature.com/articles/s41421-023-00543-1)

### **18. [Un modèle d’apprentissage automatique prédit la vitesse de libération des médicaments injectables à action prolongée](https://hyper.ai/news/33892)**

- **Article de recherche :** [https://hyper.ai/news/33892](https://hyper.ai/news/33892)
- **Équipe de recherche :** Équipe de recherche de l’université de Toronto
- **Travaux connexes :** MLR, Lasso, PLS, DT, RF, LGBM, XGB, AutoNGB, SVR, k-NN, NN, nested cross-validation, farthest neighbor clustering algorithm.
- **Revue de publication :** Nature Communications, 2023.01
- **Lien vers l’article :** [Machine learning models to accelerate the design of polymeric long-acting injectables](https://www.nature.com/articles/s41467-022-35343-w)

### **19. [Un algorithme d’apprentissage automatique prédit efficacement les propriétés antipaludiques des plantes](https://hyper.ai/news/33883)**

- **Article de recherche :** [https://hyper.ai/news/33883](https://hyper.ai/news/33883)
- **Équipe de recherche :** Équipe de recherche de Royal Botanic Gardens, Kew, et University of St Andrews
- **Travaux connexes :** Logit, SVC, XGB, BNN, GridSearchCV algorithms, 10-fold stratified cross-validation, Markov Chain Monte Carlo iterations. La précision était de 0,67.
- **Revue de publication :** Frontiers in Plant Science, 2023.05
- **Lien vers l’article :** [Machine learning enhances prediction of plants as potential sources of antimalarials](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10248027)

### **20. [Une méthode d’ensemble d’apprentissage automatique prédit l’immunogénicité de fragments de protéines virales](https://hyper.ai/news/30786)**

- **Article de recherche :** [https://hyper.ai/news/30786](https://hyper.ai/news/30786)
- **Équipe de recherche :** Équipe de recherche de Jing Li à Beihang University
- **Travaux connexes :** Protein database UniProt, Protegen database, ensemble machine learning approach VirusImmu, RF, XGBoost, kNN, random sampling cross-validation.
- **Revue de publication :** bioRxiv, 2023.11
- **Lien vers l’article :** [VirusImmu: a novel ensemble machine learning approach for viral immunogenicity prediction](https://www.biorxiv.org/content/10.1101/2023.11.23.568426v1)

### **21. [L’IA générative mise à profit pour développer de nouveaux antibiotiques](https://hyper.ai/news/31421)**

- **Article de recherche :** [https://hyper.ai/news/31421](https://hyper.ai/news/31421)
- **Équipe de recherche :** McMaster University et Stanford University équipe
- **Travaux connexes :** Pharmakon-1760 library, Drug Repurposing Hub database, synthetic small molecule screening set, Monte Carlo Tree Search, generative AI model SyntheMol. 24 335 molécules complètes ont été générées et des composés de structure inédite, faciles à synthétiser, ont été conçus.
- **Revue de publication :** Nature Machine Intelligence, 2024.03
- **Lien vers l’article :** [Generative AI for designing and validating easily synthesizable and structurally novel antibiotics](https://www.nature.com/articles/s42256-024-00809-7 )

### **22. [Système automatisé, rapide et multidimensionnel de suivi de particules individuelles fondé sur l’apprentissage profond](https://hyper.ai/news/31341)**

- **Article de recherche :** [https://hyper.ai/news/31341](https://hyper.ai/news/31341)
- **Équipe de recherche :** Équipe de Prof. Ning Fang à Xiamen University
- **Travaux connexes :** Multidimensional imaging devices, dual-focal plane imaging, parallax microscopy, multidimensional imaging equipment, Convolutional Neural Network models, noise resistance, and robustness.
- **Revue de publication :** Nature Machine Intelligence, 2024.03
- **Lien vers l’article :** [Deep Learning-Assisted Automated Multidimensional Single Particle Tracking in Living Cells](https://doi.org/10.1021/acs.nanolett.3c04870)

### **23. [Cadre d’apprentissage automatique ProEnsemble : optimisation des combinaisons de promoteurs des voies évolutives](https://hyper.ai/news/30594)**

- **Article de recherche :** [https://hyper.ai/news/30594](https://hyper.ai/news/30594)
- **Équipe de recherche :** Équipe de Xiaozhou Luo à CAS
- **Travaux connexes :** Synthetic biology, gene epistasis, automation platforms, 10-fold cross-validation, ensemble models, Gradient Boosting Regressor, Ridge Regressor, Gradient Boosting, universal chassis for efficient synthesis of flavonoids.
- **Revue de publication :** ADVANCED SCIENCE, 2024.02
- **Lien vers l’article :** [Pathway Evolution Through a Bottlenecking-Debottlenecking Strategy and Machine Learning-Aided Flux Balancing](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202306935)

### **24. [Le réseau neuronal de graphes ProtLGN, sensible au microenvironnement, guide l’évolution dirigée des protéines](https://hyper.ai/news/32246)**

- **Article de recherche :** [https://hyper.ai/news/32246](https://hyper.ai/news/32246)
- **Équipe de recherche :** Groupe de recherche de Liang Hong à Shanghai Jiao Tong University
- **Travaux connexes :** Microenvironment-aware graph neural network, lightweight graph denoising networks, self-supervised pre-training, equivariant graph neural networks. Plus de 40 % des protéines mutantes ponctuelles conçues par PROTLGN ont surpassé leurs homologues de type sauvage.
- **Revue de publication :** JOURNAL OF CHEMICAL INFORMATION AND MODELING, 2024.04
- **Lien vers l’article :** [Protein Engineering with Lightweight Graph Denoising Neural Networks](https://pubs.acs.org/doi/10.1021/acs.jcim.4c00036)

### **25. [Le modèle d’apprentissage profond AlphaPPIMd explore les ensembles conformationnels de complexes protéine-protéine](https://hyper.ai/news/32435)**

- **Article de recherche :** [https://hyper.ai/news/32435](https://hyper.ai/news/32435)
- **Équipe de recherche :** Équipe de Jianmin Wang à Yonsei University
- **Travaux connexes :** Deep learning, generative AI, Transformer, Generative Neural Network learning, molecular dynamics, barnase-barstar complex trajectory set, Protein Data Bank, AlphaPPIMd model, self-attention mechanism, feature optimization module, attention scores, all-atom model. La précision moyenne à l’entraînement était de 0,995 et celle de validation de 0,999.
- **Revue de publication :** Journal of Chemical Theory and Computation, 2024.05
- **Lien vers l’article :** [Exploring the conformational ensembles of protein-protein complex with transformer-based generative model](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00255)

### **26. [Le nouveau dégradeur de protéine suppresseur de tumeur dp53m inhibe la prolifération des cellules cancéreuses](https://hyper.ai/news/32527)**

- **Article de recherche :** [https://hyper.ai/news/32527](https://hyper.ai/news/32527)
- **Équipe de recherche :** Pr Sijin Wu's team à Xi'an Jiaotong-Liverpool University Huihu College of Pharmacy, et Pr Songbo Xie et Pr Diansheng Zhong's team à Tianjin Medical University General Hospital
- **Travaux connexes :** MD simulation, iterative molecular docking-guided post-SELEX method. dp53m reconnaît spécifiquement la protéine p53-R175H et la dégrade.
- **Revue de publication :** Science Bulletin, 2024.05
- **Lien vers l’article :** [An engineered DNA aptamer-based PROTAC for precise therapy of p53-R175H hotspot mutant-driven cancer](https://www.sciencedirect.com/science/article/pii/S2095927324003517)

### **27. [Meilleur article étudiant du CVPR ! Le modèle multimodal BioCLIP réalise l’apprentissage en zéro-shot](https://hyper.ai/news/32544)**

- **Article de recherche :** [https://hyper.ai/news/32544](https://hyper.ai/news/32544)
- **Équipe de recherche :** Équipe de Jiaman Wu à The Ohio State University
- **Travaux connexes :** Bio-image dataset TreeOfLife-10M, multimodal models, computer vision, vision encoder, text encoder, autoregressive language model. Le modèle a obtenu d’excellents résultats dans les tâches zero-shot et few-shot.
- **Revue de publication :** CVPR 2024, 2024.02
- **Lien vers l’article :** [BIoCLIP: A Vision Foundation Model for the Tree of Life](https://openaccess.thecvf.com/content/CVPR2024/html/Stevens_BioCLIP_A_Vision_Foundation_Model_for_the_Tree_of_Life_CVPR_2024_paper.html)

### **28. [Cent millions de paramètres ! Le modèle fondamental cellulaire scFoundation modélise simultanément 20 000 gènes](https://hyper.ai/news/32623)**

- **Article de recherche :** [https://hyper.ai/news/32623](https://hyper.ai/news/32623)
- **Équipe de recherche :** Pr Xuegong Zhang (Tsinghua University), Pr Jianzhu Ma (Tsinghua AIR), et Dr. Le Song (BioMap)
- **Travaux connexes :** AI cell foundation model, human single-cell omics data DISCO, EMBL-EBI databases, GEO datasets, Single Cell Portal datasets, HCA datasets, hECA datasets, Transformer, asymmetric encoder-decoder structure, vector modules, RDA modeling.
- **Revue de publication :** Nature Methods, 2024.06
- **Lien vers l’article :** [Large-scale foundation model on single-cell transcriptomics](https://www.nature.com/articles/s41592-024-02305-7)

### **29. [Retenu à l’ICML, le modèle de langage protéique ESM-AA dépasse les méthodes SOTA traditionnelles](https://hyper.ai/news/32674)**

- **Article de recherche :** [https://hyper.ai/news/32674](https://hyper.ai/news/32674)
- **Équipe de recherche :** Pr Hao Zhou (Tsinghua University), conjointement avec Peking University, Nanjing University, et Shuimu BioSciences
- **Travaux connexes :** Protein dataset AlphaFold DB, protein dataset Dp and a molecular dataset Dm, decompression, multi-scale masked language modeling.
- **Revue de publication :** ICML 2024, 2024.06
- **Lien vers l’article :** [ESM All-Atom: Multi-scale Protein Language Model for Unified Molecular Modeling](https://icml.cc/virtual/2024/poster/35119)

### **30. [L’algorithme SPACE, publié dans une revue de la famille Cell, découvre des modules tissulaires mieux que les outils comparables](https://hyper.ai/news/32738)**

- **Article de recherche :** [https://hyper.ai/news/32738](https://hyper.ai/news/32738)
- **Équipe de recherche :** Équipe de Qiangfeng Zhang à Tsinghua University
- **Travaux connexes :** Spatial transcriptomics, STARmap mouse PLA dataset, MERFISH mouse AB dataset, MERFISH mouse WB dataset, Xenium human BC dataset, CosMx human NSCLC dataset, Visium human brain dataset, encoders, proximity graph decoders, gene expression decoders, spatial proximity, self-supervised learning.
- **Revue de publication :** Cell Systems, 2024.06
- **Lien vers l’article :** [Tissue module discovery in single-cell resolution spatial transcriptomics data via cell-cell interaction-aware cell embedding](https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00124-8)

### **31. [De nouvelles avancées fondées sur AlphaFold révèlent la diversité dynamique des protéines](https://hyper.ai/news/33075)**

- **Article de recherche :** [https://hyper.ai/news/33075](https://hyper.ai/news/33075)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** Flow matching technology, protein language models, neural networks, AlphaFold, ESMFold.
- **Revue de publication :** ICML 2024, 2024.06
- **Lien vers l’article :** [AlphaFold Meets Flow Matching for Generating Protein Ensembles](https://openreview.net/forum?id=rs8Sh2UASt)

### **32. [P450Diffusion : conception de novo d’enzymes P450 à l’aide de modèles de diffusion](https://hyper.ai/news/33057)**

- **Article de recherche :** [https://hyper.ai/news/33057](https://hyper.ai/news/33057)
- **Équipe de recherche :** Équipe de Huifeng Jiang et Jian Cheng à Tianjin Institute of Industrial Biotechnology, CAS
- **Travaux connexes :** Directed evolution, diffusion models, deep learning, denoising diffusion probabilistic models, three-point anchoring, fine-tuning diffusion models, pre-training. La capacité catalytique a été multipliée par 3,5.
- **Revue de publication :** Research, 2024.07
- **Lien vers l’article :** [Cytochrome P450 Enzyme Design by Constraining the Catalytic Pocket in a Diffusion Model](https://spj.science.org/doi/10.34133/research.0413)

### **33. [Les réseaux neuronaux de graphes équivariants améliorent de 20 % la prédiction des sites de liaison des protéines cibles](https://hyper.ai/news/32957)**

- **Article de recherche :** [https://hyper.ai/news/32957](https://hyper.ai/news/32957)
- **Équipe de recherche :** Équipe de recherche de Gaoling School of Artificial Intelligence, Renmin University of China
- **Travaux connexes :** E(3) equivariant graph neural networks, Convolutional Neural Networks, EquiPocket framework, scPDB dataset, PDBbind dataset, COACH 420 dataset, HOLO4K dataset, local geometry modeling modules, global structural modeling modules, surface information passing modules.
- **Revue de publication :** ICML 2024, 2024.07
- **Lien vers l’article :** [EquiPocket: an E(3)-Equivariant Geometric Graph Neural Network for Ligand Binding Site Prediction](https://openreview.net/forum?id=1vGN3CSxVs)

### **34. [Vingt données expérimentales marquent une étape pour l’IA des protéines ! FSFP optimise efficacement les modèles de préentraînement protéique](https://hyper.ai/news/32822)**

- **Article de recherche :** [https://hyper.ai/news/32822](https://hyper.ai/news/32822)
- **Équipe de recherche :** Équipe de Prof. Liang Hong à Shanghai Jiao Tong University, jointly with Pan Tan's Team à Shanghai Artificial Intelligence Laboratory
- **Travaux connexes :** Protein mutation dataset ProteinGym, pre-trained protein language models, meta-transfer learning, learning to rank (LTR), parameter-efficient fine-tuning, LTR technology, FSFP training strategy, model-agnostic meta-learning methods.
- **Revue de publication :** Nature Communications, 2024.07
- **Lien vers l’article :** [Enhancing efficiency of protein language models with minimal wet-lab data through few-shot learning](https://doi.org/10.1038/s41467-024-49798-6)

### **35. [Un modèle transférable d’apprentissage profond identifie plusieurs types de modifications de l’ARN et réduit considérablement les coûts de calcul](https://hyper.ai/news/32745)**

- **Article de recherche :** [https://hyper.ai/news/32745](https://hyper.ai/news/32745)
- **Équipe de recherche :** Équipe de Assoc. Prof. Xiang Yu à Shanghai Jiao Tong University, jointly with Jun Yang/Hongxia Wang's Team à Shanghai Chenshan Botanical Garden
- **Travaux connexes :** Transferable deep learning model TandemMod, in vitro transcription dataset ELIGOS, Curlcake dataset, in vitro epitranscriptome dataset IVET, 1D CNN, Bi-LSTM modules, attention mechanisms, fully-connected classifiers.
- **Revue de publication :** Nature Communications, 2024.05
- **Lien vers l’article :** [Transfer learning enables identification of multiple types of RNA modifications using nanopore direct RNA sequencing](https://www.nature.com/articles/s41467-024-48437-4)

### **36. [InstructProtein : aligner le langage des protéines et le langage humain à l’aide d’instructions de connaissances](https://hyper.ai/news/33697)**

- **Article de recherche :** [https://hyper.ai/news/33697](https://hyper.ai/news/33697)
- **Équipe de recherche :** Équipe de Huajun Chen et Qiang Zhang à Zhejiang University
- **Travaux connexes :** LLMs, protein knowledge instruction datasets, Gene Ontology (GO) datasets, InstructProtein, knowledge graphs, protein localization prediction, protein function prediction, protein metal-ion binding capacity prediction.
- **Revue de publication :** ACL 2024, 2023.10
- **Lien vers l’article :** [InstructProtein: Aligning Human and Protein Language via Knowledge Instruction](https://arxiv.org/abs/2310.03269)

### **37. [Le cadre de génération protéine-texte ProtT3 permet l’interprétation intermodale des données protéiques et textuelles](https://hyper.ai/news/33546)**

- **Article de recherche :** [https://hyper.ai/news/33546](https://hyper.ai/news/33546)
- **Équipe de recherche :** Équipe de Xiang Wang à USTC, jointly with Zhiyuan Liu à NUS et Hokkaido University researchers
- **Travaux connexes :** Cross-modal projectors, protein language models, Swiss-Prot and ProteinKG25 datasets, PDB-QA dataset.
- **Revue de publication :** ACL 2024, 2023.05
- **Lien vers l’article :** [ProtT3: Protein-to-Text Generation for Text-based Protein Understanding](https://arxiv.org/abs/2405.12564)

### **38. [Le modèle CPDiffusion conçoit automatiquement des protéines fonctionnelles à un coût extrêmement faible](https://hyper.ai/news/34692)**

- **Article de recherche :** [https://hyper.ai/news/34692](https://hyper.ai/news/34692)
- **Équipe de recherche :** Équipe de Liang Hong à Shanghai Jiao Tong University
- **Travaux connexes :** Protein engineering, diffusion probabilistic model framework CPDiffusion, amino acids, Graph Neural Networks, auxiliary drug design, protein language models, CATH 4.2 dataset.
- **Revue de publication :** Cell Discovery, 2024.09
- **Lien vers l’article :** [A conditional protein diffusion model generates artificial programmable endonuclease sequences with enhanced activity](https://www.nature.com/articles/s41421-024-00728-2)

### **39. [Nouvelle méthode de détection d’homologues de protéines fondée sur des modèles de langage protéique et la recherche dense](https://hyper.ai/news/34225)**

- **Article de recherche :** [https://hyper.ai/news/34225](https://hyper.ai/news/34225)
- **Équipe de recherche :** Yu Li (CUHK), Siqi Sun (Fudan University et Shanghai AI Lab), et Mark Gerstein (Yale University)
- **Travaux connexes :** Protein engineering, protein language models, dense retrieval techniques, dense homolog retrievers, hybrid model DHR-meta, UR90 dataset, JackHMMER algorithm, BFD/MGnify datasets, DHR method. La sensibilité de détection des homologues protéiques a progressé de 56 %.
- **Revue de publication :** Nature Biotechnology, 2024.08
- **Lien vers l’article :** [Fast, sensitive detection of protein homologs using deep dense retrieval](https://doi.org/10.1038/s41587-024-02353-6)

### **40. [AlphaProteo conçoit efficacement des liants de protéines cibles, avec une affinité multipliée par 300](https://hyper.ai/news/34214)**

- **Article de recherche :** [https://hyper.ai/news/34214](https://hyper.ai/news/34214)
- **Équipe de recherche :** DeepMind, Francis Crick Institute
- **Travaux connexes :** Protein engineering, protein language models, AI drug design, target proteins, AI tools, machine learning model AlphaProteo, VEGF-A protein binder design, Generator, Filter. La liaison des liants candidats était 5 à 100 fois supérieure à celle obtenue par les méthodes existantes.
- **Revue de publication :** DeepMind, 2024.09
- **Lien vers l’article :** [AlphaProteo generates novel proteins for biology and health research](https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)

### **41. [Le nouveau modèle de langage protéique débruité DePLM dépasse les modèles SOTA pour prédire les effets des mutations](https://hyper.ai/news/34954)**

- **Article de recherche :** [https://hyper.ai/news/34954](https://hyper.ai/news/34954)
- **Équipe de recherche :** Pr Huajun Chen et Dr. Qiang Zhang à Zhejiang University
- **Travaux connexes :** Denoising Protein Language Model (DePLM), ProteinGym deep mutational scanning (DMS) ensemble, DMS datasets, random cross-validation, generalization experiments, extending diffusion models using sorting information to denoise evolutionary information, sorting algorithm-generated trajectories, PromptProtein model.
- **Revue de publication :** NeurIPS 2024, 2024.11
- **Lien vers l’article :** [DePLM: Denoising Protein Language Models for Property Optimization](https://neurips.cc/virtual/2024/poster/95517)

### **42. [Le modèle génératif géométrique profond DynamicBind permet de prédire l’amarrage dynamique des protéines](https://hyper.ai/news/34894)**

- **Article de recherche :** [https://hyper.ai/news/34894](https://hyper.ai/news/34894)
- **Équipe de recherche :** Équipe de Shuangjia Zheng à Shanghai Jiao Tong University, Galixir, Sun Yat-sen University, Rice University
- **Travaux connexes :** PDBbind dataset, MDT test set, deep diffusion models, equivariant geometric neural network technology, PDB format structures, small-molecule ligand format, contact-LDDT (cLDDT) scoring modules, AlphaFold structures, affinity prediction modules, generative AI.
- **Revue de publication :** Nature Communications, 2024.02
- **Lien vers l’article :** [DynamicBind: predicting ligand-specific protein-ligand complex structure with a deep equivariant generative model](https://www.nature.com/articles/s41467-024-45461-2)

### **43. [Le grand modèle de langage Y-Mol pour la découverte de médicaments surpasse largement LLaMA2](https://hyper.ai/news/35572)**

- **Article de recherche :** [https://hyper.ai/news/35572](https://hyper.ai/news/35572)
- **Équipe de recherche :** Hunan University, Central South University, Hunan Normal University, Xiangtan University
- **Travaux connexes :** Multiscale biomedical knowledge-guided LLM Y-Mol, PubMed text corpus, DrugBank benchmark dataset, DrugCentral benchmark dataset, LLaMA2-7b LLM.
- **Revue de publication :** arXiv, 2024.10
- **Lien vers l’article :** [Y-Mol: A Multiscale Biomedical Knowledge-Guided Large Language Model for Drug Development](https://doi.org/10.48550/arXiv.2410.11550)

### **44. [Le modèle universel de repliement inverse moléculaire UniIF complète AlphaFold 3](https://hyper.ai/news/35781)**

- **Article de recherche :** [https://hyper.ai/news/35781](https://hyper.ai/news/35781)
- **Équipe de recherche :** Westlake University Future Industry Research Center équipe
- **Travaux connexes :** CATH4.3 dataset, ESM2 model, CASP15 dataset, new crystal structures, NovelPro dataset, RDesign datasets, CHILI-3K dataset, predefined frameworks based on amino acids and nucleotides, GNN, Geometric Featurizer, Block Graph Attention. La méthode a dépassé les autres méthodes SOTA pour la conception de protéines, d’ARN et de matériaux.
- **Revue de publication :** NeurIPS 2024, 2024.05
- **Lien vers l’article :** [UniIF: Unified Molecule Inverse Folding](https://arxiv.org/abs/2405.18968)

### **45. [Le modèle de langage protéique préentraîné ProSST intègre plus efficacement les informations de structure des protéines](https://hyper.ai/news/35874)**

- **Article de recherche :** [https://hyper.ai/news/35874](https://hyper.ai/news/35874)
- **Équipe de recherche :** Pr Liang Hong's groupe et Bingxin Zhou à Shanghai Jiao Tong University, conjointement avec Pan Tan à Shanghai AI Lab
- **Travaux connexes :** Pre-trained protein language model ProSST, Transformer, disentangled attention mechanisms, protein structure quantizers, AlphaFoldDB dataset, CATH43-S40 dataset, CATH43-S40 local structure dataset, ProteinGYM benchmark. Le modèle dépasse les modèles existants pour prédire la stabilité thermique, la liaison aux ions métalliques, la localisation des protéines et les annotations GO.
- **Revue de publication :** NeurIPS 2024, 2024.05
- **Lien vers l’article :** [ProSST: Protein Language Modeling with Quantized Structure and Disentangled Attention](https://neurips.cc/virtual/2024/poster/96656)

### **46. [Le cadre de liants peptidiques macrocycliques RFpeptides ouvre de nouvelles possibilités pour les protéines non ciblables par les médicaments](https://hyper.ai/news/36150)**

- **Article de recherche :** [https://hyper.ai/news/36150](https://hyper.ai/news/36150)
- **Équipe de recherche :** Équipe de David Baker à the Institute for Protein Design, UW
- **Travaux connexes :** Diffusion model-based technology RFpeptides, utilizing modified RoseTTAFold and RFdiffusion with cyclic relative position encoding to generate precise macrocyclic backbones, drug development, AlphaFold, ProteinMPNN, Rosetta Relax. Permet une conception ciblée et efficace de macrocycles.
- **Revue de publication :** bioRxiv, 2024.11
- **Lien vers l’article :** [Accurate de novo design of high-affinity protein binding macrocycles using deep learning](https://doi.org/10.1101/2024.11.18.622547)

### **47. [Le modèle fondamental du génome Evo permet prédiction et génération de l’échelle moléculaire à l’échelle du génome](https://hyper.ai/news/36266)**

- **Article de recherche :** [https://hyper.ai/news/36266](https://hyper.ai/news/36266)
- **Équipe de recherche :** Équipe de recherche de Stanford University et Arc Institute
- **Travaux connexes :** Genome foundation model Evo, StripedHyena architecture. Evo peut prédire, générer et concevoir des séquences génomiques complètes.
- **Revue de publication :** Science, 2024.11
- **Lien vers l’article :** [Sequence modeling and design from molecular to genome scale with Evo](https://www.science.org/doi/10.1126/science.ado9336)

### **48. [DigFrag segmente précisément les fragments moléculaires par IA et génère 44 molécules médicamenteuses ou pesticides](https://hyper.ai/news/36346)**

- **Article de recherche :** [https://hyper.ai/news/36346](https://hyper.ai/news/36346)
- **Équipe de recherche :** Équipe de Prof. Guangfu Yang et Assoc. Prof. Fan Wang à Central China Normal University
- **Travaux connexes :** MolFrag platform, PADFrag database, graph attention mechanisms, DigFrag digital fragmentation method, DeepFMPO framework, Graph Neural Network architectures, Actor-Critic framework.
- **Revue de publication :** Communications Chemistry, 2024.11
- **Lien vers l’article :** [DigFrag as a digital fragmentation method used for artificial intelligence-based drug design](https://doi.org/10.1038/s42004-024-01346-5)

### **49. [Méthode de préentraînement PRIME pour les grands modèles de langage des séquences protéiques](https://hyper.ai/news/36363)**

- **Article de recherche :** [https://hyper.ai/news/36363](https://hyper.ai/news/36363)
- **Équipe de recherche :** Équipe de Prof. Liang Hong à Shanghai Jiao Tong University, Shanghai AI Lab, ShanghaiTech University, Hangzhou Medical College
- **Travaux connexes :** Protein sequence LLM pre-training method PRIME, ProteomeAtlas database, UniProt database, ProteinGym dataset, MLM pre-training method, outperforming current SOTA methods.
- **Revue de publication :** Science Advances, 2024.11
- **Lien vers l’article :** [A General Temperature-Guided Language Model to Design Proteins of Enhanced Stability and Activity](https://www.science.org/doi/10.1126/sciadv.adr2641)

### **50. [Une méthode d’apprentissage profond auto-supervisé révolutionne la reconstruction 3D en cryo-microscopie électronique](https://hyper.ai/news/36645)**

- **Article de recherche :** [https://hyper.ai/news/36645](https://hyper.ai/news/36645)
- **Équipe de recherche :** Équipe de recherche de UCLA
- **Travaux connexes :** Self-supervised deep learning method single-particle IsoNet (spIsoNet), single-particle cryo-EM, biomacromolecule reconstruction, β-galactosidase dataset, HA trimer tilted dataset, non-symmetric ribosome datasets, HIV VLP tomography datasets, U-net architecture, anisotropy-corrected driving misalignment correction module.
- **Revue de publication :** Nature Methods, 2024.11
- **Lien vers l’article :** [Overcoming the preferred-orientation problem in cryo-EM with self-supervised deep learning](https://doi.org/10.1038/s41592-024-02505-1)

### **51. [La méthode multimodale de génération de protéines PLAID génère simultanément séquences et structures protéiques à tous les atomes](https://hyper.ai/news/36750)**

- **Article de recherche :** [https://hyper.ai/news/36750](https://hyper.ai/news/36750)
- **Équipe de recherche :** UC Berkeley, Microsoft Research, Genentech
- **Travaux connexes :** Multimodal protein generation method PLAID (Protein Latent Induced Diffusion), Pfam database, ESMFold latent space, latent diffusion training, DiT block architecture, Diffusion Transformer (DiT), ESMFold model.
- **Revue de publication :** ICLR 2025, 2024.12
- **Lien vers l’article :** [Generating All-Atom Protein Structure from Sequence-Only Training Data](https://www.biorxiv.org/content/10.1101/2024.12.02.626353v1)

### **52. [Méthode d’optimisation moléculaire ciblée MOLRL fondée sur l’apprentissage par renforcement latent](https://hyper.ai/news/37285)**

- **Article de recherche :** [https://hyper.ai/news/37285](https://hyper.ai/news/37285)
- **Équipe de recherche :** chercheurs de Cellarity et NVIDIA
- **Travaux connexes :** Novel targeted molecular optimization method MOLRL based on latent reinforcement learning, drug discovery tasks, Proximal Policy Optimization (PPO), Variational Autoencoders (VAE), Autoencoder (MolMIM), reaching up to 100% success rates.
- **Revue de publication :** ChemRxiv, 2025.01
- **Lien vers l’article :** [Targeted Molecular Generation With Latent Reinforcement Learning](https://go.hyper.ai/H4JhR)

### **53. [Le cadre E2VD prédit les moteurs de variation virale et l’évolution des virus de la COVID-19, du VIH et de la grippe](https://hyper.ai/news/37405)**

- **Article de recherche :** [https://hyper.ai/news/37405](https://hyper.ai/news/37405)
- **Équipe de recherche :** Pr Yonghong Tian et Assoc. Pr Jie Chen à Peking University, chercheur Peng Zhou à Guangzhou Laboratory
- **Travaux connexes :** Viral variation driver prediction framework E2VD, UniRef90 dataset, open-source deep mutational scanning datasets, protein sequence encoding, Local-global dependence coupling, multi-task focal learning. La précision des prédictions a progressé de 67 %.
- **Revue de publication :** Nature Machine Intelligence, 2025.01
- **Lien vers l’article :** [A unified evolution-driven deep learning framework for virus variation driver prediction](https://www.nature.com/articles/s42256-024-00966-9)

### **54. [Le modèle de langage médical MedFound approche les capacités de raisonnement des médecins experts](https://hyper.ai/news/37646)**

- **Article de recherche :** [https://hyper.ai/news/37646](https://hyper.ai/news/37646)
- **Équipe de recherche :** Interdisciplinary team dirigé par Pr Guangyu Wang (BUPT), Pr Chunli Song (Peking University Third Hospital), et Pr Jian Yang (China Three Gorges University)
- **Travaux connexes :** LLM BLOOM-176B, medical corpus dataset MedCorpus, medical LLM MedFound-DX, chain-of-thought methods, preference alignment framework, MedDX-FT dataset, MedDX-Bench dataset.
- **Revue de publication :** Nature Medicine, 2025.01
- **Lien vers l’article :** [A generalist medical language model for disease diagnosis assistance](https://www.nature.com/articles/s41591-024-03416-6)

### **55. [Le modèle de diffusion 4D AlphaFolding comble le manque en prédiction de la structure dynamique des protéines](https://hyper.ai/news/37697)**

- **Article de recherche :** [https://hyper.ai/news/37697](https://hyper.ai/news/37697)
- **Équipe de recherche :** Pr Siyu Zhu et Pr Yuan Qi's équipes à Fudan University/Shanghai AI Lab, conjointement avec Pr Yao Yao à Nanjing University
- **Travaux connexes :** 4D diffusion model AlphaFolding, MD simulation data, dynamic protein structures, structural biology, Distributional Graphformer (DiG) deep learning framework, ATLAS dataset.
- **Revue de publication :** arXiv, 2024.12
- **Lien vers l’article :** [4D Diffusion for Dynamic Protein Structure Prediction with Reference and Motion Guidance](https://arxiv.org/abs/2408.12419)

### **56. [Le pipeline PepPrCLIP de conception de protéines courtes ouvre la voie à de nouveaux traitements contre le cancer](https://hyper.ai/news/37912)**

- **Article de recherche :** [https://hyper.ai/news/37912](https://hyper.ai/news/37912)
- **Équipe de recherche :** Duke University Biomedical Engineering équipe
- **Travaux connexes :** ESM-2 protein language model, ESM-2-650M model, PepPrCLIP pipeline, Gaussian distributions, amino acid sequences.
- **Revue de publication :** Science Advances, 2025.01
- **Lien vers l’article :** [De novo design of peptide binders to conformationally diverse targets with contrastive language modeling](https://www.science.org/doi/10.1126/sciadv.adr8638)

### **57. [La technique d’alignement de Boltzmann améliore considérablement l’efficacité de la prédiction de l’énergie libre de liaison des protéines](https://hyper.ai/news/38092)**

- **Article de recherche :** [https://hyper.ai/news/38092](https://hyper.ai/news/38092)
- **Équipe de recherche :** Équipe de Prof. Chunhua Shen à Zhejiang University, University of Adelaide, Northeastern University (US)
- **Travaux connexes :** Binding free energy, Boltzmann alignment technique, ∆∆G prediction, protein complex structure prediction, Riemannian diffusion models, deep learning, BA-Cycle method, BA-DDG method, SKEMPI v2 dataset.
- **Revue de publication :** ICLR 2025, 2024.10
- **Lien vers l’article :** [Boltzmann-Aligned Inverse Folding Model as a Predictor of Mutational Effects on Protein-Protein Interactions](https://arxiv.org/abs/2410.09543)

### **58. [Le nouveau générateur de squelette protéique Proteina, fondé sur les flux et à grande échelle, atteint le niveau SOTA en conception de novo](https://hyper.ai/news/38120)**

- **Article de recherche :** [https://hyper.ai/news/38120](https://hyper.ai/news/38120)
- **Équipe de recherche :** NVIDIA, Mila, University of Montreal, MIT
- **Travaux connexes :** Protein design, scalable non-equivariant Transformer architectures, Foldseek AFDB clustered DFS dataset, D21M dataset, MFS model, staged training strategies.
- **Revue de publication :** ICLR 2025 Oral, 2025.01
- **Lien vers l’article :** [Proteina: Scaling Flow-based Protein Structure Generative Models](https://openreview.net/forum?id=TVQLu34bdw&nesting=2&sort=date-desc)

### **59. [Le modèle UniGEM améliore pour la première fois de manière synergique deux tâches à l’aide de modèles de diffusion](https://hyper.ai/news/38186)**

- **Article de recherche :** [https://hyper.ai/news/38186](https://hyper.ai/news/38186)
- **Équipe de recherche :** Tsinghua University, Chinese Academy of Sciences
- **Travaux connexes :** Drug discovery, molecular property prediction, molecule generation, diffusion models, QM9 dataset, GEOM-Drugs 3D molecular conformation dataset, multi-task learning frameworks, E(3) Equivariant Diffusion Models (EDM), multi-branch network architectures.
- **Revue de publication :** ICLR 2025, 2025.04
- **Lien vers l’article :** [UniGEM: A Unified Approach to Generation and Property Prediction for Molecules](https://openreview.net/pdf?id=Lb91pXwZMR)

### **60. [RFdiffusion évolue encore et permet la conception de novo d’anticorps à la précision atomique](https://hyper.ai/news/38253)**

- **Article de recherche :** [https://hyper.ai/news/38253](https://hyper.ai/news/38253)
- **Équipe de recherche :** Équipe de Prof. David Baker à University of Washington et collaborators
- **Travaux connexes :** Therapeutic antibodies, RFdiffusion network for computational protein design, antibody variable heavy chains (VHHs), single-chain variable fragments (scFvs), deep learning, VHH frameworks, CDR loop sequence design.
- **Revue de publication :** bioRxiv, 2025.02
- **Lien vers l’article :** [Atomically accurate de novo design of antibodies with RFdiffusion](https://doi.org/10.1101/2024.03.14.585103)

### **61. [La première fusion de modèles de langage protéique et ARN établit un nouveau SOTA pour la prédiction de l’affinité de liaison](https://hyper.ai/news/38290)**

- **Article de recherche :** [https://hyper.ai/news/38290](https://hyper.ai/news/38290)
- **Équipe de recherche :** Tsinghua University, UCL, Monash University, BUPT
- **Travaux connexes :** Protein-RNA, CoPRA model, Protein Language Models (PLM), RNA Language Models (RLM), CLIP experimental techniques, Co-Former model, PDBbind dataset, PRBABv2 dataset, ProNAB dataset, PRA201 dataset, multimodal learning.
- **Revue de publication :** AAAI 2025, 2025.01
- **Lien vers l’article :** [CoPRA: Bridging Cross-domain Pretrained Sequence Models with Complex Structures for Protein-RNA Binding Affinity Prediction](https://arxiv.org/abs/2409.03773)

### **62. [Le modèle de tissu virtuel Celcomen permet pour la première fois d’identifier l’inférence causale dans l’analyse transcriptomique spatiale](https://hyper.ai/news/38308)**

- **Article de recherche :** [https://hyper.ai/news/38308](https://hyper.ai/news/38308)
- **Équipe de recherche :** University of Cambridge
- **Travaux connexes :** Perturbmap dataset, fetal spleen dataset, glioblastoma dataset, Celcomen model, inference modules (CCE), generative modules (SCE), Graph Neural Networks.
- **Revue de publication :** ICLR 2025, 2025.01
- **Lien vers l’article :** [Estimation of single-cell and tissue perturbation effect in spatial transcriptomics via Spatial Causal Disentanglement](https://openreview.net/forum?id=Tqdsruwyac)

### **63. [La méthode AlphaFold-Metainference prédit avec précision les ensembles structuraux de protéines désordonnées](https://hyper.ai/news/38448)**

- **Article de recherche :** [https://hyper.ai/news/38448](https://hyper.ai/news/38448)
- **Équipe de recherche :** University of Cambridge
- **Travaux connexes :** Alignment error maps predicted by AlphaFold, correlations between distance variation matrices in MD simulations, disordered protein structure prediction, Protein Data Bank (PDB), Small-Angle X-ray Scattering (SAXS) data, NMR measurements, Aβ and α-synuclein structural ensembles, CALVADOS-2, Bayesian metainference methods, Langevin integrators.
- **Revue de publication :** Nature Communications, 2025.02
- **Lien vers l’article :** [AlphaFold prediction of structural ensembles of disordered proteins](https://www.nature.com/articles/s41467-025-56572-9)

### **64. [Le cadre de prédiction de structure de l’ARN DRfold2 dépasse le niveau SOTA sur plusieurs bancs d’essai](https://hyper.ai/news/38506)**

- **Article de recherche :** [https://hyper.ai/news/38506](https://hyper.ai/news/38506)
- **Équipe de recherche :** Équipe de Prof. Yang Zhang à NUS
- **Travaux connexes :** RNA structure prediction framework DRfold2, unsupervised contact prediction accuracy, composite RNA language models, DRfold2 RNA test datasets, CASP15 dataset, Transformer modules, denoising structural modules.
- **Revue de publication :** bioRxiv, 2025.03
- **Lien vers l’article :** [Ab initio RNA structure prediction with composite language model and denoised end-to-end learning](https://www.biorxiv.org/content/10.1101/2025.03.05.641632v1)

### **65. [Le nouvel algorithme de conception protéique DRAKES franchit le goulot d’étranglement de la conception de séquences biologiques](https://hyper.ai/news/38675)**

- **Article de recherche :** [https://hyper.ai/news/38675](https://hyper.ai/news/38675)
- **Équipe de recherche :** chercheurs de MIT, Harvard, Stanford, UC Berkeley, Genentech
- **Travaux connexes :** Reinforcement learning frameworks, PDB training sets, Megascale dataset, DRAKES algorithm, Gumbel-Softmax.
- **Revue de publication :** ICLR 2025, 2024.08
- **Lien vers l’article :** [Fine-Tuning Discrete Diffusion Models via Reward Optimization with Applications to DNA and Protein Design](https://doi.org/10.48550/arXiv.2410.13643)

### **66. [Spectroscopie d’absorbance UV assistée par apprentissage automatique pour détecter la contamination microbienne](https://hyper.ai/news/38869)**

- **Article de recherche :** [https://hyper.ai/news/38869](https://hyper.ai/news/38869)
- **Équipe de recherche :** SMART (Singapore-MIT Alliance for Research et Technology), A*SRL Singapore, NUS, MIT
- **Travaux connexes :** Microbial contamination detection, anomaly detection strategies, machine learning, Support Vector Machines (SVM), radial basis functions, PBS sterilized samples.
- **Revue de publication :** Nature, 2025.03
- **Lien vers l’article :** [Machine learning aided UV absorbance spectroscopy for microbial contamination in cell therapy products](https://hyper.ai/en/sota/papers/s41598-024-83114-y)

### **67. [Conception de gènes chevauchants à l’aide de modèles génératifs de séquences protéiques](https://hyper.ai/news/39241)**

- **Article de recherche :** [https://hyper.ai/news/39241](https://hyper.ai/news/39241)
- **Équipe de recherche :** Équipe de David Baker à University of Washington
- **Travaux connexes :** Overlapping genes (OLG), synthetic OLG design research, amino acid substitution, bioinformatics screening, statistical modeling, systematic scanning of sequence positions.
- **Revue de publication :** bioRxiv, 2025.05
- **Lien vers l’article :** [Design of overlapping genes using deep generative models of protein sequences](https://doi.org/10.1101/2025.05.06.652464)

### **68. [Le cadre de prédiction PUPS permet la localisation subcellulaire des protéines à l’échelle de la cellule unique](https://hyper.ai/news/39549)**

- **Article de recherche :** [https://hyper.ai/news/39549](https://hyper.ai/news/39549)
- **Équipe de recherche :** MIT, Harvard University
- **Travaux connexes :** Protein subcellular localization, Human Protein Atlas, unseen protein subcellular localization, Predictions of Unseen Proteins’ Subcellular localization (PUPS) framework, held-out datasets, ESM-2 protein language models, CNNs, separable convolutions.
- **Revue de publication :** Nature Methods, 2025.05
- **Lien vers l’article :** [Prediction of protein subcellular localization in single cells](https://go.hyper.ai/LeaQF)

### **69. [UniMoMo, premier cadre génératif unifié entre espèces moléculaires, permet la conception de plusieurs types de molécules médicamenteuses](https://hyper.ai/news/39852)**

- **Article de recherche :** [https://hyper.ai/news/39852](https://hyper.ai/news/39852)
- **Équipe de recherche :** Yang Liu's groupe (Tsinghua), Wenbing Huang's groupe (Renmin University), ByteDance AI Drug Discovery équipe
- **Travaux connexes :** UniMoMo framework, All-atom Iterative Variational Autoencoder (IterVAE), all-atom geometric latent space diffusion models, unified modeling.
- **Revue de publication :** ICML 2025, 2025.03
- **Lien vers l’article :** [UniMoMo: Unified Generative Modeling of 3D Molecules for De Novo Binder Design](https://hyper.ai/papers/2503.19300)

### **70. [Le modèle de langage protéique Prot42 génère des liants à haute affinité à partir de la seule séquence de la protéine cible](https://hyper.ai/news/40385)**

- **Article de recherche :** [https://hyper.ai/news/40385](https://hyper.ai/news/40385)
- **Équipe de recherche :** Inception AI (Abu Dhabi, UAE) et Cerebras Systems (Silicon Valley, USA)
- **Travaux connexes :** PDIdb 2010 dataset, UniRef50 database, STRING database, protein function prediction, protein subcellular localization prediction, protein structure prediction, PPI prediction, protein binder generation, DNA sequence-specific binder generation.
- **Revue de publication :** arXiv, 2025.05
- **Lien vers l’article :** [Prot42: a Novel Family of Protein Language Models for Target-aware Protein Binder Generation](https://go.hyper.ai/cFupD)

### **71. [Le simulateur unifié de dynamique biomoléculaire UniSim réalise pour la première fois une simulation dynamique à pas de temps grossier entre types moléculaires et environnements chimiques](https://hyper.ai/news/40483)**

- **Article de recherche :** [https://hyper.ai/news/40483](https://hyper.ai/news/40483)
- **Équipe de recherche :** Yang Liu's groupe (Tsinghua) et Wenbing Huang's groupe (Renmin University)
- **Travaux connexes :** Atomic embedding expansion, multi-head hybrid pre-training, TorchMD-NET GNN models, stochastic interpolant frameworks, force-guided kernels.
- **Revue de publication :** ICML 2025, 2025.05
- **Lien vers l’article :** [UniSim: A Unified Simulator for Time-Coarsened Dynamics of Biomolecules](https://go.hyper.ai/5NWuO)

### **72. [L’algorithme de biologie computationnelle SimplifiedBondfinder découvre 69 nouvelles liaisons azote-oxygène-soufre](https://hyper.ai/news/40515)**

- **Article de recherche :** [https://hyper.ai/news/40515](https://hyper.ai/news/40515)
- **Équipe de recherche :** Équipe de Sophia Bazzi et Sharareh Sayyad à University of Göttingen
- **Travaux connexes :** SimplifiedBondfinder algorithm, machine learning, quantum mechanical calculations, PDB dataset, PDB-REDO dataset, BDB dataset, UMAP dimensionality reduction, NOS linkages.
- **Revue de publication :** Communications Chemistry, 2025.05
- **Lien vers l’article :** [Revealing arginine-cysteine and glycine-cysteine NOS linkages by a systematic re-evaluation of protein structures](https://www.nature.com/articles/s42004-025-01535-w)

### **73. [La nouvelle méthode de conception de séquences protéiques FAMPNN traite simultanément les informations des squelettes et chaînes latérales](https://hyper.ai/news/41545)**

- **Article de recherche :** [https://hyper.ai/news/41545](https://hyper.ai/news/41545)
- **Équipe de recherche :** Stanford University, Arc Institute (Palo Alto)
- **Travaux connexes :** Protein sidechain conformations, FAMPNN method, S40 dataset, PDB dataset, CASP13/14/15 datasets, SKEMPlv2 dataset, S669 dataset, Megascale dataset, FireProtDB dataset, CR9114/CR6261 datasets, iterative sampling strategies, atom37 formats, GNNs, token-wise Euclidean diffusion methods.
- **Revue de publication :** ICML 2025, 2025.06
- **Lien vers l’article :** [Sidechain conditioning and modeling for full-atom protein sequence design with FAMPNN](https://go.hyper.ai/JUJDq)

### **74. [La méthode atomistique La-Proteina génère avec précision des protéines comportant jusqu’à 800 résidus](https://hyper.ai/news/41744)**

- **Article de recherche :** [https://hyper.ai/news/41744](https://hyper.ai/news/41744)
- **Équipe de recherche :** NVIDIA, Mila
- **Travaux connexes :** Atomistic protein design, partially latent flow matching framework La-Proteina, AFDB dataset, two-stage training strategy.
- **Revue de publication :** arXiv, 2025.06
- **Lien vers l’article :** [La-Proteina: Atomistic Protein Generation via Partially Latent Flow Matching](https://go.hyper.ai/3csT5)

### **75. [Le modèle APM, conçu pour les complexes protéiques multichaînes, permet la conception tous atomes et l’optimisation fonctionnelle](https://hyper.ai/news/42059)**

- **Article de recherche :** [https://hyper.ai/news/42059](https://hyper.ai/news/42059)
- **Équipe de recherche :** Hunan University, UCAS, ByteDance Seed équipe
- **Travaux connexes :** Proteins, multi-chain native modeling, all-atom representation optimization, sequence-structure dependency reinforcement, PDB database, Swiss-Prot database, AFDB database, multi-chain protein datasets.
- **Revue de publication :** ICML 2025, 2025.07
- **Lien vers l’article :** [An All-Atom Generative Model for Designing Protein Complexes](https://go.hyper.ai/TVp4i)

### **76. [La nouvelle méthode Logos de conception de protéines se liant aux régions intrinsèquement désordonnées cible les protéines non médicamentables](https://hyper.ai/news/42611)**

- **Article de recherche :** [https://hyper.ai/news/42611](https://hyper.ai/news/42611)
- **Équipe de recherche :** Équipe de David Baker à University of Washington
- **Travaux connexes :** RFdiffusion model, Induced Fit, Scaffold Generation, Pocket Specialization, Pocket Assembly.
- **Revue de publication :** Science, 2025.07
- **Lien vers l’article :** [Design of intrinsically disordered region binding proteins](https://www.science.org/doi/10.1126/science.adr8063)

### **77. [Le nouveau cadre de représentation par fusion dynamique des protéines FusionProt permet des échanges itératifs d’informations](https://hyper.ai/news/43724)**

- **Article de recherche :** [https://hyper.ai/news/43724](https://hyper.ai/news/43724)
- **Équipe de recherche :** Technion, Meta AI
- **Travaux connexes :** Protein language models, representation learning framework FusionProt, AlphaFold DB, AlphaFold2, DeepFRI dataset, learnable fusion tokens, Multiview Contrastive learning.
- **Revue de publication :** bioRxiv, 2025.08
- **Lien vers l’article :** [FusionProt: Fusing Sequence and Structural Information for Unified Protein Representation Learning](https://go.hyper.ai/OXLYl)

### **78. [Le modèle de diffusion MorphDiff guidé par le transcriptome accélère la découverte de médicaments phénotypiques](https://hyper.ai/news/43849)**

- **Article de recherche :** [https://hyper.ai/news/43849](https://hyper.ai/news/43849)
- **Équipe de recherche :** CUHK, Mohamed bin Zayed University of Artificial Intelligence
- **Travaux connexes :** Cell morphology, Latent Diffusion Model (LDM), large-scale cell morphology image datasets, JUMP dataset, CDRP dataset, LINCS dataset, morphological VAE, latent diffusion models.
- **Revue de publication :** Nature Communications, 2025.09
- **Lien vers l’article :** [Prediction of cellular morphology changes under perturbations with a transcriptome-guided diffusion model](https://www.nature.com/articles/s41467-025-63478-z)

### **79. [Le cadre AlphaPPIMI améliore considérablement la généralisation et dépasse les méthodes existantes pour prédire les modulateurs d’interfaces PPI](https://hyper.ai/news/43916)**

- **Article de recherche :** [https://hyper.ai/news/43916](https://hyper.ai/news/43916)
- **Équipe de recherche :** China University of Petroleum, Yonsei University
- **Travaux connexes :** Protein-protein interactions, DLiP dataset, ECFP4 fingerprints, ChemDiv database, AlphaPPIMI framework, Uni-Mol2 model, protein feature extraction, Transformer architecture, ESM2-150M model, ProtTrans model.
- **Revue de publication :** Journal of Cheminformatics, 2025.08
- **Lien vers l’article :** [Alphappimi: a comprehensive deep learning framework for predicting PPI-modulator interactions](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-025-01077-2)

### **80. [Un nouveau cadre de réseau neuronal à fusion prédit efficacement les sites de liaison de plusieurs métaux dans les séquences protéiques](https://hyper.ai/news/44702)**

- **Article de recherche :** [https://hyper.ai/news/44702](https://hyper.ai/news/44702)
- **Équipe de recherche :** Hong Kong University of Science et Technology
- **Travaux connexes :** Fusion neural network framework, protein sequence multi-metal binding site prediction, CNNs, fusion networks, MbPA database, deep learning frameworks.
- **Revue de publication :** bioRxiv, 2025.09
- **Lien vers l’article :** [A Modular Fusion Neural Network Approach to Efficiently Predict Multi-Metal Binding Sites in Protein Sequences](https://go.hyper.ai/Y7DNU)

### **81. [Le cadre de projection moléculaire hautement synthétisable ReaSyn atteint des taux de reconstruction et une diversité des voies exceptionnellement élevés](https://hyper.ai/news/44764)**

- **Article de recherche :** [https://hyper.ai/news/44764](https://hyper.ai/news/44764)
- **Équipe de recherche :** Équipe de recherche de NVIDIA
- **Travaux connexes :** Drug discovery, ReaSyn framework, supervised learning, reinforcement learning fine-tuning, Transformer models, Chain-of-Reaction (CoR) representation.
- **Revue de publication :** arXiv, 2025.09
- **Lien vers l’article :** [Rethinking Molecule Synthesizability with Chain-of-Reaction](https://arxiv.org/abs/2509.16084)

### **82. [Le cadre d’apprentissage par renforcement contraint Ctrl-DNA permet de contrôler de façon ciblée l’expression génique de cellules spécifiques](https://hyper.ai/news/45227)**

- **Article de recherche :** [https://hyper.ai/news/45227](https://hyper.ai/news/45227)
- **Équipe de recherche :** University of Toronto équipe, Changping Laboratory
- **Travaux connexes :** Constrained RL framework Ctrl-DNA, deep learning, cell-specific gene expression, DNA language models, human promoter datasets, enhancer datasets, controllable cell-type specific CRE generation, Constrained Markov Decision Processes, Enformer architecture.
- **Revue de publication :** NeurIPS 2025, 2025.05
- **Lien vers l’article :** [Ctrl-DNA: Constrained Reinforcement Learning for Cell-Specific Cis-Regulatory Element Design](https://arxiv.org/abs/2505.20578)

### **83. [Le cadre PLACER résout le défi de modélisation atomique de l’hétérogénéité conformationnelle des protéines](https://hyper.ai/news/46009)**

- **Article de recherche :** [https://hyper.ai/news/46009](https://hyper.ai/news/46009)
- **Équipe de recherche :** Équipe de recherche de Prof. David Baker's
- **Travaux connexes :** Graph Neural Network PLACER, Cambridge Structural Database, PDB, denoising neural networks, 3-track architectures, small-molecule structural generation.
- **Revue de publication :** PNAS, 2025.11
- **Lien vers l’article :** [Modeling protein-small molecule conformational ensembles with PLACER](https://www.biorxiv.org/content/10.1101/2024.09.25.614868v2)

### **84. [Squidiff simule des transcriptomes dans plusieurs scénarios et favorise la médecine de précision et spatiale](https://hyper.ai/news/46212)**

- **Article de recherche :** [https://hyper.ai/news/46212](https://hyper.ai/news/46212)
- **Équipe de recherche :** Columbia University, Stanford University
- **Travaux connexes :** Squidiff framework, Splatter tools, human iPSC-to-endoderm differentiation datasets, K562 CRISPR screening experiments, conditional DDIM, semantic encoding techniques, Encode-Diffuse-Decode architectures.
- **Revue de publication :** Nature Methods, 2025.11
- **Lien vers l’article :** [Squidiff: predicting cellular development and responses to perturbations using a diffusion model](https://www.nature.com/articles/s41592-025-02877-y)

### **85. [Le modèle génératif PepTron et un nouveau banc d’essai remodèlent la prédiction des ensembles de protéines désordonnées](https://hyper.ai/news/47063)**

- **Article de recherche :** [https://hyper.ai/news/47063](https://hyper.ai/news/47063)
- **Équipe de recherche :** Peptone, University of Copenhagen, NVIDIA, Oxford University, MIT, Duke University
- **Travaux connexes :** PeptoneBench evaluation framework, generative model PepTron, PDB, IDRome database, NVIDIA BioNeMo, ESMFlow, mixed training strategies (experimental + synthetic data).
- **Revue de publication :** bioRxiv, 2025.10
- **Lien vers l’article :** [Advancing Protein Ensemble Predictions Across the Order–Disorder Continuum](https://www.biorxiv.org/content/10.1101/2025.10.18.680935v1)

### **86. [Le MIT et Harvard proposent CleaveNet, un pipeline d’IA de bout en bout pour concevoir des substrats de protéases très spécifiques](https://hyper.ai/news/48608)**

- **Article de recherche :** [https://hyper.ai/news/48608](https://hyper.ai/news/48608)
- **Équipe de recherche :** Joint équipe de MIT et Harvard University
- **Travaux connexes :** Protease substrate design, CleaveNet workflow, synthetic peptides, prediction models and generative models.
- **Revue de publication :** Nature Communications
- **Lien vers l’article :** [CleaveNet: An AI-based end-to-end design workflow for protease substrates](https://www.nature.com/articles/s41467-025-67226-1)

### **87. [L’équipe de l’université Goethe de Francfort propose un cadre de classification multi-échelle pour décoder la complexité du ligome E3 humain](https://hyper.ai/news/48813)**

- **Article de recherche :** [https://hyper.ai/news/48813](https://hyper.ai/news/48813)
- **Équipe de recherche :** Équipe de recherche de Goethe University Frankfurt
- **Travaux connexes :** Ubiquitin-proteasome system (UPS), E3 ubiquitin ligases, human E3 ligome, metric-learning.
- **Revue de publication :** Nature Communications
- **Lien vers l’article :** [Multi-scale classification decodes the complexity of the human E3 ligome](https://www.nature.com/articles/s41467-025-67450-9)

### **88. [Basecamp et NVIDIA lancent conjointement le modèle fondamental EDEN pour la conception de thérapies programmables par IA](https://hyper.ai/news/48964)**

- **Article de recherche :** [https://hyper.ai/news/48964](https://hyper.ai/news/48964)
- **Équipe de recherche :** Basecamp Research, NVIDIA, et top academic institutions
- **Travaux connexes :** Programmable biology, EDEN metagenomic foundation models, gene therapies, recombinases, antimicrobial peptide design.
- **Revue de publication :** bioRxiv
- **Lien vers l’article :** [Designing AI-programmable therapeutics with the EDEN family of foundation models](https://doi.org/10.64898/2026.01.12.699009)

### **89. [Microsoft et d’autres proposent le cadre multimodal GigaTIME pour générer des atlas mIF virtuels à partir de lames de pathologie courantes](https://hyper.ai/news/49359)**

- **Article de recherche :** [https://hyper.ai/news/49359](https://hyper.ai/news/49359)
- **Équipe de recherche :** Microsoft Research, University of Washington, Providence Genomics
- **Travaux connexes :** Tumor microenvironment, H&E staining, multiplex immunofluorescence (mIF), GigaTIME framework, spatial proteomics.
- **Revue de publication :** Cell
- **Lien vers l’article :** [Multimodal AI generates virtual population for tumor microenvironment modeling](https://www.cell.com/cell/fulltext/S0092-8674(25)01312-1)

### **90. [Le MIT propose le modèle de langage d’apprentissage profond Pichia-CLM pour optimiser les codons et accroître le rendement en protéines recombinantes](https://hyper.ai/news/49613)**

- **Article de recherche :** [https://hyper.ai/news/49613](https://hyper.ai/news/49613)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** Komagataella phaffii, codon optimization, Codon Usage Bias (CUB), Pichia-CLM language model, recombinant protein expression.
- **Revue de publication :** PNAS
- **Lien vers l’article :** [Pichia-CLM: A language model–based codon optimization pipeline for Komagataella phaffii](https://www.pnas.org/doi/10.1073/pnas.2522052123)

### **91. [Le MIT et l’ETH proposent le cadre d’apprentissage profond APOLLO pour intégrer et démêler efficacement les données multimodales unicellulaires](https://hyper.ai/news/49702)**

- **Article de recherche :** [https://hyper.ai/news/49702](https://hyper.ai/news/49702)
- **Équipe de recherche :** Joint équipe de MIT et ETH Zurich
- **Travaux connexes :** Single-cell biology, multimodal data integration, APOLLO framework, scRNA-seq, scATAC-seq, spatial morphology.
- **Revue de publication :** Nature Computational Science
- **Lien vers l’article :** [Partially shared multi-modal embedding learns holistic representation of cell state](https://www.nature.com/articles/s43588-025-00948-w)

### **92. [CUHK et ses partenaires proposent le cadre Bi-TEAM pour apprendre une représentation unifiée à plusieurs échelles des peptides modifiés](https://hyper.ai/news/49833)**

- **Article de recherche :** [https://hyper.ai/news/49833](https://hyper.ai/news/49833)
- **Équipe de recherche :** CUHK, Macao Polytechnic University, Zhejiang University, Second Xiangya Hospital of CSU, UESTC
- **Travaux connexes :** Peptide structure and function modeling, non-canonical amino acid modifications, cross-scale representation learning, Bi-TEAM framework.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [Bi-TEAM: A Unified Cross-Scale Representation Learning Framework for Chemically Modified Biomolecules](https://arxiv.org/abs/2603.01873)

### **93. [Carnegie Mellon et ses partenaires proposent AQuaRef pour le raffinement quantique de modèles protéiques tous atomes](https://hyper.ai/news/49895)**

- **Article de recherche :** [https://hyper.ai/news/49895](https://hyper.ai/news/49895)
- **Équipe de recherche :** CMU, University of Wrocław, University of Florida
- **Travaux connexes :** Protein structure refinement, AQuaRef, machine learning interatomic potentials (AIMNet2), quantum refinement, structural biology.
- **Revue de publication :** Nature Communications
- **Lien vers l’article :** [AQuaRef: machine learning accelerated quantum refinement of protein structures](https://www.nature.com/articles/s41467-025-64313-1)

### **94. [NVIDIA et ses partenaires proposent le cadre Complexa pour unifier la génération et l’optimisation de liants protéiques](https://hyper.ai/news/49977)**

- **Article de recherche :** [https://hyper.ai/news/49977](https://hyper.ai/news/49977)
- **Équipe de recherche :** NVIDIA, Oxford University, Mila
- **Travaux connexes :** Protein binder design, Proteína-Complexa (Complexa), Teddymer, generative methods, Test-Time Compute.
- **Revue de publication :** ICLR 2026
- **Lien vers l’article :** [Scaling Atomistic Protein Binder Design with Generative Pretraining and Test-Time Compute](https://openreview.net/forum?id=qmCpJtFZra)

### **95. [Le MIT et CMU proposent VibeGen, qui mobilise la dynamique vibrationnelle pour la conception de novo de protéines](https://hyper.ai/news/50061)**

- **Article de recherche :** [https://hyper.ai/news/50061](https://hyper.ai/news/50061)
- **Équipe de recherche :** Joint équipe de MIT et CMU
- **Travaux connexes :** Protein dynamics, VibeGen agent, language diffusion models, de novo protein design, vibrational amplitude prediction.
- **Revue de publication :** Matter
- **Lien vers l’article :** [VibeGen: Agentic end-to-end de novo protein design for tailored dynamics using a language diffusion model](https://www.cell.com/matter/abstract/S2590-2385(26)00069-X)

### **96. [L’Institut Pasteur utilise l’apprentissage profond pour prédire 2,39 millions de protéines anti-phages et cartographier l’immunité bactérienne](https://hyper.ai/news/50491)**

- **Article de recherche :** [https://hyper.ai/news/50491](https://hyper.ai/news/50491)
- **Équipe de recherche :** Équipe de recherche de Institut Pasteur
- **Travaux connexes :** Bacterial anti-viral immunity, anti-phage defense systems, protein language models, genomic language models, pangenomics.
- **Revue de publication :** Science
- **Lien vers l’article :** [Protein and genomic language models uncover the unexplored diversity of bacterial immunity](https://www.science.org/doi/10.1126/science.adv8275)

### **97. [L’équipe de KAIST utilise l’IA pour concevoir de novo des protéines se liant à de petites molécules et les applique à des biocapteurs](https://hyper.ai/news/50599)**

- **Article de recherche :** [https://hyper.ai/news/50599](https://hyper.ai/news/50599)
- **Équipe de recherche :** Department of Biological Sciences équipe de recherche à KAIST
- **Travaux connexes :** De novo protein design, small-molecule binding proteins, NTF2-like fold, biosensors, chemically induced dimerization (CID).
- **Revue de publication :** Nature Communications
- **Lien vers l’article :** [Small-molecule binding and sensing with a designed protein family](https://www.nature.com/articles/s41467-026-70953-8)

### **98. [L’université de Toronto et ses partenaires proposent dnaHNet pour modéliser efficacement les séquences génomiques de façon hiérarchique](https://hyper.ai/news/50709)**

- **Article de recherche :** [https://hyper.ai/news/50709](https://hyper.ai/news/50709)
- **Équipe de recherche :** University of Toronto, Vector Institute, Arc Institute
- **Travaux connexes :** Genomic sequence learning, foundation models, dnaHNet, dynamic tokenization, variant effect prediction.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [dnaHNet: A Scalable and Hierarchical Foundation Model for Genomic Sequence Learning](https://arxiv.org/abs/2602.10603)

### **99. [L’université Queen Mary de Londres et ses partenaires mènent la plus vaste étude protéogénomique et révèlent les mécanismes moléculaires des maladies](https://hyper.ai/news/51343)**

- **Article de recherche :** [https://hyper.ai/news/51343](https://hyper.ai/news/51343)
- **Équipe de recherche :** Queen Mary University of London, Cambridge University
- **Travaux connexes :** Proteogenomics, protein quantitative trait loci (pQTLs), circulating protein abundance, cis- and trans-genetic regulation.
- **Revue de publication :** Cell
- **Lien vers l’article :** [Multi-cohort proteogenomic analyses reveal genetic effects across the proteome and diseasome](https://www.cell.com/cell/fulltext/S0092-8674(26)00385-5)

### **100. [L’université Goethe de Francfort et ses partenaires proposent genESOM : l’IA générative surmonte les limites des expériences animales à petit échantillon](https://hyper.ai/news/51430)**

- **Article de recherche :** [https://hyper.ai/news/51430](https://hyper.ai/news/51430)
- **Équipe de recherche :** Goethe University Frankfurt et Fraunhofer ITMP
- **Travaux connexes :** Small-sample animal experiments, Generative AI, genESOM model, emergent self-organizing maps.
- **Revue de publication :** Pharmacological Research
- **Lien vers l’article :** [Self-organizing neural network-based generative AI with embedded error inflation control enhances effective knowledge extraction from preclinical studies with reduced sample size](https://www.sciencedirect.com/science/article/pii/S1043661826000745)

## **IA + santé**

### **1. [Le système d’apprentissage profond DeepDR Plus prédit la rétinopathie diabétique à partir d’images du fond d’œil](https://hyper.ai/news/29769)**

- **Article de recherche :** [https://hyper.ai/news/29769](https://hyper.ai/news/29769)
- **Équipe de recherche :** Équipe de recherche de Prof. Weiping Jia, Huating Li, et Bin Sheng's Team à Shanghai Jiao Tong University; Tianyin Huang à Tsinghua University
- **Travaux connexes :** SDPP data, DRPS data, ResNet-50, fundus models, self-supervised learning, IBS evaluation models, meta-models. L’intervalle moyen entre les dépistages cliniques est passé de 12 à 31,97 mois.
- **Revue de publication :** Nature Medicine, 2024.01
- **Lien vers l’article :** [A deep learning system for predicting time to progression of diabetic retinopathy](https://www.nature.com/articles/s41591-023-02702-z)

### **2. [Un modèle de régression logistique montre qu’un indice élevé de végétation réduit le risque de syndrome métabolique](https://hyper.ai/news/29559)**

- **Article de recherche :** [https://hyper.ai/news/29559](https://hyper.ai/news/29559)
- **Équipe de recherche :** Équipe de recherche de Xifeng Wu à Zhejiang University
- **Travaux connexes :** Convolutional neural network models, logistic regression models, Isochrone API
- **Revue de publication :** Environment International, 2024.01
- **Lien vers l’article :** [Beneficial associations between outdoor visible greenness at the workplace and metabolic syndrome in Chinese adults](https://doi.org/10.1016/j.envint.2023.108327)

### **3. [Un système d’apprentissage profond aide les jeunes ophtalmologistes à améliorer de 12 % la cohérence de leurs diagnostics](https://hyper.ai/news/29549)**

- **Article de recherche :** [https://hyper.ai/news/29549](https://hyper.ai/news/29549)
- **Équipe de recherche :** Peking Union Medical College Hospital, West China Hospital of Sichuan University, Second Hospital of Hebei Medical University, Tianjin Medical University Eye Hospital, Wenzhou Medical University, Beijing Airdoc Technology, Renmin University of China
- **Travaux connexes :** Quality assessment models, diagnostic models, CNN. De nouvelles méthodes automatisées de détection de 13 maladies du fond d’œil ont été fournies.
- **Revue de publication :** npj digital medicine, 2024.01
- **Lien vers l’article :** [The performance of a deep learning system in assisting junior ophthalmologists in diagnosing 13 major fundus diseases: a prospective multi-center clinical trial](https://www.nature.com/articles/s41746-023-00991-9)

### **4. [GSP-GCNs atteint une précision de 90,2 % pour le diagnostic de la maladie de Parkinson](https://hyper.ai/news/29189)**

- **Article de recherche :** [https://hyper.ai/news/29189](https://hyper.ai/news/29189)
- **Équipe de recherche :** CAS Shenzhen Institutes of Advanced Technology et First Affiliated Hospital of Sun Yat-sen University
- **Travaux connexes :** Graph Signal Processing (GSP) modules, graph-network modules, classifiers, interpretable models.
- **Revue de publication :** npj Digital Medicine, 2024.01
- **Lien vers l’article :** [An interpretable model based on graph learning for diagnosis of Parkinson’s disease with voice-related EEG](https://www.nature.com/articles/s41746-023-00983-9)

### **5. [MIRS, un système de score pronostique du cancer du sein](https://hyper.ai/news/29304)**

- **Article de recherche :** [https://hyper.ai/news/29304](https://hyper.ai/news/29304)
- **Équipe de recherche :** University of Kentucky, Macau University of Science et Technology, University of Macau, Guangzhou Medical University
- **Travaux connexes :** TCGA database, neural network models, prognosis scoring systems, ESTIMATE algorithm, machine learning, XGboost, Boruta RF, ElasticNet.
- **Revue de publication :** iScience, 2023.11
- **Lien vers l’article :** [MIRS: An AI scoring system for predicting the prognosis and therapy of breast cancer](https://doi.org/10.1016/j.isci.2023.108322)

### **6. [Le modèle fondamental d’images rétiniennes RETFound prédit plusieurs maladies systémiques](https://hyper.ai/news/28113)**

- **Article de recherche :** [https://hyper.ai/news/28113](https://hyper.ai/news/28113)
- **Équipe de recherche :** Yukun Zhou (PhD candidate) et d’autres de UCL et Moorfields Eye Hospital
- **Travaux connexes :** Self-supervised learning, MEH-MIDAS dataset, EyePACS dataset, SL-ImageNet, SSL-ImageNet, SSL-Retinal.
- **Revue de publication :** Nature, 2023.08
- **Lien vers l’article :** [A foundation model for generalizable disease detection from retinal images](https://www.nature.com/articles/s41586-023-06555-x)

### **7. [La SVM optimise les capteurs tactiles : le taux de reconnaissance du braille atteint 96,12 %](https://hyper.ai/news/26561)**

- **Article de recherche :** [https://hyper.ai/news/26561](https://hyper.ai/news/26561)
- **Équipe de recherche :** Geng Yang et Kaichen Xu's groupes à Zhejiang University
- **Travaux connexes :** SVM algorithms, machine learning, CNNs, adaptive moment estimation algorithms. Identifie avec précision six motifs tactiles dynamiques.
- **Revue de publication :** Advanced Science, 2023.09
- **Lien vers l’article :** [Machine Learning-Enabled Tactile Sensor Design for Dynamic Touch Decoding](https://onlinelibrary.wiley.com/doi/10.1002/advs.202303949)

### **8. [L’Institut de génomique de Pékin de l’Académie chinoise des sciences crée une archive ouverte d’imagerie biomédicale](https://hyper.ai/news/26334)**

- **Article de recherche :** [https://hyper.ai/news/26334](https://hyper.ai/news/26334)
- **Équipe de recherche :** CAS Beijing Institute of Genomics
- **Travaux connexes :** TCIA database, de-identification, quality control, Collection, Individual, Study, Series, Image, triplet networks, attention modules.
- **Revue de publication :** bioRxiv, 2023.08
- **Lien vers l’article :** [Self-supervised learning of hologram reconstruction using physics consistency](https://www.nature.com/articles/s42256-023-00704-7)

### **9. [L’IA Lunit interprète les mammographies avec une précision comparable à celle des médecins](https://hyper.ai/news/26135)**

- **Article de recherche :** [https://hyper.ai/news/26135](https://hyper.ai/news/26135)
- **Équipe de recherche :** Équipe de recherche de l’université de Nottingham
- **Travaux connexes :** PERFORMS dataset, annotations + scoring. La sensibilité de l’IA était comparable à celle des médecins, et aucune différence significative de spécificité n’a été observée.
- **Revue de publication :** Radiology, 2023.09
- **Lien vers l’article :** [Performance of a Breast Cancer Detection AI Algorithm Using the Personal Performance in Mammographic Screening Scheme](https://pubs.rsna.org/doi/10.1148/radiol.223299)

### **10. [Une stratégie de sélection de caractéristiques détecte les biomarqueurs du cancer du sein](https://hyper.ai/news/24589)**

- **Article de recherche :** [https://hyper.ai/news/24589](https://hyper.ai/news/24589)
- **Équipe de recherche :** University of Naples Federico II, Italy
- **Travaux connexes :** Machine learning, feature selection strategies, TCGA/GEO datasets, Gain Ratio, RF, SVM-RFE.
- **Revue de publication :** CIBB 2023, 2023.07
- **Lien vers l’article :** [Robust Feature Selection strategy detects a panel of microRNAs as putative diagnostic biomarkers in Breast Cancer](https://www.researchgate.net/publication/372083934)

### **11. [Le modèle de gradient boosting prédit avec précision un sous-syndrome de BPSD](https://hyper.ai/news/23926)**

- **Article de recherche :** [https://hyper.ai/news/23926](https://hyper.ai/news/23926)
- **Équipe de recherche :** Yonsei University équipe de recherche (South Korea)
- **Travaux connexes :** Machine learning models, multiple imputation methods, logistic regression models, Random Forest models, Gradient Boosting Machine models, SVM models.
- **Revue de publication :** Scientific Reports, 2023.05
- **Lien vers l’article :** [Machine learning‑based predictive models for the occurrence of behavioral and psychological symptoms of dementia: model development and validation](https://www.nature.com/articles/s41598-023-35194-5)

### **12. [Un modèle d’apprentissage automatique prédit la mortalité des patients à un an](https://hyper.ai/news/33905)**

- **Article de recherche :** [https://hyper.ai/news/33905](https://hyper.ai/news/33905)
- **Équipe de recherche :** Macheng People's Hospital (Hubei, China)
- **Travaux connexes :** Logistic regression models, machine learning models, GBM, RF, DT. Les trois principaux facteurs associés à la mortalité à un an étaient le NT-proBNP, l’albumine et les statines.
- **Revue de publication :** Cardiovascular Diabetology, 2023.06
- **Lien vers l’article :** [Machine learning-based models to predict one-year mortality among Chinese older patients with coronary artery disease combined with impaired glucose tolerance or diabetes mellitus](https://cardiab.biomedcentral.com/articles/10.1186/s12933-023-01854-z)

### **13. [Une nouvelle interface cerveau-ordinateur permet aux patients aphasiques de « parler »](https://hyper.ai/news/33914)**

- **Article de recherche :** [https://hyper.ai/news/33914](https://hyper.ai/news/33914)
- **Équipe de recherche :** Équipe de recherche de UC
- **Travaux connexes :** nltk Twitter corpus, multimodal speech neuroprostheses, brain-computer interfaces, deep learning models, Cornell Movie-Dialogs Corpus, synthetic speech algorithms.
- **Revue de publication :** Nature, 2023.08
- **Lien vers l’article :** [A high-performance neuroprosthesis for speech decoding and avatar control](https://www.nature.com/articles/s41586-023-06443-4)

### **14. [Détection du cancer du pancréas par intelligence artificielle fondée sur l’apprentissage profond](https://hyper.ai/news/33923)**

- **Article de recherche :** [https://hyper.ai/news/33923](https://hyper.ai/news/33923)
- **Équipe de recherche :** Alibaba DAMO Academy aux côtés de multiple domestic et international medical institutions
- **Travaux connexes :** Deep learning, PANDA, nnU-Net, CNNs, Transformers. PANDA a détecté cinq cas de cancer et 26 cas non repérés cliniquement.
- **Revue de publication :** Nature Medicine, 2023.11
- **Lien vers l’article :** [Large-scale pancreatic cancer detection via non-contrast CT and deep learning](https://www.nature.com/articles/s41591-023-02640-w)

### **15. [Efficacité en population du dépistage du cancer du poumon assisté par apprentissage automatique](https://hyper.ai/news/31197)**

- **Article de recherche :** [https://hyper.ai/news/31197](https://hyper.ai/news/31197)
- **Équipe de recherche :** Google Research Center
- **Travaux connexes :** DS_CA dataset, DS_NLST dataset, DS_US dataset, DS_JPN dataset, machine learning models, lung cancer screening. La spécificité a augmenté de 5 à 7 % et le temps de dépistage a diminué de 14 secondes par cas.
- **Revue de publication :** Radiology AI, 2024.03
- **Lien vers l’article :** [Assistive AI in Lung Cancer Screening: A Retrospective Multinational Study in the United States and Japan](https://pubs.rsna.org/doi/11.1148/ryai.230079)

### **16. [Le modèle fusionné d’IA diagnostique le cancer de l’ovaire à partir des analyses de routine et de l’âge](https://hyper.ai/news/30730)**

- **Article de recherche :** [https://hyper.ai/news/30730](https://hyper.ai/news/30730)
- **Équipe de recherche :** Équipe de recherche de Jihong Liu à Sun Yat-sen University
- **Travaux connexes :** Feature selection methods, machine learning classifiers, 5-fold cross-validation, multi-criteria decision theory. A surpassé les biomarqueurs CA125 et HE4.
- **Revue de publication :** The Lancet Digital Health, 2024.05
- **Lien vers l’article :** [Artificial intelligence-based models enabling accurate diagnosis of ovarian cancer using laboratory tests in China: a multicentre, retrospective cohort study](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00245-5/fulltext)

### **17. [Google publie HEAL, un cadre en quatre étapes pour évaluer l’équité des outils d’IA médicale](https://hyper.ai/news/31535)**

- **Article de recherche :** [https://hyper.ai/news/31535](https://hyper.ai/news/31535)
- **Équipe de recherche :** Équipe de recherche de Google
- **Travaux connexes :** Machine learning, HEAL (Health Equity Assessment of Machine Learning) framework, logistic regression analysis, intersectional analysis, health equity.
- **Revue de publication :** EClinicalMedicine, 2024.04
- **Lien vers l’article :** [Health equity assessment of machine learning performance (HEAL): a framework and dermatology AI model case study](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(24)00058-0/fulltext)

### **18. [La segmentation sémantique permet de créer Pianno, un outil d’annotation sémantique de la transcriptomique spatiale](https://hyper.ai/news/31573)**

- **Article de recherche :** [https://hyper.ai/news/31573](https://hyper.ai/news/31573)
- **Équipe de recherche :** Équipe de Ying Zhu à Fudan University
- **Travaux connexes :** Computer vision, machine learning, spatial clustering methods, unsupervised clustering methods, spatial Poisson point process (sPPP) models, high-order Markov random field (MRF) priors.
- **Revue de publication :** Nature Communications, 2024.04
- **Lien vers l’article :** [Pianno: a probabilistic framework automating semantic annotation for spatial transcriptomics](https://www.nature.com/articles/s41467-024-47152-4)

### **19. [Le modèle d’IA UniFMIR repousse les limites actuelles de l’imagerie par microscopie à fluorescence](https://hyper.ai/news/31885)**

- **Article de recherche :** [https://hyper.ai/news/31885](https://hyper.ai/news/31885)
- **Équipe de recherche :** Équipe de Bo Yan à Fudan University
- **Travaux connexes :** UniFMIR model, multi-head modules, feature enhancement modules, multi-tail modules, Swin Transformer, adaptive moment estimation, deep learning, SR models, U-Net.
- **Revue de publication :** Nature Methods, 2024.04
- **Lien vers l’article :** [Pretraining a foundation model for generalizable fluorescence microscopy-based image restoration](https://www.nature.com/articles/s41592-024-02244-3)

### **20. [Un système d’apprentissage profond améliore la précision de la prédiction de la survie au cancer](https://hyper.ai/news/32068)**

- **Article de recherche :** [https://hyper.ai/news/32068](https://hyper.ai/news/32068)
- **Équipe de recherche :** Équipe de Zhangsheng Yu à the Shanghai National Center for Applied Mathematics (SJTU Branch)
- **Travaux connexes :** Deep learning systems, ST datasets, integrated graph and graph deep learning models, CNNs and GNNs, external test set MCO-CRC, spatial gene expression models, super-patch graph survival models, H&E-stained histological image preprocessing.
- **Revue de publication :** Cell Reports Medicine, 2024.05
- **Lien vers l’article :** [Harnessing TME depicted by histological images to improve cancer prognosis through a deep learning system](https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(24)00205-2 )

### **21. [MemSAM adapte le modèle « Segment Anything » à la segmentation des vidéos médicales](https://hyper.ai/news/32372)**

- **Article de recherche :** [https://hyper.ai/news/32372](https://hyper.ai/news/32372)
- **Équipe de recherche :** Huisi Wu (Shenzhen University)
- **Travaux connexes :** Vision models, medical video segmentation, echocardiography video segmentation models, memory reinforcement mechanisms, CAMUS and EchoNet-Dynamic datasets, SonoSAM model, SAMUS model.
- **Revue de publication :** CVPR 2024, 2024.05
- **Lien vers l’article :** [MemSAM: Taming Segment Anything Model for Echocardiography Video Segmentation](https://github.com/dengxl0520/MemSAM)

### **22. [Medical SAM 2, modèle de segmentation d’images médicales, arrive en tête du classement SOTA](https://hyper.ai/news/33738)**

- **Article de recherche :** [https://hyper.ai/news/33738](https://hyper.ai/news/33738)
- **Équipe de recherche :** Oxford University équipe
- **Travaux connexes :** Medical image segmentation models, SAM 2, SA-V video segmentation dataset, Medical SAM 2 example datasets, image encoders, memory encoders.
- **Revue de publication :** arXiv, 2024.08
- **Lien vers l’article :** [Medical SAM 2: Segment medical images as video via Segment Anything Model 2](https://arxiv.org/abs/2408.00874)

### **23. [L’apprentissage automatique combat la résistance à la chimiothérapie et la récidive tumorale, protégeant les cellules souches du cancer du sein](https://hyper.ai/news/33566)**

- **Article de recherche :** [https://hyper.ai/news/33566](https://hyper.ai/news/33566)
- **Équipe de recherche :** Shandong University et Shanxi Medical University, conjointement avec Helix Matrix
- **Travaux connexes :** Machine learning, Breast Invasive Carcinoma (BRCA) dataset, Pearson correlation, Gene Set Enrichment Analysis.
- **Revue de publication :** Advanced Science, 2024.07
- **Lien vers l’article :** [Polyamine Anabolism Promotes Chemotherapy-Induced Breast Cancer Stem Cell Enrichment](https://onlinelibrary.wiley.com/doi/10.1002/advs.202404853)

### **24. [Le modèle vision-langage DeepDR-LLM pour les soins du diabète est publié dans une revue de la famille Nature](https://hyper.ai/news/33292)**

- **Article de recherche :** [https://hyper.ai/news/33292](https://hyper.ai/news/33292)
- **Équipe de recherche :** Tsinghua University, Shanghai Jiao Tong University, Singapore National University
- **Travaux connexes :** LLMs, deep learning based on fundus images, Adaptors and LoRA, Transformer architectures, supervised fine-tuning.
- **Revue de publication :** Nature Medicine, 2024.07
- **Lien vers l’article :** [Integrated image-based deep learning and language models for primary diabetes care](https://www.nature.com/articles/s41591-024-03139-8)

### **25. [À armes égales avec les pathologistes chevronnés ! L’équipe de Tsinghua propose ROAM, modèle fondamental d’IA pour diagnostiquer précisément les gliomes](https://hyper.ai/news/33136)**

- **Article de recherche :** [https://hyper.ai/news/33136](https://hyper.ai/news/33136)
- **Équipe de recherche :** Tsinghua University et Xiangya Hospital
- **Travaux connexes :** Large regions of interest, pyramid transformers, ROAM, large-size image patches, Xiangya glioma WSI dataset, TCGA glioma WSI dataset, weakly supervised computational pathology.
- **Revue de publication :** Nature Machine Intelligence, 2024.06
- **Lien vers l’article :** [A transformer-based weakly supervised computational pathology method for clinical-grade diagnosis and molecular marker discovery of gliomas](https://www.nature.com/articles/s42256-024-00868-w)

### **26. [Le modèle universel de segmentation d’images médicales ScribblePrompt dépasse les modèles fondés sur SAM](https://hyper.ai/news/34720)**

- **Article de recherche :** [https://hyper.ai/news/34720](https://hyper.ai/news/34720)
- **Équipe de recherche :** MIT CSAIL, MGH, Harvard Medical School
- **Travaux connexes :** Deep learning, medical image segmentation, MegaMedical dataset, interactive segmentation, generative synthetic labels, CNN-Transformer hybrid solutions.
- **Revue de publication :** ECCV 2024, 2024.07
- **Lien vers l’article :** [ScribblePrompt: Fast and Flexible Interactive Segmentation for Any Biomedical Image](https://arxiv.org/pdf/2312.07381)

### **27. [Une plateforme de jumeau numérique du cerveau révèle des phénomènes critiques et des fonctions cognitives proches de celles du cerveau humain](https://hyper.ai/news/34573)**

- **Article de recherche :** [https://hyper.ai/news/34573](https://hyper.ai/news/34573)
- **Équipe de recherche :** Équipe de Prof. Jianfeng Feng à Fudan University
- **Travaux connexes :** Spiking neural networks, digital twin brain, reverse engineering, MRI, cortico-subcortical models, DTB models, data assimilation models.
- **Revue de publication :** National Science Review, 2024.05
- **Lien vers l’article :** [Imitating and exploring human brain’s resting and task-performing states via resembling brain computing: scaling and architecture](https://doi.org/10.1093/nsr/nwae080)

### **28. [Un système de simulation d’agents conversationnels LLM pose un premier diagnostic de dépression](https://hyper.ai/news/34845)**

- **Article de recherche :** [https://hyper.ai/news/34845](https://hyper.ai/news/34845)
- **Équipe de recherche :** X-LANCE Lab à SJTU, UT Arlington, TCCI, et ThetaAI
- **Travaux connexes :** Dialogue Agent simulation systems, D4 dataset, tertiary memory storage architectures, Patient Agent, Psychiatrist Agent, Instructor Agent.
- **Revue de publication :** arXiv, 2024.09
- **Lien vers l’article :** [Depression Diagnosis Dialogue Simulation: Self-improving Psychiatrist with Tertiary Memory](https://arxiv.org/abs/2409.15084)

### **29. [Le modèle d’apprentissage profond LucaProt facilite l’identification des virus à ARN](https://hyper.ai/news/34968)**

- **Article de recherche :** [https://hyper.ai/news/34968](https://hyper.ai/news/34968)
- **Équipe de recherche :** Sun Yat-sen University, Zhejiang University, Fudan University, Alibaba Cloud, etc.
- **Travaux connexes :** Cloud computing and AI, metagenomic mining, NCBI SRA database, CNGBdb, data-driven deep learning models, Transformer framework, discovering 161,979 potential RNA virus species.
- **Revue de publication :** Cell, 2024.09
- **Lien vers l’article :** [Using artificial intelligence to document the hidden RNA virosphere](https://doi.org/10.1016/j.cell.2024.09.027)

### **30. [Le cadre de préentraînement d’images médicales UniMedI lève les obstacles liés à l’hétérogénéité des données médicales](https://hyper.ai/news/35128)**

- **Article de recherche :** [https://hyper.ai/news/35128](https://hyper.ai/news/35128)
- **Équipe de recherche :** Équipe de Haoji Hu à Zhejiang University, Lili Qiu's Team à Microsoft Research Asia
- **Travaux connexes :** Pseudo-Pairs technology, MIMIC-CXR 2.0.0 dataset, BIMCV dataset, ViT-B/16 vision encoders, BioClinicalBERT, Vision-Language contrastive learning.
- **Revue de publication :** ECCV, 2024.07
- **Lien vers l’article :** [Unified Medical Image Pre-training in Language-Guided Common Semantic Space](https://eccv.ecva.net/virtual/2024/poster/1165)

### **31. [Le grand modèle médical multilingue MMed-Llama 3 s’adapte mieux aux usages médicaux](https://hyper.ai/news/35242)**

- **Article de recherche :** [https://hyper.ai/news/35242](https://hyper.ai/news/35242)
- **Équipe de recherche :** Yanfeng Wang et Weidi Xie's équipes à Shanghai Jiao Tong University
- **Travaux connexes :** Multilingual medical corpus MMedC, medical QA benchmark MMedBench, foundation models MMed-Llama 3, MMedLM.
- **Revue de publication :** Nature Communications, 2024.09
- **Lien vers l’article :** [Towards building multilingual language model for medicine](https://www.nature.com/articles/s41467-024-52417-z)

### **32. [La méthode d’assemblage d’images d’endoscopie capsulaire S2P-Matching facilite la reconstruction d’images](https://hyper.ai/news/35313)**

- **Article de recherche :** [https://hyper.ai/news/35313](https://hyper.ai/news/35313)
- **Équipe de recherche :** HUST, SJTU, South-Central Minzu University, HKUST(GZ), PolyU, University of Sydney
- **Travaux connexes :** S2P-Matching, self-supervised contrastive learning, dual-branch encoders, Transformers, pixel-level matching. La précision de correspondance a augmenté de 187,9 %.
- **Revue de publication :** IEEE Transactions on Biomedical Engineering, 2024.09
- **Lien vers l’article :** [S2P-Matching: Self-supervised Patch-based Matching Using Transformer for Capsule Endoscopic Images Stitching](http://dx.doi.org/10.1109/TBME.2024.3462502)

### **33. [Le banc d’essai médical multimodal GMAI-MMBench couvre 284 jeux de données et 18 tâches cliniques](https://hyper.ai/news/35938)**

- **Article de recherche :** [https://hyper.ai/news/35938](https://hyper.ai/news/35938)
- **Équipe de recherche :** Shanghai AI Lab, University of Washington, Monash University, ECNU
- **Travaux connexes :** GMAI-MMBench benchmark, the most comprehensive open-source general medical AI benchmark evaluating large vision-language models.
- **Revue de publication :** NeurIPS 2024, 2024.08
- **Lien vers l’article :** [GMAI-MMBench: A Comprehensive Multimodal Evaluation Benchmark Towards General Medical AI](https://arxiv.org/abs/2408.03361v7)

### **34. [La nouvelle méthode de prévision de séries temporelles CGS-Mask révèle des indicateurs clés de survie des patients](https://hyper.ai/news/36192)**

- **Article de recherche :** [https://hyper.ai/news/36192](https://hyper.ai/news/36192)
- **Équipe de recherche :** HUST, University of Sydney, Tongji Hospital
- **Travaux connexes :** MIMIC-III dataset, LSST dataset, NATOPS dataset, AE dataset. La méthode combine la prévision de séries temporelles et l’interprétabilité.
- **Revue de publication :** AAAI 2024, 2024.03
- **Lien vers l’article :** [CGS-Mask: Making Time Series Predictions Intuitive for All](https://ojs.aaai.org/index.php/AAAI/article/view/29325)

### **35. [Le cadre de décodage cérébral non invasif fMRI pose les bases des interfaces cerveau-ordinateur et des modèles cognitifs](https://hyper.ai/news/36023)**

- **Article de recherche :** [https://hyper.ai/news/36023](https://hyper.ai/news/36023)
- **Équipe de recherche :** Équipe de Yi Zeng à l’institut de Automation, CAS
- **Travaux connexes :** Multimodal integration frameworks, Natural Scenes Dataset, COCO dataset, VAE and CLIP embeddings, 3D fMRI preprocessors, multimodal LLMs.
- **Revue de publication :** NeurIPS 2024, 2024.10
- **Lien vers l’article :** [Neuro-Vision to Language: Enhancing Brain Recording-based Visual Reconstruction and Language Interaction](https://nips.cc/virtual/2024/poster/93607)

### **36. [Le modèle de segmentation d’images médicales M2CF-Net améliore la précision du diagnostic du syndrome de Sjögren](https://hyper.ai/news/36700)**

- **Article de recherche :** [https://hyper.ai/news/36700](https://hyper.ai/news/36700)
- **Équipe de recherche :** Pr Wei Tu et Pr Feng Lu à HUST
- **Travaux connexes :** M2CF-Net, minor salivary gland pathology slide dataset, ROI extraction, stain normalization, WSI patching, Vahadane algorithm, patch-based training.
- **Revue de publication :** MedAI 2023, 2023
- **Lien vers l’article :** [M2CF-Net: A Multi-Resolution and Multi-Scale Cross Fusion Network for Segmenting Pathology Lesion of the Focal Lymphocytic Sialadenitis](https://doi.ieeecomputersociety.org/10.1109/MedAI59581.2023.00063)

### **37. [BSAFusion permet l’alignement et la fusion d’images médicales multimodales](https://hyper.ai/news/37104)**

- **Article de recherche :** [https://hyper.ai/news/37104](https://hyper.ai/news/37104)
- **Équipe de recherche :** Kunming University of Science et Technology, Ocean University of China
- **Travaux connexes :** Medical image processing, Bidirectional Stepwise Feature Alignment (BSFA), CT-MRI, PET-MRI, and SPECT-MRI datasets, deep learning, computer vision.
- **Revue de publication :** AAAI 2025, 2024.11
- **Lien vers l’article :** [BSAFusion: A Bidirectional Stepwise Feature Alignment Network for Unaligned Medical Image Fusion](https://arxiv.org/abs/2412.08050)

### **38. [Le cadre multi-agents LLM KG4Diagnosis aide à diagnostiquer 362 maladies courantes](https://hyper.ai/news/37208)**

- **Article de recherche :** [https://hyper.ai/news/37208](https://hyper.ai/news/37208)
- **Équipe de recherche :** University of Warwick, Cranfield University, Cambridge, Oxford
- **Travaux connexes :** KG4Diagnosis, hierarchical multi-agent frameworks, automated medical knowledge graph construction, General Practitioner LLMs (GPLLM), Consultant-LLMs.
- **Revue de publication :** AAAI-25 Bridge Program, 2024.12
- **Lien vers l’article :** [KG4Diagnosis: A Hierarchical Multi-Agent LLM Framework with Knowledge Graph Enhancement for Medical Diagnosis](https://arxiv.org/abs/2412.16833)

### **39. [Le modèle de segmentation ConDSeg résout les problèmes de contours flous et de cooccurrence en imagerie médicale](https://hyper.ai/news/37794)**

- **Article de recherche :** [https://hyper.ai/news/37794](https://hyper.ai/news/37794)
- **Équipe de recherche :** China University of Geosciences, Baidu
- **Travaux connexes :** Contrast-Driven feature enhancement framework ConDSeg, consistency reinforcement training, semantic decoupling modules, size-aware decoders, BCNet, Kvasir-SEG dataset.
- **Revue de publication :** AAAI 2025, 2024.12
- **Lien vers l’article :** [ConDSeg: A General Medical Image Segmentation Framework via Contrast-Driven Feature Enhancement](https://arxiv.org/abs/2412.08345)

### **40. [Le modèle médical M³FM permet le diagnostic clinique en zéro-shot et prend en charge les comptes rendus et la classification des maladies](https://hyper.ai/news/37924)**

- **Article de recherche :** [https://hyper.ai/news/37924](https://hyper.ai/news/37924)
- **Équipe de recherche :** Oxford, University of Rochester, Amazon, Westlake University, Tencent Youtu Lab
- **Travaux connexes :** Zero-shot clinical diagnosis, medical imaging, CLIP models, M³FM framework, MultiMedCLIP, MIMC-CXR datasets, COVID-19-CT-CXR, CheXpert.
- **Revue de publication :** npj Digital Medicine, 2025.02
- **Lien vers l’article :** [A multimodal multidomain multilingual medical foundation model for zero shot clinical diagnosis](https://www.nature.com/articles/s41746-024-01339-7)

### **41. [L’estimation du sexe à partir de scanners CT du crâne par apprentissage profond dépasse les experts médico-légaux](https://hyper.ai/news/38024)**

- **Article de recherche :** [https://hyper.ai/news/38024](https://hyper.ai/news/38024)
- **Équipe de recherche :** UWA, UNSW, Hasanuddin University
- **Travaux connexes :** Deep learning-based automated frameworks, skull sex estimation, 3D CT scans, forensic anthropology.
- **Revue de publication :** Scientific Reports, 2024.12
- **Lien vers l’article :** [Deep learning versus human assessors: forensic sex estimation from three-dimensional computed tomography scans](https://www.nature.com/articles/s41598-024-81718-y)

### **42. [L’IA stimule la recherche médicale : les grands modèles deviennent le « partenaire idéal » de la formation des médecins généralistes](https://hyper.ai/news/38366)**

- **Article de recherche :** [https://hyper.ai/news/38366](https://hyper.ai/news/38366)
- **Équipe de recherche :** SJTU, SUS, Tsinghua, Duke, Johns Hopkins, University of Melbourne
- **Travaux connexes :** Physician training, DeepSeek, human-AI collaborative decision-making, LLMs, chronic disease diagnosis and treatment.
- **Revue de publication :** Science Bulletin, 2025.01
- **Lien vers l’article :** [Large language models for diabetes training: a prospective study](https://www.sciencedirect.com/science/article/pii/S2095927325000891)

### **43. [L’algorithme d’apprentissage profond AcneDGNet détecte et classe les lésions acnéiques](https://hyper.ai/news/38397)**

- **Article de recherche :** [https://hyper.ai/news/38397](https://hyper.ai/news/38397)
- **Équipe de recherche :** Peking University International Hospital
- **Travaux connexes :** AcneDGNet, Vision Transformers, CNNs, ACNE04 dataset, Swin Transformer architectures.
- **Revue de publication :** Scientific Reports, 2025.01
- **Lien vers l’article :** [Evaluation of an acne lesion detection and severity grading model for Chinese population in online and offline healthcare scenarios](https://www.nature.com/articles/s41598-024-84670-z)

### **44. [Le modèle multimodal de segmentation d’images médicales VISTA3D permet l’auto-segmentation et l’interaction sur des images 3D](https://hyper.ai/news/38486)**

- **Article de recherche :** [https://hyper.ai/news/38486](https://hyper.ai/news/38486)
- **Équipe de recherche :** NVIDIA, UAMS, NIH, Oxford University
- **Travaux connexes :** VISTA3D, 3D supervoxel feature extraction, automatic segmentation, interactive segmentation dual-modality.
- **Revue de publication :** arXiv, 2024.11
- **Lien vers l’article :** [VISTA3D: A Unified Segmentation Foundation Model For 3D Medical Imaging](https://doi.org/10.48550/arxiv.2406.05285)

### **45. [Le modèle unifié de segmentation multi-plans EchoONE segmente avec précision plusieurs vues échocardiographiques](https://hyper.ai/news/38544)**

- **Article de recherche :** [https://hyper.ai/news/38544](https://hyper.ai/news/38544)
- **Équipe de recherche :** Shenzhen University, Shenzhen People's Hospital
- **Travaux connexes :** EchoONE model, CAMUS dataset, HMC-QU dataset, EchoNet_Dynamic dataset.
- **Revue de publication :** CVPR 2025, 2025.04
- **Lien vers l’article :** [EchoONE: Segmenting Multiple echocardiography Planes in One Model](https://arxiv.org/abs/2412.02993)

### **46. [Un cadre de dialogue multi-agents simule des consultations médicales pour aider au diagnostic des maladies](https://hyper.ai/news/38583)**

- **Article de recherche :** [https://hyper.ai/news/38583](https://hyper.ai/news/38583)
- **Équipe de recherche :** West China Hospital, Zhejiang University, BUPT
- **Travaux connexes :** Multi-Agent Conversational (MAC) frameworks, LLMs, Orphanet, Medline, GPT-3.5, GPT-4.
- **Revue de publication :** Nature, 2025.03
- **Lien vers l’article :** [Enhancing diagnostic capability with multi-agents conversational large language models](https://www.nature.com/articles/s41746-025-01550-0#Tab6)

### **47. [Le cadre d’apprentissage profond STAIG révèle des informations génétiques détaillées dans le microenvironnement tumoral](https://hyper.ai/news/38587)**

- **Article de recherche :** [https://hyper.ai/news/38587](https://hyper.ai/news/38587)
- **Équipe de recherche :** Institute of Medical Science, University of Tokyo
- **Travaux connexes :** STAIG framework, biological tissues, ST datasets, GNNs.
- **Revue de publication :** Nature Communications, 2025.01
- **Lien vers l’article :** [STAIG: Spatial transcriptomics analysis via image-aided graph contrastive learning for domain exploration and alignment-free integration](https://www.nature.com/articles/s41467-025-56276-0)

### **48. [Le premier cadre tout-en-un de réidentification d’images médicales MaMI atteint le niveau SOTA sur 11 jeux de données](https://hyper.ai/news/38624)**

- **Article de recherche :** [https://hyper.ai/news/38624](https://hyper.ai/news/38624)
- **Équipe de recherche :** Shanghai AI Lab et multiple universities
- **Travaux connexes :** MaMI framework, medical re-identification benchmarks, Continuous Modality Parameter Adapter (ComPA), Medical Foundation Models (MFMs).
- **Revue de publication :** CVPR 2025, 2025.03
- **Lien vers l’article :** [Towards All-in-One Medical Image Re-Identification](https://arxiv.org/pdf/2503.08173)

### **49. [Le modèle de régression many-to-one M2OST prédit avec précision l’expression génétique à partir d’images d’anatomopathologie numérique](https://hyper.ai/news/38783)**

- **Article de recherche :** [https://hyper.ai/news/38783](https://hyper.ai/news/38783)
- **Équipe de recherche :** Zhejiang University, Zhejiang Lab, Ritsumeikan University
- **Travaux connexes :** Whole Slide Images (WSIs), human breast cancer datasets, Transformer models, patch-level schemes.
- **Revue de publication :** AAAI 2025, 2024.12
- **Lien vers l’article :** [M2OST: Many-to-one Regression for Predicting Spatial Transcriptomics from Digital Pathology Images](https://arxiv.org/abs/2409.15092)

### **50. [L’outil d’analyse d’IRM cérébrales MindGlide quantifie plusieurs lésions de sclérose en plaques](https://hyper.ai/news/38971)**

- **Article de recherche :** [https://hyper.ai/news/38971](https://hyper.ai/news/38971)
- **Équipe de recherche :** Équipe de recherche de UCL
- **Travaux connexes :** MindGlide model, MRI, routine care datasets, lesion segmentation, nnU-Net, 3D CNNs.
- **Revue de publication :** Nature Communications, 2025.04
- **Lien vers l’article :** [Enabling new insights from old scans by repurposing clinical MRI archives for multiple sclerosis research](https://go.hyper.ai/fDEgm)

### **51. [Le cadre d’apprentissage multi-instances par distillation hiérarchique HDMIL traite rapidement les lames entières de gigapixels](https://hyper.ai/news/39157)**

- **Article de recherche :** [https://hyper.ai/news/39157](https://hyper.ai/news/39157)
- **Équipe de recherche :** HIT, HIT (Shenzhen)
- **Travaux connexes :** Multi-instance learning, tumor detection, WSIs, Camelyon16 dataset, TCGA-NSCLC dataset.
- **Revue de publication :** CVPR 2025, 2025.03
- **Lien vers l’article :** [Fast and Accurate Gigapixel Pathological Image Classification with Hierarchical Distillation Multi-Instance Learning](https://arxiv.org/abs/2502.21130)

### **52. [Le modèle fondamental universel vesselFM pour segmenter les vaisseaux sanguins en 3D dépasse largement les modèles fondés sur SAM](https://hyper.ai/news/39201)**

- **Article de recherche :** [https://hyper.ai/news/39201](https://hyper.ai/news/39201)
- **Équipe de recherche :** University of Zurich, ETH Zurich, Technical University of Munich
- **Travaux connexes :** Blood vessel segmentation, medical image segmentation, Flow Matching-based conditional generative models, domain randomization strategies.
- **Revue de publication :** CVPR 2025, 2025.01
- **Lien vers l’article :** [vesselFM: A Foundation Model for Universal 3D Blood Vessel Segmentation](https://go.hyper.ai/lVad9)

### **53. [Les réseaux neuronaux de graphes prédisent avec précision la survie au cancer du poumon et découvrent trois sous-types mortels](https://hyper.ai/news/39435)**

- **Article de recherche :** [https://hyper.ai/news/39435](https://hyper.ai/news/39435)
- **Équipe de recherche :** Cornell University, Regeneron Pharmaceuticals
- **Travaux connexes :** Graph-Encoded Mixture Survival (GEMS), EHR databases, ConcertAI Patient360™ NSCLC dataset, GNN encoders.
- **Revue de publication :** Nature Communication, 2025.05
- **Lien vers l’article :** [Identification of predictive subphenotypes for clinical outcomes using real world data and machine learning](https://doi.org/10.1038/s41467-025-59092-8)

### **54. [Un modèle d’IA à stratégie de fusion prédit le risque de mortalité lié au choc septique](https://hyper.ai/news/39713)**

- **Article de recherche :** [https://hyper.ai/news/39713](https://hyper.ai/news/39713)
- **Équipe de recherche :** Tongji Hospital, HUST
- **Travaux connexes :** Septic shock, TOPSIS-based Classification Fusion (TCF) models, machine learning models.
- **Revue de publication :** npj digital medicine, 2025.04
- **Lien vers l’article :** [Artificial intelligence based multispecialty mortality prediction models for septic shock in a multicenter retrospective study](https://go.hyper.ai/faMLL)

### **55. [Le premier modèle clinique Graph-of-Thought au monde, appliqué à l’encéphalopathie hypoxo-ischémique, améliore de 15 % la prédiction des résultats neurocognitifs](https://hyper.ai/news/40828)**

- **Article de recherche :** [https://hyper.ai/news/40828](https://hyper.ai/news/40828)
- **Équipe de recherche :** Boston Children's Hospital, Harvard Medical School, NYU, MIT-IBM Watson Lab
- **Travaux connexes :** Medical reasoning benchmarks, Clinical Graph-of-Thought (CGoT) model, HIE-Reasoning dataset.
- **Revue de publication :** ICML 2025, 2025.06
- **Lien vers l’article :** [Visual and Domain Knowledge for Professional-level Graph-of-Thought Medical Reasoning](https://openreview.net/forum?id=tnyxtaSve5)

### **56. [La modélisation fine des cohortes à partir de données de DSE multidimensionnelles améliore de 16,3 % la prédiction de la durée d’hospitalisation](https://hyper.ai/news/41303)**

- **Article de recherche :** [https://hyper.ai/news/41303](https://hyper.ai/news/41303)
- **Équipe de recherche :** NUS, Zhejiang University
- **Travaux connexes :** EHR, NeuralCohort representation learning method, MIMIC-III, MIMIC-IV, Diabetes130.
- **Revue de publication :** ICML 2025, 2025.06
- **Lien vers l’article :** [NeuralCohort: Cohort-aware Neural Representation Learning for Healthcare Analytics](https://openreview.net/forum?id=bqQVa6VRvm)

### **57. [Le modèle d’apprentissage profond APEX sélectionne des candidats antibiotiques potentiels](https://hyper.ai/news/42377)**

- **Article de recherche :** [https://hyper.ai/news/42377](https://hyper.ai/news/42377)
- **Équipe de recherche :** University of Pennsylvania
- **Travaux connexes :** Global venom databases, APEX model prediction, antibiotic R&D, animal venoms.
- **Revue de publication :** Nature Communications, 2025.07
- **Lien vers l’article :** [Computational exploration of global venoms for antimicrobial discovery with Venomics artificial intelligence](https://www.nature.com/articles/s41467-025-60051-6)

### **58. [L’épidémiologie des eaux usées associée au séquençage génétique et à l’apprentissage automatique : ICA-Var détecte les virus jusqu’à quatre semaines à l’avance](https://hyper.ai/news/42585)**

- **Article de recherche :** [https://hyper.ai/news/42585](https://hyper.ai/news/42585)
- **Équipe de recherche :** UNLV
- **Travaux connexes :** Unsupervised machine learning pipelines, Independent Component Analysis, virus detection, dual regression methods, ICA-Var.
- **Revue de publication :** Nature Communications, 2025.07
- **Lien vers l’article :** [Early detection of emerging SARS-CoV-2 Variants from wastewater through genome sequencing and machine learning](https://www.nature.com/articles/s41467-025-61280-5)

### **59. [Le modèle de diffusion bidirectionnel de pont brownien améliore la reproductibilité de la coloration virtuelle](https://hyper.ai/news/42959)**

- **Article de recherche :** [https://hyper.ai/news/42959](https://hyper.ai/news/42959)
- **Équipe de recherche :** UCLA
- **Travaux connexes :** Imaging mass spectrometry, diffusion models, Brownian bridge diffusion models, SNR-based channel selection strategies.
- **Revue de publication :** Science Advances, 2025.08
- **Lien vers l’article :** [Virtual staining of label-free tissue in imaging mass spectrometry](https://go.hyper.ai/X9GEn)

### **60. [Medical GraphRAG bat les records de précision en questions-réponses et atteint le niveau SOTA sur 11 bancs d’essai](https://hyper.ai/news/43064)**

- **Article de recherche :** [https://hyper.ai/news/43064](https://hyper.ai/news/43064)
- **Équipe de recherche :** Oxford, CMU, University of Edinburgh
- **Travaux connexes :** RAG, Medical GraphRAG, U-Retrieval methods, MIMIC-IV, FakeHealth, PubHealth.
- **Revue de publication :** ACL 2025, 2025.07
- **Lien vers l’article :** [Medical Graph RAG: Towards Safe Medical Large Language Model via Graph Retrieval-Augmented Generation](https://go.hyper.ai/OaMIE)

### **61. [Healthcare Agent détecte automatiquement les problèmes d’éthique médicale et de sécurité](https://hyper.ai/news/44006)**

- **Article de recherche :** [https://hyper.ai/news/44006](https://hyper.ai/news/44006)
- **Équipe de recherche :** Wuhan University, NTU
- **Travaux connexes :** LLMs, medical consultations, Healthcare Agent, MedDialog dataset.
- **Revue de publication :** Nature Artificial Intelligence, 2025.09
- **Lien vers l’article :** [Healthcare agent: eliciting the power of large language models for medical consultation](https://go.hyper.ai/09lYX)

### **62. [Le classificateur d’images de cellules sanguines CytoDiffusion aide à détecter la leucémie et dépasse les experts cliniques](https://hyper.ai/news/47004)**

- **Article de recherche :** [https://hyper.ai/news/47004](https://hyper.ai/news/47004)
- **Équipe de recherche :** Cambridge University
- **Travaux connexes :** Deep learning, medical image analysis, CNNs, CytoDiffusion, CytoData dataset, Raabin-WBC dataset, diffusion models.
- **Revue de publication :** Nature, 2025.11
- **Lien vers l’article :** [Deep generative classification of blood cell morphology](https://www.nature.com/articles/s42256-025-01122-7)

### **63. [L’équipe de l’UCL propose MORPHFED, un cadre d’apprentissage fédéré pour analyser la morphologie sanguine entre établissements](https://hyper.ai/news/49373)**

- **Article de recherche :** [https://hyper.ai/news/49373](https://hyper.ai/news/49373)
- **Équipe de recherche :** UCL Computer Science Department
- **Travaux connexes :** Blood morphology examinations, white blood cell morphology analysis, Federated Learning, privacy-preserving medical AI.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [MORPHFED: Federated Learning for Cross-institutional Blood Morphology Analysis](https://arxiv.org/abs/2601.04121)

### **64. [Une équipe française propose un cadre d’apprentissage automatique explicable pour prédire avec précision la mortalité des candidats à une transplantation hépatique pour un CHC](https://hyper.ai/news/49742)**

- **Article de recherche :** [https://hyper.ai/news/49742](https://hyper.ai/news/49742)
- **Équipe de recherche :** Télécom Paris et Université Paris-Saclay
- **Travaux connexes :** Hepatocellular carcinoma (HCC), liver transplant waitlist mortality risk, Ensemble Learning, SHAP analysis.
- **Revue de publication :** Health Data Science
- **Lien vers l’article :** [Explainable Mortality Prediction for Liver Transplant Candidates with Hepatocellular Carcinoma: A Supervised Clustering Approach](https://spj.science.org/doi/10.34133/hds.0295)

### **65. [Stanford propose Merlin, le premier modèle vision-langage natif 3D pour les scanners CT abdominaux](https://hyper.ai/news/49864)**

- **Article de recherche :** [https://hyper.ai/news/49864](https://hyper.ai/news/49864)
- **Équipe de recherche :** Stanford University
- **Travaux connexes :** Abdominal Computed Tomography (CT), 3D Vision-Language Models (3D VLMs), Merlin, Electronic Health Records (EHR).
- **Revue de publication :** Nature
- **Lien vers l’article :** [Merlin: a computed tomography vision–language foundation model and dataset](https://www.nature.com/articles/s41586-026-10181-8)

## **IA + chimie des matériaux**

*(Entries continue following the exact identical structure)*

### **1. [Un cadre informatique à haut débit génère 120 000 nouveaux candidats MOF en 33 minutes](https://hyper.ai/news/30269)**

- **Article de recherche :** [https://hyper.ai/news/30269](https://hyper.ai/news/30269)
- **Équipe de recherche :** Équipe de recherche de Eliu A. Huerta à Argonne National Laboratory
- **Travaux connexes :** hMOFs dataset, generative AI, GHP-MOFsassemble, MMPA, DiffLinker, CGCNN, GCMC.
- **Revue de publication :** Nature, 2024.02
- **Lien vers l’article :** [A generative artificial intelligence framework based on a molecular diffusion model for the design of metal-organic frameworks for carbon capture](https://www.nature.com/articles/s42004-023-01090-2)

### **2. [Un algorithme d’apprentissage automatique sélectionne des matériaux d’électrode P-SOC](https://hyper.ai/news/29069)**

- **Article de recherche :** [https://hyper.ai/news/29069](https://hyper.ai/news/29069)
- **Équipe de recherche :** Équipe de recherche de Siyu Ye à Guangzhou University
- **Travaux connexes :** XGBoost, machine learning models, RF, DFT. Le matériau d’électrode LCN91 a été sélectionné avec succès.
- **Revue de publication :** ADVANCED FUNCTIONAL MATERIALS, 2023.12
- **Lien vers l’article :** [Machine-Learning Assisted Screening Proton Conducting Co/Fe based Oxide for the Air Electrode of Protonic Solid Oxide Cell](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202309855)

### **3. [Le modèle d’apprentissage automatique SEN prédit les propriétés des matériaux avec une grande précision](https://hyper.ai/news/28410)**

- **Article de recherche :** [https://hyper.ai/news/28410](https://hyper.ai/news/28410)
- **Équipe de recherche :** Équipe de Huashan Li et Biao Wang à Sun Yat-sen University
- **Travaux connexes :** Materials Project database, SEN, capsule mechanism, deep learning.
- **Revue de publication :** Nature Communications, 2023.08
- **Lien vers l’article :** [Material symmetry recognition and property prediction accomplished by crystal capsule representation](https://www.nature.com/articles/s41467-023-40756-2)

### **4. [L’outil d’apprentissage profond GNoME découvre 2,2 millions de nouveaux cristaux](https://hyper.ai/news/28347)**

- **Article de recherche :** [https://hyper.ai/news/28347](https://hyper.ai/news/28347)
- **Équipe de recherche :** Équipe de recherche de Google DeepMind
- **Travaux connexes :** GNoME database, GNoME, SOTA GNN models, deep learning, Materials Project, OQMD, WBM, ICSD.
- **Revue de publication :** Nature, 2023.11
- **Lien vers l’article :** [Scaling deep learning for materials discovery](https://www.nature.com/articles/s41586-023-06735-9)

### **5. [Le réseau neuronal à atomes incorporés de façon récursive sous l’effet d’un champ décrit précisément les variations d’intensité et de direction du champ externe](https://hyper.ai/news/28285)**

- **Article de recherche :** [https://hyper.ai/news/28285](https://hyper.ai/news/28285)
- **Équipe de recherche :** Équipe de Bin Jiang à USTC
- **Travaux connexes :** Field-induced recursively embedded atom neural network FIREANN, FIREANN-wF model.
- **Revue de publication :** Nature Communication, 2023.10
- **Lien vers l’article :** [Universal machine learning for the response of atomistic systems to external fields](https://www.nature.com/articles/s41467-023-42148-y)

### **6. [L’apprentissage automatique prédit les isothermes d’adsorption de l’eau dans les matériaux poreux](https://hyper.ai/news/28260)**

- **Article de recherche :** [https://hyper.ai/news/28260](https://hyper.ai/news/28260)
- **Équipe de recherche :** Équipe de Song Li à HUST
- **Travaux connexes :** EWAID database, machine learning models, RF, ANN.
- **Revue de publication :** Journal of Materials Chemistry A, 2023.09
- **Lien vers l’article :** [Machine learning-assisted prediction of water adsorption isotherms and cooling performance](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA03586G)

### **7. [L’apprentissage automatique optimise les co-catalyseurs des photoanodes BiVO(4)](https://hyper.ai/news/28013)**

- **Article de recherche :** [https://hyper.ai/news/28013](https://hyper.ai/news/28013)
- **Équipe de recherche :** Équipe de Hongwei Zhu à Tsinghua University
- **Travaux connexes :** ML, neural networks, AdaBoost algorithm, Gradient Boosting, self-explainable models, Bagging algorithms, cross-validation.
- **Revue de publication :** Journal of Materials Chemistry A, 2023.10
- **Lien vers l’article :** [A comprehensive machine learning strategy for designing high-performance photoanode catalysts](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA04148D)

### **8. [L’algorithme RetroExplainer effectue des prédictions de rétrosynthèse à l’aide de l’apprentissage profond](https://hyper.ai/news/27406)**

- **Article de recherche :** [https://hyper.ai/news/27406](https://hyper.ai/news/27406)
- **Équipe de recherche :** Shandong University, UESTC
- **Travaux connexes :** RetroExplainer, deep learning, MSMS-GT, DAMT, interpretable decision modules.
- **Revue de publication :** Nature Communications, 2023.10
- **Lien vers l’article :** [Retrosynthesis prediction with an interpretable deep-learning framework based on molecular assembly tasks](https://www.nature.com/articles/s41467-023-41698-5)

### **9. [Des réseaux neuronaux profonds et le traitement automatique du langage servent à développer des alliages résistants à la corrosion](https://hyper.ai/news/25891)**

- **Article de recherche :** [https://hyper.ai/news/25891](https://hyper.ai/news/25891)
- **Équipe de recherche :** Max-Planck-Institut für Eisenforschung (Germany)
- **Travaux connexes :** DNN, NLP. Le modèle lit des données textuelles sur le traitement des alliages et les méthodes d’essai, et peut prédire de nouveaux éléments.
- **Revue de publication :** Science Advances, 2023.08
- **Lien vers l’article :** [Enhancing corrosion-resistant alloy design through natural language processing and deep learning](https://www.science.org/doi/10.1126/sciadv.adg7992)

### **10. [L’apprentissage profond détermine la structure interne des matériaux à partir d’observations de surface](https://hyper.ai/news/25859)**

- **Article de recherche :** [https://hyper.ai/news/25859](https://hyper.ai/news/25859)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** Deep learning, FEA computations, Abaqus visualization tools, GAN, ViViT, CNN.
- **Revue de publication :** Advanced Materials, 2023.03
- **Lien vers l’article :** [Fill in the Blank: Transferrable Deep Learning Approaches to Recover Missing Physical Field Information](https://onlinelibrary.wiley.com/doi/full/10.1002/adma.202301449)

### **11. [Trois nouveaux matériaux développés à l’aide de scintillateurs à rayons X innovants](https://hyper.ai/news/31465)**

- **Article de recherche :** [https://hyper.ai/news/31465](https://hyper.ai/news/31465)
- **Équipe de recherche :** Équipe de recherche de Hailei Zhang à Hebei University
- **Travaux connexes :** Water-dispersible X-ray scintillators, nanomaterials, polyurethane foam, X-ray imaging flexible hydrogel scintillator screens, multi-level anti-counterfeiting info-encryption composite hydrogels.
- **Revue de publication :** Nature Communications, 2024.03
- **Lien vers l’article :** [Water-dispersible X-ray scintillators enabling coating and blending with polymer materials for multiple applications](https://www.nature.com/articles/s41467-024-46287-8)

### **12. [L’apprentissage semi-supervisé extrait des informations cachées de données non étiquetées](https://hyper.ai/news/31089)**

- **Article de recherche :** [https://hyper.ai/news/31089](https://hyper.ai/news/31089)
- **Équipe de recherche :** Équipe de recherche de Jiayu Wan à SJTU
- **Travaux connexes :** Semi-supervised learning, unlabeled data, Bayesian co-training, partial-view models, complete-view models. La précision de prédiction de la durée de vie des batteries au lithium a augmenté de 20 %.
- **Revue de publication :** Joule, 2024.03
- **Lien vers l’article :** [Semi-supervised learning for explainable few-shot battery lifetime prediction](https://doi.org/10.1016/j.joule.2024.02.020 )

### **13. [Extraction automatisée des connaissances fondée sur AutoML](https://hyper.ai/news/30920)**

- **Article de recherche :** [https://hyper.ai/news/30920](https://hyper.ai/news/30920)
- **Équipe de recherche :** Équipe de recherche de Yulian He à SJTU
- **Travaux connexes :** AutoML, catalysts, chemisorption energy, Eads value, feature deletion experiments, neural networks, high-throughput DFT.
- **Revue de publication :** PNAS, 2024.03
- **Lien vers l’article :** [Interpreting chemisorption strength with AutoML-based feature deletion experiments](https://hyper.ai/news/30920)

### **14. [Uni-MOF : un modèle d’apprentissage automatique prédit le comportement d’adsorption des matériaux MOF 3D](https://hyper.ai/news/30663)**

- **Article de recherche :** [https://hyper.ai/news/30663](https://hyper.ai/news/30663)
- **Équipe de recherche :** Diannan Lu's équipe de recherche, Dept. of Chemical Engineering, Tsinghua University
- **Travaux connexes :** hMOFs50 database, MOF/COF databases, fine-tuning Uni-MOF. Plus de 630 000 configurations spatiales 3D et relations de liaison interatomique ont été évaluées.
- **Revue de publication :** Nature Communications, 2024.03
- **Lien vers l’article :** [A comprehensive transformer-based approach for high-accuracy gas adsorption predictions in metal-organic frameworks](https://www.nature.com/articles/s41467-024-46276-x)

### **15. [Les microélectroniques accélèrent vers l’ère post-Moore ! L’association d’un DNN à une technologie de nanomembranes analyse avec précision les angles d’incidence de la lumière](https://hyper.ai/news/32326)**

- **Article de recherche :** [https://hyper.ai/news/32326](https://hyper.ai/news/32326)
- **Équipe de recherche :** Équipe de Yongfeng Mei à Fudan University
- **Travaux connexes :** Finite element models, strained nanomembrane release models, Fick's laws, Deep Neural Networks, 3D photodetectors, angle-sensitive detection models.
- **Revue de publication :** Nature Communications, 2024.04
- **Lien vers l’article :** [Multilevel design and construction in nanomembrane rolling for three-dimensional angle-sensitive photodetection](https://www.nature.com/articles/s41467-024-47405-2)

### **16. [Repousser les limites de performance des batteries au lithium grâce à un modèle électrochimique simplifié fondé sur l’apprentissage d’ensemble](https://hyper.ai/news/32323)**

- **Article de recherche :** [https://hyper.ai/news/32323](https://hyper.ai/news/32323)
- **Équipe de recherche :** Équipe de Jianqiang Kang à Wuhan University of Technology
- **Travaux connexes :** Simplified electrochemical models, ensemble learning models, machine learning, First-order Inertia Element (FIE), Discrete-time Realization Algorithm (DRA), Fractional-Order Padé approximation (FOM), Three-Parameter Parabolic approximation (TPM).
- **Revue de publication :** iScience, 2024.05
- **Lien vers l’article :** [A simplified electrochemical model for lithium-ion batteries based on ensemble learning](https://www.sciencedirect.com/science/article/pii/S2589004224009076)

### **17. [Le plus puissant aimant supraconducteur à base de fer, conçu grâce à l’apprentissage automatique](https://hyper.ai/news/32556)**

- **Article de recherche :** [https://hyper.ai/news/32556](https://hyper.ai/news/32556)
- **Équipe de recherche :** Tokyo University of Agriculture et Technology
- **Travaux connexes :** BOXVIA machine learning, data-driven loops, numerical simulations, iron-based superconducting permanent magnet Ba122, Field-Cooled Magnetization (FCM) models.
- **Revue de publication :** NPG Asia Materials, 2024.06
- **Lien vers l’article :** [Superstrength permanent magnets with iron-based superconductors by data- and researcher-driven process design](https://www.nature.com/articles/s41427-024-00549-5)

### **18. [Les réseaux neuronaux remplacent la théorie de la fonctionnelle de la densité ! Un modèle universel des matériaux produit des prédictions ultra-précises](https://hyper.ai/news/32891)**

- **Article de recherche :** [https://hyper.ai/news/32891](https://hyper.ai/news/32891)
- **Équipe de recherche :** Équipe de Yong Xu et Wenhui Duan au département de Physics, Tsinghua University
- **Travaux connexes :** Materials Project database, Deep-learning DFT Hamiltonian (DeepH) method, universal materials models, neural networks, equivariant neural networks, AiiDA framework.
- **Revue de publication :** Science Bulletin, 2024.06
- **Lien vers l’article :** [Universal materials model of deep-learning density functional theory Hamiltonian](https://doi.org/10.1016/j.scib.2024.06.011)

### **19. [Le cadre de fonctionnelle de densité par réseau neuronal ouvre la boîte noire de la prédiction de la structure électronique de la matière](https://hyper.ai/news/33525)**

- **Article de recherche :** [https://hyper.ai/news/33525](https://hyper.ai/news/33525)
- **Équipe de recherche :** Équipe de Yong Xu et Wenhui Duan à Tsinghua University
- **Travaux connexes :** Neural-network DFT, variational DFT, equivariant neural networks, Julia language, Zygote AD framework, deep learning, unsupervised learning, DFT.
- **Revue de publication :** Phys. Rev. Lett., 2024.08
- **Lien vers l’article :** [Neural-network density functional theory based on variational energy minimization](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.076401)

### **20. [Une première architecture d’entraînement entièrement en mode direct pour le calcul optique par réseaux neuronaux marque une avancée majeure pour les puces optiques nationales](https://hyper.ai/news/33440)**

- **Article de recherche :** [https://hyper.ai/news/33440](https://hyper.ai/news/33440)
- **Équipe de recherche :** Équipe de recherche de Qionghai Dai et Lu Fang à Tsinghua University
- **Travaux connexes :** Neural networks, fully forward mode, machine learning, MNIST, Fashion-MNIST, CIFAR-10, ImageNet, MWD, Iris dataset, Chromium target datasets.
- **Revue de publication :** Nature, 2024.08
- **Lien vers l’article :** [Fully forward mode training for optical neural networks](https://www.nature.com/articles/s41586-024-07687-4)

*(En raison des contraintes de longueur, cette traduction reprend fidèlement la structure fournie. Pour préserver l’intégralité du formatage et la cohérence, les mêmes règles de traduction s’appliquent aux sections 21 à 54 de chimie des matériaux IA+, ainsi qu’à l’intégralité des sections zoologie-botanique IA+, agriculture-foresterie-élevage IA+, météorologie IA+, astronomie IA+, catastrophes naturelles IA+, politique AI4S et autres. Voici la traduction des articles classés restants, conformément au contenu fourni.)*

### **21. [Le LLM de chimie ChemLLM couvre 7 millions de questions-réponses et rivalise avec GPT-4 en expertise](https://hyper.ai/news/34170)**

- **Article de recherche :** [https://hyper.ai/news/34170](https://hyper.ai/news/34170)
- **Équipe de recherche :** Shanghai AI Lab
- **Travaux connexes :** Large-scale chemical dataset ChemData, ChemPref-10K English/Chinese datasets, C-MHChem dataset, ChemBench4K, ChemBench, Multi-Corpus, NLP tasks.
- **Revue de publication :** arXiv, 2024.02
- **Lien vers l’article :** [ChemLLM: A Chemical Large Language Model](https://arxiv.org/abs/2402.06852)

### **22. [Des microspectromètres adaptatifs à l’IA, fabricables à l’échelle d’une plaquette](https://hyper.ai/news/34075)**

- **Article de recherche :** [https://hyper.ai/news/34075](https://hyper.ai/news/34075)
- **Équipe de recherche :** Équipe de Yongfeng Mei à Fudan University
- **Travaux connexes :** Optical spectrometers, miniaturized reconstructive spectrometers, CMOS IC processes, narrow-band channel current datasets.
- **Revue de publication :** PNAS, 2024.08
- **Lien vers l’article :** [CMOS-Compatible Reconstructive Spectrometers with Self-Referencing Integrated Fabry-Perot Resonatorsl](https://www.pnas.org/doi/10.1073/pnas.2403950121)

### **23. [Le modèle GNNOpt identifie des centaines de candidats pour les cellules solaires et les matériaux quantiques](https://hyper.ai/news/35009)**

- **Article de recherche :** [https://hyper.ai/news/35009](https://hyper.ai/news/35009)
- **Équipe de recherche :** Tohoku University, MIT
- **Travaux connexes :** DFT calculations, GNNOpt, ensemble embeddings, equivariant GNNs, Materials Project database.
- **Revue de publication :** Advanced Materials, 2024.06
- **Lien vers l’article :** [Universal Ensemble-Embedding Graph Neural Network for Direct Prediction of Optical Spectra from Crystal Structures](https://onlinelibrary.wiley.com/doi/epdf/10.1002/adma.202409175)

### **24. [Le jeu de données ouvert OMat24 contient 110 millions de résultats de calcul DFT](https://hyper.ai/news/35515)**

- **Article de recherche :** [https://hyper.ai/news/35515](https://hyper.ai/news/35515)
- **Équipe de recherche :** Meta
- **Travaux connexes :** Open Materials 2024 (OMat24), EquformerV2 (eqV2), ab initio MD.
- **Revue de publication :** arxiv, 2024.10
- **Lien vers l’article :** [Open Materials 2024 (OMat24) Inorganic Materials Dataset and Models](https://arxiv.org/pdf/2410.12771)

### **25. [Un nouvel alliage réfractaire à haute entropie synthétisé par apprentissage automatique présente une excellente ductilité à température ambiante](https://hyper.ai/news/35536)**

- **Article de recherche :** [https://hyper.ai/news/35536](https://hyper.ai/news/35536)
- **Équipe de recherche :** Équipe de Yanjing Su à University of Science et Technology Beijing
- **Travaux connexes :** ML combined with genetic search, clustering analysis, Multi-Objective Optimization (MOO) frameworks.
- **Revue de publication :** Engineering, 2024.09
- **Lien vers l’article :** [Machine-Learning-Assisted Compositional Design of Refractory High-Entropy Alloys with Optimal Strength and Ductility](https://www.sciencedirect.com/science/article/pii/S2095809924005113 )

### **26. [Le modèle génératif de matériaux FlowLLM s’appuie sur un jeu de données couvrant plus de 45 000 matériaux](https://hyper.ai/news/35846)**

- **Article de recherche :** [https://hyper.ai/news/35846](https://hyper.ai/news/35846)
- **Équipe de recherche :** Meta FAIR, University of Amsterdam
- **Travaux connexes :** FlowLLM, S.U.N. material generation, LLMs, Riemannian Flow Matching (RFM), MP-20 dataset, LoRA.
- **Revue de publication :** NeurIPS 2024, 2024.10
- **Lien vers l’article :** [FlowLLM: Flow Matching for Material Generation with Large Language Models as Base Distributions](https://arxiv.org/pdf/2410.23405)

### **27. [L’apprentissage actif identifie 14 000 oxydes à haute entropie et sélectionne quatre catalyseurs très actifs pour la production d’hydrogène](https://hyper.ai/news/36352)**

- **Article de recherche :** [https://hyper.ai/news/36352](https://hyper.ai/news/36352)
- **Équipe de recherche :** Équipe de Xun Wang à Tsinghua, Liang Wu à SJTU, Shengqi Chu à IHEP CAS, Guang Lin à Purdue, Yan Xiang à Duke
- **Travaux connexes :** Active Learning (AL), Kennard-Stone sampling, XRD, CrMnCoNiCu catalysts.
- **Revue de publication :** Journal of the American Chemical Society, 2024.10
- **Lien vers l’article :** [Active Learning Guided Discovery of High Entropy Oxides Featuring High H2‑production](https://pubs.acs.org/doi/10.1021/jacs.4c06272)

### **28. [Le modèle d’apprentissage profond BETE-NET multiplie par cinq l’efficacité de la recherche de matériaux supraconducteurs](https://hyper.ai/news/37658)**

- **Article de recherche :** [https://hyper.ai/news/37658](https://hyper.ai/news/37658)
- **Équipe de recherche :** University of Florida, University of Tennessee
- **Travaux connexes :** BETE-NET, α²F(ω) datasets, Eliashberg spectral function datasets.
- **Revue de publication :** npj Computational Materials, 2025.01
- **Lien vers l’article :** [Accelerating superconductor discovery through tempered deep learning of the electron-phonon spectral function](https://www.nature.com/articles/s41524-024-01475-4)

### **29. [La technologie des arbres de décision à gradient boosting (GBDT) améliore encore la prédiction précise de la résistance à l’oxydation des alliages à haute entropie](https://hyper.ai/news/37723)**

- **Article de recherche :** [https://hyper.ai/news/37723](https://hyper.ai/news/37723)
- **Équipe de recherche :** Joint équipe de University of Bordeaux, NIMS (Japan), NTHU (Taiwan), KU Leuven, WEL Research Institute
- **Travaux connexes :** GBDT technology, XGBoost algorithm, high-temperature materials, high-entropy alloys (RHEAs and RCCAs).
- **Revue de publication :** Scripta Materialia, 2025.01
- **Lien vers l’article :** [Advancing refractory high entropy alloy development with AI-predictive models for high temperature oxidation resistance](https://doi.org/10.1016/j.scriptamat.2024.116394)

### **30. [Le cadre de conception moléculaire RingFormer prédit plus précisément les propriétés optoélectroniques des molécules organiques](https://hyper.ai/news/37870)**

- **Article de recherche :** [https://hyper.ai/news/37870](https://hyper.ai/news/37870)
- **Équipe de recherche :** The Hong Kong Polytechnic University
- **Travaux connexes :** Molecular design, Transformer architectures, organic solar cells, Graph Neural Networks, RingFormer.
- **Revue de publication :** AAAI 2025, 2024.12
- **Lien vers l’article :** [RingFormer: A Ring-Enhanced Graph Transformer for Organic Solar Cell Property Prediction](https://doi.org/10.48550/arXiv.2412.09030)

### **31. [La méthode de planification de la rétrosynthèse inorganique Retrieval-Retro améliore l’efficacité et la précision de la synthèse des matériaux inorganiques](https://hyper.ai/news/37969)**

- **Article de recherche :** [https://hyper.ai/news/37969](https://hyper.ai/news/37969)
- **Équipe de recherche :** KRICT, KAIST
- **Travaux connexes :** Retrieval-Retro, Convolutional VAEs, masked precursor completion retrievers, neural reaction energy retrievers.
- **Revue de publication :** NeurIPS 2024, 2024.10
- **Lien vers l’article :** [Retrieval-Retro: Retrieval-based Inorganic Retrosynthesis with Expert Knowledge](https://doi.org/10.48550/arXiv.2410.21341)

### **32. [Des grands modèles décryptent les mécanismes de conduction des électrolytes solides hydrurés et établissent un modèle fiable de prédiction de l’énergie d’activation](https://hyper.ai/news/39173)**

- **Article de recherche :** [https://hyper.ai/news/39173](https://hyper.ai/news/39173)
- **Équipe de recherche :** Tohoku University, Sichuan University, Shibaura Institute of Technology
- **Travaux connexes :** Solid-state electrolytes (SSEs), LLMs, ab initio metadynamics (MetaD).
- **Revue de publication :** Angewandte Chemie-International Edition, 2025.04
- **Lien vers l’article :** [Unraveling the Complexity of Divalent Hydride Electrolytes in Solid-State Batteries via a Data-Driven Framework with Large Language Model](https://go.hyper.ai/isQRi)

### **33. [La recherche de données de spectrométrie de masse à l’échelle du téraoctet, rendue possible par l’apprentissage automatique, révèle des réactions chimiques inconnues](https://hyper.ai/news/39224)**

- **Article de recherche :** [https://hyper.ai/news/39224](https://hyper.ai/news/39224)
- **Équipe de recherche :** Russian Academy of Sciences et d’autres
- **Travaux connexes :** Mass spectrometry, ML-driven search engine MEDUSA Search, PubChem database.
- **Revue de publication :** Nature Communications, 2025.01
- **Lien vers l’article :** [Discovering organic reactions with a machine-learning-powered deciphering of tera-scale mass spectrometry data](https://go.hyper.ai/ak7bN)

### **34. [La méthode de résolution structurale générative PXRDnet, fondée sur des modèles de diffusion, résout 200 nanocristaux simulés complexes](https://hyper.ai/news/39287)**

- **Article de recherche :** [https://hyper.ai/news/39287](https://hyper.ai/news/39287)
- **Équipe de recherche :** Columbia University, Stanford University
- **Travaux connexes :** X-ray diffraction, PXRDnet, MP-20-PXRD benchmark dataset, Materials Project database, CDVAE architecture, PXRD regressors.
- **Revue de publication :** Nature Materials, 2025.04
- **Lien vers l’article :** [Ab initio structure solutions from nanocrystalline powder diffraction data via diffusion models](https://go.hyper.ai/r1K6b)

### **35. [Le modèle DreaMS couvre 200 millions de spectres de masse moléculaires et constitue GeMS, le plus grand jeu de données de spectrométrie de masse au monde](https://hyper.ai/news/40201)**

- **Article de recherche :** [https://hyper.ai/news/40201](https://hyper.ai/news/40201)
- **Équipe de recherche :** Institute of Organic Chemistry et Biochemistry, Czech Academy of Sciences
- **Travaux connexes :** GeMS dataset, Locality-Sensitive Hashing (LSH), BERT architectures, self-supervised learning, Fourier features, linear probing.
- **Revue de publication :** Nature Biotechnology, 2025.05
- **Lien vers l’article :** [Self-supervised learning of molecular representations from millions of tandem mass spectra using DreaMS](https://go.hyper.ai/uNbqL)

### **36. [Le cadre d’apprentissage automatique équivariant accélère les simulations à grande échelle des champs électriques dans les matériaux](https://hyper.ai/news/40600)**

- **Article de recherche :** [https://hyper.ai/news/40600](https://hyper.ai/news/40600)
- **Équipe de recherche :** Harvard University, Robert Bosch LLC
- **Travaux connexes :** Machine learning frameworks, neural network architectures, material vibrations, dielectric properties, ferroelectric hysteresis.
- **Revue de publication :** Nature Communications, 2025.04
- **Lien vers l’article :** [Unified differentiable learning of electric response](https://go.hyper.ai/18TWg)

### **37. [Une méthode d’intégration de données multi-sources sélectionne 25 types de substituts au clinker de ciment, soit l’équivalent de 1,2 milliard de tonnes de gaz à effet de serre évitées](https://hyper.ai/news/40742)**

- **Article de recherche :** [https://hyper.ai/news/40742](https://hyper.ai/news/40742)
- **Équipe de recherche :** Soroush Mahjoubi et Elsa A. Olivetti (MIT)
- **Travaux connexes :** LLMs, multi-task neural networks, reactivity evaluation frameworks.
- **Revue de publication :** Communication Materials, 2025.05
- **Lien vers l’article :** [Data-driven material screening of secondary and natural cementitious precursors](https://go.hyper.ai/ZOAaW)

### **38. [UNIMATE réalise pour la première fois une modélisation unifiée de la génération de topologies et de la prédiction de propriétés](https://hyper.ai/news/41186)**

- **Article de recherche :** [https://hyper.ai/news/41186](https://hyper.ai/news/41186)
- **Équipe de recherche :** Virginia Tech, Meta AI
- **Travaux connexes :** Metamaterials, 3D topologies, machine learning, UNIMATE model, mechanical metamaterial benchmarks.
- **Revue de publication :** ICML 2025, 2025.06
- **Lien vers l’article :** [UNIMATE: A Unified Model for Mechanical Metamaterial Generation, Property Prediction, and Condition Confirmation](https://go.hyper.ai/FoAWw)

### **39. [Le cadre Transformer de diffusion tous atomes génère pour la première fois de façon unifiée des systèmes atomiques périodiques et apériodiques](https://hyper.ai/news/41503)**

- **Article de recherche :** [https://hyper.ai/news/41503](https://hyper.ai/news/41503)
- **Équipe de recherche :** Meta FAIR, Cambridge University, MIT
- **Travaux connexes :** Transformers, MP20 dataset, QM9 dataset, GEOM-DRUGS dataset, QMOF dataset.
- **Revue de publication :** ICML 2025, 2025.06
- **Lien vers l’article :** [All-atom Diffusion Transformers: Unified generative modelling of molecules and materials](https://go.hyper.ai/27d7U)

### **40. [Le modèle FASTSOLV prédit la solubilité des petites molécules à toute température et accélère l’inférence d’un facteur 50](https://hyper.ai/news/43318)**

- **Article de recherche :** [https://hyper.ai/news/43318](https://hyper.ai/news/43318)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** Small molecule solubility prediction, BigSolDB dataset, SolProp dataset, Leeds dataset, FASTSOLV model.
- **Revue de publication :** Nature Communication, 2025.08
- **Lien vers l’article :** [Data-driven organic solubility prediction at the limit of aleatoric uncertainty](https://www.nature.com/articles/s41467-025-62717-7)

### **41. [Une nouvelle méthode fondée sur des modèles d’apprentissage automatique multimodaux prédit les propriétés des matériaux sans structure cristalline complète](https://hyper.ai/news/43410)**

- **Article de recherche :** [https://hyper.ai/news/43410](https://hyper.ai/news/43410)
- **Équipe de recherche :** Department of Chemical Engineering et Applied Chemistry, University of Toronto
- **Travaux connexes :** Multimodal machine learning models, CoRE-2019 dataset, BW20K dataset, QMOF dataset, hMOF dataset.
- **Revue de publication :** Nature Communications, 2025.07
- **Lien vers l’article :** [Connecting metal-organic framework synthesis to applications using multimodal machine learning](https://www.nature.com/articles/s41467-025-62717-7)

### **42. [Le modèle d’IA CGformer intègre de façon novatrice des mécanismes d’attention globale pour faciliter la R&D des matériaux à haute entropie](https://hyper.ai/news/44908)**

- **Article de recherche :** [https://hyper.ai/news/44908](https://hyper.ai/news/44908)
- **Équipe de recherche :** Équipe de Jinjin Li et Fuqiang Huang à AIMS-Lab, SJTU
- **Travaux connexes :** High-entropy materials R&D, AI material design model CGformer, sodium-ion diffusion barrier datasets.
- **Revue de publication :** Matter, 2025.08
- **Lien vers l’article :** [CGformer: Transformer-enhanced crystal graph network with global attention for material property prediction](https://www.cell.com/matter/abstract/S2590-2385(25)00423-0)

### **43. [La nouvelle méthode d’intégration de contraintes structurelles SCIGEN s’adapte à tout modèle de diffusion préentraîné](https://hyper.ai/news/44973)**

- **Article de recherche :** [https://hyper.ai/news/44973](https://hyper.ai/news/44973)
- **Équipe de recherche :** Équipe de Mingda Li à MIT, Michigan State University, Oak Ridge National Laboratory
- **Travaux connexes :** AL (Archimedean lattices) materials database, diffusion models, crystal structure generation, DiffCSP model.
- **Revue de publication :** Nature Materials, 2025.09
- **Lien vers l’article :** [Structural constraint integration in a generative model for the discovery of quantum materials](https://www.nature.com/articles/s41563-025-02355-y)

### **44. [Le modèle d’IA générative SpectroGen, guidé par la physique, réalise une génération intermodale avec une corrélation expérimentale de 99 % à partir d’une seule modalité en entrée](https://hyper.ai/news/45456)**

- **Article de recherche :** [https://hyper.ai/news/45456](https://hyper.ai/news/45456)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** SpectroGen, RRUFF database, VAE framework, physical prior models.
- **Revue de publication :** Matter, 2025.10
- **Lien vers l’article :** [SpectroGen: A physically informed generative artificial intelligence for accelerated cross-modality spectroscopic materials characterization](https://www.cell.com/matter/abstract/S2590-2385(25)00477-1)

### **45. [MOF-ChemUnity reconstitue une connaissance panoramique des MOF et fait entrer la découverte des matériaux dans l’ère de l’IA explicable](https://hyper.ai/news/46723)**

- **Article de recherche :** [https://hyper.ai/news/46723](https://hyper.ai/news/46723)
- **Équipe de recherche :** University of Toronto, Clean Energy Innovation Research Centre (NRC Canada)
- **Travaux connexes :** Materials science, MOF-ChemUnity, CoRE MOF 2019 database, QMOF database, LLMs, Graph-augmented RAG.
- **Revue de publication :** ACS Publications, 2025.11
- **Lien vers l’article :** [MOF-ChemUnity: Literature-Informed Large Language Models for Metal–Organic Framework Research](https://pubs.acs.org/doi/10.1021/jacs.5c11789)

### **46. [Le modèle de potentiel universel léger PET-MAD atteint, avec un minimum d’échantillons, la précision de modèles spécialisés](https://hyper.ai/news/47637)**

- **Article de recherche :** [https://hyper.ai/news/47637](https://hyper.ai/news/47637)
- **Équipe de recherche :** EPFL
- **Travaux connexes :** First-principles calculations, machine learning interatomic potentials, PET-MAD model, Point Edge Transformer structure.
- **Revue de publication :** Nature Communications
- **Lien vers l’article :** [PET-MAD as a lightweight universal interatomic potential for advanced materials modeling](https://www.nature.com/articles/s41467-025-65662-7)

### **47. [Le système d’IA ChemOntology réduit de moitié le coût de recherche des voies réactionnelles en intégrant les connaissances chimiques](https://hyper.ai/news/48069)**

- **Article de recherche :** [https://hyper.ai/news/48069](https://hyper.ai/news/48069)
- **Équipe de recherche :** Hokkaido University
- **Travaux connexes :** Potential Energy Surface (PES), Intrinsic Reaction Coordinates (IRC), Artificial Force Induced Reaction (AFIR), ChemOntology.
- **Revue de publication :** ACS Catalysis
- **Lien vers l’article :** [ChemOntology: A Reusable Explicit Chemical Ontology-Based Method to Expedite Reaction Path Searches](https://pubs.acs.org/doi/10.1021/acscatal.5c06298)

### **48. [Princeton et ses partenaires proposent une méthode LLM de prédiction de l’énergie libre des MOF qui évalue avec grande précision la faisabilité de leur synthèse](https://hyper.ai/news/48685)**

- **Article de recherche :** [https://hyper.ai/news/48685](https://hyper.ai/news/48685)
- **Équipe de recherche :** Princeton University et Colorado School of Mines
- **Travaux connexes :** Metal-Organic Frameworks (MOFs), free energy prediction, Large Language Models (LLM), thermodynamic evaluation.
- **Revue de publication :** JACS (ACS Publications)
- **Lien vers l’article :** [Highly Accurate and Fast Prediction of MOF Free Energy via Machine Learning](https://pubs.acs.org/doi/10.1021/jacs.5c13960)

### **49. [L’équipe de Yale propose le modèle MOSAIC, qui coordonne des LLM pour générer des protocoles de synthèse chimique très fiables](https://hyper.ai/news/48806)**

- **Article de recherche :** [https://hyper.ai/news/48806](https://hyper.ai/news/48806)
- **Équipe de recherche :** Équipe de recherche de l’université Yale
- **Travaux connexes :** Modern synthetic chemistry, LLMs, MOSAIC model, knowledge structuration.
- **Revue de publication :** Nature
- **Lien vers l’article :** [Collective intelligence for AI-assisted chemical synthesiss](https://www.nature.com/articles/s41586-026-10131-4)

### **50. [Le MIT et ses partenaires proposent le modèle de diffusion DiffSyn pour planifier de façon générative les voies de synthèse des matériaux](https://hyper.ai/news/49252)**

- **Article de recherche :** [https://hyper.ai/news/49252](https://hyper.ai/news/49252)
- **Équipe de recherche :** MIT, Technical University of Munich, et Universitat Politècnica de València
- **Travaux connexes :** Material synthesis planning, generative diffusion model DiffSyn, zeolites.
- **Revue de publication :** Nature Computational Science
- **Lien vers l’article :** [DiffSyn: a generative diffusion approach to materials synthesis planning](https://www.nature.com/articles/s43588-025-00949-9)

### **51. [L’université du Michigan et Farasis Energy proposent la méthode « Discovery Learning », qui raccourcit considérablement les cycles de prédiction de la durée de vie des batteries](https://hyper.ai/news/49527)**

- **Article de recherche :** [https://hyper.ai/news/49527](https://hyper.ai/news/49527)
- **Équipe de recherche :** Équipe de Prof. Ziyou Song à University of Michigan, Ann Arbor, et Weiran Jiang à Farasis Energy
- **Travaux connexes :** Battery cycle life prediction, Discovery Learning (DL), Scientific Machine Learning, Lithium-ion pouch cell dataset.
- **Revue de publication :** Nature
- **Lien vers l’article :** [Discovery Learning predicts battery cycle life from minimal experiments](https://www.nature.com/articles/s41586-025-09951-7)

### **52. [Cornell propose le cadre SCAN, qui prédit et explique avec une grande précision les performances des électrolytes de batterie](https://hyper.ai/news/49537)**

- **Article de recherche :** [https://hyper.ai/news/49537](https://hyper.ai/news/49537)
- **Équipe de recherche :** Équipe de recherche de l’université Cornell
- **Travaux connexes :** Salt-solvent chemistry, Non-Aqueous Electrolytes (NAE), SCAN framework, Multi-Feature Network (MFNet), dynamic routing strategy.
- **Revue de publication :** Nature Computational Science
- **Lien vers l’article :** [A dynamic routing-guided interpretable framework for salt–solvent chemistry](https://www.nature.com/articles/s43588-026-00955-5)

### **53. [Le MIT propose DefectNet, grand modèle fondamental de caractérisation et de quantification non destructives des défauts internes des matériaux](https://hyper.ai/news/50122)**

- **Article de recherche :** [https://hyper.ai/news/50122](https://hyper.ai/news/50122)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** Materials science, defect engineering, non-destructive characterization, vibrational spectra and Phonon Density of States (PDoS), DefectNet, Machine Learning Interatomic Potentials (MLIPs).
- **Revue de publication :** arXiv
- **Lien vers l’article :** [A foundation model for non-destructive defect identification from vibrational spectra](https://arxiv.org/abs/2506.00725)

### **54. [Cornell propose la plateforme multi-agents EMSeek pour automatiser intégralement l’analyse d’images de microscopie électronique](https://hyper.ai/news/50298)**

- **Article de recherche :** [https://hyper.ai/news/50298](https://hyper.ai/news/50298)
- **Équipe de recherche :** Équipe de recherche de l’université Cornell
- **Travaux connexes :** Electron Microscopy (EM), multi-agent platform, EMSeek, materials analysis, structural modeling and property inference.
- **Revue de publication :** Science Advances
- **Lien vers l’article :** [Bridging electron microscopy and materials analysis with an autonomous agentic platform](https://www.science.org/doi/10.1126/sciadv.aed0583)

## **IA + zoologie-botanique**

### **1. [SBeA analyse les comportements sociaux des animaux à l’aide d’un cadre d’apprentissage few-shot](https://hyper.ai/news/29353)**

- **Article de recherche :** [https://hyper.ai/news/29353](https://hyper.ai/news/29353)
- **Équipe de recherche :** Équipe de recherche de Pengfei Wei à Shenzhen Institutes of Advanced Technology, CAS
- **Travaux connexes :** PAIR-R24M dataset, bidirectional transfer learning, unsupervised learning, artificial neural networks, identity recognition models. La précision de reconnaissance d’identité multi-animaux dépasse 90 %.
- **Revue de publication :** Nature Machine Intelligence, 2024.01
- **Lien vers l’article :** [Multi-animal 3D social pose estimation, identification and behaviour embedding with a few-shot learning framework](https://www.nature.com/articles/s42256-023-00776-5)

### **2. [Une méthode d’apprentissage profond fondée sur des réseaux siamois capture automatiquement le développement embryonnaire](https://hyper.ai/news/28419)**

- **Article de recherche :** [https://hyper.ai/news/28787](https://hyper.ai/news/28419)
- **Équipe de recherche :** Équipe de recherche de Systems Biologist Patrick Müller et University of Konstanz
- **Travaux connexes :** ImageNet dataset, Siamese networks, deep learning, transfer learning, triplet loss training, iterative training, sub-task training. Identifie les étapes clés du développement embryonnaire sans intervention humaine.
- **Revue de publication :** Nature Methods, 2023.11
- **Lien vers l’article :** [Uncovering developmental time and tempo using deep learning](https://www.nature.com/articles/s41592-023-02083-8)

### **3. [Pipeline systématique de collecte par drone de données sur les phénotypes végétaux afin de prédire les dates optimales de récolte](https://hyper.ai/news/28303)**

- **Article de recherche :** [https://hyper.ai/news/28303](https://hyper.ai/news/28303)
- **Équipe de recherche :** équipes de recherche de the University of Tokyo et Chiba University
- **Travaux connexes :** Profit prediction models, segmentation models, interactive annotation, LabelMe, non-linear regression models, BiSeNet model.
- **Revue de publication :** Plant Phenomics, 2023.09
- **Lien vers l’article :** [Drone-Based Harvest Data Prediction Can Reduce On-Farm Food Loss and Improve Farmer Income](https://spj.science.org/doi/10.34133/plantphenomics.0086#body-ref-B4)

### **4. [Un système d’alerte par caméra IA distingue précisément les tigres des autres espèces](https://hyper.ai/news/27954)**

- **Article de recherche :** [https://hyper.ai/news/27954](https://hyper.ai/news/27954)
- **Équipe de recherche :** Équipe de recherche de l’université Clemson
- **Travaux connexes :** TrailGuard AI. Transmet les images pertinentes aux appareils des gestionnaires de réserves en moins d’une minute.
- **Revue de publication :** BioScience, 2023.09
- **Lien vers l’article :** [Accurate proteome-wide missense variant effect prediction with AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492) (Note: Original link provided seems to mismatch the title, but kept as is based on the source text).

### **5. [L’analyse de données de labradors et la comparaison de trois modèles révèlent les traits comportementaux qui influent sur les performances des chiens détecteurs](https://hyper.ai/news/25472)**

- **Article de recherche :** [https://hyper.ai/news/25472](https://hyper.ai/news/25472)
- **Équipe de recherche :** Abigail Wexner Research Institute à Nationwide Children's Hospital et Rocky Vista University
- **Travaux connexes :** AT tests, Env tests, Random Forest, Support Vector Machines, Logistic Regression, PCA, RFECV.
- **Revue de publication :** Scientific Reports, 2023.08
- **Lien vers l’article :** [Machine learning prediction and classification of behavioral selection in a canine olfactory detection program](https://www.nature.com/articles/s41598-023-39112-7)

### **6. [Un modèle de reconnaissance multi-espèces fondé sur la tête de classification ArcFace pour la reconnaissance faciale](https://hyper.ai/news/25164)**

- **Article de recherche :** [https://hyper.ai/news/25164](https://hyper.ai/news/25164)
- **Équipe de recherche :** Équipe de recherche de l’université de Hawaii
- **Travaux connexes :** [Cetacean dataset](https://github.com/knshnb/kaggle-happywhale-1st-place), image cropping models, image recognition models, YOLOv5, Detic. La précision moyenne a atteint 0,869.
- **Revue de publication :** Methods in Ecology and Evolution, 2023.07
- **Lien vers l’article :** [A deep learning approach to photo–identification demonstrates high performance on two dozen cetacean species](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14167)

### **7. [Suivi de la floraison des cerisiers au Japon à l’aide d’une API Python et d’une API de vision par ordinateur](https://hyper.ai/news/24512)**

- **Article de recherche :** [https://hyper.ai/news/24512](https://hyper.ai/news/24512)
- **Équipe de recherche :** Monash University équipe de recherche (Australia)
- **Travaux connexes :** Social Network Site (SNS) data, Google Cloud Vision AI, machine learning models.
- **Revue de publication :** Flora, 2023.07
- **Lien vers l’article :** [The spatiotemporal signature of cherry blossom flowering across Japan revealed via analysis of social network site images](https://www.sciencedirect.com/science/article/abs/pii/S0367253023001019)

### **8. [Une méthode de génétique des populations fondée sur l’apprentissage automatique révèle la formation des arômes du raisin](https://hyper.ai/news/24442)**

- **Article de recherche :** [https://hyper.ai/news/24442](https://hyper.ai/news/24442)
- **Équipe de recherche :** Agricultural Genomics Institute à Shenzhen, CAS
- **Travaux connexes :** [Grapevine genome sequences](https://github.com/zhouyflab/Grapevine_Adaptive_Maladaptive_Introgression), machine learning.
- **Revue de publication :** Proceedings of the National Academy of Sciences, 2023.06
- **Lien vers l’article :** [Adaptive and maladaptive introgression in grapevine domestication](https://www.pnas.org/doi/abs/10.1073/pnas.2222041120)

### **9. [Revue : accélérer la recherche en bio-informatique grâce à l’IA](https://hyper.ai/news/33931)**

- **Article de recherche :** [https://hyper.ai/news/33931](https://hyper.ai/news/33931)
- **Contenu principal :** L’IA possède de nombreuses applications en biologie, notamment la recherche d’homologie, l’alignement multiple de séquences, la construction de phylogénies, l’analyse de séquences génomiques et la découverte de gènes. Pour les chercheurs en biologie, intégrer avec maîtrise les outils d’apprentissage automatique à l’analyse des données accélérera sans aucun doute les découvertes scientifiques et améliorera l’efficacité de la recherche.

### **10. [Le modèle BirdFlow prédit avec précision les trajectoires de vol des oiseaux migrateurs](https://hyper.ai/news/34781)**

- **Article de recherche :** [https://hyper.ai/news/33942](https://hyper.ai/news/33942)
- **Équipe de recherche :** UMass Amherst, Cornell University
- **Travaux connexes :** Computer modeling, eBird dataset, Markov models, Hyperparameter grid search, Entropy calibration, k-week forecasting.
- **Revue de publication :** Methods in Ecology and Evolution, 2023.01
- **Lien vers l’article :** [BirdFlow: Learning seasonal bird movements from eBird data](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14052)

### **11. [Un nouveau modèle de bioacoustique des baleines identifie huit espèces de cétacés](https://hyper.ai/news/34781)**

- **Article de recherche :** [https://hyper.ai/news/34781](https://hyper.ai/news/34781)
- **Équipe de recherche :** Équipe de recherche de Google
- **Travaux connexes :** Mel-scale frequency axes, compressed count amplitude, independent invocation via TensorFlow's SavedModel API, Convolutional Neural Networks, classification models for detecting humpback whale calls, interactive visualization tool "Pattern Radio". Le modèle est spécialement conçu pour les rorquals bleus et communs et peut identifier huit espèces distinctes parmi les 94 espèces de baleines connues.
- **Revue de publication :** Google Research, 2024.09
- **Lien vers l’article :** [Whistles, songs, boings, and biotwangs: Recognizing whale vocalizations with AI](https://research.google/blog/whistles-songs-boings-and-biotwangs-recognizing-whale-vocalizations-with-ai)

### **12. [L’apprentissage automatique isole l’alphabet phonétique du cachalot, proche du langage humain et doté d’une plus grande capacité informationnelle](https://hyper.ai/news/33433)**

- **Article de recherche :** [https://hyper.ai/news/33433](https://hyper.ai/news/33433)
- **Équipe de recherche :** Pratyusha Sharma (MIT) et Project CETI équipe
- **Travaux connexes :** DSWP dataset, machine learning, revealing the structural nature of sperm whale vocalizations.
- **Revue de publication :** Nature Communications, 2024.05
- **Lien vers l’article :** [Contextual and combinatorial structure in sperm whale vocalisations](https://www.nature.com/articles/s41467-024-47221-8)

### **13. [Le modèle PlantLncBoost atteint une précision de 96 % pour la prédiction interespèces des lncRNA](https://hyper.ai/news/40667)**

- **Article de recherche :** [https://hyper.ai/news/40667](https://hyper.ai/news/40667)
- **Équipe de recherche :** Shandong University of Technology, Beijing Forestry University, Guangdong Academy of Agricultural Sciences, University of São Paulo, Rosalind Franklin University of Medicine et Science, Umeå University
- **Travaux connexes :** GreeNC database, PlantLncBoost algorithm, Random Forest Importance (RFI) strategy, Recursive Feature Elimination (RFE) algorithm.
- **Revue de publication :** New Phytologist, 2024.05
- **Lien vers l’article :** [PlantLncBoost: key features for plant lncRNA identification and significant improvement in accuracy and generalization](https://go.hyper.ai/F7pkc)

### **14. [Perch 2.0 couvre près de 15 000 espèces et établit un nouveau SOTA en classification et détection bioacoustiques](https://hyper.ai/news/42807)**

- **Article de recherche :** [https://hyper.ai/news/42807](https://hyper.ai/news/42807)
- **Équipe de recherche :** Google DeepMind, Google Research
- **Travaux connexes :** Bioacoustics, Perch 2.0, Xeno-Canto dataset, iNaturalist dataset, Tierstimmenarchiv dataset, FSD50K dataset, EfficientNet-B3 architecture.
- **Revue de publication :** arXiv, 2025.08
- **Lien vers l’article :** [Perch 2.0: The Bittern Lesson for Bioacoustics](https://arxiv.org/abs/2508.04665)

## **IA + agriculture, foresterie et élevage**

### **1. [Estimer rapidement et précisément le rendement du riz à l’aide de réseaux neuronaux convolutifs](https://hyper.ai/news/26100)**

- **Article de recherche :** [https://hyper.ai/news/26100](https://hyper.ai/news/26100)
- **Équipe de recherche :** Équipe de recherche de l’université Kyoto
- **Travaux connexes :** Convolutional Neural Networks. Le modèle CNN analyse avec précision des photos de terrain prises sous différents angles, à différents moments et à différentes périodes, et fournit des prévisions de rendement stables.
- **Revue de publication :** Plant Phenomics, 2023.07
- **Lien vers l’article :** [Deep Learning Enables Instant and Versatile Estimation of Rice Yield Using Ground-Based RGB Images](https://spj.science.org/doi/10.34133/plantphenomics.0073)

### **2. [Un modèle conçu avec l’algorithme YOLOv5 surveille la posture des truies et les mises bas](https://hyper.ai/news/25131)**

- **Article de recherche :** [https://hyper.ai/news/25131](https://hyper.ai/news/25131)
- **Équipe de recherche :** Équipe de recherche de l’université Nanjing Agricultural
- **Travaux connexes :** YOLOv5, models detecting sow posture and piglets. Il peut émettre une alerte cinq heures avant la mise bas, avec une précision moyenne globale de 92,9 %.
- **Revue de publication :** Sensors, 2023.01
- **Lien vers l’article :** [Sow Farrowing Early Warning and Supervision for Embedded Board Implementations](https://www.mdpi.com/1424-8220/23/2/727)

### **3. [Des observations en laboratoire et l’apprentissage automatique montrent que les ultrasons émis par des plants de tomate et de tabac stressés se propagent dans l’air](https://hyper.ai/news/24547)**

- **Article de recherche :** [https://hyper.ai/news/24547](https://hyper.ai/news/24547)
- **Équipe de recherche :** Tel Aviv University équipe de recherche (Israel)
- **Travaux connexes :** Machine learning models, SVM, Basic, MFCC, Scattering network, neural network models, leave-one-out cross-validation. La précision de reconnaissance a atteint 99,7 % ; les cris des plants de tomate culminaient entre le quatrième et le sixième jour.
- **Revue de publication :** Cell, 2023.03
- **Lien vers l’article :** [Sounds emitted by plants under stress are airborne and informative](https://doi.org/10.1016/j.cell.2023.03.009)

### **4. [Des drones et l’analyse d’images par IA détectent les ravageurs forestiers](https://hyper.ai/news/23807)**

- **Article de recherche :** [https://hyper.ai/news/23807](https://hyper.ai/news/23807)
- **Équipe de recherche :** Équipe de recherche de l’université de Lisbon
- **Travaux connexes :** FRCNN, YOLO models. Le modèle YOLO a obtenu de meilleures performances de détection que FRCNN. L’association de drones et de modèles d’IA permet de détecter efficacement et précocement les nids de processionnaires du pin.
- **Revue de publication :** NeoBiota, 2023.05
- **Lien vers l’article :** [Testing early detection of pine processionary moth Thaumetopoea pityocampa nests using UAV-based methods](https://neobiota.pensoft.net/article/95692/)

### **5. [Un système de détection de la boiterie des vaches laitières conçu par vision par ordinateur et apprentissage profond](https://hyper.ai/news/33957)**

- **Article de recherche :** [https://hyper.ai/news/33957](https://hyper.ai/news/33957)
- **Équipe de recherche :** Équipe de recherche de Newcastle University et Fera Science Ltd.
- **Travaux connexes :** Computer vision, deep learning, Mask-RCNN algorithms, SORT algorithms, CatBoost algorithms. La précision a atteint 94 à 100 %.
- **Revue de publication :** Nature, 2023.03
- **Lien vers l’article :** [Deep learning pose estimation for multi-cattle lameness detection](https://www.nature.com/articles/s41598-023-31297-1)

## **IA + météorologie**

### **1. [Revue : modèles de prévision météorologique fondés sur l’apprentissage automatique et les données](https://hyper.ai/news/28124)**

- **Article de recherche :** [https://hyper.ai/news/28124](https://hyper.ai/news/28124)
- **Contenu principal :** La prévision numérique du temps (NWP) est la méthode dominante en météorologie. Elle résout l’état du système terrestre sur une grille par intégration numérique, selon un processus de raisonnement déductif. Depuis 2022, les modèles d’apprentissage automatique appliqués aux prévisions météorologiques ont connu une série d’avancées, dont certaines égalent les prévisions très précises du Centre européen pour les prévisions météorologiques à moyen terme (ECMWF).

### **2. [Revue : collecte de données dans les centres de grêle et prédiction des phénomènes météorologiques extrêmes à l’aide de grands modèles](https://hyper.ai/news/25874)**

- **Article de recherche :** [https://hyper.ai/news/25874](https://hyper.ai/news/25874)
- **Contenu principal :** En 2021, l’Académie DAMO d’Alibaba et le Centre météorologique national ont élaboré conjointement un algorithme d’IA de prévision météorologique, qui a prédit avec succès plusieurs épisodes de convection violente. En septembre de la même année, DeepMind a publié dans *Nature* un article utilisant des modèles génératifs profonds pour prévoir les précipitations en temps réel.
Début 2023, DeepMind a officiellement lancé GraphCast, capable de prévoir le temps à l’échelle mondiale pour les dix jours suivants, à une résolution de 0,25°, en une minute. En avril, l’université des sciences et technologies de l’information de Nanjing et le laboratoire d’IA de Shanghai ont mis au point le grand modèle météorologique « FengWu », réduisant encore les erreurs par rapport à GraphCast.
Huawei a ensuite lancé le grand modèle « Pangu-Weather ». Grâce à l’introduction d’un réseau neuronal 3D, la précision des prévisions de Pangu a pour la première fois dépassé celle des systèmes NWP les plus précis. Récemment, l’université Tsinghua et l’université Fudan ont successivement publié les modèles « NowCastNet » et « FuXi ».

### **3. [De nouveaux algorithmes prédisent précisément les précipitations extrêmes grâce aux simulations globales résolvant les tempêtes et à l’apprentissage automatique](https://hyper.ai/news/24995)**

- **Article de recherche :** [https://hyper.ai/news/24995](https://hyper.ai/news/24995)
- **Équipe de recherche :** LEAP Lab à Columbia University
- **Travaux connexes :** Machine learning, Baseline-NN, Org-NN, neural networks.
- **Revue de publication :** PNAS, 2023.03
- **Lien vers l’article :** [Implicit learning of convective organization explains precipitation stochasticity](https://www.pnas.org/doi/10.1073/pnas.2216158120)

### **4. [Le modèle d’apprentissage automatique CSU-MLP, fondé sur les forêts aléatoires, prédit les phénomènes météorologiques violents à moyen terme](https://hyper.ai/news/33966)**

- **Article de recherche :** [https://hyper.ai/news/33966](https://hyper.ai/news/33966)
- **Équipe de recherche :** Colorado State University et NOAA
- **Travaux connexes :** GEFS/R dataset, machine learning, interpolation processing, RF. Il prédit avec précision les phénomènes météorologiques violents à moyen terme (de 4 à 8 jours).
- **Revue de publication :** Weather and Forecasting, 2022.08
- **Lien vers l’article :** [A new paradigm for medium-range severe weather forecasts: probabilistic random forest-based predictions](https://arxiv.org/abs/2208.02383)

### **5. [Le système de prévision météorologique de bout en bout Aardvark Weather, piloté par les données, accélère les prévisions de plusieurs dizaines de fois par rapport aux méthodes traditionnelles](https://hyper.ai/news/38605)**

- **Article de recherche :** [https://hyper.ai/news/38605](https://hyper.ai/news/38605)
- **Équipe de recherche :** Cambridge University, The Alan Turing Institute, University of Toronto, Microsoft Research, ECMWF, British Antarctic Survey, Google DeepMind
- **Travaux connexes :** Weather forecasting systems, HadISD datasets, collaborative microwave-infrared observation networks, ATOVS systems, ASCAT scatterometer data, ERA5 reanalysis datasets, lightweight convolutional networks.
- **Revue de publication :** Nature, 2025.03
- **Lien vers l’article :** [End-to-end data-driven weather prediction](https://www.nature.com/articles/s41586-025-08897-0)

### **6. [Le système de prévision météorologique FCN3 fondé sur l’apprentissage automatique permet une inférence ultra-rapide sur un seul GPU](https://hyper.ai/news/42456)**

- **Article de recherche :** [https://hyper.ai/news/42456](https://hyper.ai/news/42456)
- **Équipe de recherche :** NVIDIA, Lawrence Berkeley National Laboratory (LBNL), UC Berkeley, Caltech
- **Travaux connexes :** Numerical weather prediction, FourCastNet 3, machine learning, ERA5 dataset, spherical neural operator design, hybrid parallel strategies.
- **Revue de publication :** arXiv, 2025.07
- **Lien vers l’article :** [FourCastNet 3: A geometric approach to probabilistic machine-learning weather forecasting at scale](https://arxiv.org/pdf/2507.12144)

### **7. [Un modèle de prévision de la mousson indienne fondé sur 36 stations météorologiques fournit des prévisions fines à l’échelle urbaine](https://hyper.ai/news/44271)**

- **Article de recherche :** [https://hyper.ai/news/44271](https://hyper.ai/news/44271)
- **Équipe de recherche :** IIT Bombay, University of Maryland
- **Travaux connexes :** Convolutional Neural Networks (CNN), Transfer Learning (CNN-TL), weather forecasting, Event Synchronization methods, rainfall prediction.
- **Revue de publication :** SSRN, 2025.08
- **Lien vers l’article :** [Hyperlocal Extreme Rainfall Forecasts in Mumbai: Convolutional Neural Network Transfer Learning-Based Downscaling Approach](https://go.hyper.ai/j05Vt)

### **8. [ACE2 réalise en deux minutes une prévision saisonnière couvrant quatre mois](https://hyper.ai/news/44473)**

- **Article de recherche :** [https://hyper.ai/news/44473](https://hyper.ai/news/44473)
- **Équipe de recherche :** Met Office Hadley Centre, University of Exeter, Allen Institute for AI (Ai2)
- **Travaux connexes :** Seasonal forecasting, ERA5 reanalysis dataset, Global Precipitation Climatology Project (GPCP) v2.3 dataset, ACE2 machine learning atmospheric model.
- **Revue de publication :** npj Climate and Atmospheric Science, 2025.08
- **Lien vers l’article :** [Skilful global seasonal predictions from a machine learning weather model trained on reanalysis data](https://go.hyper.ai/YyRfT)

### **9. [Le modèle incrémental de prévision météorologique VA-MoE atteint le niveau SOTA avec 75 % de paramètres en moins](https://hyper.ai/news/45152)**

- **Article de recherche :** [https://hyper.ai/news/45152](https://hyper.ai/news/45152)
- **Équipe de recherche :** HKUST, Zhejiang University, et d’autres
- **Travaux connexes :** Incremental weather forecasting, VA-MoE, ERA5 dataset, two-stage training paradigm, Transformer, multi-task joint loss mechanisms, meteorological forecasting.
- **Revue de publication :** ICCV25, 2025.07
- **Lien vers l’article :** [VA-MoE: Variables-Adaptive Mixture of Experts for Incremental Weather Forecasting](https://arxiv.org/abs/2412.02503)

### **10. [Le modèle de diffusion glissante explicité ERDM résout les défis de la prévision à long terme et devance les références EDM à moyen et long terme](https://hyper.ai/news/45367)**

- **Article de recherche :** [https://hyper.ai/news/45367](https://hyper.ai/news/45367)
- **Équipe de recherche :** NVIDIA
- **Travaux connexes :** Medium-range weather forecasting, progressive noise scheduling, Elucidated Diffusion Models (EDM), Elucidated Rolling Diffusion Models (ERDM), Navier-Stokes fluid dynamics benchmark dataset, ERA5 reanalysis dataset, noise scheduling mechanisms, probability flow Ordinary Differential Equations (ODE), denoiser networks.
- **Revue de publication :** NeurIPS 2025, 2025.06
- **Lien vers l’article :** [Elucidated Rolling Diffusion Models for Probabilistic Weather Forecasting](https://doi.org/10.48550/arXiv.2506.20024)

### **11. [Le nouveau modèle de diffusion latente OmniCast résout l’accumulation d’erreurs dans les modèles autorégressifs de prévision météorologique](https://hyper.ai/news/45701)**

- **Article de recherche :** [https://hyper.ai/news/45701](https://hyper.ai/news/45701)
- **Équipe de recherche :** UCLA équipe, Argonne National Laboratory
- **Travaux connexes :** Novel latent diffusion model OmniCast, high-precision probabilistic S2S weather forecasting, Variational Autoencoders (VAE), Transformer models, joint spatial-temporal sampling methods, ERA5 foundation dataset, WeatherBench2 (WB2) test set, ChaosBench test set, UNet architecture.
- **Revue de publication :** NeurIPS 2025, 2025.10
- **Lien vers l’article :** [OmniCast: A Masked Latent Diffusion Model for Weather Forecasting Across Time Scales](https://go.hyper.ai/YANIu)

### **12. [NVIDIA propose une nouvelle méthode de distillation à longue portée qui lève les obstacles de l’IA à la prévision météorologique à long terme](https://hyper.ai/news/48471)**

- **Article de recherche :** [https://hyper.ai/news/48471](https://hyper.ai/news/48471)
- **Équipe de recherche :** NVIDIA Research, University of Washington
- **Travaux connexes :** AI weather forecasting models, autoregressive architectures, Subseasonal-to-Seasonal (S2S) forecasting, Long-Range Distillation.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [Long-Range Distillation: Distilling 10,000 Years of Simulated Climate into Long Timestep AI Weather Models](https://arxiv.org/abs/2512.22814)

### **13. [Une équipe conjointe propose SeaCast, modèle de réseau neuronal de graphes pour des prévisions océaniques régionales ultra-rapides](https://hyper.ai/news/49553)**

- **Article de recherche :** [https://hyper.ai/news/49553](https://hyper.ai/news/49553)
- **Équipe de recherche :** University of Helsinki, Euro-Mediterranean Center on Climate Change (CMCC), University of Salento
- **Travaux connexes :** Regional ocean forecasting, Graph Neural Networks (GNN), SeaCast model, Mediterranean Forecasting System (MedFS), atmospheric forcing fields.
- **Revue de publication :** Scientific Reports
- **Lien vers l’article :** [Accurate Mediterranean Sea forecasting via graph-based deep learning](https://www.nature.com/articles/s41598-025-31177-w)

## **IA + astronomie**

### **1. [L’algorithme PRIMO apprend les règles de propagation de la lumière autour des trous noirs pour en reconstruire des images plus nettes](https://hyper.ai/news/23698)**

- **Article de recherche :** [https://hyper.ai/news/23698](https://hyper.ai/news/23698)
- **Équipe de recherche :** Institute for Advanced Study (Princeton)
- **Travaux connexes :** PRIMO algorithm, PCA, GRMHD. PRIMO a reconstruit l’image du trou noir.
- **Revue de publication :** The Astrophysical Journal Letters, 2023.04
- **Lien vers l’article :** [The Image of the M87 Black Hole Reconstructed with PRIMO](https://iopscience.iop.org/article/10.3847/2041-8213/acc32d/pdf)

### **2. [Des algorithmes de vision par ordinateur entraînés sur des données simulées améliorent et « restaurent » les images astronomiques](https://hyper.ai/news/33975)**

- **Article de recherche :** [https://hyper.ai/news/33975](https://hyper.ai/news/33975)
- **Équipe de recherche :** Tsinghua University et Northwestern University
- **Travaux connexes :** [GalSim](https://github.com/GalSim-developers/GalSim), [COSMOS](https://doi.org/10.5281/zenodo.3242143), computer vision algorithms, CNNs, Richardson-Lucy algorithm, unrolled-ADMM neural networks.
- **Revue de publication :** Monthly Notices of the Royal Astronomical Society, 2023.06
- **Lien vers l’article :** [Galaxy image deconvolution for weak gravitational lensing with unrolled plug-and-play ADMM](https://www.nature.com/articles/s41421-023-00543-1)

### **3. [L’algorithme d’apprentissage automatique non supervisé Astronomaly découvre des anomalies jusqu’alors ignorées](https://hyper.ai/news/26316)**

- **Article de recherche :** [https://hyper.ai/news/26316](https://hyper.ai/news/26316)
- **Équipe de recherche :** chercheurs à l’université de the Western Cape (UWC)
- **Travaux connexes :** CNN, unsupervised machine learning, Astronomaly, PCA, Isolation Forest, LOF algorithm, iForest algorithm, NS algorithm, DR algorithm. Astronomaly a découvert 1 635 anomalies parmi les 2 000 images ayant obtenu les scores d’anomalie les plus élevés.
- **Revue de publication :** arXiv, 2023.09
- **Lien vers l’article :** [Astronomaly at Scale: Searching for Anomalies Amongst 4 Million Galaxies](https://arxiv.org/abs/2309.08660)

### **4. [Méthode fondée sur l’apprentissage automatique pour identifier les éjections de masse coronale (CME) et en extraire les paramètres](https://hyper.ai/news/31870)**

- **Article de recherche :** [https://hyper.ai/news/31870](https://hyper.ai/news/31870)
- **Équipe de recherche :** State Key Laboratory of Space Weather, National Space Science Center, CAS
- **Travaux connexes :** Machine learning, neural networks, Otsu algorithm, trajectory matching algorithms, automated identification, parameter extraction, CACTus, CORIMP, SEEDS. La méthode peut identifier les éjections de masse coronale.
- **Revue de publication :** THE ASTROPHYSICAL JOURNAL, 2024.04
- **Lien vers l’article :** [An Algorithm for the Determination of Coronal Mass Ejection Kinematic Parameters Based on Machine Learning](https://iopscience.iop.org/article/10.3847/1538-4365/ad2dea)

### **5. [L’apprentissage profond découvre 107 cas de raies d’absorption du carbone neutre](https://hyper.ai/news/32210)**

- **Article de recherche :** [https://hyper.ai/news/32210](https://hyper.ai/news/32210)
- **Équipe de recherche :** International team dirigé par chercheur Jian Ge à Shanghai Astronomical Observatory, CAS
- **Travaux connexes :** Deep learning methods, SDSS DR12, Convolutional Neural Network models. 107 absorbeurs de carbone atomique neutre dans l’Univers primordial ont été découverts, avec une précision de détection de 99,8 %.
- **Revue de publication :** MNRAS, 2024.05
- **Lien vers l’article :** [Detecting rare neutral atomic-carbon absorbers with a deep neural network](https://doi.org/10.1093/mnras/stae799)

### **6. [Le modèle StarFusion prédit des images à haute résolution spatiale](https://hyper.ai/news/34254)**

- **Article de recherche :** [https://hyper.ai/news/34254](https://hyper.ai/news/34254)
- **Équipe de recherche :** Équipe de Jin Chen à the State Key Laboratory of Earth Surface Processes et Resource Ecology, BNU
- **Travaux connexes :** Deep learning methods, remote sensing imagery, high spatial resolution image prediction, proposed dual-stream spatiotemporal decoupled fusion architecture model StarFusion, Gaofen-1 datasets, Sentinel-2 satellite datasets, SRGAN-STF model, linear regression models, multivariate regression models.
- **Revue de publication :** Journal of Remote Sensing, 2024.07
- **Lien vers l’article :** [A Hybrid Spatiotemporal Fusion Method for High Spatial Resolution Imagery: Fusion of Gaofen-1 and Sentinel-2 over Agricultural Landscapes](https://spj.science.org/doi/10.34133/remotesensing.0159)

### **7. [Une méthode de génération d’images satellitaires fondée sur SD3 crée EcoMapper, le plus grand jeu de données de télédétection à ce jour](https://hyper.ai/news/41041)**

- **Article de recherche :** [https://hyper.ai/news/41041](https://hyper.ai/news/41041)
- **Équipe de recherche :** Technical University of Munich, University of Zurich
- **Travaux connexes :** Remote sensing dataset EcoMapper, Stable Diffusion 3, DiffusionSat, multi-conditional image generation, satellite image generation.
- **Revue de publication :** ICML 2025, 2024.06
- **Lien vers l’article :** [EcoMapper: Generative Modeling for Climate-Aware Satellite Imagery](https://go.hyper.ai/VFRWu)

### **8. [L’IA géospatiale Earth AI se concentre sur trois types de données essentiels et améliore de 64 % les capacités de raisonnement géospatial](https://hyper.ai/news/45528)**

- **Article de recherche :** [https://hyper.ai/news/45528](https://hyper.ai/news/45528)
- **Équipe de recherche :** Google Research, Google X, Google Cloud
- **Travaux connexes :** Geospatial AI, RS-Landmarks dataset, RS-WebLI dataset, RS-Global dataset, Earth AI, Foundation Models (FMs), Large Language Models (LLM), remote sensing foundation models, spatial alignment + representation integration, geospatial reasoning.
- **Revue de publication :** arXiv, 2024.10
- **Lien vers l’article :** [Earth AI: Unlocking Geospatial Insights with Foundation Models and Cross-Modal Reasoning](https://doi.org/10.48550/arXiv.2510.18318)

### **9. [Naissance d’AION-1, premier modèle fondamental multimodal d’astronomie, préentraîné sur 200 millions de cibles astronomiques](https://hyper.ai/news/46802)**

- **Article de recherche :** [https://hyper.ai/news/46802](https://hyper.ai/news/46802)
- **Équipe de recherche :** UC Berkeley, Cambridge, Oxford, et teams de over 10 global research institutions
- **Travaux connexes :** AION-1, multimodal cosmological datasets, Tokenization schemes, Transformer encoder-decoder structure, ResNet structure.
- **Revue de publication :** NeurIPS 2025, 2025.10
- **Lien vers l’article :** [AION-1: Omnimodal Foundation Model for Astronomical Sciences](ttps://openreview.net/forum?id=6gJ2ZykQ5W)

### **10. [Un nouveau pipeline piloté par les données identifie précisément, par CNN, sept rares objets lenticulaires parmi 810 000 quasars](https://hyper.ai/news/47240)**

- **Article de recherche :** [https://hyper.ai/news/47240](https://hyper.ai/news/47240)
- **Équipe de recherche :** Stanford, SLAC National Accelerator Laboratory, Peking University, INAF - Brera Astronomical Observatory, UCL, UC Berkeley, etc.
- **Travaux connexes :** Convolutional Neural Networks (CNN), DESI datasets, strong gravitational lenses, quasars, black hole research, galactic co-evolution, FastSpec catalogs.
- **Revue de publication :** arXiv, 2024.10
- **Lien vers l’article :** [Quasars acting as Strong Lenses Found in DESI DR1](https://arxiv.org/abs/2511.02009)

### **11. [L’ESA propose AnomalyMatch, méthode semi-supervisée qui sélectionne efficacement les astres rares dans près de 100 millions d’archives Hubble](https://hyper.ai/news/49138)**

- **Article de recherche :** [https://hyper.ai/news/49138](https://hyper.ai/news/49138)
- **Équipe de recherche :** European Space Astronomy Centre (ESAC) under the European Space Agency (ESA)
- **Travaux connexes :** Astrophysical anomalies, semi-supervised binary classification, active learning, AnomalyMatch, Hubble Legacy Archive.
- **Revue de publication :** Astronomy & Astrophysics
- **Lien vers l’article :** [Identifying astrophysical anomalies in 99.6 million source cutouts from the Hubble legacy archive using AnomalyMatch](https://doi.org/10.1051/0004-6361/202555512)

### **12. [L’université de Warwick propose le pipeline de validation RAVEN et confirme 118 nouvelles exoplanètes](https://hyper.ai/news/50073)**

- **Article de recherche :** [https://hyper.ai/news/50073](https://hyper.ai/news/50073)
- **Équipe de recherche :** Équipe de recherche de l’université de Warwick
- **Travaux connexes :** Exoplanet validation, Transiting Exoplanet Survey Satellite (TESS), RAVEN pipeline, synthetic training datasets, false-positive elimination.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [RAVEN: RAnking and Validation of ExoplaNets](https://arxiv.org/abs/2509.17645)

### **13. [L’université de Warwick propose un cadre d’apprentissage d’ensemble pour prédire avec une grande précision les paramètres astérosismiques des étoiles δ Scuti](https://hyper.ai/news/50946)**

- **Article de recherche :** [https://hyper.ai/news/50946](https://hyper.ai/news/50946)
- **Équipe de recherche :** Équipe de recherche de l’université de Warwick
- **Travaux connexes :** δ Scuti stars, asteroseismology, TESS light curve data, ensemble machine learning frameworks, large frequency separation Δν.
- **Revue de publication :** The Astronomical Journal
- **Lien vers l’article :** [Ensemble Machine Learning Approach to Estimate the Asteroseismic Indices for δ Scuti Stars Observed by TESS](https://beta.iopscience.iop.org/article/10.3847/1538-3881/ae4bd8)

### **14. [Une équipe espagnole propose StreakMind, système qui détecte automatiquement les traînées de satellites dans les images astronomiques grâce à l’IA](https://hyper.ai/news/51385)**

- **Article de recherche :** [https://hyper.ai/news/51385](https://hyper.ai/news/51385)
- **Équipe de recherche :** Spanish Royal Naval Observatory (ROA) et other institutions
- **Travaux connexes :** Near-Earth Object (NEO) detection, planetary defense, astronomical image streak detection, StreakMind system, YOLO11.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [StreakMind: AI detection and analysis of satellite streaks in astronomical images with automated database integration](https://hyper.ai/papers/2605.03429)

## **IA + catastrophes naturelles**

### **1. [L’apprentissage automatique prédit le risque d’affaissement du sol au cours des 40 prochaines années](https://hyper.ai/news/30173)**

- **Article de recherche :** [https://hyper.ai/news/30173](https://hyper.ai/news/30173)
- **Équipe de recherche :** Équipe de recherche de Jianxin Liu à Central South University
- **Travaux connexes :** SAR datasets, machine learning models, XGBR, LSTM.
- **Revue de publication :** Journal of Environmental Management, 2024.02
- **Lien vers l’article :** [Machine learning-based techniques for land subsidence simulation in an urban area](https://www.sciencedirect.com/science/article/abs/pii/S0301479724000641?via%3Dihub)

### **2. [Le modèle de segmentation sémantique SCDUNet++ sert à cartographier les glissements de terrain](https://hyper.ai/news/29672)**

- **Article de recherche :** [https://hyper.ai/news/29672](https://hyper.ai/news/29672)
- **Équipe de recherche :** Équipe de recherche de Rui Liu à Chengdu University of Technology
- **Travaux connexes :** Sentinel-2 multispectral data, NASADEM data, landslide data, GLFE, CNN, DSSA, DSC, DTL, Transformer, deep transfer learning. L’intersection sur l’union (IoU) a progressé de 1,91 à 24,42 %, et le score F1 de 1,26 à 18,54 %.
- **Revue de publication :** International Journal of Applied Earth Observation and Geoinformation, 2024.01
- **Lien vers l’article :** [A deep learning system for predicting time to progression of diabetic retinopathy](https://www.nature.com/articles/s41591-023-02702-z) *(Note: Link mismatch present in source, kept as is).*

### **3. [Des réseaux neuronaux transforment des images solaires 2D en reconstructions 3D](https://hyper.ai/news/28797)**

- **Article de recherche :** [https://hyper.ai/news/28797](https://hyper.ai/news/28797)
- **Équipe de recherche :** National Center for Atmospheric Research (NCAR)
- **Travaux connexes :** NeRFs neural networks, SuNeRF model. Les pôles du Soleil ont été révélés pour la première fois.
- **Revue de publication :** arxiv, 2022.11
- **Lien vers l’article :** [SuNeRF: Validation of a 3D Global Reconstruction of the Solar Corona Using Simulated EUV Images](https://arxiv.org/abs/2211.14879)

### **4. [Les réseaux neuronaux additifs analysent les facteurs qui influent sur les catastrophes naturelles](https://hyper.ai/news/24957)**

- **Article de recherche :** [https://hyper.ai/news/24957](https://hyper.ai/news/24957)
- **Équipe de recherche :** Équipe de recherche de UCLA
- **Travaux connexes :** Additive neural networks, semi-automatic detection algorithms, additive ANN, SNN, feature selection models, multi-stage training.
- **Revue de publication :** Communications Earth & Environment, 2023.05
- **Lien vers l’article :** [Landslide susceptibility modeling by interpretable neural network](https://www.nature.com/articles/s43247-023-00806-5)

### **5. [L’IA explicable sert à analyser divers facteurs géographiques de Gippsland, en Australie](https://hyper.ai/news/33994)**

- **Article de recherche :** [https://hyper.ai/news/33994](https://hyper.ai/news/33994)
- **Équipe de recherche :** Australian National University, University of Technology Sydney
- **Travaux connexes :** Random Forest models, machine learning models, cross-validation techniques. XAI peut prédire efficacement les incendies de forêt à partir des caractéristiques géographiques.
- **Revue de publication :** ScienceDirect, 2023.06
- **Lien vers l’article :** [Explainable artificial intelligence (XAI) for interpreting the contributing factors feed into the wildfire susceptibility prediction model](https://www.sciencedirect.com/science/article/pii/S0048969723016224)

### **6. [Modèle de prévision des inondations fondé sur l’apprentissage automatique](https://hyper.ai/news/31060)**

- **Article de recherche :** [https://hyper.ai/news/31060](https://hyper.ai/news/31060)
- **Équipe de recherche :** Google Research
- **Travaux connexes :** HydroATLAS project, LSTM networks, encoder-decoders, cross-validation. Les performances ont dépassé celles des modèles de prévision GloFAS de pointe.
- **Revue de publication :** Nature, 2024.03
- **Lien vers l’article :** [Global prediction of extreme floods in ungauged watersheds](https://www.nature.com/articles/s41586-024-07145-1)

### **7. [ED-DLSTM prévoit les inondations dans les zones non surveillées](https://hyper.ai/news/32138)**

- **Article de recherche :** [https://hyper.ai/news/32138](https://hyper.ai/news/32138)
- **Équipe de recherche :** Équipe de Chaojun Ouyang à l’institut de Mountain Hazards et Environment (IMHE), CAS
- **Travaux connexes :** Data from 2,000 hydrological stations, training datasets from the US, UK, Central Europe, Canada, cross-region spatiotemporal ensemble models, encoder-decoders, multimodal data, spatial static grid attribute data, residual convolutions.
- **Revue de publication :** The Innovation, 2024.04
- **Lien vers l’article :** [Deep learning for cross-region streamflow and flood forecasting at a global scale](https://doi.org/10.1016/j.xinn.2024.100617)

### **8. [Le modèle ChloroFormer prévient précocement les proliférations d’algues marines](https://hyper.ai/news/34544)**

- **Article de recherche :** [https://hyper.ai/news/34544](https://hyper.ai/news/34544)
- **Équipe de recherche :** GIS Lab à Zhejiang University
- **Travaux connexes :** TZ02 dataset, deep learning model ChloroFormer, Transformer neural networks, frequency filter mechanisms, frequency attention mechanisms. ChloroFormer a surpassé les modèles de référence pour les prévisions à court et moyen terme de chlorophylle a.
- **Revue de publication :** Water Research, 2024.10
- **Lien vers l’article :** [Enhanced forecasting of chlorophyll-a concentration in coastal waters through integration of Fourier analysis and Transformer networks](https://doi.org/10.1016/j.watres.2024.122160 )

### **9. [OceanGPT, premier grand modèle de langage marin, est retenu à ACL 2024 ! L’IA incarnée sous-marine devient réalité](https://hyper.ai/news/33044)**

- **Article de recherche :** [https://hyper.ai/news/33044](https://hyper.ai/news/33044)
- **Équipe de recherche :** Ningyu Zhang et Huajun Chen's équipe, College of Computer Science et Technology, Zhejiang University
- **Travaux connexes :** Marine-domain LLMs, regular expressions, Hash algorithms, marine science instruction generation framework DoInstruct, multi-agent collaboration, gpt-3.5-turbo, BM25 algorithms, LLaMA-2, Vicuna-7b-1.5, embodied AI.
- **Revue de publication :** ACL 2024, 2024.05
- **Lien vers l’article :** [OceanGPT: A Large Language Model for Ocean Science Tasks](https://arxiv.org/abs/2310.02031)

### **10. [L’IA prédit les tendances du réchauffement planétaire](https://hyper.ai/news/36778)**

- **Article de recherche :** [https://hyper.ai/news/36778](https://hyper.ai/news/36778)
- **Équipe de recherche :** Joint équipe de recherche de Stanford University, Colorado State University, et ETH Zurich
- **Travaux connexes :** AI CNN systems, global climate models, transfer learning, predicting conditions under continuously increasing carbon emissions, verifying the accuracy of predictive frameworks across different historical periods. L’IA prédit une probabilité de 90 % de records de température maximale.
- **Revue de publication :** Geophysical Research Letters, 2024.12
- **Lien vers l’article :** [Data-Driven Predictions of Peak Warming Under Rapid Decarbonization](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL111832)

### **11. [Le nouveau modèle GeoAI explique la distribution des flux de chaleur de surface sur le plateau tibétain](https://hyper.ai/news/36501)**

- **Article de recherche :** [https://hyper.ai/news/36501](https://hyper.ai/news/36501)
- **Équipe de recherche :** School of Earth Sciences, Zhejiang University
- **Travaux connexes :** Spatial intelligence methods—Explainable-enhanced Geographically Neural Network Weighted Regression (EI-GNNWR) model, surface heat flow datasets, NGHF continental heat flow datasets, Chinese continental surface heat flow datasets, SHAP value calculations, Extreme Gradient Boosting models, fully connected neural network models, Ordinary Least Squares, Geographically Weighted Regression models.
- **Revue de publication :** Journal of Geophysical Research: Solid Earth, 2024.10
- **Lien vers l’article :** [The Distribution of Surface Heat Flow on the Tibetan Plateau Revealed by Data‐Driven Methods](https://doi.org/10.1029/2023JB028491)

### **12. [Le grand modèle de prévision intelligente de l’environnement marin « WenHai » dépasse les prévisions numériques océaniques](https://hyper.ai/news/38294)**

- **Article de recherche :** [https://hyper.ai/news/38294](https://hyper.ai/news/38294)
- **Équipe de recherche :** équipe de recherche dirigé par Academician Lixin Wu à Laoshan Laboratory, OUC, USTC, Qingdao Guoshi Technology groupe
- **Travaux connexes :** Marine environmental forecasting, physical oceanography, artificial intelligence, marine dynamics theory-driven neural network architecture design, explicit embedding of bulk formulas into neural networks.
- **Revue de publication :** Nature Communications, 2025.03
- **Lien vers l’article :** [Forecasting the Eddying Ocean with a Deep Neural Network](https://www.nature.com/articles/s41467-025-57389-2)

### **13. [L’université du Minnesota propose FHNN, un modèle d’apprentissage automatique guidé par les connaissances pour prévoir les crues avec précision](https://hyper.ai/news/49992)**

- **Article de recherche :** [https://hyper.ai/news/49992](https://hyper.ai/news/49992)
- **Équipe de recherche :** Équipe de recherche de l’université de Minnesota Twin Cities
- **Travaux connexes :** Flood forecasting, Knowledge-Guided Machine Learning (KGML), Factorized Hierarchical Neural Networks (FHNN), Process-Based Models (PBM), hydrological cycles, and runoff prediction.
- **Revue de publication :** Water Resources Research
- **Lien vers l’article :** [Knowledge-Guided Machine Learning for Operational Flood Forecasting](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024WR039064)

### **14. [Google publie la version 2 de son système mondial de prévision des inondations et prolonge considérablement la durée de validité des prévisions](https://hyper.ai/news/51472)**

- **Article de recherche :** [https://hyper.ai/news/51472](https://hyper.ai/news/51472)
- **Équipe de recherche :** Google Research
- **Travaux connexes :** Flood forecasting, hydrological simulation, machine learning hydrological models, Global Flood Forecasting Model v2, Google Runoff Reanalysis and Reforecasts (GRRR) dataset.
- **Revue de publication :** EGUsphere
- **Lien vers l’article :** [Extending Medium-Range Global Flood Forecasts: The Google Global Flood Forecasting Model Version 2](https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2283/)

## **Autres**

### **1. [L’assistant de football TacticAI atteint 90 % d’utilité pratique dans les dispositifs tactiques](https://hyper.ai/news/30454)**

- **Article de recherche :** [https://hyper.ai/news/30454](https://hyper.ai/news/30454)
- **Équipe de recherche :** Google DeepMind et Liverpool FC
- **Travaux connexes :** Geometric deep learning, GNNs, predictive models, generative models. Les occasions de tir ont augmenté de 13 %.
- **Revue de publication :** Nature, 2024.03
- **Lien vers l’article :** [TacticAI: an AI assistant for football tactics](https://www.nature.com/articles/s41467-024-45965-x)

### **2. [Le modèle de diffusion débruitant SPDiff simule les déplacements de foule à longue distance](https://hyper.ai/news/30069)**

- **Article de recherche :** [https://hyper.ai/news/30069](https://hyper.ai/news/30069)
- **Équipe de recherche :** Center for Urban Science et Computation (EE Dept, Tsinghua), Shenzhen Key Laboratory of Ubiquitous Data Enabling (Tsinghua SIGS), Peng Cheng Laboratory
- **Travaux connexes :** GC dataset, UCY dataset, conditional denoising diffusion models, SPDiff, GN, EGCL, LSTM, multi-frame rollout training algorithms. Les performances optimales ont été atteintes avec seulement 5 % des données d’entraînement.
- **Revue de publication :** Nature, 2024.02
- **Lien vers l’article :** [Social Physics Informed Diffusion Model for Crowd Simulation](https://arxiv.org/abs/2402.06680)

### **3. [Les installations scientifiques intelligentes entraînent un changement de paradigme de la recherche](https://hyper.ai/news/29570)**

- **Article de recherche :** [https://hyper.ai/news/29570](https://hyper.ai/news/29570)
- **Équipe de recherche :** Équipe de recherche de Hong Mei à Shanghai Jiao Tong University
- **Travaux connexes :** Scientific large models, generative simulation and inversion, autonomous intelligent unmanned experiments, large-scale trusted scientific collaboration, AI research assistants.
- **Revue de publication :** Bulletin of Chinese Academy of Sciences, 2023.12
- **Lien vers l’article :** [AI for Science: Intelligent scientific facilities revolutionize fundamental research](http://www.bulletin.cas.cn/previewFile?id=52965146&type=pdf&lang=zh)

### **4. [DeepSymNet représente les expressions symboliques à partir de l’apprentissage supervisé](https://hyper.ai/news/29243)**

- **Article de recherche :** [https://hyper.ai/news/29243](https://hyper.ai/news/29243)
- **Équipe de recherche :** Équipe de recherche de Min Wu à l’institut de Semiconductors, CAS
- **Travaux connexes :** [Symbolic network datasets](https://hyper.ai/datasets/29321), DSNOrg, DSNB, DSNBM, supervised learning. La méthode utilise des étiquettes plus courtes, réduit l’espace de recherche des prédictions et renforce la robustesse de l’algorithme.
- **Revue de publication :** Journals & Magazines, 2023.11
- **Lien vers l’article :** [Discovering Mathematical Expressions Through DeepSymNet: A Classification-Based Symbolic Regression Framework](https://ieeexplore.ieee.org/document/10327762)

### **5. [Le grand modèle de langage ChipNeMo aide les ingénieurs à concevoir des puces](https://hyper.ai/news/29134)**

- **Article de recherche :** [https://hyper.ai/news/29134](https://hyper.ai/news/29134)
- **Équipe de recherche :** Équipe de recherche de NVIDIA
- **Travaux connexes :** Domain adaptation techniques, NVIDIA NeMo, domain-adapted retrieval models, RAG, supervised fine-tuning with domain-specific instructions, DAPT, SFT, Tevatron, LLMs.
- **Revue de publication :** arXiv, 2024.04
- **Lien vers l’article :** [ChipNeMo: Domain-Adapted LLMs for Chip Design](https://arxiv.org/abs/2311.00176)

### **6. [AlphaGeometry résout des problèmes de géométrie](https://hyper.ai/news/29059)**

- **Article de recherche :** [https://hyper.ai/news/29059](https://hyper.ai/news/29059)
- **Équipe de recherche :** Équipe de recherche de Google DeepMind
- **Travaux connexes :** Neural language models, symbolic deduction engines, language models.
- **Revue de publication :** Nature, 2024.01
- **Lien vers l’article :** [Solving olympiad geometry without human demonstrations](https://www.nature.com/articles/s41586-023-06747-5)

### **7. [L’apprentissage par renforcement appliqué à la planification de l’espace urbain](https://hyper.ai/news/28917)**

- **Article de recherche :** [https://hyper.ai/news/28917](https://hyper.ai/news/28917)
- **Équipe de recherche :** Équipe de recherche de Yong Li à Tsinghua University
- **Travaux connexes :** Deep reinforcement learning, human–artificial intelligence collaborative frameworks, urban planning models, policy networks, value networks, GNNs. Le système a surpassé huit planificateurs professionnels sur les critères de service et d’écologie.
- **Revue de publication :** Nature Computational Science, 2023.09
- **Lien vers l’article :** [Spatial planning of urban communities via deep reinforcement learning](https://www.nature.com/articles/s43588-023-00503-5)

### **8. [Le cadre ChatArena : jouer au Loup-garou avec de grands modèles de langage](https://hyper.ai/news/28576)**

- **Article de recherche :** [https://hyper.ai/news/28576](https://hyper.ai/news/28576)
- **Équipe de recherche :** Équipe de recherche de Peng Li à Tsinghua University
- **Travaux connexes :** Non-parametric learning mechanisms, language models, Prompts.
- **Revue de publication :** arxiv, 2023.09
- **Lien vers l’article :** [Exploring Large Language Models for Communication Games: An Empirical Study on Werewolf](https://arxiv.org/pdf/2309.04658.pdf)

### **9. [Revue : 30 chercheurs publient dans Nature une rétrospective de dix ans sur la façon dont l’IA transforme les paradigmes scientifiques](https://hyper.ai/news/28166)**

- **Article de recherche :** [https://hyper.ai/news/28166](https://hyper.ai/news/28166)
- **Contenu principal :** Le postdoctorant Hanchen Wang, des départements d’informatique et de génétique de Stanford, Tianfan Fu, du département CSE de Georgia Tech, Yuanqi Du, du département d’informatique de Cornell, et 27 autres chercheurs ont passé en revue le rôle de l’IA dans la recherche scientifique fondamentale au cours de la dernière décennie et recensé les défis et lacunes qui persistent.
- **Lien vers l’article :** [Scientific discovery in the age of artificial intelligence](https://www.nature.com/articles/s41586-023-06221-2)

### **10. [Ithaca aide les épigraphistes à restaurer les textes, à les dater et à déterminer leur provenance géographique](https://hyper.ai/news/28140)**

- **Article de recherche :** [https://hyper.ai/news/28140](https://hyper.ai/news/28140)
- **Équipe de recherche :** DeepMind et Ca' Foscari University of Venice
- **Travaux connexes :** I.PHI dataset, Ithaca model, Kullback-Leibler divergence, cross-entropy loss functions. La précision de restauration des textes a atteint 62 %, l’erreur de datation est restée inférieure à 30 ans et la précision d’attribution géographique a atteint 71 %.
- **Revue de publication :** Nature, 2020.03
- **Lien vers l’article :** [Restoring and attributing ancient texts using deep neural networks](https://www.nature.com/articles/s41586-022-04448-z)

### **11. [L’IA dans les problèmes directs et inverses de la méta-optique : analyse de données fondée sur les systèmes de métasurfaces](https://hyper.ai/news/34006)**

- **Article de recherche :** [https://hyper.ai/news/34006](https://hyper.ai/news/34006)
- **Équipe de recherche :** City University of Hong Kong
- **Travaux connexes :** Predicting NNs, Deep Neural Networks. La précision des prédictions a dépassé 99 %.
- **Revue de publication :** ACS Publications, 2022.06
- **Lien vers l’article :** [Artificial Intelligence in Meta-optics](https://pubs.acs.org/doi/10.1021/acs.chemrev.2c00012)

### **12. [Nouvelle méthode d’IA géospatiale : régression logistique pondérée par réseau neuronal géographique](https://hyper.ai/news/30608)**

- **Article de recherche :** [https://hyper.ai/news/30608](https://hyper.ai/news/30608)
- **Équipe de recherche :** Équipe de recherche de Zhenhong Du à Zhejiang University
- **Travaux connexes :** Spatial patterns, neural networks, Shapley Additive Explanations (SHAP), Inverse Distance Weighting interpolation, binary cross-entropy loss functions, 5-fold cross-validation. Le modèle a surpassé les autres modèles avancés de cartographie du potentiel minier.
- **Revue de publication :** International Journal of Applied Earth Observation and Geoinformation, 2024.04
- **Lien vers l’article :** [Enhancing mineral prospectivity mapping with geospatial artificial intelligence: A geographically neural network-weighted logistic regression approach](https://doi.org/10.1016/j.jag.2024.103746)

### **13. [Des modèles de diffusion génèrent des paramètres de réseaux neuronaux et transforment l’apprentissage few-shot spatio-temporel en problème de préentraînement par diffusion](https://hyper.ai/news/30545)**

- **Article de recherche :** [https://hyper.ai/news/30545](https://hyper.ai/news/30545)
- **Équipe de recherche :** Équipe de recherche de Yong Li à the Center for Urban Science et Computation, EE Dept, Tsinghua University
- **Travaux connexes :** Smart cities, spatiotemporal data, knowledge transfer, MetaLA, PEMS-BAy, Transformer diffusion models, conditional generation framework GPD, neural networks, neural network parameters, pre-training + prompt tuning.
- **Revue de publication :** ICLR 2024, 2024.01
- **Lien vers l’article :** [Spatio-Temporal Few-Shot Learning via Diffusive Neural Network Generation](https://openreview.net/forum?id=QyFm3D3Tzi)

### **14. [Les dernières avancées AI4S de l’équipe de Fei-Fei Li : 16 technologies innovantes en biologie, matériaux, santé et diagnostic](https://hyper.ai/news/31499)**

- **Article de recherche :** [https://hyper.ai/news/31499](https://hyper.ai/news/31499)
- **Contenu principal :** Le HAI de Stanford a publié le « AI Index Report 2024 », qui suit de manière exhaustive les tendances mondiales du développement de l’IA en 2023. Le rapport examine également l’impact profond de l’IA sur la science et la médecine, met en lumière les remarquables réalisations scientifiques de l’IA en 2023 ainsi que des innovations médicales majeures comme SynthSR et ImmunoSEIRA, puis analyse les tendances de la FDA en matière d’autorisations de dispositifs médicaux intégrant l’IA, offrant ainsi une référence précieuse au secteur.

### **15. [Prédiction précise des prix de l’immobilier à Wuhan ! Le modèle osp-GNNWR décrit précisément les processus spatiaux complexes et les phénomènes géographiques](https://hyper.ai/news/32453)**

- **Article de recherche :** [https://hyper.ai/news/32453](https://hyper.ai/news/32453)
- **Équipe de recherche :** Équipe de Sensen Wu à the GIS Lab, Zhejiang University
- **Travaux connexes :** Neural networks, spatial proximity optimization, Geographically Neural Network Weighted Regression methods, dataset of 968 Anjuke real estate samples, spatial regression models, gradient descent algorithms.
- **Revue de publication :** International Journal of Geographical Information Science, 2024.04
- **Lien vers l’article :** [A neural network model to optimize the measure of spatial proximity in geographically weighted regression approach: a case study on house price in Wuhan](https://www.tandfonline.com/doi/abs/10.1080/13658816.2024.2343771)

### **16. [L’apprentissage en zéro-shot permet de lancer un modèle de diffusion conditionnelle optimisé pour déchiffrer les inscriptions oraculaires](https://hyper.ai/news/33010)**

- **Article de recherche :** [https://hyper.ai/news/33010](https://hyper.ai/news/33010)
- **Équipe de recherche :** Équipe de Xiang Bai et Yuliang Liu à HUST, jointly with University of Adelaide, Anyang Normal University, SCUT
- **Travaux connexes :** Conditional diffusion models, image generation techniques, local analytic sampling techniques, HUST-OBS dataset, EVOBC dataset, ResNet-101 backbones, OCR technology, zero-shot learning strategies, style encoders, content encoders.
- **Revue de publication :** ACL 2024, 2024.06
- **Lien vers l’article :** [Deciphering Oracle Bone Language with Diffusion Models](https://doi.org/10.48550/arXiv.2406.00684)

### **17. [Stanford, Apple et 23 autres institutions publient le banc d’essai DCLM ; le modèle fondamental égale Llama 3 8B](https://hyper.ai/news/33001)**

- **Article de recherche :** [https://hyper.ai/news/33001](https://hyper.ai/news/33001)
- **Équipe de recherche :** Joint effort by UW, Stanford, Apple, et 20 other institutions
- **Travaux connexes :** Language models, DCLM benchmark, Transformers, MMLU.
- **Revue de publication :** arXiv, 2024.06
- **Lien vers l’article :** [DataComp-LM: In search of the next generation of training sets for language models](https://arxiv.org/abs/2406.11794)

### **18. [PoCo résout l’hétérogénéité des sources de données et permet aux robots d’exécuter plusieurs tâches avec souplesse](https://hyper.ai/news/32765)**

- **Article de recherche :** [https://hyper.ai/news/32765](https://hyper.ai/news/32765)
- **Équipe de recherche :** MIT Researchers
- **Travaux connexes :** Denoising Diffusion Probabilistic Models (DDPM), Denoising Diffusion Implicit Models (DDIM), probabilistic composition of diffusion models, robotic policy composition framework PoCo.
- **Revue de publication :** arXiv, 2024.05
- **Lien vers l’article :** [PoCo: Policy Composition from and for Heterogeneous Robot Learning](https://arxiv.org/abs/2402.02511)

### **19. [Avec 140 000 images, un jeu de données d’inscriptions oraculaires aide une équipe à remporter le prix du meilleur article d’ACL](https://hyper.ai/news/33826)**

- **Article de recherche :** [https://hyper.ai/news/33826](https://hyper.ai/news/33826)
- **Équipe de recherche :** Équipe de recherche de Prof. Xiang Bai à HUST
- **Travaux connexes :** HUST-OBC dataset, unsupervised visual contrastive learning models.
- **Revue de publication :** Scientific Data, 2024.06
- **Lien vers l’article :** [An open dataset for oracle bone script recognition and decipherment](https://arxiv.org/abs/2401.15365)

### **20. [Un schéma de prédiction de canal fondé sur des LLM préentraînés : GPT-2 renforce la couche physique des communications sans fil](https://hyper.ai/news/33195)**

- **Article de recherche :** [https://hyper.ai/news/33195](https://hyper.ai/news/33195)
- **Équipe de recherche :** Équipe de Xiang Cheng à the School of Electronics, Peking University
- **Travaux connexes :** QuaDRiGa simulators, Large Language Models (LLM), channel prediction neural networks, preprocessing modules, embedding modules, pre-trained LLM modules, output modules.
- **Revue de publication :** Journal of Communications and Information Networks, 2024.06
- **Lien vers l’article :** [LLM4CP: Adapting Large Language Models for Channel Prediction](https://ieeexplore.ieee.org/document/10582829)

### **21. [Premier modèle de réseau antagoniste génératif pour la broderie multistitch](https://hyper.ai/news/34669)**

- **Article de recherche :** [https://hyper.ai/news/34669](https://hyper.ai/news/34669)
- **Équipe de recherche :** Visual Computing et Digital Textile équipe, School of Computer Science et AI, Wuhan Textile University
- **Travaux connexes :** Multi-stitch embroidery datasets, Generative Adversarial Networks (GANs), CNNs, multi-stitch embroidery GAN model MSEmbGAN, region-aware texture generation networks, coloration networks. La méthode améliore le réalisme des textures et la fidélité des couleurs en broderie.
- **Revue de publication :** IEEE Transactions on Visualization and Computer Graphics, 2024
- **Lien vers l’article :** [MSEmbGAN: Multi-Stitch Embroidery Synthesis via Region-Aware Texture Generation](https://csai.wtu.edu.cn/TVCG01/index.html)

### **22. [La boîte à outils d’analyse automatisée rapide FAST acquiert efficacement des informations sur les échantillons](https://hyper.ai/news/28100)**

- **Article de recherche :** [https://hyper.ai/news/28100](https://hyper.ai/news/28100)
- **Équipe de recherche :** Équipe de recherche de Argonne National Laboratory
- **Travaux connexes :** SLADS-Net methods, path optimization techniques. La méthode donne la priorité aux régions hétérogènes et reproduit avec précision toutes les caractéristiques principales des images numérisées intégralement.
- **Revue de publication :** Nature Communications, 2023.09
- **Lien vers l’article :** [Demonstration of an AI-driven workflow for autonomous high-resolution scanning microscopy](https://www.nature.com/articles/s41467-023-40339-1)

### **23. [Le modèle fondamental de dynamique des populations PDFM est open source et prédit précisément le chômage et la pauvreté aux États-Unis](https://hyper.ai/news/36380)**

- **Article de recherche :** [https://hyper.ai/news/36380](https://hyper.ai/news/36380)
- **Équipe de recherche :** Google
- **Travaux connexes :** Population Dynamics Foundation Model, predicting unemployment and poverty rates, decoupled embedding architectures, using PDFM to enhance SOTA forecasting foundation model TimesFM, aggregated search trend datasets, map datasets, busyness datasets, weather and air quality, remote sensing data, Graph Neural Networks (GNNs), enhancing existing geospatial models.
- **Revue de publication :** arXiv, 2024.12
- **Lien vers l’article :** [General Geospatial Inference with a Population Dynamics Foundation Model](https://arxiv.org/abs/2411.07207)

### **24. [Le modèle d’apprentissage profond CatGWR estime la non-stationnarité spatiale](https://hyper.ai/news/38055)**

- **Article de recherche :** [https://hyper.ai/news/38055](https://hyper.ai/news/38055)
- **Équipe de recherche :** Zhejiang Provincial Key Laboratory of GIS
- **Travaux connexes :** Deep learning model Context-Attention Geographically Weighted Regression, attention mechanisms, estimating spatial non-stationarity, CatGWR model, simulation experiments, preprocessing modules, zoom-in modules, regression modules.
- **Revue de publication :** International Journal of Geographical Information Science, 2025.02
- **Lien vers l’article :** [Using an attention-based architecture to incorporate context similarity into spatial non-stationarity estimation](https://doi.org/10.1080/13658816.2025.2456556)

### **25. [Le premier système d’intervention par exercice en réalité virtuelle REVERIE au monde favorise la santé cérébrale, physique et mentale des jeunes](https://hyper.ai/news/41266)**

- **Article de recherche :** [https://hyper.ai/news/41266](https://hyper.ai/news/41266)
- **Équipe de recherche :** Pr Huating Li's équipe (Shanghai Sixth People's Hospital / Institute of Active Health), Pr Bin Sheng's équipe (SJTU / MOE Key Lab of AI), chercheur Jihong Wang's équipe (Shanghai University of Sport), Pr Rong Zeng's équipe (ShanghaiTech / Shanghai Clinical Research Center), Pr Shuide Lin's équipe (NUS).
- **Travaux connexes :** Physical exercise, virtual world (metaverse) VR sports, virtual reality exercise system REVERIE, youth obesity, Transformer architectures, iterative user interactions.
- **Revue de publication :** Nature Medicine, 2025.06
- **Lien vers l’article :** [Adaptive AI-based virtual reality sports system for adolescents with excess body weight: a randomized controlled trial](https://www.nature.com/articles/s41591-025-03724-5)

### **26. [À partir de plus de 176 000 inscriptions, Aeneas réalise pour la première fois la restauration d’inscriptions romaines de longueur arbitraire](https://hyper.ai/news/42141)**

- **Article de recherche :** [https://hyper.ai/news/42141](https://hyper.ai/news/42141)
- **Équipe de recherche :** Google DeepMind researchers, University of Nottingham, University of Warwick, etc.
- **Travaux connexes :** Multimodal generative neural network Aeneas, Transformer decoders, Latin inscription datasets, LED dataset, inscription restoration.
- **Revue de publication :** Nature, 2025.07
- **Lien vers l’article :** [Contextualizing ancient texts with generative neural networks](https://www.nature.com/articles/s41586-025-09292-5)

### **27. [Le cadre de génération vidéo panoramique PanoWan permet aussi le montage vidéo en zéro-shot](https://hyper.ai/news/42205)**

- **Article de recherche :** [https://hyper.ai/news/42205](https://hyper.ai/news/42205)
- **Équipe de recherche :** Camera Intelligence Lab @ PKU (Boxin Shi's équipe), OpenBayes
- **Travaux connexes :** Panoramic video, PanoVid panoramic video dataset, zero-shot video editing, latitude-aware sampling, rotational semantic denoising, boundary-padded pixel-wise decoding.
- **Revue de publication :** arXiv, 2025.06
- **Lien vers l’article :** [PanoWan: Lifting Diffusion Video Generation Models to 360° with Latitude/Longitude-aware Mechanisms](https://arxiv.org/abs/2505.22016)

### **28. [Le cadre intelligent de classification de céramiques fondé sur YOLOv11 associe modélisation visuelle et analyse économique pour classer et estimer la valeur des artefacts](https://hyper.ai/news/42268)**

- **Article de recherche :** [https://hyper.ai/news/42268](https://hyper.ai/news/42268)
- **Équipe de recherche :** Universiti Putra Malaysia, UNSW Sydney
- **Travaux connexes :** Ceramic classification, CNNs, transfer learning, capsule networks, YOLOv11, ceramic image datasets, hybrid data acquisition methods, Random Forest regression models.
- **Revue de publication :** Nature Partner Journals, 2025.06
- **Lien vers l’article :** [Integrating deep learning and machine learning for ceramic artifact classification and market value prediction](https://www.nature.com/articles/s40494-025-01886-6)

### **29. [La puce « Microwave Brain » traite simultanément des données ultra-rapides et des signaux sans fil avec une précision de 75 % pour 176 milliwatts](https://hyper.ai/news/43093)**

- **Article de recherche :** [https://hyper.ai/news/43093](https://hyper.ai/news/43093)
- **Équipe de recherche :** Cornell University
- **Travaux connexes :** High-bandwidth applications, microwave neural networks, linear regression models, RadioML2016.10A dataset, deep learning, analog computing.
- **Revue de publication :** Nature Electronics, 2025.08
- **Lien vers l’article :** [An integrated microwave neural network for broadband computation and communication](https://go.hyper.ai/rMZ2K)

### **30. [Le modèle d’imputation et de prédiction spatio-temporelle STIMP prédit avec précision la distribution côtière de la chlorophylle a](https://hyper.ai/news/43613)**

- **Article de recherche :** [https://hyper.ai/news/43613](https://hyper.ai/news/43613)
- **Équipe de recherche :** Équipe de recherche de HKUST
- **Travaux connexes :** Chlorophyll-a prediction, MODIS in-situ Chl-a datasets, Himawari satellite remote sensing reflectance datasets, deep learning, STIMP architecture, water body health diagnosis.
- **Revue de publication :** Nature Communications, 2025.08
- **Lien vers l’article :** [Spatiotemporal Imputation and Prediction Model](https://go.hyper.ai/BjOR5)

### **31. [Le MIT et ses partenaires prédisent avec précision la dynamique des plasmas en contexte few-shot grâce à l’apprentissage automatique](https://hyper.ai/news/45260)**

- **Article de recherche :** [https://hyper.ai/news/45260](https://hyper.ai/news/45260)
- **Équipe de recherche :** équipe de recherche dirigé par MIT
- **Travaux connexes :** Tokamaks, Scientific Machine Learning (SciML), Neural State-Space Models (NSSM), control-error sensitivity robustness validation, predict-first extrapolation testing.
- **Revue de publication :** Nature Communications, 2025.10
- **Lien vers l’article :** [Learning plasma dynamics and robust rampdown trajectories with predict-first experiments at TCV](https://www.nature.com/articles/s41467-025-63917-x)

### **32. [Reac-Discovery associe modélisation mathématique, apprentissage automatique et expériences automatisées pour résoudre le problème de généralité des laboratoires autonomes](https://hyper.ai/news/45626)**

- **Article de recherche :** [https://hyper.ai/news/45626](https://hyper.ai/news/45626)
- **Équipe de recherche :** IMDEA Materials Institute (Spain)
- **Travaux connexes :** Self-Driving Laboratories (SDL), Reac-Discovery semi-autonomous digital platforms, closed-loop systems integrating design/manufacturing/optimization modules, real-time NMR monitoring, ML process parameter optimization, topological descriptors, structural parameterization datasets, printability datasets, reaction performance datasets.
- **Revue de publication :** Nature Communications, 2025.10
- **Lien vers l’article :** [Reac-Discovery: an artificial intelligence–driven platform for continuous-flow catalytic reactor discovery and optimization](https://go.hyper.ai/ueB79)

### **33. [Présentation de NOBLE, premier cadre de modélisation neuronale validé par des données du cortex humain](https://hyper.ai/news/45806)**

- **Article de recherche :** [https://hyper.ai/news/45806](https://hyper.ai/news/45806)
- **Équipe de recherche :** ETH Zurich, Caltech, University of Alberta
- **Travaux connexes :** Deep learning, neuron features embedding, current injection embedding, NOBLE neuron modeling framework.
- **Revue de publication :** NeurIPS 2025, 2025.09
- **Lien vers l’article :** [NOBLE – Neural Operator with Biologically-informed Latent Embeddings to Capture Experimental Variability in Biological Neuron Models](https://go.hyper.ai/Ramfp)

### **34. [Le cadre de géolocalisation d’images LocDiff est lancé ; il permet un positionnement mondial précis sans grille ni bibliothèque de référence](https://hyper.ai/news/46687)**

- **Article de recherche :** [https://hyper.ai/news/46687](https://hyper.ai/news/46687)
- **Équipe de recherche :** UMaine, UT Austin, UGA, UMD, Google, OpenAI, Harvard
- **Travaux connexes :** Spherical Harmonics Dirac distributions, LocDiff ensemble framework, MP16 dataset, Im2GPS3k dataset, YFCC26k dataset, GWS15k dataset, Conditional Siren-UNet (CS-UNet) architecture, efficient computation strategies, SHDD coding schemes, image geolocation.
- **Revue de publication :** NeurIPS 2025, 2025.10
- **Lien vers l’article :** [LocDiff: Identifying Locations on Earth by Diffusing in the Hilbert Space](https://openreview.net/forum?id=ghybX0Qlls)

### **35. [L’apprentissage automatique associé à py-GC-MS identifie avec précision des indices de vie dans les roches archéennes](https://hyper.ai/news/47543)**

- **Article de recherche :** [https://hyper.ai/news/47543](https://hyper.ai/news/47543)
- **Équipe de recherche :** Earth et Planets Laboratory à the Carnegie Institution for Science, aux côtés de multiple global institutions
- **Travaux connexes :** Pyrolysis gas chromatography-mass spectrometry (py-GC-MS), supervised machine learning.
- **Revue de publication :** PNAS
- **Lien vers l’article :** [Organic geochemical evidence for life in Archean rocks identified by pyrolysis–GC–MS and supervised machine learning](https://www.pnas.org/doi/10.1073/pnas.2514534122)

### **36. [L’équipe de Tsinghua propose ND², une méthode de régression neuro-symbolique qui dérive automatiquement des formules complexes de dynamique des réseaux](https://hyper.ai/news/47950)**

- **Article de recherche :** [https://hyper.ai/news/47950](https://hyper.ai/news/47950)
- **Équipe de recherche :** Tsinghua University
- **Travaux connexes :** Network dynamics, symbolic regression, ND², equation derivation, scientific machine learning.
- **Revue de publication :** Nature Communications
- **Lien vers l’article :** *(Link points to the Archean rocks paper in original Chinese, but kept numbering and reference translation as provided)*

*(Note: The provided source had a duplicate item 35 and 36 linking to PNAS Archean rocks, while the TOC indicated ND2. Translated directly based on the provided text block items 35/36)*

### **37. [L’équipe de l’université du Zhejiang propose une méthode de prédiction du potentiel minier contrainte par la géologie, qui décrit explicitement l’anisotropie de la minéralisation](https://hyper.ai/news/48396)**

- **Article de recherche :** [https://hyper.ai/news/48396](https://hyper.ai/news/48396)
- **Équipe de recherche :** Équipe de recherche de l’université Zhejiang
- **Travaux connexes :** Mineral Prospectivity Mapping (MPM), anisotropic spatial proximity neural networks, intelligent prospecting.
- **Revue de publication :** Geology
- **Lien vers l’article :** [Geologically constrained data-driven modeling for mineral prospectivity mapping](https://go.hyper.ai/vbUpa)

### **38. [Tsinghua et UChicago publient dans Nature : les outils d’IA accroissent l’influence des scientifiques, mais réduisent la diversité des sujets scientifiques](https://hyper.ai/news/48748)**

- **Article de recherche :** [https://hyper.ai/news/48748](https://hyper.ai/news/48748)
- **Équipe de recherche :** Joint équipe de Tsinghua University et the University of Chicago
- **Travaux connexes :** AI for Science, research productivity, scientific citation patterns, research ecosystems, scientometrics.
- **Revue de publication :** Nature
- **Lien vers l’article :** [Artificial intelligence tools expand scientists’ impact but contract science’s focus](https://www.nature.com/articles/s41586-025-09922-y)

### **39. [L’équipe de l’UC propose un spectromètre à l’échelle d’une puce augmenté par l’IA, offrant une grande fidélité spectrale dans un volume minuscule](https://hyper.ai/news/48905)**

- **Article de recherche :** [https://hyper.ai/news/48905](https://hyper.ai/news/48905)
- **Équipe de recherche :** Équipe de recherche de l’université de California
- **Travaux connexes :** Chip-scale spectrometers, Photon-Trapping Surface Textures (PTST), fully connected neural networks, hyperspectral imaging.
- **Revue de publication :** Advanced Photonics
- **Lien vers l’article :** [AI-augmented photon-trapping spectrometer-on-a-chip on silicon platform with extended near-infrared sensitivity](https://doi.org/10.1117/1.AP.8.1.016008)

### **40. [Le laboratoire national d’Oak Ridge du département américain de l’Énergie propose D-CHAG, qui réduit considérablement l’empreinte mémoire des modèles fondamentaux multicanaux](https://hyper.ai/news/49330)**

- **Article de recherche :** [https://hyper.ai/news/49330](https://hyper.ai/news/49330)
- **Équipe de recherche :** chercheurs à US DOE Oak Ridge National Laboratory
- **Travaux connexes :** Vision science foundation models, Distributed Cross-Channel Hierarchical Aggregation (D-CHAG), Tensor Parallelism (TP), hierarchical channel aggregation.
- **Revue de publication :** SC25
- **Lien vers l’article :** [Distributed Cross-Channel Hierarchical Aggregation for Foundation Models](https://dl.acm.org/doi/10.1145/3712285.3759870)

### **41. [L’équipe Polymathic AI propose Walrus, modèle fondamental de dynamique des milieux continus qui établit des records de simulation interdomaines](https://hyper.ai/news/49076)**

- **Article de recherche :** [https://hyper.ai/news/49076](https://hyper.ai/news/49076)
- **Équipe de recherche :** Équipe de recherche de Polymathic AI Collaborative
- **Travaux connexes :** Continuum dynamics, physics simulation foundation models, Walrus model, adaptive computational tokenization.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [Walrus: A Cross-Domain Foundation Model for Continuum Dynamics](https://arxiv.org/abs/2511.15684)

### **42. [EPFL propose la nouvelle architecture DYNAMI-CAL GraphNet, un GNN informé par la physique qui modélise précisément la dynamique à plusieurs corps](https://hyper.ai/news/49808)**

- **Article de recherche :** [https://hyper.ai/news/49808](https://hyper.ai/news/49808)
- **Équipe de recherche :** Équipe de recherche de EPFL
- **Travaux connexes :** Physics-informed GNN, multi-body dynamical systems, DYNAMI-CAL GraphNet, conservation of linear and angular momentum.
- **Revue de publication :** Nature Communications
- **Lien vers l’article :** [A physics-informed graph neural network conserving linear and angular momentum for dynamical systems](https://www.nature.com/articles/s41467-025-67802-5)

### **43. [Le MIT propose Wave-Former, nouvelle méthode de reconstruction 3D précise d’objets entièrement occultés](https://hyper.ai/news/50018)**

- **Article de recherche :** [https://hyper.ai/news/50018](https://hyper.ai/news/50018)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** Computer vision, through-occlusion 3D reconstruction, mmWave sensing, Wave-Former, wireless shape completion.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [Wave-Former: Through-Occlusion 3D Reconstruction via Wireless Shape Completion](https://arxiv.org/abs/2511.14152)

### **44. [Le MIT propose DRiffusion, cadre parallèle de rédaction puis de raffinement qui accélère sans perte l’inférence des modèles de diffusion](https://hyper.ai/news/50209)**

- **Article de recherche :** [https://hyper.ai/news/50209](https://hyper.ai/news/50209)
- **Équipe de recherche :** Équipe de recherche du MIT
- **Travaux connexes :** Diffusion Models, inference acceleration, parallelization techniques, DRiffusion, draft-and-refine.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [DRiffusion: Draft-and-Refine Process Parallelizes Diffusion Models with Ease](https://arxiv.org/abs/2603.25872)

### **45. [Le Technion – Institut de technologie d’Israël propose Task Tokens, qui adaptent avec souplesse les modèles fondamentaux de comportement à des tâches spécifiques](https://hyper.ai/news/50788)**

- **Article de recherche :** [https://hyper.ai/news/50788](https://hyper.ai/news/50788)
- **Équipe de recherche :** Équipe de recherche de Technion
- **Travaux connexes :** Robotic control, imitation learning, Behavior Foundation Models (BFMs), Task Tokens, task-specific adaptation.
- **Conférence de publication :** ICLR 2026
- **Lien vers l’article :** [Task Tokens: A Flexible Approach to Adapting Behavior Foundation Models](https://hyper.ai/papers/2503.22886)

### **46. [Le MIT et ses partenaires proposent EnergAIzer, cadre d’estimation rapide et précise de la puissance GPU pour les charges de travail d’IA](https://hyper.ai/news/51038)**

- **Article de recherche :** [https://hyper.ai/news/51038](https://hyper.ai/news/51038)
- **Équipe de recherche :** MIT et MIT-IBM Watson AI Lab
- **Travaux connexes :** GPU power estimation, AI workloads, data center energy efficiency, EnergAIzer framework, hardware performance profiling.
- **Revue de publication :** arXiv
- **Lien vers l’article :** [EnergAIzer: Fast and Accurate GPU Power Estimation Framework for AI Workloads](https://arxiv.org/abs/2604.20105)

### **47. [UIUC propose Eywa, cadre d’agents hétérogènes qui repousse les limites des grands modèles centrés sur le langage](https://hyper.ai/news/51222)**

- **Article de recherche :** [https://hyper.ai/news/51222](https://hyper.ai/news/51222)
- **Équipe de recherche :** Équipe de recherche de UIUC
- **Travaux connexes :** Agentic AI, heterogeneous agent framework Eywa, domain-specific foundation models, multi-agent systems, Large Language Models (LLM).
- **Revue de publication :** arXiv
- **Lien vers l’article :** [Heterogeneous Scientific Foundation Model Collaboration](https://hyper.ai/papers/2604.27351)

### **48. [Stanford et ses partenaires accélèrent d’un facteur 252 la simulation de l’optique non linéaire du second ordre grâce à des modèles substitutifs LSTM](https://hyper.ai/news/51410)**

- **Article de recherche :** [https://hyper.ai/news/51410](https://hyper.ai/news/51410)
- **Équipe de recherche :** Stanford University, UCLA, et SLAC National Accelerator Laboratory
- **Travaux connexes :** Second-order nonlinear optics, Sum-Frequency Generation (SFG), Long Short-Term Memory networks (LSTM), Surrogate Model, Split-Step Fourier Method (SSFM).
- **Revue de publication :** Advanced Photonics
- **Lien vers l’article :** [Deep learning-assisted modeling for χ⁽²⁾ nonlinear optics](https://go.hyper.ai/5bLoA)
