# Awesome 과학을 위한 AI
**EN** | [CN](README_CN.md)
- [**머리말**](#foreword)
- [**AI+ 바이오의약품**](#ai-biopharmaceutical)
  - [**1. AdaDR, 약물 재창출에서 여러 벤치마크 방법을 능가**](#1-adadr-outperforms-multiple-benchmark-methods-in-drug-repositioning)
  - [**2. IMN4NPD, 분자 네트워크의 대규모 군집 중복 동정을 가속하고 자기 루프와 노드 쌍에 주석 제공**](#2-imn4npd-accelerates-the-dereplication-of-extensive-clusters-in-molecular-networks-providing-annotations-for-self-loops-and-paired-nodes)
  - [**3. 단일세포 멀티오믹스 데이터의 모자이크 통합을 위한 심층 생성 모델 MIDAS**](#3-deep-generative-model-midas-for-mosaic-integration-of-single-cell-multi-omics-data)
  - [**4. ResGen: 단백질 포켓 기반 3D 분자 생성 모델**](#4-resgen-a-3d-molecular-generation-model-based-on-protein-pockets)
  - [**5. 대형 모델 + 머신러닝으로 효소 반응속도 매개변수 고정밀 예측**](#5-large-models--machine-learning-for-high-precision-prediction-of-enzyme-kinetic-parameters)
  - [**6. MIT, 딥러닝으로 새로운 항생제 발견**](#6-mit-uses-deep-learning-to-discover-novel-antibiotics)
  - [**7. 신경망으로 GPCR-G 단백질 결합 선택성 해독**](#7-neural-networks-decipher-gpcr-g-protein-coupling-selectivity)
  - [**8. Macformer, 비고리형 약물 fedratinib의 거대고리화**](#8-macformer-macrocyclizes-the-acyclic-drug-fedratinib)
  - [**9. 회귀 네트워크 + CGMD로 수백억 개 펩타이드의 자기조립 특성 예측**](#9-regression-network--cgmd-predicts-self-assembly-properties-of-tens-of-billions-of-peptides)
  - [**10. 비지도학습으로 7,100만 개 유전자 돌연변이 예측**](#10-unsupervised-learning-predicts-71-million-gene-mutations)
  - [**11. 그래프 신경망(GNN) 기반 냄새 분석 AI 개발**](#11-odor-analysis-ai-developed-based-on-graph-neural-networks-gnn)
  - [**12. 그래프 신경망으로 안전하고 효과적인 노화 방지 성분 선별**](#12-graph-neural-networks-screen-for-safe-and-highly-effective-anti-aging-ingredients)
  - [**13. 머신러닝으로 도파민 방출량과 위치 정량 분석**](#13-machine-learning-quantitatively-analyzes-dopamine-release-amount-and-location)
  - [**14. 머신러닝으로 노화 방지 약물 3종 발견**](#14-machine-learning-discovers-three-anti-aging-drugs)
  - [**15. 딥러닝으로 Acinetobacter baumannii를 억제하는 새로운 항생제 선별**](#15-deep-learning-screens-for-novel-antibiotics-inhibiting-acinetobacter-baumannii)
  - [**16. 바이오잉크 인쇄 적합성 예측에 머신러닝 모델 적용**](#16-machine-learning-models-applied-to-predict-bioink-printability)
  - [**17. 머신러닝으로 다능성 줄기세포 분화**](#17-machine-learning-differentiates-pluripotent-stem-cells)
  - [**18. 머신러닝 모델로 지속형 주사제의 약물 방출 속도 예측**](#18-machine-learning-model-predicts-drug-release-rate-of-long-acting-injectables)
  - [**19. 머신러닝 알고리즘으로 식물의 항말라리아 특성 효과적으로 예측**](#19-machine-learning-algorithm-effectively-predicts-plant-antimalarial-properties)
  - [**20. 머신러닝 앙상블 방법으로 바이러스 단백질 조각의 면역원성 예측**](#20-machine-learning-ensemble-method-predicts-immunogenicity-of-viral-protein-fragments)
  - [**21. 생성형 AI로 새로운 항생제 개발**](#21-generative-ai-used-to-develop-novel-antibiotics)
  - [**22. 딥러닝 기반 자동·고속·다차원 단일입자 추적 시스템**](#22-deep-learning-based-automated-high-speed-multidimensional-single-particle-tracking-system)
  - [**23. ProEnsemble 머신러닝 프레임워크: 진화 경로의 프로모터 조합 최적화**](#23-proensemble-machine-learning-framework-optimizing-evolutionary-pathway-promoter-combinations)
  - [**24. 미세환경 인식 그래프 신경망 ProtLGN으로 단백질 지향 진화 유도**](#24-microenvironment-aware-graph-neural-network-protlgn-guides-directed-protein-evolution)
  - [**25. 딥러닝 모델 AlphaPPIMd: 단백질-단백질 복합체의 구조 앙상블 탐구**](#25-deep-learning-model-alphappimd-exploring-conformational-ensembles-of-protein-protein-complexes)
  - [**26. 새로운 종양 억제 단백질 분해제 dp53m, 암세포 증식 억제**](#26-novel-tumor-suppressor-protein-degrader-dp53m-inhibits-cancer-cell-proliferation)
  - [**27. CVPR 최우수 학생 논문! 다중모달 모델 BioCLIP, 제로샷 학습 달성**](#27-cvpr-best-student-paper-multimodal-model-bioclip-achieves-zero-shot-learning)
  - [**28. 매개변수 1억 개! 세포 파운데이션 모델 scFoundation, 유전자 20,000개 동시 모델링**](#28-100-million-parameters-cell-foundation-model-scfoundation-models-20000-genes-simultaneously)
  - [**29. ICML 채택, 단백질 언어 모델 ESM-AA가 기존 SOTA 능가**](#29-accepted-by-icml-protein-language-model-esm-aa-surpasses-traditional-sota)
  - [**30. SPACE 알고리즘, Cell 자매지 게재! 유사 도구를 선도하는 조직 모듈 발견 능력**](#30-space-algorithm-published-in-cell-sub-journal-tissue-module-discovery-capabilities-lead-similar-tools)
  - [**31. AlphaFold 기반의 새로운 돌파구로 단백질의 동적 다양성 규명**](#31-new-breakthroughs-based-on-alphafold-reveal-dynamic-protein-diversity)
  - [**32. P450Diffusion: 확산 모델 기반 P450 효소 신규 설계 방법**](#32-p450diffusion-de-novo-design-method-for-p450-enzymes-developed-based-on-diffusion-models)
  - [**33. 등변 그래프 신경망으로 표적 단백질 결합 부위 예측, 성능 20% 향상**](#33-equivariant-graph-neural-networks-used-for-target-protein-binding-site-prediction-boosting-performance-by-20)
  - [**34. 실험 데이터 20개로 AI 단백질의 이정표 달성! FSFP, 단백질 사전학습 모델 효과적으로 최적화**](#34-20-experimental-data-points-create-an-ai-protein-milestone-fsfp-effectively-optimizes-protein-pre-training-models)
  - [**35. 전이 가능한 딥러닝 모델로 여러 RNA 변형 식별, 계산 비용 대폭 절감**](#35-transferable-deep-learning-model-identifies-multiple-types-of-rna-modifications-significantly-reducing-computational-costs)
  - [**36. InstructProtein: 지식 지시를 이용한 단백질 언어와 인간 언어 정렬**](#36-instructprotein-aligning-protein-language-with-human-language-using-knowledge-instructions)
  - [**37. 단백질-텍스트 생성 프레임워크 ProtT3, 단백질 데이터와 텍스트 정보의 교차모달 해석 구현**](#37-protein-to-text-generation-framework-prott3-enables-cross-modal-interpretation-of-protein-data-and-text-information)
  - [**38. CPDiffusion 모델, 초저비용으로 기능성 단백질 완전 자동 설계**](#38-cpdiffusion-model-designs-functional-proteins-fully-automatically-at-an-ultra-low-cost)
  - [**39. 단백질 언어 모델과 밀집 검색 기술 기반의 새로운 단백질 상동체 탐지 방법**](#39-a-novel-protein-homolog-detection-method-based-on-protein-language-models-and-dense-retrieval-techniques)
  - [**40. AlphaProteo, 표적 단백질 바인더를 효율적으로 설계하여 친화도 300배 향상**](#40-alphaproteo-efficiently-designs-target-protein-binders-increasing-affinity-by-300-times)
  - [**41. 새로운 잡음 제거 단백질 언어 모델 DePLM, 돌연변이 영향 예측에서 SOTA 능가**](#41-novel-denoising-protein-language-model-deplm-outperforms-sota-models-in-mutation-effect-prediction)
  - [**42. 기하 심층 생성 모델 DynamicBind, 동적 단백질 도킹 예측 구현**](#42-geometric-deep-generative-model-dynamicbind-enables-dynamic-protein-docking-prediction)
  - [**43. 약물 발견 대형 언어 모델 Y-Mol, LLaMA2를 전면적으로 능가**](#43-drug-discovery-large-language-model-y-mol-completely-outperforms-llama2)
  - [**44. 범용 분자 역접힘 모델 UniIF, AlphaFold 3를 한층 보완**](#44-universal-molecular-inverse-folding-model-uniif-further-complements-alphafold-3)
  - [**45. 사전학습된 단백질 언어 모델 ProSST, 단백질 구조 정보의 더 효과적인 통합**](#45-pre-trained-protein-language-model-prosst-integrates-protein-structure-information-more-effectively)
  - [**46. 거대고리 펩타이드 바인더 프레임워크 RFpeptides, 약물 표적화가 어려운 단백질에 새로운 가능성 제시**](#46-macrocyclic-peptide-binder-framework-rfpeptides-offers-new-possibilities-for-undruggable-proteins)
  - [**47. 유전체 파운데이션 모델 Evo, 분자부터 유전체 규모까지 예측·생성 구현**](#47-genome-foundation-model-evo-enables-prediction-and-generation-from-molecular-to-genome-scales)
  - [**48. DigFrag, AI로 분자 조각을 정밀 분할하고 약물/농약 분자 44개 생성**](#48-digfrag-accurately-segments-molecular-fragments-using-ai-and-generates-44-drugpesticide-molecules)
  - [**49. 단백질 서열 대형 언어 모델 사전학습 방법 PRIME**](#49-protein-sequence-large-language-model-pre-training-method-prime)
  - [**50. 자기지도 딥러닝 방법, 극저온 전자현미경의 3D 재구성 혁신**](#50-self-supervised-deep-learning-method-revolutionizes-3d-reconstruction-in-cryo-electron-microscopy)
  - [**51. 다중모달 단백질 생성 방법 PLAID, 서열과 전원자 단백질 구조 동시 생성**](#51-multimodal-protein-generation-method-plaid-generates-sequences-and-all-atom-protein-structures-simultaneously)
  - [**52. 잠재 강화학습 기반 표적 분자 최적화 방법 MOLRL**](#52-targeted-molecular-optimization-method-molrl-based-on-latent-reinforcement-learning)
  - [**53. 바이러스 변이 동인 예측 프레임워크 E2VD, COVID-19/HIV/Influenza 바이러스의 진화 방향 예측**](#53-viral-variation-driver-prediction-framework-e2vd-predicts-evolutionary-directions-for-covid-19hivinfluenza-viruses)
  - [**54. 의료 언어 모델 MedFound, 전문의의 추론 능력에 근접**](#54-medical-language-model-medfound-approaches-expert-physician-reasoning-capabilities)
  - [**55. 4D 확산 모델 AlphaFolding, 동적 단백질 구조 예측의 공백 해소**](#55-4d-diffusion-model-alphafolding-fills-the-gap-in-dynamic-protein-structure-prediction)
  - [**56. 짧은 단백질 설계 파이프라인 PepPrCLIP, 새로운 암 치료법 개발에 대한 기대**](#56-pepprclip-pipeline-for-designing-short-proteins-holds-promise-for-developing-new-cancer-therapies)
  - [**57. Boltzmann 정렬 기술, 단백질 결합 자유에너지 예측 성능 대폭 향상**](#57-boltzmann-alignment-technique-drastically-improves-protein-binding-free-energy-prediction-efficacy)
  - [**58. 새로운 대규모 플로 기반 단백질 골격 생성기 Proteina, 단백질 골격 신규 설계에서 SOTA 달성**](#58-novel-large-scale-flow-based-protein-backbone-generator-proteina-achieves-sota-in-de-novo-protein-backbone-design)
  - [**59. UniGEM 모델, 확산 모델 기반으로 두 과제의 시너지 향상 최초 달성**](#59-unigem-model-achieves-synergistic-enhancement-of-two-tasks-based-on-diffusion-models-for-the-first-time)
  - [**60. RFdiffusion의 추가 진화, 원자 수준 정확도의 항체 신규 설계 구현**](#60-rfdiffusion-evolves-further-realizing-atomic-accuracy-de-novo-antibody-design)
  - [**61. 최초의 단백질-RNA 언어 모델 융합 방식, 결합 친화도 예측의 새로운 SOTA 달성**](#61-first-protein-rna-language-model-fusion-scheme-sets-new-sota-in-binding-affinity-prediction)
  - [**62. 가상 조직 모델 Celcomen, 공간 전사체 분석에서 인과추론 식별 가능성 최초 달성**](#62-virtual-tissue-model-celcomen-achieves-causal-inference-identifiability-in-spatial-transcriptomics-analysis-for-the-first-time)
  - [**63. AlphaFold-Metainference 방법, 무질서 단백질의 구조 앙상블 정밀 예측**](#63-alphafold-metainference-method-accurately-predicts-disordered-protein-structural-ensembles)
  - [**64. 고정밀 RNA 구조 예측 프레임워크 DRfold2, 여러 벤치마크에서 SOTA 능가**](#64-high-accuracy-rna-structure-prediction-framework-drfold2-surpasses-sota-in-multiple-benchmarks)
  - [**65. 새로운 단백질 설계 알고리즘 DRAKES, 생물학적 서열 설계 병목 돌파**](#65-new-protein-design-algorithm-drakes-breaks-through-the-biological-sequence-design-bottleneck)
  - [**66. 머신러닝 보조 UV 흡광 분광법으로 미생물 오염 검출**](#66-machine-learning-assisted-uv-absorbance-spectroscopy-for-detecting-microbial-contamination)
  - [**67. 단백질 서열 생성 모델을 활용한 중첩 유전자 설계**](#67-utilizing-protein-sequence-generative-models-for-overlapping-gene-design)
  - [**68. 예측 프레임워크 PUPS, 단일세포 수준의 단백질 세포 내 위치 파악**](#68-prediction-framework-pups-enables-single-cell-level-protein-subcellular-localization)
  - [**69. UniMoMo: 분자 종을 아우르는 최초의 통합 생성 프레임워크로 여러 유형의 약물 분자 설계**](#69-unimomo-the-first-unified-generative-framework-across-molecular-species-enables-multi-type-drug-molecular-design)
  - [**70. 단백질 언어 모델 Prot42, 표적 단백질 서열만으로 고친화도 바인더 생성**](#70-protein-language-model-prot42-generates-high-affinity-binders-using-only-the-target-protein-sequence)
  - [**71. 통합 생체분자 동역학 시뮬레이터 UniSim, 분자 유형과 화학 환경을 아우르는 통합 시간 조립화 동역학 시뮬레이션 최초 구현**](#71-unified-biomolecular-dynamics-simulator-unisim-achieves-unified-time-coarsened-dynamics-simulation-across-molecular-types-and-chemical-environments-for-the-first-time)
  - [**72. 계산생물학 알고리즘 SimplifiedBondfinder, 새로운 질소-산소-황 결합 69개 발견**](#72-computational-biology-algorithm-simplifiedbondfinder-uncovers-69-novel-nitrogen-oxygen-sulfur-bonds)
  - [**73. 새로운 단백질 서열 설계 방법 FAMPNN, 단백질 골격과 곁사슬 정보 동시 처리**](#73-novel-protein-sequence-design-method-fampnn-simultaneously-processes-protein-backbone-and-sidechain-information)
  - [**74. 원자 수준 단백질 설계 방법 La-Proteina, 잔기 최대 800개의 단백질 고정밀 생성**](#74-atomistic-protein-design-method-la-proteina-generates-proteins-with-up-to-800-residues-at-high-precision)
  - [**75. 다중사슬 단백질 복합체 전용 APM 모델, 전원자 설계와 기능 최적화 구현**](#75-apm-model-specifically-designed-for-multi-chain-protein-complexes-enables-all-atom-design-and-functional-optimization)
  - [**76. 새로운 본질적 무질서 영역 결합 단백질 설계 방법 Logos, 약물 표적화가 어려운 표적에 특화**](#76-new-intrinsically-disordered-region-binding-protein-design-method-logos-specializes-in-undruggable-targets)
  - [**77. 새로운 단백질 동적 융합 표현 프레임워크 FusionProt 공개, 반복적 정보 교환 구현**](#77-novel-protein-dynamic-fusion-representation-framework-fusionprot-released-enabling-iterative-information-exchange)
  - [**78. 전사체 유도 확산 모델 MorphDiff 공개, 표현형 기반 약물 발견 가속**](#78-transcriptome-guided-diffusion-model-morphdiff-released-to-accelerate-phenotypic-drug-discovery)
  - [**79. AlphaPPIMI 프레임워크, 일반화를 크게 강화하여 PPI 인터페이스 조절자 예측에서 기존 방법 능가**](#79-alphappimi-framework-significantly-enhances-generalization-surpassing-existing-methods-in-ppi-interface-modulator-prediction)
  - [**80. 새로운 융합 신경망 프레임워크, 단백질 서열의 다중 금속 결합 부위 효율적으로 예측**](#80-a-novel-fusion-neural-network-framework-efficiently-predicts-multi-metal-binding-sites-in-protein-sequences)
  - [**81. 합성 가능성이 높은 분자 투영 프레임워크 ReaSyn 공개, 초고재구성률과 경로 다양성 달성**](#81-highly-synthesizable-molecular-projection-framework-reasyn-released-achieving-ultra-high-reconstruction-rates-and-pathway-diversity)
  - [**82. 제약 강화학습 프레임워크 Ctrl-DNA 공개, 특정 세포 유전자 발현의 "표적 제어" 구현**](#82-constrained-reinforcement-learning-framework-ctrl-dna-released-realizing-targeted-control-of-specific-cell-gene-expression)
  - [**83. PLACER 프레임워크, 단백질 구조 이질성의 원자 수준 모델링 문제 해결**](#83-placer-framework-resolves-the-atomic-level-modeling-challenge-of-protein-conformational-heterogeneity)
  - [**84. Squidiff, 다양한 시나리오의 전사체 시뮬레이션으로 정밀의학·공간의학 발전 촉진**](#84-squidiff-enables-multi-scenario-transcriptome-simulation-boosting-precision-medicine-and-spatial-medicine-development)
  - [**85. 생성 모델 PepTron과 새로운 평가 벤치마크 공개, 무질서 단백질 앙상블 예측 역량 재편**](#85-generative-model-peptron-and-new-evaluation-benchmark-released-reshaping-prediction-capabilities-for-disordered-protein-ensembles)
  - [**86. MIT·Harvard, 고특이성 프로테아제 기질 설계 문제를 극복하는 종단간 AI 워크플로 CleaveNet 제안**](#86-mit-and-harvard-propose-end-to-end-ai-workflow-cleavenet-to-overcome-highly-specific-protease-substrate-design-challenges)
  - [**87. Goethe University Frankfurt 연구팀, 인간 E3 리가아제군의 복잡성을 해독하는 다중스케일 분류 프레임워크 제안**](#87-goethe-university-frankfurt-team-proposes-a-multi-scale-classification-framework-to-decode-the-complexity-of-the-human-e3-ligome)
  - [**88. Basecamp·NVIDIA, AI 프로그래머블 치료제 설계를 구현하는 EDEN 파운데이션 모델 공동 공개**](#88-basecamp-and-nvidia-jointly-release-the-eden-foundation-model-enabling-ai-programmable-therapeutic-design)
  - [**89. Microsoft 등, 일반 병리 슬라이드에서 가상 mIF 아틀라스를 생성하는 다중모달 AI 프레임워크 GigaTIME 제안**](#89-microsoft-and-others-propose-the-multimodal-ai-framework-gigatime-to-generate-virtual-mif-atlases-from-routine-pathology-slides)
  - [**90. MIT, 코돈 최적화로 재조합 단백질 수율을 높이는 딥러닝 언어 모델 Pichia-CLM 제안**](#90-mit-proposes-deep-learning-language-model-pichia-clm-to-optimize-codons-for-enhanced-recombinant-protein-yield)
  - [**91. MIT·ETH, 단일세포 다중모달 데이터의 효율적 통합·분리를 위한 딥러닝 프레임워크 APOLLO 공동 제안**](#91-mit-and-eth-jointly-propose-deep-learning-framework-apollo-to-efficiently-integrate-and-disentangle-single-cell-multimodal-data)
  - [**92. CUHK 등, 변형 펩타이드의 통합 교차스케일 표현 학습을 위한 Bi-TEAM 프레임워크 공동 제안**](#92-cuhk-and-others-jointly-propose-the-bi-team-framework-for-unified-cross-scale-representation-learning-of-modified-peptides)
  - [**93. Carnegie Mellon University 등, 전원자 단백질 모델의 양자 정밀화를 위한 AQuaRef 제안**](#93-carnegie-mellon-university-and-others-propose-aquaref-for-quantum-refinement-of-all-atom-protein-models)
  - [**94. NVIDIA 등, 단백질 바인더 생성·최적화를 통합하는 Complexa 프레임워크 공동 제안**](#94-nvidia-and-others-jointly-propose-the-complexa-framework-to-unify-protein-binder-generation-and-optimization)
  - [**95. MIT·CMU, 진동 동역학을 도입하여 단백질 신규 설계를 강화하는 VibeGen 공동 제안**](#95-mit-and-cmu-jointly-propose-vibegen-introducing-vibrational-dynamics-to-empower-de-novo-protein-design)
  - [**96. Institut Pasteur, 딥러닝으로 항파지 단백질 239만 개를 예측하여 세균 면역 지도 작성**](#96-institut-pasteur-uses-deep-learning-to-predict-239-million-anti-phage-proteins-mapping-bacterial-immunity)
  - [**97. KAIST 연구팀, AI로 소분자 결합 단백질을 신규 설계하고 바이오센서에 성공적으로 적용**](#97-kaist-team-utilizes-ai-to-de-novo-design-small-molecule-binding-proteins-successfully-applying-them-in-biosensors)
  - [**98. University of Toronto 등, 유전체 서열의 효율적 계층 모델링을 위한 dnaHNet 제안**](#98-university-of-toronto-and-others-propose-dnahnet-for-efficient-hierarchical-modeling-of-genomic-sequences)
  - [**99. Queen Mary University of London 등, 최대 규모 단백유전체 연구로 질병의 분자 메커니즘 규명**](#99-queen-mary-university-of-london-and-others-conduct-the-largest-scale-proteogenomic-study-revealing-molecular-disease-mechanisms)
  - [**100. Goethe University Frankfurt 등, genESOM 모델 제안: 생성형 AI로 소표본 동물 실험의 한계 돌파**](#100-goethe-university-frankfurt-and-others-propose-genesom-model-generative-ai-breaks-through-small-sample-animal-experiments)
- [**AI+ 의료**](#ai-healthcare)
  - [**1. 딥러닝 시스템 DeepDR Plus, 안저 영상으로 당뇨망막병증 예측**](#1-deepdr-plus-deep-learning-system-predicts-diabetic-retinopathy-using-fundus-images)
  - [**2. 로지스틱 회귀 모델 분석: 높은 녹색 경관 지수는 MetS 위험 감소**](#2-logistic-regression-model-analyzes-that-high-green-landscape-index-reduces-mets-risk)
  - [**3. 딥러닝 시스템, 초급 안과의사의 진단 일치도 12% 향상 지원**](#3-deep-learning-system-helps-junior-ophthalmologists-increase-diagnostic-consistency-by-12)
  - [**4. GSP-GCNs, 파킨슨병 진단 정확도 최대 90.2% 달성**](#4-gsp-gcns-achieve-up-to-902-accuracy-in-parkinsons-disease-diagnosis)
  - [**5. 유방암 예후 점수 체계 MIRS**](#5-breast-cancer-prognosis-scoring-system-mirs)
  - [**6. 망막 영상 파운데이션 모델 RETFound, 여러 전신 질환 예측**](#6-retinal-image-foundation-model-retfound-predicts-multiple-systemic-diseases)
  - [**7. SVM으로 촉각 센서 최적화, 점자 인식률 96.12% 달성**](#7-svm-optimizes-tactile-sensors-braille-recognition-rate-reaches-9612)
  - [**8. CAS Beijing Institute of Genomics, 개방형 생의학 영상 아카이브 구축**](#8-cas-beijing-institute-of-genomics-establishes-an-open-biomedical-imaging-archive)
  - [**9. AI Lunit, 의사 수준의 정확도로 유방촬영 영상 판독**](#9-ai-lunit-reads-mammograms-with-accuracy-comparable-to-doctors)
  - [**10. 특징 선택 전략으로 유방암 바이오마커 탐지**](#10-feature-selection-strategy-detects-breast-cancer-biomarkers)
  - [**11. 그래디언트 부스팅 머신 모델, BPSD 하위 증후군 정밀 예측**](#11-gradient-boosting-machine-model-accurately-predicts-bpsd-sub-syndrome)
  - [**12. 머신러닝 모델로 환자의 1년 사망률 예측**](#12-machine-learning-model-predicts-patient-one-year-mortality-rate)
  - [**13. 새로운 AI 뇌-컴퓨터 인터페이스 기술, 실어증 환자의 "말하기" 지원**](#13-new-ai-brain-computer-interface-technology-allows-aphasic-patients-to-speak)
  - [**14. 딥러닝 기반 AI로 췌장암 탐지**](#14-deep-learning-based-artificial-intelligence-detection-of-pancreatic-cancer)
  - [**15. 머신러닝 보조 폐암 선별검사의 인구집단 효과**](#15-population-effectiveness-of-machine-learning-assisted-lung-cancer-screening)
  - [**16. 난소암 진단 AI 융합 모델 MCF, 일반 검사 데이터와 나이로 위험 계산**](#16-ovarian-cancer-diagnostic-ai-fusion-model-mcf-calculates-risk-using-routine-lab-data-and-age)
  - [**17. Google, 의료 AI 도구의 공정성을 평가하는 4단계 HEAL 프레임워크 공개**](#17-google-releases-heal-framework-a-4-step-process-to-assess-medical-ai-tool-fairness)
  - [**18. 의미 분할로 공간 전사체 의미 주석 도구 Pianno 개발**](#18-leveraging-semantic-segmentation-to-develop-spatial-transcriptomics-semantic-annotation-tool-pianno)
  - [**19. AI 모델 UniFMIR, 기존 형광 현미경 영상의 한계 돌파**](#19-ai-model-unifmir-breaks-the-limits-of-existing-fluorescence-microscopy-imaging)
  - [**20. 딥러닝 시스템으로 암 생존 예측 정확도 향상**](#20-deep-learning-system-improves-the-accuracy-of-cancer-survival-prediction)
  - [**21. MemSAM, 의료 영상 분할에 "Segment Anything" 모델 적용**](#21-memsam-adapts-segment-anything-model-for-medical-video-segmentation)
  - [**22. 의료 영상 분할 모델 Medical SAM 2, SOTA 순위 1위**](#22-medical-image-segmentation-model-medical-sam-2-tops-the-sota-leaderboard)
  - [**23. 머신러닝으로 항암제 내성과 종양 재발에 대응, 유방암 줄기세포에 대한 강력한 방어 구축**](#23-machine-learning-fights-chemotherapy-resistance-and-tumor-recurrence-building-a-strong-defense-against-breast-cancer-stem-cells)
  - [**24. 당뇨병 관리를 위한 비전-언어 모델 DeepDR-LLM, Nature 자매지 게재**](#24-vision-language-model-deepdr-llm-for-diabetes-care-published-in-nature-sub-journal)
  - [**25. 숙련된 병리의사와 대등! Tsinghua 연구팀, 신경교종 정밀 진단용 AI 파운데이션 모델 ROAM 제안**](#25-leveling-with-senior-pathologists-tsinghua-team-proposes-ai-foundation-model-roam-for-precise-glioma-diagnosis)
  - [**26. 범용 의료 영상 분할 모델 ScribblePrompt, SAM 기반 모델 능가**](#26-universal-medical-image-segmentation-model-scribbleprompt-outperforms-sam-based-models)
  - [**27. 디지털 트윈 뇌 플랫폼, 인간 뇌와 유사한 임계 현상 및 인지 기능 재현**](#27-digital-twin-brain-platform-demonstrates-critical-phenomena-and-cognitive-functions-similar-to-the-human-brain)
  - [**28. 자동 LLM 대화 에이전트 시뮬레이션 시스템, 우울증 초기 진단 수행**](#28-automated-llm-dialogue-agent-simulation-system-performs-initial-diagnosis-for-depression)
  - [**29. 딥러닝 모델 LucaProt, RNA 바이러스 식별 지원**](#29-deep-learning-model-lucaprot-aids-in-rna-virus-identification)
  - [**30. 의료 영상 사전학습 프레임워크 UniMedI, 의료 데이터 이질성 장벽 해소**](#30-medical-image-pre-training-framework-unimedi-breaks-down-medical-data-heterogeneity-barriers)
  - [**31. 다국어 의료 대형 모델 MMed-Llama 3, 의료 응용 시나리오에 더 잘 적응**](#31-multilingual-medical-large-model-mmed-llama-3-better-adapts-to-medical-application-scenarios)
  - [**32. 캡슐 내시경 영상 이어붙이기 방법 S2P-Matching, 영상 재구성 지원**](#32-capsule-endoscopy-image-stitching-method-s2p-matching-assists-in-image-reconstruction)
  - [**33. 다중모달 의료 벤치마크 GMAI-MMBench, 임상 과제 18종을 포괄하는 데이터셋 284개 포함**](#33-multimodal-medical-benchmark-gmai-mmbench-features-284-datasets-covering-18-clinical-tasks)
  - [**34. 새로운 시계열 예측 방법 CGS-Mask, 환자 생존율의 핵심 지표 규명**](#34-novel-time-series-forecasting-method-cgs-mask-uncovers-key-indicators-for-patient-survival-rates)
  - [**35. 비침습적 뇌 해독 프레임워크 fMRI, 뇌-컴퓨터 인터페이스와 인지 모델의 기반 마련**](#35-non-invasive-brain-decoding-framework-fmri-lays-the-foundation-for-brain-computer-interfaces-and-cognitive-models)
  - [**36. 의료 영상 분할 모델 M2CF-Net, 쇼그렌 증후군 진단 정확도 향상**](#36-medical-image-segmentation-model-m2cf-net-improves-diagnosis-accuracy-for-sjogrens-syndrome)
  - [**37. BSAFusion, 다중모달 의료 영상 정렬·융합 구현**](#37-bsafusion-enables-alignment-and-fusion-of-multimodal-medical-images)
  - [**38. 다중에이전트 LLM 프레임워크 KG4Diagnosis, 흔한 질병 362종 진단 지원**](#38-multi-agent-llm-framework-kg4diagnosis-assists-in-diagnosing-362-common-diseases)
  - [**39. 영상 분할 모델 ConDSeg, 의료 영상의 불명확한 경계·동시 발생 문제 해결**](#39-image-segmentation-model-condseg-solves-soft-boundary-and-co-occurrence-issues-in-medical-imaging)
  - [**40. 의료 모델 M³FM, 제로샷 임상 진단으로 질병 보고·분류 지원**](#40-medical-model-m³fm-enables-zero-shot-clinical-diagnosis-supporting-disease-reporting-and-classification)
  - [**41. 두개골 CT 기반 딥러닝 성별 추정, 인간 법의학 전문가 능가**](#41-deep-learning-based-sex-estimation-from-skull-ct-scans-outperforms-human-forensic-experts)
  - [**42. AI로 의료 연구 강화: 대형 모델이 일차의료 의사 교육의 "최고 파트너"로**](#42-ai-boosts-medical-research-large-models-become-the-golden-partner-for-training-primary-care-physicians)
  - [**43. AcneDGNet 딥러닝 알고리즘, 여드름 병변 탐지·등급 평가 구현**](#43-acnedgnet-deep-learning-algorithm-achieves-acne-lesion-detection-and-grading)
  - [**44. 다중모달 의료 영상 분할 모델 VISTA3D 공개, 3D 영상 자동 분할 및 상호작용 구현**](#44-multimodal-medical-image-segmentation-model-vista3d-released-achieving-3d-image-auto-segmentation-and-interaction)
  - [**45. 다중평면 심초음파 통합 분할 모델 EchoONE, 여러 평면 정밀 분할**](#45-multi-plane-echocardiography-unified-segmentation-model-echoone-accurately-segments-multiple-planes)
  - [**46. 다중에이전트 대화 프레임워크, 진료 상담을 모사하여 질병 진단 지원**](#46-multi-agent-dialogue-framework-simulates-medical-consultations-to-aid-disease-diagnosis)
  - [**47. 딥러닝 프레임워크 STAIG, 종양 미세환경의 상세 유전 정보 규명**](#47-deep-learning-framework-staig-reveals-detailed-genetic-information-in-the-tumor-microenvironment)
  - [**48. 최초의 올인원 의료 영상 재식별 프레임워크 MaMI, 데이터셋 11개에서 SOTA 달성**](#48-first-all-in-one-medical-image-re-identification-framework-mami-reaches-sota-across-11-datasets)
  - [**49. 다대일 회귀 모델 M2OST, 디지털 병리 영상으로 유전자 발현 정밀 예측**](#49-many-to-one-regression-model-m2ost-accurately-predicts-gene-expression-using-digital-pathology-images)
  - [**50. 뇌 MRI 도구 MindGlide, 다발성 경화증 병변 정량화**](#50-brain-mri-scanning-tool-mindglide-quantifies-multiple-sclerosis-lesions)
  - [**51. 계층적 증류 다중인스턴스 학습 프레임워크 HDMIL, 기가픽셀 전체 슬라이드 영상 신속 처리**](#51-hierarchical-distillation-multi-instance-learning-framework-hdmil-rapidly-processes-gigapixel-whole-slide-images)
  - [**52. 범용 3D 혈관 분할 파운데이션 모델 vesselFM, SAM 기반 모델 크게 능가**](#52-universal-3d-blood-vessel-segmentation-foundation-model-vesselfm-far-exceeds-sam-based-models)
  - [**53. 그래프 신경망, 폐암 생존 정밀 예측 및 치명적 하위 유형 3종 발견**](#53-graph-neural-networks-accurately-predict-lung-cancer-survival-discovering-3-fatal-subtypes)
  - [**54. 융합 전략 AI 모델, 패혈성 쇼크 사망 위험 예측**](#54-fusion-strategy-ai-model-predicts-septic-shock-mortality-risk)
  - [**55. 세계 최초 HIE 임상 사고 그래프 모델, 신경인지 결과 예측 15% 향상**](#55-worlds-first-clinical-graph-of-thought-model-in-hie-improves-neurocognitive-outcome-prediction-by-15)
  - [**56. 다차원 EHR 데이터의 세밀한 환자 코호트 모델링으로 입원 기간 예측 정확도 16.3% 향상**](#56-fine-grained-patient-cohort-modeling-using-multidimensional-ehr-data-increases-length-of-stay-prediction-accuracy-by-163)
  - [**57. 딥러닝 모델 APEX, 잠재적 항생제 후보 선별**](#57-deep-learning-model-apex-screens-potential-antibiotic-candidates)
  - [**58. 유전자 시퀀싱·머신러닝을 이용한 하수 역학 평가: ICA-Var, 바이러스 최대 4주 조기 탐지**](#58-wastewater-epidemiology-assessment-using-gene-sequencing-and-machine-learning-ica-var-method-detects-viruses-up-to-4-weeks-early)
  - [**59. 양방향 Brownian 브리지 확산 모델, 가상 염색 재현성 향상**](#59-bidirectional-brownian-bridge-diffusion-model-enhances-reproducibility-of-virtual-staining)
  - [**60. Medical GraphRAG, QA 정확도 기록 경신 및 벤치마크 데이터셋 11개에서 SOTA 달성**](#60-medical-graphrag-breaks-qa-accuracy-records-achieving-sota-on-11-benchmark-datasets)
  - [**61. Healthcare Agent, 의료 윤리·안전 문제 자동 탐지**](#61-healthcare-agent-automatically-detects-medical-ethics-and-safety-issues)
  - [**62. 혈구 영상 분류기 CytoDiffusion, 임상 전문가를 능가하여 백혈병 발견 지원**](#62-blood-cell-image-classifier-cytodiffusion-assists-in-discovering-leukemia-surpassing-clinical-experts)
  - [**63. UCL 연구팀, 기관 간 혈액 형태 분석을 위한 연합학습 프레임워크 MORPHFED 제안**](#63-ucl-team-proposes-federated-learning-framework-morphfed-for-cross-institutional-blood-morphology-analysis)
  - [**64. 프랑스 연구팀, HCC 간이식 후보자의 정밀 사망률 예측을 위한 설명 가능한 머신러닝 프레임워크 제안**](#64-french-team-proposes-explainable-machine-learning-framework-for-accurate-mortality-prediction-in-hcc-liver-transplant-candidates)
  - [**65. Stanford University, 최초의 네이티브 3D 복부 CT 비전-언어 모델 Merlin 제안**](#65-stanford-university-proposes-merlin-the-first-native-3d-abdominal-ct-vision-language-model)
- [**AI+ 재료화학**](#ai-materials-chemistry)
  - [**1. 고처리량 계산 프레임워크, 33분 만에 새로운 MOF 후보 120,000개 생성**](#1-high-throughput-computational-framework-generates-120000-novel-mof-candidates-in-33-minutes)
  - [**2. 머신러닝 알고리즘으로 P-SOC 전극 재료 선별**](#2-machine-learning-algorithm-screens-p-soc-electrode-materials)
  - [**3. SEN 머신러닝 모델, 재료 특성 고정밀 예측 달성**](#3-sen-machine-learning-model-achieves-high-accuracy-material-property-predictions)
  - [**4. 딥러닝 도구 GNoME, 새로운 결정 220만 개 발견**](#4-deep-learning-tool-gnome-discovers-22-million-new-crystals)
  - [**5. 장 유도 재귀 임베딩 원자 신경망, 외부 장의 세기·방향 변화 정밀 기술**](#5-field-induced-recursively-embedded-atom-neural-network-accurately-describes-external-field-strength-and-direction-changes)
  - [**6. 머신러닝으로 다공성 재료의 물 흡착 등온선 예측**](#6-machine-learning-predicts-water-adsorption-isotherms-of-porous-materials)
  - [**7. 머신러닝으로 BiVO(4) 광양극의 보조촉매 최적화**](#7-using-machine-learning-to-optimize-co-catalysts-for-bivo4-photoanodes)
  - [**8. RetroExplainer 알고리즘, 딥러닝 기반 역합성 예측 수행**](#8-retroexplainer-algorithm-performs-retrosynthesis-prediction-based-on-deep-learning)
  - [**9. 심층 신경망 + NLP로 내식성 합금 개발**](#9-deep-neural-networks--nlp-used-to-develop-corrosion-resistant-alloys)
  - [**10. 딥러닝으로 표면 관찰에서 재료 내부 구조 파악**](#10-deep-learning-determines-materials-internal-structures-through-surface-observations)
  - [**11. 혁신적인 X선 섬광체로 새로운 재료 3종 개발**](#11-developing-3-new-materials-using-innovative-x-ray-scintillators)
  - [**12. 준지도학습으로 라벨 없는 데이터의 숨겨진 정보 추출**](#12-semi-supervised-learning-extracts-hidden-information-from-unlabeled-data)
  - [**13. AutoML 기반 자동 지식 추출**](#13-automated-knowledge-extraction-based-on-automl)
  - [**14. Uni-MOF: 3D MOF 재료의 흡착 거동 예측 머신러닝 모델**](#14-uni-mof-a-machine-learning-model-predicting-adsorption-behavior-in-3d-mof-materials)
  - [**15. 마이크로전자공학, 포스트 무어 시대로 가속! DNN·나노막 기술을 통합해 입사광 각도 정밀 분석**](#15-microelectronics-accelerates-towards-the-post-moore-era-integrating-dnn-with-nanomembrane-technology-to-precisely-analyze-incident-light-angles)
  - [**16. 리튬 배터리 성능 한계 재편, 앙상블 학습 기반 단순화 전기화학 모델 제안**](#16-reshaping-lithium-battery-performance-boundaries-proposing-a-simplified-electrochemical-model-based-on-ensemble-learning)
  - [**17. 머신러닝으로 최강의 철계 초전도 자석 탄생**](#17-the-strongest-iron-based-superconducting-magnet-born-via-machine-learning)
  - [**18. 신경망으로 밀도범함수이론 대체! 범용 재료 모델, 초정밀 예측 달성**](#18-neural-networks-replace-density-functional-theory-universal-materials-model-achieves-ultra-precise-predictions)
  - [**19. 신경망 밀도범함수 프레임워크, 물질 전자 구조 예측의 블랙박스 개방**](#19-neural-network-density-functional-framework-opens-the-black-box-of-matters-electronic-structure-prediction)
  - [**20. 신경망을 이용한 최초의 완전 순방향 광학 컴퓨팅 학습 아키텍처, 자국 광학 칩의 중대한 돌파구 달성**](#20-first-fully-forward-mode-training-architecture-for-optical-computing-using-neural-networks-achieves-major-breakthrough-in-domestic-optical-chips)
  - [**21. 화학 LLM ChemLLM, QA 데이터 700만 건으로 GPT-4에 필적하는 전문 역량**](#21-chemistry-llm-chemllm-covers-7-million-qa-data-professional-capabilities-rival-gpt-4)
  - [**22. 웨이퍼 규모 생산이 가능한 AI 적응형 초소형 분광계**](#22-wafer-scale-producible-ai-adaptive-micro-spectrometers)
  - [**23. GNNOpt 모델, 태양전지·양자 재료 후보 수백 종 식별**](#23-gnnopt-model-identifies-hundreds-of-solar-cell-and-quantum-material-candidates)
  - [**24. 공개 OMat24 데이터셋, DFT 계산 결과 1억 1,000만 건 포함**](#24-open-omat24-dataset-contains-110-million-dft-calculation-results)
  - [**25. 머신러닝으로 합성한 새로운 내화성 고엔트로피 합금, 우수한 상온 연성 확보**](#25-novel-refractory-high-entropy-alloy-synthesized-via-machine-learning-boasts-excellent-room-temperature-ductility)
  - [**26. 재료 생성 모델 FlowLLM, 재료 45,000종 이상의 데이터셋 포함**](#26-material-generative-model-flowllm-features-a-dataset-covering-over-45k-materials)
  - [**27. 능동학습으로 고엔트로피 산화물 14,000종 식별, 고활성 수소 발생 촉매 4종 선별 성공**](#27-using-active-learning-to-identify-14000-high-entropy-oxides-successfully-screening-4-high-activity-hydrogen-evolution-catalysts)
  - [**28. 딥러닝 모델 BETE-NET, 초전도 재료 탐색 효율 5배 향상**](#28-deep-learning-model-bete-net-boosts-superconducting-material-search-efficiency-by-5x)
  - [**29. 그래디언트 부스팅 결정 트리(GBDT) 기술로 고엔트로피 합금 내산화성 고정밀 예측 추가 개선**](#29-gradient-boosting-decision-tree-gbdt-technology-further-improves-high-precision-prediction-of-high-entropy-alloy-oxidation-resistance)
  - [**30. 분자 설계 프레임워크 RingFormer, 유기 재료 분자의 광전자 특성 정밀 예측**](#30-molecular-design-framework-ringformer-more-precisely-predicts-organic-material-molecular-optoelectronic-properties)
  - [**31. 무기 역합성 계획 방법 Retrieval-Retro, 무기 재료 합성 효율·정확도 향상**](#31-inorganic-retrosynthesis-planning-method-retrieval-retro-improves-inorganic-material-synthesis-efficiency-and-accuracy)
  - [**32. 대형 모델로 수소화물 고체 전해질 전도 메커니즘 해독, 신뢰할 수 있는 활성화 에너지 예측 모델 구축**](#32-using-large-models-to-decipher-hydride-solid-state-electrolyte-conduction-mechanisms-establishing-a-reliable-activation-energy-prediction-model)
  - [**33. 머신러닝 기반 테라 규모 질량분석 데이터 검색으로 미지의 화학 반응 발견**](#33-tera-scale-mass-spectrometry-data-search-enabled-by-machine-learning-uncovers-unknown-chemical-reactions)
  - [**34. 확산 모델 기반 생성형 AI 구조 결정 방법 PXRDnet, 복잡한 모의 나노결정 200개 해석 성공**](#34-generative-ai-structure-solution-method-pxrdnet-based-on-diffusion-models-successfully-solves-200-complex-simulated-nanocrystals)
  - [**35. DreaMS 모델, 분자 질량 스펙트럼 2억 개로 세계 최대 질량분석 데이터셋 GeMS 구축**](#35-dreams-model-covers-200-million-molecular-mass-spectra-building-the-worlds-largest-mass-spec-dataset-gems)
  - [**36. 등변 머신러닝 프레임워크, 재료의 대규모 전기장 시뮬레이션 가속**](#36-equivariant-machine-learning-framework-accelerates-large-scale-electric-field-simulations-of-materials)
  - [**37. 다중 출처 데이터 통합 방법으로 시멘트 클링커 대체재 25종 선별, 온실가스 12억 톤 감축 효과**](#37-multi-source-data-integration-method-screens-25-types-of-cement-clinker-alternatives-equivalent-to-reducing-12-billion-tons-of-greenhouse-gases)
  - [**38. UNIMATE, 위상 생성/특성 예측 통합 모델링 최초 달성**](#38-unimate-achieves-unified-modeling-of-topology-generationproperty-prediction-for-the-first-time)
  - [**39. 전원자 확산 Transformer 프레임워크, 주기·비주기 원자 시스템 통합 생성 최초 구현**](#39-all-atom-diffusion-transformer-framework-enables-unified-generation-of-periodic-and-aperiodic-atomic-systems-for-the-first-time)
  - [**40. FASTSOLV 모델, 모든 온도의 소분자 용해도 예측 및 추론 속도 50배 향상**](#40-fastsolv-model-realizes-small-molecule-solubility-prediction-at-any-temperature-accelerating-inference-speed-by-50x)
  - [**41. 다중모달 머신러닝 모델 기반의 새로운 방법, 완전한 결정 구조 없이 재료 특성 예측**](#41-novel-method-based-on-multimodal-machine-learning-models-predicts-material-properties-without-complete-crystal-structures)
  - [**42. AI 모델 CGformer, 전역 주의 메커니즘을 혁신적으로 통합하여 고엔트로피 재료 연구개발 지원**](#42-ai-model-cgformer-innovatively-integrates-global-attention-mechanisms-aiding-high-entropy-material-rd)
  - [**43. 새로운 구조 제약 통합 방법 SCIGEN, 모든 사전학습 확산 모델에 적용**](#43-novel-structural-constraint-integration-method-scigen-adapts-to-any-pre-trained-diffusion-model)
  - [**44. 물리 정보 기반 생성형 AI 모델 SpectroGen, 단일 모달 입력만으로 실험 상관도 99%의 교차모달 생성**](#44-physically-informed-generative-ai-model-spectrogen-requires-only-single-modality-input-to-achieve-cross-modal-generation-with-99-experimental-correlation)
  - [**45. MOF-ChemUnity, MOF 전반의 지식을 재구성하여 재료 발견을 "설명 가능한 AI" 시대로 추진**](#45-mof-chemunity-reconstructs-mof-panoramic-knowledge-pushing-material-discovery-into-the-explainable-ai-era)
  - [**46. 경량 범용 퍼텐셜 모델 PET-MAD 공개, 최소 표본으로 전용 모델 수준 정밀도 달성**](#46-lightweight-universal-potential-model-pet-mad-released-achieving-dedicated-model-level-precision-with-minimal-samples)
  - [**47. AI 시스템 ChemOntology 공개, 화학 지식 통합으로 반응 경로 탐색 비용 절반으로 감소**](#47-ai-system-chemontology-released-halving-reaction-path-search-costs-by-integrating-chemical-knowledge)
  - [**48. Princeton 등, MOF 자유에너지 예측 LLM 방법 공동 제안, 합성 가능성 고정밀 평가**](#48-princeton-and-others-jointly-propose-llm-method-for-predicting-mof-free-energy-highly-accurately-assessing-synthesis-feasibility)
  - [**49. Yale University 연구팀, LLM을 조율하여 신뢰도 높은 화학 합성 계획을 생성하는 MOSAIC 모델 제안**](#49-yale-university-team-proposes-mosaic-model-coordinating-llms-to-generate-highly-reliable-chemical-synthesis-schemes)
  - [**50. MIT 등, 재료 합성 경로의 생성형 계획을 구현하는 확산 모델 DiffSyn 제안**](#50-mit-and-others-propose-diffusion-model-diffsyn-enabling-generative-planning-of-material-synthesis-pathways)
  - [**51. University of Michigan·Farasis Energy, 배터리 수명 예측 주기를 대폭 단축하는 "Discovery Learning" 방법 공동 제안**](#51-university-of-michigan-and-farasis-energy-jointly-propose-discovery-learning-method-drastically-shortening-battery-life-prediction-cycles)
  - [**52. Cornell University, 배터리 전해질 성능을 고정밀 예측·설명하는 SCAN 프레임워크 제안**](#52-cornell-university-proposes-scan-framework-highly-accurately-predicting-and-explaining-battery-electrolyte-performance)
  - [**53. MIT, 재료 내부 결함의 비파괴 특성화·정량화를 위한 파운데이션 대형 모델 DefectNet 제안**](#53-mit-proposes-foundation-large-model-defectnet-for-non-destructive-characterization-and-quantification-of-internal-material-defects)
  - [**54. Cornell University, 전자현미경 영상 전 과정 자동 분석을 위한 다중에이전트 플랫폼 EMSeek 제안**](#54-cornell-university-proposes-multi-agent-platform-emseek-achieving-full-pipeline-automated-analysis-of-electron-microscopy-images)
- [**AI+ 동물학-식물학**](#ai-zoology-botany)
  - [**1. SBeA, 퓨샷 학습 프레임워크 기반 동물 사회적 행동 분석**](#1-sbea-analyzes-animal-social-behaviors-based-on-a-few-shot-learning-framework)
  - [**2. Siamese 네트워크 기반 딥러닝 방법, 배아 발달 과정 자동 포착**](#2-deep-learning-method-based-on-siamese-networks-automatically-captures-embryonic-development-processes)
  - [**3. 최적 수확일 예측을 위한 드론 기반 식물 표현형 데이터 수집의 체계적 파이프라인**](#3-systematic-pipeline-for-collecting-plant-phenotype-data-via-drones-to-predict-optimal-harvest-dates)
  - [**4. AI 카메라 경보 시스템, 호랑이와 다른 종 정확히 구별**](#4-ai-camera-alert-system-accurately-distinguishes-tigers-from-other-species)
  - [**5. Labrador retriever 데이터와 모델 3종 비교로 탐지견 성능에 영향을 미치는 행동 특성 규명**](#5-using-labrador-retriever-data-and-comparing-3-models-reveals-behavioral-traits-affecting-detection-dogs-performance)
  - [**6. 얼굴 인식용 ArcFace 분류 헤드 기반 다종 영상 인식 모델**](#6-multi-species-image-recognition-model-based-on-arcface-classification-head-for-face-recognition)
  - [**7. Python API·컴퓨터 비전 API로 일본 벚꽃 개화 관측**](#7-monitoring-cherry-blossom-blooming-in-japan-using-python-api-and-computer-vision-api)
  - [**8. 머신러닝 기반 집단유전학 방법으로 포도 풍미 형성 메커니즘 규명**](#8-machine-learning-based-population-genetics-method-reveals-the-formation-mechanism-of-grape-flavors)
  - [**9. 종설: AI로 생물정보학 연구를 더 효율적으로 개척**](#9-review-unlocking-bioinformatics-research-more-efficiently-with-ai)
  - [**10. BirdFlow 모델, 철새 비행 경로 정밀 예측**](#10-birdflow-model-accurately-predicts-flight-paths-of-migratory-birds)
  - [**11. 새로운 고래 생물음향 모델, 고래류 8종 식별**](#11-new-whale-bioacoustics-model-identifies-8-cetacean-species)
  - [**12. 머신러닝으로 향유고래 음성 알파벳 분리, 인간 언어와 매우 유사하며 더 강한 정보 전달 능력**](#12-machine-learning-isolates-the-sperm-whale-phonetic-alphabet-highly-similar-to-human-language-with-stronger-information-carrying-capacity)
  - [**13. PlantLncBoost 모델, 종 간 lncRNA 예측 정확도 최대 96%**](#13-plantlncboost-model-achieves-up-to-96-accuracy-in-cross-species-lncrna-prediction)
  - [**14. Perch 2.0, 약 15,000종으로 생물음향 분류·탐지 SOTA 경신**](#14-perch-20-covers-nearly-15000-species-refreshing-sota-in-bioacoustic-classification-detection)
- [**AI+ 농업-임업-축산**](#ai-agriculture-forestry-animal-husbandry)
  - [**1. 합성곱 신경망으로 벼 수확량 신속·정확 추정**](#1-using-convolutional-neural-networks-for-rapid-and-accurate-rice-yield-estimation)
  - [**2. YOLOv5 알고리즘 설계 모델로 모돈 자세·새끼돼지 출산 감시**](#2-model-designed-via-yolov5-algorithm-monitors-sow-posture-and-piglet-birth)
  - [**3. 실험실 관찰·머신러닝을 결합하여 스트레스받는 토마토·담배 식물의 초음파가 공기를 통해 전달됨을 입증**](#3-combining-laboratory-observation-and-machine-learning-to-prove-that-ultrasonic-sounds-emitted-by-stressed-tomato-and-tobacco-plants-can-travel-in-air)
  - [**4. 드론 + AI 영상 분석으로 산림 해충 탐지**](#4-drone--ai-image-analysis-detects-forestry-pests)
  - [**5. 컴퓨터 비전 + 딥러닝으로 젖소 절뚝거림 탐지 시스템 개발**](#5-computer-vision--deep-learning-developed-for-a-dairy-cow-lameness-detection-system)
- [**AI+ 기상학**](#ai-meteorology)
  - [**1. 종설: 데이터 기반 머신러닝 일기예보 모델**](#1-review-data-driven-machine-learning-weather-forecasting-models)
  - [**2. 종설: 우박 폭풍 중심부의 데이터 수집과 대형 모델을 이용한 극한 기상 예측**](#2-review-collecting-data-from-hailstorm-centers-and-predicting-extreme-weather-using-large-models)
  - [**3. 전 지구 폭풍 해상 시뮬레이션·머신러닝으로 극한 강수를 정밀 예측하는 새로운 알고리즘 개발**](#3-creating-new-algorithms-to-accurately-predict-extreme-precipitation-using-global-storm-resolving-simulations-and-machine-learning)
  - [**4. 랜덤 포레스트 기반 머신러닝 모델 CSU-MLP, 중기 악기상 예측**](#4-random-forest-based-machine-learning-model-csu-mlp-predicts-medium-range-severe-weather)
  - [**5. 종단간 데이터 기반 일기예보 시스템 Aardvark Weather, 기존 방법보다 예측 수십 배 가속**](#5-end-to-end-data-driven-weather-forecasting-system-aardvark-weather-speeds-up-predictions-by-dozens-of-times-compared-to-traditional-methods)
  - [**6. 머신러닝 일기예보 시스템 FCN3, 단일 GPU 초고속 추론 지원**](#6-machine-learning-weather-forecasting-system-fcn3-supports-ultra-fast-single-gpu-inference)
  - [**7. 관측소 36개 기반 인도 몬순 예보 모델, 도시 규모의 세밀한 예보 달성**](#7-indian-monsoon-forecasting-model-based-on-36-weather-stations-achieves-city-scale-fine-forecasting)
  - [**8. ACE2, 4개월 계절 예보를 단 2분에 완료**](#8-ace2-completes-a-4-month-seasonal-forecast-in-just-2-minutes)
  - [**9. 증분 일기예보 모델 VA-MoE 공개, 매개변수 75% 감소로 SOTA 성능 달성**](#9-incremental-weather-forecasting-model-va-moe-released-achieving-sota-performance-with-75-parameter-reduction)
  - [**10. 명시적 롤링 확산 모델(ERDM) 공개, 장기 예측 문제 해결 및 중장기 예보에서 EDM 기준선 우위 유지**](#10-elucidated-rolling-diffusion-model-erdm-released-solving-long-term-forecasting-challenges-and-maintaining-a-lead-over-edm-baselines-in-medium-to-long-term-forecasts)
  - [**11. 새로운 잠재 확산 모델 OmniCast 공개, 자기회귀 일기예보 모델의 오차 누적 해결**](#11-novel-latent-diffusion-model-omnicast-released-resolving-error-accumulation-in-autoregressive-weather-forecasting-models)
  - [**12. NVIDIA, 장기 일기예보의 AI 병목을 돌파하는 새로운 장거리 증류 방법 제안**](#12-nvidia-proposes-a-novel-long-range-distillation-method-breaking-ai-bottlenecks-in-long-term-weather-forecasting)
  - [**13. 공동 연구팀, 초고속 지역 해양 예보를 위한 그래프 신경망 모델 SeaCast 제안**](#13-joint-team-proposes-graph-neural-network-model-seacast-achieving-ultra-fast-regional-ocean-forecasting)
- [**AI+ 천문학**](#ai-astronomy)
  - [**1. PRIMO 알고리즘, 블랙홀 주변 광전파 법칙 학습으로 더 선명한 블랙홀 영상 재구성**](#1-primo-algorithm-learns-light-propagation-rules-around-black-holes-to-reconstruct-sharper-black-hole-images)
  - [**2. 모의 데이터로 컴퓨터 비전 알고리즘을 학습하여 천문 영상 선명화·"복원"**](#2-training-computer-vision-algorithms-with-simulated-data-to-sharpen-and-restore-astronomical-images)
  - [**3. 비지도 머신러닝 알고리즘 Astronomaly로 기존에 놓친 이상 현상 발견**](#3-using-unsupervised-machine-learning-algorithm-astronomaly-to-find-previously-overlooked-anomalies)
  - [**4. 머신러닝 기반 CME 식별·매개변수 추출 방법**](#4-machine-learning-based-method-for-cme-identification-and-parameter-extraction)
  - [**5. 딥러닝으로 중성 탄소 흡수선 107건 발견**](#5-deep-learning-discovers-107-cases-of-neutral-carbon-absorption-lines)
  - [**6. StarFusion 모델, 고공간해상도 영상 예측 달성**](#6-starfusion-model-achieves-high-spatial-resolution-image-prediction)
  - [**7. SD3 기반 위성 영상 생성 방법 개발, 현재까지 최대 규모 원격탐사 데이터셋 EcoMapper 구축**](#7-satellite-image-generation-method-developed-based-on-sd3-constructing-the-largest-remote-sensing-dataset-to-date-ecomapper)
  - [**8. 지리공간 AI Earth AI, 핵심 데이터 3종에 집중하여 지리공간 추론 역량 64% 향상**](#8-geospatial-ai-earth-ai-focuses-on-3-core-data-types-improving-geospatial-reasoning-capabilities-by-64)
  - [**9. 최초의 천문 다중모달 파운데이션 모델 AION-1 탄생, 천체 2억 개로 사전학습**](#9-the-first-astronomical-multimodal-foundation-model-aion-1-is-born-pre-trained-on-200-million-astronomical-targets)
  - [**10. 새로운 데이터 기반 파이프라인, CNN으로 퀘이사 810,000개에서 희귀 렌즈 표본 7개 정밀 식별**](#10-novel-data-driven-pipeline-precisely-identifies-7-rare-lensed-samples-from-810000-quasars-using-cnn)
  - [**11. ESA 연구팀, 약 1억 건 Hubble 기록에서 희귀 천체를 효율적으로 선별하는 준지도 방법 AnomalyMatch 제안**](#11-esa-team-proposes-semi-supervised-method-anomalymatch-to-efficiently-screen-rare-celestial-bodies-from-nearly-100-million-hubble-records)
  - [**12. University of Warwick, RAVEN 검증 파이프라인으로 새로운 외계행성 118개 확인**](#12-university-of-warwick-proposes-the-raven-validation-pipeline-confirming-118-new-exoplanets)
  - [**13. University of Warwick, δ Scuti 별의 성진동 매개변수를 고정밀 예측하는 앙상블 학습 프레임워크 제안**](#13-university-of-warwick-proposes-an-ensemble-learning-framework-to-highly-accurately-predict-asteroseismic-parameters-for-δ-scuti-stars)
  - [**14. 스페인 연구팀, 천문 영상의 위성 줄무늬를 AI로 자동 탐지하는 StreakMind 시스템 제안**](#14-spanish-research-team-proposes-the-streakmind-system-utilizing-ai-to-automatically-detect-satellite-streaks-in-astronomical-images)
- [**AI+ 자연재해**](#ai-natural-disaster)
  - [**1. 머신러닝으로 향후 40년 지반 침하 위험 예측**](#1-machine-learning-predicts-land-subsidence-risk-over-the-next-40-years)
  - [**2. 의미 분할 모델 SCDUNet++로 산사태 지도 작성**](#2-semantic-segmentation-model-scdunet-used-for-landslide-mapping)
  - [**3. 신경망으로 2D 태양 영상을 3D 재구성 영상으로 변환**](#3-neural-networks-convert-2d-solar-images-into-3d-reconstructed-images)
  - [**4. 가법 신경망으로 자연재해 영향 요인 분석**](#4-additive-neural-networks-analyze-influencing-factors-in-natural-disasters)
  - [**5. 설명 가능한 AI로 호주 Gippsland의 여러 지리적 요인 분석**](#5-using-explainable-ai-to-analyze-various-geographical-factors-in-gippsland-australia)
  - [**6. 머신러닝 기반 홍수 예보 모델**](#6-machine-learning-based-flood-forecasting-model)
  - [**7. ED-DLSTM, 미관측 지역 홍수 예측 달성**](#7-ed-dlstm-achieves-flood-prediction-in-unmonitored-areas)
  - [**8. ChloroFormer 모델, 해양 녹조 조기 경보 제공**](#8-chloroformer-model-provides-early-warning-of-marine-algal-blooms)
  - [**9. 최초의 해양 대형 언어 모델 OceanGPT, ACL 2024 채택! 수중 체화 AI 현실화**](#9-the-first-marine-large-language-model-oceangpt-accepted-by-acl-2024-underwater-embodied-ai-becomes-reality)
  - [**10. AI로 지구온난화 추세 예측**](#10-ai-predicts-global-warming-trends)
  - [**11. 새로운 GeoAI 모델로 Tibetan Plateau 지표 열류 분포 설명**](#11-new-geoai-model-explains-surface-heat-flow-distribution-on-the-tibetan-plateau)
  - [**12. 해양 환경 지능형 예보 대형 모델 "WenHai", 수치 해양 예보 능가**](#12-wenhai-marine-environment-intelligent-forecasting-large-model-outperforms-numerical-marine-forecasting)
  - [**13. University of Minnesota, 고정밀 홍수 예보를 구현하는 지식 유도 머신러닝 모델 FHNN 제안**](#13-university-of-minnesota-proposes-knowledge-guided-machine-learning-model-fhnn-realizing-high-precision-flood-forecasting)
  - [**14. Google, 유효 예보 시간을 크게 늘린 전 지구 홍수 예보 시스템 버전 2 공개**](#14-google-releases-version-2-of-its-global-flood-forecasting-system-significantly-extending-valid-forecast-times)
- [**기타**](#others)
  - [**1. 축구 도우미 TacticAI, 전술 배치의 실용성 90% 달성**](#1-tacticai-football-assistant-hits-90-practical-utility-in-tactical-layouts)
  - [**2. 잡음 제거 확산 모델 SPDiff, 장거리 군중 이동 시뮬레이션 구현**](#2-denoising-diffusion-model-spdiff-enables-long-range-crowd-movement-simulation)
  - [**3. 지능형 과학 시설, 연구 패러다임 전환 주도**](#3-intelligent-scientific-facilities-drive-paradigm-shifts-in-research)
  - [**4. DeepSymNet, 지도학습 기반 기호식 표현**](#4-deepsymnet-represents-symbolic-expressions-based-on-supervised-learning)
  - [**5. 대형 언어 모델 ChipNeMo, 엔지니어의 칩 설계 지원**](#5-large-language-model-chipnemo-assists-engineers-in-chip-design)
  - [**6. AlphaGeometry, 기하 문제 해결**](#6-alphageometry-can-solve-geometry-problems)
  - [**7. 도시 공간 계획에 강화학습 적용**](#7-reinforcement-learning-applied-to-urban-spatial-planning)
  - [**8. ChatArena 프레임워크: 대형 언어 모델과 늑대인간 게임하기**](#8-chatarena-framework-playing-werewolf-with-large-language-models)
  - [**9. 종설: 학자 30명 Nature 공동 게재, 10년 회고로 AI의 과학 패러다임 재편 분석**](#9-review-30-scholars-co-publish-in-nature-10-year-retrospective-deconstructs-how-ai-reshapes-scientific-paradigms)
  - [**10. Ithaca, 비문학자의 텍스트 복원·연대 귀속·지리적 귀속 지원**](#10-ithaca-assists-epigraphers-in-text-restoration-chronological-attribution-and-geographical-attribution)
  - [**11. 메타광학의 정방향·역방향 문제에 AI 적용, 메타표면 시스템 기반 데이터 분석**](#11-ai-in-forward-and-inverse-problems-of-meta-optics-data-analysis-based-on-metasurface-systems)
  - [**12. 새로운 지리공간 AI 방법: 지리 신경망 가중 로지스틱 회귀**](#12-a-new-geospatial-artificial-intelligence-method-geographically-neural-network-weighted-logistic-regression)
  - [**13. 확산 모델로 신경망 매개변수 생성, 시공간 퓨샷 학습을 확산 모델 사전학습 문제로 전환**](#13-using-diffusion-models-to-generate-neural-network-parameters-transforming-spatiotemporal-few-shot-learning-into-a-diffusion-model-pre-training-problem)
  - [**14. Fei-Fei Li 연구팀의 최신 AI4S 통찰: 생물학/재료/의료/진단 분야 혁신 기술 16종 요약**](#14-latest-ai4s-insights-from-fei-fei-lis-team-16-innovative-technologies-summarized-covering-biologymaterialshealthcarediagnostics)
  - [**15. Wuhan 주택 가격 정밀 예측! osp-GNNWR 모델, 복잡한 공간 과정·지리 현상 정확히 기술**](#15-accurate-prediction-of-wuhan-housing-prices-osp-gnnwr-model-accurately-describes-complex-spatial-processes-and-geographical-phenomena)
  - [**16. 제로샷 학습을 도입한 갑골문 해독 최적화 조건부 확산 모델 공개**](#16-introducing-zero-shot-learning-to-release-a-conditional-diffusion-model-optimized-for-oracle-bone-script-decipherment)
  - [**17. Stanford/Apple 및 다른 기관 23곳, DCLM 벤치마크 공개; 파운데이션 모델, Llama3 8B와 동등한 성능**](#17-stanfordapple-and-23-other-institutions-release-the-dclm-benchmark-foundation-model-performs-on-par-with-llama3-8b)
  - [**18. PoCo, 데이터 출처 이질성 문제 해결로 로봇의 유연한 다중과제 수행 구현**](#18-poco-solves-the-data-source-heterogeneity-dilemma-enabling-robots-to-execute-multi-tasks-flexibly)
  - [**19. 영상 140,000개 포함! 갑골문 데이터셋으로 연구팀 ACL 최우수 논문상 수상**](#19-containing-140000-images-oracle-bone-script-dataset-helps-team-win-acl-best-paper-award)
  - [**20. 사전학습 LLM 기반 채널 예측 방식 제안, GPT-2로 무선 통신 물리 계층 강화**](#20-proposing-a-channel-prediction-scheme-based-on-pre-trained-llms-gpt-2-empowers-the-physical-layer-of-wireless-communications)
  - [**21. 다중 스티치 자수용 최초의 생성적 적대 신경망 모델**](#21-the-first-generative-adversarial-network-model-for-multi-stitch-embroidery)
  - [**22. Fast Automated Scanning Toolkit(FAST), 시료 정보 효율적 획득**](#22-fast-automated-scanning-toolkit-fast-efficiently-acquires-sample-information)
  - [**23. Population Dynamics Foundation Model PDFM 오픈소스 공개, 미국 실업률·빈곤율 정밀 예측**](#23-population-dynamics-foundation-model-pdfm-open-sourced-precisely-predicting-us-unemployment-and-poverty-rates)
  - [**24. 딥러닝 모델 CatGWR, 공간 비정상성 추정**](#24-deep-learning-model-catgwr-estimates-spatial-non-stationarity)
  - [**25. 세계 최초 VR 운동 개입 시스템 REVERIE, 청소년 뇌-신체-마음 건강 재편**](#25-worlds-first-vr-exercise-intervention-system-reverie-reshapes-youth-brain-body-mind-health)
  - [**26. 비문 데이터 176,000건 이상으로 Aeneas, 고대 로마 비문의 임의 길이 복원 최초 달성**](#26-based-on-over-176k-inscription-data-aeneas-achieves-arbitrary-length-restoration-of-ancient-roman-inscriptions-for-the-first-time)
  - [**27. 파노라마 동영상 생성 프레임워크 PanoWan, 제로샷 동영상 편집도 처리**](#27-panoramic-video-generation-framework-panowan-also-handles-zero-shot-video-editing)
  - [**28. YOLOv11 기반 도자기 분류 지능형 프레임워크, 시각 모델링·경제 분석 통합으로 유물 분류·가치 추정 달성**](#28-yolov11-based-ceramic-classification-intelligent-framework-integrates-visual-modeling-and-economic-analysis-achieving-artifact-classification-and-value-estimation)
  - [**29. "Microwave Brain" 칩 탄생, 176밀리와트 전력에서 정확도 75%로 초고속 데이터·무선 신호 동시 처리**](#29-microwave-brain-chip-born-simultaneously-processing-ultra-high-speed-data-and-wireless-signals-with-75-accuracy-at-176-milliwatts-power)
  - [**30. 시공간 결측치 보완·예측 모델 STIMP 공개, 연안 Chlorophyll-a 분포 정밀 예측 구현**](#30-spatiotemporal-imputation-and-prediction-model-stimp-released-realizing-precise-predictions-of-coastal-chlorophyll-a-distribution)
  - [**31. MIT 등, 머신러닝 기반 퓨샷 조건의 플라스마 동역학 고정밀 예측 달성**](#31-mit-and-others-achieve-high-precision-prediction-of-plasma-dynamics-under-few-shot-conditions-based-on-machine-learning)
  - [**32. Reac-Discovery, 수학 모델링·머신러닝·자동 실험을 융합하여 자율 실험실 시스템의 범용성 문제 해결**](#32-reac-discovery-fuses-mathematical-modeling-machine-learning-and-automated-experiments-to-solve-the-universality-challenge-of-self-driving-laboratory-systems)
  - [**33. 인간 피질 데이터로 검증된 최초의 뉴런 모델링 프레임워크 NOBLE 소개**](#33-the-first-neuron-modeling-framework-noble-validated-by-human-cortical-data-is-introduced)
  - [**34. 영상 지리위치 프레임워크 LocDiff 출시, 격자·참조 라이브러리 없는 전 지구 정밀 위치 추정 구현**](#34-image-geolocation-framework-locdiff-goes-online-enabling-grid-free-and-reference-library-free-global-precision-positioning)
  - [**35. 머신러닝·py-GC-MS 결합으로 시생대 암석의 생명 증거 정밀 식별**](#35-machine-learning-combined-with-py-gc-ms-precisely-identifies-evidence-of-life-in-archean-rocks)
  - [**36. Tsinghua University 연구팀, 복잡한 네트워크 동역학 식을 자동 도출하는 신경기호 회귀 방법 ND² 제안**](#36-tsinghua-university-team-proposes-neuro-symbolic-regression-method-nd-to-automatically-derive-complex-network-dynamics-formulas)
  - [**37. Zhejiang University 연구팀, 광물화 이방성을 명시적으로 묘사하는 지질 제약 광물 유망성 예측 방법 제안**](#37-zhejiang-university-team-proposes-geologically-constrained-mineral-prospectivity-prediction-method-explicitly-depicting-mineralization-anisotropy)
  - [**38. Tsinghua·UChicago 연구팀 Nature 발표: AI 도구가 과학자의 영향력을 넓히지만 과학의 초점을 좁힘**](#38-tsinghua-and-uchicago-team-publishes-in-nature-ai-tools-expand-scientists-impact-but-contract-sciences-focus)
  - [**39. UC 연구팀, 초소형 부피에서 높은 스펙트럼 충실도를 달성하는 AI 증강 칩 규모 분광계 제안**](#39-uc-team-proposes-ai-augmented-chip-scale-spectrometer-achieving-high-spectral-fidelity-in-an-ultra-small-volume)
  - [**40. US DOE Oak Ridge National Lab, 다중채널 파운데이션 모델의 메모리 사용량을 크게 줄이는 D-CHAG 방법 제안**](#40-us-doe-oak-ridge-national-lab-proposes-d-chag-method-significantly-reducing-memory-footprint-for-multi-channel-foundation-models)
  - [**41. Polymathic AI 연구팀, 교차영역 시뮬레이션 성능 기록을 경신한 연속체 파운데이션 모델 Walrus 제안**](#41-polymathic-ai-team-proposes-continuum-foundation-model-walrus-setting-records-in-cross-domain-simulation-performance)
  - [**42. EPFL, 다물체 동역학을 정확히 모델링하는 물리 정보 기반 GNN 아키텍처 DYNAMI-CAL GraphNet 제안**](#42-epfl-proposes-novel-architecture-dynami-cal-graphnet-a-physics-informed-gnn-accurately-modeling-multi-body-dynamics)
  - [**43. MIT, 완전히 가려진 물체의 고정밀 3D 재구성을 달성하는 새로운 방법 Wave-Former 제안**](#43-mit-proposes-novel-method-wave-former-achieving-high-precision-3d-reconstruction-of-completely-occluded-objects)
  - [**44. MIT, 확산 모델 추론의 무손실 가속을 구현하는 DRiffusion 초안-정제 병렬 프레임워크 제안**](#44-mit-proposes-driffusion-draft-and-refine-parallel-framework-realizing-lossless-acceleration-for-diffusion-model-inference)
  - [**45. Technion - Israel Institute of Technology, 행동 파운데이션 모델의 유연한 특정 과제 적응을 위한 Task Tokens 제안**](#45-technion---israel-institute-of-technology-proposes-task-tokens-allowing-behavior-foundation-models-to-flexibly-adapt-to-specific-tasks)
  - [**46. MIT 등, AI 워크로드의 빠르고 정확한 GPU 전력 추정을 위한 EnergAIzer 프레임워크 제안**](#46-mit-and-others-propose-energaizer-framework-achieving-fast-and-accurate-gpu-power-estimation-for-ai-workloads)
  - [**47. UIUC, 언어 중심 대형 모델의 한계를 돌파하는 이종 에이전트 프레임워크 Eywa 제안**](#47-uiuc-proposes-heterogeneous-agent-framework-eywa-breaking-through-the-limits-of-language-centric-large-models)
  - [**48. Stanford University 등, LSTM 대리 모델로 2차 비선형 광학 시뮬레이션 252배 가속**](#48-stanford-university-and-others-use-lstm-surrogate-models-to-achieve-252x-accelerated-simulation-of-second-order-nonlinear-optics)

## **머리말**

2020년 이후 AlphaFold로 대표되는 과학 프로젝트는 과학을 위한 AI(AI4S)를 AI 응용의 중심 무대로 끌어올렸습니다. 최근에는 바이오의약품부터 천문학과 기상학, 나아가 재료화학 같은 기초 학문까지 모두 AI의 새로운 격전지가 되었습니다.

점점 더 많은 융합형 인재가 자신의 연구 분야에서 데이터 처리와 모델 구축에 머신러닝, 딥러닝 등의 기술을 적용하기 시작하고 학제 간 연구팀의 협력도 강화되면서, 더 많은 과학 연구자가 AI4S의 역량에 주목하고 있습니다. 그러나 아직 대규모 활용이라는 목표에는 도달하지 못했습니다. 관련 연구의 재현성 향상, 기술적 진입 장벽 완화, 데이터 품질 개선 등 시급히 해결해야 할 문제가 많습니다.

현재 AI4S를 적극적으로 탐구하는 대학과 연구기관뿐 아니라 여러 정부와 주요 기술 기업도 AI가 과학 연구를 혁신할 잠재력에 주목하고 관련 정책 지침과 전략을 마련하기 시작했습니다. AI4S는 부인할 수 없는 대세라고 할 수 있습니다.

과학을 위한 AI에 일찍부터 관심을 기울여 온 커뮤니티 중 하나인 "HyperAI"는 산업의 성장과 함께하며 최신 연구 동향과 성과를 널리 공유하고자 합니다. 최첨단 논문과 정책을 해설하여 더 많은 팀이 AI가 과학 연구에 제공하는 도움을 이해하고, 과학을 위한 AI의 발전에 기여하기를 바랍니다.

지금까지 HyperAI는 약 200편의 논문을 해설하고 공유했습니다. 쉽게 찾아볼 수 있도록 글을 학문 분야별로 분류하고, 게재 학술지와 날짜를 표시하며, 핵심어(연구팀, 관련 연구, 데이터셋 등)를 추렸습니다. 제목을 클릭하면 해당 논문의 연구 하이라이트 페이지로 이동할 수 있습니다(논문 전문 다운로드 링크 포함).

이 문서는 오픈소스 프로젝트로 공개됩니다. 해설 글을 지속적으로 업데이트할 예정이며, 여러분의 우수한 연구 성과 제보도 환영합니다. 팀이나 연구그룹에서 보도를 원하시면 WeChat에서 神经星星(WeChat ID: Hyperai01)을 추가해 주세요.

## **AI+ 바이오의약품**

### **1. [AdaDR, 약물 재창출에서 여러 벤치마크 방법을 능가](https://hyper.ai/news/30434)**

- **연구 하이라이트:** [https://hyper.ai/news/30434](https://hyper.ai/news/30434)
- **연구팀:** Central South University의 Min Li 연구팀
- **관련 연구:** Gdataset, Cdataset, Ldataset, LRSSL 데이터셋, GCNs 프레임워크, AdaDR
- **게재 학술지:** Bioinformatics, 2024.01
- **논문 링크:** [적응형 그래프 합성곱 신경망을 이용한 약물 재창출](https://academic.oup.com/bioinformatics/article/40/1/btad748/7467059)

### **2. [IMN4NPD, 분자 네트워크의 대규모 군집 중복 동정을 가속하고 자기 루프와 노드 쌍에 주석 제공](https://hyper.ai/news/30363)**

- **연구 하이라이트:** [https://hyper.ai/news/30363](https://hyper.ai/news/30363)
- **연구팀:** Central South University의 Shao Liu 연구팀
- **관련 연구:** MS/MS 스펙트럼 데이터베이스, 구조 데이터베이스, molDiscovery, NPClassifier, t-SNE
- **게재 학술지:** Analytical Chemistry, 2024.02
- **논문 링크:** [IMN4NPD: 천연물 중복 동정을 위한 통합 분자 네트워킹 워크플로](https://doi.org/10.1021/acs.analchem.3c04746)

### **3. [단일세포 멀티오믹스 데이터의 모자이크 통합을 위한 심층 생성 모델 MIDAS](https://hyper.ai/news/29785)**

- **연구 하이라이트:** [https://hyper.ai/news/29785](https://hyper.ai/news/29785)
- **연구팀:** Academy of Military Medical Sciences의 Xiaomin Ying 연구팀
- **관련 연구:** IPBMC 데이터셋, dogma-full 데이터셋, teadog-full 데이터셋, MMIDAS, 자기지도학습, 정보이론적 접근법, 심층 신경망, SGVB, 단일세포 멀티오믹스 모자이크 데이터
- **게재 학술지:** Nature Biotechnology, 2024.01
- **논문 링크:** [MIDAS를 이용한 단일세포 다중모달 데이터의 모자이크 통합과 지식 전이](https://www.nature.com/articles/s41587-023-02040-y)

### **4. [ResGen: 단백질 포켓 기반 3D 분자 생성 모델](https://hyper.ai/news/29026)**

- **연구 하이라이트:** [https://hyper.ai/news/29026](https://hyper.ai/news/29026)
- **연구팀:** Zhejiang University의 Tingjun Hou 연구팀
- **관련 연구:** CrossDock2020 데이터셋, 전역 자기회귀, 원자 자기회귀, 병렬 다중스케일 모델링, SBMG. 최신 기술보다 8배 빠름.
- **게재 학술지:** Nature Machine Intelligence, 2023.09
- **논문 링크:** [ResGen: 병렬 다중스케일 모델링 기반의 포켓 인식 3D 분자 생성 모델](https://www.nature.com/articles/s42256-023-00712-7)

### **5. [대형 모델 + 머신러닝으로 효소 반응속도 매개변수 고정밀 예측](https://hyper.ai/news/29000)**

- **연구 하이라이트:** [https://hyper.ai/news/29000](https://hyper.ai/news/29000)
- **연구팀:** CAS의 Xiaozhou Luo 연구팀
- **관련 연구:** kcat/Km 데이터셋, Michaelis 상수 데이터셋, pH 및 온도 데이터셋, DLKcat 데이터셋, UniKP 프레임워크, ProtT5-XL-UniRef50, SMILES Transformer 모델, 앙상블 모델, 랜덤 포레스트, 극단적 랜덤 트리, 선형 회귀 모델
- **게재 학술지:** Nature Communications, 2023.12
- **논문 링크:** [UniKP: 효소 반응속도 매개변수 예측을 위한 통합 프레임워크](https://www.nature.com/articles/s41467-023-44113-1)

### **6. [MIT, 딥러닝으로 새로운 항생제 발견](https://hyper.ai/news/28886)**

- **연구 하이라이트:** [https://hyper.ai/news/28886](https://hyper.ai/news/28886)
- **연구팀:** MIT 연구팀
- **관련 연구:** Mcule 데이터베이스, Broad Institute 데이터베이스, 그래프 신경망 Chemprop, 딥러닝. 항생제 화합물 3,646개를 선별함.
- **게재 학술지:** Nature, 2023.12
- **논문 링크:** [설명 가능한 딥러닝을 통한 새로운 구조 계열의 항생제 발견](https://www.nature.com/articles/s41586-023-06887-8)

### **7. [신경망으로 GPCR-G 단백질 결합 선택성 해독](https://hyper.ai/news/28361)**

- **연구 하이라이트:** [https://hyper.ai/news/28361](https://hyper.ai/news/28361)
- **연구팀:** University of Florida 연구팀
- **관련 연구:** 이진 분류 신경망, 머신러닝, 비지도 딥러닝 모델. 여러 포유류의 GPCR 124종에 대한 조립질 모델을 구축함.
- **게재 학술지:** Cell Reports, 2023.09
- **논문 링크:** [GPCR의 G 단백질 결합 선택성을 지배하는 규칙과 메커니즘](https://doi.org/10.1016/j.celrep.2023.113173)

### **8. [Macformer, 비고리형 약물 fedratinib의 거대고리화](https://hyper.ai/news/28189)**

- **연구 하이라이트:** [https://hyper.ai/news/28189](https://hyper.ai/news/28189)
- **연구팀:** East China University of Science and Technology의 Honglin Li 연구팀
- **관련 연구:** ZINC 데이터셋, ChEMBL 데이터베이스, 딥러닝 모델, Transformer 아키텍처, Macformer
- **게재 학술지:** Nature Communication, 2023.07
- **논문 링크:** [거대고리 약물 후보 발견을 촉진하는 딥러닝 기반 선형 분자 거대고리화](https://www.nature.com/articles/s41467-023-40219-8)

### **9. [회귀 네트워크 + CGMD로 수백억 개 펩타이드의 자기조립 특성 예측](https://hyper.ai/news/26408)**

- **연구 하이라이트:** [https://hyper.ai/news/26408](https://hyper.ai/news/26408)
- **연구팀:** Westlake University의 Wenbin Li 연구팀
- **관련 연구:** 라틴 하이퍼큐브 샘플링, CGMD 모델, AP 예측 모델, Transformer, MLP, TRN 모델. 펜타펩타이드와 데카펩타이드의 AP를 얻음.
- **게재 학술지:** Advanced Science, 2023.09
- **논문 링크:** [딥러닝으로 10조 개 이상의 서열에서 자기조립 펩타이드 발견](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202301544)

### **10. [비지도학습으로 7,100만 개 유전자 돌연변이 예측](https://hyper.ai/news/26154)**

- **연구 하이라이트:** [https://hyper.ai/news/26154](https://hyper.ai/news/26154)
- **연구팀:** Google DeepMind 연구팀
- **관련 연구:** ClinVar 데이터셋, AlphaFold, 약한 라벨 학습, 비지도학습, AlphaMissense
- **게재 학술지:** Science, 2023.09
- **논문 링크:** [AlphaMissense를 이용한 프로테옴 전체의 미스센스 변이 영향 정밀 예측](https://www.science.org/doi/10.1126/science.adg7492)

### **11. [그래프 신경망(GNN) 기반 냄새 분석 AI 개발](https://hyper.ai/news/25952)**

- **연구 하이라이트:** [https://hyper.ai/news/25952](https://hyper.ai/news/25952)
- **연구팀:** Google Research에서 분사한 Osmo
- **관련 연구:** GS-LF 데이터베이스, GNN, 베이지안 최적화 알고리즘. 화학 분자의 53%, 냄새 기술자의 55%에 대한 판단에서 인간을 능가함.
- **게재 학술지:** Science, 2023.08
- **논문 링크:** [주요 냄새 지도로 후각 지각의 다양한 과제 통합](https://www.science.org/doi/full/10.1126/science.ade4401)

### **12. [그래프 신경망으로 안전하고 효과적인 노화 방지 성분 선별](https://hyper.ai/news/25822)**

- **연구 하이라이트:** [https://hyper.ai/news/25822](https://hyper.ai/news/25822)
- **연구팀:** MIT 연구팀
- **관련 연구:** 딥러닝, GNN, 합성곱 신경망. Chemprop 모델의 참양성률은 11.6%로, 수동 선별의 1.9%보다 높았음.
- **게재 학술지:** Nature Communications, 2023.05
- **논문 링크:** [심층 신경망을 이용한 소분자 노화세포 제거제 발견](https://www.nature.com/articles/s43587-023-00415-z)

### **13. [머신러닝으로 도파민 방출량과 위치 정량 분석](https://hyper.ai/news/25153)**

- **연구 하이라이트:** [https://hyper.ai/news/25153](https://hyper.ai/news/25153)
- **연구팀:** University of California, Berkeley 연구팀
- **관련 연구:** SVM, RF, 머신러닝. 자극 강도 판별 정확도는 0.832, 도파민 방출 뇌 영역 판별 정확도는 0.708에 도달함.
- **게재 학술지:** ACS Chemical Neuroscience, 2023.06
- **논문 링크:** [머신러닝을 이용한 도파민 신호 전달의 신경 특징 식별](https://pubs.acs.org/doi/full/10.1021/acschemneuro.3c00001)

### **14. [머신러닝으로 노화 방지 약물 3종 발견](https://hyper.ai/news/24578)**

- **연구 하이라이트:** [https://hyper.ai/news/24578](https://hyper.ai/news/24578)
- **연구팀:** Mayo Clinic의 James L. Kirkland 박사 및 연구팀
- **관련 연구:** 머신러닝, 랜덤 포레스트(RF) 모델, 5겹 교차검증. 노화세포 제거 약물 Ginkgetin, Periplocin, Oleandrin을 발견함.
- **게재 학술지:** Nature Communications, 2023.06
- **논문 링크:** [머신러닝을 이용한 노화세포 제거제 발견](https://www.nature.com/articles/s41467-023-39120-1)

### **15. [딥러닝으로 Acinetobacter baumannii를 억제하는 새로운 항생제 선별](https://hyper.ai/news/24499)**

- **연구 하이라이트:** [https://hyper.ai/news/24499](https://hyper.ai/news/24499)
- **연구팀:** McMaster University 및 MIT 연구팀
- **관련 연구:** Broad Institute의 고처리량 스크리닝 하위 라이브러리, 머신러닝, 딥러닝. 약 7,500개 분자를 선별하여 abaucin이라는 항균 화합물을 발견함.
- **게재 학술지:** Nature Chemical Biology, 2023.05
- **논문 링크:** [딥러닝 기반 Acinetobacter baumannii 표적 항생제 발견](https://www.nature.com/articles/s41589-023-01349-8#access-options)

### **16. [바이오잉크 인쇄 적합성 예측에 머신러닝 모델 적용](https://hyper.ai/news/24237)**

- **연구 하이라이트:** [https://hyper.ai/news/24237](https://hyper.ai/news/24237)
- **연구팀:** University of Santiago de Compostela 및 UCL 연구팀
- **관련 연구:** 머신러닝 모델, ANN, SVM, RF, kappa, R², MAE. 정확도가 최대 97.22%에 도달함.
- **게재 학술지:** International Journal of Pharmaceutics: X, 2023.12
- **논문 링크:** [머신러닝을 이용한 의약품 잉크젯 인쇄 결과 예측](https://www.sciencedirect.com/science/article/pii/S2590156723000257)

### **17. [머신러닝으로 다능성 줄기세포 분화](https://hyper.ai/news/23940)**

- **연구 하이라이트:** [https://hyper.ai/news/23940](https://hyper.ai/news/23940)
- **연구팀:** Peking University의 Yang Zhao·Yu Zhang 연구그룹, Beijing Jiaotong University의 Yiyan Liu 연구그룹과 공동 연구
- **관련 연구:** 살아 있는 세포 영상, 머신러닝, 약지도 모델, pix2pix 딥러닝 모델. 분화 효율을 21.6% ± 2.7%에서 88.8% ± 10.5%로 높임.
- **게재 학술지:** Cell Discovery, 2023.06
- **논문 링크:** [PSC 분화 시스템의 변동성을 줄이는 살아 있는 세포 영상 기반 머신러닝 전략](https://www.nature.com/articles/s41421-023-00543-1)

### **18. [머신러닝 모델로 지속형 주사제의 약물 방출 속도 예측](https://hyper.ai/news/33892)**

- **연구 하이라이트:** [https://hyper.ai/news/33892](https://hyper.ai/news/33892)
- **연구팀:** University of Toronto 연구팀
- **관련 연구:** MLR, Lasso, PLS, DT, RF, LGBM, XGB, AutoNGB, SVR, k-NN, NN, 중첩 교차검증, 최원거리 이웃 군집화 알고리즘.
- **게재 학술지:** Nature Communications, 2023.01
- **논문 링크:** [고분자 지속형 주사제 설계를 가속하는 머신러닝 모델](https://www.nature.com/articles/s41467-022-35343-w)

### **19. [머신러닝 알고리즘으로 식물의 항말라리아 특성 효과적으로 예측](https://hyper.ai/news/33883)**

- **연구 하이라이트:** [https://hyper.ai/news/33883](https://hyper.ai/news/33883)
- **연구팀:** Royal Botanic Gardens, Kew 및 University of St Andrews 연구팀
- **관련 연구:** Logit, SVC, XGB, BNN, GridSearchCV 알고리즘, 10겹 층화 교차검증, 마르코프 연쇄 몬테카를로 반복. 정확도 0.67.
- **게재 학술지:** Frontiers in Plant Science, 2023.05
- **논문 링크:** [머신러닝으로 잠재적 항말라리아제 공급원인 식물의 예측 개선](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10248027)

### **20. [머신러닝 앙상블 방법으로 바이러스 단백질 조각의 면역원성 예측](https://hyper.ai/news/30786)**

- **연구 하이라이트:** [https://hyper.ai/news/30786](https://hyper.ai/news/30786)
- **연구팀:** Beihang University의 Jing Li 연구팀
- **관련 연구:** 단백질 데이터베이스 UniProt, Protegen 데이터베이스, 앙상블 머신러닝 접근법 VirusImmu, RF, XGBoost, kNN, 무작위 샘플링 교차검증.
- **게재 학술지:** bioRxiv, 2023.11
- **논문 링크:** [VirusImmu: 바이러스 면역원성 예측을 위한 새로운 앙상블 머신러닝 접근법](https://www.biorxiv.org/content/10.1101/2023.11.23.568426v1)

### **21. [생성형 AI로 새로운 항생제 개발](https://hyper.ai/news/31421)**

- **연구 하이라이트:** [https://hyper.ai/news/31421](https://hyper.ai/news/31421)
- **연구팀:** McMaster University 및 Stanford University 연구팀
- **관련 연구:** Pharmakon-1760 라이브러리, Drug Repurposing Hub 데이터베이스, 합성 소분자 스크리닝 세트, 몬테카를로 트리 탐색, 생성형 AI 모델 SyntheMol. 완전한 분자 24,335개를 생성하고 합성이 쉬운 새로운 구조의 화합물을 설계함.
- **게재 학술지:** Nature Machine Intelligence, 2024.03
- **논문 링크:** [합성이 쉽고 새로운 구조를 갖춘 항생제의 설계 및 검증을 위한 생성형 AI](https://www.nature.com/articles/s42256-024-00809-7 )

### **22. [딥러닝 기반 자동·고속·다차원 단일입자 추적 시스템](https://hyper.ai/news/31341)**

- **연구 하이라이트:** [https://hyper.ai/news/31341](https://hyper.ai/news/31341)
- **연구팀:** Xiamen University의 Ning Fang 교수 연구팀
- **관련 연구:** 다차원 영상 장치, 이중 초점면 영상, 시차 현미경, 다차원 영상 장비, 합성곱 신경망 모델, 잡음 저항성 및 강건성.
- **게재 학술지:** Nature Machine Intelligence, 2024.03
- **논문 링크:** [살아 있는 세포에서 딥러닝 보조 자동 다차원 단일입자 추적](https://doi.org/10.1021/acs.nanolett.3c04870)

### **23. [ProEnsemble 머신러닝 프레임워크: 진화 경로의 프로모터 조합 최적화](https://hyper.ai/news/30594)**

- **연구 하이라이트:** [https://hyper.ai/news/30594](https://hyper.ai/news/30594)
- **연구팀:** CAS의 Xiaozhou Luo 연구팀
- **관련 연구:** 합성생물학, 유전자 상위성, 자동화 플랫폼, 10겹 교차검증, 앙상블 모델, 그래디언트 부스팅 회귀기, 릿지 회귀기, 그래디언트 부스팅, 플라보노이드 고효율 합성을 위한 범용 섀시.
- **게재 학술지:** ADVANCED SCIENCE, 2024.02
- **논문 링크:** [병목 생성-제거 전략과 머신러닝 보조 플럭스 균형 조절을 통한 경로 진화](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202306935)

### **24. [미세환경 인식 그래프 신경망 ProtLGN으로 단백질 지향 진화 유도](https://hyper.ai/news/32246)**

- **연구 하이라이트:** [https://hyper.ai/news/32246](https://hyper.ai/news/32246)
- **연구팀:** Shanghai Jiao Tong University의 Liang Hong 연구팀
- **관련 연구:** 미세환경 인식 그래프 신경망, 경량 그래프 잡음 제거 네트워크, 자기지도 사전학습, 등변 그래프 신경망. PROTLGN이 설계한 단일점 돌연변이 단백질 중 40% 이상이 야생형보다 우수했음.
- **게재 학술지:** JOURNAL OF CHEMICAL INFORMATION AND MODELING, 2024.04
- **논문 링크:** [경량 그래프 잡음 제거 신경망을 이용한 단백질 공학](https://pubs.acs.org/doi/10.1021/acs.jcim.4c00036)

### **25. [딥러닝 모델 AlphaPPIMd: 단백질-단백질 복합체의 구조 앙상블 탐구](https://hyper.ai/news/32435)**

- **연구 하이라이트:** [https://hyper.ai/news/32435](https://hyper.ai/news/32435)
- **연구팀:** Yonsei University의 Jianmin Wang 연구팀
- **관련 연구:** 딥러닝, 생성형 AI, Transformer, 생성 신경망 학습, 분자동역학, barnase-barstar 복합체 궤적 세트, Protein Data Bank, AlphaPPIMd 모델, 자기주의 메커니즘, 특징 최적화 모듈, 주의 점수, 전원자 모델. 평균 학습 정확도 0.995, 평균 검증 정확도 0.999.
- **게재 학술지:** Journal of Chemical Theory and Computation, 2024.05
- **논문 링크:** [Transformer 기반 생성 모델을 이용한 단백질-단백질 복합체의 구조 앙상블 탐구](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00255)

### **26. [새로운 종양 억제 단백질 분해제 dp53m, 암세포 증식 억제](https://hyper.ai/news/32527)**

- **연구 하이라이트:** [https://hyper.ai/news/32527](https://hyper.ai/news/32527)
- **연구팀:** Xi'an Jiaotong-Liverpool University Huihu College of Pharmacy의 Sijin Wu 교수 연구팀 및 Tianjin Medical University General Hospital의 Songbo Xie 교수·Diansheng Zhong 교수 연구팀
- **관련 연구:** MD 시뮬레이션, 반복적 분자 도킹 유도 post-SELEX 방법. dp53m은 p53-R175H 단백질을 특이적으로 인식하여 분해함.
- **게재 학술지:** Science Bulletin, 2024.05
- **논문 링크:** [p53-R175H 핫스폿 돌연변이 유발 암의 정밀 치료를 위한 공학적 DNA 압타머 기반 PROTAC](https://www.sciencedirect.com/science/article/pii/S2095927324003517)

### **27. [CVPR 최우수 학생 논문! 다중모달 모델 BioCLIP, 제로샷 학습 달성](https://hyper.ai/news/32544)**

- **연구 하이라이트:** [https://hyper.ai/news/32544](https://hyper.ai/news/32544)
- **연구팀:** The Ohio State University의 Jiaman Wu 연구팀
- **관련 연구:** 생물 영상 데이터셋 TreeOfLife-10M, 다중모달 모델, 컴퓨터 비전, 비전 인코더, 텍스트 인코더, 자기회귀 언어 모델. 제로샷과 퓨샷 과제에서 우수한 성능을 보임.
- **게재 학술지:** CVPR 2024, 2024.02
- **논문 링크:** [BIoCLIP: 생명 계통수를 위한 비전 파운데이션 모델](https://openaccess.thecvf.com/content/CVPR2024/html/Stevens_BioCLIP_A_Vision_Foundation_Model_for_the_Tree_of_Life_CVPR_2024_paper.html)

### **28. [매개변수 1억 개! 세포 파운데이션 모델 scFoundation, 유전자 20,000개 동시 모델링](https://hyper.ai/news/32623)**

- **연구 하이라이트:** [https://hyper.ai/news/32623](https://hyper.ai/news/32623)
- **연구팀:** Xuegong Zhang 교수(Tsinghua University), Jianzhu Ma 교수(Tsinghua AIR), Le Song 박사(BioMap)
- **관련 연구:** AI 세포 파운데이션 모델, 인간 단일세포 오믹스 데이터 DISCO, EMBL-EBI 데이터베이스, GEO 데이터셋, Single Cell Portal 데이터셋, HCA 데이터셋, hECA 데이터셋, Transformer, 비대칭 인코더-디코더 구조, 벡터 모듈, RDA 모델링.
- **게재 학술지:** Nature Methods, 2024.06
- **논문 링크:** [단일세포 전사체학의 대규모 파운데이션 모델](https://www.nature.com/articles/s41592-024-02305-7)

### **29. [ICML 채택, 단백질 언어 모델 ESM-AA가 기존 SOTA 능가](https://hyper.ai/news/32674)**

- **연구 하이라이트:** [https://hyper.ai/news/32674](https://hyper.ai/news/32674)
- **연구팀:** Hao Zhou 교수(Tsinghua University), Peking University·Nanjing University·Shuimu BioSciences와 공동 연구
- **관련 연구:** 단백질 데이터셋 AlphaFold DB, 단백질 데이터셋 Dp 및 분자 데이터셋 Dm, 압축 해제, 다중스케일 마스킹 언어 모델링.
- **게재 학술지:** ICML 2024, 2024.06
- **논문 링크:** [ESM All-Atom: 통합 분자 모델링을 위한 다중스케일 단백질 언어 모델](https://icml.cc/virtual/2024/poster/35119)

### **30. [SPACE 알고리즘, Cell 자매지 게재! 유사 도구를 선도하는 조직 모듈 발견 능력](https://hyper.ai/news/32738)**

- **연구 하이라이트:** [https://hyper.ai/news/32738](https://hyper.ai/news/32738)
- **연구팀:** Tsinghua University의 Qiangfeng Zhang 연구팀
- **관련 연구:** 공간 전사체학, STARmap 마우스 PLA 데이터셋, MERFISH 마우스 AB 데이터셋, MERFISH 마우스 WB 데이터셋, Xenium 인간 BC 데이터셋, CosMx 인간 NSCLC 데이터셋, Visium 인간 뇌 데이터셋, 인코더, 근접 그래프 디코더, 유전자 발현 디코더, 공간적 근접성, 자기지도학습.
- **게재 학술지:** Cell Systems, 2024.06
- **논문 링크:** [세포 간 상호작용 인식 세포 임베딩을 통한 단일세포 해상도 공간 전사체 데이터의 조직 모듈 발견](https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00124-8)

### **31. [AlphaFold 기반의 새로운 돌파구로 단백질의 동적 다양성 규명](https://hyper.ai/news/33075)**

- **연구 하이라이트:** [https://hyper.ai/news/33075](https://hyper.ai/news/33075)
- **연구팀:** MIT 연구팀
- **관련 연구:** 플로 매칭 기술, 단백질 언어 모델, 신경망, AlphaFold, ESMFold.
- **게재 학술지:** ICML 2024, 2024.06
- **논문 링크:** [단백질 앙상블 생성을 위한 AlphaFold와 플로 매칭의 만남](https://openreview.net/forum?id=rs8Sh2UASt)

### **32. [P450Diffusion: 확산 모델 기반 P450 효소 신규 설계 방법](https://hyper.ai/news/33057)**

- **연구 하이라이트:** [https://hyper.ai/news/33057](https://hyper.ai/news/33057)
- **연구팀:** Tianjin Institute of Industrial Biotechnology, CAS의 Huifeng Jiang 및 Jian Cheng 연구팀
- **관련 연구:** 지향 진화, 확산 모델, 딥러닝, 잡음 제거 확산 확률 모델, 3점 고정, 확산 모델 미세조정, 사전학습. 촉매 능력을 3.5배 향상함.
- **게재 학술지:** Research, 2024.07
- **논문 링크:** [확산 모델에서 촉매 포켓을 제약하는 Cytochrome P450 효소 설계](https://spj.science.org/doi/10.34133/research.0413)

### **33. [등변 그래프 신경망으로 표적 단백질 결합 부위 예측, 성능 20% 향상](https://hyper.ai/news/32957)**

- **연구 하이라이트:** [https://hyper.ai/news/32957](https://hyper.ai/news/32957)
- **연구팀:** Gaoling School of Artificial Intelligence, Renmin University of China 연구팀
- **관련 연구:** E(3) 등변 그래프 신경망, 합성곱 신경망, EquiPocket 프레임워크, scPDB 데이터셋, PDBbind 데이터셋, COACH 420 데이터셋, HOLO4K 데이터셋, 국소 기하 모델링 모듈, 전역 구조 모델링 모듈, 표면 정보 전달 모듈.
- **게재 학술지:** ICML 2024, 2024.07
- **논문 링크:** [EquiPocket: 리간드 결합 부위 예측을 위한 E(3) 등변 기하 그래프 신경망](https://openreview.net/forum?id=1vGN3CSxVs)

### **34. [실험 데이터 20개로 AI 단백질의 이정표 달성! FSFP, 단백질 사전학습 모델 효과적으로 최적화](https://hyper.ai/news/32822)**

- **연구 하이라이트:** [https://hyper.ai/news/32822](https://hyper.ai/news/32822)
- **연구팀:** Shanghai Jiao Tong University의 Liang Hong 교수 연구그룹, Shanghai Artificial Intelligence Laboratory의 Pan Tan 연구팀과 공동 연구
- **관련 연구:** 단백질 돌연변이 데이터셋 ProteinGym, 사전학습된 단백질 언어 모델, 메타 전이학습, 순위 학습(LTR), 매개변수 효율적 미세조정, LTR 기술, FSFP 학습 전략, 모델 독립적 메타학습 방법.
- **게재 학술지:** Nature Communications, 2024.07
- **논문 링크:** [퓨샷 학습으로 최소한의 습식 실험 데이터에서 단백질 언어 모델 효율 향상](https://doi.org/10.1038/s41467-024-49798-6)

### **35. [전이 가능한 딥러닝 모델로 여러 RNA 변형 식별, 계산 비용 대폭 절감](https://hyper.ai/news/32745)**

- **연구 하이라이트:** [https://hyper.ai/news/32745](https://hyper.ai/news/32745)
- **연구팀:** Shanghai Jiao Tong University의 Xiang Yu 부교수 연구그룹, Shanghai Chenshan Botanical Garden의 Jun Yang/Hongxia Wang 연구팀과 공동 연구
- **관련 연구:** 전이 가능한 딥러닝 모델 TandemMod, 시험관 내 전사 데이터셋 ELIGOS, Curlcake 데이터셋, 시험관 내 후성전사체 데이터셋 IVET, 1D CNN, Bi-LSTM 모듈, 주의 메커니즘, 완전연결 분류기.
- **게재 학술지:** Nature Communications, 2024.05
- **논문 링크:** [전이학습으로 나노포어 직접 RNA 시퀀싱을 이용한 여러 RNA 변형 식별](https://www.nature.com/articles/s41467-024-48437-4)

### **36. [InstructProtein: 지식 지시를 이용한 단백질 언어와 인간 언어 정렬](https://hyper.ai/news/33697)**

- **연구 하이라이트:** [https://hyper.ai/news/33697](https://hyper.ai/news/33697)
- **연구팀:** Zhejiang University의 Huajun Chen 및 Qiang Zhang 연구팀
- **관련 연구:** LLM, 단백질 지식 지시 데이터셋, Gene Ontology(GO) 데이터셋, InstructProtein, 지식 그래프, 단백질 위치 예측, 단백질 기능 예측, 단백질 금속 이온 결합 능력 예측.
- **게재 학술지:** ACL 2024, 2023.10
- **논문 링크:** [InstructProtein: 지식 지시를 통한 인간 언어와 단백질 언어 정렬](https://arxiv.org/abs/2310.03269)

### **37. [단백질-텍스트 생성 프레임워크 ProtT3, 단백질 데이터와 텍스트 정보의 교차모달 해석 구현](https://hyper.ai/news/33546)**

- **연구 하이라이트:** [https://hyper.ai/news/33546](https://hyper.ai/news/33546)
- **연구팀:** USTC의 Xiang Wang, NUS의 Zhiyuan Liu 연구팀 및 Hokkaido University 연구자들과 공동 연구
- **관련 연구:** 교차모달 투영기, 단백질 언어 모델, Swiss-Prot 및 ProteinKG25 데이터셋, PDB-QA 데이터셋.
- **게재 학술지:** ACL 2024, 2023.05
- **논문 링크:** [ProtT3: 텍스트 기반 단백질 이해를 위한 단백질-텍스트 생성](https://arxiv.org/abs/2405.12564)

### **38. [CPDiffusion 모델, 초저비용으로 기능성 단백질 완전 자동 설계](https://hyper.ai/news/34692)**

- **연구 하이라이트:** [https://hyper.ai/news/34692](https://hyper.ai/news/34692)
- **연구팀:** Shanghai Jiao Tong University의 Liang Hong 연구팀
- **관련 연구:** 단백질 공학, 확산 확률 모델 프레임워크 CPDiffusion, 아미노산, 그래프 신경망, 약물 설계 보조, 단백질 언어 모델, CATH 4.2 데이터셋.
- **게재 학술지:** Cell Discovery, 2024.09
- **논문 링크:** [활성이 향상된 인공 프로그래머블 엔도뉴클레아제 서열을 생성하는 조건부 단백질 확산 모델](https://www.nature.com/articles/s41421-024-00728-2)

### **39. [단백질 언어 모델과 밀집 검색 기술 기반의 새로운 단백질 상동체 탐지 방법](https://hyper.ai/news/34225)**

- **연구 하이라이트:** [https://hyper.ai/news/34225](https://hyper.ai/news/34225)
- **연구팀:** Yu Li(CUHK), Siqi Sun(Fudan University & Shanghai AI Lab), Mark Gerstein(Yale University)
- **관련 연구:** 단백질 공학, 단백질 언어 모델, 밀집 검색 기술, 밀집 상동체 검색기, 하이브리드 모델 DHR-meta, UR90 데이터셋, JackHMMER 알고리즘, BFD/MGnify 데이터셋, DHR 방법. 단백질 상동체 탐지 민감도 56% 향상.
- **게재 학술지:** Nature Biotechnology, 2024.08
- **논문 링크:** [심층 밀집 검색을 통한 빠르고 민감한 단백질 상동체 탐지](https://doi.org/10.1038/s41587-024-02353-6)

### **40. [AlphaProteo, 표적 단백질 바인더를 효율적으로 설계하여 친화도 300배 향상](https://hyper.ai/news/34214)**

- **연구 하이라이트:** [https://hyper.ai/news/34214](https://hyper.ai/news/34214)
- **연구팀:** DeepMind, Francis Crick Institute
- **관련 연구:** 단백질 공학, 단백질 언어 모델, AI 약물 설계, 표적 단백질, AI 도구, 머신러닝 모델 AlphaProteo, VEGF-A 단백질 바인더 설계, 생성기, 필터. 후보 바인더의 결합은 기존 방법보다 5-100배 높았음.
- **게재 학술지:** DeepMind, 2024.09
- **논문 링크:** [AlphaProteo, 생물학 및 보건 연구를 위한 새로운 단백질 생성](https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)

### **41. [새로운 잡음 제거 단백질 언어 모델 DePLM, 돌연변이 영향 예측에서 SOTA 능가](https://hyper.ai/news/34954)**

- **연구 하이라이트:** [https://hyper.ai/news/34954](https://hyper.ai/news/34954)
- **연구팀:** Zhejiang University의 Huajun Chen 교수 및 Qiang Zhang 박사
- **관련 연구:** 잡음 제거 단백질 언어 모델(DePLM), ProteinGym 심층 돌연변이 스캔(DMS) 앙상블, DMS 데이터셋, 무작위 교차검증, 일반화 실험, 순서 정보를 활용한 확산 모델 확장으로 진화 정보의 잡음 제거, 정렬 알고리즘 생성 궤적, PromptProtein 모델.
- **게재 학술지:** NeurIPS 2024, 2024.11
- **논문 링크:** [DePLM: 특성 최적화를 위한 잡음 제거 단백질 언어 모델](https://neurips.cc/virtual/2024/poster/95517)

### **42. [기하 심층 생성 모델 DynamicBind, 동적 단백질 도킹 예측 구현](https://hyper.ai/news/34894)**

- **연구 하이라이트:** [https://hyper.ai/news/34894](https://hyper.ai/news/34894)
- **연구팀:** Shanghai Jiao Tong University, Galixir, Sun Yat-sen University, Rice University의 Shuangjia Zheng 연구팀
- **관련 연구:** PDBbind 데이터셋, MDT 테스트 세트, 심층 확산 모델, 등변 기하 신경망 기술, PDB 형식 구조, 소분자 리간드 형식, contact-LDDT(cLDDT) 점수 모듈, AlphaFold 구조, 친화도 예측 모듈, 생성형 AI.
- **게재 학술지:** Nature Communications, 2024.02
- **논문 링크:** [DynamicBind: 심층 등변 생성 모델을 이용한 리간드 특이적 단백질-리간드 복합체 구조 예측](https://www.nature.com/articles/s41467-024-45461-2)

### **43. [약물 발견 대형 언어 모델 Y-Mol, LLaMA2를 전면적으로 능가](https://hyper.ai/news/35572)**

- **연구 하이라이트:** [https://hyper.ai/news/35572](https://hyper.ai/news/35572)
- **연구팀:** Hunan University, Central South University, Hunan Normal University, Xiangtan University
- **관련 연구:** 다중스케일 생의학 지식 유도 LLM Y-Mol, PubMed 텍스트 말뭉치, DrugBank 벤치마크 데이터셋, DrugCentral 벤치마크 데이터셋, LLaMA2-7b LLM.
- **게재 학술지:** arXiv, 2024.10
- **논문 링크:** [Y-Mol: 약물 개발을 위한 다중스케일 생의학 지식 유도 대형 언어 모델](https://doi.org/10.48550/arXiv.2410.11550)

### **44. [범용 분자 역접힘 모델 UniIF, AlphaFold 3를 한층 보완](https://hyper.ai/news/35781)**

- **연구 하이라이트:** [https://hyper.ai/news/35781](https://hyper.ai/news/35781)
- **연구팀:** Westlake University Future Industry Research Center 연구팀
- **관련 연구:** CATH4.3 데이터셋, ESM2 모델, CASP15 데이터셋, 새로운 결정 구조, NovelPro 데이터셋, RDesign 데이터셋, CHILI-3K 데이터셋, 아미노산 및 뉴클레오타이드 기반 사전 정의 프레임워크, GNN, 기하 특징 추출기, 블록 그래프 주의. 단백질·RNA·재료 설계에서 다른 SOTA 방법을 능가함.
- **게재 학술지:** NeurIPS 2024, 2024.05
- **논문 링크:** [UniIF: 통합 분자 역접힘](https://arxiv.org/abs/2405.18968)

### **45. [사전학습된 단백질 언어 모델 ProSST, 단백질 구조 정보의 더 효과적인 통합](https://hyper.ai/news/35874)**

- **연구 하이라이트:** [https://hyper.ai/news/35874](https://hyper.ai/news/35874)
- **연구팀:** Shanghai Jiao Tong University의 Liang Hong 교수 연구그룹 및 Bingxin Zhou, Shanghai AI Lab의 Pan Tan과 공동 연구
- **관련 연구:** 사전학습된 단백질 언어 모델 ProSST, Transformer, 분리된 주의 메커니즘, 단백질 구조 양자화기, AlphaFoldDB 데이터셋, CATH43-S40 데이터셋, CATH43-S40 국소 구조 데이터셋, ProteinGYM 벤치마크. 열안정성, 금속 이온 결합, 단백질 위치, GO 주석 예측에서 기존 모델을 능가함.
- **게재 학술지:** NeurIPS 2024, 2024.05
- **논문 링크:** [ProSST: 양자화된 구조와 분리된 주의를 이용한 단백질 언어 모델링](https://neurips.cc/virtual/2024/poster/96656)

### **46. [거대고리 펩타이드 바인더 프레임워크 RFpeptides, 약물 표적화가 어려운 단백질에 새로운 가능성 제시](https://hyper.ai/news/36150)**

- **연구 하이라이트:** [https://hyper.ai/news/36150](https://hyper.ai/news/36150)
- **연구팀:** Institute for Protein Design, UW의 David Baker 연구팀
- **관련 연구:** 확산 모델 기반 기술 RFpeptides, 고리형 상대 위치 인코딩으로 수정한 RoseTTAFold와 RFdiffusion을 활용한 정밀 거대고리 골격 생성, 약물 개발, AlphaFold, ProteinMPNN, Rosetta Relax. 표적 지향적이고 효율적인 거대고리 설계 구현.
- **게재 학술지:** bioRxiv, 2024.11
- **논문 링크:** [딥러닝을 이용한 고친화도 단백질 결합 거대고리의 정밀 신규 설계](https://doi.org/10.1101/2024.11.18.622547)

### **47. [유전체 파운데이션 모델 Evo, 분자부터 유전체 규모까지 예측·생성 구현](https://hyper.ai/news/36266)**

- **연구 하이라이트:** [https://hyper.ai/news/36266](https://hyper.ai/news/36266)
- **연구팀:** Stanford University 및 Arc Institute 연구팀
- **관련 연구:** 유전체 파운데이션 모델 Evo, StripedHyena 아키텍처. Evo는 전체 유전체 서열을 예측·생성·설계할 수 있음.
- **게재 학술지:** Science, 2024.11
- **논문 링크:** [Evo를 이용한 분자부터 유전체 규모까지의 서열 모델링과 설계](https://www.science.org/doi/10.1126/science.ado9336)

### **48. [DigFrag, AI로 분자 조각을 정밀 분할하고 약물/농약 분자 44개 생성](https://hyper.ai/news/36346)**

- **연구 하이라이트:** [https://hyper.ai/news/36346](https://hyper.ai/news/36346)
- **연구팀:** Central China Normal University의 Guangfu Yang 및 Assoc. Prof. Fan Wang 교수 연구팀
- **관련 연구:** MolFrag 플랫폼, PADFrag 데이터베이스, 그래프 주의 메커니즘, DigFrag 디지털 조각화 방법, DeepFMPO 프레임워크, 그래프 신경망 아키텍처, Actor-Critic 프레임워크.
- **게재 학술지:** Communications Chemistry, 2024.11
- **논문 링크:** [AI 기반 약물 설계에 사용되는 디지털 조각화 방법 DigFrag](https://doi.org/10.1038/s42004-024-01346-5)

### **49. [단백질 서열 대형 언어 모델 사전학습 방법 PRIME](https://hyper.ai/news/36363)**

- **연구 하이라이트:** [https://hyper.ai/news/36363](https://hyper.ai/news/36363)
- **연구팀:** Shanghai Jiao Tong University, Shanghai AI Lab, ShanghaiTech University, Hangzhou Medical College의 Liang Hong 교수 연구팀
- **관련 연구:** 단백질 서열 LLM 사전학습 방법 PRIME, ProteomeAtlas 데이터베이스, UniProt 데이터베이스, ProteinGym 데이터셋, MLM 사전학습 방법, 현재 SOTA 방법을 능가함.
- **게재 학술지:** Science Advances, 2024.11
- **논문 링크:** [안정성과 활성이 향상된 단백질을 설계하는 범용 온도 유도 언어 모델](https://www.science.org/doi/10.1126/sciadv.adr2641)

### **50. [자기지도 딥러닝 방법, 극저온 전자현미경의 3D 재구성 혁신](https://hyper.ai/news/36645)**

- **연구 하이라이트:** [https://hyper.ai/news/36645](https://hyper.ai/news/36645)
- **연구팀:** UCLA 연구팀
- **관련 연구:** 자기지도 딥러닝 방법 단일입자 IsoNet(spIsoNet), 단일입자 cryo-EM, 생체고분자 재구성, β-galactosidase 데이터셋, HA 삼량체 기울임 데이터셋, 비대칭 리보솜 데이터셋, HIV VLP 단층촬영 데이터셋, U-net 아키텍처, 이방성 보정 기반 정렬 오차 수정 모듈.
- **게재 학술지:** Nature Methods, 2024.11
- **논문 링크:** [자기지도 딥러닝으로 cryo-EM의 선호 배향 문제 극복](https://doi.org/10.1038/s41592-024-02505-1)

### **51. [다중모달 단백질 생성 방법 PLAID, 서열과 전원자 단백질 구조 동시 생성](https://hyper.ai/news/36750)**

- **연구 하이라이트:** [https://hyper.ai/news/36750](https://hyper.ai/news/36750)
- **연구팀:** UC Berkeley, Microsoft Research, Genentech
- **관련 연구:** 다중모달 단백질 생성 방법 PLAID(Protein Latent Induced Diffusion), Pfam 데이터베이스, ESMFold 잠재 공간, 잠재 확산 학습, DiT 블록 아키텍처, Diffusion Transformer(DiT), ESMFold 모델.
- **게재 학술지:** ICLR 2025, 2024.12
- **논문 링크:** [서열만으로 구성된 학습 데이터에서 전원자 단백질 구조 생성](https://www.biorxiv.org/content/10.1101/2024.12.02.626353v1)

### **52. [잠재 강화학습 기반 표적 분자 최적화 방법 MOLRL](https://hyper.ai/news/37285)**

- **연구 하이라이트:** [https://hyper.ai/news/37285](https://hyper.ai/news/37285)
- **연구팀:** Cellarity·NVIDIA 연구자들
- **관련 연구:** 잠재 강화학습 기반의 새로운 표적 분자 최적화 방법 MOLRL, 약물 발견 과제, 근접 정책 최적화(PPO), 변분 오토인코더(VAE), 오토인코더(MolMIM), 성공률 최대 100%.
- **게재 학술지:** ChemRxiv, 2025.01
- **논문 링크:** [잠재 강화학습을 이용한 표적 분자 생성](https://go.hyper.ai/H4JhR)

### **53. [바이러스 변이 동인 예측 프레임워크 E2VD, COVID-19/HIV/Influenza 바이러스의 진화 방향 예측](https://hyper.ai/news/37405)**

- **연구 하이라이트:** [https://hyper.ai/news/37405](https://hyper.ai/news/37405)
- **연구팀:** Peking University의 Yonghong Tian 교수·Jie Chen 부교수, Guangzhou Laboratory의 Peng Zhou 연구원
- **관련 연구:** 바이러스 변이 동인 예측 프레임워크 E2VD, UniRef90 데이터셋, 오픈소스 심층 돌연변이 스캔 데이터셋, 단백질 서열 인코딩, 국소-전역 의존성 결합, 다중과제 초점 학습. 예측 정확도 67% 향상.
- **게재 학술지:** Nature Machine Intelligence, 2025.01
- **논문 링크:** [바이러스 변이 동인 예측을 위한 통합 진화 유도 딥러닝 프레임워크](https://www.nature.com/articles/s42256-024-00966-9)

### **54. [의료 언어 모델 MedFound, 전문의의 추론 능력에 근접](https://hyper.ai/news/37646)**

- **연구 하이라이트:** [https://hyper.ai/news/37646](https://hyper.ai/news/37646)
- **연구팀:** Guangyu Wang 교수(BUPT), Chunli Song 교수(Peking University Third Hospital), Jian Yang 교수(China Three Gorges University)가 이끄는 학제 간 연구팀
- **관련 연구:** LLM BLOOM-176B, 의료 말뭉치 데이터셋 MedCorpus, 의료 LLM MedFound-DX, 사고 사슬 방법, 선호 정렬 프레임워크, MedDX-FT 데이터셋, MedDX-Bench 데이터셋.
- **게재 학술지:** Nature Medicine, 2025.01
- **논문 링크:** [질병 진단 지원을 위한 범용 의료 언어 모델](https://www.nature.com/articles/s41591-024-03416-6)

### **55. [4D 확산 모델 AlphaFolding, 동적 단백질 구조 예측의 공백 해소](https://hyper.ai/news/37697)**

- **연구 하이라이트:** [https://hyper.ai/news/37697](https://hyper.ai/news/37697)
- **연구팀:** Fudan University/Shanghai AI Lab의 Siyu Zhu 교수·Yuan Qi 교수 연구팀, Nanjing University의 Yao Yao 교수와 공동 연구
- **관련 연구:** 4D 확산 모델 AlphaFolding, MD 시뮬레이션 데이터, 동적 단백질 구조, 구조생물학, Distributional Graphformer(DiG) 딥러닝 프레임워크, ATLAS 데이터셋.
- **게재 학술지:** arXiv, 2024.12
- **논문 링크:** [참조 및 움직임 유도를 이용한 동적 단백질 구조 예측용 4D 확산](https://arxiv.org/abs/2408.12419)

### **56. [짧은 단백질 설계 파이프라인 PepPrCLIP, 새로운 암 치료법 개발에 대한 기대](https://hyper.ai/news/37912)**

- **연구 하이라이트:** [https://hyper.ai/news/37912](https://hyper.ai/news/37912)
- **연구팀:** Duke University Biomedical Engineering 연구팀
- **관련 연구:** ESM-2 단백질 언어 모델, ESM-2-650M 모델, PepPrCLIP 파이프라인, 가우스 분포, 아미노산 서열.
- **게재 학술지:** Science Advances, 2025.01
- **논문 링크:** [대조 언어 모델링으로 다양한 구조의 표적에 결합하는 펩타이드 바인더 신규 설계](https://www.science.org/doi/10.1126/sciadv.adr8638)

### **57. [Boltzmann 정렬 기술, 단백질 결합 자유에너지 예측 성능 대폭 향상](https://hyper.ai/news/38092)**

- **연구 하이라이트:** [https://hyper.ai/news/38092](https://hyper.ai/news/38092)
- **연구팀:** Zhejiang University, University of Adelaide, Northeastern University (US)의 Chunhua Shen 교수 연구팀
- **관련 연구:** 결합 자유에너지, Boltzmann 정렬 기술, ∆∆G 예측, 단백질 복합체 구조 예측, 리만 확산 모델, 딥러닝, BA-Cycle 방법, BA-DDG 방법, SKEMPI v2 데이터셋.
- **게재 학술지:** ICLR 2025, 2024.10
- **논문 링크:** [단백질-단백질 상호작용에 미치는 돌연변이 영향 예측기로서의 Boltzmann 정렬 역접힘 모델](https://arxiv.org/abs/2410.09543)

### **58. [새로운 대규모 플로 기반 단백질 골격 생성기 Proteina, 단백질 골격 신규 설계에서 SOTA 달성](https://hyper.ai/news/38120)**

- **연구 하이라이트:** [https://hyper.ai/news/38120](https://hyper.ai/news/38120)
- **연구팀:** NVIDIA, Mila, University of Montreal, MIT
- **관련 연구:** 단백질 설계, 확장 가능한 비등변 Transformer 아키텍처, Foldseek AFDB 군집 DFS 데이터셋, D21M 데이터셋, MFS 모델, 단계별 학습 전략.
- **게재 학술지:** ICLR 2025 Oral, 2025.01
- **논문 링크:** [Proteina: 플로 기반 단백질 구조 생성 모델 확장](https://openreview.net/forum?id=TVQLu34bdw&nesting=2&sort=date-desc)

### **59. [UniGEM 모델, 확산 모델 기반으로 두 과제의 시너지 향상 최초 달성](https://hyper.ai/news/38186)**

- **연구 하이라이트:** [https://hyper.ai/news/38186](https://hyper.ai/news/38186)
- **연구팀:** Tsinghua University, Chinese Academy of Sciences
- **관련 연구:** 약물 발견, 분자 특성 예측, 분자 생성, 확산 모델, QM9 데이터셋, GEOM-Drugs 3D 분자 구조 데이터셋, 다중과제 학습 프레임워크, E(3) 등변 확산 모델(EDM), 다중분기 네트워크 아키텍처.
- **게재 학술지:** ICLR 2025, 2025.04
- **논문 링크:** [UniGEM: 분자 생성과 특성 예측을 위한 통합 접근법](https://openreview.net/pdf?id=Lb91pXwZMR)

### **60. [RFdiffusion의 추가 진화, 원자 수준 정확도의 항체 신규 설계 구현](https://hyper.ai/news/38253)**

- **연구 하이라이트:** [https://hyper.ai/news/38253](https://hyper.ai/news/38253)
- **연구팀:** University of Washington 및 공동 연구자들의 David Baker 교수 연구팀
- **관련 연구:** 치료용 항체, 계산 단백질 설계용 RFdiffusion 네트워크, 항체 가변 중쇄(VHH), 단일사슬 가변 절편(scFv), 딥러닝, VHH 프레임워크, CDR 루프 서열 설계.
- **게재 학술지:** bioRxiv, 2025.02
- **논문 링크:** [RFdiffusion을 이용한 원자 수준 정확도의 항체 신규 설계](https://doi.org/10.1101/2024.03.14.585103)

### **61. [최초의 단백질-RNA 언어 모델 융합 방식, 결합 친화도 예측의 새로운 SOTA 달성](https://hyper.ai/news/38290)**

- **연구 하이라이트:** [https://hyper.ai/news/38290](https://hyper.ai/news/38290)
- **연구팀:** Tsinghua University, UCL, Monash University, BUPT
- **관련 연구:** 단백질-RNA, CoPRA 모델, 단백질 언어 모델(PLM), RNA 언어 모델(RLM), CLIP 실험 기술, Co-Former 모델, PDBbind 데이터셋, PRBABv2 데이터셋, ProNAB 데이터셋, PRA201 데이터셋, 다중모달 학습.
- **게재 학술지:** AAAI 2025, 2025.01
- **논문 링크:** [CoPRA: 단백질-RNA 결합 친화도 예측을 위한 교차영역 사전학습 서열 모델과 복합체 구조 연결](https://arxiv.org/abs/2409.03773)

### **62. [가상 조직 모델 Celcomen, 공간 전사체 분석에서 인과추론 식별 가능성 최초 달성](https://hyper.ai/news/38308)**

- **연구 하이라이트:** [https://hyper.ai/news/38308](https://hyper.ai/news/38308)
- **연구팀:** University of Cambridge
- **관련 연구:** Perturbmap 데이터셋, 태아 비장 데이터셋, 교모세포종 데이터셋, Celcomen 모델, 추론 모듈(CCE), 생성 모듈(SCE), 그래프 신경망.
- **게재 학술지:** ICLR 2025, 2025.01
- **논문 링크:** [공간 인과 분리를 통한 공간 전사체의 단일세포 및 조직 교란 효과 추정](https://openreview.net/forum?id=Tqdsruwyac)

### **63. [AlphaFold-Metainference 방법, 무질서 단백질의 구조 앙상블 정밀 예측](https://hyper.ai/news/38448)**

- **연구 하이라이트:** [https://hyper.ai/news/38448](https://hyper.ai/news/38448)
- **연구팀:** University of Cambridge
- **관련 연구:** AlphaFold 예측 정렬 오차 지도, MD 시뮬레이션의 거리 변동 행렬 간 상관관계, 무질서 단백질 구조 예측, Protein Data Bank(PDB), 소각 X선 산란(SAXS) 데이터, NMR 측정, Aβ 및 α-synuclein 구조 앙상블, CALVADOS-2, 베이지안 메타추론 방법, Langevin 적분기.
- **게재 학술지:** Nature Communications, 2025.02
- **논문 링크:** [AlphaFold를 이용한 무질서 단백질의 구조 앙상블 예측](https://www.nature.com/articles/s41467-025-56572-9)

### **64. [고정밀 RNA 구조 예측 프레임워크 DRfold2, 여러 벤치마크에서 SOTA 능가](https://hyper.ai/news/38506)**

- **연구 하이라이트:** [https://hyper.ai/news/38506](https://hyper.ai/news/38506)
- **연구팀:** NUS의 Yang Zhang 교수 연구팀
- **관련 연구:** RNA 구조 예측 프레임워크 DRfold2, 비지도 접촉 예측 정확도, 복합 RNA 언어 모델, DRfold2 RNA 테스트 데이터셋, CASP15 데이터셋, Transformer 모듈, 잡음 제거 구조 모듈.
- **게재 학술지:** bioRxiv, 2025.03
- **논문 링크:** [복합 언어 모델과 잡음 제거 종단간 학습을 이용한 RNA 구조 제일원리 예측](https://www.biorxiv.org/content/10.1101/2025.03.05.641632v1)

### **65. [새로운 단백질 설계 알고리즘 DRAKES, 생물학적 서열 설계 병목 돌파](https://hyper.ai/news/38675)**

- **연구 하이라이트:** [https://hyper.ai/news/38675](https://hyper.ai/news/38675)
- **연구팀:** MIT·Harvard·Stanford·UC Berkeley·Genentech 연구자들
- **관련 연구:** 강화학습 프레임워크, PDB 학습 세트, Megascale 데이터셋, DRAKES 알고리즘, Gumbel-Softmax.
- **게재 학술지:** ICLR 2025, 2024.08
- **논문 링크:** [DNA·단백질 설계에 응용되는 보상 최적화 기반 이산 확산 모델 미세조정](https://doi.org/10.48550/arXiv.2410.13643)

### **66. [머신러닝 보조 UV 흡광 분광법으로 미생물 오염 검출](https://hyper.ai/news/38869)**

- **연구 하이라이트:** [https://hyper.ai/news/38869](https://hyper.ai/news/38869)
- **연구팀:** SMART (Singapore-MIT Alliance for Research and Technology), A*SRL Singapore, NUS, MIT
- **관련 연구:** 미생물 오염 검출, 이상 탐지 전략, 머신러닝, 서포트 벡터 머신(SVM), 방사 기저 함수, PBS 멸균 시료.
- **게재 학술지:** Nature, 2025.03
- **논문 링크:** [세포 치료 제품의 미생물 오염 검출을 위한 머신러닝 보조 UV 흡광 분광법](https://hyper.ai/en/sota/papers/s41598-024-83114-y)

### **67. [단백질 서열 생성 모델을 활용한 중첩 유전자 설계](https://hyper.ai/news/39241)**

- **연구 하이라이트:** [https://hyper.ai/news/39241](https://hyper.ai/news/39241)
- **연구팀:** University of Washington의 David Baker 연구팀
- **관련 연구:** 중첩 유전자(OLG), 합성 OLG 설계 연구, 아미노산 치환, 생물정보학 스크리닝, 통계 모델링, 서열 위치의 체계적 스캔.
- **게재 학술지:** bioRxiv, 2025.05
- **논문 링크:** [단백질 서열 심층 생성 모델을 이용한 중첩 유전자 설계](https://doi.org/10.1101/2025.05.06.652464)

### **68. [예측 프레임워크 PUPS, 단일세포 수준의 단백질 세포 내 위치 파악](https://hyper.ai/news/39549)**

- **연구 하이라이트:** [https://hyper.ai/news/39549](https://hyper.ai/news/39549)
- **연구팀:** MIT, Harvard University
- **관련 연구:** 단백질 세포 내 위치, Human Protein Atlas, 미관측 단백질 세포 내 위치, 미관측 단백질 세포 내 위치 예측(PUPS) 프레임워크, 홀드아웃 데이터셋, ESM-2 단백질 언어 모델, CNN, 분리형 합성곱.
- **게재 학술지:** Nature Methods, 2025.05
- **논문 링크:** [단일세포의 단백질 세포 내 위치 예측](https://go.hyper.ai/LeaQF)

### **69. [UniMoMo: 분자 종을 아우르는 최초의 통합 생성 프레임워크로 여러 유형의 약물 분자 설계](https://hyper.ai/news/39852)**

- **연구 하이라이트:** [https://hyper.ai/news/39852](https://hyper.ai/news/39852)
- **연구팀:** Yang Liu 연구그룹(Tsinghua), Wenbing Huang 연구그룹(Renmin University), ByteDance AI 약물 발견 연구팀
- **관련 연구:** UniMoMo 프레임워크, 전원자 반복 변분 오토인코더(IterVAE), 전원자 기하 잠재 공간 확산 모델, 통합 모델링.
- **게재 학술지:** ICML 2025, 2025.03
- **논문 링크:** [UniMoMo: 바인더 신규 설계를 위한 3D 분자 통합 생성 모델링](https://hyper.ai/papers/2503.19300)

### **70. [단백질 언어 모델 Prot42, 표적 단백질 서열만으로 고친화도 바인더 생성](https://hyper.ai/news/40385)**

- **연구 하이라이트:** [https://hyper.ai/news/40385](https://hyper.ai/news/40385)
- **연구팀:** Inception AI(Abu Dhabi, UAE) 및 Cerebras Systems(Silicon Valley, USA)
- **관련 연구:** PDIdb 2010 데이터셋, UniRef50 데이터베이스, STRING 데이터베이스, 단백질 기능 예측, 단백질 세포 내 위치 예측, 단백질 구조 예측, PPI 예측, 단백질 바인더 생성, DNA 서열 특이적 바인더 생성.
- **게재 학술지:** arXiv, 2025.05
- **논문 링크:** [Prot42: 표적 인식 단백질 바인더 생성을 위한 새로운 단백질 언어 모델 계열](https://go.hyper.ai/cFupD)

### **71. [통합 생체분자 동역학 시뮬레이터 UniSim, 분자 유형과 화학 환경을 아우르는 통합 시간 조립화 동역학 시뮬레이션 최초 구현](https://hyper.ai/news/40483)**

- **연구 하이라이트:** [https://hyper.ai/news/40483](https://hyper.ai/news/40483)
- **연구팀:** Yang Liu 연구그룹(Tsinghua) 및 Wenbing Huang 연구그룹(Renmin University)
- **관련 연구:** 원자 임베딩 확장, 다중헤드 하이브리드 사전학습, TorchMD-NET GNN 모델, 확률적 보간 프레임워크, 힘 유도 커널.
- **게재 학술지:** ICML 2025, 2025.05
- **논문 링크:** [UniSim: 생체분자의 시간 조립화 동역학을 위한 통합 시뮬레이터](https://go.hyper.ai/5NWuO)

### **72. [계산생물학 알고리즘 SimplifiedBondfinder, 새로운 질소-산소-황 결합 69개 발견](https://hyper.ai/news/40515)**

- **연구 하이라이트:** [https://hyper.ai/news/40515](https://hyper.ai/news/40515)
- **연구팀:** University of Göttingen의 Sophia Bazzi 및 Sharareh Sayyad 연구팀
- **관련 연구:** SimplifiedBondfinder 알고리즘, 머신러닝, 양자역학 계산, PDB 데이터셋, PDB-REDO 데이터셋, BDB 데이터셋, UMAP 차원 축소, NOS 결합.
- **게재 학술지:** Communications Chemistry, 2025.05
- **논문 링크:** [단백질 구조의 체계적 재평가로 아르기닌-시스테인 및 글리신-시스테인 NOS 결합 규명](https://www.nature.com/articles/s42004-025-01535-w)

### **73. [새로운 단백질 서열 설계 방법 FAMPNN, 단백질 골격과 곁사슬 정보 동시 처리](https://hyper.ai/news/41545)**

- **연구 하이라이트:** [https://hyper.ai/news/41545](https://hyper.ai/news/41545)
- **연구팀:** Stanford University, Arc Institute (Palo Alto)
- **관련 연구:** 단백질 곁사슬 구조, FAMPNN 방법, S40 데이터셋, PDB 데이터셋, CASP13/14/15 데이터셋, SKEMPlv2 데이터셋, S669 데이터셋, Megascale 데이터셋, FireProtDB 데이터셋, CR9114/CR6261 데이터셋, 반복 샘플링 전략, atom37 형식, GNN, 토큰별 유클리드 확산 방법.
- **게재 학술지:** ICML 2025, 2025.06
- **논문 링크:** [FAMPNN을 이용한 전원자 단백질 서열 설계의 곁사슬 조건화 및 모델링](https://go.hyper.ai/JUJDq)

### **74. [원자 수준 단백질 설계 방법 La-Proteina, 잔기 최대 800개의 단백질 고정밀 생성](https://hyper.ai/news/41744)**

- **연구 하이라이트:** [https://hyper.ai/news/41744](https://hyper.ai/news/41744)
- **연구팀:** NVIDIA, Mila
- **관련 연구:** 원자 수준 단백질 설계, 부분 잠재 플로 매칭 프레임워크 La-Proteina, AFDB 데이터셋, 2단계 학습 전략.
- **게재 학술지:** arXiv, 2025.06
- **논문 링크:** [La-Proteina: 부분 잠재 플로 매칭을 통한 원자 수준 단백질 생성](https://go.hyper.ai/3csT5)

### **75. [다중사슬 단백질 복합체 전용 APM 모델, 전원자 설계와 기능 최적화 구현](https://hyper.ai/news/42059)**

- **연구 하이라이트:** [https://hyper.ai/news/42059](https://hyper.ai/news/42059)
- **연구팀:** Hunan University, UCAS, ByteDance Seed 연구팀
- **관련 연구:** 단백질, 다중사슬 본래 구조 모델링, 전원자 표현 최적화, 서열-구조 의존성 강화, PDB 데이터베이스, Swiss-Prot 데이터베이스, AFDB 데이터베이스, 다중사슬 단백질 데이터셋.
- **게재 학술지:** ICML 2025, 2025.07
- **논문 링크:** [단백질 복합체 설계를 위한 전원자 생성 모델](https://go.hyper.ai/TVp4i)

### **76. [새로운 본질적 무질서 영역 결합 단백질 설계 방법 Logos, 약물 표적화가 어려운 표적에 특화](https://hyper.ai/news/42611)**

- **연구 하이라이트:** [https://hyper.ai/news/42611](https://hyper.ai/news/42611)
- **연구팀:** University of Washington의 David Baker 연구팀
- **관련 연구:** RFdiffusion 모델, 유도 적합, 스캐폴드 생성, 포켓 특화, 포켓 조립.
- **게재 학술지:** Science, 2025.07
- **논문 링크:** [본질적 무질서 영역 결합 단백질 설계](https://www.science.org/doi/10.1126/science.adr8063)

### **77. [새로운 단백질 동적 융합 표현 프레임워크 FusionProt 공개, 반복적 정보 교환 구현](https://hyper.ai/news/43724)**

- **연구 하이라이트:** [https://hyper.ai/news/43724](https://hyper.ai/news/43724)
- **연구팀:** Technion, Meta AI
- **관련 연구:** 단백질 언어 모델, 표현 학습 프레임워크 FusionProt, AlphaFold DB, AlphaFold2, DeepFRI 데이터셋, 학습 가능한 융합 토큰, 다중시점 대조학습.
- **게재 학술지:** bioRxiv, 2025.08
- **논문 링크:** [FusionProt: 통합 단백질 표현 학습을 위한 서열 및 구조 정보 융합](https://go.hyper.ai/OXLYl)

### **78. [전사체 유도 확산 모델 MorphDiff 공개, 표현형 기반 약물 발견 가속](https://hyper.ai/news/43849)**

- **연구 하이라이트:** [https://hyper.ai/news/43849](https://hyper.ai/news/43849)
- **연구팀:** CUHK, Mohamed bin Zayed University of Artificial Intelligence
- **관련 연구:** 세포 형태, 잠재 확산 모델(LDM), 대규모 세포 형태 영상 데이터셋, JUMP 데이터셋, CDRP 데이터셋, LINCS 데이터셋, 형태 VAE, 잠재 확산 모델.
- **게재 학술지:** Nature Communications, 2025.09
- **논문 링크:** [전사체 유도 확산 모델을 이용한 교란 시 세포 형태 변화 예측](https://www.nature.com/articles/s41467-025-63478-z)

### **79. [AlphaPPIMI 프레임워크, 일반화를 크게 강화하여 PPI 인터페이스 조절자 예측에서 기존 방법 능가](https://hyper.ai/news/43916)**

- **연구 하이라이트:** [https://hyper.ai/news/43916](https://hyper.ai/news/43916)
- **연구팀:** China University of Petroleum, Yonsei University
- **관련 연구:** 단백질-단백질 상호작용, DLiP 데이터셋, ECFP4 지문, ChemDiv 데이터베이스, AlphaPPIMI 프레임워크, Uni-Mol2 모델, 단백질 특징 추출, Transformer 아키텍처, ESM2-150M 모델, ProtTrans 모델.
- **게재 학술지:** Journal of Cheminformatics, 2025.08
- **논문 링크:** [Alphappimi: PPI-조절자 상호작용 예측을 위한 포괄적 딥러닝 프레임워크](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-025-01077-2)

### **80. [새로운 융합 신경망 프레임워크, 단백질 서열의 다중 금속 결합 부위 효율적으로 예측](https://hyper.ai/news/44702)**

- **연구 하이라이트:** [https://hyper.ai/news/44702](https://hyper.ai/news/44702)
- **연구팀:** Hong Kong University of Science and Technology
- **관련 연구:** 융합 신경망 프레임워크, 단백질 서열의 다중 금속 결합 부위 예측, CNN, 융합 네트워크, MbPA 데이터베이스, 딥러닝 프레임워크.
- **게재 학술지:** bioRxiv, 2025.09
- **논문 링크:** [단백질 서열의 다중 금속 결합 부위를 효율적으로 예측하는 모듈식 융합 신경망 접근법](https://go.hyper.ai/Y7DNU)

### **81. [합성 가능성이 높은 분자 투영 프레임워크 ReaSyn 공개, 초고재구성률과 경로 다양성 달성](https://hyper.ai/news/44764)**

- **연구 하이라이트:** [https://hyper.ai/news/44764](https://hyper.ai/news/44764)
- **연구팀:** NVIDIA 연구팀
- **관련 연구:** 약물 발견, ReaSyn 프레임워크, 지도학습, 강화학습 미세조정, Transformer 모델, 반응 사슬(CoR) 표현.
- **게재 학술지:** arXiv, 2025.09
- **논문 링크:** [반응 사슬을 통한 분자 합성 가능성 재고찰](https://arxiv.org/abs/2509.16084)

### **82. [제약 강화학습 프레임워크 Ctrl-DNA 공개, 특정 세포 유전자 발현의 "표적 제어" 구현](https://hyper.ai/news/45227)**

- **연구 하이라이트:** [https://hyper.ai/news/45227](https://hyper.ai/news/45227)
- **연구팀:** University of Toronto 연구팀, Changping Laboratory
- **관련 연구:** 제약 RL 프레임워크 Ctrl-DNA, 딥러닝, 세포 특이적 유전자 발현, DNA 언어 모델, 인간 프로모터 데이터셋, 인핸서 데이터셋, 제어 가능한 세포 유형 특이적 CRE 생성, 제약 마르코프 의사결정 과정, Enformer 아키텍처.
- **게재 학술지:** NeurIPS 2025, 2025.05
- **논문 링크:** [Ctrl-DNA: 세포 특이적 시스 조절 요소 설계를 위한 제약 강화학습](https://arxiv.org/abs/2505.20578)

### **83. [PLACER 프레임워크, 단백질 구조 이질성의 원자 수준 모델링 문제 해결](https://hyper.ai/news/46009)**

- **연구 하이라이트:** [https://hyper.ai/news/46009](https://hyper.ai/news/46009)
- **연구팀:** David Baker 교수 연구팀
- **관련 연구:** 그래프 신경망 PLACER, Cambridge Structural Database, PDB, 잡음 제거 신경망, 3트랙 아키텍처, 소분자 구조 생성.
- **게재 학술지:** PNAS, 2025.11
- **논문 링크:** [PLACER를 이용한 단백질-소분자 구조 앙상블 모델링](https://www.biorxiv.org/content/10.1101/2024.09.25.614868v2)

### **84. [Squidiff, 다양한 시나리오의 전사체 시뮬레이션으로 정밀의학·공간의학 발전 촉진](https://hyper.ai/news/46212)**

- **연구 하이라이트:** [https://hyper.ai/news/46212](https://hyper.ai/news/46212)
- **연구팀:** Columbia University, Stanford University
- **관련 연구:** Squidiff 프레임워크, Splatter 도구, 인간 iPSC-내배엽 분화 데이터셋, K562 CRISPR 스크리닝 실험, 조건부 DDIM, 의미 인코딩 기술, Encode-Diffuse-Decode 아키텍처.
- **게재 학술지:** Nature Methods, 2025.11
- **논문 링크:** [Squidiff: 확산 모델을 이용한 세포 발달 및 교란 반응 예측](https://www.nature.com/articles/s41592-025-02877-y)

### **85. [생성 모델 PepTron과 새로운 평가 벤치마크 공개, 무질서 단백질 앙상블 예측 역량 재편](https://hyper.ai/news/47063)**

- **연구 하이라이트:** [https://hyper.ai/news/47063](https://hyper.ai/news/47063)
- **연구팀:** Peptone, University of Copenhagen, NVIDIA, Oxford University, MIT, Duke University
- **관련 연구:** PeptoneBench 평가 프레임워크, 생성 모델 PepTron, PDB, IDRome 데이터베이스, NVIDIA BioNeMo, ESMFlow, 혼합 학습 전략(실험 + 합성 데이터).
- **게재 학술지:** bioRxiv, 2025.10
- **논문 링크:** [질서-무질서 연속체 전반의 단백질 앙상블 예측 발전](https://www.biorxiv.org/content/10.1101/2025.10.18.680935v1)

### **86. [MIT·Harvard, 고특이성 프로테아제 기질 설계 문제를 극복하는 종단간 AI 워크플로 CleaveNet 제안](https://hyper.ai/news/48608)**

- **연구 하이라이트:** [https://hyper.ai/news/48608](https://hyper.ai/news/48608)
- **연구팀:** MIT·Harvard University 공동 연구팀
- **관련 연구:** 프로테아제 기질 설계, CleaveNet 워크플로, 합성 펩타이드, 예측 모델 및 생성 모델.
- **게재 학술지:** Nature Communications
- **논문 링크:** [CleaveNet: 프로테아제 기질을 위한 AI 기반 종단간 설계 워크플로](https://www.nature.com/articles/s41467-025-67226-1)

### **87. [Goethe University Frankfurt 연구팀, 인간 E3 리가아제군의 복잡성을 해독하는 다중스케일 분류 프레임워크 제안](https://hyper.ai/news/48813)**

- **연구 하이라이트:** [https://hyper.ai/news/48813](https://hyper.ai/news/48813)
- **연구팀:** Goethe University Frankfurt 연구팀
- **관련 연구:** 유비퀴틴-프로테아솜 시스템(UPS), E3 유비퀴틴 리가아제, 인간 E3 리가아제군, 거리 척도 학습.
- **게재 학술지:** Nature Communications
- **논문 링크:** [다중스케일 분류로 인간 E3 리가아제군의 복잡성 해독](https://www.nature.com/articles/s41467-025-67450-9)

### **88. [Basecamp·NVIDIA, AI 프로그래머블 치료제 설계를 구현하는 EDEN 파운데이션 모델 공동 공개](https://hyper.ai/news/48964)**

- **연구 하이라이트:** [https://hyper.ai/news/48964](https://hyper.ai/news/48964)
- **연구팀:** Basecamp Research, NVIDIA 및 주요 학술기관
- **관련 연구:** 프로그래머블 생물학, EDEN 메타유전체 파운데이션 모델, 유전자 치료, 재조합효소, 항균 펩타이드 설계.
- **게재 학술지:** bioRxiv
- **논문 링크:** [EDEN 파운데이션 모델 계열을 이용한 AI 프로그래머블 치료제 설계](https://doi.org/10.64898/2026.01.12.699009)

### **89. [Microsoft 등, 일반 병리 슬라이드에서 가상 mIF 아틀라스를 생성하는 다중모달 AI 프레임워크 GigaTIME 제안](https://hyper.ai/news/49359)**

- **연구 하이라이트:** [https://hyper.ai/news/49359](https://hyper.ai/news/49359)
- **연구팀:** Microsoft Research, University of Washington, Providence Genomics
- **관련 연구:** 종양 미세환경, H&E 염색, 다중 면역형광(mIF), GigaTIME 프레임워크, 공간 단백체학.
- **게재 학술지:** Cell
- **논문 링크:** [다중모달 AI로 종양 미세환경 모델링용 가상 모집단 생성](https://www.cell.com/cell/fulltext/S0092-8674(25)01312-1)

### **90. [MIT, 코돈 최적화로 재조합 단백질 수율을 높이는 딥러닝 언어 모델 Pichia-CLM 제안](https://hyper.ai/news/49613)**

- **연구 하이라이트:** [https://hyper.ai/news/49613](https://hyper.ai/news/49613)
- **연구팀:** MIT 연구팀
- **관련 연구:** Komagataella phaffii, 코돈 최적화, 코돈 사용 편향(CUB), Pichia-CLM 언어 모델, 재조합 단백질 발현.
- **게재 학술지:** PNAS
- **논문 링크:** [Pichia-CLM: Komagataella phaffii를 위한 언어 모델 기반 코돈 최적화 파이프라인](https://www.pnas.org/doi/10.1073/pnas.2522052123)

### **91. [MIT·ETH, 단일세포 다중모달 데이터의 효율적 통합·분리를 위한 딥러닝 프레임워크 APOLLO 공동 제안](https://hyper.ai/news/49702)**

- **연구 하이라이트:** [https://hyper.ai/news/49702](https://hyper.ai/news/49702)
- **연구팀:** MIT·ETH Zurich 공동 연구팀
- **관련 연구:** 단일세포 생물학, 다중모달 데이터 통합, APOLLO 프레임워크, scRNA-seq, scATAC-seq, 공간 형태.
- **게재 학술지:** Nature Computational Science
- **논문 링크:** [부분 공유 다중모달 임베딩으로 세포 상태의 총체적 표현 학습](https://www.nature.com/articles/s43588-025-00948-w)

### **92. [CUHK 등, 변형 펩타이드의 통합 교차스케일 표현 학습을 위한 Bi-TEAM 프레임워크 공동 제안](https://hyper.ai/news/49833)**

- **연구 하이라이트:** [https://hyper.ai/news/49833](https://hyper.ai/news/49833)
- **연구팀:** CUHK, Macao Polytechnic University, Zhejiang University, Second Xiangya Hospital of CSU, UESTC
- **관련 연구:** 펩타이드 구조 및 기능 모델링, 비표준 아미노산 변형, 교차스케일 표현 학습, Bi-TEAM 프레임워크.
- **게재 학술지:** arXiv
- **논문 링크:** [Bi-TEAM: 화학적으로 변형된 생체분자를 위한 통합 교차스케일 표현 학습 프레임워크](https://arxiv.org/abs/2603.01873)

### **93. [Carnegie Mellon University 등, 전원자 단백질 모델의 양자 정밀화를 위한 AQuaRef 제안](https://hyper.ai/news/49895)**

- **연구 하이라이트:** [https://hyper.ai/news/49895](https://hyper.ai/news/49895)
- **연구팀:** CMU, University of Wrocław, University of Florida
- **관련 연구:** 단백질 구조 정밀화, AQuaRef, 머신러닝 원자간 퍼텐셜(AIMNet2), 양자 정밀화, 구조생물학.
- **게재 학술지:** Nature Communications
- **논문 링크:** [AQuaRef: 머신러닝으로 가속하는 단백질 구조 양자 정밀화](https://www.nature.com/articles/s41467-025-64313-1)

### **94. [NVIDIA 등, 단백질 바인더 생성·최적화를 통합하는 Complexa 프레임워크 공동 제안](https://hyper.ai/news/49977)**

- **연구 하이라이트:** [https://hyper.ai/news/49977](https://hyper.ai/news/49977)
- **연구팀:** NVIDIA, Oxford University, Mila
- **관련 연구:** 단백질 바인더 설계, Proteína-Complexa(Complexa), Teddymer, 생성 방법, 테스트 시점 계산.
- **게재 학술지:** ICLR 2026
- **논문 링크:** [생성 사전학습과 테스트 시점 계산으로 원자 수준 단백질 바인더 설계 확장](https://openreview.net/forum?id=qmCpJtFZra)

### **95. [MIT·CMU, 진동 동역학을 도입하여 단백질 신규 설계를 강화하는 VibeGen 공동 제안](https://hyper.ai/news/50061)**

- **연구 하이라이트:** [https://hyper.ai/news/50061](https://hyper.ai/news/50061)
- **연구팀:** MIT·CMU 공동 연구팀
- **관련 연구:** 단백질 동역학, VibeGen 에이전트, 언어 확산 모델, 단백질 신규 설계, 진동 진폭 예측.
- **게재 학술지:** Matter
- **논문 링크:** [VibeGen: 언어 확산 모델을 이용한 맞춤형 동역학을 위한 에이전트 기반 종단간 단백질 신규 설계](https://www.cell.com/matter/abstract/S2590-2385(26)00069-X)

### **96. [Institut Pasteur, 딥러닝으로 항파지 단백질 239만 개를 예측하여 세균 면역 지도 작성](https://hyper.ai/news/50491)**

- **연구 하이라이트:** [https://hyper.ai/news/50491](https://hyper.ai/news/50491)
- **연구팀:** Institut Pasteur 연구팀
- **관련 연구:** 세균 항바이러스 면역, 항파지 방어 시스템, 단백질 언어 모델, 유전체 언어 모델, 범유전체학.
- **게재 학술지:** Science
- **논문 링크:** [단백질·유전체 언어 모델로 미탐구 세균 면역 다양성 규명](https://www.science.org/doi/10.1126/science.adv8275)

### **97. [KAIST 연구팀, AI로 소분자 결합 단백질을 신규 설계하고 바이오센서에 성공적으로 적용](https://hyper.ai/news/50599)**

- **연구 하이라이트:** [https://hyper.ai/news/50599](https://hyper.ai/news/50599)
- **연구팀:** KAIST 생명과학과 연구팀
- **관련 연구:** 단백질 신규 설계, 소분자 결합 단백질, NTF2 유사 접힘, 바이오센서, 화학적 유도 이량체화(CID).
- **게재 학술지:** Nature Communications
- **논문 링크:** [설계된 단백질 계열을 이용한 소분자 결합 및 감지](https://www.nature.com/articles/s41467-026-70953-8)

### **98. [University of Toronto 등, 유전체 서열의 효율적 계층 모델링을 위한 dnaHNet 제안](https://hyper.ai/news/50709)**

- **연구 하이라이트:** [https://hyper.ai/news/50709](https://hyper.ai/news/50709)
- **연구팀:** University of Toronto, Vector Institute, Arc Institute
- **관련 연구:** 유전체 서열 학습, 파운데이션 모델, dnaHNet, 동적 토큰화, 변이 영향 예측.
- **게재 학술지:** arXiv
- **논문 링크:** [dnaHNet: 유전체 서열 학습을 위한 확장 가능한 계층적 파운데이션 모델](https://arxiv.org/abs/2602.10603)

### **99. [Queen Mary University of London 등, 최대 규모 단백유전체 연구로 질병의 분자 메커니즘 규명](https://hyper.ai/news/51343)**

- **연구 하이라이트:** [https://hyper.ai/news/51343](https://hyper.ai/news/51343)
- **연구팀:** Queen Mary University of London, Cambridge University
- **관련 연구:** 단백유전체학, 단백질 양적 형질 유전자좌(pQTL), 순환 단백질 양, 시스·트랜스 유전적 조절.
- **게재 학술지:** Cell
- **논문 링크:** [다중 코호트 단백유전체 분석으로 단백체와 질병체 전반의 유전적 영향 규명](https://www.cell.com/cell/fulltext/S0092-8674(26)00385-5)

### **100. [Goethe University Frankfurt 등, genESOM 모델 제안: 생성형 AI로 소표본 동물 실험의 한계 돌파](https://hyper.ai/news/51430)**

- **연구 하이라이트:** [https://hyper.ai/news/51430](https://hyper.ai/news/51430)
- **연구팀:** Goethe University Frankfurt 및 Fraunhofer ITMP
- **관련 연구:** 소표본 동물 실험, 생성형 AI, genESOM 모델, 창발적 자기조직화 지도.
- **게재 학술지:** Pharmacological Research
- **논문 링크:** [내장된 오차 확대 제어를 갖춘 자기조직화 신경망 기반 생성형 AI로 표본 수가 적은 전임상 연구의 효과적인 지식 추출 개선](https://www.sciencedirect.com/science/article/pii/S1043661826000745)

## **AI+ 의료**

### **1. [딥러닝 시스템 DeepDR Plus, 안저 영상으로 당뇨망막병증 예측](https://hyper.ai/news/29769)**

- **연구 하이라이트:** [https://hyper.ai/news/29769](https://hyper.ai/news/29769)
- **연구팀:** Shanghai Jiao Tong University의 Weiping Jia 교수·Huating Li·Bin Sheng 연구팀; Tsinghua University의 Tianyin Huang 연구팀
- **관련 연구:** SDPP 데이터, DRPS 데이터, ResNet-50, 안저 모델, 자기지도학습, IBS 평가 모델, 메타 모델. 평균 임상 선별검사 간격을 12개월에서 31.97개월로 연장함.
- **게재 학술지:** Nature Medicine, 2024.01
- **논문 링크:** [당뇨망막병증 진행까지의 시간을 예측하는 딥러닝 시스템](https://www.nature.com/articles/s41591-023-02702-z)

### **2. [로지스틱 회귀 모델 분석: 높은 녹색 경관 지수는 MetS 위험 감소](https://hyper.ai/news/29559)**

- **연구 하이라이트:** [https://hyper.ai/news/29559](https://hyper.ai/news/29559)
- **연구팀:** Zhejiang University의 Xifeng Wu 연구팀
- **관련 연구:** 합성곱 신경망 모델, 로지스틱 회귀 모델, Isochrone API
- **게재 학술지:** Environment International, 2024.01
- **논문 링크:** [중국 성인의 직장 내 실외 가시 녹지와 대사증후군 간 유익한 연관성](https://doi.org/10.1016/j.envint.2023.108327)

### **3. [딥러닝 시스템, 초급 안과의사의 진단 일치도 12% 향상 지원](https://hyper.ai/news/29549)**

- **연구 하이라이트:** [https://hyper.ai/news/29549](https://hyper.ai/news/29549)
- **연구팀:** Peking Union Medical College Hospital, West China Hospital of Sichuan University, Second Hospital of Hebei Medical University, Tianjin Medical University Eye Hospital, Wenzhou Medical University, Beijing Airdoc Technology, Renmin University of China
- **관련 연구:** 품질 평가 모델, 진단 모델, CNN. 안저 질환 13종에 대한 새로운 자동 탐지 방법 제공.
- **게재 학술지:** npj digital medicine, 2024.01
- **논문 링크:** [초급 안과의사의 주요 안저 질환 13종 진단을 지원하는 딥러닝 시스템의 성능: 전향적 다기관 임상시험](https://www.nature.com/articles/s41746-023-00991-9)

### **4. [GSP-GCNs, 파킨슨병 진단 정확도 최대 90.2% 달성](https://hyper.ai/news/29189)**

- **연구 하이라이트:** [https://hyper.ai/news/29189](https://hyper.ai/news/29189)
- **연구팀:** CAS Shenzhen Institutes of Advanced Technology 및 First Affiliated Hospital of Sun Yat-sen University
- **관련 연구:** 그래프 신호 처리(GSP) 모듈, 그래프 네트워크 모듈, 분류기, 해석 가능한 모델.
- **게재 학술지:** npj Digital Medicine, 2024.01
- **논문 링크:** [음성 관련 EEG를 이용한 파킨슨병 진단용 그래프 학습 기반 해석 가능한 모델](https://www.nature.com/articles/s41746-023-00983-9)

### **5. [유방암 예후 점수 체계 MIRS](https://hyper.ai/news/29304)**

- **연구 하이라이트:** [https://hyper.ai/news/29304](https://hyper.ai/news/29304)
- **연구팀:** University of Kentucky, Macau University of Science and Technology, University of Macau, Guangzhou Medical University
- **관련 연구:** TCGA 데이터베이스, 신경망 모델, 예후 점수 체계, ESTIMATE 알고리즘, 머신러닝, XGboost, Boruta RF, ElasticNet.
- **게재 학술지:** iScience, 2023.11
- **논문 링크:** [MIRS: 유방암 예후와 치료 예측을 위한 AI 점수 체계](https://doi.org/10.1016/j.isci.2023.108322)

### **6. [망막 영상 파운데이션 모델 RETFound, 여러 전신 질환 예측](https://hyper.ai/news/28113)**

- **연구 하이라이트:** [https://hyper.ai/news/28113](https://hyper.ai/news/28113)
- **연구팀:** UCL·Moorfields Eye Hospital의 Yukun Zhou(박사과정생) 등
- **관련 연구:** 자기지도학습, MEH-MIDAS 데이터셋, EyePACS 데이터셋, SL-ImageNet, SSL-ImageNet, SSL-Retinal.
- **게재 학술지:** Nature, 2023.08
- **논문 링크:** [망막 영상으로 일반화 가능한 질병 탐지를 수행하는 파운데이션 모델](https://www.nature.com/articles/s41586-023-06555-x)

### **7. [SVM으로 촉각 센서 최적화, 점자 인식률 96.12% 달성](https://hyper.ai/news/26561)**

- **연구 하이라이트:** [https://hyper.ai/news/26561](https://hyper.ai/news/26561)
- **연구팀:** Zhejiang University의 Geng Yang·Kaichen Xu 연구그룹
- **관련 연구:** SVM 알고리즘, 머신러닝, CNN, 적응형 모멘트 추정 알고리즘. 동적 접촉 패턴 6종을 정확히 식별함.
- **게재 학술지:** Advanced Science, 2023.09
- **논문 링크:** [동적 접촉 해독을 위한 머신러닝 기반 촉각 센서 설계](https://onlinelibrary.wiley.com/doi/10.1002/advs.202303949)

### **8. [CAS Beijing Institute of Genomics, 개방형 생의학 영상 아카이브 구축](https://hyper.ai/news/26334)**

- **연구 하이라이트:** [https://hyper.ai/news/26334](https://hyper.ai/news/26334)
- **연구팀:** CAS Beijing Institute of Genomics
- **관련 연구:** TCIA 데이터베이스, 비식별화, 품질 관리, 컬렉션, 개인, 연구, 시리즈, 영상, 삼중항 네트워크, 주의 모듈.
- **게재 학술지:** bioRxiv, 2023.08
- **논문 링크:** [물리적 일관성을 이용한 홀로그램 재구성 자기지도학습](https://www.nature.com/articles/s42256-023-00704-7)

### **9. [AI Lunit, 의사 수준의 정확도로 유방촬영 영상 판독](https://hyper.ai/news/26135)**

- **연구 하이라이트:** [https://hyper.ai/news/26135](https://hyper.ai/news/26135)
- **연구팀:** University of Nottingham 연구팀
- **관련 연구:** PERFORMS 데이터셋, 주석 + 점수 평가. AI의 민감도는 의사와 일치했고 특이도에도 유의한 차이가 없었음.
- **게재 학술지:** Radiology, 2023.09
- **논문 링크:** [유방촬영 선별검사 개인 성능 평가 체계를 이용한 유방암 탐지 AI 알고리즘의 성능](https://pubs.rsna.org/doi/10.1148/radiol.223299)

### **10. [특징 선택 전략으로 유방암 바이오마커 탐지](https://hyper.ai/news/24589)**

- **연구 하이라이트:** [https://hyper.ai/news/24589](https://hyper.ai/news/24589)
- **연구팀:** University of Naples Federico II, 이탈리아
- **관련 연구:** 머신러닝, 특징 선택 전략, TCGA/GEO 데이터셋, 이득 비율, RF, SVM-RFE.
- **게재 학술지:** CIBB 2023, 2023.07
- **논문 링크:** [강건한 특징 선택 전략으로 유방암의 잠재적 진단 바이오마커인 microRNA 패널 탐지](https://www.researchgate.net/publication/372083934)

### **11. [그래디언트 부스팅 머신 모델, BPSD 하위 증후군 정밀 예측](https://hyper.ai/news/23926)**

- **연구 하이라이트:** [https://hyper.ai/news/23926](https://hyper.ai/news/23926)
- **연구팀:** Yonsei University 연구팀(대한민국)
- **관련 연구:** 머신러닝 모델, 다중 대치 방법, 로지스틱 회귀 모델, 랜덤 포레스트 모델, 그래디언트 부스팅 머신 모델, SVM 모델.
- **게재 학술지:** Scientific Reports, 2023.05
- **논문 링크:** [치매의 행동·심리 증상 발생을 위한 머신러닝 기반 예측 모델: 개발 및 검증](https://www.nature.com/articles/s41598-023-35194-5)

### **12. [머신러닝 모델로 환자의 1년 사망률 예측](https://hyper.ai/news/33905)**

- **연구 하이라이트:** [https://hyper.ai/news/33905](https://hyper.ai/news/33905)
- **연구팀:** Macheng People's Hospital(Hubei, 중국)
- **관련 연구:** 로지스틱 회귀 모델, 머신러닝 모델, GBM, RF, DT. 1년 사망률 관련 상위 3개 특징은 NT-proBNP, 알부민, 스타틴이었음.
- **게재 학술지:** Cardiovascular Diabetology, 2023.06
- **논문 링크:** [내당능 장애 또는 당뇨병을 동반한 중국 고령 관상동맥질환 환자의 1년 사망률을 예측하는 머신러닝 기반 모델](https://cardiab.biomedcentral.com/articles/10.1186/s12933-023-01854-z)

### **13. [새로운 AI 뇌-컴퓨터 인터페이스 기술, 실어증 환자의 "말하기" 지원](https://hyper.ai/news/33914)**

- **연구 하이라이트:** [https://hyper.ai/news/33914](https://hyper.ai/news/33914)
- **연구팀:** UC 연구팀
- **관련 연구:** nltk Twitter 말뭉치, 다중모달 언어 신경 보철, 뇌-컴퓨터 인터페이스, 딥러닝 모델, Cornell Movie-Dialogs Corpus, 음성 합성 알고리즘.
- **게재 학술지:** Nature, 2023.08
- **논문 링크:** [음성 해독과 아바타 제어를 위한 고성능 신경 보철](https://www.nature.com/articles/s41586-023-06443-4)

### **14. [딥러닝 기반 AI로 췌장암 탐지](https://hyper.ai/news/33923)**

- **연구 하이라이트:** [https://hyper.ai/news/33923](https://hyper.ai/news/33923)
- **연구팀:** Alibaba DAMO Academy 및 여러 국내외 의료기관
- **관련 연구:** 딥러닝, PANDA, nnU-Net, CNN, Transformer. PANDA가 암 5건과 임상에서 놓친 26건을 탐지함.
- **게재 학술지:** Nature Medicine, 2023.11
- **논문 링크:** [비조영 CT와 딥러닝을 통한 대규모 췌장암 탐지](https://www.nature.com/articles/s41591-023-02640-w)

### **15. [머신러닝 보조 폐암 선별검사의 인구집단 효과](https://hyper.ai/news/31197)**

- **연구 하이라이트:** [https://hyper.ai/news/31197](https://hyper.ai/news/31197)
- **연구팀:** Google Research Center
- **관련 연구:** DS_CA 데이터셋, DS_NLST 데이터셋, DS_US 데이터셋, DS_JPN 데이터셋, 머신러닝 모델, 폐암 선별검사. 특이도 5%-7% 향상, 건당 검사 시간 14초 단축.
- **게재 학술지:** Radiology AI, 2024.03
- **논문 링크:** [폐암 선별검사 보조 AI: 미국과 일본의 후향적 다국가 연구](https://pubs.rsna.org/doi/11.1148/ryai.230079)

### **16. [난소암 진단 AI 융합 모델 MCF, 일반 검사 데이터와 나이로 위험 계산](https://hyper.ai/news/30730)**

- **연구 하이라이트:** [https://hyper.ai/news/30730](https://hyper.ai/news/30730)
- **연구팀:** Sun Yat-sen University의 Jihong Liu 연구팀
- **관련 연구:** 특징 선택 방법, 머신러닝 분류기, 5겹 교차검증, 다기준 의사결정 이론. CA125·HE4 바이오마커를 능가함.
- **게재 학술지:** The Lancet Digital Health, 2024.05
- **논문 링크:** [중국에서 검사로 난소암을 정확히 진단하는 AI 기반 모델: 다기관 후향적 코호트 연구](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00245-5/fulltext)

### **17. [Google, 의료 AI 도구의 공정성을 평가하는 4단계 HEAL 프레임워크 공개](https://hyper.ai/news/31535)**

- **연구 하이라이트:** [https://hyper.ai/news/31535](https://hyper.ai/news/31535)
- **연구팀:** Google 연구팀
- **관련 연구:** 머신러닝, HEAL(머신러닝의 건강 형평성 평가) 프레임워크, 로지스틱 회귀 분석, 교차성 분석, 건강 형평성.
- **게재 학술지:** EClinicalMedicine, 2024.04
- **논문 링크:** [머신러닝 성능의 건강 형평성 평가(HEAL): 프레임워크 및 피부과 AI 모델 사례 연구](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(24)00058-0/fulltext)

### **18. [의미 분할로 공간 전사체 의미 주석 도구 Pianno 개발](https://hyper.ai/news/31573)**

- **연구 하이라이트:** [https://hyper.ai/news/31573](https://hyper.ai/news/31573)
- **연구팀:** Fudan University의 Ying Zhu 연구팀
- **관련 연구:** 컴퓨터 비전, 머신러닝, 공간 군집화 방법, 비지도 군집화 방법, 공간 포아송 점 과정(sPPP) 모델, 고차 마르코프 랜덤 필드(MRF) 사전분포.
- **게재 학술지:** Nature Communications, 2024.04
- **논문 링크:** [Pianno: 공간 전사체 의미 주석을 자동화하는 확률적 프레임워크](https://www.nature.com/articles/s41467-024-47152-4)

### **19. [AI 모델 UniFMIR, 기존 형광 현미경 영상의 한계 돌파](https://hyper.ai/news/31885)**

- **연구 하이라이트:** [https://hyper.ai/news/31885](https://hyper.ai/news/31885)
- **연구팀:** Fudan University의 Bo Yan 연구팀
- **관련 연구:** UniFMIR 모델, 다중헤드 모듈, 특징 강화 모듈, 다중꼬리 모듈, Swin Transformer, 적응형 모멘트 추정, 딥러닝, SR 모델, U-Net.
- **게재 학술지:** Nature Methods, 2024.04
- **논문 링크:** [일반화 가능한 형광 현미경 영상 복원을 위한 파운데이션 모델 사전학습](https://www.nature.com/articles/s41592-024-02244-3)

### **20. [딥러닝 시스템으로 암 생존 예측 정확도 향상](https://hyper.ai/news/32068)**

- **연구 하이라이트:** [https://hyper.ai/news/32068](https://hyper.ai/news/32068)
- **연구팀:** Shanghai National Center for Applied Mathematics (SJTU Branch)의 Zhangsheng Yu 연구팀
- **관련 연구:** 딥러닝 시스템, ST 데이터셋, 통합 그래프 및 그래프 딥러닝 모델, CNN·GNN, 외부 테스트 세트 MCO-CRC, 공간 유전자 발현 모델, 슈퍼패치 그래프 생존 모델, H&E 염색 조직 영상 전처리.
- **게재 학술지:** Cell Reports Medicine, 2024.05
- **논문 링크:** [조직 영상에 묘사된 TME를 활용한 딥러닝 시스템 기반 암 예후 개선](https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(24)00205-2 )

### **21. [MemSAM, 의료 영상 분할에 "Segment Anything" 모델 적용](https://hyper.ai/news/32372)**

- **연구 하이라이트:** [https://hyper.ai/news/32372](https://hyper.ai/news/32372)
- **연구팀:** Huisi Wu (Shenzhen University)
- **관련 연구:** 비전 모델, 의료 동영상 분할, 심초음파 동영상 분할 모델, 기억 강화 메커니즘, CAMUS·EchoNet-Dynamic 데이터셋, SonoSAM 모델, SAMUS 모델.
- **게재 학술지:** CVPR 2024, 2024.05
- **논문 링크:** [MemSAM: 심초음파 동영상 분할을 위한 Segment Anything 모델 조정](https://github.com/dengxl0520/MemSAM)

### **22. [의료 영상 분할 모델 Medical SAM 2, SOTA 순위 1위](https://hyper.ai/news/33738)**

- **연구 하이라이트:** [https://hyper.ai/news/33738](https://hyper.ai/news/33738)
- **연구팀:** Oxford University 연구팀
- **관련 연구:** 의료 영상 분할 모델, SAM 2, SA-V 동영상 분할 데이터셋, Medical SAM 2 예제 데이터셋, 영상 인코더, 기억 인코더.
- **게재 학술지:** arXiv, 2024.08
- **논문 링크:** [Medical SAM 2: Segment Anything Model 2로 의료 영상을 동영상처럼 분할](https://arxiv.org/abs/2408.00874)

### **23. [머신러닝으로 항암제 내성과 종양 재발에 대응, 유방암 줄기세포에 대한 강력한 방어 구축](https://hyper.ai/news/33566)**

- **연구 하이라이트:** [https://hyper.ai/news/33566](https://hyper.ai/news/33566)
- **연구팀:** Shandong University·Shanxi Medical University, Helix Matrix와 공동 연구
- **관련 연구:** 머신러닝, 침윤성 유방암(BRCA) 데이터셋, Pearson 상관관계, 유전자 집합 농축 분석.
- **게재 학술지:** Advanced Science, 2024.07
- **논문 링크:** [폴리아민 동화작용이 항암제 유발 유방암 줄기세포 농축 촉진](https://onlinelibrary.wiley.com/doi/10.1002/advs.202404853)

### **24. [당뇨병 관리를 위한 비전-언어 모델 DeepDR-LLM, Nature 자매지 게재](https://hyper.ai/news/33292)**

- **연구 하이라이트:** [https://hyper.ai/news/33292](https://hyper.ai/news/33292)
- **연구팀:** Tsinghua University, Shanghai Jiao Tong University, Singapore National University
- **관련 연구:** LLM, 안저 영상 기반 딥러닝, 어댑터 및 LoRA, Transformer 아키텍처, 지도 미세조정.
- **게재 학술지:** Nature Medicine, 2024.07
- **논문 링크:** [일차 당뇨병 관리를 위한 영상 기반 딥러닝과 언어 모델 통합](https://www.nature.com/articles/s41591-024-03139-8)

### **25. [숙련된 병리의사와 대등! Tsinghua 연구팀, 신경교종 정밀 진단용 AI 파운데이션 모델 ROAM 제안](https://hyper.ai/news/33136)**

- **연구 하이라이트:** [https://hyper.ai/news/33136](https://hyper.ai/news/33136)
- **연구팀:** Tsinghua University 및 Xiangya Hospital
- **관련 연구:** 대규모 관심 영역, 피라미드 Transformer, ROAM, 대형 영상 패치, Xiangya 신경교종 WSI 데이터셋, TCGA 신경교종 WSI 데이터셋, 약지도 계산병리학.
- **게재 학술지:** Nature Machine Intelligence, 2024.06
- **논문 링크:** [신경교종의 임상 수준 진단 및 분자 표지자 발견을 위한 Transformer 기반 약지도 계산병리학 방법](https://www.nature.com/articles/s42256-024-00868-w)

### **26. [범용 의료 영상 분할 모델 ScribblePrompt, SAM 기반 모델 능가](https://hyper.ai/news/34720)**

- **연구 하이라이트:** [https://hyper.ai/news/34720](https://hyper.ai/news/34720)
- **연구팀:** MIT CSAIL, MGH, Harvard Medical School
- **관련 연구:** 딥러닝, 의료 영상 분할, MegaMedical 데이터셋, 대화형 분할, 생성형 합성 라벨, CNN-Transformer 하이브리드 솔루션.
- **게재 학술지:** ECCV 2024, 2024.07
- **논문 링크:** [ScribblePrompt: 모든 생의학 영상의 빠르고 유연한 대화형 분할](https://arxiv.org/pdf/2312.07381)

### **27. [디지털 트윈 뇌 플랫폼, 인간 뇌와 유사한 임계 현상 및 인지 기능 재현](https://hyper.ai/news/34573)**

- **연구 하이라이트:** [https://hyper.ai/news/34573](https://hyper.ai/news/34573)
- **연구팀:** Fudan University의 Jianfeng Feng 교수 연구팀
- **관련 연구:** 스파이킹 신경망, 디지털 트윈 뇌, 역공학, MRI, 피질-피질하 모델, DTB 모델, 데이터 동화 모델.
- **게재 학술지:** National Science Review, 2024.05
- **논문 링크:** [뇌 유사 컴퓨팅을 통한 인간 뇌의 휴식·과제 수행 상태 모방 및 탐구: 규모와 아키텍처](https://doi.org/10.1093/nsr/nwae080)

### **28. [자동 LLM 대화 에이전트 시뮬레이션 시스템, 우울증 초기 진단 수행](https://hyper.ai/news/34845)**

- **연구 하이라이트:** [https://hyper.ai/news/34845](https://hyper.ai/news/34845)
- **연구팀:** X-LANCE Lab at SJTU, UT Arlington, TCCI 및 ThetaAI
- **관련 연구:** 대화 에이전트 시뮬레이션 시스템, D4 데이터셋, 3차 기억 저장 아키텍처, 환자 에이전트, 정신과의사 에이전트, 지도 에이전트.
- **게재 학술지:** arXiv, 2024.09
- **논문 링크:** [우울증 진단 대화 시뮬레이션: 3차 기억을 갖춘 자기개선 정신과의사](https://arxiv.org/abs/2409.15084)

### **29. [딥러닝 모델 LucaProt, RNA 바이러스 식별 지원](https://hyper.ai/news/34968)**

- **연구 하이라이트:** [https://hyper.ai/news/34968](https://hyper.ai/news/34968)
- **연구팀:** Sun Yat-sen University, Zhejiang University, Fudan University, Alibaba Cloud 등
- **관련 연구:** 클라우드 컴퓨팅과 AI, 메타유전체 마이닝, NCBI SRA 데이터베이스, CNGBdb, 데이터 기반 딥러닝 모델, Transformer 프레임워크, 잠재적 RNA 바이러스 161,979종 발견.
- **게재 학술지:** Cell, 2024.09
- **논문 링크:** [AI를 이용한 숨겨진 RNA 바이러스계 기록](https://doi.org/10.1016/j.cell.2024.09.027)

### **30. [의료 영상 사전학습 프레임워크 UniMedI, 의료 데이터 이질성 장벽 해소](https://hyper.ai/news/35128)**

- **연구 하이라이트:** [https://hyper.ai/news/35128](https://hyper.ai/news/35128)
- **연구팀:** Zhejiang University의 Haoji Hu 연구팀, Microsoft Research Asia의 Lili Qiu 연구팀
- **관련 연구:** Pseudo-Pairs 기술, MIMIC-CXR 2.0.0 데이터셋, BIMCV 데이터셋, ViT-B/16 비전 인코더, BioClinicalBERT, 비전-언어 대조학습.
- **게재 학술지:** ECCV, 2024.07
- **논문 링크:** [언어 유도 공통 의미 공간에서의 통합 의료 영상 사전학습](https://eccv.ecva.net/virtual/2024/poster/1165)

### **31. [다국어 의료 대형 모델 MMed-Llama 3, 의료 응용 시나리오에 더 잘 적응](https://hyper.ai/news/35242)**

- **연구 하이라이트:** [https://hyper.ai/news/35242](https://hyper.ai/news/35242)
- **연구팀:** Shanghai Jiao Tong University의 Yanfeng Wang·Weidi Xie 연구팀
- **관련 연구:** 다국어 의료 말뭉치 MMedC, 의료 QA 벤치마크 MMedBench, 파운데이션 모델 MMed-Llama 3, MMedLM.
- **게재 학술지:** Nature Communications, 2024.09
- **논문 링크:** [의학을 위한 다국어 언어 모델 구축을 향하여](https://www.nature.com/articles/s41467-024-52417-z)

### **32. [캡슐 내시경 영상 이어붙이기 방법 S2P-Matching, 영상 재구성 지원](https://hyper.ai/news/35313)**

- **연구 하이라이트:** [https://hyper.ai/news/35313](https://hyper.ai/news/35313)
- **연구팀:** HUST, SJTU, South-Central Minzu University, HKUST(GZ), PolyU, University of Sydney
- **관련 연구:** S2P-Matching, 자기지도 대조학습, 이중분기 인코더, Transformer, 픽셀 수준 매칭. 매칭 정확도 187.9% 향상.
- **게재 학술지:** IEEE Transactions on Biomedical Engineering, 2024.09
- **논문 링크:** [S2P-Matching: 캡슐 내시경 영상 이어붙이기를 위한 Transformer 기반 자기지도 패치 매칭](http://dx.doi.org/10.1109/TBME.2024.3462502)

### **33. [다중모달 의료 벤치마크 GMAI-MMBench, 임상 과제 18종을 포괄하는 데이터셋 284개 포함](https://hyper.ai/news/35938)**

- **연구 하이라이트:** [https://hyper.ai/news/35938](https://hyper.ai/news/35938)
- **연구팀:** Shanghai AI Lab, University of Washington, Monash University, ECNU
- **관련 연구:** GMAI-MMBench 벤치마크, 대형 비전-언어 모델을 평가하는 가장 포괄적인 오픈소스 범용 의료 AI 벤치마크.
- **게재 학술지:** NeurIPS 2024, 2024.08
- **논문 링크:** [GMAI-MMBench: 범용 의료 AI를 위한 포괄적 다중모달 평가 벤치마크](https://arxiv.org/abs/2408.03361v7)

### **34. [새로운 시계열 예측 방법 CGS-Mask, 환자 생존율의 핵심 지표 규명](https://hyper.ai/news/36192)**

- **연구 하이라이트:** [https://hyper.ai/news/36192](https://hyper.ai/news/36192)
- **연구팀:** HUST, University of Sydney, Tongji Hospital
- **관련 연구:** MIMIC-III 데이터셋, LSST 데이터셋, NATOPS 데이터셋, AE 데이터셋. 시계열 예측과 해석 가능성 결합.
- **게재 학술지:** AAAI 2024, 2024.03
- **논문 링크:** [CGS-Mask: 누구나 직관적으로 이해할 수 있는 시계열 예측](https://ojs.aaai.org/index.php/AAAI/article/view/29325)

### **35. [비침습적 뇌 해독 프레임워크 fMRI, 뇌-컴퓨터 인터페이스와 인지 모델의 기반 마련](https://hyper.ai/news/36023)**

- **연구 하이라이트:** [https://hyper.ai/news/36023](https://hyper.ai/news/36023)
- **연구팀:** Institute of Automation, CAS의 Yi Zeng 연구팀
- **관련 연구:** 다중모달 통합 프레임워크, Natural Scenes Dataset, COCO 데이터셋, VAE·CLIP 임베딩, 3D fMRI 전처리기, 다중모달 LLM.
- **게재 학술지:** NeurIPS 2024, 2024.10
- **논문 링크:** [신경 비전에서 언어로: 뇌 기록 기반 시각 재구성과 언어 상호작용 강화](https://nips.cc/virtual/2024/poster/93607)

### **36. [의료 영상 분할 모델 M2CF-Net, 쇼그렌 증후군 진단 정확도 향상](https://hyper.ai/news/36700)**

- **연구 하이라이트:** [https://hyper.ai/news/36700](https://hyper.ai/news/36700)
- **연구팀:** HUST의 Wei Tu 교수 및 Feng Lu 교수
- **관련 연구:** M2CF-Net, 소타액선 병리 슬라이드 데이터셋, ROI 추출, 염색 정규화, WSI 패치화, Vahadane 알고리즘, 패치 기반 학습.
- **게재 학술지:** MedAI 2023, 2023
- **논문 링크:** [M2CF-Net: 국소 림프구성 타액선염 병리 병변 분할을 위한 다중해상도·다중스케일 교차 융합 네트워크](https://doi.ieeecomputersociety.org/10.1109/MedAI59581.2023.00063)

### **37. [BSAFusion, 다중모달 의료 영상 정렬·융합 구현](https://hyper.ai/news/37104)**

- **연구 하이라이트:** [https://hyper.ai/news/37104](https://hyper.ai/news/37104)
- **연구팀:** Kunming University of Science and Technology, Ocean University of China
- **관련 연구:** 의료 영상 처리, 양방향 단계적 특징 정렬(BSFA), CT-MRI·PET-MRI·SPECT-MRI 데이터셋, 딥러닝, 컴퓨터 비전.
- **게재 학술지:** AAAI 2025, 2024.11
- **논문 링크:** [BSAFusion: 비정렬 의료 영상 융합을 위한 양방향 단계적 특징 정렬 네트워크](https://arxiv.org/abs/2412.08050)

### **38. [다중에이전트 LLM 프레임워크 KG4Diagnosis, 흔한 질병 362종 진단 지원](https://hyper.ai/news/37208)**

- **연구 하이라이트:** [https://hyper.ai/news/37208](https://hyper.ai/news/37208)
- **연구팀:** University of Warwick, Cranfield University, Cambridge, Oxford
- **관련 연구:** KG4Diagnosis, 계층적 다중에이전트 프레임워크, 자동 의료 지식 그래프 구축, 일반의 LLM(GPLLM), 전문의 LLM.
- **게재 학술지:** AAAI-25 Bridge Program, 2024.12
- **논문 링크:** [KG4Diagnosis: 의료 진단을 위한 지식 그래프 강화 계층적 다중에이전트 LLM 프레임워크](https://arxiv.org/abs/2412.16833)

### **39. [영상 분할 모델 ConDSeg, 의료 영상의 불명확한 경계·동시 발생 문제 해결](https://hyper.ai/news/37794)**

- **연구 하이라이트:** [https://hyper.ai/news/37794](https://hyper.ai/news/37794)
- **연구팀:** China University of Geosciences, Baidu
- **관련 연구:** 대조 기반 특징 강화 프레임워크 ConDSeg, 일관성 강화 학습, 의미 분리 모듈, 크기 인식 디코더, BCNet, Kvasir-SEG 데이터셋.
- **게재 학술지:** AAAI 2025, 2024.12
- **논문 링크:** [ConDSeg: 대조 기반 특징 강화를 통한 범용 의료 영상 분할 프레임워크](https://arxiv.org/abs/2412.08345)

### **40. [의료 모델 M³FM, 제로샷 임상 진단으로 질병 보고·분류 지원](https://hyper.ai/news/37924)**

- **연구 하이라이트:** [https://hyper.ai/news/37924](https://hyper.ai/news/37924)
- **연구팀:** Oxford, University of Rochester, Amazon, Westlake University, Tencent Youtu Lab
- **관련 연구:** 제로샷 임상 진단, 의료 영상, CLIP 모델, M³FM 프레임워크, MultiMedCLIP, MIMC-CXR 데이터셋, COVID-19-CT-CXR, CheXpert.
- **게재 학술지:** npj Digital Medicine, 2025.02
- **논문 링크:** [제로샷 임상 진단을 위한 다중모달·다중영역·다국어 의료 파운데이션 모델](https://www.nature.com/articles/s41746-024-01339-7)

### **41. [두개골 CT 기반 딥러닝 성별 추정, 인간 법의학 전문가 능가](https://hyper.ai/news/38024)**

- **연구 하이라이트:** [https://hyper.ai/news/38024](https://hyper.ai/news/38024)
- **연구팀:** UWA, UNSW, Hasanuddin University
- **관련 연구:** 딥러닝 기반 자동 프레임워크, 두개골 성별 추정, 3D CT 스캔, 법의인류학.
- **게재 학술지:** Scientific Reports, 2024.12
- **논문 링크:** [딥러닝과 인간 평가자 비교: 3D CT를 이용한 법의학적 성별 추정](https://www.nature.com/articles/s41598-024-81718-y)

### **42. [AI로 의료 연구 강화: 대형 모델이 일차의료 의사 교육의 "최고 파트너"로](https://hyper.ai/news/38366)**

- **연구 하이라이트:** [https://hyper.ai/news/38366](https://hyper.ai/news/38366)
- **연구팀:** SJTU, SUS, Tsinghua, Duke, Johns Hopkins, University of Melbourne
- **관련 연구:** 의사 교육, DeepSeek, 인간-AI 협력 의사결정, LLM, 만성질환 진단 및 치료.
- **게재 학술지:** Science Bulletin, 2025.01
- **논문 링크:** [당뇨병 교육을 위한 대형 언어 모델: 전향적 연구](https://www.sciencedirect.com/science/article/pii/S2095927325000891)

### **43. [AcneDGNet 딥러닝 알고리즘, 여드름 병변 탐지·등급 평가 구현](https://hyper.ai/news/38397)**

- **연구 하이라이트:** [https://hyper.ai/news/38397](https://hyper.ai/news/38397)
- **연구팀:** Peking University International Hospital
- **관련 연구:** AcneDGNet, Vision Transformer, CNN, ACNE04 데이터셋, Swin Transformer 아키텍처.
- **게재 학술지:** Scientific Reports, 2025.01
- **논문 링크:** [중국 인구집단 대상 온라인·오프라인 의료 환경의 여드름 병변 탐지·중증도 평가 모델 검증](https://www.nature.com/articles/s41598-024-84670-z)

### **44. [다중모달 의료 영상 분할 모델 VISTA3D 공개, 3D 영상 자동 분할 및 상호작용 구현](https://hyper.ai/news/38486)**

- **연구 하이라이트:** [https://hyper.ai/news/38486](https://hyper.ai/news/38486)
- **연구팀:** NVIDIA, UAMS, NIH, Oxford University
- **관련 연구:** VISTA3D, 3D 슈퍼복셀 특징 추출, 자동 분할·대화형 분할의 이중 모드.
- **게재 학술지:** arXiv, 2024.11
- **논문 링크:** [VISTA3D: 3D 의료 영상을 위한 통합 분할 파운데이션 모델](https://doi.org/10.48550/arxiv.2406.05285)

### **45. [다중평면 심초음파 통합 분할 모델 EchoONE, 여러 평면 정밀 분할](https://hyper.ai/news/38544)**

- **연구 하이라이트:** [https://hyper.ai/news/38544](https://hyper.ai/news/38544)
- **연구팀:** Shenzhen University, Shenzhen People's Hospital
- **관련 연구:** EchoONE 모델, CAMUS 데이터셋, HMC-QU 데이터셋, EchoNet_Dynamic 데이터셋.
- **게재 학술지:** CVPR 2025, 2025.04
- **논문 링크:** [EchoONE: 하나의 모델로 여러 심초음파 평면 분할](https://arxiv.org/abs/2412.02993)

### **46. [다중에이전트 대화 프레임워크, 진료 상담을 모사하여 질병 진단 지원](https://hyper.ai/news/38583)**

- **연구 하이라이트:** [https://hyper.ai/news/38583](https://hyper.ai/news/38583)
- **연구팀:** West China Hospital, Zhejiang University, BUPT
- **관련 연구:** 다중에이전트 대화(MAC) 프레임워크, LLM, Orphanet, Medline, GPT-3.5, GPT-4.
- **게재 학술지:** Nature, 2025.03
- **논문 링크:** [다중에이전트 대화형 대형 언어 모델로 진단 역량 강화](https://www.nature.com/articles/s41746-025-01550-0#Tab6)

### **47. [딥러닝 프레임워크 STAIG, 종양 미세환경의 상세 유전 정보 규명](https://hyper.ai/news/38587)**

- **연구 하이라이트:** [https://hyper.ai/news/38587](https://hyper.ai/news/38587)
- **연구팀:** Institute of Medical Science, University of Tokyo
- **관련 연구:** STAIG 프레임워크, 생체 조직, ST 데이터셋, GNN.
- **게재 학술지:** Nature Communications, 2025.01
- **논문 링크:** [STAIG: 영역 탐색과 정렬 없는 통합을 위한 영상 보조 그래프 대조학습 기반 공간 전사체 분석](https://www.nature.com/articles/s41467-025-56276-0)

### **48. [최초의 올인원 의료 영상 재식별 프레임워크 MaMI, 데이터셋 11개에서 SOTA 달성](https://hyper.ai/news/38624)**

- **연구 하이라이트:** [https://hyper.ai/news/38624](https://hyper.ai/news/38624)
- **연구팀:** Shanghai AI Lab 및 여러 대학
- **관련 연구:** MaMI 프레임워크, 의료 재식별 벤치마크, 연속 모달리티 매개변수 어댑터(ComPA), 의료 파운데이션 모델(MFM).
- **게재 학술지:** CVPR 2025, 2025.03
- **논문 링크:** [올인원 의료 영상 재식별을 향하여](https://arxiv.org/pdf/2503.08173)

### **49. [다대일 회귀 모델 M2OST, 디지털 병리 영상으로 유전자 발현 정밀 예측](https://hyper.ai/news/38783)**

- **연구 하이라이트:** [https://hyper.ai/news/38783](https://hyper.ai/news/38783)
- **연구팀:** Zhejiang University, Zhejiang Lab, Ritsumeikan University
- **관련 연구:** 전체 슬라이드 영상(WSI), 인간 유방암 데이터셋, Transformer 모델, 패치 수준 방식.
- **게재 학술지:** AAAI 2025, 2024.12
- **논문 링크:** [M2OST: 디지털 병리 영상에서 공간 전사체를 예측하는 다대일 회귀](https://arxiv.org/abs/2409.15092)

### **50. [뇌 MRI 도구 MindGlide, 다발성 경화증 병변 정량화](https://hyper.ai/news/38971)**

- **연구 하이라이트:** [https://hyper.ai/news/38971](https://hyper.ai/news/38971)
- **연구팀:** UCL 연구팀
- **관련 연구:** MindGlide 모델, MRI, 일상 진료 데이터셋, 병변 분할, nnU-Net, 3D CNN.
- **게재 학술지:** Nature Communications, 2025.04
- **논문 링크:** [다발성 경화증 연구에 임상 MRI 아카이브를 재활용하여 기존 영상에서 새로운 통찰 도출](https://go.hyper.ai/fDEgm)

### **51. [계층적 증류 다중인스턴스 학습 프레임워크 HDMIL, 기가픽셀 전체 슬라이드 영상 신속 처리](https://hyper.ai/news/39157)**

- **연구 하이라이트:** [https://hyper.ai/news/39157](https://hyper.ai/news/39157)
- **연구팀:** HIT, HIT (Shenzhen)
- **관련 연구:** 다중인스턴스 학습, 종양 탐지, WSI, Camelyon16 데이터셋, TCGA-NSCLC 데이터셋.
- **게재 학술지:** CVPR 2025, 2025.03
- **논문 링크:** [계층적 증류 다중인스턴스 학습으로 빠르고 정확한 기가픽셀 병리 영상 분류](https://arxiv.org/abs/2502.21130)

### **52. [범용 3D 혈관 분할 파운데이션 모델 vesselFM, SAM 기반 모델 크게 능가](https://hyper.ai/news/39201)**

- **연구 하이라이트:** [https://hyper.ai/news/39201](https://hyper.ai/news/39201)
- **연구팀:** University of Zurich, ETH Zurich, Technical University of Munich
- **관련 연구:** 혈관 분할, 의료 영상 분할, 플로 매칭 기반 조건부 생성 모델, 도메인 무작위화 전략.
- **게재 학술지:** CVPR 2025, 2025.01
- **논문 링크:** [vesselFM: 범용 3D 혈관 분할을 위한 파운데이션 모델](https://go.hyper.ai/lVad9)

### **53. [그래프 신경망, 폐암 생존 정밀 예측 및 치명적 하위 유형 3종 발견](https://hyper.ai/news/39435)**

- **연구 하이라이트:** [https://hyper.ai/news/39435](https://hyper.ai/news/39435)
- **연구팀:** Cornell University, Regeneron Pharmaceuticals
- **관련 연구:** 그래프 인코딩 혼합 생존(GEMS), EHR 데이터베이스, ConcertAI Patient360™ NSCLC 데이터셋, GNN 인코더.
- **게재 학술지:** Nature Communication, 2025.05
- **논문 링크:** [실제 데이터와 머신러닝을 이용한 임상 결과 예측 하위 표현형 식별](https://doi.org/10.1038/s41467-025-59092-8)

### **54. [융합 전략 AI 모델, 패혈성 쇼크 사망 위험 예측](https://hyper.ai/news/39713)**

- **연구 하이라이트:** [https://hyper.ai/news/39713](https://hyper.ai/news/39713)
- **연구팀:** Tongji Hospital, HUST
- **관련 연구:** 패혈성 쇼크, TOPSIS 기반 분류 융합(TCF) 모델, 머신러닝 모델.
- **게재 학술지:** npj digital medicine, 2025.04
- **논문 링크:** [다기관 후향적 연구에서 패혈성 쇼크의 AI 기반 다전문분야 사망 예측 모델](https://go.hyper.ai/faMLL)

### **55. [세계 최초 HIE 임상 사고 그래프 모델, 신경인지 결과 예측 15% 향상](https://hyper.ai/news/40828)**

- **연구 하이라이트:** [https://hyper.ai/news/40828](https://hyper.ai/news/40828)
- **연구팀:** Boston Children's Hospital, Harvard Medical School, NYU, MIT-IBM Watson Lab
- **관련 연구:** 의료 추론 벤치마크, 임상 사고 그래프(CGoT) 모델, HIE-Reasoning 데이터셋.
- **게재 학술지:** ICML 2025, 2025.06
- **논문 링크:** [전문가 수준 사고 그래프 의료 추론을 위한 시각·도메인 지식](https://openreview.net/forum?id=tnyxtaSve5)

### **56. [다차원 EHR 데이터의 세밀한 환자 코호트 모델링으로 입원 기간 예측 정확도 16.3% 향상](https://hyper.ai/news/41303)**

- **연구 하이라이트:** [https://hyper.ai/news/41303](https://hyper.ai/news/41303)
- **연구팀:** NUS, Zhejiang University
- **관련 연구:** EHR, NeuralCohort 표현 학습 방법, MIMIC-III, MIMIC-IV, Diabetes130.
- **게재 학술지:** ICML 2025, 2025.06
- **논문 링크:** [NeuralCohort: 의료 분석을 위한 코호트 인식 신경 표현 학습](https://openreview.net/forum?id=bqQVa6VRvm)

### **57. [딥러닝 모델 APEX, 잠재적 항생제 후보 선별](https://hyper.ai/news/42377)**

- **연구 하이라이트:** [https://hyper.ai/news/42377](https://hyper.ai/news/42377)
- **연구팀:** University of Pennsylvania
- **관련 연구:** 전 세계 독 데이터베이스, APEX 모델 예측, 항생제 연구개발, 동물 독.
- **게재 학술지:** Nature Communications, 2025.07
- **논문 링크:** [Venomics AI를 이용한 항균제 발견을 위한 전 세계 독의 계산적 탐색](https://www.nature.com/articles/s41467-025-60051-6)

### **58. [유전자 시퀀싱·머신러닝을 이용한 하수 역학 평가: ICA-Var, 바이러스 최대 4주 조기 탐지](https://hyper.ai/news/42585)**

- **연구 하이라이트:** [https://hyper.ai/news/42585](https://hyper.ai/news/42585)
- **연구팀:** UNLV
- **관련 연구:** 비지도 머신러닝 파이프라인, 독립 성분 분석, 바이러스 탐지, 이중 회귀 방법, ICA-Var.
- **게재 학술지:** Nature Communications, 2025.07
- **논문 링크:** [유전체 시퀀싱과 머신러닝을 통한 하수의 신종 SARS-CoV-2 변이 조기 탐지](https://www.nature.com/articles/s41467-025-61280-5)

### **59. [양방향 Brownian 브리지 확산 모델, 가상 염색 재현성 향상](https://hyper.ai/news/42959)**

- **연구 하이라이트:** [https://hyper.ai/news/42959](https://hyper.ai/news/42959)
- **연구팀:** UCLA
- **관련 연구:** 영상 질량분석법, 확산 모델, Brownian 브리지 확산 모델, SNR 기반 채널 선택 전략.
- **게재 학술지:** Science Advances, 2025.08
- **논문 링크:** [영상 질량분석법에서 무표지 조직의 가상 염색](https://go.hyper.ai/X9GEn)

### **60. [Medical GraphRAG, QA 정확도 기록 경신 및 벤치마크 데이터셋 11개에서 SOTA 달성](https://hyper.ai/news/43064)**

- **연구 하이라이트:** [https://hyper.ai/news/43064](https://hyper.ai/news/43064)
- **연구팀:** Oxford, CMU, University of Edinburgh
- **관련 연구:** RAG, Medical GraphRAG, U-Retrieval 방법, MIMIC-IV, FakeHealth, PubHealth.
- **게재 학술지:** ACL 2025, 2025.07
- **논문 링크:** [Medical Graph RAG: 그래프 검색 증강 생성을 통한 안전한 의료 대형 언어 모델을 향하여](https://go.hyper.ai/OaMIE)

### **61. [Healthcare Agent, 의료 윤리·안전 문제 자동 탐지](https://hyper.ai/news/44006)**

- **연구 하이라이트:** [https://hyper.ai/news/44006](https://hyper.ai/news/44006)
- **연구팀:** Wuhan University, NTU
- **관련 연구:** LLM, 의료 상담, Healthcare Agent, MedDialog 데이터셋.
- **게재 학술지:** Nature Artificial Intelligence, 2025.09
- **논문 링크:** [Healthcare agent: 의료 상담을 위한 대형 언어 모델의 역량 활용](https://go.hyper.ai/09lYX)

### **62. [혈구 영상 분류기 CytoDiffusion, 임상 전문가를 능가하여 백혈병 발견 지원](https://hyper.ai/news/47004)**

- **연구 하이라이트:** [https://hyper.ai/news/47004](https://hyper.ai/news/47004)
- **연구팀:** Cambridge University
- **관련 연구:** 딥러닝, 의료 영상 분석, CNN, CytoDiffusion, CytoData 데이터셋, Raabin-WBC 데이터셋, 확산 모델.
- **게재 학술지:** Nature, 2025.11
- **논문 링크:** [혈구 형태의 심층 생성 분류](https://www.nature.com/articles/s42256-025-01122-7)

### **63. [UCL 연구팀, 기관 간 혈액 형태 분석을 위한 연합학습 프레임워크 MORPHFED 제안](https://hyper.ai/news/49373)**

- **연구 하이라이트:** [https://hyper.ai/news/49373](https://hyper.ai/news/49373)
- **연구팀:** UCL Computer Science Department
- **관련 연구:** 혈액 형태 검사, 백혈구 형태 분석, 연합학습, 개인정보 보호 의료 AI.
- **게재 학술지:** arXiv
- **논문 링크:** [MORPHFED: 기관 간 혈액 형태 분석을 위한 연합학습](https://arxiv.org/abs/2601.04121)

### **64. [프랑스 연구팀, HCC 간이식 후보자의 정밀 사망률 예측을 위한 설명 가능한 머신러닝 프레임워크 제안](https://hyper.ai/news/49742)**

- **연구 하이라이트:** [https://hyper.ai/news/49742](https://hyper.ai/news/49742)
- **연구팀:** Télécom Paris 및 Université Paris-Saclay
- **관련 연구:** 간세포암(HCC), 간이식 대기자 사망 위험, 앙상블 학습, SHAP 분석.
- **게재 학술지:** Health Data Science
- **논문 링크:** [간세포암 간이식 후보자의 설명 가능한 사망률 예측: 지도 군집화 접근법](https://spj.science.org/doi/10.34133/hds.0295)

### **65. [Stanford University, 최초의 네이티브 3D 복부 CT 비전-언어 모델 Merlin 제안](https://hyper.ai/news/49864)**

- **연구 하이라이트:** [https://hyper.ai/news/49864](https://hyper.ai/news/49864)
- **연구팀:** Stanford University
- **관련 연구:** 복부 컴퓨터 단층촬영(CT), 3D 비전-언어 모델(3D VLM), Merlin, 전자 건강 기록(EHR).
- **게재 학술지:** Nature
- **논문 링크:** [Merlin: CT 비전-언어 파운데이션 모델과 데이터셋](https://www.nature.com/articles/s41586-026-10181-8)

## **AI+ 재료화학**

*(항목은 정확히 동일한 구조로 이어집니다)*

### **1. [고처리량 계산 프레임워크, 33분 만에 새로운 MOF 후보 120,000개 생성](https://hyper.ai/news/30269)**

- **연구 하이라이트:** [https://hyper.ai/news/30269](https://hyper.ai/news/30269)
- **연구팀:** Argonne National Laboratory의 Eliu A. Huerta 연구팀
- **관련 연구:** hMOFs 데이터셋, 생성형 AI, GHP-MOFsassemble, MMPA, DiffLinker, CGCNN, GCMC.
- **게재 학술지:** Nature, 2024.02
- **논문 링크:** [탄소 포집용 금속-유기 골격체 설계를 위한 분자 확산 모델 기반 생성형 AI 프레임워크](https://www.nature.com/articles/s42004-023-01090-2)

### **2. [머신러닝 알고리즘으로 P-SOC 전극 재료 선별](https://hyper.ai/news/29069)**

- **연구 하이라이트:** [https://hyper.ai/news/29069](https://hyper.ai/news/29069)
- **연구팀:** Guangzhou University의 Siyu Ye 연구팀
- **관련 연구:** XGBoost, 머신러닝 모델, RF, DFT. 전극 재료 LCN91을 성공적으로 선별함.
- **게재 학술지:** ADVANCED FUNCTIONAL MATERIALS, 2023.12
- **논문 링크:** [양성자 전도성 고체 산화물 전지의 공기 전극용 Co/Fe 기반 양성자 전도성 산화물의 머신러닝 보조 선별](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202309855)

### **3. [SEN 머신러닝 모델, 재료 특성 고정밀 예측 달성](https://hyper.ai/news/28410)**

- **연구 하이라이트:** [https://hyper.ai/news/28410](https://hyper.ai/news/28410)
- **연구팀:** Sun Yat-sen University의 Huashan Li 및 Biao Wang 연구팀
- **관련 연구:** Materials Project 데이터베이스, SEN, 캡슐 메커니즘, 딥러닝.
- **게재 학술지:** Nature Communications, 2023.08
- **논문 링크:** [결정 캡슐 표현을 통한 재료 대칭성 인식과 특성 예측](https://www.nature.com/articles/s41467-023-40756-2)

### **4. [딥러닝 도구 GNoME, 새로운 결정 220만 개 발견](https://hyper.ai/news/28347)**

- **연구 하이라이트:** [https://hyper.ai/news/28347](https://hyper.ai/news/28347)
- **연구팀:** Google DeepMind 연구팀
- **관련 연구:** GNoME 데이터베이스, GNoME, SOTA GNN 모델, 딥러닝, Materials Project, OQMD, WBM, ICSD.
- **게재 학술지:** Nature, 2023.11
- **논문 링크:** [재료 발견을 위한 딥러닝 확장](https://www.nature.com/articles/s41586-023-06735-9)

### **5. [장 유도 재귀 임베딩 원자 신경망, 외부 장의 세기·방향 변화 정밀 기술](https://hyper.ai/news/28285)**

- **연구 하이라이트:** [https://hyper.ai/news/28285](https://hyper.ai/news/28285)
- **연구팀:** USTC의 Bin Jiang 연구팀
- **관련 연구:** 장 유도 재귀 임베딩 원자 신경망 FIREANN, FIREANN-wF 모델.
- **게재 학술지:** Nature Communication, 2023.10
- **논문 링크:** [외부 장에 대한 원자 시스템의 응답을 위한 범용 머신러닝](https://www.nature.com/articles/s41467-023-42148-y)

### **6. [머신러닝으로 다공성 재료의 물 흡착 등온선 예측](https://hyper.ai/news/28260)**

- **연구 하이라이트:** [https://hyper.ai/news/28260](https://hyper.ai/news/28260)
- **연구팀:** HUST의 Song Li 연구팀
- **관련 연구:** EWAID 데이터베이스, 머신러닝 모델, RF, ANN.
- **게재 학술지:** Journal of Materials Chemistry A, 2023.09
- **논문 링크:** [머신러닝 보조 물 흡착 등온선 및 냉각 성능 예측](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA03586G)

### **7. [머신러닝으로 BiVO(4) 광양극의 보조촉매 최적화](https://hyper.ai/news/28013)**

- **연구 하이라이트:** [https://hyper.ai/news/28013](https://hyper.ai/news/28013)
- **연구팀:** Tsinghua University의 Hongwei Zhu 연구팀
- **관련 연구:** ML, 신경망, AdaBoost 알고리즘, 그래디언트 부스팅, 자기설명 모델, 배깅 알고리즘, 교차검증.
- **게재 학술지:** Journal of Materials Chemistry A, 2023.10
- **논문 링크:** [고성능 광양극 촉매 설계를 위한 포괄적 머신러닝 전략](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA04148D)

### **8. [RetroExplainer 알고리즘, 딥러닝 기반 역합성 예측 수행](https://hyper.ai/news/27406)**

- **연구 하이라이트:** [https://hyper.ai/news/27406](https://hyper.ai/news/27406)
- **연구팀:** Shandong University, UESTC
- **관련 연구:** RetroExplainer, 딥러닝, MSMS-GT, DAMT, 해석 가능한 의사결정 모듈.
- **게재 학술지:** Nature Communications, 2023.10
- **논문 링크:** [분자 조립 과제 기반의 해석 가능한 딥러닝 프레임워크를 이용한 역합성 예측](https://www.nature.com/articles/s41467-023-41698-5)

### **9. [심층 신경망 + NLP로 내식성 합금 개발](https://hyper.ai/news/25891)**

- **연구 하이라이트:** [https://hyper.ai/news/25891](https://hyper.ai/news/25891)
- **연구팀:** Max-Planck-Institut für Eisenforschung(독일)
- **관련 연구:** DNN, NLP. 합금 가공 및 시험 방법의 텍스트 데이터를 읽고 새로운 원소를 예측할 수 있음.
- **게재 학술지:** Science Advances, 2023.08
- **논문 링크:** [자연어 처리와 딥러닝을 통한 내식성 합금 설계 개선](https://www.science.org/doi/10.1126/sciadv.adg7992)

### **10. [딥러닝으로 표면 관찰에서 재료 내부 구조 파악](https://hyper.ai/news/25859)**

- **연구 하이라이트:** [https://hyper.ai/news/25859](https://hyper.ai/news/25859)
- **연구팀:** MIT 연구팀
- **관련 연구:** 딥러닝, FEA 계산, Abaqus 시각화 도구, GAN, ViViT, CNN.
- **게재 학술지:** Advanced Materials, 2023.03
- **논문 링크:** [빈칸 채우기: 누락된 물리장 정보를 복원하는 전이 가능한 딥러닝 접근법](https://onlinelibrary.wiley.com/doi/full/10.1002/adma.202301449)

### **11. [혁신적인 X선 섬광체로 새로운 재료 3종 개발](https://hyper.ai/news/31465)**

- **연구 하이라이트:** [https://hyper.ai/news/31465](https://hyper.ai/news/31465)
- **연구팀:** Hebei University의 Hailei Zhang 연구팀
- **관련 연구:** 수분산성 X선 섬광체, 나노재료, 폴리우레탄 폼, X선 영상용 유연한 하이드로젤 섬광체 스크린, 다단계 위조 방지 정보 암호화 복합 하이드로젤.
- **게재 학술지:** Nature Communications, 2024.03
- **논문 링크:** [여러 응용 분야의 고분자 재료 코팅·혼합을 가능하게 하는 수분산성 X선 섬광체](https://www.nature.com/articles/s41467-024-46287-8)

### **12. [준지도학습으로 라벨 없는 데이터의 숨겨진 정보 추출](https://hyper.ai/news/31089)**

- **연구 하이라이트:** [https://hyper.ai/news/31089](https://hyper.ai/news/31089)
- **연구팀:** SJTU의 Jiayu Wan 연구팀
- **관련 연구:** 준지도학습, 라벨 없는 데이터, 베이지안 공동학습, 부분 시점 모델, 전체 시점 모델. 리튬 배터리 수명 예측 정확도 20% 향상.
- **게재 학술지:** Joule, 2024.03
- **논문 링크:** [설명 가능한 퓨샷 배터리 수명 예측을 위한 준지도학습](https://doi.org/10.1016/j.joule.2024.02.020 )

### **13. [AutoML 기반 자동 지식 추출](https://hyper.ai/news/30920)**

- **연구 하이라이트:** [https://hyper.ai/news/30920](https://hyper.ai/news/30920)
- **연구팀:** SJTU의 Yulian He 연구팀
- **관련 연구:** AutoML, 촉매, 화학흡착 에너지, Eads 값, 특징 삭제 실험, 신경망, 고처리량 DFT.
- **게재 학술지:** PNAS, 2024.03
- **논문 링크:** [AutoML 기반 특징 삭제 실험을 통한 화학흡착 강도 해석](https://hyper.ai/news/30920)

### **14. [Uni-MOF: 3D MOF 재료의 흡착 거동 예측 머신러닝 모델](https://hyper.ai/news/30663)**

- **연구 하이라이트:** [https://hyper.ai/news/30663](https://hyper.ai/news/30663)
- **연구팀:** Diannan Lu 연구팀, Tsinghua University 화학공학과
- **관련 연구:** hMOFs50 데이터베이스, MOF/COF 데이터베이스, Uni-MOF 미세조정. 3D 공간 배치 및 원자간 연결 관계 630,000개 이상 평가.
- **게재 학술지:** Nature Communications, 2024.03
- **논문 링크:** [금속-유기 골격체의 고정밀 기체 흡착 예측을 위한 포괄적 Transformer 기반 접근법](https://www.nature.com/articles/s41467-024-46276-x)

### **15. [마이크로전자공학, 포스트 무어 시대로 가속! DNN·나노막 기술을 통합해 입사광 각도 정밀 분석](https://hyper.ai/news/32326)**

- **연구 하이라이트:** [https://hyper.ai/news/32326](https://hyper.ai/news/32326)
- **연구팀:** Fudan University의 Yongfeng Mei 연구팀
- **관련 연구:** 유한요소 모델, 변형 나노막 이완 모델, Fick 법칙, 심층 신경망, 3D 광검출기, 각도 민감 검출 모델.
- **게재 학술지:** Nature Communications, 2024.04
- **논문 링크:** [3D 각도 민감 광검출을 위한 나노막 말림의 다단계 설계 및 구축](https://www.nature.com/articles/s41467-024-47405-2)

### **16. [리튬 배터리 성능 한계 재편, 앙상블 학습 기반 단순화 전기화학 모델 제안](https://hyper.ai/news/32323)**

- **연구 하이라이트:** [https://hyper.ai/news/32323](https://hyper.ai/news/32323)
- **연구팀:** Wuhan University of Technology의 Jianqiang Kang 연구팀
- **관련 연구:** 단순화 전기화학 모델, 앙상블 학습 모델, 머신러닝, 1차 관성 요소(FIE), 이산시간 실현 알고리즘(DRA), 분수차 Padé 근사(FOM), 3매개변수 포물선 근사(TPM).
- **게재 학술지:** iScience, 2024.05
- **논문 링크:** [앙상블 학습 기반 리튬이온 배터리의 단순화 전기화학 모델](https://www.sciencedirect.com/science/article/pii/S2589004224009076)

### **17. [머신러닝으로 최강의 철계 초전도 자석 탄생](https://hyper.ai/news/32556)**

- **연구 하이라이트:** [https://hyper.ai/news/32556](https://hyper.ai/news/32556)
- **연구팀:** Tokyo University of Agriculture and Technology
- **관련 연구:** BOXVIA 머신러닝, 데이터 기반 루프, 수치 시뮬레이션, 철계 초전도 영구자석 Ba122, 장 냉각 자화(FCM) 모델.
- **게재 학술지:** NPG Asia Materials, 2024.06
- **논문 링크:** [데이터·연구자 주도 공정 설계로 철계 초전도체 초강력 영구자석 구현](https://www.nature.com/articles/s41427-024-00549-5)

### **18. [신경망으로 밀도범함수이론 대체! 범용 재료 모델, 초정밀 예측 달성](https://hyper.ai/news/32891)**

- **연구 하이라이트:** [https://hyper.ai/news/32891](https://hyper.ai/news/32891)
- **연구팀:** Tsinghua University 물리학과의 Yong Xu·Wenhui Duan 연구팀
- **관련 연구:** Materials Project 데이터베이스, 딥러닝 DFT Hamiltonian(DeepH) 방법, 범용 재료 모델, 신경망, 등변 신경망, AiiDA 프레임워크.
- **게재 학술지:** Science Bulletin, 2024.06
- **논문 링크:** [딥러닝 밀도범함수이론 Hamiltonian의 범용 재료 모델](https://doi.org/10.1016/j.scib.2024.06.011)

### **19. [신경망 밀도범함수 프레임워크, 물질 전자 구조 예측의 블랙박스 개방](https://hyper.ai/news/33525)**

- **연구 하이라이트:** [https://hyper.ai/news/33525](https://hyper.ai/news/33525)
- **연구팀:** Tsinghua University의 Yong Xu 및 Wenhui Duan 연구팀
- **관련 연구:** 신경망 DFT, 변분 DFT, 등변 신경망, Julia 언어, Zygote AD 프레임워크, 딥러닝, 비지도학습, DFT.
- **게재 학술지:** Phys. Rev. Lett., 2024.08
- **논문 링크:** [변분 에너지 최소화 기반 신경망 밀도범함수이론](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.076401)

### **20. [신경망을 이용한 최초의 완전 순방향 광학 컴퓨팅 학습 아키텍처, 자국 광학 칩의 중대한 돌파구 달성](https://hyper.ai/news/33440)**

- **연구 하이라이트:** [https://hyper.ai/news/33440](https://hyper.ai/news/33440)
- **연구팀:** Tsinghua University의 Qionghai Dai 및 Lu Fang 연구팀
- **관련 연구:** 신경망, 완전 순방향 모드, 머신러닝, MNIST, Fashion-MNIST, CIFAR-10, ImageNet, MWD, Iris 데이터셋, Chromium 표적 데이터셋.
- **게재 학술지:** Nature, 2024.08
- **논문 링크:** [광학 신경망의 완전 순방향 모드 학습](https://www.nature.com/articles/s41586-024-07687-4)

*(분량 제한으로 인해 번역은 제공된 구조를 정확히 대응시킵니다. 전체 서식과 일관성을 보존하기 위해 AI+ 재료화학 21-54번, AI+ 동물학-식물학, AI+ 농업-임업-축산, AI+ 기상학, AI+ 천문학, AI+ 자연재해, AI4S 정책 및 기타 전체에 유사한 번역 규칙을 적용합니다. 아래는 정확한 입력에 대응하는 나머지 분야별 논문의 번역문입니다.)*

### **21. [화학 LLM ChemLLM, QA 데이터 700만 건으로 GPT-4에 필적하는 전문 역량](https://hyper.ai/news/34170)**

- **연구 하이라이트:** [https://hyper.ai/news/34170](https://hyper.ai/news/34170)
- **연구팀:** Shanghai AI Lab
- **관련 연구:** 대규모 화학 데이터셋 ChemData, ChemPref-10K 영어/중국어 데이터셋, C-MHChem 데이터셋, ChemBench4K, ChemBench, Multi-Corpus, NLP 과제.
- **게재 학술지:** arXiv, 2024.02
- **논문 링크:** [ChemLLM: 화학 대형 언어 모델](https://arxiv.org/abs/2402.06852)

### **22. [웨이퍼 규모 생산이 가능한 AI 적응형 초소형 분광계](https://hyper.ai/news/34075)**

- **연구 하이라이트:** [https://hyper.ai/news/34075](https://hyper.ai/news/34075)
- **연구팀:** Fudan University의 Yongfeng Mei 연구팀
- **관련 연구:** 광학 분광계, 소형 재구성 분광계, CMOS IC 공정, 협대역 채널 전류 데이터셋.
- **게재 학술지:** PNAS, 2024.08
- **논문 링크:** [자기참조 통합 Fabry-Perot 공진기를 갖춘 CMOS 호환 재구성 분광계](https://www.pnas.org/doi/10.1073/pnas.2403950121)

### **23. [GNNOpt 모델, 태양전지·양자 재료 후보 수백 종 식별](https://hyper.ai/news/35009)**

- **연구 하이라이트:** [https://hyper.ai/news/35009](https://hyper.ai/news/35009)
- **연구팀:** Tohoku University, MIT
- **관련 연구:** DFT 계산, GNNOpt, 앙상블 임베딩, 등변 GNN, Materials Project 데이터베이스.
- **게재 학술지:** Advanced Materials, 2024.06
- **논문 링크:** [결정 구조에서 광학 스펙트럼을 직접 예측하는 범용 앙상블 임베딩 그래프 신경망](https://onlinelibrary.wiley.com/doi/epdf/10.1002/adma.202409175)

### **24. [공개 OMat24 데이터셋, DFT 계산 결과 1억 1,000만 건 포함](https://hyper.ai/news/35515)**

- **연구 하이라이트:** [https://hyper.ai/news/35515](https://hyper.ai/news/35515)
- **연구팀:** Meta
- **관련 연구:** Open Materials 2024(OMat24), EquformerV2(eqV2), 제일원리 MD.
- **게재 학술지:** arxiv, 2024.10
- **논문 링크:** [Open Materials 2024(OMat24) 무기 재료 데이터셋 및 모델](https://arxiv.org/pdf/2410.12771)

### **25. [머신러닝으로 합성한 새로운 내화성 고엔트로피 합금, 우수한 상온 연성 확보](https://hyper.ai/news/35536)**

- **연구 하이라이트:** [https://hyper.ai/news/35536](https://hyper.ai/news/35536)
- **연구팀:** University of Science and Technology Beijing의 Yanjing Su 연구팀
- **관련 연구:** 유전 탐색을 결합한 ML, 군집 분석, 다목적 최적화(MOO) 프레임워크.
- **게재 학술지:** Engineering, 2024.09
- **논문 링크:** [최적 강도·연성을 갖춘 내화성 고엔트로피 합금의 머신러닝 보조 조성 설계](https://www.sciencedirect.com/science/article/pii/S2095809924005113 )

### **26. [재료 생성 모델 FlowLLM, 재료 45,000종 이상의 데이터셋 포함](https://hyper.ai/news/35846)**

- **연구 하이라이트:** [https://hyper.ai/news/35846](https://hyper.ai/news/35846)
- **연구팀:** Meta FAIR, University of Amsterdam
- **관련 연구:** FlowLLM, S.U.N. 재료 생성, LLM, 리만 플로 매칭(RFM), MP-20 데이터셋, LoRA.
- **게재 학술지:** NeurIPS 2024, 2024.10
- **논문 링크:** [FlowLLM: 대형 언어 모델을 기저분포로 사용하는 재료 생성 플로 매칭](https://arxiv.org/pdf/2410.23405)

### **27. [능동학습으로 고엔트로피 산화물 14,000종 식별, 고활성 수소 발생 촉매 4종 선별 성공](https://hyper.ai/news/36352)**

- **연구 하이라이트:** [https://hyper.ai/news/36352](https://hyper.ai/news/36352)
- **연구팀:** Tsinghua의 Xun Wang 연구팀, SJTU의 Liang Wu, IHEP CAS의 Shengqi Chu, Purdue의 Guang Lin, Duke의 Yan Xiang
- **관련 연구:** 능동학습(AL), Kennard-Stone 샘플링, XRD, CrMnCoNiCu 촉매.
- **게재 학술지:** Journal of the American Chemical Society, 2024.10
- **논문 링크:** [능동학습 유도로 높은 H2 생산성을 갖춘 고엔트로피 산화물 발견](https://pubs.acs.org/doi/10.1021/jacs.4c06272)

### **28. [딥러닝 모델 BETE-NET, 초전도 재료 탐색 효율 5배 향상](https://hyper.ai/news/37658)**

- **연구 하이라이트:** [https://hyper.ai/news/37658](https://hyper.ai/news/37658)
- **연구팀:** University of Florida, University of Tennessee
- **관련 연구:** BETE-NET, α²F(ω) 데이터셋, Eliashberg 스펙트럼 함수 데이터셋.
- **게재 학술지:** npj Computational Materials, 2025.01
- **논문 링크:** [전자-포논 스펙트럼 함수의 템퍼링 딥러닝으로 초전도체 발견 가속](https://www.nature.com/articles/s41524-024-01475-4)

### **29. [그래디언트 부스팅 결정 트리(GBDT) 기술로 고엔트로피 합금 내산화성 고정밀 예측 추가 개선](https://hyper.ai/news/37723)**

- **연구 하이라이트:** [https://hyper.ai/news/37723](https://hyper.ai/news/37723)
- **연구팀:** University of Bordeaux, NIMS(일본), NTHU(대만), KU Leuven, WEL Research Institute 공동 연구팀
- **관련 연구:** GBDT 기술, XGBoost 알고리즘, 고온 재료, 고엔트로피 합금(RHEA·RCCA).
- **게재 학술지:** Scripta Materialia, 2025.01
- **논문 링크:** [고온 내산화성 AI 예측 모델로 내화성 고엔트로피 합금 개발 발전](https://doi.org/10.1016/j.scriptamat.2024.116394)

### **30. [분자 설계 프레임워크 RingFormer, 유기 재료 분자의 광전자 특성 정밀 예측](https://hyper.ai/news/37870)**

- **연구 하이라이트:** [https://hyper.ai/news/37870](https://hyper.ai/news/37870)
- **연구팀:** The Hong Kong Polytechnic University
- **관련 연구:** 분자 설계, Transformer 아키텍처, 유기 태양전지, 그래프 신경망, RingFormer.
- **게재 학술지:** AAAI 2025, 2024.12
- **논문 링크:** [RingFormer: 유기 태양전지 특성 예측을 위한 고리 강화 그래프 Transformer](https://doi.org/10.48550/arXiv.2412.09030)

### **31. [무기 역합성 계획 방법 Retrieval-Retro, 무기 재료 합성 효율·정확도 향상](https://hyper.ai/news/37969)**

- **연구 하이라이트:** [https://hyper.ai/news/37969](https://hyper.ai/news/37969)
- **연구팀:** KRICT, KAIST
- **관련 연구:** Retrieval-Retro, 합성곱 VAE, 마스킹된 전구체 완성 검색기, 신경 반응 에너지 검색기.
- **게재 학술지:** NeurIPS 2024, 2024.10
- **논문 링크:** [Retrieval-Retro: 전문가 지식을 활용한 검색 기반 무기 역합성](https://doi.org/10.48550/arXiv.2410.21341)

### **32. [대형 모델로 수소화물 고체 전해질 전도 메커니즘 해독, 신뢰할 수 있는 활성화 에너지 예측 모델 구축](https://hyper.ai/news/39173)**

- **연구 하이라이트:** [https://hyper.ai/news/39173](https://hyper.ai/news/39173)
- **연구팀:** Tohoku University, Sichuan University, Shibaura Institute of Technology
- **관련 연구:** 고체 전해질(SSE), LLM, 제일원리 메타동역학(MetaD).
- **게재 학술지:** Angewandte Chemie-International Edition, 2025.04
- **논문 링크:** [대형 언어 모델 데이터 기반 프레임워크로 전고체 배터리의 2가 수소화물 전해질 복잡성 규명](https://go.hyper.ai/isQRi)

### **33. [머신러닝 기반 테라 규모 질량분석 데이터 검색으로 미지의 화학 반응 발견](https://hyper.ai/news/39224)**

- **연구 하이라이트:** [https://hyper.ai/news/39224](https://hyper.ai/news/39224)
- **연구팀:** Russian Academy of Sciences 등
- **관련 연구:** 질량분석법, ML 기반 검색 엔진 MEDUSA Search, PubChem 데이터베이스.
- **게재 학술지:** Nature Communications, 2025.01
- **논문 링크:** [머신러닝 기반 테라 규모 질량분석 데이터 해독으로 유기 반응 발견](https://go.hyper.ai/ak7bN)

### **34. [확산 모델 기반 생성형 AI 구조 결정 방법 PXRDnet, 복잡한 모의 나노결정 200개 해석 성공](https://hyper.ai/news/39287)**

- **연구 하이라이트:** [https://hyper.ai/news/39287](https://hyper.ai/news/39287)
- **연구팀:** Columbia University, Stanford University
- **관련 연구:** X선 회절, PXRDnet, MP-20-PXRD 벤치마크 데이터셋, Materials Project 데이터베이스, CDVAE 아키텍처, PXRD 회귀기.
- **게재 학술지:** Nature Materials, 2025.04
- **논문 링크:** [확산 모델을 이용한 나노결정 분말 회절 데이터의 제일원리 구조 결정](https://go.hyper.ai/r1K6b)

### **35. [DreaMS 모델, 분자 질량 스펙트럼 2억 개로 세계 최대 질량분석 데이터셋 GeMS 구축](https://hyper.ai/news/40201)**

- **연구 하이라이트:** [https://hyper.ai/news/40201](https://hyper.ai/news/40201)
- **연구팀:** Institute of Organic Chemistry and Biochemistry, Czech Academy of Sciences
- **관련 연구:** GeMS 데이터셋, 지역 민감 해싱(LSH), BERT 아키텍처, 자기지도학습, Fourier 특징, 선형 프로빙.
- **게재 학술지:** Nature Biotechnology, 2025.05
- **논문 링크:** [DreaMS로 수백만 탠덤 질량 스펙트럼에서 분자 표현 자기지도학습](https://go.hyper.ai/uNbqL)

### **36. [등변 머신러닝 프레임워크, 재료의 대규모 전기장 시뮬레이션 가속](https://hyper.ai/news/40600)**

- **연구 하이라이트:** [https://hyper.ai/news/40600](https://hyper.ai/news/40600)
- **연구팀:** Harvard University, Robert Bosch LLC
- **관련 연구:** 머신러닝 프레임워크, 신경망 아키텍처, 재료 진동, 유전 특성, 강유전 히스테리시스.
- **게재 학술지:** Nature Communications, 2025.04
- **논문 링크:** [전기적 응답의 통합 미분 가능 학습](https://go.hyper.ai/18TWg)

### **37. [다중 출처 데이터 통합 방법으로 시멘트 클링커 대체재 25종 선별, 온실가스 12억 톤 감축 효과](https://hyper.ai/news/40742)**

- **연구 하이라이트:** [https://hyper.ai/news/40742](https://hyper.ai/news/40742)
- **연구팀:** Soroush Mahjoubi 및 Elsa A. Olivetti(MIT)
- **관련 연구:** LLM, 다중과제 신경망, 반응성 평가 프레임워크.
- **게재 학술지:** Communication Materials, 2025.05
- **논문 링크:** [이차·천연 시멘트질 전구체의 데이터 기반 재료 선별](https://go.hyper.ai/ZOAaW)

### **38. [UNIMATE, 위상 생성/특성 예측 통합 모델링 최초 달성](https://hyper.ai/news/41186)**

- **연구 하이라이트:** [https://hyper.ai/news/41186](https://hyper.ai/news/41186)
- **연구팀:** Virginia Tech, Meta AI
- **관련 연구:** 메타물질, 3D 위상, 머신러닝, UNIMATE 모델, 기계 메타물질 벤치마크.
- **게재 학술지:** ICML 2025, 2025.06
- **논문 링크:** [UNIMATE: 기계 메타물질 생성·특성 예측·조건 확인을 위한 통합 모델](https://go.hyper.ai/FoAWw)

### **39. [전원자 확산 Transformer 프레임워크, 주기·비주기 원자 시스템 통합 생성 최초 구현](https://hyper.ai/news/41503)**

- **연구 하이라이트:** [https://hyper.ai/news/41503](https://hyper.ai/news/41503)
- **연구팀:** Meta FAIR, Cambridge University, MIT
- **관련 연구:** Transformer, MP20 데이터셋, QM9 데이터셋, GEOM-DRUGS 데이터셋, QMOF 데이터셋.
- **게재 학술지:** ICML 2025, 2025.06
- **논문 링크:** [전원자 확산 Transformer: 분자·재료 통합 생성 모델링](https://go.hyper.ai/27d7U)

### **40. [FASTSOLV 모델, 모든 온도의 소분자 용해도 예측 및 추론 속도 50배 향상](https://hyper.ai/news/43318)**

- **연구 하이라이트:** [https://hyper.ai/news/43318](https://hyper.ai/news/43318)
- **연구팀:** MIT 연구팀
- **관련 연구:** 소분자 용해도 예측, BigSolDB 데이터셋, SolProp 데이터셋, Leeds 데이터셋, FASTSOLV 모델.
- **게재 학술지:** Nature Communication, 2025.08
- **논문 링크:** [우연적 불확실성 한계에서의 데이터 기반 유기물 용해도 예측](https://www.nature.com/articles/s41467-025-62717-7)

### **41. [다중모달 머신러닝 모델 기반의 새로운 방법, 완전한 결정 구조 없이 재료 특성 예측](https://hyper.ai/news/43410)**

- **연구 하이라이트:** [https://hyper.ai/news/43410](https://hyper.ai/news/43410)
- **연구팀:** University of Toronto 화학공학·응용화학과
- **관련 연구:** 다중모달 머신러닝 모델, CoRE-2019 데이터셋, BW20K 데이터셋, QMOF 데이터셋, hMOF 데이터셋.
- **게재 학술지:** Nature Communications, 2025.07
- **논문 링크:** [다중모달 머신러닝으로 금속-유기 골격체 합성과 응용 연결](https://www.nature.com/articles/s41467-025-62717-7)

### **42. [AI 모델 CGformer, 전역 주의 메커니즘을 혁신적으로 통합하여 고엔트로피 재료 연구개발 지원](https://hyper.ai/news/44908)**

- **연구 하이라이트:** [https://hyper.ai/news/44908](https://hyper.ai/news/44908)
- **연구팀:** AIMS-Lab, SJTU의 Jinjin Li·Fuqiang Huang 연구팀
- **관련 연구:** 고엔트로피 재료 연구개발, AI 재료 설계 모델 CGformer, 나트륨 이온 확산 장벽 데이터셋.
- **게재 학술지:** Matter, 2025.08
- **논문 링크:** [CGformer: 재료 특성 예측을 위한 전역 주의 기반 Transformer 강화 결정 그래프 네트워크](https://www.cell.com/matter/abstract/S2590-2385(25)00423-0)

### **43. [새로운 구조 제약 통합 방법 SCIGEN, 모든 사전학습 확산 모델에 적용](https://hyper.ai/news/44973)**

- **연구 하이라이트:** [https://hyper.ai/news/44973](https://hyper.ai/news/44973)
- **연구팀:** MIT의 Mingda Li 연구팀, Michigan State University, Oak Ridge National Laboratory
- **관련 연구:** AL(Archimedean 격자) 재료 데이터베이스, 확산 모델, 결정 구조 생성, DiffCSP 모델.
- **게재 학술지:** Nature Materials, 2025.09
- **논문 링크:** [양자 재료 발견을 위한 생성 모델의 구조 제약 통합](https://www.nature.com/articles/s41563-025-02355-y)

### **44. [물리 정보 기반 생성형 AI 모델 SpectroGen, 단일 모달 입력만으로 실험 상관도 99%의 교차모달 생성](https://hyper.ai/news/45456)**

- **연구 하이라이트:** [https://hyper.ai/news/45456](https://hyper.ai/news/45456)
- **연구팀:** MIT 연구팀
- **관련 연구:** SpectroGen, RRUFF 데이터베이스, VAE 프레임워크, 물리적 사전 모델.
- **게재 학술지:** Matter, 2025.10
- **논문 링크:** [SpectroGen: 교차모달 분광학적 재료 특성화를 가속하는 물리 정보 기반 생성형 AI](https://www.cell.com/matter/abstract/S2590-2385(25)00477-1)

### **45. [MOF-ChemUnity, MOF 전반의 지식을 재구성하여 재료 발견을 "설명 가능한 AI" 시대로 추진](https://hyper.ai/news/46723)**

- **연구 하이라이트:** [https://hyper.ai/news/46723](https://hyper.ai/news/46723)
- **연구팀:** University of Toronto, Clean Energy Innovation Research Centre(NRC 캐나다)
- **관련 연구:** 재료과학, MOF-ChemUnity, CoRE MOF 2019 데이터베이스, QMOF 데이터베이스, LLM, 그래프 증강 RAG.
- **게재 학술지:** ACS Publications, 2025.11
- **논문 링크:** [MOF-ChemUnity: 금속-유기 골격체 연구를 위한 문헌 기반 대형 언어 모델](https://pubs.acs.org/doi/10.1021/jacs.5c11789)

### **46. [경량 범용 퍼텐셜 모델 PET-MAD 공개, 최소 표본으로 전용 모델 수준 정밀도 달성](https://hyper.ai/news/47637)**

- **연구 하이라이트:** [https://hyper.ai/news/47637](https://hyper.ai/news/47637)
- **연구팀:** EPFL
- **관련 연구:** 제일원리 계산, 머신러닝 원자간 퍼텐셜, PET-MAD 모델, Point Edge Transformer 구조.
- **게재 학술지:** Nature Communications
- **논문 링크:** [고급 재료 모델링용 경량 범용 원자간 퍼텐셜 PET-MAD](https://www.nature.com/articles/s41467-025-65662-7)

### **47. [AI 시스템 ChemOntology 공개, 화학 지식 통합으로 반응 경로 탐색 비용 절반으로 감소](https://hyper.ai/news/48069)**

- **연구 하이라이트:** [https://hyper.ai/news/48069](https://hyper.ai/news/48069)
- **연구팀:** Hokkaido University
- **관련 연구:** 퍼텐셜 에너지 표면(PES), 고유 반응 좌표(IRC), 인공 힘 유도 반응(AFIR), ChemOntology.
- **게재 학술지:** ACS Catalysis
- **논문 링크:** [ChemOntology: 반응 경로 탐색을 촉진하는 재사용 가능한 명시적 화학 온톨로지 기반 방법](https://pubs.acs.org/doi/10.1021/acscatal.5c06298)

### **48. [Princeton 등, MOF 자유에너지 예측 LLM 방법 공동 제안, 합성 가능성 고정밀 평가](https://hyper.ai/news/48685)**

- **연구 하이라이트:** [https://hyper.ai/news/48685](https://hyper.ai/news/48685)
- **연구팀:** Princeton University 및 Colorado School of Mines
- **관련 연구:** 금속-유기 골격체(MOF), 자유에너지 예측, 대형 언어 모델(LLM), 열역학 평가.
- **게재 학술지:** JACS (ACS Publications)
- **논문 링크:** [머신러닝을 통한 고정밀·고속 MOF 자유에너지 예측](https://pubs.acs.org/doi/10.1021/jacs.5c13960)

### **49. [Yale University 연구팀, LLM을 조율하여 신뢰도 높은 화학 합성 계획을 생성하는 MOSAIC 모델 제안](https://hyper.ai/news/48806)**

- **연구 하이라이트:** [https://hyper.ai/news/48806](https://hyper.ai/news/48806)
- **연구팀:** Yale University 연구팀
- **관련 연구:** 현대 합성화학, LLM, MOSAIC 모델, 지식 구조화.
- **게재 학술지:** Nature
- **논문 링크:** [AI 보조 화학 합성을 위한 집단지성](https://www.nature.com/articles/s41586-026-10131-4)

### **50. [MIT 등, 재료 합성 경로의 생성형 계획을 구현하는 확산 모델 DiffSyn 제안](https://hyper.ai/news/49252)**

- **연구 하이라이트:** [https://hyper.ai/news/49252](https://hyper.ai/news/49252)
- **연구팀:** MIT, Technical University of Munich 및 Universitat Politècnica de València
- **관련 연구:** 재료 합성 계획, 생성형 확산 모델 DiffSyn, 제올라이트.
- **게재 학술지:** Nature Computational Science
- **논문 링크:** [DiffSyn: 재료 합성 계획을 위한 생성형 확산 접근법](https://www.nature.com/articles/s43588-025-00949-9)

### **51. [University of Michigan·Farasis Energy, 배터리 수명 예측 주기를 대폭 단축하는 "Discovery Learning" 방법 공동 제안](https://hyper.ai/news/49527)**

- **연구 하이라이트:** [https://hyper.ai/news/49527](https://hyper.ai/news/49527)
- **연구팀:** University of Michigan, Ann Arbor의 Ziyou Song 교수 및 Farasis Energy의 Weiran Jiang 연구팀
- **관련 연구:** 배터리 사이클 수명 예측, 발견 학습(DL), 과학 머신러닝, 리튬이온 파우치 셀 데이터셋.
- **게재 학술지:** Nature
- **논문 링크:** [최소 실험으로 배터리 사이클 수명을 예측하는 발견 학습](https://www.nature.com/articles/s41586-025-09951-7)

### **52. [Cornell University, 배터리 전해질 성능을 고정밀 예측·설명하는 SCAN 프레임워크 제안](https://hyper.ai/news/49537)**

- **연구 하이라이트:** [https://hyper.ai/news/49537](https://hyper.ai/news/49537)
- **연구팀:** Cornell University 연구팀
- **관련 연구:** 염-용매 화학, 비수계 전해질(NAE), SCAN 프레임워크, 다중특징 네트워크(MFNet), 동적 라우팅 전략.
- **게재 학술지:** Nature Computational Science
- **논문 링크:** [염-용매 화학을 위한 동적 라우팅 유도 해석 가능한 프레임워크](https://www.nature.com/articles/s43588-026-00955-5)

### **53. [MIT, 재료 내부 결함의 비파괴 특성화·정량화를 위한 파운데이션 대형 모델 DefectNet 제안](https://hyper.ai/news/50122)**

- **연구 하이라이트:** [https://hyper.ai/news/50122](https://hyper.ai/news/50122)
- **연구팀:** MIT 연구팀
- **관련 연구:** 재료과학, 결함 공학, 비파괴 특성화, 진동 스펙트럼 및 포논 상태 밀도(PDoS), DefectNet, 머신러닝 원자간 퍼텐셜(MLIP).
- **게재 학술지:** arXiv
- **논문 링크:** [진동 스펙트럼을 통한 비파괴 결함 식별용 파운데이션 모델](https://arxiv.org/abs/2506.00725)

### **54. [Cornell University, 전자현미경 영상 전 과정 자동 분석을 위한 다중에이전트 플랫폼 EMSeek 제안](https://hyper.ai/news/50298)**

- **연구 하이라이트:** [https://hyper.ai/news/50298](https://hyper.ai/news/50298)
- **연구팀:** Cornell University 연구팀
- **관련 연구:** 전자현미경(EM), 다중에이전트 플랫폼, EMSeek, 재료 분석, 구조 모델링 및 특성 추론.
- **게재 학술지:** Science Advances
- **논문 링크:** [자율 에이전트 플랫폼으로 전자현미경과 재료 분석 연결](https://www.science.org/doi/10.1126/sciadv.aed0583)

## **AI+ 동물학-식물학**

### **1. [SBeA, 퓨샷 학습 프레임워크 기반 동물 사회적 행동 분석](https://hyper.ai/news/29353)**

- **연구 하이라이트:** [https://hyper.ai/news/29353](https://hyper.ai/news/29353)
- **연구팀:** Shenzhen Institutes of Advanced Technology, CAS의 Pengfei Wei 연구팀
- **관련 연구:** PAIR-R24M 데이터셋, 양방향 전이학습, 비지도학습, 인공 신경망, 개체 식별 모델. 다중 동물 개체 식별 정확도 90% 초과.
- **게재 학술지:** Nature Machine Intelligence, 2024.01
- **논문 링크:** [퓨샷 학습 프레임워크 기반 다중 동물 3D 사회적 자세 추정·개체 식별·행동 임베딩](https://www.nature.com/articles/s42256-023-00776-5)

### **2. [Siamese 네트워크 기반 딥러닝 방법, 배아 발달 과정 자동 포착](https://hyper.ai/news/28419)**

- **연구 하이라이트:** [https://hyper.ai/news/28787](https://hyper.ai/news/28419)
- **연구팀:** 시스템 생물학자 Patrick Müller 및 University of Konstanz 연구팀
- **관련 연구:** ImageNet 데이터셋, Siamese 네트워크, 딥러닝, 전이학습, 삼중항 손실 학습, 반복 학습, 하위과제 학습. 인간 개입 없이 배아 발달의 핵심 단계 식별.
- **게재 학술지:** Nature Methods, 2023.11
- **논문 링크:** [딥러닝을 이용한 발달 시점과 속도 규명](https://www.nature.com/articles/s41592-023-02083-8)

### **3. [최적 수확일 예측을 위한 드론 기반 식물 표현형 데이터 수집의 체계적 파이프라인](https://hyper.ai/news/28303)**

- **연구 하이라이트:** [https://hyper.ai/news/28303](https://hyper.ai/news/28303)
- **연구팀:** University of Tokyo·Chiba University 연구팀
- **관련 연구:** 수익 예측 모델, 분할 모델, 대화형 주석, LabelMe, 비선형 회귀 모델, BiSeNet 모델.
- **게재 학술지:** Plant Phenomics, 2023.09
- **논문 링크:** [드론 기반 수확 데이터 예측으로 농장 식품 손실 감소 및 농가 소득 개선](https://spj.science.org/doi/10.34133/plantphenomics.0086#body-ref-B4)

### **4. [AI 카메라 경보 시스템, 호랑이와 다른 종 정확히 구별](https://hyper.ai/news/27954)**

- **연구 하이라이트:** [https://hyper.ai/news/27954](https://hyper.ai/news/27954)
- **연구팀:** Clemson University 연구팀
- **관련 연구:** TrailGuard AI. 관련 영상을 보호구역 관리자의 기기로 1분 이내 전송함.
- **게재 학술지:** BioScience, 2023.09
- **논문 링크:** [AlphaMissense를 이용한 프로테옴 전체의 미스센스 변이 영향 정밀 예측](https://www.science.org/doi/10.1126/science.adg7492) (참고: 제공된 원래 링크가 제목과 일치하지 않는 것으로 보이나 원문에 따라 그대로 유지함).

### **5. [Labrador retriever 데이터와 모델 3종 비교로 탐지견 성능에 영향을 미치는 행동 특성 규명](https://hyper.ai/news/25472)**

- **연구 하이라이트:** [https://hyper.ai/news/25472](https://hyper.ai/news/25472)
- **연구팀:** Abigail Wexner Research Institute at Nationwide Children's Hospital 및 Rocky Vista University
- **관련 연구:** AT 검사, Env 검사, 랜덤 포레스트, 서포트 벡터 머신, 로지스틱 회귀, PCA, RFECV.
- **게재 학술지:** Scientific Reports, 2023.08
- **논문 링크:** [개 후각 탐지 프로그램의 행동 선발에 대한 머신러닝 예측 및 분류](https://www.nature.com/articles/s41598-023-39112-7)

### **6. [얼굴 인식용 ArcFace 분류 헤드 기반 다종 영상 인식 모델](https://hyper.ai/news/25164)**

- **연구 하이라이트:** [https://hyper.ai/news/25164](https://hyper.ai/news/25164)
- **연구팀:** University of Hawaii 연구팀
- **관련 연구:** [고래류 데이터셋](https://github.com/knshnb/kaggle-happywhale-1st-place), 영상 자르기 모델, 영상 인식 모델, YOLOv5, Detic. 평균 정확도 0.869 달성.
- **게재 학술지:** Methods in Ecology and Evolution, 2023.07
- **논문 링크:** [사진 식별 딥러닝 접근법, 고래류 24종에서 높은 성능 입증](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14167)

### **7. [Python API·컴퓨터 비전 API로 일본 벚꽃 개화 관측](https://hyper.ai/news/24512)**

- **연구 하이라이트:** [https://hyper.ai/news/24512](https://hyper.ai/news/24512)
- **연구팀:** Monash University 연구팀(호주)
- **관련 연구:** 소셜 네트워크 사이트(SNS) 데이터, Google Cloud Vision AI, 머신러닝 모델.
- **게재 학술지:** Flora, 2023.07
- **논문 링크:** [소셜 네트워크 사이트 영상 분석으로 드러난 일본 전역 벚꽃 개화의 시공간적 특징](https://www.sciencedirect.com/science/article/abs/pii/S0367253023001019)

### **8. [머신러닝 기반 집단유전학 방법으로 포도 풍미 형성 메커니즘 규명](https://hyper.ai/news/24442)**

- **연구 하이라이트:** [https://hyper.ai/news/24442](https://hyper.ai/news/24442)
- **연구팀:** Agricultural Genomics Institute at Shenzhen, CAS
- **관련 연구:** [포도나무 유전체 서열](https://github.com/zhouyflab/Grapevine_Adaptive_Maladaptive_Introgression), 머신러닝.
- **게재 학술지:** Proceedings of the National Academy of Sciences, 2023.06
- **논문 링크:** [포도나무 가축화의 적응적·부적응적 유전자 이입](https://www.pnas.org/doi/abs/10.1073/pnas.2222041120)

### **9. [종설: AI로 생물정보학 연구를 더 효율적으로 개척](https://hyper.ai/news/33931)**

- **연구 하이라이트:** [https://hyper.ai/news/33931](https://hyper.ai/news/33931)
- **주요 내용:** AI는 상동성 검색, 다중 서열 정렬, 계통수 구축, 유전체 서열 분석, 유전자 발견 등 생물학 분야에서 풍부한 응용 사례를 갖고 있습니다. 생물학 연구자가 데이터 분석에 머신러닝 도구를 능숙하게 통합하면 과학적 발견을 가속하고 연구 효율을 높일 수 있습니다.

### **10. [BirdFlow 모델, 철새 비행 경로 정밀 예측](https://hyper.ai/news/34781)**

- **연구 하이라이트:** [https://hyper.ai/news/33942](https://hyper.ai/news/33942)
- **연구팀:** UMass Amherst, Cornell University
- **관련 연구:** 컴퓨터 모델링, eBird 데이터셋, 마르코프 모델, 하이퍼매개변수 그리드 탐색, 엔트로피 보정, k주 예측.
- **게재 학술지:** Methods in Ecology and Evolution, 2023.01
- **논문 링크:** [BirdFlow: eBird 데이터로 계절별 조류 이동 학습](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14052)

### **11. [새로운 고래 생물음향 모델, 고래류 8종 식별](https://hyper.ai/news/34781)**

- **연구 하이라이트:** [https://hyper.ai/news/34781](https://hyper.ai/news/34781)
- **연구팀:** Google 연구팀
- **관련 연구:** Mel 스케일 주파수 축, 압축된 카운트 진폭, TensorFlow SavedModel API를 통한 독립 호출, 합성곱 신경망, 혹등고래 소리 탐지 분류 모델, 대화형 시각화 도구 "Pattern Radio". 대왕고래·긴수염고래에 특화된 모델로, 알려진 고래 94종 중 서로 다른 8종을 식별할 수 있음.
- **게재 학술지:** Google Research, 2024.09
- **논문 링크:** [휘파람·노래·보잉·바이오트왕: AI로 고래 발성 인식](https://research.google/blog/whistles-songs-boings-and-biotwangs-recognizing-whale-vocalizations-with-ai)

### **12. [머신러닝으로 향유고래 음성 알파벳 분리, 인간 언어와 매우 유사하며 더 강한 정보 전달 능력](https://hyper.ai/news/33433)**

- **연구 하이라이트:** [https://hyper.ai/news/33433](https://hyper.ai/news/33433)
- **연구팀:** Pratyusha Sharma(MIT) 및 Project CETI 연구팀
- **관련 연구:** DSWP 데이터셋, 머신러닝, 향유고래 발성의 구조적 성격 규명.
- **게재 학술지:** Nature Communications, 2024.05
- **논문 링크:** [향유고래 발성의 맥락적·조합적 구조](https://www.nature.com/articles/s41467-024-47221-8)

### **13. [PlantLncBoost 모델, 종 간 lncRNA 예측 정확도 최대 96%](https://hyper.ai/news/40667)**

- **연구 하이라이트:** [https://hyper.ai/news/40667](https://hyper.ai/news/40667)
- **연구팀:** Shandong University of Technology, Beijing Forestry University, Guangdong Academy of Agricultural Sciences, University of São Paulo, Rosalind Franklin University of Medicine and Science, Umeå University
- **관련 연구:** GreeNC 데이터베이스, PlantLncBoost 알고리즘, 랜덤 포레스트 중요도(RFI) 전략, 재귀적 특징 제거(RFE) 알고리즘.
- **게재 학술지:** New Phytologist, 2024.05
- **논문 링크:** [PlantLncBoost: 식물 lncRNA 식별의 핵심 특징과 정확도·일반화의 대폭 개선](https://go.hyper.ai/F7pkc)

### **14. [Perch 2.0, 약 15,000종으로 생물음향 분류·탐지 SOTA 경신](https://hyper.ai/news/42807)**

- **연구 하이라이트:** [https://hyper.ai/news/42807](https://hyper.ai/news/42807)
- **연구팀:** Google DeepMind, Google Research
- **관련 연구:** 생물음향학, Perch 2.0, Xeno-Canto 데이터셋, iNaturalist 데이터셋, Tierstimmenarchiv 데이터셋, FSD50K 데이터셋, EfficientNet-B3 아키텍처.
- **게재 학술지:** arXiv, 2025.08
- **논문 링크:** [Perch 2.0: 생물음향학을 위한 알락해오라기의 교훈](https://arxiv.org/abs/2508.04665)

## **AI+ 농업-임업-축산**

### **1. [합성곱 신경망으로 벼 수확량 신속·정확 추정](https://hyper.ai/news/26100)**

- **연구 하이라이트:** [https://hyper.ai/news/26100](https://hyper.ai/news/26100)
- **연구팀:** Kyoto University 연구팀
- **관련 연구:** 합성곱 신경망. CNN 모델은 촬영 각도·시각·시기가 다른 현장 사진을 정확히 분석하여 안정적인 수확량 예측을 달성함.
- **게재 학술지:** Plant Phenomics, 2023.07
- **논문 링크:** [딥러닝으로 지상 RGB 영상에서 즉각적이고 다용도인 벼 수확량 추정](https://spj.science.org/doi/10.34133/plantphenomics.0073)

### **2. [YOLOv5 알고리즘 설계 모델로 모돈 자세·새끼돼지 출산 감시](https://hyper.ai/news/25131)**

- **연구 하이라이트:** [https://hyper.ai/news/25131](https://hyper.ai/news/25131)
- **연구팀:** Nanjing Agricultural University 연구팀
- **관련 연구:** YOLOv5, 모돈 자세·새끼돼지 탐지 모델. 분만 시작 5시간 전 경보가 가능하며 전체 평균 정확도 92.9%.
- **게재 학술지:** Sensors, 2023.01
- **논문 링크:** [임베디드 보드 구현을 위한 모돈 분만 조기 경보 및 감독](https://www.mdpi.com/1424-8220/23/2/727)

### **3. [실험실 관찰·머신러닝을 결합하여 스트레스받는 토마토·담배 식물의 초음파가 공기를 통해 전달됨을 입증](https://hyper.ai/news/24547)**

- **연구 하이라이트:** [https://hyper.ai/news/24547](https://hyper.ai/news/24547)
- **연구팀:** Tel Aviv University 연구팀(이스라엘)
- **관련 연구:** 머신러닝 모델, SVM, Basic, MFCC, Scattering 네트워크, 신경망 모델, 하나 제외 교차검증. 인식 정확도 99.7%; 토마토의 비명은 4-6일째 최고치.
- **게재 학술지:** Cell, 2023.03
- **논문 링크:** [스트레스받는 식물이 내는 소리는 공기를 통해 전달되며 정보를 담고 있음](https://doi.org/10.1016/j.cell.2023.03.009)

### **4. [드론 + AI 영상 분석으로 산림 해충 탐지](https://hyper.ai/news/23807)**

- **연구 하이라이트:** [https://hyper.ai/news/23807](https://hyper.ai/news/23807)
- **연구팀:** University of Lisbon 연구팀
- **관련 연구:** FRCNN, YOLO 모델. YOLO의 탐지 성능이 FRCNN보다 높았음. 드론·AI 모델 결합으로 소나무 행렬나방 둥지의 효과적 조기 탐지가 가능함.
- **게재 학술지:** NeoBiota, 2023.05
- **논문 링크:** [UAV 기반 방법을 이용한 소나무 행렬나방 Thaumetopoea pityocampa 둥지 조기 탐지 시험](https://neobiota.pensoft.net/article/95692/)

### **5. [컴퓨터 비전 + 딥러닝으로 젖소 절뚝거림 탐지 시스템 개발](https://hyper.ai/news/33957)**

- **연구 하이라이트:** [https://hyper.ai/news/33957](https://hyper.ai/news/33957)
- **연구팀:** Newcastle University 및 Fera Science Ltd. 연구팀
- **관련 연구:** 컴퓨터 비전, 딥러닝, Mask-RCNN 알고리즘, SORT 알고리즘, CatBoost 알고리즘. 정확도 94%-100%.
- **게재 학술지:** Nature, 2023.03
- **논문 링크:** [여러 소의 절뚝거림 탐지를 위한 딥러닝 자세 추정](https://www.nature.com/articles/s41598-023-31297-1)

## **AI+ 기상학**

### **1. [종설: 데이터 기반 머신러닝 일기예보 모델](https://hyper.ai/news/28124)**

- **연구 하이라이트:** [https://hyper.ai/news/28124](https://hyper.ai/news/28124)
- **주요 내용:** 수치 일기예보(NWP)는 일기예보의 주류 방법입니다. 수치 적분으로 격자별 지구 시스템 상태를 계산하는 연역적 추론 과정입니다. 2022년 이후 일기예보 머신러닝 모델은 연이어 돌파구를 달성했으며, 일부는 European Centre for Medium-Range Weather Forecasts(ECMWF)의 고정밀 예보에 필적합니다.

### **2. [종설: 우박 폭풍 중심부의 데이터 수집과 대형 모델을 이용한 극한 기상 예측](https://hyper.ai/news/25874)**

- **연구 하이라이트:** [https://hyper.ai/news/25874](https://hyper.ai/news/25874)
- **주요 내용:** 2021년 Alibaba DAMO Academy와 National Meteorological Center는 일기예보용 AI 알고리즘을 공동 개발하여 여러 심각한 대류성 기상 현상을 성공적으로 예측했습니다. 같은 해 9월 DeepMind는 심층 생성 모델을 이용한 실시간 강수 예측 논문을 *Nature*에 발표했습니다.
2023년 초 DeepMind는 GraphCast를 공식 공개했습니다. 이 모델은 1분 이내에 0.25° 해상도로 향후 10일간의 전 세계 날씨를 예측할 수 있습니다. 4월에는 Nanjing University of Information Science and Technology가 Shanghai AI Laboratory와 협력하여 기상 대형 모델 "FengWu"를 개발해 GraphCast보다 오차를 더 줄였습니다.
이후 Huawei는 대형 모델 "Pangu-Weather"를 공개했습니다. 3D 신경망 도입으로 Pangu의 예측 정확도가 가장 정확한 NWP 예보 시스템을 최초로 능가했습니다. 최근 Tsinghua University와 Fudan University도 각각 "NowCastNet"과 "FuXi" 모델을 잇달아 공개했습니다.

### **3. [전 지구 폭풍 해상 시뮬레이션·머신러닝으로 극한 강수를 정밀 예측하는 새로운 알고리즘 개발](https://hyper.ai/news/24995)**

- **연구 하이라이트:** [https://hyper.ai/news/24995](https://hyper.ai/news/24995)
- **연구팀:** LEAP Lab at Columbia University
- **관련 연구:** 머신러닝, Baseline-NN, Org-NN, 신경망.
- **게재 학술지:** PNAS, 2023.03
- **논문 링크:** [대류 조직화의 암묵적 학습으로 강수의 확률적 성격 설명](https://www.pnas.org/doi/10.1073/pnas.2216158120)

### **4. [랜덤 포레스트 기반 머신러닝 모델 CSU-MLP, 중기 악기상 예측](https://hyper.ai/news/33966)**

- **연구 하이라이트:** [https://hyper.ai/news/33966](https://hyper.ai/news/33966)
- **연구팀:** Colorado State University 및 NOAA
- **관련 연구:** GEFS/R 데이터셋, 머신러닝, 보간 처리, RF. 중기(4-8일) 악기상을 정밀 예측할 수 있음.
- **게재 학술지:** Weather and Forecasting, 2022.08
- **논문 링크:** [중기 악기상 예보의 새 패러다임: 확률적 랜덤 포레스트 기반 예측](https://arxiv.org/abs/2208.02383)

### **5. [종단간 데이터 기반 일기예보 시스템 Aardvark Weather, 기존 방법보다 예측 수십 배 가속](https://hyper.ai/news/38605)**

- **연구 하이라이트:** [https://hyper.ai/news/38605](https://hyper.ai/news/38605)
- **연구팀:** Cambridge University, The Alan Turing Institute, University of Toronto, Microsoft Research, ECMWF, British Antarctic Survey, Google DeepMind
- **관련 연구:** 일기예보 시스템, HadISD 데이터셋, 협력 마이크로파-적외선 관측망, ATOVS 시스템, ASCAT 산란계 데이터, ERA5 재분석 데이터셋, 경량 합성곱 네트워크.
- **게재 학술지:** Nature, 2025.03
- **논문 링크:** [종단간 데이터 기반 일기예보](https://www.nature.com/articles/s41586-025-08897-0)

### **6. [머신러닝 일기예보 시스템 FCN3, 단일 GPU 초고속 추론 지원](https://hyper.ai/news/42456)**

- **연구 하이라이트:** [https://hyper.ai/news/42456](https://hyper.ai/news/42456)
- **연구팀:** NVIDIA, Lawrence Berkeley National Laboratory (LBNL), UC Berkeley, Caltech
- **관련 연구:** 수치 일기예보, FourCastNet 3, 머신러닝, ERA5 데이터셋, 구면 신경 연산자 설계, 하이브리드 병렬 전략.
- **게재 학술지:** arXiv, 2025.07
- **논문 링크:** [FourCastNet 3: 대규모 확률적 머신러닝 일기예보를 위한 기하학적 접근법](https://arxiv.org/pdf/2507.12144)

### **7. [관측소 36개 기반 인도 몬순 예보 모델, 도시 규모의 세밀한 예보 달성](https://hyper.ai/news/44271)**

- **연구 하이라이트:** [https://hyper.ai/news/44271](https://hyper.ai/news/44271)
- **연구팀:** IIT Bombay, University of Maryland
- **관련 연구:** 합성곱 신경망(CNN), 전이학습(CNN-TL), 일기예보, 사건 동기화 방법, 강수 예측.
- **게재 학술지:** SSRN, 2025.08
- **논문 링크:** [Mumbai 초국지적 극한 강수 예보: 합성곱 신경망 전이학습 기반 상세화 접근법](https://go.hyper.ai/j05Vt)

### **8. [ACE2, 4개월 계절 예보를 단 2분에 완료](https://hyper.ai/news/44473)**

- **연구 하이라이트:** [https://hyper.ai/news/44473](https://hyper.ai/news/44473)
- **연구팀:** Met Office Hadley Centre, University of Exeter, Allen Institute for AI (Ai2)
- **관련 연구:** 계절 예보, ERA5 재분석 데이터셋, Global Precipitation Climatology Project(GPCP) v2.3 데이터셋, ACE2 머신러닝 대기 모델.
- **게재 학술지:** npj Climate and Atmospheric Science, 2025.08
- **논문 링크:** [재분석 데이터로 학습한 머신러닝 기상 모델의 능숙한 전 지구 계절 예측](https://go.hyper.ai/YyRfT)

### **9. [증분 일기예보 모델 VA-MoE 공개, 매개변수 75% 감소로 SOTA 성능 달성](https://hyper.ai/news/45152)**

- **연구 하이라이트:** [https://hyper.ai/news/45152](https://hyper.ai/news/45152)
- **연구팀:** HKUST, Zhejiang University 등
- **관련 연구:** 증분 일기예보, VA-MoE, ERA5 데이터셋, 2단계 학습 패러다임, Transformer, 다중과제 결합 손실 메커니즘, 기상 예보.
- **게재 학술지:** ICCV25, 2025.07
- **논문 링크:** [VA-MoE: 증분 일기예보를 위한 변수 적응형 전문가 혼합](https://arxiv.org/abs/2412.02503)

### **10. [명시적 롤링 확산 모델(ERDM) 공개, 장기 예측 문제 해결 및 중장기 예보에서 EDM 기준선 우위 유지](https://hyper.ai/news/45367)**

- **연구 하이라이트:** [https://hyper.ai/news/45367](https://hyper.ai/news/45367)
- **연구팀:** NVIDIA
- **관련 연구:** 중기 일기예보, 점진적 잡음 스케줄링, 명시적 확산 모델(EDM), 명시적 롤링 확산 모델(ERDM), Navier-Stokes 유체역학 벤치마크 데이터셋, ERA5 재분석 데이터셋, 잡음 스케줄링 메커니즘, 확률 플로 상미분방정식(ODE), 잡음 제거 네트워크.
- **게재 학술지:** NeurIPS 2025, 2025.06
- **논문 링크:** [확률적 일기예보를 위한 명시적 롤링 확산 모델](https://doi.org/10.48550/arXiv.2506.20024)

### **11. [새로운 잠재 확산 모델 OmniCast 공개, 자기회귀 일기예보 모델의 오차 누적 해결](https://hyper.ai/news/45701)**

- **연구 하이라이트:** [https://hyper.ai/news/45701](https://hyper.ai/news/45701)
- **연구팀:** UCLA 연구팀, Argonne National Laboratory
- **관련 연구:** 새로운 잠재 확산 모델 OmniCast, 고정밀 확률적 S2S 일기예보, 변분 오토인코더(VAE), Transformer 모델, 결합 시공간 샘플링 방법, ERA5 기본 데이터셋, WeatherBench2(WB2) 테스트 세트, ChaosBench 테스트 세트, UNet 아키텍처.
- **게재 학술지:** NeurIPS 2025, 2025.10
- **논문 링크:** [OmniCast: 여러 시간 규모의 일기예보를 위한 마스킹 잠재 확산 모델](https://go.hyper.ai/YANIu)

### **12. [NVIDIA, 장기 일기예보의 AI 병목을 돌파하는 새로운 장거리 증류 방법 제안](https://hyper.ai/news/48471)**

- **연구 하이라이트:** [https://hyper.ai/news/48471](https://hyper.ai/news/48471)
- **연구팀:** NVIDIA Research, University of Washington
- **관련 연구:** AI 일기예보 모델, 자기회귀 아키텍처, 계절내-계절(S2S) 예보, 장거리 증류.
- **게재 학술지:** arXiv
- **논문 링크:** [장거리 증류: 모의 기후 10,000년을 긴 시간 간격의 AI 기상 모델로 증류](https://arxiv.org/abs/2512.22814)

### **13. [공동 연구팀, 초고속 지역 해양 예보를 위한 그래프 신경망 모델 SeaCast 제안](https://hyper.ai/news/49553)**

- **연구 하이라이트:** [https://hyper.ai/news/49553](https://hyper.ai/news/49553)
- **연구팀:** University of Helsinki, Euro-Mediterranean Center on Climate Change (CMCC), University of Salento
- **관련 연구:** 지역 해양 예보, 그래프 신경망(GNN), SeaCast 모델, Mediterranean Forecasting System(MedFS), 대기 강제력장.
- **게재 학술지:** Scientific Reports
- **논문 링크:** [그래프 기반 딥러닝을 통한 정밀 지중해 예보](https://www.nature.com/articles/s41598-025-31177-w)

## **AI+ 천문학**

### **1. [PRIMO 알고리즘, 블랙홀 주변 광전파 법칙 학습으로 더 선명한 블랙홀 영상 재구성](https://hyper.ai/news/23698)**

- **연구 하이라이트:** [https://hyper.ai/news/23698](https://hyper.ai/news/23698)
- **연구팀:** Institute for Advanced Study (Princeton)
- **관련 연구:** PRIMO 알고리즘, PCA, GRMHD. PRIMO가 블랙홀 영상을 재구성함.
- **게재 학술지:** The Astrophysical Journal Letters, 2023.04
- **논문 링크:** [PRIMO로 재구성한 M87 블랙홀 영상](https://iopscience.iop.org/article/10.3847/2041-8213/acc32d/pdf)

### **2. [모의 데이터로 컴퓨터 비전 알고리즘을 학습하여 천문 영상 선명화·"복원"](https://hyper.ai/news/33975)**

- **연구 하이라이트:** [https://hyper.ai/news/33975](https://hyper.ai/news/33975)
- **연구팀:** Tsinghua University 및 Northwestern University
- **관련 연구:** [GalSim](https://github.com/GalSim-developers/GalSim), [COSMOS](https://doi.org/10.5281/zenodo.3242143), 컴퓨터 비전 알고리즘, CNN, Richardson-Lucy 알고리즘, 펼침 ADMM 신경망.
- **게재 학술지:** Monthly Notices of the Royal Astronomical Society, 2023.06
- **논문 링크:** [펼침 플러그앤플레이 ADMM을 이용한 약한 중력렌즈용 은하 영상 디콘볼루션](https://www.nature.com/articles/s41421-023-00543-1)

### **3. [비지도 머신러닝 알고리즘 Astronomaly로 기존에 놓친 이상 현상 발견](https://hyper.ai/news/26316)**

- **연구 하이라이트:** [https://hyper.ai/news/26316](https://hyper.ai/news/26316)
- **연구팀:** University of the Western Cape(UWC) 연구자들
- **관련 연구:** CNN, 비지도 머신러닝, Astronomaly, PCA, 고립 포레스트, LOF 알고리즘, iForest 알고리즘, NS 알고리즘, DR 알고리즘. 이상 점수가 가장 높은 영상 2,000개에서 이상 현상 1,635개 발견.
- **게재 학술지:** arXiv, 2023.09
- **논문 링크:** [대규모 Astronomaly: 은하 400만 개에서 이상 현상 탐색](https://arxiv.org/abs/2309.08660)

### **4. [머신러닝 기반 CME 식별·매개변수 추출 방법](https://hyper.ai/news/31870)**

- **연구 하이라이트:** [https://hyper.ai/news/31870](https://hyper.ai/news/31870)
- **연구팀:** State Key Laboratory of Space Weather, National Space Science Center, CAS
- **관련 연구:** 머신러닝, 신경망, Otsu 알고리즘, 궤적 매칭 알고리즘, 자동 식별, 매개변수 추출, CACTus, CORIMP, SEEDS. 코로나 질량 방출 식별 가능.
- **게재 학술지:** THE ASTROPHYSICAL JOURNAL, 2024.04
- **논문 링크:** [머신러닝 기반 코로나 질량 방출 운동학 매개변수 결정 알고리즘](https://iopscience.iop.org/article/10.3847/1538-4365/ad2dea)

### **5. [딥러닝으로 중성 탄소 흡수선 107건 발견](https://hyper.ai/news/32210)**

- **연구 하이라이트:** [https://hyper.ai/news/32210](https://hyper.ai/news/32210)
- **연구팀:** Shanghai Astronomical Observatory, CAS의 Jian Ge 연구원이 이끄는 국제 연구팀
- **관련 연구:** 딥러닝 방법, SDSS DR12, 합성곱 신경망 모델. 초기 우주의 중성 원자 탄소 흡수체 107건 발견, 탐지 정밀도 99.8%.
- **게재 학술지:** MNRAS, 2024.05
- **논문 링크:** [심층 신경망으로 희귀 중성 원자 탄소 흡수체 탐지](https://doi.org/10.1093/mnras/stae799)

### **6. [StarFusion 모델, 고공간해상도 영상 예측 달성](https://hyper.ai/news/34254)**

- **연구 하이라이트:** [https://hyper.ai/news/34254](https://hyper.ai/news/34254)
- **연구팀:** State Key Laboratory of Earth Surface Processes and Resource Ecology, BNU의 Jin Chen 연구팀
- **관련 연구:** 딥러닝 방법, 원격탐사 영상, 고공간해상도 영상 예측, 이중 스트림 시공간 분리 융합 아키텍처 모델 StarFusion 제안, Gaofen-1 데이터셋, Sentinel-2 위성 데이터셋, SRGAN-STF 모델, 선형 회귀 모델, 다변량 회귀 모델.
- **게재 학술지:** Journal of Remote Sensing, 2024.07
- **논문 링크:** [고공간해상도 영상의 하이브리드 시공간 융합 방법: 농업 경관의 Gaofen-1·Sentinel-2 융합](https://spj.science.org/doi/10.34133/remotesensing.0159)

### **7. [SD3 기반 위성 영상 생성 방법 개발, 현재까지 최대 규모 원격탐사 데이터셋 EcoMapper 구축](https://hyper.ai/news/41041)**

- **연구 하이라이트:** [https://hyper.ai/news/41041](https://hyper.ai/news/41041)
- **연구팀:** Technical University of Munich, University of Zurich
- **관련 연구:** 원격탐사 데이터셋 EcoMapper, Stable Diffusion 3, DiffusionSat, 다중조건 영상 생성, 위성 영상 생성.
- **게재 학술지:** ICML 2025, 2024.06
- **논문 링크:** [EcoMapper: 기후 인식 위성 영상을 위한 생성 모델링](https://go.hyper.ai/VFRWu)

### **8. [지리공간 AI Earth AI, 핵심 데이터 3종에 집중하여 지리공간 추론 역량 64% 향상](https://hyper.ai/news/45528)**

- **연구 하이라이트:** [https://hyper.ai/news/45528](https://hyper.ai/news/45528)
- **연구팀:** Google Research, Google X, Google Cloud
- **관련 연구:** 지리공간 AI, RS-Landmarks 데이터셋, RS-WebLI 데이터셋, RS-Global 데이터셋, Earth AI, 파운데이션 모델(FM), 대형 언어 모델(LLM), 원격탐사 파운데이션 모델, 공간 정렬 + 표현 통합, 지리공간 추론.
- **게재 학술지:** arXiv, 2024.10
- **논문 링크:** [Earth AI: 파운데이션 모델·교차모달 추론으로 지리공간 통찰 개척](https://doi.org/10.48550/arXiv.2510.18318)

### **9. [최초의 천문 다중모달 파운데이션 모델 AION-1 탄생, 천체 2억 개로 사전학습](https://hyper.ai/news/46802)**

- **연구 하이라이트:** [https://hyper.ai/news/46802](https://hyper.ai/news/46802)
- **연구팀:** UC Berkeley, Cambridge, Oxford 및 전 세계 연구기관 10곳 이상의 연구팀
- **관련 연구:** AION-1, 다중모달 우주론 데이터셋, 토큰화 방식, Transformer 인코더-디코더 구조, ResNet 구조.
- **게재 학술지:** NeurIPS 2025, 2025.10
- **논문 링크:** [AION-1: 천문과학을 위한 전모달 파운데이션 모델](ttps://openreview.net/forum?id=6gJ2ZykQ5W)

### **10. [새로운 데이터 기반 파이프라인, CNN으로 퀘이사 810,000개에서 희귀 렌즈 표본 7개 정밀 식별](https://hyper.ai/news/47240)**

- **연구 하이라이트:** [https://hyper.ai/news/47240](https://hyper.ai/news/47240)
- **연구팀:** Stanford, SLAC National Accelerator Laboratory, Peking University, INAF - Brera Astronomical Observatory, UCL, UC Berkeley 등
- **관련 연구:** 합성곱 신경망(CNN), DESI 데이터셋, 강한 중력렌즈, 퀘이사, 블랙홀 연구, 은하 공동 진화, FastSpec 목록.
- **게재 학술지:** arXiv, 2024.10
- **논문 링크:** [DESI DR1에서 발견된 강한 렌즈로 작용하는 퀘이사](https://arxiv.org/abs/2511.02009)

### **11. [ESA 연구팀, 약 1억 건 Hubble 기록에서 희귀 천체를 효율적으로 선별하는 준지도 방법 AnomalyMatch 제안](https://hyper.ai/news/49138)**

- **연구 하이라이트:** [https://hyper.ai/news/49138](https://hyper.ai/news/49138)
- **연구팀:** European Space Agency(ESA) 산하 European Space Astronomy Centre(ESAC)
- **관련 연구:** 천체물리학적 이상 현상, 준지도 이진 분류, 능동학습, AnomalyMatch, Hubble Legacy Archive.
- **게재 학술지:** Astronomy & Astrophysics
- **논문 링크:** [AnomalyMatch로 Hubble Legacy Archive의 천체 잘라낸 영상 9,960만 개에서 천체물리학적 이상 현상 식별](https://doi.org/10.1051/0004-6361/202555512)

### **12. [University of Warwick, RAVEN 검증 파이프라인으로 새로운 외계행성 118개 확인](https://hyper.ai/news/50073)**

- **연구 하이라이트:** [https://hyper.ai/news/50073](https://hyper.ai/news/50073)
- **연구팀:** University of Warwick 연구팀
- **관련 연구:** 외계행성 검증, Transiting Exoplanet Survey Satellite(TESS), RAVEN 파이프라인, 합성 학습 데이터셋, 거짓양성 제거.
- **게재 학술지:** arXiv
- **논문 링크:** [RAVEN: 외계행성 순위 평가 및 검증](https://arxiv.org/abs/2509.17645)

### **13. [University of Warwick, δ Scuti 별의 성진동 매개변수를 고정밀 예측하는 앙상블 학습 프레임워크 제안](https://hyper.ai/news/50946)**

- **연구 하이라이트:** [https://hyper.ai/news/50946](https://hyper.ai/news/50946)
- **연구팀:** University of Warwick 연구팀
- **관련 연구:** δ Scuti 별, 성진동학, TESS 광도곡선 데이터, 앙상블 머신러닝 프레임워크, 대주파수 간격 Δν.
- **게재 학술지:** The Astronomical Journal
- **논문 링크:** [TESS로 관측한 δ Scuti 별의 성진동 지수 추정을 위한 앙상블 머신러닝 접근법](https://beta.iopscience.iop.org/article/10.3847/1538-3881/ae4bd8)

### **14. [스페인 연구팀, 천문 영상의 위성 줄무늬를 AI로 자동 탐지하는 StreakMind 시스템 제안](https://hyper.ai/news/51385)**

- **연구 하이라이트:** [https://hyper.ai/news/51385](https://hyper.ai/news/51385)
- **연구팀:** Spanish Royal Naval Observatory(ROA) 및 기타 기관
- **관련 연구:** 지구근접천체(NEO) 탐지, 행성 방어, 천문 영상 줄무늬 탐지, StreakMind 시스템, YOLO11.
- **게재 학술지:** arXiv
- **논문 링크:** [StreakMind: 자동 데이터베이스 통합을 갖춘 천문 영상 위성 줄무늬 AI 탐지·분석](https://hyper.ai/papers/2605.03429)

## **AI+ 자연재해**

### **1. [머신러닝으로 향후 40년 지반 침하 위험 예측](https://hyper.ai/news/30173)**

- **연구 하이라이트:** [https://hyper.ai/news/30173](https://hyper.ai/news/30173)
- **연구팀:** Central South University의 Jianxin Liu 연구팀
- **관련 연구:** SAR 데이터셋, 머신러닝 모델, XGBR, LSTM.
- **게재 학술지:** Journal of Environmental Management, 2024.02
- **논문 링크:** [도시 지역 지반 침하 시뮬레이션을 위한 머신러닝 기반 기법](https://www.sciencedirect.com/science/article/abs/pii/S0301479724000641?via%3Dihub)

### **2. [의미 분할 모델 SCDUNet++로 산사태 지도 작성](https://hyper.ai/news/29672)**

- **연구 하이라이트:** [https://hyper.ai/news/29672](https://hyper.ai/news/29672)
- **연구팀:** Chengdu University of Technology의 Rui Liu 연구팀
- **관련 연구:** Sentinel-2 다중분광 데이터, NASADEM 데이터, 산사태 데이터, GLFE, CNN, DSSA, DSC, DTL, Transformer, 심층 전이학습. 교집합/합집합 비율(IoU) 1.91% - 24.42% 향상, F1 1.26% - 18.54% 향상.
- **게재 학술지:** International Journal of Applied Earth Observation and Geoinformation, 2024.01
- **논문 링크:** [당뇨망막병증 진행까지의 시간을 예측하는 딥러닝 시스템](https://www.nature.com/articles/s41591-023-02702-z) *(참고: 원문에 링크 불일치가 있으며 그대로 유지함).*

### **3. [신경망으로 2D 태양 영상을 3D 재구성 영상으로 변환](https://hyper.ai/news/28797)**

- **연구 하이라이트:** [https://hyper.ai/news/28797](https://hyper.ai/news/28797)
- **연구팀:** National Center for Atmospheric Research (NCAR)
- **관련 연구:** NeRFs 신경망, SuNeRF 모델. 태양의 극을 최초로 드러냄.
- **게재 학술지:** arxiv, 2022.11
- **논문 링크:** [SuNeRF: 모의 EUV 영상을 이용한 태양 코로나의 3D 전역 재구성 검증](https://arxiv.org/abs/2211.14879)

### **4. [가법 신경망으로 자연재해 영향 요인 분석](https://hyper.ai/news/24957)**

- **연구 하이라이트:** [https://hyper.ai/news/24957](https://hyper.ai/news/24957)
- **연구팀:** UCLA 연구팀
- **관련 연구:** 가법 신경망, 반자동 탐지 알고리즘, 가법 ANN, SNN, 특징 선택 모델, 다단계 학습.
- **게재 학술지:** Communications Earth & Environment, 2023.05
- **논문 링크:** [해석 가능한 신경망을 이용한 산사태 취약성 모델링](https://www.nature.com/articles/s43247-023-00806-5)

### **5. [설명 가능한 AI로 호주 Gippsland의 여러 지리적 요인 분석](https://hyper.ai/news/33994)**

- **연구 하이라이트:** [https://hyper.ai/news/33994](https://hyper.ai/news/33994)
- **연구팀:** Australian National University, University of Technology Sydney
- **관련 연구:** 랜덤 포레스트 모델, 머신러닝 모델, 교차검증 기법. XAI는 지리적 특징을 바탕으로 산불 발생을 효과적으로 예측할 수 있음.
- **게재 학술지:** ScienceDirect, 2023.06
- **논문 링크:** [산불 취약성 예측 모델에 입력되는 기여 요인 해석을 위한 설명 가능한 AI(XAI)](https://www.sciencedirect.com/science/article/pii/S0048969723016224)

### **6. [머신러닝 기반 홍수 예보 모델](https://hyper.ai/news/31060)**

- **연구 하이라이트:** [https://hyper.ai/news/31060](https://hyper.ai/news/31060)
- **연구팀:** Google Research
- **관련 연구:** HydroATLAS 프로젝트, LSTM 네트워크, 인코더-디코더, 교차검증. 최신 GloFAS 예보 모델 성능을 능가함.
- **게재 학술지:** Nature, 2024.03
- **논문 링크:** [미계측 유역의 극한 홍수 전 지구 예측](https://www.nature.com/articles/s41586-024-07145-1)

### **7. [ED-DLSTM, 미관측 지역 홍수 예측 달성](https://hyper.ai/news/32138)**

- **연구 하이라이트:** [https://hyper.ai/news/32138](https://hyper.ai/news/32138)
- **연구팀:** Institute of Mountain Hazards and Environment(IMHE), CAS의 Chaojun Ouyang 연구팀
- **관련 연구:** 수문 관측소 2,000개 데이터, 미국·영국·중부 유럽·캐나다 학습 데이터셋, 지역 간 시공간 앙상블 모델, 인코더-디코더, 다중모달 데이터, 공간 정적 격자 속성 데이터, 잔차 합성곱.
- **게재 학술지:** The Innovation, 2024.04
- **논문 링크:** [전 지구 규모의 지역 간 하천 유량·홍수 예보 딥러닝](https://doi.org/10.1016/j.xinn.2024.100617)

### **8. [ChloroFormer 모델, 해양 녹조 조기 경보 제공](https://hyper.ai/news/34544)**

- **연구 하이라이트:** [https://hyper.ai/news/34544](https://hyper.ai/news/34544)
- **연구팀:** GIS Lab at Zhejiang University
- **관련 연구:** TZ02 데이터셋, 딥러닝 모델 ChloroFormer, Transformer 신경망, 주파수 필터 메커니즘, 주파수 주의 메커니즘. 단기·중기 Chlorophyll-a 예측에서 기준선 능가.
- **게재 학술지:** Water Research, 2024.10
- **논문 링크:** [Fourier 분석·Transformer 네트워크 통합으로 연안 해역 엽록소-a 농도 예측 개선](https://doi.org/10.1016/j.watres.2024.122160 )

### **9. [최초의 해양 대형 언어 모델 OceanGPT, ACL 2024 채택! 수중 체화 AI 현실화](https://hyper.ai/news/33044)**

- **연구 하이라이트:** [https://hyper.ai/news/33044](https://hyper.ai/news/33044)
- **연구팀:** Ningyu Zhang·Huajun Chen 연구팀, Zhejiang University 컴퓨터과학·기술대학
- **관련 연구:** 해양 도메인 LLM, 정규식, 해시 알고리즘, 해양과학 지시 생성 프레임워크 DoInstruct, 다중에이전트 협력, gpt-3.5-turbo, BM25 알고리즘, LLaMA-2, Vicuna-7b-1.5, 체화 AI.
- **게재 학술지:** ACL 2024, 2024.05
- **논문 링크:** [OceanGPT: 해양과학 과제를 위한 대형 언어 모델](https://arxiv.org/abs/2310.02031)

### **10. [AI로 지구온난화 추세 예측](https://hyper.ai/news/36778)**

- **연구 하이라이트:** [https://hyper.ai/news/36778](https://hyper.ai/news/36778)
- **연구팀:** Stanford University·Colorado State University·ETH Zurich 공동 연구팀
- **관련 연구:** AI CNN 시스템, 전 지구 기후 모델, 전이학습, 탄소 배출이 지속적으로 증가하는 조건 예측, 여러 역사적 기간의 예측 프레임워크 정확도 검증. AI는 기록을 경신하는 최고 기온 변화의 확률을 90%로 예측함.
- **게재 학술지:** Geophysical Research Letters, 2024.12
- **논문 링크:** [급속 탈탄소화하의 최고 온난화에 대한 데이터 기반 예측](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL111832)

### **11. [새로운 GeoAI 모델로 Tibetan Plateau 지표 열류 분포 설명](https://hyper.ai/news/36501)**

- **연구 하이라이트:** [https://hyper.ai/news/36501](https://hyper.ai/news/36501)
- **연구팀:** School of Earth Sciences, Zhejiang University
- **관련 연구:** 공간 지능 방법—설명력 강화 지리 신경망 가중 회귀(EI-GNNWR) 모델, 지표 열류 데이터셋, NGHF 대륙 열류 데이터셋, 중국 대륙 지표 열류 데이터셋, SHAP 값 계산, 극단적 그래디언트 부스팅 모델, 완전연결 신경망 모델, 보통최소제곱법, 지리 가중 회귀 모델.
- **게재 학술지:** Journal of Geophysical Research: Solid Earth, 2024.10
- **논문 링크:** [데이터 기반 방법으로 드러난 Tibetan Plateau 지표 열류 분포](https://doi.org/10.1029/2023JB028491)

### **12. [해양 환경 지능형 예보 대형 모델 "WenHai", 수치 해양 예보 능가](https://hyper.ai/news/38294)**

- **연구 하이라이트:** [https://hyper.ai/news/38294](https://hyper.ai/news/38294)
- **연구팀:** Laoshan Laboratory의 Lixin Wu 원사가 이끄는 연구팀, OUC, USTC, Qingdao Guoshi Technology Group
- **관련 연구:** 해양 환경 예보, 물리해양학, AI, 해양 동역학 이론 기반 신경망 아키텍처 설계, 벌크 공식을 신경망에 명시적으로 내장.
- **게재 학술지:** Nature Communications, 2025.03
- **논문 링크:** [심층 신경망을 이용한 와류 해양 예보](https://www.nature.com/articles/s41467-025-57389-2)

### **13. [University of Minnesota, 고정밀 홍수 예보를 구현하는 지식 유도 머신러닝 모델 FHNN 제안](https://hyper.ai/news/49992)**

- **연구 하이라이트:** [https://hyper.ai/news/49992](https://hyper.ai/news/49992)
- **연구팀:** University of Minnesota Twin Cities 연구팀
- **관련 연구:** 홍수 예보, 지식 유도 머신러닝(KGML), 인수분해 계층적 신경망(FHNN), 과정 기반 모델(PBM), 수문 순환 및 유출 예측.
- **게재 학술지:** Water Resources Research
- **논문 링크:** [운영 홍수 예보를 위한 지식 유도 머신러닝](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024WR039064)

### **14. [Google, 유효 예보 시간을 크게 늘린 전 지구 홍수 예보 시스템 버전 2 공개](https://hyper.ai/news/51472)**

- **연구 하이라이트:** [https://hyper.ai/news/51472](https://hyper.ai/news/51472)
- **연구팀:** Google Research
- **관련 연구:** 홍수 예보, 수문 시뮬레이션, 머신러닝 수문 모델, Global Flood Forecasting Model v2, Google Runoff Reanalysis and Reforecasts(GRRR) 데이터셋.
- **게재 학술지:** EGUsphere
- **논문 링크:** [중기 전 지구 홍수 예보 확장: Google 전 지구 홍수 예보 모델 버전 2](https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2283/)

## **기타**

### **1. [축구 도우미 TacticAI, 전술 배치의 실용성 90% 달성](https://hyper.ai/news/30454)**

- **연구 하이라이트:** [https://hyper.ai/news/30454](https://hyper.ai/news/30454)
- **연구팀:** Google DeepMind 및 Liverpool FC
- **관련 연구:** 기하 딥러닝, GNN, 예측 모델, 생성 모델. 슈팅 기회 13% 증가.
- **게재 학술지:** Nature, 2024.03
- **논문 링크:** [TacticAI: 축구 전술 AI 도우미](https://www.nature.com/articles/s41467-024-45965-x)

### **2. [잡음 제거 확산 모델 SPDiff, 장거리 군중 이동 시뮬레이션 구현](https://hyper.ai/news/30069)**

- **연구 하이라이트:** [https://hyper.ai/news/30069](https://hyper.ai/news/30069)
- **연구팀:** 도시과학·계산 센터(Tsinghua 전기공학과), Shenzhen Key Laboratory of Ubiquitous Data Enabling(Tsinghua SIGS), Peng Cheng Laboratory
- **관련 연구:** GC 데이터셋, UCY 데이터셋, 조건부 잡음 제거 확산 모델, SPDiff, GN, EGCL, LSTM, 다중프레임 롤아웃 학습 알고리즘. 학습 데이터 5%만으로 최적 성능 달성.
- **게재 학술지:** Nature, 2024.02
- **논문 링크:** [군중 시뮬레이션을 위한 사회물리학 정보 기반 확산 모델](https://arxiv.org/abs/2402.06680)

### **3. [지능형 과학 시설, 연구 패러다임 전환 주도](https://hyper.ai/news/29570)**

- **연구 하이라이트:** [https://hyper.ai/news/29570](https://hyper.ai/news/29570)
- **연구팀:** Shanghai Jiao Tong University의 Hong Mei 연구팀
- **관련 연구:** 과학 대형 모델, 생성형 시뮬레이션·역산, 자율 지능형 무인 실험, 대규모 신뢰 가능한 과학 협력, AI 연구 도우미.
- **게재 학술지:** Bulletin of Chinese Academy of Sciences, 2023.12
- **논문 링크:** [과학을 위한 AI: 지능형 과학 시설로 기초 연구 혁신](http://www.bulletin.cas.cn/previewFile?id=52965146&type=pdf&lang=zh)

### **4. [DeepSymNet, 지도학습 기반 기호식 표현](https://hyper.ai/news/29243)**

- **연구 하이라이트:** [https://hyper.ai/news/29243](https://hyper.ai/news/29243)
- **연구팀:** Institute of Semiconductors, CAS의 Min Wu 연구팀
- **관련 연구:** [기호 네트워크 데이터셋](https://hyper.ai/datasets/29321), DSNOrg, DSNB, DSNBM, 지도학습. 더 짧은 라벨로 예측 탐색 공간을 줄이고 알고리즘 강건성을 높임.
- **게재 학술지:** Journals & Magazines, 2023.11
- **논문 링크:** [DeepSymNet을 통한 수학식 발견: 분류 기반 기호 회귀 프레임워크](https://ieeexplore.ieee.org/document/10327762)

### **5. [대형 언어 모델 ChipNeMo, 엔지니어의 칩 설계 지원](https://hyper.ai/news/29134)**

- **연구 하이라이트:** [https://hyper.ai/news/29134](https://hyper.ai/news/29134)
- **연구팀:** NVIDIA 연구팀
- **관련 연구:** 도메인 적응 기법, NVIDIA NeMo, 도메인 적응 검색 모델, RAG, 도메인별 지시를 활용한 지도 미세조정, DAPT, SFT, Tevatron, LLM.
- **게재 학술지:** arXiv, 2024.04
- **논문 링크:** [ChipNeMo: 칩 설계를 위한 도메인 적응 LLM](https://arxiv.org/abs/2311.00176)

### **6. [AlphaGeometry, 기하 문제 해결](https://hyper.ai/news/29059)**

- **연구 하이라이트:** [https://hyper.ai/news/29059](https://hyper.ai/news/29059)
- **연구팀:** Google DeepMind 연구팀
- **관련 연구:** 신경 언어 모델, 기호 추론 엔진, 언어 모델.
- **게재 학술지:** Nature, 2024.01
- **논문 링크:** [인간 시연 없이 올림피아드 기하 문제 해결](https://www.nature.com/articles/s41586-023-06747-5)

### **7. [도시 공간 계획에 강화학습 적용](https://hyper.ai/news/28917)**

- **연구 하이라이트:** [https://hyper.ai/news/28917](https://hyper.ai/news/28917)
- **연구팀:** Tsinghua University의 Yong Li 연구팀
- **관련 연구:** 심층 강화학습, 인간-AI 협력 프레임워크, 도시 계획 모델, 정책 네트워크, 가치 네트워크, GNN. 서비스·생태 지표에서 전문 인간 계획가 8명을 능가함.
- **게재 학술지:** Nature Computational Science, 2023.09
- **논문 링크:** [심층 강화학습을 통한 도시 공동체 공간 계획](https://www.nature.com/articles/s43588-023-00503-5)

### **8. [ChatArena 프레임워크: 대형 언어 모델과 늑대인간 게임하기](https://hyper.ai/news/28576)**

- **연구 하이라이트:** [https://hyper.ai/news/28576](https://hyper.ai/news/28576)
- **연구팀:** Tsinghua University의 Peng Li 연구팀
- **관련 연구:** 비모수 학습 메커니즘, 언어 모델, 프롬프트.
- **게재 학술지:** arxiv, 2023.09
- **논문 링크:** [의사소통 게임의 대형 언어 모델 탐구: 늑대인간 게임 실증 연구](https://arxiv.org/pdf/2309.04658.pdf)

### **9. [종설: 학자 30명 Nature 공동 게재, 10년 회고로 AI의 과학 패러다임 재편 분석](https://hyper.ai/news/28166)**

- **연구 하이라이트:** [https://hyper.ai/news/28166](https://hyper.ai/news/28166)
- **주요 내용:** Stanford 컴퓨터과학·유전학 박사후연구원 Hanchen Wang, Georgia Tech CSE의 Tianfan Fu, Cornell CS의 Yuanqi Du와 다른 27명은 지난 10년 동안 기초 과학 연구에서 AI의 역할을 검토하고 남아 있는 과제와 한계를 정리했습니다.
- **논문 링크:** [AI 시대의 과학적 발견](https://www.nature.com/articles/s41586-023-06221-2)

### **10. [Ithaca, 비문학자의 텍스트 복원·연대 귀속·지리적 귀속 지원](https://hyper.ai/news/28140)**

- **연구 하이라이트:** [https://hyper.ai/news/28140](https://hyper.ai/news/28140)
- **연구팀:** DeepMind 및 Ca' Foscari University of Venice
- **관련 연구:** I.PHI 데이터셋, Ithaca 모델, Kullback-Leibler 발산, 교차엔트로피 손실 함수. 텍스트 복원 정확도 62%, 연대 귀속 오차 30년 이내, 지리적 귀속 정확도 71%.
- **게재 학술지:** Nature, 2020.03
- **논문 링크:** [심층 신경망을 이용한 고대 텍스트 복원 및 귀속](https://www.nature.com/articles/s41586-022-04448-z)

### **11. [메타광학의 정방향·역방향 문제에 AI 적용, 메타표면 시스템 기반 데이터 분석](https://hyper.ai/news/34006)**

- **연구 하이라이트:** [https://hyper.ai/news/34006](https://hyper.ai/news/34006)
- **연구팀:** City University of Hong Kong
- **관련 연구:** 예측 신경망, 심층 신경망. 예측 정확도 99% 초과.
- **게재 학술지:** ACS Publications, 2022.06
- **논문 링크:** [메타광학의 AI](https://pubs.acs.org/doi/10.1021/acs.chemrev.2c00012)

### **12. [새로운 지리공간 AI 방법: 지리 신경망 가중 로지스틱 회귀](https://hyper.ai/news/30608)**

- **연구 하이라이트:** [https://hyper.ai/news/30608](https://hyper.ai/news/30608)
- **연구팀:** Zhejiang University의 Zhenhong Du 연구팀
- **관련 연구:** 공간 패턴, 신경망, Shapley 가법 설명(SHAP), 역거리 가중 보간, 이진 교차엔트로피 손실 함수, 5겹 교차검증. 광물 유망성 지도 작성에서 다른 고급 모델 능가.
- **게재 학술지:** International Journal of Applied Earth Observation and Geoinformation, 2024.04
- **논문 링크:** [지리공간 AI로 광물 유망성 지도 개선: 지리 신경망 가중 로지스틱 회귀 접근법](https://doi.org/10.1016/j.jag.2024.103746)

### **13. [확산 모델로 신경망 매개변수 생성, 시공간 퓨샷 학습을 확산 모델 사전학습 문제로 전환](https://hyper.ai/news/30545)**

- **연구 하이라이트:** [https://hyper.ai/news/30545](https://hyper.ai/news/30545)
- **연구팀:** 도시과학·계산 센터, Tsinghua University 전기공학과의 Yong Li 연구팀
- **관련 연구:** 스마트 도시, 시공간 데이터, 지식 전이, MetaLA, PEMS-BAy, Transformer 확산 모델, 조건부 생성 프레임워크 GPD, 신경망, 신경망 매개변수, 사전학습 + 프롬프트 조정.
- **게재 학술지:** ICLR 2024, 2024.01
- **논문 링크:** [확산적 신경망 생성을 통한 시공간 퓨샷 학습](https://openreview.net/forum?id=QyFm3D3Tzi)

### **14. [Fei-Fei Li 연구팀의 최신 AI4S 통찰: 생물학/재료/의료/진단 분야 혁신 기술 16종 요약](https://hyper.ai/news/31499)**

- **연구 하이라이트:** [https://hyper.ai/news/31499](https://hyper.ai/news/31499)
- **주요 내용:** Stanford HAI는 "2024 AI Index Report"를 공개하여 2023년 전 세계 AI 발전 추세를 종합 추적했습니다. 과학·의학에서 AI의 심대한 영향도 탐구하며, 2023년의 뛰어난 과학 AI 성과와 SynthSR·ImmunoSEIRA 같은 획기적 의료 혁신을 강조했습니다. 또한 FDA의 AI 의료기기 승인 동향을 분석하여 업계에 유용한 참고자료를 제공했습니다.

### **15. [Wuhan 주택 가격 정밀 예측! osp-GNNWR 모델, 복잡한 공간 과정·지리 현상 정확히 기술](https://hyper.ai/news/32453)**

- **연구 하이라이트:** [https://hyper.ai/news/32453](https://hyper.ai/news/32453)
- **연구팀:** GIS Lab, Zhejiang University의 Sensen Wu 연구팀
- **관련 연구:** 신경망, 공간 근접성 최적화, 지리 신경망 가중 회귀 방법, Anjuke 부동산 표본 968개 데이터셋, 공간 회귀 모델, 경사하강 알고리즘.
- **게재 학술지:** International Journal of Geographical Information Science, 2024.04
- **논문 링크:** [지리 가중 회귀 접근법의 공간 근접성 척도를 최적화하는 신경망 모델: Wuhan 주택 가격 사례 연구](https://www.tandfonline.com/doi/abs/10.1080/13658816.2024.2343771)

### **16. [제로샷 학습을 도입한 갑골문 해독 최적화 조건부 확산 모델 공개](https://hyper.ai/news/33010)**

- **연구 하이라이트:** [https://hyper.ai/news/33010](https://hyper.ai/news/33010)
- **연구팀:** HUST의 Xiang Bai·Yuliang Liu 연구팀, University of Adelaide·Anyang Normal University·SCUT와 공동 연구
- **관련 연구:** 조건부 확산 모델, 영상 생성 기법, 국소 해석적 샘플링 기법, HUST-OBS 데이터셋, EVOBC 데이터셋, ResNet-101 백본, OCR 기술, 제로샷 학습 전략, 스타일 인코더, 콘텐츠 인코더.
- **게재 학술지:** ACL 2024, 2024.06
- **논문 링크:** [확산 모델을 이용한 갑골문 언어 해독](https://doi.org/10.48550/arXiv.2406.00684)

### **17. [Stanford/Apple 및 다른 기관 23곳, DCLM 벤치마크 공개; 파운데이션 모델, Llama3 8B와 동등한 성능](https://hyper.ai/news/33001)**

- **연구 하이라이트:** [https://hyper.ai/news/33001](https://hyper.ai/news/33001)
- **연구팀:** UW·Stanford·Apple 및 다른 기관 20곳의 공동 연구
- **관련 연구:** 언어 모델, DCLM 벤치마크, Transformer, MMLU.
- **게재 학술지:** arXiv, 2024.06
- **논문 링크:** [DataComp-LM: 차세대 언어 모델 학습 세트를 찾아서](https://arxiv.org/abs/2406.11794)

### **18. [PoCo, 데이터 출처 이질성 문제 해결로 로봇의 유연한 다중과제 수행 구현](https://hyper.ai/news/32765)**

- **연구 하이라이트:** [https://hyper.ai/news/32765](https://hyper.ai/news/32765)
- **연구팀:** MIT 연구자들
- **관련 연구:** 잡음 제거 확산 확률 모델(DDPM), 잡음 제거 확산 암시적 모델(DDIM), 확산 모델의 확률적 조합, 로봇 정책 조합 프레임워크 PoCo.
- **게재 학술지:** arXiv, 2024.05
- **논문 링크:** [PoCo: 이질적 로봇 학습에서 출발하여 이를 위한 정책 조합](https://arxiv.org/abs/2402.02511)

### **19. [영상 140,000개 포함! 갑골문 데이터셋으로 연구팀 ACL 최우수 논문상 수상](https://hyper.ai/news/33826)**

- **연구 하이라이트:** [https://hyper.ai/news/33826](https://hyper.ai/news/33826)
- **연구팀:** HUST의 Xiang Bai 교수 연구팀
- **관련 연구:** HUST-OBC 데이터셋, 비지도 시각 대조학습 모델.
- **게재 학술지:** Scientific Data, 2024.06
- **논문 링크:** [갑골문 인식·해독을 위한 공개 데이터셋](https://arxiv.org/abs/2401.15365)

### **20. [사전학습 LLM 기반 채널 예측 방식 제안, GPT-2로 무선 통신 물리 계층 강화](https://hyper.ai/news/33195)**

- **연구 하이라이트:** [https://hyper.ai/news/33195](https://hyper.ai/news/33195)
- **연구팀:** School of Electronics, Peking University의 Xiang Cheng 연구팀
- **관련 연구:** QuaDRiGa 시뮬레이터, 대형 언어 모델(LLM), 채널 예측 신경망, 전처리 모듈, 임베딩 모듈, 사전학습 LLM 모듈, 출력 모듈.
- **게재 학술지:** Journal of Communications and Information Networks, 2024.06
- **논문 링크:** [LLM4CP: 채널 예측을 위한 대형 언어 모델 적응](https://ieeexplore.ieee.org/document/10582829)

### **21. [다중 스티치 자수용 최초의 생성적 적대 신경망 모델](https://hyper.ai/news/34669)**

- **연구 하이라이트:** [https://hyper.ai/news/34669](https://hyper.ai/news/34669)
- **연구팀:** Wuhan Textile University 컴퓨터과학·AI 대학의 시각 컴퓨팅·디지털 섬유 연구팀
- **관련 연구:** 다중 스티치 자수 데이터셋, 생성적 적대 신경망(GAN), CNN, 다중 스티치 자수 GAN 모델 MSEmbGAN, 영역 인식 질감 생성 네트워크, 채색 네트워크. 자수 질감의 사실성·색상 충실도 향상.
- **게재 학술지:** IEEE Transactions on Visualization and Computer Graphics, 2024
- **논문 링크:** [MSEmbGAN: 영역 인식 질감 생성을 통한 다중 스티치 자수 합성](https://csai.wtu.edu.cn/TVCG01/index.html)

### **22. [Fast Automated Scanning Toolkit(FAST), 시료 정보 효율적 획득](https://hyper.ai/news/28100)**

- **연구 하이라이트:** [https://hyper.ai/news/28100](https://hyper.ai/news/28100)
- **연구팀:** Argonne National Laboratory 연구팀
- **관련 연구:** SLADS-Net 방법, 경로 최적화 기법. 이질적 영역을 우선하며 전체 스캔 영상의 모든 주요 특징을 정확히 재현함.
- **게재 학술지:** Nature Communications, 2023.09
- **논문 링크:** [자율 고해상도 주사 현미경용 AI 기반 워크플로 시연](https://www.nature.com/articles/s41467-023-40339-1)

### **23. [Population Dynamics Foundation Model PDFM 오픈소스 공개, 미국 실업률·빈곤율 정밀 예측](https://hyper.ai/news/36380)**

- **연구 하이라이트:** [https://hyper.ai/news/36380](https://hyper.ai/news/36380)
- **연구팀:** Google
- **관련 연구:** 인구 동역학 파운데이션 모델, 실업률·빈곤율 예측, 분리된 임베딩 아키텍처, PDFM을 활용한 SOTA 예측 파운데이션 모델 TimesFM 강화, 집계 검색 추세 데이터셋, 지도 데이터셋, 혼잡도 데이터셋, 날씨·대기질, 원격탐사 데이터, 그래프 신경망(GNN), 기존 지리공간 모델 강화.
- **게재 학술지:** arXiv, 2024.12
- **논문 링크:** [인구 동역학 파운데이션 모델을 이용한 범용 지리공간 추론](https://arxiv.org/abs/2411.07207)

### **24. [딥러닝 모델 CatGWR, 공간 비정상성 추정](https://hyper.ai/news/38055)**

- **연구 하이라이트:** [https://hyper.ai/news/38055](https://hyper.ai/news/38055)
- **연구팀:** Zhejiang Provincial Key Laboratory of GIS
- **관련 연구:** 딥러닝 모델 문맥 주의 지리 가중 회귀, 주의 메커니즘, 공간 비정상성 추정, CatGWR 모델, 시뮬레이션 실험, 전처리 모듈, 확대 모듈, 회귀 모듈.
- **게재 학술지:** International Journal of Geographical Information Science, 2025.02
- **논문 링크:** [주의 기반 아키텍처로 공간 비정상성 추정에 문맥 유사성 통합](https://doi.org/10.1080/13658816.2025.2456556)

### **25. [세계 최초 VR 운동 개입 시스템 REVERIE, 청소년 뇌-신체-마음 건강 재편](https://hyper.ai/news/41266)**

- **연구 하이라이트:** [https://hyper.ai/news/41266](https://hyper.ai/news/41266)
- **연구팀:** Huating Li 교수 연구팀(Shanghai Sixth People's Hospital / Institute of Active Health), Bin Sheng 교수 연구팀(SJTU / MOE Key Lab of AI), Jihong Wang 연구원 연구팀(Shanghai University of Sport), Rong Zeng 교수 연구팀(ShanghaiTech / Shanghai Clinical Research Center), Shuide Lin 교수 연구팀(NUS).
- **관련 연구:** 신체 운동, 가상세계(메타버스) VR 스포츠, 가상현실 운동 시스템 REVERIE, 청소년 비만, Transformer 아키텍처, 반복적 사용자 상호작용.
- **게재 학술지:** Nature Medicine, 2025.06
- **논문 링크:** [과체중 청소년을 위한 적응형 AI 기반 가상현실 스포츠 시스템: 무작위 대조시험](https://www.nature.com/articles/s41591-025-03724-5)

### **26. [비문 데이터 176,000건 이상으로 Aeneas, 고대 로마 비문의 임의 길이 복원 최초 달성](https://hyper.ai/news/42141)**

- **연구 하이라이트:** [https://hyper.ai/news/42141](https://hyper.ai/news/42141)
- **연구팀:** Google DeepMind 연구자들, University of Nottingham, University of Warwick 등
- **관련 연구:** 다중모달 생성 신경망 Aeneas, Transformer 디코더, 라틴어 비문 데이터셋, LED 데이터셋, 비문 복원.
- **게재 학술지:** Nature, 2025.07
- **논문 링크:** [생성 신경망을 이용한 고대 텍스트 맥락화](https://www.nature.com/articles/s41586-025-09292-5)

### **27. [파노라마 동영상 생성 프레임워크 PanoWan, 제로샷 동영상 편집도 처리](https://hyper.ai/news/42205)**

- **연구 하이라이트:** [https://hyper.ai/news/42205](https://hyper.ai/news/42205)
- **연구팀:** Camera Intelligence Lab @ PKU(Boxin Shi 연구팀), OpenBayes
- **관련 연구:** 파노라마 동영상, PanoVid 파노라마 동영상 데이터셋, 제로샷 동영상 편집, 위도 인식 샘플링, 회전 의미 잡음 제거, 경계 패딩 픽셀별 디코딩.
- **게재 학술지:** arXiv, 2025.06
- **논문 링크:** [PanoWan: 위도/경도 인식 메커니즘으로 확산 동영상 생성 모델을 360°로 확장](https://arxiv.org/abs/2505.22016)

### **28. [YOLOv11 기반 도자기 분류 지능형 프레임워크, 시각 모델링·경제 분석 통합으로 유물 분류·가치 추정 달성](https://hyper.ai/news/42268)**

- **연구 하이라이트:** [https://hyper.ai/news/42268](https://hyper.ai/news/42268)
- **연구팀:** Universiti Putra Malaysia, UNSW Sydney
- **관련 연구:** 도자기 분류, CNN, 전이학습, 캡슐 네트워크, YOLOv11, 도자기 영상 데이터셋, 하이브리드 데이터 수집 방법, 랜덤 포레스트 회귀 모델.
- **게재 학술지:** Nature Partner Journals, 2025.06
- **논문 링크:** [도자기 유물 분류·시장 가치 예측을 위한 딥러닝·머신러닝 통합](https://www.nature.com/articles/s40494-025-01886-6)

### **29. ["Microwave Brain" 칩 탄생, 176밀리와트 전력에서 정확도 75%로 초고속 데이터·무선 신호 동시 처리](https://hyper.ai/news/43093)**

- **연구 하이라이트:** [https://hyper.ai/news/43093](https://hyper.ai/news/43093)
- **연구팀:** Cornell University
- **관련 연구:** 고대역폭 응용, 마이크로파 신경망, 선형 회귀 모델, RadioML2016.10A 데이터셋, 딥러닝, 아날로그 컴퓨팅.
- **게재 학술지:** Nature Electronics, 2025.08
- **논문 링크:** [광대역 계산·통신을 위한 통합 마이크로파 신경망](https://go.hyper.ai/rMZ2K)

### **30. [시공간 결측치 보완·예측 모델 STIMP 공개, 연안 Chlorophyll-a 분포 정밀 예측 구현](https://hyper.ai/news/43613)**

- **연구 하이라이트:** [https://hyper.ai/news/43613](https://hyper.ai/news/43613)
- **연구팀:** HKUST 연구팀
- **관련 연구:** Chlorophyll-a 예측, MODIS 현장 Chl-a 데이터셋, Himawari 위성 원격탐사 반사율 데이터셋, 딥러닝, STIMP 아키텍처, 수체 건강 진단.
- **게재 학술지:** Nature Communications, 2025.08
- **논문 링크:** [시공간 결측치 보완·예측 모델](https://go.hyper.ai/BjOR5)

### **31. [MIT 등, 머신러닝 기반 퓨샷 조건의 플라스마 동역학 고정밀 예측 달성](https://hyper.ai/news/45260)**

- **연구 하이라이트:** [https://hyper.ai/news/45260](https://hyper.ai/news/45260)
- **연구팀:** MIT가 이끄는 연구팀
- **관련 연구:** 토카막, 과학 머신러닝(SciML), 신경 상태공간 모델(NSSM), 제어 오차 민감도 강건성 검증, 예측 우선 외삽 시험.
- **게재 학술지:** Nature Communications, 2025.10
- **논문 링크:** [TCV의 예측 우선 실험으로 플라스마 동역학·강건한 감쇠 궤적 학습](https://www.nature.com/articles/s41467-025-63917-x)

### **32. [Reac-Discovery, 수학 모델링·머신러닝·자동 실험을 융합하여 자율 실험실 시스템의 범용성 문제 해결](https://hyper.ai/news/45626)**

- **연구 하이라이트:** [https://hyper.ai/news/45626](https://hyper.ai/news/45626)
- **연구팀:** IMDEA Materials Institute(스페인)
- **관련 연구:** 자율 실험실(SDL), Reac-Discovery 반자율 디지털 플랫폼, 설계/제조/최적화 모듈 통합 폐루프 시스템, 실시간 NMR 감시, ML 공정 매개변수 최적화, 위상 기술자, 구조 매개변수화 데이터셋, 인쇄 적합성 데이터셋, 반응 성능 데이터셋.
- **게재 학술지:** Nature Communications, 2025.10
- **논문 링크:** [Reac-Discovery: 연속 흐름 촉매 반응기 발견·최적화를 위한 AI 기반 플랫폼](https://go.hyper.ai/ueB79)

### **33. [인간 피질 데이터로 검증된 최초의 뉴런 모델링 프레임워크 NOBLE 소개](https://hyper.ai/news/45806)**

- **연구 하이라이트:** [https://hyper.ai/news/45806](https://hyper.ai/news/45806)
- **연구팀:** ETH Zurich, Caltech, University of Alberta
- **관련 연구:** 딥러닝, 뉴런 특징 임베딩, 전류 주입 임베딩, NOBLE 뉴런 모델링 프레임워크.
- **게재 학술지:** NeurIPS 2025, 2025.09
- **논문 링크:** [NOBLE – 생물학적 뉴런 모델의 실험 변동성을 포착하는 생물학 정보 기반 잠재 임베딩 신경 연산자](https://go.hyper.ai/Ramfp)

### **34. [영상 지리위치 프레임워크 LocDiff 출시, 격자·참조 라이브러리 없는 전 지구 정밀 위치 추정 구현](https://hyper.ai/news/46687)**

- **연구 하이라이트:** [https://hyper.ai/news/46687](https://hyper.ai/news/46687)
- **연구팀:** UMaine, UT Austin, UGA, UMD, Google, OpenAI, Harvard
- **관련 연구:** 구면조화 Dirac 분포, LocDiff 앙상블 프레임워크, MP16 데이터셋, Im2GPS3k 데이터셋, YFCC26k 데이터셋, GWS15k 데이터셋, 조건부 Siren-UNet(CS-UNet) 아키텍처, 효율적 계산 전략, SHDD 인코딩 방식, 영상 지리위치 추정.
- **게재 학술지:** NeurIPS 2025, 2025.10
- **논문 링크:** [LocDiff: Hilbert 공간의 확산을 통한 지구상 위치 식별](https://openreview.net/forum?id=ghybX0Qlls)

### **35. [머신러닝·py-GC-MS 결합으로 시생대 암석의 생명 증거 정밀 식별](https://hyper.ai/news/47543)**

- **연구 하이라이트:** [https://hyper.ai/news/47543](https://hyper.ai/news/47543)
- **연구팀:** Carnegie Institution for Science의 Earth and Planets Laboratory 및 여러 세계 기관
- **관련 연구:** 열분해 기체 크로마토그래피-질량분석법(py-GC-MS), 지도 머신러닝.
- **게재 학술지:** PNAS
- **논문 링크:** [열분해–GC–MS·지도 머신러닝으로 식별한 시생대 암석 생명의 유기지구화학적 증거](https://www.pnas.org/doi/10.1073/pnas.2514534122)

### **36. [Tsinghua University 연구팀, 복잡한 네트워크 동역학 식을 자동 도출하는 신경기호 회귀 방법 ND² 제안](https://hyper.ai/news/47950)**

- **연구 하이라이트:** [https://hyper.ai/news/47950](https://hyper.ai/news/47950)
- **연구팀:** Tsinghua University
- **관련 연구:** 네트워크 동역학, 기호 회귀, ND², 방정식 도출, 과학 머신러닝.
- **게재 학술지:** Nature Communications
- **논문 링크:** *(링크는 원문 중국어의 시생대 암석 논문을 가리키지만 제공된 번호와 참고문헌 번역을 유지함)*

*(참고: 제공된 원문에는 PNAS 시생대 암석 논문으로 연결되는 중복 35번·36번 항목이 있었으나 목차는 ND2를 표시했습니다. 제공된 본문 35번/36번 항목을 그대로 번역했습니다)*

### **37. [Zhejiang University 연구팀, 광물화 이방성을 명시적으로 묘사하는 지질 제약 광물 유망성 예측 방법 제안](https://hyper.ai/news/48396)**

- **연구 하이라이트:** [https://hyper.ai/news/48396](https://hyper.ai/news/48396)
- **연구팀:** Zhejiang University 연구팀
- **관련 연구:** 광물 유망성 지도 작성(MPM), 이방성 공간 근접성 신경망, 지능형 탐광.
- **게재 학술지:** Geology
- **논문 링크:** [광물 유망성 지도 작성을 위한 지질 제약 데이터 기반 모델링](https://go.hyper.ai/vbUpa)

### **38. [Tsinghua·UChicago 연구팀 Nature 발표: AI 도구가 과학자의 영향력을 넓히지만 과학의 초점을 좁힘](https://hyper.ai/news/48748)**

- **연구 하이라이트:** [https://hyper.ai/news/48748](https://hyper.ai/news/48748)
- **연구팀:** Tsinghua University·University of Chicago 공동 연구팀
- **관련 연구:** 과학을 위한 AI, 연구 생산성, 과학 인용 패턴, 연구 생태계, 과학계량학.
- **게재 학술지:** Nature
- **논문 링크:** [AI 도구가 과학자의 영향력을 넓히지만 과학의 초점을 좁힘](https://www.nature.com/articles/s41586-025-09922-y)

### **39. [UC 연구팀, 초소형 부피에서 높은 스펙트럼 충실도를 달성하는 AI 증강 칩 규모 분광계 제안](https://hyper.ai/news/48905)**

- **연구 하이라이트:** [https://hyper.ai/news/48905](https://hyper.ai/news/48905)
- **연구팀:** University of California 연구팀
- **관련 연구:** 칩 규모 분광계, 광자 포획 표면 질감(PTST), 완전연결 신경망, 초분광 영상.
- **게재 학술지:** Advanced Photonics
- **논문 링크:** [근적외선 감도가 확장된 실리콘 플랫폼의 AI 증강 광자 포획 칩상 분광계](https://doi.org/10.1117/1.AP.8.1.016008)

### **40. [US DOE Oak Ridge National Lab, 다중채널 파운데이션 모델의 메모리 사용량을 크게 줄이는 D-CHAG 방법 제안](https://hyper.ai/news/49330)**

- **연구 하이라이트:** [https://hyper.ai/news/49330](https://hyper.ai/news/49330)
- **연구팀:** US DOE Oak Ridge National Laboratory 연구자들
- **관련 연구:** 비전 과학 파운데이션 모델, 분산 교차채널 계층적 집계(D-CHAG), 텐서 병렬성(TP), 계층적 채널 집계.
- **게재 학술지:** SC25
- **논문 링크:** [파운데이션 모델을 위한 분산 교차채널 계층적 집계](https://dl.acm.org/doi/10.1145/3712285.3759870)

### **41. [Polymathic AI 연구팀, 교차영역 시뮬레이션 성능 기록을 경신한 연속체 파운데이션 모델 Walrus 제안](https://hyper.ai/news/49076)**

- **연구 하이라이트:** [https://hyper.ai/news/49076](https://hyper.ai/news/49076)
- **연구팀:** Polymathic AI Collaborative 연구팀
- **관련 연구:** 연속체 동역학, 물리 시뮬레이션 파운데이션 모델, Walrus 모델, 적응형 계산 토큰화.
- **게재 학술지:** arXiv
- **논문 링크:** [Walrus: 연속체 동역학을 위한 교차영역 파운데이션 모델](https://arxiv.org/abs/2511.15684)

### **42. [EPFL, 다물체 동역학을 정확히 모델링하는 물리 정보 기반 GNN 아키텍처 DYNAMI-CAL GraphNet 제안](https://hyper.ai/news/49808)**

- **연구 하이라이트:** [https://hyper.ai/news/49808](https://hyper.ai/news/49808)
- **연구팀:** EPFL 연구팀
- **관련 연구:** 물리 정보 기반 GNN, 다물체 동역학 시스템, DYNAMI-CAL GraphNet, 선운동량·각운동량 보존.
- **게재 학술지:** Nature Communications
- **논문 링크:** [동역학 시스템의 선운동량·각운동량을 보존하는 물리 정보 기반 그래프 신경망](https://www.nature.com/articles/s41467-025-67802-5)

### **43. [MIT, 완전히 가려진 물체의 고정밀 3D 재구성을 달성하는 새로운 방법 Wave-Former 제안](https://hyper.ai/news/50018)**

- **연구 하이라이트:** [https://hyper.ai/news/50018](https://hyper.ai/news/50018)
- **연구팀:** MIT 연구팀
- **관련 연구:** 컴퓨터 비전, 가림을 통한 3D 재구성, 밀리미터파 센싱, Wave-Former, 무선 형상 완성.
- **게재 학술지:** arXiv
- **논문 링크:** [Wave-Former: 무선 형상 완성을 통한 가려진 물체의 3D 재구성](https://arxiv.org/abs/2511.14152)

### **44. [MIT, 확산 모델 추론의 무손실 가속을 구현하는 DRiffusion 초안-정제 병렬 프레임워크 제안](https://hyper.ai/news/50209)**

- **연구 하이라이트:** [https://hyper.ai/news/50209](https://hyper.ai/news/50209)
- **연구팀:** MIT 연구팀
- **관련 연구:** 확산 모델, 추론 가속, 병렬화 기법, DRiffusion, 초안-정제.
- **게재 학술지:** arXiv
- **논문 링크:** [DRiffusion: 확산 모델을 손쉽게 병렬화하는 초안-정제 과정](https://arxiv.org/abs/2603.25872)

### **45. [Technion - Israel Institute of Technology, 행동 파운데이션 모델의 유연한 특정 과제 적응을 위한 Task Tokens 제안](https://hyper.ai/news/50788)**

- **연구 하이라이트:** [https://hyper.ai/news/50788](https://hyper.ai/news/50788)
- **연구팀:** Technion 연구팀
- **관련 연구:** 로봇 제어, 모방학습, 행동 파운데이션 모델(BFM), Task Tokens, 과제별 적응.
- **발표 학회:** ICLR 2026
- **논문 링크:** [Task Tokens: 행동 파운데이션 모델 적응을 위한 유연한 접근법](https://hyper.ai/papers/2503.22886)

### **46. [MIT 등, AI 워크로드의 빠르고 정확한 GPU 전력 추정을 위한 EnergAIzer 프레임워크 제안](https://hyper.ai/news/51038)**

- **연구 하이라이트:** [https://hyper.ai/news/51038](https://hyper.ai/news/51038)
- **연구팀:** MIT 및 MIT-IBM Watson AI Lab
- **관련 연구:** GPU 전력 추정, AI 워크로드, 데이터센터 에너지 효율, EnergAIzer 프레임워크, 하드웨어 성능 프로파일링.
- **게재 학술지:** arXiv
- **논문 링크:** [EnergAIzer: AI 워크로드를 위한 빠르고 정확한 GPU 전력 추정 프레임워크](https://arxiv.org/abs/2604.20105)

### **47. [UIUC, 언어 중심 대형 모델의 한계를 돌파하는 이종 에이전트 프레임워크 Eywa 제안](https://hyper.ai/news/51222)**

- **연구 하이라이트:** [https://hyper.ai/news/51222](https://hyper.ai/news/51222)
- **연구팀:** UIUC 연구팀
- **관련 연구:** 에이전트형 AI, 이종 에이전트 프레임워크 Eywa, 도메인별 파운데이션 모델, 다중에이전트 시스템, 대형 언어 모델(LLM).
- **게재 학술지:** arXiv
- **논문 링크:** [이종 과학 파운데이션 모델 협력](https://hyper.ai/papers/2604.27351)

### **48. [Stanford University 등, LSTM 대리 모델로 2차 비선형 광학 시뮬레이션 252배 가속](https://hyper.ai/news/51410)**

- **연구 하이라이트:** [https://hyper.ai/news/51410](https://hyper.ai/news/51410)
- **연구팀:** Stanford University, UCLA 및 SLAC National Accelerator Laboratory
- **관련 연구:** 2차 비선형 광학, 합주파수 생성(SFG), 장단기 기억 네트워크(LSTM), 대리 모델, 분할 단계 Fourier 방법(SSFM).
- **게재 학술지:** Advanced Photonics
- **논문 링크:** [χ⁽²⁾ 비선형 광학의 딥러닝 보조 모델링](https://go.hyper.ai/5bLoA)
