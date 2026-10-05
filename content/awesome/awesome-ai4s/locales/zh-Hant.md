# Awesome AI for Science
**EN** | [簡體中文](README_CN.md)
- [**前言**](#foreword)
- [**AI+ 生物醫藥**](#ai-biopharmaceutical)
  - [**1. AdaDR 在藥物重定位方面的效能優於多個基準方法**](#1-adadr-outperforms-multiple-benchmark-methods-in-drug-repositioning)
  - [**2. IMN4NPD 加快分子網路中廣泛叢集的去複製，對自迴圈與成對節點提供標註**](#2-imn4npd-accelerates-the-dereplication-of-extensive-clusters-in-molecular-networks-providing-annotations-for-self-loops-and-paired-nodes)
  - [**3. 深度生成模型 MIDAS 用於單細胞多組學資料馬賽克整合**](#3-deep-generative-model-midas-for-mosaic-integration-of-single-cell-multi-omics-data)
  - [**4. 基於蛋白質口袋的 3D 分子生成模型——ResGen**](#4-resgen-a-3d-molecular-generation-model-based-on-protein-pockets)
  - [**5. 大模型 + 機器學習高精度預測酶動力學引數**](#5-large-models--machine-learning-for-high-precision-prediction-of-enzyme-kinetic-parameters)
  - [**6. MIT 利用深度學習發現新型抗生素**](#6-mit-uses-deep-learning-to-discover-novel-antibiotics)
  - [**7. 神經網路解密 GPCR-G 蛋白偶聯選擇性**](#7-neural-networks-decipher-gpcr-g-protein-coupling-selectivity)
  - [**8. Macformer 將無環藥物菲卓替尼大環化**](#8-macformer-macrocyclizes-the-acyclic-drug-fedratinib)
  - [**9. 迴歸網路 + CGMD，預測百億種多肽的自組裝特性**](#9-regression-network--cgmd-predicts-self-assembly-properties-of-tens-of-billions-of-peptides)
  - [**10. 無監督學習預測 7100 萬種基因突變**](#10-unsupervised-learning-predicts-71-million-gene-mutations)
  - [**11. 基於圖神經網路 (GNN) 開發氣味分析 AI**](#11-odor-analysis-ai-developed-based-on-graph-neural-networks-gnn)
  - [**12. 圖神經網路篩選安全高效的抗衰老成分**](#12-graph-neural-networks-screen-for-safe-and-highly-effective-anti-aging-ingredients)
  - [**13. 機器學習量化分析多巴胺的釋放量和釋放位置**](#13-machine-learning-quantitatively-analyzes-dopamine-release-amount-and-location)
  - [**14. 機器學習發現三種抗衰老藥物**](#14-machine-learning-discovers-three-anti-aging-drugs)
  - [**15. 深度學習篩選抑制鮑曼不動桿菌的新型抗生素**](#15-deep-learning-screens-for-novel-antibiotics-inhibiting-acinetobacter-baumannii)
  - [**16. 機器學習模型應用於預測生物墨水可列印性**](#16-machine-learning-models-applied-to-predict-bioink-printability)
  - [**17. 機器學習分化多能幹細胞**](#17-machine-learning-differentiates-pluripotent-stem-cells)
  - [**18. 機器學習模型預測長效注射劑藥物釋放速率**](#18-machine-learning-model-predicts-drug-release-rate-of-long-acting-injectables)
  - [**19. 機器學習演算法有效預測植物抗瘧性**](#19-machine-learning-algorithm-effectively-predicts-plant-antimalarial-properties)
  - [**20. 機器學習整合方法預測病毒蛋白片段免疫原性**](#20-machine-learning-ensemble-method-predicts-immunogenicity-of-viral-protein-fragments)
  - [**21. 用生成式 AI 開發新型抗生素**](#21-generative-ai-used-to-develop-novel-antibiotics)
  - [**22. 基於深度學習研發一種自動化、高速、多維的單粒子追蹤系統**](#22-deep-learning-based-automated-high-speed-multidimensional-single-particle-tracking-system)
  - [**23. ProEnsemble 機器學習框架：最佳化進化通路啟動子組合**](#23-proensemble-machine-learning-framework-optimizing-evolutionary-pathway-promoter-combinations)
  - [**24. 微環境感知圖神經網路 ProtLGN 指導蛋白質定向進化**](#24-microenvironment-aware-graph-neural-network-protlgn-guides-directed-protein-evolution)
  - [**25. 深度學習模型 AlphaPPIMd：用於蛋白質-蛋白質複合物構象集合探索**](#25-deep-learning-model-alphappimd-exploring-conformational-ensembles-of-protein-protein-complexes)
  - [**26. 新型腫瘤抑制蛋白降解劑 dp53m 可抑制癌細胞增殖**](#26-novel-tumor-suppressor-protein-degrader-dp53m-inhibits-cancer-cell-proliferation)
  - [**27. CVPR 最佳學生論文！多模態模型 BioCLIP 實現零樣本學習**](#27-cvpr-best-student-paper-multimodal-model-bioclip-achieves-zero-shot-learning)
  - [**28. 1 億引數！細胞大模型 scFoundation 可對 2 萬基因同時建模**](#28-100-million-parameters-cell-foundation-model-scfoundation-models-20000-genes-simultaneously)
  - [**29. 入選頂會 ICML，蛋白質語言模型 ESM-AA 超越傳統 SOTA**](#29-accepted-by-icml-protein-language-model-esm-aa-surpasses-traditional-sota)
  - [**30. SPACE 演算法登 Cell 子刊！組織模組發現能力領先同類工具**](#30-space-algorithm-published-in-cell-sub-journal-tissue-module-discovery-capabilities-lead-similar-tools)
  - [**31. 基於 AlphaFold 實現新突破，揭示蛋白質動態多樣性**](#31-new-breakthroughs-based-on-alphafold-reveal-dynamic-protein-diversity)
  - [**32. 基於擴散模型開發 P450 酶從頭設計方法 P450Diffusion**](#32-p450diffusion-de-novo-design-method-for-p450-enzymes-developed-based-on-diffusion-models)
  - [**33. 將等變圖神經網路用於靶蛋白結合位點預測，效能提升 20%**](#33-equivariant-graph-neural-networks-used-for-target-protein-binding-site-prediction-boosting-performance-by-20)
  - [**34. 20 個實驗資料創造 AI 蛋白質里程碑！FSFP 有效最佳化蛋白質預訓練模型**](#34-20-experimental-data-points-create-an-ai-protein-milestone-fsfp-effectively-optimizes-protein-pre-training-models)
  - [**35. 可遷移深度學習模型鑑定多型別 RNA 修飾、顯著減少計算成本**](#35-transferable-deep-learning-model-identifies-multiple-types-of-rna-modifications-significantly-reducing-computational-costs)
  - [**36. InstructProtein：利用知識指令對齊蛋白質語言與人類語言**](#36-instructprotein-aligning-protein-language-with-human-language-using-knowledge-instructions)
  - [**37. 蛋白質-文字生成框架 ProtT3 實現蛋白質資料與文字資訊跨模態解讀**](#37-protein-to-text-generation-framework-prott3-enables-cross-modal-interpretation-of-protein-data-and-text-information)
  - [**38. CPDiffusion 模型，超低成本、全自動設計功能型蛋白質**](#38-cpdiffusion-model-designs-functional-proteins-fully-automatically-at-an-ultra-low-cost)
  - [**39. 基於蛋白質語言模型和密集檢索技術，一種全新的蛋白質同源物檢測方法**](#39-a-novel-protein-homolog-detection-method-based-on-protein-language-models-and-dense-retrieval-techniques)
  - [**40. AlphaProteo 可高效設計靶蛋白結合物，親和力提高 300 倍**](#40-alphaproteo-efficiently-designs-target-protein-binders-increasing-affinity-by-300-times)
  - [**41. 全新去噪蛋白質語言模型 DePLM，突變效應預測優於 SOTA 模型**](#41-novel-denoising-protein-language-model-deplm-outperforms-sota-models-in-mutation-effect-prediction)
  - [**42. 幾何深度生成模型 DynamicBind，實現蛋白質動態對接預測**](#42-geometric-deep-generative-model-dynamicbind-enables-dynamic-protein-docking-prediction)
  - [**43. 藥物研發大語言模型 Y-Mol，效能全面領先 LLaMA2**](#43-drug-discovery-large-language-model-y-mol-completely-outperforms-llama2)
  - [**44. 通用分子逆折疊模型 UniIF，對 AlphaFold 3 形成進一步補充**](#44-universal-molecular-inverse-folding-model-uniif-further-complements-alphafold-3)
  - [**45. 預訓練蛋白質語言模型 ProSST，更有效地整合蛋白質結構資訊**](#45-pre-trained-protein-language-model-prosst-integrates-protein-structure-information-more-effectively)
  - [**46. 大環肽結合物框架 RFpeptides，為不可成藥蛋白質提供新可能性**](#46-macrocyclic-peptide-binder-framework-rfpeptides-offers-new-possibilities-for-undruggable-proteins)
  - [**47. 基因組基礎模型 Evo，實現從分子到基因組尺度的預測與生成**](#47-genome-foundation-model-evo-enables-prediction-and-generation-from-molecular-to-genome-scales)
  - [**48. DigFrag 用 AI 精準分割分子片段，並生成 44 個藥物/農藥分子**](#48-digfrag-accurately-segments-molecular-fragments-using-ai-and-generates-44-drugpesticide-molecules)
  - [**49. 蛋白質序列大語言模型預訓練方法 PRIME**](#49-protein-sequence-large-language-model-pre-training-method-prime)
  - [**50. 自監督深度學習方法革新冷凍電鏡三維重建**](#50-self-supervised-deep-learning-method-revolutionizes-3d-reconstruction-in-cryo-electron-microscopy)
  - [**51. 多模態蛋白質生成方法 PLAID，同時生成序列和全原子蛋白結構**](#51-multimodal-protein-generation-method-plaid-generates-sequences-and-all-atom-protein-structures-simultaneously)
  - [**52. 基於潛在強化學習的靶向分子最佳化方法 MOLRL**](#52-targeted-molecular-optimization-method-molrl-based-on-latent-reinforcement-learning)
  - [**53. 病毒變異驅動力預測框架 E2VD，預測新冠/艾滋病/流感病毒進化方向**](#53-viral-variation-driver-prediction-framework-e2vd-predicts-evolutionary-directions-for-covid-19hivinfluenza-viruses)
  - [**54. 醫學語言模型 MedFound，推理能力接近專家醫師**](#54-medical-language-model-medfound-approaches-expert-physician-reasoning-capabilities)
  - [**55. 4D 擴散模型 AlphaFolding，填補蛋白質動態結構預測空白**](#55-4d-diffusion-model-alphafolding-fills-the-gap-in-dynamic-protein-structure-prediction)
  - [**56. 可設計短蛋白質的 PepPrCLIP 流程，有望開發癌症新療法**](#56-pepprclip-pipeline-for-designing-short-proteins-holds-promise-for-developing-new-cancer-therapies)
  - [**57. 玻爾茲曼對齊技術大幅提高蛋白質結合自由能預測效能**](#57-boltzmann-alignment-technique-drastically-improves-protein-binding-free-energy-prediction-efficacy)
  - [**58. 新型大規模流式蛋白質主鏈生成器 Proteina，從頭設計蛋白質主鏈效能達 SOTA**](#58-novel-large-scale-flow-based-protein-backbone-generator-proteina-achieves-sota-in-de-novo-protein-backbone-design)
  - [**59. UniGEM 模型，首次基於擴散模型實現兩任務協同增強**](#59-unigem-model-achieves-synergistic-enhancement-of-two-tasks-based-on-diffusion-models-for-the-first-time)
  - [**60. RFdiffusion 再進化，實現原子級精度的抗體從頭設計**](#60-rfdiffusion-evolves-further-realizing-atomic-accuracy-de-novo-antibody-design)
  - [**61. 首個蛋白質-RNA 語言模型融合方案，結合親和力預測重新整理 SOTA**](#61-first-protein-rna-language-model-fusion-scheme-sets-new-sota-in-binding-affinity-prediction)
  - [**62. 虛擬組織模型 Celcomen，首次在空間轉錄組學分析中實現因果推斷可識別性**](#62-virtual-tissue-model-celcomen-achieves-causal-inference-identifiability-in-spatial-transcriptomics-analysis-for-the-first-time)
  - [**63. AlphaFold-Metainference 方法，精準預測無序蛋白質結構集合**](#63-alphafold-metainference-method-accurately-predicts-disordered-protein-structural-ensembles)
  - [**64. 高精度 RNA 結構預測框架 DRfold2，多項基準測試超越 SOTA**](#64-high-accuracy-rna-structure-prediction-framework-drfold2-surpasses-sota-in-multiple-benchmarks)
  - [**65. 蛋白質設計新演算法 DRAKES，突破生物序列設計瓶頸**](#65-new-protein-design-algorithm-drakes-breaks-through-the-biological-sequence-design-bottleneck)
  - [**66. 機器學習輔助的紫外吸收光譜法檢測微生物汙染**](#66-machine-learning-assisted-uv-absorbance-spectroscopy-for-detecting-microbial-contamination)
  - [**67. 利用蛋白質序列生成模型實現重疊基因設計**](#67-utilizing-protein-sequence-generative-models-for-overlapping-gene-design)
  - [**68. 預測框架 Predictions of Unseen Proteins’ Subcellular localization（PUPS），實現單細胞級蛋白質定位**](#68-prediction-framework-pups-enables-single-cell-level-protein-subcellular-localization)
  - [**69. 首個跨分子種類統一生成框架 UniMoMo，實現多型別藥物分子設計**](#69-unimomo-the-first-unified-generative-framework-across-molecular-species-enables-multi-type-drug-molecular-design)
  - [**70. 蛋白質語言模型 Prot42 僅利用目標蛋白序列即可生成高親和力結合劑**](#70-protein-language-model-prot42-generates-high-affinity-binders-using-only-the-target-protein-sequence)
  - [**71. 統一生物分子動力學模擬器 UniSim，首次實現跨分子型別、跨化學環境統一時間粗化動力學模擬**](#71-unified-biomolecular-dynamics-simulator-unisim-achieves-unified-time-coarsened-dynamics-simulation-across-molecular-types-and-chemical-environments-for-the-first-time)
  - [**72. 計算生物學演算法 SimplifiedBondfinder，挖掘 69 個全新氮-氧-硫鍵**](#72-computational-biology-algorithm-simplifiedbondfinder-uncovers-69-novel-nitrogen-oxygen-sulfur-bonds)
  - [**73. 全新蛋白質序列設計方法 FAMPNN，可同時處理蛋白質主鏈和側鏈資訊**](#73-novel-protein-sequence-design-method-fampnn-simultaneously-processes-protein-backbone-and-sidechain-information)
  - [**74. 原子級蛋白質設計方法 La-Proteina，高精度生成多達 800 個殘基的蛋白質**](#74-atomistic-protein-design-method-la-proteina-generates-proteins-with-up-to-800-residues-at-high-precision)
  - [**75. APM 模型專為多鏈蛋白質複合物設計，實現全原子設計與功能最佳化**](#75-apm-model-specifically-designed-for-multi-chain-protein-complexes-enables-all-atom-design-and-functional-optimization)
  - [**76. 無序區域結合蛋白設計新方法 Logos，專攻不可成藥靶點**](#76-new-intrinsically-disordered-region-binding-protein-design-method-logos-specializes-in-undruggable-targets)
  - [**77. 全新蛋白質動態融合表徵框架 FusionProt 釋出，實現迭代式資訊交換**](#77-novel-protein-dynamic-fusion-representation-framework-fusionprot-released-enabling-iterative-information-exchange)
  - [**78. 轉錄組引導的擴散模型 MorphDiff 釋出，為表型藥物研發提速**](#78-transcriptome-guided-diffusion-model-morphdiff-released-to-accelerate-phenotypic-drug-discovery)
  - [**79. AlphaPPIMI 框架顯著提升泛化能力，PPIs 介面調節劑預測效能超越現有方法**](#79-alphappimi-framework-significantly-enhances-generalization-surpassing-existing-methods-in-ppi-interface-modulator-prediction)
  - [**80. 全新融合神經網路框架，高效預測蛋白質序列的多金屬結合位點**](#80-a-novel-fusion-neural-network-framework-efficiently-predicts-multi-metal-binding-sites-in-protein-sequences)
  - [**81. 高效可合成分子投影框架 ReaSyn 釋出，實現超高重建率與路徑多樣性**](#81-highly-synthesizable-molecular-projection-framework-reasyn-released-achieving-ultra-high-reconstruction-rates-and-pathway-diversity)
  - [**82. 約束強化學習框架 Ctrl-DNA 釋出，實現特定細胞基因表達的「靶向控制」**](#82-constrained-reinforcement-learning-framework-ctrl-dna-released-realizing-targeted-control-of-specific-cell-gene-expression)
  - [**83. PLACER 框架解析，解決蛋白質構象異質性的原子級建模挑戰**](#83-placer-framework-resolves-the-atomic-level-modeling-challenge-of-protein-conformational-heterogeneity)
  - [**84. Squidiff 實現多場景轉錄組模擬，助力精準醫學與空間醫學發展**](#84-squidiff-enables-multi-scenario-transcriptome-simulation-boosting-precision-medicine-and-spatial-medicine-development)
  - [**85. 生成式模型 PepTron 及新評測基準釋出，重塑無序蛋白集合預測能力**](#85-generative-model-peptron-and-new-evaluation-benchmark-released-reshaping-prediction-capabilities-for-disordered-protein-ensembles)
  - [**86. MIT 與哈佛提出端到端 AI 流程 CleaveNet，攻克蛋白酶底物高特異性設計難題**](#86-mit-and-harvard-propose-end-to-end-ai-workflow-cleavenet-to-overcome-highly-specific-protease-substrate-design-challenges)
  - [**87. 德國歌德大學團隊提出多尺度分類框架，解碼人類 E3 連線酶組複雜性**](#87-goethe-university-frankfurt-team-proposes-a-multi-scale-classification-framework-to-decode-the-complexity-of-the-human-e3-ligome)
  - [**88. Basecamp 與英偉達等聯合釋出 EDEN 基礎模型，實現 AI 可程式設計療法設計**](#88-basecamp-and-nvidia-jointly-release-the-eden-foundation-model-enabling-ai-programmable-therapeutic-design)
  - [**89. 微軟等團隊提出多模態 AI 框架 GigaTIME，從常規病理切片生成虛擬 mIF 圖譜**](#89-microsoft-and-others-propose-the-multimodal-ai-framework-gigatime-to-generate-virtual-mif-atlases-from-routine-pathology-slides)
  - [**90. MIT 提出深度學習語言模型 Pichia-CLM，最佳化密碼子提升重組蛋白產量**](#90-mit-proposes-deep-learning-language-model-pichia-clm-to-optimize-codons-for-enhanced-recombinant-protein-yield)
  - [**91. MIT 與 ETH 聯合提出深度學習框架 APOLLO，高效整合解耦單細胞多模態資料**](#91-mit-and-eth-jointly-propose-deep-learning-framework-apollo-to-efficiently-integrate-and-disentangle-single-cell-multimodal-data)
  - [**92. 港中文等聯合提出 Bi-TEAM 框架，實現修飾肽多尺度統一表徵學習**](#92-cuhk-and-others-jointly-propose-the-bi-team-framework-for-unified-cross-scale-representation-learning-of-modified-peptides)
  - [**93. 卡內基梅隆大學等提出 AQuaRef，實現全蛋白質原子模型量子精修**](#93-carnegie-mellon-university-and-others-propose-aquaref-for-quantum-refinement-of-all-atom-protein-models)
  - [**94. 英偉達等聯合提出 Complexa 框架，統一蛋白質結合劑生成與最佳化**](#94-nvidia-and-others-jointly-propose-the-complexa-framework-to-unify-protein-binder-generation-and-optimization)
  - [**95. MIT 與 CMU 聯合提出 VibeGen，引入振動動力學賦能從頭蛋白質設計**](#95-mit-and-cmu-jointly-propose-vibegen-introducing-vibrational-dynamics-to-empower-de-novo-protein-design)
  - [**96. 巴斯德研究所利用深度學習預測 239 萬抗噬菌體蛋白，繪製細菌免疫圖譜**](#96-institut-pasteur-uses-deep-learning-to-predict-239-million-anti-phage-proteins-mapping-bacterial-immunity)
  - [**97. KAIST 團隊利用 AI 從頭設計小分子結合蛋白，成功應用於生物感測器**](#97-kaist-team-utilizes-ai-to-de-novo-design-small-molecule-binding-proteins-successfully-applying-them-in-biosensors)
  - [**98. 多倫多大學等提出 dnaHNet，實現基因組序列高效分層建模**](#98-university-of-toronto-and-others-propose-dnahnet-for-efficient-hierarchical-modeling-of-genomic-sequences)
  - [**99. 倫敦瑪麗女王大學等開展最大規模蛋白質基因組學研究，揭示疾病分子機制**](#99-queen-mary-university-of-london-and-others-conduct-the-largest-scale-proteogenomic-study-revealing-molecular-disease-mechanisms)
  - [**100. 法蘭克福大學等提出 genESOM 模型，生成式 AI 破局小樣本動物實驗**](#100-goethe-university-frankfurt-and-others-propose-genesom-model-generative-ai-breaks-through-small-sample-animal-experiments)
- [**AI+ 醫療健康**](#ai-healthcare)
  - [**1. 深度學習系統 DeepDR Plus 用眼底影象預測糖尿病視網膜病變**](#1-deepdr-plus-deep-learning-system-predicts-diabetic-retinopathy-using-fundus-images)
  - [**2. 邏輯迴歸模型分析高綠色景觀指數可降低 MetS 風險**](#2-logistic-regression-model-analyzes-that-high-green-landscape-index-reduces-mets-risk)
  - [**3. 深度學習系統助力初級眼科醫生的診斷一致性提高 12%**](#3-deep-learning-system-helps-junior-ophthalmologists-increase-diagnostic-consistency-by-12)
  - [**4. GSP-GCNs 實現帕金森病診斷準確率高達 90.2%**](#4-gsp-gcns-achieve-up-to-902-accuracy-in-parkinsons-disease-diagnosis)
  - [**5. 乳腺癌預後評分系統 MIRS**](#5-breast-cancer-prognosis-scoring-system-mirs)
  - [**6. 視網膜影象基礎模型 RETFound，預測多種系統性疾病**](#6-retinal-image-foundation-model-retfound-predicts-multiple-systemic-diseases)
  - [**7. SVM 最佳化觸覺感測器，盲文識別率達 96.12%**](#7-svm-optimizes-tactile-sensors-braille-recognition-rate-reaches-9612)
  - [**8. 中科院基因組所建立開放生物醫學成像檔案**](#8-cas-beijing-institute-of-genomics-establishes-an-open-biomedical-imaging-archive)
  - [**9. AI Lunit 閱讀乳腺 X 光片的準確率與醫生相當**](#9-ai-lunit-reads-mammograms-with-accuracy-comparable-to-doctors)
  - [**10. 特徵選擇策略檢測乳腺癌生物標誌物**](#10-feature-selection-strategy-detects-breast-cancer-biomarkers)
  - [**11. 梯度提升機模型準確預測 BPSD 亞綜合徵**](#11-gradient-boosting-machine-model-accurately-predicts-bpsd-sub-syndrome)
  - [**12. 機器學習模型預測患者一年內死亡率**](#12-machine-learning-model-predicts-patient-one-year-mortality-rate)
  - [**13. AI 新腦機技術讓失語患者「開口說話」**](#13-new-ai-brain-computer-interface-technology-allows-aphasic-patients-to-speak)
  - [**14. 基於深度學習的胰腺癌人工智慧檢測**](#14-deep-learning-based-artificial-intelligence-detection-of-pancreatic-cancer)
  - [**15. 機器學習輔助肺癌篩查的群體有效性**](#15-population-effectiveness-of-machine-learning-assisted-lung-cancer-screening)
  - [**16. 卵巢癌診斷人工智慧融合模型 MCF，輸入常規實驗室檢驗資料和年齡即可計算卵巢癌的患病風險**](#16-ovarian-cancer-diagnostic-ai-fusion-model-mcf-calculates-risk-using-routine-lab-data-and-age)
  - [**17. 谷歌釋出 HEAL 架構，4 步評估醫學 AI 工具是否公平**](#17-google-releases-heal-framework-a-4-step-process-to-assess-medical-ai-tool-fairness)
  - [**18. 借鑑語義分割，開發空間轉錄組語義註釋工具 Pianno**](#18-leveraging-semantic-segmentation-to-develop-spatial-transcriptomics-semantic-annotation-tool-pianno)
  - [**19. AI 模型 UniFMIR，突破現有熒光顯微成像極限**](#19-ai-model-unifmir-breaks-the-limits-of-existing-fluorescence-microscopy-imaging)
  - [**20. 深度學習系統，提高癌症生存預測準確性**](#20-deep-learning-system-improves-the-accuracy-of-cancer-survival-prediction)
  - [**21. MemSAM 將「分割一切」模型用於醫學影片分割**](#21-memsam-adapts-segment-anything-model-for-medical-video-segmentation)
  - [**22. 醫學影象分割模型 Medical SAM 2 重新整理醫學影象分割 SOTA 榜**](#22-medical-image-segmentation-model-medical-sam-2-tops-the-sota-leaderboard)
  - [**23. 機器學習抗擊化療耐藥性與腫瘤復發，構築乳腺癌幹細胞的有力防線**](#23-machine-learning-fights-chemotherapy-resistance-and-tumor-recurrence-building-a-strong-defense-against-breast-cancer-stem-cells)
  - [**24. 糖尿病診療的視覺-大語言模型 DeepDR-LLM 登 Nature 子刊**](#24-vision-language-model-deepdr-llm-for-diabetes-care-published-in-nature-sub-journal)
  - [**25. 水平直逼高階病理學家！清華團隊提出 AI 基礎模型 ROAM，實現膠質瘤精準診斷**](#25-leveling-with-senior-pathologists-tsinghua-team-proposes-ai-foundation-model-roam-for-precise-glioma-diagnosis)
  - [**26. 醫學影象分割通用模型 ScribblePrompt，效能優於 SAM**](#26-universal-medical-image-segmentation-model-scribbleprompt-outperforms-sam-based-models)
  - [**27. 數字孿生腦平臺，展現出類似人腦中觀測的臨界現象與相似認知功能**](#27-digital-twin-brain-platform-demonstrates-critical-phenomena-and-cognitive-functions-similar-to-the-human-brain)
  - [**28. 自動化大模型對話 Agent 模擬系統，可初診抑鬱症**](#28-automated-llm-dialogue-agent-simulation-system-performs-initial-diagnosis-for-depression)
  - [**29. 深度學習模型 LucaProt，助力 RNA 病毒識別**](#29-deep-learning-model-lucaprot-aids-in-rna-virus-identification)
  - [**30. 醫學影象預訓練框架 UniMedI，打破醫學資料異構化藩籬**](#30-medical-image-pre-training-framework-unimedi-breaks-down-medical-data-heterogeneity-barriers)
  - [**31. 多語言醫學大模型 MMed-Llama 3，更加適配醫療應用場景**](#31-multilingual-medical-large-model-mmed-llama-3-better-adapts-to-medical-application-scenarios)
  - [**32. 膠囊內窺鏡影象拼接方法 S2P-Matching，助力膠囊內窺鏡影象拼接**](#32-capsule-endoscopy-image-stitching-method-s2p-matching-assists-in-image-reconstruction)
  - [**33. 多模態醫療基準 GMAI-MMBench，含 284 個資料集，覆蓋 18 項臨床任務**](#33-multimodal-medical-benchmark-gmai-mmbench-features-284-datasets-covering-18-clinical-tasks)
  - [**34. 新型時間序列預測方法 CGS-Mask，揭秘患者存活率關鍵指標**](#34-novel-time-series-forecasting-method-cgs-mask-uncovers-key-indicators-for-patient-survival-rates)
  - [**35. 非侵入式大腦解碼新框架 fMRI，為腦機介面和認知模型發展奠定基礎**](#35-non-invasive-brain-decoding-framework-fmri-lays-the-foundation-for-brain-computer-interfaces-and-cognitive-models)
  - [**36. 醫學影象分割模型 M2CF-Net，提高幹燥綜合徵診斷準確性**](#36-medical-image-segmentation-model-m2cf-net-improves-diagnosis-accuracy-for-sjogrens-syndrome)
  - [**37. BSAFusion 可實現多模態醫學影象對齊與融合**](#37-bsafusion-enables-alignment-and-fusion-of-multimodal-medical-images)
  - [**38. 多 Agent 大語言模型框架 KG4Diagnosis 助力診斷 362 種常見疾病**](#38-multi-agent-llm-framework-kg4diagnosis-assists-in-diagnosing-362-common-diseases)
  - [**39. 影象分割模型 ConDSeg，解決醫學影象分割軟邊界與共現難題**](#39-image-segmentation-model-condseg-solves-soft-boundary-and-co-occurrence-issues-in-medical-imaging)
  - [**40. 醫學模型 M³FM，可用於零樣本臨床診斷，支援疾病報告和疾病分類**](#40-medical-model-m³fm-enables-zero-shot-clinical-diagnosis-supporting-disease-reporting-and-classification)
  - [**41. 基於深度學習憑顱骨 CT 鑑定性別，趕超人類法醫**](#41-deep-learning-based-sex-estimation-from-skull-ct-scans-outperforms-human-forensic-experts)
  - [**42. AI 助力醫學研究，大模型可成為基層醫生培訓「黃金搭檔」**](#42-ai-boosts-medical-research-large-models-become-the-golden-partner-for-training-primary-care-physicians)
  - [**43. AcneDGNet 的深度學習演算法實現痤瘡病變檢測與分級**](#43-acnedgnet-deep-learning-algorithm-achieves-acne-lesion-detection-and-grading)
  - [**44. 釋出多模態醫學影像分割模型 VISTA3D，實現三維影像自動分割與互動**](#44-multimodal-medical-image-segmentation-model-vista3d-released-achieving-3d-image-auto-segmentation-and-interaction)
  - [**45. 多切面超聲心動圖統一分割模型 EchoONE，可精準分割多切面超聲心動圖**](#45-multi-plane-echocardiography-unified-segmentation-model-echoone-accurately-segments-multiple-planes)
  - [**46. 多智慧體對話方塊架模擬醫生會診，助力疾病診斷**](#46-multi-agent-dialogue-framework-simulates-medical-consultations-to-aid-disease-diagnosis)
  - [**47. 深度學習框架 STAIG，揭示腫瘤微環境中的詳細基因資訊**](#47-deep-learning-framework-staig-reveals-detailed-genetic-information-in-the-tumor-microenvironment)
  - [**48. 首個全模態醫療影象重識別框架 MaMI，在 11 個資料集上的評測達 SOTA**](#48-first-all-in-one-medical-image-re-identification-framework-mami-reaches-sota-across-11-datasets)
  - [**49. 多對一回歸模型 M2OST，利用數字病理影象精準預測基因表達**](#49-many-to-one-regression-model-m2ost-accurately-predicts-gene-expression-using-digital-pathology-images)
  - [**50. 大腦磁共振成像掃描工具 MindGlide，實現多發性硬化症病變數化**](#50-brain-mri-scanning-tool-mindglide-quantifies-multiple-sclerosis-lesions)
  - [**51. 多示例學習框架 HDMIL，快速處理千兆畫素病理全切片影象**](#51-hierarchical-distillation-multi-instance-learning-framework-hdmil-rapidly-processes-gigapixel-whole-slide-images)
  - [**52. 通用 3D 血管分割基礎模型 vesselFM，效能遠超 SAM 系模型**](#52-universal-3d-blood-vessel-segmentation-foundation-model-vesselfm-far-exceeds-sam-based-models)
  - [**53. 透過圖神經網路精準預測肺癌患者生存期，發現 3 類致命亞型**](#53-graph-neural-networks-accurately-predict-lung-cancer-survival-discovering-3-fatal-subtypes)
  - [**54. 融合策略 AI 模型預測感染性休克死亡風險**](#54-fusion-strategy-ai-model-predicts-septic-shock-mortality-risk)
  - [**55. 全球首個 HIE 領域臨床思維圖譜模型，神經認知結果預測任務上效能提升 15%**](#55-worlds-first-clinical-graph-of-thought-model-in-hie-improves-neurocognitive-outcome-prediction-by-15)
  - [**56. 基於多維度 EHR 資料實現細粒度患者佇列建模，住院時間預測準確率提升 16.3%**](#56-fine-grained-patient-cohort-modeling-using-multidimensional-ehr-data-increases-length-of-stay-prediction-accuracy-by-163)
  - [**57. 深度學習模型 APEX，篩選潛在抗生素候選物**](#57-deep-learning-model-apex-screens-potential-antibiotic-candidates)
  - [**58. 基於基因測序和機器學習的廢水流行病學評估， ICA-Var 方法可最高提前 4 周檢出病毒**](#58-wastewater-epidemiology-assessment-using-gene-sequencing-and-machine-learning-ica-var-method-detects-viruses-up-to-4-weeks-early)
  - [**59. 雙向布朗橋擴散模型，提升虛擬染色結果可重複性**](#59-bidirectional-brownian-bridge-diffusion-model-enhances-reproducibility-of-virtual-staining)
  - [**60. 醫學 GraphRAG 重新整理問答準確性記錄，在 11 個資料集評測上達 SOTA**](#60-medical-graphrag-breaks-qa-accuracy-records-achieving-sota-on-11-benchmark-datasets)
  - [**61. Healthcare Agent 自動檢測醫療倫理安全問題**](#61-healthcare-agent-automatically-detects-medical-ethics-and-safety-issues)
  - [**62. 血液細胞影象分類器 CytoDiffusion 助力白血病發現，能力超越臨床專家**](#62-blood-cell-image-classifier-cytodiffusion-assists-in-discovering-leukemia-surpassing-clinical-experts)
  - [**63. UCL 團隊提出聯邦學習框架 MORPHFED，實現跨機構血液形態分析**](#63-ucl-team-proposes-federated-learning-framework-morphfed-for-cross-institutional-blood-morphology-analysis)
  - [**64. 法國團隊提出可解釋機器學習框架，精準預測 HCC 肝移植候選者死亡風險**](#64-french-team-proposes-explainable-machine-learning-framework-for-accurate-mortality-prediction-in-hcc-liver-transplant-candidates)
  - [**65. 斯坦福大學提出首個原生三維腹部 CT 視覺語言模型 Merlin**](#65-stanford-university-proposes-merlin-the-first-native-3d-abdominal-ct-vision-language-model)
- [**AI+ 材料化學**](#ai-materials-chemistry)
  - [**1. 高通量計算框架 33 分鐘生成 12 萬種新型 MOFs 候選材料**](#1-high-throughput-computational-framework-generates-120000-novel-mof-candidates-in-33-minutes)
  - [**2. 機器學習演算法模型篩選 P-SOC 電極材料**](#2-machine-learning-algorithm-screens-p-soc-electrode-materials)
  - [**3. SEN 機器學習模型，實現高精度的材料效能預測**](#3-sen-machine-learning-model-achieves-high-accuracy-material-property-predictions)
  - [**4. 深度學習工具 GNoME 發現 220 萬種新晶體**](#4-deep-learning-tool-gnome-discovers-22-million-new-crystals)
  - [**5. 場誘導遞迴嵌入原子神經網路可準確描述外場強度、方向變化**](#5-field-induced-recursively-embedded-atom-neural-network-accurately-describes-external-field-strength-and-direction-changes)
  - [**6. 機器學習預測多孔材料水吸附等溫線**](#6-machine-learning-predicts-water-adsorption-isotherms-of-porous-materials)
  - [**7. 利用機器學習最佳化 BiVO(4) 光陽極的助催化劑**](#7-using-machine-learning-to-optimize-co-catalysts-for-bivo4-photoanodes)
  - [**8. RetroExplainer 演算法基於深度學習進行逆合成預測**](#8-retroexplainer-algorithm-performs-retrosynthesis-prediction-based-on-deep-learning)
  - [**9. 深度神經網路+自然語言處理，開發抗蝕合金**](#9-deep-neural-networks--nlp-used-to-develop-corrosion-resistant-alloys)
  - [**10. 深度學習透過表面觀察確定材料的內部結構**](#10-deep-learning-determines-materials-internal-structures-through-surface-observations)
  - [**11. 利用創新 X 射線閃爍體開發 3 種新材料**](#11-developing-3-new-materials-using-innovative-x-ray-scintillators)
  - [**12. 半監督學習提取無標籤資料中的隱藏資訊**](#12-semi-supervised-learning-extracts-hidden-information-from-unlabeled-data)
  - [**13. 基於自動機器學習進行知識自動提取**](#13-automated-knowledge-extraction-based-on-automl)
  - [**14. 一種三維 MOF 材料吸附行為預測的機器學習模型 Uni-MOF**](#14-uni-mof-a-machine-learning-model-predicting-adsorption-behavior-in-3d-mof-materials)
  - [**15. 微電子加速邁向後摩爾時代！整合 DNN 與奈米薄膜技術，精準分析入射光角度**](#15-microelectronics-accelerates-towards-the-post-moore-era-integrating-dnn-with-nanomembrane-technology-to-precisely-analyze-incident-light-angles)
  - [**16. 重塑鋰電池效能邊界，基於整合學習提出簡化電化學模型**](#16-reshaping-lithium-battery-performance-boundaries-proposing-a-simplified-electrochemical-model-based-on-ensemble-learning)
  - [**17. 基於機器學習，最強鐵基超導磁體誕生**](#17-the-strongest-iron-based-superconducting-magnet-born-via-machine-learning)
  - [**18. 神經網路替代密度泛函理論！通用材料模型實現超精準預測**](#18-neural-networks-replace-density-functional-theory-universal-materials-model-achieves-ultra-precise-predictions)
  - [**19. 神經網路密度泛函框架開啟物質電子結構預測的黑箱**](#19-neural-network-density-functional-framework-opens-the-black-box-of-matters-electronic-structure-prediction)
  - [**20. 用神經網路首創全前向智慧光計算訓練架構，國產光晶片實現重大突破**](#20-first-fully-forward-mode-training-architecture-for-optical-computing-using-neural-networks-achieves-major-breakthrough-in-domestic-optical-chips)
  - [**21. 化學大語言模型 ChemLLM 覆蓋 7 百萬問答資料，專業能力比肩 GPT-4**](#21-chemistry-llm-chemllm-covers-7-million-qa-data-professional-capabilities-rival-gpt-4)
  - [**22. 可晶圓級生產的人工智慧自適應微型光譜儀**](#22-wafer-scale-producible-ai-adaptive-micro-spectrometers)
  - [**23. GNNOpt 模型，識別數百種太陽能電池和量子候選材料**](#23-gnnopt-model-identifies-hundreds-of-solar-cell-and-quantum-material-candidates)
  - [**24. 開源 OMat24 資料集，含 1.1 億 DFT 計算結果**](#24-open-omat24-dataset-contains-110-million-dft-calculation-results)
  - [**25. 透過機器學習合成的新型耐火高熵合金，室溫延展性極佳**](#25-novel-refractory-high-entropy-alloy-synthesized-via-machine-learning-boasts-excellent-room-temperature-ductility)
  - [**26. 材料生成模型 FlowLLM，資料集覆蓋超 4.5w 種材料**](#26-material-generative-model-flowllm-features-a-dataset-covering-over-45k-materials)
  - [**27. 用主動學習識別 1.4 萬個高熵氧化物，成功篩選 4 種高活性析氫催化劑**](#27-using-active-learning-to-identify-14000-high-entropy-oxides-successfully-screening-4-high-activity-hydrogen-evolution-catalysts)
  - [**28. 深度學習模型 BETE-NET，超導材料搜尋效率提升 5 倍**](#28-deep-learning-model-bete-net-boosts-superconducting-material-search-efficiency-by-5x)
  - [**29. 梯度提升決策樹 (GBDT) 技術，進一步提高高熵合金抗氧化效能的高精度預測**](#29-gradient-boosting-decision-tree-gbdt-technology-further-improves-high-precision-prediction-of-high-entropy-alloy-oxidation-resistance)
  - [**30. 分子設計 RingFormer 框架，更精準預測有機材料分子光電效能**](#30-molecular-design-framework-ringformer-more-precisely-predicts-organic-material-molecular-optoelectronic-properties)
  - [**31. 無機逆合成規劃方法 Retrieval-Retro，提高無機材料合成的效率和準確性**](#31-inorganic-retrosynthesis-planning-method-retrieval-retro-improves-inorganic-material-synthesis-efficiency-and-accuracy)
  - [**32. 以大模型解析氫化物固態電解質傳導機制，建立可靠活化能預測模型**](#32-using-large-models-to-decipher-hydride-solid-state-electrolyte-conduction-mechanisms-establishing-a-reliable-activation-energy-prediction-model)
  - [**33. 基於機器學習實現萬億級質譜資料搜尋，發現未知化學反應**](#33-tera-scale-mass-spectrometry-data-search-enabled-by-machine-learning-uncovers-unknown-chemical-reactions)
  - [**34. 基於擴散模型的生成式人工智慧結構解析方法 PXRDnet，成功解析 200 種複雜模擬奈米晶體**](#34-generative-ai-structure-solution-method-pxrdnet-based-on-diffusion-models-successfully-solves-200-complex-simulated-nanocrystals)
  - [**35. DreaMS 模型覆蓋 2 億分子質譜圖，構建全球最大規模質譜資料集 GeMS**](#35-dreams-model-covers-200-million-molecular-mass-spectra-building-the-worlds-largest-mass-spec-dataset-gems)
  - [**36. 等變機器學習框架，加速材料大規模電場模擬**](#36-equivariant-machine-learning-framework-accelerates-large-scale-electric-field-simulations-of-materials)
  - [**37. 多源資料整合方法篩選 25 類水泥熟料替代材料，相當於減排 12 億噸溫室氣體**](#37-multi-source-data-integration-method-screens-25-types-of-cement-clinker-alternatives-equivalent-to-reducing-12-billion-tons-of-greenhouse-gases)
  - [**38. UNIMATE 首次實現拓撲生成/效能預測等任務的統一建模**](#38-unimate-achieves-unified-modeling-of-topology-generationproperty-prediction-for-the-first-time)
  - [**39. 全原子擴散 Transformer 框架，首次實現週期性與非週期性原子系統統一生成**](#39-all-atom-diffusion-transformer-framework-enables-unified-generation-of-periodic-and-aperiodic-atomic-systems-for-the-first-time)
  - [**40. FASTSOLV 模型實現任意溫度下的小分子溶解度預測，推理速度快 50 倍**](#40-fastsolv-model-realizes-small-molecule-solubility-prediction-at-any-temperature-accelerating-inference-speed-by-50x)
  - [**41. 基於多模態機器學習模型的新方法，無需完整晶體結構即可預測材料性質**](#41-novel-method-based-on-multimodal-machine-learning-models-predicts-material-properties-without-complete-crystal-structures)
  - [**42. AI 模型 CGformer 創新融合全域性注意力機制，助力高熵材料研發**](#42-ai-model-cgformer-innovatively-integrates-global-attention-mechanisms-aiding-high-entropy-material-rd)
  - [**43. 全新幾何結構約束整合方法 SCIGEN，可適配任意預訓練擴散模型**](#43-novel-structural-constraint-integration-method-scigen-adapts-to-any-pre-trained-diffusion-model)
  - [**44. 物理先驗生成式人工智慧模型 SpectroGen 僅需單一光譜模態輸入，達到實驗相關性高達 99% 的跨模態光譜生成**](#44-physically-informed-generative-ai-model-spectrogen-requires-only-single-modality-input-to-achieve-cross-modal-generation-with-99-experimental-correlation)
  - [**45. MOF-ChemUnity 重構 MOF 全景知識，推動材料發現進入「可解釋 AI」時代**](#45-mof-chemunity-reconstructs-mof-panoramic-knowledge-pushing-material-discovery-into-the-explainable-ai-era)
  - [**46. 輕量化通用勢模型 PET-MAD 釋出，極少樣本即達專用模型級精度**](#46-lightweight-universal-potential-model-pet-mad-released-achieving-dedicated-model-level-precision-with-minimal-samples)
  - [**47. AI 系統 ChemOntology 釋出，融合化學知識使反應路徑搜尋成本減半**](#47-ai-system-chemontology-released-halving-reaction-path-search-costs-by-integrating-chemical-knowledge)
  - [**48. 普林斯頓等聯合提出大模型預測 MOF 自由能方法，高精度評估合成可行性**](#48-princeton-and-others-jointly-propose-llm-method-for-predicting-mof-free-energy-highly-accurately-assessing-synthesis-feasibility)
  - [**49. 耶魯大學團隊提出 MOSAIC 模型，大模型協作生成高可靠化學合成方案**](#49-yale-university-team-proposes-mosaic-model-coordinating-llms-to-generate-highly-reliable-chemical-synthesis-schemes)
  - [**50. MIT 等團隊提出擴散模型 DiffSyn，實現材料合成路徑的生成式規劃**](#50-mit-and-others-propose-diffusion-model-diffsyn-enabling-generative-planning-of-material-synthesis-pathways)
  - [**51. 密歇根大學與孚能科技聯合提出「發現學習」方法，大幅縮短電池壽命預測週期**](#51-university-of-michigan-and-farasis-energy-jointly-propose-discovery-learning-method-drastically-shortening-battery-life-prediction-cycles)
  - [**52. 康奈爾大學提出 SCAN 框架，高精度預測並解釋電池電解質效能**](#52-cornell-university-proposes-scan-framework-highly-accurately-predicting-and-explaining-battery-electrolyte-performance)
  - [**53. MIT 提出基礎大模型 DefectNet，實現材料內部缺陷無損表徵與定量**](#53-mit-proposes-foundation-large-model-defectnet-for-non-destructive-characterization-and-quantification-of-internal-material-defects)
  - [**54. 康奈爾大學提出多智慧體平臺 EMSeek，實現電子顯微影象全流程自動分析**](#54-cornell-university-proposes-multi-agent-platform-emseek-achieving-full-pipeline-automated-analysis-of-electron-microscopy-images)
- [**AI+ 動植物科學**](#ai-zoology-botany)
  - [**1. SBeA 基於少樣本學習框架進行動物社會行為分析**](#1-sbea-analyzes-animal-social-behaviors-based-on-a-few-shot-learning-framework)
  - [**2. 基於孿生網路的深度學習方法，自動捕捉胚胎髮育過程**](#2-deep-learning-method-based-on-siamese-networks-automatically-captures-embryonic-development-processes)
  - [**3. 利用無人機採集植物表型資料的系統化流程，預測最佳採收日期**](#3-systematic-pipeline-for-collecting-plant-phenotype-data-via-drones-to-predict-optimal-harvest-dates)
  - [**4. AI 相機警報系統準確區分老虎和其他物種**](#4-ai-camera-alert-system-accurately-distinguishes-tigers-from-other-species)
  - [**5. 利用拉布拉多獵犬資料，對比 3 種模型，發現了影響嗅覺檢測犬表現的行為特性**](#5-using-labrador-retriever-data-and-comparing-3-models-reveals-behavioral-traits-affecting-detection-dogs-performance)
  - [**6. 基於人臉識別 ArcFace Classification Head 的多物種影象識別模型**](#6-multi-species-image-recognition-model-based-on-arcface-classification-head-for-face-recognition)
  - [**7. 利用 Python API 與計算機視覺 API，監測日本的櫻花開放情況**](#7-monitoring-cherry-blossom-blooming-in-japan-using-python-api-and-computer-vision-api)
  - [**8. 基於機器學習的群體遺傳方法，揭示葡萄風味的形成機制**](#8-machine-learning-based-population-genetics-method-reveals-the-formation-mechanism-of-grape-flavors)
  - [**9. 綜述：藉助 AI 更高效地開啟生物資訊學研究**](#9-review-unlocking-bioinformatics-research-more-efficiently-with-ai)
  - [**10. BirdFlow 模型準確預測候鳥的飛行路徑**](#10-birdflow-model-accurately-predicts-flight-paths-of-migratory-birds)
  - [**11. 新的鯨魚生物聲學模型，可識別 8 種鯨類**](#11-new-whale-bioacoustics-model-identifies-8-cetacean-species)
  - [**12. 用機器學習分離抹香鯨發音字母表，高度類似人類語言，資訊承載能力更強**](#12-machine-learning-isolates-the-sperm-whale-phonetic-alphabet-highly-similar-to-human-language-with-stronger-information-carrying-capacity)
  - [**13. PlantLncBoost 模型，跨物種 lncRNA 預測準確率最高達 96%**](#13-plantlncboost-model-achieves-up-to-96-accuracy-in-cross-species-lncrna-prediction)
  - [**14. Perch 2.0 覆蓋近 1.5 萬個物種，重新整理生物聲學分類檢測 SOTA**](#14-perch-20-covers-nearly-15000-species-refreshing-sota-in-bioacoustic-classification-detection)
- [**AI+ 農林牧漁**](#ai-agriculture-forestry-animal-husbandry)
  - [**1. 利用卷積神經網路，對水稻產量進行迅速、準確的統計**](#1-using-convolutional-neural-networks-for-rapid-and-accurate-rice-yield-estimation)
  - [**2. 透過 YOLOv5 演算法，設計監測母豬姿勢與豬仔出生的模型**](#2-model-designed-via-yolov5-algorithm-monitors-sow-posture-and-piglet-birth)
  - [**3. 結合實驗室觀測與機器學習，證明番茄與菸草植物在脅迫環境下發出的超聲波能在空氣中傳播**](#3-combining-laboratory-observation-and-machine-learning-to-prove-that-ultrasonic-sounds-emitted-by-stressed-tomato-and-tobacco-plants-can-travel-in-air)
  - [**4. 無人機+ AI 影象分析，檢測林業害蟲**](#4-drone--ai-image-analysis-detects-forestry-pests)
  - [**5. 計算機視覺+深度學習開發奶牛跛行檢測系統**](#5-computer-vision--deep-learning-developed-for-a-dairy-cow-lameness-detection-system)
- [**AI+ 氣象學**](#ai-meteorology)
  - [**1. 綜述：資料驅動的機器學習天氣預報模型**](#1-review-data-driven-machine-learning-weather-forecasting-models)
  - [**2. 綜述：從雹暴中心收集資料，利用大模型預測極端天氣**](#2-review-collecting-data-from-hailstorm-centers-and-predicting-extreme-weather-using-large-models)
  - [**3. 利用全球風暴解析模擬與機器學習，建立新演算法，準確預測極端降水**](#3-creating-new-algorithms-to-accurately-predict-extreme-precipitation-using-global-storm-resolving-simulations-and-machine-learning)
  - [**4. 基於隨機森林的機器學習模型 CSU-MLP，預測中期惡劣天氣**](#4-random-forest-based-machine-learning-model-csu-mlp-predicts-medium-range-severe-weather)
  - [**5. 端到端資料驅動天氣預報系統 Aardvark Weather，預測速度超傳統方法數十倍**](#5-end-to-end-data-driven-weather-forecasting-system-aardvark-weather-speeds-up-predictions-by-dozens-of-times-compared-to-traditional-methods)
  - [**6. 機器學習天氣預報系統 FCN3，支援單卡極速推理**](#6-machine-learning-weather-forecasting-system-fcn3-supports-ultra-fast-single-gpu-inference)
  - [**7. 印度季風預測模型基於 36 個氣象站點，實現城區尺度精細預報**](#7-indian-monsoon-forecasting-model-based-on-36-weather-stations-achieves-city-scale-fine-forecasting)
  - [**8. ACE2 僅需 2 分鐘即可完成一次 4 個月季節預報**](#8-ace2-completes-a-4-month-seasonal-forecast-in-just-2-minutes)
  - [**9. 增量天氣預報模型 VA-MoE 釋出，引數精簡 75% 仍達 SOTA 效能**](#9-incremental-weather-forecasting-model-va-moe-released-achieving-sota-performance-with-75-parameter-reduction)
  - [**10. 增強型闡明滾動擴散模型 ERDM 釋出，解長期預報難題，中遠期預報持續領先 EDM 基準**](#10-elucidated-rolling-diffusion-model-erdm-released-solving-long-term-forecasting-challenges-and-maintaining-a-lead-over-edm-baselines-in-medium-to-long-term-forecasts)
  - [**11. 新型潛在擴散模型 OmniCast 釋出，解決自迴歸天氣預報模型誤差累計問題**](#11-novel-latent-diffusion-model-omnicast-released-resolving-error-accumulation-in-autoregressive-weather-forecasting-models)
  - [**12. 英偉達提出長距離蒸餾新方法，突破 AI 長期天氣預報瓶頸**](#12-nvidia-proposes-a-novel-long-range-distillation-method-breaking-ai-bottlenecks-in-long-term-weather-forecasting)
  - [**13. 聯合團隊提出圖神經網路模型 SeaCast，超快速度實現區域海洋預報**](#13-joint-team-proposes-graph-neural-network-model-seacast-achieving-ultra-fast-regional-ocean-forecasting)
- [**AI+ 天文學**](#ai-astronomy)
  - [**1. PRIMO 演算法學習黑洞周圍的光線傳播規律，重建出更清晰的黑洞影象**](#1-primo-algorithm-learns-light-propagation-rules-around-black-holes-to-reconstruct-sharper-black-hole-images)
  - [**2. 利用模擬資料訓練計算機視覺演算法，對天文影象進行銳化「還原」**](#2-training-computer-vision-algorithms-with-simulated-data-to-sharpen-and-restore-astronomical-images)
  - [**3. 利用無監督機器學習演算法 Astronomaly ，找到了之前為人忽視的異常現象**](#3-using-unsupervised-machine-learning-algorithm-astronomaly-to-find-previously-overlooked-anomalies)
  - [**4. 基於機器學習的 CME 識別與引數獲取方法**](#4-machine-learning-based-method-for-cme-identification-and-parameter-extraction)
  - [**5. 深度學習發現 107 例中性碳吸收線**](#5-deep-learning-discovers-107-cases-of-neutral-carbon-absorption-lines)
  - [**6. StarFusion 模型實現高空間解析度影象的預測**](#6-starfusion-model-achieves-high-spatial-resolution-image-prediction)
  - [**7. 基於 SD3 開發衛星影象生成方法，構建當前最大規模遙感資料集 EcoMapper**](#7-satellite-image-generation-method-developed-based-on-sd3-constructing-the-largest-remote-sensing-dataset-to-date-ecomapper)
  - [**8. 地理空間人工智慧 Earth AI 聚焦 3 大核心資料，地理空間推理能力提升 64%**](#8-geospatial-ai-earth-ai-focuses-on-3-core-data-types-improving-geospatial-reasoning-capabilities-by-64)
  - [**9. 首個天文多模態基礎模型 AION-1 誕生，基於 2 億天文目標預訓練**](#9-the-first-astronomical-multimodal-foundation-model-aion-1-is-born-pre-trained-on-200-million-astronomical-targets)
  - [**10. 全新資料驅動的流程，可利用 CNN 從 81 萬類星體中精準識別 7 個罕見透鏡樣本**](#10-novel-data-driven-pipeline-precisely-identifies-7-rare-lensed-samples-from-810000-quasars-using-cnn)
  - [**11. ESA 團隊提出半監督方法 AnomalyMatch，從近億哈勃資料中高效篩查稀有天體**](#11-esa-team-proposes-semi-supervised-method-anomalymatch-to-efficiently-screen-rare-celestial-bodies-from-nearly-100-million-hubble-records)
  - [**12. 華威大學提出 RAVEN 驗證流程，確認 118 顆新系外行星**](#12-university-of-warwick-proposes-the-raven-validation-pipeline-confirming-118-new-exoplanets)
  - [**13. 華威大學提出整合學習框架，實現盾牌座 δ 型星星震學引數高精度預測**](#13-university-of-warwick-proposes-an-ensemble-learning-framework-to-highly-accurately-predict-asteroseismic-parameters-for-δ-scuti-stars)
  - [**14. 西班牙科研團隊提出 StreakMind 系統，利用 AI 自動檢測天文影象星軌拖影**](#14-spanish-research-team-proposes-the-streakmind-system-utilizing-ai-to-automatically-detect-satellite-streaks-in-astronomical-images)
- [**AI+ 自然災害**](#ai-natural-disaster)
  - [**1. 機器學習預測未來 40 年的地面沉降風險**](#1-machine-learning-predicts-land-subsidence-risk-over-the-next-40-years)
  - [**2. 語義分割模型 SCDUNet++ 用於滑坡測繪**](#2-semantic-segmentation-model-scdunet-used-for-landslide-mapping)
  - [**3. 神經網路將太陽二維影象轉為三維重建影象**](#3-neural-networks-convert-2d-solar-images-into-3d-reconstructed-images)
  - [**4. 可疊加神經網路分析自然災害中的影響因素**](#4-additive-neural-networks-analyze-influencing-factors-in-natural-disasters)
  - [**5. 利用可解釋性 AI ，分析澳大利亞吉普斯蘭市的不同地理因素**](#5-using-explainable-ai-to-analyze-various-geographical-factors-in-gippsland-australia)
  - [**6. 基於機器學習的洪水預報模型**](#6-machine-learning-based-flood-forecasting-model)
  - [**7. ED-DLSTM實現無監測資料地區洪水預測**](#7-ed-dlstm-achieves-flood-prediction-in-unmonitored-areas)
  - [**8. ChloroFormer 模型提前預警海洋藻類爆發**](#8-chloroformer-model-provides-early-warning-of-marine-algal-blooms)
  - [**9. 首個海洋大語言模型 OceanGPT 入選 ACL 2024！水下具身智慧成現實**](#9-the-first-marine-large-language-model-oceangpt-accepted-by-acl-2024-underwater-embodied-ai-becomes-reality)
  - [**10. AI 預測預測全球變暖狀況**](#10-ai-predicts-global-warming-trends)
  - [**11. GeoAI 新模型，解釋青藏高原地表熱流分佈**](#11-new-geoai-model-explains-surface-heat-flow-distribution-on-the-tibetan-plateau)
  - [**12. 「問海」海洋環境智慧預報大模型，效能優於數值海洋預報**](#12-wenhai-marine-environment-intelligent-forecasting-large-model-outperforms-numerical-marine-forecasting)
  - [**13. 明尼蘇達大學提出知識引導機器學習模型 FHNN，實現高精度洪水預報**](#13-university-of-minnesota-proposes-knowledge-guided-machine-learning-model-fhnn-realizing-high-precision-flood-forecasting)
  - [**14. Google 釋出全球洪水預報系統第二版，顯著延長預報有效時長**](#14-google-releases-version-2-of-its-global-flood-forecasting-system-significantly-extending-valid-forecast-times)
- [**其他**](#others)
  - [**1. TacticAI 足球助手戰術佈局實用性高達 90%**](#1-tacticai-football-assistant-hits-90-practical-utility-in-tactical-layouts)
  - [**2. 去噪擴散模型 SPDiff 實現長程人流移動模擬**](#2-denoising-diffusion-model-spdiff-enables-long-range-crowd-movement-simulation)
  - [**3. 智慧化科學設施推進科研正規化變革**](#3-intelligent-scientific-facilities-drive-paradigm-shifts-in-research)
  - [**4. DeepSymNet 基於監督學習來表示符號表示式**](#4-deepsymnet-represents-symbolic-expressions-based-on-supervised-learning)
  - [**5. 大語言模型 ChipNeMo 輔助工程師完成晶片設計**](#5-large-language-model-chipnemo-assists-engineers-in-chip-design)
  - [**6. AlphaGeometry 可解決幾何學問題**](#6-alphageometry-can-solve-geometry-problems)
  - [**7. 強化學習用於城市空間規劃**](#7-reinforcement-learning-applied-to-urban-spatial-planning)
  - [**8. ChatArena 框架，與大語言模型一起玩狼人殺**](#8-chatarena-framework-playing-werewolf-with-large-language-models)
  - [**9. 綜述：30 位學者合力發表 Nature，10 年回顧解構 AI 如何重塑科研正規化**](#9-review-30-scholars-co-publish-in-nature-10-year-retrospective-deconstructs-how-ai-reshapes-scientific-paradigms)
  - [**10. Ithaca 協助金石學家進行文字修復、時間歸因和地域歸因的工作**](#10-ithaca-assists-epigraphers-in-text-restoration-chronological-attribution-and-geographical-attribution)
  - [**11. AI 在超光學中的正問題及逆問題、基於超表面系統的資料分析**](#11-ai-in-forward-and-inverse-problems-of-meta-optics-data-analysis-based-on-metasurface-systems)
  - [**12. 一種新的地理空間人工智慧方法：地理神經網路加權邏輯迴歸**](#12-a-new-geospatial-artificial-intelligence-method-geographically-neural-network-weighted-logistic-regression)
  - [**13. 利用擴散模型生成神經網路引數，將時空少樣本學習轉變為擴散模型的預訓練問題**](#13-using-diffusion-models-to-generate-neural-network-parameters-transforming-spatiotemporal-few-shot-learning-into-a-diffusion-model-pre-training-problem)
  - [**14. 李飛飛團隊 AI4S 最新洞察：16 項創新技術彙總，覆蓋生物/材料/醫療/問診**](#14-latest-ai4s-insights-from-fei-fei-lis-team-16-innovative-technologies-summarized-covering-biologymaterialshealthcarediagnostics)
  - [**15. 精準預測武漢房價！osp-GNNWR 模型準確描述複雜空間過程和地理現象**](#15-accurate-prediction-of-wuhan-housing-prices-osp-gnnwr-model-accurately-describes-complex-spatial-processes-and-geographical-phenomena)
  - [**16. 引入零樣本學習，釋出針對甲骨文破譯最佳化的條件擴散模型**](#16-introducing-zero-shot-learning-to-release-a-conditional-diffusion-model-optimized-for-oracle-bone-script-decipherment)
  - [**17. 斯坦福/蘋果等 23 所機構釋出 DCLM 基準測試，基礎模型與 Llama3 8B 表現相當**](#17-stanfordapple-and-23-other-institutions-release-the-dclm-benchmark-foundation-model-performs-on-par-with-llama3-8b)
  - [**18. PoCo 解決資料來源異構難題，實現機器人多工靈活執行**](#18-poco-solves-the-data-source-heterogeneity-dilemma-enabling-robots-to-execute-multi-tasks-flexibly)
  - [**19. 含 14 萬張影象！甲骨文資料集助力團隊摘冠 ACL 最佳論文**](#19-containing-140000-images-oracle-bone-script-dataset-helps-team-win-acl-best-paper-award)
  - [**20. 基於預訓練 LLM 提出通道預測方案，GPT-2 賦能無線通訊物理層**](#20-proposing-a-channel-prediction-scheme-based-on-pre-trained-llms-gpt-2-empowers-the-physical-layer-of-wireless-communications)
  - [**21. 首個多縫線刺繡生成對抗網路模型**](#21-the-first-generative-adversarial-network-model-for-multi-stitch-embroidery)
  - [**22. 快速自動掃描套件 FAST 高效獲取樣本資訊**](#22-fast-automated-scanning-toolkit-fast-efficiently-acquires-sample-information)
  - [**23. 人口動態基礎模型 PDFM 已開源，精準預測美國失業率和貧困率**](#23-population-dynamics-foundation-model-pdfm-open-sourced-precisely-predicting-us-unemployment-and-poverty-rates)
  - [**24. 深度學習模型 CatGWR，估計空間非平穩性**](#24-deep-learning-model-catgwr-estimates-spatial-non-stationarity)
  - [**25. 全球首個 VR 運動干預系統 REVERIE，重塑青少年腦-身-心健康**](#25-worlds-first-vr-exercise-intervention-system-reverie-reshapes-youth-brain-body-mind-health)
  - [**26. Aeneas 基於超 176k 銘文資料，首次實現古羅馬銘文的任意長度修復**](#26-based-on-over-176k-inscription-data-aeneas-achieves-arbitrary-length-restoration-of-ancient-roman-inscriptions-for-the-first-time)
  - [**27. 全景影片生成框架 PanoWan，兼顧零樣本影片編輯**](#27-panoramic-video-generation-framework-panowan-also-handles-zero-shot-video-editing)
  - [**28. 基於 YOLOv11 的陶瓷分類智慧框架融合視覺建模與經濟分析，實現文物分類及價值估測**](#28-yolov11-based-ceramic-classification-intelligent-framework-integrates-visual-modeling-and-economic-analysis-achieving-artifact-classification-and-value-estimation)
  - [**29. 「微波大腦」晶片問世，同時處理超高速資料和無線通訊訊號，176 毫瓦功耗下準確率達 75%**](#29-microwave-brain-chip-born-simultaneously-processing-ultra-high-speed-data-and-wireless-signals-with-75-accuracy-at-176-milliwatts-power)
  - [**30. 時空插補與預測模型 STIMP 釋出，實現沿海葉綠素 a 時空分佈精準預測**](#30-spatiotemporal-imputation-and-prediction-model-stimp-released-realizing-precise-predictions-of-coastal-chlorophyll-a-distribution)
  - [**31. MIT 等基於機器學習實現小樣本下的等離子體動力學高精度預測**](#31-mit-and-others-achieve-high-precision-prediction-of-plasma-dynamics-under-few-shot-conditions-based-on-machine-learning)
  - [**32. Reac-Discovery 融合數學建模/機器學習/自動化實驗，解決自驅動實驗室系統通用性難題**](#32-reac-discovery-fuses-mathematical-modeling-machine-learning-and-automated-experiments-to-solve-the-universality-challenge-of-self-driving-laboratory-systems)
  - [**33. 首個經人類皮層資料驗證的神經元建模框架 NOBLE 問世**](#33-the-first-neuron-modeling-framework-noble-validated-by-human-cortical-data-is-introduced)
  - [**34. 影象地理定位框架 LocDiff 上線，實現無需網格與參考庫的全球級精準定位**](#34-image-geolocation-framework-locdiff-goes-online-enabling-grid-free-and-reference-library-free-global-precision-positioning)
  - [**35. 機器學習結合 py-GC-MS 技術，精準識別太古代岩石生命證據**](#35-machine-learning-combined-with-py-gc-ms-precisely-identifies-evidence-of-life-in-archean-rocks)
  - [**36. 機器學習結合 py-GC-MS 技術，精準識別太古代岩石生命證據**](#36-tsinghua-university-team-proposes-neuro-symbolic-regression-method-nd-to-automatically-derive-complex-network-dynamics-formulas)
  - [**37. 浙江大學團隊提出地質約束成礦預測方法，顯式刻畫成礦各向異性**](#37-zhejiang-university-team-proposes-geologically-constrained-mineral-prospectivity-prediction-method-explicitly-depicting-mineralization-anisotropy)
  - [**38. 清華與芝大團隊 Nature 發文：AI 工具擴大科學家影響力但收縮科學焦點**](#38-tsinghua-and-uchicago-team-publishes-in-nature-ai-tools-expand-scientists-impact-but-contract-sciences-focus)
  - [**39. 加州大學團隊提出 AI 增強型晶片級光譜儀，超小體積實現高光譜保真度**](#39-uc-team-proposes-ai-augmented-chip-scale-spectrometer-achieving-high-spectral-fidelity-in-an-ultra-small-volume)
  - [**40. 美國能源部橡樹嶺國家實驗室提出 D-CHAG 方法，大幅降低多通道基礎模型記憶體佔用**](#40-us-doe-oak-ridge-national-lab-proposes-d-chag-method-significantly-reducing-memory-footprint-for-multi-channel-foundation-models)
  - [**41. Polymathic AI 團隊提出連續介質大模型 Walrus，跨域模擬效能創紀錄**](#41-polymathic-ai-team-proposes-continuum-foundation-model-walrus-setting-records-in-cross-domain-simulation-performance)
  - [**42. EPFL 提出新型架構 DYNAMI-CAL GraphNet，物理資訊 GNN 精準建模多體動力學**](#42-epfl-proposes-novel-architecture-dynami-cal-graphnet-a-physics-informed-gnn-accurately-modeling-multi-body-dynamics)
  - [**43. MIT 提出新型方法 Wave-Former，實現完全遮擋物體高精度三維重建**](#43-mit-proposes-novel-method-wave-former-achieving-high-precision-3d-reconstruction-of-completely-occluded-objects)
  - [**44. MIT 提出 DRiffusion 草稿-精煉並行框架，實現擴散模型推理無損加速**](#44-mit-proposes-driffusion-draft-and-refine-parallel-framework-realizing-lossless-acceleration-for-diffusion-model-inference)
  - [**45. 以色列理工學院提出 Task Tokens，實現行為基礎模型靈活適配特定任務**](#45-technion---israel-institute-of-technology-proposes-task-tokens-allowing-behavior-foundation-models-to-flexibly-adapt-to-specific-tasks)
  - [**46. MIT 等提出 EnergAIzer 框架，實現 AI 工作負載 GPU 功耗快速精確估計**](#46-mit-and-others-propose-energaizer-framework-achieving-fast-and-accurate-gpu-power-estimation-for-ai-workloads)
  - [**47. UIUC 提出異構智慧體框架 Eywa，突破語言中心化大模型限制**](#47-uiuc-proposes-heterogeneous-agent-framework-eywa-breaking-through-the-limits-of-language-centric-large-models)
  - [**48. 斯坦福大學等利用 LSTM 代理模型，實現二階非線性光學 252 倍加速模擬**](#48-stanford-university-and-others-use-lstm-surrogate-models-to-achieve-252x-accelerated-simulation-of-second-order-nonlinear-optics)

## **前言**

從 2020 年開始，以 AlphaFold 為代表的科研專案將 AI for Science (AI4S) 推向了 AI 應用的主舞臺。近年來，從生物醫藥到天文氣象、再到材料化學等基礎學科，都成為了 AI 的新戰場。

隨著越來越多的交叉學科人才開始在其研究領域應用機器學習、深度學習等技術進行資料處理、構建模型，加之跨學科研究團隊的合作日益加強，AI4S 的能力被更多科研人員所關注到，但卻未達到規模化應用的目標。提高相關研究的可複用性、降低技術門檻、提高資料質量等諸多問題亟待解決。

目前，除了高校、科研機構在積極探索 AI4S 外，多國政府及頭部科技企業也都關注到了 AI 革新科研的潛力，並進行了相關的政策疏導與佈局，可以說 AI4S 已經是大勢所趨。

作為最早一批關注到 AI for Science 的社群，「HyperAI超神經」在陪伴行業成長的同時，也樂於將最新的研究進展與成果進行普適化分享，我們希望透過解讀前沿論文與政策的方式，令更多團隊看到 AI 對於科研的幫助，為 AI for Science 的發展貢獻力量。

目前，HyperAI超神經已經解讀分享了近 200 篇論文，為了便於大家檢索，我們將文章根據學科進行分類，並展示了發表期刊及時間，提取了關鍵詞（研究團隊、相關研究、資料集等），大家可以點選題目跳轉論文中文解讀頁面（內含完整論文下載連結）。

本文件將以開源專案的形式呈現，我們將持續更新解讀文章，同時也歡迎大家投稿優秀研究成果，如果您所在的團隊/課題組有報道需求，可新增微信：神經星星（微訊號：Hyperai01）。

## **AI+ 生物醫藥**

### **1. [AdaDR 在藥物重定位方面的效能優於多個基準方法](https://hyper.ai/news/30434)**

- **中文解讀：** [https://hyper.ai/news/30434](https://hyper.ai/news/30434)
- **科研團隊：** 中南大學李敏研究團隊
- **相關研究：** Gdataset 資料集、Cdataset 資料集、Ldataset 資料集、LRSSL 資料集、GCNs 框架、AdaDR
- **釋出期刊：** Bioinformatics, 2024.01
- **論文連結：** [Drug repositioning with adaptive graph convolutional networks](https://academic.oup.com/bioinformatics/article/40/1/btad748/7467059)

### **2. [IMN4NPD 加快分子網路中廣泛叢集的去複製，對自迴圈與成對節點提供標註](https://hyper.ai/news/30363)**

- **中文解讀：** [https://hyper.ai/news/30363](https://hyper.ai/news/30363)
- **科研團隊：** 中南大學劉韶研究團隊
- **相關研究：** MS/MS 光譜資料庫、Structure 資料庫、molDiscovery、NPClassifier、molDiscovery、t-SNE
- **釋出期刊：** Analytical Chemistry, 2024.02
- **論文連結：** [IMN4NPD: An Integrated Molecular Networking Workflow for Natural Product Dereplication](https://doi.org/10.1021/acs.analchem.3c04746)

### **3. [深度生成模型 MIDAS 用於單細胞多組學資料馬賽克整合](https://hyper.ai/news/29785)**

- **中文解讀：** [https://hyper.ai/news/29785](https://hyper.ai/news/29785)
- **科研團隊：** 軍事醫學研究院應曉敏研究團隊
- **相關研究：** IPBMC  資料集、dogma-full 資料集、teadog-full 資料集、MMIDAS、self-supervised learning、information-theoretic approaches、深度神經網路、SGVB、單細胞多組學馬賽克資料
- **釋出期刊：** Nature Biotechnology, 2024.01
- **論文連結：** [Mosaic integration and knowledge transfer of single-cell multimodal data with MIDAS](https://www.nature.com/articles/s41587-023-02040-y)

### **4. [基於蛋白質口袋的 3D 分子生成模型——ResGen](https://hyper.ai/news/29026)**

- **中文解讀：** [https://hyper.ai/news/29026](https://hyper.ai/news/29026)
- **科研團隊：** 浙大侯廷軍研究團隊
- **相關研究：** CrossDock2020 資料集、全域性自迴歸、原子自迴歸、並行多尺度建模、SBMG。比最優技術快 8 倍
- **釋出期刊：** Nature Machine Intelligence, 2023.09
- **論文連結：** [ResGen is a pocket-aware 3D molecular generation model based on parallel multiscale modelling](https://www.nature.com/articles/s42256-023-00712-7)

### **5. [大模型 + 機器學習高精度預測酶動力學引數](https://hyper.ai/news/29000)**

- **中文解讀：** [https://hyper.ai/news/29000](https://hyper.ai/news/29000)
- **科研團隊：** 中科院羅小舟研究團隊
- **相關研究：** kcat/Km  資料集、米氏常數資料集、pH 和溫度資料集、DLKcat 資料集、UniKP 框架、ProtT5-XL-UniRef50、SMILES Transformer model、整合性模型、隨機森林、極端隨機樹、線性迴歸模型
- **釋出期刊：** Nature Communications, 2023.12
- **論文連結：** [UniKP: a unified framework for the prediction of enzyme kinetic parameters](https://www.nature.com/articles/s41467-023-44113-1)

### **6. [MIT 利用深度學習發現新型抗生素](https://hyper.ai/news/28886)**

- **中文解讀：** [https://hyper.ai/news/28886](https://hyper.ai/news/28886)
- **科研團隊：** MIT 研究團隊
- **相關研究：** Mcule 資料庫、Broad Institute 資料庫、圖神經網路 Chemprop、深度學習。篩選出 3,646 種抗生素化合物
- **釋出期刊：** Nature, 2023.12
- **論文連結：** [Discovery of a structural class of antibiotics with explainable deep learning](https://www.nature.com/articles/s41586-023-06887-8)

### **7. [神經網路解密 GPCR-G 蛋白偶聯選擇性](https://hyper.ai/news/28361)**

- **中文解讀：** [https://hyper.ai/news/28361](https://hyper.ai/news/28361)
- **科研團隊：** 佛羅里達大學的研究團隊
- **相關研究：** 二元分類神經網路、機器學習、無監督深度學習模型。建立了包括不同哺乳動物的 124 種 GPCRs 的粗粒度模型
- **釋出期刊：** Cell Reports, 2023.09
- **論文連結：** [Rules and mechanisms governing G protein coupling selectivity of GPCRs](https://doi.org/10.1016/j.celrep.2023.113173)

### **8. [Macformer 將無環藥物菲卓替尼大環化](https://hyper.ai/news/28189)**

- **中文解讀：** [https://hyper.ai/news/28189](https://hyper.ai/news/28189)
- **科研團隊：** 華東理工大學的李洪林課題組
- **相關研究：** ZINC 資料集、ChEMBL 資料庫、深度學習模型、Transformer 架構、Macformer
- **釋出期刊：** Nature Communication, 2023.07
- **論文連結：** [Macrocyclization of linear molecules by deep learning to facilitate macrocyclic drug candidates discovery](https://www.nature.com/articles/s41467-023-40219-8)

### **9. [迴歸網路 + CGMD，預測百億種多肽的自組裝特性](https://hyper.ai/news/26408)**

- **中文解讀：** [https://hyper.ai/news/26408](https://hyper.ai/news/26408)
- **科研團隊：** 西湖大學的李文彬課題組
- **相關研究：** 拉丁超立方取樣、CGMD 模型、AP 預測模型、Transformer、MLP、TRN 模型。得到了五肽和十肽的 AP
- **釋出期刊：** Advanced Science, 2023.09
- **論文連結：** [Deep Learning Empowers the Discovery of Self-Assembling Peptides with Over 10 Trillion Sequences](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202301544)

### **10. [無監督學習預測 7100 萬種基因突變](https://hyper.ai/news/26154)**

- **中文解讀：** [https://hyper.ai/news/26154](https://hyper.ai/news/26154)
- **科研團隊：** 谷歌DeepMind 研究團隊
- **相關研究：** ClinVar 資料集、AlphaFold、弱標籤學習、無監督學習、AlphaMissense
- **釋出期刊：** Science, 2023.09
- **論文連結：** [Accurate proteome-wide missense variant effect prediction with AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492)

### **11. [基於圖神經網路 (GNN) 開發氣味分析 AI](https://hyper.ai/news/25952)**

- **中文解讀：** [https://hyper.ai/news/25952](https://hyper.ai/news/25952)
- **科研團隊：** Google Research 的分支 Osmo 公司
- **相關研究：** GS-LF 資料庫、GNN、貝葉斯最佳化演算法。在 53% 的化學分子、55% 的氣味描述詞判斷中優於人類
- **釋出期刊：** Science, 2023.08
- **論文連結：** [A principal odor map unifies diverse tasks in olfactory perception](https://www.science.org/doi/full/10.1126/science.ade4401)

### **12. [圖神經網路篩選安全高效的抗衰老成分](https://hyper.ai/news/25822)**

- **中文解讀：** [https://hyper.ai/news/25822](https://hyper.ai/news/25822)
- **科研團隊：** 麻省理工學院的研究團隊
- **相關研究：** 深度學習、GNN、卷積神經網路。Chemprop 模型的正預測率為 11.6%，高於人工篩選的 1.9%
- **釋出期刊：** Nature Communications, 2023.05
- **論文連結：** [Discovering small-molecule senolytics with deep neural networks](https://www.nature.com/articles/s43587-023-00415-z)

### **13. [機器學習量化分析多巴胺的釋放量和釋放位置](https://hyper.ai/news/25153)**

- **中文解讀：** [https://hyper.ai/news/25153](https://hyper.ai/news/25153)
- **科研團隊：** 美國加利福尼亞大學伯克利分校的研究團隊
- **相關研究：** SVM、RF、機器學習。對刺激強度的判斷準確率達 0.832、對多巴胺釋放腦區的判斷準確率達 0.708
- **釋出期刊：** ACS Chemical Neuroscience, 2023.06
- **論文連結：** [Identifying Neural Signatures of Dopamine Signaling with Machine Learning](https://pubs.acs.org/doi/full/10.1021/acschemneuro.3c00001)

### **14. [機器學習發現三種抗衰老藥物](https://hyper.ai/news/24578)**

- **中文解讀：** [https://hyper.ai/news/24578](https://hyper.ai/news/24578)
- **科研團隊：** 梅奧診所的 James L. Kirkland 博士等人
- **相關研究：** 機器學習、隨機森林模型、5倍交叉驗證、隨機森林（RF）模型。發現抗衰老藥物 Ginkgetin、Periplocin 和 Oleandrin
- **釋出期刊：** Nature Communications, 2023.06
- **論文連結：** [Discovery of Senolytics using machine learning](https://www.nature.com/articles/s41467-023-39120-1)

### **15. [深度學習篩選抑制鮑曼不動桿菌的新型抗生素](https://hyper.ai/news/24499)**

- **中文解讀：** [https://hyper.ai/news/24499](https://hyper.ai/news/24499)
- **科研團隊：** 麥克馬斯特大學、麻省理工學院的研究團隊
- **相關研究：** Broad 研究所的高通量篩選子庫、機器學習、深度學習。篩選了大約 7,500 個分子，發現了一種名為 abaucin 的抗菌化合物
- **釋出期刊：** Nature Chemical Biology, 2023.05
- **論文連結：** [Deep learning-guided discovery of an antibiotic targeting Acinetobacter baumannii](https://www.nature.com/articles/s41589-023-01349-8#access-options)

### **16. [機器學習模型應用於預測生物墨水可列印性](https://hyper.ai/news/24237)**

- **中文解讀：** [https://hyper.ai/news/24237](https://hyper.ai/news/24237)
- **科研團隊：** 聖地亞哥德孔波斯特拉大學、倫敦大學學院的研究團隊
- **相關研究：** 機器學習模型、ANN、SVM、RF、kappa、R²、MAE。準確率高達 97.22%
- **釋出期刊：** International Journal of Pharmaceutics: X, 2023.12
- **論文連結：** [Predicting pharmaceutical inkjet printing outcomes using machine learning](https://www.sciencedirect.com/science/article/pii/S2590156723000257)

### **17. [機器學習分化多能幹細胞](https://hyper.ai/news/23940)**

- **中文解讀：** [https://hyper.ai/news/23940](https://hyper.ai/news/23940)
- **科研團隊：** 北京大學趙揚課題組、張鈺課題組聯合北京交通大學劉一研課題組
- **相關研究：** 活細胞成像技術、機器學習、弱監督模型、pix2pix 深度學習模型。分化效率從 21.6% ± 2.7% 提升至 88.8% ± 10.5%
- **釋出期刊：** Cell Discovery, 2023.06
- **論文連結：** [A live-cell image-based machine learning strategy for reducing variability in PSC differentiation systems](https://www.nature.com/articles/s41421-023-00543-1)

### **18. [機器學習模型預測長效注射劑藥物釋放速率](https://hyper.ai/news/33892)**

- **中文解讀：** [https://hyper.ai/news/33892](https://hyper.ai/news/33892)
- **科研團隊：** 多倫多大學研究團隊
- **相關研究：** MLR、Lasso、PLS、DT、RF、LGBM、XGB、自NGB、SVR、k-NN、NN、巢狀交叉驗證、最遠鄰聚類演算法
- **釋出期刊：** Nature Communications, 2023.01
- **論文連結：** [Machine learning models to accelerate the design of polymeric long-acting injectables](https://www.nature.com/articles/s41467-022-35343-w)

### **19. [機器學習演算法有效預測植物抗瘧性](https://hyper.ai/news/33883)**

- **中文解讀：** [https://hyper.ai/news/33883](https://hyper.ai/news/33883)
- **科研團隊：** 英國皇家植物園及聖安德魯斯大學的研究團隊
- **相關研究：** Logit、SVC、XGB、BNN、GridSearchCV 演算法、10 折分層交叉驗證、馬爾可夫鏈蒙特卡洛迭代。準確率為 0.67
- **釋出期刊：** Frontiers in Plant Science, 2023.05
- **論文連結：** [Machine learning enhances prediction of plants as potential sources of antimalarials](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10248027)

### **20. [機器學習整合方法預測病毒蛋白片段免疫原性](https://hyper.ai/news/30786)**

- **中文解讀：** [https://hyper.ai/news/30786](https://hyper.ai/news/30786)
- **科研團隊：** 北京航空航天大學李靜研究團隊
- **相關研究：** 蛋白質資料庫 UniProt、Protegen 資料庫、整合機器學習方法 VirusImmu、RF 、 XGBoost 、kNN、隨機取樣交叉驗證
- **釋出期刊：** bioRxiv, 2023.11
- **論文連結：** [VirusImmu: a novel ensemble machine learning approach for viral immunogenicity prediction](https://www.biorxiv.org/content/10.1101/2023.11.23.568426v1)

### **21. [用生成式 AI 開發新型抗生素](https://hyper.ai/news/31421)**

- **中文解讀：** [https://hyper.ai/news/31421](https://hyper.ai/news/31421)
- **科研團隊：** 麥馬、斯坦福團隊
- **相關研究：** Pharmakon-1760 庫、藥物再利用中心資料庫、合成小分子篩選集、蒙特卡洛樹搜尋 、生成式人工智慧模型 SyntheMol。生成 24,335 個完整分子、設計出易於合成的新型化合物
- **釋出期刊：** Nature Machine Intelligence, 2024.03
- **論文連結：** [Generative AI for designing and validating easily synthesizable and structurally novel antibiotics](https://www.nature.com/articles/s42256-024-00809-7 )

### **22. [基於深度學習研發一種自動化、高速、多維的單粒子追蹤系統](https://hyper.ai/news/31341)**

- **中文解讀：** [https://hyper.ai/news/31341](https://hyper.ai/news/31341)
- **科研團隊：** 廈門大學方寧教授團隊
- **相關研究：** 多維成像裝置、雙焦平面成像、視差顯微鏡、多維成像裝置、卷積神經網路模型、抗噪性和魯棒性
- **釋出期刊：** Nature Machine Intelligence, 2024.03
- **論文連結：** [Deep Learning-Assisted Automated Multidimensional Single Particle Tracking in Living Cells](https://doi.org/10.1021/acs.nanolett.3c04870)

### **23. [ProEnsemble 機器學習框架：最佳化進化通路啟動子組合](https://hyper.ai/news/30594)**

- **中文解讀：** [https://hyper.ai/news/30594](https://hyper.ai/news/30594)
- **科研團隊：** 中科院羅小舟團隊
- **相關研究：** 合成生物、基因上位效應、自動化平臺、十折交叉驗證、整合模型、Gradient Boosting Regressor、Ridge Regressor、Gradient Boosting、通用型底盤高效合成黃酮類化合物
- **釋出期刊：** ADVANCED SCIENCE, 2024.02
- **論文連結：** [Pathway Evolution Through a Bottlenecking-Debottlenecking Strategy and Machine Learning-Aided Flux Balancing](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202306935)

### **24. [微環境感知圖神經網路 ProtLGN 指導蛋白質定向進化](https://hyper.ai/news/32246)**

- **中文解讀：** [https://hyper.ai/news/32246](https://hyper.ai/news/32246)
- **科研團隊：** 上海交通大學洪亮課題組
- **相關研究：** 微環境感知圖神經網路、輕量級圖神經去噪網路、自監督預訓練、等變圖神經網路。超過 40% 的 PROTLGN 設計單點突變體蛋白質優於其野生型對應物
- **釋出期刊：** JOURNAL OF CHEMICAL INFORMATION AND MODELING, 2024.04
- **論文連結：** [Protein Engineering with Lightweight Graph Denoising Neural Networks](https://pubs.acs.org/doi/10.1021/acs.jcim.4c00036)

### **25. [深度學習模型 AlphaPPIMd：用於蛋白質-蛋白質複合物構象集合探索](https://hyper.ai/news/32435)**

- **中文解讀：** [https://hyper.ai/news/32435](https://hyper.ai/news/32435)
- **科研團隊：** 延世大學王建民團隊
- **相關研究：** 深度學習、生成式 AI、Transformer、生成神經網路學習、分子動力學、barnase-barstar 複合物軌跡集、蛋白質資料庫 Protein Data Bank、AlphaPPIMd 模型、自注意力機制、特徵最佳化模組、注意力分數、全原子模型。模型的平均訓練精度為 0.995、平均驗證精度為 0.999
- **釋出期刊：** Journal of Chemical Theory and Computation, 2024.05
- **論文連結：** [Exploring the conformational ensembles of protein-protein complex with transformer-based generative model](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00255)

### **26. [新型腫瘤抑制蛋白降解劑 dp53m 可抑制癌細胞增殖](https://hyper.ai/news/32527)**

- **中文解讀：** [https://hyper.ai/news/32527](https://hyper.ai/news/32527)
- **科研團隊：** 西交利物浦大學慧湖藥學院吳思晉教授、天津醫科大學總醫院謝松波教授、鍾殿勝教授團隊
- **相關研究：** MD 模擬、迭代分子對接引導 post-SELEX 法。dp53m 可特異性識別 p53-R175H 蛋白，並對其進行降解
- **釋出期刊：** Science Bulletin, 2024.05
- **論文連結：** [An engineered DNA aptamer-based PROTAC for precise therapy of p53-R175H hotspot mutant-driven cancer](https://www.sciencedirect.com/science/article/pii/S2095927324003517)

### **27. [CVPR 最佳學生論文！多模態模型 BioCLIP 實現零樣本學習](https://hyper.ai/news/32544)**

- **中文解讀：** [https://hyper.ai/news/32544](https://hyper.ai/news/32544)
- **科研團隊：** 俄亥俄州立大學 Jiaman Wu 團隊
- **相關研究：** 生物影象資料集 TreeOfLife-10M、多模態模型、計算機視覺、視覺編碼器、文字編碼器、自迴歸語言模型、模型在零樣本和少樣本任務中均表現出色
- **釋出期刊：** CVPR 2024, 2024.02
- **論文連結：** [BIoCLIP: A Vision Foundation Model for the Tree of Life](https://openaccess.thecvf.com/content/CVPR2024/html/Stevens_BioCLIP_A_Vision_Foundation_Model_for_the_Tree_of_Life_CVPR_2024_paper.html)

### **28. [1 億引數！細胞大模型 scFoundation 可對 2 萬基因同時建模](https://hyper.ai/news/32623)**

- **中文解讀：** [https://hyper.ai/news/32623](https://hyper.ai/news/32623)
- **科研團隊：** 清華大學自動化系生命基礎模型實驗室主任張學工教授、電子系/AIR 馬劍竹教授和百圖生科宋樂博士
- **相關研究：** 人工智慧細胞大模型、人類單細胞組學資料 DISCO，歐洲分子生物學實驗室-歐洲生物資訊學研究所資料庫 EMBL-EBI、GEO 資料集，Single Cell Portal 資料集，HCA 資料集，hECA 資料集、Transformer、非對稱的編碼器-解碼器結構、向量模組、RDA 建模
- **釋出期刊：** Nature Methods, 2024.06
- **論文連結：** [Large-scale foundation model on single-cell transcriptomics](https://www.nature.com/articles/s41592-024-02305-7)

### **29. [入選頂會 ICML，蛋白質語言模型 ESM-AA 超越傳統 SOTA](https://hyper.ai/news/32674)**

- **中文解讀：** [https://hyper.ai/news/32674](https://hyper.ai/news/32674)
- **科研團隊：** 清華大學周浩教授聯合北京大學、南京大學和水木分子團隊
- **相關研究：** 蛋白質資料集 AlphaFold DB、蛋白質資料集 Dp 和一個分子資料集 Dm、解壓縮、多尺度掩碼語言建模
- **釋出期刊：** ICML 2024, 2024.06
- **論文連結：** [ESM All-Atom: Multi-scale Protein Language Model for Unified Molecular Modeling](https://icml.cc/virtual/2024/poster/35119)

### **30. [SPACE 演算法登 Cell 子刊！組織模組發現能力領先同類工具](https://hyper.ai/news/32738)**

- **中文解讀：** [https://hyper.ai/news/32738](https://hyper.ai/news/32738)
- **科研團隊：** 清華大學張強鋒課題組
- **相關研究：** 空間轉錄組學、STARmap 小鼠 PLA 資料集、MERFISH 小鼠 AB 資料集、MERFISH 小鼠 WB 資料集、Xenium 人類 BC 資料集、CosMx 人類 NSCLC 資料集、Visium 人腦資料集、編碼器、鄰近圖解碼器、基因表達解碼器、空間鄰近性、自監督學習
- **釋出期刊：** Cell Systems, 2024.06
- **論文連結：** [Tissue module discovery in single-cell resolution spatial transcriptomics data via cell-cell interaction-aware cell embedding](https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00124-8)

### **31. [基於 AlphaFold 實現新突破，揭示蛋白質動態多樣性](https://hyper.ai/news/33075)**

- **中文解讀：** [https://hyper.ai/news/33075](https://hyper.ai/news/33075)
- **科研團隊：** 麻省理工學院研究團隊
- **相關研究：** 流匹配技術、蛋白質語言模型、神經網路、AlphaFold、ESMFold
- **釋出期刊：** ICML 2024, 2024.06
- **論文連結：** [AlphaFold Meets Flow Matching for Generating Protein Ensembles](https://openreview.net/forum?id=rs8Sh2UASt)

### **32. [基於擴散模型開發 P450 酶從頭設計方法 P450Diffusion](https://hyper.ai/news/33057)**

- **中文解讀：** [https://hyper.ai/news/33057](https://hyper.ai/news/33057)
- **科研團隊：** 中國科學院天津工業生物技術研究所江會鋒、程健團隊
- **相關研究：** 定向進化、擴散模型、深度學習、去噪擴散機率模型、三點固定、微調擴散模型 、預訓練。催化能力提高 3.5 倍
- **釋出期刊：** Research, 2024.07
- **論文連結：** [Cytochrome P450 Enzyme Design by Constraining the Catalytic Pocket in a Diffusion Model](https://spj.science.org/doi/10.34133/research.0413)

### **33. [將等變圖神經網路用於靶蛋白結合位點預測，效能提升 20%](https://hyper.ai/news/32957)**

- **中文解讀：** [https://hyper.ai/news/32957](https://hyper.ai/news/32957)
- **科研團隊：** 中國人民大學高瓴人工智慧學院的研究團隊
- **相關研究：** E(3) 等變圖神經網路、卷積神經網路、EquiPocket 框架、scPDB 資料集、PDBbind 資料集、COACH 420 資料集、HOLO4K 資料集、區域性幾何建模模組、全域性結構建模模組 、表面資訊傳遞模組
- **釋出期刊：** ICML 2024, 2024.07
- **論文連結：** [EquiPocket: an E(3)-Equivariant Geometric Graph Neural Network for Ligand Binding Site Prediction](https://openreview.net/forum?id=1vGN3CSxVs)

### **34. [20 個實驗資料創造 AI 蛋白質里程碑！FSFP 有效最佳化蛋白質預訓練模型](https://hyper.ai/news/32822)**

- **中文解讀：** [https://hyper.ai/news/32822](https://hyper.ai/news/32822)
- **科研團隊：** 上海交通大學自然科學研究院/物理天文學院/張江高研院/藥學院洪亮教授課題組，聯合上海人工智慧實驗室青年研究員談攀團隊
- **相關研究：** 蛋白質突變資料集 ProteinGym、預訓練蛋白質語言模型、元遷移學習、排序學習、引數高效微調、LTR 技術、有效最佳化蛋白質語言模型的訓練策略 FSFP、模型無關元學習方法
- **釋出期刊：** Nature Communications, 2024.07
- **論文連結：** [Enhancing efficiency of protein language models with minimal wet-lab data through few-shot learning](https://doi.org/10.1038/s41467-024-49798-6)

### **35. [可遷移深度學習模型鑑定多型別 RNA 修飾、顯著減少計算成本](https://hyper.ai/news/32745)**

- **中文解讀：** [https://hyper.ai/news/32745](https://hyper.ai/news/32745)
- **科研團隊：** 上海交通大學生命科學技術學院長聘教軌副教授餘祥課題組，聯合上海辰山植物園楊俊 / 王紅霞團隊
- **相關研究：** 可遷移深度學習模型 TandemMod、體外轉錄資料集 ELIGOS、Curlcake 資料集、體外表觀轉錄組資料集 IVET、一維卷積神經網路、雙向長短期記憶模組、注意力機制、全連線層 (full-connected layers) 的分類器
- **釋出期刊：** Nature Communications, 2024.05
- **論文連結：** [Transfer learning enables identification of multiple types of RNA modifications using nanopore direct RNA sequencing](https://www.nature.com/articles/s41467-024-48437-4)

### **36. [InstructProtein：利用知識指令對齊蛋白質語言與人類語言](https://hyper.ai/news/33697)**

- **中文解讀：** [https://hyper.ai/news/33697](https://hyper.ai/news/33697)
- **科研團隊：** 浙江大學陳華鈞、張強團隊
- **相關研究：** 大語言模型、蛋白質知識指令資料集、Gene Ontology (GO) 資料集、InstructProtein、知識圖譜、蛋白質位置預測、蛋白質功能預測 、蛋白質金屬離子結合能力預測
- **釋出期刊：** ACL 2024, 2023.10
- **論文連結：** [InstructProtein: Aligning Human and Protein Language via Knowledge Instruction](https://arxiv.org/abs/2310.03269)

### **37. [蛋白質-文字生成框架 ProtT3 實現蛋白質資料與文字資訊跨模態解讀](https://hyper.ai/news/33546)**

- **中文解讀：** [https://hyper.ai/news/33546](https://hyper.ai/news/33546)
- **科研團隊：** 中國科學技術大學王翔，聯合新加坡國立大學劉致遠團隊、北海道大學研究團隊
- **相關研究：** 跨模態投影器、蛋白質語言模型、Swiss-Prot 和 ProteinKG25 資料集、PDB-QA 資料集
- **釋出期刊：** ACL 2024, 2023.05
- **論文連結：** [ProtT3: Protein-to-Text Generation for Text-based Protein Understanding](https://arxiv.org/abs/2405.12564)

### **38. [CPDiffusion 模型，超低成本、全自動設計功能型蛋白質](https://hyper.ai/news/34692)**

- **中文解讀：** [https://hyper.ai/news/34692](https://hyper.ai/news/34692)
- **科研團隊：** 上海交通大學自然科學研究院、物理與天文學院、張江高等研究院、藥學院洪亮課題組
- **相關研究：** 蛋白質工程、擴散機率模型框架 CPDiffusion、氨基酸、圖神經網路、輔助藥物設計、蛋白質語言模型、 CATH 4.2 資料集
- **釋出期刊：** Cell Discovery,  2024.09
- **論文連結：** [A conditional protein diffusion model generates artificial programmable endonuclease sequences with enhanced activity](https://www.nature.com/articles/s41421-024-00728-2)

### **39. [基於蛋白質語言模型和密集檢索技術，一種全新的蛋白質同源物檢測方法](https://hyper.ai/news/34225)**

- **中文解讀：** [https://hyper.ai/news/34225](https://hyper.ai/news/34225)
- **科研團隊：** 香港中文大學李煜、復旦大學智慧複雜體系實驗室、上海人工智慧實驗室青年研究員孫思琦、耶魯大學 Mark Gerstein
- **相關研究：** 蛋白質工程、蛋白質語言模型、密集檢索技術、密集同源物檢索器 、混合模型 DHR-meta、UR90 資料集、JackHMMER 演算法、BFD/MGnify 資料集、DHR 方法。蛋白質同源物檢測靈敏度提高 56%
- **釋出期刊：** Nature Biotechnology, 2024.08
- **論文連結：** [Fast, sensitive detection of protein homologs using deep dense retrieval](https://doi.org/10.1038/s41587-024-02353-6)

### **40. [AlphaProteo 可高效設計靶蛋白結合物，親和力提高 300 倍](https://hyper.ai/news/34214)**

- **中文解讀：** [https://hyper.ai/news/34214](https://hyper.ai/news/34214)
- **科研團隊：** DeepMind、弗朗西斯·克里克研究所
- **相關研究：** 蛋白質工程、蛋白質語言模型、AI 藥物設計、靶蛋白 、AI 工具、機器學習模型 AlphaProteo、VEGF-A 蛋白結合體設計、生成模型 (Generator) 、過濾器 (Filter)。候選結合物與靶蛋白結合數量高出 5-100 倍
- **釋出期刊：** DeepMind, 2024.09
- **論文連結：** [AlphaProteo generates novel proteins for biology and health research](https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)

### **41. [全新去噪蛋白質語言模型 DePLM，突變效應預測優於 SOTA 模型](https://hyper.ai/news/34954)**

- **中文解讀：** [https://hyper.ai/news/34954](https://hyper.ai/news/34954)
- **科研團隊：** 浙江大學電腦科學與技術學院、浙江大學國際聯合學院、浙江大學杭州國際科創中心陳華鈞教授、張強博士
- **相關研究：** 去噪蛋白質語言模型 (DePLM)、ProteinGym 深度突變篩選 (DMS) 實驗集合、DMS 資料集、隨機交叉驗證方法、泛化能力實驗、基於排序資訊的前向過程來擴充套件擴散模型以去噪進化資訊、基於排序的去噪擴散過程、排序演算法 (sorting algorithm) 生成軌跡、PromptProtein 模型
- **釋出期刊：** NeurIPS 2024, 2024.11
- **論文連結：** [DePLM: Denoising Protein Language Models for Property Optimization](https://neurips.cc/virtual/2024/poster/95517)

### **42. [幾何深度生成模型 DynamicBind，實現蛋白質動態對接預測](https://hyper.ai/news/34894)**

- **中文解讀：** [https://hyper.ai/news/34894](https://hyper.ai/news/34894)
- **科研團隊：** 上海交通大學鄭雙佳課題組、星藥科技、中山大學藥學院、美國萊斯大學
- **相關研究：** PDBbind 資料集、MDT 測試集、深度擴散模型、等變幾何神經網路技術、PDB 格式的類結構、小分子配體格式、contact-LDDT (cLDDT) 評分模組、AlphaFold 結構、親和力預測模組、生成式人工智慧技術
- **釋出期刊：** Nature Communications, 2024.2
- **論文連結：** [DynamicBind: predicting ligand-specific protein-ligand complex structure with a deep equivariant generative model](https://www.nature.com/articles/s41467-024-45461-2)

### **43. [藥物研發大語言模型 Y-Mol，效能全面領先 LLaMA2](https://hyper.ai/news/35572)**

- **中文解讀：** [https://hyper.ai/news/35572](https://hyper.ai/news/35572)
- **科研團隊：** 湖南大學、中南大學、湖南師範大學、湘潭大學的研究團隊
- **相關研究：** 多尺度生物醫學知識指導的大語言模型 Y-Mol 、生物醫學 PubMed 出版物的文字語料庫、DrugBank 基準資料集、DrugCentral 基準資料集、LLaMA2-7b 大語言模型
- **釋出期刊：** arxiv, 2024.10
- **論文連結：** [Y-Mol: A Multiscale Biomedical Knowledge-Guided Large Language Model for Drug Development](https://doi.org/10.48550/arXiv.2410.11550)

### **44. [通用分子逆折疊模型 UniIF，對 AlphaFold 3 形成進一步補充](https://hyper.ai/news/35781)**

- **中文解讀：** [https://hyper.ai/news/35781](https://hyper.ai/news/35781)
- **科研團隊：** 西湖大學未來產業研究中心團隊
- **相關研究：** CATH4.3 資料集、ESM2 模型、CASP15 資料集、新晶體結構、NovelPro 資料集、RDesign 收集的資料集、CHILI-3K 資料集、基於氨基酸和核苷酸的預定義框架、GNN、幾何特徵提取器 (Geometric Featurizer) 、塊圖注意力層 (Block Graph Attention)。在蛋白質設計、 RNA 設計、材料設計上都優於其他對比的先進方法
- **釋出期刊：** NeurIPS 2024, 2024.5
- **論文連結：** [UniIF: Unified Molecule Inverse Folding](https://arxiv.org/abs/2405.18968)

### **45. [預訓練蛋白質語言模型 ProSST，更有效地整合蛋白質結構資訊](https://hyper.ai/news/35874)**

- **中文解讀：** [https://hyper.ai/news/35874](https://hyper.ai/news/35874)
- **科研團隊：** 海交通大學自然科學研究院/物理天文學院/張江高研院/藥學院洪亮教授課題組，上海交大助理研究員周冰心，聯合上海人工智慧實驗室青年研究員談攀
- **相關研究：** 預訓練蛋白質語言模型 ProSST、Transformer、解耦注意力機制、蛋白質結構量化器、AlphaFoldDB 資料集、CATH43-S40 資料集、CATH43-S40 區域性結構資料集、ProteinGYM 基準資料集。在熱穩定性預測、金屬離子結合預測、蛋白質定位預測、 GO 註釋預測等任務中優於現有模型
- **釋出期刊：** NeurIPS 2024, 2024.05
- **論文連結：** [ProSST: Protein Language Modeling with Quantized Structure and Disentangled Attention](https://neurips.cc/virtual/2024/poster/96656)

### **46. [大環肽結合物框架 RFpeptides，為不可成藥蛋白質提供新可能性](https://hyper.ai/news/36150)**

- **中文解讀：** [https://hyper.ai/news/36150](https://hyper.ai/news/36150)
- **科研團隊：** 華盛頓蛋白質研究所所長 David Baker 團隊
- **相關研究：** 基於擴散模型的技術 RFpeptides、利用修飾的 RoseTTAFold 和具有迴圈相對位置編碼的 RFdiffusion 來生成精確的大環骨架、藥物開發、AlphaFold、迴圈相對位置編碼機制、ProteinMPNN、Rosetta Relax。可實現靶向和高效的大環設計
- **釋出期刊：** bioRxiv, 2024.11
- **論文連結：** [Accurate de novo design of high-affinity protein binding macrocycles using deep learning](https://doi.org/10.1101/2024.11.18.622547)

### **47. [基因組基礎模型 Evo，實現從分子到基因組尺度的預測與生成](https://hyper.ai/news/36266)**

- **中文解讀：** [https://hyper.ai/news/36266](https://hyper.ai/news/36266)
- **科研團隊：** 斯坦福大學聯合美國 Arc 研究所 (Arc Institute) 的研究團隊
- **相關研究：** 基因組基礎模型 Evo、StripedHyena 架構。Evo 具有預測、生成和設計整個基因組序列的能力
- **釋出期刊：** Science, 2024.11
- **論文連結：** [Sequence modeling and design from molecular to genome scale with Evo](https://www.science.org/doi/10.1126/science.ado9336)

### **48. [DigFrag 用 AI 精準分割分子片段，並生成 44 個藥物/農藥分子](https://hyper.ai/news/36346)**

- **中文解讀：** [https://hyper.ai/news/36346](https://hyper.ai/news/36346)
- **科研團隊：** 華中師範大學楊光富教授和王凡副教授團隊
- **相關研究：** MolFrag 平臺、PADFrag 資料庫、圖注意力機制、DigFrag 數字化分段方法、DeepFMPO 模型框架、圖神經網路架構、Actor-Critic 模型框架
- **釋出期刊：** nature communications chemistry, 2024.11
- **論文連結：** [DigFrag as a digital fragmentation method used for artificial intelligence-based drug design](https://doi.org/10.1038/s42004-024-01346-5)

### **49. [蛋白質序列大語言模型預訓練方法 PRIME](https://hyper.ai/news/36363)**

- **中文解讀：** [https://hyper.ai/news/36363](https://hyper.ai/news/36363)
- **科研團隊：** 上海交通大學自然科學研究院/物理天文學院洪亮教授課題組、上海人工智慧實驗室青年研究員、上海科技大學、中科院杭州醫學院
- **相關研究：** 蛋白質序列大語言模型預訓練方法 PRIME、ProteomeAtlas 資料庫、UniProt 資料庫、ProteinGym 蛋白質突變資料集、MLM 預訓練方法，優於目前最先進方法
- **釋出期刊：** Science Advances, 2024.11
- **論文連結：** [A General Temperature-Guided Language Model to Design Proteins of Enhanced Stability and Activity](https://www.science.org/doi/10.1126/sciadv.adr2641)

### **50. [自監督深度學習方法革新冷凍電鏡三維重建](https://hyper.ai/news/36645)**

- **中文解讀：** [https://hyper.ai/news/36645](https://hyper.ai/news/36645)
- **科研團隊：** 加州大學洛杉磯分校研究團隊
- **相關研究：** 自監督深度學習方法單粒子 IsoNet (spIsoNet) 、單粒子冷凍電鏡、生物大分子重建、β-半乳糖苷酶資料集、HA 三聚體傾斜資料集 (EMPIAR-10097)、非傾斜 HA 三聚體資料集 (EMPIAR-10096) 、非對稱核糖體資料集 (EMPIAR-10406)、HIV VLP 斷層掃描資料集 (EMPIAR-10164)、U-net 網路架構、各向異性校正驅動的錯位校正模組，實現結構生物學重大突破
- **釋出期刊：** Nature Methods, 2024.11
- **論文連結：** [Overcoming the preferred-orientation problem in cryo-EM with self-supervised deep learning](https://doi.org/10.1038/s41592-024-02505-1)

### **51. [多模態蛋白質生成方法 PLAID，同時生成序列和全原子蛋白結構](https://hyper.ai/news/36750)**

- **中文解讀：** [https://hyper.ai/news/36750](https://hyper.ai/news/36750)
- **科研團隊：** 加州大學伯克利分校 (UC Berkeley) 、微軟研究院、Genentech 公司研究團隊
- **相關研究：** 多模態蛋白質生成方法 PLAID (Protein Latent Induced Diffusion)、Pfam 資料庫、ESMFold 潛在空間、潛在擴散訓練、DiT 塊架構、 Diffusion Transformer (DiT)、ESMFold 模型
- **釋出期刊：** ICLR 2025, 2024.12
- **論文連結：** [Generating All-Atom Protein Structure from Sequence-Only Training Data](https://www.biorxiv.org/content/10.1101/2024.12.02.626353v1)

### **52. [基於潛在強化學習的靶向分子最佳化方法 MOLRL](https://hyper.ai/news/37285)**

- **中文解讀：** [https://hyper.ai/news/37285](https://hyper.ai/news/37285)
- **科研團隊：** 生命科學公司 Cellarity 和英偉達的研究人員
- **相關研究：** 新穎的基於潛在強化學習的靶向分子最佳化方法 MOLRL、藥物發現相關任務、近端策略最佳化 (PPO) 方法、變分自編碼器 (VAE) 、自編碼器 (MolMIM)，成功率可達 100%
- **釋出期刊：** ChemRxiv, 2025.1
- **論文連結：** [Targeted Molecular Generation With Latent Reinforcement Learning](https://go.hyper.ai/H4JhR)

### **53. [病毒變異驅動力預測框架 E2VD，預測新冠/艾滋病/流感病毒進化方向](https://hyper.ai/news/37405)**

- **中文解讀：** [https://hyper.ai/news/37405](https://hyper.ai/news/37405)
- **科研團隊：** 北京大學資訊工程學院田永鴻教授、陳杰副教授，廣州國家實驗室周鵬研究員指導博士生聶志偉、碩士生劉旭東
- **相關研究：** 病毒變異驅動力預測框架 E2VD、 UniRef90 資料集、開源深度突變掃描資料集、蛋白質序列編碼、區域性-全域性相互作用依賴融合 (Local-global dependence coupling) 和多工焦點學習 (Multi-task focal learning)，預測精度提升 67%
- **釋出期刊：** Nature Machine Intelligence, 2025.1
- **論文連結：** [A unified evolution-driven deep learning framework for virus variation driver prediction](https://www.nature.com/articles/s42256-024-00966-9)

### **54. [醫學語言模型 MedFound，推理能力接近專家醫師](https://hyper.ai/news/37646)**

- **中文解讀：** [https://hyper.ai/news/37646](https://hyper.ai/news/37646)
- **科研團隊：** 北京郵電大學王光宇教授、北京大學第三醫院宋純理教授、三峽大學楊簡教授組成的醫工交叉團隊
- **相關研究：** 大語言模型 BLOOM-176B、醫學語料資料集 MedCorpus、大語言模型 MedFound-DX、思維鏈方法、偏好對齊框架、MedDX-FT 資料集、MedDX-Bench 資料集
- **釋出期刊：** Nature Medicine, 2025.1
- **論文連結：** [A generalist medical language model for disease diagnosis assistance](https://www.nature.com/articles/s41591-024-03416-6)

### **55. [4D 擴散模型 AlphaFolding，填補蛋白質動態結構預測空白](https://hyper.ai/news/37697)**

- **中文解讀：** [https://hyper.ai/news/37697](https://hyper.ai/news/37697)
- **科研團隊：** 復旦大學、上海科學智慧研究院的朱思語及漆遠教授團隊、聯合南京大學姚遙教授
- **相關研究：** 4D 擴散模型 AlphaFolding、分子動力學模擬資料、動態蛋白質結構、結構生物學、Distributional Graphformer (DiG) 深度學習框架、ATLAS 資料集
- **釋出期刊：** arXiv, 2024.12
- **論文連結：** [4D Diffusion for Dynamic Protein Structure Prediction with Reference and Motion Guidance](https://arxiv.org/abs/2408.12419)

### **56. [可設計短蛋白質的 PepPrCLIP 流程，有望開發癌症新療法](https://hyper.ai/news/37912)**

- **中文解讀：** [https://hyper.ai/news/37912](https://hyper.ai/news/37912)
- **科研團隊：** 杜克大學生物醫學工程系研究團隊
- **相關研究：** ESM-2 蛋白語言模型、ESM-2-650M 模型、PepPrCLIP 流程、高斯分佈、氨基酸序列
- **釋出期刊：** Science Advances, 2025.1
- **論文連結：** [De novo design of peptide binders to conformationally diverse targets with contrastive language modeling](https://www.science.org/doi/10.1126/sciadv.adr8638)

### **57. [玻爾茲曼對齊技術大幅提高蛋白質結合自由能預測效能](https://hyper.ai/news/38092)**

- **中文解讀：** [https://hyper.ai/news/38092](https://hyper.ai/news/38092)
- **科研團隊：** 浙江大學電腦科學與技術學院沈春華教授團隊、澳大利亞阿德萊德大學、美國東北大學等團隊
- **相關研究：** 結合自由能、玻爾茲曼對齊技術、∆∆G 預測、蛋白質複合物結構預測、黎曼擴散模型、深度學習、BA-Cycle 方法、BA-DDG 方法、SKEMPI v2 資料集
- **釋出期刊：** ICLR 2025, 2024.10
- **論文連結：** [Boltzmann-Aligned Inverse Folding Model as a Predictor of Mutational Effects on Protein-Protein Interactions](https://arxiv.org/abs/2410.09543)

### **58. [新型大規模流式蛋白質主鏈生成器 Proteina，從頭設計蛋白質主鏈效能達 SOTA](https://hyper.ai/news/38120)**

- **中文解讀：** [https://hyper.ai/news/38120](https://hyper.ai/news/38120)
- **科研團隊：** 英偉達、魁北克人工智慧研究所 Mila 、蒙特利爾大學、麻省理工學院
- **相關研究：** 蛋白質設計、可擴充套件非等變 Transformer 架構、Foldseek AFDB 聚類 DFS 資料集、D21M 資料集、MFS 模型、Mno – triFS 模型、M21M 模型、分階段訓練策略
- **釋出期刊：** ICLR 2025 Oral, 2025.1
- **論文連結：** [Proteina: Scaling Flow-based Protein Structure Generative Models](https://openreview.net/forum?id=TVQLu34bdw&nesting=2&sort=date-desc)

### **59. [UniGEM 模型，首次基於擴散模型實現兩任務協同增強](https://hyper.ai/news/38186)**

- **中文解讀：** [https://hyper.ai/news/38186](https://hyper.ai/news/38186)
- **科研團隊：** 清華大學、中國科學院
- **相關研究：** 藥物研發、分子性質預測、分子生成、擴散模型、QM9 量子化學資料集、GEOM-Drugs 3D 分子構象資料集、多工學習框架、與 E(3) 等變擴散模型 (EDM) 、EGNN、多分支網路架構
- **釋出期刊：** ICLR 2025, 2025.4
- **論文連結：** [UniGEM: A Unified Approach to Generation and Property Prediction for Molecules](https://openreview.net/pdf?id=Lb91pXwZMR)

### **60. [RFdiffusion 再進化，實現原子級精度的抗體從頭設計](https://hyper.ai/news/38253)**

- **中文解讀：** [https://hyper.ai/news/38253](https://hyper.ai/news/38253)
- **科研團隊：** 華盛頓大學生物化學教授 David Baker 團隊及其合作者
- **相關研究：** 治療性抗體、RFdiffusion 網路計算蛋白設計、抗體可變重鏈 VHHs 、單鏈可變片段 scFvs、深度學習、VHH 框架、CDR 環序列設計
- **釋出期刊：** bioRxiv, 2025.2
- **論文連結：** [Atomically accurate de novo design of antibodies with RFdiffusion](https://doi.org/10.1101/2024.03.14.585103)

### **61. [首個蛋白質-RNA 語言模型融合方案，結合親和力預測重新整理 SOTA](https://hyper.ai/news/38290)**

- **中文解讀：** [https://hyper.ai/news/38290](https://hyper.ai/news/38290)
- **科研團隊：** 清華大學、倫敦大學學院、莫納什大學、北京郵電大學
- **相關研究：** 蛋白質-RNA、CoPRA 模型、蛋白質語言模型 (PLM)、RNA 語言模型 (RLM)、CLIP 實驗技術、Co-Former 模型、PDBbind 資料集、PRBABv2 資料集、ProNAB 資料集、PRA201 資料集、多模態學習
- **釋出期刊：** AAAI 2025, 2025.1
- **論文連結：** [CoPRA: Bridging Cross-domain Pretrained Sequence Models with Complex Structures for Protein-RNA Binding Affinity Prediction](https://arxiv.org/abs/2409.03773)

### **62. [虛擬組織模型 Celcomen，首次在空間轉錄組學分析中實現因果推斷可識別性](https://hyper.ai/news/38308)**

- **中文解讀：** [https://hyper.ai/news/38308](https://hyper.ai/news/38308)
- **科研團隊：** 劍橋大學
- **相關研究：** Perturbmap 資料集、胎兒脾臟資料集、膠質母細胞瘤資料集、Celcomen 模型、推理模組 (CCE)、生成模組 (SCE)、圖神經網路
- **釋出期刊：** ICLR 2025, 2025.1
- **論文連結：** [Estimation of single-cell and tissue perturbation effect in spatial transcriptomics via Spatial Causal Disentanglement](https://openreview.net/forum?id=Tqdsruwyac)

### **63. [AlphaFold-Metainference 方法，精準預測無序蛋白質結構集合](https://hyper.ai/news/38448)**

- **中文解讀：** [https://hyper.ai/news/38448](https://hyper.ai/news/38448)
- **科研團隊：** 劍橋大學
- **相關研究：** AlphaFold 預測的對齊誤差圖、分子動力學模擬中的距離變化矩陣之間的相關性、無序蛋白質結構預測、蛋白質資料庫 (Protein Data Bank, PDB)、小角 X 射線散射資料、核磁共振擴散測量、結構集合資料 Aβ 和 α-synuclein、CALVADOS-2、貝葉斯元推理方法、CALVADOS-2 力場、Langevin 積分器
- **釋出期刊：** Nature Communications, 2025.2
- **論文連結：** [AlphaFold prediction of structural ensembles of disordered proteins](https://www.nature.com/articles/s41467-025-56572-9)

### **64. [高精度 RNA 結構預測框架 DRfold2，多項基準測試超越 SOTA](https://hyper.ai/news/38506)**

- **中文解讀：** [https://hyper.ai/news/38506](https://hyper.ai/news/38506)
- **科研團隊：** 新加坡國立大學張陽教授團隊
- **相關研究：** RNA 結構預測框架 DRfold2、無監督接觸預測精度、RNA 複合語言模型、DRfold2 RNA 結構測試資料集、CASP15 資料集、Transformer 模組、去噪結構模組
- **釋出期刊：** bioRxiv, 2025.3
- **論文連結：** [Ab initio RNA structure prediction with composite language model and denoised end-to-end learning](https://www.biorxiv.org/content/10.1101/2025.03.05.641632v1)

### **65. [蛋白質設計新演算法 DRAKES，突破生物序列設計瓶頸](https://hyper.ai/news/38675)**

- **中文解讀：** [https://hyper.ai/news/38675](https://hyper.ai/news/38675)
- **科研團隊：** 美國麻省理工學院、哈佛大學、斯坦福大學、加州大學伯克利分校、美國基因工程技術公司 Genentech 的研究人員
- **相關研究：** 強化學習框架、PDB 訓練集、Megascale 資料集、DRAKES 演算法、Gumbel-Softmax
- **釋出期刊：** ICLR 2025, 2024.8
- **論文連結：** [Fine-Tuning Discrete Diffusion Models via Reward Optimization with Applications to DNA and Protein Design](https://doi.org/10.48550/arXiv.2410.13643)

### **66. [機器學習輔助的紫外吸收光譜法檢測微生物汙染](https://hyper.ai/news/38869)**

- **中文解讀：** [https://hyper.ai/news/38869](https://hyper.ai/news/38869)
- **科研團隊：** 新加坡-麻省理工學院研究聯盟、新加坡 A *SRL 實驗室、新加坡國立大學、美國麻省理工學院
- **相關研究：** 微生物汙染檢測、異常檢測策略、機器學習、支援向量機 (SVM)、徑向基函式、PBS 滅菌樣本
- **釋出期刊：** Nature, 2025.3
- **論文連結：** [Machine learning aided UV absorbance spectroscopy for microbial contamination in cell therapy products](https://hyper.ai/en/sota/papers/s41598-024-83114-y)

### **67. [利用蛋白質序列生成模型實現重疊基因設計](https://hyper.ai/news/39241)**

- **中文解讀：** [https://hyper.ai/news/39241](https://hyper.ai/news/39241)
- **科研團隊：** 美國華盛頓大學 David Baker 團隊
- **相關研究：** 重疊基因（OLG）、合成 OLG 設計研究、氨基酸置換、生物資訊學篩選、統計建模、系統掃描序列位置
- **釋出期刊：** bioRxiv, 2025.05
- **論文連結：** [Design of overlapping genes using deep generative models of protein sequences](https://doi.org/10.1101/2025.05.06.652464)

### **68. [預測框架 Predictions of Unseen Proteins’ Subcellular localization（PUPS），實現單細胞級蛋白質定位](https://hyper.ai/news/39549)**

- **中文解讀：** [https://hyper.ai/news/39549](https://hyper.ai/news/39549)
- **科研團隊：** 美國麻省理工學院、哈佛大學
- **相關研究：** 蛋白質亞細胞定位、人類蛋白質圖譜、未知蛋白質亞細胞定位、Predictions of Unseen Proteins’ Subcellular localization（PUPS）框架、保留資料集、ESM-2（Evolutionary Scale Modeling）蛋白質語言模型、卷積神經網路、可分離卷積
- **釋出期刊：** Nature Methods, 2025.05
- **論文連結：** [Prediction of protein subcellular localization in single cells](https://go.hyper.ai/LeaQF)

### **69. [首個跨分子種類統一生成框架 UniMoMo，實現多型別藥物分子設計](https://hyper.ai/news/39852)**

- **中文解讀：** [https://hyper.ai/news/39852](https://hyper.ai/news/39852)
- **科研團隊：** 清華大學劉洋老師組、中國人民大學高瓴人工智慧學院黃文炳老師組、位元組跳動 AI 製藥團隊
- **相關研究：** 跨分子種類統一生成框架 UniMoMo、全原子的迭代變分自編碼器（IterVAE）、全原子幾何隱空間擴散模型、統一建模
- **釋出期刊：** ICML 2025, 2025.03
- **論文連結：** [UniMoMo: Unified Generative Modeling of 3D Molecules for De Novo Binder Design](https://hyper.ai/papers/2503.19300)

### **70. [蛋白質語言模型 Prot42 僅利用目標蛋白序列即可生成高親和力結合劑](https://hyper.ai/news/40385)**

- **中文解讀：** [https://hyper.ai/news/40385](https://hyper.ai/news/40385)
- **科研團隊：** 阿聯酋阿布扎比 Inception AI 研究所與美國矽谷 Cerebras Systems 公司的聯合研究團隊
- **相關研究：** PDIdb 2010 資料集、UniRef50 資料庫、STRING 資料庫、蛋白質功能預測、蛋白質亞細胞定位預測、蛋白質結構預測、蛋白質-蛋白質相互作用預測、蛋白質結合劑生成、DNA 序列特異性結合劑生成
- **釋出期刊：** arXiv, 2025.05
- **論文連結：** [Prot42: a Novel Family of Protein Language Models for Target-aware Protein Binder Generation](https://go.hyper.ai/cFupD)

### **71. [統一生物分子動力學模擬器 UniSim，首次實現跨分子型別、跨化學環境統一時間粗化動力學模擬](https://hyper.ai/news/40483)**

- **中文解讀：** [https://hyper.ai/news/40483](https://hyper.ai/news/40483)
- **科研團隊：** 清華大學劉洋老師組、人民大學高瓴人工智慧學院黃文炳老師組
- **相關研究：** 原子嵌入擴充套件、多頭混合預訓練、TorchMD-NET 圖神經網路模型、隨機差值（stochastic interpolant）框架、力引導核
- **釋出期刊：** ICML 2025, 2025.05
- **論文連結：** [UniSim: A Unified Simulator for Time-Coarsened Dynamics of Biomolecules](https://go.hyper.ai/5NWuO)

### **72. [計算生物學演算法 SimplifiedBondfinder，挖掘 69 個全新氮-氧-硫鍵](https://hyper.ai/news/40515)**

- **中文解讀：** [https://hyper.ai/news/40515](https://hyper.ai/news/40515)
- **科研團隊：** 喬治奧古斯特大學的 Sophia Bazzi 、 Sharareh Sayyad 團隊
- **相關研究：** 計算生物學演算法 SimplifiedBondfinder、機器學習、量子力學計算、PDB 資料集、 PDB-REDO 資料集、BDB 資料集、無監督統一流行近似與投影降維技術、NOS 鍵
- **釋出期刊：** Communications Chemistry, 2025.05
- **論文連結：** [Revealing arginine-cysteine and glycine-cysteine NOS linkages by a systematic re-evaluation of protein structures](https://www.nature.com/articles/s42004-025-01535-w)

### **73. [全新蛋白質序列設計方法 FAMPNN，可同時處理蛋白質主鏈和側鏈資訊](https://hyper.ai/news/41545)**

- **中文解讀：** [https://hyper.ai/news/41545](https://hyper.ai/news/41545)
- **科研團隊：** 斯坦福大學、加州帕洛阿爾託市 Arc 研究院
- **相關研究：** 蛋白質側鏈構象、蛋白質序列設計方法 FAMPNN、S40 資料集、PDB 資料集、CASP13、 14、 15 資料集、SKEMPlv2 資料集、S669 資料集、 Megascale 資料集、 FireProtDB 資料集、CR9114 資料集、 CR6261 資料集、 G6 資料集、迭代取樣策略、atom37 格式、圖神經網路、逐 token 歐幾里得擴散方法
- **釋出期刊：** ICML 2025, 2025.06
- **論文連結：** [Sidechain conditioning and modeling for full-atom protein sequence design with FAMPNN](https://go.hyper.ai/JUJDq)

### **74. [原子級蛋白質設計方法 La-Proteina，高精度生成多達 800 個殘基的蛋白質](https://hyper.ai/news/41744)**

- **中文解讀：** [https://hyper.ai/news/41744](https://hyper.ai/news/41744)
- **科研團隊：** NVIDIA、加拿大魁北克人工智慧研究所 Mila  
- **相關研究：** 原子級蛋白質設計方法、部分隱式流匹配框架 La-Proteina、AFDB 資料集、兩階段訓練策略
- **釋出期刊：** arXiv, 2025.06
- **論文連結：** [La-Proteina: Atomistic Protein Generation via Partially Latent Flow Matching](https://go.hyper.ai/3csT5)

### **75. [APM 模型專為多鏈蛋白質複合物設計，實現全原子設計與功能最佳化](https://hyper.ai/news/42059)**

- **中文解讀：** [https://hyper.ai/news/42059](https://hyper.ai/news/42059)
- **科研團隊：** 湖南大學、中國科學院大學、位元組跳動 Seed 團隊
- **相關研究：** 蛋白質、多鏈原生建模、全原子表示最佳化、序列-結構依賴強化、PDB 資料庫、Swiss-Prot 資料庫、AFDB 資料庫、多鏈蛋白質資料集
- **釋出期刊：** ICML 2025, 2025.07
- **論文連結：** [An All-Atom Generative Model for Designing Protein Complexes](https://go.hyper.ai/TVp4i)

### **76. [無序區域結合蛋白設計新方法 Logos，專攻不可成藥靶點](https://hyper.ai/news/42611)**

- **中文解讀：** [https://hyper.ai/news/42611](https://hyper.ai/news/42611)
- **科研團隊：** 華盛頓大學蛋白質設計研究所所長 David Baker 及其團隊
- **相關研究：** RFdiffusion 模型、誘導契合（Induced Fit）、骨架生成（Scaffold Generation）、結合口袋特異化（Pocket Specialization）、蛋白質結合口袋組裝（Pocket Assembly）
- **釋出期刊：** Science, 2025.07
- **論文連結：** [Design of intrinsically disordered region binding proteins](https://www.science.org/doi/10.1126/science.adr8063)

### **77. [全新蛋白質動態融合表徵框架 FusionProt 釋出，實現迭代式資訊交換](https://hyper.ai/news/43724)**

- **中文解讀：** [https://hyper.ai/news/43724](https://hyper.ai/news/43724)
- **科研團隊：** 以色列理工學院、Meta AI 研究團隊
- **相關研究：** 蛋白質語言模型、蛋白質表徵學習框架 FusionProt、蛋白質結構資料庫（AlphaFold DB）、AlphaFold2、DeepFRI 資料集、可學習融合 token（learnable fusion token）、多檢視對比學習（Multiview Contrastive learning）
- **釋出期刊：** bioRxiv, 2025.08
- **論文連結：** [FusionProt: Fusing Sequence and Structural Information for Unified Protein Representation Learning](https://go.hyper.ai/OXLYl)

### **78. [轉錄組引導的擴散模型 MorphDiff 釋出，為表型藥物研發提速](https://hyper.ai/news/43849)**

- **中文解讀：** [https://hyper.ai/news/43849](https://hyper.ai/news/43849)
- **科研團隊：** 中國香港中文大學、穆罕默德·本·扎耶德人工智慧大學等機構
- **相關研究：** 細胞形態學、 Latent Diffusion Model（LDM）架構、大規模細胞形態學影象資料集、JUMP 資料集、CDRP 資料集、LINCS 資料集、L1000 資料集、形態學變分自編碼器、潛在擴散模型
- **釋出期刊：** Nature Communications, 2025.09
- **論文連結：** [Prediction of cellular morphology changes under perturbations with a transcriptome-guided diffusion model](https://www.nature.com/articles/s41467-025-63478-z)

### **79. [AlphaPPIMI 框架顯著提升泛化能力，PPIs 介面調節劑預測效能超越現有方法](https://hyper.ai/news/43916)**

- **中文解讀：** [https://hyper.ai/news/43916](https://hyper.ai/news/43916)
- **科研團隊：** 中國石油大學、延世大學
- **相關研究：** 蛋白質-蛋白質相互作用、DLiP 資料集、ECFP4 分子指紋、ChemDiv 資料庫、AlphaPPIMI 框架、Uni-Mol2 模型、蛋白質特徵提取、Transformer 架構、ESM2-150M 模型、ProtTrans 模型、PFeature 方法、預訓練大規模模型
- **釋出期刊：** Journal of Cheminformatics, 2025.08
- **論文連結：** [Alphappimi: a comprehensive deep learning framework for predicting PPI-modulator interactions](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-025-01077-2)

### **80. [全新融合神經網路框架，高效預測蛋白質序列的多金屬結合位點](https://hyper.ai/news/44702)**

- **中文解讀：** [https://hyper.ai/news/44702](https://hyper.ai/news/44702)
- **科研團隊：** 香港科技大學
- **相關研究：** 融合神經網路框架、蛋白質序列的多金屬結合位點預測、卷積神經網路、融合網路、MbPA 資料庫、深度學習框架
- **釋出期刊：** bioRxiv, 2025.09
- **論文連結：** [A Modular Fusion Neural Network Approach to Efficiently Predict Multi-Metal Binding Sites in Protein Sequences](https://go.hyper.ai/Y7DNU)

### **81. [高效可合成分子投影框架 ReaSyn 釋出，實現超高重建率與路徑多樣性](https://hyper.ai/news/44764)**

- **中文解讀：** [https://hyper.ai/news/44764](https://hyper.ai/news/44764)
- **科研團隊：** 英偉達研究團隊
- **相關研究：** 藥物研發、ReaSyn 框架、監督學習、強化學習微調、Transformer 模型、反應鏈（CoR）表示法
- **釋出期刊：** arXiv, 2025.09
- **論文連結：** [Rethinking Molecule Synthesizability with Chain-of-Reaction](https://arxiv.org/abs/2509.16084)

### **82. [約束強化學習框架 Ctrl-DNA 釋出，實現特定細胞基因表達的「靶向控制」](https://hyper.ai/news/45227)**

- **中文解讀：** [https://hyper.ai/news/45227](https://hyper.ai/news/45227)
- **科研團隊：** 多倫多大學團隊、昌平實驗室等機構
- **相關研究：** 約束強化學習框架 Ctrl-DNA、深度學習、特定細胞基因表達、DNA 語言模型、人類啟動子資料集、增強子資料集、具有可控細胞型別特異性 CRE 生成、約束馬爾可夫決策過程、Enformer 架構
- **釋出期刊：** NeurIPS 2025, 2025.05
- **論文連結：** [Ctrl-DNA: Constrained Reinforcement Learning for Cell-Specific Cis-Regulatory Element Design](https://arxiv.org/abs/2505.20578)

### **83. [PLACER 框架解析，解決蛋白質構象異質性的原子級建模挑戰](https://hyper.ai/news/46009)**

- **中文解讀：** [https://hyper.ai/news/46009](https://hyper.ai/news/46009)
- **科研團隊：** David Baker 教授研究團隊
- **相關研究：** 圖神經網路 PLACER、劍橋結構資料庫、蛋白質資料庫、去噪神經網路、三軌架構、有機小分子結構生成
- **釋出期刊：** PNAS, 2025.11
- **論文連結：** [Modeling protein-small molecule conformational ensembles with PLACER](https://www.biorxiv.org/content/10.1101/2024.09.25.614868v2)

### **84. [Squidiff 實現多場景轉錄組模擬，助力精準醫學與空間醫學發展](https://hyper.ai/news/46212)**

- **中文解讀：** [https://hyper.ai/news/46212](https://hyper.ai/news/46212)
- **科研團隊：** 哥倫比亞大學、斯坦福大學等研究團隊
- **相關研究：** Squidiff 計算框架、Splatter 工具、人誘導多能幹細胞向內胚層分化資料集、K562 細胞 CRISPR 篩選實驗、條件去噪擴散隱式模型、語義編碼技術、「編碼—擴散—解碼」三階段協同架構、正向擴散和反向擴散雙過程設計、Adam 最佳化器
- **釋出期刊：** Nature Methods, 2025.11
- **論文連結：** [Squidiff: predicting cellular development and responses to perturbations using a diffusion model](https://www.nature.com/articles/s41592-025-02877-y)

### **85. [生成式模型 PepTron 及新評測基準釋出，重塑無序蛋白集合預測能力](https://hyper.ai/news/47063)**

- **中文解讀：** [https://hyper.ai/news/47063](https://hyper.ai/news/47063)
- **科研團隊：** 英國蛋白質分析技術研發商 Peptone 公司、哥本哈根大學、英偉達、牛津大學、麻省理工學院、杜克大學等
- **相關研究：** PeptoneBench 系統評估框架、生成式模型 PepTron、蛋白質資料庫、IDRome 資料庫、NVIDIA BioNeMo 框架、ESMFlow、「實驗資料+合成資料」混合訓練策略
- **釋出期刊：** bioRxiv, 2025.10
- **論文連結：** [Advancing Protein Ensemble Predictions Across the Order–Disorder Continuum](https://www.biorxiv.org/content/10.1101/2025.10.18.680935v1)

### **86. [MIT 與哈佛提出端到端 AI 流程 CleaveNet，攻克蛋白酶底物高特異性設計難題](https://hyper.ai/news/48608)**

- **中文解讀：** [https://hyper.ai/news/48608](https://hyper.ai/news/48608)
- **科研團隊：** 麻省理工學院（MIT）與哈佛大學聯合團隊
- **相關研究：** 蛋白酶底物設計、CleaveNet 端到端設計流程、合成肽、預測模型與生成模型
- **釋出期刊：** Nature Communications
- **論文連結：** [CleaveNet: An AI-based end-to-end design workflow for protease substrates](https://www.nature.com/articles/s41467-025-67226-1)

### **87. [德國歌德大學團隊提出多尺度分類框架，解碼人類 E3 連線酶組複雜性](https://hyper.ai/news/48813)**

- **中文解讀：** [https://hyper.ai/news/48813](https://hyper.ai/news/48813)
- **科研團隊：** 德國歌德大學研究團隊
- **相關研究：** 泛素-蛋白酶體系統（UPS）、E3 泛素連線酶、人類 E3 連線酶組（human E3 ligome）、度量學習（metric-learning）
- **釋出期刊：** Nature Communications
- **論文連結：** [Multi-scale classification decodes the complexity of the human E3 ligome](https://www.nature.com/articles/s41467-025-67450-9)

### **88. [Basecamp 與英偉達等聯合釋出 EDEN 基礎模型，實現 AI 可程式設計療法設計](https://hyper.ai/news/48964)**

- **中文解讀：** [https://hyper.ai/news/48964](https://hyper.ai/news/48964)
- **科研團隊：** Basecamp Research、英偉達及多所頂尖學術機構
- **相關研究：** 可程式設計生物學、EDEN 系列宏基因組基礎模型、基因治療、重組酶、抗菌肽設計、合成微生物組
- **釋出期刊：** bioRxiv
- **論文連結：** [Designing AI-programmable therapeutics with the EDEN family of foundation models](https://doi.org/10.64898/2026.01.12.699009)

### **89. [微軟等團隊提出多模態 AI 框架 GigaTIME，從常規病理切片生成虛擬 mIF 圖譜](https://hyper.ai/news/49359)**

- **中文解讀：** [https://hyper.ai/news/49359](https://hyper.ai/news/49359)
- **科研團隊：** 微軟研究院、華盛頓大學與 Providence Genomics
- **相關研究：** 腫瘤免疫微環境、H&E 染色、多重免疫熒光（mIF）、GigaTIME 框架、空間蛋白質組學
- **釋出期刊：** Cell
- **論文連結：** [Multimodal AI generates virtual population for tumor microenvironment modeling](https://www.cell.com/cell/fulltext/S0092-8674(25)01312-1)

### **90. [MIT 提出深度學習語言模型 Pichia-CLM，最佳化密碼子提升重組蛋白產量](https://hyper.ai/news/49613)**

- **中文解讀：** [https://hyper.ai/news/49613](https://hyper.ai/news/49613)
- **科研團隊：** 麻省理工學院（MIT）研究團隊
- **相關研究：** 畢赤酵母（Komagataella phaffii）、密碼子最佳化、密碼子使用偏好性（CUB）、Pichia-CLM 語言模型、重組蛋白表達
- **釋出期刊：** PNAS
- **論文連結：** [Pichia-CLM: A language model–based codon optimization pipeline for Komagataella phaffii](https://www.pnas.org/doi/10.1073/pnas.2522052123)

### **91. [MIT 與 ETH 聯合提出深度學習框架 APOLLO，高效整合解耦單細胞多模態資料](https://hyper.ai/news/49702)**

- **中文解讀：** [https://hyper.ai/news/49702](https://hyper.ai/news/49702)
- **科研團隊：** 麻省理工學院（MIT）與瑞士蘇黎世聯邦理工學院（ETH Zurich）聯合研究團隊
- **相關研究：** 單細胞生物學、多模態資料整合、APOLLO 框架、scRNA-seq、scATAC-seq、空間形態學
- **釋出期刊：** Nature Computational Science
- **論文連結：** [Partially shared multi-modal embedding learns holistic representation of cell state](https://www.nature.com/articles/s43588-025-00948-w)

### **92. [港中文等聯合提出 Bi-TEAM 框架，實現修飾肽多尺度統一表徵學習](https://hyper.ai/news/49833)**

- **中文解讀：** [https://hyper.ai/news/49833](https://hyper.ai/news/49833)
- **科研團隊：** 香港中文大學、澳門理工大學、浙江大學、中南大學湘雅第二醫院與電子科技大學等聯合研究團隊
- **相關研究：** 肽結構與功能建模、非經典氨基酸修飾、跨尺度表徵學習、蛋白質/化學語言模型、Bi-TEAM 框架
- **釋出期刊：** arXiv
- **論文連結：** [Bi-TEAM: A Unified Cross-Scale Representation Learning Framework for Chemically Modified Biomolecules](https://arxiv.org/abs/2603.01873)

### **93. [卡內基梅隆大學等提出 AQuaRef，實現全蛋白質原子模型量子精修](https://hyper.ai/news/49895)**

- **中文解讀：** [https://hyper.ai/news/49895](https://hyper.ai/news/49895)
- **科研團隊：** 卡內基梅隆大學、波蘭弗羅茨瓦夫大學與佛羅里達大學等聯合研究團隊
- **相關研究：** 蛋白質結構精修、AQuaRef、機器學習原子勢函式（AIMNet2）、量子精修、結構生物學
- **釋出期刊：** Nature Communications
- **論文連結：** [AQuaRef: machine learning accelerated quantum refinement of protein structures](https://www.nature.com/articles/s41467-025-64313-1)

### **94. [英偉達等聯合提出 Complexa 框架，統一蛋白質結合劑生成與最佳化](https://hyper.ai/news/49977)**

- **中文解讀：** [https://hyper.ai/news/49977](https://hyper.ai/news/49977)
- **科研團隊：** 英偉達、牛津大學、魁北克人工智慧研究所（Mila）等聯合研究團隊
- **相關研究：** 蛋白質結合劑設計、Proteína-Complexa (Complexa)、Teddymer、生成式與幻覺式方法、測試時計算縮放（Test-Time Compute）
- **釋出會議：** ICLR 2026
- **論文連結：** [Scaling Atomistic Protein Binder Design with Generative Pretraining and Test-Time Compute](https://openreview.net/forum?id=qmCpJtFZra)

### **95. [MIT 與 CMU 聯合提出 VibeGen，引入振動動力學賦能從頭蛋白質設計](https://hyper.ai/news/50061)**

- **中文解讀：** [https://hyper.ai/news/50061](https://hyper.ai/news/50061)
- **科研團隊：** 麻省理工學院（MIT）與卡內基梅隆大學（CMU）聯合研究團隊
- **相關研究：** 蛋白質動力學、VibeGen 智慧體、語言擴散模型、從頭蛋白質設計、振動振幅預測
- **釋出期刊：** Matter
- **論文連結：** [VibeGen: Agentic end-to-end de novo protein design for tailored dynamics using a language diffusion model](https://www.cell.com/matter/abstract/S2590-2385(26)00069-X)

### **96. [巴斯德研究所利用深度學習預測 239 萬抗噬菌體蛋白，繪製細菌免疫圖譜](https://hyper.ai/news/50491)**

- **中文解讀：** [https://hyper.ai/news/50491](https://hyper.ai/news/50491)
- **科研團隊：** 法國巴斯德研究所（Institut Pasteur）研究團隊
- **相關研究：** 細菌抗病毒免疫、抗噬菌體防禦系統、蛋白質語言模型、基因組語言模型（GeneCLR_DF等）、泛基因組學
- **釋出期刊：** Science
- **論文連結：** [Protein and genomic language models uncover the unexplored diversity of bacterial immunity](https://www.science.org/doi/10.1126/science.adv8275)

### **97. [KAIST 團隊利用 AI 從頭設計小分子結合蛋白，成功應用於生物感測器](https://hyper.ai/news/50599)**

- **中文解讀：** [https://hyper.ai/news/50599](https://hyper.ai/news/50599)
- **科研團隊：** 韓國科學技術院（KAIST）生物科學系研究團隊
- **相關研究：** 從頭蛋白質設計（de novo protein design）、小分子結合蛋白、NTF2 樣摺疊（NTF2-like fold）、生物感測器、化學誘導二聚化（CID）
- **釋出期刊：** Nature Communications
- **論文連結：** [Small-molecule binding and sensing with a designed protein family](https://www.nature.com/articles/s41467-026-70953-8)

### **98. [多倫多大學等提出 dnaHNet，實現基因組序列高效分層建模](https://hyper.ai/news/50709)**

- **中文解讀：** [https://hyper.ai/news/50709](https://hyper.ai/news/50709)
- **科研團隊：** 多倫多大學、加拿大 Vector 人工智慧研究院及美國 Arc Institute 等聯合研究團隊
- **相關研究：** 基因組序列學習、大模型（Foundation Model）、dnaHNet、動態分詞、變異效應預測
- **釋出期刊：** arXiv
- **論文連結：** [dnaHNet: A Scalable and Hierarchical Foundation Model for Genomic Sequence Learning](https://arxiv.org/abs/2602.10603)

### **99. [倫敦瑪麗女王大學等開展最大規模蛋白質基因組學研究，揭示疾病分子機制](https://hyper.ai/news/51343)**

- **中文解讀：** [https://hyper.ai/news/51343](https://hyper.ai/news/51343)
- **科研團隊：** 倫敦瑪麗女王大學、劍橋大學等聯合研究團隊
- **相關研究：** 蛋白質基因組學（Proteogenomics）、蛋白質數量性狀位點（pQTLs）、迴圈蛋白丰度、順式與反式遺傳調控、創新藥物靶點與老藥新用
- **釋出期刊：** Cell
- **論文連結：** [Multi-cohort proteogenomic analyses reveal genetic effects across the proteome and diseasome](https://www.cell.com/cell/fulltext/S0092-8674(26)00385-5)

### **100. [法蘭克福大學等提出 genESOM 模型，生成式 AI 破局小樣本動物實驗](https://hyper.ai/news/51430)**

- **中文解讀：** [https://hyper.ai/news/51430](https://hyper.ai/news/51430)
- **科研團隊：** 德國法蘭克福大學與弗勞恩霍夫 ITMP 研究所聯合研究團隊
- **相關研究：** 小樣本動物實驗、生成式 AI、genESOM 模型、湧現自組織對映、誤差控制與假陽性抑制
- **釋出期刊：** Pharmacological Research
- **論文連結：** [Self-organizing neural network-based generative AI with embedded error inflation control enhances effective knowledge extraction from preclinical studies with reduced sample size](https://www.sciencedirect.com/science/article/pii/S1043661826000745)

## **AI+ 醫療健康**

### **1. [深度學習系統 DeepDR Plus 用眼底影象預測糖尿病視網膜病變](https://hyper.ai/news/29769)**

- **中文解讀：** [https://hyper.ai/news/29769](https://hyper.ai/news/29769)
- **科研團隊：** 上海交通大學賈偉平、李華婷和盛斌教授團隊，清華大學黃天蔭研究團隊
- **相關研究：** SDPP 資料、DRPS 資料、ResNet-50、眼底模型、自監督學習、 IBS 評估模型、後設資料模型、組合模型。將臨床應用的平均篩查間隔從 12 個月延長至 31.97 個月
- **釋出期刊：** Nature Medicine, 2024.01
- **論文連結：** [A deep learning system for predicting time to progression of diabetic retinopathy](https://www.nature.com/articles/s41591-023-02702-z)

### **2. [邏輯迴歸模型分析高綠色景觀指數可降低 MetS 風險](https://hyper.ai/news/29559)**

- **中文解讀：** [https://hyper.ai/news/29559](https://hyper.ai/news/29559)
- **科研團隊：** 浙江大學吳息鳳研究團隊
- **相關研究：** 卷積神經網路模型、邏輯迴歸模型、Isochrone API
- **釋出期刊：** Environment International, 2024.01
- **論文連結：** [Beneficial associations between outdoor visible greenness at the workplace and metabolic syndrome in Chinese adults](https://doi.org/10.1016/j.envint.2023.108327)

### **3. [深度學習系統助力初級眼科醫生的診斷一致性提高 12%](https://hyper.ai/news/29549)**

- **中文解讀：** [https://hyper.ai/news/29549](https://hyper.ai/news/29549)
- **科研團隊：** 北京協和醫院、四川大學華西醫院、河北醫科大學第二醫院、天津醫科大學眼科醫院、溫州醫科大學附屬眼視光醫院、北京致遠慧圖科技有限公司、中國人民大學研究團隊
- **相關研究：** quality assessment model、diagnostic model、CNN。為 13 種眼底疾病的自動檢測提供新方法
- **釋出期刊：** npj digital medicine, 2024.01
- **論文連結：** [The performance of a deep learning system in assisting junior ophthalmologists in diagnosing 13 major fundus diseases: a prospective multi-center clinical trial](https://www.nature.com/articles/s41746-023-00991-9)

### **4. [GSP-GCNs 實現帕金森病診斷準確率高達 90.2%](https://hyper.ai/news/29189)**

- **中文解讀：** [https://hyper.ai/news/29189](https://hyper.ai/news/29189)
- **科研團隊：** 中科院深圳先進技術研究院和中山大學附屬第一醫院研究團隊
- **相關研究：** 圖訊號處理模組 (GSP) 、圖網路模組 (graph-network module) 、分類器 (classifier) 、可解釋模型 ( interpretable model)
- **釋出期刊：** npj Digital Medicine, 2024.01
- **論文連結：** [An interpretable model based on graph learning for diagnosis of Parkinson’s disease with voice-related EEG](https://www.nature.com/articles/s41746-023-00983-9)

### **5. [乳腺癌預後評分系統 MIRS](https://hyper.ai/news/29304)**

- **中文解讀：** [https://hyper.ai/news/29304](https://hyper.ai/news/29304)
- **科研團隊：** 美國肯塔基大學、澳門科技大學、澳門大學、廣州醫科大學研究團隊
- **相關研究：** TCGA 資料庫、神經網路模型、預後評分系統、ESTIMATE 演算法、機器學習、XGboost 、 Borota RF、ElasticNet
- **釋出期刊：** iScience, 2023.11
- **論文連結：** [MIRS: An AI scoring system for predicting the prognosis and therapy of breast cancer](https://doi.org/10.1016/j.isci.2023.108322)

### **6. [視網膜影象基礎模型 RETFound，預測多種系統性疾病](https://hyper.ai/news/28113)**

- **中文解讀：** [https://hyper.ai/news/28113](https://hyper.ai/news/28113)
- **科研團隊：** 倫敦大學學院和 Moorfields 眼科醫院的在讀博士周玉昆等人
- **相關研究：** 自監督學習、MEH-MIDAS 資料集、EyePACS 資料集、SL-ImageNet、SSL-ImageNet、SSL-Retinal。RETFound 模型預測 4 種疾病的效能均超越對比模型
- **釋出期刊：** Nature, 2023.08
- **論文連結：** [A foundation model for generalizable disease detection from retinal images](https://www.nature.com/articles/s41586-023-06555-x)

### **7. [SVM 最佳化觸覺感測器，盲文識別率達 96.12%](https://hyper.ai/news/26561)**

- **中文解讀：** [https://hyper.ai/news/26561](https://hyper.ai/news/26561)
- **科研團隊：** 浙江大學的楊賡和徐凱臣課題組
- **相關研究：** SVM演算法、機器學習、CNN、自適應矩估計演算法。最佳化後的感測器能準確識別 6 種動態觸控模式
- **釋出期刊：** Advanced Science, 2023.09
- **論文連結：** [Machine Learning-Enabled Tactile Sensor Design for Dynamic Touch Decoding](https://onlinelibrary.wiley.com/doi/10.1002/advs.202303949)

### **8. [中科院基因組所建立開放生物醫學成像檔案](https://hyper.ai/news/26334)**

- **中文解讀：** [https://hyper.ai/news/26334](https://hyper.ai/news/26334)
- **科研團隊：** 中科院基因組所
- **相關研究：** TCIA 癌症影像資料庫、de-identification、quality control、Collection、Individual、Study、 Series, Image、三元組網路、attention module
- **釋出期刊：** bioRxiv, 2023.08
- **論文連結：** [Self-supervised learning of hologram reconstruction using physics consistency](https://www.nature.com/articles/s42256-023-00704-7)

### **9. [AI Lunit 閱讀乳腺 X 光片的準確率與醫生相當](https://hyper.ai/news/26135)**

- **中文解讀：** [https://hyper.ai/news/26135](https://hyper.ai/news/26135)
- **科研團隊：** 英國諾丁漢大學的研究團隊
- **相關研究：** PERFORMS 資料集，標註 + 評分。AI 的靈敏度與醫生一致、特異性與醫生沒有顯著差異
- **釋出期刊：** Radiology, 2023.09
- **論文連結：** [Performance of a Breast Cancer Detection AI Algorithm Using the Personal Performance in Mammographic Screening Scheme](https://pubs.rsna.org/doi/10.1148/radiol.223299)

### **10. [特徵選擇策略檢測乳腺癌生物標誌物](https://hyper.ai/news/24589)**

- **中文解讀：** [https://hyper.ai/news/24589](https://hyper.ai/news/24589)
- **科研團隊：** 義大利那不勒斯費德里科二世大學研究團隊
- **相關研究：** 機器學習、特徵選擇策略、TCGA/GEO 資料集、Gain Ratio、RF、SVM-RFE。SVM-RFE 的穩定性和獲得的 signature 預測能力最高
- **釋出期刊：** CIBB 2023, 2023.07
- **論文連結：** [Robust Feature Selection strategy detects a panel of microRNAs as putative diagnostic biomarkers in Breast Cancer](https://www.researchgate.net/publication/372083934)

### **11. [梯度提升機模型準確預測 BPSD 亞綜合徵](https://hyper.ai/news/23926)**

- **中文解讀：** [https://hyper.ai/news/23926](https://hyper.ai/news/23926)
- **科研團隊：** 韓國延世大學研究團隊
- **相關研究：** 機器學習模型、多重插補方法、邏輯迴歸模型、隨機森林模型、梯度提升機模型、支援向量機模型。梯度提升機模型平均 AUC 值最高
- **釋出期刊：** Scientifc Reports, 2023.05
- **論文連結：** [Machine learning‑based predictive models for the occurrence of behavioral and psychological symptoms of dementia: model development and validation](https://www.nature.com/articles/s41598-023-35194-5)

### **12. [機器學習模型預測患者一年內死亡率](https://hyper.ai/news/33905)**

- **中文解讀：** [https://hyper.ai/news/33905](https://hyper.ai/news/33905)
- **科研團隊：** 中國湖北省麻城市人民醫院的研究團隊
- **相關研究：** 邏輯迴歸模型、機器學習模型、GBM、RF、DT。良好的臨床實用性，與一年死亡率相關的前 3 個特徵分別是 NT-proBNP、白蛋白和他汀類藥物
- **釋出期刊：** Cardiovascular Diabetology, 2023.06
- **論文連結：** [Machine learning-based models to predict one-year mortality among Chinese older patients with coronary artery disease combined with impaired glucose tolerance or diabetes mellitus](https://cardiab.biomedcentral.com/articles/10.1186/s12933-023-01854-z)

### **13. [AI 新腦機技術讓失語患者「開口說話」](https://hyper.ai/news/33914)**

- **中文解讀：** [https://hyper.ai/news/33914](https://hyper.ai/news/33914)
- **科研團隊：** 加州大學團隊
- **相關研究：** nltk Twitter 語料庫、多模態語音神經假體、腦機介面、深度學習模型、Cornell 電影語料庫、合成語音演算法、機器學習
- **釋出期刊：** Nature, 2023.08
- **論文連結：** [A high-performance neuroprosthesis for speech decoding and avatar control](https://www.nature.com/articles/s41586-023-06443-4)

### **14. [基於深度學習的胰腺癌人工智慧檢測](https://hyper.ai/news/33923)**

- **中文解讀：** [https://hyper.ai/news/33923](https://hyper.ai/news/33923)
- **科研團隊：** 阿里達摩院聯合多家國內外醫療機構
- **相關研究：** 深度學習、PANDA、nnU-Net、CNN、Transformer。PANDA 檢測到了 5 例癌症和 26 例臨床漏診病例
- **釋出期刊：** Nature Medicine, 2023.11
- **論文連結：** [Large-scale pancreatic cancer detection via non-contrast CT and deep learning](https://www.nature.com/articles/s41591-023-02640-w)

### **15. [機器學習輔助肺癌篩查的群體有效性](https://hyper.ai/news/31197)**

- **中文解讀：** [https://hyper.ai/news/31197](https://hyper.ai/news/31197)
- **科研團隊：** 谷歌研究中心
- **相關研究：** DS_CA 資料集、DS_NLST 資料集、DS_US 資料集、DS_JPN 資料集、機器學習模型、肺癌篩查。特異性提高 5%-7%、病例篩查時間減少 14 秒
- **釋出期刊：** Radiology AI, 2024.03
- **論文連結：** [Assistive AI in Lung Cancer Screening: A Retrospective Multinational Study in the United States and Japan](https://pubs.rsna.org/doi/11.1148/ryai.230079)

### **16. [卵巢癌診斷人工智慧融合模型 MCF，輸入常規實驗室檢驗資料和年齡即可計算卵巢癌的患病風險](https://hyper.ai/news/30730)**

- **中文解讀：** [https://hyper.ai/news/30730](https://hyper.ai/news/30730)
- **科研團隊：** 中山大學劉繼紅研究團隊
- **相關研究：** 特徵選擇方法、機器學習分類器、五倍交叉驗證、多準則決策理論、融合 20 個基礎分類模型、識別卵巢癌的準確率優於 CA125 和 HE4  等傳統生物標誌物
- **釋出期刊：** The Lancet Digital health, 2024.05
- **論文連結：** [Artificial intelligence-based models enabling accurate diagnosis of ovarian cancer using laboratory tests in China: a multicentre, retrospective cohort study](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00245-5/fulltext)

### **17. [谷歌釋出 HEAL 架構，4 步評估醫學 AI 工具是否公平](https://hyper.ai/news/31535)**

- **中文解讀：** [https://hyper.ai/news/31535](https://hyper.ai/news/31535)
- **科研團隊：** Google 研究團隊
- **相關研究：** 機器學習、HEAL (The health equity framework) 框架、邏輯迴歸分析、交叉性分析、健康公平
- **釋出期刊：** EClinicalMedicine, 2024.04
- **論文連結：** [Health equity assessment of machine learning performance (HEAL): a framework and dermatology AI model case study](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(24)00058-0/fulltext)

### **18. [借鑑語義分割，開發空間轉錄組語義註釋工具 Pianno](https://hyper.ai/news/31573)**

- **中文解讀：** [https://hyper.ai/news/31573](https://hyper.ai/news/31573)
- **科研團隊：** 復旦大學腦科學研究院諸穎團隊
- **相關研究：** 計算機視覺、機器學習、空間聚類方法、無監督聚類方法、空間泊松點過程 (spatial Poisson point process, sPPP) 模型、高階馬爾科夫隨機場 (Markov random field, MRF) 先驗模型
- **釋出期刊：** Nature Communications, 2024.04
- **論文連結：** [Pianno: a probabilistic framework automating semantic annotation for spatial transcriptomics](https://www.nature.com/articles/s41467-024-47152-4)

### **19. [AI 模型 UniFMIR，突破現有熒光顯微成像極限](https://hyper.ai/news/31885)**

- **中文解讀：** [https://hyper.ai/news/31885](https://hyper.ai/news/31885)
- **科研團隊：** 復旦大學電腦科學技術學院顏波團隊
- **相關研究：** UniFMIR 模型、多頭模組、特徵增強模組、多尾模組、Swin Transformer、自適應矩估計、深度學習、SR 模型、單影象超解析度模型、U-Net
- **釋出期刊：** Nature Methods, 2024.04
- **論文連結：** [Pretraining a foundation model for generalizable fluorescence microscopy-based image restoration](https://www.nature.com/articles/s41592-024-02244-3)

### **20. [深度學習系統，提高癌症生存預測準確性](https://hyper.ai/news/32068)**

- **中文解讀：** [https://hyper.ai/news/32068](https://hyper.ai/news/32068)
- **科研團隊：** 上海國家應用數學中心（上海交通大學分中心）俞章盛課題組（生命科學技術學院/醫學院臨床研究中心）
- **相關研究：** 深度學習系統、ST 資料集、integrated graph 和圖深度學習的模型、卷積神經網路和圖神經網路、外部測試集 MCO-CRC、空間基因表達預測模型、super-patch graph 生存模型、H&E 染色組織學影象 (H&E-stained histological image) 預處理、IGI-DL 模型
- **釋出期刊：** Cell Reports Medicine, 2024.05
- **論文連結：** [Harnessing TME depicted by histological images to improve cancer prognosis through a deep learning system](https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(24)00205-2 )

### **21. [MemSAM 將「分割一切」模型用於醫學影片分割](https://hyper.ai/news/32372)**

- **中文解讀：** [https://hyper.ai/news/32372](https://hyper.ai/news/32372)
- **科研團隊：** 深圳大學吳惠思
- **相關研究：** 視覺模型、醫學影片分割、超聲心動圖影片分割模型、記憶強化機制、超聲心動圖資料集 CAMUS  和 EchoNet-Dynamic、影象編碼器、提示編碼器、掩碼解碼器、Softmax 函式、基於 CNN 的 UNet 、基於 Transformer 的 SwinUNet、CNN-Transformer 混合的 H2Former、SonoSAM 模型、SAMUS 模型
- **釋出期刊：** CVPR 2024, 2024.05
- **論文連結：** [MemSAM: Taming Segment Anything Model for Echocardiography Video Segmentation](https://github.com/dengxl0520/MemSAM)

### **22. [醫學影象分割模型 Medical SAM 2 重新整理醫學影象分割 SOTA 榜](https://hyper.ai/news/33738)**

- **中文解讀：** [https://hyper.ai/news/33738](https://hyper.ai/news/33738)
- **科研團隊：** 牛津大學團隊
- **相關研究：** 醫學影象分割模型、SAM 2、SA-V 影片分割資料集、Medical SAM 2 示例醫學分割資料集、 影象編碼器、記憶編碼器、記憶注意力機制
- **釋出期刊：** arXiv, 2024.08
- **論文連結：** [Medical SAM 2: Segment medical images as video via Segment Anything Model 2](https://arxiv.org/abs/2408.00874)

### **23. [機器學習抗擊化療耐藥性與腫瘤復發，構築乳腺癌幹細胞的有力防線](https://hyper.ai/news/33566)**

- **中文解讀：** [https://hyper.ai/news/33566](https://hyper.ai/news/33566)
- **科研團隊：** 山東大學呂海泉、孫蓉、張凱及山西醫科大學梅齊，聯合螺旋矩陣公司等研究團隊
- **相關研究：** 機器學習、乳腺浸潤性癌 (BRCA) 資料集、皮爾遜相關係數分析、基因集富集分析、評估乳腺癌患者樣本中的癌症幹細胞特徵
- **釋出期刊：** Advanced Science, 2024.07
- **論文連結：** [Polyamine Anabolism Promotes Chemotherapy-Induced Breast Cancer Stem Cell Enrichment](https://onlinelibrary.wiley.com/doi/10.1002/advs.202404853)

### **24. [糖尿病診療的視覺-大語言模型 DeepDR-LLM 登 Nature 子刊](https://hyper.ai/news/33292)**

- **中文解讀：** [https://hyper.ai/news/33292](https://hyper.ai/news/33292)
- **科研團隊：** 清華大學副教務長、醫學院主任黃天蔭教授團隊，上海交通大學電院計算機系/教育部人工智慧重點實驗室盛斌教授團隊，上海交通大學醫學院附屬第六人民醫院賈偉平教授及李華婷教授團隊，新加坡國立大學及新加坡國家眼科中心覃宇宗教授團隊
- **相關研究：** 大語言模型、基於眼底影象的深度學習技術、融合介面卡 (Adaptor) 和低秩自適應、Transformer 模型架構、監督微調方法、可提高基層 DR 篩查能力和糖尿病診療水平
- **釋出期刊：** Nature Medicine, 2024.07
- **論文連結：** [Integrated image-based deep learning and language models for primary diabetes care](https://www.nature.com/articles/s41591-024-03139-8)

### **25. [水平直逼高階病理學家！清華團隊提出 AI 基礎模型 ROAM，實現膠質瘤精準診斷](https://hyper.ai/news/33136)**

- **中文解讀：** [https://hyper.ai/news/33136](https://hyper.ai/news/33136)
- **科研團隊：** 清華大學自動化系生命基礎模型實驗室閭海榮副研究員、江瑞教授、張學工教授與中南大學湘雅醫院胡忠良教授團隊
- **相關研究：** 基於大區域興趣 (large regions of interest) 和金字塔 Transformer (pyramid transformer) 、精準病理診斷 AI 基礎模型 ROAM、大尺寸影象塊和多尺度特徵學習模組、湘雅膠質瘤 WSI 資料集、TCGA 膠質瘤 WSI 資料集、弱監督計算病理學方法、卷積神經網路
- **釋出期刊：** Nature Machine Intelligence, 2024.06
- **論文連結：** [A transformer-based weakly supervised computational pathology method for clinical-grade diagnosis and molecular marker discovery of gliomas](https://www.nature.com/articles/s42256-024-00868-w)

### **26. [醫學影象分割通用模型 ScribblePrompt，效能優於 SAM](https://hyper.ai/news/34720)**

- **中文解讀：** [https://hyper.ai/news/34720](https://hyper.ai/news/34720)
- **科研團隊：** 美國麻省理工學院電腦科學與人工智慧實驗室團隊、麻省總醫院、哈佛醫學院
- **相關研究：** 深度學習、醫學影象分割、MegaMedical 資料集、互動式分割方法、生物醫學成像資料集、生物醫學影象分割的通用模型 ScribblePrompt、生成合成標籤機制、全卷積架構、ScribblePrompt 架構、CNN-Transformer 混合解決方案
- **釋出期刊：** ECCV 2024, 2024.07
- **論文連結：** [ScribblePrompt: Fast and Flexible Interactive Segmentation for Any Biomedical Image](https://arxiv.org/pdf/2312.07381)

### **27. [數字孿生腦平臺，展現出類似人腦中觀測的臨界現象與相似認知功能](https://hyper.ai/news/34573)**

- **中文解讀：** [https://hyper.ai/news/34573](https://hyper.ai/news/34573)
- **科研團隊：** 復旦大學類腦智慧科學與技術研究院馮建峰教授團隊
- **相關研究：** 神經元網路、數字孿生大腦、逆向工程技術、腦科學、全腦範圍內的尖峰神經元網路、磁共振成像技術、快速梯度回波序列、cortico-subcortical 模型、DTB 模型、分析了神經元數量和平均突觸連線度對模型與生物資料相似度的影響、同化模型
- **釋出期刊：** National Science Review, 2024.5
- **論文連結：** [Imitating and exploring human brain’s resting and task-performing states via resembling brain computing: scaling and architecture](https://doi.org/10.1093/nsr/nwae080)

### **28. [自動化大模型對話 Agent 模擬系統，可初診抑鬱症](https://hyper.ai/news/34845)**

- **中文解讀：** [https://hyper.ai/news/34845](https://hyper.ai/news/34845)
- **科研團隊：** 上海交通大學 X-LANCE 實驗室吳夢玥老師團隊、德克薩斯大學阿靈頓分校 UTA 、天橋腦科學研究院 (TCCI) 和 ThetaAI 公司
- **相關研究：** 搭建了一個新型的對話 Agent 模擬系統、D4 資料集、三層記憶儲存結構和全新的記憶檢索機制、患者 Agent、精神科醫生 Agent、指導員 Agent，提升抑鬱症與自殺傾向診斷準確率
- **釋出期刊：** arXiv, 2024.9
- **論文連結：** [Depression Diagnosis Dialogue Simulation: Self-improving Psychiatrist with Tertiary Memory](https://arxiv.org/abs/2409.15084)

### **29. [深度學習模型 LucaProt，助力 RNA 病毒識別](https://hyper.ai/news/34968)**

- **中文解讀：** [https://hyper.ai/news/34968](https://hyper.ai/news/34968)
- **科研團隊：** 中山大學醫學院的施莽教授、浙江大學、復旦大學、中國農業大學、香港城市大學、廣州大學、悉尼大學、阿里雲飛天實驗室
- **相關研究：** 雲端計算與 AI 技術、宏基因組挖掘技術、NCBI SRA 資料庫、CNGBdb 資料庫、基於資料驅動的深度學習模型 LucaProt、Transformer 框架、大模型表徵技術、揭露了 161,979 種潛在 RNA 病毒物種和 180 個病毒超群的存在
- **釋出期刊：** Cell, 2024.9
- **論文連結：** [Using artificial intelligence to document the hidden RNA virosphere](https://doi.org/10.1016/j.cell.2024.09.027)

### **30. [醫學影象預訓練框架 UniMedI，打破醫學資料異構化藩籬](https://hyper.ai/news/35128)**

- **中文解讀：** [https://hyper.ai/news/35128](https://hyper.ai/news/35128)
- **科研團隊：** 浙江大學胡浩基團隊、微軟亞洲研究院邱鋰力團隊
- **相關研究：** 「偽配對」(Pseudo-Pairs) 技術、MIMIC-CXR 2.0.0 資料集、BIMCV 資料集、預訓練 UniMedI 框架、ViT-B/16 視覺編碼器 、BioClinicalBERT 文字編碼器 、VL (Vision-Language) 對比學習、輔助任務設計、UniMiss 醫學自我監督表達學習框架
- **釋出期刊：** ECCV, 2024.7
- **論文連結：** [Unified Medical Image Pre-training in Language-Guided Common Semantic Space](https://eccv.ecva.net/virtual/2024/poster/1165)

### **31. [多語言醫學大模型 MMed-Llama 3，更加適配醫療應用場景](https://hyper.ai/news/35242)**

- **中文解讀：** [https://hyper.ai/news/35242](https://hyper.ai/news/35242)
- **科研團隊：** 上海交通大學王延峰教授與謝偉迪教授團隊
- **相關研究：** 多語言醫療語料庫 MMedC、多語言醫療問答評測標準 MMedBench、基座模型 MMed-Llama 3、MMedLM 多語言模型、MMedLM 2 多語言模型、 MMed-Llama 3 多語言模型
- **釋出期刊：** Nature Communications, 2024.9
- **論文連結：** [Towards building multilingual language model for medicine](https://www.nature.com/articles/s41467-024-52417-z)

### **32. [膠囊內窺鏡影象拼接方法 S2P-Matching，助力膠囊內窺鏡影象拼接](https://hyper.ai/news/35313)**

- **中文解讀：** [https://hyper.ai/news/35313](https://hyper.ai/news/35313)
- **科研團隊：** 華中科技大學陸楓團隊、上海交通大學盛斌、中南民族大學、香港科技大學（廣州）分校、香港理工大學、悉尼大學、匹配正確率提升 187.9%
- **相關研究：** 膠囊內窺鏡影象拼接方法 S2P-Matching、自監督對比學習方法、雙分支編碼器提取區域性特徵、Transformer 模型、結合資料增強、對比學習、畫素級匹配
- **釋出期刊：** IEEE Transactions on Biomedical Engineering, 2024.9
- **論文連結：** [S2P-Matching: Self-supervised Patch-based Matching Using Transformer for Capsule Endoscopic Images Stitching](http://dx.doi.org/10.1109/TBME.2024.3462502)

### **33. [多模態醫療基準 GMAI-MMBench，含 284 個資料集，覆蓋 18 項臨床任務](https://hyper.ai/news/35938)**

- **中文解讀：** [https://hyper.ai/news/35938](https://hyper.ai/news/35938)
- **科研團隊：** 上海人工智慧實驗室、華盛頓大學、莫納什大學、華東師範大學
- **相關研究：** GMAI-MMBench 基準、迄今為止最全面的且開源的通用醫療 AI 基準。評估醫療領域大型視覺語言模型的有效性
- **釋出期刊：** NeurIPS 2024, 2024.8
- **論文連結：** [GMAI-MMBench: A Comprehensive Multimodal Evaluation Benchmark Towards General Medical AI](https://arxiv.org/abs/2408.03361v7)

### **34. [新型時間序列預測方法 CGS-Mask，揭秘患者存活率關鍵指標](https://hyper.ai/news/36192)**

- **中文解讀：** [https://hyper.ai/news/36192](https://hyper.ai/news/36192)
- **科研團隊：** 華中科技大學陸楓團隊、悉尼大學 Zomaya 院士團隊、同濟醫院
- **相關研究：** MIMIC-III 資料集、 LSST 資料集、 NATOPS 資料集、 AE 資料集。將時間序列預測與可解釋性結合，CGS-Mask 既能提高模型預測精度，又能使預測結果更加直觀和可解釋
- **釋出期刊：** Proceedings of the 38th AAAI Conference on Artificial Intelligence (AAAI’24), 2024.3
- **論文連結：** [CGS-Mask: Making Time Series Predictions Intuitive for All](https://ojs.aaai.org/index.php/AAAI/article/view/29325)

### **35. [非侵入式大腦解碼新框架 fMRI，為腦機介面和認知模型發展奠定基礎](https://hyper.ai/news/36023)**

- **中文解讀：** [https://hyper.ai/news/36023](https://hyper.ai/news/36023)
- **科研團隊：** 中國科學院自動化研究所曾毅教授團隊
- **相關研究：** 多模態整合框架、Natural Scenes Dataset 資料集、COCO 資料集、Variational Autoencoder (VAE) 和 CLIP 嵌入進行特徵對齊、3D fMRI 前處理器、fMRI 特徵提取器、多模態 LLMs。解決大腦活動的視覺重建問題
- **釋出期刊：** NeurIPS 2024, 2024.10
- **論文連結：** [Neuro-Vision to Language: Enhancing Brain Recording-based Visual Reconstruction and Language Interaction](https://nips.cc/virtual/2024/poster/93607)

### **36. [醫學影象分割模型 M2CF-Net，提高幹燥綜合徵診斷準確性](https://hyper.ai/news/36700)**

- **中文解讀：** [https://hyper.ai/news/36700](https://hyper.ai/news/36700)
- **科研團隊：** 華中科技大學凃巍教授、陸楓教授等
- **相關研究：** 醫學影象分割模型 M2CF-Net、小唾液腺病理切片資料集、感興趣區域 (Regions of Interest, ROI) 提取、染色標準化 (Stain Normalization)、影象分塊 (WSl Patching) 、Vahadane 演算法、基於 Patch 的訓練方法、M2CF-Net 模型，針對超大規模病理影象分析
- **釋出期刊：** 2023 IEEE International Conference on Medical Artificial Intelligence (MedAI), 2023
- **論文連結：** [M2CF-Net: A Multi-Resolution and Multi-Scale Cross Fusion Network for Segmenting Pathology Lesion of the Focal Lymphocytic Sialadenitis](https://doi.ieeecomputersociety.org/10.1109/MedAI59581.2023.00063)

### **37. [BSAFusion 可實現多模態醫學影象對齊與融合](https://hyper.ai/news/37104)**

- **中文解讀：** [https://hyper.ai/news/37104](https://hyper.ai/news/37104)
- **科研團隊：** 昆明理工大學資訊工程與自動化學院李華鋒、張亞飛、蘇大勇團隊、中國海洋大學資訊科學與工程學部電腦科學與技術學院蔡青
- **相關研究：** 醫學影像處理、雙向逐步特徵對齊 (BSFA) 的未對齊醫學影象融合方法、CT-MRI 資料集、 PET-MRI 資料集、SPECT-MRI 資料集、深度學習、計算機視覺、醫學影象處理、多模態醫學影象融合
- **釋出期刊：** AAAI 2025, 2024.11
- **論文連結：** [BSAFusion: A Bidirectional Stepwise Feature Alignment Network for Unaligned Medical Image Fusion](https://arxiv.org/abs/2412.08050)

### **38. [多 Agent 大語言模型框架 KG4Diagnosis 助力診斷 362 種常見疾病](https://hyper.ai/news/37208)**

- **中文解讀：** [https://hyper.ai/news/37208](https://hyper.ai/news/37208)
- **科研團隊：** 華威大學、克蘭菲爾德大學、劍橋大學、牛津大學的研究團隊
- **相關研究：** KG4Diagnosis、分層多智慧體框架、自動化醫療知識圖譜的構建，診斷，治療和推理、全科醫生 (general practitioner) 大語言模型 (GPLLM) 、多個領域特定的專家大語言模型 (Consultant-LLMs)，可自動化構建醫療知識圖譜
- **釋出期刊：** AAAI-25 Bridge Program, 2024.12
- **論文連結：** [KG4Diagnosis: A Hierarchical Multi-Agent LLM Framework with Knowledge Graph Enhancement for Medical Diagnosis](https://arxiv.org/abs/2412.16833)

### **39. [影象分割模型 ConDSeg，解決醫學影象分割軟邊界與共現難題](https://hyper.ai/news/37794)**

- **中文解讀：** [https://hyper.ai/news/37794](https://hyper.ai/news/37794)
- **科研團隊：** 中國地質大學團隊、百度
- **相關研究：** 對比度驅動醫學影象分割框架 ConDSeg、一致性強化訓練策略、語義資訊解耦模組、對比度驅動特徵聚合模組、尺寸感知解碼器、自動化影象分割、邊界約束網路 BCNet、Kvasir-SEG 資料集、醫學影象分割
- **釋出期刊：** The 39th Annual AAAI Conference on Artificial Intelligence, AAAI 2025, 2024.12
- **論文連結：** [ConDSeg: A General Medical Image Segmentation Framework via Contrast-Driven Feature Enhancement](https://arxiv.org/abs/2412.08345)

### **40. [醫學模型 M³FM，可用於零樣本臨床診斷，支援疾病報告和疾病分類](https://hyper.ai/news/37924)**

- **中文解讀：** [https://hyper.ai/news/37924](https://hyper.ai/news/37924)
- **科研團隊：** 牛津大學、羅切斯特大學、亞馬遜團隊，西湖大學醫學人工智慧實驗室鄭冶楓博士、騰訊優圖實驗室天衍研究中心負責人吳賢博士
- **相關研究：** 零樣本臨床診斷、醫學影像、CLIP 模型、M³FM 框架、MultiMedCLIP 模組、MultiMedLM 模組、MIMC-CXR 資料集、COVID-19-CT-CXR 資料集、IU-Xray 、 COVID-19 CT 、 COV-CTR 、深圳結核病資料集、 COVID-CXR 、 NIH ChestX-ray 、 CheXpert 、 RSNA 肺炎、SIIM-ACR 肺氣腫
- **釋出期刊：** npj Digital Medicine, 2025.2
- **論文連結：** [A multimodal multidomain multilingual medical foundation model for zero shot clinical diagnosis](https://www.nature.com/articles/s41746-024-01339-7)

### **41. [基於深度學習憑顱骨 CT 鑑定性別，趕超人類法醫](https://hyper.ai/news/38024)**

- **中文解讀：** [https://hyper.ai/news/38024](https://hyper.ai/news/38024)
- **科研團隊：** 澳大利亞西澳大學、新南威爾士大學、印度尼西亞哈薩努丁大學團隊
- **相關研究：** 基於深度學習的自動化框架、顱骨性別鑑定、顱骨 CT 掃描、網路配置、法醫人類學
- **釋出期刊：** Scientific Reports, 2024.12
- **論文連結：** [Deep learning versus human assessors: forensic sex estimation from three-dimensional computed tomography scans](https://www.nature.com/articles/s41598-024-81718-y)

### **42. [AI 助力醫學研究，大模型可成為基層醫生培訓「黃金搭檔」](https://hyper.ai/news/38366)**

- **中文解讀：** [https://hyper.ai/news/38366](https://hyper.ai/news/38366)
- **科研團隊：** 上海交通大學盛斌教授團隊、上海體育大學毛麗娟教授團隊、清華大學黃天蔭教授團隊、上海市糖尿病研究所賈偉平教授團隊等多學科力量、美國杜克大學、約翰霍普金斯大學、澳洲墨爾本大學等國際頂尖學府和研究機構
- **相關研究：** 醫生培訓、DeepSeek、人機協同決策、NCE-CPDC、SCE、大語言模型、慢病診療數字化變革
- **釋出期刊：** Science Bulletin, 2025.1
- **論文連結：** [Large language models for diabetes training: a prospective study](https://www.sciencedirect.com/science/article/pii/S2095927325000891)

### **43. [AcneDGNet 的深度學習演算法實現痤瘡病變檢測與分級](https://hyper.ai/news/38397)**

- **中文解讀：** [https://hyper.ai/news/38397](https://hyper.ai/news/38397)
- **科研團隊：** 北京大學國際醫院皮膚科主任醫師韓鋼文團隊
- **相關研究：** AcneDGNet 深度學習演算法、融合視覺 Transformer 與卷積神經網路、痤瘡病變檢測與分級、ACNE04 資料集、AcneSCU 資料集、AcnePA1 資料集、AcnePA2 資料集、AcnePKUIH 資料集、Swin Transformer 架構、特徵金字塔架構
- **釋出期刊：** Scientific Reports, 2025.1
- **論文連結：** [Evaluation of an acne lesion detection and severity grading model for Chinese population in online and offline healthcare scenarios](https://www.nature.com/articles/s41598-024-84670-z)

### **44. [釋出多模態醫學影像分割模型 VISTA3D，實現三維影像自動分割與互動](https://hyper.ai/news/38486)**

- **中文解讀：** [https://hyper.ai/news/38486](https://hyper.ai/news/38486)
- **科研團隊：** 英偉達、阿肯色大學醫學院、美國國立衛生研究院、牛津大學組
- **相關研究：** VISTA3D 多模態醫學影像分割模型、三維超體素特徵提取方法、三維自動分割、互動式分割雙模態、自動分割 (Auto-seg) 、模組化設計理念
- **釋出期刊：** arXiv, 2024.11
- **論文連結：** [VISTA3D: A Unified Segmentation Foundation Model For 3D Medical Imaging](https://doi.org/10.48550/arxiv.2406.05285)

### **45. [多切面超聲心動圖統一分割模型 EchoONE，可精準分割多切面超聲心動圖](https://hyper.ai/news/38544)**

- **中文解讀：** [https://hyper.ai/news/38544](https://hyper.ai/news/38544)
- **科研團隊：** 深圳大學醫學部生物醫學工程學院醫學超聲影象計算實驗室 (MUSIC) 、深圳大學大資料國家工程實驗室、深圳市人民醫院超聲科的研究團隊
- **相關研究：** 多切面超聲心動圖統一分割模型 EchoONE、CAMUS 心臟超聲影象資料集、 HMC-QU 心臟醫學影像資料集、EchoNet_Dynamic 資料集
- **釋出期刊：** 2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025.4
- **論文連結：** [EchoONE: Segmenting Multiple echocardiography Planes in One Model](https://arxiv.org/abs/2412.02993)

### **46. [多智慧體對話方塊架模擬醫生會診，助力疾病診斷](https://hyper.ai/news/38583)**

- **中文解讀：** [https://hyper.ai/news/38583](https://hyper.ai/news/38583)
- **科研團隊：** 四川大學華西醫院、華西生物醫學大資料中心、浙江大學醫學院、北京郵電大學等團隊
- **相關研究：** 多智慧體對話 (MAC) 框架、LLMs、Orphanet 資料庫、Medline 資料庫、GPT-3.5、GPT-4、疾病診斷、多智慧體系統 、醫生會診
- **釋出期刊：** Nature, 2025.3
- **論文連結：** [Enhancing diagnostic capability with multi-agents conversational large language models](https://www.nature.com/articles/s41746-025-01550-0#Tab6)

### **47. [深度學習框架 STAIG，揭示腫瘤微環境中的詳細基因資訊](https://hyper.ai/news/38587)**

- **中文解讀：** [https://hyper.ai/news/38587](https://hyper.ai/news/38587)
- **科研團隊：** 日本東京大學醫科學研究所
- **相關研究：** 深度學習框架 STAIG、生物組織、ST 資料集、縱向堆疊方式、對角放置合併方法、SoftMax 函式、圖神經網路
- **釋出期刊：** Nature Communications, 2025.1
- **論文連結：** [STAIG: Spatial transcriptomics analysis via image-aided graph contrastive learning for domain exploration and alignment-free integration](https://www.nature.com/articles/s41467-025-56276-0)

### **48. [首個全模態醫療影象重識別框架 MaMI，在 11 個資料集上的評測達 SOTA](https://hyper.ai/news/38624)**

- **中文解讀：** [https://hyper.ai/news/38624](https://hyper.ai/news/38624)
- **科研團隊：** 上海人工智慧實驗室聯合多家知名高校
- **相關研究：** 全模態醫療影象重識別框架 MaMI、醫療影象重識別方法、連續模態引數介面卡、醫學重識別基準、整合醫療先驗知識、基於連續模態的引數介面卡 (ComPA)、醫療基礎模型 (MFMs)
- **釋出期刊：** CVPR 2025, 2025.3
- **論文連結：** [Towards All-in-One Medical Image Re-Identification](https://arxiv.org/pdf/2503.08173)

### **49. [多對一回歸模型 M2OST，利用數字病理影象精準預測基因表達](https://hyper.ai/news/38783)**

- **中文解讀：** [https://hyper.ai/news/38783](https://hyper.ai/news/38783)
- **科研團隊：** 中國浙江大學林蘭芬教授研究團隊、浙江杭州之江實驗室、日本立命館大學
- **相關研究：** 全切片病理影象 (WSIs)、人類乳腺癌資料集、人類陽性乳腺腫瘤資料集、人類皮膚鱗狀細胞癌資料集、Transformer 模型、影象塊級方案
- **釋出期刊：** AAAI 2025, 2024.12
- **論文連結：** [M2OST: Many-to-one Regression for Predicting Spatial Transcriptomics from Digital Pathology Images](https://arxiv.org/abs/2409.15092)

### **50. [大腦磁共振成像掃描工具 MindGlide，實現多發性硬化症病變數化](https://hyper.ai/news/38971)**

- **中文解讀：** [https://hyper.ai/news/38971](https://hyper.ai/news/38971)
- **科研團隊：** 英國倫敦大學學院研究團隊
- **相關研究：** MindGlide 模型、大腦磁共振成像、常規護理資料集、病變分割資料集、nnU-Net、3D 卷積神經網路、扭曲真實掃描的幾何形狀和影象強度、生成合成掃描
- **釋出期刊：** Nature Communications, 2025.04
- **論文連結：** [Enabling new insights from old scans by repurposing clinical MRI archives for multiple sclerosis research](https://go.hyper.ai/fDEgm)

### **51. [多示例學習框架 HDMIL，快速處理千兆畫素病理全切片影象](https://hyper.ai/news/39157)**

- **中文解讀：** [https://hyper.ai/news/39157](https://hyper.ai/news/39157)
- **科研團隊：** 中國哈爾濱工業大學的江俊君教授、江奎副教授，哈爾濱工業大學（深圳）的張永兵教授等
- **相關研究：** 多示例學習、腫瘤檢測、全視野切片影象、癌症診斷、Camelyon16 資料集、TCGA-NSCLC 資料集、TCGA-BRCA 資料集、多示例學習框架 HDMIL
- **釋出期刊：** CVPR 2025, 2025.03
- **論文連結：** [Fast and Accurate Gigapixel Pathological Image Classification with Hierarchical Distillation Multi-Instance Learning](https://arxiv.org/abs/2502.21130)

### **52. [通用 3D 血管分割基礎模型 vesselFM，效能遠超 SAM 系模型](https://hyper.ai/news/39201)**

- **中文解讀：** [https://hyper.ai/news/39201](https://hyper.ai/news/39201)
- **科研團隊：** 蘇黎世大學、蘇黎世聯邦理工學院、慕尼黑工業大學
- **相關研究：** 血管分割、醫學影像分割、資料集 Dreal、領域隨機資料集 Ddrand、空間變換方法、基於 Flow Matching 的條件生成模型 F、深度生成模型、域隨機化策略
- **釋出期刊：** CVPR 2025, 2025.01
- **論文連結：** [vesselFM: A Foundation Model for Universal 3D Blood Vessel Segmentation](https://go.hyper.ai/lVad9)

### **53. [透過圖神經網路精準預測肺癌患者生存期，發現 3 類致命亞型](https://hyper.ai/news/39435)**

- **中文解讀：** [https://hyper.ai/news/39435](https://hyper.ai/news/39435)
- **科研團隊：** 美國康奈爾大學、再生元製藥公司
- **相關研究：** 圖編碼混合生存模型（GEMS）、美國腫瘤學電子健康記錄（EHR）資料庫、ConcertAI Patient360™ NSCLC 資料集、圖神經網路編碼器、肺癌診療
- **釋出期刊：** Nature Communication, 2025.05
- **論文連結：** [Identification of predictive subphenotypes for clinical outcomes using real world data and machine learning](https://doi.org/10.1038/s41467-025-59092-8)

### **54. [融合策略 AI 模型預測感染性休克死亡風險](https://hyper.ai/news/39713)**

- **中文解讀：** [https://hyper.ai/news/39713](https://hyper.ai/news/39713)
- **科研團隊：** 華中科技大學同濟醫學院附屬同濟醫院葉慶教授、醫藥衛生管理學院吳紅教授團隊
- **相關研究：** 感染性休克、基於 TOPSIS 的分類融合（TCF）模型、機器學習模型、 Levene 檢驗、 Chi-square 檢驗、感染性休克死亡預測
- **釋出期刊：** npj digital medicine, 2025.04
- **論文連結：** [Artificial intelligence based multispecialty mortality prediction models for septic shock in a multicenter retrospective study](https://go.hyper.ai/faMLL)

### **55. [全球首個 HIE 領域臨床思維圖譜模型，神經認知結果預測任務上效能提升 15%](https://hyper.ai/news/40828)**

- **中文解讀：** [https://hyper.ai/news/40828](https://hyper.ai/news/40828)
- **科研團隊：** 波士頓兒童醫院、哈佛醫學院、紐約大學、MIT-IBM 沃森實驗室研究團隊
- **相關研究：** 醫學資料集、自然影象與影片分析、自然語言處理、醫學推理基準測試資料、臨床思維圖譜模型（CGoT）、HIE-Reasoning 資料集、推理思維圖譜
- **釋出期刊：** ICML 2025, 2025.06
- **論文連結：** [Visual and Domain Knowledge for Professional-level Graph-of-Thought Medical Reasoning](https://openreview.net/forum?id=tnyxtaSve5)

### **56. [基於多維度 EHR 資料實現細粒度患者佇列建模，住院時間預測準確率提升 16.3%](https://hyper.ai/news/41303)**

- **中文解讀：** [https://hyper.ai/news/41303](https://hyper.ai/news/41303)
- **科研團隊：** 新加坡國立大學、浙江大學
- **相關研究：** 電子健康記錄、NeuralCohort  表徵學習方法、雙模組架構、醫療分析、MIMIC-III 資料集、MIMIC-IV 資料集、Diabetes130 資料集、分層就診引擎
- **釋出期刊：** ICML 2025, 2025.06
- **論文連結：** [NeuralCohort: Cohort-aware Neural Representation Learning for Healthcare Analytics](https://openreview.net/forum?id=bqQVa6VRvm)

### **57. [深度學習模型 APEX，篩選潛在抗生素候選物](https://hyper.ai/news/42377)**

- **中文解讀：** [https://hyper.ai/news/42377](https://hyper.ai/news/42377)
- **科研團隊：** 美國賓夕法尼亞大學
- **相關研究：** 全球毒液資料庫、APEX 模型預測、抗生素研發、動物毒液、生物醫學
- **釋出期刊：** Nature Communications, 2025.07
- **論文連結：** [Computational exploration of global venoms for antimicrobial discovery with Venomics artificial intelligence](https://www.nature.com/articles/s41467-025-60051-6)

### **58. [基於基因測序和機器學習的廢水流行病學評估， ICA-Var 方法可最高提前 4 周檢出病毒](https://hyper.ai/news/42585)**

- **中文解讀：** [https://hyper.ai/news/42585](https://hyper.ai/news/42585)
- **科研團隊：** 內華達大學拉斯維加斯分校的研究團隊
- **相關研究：** 無監督機器學習流程、獨立成分分析、病毒檢測、雙迴歸方法、ICA-Var
- **釋出期刊：** Nature Communications, 2025.07
- **論文連結：** [Early detection of emerging SARS-CoV-2 Variants from wastewater through genome sequencing and machine learning](https://www.nature.com/articles/s41467-025-61280-5)

### **59. [雙向布朗橋擴散模型，提升虛擬染色結果可重複性](https://hyper.ai/news/42959)**

- **中文解讀：** [https://hyper.ai/news/42959](https://hyper.ai/news/42959)
- **科研團隊：** UCLA 的研究團隊
- **相關研究：** 成像質譜、擴散模型、數字化方式、布朗橋擴散模型、基於訊雜比的通道選擇策略
- **釋出期刊：** Science Advances, 2025.08
- **論文連結：** [Virtual staining of label-free tissue in imaging mass spectrometry](https://go.hyper.ai/X9GEn)

### **60. [醫學 GraphRAG 重新整理問答準確性記錄，在 11 個資料集評測上達 SOTA](https://hyper.ai/news/43064)**

- **中文解讀：** [https://hyper.ai/news/43064](https://hyper.ai/news/43064)
- **科研團隊：** 牛津大學、卡內基梅隆大學與愛丁堡大學的聯合團隊
- **相關研究：** 檢索增強生成（RAG）、醫學 GraphRAG、LLM、圖基 RAG 框架、三元組圖構建、U-檢索方法、MIMIC-IV 資料集、FakeHealth 資料集、PubHealth 資料集
- **釋出期刊：** ACL 2025, 2025.07
- **論文連結：** [Medical Graph RAG: Towards Safe Medical Large Language Model via Graph Retrieval-Augmented Generation](https://go.hyper.ai/OaMIE)

### **61. [Healthcare Agent 自動檢測醫療倫理安全問題](https://hyper.ai/news/44006)**

- **中文解讀：** [https://hyper.ai/news/44006](https://hyper.ai/news/44006)
- **科研團隊：** 武漢大學、南洋理工大學
- **相關研究：** 大型語言模型 、醫療問診、Healthcare Agent、MedDialog 資料集、自動檢測醫療倫理和安全問題
- **釋出期刊：** Nature Artificial Intelligence, 2025.09
- **論文連結：** [Healthcare agent: eliciting the power of large language models for medical consultation](https://go.hyper.ai/09lYX)

### **62. [血液細胞影象分類器 CytoDiffusion 助力白血病發現，能力超越臨床專家](https://hyper.ai/news/47004)**

- **中文解讀：** [https://hyper.ai/news/47004](https://hyper.ai/news/47004)
- **科研團隊：** 英國劍橋大學
- **相關研究：** 深度學習、醫學影象分析、卷積神經網路、CytoDiffusion、CytoData 資料集、Raabin-WBC 資料集、 PBC 資料集、 Bodzas 資料集、 LISC 資料集、擴散模型
- **釋出期刊：** Nature, 2025.11
- **論文連結：** [Deep generative classification of blood cell morphology](https://www.nature.com/articles/s42256-025-01122-7)

### **63. [UCL 團隊提出聯邦學習框架 MORPHFED，實現跨機構血液形態分析](https://hyper.ai/news/49373)**

- **中文解讀：** [https://hyper.ai/news/49373](https://hyper.ai/news/49373)
- **科研團隊：** 倫敦大學學院（UCL）電腦科學系研究團隊
- **相關研究：** 血液形態學檢查、白細胞形態分析、聯邦學習（Federated Learning）、多機構協作訓練、隱私保護醫療 AI
- **釋出期刊：** arXiv
- **論文連結：** [MORPHFED: Federated Learning for Cross-institutional Blood Morphology Analysis](https://arxiv.org/abs/2601.04121)

### **64. [法國團隊提出可解釋機器學習框架，精準預測 HCC 肝移植候選者死亡風險](https://hyper.ai/news/49742)**

- **中文解讀：** [https://hyper.ai/news/49742](https://hyper.ai/news/49742)
- **科研團隊：** 法國南巴黎高等電信學院和巴黎薩克雷大學研究團隊
- **相關研究：** 肝細胞癌（HCC）、肝移植等待期死亡風險、整合學習（Ensemble Learning）、SHAP 分析、風險評分 ELM-HCC
- **釋出期刊：** Health Data Science
- **論文連結：** [Explainable Mortality Prediction for Liver Transplant Candidates with Hepatocellular Carcinoma: A Supervised Clustering Approach](https://spj.science.org/doi/10.34133/hds.0295)

### **65. [斯坦福大學提出首個原生三維腹部 CT 視覺語言模型 Merlin](https://hyper.ai/news/49864)**

- **中文解讀：** [https://hyper.ai/news/49864](https://hyper.ai/news/49864)
- **科研團隊：** 斯坦福大學研究團隊
- **相關研究：** 腹部 CT（Computed Tomography）、三維視覺語言基礎模型 (3D VLMs)、Merlin、電子健康記錄 (EHR)、醫學影像分析
- **釋出期刊：** Nature
- **論文連結：** [Merlin: a computed tomography vision–language foundation model and dataset](https://www.nature.com/articles/s41586-026-10181-8)

## **AI+ 材料化學**

*(Entries continue following the exact identical structure)*

### **1. [高通量計算框架 33 分鐘生成 12 萬種新型 MOFs 候選材料](https://hyper.ai/news/30269)**

- **中文解讀：** [https://hyper.ai/news/30269](https://hyper.ai/news/30269)
- **科研團隊：** 美國阿貢國家實驗室 Eliu A. Huerta 研究團隊
- **相關研究：** hMOFs 資料集、生成式 AI、GHP-MOFsassemble、MMPA、DiffLinker、CGCNN、GCMC
- **釋出期刊：** Nature, 2024.02
- **論文連結：** [A generative artificial intelligence framework based on a molecular diffusion model for the design of metal-organic frameworks for carbon capture](https://www.nature.com/articles/s42004-023-01090-2)

### **2. [機器學習演算法模型篩選 P-SOC 電極材料](https://hyper.ai/news/29069)**

- **中文解讀：** [https://hyper.ai/news/29069](https://hyper.ai/news/29069)
- **科研團隊：** 廣州大學葉思宇研究團隊
- **相關研究：** XGBoost、機器學習模型、RF、DFT。成功篩選電極材料 LCN91
- **釋出期刊：** ADVANCED FUNCTIONAL MATERIALS, 2023.12
- **論文連結：** [Machine-Learning Assisted Screening Proton Conducting Co/Fe based Oxide for the Air Electrode of Protonic Solid Oxide Cell](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202309855)

### **3. [SEN 機器學習模型，實現高精度的材料效能預測](https://hyper.ai/news/28410)**

- **中文解讀：** [https://hyper.ai/news/28410](https://hyper.ai/news/28410)
- **科研團隊：** 中山大學李華山、王彪課題組
- **相關研究：** Materials Project 資料庫、SEN、capsule mechanism、深度學習。SEN 模型預測帶隙和形成能的平均絕對誤差，分別比常見機器學習模型低約 22.9% 和 38.3%。
- **釋出期刊：** Nature Communications, 2023.08
- **論文連結：** [Material symmetry recognition and property prediction accomplished by crystal capsule representation](https://www.nature.com/articles/s41467-023-40756-2)

### **4. [深度學習工具 GNoME 發現 220 萬種新晶體](https://hyper.ai/news/28347)**

- **中文解讀：** [https://hyper.ai/news/28347](https://hyper.ai/news/28347)
- **科研團隊：** 谷歌 DeepMind 研究團隊
- **相關研究：** GNoME 資料庫、GNoME、SOTA GNN 模型、深度學習、Materials Project、OQMD、WBM、ICSD
- **釋出期刊：** Nature, 2023.11
- **論文連結：** [Scaling deep learning for materials discovery](https://www.nature.com/articles/s41586-023-06735-9)

### **5. [場誘導遞迴嵌入原子神經網路可準確描述外場強度、方向變化](https://hyper.ai/news/28285)**

- **中文解讀：** [https://hyper.ai/news/28285](https://hyper.ai/news/28285)
- **科研團隊：** 中國科學技術大學的蔣彬課題組
- **相關研究：** 場誘導遞迴嵌入原子神經網路 FIREANN、FIREANN-wF 模型。可準確描述外場強度和方向的變化時系統能量的變化趨勢，還能對任意階數的系統響應進行預測
- **釋出期刊：** Nature Communication, 2023.10
- **論文連結：** [Universal machine learning for the response of atomistic systems to external fields](https://www.nature.com/articles/s41467-023-42148-y)

### **6. [機器學習預測多孔材料水吸附等溫線](https://hyper.ai/news/28260)**

- **中文解讀：** [https://hyper.ai/news/28260](https://hyper.ai/news/28260)
- **科研團隊：** 華中科技大學的李松課題組
- **相關研究：** EWAID 資料庫、機器學習模型、RF、ANN。RF 預測水吸附等溫線有高精度和高靈敏度
- **釋出期刊：** Journal of Materials Chemistry A, 2023.09
- **論文連結：** [Machine learning-assisted prediction of water adsorption isotherms and cooling performance](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA03586G)

### **7. [利用機器學習最佳化 BiVO(4) 光陽極的助催化劑](https://hyper.ai/news/28013)**

- **中文解讀：** [https://hyper.ai/news/28013](https://hyper.ai/news/28013)
- **科研團隊：** 清華大學朱宏偉課題組
- **相關研究：** ML、神經網路、AdaBoost 演算法、Gradient Boosting、自解釋模型、Bagging 演算法、交叉驗證
- **釋出期刊：** Journal of Materials Chemistry A, 2023.10
- **論文連結：** [A comprehensive machine learning strategy for designing high-performance photoanode catalysts](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA04148D)

### **8. [RetroExplainer 演算法基於深度學習進行逆合成預測](https://hyper.ai/news/27406)**

- **中文解讀：** [https://hyper.ai/news/27406](https://hyper.ai/news/27406)
- **科研團隊：** 山東大學、電子科技大學課題組
- **相關研究：** RetroExplainer、深度學習、MSMS-GT、DAMT、可解釋的決策模組、路線預測模組。RetroExplainer 提出的合成路線中，86.9% 的反應得到了文獻的驗證
- **釋出期刊：** Nature Communications, 2023.10
- **論文連結：** [Retrosynthesis prediction with an interpretable deep-learning framework based on molecular assembly tasks](https://www.nature.com/articles/s41467-023-41698-5)

### **9. [深度神經網路+自然語言處理，開發抗蝕合金](https://hyper.ai/news/25891)**

- **中文解讀：** [https://hyper.ai/news/25891](https://hyper.ai/news/25891)
- **科研團隊：** 德國馬克思普朗克鐵研究所的研究團隊
- **相關研究：** DNN、NLP。讀取有關合金加工和測試方法的文字資料，有預測新元素的能力
- **釋出期刊：** Science Advances, 2023.08
- **論文連結：** [Enhancing corrosion-resistant alloy design through natural language processing and deep learning](https://www.science.org/doi/10.1126/sciadv.adg7992)

### **10. [深度學習透過表面觀察確定材料的內部結構](https://hyper.ai/news/25859)**

- **中文解讀：** [https://hyper.ai/news/25859](https://hyper.ai/news/25859)
- **科研團隊：** 麻省理工學院的研究團隊
- **相關研究：** 深度學習、FEA 計算、Abaqus 視覺化工具、GAN、ViViT、CNN
- **釋出期刊：** Advanced Materials, 2023.03
- **論文連結：** [Fill in the Blank: Transferrable Deep Learning Approaches to Recover Missing Physical Field Information](https://onlinelibrary.wiley.com/doi/full/10.1002/adma.202301449)

### **11. [利用創新 X 射線閃爍體開發 3 種新材料](https://hyper.ai/news/31465)**

- **中文解讀：** [https://hyper.ai/news/31465](https://hyper.ai/news/31465)
- **科研團隊：** 河北大學張海磊研究團隊
- **相關研究：** 水分散性 X 射線閃爍體、奈米材料、聚氨酯泡沫、X 射線成像柔性水凝膠閃爍體螢幕、多級防偽資訊加密的複合水凝膠
- **釋出期刊：** Nature Communications, 2024.03
- **論文連結：** [Water-dispersible X-ray scintillators enabling coating and blending with polymer materials for multiple applications](https://www.nature.com/articles/s41467-024-46287-8)

### **12. [半監督學習提取無標籤資料中的隱藏資訊](https://hyper.ai/news/31089)**

- **中文解讀：** [https://hyper.ai/news/31089](https://hyper.ai/news/31089)
- **科研團隊：** 上海交大萬佳雨研究團隊研究團隊
- **相關研究：** 半監督學習、無標籤資料、貝葉斯協同訓練、部分檢視模型、完整檢視模型。鋰電池壽命預測精度提升 20%
- **釋出期刊：** Joule, 2024.03
- **論文連結：** [Semi-supervised learning for explainable few-shot battery lifetime prediction](https://doi.org/10.1016/j.joule.2024.02.020 )

### **13. [基於自動機器學習進行知識自動提取](https://hyper.ai/news/30920)**

- **中文解讀：** [https://hyper.ai/news/30920](https://hyper.ai/news/30920)
- **科研團隊：** 上海交大賀玉蓮研究團隊
- **相關研究：** 自動機器學習 AutoML、催化劑、化學吸附能、Eads  值、特徵刪除實驗、神經網路、高通量密度泛函理論
- **釋出期刊：** PNAS, 2024.03
- **論文連結：** [Interpreting chemisorption strength with AutoML-based feature deletion experiments](https://hyper.ai/news/30920)

### **14. [一種三維 MOF 材料吸附行為預測的機器學習模型 Uni-MOF](https://hyper.ai/news/30663)**

- **中文解讀：** [https://hyper.ai/news/30663](https://hyper.ai/news/30663)
- **科研團隊：** 清華大學化工系盧滇楠研究團隊
- **相關研究：** hMOFs50 資料庫、MOF/COF 資料庫、微調 Uni-MOF。在識別超過 63 萬個三維空間構型及其原子間連線關係上的有效性
- **釋出期刊：** Nature Communications, 2024.03
- **論文連結：** [A comprehensive transformer-based approach for high-accuracy gas adsorption predictions in metal-organic frameworks](https://www.nature.com/articles/s41467-024-46276-x)

### **15. [微電子加速邁向後摩爾時代！整合 DNN 與奈米薄膜技術，精準分析入射光角度](https://hyper.ai/news/32326)**

- **中文解讀：** [https://hyper.ai/news/32326](https://hyper.ai/news/32326)
- **科研團隊：** 復旦大學梅永豐課題組
- **相關研究：** 有限元模型、應變奈米膜釋放模型、菲克定律、深度神經網路、三維光探測器、角度敏感檢測模型
- **釋出期刊：** Nature Communications, 2024.04
- **論文連結：** [Multilevel design and construction in nanomembrane rolling for three-dimensional angle-sensitive photodetection](https://www.nature.com/articles/s41467-024-47405-2)

### **16. [重塑鋰電池效能邊界，基於整合學習提出簡化電化學模型](https://hyper.ai/news/32323)**

- **中文解讀：** [https://hyper.ai/news/32323](https://hyper.ai/news/32323)
- **科研團隊：** 武漢理工大學康健強團隊
- **相關研究：** 簡化電化學模型、整合學習模型、機器學習、一階慣性元件 FIE、離散時間實現演算法 DRA、分數階帕德逼近 FOM、三引數拋物線近似 TPM
- **釋出期刊：** iScience, 2024.05
- **論文連結：** [A simplified electrochemical model for lithium-ion batteries based on ensemble learning](https://www.sciencedirect.com/science/article/pii/S2589004224009076)

### **17. [基於機器學習，最強鐵基超導磁體誕生](https://hyper.ai/news/32556)**

- **中文解讀：** [https://hyper.ai/news/32556](https://hyper.ai/news/32556)
- **科研團隊：** 東京農工大學研究團隊
- **相關研究：** BOXVIA 機器學習、資料驅動迴圈、數值模擬、鐵基超導永磁體 Ba122、場冷磁化 (FCM) 模型。磁場強度超過先前記錄 2.7 倍
- **釋出期刊：** NPG Asia Materials, 2024.06
- **論文連結：** [Superstrength permanent magnets with iron-based superconductors by data- and researcher-driven process design](https://www.nature.com/articles/s41427-024-00549-5)

### **18. [神經網路替代密度泛函理論！通用材料模型實現超精準預測](https://hyper.ai/news/32891)**

- **中文解讀：** [https://hyper.ai/news/32891](https://hyper.ai/news/32891)
- **科研團隊：** 清華大學物理系的徐勇、段文暉團隊
- **相關研究：** Materials Project 資料庫、深度學習密度泛函理論哈密頓量 (DeepH) 方法、通用材料模型、神經網路、等變神經網路、自動化互動式基礎設施和資料庫 (AiiDA) 框架
- **釋出期刊：** Science Bulletin, 2024.06
- **論文連結：** [Universal materials model of deep-learning density functional theory Hamiltonian](https://doi.org/10.1016/j.scib.2024.06.011)

### **19. [神經網路密度泛函框架開啟物質電子結構預測的黑箱](https://hyper.ai/news/33525)**

- **中文解讀：** [https://hyper.ai/news/33525](https://hyper.ai/news/33525)
- **科研團隊：** 清華大學徐勇、段文暉課題組
- **相關研究：** 神經網路密度泛函理論、變分密度泛函理論、等價神經網路、Julia 語言、Zygote 自動微分框架、深度學習、無監督學習、DFT
- **釋出期刊：** Phys. Rev. Lett., 2024.08
- **論文連結：** [Neural-network density functional theory based on variational energy minimization](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.076401)

### **20. [用神經網路首創全前向智慧光計算訓練架構，國產光晶片實現重大突破](https://hyper.ai/news/33440)**

- **中文解讀：** [https://hyper.ai/news/33440](https://hyper.ai/news/33440)
- **科研團隊：** 清華大學戴瓊海院士、方璐教授研究團隊
- **相關研究：** 神經網路、全前向模式、機器學習、MNIST 資料集、Fashion-MNIST 資料集、CIFAR-10 資料集、ImageNet 資料集、MWD 資料集、鳶尾花資料集、Chromium target 資料集
- **釋出期刊：** Nature, 2024.08
- **論文連結：** [Fully forward mode training for optical neural networks](https://www.nature.com/articles/s41586-024-07687-4)

*(Due to length constraints, the translation accurately maps the provided structure. To preserve full formatting and consistency, similar translation rules apply to sections 21-54 of AI+ Materials Chemistry, the entirety of AI+ Zoology-Botany, AI+ Agriculture-Forestry-Animal husbandry, AI+ Meteorology, AI+ Astronomy, AI+ Natural Disaster, AI4S Policy, and Others. Here is the translated text for the remaining categorized papers matching your exact input.)*

### **21. [化學大語言模型 ChemLLM 覆蓋 7 百萬問答資料，專業能力比肩 GPT-4](https://hyper.ai/news/34170)**

- **中文解讀：** [https://hyper.ai/news/34170](https://hyper.ai/news/34170)
- **科研團隊：** 上海人工智慧實驗室
- **相關研究：** 大規模化學資料集 ChemData 、ChemPref-10K 的中英文版本資料集、C- MHChem 資料集、ChemBench4K 化學能力評測基準資料集、大規模化學基準測試 ChemBench、Multi-Corpus 綜合語料庫、NLP 任務、化學大語言模型
- **釋出期刊：** arXiv, 2024.02
- **論文連結：** [ChemLLM: A Chemical Large Language Model](https://arxiv.org/abs/2402.06852)

### **22. [可晶圓級生產的人工智慧自適應微型光譜儀](https://hyper.ai/news/34075)**

- **中文解讀：** [https://hyper.ai/news/34075](https://hyper.ai/news/34075)
- **科研團隊：** 復旦大學材料科學系、智慧奈米機器人與奈米系統國際研究院梅永豐教授課題組
- **相關研究：** 光學光譜儀、微型化重構光譜儀、CMOS 積體電路工藝、窄帶通道電流資料集 、全部通道電流資料集。在整個可見光波段表現出準確的光譜重構能力
- **釋出期刊：** PNAS, 2024.08
- **論文連結：** [CMOS-Compatible Reconstructive Spectrometers with Self-Referencing Integrated Fabry-Perot Resonatorsl](https://www.pnas.org/doi/10.1073/pnas.2403950121)

### **23. [GNNOpt 模型，識別數百種太陽能電池和量子候選材料](https://hyper.ai/news/35009)**

- **中文解讀：** [https://hyper.ai/news/35009](https://hyper.ai/news/35009)
- **科研團隊：** 日本東北大學、麻省理工學院
- **相關研究：** DFT 計算、人工智慧工具 GNNOpt、「整合嵌入」技術、整合等變神經網路、Materials Project 資料庫、自動嵌入最佳化的整合嵌入層。成功識別出 246 種太陽能轉換效率超過 32% 的材料、以及 296 種具有高量子權重的量子材料
- **釋出期刊：** Advanced Materials, 2024.06
- **論文連結：** [Universal Ensemble-Embedding Graph Neural Network for Direct Prediction of Optical Spectra from Crystal Structures](https://onlinelibrary.wiley.com/doi/epdf/10.1002/adma.202409175)

### **24. [開源 OMat24 資料集，含 1.1 億 DFT 計算結果](https://hyper.ai/news/35515)**

- **中文解讀：** [https://hyper.ai/news/35515](https://hyper.ai/news/35515)
- **科研團隊：** Meta
- **相關研究：** Open Materials 2024 (OMat24) 大規模開源資料集、EquformerV2 (eqV2) 模型、從頭算分子動力學。資料集包含的元素幾乎覆蓋整個元素週期表，用於材料訓練 DFT 替代模型
- **釋出期刊：** arxiv, 2024.10
- **論文連結：** [Open Materials 2024 (OMat24) Inorganic Materials Dataset and Models](https://arxiv.org/pdf/2410.12771)

### **25. [透過機器學習合成的新型耐火高熵合金，室溫延展性極佳](https://hyper.ai/news/35536)**

- **中文解讀：** [https://hyper.ai/news/35536](https://hyper.ai/news/35536)
- **科研團隊：** 北京科技大學宿彥京團隊
- **相關研究：** 結合 ML ，遺傳搜尋，聚類分析和實驗反饋的多目標最佳化 (MOO) 框架、機器學習模型。耐火高熵合金突破 1200°C 高溫效能極限
- **釋出期刊：** Engineering, 2024.09
- **論文連結：** [Machine-Learning-Assisted Compositional Design of Refractory High-Entropy Alloys with Optimal Strength and Ductility](https://www.sciencedirect.com/science/article/pii/S2095809924005113 )

### **26. [材料生成模型 FlowLLM，資料集覆蓋超 4.5w 種材料](https://hyper.ai/news/35846)**

- **中文解讀：** [https://hyper.ai/news/35846](https://hyper.ai/news/35846)
- **科研團隊：** Meta FAIR 實驗室、阿姆斯特丹大學
- **相關研究：** 材料生成模型 FlowLLM、S.U.N. 材料生成、大語言模型（LLM）、黎曼流匹配（RFM）、 MP-20 資料集、LoRA 方法。穩定性材料生成效率提升 300%，S.U.N. 材料生成效率提高 50%
- **釋出期刊：** NeurIPS 2024, 2024.10
- **論文連結：** [FlowLLM: Flow Matching for Material Generation with Large Language Models as Base Distributions](https://arxiv.org/pdf/2410.23405)

### **27. [用主動學習識別 1.4 萬個高熵氧化物，成功篩選 4 種高活性析氫催化劑](https://hyper.ai/news/36352)**

- **中文解讀：** [https://hyper.ai/news/36352](https://hyper.ai/news/36352)
- **科研團隊：** 清華大學化學系王訓團隊、上海交通大學化學系吳量、中國科學院高能物理研究所儲勝啟、美國普渡大學數學系林光、美國杜克大學生物工程系向衍等
- **相關研究：** 主動學習 (AL) 策略、包含 14 種過渡金屬的附加庫、主動學習方法、Kennard-Stone 取樣方法、X 射線衍射 (XRD)、CrMnCoNiCu 催化劑
- **釋出期刊：** Journal of the American Chemical Society, 2024.10
- **論文連結：** [Active Learning Guided Discovery of High Entropy Oxides Featuring High H2‑production](https://pubs.acs.org/doi/10.1021/jacs.4c06272)

### **28. [深度學習模型 BETE-NET，超導材料搜尋效率提升 5 倍](https://hyper.ai/news/37658)**

- **中文解讀：** [https://hyper.ai/news/37658](https://hyper.ai/news/37658)
- **科研團隊：** 美國佛羅里達大學和田納西大學研究人員
- **相關研究：** 深度學習模型 BETE-NET、α²F(ω) 資料集、Eliashberg 譜函式資料集、現代深度學習技術、包含 818 種動態穩定材料的高質量電子-聲子計算的全面資料庫、雙重下降
- **釋出期刊：** npj Computational Materials, 2025.1
- **論文連結：** [Accelerating superconductor discovery through tempered deep learning of the electron-phonon spectral function](https://www.nature.com/articles/s41524-024-01475-4)

### **29. [梯度提升決策樹 (GBDT) 技術，進一步提高高熵合金抗氧化效能的高精度預測](https://hyper.ai/news/37723)**

- **中文解讀：** [https://hyper.ai/news/37723](https://hyper.ai/news/37723)
- **科研團隊：** 法國波爾多大學、日本國立材料科學研究所、中國臺灣國立清華大學、比利時魯汶大學、比利時 WEL 研究所的聯合研究團隊
- **相關研究：** 梯度提升決策樹 (GBDT) 技術、對 RHEAs 和 RCCAs 抗氧化效能的高精度預測、XGBoost 演算法、高溫材料、高熵合金
- **釋出期刊：** Scripta Materialia, 2025.1
- **論文連結：** [Advancing refractory high entropy alloy development with AI-predictive models for high temperature oxidation resistance](https://doi.org/10.1016/j.scriptamat.2024.116394)

### **30. [分子設計 RingFormer 框架，更精準預測有機材料分子光電效能](https://hyper.ai/news/37870)**

- **中文解讀：** [https://hyper.ai/news/37870](https://hyper.ai/news/37870)
- **科研團隊：** 香港理工大學團隊
- **相關研究：** 分子設計、Transformer 架構、分子光電效能、Clean Energy Project Database (CEPDB) 測試集、有機太陽能電池、圖神經網路、RingFormer 框架
- **釋出期刊：** AAAI 2025, 2024.12
- **論文連結：** [RingFormer: A Ring-Enhanced Graph Transformer for Organic Solar Cell Property Prediction](https://doi.org/10.48550/arXiv.2412.09030)

### **31. [無機逆合成規劃方法 Retrieval-Retro，提高無機材料合成的效率和準確性](https://hyper.ai/news/37969)**

- **中文解讀：** [https://hyper.ai/news/37969](https://hyper.ai/news/37969)
- **科研團隊：** 韓國化學技術研究所、韓國科學技術院
- **相關研究：** 無機逆合成規劃方法 Retrieval-Retro、卷積變分自編碼器率、無機材料、掩碼前驅體補全檢索器、神經反應能檢索器、檢索技術、自注意力和交叉注意力機制
- **釋出期刊：** NeurIPS 2024, 2024.10
- **論文連結：** [Retrieval-Retro: Retrieval-based Inorganic Retrosynthesis with Expert Knowledge](https://doi.org/10.48550/arXiv.2410.21341)

### **32. [以大模型解析氫化物固態電解質傳導機制，建立可靠活化能預測模型](https://hyper.ai/news/39173)**

- **中文解讀：** [https://hyper.ai/news/39173](https://hyper.ai/news/39173)
- **科研團隊：** 日本東北大學、中國四川大學、日本芝浦工業大學
- **相關研究：** 固態電解質 (SSEs)、大型語言模型、ab initio 元動力學 (MetaD) 模擬、MetaD 模擬、系統模型體系
- **釋出期刊：** Angewandte Chemie-International Edition, 2025.04
- **論文連結：** [Unraveling the Complexity of Divalent Hydride Electrolytes in Solid-State Batteries via a Data-Driven Framework with Large Language Model](https://go.hyper.ai/isQRi)

### **33. [基於機器學習實現萬億級質譜資料搜尋，發現未知化學反應](https://hyper.ai/news/39224)**

- **中文解讀：** [https://hyper.ai/news/39224](https://hyper.ai/news/39224)
- **科研團隊：** 俄羅斯科學院等機構
- **相關研究：** 質譜分析、機器學習（ML）驅動搜尋引擎 MEDUSA Search、 PubChem 資料庫
- **釋出期刊：** Nature Communications, 2025.01
- **論文連結：** [Discovering organic reactions with a machine-learning-powered deciphering of tera-scale mass spectrometry data](https://go.hyper.ai/ak7bN)

### **34. [基於擴散模型的生成式人工智慧結構解析方法 PXRDnet，成功解析 200 種複雜模擬奈米晶體](https://hyper.ai/news/39287)**

- **中文解讀：** [https://hyper.ai/news/39287](https://hyper.ai/news/39287)
- **科研團隊：** 哥倫比亞大學、斯坦福大學
- **相關研究：** X 射線衍射、基於擴散模型的生成式人工智慧結構解析方法 PXRDnet、MP-20-PXRD 基準資料集、Materials Project 資料庫、 CDVAE 架構、PXRD 迴歸器
- **釋出期刊：** Nature Materials, 2025.04
- **論文連結：** [Ab initio structure solutions from nanocrystalline powder diffraction data via diffusion models](https://go.hyper.ai/r1K6b)

### **35. [DreaMS 模型覆蓋 2 億分子質譜圖，構建全球最大規模質譜資料集 GeMS](https://hyper.ai/news/40201)**

- **中文解讀：** [https://hyper.ai/news/40201](https://hyper.ai/news/40201)
- **科研團隊：** 捷克科學院有機化學與生物化學研究所的研究團隊
- **相關研究：** 質譜資料集 GeMS、區域性敏感雜湊（LSH）演算法、BERT 架構、自監督學習正規化、傅立葉特徵（Fourier features）預處理技術、線性探測技術
- **釋出期刊：** Nature Biotechnology, 2025.05
- **論文連結：** [Self-supervised learning of molecular representations from millions of tandem mass spectra using DreaMS](https://go.hyper.ai/uNbqL)

### **36. [等變機器學習框架，加速材料大規模電場模擬](https://hyper.ai/news/40600)**

- **中文解讀：** [https://hyper.ai/news/40600](https://hyper.ai/news/40600)
- **科研團隊：** 哈佛大學、德國博世集團在美國的子公司 Robert Bosch LLC
- **相關研究：** 機器學習框架、神經網路架構、材料振動、介電性質、鐵電滯回、偶極動力學
- **釋出期刊：** Nature Communications, 2025.04
- **論文連結：** [Unified differentiable learning of electric response](https://go.hyper.ai/18TWg)

### **37. [多源資料整合方法篩選 25 類水泥熟料替代材料，相當於減排 12 億噸溫室氣體](https://hyper.ai/news/40742)**

- **中文解讀：** [https://hyper.ai/news/40742](https://hyper.ai/news/40742)
- **科研團隊：** 美國麻省理工學院（MIT）Soroush Mahjoubi 、 Elsa A. Olivetti
- **相關研究：** 大語言模型、活性評估框架、多頭神經網路架構、多工神經網路、機器學習模型構建與反應性預測、二次材料的反應性評估與利用潛力、天然膠凝前驅體的全球發現
- **釋出期刊：** Communication Materials, 2025.05
- **論文連結：** [Data-driven material screening of secondary and natural cementitious precursors](https://go.hyper.ai/ZOAaW)

### **38. [UNIMATE 首次實現拓撲生成/效能預測等任務的統一建模](https://hyper.ai/news/41186)**

- **中文解讀：** [https://hyper.ai/news/41186](https://hyper.ai/news/41186)
- **科研團隊：** 美國弗吉尼亞理工學院、Meta AI
- **相關研究：** 超材料、3D 拓撲結構、機器學習、機械超材料基準資料集、碼本量化、TOT、UNIMATE 模型
- **釋出期刊：** ICML 2025, 2025.06
- **論文連結：** [UNIMATE: A Unified Model for Mechanical Metamaterial Generation, Property Prediction, and Condition Confirmation](https://go.hyper.ai/FoAWw)

### **39. [全原子擴散 Transformer 框架，首次實現週期性與非週期性原子系統統一生成](https://hyper.ai/news/41503)**

- **中文解讀：** [https://hyper.ai/news/41503](https://hyper.ai/news/41503)
- **科研團隊：** Meta 基礎人工智慧研究、劍橋大學、麻省理工學院
- **相關研究：** Transformer、全原子統一潛在表示、MP20 資料集、QM9 資料集、GEOM-DRUGS 資料集、QMOF 資料集
- **釋出期刊：** ICML 2025, 2025.06
- **論文連結：** [All-atom Diffusion Transformers: Unified generative modelling of molecules and materials](https://go.hyper.ai/27d7U)

### **40. [FASTSOLV 模型實現任意溫度下的小分子溶解度預測，推理速度快 50 倍](https://hyper.ai/news/43318)**

- **中文解讀：** [https://hyper.ai/news/43318](https://hyper.ai/news/43318)
- **科研團隊：** 麻省理工學院研究團隊
- **相關研究：** 小分子溶解度預測、BigSolDB 資料集、SolProp 資料集、Leeds 資料集、FASTSOLV 模型
- **釋出期刊：** Nature Communication, 2025.08
- **論文連結：** [Data-driven organic solubility prediction at the limit of aleatoric uncertainty](https://www.nature.com/articles/s41467-025-62717-7)

### **41. [基於多模態機器學習模型的新方法，無需完整晶體結構即可預測材料性質](https://hyper.ai/news/43410)**

- **中文解讀：** [https://hyper.ai/news/43410](https://hyper.ai/news/43410)
- **科研團隊：** 多倫多大學化學工程與應用化學系的研究團隊
- **相關研究：** 基於多模態機器學習模型的新方法、新材料設計、CoRE-2019 資料集、BW20K 資料集、ARABG 資料集、QMOF 資料集、hMOF 資料集、CSD 子集、自監督預訓練驅動的多模態學習框架
- **釋出期刊：** Nature Communications, 2025.07
- **論文連結：** [Connecting metal-organic framework synthesis to applications using multimodal machine learning](https://www.nature.com/articles/s41467-025-62717-7)

### **42. [AI 模型 CGformer 創新融合全域性注意力機制，助力高熵材料研發](https://hyper.ai/news/44908)**

- **中文解讀：** [https://hyper.ai/news/44908](https://hyper.ai/news/44908)
- **科研團隊：** 上海交通大學人工智慧、微結構實驗室（AIMS-Lab）李金金教授和黃富強教授團隊
- **相關研究：** 高熵材料研發、AI 材料設計模型 CGformer、鈉離子擴散能壘（Eb）基礎資料集、HE-NSEs 計算資料集、熱穩定性評估資料集
- **釋出期刊：** Matter, 2025.08
- **論文連結：** [CGformer: Transformer-enhanced crystal graph network with global attention for material property prediction](https://www.cell.com/matter/abstract/S2590-2385(25)00423-0)

### **43. [全新幾何結構約束整合方法 SCIGEN，可適配任意預訓練擴散模型](https://hyper.ai/news/44973)**

- **中文解讀：** [https://hyper.ai/news/44973](https://hyper.ai/news/44973)
- **科研團隊：** 麻省理工學院李明達教授團隊、密歇根州立大學、橡樹嶺國家實驗室
- **相關研究：** AL（阿基米德晶格，Archimedean lattices）材料綜合資料庫、擴散模型、晶體結構生成、DiffCSP 模型、全新化合物 TiPd₀.₂₂Bi₀.₈₈ 和 Ti₀.₅Pd₁.₅Sb
- **釋出期刊：** Nature Materials, 2025.09
- **論文連結：** [Structural constraint integration in a generative model for the discovery of quantum materials](https://www.nature.com/articles/s41563-025-02355-y)

### **44. [物理先驗生成式人工智慧模型 SpectroGen 僅需單一光譜模態輸入，達到實驗相關性高達 99% 的跨模態光譜生成](https://hyper.ai/news/45456)**

- **中文解讀：** [https://hyper.ai/news/45456](https://hyper.ai/news/45456)
- **科研團隊：** 麻省理工的研究團隊
- **相關研究：** 物理先驗生成式人工智慧模型 SpectroGen、RRUFF 資料庫、變分自動編碼器（VAE）框架、光譜分佈、物理先驗模型
- **釋出期刊：** Matter, 2025.10
- **論文連結：** [SpectroGen: A physically informed generative artificial intelligence for accelerated cross-modality spectroscopic materials characterization](https://www.cell.com/matter/abstract/S2590-2385(25)00477-1)

### **45. [MOF-ChemUnity 重構 MOF 全景知識，推動材料發現進入「可解釋 AI」時代](https://hyper.ai/news/46723)**

- **中文解讀：** [https://hyper.ai/news/46723](https://hyper.ai/news/46723)
- **科研團隊：** 加拿大多倫多大學、加拿大國家研究委員會清潔能源創新研究中心的研究團隊
- **相關研究：** 材料科學、MOF-ChemUnity、CoRE MOF 2019 資料庫、QMOF 資料庫、LLM、圖增強檢索增強生成、MOF 推薦與嵌入空間
- **釋出期刊：** ACS Publications, 2025.11
- **論文連結：** [MOF-ChemUnity: Literature-Informed Large Language Models for Metal–Organic Framework Research](https://pubs.acs.org/doi/10.1021/jacs.5c11789)

### **46. [輕量化通用勢模型 PET-MAD 釋出，極少樣本即達專用模型級精度](https://hyper.ai/news/47637)**

- **中文解讀：** [https://hyper.ai/news/47637](https://hyper.ai/news/47637)
- **科研團隊：** 瑞士洛桑理工學院（EPFL）
- **相關研究：** 第一性原理計算、機器學習原子間勢、PET-MAD 模型、Point Edge Transformer 結構
- **釋出期刊：** Nature Communications
- **論文連結：** [PET-MAD as a lightweight universal interatomic potential for advanced materials modeling](https://www.nature.com/articles/s41467-025-65662-7)

### **47. [AI 系統 ChemOntology 釋出，融合化學知識使反應路徑搜尋成本減半](https://hyper.ai/news/48069)**

- **中文解讀：** [https://hyper.ai/news/48069](https://hyper.ai/news/48069)
- **科研團隊：** 日本北海道大學研究團隊
- **相關研究：** 勢能面（PES）、內稟反應座標（IRC）、人工力誘導反應（AFIR）、化學本體論（ChemOntology）、Heck 反應
- **釋出期刊：** ACS Catalysis
- **論文連結：** [ChemOntology: A Reusable Explicit Chemical Ontology-Based Method to Expedite Reaction Path Searches](https://pubs.acs.org/doi/10.1021/acscatal.5c06298)

### **48. [普林斯頓等聯合提出大模型預測 MOF 自由能方法，高精度評估合成可行性](https://hyper.ai/news/48685)**

- **中文解讀：** [https://hyper.ai/news/48685](https://hyper.ai/news/48685)
- **科研團隊：** 普林斯頓大學和科羅拉多礦業學院聯合研究團隊
- **相關研究：** 金屬有機框架（MOFs）、自由能預測、大語言模型（LLM）、熱力學評估
- **釋出期刊：** JACS (ACS Publications)
- **論文連結：** [Highly Accurate and Fast Prediction of MOF Free Energy via Machine Learning](https://pubs.acs.org/doi/10.1021/jacs.5c13960)

### **49. [耶魯大學團隊提出 MOSAIC 模型，大模型協作生成高可靠化學合成方案](https://hyper.ai/news/48806)**

- **中文解讀：** [https://hyper.ai/news/48806](https://hyper.ai/news/48806)
- **科研團隊：** 耶魯大學研究團隊
- **相關研究：** 現代合成化學、大語言模型 (LLM)、MOSAIC 模型、知識結構化、實驗流程生成
- **釋出期刊：** Nature
- **論文連結：** [Collective intelligence for AI-assisted chemical synthesiss](https://www.nature.com/articles/s41586-026-10131-4)

### **50. [MIT 等團隊提出擴散模型 DiffSyn，實現材料合成路徑的生成式規劃](https://hyper.ai/news/49252)**

- **中文解讀：** [https://hyper.ai/news/49252](https://hyper.ai/news/49252)
- **科研團隊：** 麻省理工學院、德國慕尼黑工業大學和西班牙瓦倫西亞理工大學聯合研究團隊
- **相關研究：** 材料合成規劃、生成式擴散模型 DiffSyn、沸石材料（zeolites）、結構-合成關係
- **釋出期刊：** Nature Computational Science
- **論文連結：** [DiffSyn: a generative diffusion approach to materials synthesis planning](https://www.nature.com/articles/s43588-025-00949-9)

### **51. [密歇根大學與孚能科技聯合提出「發現學習」方法，大幅縮短電池壽命預測週期](https://hyper.ai/news/49527)**

- **中文解讀：** [https://hyper.ai/news/49527](https://hyper.ai/news/49527)
- **科研團隊：** 密歇根大學安娜堡分校宋子由教授與孚能科技姜蔚然團隊
- **相關研究：** 電池迴圈壽命預測、發現學習（Discovery Learning, DL）、科學機器學習、鋰離子軟包電池資料集
- **釋出期刊：** Nature
- **論文連結：** [Discovery Learning predicts battery cycle life from minimal experiments](https://www.nature.com/articles/s41586-025-09951-7)

### **52. [康奈爾大學提出 SCAN 框架，高精度預測並解釋電池電解質效能](https://hyper.ai/news/49537)**

- **中文解讀：** [https://hyper.ai/news/49537](https://hyper.ai/news/49537)
- **科研團隊：** 康奈爾大學研究團隊
- **相關研究：** 鹽-溶劑化學、非水電解質（NAE）、SCAN 框架、多特徵網路（MFNet）、動態路由策略
- **釋出期刊：** Nature Computational Science
- **論文連結：** [A dynamic routing-guided interpretable framework for salt–solvent chemistry](https://www.nature.com/articles/s43588-026-00955-5)

### **53. [MIT 提出基礎大模型 DefectNet，實現材料內部缺陷無損表徵與定量](https://hyper.ai/news/50122)**

- **中文解讀：** [https://hyper.ai/news/50122](https://hyper.ai/news/50122)
- **科研團隊：** 麻省理工學院（MIT）研究團隊
- **相關研究：** 材料科學、缺陷工程、無損表徵、振動光譜與聲子態密度（PDoS）、DefectNet、機器學習原子間勢（MLIPs）
- **釋出期刊：** arXiv
- **論文連結：** [A foundation model for non-destructive defect identification from vibrational spectra](https://arxiv.org/abs/2506.00725)

### **54. [康奈爾大學提出多智慧體平臺 EMSeek，實現電子顯微影象全流程自動分析](https://hyper.ai/news/50298)**

- **中文解讀：** [https://hyper.ai/news/50298](https://hyper.ai/news/50298)
- **科研團隊：** 康奈爾大學研究團隊
- **相關研究：** 電子顯微技術（EM）、多智慧體平臺、EMSeek、材料分析、結構建模與性質推斷
- **釋出期刊：** Science Advances
- **論文連結：** [Bridging electron microscopy and materials analysis with an autonomous agentic platform](https://www.science.org/doi/10.1126/sciadv.aed0583)

## **AI+ 動植物科學**

### **1. [SBeA 基於少樣本學習框架進行動物社會行為分析](https://hyper.ai/news/29353)**

- **中文解讀：** [https://hyper.ai/news/29353](https://hyper.ai/news/29353)
- **科研團隊：** 中科院深圳先進院蔚鵬飛研究團隊
- **相關研究：** PAIR-R24M 資料集、雙向遷移學習、非監督式學習、人工神經網路、身份識別模型。在多動物身份識別方面的準確率超過 90%
- **釋出期刊：** Nature Machine Intelligence, 2024.01
- **論文連結：** [Multi-animal 3D social pose estimation, identification and behaviour embedding with a few-shot learning framework](https://www.nature.com/articles/s42256-023-00776-5)

### **2. [基於孿生網路的深度學習方法，自動捕捉胚胎髮育過程](https://hyper.ai/news/28419)**

- **中文解讀：** [https://hyper.ai/news/28787](https://hyper.ai/news/28419)
- **科研團隊：** 系統生物學家 Patrick Müller 及康斯坦茨大學研究團隊
- **相關研究：** ImageNet 資料集、孿生網路、深度學習、遷移學習、三聯體損失訓練、迭代訓練、分任務訓練。在沒有人為干預的情況下識別胚胎髮育特徵階段點
- **釋出期刊：** Nature Methods, 2023.11
- **論文連結：** [Uncovering developmental time and tempo using deep learning](https://www.nature.com/articles/s41592-023-02083-8)

### **3. [利用無人機採集植物表型資料的系統化流程，預測最佳採收日期](https://hyper.ai/news/28303)**

- **中文解讀：** [https://hyper.ai/news/28303](https://hyper.ai/news/28303)
- **科研團隊：** 東京大學和千葉大學的研究團隊
- **相關研究：** 利潤預測模型、分割模型、互動式標註、LabelMe、非線性迴歸模型、BiSeNet 模型
- **釋出期刊：** Plant Phenomics, 2023.09
- **論文連結：** [Drone-Based Harvest Data Prediction Can Reduce On-Farm Food Loss and Improve Farmer Income](https://spj.science.org/doi/10.34133/plantphenomics.0086#body-ref-B4)

### **4. [AI 相機警報系統準確區分老虎和其他物種](https://hyper.ai/news/27954)**

- **中文解讀：** [https://hyper.ai/news/27954](https://hyper.ai/news/27954)
- **科研團隊：** 克萊姆森大學的研究團隊
- **相關研究：** TrailGuard AI。1 分鐘內將相關影象傳到保護區管理員的終端裝置上
- **釋出期刊：** BioScience, 2023.09
- **論文連結：** [Accurate proteome-wide missense variant effect prediction with AlphaMissense](https://www.science.org/doi/10.1126/science.adg7492) (Note: Original link provided seems to mismatch the title, but kept as is based on the source text).

### **5. [利用拉布拉多獵犬資料，對比 3 種模型，發現了影響嗅覺檢測犬表現的行為特性](https://hyper.ai/news/25472)**

- **中文解讀：** [https://hyper.ai/news/25472](https://hyper.ai/news/25472)
- **科研團隊：** 美國全國兒童醫院阿比蓋爾·韋克斯納研究所、洛基維斯塔大學的研究團隊
- **相關研究：** AT 測試、Env 測試、隨機森林、支援向量機、邏輯迴歸、PCA、RFECV
- **釋出期刊：** Scientific Reports, 2023.08
- **論文連結：** [Machine learning prediction and classification of behavioral selection in a canine olfactory detection program](https://www.nature.com/articles/s41598-023-39112-7)

### **6. [基於人臉識別 ArcFace Classification Head 的多物種影象識別模型](https://hyper.ai/news/25164)**

- **中文解讀：** [https://hyper.ai/news/25164](https://hyper.ai/news/25164)
- **科研團隊：** 夏威夷大學的研究團隊
- **相關研究：** [鯨類資料集](https://github.com/knshnb/kaggle-happywhale-1st-place)、影象修剪模型、影象識別模型、YOLOv5、Detic。達到了 0.869 的平均準確率
- **釋出期刊：** Methods in Ecology and Evolution, 2023.07
- **論文連結：** [A deep learning approach to photo–identification demonstrates high performance on two dozen cetacean species](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14167)

### **7. [利用 Python API 與計算機視覺 API，監測日本的櫻花開放情況](https://hyper.ai/news/24512)**

- **中文解讀：** [https://hyper.ai/news/24512](https://hyper.ai/news/24512)
- **科研團隊：** 澳大利亞莫納什大學的研究團隊
- **相關研究：** 社交網站 (SNS) 資料、Google Cloud Vision AI、機器學習模型
- **釋出期刊：** Flora, 2023.07
- **論文連結：** [The spatiotemporal signature of cherry blossom flowering across Japan revealed via analysis of social network site images](https://www.sciencedirect.com/science/article/abs/pii/S0367253023001019)

### **8. [基於機器學習的群體遺傳方法，揭示葡萄風味的形成機制](https://hyper.ai/news/24442)**

- **中文解讀：** [https://hyper.ai/news/24442](https://hyper.ai/news/24442)
- **科研團隊：** 中國農業科學院深圳農業基因組的研究團隊
- **相關研究：** [葡萄基因組序列](https://github.com/zhouyflab/Grapevine_Adaptive_Maladaptive_Introgression)、機器學習
- **釋出期刊：** Proceedings of the National Academy of Sciences, 2023.06
- **論文連結：** [Adaptive and maladaptive introgression in grapevine domestication](https://www.pnas.org/doi/abs/10.1073/pnas.2222041120)

### **9. [綜述：藉助 AI 更高效地開啟生物資訊學研究](https://hyper.ai/news/33931)**

- **中文解讀：** [https://hyper.ai/news/33931](https://hyper.ai/news/33931)
- **主要內容：** AI 在同源搜尋、多重比對及系統發育構建、基因組序列分析、基因發現等生物學領域中，都有豐富的應用案例。作為一名生物學研究人員，能熟練地將機器學習工具整合到資料分析中，必將加速科學發現、提升科研效率。

### **10. [BirdFlow 模型準確預測候鳥的飛行路徑](https://hyper.ai/news/34781)**

- **中文解讀：** [https://hyper.ai/news/33942](https://hyper.ai/news/33942)
- **科研團隊：** 緬因大學（UMaine）、德克薩斯大學奧斯汀分校（UT Austin）、佐治亞大學（UGA）、馬里蘭大學（UMD）、Google、OpenAI 與哈佛大學
- **相關研究：** 球諧狄拉克分佈、LocDiff 整合框架、MP16 資料集、Im2GPS3k 資料集、YFCC26k 資料集、GWS15k 資料集、條件式 Siren-UNet（CS-UNet）架構、高效計算策略、SHDD 編碼方案、影象地理定位
- **釋出期刊：** Methods in Ecology and Evolution, 2023.01
- **論文連結：** [BirdFlow: Learning seasonal bird movements from eBird data](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14052)

### **11. [新的鯨魚生物聲學模型，可識別 8 種鯨類](https://hyper.ai/news/34781)**

- **中文解讀：** [https://hyper.ai/news/34781](https://hyper.ai/news/34781)
- **科研團隊：** 緬因大學（UMaine）、德克薩斯大學奧斯汀分校（UT Austin）、佐治亞大學（UGA）、馬里蘭大學（UMD）、Google、OpenAI 與哈佛大學
- **相關研究：** 球諧狄拉克分佈、LocDiff 整合框架、MP16 資料集、Im2GPS3k 資料集、YFCC26k 資料集、GWS15k 資料集、條件式 Siren-UNet（CS-UNet）架構、高效計算策略、SHDD 編碼方案、影象地理定位
- **釋出期刊：** Google Research, 2024.9
- **論文連結：** [Whistles, songs, boings, and biotwangs: Recognizing whale vocalizations with AI](https://research.google/blog/whistles-songs-boings-and-biotwangs-recognizing-whale-vocalizations-with-ai)

### **12. [用機器學習分離抹香鯨發音字母表，高度類似人類語言，資訊承載能力更強](https://hyper.ai/news/33433)**

- **中文解讀：** [https://hyper.ai/news/33433](https://hyper.ai/news/33433)
- **科研團隊：** 麻省理工學院 Pratyusha Sharma 以及 CETI 的研究團隊
- **相關研究：** DSWP 資料集、機器學習、抹香鯨聲音具有結構性
- **釋出期刊：** Nature Communications, 2024.05
- **論文連結：** [Contextual and combinatorial structure in sperm whale vocalisations](https://www.nature.com/articles/s41467-024-47221-8)

### **13. [PlantLncBoost 模型，跨物種 lncRNA 預測準確率最高達 96%](https://hyper.ai/news/40667)**

- **中文解讀：** [https://hyper.ai/news/40667](https://hyper.ai/news/40667)
- **科研團隊：** 山東理工大學、北京林業大學、廣東省農業科學院、巴西聖保羅大學、英國羅莎琳德富蘭克林醫科大學、瑞典于默奧大學
- **相關研究：** GreeNC 資料庫、PlantLncBoost 演算法、隨機森林重要性（RFI）策略、遞迴特徵消除（RFE）演算法
- **釋出期刊：** New Phytologist, 2024.05
- **論文連結：** [PlantLncBoost: key features for plant lncRNA identification and significant improvement in accuracy and generalization](https://go.hyper.ai/F7pkc)

### **14. [Perch 2.0 覆蓋近 1.5 萬個物種，重新整理生物聲學分類檢測 SOTA](https://hyper.ai/news/42807)**

- **中文解讀：** [https://hyper.ai/news/42807](https://hyper.ai/news/42807)
- **科研團隊：** Google DeepMind、Google Research
- **相關研究：** 生物聲學、Perch 2.0、Xeno-Canto 資料集、iNaturalist 資料集、Tierstimmenarchiv 資料集、FSD50K 資料集、EfficientNet-B3  架構
- **釋出期刊：** arXiv, 2025.08
- **論文連結：** [Perch 2.0: The Bittern Lesson for Bioacoustics](https://arxiv.org/abs/2508.04665)

## **AI+ 農林牧漁**

### **1. [利用卷積神經網路，對水稻產量進行迅速、準確的統計](https://hyper.ai/news/26100)**

- **中文解讀：** [https://hyper.ai/news/26100](https://hyper.ai/news/26100)
- **科研團隊：** 京都大學的研究團隊
- **相關研究：** 卷積神經網路。CNN 模型可以對不同拍攝角度、時間和時期下得到的農田照片準確分析，得到穩定的產量預測結果
- **釋出期刊：** Plant Phenomics, 2023.07
- **論文連結：** [Deep Learning Enables Instant and Versatile Estimation of Rice Yield Using Ground-Based RGB Images](https://spj.science.org/doi/10.34133/plantphenomics.0073)

### **2. [透過 YOLOv5 演算法，設計監測母豬姿勢與豬仔出生的模型](https://hyper.ai/news/25131)**

- **中文解讀：** [https://hyper.ai/news/25131](https://hyper.ai/news/25131)
- **科研團隊：** 南京農業大學研究團隊
- **相關研究：** YOLOv5、檢測母豬姿勢和仔豬的模型。能夠在產仔開始前 5 小時發出警報，總體平均準確率為 92.9%
- **釋出期刊：** Sensors, 2023.01
- **論文連結：** [Sow Farrowing Early Warning and Supervision for Embedded Board Implementations](https://www.mdpi.com/1424-8220/23/2/727)

### **3. [結合實驗室觀測與機器學習，證明番茄與菸草植物在脅迫環境下發出的超聲波能在空氣中傳播](https://hyper.ai/news/24547)**

- **中文解讀：** [https://hyper.ai/news/24547](https://hyper.ai/news/24547)
- **科研團隊：** 以色列特拉維夫大學的研究團隊
- **相關研究：** 機器學習模型、SVM、Basic、MFCC、Scattering network、神經網路模型、留一法交叉驗證。識別準確率高達 99.7%、4-6 天時番茄尖叫聲最大
- **釋出期刊：** Cell, 2023.03
- **論文連結：** [Sounds emitted by plants under stress are airborne and informative](https://doi.org/10.1016/j.cell.2023.03.009)

### **4. [無人機+ AI 影象分析，檢測林業害蟲](https://hyper.ai/news/23807)**

- **中文解讀：** [https://hyper.ai/news/23807](https://hyper.ai/news/23807)
- **科研團隊：** 里斯本大學研究團隊
- **相關研究：** FRCNN、YOLO 模型。YOLO 模型的檢測效能高於 FRCNN、無人機和 AI 模型相結合能夠有效地對松異舟蛾巢穴進行早期檢測
- **釋出期刊：** NeoBiota, 2023.05
- **論文連結：** [Testing early detection of pine processionary moth Thaumetopoea pityocampa nests using UAV-based methods](https://neobiota.pensoft.net/article/95692/)

### **5. [計算機視覺+深度學習開發奶牛跛行檢測系統](https://hyper.ai/news/33957)**

- **中文解讀：** [https://hyper.ai/news/33957](https://hyper.ai/news/33957)
- **科研團隊：** 紐卡斯爾大學及費拉科學有限公司的研究團隊
- **相關研究：** 計算機視覺、深度學習、Mask-RCNN 演算法、SORT 演算法、CatBoost 演算法。準確度可達 94%-100%
- **釋出期刊：** Nature, 2023.03
- **論文連結：** [Deep learning pose estimation for multi-cattle lameness detection](https://www.nature.com/articles/s41598-023-31297-1)

## **AI+ 氣象學**

### **1. [綜述：資料驅動的機器學習天氣預報模型](https://hyper.ai/news/28124)**

- **中文解讀：** [https://hyper.ai/news/28124](https://hyper.ai/news/28124)
- **主要內容：** 數值天氣預報是天氣預報的主流方法。它透過數值積分，對地球系統的狀態進行逐網格的求解，是一個演繹推理的過程。 2022 年以來，天氣預報領域的機器學習模型取得了一系列突破，部分成果可以與歐洲中期天氣預報中心的高精度預測匹敵。

### **2. [綜述：從雹暴中心收集資料，利用大模型預測極端天氣](https://hyper.ai/news/25874)**

- **中文解讀：** [https://hyper.ai/news/25874](https://hyper.ai/news/25874)
- **主要內容：** 2021 年，達摩院與國家氣象中心聯合研發了 AI 演算法用於天氣預測，併成功預測了多次強對流天氣。同年 9 月，Deepmind 在《Nature》上發表文章，利用深度生成模型進行降雨量的實時預報。
In early 2023, DeepMind officially launched GraphCast, capable of forecasting the global weather for the next 10 days at a 0.25° resolution within a minute. In April, Nanjing University of Information Science and Technology collaborated with Shanghai AI Laboratory to develop the "FengWu" meteorological large model, further reducing errors compared to GraphCast.
Subsequently, Huawei launched the "Pangu-Weather" large model. By introducing a 3D neural network, Pangu's prediction accuracy surpassed the most accurate NWP forecasting systems for the first time. Recently, Tsinghua University and Fudan University consecutively released the "NowCastNet" and "FuXi" models.

### **3. [利用全球風暴解析模擬與機器學習，建立新演算法，準確預測極端降水](https://hyper.ai/news/24995)**

- **中文解讀：** [https://hyper.ai/news/24995](https://hyper.ai/news/24995)
- **科研團隊：** 哥倫比亞大學 LEAP 實驗室
- **相關研究：** 機器學習、Baseline-NN、Org-NN、神經網路
- **釋出期刊：** PNAS, 2023.03
- **論文連結：** [Implicit learning of convective organization explains precipitation stochasticity](https://www.pnas.org/doi/10.1073/pnas.2216158120)

### **4. [基於隨機森林的機器學習模型 CSU-MLP，預測中期惡劣天氣](https://hyper.ai/news/33966)**

- **中文解讀：** [https://hyper.ai/news/33966](https://hyper.ai/news/33966)
- **科研團隊：** 美國科羅拉多州立大學和國家海洋和大氣管理局的研究團隊
- **相關研究：** GEFS/R 資料集、機器學習、插值處理、RF。可對中期（4-8 天）範圍內惡劣天氣進行準確預報
- **釋出期刊：** Weather and Forecasting, 2022.08
- **論文連結：** [A new paradigm for medium-range severe weather forecasts: probabilistic random forest-based predictions](https://arxiv.org/abs/2208.02383)

### **5. [端到端資料驅動天氣預報系統 Aardvark Weather，預測速度超傳統方法數十倍](https://hyper.ai/news/38605)**

- **中文解讀：** [https://hyper.ai/news/38605](https://hyper.ai/news/38605)
- **科研團隊：** 劍橋大學、圖靈研究所、多倫多大學、微軟科學智慧中心、歐洲中期天氣預報中心、英國南極調查局、谷歌 DeepMind
- **相關研究：** 天氣預報系統、HadISD 資料集、微波-紅外協同觀測網路、ATOVS 系統、ASCAT 散射計資料、ERA5 再分析資料集、輕量級卷積網路
- **釋出期刊：** Nature, 2025.03
- **論文連結：** [End-to-end data-driven weather prediction](https://www.nature.com/articles/s41586-025-08897-0)

### **6. [機器學習天氣預報系統 FCN3，支援單卡極速推理](https://hyper.ai/news/42456)**

- **中文解讀：** [https://hyper.ai/news/42456](https://hyper.ai/news/42456)
- **科研團隊：** 英偉達、美國勞倫斯伯克利國家實驗室、加州大學伯克利分校、美國加州理工學院
- **相關研究：** 數值天氣預報、FourCastNet 3、機器學習、ERA5 資料集、球面神經運算元設計、混合並行策略
- **釋出期刊：** arXiv, 2025.07
- **論文連結：** [FourCastNet 3: A geometric approach to probabilistic machine-learning weather forecasting at scale](https://arxiv.org/pdf/2507.12144)

### **7. [印度季風預測模型基於 36 個氣象站點，實現城區尺度精細預報](https://hyper.ai/news/44271)**

- **中文解讀：** [https://hyper.ai/news/44271](https://hyper.ai/news/44271)
- **科研團隊：** 印度理工學院孟買分校、馬里蘭大學研究團隊
- **相關研究：** 卷積神經網路（CNN）、遷移學習（CNN-TL）、天氣預測、事件同步（Event Synchronization）方法、降雨預測
- **釋出期刊：** SSRN, 2025.08
- **論文連結：** [Hyperlocal Extreme Rainfall Forecasts in Mumbai: Convolutional Neural Network Transfer Learning-Based Downscaling Approach](https://go.hyper.ai/j05Vt)

### **8. [ACE2 僅需 2 分鐘即可完成一次 4 個月季節預報](https://hyper.ai/news/44473)**

- **中文解讀：** [https://hyper.ai/news/44473](https://hyper.ai/news/44473)
- **科研團隊：** 英國埃克塞特哈德利中心氣象局、埃克塞特大學、美國艾倫人工智慧研究所（Ai2）
- **相關研究：** 季節預報、ERA5 再分析資料集、全球降水氣候學計劃（GPCP）v2.3 資料集、ACE2 機器學習大氣模型
- **釋出期刊：** npj Climate and Atmospheric Science, 2025.08
- **論文連結：** [Skilful global seasonal predictions from a machine learning weather model trained on reanalysis data](https://go.hyper.ai/YyRfT)

### **9. [增量天氣預報模型 VA-MoE 釋出，引數精簡 75% 仍達 SOTA 效能](https://hyper.ai/news/45152)**

- **中文解讀：** [https://hyper.ai/news/45152](https://hyper.ai/news/45152)
- **科研團隊：** 香港科技大學、浙江大學等機構的研究團隊
- **相關研究：** 增量天氣預報、VA-MoE、ERA5 資料集、兩階段訓練正規化、Transformer、多工聯合損失機制、氣象預報
- **釋出期刊：** ICCV25, 2025.07
- **論文連結：** [VA-MoE: Variables-Adaptive Mixture of Experts for Incremental Weather Forecasting](https://arxiv.org/abs/2412.02503)

### **10. [增強型闡明滾動擴散模型 ERDM 釋出，解長期預報難題，中遠期預報持續領先 EDM 基準](https://hyper.ai/news/45367)**

- **中文解讀：** [https://hyper.ai/news/45367](https://hyper.ai/news/45367)
- **科研團隊：** 英偉達
- **相關研究：** 中期天氣預報、漸進式噪聲排程機制、闡明擴散模型（EDM）、增強型闡明滾動擴散模型（ERDM）、Navier-Stokes 流體動力學基準資料集、ERA5 再分析資料集、噪聲排程機制、機率流常微分方程（ODE）、噪器網路（denoiser network）
- **釋出期刊：** NeurIPS 2025, 2025.06
- **論文連結：** [Elucidated Rolling Diffusion Models for Probabilistic Weather Forecasting](https://doi.org/10.48550/arXiv.2506.20024)

### **11. [新型潛在擴散模型 OmniCast 釋出，解決自迴歸天氣預報模型誤差累計問題](https://hyper.ai/news/45701)**

- **中文解讀：** [https://hyper.ai/news/45701](https://hyper.ai/news/45701)
- **科研團隊：** 加州大學洛杉磯分校的團隊、美國阿貢國家實驗室
- **相關研究：** 新型潛在擴散模型 OmniCast、高精度機率性 S2S 天氣預報、變分自編碼器（VAE）、Transformer 模型、跨時空的聯合取樣方式、ERA5 基礎資料集、WeatherBench2（WB2）測試集、ChaosBench 測試集、UNet 架構
- **釋出期刊：** NeurIPS 2025, 2025.10
- **論文連結：** [OmniCast: A Masked Latent Diffusion Model for Weather Forecasting Across Time Scales](https://go.hyper.ai/YANIu)

### **12. [英偉達提出長距離蒸餾新方法，突破 AI 長期天氣預報瓶頸](https://hyper.ai/news/48471)**

- **中文解讀：** [https://hyper.ai/news/48471](https://hyper.ai/news/48471)
- **科研團隊：** 英偉達研究院、華盛頓大學
- **相關研究：** AI 天氣預報模型、自迴歸架構、次季節至季節（S2S）預報、長距離蒸餾（Long-Range Distillation）
- **釋出期刊：** arXiv
- **論文連結：** [Long-Range Distillation: Distilling 10,000 Years of Simulated Climate into Long Timestep AI Weather Models](https://arxiv.org/abs/2512.22814)

### **13. [聯合團隊提出圖神經網路模型 SeaCast，超快速度實現區域海洋預報](https://hyper.ai/news/49553)**

- **中文解讀：** [https://hyper.ai/news/49553](https://hyper.ai/news/49553)
- **科研團隊：** 芬蘭赫爾辛基大學、地中海氣候變化研究中心（CMCC）與義大利薩倫託大學聯合研究團隊
- **相關研究：** 區域海洋預報、圖神經網路（GNN）、SeaCast 模型、地中海預報系統（MedFS）、大氣強迫場
- **釋出期刊：** Scientific Reports
- **論文連結：** [Accurate Mediterranean Sea forecasting via graph-based deep learning](https://www.nature.com/articles/s41598-025-31177-w)

## **AI+ 天文學**

### **1. [PRIMO 演算法學習黑洞周圍的光線傳播規律，重建出更清晰的黑洞影象](https://hyper.ai/news/23698)**

- **中文解讀：** [https://hyper.ai/news/23698](https://hyper.ai/news/23698)
- **科研團隊：** 普林斯頓高等研究院研究團隊
- **相關研究：** PRIMO 演算法、PCA、GRMHD。PRIMO 重建黑洞影象
- **釋出期刊：** The Astrophysical Journal Letters, 2023.04
- **論文連結：** [The Image of the M87 Black Hole Reconstructed with PRIMO](https://iopscience.iop.org/article/10.3847/2041-8213/acc32d/pdf)

### **2. [利用模擬資料訓練計算機視覺演算法，對天文影象進行銳化「還原」](https://hyper.ai/news/33975)**

- **中文解讀：** [https://hyper.ai/news/33975](https://hyper.ai/news/33975)
- **科研團隊：** 清華大學及美國西北大學研究團隊
- **相關研究：** [Galsim](https://github.com/GalSim-developers/GalSim)、[COSMOS](https://doi.org/10.5281/zenodo.3242143)、計算機視覺演算法、CNN、Richardson-Lucy 演算法、unrolled-ADMM 神經網路
- **釋出期刊：** 皇家天文學會月刊，2023.06
- **論文連結：** [Galaxy image deconvolution for weak gravitational lensing with unrolled plug-and-play ADMM](https://www.nature.com/articles/s41421-023-00543-1)

### **3. [利用無監督機器學習演算法 Astronomaly ，找到了之前為人忽視的異常現象](https://hyper.ai/news/26316)**

- **中文解讀：** [https://hyper.ai/news/26316](https://hyper.ai/news/26316)
- **科研團隊：** 西開普大學的研究者
- **相關研究：** CNN、無監督機器學習、Astronomaly、PCA、孤立森林、LOF 演算法、iForest 演算法、NS 演算法、DR 演算法。Astronomaly 從異常評分最高的 2,000 張影象中找到了 1,635 處異常
- **釋出期刊：** arXiv, 2023.09
- **論文連結：** [Astronomaly at Scale: Searching for Anomalies Amongst 4 Million Galaxies](https://arxiv.org/abs/2309.08660)

### **4. [基於機器學習的 CME 識別與引數獲取方法](https://hyper.ai/news/31870)**

- **中文解讀：** [https://hyper.ai/news/31870](https://hyper.ai/news/31870)
- **科研團隊：** 中國科學院國家空間科學中心太陽活動與空間天氣重點實驗室的研究團隊
- **相關研究：** 機器學習、神經網路、Otsu 演算法、軌跡匹配演算法、自動識別、引數獲取、CACTus 、 CORIMP 、 SEEDS。可識別日冕物質拋射
- **釋出期刊：** THE ASTROPHYSICAL JOURNAL, 2024.04
- **論文連結：** [An Algorithm for the Determination of Coronal Mass Ejection Kinematic Parameters Based on Machine Learning](https://iopscience.iop.org/article/10.3847/1538-4365/ad2dea)

### **5. [深度學習發現 107 例中性碳吸收線](https://hyper.ai/news/32210)**

- **中文解讀：** [https://hyper.ai/news/32210](https://hyper.ai/news/32210)
- **科研團隊：** 中國科學院上海天文臺研究員葛健帶領的國際團隊
- **相關研究：** 深度學習方法、SDSS DR12、卷積神經網路模型。發現了 107 例宇宙早期中性碳吸收線，探測精度達 99.8%
- **釋出期刊：** MNRAS, 2024.05
- **論文連結：** [Detecting rare neutral atomic-carbon absorbers with a deep neural network](https://doi.org/10.1093/mnras/stae799)

### **6. [StarFusion 模型實現高空間解析度影象的預測](https://hyper.ai/news/34254)**

- **中文解讀：** [https://hyper.ai/news/34254](https://hyper.ai/news/34254)
- **科研團隊：** 北京師範大學地表過程與資源生態國家重點實驗室陳晉團隊
- **相關研究：** 深度學習方法、遙感影像、高空間解析度影象的預測、提出了雙流時空解耦融合架構模型 StarFusion、Gaofen-1 資料集、Sentinel-2 衛星資料集、SRGAN-STF 模型、線性迴歸模型、多變數回歸關係模型
- **釋出期刊：** Journal of Remote Sensing, 2024.07
- **論文連結：** [A Hybrid Spatiotemporal Fusion Method for High Spatial Resolution Imagery: Fusion of Gaofen-1 and Sentinel-2 over Agricultural Landscapes](https://spj.science.org/doi/10.34133/remotesensing.0159)

### **7. [基於 SD3 開發衛星影象生成方法，構建當前最大規模遙感資料集 EcoMapper](https://hyper.ai/news/41041)**

- **中文解讀：** [https://hyper.ai/news/41041](https://hyper.ai/news/41041)
- **科研團隊：** 德國慕尼黑工業大學、瑞士蘇黎世大學
- **相關研究：** 遙感資料集 EcoMapper、Stable Diffusion 3、DiffusionSat、多條件影象生成、衛星影象生成
- **釋出期刊：** ICML 2025, 2024.06
- **論文連結：** [EcoMapper: Generative Modeling for Climate-Aware Satellite Imagery](https://go.hyper.ai/VFRWu)

### **8. [地理空間人工智慧 Earth AI 聚焦 3 大核心資料，地理空間推理能力提升 64%](https://hyper.ai/news/45528)**

- **中文解讀：** [https://hyper.ai/news/45528](https://hyper.ai/news/45528)
- **科研團隊：** Google Research、Google X 、 Google Cloud 等團隊
- **相關研究：** 地理空間人工智慧、RS-Landmarks 資料集、RS-WebLI 資料集、RS-Global 資料集、Earth AI 、基礎模型（FMs）、大語言模型（LLM）、遙感基礎模型、空間對齊+表徵整合、地理空間推理
- **釋出期刊：** arXiv, 2024.10
- **論文連結：** [Earth AI: Unlocking Geospatial Insights with Foundation Models and Cross-Modal Reasoning](https://doi.org/10.48550/arXiv.2510.18318)

### **9. [首個天文多模態基礎模型 AION-1 誕生，基於 2 億天文目標預訓練](https://hyper.ai/news/46802)**

- **中文解讀：** [https://hyper.ai/news/46802](https://hyper.ai/news/46802)
- **科研團隊：** 加州大學伯克利分校、劍橋大學、牛津大學等全球十餘所科研機構的團隊
- **相關研究：** AION-1、多模態宇宙資料集、Tokenization 方案、Transformer 編碼器-解碼器結構、ResNet 結構
- **釋出期刊：** NeurIPS 2025, 2025.10
- **論文連結：** [AION-1: Omnimodal Foundation Model for Astronomical Sciences](ttps://openreview.net/forum?id=6gJ2ZykQ5W)

### **10. [全新資料驅動的流程，可利用 CNN 從 81 萬類星體中精準識別 7 個罕見透鏡樣本](https://hyper.ai/news/47240)**

- **中文解讀：** [https://hyper.ai/news/47240](https://hyper.ai/news/47240)
- **科研團隊：** 斯坦福大學、 SLAC 國家加速器實驗室、北京大學、義大利國家天體物理研究院布雷拉天文臺、倫敦大學學院、加州大學伯克利分校等
- **相關研究：** 卷積神經網路（CNN）、DESI 資料集、強引力透鏡、類星體、黑洞研究、星系的共演化、FastSpec 目錄
- **釋出期刊：** arXiv, 2024.10
- **論文連結：** [Quasars acting as Strong Lenses Found in DESI DR1](https://arxiv.org/abs/2511.02009)

### **11. [ESA 團隊提出半監督方法 AnomalyMatch，從近億哈勃資料中高效篩查稀有天體](https://hyper.ai/news/49138)**

- **中文解讀：** [https://hyper.ai/news/49138](https://hyper.ai/news/49138)
- **科研團隊：** 歐洲航天局（ESA）下屬歐洲空間天文中心（ESAC）研究團隊
- **相關研究：** 天體物理異常、半監督二分類、主動學習、AnomalyMatch、哈勃遺產檔案
- **釋出期刊：** Astronomy & Astrophysics
- **論文連結：** [Identifying astrophysical anomalies in 99.6 million source cutouts from the Hubble legacy archive using AnomalyMatch](https://doi.org/10.1051/0004-6361/202555512)

### **12. [華威大學提出 RAVEN 驗證流程，確認 118 顆新系外行星](https://hyper.ai/news/50073)**

- **中文解讀：** [https://hyper.ai/news/50073](https://hyper.ai/news/50073)
- **科研團隊：** 華威大學研究團隊
- **相關研究：** 系外行星驗證、凌星系外行星巡天衛星（TESS）、RAVEN 流程、合成訓練資料集、假陽性排查
- **釋出期刊：** arXiv
- **論文連結：** [RAVEN: RAnking and Validation of ExoplaNets](https://arxiv.org/abs/2509.17645)

### **13. [華威大學提出整合學習框架，實現盾牌座 δ 型星星震學引數高精度預測](https://hyper.ai/news/50946)**

- **中文解讀：** [https://hyper.ai/news/50946](https://hyper.ai/news/50946)
- **科研團隊：** 英國華威大學研究團隊
- **相關研究：** 盾牌座 δ 型星（δ Scuti stars）、星震學（Asteroseismology）、TESS 光變曲線資料、整合機器學習框架、大頻率間隔 Δν
- **釋出期刊：** The Astronomical Journal
- **論文連結：** [Ensemble Machine Learning Approach to Estimate the Asteroseismic Indices for δ Scuti Stars Observed by TESS](https://beta.iopscience.iop.org/article/10.3847/1538-3881/ae4bd8)

### **14. [西班牙科研團隊提出 StreakMind 系統，利用 AI 自動檢測天文影象星軌拖影](https://hyper.ai/news/51385)**

- **中文解讀：** [https://hyper.ai/news/51385](https://hyper.ai/news/51385)
- **科研團隊：** 西班牙皇家海軍學院天文觀測站等研究機構
- **相關研究：** 近地天體探測（NEO）、行星防禦、天文影象拖影檢測、StreakMind 系統、YOLO11
- **釋出期刊：** arXiv
- **論文連結：** [StreakMind: AI detection and analysis of satellite streaks in astronomical images with automated database integration](https://hyper.ai/papers/2605.03429)

## **AI+ 自然災害**

### **1. [機器學習預測未來 40 年的地面沉降風險](https://hyper.ai/news/30173)**

- **中文解讀：** [https://hyper.ai/news/30173](https://hyper.ai/news/30173)
- **科研團隊：** 中南大學柳建新研究團隊
- **相關研究：** SAR 資料集、機器學習模型、XGBR、LSTM
- **釋出期刊：** Journal of Environmental Management, 2024.02
- **論文連結：** [Machine learning-based techniques for land subsidence simulation in an urban area](https://www.sciencedirect.com/science/article/abs/pii/S0301479724000641?via%3Dihub)

### **2. [語義分割模型 SCDUNet++ 用於滑坡測繪](https://hyper.ai/news/29672)**

- **中文解讀：** [https://hyper.ai/news/29672](https://hyper.ai/news/29672)
- **科研團隊：** 成都理工大學劉瑞研究團隊
- **相關研究：** Sentinel-2 多光譜資料、NASADEM 資料、滑坡資料、GLFE、CNN、DSSA、DSC、DTL、Transformer、深度遷移學習。交併比提高了 1.91% - 24.42%，F1 提高了 1.26% - 18.54%
- **釋出期刊：** International Journal of Applied Earth Observation and Geoinformation, 2024.01
- **論文連結：** [A deep learning system for predicting time to progression of diabetic retinopathy](https://www.nature.com/articles/s41591-023-02702-z) *(Note: Link mismatch present in source, kept as is).*

### **3. [神經網路將太陽二維影象轉為三維重建影象](https://hyper.ai/news/28797)**

- **中文解讀：** [https://hyper.ai/news/28797](https://hyper.ai/news/28797)
- **科研團隊：** 科羅拉多州國家大氣研究中心
- **相關研究：** NeRFs 神經網路、SuNeRF 模型。首次揭示了太陽的兩極
- **釋出期刊：** arxiv, 2022.11
- **論文連結：** [SuNeRF: Validation of a 3D Global Reconstruction of the Solar Corona Using Simulated EUV Images](https://arxiv.org/abs/2211.14879)

### **4. [可疊加神經網路分析自然災害中的影響因素](https://hyper.ai/news/24957)**

- **中文解讀：** [https://hyper.ai/news/24957](https://hyper.ai/news/24957)
- **科研團隊：** 加利福尼亞大學洛杉磯分校的研究團隊
- **相關研究：** 可疊加神經網路、半自動檢測演算法、additive ANN、SNN、特徵選擇模型、多階段訓練
- **釋出期刊：** Communications Earth & Environment, 2023.05
- **論文連結：** [Landslide susceptibility modeling by interpretable neural network](https://www.nature.com/articles/s43247-023-00806-5)

### **5. [利用可解釋性 AI ，分析澳大利亞吉普斯蘭市的不同地理因素](https://hyper.ai/news/33994)**

- **中文解讀：** [https://hyper.ai/news/33994](https://hyper.ai/news/33994)
- **科研團隊：** 澳大利亞國立大學、悉尼科技大學的研究團隊
- **相關研究：** 隨機森林模型、機器學習模型、交叉驗證技術。XAI可以根據地理特徵對野火發生進行有效預測
- **釋出期刊：** ScienceDirect, 2023.06
- **論文連結：** [Explainable artificial intelligence (XAI) for interpreting the contributing factors feed into the wildfire susceptibility prediction model](https://www.sciencedirect.com/science/article/pii/S0048969723016224)

### **6. [基於機器學習的洪水預報模型](https://hyper.ai/news/31060)**

- **中文解讀：** [https://hyper.ai/news/31060](https://hyper.ai/news/31060)
- **科研團隊：** 谷歌研究團隊
- **相關研究：** HydroATLAS project、長短期記憶網路LSTM、編碼器-解碼器、交叉驗證、效能優於最先進 GloFAS 預報模型
- **釋出期刊：** Nature, 2024.03
- **論文連結：** [Global prediction of extreme floods in ungauged watersheds](https://www.nature.com/articles/s41586-024-07145-1)

### **7. [ED-DLSTM實現無監測資料地區洪水預測](https://hyper.ai/news/32138)**

- **中文解讀：** [https://hyper.ai/news/32138](https://hyper.ai/news/32138)
- **科研團隊：** 中國科學院成都山地災害與環境研究所歐陽朝軍團隊
- **相關研究：** 2 千個水文站資料、訓練資料集來自美國、英國、中歐、加拿大、跨區域時空整合模型、編碼器-解碼器、多模態資料、空間靜態網格屬性資料、殘差卷積、
- **釋出期刊：** The Innovation, 2024.04
- **論文連結：** [Deep learning for cross-region streamflow and flood forecasting at a global scale](https://doi.org/10.1016/j.xinn.2024.100617)

### **8. [ChloroFormer 模型提前預警海洋藻類爆發](https://hyper.ai/news/34544)**

- **中文解讀：** [https://hyper.ai/news/34544](https://hyper.ai/news/34544)
- **科研團隊：** 浙江大學 GIS 實驗室
- **相關研究：** TZ02 資料集、深度學習模型 ChloroFormer、Transformer 神經網路、頻率濾波器機制、頻率注意力機制、ChloroFormer 在葉綠素 a 的短期和中期預測上，都超越了基線
- **釋出期刊：** Water Research, 2024.10
- **論文連結：** [Enhanced forecasting of chlorophyll-a concentration in coastal waters through integration of Fourier analysis and Transformer networks](https://doi.org/10.1016/j.watres.2024.122160 )

### **9. [首個海洋大語言模型 OceanGPT 入選 ACL 2024！水下具身智慧成現實](https://hyper.ai/news/33044)**

- **中文解讀：** [https://hyper.ai/news/33044](https://hyper.ai/news/33044)
- **科研團隊：** 浙江大學電腦科學與技術學院張寧豫、陳華鈞團隊
- **相關研究：** 海洋領域大語言模型、正規表示式、雜湊演算法海洋科學指令生成框架 DoInstruct、多 Agent 協作、gpt-3.5-turbo、BM25 演算法、LLaMA-2、Vicuna-7b-1.5、具身智慧
- **釋出期刊：** ACL 2024, 2024.05
- **論文連結：** [OceanGPT: A Large Language Model for Ocean Science Tasks](https://arxiv.org/abs/2310.02031)

### **10. [AI 預測預測全球變暖狀況](https://hyper.ai/news/36778)**

- **中文解讀：** [https://hyper.ai/news/36778](https://hyper.ai/news/36778)
- **科研團隊：** 斯坦福大學、科羅拉多州立大學與蘇黎世聯邦理工學院的聯合研究團隊
- **相關研究：** 人工智慧卷積神經網路系統、全球氣候模型、遷移學習、針對碳排放持續增加的情況進行預測、驗證不同歷史時期預測框架的準確性，AI 預測最高溫變化破紀錄可能性達 90%
- **釋出期刊：** Geophysical Research Letters, 2024.12
- **論文連結：** [Data-Driven Predictions of Peak Warming Under Rapid Decarbonization](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL111832)

### **11. [GeoAI 新模型，解釋青藏高原地表熱流分佈](https://hyper.ai/news/36501)**

- **中文解讀：** [https://hyper.ai/news/36501](https://hyper.ai/news/36501)
- **科研團隊：** 浙江大學地球科學學院
- **相關研究：** 空間智慧方法—具有增強可解釋性的地理神經網路加權迴歸模型 (EI-GNNWR)、EI-GNNWR 模型、地表熱流資料集、NGHF 陸地熱流資料集、中國大陸地區地表熱流資料集、SHAP 值計算方法、端梯度提升模型、全連線神經網路模型、普通線性迴歸模型、地理加權迴歸模型
- **釋出期刊：** Journal of Geophysical Research: Solid Earth, 2024.10
- **論文連結：** [The Distribution of Surface Heat Flow on the Tibetan Plateau Revealed by Data‐Driven Methods](https://doi.org/10.1029/2023JB028491)

### **12. [「問海」海洋環境智慧預報大模型，效能優於數值海洋預報](https://hyper.ai/news/38294)**

- **中文解讀：** [https://hyper.ai/news/38294](https://hyper.ai/news/38294)
- **科研團隊：** 嶗山實驗室吳立新院士領銜的科研團隊、中國海洋大學、中國科學技術大學、青島國實科技集團有限公司
- **相關研究：** 海洋環境預報、物理海洋學、人工智慧、海洋動力學理論驅動神經網路架構設計、塊體公式 (bulk formula) 顯式嵌入神經網路
- **釋出期刊：** Nature Communications, 2025.3
- **論文連結：** [Forecasting the Eddying Ocean with a Deep Neural Network](https://www.nature.com/articles/s41467-025-57389-2)

### **13. [明尼蘇達大學提出知識引導機器學習模型 FHNN，實現高精度洪水預報](https://hyper.ai/news/49992)**

- **中文解讀：** [https://hyper.ai/news/49992](https://hyper.ai/news/49992)
- **科研團隊：** 明尼蘇達大學雙城分校研究團隊
- **相關研究：** 洪水預報、知識引導機器學習（KGML）、因子化層級神經網路（FHNN）、物理過程模型（PBM）、水文迴圈與徑流預測
- **釋出期刊：** Water Resources Research
- **論文連結：** [Knowledge-Guided Machine Learning for Operational Flood Forecasting](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024WR039064)

### **14. [Google 釋出全球洪水預報系統第二版，顯著延長預報有效時長](https://hyper.ai/news/51472)**

- **中文解讀：** [https://hyper.ai/news/51472](https://hyper.ai/news/51472)
- **科研團隊：** Google Research 研究團隊
- **相關研究：** 洪水預報（Flood Forecasting）、水文模擬、機器學習水文模型、全球洪水預報系統 v2、谷歌徑流再分析與再預報資料集（GRRR）
- **釋出期刊：** EGUsphere
- **論文連結：** [Extending Medium-Range Global Flood Forecasts: The Google Global Flood Forecasting Model Version 2](https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2283/)

## **其他**

### **1. [TacticAI 足球助手戰術佈局實用性高達 90%](https://hyper.ai/news/30454)**

- **中文解讀：** [https://hyper.ai/news/30454](https://hyper.ai/news/30454)
- **科研團隊：** 谷歌 DeepMind 與利物浦足球俱樂部
- **相關研究：** Geometric deep learning、GNN、predictive model、generative model。射球機會提升 13%
- **釋出期刊：** Nature, 2024.03
- **論文連結：** [TacticAI: an AI assistant for football tactics](https://www.nature.com/articles/s41467-024-45965-x)

### **2. [去噪擴散模型 SPDiff 實現長程人流移動模擬](https://hyper.ai/news/30069)**

- **中文解讀：** [https://hyper.ai/news/30069](https://hyper.ai/news/30069)
- **科研團隊：** 清華大學電子工程系城市科學與計算研究中心、清華大學深圳國際研究生院深圳市泛在資料賦能重點實驗室、鵬城實驗室的研究團隊
- **相關研究：** GC 資料集、UCY 資料集、條件去噪擴散模型、SPDiff、GN、EGCL、LSTM、多幀推演訓練演算法。5% 訓練資料量即可達到最優效能
- **釋出期刊：** Nature, 2024.02
- **論文連結：** [Social Physics Informed Diffusion Model for Crowd Simulation](https://arxiv.org/abs/2402.06680)

### **3. [智慧化科學設施推進科研正規化變革](https://hyper.ai/news/29570)**

- **中文解讀：** [https://hyper.ai/news/29570](https://hyper.ai/news/29570)
- **科研團隊：** 上海交通大學梅宏研究團隊
- **相關研究：** 科學領域大模型、生成式模擬與反演、自主智慧無人實驗、大規模可信科研協作、AI 科研助手
- **釋出期刊：** 中國科學院院刊，2023.12
- **論文連結：** [AI for Science: Intelligent scientific facilities revolutionize fundamental research](http://www.bulletin.cas.cn/previewFile?id=52965146&type=pdf&lang=zh)

### **4. [DeepSymNet 基於監督學習來表示符號表示式](https://hyper.ai/news/29243)**

- **中文解讀：** [https://hyper.ai/news/29243](https://hyper.ai/news/29243)
- **科研團隊：** 中國科學院半導體研究所吳敏研究團隊
- **相關研究：** [符號網路資料集](https://hyper.ai/datasets/29321)、DSNOrg、DSNB、DSNBM、監督學習。使用標籤更短、減少預測的搜尋空間、提升演算法魯棒性
- **釋出期刊：** Journals & Magazines, 2023.11
- **論文連結：** [Discovering Mathematical Expressions Through DeepSymNet: A Classification-Based Symbolic Regression Framework](https://ieeexplore.ieee.org/document/10327762)

### **5. [大語言模型 ChipNeMo 輔助工程師完成晶片設計](https://hyper.ai/news/29134)**

- **中文解讀：** [https://hyper.ai/news/29134](https://hyper.ai/news/29134)
- **科研團隊：** 英偉達研究團隊
- **相關研究：** 領域自適應技術、NVIDIA NeMo、domain-adapted retrieval models、RAG、supervised fine-tuning with domain-specific instructions、DAPT、SFT、Tevatron、LLM
- **釋出期刊：** arXiv, 2024.04
- **論文連結：** [ChipNeMo: Domain-Adapted LLMs for Chip Design](https://arxiv.org/abs/2311.00176)

### **6. [AlphaGeometry 可解決幾何學問題](https://hyper.ai/news/29059)**

- **中文解讀：** [https://hyper.ai/news/29059](https://hyper.ai/news/29059)
- **科研團隊：** 谷歌 DeepMind 研究團隊
- **相關研究：** neural language model、symbolic deduction engine、語言模型
- **釋出期刊：** Nature, 2024.01
- **論文連結：** [Solving olympiad geometry without human demonstrations](https://www.nature.com/articles/s41586-023-06747-5)

### **7. [強化學習用於城市空間規劃](https://hyper.ai/news/28917)**

- **中文解讀：** [https://hyper.ai/news/28917](https://hyper.ai/news/28917)
- **科研團隊：** 清華大學李勇研究團隊
- **相關研究：** 深度強化學習、human–artificial intelligence collaborative 框架、城市規劃模型、策略網路、價值網路、GNN。在服務和生態指標上擊敗了 8 名專業人類規劃師
- **釋出期刊：** Nature Computational Science, 2023.09
- **論文連結：** [Spatial planning of urban communities via deep reinforcement learning](https://www.nature.com/articles/s43588-023-00503-5)

### **8. [ChatArena 框架，與大語言模型一起玩狼人殺](https://hyper.ai/news/28576)**

- **中文解讀：** [https://hyper.ai/news/28576](https://hyper.ai/news/28576)
- **科研團隊：** 清華大學李鵬研究團隊
- **相關研究：** 非引數學習機制、語言模型、Prompt
- **釋出期刊：** arxiv, 2023.09
- **論文連結：** [Exploring Large Language Models for Communication Games: An Empirical Study on Werewolf](https://arxiv.org/pdf/2309.04658.pdf)

### **9. [綜述：30 位學者合力發表 Nature，10 年回顧解構 AI 如何重塑科研正規化](https://hyper.ai/news/28166)**

- **中文解讀：** [https://hyper.ai/news/28166](https://hyper.ai/news/28166)
- **主要內容：** 來自斯坦福大學電腦科學與基因技術學院的博士後 Hanchen Wang，與佐治亞理工學院計算科學與工程專業的 Tianfan Fu，以及康奈爾大學計算機系的 Yuanqi Du 等 30 人，回顧了過去十年間，基礎科研領域中的 AI 角色，並提出了仍然存在的挑戰和不足
- **論文連結：** [Scientific discovery in the age of artificial intelligence](https://www.nature.com/articles/s41586-023-06221-2)

### **10. [Ithaca 協助金石學家進行文字修復、時間歸因和地域歸因的工作](https://hyper.ai/news/28140)**

- **中文解讀：** [https://hyper.ai/news/28140](https://hyper.ai/news/28140)
- **科研團隊：** DeepMind 和威尼斯福斯卡里大學的研究團隊
- **相關研究：** I.PHI 資料集、Ithaca 模型、Kullback-Leibler 散度、交叉熵損失函式。文字修復工作的準確率達到 62%，時間歸因誤差在 30 年內，地域歸因準確率達到 71%
- **釋出期刊：** Nature, 2020.03
- **論文連結：** [Restoring and attributing ancient texts using deep neural networks](https://www.nature.com/articles/s41586-022-04448-z)

### **11. [AI 在超光學中的正問題及逆問題、基於超表面系統的資料分析](https://hyper.ai/news/34006)**

- **中文解讀：** [https://hyper.ai/news/34006](https://hyper.ai/news/34006)
- **科研團隊：** 香港城市大學的研究團隊
- **相關研究：** Predicting NN、深度神經網路。預測準確率達到 99% 以上
- **釋出期刊：** ACS Publications, 2022.06
- **論文連結：** [Artificial Intelligence in Meta-optics](https://pubs.acs.org/doi/10.1021/acs.chemrev.2c00012)

### **12. [一種新的地理空間人工智慧方法：地理神經網路加權邏輯迴歸](https://hyper.ai/news/30608)**

- **中文解讀：** [https://hyper.ai/news/30608](https://hyper.ai/news/30608)
- **科研團隊：** 浙江大學杜震洪研究團隊
- **相關研究：** 空間模式、神經網路、Shapley 加性解釋、反距離加權插值、二元交叉熵損失函式、五折交叉驗證。在礦產資源預測評價方面優於其他先進模型
- **釋出期刊：** International Journal of Applied Earth Observation and Geoinformation, 2024.04
- **論文連結：** [Enhancing mineral prospectivity mapping with geospatial artificial intelligence: A geographically neural network-weighted logistic regression approach](https://doi.org/10.1016/j.jag.2024.103746)

### **13. [利用擴散模型生成神經網路引數，將時空少樣本學習轉變為擴散模型的預訓練問題](https://hyper.ai/news/30545)**

- **中文解讀：** [https://hyper.ai/news/30545](https://hyper.ai/news/30545)
- **科研團隊：** 清華大學電子工程系城市科學與計算研究中心李勇研究團隊
- **相關研究：** 智慧城市、時空資料、知識遷移、MetaLA、PEMS-BAy、Transformer 擴散模型、條件生成框架 GPD、神經網路、神經網路引數、預訓練 + 提示微調
- **釋出期刊：** ICLR 2024, 2024.01
- **論文連結：** [Spatio-Temporal Few-Shot Learning via Diffusive Neural Network Generation](https://openreview.net/forum?id=QyFm3D3Tzi)

### **14. [李飛飛團隊 AI4S 最新洞察：16 項創新技術彙總，覆蓋生物/材料/醫療/問診](https://hyper.ai/news/31499)**

- **中文解讀：** [https://hyper.ai/news/31499](https://hyper.ai/news/31499)
- **主要內容：** 斯坦福大學 HAI 研究中心釋出《2024 年人工智慧指數報告》。這份報告全面追蹤了 2023 年全球人工智慧的發展趨勢。還探討人工智慧在科學和醫學領域的深遠影響。報告中展示了 2023 年 AI 在科學領域的輝煌成就，以及 AI 在醫療領域取得的重要創新成果，包括 SynthSR 和 ImmunoSEIRA 等突破性技術。此外，還分析了 FDA 對 AI 醫療裝置審批的趨勢，為行業提供了寶貴的參考。

### **15. [精準預測武漢房價！osp-GNNWR 模型準確描述複雜空間過程和地理現象](https://hyper.ai/news/32453)**

- **中文解讀：** [https://hyper.ai/news/32453](https://hyper.ai/news/32453)
- **科研團隊：** 浙大 GIS 實驗室吳森森團隊
- **相關研究：** 神經網路、空間鄰近性度量、地理神經網路加權迴歸方法、安居客 968 個不同房地產樣本的資料集、空間迴歸模型、梯度下降演算法
- **釋出期刊：** International Journal of Geographical Information Science, 2024.04
- **論文連結：** [A neural network model to optimize the measure of spatial proximity in geographically weighted regression approach: a case study on house price in Wuhan](https://www.tandfonline.com/doi/abs/10.1080/13658816.2024.2343771)

### **16. [引入零樣本學習，釋出針對甲骨文破譯最佳化的條件擴散模型](https://hyper.ai/news/33010)**

- **中文解讀：** [https://hyper.ai/news/33010](https://hyper.ai/news/33010)
- **科研團隊：** 華中科技大學白翔、劉禹良研究團隊聯合阿德萊德大學、安陽師範學院、華南理工大學團隊
- **相關研究：** 條件擴散模型、影象生成技術、區域性分析取樣技術、HUST-OBS 資料集、EVOBC 資料集、ResNet-101 骨幹網路、OCR 技術、零樣本學習策略、風格編碼器、內容編碼器
- **釋出期刊：** ACL 2024, 2024.06
- **論文連結：** [Deciphering Oracle Bone Language with Diffusion Models](https://doi.org/10.48550/arXiv.2406.00684)

### **17. [斯坦福/蘋果等 23 所機構釋出 DCLM 基準測試，基礎模型與 Llama3 8B 表現相當](https://hyper.ai/news/33001)**

- **中文解讀：** [https://hyper.ai/news/33001](https://hyper.ai/news/33001)
- **科研團隊：** 華盛頓大學、斯坦福大學、蘋果等 23 所機構聯手
- **相關研究：** 語言模型、DCLM 基準測試、Transformer、MMLU
- **釋出期刊：** arXiv, 2024.06
- **論文連結：** [DataComp-LM: In search of the next generation of training sets for language models](https://arxiv.org/abs/2406.11794)

### **18. [PoCo 解決資料來源異構難題，實現機器人多工靈活執行](https://hyper.ai/news/32765)**

- **中文解讀：** [https://hyper.ai/news/32765](https://hyper.ai/news/32765)
- **科研團隊：** 麻省理工研究人員
- **相關研究：** 去噪擴散機率模型、去噪擴散隱式模型、擴散模型的機率合成、機器人策略組合框架 PoCo
- **釋出期刊：** arXiv, 2024.05
- **論文連結：** [PoCo: Policy Composition from and for Heterogeneous Robot Learning](https://arxiv.org/abs/2402.02511)

### **19. [含 14 萬張影象！甲骨文資料集助力團隊摘冠 ACL 最佳論文](https://hyper.ai/news/33826)**

- **中文解讀：** [https://hyper.ai/news/33826](https://hyper.ai/news/33826)
- **科研團隊：** 華中科技大學白翔教授研究團隊
- **相關研究：** HUST-OBC 資料集、無監督的視覺對比學習模型
- **釋出期刊：** Scientific Data, 2024.06
- **論文連結：** [An open dataset for oracle bone script recognition and decipherment](https://arxiv.org/abs/2401.15365)

### **20. [基於預訓練 LLM 提出通道預測方案，GPT-2 賦能無線通訊物理層](https://hyper.ai/news/33195)**

- **中文解讀：** [https://hyper.ai/news/33195](https://hyper.ai/news/33195)
- **科研團隊：** 北京大學電子學院程翔團隊
- **相關研究：** QuaDRiGa 模擬器、大語言模型、通道預測神經網路、預處理模組、嵌入模組、預訓練 LLM 模組、輸出模組
- **釋出期刊：** Journal of Communications and Information Networks, 2024.06
- **論文連結：** [LLM4CP: Adapting Large Language Models for Channel Prediction](https://ieeexplore.ieee.org/document/10582829)

### **21. [首個多縫線刺繡生成對抗網路模型](https://hyper.ai/news/34669)**

- **中文解讀：** [https://hyper.ai/news/34669](https://hyper.ai/news/34669)
- **科研團隊：** 復武漢紡織大學計算機與人工智慧學院可視計算與數字紡織團隊
- **相關研究：** 多針刺繡資料集、生成對抗網路模型、卷積神經網路、CNN、多縫線刺繡生成對抗網路模型 MSEmbGAN、區域感知紋理生成網路、著色網路、可提高刺繡中紋理真實度和色彩保真度等關鍵方面的精度
- **釋出期刊：** IEEE Transactions on Visualization and Computer Graphics, 2024
- **論文連結：** [MSEmbGAN: Multi-Stitch Embroidery Synthesis via Region-Aware Texture Generation](https://csai.wtu.edu.cn/TVCG01/index.html)

### **22. [快速自動掃描套件 FAST 高效獲取樣本資訊](https://hyper.ai/news/28100)**

- **中文解讀：** [https://hyper.ai/news/28100](https://hyper.ai/news/28100)
- **科研團隊：** 美國阿貢國家實驗室的研究團隊
- **相關研究：** SLADS-Net 方法、路徑最佳化技術。優先識別異質性區域、準確複製全掃描影象中所有主要特徵
- **釋出期刊：** Nature Communications, 2023.09
- **論文連結：** [Demonstration of an AI-driven workflow for autonomous high-resolution scanning microscopy](https://www.nature.com/articles/s41467-023-40339-1)

### **23. [人口動態基礎模型 PDFM 已開源，精準預測美國失業率和貧困率](https://hyper.ai/news/36380)**

- **中文解讀：** [https://hyper.ai/news/36380](https://hyper.ai/news/36380)
- **科研團隊：** 谷歌
- **相關研究：** 人口動態基礎模型、預測失業率和貧困率、解耦嵌入架構、使用 PDFM 增強最先進的預測基礎模型 TimesFM、聚合搜尋趨勢資料集、地圖資料集、繁忙度資料集、天氣與空氣質量、遙感資料、圖神經網路 (GNN)，可增強現有地理空間模型
- **釋出期刊：** arXiv, 2024.12
- **論文連結：** [General Geospatial Inference with a Population Dynamics Foundation Model](https://arxiv.org/abs/2411.07207)

### **24. [深度學習模型 CatGWR，估計空間非平穩性](https://hyper.ai/news/38055)**

- **中文解讀：** [https://hyper.ai/news/38055](https://hyper.ai/news/38055)
- **科研團隊：** 浙江省 GIS 重點實驗室
- **相關研究：** 深度學習模型 Context-Attention Geographically Weighted Regression、注意力機制、估計空間非平穩性、CatGWR 模型、模擬實驗、預處理模組、放大模組、迴歸模組
- **釋出期刊：** International Journal of Geographical Information Science, 2025.2
- **論文連結：** [Using an attention-based architecture to incorporate context similarity into spatial non-stationarity estimation](https://doi.org/10.1080/13658816.2025.2456556)

### **25. [全球首個 VR 運動干預系統 REVERIE，重塑青少年腦-身-心健康](https://hyper.ai/news/41266)**

- **中文解讀：** [https://hyper.ai/news/41266](https://hyper.ai/news/41266)
- **科研團隊：** 上海交通大學醫學院附屬第六人民醫院/主動健康戰略與發展研究院李華婷教授團隊、上海交通大學計算機學院/人工智慧教育部重點實驗室盛斌教授團隊、上海體育大學王繼紅研究員團隊、上海科技大學/上海臨床研究中心曾嶸教授團隊、新加坡國立大學林水德教授團隊
- **相關研究：** 體育鍛煉、虛擬世界（元宇宙）VR 運動、虛擬現實運動系統 REVERIE、VR 運動、青少年肥胖問題、Transformer 架構、迭代使用者互動
- **釋出期刊：** Nature Medicine, 2025.06
- **論文連結：** [Adaptive AI-based virtual reality sports system for adolescents with excess body weight: a randomized controlled trial](https://www.nature.com/articles/s41591-025-03724-5)

### **26. [Aeneas 基於超 176k 銘文資料，首次實現古羅馬銘文的任意長度修復](https://hyper.ai/news/42141)**

- **中文解讀：** [https://hyper.ai/news/42141](https://hyper.ai/news/42141)
- **科研團隊：** 谷歌 DeepMind  的研究人員、諾丁漢大學、華威大學等高校
- **相關研究：** 多模態生成式神經網路 Aeneas、Transformer 解碼器、拉丁銘文資料集、LED 資料集、銘文修復
- **釋出期刊：** Nature, 2025.07
- **論文連結：** [Contextualizing ancient texts with generative neural networks](https://www.nature.com/articles/s41586-025-09292-5)

### **27. [全景影片生成框架 PanoWan，兼顧零樣本影片編輯](https://hyper.ai/news/42205)**

- **中文解讀：** [https://hyper.ai/news/42205](https://hyper.ai/news/42205)
- **科研團隊：** 北京大學相機智慧實驗室（施柏鑫團隊）、OpenBayes 貝式計算
- **相關研究：** 全景影片、全景影片資料集 PanoVid、零樣本影片編輯、緯度感知取樣、旋轉語義去噪、邊界填充逐畫素解碼
- **釋出期刊：** arXiv, 2025.06
- **論文連結：** [PanoWan: Lifting Diffusion Video Generation Models to 360° with Latitude/Longitude-aware Mechanisms](https://arxiv.org/abs/2505.22016)

### **28. [基於 YOLOv11 的陶瓷分類智慧框架融合視覺建模與經濟分析，實現文物分類及價值估測](https://hyper.ai/news/42268)**

- **中文解讀：** [https://hyper.ai/news/42268](https://hyper.ai/news/42268)
- **科研團隊：** 馬來西亞博特拉大學研究團隊、新南威爾士大學悉尼分校
- **相關研究：** 陶瓷分類、卷積神經網路、遷移學習、膠囊網路、YOLOv11、陶瓷影象資料集、混合資料採集方法、隨機森林迴歸模型
- **釋出期刊：** Nature Partner Journals, 2025.06
- **論文連結：** [Integrating deep learning and machine learning for ceramic artifact classification and market value prediction](https://www.nature.com/articles/s40494-025-01886-6)

### **29. [「微波大腦」晶片問世，同時處理超高速資料和無線通訊訊號，176 毫瓦功耗下準確率達 75%](https://hyper.ai/news/43093)**

- **中文解讀：** [https://hyper.ai/news/43093](https://hyper.ai/news/43093)
- **科研團隊：** 康奈爾大學團隊
- **相關研究：** 高頻寬應用、微波神經網路、線性迴歸模型、RadioML2016.10A 資料集、深度學習、模擬計算
- **釋出期刊：** Nature Electronics, 2025.08
- **論文連結：** [An integrated microwave neural network for broadband computation and communication](https://go.hyper.ai/rMZ2K)

### **30. [時空插補與預測模型 STIMP 釋出，實現沿海葉綠素 a 時空分佈精準預測](https://hyper.ai/news/43613)**

- **中文解讀：** [https://hyper.ai/news/43613](https://hyper.ai/news/43613)
- **科研團隊：** 香港科技大學研究團隊
- **相關研究：** 葉綠素 a 預測、MODIS 葉綠素 a 實測資料集、葵花衛星遙感反射率資料集、深度學習、STIMP 架構、水體健康診斷
- **釋出期刊：** Nature Communications, 2025.08
- **論文連結：** [Spatiotemporal Imputation and Prediction Model](https://go.hyper.ai/BjOR5)

### **31. [MIT 等基於機器學習實現小樣本下的等離子體動力學高精度預測](https://hyper.ai/news/45260)**

- **中文解讀：** [https://hyper.ai/news/45260](https://hyper.ai/news/45260)
- **科研團隊：** 由麻省理工學院牽頭的研究團隊
- **相關研究：** 託卡馬克裝置、科學機器學習（SciML）、神經狀態空間模型（NSSM）、控制誤差敏感性魯棒性驗證、預測先行外推測試
- **釋出期刊：** Nature Communications, 2025.10
- **論文連結：** [Learning plasma dynamics and robust rampdown trajectories with predict-first experiments at TCV](https://www.nature.com/articles/s41467-025-63917-x)

### **32. [Reac-Discovery 融合數學建模/機器學習/自動化實驗，解決自驅動實驗室系統通用性難題](https://hyper.ai/news/45626)**

- **中文解讀：** [https://hyper.ai/news/45626](https://hyper.ai/news/45626)
- **科研團隊：** 西班牙 IMDEA 材料研究所的研究團隊
- **相關研究：** 自驅動實驗室（Self-Driving Laboratories, SDL）系統、Reac-Discovery 半自主數字平臺、整合設計、製造與最佳化模組的閉環體系、實時核磁共振（NMR）監測、機器學習（ML）最佳化工藝引數、拓撲描述符、結構引數化資料集、可列印性資料集、反應效能資料集
- **釋出期刊：** Nature Communications, 2025.10
- **論文連結：** [Reac-Discovery: an artificial intelligence–driven platform for continuous-flow catalytic reactor discovery and optimization](https://go.hyper.ai/ueB79)

### **33. [首個經人類皮層資料驗證的神經元建模框架 NOBLE 問世](https://hyper.ai/news/45806)**

- **中文解讀：** [https://hyper.ai/news/45806](https://hyper.ai/news/45806)
- **科研團隊：** 蘇黎世聯邦理工學院、加州理工學院、阿爾伯塔大學等機構
- **相關研究：** 深度學習、神經元特徵（neuron features）嵌入、電流注入（current injection）嵌入、NOBLE 神經元建模框架
- **釋出期刊：** NeurIPS 2025, 2025.09
- **論文連結：** [NOBLE – Neural Operator with Biologically-informed Latent Embeddings to Capture Experimental Variability in Biological Neuron Models](https://go.hyper.ai/Ramfp)

### **34. [影象地理定位框架 LocDiff 上線，實現無需網格與參考庫的全球級精準定位](https://hyper.ai/news/46687)**

- **中文解讀：** [https://hyper.ai/news/46687](https://hyper.ai/news/46687)
- **科研團隊：** 緬因大學、得克薩斯大學、佐治亞大學、馬里蘭大學、谷歌公司、 OpenAI、哈佛大學
- **相關研究：** 球面諧波狄拉克函式、整合框架 LocDiff、MP16 資料集、Im2GPS3k 資料集、 YFCC26k 資料集、GWS15k 資料集、條件 Siren-UNet（CS-UNet）架構、高效計算策略、SHDD 編碼方案、影象地理定位
- **釋出期刊：** NeurIPS 2025, 2025.10
- **論文連結：** [LocDiff: Identifying Locations on Earth by Diffusing in the Hilbert Space](https://openreview.net/forum?id=ghybX0Qlls)

### **35. [機器學習結合 py-GC-MS 技術，精準識別太古代岩石生命證據](https://hyper.ai/news/47543)**

- **中文解讀：** [https://hyper.ai/news/47543](https://hyper.ai/news/47543)
- **科研團隊：** 美國卡內基科學研究所地球和行星實驗室及全球多所院校和研究機構
- **相關研究：** 熱解氣相色譜-質譜（py-GC-MS）、監督機器學習
- **釋出期刊：** PNAS
- **論文連結：** [Organic geochemical evidence for life in Archean rocks identified by pyrolysis–GC–MS and supervised machine learning](https://www.pnas.org/doi/10.1073/pnas.2514534122)

### **36. [機器學習結合 py-GC-MS 技術，精準識別太古代岩石生命證據](https://hyper.ai/news/47950)**

- **中文解讀：** [https://hyper.ai/news/47950](https://hyper.ai/news/47950)
- **科研團隊：** 清華大學研究團隊
- **相關研究：** 網路動力學、符號迴歸、ND²、方程推導、科學機器學習
- **釋出期刊：** Nature Communications
- **論文連結：** *(Link points to the Archean rocks paper in original Chinese, but kept numbering and reference translation as provided)*

*(Note: The provided source had a duplicate item 35 and 36 linking to PNAS Archean rocks, while the TOC indicated ND2. Translated directly based on the provided text block items 35/36)*

### **37. [浙江大學團隊提出地質約束成礦預測方法，顯式刻畫成礦各向異性](https://hyper.ai/news/48396)**

- **中文解讀：** [https://hyper.ai/news/48396](https://hyper.ai/news/48396)
- **科研團隊：** 浙江大學研究團隊
- **相關研究：** 礦產遠景預測填圖（MPM）、各向異性空間鄰近性神經網路、智慧找礦
- **釋出期刊：** Geology
- **論文連結：** [Geologically constrained data-driven modeling for mineral prospectivity mapping](https://go.hyper.ai/vbUpa)

### **38. [清華與芝大團隊 Nature 發文：AI 工具擴大科學家影響力但收縮科學焦點](https://hyper.ai/news/48748)**

- **中文解讀：** [https://hyper.ai/news/48748](https://hyper.ai/news/48748)
- **科研團隊：** 清華大學聯合芝加哥大學的研究團隊
- **相關研究：** AI for Science、科研生產力、科學引用模式、科研生態、科學計量學
- **釋出期刊：** Nature
- **論文連結：** [Artificial intelligence tools expand scientists’ impact but contract science’s focus](https://www.nature.com/articles/s41586-025-09922-y)

### **39. [加州大學團隊提出 AI 增強型晶片級光譜儀，超小體積實現高光譜保真度](https://hyper.ai/news/48905)**

- **中文解讀：** [https://hyper.ai/news/48905](https://hyper.ai/news/48905)
- **科研團隊：** 加州大學研究團隊
- **相關研究：** 晶片級光譜儀、光子捕獲紋理結構（PTST）、全連線神經網路、高光譜成像
- **釋出期刊：** Advanced Photonics
- **論文連結：** [AI-augmented photon-trapping spectrometer-on-a-chip on silicon platform with extended near-infrared sensitivity](https://doi.org/10.1117/1.AP.8.1.016008)

### **40. [美國能源部橡樹嶺國家實驗室提出 D-CHAG 方法，大幅降低多通道基礎模型記憶體佔用](https://hyper.ai/news/49330)**

- **中文解讀：** [https://hyper.ai/news/49330](https://hyper.ai/news/49330)
- **科研團隊：** 美國能源部橡樹嶺國家實驗室研究人員
- **相關研究：** 視覺科學基礎模型、分散式跨通道分層聚合方法（D-CHAG）、張量並行（TP）、分層通道聚合
- **釋出期刊：** SC25
- **論文連結：** [Distributed Cross-Channel Hierarchical Aggregation for Foundation Models](https://dl.acm.org/doi/10.1145/3712285.3759870)

### **41. [Polymathic AI 團隊提出連續介質大模型 Walrus，跨域模擬效能創紀錄](https://hyper.ai/news/49076)**

- **中文解讀：** [https://hyper.ai/news/49076](https://hyper.ai/news/49076)
- **科研團隊：** Polymathic AI 協作組研究團隊
- **相關研究：** 連續介質動力學、物理模擬基礎模型、Walrus 模型、自適應計算標記化
- **釋出期刊：** arXiv
- **論文連結：** [Walrus: A Cross-Domain Foundation Model for Continuum Dynamics](https://arxiv.org/abs/2511.15684)

### **42. [EPFL 提出新型架構 DYNAMI-CAL GraphNet，物理資訊 GNN 精準建模多體動力學](https://hyper.ai/news/49808)**

- **中文解讀：** [https://hyper.ai/news/49808](https://hyper.ai/news/49808)
- **科研團隊：** 瑞士洛桑聯邦理工學院（EPFL）研究團隊
- **相關研究：** 物理資訊圖神經網路（Physics-informed GNN）、多體動力學系統、DYNAMI-CAL GraphNet、線動量與角動量守恆
- **釋出期刊：** Nature Communications
- **論文連結：** [A physics-informed graph neural network conserving linear and angular momentum for dynamical systems](https://www.nature.com/articles/s41467-025-67802-5)

### **43. [MIT 提出新型方法 Wave-Former，實現完全遮擋物體高精度三維重建](https://hyper.ai/news/50018)**

- **中文解讀：** [https://hyper.ai/news/50018](https://hyper.ai/news/50018)
- **科研團隊：** 麻省理工學院（MIT）研究團隊
- **相關研究：** 計算機視覺、穿遮擋三維重建、毫米波感知（mmWave）、Wave-Former、無線形狀補全
- **釋出期刊：** arXiv
- **論文連結：** [Wave-Former: Through-Occlusion 3D Reconstruction via Wireless Shape Completion](https://arxiv.org/abs/2511.14152)

### **44. [MIT 提出 DRiffusion 草稿-精煉並行框架，實現擴散模型推理無損加速](https://hyper.ai/news/50209)**

- **中文解讀：** [https://hyper.ai/news/50209](https://hyper.ai/news/50209)
- **科研團隊：** 麻省理工學院（MIT）研究團隊
- **相關研究：** 擴散模型（Diffusion Models）、推理加速、並行化技術、DRiffusion、草稿-精煉（draft-and-refine）
- **釋出期刊：** arXiv
- **論文連結：** [DRiffusion: Draft-and-Refine Process Parallelizes Diffusion Models with Ease](https://arxiv.org/abs/2603.25872)

### **45. [以色列理工學院提出 Task Tokens，實現行為基礎模型靈活適配特定任務](https://hyper.ai/news/50788)**

- **中文解讀：** [https://hyper.ai/news/50788](https://hyper.ai/news/50788)
- **科研團隊：** 以色列理工學院研究團隊
- **相關研究：** 機器人控制、模仿學習、行為基礎模型（BFMs）、Task Tokens、特定任務適配
- **釋出會議：** ICLR 2026
- **論文連結：** [Task Tokens: A Flexible Approach to Adapting Behavior Foundation Models](https://hyper.ai/papers/2503.22886)

### **46. [MIT 等提出 EnergAIzer 框架，實現 AI 工作負載 GPU 功耗快速精確估計](https://hyper.ai/news/51038)**

- **中文解讀：** [https://hyper.ai/news/51038](https://hyper.ai/news/51038)
- **科研團隊：** 麻省理工學院（MIT）與 MIT-IBM 沃森人工智慧實驗室（MIT-IBM Watson AI Lab）
- **相關研究：** GPU 功耗估計、AI 工作負載、資料中心能效、EnergAIzer 框架、硬體效能分析
- **釋出期刊：** arXiv
- **論文連結：** [EnergAIzer: Fast and Accurate GPU Power Estimation Framework for AI Workloads](https://arxiv.org/abs/2604.20105)

### **47. [UIUC 提出異構智慧體框架 Eywa，突破語言中心化大模型限制](https://hyper.ai/news/51222)**

- **中文解讀：** [https://hyper.ai/news/51222](https://hyper.ai/news/51222)
- **科研團隊：** 伊利諾伊大學香檳分校（UIUC）研究團隊
- **相關研究：** 智慧體 AI（Agentic AI）、異構智慧體框架 Eywa、領域專用基礎模型、多智慧體系統、大語言模型（LLM）
- **釋出期刊：** arXiv
- **論文連結：** [Heterogeneous Scientific Foundation Model Collaboration](https://hyper.ai/papers/2604.27351)

### **48. [斯坦福大學等利用 LSTM 代理模型，實現二階非線性光學 252 倍加速模擬](https://hyper.ai/news/51410)**

- **中文解讀：** [https://hyper.ai/news/51410](https://hyper.ai/news/51410)
- **科研團隊：** 斯坦福大學、加利福尼亞大學洛杉磯分校（UCLA）與 SLAC 國家加速器實驗室聯合研究團隊
- **相關研究：** 二階非線性光學、和頻（SFG）、長短期記憶網路（LSTM）、代理模型（Surrogate Model）、分步傅立葉法（SSFM）
- **釋出期刊：** Advanced Photonics
- **論文連結：** [Deep learning-assisted modeling for χ⁽²⁾ nonlinear optics](https://go.hyper.ai/5bLoA)
