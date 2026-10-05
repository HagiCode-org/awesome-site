# ИИ для науки
**RU** | [CN](README_CN.md)
- [**Предисловие**](#foreword)
- [**ИИ + биофармацевтика**](#ai-biopharmaceutical)
  - [**1. AdaDR превосходит множество методов ссылки в перепозиционировании лекарственных средств**](#1-adadr-outperforms-multiple-benchmark-methods-in-drug-repositioning)
  - [**2. IMN4NPD ускоряет дерепликацию обширных кластеров в молекулярных сетях, обеспечивая анонсации для самоцепочек и паров узлов**](#2-imn4npd-accelerates-the-dereplication-of-extensive-clusters-in-molecular-networks-providing-annotations-for-self-loops-and-paired-nodes)
  - [**3. Глубокая генерирующая модель MIDAS для мозаической интеграции одноклеточных многоомических данных**](#3-deep-generative-model-midas-for-mosaic-integration-of-single-cell-multi-omics-data)
  - [**4. ResGen: 3D молекулярная модель генерации на основе белковых карман**](#4-resgen-a-3d-molecular-generation-model-based-on-protein-pockets)
  - [**5. Большие модели + машинное обучение для высокоточного прогнозирования кинетических параметров ферментов**](#5-large-models--machine-learning-for-high-precision-prediction-of-enzyme-kinetic-parameters)
  - [**6. MIT использует глубокое обучение для открытия новых антибиотиков**](#6-mit-uses-deep-learning-to-discover-novel-antibiotics)
  - [**7. Нейронные сети дешифруют селективность соединения белка GPCR-G**](#7-neural-networks-decipher-gpcr-g-protein-coupling-selectivity)
  - [**8. Макформер макроциклизирует ациклический препарат федратиниб**](#8-macformer-macrocyclizes-the-acyclic-drug-fedratinib)
  - [**9. Регрессионная сеть + CGMD предсказывает свойства самособрания десятков миллиардов пептидов**](#9-regression-network--cgmd-predicts-self-assembly-properties-of-tens-of-billions-of-peptides)
  - [**10. Неконтролируемое обучение предсказывает 71 миллион мутаций генов**](#10-unsupervised-learning-predicts-71-million-gene-mutations)
  - [**11. Анализ запаха ИИ разработан на основе графических нейронных сетей (GNN)**](#11-odor-analysis-ai-developed-based-on-graph-neural-networks-gnn)
  - [**12. Скрининг нейронных сетей на графике для безопасных и высокоэффективных ингредиентов против старения**](#12-graph-neural-networks-screen-for-safe-and-highly-effective-anti-aging-ingredients)
  - [**13. Машинное обучение количественно анализирует количество и место высвобождения дофамина**](#13-machine-learning-quantitatively-analyzes-dopamine-release-amount-and-location)
  - [**14. Машинное обучение обнаруживает три антивозрастных препарата**](#14-machine-learning-discovers-three-anti-aging-drugs)
  - [**15. Экран глубокого обучения для новых антибиотиков, ингибирующих Acinetobacter baumannii**](#15-deep-learning-screens-for-novel-antibiotics-inhibiting-acinetobacter-baumannii)
  - [**16. Модели машинного обучения, применяемые для прогнозирования типографии биоинков**](#16-machine-learning-models-applied-to-predict-bioink-printability)
  - [**17. Машинное обучение отличает плюрипотентные стволовые клетки**](#17-machine-learning-differentiates-pluripotent-stem-cells)
  - [**18. Машинное обучение модели предсказывает скорость выделения лекарств длительное действие инъекционных препаратов**](#18-machine-learning-model-predicts-drug-release-rate-of-long-acting-injectables)
  - [**19. Алгоритм машинного обучения эффективно предсказывает противомалярийные свойства растений**](#19-machine-learning-algorithm-effectively-predicts-plant-antimalarial-properties)
  - [**20. Метод машинного обучения предсказывает иммуногенность вирусных фрагментов белка**](#20-machine-learning-ensemble-method-predicts-immunogenicity-of-viral-protein-fragments)
  - [**21. Генерирующее ИИ, используемое для разработки новых антибиотиков**](#21-generative-ai-used-to-develop-novel-antibiotics)
  - [**22. Автоматизированная, высокоскоростная, многомерная система отслеживания одночастиц, основанная на глубоком обучении**](#22-deep-learning-based-automated-high-speed-multidimensional-single-particle-tracking-system)
  - [**23. ProEnsemble - система машинного обучения: оптимизация комбинаций продвигателей эволюционных путей**](#23-proensemble-machine-learning-framework-optimizing-evolutionary-pathway-promoter-combinations)
  - [**24. Нейронная сеть микроэкологических графиков ProtLGN направляет эволюцию белка**](#24-microenvironment-aware-graph-neural-network-protlgn-guides-directed-protein-evolution)
  - [**25. модель глубокого обучения AlphaPPIMd: исследование конформационных комплексов белко-белочных комплексов**](#25-deep-learning-model-alphappimd-exploring-conformational-ensembles-of-protein-protein-complexes)
  - [**26. Новый опухолево- подавляющий белковый деградирующий дп53м ингибирует распространение раковых клеток**](#26-novel-tumor-suppressor-protein-degrader-dp53m-inhibits-cancer-cell-proliferation)
  - [**27. Лучшая студенческая статья CVPR! Мультимодальная модель BioCLIP достигает обучения с нулевым числом примеров**](#27-cvpr-best-student-paper-multimodal-model-bioclip-achieves-zero-shot-learning)
  - [**28. 100 миллионов параметров! Фундаментальная клеточная модель scFoundation одновременно моделирует 20 000 генов**](#28-100-million-parameters-cell-foundation-model-scfoundation-models-20000-genes-simultaneously)
  - [**29. Принятая ICML, модель белкового языка ESM-AA превосходит традиционную SOTA**](#29-accepted-by-icml-protein-language-model-esm-aa-surpasses-traditional-sota)
  - [**30. Алгоритм SPACE опубликован в журнале Cell! Возможности обнаружения тканевых модулей превосходят аналогичные инструменты**](#30-space-algorithm-published-in-cell-sub-journal-tissue-module-discovery-capabilities-lead-similar-tools)
  - [**31. Новые прорывы на основе AlphaFold показывают динамическое разнообразие белков**](#31-new-breakthroughs-based-on-alphafold-reveal-dynamic-protein-diversity)
  - [**32. P450 Диффузия: метод разработки ферментов P450 De novo, разработанный на основе моделей диффузии**](#32-p450diffusion-de-novo-design-method-for-p450-enzymes-developed-based-on-diffusion-models)
  - [**33. Эквивариантные графические нейронные сети, используемые для прогнозирования места связывания целей белка, повышающие производительность на 20%**](#33-equivariant-graph-neural-networks-used-for-target-protein-binding-site-prediction-boosting-performance-by-20)
  - [**34. Всего 20 экспериментальных точек — важный этап для ИИ в белковой инженерии! FSFP эффективно оптимизирует предварительно обученные белковые модели**](#34-20-experimental-data-points-create-an-ai-protein-milestone-fsfp-effectively-optimizes-protein-pre-training-models)
  - [**35. Передаваемая модель глубокого обучения определяет несколько типов модификаций РНК, что значительно снижает вычислительные затраты**](#35-transferable-deep-learning-model-identifies-multiple-types-of-rna-modifications-significantly-reducing-computational-costs)
  - [**36. ИнструкцияПротеин: Сопоставление белкового языка с человеческим с помощью инструкций по знаниям**](#36-instructprotein-aligning-protein-language-with-human-language-using-knowledge-instructions)
  - [**37. Фреймворк генерирования белка-текст ProtT3 позволяет перекрестную интерпретацию белковых данных и текстовой информации**](#37-protein-to-text-generation-framework-prott3-enables-cross-modal-interpretation-of-protein-data-and-text-information)
  - [**38. Модель CPDiffusion проектирует функциональные белки полностью автоматически и при очень низких затратах**](#38-cpdiffusion-model-designs-functional-proteins-fully-automatically-at-an-ultra-low-cost)
  - [**39. Новый метод обнаружения протеиновых homologs, основанный на моделях белкового языка и методах интенсивного извлечения**](#39-a-novel-protein-homolog-detection-method-based-on-protein-language-models-and-dense-retrieval-techniques)
  - [**40. AlphaProteo эффективно разрабатывает целевые белковые связующие вещества, повышая аффинитет в 300 раз**](#40-alphaproteo-efficiently-designs-target-protein-binders-increasing-affinity-by-300-times)
  - [**41. Новая модель белкового языка, отрицающая значение DePLM, превосходит модели SOTA в прогнозировании мутационного эффекта**](#41-novel-denoising-protein-language-model-deplm-outperforms-sota-models-in-mutation-effect-prediction)
  - [**42. Геометрическая глубокая генерирующая модель DynamicBind позволяет прогнозировать динамическое докирование белка**](#42-geometric-deep-generative-model-dynamicbind-enables-dynamic-protein-docking-prediction)
  - [**43. Открытие лекарств Большая языковая модель Y-Mol полностью превосходит LLaMA2**](#43-drug-discovery-large-language-model-y-mol-completely-outperforms-llama2)
  - [**44. Универсальная молекулярная обратная складная модель UniIF дополнительно дополняет AlphaFold 3**](#44-universal-molecular-inverse-folding-model-uniif-further-complements-alphafold-3)
  - [**45. Предварительно обученная модель белкового языка ProSST более эффективно интегрирует информацию о структуре белка**](#45-pre-trained-protein-language-model-prosst-integrates-protein-structure-information-more-effectively)
  - [**46. Макроциклические пептиды связывающей структуры РФпептиды предлагают новые возможности для неракомыслимых белков**](#46-macrocyclic-peptide-binder-framework-rfpeptides-offers-new-possibilities-for-undruggable-proteins)
  - [**47. Модель основы генома Evo позволяет предсказывать и генерировать от молекулярных до геномных масштабов**](#47-genome-foundation-model-evo-enables-prediction-and-generation-from-molecular-to-genome-scales)
  - [**48. DigFrag точно сегментирует молекулярные фрагменты с использованием ИИ и генерирует 44 молекулы лекарств/пестицидов**](#48-digfrag-accurately-segments-molecular-fragments-using-ai-and-generates-44-drugpesticide-molecules)
  - [**49. Протеиновая последовательность Большой языковой модель Метод предварительной подготовки PRIME**](#49-protein-sequence-large-language-model-pre-training-method-prime)
  - [**50. Самоконтролируемый метод глубокого обучения революционизирует 3D-реконструкцию в криоэлектронной микроскопии**](#50-self-supervised-deep-learning-method-revolutionizes-3d-reconstruction-in-cryo-electron-microscopy)
  - [**51. Многомодальный метод генерирования белка PLAID генерирует последовательности и полностью атомизированные белковые структуры одновременно**](#51-multimodal-protein-generation-method-plaid-generates-sequences-and-all-atom-protein-structures-simultaneously)
  - [**52. Метод целенаправленной молекулярной оптимизации MOLRL, основанный на латентном укреплении обучения**](#52-targeted-molecular-optimization-method-molrl-based-on-latent-reinforcement-learning)
  - [**53. Фреймворк прогнозирования вирусной вариации E2VD прогнозирует эволюционные направления вирусов COVID-19/ВИЧ/инфлюензы**](#53-viral-variation-driver-prediction-framework-e2vd-predicts-evolutionary-directions-for-covid-19hivinfluenza-viruses)
  - [**54. Медицинская модель языка MedFound подходит к возможностям экспертного врача для рассуждения**](#54-medical-language-model-medfound-approaches-expert-physician-reasoning-capabilities)
  - [**55. 4D диффузионная модель Альфаположение заполняет пробел в динамическом прогнозировании структуры белка**](#55-4d-diffusion-model-alphafolding-fills-the-gap-in-dynamic-protein-structure-prediction)
  - [**56. ПепПРКЛИП-провод для разработки коротких белков обещает разработку новых методов лечения рака**](#56-pepprclip-pipeline-for-designing-short-proteins-holds-promise-for-developing-new-cancer-therapies)
  - [**57. Техника Boltzmann's alignment резко улучшает эффективность предсказания свободной энергии, связывающей белки**](#57-boltzmann-alignment-technique-drastically-improves-protein-binding-free-energy-prediction-efficacy)
  - [**58. Новый крупномасштабный генератор белковой позвоночника на основе потока Proteina достигает SOTA в де-ново белковой позвоночнице дизайна**](#58-novel-large-scale-flow-based-protein-backbone-generator-proteina-achieves-sota-in-de-novo-protein-backbone-design)
  - [**59. Модель UniGEM впервые достигает синергетического совершенствования двух задач, основанных на моделях диффузии**](#59-unigem-model-achieves-synergistic-enhancement-of-two-tasks-based-on-diffusion-models-for-the-first-time)
  - [**60. Радиодиффузия радиочастотного воздействия развивается в дальнейшем, достигая атомной точности де-нова конструкции антител**](#60-rfdiffusion-evolves-further-realizing-atomic-accuracy-de-novo-antibody-design)
  - [**61. Первая схема синтеза модели белка-РНК устанавливает новую SOTA в предсказании связывающей аффинити**](#61-first-protein-rna-language-model-fusion-scheme-sets-new-sota-in-binding-affinity-prediction)
  - [**62. Виртуальная модель тканей Celcomen впервые достигает идентифицируемости причинно-следственного вывода в пространственном транскриптомическом анализе**](#62-virtual-tissue-model-celcomen-achieves-causal-inference-identifiability-in-spatial-transcriptomics-analysis-for-the-first-time)
  - [**63. Метод Альфа-Фолд-Метаинференс точно предсказывает неравномерные структурные ансамбли белка**](#63-alphafold-metainference-method-accurately-predicts-disordered-protein-structural-ensembles)
  - [**64. Рамочная система прогнозирования высокоточности структуры РНК DRfold2 превосходит SOTA в нескольких эталонах**](#64-high-accuracy-rna-structure-prediction-framework-drfold2-surpasses-sota-in-multiple-benchmarks)
  - [**65. Новый алгоритм проектирования белков DRAKES прорывает узлы в проектировании биологической последовательности**](#65-new-protein-design-algorithm-drakes-breaks-through-the-biological-sequence-design-bottleneck)
  - [**66. Спектроскопия поглощения ультрафиолетовых лучей с помощью машинного обучения для обнаружения микробиологического загрязнения**](#66-machine-learning-assisted-uv-absorbance-spectroscopy-for-detecting-microbial-contamination)
  - [**67. Использование генерирующих моделей протеиновой последовательности для проектирования перекрывающихся генов**](#67-utilizing-protein-sequence-generative-models-for-overlapping-gene-design)
  - [**68. - Распоряжение предсказаний PUPS позволяет локализовать белки на одноклеточном уровне**](#68-prediction-framework-pups-enables-single-cell-level-protein-subcellular-localization)
  - [**69. UniMoMo: Первая единая генерирующая система для различных молекулярных видов позволяет создавать многотиповые молекулярные препараты**](#69-unimomo-the-first-unified-generative-framework-across-molecular-species-enables-multi-type-drug-molecular-design)
  - [**70. Протеиновый языковой модель Prot42 генерирует связующие вещества высокой афинити, используя только целевую последовательность белка.**](#70-protein-language-model-prot42-generates-high-affinity-binders-using-only-the-target-protein-sequence)
  - [**71. Единый симулятор биомолекулярной динамики UniSim впервые достигает единой симуляции динамики с усилием времени в молекулярных типах и химических средах**](#71-unified-biomolecular-dynamics-simulator-unisim-achieves-unified-time-coarsened-dynamics-simulation-across-molecular-types-and-chemical-environments-for-the-first-time)
  - [**72. Элегоритм вычислительной биологии УпрощенныйБондфиндер обнаруживает 69 новых нитрогенно-кислородно-серовых связей**](#72-computational-biology-algorithm-simplifiedbondfinder-uncovers-69-novel-nitrogen-oxygen-sulfur-bonds)
  - [**73. Новый метод проектирования протеиновых последовательностей FAMPNN одновременно обрабатывает информацию о белке и боковой цепи**](#73-novel-protein-sequence-design-method-fampnn-simultaneously-processes-protein-backbone-and-sidechain-information)
  - [**74. Метод атомной разработки белка La-Proteina генерирует белки с высокой точностью до 800 остатков**](#74-atomistic-protein-design-method-la-proteina-generates-proteins-with-up-to-800-residues-at-high-precision)
  - [**75. модель APM, специально разработанная для комплексов белков с многоцепочками, позволяет проектировать и оптимизировать функциональность всего атома**](#75-apm-model-specifically-designed-for-multi-chain-protein-complexes-enables-all-atom-design-and-functional-optimization)
  - [**76. Новый метод проектирования белка, который связывает регионы с внутренним нарушением, Логос специализируется на нетрадиционных целях**](#76-new-intrinsically-disordered-region-binding-protein-design-method-logos-specializes-in-undruggable-targets)
  - [**77. Выпущена новая структура динамического синтеза белков FusionProt, позволяющая итеративно обмениваться информацией**](#77-novel-protein-dynamic-fusion-representation-framework-fusionprot-released-enabling-iterative-information-exchange)
  - [**78. Модель диффузии, управляемая транскриптомом MorphDiff, выпущенная для ускорения обнаружения фенотипических препаратов**](#78-transcriptome-guided-diffusion-model-morphdiff-released-to-accelerate-phenotypic-drug-discovery)
  - [**79. Фреймворк AlphaPPIMI значительно улучшает обобщение, превосходя существующие методы в предсказании модуляторов интерфейса PPI**](#79-alphappimi-framework-significantly-enhances-generalization-surpassing-existing-methods-in-ppi-interface-modulator-prediction)
  - [**80. Новая система нейронных сетей синтеза эффективно предсказывает многометальные места связывания в протеиновых последовательностях**](#80-a-novel-fusion-neural-network-framework-efficiently-predicts-multi-metal-binding-sites-in-protein-sequences)
  - [**81. Выпущена система высокосинтезируемой молекулярной проекции ReaSyn, достигшая чрезвычайно высоких темпов реконструкции и разнообразия путей**](#81-highly-synthesizable-molecular-projection-framework-reasyn-released-achieving-ultra-high-reconstruction-rates-and-pathway-diversity)
  - [**82. Опубликована система обучения с ограниченным усилением Ctrl-DNA, которая реализует "целевой контроль" специфической экспрессии клеточных генов**](#82-constrained-reinforcement-learning-framework-ctrl-dna-released-realizing-targeted-control-of-specific-cell-gene-expression)
  - [**83. Рамочка PLACER решает задачу моделирования на атомном уровне конформационной гетерогенности белка**](#83-placer-framework-resolves-the-atomic-level-modeling-challenge-of-protein-conformational-heterogeneity)
  - [**84. Squidiff позволяет моделировать транскриптомы в много сценариях, способствуя развитию точной медицины и космической медицины**](#84-squidiff-enables-multi-scenario-transcriptome-simulation-boosting-precision-medicine-and-spatial-medicine-development)
  - [**85. Выпущен генеративный модель PepTron и новый критерий оценки, переформатирующий способности предсказания для неравномерных белковых ансамблей**](#85-generative-model-peptron-and-new-evaluation-benchmark-released-reshaping-prediction-capabilities-for-disordered-protein-ensembles)
  - [**86. MIT и Гарвард предлагают комплексный рабочий процесс ИИ CleaveNet для преодоления высокоспецифических проблем в проектировании протеазовых субстратов.**](#86-mit-and-harvard-propose-end-to-end-ai-workflow-cleavenet-to-overcome-highly-specific-protease-substrate-design-challenges)
  - [**87. Команда Университета Гете в Франкфурте предлагает многоуровневую классификационную систему для расшифровки сложности человеческого лигома E3.**](#87-goethe-university-frankfurt-team-proposes-a-multi-scale-classification-framework-to-decode-the-complexity-of-the-human-e3-ligome)
  - [**88. Basecamp и NVIDIA совместно выпускают модель EDEN, которая позволяет программировать терапевтический дизайн с помощью ИИ**](#88-basecamp-and-nvidia-jointly-release-the-eden-foundation-model-enabling-ai-programmable-therapeutic-design)
  - [**89. Microsoft и другие предлагают многомодальную AI-крань GigaTIME для создания виртуальных атласов mIF из рутинных патологических слайдов**](#89-microsoft-and-others-propose-the-multimodal-ai-framework-gigatime-to-generate-virtual-mif-atlases-from-routine-pathology-slides)
  - [**90. MIT предлагает модель языка глубокого обучения Pichia-CLM для оптимизации кодонов для повышения доходности рекомбинантных белков**](#90-mit-proposes-deep-learning-language-model-pichia-clm-to-optimize-codons-for-enhanced-recombinant-protein-yield)
  - [**91. MIT и ETH совместно предлагают разработку основы глубокого обучения APOLLO для эффективной интеграции и развязки одноклеточных мультимодальных данных.**](#91-mit-and-eth-jointly-propose-deep-learning-framework-apollo-to-efficiently-integrate-and-disentangle-single-cell-multimodal-data)
  - [**92. CUHK и другие совместно предлагают рамки Bi-TEAM для единого масштабного изучения передового представления модифицированных пептидов**](#92-cuhk-and-others-jointly-propose-the-bi-team-framework-for-unified-cross-scale-representation-learning-of-modified-peptides)
  - [**93. Университет Карнеги-Меллон и другие предлагают AQuaRef для квантовой очистки моделей полностью атомизированных белков**](#93-carnegie-mellon-university-and-others-propose-aquaref-for-quantum-refinement-of-all-atom-protein-models)
  - [**94. NVIDIA и другие совместно предлагают комплексную систему для объединения генерирования и оптимизации белковых связующих веществ.**](#94-nvidia-and-others-jointly-propose-the-complexa-framework-to-unify-protein-binder-generation-and-optimization)
  - [**95. MIT и CMU совместно предлагают VibeGen, внедряя вибрационную динамику для обеспечения де-ново проектирования белка**](#95-mit-and-cmu-jointly-propose-vibegen-introducing-vibrational-dynamics-to-empower-de-novo-protein-design)
  - [**96. Институт Пастера использует глубокое обучение для прогнозирования 2,39 млн антифажных белков, отображая бактериальный иммунитет**](#96-institut-pasteur-uses-deep-learning-to-predict-239-million-anti-phage-proteins-mapping-bacterial-immunity)
  - [**97. Команда KAIST использует ИИ для де-нового проектирования белков, связывающих малые молекулы, успешно применяя их в биосенсорах**](#97-kaist-team-utilizes-ai-to-de-novo-design-small-molecule-binding-proteins-successfully-applying-them-in-biosensors)
  - [**98. Университет Торонто и другие предлагают dnaHNet для эффективного иерархического моделирования геномных последовательностей**](#98-university-of-toronto-and-others-propose-dnahnet-for-efficient-hierarchical-modeling-of-genomic-sequences)
  - [**99. Лондонский университет королевы Марии и другие проводят крупнейшее протеогеномное исследование, раскрывающее механизмы молекулярных заболеваний**](#99-queen-mary-university-of-london-and-others-conduct-the-largest-scale-proteogenomic-study-revealing-molecular-disease-mechanisms)
  - [**100. Гете Университет Франкфурт и другие предлагают модель genESOM: генерирующее ИИ прорывает эксперименты с животными небольших образцов**](#100-goethe-university-frankfurt-and-others-propose-genesom-model-generative-ai-breaks-through-small-sample-animal-experiments)
- [**ИИ + здравоохранение**](#ai-healthcare)
  - [**1. Система глубокого обучения DeepDR Plus предсказывает диабетическую ретинопатию с использованием изображений фондов**](#1-deepdr-plus-deep-learning-system-predicts-diabetic-retinopathy-using-fundus-images)
  - [**2. Логистическая регрессионная модель анализирует, что высокий индекс зеленого ландшафта снижает риск MetS**](#2-logistic-regression-model-analyzes-that-high-green-landscape-index-reduces-mets-risk)
  - [**3. Система глубокого обучения помогает младшим офтальмологам повысить последовательность диагностики на 12%**](#3-deep-learning-system-helps-junior-ophthalmologists-increase-diagnostic-consistency-by-12)
  - [**4. GSP- GCN достигают точности до 90,2% при диагностике болезни Паркинсона**](#4-gsp-gcns-achieve-up-to-902-accuracy-in-parkinsons-disease-diagnosis)
  - [**5. Система оценки прогноза рака молочной железы МИРС**](#5-breast-cancer-prognosis-scoring-system-mirs)
  - [**6. Модель основания образа сетчатки RETFound предсказывает множество системных заболеваний**](#6-retinal-image-foundation-model-retfound-predicts-multiple-systemic-diseases)
  - [**7. СВМ оптимизирует сенсоры для тактильной работы, скорость распознавания брайл достигает 96,12%**](#7-svm-optimizes-tactile-sensors-braille-recognition-rate-reaches-9612)
  - [**8. CAS Пекинский институт геномики создает открытый биомедицинский архив образов**](#8-cas-beijing-institute-of-genomics-establishes-an-open-biomedical-imaging-archive)
  - [**9. ИИ Лунит читает маммограммы с точностью, сравнимой с врачами**](#9-ai-lunit-reads-mammograms-with-accuracy-comparable-to-doctors)
  - [**10. Стратегия отбора признаков обнаруживает биомаркеры рака молочной железы**](#10-feature-selection-strategy-detects-breast-cancer-biomarkers)
  - [**11. Машины-модель с повышением степени точно предсказывает субсиндром БПСД**](#11-gradient-boosting-machine-model-accurately-predicts-bpsd-sub-syndrome)
  - [**12. Модель машинного обучения предсказывает смертность пациентов в течение одного года**](#12-machine-learning-model-predicts-patient-one-year-mortality-rate)
  - [**13. Новая технология AI мозго-компьютерного интерфейса позволяет пациентам с фазией "говорить"**](#13-new-ai-brain-computer-interface-technology-allows-aphasic-patients-to-speak)
  - [**14. обнаружение рака поджелудочной железы на основе искусственного интеллекта на основе глубокого обучения**](#14-deep-learning-based-artificial-intelligence-detection-of-pancreatic-cancer)
  - [**15. эффективность скрининга рака легких с помощью машинного обучения для населения**](#15-population-effectiveness-of-machine-learning-assisted-lung-cancer-screening)
  - [**16. Модель синтеза ИИ для диагностики рака яичников MCF рассчитывает риск с использованием рутинных лабораторных данных и возраста**](#16-ovarian-cancer-diagnostic-ai-fusion-model-mcf-calculates-risk-using-routine-lab-data-and-age)
  - [**17. Google выпускает HEAL Framework, 4-ступенчатый процесс оценки справедливости медицинских инструментов ИИ**](#17-google-releases-heal-framework-a-4-step-process-to-assess-medical-ai-tool-fairness)
  - [**18. Использование семантической сегментации для разработки пространственной транскриптомики семантического инструмента аннотации Pianno**](#18-leveraging-semantic-segmentation-to-develop-spatial-transcriptomics-semantic-annotation-tool-pianno)
  - [**19. Модель ИИ UniFMIR нарушает границы существующей флуоресцентной микроскопической визуализации**](#19-ai-model-unifmir-breaks-the-limits-of-existing-fluorescence-microscopy-imaging)
  - [**20. Система глубокого обучения улучшает точность прогнозирования выживаемости рака**](#20-deep-learning-system-improves-the-accuracy-of-cancer-survival-prediction)
  - [**21. MemSAM адаптирует модель "Segment Anything" для сегментации медицинского видео**](#21-memsam-adapts-segment-anything-model-for-medical-video-segmentation)
  - [**22. Медицинская модель сегментации изображений Медицинский SAM 2 возглавляет линейку SOTA**](#22-medical-image-segmentation-model-medical-sam-2-tops-the-sota-leaderboard)
  - [**23. Машинное обучение борется с химиотерапевтической резистентностью и рецидивом опухолей, создавая сильную защиту от стволовых клеток рака молочной железы**](#23-machine-learning-fights-chemotherapy-resistance-and-tumor-recurrence-building-a-strong-defense-against-breast-cancer-stem-cells)
  - [**24. Визионный язык DeepDR-LLM для лечения диабета опубликован в субжурнале Nature**](#24-vision-language-model-deepdr-llm-for-diabetes-care-published-in-nature-sub-journal)
  - [**25. На уровне старших патоморфологов! Команда Цинхуа предлагает фундаментальную модель ИИ ROAM для точной диагностики глиомы**](#25-leveling-with-senior-pathologists-tsinghua-team-proposes-ai-foundation-model-roam-for-precise-glioma-diagnosis)
  - [**26. Универсальная модель сегментации медицинских изображений ScribblePrompt превосходит модели на основе SAM**](#26-universal-medical-image-segmentation-model-scribbleprompt-outperforms-sam-based-models)
  - [**27. Цифровая платформа мозга-близнеца демонстрирует критические явления и когнитивные функции, похожие на человеческий мозг**](#27-digital-twin-brain-platform-demonstrates-critical-phenomena-and-cognitive-functions-similar-to-the-human-brain)
  - [**28. Автоматизированная система симуляции агентов выполняет первоначальный диагноз депрессии**](#28-automated-llm-dialogue-agent-simulation-system-performs-initial-diagnosis-for-depression)
  - [**29. модель глубокого обучения LucaProt помогает в идентификации вирусов РНК**](#29-deep-learning-model-lucaprot-aids-in-rna-virus-identification)
  - [**30. Рамочная система медицинского образа предварительной подготовки к медицинским данным UniMedI разрушает барьеры на пути разнообразия медицинских данных**](#30-medical-image-pre-training-framework-unimedi-breaks-down-medical-data-heterogeneity-barriers)
  - [**31. Многоязычная медицинская большая модель MMed-Llama 3 лучше адаптируется к сценариям медицинского применения**](#31-multilingual-medical-large-model-mmed-llama-3-better-adapts-to-medical-application-scenarios)
  - [**32. Метод нашивки изображений с помощью капсуловой эндоскопии S2P-Matching помогает в восстановлении изображения**](#32-capsule-endoscopy-image-stitching-method-s2p-matching-assists-in-image-reconstruction)
  - [**33. Мультимодальный медицинский эталон GMAI-MMBench содержит 284 наборов данных, охватывающих 18 клинических задач**](#33-multimodal-medical-benchmark-gmai-mmbench-features-284-datasets-covering-18-clinical-tasks)
  - [**34. Новый метод прогнозирования временных серий CGS-Mask раскрывает ключевые показатели показателей выживаемости пациентов**](#34-novel-time-series-forecasting-method-cgs-mask-uncovers-key-indicators-for-patient-survival-rates)
  - [**35. Неинвазивная система декодирования мозга fMRI заложена основой для интерфейсов мозга-компьютера и когнитивных моделей**](#35-non-invasive-brain-decoding-framework-fmri-lays-the-foundation-for-brain-computer-interfaces-and-cognitive-models)
  - [**36. Медицинская модель сегментации изображений M2CF-Net улучшает точность диагностики синдрома Шёгрена**](#36-medical-image-segmentation-model-m2cf-net-improves-diagnosis-accuracy-for-sjogrens-syndrome)
  - [**37. BSAFusion позволяет сочетать и соединять мультимодальные медицинские изображения**](#37-bsafusion-enables-alignment-and-fusion-of-multimodal-medical-images)
  - [**38. Многоагентная система LLM KG4Диагностика помогает в диагностике 362 распространенных заболеваний**](#38-multi-agent-llm-framework-kg4diagnosis-assists-in-diagnosing-362-common-diseases)
  - [**39. Модель сегментации изображений ConDSeg решает проблемы мягких границ и событий в медицинской визуализации**](#39-image-segmentation-model-condseg-solves-soft-boundary-and-co-occurrence-issues-in-medical-imaging)
  - [**40. Медицинская модель M3FM позволяет проводить клиническую диагностику с нулевым выбором, поддерживая отчетность и классификацию заболеваний**](#40-medical-model-m³fm-enables-zero-shot-clinical-diagnosis-supporting-disease-reporting-and-classification)
  - [**41. Оценка пола на основе глубокого обучения с помощью КТ-сканирования черепа превосходит результаты экспертов судебной экспертизы**](#41-deep-learning-based-sex-estimation-from-skull-ct-scans-outperforms-human-forensic-experts)
  - [**42. ИИ способствует медицинскому исследованию: крупные модели становятся "золотым партнером" для подготовки врачей первичной медицинской помощи**](#42-ai-boosts-medical-research-large-models-become-the-golden-partner-for-training-primary-care-physicians)
  - [**43. Алгоритм глубокого обучения AcneDGNet обеспечивает выявление и оценку акне-лезии**](#43-acnedgnet-deep-learning-algorithm-achieves-acne-lesion-detection-and-grading)
  - [**44. Выпущена мультимодальная модель сегментации медицинских изображений VISTA3D, достигающая 3D-сегментации и взаимодействия изображений**](#44-multimodal-medical-image-segmentation-model-vista3d-released-achieving-3d-image-auto-segmentation-and-interaction)
  - [**45. Многоплановая эхокардиография единая сегментационная модель EchoONE точно сегментирует несколько планов**](#45-multi-plane-echocardiography-unified-segmentation-model-echoone-accurately-segments-multiple-planes)
  - [**46. Рамочная система диалога между многоагентами имитирует медицинские консультации для оказания помощи в диагностике заболеваний**](#46-multi-agent-dialogue-framework-simulates-medical-consultations-to-aid-disease-diagnosis)
  - [**47. Очень глубокое обучение СТАИГ раскрывает подробную генетическую информацию в микросреде опухоли**](#47-deep-learning-framework-staig-reveals-detailed-genetic-information-in-the-tumor-microenvironment)
  - [**48. Первая все-в-единственная медицинская система идентификации изображений MaMI достигает SOTA по 11 наборам данных**](#48-first-all-in-one-medical-image-re-identification-framework-mami-reaches-sota-across-11-datasets)
  - [**49. Модель регрессии много к одному M2OST точно предсказывает экспрессию генов с использованием цифровых патологических изображений**](#49-many-to-one-regression-model-m2ost-accurately-predicts-gene-expression-using-digital-pathology-images)
  - [**50. Скан мозга МРТ инструмент MindGlide количественно определяет поражения склероза в разных формах**](#50-brain-mri-scanning-tool-mindglide-quantifies-multiple-sclerosis-lesions)
  - [**51. Иерархическая дистилляция многоинстанционная система обучения HDMIL быстро обрабатывает гигапиксельные изображения целого слайда**](#51-hierarchical-distillation-multi-instance-learning-framework-hdmil-rapidly-processes-gigapixel-whole-slide-images)
  - [**52. Универсальная модель 3D-сегментации кровеносных сосудов основание сосудовFM намного превышает модели на основе SAM**](#52-universal-3d-blood-vessel-segmentation-foundation-model-vesselfm-far-exceeds-sam-based-models)
  - [**53. Графические нейронные сети точно предсказывают выживание рака легких, обнаруживая 3 смертельные подтипы**](#53-graph-neural-networks-accurately-predict-lung-cancer-survival-discovering-3-fatal-subtypes)
  - [**54. Стратегия синтеза ИИ модели предсказывает риск смертности от септического шока**](#54-fusion-strategy-ai-model-predicts-septic-shock-mortality-risk)
  - [**55. Первая в мире клиническая модель ГРАФ-ОФ-ТУК в HIE улучшает прогнозирование нейрокогнитивных результатов на 15%**](#55-worlds-first-clinical-graph-of-thought-model-in-hie-improves-neurocognitive-outcome-prediction-by-15)
  - [**56. Моделирование кохорты пациентов с использованием многомерных данных о ЕЭР увеличивает точность прогнозирования продолжительности пребывания на 16,3%**](#56-fine-grained-patient-cohort-modeling-using-multidimensional-ehr-data-increases-length-of-stay-prediction-accuracy-by-163)
  - [**57. Модель глубокого обучения APEX выявляет потенциальных кандидатов в антибиотики**](#57-deep-learning-model-apex-screens-potential-antibiotic-candidates)
  - [**58. Оценка эпидемиологии сточных вод с использованием генной секвенирования и машинного обучения: метод ICA-Var обнаруживает вирусы до 4 недель раньше**](#58-wastewater-epidemiology-assessment-using-gene-sequencing-and-machine-learning-ica-var-method-detects-viruses-up-to-4-weeks-early)
  - [**59. Двусторонняя модель Браунианского моста диффузии повышает воспроизводимость виртуального окрашивания**](#59-bidirectional-brownian-bridge-diffusion-model-enhances-reproducibility-of-virtual-staining)
  - [**60. Medical GraphRAG побила рекорды точности QA, достигнув SOTA на 11 наборах данных сбалансированных показателей**](#60-medical-graphrag-breaks-qa-accuracy-records-achieving-sota-on-11-benchmark-datasets)
  - [**61. Агент здравоохранения автоматически обнаруживает проблемы медицинской этики и безопасности**](#61-healthcare-agent-automatically-detects-medical-ethics-and-safety-issues)
  - [**62. Классификатор образов кровяных клеток CytoDiffusion помогает в обнаружении лейкемии, превосходя клинических экспертов.**](#62-blood-cell-image-classifier-cytodiffusion-assists-in-discovering-leukemia-surpassing-clinical-experts)
  - [**63. Команда UCL предлагает федеральную систему обучения MORPHFED для межинституционного анализа морфологии крови**](#63-ucl-team-proposes-federated-learning-framework-morphfed-for-cross-institutional-blood-morphology-analysis)
  - [**64. Французская команда предлагает объясняемую систему машинного обучения для точного прогнозирования смертности у кандидатов на трансплантацию печени HCC**](#64-french-team-proposes-explainable-machine-learning-framework-for-accurate-mortality-prediction-in-hcc-liver-transplant-candidates)
  - [**65. Стэнфордский университет предлагает Мерлина, первую родной модель 3D-компьютерного томографического языка зрения**](#65-stanford-university-proposes-merlin-the-first-native-3d-abdominal-ct-vision-language-model)
- [**ИИ + химия материалов**](#ai-materials-chemistry)
  - [**1. Высокопроизводительная вычислительная система генерирует 120 000 новых кандидатов в кандидатов в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в кандидаты в**](#1-high-throughput-computational-framework-generates-120000-novel-mof-candidates-in-33-minutes)
  - [**2. Экраны алгоритма машинного обучения P-SOC электродные материалы**](#2-machine-learning-algorithm-screens-p-soc-electrode-materials)
  - [**3. Модель машинного обучения SEN обеспечивает высокоточное предсказание свойств материала**](#3-sen-machine-learning-model-achieves-high-accuracy-material-property-predictions)
  - [**4. Инструмент глубокого обучения GNoME обнаружил 2,2 миллиона новых кристаллов**](#4-deep-learning-tool-gnome-discovers-22-million-new-crystals)
  - [**5. Рекурсивно встроенная атомная нейронная сеть, вызванная полем, точно описывает изменения силы и направления внешнего поля**](#5-field-induced-recursively-embedded-atom-neural-network-accurately-describes-external-field-strength-and-direction-changes)
  - [**6. Машинное обучение предсказывает адсорбцию воды изотермами пористого материала**](#6-machine-learning-predicts-water-adsorption-isotherms-of-porous-materials)
  - [**7. Использование машинного обучения для оптимизации кокатализаторов для фотоанодов BiVO(4)**](#7-using-machine-learning-to-optimize-co-catalysts-for-bivo4-photoanodes)
  - [**8. Алгоритм RetroExplainer выполняет прогнозы ретросинтеза на основе глубокого обучения**](#8-retroexplainer-algorithm-performs-retrosynthesis-prediction-based-on-deep-learning)
  - [**9. Глубокие нейронные сети + НЛП, используемые для разработки коррозионно-устойчивых сплавов**](#9-deep-neural-networks--nlp-used-to-develop-corrosion-resistant-alloys)
  - [**10. Глубокое обучение определяет внутренние структуры материалов посредством поверхностных наблюдений**](#10-deep-learning-determines-materials-internal-structures-through-surface-observations)
  - [**11. Разработка 3 новых материалов с использованием инновационных рентгеновских искрильторов**](#11-developing-3-new-materials-using-innovative-x-ray-scintillators)
  - [**12. Полунадзорное обучение извлекает скрытую информацию из нетикетированных данных**](#12-semi-supervised-learning-extracts-hidden-information-from-unlabeled-data)
  - [**13. Автоматизированная извлечение знаний на основе AutoML**](#13-automated-knowledge-extraction-based-on-automl)
  - [**14. Uni-MOF: модель машинного обучения, предсказывающая поведение адсорбции в 3D-модели MOF**](#14-uni-mof-a-machine-learning-model-predicting-adsorption-behavior-in-3d-mof-materials)
  - [**15. Микроэлектроника приближается к эпохе после закона Мура! Объединение DNN с технологией наномембран позволяет точно анализировать углы падения света**](#15-microelectronics-accelerates-towards-the-post-moore-era-integrating-dnn-with-nanomembrane-technology-to-precisely-analyze-incident-light-angles)
  - [**16. Реорганизация литийных батарей, предлагая упрощенную электрохимическую модель, основанную на обучении в группе**](#16-reshaping-lithium-battery-performance-boundaries-proposing-a-simplified-electrochemical-model-based-on-ensemble-learning)
  - [**17. Самый сильный на железе основанный сверхпроводящий магнит, созданный в результате машинного обучения**](#17-the-strongest-iron-based-superconducting-magnet-born-via-machine-learning)
  - [**18. Нейронные сети заменяют теорию функционала плотности! Универсальная модель материалов обеспечивает сверхточные прогнозы**](#18-neural-networks-replace-density-functional-theory-universal-materials-model-achieves-ultra-precise-predictions)
  - [**19. Функциональная структура плотности нейронной сети открывает черную ящик электронной структуры материи**](#19-neural-network-density-functional-framework-opens-the-black-box-of-matters-electronic-structure-prediction)
  - [**20. Первая полностью форвардная архитектура обучения оптическому вычислению с использованием нейронных сетей достигает крупного прорыва в отечественных оптических чипах**](#20-first-fully-forward-mode-training-architecture-for-optical-computing-using-neural-networks-achieves-major-breakthrough-in-domestic-optical-chips)
  - [**21. Химия LLM ChemLLM охватывает 7 миллионов данных QA, профессиональные возможности соперничают с GPT-4**](#21-chemistry-llm-chemllm-covers-7-million-qa-data-professional-capabilities-rival-gpt-4)
  - [**22. Микроспектрометры, адаптивные к ИИ, производимые в масштабе "Ваферов"**](#22-wafer-scale-producible-ai-adaptive-micro-spectrometers)
  - [**23. Модель GNNOpt идентифицирует сотни кандидатов в солярные клетки и квантовые материалы**](#23-gnnopt-model-identifies-hundreds-of-solar-cell-and-quantum-material-candidates)
  - [**24. Открытый набор данных OMat24 содержит 110 миллионов результатов расчета DFT**](#24-open-omat24-dataset-contains-110-million-dft-calculation-results)
  - [**25. Новая рефракторная высокоэнтропическая сплав, синтезируемая посредством машинного обучения, обладает превосходной дуктильностью при комнатной температуре**](#25-novel-refractory-high-entropy-alloy-synthesized-via-machine-learning-boasts-excellent-room-temperature-ductility)
  - [**26. Материально-генеративная модель FlowLLM включает в себя набор данных, охватывающий более 45 тыс. материалов.**](#26-material-generative-model-flowllm-features-a-dataset-covering-over-45k-materials)
  - [**27. Использование активного обучения для выявления 14 000 высокоэнтропических оксидов, успешно проверка 4 высокоактивных катализаторов эволюции водорода**](#27-using-active-learning-to-identify-14000-high-entropy-oxides-successfully-screening-4-high-activity-hydrogen-evolution-catalysts)
  - [**28. Модель глубокого обучения BETE-NET повышает эффективность поиска сверхпроводящих материалов в 5 раз**](#28-deep-learning-model-bete-net-boosts-superconducting-material-search-efficiency-by-5x)
  - [**29. Технология дерева решения по ускорению степени (GBDT) еще больше улучшает высокоточное предсказание окисления высокоэнтропических сплавов**](#29-gradient-boosting-decision-tree-gbdt-technology-further-improves-high-precision-prediction-of-high-entropy-alloy-oxidation-resistance)
  - [**30. Молекулярная конструкция RingFormer более точно предсказывает молекулярные оптоэлектронные свойства органического материала**](#30-molecular-design-framework-ringformer-more-precisely-predicts-organic-material-molecular-optoelectronic-properties)
  - [**31. Метод планирования неорганического ретросинтеза - Retrieval-Retro повышает эффективность и точность синтеза неорганических материалов**](#31-inorganic-retrosynthesis-planning-method-retrieval-retro-improves-inorganic-material-synthesis-efficiency-and-accuracy)
  - [**32. Использование крупных моделей для расшифровки механизмов провода электролитов гидридов твердого состояния, создание надежной модели прогнозирования энергии активации**](#32-using-large-models-to-decipher-hydride-solid-state-electrolyte-conduction-mechanisms-establishing-a-reliable-activation-energy-prediction-model)
  - [**33. Поиск данных массовой спектрометрии в терахэра-массе, который позволяет машинное обучение, обнаруживает неизвестные химические реакции**](#33-tera-scale-mass-spectrometry-data-search-enabled-by-machine-learning-uncovers-unknown-chemical-reactions)
  - [**34. Метод генеративного решения структуры ИИ PXRDnet на основе диффузионных моделей успешно решает 200 сложных моделируемых нанокристаллов**](#34-generative-ai-structure-solution-method-pxrdnet-based-on-diffusion-models-successfully-solves-200-complex-simulated-nanocrystals)
  - [**35. Модель DreaMS охватывает 200 миллионов спектров молекулярной массы, создавая крупнейший в мире набор данных по массовым характеристикам GeMS**](#35-dreams-model-covers-200-million-molecular-mass-spectra-building-the-worlds-largest-mass-spec-dataset-gems)
  - [**36. Эквивариантная система машинного обучения ускоряет масштабные моделирование электрического поля материалов**](#36-equivariant-machine-learning-framework-accelerates-large-scale-electric-field-simulations-of-materials)
  - [**37. Многоисточникный метод интеграции данных экраны 25 видов альтернатив клинкеров цемента, эквивалентным сокращению 1,2 млрд тонн парниковых газов**](#37-multi-source-data-integration-method-screens-25-types-of-cement-clinker-alternatives-equivalent-to-reducing-12-billion-tons-of-greenhouse-gases)
  - [**38. UNIMATE впервые достигает единого моделирования топологического генерирования/предсказания собственности**](#38-unimate-achieves-unified-modeling-of-topology-generationproperty-prediction-for-the-first-time)
  - [**39. Всеатомная диффузия Трансформаторная система позволяет впервые объединить периодические и апериодические атомные системы**](#39-all-atom-diffusion-transformer-framework-enables-unified-generation-of-periodic-and-aperiodic-atomic-systems-for-the-first-time)
  - [**40. Модель FASTSOLV реализует предсказание растворимости малых молекул при любой температуре, ускоряя скорость вывода в 50 раз**](#40-fastsolv-model-realizes-small-molecule-solubility-prediction-at-any-temperature-accelerating-inference-speed-by-50x)
  - [**41. Новый метод, основанный на мультимодальных моделях машинного обучения, предсказывает свойства материалов без полных кристаллических структур**](#41-novel-method-based-on-multimodal-machine-learning-models-predicts-material-properties-without-complete-crystal-structures)
  - [**42. Модель ИИ CGformer инновационно интегрирует глобальные механизмы внимания, способствуя исследованию и развитию высокоэнтропических материалов**](#42-ai-model-cgformer-innovatively-integrates-global-attention-mechanisms-aiding-high-entropy-material-rd)
  - [**43. Новый метод интеграции структурных ограничений SCIGEN адаптируется к любой предварительно подготовленной модели диффузии**](#43-novel-structural-constraint-integration-method-scigen-adapts-to-any-pre-trained-diffusion-model)
  - [**44. Физически информированная генерирующая ИИ модель SpectroGen требует только единого ввода мода для достижения кросс-модального генерации с 99% экспериментальной корреляцией**](#44-physically-informed-generative-ai-model-spectrogen-requires-only-single-modality-input-to-achieve-cross-modal-generation-with-99-experimental-correlation)
  - [**45. MOF-ChemUnity восстанавливает панорамные знания MOF, продвигая открытие материалов в эпоху "Отъяснимого ИИ"**](#45-mof-chemunity-reconstructs-mof-panoramic-knowledge-pushing-material-discovery-into-the-explainable-ai-era)
  - [**46. Выпущен легкий универсальный потенциальный модель PET-MAD, достигающий специальной точности уровня модели с минимальными образцами**](#46-lightweight-universal-potential-model-pet-mad-released-achieving-dedicated-model-level-precision-with-minimal-samples)
  - [**47. ИИ-система "Хемоонтология" выпущена, сокращая вдвое затраты на поиск реакционного пути путем интеграции химических знаний**](#47-ai-system-chemontology-released-halving-reaction-path-search-costs-by-integrating-chemical-knowledge)
  - [**48. Принстон и другие совместно предлагают метод LLM для прогнозирования свободной энергии MOF, высоко точно оценивая целесообразность синтеза**](#48-princeton-and-others-jointly-propose-llm-method-for-predicting-mof-free-energy-highly-accurately-assessing-synthesis-feasibility)
  - [**49. Команда Йельского университета предлагает модель MOSAIC, координируя LLM для создания высоконадежных систем химического синтеза**](#49-yale-university-team-proposes-mosaic-model-coordinating-llms-to-generate-highly-reliable-chemical-synthesis-schemes)
  - [**50. MIT и другие предлагают модель диффузии DiffSyn, позволяющую генерировать планирование путей синтеза материалов.**](#50-mit-and-others-propose-diffusion-model-diffsyn-enabling-generative-planning-of-material-synthesis-pathways)
  - [**51. Университет Мичигана и Farasis Energy совместно предлагают метод "Обучение открытия", который резко сократит циклы прогнозирования срока службы батареи**](#51-university-of-michigan-and-farasis-energy-jointly-propose-discovery-learning-method-drastically-shortening-battery-life-prediction-cycles)
  - [**52. Корнеллский университет предлагает систему SCAN, которая очень точно предсказывает и объясняет производительность электролитов батареи.**](#52-cornell-university-proposes-scan-framework-highly-accurately-predicting-and-explaining-battery-electrolyte-performance)
  - [**53. MIT предлагает основной большой модель DefectNet для неразрушительной характеристики и количественной оценки внутренних дефектов материалов**](#53-mit-proposes-foundation-large-model-defectnet-for-non-destructive-characterization-and-quantification-of-internal-material-defects)
  - [**54. Университет Корнелла предлагает многоагентную платформу EMSeek, которая позволит достичь полнопроводного автоматического анализа изображений электронной микроскопии**](#54-cornell-university-proposes-multi-agent-platform-emseek-achieving-full-pipeline-automated-analysis-of-electron-microscopy-images)
- [**ИИ + зоология и ботаника**](#ai-zoology-botany)
  - [**1. SBeA анализирует социальные поведения животных на основе нескольких выстрелов обучения**](#1-sbea-analyzes-animal-social-behaviors-based-on-a-few-shot-learning-framework)
  - [**2. Метод глубокого обучения, основанный на сиамских сетях, автоматически захватывает процессы развития эмбрионов**](#2-deep-learning-method-based-on-siamese-networks-automatically-captures-embryonic-development-processes)
  - [**3. Систематическая трубопроводная линия для сбора данных о фенотипе растений с помощью беспилотных летательных аппаратов для прогнозирования оптимальных дат урожая**](#3-systematic-pipeline-for-collecting-plant-phenotype-data-via-drones-to-predict-optimal-harvest-dates)
  - [**4. Система сигнализации с помощью искусственного интеллекта точно отличает тигров от других видов**](#4-ai-camera-alert-system-accurately-distinguishes-tigers-from-other-species)
  - [**5. Использование данных Labrador Retriever и сравнение трех моделей показывает поведенческие черты, влияющие на производительность собак обнаружения.**](#5-using-labrador-retriever-data-and-comparing-3-models-reveals-behavioral-traits-affecting-detection-dogs-performance)
  - [**6. Многовидовый модель распознавания изображений на основе классификации ArcFace Глава распознавания лиц**](#6-multi-species-image-recognition-model-based-on-arcface-classification-head-for-face-recognition)
  - [**7. Наблюдение за цветением цвета вишня в Японии с использованием Python API и компьютерного зрения API**](#7-monitoring-cherry-blossom-blooming-in-japan-using-python-api-and-computer-vision-api)
  - [**8. Метод популяционной генетики, основанный на машинном обучении, показывает механизм формирования вкусов винограда**](#8-machine-learning-based-population-genetics-method-reveals-the-formation-mechanism-of-grape-flavors)
  - [**9. Обзор: более эффективное раскрытие биоинформатических исследований с помощью ИИ**](#9-review-unlocking-bioinformatics-research-more-efficiently-with-ai)
  - [**10. Модель BirdFlow точно предсказывает маршруты полетов перемещающихся птиц**](#10-birdflow-model-accurately-predicts-flight-paths-of-migratory-birds)
  - [**11. Новая модель биоакустики китов идентифицирует 8 видов китовых животных**](#11-new-whale-bioacoustics-model-identifies-8-cetacean-species)
  - [**12. Машинное обучение изолирует фонетический алфавит сперматозоидов, который очень похож на человеческий язык с более сильной информационно-носительной способностью**](#12-machine-learning-isolates-the-sperm-whale-phonetic-alphabet-highly-similar-to-human-language-with-stronger-information-carrying-capacity)
  - [**13. Модель PlantLncBoost достигает точности до 96% в межвидовых предсказаниях lncRNA**](#13-plantlncboost-model-achieves-up-to-96-accuracy-in-cross-species-lncrna-prediction)
  - [**14. Пирх 2.0 охватывает почти 15 000 видов, освежающих SOTA в обнаружении биоакустической классификации**](#14-perch-20-covers-nearly-15000-species-refreshing-sota-in-bioacoustic-classification-detection)
- [**ИИ + сельское хозяйство, лесное хозяйство и животноводство**](#ai-agriculture-forestry-animal-husbandry)
  - [**1. Использование конвульционных нейронных сетей для быстрого и точного оценки урожая риса**](#1-using-convolutional-neural-networks-for-rapid-and-accurate-rice-yield-estimation)
  - [**2. Модель, разработанная с помощью алгоритма YOLOv5 для мониторинга позы свиней и родов свиньи**](#2-model-designed-via-yolov5-algorithm-monitors-sow-posture-and-piglet-birth)
  - [**3. Объединение лабораторных наблюдений и машинного обучения для доказательства того, что ультразвуковые звуки, выделяемые подтянутыми помидорами и табачными растениями, могут путешествовать в воздухе**](#3-combining-laboratory-observation-and-machine-learning-to-prove-that-ultrasonic-sounds-emitted-by-stressed-tomato-and-tobacco-plants-can-travel-in-air)
  - [**4. Анализ изображений дрона + ИИ обнаруживает вредителей лесного хозяйства**](#4-drone--ai-image-analysis-detects-forestry-pests)
  - [**5. Компьютерное зрение + глубокое обучение разработаны для системы обнаружения слабости молочной коровы**](#5-computer-vision--deep-learning-developed-for-a-dairy-cow-lameness-detection-system)
- [**ИИ + метеорология**](#ai-meteorology)
  - [**1. Обзор: модели прогнозирования погоды машинного обучения, основанные на данных**](#1-review-data-driven-machine-learning-weather-forecasting-models)
  - [**2. Обзор: сбор данных из центров градных штормов и прогнозирование экстремальной погоды с использованием крупных моделей**](#2-review-collecting-data-from-hailstorm-centers-and-predicting-extreme-weather-using-large-models)
  - [**3. Создание новых алгоритмов для точного прогнозирования экстремальных осадков с использованием глобальных симуляций для решения штормов и машинного обучения**](#3-creating-new-algorithms-to-accurately-predict-extreme-precipitation-using-global-storm-resolving-simulations-and-machine-learning)
  - [**4. Случайная модель машинного обучения на базе леса CSU-MLP прогнозирует средне-размерную тяжелую погоду**](#4-random-forest-based-machine-learning-model-csu-mlp-predicts-medium-range-severe-weather)
  - [**5. Система прогнозирования погоды, основанная на данных от конца к концу Aardvark Weather ускоряет прогнозы в десятки раз по сравнению с традиционными методами**](#5-end-to-end-data-driven-weather-forecasting-system-aardvark-weather-speeds-up-predictions-by-dozens-of-times-compared-to-traditional-methods)
  - [**6. Система прогнозирования погоды машинного обучения FCN3 поддерживает ультрабытное одно-ГПУ вывод**](#6-machine-learning-weather-forecasting-system-fcn3-supports-ultra-fast-single-gpu-inference)
  - [**7. Индийская модель прогнозирования муссонов, основанная на 36 метеорологических станциях, обеспечивает хорошее прогнозирование в масштабах городов**](#7-indian-monsoon-forecasting-model-based-on-36-weather-stations-achieves-city-scale-fine-forecasting)
  - [**8. ACE2 завершает 4-месячный сезонный прогноз всего за 2 минуты.**](#8-ace2-completes-a-4-month-seasonal-forecast-in-just-2-minutes)
  - [**9. Выпущена дополнительная модель прогнозирования погоды VA-MoE, достигая эффективности SOTA с снижением параметров на 75%**](#9-incremental-weather-forecasting-model-va-moe-released-achieving-sota-performance-with-75-parameter-reduction)
  - [**10. Выпущена элюцидированная модель развертывания движения (ERDM), которая решает проблемы долгосрочного прогнозирования и поддерживает лидерство по сравнению с базовыми линиями EDM в среднесрочных и долгосрочных прогнозах**](#10-elucidated-rolling-diffusion-model-erdm-released-solving-long-term-forecasting-challenges-and-maintaining-a-lead-over-edm-baselines-in-medium-to-long-term-forecasts)
  - [**11. Выпущена новая модель латентной диффузии OmniCast, которая решает накопление ошибок в моделях авторегрессивного прогнозирования погоды**](#11-novel-latent-diffusion-model-omnicast-released-resolving-error-accumulation-in-autoregressive-weather-forecasting-models)
  - [**12. NVIDIA предлагает новый метод длинногизового дистилляции, который позволит преодолеть проблемы ИИ в долгосрочных прогнозах погоды**](#12-nvidia-proposes-a-novel-long-range-distillation-method-breaking-ai-bottlenecks-in-long-term-weather-forecasting)
  - [**13. Совместная группа предлагает модель Graph Neural Network SeaCast, которая позволит добиться ультрабыстрого регионального прогнозирования океанов**](#13-joint-team-proposes-graph-neural-network-model-seacast-achieving-ultra-fast-regional-ocean-forecasting)
- [**ИИ + астрономия**](#ai-astronomy)
  - [**1. Алгоритм PRIMO изучает правила распространения света вокруг черных дыр для восстановления более острых изображений черных дыр**](#1-primo-algorithm-learns-light-propagation-rules-around-black-holes-to-reconstruct-sharper-black-hole-images)
  - [**2. Обучение алгоритмов компьютерного зрения с помощью имитируемых данных для упрощения и "восстановления" астрономических изображений**](#2-training-computer-vision-algorithms-with-simulated-data-to-sharpen-and-restore-astronomical-images)
  - [**3. Использование алгоритма машинного обучения, не контролируемого астрономией, для обнаружения ранее не замеченных аномалий**](#3-using-unsupervised-machine-learning-algorithm-astronomaly-to-find-previously-overlooked-anomalies)
  - [**4. Метод, основанный на машинном обучении, для идентификации и извлечения параметров CME**](#4-machine-learning-based-method-for-cme-identification-and-parameter-extraction)
  - [**5. Глубокое обучение обнаруживает 107 случаев нейтральных линий поглощения углерода**](#5-deep-learning-discovers-107-cases-of-neutral-carbon-absorption-lines)
  - [**6. Модель StarFusion обеспечивает высокое пространственное разрешение и прогнозирование изображений**](#6-starfusion-model-achieves-high-spatial-resolution-image-prediction)
  - [**7. Метод создания спутниковых изображений, разработанный на основе SD3, создает крупнейший на сегодняшний день набор данных дистанционного зондирования, EcoMapper**](#7-satellite-image-generation-method-developed-based-on-sd3-constructing-the-largest-remote-sensing-dataset-to-date-ecomapper)
  - [**8. Геопространственная ИИ Земля ИИ фокусируется на 3 основных типах данных, улучшая возможности геопространственного рассуждения на 64%.**](#8-geospatial-ai-earth-ai-focuses-on-3-core-data-types-improving-geospatial-reasoning-capabilities-by-64)
  - [**9. Родилась первая астрономическая мультимодальная модель AION-1, предварительно обученная 200 миллионам астрономических целей**](#9-the-first-astronomical-multimodal-foundation-model-aion-1-is-born-pre-trained-on-200-million-astronomical-targets)
  - [**10. Новая трубопроводная линия, основанная на данных, точно идентифицирует 7 редких линзавых образцов из 810 000 квазаров, используя CNN.**](#10-novel-data-driven-pipeline-precisely-identifies-7-rare-lensed-samples-from-810000-quasars-using-cnn)
  - [**11. Команда ЕКА предлагает полунадзорный метод AnomalyMatch для эффективного отбора редких небесных тел из почти 100 миллионов записей Хаббла**](#11-esa-team-proposes-semi-supervised-method-anomalymatch-to-efficiently-screen-rare-celestial-bodies-from-nearly-100-million-hubble-records)
  - [**12. Университет Уорвика предлагает трубопровод RAVEN, подтверждающий 118 новых экзопланет**](#12-university-of-warwick-proposes-the-raven-validation-pipeline-confirming-118-new-exoplanets)
  - [**13. Университет Уорвика предлагает комплексную систему обучения для высокоточного прогнозирования астерозеизмических параметров для δ звезд Скути**](#13-university-of-warwick-proposes-an-ensemble-learning-framework-to-highly-accurately-predict-asteroseismic-parameters-for-δ-scuti-stars)
  - [**14. Испанская исследовательская группа предлагает систему StreakMind, использующую ИИ для автоматического обнаружения спутниковых полос в астрономических изображениях**](#14-spanish-research-team-proposes-the-streakmind-system-utilizing-ai-to-automatically-detect-satellite-streaks-in-astronomical-images)
- [**ИИ + стихийные бедствия**](#ai-natural-disaster)
  - [**1. Машинное обучение прогнозирует риск затопления земель в течение следующих 40 лет**](#1-machine-learning-predicts-land-subsidence-risk-over-the-next-40-years)
  - [**2. Семантическая сегментационная модель SCDUNet++ используется для картографирования сверканий земли**](#2-semantic-segmentation-model-scdunet-used-for-landslide-mapping)
  - [**3. Нейронные сети преобразуют 2D солнечные изображения в 3D реконструированные изображения**](#3-neural-networks-convert-2d-solar-images-into-3d-reconstructed-images)
  - [**4. Присоединительные нейронные сети анализируют факторы, влияющие на стихийные бедствия**](#4-additive-neural-networks-analyze-influencing-factors-in-natural-disasters)
  - [**5. Использование объяснительного ИИ для анализа различных географических факторов в Гиппсланде, Австралия**](#5-using-explainable-ai-to-analyze-various-geographical-factors-in-gippsland-australia)
  - [**6. Модель прогнозирования наводнений, основанная на машинном обучении**](#6-machine-learning-based-flood-forecasting-model)
  - [**7. ED-DLSTM обеспечивает прогнозирование наводнений в неконтролируемых районах**](#7-ed-dlstm-achieves-flood-prediction-in-unmonitored-areas)
  - [**8. Модель ChloroFormer предусматривает раннее предупреждение о цветении морских водорослей**](#8-chloroformer-model-provides-early-warning-of-marine-algal-blooms)
  - [**9. Первая большая языковая модель океана OceanGPT принята на ACL 2024! Подводный воплощенный ИИ становится реальностью**](#9-the-first-marine-large-language-model-oceangpt-accepted-by-acl-2024-underwater-embodied-ai-becomes-reality)
  - [**10. ИИ предсказывает тенденции глобального потепления**](#10-ai-predicts-global-warming-trends)
  - [**11. Новая модель GeoAI объясняет распределение потока поверхностного тепла на Тибетском плато**](#11-new-geoai-model-explains-surface-heat-flow-distribution-on-the-tibetan-plateau)
  - [**12. "Венхай" морская среда интеллектуальная прогнозирование крупной модели превосходит численное морское прогнозирование**](#12-wenhai-marine-environment-intelligent-forecasting-large-model-outperforms-numerical-marine-forecasting)
  - [**13. Университет Миннесоты предлагает модель машинного обучения, основанную на знаниях, FHNN, которая позволит осуществлять высокоточные прогнозы наводнений**](#13-university-of-minnesota-proposes-knowledge-guided-machine-learning-model-fhnn-realizing-high-precision-flood-forecasting)
  - [**14. Google выпустит версию 2 своей глобальной системы прогнозирования наводнений, что значительно продлит сроки прогнозирования**](#14-google-releases-version-2-of-its-global-flood-forecasting-system-significantly-extending-valid-forecast-times)
- [**Прочее**](#others)
  - [**1. Тактический помощник в футболе достигает 90% практической полезности в тактических макетах**](#1-tacticai-football-assistant-hits-90-practical-utility-in-tactical-layouts)
  - [**2. Снижающая диффузионную модель SPDiff позволяет моделировать движение толпы на большом расстоянии**](#2-denoising-diffusion-model-spdiff-enables-long-range-crowd-movement-simulation)
  - [**3. Интеллектуальные научные объекты способствуют изменению парадигмы в исследованиях**](#3-intelligent-scientific-facilities-drive-paradigm-shifts-in-research)
  - [**4. DeepSymNet представляет собой символические выражения, основанные на контролируемом обучении**](#4-deepsymnet-represents-symbolic-expressions-based-on-supervised-learning)
  - [**5. Большой языковой модель ChipNeMo помогает инженерам в проектировании чипов**](#5-large-language-model-chipnemo-assists-engineers-in-chip-design)
  - [**6. Альфагеометрия может решить геометрические проблемы**](#6-alphageometry-can-solve-geometry-problems)
  - [**7. Усиление обучения, применяемое в области городского пространственного планирования**](#7-reinforcement-learning-applied-to-urban-spatial-planning)
  - [**8. ChatArena Framework: Играть в Волку с большими языковыми моделями**](#8-chatarena-framework-playing-werewolf-with-large-language-models)
  - [**9. Обзор: 30 ученых опубликовали в Nature 10-летнюю ретроспективную книгу, которая демонстрирует, как ИИ перерабатывает научные парадигмы**](#9-review-30-scholars-co-publish-in-nature-10-year-retrospective-deconstructs-how-ai-reshapes-scientific-paradigms)
  - [**10. Итака помогает эпиграфам восстанавливать текст, хронологически и географически.**](#10-ithaca-assists-epigraphers-in-text-restoration-chronological-attribution-and-geographical-attribution)
  - [**11. ИИ в первых и обратных проблемах метаоптики, анализ данных на основе метасверхностных систем**](#11-ai-in-forward-and-inverse-problems-of-meta-optics-data-analysis-based-on-metasurface-systems)
  - [**12. Новый метод геопространственного искусственного интеллекта: географическая неврологическая сеть с весом логистического регрессия**](#12-a-new-geospatial-artificial-intelligence-method-geographically-neural-network-weighted-logistic-regression)
  - [**13. Использование моделей диффузии для генерации параметров нейронной сети, превращая пространственно-временное обучение нескольких снимков в проблему предварительной подготовки диффузионной модели**](#13-using-diffusion-models-to-generate-neural-network-parameters-transforming-spatiotemporal-few-shot-learning-into-a-diffusion-model-pre-training-problem)
  - [**14. Последние данные о AI4S от команды Фей-Фей Ли: 16 инновационных технологий, охватывающих биологию/материалы/здравоохранение/диагностику**](#14-latest-ai4s-insights-from-fei-fei-lis-team-16-innovative-technologies-summarized-covering-biologymaterialshealthcarediagnostics)
  - [**15. Модель osp-GNNWR точно прогнозирует цены на жилье в Ухане и описывает сложные пространственные процессы и географические явления**](#15-accurate-prediction-of-wuhan-housing-prices-osp-gnnwr-model-accurately-describes-complex-spatial-processes-and-geographical-phenomena)
  - [**16. Внедрение нулевого обучения для выпуска модели условной диффузии, оптимизированной для расшифровки костного сценария оракула**](#16-introducing-zero-shot-learning-to-release-a-conditional-diffusion-model-optimized-for-oracle-bone-script-decipherment)
  - [**17. Стэнфорд/Аппл и 23 других институтов выпускают эталон DCLM; модель фундамента работает наравне с Llama3 8B**](#17-stanfordapple-and-23-other-institutions-release-the-dclm-benchmark-foundation-model-performs-on-par-with-llama3-8b)
  - [**18. PoCo решает дилемму гетерогенности источника данных, позволяя роботам выполнять многозадачи гибко**](#18-poco-solves-the-data-source-heterogeneity-dilemma-enabling-robots-to-execute-multi-tasks-flexibly)
  - [**19. Набор данных из 140 000 изображений гадательных костей помогает команде получить награду за лучшую статью ACL**](#19-containing-140000-images-oracle-bone-script-dataset-helps-team-win-acl-best-paper-award)
  - [**20. Предлагая схему прогнозирования канала на основе предварительно подготовленных LLM, GPT-2 способствует физическому слою беспроводных коммуникаций**](#20-proposing-a-channel-prediction-scheme-based-on-pre-trained-llms-gpt-2-empowers-the-physical-layer-of-wireless-communications)
  - [**21. Первая модель сети генеративных враждебных действий для многошивной вышивки**](#21-the-first-generative-adversarial-network-model-for-multi-stitch-embroidery)
  - [**22. Быстрый автоматизированный инструментарий сканирования (FAST) эффективно получает информацию о образцах**](#22-fast-automated-scanning-toolkit-fast-efficiently-acquires-sample-information)
  - [**23. Модель Фонда популяционной динамики PDFM с открытым исходным кодом, точно предсказывающая уровень безработицы и бедности в США**](#23-population-dynamics-foundation-model-pdfm-open-sourced-precisely-predicting-us-unemployment-and-poverty-rates)
  - [**24. Модель глубокого обучения CatGWR оценивает пространственную нестациональность**](#24-deep-learning-model-catgwr-estimates-spatial-non-stationarity)
  - [**25. Первая в мире система VR-интервенции REVERIE преобразует здоровье мозга, тела и ума молодежи**](#25-worlds-first-vr-exercise-intervention-system-reverie-reshapes-youth-brain-body-mind-health)
  - [**26. Основываясь на более чем 176 тыс. данных о надписях, Эней впервые добился произвольной длины восстановления древних римских надписей**](#26-based-on-over-176k-inscription-data-aeneas-achieves-arbitrary-length-restoration-of-ancient-roman-inscriptions-for-the-first-time)
  - [**27. Панован также работает с нулевым редактированием видео**](#27-panoramic-video-generation-framework-panowan-also-handles-zero-shot-video-editing)
  - [**28. Интеллектуальная система классификации керамики на основе YOLOv11 интегрирует визуальное моделирование и экономический анализ, достигая классификации артефактов и оценки стоимости**](#28-yolov11-based-ceramic-classification-intelligent-framework-integrates-visual-modeling-and-economic-analysis-achieving-artifact-classification-and-value-estimation)
  - [**29. родился микроволновой мозг, одновременно обрабатывающий ультравысокоскоростные данные и беспроводной сигнал с точностью 75% при мощности 176 милливатт**](#29-microwave-brain-chip-born-simultaneously-processing-ultra-high-speed-data-and-wireless-signals-with-75-accuracy-at-176-milliwatts-power)
  - [**30. выпущен модель пространственно-временной импутации и прогнозирования STIMP, реализующая точные прогнозы распределения прибрежного хлорофилла-а**](#30-spatiotemporal-imputation-and-prediction-model-stimp-released-realizing-precise-predictions-of-coastal-chlorophyll-a-distribution)
  - [**31. MIT и другие достигают высокоточности прогнозирования плазменной динамики при условиях нескольких снимков на основе машинного обучения**](#31-mit-and-others-achieve-high-precision-prediction-of-plasma-dynamics-under-few-shot-conditions-based-on-machine-learning)
  - [**32. Reac-Discovery объединяет математическое моделирование, машинное обучение и автоматизированные эксперименты для решения проблемы универсальности самоходных лабораторных систем**](#32-reac-discovery-fuses-mathematical-modeling-machine-learning-and-automated-experiments-to-solve-the-universality-challenge-of-self-driving-laboratory-systems)
  - [**33. Внедряется первая система моделирования нейронов NOBLE, подтвержденная человеческими кортическими данными**](#33-the-first-neuron-modeling-framework-noble-validated-by-human-cortical-data-is-introduced)
  - [**34. Расположение изображений по геологической локализации LocDiff внедряется в сеть, что позволяет обеспечить глобальное точное позиционирование без сети и без справочной библиотеки**](#34-image-geolocation-framework-locdiff-goes-online-enabling-grid-free-and-reference-library-free-global-precision-positioning)
  - [**35. Машинное обучение в сочетании с py-GC-MS точно идентифицирует доказательства жизни в архейских скалах**](#35-machine-learning-combined-with-py-gc-ms-precisely-identifies-evidence-of-life-in-archean-rocks)
  - [**36. Команда Университета Цинхуа предлагает метод нейросимволической регрессии ND2 для автоматического получения сложных формул динамики сети**](#36-tsinghua-university-team-proposes-neuro-symbolic-regression-method-nd-to-automatically-derive-complex-network-dynamics-formulas)
  - [**37. Команда Университета Чжэцзян предлагает геологически ограниченный метод прогнозирования перспективности минералов, изображающий в явном виде анизотропию минерализации**](#37-zhejiang-university-team-proposes-geologically-constrained-mineral-prospectivity-prediction-method-explicitly-depicting-mineralization-anisotropy)
  - [**38. Цинхуа и команда Чикаго публикуют в Nature: инструменты ИИ расширяют влияние ученых, но сокращают фокус науки**](#38-tsinghua-and-uchicago-team-publishes-in-nature-ai-tools-expand-scientists-impact-but-contract-sciences-focus)
  - [**39. Команда UC предлагает увеличенный с ИИ микросхемный спектрометр, достигающий высокой спектральной верности в ультра-маленьком объеме**](#39-uc-team-proposes-ai-augmented-chip-scale-spectrometer-achieving-high-spectral-fidelity-in-an-ultra-small-volume)
  - [**40. Национальная лаборатория Оук-Ридж предлагает метод D-CHAG, существенно уменьшая память для многоканальных моделей фундамента**](#40-us-doe-oak-ridge-national-lab-proposes-d-chag-method-significantly-reducing-memory-footprint-for-multi-channel-foundation-models)
  - [**41. Команда полиматического ИИ предлагает модель непрерывного фундамента Walrus, установив рекорд в результате моделирования кросс-домены**](#41-polymathic-ai-team-proposes-continuum-foundation-model-walrus-setting-records-in-cross-domain-simulation-performance)
  - [**42. EPFL предлагает новую архитектуру DYNAMI-CAL GraphNet, физико-информированный GNN, точно моделирующий динамику многоцелей**](#42-epfl-proposes-novel-architecture-dynami-cal-graphnet-a-physics-informed-gnn-accurately-modeling-multi-body-dynamics)
  - [**43. MIT предлагает новый метод Wave-Former, достигающий высокоточной 3D-реконструкции полностью закрытых объектов**](#43-mit-proposes-novel-method-wave-former-achieving-high-precision-3d-reconstruction-of-completely-occluded-objects)
  - [**44. MIT предлагает DRiffusion проект-и-очистка параллельной структуры, реализуя беспропускное ускорение для вывода диффузионной модели**](#44-mit-proposes-driffusion-draft-and-refine-parallel-framework-realizing-lossless-acceleration-for-diffusion-model-inference)
  - [**45. Технология - Израильский технологический институт предлагает токены задач, позволяющие модели поведения гибко адаптироваться к конкретным задачам**](#45-technion---israel-institute-of-technology-proposes-task-tokens-allowing-behavior-foundation-models-to-flexibly-adapt-to-specific-tasks)
  - [**46. MIT и другие предлагают структуру EnergAIzer, обеспечивающую быструю и точную оценку мощности GPU для рабочих нагрузок ИИ**](#46-mit-and-others-propose-energaizer-framework-achieving-fast-and-accurate-gpu-power-estimation-for-ai-workloads)
  - [**47. UIUC предлагает гетерогенную структуру агентов Eywa, выходящую из границ языковых крупных моделей**](#47-uiuc-proposes-heterogeneous-agent-framework-eywa-breaking-through-the-limits-of-language-centric-large-models)
  - [**48. Стэнфордский университет и другие используют суррогатные модели LSTM для достижения 252x ускоренной моделирования нелинейной оптики второго порядка**](#48-stanford-university-and-others-use-lstm-surrogate-models-to-achieve-252x-accelerated-simulation-of-second-order-nonlinear-optics)

## **Предисловие**

С 2020 года научные проекты, представленные AlphaFold, выдвинули AI для науки (AI4S) на главный этап применения AI. В последние годы, от биофармацевтики до астрономии и метеорологии, а затем до фундаментальных дисциплин, таких как химия материалов, все стали новыми полеми битвы для AI.

В то время как все большее количество междисциплинарных талантов начинают применять технологии, такие как машинное обучение и глубокое обучение, к обработке данных и моделированию в своих исследовательских областях, в сочетании с усилением сотрудничества междисциплинарных исследовательских команд, возможности AI4S замечаются все большеми научными исследователями. Однако он еще не достиг цели масштабного применения. Многие вопросы, которые необходимо срочно решить, такие как улучшение воспроизводимости связанных исследований, снижение технического порога и улучшение качества данных.

В настоящее время, помимо университетов и исследовательских учреждений, активно изучающих AI4S, многие правительства и ведущие технологические компании также заметили потенциал ИИ для революции в научных исследованиях и инициировали соответствующие политические рекомендации и макеты. Можно сказать, что AI4S является неоспоримой общей тенденцией.

Как одно из первых сообществ, обративших внимание на ИИ для науки, "HyperAI" с радостью делится новейшими исследовательскими достижениями и результатами в целом, сопровождая рост отрасли. Мы надеемся, что интерпретируя передовые статьи и политику, больше команд сможет увидеть помощь ИИ для научных исследований, способствуя развитию ИИ для науки.

На сегодняшний день HyperAI интерпретирует и делится почти 200 статьями. Для удобства поиска мы классифицировали статьи по дисциплинам, отобразили издательские журналы и даты, и извлекали ключевые слова (исследовательские команды, связанные с ними исследования, наборы данных и т. Д.). Вы можете нажать на заголовки, чтобы перейти на страницу исследований на странице выделения статьи (в которой содержится полная ссылка на загрузку бумаги).

Этот документ будет представлен как проект с открытым исходным кодом. Мы будем постоянно обновлять статьи по интерпретации, и мы также приветствуем всех, чтобы представить отличные результаты исследований. Если у вашей команды / исследовательской группы есть потребности в отчетности, вы можете добавить WeChat: 神经星星 (WeChat ID: Hyperai01).

## **ИИ + биофармацевтика**

### **1. [AdaDR превосходит множество методов ссылки в переположительстве лекарственных средств](https://hyper.ai/news/30434)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30434](https://hyper.ai/news/30434)
- **Исследовательская группа:** Исследовательская группа Мин Ли в Центральном Южном университете
- **Связанные исследования:** Гдатосборник, Гдатосборник, Лдатосборник, LRSSL, ГКН-фреймворк, AdaDR
- **Журнал публикации:** Биоинформатика, 2024.01
- **Ссылка на статью:** [Переположение лекарств с адаптивными графическими конвульционными сетями](https://academic.oup.com/bioinformatics/article/40/1/btad748/7467059)

### **2. [IMN4NPD ускоряет дерепликацию обширных кластеров в молекулярных сетях, обеспечивая анонсации для самоцепочек и паров узлов](https://hyper.ai/news/30363)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30363](https://hyper.ai/news/30363)
- **Исследовательская группа:** Исследовательская группа Шао Лю в Центральном Южном университете
- **Связанные исследования:** Спектральная база данных МС/МС, Структурная база данных, molDiscovery, NPClassifier, t-SNE
- **Журнал публикации:** Аналитическая химия, 2024.02
- **Ссылка на статью:** [IMN4NPD: интегрированный молекулярный рабочий процесс для дерепликации природных продуктов](https://doi.org/10.1021/acs.analchem.3c04746)

### **3. [Глубокая генеративная модель MIDAS для мозаической интеграции одноклеточных многоомических данных](https://hyper.ai/news/29785)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29785](https://hyper.ai/news/29785)
- **Исследовательская группа:** Исследовательская группа Сяомин Инга в Академии военных медицинских наук
- **Связанные исследования:** IPBMC, полный набор данных по догмам, полный набор данных по науке, MMIDAS, самоконтролируемое обучение, информационно-теоретические подходы, глубокие нейронные сети, SGVB, одноклеточные многоомические мозаические данные
- **Журнал публикации:** Природа Биотехнологии, 2024.01
- **Ссылка на статью:** [Мозаическая интеграция и передача знаний одноклеточных мультимодальных данных с MIDAS](https://www.nature.com/articles/s41587-023-02040-y)

### **4. [ResGen: 3D молекулярная модель генерации на основе белковых карман](https://hyper.ai/news/29026)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29026](https://hyper.ai/news/29026)
- **Исследовательская группа:** Исследовательская группа Тинджун Ху в университете Чжэцзян
- **Связанные исследования:** Комплект данных CrossDock2020, глобальный авторегресивный, атомный авторегресивный, параллельное многоуровневое моделирование, SBMG. 8 раз быстрее современных технологий.
- **Журнал публикации:** Интеллект машины природы, 2023.09
- **Ссылка на статью:** [ResGen - это модель 3D-молекулярного поколения, основанная на параллельном многомасштабном моделировании](https://www.nature.com/articles/s42256-023-00712-7)

### **5. [Большие модели + машинное обучение для высокоточного прогнозирования энзимнокинетических параметров](https://hyper.ai/news/29000)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29000](https://hyper.ai/news/29000)
- **Исследовательская группа:** Исследовательская группа Сяочжоу Лоу в CAS
- **Связанные исследования:** kcat/Km набор данных, набор данных постоянной системы Майкелиса, набор данных pH и температуры, набор данных DLKcat, система UniKP, ProtT5-XL-UniRef50, модель трансформатора SMILES, модели ансамбля, Случайный лес, чрезвычайно случайные деревья, модели линейной регрессии
- **Журнал публикации:** Сообщения о природе, 2023.12
- **Ссылка на статью:** [UniKP: единая система для прогнозирования кинетических параметров ферментов](https://www.nature.com/articles/s41467-023-44113-1)

### **6. [MIT использует глубокое обучение для открытия новых антибиотиков](https://hyper.ai/news/28886)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28886](https://hyper.ai/news/28886)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** База данных Мюкле, база данных Института, графика нейронной сети, глубокое обучение.
- **Журнал публикации:** Природа, 2023 год.12
- **Ссылка на статью:** [Открытие структурного класса антибиотиков с объясняемым глубоким обучением](https://www.nature.com/articles/s41586-023-06887-8)

### **7. [Нейронные сети расшифруют селективность соединения белка GPCR-G](https://hyper.ai/news/28361)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28361](https://hyper.ai/news/28361)
- **Исследовательская группа:** Исследовательская группа в Университете Флориды
- **Связанные исследования:** Двойная классификация нейронных сетей, машинное обучение, неконтролируемые модели глубокого обучения.
- **Журнал публикации:** Отчеты о работе сотовой связи, 2023.09
- **Ссылка на статью:** [Правила и механизмы, регулирующие селективность соединения G-белок G-белок GPCR](https://doi.org/10.1016/j.celrep.2023.113173)

### **8. [Macformer макроциклизирует ациклический препарат федратиниб](https://hyper.ai/news/28189)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28189](https://hyper.ai/news/28189)
- **Исследовательская группа:** Исследовательская группа Гонлин Ли в Восточно-Китайском университете науки и технологии
- **Связанные исследования:** Набор данных ZINC, база данных ChEMBL, модели глубокого обучения, архитектура трансформатора, Macformer
- **Журнал публикации:** Сообщение о природе, 2023.07
- **Ссылка на статью:** [Макроциклизация линейных молекул путем глубокого обучения для облегчения обнаружения кандидатов в макроциклические препараты](https://www.nature.com/articles/s41467-023-40219-8)

### **9. [Сеть регрессии + CGMD предсказывает свойства самособрания десятков миллиардов пептидов](https://hyper.ai/news/26408)**

- **Ключевой результат исследования:** [https://hyper.ai/news/26408](https://hyper.ai/news/26408)
- **Исследовательская группа:** Исследовательская группа Вэнбина Ли в Университете Вестлейка
- **Связанные исследования:** Латинский гиперкубный образцов, модель CGMD, модель прогнозирования AP, модель Transformer, MLP, TRN. Получил AP пентапептидов и декапептидов.
- **Журнал публикации:** Уровень научной подготовки, 2023.09
- **Ссылка на статью:** [Глубокое обучение позволяет обнаружить пептиды с более чем 10 триллионами последовательностей](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202301544)

### **10. [Неконтролируемое обучение предсказывает 71 миллион мутаций генов](https://hyper.ai/news/26154)**

- **Ключевой результат исследования:** [https://hyper.ai/news/26154](https://hyper.ai/news/26154)
- **Исследовательская группа:** Исследовательская группа Google DeepMind
- **Связанные исследования:** Сборник данных ClinVar, AlphaFold, обучение с слабыми знаками, обучение без надзора, AlphaMissense
- **Журнал публикации:** Наука, 2023.09
- **Ссылка на статью:** [Точный прогноз эффекта вариантов миссенса на протяжении всего протеома с помощью AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492)

### **11. [Анализ запаха ИИ разработан на основе графических нейронных сетей (GNN)](https://hyper.ai/news/25952)**

- **Ключевой результат исследования:** [https://hyper.ai/news/25952](https://hyper.ai/news/25952)
- **Исследовательская группа:** Osmo, отключенная компания Google Research
- **Связанные исследования:** база данных GS-LF, GNN, алгоритм байесовской оптимизации. В оценках 53% химических молекул и 55% дескрипторов запахов система превзошла людей.
- **Журнал публикации:** Наука, 2023.08
- **Ссылка на статью:** [Основная карта запаха объединяет различные задачи в восприятии запаха](https://www.science.org/doi/full/10.1126/science.ade4401)

### **12. [Скрининг нейронных сетей графики на безопасные и высокоэффективные ингредиенты против старения](https://hyper.ai/news/25822)**

- **Ключевой результат исследования:** [https://hyper.ai/news/25822](https://hyper.ai/news/25822)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** Действительно положительный показатель модели Chemprop составил 11,6%, что выше, чем 1,9% в ручном скрининге.
- **Журнал публикации:** Сообщения о природе, 2023.05
- **Ссылка на статью:** [Открытие маломолекулярных сенолитиков с глубокими нейронными сетями](https://www.nature.com/articles/s43587-023-00415-z)

### **13. [Машинное обучение количественно анализирует количество и место высвобождения дофамина](https://hyper.ai/news/25153)**

- **Ключевой результат исследования:** [https://hyper.ai/news/25153](https://hyper.ai/news/25153)
- **Исследовательская группа:** Исследовательская группа в Калифорнийском университете в Беркли
- **Связанные исследования:** СВМ, РФ, машинное обучение. Точность определения интенсивности стимуляции достигла 0,832, а точность для области мозга, освобождающей дофамин, была 0,708.
- **Журнал публикации:** АКС Химическая нейрология, 2023.06
- **Ссылка на статью:** [Идентификация нейронных сигналов сигнализации дофамина с помощью машинного обучения](https://pubs.acs.org/doi/full/10.1021/acschemneuro.3c00001)

### **14. [Машинное обучение обнаруживает три антивозрастных препарата](https://hyper.ai/news/24578)**

- **Ключевой результат исследования:** [https://hyper.ai/news/24578](https://hyper.ai/news/24578)
- **Исследовательская группа:** Доктор Джеймс Л. Киркленд и команда в клинике Майо
- **Связанные исследования:** Машинное обучение, модель Random Forest (RF), 5-кратная перекрестная проверка.
- **Журнал публикации:** Сообщения о природе, 2023.06
- **Ссылка на статью:** [Открытие Senolytics с использованием машинного обучения](https://www.nature.com/articles/s41467-023-39120-1)

### **15. [Экран глубокого обучения для новых антибиотиков, ингибирующих Acinetobacter baumannii](https://hyper.ai/news/24499)**

- **Ключевой результат исследования:** [https://hyper.ai/news/24499](https://hyper.ai/news/24499)
- **Исследовательская группа:** Исследовательские команды в Университете Макмастера и МИТ
- **Связанные исследования:** В лаборатории "Броуд-институт" проведена проверка высокопроизводительной суббиблиотеки машинного обучения, глубокого обучения.
- **Журнал публикации:** Природа Химическая биология, 2023.05
- **Ссылка на статью:** [Открытие антибиотика, направленного на глубокое обучение, направленного на Acinetobacter baumannii](https://www.nature.com/articles/s41589-023-01349-8#access-options)

### **16. [Модели машинного обучения, применяемые для прогнозирования тиражности биоинка](https://hyper.ai/news/24237)**

- **Ключевой результат исследования:** [https://hyper.ai/news/24237](https://hyper.ai/news/24237)
- **Исследовательская группа:** Исследовательские команды Университета Сантьяго-де-Компостелы и UCL
- **Связанные исследования:** Модели машинного обучения, ANN, SVM, RF, kappa, R2, MAE. Точность достигла 97,22%.
- **Журнал публикации:** Международный журнал фармацевтики: X, 2023.12
- **Ссылка на статью:** [Прогнозирование результатов фармацевтической чернильной печати с использованием машинного обучения](https://www.sciencedirect.com/science/article/pii/S2590156723000257)

### **17. [Машинное обучение отличает плюрипотентные стволовые клетки](https://hyper.ai/news/23940)**

- **Ключевой результат исследования:** [https://hyper.ai/news/23940](https://hyper.ai/news/23940)
- **Исследовательская группа:** Исследовательские группы Ян Чжао и Ю Чжан в Пекинском университете, совместно с Исследовательской группой Иян Лю в Пекинском университете Цзяотун
- **Связанные исследования:** Живая камера, машинное обучение, слабо контролируемые модели, модель глубокого обучения pix2pix. Увеличение эффективности дифференцирования с 21,6% ± 2,7% до 88,8% ± 10,5%.
- **Журнал публикации:** Селловое открытие, 2023.06
- **Ссылка на статью:** [Стратегия машинного обучения на основе живой клетки изображения для снижения изменчивости систем дифференцирования ПСК](https://www.nature.com/articles/s41421-023-00543-1)

### **18. [Модель машинного обучения предсказывает скорость выделения лекарств в длительных инъекционных таблетках](https://hyper.ai/news/33892)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33892](https://hyper.ai/news/33892)
- **Исследовательская группа:** Исследовательская группа Университета Торонто
- **Связанные исследования:** MLR, Lasso, PLS, DT, RF, LGBM, XGB, AutoNGB, SVR, k-NN, NN, заложенная перекрестная валидация, алгоритм кластеринга самых отдаленных соседей.
- **Журнал публикации:** Сообщения о природе, 2023.01
- **Ссылка на статью:** [Модели машинного обучения для ускорения разработки полимерных длительнодействующих инъекционных устройств](https://www.nature.com/articles/s41467-022-35343-w)

### **19. [Алгоритм машинного обучения эффективно предсказывает противомалярийные свойства растений](https://hyper.ai/news/33883)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33883](https://hyper.ai/news/33883)
- **Исследовательская группа:** Королевские ботанические сады, Кью и исследовательская группа Университета Сент-Эндрюса
- **Связанные исследования:** Логит, SVC, XGB, BNN, алгоритмы GridSearchCV, 10-кратная расслоенная перекрестная валидация, итерации Маркова- Chain Monte Carlo. Точность 0,67.
- **Журнал публикации:** Границы в области растений, 2023.05
- **Ссылка на статью:** [Машинное обучение улучшает прогнозирование растений как потенциальных источников противомалярийных препаратов](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10248027)

### **20. [Метод машинного обучения предсказывает иммуногенность вирусных фрагментов белка](https://hyper.ai/news/30786)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30786](https://hyper.ai/news/30786)
- **Исследовательская группа:** Исследовательская группа Дзин Ли в университете Бэйханга
- **Связанные исследования:** База данных белков UniProt, база данных Protegen, ансамбль машинного обучения подход VirusImmu, RF, XGBoost, kNN, случайная пробовая перекрестная проверка.
- **Журнал публикации:** биоРxiv, 2023.11
- **Ссылка на статью:** [VirusImmu: новый комплексный подход машинного обучения для прогнозирования вирусной иммуногенности](https://www.biorxiv.org/content/10.1101/2023.11.23.568426v1)

### **21. [Генерирующий ИИ использовался для разработки новых антибиотиков](https://hyper.ai/news/31421)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31421](https://hyper.ai/news/31421)
- **Исследовательская группа:** Коллектив Университета Макмастера и Стэнфордского университета
- **Связанные исследования:** Фармакон-1760 библиотека, база данных Drug Repurposing Hub, синтетический набор скрининга малых молекул, Monte Carlo Tree Search, генерирующая модель ИИ SyntheMol.
- **Журнал публикации:** Интеллект машины природы, 2024.03
- **Ссылка на статью:** [Генерирующий ИИ для проектирования и проверки легко синтезируемых и структурно новейших антибиотиков](https://www.nature.com/articles/s42256-024-00809-7 )

### **22. [Автоматизированная, высокоскоростная, многомерная система отслеживания одночастиц, основанная на глубоком обучении](https://hyper.ai/news/31341)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31341](https://hyper.ai/news/31341)
- **Исследовательская группа:** Команда профессора Нинга Фанга в Университете Сиамена
- **Связанные исследования:** Многомерные изобразительные устройства, двойная фокусная плоскость изображения, паралаксовая микроскопия, многомерное изобразительное оборудование, модели конвульциональной нейронной сети, устойчивость к шуму и прочность.
- **Журнал публикации:** Интеллект машины природы, 2024.03
- **Ссылка на статью:** [Автоматизированное многомерное отслеживание одиночных частиц в живых клетках с помощью глубокого обучения](https://doi.org/10.1021/acs.nanolett.3c04870)

### **23. [Рамочная система машинного обучения ProEnsemble: оптимизация комбинаций продвигателей эволюционных путей](https://hyper.ai/news/30594)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30594](https://hyper.ai/news/30594)
- **Исследовательская группа:** Команда Сяочжоу Лоу в CAS
- **Связанные исследования:** Синтетическая биология, геноэпистаз, автоматические платформы, 10-кратная перекрестная валидация, ансамбльные модели, регрессор регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрессирования регрес
- **Журнал публикации:** ПРОДУГНАЯ НАЗВЯ, 2024.02
- **Ссылка на статью:** [Эволюция путем стратегии отключения от отключения от отключения от отключения от отключения от отключения от отключения от отключения от отключения от отключения от отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения отключения от](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202306935)

### **24. [Нейронная сеть микроэкологических графиков ProtLGN направляет эволюцию белка](https://hyper.ai/news/32246)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32246](https://hyper.ai/news/32246)
- **Исследовательская группа:** Исследовательская группа Лян Хонга в Шанхайском университете Цзяо Тонг
- **Связанные исследования:** Нейронная сеть графов, осознающая микроэкологию, сети, определяющие графики легкого веса, самоконтролируемые дотренировки, эквивалентные нейронные сети графов. Более 40% разработанных PROTLGN однозначных мутантных белков превосходили своих коллег дикого типа.
- **Журнал публикации:** ДНЯЛЬ ИНФОРМАТИЧЕСКОГО ДНЯЛЯ И НАМОДЛЯВО, 2024.04
- **Ссылка на статью:** [Протеинотехника с легким графиком, отрицающим нейронные сети](https://pubs.acs.org/doi/10.1021/acs.jcim.4c00036)

### **25. [Модель глубокого обучения AlphaPPIMd: исследование конформационных комплексов белко-белочных комплексов](https://hyper.ai/news/32435)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32435](https://hyper.ai/news/32435)
- **Исследовательская группа:** Команда Джанмин Ван в Университете Йонсей
- **Связанные исследования:** Глубокое обучение, генерирующее ИИ, Трансформатор, генерирующее обучение нейронной сети, молекулярная динамика, комплексный набор траекторий barnase-barstar, Банк данных белка, модель AlphaPPIMd, механизм самовнимания, модуль оптимизации функций, баллы внимания, модель полностью атома. Средняя точность обучения была 0,995, а средняя точность проверки была 0,999.
- **Журнал публикации:** Журнал химической теории и вычислений, 2024.05
- **Ссылка на статью:** [Исследование конформационных комплексов белко-белочебного комплекса с генерирующей моделью на основе трансформатора](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00255)

### **26. [Новый опухолевой подавляющий белковый деградирующий дп53м ингибирует распространение раковых клеток](https://hyper.ai/news/32527)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32527](https://hyper.ai/news/32527)
- **Исследовательская группа:** Команда профессора Сиджин Ву в Университете Сиань Цзяотун-Ливерпуль, колледже фармацевтики Хуиху, и команда профессора Сонгбо Си и профессора Дианшен Чжун в Общевой больнице Медицинского университета Тяньцзинь
- **Связанные исследования:** Симуляция MD, итеративный молекулярный метод, управляемый доком по-после SELEX. dp53m специально распознает белк p53-R175H и деградирует его.
- **Журнал публикации:** Научный бюллетени, 2024.05
- **Ссылка на статью:** [Протока на основе аптамара ДНК для точной терапии рака, вызванного мутантами горячего точки p53-R175H](https://www.sciencedirect.com/science/article/pii/S2095927324003517)

### **27. [Лучшая студенческая статья CVPR! Мультимодальная модель BioCLIP достигает обучения с нулевым числом примеров](https://hyper.ai/news/32544)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32544](https://hyper.ai/news/32544)
- **Исследовательская группа:** Команда Джимана Ву в Университете штата Огайо
- **Связанные исследования:** Совокупность данных биоизображения TreeOfLife-10M, мультимодальные модели, компьютерное зрение, кодировщик зрения, текстовый кодировщик, авторегрессивная модель языка.
- **Журнал публикации:** СРКП 2024, 2024.02
- **Ссылка на статью:** [BIoCLIP: модель "Видение" для дерева жизни](https://openaccess.thecvf.com/content/CVPR2024/html/Stevens_BioCLIP_A_Vision_Foundation_Model_for_the_Tree_of_Life_CVPR_2024_paper.html)

### **28. [100 миллионов параметров! Фундаментальная клеточная модель scFoundation одновременно моделирует 20 000 генов](https://hyper.ai/news/32623)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32623](https://hyper.ai/news/32623)
- **Исследовательская группа:** Профессор Сюэгун Чжан (Университет Цинхуа), профессор Цзянчжу Ма (Tsinghua AIR) и доктор Ле Сон (Биокарта)
- **Связанные исследования:** Модель AI-клеточного фундамента, человеческие одноклеточные омики данных DISCO, базы данных EMBL-EBI, наборы данных GEO, наборы данных Single Cell Portal, наборы данных HCA, наборы данных hECA, Трансформатор, асимметричная структура кодера-декодера, векторные модули, моделирование RDA.
- **Журнал публикации:** Методы природы, 2024.06
- **Ссылка на статью:** [Масштабная модель фундамента одноклеточной транскриптомики](https://www.nature.com/articles/s41592-024-02305-7)

### **29. [Принятая ICML, модель белкового языка ESM-AA превосходит традиционную SOTA](https://hyper.ai/news/32674)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32674](https://hyper.ai/news/32674)
- **Исследовательская группа:** Профессор Хао Чжоу (Университет Цинхуа), совместно с Пекинским университетом, Нанкинским университетом и Shuimu BioSciences
- **Связанные исследования:** Совокупность данных о белках AlphaFold DB, совокупность данных о белках Dp и молекулярный совокупность данных Dm, декомпрессия, многомасштабное моделирование маскированного языка.
- **Журнал публикации:** МКМЛ 2024, 2024.06
- **Ссылка на статью:** [ESM All-Atom: многомасштабная модель языка белка для единого молекулярного моделирования](https://icml.cc/virtual/2024/poster/35119)

### **30. [Алгоритм SPACE опубликован в журнале Cell! Возможности обнаружения тканевых модулей превосходят аналогичные инструменты](https://hyper.ai/news/32738)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32738](https://hyper.ai/news/32738)
- **Исследовательская группа:** Группа Цзянфэнь Чжан в университете Цинхуа
- **Связанные исследования:** Пространственная транскриптомика, набор данных мыши STARmap PLA, набор данных мыши MERFISH AB, набор данных мыши WB MERFISH, набор данных Xenium human BC, набор данных NSCLC человека CosMx, набор данных мозга человека Visium, кодеры, декодеры графиков близости, декодеры генной экспрессии, пространственная близость, самоконтрольное обучение.
- **Журнал публикации:** Системы клеток, 2024.06
- **Ссылка на статью:** [Открытие модулей тканей в данных пространственной транскриптомики одноклеточного разрешения через встроение клеток, осознающих взаимодействие клеток](https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00124-8)

### **31. [Новые прорывы на основе AlphaFold показывают динамическое разнообразие белков](https://hyper.ai/news/33075)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33075](https://hyper.ai/news/33075)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** Технология совпадения потоков, модели белкового языка, нейронные сети, AlphaFold, ESMFold.
- **Журнал публикации:** МКМЛ 2024, 2024.06
- **Ссылка на статью:** [AlphaFold сочетает сходство потока для создания ансамблей белков](https://openreview.net/forum?id=rs8Sh2UASt)

### **32. [P450 Диффузия: метод разработки ферментов P450 De novo, разработанный на основе моделей диффузии](https://hyper.ai/news/33057)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33057](https://hyper.ai/news/33057)
- **Исследовательская группа:** Группа Хуйфенга Цзян и Цзян Ченга в Институте промышленной биотехнологии в Тяньцзине, CAS
- **Связанные исследования:** Направленная эволюция, модели диффузии, глубокое обучение, дезонирующие модели вероятности диффузии, три-точковое закрепление, модели диффузии с тонким настройкой, предварительное обучение. Улучшенная каталитическая способность в 3,5 раза.
- **Журнал публикации:** Исследования, 2024.07
- **Ссылка на статью:** [Проектирование энзима цитохром P450 путем сжатия каталитического кармана в диффузионной модели](https://spj.science.org/doi/10.34133/research.0413)

### **33. [Эквивариантные нейронные сети графики, используемые для прогнозирования места связывания целей белка, повышающие производительность на 20%](https://hyper.ai/news/32957)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32957](https://hyper.ai/news/32957)
- **Исследовательская группа:** Исследовательская группа в Школе искусственного интеллекта Гаолинга, Университет Ренмина Китая
- **Связанные исследования:** E(3) эквивалентные графические нейронные сети, Конвульционные нейронные сети, EquiPocket Framework, сцпдб-данный набор, PDBbind-данный набор, COACH 420-данный набор, HOLO4K-данный набор, модули моделирования местной геометрии, глобальные модули моделирования структурной структуры, модули передачи поверхностной информации.
- **Журнал публикации:** МТСО 2024 г., 2024.07
- **Ссылка на статью:** [EquiPocket: нейронная сеть E(3)-эквивариантных геометрических графиков для прогнозирования связывающих лиганды сайтов](https://openreview.net/forum?id=1vGN3CSxVs)

### **34. [Всего 20 экспериментальных точек — важный этап для ИИ в белковой инженерии! FSFP эффективно оптимизирует предварительно обученные белковые модели](https://hyper.ai/news/32822)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32822](https://hyper.ai/news/32822)
- **Исследовательская группа:** Группа профессора Лян Хонга в Шанхайском университете Цзяо Тонг совместно с командой Пан Тан в Шанхайской лаборатории искусственного интеллекта
- **Связанные исследования:** Совокупность данных о мутациях белка ProteinGym, предварительно обученные модели языка белка, мета-трансферное обучение, обучение ранжированию (LTR), параметроэффективное настройка, технология LTR, стратегия обучения FSFP, методы мета-учения, агностические модели.
- **Журнал публикации:** Сообщения о природе, 2024.07
- **Ссылка на статью:** [Улучшение эффективности моделей белковых языков с минимальными данными из wet-lab посредством нескольких выпусков обучения](https://doi.org/10.1038/s41467-024-49798-6)

### **35. [Передаваемая модель глубокого обучения идентифицирует несколько типов модификаций РНК, что значительно снижает вычислительные затраты](https://hyper.ai/news/32745)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32745](https://hyper.ai/news/32745)
- **Исследовательская группа:** Группа ассоциированного профессора Сианг Ю в Шанхайском университете Цзяо Тонг совместно с командой Джун Яна/Хонгсия Ван в Шанхайском ботаническом саду Чэншан
- **Связанные исследования:** Передаваемая модель глубокого обучения TandemMod, анкета данных о транскрипции in vitro ELIGOS, анкета Curlcake, анкета данных о эпитранскриптоме IVET, 1D CNN, модули Bi-LSTM, механизмы внимания, полностью подключенные классификаторы.
- **Журнал публикации:** Сообщения о природе, 2024.05
- **Ссылка на статью:** [Переводный обучение позволяет идентифицировать множество типов модификаций РНК с использованием нанопорового прямого секвенирования РНК](https://www.nature.com/articles/s41467-024-48437-4)

### **36. [InstructProtein: Сопоставление белкового языка с человеческим с помощью инструкций знаний](https://hyper.ai/news/33697)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33697](https://hyper.ai/news/33697)
- **Исследовательская группа:** Группа Хуаджуна Чен и Цзян Чжан в университете Чжэцзян
- **Связанные исследования:** LLM, наборы данных инструкции о белке, наборы данных о генетической онтологии (GO), Инструкция протеина, графики знаний, прогноз локализации белка, прогноз функции белка, прогноз способности связывания белка металлическими ионами.
- **Журнал публикации:** ACL 2024, 2023.10
- **Ссылка на статью:** [ИнструкцияПротеины: сопоставление языка человека и белка с помощью инструкции знаний](https://arxiv.org/abs/2310.03269)

### **37. [Фреймворк генерирования белка-текст ProtT3 позволяет перекрестную интерпретацию белковых данных и текстовой информации](https://hyper.ai/news/33546)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33546](https://hyper.ai/news/33546)
- **Исследовательская группа:** Сианг Ван в USTC совместно с командой Цзиюань Лю в НУС и исследователями Университета Хоккайдо
- **Связанные исследования:** Кросмодальные проекторы, модели языка белка, наборы данных Swiss-Prot и ProteinKG25, наборы данных PDB-QA.
- **Журнал публикации:** ACL 2024, 2023.05
- **Ссылка на статью:** [ProtT3: Повышение уровня белка в текст для понимания белка на основе текста](https://arxiv.org/abs/2405.12564)

### **38. [Модель CPDiffusion проектирует функциональные белки полностью автоматически и с очень низкой стоимостью](https://hyper.ai/news/34692)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34692](https://hyper.ai/news/34692)
- **Исследовательская группа:** Группа Лян Хонг в Шанхайском университете Цзяо Тонг
- **Связанные исследования:** Протеинотехника, вероятность диффузии, модели модели, аминокислоты, графика нейронных сетей, вспомогательный дизайн лекарств, модели языка белка, набор данных CATH 4.2.
- **Журнал публикации:** Оригинальное название:
- **Ссылка на статью:** [Условное моделирование диффузии белка генерирует искусственные программируемые энденуклеазные последовательности с повышенной активностью](https://www.nature.com/articles/s41421-024-00728-2)

### **39. [Новый метод обнаружения протеиновых гомологов, основанный на моделях языка белка и методах интенсивного извлечения](https://hyper.ai/news/34225)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34225](https://hyper.ai/news/34225)
- **Исследовательская группа:** Ю Ли (CUHK), Сики Сун (Фуданский университет и Шанхайская лаборатория искусственного интеллекта) и Марк Герстин (Яльский университет)
- **Связанные исследования:** Протеиновая инженерия, модели языка белка, методы плотного извлечения, плотные гомологи, гибридная модель DHR-meta, набор данных UR90, алгоритм JackHMMER, набор данных BFD/MGnify, метод DHR. Улучшение чувствительности обнаружения протеиновых гомологов на 56%.
- **Журнал публикации:** Природа Биотехнологии, 2024.08
- **Ссылка на статью:** [Быстрое и чувствительное обнаружение белковых homologs с использованием глубокого плотного извлечения](https://doi.org/10.1038/s41587-024-02353-6)

### **40. [AlphaProteo эффективно разрабатывает целевые белковые связующие вещества, повышая аффинитет в 300 раз](https://hyper.ai/news/34214)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34214](https://hyper.ai/news/34214)
- **Исследовательская группа:** DeepMind, Институт Фрэнсис Крик
- **Связанные исследования:** Протеиноведение, модели языка белка, проектирование лекарств ИИ, целевые белки, инструменты ИИ, модель машинного обучения АльфаПротео, проектирование белковых связующих устройств VEGF-A, генератор, фильтр.
- **Журнал публикации:** "ДипМйнд", 2024.09
- **Ссылка на статью:** [AlphaProteo генерирует новые белки для биологических и медицинских исследований](https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)

### **41. [Новая модель языка белка DePLM превосходит модели SOTA в прогнозировании мутационного эффекта](https://hyper.ai/news/34954)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34954](https://hyper.ai/news/34954)
- **Исследовательская группа:** Профессор Хуажун Чен и доктор Цзян Чжан из Университета Чжэцзян
- **Связанные исследования:** Противопоказание модели языка белка (DePLM), ансамбль глубокого мутационного сканирования (DMS) ProteinGym, наборы данных DMS, случайная перекрестная проверка, эксперименты генерализации, расширение моделей диффузии с использованием сортировочной информации для деноминации эволюционной информации, сортировка генерируемых алгоритмом траекторий, модель PromptProtein.
- **Журнал публикации:** НейрИПС 2024, 2024.11
- **Ссылка на статью:** [DePLM: отрицание моделей языка белка для оптимизации собственности](https://neurips.cc/virtual/2024/poster/95517)

### **42. [Геометрическая глубокая генеративная модель DynamicBind позволяет прогнозировать динамическое докирование белка](https://hyper.ai/news/34894)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34894](https://hyper.ai/news/34894)
- **Исследовательская группа:** Группа Шуанцзя Чжэнь в Шанхайском университете Цзяо Тонг, Галиксир, университете Сун Ят-сен, университете Райса
- **Связанные исследования:** Набор данных PDBbind, набор тестов MDT, модели глубокой диффузии, технология эквивалентной геометрической нейронной сети, структуры формата PDB, формат лиганда малых молекул, модули оценки контактно-LDDT (cLDDT), структуры AlphaFold, модули прогнозирования аффинити, генерирующий ИИ.
- **Журнал публикации:** Сообщения о природе, 2024.02
- **Ссылка на статью:** [DynamicBind: прогнозирование специфической структуры белко-лигандового комплекса с глубокой эквивалентной генерирующей моделью](https://www.nature.com/articles/s41467-024-45461-2)

### **43. [Выявление наркотиков Большая языковая модель Y-Mol полностью превосходит LLaMA2](https://hyper.ai/news/35572)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35572](https://hyper.ai/news/35572)
- **Исследовательская группа:** Университет Хунань, Университет Центрального Юга, Университет Нормального Хунань, Университет Сяньтан
- **Связанные исследования:** Многопрофильный биомедицинский LLM, основанный на знаниях Y-Mol, PubMed text corpus, DrugBank benchmark dataset, DrugCentral benchmark dataset, LLaMA2-7b LLM.
- **Журнал публикации:** АрXiv, 2024.10
- **Ссылка на статью:** [Y-Mol: многоуровневая модель большого языка, основанная на биомедицинских знаниях, для разработки лекарств](https://doi.org/10.48550/arXiv.2410.11550)

### **44. [Универсальная молекулярная обратная складная модель UniIF дополнительно дополняет AlphaFold 3](https://hyper.ai/news/35781)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35781](https://hyper.ai/news/35781)
- **Исследовательская группа:** Команда исследовательского центра будущей промышленности Университета Вестлейка
- **Связанные исследования:** Набор данных CATH4.3, модель ESM2, Набор данных CASP15, новые кристаллические структуры, Набор данных NovelPro, Набор данных RDesign, Набор данных CHILI-3K, заранее определенные рамки на основе аминокислот и нуклеотидов, GNN, Геометрический характеристик, Обработка блока.
- **Журнал публикации:** НейрИПС 2024, 2024.05
- **Ссылка на статью:** [UniIF: Единая молекулярная обратная сгиба](https://arxiv.org/abs/2405.18968)

### **45. [Предварительно обученная модель языка белка ProSST более эффективно интегрирует информацию о структуре белка](https://hyper.ai/news/35874)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35874](https://hyper.ai/news/35874)
- **Исследовательская группа:** Группа профессора Лян Хонга и Бингсин Чжоу из Шанхайского университета Цзяо Тонг совместно с Пан Тан из Шанхайской лаборатории искусственного интеллекта
- **Связанные исследования:** предварительно обученная белковая языковая модель ProSST, Transformer, механизмы декоррелированного внимания, квантизаторы структуры белка, набор данных AlphaFoldDB, наборы данных CATH43-S40, набор данных локальной структуры CATH43-S40, бенчмарк ProteinGYM. Модель превосходит существующие подходы в прогнозировании термостабильности, связывания ионов металлов, локализации белков и аннотаций GO.
- **Журнал публикации:** НейрИПС 2024, 2024.05
- **Ссылка на статью:** [ProSST: Моделирование белкового языка с квантовой структурой и расчлененным вниманием](https://neurips.cc/virtual/2024/poster/96656)

### **46. [Фреймворк макроциклических пептидов-связников РФпептиды предлагают новые возможности для неракомыслимых белков](https://hyper.ai/news/36150)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36150](https://hyper.ai/news/36150)
- **Исследовательская группа:** Команда Дэвида Бейкера в Институте дизайна белков, УВ
- **Связанные исследования:** Технология, основанная на модели диффузии, использует модифицированные RoseTTAFold и RFdiffusion с циклическим кодированием относительной позиции для создания точных макроциклических позвоночных костей, разработки лекарств, AlphaFold, ProteinMPNN, Rosetta Relax.
- **Журнал публикации:** биоРxiv, 2024.11
- **Ссылка на статью:** [Точный де-ново проектирование макроциклов с высокой афинити белковых связей с использованием глубокого обучения](https://doi.org/10.1101/2024.11.18.622547)

### **47. [Модель основы генома Evo позволяет предсказывать и генерировать от молекулярных до геномных масштабов](https://hyper.ai/news/36266)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36266](https://hyper.ai/news/36266)
- **Исследовательская группа:** Исследовательская группа Стэнфордского университета и Института Арка
- **Связанные исследования:** Модель основания генома Evo, архитектура StripedHyena. Evo может предсказать, генерировать и проектировать целые последовательности генома.
- **Журнал публикации:** Наука, 2024.11
- **Ссылка на статью:** [Моделирование и проектирование последовательностей от молекулярной до геномной масштабы с помощью Evo](https://www.science.org/doi/10.1126/science.ado9336)

### **48. [DigFrag точно сегментирует молекулярные фрагменты с использованием ИИ и генерирует 44 молекулы лекарств/пестицидов](https://hyper.ai/news/36346)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36346](https://hyper.ai/news/36346)
- **Исследовательская группа:** Профессор Гуанфу Ян и команда ассоциированного профессора Фана Ван в Центральном китайском университете
- **Связанные исследования:** Платформа MolFrag, база данных PADFrag, механизмы внимания к графикам, метод цифровой фрагментации DigFrag, DeepFMPO framework, архитектуры нейронной сети Graph, Actor-Critic framework.
- **Журнал публикации:** Химия связи, 2024.11
- **Ссылка на статью:** [DigFrag как метод цифровой фрагментации, используемый для разработки лекарств на основе искусственного интеллекта](https://doi.org/10.1038/s42004-024-01346-5)

### **49. [Протеиновая последовательность Большой языковой модель Метод предварительной подготовки PRIME](https://hyper.ai/news/36363)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36363](https://hyper.ai/news/36363)
- **Исследовательская группа:** Группа профессора Лян Хонг в Шанхайском университете Цзяо Тонг, Шанхайской лаборатории искусственного интеллекта, Шанхайском технологическом университете, медицинском колледже Ханчжоу
- **Связанные исследования:** Протеиновая последовательность LLM метод предварительной подготовки PRIME, база данных ProteomeAtlas, база данных UniProt, набор данных ProteinGym, метод предварительной подготовки MLM, превосходящий текущие методы SOTA.
- **Журнал публикации:** Продвижение науки, 2024.11
- **Ссылка на статью:** [Общая модель языка, руководствующаяся температурой для проектирования белков повышенной стабильности и активности](https://www.science.org/doi/10.1126/sciadv.adr2641)

### **50. [Самоконтролируемый метод глубокого обучения революционизирует 3D-реконструкцию в криоэлектронной микроскопии](https://hyper.ai/news/36645)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36645](https://hyper.ai/news/36645)
- **Исследовательская группа:** Исследовательская группа UCLA
- **Связанные исследования:** Самоконтролируемый метод глубокого обучения одночасовой IsoNet (spIsoNet), одночасовая крио-ЭМ, биомакромолекулярная реконструкция, β-галактикозидазный набор данных, наклонный набор данных HA-тример, несимметричные наборы данных рибосомы, наборы данных томографии ВЛП-инфекции ВИЧ, архитектура U-сети, модуль по коррекции неравновешенности вождения, исправленный анизотропией.
- **Журнал публикации:** Методы природы, 2024.11
- **Ссылка на статью:** [Победа проблемы предпочтительной ориентации в крио-ЭМ с помощью самоконтролируемого глубокого обучения](https://doi.org/10.1038/s41592-024-02505-1)

### **51. [Многомодальный метод генерирования белка PLAID генерирует последовательности и полностью атомизированные белковые структуры одновременно](https://hyper.ai/news/36750)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36750](https://hyper.ai/news/36750)
- **Исследовательская группа:** UC Berkeley, Microsoft Research, Genentech
- **Связанные исследования:** Многомодальный метод генерирования белка PLAID (Protein Latent Induced Diffusion), база данных Pfam, ESMFold latent space, тренировка на латентную диффузию, архитектура блоков DiT, Диффузионный трансформатор (DiT), модель ESMFold.
- **Журнал публикации:** МККР 2025, 2024.12
- **Ссылка на статью:** [Создание полностью атомизированной структуры белка из данных тренировок только в последовательности](https://www.biorxiv.org/content/10.1101/2024.12.02.626353v1)

### **52. [Метод целенаправленной молекулярной оптимизации MOLRL на основе обучения латентной усиленностью](https://hyper.ai/news/37285)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37285](https://hyper.ai/news/37285)
- **Исследовательская группа:** Исследователи из Селярности и NVIDIA
- **Связанные исследования:** Новый метод молекулярной оптимизации, основанный на методе латентного усиления обучения, задачах обнаружения лекарств, оптимизации политики приближения (PPO), вариационных автокодерных систем (VAE), автокодерных систем (MolMIM), достигающих до 100% успешных показателей.
- **Журнал публикации:** ChemRxiv, 2025.01
- **Ссылка на статью:** [Целевое молекулярное поколение с латентным укреплением](https://go.hyper.ai/H4JhR)

### **53. [Рамочная система прогнозирования вирусной вариации E2VD прогнозирует эволюционные направления вирусов COVID-19/ВИЧ/инфлюензы](https://hyper.ai/news/37405)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37405](https://hyper.ai/news/37405)
- **Исследовательская группа:** Профессор Йонгхонг Тянь и соавтор профессор Цзэ Чэнь из Пекинского университета, исследователь Пэн Чжоу из лаборатории Гуанчжоу
- **Связанные исследования:** Рамочная система прогнозирования вирусной дифференциации E2VD, набор данных UniRef90, набор данных глубокого мутационного сканирования с открытым исходным кодом, кодирование белковой последовательности, локально-глобальное соединение зависимости, многозадачное фокусное обучение. Увеличение точности прогнозирования на 67%.
- **Журнал публикации:** Интеллект машины природы, 2025.01
- **Ссылка на статью:** [Единая система глубокого обучения, основанная на эволюции, для прогнозирования дифференциации вирусов](https://www.nature.com/articles/s42256-024-00966-9)

### **54. [Медицинская модель языка MedFound подходит к возможностям экспертного врача](https://hyper.ai/news/37646)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37646](https://hyper.ai/news/37646)
- **Исследовательская группа:** Междисциплинарная команда во главе с профессором Гуанью Ван (BUPT), профессором Чунли Сонгом (третья больница Пекинского университета) и профессором Цзянь Яном (Китайский университет трех ущелья)
- **Связанные исследования:** LLM BLOOM-176B, медицинский корпус набор данных MedCorpus, медицинский LLM MedFound-DX, методы цепочки мыслей, рамки выстраивания предпочтений, набор данных MedDX-FT, набор данных MedDX-Bench.
- **Журнал публикации:** Природа Медицины, 2025.01
- **Ссылка на статью:** [Генералистская медицинская языковая модель для помощи в диагностике заболеваний](https://www.nature.com/articles/s41591-024-03416-6)

### **55. [4D диффузионная модель АльфаФолдинг заполняет пробел в динамическом прогнозировании структуры белка](https://hyper.ai/news/37697)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37697](https://hyper.ai/news/37697)
- **Исследовательская группа:** Профессор Сию Чжу и команды профессора Юань Цзи в Фуданском университете/Шанхайской лаборатории искусственного интеллекта совместно с профессором Яо Яо в Университете Нанкин
- **Связанные исследования:** 4D диффузионная модель АльфаФолдинг, MD моделирование данных, динамические белковые структуры, структурная биология, Дистрибуционная графика (DiG) глубокого обучения, набор данных ATLAS.
- **Журнал публикации:** Архив, 2024.12
- **Ссылка на статью:** [4D Диффузия для динамического прогнозирования структуры белка с указанием ссылки и руководством по движению](https://arxiv.org/abs/2408.12419)

### **56. [Pipeline PepPrCLIP для разработки коротких белков обещает разработку новых методов лечения рака](https://hyper.ai/news/37912)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37912](https://hyper.ai/news/37912)
- **Исследовательская группа:** Команда биомедицинского инженера Университета Дьюка
- **Связанные исследования:** Модель языка белка ESM-2, модель ESM-2-650M, трубопровод PepPrCLIP, гауссианское распределение, последовательности аминокислот.
- **Журнал публикации:** Продвижение науки, 2025 год
- **Ссылка на статью:** [Де-ново проектирование пептидных связующих средств для различных целей с контрастным языковым моделированием](https://www.science.org/doi/10.1126/sciadv.adr8638)

### **57. [Техника выровнения Болцмана резко улучшает эффективность предсказания свободной энергии привязывания к белкам](https://hyper.ai/news/38092)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38092](https://hyper.ai/news/38092)
- **Исследовательская группа:** Команда профессора Чунхуа Шен в университете Чжэцзян, университете Аделаиды, Северо-Восточном университете (США)
- **Связанные исследования:** Связывающая свободная энергия, метод выравнивания Болцмана, предсказание ∆∆G, предсказание структуры белковых комплексов, модели диффузии Риманни, глубокое обучение, метод BA-Cycle, метод BA-DDG, набор данных SKEMPI v2.
- **Журнал публикации:** МККР 2025, 2024.10
- **Ссылка на статью:** [В качестве предсказателя мутационных эффектов на взаимодействие белка-белок приведена модель обратного сгъвания, согласованная с Болцманном](https://arxiv.org/abs/2410.09543)

### **58. [Новый крупномасштабный генератор белковой позвоночника на основе потока Proteina достигает SOTA в де-ново белковой позвоночнице дизайна](https://hyper.ai/news/38120)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38120](https://hyper.ai/news/38120)
- **Исследовательская группа:** NVIDIA, Мила, Университет Монреаля, МИТ
- **Связанные исследования:** Протеиновый дизайн, масштабируемые неэквивариантные архитектуры трансформаторов, кластерированный набор данных DFS Foldseek AFDB, набор данных D21M, модель MFS, стратегии тренировок в стадии.
- **Журнал публикации:** ICLR 2025 Устная, 2025.01
- **Ссылка на статью:** [Протеины: масштабирование Протеиновая структура на основе потока Генеративные модели](https://openreview.net/forum?id=TVQLu34bdw&nesting=2&sort=date-desc)

### **59. [Модель UniGEM впервые достигает синергетического совершенствования двух задач, основанных на моделях диффузии](https://hyper.ai/news/38186)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38186](https://hyper.ai/news/38186)
- **Исследовательская группа:** Университет Цинхуа, Китайская академия наук
- **Связанные исследования:** Открытие лекарственных средств, предсказание молекулярных свойств, генерирование молекул, модели диффузии, набор данных QM9, набор данных молекулярной конформации GEOM-Drugs 3D, многозадачные учебные рамки, E(3) эквивалентные модели диффузии (EDM), многоотраслевые сетевые архитектуры.
- **Журнал публикации:** МККР 2025, 2025.04
- **Ссылка на статью:** [UniGEM: Единый подход к генерированию и прогнозированию свойств молекул](https://openreview.net/pdf?id=Lb91pXwZMR)

### **60. [RFdiffusion развивается дальше, реализуя атомную точность де-нова конструкции антитела](https://hyper.ai/news/38253)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38253](https://hyper.ai/news/38253)
- **Исследовательская группа:** Команда профессора Дэвида Бейкера в Университете Вашингтона и его сотрудники
- **Связанные исследования:** Лечебные антитела, сеть RF-диффузии для вычислительного проектирования белков, переменные тяжелые цепи антитела (VHH), переменные фрагменты с одной цепью (scFvs), глубокое обучение, рамки VHH, дизайн последовательности циркуляции CDR.
- **Журнал публикации:** биоРxiv, 2025.02
- **Ссылка на статью:** [Атомно точная де-ново конструкция антитела с RF-диффузией](https://doi.org/10.1101/2024.03.14.585103)

### **61. [Первая схема синтеза модели языка белка-РНК устанавливает новую SOTA в предсказании связывающей аффинити](https://hyper.ai/news/38290)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38290](https://hyper.ai/news/38290)
- **Исследовательская группа:** Университет Цинхуа, UCL, Университет Монаш, BUPT
- **Связанные исследования:** Протеин-РНК, модель CoPRA, Модели языка белка (PLM), Модели языка РНК (RLM), экспериментальные методы CLIP, модель Co-Former, набор данных PDBbind, набор данных PRBABv2, набор данных ProNAB, набор данных PRA201, мультимодальное обучение.
- **Журнал публикации:** ААИ 2025 г., 2025.01
- **Ссылка на статью:** [CoPRA: Модель пересечения междоменных предварительно обученных последовательностей с сложными структурами для предсказания связывающей с белками РНК афинити](https://arxiv.org/abs/2409.03773)

### **62. [Виртуальная модель тканей Celcomen впервые достигает идентифицируемости причинно-следственного вывода в пространственном транскриптомическом анализе](https://hyper.ai/news/38308)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38308](https://hyper.ai/news/38308)
- **Исследовательская группа:** Кембриджский университет
- **Связанные исследования:** Данный набор Perturbmap, набор данных о плодовой селезенке, набор данных о глиобластоме, модель Celcomen, модули вывода (CCE), генерирующие модули (SCE), графические нейронные сети.
- **Журнал публикации:** МККР 2025, 2025.01
- **Ссылка на статью:** [Оценка одноклеточного и тканевого воздействия на нарушение пространственной транскриптомики посредством пространственного причинного расщепления](https://openreview.net/forum?id=Tqdsruwyac)

### **63. [Метод AlphaFold-Metainference точно предсказывает неравномерные структурные ансамбли белка](https://hyper.ai/news/38448)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38448](https://hyper.ai/news/38448)
- **Исследовательская группа:** Кембриджский университет
- **Связанные исследования:** Карты ошибок настройки, предсказанные AlphaFold, корреляции между матрицами колебаний расстояния в моделировании MD, предсказание неравномерной структуры белка, Банк данных белка (PDB), данные о малоугловом рассеянении рентгеновских лучей (SAXS), измерения NMR, структурные ансамбли Аβ и α-синуклеина, методы метаинференции Баезия CALVADOS-2, интеграторы Лангевина.
- **Журнал публикации:** Сообщения о природе, 2025.02
- **Ссылка на статью:** [Прогноз AlphaFold структурных комплектов протеинов, неравномерных](https://www.nature.com/articles/s41467-025-56572-9)

### **64. [Высокоточненная структура РНК-прогнозная система DRfold2 превосходит SOTA в нескольких эталонах](https://hyper.ai/news/38506)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38506](https://hyper.ai/news/38506)
- **Исследовательская группа:** Команда профессора Яна Чжанга в НУС
- **Связанные исследования:** Рамочная система прогнозирования структуры РНК DRfold2, точность прогнозирования контактов без надзора, модели языка РНК-композитов, наборы данных тестов РНК DRfold2, набор данных CASP15, модули трансформатора, дезонирование структурных модулей.
- **Журнал публикации:** биоРxiv, 2025.03
- **Ссылка на статью:** [Прогноз структуры РНК Ab initio с использованием модели композитного языка и дезонированного обучения от конца к концу](https://www.biorxiv.org/content/10.1101/2025.03.05.641632v1)

### **65. [Новый алгоритм проектирования белков DRAKES прорывает узлы в проектировании биологической последовательности](https://hyper.ai/news/38675)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38675](https://hyper.ai/news/38675)
- **Исследовательская группа:** Исследователи из МИТ, Гарвард, Стэнфорд, UC Berkeley, Genentech
- **Связанные исследования:** Рамочки для укрепления обучения, наборы тренировок PDB, набор данных по мегаскале, алгоритм DRAKES, Gumbel-Softmax.
- **Журнал публикации:** МККР 2025, 2024.08
- **Ссылка на статью:** [Модели диффузии с помощью оптимизации вознаграждения с применением к ДНК и дизайну белков](https://doi.org/10.48550/arXiv.2410.13643)

### **66. [Спектроскопия поглощения ультрафиолетовых лучей с помощью машинного обучения для обнаружения микробиологического загрязнения](https://hyper.ai/news/38869)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38869](https://hyper.ai/news/38869)
- **Исследовательская группа:** SMART (Альянс Сингапура-МИТ по исследованиям и технологиям), A*SRL Сингапур, NUS, MIT
- **Связанные исследования:** Выявление микробиологических загрязнений, стратегии обнаружения аномалий, машинное обучение, машины для векторов поддержки (SVM), функции радиальной базы, стерилизованные образцы PBS.
- **Журнал публикации:** Природа, 2025.03
- **Ссылка на статью:** [Машинное обучение с помощью ультрафиолетовой спектроскопии поглощения для микробиологического загрязнения в продуктах клеточной терапии](https://hyper.ai/en/sota/papers/s41598-024-83114-y)

### **67. [Использование генерирующих моделей протеиновой последовательности для проектирования перекрывающихся генов](https://hyper.ai/news/39241)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39241](https://hyper.ai/news/39241)
- **Исследовательская группа:** Команда Дэвида Бейкера в Университете Вашингтона
- **Связанные исследования:** Пересекающиеся гены (OLG), синтетические исследования по проектированию OLG, замена аминокислот, скрининг биоинформатики, статистическое моделирование, систематическое сканирование позиций последовательности.
- **Журнал публикации:** биоРxiv, 2025.05
- **Ссылка на статью:** [Проектирование перекрывающихся генов с использованием глубоких генерирующих моделей протеиновых последовательностей](https://doi.org/10.1101/2025.05.06.652464)

### **68. [Распоряжение предсказаний PUPS позволяет одноклеточную подклеточную локализацию белка](https://hyper.ai/news/39549)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39549](https://hyper.ai/news/39549)
- **Исследовательская группа:** МИТ, Гарвардский университет
- **Связанные исследования:** Подклеточная локализация белка, Атлас человеческих белков, невидимая подклеточная локализация белка, Предсказания невидимых белков Подклеточная локализация (PUPS) - рамка, сборки данных, модели языка белка ESM-2, CNN, разделимые свертывания.
- **Журнал публикации:** Методы природы, 2025.05
- **Ссылка на статью:** [Прогноз подклеточной локализации белка в одиночных клетках](https://go.hyper.ai/LeaQF)

### **69. [UniMoMo: Первая единая генерирующая система для различных видов позволяет создавать многотиповые молекулярные препараты](https://hyper.ai/news/39852)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39852](https://hyper.ai/news/39852)
- **Исследовательская группа:** Группа Ян Лю (Цинхуа), Группа Вэнбинг Хуан (Университет Рэнмин), команда по обнаружению наркотиков в ИИ ByteDance
- **Связанные исследования:** Рамочка UniMoMo, Всеатомный вариативный автокодер (IterVAE), всеатомные геометрические модели диффузии латентного пространства, единое моделирование.
- **Журнал публикации:** МТСК 2025, 2025.03
- **Ссылка на статью:** [UniMoMo: Единое генерирующее моделирование 3D-молекулы для дизайна De Novo Binder](https://hyper.ai/papers/2503.19300)

### **70. [Модель языка белка Prot42 генерирует связующие вещества высокой афинити, используя только целевую последовательность белка](https://hyper.ai/news/40385)**

- **Ключевой результат исследования:** [https://hyper.ai/news/40385](https://hyper.ai/news/40385)
- **Исследовательская группа:** Инициатива ИИ (Абу-Даби, ОАЭ) и Cerebras Systems (Силиконовая долина, США)
- **Связанные исследования:** Набор данных PDIdb 2010, база данных UniRef50, база данных STRING, прогноз функции белка, прогноз локализации белка подклеточной клетки, прогноз структуры белка, прогноз PPI, генерация белковых связующих веществ, генерация ДНК-последования-специфических связующих веществ.
- **Журнал публикации:** arXiv, 2025.05
- **Ссылка на статью:** [Prot42: Новая семья моделей языка белка для целенаправленного поколения белковых связующих](https://go.hyper.ai/cFupD)

### **71. [Единый симулятор биомолекулярной динамики UniSim впервые достигает единой симуляции динамики с усилием времени в молекулярных типах и химических средах](https://hyper.ai/news/40483)**

- **Ключевой результат исследования:** [https://hyper.ai/news/40483](https://hyper.ai/news/40483)
- **Исследовательская группа:** Группа Ян Лю (Цинхуа) и Группа Вэнбинг Хуан (Университет Рэнмин)
- **Связанные исследования:** Расширение атомной встроенности, многоглавная гибридная предварительная подготовка, модели TorchMD-NET GNN, стохастические интерполантные структуры, силовые ядра.
- **Журнал публикации:** МКМК 2025, 2025.05
- **Ссылка на статью:** [UniSim: Единый симулятор для динамики биомолекулы во времени](https://go.hyper.ai/5NWuO)

### **72. [Алгоритм вычислительной биологии упрощенныйБондфиндер обнаруживает 69 новых нитрогенно-кислородно-серовых связей](https://hyper.ai/news/40515)**

- **Ключевой результат исследования:** [https://hyper.ai/news/40515](https://hyper.ai/news/40515)
- **Исследовательская группа:** София Бацзи и команда Шаре Саяда в Университете Готтингена
- **Связанные исследования:** Упрощенный алгоритм Bondfinder, машинное обучение, квантово-механические расчеты, набор данных PDB, набор данных PDB-REDO, набор данных BDB, уменьшение измерений UMAP, соединения NOS.
- **Журнал публикации:** Химия связи, 2025.05
- **Ссылка на статью:** [Выявление аргинин-цистеин и глицин-цистеин NOS связей путем систематической переоценки белковых структур](https://www.nature.com/articles/s42004-025-01535-w)

### **73. [Новый метод проектирования протеиновых последовательностей FAMPNN одновременно обрабатывает информацию о белке и боковой цепи](https://hyper.ai/news/41545)**

- **Ключевой результат исследования:** [https://hyper.ai/news/41545](https://hyper.ai/news/41545)
- **Исследовательская группа:** Стэнфордский университет, Институт Арка (Пало Альто)
- **Связанные исследования:** Конформации боковой цепи белков, метод FAMPNN, набор данных S40, набор данных PDB, набор данных CASP13/14/15, набор данных SKEMPlv2, набор данных S669, набор данных Megascale, набор данных FireProtDB, набор данных CR9114/CR6261, стратегии итеративной выборки образцов, форматы атом37, GNN, методы диффузии Евклида по знакам.
- **Журнал публикации:** МТСК 2025, 2025.06
- **Ссылка на статью:** [Кондиционирование и моделирование боковых цепей для проектирования полноатомной протеиновой последовательности с помощью FAMPNN](https://go.hyper.ai/JUJDq)

### **74. [Метод атомного проектирования белка La-Proteina генерирует белки с высокой точностью до 800 остатков](https://hyper.ai/news/41744)**

- **Ключевой результат исследования:** [https://hyper.ai/news/41744](https://hyper.ai/news/41744)
- **Исследовательская группа:** НВИДИЯ, Мила
- **Связанные исследования:** Атомная конструкция белка, частично скрытая система совпадения потоков La-Proteina, набор данных AFDB, стратегия обучения в двух этапах.
- **Журнал публикации:** АрXiv, 2025.06
- **Ссылка на статью:** [Ла-Протеина: атомное генерирование белка посредством частичного латентного совпадения потоков](https://go.hyper.ai/3csT5)

### **75. [Модель APM, специально разработанная для комплексов белков с многоцепочками, позволяет проектировать и оптимизировать функциональность всего атома.](https://hyper.ai/news/42059)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42059](https://hyper.ai/news/42059)
- **Исследовательская группа:** Университет Хунань, UCAS, команда семеноводства ByteDance
- **Связанные исследования:** Белок, многоцепочкая моделирование, оптимизация представления всего атома, укрепление зависимости от последовательности структуры, база данных PDB, база данных Swiss-Prot, база данных AFDB, множественные цепочки данных белка.
- **Журнал публикации:** МТСК 2025, 2025.07
- **Ссылка на статью:** [Весь атомный генерирующий модель для проектирования белковых комплексов](https://go.hyper.ai/TVp4i)

### **76. [Новый метод проектирования белка, который связывает регионы с внутренним нарушением, Logos специализируется на неракомышивающих целях](https://hyper.ai/news/42611)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42611](https://hyper.ai/news/42611)
- **Исследовательская группа:** Команда Дэвида Бейкера в Университете Вашингтона
- **Связанные исследования:** Модель RF-диффузии, Индуцированная фит, Скафолдовое поколение, ООО "Пакетная специализация", Пакетная сборка.
- **Журнал публикации:** Наука, 2025.07
- **Ссылка на статью:** [Конструкция внутренне нарушенных белков, связывающих область](https://www.science.org/doi/10.1126/science.adr8063)

### **77. [Новая структура представления динамического синтеза белков FusionProt выпущена, что позволяет итеративно обмениваться информацией](https://hyper.ai/news/43724)**

- **Ключевой результат исследования:** [https://hyper.ai/news/43724](https://hyper.ai/news/43724)
- **Исследовательская группа:** Технион, Мета ИИ
- **Связанные исследования:** Модели белкового языка, система представления для обучения FusionProt, AlphaFold DB, AlphaFold2, DeepFRI набор данных, обучаемые токены слияния, Multiview Contrastive learning.
- **Журнал публикации:** биоРxiv, 2025.08
- **Ссылка на статью:** [FusionProt: Сочетание последовательности и структурной информации для изучения единого представления белков](https://go.hyper.ai/OXLYl)

### **78. [Модель диффузии с транскриптомом MorphDiff выпущен для ускорения обнаружения фенотипических препаратов](https://hyper.ai/news/43849)**

- **Ключевой результат исследования:** [https://hyper.ai/news/43849](https://hyper.ai/news/43849)
- **Исследовательская группа:** CUHK, Университет искусственного интеллекта Мохаммада бин Зайда
- **Связанные исследования:** Моторфология клеток, модель латентной диффузии (LDM), массивные наборы данных изображений морфологии клеток, набор данных JUMP, набор данных CDRP, набор данных LINCS, морфологический VAE, модели латентной диффузии.
- **Журнал публикации:** Сообщения о природе, 2025.09
- **Ссылка на статью:** [Прогноз изменения клеточной морфологии при нарушениях с помощью модели диффузии, управляемой транскриптомом](https://www.nature.com/articles/s41467-025-63478-z)

### **79. [Фреймворк AlphaPPIMI значительно улучшает обобщение, превосходя существующие методы в предсказании модуляторов интерфейса PPI](https://hyper.ai/news/43916)**

- **Ключевой результат исследования:** [https://hyper.ai/news/43916](https://hyper.ai/news/43916)
- **Исследовательская группа:** Китайский университет нефти, Йонсейский университет
- **Связанные исследования:** Взаимодействие белка-белок, набор данных DLiP, отпечатки пальцев ECFP4, база данных ChemDiv, структура AlphaPPIMI, модель Uni-Mol2, экстракция белковых функций, архитектура трансформатора, модель ESM2-150M, модель ProtTrans.
- **Журнал публикации:** Журнал химико-форматики, 2025.08
- **Ссылка на статью:** [Alphappimi: комплексная система глубокого обучения для прогнозирования взаимодействий между модуляторами PPI](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-025-01077-2)

### **80. [Новая система нейронной сети синтеза эффективно предсказывает многометаллические места связывания в протеиновых последовательностях](https://hyper.ai/news/44702)**

- **Ключевой результат исследования:** [https://hyper.ai/news/44702](https://hyper.ai/news/44702)
- **Исследовательская группа:** Гонконгский университет науки и техники
- **Связанные исследования:** Фьюзионная система нейронной сети, предсказание многометаллических связей с белками, CNN, сети синтеза, база данных MbPA, системы глубокого обучения.
- **Журнал публикации:** биоРxiv, 2025.09
- **Ссылка на статью:** [Модульный подход к нейронной сети слияния для эффективного прогнозирования многометаллических связывающих участков в протеиновых последовательностях](https://go.hyper.ai/Y7DNU)

### **81. [Высоко синтезируемая молекулярная проекционная система ReaSyn выпущена, достигая сверхвысоких темпов реконструкции и разнообразия путей](https://hyper.ai/news/44764)**

- **Ключевой результат исследования:** [https://hyper.ai/news/44764](https://hyper.ai/news/44764)
- **Исследовательская группа:** Исследовательская группа NVIDIA
- **Связанные исследования:** Открытие лекарств, система ReaSyn, контролируемое обучение, тонкое настройство усиления обучения, модели трансформаторов, представление цепочки реакции (CoR).
- **Журнал публикации:** Архив, 2025.09
- **Ссылка на статью:** [Переосмысление синтезируемости молекулы с помощью цепочки реакции](https://arxiv.org/abs/2509.16084)

### **82. [Ограниченная рамка обучения усилению Ctrl-DNA выпущена, реализуя "целевой контроль" специфической экспрессии клеточных генов](https://hyper.ai/news/45227)**

- **Ключевой результат исследования:** [https://hyper.ai/news/45227](https://hyper.ai/news/45227)
- **Исследовательская группа:** Команда Университета Торонто, лаборатория Чанпинга
- **Связанные исследования:** Ограниченная RL-фреймворк Ctrl-DNA, глубокое обучение, экспрессия генов, специфические для клеток, модели языка ДНК, наборы данных промотора человека, наборы данных усилителя, контролируемое генерирование CRE специфического типа клеток, Ограниченные Марковские процессы принятия решений, архитектура Enformer.
- **Журнал публикации:** НейрИПС 2025, 2025.05
- **Ссылка на статью:** [Ctrl-DNA: обучение с ограниченным усилением для проектирования клеточного специфического регуляторного элемента](https://arxiv.org/abs/2505.20578)

### **83. [Рамочная система PLACER решает задачу моделирования на атомном уровне конформационной гетерогенности белка](https://hyper.ai/news/46009)**

- **Ключевой результат исследования:** [https://hyper.ai/news/46009](https://hyper.ai/news/46009)
- **Исследовательская группа:** Исследовательская группа профессора Дэвида Бейкера
- **Связанные исследования:** Графическая нейронная сеть PLACER, Cambridge Structural Database, PDB, дезонирующая нейронные сети, 3-полосные архитектуры, малые молекулы структурного поколения.
- **Журнал публикации:** ПНАС, 2025.11
- **Ссылка на статью:** [Моделирование конформационных комплектов малых белковых молекул с помощью PLACER](https://www.biorxiv.org/content/10.1101/2024.09.25.614868v2)

### **84. [Squidiff позволяет моделировать транскриптомы в много сценариях, способствуя развитию точной медицины и космической медицины](https://hyper.ai/news/46212)**

- **Ключевой результат исследования:** [https://hyper.ai/news/46212](https://hyper.ai/news/46212)
- **Исследовательская группа:** Колумбийский университет, Стэнфордский университет
- **Связанные исследования:** Фреймворк Squidiff, инструменты Splatter, наборы данных дифференциации человека iPSC-to-endoderm, эксперименты скрининга K562 CRISPR, условный DDIM, методы семантического кодирования, архитектуры Encode-Diffuse-Decode.
- **Журнал публикации:** Методы природы, 2025.11
- **Ссылка на статью:** [Сквадифф: прогнозирование клеточного развития и реакции на нарушения с использованием модели диффузии](https://www.nature.com/articles/s41592-025-02877-y)

### **85. [Выпущенная генеративная модель PepTron и новый критерий оценки, переформатирующий способности предсказания для неравномерных белковых ансамблей](https://hyper.ai/news/47063)**

- **Ключевой результат исследования:** [https://hyper.ai/news/47063](https://hyper.ai/news/47063)
- **Исследовательская группа:** Пептоне, Копенгагенский университет, NVIDIA, Оксфордский университет, МИТ, Университет Дьюка
- **Связанные исследования:** ПептонеБенч-рамочная база оценки, генеративная модель PepTron, PDB, база данных IDRome, NVIDIA BioNeMo, ESMFlow, смешанные стратегии обучения (экспериментальные + синтетические данные).
- **Журнал публикации:** биоРxiv, 2025.10
- **Ссылка на статью:** [Продвижение белковых совокупных предсказаний по всему порядкуПродолжение беспорядков](https://www.biorxiv.org/content/10.1101/2025.10.18.680935v1)

### **86. [MIT и Гарвард предлагают комплексный рабочий процесс ИИ CleaveNet для преодоления высокоспецифических проблем в проектировании протеазовых субстратов](https://hyper.ai/news/48608)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48608](https://hyper.ai/news/48608)
- **Исследовательская группа:** Совместная команда из МИТ и Гарвардского университета
- **Связанные исследования:** Протеза-субстраты, рабочий процесс CleaveNet, синтетические пептиды, модели прогнозирования и генерирующие модели.
- **Журнал публикации:** Сообщения о природе
- **Ссылка на статью:** [CleaveNet: ИИ-на основе концовый проектный процесс для протеазовых субстратов](https://www.nature.com/articles/s41467-025-67226-1)

### **87. [Группа Университета Гете в Франкфурте предлагает многомасштабную классификационную систему для расшифровки сложности человеческого лигома E3.](https://hyper.ai/news/48813)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48813](https://hyper.ai/news/48813)
- **Исследовательская группа:** Исследовательская группа Университета Гете в Франкфурте
- **Связанные исследования:** Убикитин-протеасома система (UPS), убикитин лигазы E3, человеческий лигома E3, метрическое обучение.
- **Журнал публикации:** Сообщения о природе
- **Ссылка на статью:** [Многоуровневая классификация декодирует сложность человеческого лигома E3](https://www.nature.com/articles/s41467-025-67450-9)

### **88. [Basecamp и NVIDIA совместно выпускают модель EDEN, позволяющую программировать терапевтический дизайн с помощью ИИ](https://hyper.ai/news/48964)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48964](https://hyper.ai/news/48964)
- **Исследовательская группа:** Basecamp Research, NVIDIA и ведущие академические учреждения
- **Связанные исследования:** Программируемая биология, модели метагеномного основания EDEN, генная терапия, рекомбинации, антимикробный дизайн пептидов.
- **Журнал публикации:** биоРxiv
- **Ссылка на статью:** [Разработка программируемой ИИ терапевтической системы с помощью семейства фундаментальных моделей EDEN](https://doi.org/10.64898/2026.01.12.699009)

### **89. [Microsoft и другие предлагают многомодальную AI-фреймворк GigaTIME для создания виртуальных атласов mIF из рутинных патологических слайдов](https://hyper.ai/news/49359)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49359](https://hyper.ai/news/49359)
- **Исследовательская группа:** Microsoft Research, Вашингтонский университет, Провидэнс Геномтика
- **Связанные исследования:** Микросреда опухоли, окраска H&E, иммунофлуоресценция мультиплекса (mIF), GigaTIME-фреймворк, пространственная протеомика.
- **Журнал публикации:** Клетка
- **Ссылка на статью:** [Мультимодальный ИИ создает виртуальную популяцию для моделирования микросреды опухолей](https://www.cell.com/cell/fulltext/S0092-8674(25)01312-1)

### **90. [MIT предлагает модель языка глубокого обучения Pichia-CLM для оптимизации кодонов для повышения добычи рекомбинантных белков](https://hyper.ai/news/49613)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49613](https://hyper.ai/news/49613)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** Komagataella phaffii, оптимизация кодона, Codon Usage Bias (CUB), языковая модель Pichia-CLM, рекомбинантная белковая экспрессия.
- **Журнал публикации:** ПНАС
- **Ссылка на статью:** [Pichia-CLM: Модель языка по оптимизации кодона для Komagataella phaffii](https://www.pnas.org/doi/10.1073/pnas.2522052123)

### **91. [MIT и ETH совместно предлагают разработку основы глубокого обучения APOLLO для эффективной интеграции и развязки одноклеточных мультимодальных данных](https://hyper.ai/news/49702)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49702](https://hyper.ai/news/49702)
- **Исследовательская группа:** Совместная команда MIT и ETH Цюрих
- **Связанные исследования:** Одноклеточная биология, интеграция мультимодальных данных, система APOLLO, scRNA-seq, scATAC-seq, пространственная морфология.
- **Журнал публикации:** Природа Вычислительная наука
- **Ссылка на статью:** [Частично совместная мультимодальная вкладка учит целостное представление состояния клетки](https://www.nature.com/articles/s43588-025-00948-w)

### **92. [CUHK и другие совместно предлагают рамки Bi-TEAM для единого масштабного представления пептидов](https://hyper.ai/news/49833)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49833](https://hyper.ai/news/49833)
- **Исследовательская группа:** CUHK, Макаоский политехнический университет, Университет Чжэцзян, Вторая больница ЦСУ в Сианья, УЭСТЦ
- **Связанные исследования:** Пептидная структура и моделирование функции, неканонические модификации аминокислот, обучение масштабным представлениям, рамки Bi-TEAM.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [Bi-TEAM: Единая межместная структура обучения представлению химически модифицированных биомолекул](https://arxiv.org/abs/2603.01873)

### **93. [Университет Карнеги-Меллон и другие предлагают AQuaRef для квантовой очистки моделей полностью атомизированных белков](https://hyper.ai/news/49895)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49895](https://hyper.ai/news/49895)
- **Исследовательская группа:** CMU, Университет Вроцлава, Университет Флориды
- **Связанные исследования:** Совершенствование структуры белка, AQuaRef, машинное обучение межатомных потенциалов (AIMNet2), квантовое совершенствование, структурная биология.
- **Журнал публикации:** Сообщения о природе
- **Ссылка на статью:** [AQuaRef: машинное обучение ускоряет квантовое совершенствование белковых структур](https://www.nature.com/articles/s41467-025-64313-1)

### **94. [NVIDIA и другие совместно предлагают комплексную систему для объединения генерирования и оптимизации белковых связующих веществ](https://hyper.ai/news/49977)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49977](https://hyper.ai/news/49977)
- **Исследовательская группа:** NVIDIA, Оксфордский университет, Мила
- **Связанные исследования:** Проектирование белковых связующих веществ, Proteína-Complexa (Complexa), Teddymer, генерирующие методы, Испытание времени.
- **Журнал публикации:** МКЛР 2026
- **Ссылка на статью:** [Скаларирование атомного дизайна белкового связующего устройства с помощью генерирующего предварительного обучения и вычисления времени испытаний](https://openreview.net/forum?id=qmCpJtFZra)

### **95. [MIT и CMU совместно предлагают VibeGen, внедряя вибрационную динамику для расширения возможностей де-ново проектирования белка](https://hyper.ai/news/50061)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50061](https://hyper.ai/news/50061)
- **Исследовательская группа:** Совместная команда из МТИ и CMU
- **Связанные исследования:** Динамика белка, агент VibeGen, модели диффузии языка, де-ново проектирование белка, предсказание амплитуды вибрации.
- **Журнал публикации:** Вопрос
- **Ссылка на статью:** [VibeGen: Агентский концовый де-ново дизайн белка для индивидуальной динамики с использованием модели диффузии языка](https://www.cell.com/matter/abstract/S2590-2385(26)00069-X)

### **96. [Институт Пастера использует глубокое обучение для прогнозирования 2,39 млн антифажных белков, отображая бактериальный иммунитет](https://hyper.ai/news/50491)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50491](https://hyper.ai/news/50491)
- **Исследовательская группа:** Исследовательская группа Института Пастера
- **Связанные исследования:** Бактериальный антивирусный иммунитет, системы защиты от фаг, модели белкового языка, модели геномического языка, пангеномика.
- **Журнал публикации:** Наука
- **Ссылка на статью:** [Модели белка и геномического языка раскрывают неизведанное разнообразие бактериального иммунитета](https://www.science.org/doi/10.1126/science.adv8275)

### **97. [Команда KAIST использует ИИ для де-ново проектирования белков, связывающих малые молекулы, успешно применяя их в биосенсорах](https://hyper.ai/news/50599)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50599](https://hyper.ai/news/50599)
- **Исследовательская группа:** Исследовательская группа кафедры биологических наук KAIST
- **Связанные исследования:** Де-ново проектирование белка, белки с небольшими молекулами, NTF2-подобная складка, биосенсоры, химически индуцированная димеризация (CID).
- **Журнал публикации:** Сообщения о природе
- **Ссылка на статью:** [Связывание и отсчет малых молекул с проектируемой белковой семьей](https://www.nature.com/articles/s41467-026-70953-8)

### **98. [Университет Торонто и другие предлагают dnaHNet для эффективного иерархического моделирования геномических последовательностей](https://hyper.ai/news/50709)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50709](https://hyper.ai/news/50709)
- **Исследовательская группа:** Университет Торонто, Институт векторов, Институт Арка
- **Связанные исследования:** Геномическое обучение последовательности, модели оснований, dnaHNet, динамическая токенизация, прогнозирование вариантов эффекта.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [dnaHNet: масштабируемая и иерархическая модель фундамента для изучения геномных последовательностей](https://arxiv.org/abs/2602.10603)

### **99. [Университет Королевы Мэри в Лондоне и другие проводят крупнейшее протеогеномное исследование, раскрывающее механизмы молекулярных заболеваний](https://hyper.ai/news/51343)**

- **Ключевой результат исследования:** [https://hyper.ai/news/51343](https://hyper.ai/news/51343)
- **Исследовательская группа:** Университет королевы Марии Лондона, Кембриджский университет
- **Связанные исследования:** Протеогеномика, количественные белковые траектории (pQTL), обилие протеинов в циркуляции, цис- и трансгенетическое регулирование.
- **Журнал публикации:** Клетка
- **Ссылка на статью:** [Многокохортные протеогеномные анализы показывают генетические эффекты на протеоме и заболевании](https://www.cell.com/cell/fulltext/S0092-8674(26)00385-5)

### **100. [Университет Гете Франкфурт и другие предлагают модель genESOM: генерирующее ИИ прорывает эксперименты с животными небольшой выборки](https://hyper.ai/news/51430)**

- **Ключевой результат исследования:** [https://hyper.ai/news/51430](https://hyper.ai/news/51430)
- **Исследовательская группа:** Университет Гете Франкфурт и Fraunhofer ITMP
- **Связанные исследования:** Опыты на животных с небольшими образцами, генерирующая ИИ, модель genESOM, появляющиеся карты самоорганизации.
- **Журнал публикации:** Фармакологические исследования
- **Ссылка на статью:** [Самоорганизационный генерирующий ИИ на основе нейронной сети с встроенным контролем инфляции ошибок повышает эффективное извлечение знаний из доклинических исследований с уменьшенным размером образца](https://www.sciencedirect.com/science/article/pii/S1043661826000745)

## **ИИ + здравоохранение**

### **1. [DeepDR Plus система глубокого обучения предсказывает диабетическую ретинопатию с помощью изображений фонда](https://hyper.ai/news/29769)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29769](https://hyper.ai/news/29769)
- **Исследовательская группа:** Профессор Вейпин Цзя, Хуатин Ли и команда Бин Шен в Шанхайском университете Цзяо Тонг; Исследовательская команда Тианьин Хуан в университете Цинхуа
- **Связанные исследования:** Данные СДПП, данные DRPS, ResNet-50, модели фонда, самоконтрольное обучение, модели оценки IBS, мета-модели.
- **Журнал публикации:** Природа Медицины, 2024.01
- **Ссылка на статью:** [Система глубокого обучения для прогнозирования времени до прогрессирования диабетической ретинопатии](https://www.nature.com/articles/s41591-023-02702-z)

### **2. [Логистическая регрессионная модель анализирует, что высокий индекс зеленого ландшафта снижает риск MetS](https://hyper.ai/news/29559)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29559](https://hyper.ai/news/29559)
- **Исследовательская группа:** Исследовательская группа Сифенга Ву в Университете Чжэцзян
- **Связанные исследования:** Модели конвульционных нейронных сетей, модели логистической регрессии, Isochrone API
- **Журнал публикации:** Международная организация по окружающей среде, 2024.01
- **Ссылка на статью:** [Полезные связи между видимой зелени на открытом воздухе на рабочем месте и метаболическим синдромом у китайских взрослых](https://doi.org/10.1016/j.envint.2023.108327)

### **3. [Система глубокого обучения помогает молодым офтальмологам повысить последовательность диагностики на 12%](https://hyper.ai/news/29549)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29549](https://hyper.ai/news/29549)
- **Исследовательская группа:** Пекинский медицинский колледж Союза, Западно-Китайская больница Сичуаньского университета, Вторая больница Хебэйского медицинского университета, Тианьцзинская медицинская медицинская университетская очная больница, Венчжоуский медицинский университет, Пекинский авиадиагностический университет, Китайский университет Ренмин
- **Связанные исследования:** Модели оценки качества, диагностические модели, CNN.
- **Журнал публикации:** Npj цифровая медицина, 2024.01
- **Ссылка на статью:** [Использование системы глубокого обучения в оказании помощи младшим офтальмологам в диагностике 13 основных заболеваний фонду: перспективное многоцентровое клиническое исследование](https://www.nature.com/articles/s41746-023-00991-9)

### **4. [GSP-GCN достигают точности до 90,2% при диагностике болезни Паркинсона](https://hyper.ai/news/29189)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29189](https://hyper.ai/news/29189)
- **Исследовательская группа:** CAS Шэньчжэньский институт передовых технологий и Первая аффилированная больница Университета Сунь Ят-сена
- **Связанные исследования:** Модули для обработки графических сигналов (GSP), модули для графической сети, классификаторы, интерпретируемые модели.
- **Журнал публикации:** Npj Цифровая медицина, 2024.01
- **Ссылка на статью:** [Интерпретабельная модель на основе графика для диагностики болезни Паркинсона с голосовым ЭЭГ](https://www.nature.com/articles/s41746-023-00983-9)

### **5. [Система оценки прогноза рака молочной железы МИРС](https://hyper.ai/news/29304)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29304](https://hyper.ai/news/29304)
- **Исследовательская группа:** Университет Кентукки, Университет науки и технологий Макао, Университет Макао, Медицинский университет Гуанчжоу
- **Связанные исследования:** База данных TCGA, модели нейронной сети, системы оценки прогноза, алгоритм ESTIMATE, машинное обучение, XGboost, Boruta RF, ElasticNet.
- **Журнал публикации:** Наука, 2023.11
- **Ссылка на статью:** [MIRS: Система оценки ИИ для прогнозирования прогноза и терапии рака молочной железы](https://doi.org/10.1016/j.isci.2023.108322)

### **6. [Модель основы образа сетчатки RETFound предсказывает множество системных заболеваний](https://hyper.ai/news/28113)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28113](https://hyper.ai/news/28113)
- **Исследовательская группа:** Юкун Чжоу (кандидат на докторскую степень) и другие из UCL и Моорфилдс Очной больницы
- **Связанные исследования:** Самоконтролируемое обучение, набор данных MEH-MIDAS, набор данных EyePACS, SL-ImageNet, SSL-ImageNet, SSL-Retinal.
- **Журнал публикации:** Природа, 2023.08
- **Ссылка на статью:** [Основная модель для обобщения обнаружения заболеваний на основе изображений сетчатки](https://www.nature.com/articles/s41586-023-06555-x)

### **7. [СВМ оптимизирует сенсоры тактильной связи, скорость распознавания брайл достигает 96,12%](https://hyper.ai/news/26561)**

- **Ключевой результат исследования:** [https://hyper.ai/news/26561](https://hyper.ai/news/26561)
- **Исследовательская группа:** Группы Гэнь Яна и Кайчен Сюй в университете Чжэцзян
- **Связанные исследования:** Алгоритмы SVM, машинное обучение, CNN, алгоритмы адаптивной оценки момента.
- **Журнал публикации:** Уровень научной подготовки, 2023.09
- **Ссылка на статью:** [Дизайн сенсоров для динамического восприятия](https://onlinelibrary.wiley.com/doi/10.1002/advs.202303949)

### **8. [Пекинский институт геномики CAS создает открытый биомедицинский архив образов](https://hyper.ai/news/26334)**

- **Ключевой результат исследования:** [https://hyper.ai/news/26334](https://hyper.ai/news/26334)
- **Исследовательская группа:** CAS Пекинский институт геномики
- **Связанные исследования:** База данных ЦРУ, деидентификация, контроль качества, коллекция, индивидуальность, исследование, серия, изображение, сети тройных, модули внимания.
- **Журнал публикации:** биоРxiv, 2023.08
- **Ссылка на статью:** [Самоконтролируемое обучение реконструкции голограмм с использованием физической последовательности](https://www.nature.com/articles/s42256-023-00704-7)

### **9. [ИИ Лунит читает маммограммы с точностью, сравнимой с врачами](https://hyper.ai/news/26135)**

- **Ключевой результат исследования:** [https://hyper.ai/news/26135](https://hyper.ai/news/26135)
- **Исследовательская группа:** Исследовательская группа Университета Ноттингема
- **Связанные исследования:** ПЕРФОРМС набор данных, анонтации + оценки. Чувствительность ИИ была последовательна для врачей, а специфичность не показала существенных различий.
- **Журнал публикации:** Радиология, 2023.09
- **Ссылка на статью:** [Использование алгоритма обнаружения рака молочной железы с использованием персональных показателей в схеме маммографического скрининга](https://pubs.rsna.org/doi/10.1148/radiol.223299)

### **10. [Стратегия отбора признаков обнаруживает биомаркеры рака молочной железы](https://hyper.ai/news/24589)**

- **Ключевой результат исследования:** [https://hyper.ai/news/24589](https://hyper.ai/news/24589)
- **Исследовательская группа:** Университет Неаполя Федерико II, Италия
- **Связанные исследования:** Машинное обучение, стратегии выбора функций, наборы данных TCGA/GEO, соотношение доходов, RF, SVM-RFE.
- **Журнал публикации:** СББК 2023, 2023.07
- **Ссылка на статью:** [Устойчивая функция Стратегия отбора обнаруживает панель микроРНК как предполагаемые диагностические биомаркеры рака молочной железы](https://www.researchgate.net/publication/372083934)

### **11. [Машины-модель с повышением степени точно предсказывает субсиндром БПСД](https://hyper.ai/news/23926)**

- **Ключевой результат исследования:** [https://hyper.ai/news/23926](https://hyper.ai/news/23926)
- **Исследовательская группа:** Исследовательская группа Университета Йонсей (Южная Корея)
- **Связанные исследования:** Модели машинного обучения, многочисленные методы импутации, модели логистической регрессии, модели случайного леса, модели Gradient Boosting Machine, модели SVM.
- **Журнал публикации:** Научные доклады, 2023.05
- **Ссылка на статью:** [Модели прогнозирования, основанные на машинном обучении, появления поведенческих и психологических симптомов деменции: разработка и проверка моделей](https://www.nature.com/articles/s41598-023-35194-5)

### **12. [Модель машинного обучения предсказывает смертность пациентов в течение одного года](https://hyper.ai/news/33905)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33905](https://hyper.ai/news/33905)
- **Исследовательская группа:** Народная больница Маченг (Хубэй, Китай)
- **Связанные исследования:** Логистические модели регрессии, модели машинного обучения, GBM, RF, DT. Труп-три характеристики, связанные с 1-летней смертностью, были NT-proBNP, альбумин и статины.
- **Журнал публикации:** Кардиоваскулярная диабетология, 2023.06
- **Ссылка на статью:** [Модели, основанные на машинном обучении, для прогнозирования 1-летней смертности среди китайских пожилых пациентов с коронарной болезнью артерии в сочетании с нарушением переносимости глюкозы или сахарным диабетом](https://cardiab.biomedcentral.com/articles/10.1186/s12933-023-01854-z)

### **13. [Новая технология интерфейса мозг-компьютер позволяет пациентам с фазией "говорить"](https://hyper.ai/news/33914)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33914](https://hyper.ai/news/33914)
- **Исследовательская группа:** Исследовательская группа UC
- **Связанные исследования:** Twitter-корпус, мультимодальные нейропротезы речи, мозго-компьютерные интерфейсы, модели глубокого обучения, Cornell Movie-Dialogs Corpus, синтетические алгоритмы речи.
- **Журнал публикации:** Природа, 2023.08
- **Ссылка на статью:** [Высокопроизводительный нейропротез для декодирования речи и контроля аватара](https://www.nature.com/articles/s41586-023-06443-4)

### **14. [Искусственный интеллект на основе глубокого обучения для обнаружения рака поджелудочной железы](https://hyper.ai/news/33923)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33923](https://hyper.ai/news/33923)
- **Исследовательская группа:** Академия Alibaba DAMO вместе с множеством отечественных и международных медицинских учреждений
- **Связанные исследования:** Глубокое обучение, PANDA, nnU-Net, CNN, Transformers.
- **Журнал публикации:** Природа Медицины, 2023.11
- **Ссылка на статью:** [Крупномасштабное выявление рака поджелудочной железы с помощью неконтрастного КТ и глубокого обучения](https://www.nature.com/articles/s41591-023-02640-w)

### **15. [Эффективность скрининга рака легких с помощью машинного обучения для населения](https://hyper.ai/news/31197)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31197](https://hyper.ai/news/31197)
- **Исследовательская группа:** Исследовательский центр Google
- **Связанные исследования:** Данный набор DS_CA, набор DS_NLST, набор данных DS_US, набор данных DS_JPN, модели машинного обучения, скрининг рака легких. Увеличение специфичности на 5%-7%, сокращение времени скрининга на 14 секунд на случай.
- **Журнал публикации:** ИИ радиологии, 2024.03
- **Ссылка на статью:** [ИИ-помощник в скрининге рака легких: ретроспективное многонациональное исследование в США и Японии](https://pubs.rsna.org/doi/11.1148/ryai.230079)

### **16. [Диагностическая модель синтеза ИИ рака яичников MCF рассчитывает риск с использованием рутинных лабораторных данных и возраста](https://hyper.ai/news/30730)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30730](https://hyper.ai/news/30730)
- **Исследовательская группа:** Исследовательская группа Джихон Лю в Университете Сун Ят-сена
- **Связанные исследования:** Методы отбора функций, классификаторы машинного обучения, 5-кратная перекрестная проверка, теория принятия решений с многокритериями.
- **Журнал публикации:** Лансет Цифровое здоровье, 2024.05
- **Ссылка на статью:** [Модели, основанные на искусственном интеллекте, позволяющие точно диагностировать рак яичников с использованием лабораторных тестов в Китае: многоцентричное, ретроспективное исследование кохорты](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00245-5/fulltext)

### **17. [Google выпускает HEAL Framework, 4-ступенчатый процесс оценки справедливости инструментов медицинского ИИ](https://hyper.ai/news/31535)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31535](https://hyper.ai/news/31535)
- **Исследовательская группа:** Исследовательская группа Google
- **Связанные исследования:** Машинное обучение, HEAL (Health Equity Assessment of Machine Learning) - рамки, логистический регрессионный анализ, пересечение, равноправие в области здравоохранения.
- **Журнал публикации:** ЭКлиническаямедицина, 2024.04
- **Ссылка на статью:** [Оценка эффективности машинного обучения в области здоровья (HEAL): исследование-кес-модель в области кодекса и дерматологии ИИ](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(24)00058-0/fulltext)

### **18. [Использование семантической сегментации для разработки пространственной транскриптомики семантического инструмента аннотации Pianno](https://hyper.ai/news/31573)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31573](https://hyper.ai/news/31573)
- **Исследовательская группа:** Команда Ин Чжу в Фуданском университете
- **Связанные исследования:** Компьютерное зрение, машинное обучение, методы пространственного кластерирования, методы неконтролируемого кластерирования, модели пространственного процесса точки ПОИССОН (sPPP), предшественники рандомированного поля Маркова высокого порядка (MRF).
- **Журнал публикации:** Сообщения о природе, 2024.04
- **Ссылка на статью:** [Pianno: вероятностная система автоматизации семантических анонсирования для пространственной транскриптомики](https://www.nature.com/articles/s41467-024-47152-4)

### **19. [Модель ИИ UniFMIR нарушает границы существующего флуоресцентного микроскопического изображения](https://hyper.ai/news/31885)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31885](https://hyper.ai/news/31885)
- **Исследовательская группа:** Команда Бо Яна в Фуданском университете
- **Связанные исследования:** Модель UniFMIR, многоглавные модули, модули повышения функций, многобаковые модули, Swin Transformer, адаптивная оценка момента, глубокое обучение, модели SR, U-Net.
- **Журнал публикации:** Методы природы, 2024.04
- **Ссылка на статью:** [Преподготовка фундаментальной модели для генерализации флуоресцентной микроскопии на основе восстановления изображений](https://www.nature.com/articles/s41592-024-02244-3)

### **20. [Система глубокого обучения улучшает точность прогнозирования выживаемости рака](https://hyper.ai/news/32068)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32068](https://hyper.ai/news/32068)
- **Исследовательская группа:** Группа Чжанsheng Yu в Шанхайском национальном центре прикладной математики (филиал СЖТУ)
- **Связанные исследования:** Системы глубокого обучения, наборы данных ST, интегрированные модели глубокого обучения графиков и графиков, CNN и GNNs, внешний тест MCO-CRC, модели пространственного экспрессии генов, модели выживания графиков с супер-пачом, H&E-закрашенная гистологическая предварительная обработка изображений.
- **Журнал публикации:** Отчеты о клетках Медицины, 2024.05
- **Ссылка на статью:** [Использование ТМЭ, изображенных гистологическими изображениями, для улучшения прогноза рака посредством системы глубокого обучения](https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(24)00205-2 )

### **21. [MemSAM адаптирует модель "Segment Anything" для сегментации медицинского видео](https://hyper.ai/news/32372)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32372](https://hyper.ai/news/32372)
- **Исследовательская группа:** Хуиси Ву (Шенженский университет)
- **Связанные исследования:** Модели зрения, медицинская видеосегментация, эхокардиография видеосегментация модели, механизмы усиления памяти, наборы данных CAMUS и EchoNet-Dynamic, модель SonoSAM, модель SAMUS.
- **Журнал публикации:** СРКП 2024 г., 2024.05
- **Ссылка на статью:** [MemSAM: размножение сегмента чего угодно Модель для эхокардиографии Видео сегментация](https://github.com/dengxl0520/MemSAM)

### **22. [Медицинская модель сегментации изображений Медицинский SAM 2 возглавляет рейтинг SOTA](https://hyper.ai/news/33738)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33738](https://hyper.ai/news/33738)
- **Исследовательская группа:** Команда Оксфордского университета
- **Связанные исследования:** Медицинские модели сегментации изображений, SAM 2, набор данных сегментации видео SA-V, медицинские наборные данных SAM 2, примерные наборные данных, кодировки изображений, кодировки памяти.
- **Журнал публикации:** Архив, 2024.08
- **Ссылка на статью:** [Медицинский SAM 2: Segment медицинские изображения в виде видео через Segment Anything Model 2](https://arxiv.org/abs/2408.00874)

### **23. [Машинное обучение борется с химиотерапевтической резистентностью и рецидивом опухолей, создавая сильную защиту от стволовых клеток рака молочной железы](https://hyper.ai/news/33566)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33566](https://hyper.ai/news/33566)
- **Исследовательская группа:** Университет Шандонг и медицинский университет Шанси совместно с Helix Matrix
- **Связанные исследования:** Машинное обучение, набор данных о раке молочной железы (BRCA), корреляция Пирсона, анализ обогащения генов.
- **Журнал публикации:** Усовершенствованная наука, 2024.07
- **Ссылка на статью:** [Анаболизм полиамина способствует обогащению стволовых клеток рака молочной железы, вызванного химиотерапией](https://onlinelibrary.wiley.com/doi/10.1002/advs.202404853)

### **24. [Модель DeepDR-LLM для лечения диабета, опубликованная в поджурнале Nature](https://hyper.ai/news/33292)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33292](https://hyper.ai/news/33292)
- **Исследовательская группа:** Университет Цинхуа, Шанхайский университет Цзяо Тонг, Сингапурский национальный университет
- **Связанные исследования:** LLM, глубокое обучение на основе изображений фондов, адапторы и LoRA, архитектуры трансформаторов, контролируемое настройка.
- **Журнал публикации:** Природа Медицины, 2024.07
- **Ссылка на статью:** [Интегрированные модели глубокого обучения и языка на основе изображений для первичной терапии диабета](https://www.nature.com/articles/s41591-024-03139-8)

### **25. [На уровне старших патоморфологов! Команда Цинхуа предлагает фундаментальную модель ИИ ROAM для точной диагностики глиомы](https://hyper.ai/news/33136)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33136](https://hyper.ai/news/33136)
- **Исследовательская группа:** Университет Цинхуа и больница Сианья
- **Связанные исследования:** Большие интересующие области, пирамидные трансформаторы, ROAM, большие изображения, Xiangya glioma WSI, TCGA glioma WSI, слабо контролируемая вычислительная патология.
- **Журнал публикации:** Интеллект машины природы, 2024.06
- **Ссылка на статью:** [Метод слабо контролируемой вычислительной патологии на основе трансформатора для диагностики клинической степени и обнаружения молекулярных маркеров глиомы](https://www.nature.com/articles/s42256-024-00868-w)

### **26. [Универсальная модель сегментации медицинских изображений ScribblePrompt превосходит модели на основе SAM](https://hyper.ai/news/34720)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34720](https://hyper.ai/news/34720)
- **Исследовательская группа:** MIT CSAIL, MGH, Гарвардская медицинская школа
- **Связанные исследования:** Глубокое обучение, сегментация медицинских изображений, MegaMedical Dataset, интерактивная сегментация, генерирующие синтетические этикетки, гибридные решения CNN-Transformer.
- **Журнал публикации:** ECCV 2024, 2024.07
- **Ссылка на статью:** [ScribblePrompt: быстрая и гибкая интерактивная сегментация для любого биомедицинского изображения](https://arxiv.org/pdf/2312.07381)

### **27. [Цифровая платформа мозга-близнецов демонстрирует критические явления и когнитивные функции, похожие на человеческий мозг](https://hyper.ai/news/34573)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34573](https://hyper.ai/news/34573)
- **Исследовательская группа:** Команда профессора Джанфэн Фэнга в Фуданском университете
- **Связанные исследования:** Спикинг нейронные сети, цифровой мозг-близнец, обратная инженерия, МРТ, кортико-субкортические модели, модели DTB, модели ассимиляции данных.
- **Журнал публикации:** Национальный научный обзор, 2024.05
- **Ссылка на статью:** [Имитация и исследование состояния покоя и выполнения задач человеческого мозга посредством похожих на компьютерные технологии мозга: масштабирование и архитектура](https://doi.org/10.1093/nsr/nwae080)

### **28. [Автоматизированная система симуляции агентов выполняет первоначальный диагноз депрессии](https://hyper.ai/news/34845)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34845](https://hyper.ai/news/34845)
- **Исследовательская группа:** Лаборатория X-LANCE в SJTU, UT Arlington, TCCI и ThetaAI
- **Связанные исследования:** Симуляционные системы диалога агента, набор данных D4, архитектуры хранилища памяти, агент пациента, агент психиатра, агент инструктора.
- **Журнал публикации:** Архив, 2024.09
- **Ссылка на статью:** [Диалог диагностики депрессии: симуляция: психиатр с третий уровень памяти, который самосовершенствовался](https://arxiv.org/abs/2409.15084)

### **29. [Модель глубокого обучения LucaProt помогает в идентификации вирусов РНК](https://hyper.ai/news/34968)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34968](https://hyper.ai/news/34968)
- **Исследовательская группа:** Университет Сунь Ят-сена, Университет Чжэцзян, Университет Фудана, Alibaba Cloud и т.д.
- **Связанные исследования:** Облачные вычисления и ИИ, метагеномная добыча, база данных NCBI SRA, CNGBdb, модели глубокого обучения, основанные на данных, структура Трансформатора, обнаружение 161,979 потенциальных видов вирусов РНК.
- **Журнал публикации:** Клетка, 2024.09
- **Ссылка на статью:** [Использование искусственного интеллекта для документирования скрытой вирусосферы РНК](https://doi.org/10.1016/j.cell.2024.09.027)

### **30. [Рамочная система медицинского образа предварительной подготовки UniMedI разрушает барьеры на основе гетерогенности медицинских данных](https://hyper.ai/news/35128)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35128](https://hyper.ai/news/35128)
- **Исследовательская группа:** Команда Хаоджи Ху в Университете Чжэцзян, команда Лили Цю в Microsoft Research Asia
- **Связанные исследования:** Технология Псевдо-Паров, набор данных MIMIC-CXR 2.0.0, набор данных BIMCV, кодировки зрения ViT-B/16, BioClinicalBERT, Контрастное обучение языку зрения.
- **Журнал публикации:** ECCV, 2024.07
- **Ссылка на статью:** [Единое медицинское изображение предварительное обучение в языковой направленной общей семантической пространстве](https://eccv.ecva.net/virtual/2024/poster/1165)

### **31. [Многоязычная медицинская большая модель MMed-Llama 3 лучше адаптируется к сценариям медицинского применения](https://hyper.ai/news/35242)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35242](https://hyper.ai/news/35242)
- **Исследовательская группа:** Команды Янфэн Ван и Вайди Си в Шанхайском университете Цзяо Тонг
- **Связанные исследования:** Многоязычный медицинский корпус MMedC, медицинский QA-бешенчик MMedBench, основополагающие модели MMed-Llama 3, MMedLM.
- **Журнал публикации:** Сообщения о природе, 2024.09
- **Ссылка на статью:** [На пути к созданию многоязычного языкового модели медицины](https://www.nature.com/articles/s41467-024-52417-z)

### **32. [Метод нашивания изображений с помощью капсуловой эндоскопии S2P-Matching помогает в восстановлении изображения](https://hyper.ai/news/35313)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35313](https://hyper.ai/news/35313)
- **Исследовательская группа:** HUST, SJTU, Южно-центральный университет Миндзу, HKUST(GZ), PolyU, Университет Сиднея
- **Связанные исследования:** С2П-связывание, самоконтрольное контрастивное обучение, двойно-расветные кодераторы, трансформаторы, сходство на уровне пикселей.
- **Журнал публикации:** Сделки по биомедицинскому инженерии IEEE, 2024.09
- **Ссылка на статью:** [С2П-связывание: самоконтролируемое сжатие на основе пластыря с использованием трансформатора для сжатия капсул эндоскопических изображений](http://dx.doi.org/10.1109/TBME.2024.3462502)

### **33. [Мультимодальный медицинский эталон GMAI-MMBench содержит 284 наборов данных, охватывающих 18 клинических задач](https://hyper.ai/news/35938)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35938](https://hyper.ai/news/35938)
- **Исследовательская группа:** Шанхайская лаборатория искусственного интеллекта, Вашингтонский университет, Университет Монаш, ECNU
- **Связанные исследования:** GMAI-MMBench, наиболее полный стандарт открытого исходного кода для оценки крупных моделей визуального языка.
- **Журнал публикации:** НейрИПС 2024, 2024.08
- **Ссылка на статью:** [GMAI-MMBench: комплексный мультимодальный критерий оценки для общего медицинского ИИ](https://arxiv.org/abs/2408.03361v7)

### **34. [Новый метод прогнозирования временных серий CGS-Mask раскрывает ключевые показатели показателей выживаемости пациентов](https://hyper.ai/news/36192)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36192](https://hyper.ai/news/36192)
- **Исследовательская группа:** ХУСТ, Сиднейский университет, больница Тонгджи
- **Связанные исследования:** Набор данных MIMIC-III, Набор данных LSST, Набор данных NATOPS, Набор данных AE. Сочетание прогнозирования временных серий с интерпретацией.
- **Журнал публикации:** ААИ 2024, 2024.03
- **Ссылка на статью:** [CGS-маска: сделать предсказания временных серий интуитивными для всех](https://ojs.aaai.org/index.php/AAAI/article/view/29325)

### **35. [Неинвазивная система декодирования мозга fMRI заложена на основе интерфейсов мозга и компьютера и когнитивных моделей](https://hyper.ai/news/36023)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36023](https://hyper.ai/news/36023)
- **Исследовательская группа:** Команда И Чжэнга в Институте автоматизации, CAS
- **Связанные исследования:** Многомодальные интеграционные рамки, набор данных о природных сценах, набор данных COCO, встроенные VAE и CLIP, 3D-препроцессоры fMRI, многомодальные LLM.
- **Журнал публикации:** НейрИПС 2024, 2024.10
- **Ссылка на статью:** [Нейровизия языка: улучшение визуальной реконструкции и взаимодействия языка на основе записей мозга](https://nips.cc/virtual/2024/poster/93607)

### **36. [Медицинская модель сегментации изображений M2CF-Net улучшает точность диагностики синдрома Шёгрена](https://hyper.ai/news/36700)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36700](https://hyper.ai/news/36700)
- **Исследовательская группа:** Профессор Вэй Ту и профессор Фэн Лу в HUST
- **Связанные исследования:** M2CF-Net, небольшой слайд-сбор данных патологии слюнистой железы, экстракция ROI, нормализация пятен, WSI-пач, алгоритм Вахадэна, тренировка на основе пач.
- **Журнал публикации:** Медаи 2023, 2023
- **Ссылка на статью:** [M2CF-Net: сеть с многорезолюцией и многомасштабным переливанием кросс-фузий для сегментирования патологического поражения фокального лимфоцитарного сиаладените](https://doi.ieeecomputersociety.org/10.1109/MedAI59581.2023.00063)

### **37. [BSAFusion позволяет выстраивать и соединять мультимодальные медицинские изображения](https://hyper.ai/news/37104)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37104](https://hyper.ai/news/37104)
- **Исследовательская группа:** Кунинский университет науки и технологий, Китайский университет океана
- **Связанные исследования:** Медицинская обработка изображений, двунаправленная сопоставление функций по ступеням (BSFA), КТ-МРИ, ПЕТ-МРИ и СПЕКТ-МРИ наборы данных, глубокое обучение, компьютерное зрение.
- **Журнал публикации:** ААИ 2025 г., 2024.11
- **Ссылка на статью:** [BSAFusion: двусторонняя сеть скрещивания по ступенькам для скрещивания несовместимых медицинских изображений](https://arxiv.org/abs/2412.08050)

### **38. [Многоагентная система LLM KG4Диагностика помогает в диагностике 362 распространенных заболеваний](https://hyper.ai/news/37208)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37208](https://hyper.ai/news/37208)
- **Исследовательская группа:** Университет Уорвика, Университет Кранфилда, Кембридж, Оксфорд
- **Связанные исследования:** KG4Диагностика, иерархические многоагентные рамки, автоматизированное создание графиков медицинских знаний, LLM по общей практике (GPLLM), Consultant-LLM.
- **Журнал публикации:** Программа "Морс ААИ-25", 2024.12
- **Ссылка на статью:** [KG4Диагностика: Иерархическая многоагентная система LLM с улучшением графика знаний для медицинской диагностики](https://arxiv.org/abs/2412.16833)

### **39. [Модель сегментации изображений ConDSeg решает проблемы мягких границ и событий в медицинской визуализации](https://hyper.ai/news/37794)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37794](https://hyper.ai/news/37794)
- **Исследовательская группа:** Китайский университет геологических наук, Байду
- **Связанные исследования:** Контрастная система повышения качества, обучение укреплению последовательности, семантические модули декоплирования, декодеры, сознательные для размера, BCNet, набор данных Kvasir-SEG.
- **Журнал публикации:** ААИ 2025 г., 2024.12
- **Ссылка на статью:** [ConDSeg: Общая медицинская система сегментации изображений с помощью улучшения характеристик, основанных на контрасте](https://arxiv.org/abs/2412.08345)

### **40. [Медицинская модель M3FM позволяет проводить клиническую диагностику с нулевым выбором, поддерживая отчетность и классификацию заболеваний](https://hyper.ai/news/37924)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37924](https://hyper.ai/news/37924)
- **Исследовательская группа:** Оксфорд, Рочестерский университет, Амазонка, Университет Вестлейка, Tencent Youtu Lab
- **Связанные исследования:** Ноль-шот клиническая диагностика, медицинская визуализация, модели CLIP, M3FM-фреймворк, MultiMedCLIP, наборы данных MIMC-CXR, COVID-19-CT-CXR, CheXpert.
- **Журнал публикации:** Npj Цифровая медицина, 2025.02
- **Ссылка на статью:** [Мультимодальная многоязычная модель медицинского фундамента для клинической диагностики с нулевым ударом](https://www.nature.com/articles/s41746-024-01339-7)

### **41. [Оценка пола на основе глубокого обучения с помощью томографии черепа превосходит результаты экспертов судебной экспертизы](https://hyper.ai/news/38024)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38024](https://hyper.ai/news/38024)
- **Исследовательская группа:** УВА, ЮНСУ, Университет Хасануддина
- **Связанные исследования:** Автоматизированные рамки, основанные на глубоком обучении, оценка пола черепа, 3D-КТ-сканирование, судебно-медицинская антропология.
- **Журнал публикации:** Научные доклады, 2024.12
- **Ссылка на статью:** [Глубокое обучение против оценщиков человека: судебное оценочное исследование пола с помощью трехмерной компьютерной томографии](https://www.nature.com/articles/s41598-024-81718-y)

### **42. [ИИ способствует медицинскому исследованию: крупные модели становятся "золотым партнером" для подготовки врачей первичной медицинской помощи](https://hyper.ai/news/38366)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38366](https://hyper.ai/news/38366)
- **Исследовательская группа:** SJTU, SUS, Цинхуа, Дюк, Джонс Хопкинс, Университет Мельбурна
- **Связанные исследования:** Обучение врачей, DeepSeek, совместное принятие решений между человеком и искусственным интеллектом, LLM, диагностика и лечение хронических заболеваний.
- **Журнал публикации:** Научный бюллетени, 2025.01
- **Ссылка на статью:** [Большие языковые модели для обучения диабету: перспективное исследование](https://www.sciencedirect.com/science/article/pii/S2095927325000891)

### **43. [Алгоритм глубокого обучения AcneDGNet позволяет обнаружить и оценить поражения акне](https://hyper.ai/news/38397)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38397](https://hyper.ai/news/38397)
- **Исследовательская группа:** Международная больница Пекинского университета
- **Связанные исследования:** AcneDGNet, Vision Transformers, CNNs, набор данных ACNE04, архитектуры Swin Transformer.
- **Журнал публикации:** Научные доклады, 2025.01
- **Ссылка на статью:** [Оценка модели обнаружения и оценки тяжести акнеположности для населения Китая в онлайн- и офлайн-сериалах здравоохранения](https://www.nature.com/articles/s41598-024-84670-z)

### **44. [Выпущена мультимодальная модель сегментации медицинских изображений VISTA3D, достигающая автоматической сегментации и взаимодействия 3D-образных](https://hyper.ai/news/38486)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38486](https://hyper.ai/news/38486)
- **Исследовательская группа:** NVIDIA, UAMS, NIH, Оксфордский университет
- **Связанные исследования:** VISTA3D, 3D супервоксельная функция экстракции, автоматическая сегментация, интерактивная сегментация двойной модальности.
- **Журнал публикации:** Архив, 2024.11
- **Ссылка на статью:** [VISTA3D: Единая модель сегментационного фундамента для 3D медицинского изображения](https://doi.org/10.48550/arxiv.2406.05285)

### **45. [Многоплановая эхокардиография единая сегментационная модель EchoONE точно сегментирует несколько планов](https://hyper.ai/news/38544)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38544](https://hyper.ai/news/38544)
- **Исследовательская группа:** Шэньчжэньский университет, Шэньчжэньская народная больница
- **Связанные исследования:** Модель EchoONE, набор данных CAMUS, набор данных HMC-QU, набор данных EchoNet_Dynamic.
- **Журнал публикации:** СРКП 2025, 2025.04
- **Ссылка на статью:** [EchoONE: сегментирование нескольких эхокардиографических самолетов в одной модели](https://arxiv.org/abs/2412.02993)

### **46. [Рамочная система диалога между многоагентами моделирует медицинские консультации для оказания помощи в диагностике заболеваний](https://hyper.ai/news/38583)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38583](https://hyper.ai/news/38583)
- **Исследовательская группа:** Западно-китайская больница, Университет Чжэцзян, БУПТ
- **Связанные исследования:** Многоагентные конверсионные (МАС) рамки, LLM, Orphanet, Medline, GPT-3.5, GPT-4.
- **Журнал публикации:** Природа, 2025.03
- **Ссылка на статью:** [Улучшение диагностической способности с помощью многоагентных разговорочных больших языковых моделей](https://www.nature.com/articles/s41746-025-01550-0#Tab6)

### **47. [Очень глубокое обучение Framework STAIG раскрывает подробную генетическую информацию в микросреде опухоли](https://hyper.ai/news/38587)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38587](https://hyper.ai/news/38587)
- **Исследовательская группа:** Институт медицинских наук, Университет Токио
- **Связанные исследования:** СТИГ-рамочка, биологические ткани, наборы данных СТ, ННН.
- **Журнал публикации:** Сообщения о природе, 2025.01
- **Ссылка на статью:** [STAIG: Анализ пространственной транскриптомики с помощью графического контрастивного обучения с помощью изображений для исследования доменов и интеграции без согласования](https://www.nature.com/articles/s41467-025-56276-0)

### **48. [Первая все-в-единственная система идентификации медицинских изображений MaMI достигает SOTA по 11 наборам данных](https://hyper.ai/news/38624)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38624](https://hyper.ai/news/38624)
- **Исследовательская группа:** Шанхайская лаборатория ИИ и несколько университетов
- **Связанные исследования:** Рассмотрение системы MMI, медицинские критерии переидентификации, адаптер параметров непрерывной модальности (ComPA), модели медицинского фонда (MFMs).
- **Журнал публикации:** СРКП 2025, 2025.03
- **Ссылка на статью:** [К полной идентификации медицинского образа](https://arxiv.org/pdf/2503.08173)

### **49. [Модель регрессии много к одному M2OST точно предсказывает экспрессию генов с использованием цифровых патологических изображений](https://hyper.ai/news/38783)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38783](https://hyper.ai/news/38783)
- **Исследовательская группа:** Университет Чжэцзян, лаборатория Чжэцзян, университет Ритсумеикан
- **Связанные исследования:** Целые слайд-изображения (WSI), наборы данных о раке молочной железы у человека, модели трансформаторов, схемы на уровне патч.
- **Журнал публикации:** ААИ 2025 г., 2024.12
- **Ссылка на статью:** [M2OST: Регрессия многоквартирного восстановления для прогнозирования пространственной транскриптомики из цифровых патологических изображений](https://arxiv.org/abs/2409.15092)

### **50. [Инструмент для сканирования мозга МРТ MindGlide количественно определяет поражения склероза в разных формах](https://hyper.ai/news/38971)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38971](https://hyper.ai/news/38971)
- **Исследовательская группа:** Исследовательская группа UCL
- **Связанные исследования:** Модель MindGlide, МРТ, наборы данных о рутинной помощи, сегментация поражений, ННУ-Сеть, 3D-СНЭ.
- **Журнал публикации:** Сообщения о природе, 2025.04
- **Ссылка на статью:** [Возможность получения новых данных из старых сканировок путем перенаправления клинических архивов МРТ для исследований множественного склероза](https://go.hyper.ai/fDEgm)

### **51. [Иерархическая дистилляция многоинстанционная система обучения HDMIL быстро обрабатывает гигапиксельные изображения целого слайда](https://hyper.ai/news/39157)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39157](https://hyper.ai/news/39157)
- **Исследовательская группа:** СВЕТ, СВЕТ (Шенжен)
- **Связанные исследования:** Многоинстантное обучение, выявление опухолей, WSIs, наборы данных Camelyon16, наборы данных TCGA-NSCLC.
- **Журнал публикации:** СРКП 2025, 2025.03
- **Ссылка на статью:** [Быстрая и точная классификация патологических изображений на гигапикселях с помощью иерархического дистилляции многократного обучения](https://arxiv.org/abs/2502.21130)

### **52. [Универсальная модель 3D-сегментации кровеносных сосудов](https://hyper.ai/news/39201)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39201](https://hyper.ai/news/39201)
- **Исследовательская группа:** Университет Цюриха, ETH Цюриха, Технический университет Мюнхена
- **Связанные исследования:** Сегментация кровеносных сосудов, сегментация медицинских изображений, модели условно-генеративных моделей на основе соответствия потока, стратегии рандомизации доменов.
- **Журнал публикации:** СРКП 2025, 2025.01
- **Ссылка на статью:** [vesselFM: Основная модель универсальной 3D-сегментации кровеносных сосудов](https://go.hyper.ai/lVad9)

### **53. [Графические нейронные сети точно предсказывают выживание рака легких, обнаруживая 3 смертельные подтипы](https://hyper.ai/news/39435)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39435](https://hyper.ai/news/39435)
- **Исследовательская группа:** Корнеллский университет, Регенерон Фармацевтики
- **Связанные исследования:** Графически зашифрованная смесь выживания (GEMS), базы данных EHR, набор данных ConcertAI Patient360TM NSCLC, кодировки GNN.
- **Журнал публикации:** Сообщение о природе, 2025.05
- **Ссылка на статью:** [Идентификация предсказующих субфенотипов клинических результатов с использованием данных реального мира и машинного обучения](https://doi.org/10.1038/s41467-025-59092-8)

### **54. [Стратегия синтеза ИИ-модель прогнозирует риск смертности от септического шока](https://hyper.ai/news/39713)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39713](https://hyper.ai/news/39713)
- **Исследовательская группа:** Больница Тонджи, ХУСТ
- **Связанные исследования:** Септический шок, модели классификационного синтеза (TCF) на основе TOPSIS, модели машинного обучения.
- **Журнал публикации:** Npj цифровая медицина, 2025.04
- **Ссылка на статью:** [Модели предсказания смертности в нескольких специальностях на основе искусственного интеллекта для септического шока в многоцентровом ретроспективном исследовании](https://go.hyper.ai/faMLL)

### **55. [Первая в мире клиническая модель Графика мышления в HIE улучшает прогнозирование нейрокогнитивных результатов на 15%](https://hyper.ai/news/40828)**

- **Ключевой результат исследования:** [https://hyper.ai/news/40828](https://hyper.ai/news/40828)
- **Исследовательская группа:** Бостонская детская больница, Гарвардская медицинская школа, Нью-Йоркский университет, MIT-IBM Watson Lab
- **Связанные исследования:** Медицинские критерии обоснования, модель клинической графы мышления (CGoT), набор данных по обоснованию HIE.
- **Журнал публикации:** МТСК 2025, 2025.06
- **Ссылка на статью:** [Визуальные и доменные знания для медицинского рассуждения на профессиональном уровне](https://openreview.net/forum?id=tnyxtaSve5)

### **56. [Моделирование кохорты пациентов с использованием многомерных данных о ЕЭР увеличивает точность прогнозирования продолжительности пребывания на 16,3%](https://hyper.ai/news/41303)**

- **Ключевой результат исследования:** [https://hyper.ai/news/41303](https://hyper.ai/news/41303)
- **Исследовательская группа:** НУС, Университет Чжэцзян
- **Связанные исследования:** EHR, Нейронный Кохорт метод обучения представления, MIMIC-III, MIMIC-IV, Диабет130.
- **Журнал публикации:** МТСК 2025, 2025.06
- **Ссылка на статью:** [NeuralCohort: обучение нейронной репрезентации для анализа здравоохранения](https://openreview.net/forum?id=bqQVa6VRvm)

### **57. [Модель глубокого обучения APEX выявляет потенциальных кандидатов в антибиотики](https://hyper.ai/news/42377)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42377](https://hyper.ai/news/42377)
- **Исследовательская группа:** Университет Пенсильвании
- **Связанные исследования:** Глобальные базы данных ядов, прогноз модели APEX, НИОИ антибиотиков, яды животных.
- **Журнал публикации:** Сообщения о природе, 2025.07
- **Ссылка на статью:** [Компьютерное исследование глобальных ядов для обнаружения антимикробных веществ с помощью искусственного интеллекта Venomics](https://www.nature.com/articles/s41467-025-60051-6)

### **58. [Оценка эпидемиологии сточных вод с использованием генной секвенирования и машинного обучения: метод ICA-Var обнаруживает вирусы до 4 недель раньше](https://hyper.ai/news/42585)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42585](https://hyper.ai/news/42585)
- **Исследовательская группа:** ЮНЛВ
- **Связанные исследования:** Неконтролируемые трубопроводы машинного обучения, Независимый компонентный анализ, обнаружение вирусов, методы двойной регрессии, ICA-Var.
- **Журнал публикации:** Сообщения о природе, 2025.07
- **Ссылка на статью:** [Раннее выявление возникающих вариантов SARS-CoV-2 из сточных вод через секвенирование генома и машинное обучение](https://www.nature.com/articles/s41467-025-61280-5)

### **59. [Двусторонняя модель диффузии моста Брауна повышает воспроизводимость виртуального окрашивания](https://hyper.ai/news/42959)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42959](https://hyper.ai/news/42959)
- **Исследовательская группа:** УКЛА
- **Связанные исследования:** Образование массовой спектрометрии, модели диффузии, модели диффузии моста Брауна, стратегии выбора каналов на основе SNR.
- **Журнал публикации:** Продвижение науки, 2025 год
- **Ссылка на статью:** [Виртуальная окраска тканей без этикетки в виде визуализации массовой спектрометрии](https://go.hyper.ai/X9GEn)

### **60. [Medical GraphRAG побила рекорды точности QA, достигнув SOTA на 11 наборах данных сбалансированных показателей](https://hyper.ai/news/43064)**

- **Ключевой результат исследования:** [https://hyper.ai/news/43064](https://hyper.ai/news/43064)
- **Исследовательская группа:** Оксфордский университет, Университет Эдинбурга
- **Связанные исследования:** RAG, Medical GraphRAG, методы вывода U, MIMIC-IV, FakeHealth, PubHealth.
- **Журнал публикации:** ACL 2025, 2025.07
- **Ссылка на статью:** [Медицинская графика RAG: к безопасной медицинской модели большого языка через увеличенное поколение извлечения графика](https://go.hyper.ai/OaMIE)

### **61. [Агент здравоохранения автоматически обнаруживает проблемы медицинской этики и безопасности](https://hyper.ai/news/44006)**

- **Ключевой результат исследования:** [https://hyper.ai/news/44006](https://hyper.ai/news/44006)
- **Исследовательская группа:** Уханьский университет, НТУ
- **Связанные исследования:** LLM, медицинские консультации, медицинский агент, набор данных MedDialog.
- **Журнал публикации:** Природа Искусственный Интеллект, 2025.09
- **Ссылка на статью:** [Агент здравоохранения: создание мощности больших языковых моделей для медицинской консультации](https://go.hyper.ai/09lYX)

### **62. [Классификатор образов кровяных клеток CytoDiffusion помогает в обнаружении лейкемии, превосходя клинических экспертов](https://hyper.ai/news/47004)**

- **Ключевой результат исследования:** [https://hyper.ai/news/47004](https://hyper.ai/news/47004)
- **Исследовательская группа:** Кембриджский университет
- **Связанные исследования:** Глубокое обучение, анализ медицинских изображений, CNN, CytoDiffusion, CytoData, Raabin-WBC, модели диффузии.
- **Журнал публикации:** Природа, 2025 год.11
- **Ссылка на статью:** [Глубокая генерирующая классификация морфологии кровяных клеток](https://www.nature.com/articles/s42256-025-01122-7)

### **63. [Команда UCL предлагает федеральную систему обучения MORPHFED для межинституционного анализа морфологии крови](https://hyper.ai/news/49373)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49373](https://hyper.ai/news/49373)
- **Исследовательская группа:** Отдел информатики УКЛ
- **Связанные исследования:** Проверки морфологии крови, анализ морфологии белых кровяных клеток, Федеративное обучение, медицинское искусство искусственного интеллекта, сохраняющее конфиденциальность.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [MORPHFED: Федеральное обучение для межведомственного анализа морфологии крови](https://arxiv.org/abs/2601.04121)

### **64. [Французская команда предлагает объясняемую систему машинного обучения для точного прогнозирования смертности у кандидатов на трансплантацию печени HCC](https://hyper.ai/news/49742)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49742](https://hyper.ai/news/49742)
- **Исследовательская группа:** Télécom Paris и Университет Париж-Саклей
- **Связанные исследования:** Гепатоклеточная карцинома (ГКК), риск смертности от пересадки печени, групповое обучение, анализ SHAP.
- **Журнал публикации:** Наука о данных о здоровье
- **Ссылка на статью:** [Объясненное предсказание смертности кандидатов на пересадку печени с гепатоклеточной карциномой: подход к контролируемому кластерированию](https://spj.science.org/doi/10.34133/hds.0295)

### **65. [Стэнфордский университет предлагает Мерлина, первую родной модель 3D-компьютерного томографического языка зрения](https://hyper.ai/news/49864)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49864](https://hyper.ai/news/49864)
- **Исследовательская группа:** Стэнфордский университет
- **Связанные исследования:** Компьютерная томография живота (КТ), 3D-модели зрения-языка (3D VLM), Мерлин, электронные записи здоровья (EHR).
- **Журнал публикации:** Природа
- **Ссылка на статью:** [Мерлин: компьютерное томографическое видениемодель основы языка и набор данных](https://www.nature.com/articles/s41586-026-10181-8)

## **ИИ + химия материалов**

*(Включения продолжаются по точной структуре) *

### **1. [Высокопроизводительная вычислительная система создает 120 000 новых кандидатов в МОФ за 33 минуты](https://hyper.ai/news/30269)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30269](https://hyper.ai/news/30269)
- **Исследовательская группа:** Исследовательская группа Элю А. Хуэрты в Национальной лаборатории Аргон
- **Связанные исследования:** hMOFs набор данных, генерирующий ИИ, GHP-MOFsassemble, MMPA, DiffLinker, CGCNN, GCMC.
- **Журнал публикации:** Природа, 2024.02
- **Ссылка на статью:** [Генеративная система искусственного интеллекта, основанная на модели молекулярного диффузии для проектирования металлико-органических систем для захвата углерода](https://www.nature.com/articles/s42004-023-01090-2)

### **2. [Экраны алгоритма машинного обучения электроды P-SOC](https://hyper.ai/news/29069)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29069](https://hyper.ai/news/29069)
- **Исследовательская группа:** Исследовательская группа Сию Е в Гуанчжоуском университете
- **Связанные исследования:** XGBoost, модели машинного обучения, RF, DFT. Успешно профиксированный электродный материал LCN91.
- **Журнал публикации:** ПРОДУГНЫЕ Функциональные материалы, 2023.12
- **Ссылка на статью:** [Скрининг с помощью машинного обучения на основе протонопроводящего оксида на основе CO/Fe для воздушного электрода протоновой твердой оксидной клетки](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202309855)

### **3. [Модель машинного обучения SEN обеспечивает высокоточное прогнозирование свойств материала](https://hyper.ai/news/28410)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28410](https://hyper.ai/news/28410)
- **Исследовательская группа:** Группа Хуасхана Ли и Бяо Ван в Университете Сун Ят-сена
- **Связанные исследования:** База данных проекта материалов, SEN, механизм капсулы, глубокое обучение.
- **Журнал публикации:** Сообщения о природе, 2023.08
- **Ссылка на статью:** [Распознавание симметрии материала и прогнозирование свойств, выполненные посредством представления кристаллической капсулы](https://www.nature.com/articles/s41467-023-40756-2)

### **4. [Инструмент глубокого обучения GNoME обнаружил 2,2 миллиона новых кристаллов](https://hyper.ai/news/28347)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28347](https://hyper.ai/news/28347)
- **Исследовательская группа:** Исследовательская группа Google DeepMind
- **Связанные исследования:** База данных GNoME, GNoME, модели SOTA GNN, глубокое обучение, Проект материалов, OQMD, WBM, ICSD.
- **Журнал публикации:** Природа, 2023 год.
- **Ссылка на статью:** [Масштабирование глубокого обучения для обнаружения материалов](https://www.nature.com/articles/s41586-023-06735-9)

### **5. [Рекурсивно встроенная атомная нейронная сеть, вызванная полем, точно описывает изменения силы и направления внешнего поля](https://hyper.ai/news/28285)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28285](https://hyper.ai/news/28285)
- **Исследовательская группа:** Группа Бин Цзян в USTC
- **Связанные исследования:** Полево-индуцированная рекурсивно встроенная атомная нейронная сеть FIREANN, модель FIREANN-wF.
- **Журнал публикации:** Сообщение о природе, 2023.10
- **Ссылка на статью:** [Универсальное машинное обучение для реагирования атомных систем на внешние поля](https://www.nature.com/articles/s41467-023-42148-y)

### **6. [Машинное обучение предсказывает адсорбцию воды изотермы пористого материала](https://hyper.ai/news/28260)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28260](https://hyper.ai/news/28260)
- **Исследовательская группа:** Группа Сон Ли в HUST
- **Связанные исследования:** База данных EWAID, модели машинного обучения, RF, ANN.
- **Журнал публикации:** Журнал химии материалов А, 2023.09
- **Ссылка на статью:** [Прогноз изотерм адсорбции воды и эффективность охлаждения, подкрепленный машинным обучением](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA03586G)

### **7. [Использование машинного обучения для оптимизации кокатализаторов для фотоанодов BiVO(4)](https://hyper.ai/news/28013)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28013](https://hyper.ai/news/28013)
- **Исследовательская группа:** Группа Хонвея Чжу в университете Цинхуа
- **Связанные исследования:** ML, нейронные сети, алгоритм AdaBoost, Ускорение градиента, самообъяснимые модели, алгоритмы сборки, перекрестная проверка.
- **Журнал публикации:** Журнал химии материалов А, 2023.10
- **Ссылка на статью:** [Комплексная стратегия машинного обучения для проектирования высокопроизводительных фотоанодных катализаторов](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA04148D)

### **8. [Алгоритм RetroExplainer выполняет прогнозы ретросинтеза на основе глубокого обучения](https://hyper.ai/news/27406)**

- **Ключевой результат исследования:** [https://hyper.ai/news/27406](https://hyper.ai/news/27406)
- **Исследовательская группа:** Университет Шандонг, UESTC
- **Связанные исследования:** RetroExplainer, глубокое обучение, MSMS-GT, DAMT, модули для интерпретации решений.
- **Журнал публикации:** Сообщения о природе, 2023.10
- **Ссылка на статью:** [Прогноз ретросинтеза с интерпретируемой базой глубокого обучения, основанной на задачах молекулярного сборки](https://www.nature.com/articles/s41467-023-41698-5)

### **9. [Глубокие нейронные сети + НЛП, используемые для разработки коррозионно-устойчивых сплавов](https://hyper.ai/news/25891)**

- **Ключевой результат исследования:** [https://hyper.ai/news/25891](https://hyper.ai/news/25891)
- **Исследовательская группа:** Макс-Планк-Институт по исследованиям (Германия)
- **Связанные исследования:** DNN, NLP. Читает текстовые данные о методах обработки и испытаний сплавов, способных предсказать новые элементы.
- **Журнал публикации:** Продвижение науки, 2023 год
- **Ссылка на статью:** [Улучшение конструкции коррозионно-устойчивых сплавов путем обработки естественного языка и глубокого обучения](https://www.science.org/doi/10.1126/sciadv.adg7992)

### **10. [Глубокое обучение определяет внутренние структуры материалов посредством поверхностных наблюдений](https://hyper.ai/news/25859)**

- **Ключевой результат исследования:** [https://hyper.ai/news/25859](https://hyper.ai/news/25859)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** Глубокое обучение, вычисления FEA, инструменты визуализации Abaqus, GAN, ViViT, CNN.
- **Журнал публикации:** Продвинутые материалы, 2023.03
- **Ссылка на статью:** [Заполните пустоту: Передаваемые подходы к глубокому обучению для восстановления отсутствующей физической полевой информации](https://onlinelibrary.wiley.com/doi/full/10.1002/adma.202301449)

### **11. [Разработка 3 новых материалов с использованием инновационных рентгеновских искрильторов](https://hyper.ai/news/31465)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31465](https://hyper.ai/news/31465)
- **Исследовательская группа:** Исследовательская группа Хайлай Чжан в Университете Хэбэй
- **Связанные исследования:** Водноразносные рентгеновские искры, наноматериалы, полиуретановая пеня, рентгеновские экраны гибких гидрогельных искров, многоуровневые антифальсификационные информационно-шифровочные композитные гидрогелы.
- **Журнал публикации:** Сообщения о природе, 2024.03
- **Ссылка на статью:** [Водоразносные рентгеновские искрильтеры, позволяющие покрывать и смешивать с полимерными материалами для нескольких применений](https://www.nature.com/articles/s41467-024-46287-8)

### **12. [Полунадзорное обучение извлекает скрытую информацию из неотделенных данных](https://hyper.ai/news/31089)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31089](https://hyper.ai/news/31089)
- **Исследовательская группа:** Исследовательская группа Джияу Уан в СЖТУ
- **Связанные исследования:** Полунадзорное обучение, не маркированные данные, баезианское совместное обучение, модели частичного просмотра, модели полного просмотра. Улучшенная точность прогнозирования срока службы литийной батареи на 20%.
- **Журнал публикации:** Джоул, 2024.03
- **Ссылка на статью:** [Полунадзорное обучение для объясняемого прогноза продолжительности работы батареи с несколькими выстрелами](https://doi.org/10.1016/j.joule.2024.02.020 )

### **13. [Автоматизированная извлечение знаний на основе AutoML](https://hyper.ai/news/30920)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30920](https://hyper.ai/news/30920)
- **Исследовательская группа:** Юлиан - исследовательский коллектив в СДТУ
- **Связанные исследования:** АвтоМЛ, катализаторы, энергия химиосъемки, Eads-ценность, эксперименты с удалением функций, нейронные сети, высокопроизводительная DFT.
- **Журнал публикации:** ПНАС, 2024.03
- **Ссылка на статью:** [Интерпретация прочности химиосасывания с помощью экспериментов по удалению функций на основе AutoML](https://hyper.ai/news/30920)

### **14. [Uni-MOF: модель машинного обучения, предсказывающая поведение адсорбции в 3D-материалах MOF](https://hyper.ai/news/30663)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30663](https://hyper.ai/news/30663)
- **Исследовательская группа:** Исследовательская группа Дианана Лу, отделение химической инженерии Университета Цинхуа
- **Связанные исследования:** hMOFs50 база данных, базы данных MOF/COF, тонкая настройка Uni-MOF. Оценили более 630 000 3D пространственных конфигураций и межатомных связей.
- **Журнал публикации:** Сообщения о природе, 2024.03
- **Ссылка на статью:** [Комплексный подход на основе трансформатора для высокоточности прогнозирования адсорбции газа в металлических органических структурах](https://www.nature.com/articles/s41467-024-46276-x)

### **15. [Микроэлектроника приближается к эпохе после закона Мура! Объединение DNN с технологией наномембран позволяет точно анализировать углы падения света](https://hyper.ai/news/32326)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32326](https://hyper.ai/news/32326)
- **Исследовательская группа:** Группа Йонгфэн Мэй в университете Фудана
- **Связанные исследования:** Модели конечных элементов, модели сжатого наномембранного выпуска, законы Фика, глубокие нейронные сети, 3D фотодетекторы, модели обнаружения, чувствительные к углу.
- **Журнал публикации:** Сообщения о природе, 2024.04
- **Ссылка на статью:** [Многоуровневый дизайн и строительство наномембранного роликов для трехмерной фотоотчетности по углу](https://www.nature.com/articles/s41467-024-47405-2)

### **16. [Переопределение границ производительности литийных батарей, предложение упрощенной электрохимической модели, основанной на обучении в ансамблях](https://hyper.ai/news/32323)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32323](https://hyper.ai/news/32323)
- **Исследовательская группа:** Команда Цзянцзян Кан в Уханьском технологическом университете
- **Связанные исследования:** Упрощенные электрохимические модели, модели ансамбля обучения, машинное обучение, Инертический элемент первого порядка (FIE), алгоритм реализации дискретного времени (DRA), приближение Паде по частичному порядку (FOM), приближение параболического трех параметров (TPM).
- **Журнал публикации:** Наука, 2024.05
- **Ссылка на статью:** [Упрощенная электрохимическая модель литий-ионных батарей на основе ансамбльского обучения](https://www.sciencedirect.com/science/article/pii/S2589004224009076)

### **17. [Самый сильный на железе сверхпроводящий магнит, созданный в результате машинного обучения](https://hyper.ai/news/32556)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32556](https://hyper.ai/news/32556)
- **Исследовательская группа:** Токийский университет сельского хозяйства и технологий
- **Связанные исследования:** BOXVIA машинное обучение, циркуляции, основанные на данных, цифровые модели, на основе железа сверхпроводящий постоянный магнит Ba122, модели магнизации с полями (FCM).
- **Журнал публикации:** NPG Asia Materials, 2024.06
- **Ссылка на статью:** [Суперсильные постоянные магниты с железными сверхпроводниками по проектированию процессов, основанным на данных и исследователях](https://www.nature.com/articles/s41427-024-00549-5)

### **18. [Нейронные сети заменяют теорию функционала плотности! Универсальная модель материалов обеспечивает сверхточные прогнозы](https://hyper.ai/news/32891)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32891](https://hyper.ai/news/32891)
- **Исследовательская группа:** Команда Йонг Сю и Вэнхуи Дуан на кафедре физики Университета Цинхуа
- **Связанные исследования:** База данных материалов Проект, метод глубокого обучения DFT-Гамилтонский (DeepH), универсальные модели материалов, нейронные сети, эквивалентные нейронные сети, AiiDA-фреймворк.
- **Журнал публикации:** Научный бюллетени, 2024.06
- **Ссылка на статью:** [Универсальная модель материалов теории функциональной плотности глубокого обучения](https://doi.org/10.1016/j.scib.2024.06.011)

### **19. [Функциональная структура плотности нейронной сети открывает черную ящик электронной структуры материи](https://hyper.ai/news/33525)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33525](https://hyper.ai/news/33525)
- **Исследовательская группа:** Группа Йонг Сю и Вэнхуи Дуан в университете Цинхуа
- **Связанные исследования:** Нейронная сеть DFT, вариационная DFT, эквивалентные нейронные сети, язык Джулии, рамки Zygote AD, глубокое обучение, неконтролируемое обучение, DFT.
- **Журнал публикации:** Физика, Рев. Летт., 2024.08
- **Ссылка на статью:** [Функциональная теория плотности нейронной сети, основанная на вариационной энергетической минимизации](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.076401)

### **20. [Первая полностью форвардная архитектура обучения оптическому вычислению с использованием нейронных сетей достигает крупного прорыва в отечественных оптических чипах](https://hyper.ai/news/33440)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33440](https://hyper.ai/news/33440)
- **Исследовательская группа:** Исследовательская группа Цзянхай Дай и Лу Фанг в университете Цинхуа
- **Связанные исследования:** Нейронные сети, полностью переходный режим, машинное обучение, MNIST, Fashion-MNIST, CIFAR-10, ImageNet, MWD, Iris, Chromium цельные наборы данных.
- **Журнал публикации:** Природа, 2024.08
- **Ссылка на статью:** [Обучение в полном режиме форварда для оптических нейронных сетей](https://www.nature.com/articles/s41586-024-07687-4)

*(В связи с ограничениями длины перевод точно отображает предоставленную структуру. Для сохранения полной форматизации и согласованности, аналогичные правила перевода применяются к разделам 21-54 AI+ Материалы Химия, в целом AI+ Зоологии-Ботоника, AI+ Сельское хозяйство-Лесоводство-Зветноводство, AI+ Метеорология, AI+ Астрономия, AI+ Природные бедствия, AI4S Политика и другие. Вот переводный текст для оставшихся категоризированных статей, соответствующих вашему точному вводу.) *

### **21. [Химия LLM ChemLLM охватывает 7 миллионов данных QA, профессиональные возможности соперничают с GPT-4](https://hyper.ai/news/34170)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34170](https://hyper.ai/news/34170)
- **Исследовательская группа:** Шанхайская лаборатория искусственного интеллекта
- **Связанные исследования:** Большой химический набор данных ChemData, ChemPref-10K английский/китайский набор данных, C-MHChem набор данных, ChemBench4K, ChemBench, Multi-Corpus, NLP задачи.
- **Журнал публикации:** Архив, 2024.02
- **Ссылка на статью:** [Химический языковой метод](https://arxiv.org/abs/2402.06852)

### **22. [Микроспектрометры, адаптивные для ИИ, производимые в масштабе "ваферов"](https://hyper.ai/news/34075)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34075](https://hyper.ai/news/34075)
- **Исследовательская группа:** Группа Йонгфэн Мэй в университете Фудана
- **Связанные исследования:** Оптические спектрометры, миниатюрные реконструктивные спектрометры, процессы IC CMOS, набор данных течения узкого канала.
- **Журнал публикации:** ПНАС, 2024.08
- **Ссылка на статью:** [CMOS-совместимые реконструктивные спектрометры с интегрированными резонаторами из ткани и перто с самореференцированной системой](https://www.pnas.org/doi/10.1073/pnas.2403950121)

### **23. [Модель GNNOpt идентифицирует сотни кандидатов в сотовые элементы и квантовый материал](https://hyper.ai/news/35009)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35009](https://hyper.ai/news/35009)
- **Исследовательская группа:** Университет Тохоку, МИТ
- **Связанные исследования:** Расчеты DFT, GNNOpt, встроенные наборные элементы, эквивалентные GNN, база данных проектов материалов.
- **Журнал публикации:** Усовершенствованные материалы, 2024.06
- **Ссылка на статью:** [Универсальная система интеграции графики для прямого прогнозирования оптических спектров из кристальных структур](https://onlinelibrary.wiley.com/doi/epdf/10.1002/adma.202409175)

### **24. [Открытый набор данных OMat24 содержит 110 миллионов результатов расчета DFT](https://hyper.ai/news/35515)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35515](https://hyper.ai/news/35515)
- **Исследовательская группа:** Мета
- **Связанные исследования:** Открытые материалы 2024 (OMat24), EquformerV2 (eqV2), ab initio MD.
- **Журнал публикации:** Архив, 2024.10
- **Ссылка на статью:** [Открытые материалы 2024 (OMat24) Неорганические материалы Сборник данных и модели](https://arxiv.org/pdf/2410.12771)

### **25. [Новая рефракторная высокоэнтропическая сплав синтезируется с помощью машинного обучения имеет отличную дюктильность при комнатной температуре](https://hyper.ai/news/35536)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35536](https://hyper.ai/news/35536)
- **Исследовательская группа:** Команда Янцзина Су в Университете науки и технологии Пекина
- **Связанные исследования:** ML в сочетании с генетическим поиском, кластеринговым анализом, многоцелевой оптимизацией (MOO) рамок.
- **Журнал публикации:** Инженерная, 2024.09
- **Ссылка на статью:** [Составная конструкция рефракторных сплавов с высокой энтропией с оптимальной прочностью и дуктильностью, при помощи машинного обучения](https://www.sciencedirect.com/science/article/pii/S2095809924005113 )

### **26. [Материально-генеративная модель FlowLLM включает в себя набор данных, охватывающий более 45 000 материалов](https://hyper.ai/news/35846)**

- **Ключевой результат исследования:** [https://hyper.ai/news/35846](https://hyper.ai/news/35846)
- **Исследовательская группа:** Мета-Фейр, Амстердамский университет
- **Связанные исследования:** FlowLLM, S.U.N. генерация материалов, LLMs, Риманнианское сопоставление потоков (RFM), MP-20 набор данных, LoRA.
- **Журнал публикации:** НейрИПС 2024, 2024.10
- **Ссылка на статью:** [FlowLLM: Соответствие потока для генерирования материалов с большими языковыми моделями в качестве базовых распределений](https://arxiv.org/pdf/2410.23405)

### **27. [Используя активное обучение для выявления 14 000 высокоэнтропических оксидов, успешно проверяется 4 высокоактивных катализатора эволюции водорода](https://hyper.ai/news/36352)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36352](https://hyper.ai/news/36352)
- **Исследовательская группа:** Команда Шуна Ван в Цинхуа, Лян Ву в СЖТУ, Шэнцзи Чу в IHEP CAS, Гуан Лин в Пурду, Ян Сянь в Дюк
- **Связанные исследования:** Активное обучение (AL), выбор образцов Кеннарда- Стоуна, катализаторы XRD, CrMnCoNiCu.
- **Журнал публикации:** Журнал Американского химического общества, 2024.10
- **Ссылка на статью:** [Активное обучение - Руководство к обнаружению высокоэнтропических оксидов с высоким содержанием H2](https://pubs.acs.org/doi/10.1021/jacs.4c06272)

### **28. [Модель глубокого обучения BETE-NET повышает эффективность поиска сверхпроводящих материалов в 5 раз](https://hyper.ai/news/37658)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37658](https://hyper.ai/news/37658)
- **Исследовательская группа:** Университет Флориды, Университет Теннесси
- **Связанные исследования:** BETE-NET, α2F(ω) наборы данных, наборы данных спектральных функций Eliashberg.
- **Журнал публикации:** npj Вычислительные материалы, 2025.01
- **Ссылка на статью:** [Ускорение обнаружения сверхпроводников посредством сдержанного глубокого изучения спектральной функции электронов-фононов](https://www.nature.com/articles/s41524-024-01475-4)

### **29. [Технология дерева решения по ускорению степени (GBDT) еще больше улучшает высокоточное предсказание окислительной устойчивости высокоэнтропических сплавов](https://hyper.ai/news/37723)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37723](https://hyper.ai/news/37723)
- **Исследовательская группа:** Совместная группа из Университета Бордо, NIMS (Япония), NTHU (Тайвань), KU Leuven, WEL Research Institute
- **Связанные исследования:** Технология GBDT, алгоритм XGBoost, материалы с высокой температурой, сплавы с высокой энтропией (RHEAs и RCCAs).
- **Журнал публикации:** Scripta Materialia, 2025.01
- **Ссылка на статью:** [Продвижение развития рефракторных сплавов с высокой энтропией с помощью модели, предсказуемой ИИ, для высокотемпературного окисления](https://doi.org/10.1016/j.scriptamat.2024.116394)

### **30. [Молекулярная конструкция RingFormer более точно предсказывает органический материал молекулярные оптоэлектронные свойства](https://hyper.ai/news/37870)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37870](https://hyper.ai/news/37870)
- **Исследовательская группа:** Политехнический университет Гонконга
- **Связанные исследования:** Молекулярный дизайн, архитектуры трансформаторов, органические солнечные элементы, графические нейронные сети, RingFormer.
- **Журнал публикации:** ААИ 2025 г., 2024.12
- **Ссылка на статью:** [RingFormer: Трансформатор графики с улучшением кольца для прогнозирования свойств органических солнечных клеток](https://doi.org/10.48550/arXiv.2412.09030)

### **31. [Метод планирования неорганического ретросинтеза Retrieval-Retro повышает эффективность и точность синтеза неорганического материала](https://hyper.ai/news/37969)**

- **Ключевой результат исследования:** [https://hyper.ai/news/37969](https://hyper.ai/news/37969)
- **Исследовательская группа:** КРИКТ, KAIST
- **Связанные исследования:** Вызовывание-ретро, конволюционные ВАЭ, маскированные прекурсоры, энергетические реакции.
- **Журнал публикации:** НейрИПС 2024, 2024.10
- **Ссылка на статью:** [Retrieval-Retro: неорганический ретросинтез на основе извлечения с экспертными знаниями](https://doi.org/10.48550/arXiv.2410.21341)

### **32. [Использование крупных моделей для расшифровки механизмов провода электролитов гидридов твердого состояния, создание надежной модели прогнозирования энергии активации](https://hyper.ai/news/39173)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39173](https://hyper.ai/news/39173)
- **Исследовательская группа:** Университет Тохоку, Университет Сычуана, Технологический институт Шибаура
- **Связанные исследования:** Электролиты твердого состояния (ЭЭС), LLM, метадинамика с началом (MetaD).
- **Журнал публикации:** Ангеванде Химия-Международное издание, 2025.04
- **Ссылка на статью:** [Разработка сложности дививалентных гидридных электролитов в твердых батареях с помощью основанной на данных системы с большим языковым моделем](https://go.hyper.ai/isQRi)

### **33. [Поиск данных массовой спектрометрии в терахэра-массе с помощью машинного обучения обнаруживает неизвестные химические реакции](https://hyper.ai/news/39224)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39224](https://hyper.ai/news/39224)
- **Исследовательская группа:** Российская академия наук и другие
- **Связанные исследования:** Массовая спектрометрия, поисковая система с использованием ML MEDUSA Search, база данных PubChem.
- **Журнал публикации:** Сообщения о природе, 2025.01
- **Ссылка на статью:** [Открытие органических реакций с помощью машинного обучения, расшифровывающего данные массовой спектрометрии в терах](https://go.hyper.ai/ak7bN)

### **34. [Метод генеративного решения структуры ИИ PXRDnet на основе моделей диффузии успешно решает 200 сложных моделируемых нанокристаллов](https://hyper.ai/news/39287)**

- **Ключевой результат исследования:** [https://hyper.ai/news/39287](https://hyper.ai/news/39287)
- **Исследовательская группа:** Колумбийский университет, Стэнфордский университет
- **Связанные исследования:** Рентгеновская дифракция, PXRDnet, база данных с эталоном MP-20-PXRD, база данных материалов проекта, архитектура CDVAE, регрессоры PXRD.
- **Журнал публикации:** Материалы природы, 2025.04
- **Ссылка на статью:** [Сортированные растворы из нанокристаллических данных дифракции порошка с помощью моделей диффузии](https://go.hyper.ai/r1K6b)

### **35. [Модель DreaMS охватывает 200 миллионов спектров молекулярной массы, создавая крупнейший в мире набор данных по массовым характеристикам GeMS](https://hyper.ai/news/40201)**

- **Ключевой результат исследования:** [https://hyper.ai/news/40201](https://hyper.ai/news/40201)
- **Исследовательская группа:** Институт органической химии и биохимии, Чехия
- **Связанные исследования:** ГЭМС, локально-чувствительный хашинг (LSH), архитектуры BERT, самоконтрольное обучение, функции Фурьера, линейное зондирование.
- **Журнал публикации:** Природа Биотехнологии, 2025.05
- **Ссылка на статью:** [Самоконтролируемое изучение молекулярных представлений из миллионов тандемных масс-спектров с использованием DreaMS](https://go.hyper.ai/uNbqL)

### **36. [Эквивариантная система машинного обучения ускоряет масштабные моделирование электрического поля материалов](https://hyper.ai/news/40600)**

- **Ключевой результат исследования:** [https://hyper.ai/news/40600](https://hyper.ai/news/40600)
- **Исследовательская группа:** Гарвардский университет, ООО "Роберт Бош"
- **Связанные исследования:** Рамочки машинного обучения, архитектуры нейронных сетей, вибрации материалов, диэлектрические свойства, ферроэлектрический истерез.
- **Журнал публикации:** Сообщения о природе, 2025.04
- **Ссылка на статью:** [Единое дифференцируемое обучение электрического ответа](https://go.hyper.ai/18TWg)

### **37. [Метод интеграции данных из нескольких источников экраны 25 видов альтернатив клинкеров цемента, эквивалентным сокращению 1,2 млрд тонн парниковых газов](https://hyper.ai/news/40742)**

- **Ключевой результат исследования:** [https://hyper.ai/news/40742](https://hyper.ai/news/40742)
- **Исследовательская группа:** Соруш Махжоуби и Эльза Оливеттти (МИТ)
- **Связанные исследования:** LLM, многозадачные нейронные сети, рамки оценки реактивности.
- **Журнал публикации:** Материалы связи, 2025.05
- **Ссылка на статью:** [Скрининг вторичных и природных цементированных прекурсоров на основе данных](https://go.hyper.ai/ZOAaW)

### **38. [UNIMATE впервые достигает единого моделирования топологического генерирования/предсказания собственности](https://hyper.ai/news/41186)**

- **Ключевой результат исследования:** [https://hyper.ai/news/41186](https://hyper.ai/news/41186)
- **Исследовательская группа:** Вирджиния Технология, Мета ИИ
- **Связанные исследования:** Метаматериалы, 3D топологии, машинное обучение, модель UNIMATE, механические эталоны метаматериалов.
- **Журнал публикации:** МТСК 2025, 2025.06
- **Ссылка на статью:** [UNIMATE: Единая модель для механического генерирования метаматериалов, прогнозирования свойств и подтверждения состояния](https://go.hyper.ai/FoAWw)

### **39. [Всеатомная диффузия Трансформаторная система позволяет впервые создавать единую систему периодических и апериодных атомных систем](https://hyper.ai/news/41503)**

- **Ключевой результат исследования:** [https://hyper.ai/news/41503](https://hyper.ai/news/41503)
- **Исследовательская группа:** Мета-Фейр, Кембриджский университет, МИТ
- **Связанные исследования:** Трансформаторы, набор данных MP20, набор данных QM9, набор данных GEOM-DRUGS, набор данных QMOF.
- **Журнал публикации:** МТСК 2025, 2025.06
- **Ссылка на статью:** [Всеатомные диффузионные трансформаторы: Единое генерирующее моделирование молекул и материалов](https://go.hyper.ai/27d7U)

### **40. [Модель FASTSOLV реализует предсказание растворимости малых молекул при любой температуре, ускоряя скорость вывода в 50 раз](https://hyper.ai/news/43318)**

- **Ключевой результат исследования:** [https://hyper.ai/news/43318](https://hyper.ai/news/43318)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** Прогноз растворимости малых молекул, BigSolDB, SolProp, Leeds, модель FASTSOLV.
- **Журнал публикации:** Сообщение о природе, 2025.08
- **Ссылка на статью:** [Предсказание органической растворимости на основе данных на границе алеаторной неопределенности](https://www.nature.com/articles/s41467-025-62717-7)

### **41. [Новый метод, основанный на мультимодальных моделях машинного обучения, предсказывает свойства материала без полных кристаллических структур](https://hyper.ai/news/43410)**

- **Ключевой результат исследования:** [https://hyper.ai/news/43410](https://hyper.ai/news/43410)
- **Исследовательская группа:** Отделение химической инженерии и прикладной химии, Университет Торонто
- **Связанные исследования:** Мультимодальные модели машинного обучения, набор данных CoRE-2019, набор данных BW20K, набор данных QMOF, набор данных hMOF.
- **Журнал публикации:** Сообщения о природе, 2025.07
- **Ссылка на статью:** [Подключение металлико-органического рамочного синтеза к приложениям с использованием мультимодального машинного обучения](https://www.nature.com/articles/s41467-025-62717-7)

### **42. [ИИ-модель CGformer инновационно интегрирует глобальные механизмы внимания, помогая исследованиям и развитию высокоэнтропических материалов](https://hyper.ai/news/44908)**

- **Ключевой результат исследования:** [https://hyper.ai/news/44908](https://hyper.ai/news/44908)
- **Исследовательская группа:** Команда Цзиньцзинь Ли и Фуцзянь Хуан в лаборатории AIMS, SJTU
- **Связанные исследования:** НИО высокоэнтропических материалов, модели проектирования материалов ИИ CGformer, натриево-ионных диффузионных барьерных наборов данных.
- **Журнал публикации:** Вопрос, 2025.08
- **Ссылка на статью:** [CGformer: Трансформаторная кристаллическая сеть графиков с глобальным вниманием к прогнозированию свойств материала](https://www.cell.com/matter/abstract/S2590-2385(25)00423-0)

### **43. [Новый метод интеграции структурных ограничений SCIGEN адаптируется к любой предварительно подготовленной модели диффузии](https://hyper.ai/news/44973)**

- **Ключевой результат исследования:** [https://hyper.ai/news/44973](https://hyper.ai/news/44973)
- **Исследовательская группа:** Команда Мингды Ли в МИТ, Мичиганский государственный университет, Национальная лаборатория Оук Ридж
- **Связанные исследования:** База данных материалов AL (архимедийские решетки), модели диффузии, генерация кристаллической структуры, модель DiffCSP.
- **Журнал публикации:** Материалы природы, 2025.09
- **Ссылка на статью:** [Интеграция структурных ограничений в генерирующую модель обнаружения квантовых материалов](https://www.nature.com/articles/s41563-025-02355-y)

### **44. [Физически информированная генерирующая модель ИИ SpectroGen требует только единого ввода модальности для достижения кросс-модального поколения с 99% экспериментальной корреляцией](https://hyper.ai/news/45456)**

- **Ключевой результат исследования:** [https://hyper.ai/news/45456](https://hyper.ai/news/45456)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** SpectroGen, база данных RRUFF, рамки VAE, физические предыдущие модели.
- **Журнал публикации:** Вопрос, 2025 год.
- **Ссылка на статью:** [SpectroGen: физически информированный генерирующий искусственный интеллект для ускоренной характеристики спектроскопических материалов с кросс-модальностью](https://www.cell.com/matter/abstract/S2590-2385(25)00477-1)

### **45. [MOF-ChemUnity восстанавливает панорамные знания MOF, продвигая открытие материалов в эпоху "Отъяснимого ИИ"](https://hyper.ai/news/46723)**

- **Ключевой результат исследования:** [https://hyper.ai/news/46723](https://hyper.ai/news/46723)
- **Исследовательская группа:** Университет Торонто, Центр исследований инноваций в области чистой энергетики (NRC Canada)
- **Связанные исследования:** Наука о материалах, МОФ-ХемОбъединение, база данных МОФ 2019 года, база данных КМОФ, LLM, RAG с графиком.
- **Журнал публикации:** Издания АКС, 2025.11
- **Ссылка на статью:** [MOF-ChemUnity: Большие языковые модели для исследования металлических Органических рамок](https://pubs.acs.org/doi/10.1021/jacs.5c11789)

### **46. [Выпущен легкий универсальный потенциальный модель PET-MAD, достигающий специальной точности уровня модели с минимальными образцами](https://hyper.ai/news/47637)**

- **Ключевой результат исследования:** [https://hyper.ai/news/47637](https://hyper.ai/news/47637)
- **Исследовательская группа:** ЭПФЛ
- **Связанные исследования:** Первые принципы расчетов, машинное обучение межатомных потенциалов, модель PET-MAD, структура трансформатора Point Edge.
- **Журнал публикации:** Сообщения о природе
- **Ссылка на статью:** [PET-MAD как легкий универсальный межатомный потенциал для моделирования передовых материалов](https://www.nature.com/articles/s41467-025-65662-7)

### **47. [Система ИИ "Хемоонтология" выпущена, снижая вдвое затраты на поиск реакционных путей путем интеграции химических знаний](https://hyper.ai/news/48069)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48069](https://hyper.ai/news/48069)
- **Исследовательская группа:** Университет Хоккайдо
- **Связанные исследования:** Поверхность потенциальной энергии (PES), внутренние координаты реакции (IRC), искусственная сила, вызванная реакцией (AFIR), химиоэнтология.
- **Журнал публикации:** Катализ АСС
- **Ссылка на статью:** [Химоонтология: экспресс-химический метод, основанный на онтологии, для ускорения поиска пути реакции](https://pubs.acs.org/doi/10.1021/acscatal.5c06298)

### **48. [Принстон и другие совместно предлагают метод LLM для прогнозирования свободной энергии MOF, высоко точно оценивая целесообразность синтеза](https://hyper.ai/news/48685)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48685](https://hyper.ai/news/48685)
- **Исследовательская группа:** Принстонский университет и Колорадоская школа горных работ
- **Связанные исследования:** Металлоорганические рамки (MOF), предсказание свободной энергии, Большие языковые модели (LLM), термодинамическая оценка.
- **Журнал публикации:** JACS (ACS Publications)
- **Ссылка на статью:** [Высокоточный и быстрый прогноз свободной энергии MOF посредством машинного обучения](https://pubs.acs.org/doi/10.1021/jacs.5c13960)

### **49. [Команда Йельского университета предлагает модель MOSAIC, координируя LLM для создания высоконадежных систем химического синтеза](https://hyper.ai/news/48806)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48806](https://hyper.ai/news/48806)
- **Исследовательская группа:** Исследовательская группа Йельского университета
- **Связанные исследования:** Современная синтетическая химия, LLM, модель MOSAIC, структурирование знаний.
- **Журнал публикации:** Природа
- **Ссылка на статью:** [Коллективный интеллект для химического синтеза с помощью ИИ](https://www.nature.com/articles/s41586-026-10131-4)

### **50. [MIT и другие предлагают модель диффузии DiffSyn, позволяющую генерировать планирование путей синтеза материалов](https://hyper.ai/news/49252)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49252](https://hyper.ai/news/49252)
- **Исследовательская группа:** MIT, Технический университет Мюнхена и Университет Политеники Валенсии
- **Связанные исследования:** Планирование синтеза материалов, генеративная диффузионная модель DiffSyn, зеолиты.
- **Журнал публикации:** Природа Вычислительная наука
- **Ссылка на статью:** [DiffSyn: генеративный подход к диффузионному планированию синтеза материалов](https://www.nature.com/articles/s43588-025-00949-9)

### **51. [Университет Мичигана и Farasis Energy совместно предлагают метод "Обучение открытия", который резко сократит циклы прогнозирования срока службы батареи](https://hyper.ai/news/49527)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49527](https://hyper.ai/news/49527)
- **Исследовательская группа:** Профессор Зию Сонг из Университета Мичигана в Энн-Арборе и команда Вайрана Цзян в Farasis Energy
- **Связанные исследования:** Прогноз жизненного цикла батареи, открытие обучения (DL), научное машинное обучение, набор данных ячеек литий-ионных ячеек.
- **Журнал публикации:** Природа
- **Ссылка на статью:** [Discovery Learning прогнозирует срок службы батареи из минимальных экспериментов](https://www.nature.com/articles/s41586-025-09951-7)

### **52. [Корнеллский университет предлагает систему SCAN, которая очень точно предсказывает и объясняет эффективность электролитов батареи.](https://hyper.ai/news/49537)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49537](https://hyper.ai/news/49537)
- **Исследовательская группа:** Исследовательская группа Корнеллского университета
- **Связанные исследования:** Химия соляного растворителя, неводные электролиты (NAE), SCAN-фреймворк, многофункциональная сеть (MFNet), стратегия динамического маршрутизации.
- **Журнал публикации:** Природа Вычислительная наука
- **Ссылка на статью:** [Динамическая рутинговая интерпретируемая система для химии соляных растворителей](https://www.nature.com/articles/s43588-026-00955-5)

### **53. [MIT предлагает основной большой модель DefectNet для неразрушительной характеристики и количественной оценки внутренних дефектов материала](https://hyper.ai/news/50122)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50122](https://hyper.ai/news/50122)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** Наука о материалах, инженерная инженерия с дефектами, неразрушительная характеристика, вибрационные спектра и плотность фоновых соединений (PDoS), дефект-нет, машинное обучение межатомные потенциалы (MLIP).
- **Журнал публикации:** Архив
- **Ссылка на статью:** [Основная модель для идентификации неразрушительных дефектов из вибрационных спектров](https://arxiv.org/abs/2506.00725)

### **54. [Корнеллский университет предлагает многоагентную платформу EMSeek, которая позволит получить полнопроводный автоматизированный анализ электронных микроскопических изображений](https://hyper.ai/news/50298)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50298](https://hyper.ai/news/50298)
- **Исследовательская группа:** Исследовательская группа Корнеллского университета
- **Связанные исследования:** Электронная микроскопия (EM), многоагентная платформа, EMSeek, анализ материалов, структурное моделирование и вывод свойств.
- **Журнал публикации:** Научные достижения
- **Ссылка на статью:** [Мостовая электронная микроскопия и анализ материалов с использованием автономной агентической платформы](https://www.science.org/doi/10.1126/sciadv.aed0583)

## **ИИ + зоология и ботаника**

### **1. [SBeA анализирует социальные поведения животных на основе нескольких выстрелов обучения](https://hyper.ai/news/29353)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29353](https://hyper.ai/news/29353)
- **Исследовательская группа:** Исследовательская группа Пэнгфэй Вэй в Шэньчжэньском институте передовых технологий, CAS
- **Связанные исследования:** Набор данных PAIR-R24M, обучение двусторонним передачам, неконтролируемое обучение, искусственные нейронные сети, модели распознавания личности.
- **Журнал публикации:** Интеллект машины природы, 2024.01
- **Ссылка на статью:** [Оценка, идентификация и поведение социальных поз на нескольких животных в 3D с помощью нескольких кадров обучения](https://www.nature.com/articles/s42256-023-00776-5)

### **2. [Метод глубокого обучения на основе сиамских сетей автоматически захватывает процессы развития эмбрионов](https://hyper.ai/news/28419)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28787](https://hyper.ai/news/28419)
- **Исследовательская группа:** Системный биолог Патрик Мюллер и исследовательская группа Университета Констанца
- **Связанные исследования:** ImageNet набор данных, сиамские сети, глубокое обучение, передача обучения, трёхлетная потеря обучения, итеративная обучение, обучение подзадачи.
- **Журнал публикации:** Методы природы, 2023.11
- **Ссылка на статью:** [Открытие времени и темпа развития с использованием глубокого обучения](https://www.nature.com/articles/s41592-023-02083-8)

### **3. [Систематическая трубопроводная линия для сбора данных о фенотипе растений с помощью беспилотных летательных аппаратов для прогнозирования оптимальных дат урожая](https://hyper.ai/news/28303)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28303](https://hyper.ai/news/28303)
- **Исследовательская группа:** Исследовательские команды из Токийского университета и Университета Чиба
- **Связанные исследования:** Модели прогнозирования прибыли, модели сегментации, интерактивная анотация, LabelMe, нелинейные модели регрессии, модель BiSeNet.
- **Журнал публикации:** Феномика растений, 2023.09
- **Ссылка на статью:** [Прогноз урожая на основе дронов может уменьшить потерю продуктов на ферме и улучшить доход фермеров](https://spj.science.org/doi/10.34133/plantphenomics.0086#body-ref-B4)

### **4. [Система сигнализации с помощью искусственного интеллекта точно отличает тигров от других видов](https://hyper.ai/news/27954)**

- **Ключевой результат исследования:** [https://hyper.ai/news/27954](https://hyper.ai/news/27954)
- **Исследовательская группа:** Исследовательская группа Клемсонского университета
- **Связанные исследования:** TrailGuard AI передает соответствующие изображения на устройства менеджеров резерва в течение минуты.
- **Журнал публикации:** Бионаука, 2023.09
- **Ссылка на статью:** [Точный прогноз эффекта вариантов миссенса на протяжении всего протеома с помощью AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492)(Примечание: Оригинальная ссылка, предоставленная, кажется, не соответствует названию, но сохранилась как основана на исходном тексте).

### **5. [Использование данных Labrador Retriever и сравнение 3 моделей показывает поведенческие черты, влияющие на производительность собак обнаружения](https://hyper.ai/news/25472)**

- **Ключевой результат исследования:** [https://hyper.ai/news/25472](https://hyper.ai/news/25472)
- **Исследовательская группа:** Исследовательский институт Абигейл Векснер в Национальной детской больнице и Университете Рокки Виста
- **Связанные исследования:** Тесты AT, тесты Env, Random Forest, Поддерживающие векторные машины, логистическая регрессия, PCA, RFECV.
- **Журнал публикации:** Научные доклады, 2023.08
- **Ссылка на статью:** [Прогноз машинного обучения и классификация поведения в программе обнаружения обонятельных запахов собак](https://www.nature.com/articles/s41598-023-39112-7)

### **6. [Многовидовый модель распознавания изображений на основе классификации ArcFace Глава распознавания лиц](https://hyper.ai/news/25164)**

- **Ключевой результат исследования:** [https://hyper.ai/news/25164](https://hyper.ai/news/25164)
- **Исследовательская группа:** Исследовательская группа Университета Гавайев
- **Связанные исследования:** [Комплект данных о китообразных животных](https://github.com/knshnb/kaggle-happywhale-1st-place), модели сбора изображений, модели распознавания изображений, YOLOv5, Detic.
- **Журнал публикации:** Методы в области экологии и эволюции, 2023.07
- **Ссылка на статью:** [Подход к глубокому обучению фотоидентификации демонстрирует высокую производительность на двух десятках видов китовых животных](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14167)

### **7. [Мониторинг цветения цвета вишня в Японии с использованием Python API и компьютерного зрения API](https://hyper.ai/news/24512)**

- **Ключевой результат исследования:** [https://hyper.ai/news/24512](https://hyper.ai/news/24512)
- **Исследовательская группа:** Исследовательская группа Университета Монаш (Австралия)
- **Связанные исследования:** Данные сайта социальной сети (SNS), ИИ облачного видения Google, модели машинного обучения.
- **Журнал публикации:** Флора, 2023 год.
- **Ссылка на статью:** [Пространственно-временная подпись цветения цвета вишневого цвета в Японии была обнаружена в результате анализа изображений сайта социальных сетей](https://www.sciencedirect.com/science/article/abs/pii/S0367253023001019)

### **8. [Метод генетики населения, основанный на машинном обучении, показывает механизм формирования вкусов винограда](https://hyper.ai/news/24442)**

- **Ключевой результат исследования:** [https://hyper.ai/news/24442](https://hyper.ai/news/24442)
- **Исследовательская группа:** Институт сельскохозяйственной геномики в Шэньчжэнь, CAS
- **Связанные исследования:** [Секунсы генома винограда](https://github.com/zhouyflab/Grapevine_Adaptive_Maladaptive_Introgression), машинное обучение.
- **Журнал публикации:** Процессы Национальной академии наук, 2023.06
- **Ссылка на статью:** [Адаптирующая и неадаптирующая интрогрессия при приручении винограда](https://www.pnas.org/doi/abs/10.1073/pnas.2222041120)

### **9. [Обзор: более эффективное раскрытие биоинформатических исследований с помощью ИИ](https://hyper.ai/news/33931)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33931](https://hyper.ai/news/33931)
- **Основное содержание:** ИИ имеет много случаев применения в биологических областях, таких как поиск гомологии, множественное выравнивание последовательностей, филогенетическое строительство, анализ генной последовательности и обнаружение генов. Для биологических исследователей умелое интегрирование инструментов машинного обучения в анализ данных, несомненно, ускорит научные открытия и повысит эффективность исследования.

### **10. [Модель BirdFlow точно предсказывает маршруты полетов перемещающихся птиц](https://hyper.ai/news/34781)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33942](https://hyper.ai/news/33942)
- **Исследовательская группа:** Университет М.А. Амхерст, Корнелл
- **Связанные исследования:** Компьютерное моделирование, набор данных eBird, модели Маркова, поиск гиперпараметров в сети, калибровка энтропии, прогноз в течение недели.
- **Журнал публикации:** Методы в области экологии и эволюции, 2023.01
- **Ссылка на статью:** [BirdFlow: изучение сезонных движений птиц из данных eBird](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14052)

### **11. [Новая модель биоакустики китов идентифицирует 8 видов китовых](https://hyper.ai/news/34781)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34781](https://hyper.ai/news/34781)
- **Исследовательская группа:** Исследовательская группа Google
- **Связанные исследования:** мел-шкала частотных осей, амплитуда сжатого отсчета, независимый вызов через API SavedModel TensorFlow, сверточные нейронные сети, модели классификации для обнаружения вокализаций горбатых китов, интерактивный инструмент визуализации Pattern Radio. Модель специально разработана для синих китов и финвалов и распознает 8 из 94 известных видов китообразных.
- **Журнал публикации:** Google Research, 2024.09
- **Ссылка на статью:** [Свистки, песни, бунг и биоцветки: распознавание голосования китов с помощью ИИ](https://research.google/blog/whistles-songs-boings-and-biotwangs-recognizing-whale-vocalizations-with-ai)

### **12. [Машинное обучение изолирует фонетический алфавит сперматозоида, который очень похож на человеческий язык с более сильной информационно-носительной способностью](https://hyper.ai/news/33433)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33433](https://hyper.ai/news/33433)
- **Исследовательская группа:** Пратуша Шарма (МИТ) и команда проекта CETI
- **Связанные исследования:** Данные о DSWP, машинное обучение, раскрывающие структурную природу вокализации сперматозоидов.
- **Журнал публикации:** Сообщения о природе, 2024.05
- **Ссылка на статью:** [Контекстная и комбинирующая структура вокализации сперматозоидов](https://www.nature.com/articles/s41467-024-47221-8)

### **13. [Модель PlantLncBoost достигает точности до 96% в межвидовых предсказаниях lncRNA](https://hyper.ai/news/40667)**

- **Ключевой результат исследования:** [https://hyper.ai/news/40667](https://hyper.ai/news/40667)
- **Исследовательская группа:** Технологический университет Шандонг, Пекинский лесной университет, Академия сельскохозяйственных наук Гуандун, Университет Сан-Паулу, Университет медицины и науки Розалинд Франклин, Университет Умео
- **Связанные исследования:** База данных GreeNC, алгоритм PlantLncBoost, стратегия случайной важности леса (RFI), алгоритм устранения рецидивирующих функций (RFE).
- **Журнал публикации:** Новый Фитолог, 2024.05
- **Ссылка на статью:** [PlantLncBoost: ключевые особенности идентификации иннкРНК растений и значительное улучшение точности и обобщения](https://go.hyper.ai/F7pkc)

### **14. [Perch 2.0 охватывает почти 15 000 видов, освежающих SOTA в биоакустической классификации обнаружения](https://hyper.ai/news/42807)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42807](https://hyper.ai/news/42807)
- **Исследовательская группа:** Google DeepMind, Google Research
- **Связанные исследования:** Биоакустика, Perch 2.0, набор данных Xeno-Canto, набор данных iNaturalist, набор данных Tierstimmenarchiv, набор данных FSD50K, архитектура EfficientNet-B3.
- **Журнал публикации:** Архив, 2025.08
- **Ссылка на статью:** [Перх 2.0: Горький урок биоакустики](https://arxiv.org/abs/2508.04665)

## **ИИ + сельское хозяйство, лесное хозяйство и животноводство**

### **1. [Использование конвульционных нейронных сетей для быстрого и точного оценки урожая риса](https://hyper.ai/news/26100)**

- **Ключевой результат исследования:** [https://hyper.ai/news/26100](https://hyper.ai/news/26100)
- **Исследовательская группа:** Исследовательская группа Киотского университета
- **Связанные исследования:** Конвульционные нейронные сети. Модель CNN может точно анализировать полевые фотографии, полученные с разных углов, времен и периодов съемки, достигая стабильных результатов прогнозирования дохода.
- **Журнал публикации:** Феномика растений, 2023.07
- **Ссылка на статью:** [Глубокое обучение позволяет мгновенно и многосторонне оценивать урожай риса с использованием наземных изображений RGB](https://spj.science.org/doi/10.34133/plantphenomics.0073)

### **2. [Модель, разработанная с помощью алгоритмных мониторов YOLOv5 по состоянию свиньи и рождению свиньи](https://hyper.ai/news/25131)**

- **Ключевой результат исследования:** [https://hyper.ai/news/25131](https://hyper.ai/news/25131)
- **Исследовательская группа:** Исследовательская группа Нанкинского сельскохозяйственного университета
- **Связанные исследования:** YOLOv5, модели для обнаружения позы свиноматок и поросят. Система может подавать сигнал за 5 часов до начала опороса; средняя точность составляет 92,9%.
- **Журнал публикации:** Стенсоры, 2023.01
- **Ссылка на статью:** [Сеть размножения Раннее предупреждение и надзор за внедрением внедренных досок](https://www.mdpi.com/1424-8220/23/2/727)

### **3. [Сочетание лабораторных наблюдений и машинного обучения для доказательства того, что ультразвуковые звуки, выделяемые под давлением помидоров и табачных растений, могут путешествовать в воздухе](https://hyper.ai/news/24547)**

- **Ключевой результат исследования:** [https://hyper.ai/news/24547](https://hyper.ai/news/24547)
- **Исследовательская группа:** Исследовательская группа Тель-Авивского университета (Израиль)
- **Связанные исследования:** Модели машинного обучения, SVM, Basic, MFCC, Scattering network, модели нейронных сетей, переоценка с исключением одного. Точность распознавания достигла 99,7%; пик криков помидоров достиг в 4-6 дней.
- **Журнал публикации:** Клетка, 2023.03
- **Ссылка на статью:** [Звуки, выделяемые растениями под давлением, передаются в воздухе и дают информацию.](https://doi.org/10.1016/j.cell.2023.03.009)

### **4. [Анализ изображений дрона + ИИ обнаруживает вредителей лесного хозяйства](https://hyper.ai/news/23807)**

- **Ключевой результат исследования:** [https://hyper.ai/news/23807](https://hyper.ai/news/23807)
- **Исследовательская группа:** Исследовательская группа Университета Лиссабона
- **Связанные исследования:** Модель YOLO демонстрировала более высокую производительность обнаружения, чем FRCNN. Сочетание беспилотных летательных аппаратов и моделей ИИ может эффективно обеспечить раннее обнаружение гнезд хвостовых мотылок.
- **Журнал публикации:** NeoBiota, 2023.05
- **Ссылка на статью:** [Испытания раннего обнаружения гнёзд сосновых процессионных моток Thaumetopoea pityocampa с использованием методов на базе БПЛА](https://neobiota.pensoft.net/article/95692/)

### **5. [Компьютерное зрение + глубокое обучение разработанные для системы обнаружения слабости молочной коровы](https://hyper.ai/news/33957)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33957](https://hyper.ai/news/33957)
- **Исследовательская группа:** Исследовательская группа Университета Ньюкасла и Фера-Сиенс ООО
- **Связанные исследования:** Компьютерное зрение, глубокое обучение, алгоритмы Mask-RCNN, алгоритмы SORT, алгоритмы CatBoost. Точность достигла 94-100%.
- **Журнал публикации:** Природа, 2023 год
- **Ссылка на статью:** [Оценка глубокого обучения для обнаружения параличности в скоте](https://www.nature.com/articles/s41598-023-31297-1)

## **ИИ + метеорология**

### **1. [Обзор: модели прогнозирования погоды машинного обучения, основанные на данных](https://hyper.ai/news/28124)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28124](https://hyper.ai/news/28124)
- **Основное содержание:** Цифровое прогнозирование погоды (NWP) - это основной метод прогнозирования погоды. Он решает состояние системы Земли на сети по сети посредством цифровой интеграции, которая является процессом дедуктивного рассуждения. С 2022 года модели машинного обучения в прогнозировании погоды достигли серии прорывов, некоторые из которых соответствуют высокоточненным прогнозам Европейского центра прогнозирования погоды среднего радиуса действия (ECMWF).

### **2. [Обзор: сбор данных из центров градных штормов и прогнозирование экстремальной погоды с использованием крупных моделей](https://hyper.ai/news/25874)**

- **Ключевой результат исследования:** [https://hyper.ai/news/25874](https://hyper.ai/news/25874)
- **Основное содержание:** В 2021 году Академия Alibaba DAMO и Национальный метеорологический центр совместно разработали алгоритм ИИ для прогнозирования погоды, который успешно предсказал несколько опасных конвективных погодных явлений. В сентябре того же года DeepMind опубликовала в *Nature* статью о применении глубоких генеративных моделей для прогнозирования осадков в реальном времени.
В начале 2023 года DeepMind официально представила GraphCast, способную за минуту прогнозировать глобальную погоду на следующие 10 дней с разрешением 0,25°. В апреле Нанкинский университет информационных наук и технологий совместно с Шанхайской лабораторией ИИ разработал большую метеорологическую модель «FengWu», которая дополнительно снизила ошибки по сравнению с GraphCast.
Впоследствии Huawei запустила крупную модель "Pangu-Weather". Внедрением 3D нейронной сети точность прогнозирования Pangu впервые превзошла наиболее точные системы прогнозирования NWP. Недавно Университет Цинхуа и Университет Фудана последовательно выпустили модели "NowCastNet" и "FuXi".

### **3. [Создание новых алгоритмов для точного прогнозирования экстремальных осадков с использованием глобальных симуляций для решения штормов и машинного обучения](https://hyper.ai/news/24995)**

- **Ключевой результат исследования:** [https://hyper.ai/news/24995](https://hyper.ai/news/24995)
- **Исследовательская группа:** Лаборатория LEAP в Колумбийском университете
- **Связанные исследования:** Машинное обучение, базовые сети, органические сети, нейронные сети.
- **Журнал публикации:** ПНАС, 2023.03
- **Ссылка на статью:** [Непосредственное изучение конвективной организации объясняет стохастичность осадков](https://www.pnas.org/doi/10.1073/pnas.2216158120)

### **4. [Система машинного обучения на базе Random Forest Model CSU-MLP прогнозирует средне-размерную тяжелую погоду](https://hyper.ai/news/33966)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33966](https://hyper.ai/news/33966)
- **Исследовательская группа:** Университет штата Колорадо и NOAA
- **Связанные исследования:** ГЭФС/Р набор данных, машинное обучение, обработка интерполяции, RF. Способен точно предсказать тяжелую погоду в среднем диапазоне (4-8 дней).
- **Журнал публикации:** Погода и прогнозы, 2022-08
- **Ссылка на статью:** [Новая парадигма для прогнозов средне-размерной сильной погоды: вероятностные случайные прогнозы на основе леса](https://arxiv.org/abs/2208.02383)

### **5. [Система прогнозирования погоды, основанная на данных от конца к концу Aardvark Weather ускоряет прогнозы в десятки раз по сравнению с традиционными методами](https://hyper.ai/news/38605)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38605](https://hyper.ai/news/38605)
- **Исследовательская группа:** Кембриджский университет, Институт Алана Тьюринга, Университет Торонто, Microsoft Research, ECMWF, Британское антарктическое исследование, Google DeepMind
- **Связанные исследования:** Системы прогнозирования погоды, наборы данных HadISD, совместные сети наблюдения микроволновой инфракрасной радиусной связью, системы ATOVS, данные ASCAT-рассетерометров, наборы данных по переанализам ERA5, легкие конвульционные сети.
- **Журнал публикации:** Природа, 2025.03
- **Ссылка на статью:** [Прогноз погоды, основанный на данных от конца к концу](https://www.nature.com/articles/s41586-025-08897-0)

### **6. [Система прогнозирования погоды машинного обучения FCN3 поддерживает ультрабытное выводение с одной GPU](https://hyper.ai/news/42456)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42456](https://hyper.ai/news/42456)
- **Исследовательская группа:** NVIDIA, Национальная лаборатория Лоуренса Беркли (LBNL), UC Berkeley, Кальтек
- **Связанные исследования:** Цифровое прогнозирование погоды, FourCastNet 3, машинное обучение, набор данных ERA5, дизайн сферического нейронного оператора, гибридные параллельные стратегии.
- **Журнал публикации:** Архив, 2025.07
- **Ссылка на статью:** [FourCastNet 3: Геометрический подход к вероятностному прогнозу погоды в масштабе машинного обучения](https://arxiv.org/pdf/2507.12144)

### **7. [Индийская модель прогнозирования муссонов на основе 36 метеорологических станций позволяет прогнозировать в масштабе городов](https://hyper.ai/news/44271)**

- **Ключевой результат исследования:** [https://hyper.ai/news/44271](https://hyper.ai/news/44271)
- **Исследовательская группа:** IIT Бомбей, Университет Мэриленда
- **Связанные исследования:** Конволюционные нейронные сети (CNN), передача обучения (CNN-TL), прогнозирование погоды, методы синхронизации событий, прогнозирование осадков.
- **Журнал публикации:** СНР, 2025.08
- **Ссылка на статью:** [Прогнозы гиперлокальных чрезвычайных дождей в Мумбаи: подход к снижению масштабов передачи нейронных сетей на основе обучения](https://go.hyper.ai/j05Vt)

### **8. [ACE2 завершает 4-месячный сезонный прогноз всего за 2 минуты](https://hyper.ai/news/44473)**

- **Ключевой результат исследования:** [https://hyper.ai/news/44473](https://hyper.ai/news/44473)
- **Исследовательская группа:** Мета-офис Хэдли-центр, Университет Эксетера, Институт ИИ Аллена (Ai2)
- **Связанные исследования:** Сезонные прогнозы, набор данных по переанализам ERA5, Глобальный проект по климатологии осадков (GPCP) v2.3, модель атмосферного обучения машинами ACE2.
- **Журнал публикации:** npj Климатическая и атмосферная наука, 2025.08
- **Ссылка на статью:** [Умелые глобальные сезонные прогнозы из модели погоды, используемой в машинном обучении, обученные на данных переанализа](https://go.hyper.ai/YyRfT)

### **9. [Выпущена модель прогнозирования погоды VA-MoE, достигающая эффективности SOTA с снижением параметров на 75%](https://hyper.ai/news/45152)**

- **Ключевой результат исследования:** [https://hyper.ai/news/45152](https://hyper.ai/news/45152)
- **Исследовательская группа:** Гонконгский университет, Университет Чжэцзян и другие
- **Связанные исследования:** Инкрементальное прогнозирование погоды, VA-MoE, набор данных ERA5, парадыгмы обучения на двух этапах, Трансформатор, механизмы многозадачных потерь соединений, метеорологическое прогнозирование.
- **Журнал публикации:** ИКВС25-2025.07
- **Ссылка на статью:** [VA-MoE: переменная-адаптивная смесь экспертов для прогнозирования погоды](https://arxiv.org/abs/2412.02503)

### **10. [Выпущенная элюцидированная модель колебания диффузии (ERDM), решающая долгосрочные проблемы прогнозирования и сохраняющая лидерство по сравнению с базовыми линиями EDM в среднесрочных и долгосрочных прогнозах](https://hyper.ai/news/45367)**

- **Ключевой результат исследования:** [https://hyper.ai/news/45367](https://hyper.ai/news/45367)
- **Исследовательская группа:** НВИДИЯ
- **Связанные исследования:** Прогноз погоды среднего диапазона, прогрессивное планирование шума, модели элюцидированной диффузии (EDM), модели элюцидированной колебательной диффузии (ERDM), набор данных с точки зрения динамики жидкости Навиер-Стокс, набор данных по пересмотру ERA5, механизмы планирования шума, вероятность потока Обычные дифференциальные уравнения (ODE), сети обозначителей.
- **Журнал публикации:** НейрИПС 2025, 2025.06
- **Ссылка на статью:** [Элюцидированные модели колебания для прогнозирования погоды](https://doi.org/10.48550/arXiv.2506.20024)

### **11. [Новая модель латентной диффузии OmniCast выпущена, решающая накопление ошибок в авторегрессивных моделях прогнозирования погоды](https://hyper.ai/news/45701)**

- **Ключевой результат исследования:** [https://hyper.ai/news/45701](https://hyper.ai/news/45701)
- **Исследовательская группа:** Команда UCLA, Национальная лаборатория Аргона
- **Связанные исследования:** Новая модель латентной диффузии OmniCast, высокоточные вероятные прогнозы погоды S2S, Вариационные автокодеры (VAE), модели трансформаторов, совместные методы пространственно-временного выборки образцов, база данных ERA5, набор испытаний WeatherBench2 (WB2), набор испытаний ChaosBench, архитектура UNet.
- **Журнал публикации:** НейрИПС 2025, 2025.10
- **Ссылка на статью:** [OmniCast: Маскированная модель латентной диффузии для прогнозирования погоды по временным шкалам](https://go.hyper.ai/YANIu)

### **12. [NVIDIA предлагает новый метод длинногизового дистилляции, который позволит преодолеть проблемы ИИ в долгосрочных прогнозах погоды](https://hyper.ai/news/48471)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48471](https://hyper.ai/news/48471)
- **Исследовательская группа:** NVIDIA Research, Вашингтонский университет
- **Связанные исследования:** Модели прогнозирования погоды ИИ, авторегрессивные архитектуры, прогнозирование субсезонного-сезонового (S2S), длинногазовое дистилляция.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [Длинномасштабная дистилляция: дистилляция 10 000 лет моделированного климата в длинносрочные модели погоды ИИ](https://arxiv.org/abs/2512.22814)

### **13. [Совместная группа предлагает модель Graph Neural Network SeaCast, которая позволит добиться ультрабыстрого регионального прогнозирования океанов](https://hyper.ai/news/49553)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49553](https://hyper.ai/news/49553)
- **Исследовательская группа:** Университет Хельсинки, Евро-Средиземноморский центр по изменению климата (CMCC), Университет Саленто
- **Связанные исследования:** Региональное прогнозирование океанов, графические нейронные сети (GNN), модель SeaCast, система прогнозирования Средиземноморья (MedFS), атмосферные поля принуждения.
- **Журнал публикации:** Научные доклады
- **Ссылка на статью:** [Точные прогнозы Средиземного моря с помощью графика глубокого обучения](https://www.nature.com/articles/s41598-025-31177-w)

## **ИИ + астрономия**

### **1. [Алгоритм PRIMO учится правилам распространения света вокруг черных дыр для восстановления более острых изображений черных дыр](https://hyper.ai/news/23698)**

- **Ключевой результат исследования:** [https://hyper.ai/news/23698](https://hyper.ai/news/23698)
- **Исследовательская группа:** Институт передовых исследований (Принсетон)
- **Связанные исследования:** Алгоритм PRIMO, PCA, GRMHD.
- **Журнал публикации:** "Астрофизический журнал" Letters, 2023.04
- **Ссылка на статью:** [Изображение черной дыры М87 восстановлено с помощью PRIMO](https://iopscience.iop.org/article/10.3847/2041-8213/acc32d/pdf)

### **2. [Обучение алгоритмов компьютерного зрения с помощью имитируемых данных для ускорения и "восстановления" астрономических изображений](https://hyper.ai/news/33975)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33975](https://hyper.ai/news/33975)
- **Исследовательская группа:** Университет Цинхуа и Северо-Западный университет
- **Связанные исследования:** [Галсим](https://github.com/GalSim-developers/GalSim), [Космос](https://doi.org/10.5281/zenodo.3242143), алгоритмы компьютерного зрения, CNN, алгоритм Ричардсона-Люси, необработанные нейронные сети ADMM.
- **Журнал публикации:** Ежемесячные уведомления Королевского астрономического общества, 2023.06
- **Ссылка на статью:** [Деконволирование изображения галактики для слабой гравитационной линзы с развернутым плагом и играющим ADMM](https://www.nature.com/articles/s41421-023-00543-1)

### **3. [Использование алгоритма машинного обучения без надзора Астрономия для поиска ранее не замеченных аномалий](https://hyper.ai/news/26316)**

- **Ключевой результат исследования:** [https://hyper.ai/news/26316](https://hyper.ai/news/26316)
- **Исследовательская группа:** Исследователи из Университета Западной части Кейпа (UWC)
- **Связанные исследования:** CNN, неконтролируемое машинное обучение, астрономия, PCA, Одиночная лес, алгоритм LOF, алгоритм iForest, алгоритм NS, алгоритм DR.
- **Журнал публикации:** Архив, 2023.09
- **Ссылка на статью:** [Астрономия в масштабе: поиск аномалий среди 4 миллионов галактик](https://arxiv.org/abs/2309.08660)

### **4. [Метод идентификации и извлечения параметров CME на основе машинного обучения](https://hyper.ai/news/31870)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31870](https://hyper.ai/news/31870)
- **Исследовательская группа:** Государственная ключевая лаборатория космической погоды, Национальный центр космических наук, CAS
- **Связанные исследования:** Машинное обучение, нейронные сети, алгоритм Otsu, алгоритмы совпадения траекторий, автоматическая идентификация, извлечение параметров, CACTus, CORIMP, SEEDS. Способен идентифицировать корональные массовые выбросы.
- **Журнал публикации:** Астрофизический журнал, 2024.04
- **Ссылка на статью:** [Алгоритм для определения кинематических параметров коронового выброса массы на основе машинного обучения](https://iopscience.iop.org/article/10.3847/1538-4365/ad2dea)

### **5. [Глубокое обучение обнаруживает 107 случаев нейтральных линий поглощения углерода](https://hyper.ai/news/32210)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32210](https://hyper.ai/news/32210)
- **Исследовательская группа:** Международная команда во главе с исследователем Джан Гей в Шанхайской астрономической обсерватории, CAS
- **Связанные исследования:** Методы глубокого обучения, модели SDSS DR12, Конвульционная нейронная сеть. Открыли 107 случаев нейтральных абсорбторов атома-углерода в ранней вселенной, с точностью обнаружения 99,8%.
- **Журнал публикации:** MNRAS, 2024.05
- **Ссылка на статью:** [Выявление редких нейтральных абсорбторов атома-углерода с глубокой нейронной сетью](https://doi.org/10.1093/mnras/stae799)

### **6. [Модель StarFusion достигает высокого разрешения пространства предсказания изображения](https://hyper.ai/news/34254)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34254](https://hyper.ai/news/34254)
- **Исследовательская группа:** Команда Цзинь Чен в Государственной лаборатории по процессам поверхности Земли и экологии ресурсов, БНУ
- **Связанные исследования:** Методы глубокого обучения, дистанционное восприятие изображений, прогнозирование изображений с высоким пространственным разрешением, предложенная модель двойной пространственно-временной декоплерованной архитектуры синтеза StarFusion, наборы данных Gaofen-1, наборы данных спутников Sentinel-2, модель SRGAN-STF, модели линейной регрессии, модели многовариативной регрессии.
- **Журнал публикации:** Журнал дистанционного зондирования, 2024.07
- **Ссылка на статью:** [Гибридный способ пространственно-временного синтеза для высокого пространственного разрешения](https://spj.science.org/doi/10.34133/remotesensing.0159)

### **7. [Метод создания спутниковых изображений, разработанный на основе SD3, создает крупнейший на сегодняшний день набор данных дистанционного зондирования, EcoMapper](https://hyper.ai/news/41041)**

- **Ключевой результат исследования:** [https://hyper.ai/news/41041](https://hyper.ai/news/41041)
- **Исследовательская группа:** Технический университет Мюнхена, Университет Цюриха
- **Связанные исследования:** Дистанционный наборы данных EcoMapper, Stable Diffusion 3, DiffusionSat, многоусловное создание изображений, создание спутниковых изображений.
- **Журнал публикации:** МТСК 2025, 2024.06
- **Ссылка на статью:** [ЭкоМэппер: генерирующее моделирование для климатически осведомленных спутниковых изображений](https://go.hyper.ai/VFRWu)

### **8. [Геопространственная ИИ Земля ИИ фокусируется на 3 основных типах данных, улучшая возможности геопространственного рассуждения на 64%](https://hyper.ai/news/45528)**

- **Ключевой результат исследования:** [https://hyper.ai/news/45528](https://hyper.ai/news/45528)
- **Исследовательская группа:** Google Research, Google X, Google Cloud
- **Связанные исследования:** Геопространственный ИИ, набор данных RS-Landmarks, набор данных RS-WebLI, набор данных RS-Global, Земная ИИ, модели фундамента (FMs), крупные языковые модели (LLM), модели фундамента дистанционного зондирования, пространственное выравнивание + интеграция представлений, геопространственное рассуждение.
- **Журнал публикации:** АрXiv, 2024.10
- **Ссылка на статью:** [ИИ Земли: раскрытие геопространственных данных с помощью фундаментальных моделей и кросс-модального рассуждения](https://doi.org/10.48550/arXiv.2510.18318)

### **9. [Родилась первая астрономическая модель мультимодальной основы AION-1, предварительно обученная 200 миллионам астрономических целей](https://hyper.ai/news/46802)**

- **Ключевой результат исследования:** [https://hyper.ai/news/46802](https://hyper.ai/news/46802)
- **Исследовательская группа:** UC Berkeley, Кембридж, Оксфорд и команды из более чем 10 мировых исследовательских учреждений
- **Связанные исследования:** AION-1, мультимодальные космологические наборы данных, схемы токенизации, структура трансформатора-кодер-декодер, структура ResNet.
- **Журнал публикации:** НейрИПС 2025, 2025.10
- **Ссылка на статью:** [AION-1: Омнимодальная модель Фонда астрономических наук](ttps://openreview.net/forum?id=6gJ2ZykQ5W)

### **10. [Новая трубопроводная линия, основанная на данных, точно идентифицирует 7 редких линзавых образцов из 810 000 квазаров с помощью CNN.](https://hyper.ai/news/47240)**

- **Ключевой результат исследования:** [https://hyper.ai/news/47240](https://hyper.ai/news/47240)
- **Исследовательская группа:** Стэнфорд, Национальная лаборатория ускорителей SLAC, Пекинский университет, INAF - Бера астрономическая обсерватория, UCL, UC Berkeley и т.д.
- **Связанные исследования:** Конволюционные нейронные сети (CNN), наборы данных DESI, сильные гравитационные объективы, квазары, исследования черных дыр, галактическая соэволюция, каталоги FastSpec.
- **Журнал публикации:** АрXiv, 2024.10
- **Ссылка на статью:** [Квазары, действующие как сильные линзы, найденные в DESI DR1](https://arxiv.org/abs/2511.02009)

### **11. [Команда ЕКА предлагает полунадзорный метод AnomalyMatch для эффективного скрининга редких небесных тел из почти 100 миллионов записей Хаббла](https://hyper.ai/news/49138)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49138](https://hyper.ai/news/49138)
- **Исследовательская группа:** Европейский центр космической астрономии (ESAC) при Европейском космическом агентстве (ESA)
- **Связанные исследования:** Астрофизические аномалии, полунадзорная бинарная классификация, активное обучение, AnomalyMatch, Архив наследия Хаббла.
- **Журнал публикации:** Астрономия и астрофизика
- **Ссылка на статью:** [Идентификация астрофизических аномалий в 99,6 млн. источников из архива наследия Хаббла с помощью AnomalyMatch](https://doi.org/10.1051/0004-6361/202555512)

### **12. [Университет Уорвика предлагает трубопровод RAVEN, подтверждающий 118 новых экзопланет](https://hyper.ai/news/50073)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50073](https://hyper.ai/news/50073)
- **Исследовательская группа:** Исследовательская группа Университета Уорвика
- **Связанные исследования:** Подтверждение экзопланет, Транзиционный спутник исследования экзопланет (TESS), трубопровод RAVEN, комплекты данных о синтетической подготовке, ложно-позитивное устранение.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [РАВЕН: Определение и проверка экзопланет](https://arxiv.org/abs/2509.17645)

### **13. [Университет Уорвика предлагает комплексную систему обучения для высокоточного прогнозирования астерозеизмических параметров для звезд δ Скути](https://hyper.ai/news/50946)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50946](https://hyper.ai/news/50946)
- **Исследовательская группа:** Исследовательская группа Университета Уорвика
- **Связанные исследования:** δ Звезды Скути, астерозеизмология, данные кривой света TESS, системы машинного обучения, большое частотное разделение Δν.
- **Журнал публикации:** Астрономический журнал
- **Ссылка на статью:** [Комплексный подход машинного обучения для оценки астерозеизмических индексов для δ звезд Скути, наблюдаемых ТЕСС](https://beta.iopscience.iop.org/article/10.3847/1538-3881/ae4bd8)

### **14. [Испанская исследовательская группа предлагает систему StreakMind, использующую ИИ для автоматического обнаружения спутниковых полос в астрономических изображениях](https://hyper.ai/news/51385)**

- **Ключевой результат исследования:** [https://hyper.ai/news/51385](https://hyper.ai/news/51385)
- **Исследовательская группа:** Королевская морская обсерватория Испании (ROA) и другие учреждения
- **Связанные исследования:** Открытие объектов близко к Земле (NEO), планетарная защита, астрономическое обнаружение полос изображений, система StreakMind, YOLO11.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [StreakMind: ИИ обнаружение и анализ спутниковых полос в астрономических изображениях с автоматизированной интеграцией баз данных](https://hyper.ai/papers/2605.03429)

## **ИИ + стихийные бедствия**

### **1. [Машинное обучение прогнозирует риск затопления земель в течение следующих 40 лет](https://hyper.ai/news/30173)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30173](https://hyper.ai/news/30173)
- **Исследовательская группа:** Исследовательская группа Цзянсина Лю в Центральном Южном университете
- **Связанные исследования:** Набор данных SAR, модели машинного обучения, XGBR, LSTM.
- **Журнал публикации:** Журнал экологического управления, 2024.02
- **Ссылка на статью:** [Техники, основанные на машинном обучении, для моделирования существования земли в городской зоне](https://www.sciencedirect.com/science/article/abs/pii/S0301479724000641?via%3Dihub)

### **2. [Семантическая сегментационная модель SCDUNet++ используется для картографирования сверка земли](https://hyper.ai/news/29672)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29672](https://hyper.ai/news/29672)
- **Исследовательская группа:** Исследовательская группа Руи Лю в Технологическом университете Чэнду
- **Связанные исследования:** Многоспектральные данные Sentinel-2, данные NASADEM, данные о срывах земли, GLFE, CNN, DSSA, DSC, DTL, Transformer, глубокое передача данных.
- **Журнал публикации:** Международный журнал прикладной наблюдения и геоинформации Земли, 2024.01
- **Ссылка на статью:** [Система глубокого обучения для прогнозирования времени до прогрессирования диабетической ретинопатии](https://www.nature.com/articles/s41591-023-02702-z)*(Примечание: Несовместимость ссылок, присутствующая в источнике, сохранилась в таком виде).*

### **3. [Нейронные сети преобразуют 2D солнечные изображения в 3D реконструированные изображения](https://hyper.ai/news/28797)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28797](https://hyper.ai/news/28797)
- **Исследовательская группа:** Национальный центр исследований атмосферы (NCAR)
- **Связанные исследования:** Нейронные сети, модель СуНЕРФ, впервые обнаружили полюсы Солнца.
- **Журнал публикации:** Архив, 2022.11
- **Ссылка на статью:** [SuNeRF: подтверждение 3D глобальной реконструкции солнечной корона с использованием имитируемых изображений EUV](https://arxiv.org/abs/2211.14879)

### **4. [Присоединительные нейронные сети анализируют факторы, влияющие на стихийные бедствия](https://hyper.ai/news/24957)**

- **Ключевой результат исследования:** [https://hyper.ai/news/24957](https://hyper.ai/news/24957)
- **Исследовательская группа:** Исследовательская группа UCLA
- **Связанные исследования:** Присоединительные нейронные сети, полуавтоматические алгоритмы обнаружения, присоединительные ANN, SNN, модели выбора функций, многоэтапная подготовка.
- **Журнал публикации:** Сообщения Земля и окружающая среда, 2023.05
- **Ссылка на статью:** [Моделирование чувствительности к сверканию земли по интерпретируемой нейронной сети](https://www.nature.com/articles/s43247-023-00806-5)

### **5. [Использование объясняемого ИИ для анализа различных географических факторов в Гиппсланде, Австралия](https://hyper.ai/news/33994)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33994](https://hyper.ai/news/33994)
- **Исследовательская группа:** Австралийский национальный университет, технологический университет Сиднея
- **Связанные исследования:** Случайные модели леса, модели машинного обучения, методы перекрестной проверки.
- **Журнал публикации:** ScienceDirect, 2023.06
- **Ссылка на статью:** [Объяснимый искусственный интеллект (XAI) для интерпретации факторов, способствующих возникновению лесных пожаров, внедряется в модель прогнозирования восприимчивости к лесным пожарам](https://www.sciencedirect.com/science/article/pii/S0048969723016224)

### **6. [Модель прогнозирования наводнений, основанная на машинном обучении](https://hyper.ai/news/31060)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31060](https://hyper.ai/news/31060)
- **Исследовательская группа:** Исследования Google
- **Связанные исследования:** Проект HydroATLAS, сети LSTM, кодировщики-декодеры, перекрестная проверка.
- **Журнал публикации:** Природа, 2024.03
- **Ссылка на статью:** [Глобальное прогнозирование экстремальных наводнений в невыполненных водоемах](https://www.nature.com/articles/s41586-024-07145-1)

### **7. [ED-DLSTM обеспечивает прогнозирование наводнений в неконтролируемых районах](https://hyper.ai/news/32138)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32138](https://hyper.ai/news/32138)
- **Исследовательская группа:** Команда Чжоу Уян в Институте горных опасностей и окружающей среды (IMHE), CAS
- **Связанные исследования:** Данные от 2000 гидрологических станций, наборы данных о подготовке из США, Великобритании, Центральной Европы, Канады, межрегиональные пространственно-временные модели ансамбля, кодировщики-декодеры, мультимодальные данные, данные атрибутов пространственной статической сетки, остаточные скручивания.
- **Журнал публикации:** Инновации, 2024.04
- **Ссылка на статью:** [Глубокое обучение для межрегионального прогнозирования потоков и наводнений в глобальном масштабе](https://doi.org/10.1016/j.xinn.2024.100617)

### **8. [Модель ChloroFormer предусматривает раннее предупреждение о цветении морских водорослей](https://hyper.ai/news/34544)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34544](https://hyper.ai/news/34544)
- **Исследовательская группа:** Лаборатория ГИС в Университете Чжэцзян
- **Связанные исследования:** Набор данных TZ02, модель глубокого обучения ChloroFormer, нейронные сети трансформатора, механизмы частотных фильтров, механизмы частотного внимания.
- **Журнал публикации:** Водная исследовательская работа, 2024.10
- **Ссылка на статью:** [Улучшение прогнозирования концентрации хлорофила в прибрежных водах путем интеграции сетей анализа Фурье и трансформатора](https://doi.org/10.1016/j.watres.2024.122160 )

### **9. [Первая большая языковая модель океана OceanGPT принята на ACL 2024! Подводный воплощенный ИИ становится реальностью](https://hyper.ai/news/33044)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33044](https://hyper.ai/news/33044)
- **Исследовательская группа:** Команда Нинью Чжан и Хуаджуна Чен, Колледж компьютерных наук и технологий, Университет Чжэцзян
- **Связанные исследования:** Морские LLM, регулярные выражения, алгоритмы Hash, система создания инструкций по морской науке DoInstruct, многоагентское сотрудничество, gpt-3.5-turbo, алгоритмы BM25, LLaMA-2, Vicuna-7b-1.5, воплощенные в ИИ.
- **Журнал публикации:** ACL 2024, 2024.05
- **Ссылка на статью:** [OceanGPT: Большая модель языка для задач океанологии](https://arxiv.org/abs/2310.02031)

### **10. [ИИ предсказывает тенденции глобального потепления](https://hyper.ai/news/36778)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36778](https://hyper.ai/news/36778)
- **Исследовательская группа:** Совместная исследовательская группа Стэнфордского университета, Университета штата Колорадо и ETH Цюрих
- **Связанные исследования:** ИИ системы CNN, глобальные модели климата, передача обучения, прогнозирование условий при непрерывном увеличении выбросов углерода, проверка точности предсказуемых рамок в различные исторические периоды. ИИ предсказывает вероятность 90% рекордных максимальных температурных сдвигов.
- **Журнал публикации:** Геофизические исследования, 2024.12
- **Ссылка на статью:** [Предсказания о пике потепления при быстрой декарбонизации](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL111832)

### **11. [Новая модель GeoAI объясняет распределение потока поверхностного тепла на Тибетском плато](https://hyper.ai/news/36501)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36501](https://hyper.ai/news/36501)
- **Исследовательская группа:** Школа наук о Земле, Университет Чжэцзян
- **Связанные исследования:** Методы пространственного интеллектаМодель географической нервной сети с весом регрессии (EI-GNNWR), сборные данных потока поверхностного тепла, сборные данных континентального теплового потока NGHF, сборные данных потока теплового потока континентального Китая, расчеты значения SHAP, модели экстремального повышения уровня, полностью подключенные модели нейронной сети, обычные минимальные квадраты, модели географической регрессии.
- **Журнал публикации:** Журнал геофизических исследований: твердая земля, 2024.10
- **Ссылка на статью:** [Распределение поверхностного потока тепла на Тибетском плато, раскрытое методами, основанными на данных](https://doi.org/10.1029/2023JB028491)

### **12. ["Венхай" морская среда умный прогноз большой модели превосходит численное морское прогнозирование](https://hyper.ai/news/38294)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38294](https://hyper.ai/news/38294)
- **Исследовательская группа:** Исследовательская группа во главе с академиком Ликсином Ву в лаборатории Лаосхан, ОУЦ, USTC, Qingdao Guoshi Technology Group
- **Связанные исследования:** Морская экологическая прогнозирование, физическая океанография, искусственный интеллект, теории морской динамики, проектирование архитектуры нейронных сетей, прямое внедрение массовых формул в нейронные сети.
- **Журнал публикации:** Сообщения о природе, 2025.03
- **Ссылка на статью:** [Прогнозирование Эддинг-океана с глубокой нейронной сетью](https://www.nature.com/articles/s41467-025-57389-2)

### **13. [Университет Миннесоты предлагает модель машинного обучения FHNN, основанную на знаниях, которая позволит реализовать высокоточные прогнозы наводнений](https://hyper.ai/news/49992)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49992](https://hyper.ai/news/49992)
- **Исследовательская группа:** Исследовательская группа Университета Миннесоты в Двойных городах
- **Связанные исследования:** Прогноз наводнений, обучение машин с управляемым знанием (KGML), факторизованные иерархические нейронные сети (FHNN), модели на основе процессов (PBM), гидрологические циклы и прогноз потока.
- **Журнал публикации:** Исследование водных ресурсов
- **Ссылка на статью:** [Учебное обучение машин с управлением знаниями для прогнозирования наводнений](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024WR039064)

### **14. [Google выпустит версию 2 своей глобальной системы прогнозирования наводнений, значительно продлевая действительные сроки прогнозирования](https://hyper.ai/news/51472)**

- **Ключевой результат исследования:** [https://hyper.ai/news/51472](https://hyper.ai/news/51472)
- **Исследовательская группа:** Исследования Google
- **Связанные исследования:** Прогноз наводнений, гидрологическая симуляция, гидрологические модели машинного обучения, Глобальная модель прогнозирования наводнений v2, набор данных Google Reanalysis and Re-Runoff Forecasts (GRRR).
- **Журнал публикации:** ЭГУсфера
- **Ссылка на статью:** [Расширение прогнозов наводнений в мире среднего диапазона: модель прогнозирования наводнений в мире Google версия 2](https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2283/)

## **Прочее**

### **1. [Тактический помощник в футболе достигает 90% практической полезности в тактических макетах](https://hyper.ai/news/30454)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30454](https://hyper.ai/news/30454)
- **Исследовательская группа:** Google DeepMind и Liverpool FC
- **Связанные исследования:** Геометрическое глубокое обучение, GNN, прогнозные модели, генерирующие модели.
- **Журнал публикации:** Природа, 2024.03
- **Ссылка на статью:** [TacticAI: помощник ИИ для футбольной тактики](https://www.nature.com/articles/s41467-024-45965-x)

### **2. [Снижающая диффузионную модель SPDiff позволяет моделировать движение толпы на большом расстоянии](https://hyper.ai/news/30069)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30069](https://hyper.ai/news/30069)
- **Исследовательская группа:** Центр городской науки и вычислений (EE Dept, Цинхуа), Шэньчжэньская ключевая лаборатория обеспечения доступности данных (Цинхуа SIGS), лаборатория Пэн Чэнг
- **Связанные исследования:** ГК-данные, UCY-данные, модели диффузии с условным обозначением, SPDiff, GN, EGCL, LSTM, алгоритмы тренировочного развертывания с многофремами.
- **Журнал публикации:** Природа, 2024.02
- **Ссылка на статью:** [Социальная физика Информированная модель диффузии для моделирования толпы](https://arxiv.org/abs/2402.06680)

### **3. [Интеллектуальные научные объекты способствуют изменению парадигмы в исследованиях](https://hyper.ai/news/29570)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29570](https://hyper.ai/news/29570)
- **Исследовательская группа:** Исследовательская группа Хон Мэй в Шанхайском университете Цзяо Тонг
- **Связанные исследования:** Научные крупные модели, генеративная симуляция и инверсия, автономные интеллектуальные беспилотные эксперименты, масштабное научное сотрудничество, научные помощники ИИ.
- **Журнал публикации:** Булетень Китайской академии наук, 2023.12
- **Ссылка на статью:** [ИИ для науки: интеллектуальные научные объекты революционизируют фундаментальные исследования](http://www.bulletin.cas.cn/previewFile?id=52965146&type=pdf&lang=zh)

### **4. [DeepSymNet представляет собой символические выражения на основе контролируемого обучения](https://hyper.ai/news/29243)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29243](https://hyper.ai/news/29243)
- **Исследовательская группа:** Исследовательская группа Мин Ву в Институте полупроводников CAS
- **Связанные исследования:** [Символические сетевые наборы данных](https://hyper.ai/datasets/29321), DSNOrg, DSNB, DSNBM, контролируемое обучение. Использует более короткие этикетки, сокращает пространство поиска для прогнозов и повышает надежность алгоритма.
- **Журнал публикации:** Журналы и журналы, 2023.11
- **Ссылка на статью:** [Открытие математических выражений через DeepSymNet: рамки символического регрессия на основе классификации](https://ieeexplore.ieee.org/document/10327762)

### **5. [Большой языковой модель ChipNeMo помогает инженерам в проектировании чипов](https://hyper.ai/news/29134)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29134](https://hyper.ai/news/29134)
- **Исследовательская группа:** Исследовательская группа NVIDIA
- **Связанные исследования:** Техники адаптации доменов, NVIDIA NeMo, модели извлечения, адаптированные к домену, RAG, контролируемое настройка с конкретными инструкциями по домену, DAPT, SFT, Tevatron, LLM.
- **Журнал публикации:** Архив, 2024.04
- **Ссылка на статью:** [ChipNeMo: LLM для дизайна чипов, адаптированные к домену](https://arxiv.org/abs/2311.00176)

### **6. [Альфагеометрия может решить геометрические проблемы](https://hyper.ai/news/29059)**

- **Ключевой результат исследования:** [https://hyper.ai/news/29059](https://hyper.ai/news/29059)
- **Исследовательская группа:** Исследовательская группа Google DeepMind
- **Связанные исследования:** Нейронные модели языка, двигатели символической дедукции, модели языка.
- **Журнал публикации:** Природа, 2024.01
- **Ссылка на статью:** [Решает геометрию олимпиады без демонстраций человека](https://www.nature.com/articles/s41586-023-06747-5)

### **7. [Усиление обучения, применяемое к городскому пространственному планированию](https://hyper.ai/news/28917)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28917](https://hyper.ai/news/28917)
- **Исследовательская группа:** Исследовательская группа Йонг Ли в университете Цинхуа
- **Связанные исследования:** Глубокое укрепление обучения, сотрудничество с человеком в области искусственного интеллекта, модели городского планирования, политические сети, ценностные сети, GNN.
- **Журнал публикации:** Природа вычислительная наука, 2023.09
- **Ссылка на статью:** [Планы градостроительного планирования с помощью глубокого обучения](https://www.nature.com/articles/s43588-023-00503-5)

### **8. [ChatArena Framework: Игра в оборотника с большими языковыми моделями](https://hyper.ai/news/28576)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28576](https://hyper.ai/news/28576)
- **Исследовательская группа:** Исследовательская группа Пэн Ли в университете Цинхуа
- **Связанные исследования:** Непараметрические механизмы обучения, языковые модели, запросы.
- **Журнал публикации:** Архив, 2023.09
- **Ссылка на статью:** [Исследование крупных языковых моделей для коммуникационных игр: эмпирическое исследование оборотника](https://arxiv.org/pdf/2309.04658.pdf)

### **9. [Обзор: 30 ученых совместно опубликовали в Nature 10-летнюю ретроспективную деконструкцию того, как ИИ перерабатывает научные парадигмы](https://hyper.ai/news/28166)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28166](https://hyper.ai/news/28166)
- **Основное содержание:** Последоктёр Ханчен Ван из Стенфордской области компьютерных наук и генетики, вместе с Тяньфан Фу из Georgia Tech CSE, Юаньки Ду из Корнелл CS и 27 другими, рассмотрели роль ИИ в фундаментальных научных исследованиях за последнее десятилетие и очеркнули постоянные проблемы и недостатки.
- **Ссылка на статью:** [Научное открытие в эпоху искусственного интеллекта](https://www.nature.com/articles/s41586-023-06221-2)

### **10. [Итака помогает эпиграфам восстанавливать текст, хронологически и географически](https://hyper.ai/news/28140)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28140](https://hyper.ai/news/28140)
- **Исследовательская группа:** Университет Дюп-Минд и Ка' Фоскари в Венеции
- **Связанные исследования:** Набор данных I.PHI, модель Итака, дивергенция Кулбэка-Лейблара, функции потери кросс-энтропии. Точность восстановления текста достигла 62%, ошибка хронологического присвоения в течение 30 лет, а точность географического присвоения достигла 71%.
- **Журнал публикации:** Природа, 2020/03
- **Ссылка на статью:** [Восстановление и присвоение древних текстов с использованием глубоких нейронных сетей](https://www.nature.com/articles/s41586-022-04448-z)

### **11. [ИИ в первых и обратных проблемах метаоптики, анализ данных на основе метасверхностных систем](https://hyper.ai/news/34006)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34006](https://hyper.ai/news/34006)
- **Исследовательская группа:** Городской университет Гонконга
- **Связанные исследования:** Прогнозирующие НН, глубокие нейронные сети.
- **Журнал публикации:** АКС Публикации, 2022.06
- **Ссылка на статью:** [Искусственный интеллект в метаоптике](https://pubs.acs.org/doi/10.1021/acs.chemrev.2c00012)

### **12. [Новый геопространственный метод искусственного интеллекта: географическая неврологическая сеть с весом логистического регресса](https://hyper.ai/news/30608)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30608](https://hyper.ai/news/30608)
- **Исследовательская группа:** Исследовательская группа Чжэньгун Ду в Университете Чжэцзян
- **Связанные исследования:** Пространственные модели, нейронные сети, Shapley Additive Explanations (SHAP), Инверсная интерполяция расстояния, функции бинарной кросс-энтропии, 5-кратная кросс-валидация.
- **Журнал публикации:** Международный журнал прикладной наблюдения и геоинформации Земли, 2024.04
- **Ссылка на статью:** [Улучшение картографирования перспективности минералов с помощью геопространственного искусственного интеллекта: географический подход к логистической регрессии, взвешенный в нейронной сети](https://doi.org/10.1016/j.jag.2024.103746)

### **13. [Использование моделей диффузии для генерации параметров нейронной сети, преобразование пространственно-временного обучения нескольких снимков в проблему предварительной подготовки диффузионной модели](https://hyper.ai/news/30545)**

- **Ключевой результат исследования:** [https://hyper.ai/news/30545](https://hyper.ai/news/30545)
- **Исследовательская группа:** Исследовательская группа Йонг Ли в Центре городской науки и вычислений, EE Dept, Цинхуа Университет
- **Связанные исследования:** Умные города, пространственно-временные данные, передача знаний, MetaLA, PEMS-BAy, модели диффузии трансформаторов, условие генерации, ГПД, нейронные сети, параметры нейронной сети, предварительное обучение + скорая настройка.
- **Журнал публикации:** МККР 2024, 2024.01
- **Ссылка на статью:** [Пространственно-временное изучение с помощью нескольких снимков через генерацию диффузной нейронной сети](https://openreview.net/forum?id=QyFm3D3Tzi)

### **14. [Последние данные AI4S от команды Фей-Фей Ли: 16 инновационных технологий, охватывающих биологию/материалы/здравоохранение/диагностику](https://hyper.ai/news/31499)**

- **Ключевой результат исследования:** [https://hyper.ai/news/31499](https://hyper.ai/news/31499)
- **Основное содержание:** Институт HAI при Стэнфордском университете опубликовал «Отчет об индексе ИИ за 2024 год», в котором всесторонне отслеживаются мировые тенденции развития ИИ в 2023 году. В отчете также рассмотрено глубокое влияние ИИ на науку и медицину, отмечены выдающиеся достижения ИИ в науке за 2023 год и прорывные медицинские инновации, такие как SynthSR и ImmunoSEIRA. Кроме того, проанализированы тенденции одобрения FDA медицинских устройств с ИИ, что дает отрасли ценную справочную информацию.

### **15. [Модель osp-GNNWR точно прогнозирует цены на жилье в Ухане и описывает сложные пространственные процессы и географические явления](https://hyper.ai/news/32453)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32453](https://hyper.ai/news/32453)
- **Исследовательская группа:** Команда Сенсена Ву в лаборатории GIS, Университет Чжэцзян
- **Связанные исследования:** Нейронные сети, оптимизация пространственной близости, географические методы взвешенного регрессирования нейронной сети, набор данных из 968 образцов недвижимости Анжуке, модели пространственной регрессии, алгоритмы спуска градиента.
- **Журнал публикации:** Международный журнал географической информационной науки, 2024.04
- **Ссылка на статью:** [Модель нейронной сети для оптимизации измерения пространственной близости в географически взвешенном регрессионном подходе: исследование по цене жилья в Ухане](https://www.tandfonline.com/doi/abs/10.1080/13658816.2024.2343771)

### **16. [Внедрение нулевого обучения для выпуска модели условного диффузии, оптимизированной для расшифровки костного сценария оракула](https://hyper.ai/news/33010)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33010](https://hyper.ai/news/33010)
- **Исследовательская группа:** Команда Цзян Бэй и Юлиан Лю в HUST совместно с Университетом Аделаиды, Аньянским Нормальным Университетом, SCUT
- **Связанные исследования:** Усложные модели диффузии, методы генерации изображений, методы локальной аналитической выборки образцов, набор данных HUST-OBS, набор данных EVOBC, спинные клетки ResNet-101, технология OCR, стратегии обучения с нулевым выстрелом, кодеры стиля, кодеры контента.
- **Журнал публикации:** ACL 2024, 2024.06
- **Ссылка на статью:** [Разшифровка костного языка Oracle с помощью моделей диффузии](https://doi.org/10.48550/arXiv.2406.00684)

### **17. [Стэнфорд/Аппл и 23 других институтов выпускают эталон DCLM; модель фундамента работает наравне с Llama3 8B](https://hyper.ai/news/33001)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33001](https://hyper.ai/news/33001)
- **Исследовательская группа:** Совместные усилия университета Уэльс, Стэнфорда, Apple и 20 других учреждений
- **Связанные исследования:** Модели языка, эталон DCLM, Трансформаторы, MMLU.
- **Журнал публикации:** Архив, 2024.06
- **Ссылка на статью:** [DataComp-LM: В поисках следующего поколения учебных наборов для языковых моделей](https://arxiv.org/abs/2406.11794)

### **18. [PoCo решает дилемму гетерогенности источника данных, позволяя роботам выполнять многозадачи гибко](https://hyper.ai/news/32765)**

- **Ключевой результат исследования:** [https://hyper.ai/news/32765](https://hyper.ai/news/32765)
- **Исследовательская группа:** Исследователи МТИ
- **Связанные исследования:** Противопоказательная вероятность диффузионных моделей (DDPM), Противопоказательная вероятность диффузионных моделей (DDIM), вероятность составления диффузионных моделей, робототехническая структура составления политики PoCo.
- **Журнал публикации:** Архив, 2024.05
- **Ссылка на статью:** [Поко: Состав политики от и для гетерогенного обучения роботов](https://arxiv.org/abs/2402.02511)

### **19. [Набор данных из 140 000 изображений гадательных костей помогает команде получить награду за лучшую статью ACL](https://hyper.ai/news/33826)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33826](https://hyper.ai/news/33826)
- **Исследовательская группа:** Исследовательская группа профессора Сянь Бэй в HUST
- **Связанные исследования:** Набор данных HUST-OBC, неконтролируемые модели визуального контрастирования.
- **Журнал публикации:** Научные данные, 2024.06
- **Ссылка на статью:** [Открытый набор данных для распознавания и расшифровки костного сценария оракула](https://arxiv.org/abs/2401.15365)

### **20. [Предлагая схему прогнозирования канала на основе предварительно подготовленных LLM, GPT-2 укрепляет физический слой беспроводных коммуникаций](https://hyper.ai/news/33195)**

- **Ключевой результат исследования:** [https://hyper.ai/news/33195](https://hyper.ai/news/33195)
- **Исследовательская группа:** Команда Цзян Ченга в Школе электроники Пекинского университета
- **Связанные исследования:** Симуляторы QuaDRiGa, Большие языковые модели (LLM), нейронные сети прогнозирования канала, модули предварительной обработки, модули встроения, модули LLM, модули выхода.
- **Журнал публикации:** Журнал связи и информационных сетей, 2024.06
- **Ссылка на статью:** [LLM4CP: адаптация крупных языковых моделей для прогнозирования канала](https://ieeexplore.ieee.org/document/10582829)

### **21. [Первая модель сети генеративных противников для многошивной вышивки](https://hyper.ai/news/34669)**

- **Ключевой результат исследования:** [https://hyper.ai/news/34669](https://hyper.ai/news/34669)
- **Исследовательская группа:** Визуальная вычислительная и цифровая текстильная команда, Школа компьютерных наук и ИИ, Уханьский текстильный университет
- **Связанные исследования:** Многошифровая резьба, генерирующие противоположное сети (GAN), CNN, многошифровая резьба GAN модель MSEmbGAN, региональные сети по созданию текстуры, сети окраски.
- **Журнал публикации:** IEEE Transactions on Visualization and Computer Graphics, 2024 год
- **Ссылка на статью:** [MSEmbGAN: синтез многошёповых вышивок с помощью создания текстуры, осведомленной о регионе](https://csai.wtu.edu.cn/TVCG01/index.html)

### **22. [Быстрый автоматизированный инструментарий сканирования (FAST) эффективно получает информацию о образцах](https://hyper.ai/news/28100)**

- **Ключевой результат исследования:** [https://hyper.ai/news/28100](https://hyper.ai/news/28100)
- **Исследовательская группа:** Исследовательская группа Национальной лаборатории Аргона
- **Связанные исследования:** Методы SLADS-Net, методы оптимизации маршрута. Приоритетное использование гетерогенных регионов и точное воспроизведение всех основных функций в полноценных снимках.
- **Журнал публикации:** Сообщения о природе, 2023.09
- **Ссылка на статью:** [Демонстрация рабочего потока, основанного на ИИ для автономной высокоразрешительной сканирующей микроскопии](https://www.nature.com/articles/s41467-023-40339-1)

### **23. [Модель Фонда Population Dynamics PDFM с открытым исходным кодом, точно предсказывающая уровень безработицы и бедности в США](https://hyper.ai/news/36380)**

- **Ключевой результат исследования:** [https://hyper.ai/news/36380](https://hyper.ai/news/36380)
- **Исследовательская группа:** Google
- **Связанные исследования:** Модель Фонда Population Dynamics, прогнозирование уровня безработицы и бедности, декоплированные архитектуры встроения, использование PDFM для улучшения модели основы прогнозирования SOTA TimesFM, агрегированные наборы данных о тенденциях поиска, наборы данных карт, наборы данных о занятости, качество погоды и воздуха, данные дистанционного зондирования, графические нейронные сети (GNNs), улучшение существующих геопространственных моделей.
- **Журнал публикации:** Архив, 2024.12
- **Ссылка на статью:** [Общая геопространственная инференция с моделью основы динамики населения](https://arxiv.org/abs/2411.07207)

### **24. [Модель глубокого обучения CatGWR оценивает пространственную нестациональность](https://hyper.ai/news/38055)**

- **Ключевой результат исследования:** [https://hyper.ai/news/38055](https://hyper.ai/news/38055)
- **Исследовательская группа:** Ключевая лаборатория ГИС провинции Чжэцзян
- **Связанные исследования:** Модель глубокого обучения Контекст-внимание Географически взвешенный регресс, механизмы внимания, оценка пространственной нестационарности, модель CatGWR, эксперименты по моделированию, модули предварительной обработки, модули увеличения объема, модули регрессии.
- **Журнал публикации:** Международный журнал географической информации, 2025.02
- **Ссылка на статью:** [Использование архитектуры, основанной на внимании, для включения контекстовой сходности в оценку пространственной нестационарности](https://doi.org/10.1080/13658816.2025.2456556)

### **25. [Первая в мире система VR-интервенции REVERIE преобразует здоровье мозга, тела и ума молодых людей](https://hyper.ai/news/41266)**

- **Ключевой результат исследования:** [https://hyper.ai/news/41266](https://hyper.ai/news/41266)
- **Исследовательская группа:** Команда профессора Хуатинга Ли (Шанхайская шестая народная больница / Институт активного здоровья), команда профессора Бин Шенга (SJTU / MOE Key Lab of AI), команда исследователя Джихонга Ванга (Шанхайский университет спорта), команда профессора Рон Ченга (Шанхайский технологический центр / Шанхайский центр клинических исследований), команда профессора Шуайде Лин (NUS).
- **Связанные исследования:** Физические упражнения, виртуальный мир (метаверс) виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные виртуальные ви
- **Журнал публикации:** Природа Медицины, 2025.06
- **Ссылка на статью:** [Адаптивная система виртуальной реальности на базе ИИ для подростков с избыточным весом тела: рандомизированное контролируемое исследование](https://www.nature.com/articles/s41591-025-03724-5)

### **26. [Основываясь на более чем 176 тыс. данных о надписях, Эней впервые добился произвольной длины восстановления древних римских надписей](https://hyper.ai/news/42141)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42141](https://hyper.ai/news/42141)
- **Исследовательская группа:** Исследователи Google DeepMind, Университет Ноттингема, Университет Уорвика и т.д.
- **Связанные исследования:** Мультимодальная генеративная нейронная сеть Эней, Декодеры трансформаторов, набор данных латинской надписи, набор данных с светодиодами, восстановление надписи.
- **Журнал публикации:** Природа, 2025.07
- **Ссылка на статью:** [Контекстуализация древних текстов с генерирующими нейронными сетями](https://www.nature.com/articles/s41586-025-09292-5)

### **27. [Панорамная система создания видео PanoWan также работает с нулевым редактированием видео](https://hyper.ai/news/42205)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42205](https://hyper.ai/news/42205)
- **Исследовательская группа:** Лаборатория по разведке камер @ PKU (команда Боксина Ши), OpenBayes
- **Связанные исследования:** Панорамное видео, панорамный набор данных видео PanoVid, нулевая видеоредактировка, выборка с учетом широты, ротационное семантическое деносирование, декодирование с помощью границ.
- **Журнал публикации:** АрXiv, 2025.06
- **Ссылка на статью:** [PanoWan: поднятие моделей диффузионного видеогенерации до 360° с помощью механизмов, осознающих широту/длинность](https://arxiv.org/abs/2505.22016)

### **28. [Интеллектуальная система классификации керамики на основе YOLOv11 интегрирует визуальное моделирование и экономический анализ, достигая классификации артефактов и оценки стоимости](https://hyper.ai/news/42268)**

- **Ключевой результат исследования:** [https://hyper.ai/news/42268](https://hyper.ai/news/42268)
- **Исследовательская группа:** Университет Путра Малайзия, UNSW Сидней
- **Связанные исследования:** Керамическая классификация, CNN, трансферное обучение, сети капсул, YOLOv11, керамические наборы данных изображений, гибридные методы получения данных, модели регрессии случайного леса.
- **Журнал публикации:** Журналы "Партнерство в природе", 2025.06
- **Ссылка на статью:** [Интеграция глубокого обучения и машинного обучения для классификации керамических артефактов и прогнозирования рыночной стоимости](https://www.nature.com/articles/s40494-025-01886-6)

### **29. [Родился чип "Микроволновой мозг", одновременно обрабатывающий ультравысокоскоростные данные и беспроводничные сигналы с точностью 75% при мощности 176 милливатт](https://hyper.ai/news/43093)**

- **Ключевой результат исследования:** [https://hyper.ai/news/43093](https://hyper.ai/news/43093)
- **Исследовательская группа:** Корнеллский университет
- **Связанные исследования:** Приложения высокой полосы пропускания, микроволновые нейронные сети, модели линейной регрессии, набор данных RadioML2016.10A, глубокое обучение, аналоговые вычисления.
- **Журнал публикации:** Nature Electronics, 2025.08
- **Ссылка на статью:** [Интегрированная микроволновая нейронная сеть для широкополосных вычислений и связи](https://go.hyper.ai/rMZ2K)

### **30. [Размещение пространственно-временной импутации и модели прогнозирования STIMP, реализующей точные прогнозы распределения прибрежного хлорофилла-а](https://hyper.ai/news/43613)**

- **Ключевой результат исследования:** [https://hyper.ai/news/43613](https://hyper.ai/news/43613)
- **Исследовательская группа:** Исследовательская группа ГКУСТ
- **Связанные исследования:** Хлорофилл-a предсказание, MODIS in-situ Chl-a наборы данных, Himawari спутниковые датчики дистанционного зондирования отражаемости наборы данных, глубокое обучение, STIMP архитектура, диагностика здоровья водного тела.
- **Журнал публикации:** Сообщения о природе, 2025.08
- **Ссылка на статью:** [Пространственно-временная импутация и модель прогнозирования](https://go.hyper.ai/BjOR5)

### **31. [MIT и другие достигают высокоточного прогнозирования плазменной динамики при условиях нескольких снимков на основе машинного обучения](https://hyper.ai/news/45260)**

- **Ключевой результат исследования:** [https://hyper.ai/news/45260](https://hyper.ai/news/45260)
- **Исследовательская группа:** Исследовательская группа во главе с МИТ
- **Связанные исследования:** Токамак, Научное машинное обучение (SciML), нейронные модели состояния и пространства (NSSM), проверка надежности чувствительности к ошибкам контроля, прогнозирование первых экстраполяционных испытаний.
- **Журнал публикации:** Сообщения о природе, 2025 г.
- **Ссылка на статью:** [Учеба плазменной динамики и прочных траекторий спуска с помощью первых экспериментов прогнозирования на ТКВ](https://www.nature.com/articles/s41467-025-63917-x)

### **32. [Reac-Discovery объединяет математическое моделирование, машинное обучение и автоматизированные эксперименты для решения проблемы универсальности самоходных лабораторных систем](https://hyper.ai/news/45626)**

- **Ключевой результат исследования:** [https://hyper.ai/news/45626](https://hyper.ai/news/45626)
- **Исследовательская группа:** Институт материалов IMDEA (Испания)
- **Связанные исследования:** Самоводительные лаборатории (SDL), полуавтономные цифровые платформы Reac-Discovery, системы закрытого цикла, интегрирующие модули проектирования/производства/оптимизации, мониторинг NMR в режиме реального времени, оптимизация параметров процесса ML, топологические описатели, наборы данных структурной параметризации, наборы данных о возможности печати, наборы данных о производительности реакции.
- **Журнал публикации:** Сообщения о природе, 2025 г.
- **Ссылка на статью:** [Reac-Discovery: платформа, основанная на искусственном интеллекте для обнаружения и оптимизации каталитических реакторов непрерывного потока](https://go.hyper.ai/ueB79)

### **33. [Внедрена первая система моделирования нейронов NOBLE, подтвержденная человеческими кортическими данными](https://hyper.ai/news/45806)**

- **Ключевой результат исследования:** [https://hyper.ai/news/45806](https://hyper.ai/news/45806)
- **Исследовательская группа:** ETH Цюрих, Кальтех, Университет Альберты
- **Связанные исследования:** Глубокое обучение, внедрение функций нейронов, внедрение текущего впрыска, модель нейронов NOBLE.
- **Журнал публикации:** НейрИПС 2025, 2025.09
- **Ссылка на статью:** [NOBLE  Нейронный оператор с биологически информированными латентными встроениями для захвата экспериментальной изменчивости в моделях биологических нейронов](https://go.hyper.ai/Ramfp)

### **34. [Расположение изображений LocDiff работает в сети, что позволяет обеспечить глобальное точное позиционирование без сетки и без справочной библиотеки](https://hyper.ai/news/46687)**

- **Ключевой результат исследования:** [https://hyper.ai/news/46687](https://hyper.ai/news/46687)
- **Исследовательская группа:** УМайн, UT Остин, УГА, УМД, Google, OpenAI, Гарвард
- **Связанные исследования:** Сферическая гармоника Дирак распределения, комплексная система LocDiff, набор данных MP16, набор данных Im2GPS3k, набор данных YFCC26k, набор данных GWS15k, архитектура условного сирена-ЮНЭТ (CS-ЮНЭТ), эффективные стратегии вычислений, схемы кодирования SHDD, геологизация изображений.
- **Журнал публикации:** НейрИПС 2025, 2025.10
- **Ссылка на статью:** [LocDiff: Идентификация мест на Земле путем диффузии в пространстве Хилберта](https://openreview.net/forum?id=ghybX0Qlls)

### **35. [Машинное обучение в сочетании с py-GC-MS точно идентифицирует доказательства жизни в архейских скалах](https://hyper.ai/news/47543)**

- **Ключевой результат исследования:** [https://hyper.ai/news/47543](https://hyper.ai/news/47543)
- **Исследовательская группа:** Лаборатория Земли и Планет в Институте науки Карнеги, наряду с несколькими мировыми учреждениями
- **Связанные исследования:** Пиролиза газовой хроматографии-массовой спектрометрии (py-GC-MS), контролируемое машинное обучение.
- **Журнал публикации:** ПНАС
- **Ссылка на статью:** [Органические геохимические доказательства жизни в архейских скалах, идентифицированные пиролизом GCMS и контролируемым машинным обучением](https://www.pnas.org/doi/10.1073/pnas.2514534122)

### **36. [Команда Университета Цинхуа предлагает метод нейросимволической регрессии ND2 для автоматического получения сложных формул динамики сети](https://hyper.ai/news/47950)**

- **Ключевой результат исследования:** [https://hyper.ai/news/47950](https://hyper.ai/news/47950)
- **Исследовательская группа:** Университет Цинхуа
- **Связанные исследования:** Динамика сети, символическая регрессия, ND2, производные уравнения, научное машинное обучение.
- **Журнал публикации:** Сообщения о природе
- **Ссылка на статью:** *(Ссылка указывает на бумагу археанских скал на оригинальном китайском языке, но сохранилось нумерация и перевод ссылок, как это предусмотрено) *

*(Примечание: в указанном источнике были представлены дубликаты пунктов 35 и 36 ссылок на археические породы PNAS, в то время как в TOC указано ND2. Переведен непосредственно на основе указанных пунктов текстового блока 35/36) *

### **37. [Команда Университета Чжэцзян предлагает метод прогнозирования минеральной перспективности с геологическими ограничениями, изображающий в явном виде анизотропию минерализации](https://hyper.ai/news/48396)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48396](https://hyper.ai/news/48396)
- **Исследовательская группа:** Исследовательская группа Университета Чжэцзян
- **Связанные исследования:** Карта перспективности минералов (MPM), анизотропные пространственные нейронные сети близости, интеллектуальная проспекция.
- **Журнал публикации:** Геология
- **Ссылка на статью:** [Геологически ограниченное моделирование, основанное на данных, для картографирования перспективности полезных ископаемых](https://go.hyper.ai/vbUpa)

### **38. [Цинхуа и команда университета Чикаго опубликовали в Nature: инструменты ИИ расширяют влияние ученых, но сокращают фокус науки](https://hyper.ai/news/48748)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48748](https://hyper.ai/news/48748)
- **Исследовательская группа:** Совместная команда из университета Цинхуа и Чикагского университета
- **Связанные исследования:** ИИ для науки, производительность исследований, модели научных цитировок, экосистемы исследований, наукометрия.
- **Журнал публикации:** Природа
- **Ссылка на статью:** [Инструменты искусственного интеллекта расширяют влияние ученых, но сокращают внимание науки](https://www.nature.com/articles/s41586-025-09922-y)

### **39. [Команда UC предлагает увеличенный с ИИ микросхемный спектрометр, достигающий высокой спектральной верности в ультра-маленьком объеме](https://hyper.ai/news/48905)**

- **Ключевой результат исследования:** [https://hyper.ai/news/48905](https://hyper.ai/news/48905)
- **Исследовательская группа:** Исследовательская группа Калифорнийского университета
- **Связанные исследования:** Спектрометры с чипом, фотоно-притягивающие текстуры поверхности (PTST), полностью подключенные нейронные сети, гиперспектральное изображение.
- **Журнал публикации:** Продвинутая фотоника
- **Ссылка на статью:** [СИ-повышенный фотоно-прикосновенный спектрометр на чипе на кремниевой платформе с расширенной чувствительностью к ближнему инфракрасному свету](https://doi.org/10.1117/1.AP.8.1.016008)

### **40. [Национальная лаборатория Оук-Ридж предлагает метод D-CHAG, существенно уменьшая память для многоканальных моделей фундамента](https://hyper.ai/news/49330)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49330](https://hyper.ai/news/49330)
- **Исследовательская группа:** Исследователи Национальной лаборатории Оук-Риджа
- **Связанные исследования:** Модели фундамента науки о зрении, распределенная пересекающаяся передача каналов иерархическая агрегация (D-CHAG), тензорный параллелизм (TP), иерархическая передача каналов.
- **Журнал публикации:** SC25
- **Ссылка на статью:** [Распределенная иерархическая агрегация по каналам для моделей оснований](https://dl.acm.org/doi/10.1145/3712285.3759870)

### **41. [Команда полиматического ИИ предлагает модель непрерывного фундамента Walrus, установив рекорд в результате моделирования кросс-домен](https://hyper.ai/news/49076)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49076](https://hyper.ai/news/49076)
- **Исследовательская группа:** Команда по исследованиям по полиматическому ИИ
- **Связанные исследования:** Динамика континуума, модели фундамента физической моделирования, модель Уолрус, адаптивная вычислительная токенизация.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [Walrus: Модель основы кросс-домен для динамики континуума](https://arxiv.org/abs/2511.15684)

### **42. [EPFL предлагает новую архитектуру DYNAMI-CAL GraphNet, физико-информированный GNN, точно моделирующий динамику многоцелей](https://hyper.ai/news/49808)**

- **Ключевой результат исследования:** [https://hyper.ai/news/49808](https://hyper.ai/news/49808)
- **Исследовательская группа:** Исследовательская группа EPFL
- **Связанные исследования:** Физико-информированные GNN, многоцелевые динамические системы, DYNAMI-CAL GraphNet, сохранение линейного и углового импульса.
- **Журнал публикации:** Сообщения о природе
- **Ссылка на статью:** [Физико-информированная графическая нейронная сеть, сохраняющая линейный и угловый импульс для динамических систем](https://www.nature.com/articles/s41467-025-67802-5)

### **43. [MIT предлагает новый метод Wave-Former, достигающий высокоточной 3D реконструкции полностью закрытых объектов](https://hyper.ai/news/50018)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50018](https://hyper.ai/news/50018)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** Компьютерное зрение, 3D реконструкция через заслону, мм-волновые датчики, Wave-Former, беспроводная форма.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [Формер волн: 3D-реконструкция через оккуляцию через беспроводной формы](https://arxiv.org/abs/2511.14152)

### **44. [MIT предлагает DRiffusion draft-and-refine параллельную систему, реализующую беспропускную ускорение для вывода диффузионной модели](https://hyper.ai/news/50209)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50209](https://hyper.ai/news/50209)
- **Исследовательская группа:** Исследовательская группа МИТ
- **Связанные исследования:** Диффузионные модели, ускорение выводов, методы параллелизации, DRiffusion, draft-and-refine.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [Дриффузия: процесс рафинирования и рафинирования легко параллелизует модели диффузии](https://arxiv.org/abs/2603.25872)

### **45. [Технологический институт Израиля предлагает токены задач, позволяющие модели поведения гибко адаптироваться к конкретным задачам](https://hyper.ai/news/50788)**

- **Ключевой результат исследования:** [https://hyper.ai/news/50788](https://hyper.ai/news/50788)
- **Исследовательская группа:** Исследовательская группа техниона
- **Связанные исследования:** Роботологический контроль, имитационное обучение, модели основания поведения (BFMs), токены задач, адаптация к задачам.
- **Конференция публикации:** МКЛР 2026
- **Ссылка на статью:** [Токены задач: гибкий подход к адаптации моделей поведения](https://hyper.ai/papers/2503.22886)

### **46. [MIT и другие предлагают структуру EnergAIzer, обеспечивающую быструю и точную оценку мощности GPU для рабочих нагрузок ИИ](https://hyper.ai/news/51038)**

- **Ключевой результат исследования:** [https://hyper.ai/news/51038](https://hyper.ai/news/51038)
- **Исследовательская группа:** MIT и MIT-IBM Watson AI Lab
- **Связанные исследования:** Оценка мощности GPU, рабочие нагрузки ИИ, энергоэффективность центра обработки данных, энергетическая система EnergAIzer, профилирование производительности оборудования.
- **Журнал публикации:** Архив
- **Ссылка на статью:** [EnergAIzer: Быстрая и точная система оценки мощности GPU для рабочих нагрузок ИИ](https://arxiv.org/abs/2604.20105)

### **47. [UIUC предлагает гетерогенную структуру агентов Eywa, пробивая границы языковых централизованных больших моделей](https://hyper.ai/news/51222)**

- **Ключевой результат исследования:** [https://hyper.ai/news/51222](https://hyper.ai/news/51222)
- **Исследовательская группа:** Исследовательская группа UIUC
- **Связанные исследования:** Агентский ИИ, гетерогенная структура агентов Eywa, модели оснований, специфические для домена, системы с многоагентами, Большие языковые модели (LLM).
- **Журнал публикации:** Архив
- **Ссылка на статью:** [Неотъемлемая научная организация Модель сотрудничества](https://hyper.ai/papers/2604.27351)

### **48. [Стэнфордский университет и другие используют суррогатные модели LSTM для достижения 252x ускоренной моделирования второстепенной нелинейной оптики](https://hyper.ai/news/51410)**

- **Ключевой результат исследования:** [https://hyper.ai/news/51410](https://hyper.ai/news/51410)
- **Исследовательская группа:** Стэнфордский университет, UCLA и Национальная лаборатория ускорителей SLAC
- **Связанные исследования:** Второй порядковая нелинейная оптика, генерация суммарной частоты (SFG), сети длинной краткосрочной памяти (LSTM), суррогатная модель, метод разделенного Fourier (SSFM).
- **Журнал публикации:** Продвинутая фотоника
- **Ссылка на статью:** [Моделирование с помощью глубокого обучения для нелинейной оптики χ(2)](https://go.hyper.ai/5bLoA)
