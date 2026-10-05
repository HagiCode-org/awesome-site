# Erstaunliche KI für die Wissenschaft
**EN** | [CN](README_CN.md)
- [**Vorwort**](#foreword)
- [**KI+ Biopharmazeutika**](#ai-biopharmaceutical)
  - [**1. AdaDR übertrifft mehrere Benchmark-Methoden bei der Neupositionierung von Arzneimitteln**](#1-adadr-outperforms-multiple-benchmark-methods-in-drug-repositioning)
  - [**2. IMN4NPD beschleunigt die Dereplikation von umfangreichen Clustern in molekularen Netzwerken und bietet Anmerkungen für Selbstschleifen und gepaarte Knoten**](#2-imn4npd-accelerates-the-dereplication-of-extensive-clusters-in-molecular-networks-providing-annotations-for-self-loops-and-paired-nodes)
  - [**3. Tiefes generatives Modell MIDAS für die mosaische Integration von Einzelzell-Multimik-Daten**](#3-deep-generative-model-midas-for-mosaic-integration-of-single-cell-multi-omics-data)
  - [**4. ResGen: Ein 3D-Modell der molekularen Erzeugung auf Basis von Protein-Taschen**](#4-resgen-a-3d-molecular-generation-model-based-on-protein-pockets)
  - [**5. Große Modelle + maschinelles Lernen zur präzisen Vorhersage von enzymokinetischen Parametern**](#5-large-models--machine-learning-for-high-precision-prediction-of-enzyme-kinetic-parameters)
  - [**6. Das MIT nutzt Deep Learning, um neuartige Antibiotika zu entdecken**](#6-mit-uses-deep-learning-to-discover-novel-antibiotics)
  - [**7. Neuronale Netzwerke entschlüsseln die Protein-Koppelungsselektivität von GPCR-G**](#7-neural-networks-decipher-gpcr-g-protein-coupling-selectivity)
  - [**8. Macformer makrozykliert das acyklische Medikament fedratinib**](#8-macformer-macrocyclizes-the-acyclic-drug-fedratinib)
  - [**9. Regressionsnetzwerk + CGMD prognostiziert Selbstmontage-Eigenschaften von Zehntausenden von Milliarden von Peptiden**](#9-regression-network--cgmd-predicts-self-assembly-properties-of-tens-of-billions-of-peptides)
  - [**10. Unüberwachtes Lernen prognostiziert 71 Millionen Genmutationen**](#10-unsupervised-learning-predicts-71-million-gene-mutations)
  - [**11. Geruchsanalyse KI entwickelt auf der Grundlage von Graph Neural Networks (GNN)**](#11-odor-analysis-ai-developed-based-on-graph-neural-networks-gnn)
  - [**12. Graph neuronale Netzwerke für sichere und hochwirksame Anti-Aging-Zutaten**](#12-graph-neural-networks-screen-for-safe-and-highly-effective-anti-aging-ingredients)
  - [**13. Maschinelles Lernen analysiert quantitativ Dopaminfreisetzungsmengen und -standorte**](#13-machine-learning-quantitatively-analyzes-dopamine-release-amount-and-location)
  - [**14. Maschinelles Lernen entdeckt drei Anti-Aging-Medikamente**](#14-machine-learning-discovers-three-anti-aging-drugs)
  - [**15. Deep Learning-Bildschirme für neuartige Antibiotika, die Acinetobacter baumannii hemmen**](#15-deep-learning-screens-for-novel-antibiotics-inhibiting-acinetobacter-baumannii)
  - [**16. Maschinelle Lernmodelle, die zur Vorhersage der Biolink-Druckbarkeit angewendet werden**](#16-machine-learning-models-applied-to-predict-bioink-printability)
  - [**17. Maschinelles Lernen unterscheidet pluripotente Stammzellen**](#17-machine-learning-differentiates-pluripotent-stem-cells)
  - [**18. Das Modell des maschinellen Lernens prognostiziert die Freisetzung von Drogen bei lang wirkenden Injektiven**](#18-machine-learning-model-predicts-drug-release-rate-of-long-acting-injectables)
  - [**19. Ein Algorithmus des maschinellen Lernens kann die antimalärischen Eigenschaften von Pflanzen effektiv vorhersagen**](#19-machine-learning-algorithm-effectively-predicts-plant-antimalarial-properties)
  - [**20. Maschinelles Lernen-Ansemble-Methode prognostiziert die Immunogenität von viralen Proteinfragmenten**](#20-machine-learning-ensemble-method-predicts-immunogenicity-of-viral-protein-fragments)
  - [**21. Generative KI, die zur Entwicklung neuer Antibiotika verwendet wurde**](#21-generative-ai-used-to-develop-novel-antibiotics)
  - [**22. Automatisiertes, hochgeschwindiges, multidimensionales Einzelpartikelverfolgungssystem, das auf tiefgründigem Lernen basiert**](#22-deep-learning-based-automated-high-speed-multidimensional-single-particle-tracking-system)
  - [**23. ProEnsemble-Framework für maschinelles Lernen: Optimierung von Kombinationen von Entwicklungswegförderern**](#23-proensemble-machine-learning-framework-optimizing-evolutionary-pathway-promoter-combinations)
  - [**24. Mikroumweltbewusstes Graph-Neuralnetzwerk ProtLGN leitet die proteinorientierte Evolution**](#24-microenvironment-aware-graph-neural-network-protlgn-guides-directed-protein-evolution)
  - [**25. Deep-Learning-Modell AlphaPPIMd: Erforschung konformationaler Ensembles von Protein-Protein-Komplexen**](#25-deep-learning-model-alphappimd-exploring-conformational-ensembles-of-protein-protein-complexes)
  - [**26. Der neuartige Tumor-Suppressor-Protein-Abbaustoff dp53m hemmt die Krebszellverbreitung**](#26-novel-tumor-suppressor-protein-degrader-dp53m-inhibits-cancer-cell-proliferation)
  - [**27. CVPR Best Student Paper! Das Multimodalmodell BioCLIP erreicht das Zero-Shot-Lernen**](#27-cvpr-best-student-paper-multimodal-model-bioclip-achieves-zero-shot-learning)
  - [**28. 100 Millionen Parameter! Zellbasismodell scFundationmodelle 20.000 Gene gleichzeitig**](#28-100-million-parameters-cell-foundation-model-scfoundation-models-20000-genes-simultaneously)
  - [**29. Das von ICML akzeptierte Protein-Sprachmodell ESM-AA übertrifft die traditionelle SOTA**](#29-accepted-by-icml-protein-language-model-esm-aa-surpasses-traditional-sota)
  - [**30. SPACE-Algorithmus veröffentlicht im Cell-Sub-Journal!**](#30-space-algorithm-published-in-cell-sub-journal-tissue-module-discovery-capabilities-lead-similar-tools)
  - [**31. Neue Durchbrüche auf Basis von AlphaFold zeigen dynamische Proteindiversität**](#31-new-breakthroughs-based-on-alphafold-reveal-dynamic-protein-diversity)
  - [**32. P450Diffusion: De novo-Konstruktionsmethode für P450-Enzyme, die auf Diffusionsmodellen basierend entwickelt wurden**](#32-p450diffusion-de-novo-design-method-for-p450-enzymes-developed-based-on-diffusion-models)
  - [**33. Gleichwertige Graph-Neuralnetzwerke, die für die Vorhersage der Zielproteinbindungsstelle verwendet werden und die Leistung um 20% steigern**](#33-equivariant-graph-neural-networks-used-for-target-protein-binding-site-prediction-boosting-performance-by-20)
  - [**34. 20 experimentelle Datenpunkte schaffen einen Meilenstein für KI-Protein!**](#34-20-experimental-data-points-create-an-ai-protein-milestone-fsfp-effectively-optimizes-protein-pre-training-models)
  - [**35. Das übertragbare Deep Learning-Modell identifiziert mehrere Arten von RNA-Modifikationen, wodurch die Rechenkosten erheblich reduziert werden**](#35-transferable-deep-learning-model-identifies-multiple-types-of-rna-modifications-significantly-reducing-computational-costs)
  - [**36. InstructProtein: Verknüpfung der Proteinsprache mit der menschlichen Sprache unter Verwendung von Wissensanweisungen**](#36-instructprotein-aligning-protein-language-with-human-language-using-knowledge-instructions)
  - [**37. Protein-to-Text-Generation-Framework ProtT3 ermöglicht eine modulare Interpretation von Proteindaten und Textinformationen**](#37-protein-to-text-generation-framework-prott3-enables-cross-modal-interpretation-of-protein-data-and-text-information)
  - [**38. Das CPDiffusion-Modell entwirft funktionelle Proteine vollständig automatisch und kostengünstig.**](#38-cpdiffusion-model-designs-functional-proteins-fully-automatically-at-an-ultra-low-cost)
  - [**39. Eine neuartige Methode zur Erkennung von Proteinhomologen, die auf Modellen der Proteinsprache und auf Techniken der intensiven Abrufung basiert**](#39-a-novel-protein-homolog-detection-method-based-on-protein-language-models-and-dense-retrieval-techniques)
  - [**40. AlphaProteo entwirft effizient Zielproteinbindungen und erhöht die Affinität um 300 Mal.**](#40-alphaproteo-efficiently-designs-target-protein-binders-increasing-affinity-by-300-times)
  - [**41. Neues Protein-Sprachmodell DePLM übertrifft die SOTA-Modelle bei der Mutationswirkungsprädiktion**](#41-novel-denoising-protein-language-model-deplm-outperforms-sota-models-in-mutation-effect-prediction)
  - [**42. Geometrisches tief generiertes Modell DynamicBind ermöglicht dynamische Protein-Docking-Vorhersagen**](#42-geometric-deep-generative-model-dynamicbind-enables-dynamic-protein-docking-prediction)
  - [**43. Drogenentdeckung Großsprachenmodell Y-Mol übertrifft LLaMA2 vollständig**](#43-drug-discovery-large-language-model-y-mol-completely-outperforms-llama2)
  - [**44. Das universelle molekulare inverse Faltenmodell UniIF ergänzt AlphaFold 3 weiter**](#44-universal-molecular-inverse-folding-model-uniif-further-complements-alphafold-3)
  - [**45. Das vorgebildete Protein-Sprachmodell ProSST integriert Proteinstrukturinformationen effektiver**](#45-pre-trained-protein-language-model-prosst-integrates-protein-structure-information-more-effectively)
  - [**46. Makrozyklische Peptidbindungsrahmen RFpeptide bieten neue Möglichkeiten für nicht-medikamentöse Proteine**](#46-macrocyclic-peptide-binder-framework-rfpeptides-offers-new-possibilities-for-undruggable-proteins)
  - [**47. Das Genombasismodell Evo ermöglicht die Vorhersage und Generierung von molekularer bis genomischer Skala**](#47-genome-foundation-model-evo-enables-prediction-and-generation-from-molecular-to-genome-scales)
  - [**48. DigFrag segmentiert molekulare Fragmente mit KI und erzeugt 44 Moleküle von Medikamenten/Pestiziden**](#48-digfrag-accurately-segments-molecular-fragments-using-ai-and-generates-44-drugpesticide-molecules)
  - [**49. Proteinsequenz Großsprachmodell Vor-Ausbildungsmethode PRIME**](#49-protein-sequence-large-language-model-pre-training-method-prime)
  - [**50. Selbstüberwachungs- und Deep-Learning-Methode revolutioniert die 3D-Rekonstruktion in der Kryo-Elektronmikroskopie**](#50-self-supervised-deep-learning-method-revolutionizes-3d-reconstruction-in-cryo-electron-microscopy)
  - [**51. Multimodal Proteingenerierungsmethode PLAID erzeugt gleichzeitig Sequenzen und vollatomische Proteinstrukturen**](#51-multimodal-protein-generation-method-plaid-generates-sequences-and-all-atom-protein-structures-simultaneously)
  - [**52. Zielmoleküloptimierungsmethode MOLRL basierend auf latentem Verstärkungslernen**](#52-targeted-molecular-optimization-method-molrl-based-on-latent-reinforcement-learning)
  - [**53. Viral Variation Driver Prediction Framework E2VD prognostiziert evolutionäre Richtungen für COVID-19/HIV/Influenza-Viren**](#53-viral-variation-driver-prediction-framework-e2vd-predicts-evolutionary-directions-for-covid-19hivinfluenza-viruses)
  - [**54. Medizinisches Sprachmodell MedFound nähert sich den Fähigkeiten des Fachärztes zur Vernunft**](#54-medical-language-model-medfound-approaches-expert-physician-reasoning-capabilities)
  - [**55. 4D-Diffusionsmodell AlphaFolding füllt die Lücke in der dynamischen Proteinstrukturvorhersage**](#55-4d-diffusion-model-alphafolding-fills-the-gap-in-dynamic-protein-structure-prediction)
  - [**56. Die Pipeline PepPrCLIP zur Entwicklung kurzer Proteine verspricht neue Krebstherapien**](#56-pepprclip-pipeline-for-designing-short-proteins-holds-promise-for-developing-new-cancer-therapies)
  - [**57. Die Boltzmann-Alignment-Technik verbessert drastisch die Prädiktionswirksamkeit der freien Energie, die an Proteine bindet**](#57-boltzmann-alignment-technique-drastically-improves-protein-binding-free-energy-prediction-efficacy)
  - [**58. Neue groß angelegte Protein-Backbone-Generator auf Flussbasis Proteina erreicht SOTA in de novo Protein-Backbone-Design**](#58-novel-large-scale-flow-based-protein-backbone-generator-proteina-achieves-sota-in-de-novo-protein-backbone-design)
  - [**59. Das UniGEM-Modell erreicht erstmals eine synergistische Verbesserung zweier Aufgaben auf Basis von Diffusionsmodellen**](#59-unigem-model-achieves-synergistic-enhancement-of-two-tasks-based-on-diffusion-models-for-the-first-time)
  - [**60. Die RF-Diffusion entwickelt sich weiter und realisiert Atompräzisions-De novo-Antikörper-Design**](#60-rfdiffusion-evolves-further-realizing-atomic-accuracy-de-novo-antibody-design)
  - [**61. Das erste Protein-RNA-Sprachmodell-Fusion-Schema setzt neue SOTA in der Bindungs-Affinitätsvorhersage**](#61-first-protein-rna-language-model-fusion-scheme-sets-new-sota-in-binding-affinity-prediction)
  - [**62. Virtuelles Gewebe-Modell Celcomen erreicht erstmals die Identifizierbarkeit der kausalen Ableitung in der Analyse der räumlichen Transkriptomik**](#62-virtual-tissue-model-celcomen-achieves-causal-inference-identifiability-in-spatial-transcriptomics-analysis-for-the-first-time)
  - [**63. Die Methode der AlphaFold-Metainferenz prognostiziert unordnete Proteinsysteme genau.**](#63-alphafold-metainference-method-accurately-predicts-disordered-protein-structural-ensembles)
  - [**64. Hochgenauigkeits-RNA-Strukturvorhersage-Framework DRfold2 übertrifft SOTA in mehreren Benchmarks**](#64-high-accuracy-rna-structure-prediction-framework-drfold2-surpasses-sota-in-multiple-benchmarks)
  - [**65. Neuer Proteinentwurf Algorithmus DRAKES durchbricht die biologische Sequenzentwurf Engpässe**](#65-new-protein-design-algorithm-drakes-breaks-through-the-biological-sequence-design-bottleneck)
  - [**66. UV-Absorbationsspektroskopie, unterstützt durch maschinelles Lernen, zur Erkennung mikrobieller Kontamination**](#66-machine-learning-assisted-uv-absorbance-spectroscopy-for-detecting-microbial-contamination)
  - [**67. Verwendung von Proteinsequenzgenerativen Modellen zur Überlappungsgene-Konstruktion**](#67-utilizing-protein-sequence-generative-models-for-overlapping-gene-design)
  - [**68. Vorhersage-Framework PUPS ermöglicht die subzelluläre Lokalisierung von Protein auf Einzelzellebene**](#68-prediction-framework-pups-enables-single-cell-level-protein-subcellular-localization)
  - [**69. UniMoMo: Der erste einheitliche generative Rahmen für molekulare Arten ermöglicht die molekulare Gestaltung von mehrartigen Arzneimitteln**](#69-unimomo-the-first-unified-generative-framework-across-molecular-species-enables-multi-type-drug-molecular-design)
  - [**70. Protein-Sprachmodell Prot42 erzeugt Verbindungsstoffe mit hoher Affinität, die nur die Zielprotein-Sequenz verwenden**](#70-protein-language-model-prot42-generates-high-affinity-binders-using-only-the-target-protein-sequence)
  - [**71. Unified Biomolecular Dynamics Simulator UniSim erzielt erstmals eine einheitliche zeitlich verschärfte Dynamiksimulation über molekulare Typen und chemische Umgebungen hinweg**](#71-unified-biomolecular-dynamics-simulator-unisim-achieves-unified-time-coarsened-dynamics-simulation-across-molecular-types-and-chemical-environments-for-the-first-time)
  - [**72. Computational Biology Algorithmus VereinfachtBondfinder entdeckt 69 neue Stickstoff-Sauerstoff- Schwefel-Bindungen**](#72-computational-biology-algorithm-simplifiedbondfinder-uncovers-69-novel-nitrogen-oxygen-sulfur-bonds)
  - [**73. Neue Proteinsequenzentwurfsmethode FAMPNN verarbeitet gleichzeitig Informationen über Proteinrückgrat und Seitenkette**](#73-novel-protein-sequence-design-method-fampnn-simultaneously-processes-protein-backbone-and-sidechain-information)
  - [**74. Atomische Proteinentwurfsmethode La-Proteina erzeugt Protein mit bis zu 800 Rückständen mit hoher Präzision**](#74-atomistic-protein-design-method-la-proteina-generates-proteins-with-up-to-800-residues-at-high-precision)
  - [**75. Das APM-Modell, das speziell für mehrkettige Proteinkomplexe entwickelt wurde, ermöglicht die Konstruktion und Funktionsoptimierung aller Atome.**](#75-apm-model-specifically-designed-for-multi-chain-protein-complexes-enables-all-atom-design-and-functional-optimization)
  - [**76. Neue intrinsisch gestörte, regiongebundene Proteinentwurfsmethode Logos spezialisiert sich auf nicht-medikamentöse Ziele**](#76-new-intrinsically-disordered-region-binding-protein-design-method-logos-specializes-in-undruggable-targets)
  - [**77. FusionProt ist ein neues Protein-Dynamik-Fusions-Repräsentations-Framework veröffentlicht, das den iterativen Informationsaustausch ermöglicht.**](#77-novel-protein-dynamic-fusion-representation-framework-fusionprot-released-enabling-iterative-information-exchange)
  - [**78. Transkriptomgesteuertes Diffusionsmodell MorphDiff zur Beschleunigung der Entdeckung phänotypischer Medikamente**](#78-transcriptome-guided-diffusion-model-morphdiff-released-to-accelerate-phenotypic-drug-discovery)
  - [**79. Das AlphaPPIMI-Framework verbessert die Verallgemeinerung erheblich und übertrifft die bestehenden Methoden in der PPI-Schnittstellenmodulator-Vorhersage.**](#79-alphappimi-framework-significantly-enhances-generalization-surpassing-existing-methods-in-ppi-interface-modulator-prediction)
  - [**80. Ein neuartiger Fusions-Neuralnetzwerk-Framework prädiziert effizient Multi-Metall-Bindungsorte in Proteinsekvenzen**](#80-a-novel-fusion-neural-network-framework-efficiently-predicts-multi-metal-binding-sites-in-protein-sequences)
  - [**81. Hoch synthetisierbares Molekülprojektions-Framework ReaSyn veröffentlicht, das extrem hohe Rekonstruktionsraten und Pathway-Diversität erreicht**](#81-highly-synthesizable-molecular-projection-framework-reasyn-released-achieving-ultra-high-reconstruction-rates-and-pathway-diversity)
  - [**82. Verstärkungslehrungsrahmen Ctrl-DNA freigegeben, die die "zielte Kontrolle" der spezifischen Zellgenexpression realisieren**](#82-constrained-reinforcement-learning-framework-ctrl-dna-released-realizing-targeted-control-of-specific-cell-gene-expression)
  - [**83. Das PLACER-Framework löst die Herausforderung zur Modellierung der proteinkonformativen Heterogenität auf atomare Ebene.**](#83-placer-framework-resolves-the-atomic-level-modeling-challenge-of-protein-conformational-heterogeneity)
  - [**84. Squidiff ermöglicht eine Multi-Szenario-Transkriptom-Simulation, die die Entwicklung von Präzisionsmedizin und Raummedizin fördert**](#84-squidiff-enables-multi-scenario-transcriptome-simulation-boosting-precision-medicine-and-spatial-medicine-development)
  - [**85. Generatives Modell PepTron und ein neues Evaluierungsbenchmark, das die Vorhersagefähigkeit für unordnete Proteinensembles umgestaltet**](#85-generative-model-peptron-and-new-evaluation-benchmark-released-reshaping-prediction-capabilities-for-disordered-protein-ensembles)
  - [**86. MIT und Harvard schlagen einen End-to-End-AI-Workflow CleaveNet vor, um hochspezifische Herausforderungen bei der Gestaltung von Protease-Substraten zu überwinden.**](#86-mit-and-harvard-propose-end-to-end-ai-workflow-cleavenet-to-overcome-highly-specific-protease-substrate-design-challenges)
  - [**87. Das Team der Goethe-Universität Frankfurt schlägt ein mehrschaliges Klassifikationsrahmen vor, um die Komplexität des menschlichen E3-Ligoms zu entschlüsseln**](#87-goethe-university-frankfurt-team-proposes-a-multi-scale-classification-framework-to-decode-the-complexity-of-the-human-e3-ligome)
  - [**88. Basecamp und NVIDIA veröffentlichen gemeinsam das EDEN-Stiftungsmodell, das eine KI-programmierbare therapeutische Gestaltung ermöglicht.**](#88-basecamp-and-nvidia-jointly-release-the-eden-foundation-model-enabling-ai-programmable-therapeutic-design)
  - [**89. Microsoft und andere schlagen den multimodalen KI-Framework GigaTIME vor, um virtuelle mIF-Atlase aus routinemäßigen Pathologie-Slides zu erstellen.**](#89-microsoft-and-others-propose-the-multimodal-ai-framework-gigatime-to-generate-virtual-mif-atlases-from-routine-pathology-slides)
  - [**90. Das MIT schlägt das Deep Learning-Sprachmodell Pichia-CLM zur Optimierung von Codons für eine verbesserte Produktion von rekombinanten Proteinen vor**](#90-mit-proposes-deep-learning-language-model-pichia-clm-to-optimize-codons-for-enhanced-recombinant-protein-yield)
  - [**91. MIT und ETH schlagen gemeinsam den Deep Learning-Framework APOLLO zur effizienten Integration und Entwurf von Einzelzell-Multimodaldaten vor.**](#91-mit-and-eth-jointly-propose-deep-learning-framework-apollo-to-efficiently-integrate-and-disentangle-single-cell-multimodal-data)
  - [**92. CUHK und andere schlagen gemeinsam den Bi-TEAM-Rahmen für das einheitliche umfangreiche Repräsentationslernen modifizierter Peptide vor.**](#92-cuhk-and-others-jointly-propose-the-bi-team-framework-for-unified-cross-scale-representation-learning-of-modified-peptides)
  - [**93. Die Carnegie Mellon Universität und andere schlagen AQuaRef zur Quantenverfeinerung von Proteinmodellen mit Vollatomen vor.**](#93-carnegie-mellon-university-and-others-propose-aquaref-for-quantum-refinement-of-all-atom-protein-models)
  - [**94. NVIDIA und andere schlagen gemeinsam den Complexa-Framework vor, um die Erzeugung und Optimierung von Proteinbindern zu vereinen.**](#94-nvidia-and-others-jointly-propose-the-complexa-framework-to-unify-protein-binder-generation-and-optimization)
  - [**95. MIT und CMU schlagen gemeinsam VibeGen vor, mit dem die Schwingungsdynamik zur Ermächtigung des De novo-Proteinentwurfs eingeführt wird.**](#95-mit-and-cmu-jointly-propose-vibegen-introducing-vibrational-dynamics-to-empower-de-novo-protein-design)
  - [**Das Institut Pasteur nutzt Deep Learning, um 2,39 Millionen Antiphagenproteine zu prognostizieren und die Bakterienimmunität zu kartografieren.**](#96-institut-pasteur-uses-deep-learning-to-predict-239-million-anti-phage-proteins-mapping-bacterial-immunity)
  - [**97. Das KAIST-Team nutzt KI, um kleine Molekülbindungsproteine neu zu entwerfen und sie erfolgreich in Biosensoren anzuwenden**](#97-kaist-team-utilizes-ai-to-de-novo-design-small-molecule-binding-proteins-successfully-applying-them-in-biosensors)
  - [**98. Die Universität von Toronto und andere schlagen dnaHNet für eine effiziente hierarchische Modellierung genomischer Sequenzen vor.**](#98-university-of-toronto-and-others-propose-dnahnet-for-efficient-hierarchical-modeling-of-genomic-sequences)
  - [**99. Die Queen Mary University of London und andere führen die größte proteogenomische Studie durch, die molekulare Krankheitsmechanismen aufdeckt**](#99-queen-mary-university-of-london-and-others-conduct-the-largest-scale-proteogenomic-study-revealing-molecular-disease-mechanisms)
  - [**100. Die Goethe-Universität Frankfurt und andere schlagen das GenESOM-Modell vor: Generative KI durchbrecht kleine Tierversuche**](#100-goethe-university-frankfurt-and-others-propose-genesom-model-generative-ai-breaks-through-small-sample-animal-experiments)
- [**KI+ Gesundheitswesen**](#ai-healthcare)
  - [**1. Das DeepDR Plus-Deeplearning-System prognostiziert Diabetische Retinopathie mit Hilfe von Fundus-Bildern**](#1-deepdr-plus-deep-learning-system-predicts-diabetic-retinopathy-using-fundus-images)
  - [**2. Das logistische Regressionsmodell analysiert, dass ein hoher grüner Landschaftsindex das MetS-Risiko reduziert**](#2-logistic-regression-model-analyzes-that-high-green-landscape-index-reduces-mets-risk)
  - [**3. Das Deep Learning-System hilft jüngeren Augenärzten, die diagnostische Konsistenz um 12% zu erhöhen.**](#3-deep-learning-system-helps-junior-ophthalmologists-increase-diagnostic-consistency-by-12)
  - [**4. GSP-GCN erreichen bei der Diagnose der Parkinson-Krankheit bis zu 90,2% Genauigkeit**](#4-gsp-gcns-achieve-up-to-902-accuracy-in-parkinsons-disease-diagnosis)
  - [**5. Brustkrebsprognose-Score-System MIRS**](#5-breast-cancer-prognosis-scoring-system-mirs)
  - [**6. Das Retina-Bild-Fundationsmodell RETFound prognostiziert mehrere systemische Erkrankungen**](#6-retinal-image-foundation-model-retfound-predicts-multiple-systemic-diseases)
  - [**7. SVM optimiert taktile Sensoren, Braille-Erkennungsrate erreicht 96,12%**](#7-svm-optimizes-tactile-sensors-braille-recognition-rate-reaches-9612)
  - [**8. Das CAS Peking Institute of Genomics gründet ein offenes biomedizinisches Bildgebungsarchiv**](#8-cas-beijing-institute-of-genomics-establishes-an-open-biomedical-imaging-archive)
  - [**9. AI Lunit liest Mammogramme mit einer Genauigkeit, die mit Ärzten vergleichbar ist**](#9-ai-lunit-reads-mammograms-with-accuracy-comparable-to-doctors)
  - [**10. Die Feature Selection Strategie ermittelt Biomarker für Brustkrebs**](#10-feature-selection-strategy-detects-breast-cancer-biomarkers)
  - [**11. Gradient-Boosting-Maschinenmodell prognostiziert BPSD-Subsyndrom genau**](#11-gradient-boosting-machine-model-accurately-predicts-bpsd-sub-syndrome)
  - [**12. Maschinelles Lernen-Modell prognostiziert die Patientensterblichkeit in einem Jahr**](#12-machine-learning-model-predicts-patient-one-year-mortality-rate)
  - [**13. Neue KI-Brain-Computer-Schnittstellen-Technologie ermöglicht es aphasischen Patienten, zu "reden"**](#13-new-ai-brain-computer-interface-technology-allows-aphasic-patients-to-speak)
  - [**14. Erkennung von Bauchspeicheldrüsenkrebs durch künstliche Intelligenz, die auf tiefgründigem Lernen basiert**](#14-deep-learning-based-artificial-intelligence-detection-of-pancreatic-cancer)
  - [**15. Wirksamkeit der durch maschinelles Lernen unterstützten Lungenkrebs-Screening für die Bevölkerung**](#15-population-effectiveness-of-machine-learning-assisted-lung-cancer-screening)
  - [**16. Das KI-Fusionsmodell MCF zur Diagnose von Eierstockkrebs berechnet das Risiko mit Hilfe von Routine-Labordaten und Alter.**](#16-ovarian-cancer-diagnostic-ai-fusion-model-mcf-calculates-risk-using-routine-lab-data-and-age)
  - [**17. Google veröffentlicht HEAL-Framework, ein 4-Schritt-Prozess zur Bewertung der Fairness von medizinischen KI-Tools**](#17-google-releases-heal-framework-a-4-step-process-to-assess-medical-ai-tool-fairness)
  - [**18. Semantische Segmentierung nutzen, um ein Semantische Annotationswerkzeug zur räumlichen Transkriptomik zu entwickeln Pianno**](#18-leveraging-semantic-segmentation-to-develop-spatial-transcriptomics-semantic-annotation-tool-pianno)
  - [**19. Das KI-Modell UniFMIR überwindet die Grenzen der bestehenden Fluoreszenzmikroskopiebilder**](#19-ai-model-unifmir-breaks-the-limits-of-existing-fluorescence-microscopy-imaging)
  - [**20. Das Deep Learning-System verbessert die Genauigkeit der Krebsüberlebensvorhersage**](#20-deep-learning-system-improves-the-accuracy-of-cancer-survival-prediction)
  - [**21. MemSAM passt das "Segment Anything"-Modell für die Segmentierung medizinischer Videos an**](#21-memsam-adapts-segment-anything-model-for-medical-video-segmentation)
  - [**22. Medizinisches Bildsegmentierungsmodell Medizinisches SAM 2 steht an der Spitze der SOTA-Leaderboard**](#22-medical-image-segmentation-model-medical-sam-2-tops-the-sota-leaderboard)
  - [**23. Maschinelles Lernen bekämpft Chemotherapie-Resistenz und Tumorrezidenz und baut eine starke Verteidigung gegen Brustkrebs-Stammzellen auf**](#23-machine-learning-fights-chemotherapy-resistance-and-tumor-recurrence-building-a-strong-defense-against-breast-cancer-stem-cells)
  - [**24. Vision-Language-Modell DeepDR-LLM für die Diabetesbehandlung veröffentlicht in der Teilzeitschrift Nature**](#24-vision-language-model-deepdr-llm-for-diabetes-care-published-in-nature-sub-journal)
  - [**Zinghua-Team schlägt KI-Basis-Modell ROAM zur präzisen Glioma-Diagnose vor**](#25-leveling-with-senior-pathologists-tsinghua-team-proposes-ai-foundation-model-roam-for-precise-glioma-diagnosis)
  - [**26. Universelles medizinisches Bildsegmentierungsmodell ScribblePrompt übertrifft SAM-basierte Modelle**](#26-universal-medical-image-segmentation-model-scribbleprompt-outperforms-sam-based-models)
  - [**27. Die digitale Zwillings-Hirn-Plattform zeigt kritische Phänomene und kognitive Funktionen, die dem menschlichen Gehirn ähneln**](#27-digital-twin-brain-platform-demonstrates-critical-phenomena-and-cognitive-functions-similar-to-the-human-brain)
  - [**28. Automatisierte LLM-Dialog Agent-Simulationssystem führt die erste Diagnose für Depressionen durch**](#28-automated-llm-dialogue-agent-simulation-system-performs-initial-diagnosis-for-depression)
  - [**29. Deep Learning-Modell LucaProt hilft bei der Identifizierung von RNA-Viren**](#29-deep-learning-model-lucaprot-aids-in-rna-virus-identification)
  - [**30. Medizinisches Bildvorbildungsrahmen UniMedI bricht die Barrieren der Heterogenität medizinischer Daten ab**](#30-medical-image-pre-training-framework-unimedi-breaks-down-medical-data-heterogeneity-barriers)
  - [**31. Mehrsprachiges medizinisches Großmodell MMed-Llama 3 passt sich besser an Szenarien der medizinischen Anwendung an**](#31-multilingual-medical-large-model-mmed-llama-3-better-adapts-to-medical-application-scenarios)
  - [**32. Kapsel-Endoskopie-Bildstichmethode S2P-Matching hilft bei der Bildrekonstruktion**](#32-capsule-endoscopy-image-stitching-method-s2p-matching-assists-in-image-reconstruction)
  - [**33. Multimodal medizinischer Benchmark GMAI-MMBench enthält 284 Datensätze, die 18 klinische Aufgaben abdecken**](#33-multimodal-medical-benchmark-gmai-mmbench-features-284-datasets-covering-18-clinical-tasks)
  - [**34. Neue Zeitreihenprognosemethode CGS-Mask zeigt wichtige Indikatoren für die Patientenüberlebensraten**](#34-novel-time-series-forecasting-method-cgs-mask-uncovers-key-indicators-for-patient-survival-rates)
  - [**35. Das nicht-invasive Gehirn-Decodierungs-Framework fMRI legt die Grundlage für Gehirn-Computer-Schnittstellen und kognitive Modelle**](#35-non-invasive-brain-decoding-framework-fmri-lays-the-foundation-for-brain-computer-interfaces-and-cognitive-models)
  - [**36. Medizinisches Bildsegmentierungsmodell M2CF-Net verbessert die Diagnosepräzision für das Sjogren-Syndrom**](#36-medical-image-segmentation-model-m2cf-net-improves-diagnosis-accuracy-for-sjogrens-syndrome)
  - [**37. BSAFusion ermöglicht die Ausrichtung und Verschmelzung multimodaler medizinischer Bilder**](#37-bsafusion-enables-alignment-and-fusion-of-multimodal-medical-images)
  - [**38. Multi-Agent LLM-Framework KG4Diagnosis hilft bei der Diagnose von 362 häufigen Krankheiten**](#38-multi-agent-llm-framework-kg4diagnosis-assists-in-diagnosing-362-common-diseases)
  - [**39. Bildsegmentierungsmodell ConDSeg löst Probleme mit weichen Grenzen und Zusammenfall in der medizinischen Bildgebung**](#39-image-segmentation-model-condseg-solves-soft-boundary-and-co-occurrence-issues-in-medical-imaging)
  - [**40. Das medizinische Modell M3FM ermöglicht eine klinische Diagnose mit Nullschuss und unterstützt die Berichterstattung und Klassifizierung von Krankheiten**](#40-medical-model-m³fm-enables-zero-shot-clinical-diagnosis-supporting-disease-reporting-and-classification)
  - [**41. Die auf tiefgründigem Lernen basierende Geschlechtsschätzung durch Schädel-CT-Scans übertrifft die menschlichen forensischen Experten**](#41-deep-learning-based-sex-estimation-from-skull-ct-scans-outperforms-human-forensic-experts)
  - [**42. KI fördert die medizinische Forschung: Große Modelle werden zum "goldenen Partner" für die Ausbildung von Ärzten der Grundversorgung**](#42-ai-boosts-medical-research-large-models-become-the-golden-partner-for-training-primary-care-physicians)
  - [**43. Der Deep Learning-Algorithmus von AcneDGNet ermöglicht die Erkennung und Bewertung von Akne-Läsionen**](#43-acnedgnet-deep-learning-algorithm-achieves-acne-lesion-detection-and-grading)
  - [**44. Multimodal medizinisches Bildsegmentierungsmodell VISTA3D veröffentlicht, das 3D-Bild-Auto-Segmentierung und Interaktion erreicht**](#44-multimodal-medical-image-segmentation-model-vista3d-released-achieving-3d-image-auto-segmentation-and-interaction)
  - [**45. Mehrfach-Echocardiographie einheitliches Segmentierungsmodell EchoONE segmentiert mehrere Ebene genau**](#45-multi-plane-echocardiography-unified-segmentation-model-echoone-accurately-segments-multiple-planes)
  - [**46. Der Rahmen für den Dialog zwischen mehreren Agenten simuliert medizinische Konsultationen zur Unterstützung der Diagnose von Krankheiten**](#46-multi-agent-dialogue-framework-simulates-medical-consultations-to-aid-disease-diagnosis)
  - [**47. Deep Learning Framework STAIG zeigt detaillierte genetische Informationen in der Tumor-Mikroumgebung**](#47-deep-learning-framework-staig-reveals-detailed-genetic-information-in-the-tumor-microenvironment)
  - [**48. Das erste All-in-One-Framework für die Wiederidentifizierung von medizinischen Bildern MaMI erreicht SOTA über 11 Datensätze hinweg**](#48-first-all-in-one-medical-image-re-identification-framework-mami-reaches-sota-across-11-datasets)
  - [**49. Das Regressionsmodell M2OST von mehreren zu einem prognostiziert den Genexpressionen mit Hilfe digitaler Pathologiebilder**](#49-many-to-one-regression-model-m2ost-accurately-predicts-gene-expression-using-digital-pathology-images)
  - [**50. Gehirn-MRI-Scan-Tool MindGlide quantifiziert Multiple Sklerose-Läsionen**](#50-brain-mri-scanning-tool-mindglide-quantifies-multiple-sclerosis-lesions)
  - [**51. Hierarchische Destillations-Multi-Instanz-Lernrahmen HDMIL verarbeitet schnell Gigapixel-Gesamte-Slide-Bilder**](#51-hierarchical-distillation-multi-instance-learning-framework-hdmil-rapidly-processes-gigapixel-whole-slide-images)
  - [**52. Das universelle Modell für die 3D-Segmentierung von Blutgefäßen (Fundament)**](#52-universal-3d-blood-vessel-segmentation-foundation-model-vesselfm-far-exceeds-sam-based-models)
  - [**53. Graph-Neuralnetzwerke prognostizieren das Lungenkrebsüberleben genau und entdecken 3 tödliche Untertypen**](#53-graph-neural-networks-accurately-predict-lung-cancer-survival-discovering-3-fatal-subtypes)
  - [**54. Fusionsstrategie: Das KI-Modell prognostiziert das Sterblichkeitsrisiko durch septisches Schock.**](#54-fusion-strategy-ai-model-predicts-septic-shock-mortality-risk)
  - [**55. Das weltweit erste klinische Gedankengrafikmodell in HIE verbessert die neurokognitive Ergebnisvorhersage um 15%**](#55-worlds-first-clinical-graph-of-thought-model-in-hie-improves-neurocognitive-outcome-prediction-by-15)
  - [**56. Das Modellieren der kohortenartigen Patienten mit mehrdimensionalen EHR-Daten erhöht die Präzision der Aufenthaltsdauer um 16,3%**](#56-fine-grained-patient-cohort-modeling-using-multidimensional-ehr-data-increases-length-of-stay-prediction-accuracy-by-163)
  - [**Das Deep Learning-Modell APEX untersucht potenzielle Antibiotika-Kandidaten**](#57-deep-learning-model-apex-screens-potential-antibiotic-candidates)
  - [**58. Auswertung der Abwasser-Epidemiologie mit Hilfe von Gen-Sequenzierung und maschinellem Lernen: ICA-Var-Methode erkennt Viren bis zu 4 Wochen früher**](#58-wastewater-epidemiology-assessment-using-gene-sequencing-and-machine-learning-ica-var-method-detects-viruses-up-to-4-weeks-early)
  - [**59. Das zweiseitige Brownian-Brücke-Diffusion-Modell verbessert die Reproduzierbarkeit virtueller Farbgebung**](#59-bidirectional-brownian-bridge-diffusion-model-enhances-reproducibility-of-virtual-staining)
  - [**60. Medizinisches GraphRAG brecht Qualitätssicherheitsrekorde und erzielt SOTA auf 11 Benchmark-Datensätzen**](#60-medical-graphrag-breaks-qa-accuracy-records-achieving-sota-on-11-benchmark-datasets)
  - [**61. Der Gesundheitsvertreter erkennt automatisch medizinische Ethik und Sicherheitsprobleme**](#61-healthcare-agent-automatically-detects-medical-ethics-and-safety-issues)
  - [**62. Blutzellbildklassifizierer CytoDiffusion hilft bei der Entdeckung von Leukämie, die klinischen Experten übertrifft**](#62-blood-cell-image-classifier-cytodiffusion-assists-in-discovering-leukemia-surpassing-clinical-experts)
  - [**63. Das UCL-Team schlägt einen föderativen Lernrahmen MORPHFED für die interinstitutionelle Blutmorphologieanalyse vor**](#63-ucl-team-proposes-federated-learning-framework-morphfed-for-cross-institutional-blood-morphology-analysis)
  - [**64. Das französische Team schlägt einen erklärbaren Rahmen für maschinelles Lernen für eine genaue Mortalitätsvorhersage bei HCC-Lebertransplantationskandidaten vor**](#64-french-team-proposes-explainable-machine-learning-framework-for-accurate-mortality-prediction-in-hcc-liver-transplant-candidates)
  - [**65. Die Stanford-Universität schlägt Merlin vor, das erste native 3D-Bauch-CT-Vision-Sprache-Modell**](#65-stanford-university-proposes-merlin-the-first-native-3d-abdominal-ct-vision-language-model)
- [**KI+ Materialchemie**](#ai-materials-chemistry)
  - [**1. Hochdurchsatzrechnergebnisse erzeugen in 33 Minuten 120.000 neue MOF-Kandidaten**](#1-high-throughput-computational-framework-generates-120000-novel-mof-candidates-in-33-minutes)
  - [**2. Maschinelle Lernalgorithmen-Bildschirme mit P-SOC-Elektrodenmaterialien**](#2-machine-learning-algorithm-screens-p-soc-electrode-materials)
  - [**3. Das SEN-Modell des maschinellen Lernens ermöglicht hochgenaue Vorhersagen über die Eigenschaften von Materialien**](#3-sen-machine-learning-model-achieves-high-accuracy-material-property-predictions)
  - [**4. Das Deep Learning-Tool GNoME entdeckt 2,2 Millionen neue Kristalle**](#4-deep-learning-tool-gnome-discovers-22-million-new-crystals)
  - [**5. Feldinduziertes rekursiv eingebettetes Atom-Neuralnetz beschreibt externe Feldstärke- und Richtungsänderungen genau**](#5-field-induced-recursively-embedded-atom-neural-network-accurately-describes-external-field-strength-and-direction-changes)
  - [**6. Maschinelles Lernen prognostiziert die Wasseradsorption von porösen Materialien**](#6-machine-learning-predicts-water-adsorption-isotherms-of-porous-materials)
  - [**7. Maschinelles Lernen zur Optimierung von Ko-Katalysatoren für BiVO(4) Fotoanoden**](#7-using-machine-learning-to-optimize-co-catalysts-for-bivo4-photoanodes)
  - [**8. Der RetroExplainer-Algorithmus führt Retrosynthesevorhersagen auf Basis von Deep Learning durch**](#8-retroexplainer-algorithm-performs-retrosynthesis-prediction-based-on-deep-learning)
  - [**9. Tiefe neuronale Netzwerke + NLP, die zur Entwicklung korrosionsbeständiger Legierungen verwendet werden**](#9-deep-neural-networks--nlp-used-to-develop-corrosion-resistant-alloys)
  - [**10. Deep Learning bestimmt die inneren Strukturen von Materialien durch Oberflächenbeobachtungen**](#10-deep-learning-determines-materials-internal-structures-through-surface-observations)
  - [**11. Entwicklung von 3 neuen Materialien mit innovativen Röntgen-Szintillatoren**](#11-developing-3-new-materials-using-innovative-x-ray-scintillators)
  - [**12. Halbüberwachtes Lernen extrahiert verborgene Informationen aus nicht gekennzeichneten Daten**](#12-semi-supervised-learning-extracts-hidden-information-from-unlabeled-data)
  - [**13. Automatisierte Erkenntnisgewinnung auf Basis von AutoML**](#13-automated-knowledge-extraction-based-on-automl)
  - [**14. Uni-MOF: Ein maschinelles Lernmodell, das das Adsorptionsverhalten in 3D-MOF-Materialien vorhersagt**](#14-uni-mof-a-machine-learning-model-predicting-adsorption-behavior-in-3d-mof-materials)
  - [**15. Die Mikroelektronik beschleunigt sich in Richtung der Zeit nach Moore! Die Integration von DNN mit Nanomembran-Technologie zur präzisen Analyse von Lichtwinkeln**](#15-microelectronics-accelerates-towards-the-post-moore-era-integrating-dnn-with-nanomembrane-technology-to-precisely-analyze-incident-light-angles)
  - [**16. Neugestaltung der Leistungsgrenzen von Lithiumbatterien und Einführung eines vereinfachten elektrochemischen Modells auf Basis des Ensemble-Lernens**](#16-reshaping-lithium-battery-performance-boundaries-proposing-a-simplified-electrochemical-model-based-on-ensemble-learning)
  - [**17. Der stärkste Eisen-basierte Supraleitermagnet, der durch maschinelles Lernen entstanden ist**](#17-the-strongest-iron-based-superconducting-magnet-born-via-machine-learning)
  - [**18. Neuralnetzwerke ersetzen die Dichte-Funktionstheorie! Das universelle Materialmodell erreicht ultrapräzise Vorhersagen**](#18-neural-networks-replace-density-functional-theory-universal-materials-model-achieves-ultra-precise-predictions)
  - [**19. Neural Netzwerk Dichte Funktionsrahmen öffnet die schwarze Box der elektronischen Struktur der Materie Vorhersage**](#19-neural-network-density-functional-framework-opens-the-black-box-of-matters-electronic-structure-prediction)
  - [**20. Die erste voll vorwärtsmodus-Ausbildungsarchitektur für optisches Rechnen mit Hilfe von neuronalen Netzwerken erzielt einen großen Durchbruch in den heimischen optischen Chips**](#20-first-fully-forward-mode-training-architecture-for-optical-computing-using-neural-networks-achieves-major-breakthrough-in-domestic-optical-chips)
  - [**21. Chemie LLM ChemLLM umfasst 7 Millionen QA-Daten, professionelle Fähigkeiten konkurrieren mit GPT-4**](#21-chemistry-llm-chemllm-covers-7-million-qa-data-professional-capabilities-rival-gpt-4)
  - [**22. Wafer-Skala herstellbare KI-adaptive Mikrospektrometer**](#22-wafer-scale-producible-ai-adaptive-micro-spectrometers)
  - [**23. Das GNNOpt-Modell identifiziert Hunderte von Kandidaten für Solarzellen und Quantenmaterialien**](#23-gnnopt-model-identifies-hundreds-of-solar-cell-and-quantum-material-candidates)
  - [**24. Der offene Datensatz OMat24 enthält 110 Millionen DFT-Rechnungsergebnisse.**](#24-open-omat24-dataset-contains-110-million-dft-calculation-results)
  - [**25. Neue, refraktäre, durch maschinelles Lernen synthetisierte Hochentropielegierung verfügt über eine hervorragende Raumtemperatur-Duktilität**](#25-novel-refractory-high-entropy-alloy-synthesized-via-machine-learning-boasts-excellent-room-temperature-ductility)
  - [**26. Materialgeneriertes Modell FlowLLM verfügt über einen Datensatz von über 45 000 Materialien**](#26-material-generative-model-flowllm-features-a-dataset-covering-over-45k-materials)
  - [**27. Durch aktives Lernen wurden 14.000 hohe Entropie-Oxide identifiziert und vier hochaktiven Wasserstoff-Evolutionskatalysatoren erfolgreich untersucht.**](#27-using-active-learning-to-identify-14000-high-entropy-oxides-successfully-screening-4-high-activity-hydrogen-evolution-catalysts)
  - [**28. Das Deep Learning-Modell BETE-NET steigert die Superleitungsmaterialsucheeffizienz um 5x**](#28-deep-learning-model-bete-net-boosts-superconducting-material-search-efficiency-by-5x)
  - [**29. Die Technologie des Gradienten Boosting Decision Tree (GBDT) verbessert die hochaufgepräzise Vorhersage der Oxidationsbeständigkeit von Legierungen mit hoher Entropie weiter**](#29-gradient-boosting-decision-tree-gbdt-technology-further-improves-high-precision-prediction-of-high-entropy-alloy-oxidation-resistance)
  - [**30. Moleküldesign-Framework RingFormer prognostiziert genauer organisches Material molekulare optoelektronische Eigenschaften**](#30-molecular-design-framework-ringformer-more-precisely-predicts-organic-material-molecular-optoelectronic-properties)
  - [**31. Methode der Planung der anorganischen Retrosynthese Retrieval-Retro verbessert die Effizienz und Genauigkeit der Anorganischen Materialsynthese**](#31-inorganic-retrosynthesis-planning-method-retrieval-retro-improves-inorganic-material-synthesis-efficiency-and-accuracy)
  - [**32. Durch die Verwendung großer Modelle zur Entschlüsselung von Hydride-Solid-State-Elektrolytenleitungsmechanismen, die ein zuverlässiges Modell zur Vorhersage von Aktivierungsenergie schaffen**](#32-using-large-models-to-decipher-hydride-solid-state-electrolyte-conduction-mechanisms-establishing-a-reliable-activation-energy-prediction-model)
  - [**33. Die Massenspektrometrie-Datensuche auf Tera-Skala durch maschinelles Lernen entdeckt unbekannte chemische Reaktionen**](#33-tera-scale-mass-spectrometry-data-search-enabled-by-machine-learning-uncovers-unknown-chemical-reactions)
  - [**34. Generative KI-Strukturlösungsmethode PXRDnet basierend auf Diffusionsmodellen löst erfolgreich 200 komplexe simulierte Nanokristalle**](#34-generative-ai-structure-solution-method-pxrdnet-based-on-diffusion-models-successfully-solves-200-complex-simulated-nanocrystals)
  - [**35. Das DreaMS-Modell umfasst 200 Millionen Molekülmassenspektren und baut den weltweit größten Massenspezifischen Datensatz GeMS auf.**](#35-dreams-model-covers-200-million-molecular-mass-spectra-building-the-worlds-largest-mass-spec-dataset-gems)
  - [**36. Gleichwertiges Maschinelles Lernen beschleunigt groß angelegte Simulationen von elektrischen Feldern von Materialien**](#36-equivariant-machine-learning-framework-accelerates-large-scale-electric-field-simulations-of-materials)
  - [**37. Multi-Source-Datenintegrationsmethode zeigt 25 Arten von Zementklinker-Alternativen, was der Verringerung von 1,2 Milliarden Tonnen Treibhausgasen entspricht**](#37-multi-source-data-integration-method-screens-25-types-of-cement-clinker-alternatives-equivalent-to-reducing-12-billion-tons-of-greenhouse-gases)
  - [**38. UNIMATE erzielt erstmals eine einheitliche Modellierung der Topologie-Generierung/Eigentumsvorhersage**](#38-unimate-achieves-unified-modeling-of-topology-generationproperty-prediction-for-the-first-time)
  - [**39. Vollatom-Diffusion Transformer-Framework ermöglicht erstmals die einheitliche Erzeugung von periodischen und aperiodischen Atomsystemen**](#39-all-atom-diffusion-transformer-framework-enables-unified-generation-of-periodic-and-aperiodic-atomic-systems-for-the-first-time)
  - [**40. Das FASTSOLV-Modell realisiert die Vorhersage der Löslichkeit kleiner Moleküle bei jeder Temperatur und beschleunigt die Ableitgeschwindigkeit um 50x**](#40-fastsolv-model-realizes-small-molecule-solubility-prediction-at-any-temperature-accelerating-inference-speed-by-50x)
  - [**41. Eine neuartige Methode, die auf multimodalem maschinellem Lernmodellen basiert, prognostiziert die Eigenschaften von Materialien ohne vollständige Kristallstrukturen**](#41-novel-method-based-on-multimodal-machine-learning-models-predicts-material-properties-without-complete-crystal-structures)
  - [**42. Das KI-Modell CGformer integriert innovativ globale Aufmerksamkeitsmechanismen und unterstützt die Forschung und Entwicklung von hochentropischen Materialien.**](#42-ai-model-cgformer-innovatively-integrates-global-attention-mechanisms-aiding-high-entropy-material-rd)
  - [**43. Neue Methode zur Integration struktureller Zwangsbeschränkungen SCIGEN passt sich an jedes vorgebildete Diffusionsmodell an**](#43-novel-structural-constraint-integration-method-scigen-adapts-to-any-pre-trained-diffusion-model)
  - [**44. Das physisch informierte generative KI-Modell SpectroGen benötigt nur einen einzigen Modalitäten-Eingang, um eine kreismodelle Generation mit 99% experimenteller Korrelation zu erreichen**](#44-physically-informed-generative-ai-model-spectrogen-requires-only-single-modality-input-to-achieve-cross-modal-generation-with-99-experimental-correlation)
  - [**45. MOF-ChemUnity rekonstruiert das Panoramawissen des MOF und drängt die Materialentdeckung in die Ära der "Erklärbaren KI"**](#45-mof-chemunity-reconstructs-mof-panoramic-knowledge-pushing-material-discovery-into-the-explainable-ai-era)
  - [**46. Ein leichtgewichtiges universelles Potenzialmodell PET-MAD veröffentlicht, das mit minimalem Probenahme eine spezielle Modellpräzision erreicht**](#46-lightweight-universal-potential-model-pet-mad-released-achieving-dedicated-model-level-precision-with-minimal-samples)
  - [**47. KI-System Chemontologie veröffentlicht, die Reaktionswegsuchkosten durch Integration von chemischem Wissen halbiert werden**](#47-ai-system-chemontology-released-halving-reaction-path-search-costs-by-integrating-chemical-knowledge)
  - [**48. Princeton und andere schlagen gemeinsam eine LLM-Methode zur Vorhersage von MOF-freier Energie vor, die die Machbarkeit der Synthese sehr genau bewertet**](#48-princeton-and-others-jointly-propose-llm-method-for-predicting-mof-free-energy-highly-accurately-assessing-synthesis-feasibility)
  - [**49. Das Team der Yale University schlägt MOSAIC-Modell vor, das LLM koordiniert, um hochverlässliche chemische Synthese-Systeme zu erzeugen**](#49-yale-university-team-proposes-mosaic-model-coordinating-llms-to-generate-highly-reliable-chemical-synthesis-schemes)
  - [**50. Das MIT und andere schlagen DiffSyn-Difusionsmodell vor, das eine generative Planung der Materialsynthesewege ermöglicht.**](#50-mit-and-others-propose-diffusion-model-diffsyn-enabling-generative-planning-of-material-synthesis-pathways)
  - [**51. Die Universität von Michigan und Farasis Energy schlagen gemeinsam die Methode "Discovery Learning" vor, die die Akkulaufzeitvorhersagezyklen drastisch verkürzt**](#51-university-of-michigan-and-farasis-energy-jointly-propose-discovery-learning-method-drastically-shortening-battery-life-prediction-cycles)
  - [**52. Die Cornell University schlägt SCAN-Framework vor, das die Leistung von Batterienelektrolyten sehr genau voraussagt und erklärt**](#52-cornell-university-proposes-scan-framework-highly-accurately-predicting-and-explaining-battery-electrolyte-performance)
  - [**53. Das MIT schlägt ein grundlegendes großes DefectNet-Modell für die nichtzerstörende Charakterisierung und Quantifizierung von internen Materialdefekten vor.**](#53-mit-proposes-foundation-large-model-defectnet-for-non-destructive-characterization-and-quantification-of-internal-material-defects)
  - [**54. Die Cornell Universität schlägt eine Multi-Agent-Plattform EMSeek vor, die eine automatische Analyse von Elektronenmikroskopiebildern in voller Pipeline ermöglicht.**](#54-cornell-university-proposes-multi-agent-platform-emseek-achieving-full-pipeline-automated-analysis-of-electron-microscopy-images)
- [**KI+ Zoologie-Botanik**](#ai-zoology-botany)
  - [**1. Die SBeA analysiert das soziale Verhalten von Tieren auf der Grundlage eines Lernrahmens mit wenigen Schüssen**](#1-sbea-analyzes-animal-social-behaviors-based-on-a-few-shot-learning-framework)
  - [**2. Die auf Siamesischen Netzwerken basierende Deep Learning-Methode erfasst automatisch embryonelle Entwicklungsprozesse.**](#2-deep-learning-method-based-on-siamese-networks-automatically-captures-embryonic-development-processes)
  - [**3. Systematische Pipeline zur Erfassung von Pflanzenphänotypendaten über Drohnen zur Vorhersage optimaler Erntezeitpunkte**](#3-systematic-pipeline-for-collecting-plant-phenotype-data-via-drones-to-predict-optimal-harvest-dates)
  - [**4. Das KI-Kamera-Alarmsystem unterscheidet Tiger genau von anderen Arten**](#4-ai-camera-alert-system-accurately-distinguishes-tigers-from-other-species)
  - [**5. Durch die Verwendung von Labrador-Retriever-Daten und den Vergleich von 3 Modellen werden Verhaltensmerkmale aufgedeckt, die die Leistung von Detektionshunden beeinflussen.**](#5-using-labrador-retriever-data-and-comparing-3-models-reveals-behavioral-traits-affecting-detection-dogs-performance)
  - [**6. Bilderkennungsmodell für mehrere Arten, basierend auf ArcFace-Klassifizierung Kopf für Gesichtserkennung**](#6-multi-species-image-recognition-model-based-on-arcface-classification-head-for-face-recognition)
  - [**7. Überwachung der Blüte von Kirschblüten in Japan mit Hilfe von Python API und Computer Vision API**](#7-monitoring-cherry-blossom-blooming-in-japan-using-python-api-and-computer-vision-api)
  - [**8. Das auf maschinellem Lernen basierende Populationen-Genetikverfahren zeigt den Bildungsprozess von Trauben-Aromen**](#8-machine-learning-based-population-genetics-method-reveals-the-formation-mechanism-of-grape-flavors)
  - [**9. Überprüfung: Bioinformatikerforschung mit KI effizienter freizuschalten**](#9-review-unlocking-bioinformatics-research-more-efficiently-with-ai)
  - [**10. Das BirdFlow-Modell prognostiziert die Flugwege von Wandervögeln genau**](#10-birdflow-model-accurately-predicts-flight-paths-of-migratory-birds)
  - [**11. Neues Wal-Bioacoustics-Modell identifiziert 8 Walearten**](#11-new-whale-bioacoustics-model-identifies-8-cetacean-species)
  - [**12. Maschinelles Lernen isoliert das Spitzewal-Phonetikalphabet, das der menschlichen Sprache sehr ähnlich ist und eine stärkere Informationstragungskapazität besitzt**](#12-machine-learning-isolates-the-sperm-whale-phonetic-alphabet-highly-similar-to-human-language-with-stronger-information-carrying-capacity)
  - [**13. Das PlantLncBoost-Modell erreicht eine Genauigkeit von bis zu 96% bei der interspezifischen lncRNA-Vorhersage.**](#13-plantlncboost-model-achieves-up-to-96-accuracy-in-cross-species-lncrna-prediction)
  - [**14. Perch 2.0 umfasst fast 15.000 Arten, die SOTA bei der Erkennung der bioakustischen Klassifizierung erfrischen**](#14-perch-20-covers-nearly-15000-species-refreshing-sota-in-bioacoustic-classification-detection)
- [**KI+ Landwirtschaft-Waldwirtschaft-Tierzucht**](#ai-agriculture-forestry-animal-husbandry)
  - [**1. Die Verwendung von Konvolutionen-Neuralnetzen zur schnellen und genauen Schätzung der Reisproduktivität**](#1-using-convolutional-neural-networks-for-rapid-and-accurate-rice-yield-estimation)
  - [**2. Modell, das über YOLOv5-Algorithmusmonitoren entwickelt wurde**](#2-model-designed-via-yolov5-algorithm-monitors-sow-posture-and-piglet-birth)
  - [**3. Die Kombination von Laborbeobachtungen und Maschinenlernen, um zu beweisen, daß Ultraschallgeräusche, die von gestressten Tomaten- und Tabakpflanzen emittiert werden, in der Luft reisen können**](#3-combining-laboratory-observation-and-machine-learning-to-prove-that-ultrasonic-sounds-emitted-by-stressed-tomato-and-tobacco-plants-can-travel-in-air)
  - [**4. Die Bildanalyse von Drohnen + KI erkennt Schädlinge aus dem Wald**](#4-drone--ai-image-analysis-detects-forestry-pests)
  - [**5. Computervision + Deep Learning entwickelt für ein Milchkühe-Lähmheitsdetektionssystem**](#5-computer-vision--deep-learning-developed-for-a-dairy-cow-lameness-detection-system)
- [**AI+ Meteorologie**](#ai-meteorology)
  - [**1. Überprüfung: Datenbasierte Modelle zur Wettervorhersage durch maschinelles Lernen**](#1-review-data-driven-machine-learning-weather-forecasting-models)
  - [**2. Überprüfung: Erhebung von Daten aus Hagelstürmenzentren und Vorhersage von extremen Wetter mit Hilfe großer Modelle**](#2-review-collecting-data-from-hailstorm-centers-and-predicting-extreme-weather-using-large-models)
  - [**3. Erstellung neuer Algorithmen zur präzisen Vorhersage von extremen Niederschlägen mit Hilfe von Simulationen zur Sturmlösung und maschinellem Lernen**](#3-creating-new-algorithms-to-accurately-predict-extreme-precipitation-using-global-storm-resolving-simulations-and-machine-learning)
  - [**4. Das Random Forest-basierte Maschinenlernungsmodell CSU-MLP prognostiziert mittlere Strenge Wetter**](#4-random-forest-based-machine-learning-model-csu-mlp-predicts-medium-range-severe-weather)
  - [**5. End-to-End-Daten-getriebene Wettervorhersage-System Aardvark Wetter beschleunigt die Vorhersagen im Vergleich zu traditionellen Methoden um Dutzende Male**](#5-end-to-end-data-driven-weather-forecasting-system-aardvark-weather-speeds-up-predictions-by-dozens-of-times-compared-to-traditional-methods)
  - [**6. Maschinelles Wettervorhersagenssystem FCN3 unterstützt ultra-schnelle Ein-GPU-Förderung**](#6-machine-learning-weather-forecasting-system-fcn3-supports-ultra-fast-single-gpu-inference)
  - [**7. Das indische Monsoon-Vorhersage-Modell, das auf 36 Wetterstationen basiert, ermöglicht eine gute Vorhersage im Städtischen Umfang.**](#7-indian-monsoon-forecasting-model-based-on-36-weather-stations-achieves-city-scale-fine-forecasting)
  - [**ACE2 vollendet eine 4-monatige Saisonprognose in nur 2 Minuten**](#8-ace2-completes-a-4-month-seasonal-forecast-in-just-2-minutes)
  - [**9. Ein zunehmendes Wettervorhersage-Modell VA-MoE wurde veröffentlicht, das mit einer Parameterreduzierung von 75% die SOTA-Leistung erzielt**](#9-incremental-weather-forecasting-model-va-moe-released-achieving-sota-performance-with-75-parameter-reduction)
  - [**10. Ein erleuchtetes Rolling Diffusion Model (ERDM) wurde veröffentlicht, das die langfristigen Prognoseprobleme löst und bei mittelfristigen und langfristigen Prognosen eine Führung über die EDM-Basislinien aufrechterhält.**](#10-elucidated-rolling-diffusion-model-erdm-released-solving-long-term-forecasting-challenges-and-maintaining-a-lead-over-edm-baselines-in-medium-to-long-term-forecasts)
  - [**11. Neues latente Diffusionsmodell OmniCast veröffentlicht, das die Fehlerammelung in autoregressiven Wetterprognosemodellen löst**](#11-novel-latent-diffusion-model-omnicast-released-resolving-error-accumulation-in-autoregressive-weather-forecasting-models)
  - [**12. NVIDIA schlägt eine neuartige Destillationsmethode für Langstrecken vor, die die Engpässe der KI bei der langfristigen Wettervorhersage durchbringt**](#12-nvidia-proposes-a-novel-long-range-distillation-method-breaking-ai-bottlenecks-in-long-term-weather-forecasting)
  - [**13. Gemeinsames Team schlägt das Modell des Graph Neural Network SeaCast vor, das die ultra-schnelle regionale Ozeanprognose ermöglicht**](#13-joint-team-proposes-graph-neural-network-model-seacast-achieving-ultra-fast-regional-ocean-forecasting)
- [**KI+ Astronomie**](#ai-astronomy)
  - [**1. Der PRIMO-Algorithmus lernt die Regeln der Lichtverbreitung um Schwarze Löcher, um schärfere Schwarze Löcherbilder zu rekonstruieren**](#1-primo-algorithm-learns-light-propagation-rules-around-black-holes-to-reconstruct-sharper-black-hole-images)
  - [**2. Ausbildung von Computervisionalgorithmen mit simulierten Daten zur Vertiefung und "wiederherstellung" astronomischer Bilder**](#2-training-computer-vision-algorithms-with-simulated-data-to-sharpen-and-restore-astronomical-images)
  - [**3. Die Verwendung eines unüberwachten Maschinelernalgorithmus Astronomie zur Suche nach zuvor übersehenen Anomalien**](#3-using-unsupervised-machine-learning-algorithm-astronomaly-to-find-previously-overlooked-anomalies)
  - [**4. Maschinelles Lernen basierende Methode zur CME-Identifizierung und Parametergewinnung**](#4-machine-learning-based-method-for-cme-identification-and-parameter-extraction)
  - [**5. Deep Learning entdeckt 107 Fälle von neutralen Kohlenstoff-Absorptionslinien**](#5-deep-learning-discovers-107-cases-of-neutral-carbon-absorption-lines)
  - [**6. Das StarFusion-Modell erreicht eine hohe räumliche Auflösung im Bild**](#6-starfusion-model-achieves-high-spatial-resolution-image-prediction)
  - [**7. Satellitenbildgenerierungsmethode auf der Grundlage von SD3 entwickelt, die bisher größte Datensammlung für Fernerkennung, EcoMapper, erstellt.**](#7-satellite-image-generation-method-developed-based-on-sd3-constructing-the-largest-remote-sensing-dataset-to-date-ecomapper)
  - [**8. Geospatial AI Earth AI konzentriert sich auf 3 Kerndatenarten und verbessert die Fähigkeiten zur geospatialen Vernunft um 64%**](#8-geospatial-ai-earth-ai-focuses-on-3-core-data-types-improving-geospatial-reasoning-capabilities-by-64)
  - [**9. Das erste astronomische Multimodal-Fundamentmodell AION-1 wird geboren, das vorab auf 200 Millionen astronomische Ziele ausgebildet wurde**](#9-the-first-astronomical-multimodal-foundation-model-aion-1-is-born-pre-trained-on-200-million-astronomical-targets)
  - [**10. Die neuartige Daten-basierte Pipeline identifiziert genau 7 seltene Linsenproben von 810.000 Quasaren, die CNN nutzt.**](#10-novel-data-driven-pipeline-precisely-identifies-7-rare-lensed-samples-from-810000-quasars-using-cnn)
  - [**11. Das ESA-Team schlägt eine halbüberwachte Methode AnomalyMatch vor, um seltene Himmelskörper aus fast 100 Millionen Hubble-Dateien effizient zu untersuchen**](#11-esa-team-proposes-semi-supervised-method-anomalymatch-to-efficiently-screen-rare-celestial-bodies-from-nearly-100-million-hubble-records)
  - [**12. Die Universität Warwick schlägt die RAVEN-Pipeline vor, mit der 118 neue Exoplaneten bestätigt werden.**](#12-university-of-warwick-proposes-the-raven-validation-pipeline-confirming-118-new-exoplanets)
  - [**13. Die Universität von Warwick schlägt ein Ensembel-Lernrahmen vor, um sehr genaue Asteroseismische Parameter für δ-Scuti-Sterne vorherzusagen**](#13-university-of-warwick-proposes-an-ensemble-learning-framework-to-highly-accurately-predict-asteroseismic-parameters-for-δ-scuti-stars)
  - [**14. Das spanische Forschungsteam schlägt das StreakMind-System vor, das KI nutzt, um Satellitenstreifen in astronomischen Bildern automatisch zu erkennen**](#14-spanish-research-team-proposes-the-streakmind-system-utilizing-ai-to-automatically-detect-satellite-streaks-in-astronomical-images)
- [**KI+ Naturkatastrophe**](#ai-natural-disaster)
  - [**1. Maschinelles Lernen prognostiziert das Landverschwemmungsrisiko in den nächsten 40 Jahren**](#1-machine-learning-predicts-land-subsidence-risk-over-the-next-40-years)
  - [**2. Semantisches Segmentierungsmodell SCDUNet++ zur Erdrutschkartierung**](#2-semantic-segmentation-model-scdunet-used-for-landslide-mapping)
  - [**3. Neuronale Netzwerke konvertieren 2D-Sonnenbilder in 3D-rekonstruierte Bilder**](#3-neural-networks-convert-2d-solar-images-into-3d-reconstructed-images)
  - [**4. Additive neuronale Netzwerke analysieren Faktoren, die Naturkatastrophen beeinflussen**](#4-additive-neural-networks-analyze-influencing-factors-in-natural-disasters)
  - [**5. Verwenden Sie erklärbare KI, um verschiedene geografische Faktoren in Gippsland, Australien zu analysieren**](#5-using-explainable-ai-to-analyze-various-geographical-factors-in-gippsland-australia)
  - [**6. Ein auf Maschinenlernen basierendes Hochwasservorhersage-Modell**](#6-machine-learning-based-flood-forecasting-model)
  - [**7. ED-DLSTM ermöglicht die Vorhersage von Überschwemmungen in unbeobachteten Gebieten**](#7-ed-dlstm-achieves-flood-prediction-in-unmonitored-areas)
  - [**8. Das ChloroFormer-Modell warnt frühzeitig vor Meereseelblühen**](#8-chloroformer-model-provides-early-warning-of-marine-algal-blooms)
  - [**9. Das erste marine große Sprachmodell OceanGPT, das von ACL 2024 akzeptiert wurde!**](#9-the-first-marine-large-language-model-oceangpt-accepted-by-acl-2024-underwater-embodied-ai-becomes-reality)
  - [**10. KI prognostiziert globale Erwärmungstrends**](#10-ai-predicts-global-warming-trends)
  - [**11. Neues GeoAI-Modell erklärt die Verteilung des Oberflächenwärmeflusses auf dem tibetischen Hochland**](#11-new-geoai-model-explains-surface-heat-flow-distribution-on-the-tibetan-plateau)
  - [**12. "WenHai" Meeresumwelt intelligente Prognose Großmodell übertreibt numerische Meeresprognose**](#12-wenhai-marine-environment-intelligent-forecasting-large-model-outperforms-numerical-marine-forecasting)
  - [**13. Die Universität von Minnesota schlägt ein wissensorientiertes Modell des maschinellen Lernens FHNN vor, das eine hochpräzise Hochwasservorhersage ermöglicht**](#13-university-of-minnesota-proposes-knowledge-guided-machine-learning-model-fhnn-realizing-high-precision-flood-forecasting)
  - [**14. Google veröffentlicht Version 2 seines globalen Hochwasserprognosesystems, das die gültigen Prognosezeiten erheblich verlängert**](#14-google-releases-version-2-of-its-global-flood-forecasting-system-significantly-extending-valid-forecast-times)
- [**Andere**](#others)
  - [**1. TacticAI Fußballassistent erreicht 90% praktische Nützlichkeit in taktischen Layouts**](#1-tacticai-football-assistant-hits-90-practical-utility-in-tactical-layouts)
  - [**2. Das Diffusionsmodell SPDiff ermöglicht die Simulation der Massenbewegung auf langer Reichweite.**](#2-denoising-diffusion-model-spdiff-enables-long-range-crowd-movement-simulation)
  - [**3. Intelligente wissenschaftliche Einrichtungen führen zu Paradigmenwechseln in der Forschung**](#3-intelligent-scientific-facilities-drive-paradigm-shifts-in-research)
  - [**4. DeepSymNet stellt symbolische Ausdrücke dar, die auf beaufsichtigtem Lernen basieren**](#4-deepsymnet-represents-symbolic-expressions-based-on-supervised-learning)
  - [**5. Das große Sprachmodell ChipNeMo unterstützt Ingenieure bei der Entwicklung von Chips**](#5-large-language-model-chipnemo-assists-engineers-in-chip-design)
  - [**6. AlphaGeometrie kann Geometrieprobleme lösen**](#6-alphageometry-can-solve-geometry-problems)
  - [**7. Verstärkung des Lernens in der Stadtplanung**](#7-reinforcement-learning-applied-to-urban-spatial-planning)
  - [**8. ChatArena-Framework: Werwolf mit großen Sprachmodellen spielen**](#8-chatarena-framework-playing-werewolf-with-large-language-models)
  - [**9. Überprüfung: 30 Wissenschaftler veröffentlichen in Nature eine 10-jährige Retrospektive, in der die KI wissenschaftliche Paradigmen umgestaltet**](#9-review-30-scholars-co-publish-in-nature-10-year-retrospective-deconstructs-how-ai-reshapes-scientific-paradigms)
  - [**10. Ithaca unterstützt Epigraphen bei der Wiederherstellung von Texten, der chronologischen und geografischen Zuteilung**](#10-ithaca-assists-epigraphers-in-text-restoration-chronological-attribution-and-geographical-attribution)
  - [**11. KI in vorwärts- und umgekehrten Problemen der Metoptik, Datenanalyse auf Basis von Metasurface-Systemen**](#11-ai-in-forward-and-inverse-problems-of-meta-optics-data-analysis-based-on-metasurface-systems)
  - [**12. Neue Methode der georganischen künstlichen Intelligenz: Geographisch gewichtete logistische Regression des neuronalen Netzwerks**](#12-a-new-geospatial-artificial-intelligence-method-geographically-neural-network-weighted-logistic-regression)
  - [**13. Durch die Verwendung von Diffusionsmodellen zur Erstellung von Parametern des neuronalen Netzwerks wird das Raumzeit- und Kurzschusslernen zu einem Diffusionsmodellvor-Ausbildungsproblem verwandelt.**](#13-using-diffusion-models-to-generate-neural-network-parameters-transforming-spatiotemporal-few-shot-learning-into-a-diffusion-model-pre-training-problem)
  - [**14. Neueste AI4S-Insights von Fei-Fei Li's Team: 16 innovative Technologien zusammenfassend, die Biologie/Materialien/Gesundheitswesen/Diagnose abdecken**](#14-latest-ai4s-insights-from-fei-fei-lis-team-16-innovative-technologies-summarized-covering-biologymaterialshealthcarediagnostics)
  - [**15. Genaue Vorhersage der Wohnungspreise in Wuhan! das Osp-GNNWR-Modell beschreibt komplexe räumliche Prozesse und geographische Phänomene genau**](#15-accurate-prediction-of-wuhan-housing-prices-osp-gnnwr-model-accurately-describes-complex-spatial-processes-and-geographical-phenomena)
  - [**16. Einführung von Null-Shoot-Lernen, um ein bedingtes Diffusionsmodell freizusetzen, das für die Entschlüsselung von Orakel-Knochenschriften optimiert ist**](#16-introducing-zero-shot-learning-to-release-a-conditional-diffusion-model-optimized-for-oracle-bone-script-decipherment)
  - [**17. Stanford/Apple und 23 andere Institutionen veröffentlichen den DCLM-Benchmark; das Fundamentmodell funktioniert gleichzeitig mit Llama3 8B**](#17-stanfordapple-and-23-other-institutions-release-the-dclm-benchmark-foundation-model-performs-on-par-with-llama3-8b)
  - [**18. PoCo löst das Dilemma der Heterogenität der Datenquellen und ermöglicht es Robotern, mehrere Aufgaben flexibel auszuführen**](#18-poco-solves-the-data-source-heterogeneity-dilemma-enabling-robots-to-execute-multi-tasks-flexibly)
  - [**19. Mit 140.000 Bildern! Oracle Knochen-Skript-Datensatz hilft dem Team, den ACL Best Paper Award zu gewinnen**](#19-containing-140000-images-oracle-bone-script-dataset-helps-team-win-acl-best-paper-award)
  - [**20. Mit dem Vorschlag eines Kanalvorhersage-Systems, das auf vorübergehend ausgebildeten LLMs basiert, ermöglicht GPT-2 die physische Schicht der drahtlosen Kommunikation**](#20-proposing-a-channel-prediction-scheme-based-on-pre-trained-llms-gpt-2-empowers-the-physical-layer-of-wireless-communications)
  - [**21. Das erste Modell des Generativen Adversarialen Netzwerks für Multi-Stich-Embroiderie**](#21-the-first-generative-adversarial-network-model-for-multi-stitch-embroidery)
  - [**22. Fast Automated Scanning Toolkit (FAST) erwirbt effizient Probeninformationen**](#22-fast-automated-scanning-toolkit-fast-efficiently-acquires-sample-information)
  - [**23. Population Dynamics Foundation Modell PDFM Open-Source, präzise Vorhersage der Arbeitslosigkeit und Armut in den USA**](#23-population-dynamics-foundation-model-pdfm-open-sourced-precisely-predicting-us-unemployment-and-poverty-rates)
  - [**24. Das Deep Learning-Modell CatGWR schätzt die räumliche Nichtstationarität**](#24-deep-learning-model-catgwr-estimates-spatial-non-stationarity)
  - [**25. Das weltweit erste VR-Übungsinterventionssystem REVERIE verändert die Gesundheit von Gehirn, Körper und Geist der Jugendlichen**](#25-worlds-first-vr-exercise-intervention-system-reverie-reshapes-youth-brain-body-mind-health)
  - [**26. Auf der Grundlage von mehr als 176.000 Inschriftdaten erzielt Aeneas erstmals eine willkürliche längere Restaurierung alter römischer Inschriften**](#26-based-on-over-176k-inscription-data-aeneas-achieves-arbitrary-length-restoration-of-ancient-roman-inscriptions-for-the-first-time)
  - [**27. Panorama-Video-Generations-Framework PanoWan verwaltet auch Null-Shot-Videobearbeitung**](#27-panoramic-video-generation-framework-panowan-also-handles-zero-shot-video-editing)
  - [**28. Ein intelligentes System für die Klassifizierung von Keramik auf der Grundlage von YOLOv11 integriert visuelle Modellierung und wirtschaftliche Analyse, wodurch die Klassifizierung und die Wertschätzung von Artefakten erreicht werden**](#28-yolov11-based-ceramic-classification-intelligent-framework-integrates-visual-modeling-and-economic-analysis-achieving-artifact-classification-and-value-estimation)
  - [**29. Geborener Chip "Microwave Brain", der mit einer Leistung von 176 milliwatt gleichzeitig Daten und drahtlose Signale mit einer Genauigkeit von 75% verarbeitet**](#29-microwave-brain-chip-born-simultaneously-processing-ultra-high-speed-data-and-wireless-signals-with-75-accuracy-at-176-milliwatts-power)
  - [**30. Raumzeit-Imputations- und Vorhersage-Modell STIMP veröffentlicht, der präzise Vorhersagen der Küstenverteilung von Chlorophyll-a realisiert**](#30-spatiotemporal-imputation-and-prediction-model-stimp-released-realizing-precise-predictions-of-coastal-chlorophyll-a-distribution)
  - [**31. MIT und andere erreichen eine hochpräzise Vorhersage der Plasmadynamik unter wenigen Schussbedingungen auf der Grundlage des maschinellen Lernens**](#31-mit-and-others-achieve-high-precision-prediction-of-plasma-dynamics-under-few-shot-conditions-based-on-machine-learning)
  - [**32. Reac-Discovery verbindet mathematische Modellierung, maschinelles Lernen und automatisierte Experimente, um die Herausforderung der Universalität selbstfahrender Laborsysteme zu lösen**](#32-reac-discovery-fuses-mathematical-modeling-machine-learning-and-automated-experiments-to-solve-the-universality-challenge-of-self-driving-laboratory-systems)
  - [**33. Das erste neuronalmodellierende Framework NOBLE, das durch menschliche Kortikaldaten validiert wurde, wird eingeführt.**](#33-the-first-neuron-modeling-framework-noble-validated-by-human-cortical-data-is-introduced)
  - [**34. Bild-Geolokations-Framework LocDiff wird online, ermöglicht grid-freie und Referenzbibliothek-freie globale Präzisionsposition**](#34-image-geolocation-framework-locdiff-goes-online-enabling-grid-free-and-reference-library-free-global-precision-positioning)
  - [**35. Maschinelles Lernen in Kombination mit py-GC-MS identifiziert mit Genauigkeit Beweise für Leben in Archeanischen Felsen**](#35-machine-learning-combined-with-py-gc-ms-precisely-identifies-evidence-of-life-in-archean-rocks)
  - [**36. Das Team der Tsinghua Universität schlägt die neuro-symbolische Regressionsmethode ND2 vor, um komplexe Netzwerkdynamikformeln automatisch abzuleiten**](#36-tsinghua-university-team-proposes-neuro-symbolic-regression-method-nd-to-automatically-derive-complex-network-dynamics-formulas)
  - [**37. Das Team der Universität Zhejiang schlägt eine geologisch begrenzte Methode zur Vorhersage der Mineralperspektivität vor, die die Mineralisierungsanisotropie explizit darstellt**](#37-zhejiang-university-team-proposes-geologically-constrained-mineral-prospectivity-prediction-method-explicitly-depicting-mineralization-anisotropy)
  - [**Das Team von Tsinghua und UChicago veröffentlicht in Nature: KI-Tools erweitern die Wirkung von Wissenschaftlern, aber konzentrieren sich auf die Wissenschaft**](#38-tsinghua-and-uchicago-team-publishes-in-nature-ai-tools-expand-scientists-impact-but-contract-sciences-focus)
  - [**Das UC-Team schlägt ein spectrometer auf Chipskala mit KI vor, das eine hohe Spektraltreue in einem sehr kleinen Volumen erreicht.**](#39-uc-team-proposes-ai-augmented-chip-scale-spectrometer-achieving-high-spectral-fidelity-in-an-ultra-small-volume)
  - [**40. US DOE Oak Ridge National Lab schlägt die D-CHAG-Methode vor, die den Speicher-Fußabdruck für Multi-Kanal-Fundamentmodelle erheblich reduziert**](#40-us-doe-oak-ridge-national-lab-proposes-d-chag-method-significantly-reducing-memory-footprint-for-multi-channel-foundation-models)
  - [**41. Polymathic AI-Team schlägt das Modell Walrus als kontinuierliches Fundament vor, das Rekorde in der Leistung der Cross-Domain-Simulation setzt**](#41-polymathic-ai-team-proposes-continuum-foundation-model-walrus-setting-records-in-cross-domain-simulation-performance)
  - [**42. EPFL schlägt eine neue Architektur vor: DYNAMI-CAL GraphNet, ein physikalisch fundiertes GNN, das die Multi-Body-Dynamik genau modelliert.**](#42-epfl-proposes-novel-architecture-dynami-cal-graphnet-a-physics-informed-gnn-accurately-modeling-multi-body-dynamics)
  - [**43. Das MIT schlägt eine neue Methode vor: Wave-Former, die eine hochpräzise 3D-Rekonstruktion vollständig verborgener Objekte ermöglicht.**](#43-mit-proposes-novel-method-wave-former-achieving-high-precision-3d-reconstruction-of-completely-occluded-objects)
  - [**44. Das MIT schlägt ein DRiffusion-Draft-and-Refine-Parallelen-Framework vor, das eine Verlustfreie Beschleunigung für die Diffusionsmodell-Förderung realisiert.**](#44-mit-proposes-driffusion-draft-and-refine-parallel-framework-realizing-lossless-acceleration-for-diffusion-model-inference)
  - [**45. Technion - Israel Institute of Technology schlägt Task Token vor, die Verhaltensgrundlagenmodelle flexibel an bestimmte Aufgaben anpassen lassen**](#45-technion---israel-institute-of-technology-proposes-task-tokens-allowing-behavior-foundation-models-to-flexibly-adapt-to-specific-tasks)
  - [**46. MIT und andere schlagen EnergAIzer-Framework vor, um eine schnelle und genaue GPU-Power-Schätzung für KI-Arbeitsbelastungen zu erreichen**](#46-mit-and-others-propose-energaizer-framework-achieving-fast-and-accurate-gpu-power-estimation-for-ai-workloads)
  - [**47. Die UIUC schlägt ein heterogenes Agentenrahmen Eywa vor, das die Grenzen von sprachzentrierten großen Modellen durchbricht.**](#47-uiuc-proposes-heterogeneous-agent-framework-eywa-breaking-through-the-limits-of-language-centric-large-models)
  - [**48. Die Stanford University und andere nutzen LSTM-Surrogatmodelle, um eine 252x beschleunigte Simulation der nichtlinearen Optik zweiter Ordnung zu erreichen.**](#48-stanford-university-and-others-use-lstm-surrogate-models-to-achieve-252x-accelerated-simulation-of-second-order-nonlinear-optics)

## **Vorwort**

Seit 2020 haben wissenschaftliche Projekte, die von AlphaFold vertreten werden, KI für Wissenschaft (AI4S) in die Haupttasche der KI-Anwendungen gebracht. In den letzten Jahren sind von Biopharmazeutika über Astronomie und Meteorologie bis hin zu grundlegenden Disziplinen wie Materialchemie alle neue Schlachtfelder für KI geworden.

Da zunehmend viele interdisziplinäre Talente Technologien wie maschinelles Lernen und Deep Learning in ihren Forschungsfeldern zur Datenverarbeitung und zum Modellbau anwenden und die Zusammenarbeit interdisziplinärer Forschungsteams verstärkt wird, werden die Fähigkeiten von AI4S von mehr wissenschaftlichen Forschern bemerkt. Es hat jedoch noch nicht das Ziel einer groß angelegten Anwendung erreicht. Viele Probleme müssen dringend gelöst werden, wie die Verbesserung der Reproduzierbarkeit verwandter Forschung, die Senkung der technischen Schwelle und die Verbesserung der Datenqualität.

Aktuell haben viele Regierungen und führende Technologieunternehmen neben den Universitäten und Forschungseinrichtungen, die AI4S aktiv erforschen, auch das Potenzial der KI bemerkt, die wissenschaftliche Forschung zu revolutionieren, und haben relevante Richtlinien und Layouts eingeführt. Man kann sagen, dass AI4S der unbestreitbare allgemeine Trend ist.

Als eine der frühesten Gemeinschaften, die sich auf KI für Wissenschaft konzentriert haben, freut sich "HyperAI" darüber, die neuesten Forschungsfortschritte und Ergebnisse universell zu teilen und gleichzeitig das Wachstum der Branche zu begleiten. Wir hoffen, dass mehr Teams durch Interpretation hochmoderner Papiere und Richtlinien die Hilfe sehen können, die KI für wissenschaftliche Forschung bringt und zur Entwicklung von KI für Wissenschaft beiträgt.

Bis heute hat HyperAI fast 200 Arbeiten interpretiert und geteilt. Für eine einfache Abrufmöglichkeit haben wir die Artikel nach Disziplin klassifiziert, die Veröffentlichungszeitschriften und -daten angezeigt und Keywords (Forschungsteams, verwandte Forschung, Datensätze usw.) extrahiert. Sie können auf die Titel klicken, um auf die Research-Highlight-Seite des Papiers zu springen (die den vollständigen Download-Link für das Papier enthält).

Dieses Dokument wird als Open-Source-Projekt vorgestellt. Wir werden die Interpretationsartikel kontinuierlich aktualisieren und wir begrüßen auch alle, exzellente Forschungsergebnisse einzureichen. Wenn Ihr Team/Forschungsgruppe Berichterstattungsbedürfnisse hat, können Sie WeChat: 神经星星 (WeChat ID: Hyperai01) hinzufügen.

## **KI+ Biopharmazeutika**

### **1. [AdaDR übertrifft mehrere Benchmark-Methoden bei der Umposition von Medikamenten](https://hyper.ai/news/30434)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30434](https://hyper.ai/news/30434)
- **Forschungsteam:** Das Forschungsteam von Min Li an der Central South University
- **Verwandte Forschung:** Gdatensatz, Cdatensatz, Ldatensatz, LRSSL-Datensatz, GCNs-Framework, AdaDR
- **Veröffentlichte Zeitschrift:** Bioinformatik, 2024.01
- **Papierverbindung:** [Drogenaufstellung mit adaptivem Grafikkonvolutionsnetzwerk](https://academic.oup.com/bioinformatics/article/40/1/btad748/7467059)

### **2. [IMN4NPD beschleunigt die Dereplikation von umfangreichen Clustern in molekularen Netzwerken und bietet Anmerkungen für Selbstschleifen und gepaarte Knoten](https://hyper.ai/news/30363)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30363](https://hyper.ai/news/30363)
- **Forschungsteam:** Shao Lius Forschungsteam an der Central South University
- **Verwandte Forschung:** Spektraldatenbank MS/MS, Strukturdatenbank, molDiscovery, NPCClassifier, t-SNE
- **Veröffentlichte Zeitschrift:** Analytische Chemie, 2024.02
- **Papierverbindung:** [IMN4NPD: Ein integrierter Molekularnetzwerk für die Entstehung natürlicher Produkte](https://doi.org/10.1021/acs.analchem.3c04746)

### **3. [Tiefes generatives Modell MIDAS für die mosaische Integration von Einzelzell-Multi-Omics-Daten](https://hyper.ai/news/29785)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29785](https://hyper.ai/news/29785)
- **Forschungsteam:** Xiaomin Ying's Forschungsteam an der Akademie für Militärmedizinische Wissenschaften
- **Verwandte Forschung:** IPBMC-Datensatz, vollständig dogmatischer Datensatz, vollständig wissenschaftlicher Datensatz, MMIDAS, selbstüberwachendes Lernen, informationstheoretische Ansätze, tiefe neuronale Netzwerke, SGVB, einzelzellübergreifende Mosaikdaten
- **Veröffentlichte Zeitschrift:** Naturbiotechnologie, 2024.01
- **Papierverbindung:** [Mosaikintegration und Wissenstransfer von multimodalem Einzelzelldaten mit MIDAS](https://www.nature.com/articles/s41587-023-02040-y)

### **4. [ResGen: Ein 3D-Molekülgenerationsmodell auf Basis von Protein-Taschen](https://hyper.ai/news/29026)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29026](https://hyper.ai/news/29026)
- **Forschungsteam:** Das Forschungsteam von Tingjun Hou an der Universität Zhejiang
- **Verwandte Forschung:** CrossDock2020 Datensatz, global autoregressiv, atom autoregressiv, parallel multiscale Modellierung, SBMG. 8 mal schneller als modernste Techniken.
- **Veröffentlichte Zeitschrift:** Naturmaschinenintelligenz, 2023.09
- **Papierverbindung:** [ResGen ist ein Taschenbewusstes 3D-Molekülgenerationsmodell, das auf parallem Multiscale-Modellierung basiert](https://www.nature.com/articles/s42256-023-00712-7)

### **5. [Große Modelle + maschinelles Lernen zur präzisen Vorhersage von enzymkinetischen Parametern](https://hyper.ai/news/29000)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29000](https://hyper.ai/news/29000)
- **Forschungsteam:** Xiaozhou Loos Forschungsteam bei CAS
- **Verwandte Forschung:** kcat/Km Datensatz, Michaelis Konstantsatz, pH- und Temperaturdatensatz, DLKcat Datensatz, UniKP-Framework, ProtT5-XL-UniRef50, SMILES Transformatormodell, Ensemblemodelle, Random Forest, Extrem Randomized Trees, lineare Regressionsmodelle
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2023.12
- **Papierverbindung:** [UniKP: ein einheitlicher Rahmen für die Vorhersage von enzymkinetischen Parametern](https://www.nature.com/articles/s41467-023-44113-1)

### **6. [MIT nutzt Deep Learning, um neuartige Antibiotika zu entdecken](https://hyper.ai/news/28886)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28886](https://hyper.ai/news/28886)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** Mcule-Datenbank, Broad Institute-Datenbank, Graph Neural Network Chemprop, Deep Learning. 3.646 Antibiotika-Verbindungen wurden untersucht.
- **Veröffentlichte Zeitschrift:** Natur, Jahr 2023.12
- **Papierverbindung:** [Entdeckung einer Strukturklasse von Antibiotika mit erklärbarem tiefgreifendem Lernen](https://www.nature.com/articles/s41586-023-06887-8)

### **7. [Neuronale Netzwerke entschlüsseln die GPCR-G-Protein-Koppel-Selektivität](https://hyper.ai/news/28361)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28361](https://hyper.ai/news/28361)
- **Forschungsteam:** Forschungsteam an der Universität von Florida
- **Verwandte Forschung:** Binäre Klassifizierung von Nervennetzwerken, maschinelles Lernen, unüberwachtes Deep Learning-Modell.
- **Veröffentlichte Zeitschrift:** Zellberichte, 2023.09
- **Papierverbindung:** [Regeln und Mechanismen für die G-Protein-Koppel-Selektivität von GPCRs](https://doi.org/10.1016/j.celrep.2023.113173)

### **8. [Macformer makrozykliert das acyklische Medikament fedratinib](https://hyper.ai/news/28189)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28189](https://hyper.ai/news/28189)
- **Forschungsteam:** Die Forschungsgruppe von Honglin Li an der Ostchinesischen Universität für Wissenschaft und Technologie
- **Verwandte Forschung:** ZINC Datensatz, ChEMBL-Datenbank, Deep Learning-Modelle, Transformer-Architektur, Macformer
- **Veröffentlichte Zeitschrift:** Mitteilung über die Natur, 2023.07
- **Papierverbindung:** [Makrozyklisierung linearer Moleküle durch tiefes Lernen zur Erleichterung der Entdeckung makrozyklischer Medikamentenkandidaten](https://www.nature.com/articles/s41467-023-40219-8)

### **9. [Regressionsnetzwerk + CGMD prognostiziert Selbstmontage-Eigenschaften von Zehntausenden von Milliarden von Peptiden](https://hyper.ai/news/26408)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/26408](https://hyper.ai/news/26408)
- **Forschungsteam:** Wenbin Li's Forschungsgruppe an der Westlake University
- **Verwandte Forschung:** Latinische Hyperkubenproben, CGMD-Modell, AP-Vorhersage-Modell, Transformer, MLP, TRN-Modell.
- **Veröffentlichte Zeitschrift:** Weiterentwickelte Wissenschaft, 2023.09
- **Papierverbindung:** [Deep Learning ermöglicht die Entdeckung von selbstversammelten Peptiden mit über 10 Billionen Sequenzen](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202301544)

### **10. [Unüberwachtes Lernen prognostiziert 71 Millionen Genmutationen](https://hyper.ai/news/26154)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/26154](https://hyper.ai/news/26154)
- **Forschungsteam:** Google DeepMind Forschungsteam
- **Verwandte Forschung:** ClinVar Datensatz, AlphaFold, schwaches Lernen, unbeaufsichtigtes Lernen, AlphaMissense
- **Veröffentlichte Zeitschrift:** Wissenschaft, 2023.09
- **Papierverbindung:** [Genaue Vorhersage der Wirkung der Protom-weiten Missense-Variante mit AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492)

### **11. [Geruchsanalyse KI entwickelt auf der Grundlage von Graph Neural Networks (GNN)](https://hyper.ai/news/25952)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/25952](https://hyper.ai/news/25952)
- **Forschungsteam:** Osmo, eine Spin-off von Google Research
- **Verwandte Forschung:** GS-LF-Datenbank, GNN, Bayesian Optimierungsalgorithmus.
- **Veröffentlichte Zeitschrift:** Wissenschaft, 2023.08
- **Papierverbindung:** [Eine Hauptgeruchskarte vereint verschiedene Aufgaben in der Geruchsempfindung](https://www.science.org/doi/full/10.1126/science.ade4401)

### **12. [Graphische neuronale Netzwerke suchen nach sicheren und hochwirksamen Anti-Aging-Zutaten](https://hyper.ai/news/25822)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/25822](https://hyper.ai/news/25822)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** Die tatsächliche positive Rate des Chemprop-Modells betrug 11,6%, höher als die 1,9% der manuellen Screening.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2023.05
- **Papierverbindung:** [Entdeckung von Kleinmolekülsenolytiken mit tiefen neuronalen Netzwerken](https://www.nature.com/articles/s43587-023-00415-z)

### **13. [Maschinelles Lernen analysiert quantitativ Dopaminfreisetzungsmengen und -standorte](https://hyper.ai/news/25153)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/25153](https://hyper.ai/news/25153)
- **Forschungsteam:** Forschungsteam an der Universität Kalifornien, Berkeley
- **Verwandte Forschung:** SVM, RF, maschinelles Lernen. Die Genauigkeit bei der Bestimmung der Stimulationsintensität erreichte 0,832, und die Genauigkeit für die Dopamin-Ausgabe-Hirnregion betrug 0,708.
- **Veröffentlichte Zeitschrift:** ACS Chemical Neuroscience, 2023.06
- **Papierverbindung:** [Identifizierung von neuronalen Signaturen von Dopaminsignalien mit maschinellem Lernen](https://pubs.acs.org/doi/full/10.1021/acschemneuro.3c00001)

### **14. [Maschinelles Lernen entdeckt drei Anti-Aging-Medikamente](https://hyper.ai/news/24578)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/24578](https://hyper.ai/news/24578)
- **Forschungsteam:** Dr. James L. Kirkland und das Team der Mayo Clinic
- **Verwandte Forschung:** Maschinelles Lernen, Random Forest (RF) Modell, 5-fache Kreuzvalidierung.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2023.06
- **Papierverbindung:** [Entdeckung von Senolytics mit Hilfe von Maschinellen Lernungen](https://www.nature.com/articles/s41467-023-39120-1)

### **15. [Deep Learning-Bildschirme für neuartige Antibiotika, die Acinetobacter baumannii hemmen](https://hyper.ai/news/24499)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/24499](https://hyper.ai/news/24499)
- **Forschungsteam:** Forschungsteams an der McMaster University und am MIT
- **Verwandte Forschung:** Das Broad Institute-Screening-Subbibliothek mit hoher Durchsatzleistung, maschinelles Lernen, Deep Learning. Sie untersuchten rund 7.500 Moleküle und entdeckten eine antibakterielle Verbindung namens Abaucin.
- **Veröffentlichte Zeitschrift:** Natur Chemische Biologie, 2023.05
- **Papierverbindung:** [Durch tiefgreifendes Lernen geführte Entdeckung eines Antibiotika, das auf Acinetobacter baumannii abzielt](https://www.nature.com/articles/s41589-023-01349-8#access-options)

### **16. [Maschinelle Lernmodelle, die zur Vorhersage der Biolink-Druckbarkeit angewendet werden](https://hyper.ai/news/24237)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/24237](https://hyper.ai/news/24237)
- **Forschungsteam:** Forschungsteams der Universität Santiago de Compostela und der UCL
- **Verwandte Forschung:** Modelle für maschinelles Lernen, ANN, SVM, RF, kappa, R2, MAE. Genauigkeit erreichte 97,22%.
- **Veröffentlichte Zeitschrift:** Das Internationale Journal of Pharmaceutics: X, 2023.12
- **Papierverbindung:** [Vorhersagen von Ergebnissen der pharmazeutischen Tinte-Jet-Drucke mit Hilfe von Maschinenlernen](https://www.sciencedirect.com/science/article/pii/S2590156723000257)

### **17. [Maschinelles Lernen unterscheidet pluripotente Stammzellen](https://hyper.ai/news/23940)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/23940](https://hyper.ai/news/23940)
- **Forschungsteam:** Yang Zhao's und Yu Zhang's Forschungsgruppen an der Universität Peking, gemeinsam mit Yiyan Liu's Forschungsgruppe an der Universität Beijing Jiaotong
- **Verwandte Forschung:** Live-Cell-Bildgebung, maschinelles Lernen, schwach überwachte Modelle, pix2pix Deep Learning-Modell.
- **Veröffentlichte Zeitschrift:** Die Zellentdeckung, 2023.06
- **Papierverbindung:** [Eine Live-Cell-Bild-basierte Maschinelerningsstrategie zur Verringerung der Variabilität in PSC-Differenzierungssystemen](https://www.nature.com/articles/s41421-023-00543-1)

### **18. [Maschinelles Lernmodell prognostiziert Drogenfreisetzung von lang wirkenden Injektiven](https://hyper.ai/news/33892)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33892](https://hyper.ai/news/33892)
- **Forschungsteam:** Forschungsteam der Universität Toronto
- **Verwandte Forschung:** MLR, Lasso, PLS, DT, RF, LGBM, XGB, AutoNGB, SVR, k-NN, NN, verschachtelte Kreuzvalidation, entfernteste Nachbar-Clustering-Algorithmus.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2023.01
- **Papierverbindung:** [Maschinelle Lernmodelle zur Beschleunigung der Konstruktion von polymerischen langwirkenden Injektiven](https://www.nature.com/articles/s41467-022-35343-w)

### **19. [Maschinelle Lernalgorithmen können die antimalärischen Eigenschaften von Pflanzen effektiv vorhersagen](https://hyper.ai/news/33883)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33883](https://hyper.ai/news/33883)
- **Forschungsteam:** Forschungsteam der Royal Botanic Gardens, Kew und der Universität St Andrews
- **Verwandte Forschung:** Logit, SVC, XGB, BNN, GridSearchCV-Algorithmen, 10-fache gestrichener Kreuzvalidation, Markov-Kette Monte Carlo-Iterationen. Genauigkeit von 0,67.
- **Veröffentlichte Zeitschrift:** Grenzen in der Pflanzenwissenschaft, 2023.05
- **Papierverbindung:** [Maschinelles Lernen verbessert die Vorhersage von Pflanzen als potenzielle Quellen von Antimalaria-Medikamenten](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10248027)

### **20. [Maschinelles Lernen-Ansemble-Methode prognostiziert Immunogenität von Virus-Proteinfragmenten](https://hyper.ai/news/30786)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30786](https://hyper.ai/news/30786)
- **Forschungsteam:** Das Forschungsteam von Jing Li an der Universität Beihang
- **Verwandte Forschung:** Protein-Datenbank UniProt, Protegen-Datenbank, Ensemble-Maschinelles Lernen-Ansatz VirusImmu, RF, XGBoost, kNN, Zufallsproben-Kreuzvalidierung.
- **Veröffentlichte Zeitschrift:** Die Kommission hat die Kommission mitgeteilt.
- **Papierverbindung:** [VirusImmu: ein neuartiger Ensemble-Maschinenlernansatz zur Vorhersage der viralen Immunogenität](https://www.biorxiv.org/content/10.1101/2023.11.23.568426v1)

### **21. [Generative KI verwendet, um neuartige Antibiotika zu entwickeln](https://hyper.ai/news/31421)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31421](https://hyper.ai/news/31421)
- **Forschungsteam:** McMaster Universität und Stanford Universität Team
- **Verwandte Forschung:** Pharmakon-1760 Bibliothek, Drug Repurposing Hub-Datenbank, synthetisches Kleinschutzgerät, Monte Carlo Tree Search, generatives KI-Modell SyntheMol. Er erzeugte 24,335 komplette Moleküle und entwarf strukturell neuartige Verbindungen, die leicht zu synthetisieren sind.
- **Veröffentlichte Zeitschrift:** Naturmaschinenintelligenz, 2024.03
- **Papierverbindung:** [Generative KI zur Gestaltung und Validierung leicht synthetisierbarer und strukturell neuartiger Antibiotika](https://www.nature.com/articles/s42256-024-00809-7 )

### **22. [Automatisiertes, hochgeschwindiges, mehrdimensionales Einzelpartikelverfolgungssystem, basierend auf Deep Learning](https://hyper.ai/news/31341)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31341](https://hyper.ai/news/31341)
- **Forschungsteam:** Prof. Ning Fangs Team an der Universität Xiamen
- **Verwandte Forschung:** Mehrdimensionale Bildgebungsgeräte, Dual-Focal-Flat-Bildgebung, Parallaxmikroskopie, multidimensionale Bildgebungsgeräte, Modelle des konvolutionären Neuralnetzes, Lärmbeständigkeit und Robustheit.
- **Veröffentlichte Zeitschrift:** Naturmaschinenintelligenz, 2024.03
- **Papierverbindung:** [Automatisierte mehrdimensionale Einzelpartikelverfolgung in lebenden Zellen mit Hilfe von Deep Learning](https://doi.org/10.1021/acs.nanolett.3c04870)

### **23. [ProEnsemble-Framework für maschinelles Lernen: Optimierung von Kombinationen von Entwicklungswegförderern](https://hyper.ai/news/30594)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30594](https://hyper.ai/news/30594)
- **Forschungsteam:** Xiaozhou Loos Team bei CAS
- **Verwandte Forschung:** Synthetische Biologie, Gen-Epistasis, Automatisierungsplattformen, 10-fache Quervalidation, Ensemblemodelle, Gradient Boosting Regressor, Ridge Regressor, Gradient Boosting, universelles Fahrwerk für eine effiziente Synthese von Flavonoiden.
- **Veröffentlichte Zeitschrift:** Weiterentwickelte Wissenschaft, 2024.02
- **Papierverbindung:** [Weiterentwicklung durch eine Strategie zur Abbau von Engpässen und zur Abbau von Engpässen und zur Balancierung von Flüssen durch maschinelles Lernen](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202306935)

### **24. [Mikroumweltbewusstes Graph-Neuralnetzwerk ProtLGN leitet die proteinorientierte Evolution](https://hyper.ai/news/32246)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32246](https://hyper.ai/news/32246)
- **Forschungsteam:** Die Forschungsgruppe von Liang Hong an der Shanghai Jiao Tong University
- **Verwandte Forschung:** Die Entwicklung der Protein-Mutationsprotein-Protein-Mutations-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-Protein-
- **Veröffentlichte Zeitschrift:** Das Europäische Parlament und die Europäische Kommission haben sich für die Durchführung der Maßnahmen zur Verbesserung der Sicherheit und des Gesundheitsschutzes eingesetzt.
- **Papierverbindung:** [Proteintechnik mit leichten Grafiken, die Neuralnetze verweigern](https://pubs.acs.org/doi/10.1021/acs.jcim.4c00036)

### **25. [Deep-Learning-Modell AlphaPPIMd: Erforschung konformativer Ensembles von Protein-Protein-Komplexen](https://hyper.ai/news/32435)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32435](https://hyper.ai/news/32435)
- **Forschungsteam:** Das Team von Jianmin Wang an der Universität Yonsei
- **Verwandte Forschung:** Deep Learning, generative AI, Transformer, generative Neural Network Learning, molekulare Dynamik, Barnase-Barstar-Komplex-Trajectory Set, Protein Data Bank, AlphaPPIMd-Modell, Selbstbetreuungsmechanismus, Funktionsoptimierungsmodul, Aufmerksamkeitsscores, All-Atoms-Modell. Durchschnittliche Trainingsgenauigkeit betrug 0,995, und durchschnittliche Validierungsgenauigkeit betrug 0,999.
- **Veröffentlichte Zeitschrift:** Journal of Chemical Theory and Computation, Jahr 2024.05
- **Papierverbindung:** [Erforschung der konformativen Ensembles des Protein-Protein-Komplexes mit einem generativen Modell auf Transformatorbasis](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00255)

### **26. [Neue Tumor-Suppressor-Protein-Abbauung dp53m hemmt die Krebszell-Proliferation](https://hyper.ai/news/32527)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32527](https://hyper.ai/news/32527)
- **Forschungsteam:** Das Team von Prof. Sijin Wu am Xi'an Jiaotong-Liverpool University Huihu College of Pharmacy und von Prof. Songbo Xie & Prof. Diansheng Zhong am Tianjin Medical University General Hospital
- **Verwandte Forschung:** MD-Simulation, iterative molekulare Docking-geführte Post-SELEX-Methode. dp53m erkennt speziell das p53-R175H-Protein und degradiert es.
- **Veröffentlichte Zeitschrift:** Wissenschaftlicher Bulletin, 2024.05
- **Papierverbindung:** [Ein auf DNA-Aptamer basierendes PROTAC zur präzisen Therapie von p53-R175H-Hotspot-mutanten-getriebenem Krebs](https://www.sciencedirect.com/science/article/pii/S2095927324003517)

### **27. [CVPR Best Student Paper! Das Multimodalmodell BioCLIP erzielt Null-Shot-Lernen](https://hyper.ai/news/32544)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32544](https://hyper.ai/news/32544)
- **Forschungsteam:** Das Team von Jiaman Wu an der Ohio State University
- **Verwandte Forschung:** Biobilddatensatz TreeOfLife-10M, multimodale Modelle, Computersicht, Visionencoder, Textencoder, autoregressives Sprachmodell.
- **Veröffentlichte Zeitschrift:** CVPR 2024, 2024.02
- **Papierverbindung:** [BIoCLIP: Ein Vision Foundation-Modell für den Baum des Lebens](https://openaccess.thecvf.com/content/CVPR2024/html/Stevens_BioCLIP_A_Vision_Foundation_Model_for_the_Tree_of_Life_CVPR_2024_paper.html)

### **28. [100 Millionen Parameter! Zellbasismodell scFundationmodelle 20.000 Gene gleichzeitig](https://hyper.ai/news/32623)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32623](https://hyper.ai/news/32623)
- **Forschungsteam:** Prof. Xuegong Zhang (Tsinghua Universität), Prof. Jianzhu Ma (Tsinghua AIR) und Dr. Le Song (BioMap)
- **Verwandte Forschung:** Intelligentes Zellfundationsmodell, menschliche Einzell-Omics-Daten DISCO, EMBL-EBI-Datenbanken, GEO-Datensätze, Single Cell Portal-Datensätze, HCA-Datensätze, hECA-Datensätze, Transformer, asymmetrische Encoder-Decoder-Struktur, Vektormodule, RDA-Modellierung.
- **Veröffentlichte Zeitschrift:** Naturmethoden, 2024.06
- **Papierverbindung:** [Gründungsmodell für die Einzelltranskriptomik](https://www.nature.com/articles/s41592-024-02305-7)

### **29. [Das von ICML akzeptierte Protein-Sprachmodell ESM-AA übertrifft die traditionelle SOTA](https://hyper.ai/news/32674)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32674](https://hyper.ai/news/32674)
- **Forschungsteam:** Prof. Hao Zhou (Tsinghua University), gemeinsam mit Peking University, Nanjing University und Shuimu BioSciences
- **Verwandte Forschung:** Proteindatensatz AlphaFold DB, Proteindatensatz Dp und molekulare Datensatz Dm, Dekompression, Multi-Skala-Masken-Sprachmodellierung.
- **Veröffentlichte Zeitschrift:** ICML 2024, 2024.06
- **Papierverbindung:** [ESM All-Atom: Multi-Scale Protein Language Model für die einheitliche molekulare Modellierung](https://icml.cc/virtual/2024/poster/35119)

### **30. [SPACE-Algorithmus veröffentlicht im Cell-Sub-Journal!](https://hyper.ai/news/32738)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32738](https://hyper.ai/news/32738)
- **Forschungsteam:** Qiangfeng Zhangs Gruppe an der Tsinghua Universität
- **Verwandte Forschung:** Räumliche Transkriptomik, STARmap-Maus PLA-Datensatz, MERFISH-Maus AB-Datensatz, MERFISH-Maus WB-Datensatz, Xenium menschliche BC-Datensatz, CosMx menschliche NSCLC-Datensatz, Visium menschliche Gehirn-Datensatz, Codierer, Nähegraph-Decodierer, Gen-Expressions-Decodierer, räumliche Nähe, selbstüberwachendes Lernen.
- **Veröffentlichte Zeitschrift:** Zellsysteme, 2024.06
- **Papierverbindung:** [Entdeckung von Gewebe-Modulen in Raumtranskriptomik-Daten mit einzelzellisierter Auflösung über zell-zell-interaktionsbewusste Zell-Einsatzungen](https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00124-8)

### **31. [Neue Durchbrüche auf Basis von AlphaFold zeigen dynamische Proteindiversität](https://hyper.ai/news/33075)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33075](https://hyper.ai/news/33075)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** Flow-Matching-Technologie, Protein-Sprachmodelle, neuronale Netzwerke, AlphaFold, ESMFold.
- **Veröffentlichte Zeitschrift:** ICML 2024, 2024.06
- **Papierverbindung:** [AlphaFold trifft Flow-Matching für die Erzeugung von Proteinensembeln](https://openreview.net/forum?id=rs8Sh2UASt)

### **32. [P450Diffusion: De novo Konstruktionsmethode für P450-Enzyme, die auf Diffusionsmodellen entwickelt wurden](https://hyper.ai/news/33057)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33057](https://hyper.ai/news/33057)
- **Forschungsteam:** Das Team von Huifeng Jiang und Jian Cheng am Tianjin Institute of Industrial Biotechnology, CAS
- **Verwandte Forschung:** Leitung der Entwicklung, Diffusionsmodelle, Deep Learning, Verweigerung der Diffusionsprobabilitätsmodelle, Dreipunktverankerung, Feinstimmungsdiffusionsmodelle, Vorbildung. Verbesserte katalytische Fähigkeiten um 3,5 Mal.
- **Veröffentlichte Zeitschrift:** Forschung, 2024.07
- **Papierverbindung:** [Entwurf des Enzyms Cytochrome P450 durch Einschränkung der katalytischen Tasche in einem Diffusionsmodell](https://spj.science.org/doi/10.34133/research.0413)

### **33. [Gleichwertige Graphen-Neuralnetzwerke, die zur Vorhersage der Zielproteinbindungsstelle verwendet werden und die Leistung um 20% steigern](https://hyper.ai/news/32957)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32957](https://hyper.ai/news/32957)
- **Forschungsteam:** Forschungsteam an der Gaoling School of Artificial Intelligence der Renmin University of China
- **Verwandte Forschung:** E(3) Gleichvariantengraph-Neuralnetzwerke, Konvolutionneuralnetzwerke, EquiPocket-Framework, scPDB-Datensatz, PDBbind-Datensatz, COACH-420-Datensatz, HOLO4K-Datensatz, Module zur Modellierung lokaler Geometrie, Module zur globalen Strukturmodellierung, Module zur Übertragung von Oberflächeninformationen.
- **Veröffentlichte Zeitschrift:** ICML 2024, 2024.07
- **Papierverbindung:** [EquiPocket: ein Neuronalnetzwerk für die Vorhersage von Ligand-Bindungsplätzen mit E(3)-Equivalenten-Geometrischen Graphen](https://openreview.net/forum?id=1vGN3CSxVs)

### **34. [20 experimentelle Datenpunkte schaffen einen Meilenstein für KI-Protein!](https://hyper.ai/news/32822)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32822](https://hyper.ai/news/32822)
- **Forschungsteam:** Prof. Liang Hongs Gruppe an der Shanghai Jiao Tong University, gemeinsam mit Pan Tans Team am Shanghai Artificial Intelligence Laboratory
- **Verwandte Forschung:** Protein-Mutationsdatenbestand ProteinGym, vorgebildete Protein-Sprachmodelle, Meta-Transfer-Lernen, Lernen zum Ranken (LTR), parameterspezifische Fein-Tuning, LTR-Technologie, FSFP-Training-Strategie, model-agnostic Meta-Learning-Methoden.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2024.07
- **Papierverbindung:** [Steigerung der Effizienz von Protein-Sprachmodellen mit minimalen Wet-Lab-Daten durch wenige Schaltlernen](https://doi.org/10.1038/s41467-024-49798-6)

### **35. [Das übertragbare Deep Learning-Modell identifiziert mehrere Arten von RNA-Modifikationen, wodurch die Rechenkosten erheblich reduziert werden](https://hyper.ai/news/32745)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32745](https://hyper.ai/news/32745)
- **Forschungsteam:** Associate Professor Xiang Yu's Group an der Shanghai Jiao Tong University, gemeinsam mit Jun Yang/Hongxia Wang's Team im Shanghai Chenshan Botanical Garden
- **Verwandte Forschung:** Übertragbares Deep Learning-Modell TandemMod, in vitro Transkriptionsdatensatz ELIGOS, Curlcake Datensatz, in vitro Epitranscriptomdatensatz IVET, 1D CNN, Bi-LSTM-Module, Aufmerksamkeitsmechanismen, vollständig vernetzte Klassifikatoren.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2024.05
- **Papierverbindung:** [Das Transfer-Lernen ermöglicht die Identifizierung mehrerer Arten von RNA-Modifikationen mittels Nanopore-Direkte-RNA-Sequenzierung](https://www.nature.com/articles/s41467-024-48437-4)

### **36. [InstructProtein: Die Proteinsprache mit der menschlichen Sprache anhand von Wissensanweisungen ausrichten](https://hyper.ai/news/33697)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33697](https://hyper.ai/news/33697)
- **Forschungsteam:** Huajun Chen und Qiang Zhangs Team an der Zhejiang University
- **Verwandte Forschung:** LLM, Protein-Wissen-Instruktionsdatensätze, Gene Ontology (GO) Datensätze, InstructProtein, Wissensgrafiken, Protein-Lokalisierungsvorhersage, Protein-Funktionsvorhersage, Protein-Metall-Ionen-Bindungskapazitätvorhersage.
- **Veröffentlichte Zeitschrift:** ACL 2024, 2023.10
- **Papierverbindung:** [InstructProtein: Alignment von menschlicher und proteinischer Sprache durch Wissensinstruction](https://arxiv.org/abs/2310.03269)

### **37. [Protein-to-Text-Generation-Framework ProtT3 ermöglicht eine modulare Interpretation von Proteindaten und Textinformationen](https://hyper.ai/news/33546)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33546](https://hyper.ai/news/33546)
- **Forschungsteam:** Xiang Wang am USTC, gemeinsam mit Zhiyuan Liu's Team an der NUS und den Forschern der Universität Hokkaido
- **Verwandte Forschung:** Cross-modal-Projektoren, Protein-Sprachmodelle, Swiss-Prot und ProteinKG25 Datensätze, PDB-QA Datensätze.
- **Veröffentlichte Zeitschrift:** ACL 2024, 2023.05
- **Papierverbindung:** [ProtT3: Protein-zu-Text-Generation für textbasiertes Proteinverständnis](https://arxiv.org/abs/2405.12564)

### **38. [Das CPDiffusion-Modell konzipiert funktionelle Proteine vollständig automatisch und kostengünstig](https://hyper.ai/news/34692)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34692](https://hyper.ai/news/34692)
- **Forschungsteam:** Liang Hongs Gruppe an der Shanghai Jiao Tong Universität
- **Verwandte Forschung:** Proteintechnik, Diffusionsprobabilitätsmodellrahmen CPDiffusion, Aminosäuren, Graph Neural Networks, Hilfsmittelentwicklung, Protein-Sprachmodelle, CATH 4.2-Datensatz.
- **Veröffentlichte Zeitschrift:** Die Zellentdeckung, 2024.09
- **Papierverbindung:** [Ein bedingtes Proteindiffusionsmodell erzeugt künstliche programmierbare Endonuklease-Sequenzen mit erhöhte Aktivität](https://www.nature.com/articles/s41421-024-00728-2)

### **39. [Eine neuartige Methode zur Erkennung von Proteinhomologen, die auf Protein-Sprachmodellen und Techniken der dichten Entdeckung basiert](https://hyper.ai/news/34225)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34225](https://hyper.ai/news/34225)
- **Forschungsteam:** Yu Li (CUHK), Siqi Sun (Fudan University & Shanghai AI Lab) und Mark Gerstein (Yale University)
- **Verwandte Forschung:** Proteintechnik, Protein-Sprachmodelle, Dichte-Rückrufungstechniken, Dichte-Homolog-Rückrufer, Hybridmodell DHR-Meta, UR90 Datensatz, JackHMMER-Algorithmus, BFD/MGnify Datensätze, DHR-Methode.
- **Veröffentlichte Zeitschrift:** Naturbiotechnologie, 2024.08
- **Papierverbindung:** [Schnelle und empfindliche Erkennung von Proteinhomologen mittels tiefdichtem Abrufen](https://doi.org/10.1038/s41587-024-02353-6)

### **40. [AlphaProteo entwirft effizient Zielproteinbindungsstoffe und erhöht die Affinität um 300 Mal.](https://hyper.ai/news/34214)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34214](https://hyper.ai/news/34214)
- **Forschungsteam:** DeepMind, Francis Crick Institut
- **Verwandte Forschung:** Proteintechnik, Protein-Sprachmodelle, KI-Drogenentwurf, Zielproteine, KI-Tools, Maschinenlernungsmodell AlphaProteo, VEGF-A-Proteinbindungsmodell, Generator, Filter.
- **Veröffentlichte Zeitschrift:** DeepMind, 2024.09
- **Papierverbindung:** [AlphaProteo erzeugt neue Proteine für die biologische und Gesundheitsforschung](https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)

### **41. [Neues Protein-Sprachmodell DePLM übertrifft die SOTA-Modelle bei der Mutationswirkungsprädiktion](https://hyper.ai/news/34954)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34954](https://hyper.ai/news/34954)
- **Forschungsteam:** Prof. Huajun Chen und Dr. Qiang Zhang an der Universität Zhejiang
- **Verwandte Forschung:** Verweigerung des Protein Language Modells (DePLM), ProteinGym Deep Mutational Scanning (DMS) Ensemble, DMS Datensätze, zufällige Quervalidierung, Verallgemeinerungsexperimente, Ausweitung von Diffusionsmodellen, die Sortierungsinformationen verwenden, um evolutionäre Informationen zu verweigern, Sortierung von algorithmgenerierten Bahnen, PromptProtein-Modell.
- **Veröffentlichte Zeitschrift:** NeurIPS 2024, 2024.11
- **Papierverbindung:** [DePLM: Verweigerung von Protein-Sprachmodellen für die Eigentumsoptimierung](https://neurips.cc/virtual/2024/poster/95517)

### **42. [Geometrisches tief generiertes Modell DynamicBind ermöglicht dynamische Protein-Docking-Vorhersagen](https://hyper.ai/news/34894)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34894](https://hyper.ai/news/34894)
- **Forschungsteam:** Die Gruppe von Shuangjia Zheng an der Shanghai Jiao Tong University, Galixir, Sun Yat-sen University, Rice University
- **Verwandte Forschung:** PDBbind Datensatz, MDT Testsatz, tiefe Diffusionsmodelle, gleichvariante geometrische Neuralnetztechnologie, PDB-Formatstrukturen, kleinem Molekül-Ligandformat, Kontakt-LDDT-Score-Module (cLDDT), AlphaFold-Strukturen, Affinitätsvorhersage-Module, generative KI.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2024.02
- **Papierverbindung:** [DynamicBind: Vorhersage einer protein-ligand-komplexen Struktur mit einem tiefen gleichwertigen generativen Modell](https://www.nature.com/articles/s41467-024-45461-2)

### **43. [Drogenentdeckung Großsprachenmodell Y-Mol übertrifft LLaMA2 vollständig](https://hyper.ai/news/35572)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35572](https://hyper.ai/news/35572)
- **Forschungsteam:** Universität Hunan, Universität Zentrales Süden, Universität Normal Hunan, Universität Xiangtan
- **Verwandte Forschung:** Multiscale biomedizinisch-wissensorientierte LLM Y-Mol, PubMed-Textkorpus, DrugBank-Benchmark-Datensatz, DrugCentral-Benchmark-Datensatz, LLaMA2-7b LLM.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.10
- **Papierverbindung:** [Y-Mol: Ein multiscale biomedizinisches Wissen-geführtes großes Sprachmodell für die Entwicklung von Medikamenten](https://doi.org/10.48550/arXiv.2410.11550)

### **44. [Das universelle molekulare inverse Faltenmodell UniIF ergänzt AlphaFold 3 weiter](https://hyper.ai/news/35781)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35781](https://hyper.ai/news/35781)
- **Forschungsteam:** Das Forschungszentrum der Zukunft der Industrie der Westlake University Team
- **Verwandte Forschung:** CATH4.3 Datensatz, ESM2-Modell, CASP15 Datensatz, neue Kristallstrukturen, NovelPro Datensatz, RDesign Datensätze, CHILI-3K Datensatz, vordefinierte Rahmenwerke auf Basis von Aminosäuren und Nukleotiden, GNN, Geometrischer Featurizer, Blockgraph Attention.
- **Veröffentlichte Zeitschrift:** NeurIPS 2024, 2024.05
- **Papierverbindung:** [UniIF: Einheitliche molekulare Umkehrklappung](https://arxiv.org/abs/2405.18968)

### **45. [Das vorgebildete Protein-Sprachmodell ProSST integriert Proteinstrukturinformationen effektiver](https://hyper.ai/news/35874)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35874](https://hyper.ai/news/35874)
- **Forschungsteam:** Prof. Liang Hongs Gruppe und Bingxin Zhou an der Shanghai Jiao Tong University, gemeinsam mit Pan Tan im Shanghai AI Lab
- **Verwandte Forschung:** Das vorgebildete Protein-Sprachmodell ProSST, Transformer, entwirrte Aufmerksamkeitsmechanismen, Proteinstrukturquantizatoren, AlphaFoldDB Datensatz, CATH43-S40 Datensatz, CATH43-S40 Lokalstrukturdatensatz, ProteinGYM Benchmark.
- **Veröffentlichte Zeitschrift:** NeurIPS 2024, 2024.05
- **Papierverbindung:** [ProSST: Protein-Sprachmodellierung mit quantifizierter Struktur und entwirrter Aufmerksamkeit](https://neurips.cc/virtual/2024/poster/96656)

### **46. [Makrozyklische Peptidbindungsrahmen RFpeptide bieten neue Möglichkeiten für nicht-medikamentöse Proteine](https://hyper.ai/news/36150)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36150](https://hyper.ai/news/36150)
- **Forschungsteam:** Das Team von David Baker am Institut für Proteindesign, UW
- **Verwandte Forschung:** Diffusionsmodellbasierte Technologie RFpeptide, die modifizierte RoseTTAFold und RFdiffusion mit zyklischer relative Positionscodierung nutzen, um präzise makrozyklische Rückenbeine, Arzneimittelentwicklung, AlphaFold, ProteinMPNN, Rosetta Relax zu erzeugen. ermöglicht gezielte und effiziente Makrozyklus-Design.
- **Veröffentlichte Zeitschrift:** Die Kommission hat die Kommission mit dem Vorschlag für eine Verordnung (EG) Nr. 1271/2006 in Kraft gesetzt.
- **Papierverbindung:** [Genaues de novo-Design von Proteinbindungsmakrozyklen mit hoher Affinität unter Verwendung von Deep Learning](https://doi.org/10.1101/2024.11.18.622547)

### **47. [Das Genom-Grundlage-Modell Evo ermöglicht die Vorhersage und Generierung von molekularer bis genomischer Skala](https://hyper.ai/news/36266)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36266](https://hyper.ai/news/36266)
- **Forschungsteam:** Forschungsteam der Stanford University und des Arc Institute
- **Verwandte Forschung:** Das Genom-Grundlage-Modell Evo, StripedHyena-Architektur. Evo kann gesamte Genom-Sequenzen vorhersagen, generieren und entwerfen.
- **Veröffentlichte Zeitschrift:** Wissenschaft, 2024.11
- **Papierverbindung:** [Sequenzmodellierung und -design von Molekular bis Genomskala mit Evo](https://www.science.org/doi/10.1126/science.ado9336)

### **48. [DigFrag segmentiert molekulare Fragmente mit KI und erzeugt 44 Moleküle von Medikamenten/Pestiziden](https://hyper.ai/news/36346)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36346](https://hyper.ai/news/36346)
- **Forschungsteam:** Prof. Guangfu Yang und das Team von Prof. Fan Wang an der Central China Normal University
- **Verwandte Forschung:** MolFrag-Plattform, PADFrag-Datenbank, Graph-Aufmerksamkeitsmechanismen, DigFrag-Digitalfragmentierungsmethode, DeepFMPO-Framework, Graph Neural Network-Architekturen, Actor-Critic-Framework.
- **Veröffentlichte Zeitschrift:** Kommunikationschemie, 2024.11
- **Papierverbindung:** [DigFrag als digitale Fragmentierungsmethode für die künstliche Intelligenz-basierte Drogenentwicklung](https://doi.org/10.1038/s42004-024-01346-5)

### **49. [Proteinsequenz Großsprachmodell Vor-Ausbildungsmethode PRIME](https://hyper.ai/news/36363)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36363](https://hyper.ai/news/36363)
- **Forschungsteam:** Prof. Liang Hongs Gruppe an der Shanghai Jiao Tong University, Shanghai AI Lab, ShanghaiTech University, Hangzhou Medical College
- **Verwandte Forschung:** Protein-Sequenz LLM-Vor-Ausbildungsmethode PRIME, ProteomeAtlas-Datenbank, UniProt-Datenbank, ProteinGym-Datenbestand, MLM-Vor-Ausbildungsmethode, die bestehende SOTA-Methoden übertreffen.
- **Veröffentlichte Zeitschrift:** Fortschritte der Wissenschaft, 2024.11
- **Papierverbindung:** [Ein allgemeines Temperaturgesteuertes Sprachmodell zur Gestaltung von Proteinen mit erhöhter Stabilität und Aktivität](https://www.science.org/doi/10.1126/sciadv.adr2641)

### **50. [Die selbstüberwachende Deep Learning-Methode revolutioniert die 3D-Rekonstruktion in der Kryo-Elektronmikroskopie](https://hyper.ai/news/36645)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36645](https://hyper.ai/news/36645)
- **Forschungsteam:** Forschungsteam der UCLA
- **Verwandte Forschung:** Selbstüberwachende Deep Learning-Methode Single-Particle IsoNet (spIsoNet), Single-Particle Cryo-EM, Biomacromolecule Reconstruction, β-Galactosidase-Datensatz, HA-Trimer-Tilt-Datensatz, nicht-symmetrische Ribosomdatensätze, HIV-VLP-Tomographie-Datensätze, U-Net-Architektur, anisotropie korrigiertes Fahrfehlerkorrekturmodul.
- **Veröffentlichte Zeitschrift:** Naturmethoden, 2024.11
- **Papierverbindung:** [Überwindung des Problems der bevorzugten Orientierung in der Kreativ-EM mit selbstüberwachendem Deep Learning](https://doi.org/10.1038/s41592-024-02505-1)

### **51. [Multimodal Proteingenerierungsmethode PLAID erzeugt gleichzeitig Sequenzen und vollatomische Proteinstrukturen](https://hyper.ai/news/36750)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36750](https://hyper.ai/news/36750)
- **Forschungsteam:** UC Berkeley, Microsoft Research, Genentech
- **Verwandte Forschung:** Multimodal Proteingenerierungsmethode PLAID (Protein Latent Induced Diffusion), Pfam-Datenbank, ESMFold latent Raum, latent Diffusion Training, DiT Block Architektur, Diffusion Transformer (DiT), ESMFold Modell.
- **Veröffentlichte Zeitschrift:** ICLR 2025, 2024.12
- **Papierverbindung:** [Erzeugung einer Proteinstruktur aus Sequenz-Nur-Training-Daten](https://www.biorxiv.org/content/10.1101/2024.12.02.626353v1)

### **52. [Zielmoleküloptimierungsmethode MOLRL basierend auf latentem Verstärkungslernen](https://hyper.ai/news/37285)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37285](https://hyper.ai/news/37285)
- **Forschungsteam:** Forscher von Cellarity und NVIDIA
- **Verwandte Forschung:** Neue zielgerichtete molekulare Optimierungsmethode MOLRL basierend auf latentem Verstärkungslernen, Arzneimittelentdeckungsaufgaben, Proximal Policy Optimization (PPO), Variational Autoencoders (VAE), Autoencoder (MolMIM), mit bis zu 100% Erfolgsraten.
- **Veröffentlichte Zeitschrift:** ChemRxiv, 2025.01
- **Papierverbindung:** [Zielmolekulare Generation mit latenter Verstärkung](https://go.hyper.ai/H4JhR)

### **53. [Viral Variation Driver Prediction Framework E2VD prognostiziert evolutionäre Richtungen für COVID-19/HIV/Influenza-Viren](https://hyper.ai/news/37405)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37405](https://hyper.ai/news/37405)
- **Forschungsteam:** Prof. Yonghong Tian und Associate Prof. Jie Chen an der Peking University, Forscher Peng Zhou im Guangzhou Laboratory
- **Verwandte Forschung:** Viral Variation Driver Prediction Framework E2VD, UniRef90 Datensatz, Open-Source-Deep Mutation Scanning Datensätze, Proteinsequenzkodierung, Lokal-Global-Abhängigkeits-Koppelung, Multi-Task-Fokus-Lernen. Erhöhte Präzision der Vorhersage um 67%.
- **Veröffentlichte Zeitschrift:** Naturmaschinenintelligenz, 2025.01
- **Papierverbindung:** [Ein einheitliches, evolutiongetriebenes Deep Learning-Framework für die Vorhersage von Virusvariationen](https://www.nature.com/articles/s42256-024-00966-9)

### **54. [Medizinisches Sprachmodell MedFound nähert sich den Fähigkeiten des Expertenärztes zur Vernunft](https://hyper.ai/news/37646)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37646](https://hyper.ai/news/37646)
- **Forschungsteam:** Interdisziplinäres Team unter der Leitung von Prof. Guangyu Wang (BUPT), Prof. Chunli Song (Drittes Krankenhaus der Universität Peking) und Prof. Jian Yang (China Three Gorges University)
- **Verwandte Forschung:** LLM BLOOM-176B, Medical Corpus Datensatz MedCorpus, Medical LLM MedFound-DX, Methoden der Gedankenkette, Präferenz-Ausrichtung-Framework, MedDX-FT Datensatz, MedDX-Bench Datensatz.
- **Veröffentlichte Zeitschrift:** Naturmedizin, 2025.01
- **Papierverbindung:** [Ein allgemeines medizinisches Sprachmodell zur Unterstützung bei der Diagnose von Krankheiten](https://www.nature.com/articles/s41591-024-03416-6)

### **55. [4D-Diffusionsmodell AlphaFolding füllt die Lücke in der dynamischen Proteinstrukturvorhersage](https://hyper.ai/news/37697)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37697](https://hyper.ai/news/37697)
- **Forschungsteam:** Prof. Siyu Zhu und Prof. Yuan Qi Teams an der Fudan University/Shanghai AI Lab, gemeinsam mit Prof. Yao Yao an der Nanjing University
- **Verwandte Forschung:** 4D-Diffusionsmodell AlphaFolding, MD-Simulationsdaten, dynamische Proteinstrukturen, Strukturbiologie, Verteilungsgraphformer (DiG) -Depth Learning Framework, ATLAS-Datensatz.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.12
- **Papierverbindung:** [4D-Diffusion für Dynamische Proteinstrukturvorhersage mit Referenz- und Bewegungsanleitung](https://arxiv.org/abs/2408.12419)

### **56. [Die Pipeline von PepPrCLIP zur Entwicklung kurzer Proteine verspricht neue Krebstherapien](https://hyper.ai/news/37912)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37912](https://hyper.ai/news/37912)
- **Forschungsteam:** Biomedizinisches Ingenieurteam der Duke University
- **Verwandte Forschung:** ESM-2-Protein-Sprachmodell, ESM-2-650M-Modell, PepPrCLIP-Pipeline, Gauss-Distributionen, Aminosäure-Sequenzen.
- **Veröffentlichte Zeitschrift:** Fortschritte der Wissenschaft, 2025.01
- **Papierverbindung:** [De novo-Konstruktion von Peptidbindern für konformativ unterschiedliche Ziele mit kontrastiver Sprachmodellierung](https://www.science.org/doi/10.1126/sciadv.adr8638)

### **57. [Die Boltzmann-Alignment-Technik verbessert drastisch die Prädiktionswirksamkeit der freien Energie, die an Proteine bindet](https://hyper.ai/news/38092)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38092](https://hyper.ai/news/38092)
- **Forschungsteam:** Team von Prof. Chunhua Shen an der Universität Zhejiang, der Universität Adelaide, der Universität Nordost (USA)
- **Verwandte Forschung:** Bindungsfreie Energie, Boltzmann-Ausrichtungstechnik, ∆∆G-Vorhersage, Proteinkomplexstrukturvorhersage, Riemannian-Diffusionsmodelle, Deep Learning, BA-Cycle-Methode, BA-DDG-Methode, SKEMPI v2 Datensatz.
- **Veröffentlichte Zeitschrift:** ICLR 2025, 2024.10
- **Papierverbindung:** [Boltzmann-Aligned Inverse Folding-Modell als Vorhersager von Mutationswirkungen auf Protein-Protein-Interaktionen](https://arxiv.org/abs/2410.09543)

### **58. [Neue groß angelegte Protein-Backbone-Generator auf Flussbasis Proteina erreicht SOTA in de novo Protein-Backbone-Design](https://hyper.ai/news/38120)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38120](https://hyper.ai/news/38120)
- **Forschungsteam:** NVIDIA, Mila, Universität von Montreal, MIT
- **Verwandte Forschung:** Proteinentwurf, skalierbare nicht-äquivalente Transformer-Architekturen, Foldseek AFDB clustered DFS Datensatz, D21M Datensatz, MFS-Modell, inszenierte Trainingsstrategien.
- **Veröffentlichte Zeitschrift:** ICLR 2025 mündlich, 2025.01
- **Papierverbindung:** [Protein: Skalierung von Proteinstrukturen auf Flussbasis Generativmodelle](https://openreview.net/forum?id=TVQLu34bdw&nesting=2&sort=date-desc)

### **59. [Das UniGEM-Modell erreicht erstmals eine synergistische Verbesserung zweier Aufgaben auf Basis von Diffusionsmodellen](https://hyper.ai/news/38186)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38186](https://hyper.ai/news/38186)
- **Forschungsteam:** Tsinghua Universität, chinesische Akademie der Wissenschaften
- **Verwandte Forschung:** Arzneimittelentdeckung, Vorhersage von molekularen Eigenschaften, Molekülgenerierung, Diffusionsmodelle, QM9-Datensatz, GEOM-Drugs 3D-Molekülkonformationsdatensatz, Multi-Task-Lernrahmen, E(3) Equivarianten Diffusionsmodelle (EDM), Multi-Branch-Netzwerk-Architekturen.
- **Veröffentlichte Zeitschrift:** ICLR 2025, 2025.04
- **Papierverbindung:** [UniGEM: Einheitlicher Ansatz zur Erzeugung und Property Prediction für Moleküle](https://openreview.net/pdf?id=Lb91pXwZMR)

### **60. [Die RF-Diffusion entwickelt sich weiter und realisiert Atomgenauigkeits-de novo Antikörper-Design](https://hyper.ai/news/38253)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38253](https://hyper.ai/news/38253)
- **Forschungsteam:** Prof. David Bakers Team an der Universität Washington und Mitarbeiter
- **Verwandte Forschung:** Therapeutische Antikörper, RF-Diffusion-Netzwerk für die computergestützte Proteinentwicklung, Antikörper-Variablen-Schwerketten (VHHs), Single-Chain-Variablen-Fragmente (scFvs), Deep Learning, VHH-Frameworks, CDR-Schleife-Sequenzentwicklung.
- **Veröffentlichte Zeitschrift:** bioRxiv, 2025.02
- **Papierverbindung:** [Atomisch präzise Neugestaltung von Antikörpern mit RF-Diffusion](https://doi.org/10.1101/2024.03.14.585103)

### **61. [Das erste Protein-RNA-Sprachmodell-Fusion-Schema setzt neue SOTA in Bindung Affinität Vorhersage](https://hyper.ai/news/38290)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38290](https://hyper.ai/news/38290)
- **Forschungsteam:** Tsinghua Universität, UCL, Monash Universität, BUPT
- **Verwandte Forschung:** Protein-RNA, CoPRA-Modell, Protein-Sprachmodelle (PLM), RNA-Sprachmodelle (RLM), CLIP-Experimentaltechniken, Co-Former-Modell, PDBbind-Datensatz, PRBABv2-Datensatz, ProNAB-Datensatz, PRA201-Datensatz, multimodal-Lernen.
- **Veröffentlichte Zeitschrift:** AAAI 2025, 2025.01
- **Papierverbindung:** [CoPRA: Überbrückung von domainübergreifenden vorgeübten Sequenzmodellen mit komplexen Strukturen für Protein-RNA-Bindung-Affinity-Vorhersage](https://arxiv.org/abs/2409.03773)

### **62. [Virtuelles Gewebe-Modell Celcomen erreicht erstmals die Identifizierbarkeit von Ursachennachfolgerungen in der räumlichen Transkriptomik-Analyse](https://hyper.ai/news/38308)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38308](https://hyper.ai/news/38308)
- **Forschungsteam:** Universität von Cambridge
- **Verwandte Forschung:** Perturbmap-Datensatz, fetal Milz-Datensatz, Glioblastom-Datensatz, Celcomen-Modell, Schlußmodule (CCE), Generativmodule (SCE), Graph Neural Networks.
- **Veröffentlichte Zeitschrift:** ICLR 2025, 2025.01
- **Papierverbindung:** [Schätzung der Einzell- und Gewebeverzerrungswirkung in der räumlichen Transkriptomik durch räumliche Ursachenentwicklung](https://openreview.net/forum?id=Tqdsruwyac)

### **63. [AlphaFold-Metainferenz-Methode prognostiziert genauer unordnete Proteinschnittensätze](https://hyper.ai/news/38448)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38448](https://hyper.ai/news/38448)
- **Forschungsteam:** Universität von Cambridge
- **Verwandte Forschung:** Anpassungsfehlerkarten, die von AlphaFold vorhergesagt wurden, Korrelationen zwischen Entfernungsvariationsmatrizen in MD-Simulationen, verzerrter Proteinstrukturvorhersage, Protein Data Bank (PDB), Small-Angle X-ray Scattering (SAXS) Daten, NMR-Messungen, Aβ- und α-Synuclein-Strukturensembles, CALVADOS-2, Bayesian-Metainferenz-Methoden, Langevin-Integratoren.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.02
- **Papierverbindung:** [AlphaFold-Vorhersage von strukturellen Ensembles von unordneten Proteinen](https://www.nature.com/articles/s41467-025-56572-9)

### **64. [Hochgenauigkeits-RNA-Strukturvorhersage-Framework DRfold2 übertrifft SOTA in mehreren Benchmarks](https://hyper.ai/news/38506)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38506](https://hyper.ai/news/38506)
- **Forschungsteam:** Das Team von Prof. Yang Zhang an der NUS
- **Verwandte Forschung:** RNA-Struktur-Vorhersage-Framework DRfold2, unüberwachte Kontakt-Vorhersage-Genauigkeit, Komposit-RNA-Sprachmodelle, DRfold2 RNA-Test-Datensätze, CASP15-Datensatz, Transformator-Module, Strukturmodule zu enttäuschen.
- **Veröffentlichte Zeitschrift:** Biorxiv, 2025.03
- **Papierverbindung:** [Ab initio RNA-Strukturvorhersage mit einem Composite-Sprachmodell und end-to-end-Lernen](https://www.biorxiv.org/content/10.1101/2025.03.05.641632v1)

### **65. [Neuer Proteinentwurf Algorithmus DRAKES durchbricht die biologische Sequenz Entwurf Engpässe](https://hyper.ai/news/38675)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38675](https://hyper.ai/news/38675)
- **Forschungsteam:** Forscher vom MIT, Harvard, Stanford, UC Berkeley, Genentech
- **Verwandte Forschung:** Verstärkung von Lernrahmen, PDB-Schulungen, Megascale-Datensatz, DRAKES-Algorithmus, Gumbel-Softmax.
- **Veröffentlichte Zeitschrift:** ICLR 2025, 2024.08
- **Papierverbindung:** [Fein-Tuning-Discrete-Diffusion-Modelle durch Belohnung-Optimierung mit Anwendungen für DNA und Protein-Design](https://doi.org/10.48550/arXiv.2410.13643)

### **66. [Maschinelles Lernen unterstützte UV-Absorbationsspektroskopie zur Erkennung mikrobieller Kontamination](https://hyper.ai/news/38869)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38869](https://hyper.ai/news/38869)
- **Forschungsteam:** SMART (Singapur-MIT-Allianz für Forschung und Technologie), A*SRL Singapur, NUS, MIT
- **Verwandte Forschung:** Mikrobielle Kontaminationsdetektion, Anomalie-Detektionsstrategien, Maschinelles Lernen, Unterstützungsvektormaschinen (SVM), Funktionen der Radialbasis, sterilisierte Proben von PBS.
- **Veröffentlichte Zeitschrift:** Natur, 2025.03
- **Papierverbindung:** [Maschinelles Lernen unterstützte UV-Absorbationsspektroskopie für mikrobielle Kontamination in Zelltherapieprodukten](https://hyper.ai/en/sota/papers/s41598-024-83114-y)

### **67. [Die Verwendung von Proteinsequenzgenerativmodellen zur Überlappungsgen-Design](https://hyper.ai/news/39241)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39241](https://hyper.ai/news/39241)
- **Forschungsteam:** David Bakers Team an der Universität von Washington
- **Verwandte Forschung:** Überlappende Gene (OLG), synthetische OLG-Designforschung, Aminosäurensubstitution, Bioinformatik-Screening, statistische Modellierung, systematisches Scannen von Sequenzpositionen.
- **Veröffentlichte Zeitschrift:** Die Kommission hat die Kommission mitgeteilt.
- **Papierverbindung:** [Entwurf überlappender Gene mit Hilfe tiefer generierender Modelle von Proteinsequenzen](https://doi.org/10.1101/2025.05.06.652464)

### **68. [Vorhersage-Rahmen PUPS ermöglicht die subzelluläre Lokalisierung von Proteinen auf einzelner Zellebene](https://hyper.ai/news/39549)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39549](https://hyper.ai/news/39549)
- **Forschungsteam:** MIT, Harvard Universität
- **Verwandte Forschung:** Protein-subzelluläre Lokalisierung, Human Protein Atlas, unsichtbare Protein-subzelluläre Lokalisierung, Vorhersagen von unsichtbaren Proteinen Subzelluläre Lokalisierung (PUPS) Rahmen, ausgehaltenen Datensätze, ESM-2-Protein-Sprachmodelle, CNNs, trennbare Konvulsionen.
- **Veröffentlichte Zeitschrift:** Naturmethoden, 2025.05
- **Papierverbindung:** [Vorhersage der subzellulären Lokalisierung von Proteinen in Einzelzellen](https://go.hyper.ai/LeaQF)

### **69. [UniMoMo: Der erste einheitliche generative Rahmen für molekulare Arten ermöglicht die molekulare Gestaltung von mehrartigen Arzneimitteln](https://hyper.ai/news/39852)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39852](https://hyper.ai/news/39852)
- **Forschungsteam:** Yang Liu's Group (Tsinghua), Wenbing Huang's Group (Renmin University), ByteDance AI Drogenentdeckungsteam
- **Verwandte Forschung:** UniMoMo-Framework, All-atom Iterative Variational Autoencoder (IterVAE), geometrische latente Raumdiffusionsmodelle, einheitliche Modellierung.
- **Veröffentlichte Zeitschrift:** ICML 2025, 2025.03
- **Papierverbindung:** [UniMoMo: Einheitliche generative Modellierung von 3D-Molekülen für das Design von De Novo Binder](https://hyper.ai/papers/2503.19300)

### **70. [Protein-Sprachmodell Prot42 erzeugt Verbindungsstoffe mit hoher Affinität, die nur die Zielprotein-Sequenz verwenden](https://hyper.ai/news/40385)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/40385](https://hyper.ai/news/40385)
- **Forschungsteam:** Inception AI (Abu Dhabi, VAE) und Cerebras Systems (Silicon Valley, USA)
- **Verwandte Forschung:** PDIdb 2010 Datensatz, UniRef50-Datenbank, STRING-Datenbank, Proteinfunktionsvorhersage, Protein-Subzelluläre Lokalisierungsvorhersage, Proteinstrukturvorhersage, PPI-Vorhersage, Proteinbindungsgeneration, DNA-Sequenz-spezifische Bindergeneration.
- **Veröffentlichte Zeitschrift:** ArXiv, 2025.05
- **Papierverbindung:** [Prot42: eine neuartige Familie von Protein-Sprachmodellen für die zielbewusste Protein Binder-Generation](https://go.hyper.ai/cFupD)

### **71. [Unified Biomolecular Dynamics Simulator UniSim erzielt erstmals eine einheitliche zeitlich verschärfte Dynamik-Simulation über molekulare Typen und chemische Umgebungen hinweg](https://hyper.ai/news/40483)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/40483](https://hyper.ai/news/40483)
- **Forschungsteam:** Die Gruppe von Yang Liu (Tsinghua) und die Gruppe von Wenbing Huang (Renmin University)
- **Verwandte Forschung:** Atomische Einbau-Erweiterung, Mehrköpfe-Hybridvorbildung, TorchMD-NET GNN-Modelle, stochastische Interpolantenrahmen, gewaltsgesteuerte Kernel.
- **Veröffentlichte Zeitschrift:** ICML 2025, 2025.05
- **Papierverbindung:** [UniSim: Ein einheitlicher Simulator für zeitgemachte Dynamik von Biomolekülen](https://go.hyper.ai/5NWuO)

### **72. [Computational Biology Algorithmus VereinfachtBondfinder entdeckt 69 neue Stickstoff-Sauerstoff-Schwefel-Bindungen](https://hyper.ai/news/40515)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/40515](https://hyper.ai/news/40515)
- **Forschungsteam:** Das Team von Sophia Bazzi und Sharareh Sayyad an der Universität Göttingen
- **Verwandte Forschung:** VereinfachtBondfinder-Algorithmus, maschinelles Lernen, Quantenmechanikrechnungen, PDB-Datensatz, PDB-REDO-Datensatz, BDB-Datensatz, UMAP-Dimensionalitätsreduktion, NOS-Verknüpfungen.
- **Veröffentlichte Zeitschrift:** Kommunikationschemie, 2025.05
- **Papierverbindung:** [Aufdeckung von Arginin-Cystein- und Glycin-Cystein-NOS-Verknüpfungen durch eine systematische Neubewertung von Proteinstructuren](https://www.nature.com/articles/s42004-025-01535-w)

### **73. [Neue Methode zur Gestaltung von Proteinsequenzen FAMPNN verarbeitet gleichzeitig Informationen über Proteinrückgrat und Seitenkette](https://hyper.ai/news/41545)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/41545](https://hyper.ai/news/41545)
- **Forschungsteam:** Universität Stanford, Institut Arc (Palo Alto)
- **Verwandte Forschung:** Protein-Seitenkettenkonformationen, FAMPNN-Methode, S40-Datensatz, PDB-Datensatz, CASP13/14/15-Datensatz, SKEMPlv2-Datensatz, S669-Datensatz, Megascale-Datensatz, FireProtDB-Datensatz, CR9114/CR6261-Datensatz, iterative Stichprobenstrategie, atom-37-Formate, GNN, Token-Weise-Euclidean-Diffusionsmethoden.
- **Veröffentlichte Zeitschrift:** ICML 2025, 2025.06
- **Papierverbindung:** [Konditionierung und Modellierung von Seitenketten für die Entwurf von Vollatomproteinsequenzen mit FAMPNN](https://go.hyper.ai/JUJDq)

### **74. [Atomistische Proteinentwurfsmethode La-Proteina erzeugt Protein mit bis zu 800 Rückständen mit hoher Präzision](https://hyper.ai/news/41744)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/41744](https://hyper.ai/news/41744)
- **Forschungsteam:** NVIDIA, Mila
- **Verwandte Forschung:** Atomisches Proteinentwurf, teilweise latente Strömungs-Matching-Rahmen La-Proteina, Datenbank AFDB, Zwei-Phasen-Ausbildungsstrategie.
- **Veröffentlichte Zeitschrift:** ArXiv, 2025.06
- **Papierverbindung:** [La-Proteina: Atomische Proteingenerierung durch teilweise latente Flow Matching](https://go.hyper.ai/3csT5)

### **75. [Das APM-Modell, das speziell für mehrkettige Proteinkomplexe entwickelt wurde, ermöglicht die Vollatom-Konstruktion und die funktionale Optimierung](https://hyper.ai/news/42059)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42059](https://hyper.ai/news/42059)
- **Forschungsteam:** Universität Hunan, UCAS, Team für das Saatgut von ByteDance
- **Verwandte Forschung:** Proteine, Multi-Chain native Modellierung, Optimierung der vollatomen Repräsentation, Verstärkung der Abhängigkeit von Sequenz-Strukturen, PDB-Datenbank, Swiss-Prot-Datenbank, AFDB-Datenbank, Multi-Chain-Protein-Datenmengen.
- **Veröffentlichte Zeitschrift:** ICML 2025, 2025.07
- **Papierverbindung:** [Ein vollatomisches Generationsmodell zur Gestaltung von Proteinkomplexen](https://go.hyper.ai/TVp4i)

### **76. [Neue Methode für die Entwicklung von in der Region gebundenen Protein, die von Natur aus gestört wird, Logos spezialisiert sich auf nicht-medikamentöse Ziele](https://hyper.ai/news/42611)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42611](https://hyper.ai/news/42611)
- **Forschungsteam:** David Bakers Team an der Universität von Washington
- **Verwandte Forschung:** RF-Diffusion-Modell, Induktionspassform, Scaffold-Generation, Taschenspezialisierung, Taschenversammlung.
- **Veröffentlichte Zeitschrift:** Wissenschaft, 2025.07
- **Papierverbindung:** [Entwurf von intrinsisch gestörten Regionbindungsproteinen](https://www.science.org/doi/10.1126/science.adr8063)

### **77. [Neues Protein-Dynamik-Fusions-Repräsentations-Framework FusionProt veröffentlicht, das den iterativen Informationsaustausch ermöglicht](https://hyper.ai/news/43724)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/43724](https://hyper.ai/news/43724)
- **Forschungsteam:** Technion, Meta AI
- **Verwandte Forschung:** Protein-Sprachmodelle, Darstellungslernungsrahmen FusionProt, AlphaFold DB, AlphaFold2, DeepFRI Datensatz, lernbare Fusionstoken, Multiview Contrastive Learning.
- **Veröffentlichte Zeitschrift:** Biorxiv, 2025.08
- **Papierverbindung:** [FusionProt: Zusammenführung von Sequenz- und Strukturinformationen für das Lernen der einheitlichen Proteinrepräsentation](https://go.hyper.ai/OXLYl)

### **78. [Transkriptom-geführtes Diffusionsmodell MorphDiff zur Beschleunigung der Phänotyp-Drogenentdeckung](https://hyper.ai/news/43849)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/43849](https://hyper.ai/news/43849)
- **Forschungsteam:** CUHK, Mohamed bin Zayed Universität für künstliche Intelligenz
- **Verwandte Forschung:** Zellmorphologie, Latent Diffusion Model (LDM), groß angelegte Zellmorphologie Bilddatensätze, JUMP Datensatz, CDRP Datensatz, LINCS Datensatz, morphologische VAE, latent diffusionale Modelle.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.09
- **Papierverbindung:** [Vorhersage von Veränderungen der zellulären Morphologie unter Störungen mit einem transkriptomgeleiteten Diffusionsmodell](https://www.nature.com/articles/s41467-025-63478-z)

### **79. [AlphaPPIMI-Framework verbessert die Verallgemeinerung deutlich und übertrifft die bestehenden Methoden in der PPI-Schnittstellenmodulator-Vorhersage](https://hyper.ai/news/43916)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/43916](https://hyper.ai/news/43916)
- **Forschungsteam:** China University of Petroleum, Universität Yonsei
- **Verwandte Forschung:** Protein-Protein-Interaktionen, DLiP-Datensatz, ECFP4-Fingerabdrücke, ChemDiv-Datenbank, AlphaPPIMI-Framework, Uni-Mol2-Modell, Protein-Feature-Extraktion, Transformer-Architektur, ESM2-150M-Modell, ProtTrans-Modell.
- **Veröffentlichte Zeitschrift:** Das Journal of Cheminformatics, 2025.08
- **Papierverbindung:** [Alphappimi: ein umfassender Deep Learning-Framework zur Vorhersage von PPI-Modulator-Interaktionen](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-025-01077-2)

### **80. [Ein neuartiger Fusions-Neuralnetzwerk-Framework prognostiziert effizient Multi-Metall-Bindungsorte in Proteinsekvenzen](https://hyper.ai/news/44702)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/44702](https://hyper.ai/news/44702)
- **Forschungsteam:** Hongkong Universität für Wissenschaft und Technologie
- **Verwandte Forschung:** Fusions-Neuralnetzwerk-Framework, Proteinsequenz-Multi-Metall-Bindungs-Site-Vorhersage, CNNs, Fusionsnetzwerke, MbPA-Datenbank, Deep Learning-Frameworks.
- **Veröffentlichte Zeitschrift:** Biorxiv, 2025.09
- **Papierverbindung:** [Ein modulares Fusions-Neuralnetzwerk-Ansatz zur effizienten Vorhersage von Multi-Metall-Bindungsstellen in Protein-Sequenzen](https://go.hyper.ai/Y7DNU)

### **81. [Hoch synthetisierbares molekulares Projektionsrahmen ReaSyn veröffentlicht, das ultra-hohe Rekonstruktionsraten und Pathway-Diversität erreicht](https://hyper.ai/news/44764)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/44764](https://hyper.ai/news/44764)
- **Forschungsteam:** NVIDIA Forschungsteam
- **Verwandte Forschung:** Drogenentdeckung, ReaSyn-Framework, beaufsichtigtes Lernen, Verstärkung des Lernens, Transformatormodelle, Reaktionskettenrepräsentation (CoR).
- **Veröffentlichte Zeitschrift:** ArXiv, 2025.09
- **Papierverbindung:** [Neuauslegung der Molekülsynthetisierung mit Reaktionsketten](https://arxiv.org/abs/2509.16084)

### **82. [Einschränktes Verstärkungslernungsrahmen Ctrl-DNA veröffentlicht, realisiert "zielte Kontrolle" der spezifischen Zellgenexpression](https://hyper.ai/news/45227)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/45227](https://hyper.ai/news/45227)
- **Forschungsteam:** Team der Universität Toronto, Changping Laboratory
- **Verwandte Forschung:** Einschränkte RL-Rahmen Ctrl-DNA, Deep Learning, zellspezifische Genexpression, DNA-Sprachmodelle, menschliche Promoter-Datensätze, Verstärker-Datensätze, kontrollierbare Zelltyp-spezifische CRE-Generation, Einschränkte Markov-Entscheidungsprozesse, Enformer-Architektur.
- **Veröffentlichte Zeitschrift:** NeurIPS 2025, 2025.05
- **Papierverbindung:** [Ctrl-DNA: Einschränktes Verstärkungslernen für zellspezifische Cis-Regulierungs-Element-Design](https://arxiv.org/abs/2505.20578)

### **83. [PLACER Framework löst die Herausforderung zur Modellierung auf atomarer Ebene der proteinkonformativen Heterogenität](https://hyper.ai/news/46009)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/46009](https://hyper.ai/news/46009)
- **Forschungsteam:** Das Forschungsteam von Prof. David Baker
- **Verwandte Forschung:** Graph Neural Network PLACER, Cambridge Structural Database, PDB, der neuronale Netzwerke, 3-Spuren-Architekturen, kleine Molekülstrukturgenerierung ablehnt.
- **Veröffentlichte Zeitschrift:** PNAS, 2025.11
- **Papierverbindung:** [Modellierung von Konformationsensemblen von kleinen Proteimolekülen mit PLACER](https://www.biorxiv.org/content/10.1101/2024.09.25.614868v2)

### **84. [Squidiff ermöglicht eine Multi-Szenario-Transkriptom-Simulation, die die Entwicklung von Präzisionsmedizin und Raummedizin fördert](https://hyper.ai/news/46212)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/46212](https://hyper.ai/news/46212)
- **Forschungsteam:** Columbia Universität, Stanford Universität
- **Verwandte Forschung:** Squidiff-Framework, Splatter-Tools, menschliche iPSC-to-endoderm-Differenzierungsdatensätze, K562 CRISPR-Screening-Experimente, bedingte DDIM, semantische Codierungstechniken, Encode-Diffuse-Decode-Architekturen.
- **Veröffentlichte Zeitschrift:** Naturmethoden, 2025.11
- **Papierverbindung:** [Squidiff: Prognose der Zellentwicklung und Reaktionen auf Störungen mit Hilfe eines Diffusionsmodells](https://www.nature.com/articles/s41592-025-02877-y)

### **85. [Generatives Modell PepTron und ein neues Evaluierungsbenchmark, das die Vorhersagefähigkeit für unordnete Proteinensembles umgestaltet](https://hyper.ai/news/47063)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/47063](https://hyper.ai/news/47063)
- **Forschungsteam:** Peptone, Universität Kopenhagen, NVIDIA, Universität Oxford, MIT, Universität Duke
- **Verwandte Forschung:** PeptoneBench-Evaluierungsrahmen, generatives Modell PepTron, PDB, IDRome-Datenbank, NVIDIA BioNeMo, ESMFlow, gemischte Trainingsstrategien (experimentelle + synthetische Daten).
- **Veröffentlichte Zeitschrift:** bioRxiv, 2025.10
- **Papierverbindung:** [Progressives Protein Ensemble Vorhersagen überall in der OrdnungUnordnung Kontinuum](https://www.biorxiv.org/content/10.1101/2025.10.18.680935v1)

### **86. [MIT und Harvard schlagen End-to-End-AI-Workflow CleaveNet vor, um hochspezifische Herausforderungen bei der Gestaltung von Protease-Substraten zu überwinden](https://hyper.ai/news/48608)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48608](https://hyper.ai/news/48608)
- **Forschungsteam:** Gemeinsames Team vom MIT und der Harvard University
- **Verwandte Forschung:** Protase-Substratentwurf, CleaveNet-Workflow, synthetische Peptide, Vorhersage- und Generationsmodelle.
- **Veröffentlichte Zeitschrift:** Naturkommunikation
- **Papierverbindung:** [CleaveNet: Ein auf KI basierender End-to-End-Design-Workflow für Proteas-Substrate](https://www.nature.com/articles/s41467-025-67226-1)

### **87. [Das Team der Goethe-Universität Frankfurt schlägt ein multischales Klassifikationsrahmen vor, um die Komplexität des menschlichen E3-Ligoms zu entschlüsseln](https://hyper.ai/news/48813)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48813](https://hyper.ai/news/48813)
- **Forschungsteam:** Forschungsteam der Goethe Universität Frankfurt
- **Verwandte Forschung:** Ubiquitin-Proteasome-System (UPS), E3-Ubiquitin-Ligasen, menschliches E3-Ligom, Metrik-Lernen.
- **Veröffentlichte Zeitschrift:** Naturkommunikation
- **Papierverbindung:** [Mehrfachklassifizierung dekodiert die Komplexität des menschlichen E3-Ligoms](https://www.nature.com/articles/s41467-025-67450-9)

### **88. [Basecamp und NVIDIA veröffentlichen gemeinsam das EDEN-Stiftungsmodell, das eine KI-programmierbare therapeutische Gestaltung ermöglicht](https://hyper.ai/news/48964)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48964](https://hyper.ai/news/48964)
- **Forschungsteam:** Basecamp Research, NVIDIA und führende akademische Institutionen
- **Verwandte Forschung:** Programmierbare Biologie, EDEN-Metagenom-Grundlagenmodelle, Gentherapien, Rekombinationen, antimikrobielle Peptidentwicklung.
- **Veröffentlichte Zeitschrift:** bioRxiv
- **Papierverbindung:** [Design von KI-programmierbaren Therapien mit der EDEN-Familie von Grundmodellen](https://doi.org/10.64898/2026.01.12.699009)

### **89. [Microsoft und andere schlagen den multimodalen KI-Framework GigaTIME vor, um virtuelle mIF-Atlase aus routinemäßigen Pathologie-Slides zu erstellen](https://hyper.ai/news/49359)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49359](https://hyper.ai/news/49359)
- **Forschungsteam:** Microsoft Research, Universität Washington, Providence Genomics
- **Verwandte Forschung:** Tumor-Mikroumgebung, H&E-Färbung, Multiplex-Immunfluoreszenz (mIF), GigaTIME-Rahmen, räumliche Proteomik.
- **Veröffentlichte Zeitschrift:** Zelle
- **Papierverbindung:** [Multimodal AI generiert virtuelle Bevölkerung für Tumor-Mikroumgebungsmodellierung](https://www.cell.com/cell/fulltext/S0092-8674(25)01312-1)

### **90. [Das MIT schlägt das Deep Learning-Sprachmodell Pichia-CLM zur Optimierung von Codons für eine verbesserte Produktion von rekombinanten Proteinen vor](https://hyper.ai/news/49613)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49613](https://hyper.ai/news/49613)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** Komagataella phaffii, Codonoptimierung, Codon Use Bias (CUB), Pichia-CLM-Sprachmodell, Rekombinationsprotein-Expression.
- **Veröffentlichte Zeitschrift:** PNAS
- **Papierverbindung:** [Pichia-CLM: Eine auf Sprachmodellen basierende Codonoptimierungs-Pipeline für Komagataella phaffii](https://www.pnas.org/doi/10.1073/pnas.2522052123)

### **91. [MIT und ETH schlagen gemeinsam den Deep Learning-Framework APOLLO zur effizienten Integration und Entwurf von Einzelzell-Multimodal-Daten vor.](https://hyper.ai/news/49702)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49702](https://hyper.ai/news/49702)
- **Forschungsteam:** Gemeinsames Team von MIT und ETH Zürich
- **Verwandte Forschung:** Einzelzellbiologie, multimodal Datenintegration, APOLLO-Framework, scRNA-seq, scATAC-seq, räumliche Morphologie.
- **Veröffentlichte Zeitschrift:** Naturrechnungswissenschaft
- **Papierverbindung:** [Teilweise geteilte multimodale Einbettung lernt die ganzheitliche Darstellung des Zellzustands](https://www.nature.com/articles/s43588-025-00948-w)

### **92. [CUHK und andere schlagen gemeinsam den Bi-TEAM-Rahmen für das einheitliche umfangreiche Repräsentationslernen modifizierter Peptide vor](https://hyper.ai/news/49833)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49833](https://hyper.ai/news/49833)
- **Forschungsteam:** CUHK, Macao Polytechnic University, Zhejiang University, zweites Xiangya Hospital der CSU, UESTC
- **Verwandte Forschung:** Struktur- und Funktionsmodellierung von Peptiden, nicht-kanonische Aminosäuremodifikationen, Kreuzvertretungslernen, Bi-TEAM-Framework.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [Bi-TEAM: Ein einheitliches Rahmenwerk für das Lernen von Kreuzvertretungen für chemisch veränderte Biomoleküle](https://arxiv.org/abs/2603.01873)

### **93. [Die Carnegie Mellon Universität und andere schlagen AQuaRef für die Quantenverfeinerung von Vollatom-Proteinmodellen vor](https://hyper.ai/news/49895)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49895](https://hyper.ai/news/49895)
- **Forschungsteam:** CMU, Universität von Wrocław, Universität von Florida
- **Verwandte Forschung:** Proteinstrukturverfeinerung, AQuaRef, maschinelles Lernen Interatompotentiale (AIMNet2), Quantenverfeinerung, Strukturbiologie.
- **Veröffentlichte Zeitschrift:** Naturkommunikation
- **Papierverbindung:** [AQuaRef: Maschinelles Lernen beschleunigt die Quantenverfeinerung von Proteinstructuren](https://www.nature.com/articles/s41467-025-64313-1)

### **94. [NVIDIA und andere schlagen gemeinsam den Rahmen von Complexa vor, um die Erzeugung und Optimierung von Proteinbindern zu vereinen.](https://hyper.ai/news/49977)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49977](https://hyper.ai/news/49977)
- **Forschungsteam:** NVIDIA, Universität Oxford, Mila
- **Verwandte Forschung:** Proteinbindungsstoffentwurf, Proteína-Complexa (Complexa), Teddymer, Generationsmethoden, Testzeitberechnung.
- **Veröffentlichte Zeitschrift:** ICLR 2026
- **Papierverbindung:** [Skalierung des atomistischen Protein Binder-Designs mit generativer Vorbildung und Testzeitberechnung](https://openreview.net/forum?id=qmCpJtFZra)

### **95. [MIT und CMU schlagen gemeinsam VibeGen vor, der die Vibrationsdynamik einführt, um die Proteinentwicklung de novo zu gestalten.](https://hyper.ai/news/50061)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50061](https://hyper.ai/news/50061)
- **Forschungsteam:** Gemeinsames Team von MIT und CMU
- **Verwandte Forschung:** Protein-Dynamik, VibeGen-Agent, Sprachdiffusionsmodelle, De novo-Protein-Design, Vibrationsamplitude-Vorhersage.
- **Veröffentlichte Zeitschrift:** Die Angelegenheit
- **Papierverbindung:** [VibeGen: Agentic end-to-end de novo Protein Design für maßgeschneiderte Dynamik unter Verwendung eines Sprachdiffusionsmodells](https://www.cell.com/matter/abstract/S2590-2385(26)00069-X)

### **96. [Das Institut Pasteur nutzt Deep Learning, um 2,39 Millionen Antiphagenproteine zu prognostizieren, um die Bakterienimmunität zu kartografieren.](https://hyper.ai/news/50491)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50491](https://hyper.ai/news/50491)
- **Forschungsteam:** Forschungsteam des Institut Pasteur
- **Verwandte Forschung:** Bakterielle Anti-Virus-Immunität, Anti-Fagen-Verteidigungssysteme, Protein-Sprachmodelle, genomische Sprachmodelle, Pangenomik.
- **Veröffentlichte Zeitschrift:** Wissenschaft
- **Papierverbindung:** [Protein- und Genom-Sprachmodelle enthüllen die unerforschte Vielfalt der bakteriellen Immunität](https://www.science.org/doi/10.1126/science.adv8275)

### **97. [Das KAIST-Team nutzt KI, um kleine Molekülbindungsproteine neu zu entwerfen und sie erfolgreich in Biosensoren anzuwenden](https://hyper.ai/news/50599)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50599](https://hyper.ai/news/50599)
- **Forschungsteam:** Forschungsteam der Abteilung für Biologische Wissenschaften am KAIST
- **Verwandte Forschung:** De novo-Protein-Design, Kleinschmelzbindungsproteine, NTF2-ähnliche Falte, Biosensoren, chemisch induzierte Dimerisation (CID).
- **Veröffentlichte Zeitschrift:** Naturkommunikation
- **Papierverbindung:** [Bindung und Sensorierung von Kleinmolekülen mit einer entworfenen Proteinfamilie](https://www.nature.com/articles/s41467-026-70953-8)

### **98. [Universität von Toronto und andere schlagen dnaHNet für eine effiziente hierarchische Modellierung genomischer Sequenzen vor](https://hyper.ai/news/50709)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50709](https://hyper.ai/news/50709)
- **Forschungsteam:** Universität von Toronto, Vector Institute, Arc Institute
- **Verwandte Forschung:** Genomische Sequenzlernen, Grundlagenmodelle, dnaHNet, dynamische Tokenization, Varianteffektvorhersage.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [dnaHNet: Ein skalierbares und hierarchisches Fundamentmodell für das Genomische Sequenzlernen](https://arxiv.org/abs/2602.10603)

### **99. [Die Queen Mary University of London und andere führen die größte Proteogenomikstudie durch, die molekulare Krankheitsmechanismen aufdeckt](https://hyper.ai/news/51343)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/51343](https://hyper.ai/news/51343)
- **Forschungsteam:** Queen Mary University of London, Universität Cambridge
- **Verwandte Forschung:** Proteogenomik, Protein Quantitative Trait Loci (pQTLs), zirkulierende Proteinreichtum, cis- und transgenetische Regulierung.
- **Veröffentlichte Zeitschrift:** Zelle
- **Papierverbindung:** [Mehrkohortenproteogenomische Analysen zeigen genetische Effekte auf dem gesamten Proteom und auf das Krankheitsbild](https://www.cell.com/cell/fulltext/S0092-8674(26)00385-5)

### **100. [Die Goethe-Universität Frankfurt und andere schlagen das genESOM-Modell vor: Generative KI durchbricht kleine Tierversuche](https://hyper.ai/news/51430)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/51430](https://hyper.ai/news/51430)
- **Forschungsteam:** Goethe Universität Frankfurt und Fraunhofer ITMP
- **Verwandte Forschung:** Kleine Tierversuche, Generative AI, genESOM-Modell, aufstrebende selbstorganisierende Karten.
- **Veröffentlichte Zeitschrift:** Pharmakologische Forschung
- **Papierverbindung:** [Selbstorganisierende neuronale Netzwerk-basierte generative KI mit eingebetteter Fehlerinflation kontrolliert verbessert die effektive Wissensgewinnung aus präklinischen Studien mit reduzierter Probengröße](https://www.sciencedirect.com/science/article/pii/S1043661826000745)

## **KI+ Gesundheitswesen**

### **1. [DeepDR Plus-Deep-Learning-System prognostiziert Diabetische Retinopathie mit Hilfe von Fundus-Bildern](https://hyper.ai/news/29769)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29769](https://hyper.ai/news/29769)
- **Forschungsteam:** Prof. Weiping Jia, Huating Li und Bin Shengs Team an der Shanghai Jiao Tong University; Tianyin Huangs Forschungsteam an der Tsinghua University
- **Verwandte Forschung:** SDPP-Daten, DRPS-Daten, ResNet-50, Fundus-Modelle, selbstüberwachendes Lernen, IBS-Evaluierungsmodelle, Meta-Modelle.
- **Veröffentlichte Zeitschrift:** Naturmedizin, 2024.01
- **Papierverbindung:** [Ein Deep Learning-System zur Vorhersage der Progression der diabetischen Retinopathie](https://www.nature.com/articles/s41591-023-02702-z)

### **2. [Das logistische Regressionsmodell analysiert, dass ein hoher grüner Landschaftsindex das MetS-Risiko reduziert](https://hyper.ai/news/29559)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29559](https://hyper.ai/news/29559)
- **Forschungsteam:** Xifeng Wu Forschungsteam an der Zhejiang Universität
- **Verwandte Forschung:** Konvolutionäre neuronale Netzwerkmodelle, logistische Regressionsmodelle, Isochrone API
- **Veröffentlichte Zeitschrift:** Umwelt International, 2024.01
- **Papierverbindung:** [Vorteilhafte Zusammenhänge zwischen außen sichtbarem Grün am Arbeitsplatz und metabolischem Syndrom bei chinesischen Erwachsenen](https://doi.org/10.1016/j.envint.2023.108327)

### **3. [Das Deep Learning-System hilft jüngeren Augenärzten, die diagnostische Konsistenz um 12% zu erhöhen](https://hyper.ai/news/29549)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29549](https://hyper.ai/news/29549)
- **Forschungsteam:** Peking Union Medical College Hospital, West-China Hospital der Sichuan University, zweites Hospital der Hebei Medical University, Tianjin Medical University Eye Hospital, Wenzhou Medical University, Beijing Airdoc Technology, Renmin University of China
- **Verwandte Forschung:** Qualitätsbewertungsmodelle, diagnostische Modelle, CNN.
- **Veröffentlichte Zeitschrift:** Npj digitale Medizin, 2024.01
- **Papierverbindung:** [Die Leistung eines Deep-Learning-Systems bei der Unterstützung junger Augenärzte bei der Diagnose von 13 wichtigen Fundus-Erkrankungen: eine zukünftige klinische Studie mit mehreren Zentren](https://www.nature.com/articles/s41746-023-00991-9)

### **4. [GSP-GCN erreichen bei der Diagnose von Parkinson bis zu 90,2% Genauigkeit](https://hyper.ai/news/29189)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29189](https://hyper.ai/news/29189)
- **Forschungsteam:** CAS Shenzhen Institutes of Advanced Technology und erstes verbundenes Krankenhaus der Sun Yat-sen Universität
- **Verwandte Forschung:** Module für die Graphsignalverarbeitung (GSP), Graphnetzmodule, Klassifizierer, interpretierbare Modelle.
- **Veröffentlichte Zeitschrift:** Npj Digitale Medizin, 2024.01
- **Papierverbindung:** [Ein interpretierbares Modell basierend auf Graphenkenntnissen zur Diagnose von Parkinson mit sprachbezogenen EEG](https://www.nature.com/articles/s41746-023-00983-9)

### **5. [Brustkrebsprognose-Score-System MIRS](https://hyper.ai/news/29304)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29304](https://hyper.ai/news/29304)
- **Forschungsteam:** Universität von Kentucky, Universität von Macau für Wissenschaft und Technologie, Universität von Macau, Guangzhou Medical University
- **Verwandte Forschung:** TCGA-Datenbank, Modelle von neuronalen Netzwerken, Prognose-Score-Systeme, ESTIMATE-Algorithmus, Maschinelles Lernen, XGboost, Boruta RF, ElasticNet.
- **Veröffentlichte Zeitschrift:** Wissenschaft, 2023.11
- **Papierverbindung:** [MIRS: Ein KI-Score-System zur Vorhersage der Prognose und Therapie von Brustkrebs](https://doi.org/10.1016/j.isci.2023.108322)

### **6. [Retinal Image Foundation-Modell RETFound prognostiziert mehrere systemische Erkrankungen](https://hyper.ai/news/28113)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28113](https://hyper.ai/news/28113)
- **Forschungsteam:** Yukun Zhou (PhD-Kandidate) und andere von UCL und Moorfields Eye Hospital
- **Verwandte Forschung:** Selbstüberwachendes Lernen, MEH-MIDAS Datensatz, EyePACS Datensatz, SL-ImageNet, SSL-ImageNet, SSL-Retinal.
- **Veröffentlichte Zeitschrift:** Natur, Jahr 2023.08
- **Papierverbindung:** [Ein Grundmodell für die generalisierbare Erkennung von Erkrankungen durch Netzhautbilder](https://www.nature.com/articles/s41586-023-06555-x)

### **7. [SVM optimiert die Touch-Sensoren, Braille-Erkennungsrate erreicht 96,12%](https://hyper.ai/news/26561)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/26561](https://hyper.ai/news/26561)
- **Forschungsteam:** Die Gruppen von Geng Yang und Kaichen Xu an der Universität Zhejiang
- **Verwandte Forschung:** SVM-Algorithmen, maschinelles Lernen, CNNs, adaptive Moment-Schätzungsalgorithmen, die 6 dynamische Touch-Muster genau identifizieren.
- **Veröffentlichte Zeitschrift:** Weiterentwickelte Wissenschaft, 2023.09
- **Papierverbindung:** [Maschinelles Lernen-fähige Tactile Sensor-Design für Dynamische Touch-Decodierung](https://onlinelibrary.wiley.com/doi/10.1002/advs.202303949)

### **8. [Das CAS Peking Institute of Genomics errichtet ein offenes biomedizinisches Bildgebungsarchiv](https://hyper.ai/news/26334)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/26334](https://hyper.ai/news/26334)
- **Forschungsteam:** CAS Peking Institut für Genomik
- **Verwandte Forschung:** TCIA-Datenbank, De-Identifizierung, Qualitätskontrolle, Sammlung, Individual, Studie, Serie, Bild, Triplett-Netzwerke, Aufmerksamkeitsmodule.
- **Veröffentlichte Zeitschrift:** Die Kommission hat die Kommission mitgeteilt, dass die Kommission in diesem Zusammenhang mit der Einhaltung der Verordnung (EU) Nr. 1308/2013 (ABl.
- **Papierverbindung:** [Selbstüberwachtes Lernen der Hologrammrekonstruktion unter Verwendung der Physikkonsistenz](https://www.nature.com/articles/s42256-023-00704-7)

### **9. [AI Lunit liest Mammogramme mit einer genauen Präzision wie Ärzte](https://hyper.ai/news/26135)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/26135](https://hyper.ai/news/26135)
- **Forschungsteam:** Forschungsteam der Universität Nottingham
- **Verwandte Forschung:** PERFORMS Datensatz, Anmerkungen + Scoring. Die KI-Empfindlichkeit war mit den Ärzten übereinstimmend, und die Spezifität zeigte keinen signifikanten Unterschied.
- **Veröffentlichte Zeitschrift:** Radiologie, 2023.09
- **Papierverbindung:** [Leistung eines KI-Algorithmus zur Erkennung von Brustkrebs unter Verwendung der persönlichen Leistung im Mammographischen Screening-System](https://pubs.rsna.org/doi/10.1148/radiol.223299)

### **10. [Die Strategie zur Auswahl von Merkmalen erkennt Biomarker für Brustkrebs](https://hyper.ai/news/24589)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/24589](https://hyper.ai/news/24589)
- **Forschungsteam:** Universität von Neapel Federico II, Italien
- **Verwandte Forschung:** Maschinelles Lernen, Feature-Selection-Strategien, TCGA/GEO-Datensätze, Gewinnverhältnis, RF, SVM-RFE.
- **Veröffentlichte Zeitschrift:** CIBB 2023, 2023.07
- **Papierverbindung:** [Robust Feature Auswahlstrategie erkennt ein Panel von MikroRNAs als vermeintliche diagnostische Biomarker in Brustkrebs](https://www.researchgate.net/publication/372083934)

### **11. [Gradient-Boosting-Maschinenmodell sagt BPSD-Subsyndrom genau voraus](https://hyper.ai/news/23926)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/23926](https://hyper.ai/news/23926)
- **Forschungsteam:** Forschungsteam der Universität Yonsei (Südkorea)
- **Verwandte Forschung:** Maschinelle Lernmodelle, Mehrere Imputationsmethoden, logistische Regressionsmodelle, Random Forest-Modelle, Gradient Boosting Machine-Modelle, SVM-Modelle.
- **Veröffentlichte Zeitschrift:** Wissenschaftliche Berichte, 2023.05
- **Papierverbindung:** [Maschinelle Lern-basierte Vorhersage-Modelle für das Auftreten verhaltens- und psychologischer Symptome von Demenz: Modellentwicklung und Validierung](https://www.nature.com/articles/s41598-023-35194-5)

### **12. [Maschinelles Lernen-Modell prognostiziert Patienten-ein-Jahres-Todesrate](https://hyper.ai/news/33905)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33905](https://hyper.ai/news/33905)
- **Forschungsteam:** Macheng People's Hospital (Hubei, China)
- **Verwandte Forschung:** Logistische Regressionsmodelle, maschinelle Lernmodelle, GBM, RF, DT. Die drei wichtigsten Merkmale im Zusammenhang mit der 1-jährigen Sterblichkeit waren NT-proBNP, Albumin und Statine.
- **Veröffentlichte Zeitschrift:** Herz-Kreislauf-Diabetologie, 2023.06
- **Papierverbindung:** [Modelle, die auf maschinellem Lernen basieren, um eine einjährige Sterblichkeit bei älteren chinesischen Patienten mit koronaren Arterierkrankung in Kombination mit einer beeinträchtigtem Glukosetoleranz oder Diabetes mellitus vorherzusagen](https://cardiab.biomedcentral.com/articles/10.1186/s12933-023-01854-z)

### **13. [Neue KI-Brain-Computer-Schnittstellen-Technologie ermöglicht es aphasischen Patienten, zu "reden"](https://hyper.ai/news/33914)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33914](https://hyper.ai/news/33914)
- **Forschungsteam:** UC-Forschungsteam
- **Verwandte Forschung:** Nltk Twitter-Corpus, multimodal Sprachneuroprosthesen, Gehirn-Computer-Schnittstellen, Deep Learning-Modelle, Cornell Movie-Dialogs Corpus, synthetische Sprachalgorithmen.
- **Veröffentlichte Zeitschrift:** Natur, Jahr 2023.08
- **Papierverbindung:** [Eine leistungsstarke Neuroprosthese für Sprachdekodierung und Avatarkontrolle](https://www.nature.com/articles/s41586-023-06443-4)

### **14. [Die auf tiefgründigem Lernen basierende Erkennung von Krebs der Bauchspeicheldrüse durch künstliche Intelligenz](https://hyper.ai/news/33923)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33923](https://hyper.ai/news/33923)
- **Forschungsteam:** Alibaba DAMO Academy zusammen mit mehreren heimischen und internationalen medizinischen Einrichtungen
- **Verwandte Forschung:** Deep Learning, PANDA, nnU-Net, CNNs, Transformers. PANDA hat 5 Krebsfälle und 26 klinisch verpasste Fälle erkannt.
- **Veröffentlichte Zeitschrift:** Naturmedizin, 2023.11
- **Papierverbindung:** [Großartige Erkennung von Bauchspeicheldrüsenkrebs durch kontrastfreie CT und Deep Learning](https://www.nature.com/articles/s41591-023-02640-w)

### **15. [Wirksamkeit der maschinellen Lern-assistierten Lungenkrebs-Screening für die Bevölkerung](https://hyper.ai/news/31197)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31197](https://hyper.ai/news/31197)
- **Forschungsteam:** Google Forschungszentrum
- **Verwandte Forschung:** DS_CA-Datensatz, DS_NLST Datensatz, DS_US-Datensatz, DS_JPN-Datensatz, maschinelle Lernmodelle, Lungenkrebs-Screening. Steigerung der Spezifität um 5% bis 7%, Verringerung der Screeningzeit um 14 Sekunden pro Fall.
- **Veröffentlichte Zeitschrift:** Radiologische KI, 2024.03
- **Papierverbindung:** [Hilfsartige KI im Lungenkrebs-Screening: Eine retrospektive multinationale Studie in den Vereinigten Staaten und Japan](https://pubs.rsna.org/doi/11.1148/ryai.230079)

### **16. [Das KI-Fusionsmodell MCF zur Diagnose von Eierstockkrebs berechnet das Risiko mit Hilfe von Routine-Labordaten und Alter](https://hyper.ai/news/30730)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30730](https://hyper.ai/news/30730)
- **Forschungsteam:** Das Forschungsteam von Jihong Liu an der Sun Yat-sen Universität
- **Verwandte Forschung:** Funktionswahlmethoden, Maschinellen Lernklassifizierer, 5-fache Quervalidierung, Mehrkriterienentscheidungstheorie.
- **Veröffentlichte Zeitschrift:** Die Lancet Digital Health, 2024.05
- **Papierverbindung:** [Modelle, die auf künstlicher Intelligenz basieren und die eine genaue Diagnose von Eierstockkrebs mittels Laboruntersuchungen in China ermöglichen: eine mehrzentrische, retrospektive Kohortenstudie](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00245-5/fulltext)

### **17. [Google veröffentlicht HEAL-Framework, einen 4-Schritt-Prozess zur Bewertung der Fairness von medizinischen KI-Tools](https://hyper.ai/news/31535)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31535](https://hyper.ai/news/31535)
- **Forschungsteam:** Google-Forschungsteam
- **Verwandte Forschung:** Maschinelles Lernen, HEAL (Health Equity Assessment of Machine Learning) -Rahmen, logistische Regressionsanalyse, Schnittanalyse, Gesundheitsgleichheit.
- **Veröffentlichte Zeitschrift:** EClinicalMedicine, 2024.04
- **Papierverbindung:** [Gesundheitsgerechtigkeitsbewertung der Leistung des maschinellen Lernens (HEAL): Rahmen- und Darmatologie-Fallstudie über KI-Modelle](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(24)00058-0/fulltext)

### **18. [Nutzung der semantischen Segmentierung zur Entwicklung von Spatial Transcriptomics Semantische Annotationswerkzeug Pianno](https://hyper.ai/news/31573)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31573](https://hyper.ai/news/31573)
- **Forschungsteam:** Das Team von Ying Zhu an der Fudan University
- **Verwandte Forschung:** Computervision, maschinelles Lernen, räumliche Clustering-Methoden, unüberwachte Clustering-Methoden, räumliche Poisson-Punkt-Prozess- (sPPP) -Modelle, hochrangige Markov-Zufallsfeld- (MRF) -Vorfahren.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2024.04
- **Papierverbindung:** [Pianno: ein probabilistischer Rahmen, der die semantische Anmerkung für die räumliche Transkriptomik automatisiert](https://www.nature.com/articles/s41467-024-47152-4)

### **19. [Das KI-Modell UniFMIR überwindet die Grenzen der bestehenden Fluoreszenzmikroskopiebilder](https://hyper.ai/news/31885)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31885](https://hyper.ai/news/31885)
- **Forschungsteam:** Bo Yan's Team an der Fudan Universität
- **Verwandte Forschung:** UniFMIR-Modell, Mehrköpfe-Module, Funktionsverbesserungsmodelle, Mehrköpfe-Module, Swin Transformer, adaptive Momentanmeldung, Deep Learning, SR-Modelle, U-Net.
- **Veröffentlichte Zeitschrift:** Naturmethoden, 2024.04
- **Papierverbindung:** [Vorbereitung eines Grundmodells für die generizierbare Auflösung von Bildern auf Basis von Fluoreszenzmikroskopie](https://www.nature.com/articles/s41592-024-02244-3)

### **20. [Das Deep Learning System verbessert die Präzision der Krebsüberlebensvorhersage](https://hyper.ai/news/32068)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32068](https://hyper.ai/news/32068)
- **Forschungsteam:** Zhangsheng Yu-Gruppe am Shanghai National Center for Applied Mathematics (SJTU-Niederlassung)
- **Verwandte Forschung:** Deep Learning-Systeme, ST-Datensätze, integrierte Graph- und Graph-Deep Learning-Modelle, CNNs und GNNs, externe Testsätze MCO-CRC, räumliche Genexpressionsmodelle, Super-Patch-Graph-Überlebensmodelle, H&E-gefärbte histologische Bildvorverarbeitung.
- **Veröffentlichte Zeitschrift:** Zellberichte Medizin, 2024.05
- **Papierverbindung:** [Die Nutzung von histologischen Bildern durch TME zur Verbesserung der Krebsprognosen durch ein Deep Learning-System](https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(24)00205-2 )

### **21. [MemSAM passt das "Segment Anything"-Modell für medizinische Videosegmentierung an](https://hyper.ai/news/32372)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32372](https://hyper.ai/news/32372)
- **Forschungsteam:** Huisi Wu (Universität Shenzhen)
- **Verwandte Forschung:** Vision-Modelle, medizinische Videosegmentierung, Echocardiographie-Videosegmentierungsmodelle, Mechanismen zur Erhöhung des Gedächtnisses, CAMUS- und EchoNet-Dynamic-Datensätze, SonoSAM-Modell, SAMUS-Modell.
- **Veröffentlichte Zeitschrift:** CVPR 2024, 2024.05
- **Papierverbindung:** [MemSAM: Dämmen Segment Anything Modell für Echocardiographie Video Segmentierung](https://github.com/dengxl0520/MemSAM)

### **22. [Medizinisches Bildsegmentierungsmodell Medizinisches SAM 2 steht an der Spitze der SOTA-Leaderboard](https://hyper.ai/news/33738)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33738](https://hyper.ai/news/33738)
- **Forschungsteam:** Mannschaft der Universität Oxford
- **Verwandte Forschung:** Medizinische Bildsegmentierungsmodelle, SAM 2, SA-V-Videosegmentierungsdatensatz, Medical SAM 2 Beispieldatensätze, Bildkodierer, Speicherkodierer.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.08
- **Papierverbindung:** [Medizinische SAM 2: Segmentieren Sie medizinische Bilder als Video über Segment Anything Model 2](https://arxiv.org/abs/2408.00874)

### **23. [Maschinelles Lernen bekämpft Chemotherapie-Resistenz und Tumorrezidenz und baut eine starke Abwehr gegen Brustkrebs-Stammzellen auf](https://hyper.ai/news/33566)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33566](https://hyper.ai/news/33566)
- **Forschungsteam:** Universität Shandong und Medizinische Universität Shanxi, gemeinsam mit Helix Matrix
- **Verwandte Forschung:** Maschinelles Lernen, Brustinvasive Carcinoma (BRCA) Datensatz, Pearson Korrelation, Gene Set Enrichment Analysis.
- **Veröffentlichte Zeitschrift:** Weiterentwickelte Wissenschaft, 2024.07
- **Papierverbindung:** [Polyamin-Anabolismus fördert Chemotherapie-induzierte Brustkrebs Stammzellen Bereicherung](https://onlinelibrary.wiley.com/doi/10.1002/advs.202404853)

### **24. [Vision-Language-Modell DeepDR-LLM für die Diabetesbehandlung veröffentlicht in der Teilzeitschrift Nature](https://hyper.ai/news/33292)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33292](https://hyper.ai/news/33292)
- **Forschungsteam:** Tsinghua Universität, Shanghai Jiao Tong Universität, National University of Singapore
- **Verwandte Forschung:** LLM, Deep Learning auf Basis von Fundus-Bildern, Adaptoren und LoRA, Transformer-Architekturen, beaufsichtigtes Feintuning.
- **Veröffentlichte Zeitschrift:** Naturmedizin, 2024.07
- **Papierverbindung:** [Integrierte Bild-basierte Deep Learning- und Sprachmodelle für die primäre Diabetesbehandlung](https://www.nature.com/articles/s41591-024-03139-8)

### **25. [Zinghua-Team schlägt KI-Basis-Modell ROAM zur präzisen Gliomdiagnose vor](https://hyper.ai/news/33136)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33136](https://hyper.ai/news/33136)
- **Forschungsteam:** Tsinghua Universität und Xiangya Krankenhaus
- **Verwandte Forschung:** Große Interessengebiete, Pyramidentransformatoren, ROAM, große Bildplatten, Xiangya-Glioma-WSI-Datensatz, TCGA-Glioma-WSI-Datensatz, schwach überwachte Rechenpathologie.
- **Veröffentlichte Zeitschrift:** Naturmaschinenintelligenz, 2024.06
- **Papierverbindung:** [Eine auf Transformatoren basierende, schwach überwachte Computationspathologie für die klinische Diagnose und die Entdeckung molekularer Marker von Gliomen](https://www.nature.com/articles/s42256-024-00868-w)

### **26. [Universales medizinisches Bildsegmentierungsmodell ScribblePrompt übertrifft SAM-basierte Modelle](https://hyper.ai/news/34720)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34720](https://hyper.ai/news/34720)
- **Forschungsteam:** MIT CSAIL, MGH, Harvard Medical School
- **Verwandte Forschung:** Deep Learning, medizinische Bildsegmentierung, MegaMedical Datensatz, interaktive Segmentierung, generative synthetische Etiketten, CNN-Transformer-Hybridlösungen.
- **Veröffentlichte Zeitschrift:** ECCV 2024, 2024.07
- **Papierverbindung:** [ScribblePrompt: Schnelle und flexible interaktive Segmentierung für jedes biomedizinische Bild](https://arxiv.org/pdf/2312.07381)

### **27. [Die digitale Zwillings-Hirn-Plattform zeigt kritische Phänomene und kognitive Funktionen ähnlich dem menschlichen Gehirn](https://hyper.ai/news/34573)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34573](https://hyper.ai/news/34573)
- **Forschungsteam:** Das Team von Prof. Jianfeng Feng an der Fudan University
- **Verwandte Forschung:** Spiking neuronale Netzwerke, digitaler Zwilling Gehirn, Reverse Engineering, MRI, Kortikum-Subkortikum-Modelle, DTB-Modelle, Datenassimilationsmodelle.
- **Veröffentlichte Zeitschrift:** National Science Review, 2024.05
- **Papierverbindung:** [Nachbildung und Erforschung des menschlichen Gehirns  Ruhe- und Aufgabenstellungszustände durch ähnliche Gehirnrechen: Skalierung und Architektur](https://doi.org/10.1093/nsr/nwae080)

### **28. [Automatisiertes Dialog-Agent-Simulationssystem führt die erste Diagnose für Depressionen durch](https://hyper.ai/news/34845)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34845](https://hyper.ai/news/34845)
- **Forschungsteam:** X-LANCE Lab in SJTU, UT Arlington, TCCI und ThetaAI
- **Verwandte Forschung:** Dialog Agent Simulationssysteme, D4-Datensatz, Tertiärspeicher-Architekturen, Patient Agent, Psychiater Agent, Instruktor Agent.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.09
- **Papierverbindung:** [Diagnose der Depression Dialog Simulation: Selbstverbesserung Psychiater mit Tertiärer Gedächtnis](https://arxiv.org/abs/2409.15084)

### **29. [Deep Learning-Modell LucaProt hilft bei der Identifizierung von RNA-Viren](https://hyper.ai/news/34968)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34968](https://hyper.ai/news/34968)
- **Forschungsteam:** Sun Yat-sen Universität, Zhejiang Universität, Fudan Universität, Alibaba Cloud usw.
- **Verwandte Forschung:** Cloud Computing und KI, Metagenomic Mining, NCBI SRA-Datenbank, CNGBdb, datenbasierte Deep Learning-Modelle, Transformer-Framework, Entdeckung von 161.979 potenziellen RNA-Virusarten.
- **Veröffentlichte Zeitschrift:** Zelle, 2024.09
- **Papierverbindung:** [Künstliche Intelligenz zur Dokumentation der verborgenen RNA-Virusphäre](https://doi.org/10.1016/j.cell.2024.09.027)

### **30. [Medizinisches Bildvorbildungsrahmen UniMedI bricht die Barrieren der Heterogenität medizinischer Daten ab](https://hyper.ai/news/35128)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35128](https://hyper.ai/news/35128)
- **Forschungsteam:** Haoji Hu's Team an der Zhejiang University, Lili Qiu's Team an der Microsoft Research Asia
- **Verwandte Forschung:** Pseudo-Pairs-Technologie, MIMIC-CXR 2.0.0 Datensatz, BIMCV Datensatz, ViT-B/16 Vision-Encoder, BioClinicalBERT, Vision-Language-Kontrast-Learning.
- **Veröffentlichte Zeitschrift:** ECCV, 2024.07
- **Papierverbindung:** [Einheitliche medizinische Bildvorbildung in sprachgesteuerter gemeinsamer semantischer Raum](https://eccv.ecva.net/virtual/2024/poster/1165)

### **31. [Mehrsprachiges medizinisches Großmodell MMed-Llama 3 passt sich besser an Szenarien medizinischer Anwendung an](https://hyper.ai/news/35242)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35242](https://hyper.ai/news/35242)
- **Forschungsteam:** Die Teams von Yanfeng Wang und Weidi Xie an der Shanghai Jiao Tong University
- **Verwandte Forschung:** Mehrsprachiges medizinisches Corpus MMedC, medizinischer QA-Benchmark MMedBench, Grundlagenmodelle MMed-Llama 3, MMedLM.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2024.09
- **Papierverbindung:** [Aufbau eines mehrsprachigen Sprachmodells für die Medizin](https://www.nature.com/articles/s41467-024-52417-z)

### **32. [Kapsel-Endoskopie-Bildstichmethode S2P-Matching hilft bei der Bildrekonstruktion](https://hyper.ai/news/35313)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35313](https://hyper.ai/news/35313)
- **Forschungsteam:** HUST, SJTU, Süd-Zentral-Minzu-Universität, HKUST(GZ), PolyU, Universität Sydney
- **Verwandte Forschung:** S2P-Matching, selbstüberwachendes Kontrastlernen, Doppel-Branchen-Coder, Transformatoren, Pixel-Level-Matching.
- **Veröffentlichte Zeitschrift:** IEEE-Transaktionen im Bereich Biomedizinisches Ingenieurwesen, 2024.09
- **Papierverbindung:** [S2P-Matching: Selbstüberwachungsbasierte Patch-basierte Matching mit Transformator für Kapsel-Endoskopische Bilder Stitzen](http://dx.doi.org/10.1109/TBME.2024.3462502)

### **33. [Der multimodale medizinische Benchmark GMAI-MMBench enthält 284 Datensätze für 18 klinische Aufgaben.](https://hyper.ai/news/35938)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35938](https://hyper.ai/news/35938)
- **Forschungsteam:** Shanghai AI Lab, Universität Washington, Monash Universität, ECNU
- **Verwandte Forschung:** GMAI-MMBench-Benchmark, der umfassendste Open-Source-Benchmark für allgemeine medizinische KI, der große Modelle für die Sprache der Vision bewertet.
- **Veröffentlichte Zeitschrift:** NeurIPS 2024, 2024.08
- **Papierverbindung:** [GMAI-MMBench: Ein umfassender Multimodal-Bewertungs-Benchmark für allgemeine medizinische KI](https://arxiv.org/abs/2408.03361v7)

### **34. [Neue Zeitreihenprognosemethode CGS-Mask enthüllt Schlüsselindikatoren für die Patientenüberlebensraten](https://hyper.ai/news/36192)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36192](https://hyper.ai/news/36192)
- **Forschungsteam:** HUST, Universität von Sydney, Tongji Hospital
- **Verwandte Forschung:** MIMIC-III Datensatz, LSST Datensatz, NATOPS Datensatz, AE Datensatz.
- **Veröffentlichte Zeitschrift:** AAAI 2024, 2024.03
- **Papierverbindung:** [CGS-Mask: Zeitreihenvorhersagen für alle intuitiv machen](https://ojs.aaai.org/index.php/AAAI/article/view/29325)

### **35. [Das nicht-invasive Gehirn-Decoding-Framework fMRI legt die Grundlage für Gehirn-Computer-Schnittstellen und kognitive Modelle](https://hyper.ai/news/36023)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36023](https://hyper.ai/news/36023)
- **Forschungsteam:** Yi Zengs Team am Institut für Automatisierung, CAS
- **Verwandte Forschung:** Multimodal-Integrationsrahmen, Natural Scenes Dataset, COCO Dataset, VAE- und CLIP-Embeddings, 3D-fMRI-Präprozessoren, multimodal LLMs.
- **Veröffentlichte Zeitschrift:** NeurIPS 2024, 2024.10
- **Papierverbindung:** [Neuro-Vision zur Sprache: Verbesserung der visuellen Rekonstruktion und der Sprachinteraktion auf der Grundlage von Gehirnaufzeichnungen](https://nips.cc/virtual/2024/poster/93607)

### **36. [Medizinisches Bildsegmentierungsmodell M2CF-Net verbessert die Diagnosepräzision für das Sjogren-Syndrom](https://hyper.ai/news/36700)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36700](https://hyper.ai/news/36700)
- **Forschungsteam:** Prof. Wei Tu und Prof. Feng Lu an der HUST
- **Verwandte Forschung:** M2CF-Net, kleine Speicheldrüsenpathologie-Slide-Daten, ROI-Extraktion, Flecknormalität, WSI-Patching, Vahadane-Algorithmus, Patch-basiertes Training.
- **Veröffentlichte Zeitschrift:** MedAI 2023, 2023
- **Papierverbindung:** [M2CF-Net: Ein Multi-Resolution- und Multi-Skala-Crossfusion-Netzwerk zur Segmentierung der Pathologie von Schäden der zentralen Lymphozyten-Sialadenitis](https://doi.ieeecomputersociety.org/10.1109/MedAI59581.2023.00063)

### **37. [BSAFusion ermöglicht die Ausrichtung und Verschmelzung multimodaler medizinischer Bilder](https://hyper.ai/news/37104)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37104](https://hyper.ai/news/37104)
- **Forschungsteam:** Kunming Universität für Wissenschaft und Technologie, Ozean Universität Chinas
- **Verwandte Forschung:** Medizinische Bildverarbeitung, Bidirectional Stepwise Feature Alignment (BSFA), CT-MRI, PET-MRI und SPECT-MRI Datensätze, Deep Learning, Computersicht.
- **Veröffentlichte Zeitschrift:** AAAI 2025, 2024.11
- **Papierverbindung:** [BSAFusion: Ein zweiseitiges Schrittweises Feature Alignment-Netzwerk für nicht ausgerichtete medizinische Bildfusion](https://arxiv.org/abs/2412.08050)

### **38. [Mehragent LLM-Rahmenwerk KG4Die Diagnose hilft bei der Diagnose von 362 häufigen Krankheiten](https://hyper.ai/news/37208)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37208](https://hyper.ai/news/37208)
- **Forschungsteam:** Universität Warwick, Universität Cranfield, Cambridge, Oxford
- **Verwandte Forschung:** KG4Diagnostik, hierarchische Multi-Agent-Frameworks, automatisierte Grafikkonstruktion von medizinischem Wissen, General Practitioner LLM (GPLLM), Consultant-LLM.
- **Veröffentlichte Zeitschrift:** AAAI-25 Brückenprogramm, 2024.12
- **Papierverbindung:** [KG4Diagnosis: Ein hierarchisches Multi-Agent LLM-Framework mit Wissensgraph-Verbesserung für die medizinische Diagnose](https://arxiv.org/abs/2412.16833)

### **39. [Bildsegmentierungsmodell ConDSeg löst Probleme mit weichen Grenzen und Zusammenfall in medizinischer Bildgebung](https://hyper.ai/news/37794)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37794](https://hyper.ai/news/37794)
- **Forschungsteam:** China University of Geosciences, Baidu
- **Verwandte Forschung:** Kontrastgetriebene Funktionsverbesserungsrahmen ConDSeg, Konsistenzverstärkungstraining, semantische Entkopplungsmodule, Größenbewusste Decoderer, BCNet, Kvasir-SEG Datensatz.
- **Veröffentlichte Zeitschrift:** AAAI 2025, 2024.12
- **Papierverbindung:** [ConDSeg: Ein allgemeines medizinisches Bildsegmentierungsrahmen über kontrastgetriebene Feature Enhancement](https://arxiv.org/abs/2412.08345)

### **40. [Medizinisches Modell M3FM ermöglicht eine klinische Diagnose mit null Schuss, unterstützt die Berichterstattung und Klassifizierung von Krankheiten](https://hyper.ai/news/37924)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37924](https://hyper.ai/news/37924)
- **Forschungsteam:** Oxford, Universität Rochester, Amazonas, Westlake Universität, Tencent Youtu Lab
- **Verwandte Forschung:** Zero-Shot-Klinische Diagnose, medizinische Bildgebung, CLIP-Modelle, M3FM-Framework, MultiMedCLIP, MIMC-CXR Datensätze, COVID-19-CT-CXR, CheXpert.
- **Veröffentlichte Zeitschrift:** Npj Digitale Medizin, 2025.02
- **Papierverbindung:** [Ein multimodales, mehrsprachiges medizinisches Grundlagenmodell für die klinische Diagnose mit Nullschuss](https://www.nature.com/articles/s41746-024-01339-7)

### **41. [Die geschlechtsspezifische Schätzung durch TC-Scans übertrifft die menschlichen Forensiker .](https://hyper.ai/news/38024)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38024](https://hyper.ai/news/38024)
- **Forschungsteam:** UWA, UNSW, Hasanuddin Universität
- **Verwandte Forschung:** Automatisierte Frameworks, die auf Deep Learning basieren, Schädelsex-Schätzung, 3D-CT-Scans, forensische Anthropologie.
- **Veröffentlichte Zeitschrift:** Wissenschaftliche Berichte, 2024.12
- **Papierverbindung:** [Deep Learning gegenüber menschlichen Assessoren: Forensische Geschlechtsschätzung aus dreidimensionalen Computertomographie-Scans](https://www.nature.com/articles/s41598-024-81718-y)

### **42. [KI fördert medizinische Forschung: Große Modelle werden zum "goldenen Partner" für die Ausbildung von Ärzten der primären Versorgung](https://hyper.ai/news/38366)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38366](https://hyper.ai/news/38366)
- **Forschungsteam:** SJTU, SUS, Tsinghua, Duke, Johns Hopkins, Universität Melbourne
- **Verwandte Forschung:** Medizinische Ausbildung, DeepSeek, Zusammenarbeit zwischen Mensch und KI, LLM, Diagnose und Behandlung von chronischen Krankheiten.
- **Veröffentlichte Zeitschrift:** Wissenschaftsbericht, 2025.01
- **Papierverbindung:** [Große Sprachmodelle für Diabetes-Ausbildung: eine prospektive Studie](https://www.sciencedirect.com/science/article/pii/S2095927325000891)

### **43. [Der Deep Learning-Algorithmus von AcneDGNet ermöglicht die Erkennung und Bewertung von Akne-Läsionen](https://hyper.ai/news/38397)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38397](https://hyper.ai/news/38397)
- **Forschungsteam:** Internationales Krankenhaus der Universität Peking
- **Verwandte Forschung:** AcneDGNet, Vision Transformers, CNNs, ACNE04 Datensatz, Swin Transformer Architekturen.
- **Veröffentlichte Zeitschrift:** Wissenschaftliche Berichte, 2025.01
- **Papierverbindung:** [Bewertung eines Modells zur Erkennung von Akne-Läsionen und zur Bewertung der Schwere für die chinesische Bevölkerung in Online- und Offline-Gesundheitsszenarien](https://www.nature.com/articles/s41598-024-84670-z)

### **44. [Multimodal medizinisches Bildsegmentierungsmodell VISTA3D veröffentlicht, das 3D-Bild-Auto-Segmentierung und Interaktion erreicht](https://hyper.ai/news/38486)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38486](https://hyper.ai/news/38486)
- **Forschungsteam:** NVIDIA, UAMS, NIH, Universität Oxford
- **Verwandte Forschung:** VISTA3D, 3D-Supervoxel-Extraktion, automatische Segmentierung, interaktive Segmentierung mit doppelter Modalität.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.11
- **Papierverbindung:** [VISTA3D: Ein einheitliches Segmentierungs- und Grundmodell für 3D-Medizinische Bildgebung](https://doi.org/10.48550/arxiv.2406.05285)

### **45. [Mehrfach-Echocardiographie einheitliches Segmentierungsmodell EchoONE segmentiert mehrere Ebene genau](https://hyper.ai/news/38544)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38544](https://hyper.ai/news/38544)
- **Forschungsteam:** Universität Shenzhen, Volkskrankenhaus Shenzhen
- **Verwandte Forschung:** Modell EchoONE, Datensatz CAMUS, Datensatz HMC-QU, EchoNet_Dynamischer Datensatz.
- **Veröffentlichte Zeitschrift:** CVPR 2025, 2025.04
- **Papierverbindung:** [EchoONE: Segmentierung mehrerer Echocardiographie-Pläne in einem Modell](https://arxiv.org/abs/2412.02993)

### **46. [Ein Dialograhmen mit mehreren Agenten simuliert medizinische Konsultationen zur Unterstützung der Krankheitsdiagnose](https://hyper.ai/news/38583)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38583](https://hyper.ai/news/38583)
- **Forschungsteam:** Westchinesis Krankenhaus, Zhejiang Universität, BUPT
- **Verwandte Forschung:** Mehrfach-Agent-Konversations- (MAC) -Rahmen, LLM, Orphanet, Medline, GPT-3.5, GPT-4.
- **Veröffentlichte Zeitschrift:** Natur, 2025.03
- **Papierverbindung:** [Verbesserung der diagnostischen Fähigkeiten mit mehreren Agenten konversationsgroßen Sprachmodellen](https://www.nature.com/articles/s41746-025-01550-0#Tab6)

### **47. [Deep Learning Framework STAIG zeigt detaillierte genetische Informationen in der Tumor-Mikroumgebung](https://hyper.ai/news/38587)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38587](https://hyper.ai/news/38587)
- **Forschungsteam:** Institut für medizinische Wissenschaften, Universität Tokio
- **Verwandte Forschung:** STAIG-Rahmen, biologische Gewebe, ST-Datenmengen, GNN.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.01
- **Papierverbindung:** [STAIG: Analyse der räumlichen Transkriptomik über bildgestütztes Graphenkontast-Lernen für Domänenforschung und ausgerichtungsfreie Integration](https://www.nature.com/articles/s41467-025-56276-0)

### **48. [Das erste All-in-One-Framework für die Wiederidentifizierung von medizinischen Bildern MaMI erreicht SOTA über 11 Datensätze hinweg](https://hyper.ai/news/38624)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38624](https://hyper.ai/news/38624)
- **Forschungsteam:** Shanghai AI Lab und mehrere Universitäten
- **Verwandte Forschung:** MaMI-Rahmen, Benchmarks für die medizinische Wiederidentifizierung, Continuous Modality Parameter Adapter (ComPA), Medical Foundation Models (MFMs).
- **Veröffentlichte Zeitschrift:** CVPR 2025, 2025.03
- **Papierverbindung:** [Zur All-in-One-Medizinische Bild-Wiederidentifizierung](https://arxiv.org/pdf/2503.08173)

### **49. [Multi-to-One-Regressionsmodell M2OST prognostiziert genauer Genexpression mit digitalen Pathologiebildern](https://hyper.ai/news/38783)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38783](https://hyper.ai/news/38783)
- **Forschungsteam:** Zhejiang Universität, Zhejiang Lab, Ritsumeikan Universität
- **Verwandte Forschung:** Vollständige Slide-Bilder (WSIs), menschliche Brustkrebsdatensätze, Transformer-Modelle, Patch-Level-Schemata.
- **Veröffentlichte Zeitschrift:** AAAI 2025, 2024.12
- **Papierverbindung:** [M2OST: Multi-to-One-Regression für die Vorhersage räumlicher Transkriptomik aus digitalen Pathologiebildern](https://arxiv.org/abs/2409.15092)

### **50. [Gehirn-MRI-Scan-Tool MindGlide quantifiziert Multiple Sklerose-Läsionen](https://hyper.ai/news/38971)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38971](https://hyper.ai/news/38971)
- **Forschungsteam:** Forschungsteam der UCL
- **Verwandte Forschung:** MindGlide-Modell, MRT, Routinepflege-Datensätze, Verletzungssegmentierung, nnU-Net, 3D-CNNs.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.04
- **Papierverbindung:** [Neue Erkenntnisse aus alten Scans ermöglichen, indem klinische MRT-Archive für die Multiple Sklerose-Forschung neu verwendet werden](https://go.hyper.ai/fDEgm)

### **51. [Hierarchische Destillations-Multi-Instanz-Lernrahmen HDMIL verarbeitet schnell Gigapixel-Gesamte-Slide-Bilder](https://hyper.ai/news/39157)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39157](https://hyper.ai/news/39157)
- **Forschungsteam:** HIT, HIT (Shenzhen)
- **Verwandte Forschung:** Mehrfach-Lernen, Tumorerkennung, WSIs, Camelyon16 Datensatz, TCGA-NSCLC Datensatz.
- **Veröffentlichte Zeitschrift:** CVPR 2025, 2025.03
- **Papierverbindung:** [Schnelle und präzise Gigapixel Pathologische Bildklassifizierung mit hierarchischem Destillations-Multi-Instanz-Lernen](https://arxiv.org/abs/2502.21130)

### **52. [Universelle 3D-Blutgefäßsegmentierungsbasismodell (FMF) übertrifft weit die SAM-basierten Modelle](https://hyper.ai/news/39201)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39201](https://hyper.ai/news/39201)
- **Forschungsteam:** Universität Zürich, ETH Zürich, Technische Universität München
- **Verwandte Forschung:** Blutgefäßsegmentierung, medizinische Bildsegmentierung, Flow Matching-basierte bedingte generative Modelle, Domänenrandomisierungsstrategien.
- **Veröffentlichte Zeitschrift:** CVPR 2025, 2025.01
- **Papierverbindung:** [vesselFM: Ein Grundmodell für die universelle 3D-Blutgefäßsegmentierung](https://go.hyper.ai/lVad9)

### **53. [Graph-Neuralnetzwerke prognostizieren das Lungenkrebs überleben und entdecken 3 tödliche Untertypen](https://hyper.ai/news/39435)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39435](https://hyper.ai/news/39435)
- **Forschungsteam:** Cornell University, Regeneron Pharmaceuticals
- **Verwandte Forschung:** Graph-Encoded Mixture Survival (GEMS), EHR-Datenbanken, ConcertAI Patient360TM NSCLC Datensatz, GNN-Coder.
- **Veröffentlichte Zeitschrift:** Mitteilung über die Natur, 2025.05
- **Papierverbindung:** [Identifizierung prädiktiver Subphenotypen für klinische Ergebnisse mit Hilfe von realen Daten und maschinellem Lernen](https://doi.org/10.1038/s41467-025-59092-8)

### **54. [Fusion-Strategie KI-Modell prognostiziert Septik-Schock-Mortalitätsrisiko](https://hyper.ai/news/39713)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39713](https://hyper.ai/news/39713)
- **Forschungsteam:** Das Tongji Krankenhaus, HUST
- **Verwandte Forschung:** Septik-Schock, auf TOPSIS basierende Classification Fusion (TCF) -Modelle, Maschinenlernungsmodelle.
- **Veröffentlichte Zeitschrift:** Die Zahl der Patienten, die in den letzten Jahren in den letzten zehn Jahren in den USA waren, beträgt
- **Papierverbindung:** [Modelle für die Vorhersage der Mehrfachsterblichkeit für den septischen Schock in einer retrospektiven Studie mit mehreren Zentren, die auf künstlicher Intelligenz basieren](https://go.hyper.ai/faMLL)

### **55. [Das weltweit erste klinische Gedankengrafikmodell in HIE verbessert die neurokognitive Ergebnisvorhersage um 15%](https://hyper.ai/news/40828)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/40828](https://hyper.ai/news/40828)
- **Forschungsteam:** Boston Children's Hospital, Harvard Medical School, NYU, MIT-IBM Watson Lab
- **Verwandte Forschung:** Medizinische Begriffswerte, Modell der klinischen Denkgrafik (CGoT), Datensatz der HIE-Gegriffsweise.
- **Veröffentlichte Zeitschrift:** ICML 2025, 2025.06
- **Papierverbindung:** [Visuelle und Domänenkenntnisse für die medizinische Vernunft auf professioneller Ebene](https://openreview.net/forum?id=tnyxtaSve5)

### **56. [Das Modellieren der kohortenartigen Patienten mit mehrdimensionalen EHR-Daten erhöht die Präzision der Vorhersage der Aufenthaltsdauer um 16,3%](https://hyper.ai/news/41303)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/41303](https://hyper.ai/news/41303)
- **Forschungsteam:** NUS, Zhejiang Universität
- **Verwandte Forschung:** EHR, NeuralCohort-Repräsentationslernmethode, MIMIC-III, MIMIC-IV, Diabetes130.
- **Veröffentlichte Zeitschrift:** ICML 2025, 2025.06
- **Papierverbindung:** [NeuralCohort: Cohort-bewusstes Neural Representation Learning für Gesundheitsanalysen](https://openreview.net/forum?id=bqQVa6VRvm)

### **57. [Deep Learning-Modell APEX zeigt potenzielle Antibiotika-Kandidaten an](https://hyper.ai/news/42377)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42377](https://hyper.ai/news/42377)
- **Forschungsteam:** Universität von Pennsylvania
- **Verwandte Forschung:** Weltweite Giftdatenbanken, APEX-Modellvorhersage, Antibiotika-F&E, Tiergifte.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.07
- **Papierverbindung:** [Computationsforschung globaler Giftstoffe zur Entdeckung von antimikrobiellen Substanzen mit der künstlichen Intelligenz von Venomics](https://www.nature.com/articles/s41467-025-60051-6)

### **58. [Epidemiologische Beurteilung von Abwasser mit Hilfe von Gensequenzierung und maschinellem Lernen: Die ICA-Var-Methode erkennt Viren bis zu 4 Wochen früher](https://hyper.ai/news/42585)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42585](https://hyper.ai/news/42585)
- **Forschungsteam:** UNLV
- **Verwandte Forschung:** Unüberwachtes Maschinenlernen, unabhängige Komponentenanalyse, Viruserkennung, doppelte Regressionsmethoden, ICA-Var.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.07
- **Papierverbindung:** [Frühe Erkennung aufstrebender SARS-CoV-2-Varianten aus Abwasser durch Genome-Sequenzierung und maschinelles Lernen](https://www.nature.com/articles/s41467-025-61280-5)

### **59. [Das zweiseitige Brownian-Brücke-Diffusion-Modell verbessert die Reproduzierbarkeit virtueller Farbe](https://hyper.ai/news/42959)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42959](https://hyper.ai/news/42959)
- **Forschungsteam:** UCLA
- **Verwandte Forschung:** Bildgebende Massenspektrometrie, Diffusionsmodelle, Brownian-Brücke-Diffusionsmodelle, SNR-basierte Kanalwahlstrategien.
- **Veröffentlichte Zeitschrift:** Fortschritte der Wissenschaft, 2025.08
- **Papierverbindung:** [Virtuelle Farbgebung von etikettenfreiem Gewebe in der Bildmassenspektrometrie](https://go.hyper.ai/X9GEn)

### **60. [Medizinisches GraphRAG brecht Qualitätssicherheitsrekorde und erzielt SOTA auf 11 Benchmark-Datensätzen](https://hyper.ai/news/43064)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/43064](https://hyper.ai/news/43064)
- **Forschungsteam:** Oxford, CMU, Universität von Edinburgh
- **Verwandte Forschung:** RAG, Medical GraphRAG, U-Retrieval Methoden, MIMIC-IV, FakeHealth, PubHealth.
- **Veröffentlichte Zeitschrift:** ACL 2025, 2025.07
- **Papierverbindung:** [Medizinisches Graph RAG: Auf dem Weg zu einem sicheren medizinischen Großsprachmodell über Graph-Retrieval-Augmented Generation](https://go.hyper.ai/OaMIE)

### **61. [Gesundheitsagent erkennt automatisch medizinische Ethik und Sicherheitsprobleme](https://hyper.ai/news/44006)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/44006](https://hyper.ai/news/44006)
- **Forschungsteam:** Wuhan Universität, NTU
- **Verwandte Forschung:** Das heißt, dass es sich um die Erweiterung der Arbeitsbedingungen handelt.
- **Veröffentlichte Zeitschrift:** Natur Künstliche Intelligenz, 2025.09
- **Papierverbindung:** [Gesundheitsagentur: Erweckung der Kraft großer Sprachmodelle für medizinische Beratung](https://go.hyper.ai/09lYX)

### **62. [Blutzellbildklassifizierer CytoDiffusion hilft bei der Entdeckung von Leukämie und übertrifft klinische Experten](https://hyper.ai/news/47004)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/47004](https://hyper.ai/news/47004)
- **Forschungsteam:** Universität Cambridge
- **Verwandte Forschung:** Die Beseitigung der Kosten für die Einführung von Maßnahmen zur Verbesserung der Qualität und des Umweltschutzes
- **Veröffentlichte Zeitschrift:** Natur, 2025.11
- **Papierverbindung:** [Tiefe generative Klassifizierung der Blutzellmorphologie](https://www.nature.com/articles/s42256-025-01122-7)

### **63. [Das UCL-Team schlägt einen föderativen Lernrahmen MORPHFED für die interinstitutionelle Blutmorphologieanalyse vor](https://hyper.ai/news/49373)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49373](https://hyper.ai/news/49373)
- **Forschungsteam:** Computerwissenschaftliche Abteilung der UCL
- **Verwandte Forschung:** Blutmorphologieuntersuchungen, weiße Blutkörperchenmorphologie-Analyse, Federated Learning, medizinische KI, die Privatsphäre schützt.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [MORPHFED: Föderatives Lernen für die interinstitutionelle Blutmorphologieanalyse](https://arxiv.org/abs/2601.04121)

### **64. [Französisches Team schlägt einen erklärbaren Rahmen für maschinelles Lernen zur genauen Mortalitätsvorhersage bei Lebertransplantationskandidaten vor](https://hyper.ai/news/49742)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49742](https://hyper.ai/news/49742)
- **Forschungsteam:** Télécom Paris und die Université Paris-Saclay
- **Verwandte Forschung:** Hepatozelluläres Karzinom (HCC), Lebertransplantations-Wartelisten-Mortalitätsrisiko, Ensemble Learning, SHAP-Analyse.
- **Veröffentlichte Zeitschrift:** Gesundheitsdatenwissenschaft
- **Papierverbindung:** [Erklärbare Sterblichkeitsvorhersage bei Lebertransplantationskandidaten mit Hepatozellulärem Karzinom: Ein überwachtes Clustering-Ansatz](https://spj.science.org/doi/10.34133/hds.0295)

### **65. [Die Stanford University schlägt Merlin vor, das erste native 3D-Buch-CT-Vision-Sprache-Modell](https://hyper.ai/news/49864)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49864](https://hyper.ai/news/49864)
- **Forschungsteam:** Stanford Universität
- **Verwandte Forschung:** Abdominal Computed Tomography (CT), 3D Vision-Language-Modelle (3D VLMs), Merlin, elektronische Gesundheitsregister (EHR).
- **Veröffentlichte Zeitschrift:** Die Natur
- **Papierverbindung:** [Merlin: eine Computertomographie VisionSprachbasismodell und Datensatz](https://www.nature.com/articles/s41586-026-10181-8)

## **KI+ Materialchemie**

*(Die Einträge folgen weiterhin der exakt identischen Struktur)*

### **1. [Hochleistungsrechnergebnisse erzeugen 120.000 neue MOF-Kandidaten in 33 Minuten](https://hyper.ai/news/30269)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30269](https://hyper.ai/news/30269)
- **Forschungsteam:** Das Forschungsteam von Eliu A. Huerta im Argonne National Laboratory
- **Verwandte Forschung:** HMOFs Datensatz, generative KI, GHP-MOFsassemble, MMPA, DiffLinker, CGCNN, GCMC.
- **Veröffentlichte Zeitschrift:** Natur, 2024.02
- **Papierverbindung:** [Ein generativer Rahmen für künstliche Intelligenz, der auf einem molekularen Diffusionsmodell für die Konstruktion von metall-organischen Rahmenwerken für die Kohlenstofferfassung basiert](https://www.nature.com/articles/s42004-023-01090-2)

### **2. [Maschinelle Lernalgorithmen-Bildschirme P-SOC-Elektrodenmaterialien](https://hyper.ai/news/29069)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29069](https://hyper.ai/news/29069)
- **Forschungsteam:** Siyu Ye Forschungsteam an der Universität Guangzhou
- **Verwandte Forschung:** XGBoost, Maschinenlernungsmodelle, RF, DFT. Erfolgreich gescreentes Elektrodenmaterial LCN91.
- **Veröffentlichte Zeitschrift:** Vorgehende Funktionsmaterialien, 2023.12
- **Papierverbindung:** [Maschinelles Lernen Assisted Screening Protonleitende Co/Fe-basierte Oxide für die Luftelektrode der Proton-Fest-Oxid-Zelle](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202309855)

### **3. [Das SEN-Modell für maschinelles Lernen erzielt hochgenaue Proportionsvorhersagen über die Eigenschaften von Materialien](https://hyper.ai/news/28410)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28410](https://hyper.ai/news/28410)
- **Forschungsteam:** Die Gruppe von Huashan Li und Biao Wang an der Sun Yat-sen Universität
- **Verwandte Forschung:** Materials Projektdatenbank, SEN, Kapselmechanismus, Deep Learning.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2023.08
- **Papierverbindung:** [Material-Symmetrieerkennung und Eigenschaftsvorhersage durch Kristallkapselrepräsentation](https://www.nature.com/articles/s41467-023-40756-2)

### **4. [Deep Learning Tool GNoME entdeckt 2,2 Millionen neue Kristalle](https://hyper.ai/news/28347)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28347](https://hyper.ai/news/28347)
- **Forschungsteam:** Google DeepMind Forschungsteam
- **Verwandte Forschung:** Datenbank GNoME, GNoME, SOTA GNN-Modelle, Deep Learning, Materialprojekt, OQMD, WBM, ICSD.
- **Veröffentlichte Zeitschrift:** Natur, Jahr 2023.11
- **Papierverbindung:** [Skalierung des Deep Learning für die Materialentdeckung](https://www.nature.com/articles/s41586-023-06735-9)

### **5. [Feldinduziertes rekursiv eingebettetes Atom-Neuralnetz beschreibt externe Feldstärke- und Richtungsänderungen genau](https://hyper.ai/news/28285)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28285](https://hyper.ai/news/28285)
- **Forschungsteam:** Bin Jiang's Gruppe am USTC
- **Verwandte Forschung:** FIREANN, FIREANN-wF-Modell, Feldinduziertes rekursiv eingebettetes Atom-Neuralnetzwerk.
- **Veröffentlichte Zeitschrift:** Mitteilung über die Natur, 2023.10
- **Papierverbindung:** [Universelles Maschinelles Lernen für die Reaktion atomistischer Systeme auf externe Felder](https://www.nature.com/articles/s41467-023-42148-y)

### **6. [Maschinelles Lernen prädikt Wasseradsorption Isothermen poröser Materialien](https://hyper.ai/news/28260)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28260](https://hyper.ai/news/28260)
- **Forschungsteam:** Song Li's Gruppe bei HUST
- **Verwandte Forschung:** EWAID-Datenbank, maschinelle Lernmodelle, RF, ANN.
- **Veröffentlichte Zeitschrift:** Journal of Materials Chemistry A, 2023.09
- **Papierverbindung:** [Maschinelles Lernen unterstützte Vorhersage von Wasseradsorptionsisothermen und Kühlleistung](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA03586G)

### **7. [Maschinelles Lernen zur Optimierung von Ko-Katalysatoren für BiVO(4) Photoanoden](https://hyper.ai/news/28013)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28013](https://hyper.ai/news/28013)
- **Forschungsteam:** Die Gruppe von Hongwei Zhu an der Tsinghua Universität
- **Verwandte Forschung:** ML, neuronale Netzwerke, AdaBoost-Algorithmus, Gradient Boosting, selbsterklärbare Modelle, Bagging-Algorithmen, Kreuzvalidation.
- **Veröffentlichte Zeitschrift:** Journal of Materials Chemistry A, 2023.10
- **Papierverbindung:** [Eine umfassende maschinelle Lernstrategie für die Entwicklung von Hochleistungs-Fotosynodenkatalysatoren](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA04148D)

### **8. [RetroExplainer-Algorithmus führt Retrosynthese-Vorhersagen auf der Grundlage von Deep Learning durch](https://hyper.ai/news/27406)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/27406](https://hyper.ai/news/27406)
- **Forschungsteam:** Universität Shandong, UESTC
- **Verwandte Forschung:** RetroExplainer, Deep Learning, MSMS-GT, DAMT, interpretierbare Entscheidungsmodule.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2023.10
- **Papierverbindung:** [Retrosynthesevorhersage mit einem interpretierbaren Deep-Learning-Framework basierend auf Aufgaben der molekularen Montage](https://www.nature.com/articles/s41467-023-41698-5)

### **9. [Tiefe neuronale Netzwerke + NLP zur Entwicklung von korrosionsbeständigen Legierungen](https://hyper.ai/news/25891)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/25891](https://hyper.ai/news/25891)
- **Forschungsteam:** Max-Planck-Institut für Eisenforschung (Deutschland)
- **Verwandte Forschung:** DNN, NLP. Lesen von Textdaten über Legierungsprozess- und Prüfmethoden, die in der Lage sind, neue Elemente vorherzusagen.
- **Veröffentlichte Zeitschrift:** Fortschritte der Wissenschaft, 2023.08
- **Papierverbindung:** [Verbesserung des korrosionsbeständigen Legierungsentwurfs durch natürliche Sprachverarbeitung und tiefgreifendes Lernen](https://www.science.org/doi/10.1126/sciadv.adg7992)

### **10. [Deep Learning bestimmt die inneren Strukturen von Materialien durch Oberflächenbeobachtungen](https://hyper.ai/news/25859)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/25859](https://hyper.ai/news/25859)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** Deep Learning, FEA-Rechnungen, Abaqus-Visualisierungswerkzeuge, GAN, ViViT, CNN.
- **Veröffentlichte Zeitschrift:** Erweiterte Materialien, 2023.03
- **Papierverbindung:** [Füllen Sie die Lücke aus: Übertragbare Deep Learning-Ansätze zur Wiederherstellung fehlender physischer Feldinformationen](https://onlinelibrary.wiley.com/doi/full/10.1002/adma.202301449)

### **11. [Entwicklung von 3 neuen Materialien mit innovativen Röntgen-Szintillatoren](https://hyper.ai/news/31465)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31465](https://hyper.ai/news/31465)
- **Forschungsteam:** Hailei Zhangs Forschungsteam an der Universität Hebei
- **Verwandte Forschung:** Wasservertriebliche Röntgen-Szintillatoren, Nanomaterialien, Polyurethan-Schaum, Röntgenbilder flexibler Hydrogel-Szintillatoren, mehrstufige Anti-Fälschung-Info-Verschlüsselungs-Komposit-Hydrogel.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2024.03
- **Papierverbindung:** [Wasserspeichliche Röntgen-Szintillatoren, die eine Beschichtung und Vermischung mit Polymermaterialien für mehrere Anwendungen ermöglichen](https://www.nature.com/articles/s41467-024-46287-8)

### **12. [Halbüberwachtes Lernen extrahiert verborgene Informationen aus nicht gekennzeichneten Daten](https://hyper.ai/news/31089)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31089](https://hyper.ai/news/31089)
- **Forschungsteam:** Das Forschungsteam von Jiayu Wan an der SJTU
- **Verwandte Forschung:** Halbüberwachtes Lernen, nicht gekennzeichnete Daten, Bayesian Co-Training, Teil-View-Modelle, Voll-View-Modelle.
- **Veröffentlichte Zeitschrift:** Joule, 2024.03
- **Papierverbindung:** [Halbüberwachtes Lernen für eine erklärbare Batterielebensvorhersage mit wenigen Schlägen](https://doi.org/10.1016/j.joule.2024.02.020 )

### **13. [Automatische Erkenntnisgewinnung auf Basis von AutoML](https://hyper.ai/news/30920)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30920](https://hyper.ai/news/30920)
- **Forschungsteam:** Yulian, er ist Forschungsteam an der SJTU.
- **Verwandte Forschung:** AutoML, Katalysatoren, Chemisorption Energie, Eads-Wert, Feature-Deletion-Experimente, neuronale Netzwerke, Hochleistung DFT.
- **Veröffentlichte Zeitschrift:** PNAS, 2024.03
- **Papierverbindung:** [Interpretation der Chemabsorptionsstärke mit AutoML-basierten Feature-Deletion-Experimenten](https://hyper.ai/news/30920)

### **14. [Uni-MOF: Ein maschinelles Lernmodell, das das Adsorptionsverhalten in 3D-MOF-Materialien vorhersagt](https://hyper.ai/news/30663)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30663](https://hyper.ai/news/30663)
- **Forschungsteam:** Forschungsteam von Diannan Lu, Abteilung Chemieingenieurwesen der Tsinghua Universität
- **Verwandte Forschung:** hMOFs50-Datenbank, MOF/COF-Datenbanken, Uni-MOF-Finionierung. Über 630.000 3D-Raumkonfigurationen und interatomische Verbindungsbeziehungen bewertet.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2024.03
- **Papierverbindung:** [Ein umfassender, auf Transformatoren basierender Ansatz für hochgenaue Vorhersagen der Gasadsorption in metallorganischen Rahmenwerken](https://www.nature.com/articles/s41467-024-46276-x)

### **15. [Die Mikroelektronik beschleunigt sich in die Zeit nach Moore!](https://hyper.ai/news/32326)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32326](https://hyper.ai/news/32326)
- **Forschungsteam:** Die Gruppe von Yongfeng Mei an der Universität Fudan
- **Verwandte Forschung:** Finite-Element-Modelle, angespannte Nanomembran-Release-Modelle, Fick-Gesetze, tiefe Neuralnetzwerke, 3D-Fotodetektoren, Winkelempfindliche Detektionsmodelle.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2024.04
- **Papierverbindung:** [Mehrstufige Konstruktion und Konstruktion in Nanomembranenwalzen für dreidimensionale winkelempfindliche Photodetektion](https://www.nature.com/articles/s41467-024-47405-2)

### **16. [Neugestaltung der Leistungsgrenzen von Lithiumbatterien mit dem Vorschlag eines vereinfachten elektrochemischen Modells auf Basis des Ensemble-Lernens](https://hyper.ai/news/32323)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32323](https://hyper.ai/news/32323)
- **Forschungsteam:** Das Team von Jianqiang Kang an der Wuhan University of Technology
- **Verwandte Forschung:** Vereinfachte elektrochemische Modelle, Ensemble-Lernmodelle, maschinelles Lernen, First-Order Inertia Element (FIE), Discrete-Time Realization Algorithm (DRA), Fractional-Order Padé Approximation (FOM), Three-Parameter Parabolic Approximation (TPM).
- **Veröffentlichte Zeitschrift:** Wissenschaft, 2024.05
- **Papierverbindung:** [Ein vereinfachtes elektrochemisches Modell für Lithium-Ionen-Batterien basierend auf Ensemble Learning](https://www.sciencedirect.com/science/article/pii/S2589004224009076)

### **17. [Der stärkste Eisen-basierte Supraleitermagnet, der durch maschinelles Lernen entstanden ist](https://hyper.ai/news/32556)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32556](https://hyper.ai/news/32556)
- **Forschungsteam:** Hochschule für Landwirtschaft und Technologie in Tokio
- **Verwandte Forschung:** BOXVIA Maschinelles Lernen, datenorientierte Schleifen, numerische Simulationen, Eisenbasierter überleitender Dauermagnet Ba122, Feldgekühlte Magnetisierung (FCM) -Modelle.
- **Veröffentlichte Zeitschrift:** NPG Asia Materials, 2024.06
- **Papierverbindung:** [Superstärkige Dauermagnete mit Eisen-basierten Supraleitern durch Daten- und Forscherprozessentwurf](https://www.nature.com/articles/s41427-024-00549-5)

### **18. [Neuronale Netzwerke ersetzen die Dichte-Funktionstheorie!](https://hyper.ai/news/32891)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32891](https://hyper.ai/news/32891)
- **Forschungsteam:** Das Team von Yong Xu und Wenhui Duan an der Abteilung für Physik der Tsinghua Universität
- **Verwandte Forschung:** Material-Projekt-Datenbank, Deep-Learning DFT Hamiltonian (DeepH) -Methode, universelle Materialmodelle, neuronale Netzwerke, gleichwertige neuronale Netzwerke, AiiDA-Framework.
- **Veröffentlichte Zeitschrift:** Wissenschaftlicher Bulletin, 2024.06
- **Papierverbindung:** [Universales Materialmodell der Theorie der Funktionsdichte des tiefen Lernens Hamiltonian](https://doi.org/10.1016/j.scib.2024.06.011)

### **19. [Neural Netzwerk Dichte Funktionsrahmen öffnet die schwarze Box der elektronischen Struktur der Materie Vorhersage](https://hyper.ai/news/33525)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33525](https://hyper.ai/news/33525)
- **Forschungsteam:** Die Gruppe von Yong Xu und Wenhui Duan an der Tsinghua Universität
- **Verwandte Forschung:** Neural-Network DFT, variationelle DFT, gleichwertige neuronale Netzwerke, Julia-Sprache, Zygote AD-Framework, Deep Learning, unüberwachtes Lernen, DFT.
- **Veröffentlichte Zeitschrift:** Phys. Rev. Lett, 2024.08
- **Papierverbindung:** [Neural-Netzwerkdichte-Funktionstheorie basierend auf variabler Energieminimierung](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.076401)

### **20. [Erste vollständig vorwärtsmodus-Ausbildungsarchitektur für optisches Rechnen mit neuronalen Netzwerken erzielt einen großen Durchbruch in heimischen optischen Chips](https://hyper.ai/news/33440)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33440](https://hyper.ai/news/33440)
- **Forschungsteam:** Qionghai Dai und Lu Fangs Forschungsteam an der Tsinghua Universität
- **Verwandte Forschung:** Neurale Netzwerke, vollständig vorwärtsgeführt, maschinelles Lernen, MNIST, Fashion-MNIST, CIFAR-10, ImageNet, MWD, Iris Datensatz, Zieldatensätze von Chromium.
- **Veröffentlichte Zeitschrift:** Natur, Jahr 2024.08
- **Papierverbindung:** [Ausbildung im vollen Vorwärtsmodus für optische neuronale Netzwerke](https://www.nature.com/articles/s41586-024-07687-4)

*(Wegen der Längenbeschränkungen wird die Übersetzung die angebotene Struktur genau abbilden. Um die vollständige Formatierung und Konsistenz zu erhalten, gelten ähnliche Übersetzungsregeln für Abschnitte 21-54 von AI+ Materials Chemistry, die gesamte AI+ Zoologie-Botanik, AI+ Landwirtschaft-Waldwirtschaft-Tierzucht, AI+ Meteorologie, AI+ Astronomie, AI+ Naturkatastrophe, AI4S-Politik und andere. Hier ist der übersetzte Text für die verbleibenden kategorisierten Papiere, die Ihren genauen Eingang entsprechen.)*

### **21. [Chemie LLM ChemLLM umfasst 7 Millionen QA-Daten, professionelle Fähigkeiten rivalieren GPT-4](https://hyper.ai/news/34170)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34170](https://hyper.ai/news/34170)
- **Forschungsteam:** Shanghai AI Lab
- **Verwandte Forschung:** Große chemische Datensätze ChemData, ChemPref-10K englisch/chinesische Datensätze, C-MHChem Datensätze, ChemBench4K, ChemBench, Multi-Corpus, NLP-Aufgaben.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.02
- **Papierverbindung:** [ChemLLM: ein chemisches großes Sprachmodell](https://arxiv.org/abs/2402.06852)

### **22. [Wirkungsfähige Mikrospektrometer mit KI-Adaptivität](https://hyper.ai/news/34075)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34075](https://hyper.ai/news/34075)
- **Forschungsteam:** Die Gruppe von Yongfeng Mei an der Universität Fudan
- **Verwandte Forschung:** Optische Spektrometer, miniaturisierte rekonstruktive Spektrometer, CMOS-IC-Prozesse, Stromkanalstromsets.
- **Veröffentlichte Zeitschrift:** PNAS, 2024.08
- **Papierverbindung:** [CMOS-kompatible Rekonstruktive Spektrometer mit selbstreferenzierenden integrierten Fabry-Perot-Resonatoren](https://www.pnas.org/doi/10.1073/pnas.2403950121)

### **23. [Das GNNOpt-Modell identifiziert Hunderte von Kandidaten für Solarzellen und Quantenmaterial](https://hyper.ai/news/35009)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35009](https://hyper.ai/news/35009)
- **Forschungsteam:** Tohoku Universität, MIT
- **Verwandte Forschung:** DFT-Berechnungen, GNNOpt, Ensemble-Einbetten, gleichwertige GNN, Materialprojektdatenbank.
- **Veröffentlichte Zeitschrift:** Erweiterte Materialien, 2024.06
- **Papierverbindung:** [Universal-Ensemble-Embedding Graph Neural Network zur direkten Vorhersage von optischen Spektren aus Kristallstrukturen](https://onlinelibrary.wiley.com/doi/epdf/10.1002/adma.202409175)

### **24. [Open OMat24 Datensatz enthält 110 Millionen DFT-Berechnungsresultate](https://hyper.ai/news/35515)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35515](https://hyper.ai/news/35515)
- **Forschungsteam:** Metaschnitt
- **Verwandte Forschung:** Offene Materialien 2024 (OMat24), EquformerV2 (eqV2), ab initio MD.
- **Veröffentlichte Zeitschrift:** Arxiv, 2024.10
- **Papierverbindung:** [Offene Materialien 2024 (OMat24) Anorganische Materialien Datensatz und Modelle](https://arxiv.org/pdf/2410.12771)

### **25. [Neue, widerstandsfähige, hohe Entropie-Legierung, die durch maschinelles Lernen synthetisiert wird, verfügt über eine ausgezeichnete Raumtemperatur-Ductilität](https://hyper.ai/news/35536)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35536](https://hyper.ai/news/35536)
- **Forschungsteam:** Das Team von Yanjing Su an der Universität für Wissenschaft und Technologie in Peking
- **Verwandte Forschung:** ML kombiniert mit genetischen Suchen, Clustering-Analysen, Multi-Objective Optimization (MOO) -Rahmen.
- **Veröffentlichte Zeitschrift:** Technik, 2024.09
- **Papierverbindung:** [Maschinelle Lernassistierte Kompositionsgestaltung von refraktären Hochentropielegierungen mit optimaler Stärke und Duktitivität](https://www.sciencedirect.com/science/article/pii/S2095809924005113 )

### **26. [Materialgeneriertes Modell FlowLLM verfügt über einen Datensatz von über 45 000 Materialien](https://hyper.ai/news/35846)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/35846](https://hyper.ai/news/35846)
- **Forschungsteam:** Meta FAIR, Universität Amsterdam
- **Verwandte Forschung:** FlowLLM, S.U.N. Materialgenerierung, LLMs, Riemannian Flow Matching (RFM), MP-20 Datensatz, LoRA.
- **Veröffentlichte Zeitschrift:** NeurIPS 2024, 2024.10
- **Papierverbindung:** [FlowLLM: Flow Matching für Materialgenerierung mit großen Sprachmodellen als Basisverteilung](https://arxiv.org/pdf/2410.23405)

### **27. [Aktives Lernen zur Identifizierung von 14.000 hohen Entropienoxiden, erfolgreiches Screening von 4 hochaktiven Wasserstoff-Evolutionskatalysatoren](https://hyper.ai/news/36352)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36352](https://hyper.ai/news/36352)
- **Forschungsteam:** Das Team von Xun Wang in Tsinghua, Liang Wu an der SJTU, Shengqi Chu an der IHEP CAS, Guang Lin an der Purdue, Yan Xiang an der Duke
- **Verwandte Forschung:** Aktives Lernen (AL), Kennard-Stone-Probenahme, XRD, CrMnCoNiCu-Katalysatoren.
- **Veröffentlichte Zeitschrift:** Journal of the American Chemical Society, 2024.10
- **Papierverbindung:** [Aktives Lernen geführte Entdeckung von hohen Entropienoxiden mit hoher H2-Produktion](https://pubs.acs.org/doi/10.1021/jacs.4c06272)

### **28. [Das Deep Learning-Modell BETE-NET steigert die Superleitungsmaterialsucheeffizienz um 5x](https://hyper.ai/news/37658)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37658](https://hyper.ai/news/37658)
- **Forschungsteam:** Universität von Florida, Universität von Tennessee
- **Verwandte Forschung:** BETE-NET, α2F(ω) Datensätze, Spektralfunktionsdatensätze von Eliashberg.
- **Veröffentlichte Zeitschrift:** npj Berechnungsmaterialien, 2025.01
- **Papierverbindung:** [Beschleunigung der Entdeckung von Supraleitern durch das Tempered Deep Learning der Spektralfunktion Elektron-Phonon](https://www.nature.com/articles/s41524-024-01475-4)

### **29. [Gradient Boosting Decision Tree (GBDT) -Technologie verbessert weiter die hochdruckige Vorhersage der Oxidationsbeständigkeit von Hochentropielegierungen](https://hyper.ai/news/37723)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37723](https://hyper.ai/news/37723)
- **Forschungsteam:** Gemeinsames Team der Universität Bordeaux, NIMS (Japan), NTHU (Taiwan), KU Leuven, WEL Research Institute
- **Verwandte Forschung:** GBDT-Technologie, XGBoost-Algorithmus, Materialien mit hoher Temperatur, Legierungen mit hoher Entropie (RHEAs und RCCAs).
- **Veröffentlichte Zeitschrift:** Scripta Materialia, 2025.01
- **Papierverbindung:** [Weiterentwicklung von widerstandsfähigen Legierungen mit hoher Entropie mit KI-Vorhersage-Modellen für hohe Temperatur-Oxidationsbeständigkeit](https://doi.org/10.1016/j.scriptamat.2024.116394)

### **30. [Moleküldesignrahmen RingFormer prognostiziert genauer organisches Material molekulare optoelektronische Eigenschaften](https://hyper.ai/news/37870)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37870](https://hyper.ai/news/37870)
- **Forschungsteam:** Die Polytechnische Universität Hongkong
- **Verwandte Forschung:** Moleküldesign, Transformer-Architekturen, organische Solarzellen, Graph Neural Networks, RingFormer.
- **Veröffentlichte Zeitschrift:** AAAI 2025, 2024.12
- **Papierverbindung:** [RingFormer: Ein Ring-Verbesserter Graph Transformer für die Vorhersage der Eigenschaften organischer Solarzellen](https://doi.org/10.48550/arXiv.2412.09030)

### **31. [Methode der Planung der anorganischen Retrosynthese Retrieval-Retro verbessert die Effizienz und Genauigkeit der Anorganischen Materialsynthese](https://hyper.ai/news/37969)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/37969](https://hyper.ai/news/37969)
- **Forschungsteam:** KRICT, KAIST
- **Verwandte Forschung:** Retrieval-Retro, konvolutionäre VAEs, maskierte Vorläufer-Completing-Retriever, Neuralektionsenergie-Retriever.
- **Veröffentlichte Zeitschrift:** NeurIPS 2024, 2024.10
- **Papierverbindung:** [Retrieval-Retro: Anorganische Retrosynthese mit Fachwissen](https://doi.org/10.48550/arXiv.2410.21341)

### **32. [Die Verwendung großer Modelle zur Entschlüsselung von Hydride-Solid-State-Elektrolytenleitungsmechanismen, die ein zuverlässiges Modell zur Aktivierungsergievorhersage erstellt](https://hyper.ai/news/39173)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39173](https://hyper.ai/news/39173)
- **Forschungsteam:** Tohoku Universität, Sichuan Universität, Shibaura Institut für Technologie
- **Verwandte Forschung:** Solid-State-Elektrolyte (SSE), LLM, ab initio-Metadynamik (MetaD).
- **Veröffentlichte Zeitschrift:** Angewandte Chemie-International Edition, 2025.04
- **Papierverbindung:** [Die Komplexität von Divalentenhydridelektroliten in Festkörperbatterien über einen datendriven Rahmen mit großem Sprachmodell zu entlarven](https://go.hyper.ai/isQRi)

### **33. [Die Massenspektrometrie-Datensuche auf Tera-Skala durch maschinelles Lernen entdeckt unbekannte chemische Reaktionen](https://hyper.ai/news/39224)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39224](https://hyper.ai/news/39224)
- **Forschungsteam:** Russische Akademie der Wissenschaften und andere
- **Verwandte Forschung:** Massenspektrometrie, ML-basierte Suchmaschine MEDUSA Search, PubChem-Datenbank.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.01
- **Papierverbindung:** [Entdeckung organischer Reaktionen mit einer maschinellen Lerntechnik zur Entschlüsselung von Massenspektrometrie-Daten im Tera-Skalen](https://go.hyper.ai/ak7bN)

### **34. [Generative KI-Strukturlösungsmethode PXRDnet basierend auf Diffusionsmodellen löst erfolgreich 200 komplexe simulierte Nanokristalle](https://hyper.ai/news/39287)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/39287](https://hyper.ai/news/39287)
- **Forschungsteam:** Columbia Universität, Stanford Universität
- **Verwandte Forschung:** Röntgendiffraktion, PXRDnet, MP-20-PXRD Benchmark Datensatz, Materialprojektdatenbank, CDVAE-Architektur, PXRD-Regressoren.
- **Veröffentlichte Zeitschrift:** Naturmaterialien, 2025.04
- **Papierverbindung:** [Ab initio-Strukturlösungen aus nanocrystallinen Pulverdiffraktionsdaten über Diffusionsmodelle](https://go.hyper.ai/r1K6b)

### **35. [Das DreaMS-Modell umfasst 200 Millionen molekulare Massenspektren und baut den weltweit größten Massenspezifischen Datensatz GeMS auf.](https://hyper.ai/news/40201)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/40201](https://hyper.ai/news/40201)
- **Forschungsteam:** Institut für organische Chemie und Biochemie, Tschechische Akademie der Wissenschaften
- **Verwandte Forschung:** GeMS-Datensatz, Lokal-Sensitive Hashing (LSH), BERT-Architekturen, selbstüberwachendes Lernen, Fourier-Funktionen, lineares Sonden.
- **Veröffentlichte Zeitschrift:** Naturbiotechnologie, 2025.05
- **Papierverbindung:** [Selbstüberwachtes Lernen von molekularen Darstellungen aus Millionen von Tandemmassenspektren mit Hilfe von DreaMS](https://go.hyper.ai/uNbqL)

### **36. [Gleichwertiges Maschinelles Lernen beschleunigt die groß angelegte Simulation von elektrischen Feldern von Materialien](https://hyper.ai/news/40600)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/40600](https://hyper.ai/news/40600)
- **Forschungsteam:** Harvard University, Robert Bosch LLC
- **Verwandte Forschung:** Maschinelle Lernrahmen, Architektur von neuronalen Netzwerken, Materialvibrationen, dielektrische Eigenschaften, ferroelektrische Hysterese.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.04
- **Papierverbindung:** [Einheitliches differenzierbares Lernen der elektrischen Reaktion](https://go.hyper.ai/18TWg)

### **37. [Multi-Source-Datenintegrationsmethode zeigt 25 Arten von Zementklinker-Alternativen an, was der Verringerung von 1,2 Milliarden Tonnen Treibhausgasen entspricht](https://hyper.ai/news/40742)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/40742](https://hyper.ai/news/40742)
- **Forschungsteam:** Soroush Mahjoubi und Elsa A. Olivetti (MIT)
- **Verwandte Forschung:** LLM, multitaskige neuronale Netzwerke, Rahmenbedingungen für die Bewertung der Reaktivität.
- **Veröffentlichte Zeitschrift:** Mitteilungsmaterialien, 2025.05
- **Papierverbindung:** [Datenorientierte Materialüberprüfung sekundärer und natürlicher cementisierter Vorläufer](https://go.hyper.ai/ZOAaW)

### **38. [UNIMATE erzielt erstmals eine einheitliche Modellierung der Topologiegenerierung/Eigentumsvorhersage](https://hyper.ai/news/41186)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/41186](https://hyper.ai/news/41186)
- **Forschungsteam:** Virginia Tech, Meta AI
- **Verwandte Forschung:** Metamaterialien, 3D-Topologien, maschinelles Lernen, UNIMATE-Modell, mechanische Metamaterialien-Benchmarks.
- **Veröffentlichte Zeitschrift:** ICML 2025, 2025.06
- **Papierverbindung:** [UNIMATE: Ein einheitliches Modell für mechanische Metamaterialgenerierung, Eigentumsvorhersage und Zustandsbestätigung](https://go.hyper.ai/FoAWw)

### **39. [All-Atom-Diffusion Transformer-Framework ermöglicht die einheitliche Erzeugung von periodischen und aperiodischen Atomsystemen zum ersten Mal](https://hyper.ai/news/41503)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/41503](https://hyper.ai/news/41503)
- **Forschungsteam:** Meta FAIR, Universität Cambridge, MIT
- **Verwandte Forschung:** Transformatoren, MP20 Datensatz, QM9 Datensatz, GEOM-DRUGS Datensatz, QMOF Datensatz.
- **Veröffentlichte Zeitschrift:** ICML 2025, 2025.06
- **Papierverbindung:** [Vollatom-Diffusionstransformatoren: Einheitliche generative Modellierung von Molekülen und Materialien](https://go.hyper.ai/27d7U)

### **40. [Das FASTSOLV-Modell realisiert die Vorhersage der Löslichkeit kleiner Moleküle bei jeder Temperatur und beschleunigt die Ableitgeschwindigkeit um 50x](https://hyper.ai/news/43318)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/43318](https://hyper.ai/news/43318)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** Kleine Moleküllösungsvorhersage, BigSolDB Datensatz, SolProp Datensatz, Leeds Datensatz, FASTSOLV-Modell.
- **Veröffentlichte Zeitschrift:** Mitteilung über die Natur, 2025.08
- **Papierverbindung:** [Datenorientierte organische Lösungsfähigkeitsprognose an der Grenze der unsicheren Zustände](https://www.nature.com/articles/s41467-025-62717-7)

### **41. [Neue Methode auf Basis multimodaler Maschinenlernungsmodelle prognostiziert Materialeigenschaften ohne vollständige Kristallstrukturen](https://hyper.ai/news/43410)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/43410](https://hyper.ai/news/43410)
- **Forschungsteam:** Institut für Chemische Technik und angewandte Chemie der Universität Toronto
- **Verwandte Forschung:** Multimodal-Maschinellen Lernmodelle, Datensatz CoRE-2019, BW20K Datensatz, QMOF Datensatz, hMOF Datensatz.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.07
- **Papierverbindung:** [Verbindung der Metall-organischen Rahmen-Synthese mit Anwendungen mit multimodellem Maschinellen Lernen](https://www.nature.com/articles/s41467-025-62717-7)

### **42. [Das KI-Modell CGformer integriert innovativ globale Aufmerksamkeitsmechanismen und unterstützt die Forschung und Entwicklung von hochentropischen Materialien.](https://hyper.ai/news/44908)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/44908](https://hyper.ai/news/44908)
- **Forschungsteam:** Jinjin Li und Fuqiang Huangs Team im AIMS-Lab, SJTU
- **Verwandte Forschung:** Hochentropie-Materialien-F&E, KI-Materialdesignmodell CGformer, Natrium-Ionen-Diffusionsbarriere-Datensätze.
- **Veröffentlichte Zeitschrift:** Die Sache, 2025.08
- **Papierverbindung:** [CGformer: Transformator-verstärktes Kristall-Graph-Netzwerk mit globaler Aufmerksamkeit für die Property-Vorhersage von Materialien](https://www.cell.com/matter/abstract/S2590-2385(25)00423-0)

### **43. [Neue Methode zur Integration struktureller Zwangsbeschränkungen SCIGEN passt sich an jedes vorgebildete Diffusionsmodell an](https://hyper.ai/news/44973)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/44973](https://hyper.ai/news/44973)
- **Forschungsteam:** Das Team von Mingda Li am MIT, Michigan State University, Oak Ridge National Laboratory
- **Verwandte Forschung:** AL (Archimedesische Raster) Materialdatenbank, Diffusionsmodelle, Kristallstrukturgenerierung, DiffCSP-Modell.
- **Veröffentlichte Zeitschrift:** Naturmaterialien, 2025.09
- **Papierverbindung:** [Strukturelle Einschränkungsintegration in ein generatives Modell zur Entdeckung von Quantenmaterialien](https://www.nature.com/articles/s41563-025-02355-y)

### **44. [Das physisch informierte generative KI-Modell SpectroGen benötigt nur einen einzigen Modalitäten-Eingang, um eine kreuzmodelle Generation mit 99% experimenteller Korrelation zu erreichen](https://hyper.ai/news/45456)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/45456](https://hyper.ai/news/45456)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** SpectroGen, RRUFF-Datenbank, VAE-Framework, physikalische Vormodelle.
- **Veröffentlichte Zeitschrift:** Die Frage, 2025.10
- **Papierverbindung:** [SpectroGen: Eine physisch informierte generative künstliche Intelligenz zur beschleunigten Charakterisierung von intermodalitären Spektroskopischen Materialien](https://www.cell.com/matter/abstract/S2590-2385(25)00477-1)

### **45. [MOF-ChemUnity rekonstruiert das Panoramawissen des MOF und treibt die Materialentdeckung in die Ära der "Erklärbaren KI"](https://hyper.ai/news/46723)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/46723](https://hyper.ai/news/46723)
- **Forschungsteam:** Universität Toronto, Forschungszentrum für Clean Energy Innovation (NRC Kanada)
- **Verwandte Forschung:** Materialwissenschaft, MOF-ChemUnity, CORE MOF 2019 Datenbank, QMOF Datenbank, LLM, Graph-Augmented RAG.
- **Veröffentlichte Zeitschrift:** ACS-Veröffentlichungen, 2025.11
- **Papierverbindung:** [MOF-ChemUnity: Literatur-informatierte große Sprachmodelle für MetallOrganische Rahmenforschung](https://pubs.acs.org/doi/10.1021/jacs.5c11789)

### **46. [Leichtgewichtes universelles Potenzialmodell PET-MAD veröffentlicht, das eine spezielle Modellpräzision mit minimalen Proben erreicht](https://hyper.ai/news/47637)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/47637](https://hyper.ai/news/47637)
- **Forschungsteam:** EPFL
- **Verwandte Forschung:** Berechnungen von ersten Grundsätzen, maschinelles Lernen, Interatompotentiale, PET-MAD-Modell, Struktur des Point Edge Transformators.
- **Veröffentlichte Zeitschrift:** Naturkommunikation
- **Papierverbindung:** [PET-MAD als leichtgewichtiges universelles interatomisches Potenzial für die Modellierung fortschrittlicher Materialien](https://www.nature.com/articles/s41467-025-65662-7)

### **47. [KI-System Chemontologie veröffentlicht, die Reaktionswegsuchkosten halbiert durch die Integration chemischer Kenntnisse](https://hyper.ai/news/48069)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48069](https://hyper.ai/news/48069)
- **Forschungsteam:** Universität Hokkaido
- **Verwandte Forschung:** Potenzielle Energieoberfläche (PES), intrinsische Reaktionskoordinaten (IRC), durch künstliche Kraft bewirkte Reaktion (AFIR), Chemontologie.
- **Veröffentlichte Zeitschrift:** ACS-Katalyse
- **Papierverbindung:** [Chemontologie: Eine wiederverwendbare explizite chemische Ontologie-basierte Methode zur Beschleunigung der Reaktionswege](https://pubs.acs.org/doi/10.1021/acscatal.5c06298)

### **48. [Princeton und andere schlagen gemeinsam eine LLM-Methode zur Vorhersage von MOF-freier Energie vor, die die Machbarkeit der Synthese sehr genau bewertet.](https://hyper.ai/news/48685)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48685](https://hyper.ai/news/48685)
- **Forschungsteam:** Princeton Universität und Colorado School of Mines
- **Verwandte Forschung:** Metallorganische Rahmenwerke (MOFs), freie Energievorhersage, große Sprachmodelle (LLM), thermodynamische Bewertung.
- **Veröffentlichte Zeitschrift:** JACS (ACS-Publikationen)
- **Papierverbindung:** [Hochpräzise und schnelle Vorhersage von MOF-freier Energie durch maschinelles Lernen](https://pubs.acs.org/doi/10.1021/jacs.5c13960)

### **49. [Das Team der Yale Universität schlägt MOSAIC-Modell vor, das LLM koordiniert, um hochverlässliche chemische Synthese-Systeme zu erzeugen](https://hyper.ai/news/48806)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48806](https://hyper.ai/news/48806)
- **Forschungsteam:** Forschungsteam der Universität Yale
- **Verwandte Forschung:** Moderne synthetische Chemie, LLM, MOSAIC-Modell, Wissensstrukturisierung.
- **Veröffentlichte Zeitschrift:** Die Natur
- **Papierverbindung:** [Kollektive Intelligenz für KI-gestützte chemische Synthese](https://www.nature.com/articles/s41586-026-10131-4)

### **50. [MIT und andere schlagen DiffSyn als Diffusionsmodell vor, das eine generative Planung von Material-Synthese-Wegen ermöglicht.](https://hyper.ai/news/49252)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49252](https://hyper.ai/news/49252)
- **Forschungsteam:** MIT, die Technische Universität München und die Universitat Politècnica de València
- **Verwandte Forschung:** Material-Syntheseplanung, generatives Diffusionsmodell DiffSyn, Zeoliten.
- **Veröffentlichte Zeitschrift:** Naturrechnungswissenschaft
- **Papierverbindung:** [DiffSyn: ein generativer Diffusionsansatz zur Planung der Materialsynthese](https://www.nature.com/articles/s43588-025-00949-9)

### **51. [Die Universität von Michigan und Farasis Energy schlagen gemeinsam die Methode "Discovery Learning" vor, die die Akkulaufzeitvorhersagezyklen drastisch verkürzt](https://hyper.ai/news/49527)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49527](https://hyper.ai/news/49527)
- **Forschungsteam:** Prof. Ziyou Song an der Universität von Michigan, Ann Arbor, und das Team von Weiran Jiang bei Farasis Energy
- **Verwandte Forschung:** Batterie-Zyklus-Lebenszeitvorhersage, Entdeckungslernen (DL), wissenschaftliches Maschinenlernen, Lithium-Ionen-Taschenzellendatensatz.
- **Veröffentlichte Zeitschrift:** Die Natur
- **Papierverbindung:** [Discovery Learning prognostiziert die Lebensdauer der Batterie aus minimalen Experimenten](https://www.nature.com/articles/s41586-025-09951-7)

### **52. [Die Cornell University schlägt SCAN-Framework vor, das die Leistung von Batterienelektrolyten sehr genau voraussagt und erklärt](https://hyper.ai/news/49537)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49537](https://hyper.ai/news/49537)
- **Forschungsteam:** Forschungsteam der Cornell University
- **Verwandte Forschung:** Salzlösungschemie, nichtwasserfähige Elektrolyte (NAE), SCAN-Framework, Multi-Feature Network (MFNet), dynamische Routing-Strategie.
- **Veröffentlichte Zeitschrift:** Naturrechnungswissenschaft
- **Papierverbindung:** [Ein dynamischer interpretierbarer Rahmen für die Salz­Lösungsmittelchemie](https://www.nature.com/articles/s43588-026-00955-5)

### **53. [Das MIT schlägt ein grundlegendes großes DefectNet-Modell für die nichtzerstörende Charakterisierung und Quantifizierung von internen Materialfehlern vor](https://hyper.ai/news/50122)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50122](https://hyper.ai/news/50122)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** Materialwissenschaft, Defekttechnik, nicht zerstörerische Charakterisierung, Schwingungsspektren und Phonondichte der Staaten (PDoS), DefectNet, Machine Learning Interatomic Potentials (MLIPs).
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [Ein Grundmodell für die nichtzerstörende Identifizierung von Defekten durch Schwingungsspektren](https://arxiv.org/abs/2506.00725)

### **54. [Die Cornell Universität schlägt eine Multi-Agent-Plattform EMSeek vor, die eine automatische Analyse von Elektronenmikroskopiebildern in voller Pipeline ermöglicht](https://hyper.ai/news/50298)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50298](https://hyper.ai/news/50298)
- **Forschungsteam:** Forschungsteam der Cornell University
- **Verwandte Forschung:** Elektronenmikroskopie (EM), Multi-Agent-Plattform, EMSeek, Materialanalyse, Strukturmodellierung und Eigenschaftsnachweis.
- **Veröffentlichte Zeitschrift:** Wissenschaftliche Fortschritte
- **Papierverbindung:** [Überbrückende Elektronenmikroskopie und Materialanalyse mit einer autonomen agenten Plattform](https://www.science.org/doi/10.1126/sciadv.aed0583)

## **KI+ Zoologie-Botanik**

### **1. [Die SBeA analysiert das soziale Verhalten von Tieren auf der Grundlage eines Lernrahmens mit wenigen Schüssen](https://hyper.ai/news/29353)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29353](https://hyper.ai/news/29353)
- **Forschungsteam:** Das Forschungsteam von Pengfei Wei am Shenzhen Institut für Fortgeschrittene Technologien, CAS
- **Verwandte Forschung:** PAIR-R24M Datensatz, zweiseitiges Transferlernen, unüberwachtes Lernen, künstliche Neuronennetzwerke, Identitätserkennungsmodelle.
- **Veröffentlichte Zeitschrift:** Naturmaschinenintelligenz, 2024.01
- **Papierverbindung:** [Mehrtierliche 3D-Soziale Posen-Schätzung, Identifizierung und Verhaltensintegration mit einem Lernrahmen mit wenigen Schüssen](https://www.nature.com/articles/s42256-023-00776-5)

### **2. [Die auf Siamesischen Netzwerken basierende Deep Learning-Methode erfasst automatisch embryonelle Entwicklungsprozesse](https://hyper.ai/news/28419)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28787](https://hyper.ai/news/28419)
- **Forschungsteam:** Systembiologe Patrick Müller und das Forschungsteam der Universität Konstanz
- **Verwandte Forschung:** ImageNet Datensatz, siamesische Netzwerke, Deep Learning, Transfer Learning, Triplets-Loss-Training, iterative Training, Subtask-Training. Identifiziert Schlüsselphasen der embryonalen Entwicklung ohne menschliches Eingreifen.
- **Veröffentlichte Zeitschrift:** Naturmethoden, 2023.11
- **Papierverbindung:** [Entdeckung der Entwicklungszeit und des Tempo durch Deep Learning](https://www.nature.com/articles/s41592-023-02083-8)

### **3. [Systematische Pipeline zur Erfassung von Pflanzenphänotypendaten über Drohnen zur Vorhersage optimaler Erntezeitpunkte](https://hyper.ai/news/28303)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28303](https://hyper.ai/news/28303)
- **Forschungsteam:** Forschungsteams der Universität Tokio und der Universität Chiba
- **Verwandte Forschung:** Profit-Vorhersage-Modelle, Segmentierungsmodelle, interaktive Anmerkung, LabelMe, nichtlineare Regressionsmodelle, BiSeNet-Modell.
- **Veröffentlichte Zeitschrift:** Pflanzenphänomik, 2023.09
- **Papierverbindung:** [Drones-basierte Ernte-Daten Vorhersagen können den Nahrungsmittelverlust auf dem Bauernhof reduzieren und das Einkommen der Bauern verbessern](https://spj.science.org/doi/10.34133/plantphenomics.0086#body-ref-B4)

### **4. [KI-Kamera-Alarmsystem unterscheidet Tiger genau von anderen Arten](https://hyper.ai/news/27954)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/27954](https://hyper.ai/news/27954)
- **Forschungsteam:** Forschungsteam der Universität Clemson
- **Verwandte Forschung:** TrailGuard AI überträgt relevante Bilder an die Geräte der Reservierungsmanager innerhalb einer Minute.
- **Veröffentlichte Zeitschrift:** Biowissenschaft, 2023.09
- **Papierverbindung:** [Genaue Vorhersage der Wirkung der Protom-weiten Missense-Variante mit AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492) (Hinweis: Der ursprüngliche Link scheint nicht mit dem Titel übereinstimmen, bleibt aber auf der Grundlage des Quelltextes).

### **5. [Die Verwendung von Labrador-Retriever-Daten und der Vergleich von 3 Modellen zeigt Verhaltensmerkmale, die die Leistung von Detektionshunden beeinflussen](https://hyper.ai/news/25472)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/25472](https://hyper.ai/news/25472)
- **Forschungsteam:** Abigail Wexner Forschungsinstitut am Nationwide Children's Hospital und der Rocky Vista University
- **Verwandte Forschung:** AT-Tests, Env-Tests, Random Forest, Support Vector Machines, Logistikregression, PCA, RFECV.
- **Veröffentlichte Zeitschrift:** Wissenschaftliche Berichte, 2023.08
- **Papierverbindung:** [Vorhersage und Klassifizierung der Verhaltenswahl in einem Hundegeruchsdetektionsprogramm durch maschinelles Lernen](https://www.nature.com/articles/s41598-023-39112-7)

### **6. [Bilderkennungsmodell für mehrere Arten, basierend auf ArcFace-Klassifizierung Kopf für die Gesichtserkennung](https://hyper.ai/news/25164)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/25164](https://hyper.ai/news/25164)
- **Forschungsteam:** Forschungsteam der Universität Hawaii
- **Verwandte Forschung:** [Datensatz für Wale](https://github.com/knshnb/kaggle-happywhale-1st-place), Bildschneidungsmodelle, Bilderkennungsmodelle, YOLOv5, Detic. Erlangte eine durchschnittliche Genauigkeit von 0,869.
- **Veröffentlichte Zeitschrift:** Methoden in Ökologie und Evolution, 2023.07
- **Papierverbindung:** [Ein Deep Learning-Ansatz zur Fotoidentifizierung zeigt hohe Leistungsfähigkeit bei zwei Dutzend Waltierarten](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14167)

### **7. [Überwachung der Blüte von Kirschblumen in Japan mit Python-API und Computer-Vision-API](https://hyper.ai/news/24512)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/24512](https://hyper.ai/news/24512)
- **Forschungsteam:** Forschungsteam der Monash University (Australien)
- **Verwandte Forschung:** Daten von Social Network Site (SNS), Google Cloud Vision AI, Modelle für maschinelles Lernen.
- **Veröffentlichte Zeitschrift:** Flora, 2023.07
- **Papierverbindung:** [Die Raum-Zeit-Signatur von Kirschblüten, die überall in Japan blühen, wurde durch Analyse von Bildern auf sozialen Netzwerken offenbart](https://www.sciencedirect.com/science/article/abs/pii/S0367253023001019)

### **8. [Maschinelles Lernen-basierte Populationsgenetik-Methode enthüllt den Entstehungsprozess von Trauben-Aromen](https://hyper.ai/news/24442)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/24442](https://hyper.ai/news/24442)
- **Forschungsteam:** Das Institut für Agrargenomik in Shenzhen, CAS
- **Verwandte Forschung:** [Genome-Sequenzen von Weinbergen](https://github.com/zhouyflab/Grapevine_Adaptive_Maladaptive_Introgression), maschinelles Lernen.
- **Veröffentlichte Zeitschrift:** Die Ergebnisse der Nationalen Akademie der Wissenschaften, 2023.06
- **Papierverbindung:** [Anpassungs- und nicht anpassungsfähige Introgression bei der Trauben domestiziert](https://www.pnas.org/doi/abs/10.1073/pnas.2222041120)

### **9. [Überprüfung: Bioinformatikerforschung mit KI effizienter freizuschalten](https://hyper.ai/news/33931)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33931](https://hyper.ai/news/33931)
- **Hauptinhalt:** KI hat zahlreiche Anwendungsfälle in biologischen Bereichen wie Homologie-Suche, Multiple-Sequenz-Ausrichtung, phylogenetische Konstruktion, Genom-Sequenz-Analyse und Genentdeckung. Für biologische Forscher wird die begabte Integration von Machine Learning-Tools in die Datenanalyse zweifellos wissenschaftliche Entdeckungen beschleunigen und die Forschungseffizienz verbessern.

### **10. [Das BirdFlow-Modell prognostiziert die Flugwege von Zugvögeln genau](https://hyper.ai/news/34781)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33942](https://hyper.ai/news/33942)
- **Forschungsteam:** UMass Amherst, Cornell Universität
- **Verwandte Forschung:** Computermodellierung, eBird Datensatz, Markov-Modelle, Hyperparameter-Gittersuche, Entropy-Kalibrierung, K-Wochenprognose.
- **Veröffentlichte Zeitschrift:** Methoden in Ökologie und Evolution, 2023.01
- **Papierverbindung:** [BirdFlow: Lernen von saisonalen Vogelbewegungen aus eBird-Daten](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14052)

### **11. [Neues Wal-Bioacoustics-Modell identifiziert 8 Walearten](https://hyper.ai/news/34781)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34781](https://hyper.ai/news/34781)
- **Forschungsteam:** Google-Forschungsteam
- **Verwandte Forschung:** Mel-Skala-Frequenzsachsen, komprimierte Zählamplitude, unabhängige Invokation über TensorFlow's SavedModel API, konvolutionäre Neural Networks, Klassifizierungsmodelle für die Erkennung von Humpback-Whale-Aufrufen, interaktives Visualisierungswerkzeug "Pattern Radio". Das Modell ist speziell für Blaue und Fingwalen konzipiert und kann 8 verschiedene Arten von 94 bekannten Walarten identifizieren.
- **Veröffentlichte Zeitschrift:** Google Research, 2024.09
- **Papierverbindung:** [Pfeifeln, Lieder, Boings und Biotwangs: Whale-Vokalizationen mit KI erkennen](https://research.google/blog/whistles-songs-boings-and-biotwangs-recognizing-whale-vocalizations-with-ai)

### **12. [Das maschinelle Lernen isoliert das Spitzewal-Phonetikalphabet, das der menschlichen Sprache sehr ähnlich ist und eine stärkere Informationstragungskapazität besitzt](https://hyper.ai/news/33433)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33433](https://hyper.ai/news/33433)
- **Forschungsteam:** Pratyusha Sharma (MIT) und das Projekt CETI Team
- **Verwandte Forschung:** DSWP Datensatz, maschinelles Lernen, das die strukturelle Natur von Spermienwallesvokalizationen offenbart.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2024.05
- **Papierverbindung:** [Kontextuelle und kombinierte Strukturen bei Spermienwalen-Vokalisierungen](https://www.nature.com/articles/s41467-024-47221-8)

### **13. [Das PlantLncBoost-Modell erreicht eine Genauigkeit von bis zu 96% bei der interspezialen lncRNA-Vorhersage](https://hyper.ai/news/40667)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/40667](https://hyper.ai/news/40667)
- **Forschungsteam:** Technologieuniversität Shandong, Hochschule für Forstwirtschaft Peking, Guangdong Akademie für Agrarwissenschaften, Universität São Paulo, Rosalind Franklin Universität für Medizin und Wissenschaft, Universität Umeå
- **Verwandte Forschung:** GreeNC-Datenbank, PlantLncBoost-Algorithmus, Random Forest Importance (RFI) -Strategie, Recursive Feature Elimination (RFE) -Algorithmus.
- **Veröffentlichte Zeitschrift:** Neuer Phytologe, 2024.05
- **Papierverbindung:** [PlantLncBoost: Schlüsselmerkmale für die Identifizierung von Pflanzen lncRNA und signifikante Verbesserung der Genauigkeit und Verallgemeinerung](https://go.hyper.ai/F7pkc)

### **14. [Perch 2.0 umfasst fast 15.000 Arten, die SOTA in der biologischen Klassifizierung aufzeigen](https://hyper.ai/news/42807)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42807](https://hyper.ai/news/42807)
- **Forschungsteam:** Google DeepMind, Google Research
- **Verwandte Forschung:** Bioacoustics, Perch 2.0, Xeno-Canto Datensatz, iNaturalist Datensatz, Tierstimmenarchiv Datensatz, FSD50K Datensatz, EfficientNet-B3 Architektur.
- **Veröffentlichte Zeitschrift:** ArXiv, 2025.08
- **Papierverbindung:** [Perch 2.0: Die bittere Lektion für Bioacoustics](https://arxiv.org/abs/2508.04665)

## **KI+ Landwirtschaft-Waldwirtschaft-Tierzucht**

### **1. [Verwendung von Konvolutionen-Neuralnetzen zur schnellen und genauen Schätzung der Reiserdaten](https://hyper.ai/news/26100)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/26100](https://hyper.ai/news/26100)
- **Forschungsteam:** Forschungsteam der Universität Kyoto
- **Verwandte Forschung:** Das CNN-Modell kann Feldfotos aus verschiedenen Schießwinkeln, Zeiten und Perioden genau analysieren und so stabile Ergebnisvorhersagen erzielen.
- **Veröffentlichte Zeitschrift:** Pflanzenphänomik, 2023.07
- **Papierverbindung:** [Deep Learning ermöglicht eine sofortige und vielseitige Schätzung der Reisproduktivität mit Bodenbasierten RGB-Bildern](https://spj.science.org/doi/10.34133/plantphenomics.0073)

### **2. [Modell, das über YOLOv5-Algorithmusmonitore für Säugestellung und Schweinchengeburt entwickelt wurde](https://hyper.ai/news/25131)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/25131](https://hyper.ai/news/25131)
- **Forschungsteam:** Forschungsteam der Landwirtschaftsuniversität Nanjing
- **Verwandte Forschung:** YOLOv5, Modelle, die die Schweinehaltung und die Schweinefleischstellung erkennen, können mit einer Gesamtdurchschnittlichgenauigkeit von 92,9% 5 Stunden vor Beginn der Weichpflanzung Warnungen ausstellen.
- **Veröffentlichte Zeitschrift:** Sensoren, 2023.01
- **Papierverbindung:** [Pflanzenpflanzen Frühwarnung und Überwachung von eingebetteten Board-Implementierungen](https://www.mdpi.com/1424-8220/23/2/727)

### **3. [Die Kombination von Laborbeobachtungen und Maschinelles Lernen, um zu beweisen, dass Ultraschallgeräusche, die von gestressten Tomaten- und Tabakpflanzen emittiert werden, in der Luft reisen können](https://hyper.ai/news/24547)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/24547](https://hyper.ai/news/24547)
- **Forschungsteam:** Forschungsteam der Universität Tel Aviv (Israel)
- **Verwandte Forschung:** Modelle für maschinelles Lernen, SVM, Basic, MFCC, Scattering-Netzwerk, Neuralnetzwerkmodelle, Verlassen-One-Out-Kreuzvalidierung. Die Anerkennungsgenauigkeit erreichte 99,7%; Tomatenschreien erreichten ihren Höhepunkt an Tagen 4-6
- **Veröffentlichte Zeitschrift:** Zelle, 2023.03
- **Papierverbindung:** [Geräusche, die von Pflanzen unter Druck emittiert werden, sind in der Luft und informieren](https://doi.org/10.1016/j.cell.2023.03.009)

### **4. [Drone + KI-Bildanalyse erkennt Schädlinge im Wald](https://hyper.ai/news/23807)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/23807](https://hyper.ai/news/23807)
- **Forschungsteam:** Forschungsteam der Universität Lissabon
- **Verwandte Forschung:** FRCNN, YOLO-Modelle. Das YOLO-Modell zeigte eine höhere Erkennungsleistung als das FRCNN. Die Kombination aus Drohnen und KI-Modellen kann die frühe Erkennung von Pinienprozessionsmuthennesten effektiv ermöglichen.
- **Veröffentlichte Zeitschrift:** Neobiota, 2023.05
- **Papierverbindung:** [Erprobung der frühzeitigen Erkennung von Pinienprozessionsmuttern Thaumetopoea pityocampa-Nest mit UAV-basierten Methoden](https://neobiota.pensoft.net/article/95692/)

### **5. [Computervision + Deep Learning entwickelt für ein Milchkühe-Lähmheitsdetektionssystem](https://hyper.ai/news/33957)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33957](https://hyper.ai/news/33957)
- **Forschungsteam:** Forschungsteam der Universität Newcastle und der Firma Fera Science Ltd.
- **Verwandte Forschung:** Computer Vision, Deep Learning, Mask-RCNN Algorithmen, SORT Algorithmen, CatBoost Algorithmen. Die Genauigkeit erreichte 94%-100%.
- **Veröffentlichte Zeitschrift:** Natur, Jahr 2023.03
- **Papierverbindung:** [Schätzung der tiefen Lernposen für die Erkennung von Lähmungen bei mehreren Rinder](https://www.nature.com/articles/s41598-023-31297-1)

## **AI+ Meteorologie**

### **1. [Überprüfung: Datenbasierte Modelle für die Wettervorhersage durch maschinelles Lernen](https://hyper.ai/news/28124)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28124](https://hyper.ai/news/28124)
- **Hauptinhalt:** Die numerische Wettervorhersage (NWP) ist die Mainstream-Methode zur Wettervorhersage. Sie löst den Zustand des Erdsystems auf Grid-by-Grid-Basis durch numerische Integration, die ein Prozess der deduktiven Vernunft ist. Seit 2022 haben Maschinenlernungsmodelle in der Wettervorhersage eine Reihe von Durchbrüchen erzielt, von denen einige mit den hochpräzisen Vorhersagen des Europäischen Zentrums für mittlere Wettervorhersagen (ECMWF) übereinstimmen.

### **2. [Überprüfung: Erhebung von Daten aus Hagelstürmenzentren und Vorhersage von extremen Wetter mit Hilfe großer Modelle](https://hyper.ai/news/25874)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/25874](https://hyper.ai/news/25874)
- **Hauptinhalt:** Im Jahr 2021 entwickelten die Alibaba DAMO Academy und das National Meteorological Center gemeinsam einen AI-Algorithmus für Wettervorhersagen, der mehrere schwerwiegende konvektive Wetterereignisse erfolgreich vorhergesagt hat. Im September desselben Jahres veröffentlichte DeepMind ein Papier in *Die Natur* die Verwendung von tiefen generativen Modellen zur Echtzeit-Niederschlagprognose.
Anfang 2023 startete DeepMind offiziell GraphCast, das das globale Wetter für die nächsten 10 Tage mit einer Auflösung von 0,25 ° innerhalb einer Minute prognostizieren kann. Im April arbeitete die Nanjing University of Information Science and Technology mit dem Shanghai AI Laboratory zusammen, um das meteorologische große Modell "FengWu" zu entwickeln, das im Vergleich zu GraphCast Fehler weiter reduziert.
Im Anschluss brachte Huawei das große Modell "Pangu-Weather" auf den Markt. Durch die Einführung eines 3D-Neuralnetzes übertraf Pangu die Präzision der Vorhersagen erstmals die genauesten NWP-Vorhersagen.

### **3. [Erstellung neuer Algorithmen zur präzisen Vorhersage von extremen Niederschlägen mit Hilfe globaler Sturmlösungssimulationen und maschinellem Lernen](https://hyper.ai/news/24995)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/24995](https://hyper.ai/news/24995)
- **Forschungsteam:** LEAP Lab an der Columbia University
- **Verwandte Forschung:** Maschinelles Lernen, Baseline-NN, Org-NN, neuronale Netzwerke.
- **Veröffentlichte Zeitschrift:** PNAS, 2023.03
- **Papierverbindung:** [Das implizite Lernen der konvektiven Organisation erklärt die Niederschlagestochastizität .](https://www.pnas.org/doi/10.1073/pnas.2216158120)

### **4. [Random Forest-basiertes Maschinenlernungsmodell CSU-MLP prognostiziert mittlere Strenge Wetter](https://hyper.ai/news/33966)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33966](https://hyper.ai/news/33966)
- **Forschungsteam:** Colorado State University und NOAA
- **Verwandte Forschung:** GEFS/R Datensatz, maschinelles Lernen, Interpolationsverarbeitung, RF. Kann starkes Wetter im mittleren Bereich (4-8 Tage) genau vorhersagen.
- **Veröffentlichte Zeitschrift:** Wetter und Vorhersage, 2022.08
- **Papierverbindung:** [Ein neues Paradigma für mittlere, schwere Wettervorhersagen: probabilistic random forest-based predictions](https://arxiv.org/abs/2208.02383)

### **5. [End-to-End-Daten-getriebene Wettervorhersage-System Aardvark Wetter beschleunigt die Vorhersagen um Dutzende von Mal im Vergleich zu traditionellen Methoden](https://hyper.ai/news/38605)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38605](https://hyper.ai/news/38605)
- **Forschungsteam:** Cambridge University, Das Alan Turing Institute, Universität Toronto, Microsoft Research, ECMWF, British Antarctic Survey, Google DeepMind
- **Verwandte Forschung:** Wetterprognosesysteme, HadISD-Datensätze, kollaborative Mikrowellen-Infrarot-Beobachtungsnetze, ATOVS-Systeme, ASCAT-Scatterometerdaten, ERA5-Wiederanalyse-Datensätze, leichte Konvolutionsnetze.
- **Veröffentlichte Zeitschrift:** Natur, 2025.03
- **Papierverbindung:** [End-to-end-datenbasierte Wettervorhersage](https://www.nature.com/articles/s41586-025-08897-0)

### **6. [Maschinelles Wettervorhersagenssystem FCN3 unterstützt ultra-schnelle Ein-GPU-Förderung](https://hyper.ai/news/42456)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42456](https://hyper.ai/news/42456)
- **Forschungsteam:** NVIDIA, Lawrence Berkeley National Laboratory (LBNL), UC Berkeley, Caltech
- **Verwandte Forschung:** Numerische Wettervorhersage, FourCastNet 3, maschinelles Lernen, ERA5 Datensatz, sphärischer neuronaler Operatorentwurf, hybride Parallelstrategien.
- **Veröffentlichte Zeitschrift:** ArXiv, 2025.07
- **Papierverbindung:** [FourCastNet 3: Ein geometrischer Ansatz zur probabilistic-machine-learning-Wettervorhersage in Skala](https://arxiv.org/pdf/2507.12144)

### **7. [Das indische Monsoon-Vorhersage-Modell basierend auf 36 Wetterstationen erzielt eine gute Vorhersage im Stadtbereich](https://hyper.ai/news/44271)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/44271](https://hyper.ai/news/44271)
- **Forschungsteam:** IIT Bombay, Universität von Maryland
- **Verwandte Forschung:** Konvolutionäre Neuralnetzwerke (CNN), Transfer Learning (CNN-TL), Wettervorhersage, Ereignis-Synchronisierungsmethoden, Regenfallvorhersage.
- **Veröffentlichte Zeitschrift:** SSRN, 2025.08
- **Papierverbindung:** [Vorhersagen über Hyperlokalen Extreme Regenfälle in Mumbai: Konvolutionäre Neuralnetzwerktransfer-Lern-basierte Downscaling-Ansatz](https://go.hyper.ai/j05Vt)

### **8. [ACE2 hat in nur 2 Minuten eine 4-monatige Saisonprognose abgeschlossen.](https://hyper.ai/news/44473)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/44473](https://hyper.ai/news/44473)
- **Forschungsteam:** Met Office Hadley Centre, Universität von Exeter, Allen Institute for AI (Ai2)
- **Verwandte Forschung:** Jahreszeitprognosen, ERA5-Wiederanalyse-Datensatz, Global Precipitation Climatology Project (GPCP) v2.3-Datensatz, ACE2-Maschinelles Lernen-Atmosphäremodell.
- **Veröffentlichte Zeitschrift:** npj Klima- und Atmosphärenausbildung, 2025.08
- **Papierverbindung:** [Geschickliche weltweite Jahreszeitvorhersagen aus einem Wettermodell, das durch maschinelles Lernen auf Daten der Neuanalyse ausgerichtet ist](https://go.hyper.ai/YyRfT)

### **9. [Ein zunehmendes Wettervorhersage-Modell VA-MoE wurde veröffentlicht, das die SOTA-Leistung mit einer Parameterreduzierung von 75% erreicht.](https://hyper.ai/news/45152)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/45152](https://hyper.ai/news/45152)
- **Forschungsteam:** HKUST, Zhejiang Universität und andere
- **Verwandte Forschung:** Inkrementelle Wettervorhersage, VA-MoE, ERA5-Datensatz, zweistufiges Trainingsparadigma, Transformator, mehrtägige Gelenkverlustmechanismen, meteorologische Vorhersage.
- **Veröffentlichte Zeitschrift:** ICCV25, 2025.07
- **Papierverbindung:** [VA-MoE: Variable-Adaptive Mischung von Experten für die zunehmende Wettervorhersage](https://arxiv.org/abs/2412.02503)

### **10. [Ein erleuchtetes Rolldiffusionsmodell (ERDM) wurde veröffentlicht, das langfristige Prognoseprobleme löst und bei mittelfristigen und langfristigen Prognosen eine Führung über die EDM-Basislinien aufrechterhält](https://hyper.ai/news/45367)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/45367](https://hyper.ai/news/45367)
- **Forschungsteam:** NVIDIA
- **Verwandte Forschung:** Wettervorhersage mit mittlerer Reichweite, progressive Geräuschplanung, Eluzierte Diffusionsmodelle (EDM), Eluzierte Rolling Diffusion Modelle (ERDM), Navier-Stokes Fluiddynamik-Benchmarkdatensatz, ERA5-Wiederanalysedatensatz, Geräuschplanungsmechanismen, Wahrscheinlichkeitsfluss gewöhnliche Differenzgleichungen (ODE), Kennzeichnungsnetze.
- **Veröffentlichte Zeitschrift:** NeurIPS 2025, 2025.06
- **Papierverbindung:** [Erleuchtete Rollende Diffusionsmodelle für die Wahrscheinlichkeit des Wettervorhersagens](https://doi.org/10.48550/arXiv.2506.20024)

### **11. [Neues latente Diffusionsmodell OmniCast veröffentlicht, die Fehlerankumulation in autoregressiven Wetterprognosemodellen löst](https://hyper.ai/news/45701)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/45701](https://hyper.ai/news/45701)
- **Forschungsteam:** UCLA Team, Argonne National Laboratory
- **Verwandte Forschung:** Neues latente Diffusionsmodell OmniCast, hochpräzise probabilistic S2S-Wettervorhersage, Variation Autoencoders (VAE), Transformatormodelle, gemeinsame Raum-Zeit-Probeverfahren, ERA5-Grundlagendatensatz, WeatherBench2 (WB2) Testsatz, ChaosBench Testsatz, UNet-Architektur.
- **Veröffentlichte Zeitschrift:** NeurIPS 2025, 2025.10
- **Papierverbindung:** [OmniCast: Ein maskiertes Latent-Diffusion-Modell für Wettervorhersagen über Zeitskalien hinweg](https://go.hyper.ai/YANIu)

### **12. [NVIDIA schlägt eine neuartige Destillationsmethode für Langstrecken vor, die die Engpässe der KI bei der langfristigen Wettervorhersage durchbringt](https://hyper.ai/news/48471)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48471](https://hyper.ai/news/48471)
- **Forschungsteam:** NVIDIA Research, Universität von Washington
- **Verwandte Forschung:** AI-Wettervorhersage-Modelle, autoregressive Architekturen, Saison-zu-Saison (S2S) -Vorhersage, Langstreckendestillation.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [Langfristige Destillation: 10.000 Jahre simuliertes Klima in Langzeitmodelle mit KI-Weathermodellen destillieren](https://arxiv.org/abs/2512.22814)

### **13. [Gemeinsames Team schlägt das Modell des Graph Neural Network SeaCast vor, das ultra-schnelle regionale Ozeanvorhersagen ermöglicht](https://hyper.ai/news/49553)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49553](https://hyper.ai/news/49553)
- **Forschungsteam:** Universität Helsinki, Euro-Mittelmeer-Zentrum für Klimawandel (CMCC), Universität Salento
- **Verwandte Forschung:** Regionaler Ozeanprognose, Graph Neural Networks (GNN), SeaCast-Modell, Mittelmeerprognose-System (MedFS), atmosphärische Zwangsfelder.
- **Veröffentlichte Zeitschrift:** Wissenschaftliche Berichte
- **Papierverbindung:** [Genaue Vorhersagen über das Grafik-basierte Deep Learning über das Mittelmeer](https://www.nature.com/articles/s41598-025-31177-w)

## **KI+ Astronomie**

### **1. [Der PRIMO-Algorithmus lernt die Regeln der Lichtverbreitung um Schwarze Löcher herum , um schärfere Schwarze Löcherbilder zu rekonstruieren .](https://hyper.ai/news/23698)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/23698](https://hyper.ai/news/23698)
- **Forschungsteam:** Institut für fortgeschrittene Studien (Princeton)
- **Verwandte Forschung:** PRIMO-Algorithmus, PCA, GRMHD, PRIMO hat das Bild des Schwarzen Lochs rekonstruiert.
- **Veröffentlichte Zeitschrift:** Das Astrophysik-Journal Letters, 2023.04
- **Papierverbindung:** [Das Bild des mit PRIMO rekonstruierten Schwarzen Löchens M87](https://iopscience.iop.org/article/10.3847/2041-8213/acc32d/pdf)

### **2. [Ausbildung von Computervisionalgorithmen mit simulierten Daten zur Vertiefung und "wiederherstellung" astronomischer Bilder](https://hyper.ai/news/33975)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33975](https://hyper.ai/news/33975)
- **Forschungsteam:** Tsinghua Universität und Northwestern Universität
- **Verwandte Forschung:** [GalSim](https://github.com/GalSim-developers/GalSim), [COSMOS](https://doi.org/10.5281/zenodo.3242143), Computer-Vision-Algorithmen, CNNs, Richardson-Lucy-Algorithmus, ungerollte ADMM-Neuralnetzwerke.
- **Veröffentlichte Zeitschrift:** Monatliche Mitteilungen der Royal Astronomical Society, 2023.06
- **Papierverbindung:** [Galaxie-Bilddeconvolution für schwache Gravitationslenzen mit freiem Plug-and-Play-ADMM](https://www.nature.com/articles/s41421-023-00543-1)

### **3. [Einsatz eines unüberwachten Machine Learning-Algorithmus Astronomie, um zuvor übersehenen Anomalien zu finden](https://hyper.ai/news/26316)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/26316](https://hyper.ai/news/26316)
- **Forschungsteam:** Forscher an der Universität des Westkaps (UWC)
- **Verwandte Forschung:** CNN, unüberwachtes maschinelles Lernen, Astronomie, PCA, Isolation Forest, LOF-Algorithmus, iForest-Algorithmus, NS-Algorithmus, DR-Algorithmus. Astronomie fand 1.635 Anomalien aus den 2.000 Bildern mit den höchsten Anomalien.
- **Veröffentlichte Zeitschrift:** ArXiv, 2023.09
- **Papierverbindung:** [Astronomie auf Skala: Nach Anomalien unter 4 Millionen Galaxien suchen](https://arxiv.org/abs/2309.08660)

### **4. [Maschinelles Lernen basierende Methode zur CME-Identifizierung und Parametergewinnung](https://hyper.ai/news/31870)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31870](https://hyper.ai/news/31870)
- **Forschungsteam:** Staats-Schlüssellabor für Weltraumwetter, National Space Science Center, CAS
- **Verwandte Forschung:** Maschinelles Lernen, neuronale Netzwerke, Otsu-Algorithmus, Trajektorie-Matching-Algorithmen, automatisierte Identifizierung, Parameter-Extraktion, CACTus, CORIMP, SEEDS.
- **Veröffentlichte Zeitschrift:** Das Astrophysikalische JURNAL, 2024.04
- **Papierverbindung:** [Ein Algorithmus zur Bestimmung der kinematischen Parameter der Koronalmasse-Ausstoßung auf der Grundlage des Maschinellen Lernens](https://iopscience.iop.org/article/10.3847/1538-4365/ad2dea)

### **5. [Deep Learning entdeckt 107 Fälle von neutralen Kohlenstoff-Absorptionslinien](https://hyper.ai/news/32210)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32210](https://hyper.ai/news/32210)
- **Forschungsteam:** Internationales Team unter der Leitung von Wissenschaftler Jian Ge am Shanghai Astronomischen Observatorium, CAS
- **Verwandte Forschung:** Deep Learning-Methoden, SDSS DR12, Convolutional Neural Network-Modelle. Entdeckt 107 Fälle von neutralen Atom-Kohlenstoff-Absorbern im frühen Universum, mit einer Detektionspräzision von 99,8%.
- **Veröffentlichte Zeitschrift:** MNRAS, 2024.05
- **Papierverbindung:** [Erkennung seltener neutraler Atomkohlenstoffabsorber mit einem tiefen neuronalen Netzwerk](https://doi.org/10.1093/mnras/stae799)

### **6. [StarFusion-Modell erreicht hohe räumliche Auflösung Bildvorhersage](https://hyper.ai/news/34254)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34254](https://hyper.ai/news/34254)
- **Forschungsteam:** Jin Chen-Team am Staatlichen Schlüssellabor für Erdoberflächenprozesse und Ressourcenökologie, BNU
- **Verwandte Forschung:** Deep-Learning-Methoden, Fernerkundungsbilder, hohe räumliche Auflösung-Bildvorhersage, vorgeschlagenes Dual-Stream-Space-Temporal-Dekoppel-Fusions-Architekturmodell StarFusion, Gaofen-1-Datensätze, Sentinel-2-Satelliten-Datensätze, SRGAN-STF-Modell, lineare Regressionsmodelle, multivariate Regressionsmodelle.
- **Veröffentlichte Zeitschrift:** Das Journal of Remote Sensing, 2024.07
- **Papierverbindung:** [Eine hybride Raumzeit-Fusionsmethode für hohe räumliche Auflösung Bilder: Fusion von Gaofen-1 und Sentinel-2 über landwirtschaftliche Landschaften](https://spj.science.org/doi/10.34133/remotesensing.0159)

### **7. [Satellitenbildgenerierungsmethode auf Basis von SD3 entwickelt, um den bisher größten Datensatz für Fernerkennung, EcoMapper, zu konstruieren](https://hyper.ai/news/41041)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/41041](https://hyper.ai/news/41041)
- **Forschungsteam:** Technische Universität München, Universität Zürich
- **Verwandte Forschung:** Fernerkennungsdatensatz EcoMapper, Stable Diffusion 3, DiffusionSat, Mehrbedingte Bildgenerierung, Satellitenbildgenerierung.
- **Veröffentlichte Zeitschrift:** ICML 2025, 2024.06
- **Papierverbindung:** [EcoMapper: Generative Modellierung für Klimabewusste Satellitenbilder](https://go.hyper.ai/VFRWu)

### **8. [Geospatial AI Earth AI konzentriert sich auf 3 Kerndatenarten und verbessert die Fähigkeiten des geospatialen Denkens um 64%](https://hyper.ai/news/45528)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/45528](https://hyper.ai/news/45528)
- **Forschungsteam:** Google Research, Google X, Google Cloud
- **Verwandte Forschung:** Geospatial AI, RS-Landmarks Datensatz, RS-WebLI Datensatz, RS-Global Datensatz, Earth AI, Foundation Models (FMs), Large Language Models (LLM), Fernerkundungsgrundlagenmodelle, räumliche Ausrichtung + Repräsentationsintegration, geospatielle Denken.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.10
- **Papierverbindung:** [Earth AI: Geospatial-Insights mit Fundamentmodellen und Cross-Modal-Reasoning freizuschalten](https://doi.org/10.48550/arXiv.2510.18318)

### **9. [Das erste astronomische Multimodal-Fundamentmodell AION-1 ist geboren, vorgetraint auf 200 Millionen astronomischen Zielen](https://hyper.ai/news/46802)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/46802](https://hyper.ai/news/46802)
- **Forschungsteam:** UC Berkeley, Cambridge, Oxford und Teams von über 10 weltweiten Forschungseinrichtungen
- **Verwandte Forschung:** AION-1, multimodale kosmologische Datensätze, Tokenizationssysteme, Transformer-Encoder-Decoder-Struktur, ResNet-Struktur.
- **Veröffentlichte Zeitschrift:** NeurIPS 2025, 2025.10
- **Papierverbindung:** [AION-1: Umnimodal Stiftungsmodell für Astronomiewissenschaften](ttps://openreview.net/forum?id=6gJ2ZykQ5W)

### **10. [Die neuartige Daten-basierte Pipeline identifiziert genau 7 seltene Linsenproben von 810.000 Quasaren, die CNN nutzt.](https://hyper.ai/news/47240)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/47240](https://hyper.ai/news/47240)
- **Forschungsteam:** Stanford, SLAC National Accelerator Laboratory, Peking University, INAF - Brera Astronomical Observatory, UCL, UC Berkeley usw.
- **Verwandte Forschung:** Convolutional Neural Networks (CNN), DESI Datensätze, starke Gravitationslinsen, Quasare, Schwarzlöcherforschung, galaktische Koevolution, FastSpec Kataloge.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.10
- **Papierverbindung:** [Quasare, die als starke Linsen wirken, wurden in DESI DR1 gefunden](https://arxiv.org/abs/2511.02009)

### **11. [Das ESA-Team schlägt eine halbüberwachte Methode AnomalyMatch vor , um seltene Himmelskörper aus fast 100 Millionen Hubble-Dateien effizient zu untersuchen .](https://hyper.ai/news/49138)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49138](https://hyper.ai/news/49138)
- **Forschungsteam:** Europäische Raumfahrtzentrum (ESAC) im Rahmen der Europäischen Raumfahrtbehörde (ESA)
- **Verwandte Forschung:** Astrophysikalische Anomalien, halbüberwachte binäre Klassifizierung, aktives Lernen, AnomalyMatch, Hubble Legacy Archive.
- **Veröffentlichte Zeitschrift:** Astronomie und Astrophysik
- **Papierverbindung:** [Astrophysikalische Anomalien in 99,6 Millionen Quellenabschnitten aus dem Hubble-Archiv mit AnomalyMatch identifizieren](https://doi.org/10.1051/0004-6361/202555512)

### **12. [Die Universität Warwick schlägt die RAVEN-Pipeline vor, mit der 118 neue Exoplaneten bestätigt werden](https://hyper.ai/news/50073)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50073](https://hyper.ai/news/50073)
- **Forschungsteam:** Forschungsteam der Universität Warwick
- **Verwandte Forschung:** Exoplanet Validierung, Transiting Exoplanet Survey Satellite (TESS), RAVEN Pipeline, synthetische Trainingsdaten-Sets, falsch positive Eliminierung.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [RAVEN: Ranking und Validierung von Exoplaneten](https://arxiv.org/abs/2509.17645)

### **13. [Die Universität von Warwick schlägt ein Ensembel-Lernrahmen vor, um sehr genau asteroseismische Parameter für δ-Scuti-Sterne vorherzusagen](https://hyper.ai/news/50946)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50946](https://hyper.ai/news/50946)
- **Forschungsteam:** Forschungsteam der Universität Warwick
- **Verwandte Forschung:** δ Scuti-Sterne, Asteroseismologie, TESS-Lichtkurvendaten, Maschinenlernungs-Frameworks, große Frequenztrennung Δν.
- **Veröffentlichte Zeitschrift:** Das Astronomische Zeitschrift
- **Papierverbindung:** [Zusammenbau eines Machine Learning-Ansatzes zur Schätzung der Asteroseismischen Indizes für δ Scuti-Sterne, die von TESS beobachtet werden](https://beta.iopscience.iop.org/article/10.3847/1538-3881/ae4bd8)

### **14. [Spanisches Forscherteam schlägt das StreakMind-System vor, das KI nutzt, um Satellitenstreifen in astronomischen Bildern automatisch zu erkennen](https://hyper.ai/news/51385)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/51385](https://hyper.ai/news/51385)
- **Forschungsteam:** Das spanische Royal Naval Observatory (ROA) und andere Einrichtungen
- **Verwandte Forschung:** Entdeckung von Naher-Earth-Objekten (NEO), planetarische Verteidigung, astronomische Bildstrecken-Detection, StreakMind-System, YOLO11.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [StreakMind: KI-Detektion und Analyse von Satellitenstreifen in astronomischen Bildern mit automatisierter Datenbankintegration](https://hyper.ai/papers/2605.03429)

## **KI+ Naturkatastrophe**

### **1. [Maschinelles Lernen prognostiziert das Landverschwemmungsrisiko in den nächsten 40 Jahren](https://hyper.ai/news/30173)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30173](https://hyper.ai/news/30173)
- **Forschungsteam:** Das Forschungsteam von Jianxin Liu an der Central South University
- **Verwandte Forschung:** SAR-Datensätze, Modelle für maschinelles Lernen, XGBR, LSTM.
- **Veröffentlichte Zeitschrift:** Das Journal of Environmental Management, 2024.02
- **Papierverbindung:** [Techniken, die auf maschinellem Lernen basieren, für die Simulation der Landverschmutzung in einem städtischen Gebiet](https://www.sciencedirect.com/science/article/abs/pii/S0301479724000641?via%3Dihub)

### **2. [Semantisches Segmentierungsmodell SCDUNet++ für die Erdrutschkartierung](https://hyper.ai/news/29672)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29672](https://hyper.ai/news/29672)
- **Forschungsteam:** Das Forschungsteam von Rui Liu an der Technischen Universität Chengdu
- **Verwandte Forschung:** Sentinel-2-Multispectral-Daten, NASADEM-Daten, Erdrutschdaten, GLFE, CNN, DSSA, DSC, DTL, Transformer, Deep Transfer Learning. Die Schnittstelle über die Union (IoU) stieg um 1,91% - 24,42%, und F1 stieg um 1,26% - 18,54%.
- **Veröffentlichte Zeitschrift:** Internationale Zeitschrift für angewandte Erdbeobachtungen und Geoinformationen, 2024.01
- **Papierverbindung:** [Ein Deep Learning-System zur Vorhersage der Progression der diabetischen Retinopathie](https://www.nature.com/articles/s41591-023-02702-z) *(Hinweis: Linksunvereinbarkeit in der Quelle, wie sie vorhanden ist).*

### **3. [Neurale Netzwerke konvertieren 2D-Solarbilder in 3D-rekonstruierte Bilder](https://hyper.ai/news/28797)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28797](https://hyper.ai/news/28797)
- **Forschungsteam:** National Center for Atmospheric Research (NCAR)
- **Verwandte Forschung:** Neuronalnetzwerke, SuNeRF-Modell, enthüllten zum ersten Mal die Polen der Sonne.
- **Veröffentlichte Zeitschrift:** Arxiv, 2022.11
- **Papierverbindung:** [SuNeRF: Validierung einer 3D-Globalen Rekonstruktion der Solarkorona mit simulierten EUV-Bildern](https://arxiv.org/abs/2211.14879)

### **4. [Additive neuronale Netzwerke analysieren die Einflussfaktoren bei Naturkatastrophen](https://hyper.ai/news/24957)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/24957](https://hyper.ai/news/24957)
- **Forschungsteam:** Forschungsteam der UCLA
- **Verwandte Forschung:** Additive neuronale Netzwerke, halbautomatische Erkennungsalgorithmen, additive ANN, SNN, Funktionswahlmodelle, mehrstufiges Training.
- **Veröffentlichte Zeitschrift:** Kommunikation Erde und Umwelt, 2023.05
- **Papierverbindung:** [Modellierung der Erdrutschempfindlichkeit durch interpretierbares neuronales Netzwerk](https://www.nature.com/articles/s43247-023-00806-5)

### **5. [Verwenden Sie erklärbare KI, um verschiedene geografische Faktoren in Gippsland, Australien zu analysieren](https://hyper.ai/news/33994)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33994](https://hyper.ai/news/33994)
- **Forschungsteam:** Australian National University, Technologieuniversität Sydney
- **Verwandte Forschung:** Zufällige Waldmodelle, maschinelle Lernmodelle, Quervalidationstechniken. XAI kann Waldbrandvorfälle auf der Grundlage geografischer Merkmale effektiv vorhersagen.
- **Veröffentlichte Zeitschrift:** ScienceDirect, 2023.06
- **Papierverbindung:** [Erläuterbare künstliche Intelligenz (XAI) zur Interpretation der dazu beitragsenden Faktoren, die in das Modell zur Vorhersage der Waldbrandempfindlichkeit eingebunden werden](https://www.sciencedirect.com/science/article/pii/S0048969723016224)

### **6. [Modell der Hochwasservorhersage auf Basis von maschinellem Lernen](https://hyper.ai/news/31060)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31060](https://hyper.ai/news/31060)
- **Forschungsteam:** Google-Forschung
- **Verwandte Forschung:** Das Projekt HydroATLAS, LSTM-Netzwerke, Encoder-Decoders, Kreuzvalidation.
- **Veröffentlichte Zeitschrift:** Natur, Jahr 2024.03
- **Papierverbindung:** [Weltweite Vorhersage von extremen Überschwemmungen in ungeschützten Wassergebieten](https://www.nature.com/articles/s41586-024-07145-1)

### **7. [ED-DLSTM erreicht die Überschwemmungsvorhersage in nicht überwachten Gebieten](https://hyper.ai/news/32138)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32138](https://hyper.ai/news/32138)
- **Forschungsteam:** Das Team von Chaojun Ouyang am Institut für Bergegegefahren und Umwelt (IMHE), CAS
- **Verwandte Forschung:** Daten von 2.000 hydrologischen Stationen, Trainingsdaten-Sets aus den USA, Großbritannien, Zentraleuropa, Kanada, interregionale Raum-Zeit-Ansemble-Modelle, Encoder-Decoder, multimodal Daten, Daten über die Attribute des räumlichen statischen Raster, Restkonvulsionen.
- **Veröffentlichte Zeitschrift:** Die Innovation, 2024.04
- **Papierverbindung:** [Deep Learning für die weltweite Vorhersage von Strom- und Überschwemmungen zwischen den Regionen](https://doi.org/10.1016/j.xinn.2024.100617)

### **8. [Das ChloroFormer-Modell gibt eine Frühwarnung vor Meereseelblühen](https://hyper.ai/news/34544)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34544](https://hyper.ai/news/34544)
- **Forschungsteam:** GIS-Labor an der Universität Zhejiang
- **Verwandte Forschung:** TZ02 Datensatz, Deep Learning-Modell ChloroFormer, Transformer-Neuralnetzwerke, Frequenzfiltermechanismen, Frequenz-Aufmerksamkeitsmechanismen. ChloroFormer übertraf die Basislinien in kurz- und mittelfristigen Chlorophyll-a-Vorhersagen.
- **Veröffentlichte Zeitschrift:** Wasserforschung, 2024.10
- **Papierverbindung:** [Verbesserte Prognose der Chlorophyll-a-Konzentration in Küstengewässern durch Integration von Fourier-Analysen und Transformator-Netzwerken](https://doi.org/10.1016/j.watres.2024.122160 )

### **9. [Das erste marine große Sprachmodell OceanGPT wird von ACL 2024 akzeptiert! Unterwasser verkörperte KI wird Realität](https://hyper.ai/news/33044)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33044](https://hyper.ai/news/33044)
- **Forschungsteam:** Ningyu Zhang und Huajun Chen's Team, Hochschule für Informatik und Technologie der Universität Zhejiang
- **Verwandte Forschung:** Marine-Domain-LLMs, Regelmäßigkeitsdaten, Hash-Algorithmen, Marine-Wissenschafts-Instruktionsgenerationsrahmen DoInstruct, Multi-Agent-Kooperation, gpt-3.5-Turbo, BM25-Algorithmen, LLaMA-2, Vicuna-7b-1.5, verkörperte KI.
- **Veröffentlichte Zeitschrift:** ACL 2024, 2024.05
- **Papierverbindung:** [OceanGPT: Ein großes Sprachmodell für die Aufgaben der Meereswissenschaft](https://arxiv.org/abs/2310.02031)

### **10. [KI prognostiziert globale Erwärmungstrends](https://hyper.ai/news/36778)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36778](https://hyper.ai/news/36778)
- **Forschungsteam:** Gemeinsames Forschungsteam der Stanford University, der Colorado State University und der ETH Zürich
- **Verwandte Forschung:** AI CNN-Systeme, globale Klimamodelle, Transfer-Lernen, Vorhersagen von Bedingungen unter kontinuierlich steigenden Kohlenstoffemissionen, die Überprüfung der Genauigkeit von Vorhersage-Frameworks über verschiedene historische Perioden hinweg.
- **Veröffentlichte Zeitschrift:** Geophysikalische Forschungsbriefe, 2024.12
- **Papierverbindung:** [Datenbezogene Vorhersagen zur Erwärmung unter rascher Dekarbonisierung](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL111832)

### **11. [Neues GeoAI-Modell erklärt die Verteilung des Oberflächenwärmeflusses auf dem tibetischen Plateau](https://hyper.ai/news/36501)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36501](https://hyper.ai/news/36501)
- **Forschungsteam:** Hochschule für Erdwissenschaften der Universität Zhejiang
- **Verwandte Forschung:** Räumliche IntelligenzmethodenErklärbar verbessertes Modell für geographisch gewichtete Neuralnetzwerke (EI-GNNWR), Datensätze für Oberflächenwärmeflüsse, NGHF-Kontinentale Wärmeflüsse, Datensätze für chinesische Kontinentale Oberflächenwärmeflüsse, SHAP-Wertberechnungen, Extreme Gradient Boosting-Modelle, vollständig vernetzte neuronale Netzwerkmodelle, gewöhnliche Mindestquadrate, geographisch gewichtete Regressionsmodelle.
- **Veröffentlichte Zeitschrift:** Journal of Geophysical Research: Feste Erde, 2024.10
- **Papierverbindung:** [Die Verteilung des Oberflächenwärmeflusses auf dem tibetischen Plateau durch datenorientierte Methoden](https://doi.org/10.1029/2023JB028491)

### **12. ["WenHai" Meeresumwelt Intelligente Prognose Großmodell übertrifft numerische Meeresprognose](https://hyper.ai/news/38294)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38294](https://hyper.ai/news/38294)
- **Forschungsteam:** Forschungsteam unter der Leitung von Akademiker Lixin Wu im Laoshan Laboratory, OUC, USTC, Qingdao Guoshi Technology Group
- **Verwandte Forschung:** Meeresumweltprognosen, physische Ozeanographie, künstliche Intelligenz, die auf der Theorie der Meeresdynamik basierende Neuralnetzarchitekturgestaltung, die explizite Einbeziehung von Massenformeln in Neuralnetzwerke.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.03
- **Papierverbindung:** [Vorhersagen des Eddying-Ozeans mit einem tiefen neuronalen Netzwerk](https://www.nature.com/articles/s41467-025-57389-2)

### **13. [Die Universität von Minnesota schlägt ein wissensorientiertes Modell des maschinellen Lernens FHNN vor, das eine hochpräzise Hochwasservorhersage ermöglicht](https://hyper.ai/news/49992)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49992](https://hyper.ai/news/49992)
- **Forschungsteam:** Forschungsteam der Universität Minnesota Twin Cities
- **Verwandte Forschung:** Überschwemmungsvorhersage, Knowledge-Guided Machine Learning (KGML), Faktorisierte hierarchische Neuralnetzwerke (FHNN), Prozessbasierte Modelle (PBM), hydrologische Zyklen und Abflussvorhersage.
- **Veröffentlichte Zeitschrift:** Wasserressourcenforschung
- **Papierverbindung:** [Wissensgesteuertes Maschinelles Lernen für die operative Hochwasservorhersage](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024WR039064)

### **14. [Google veröffentlicht Version 2 seines weltweiten Hochwasserprognosesystems, das die gültigen Prognosezeiten erheblich verlängert](https://hyper.ai/news/51472)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/51472](https://hyper.ai/news/51472)
- **Forschungsteam:** Google-Forschung
- **Verwandte Forschung:** Hochwasservorhersage, hydrologische Simulation, maschinelles Lernen, hydrologische Modelle, Global Flood Forecasting Model v2, Google Runoff Reanalysis and Re-Prognoses (GRRR) Datensatz.
- **Veröffentlichte Zeitschrift:** EGusphäre
- **Papierverbindung:** [Verlängerung der weltweiten Hochwasservorhersagen mit mittlerer Reichweite: Google Global Flood Forecasting Model Version 2](https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2283/)

## **Andere**

### **1. [TacticAI Fußballassistent erreicht 90% praktische Nützlichkeit in taktischen Layouts](https://hyper.ai/news/30454)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30454](https://hyper.ai/news/30454)
- **Forschungsteam:** Google DeepMind und Liverpool FC
- **Verwandte Forschung:** Geometrisches Deep Learning, GNN, Prognosemodelle, generative Modelle. Erhöhung der Schießmöglichkeiten um 13%.
- **Veröffentlichte Zeitschrift:** Natur, Jahr 2024.03
- **Papierverbindung:** [TacticAI: Ein KI-Assistent für Fußballtaktik](https://www.nature.com/articles/s41467-024-45965-x)

### **2. [Das diffusionale Modell SPDiff ermöglicht die Simulation der Massenbewegung auf langer Reichweite](https://hyper.ai/news/30069)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30069](https://hyper.ai/news/30069)
- **Forschungsteam:** Zentrum für städtische Wissenschaft und Rechnungen (EE Dept, Tsinghua), Shenzhen Key Laboratory of Ubiquitous Data Enabling (Tsinghua SIGS), Peng Cheng Laboratory
- **Verwandte Forschung:** GC-Datensatz, UCY-Datensatz, bedingte Diffusionsmodelle, SPDiff, GN, EGCL, LSTM, Multi-Frame-Rollout-Training-Algorithmen.
- **Veröffentlichte Zeitschrift:** Natur, 2024.02
- **Papierverbindung:** [Soziale Physik informiertes Diffusionsmodell für Massensimulationen](https://arxiv.org/abs/2402.06680)

### **3. [Intelligente wissenschaftliche Einrichtungen führen zu Paradigmenwechseln in der Forschung](https://hyper.ai/news/29570)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29570](https://hyper.ai/news/29570)
- **Forschungsteam:** Das Forschungsteam von Hong Mei an der Shanghai Jiao Tong University
- **Verwandte Forschung:** Wissenschaftliche große Modelle, generative Simulation und Inversion, autonome intelligente unbemannte Experimente, groß angelegte vertrauenswürdige wissenschaftliche Zusammenarbeit, KI-Forschungsassistenten.
- **Veröffentlichte Zeitschrift:** Bulletin der Chinesischen Akademie der Wissenschaften, 2023.12
- **Papierverbindung:** [KI für Wissenschaft: Intelligente wissenschaftliche Einrichtungen revolutionieren grundlegende Forschung](http://www.bulletin.cas.cn/previewFile?id=52965146&type=pdf&lang=zh)

### **4. [DeepSymNet stellt symbolische Ausdrücke dar, die auf beaufsichtigtem Lernen basieren](https://hyper.ai/news/29243)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29243](https://hyper.ai/news/29243)
- **Forschungsteam:** Das Forschungsteam von Min Wu am Institut für Halbleiter, CAS
- **Verwandte Forschung:** [Symbolische Netzwerkdatensätze](https://hyper.ai/datasets/29321)Das System verwendet kürzere Kennzeichnungen, reduziert den Suchanlauf für Vorhersagen und verbessert die Robustheit des Algorithmus.
- **Veröffentlichte Zeitschrift:** Zeitschriften und Zeitschriften, 2023.11
- **Papierverbindung:** [Die Entdeckung mathematischer Ausdrücke über DeepSymNet: Ein auf Klassifizierung basierender symbolischer Regressionsrahmen](https://ieeexplore.ieee.org/document/10327762)

### **5. [Das große Sprachmodell ChipNeMo unterstützt Ingenieure bei der Entwicklung von Chips](https://hyper.ai/news/29134)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29134](https://hyper.ai/news/29134)
- **Forschungsteam:** NVIDIA Forschungsteam
- **Verwandte Forschung:** Domain-Anpassungstechniken, NVIDIA NeMo, domain-adaptierte Retrieval-Modelle, RAG, beaufsichtigte Feintuning mit domain-spezifischen Anweisungen, DAPT, SFT, Tevatron, LLMs.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.04
- **Papierverbindung:** [ChipNeMo: Domain-Adapted LLMs für Chip Design](https://arxiv.org/abs/2311.00176)

### **6. [AlphaGeometry kann Geometrie-Probleme lösen](https://hyper.ai/news/29059)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/29059](https://hyper.ai/news/29059)
- **Forschungsteam:** Google DeepMind Forschungsteam
- **Verwandte Forschung:** Neurale Sprachmodelle, symbolische Abzugmaschinen, Sprachmodelle.
- **Veröffentlichte Zeitschrift:** Natur, 2024.01
- **Papierverbindung:** [Die Geometrie der Olympischen Spiele ohne menschliche Demonstrationen zu lösen](https://www.nature.com/articles/s41586-023-06747-5)

### **7. [Verstärkungslernen für die Stadtplanung](https://hyper.ai/news/28917)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28917](https://hyper.ai/news/28917)
- **Forschungsteam:** Das Forschungsteam von Yong Li an der Tsinghua Universität
- **Verwandte Forschung:** Die Kommission hat die Kommission in ihrem Bericht über die Entwicklung der Umweltpolitik und die Entwicklung der Umwelt in der Europäischen Union (EFRA) unterbreitet.
- **Veröffentlichte Zeitschrift:** Naturrechnungswissenschaft, 2023.09
- **Papierverbindung:** [Raumordnung von städtischen Gemeinden durch tiefgreifendes Verstärken](https://www.nature.com/articles/s43588-023-00503-5)

### **8. [ChatArena-Framework: Werwolf mit großen Sprachmodellen spielen](https://hyper.ai/news/28576)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28576](https://hyper.ai/news/28576)
- **Forschungsteam:** Peng Li's Forschungsteam an der Tsinghua Universität
- **Verwandte Forschung:** Nichtparametrische Lernmechanismen, Sprachmodelle, Anfragen.
- **Veröffentlichte Zeitschrift:** Arxiv, 2023.09
- **Papierverbindung:** [Große Sprachmodelle für Kommunikationsspiele erforschen: Eine empirische Studie über den Werwolf](https://arxiv.org/pdf/2309.04658.pdf)

### **9. [Überprüfung: 30 Wissenschaftler veröffentlichen in Nature eine 10-jährige Retrospektive, die dekonstruiert, wie KI wissenschaftliche Paradigmen umgestaltet](https://hyper.ai/news/28166)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28166](https://hyper.ai/news/28166)
- **Hauptinhalt:** Postdoc Hanchen Wang von Stanford Computer Science and Genetics, zusammen mit Tianfan Fu von Georgia Tech CSE, Yuanqi Du von Cornell CS und 27 anderen, überprüften die Rolle der KI in der grundlegenden wissenschaftlichen Forschung im vergangenen Jahrzehnt und beschrieben anhaltende Herausforderungen und Mängel.
- **Papierverbindung:** [Wissenschaftliche Entdeckungen im Zeitalter der künstlichen Intelligenz](https://www.nature.com/articles/s41586-023-06221-2)

### **10. [Ithaca hilft Epigraphen bei der Wiederherstellung von Texten, der chronologischen Aufzeichnung und der geografischen Aufzeichnung](https://hyper.ai/news/28140)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28140](https://hyper.ai/news/28140)
- **Forschungsteam:** DeepMind und Ca' Foscari Universität von Venedig
- **Verwandte Forschung:** I.PHI Datensatz, Ithaca-Modell, Kullback-Leibler-Divergenz, Kreuzentropie-Verlust-Funktionen. Textwiederherstellung Genauigkeit erreichte 62%, chronologischer Zugehörigkeitsfehler innerhalb von 30 Jahren, und geografische Zugehörigkeit Genauigkeit erreichte 71%.
- **Veröffentlichte Zeitschrift:** Natur, Jahr 2020.03
- **Papierverbindung:** [Wiederherstellung und Zuteilung alter Texte mit Hilfe von tiefen neuronalen Netzwerken](https://www.nature.com/articles/s41586-022-04448-z)

### **11. [KI in vorwärts- und umgekehrten Problemen der Metoptik, Datenanalyse auf Basis von Metasurface-Systemen](https://hyper.ai/news/34006)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34006](https://hyper.ai/news/34006)
- **Forschungsteam:** Stadtuniversität von Hong Kong
- **Verwandte Forschung:** Vorhersagen von NNs, tiefen neuronalen Netzwerken, Präzision überschritten 99%.
- **Veröffentlichte Zeitschrift:** ACS-Publikationen, 2022.06
- **Papierverbindung:** [Künstliche Intelligenz in der Metaoptik](https://pubs.acs.org/doi/10.1021/acs.chemrev.2c00012)

### **12. [Eine neue geopazielle künstliche Intelligenz-Methode: Geographisch Neural Network Gewichtete logistische Regression](https://hyper.ai/news/30608)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30608](https://hyper.ai/news/30608)
- **Forschungsteam:** Zhenhong Du's Forschungsteam an der Zhejiang University
- **Verwandte Forschung:** Räumliche Muster, neuronale Netzwerke, Shapley Additive Explanations (SHAP), inverse Abstandsgewichtung Interpolation, binäre Querschnittsentropieverlustfunktionen, 5-fache Querschnittsvalidierung.
- **Veröffentlichte Zeitschrift:** Internationale Zeitschrift für angewandte Erdbeobachtungen und Geoinformationen, 2024.04
- **Papierverbindung:** [Verbesserung der Mineralperspektivitätskartifizierung mit georganischer künstlicher Intelligenz: Ein geografisch neuronalen Netzwerkgewichteter logistischer Regressionsansatz](https://doi.org/10.1016/j.jag.2024.103746)

### **13. [Die Verwendung von Diffusionsmodellen zur Erzeugung von Parametern des neuronalen Netzwerks, die das Raumzeit-Lernen mit wenigen Schüssen in ein Diffusionsmodell-Prä-Training-Problem verwandeln](https://hyper.ai/news/30545)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/30545](https://hyper.ai/news/30545)
- **Forschungsteam:** Yong Li's Forschungsteam am Zentrum für Stadtwissenschaft und Rechen, EE-Abteilung, Tsinghua University
- **Verwandte Forschung:** Intelligente Städte, Raum- und Zeitdaten, Wissensübertragung, MetaLA, PEMS-BAy, Transformator-Diffusionsmodelle, bedingte Generationsrahmen GPD, neuronale Netzwerke, Parameter von neuronalen Netzwerken, Vor-Training + prompt-Tuning.
- **Veröffentlichte Zeitschrift:** ICLR 2024, 2024.01
- **Papierverbindung:** [Spatio-Temporal Few-Shot-Lernen über Diffusive Neural Network Generation](https://openreview.net/forum?id=QyFm3D3Tzi)

### **14. [Neueste Einblicke in AI4S aus Fei-Fei Li's Team: 16 innovative Technologien zusammenfassend, die Biologie/Materialien/Gesundheitswesen/Diagnose abdecken](https://hyper.ai/news/31499)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/31499](https://hyper.ai/news/31499)
- **Hauptinhalt:** Stanford's HAI veröffentlichte den "2024 AI Index Report", der die globalen AI-Entwicklungstrends im Jahr 2023 umfassend verfolgt. Es untersuchte auch den tiefgreifenden Einfluss von AI in Wissenschaft und Medizin und unterstrich die brillanten AI-Errungenschaften in der Wissenschaft und bahnbrechenden medizinischen Innovationen wie SynthSR und ImmunoSEIRA im Jahr 2023. Darüber hinaus analysierte es die Trends der FDA in der Zulassung von KI-Medizingeräten und liefert wertvolle Referenzen für die Branche.

### **15. [Genaue Vorhersage der Wohnpreise in Wuhan! das osp-GNNWR-Modell beschreibt komplexe räumliche Prozesse und geografische Phänomene genau](https://hyper.ai/news/32453)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32453](https://hyper.ai/news/32453)
- **Forschungsteam:** Das Team von Sensen Wu im GIS Lab der Zhejiang University
- **Verwandte Forschung:** Neurale Netzwerke, Optimierung der räumlichen Nähe, geographisch gewichtete Regressionsmethoden für Neurale Netzwerke, Datensatz von 968 Immobilienproben von Anjuke, räumliche Regressionsmodelle, Algorithmen für Gradient-Abstieg.
- **Veröffentlichte Zeitschrift:** Internationale Zeitschrift für Geographische Informationswissenschaften, 2024.04
- **Papierverbindung:** [Ein neuronales Netzwerkmodell zur Optimierung der Messung der räumlichen Nähe im geografisch gewichteten Regressionsansatz: eine Fallstudie zum Hauspreis in Wuhan](https://www.tandfonline.com/doi/abs/10.1080/13658816.2024.2343771)

### **16. [Einführung von Null-Shot-Lernen, um ein bedingtes Diffusionsmodell freizusetzen, das für die Entschlüsselung von Orakel-Knochenschriften optimiert ist](https://hyper.ai/news/33010)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33010](https://hyper.ai/news/33010)
- **Forschungsteam:** Xiang Bai und Yuliang Lius Team an der HUST, gemeinsam mit der Universität Adelaide, der Anyang Normal University, SCUT
- **Verwandte Forschung:** Bedingte Diffusionsmodelle, Bildgenerierungstechniken, lokale analytische Probenahmetechniken, HUST-OBS Datensatz, EVOBC Datensatz, ResNet-101 Rückgrat, OCR-Technologie, Null-Shot-Lernstrategien, Stil-Encoder, Inhalts-Encoder.
- **Veröffentlichte Zeitschrift:** ACL 2024, 2024.06
- **Papierverbindung:** [Oracle-Knochensprache mit Diffusionsmodellen zu entschlüsseln](https://doi.org/10.48550/arXiv.2406.00684)

### **17. [Stanford/Apple und 23 andere Institutionen veröffentlichen den DCLM-Benchmark; das Fundamentmodell funktioniert gleichzeitig mit Llama3 8B](https://hyper.ai/news/33001)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33001](https://hyper.ai/news/33001)
- **Forschungsteam:** Gemeinsame Bemühungen von UW, Stanford, Apple und 20 anderen Institutionen
- **Verwandte Forschung:** Sprachmodelle, DCLM-Benchmark, Transformatoren, MMLU.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.06
- **Papierverbindung:** [DataComp-LM: Auf der Suche nach der nächsten Generation von Schulungen für Sprachmodelle](https://arxiv.org/abs/2406.11794)

### **18. [PoCo löst das Dilemma der Heterogenität der Datenquellen und ermöglicht es Robotern, mehrere Aufgaben flexibel auszuführen](https://hyper.ai/news/32765)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/32765](https://hyper.ai/news/32765)
- **Forschungsteam:** MIT-Forscher
- **Verwandte Forschung:** Verweigerung der Diffusionsvermutungsmodelle (DDPM), Verweigerung der impliziten Diffusionsmodelle (DDIM), vermutungsmäßige Zusammensetzung von Diffusionsmodellen, Roboterpolitik-Komposition-Rahmenwerk PoCo.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.05
- **Papierverbindung:** [PoCo: Politische Zusammensetzung von und für heterogenes Roboterlernen](https://arxiv.org/abs/2402.02511)

### **19. [Mit 140.000 Bildern hilft der Team beim Gewinnen des ACL-Bestspielers.](https://hyper.ai/news/33826)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33826](https://hyper.ai/news/33826)
- **Forschungsteam:** Prof. Xiang Bais Forschungsteam an der HUST
- **Verwandte Forschung:** HUST-OBC Datensatz, unüberwachte visuelle Kontrastmodelle für das Lernen.
- **Veröffentlichte Zeitschrift:** Wissenschaftliche Daten, 2024.06
- **Papierverbindung:** [Ein offener Datensatz zur Erkennung und Entschlüsselung von Orakel-Knochenschriften](https://arxiv.org/abs/2401.15365)

### **20. [GPT-2 schlägt ein Kanalvorhersage-System vor, das auf vorgebildeten LLMs basiert und die physische Schicht der drahtlosen Kommunikation ermöglicht.](https://hyper.ai/news/33195)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/33195](https://hyper.ai/news/33195)
- **Forschungsteam:** Xiang Cheng's Team an der Schule für Elektronik, Peking University
- **Verwandte Forschung:** QuaDRiGa-Simulatoren, Large Language Models (LLM), Kanalvorhersage-Neuralnetzwerke, Vorverarbeitungskombinationen, Einbettungsmodule, vorgebildete LLM-Module, Ausgangsmodule.
- **Veröffentlichte Zeitschrift:** Das Europäische Parlament und die Europäische Kommission
- **Papierverbindung:** [LLM4CP: Anpassung großer Sprachmodelle für Kanalvorhersagen](https://ieeexplore.ieee.org/document/10582829)

### **21. [Das erste Generative Adversarial Network-Modell für mehrerstichige Stickereien](https://hyper.ai/news/34669)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/34669](https://hyper.ai/news/34669)
- **Forschungsteam:** Visual Computing und Digital Textile Team, Schule für Informatik und KI, Wuhan Textile University
- **Verwandte Forschung:** Multi-Stich-Embroiderie-Datensätze, Generative Adversarial Networks (GANs), CNNs, Multi-Stich-Embroiderie-GAN-Modell MSEmbGAN, Region-bewusste Texturenerationsnetzwerke, Farbnetzwerke. Verbessert Texturrealismus und Farbtreue im Embroiderie.
- **Veröffentlichte Zeitschrift:** IEEE-Transaktionen zur Visualisierung und Computergrafik, 2024
- **Papierverbindung:** [MSEmbGAN: Multi-Stich-Embroidery-Synthese durch Region-Aware-Textur-Generation](https://csai.wtu.edu.cn/TVCG01/index.html)

### **22. [Fast Automated Scanning Toolkit (FAST) erwirbt effizient Probeninformationen](https://hyper.ai/news/28100)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/28100](https://hyper.ai/news/28100)
- **Forschungsteam:** Forschungsteam des Argonne National Laboratory
- **Verwandte Forschung:** SLADS-Net-Methoden, Pfadeoptimierungstechniken. Priorisiert heterogene Regionen und repliziert alle wichtigen Merkmale in Vollbildbildern genau.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2023.09
- **Papierverbindung:** [Demonstration eines KI-getriebenen Workflows für autonome Hochlösungs-Scanning-Mikroskopie](https://www.nature.com/articles/s41467-023-40339-1)

### **23. [Population Dynamics Foundation Modell PDFM Open-Source, präzise Vorhersage der Arbeitslosigkeit und Armut in den USA](https://hyper.ai/news/36380)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/36380](https://hyper.ai/news/36380)
- **Forschungsteam:** Google
- **Verwandte Forschung:** Population Dynamics Foundation Model, Vorhersage von Arbeitslosigkeit und Armut, entkoppelte Embedding-Architekturen, die Verwendung von PDFM zur Verbesserung des SOTA-Vorhersage-Grundlagensystems TimesFM, aggregierte Suchttrenddatenmengen, Kartendatenmengen, Datenmengen für Beschäftigung, Wetter- und Luftqualität, Fernerkundungsdaten, Graph Neural Networks (GNNs), die Verbesserung bestehender geospatialer Modelle.
- **Veröffentlichte Zeitschrift:** ArXiv, 2024.12
- **Papierverbindung:** [Allgemeine Geospatial-Inferenz mit dem Grundmodell der Bevölkerungsdynamik](https://arxiv.org/abs/2411.07207)

### **24. [Das Deep Learning-Modell CatGWR schätzt räumliche Nichtstationarität](https://hyper.ai/news/38055)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/38055](https://hyper.ai/news/38055)
- **Forschungsteam:** Zhejiang Provincial Key Laboratory of GIS
- **Verwandte Forschung:** Deep Learning-Modell Kontext-Aufmerksamkeit Geographisch gewichtete Regression, Aufmerksamkeitsmechanismen, Schätzung der räumlichen Nichtstationarität, CatGWR-Modell, Simulationsversuche, Vorverarbeitungsmodule, Zoom-In-Module, Regressionsmodule.
- **Veröffentlichte Zeitschrift:** Internationale Zeitschrift für Geographische Informationswissenschaften, 2025.02
- **Papierverbindung:** [Verwendung einer auf Aufmerksamkeit basierenden Architektur zur Einbeziehung von Kontextähnlichkeit in die räumliche Nichtstationaritätsschätzung](https://doi.org/10.1080/13658816.2025.2456556)

### **25. [Das weltweit erste VR-Übungsinterventionssystem REVERIE verändert die Gesundheit von Gehirn, Körper und Geist der Jugendlichen](https://hyper.ai/news/41266)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/41266](https://hyper.ai/news/41266)
- **Forschungsteam:** Das Team von Prof. Huating Li (Shanghai Sixth People's Hospital / Institute of Active Health), das Team von Prof. Bin Sheng (SJTU / MOE Key Lab of AI), das Team des Forschers Jihong Wang (Shanghai University of Sport), das Team von Prof. Rong Zeng (ShanghaiTech / Shanghai Clinical Research Center), das Team von Prof. Shuide Lin (NUS).
- **Verwandte Forschung:** Körperliche Bewegung, virtuelle Welt (Metaversum) VR-Sport, virtuelle Realität-Bewegungssystem REVERIE, Jugendliche übergewichtig, Transformer-Architekturen, iterative Benutzerinteraktionen.
- **Veröffentlichte Zeitschrift:** Naturmedizin, 2025.06
- **Papierverbindung:** [Adaptiver auf KI basierender virtueller Realität-Sportsystem für Jugendliche mit übergewichtigem Körpergewicht: eine randomisierte kontrollierte Studie](https://www.nature.com/articles/s41591-025-03724-5)

### **26. [Basierend auf mehr als 176 000 Inschriften erzielt Aeneas erstmals eine willkürliche Wiederherstellung alter römischer Inschriften.](https://hyper.ai/news/42141)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42141](https://hyper.ai/news/42141)
- **Forschungsteam:** Google DeepMind-Forscher, Universität Nottingham, Universität Warwick usw.
- **Verwandte Forschung:** Multimodal generatives neuronales Netzwerk Aeneas, Transformator-Decoderer, Datensätze für lateinische Inschriften, LED-Datensätze, Inschriftenwiederherstellung.
- **Veröffentlichte Zeitschrift:** Natur, 2025.07
- **Papierverbindung:** [Kontextualisierung alter Texte mit generativen neuronalen Netzwerken](https://www.nature.com/articles/s41586-025-09292-5)

### **27. [Panorama-Video-Generations-Framework PanoWan verwaltet auch Null-Shot-Videobearbeitung](https://hyper.ai/news/42205)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42205](https://hyper.ai/news/42205)
- **Forschungsteam:** Kamera-Intelligence Lab @ PKU (Boxin Shi's Team), OpenBayes
- **Verwandte Forschung:** Panorama-Video, PanoVid Panorama-Video-Datensatz, Null-Shot-Videobearbeitung, Breitengrößen-bewusste Probenahme, rotierende semantische Verkennung, Grenz-Padded-Pixel-Wise-Decoding.
- **Veröffentlichte Zeitschrift:** ArXiv, 2025.06
- **Papierverbindung:** [PanoWan: Lifting Diffusion Video Generation Modelle auf 360° mit Breitengrad/Längengrad-bewussten Mechanismen](https://arxiv.org/abs/2505.22016)

### **28. [YOLOv11-basiertes keramisches Klassifizierungs-Intelligentes Framework integriert visuelle Modellierung und Wirtschaftsanalyse, wodurch die Klassifizierung von Artefakten und die Wertschätzung erreicht werden](https://hyper.ai/news/42268)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/42268](https://hyper.ai/news/42268)
- **Forschungsteam:** Universität Putra Malaysia, UNSW Sydney
- **Verwandte Forschung:** Keramische Klassifizierung, CNNs, Transferlearning, Kapselnetzwerke, YOLOv11, Keramische Bilddatenmengen, Hybriddatenakquisitionsmethoden, Random Forest Regressionsmodelle.
- **Veröffentlichte Zeitschrift:** Nature Partner Journals, 2025.06
- **Papierverbindung:** [Integration von Deep Learning und Machine Learning für die Klassifizierung von Keramik-Artefakten und die Marktwertvorhersage](https://www.nature.com/articles/s40494-025-01886-6)

### **29. [Geborener Chip "Microwave Brain", der gleichzeitig mit einer Leistung von 176 milliwatt Daten und drahtlose Signale mit einer Genauigkeit von 75% verarbeitet](https://hyper.ai/news/43093)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/43093](https://hyper.ai/news/43093)
- **Forschungsteam:** Cornell Universität
- **Verwandte Forschung:** Hochbandbreite-Anwendungen, Mikrowellen-Neuralnetzwerke, lineare Regressionsmodelle, RadioML2016.10A Datensatz, Deep Learning, analoge Rechnungen.
- **Veröffentlichte Zeitschrift:** Naturelektronik, 2025.08
- **Papierverbindung:** [Ein integriertes Mikrowellennetz für Breitbandrechnungen und -kommunikation](https://go.hyper.ai/rMZ2K)

### **30. [Spatiotemporal Imputation und Vorhersage-Modell STIMP veröffentlicht, realisiert genaue Vorhersagen der Küsten Chlorophyll-a-Verteilung](https://hyper.ai/news/43613)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/43613](https://hyper.ai/news/43613)
- **Forschungsteam:** Forschungsteam der HKUST
- **Verwandte Forschung:** Chlorophyll-a Vorhersage, MODIS in-situ Chl-a Datensätze, Himawari Satelliten Fernerkundungsreflektierungsdatensätze, Deep Learning, STIMP-Architektur, Wasserkörpergesundheitsdiagnose.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.08
- **Papierverbindung:** [Raum-Zeit-Imputation und Vorhersage-Modell](https://go.hyper.ai/BjOR5)

### **31. [MIT und andere erreichen eine hochpräzise Vorhersage der Plasmadynamik unter wenigen Schussbedingungen auf der Grundlage von Maschinenlernen](https://hyper.ai/news/45260)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/45260](https://hyper.ai/news/45260)
- **Forschungsteam:** Forschungsteam unter der Leitung des MIT
- **Verwandte Forschung:** Tokamaks, Scientific Machine Learning (SciML), Neural State-Space Models (NSSM), Validierung der Robustheit der Kontroll-Fehler-Empfindlichkeit, Vorhersage-Erst-Extrapolationstests.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.10
- **Papierverbindung:** [Das Lernen der Plasmadynamik und robusten Rampdown-Trajektorien mit Vorhersage-ersten Experimenten bei TCV](https://www.nature.com/articles/s41467-025-63917-x)

### **32. [Reac-Discovery vereint mathematisches Modellieren, maschinelles Lernen und automatisierte Experimente, um die Herausforderung der Universalität von selbstfahrenden Laborsystemen zu lösen](https://hyper.ai/news/45626)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/45626](https://hyper.ai/news/45626)
- **Forschungsteam:** IMDEA Materialinstitut (Spanien)
- **Verwandte Forschung:** Selbstfahrende Laboratorien (SDL), Halbautonome digitale Plattformen von Reac-Discovery, geschlossene Systeme, die Design-/Fertigungs-/Optimierungsmodule integrieren, Echtzeit-NMR-Monitoring, ML-Prozessparameteroptimierung, topologische Beschreibungen, Strukturparameterisierungsdatenmengen, Druckdatensätze, Reaktionsleistungdatensätze.
- **Veröffentlichte Zeitschrift:** Naturkommunikation, 2025.10
- **Papierverbindung:** [Reac-Discovery: eine künstliche Intelligenz­gestützte Plattform für die Entdeckung und Optimierung von kontinuierlichen Katalysatoren](https://go.hyper.ai/ueB79)

### **33. [Der erste neuronalmodellierende Rahmen NOBLE, der durch menschliche Kortikaldaten validiert wurde, wird eingeführt.](https://hyper.ai/news/45806)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/45806](https://hyper.ai/news/45806)
- **Forschungsteam:** ETH Zürich, Caltech, Universität Alberta
- **Verwandte Forschung:** Deep Learning, Neuronspezifikationen, Strom-Injektions-Einbindung, NOBLE-Nuronsmodellierungs-Framework.
- **Veröffentlichte Zeitschrift:** NeurIPS 2025, 2025.09
- **Papierverbindung:** [NOBLE  Neural Operator mit biologisch informierten latenten Eingebettungen zur Erfassung experimenteller Variabilität in biologischen Neuronmodellen](https://go.hyper.ai/Ramfp)

### **34. [Bild-Geolokations-Framework LocDiff wird online, ermöglicht grid-freie und Referenzbibliothek-freie globale Präzisionsposition](https://hyper.ai/news/46687)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/46687](https://hyper.ai/news/46687)
- **Forschungsteam:** UMaine, UT Austin, UGA, UMD, Google, OpenAI, Harvard
- **Verwandte Forschung:** Spherical Harmonics Dirac-Verteilungen, LocDiff Ensemble-Framework, MP16 Datensatz, Im2GPS3k Datensatz, YFCC26k Datensatz, GWS15k Datensatz, Bedingte Siren-UNet (CS-UNet) Architektur, effiziente Rechenstrategien, SHDD-Codierungsscheme, Bildgeolokalisierung.
- **Veröffentlichte Zeitschrift:** NeurIPS 2025, 2025.10
- **Papierverbindung:** [LocDiff: Identifizierung von Orten auf der Erde durch Diffusion im Hilbert-Raum](https://openreview.net/forum?id=ghybX0Qlls)

### **35. [Maschinelles Lernen kombiniert mit py-GC-MS identifiziert präzise Beweise für Leben in Archeanischen Felsen](https://hyper.ai/news/47543)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/47543](https://hyper.ai/news/47543)
- **Forschungsteam:** Erd- und Planetenlabor an der Carnegie Institution for Science, zusammen mit mehreren globalen Institutionen
- **Verwandte Forschung:** Pyrolyse-Gaschromatographie-Massenspektrometrie (py-GC-MS), überwachtes Maschinelles Lernen.
- **Veröffentlichte Zeitschrift:** PNAS
- **Papierverbindung:** [Organische geochemische Beweise für das Leben in Archean-Gesteinen, die durch Pyrolyse GC MS und überwachtes Maschinelles Lernen identifiziert wurden](https://www.pnas.org/doi/10.1073/pnas.2514534122)

### **36. [Das Team der Tsinghua Universität schlägt die neuro-symbolische Regressionsmethode ND2 vor, um komplexe Netzwerkdynamikformeln automatisch abzuleiten](https://hyper.ai/news/47950)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/47950](https://hyper.ai/news/47950)
- **Forschungsteam:** Tsinghua Universität
- **Verwandte Forschung:** Netzwerkdynamik, symbolische Regression, ND2, Gleichungsableitung, wissenschaftliches Maschinelles Lernen.
- **Veröffentlichte Zeitschrift:** Naturkommunikation
- **Papierverbindung:** *(Verbindung auf das Archean-Gesteinpapier in Originalchinesisch, aber die Nummerierung und Referenzübersetzung wie vorgesehen)*

*(Hinweis: Die angegebene Quelle hatte eine doppelte Nummer 35 und 36 mit einer Verbindung zu PNAS-Archean-Gesteinen, während der TOC ND2 angegeben hatte.*

### **37. [Das Team der Universität Zhejiang schlägt eine geologisch begrenzte Methode zur Vorhersage der Mineralperspektivität vor, die ausdrücklich die Mineralisierung anisotropie darstellt.](https://hyper.ai/news/48396)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48396](https://hyper.ai/news/48396)
- **Forschungsteam:** Forschungsteam der Universität Zhejiang
- **Verwandte Forschung:** Mineral Prospectivity Mapping (MPM), anisotropische räumliche Nähe-Neuralnetzwerke, intelligente Prospecting.
- **Veröffentlichte Zeitschrift:** Geologie
- **Papierverbindung:** [Geologisch eingeschränkte datenorientierte Modellierung für die Mineral-Prospektivitätskartierung](https://go.hyper.ai/vbUpa)

### **38. [Tsinghua und die UChicago-Team veröffentlichen in Nature: KI-Tools erweitern die Wirkung der Wissenschaftler, aber konzentrieren sich auf die Wissenschaft](https://hyper.ai/news/48748)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48748](https://hyper.ai/news/48748)
- **Forschungsteam:** Gemeinsames Team der Tsinghua Universität und der Universität Chicago
- **Verwandte Forschung:** KI für Wissenschaft, Forschungsergebnis, wissenschaftliche Zitatmuster, Forschung Ökosysteme, Scientometrics.
- **Veröffentlichte Zeitschrift:** Die Natur
- **Papierverbindung:** [Künstliche Intelligenz-Tools erweitern die Wirkung von Wissenschaftlern, konzentrieren sich aber auf die](https://www.nature.com/articles/s41586-025-09922-y)

### **39. [UC-Team schlägt KI-geförderten Chip-Skala-Spektrometer vor, die hohe Spektral-Fidelität in einem ultra-kleinen Volumen zu erreichen](https://hyper.ai/news/48905)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/48905](https://hyper.ai/news/48905)
- **Forschungsteam:** Forschungsteam der Universität Kalifornien
- **Verwandte Forschung:** Chip-Skala-Spektrometer, Photon-Trapping-Surface Textures (PTST), vollvernetzte neuronale Netzwerke, hyperspektralische Bildgebung.
- **Veröffentlichte Zeitschrift:** Fortgeschrittene Photonik
- **Papierverbindung:** [KI-erweiterte Photon-Fang-Spektrometer auf einem Chip auf Siliziumplattform mit erweiterter Näherinfrarotempfindlichkeit](https://doi.org/10.1117/1.AP.8.1.016008)

### **40. [US DOE Oak Ridge National Lab schlägt die D-CHAG-Methode vor, die den Speicher-Fußabdruck für Multi-Kanal-Fundamentmodelle erheblich reduziert](https://hyper.ai/news/49330)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49330](https://hyper.ai/news/49330)
- **Forschungsteam:** Forscher am US DOE Oak Ridge National Laboratory
- **Verwandte Forschung:** Vision-Wissenschaftsgrundlagenmodelle, verteilte Querschannelhierarchische Aggregation (D-CHAG), Tensorparallelismus (TP), hierarchische Kanalaggregation.
- **Veröffentlichte Zeitschrift:** SC25
- **Papierverbindung:** [Verteilte hierarchische Aggregation über Kanäle für Stiftungsmodelle](https://dl.acm.org/doi/10.1145/3712285.3759870)

### **41. [Polymathic AI-Team schlägt das Continuum-Fundament-Modell Walrus vor, das Rekorde in der Cross-Domain-Simulationsleistung setzt](https://hyper.ai/news/49076)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49076](https://hyper.ai/news/49076)
- **Forschungsteam:** Polymathische KI-Kollaborationsforschungsteam
- **Verwandte Forschung:** Kontinuumdynamik, Physik-Simulationsgrundlagenmodelle, Walrus-Modell, adaptive Computational Tokenization.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [Walrus: Ein Cross-Domain-Fundament-Modell für die Kontinuumdynamik](https://arxiv.org/abs/2511.15684)

### **42. [EPFL schlägt eine neue Architektur vor DYNAMI-CAL GraphNet, ein physikalisch fundiertes GNN, das die Multi-Body-Dynamik genau modelliert](https://hyper.ai/news/49808)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/49808](https://hyper.ai/news/49808)
- **Forschungsteam:** EPFL-Forschungsteam
- **Verwandte Forschung:** Physikbasierte GNN, dynamische Systeme mit mehreren Körpern, DYNAMI-CAL GraphNet, Erhaltung der linearen und winkelmäßigen Dynamik.
- **Veröffentlichte Zeitschrift:** Naturkommunikation
- **Papierverbindung:** [Ein physikalisch fundiertes Graphennetzwerk, das für dynamische Systeme die lineare und winkelmäßige Dynamik speichert](https://www.nature.com/articles/s41467-025-67802-5)

### **43. [MIT schlägt eine neuartige Methode Wave-Former vor, mit der eine hochpräzise 3D-Rekonstruktion vollständig verborgener Objekte erreicht wird](https://hyper.ai/news/50018)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50018](https://hyper.ai/news/50018)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** Computersicht, 3D-Rekonstruktion durch Verstopfung, mmWave-Sensing, Wave-Former, drahtlose Formvervollständigung.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [Wellenformator: 3D-Rekonstruktion durch Okklusion über drahtlose Formvervollständigung](https://arxiv.org/abs/2511.14152)

### **44. [MIT schlägt DRiffusion-Draft-and-Refine Parallel-Framework vor, um eine Verlustfreie Beschleunigung für die Diffusionsmodell-Inferenz zu realisieren](https://hyper.ai/news/50209)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50209](https://hyper.ai/news/50209)
- **Forschungsteam:** MIT-Forschungsteam
- **Verwandte Forschung:** Diffusionsmodelle, Ableitungsbeschleunigung, Parallelisierungstechniken, DRiffusion, Entwurf und Reinigung.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [DRiffusion: Der Entwurfs- und Raffinationsprozess parallelisiert Diffusionsmodelle leicht](https://arxiv.org/abs/2603.25872)

### **45. [Technion - Israel Institute of Technology schlägt Task Token vor, die Verhaltensgrundlagenmodelle flexibel an bestimmte Aufgaben anpassen lassen](https://hyper.ai/news/50788)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/50788](https://hyper.ai/news/50788)
- **Forschungsteam:** Technion-Forschungsteam
- **Verwandte Forschung:** Roboterkontrolle, Imitationslernen, Verhaltensgrundlage-Modelle (BFM), Task Token, Aufgabenspezifische Anpassung.
- **Veröffentlichte Konferenz:** ICLR 2026
- **Papierverbindung:** [Task Tokens: Ein flexibler Ansatz zur Anpassung von Verhaltensgrundlagenmodellen](https://hyper.ai/papers/2503.22886)

### **46. [MIT und andere schlagen EnergAIzer-Framework vor, um eine schnelle und genaue GPU-Power-Schätzung für KI-Workloads zu erreichen](https://hyper.ai/news/51038)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/51038](https://hyper.ai/news/51038)
- **Forschungsteam:** MIT und MIT-IBM Watson AI Lab
- **Verwandte Forschung:** GPU-Leistungsberechnung, KI-Arbeitsbelastung, Energieeffizienz des Rechenzentrums, EnergAIzer-Framework, Hardware-Performance-Profiling.
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [EnergAIzer: schnelle und genaue GPU-Power-Schätzungsanlage für KI-Arbeitslasten](https://arxiv.org/abs/2604.20105)

### **47. [Die UIUC schlägt ein heterogenes Agentenrahmen Eywa vor, das die Grenzen von sprachzentrierten großen Modellen durchbricht](https://hyper.ai/news/51222)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/51222](https://hyper.ai/news/51222)
- **Forschungsteam:** Forschungsteam der UIUC
- **Verwandte Forschung:** Agentische KI, heterogene Agent-Rahmenwerk Eywa, domain-spezifische Grundlagenmodelle, Multi-Agent-Systeme, große Sprachmodelle (LLM).
- **Veröffentlichte Zeitschrift:** ArXiv
- **Papierverbindung:** [Heterogene wissenschaftliche Stiftungsmodellkollaboration](https://hyper.ai/papers/2604.27351)

### **48. [Stanford University und andere verwenden LSTM-Surrogatmodelle, um eine 252x beschleunigte Simulation der nichtlinearen Optik zweiter Ordnung zu erreichen](https://hyper.ai/news/51410)**

- **Forschungsschwerpunkte:** [https://hyper.ai/news/51410](https://hyper.ai/news/51410)
- **Forschungsteam:** Stanford University, UCLA und das SLAC National Accelerator Laboratory
- **Verwandte Forschung:** Zweitrangige nichtlineare Optik, Summefrequenzgenerierung (SFG), Langzeit-Kurzzeitgedächtnisnetzwerke (LSTM), Ersatzmodell, Split-Step-Fourier-Methode (SSFM).
- **Veröffentlichte Zeitschrift:** Fortgeschrittene Photonik
- **Papierverbindung:** [Deep-Learning-gestützte Modellierung für nichtlineare Optik χ(2)](https://go.hyper.ai/5bLoA)
