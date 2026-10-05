# 科学のためのAI
**JA** | [CN](README_CN.md)
- [**はじめに**](#foreword)
- [**AI＋バイオ医薬**](#ai-biopharmaceutical)
  - [**1. AdaDR、薬剤再配置で複数のベンチマーク手法を上回る**](#1-adadr-outperforms-multiple-benchmark-methods-in-drug-repositioning)
  - [**2. IMN4NPD、分子ネットワーク内の大規模クラスターの重複排除を加速し、自己ループとペアノードに注釈を付与**](#2-imn4npd-accelerates-the-dereplication-of-extensive-clusters-in-molecular-networks-providing-annotations-for-self-loops-and-paired-nodes)
  - [**3. 単一細胞マルチオミクスデータのモザイク統合を行う深層生成モデル MIDAS**](#3-deep-generative-model-midas-for-mosaic-integration-of-single-cell-multi-omics-data)
  - [**4. ResGen：タンパク質ポケットに基づく3D分子生成モデル**](#4-resgen-a-3d-molecular-generation-model-based-on-protein-pockets)
  - [**5. 大規模モデルと機械学習による酵素反応速度論パラメーターの高精度予測**](#5-large-models--machine-learning-for-high-precision-prediction-of-enzyme-kinetic-parameters)
  - [**6. MIT、深層学習を用いて新規抗生物質を発見**](#6-mit-uses-deep-learning-to-discover-novel-antibiotics)
  - [**7. ニューラルネットワークがGPCRとGタンパク質の共役選択性を解読**](#7-neural-networks-decipher-gpcr-g-protein-coupling-selectivity)
  - [**8. Macformer、非環状薬フェドラチニブを大環状化**](#8-macformer-macrocyclizes-the-acyclic-drug-fedratinib)
  - [**9. 回帰ネットワークとCGMDで数百億種類のペプチドの自己集合特性を予測**](#9-regression-network--cgmd-predicts-self-assembly-properties-of-tens-of-billions-of-peptides)
  - [**10. 教師なし学習で7,100万件の遺伝子変異を予測**](#10-unsupervised-learning-predicts-71-million-gene-mutations)
  - [**11. グラフニューラルネットワーク（GNN）に基づく匂い分析AIを開発**](#11-odor-analysis-ai-developed-based-on-graph-neural-networks-gnn)
  - [**12. グラフニューラルネットワークで安全性と有効性の高い抗老化成分をスクリーニング**](#12-graph-neural-networks-screen-for-safe-and-highly-effective-anti-aging-ingredients)
  - [**13. 機械学習でドーパミンの放出量と放出位置を定量分析**](#13-machine-learning-quantitatively-analyzes-dopamine-release-amount-and-location)
  - [**14. 機械学習で3種類の抗老化薬を発見**](#14-machine-learning-discovers-three-anti-aging-drugs)
  - [**15. 深層学習でアシネトバクター・バウマニイを阻害する新規抗生物質をスクリーニング**](#15-deep-learning-screens-for-novel-antibiotics-inhibiting-acinetobacter-baumannii)
  - [**16. 生体インクの印刷適性予測に機械学習モデルを適用**](#16-machine-learning-models-applied-to-predict-bioink-printability)
  - [**17. 機械学習で多能性幹細胞を識別**](#17-machine-learning-differentiates-pluripotent-stem-cells)
  - [**18. 機械学習モデルで長時間作用型注射剤の薬物放出速度を予測**](#18-machine-learning-model-predicts-drug-release-rate-of-long-acting-injectables)
  - [**19. 機械学習アルゴリズムで植物の抗マラリア特性を効果的に予測**](#19-machine-learning-algorithm-effectively-predicts-plant-antimalarial-properties)
  - [**20. 機械学習アンサンブル手法でウイルスタンパク質断片の免疫原性を予測**](#20-machine-learning-ensemble-method-predicts-immunogenicity-of-viral-protein-fragments)
  - [**21. 生成AIを新規抗生物質の開発に活用**](#21-generative-ai-used-to-develop-novel-antibiotics)
  - [**22. 深層学習に基づく自動・高速・多次元の単粒子追跡システム**](#22-deep-learning-based-automated-high-speed-multidimensional-single-particle-tracking-system)
  - [**23. ProEnsemble機械学習フレームワーク：進化経路のプロモーター組み合わせを最適化**](#23-proensemble-machine-learning-framework-optimizing-evolutionary-pathway-promoter-combinations)
  - [**24. 微小環境を考慮するグラフニューラルネットワークProtLGNがタンパク質の指向性進化を導く**](#24-microenvironment-aware-graph-neural-network-protlgn-guides-directed-protein-evolution)
  - [**25. 深層学習モデルAlphaPPIMd：タンパク質間複合体の構造アンサンブルを探究**](#25-deep-learning-model-alphappimd-exploring-conformational-ensembles-of-protein-protein-complexes)
  - [**26. 新規の腫瘍抑制タンパク質分解剤dp53mががん細胞の増殖を阻害**](#26-novel-tumor-suppressor-protein-degrader-dp53m-inhibits-cancer-cell-proliferation)
  - [**27. CVPR最優秀学生論文！マルチモーダルモデルBioCLIPがゼロショット学習を実現**](#27-cvpr-best-student-paper-multimodal-model-bioclip-achieves-zero-shot-learning)
  - [**28. 1億パラメーター！細胞基盤モデルscFoundationが2万個の遺伝子を同時にモデル化**](#28-100-million-parameters-cell-foundation-model-scfoundation-models-20000-genes-simultaneously)
  - [**29. ICML採択、タンパク質言語モデルESM-AAが従来のSOTAを上回る**](#29-accepted-by-icml-protein-language-model-esm-aa-surpasses-traditional-sota)
  - [**30. SPACEアルゴリズムがCell姉妹誌に掲載！組織モジュールの発見能力で同種ツールをリード**](#30-space-algorithm-published-in-cell-sub-journal-tissue-module-discovery-capabilities-lead-similar-tools)
  - [**31. AlphaFoldに基づく新たな進展でタンパク質の動的多様性を解明**](#31-new-breakthroughs-based-on-alphafold-reveal-dynamic-protein-diversity)
  - [**32. 拡散モデルに基づくP450酵素のde novo設計法P450Diffusionを開発**](#32-p450diffusion-de-novo-design-method-for-p450-enzymes-developed-based-on-diffusion-models)
  - [**33. 等変グラフニューラルネットワークによる標的タンパク質結合部位予測で性能が20％向上**](#33-equivariant-graph-neural-networks-used-for-target-protein-binding-site-prediction-boosting-performance-by-20)
  - [**34. 実験データ20件でAIタンパク質研究の節目！FSFPがタンパク質事前学習モデルを効果的に最適化**](#34-20-experimental-data-points-create-an-ai-protein-milestone-fsfp-effectively-optimizes-protein-pre-training-models)
  - [**35. 転移可能な深層学習モデルが複数種のRNA修飾を特定し、計算コストを大幅に削減**](#35-transferable-deep-learning-model-identifies-multiple-types-of-rna-modifications-significantly-reducing-computational-costs)
  - [**36. InstructProtein：知識指示を用いてタンパク質言語と人間の言語を対応付ける**](#36-instructprotein-aligning-protein-language-with-human-language-using-knowledge-instructions)
  - [**37. タンパク質からテキストを生成するフレームワークProtT3がタンパク質データとテキスト情報のクロスモーダル解釈を可能に**](#37-protein-to-text-generation-framework-prott3-enables-cross-modal-interpretation-of-protein-data-and-text-information)
  - [**38. CPDiffusionモデルが機能性タンパク質を超低コストで全自動設計**](#38-cpdiffusion-model-designs-functional-proteins-fully-automatically-at-an-ultra-low-cost)
  - [**39. タンパク質言語モデルと高密度検索技術に基づく新たなタンパク質ホモログ検出法**](#39-a-novel-protein-homolog-detection-method-based-on-protein-language-models-and-dense-retrieval-techniques)
  - [**40. AlphaProteoが標的タンパク質結合体を効率的に設計し、親和性を300倍に向上**](#40-alphaproteo-efficiently-designs-target-protein-binders-increasing-affinity-by-300-times)
  - [**41. 新たなノイズ除去タンパク質言語モデルDePLMが変異効果予測でSOTAモデルを上回る**](#41-novel-denoising-protein-language-model-deplm-outperforms-sota-models-in-mutation-effect-prediction)
  - [**42. 幾何学的深層生成モデルDynamicBindが動的なタンパク質ドッキング予測を実現**](#42-geometric-deep-generative-model-dynamicbind-enables-dynamic-protein-docking-prediction)
  - [**43. 創薬大規模言語モデルY-MolがLLaMA2を全面的に上回る**](#43-drug-discovery-large-language-model-y-mol-completely-outperforms-llama2)
  - [**44. 汎用分子逆フォールディングモデルUniIFがAlphaFold 3をさらに補完**](#44-universal-molecular-inverse-folding-model-uniif-further-complements-alphafold-3)
  - [**45. 事前学習済みタンパク質言語モデルProSSTがタンパク質構造情報をより効果的に統合**](#45-pre-trained-protein-language-model-prosst-integrates-protein-structure-information-more-effectively)
  - [**46. 大環状ペプチド結合体フレームワークRFpeptidesが創薬困難なタンパク質に新たな可能性をもたらす**](#46-macrocyclic-peptide-binder-framework-rfpeptides-offers-new-possibilities-for-undruggable-proteins)
  - [**47. ゲノム基盤モデルEvoが分子からゲノムまでのスケールで予測と生成を可能に**](#47-genome-foundation-model-evo-enables-prediction-and-generation-from-molecular-to-genome-scales)
  - [**48. DigFragがAIで分子フラグメントを正確に分割し、医薬品・農薬分子44種を生成**](#48-digfrag-accurately-segments-molecular-fragments-using-ai-and-generates-44-drugpesticide-molecules)
  - [**49. タンパク質配列大規模言語モデルの事前学習法PRIME**](#49-protein-sequence-large-language-model-pre-training-method-prime)
  - [**50. 自己教師あり深層学習法がクライオ電子顕微鏡の3D再構成を革新**](#50-self-supervised-deep-learning-method-revolutionizes-3d-reconstruction-in-cryo-electron-microscopy)
  - [**51. マルチモーダルタンパク質生成法PLAIDが配列と全原子タンパク質構造を同時に生成**](#51-multimodal-protein-generation-method-plaid-generates-sequences-and-all-atom-protein-structures-simultaneously)
  - [**52. 潜在強化学習に基づく標的指向型分子最適化法MOLRL**](#52-targeted-molecular-optimization-method-molrl-based-on-latent-reinforcement-learning)
  - [**53. ウイルス変異の駆動因子予測フレームワークE2VDが新型コロナ・HIV・インフルエンザウイルスの進化方向を予測**](#53-viral-variation-driver-prediction-framework-e2vd-predicts-evolutionary-directions-for-covid-19hivinfluenza-viruses)
  - [**54. 医療言語モデルMedFoundが専門医に近い推論能力を実現**](#54-medical-language-model-medfound-approaches-expert-physician-reasoning-capabilities)
  - [**55. 4D拡散モデルAlphaFoldingがタンパク質動的構造予測の空白を埋める**](#55-4d-diffusion-model-alphafolding-fills-the-gap-in-dynamic-protein-structure-prediction)
  - [**56. 短鎖タンパク質設計パイプラインPepPrCLIPが新たながん治療法の開発に期待**](#56-pepprclip-pipeline-for-designing-short-proteins-holds-promise-for-developing-new-cancer-therapies)
  - [**57. ボルツマンアラインメント技術がタンパク質結合自由エネルギー予測の効率を大幅に向上**](#57-boltzmann-alignment-technique-drastically-improves-protein-binding-free-energy-prediction-efficacy)
  - [**58. 新たな大規模フローベースのタンパク質主鎖生成器Proteinaがde novo主鎖設計でSOTAを達成**](#58-novel-large-scale-flow-based-protein-backbone-generator-proteina-achieves-sota-in-de-novo-protein-backbone-design)
  - [**59. UniGEMモデルが拡散モデルに基づく2つのタスクの相乗的強化を初めて実現**](#59-unigem-model-achieves-synergistic-enhancement-of-two-tasks-based-on-diffusion-models-for-the-first-time)
  - [**60. RFdiffusionがさらに進化し、原子精度のde novo抗体設計を実現**](#60-rfdiffusion-evolves-further-realizing-atomic-accuracy-de-novo-antibody-design)
  - [**61. タンパク質・RNA言語モデルの初の融合方式が結合親和性予測で新たなSOTAを樹立**](#61-first-protein-rna-language-model-fusion-scheme-sets-new-sota-in-binding-affinity-prediction)
  - [**62. 仮想組織モデルCelcomenが空間トランスクリプトミクス解析における因果推論の識別可能性を初めて実現**](#62-virtual-tissue-model-celcomen-achieves-causal-inference-identifiability-in-spatial-transcriptomics-analysis-for-the-first-time)
  - [**63. AlphaFold-Metainference法が天然変性タンパク質の構造アンサンブルを高精度に予測**](#63-alphafold-metainference-method-accurately-predicts-disordered-protein-structural-ensembles)
  - [**64. 高精度RNA構造予測フレームワークDRfold2が複数のベンチマークでSOTAを上回る**](#64-high-accuracy-rna-structure-prediction-framework-drfold2-surpasses-sota-in-multiple-benchmarks)
  - [**65. 新しいタンパク質設計アルゴリズムDRAKESが生物学的配列設計のボトルネックを突破**](#65-new-protein-design-algorithm-drakes-breaks-through-the-biological-sequence-design-bottleneck)
  - [**66. 機械学習支援UV吸光分光法で微生物汚染を検出**](#66-machine-learning-assisted-uv-absorbance-spectroscopy-for-detecting-microbial-contamination)
  - [**67. タンパク質配列生成モデルを重複遺伝子の設計に活用**](#67-utilizing-protein-sequence-generative-models-for-overlapping-gene-design)
  - [**68. 予測フレームワークPUPSが単一細胞レベルでのタンパク質細胞内局在を可能に**](#68-prediction-framework-pups-enables-single-cell-level-protein-subcellular-localization)
  - [**69. UniMoMo：分子種を横断する初の統一生成フレームワークが多種類の医薬分子設計を可能に**](#69-unimomo-the-first-unified-generative-framework-across-molecular-species-enables-multi-type-drug-molecular-design)
  - [**70. タンパク質言語モデルProt42が標的タンパク質配列だけから高親和性結合体を生成**](#70-protein-language-model-prot42-generates-high-affinity-binders-using-only-the-target-protein-sequence)
  - [**71. 生体分子動力学シミュレーターUniSimが分子種と化学環境を横断した時間粗視化動力学シミュレーションを初めて統一**](#71-unified-biomolecular-dynamics-simulator-unisim-achieves-unified-time-coarsened-dynamics-simulation-across-molecular-types-and-chemical-environments-for-the-first-time)
  - [**72. 計算生物学アルゴリズムSimplifiedBondfinderが新規の窒素・酸素・硫黄結合69種を発見**](#72-computational-biology-algorithm-simplifiedbondfinder-uncovers-69-novel-nitrogen-oxygen-sulfur-bonds)
  - [**73. 新しいタンパク質配列設計法FAMPNNが主鎖と側鎖の情報を同時に処理**](#73-novel-protein-sequence-design-method-fampnn-simultaneously-processes-protein-backbone-and-sidechain-information)
  - [**74. 原子レベルのタンパク質設計法La-Proteinaが最大800残基のタンパク質を高精度に生成**](#74-atomistic-protein-design-method-la-proteina-generates-proteins-with-up-to-800-residues-at-high-precision)
  - [**75. 多鎖タンパク質複合体専用のAPMモデルが全原子設計と機能最適化を実現**](#75-apm-model-specifically-designed-for-multi-chain-protein-complexes-enables-all-atom-design-and-functional-optimization)
  - [**76. 新たな天然変性領域結合タンパク質設計法Logosが創薬困難な標的に特化**](#76-new-intrinsically-disordered-region-binding-protein-design-method-logos-specializes-in-undruggable-targets)
  - [**77. 新たなタンパク質動的融合表現フレームワークFusionProtが公開され、反復的な情報交換を実現**](#77-novel-protein-dynamic-fusion-representation-framework-fusionprot-released-enabling-iterative-information-exchange)
  - [**78. トランスクリプトーム誘導型拡散モデルMorphDiffが公開され、表現型創薬を加速**](#78-transcriptome-guided-diffusion-model-morphdiff-released-to-accelerate-phenotypic-drug-discovery)
  - [**79. AlphaPPIMIフレームワークが汎化性能を大幅に高め、PPI界面モジュレーター予測で既存手法を上回る**](#79-alphappimi-framework-significantly-enhances-generalization-surpassing-existing-methods-in-ppi-interface-modulator-prediction)
  - [**80. 新しい融合ニューラルネットワークフレームワークがタンパク質配列内の複数金属結合部位を効率的に予測**](#80-a-novel-fusion-neural-network-framework-efficiently-predicts-multi-metal-binding-sites-in-protein-sequences)
  - [**81. 高い合成可能性を備えた分子投影フレームワークReaSynが公開され、超高い再構成率と経路の多様性を達成**](#81-highly-synthesizable-molecular-projection-framework-reasyn-released-achieving-ultra-high-reconstruction-rates-and-pathway-diversity)
  - [**82. 制約付き強化学習フレームワークCtrl-DNAが公開され、特定細胞の遺伝子発現を「狙いどおりに制御」**](#82-constrained-reinforcement-learning-framework-ctrl-dna-released-realizing-targeted-control-of-specific-cell-gene-expression)
  - [**83. PLACERフレームワークがタンパク質構造的不均一性の原子レベルモデリングという課題を解決**](#83-placer-framework-resolves-the-atomic-level-modeling-challenge-of-protein-conformational-heterogeneity)
  - [**84. Squidiffが複数シナリオのトランスクリプトームシミュレーションを可能にし、精密医療と空間医療の発展を後押し**](#84-squidiff-enables-multi-scenario-transcriptome-simulation-boosting-precision-medicine-and-spatial-medicine-development)
  - [**85. 生成モデルPepTronと新たな評価ベンチマークが公開され、天然変性タンパク質アンサンブルの予測能力を刷新**](#85-generative-model-peptron-and-new-evaluation-benchmark-released-reshaping-prediction-capabilities-for-disordered-protein-ensembles)
  - [**86. MITとハーバード大学が、特異性の高いプロテアーゼ基質の設計課題に挑むエンドツーエンドAIワークフローCleaveNetを提案**](#86-mit-and-harvard-propose-end-to-end-ai-workflow-cleavenet-to-overcome-highly-specific-protease-substrate-design-challenges)
  - [**87. ゲーテ大学フランクフルトの研究チームが、ヒトE3リゴームの複雑性を解読するマルチスケール分類フレームワークを提案**](#87-goethe-university-frankfurt-team-proposes-a-multi-scale-classification-framework-to-decode-the-complexity-of-the-human-e3-ligome)
  - [**88. BasecampとNVIDIAがEDEN基盤モデルを共同公開し、AIでプログラム可能な治療設計を実現**](#88-basecamp-and-nvidia-jointly-release-the-eden-foundation-model-enabling-ai-programmable-therapeutic-design)
  - [**89. Microsoftらが日常的な病理標本から仮想mIFアトラスを生成するマルチモーダルAIフレームワークGigaTIMEを提案**](#89-microsoft-and-others-propose-the-multimodal-ai-framework-gigatime-to-generate-virtual-mif-atlases-from-routine-pathology-slides)
  - [**90. MITが深層学習言語モデルPichia-CLMを提案し、コドン最適化で組換えタンパク質の収量を向上**](#90-mit-proposes-deep-learning-language-model-pichia-clm-to-optimize-codons-for-enhanced-recombinant-protein-yield)
  - [**91. MITとETHが単一細胞マルチモーダルデータを効率的に統合・分離する深層学習フレームワークAPOLLOを共同提案**](#91-mit-and-eth-jointly-propose-deep-learning-framework-apollo-to-efficiently-integrate-and-disentangle-single-cell-multimodal-data)
  - [**92. 香港中文大学らが修飾ペプチドの統一的なクロススケール表現学習を行うBi-TEAMフレームワークを共同提案**](#92-cuhk-and-others-jointly-propose-the-bi-team-framework-for-unified-cross-scale-representation-learning-of-modified-peptides)
  - [**93. カーネギーメロン大学らが全原子タンパク質モデルの量子精密化を行うAQuaRefを提案**](#93-carnegie-mellon-university-and-others-propose-aquaref-for-quantum-refinement-of-all-atom-protein-models)
  - [**94. NVIDIAらがタンパク質結合体の生成と最適化を統一するComplexaフレームワークを共同提案**](#94-nvidia-and-others-jointly-propose-the-complexa-framework-to-unify-protein-binder-generation-and-optimization)
  - [**95. MITとCMUが振動動力学を導入してde novoタンパク質設計を強化するVibeGenを共同提案**](#95-mit-and-cmu-jointly-propose-vibegen-introducing-vibrational-dynamics-to-empower-de-novo-protein-design)
  - [**96. パスツール研究所が深層学習で239万種の抗ファージタンパク質を予測し、細菌の免疫機構をマッピング**](#96-institut-pasteur-uses-deep-learning-to-predict-239-million-anti-phage-proteins-mapping-bacterial-immunity)
  - [**97. KAISTのチームがAIで低分子結合タンパク質をde novo設計し、バイオセンサーへの応用に成功**](#97-kaist-team-utilizes-ai-to-de-novo-design-small-molecule-binding-proteins-successfully-applying-them-in-biosensors)
  - [**98. トロント大学らがゲノム配列の効率的な階層モデリングを行うdnaHNetを提案**](#98-university-of-toronto-and-others-propose-dnahnet-for-efficient-hierarchical-modeling-of-genomic-sequences)
  - [**99. ロンドン大学クイーン・メアリー校らが最大規模のプロテオゲノム研究を実施し、疾患の分子機構を解明**](#99-queen-mary-university-of-london-and-others-conduct-the-largest-scale-proteogenomic-study-revealing-molecular-disease-mechanisms)
  - [**100. ゲーテ大学フランクフルトらがgenESOMモデルを提案：生成AIで少数サンプルの動物実験を突破**](#100-goethe-university-frankfurt-and-others-propose-genesom-model-generative-ai-breaks-through-small-sample-animal-experiments)
- [**AI＋ヘルスケア**](#ai-healthcare)
  - [**1. 深層学習システムDeepDR Plusが眼底画像から糖尿病網膜症を予測**](#1-deepdr-plus-deep-learning-system-predicts-diabetic-retinopathy-using-fundus-images)
  - [**2. ロジスティック回帰モデルで緑地指数の高さがMetSリスクを低下させることを分析**](#2-logistic-regression-model-analyzes-that-high-green-landscape-index-reduces-mets-risk)
  - [**3. 深層学習システムが若手眼科医の診断一致度を12％向上**](#3-deep-learning-system-helps-junior-ophthalmologists-increase-diagnostic-consistency-by-12)
  - [**4. GSP-GCNがパーキンソン病診断で最大90.2％の精度を達成**](#4-gsp-gcns-achieve-up-to-902-accuracy-in-parkinsons-disease-diagnosis)
  - [**5. 乳がん予後スコアリングシステムMIRS**](#5-breast-cancer-prognosis-scoring-system-mirs)
  - [**6. 網膜画像基盤モデルRETFoundが複数の全身疾患を予測**](#6-retinal-image-foundation-model-retfound-predicts-multiple-systemic-diseases)
  - [**7. SVMで触覚センサーを最適化し、点字認識率96.12％を達成**](#7-svm-optimizes-tactile-sensors-braille-recognition-rate-reaches-9612)
  - [**8. 中国科学院北京ゲノム研究所がオープンな生物医学画像アーカイブを構築**](#8-cas-beijing-institute-of-genomics-establishes-an-open-biomedical-imaging-archive)
  - [**9. AI「Lunit」が医師に匹敵する精度でマンモグラムを読影**](#9-ai-lunit-reads-mammograms-with-accuracy-comparable-to-doctors)
  - [**10. 特徴選択戦略で乳がんバイオマーカーを検出**](#10-feature-selection-strategy-detects-breast-cancer-biomarkers)
  - [**11. 勾配ブースティングモデルがBPSDのサブシンドロームを高精度に予測**](#11-gradient-boosting-machine-model-accurately-predicts-bpsd-sub-syndrome)
  - [**12. 機械学習モデルで患者の1年死亡率を予測**](#12-machine-learning-model-predicts-patient-one-year-mortality-rate)
  - [**13. 新たなAIブレイン・コンピューター・インターフェース技術により失語症患者が「話す」ことが可能に**](#13-new-ai-brain-computer-interface-technology-allows-aphasic-patients-to-speak)
  - [**14. 深層学習に基づく人工知能で膵臓がんを検出**](#14-deep-learning-based-artificial-intelligence-detection-of-pancreatic-cancer)
  - [**15. 機械学習支援による肺がん検診の集団レベルでの有効性**](#15-population-effectiveness-of-machine-learning-assisted-lung-cancer-screening)
  - [**16. 卵巣がん診断AI融合モデルMCFが、日常的な検査データと年齢からリスクを算出**](#16-ovarian-cancer-diagnostic-ai-fusion-model-mcf-calculates-risk-using-routine-lab-data-and-age)
  - [**17. Googleが医療AIツールの公平性を評価する4段階プロセスHEALフレームワークを公開**](#17-google-releases-heal-framework-a-4-step-process-to-assess-medical-ai-tool-fairness)
  - [**18. セマンティックセグメンテーションを活用した空間トランスクリプトミクスの注釈ツールPianno**](#18-leveraging-semantic-segmentation-to-develop-spatial-transcriptomics-semantic-annotation-tool-pianno)
  - [**19. AIモデルUniFMIRが既存の蛍光顕微鏡イメージングの限界を突破**](#19-ai-model-unifmir-breaks-the-limits-of-existing-fluorescence-microscopy-imaging)
  - [**20. 深層学習システムががん生存予測の精度を向上**](#20-deep-learning-system-improves-the-accuracy-of-cancer-survival-prediction)
  - [**21. MemSAMが「Segment Anything」モデルを医療動画のセグメンテーションに適応**](#21-memsam-adapts-segment-anything-model-for-medical-video-segmentation)
  - [**22. 医療画像セグメンテーションモデルMedical SAM 2がSOTAランキングで首位に**](#22-medical-image-segmentation-model-medical-sam-2-tops-the-sota-leaderboard)
  - [**23. 機械学習で化学療法抵抗性と腫瘍再発に立ち向かい、乳がん幹細胞への強固な防御を構築**](#23-machine-learning-fights-chemotherapy-resistance-and-tumor-recurrence-building-a-strong-defense-against-breast-cancer-stem-cells)
  - [**24. 糖尿病ケア向け視覚言語モデルDeepDR-LLMがNature姉妹誌に掲載**](#24-vision-language-model-deepdr-llm-for-diabetes-care-published-in-nature-sub-journal)
  - [**25. ベテラン病理医に匹敵！清華大学のチームが神経膠腫の精密診断に向けAI基盤モデルROAMを提案**](#25-leveling-with-senior-pathologists-tsinghua-team-proposes-ai-foundation-model-roam-for-precise-glioma-diagnosis)
  - [**26. 汎用医療画像セグメンテーションモデルScribblePromptがSAMベースのモデルを上回る**](#26-universal-medical-image-segmentation-model-scribbleprompt-outperforms-sam-based-models)
  - [**27. デジタルツイン脳プラットフォームが人間の脳に似た臨界現象と認知機能を実証**](#27-digital-twin-brain-platform-demonstrates-critical-phenomena-and-cognitive-functions-similar-to-the-human-brain)
  - [**28. 自動LLM対話エージェントシミュレーションシステムがうつ病の初期診断を実施**](#28-automated-llm-dialogue-agent-simulation-system-performs-initial-diagnosis-for-depression)
  - [**29. 深層学習モデルLucaProtがRNAウイルスの特定を支援**](#29-deep-learning-model-lucaprot-aids-in-rna-virus-identification)
  - [**30. 医療画像事前学習フレームワークUniMedIが医療データの異質性による障壁を解消**](#30-medical-image-pre-training-framework-unimedi-breaks-down-medical-data-heterogeneity-barriers)
  - [**31. 多言語医療大規模モデルMMed-Llama 3が医療応用シナリオへの適応を向上**](#31-multilingual-medical-large-model-mmed-llama-3-better-adapts-to-medical-application-scenarios)
  - [**32. カプセル内視鏡画像のスティッチング手法S2P-Matchingが画像再構成を支援**](#32-capsule-endoscopy-image-stitching-method-s2p-matching-assists-in-image-reconstruction)
  - [**33. マルチモーダル医療ベンチマークGMAI-MMBenchは18の臨床タスクを網羅する284データセットを収録**](#33-multimodal-medical-benchmark-gmai-mmbench-features-284-datasets-covering-18-clinical-tasks)
  - [**34. 新しい時系列予測法CGS-Maskが患者の生存率を左右する重要指標を発見**](#34-novel-time-series-forecasting-method-cgs-mask-uncovers-key-indicators-for-patient-survival-rates)
  - [**35. 非侵襲的脳デコーディングフレームワークfMRIがブレイン・コンピューター・インターフェースと認知モデルの基盤を構築**](#35-non-invasive-brain-decoding-framework-fmri-lays-the-foundation-for-brain-computer-interfaces-and-cognitive-models)
  - [**36. 医療画像セグメンテーションモデルM2CF-Netがシェーグレン症候群の診断精度を向上**](#36-medical-image-segmentation-model-m2cf-net-improves-diagnosis-accuracy-for-sjogrens-syndrome)
  - [**37. BSAFusionがマルチモーダル医療画像の位置合わせと融合を可能に**](#37-bsafusion-enables-alignment-and-fusion-of-multimodal-medical-images)
  - [**38. マルチエージェントLLMフレームワークKG4Diagnosisが一般的な362疾患の診断を支援**](#38-multi-agent-llm-framework-kg4diagnosis-assists-in-diagnosing-362-common-diseases)
  - [**39. 画像セグメンテーションモデルConDSegが医療画像における境界の曖昧さと共起の問題を解決**](#39-image-segmentation-model-condseg-solves-soft-boundary-and-co-occurrence-issues-in-medical-imaging)
  - [**40. 医療モデルM³FMが疾患レポートと分類に対応するゼロショット臨床診断を実現**](#40-medical-model-m³fm-enables-zero-shot-clinical-diagnosis-supporting-disease-reporting-and-classification)
  - [**41. 頭蓋骨CTからの深層学習による性別推定が法医学専門家を上回る**](#41-deep-learning-based-sex-estimation-from-skull-ct-scans-outperforms-human-forensic-experts)
  - [**42. AIが医学研究を後押し：大規模モデルがプライマリケア医の研修を支える「最良のパートナー」に**](#42-ai-boosts-medical-research-large-models-become-the-golden-partner-for-training-primary-care-physicians)
  - [**43. 深層学習アルゴリズムAcneDGNetがニキビ病変の検出と重症度分類を実現**](#43-acnedgnet-deep-learning-algorithm-achieves-acne-lesion-detection-and-grading)
  - [**44. マルチモーダル医療画像セグメンテーションモデルVISTA3Dが公開され、3D画像の自動セグメンテーションと対話的操作を実現**](#44-multimodal-medical-image-segmentation-model-vista3d-released-achieving-3d-image-auto-segmentation-and-interaction)
  - [**45. マルチプレーン心エコー統合セグメンテーションモデルEchoONEが複数断面を高精度にセグメント化**](#45-multi-plane-echocardiography-unified-segmentation-model-echoone-accurately-segments-multiple-planes)
  - [**46. マルチエージェント対話フレームワークが診察をシミュレートし、疾患診断を支援**](#46-multi-agent-dialogue-framework-simulates-medical-consultations-to-aid-disease-diagnosis)
  - [**47. 深層学習フレームワークSTAIGが腫瘍微小環境の詳細な遺伝情報を明らかに**](#47-deep-learning-framework-staig-reveals-detailed-genetic-information-in-the-tumor-microenvironment)
  - [**48. 初のオールインワン医療画像再識別フレームワークMaMIが11データセットすべてでSOTAを達成**](#48-first-all-in-one-medical-image-re-identification-framework-mami-reaches-sota-across-11-datasets)
  - [**49. 多対一回帰モデルM2OSTがデジタル病理画像から遺伝子発現を高精度に予測**](#49-many-to-one-regression-model-m2ost-accurately-predicts-gene-expression-using-digital-pathology-images)
  - [**50. 脳MRIスキャンツールMindGlideが多発性硬化症病変を定量化**](#50-brain-mri-scanning-tool-mindglide-quantifies-multiple-sclerosis-lesions)
  - [**51. 階層蒸留型マルチインスタンス学習フレームワークHDMILがギガピクセルの全スライド画像を高速処理**](#51-hierarchical-distillation-multi-instance-learning-framework-hdmil-rapidly-processes-gigapixel-whole-slide-images)
  - [**52. 汎用3D血管セグメンテーション基盤モデルvesselFMがSAMベースのモデルを大きく上回る**](#52-universal-3d-blood-vessel-segmentation-foundation-model-vesselfm-far-exceeds-sam-based-models)
  - [**53. グラフニューラルネットワークが肺がんの生存率を高精度に予測し、致死性の高い3つのサブタイプを発見**](#53-graph-neural-networks-accurately-predict-lung-cancer-survival-discovering-3-fatal-subtypes)
  - [**54. 融合戦略を用いたAIモデルが敗血症性ショックの死亡リスクを予測**](#54-fusion-strategy-ai-model-predicts-septic-shock-mortality-risk)
  - [**55. HIEにおける世界初の臨床Graph-of-Thoughtモデルが神経認知予後予測を15％向上**](#55-worlds-first-clinical-graph-of-thought-model-in-hie-improves-neurocognitive-outcome-prediction-by-15)
  - [**56. 多次元EHRデータによる患者コホートの詳細なモデル化で在院日数予測精度が16.3％向上**](#56-fine-grained-patient-cohort-modeling-using-multidimensional-ehr-data-increases-length-of-stay-prediction-accuracy-by-163)
  - [**57. 深層学習モデルAPEXが抗生物質候補をスクリーニング**](#57-deep-learning-model-apex-screens-potential-antibiotic-candidates)
  - [**58. 遺伝子シーケンシングと機械学習による下水疫学評価：ICA-Var法がウイルスを最大4週間早く検出**](#58-wastewater-epidemiology-assessment-using-gene-sequencing-and-machine-learning-ica-var-method-detects-viruses-up-to-4-weeks-early)
  - [**59. 双方向ブラウン橋拡散モデルが仮想染色の再現性を向上**](#59-bidirectional-brownian-bridge-diffusion-model-enhances-reproducibility-of-virtual-staining)
  - [**60. 医療GraphRAGがQA精度記録を更新し、11のベンチマークデータセットでSOTAを達成**](#60-medical-graphrag-breaks-qa-accuracy-records-achieving-sota-on-11-benchmark-datasets)
  - [**61. Healthcare Agentが医療倫理・安全性に関する問題を自動検出**](#61-healthcare-agent-automatically-detects-medical-ethics-and-safety-issues)
  - [**62. 血球画像分類器CytoDiffusionが白血病の発見を支援し、臨床専門家を上回る**](#62-blood-cell-image-classifier-cytodiffusion-assists-in-discovering-leukemia-surpassing-clinical-experts)
  - [**63. UCLのチームが施設間の血液形態解析向け連合学習フレームワークMORPHFEDを提案**](#63-ucl-team-proposes-federated-learning-framework-morphfed-for-cross-institutional-blood-morphology-analysis)
  - [**64. フランスの研究チームが肝細胞がん肝移植候補者の死亡率を高精度に予測する、説明可能な機械学習フレームワークを提案**](#64-french-team-proposes-explainable-machine-learning-framework-for-accurate-mortality-prediction-in-hcc-liver-transplant-candidates)
  - [**65. スタンフォード大学が初のネイティブ3D腹部CT視覚言語モデルMerlinを提案**](#65-stanford-university-proposes-merlin-the-first-native-3d-abdominal-ct-vision-language-model)
- [**AI＋材料化学**](#ai-materials-chemistry)
  - [**1. ハイスループット計算フレームワークが33分で新規MOF候補12万件を生成**](#1-high-throughput-computational-framework-generates-120000-novel-mof-candidates-in-33-minutes)
  - [**2. 機械学習アルゴリズムでP-SOC電極材料をスクリーニング**](#2-machine-learning-algorithm-screens-p-soc-electrode-materials)
  - [**3. SEN機械学習モデルが材料特性を高精度に予測**](#3-sen-machine-learning-model-achieves-high-accuracy-material-property-predictions)
  - [**4. 深層学習ツールGNoMEが220万種の新しい結晶を発見**](#4-deep-learning-tool-gnome-discovers-22-million-new-crystals)
  - [**5. 外場誘起型再帰埋め込み原子ニューラルネットワークが外場の強度・方向の変化を高精度に記述**](#5-field-induced-recursively-embedded-atom-neural-network-accurately-describes-external-field-strength-and-direction-changes)
  - [**6. 機械学習で多孔質材料の水吸着等温線を予測**](#6-machine-learning-predicts-water-adsorption-isotherms-of-porous-materials)
  - [**7. BiVO(4)光アノード用共触媒の最適化に機械学習を活用**](#7-using-machine-learning-to-optimize-co-catalysts-for-bivo4-photoanodes)
  - [**8. 深層学習に基づく逆合成予測アルゴリズムRetroExplainer**](#8-retroexplainer-algorithm-performs-retrosynthesis-prediction-based-on-deep-learning)
  - [**9. 深層ニューラルネットワークとNLPで耐食合金を開発**](#9-deep-neural-networks--nlp-used-to-develop-corrosion-resistant-alloys)
  - [**10. 深層学習が表面観察から材料内部の構造を特定**](#10-deep-learning-determines-materials-internal-structures-through-surface-observations)
  - [**11. 革新的なX線シンチレーターを用いて新材料3種を開発**](#11-developing-3-new-materials-using-innovative-x-ray-scintillators)
  - [**12. 半教師あり学習でラベルなしデータから隠れた情報を抽出**](#12-semi-supervised-learning-extracts-hidden-information-from-unlabeled-data)
  - [**13. AutoMLに基づく知識抽出の自動化**](#13-automated-knowledge-extraction-based-on-automl)
  - [**14. Uni-MOF：3D MOF材料の吸着挙動を予測する機械学習モデル**](#14-uni-mof-a-machine-learning-model-predicting-adsorption-behavior-in-3d-mof-materials)
  - [**15. マイクロエレクトロニクスがポスト・ムーア時代へ！DNNとナノメンブレン技術の統合で入射光角度を精密分析**](#15-microelectronics-accelerates-towards-the-post-moore-era-integrating-dnn-with-nanomembrane-technology-to-precisely-analyze-incident-light-angles)
  - [**16. リチウム電池性能の限界を塗り替える、アンサンブル学習に基づく簡略化電気化学モデルを提案**](#16-reshaping-lithium-battery-performance-boundaries-proposing-a-simplified-electrochemical-model-based-on-ensemble-learning)
  - [**17. 機械学習によって最強の鉄系超伝導磁石が誕生**](#17-the-strongest-iron-based-superconducting-magnet-born-via-machine-learning)
  - [**18. ニューラルネットワークが密度汎関数理論を代替！汎用材料モデルが超高精度予測を実現**](#18-neural-networks-replace-density-functional-theory-universal-materials-model-achieves-ultra-precise-predictions)
  - [**19. ニューラルネットワーク密度汎関数フレームワークが物質の電子構造予測のブラックボックスを解明**](#19-neural-network-density-functional-framework-opens-the-black-box-of-matters-electronic-structure-prediction)
  - [**20. ニューラルネットワークを用いる光コンピューティング初の完全フォワードモード学習アーキテクチャが国内光チップの大きな進展を実現**](#20-first-fully-forward-mode-training-architecture-for-optical-computing-using-neural-networks-achieves-major-breakthrough-in-domestic-optical-chips)
  - [**21. 化学LLM ChemLLMが700万件のQAデータを網羅し、専門能力でGPT-4に匹敵**](#21-chemistry-llm-chemllm-covers-7-million-qa-data-professional-capabilities-rival-gpt-4)
  - [**22. ウェハースケールで製造可能なAI適応型マイクロ分光器**](#22-wafer-scale-producible-ai-adaptive-micro-spectrometers)
  - [**23. GNNOptモデルが太陽電池と量子材料の候補を数百件特定**](#23-gnnopt-model-identifies-hundreds-of-solar-cell-and-quantum-material-candidates)
  - [**24. オープンなOMat24データセットにDFT計算結果1億1,000万件を収録**](#24-open-omat24-dataset-contains-110-million-dft-calculation-results)
  - [**25. 機械学習で合成した新規耐火高エントロピー合金が優れた室温延性を実現**](#25-novel-refractory-high-entropy-alloy-synthesized-via-machine-learning-boasts-excellent-room-temperature-ductility)
  - [**26. 材料生成モデルFlowLLMが4万5,000件超の材料を含むデータセットを収録**](#26-material-generative-model-flowllm-features-a-dataset-covering-over-45k-materials)
  - [**27. 能動学習で高エントロピー酸化物1万4,000種を特定し、高活性水素発生触媒4種のスクリーニングに成功**](#27-using-active-learning-to-identify-14000-high-entropy-oxides-successfully-screening-4-high-activity-hydrogen-evolution-catalysts)
  - [**28. 深層学習モデルBETE-NETが超伝導材料探索の効率を5倍に向上**](#28-deep-learning-model-bete-net-boosts-superconducting-material-search-efficiency-by-5x)
  - [**29. 勾配ブースティング決定木（GBDT）技術により高エントロピー合金の耐酸化性をさらに高精度に予測**](#29-gradient-boosting-decision-tree-gbdt-technology-further-improves-high-precision-prediction-of-high-entropy-alloy-oxidation-resistance)
  - [**30. 分子設計フレームワークRingFormerが有機材料分子の光電子特性をより正確に予測**](#30-molecular-design-framework-ringformer-more-precisely-predicts-organic-material-molecular-optoelectronic-properties)
  - [**31. 無機材料の逆合成計画法Retrieval-Retroが無機材料の合成効率と精度を向上**](#31-inorganic-retrosynthesis-planning-method-retrieval-retro-improves-inorganic-material-synthesis-efficiency-and-accuracy)
  - [**32. 大規模モデルで水素化物固体電解質の伝導機構を解読し、信頼性の高い活性化エネルギー予測モデルを構築**](#32-using-large-models-to-decipher-hydride-solid-state-electrolyte-conduction-mechanisms-establishing-a-reliable-activation-energy-prediction-model)
  - [**33. 機械学習でテラスケールの質量分析データを検索し、未知の化学反応を発見**](#33-tera-scale-mass-spectrometry-data-search-enabled-by-machine-learning-uncovers-unknown-chemical-reactions)
  - [**34. 拡散モデルに基づく生成AI構造解法PXRDnetが複雑なシミュレーションナノ結晶200個の解明に成功**](#34-generative-ai-structure-solution-method-pxrdnet-based-on-diffusion-models-successfully-solves-200-complex-simulated-nanocrystals)
  - [**35. DreaMSモデルが分子質量スペクトル2億件を網羅し、世界最大の質量分析データセットGeMSを構築**](#35-dreams-model-covers-200-million-molecular-mass-spectra-building-the-worlds-largest-mass-spec-dataset-gems)
  - [**36. 等変機械学習フレームワークが材料の大規模電場シミュレーションを加速**](#36-equivariant-machine-learning-framework-accelerates-large-scale-electric-field-simulations-of-materials)
  - [**37. マルチソースデータ統合法でセメントクリンカー代替材25種をスクリーニング、温室効果ガス12億トンの削減に相当**](#37-multi-source-data-integration-method-screens-25-types-of-cement-clinker-alternatives-equivalent-to-reducing-12-billion-tons-of-greenhouse-gases)
  - [**38. UNIMATEがトポロジー生成と特性予測の統一的なモデル化を初めて実現**](#38-unimate-achieves-unified-modeling-of-topology-generationproperty-prediction-for-the-first-time)
  - [**39. 全原子拡散Transformerフレームワークが周期・非周期原子系の統一的生成を初めて可能に**](#39-all-atom-diffusion-transformer-framework-enables-unified-generation-of-periodic-and-aperiodic-atomic-systems-for-the-first-time)
  - [**40. FASTSOLVモデルが任意の温度での小分子溶解度予測を実現し、推論速度を50倍に向上**](#40-fastsolv-model-realizes-small-molecule-solubility-prediction-at-any-temperature-accelerating-inference-speed-by-50x)
  - [**41. マルチモーダル機械学習モデルに基づく新手法が完全な結晶構造なしで材料特性を予測**](#41-novel-method-based-on-multimodal-machine-learning-models-predicts-material-properties-without-complete-crystal-structures)
  - [**42. AIモデルCGformerがグローバル注意機構を独創的に統合し、高エントロピー材料の研究開発を支援**](#42-ai-model-cgformer-innovatively-integrates-global-attention-mechanisms-aiding-high-entropy-material-rd)
  - [**43. 新たな構造制約統合法SCIGENはあらゆる事前学習済み拡散モデルに適応**](#43-novel-structural-constraint-integration-method-scigen-adapts-to-any-pre-trained-diffusion-model)
  - [**44. 物理情報に基づく生成AIモデルSpectroGenは単一モダリティ入力だけで、実験値との相関99％のクロスモーダル生成を実現**](#44-physically-informed-generative-ai-model-spectrogen-requires-only-single-modality-input-to-achieve-cross-modal-generation-with-99-experimental-correlation)
  - [**45. MOF-ChemUnityがMOFに関する包括的知識を再構築し、材料発見を「説明可能なAI」の時代へ**](#45-mof-chemunity-reconstructs-mof-panoramic-knowledge-pushing-material-discovery-into-the-explainable-ai-era)
  - [**46. 軽量汎用ポテンシャルモデルPET-MADが公開され、少数サンプルで専用モデル級の精度を達成**](#46-lightweight-universal-potential-model-pet-mad-released-achieving-dedicated-model-level-precision-with-minimal-samples)
  - [**47. AIシステムChemOntologyが公開、化学知識の統合により反応経路探索コストを半減**](#47-ai-system-chemontology-released-halving-reaction-path-search-costs-by-integrating-chemical-knowledge)
  - [**48. プリンストン大学らがMOFの自由エネルギーを予測するLLM手法を提案し、合成可能性を高精度に評価**](#48-princeton-and-others-jointly-propose-llm-method-for-predicting-mof-free-energy-highly-accurately-assessing-synthesis-feasibility)
  - [**49. イェール大学のチームがLLMを連携させて信頼性の高い化学合成計画を生成するMOSAICモデルを提案**](#49-yale-university-team-proposes-mosaic-model-coordinating-llms-to-generate-highly-reliable-chemical-synthesis-schemes)
  - [**50. MITらが材料合成経路の生成的計画を可能にする拡散モデルDiffSynを提案**](#50-mit-and-others-propose-diffusion-model-diffsyn-enabling-generative-planning-of-material-synthesis-pathways)
  - [**51. ミシガン大学とFarasis Energyが「Discovery Learning」法を共同提案し、電池寿命予測サイクルを大幅に短縮**](#51-university-of-michigan-and-farasis-energy-jointly-propose-discovery-learning-method-drastically-shortening-battery-life-prediction-cycles)
  - [**52. コーネル大学が電池電解質の性能を高精度に予測・説明するSCANフレームワークを提案**](#52-cornell-university-proposes-scan-framework-highly-accurately-predicting-and-explaining-battery-electrolyte-performance)
  - [**53. MITが材料内部欠陥を非破壊で特性評価・定量化する基盤大規模モデルDefectNetを提案**](#53-mit-proposes-foundation-large-model-defectnet-for-non-destructive-characterization-and-quantification-of-internal-material-defects)
  - [**54. コーネル大学が電子顕微鏡画像の全工程自動解析を実現するマルチエージェントプラットフォームEMSeekを提案**](#54-cornell-university-proposes-multi-agent-platform-emseek-achieving-full-pipeline-automated-analysis-of-electron-microscopy-images)
- [**AI＋動植物学**](#ai-zoology-botany)
  - [**1. 少数ショット学習フレームワークに基づくSBeAが動物の社会行動を分析**](#1-sbea-analyzes-animal-social-behaviors-based-on-a-few-shot-learning-framework)
  - [**2. シャムネットワークに基づく深層学習法で胚の発生過程を自動的に捉える**](#2-deep-learning-method-based-on-siamese-networks-automatically-captures-embryonic-development-processes)
  - [**3. ドローンで植物の表現型データを収集し、最適な収穫日を予測する体系的パイプライン**](#3-systematic-pipeline-for-collecting-plant-phenotype-data-via-drones-to-predict-optimal-harvest-dates)
  - [**4. AIカメラ警報システムがトラと他種を高精度に識別**](#4-ai-camera-alert-system-accurately-distinguishes-tigers-from-other-species)
  - [**5. ラブラドール・レトリバーのデータを用いた3モデルの比較で、探知犬の性能を左右する行動特性を解明**](#5-using-labrador-retriever-data-and-comparing-3-models-reveals-behavioral-traits-affecting-detection-dogs-performance)
  - [**6. ArcFace分類ヘッドに基づく複数種の顔画像認識モデル**](#6-multi-species-image-recognition-model-based-on-arcface-classification-head-for-face-recognition)
  - [**7. Python APIとコンピュータービジョンAPIを使って日本の桜の開花を監視**](#7-monitoring-cherry-blossom-blooming-in-japan-using-python-api-and-computer-vision-api)
  - [**8. 機械学習に基づく集団遺伝学的手法でブドウの風味形成メカニズムを解明**](#8-machine-learning-based-population-genetics-method-reveals-the-formation-mechanism-of-grape-flavors)
  - [**9. レビュー：AIでバイオインフォマティクス研究をより効率的に切り開く**](#9-review-unlocking-bioinformatics-research-more-efficiently-with-ai)
  - [**10. BirdFlowモデルが渡り鳥の飛行経路を高精度に予測**](#10-birdflow-model-accurately-predicts-flight-paths-of-migratory-birds)
  - [**11. 新たなクジラ生物音響モデルが鯨類8種を識別**](#11-new-whale-bioacoustics-model-identifies-8-cetacean-species)
  - [**12. 機械学習でマッコウクジラの音声アルファベットを解明。人間の言語に酷似し、より強い情報伝達能力を持つ**](#12-machine-learning-isolates-the-sperm-whale-phonetic-alphabet-highly-similar-to-human-language-with-stronger-information-carrying-capacity)
  - [**13. PlantLncBoostモデルが種をまたぐlncRNA予測で最大96％の精度を達成**](#13-plantlncboost-model-achieves-up-to-96-accuracy-in-cross-species-lncrna-prediction)
  - [**14. Perch 2.0が約1万5,000種を網羅し、生物音響分類検出でSOTAを更新**](#14-perch-20-covers-nearly-15000-species-refreshing-sota-in-bioacoustic-classification-detection)
- [**AI＋農林畜産**](#ai-agriculture-forestry-animal-husbandry)
  - [**1. 畳み込みニューラルネットワークで稲の収量を迅速かつ高精度に推定**](#1-using-convolutional-neural-networks-for-rapid-and-accurate-rice-yield-estimation)
  - [**2. YOLOv5アルゴリズムで設計したモデルが母豚の姿勢と子豚の出生を監視**](#2-model-designed-via-yolov5-algorithm-monitors-sow-posture-and-piglet-birth)
  - [**3. 実験室での観察と機械学習を組み合わせ、ストレスを受けたトマトとタバコが発する超音波の空気中伝搬を実証**](#3-combining-laboratory-observation-and-machine-learning-to-prove-that-ultrasonic-sounds-emitted-by-stressed-tomato-and-tobacco-plants-can-travel-in-air)
  - [**4. ドローンとAI画像解析で森林害虫を検出**](#4-drone--ai-image-analysis-detects-forestry-pests)
  - [**5. コンピュータービジョンと深層学習で乳牛の跛行検出システムを開発**](#5-computer-vision--deep-learning-developed-for-a-dairy-cow-lameness-detection-system)
- [**AI＋気象学**](#ai-meteorology)
  - [**1. レビュー：データ駆動型機械学習による気象予測モデル**](#1-review-data-driven-machine-learning-weather-forecasting-models)
  - [**2. レビュー：雹嵐の発生中心地からデータを収集し、大規模モデルで極端気象を予測**](#2-review-collecting-data-from-hailstorm-centers-and-predicting-extreme-weather-using-large-models)
  - [**3. 全球ストーム解像シミュレーションと機械学習で極端降水を高精度に予測する新アルゴリズムを作成**](#3-creating-new-algorithms-to-accurately-predict-extreme-precipitation-using-global-storm-resolving-simulations-and-machine-learning)
  - [**4. ランダムフォレストに基づく機械学習モデルCSU-MLPが中期の荒天を予測**](#4-random-forest-based-machine-learning-model-csu-mlp-predicts-medium-range-severe-weather)
  - [**5. エンドツーエンドのデータ駆動型気象予測システムAardvark Weatherが従来手法より数十倍高速化**](#5-end-to-end-data-driven-weather-forecasting-system-aardvark-weather-speeds-up-predictions-by-dozens-of-times-compared-to-traditional-methods)
  - [**6. 機械学習気象予測システムFCN3が単一GPUでの超高速推論に対応**](#6-machine-learning-weather-forecasting-system-fcn3-supports-ultra-fast-single-gpu-inference)
  - [**7. 36の気象観測所に基づくインドモンスーン予測モデルが都市規模の詳細な予測を実現**](#7-indian-monsoon-forecasting-model-based-on-36-weather-stations-achieves-city-scale-fine-forecasting)
  - [**8. ACE2がわずか2分で4か月間の季節予報を完了**](#8-ace2-completes-a-4-month-seasonal-forecast-in-just-2-minutes)
  - [**9. 増分型気象予測モデルVA-MoEが公開、パラメーターを75％削減しながらSOTA性能を達成**](#9-incremental-weather-forecasting-model-va-moe-released-achieving-sota-performance-with-75-parameter-reduction)
  - [**10. 明示的ローリング拡散モデル（ERDM）が公開、長期予測の課題を解決し、中長期予測でEDMベースラインをリード**](#10-elucidated-rolling-diffusion-model-erdm-released-solving-long-term-forecasting-challenges-and-maintaining-a-lead-over-edm-baselines-in-medium-to-long-term-forecasts)
  - [**11. 新しい潜在拡散モデルOmniCastが公開され、自己回帰型気象予測モデルの誤差蓄積を解消**](#11-novel-latent-diffusion-model-omnicast-released-resolving-error-accumulation-in-autoregressive-weather-forecasting-models)
  - [**12. NVIDIAが長期気象予測におけるAIのボトルネックを突破する新たな長距離蒸留法を提案**](#12-nvidia-proposes-a-novel-long-range-distillation-method-breaking-ai-bottlenecks-in-long-term-weather-forecasting)
  - [**13. 共同研究チームがグラフニューラルネットワークモデルSeaCastを提案し、地域海洋の超高速予測を実現**](#13-joint-team-proposes-graph-neural-network-model-seacast-achieving-ultra-fast-regional-ocean-forecasting)
- [**AI＋天文学**](#ai-astronomy)
  - [**1. PRIMOアルゴリズムがブラックホール周辺の光伝播則を学習し、より鮮明なブラックホール画像を再構成**](#1-primo-algorithm-learns-light-propagation-rules-around-black-holes-to-reconstruct-sharper-black-hole-images)
  - [**2. シミュレーションデータでコンピュータービジョンアルゴリズムを学習させ、天体画像を鮮明化・「復元」**](#2-training-computer-vision-algorithms-with-simulated-data-to-sharpen-and-restore-astronomical-images)
  - [**3. 教師なし機械学習アルゴリズムAstronomalyで、これまで見過ごされていた異常を発見**](#3-using-unsupervised-machine-learning-algorithm-astronomaly-to-find-previously-overlooked-anomalies)
  - [**4. CMEの識別とパラメーター抽出のための機械学習ベースの手法**](#4-machine-learning-based-method-for-cme-identification-and-parameter-extraction)
  - [**5. 深層学習で中性炭素吸収線107例を発見**](#5-deep-learning-discovers-107-cases-of-neutral-carbon-absorption-lines)
  - [**6. StarFusionモデルが高空間分解能画像の予測を実現**](#6-starfusion-model-achieves-high-spatial-resolution-image-prediction)
  - [**7. SD3に基づく衛星画像生成法で、これまでで最大のリモートセンシングデータセットEcoMapperを構築**](#7-satellite-image-generation-method-developed-based-on-sd3-constructing-the-largest-remote-sensing-dataset-to-date-ecomapper)
  - [**8. 地理空間AI Earth AIが3つの中核データ型に注目し、地理空間推論能力を64％向上**](#8-geospatial-ai-earth-ai-focuses-on-3-core-data-types-improving-geospatial-reasoning-capabilities-by-64)
  - [**9. 初の天文学マルチモーダル基盤モデルAION-1が誕生、2億天体で事前学習**](#9-the-first-astronomical-multimodal-foundation-model-aion-1-is-born-pre-trained-on-200-million-astronomical-targets)
  - [**10. 新たなデータ駆動型パイプラインがCNNを用いて81万個のクエーサーから希少な重力レンズ候補7件を正確に特定**](#10-novel-data-driven-pipeline-precisely-identifies-7-rare-lensed-samples-from-810000-quasars-using-cnn)
  - [**11. ESAチームが半教師あり手法AnomalyMatchを提案し、ハッブルの記録約1億件から希少天体を効率的にスクリーニング**](#11-esa-team-proposes-semi-supervised-method-anomalymatch-to-efficiently-screen-rare-celestial-bodies-from-nearly-100-million-hubble-records)
  - [**12. ウォーリック大学が検証パイプラインRAVENを提案し、新たな系外惑星118個を確認**](#12-university-of-warwick-proposes-the-raven-validation-pipeline-confirming-118-new-exoplanets)
  - [**13. ウォーリック大学がδ Scuti星の星震学的パラメーターを高精度に予測するアンサンブル学習フレームワークを提案**](#13-university-of-warwick-proposes-an-ensemble-learning-framework-to-highly-accurately-predict-asteroseismic-parameters-for-δ-scuti-stars)
  - [**14. スペインの研究チームが天体画像中の衛星の軌跡をAIで自動検出するStreakMindシステムを提案**](#14-spanish-research-team-proposes-the-streakmind-system-utilizing-ai-to-automatically-detect-satellite-streaks-in-astronomical-images)
- [**AI＋自然災害**](#ai-natural-disaster)
  - [**1. 機械学習で今後40年間の地盤沈下リスクを予測**](#1-machine-learning-predicts-land-subsidence-risk-over-the-next-40-years)
  - [**2. 地滑りマッピングにセマンティックセグメンテーションモデルSCDUNet++を活用**](#2-semantic-segmentation-model-scdunet-used-for-landslide-mapping)
  - [**3. ニューラルネットワークで2D太陽画像を3D再構成画像に変換**](#3-neural-networks-convert-2d-solar-images-into-3d-reconstructed-images)
  - [**4. 加法ニューラルネットワークで自然災害の影響要因を分析**](#4-additive-neural-networks-analyze-influencing-factors-in-natural-disasters)
  - [**5. 説明可能なAIを用いてオーストラリア・ギップスランドのさまざまな地理的要因を分析**](#5-using-explainable-ai-to-analyze-various-geographical-factors-in-gippsland-australia)
  - [**6. 機械学習に基づく洪水予測モデル**](#6-machine-learning-based-flood-forecasting-model)
  - [**7. ED-DLSTMが観測所のない地域での洪水予測を実現**](#7-ed-dlstm-achieves-flood-prediction-in-unmonitored-areas)
  - [**8. ChloroFormerモデルが海洋の藻類ブルームを早期警告**](#8-chloroformer-model-provides-early-warning-of-marine-algal-blooms)
  - [**9. 初の海洋大規模言語モデルOceanGPTがACL 2024に採択！水中具現化AIが現実に**](#9-the-first-marine-large-language-model-oceangpt-accepted-by-acl-2024-underwater-embodied-ai-becomes-reality)
  - [**10. AIで地球温暖化の傾向を予測**](#10-ai-predicts-global-warming-trends)
  - [**11. 新たなGeoAIモデルがチベット高原の地表熱流分布を説明**](#11-new-geoai-model-explains-surface-heat-flow-distribution-on-the-tibetan-plateau)
  - [**12. 海洋環境予測大規模モデル「文海」が数値海洋予測を上回る**](#12-wenhai-marine-environment-intelligent-forecasting-large-model-outperforms-numerical-marine-forecasting)
  - [**13. ミネソタ大学が知識誘導型機械学習モデルFHNNを提案し、洪水の高精度予測を実現**](#13-university-of-minnesota-proposes-knowledge-guided-machine-learning-model-fhnn-realizing-high-precision-flood-forecasting)
  - [**14. Googleが全球洪水予測システムのバージョン2を公開し、予測可能期間を大幅に延長**](#14-google-releases-version-2-of-its-global-flood-forecasting-system-significantly-extending-valid-forecast-times)
- [**その他**](#others)
  - [**1. サッカー戦術アシスタントTacticAIが戦術配置で90％の実用性を達成**](#1-tacticai-football-assistant-hits-90-practical-utility-in-tactical-layouts)
  - [**2. ノイズ除去拡散モデルSPDiffが長距離の群衆移動シミュレーションを可能に**](#2-denoising-diffusion-model-spdiff-enables-long-range-crowd-movement-simulation)
  - [**3. インテリジェントな科学施設が研究のパラダイム転換を推進**](#3-intelligent-scientific-facilities-drive-paradigm-shifts-in-research)
  - [**4. DeepSymNetが教師あり学習に基づいて記号表現を行う**](#4-deepsymnet-represents-symbolic-expressions-based-on-supervised-learning)
  - [**5. 大規模言語モデルChipNeMoがチップ設計エンジニアを支援**](#5-large-language-model-chipnemo-assists-engineers-in-chip-design)
  - [**6. AlphaGeometryが幾何学の問題を解く**](#6-alphageometry-can-solve-geometry-problems)
  - [**7. 強化学習を都市空間計画に応用**](#7-reinforcement-learning-applied-to-urban-spatial-planning)
  - [**8. ChatArenaフレームワーク：大規模言語モデルで人狼ゲームをプレイ**](#8-chatarena-framework-playing-werewolf-with-large-language-models)
  - [**9. レビュー：30人の研究者がNatureに共同発表、10年間を振り返りAIが科学のパラダイムをどう変えたかを分析**](#9-review-30-scholars-co-publish-in-nature-10-year-retrospective-deconstructs-how-ai-reshapes-scientific-paradigms)
  - [**10. Ithacaが碑文学者によるテキストの復元、年代判定、地理的帰属を支援**](#10-ithaca-assists-epigraphers-in-text-restoration-chronological-attribution-and-geographical-attribution)
  - [**11. メタ光学の順問題・逆問題におけるAI：メタサーフェスシステムに基づくデータ分析**](#11-ai-in-forward-and-inverse-problems-of-meta-optics-data-analysis-based-on-metasurface-systems)
  - [**12. 新たな地理空間AI手法：地理的ニューラルネットワーク加重ロジスティック回帰**](#12-a-new-geospatial-artificial-intelligence-method-geographically-neural-network-weighted-logistic-regression)
  - [**13. 拡散モデルでニューラルネットワークのパラメーターを生成し、時空間少数ショット学習を拡散モデルの事前学習問題に変換**](#13-using-diffusion-models-to-generate-neural-network-parameters-transforming-spatiotemporal-few-shot-learning-into-a-diffusion-model-pre-training-problem)
  - [**14. 李飛飛のチームによる最新のAI4S知見：生物学・材料・ヘルスケア・診断を含む16の革新的技術を総括**](#14-latest-ai4s-insights-from-fei-fei-lis-team-16-innovative-technologies-summarized-covering-biologymaterialshealthcarediagnostics)
  - [**15. 武漢の住宅価格を正確に予測！osp-GNNWRモデルが複雑な空間過程と地理現象を精緻に記述**](#15-accurate-prediction-of-wuhan-housing-prices-osp-gnnwr-model-accurately-describes-complex-spatial-processes-and-geographical-phenomena)
  - [**16. ゼロショット学習を導入し、甲骨文字解読に最適化された条件付き拡散モデルを公開**](#16-introducing-zero-shot-learning-to-release-a-conditional-diffusion-model-optimized-for-oracle-bone-script-decipherment)
  - [**17. スタンフォード大学・Appleなど24機関がDCLMベンチマークを公開、基盤モデルがLlama3 8Bに匹敵**](#17-stanfordapple-and-23-other-institutions-release-the-dclm-benchmark-foundation-model-performs-on-par-with-llama3-8b)
  - [**18. PoCoがデータソースの異質性というジレンマを解消し、ロボットによる複数タスクの柔軟な実行を可能に**](#18-poco-solves-the-data-source-heterogeneity-dilemma-enabling-robots-to-execute-multi-tasks-flexibly)
  - [**19. 画像14万枚を収録！甲骨文字データセットがチームのACL最優秀論文賞受賞を支援**](#19-containing-140000-images-oracle-bone-script-dataset-helps-team-win-acl-best-paper-award)
  - [**20. 事前学習済みLLMに基づくチャネル予測方式を提案、GPT-2が無線通信の物理層を強化**](#20-proposing-a-channel-prediction-scheme-based-on-pre-trained-llms-gpt-2-empowers-the-physical-layer-of-wireless-communications)
  - [**21. マルチステッチ刺繍向け初の敵対的生成ネットワークモデル**](#21-the-first-generative-adversarial-network-model-for-multi-stitch-embroidery)
  - [**22. 高速自動スキャンツールキット（FAST）がサンプル情報を効率的に取得**](#22-fast-automated-scanning-toolkit-fast-efficiently-acquires-sample-information)
  - [**23. 人口動態基盤モデルPDFMがオープンソース化され、米国の失業率と貧困率を高精度に予測**](#23-population-dynamics-foundation-model-pdfm-open-sourced-precisely-predicting-us-unemployment-and-poverty-rates)
  - [**24. 深層学習モデルCatGWRが空間的非定常性を推定**](#24-deep-learning-model-catgwr-estimates-spatial-non-stationarity)
  - [**25. 世界初のVR運動介入システムREVERIEが若者の心身の健康を刷新**](#25-worlds-first-vr-exercise-intervention-system-reverie-reshapes-youth-brain-body-mind-health)
  - [**26. 17万6,000件超の碑文データに基づくAeneasが古代ローマ碑文の任意長復元を初めて実現**](#26-based-on-over-176k-inscription-data-aeneas-achieves-arbitrary-length-restoration-of-ancient-roman-inscriptions-for-the-first-time)
  - [**27. パノラマ動画生成フレームワークPanoWanがゼロショット動画編集にも対応**](#27-panoramic-video-generation-framework-panowan-also-handles-zero-shot-video-editing)
  - [**28. YOLOv11に基づく陶磁器分類インテリジェントフレームワークが視覚モデリングと経済分析を統合し、遺物の分類と価値推定を実現**](#28-yolov11-based-ceramic-classification-intelligent-framework-integrates-visual-modeling-and-economic-analysis-achieving-artifact-classification-and-value-estimation)
  - [**29. 「マイクロ波脳」チップが誕生、消費電力176ミリワットで超高速データと無線信号を同時処理し、精度75％を達成**](#29-microwave-brain-chip-born-simultaneously-processing-ultra-high-speed-data-and-wireless-signals-with-75-accuracy-at-176-milliwatts-power)
  - [**30. 時空間補完・予測モデルSTIMPが公開され、沿岸のクロロフィルa分布の高精度予測を実現**](#30-spatiotemporal-imputation-and-prediction-model-stimp-released-realizing-precise-predictions-of-coastal-chlorophyll-a-distribution)
  - [**31. MITらが機械学習に基づき、少数ショット条件下でプラズマ動力学の高精度予測を実現**](#31-mit-and-others-achieve-high-precision-prediction-of-plasma-dynamics-under-few-shot-conditions-based-on-machine-learning)
  - [**32. Reac-Discoveryが数学的モデリング、機械学習、自動実験を融合し、自律実験室システムの汎用性の課題を解決**](#32-reac-discovery-fuses-mathematical-modeling-machine-learning-and-automated-experiments-to-solve-the-universality-challenge-of-self-driving-laboratory-systems)
  - [**33. 人間の大脳皮質データで検証された初のニューロンモデリングフレームワークNOBLEを発表**](#33-the-first-neuron-modeling-framework-noble-validated-by-human-cortical-data-is-introduced)
  - [**34. 画像ジオロケーションフレームワークLocDiffが公開され、グリッドも参照ライブラリも不要な全球精密測位を実現**](#34-image-geolocation-framework-locdiff-goes-online-enabling-grid-free-and-reference-library-free-global-precision-positioning)
  - [**35. 機械学習とpy-GC-MSの組み合わせで始生代岩石中の生命の痕跡を正確に特定**](#35-machine-learning-combined-with-py-gc-ms-precisely-identifies-evidence-of-life-in-archean-rocks)
  - [**36. 清華大学のチームが複雑なネットワーク動力学の式を自動導出する神経記号回帰法ND²を提案**](#36-tsinghua-university-team-proposes-neuro-symbolic-regression-method-nd-to-automatically-derive-complex-network-dynamics-formulas)
  - [**37. 浙江大学のチームが地質学的制約を用いる鉱物ポテンシャル予測法を提案し、鉱化作用の異方性を明示的に描写**](#37-zhejiang-university-team-proposes-geologically-constrained-mineral-prospectivity-prediction-method-explicitly-depicting-mineralization-anisotropy)
  - [**38. 清華大学とシカゴ大学のチームがNatureに発表：AIツールは科学者の影響力を広げる一方、科学の焦点を狭める**](#38-tsinghua-and-uchicago-team-publishes-in-nature-ai-tools-expand-scientists-impact-but-contract-sciences-focus)
  - [**39. カリフォルニア大学のチームがAI強化型チップスケール分光器を提案し、超小型体積で高いスペクトル忠実度を達成**](#39-uc-team-proposes-ai-augmented-chip-scale-spectrometer-achieving-high-spectral-fidelity-in-an-ultra-small-volume)
  - [**40. 米エネルギー省オークリッジ国立研究所がD-CHAG法を提案し、マルチチャネル基盤モデルのメモリー使用量を大幅削減**](#40-us-doe-oak-ridge-national-lab-proposes-d-chag-method-significantly-reducing-memory-footprint-for-multi-channel-foundation-models)
  - [**41. Polymathic AIチームが連続体基盤モデルWalrusを提案し、領域横断シミュレーション性能の記録を更新**](#41-polymathic-ai-team-proposes-continuum-foundation-model-walrus-setting-records-in-cross-domain-simulation-performance)
  - [**42. EPFLが物理情報を取り入れたGNNで多体動力学を高精度にモデル化する新アーキテクチャDYNAMI-CAL GraphNetを提案**](#42-epfl-proposes-novel-architecture-dynami-cal-graphnet-a-physics-informed-gnn-accurately-modeling-multi-body-dynamics)
  - [**43. MITが完全に遮蔽された物体の高精度3D再構成を実現する新手法Wave-Formerを提案**](#43-mit-proposes-novel-method-wave-former-achieving-high-precision-3d-reconstruction-of-completely-occluded-objects)
  - [**44. MITがDRiffusionのドラフト・改良型並列フレームワークを提案し、拡散モデル推論の損失なし高速化を実現**](#44-mit-proposes-driffusion-draft-and-refine-parallel-framework-realizing-lossless-acceleration-for-diffusion-model-inference)
  - [**45. テクニオン・イスラエル工科大学がTask Tokensを提案し、行動基盤モデルを特定タスクに柔軟に適応可能に**](#45-technion---israel-institute-of-technology-proposes-task-tokens-allowing-behavior-foundation-models-to-flexibly-adapt-to-specific-tasks)
  - [**46. MITらがAIワークロードのGPU電力を高速かつ正確に推定するEnergAIzerフレームワークを提案**](#46-mit-and-others-propose-energaizer-framework-achieving-fast-and-accurate-gpu-power-estimation-for-ai-workloads)
  - [**47. UIUCが言語中心の大規模モデルの限界を突破する異種エージェントフレームワークEywaを提案**](#47-uiuc-proposes-heterogeneous-agent-framework-eywa-breaking-through-the-limits-of-language-centric-large-models)
  - [**48. スタンフォード大学らがLSTMサロゲートモデルを用いて2次非線形光学のシミュレーションを252倍高速化**](#48-stanford-university-and-others-use-lstm-surrogate-models-to-achieve-252x-accelerated-simulation-of-second-order-nonlinear-optics)

## **はじめに**

2020年以降、AlphaFoldに代表される科学プロジェクトがAI for Science（AI4S）をAI応用の主要な舞台へと押し上げてきました。近年では、バイオ医薬から天文学や気象学、さらには材料化学などの基礎分野に至るまで、あらゆる領域がAIの新たな主戦場となっています。

機械学習や深層学習などの技術を自らの研究分野におけるデータ処理やモデル構築に応用する学際的人材が増え、分野横断型の研究チーム間の連携も強まるにつれて、AI4Sの能力はより多くの研究者に注目されるようになりました。しかし、大規模な応用という目標はまだ達成されていません。関連研究の再現性向上、技術的な参入障壁の引き下げ、データ品質の改善など、早急に解決すべき課題が数多く残されています。

現在、大学や研究機関がAI4Sを積極的に探究しているだけでなく、多くの政府や大手テクノロジー企業も、科学研究を変革するAIの可能性に注目し、関連する政策指針や取り組みを進めています。AI4Sが疑いようのない大きな潮流であることは明らかです。

AI for Scienceにいち早く注目したコミュニティの一つである「HyperAI」は、業界の成長を見守りながら最新の研究の進展と成果を広く共有できることをうれしく思います。最先端の論文や政策を解説することで、AIが科学研究にもたらす支援をより多くのチームに知ってもらい、AI for Scienceの発展に貢献したいと考えています。

これまでにHyperAIは約200本の論文を解説・共有してきました。検索しやすいよう、記事を分野別に分類し、掲載誌と発表日を示すとともに、キーワード（研究チーム、関連研究、データセットなど）を抽出しています。タイトルをクリックすると、論文の研究ハイライトページ（論文全文のダウンロードリンクを含む）に移動できます。

このドキュメントはオープンソースプロジェクトとして公開します。論文解説記事を継続的に更新していくほか、優れた研究成果の投稿も歓迎します。チームや研究グループとして紹介をご希望の場合は、WeChatで「神经星星」（WeChat ID: Hyperai01）を追加してください。

## **AI＋バイオ医薬**

### **1. [AdaDRは薬剤再配置において複数のベンチマーク手法を上回る](https://hyper.ai/news/30434)**

- **研究ハイライト：** [https://hyper.ai/news/30434](https://hyper.ai/news/30434)
- **研究チーム：** 中南大学 Min Li 研究チーム
- **関連研究：** Gdataset、Cdataset、Ldataset、LRSSLデータセット、GCNフレームワーク、AdaDR
- **掲載誌：** Bioinformatics、2024.01
- **論文：** [適応型グラフ畳み込みネットワークによる薬剤再配置](https://academic.oup.com/bioinformatics/article/40/1/btad748/7467059)

### **2. [IMN4NPDが分子ネットワーク内の大規模クラスターの重複排除を加速し、自己ループとペアノードに注釈を付与](https://hyper.ai/news/30363)**

- **研究ハイライト：** [https://hyper.ai/news/30363](https://hyper.ai/news/30363)
- **研究チーム：** 中南大学 Shao Liu 研究チーム
- **関連研究：** MS/MSスペクトルデータベース、構造データベース、molDiscovery、NPClassifier、t-SNE
- **掲載誌：** Analytical Chemistry、2024.02
- **論文：** [IMN4NPD：天然物の重複排除のための統合分子ネットワーキングワークフロー](https://doi.org/10.1021/acs.analchem.3c04746)

### **3. [単一細胞マルチオミクスデータのモザイク統合を行う深層生成モデルMIDAS](https://hyper.ai/news/29785)**

- **研究ハイライト：** [https://hyper.ai/news/29785](https://hyper.ai/news/29785)
- **研究チーム：** 軍事医学科学院 Xiaomin Ying 研究チーム
- **関連研究：** IPBMCデータセット、dogma-fullデータセット、teadog-fullデータセット、MMIDAS、自己教師あり学習、情報理論的手法、深層ニューラルネットワーク、SGVB、単一細胞マルチオミクス・モザイクデータ
- **掲載誌：** Nature Biotechnology、2024.01
- **論文：** [MIDASによる単一細胞マルチモーダルデータのモザイク統合と知識転移](https://www.nature.com/articles/s41587-023-02040-y)

### **4. [ResGen：タンパク質ポケットに基づく3D分子生成モデル](https://hyper.ai/news/29026)**

- **研究ハイライト：** [https://hyper.ai/news/29026](https://hyper.ai/news/29026)
- **研究チーム：** 浙江大学 Tingjun Hou 研究チーム
- **関連研究：** CrossDock2020データセット、グローバル自己回帰、原子自己回帰、並列マルチスケールモデリング、SBMG。最先端技術より8倍高速。
- **掲載誌：** Nature Machine Intelligence、2023.09
- **論文：** [並列マルチスケールモデリングに基づくポケット認識型3D分子生成モデルResGen](https://www.nature.com/articles/s42256-023-00712-7)

### **5. [大規模モデルと機械学習で酵素反応速度論パラメーターを高精度に予測](https://hyper.ai/news/29000)**

- **研究ハイライト：** [https://hyper.ai/news/29000](https://hyper.ai/news/29000)
- **研究チーム：** 中国科学院 Xiaozhou Luo 研究チーム
- **関連研究：** kcat/Kmデータセット、ミカエリス定数データセット、pH・温度データセット、DLKcatデータセット、UniKPフレームワーク、ProtT5-XL-UniRef50、SMILES Transformerモデル、アンサンブルモデル、ランダムフォレスト、超ランダム化木、線形回帰モデル
- **掲載誌：** Nature Communications、2023.12
- **論文：** [酵素反応速度論パラメーター予測の統一フレームワークUniKP](https://www.nature.com/articles/s41467-023-44113-1)

### **6. [MITが深層学習を用いて新規抗生物質を発見](https://hyper.ai/news/28886)**

- **研究ハイライト：** [https://hyper.ai/news/28886](https://hyper.ai/news/28886)
- **研究チーム：** MIT研究チーム
- **関連研究：** Mculeデータベース、Broad Instituteデータベース、グラフニューラルネットワークChemprop、深層学習。抗生物質化合物3,646種をスクリーニング。
- **掲載誌：** Nature、2023.12
- **論文：** [説明可能な深層学習による抗生物質の構造クラスの発見](https://www.nature.com/articles/s41586-023-06887-8)

### **7. [ニューラルネットワークがGPCRとGタンパク質の共役選択性を解読](https://hyper.ai/news/28361)**

- **研究ハイライト：** [https://hyper.ai/news/28361](https://hyper.ai/news/28361)
- **研究チーム：** フロリダ大学研究チーム
- **関連研究：** 二値分類ニューラルネットワーク、機械学習、教師なし深層学習モデル。異なる哺乳類由来のGPCR 124種の粗視化モデルを構築。
- **掲載誌：** Cell Reports、2023.09
- **論文：** [GPCRのGタンパク質共役選択性を支配する規則と機構](https://doi.org/10.1016/j.celrep.2023.113173)

### **8. [Macformerが非環状薬フェドラチニブを大環状化](https://hyper.ai/news/28189)**

- **研究ハイライト：** [https://hyper.ai/news/28189](https://hyper.ai/news/28189)
- **研究チーム：** 華東理工大学 Honglin Li 研究グループ
- **関連研究：** ZINCデータセット、ChEMBLデータベース、深層学習モデル、Transformerアーキテクチャ、Macformer
- **掲載誌：** Nature Communication、2023.07
- **論文：** [深層学習による直鎖分子の大環状化で大環状薬候補の発見を促進](https://www.nature.com/articles/s41467-023-40219-8)

### **9. [回帰ネットワークとCGMDで数百億種類のペプチドの自己集合特性を予測](https://hyper.ai/news/26408)**

- **研究ハイライト：** [https://hyper.ai/news/26408](https://hyper.ai/news/26408)
- **研究チーム：** 西湖大学 Wenbin Li 研究グループ
- **関連研究：** ラテン超方格サンプリング、CGMDモデル、AP予測モデル、Transformer、MLP、TRNモデル。五量体および十量体ペプチドのAPを取得。
- **掲載誌：** Advanced Science、2023.09
- **論文：** [深層学習により10兆を超える配列から自己集合ペプチドを発見](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202301544)

### **10. [教師なし学習で7,100万件の遺伝子変異を予測](https://hyper.ai/news/26154)**

- **研究ハイライト：** [https://hyper.ai/news/26154](https://hyper.ai/news/26154)
- **研究チーム：** Google DeepMind研究チーム
- **関連研究：** ClinVarデータセット、AlphaFold、弱ラベル学習、教師なし学習、AlphaMissense
- **掲載誌：** Science、2023.09
- **論文：** [AlphaMissenseによるプロテオーム全体のミスセンス変異効果の高精度予測](https://www.science.org/doi/10.1126/science.adg7492)

### **11. [グラフニューラルネットワーク（GNN）に基づく匂い分析AIを開発](https://hyper.ai/news/25952)**

- **研究ハイライト：** [https://hyper.ai/news/25952](https://hyper.ai/news/25952)
- **研究チーム：** Google Researchのスピンオフ企業Osmo
- **関連研究：** GS-LFデータベース、GNN、ベイズ最適化アルゴリズム。化学分子の53％および匂い記述子の55％の判断で人間を上回る。
- **掲載誌：** Science、2023.08
- **論文：** [嗅覚知覚の多様なタスクを統合する主要な匂いマップ](https://www.science.org/doi/full/10.1126/science.ade4401)

### **12. [グラフニューラルネットワークで安全性と有効性の高い抗老化成分をスクリーニング](https://hyper.ai/news/25822)**

- **研究ハイライト：** [https://hyper.ai/news/25822](https://hyper.ai/news/25822)
- **研究チーム：** MIT研究チーム
- **関連研究：** 深層学習、GNN、畳み込みニューラルネットワーク。Chempropモデルの真陽性率は11.6％で、手作業のスクリーニングの1.9％を上回る。
- **掲載誌：** Nature Communications、2023.05
- **論文：** [深層ニューラルネットワークによる小分子セノリティクスの発見](https://www.nature.com/articles/s43587-023-00415-z)

### **13. [機械学習でドーパミンの放出量と位置を定量分析](https://hyper.ai/news/25153)**

- **研究ハイライト：** [https://hyper.ai/news/25153](https://hyper.ai/news/25153)
- **研究チーム：** カリフォルニア大学バークレー校研究チーム
- **関連研究：** SVM、RF、機械学習。刺激強度の判定精度は0.832、ドーパミン放出脳領域の判定精度は0.708に達した。
- **掲載誌：** ACS Chemical Neuroscience、2023.06
- **論文：** [機械学習によるドーパミンシグナルの神経学的特徴の特定](https://pubs.acs.org/doi/full/10.1021/acschemneuro.3c00001)

### **14. [機械学習で3種類の抗老化薬を発見](https://hyper.ai/news/24578)**

- **研究ハイライト：** [https://hyper.ai/news/24578](https://hyper.ai/news/24578)
- **研究チーム：** メイヨー・クリニックのJames L. Kirkland博士ら
- **関連研究：** 機械学習、ランダムフォレスト（RF）モデル、5分割交差検証。セノリティクス薬Ginkgetin、Periplocin、Oleandrinを発見。
- **掲載誌：** Nature Communications、2023.06
- **論文：** [機械学習を用いたセノリティクスの発見](https://www.nature.com/articles/s41467-023-39120-1)

### **15. [深層学習でアシネトバクター・バウマニイを阻害する新規抗生物質をスクリーニング](https://hyper.ai/news/24499)**

- **研究ハイライト：** [https://hyper.ai/news/24499](https://hyper.ai/news/24499)
- **研究チーム：** マクマスター大学とMITの研究チーム
- **関連研究：** Broad Instituteのハイスループットスクリーニング部分ライブラリー、機械学習、深層学習。約7,500分子をスクリーニングし、abaucinと名付けられた抗菌化合物を発見。
- **掲載誌：** Nature Chemical Biology、2023.05
- **論文：** [深層学習に導かれたアシネトバクター・バウマニイ標的抗生物質の発見](https://www.nature.com/articles/s41589-023-01349-8#access-options)

### **16. [生体インクの印刷適性予測に機械学習モデルを適用](https://hyper.ai/news/24237)**

- **研究ハイライト：** [https://hyper.ai/news/24237](https://hyper.ai/news/24237)
- **研究チーム：** サンティアゴ・デ・コンポステーラ大学とUCLの研究チーム
- **関連研究：** 機械学習モデル、ANN、SVM、RF、カッパ係数、R²、MAE。精度は最大97.22％に達した。
- **掲載誌：** International Journal of Pharmaceutics: X、2023.12
- **論文：** [機械学習を用いた医薬品インクジェット印刷結果の予測](https://www.sciencedirect.com/science/article/pii/S2590156723000257)

### **17. [機械学習で多能性幹細胞を識別](https://hyper.ai/news/23940)**

- **研究ハイライト：** [https://hyper.ai/news/23940](https://hyper.ai/news/23940)
- **研究チーム：** 北京大学Yang Zhao氏・Yu Zhang氏の研究グループと北京交通大学Yiyan Liu氏の研究グループ
- **関連研究：** 生細胞イメージング、機械学習、弱教師ありモデル、pix2pix深層学習モデル。分化効率を21.6％±2.7％から88.8％±10.5％へ向上。
- **掲載誌：** Cell Discovery、2023.06
- **論文：** [PSC分化系のばらつきを低減する、生細胞画像に基づく機械学習戦略](https://www.nature.com/articles/s41421-023-00543-1)

### **18. [機械学習モデルで長時間作用型注射剤の薬物放出速度を予測](https://hyper.ai/news/33892)**

- **研究ハイライト：** [https://hyper.ai/news/33892](https://hyper.ai/news/33892)
- **研究チーム：** トロント大学研究チーム
- **関連研究：** MLR、Lasso、PLS、DT、RF、LGBM、XGB、AutoNGB、SVR、k-NN、NN、ネストした交差検証、最遠近傍クラスタリングアルゴリズム
- **掲載誌：** Nature Communications、2023.01
- **論文：** [機械学習モデルによるポリマー長時間作用型注射剤の設計加速](https://www.nature.com/articles/s41467-022-35343-w)

### **19. [機械学習アルゴリズムで植物の抗マラリア特性を効果的に予測](https://hyper.ai/news/33883)**

- **研究ハイライト：** [https://hyper.ai/news/33883](https://hyper.ai/news/33883)
- **研究チーム：** キュー王立植物園とセント・アンドルーズ大学の研究チーム
- **関連研究：** Logit、SVC、XGB、BNN、GridSearchCVアルゴリズム、層化10分割交差検証、マルコフ連鎖モンテカルロ反復。精度は0.67。
- **掲載誌：** Frontiers in Plant Science、2023.05
- **論文：** [機械学習による抗マラリア薬候補植物の予測向上](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10248027)

### **20. [機械学習アンサンブル手法でウイルスタンパク質断片の免疫原性を予測](https://hyper.ai/news/30786)**

- **研究ハイライト：** [https://hyper.ai/news/30786](https://hyper.ai/news/30786)
- **研究チーム：** 北京航空航天大学Jing Li研究チーム
- **関連研究：** タンパク質データベースUniProt、Protegenデータベース、アンサンブル機械学習手法VirusImmu、RF、XGBoost、kNN、ランダムサンプリング交差検証
- **掲載誌：** bioRxiv、2023.11
- **論文：** [ウイルス免疫原性予測のための新たなアンサンブル機械学習手法VirusImmu](https://www.biorxiv.org/content/10.1101/2023.11.23.568426v1)

### **21. [生成AIを新規抗生物質の開発に活用](https://hyper.ai/news/31421)**

- **研究ハイライト：** [https://hyper.ai/news/31421](https://hyper.ai/news/31421)
- **研究チーム：** マクマスター大学とスタンフォード大学のチーム
- **関連研究：** Pharmakon-1760ライブラリー、Drug Repurposing Hubデータベース、合成低分子スクリーニングセット、モンテカルロ木探索、生成AIモデルSyntheMol。完全な分子24,335種を生成し、合成しやすい新規構造の化合物を設計。
- **掲載誌：** Nature Machine Intelligence、2024.03
- **論文：** [合成しやすく構造的に新規な抗生物質の設計と検証に向けた生成AI](https://www.nature.com/articles/s42256-024-00809-7 )

### **22. [深層学習に基づく自動・高速・多次元の単粒子追跡システム](https://hyper.ai/news/31341)**

- **研究ハイライト：** [https://hyper.ai/news/31341](https://hyper.ai/news/31341)
- **研究チーム：** 厦門大学Ning Fang教授のチーム
- **関連研究：** 多次元イメージング装置、二焦点面イメージング、視差顕微鏡、多次元撮像装置、畳み込みニューラルネットワークモデル、ノイズ耐性、ロバスト性
- **掲載誌：** Nature Machine Intelligence、2024.03
- **論文：** [深層学習支援による生細胞内の自動多次元単粒子追跡](https://doi.org/10.1021/acs.nanolett.3c04870)

### **23. [ProEnsemble機械学習フレームワーク：進化経路のプロモーター組み合わせを最適化](https://hyper.ai/news/30594)**

- **研究ハイライト：** [https://hyper.ai/news/30594](https://hyper.ai/news/30594)
- **研究チーム：** 中国科学院Xiaozhou Luo氏のチーム
- **関連研究：** 合成生物学、遺伝子エピスタシス、自動化プラットフォーム、10分割交差検証、アンサンブルモデル、勾配ブースティング回帰、Ridge回帰、勾配ブースティング、フラボノイド効率合成のための汎用シャーシ
- **掲載誌：** ADVANCED SCIENCE、2024.02
- **論文：** [ボトルネック化・解消戦略と機械学習支援によるフラックス均衡化を通じた経路進化](https://onlinelibrary.wiley.com/doi/full/10.1002/advs.202306935)

### **24. [微小環境を考慮するグラフニューラルネットワークProtLGNがタンパク質の指向性進化を導く](https://hyper.ai/news/32246)**

- **研究ハイライト：** [https://hyper.ai/news/32246](https://hyper.ai/news/32246)
- **研究チーム：** 上海交通大学Liang Hong研究グループ
- **関連研究：** 微小環境認識グラフニューラルネットワーク、軽量グラフノイズ除去ネットワーク、自己教師あり事前学習、等変グラフニューラルネットワーク。PROTLGNが設計した単一残基変異タンパク質の40％超が野生型を上回った。
- **掲載誌：** JOURNAL OF CHEMICAL INFORMATION AND MODELING、2024.04
- **論文：** [軽量グラフノイズ除去ニューラルネットワークによるタンパク質工学](https://pubs.acs.org/doi/10.1021/acs.jcim.4c00036)

### **25. [深層学習モデルAlphaPPIMd：タンパク質間複合体の構造アンサンブルを探究](https://hyper.ai/news/32435)**

- **研究ハイライト：** [https://hyper.ai/news/32435](https://hyper.ai/news/32435)
- **研究チーム：** 延世大学Jianmin Wang氏のチーム
- **関連研究：** 深層学習、生成AI、Transformer、生成ニューラルネットワーク学習、分子動力学、barnase-barstar複合体軌跡セット、Protein Data Bank、AlphaPPIMdモデル、自己注意機構、特徴量最適化モジュール、注意スコア、全原子モデル。平均学習精度は0.995、平均検証精度は0.999。
- **掲載誌：** Journal of Chemical Theory and Computation、2024.05
- **論文：** [Transformerベースの生成モデルによるタンパク質間複合体の構造アンサンブルの探究](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00255)

### **26. [新規の腫瘍抑制タンパク質分解剤dp53mががん細胞の増殖を阻害](https://hyper.ai/news/32527)**

- **研究ハイライト：** [https://hyper.ai/news/32527](https://hyper.ai/news/32527)
- **研究チーム：** 西交利物浦大学Huihu薬学院Sijin Wu教授のチームと天津医科大学総医院Songbo Xie教授・Diansheng Zhong教授のチーム
- **関連研究：** MDシミュレーション、反復的な分子ドッキング誘導型post-SELEX法。dp53mはp53-R175Hタンパク質を特異的に認識し、分解する。
- **掲載誌：** Science Bulletin、2024.05
- **論文：** [p53-R175Hホットスポット変異駆動がんの精密治療に向けた、DNAアプタマーをベースとする人工PROTAC](https://www.sciencedirect.com/science/article/pii/S2095927324003517)

### **27. [CVPR最優秀学生論文！マルチモーダルモデルBioCLIPがゼロショット学習を実現](https://hyper.ai/news/32544)**

- **研究ハイライト：** [https://hyper.ai/news/32544](https://hyper.ai/news/32544)
- **研究チーム：** オハイオ州立大学Jiaman Wu氏のチーム
- **関連研究：** 生物画像データセットTreeOfLife-10M、マルチモーダルモデル、コンピュータービジョン、視覚エンコーダー、テキストエンコーダー、自己回帰言語モデル。ゼロショット・少数ショットタスクで優れた性能を示した。
- **掲載誌：** CVPR 2024、2024.02
- **論文：** [BIoCLIP：生命の樹のための視覚基盤モデル](https://openaccess.thecvf.com/content/CVPR2024/html/Stevens_BioCLIP_A_Vision_Foundation_Model_for_the_Tree_of_Life_CVPR_2024_paper.html)

### **28. [1億パラメーター！細胞基盤モデルscFoundationが2万個の遺伝子を同時にモデル化](https://hyper.ai/news/32623)**

- **研究ハイライト：** [https://hyper.ai/news/32623](https://hyper.ai/news/32623)
- **研究チーム：** 清華大学Xuegong Zhang教授、清華大学AIRのJianzhu Ma教授、BioMapのLe Song博士
- **関連研究：** AI細胞基盤モデル、ヒト単一細胞オミクスデータDISCO、EMBL-EBIデータベース、GEOデータセット、Single Cell Portalデータセット、HCAデータセット、hECAデータセット、Transformer、非対称エンコーダー・デコーダー構造、ベクトルモジュール、RDAモデリング
- **掲載誌：** Nature Methods、2024.06
- **論文：** [単一細胞トランスクリプトミクスの大規模基盤モデル](https://www.nature.com/articles/s41592-024-02305-7)

### **29. [ICML採択、タンパク質言語モデルESM-AAが従来のSOTAを上回る](https://hyper.ai/news/32674)**

- **研究ハイライト：** [https://hyper.ai/news/32674](https://hyper.ai/news/32674)
- **研究チーム：** 清華大学Hao Zhou教授と、北京大学、南京大学、Shuimu BioSciencesの共同研究
- **関連研究：** タンパク質データセットAlphaFold DB、タンパク質データセットDpと分子データセットDm、圧縮、多スケールマスク言語モデリング
- **掲載誌：** ICML 2024、2024.06
- **論文：** [ESM All-Atom：統一分子モデリングのためのマルチスケールタンパク質言語モデル](https://icml.cc/virtual/2024/poster/35119)

### **30. [SPACEアルゴリズムがCell姉妹誌に掲載！組織モジュールの発見能力で同種ツールをリード](https://hyper.ai/news/32738)**

- **研究ハイライト：** [https://hyper.ai/news/32738](https://hyper.ai/news/32738)
- **研究チーム：** 清華大学Qiangfeng Zhang氏のグループ
- **関連研究：** 空間トランスクリプトミクス、STARmapマウスPLAデータセット、MERFISHマウスABデータセット、MERFISHマウスWBデータセット、XeniumヒトBCデータセット、CosMxヒトNSCLCデータセット、Visiumヒト脳データセット、エンコーダー、近傍グラフデコーダー、遺伝子発現デコーダー、空間的近接性、自己教師あり学習
- **掲載誌：** Cell Systems、2024.06
- **論文：** [細胞間相互作用を考慮した細胞埋め込みによる、単一細胞解像度の空間トランスクリプトミクスデータにおける組織モジュールの発見](https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00124-8)

### **31. [AlphaFoldに基づく新たな進展でタンパク質の動的多様性を解明](https://hyper.ai/news/33075)**

- **研究ハイライト：** [https://hyper.ai/news/33075](https://hyper.ai/news/33075)
- **研究チーム：** MIT研究チーム
- **関連研究：** フローマッチング技術、タンパク質言語モデル、ニューラルネットワーク、AlphaFold、ESMFold
- **掲載誌：** ICML 2024、2024.06
- **論文：** [AlphaFoldとフローマッチングによるタンパク質アンサンブル生成](https://openreview.net/forum?id=rs8Sh2UASt)

### **32. [P450Diffusion：拡散モデルに基づくP450酵素のde novo設計法を開発](https://hyper.ai/news/33057)**

- **研究ハイライト：** [https://hyper.ai/news/33057](https://hyper.ai/news/33057)
- **研究チーム：** 中国科学院天津工業生物技術研究所Huifeng Jiang氏・Jian Cheng氏のチーム
- **関連研究：** 指向性進化、拡散モデル、深層学習、ノイズ除去拡散確率モデル、三点アンカリング、拡散モデルのファインチューニング、事前学習。触媒能力を3.5倍に向上。
- **掲載誌：** Research、2024.07
- **論文：** [拡散モデルにおける触媒ポケットの制約によるシトクロムP450酵素の設計](https://spj.science.org/doi/10.34133/research.0413)

### **33. [等変グラフニューラルネットワークによる標的タンパク質結合部位予測で性能が20％向上](https://hyper.ai/news/32957)**

- **研究ハイライト：** [https://hyper.ai/news/32957](https://hyper.ai/news/32957)
- **研究チーム：** 中国人民大学高瓴人工知能学院研究チーム
- **関連研究：** E(3)等変グラフニューラルネットワーク、畳み込みニューラルネットワーク、EquiPocketフレームワーク、scPDBデータセット、PDBbindデータセット、COACH 420データセット、HOLO4Kデータセット、局所幾何モデリングモジュール、全体構造モデリングモジュール、表面情報伝達モジュール
- **掲載誌：** ICML 2024、2024.07
- **論文：** [EquiPocket：リガンド結合部位予測のためのE(3)等変幾何グラフニューラルネットワーク](https://openreview.net/forum?id=1vGN3CSxVs)

### **34. [実験データ20件でAIタンパク質研究の節目！FSFPがタンパク質事前学習モデルを効果的に最適化](https://hyper.ai/news/32822)**

- **研究ハイライト：** [https://hyper.ai/news/32822](https://hyper.ai/news/32822)
- **研究チーム：** 上海交通大学Liang Hong教授のグループと、上海人工知能研究所Pan Tan氏のチーム
- **関連研究：** タンパク質変異データセットProteinGym、事前学習済みタンパク質言語モデル、メタ転移学習、ランキング学習（LTR）、パラメーター効率の高いファインチューニング、LTR技術、FSFP学習戦略、モデル非依存メタ学習法
- **掲載誌：** Nature Communications、2024.07
- **論文：** [少数ショット学習により最小限のウェットラボデータでタンパク質言語モデルの効率を向上](https://doi.org/10.1038/s41467-024-49798-6)

### **35. [転移可能な深層学習モデルが複数種のRNA修飾を特定し、計算コストを大幅に削減](https://hyper.ai/news/32745)**

- **研究ハイライト：** [https://hyper.ai/news/32745](https://hyper.ai/news/32745)
- **研究チーム：** 上海交通大学Xiang Yu准教授のグループと、上海辰山植物園Jun Yang氏・Hongxia Wang氏のチーム
- **関連研究：** 転移可能な深層学習モデルTandemMod、in vitro転写データセットELIGOS、Curlcakeデータセット、in vitroエピトランスクリプトームデータセットIVET、1D CNN、Bi-LSTMモジュール、注意機構、全結合分類器
- **掲載誌：** Nature Communications、2024.05
- **論文：** [転移学習によりナノポアダイレクトRNAシーケンシングを用いて複数種類のRNA修飾を識別](https://www.nature.com/articles/s41467-024-48437-4)

### **36. [InstructProtein：知識指示を用いてタンパク質言語と人間の言語を対応付ける](https://hyper.ai/news/33697)**

- **研究ハイライト：** [https://hyper.ai/news/33697](https://hyper.ai/news/33697)
- **研究チーム：** 浙江大学Huajun Chen氏・Qiang Zhang氏のチーム
- **関連研究：** LLM、タンパク質知識指示データセット、Gene Ontology（GO）データセット、InstructProtein、知識グラフ、タンパク質局在予測、タンパク質機能予測、タンパク質の金属イオン結合能予測
- **掲載誌：** ACL 2024、2023.10
- **論文：** [InstructProtein：知識指示を介した人間言語とタンパク質言語の対応付け](https://arxiv.org/abs/2310.03269)

### **37. [タンパク質からテキストを生成するフレームワークProtT3がタンパク質データとテキスト情報のクロスモーダル解釈を可能に](https://hyper.ai/news/33546)**

- **研究ハイライト：** [https://hyper.ai/news/33546](https://hyper.ai/news/33546)
- **研究チーム：** 中国科学技術大学Xiang Wang氏、シンガポール国立大学Zhiyuan Liu氏のチーム、北海道大学の研究者
- **関連研究：** クロスモーダルプロジェクター、タンパク質言語モデル、Swiss-ProtおよびProteinKG25データセット、PDB-QAデータセット
- **掲載誌：** ACL 2024、2023.05
- **論文：** [ProtT3：テキストベースのタンパク質理解に向けたタンパク質からテキストへの生成](https://arxiv.org/abs/2405.12564)

### **38. [CPDiffusionモデルが機能性タンパク質を超低コストで全自動設計](https://hyper.ai/news/34692)**

- **研究ハイライト：** [https://hyper.ai/news/34692](https://hyper.ai/news/34692)
- **研究チーム：** 上海交通大学Liang Hong氏のグループ
- **関連研究：** タンパク質工学、拡散確率モデルフレームワークCPDiffusion、アミノ酸、グラフニューラルネットワーク、補助的な薬剤設計、タンパク質言語モデル、CATH 4.2データセット
- **掲載誌：** Cell Discovery、2024.09
- **論文：** [条件付きタンパク質拡散モデルによる、活性を高めた人工プログラム可能エンドヌクレアーゼ配列の生成](https://www.nature.com/articles/s41421-024-00728-2)

### **39. [タンパク質言語モデルと高密度検索技術に基づく新たなタンパク質ホモログ検出法](https://hyper.ai/news/34225)**

- **研究ハイライト：** [https://hyper.ai/news/34225](https://hyper.ai/news/34225)
- **研究チーム：** 香港中文大学Yu Li氏、復旦大学・上海AI LabのSiqi Sun氏、イェール大学Mark Gerstein氏
- **関連研究：** タンパク質工学、タンパク質言語モデル、高密度検索技術、高密度ホモログ検索器、ハイブリッドモデルDHR-meta、UR90データセット、JackHMMERアルゴリズム、BFD/MGnifyデータセット、DHR手法。タンパク質ホモログ検出感度を56％向上。
- **掲載誌：** Nature Biotechnology、2024.08
- **論文：** [高密度深層検索を用いた高速・高感度なタンパク質ホモログの検出](https://doi.org/10.1038/s41587-024-02353-6)

### **40. [AlphaProteoが標的タンパク質結合体を効率的に設計し、親和性を300倍に向上](https://hyper.ai/news/34214)**

- **研究ハイライト：** [https://hyper.ai/news/34214](https://hyper.ai/news/34214)
- **研究チーム：** DeepMind、フランシス・クリック研究所
- **関連研究：** タンパク質工学、タンパク質言語モデル、AI創薬、標的タンパク質、AIツール、機械学習モデルAlphaProteo、VEGF-Aタンパク質結合体の設計、Generator、Filter。候補結合体の結合性能は既存手法より5～100倍高かった。
- **掲載誌：** DeepMind、2024.09
- **論文：** [生物学・健康研究向けの新規タンパク質を生成するAlphaProteo](https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)

### **41. [新たなノイズ除去タンパク質言語モデルDePLMが変異効果予測でSOTAモデルを上回る](https://hyper.ai/news/34954)**

- **研究ハイライト：** [https://hyper.ai/news/34954](https://hyper.ai/news/34954)
- **研究チーム：** 浙江大学Huajun Chen教授・Qiang Zhang博士
- **関連研究：** ノイズ除去タンパク質言語モデル（DePLM）、ProteinGym深部変異スキャン（DMS）アンサンブル、DMSデータセット、ランダム交差検証、汎化実験、進化情報をノイズ除去するための順位情報による拡散モデルの拡張、ソートアルゴリズムで生成した軌跡、PromptProteinモデル
- **掲載誌：** NeurIPS 2024、2024.11
- **論文：** [DePLM：特性最適化のためのノイズ除去タンパク質言語モデル](https://neurips.cc/virtual/2024/poster/95517)

### **42. [幾何学的深層生成モデルDynamicBindが動的なタンパク質ドッキング予測を実現](https://hyper.ai/news/34894)**

- **研究ハイライト：** [https://hyper.ai/news/34894](https://hyper.ai/news/34894)
- **研究チーム：** 上海交通大学Shuangjia Zheng氏のグループ、Galixir、中山大学、ライス大学
- **関連研究：** PDBbindデータセット、MDTテストセット、深層拡散モデル、等変幾何ニューラルネットワーク技術、PDB形式構造、小分子リガンド形式、contact-LDDT（cLDDT）スコアリングモジュール、AlphaFold構造、親和性予測モジュール、生成AI
- **掲載誌：** Nature Communications、2024.02
- **論文：** [DynamicBind：等変深層生成モデルによるリガンド特異的なタンパク質・リガンド複合体構造予測](https://www.nature.com/articles/s41467-024-45461-2)

### **43. [創薬大規模言語モデルY-MolがLLaMA2を全面的に上回る](https://hyper.ai/news/35572)**

- **研究ハイライト：** [https://hyper.ai/news/35572](https://hyper.ai/news/35572)
- **研究チーム：** 湖南大学、中南大学、湖南師範大学、湘潭大学
- **関連研究：** マルチスケール生物医学知識誘導LLM Y-Mol、PubMedテキストコーパス、DrugBankベンチマークデータセット、DrugCentralベンチマークデータセット、LLM LLaMA2-7b
- **掲載誌：** arXiv、2024.10
- **論文：** [Y-Mol：創薬のためのマルチスケール生物医学知識誘導型大規模言語モデル](https://doi.org/10.48550/arXiv.2410.11550)

### **44. [汎用分子逆フォールディングモデルUniIFがAlphaFold 3をさらに補完](https://hyper.ai/news/35781)**

- **研究ハイライト：** [https://hyper.ai/news/35781](https://hyper.ai/news/35781)
- **研究チーム：** 西湖大学未来産業研究センターのチーム
- **関連研究：** CATH4.3データセット、ESM2モデル、CASP15データセット、新規結晶構造、NovelProデータセット、RDesignデータセット、CHILI-3Kデータセット、アミノ酸・ヌクレオチドに基づく事前定義フレームワーク、GNN、Geometric Featurizer、Block Graph Attention。タンパク質、RNA、材料の設計で他のSOTA手法を上回る。
- **掲載誌：** NeurIPS 2024、2024.05
- **論文：** [UniIF：統一分子逆フォールディング](https://arxiv.org/abs/2405.18968)

### **45. [事前学習済みタンパク質言語モデルProSSTがタンパク質構造情報をより効果的に統合](https://hyper.ai/news/35874)**

- **研究ハイライト：** [https://hyper.ai/news/35874](https://hyper.ai/news/35874)
- **研究チーム：** 上海交通大学Liang Hong教授のグループ・Bingxin Zhou氏と、上海AI LabのPan Tan氏
- **関連研究：** 事前学習済みタンパク質言語モデルProSST、Transformer、分離型注意機構、タンパク質構造量子化器、AlphaFoldDBデータセット、CATH43-S40データセット、CATH43-S40局所構造データセット、ProteinGYMベンチマーク。熱安定性、金属イオン結合、タンパク質局在、GOアノテーションの予測で既存モデルを上回る。
- **掲載誌：** NeurIPS 2024、2024.05
- **論文：** [ProSST：量子化構造と分離型注意機構を用いたタンパク質言語モデリング](https://neurips.cc/virtual/2024/poster/96656)

### **46. [大環状ペプチド結合体フレームワークRFpeptidesが創薬困難なタンパク質に新たな可能性をもたらす](https://hyper.ai/news/36150)**

- **研究ハイライト：** [https://hyper.ai/news/36150](https://hyper.ai/news/36150)
- **研究チーム：** ワシントン大学タンパク質設計研究所のDavid Baker氏のチーム
- **関連研究：** 拡散モデル技術RFpeptides、改良RoseTTAFoldとRFdiffusion、環状相対位置エンコーディングによる高精度な大環状主鎖の生成、創薬、AlphaFold、ProteinMPNN、Rosetta Relax。標的指向型の効率的な大環状分子設計を可能にする。
- **掲載誌：** bioRxiv、2024.11
- **論文：** [深層学習を用いた高親和性タンパク質結合大環状分子の高精度de novo設計](https://doi.org/10.1101/2024.11.18.622547)

### **47. [ゲノム基盤モデルEvoが分子からゲノムまでのスケールで予測と生成を可能に](https://hyper.ai/news/36266)**

- **研究ハイライト：** [https://hyper.ai/news/36266](https://hyper.ai/news/36266)
- **研究チーム：** スタンフォード大学とArc Instituteの研究チーム
- **関連研究：** ゲノム基盤モデルEvo、StripedHyenaアーキテクチャ。Evoはゲノム配列全体の予測、生成、設計に対応する。
- **掲載誌：** Science、2024.11
- **論文：** [Evoによる分子からゲノムスケールまでの配列モデリングと設計](https://www.science.org/doi/10.1126/science.ado9336)

### **48. [DigFragがAIで分子フラグメントを正確に分割し、医薬品・農薬分子44種を生成](https://hyper.ai/news/36346)**

- **研究ハイライト：** [https://hyper.ai/news/36346](https://hyper.ai/news/36346)
- **研究チーム：** 華中師範大学Guangfu Yang教授・Fan Wang准教授のチーム
- **関連研究：** MolFragプラットフォーム、PADFragデータベース、グラフ注意機構、DigFragデジタルフラグメンテーション法、DeepFMPOフレームワーク、グラフニューラルネットワークアーキテクチャ、Actor-Criticフレームワーク
- **掲載誌：** Communications Chemistry、2024.11
- **論文：** [AIベースの創薬に用いるデジタルフラグメンテーション法としてのDigFrag](https://doi.org/10.1038/s42004-024-01346-5)

### **49. [タンパク質配列大規模言語モデルの事前学習法PRIME](https://hyper.ai/news/36363)**

- **研究ハイライト：** [https://hyper.ai/news/36363](https://hyper.ai/news/36363)
- **研究チーム：** 上海交通大学Liang Hong教授のグループ、上海AI Lab、上海科技大学、杭州医学院
- **関連研究：** タンパク質配列LLM事前学習法PRIME、ProteomeAtlasデータベース、UniProtデータベース、ProteinGymデータセット、MLM事前学習法、現行のSOTA手法を上回る性能
- **掲載誌：** Science Advances、2024.11
- **論文：** [安定性と活性を高めたタンパク質設計のための温度誘導型汎用言語モデル](https://www.science.org/doi/10.1126/sciadv.adr2641)

### **50. [自己教師あり深層学習法がクライオ電子顕微鏡の3D再構成を革新](https://hyper.ai/news/36645)**

- **研究ハイライト：** [https://hyper.ai/news/36645](https://hyper.ai/news/36645)
- **研究チーム：** UCLA研究チーム
- **関連研究：** 自己教師あり深層学習法single-particle IsoNet（spIsoNet）、単粒子クライオ電子顕微鏡、生体高分子再構成、β-ガラクトシダーゼデータセット、傾斜HA三量体データセット、非対称リボソームデータセット、HIV VLPトモグラフィーデータセット、U-netアーキテクチャ、異方性補正型駆動ミスアラインメント補正モジュール
- **掲載誌：** Nature Methods、2024.11
- **論文：** [自己教師あり深層学習でクライオ電子顕微鏡の優先配向問題を克服](https://doi.org/10.1038/s41592-024-02505-1)

### **51. [マルチモーダルタンパク質生成法PLAIDが配列と全原子タンパク質構造を同時に生成](https://hyper.ai/news/36750)**

- **研究ハイライト：** [https://hyper.ai/news/36750](https://hyper.ai/news/36750)
- **研究チーム：** カリフォルニア大学バークレー校、Microsoft Research、Genentech
- **関連研究：** マルチモーダルタンパク質生成法PLAID（Protein Latent Induced Diffusion）、Pfamデータベース、ESMFold潜在空間、潜在拡散学習、DiTブロックアーキテクチャ、Diffusion Transformer（DiT）、ESMFoldモデル
- **掲載誌：** ICLR 2025、2024.12
- **論文：** [配列のみの学習データから全原子タンパク質構造を生成](https://www.biorxiv.org/content/10.1101/2024.12.02.626353v1)

### **52. [潜在強化学習に基づく標的指向型分子最適化法MOLRL](https://hyper.ai/news/37285)**

- **研究ハイライト：** [https://hyper.ai/news/37285](https://hyper.ai/news/37285)
- **研究チーム：** CellarityとNVIDIAの研究者
- **関連研究：** 潜在強化学習に基づく新しい標的分子最適化法MOLRL、創薬タスク、近接方策最適化（PPO）、変分オートエンコーダー（VAE）、オートエンコーダー（MolMIM）、成功率最大100％を達成
- **掲載誌：** ChemRxiv、2025.01
- **論文：** [潜在強化学習による標的分子生成](https://go.hyper.ai/H4JhR)

### **53. [ウイルス変異の駆動因子予測フレームワークE2VDが新型コロナ・HIV・インフルエンザウイルスの進化方向を予測](https://hyper.ai/news/37405)**

- **研究ハイライト：** [https://hyper.ai/news/37405](https://hyper.ai/news/37405)
- **研究チーム：** 北京大学Yonghong Tian教授・Jie Chen准教授、広州実験室Peng Zhou研究員
- **関連研究：** ウイルス変異駆動因子予測フレームワークE2VD、UniRef90データセット、オープンソース深部変異スキャンデータセット、タンパク質配列エンコーディング、局所・大域依存性結合、マルチタスク焦点学習。予測精度を67％向上。
- **掲載誌：** Nature Machine Intelligence、2025.01
- **論文：** [ウイルス変異駆動因子予測のための統一進化駆動型深層学習フレームワーク](https://www.nature.com/articles/s42256-024-00966-9)

### **54. [医療言語モデルMedFoundが専門医に近い推論能力を実現](https://hyper.ai/news/37646)**

- **研究ハイライト：** [https://hyper.ai/news/37646](https://hyper.ai/news/37646)
- **研究チーム：** 北京郵電大学Guangyu Wang教授、北京大学第三病院Chunli Song教授、三峡大学Jian Yang教授が率いる学際的チーム
- **関連研究：** LLM BLOOM-176B、医療コーパスMedCorpus、医療LLM MedFound-DX、思考連鎖手法、選好アラインメントフレームワーク、MedDX-FTデータセット、MedDX-Benchデータセット
- **掲載誌：** Nature Medicine、2025.01
- **論文：** [疾患診断支援のための汎用医療言語モデル](https://www.nature.com/articles/s41591-024-03416-6)

### **55. [4D拡散モデルAlphaFoldingがタンパク質動的構造予測の空白を埋める](https://hyper.ai/news/37697)**

- **研究ハイライト：** [https://hyper.ai/news/37697](https://hyper.ai/news/37697)
- **研究チーム：** 復旦大学・上海AI LabのSiyu Zhu教授・Yuan Qi教授のチームと南京大学Yao Yao教授
- **関連研究：** 4D拡散モデルAlphaFolding、MDシミュレーションデータ、動的タンパク質構造、構造生物学、Distributional Graphformer（DiG）深層学習フレームワーク、ATLASデータセット
- **掲載誌：** arXiv、2024.12
- **論文：** [参照情報と運動ガイダンスを用いた動的タンパク質構造予測のための4D拡散](https://arxiv.org/abs/2408.12419)

### **56. [短鎖タンパク質設計パイプラインPepPrCLIPが新たながん治療法の開発に期待](https://hyper.ai/news/37912)**

- **研究ハイライト：** [https://hyper.ai/news/37912](https://hyper.ai/news/37912)
- **研究チーム：** デューク大学生物医学工学チーム
- **関連研究：** ESM-2タンパク質言語モデル、ESM-2-650Mモデル、PepPrCLIPパイプライン、ガウス分布、アミノ酸配列
- **掲載誌：** Science Advances、2025.01
- **論文：** [対照言語モデリングによる、構造多様な標的に対するペプチド結合体のde novo設計](https://www.science.org/doi/10.1126/sciadv.adr8638)

### **57. [ボルツマンアラインメント技術がタンパク質結合自由エネルギー予測の効率を大幅に向上](https://hyper.ai/news/38092)**

- **研究ハイライト：** [https://hyper.ai/news/38092](https://hyper.ai/news/38092)
- **研究チーム：** 浙江大学Chunhua Shen教授のチーム、アデレード大学、ノースイースタン大学（米国）
- **関連研究：** 結合自由エネルギー、ボルツマンアラインメント技術、∆∆G予測、タンパク質複合体構造予測、リーマン拡散モデル、深層学習、BA-Cycle法、BA-DDG法、SKEMPI v2データセット
- **掲載誌：** ICLR 2025、2024.10
- **論文：** [タンパク質間相互作用に対する変異効果の予測器としてのボルツマン整合型逆フォールディングモデル](https://arxiv.org/abs/2410.09543)

### **58. [新たな大規模フローベースのタンパク質主鎖生成器Proteinaがde novo主鎖設計でSOTAを達成](https://hyper.ai/news/38120)**

- **研究ハイライト：** [https://hyper.ai/news/38120](https://hyper.ai/news/38120)
- **研究チーム：** NVIDIA、Mila、モントリオール大学、MIT
- **関連研究：** タンパク質設計、スケーラブルな非等変Transformerアーキテクチャ、Foldseek AFDBクラスタリングDFSデータセット、D21Mデータセット、MFSモデル、段階的学習戦略
- **掲載誌：** ICLR 2025 Oral、2025.01
- **論文：** [フローベースタンパク質構造生成モデルのスケーリング：Proteina](https://openreview.net/forum?id=TVQLu34bdw&nesting=2&sort=date-desc)

### **59. [UniGEMモデルが拡散モデルに基づく2つのタスクの相乗的強化を初めて実現](https://hyper.ai/news/38186)**

- **研究ハイライト：** [https://hyper.ai/news/38186](https://hyper.ai/news/38186)
- **研究チーム：** 清華大学、中国科学院
- **関連研究：** 創薬、分子特性予測、分子生成、拡散モデル、QM9データセット、GEOM-Drugs 3D分子配座データセット、マルチタスク学習フレームワーク、E(3)等変拡散モデル（EDM）、マルチブランチネットワークアーキテクチャ
- **掲載誌：** ICLR 2025、2025.04
- **論文：** [UniGEM：分子生成と特性予測の統一的アプローチ](https://openreview.net/pdf?id=Lb91pXwZMR)

### **60. [RFdiffusionがさらに進化し、原子精度のde novo抗体設計を実現](https://hyper.ai/news/38253)**

- **研究ハイライト：** [https://hyper.ai/news/38253](https://hyper.ai/news/38253)
- **研究チーム：** ワシントン大学David Baker教授のチームと共同研究者
- **関連研究：** 治療用抗体、計算タンパク質設計ネットワークRFdiffusion、抗体可変重鎖（VHH）、単鎖可変断片（scFv）、深層学習、VHHフレームワーク、CDRループ配列設計
- **掲載誌：** bioRxiv、2025.02
- **論文：** [RFdiffusionによる原子精度のde novo抗体設計](https://doi.org/10.1101/2024.03.14.585103)

### **61. [タンパク質・RNA言語モデルの初の融合方式が結合親和性予測で新たなSOTAを樹立](https://hyper.ai/news/38290)**

- **研究ハイライト：** [https://hyper.ai/news/38290](https://hyper.ai/news/38290)
- **研究チーム：** 清華大学、UCL、モナシュ大学、北京郵電大学
- **関連研究：** タンパク質・RNA、CoPRAモデル、タンパク質言語モデル（PLM）、RNA言語モデル（RLM）、CLIP実験技術、Co-Formerモデル、PDBbindデータセット、PRBABv2データセット、ProNABデータセット、PRA201データセット、マルチモーダル学習
- **掲載誌：** AAAI 2025、2025.01
- **論文：** [CoPRA：複雑な構造を介してクロスドメインの事前学習済み配列モデルをつなぎ、タンパク質・RNA結合親和性を予測](https://arxiv.org/abs/2409.03773)

### **62. [仮想組織モデルCelcomenが空間トランスクリプトミクス解析における因果推論の識別可能性を初めて実現](https://hyper.ai/news/38308)**

- **研究ハイライト：** [https://hyper.ai/news/38308](https://hyper.ai/news/38308)
- **研究チーム：** ケンブリッジ大学
- **関連研究：** Perturbmapデータセット、胎児脾臓データセット、神経膠芽腫データセット、Celcomenモデル、推論モジュール（CCE）、生成モジュール（SCE）、グラフニューラルネットワーク
- **掲載誌：** ICLR 2025、2025.01
- **論文：** [空間的因果分離による空間トランスクリプトミクスの単一細胞・組織摂動効果の推定](https://openreview.net/forum?id=Tqdsruwyac)

### **63. [AlphaFold-Metainference法が天然変性タンパク質の構造アンサンブルを高精度に予測](https://hyper.ai/news/38448)**

- **研究ハイライト：** [https://hyper.ai/news/38448](https://hyper.ai/news/38448)
- **研究チーム：** ケンブリッジ大学
- **関連研究：** AlphaFoldが予測したアラインメント誤差マップ、MDシミュレーションにおける距離変動行列の相関、天然変性タンパク質構造予測、Protein Data Bank（PDB）、小角X線散乱（SAXS）データ、NMR測定、Aβおよびα-シヌクレインの構造アンサンブル、CALVADOS-2、ベイズメタ推論法、ランジュバン積分器
- **掲載誌：** Nature Communications、2025.02
- **論文：** [AlphaFoldによる天然変性タンパク質の構造アンサンブル予測](https://www.nature.com/articles/s41467-025-56572-9)

### **64. [高精度RNA構造予測フレームワークDRfold2が複数のベンチマークでSOTAを上回る](https://hyper.ai/news/38506)**

- **研究ハイライト：** [https://hyper.ai/news/38506](https://hyper.ai/news/38506)
- **研究チーム：** シンガポール国立大学Yang Zhang教授のチーム
- **関連研究：** RNA構造予測フレームワークDRfold2、教師なし接触予測精度、複合RNA言語モデル、DRfold2 RNAテストデータセット、CASP15データセット、Transformerモジュール、構造ノイズ除去モジュール
- **掲載誌：** bioRxiv、2025.03
- **論文：** [複合言語モデルとノイズ除去エンドツーエンド学習によるab initio RNA構造予測](https://www.biorxiv.org/content/10.1101/2025.03.05.641632v1)

### **65. [新しいタンパク質設計アルゴリズムDRAKESが生物学的配列設計のボトルネックを突破](https://hyper.ai/news/38675)**

- **研究ハイライト：** [https://hyper.ai/news/38675](https://hyper.ai/news/38675)
- **研究チーム：** MIT、ハーバード大学、スタンフォード大学、カリフォルニア大学バークレー校、Genentechの研究者
- **関連研究：** 強化学習フレームワーク、PDB学習セット、Megascaleデータセット、DRAKESアルゴリズム、Gumbel-Softmax
- **掲載誌：** ICLR 2025、2024.08
- **論文：** [報酬最適化による離散拡散モデルのファインチューニング：DNAおよびタンパク質設計への応用](https://doi.org/10.48550/arXiv.2410.13643)

### **66. [機械学習支援UV吸光分光法で微生物汚染を検出](https://hyper.ai/news/38869)**

- **研究ハイライト：** [https://hyper.ai/news/38869](https://hyper.ai/news/38869)
- **研究チーム：** SMART（Singapore-MIT Alliance for Research and Technology）、A*SRL Singapore、NUS、MIT
- **関連研究：** 微生物汚染検出、異常検知戦略、機械学習、サポートベクターマシン（SVM）、動径基底関数、PBS滅菌サンプル
- **掲載誌：** Nature、2025.03
- **論文：** [細胞治療製品の微生物汚染検出に向けた機械学習支援UV吸光分光法](https://hyper.ai/en/sota/papers/s41598-024-83114-y)

### **67. [タンパク質配列生成モデルを重複遺伝子の設計に活用](https://hyper.ai/news/39241)**

- **研究ハイライト：** [https://hyper.ai/news/39241](https://hyper.ai/news/39241)
- **研究チーム：** ワシントン大学David Baker氏のチーム
- **関連研究：** 重複遺伝子（OLG）、合成OLG設計研究、アミノ酸置換、バイオインフォマティクススクリーニング、統計モデリング、配列位置の体系的な走査
- **掲載誌：** bioRxiv、2025.05
- **論文：** [タンパク質配列の深層生成モデルを用いた重複遺伝子の設計](https://doi.org/10.1101/2025.05.06.652464)

### **68. [予測フレームワークPUPSが単一細胞レベルでのタンパク質細胞内局在を可能に](https://hyper.ai/news/39549)**

- **研究ハイライト：** [https://hyper.ai/news/39549](https://hyper.ai/news/39549)
- **研究チーム：** MIT、ハーバード大学
- **関連研究：** タンパク質細胞内局在、Human Protein Atlas、未観測タンパク質の細胞内局在、未観測タンパク質細胞内局在予測（PUPS）フレームワーク、保留データセット、ESM-2タンパク質言語モデル、CNN、分離畳み込み
- **掲載誌：** Nature Methods、2025.05
- **論文：** [単一細胞におけるタンパク質細胞内局在の予測](https://go.hyper.ai/LeaQF)

### **69. [UniMoMo：分子種を横断する初の統一生成フレームワークが多種類の医薬分子設計を可能に](https://hyper.ai/news/39852)**

- **研究ハイライト：** [https://hyper.ai/news/39852](https://hyper.ai/news/39852)
- **研究チーム：** 清華大学Yang Liu氏のグループ、人民大学Wenbing Huang氏のグループ、ByteDance AI Drug Discoveryチーム
- **関連研究：** UniMoMoフレームワーク、全原子反復変分オートエンコーダー（IterVAE）、全原子幾何学的潜在空間拡散モデル、統一モデリング
- **掲載誌：** ICML 2025、2025.03
- **論文：** [UniMoMo：de novo結合体設計に向けた3D分子の統一生成モデリング](https://hyper.ai/papers/2503.19300)

### **70. [タンパク質言語モデルProt42が標的タンパク質配列だけから高親和性結合体を生成](https://hyper.ai/news/40385)**

- **研究ハイライト：** [https://hyper.ai/news/40385](https://hyper.ai/news/40385)
- **研究チーム：** Inception AI（アラブ首長国連邦アブダビ）、Cerebras Systems（米国シリコンバレー）
- **関連研究：** PDIdb 2010データセット、UniRef50データベース、STRINGデータベース、タンパク質機能予測、タンパク質細胞内局在予測、タンパク質構造予測、PPI予測、タンパク質結合体生成、DNA配列特異的結合体生成
- **掲載誌：** arXiv、2025.05
- **論文：** [Prot42：標的認識型タンパク質結合体生成のための新たなタンパク質言語モデルファミリー](https://go.hyper.ai/cFupD)

### **71. [生体分子動力学シミュレーターUniSimが分子種と化学環境を横断した時間粗視化動力学シミュレーションを初めて統一](https://hyper.ai/news/40483)**

- **研究ハイライト：** [https://hyper.ai/news/40483](https://hyper.ai/news/40483)
- **研究チーム：** 清華大学Yang Liu氏のグループ、人民大学Wenbing Huang氏のグループ
- **関連研究：** 原子埋め込み拡張、マルチヘッド混合事前学習、TorchMD-NET GNNモデル、確率的補間フレームワーク、力誘導カーネル
- **掲載誌：** ICML 2025、2025.05
- **論文：** [UniSim：時間粗視化した生体分子動力学のための統一シミュレーター](https://go.hyper.ai/5NWuO)

### **72. [計算生物学アルゴリズムSimplifiedBondfinderが新規の窒素・酸素・硫黄結合69種を発見](https://hyper.ai/news/40515)**

- **研究ハイライト：** [https://hyper.ai/news/40515](https://hyper.ai/news/40515)
- **研究チーム：** ゲッティンゲン大学Sophia Bazzi氏・Sharareh Sayyad氏のチーム
- **関連研究：** SimplifiedBondfinderアルゴリズム、機械学習、量子力学計算、PDBデータセット、PDB-REDOデータセット、BDBデータセット、UMAP次元削減、NOS結合
- **掲載誌：** Communications Chemistry、2025.05
- **論文：** [タンパク質構造の体系的な再評価によるアルギニン・システインおよびグリシン・システインのNOS結合の発見](https://www.nature.com/articles/s42004-025-01535-w)

### **73. [新しいタンパク質配列設計法FAMPNNが主鎖と側鎖の情報を同時に処理](https://hyper.ai/news/41545)**

- **研究ハイライト：** [https://hyper.ai/news/41545](https://hyper.ai/news/41545)
- **研究チーム：** スタンフォード大学、Arc Institute（パロアルト）
- **関連研究：** タンパク質側鎖配座、FAMPNN法、S40データセット、PDBデータセット、CASP13/14/15データセット、SKEMPlv2データセット、S669データセット、Megascaleデータセット、FireProtDBデータセット、CR9114/CR6261データセット、反復サンプリング戦略、atom37形式、GNN、トークン単位のユークリッド拡散法
- **掲載誌：** ICML 2025、2025.06
- **論文：** [FAMPNNによる全原子タンパク質配列設計のための側鎖条件付けとモデリング](https://go.hyper.ai/JUJDq)

### **74. [原子レベルのタンパク質設計法La-Proteinaが最大800残基のタンパク質を高精度に生成](https://hyper.ai/news/41744)**

- **研究ハイライト：** [https://hyper.ai/news/41744](https://hyper.ai/news/41744)
- **研究チーム：** NVIDIA、Mila
- **関連研究：** 原子レベルのタンパク質設計、部分潜在フローマッチングフレームワークLa-Proteina、AFDBデータセット、2段階学習戦略
- **掲載誌：** arXiv、2025.06
- **論文：** [La-Proteina：部分潜在フローマッチングによる原子レベルのタンパク質生成](https://go.hyper.ai/3csT5)

### **75. [多鎖タンパク質複合体専用のAPMモデルが全原子設計と機能最適化を実現](https://hyper.ai/news/42059)**

- **研究ハイライト：** [https://hyper.ai/news/42059](https://hyper.ai/news/42059)
- **研究チーム：** 湖南大学、中国科学院大学、ByteDance Seedチーム
- **関連研究：** タンパク質、多鎖ネイティブモデリング、全原子表現最適化、配列・構造依存性の強化、PDBデータベース、Swiss-Protデータベース、AFDBデータベース、多鎖タンパク質データセット
- **掲載誌：** ICML 2025、2025.07
- **論文：** [タンパク質複合体設計のための全原子生成モデル](https://go.hyper.ai/TVp4i)

### **76. [新たな天然変性領域結合タンパク質設計法Logosが創薬困難な標的に特化](https://hyper.ai/news/42611)**

- **研究ハイライト：** [https://hyper.ai/news/42611](https://hyper.ai/news/42611)
- **研究チーム：** ワシントン大学David Baker氏のチーム
- **関連研究：** RFdiffusionモデル、誘導適合、足場生成、ポケット特化、ポケット組み立て
- **掲載誌：** Science、2025.07
- **論文：** [天然変性領域結合タンパク質の設計](https://www.science.org/doi/10.1126/science.adr8063)

### **77. [新たなタンパク質動的融合表現フレームワークFusionProtが公開され、反復的な情報交換を実現](https://hyper.ai/news/43724)**

- **研究ハイライト：** [https://hyper.ai/news/43724](https://hyper.ai/news/43724)
- **研究チーム：** テクニオン、Meta AI
- **関連研究：** タンパク質言語モデル、表現学習フレームワークFusionProt、AlphaFold DB、AlphaFold2、DeepFRIデータセット、学習可能な融合トークン、マルチビュー対照学習
- **掲載誌：** bioRxiv、2025.08
- **論文：** [FusionProt：配列情報と構造情報を融合した統一タンパク質表現学習](https://go.hyper.ai/OXLYl)

### **78. [トランスクリプトーム誘導型拡散モデルMorphDiffが公開され、表現型創薬を加速](https://hyper.ai/news/43849)**

- **研究ハイライト：** [https://hyper.ai/news/43849](https://hyper.ai/news/43849)
- **研究チーム：** 香港中文大学、ムハンマド・ビン・ザーイド人工知能大学
- **関連研究：** 細胞形態、潜在拡散モデル（LDM）、大規模細胞形態画像データセット、JUMPデータセット、CDRPデータセット、LINCSデータセット、形態VAE、潜在拡散モデル
- **掲載誌：** Nature Communications、2025.09
- **論文：** [トランスクリプトーム誘導型拡散モデルによる摂動下の細胞形態変化の予測](https://www.nature.com/articles/s41467-025-63478-z)

### **79. [AlphaPPIMIフレームワークが汎化性能を大幅に高め、PPI界面モジュレーター予測で既存手法を上回る](https://hyper.ai/news/43916)**

- **研究ハイライト：** [https://hyper.ai/news/43916](https://hyper.ai/news/43916)
- **研究チーム：** 中国石油大学、延世大学
- **関連研究：** タンパク質間相互作用、DLiPデータセット、ECFP4フィンガープリント、ChemDivデータベース、AlphaPPIMIフレームワーク、Uni-Mol2モデル、タンパク質特徴抽出、Transformerアーキテクチャ、ESM2-150Mモデル、ProtTransモデル
- **掲載誌：** Journal of Cheminformatics、2025.08
- **論文：** [Alphappimi：PPIモジュレーター相互作用を予測する包括的深層学習フレームワーク](https://jcheminf.biomedcentral.com/articles/10.1186/s13321-025-01077-2)

### **80. [新しい融合ニューラルネットワークフレームワークがタンパク質配列内の複数金属結合部位を効率的に予測](https://hyper.ai/news/44702)**

- **研究ハイライト：** [https://hyper.ai/news/44702](https://hyper.ai/news/44702)
- **研究チーム：** 香港科技大学
- **関連研究：** 融合ニューラルネットワークフレームワーク、タンパク質配列における複数金属結合部位の予測、CNN、融合ネットワーク、MbPAデータベース、深層学習フレームワーク
- **掲載誌：** bioRxiv、2025.09
- **論文：** [タンパク質配列中の複数金属結合部位を効率的に予測するモジュール型融合ニューラルネットワーク手法](https://go.hyper.ai/Y7DNU)

### **81. [高い合成可能性を備えた分子投影フレームワークReaSynが公開され、超高い再構成率と経路の多様性を達成](https://hyper.ai/news/44764)**

- **研究ハイライト：** [https://hyper.ai/news/44764](https://hyper.ai/news/44764)
- **研究チーム：** NVIDIA研究チーム
- **関連研究：** 創薬、ReaSynフレームワーク、教師あり学習、強化学習ファインチューニング、Transformerモデル、Chain-of-Reaction（CoR）表現
- **掲載誌：** arXiv、2025.09
- **論文：** [Chain-of-Reactionによる分子合成可能性の再考](https://arxiv.org/abs/2509.16084)

### **82. [制約付き強化学習フレームワークCtrl-DNAが公開され、特定細胞の遺伝子発現を「狙いどおりに制御」](https://hyper.ai/news/45227)**

- **研究ハイライト：** [https://hyper.ai/news/45227](https://hyper.ai/news/45227)
- **研究チーム：** トロント大学チーム、昌平実験室
- **関連研究：** 制約付きRLフレームワークCtrl-DNA、深層学習、細胞特異的遺伝子発現、DNA言語モデル、ヒトプロモーターデータセット、エンハンサーデータセット、細胞型特異的CREの制御生成、制約付きマルコフ決定過程、Enformerアーキテクチャ
- **掲載誌：** NeurIPS 2025、2025.05
- **論文：** [Ctrl-DNA：細胞特異的シス調節エレメント設計のための制約付き強化学習](https://arxiv.org/abs/2505.20578)

### **83. [PLACERフレームワークがタンパク質構造的不均一性の原子レベルモデリングという課題を解決](https://hyper.ai/news/46009)**

- **研究ハイライト：** [https://hyper.ai/news/46009](https://hyper.ai/news/46009)
- **研究チーム：** David Baker教授の研究チーム
- **関連研究：** グラフニューラルネットワークPLACER、Cambridge Structural Database、PDB、ノイズ除去ニューラルネットワーク、3トラックアーキテクチャ、小分子構造生成
- **掲載誌：** PNAS、2025.11
- **論文：** [PLACERによるタンパク質・小分子構造アンサンブルのモデリング](https://www.biorxiv.org/content/10.1101/2024.09.25.614868v2)

### **84. [Squidiffが複数シナリオのトランスクリプトームシミュレーションを可能にし、精密医療と空間医療の発展を後押し](https://hyper.ai/news/46212)**

- **研究ハイライト：** [https://hyper.ai/news/46212](https://hyper.ai/news/46212)
- **研究チーム：** コロンビア大学、スタンフォード大学
- **関連研究：** Squidiffフレームワーク、Splatterツール、ヒトiPSCから内胚葉への分化データセット、K562 CRISPRスクリーニング実験、条件付きDDIM、意味エンコーディング手法、Encode-Diffuse-Decodeアーキテクチャ
- **掲載誌：** Nature Methods、2025.11
- **論文：** [拡散モデルを用いた細胞発生および摂動応答の予測：Squidiff](https://www.nature.com/articles/s41592-025-02877-y)

### **85. [生成モデルPepTronと新たな評価ベンチマークが公開され、天然変性タンパク質アンサンブルの予測能力を刷新](https://hyper.ai/news/47063)**

- **研究ハイライト：** [https://hyper.ai/news/47063](https://hyper.ai/news/47063)
- **研究チーム：** Peptone、コペンハーゲン大学、NVIDIA、オックスフォード大学、MIT、デューク大学
- **関連研究：** PeptoneBench評価フレームワーク、生成モデルPepTron、PDB、IDRomeデータベース、NVIDIA BioNeMo、ESMFlow、混合学習戦略（実験データ＋合成データ）
- **掲載誌：** bioRxiv、2025.10
- **論文：** [秩序・無秩序連続体にわたるタンパク質アンサンブル予測の進展](https://www.biorxiv.org/content/10.1101/2025.10.18.680935v1)

### **86. [MITとハーバード大学が、特異性の高いプロテアーゼ基質の設計課題に挑むAIエンドツーエンドワークフローCleaveNetを提案](https://hyper.ai/news/48608)**

- **研究ハイライト：** [https://hyper.ai/news/48608](https://hyper.ai/news/48608)
- **研究チーム：** MITとハーバード大学の共同チーム
- **関連研究：** プロテアーゼ基質設計、CleaveNetワークフロー、合成ペプチド、予測モデル、生成モデル
- **掲載誌：** Nature Communications
- **論文：** [CleaveNet：プロテアーゼ基質向けAIベースのエンドツーエンド設計ワークフロー](https://www.nature.com/articles/s41467-025-67226-1)

### **87. [ゲーテ大学フランクフルトのチームがヒトE3リゴームの複雑性を解読するマルチスケール分類フレームワークを提案](https://hyper.ai/news/48813)**

- **研究ハイライト：** [https://hyper.ai/news/48813](https://hyper.ai/news/48813)
- **研究チーム：** ゲーテ大学フランクフルト研究チーム
- **関連研究：** ユビキチン・プロテアソーム系（UPS）、E3ユビキチンリガーゼ、ヒトE3リゴーム、距離学習
- **掲載誌：** Nature Communications
- **論文：** [マルチスケール分類によるヒトE3リゴームの複雑性の解読](https://www.nature.com/articles/s41467-025-67450-9)

### **88. [BasecampとNVIDIAがEDEN基盤モデルを共同公開し、AIでプログラム可能な治療設計を実現](https://hyper.ai/news/48964)**

- **研究ハイライト：** [https://hyper.ai/news/48964](https://hyper.ai/news/48964)
- **研究チーム：** Basecamp Research、NVIDIA、主要な学術機関
- **関連研究：** プログラム可能な生物学、EDENメタゲノム基盤モデル、遺伝子治療、リコンビナーゼ、抗菌ペプチド設計
- **掲載誌：** bioRxiv
- **論文：** [EDEN基盤モデルファミリーによるAIプログラム可能な治療法の設計](https://doi.org/10.64898/2026.01.12.699009)

### **89. [Microsoftらが日常的な病理標本から仮想mIFアトラスを生成するマルチモーダルAIフレームワークGigaTIMEを提案](https://hyper.ai/news/49359)**

- **研究ハイライト：** [https://hyper.ai/news/49359](https://hyper.ai/news/49359)
- **研究チーム：** Microsoft Research、ワシントン大学、Providence Genomics
- **関連研究：** 腫瘍微小環境、H&E染色、多重免疫蛍光（mIF）、GigaTIMEフレームワーク、空間プロテオミクス
- **掲載誌：** Cell
- **論文：** [腫瘍微小環境モデリングのための仮想集団をマルチモーダルAIで生成](https://www.cell.com/cell/fulltext/S0092-8674(25)01312-1)

### **90. [MITが深層学習言語モデルPichia-CLMを提案し、コドン最適化で組換えタンパク質の収量を向上](https://hyper.ai/news/49613)**

- **研究ハイライト：** [https://hyper.ai/news/49613](https://hyper.ai/news/49613)
- **研究チーム：** MIT研究チーム
- **関連研究：** Komagataella phaffii、コドン最適化、コドン使用頻度バイアス（CUB）、Pichia-CLM言語モデル、組換えタンパク質発現
- **掲載誌：** PNAS
- **論文：** [Pichia-CLM：Komagataella phaffiiのための言語モデルベースのコドン最適化パイプライン](https://www.pnas.org/doi/10.1073/pnas.2522052123)

### **91. [MITとETHが単一細胞マルチモーダルデータを効率的に統合・分離する深層学習フレームワークAPOLLOを共同提案](https://hyper.ai/news/49702)**

- **研究ハイライト：** [https://hyper.ai/news/49702](https://hyper.ai/news/49702)
- **研究チーム：** MITとETHチューリッヒの共同チーム
- **関連研究：** 単一細胞生物学、マルチモーダルデータ統合、APOLLOフレームワーク、scRNA-seq、scATAC-seq、空間形態
- **掲載誌：** Nature Computational Science
- **論文：** [部分共有マルチモーダル埋め込みによる細胞状態の包括的表現学習](https://www.nature.com/articles/s43588-025-00948-w)

### **92. [香港中文大学らが修飾ペプチドの統一クロススケール表現学習を行うBi-TEAMフレームワークを共同提案](https://hyper.ai/news/49833)**

- **研究ハイライト：** [https://hyper.ai/news/49833](https://hyper.ai/news/49833)
- **研究チーム：** 香港中文大学、マカオ理工大学、浙江大学、中南大学第二湘雅病院、電子科技大学
- **関連研究：** ペプチド構造・機能モデリング、非標準アミノ酸修飾、クロススケール表現学習、Bi-TEAMフレームワーク
- **掲載誌：** arXiv
- **論文：** [Bi-TEAM：化学修飾生体分子のための統一クロススケール表現学習フレームワーク](https://arxiv.org/abs/2603.01873)

### **93. [カーネギーメロン大学らが全原子タンパク質モデルの量子精密化を行うAQuaRefを提案](https://hyper.ai/news/49895)**

- **研究ハイライト：** [https://hyper.ai/news/49895](https://hyper.ai/news/49895)
- **研究チーム：** カーネギーメロン大学、ヴロツワフ大学、フロリダ大学
- **関連研究：** タンパク質構造精密化、AQuaRef、機械学習原子間ポテンシャル（AIMNet2）、量子精密化、構造生物学
- **掲載誌：** Nature Communications
- **論文：** [AQuaRef：機械学習で加速するタンパク質構造の量子精密化](https://www.nature.com/articles/s41467-025-64313-1)

### **94. [NVIDIAらがタンパク質結合体の生成と最適化を統一するComplexaフレームワークを共同提案](https://hyper.ai/news/49977)**

- **研究ハイライト：** [https://hyper.ai/news/49977](https://hyper.ai/news/49977)
- **研究チーム：** NVIDIA、オックスフォード大学、Mila
- **関連研究：** タンパク質結合体設計、Proteína-Complexa（Complexa）、Teddymer、生成手法、テスト時計算
- **掲載誌：** ICLR 2026
- **論文：** [生成事前学習とテスト時計算による原子レベルのタンパク質結合体設計のスケーリング](https://openreview.net/forum?id=qmCpJtFZra)

### **95. [MITとCMUが振動動力学を導入してde novoタンパク質設計を強化するVibeGenを共同提案](https://hyper.ai/news/50061)**

- **研究ハイライト：** [https://hyper.ai/news/50061](https://hyper.ai/news/50061)
- **研究チーム：** MITとCMUの共同チーム
- **関連研究：** タンパク質動力学、VibeGenエージェント、言語拡散モデル、de novoタンパク質設計、振動振幅予測
- **掲載誌：** Matter
- **論文：** [VibeGen：言語拡散モデルを用いた、目標とする動力学を備えたエージェント型エンドツーエンドde novoタンパク質設計](https://www.cell.com/matter/abstract/S2590-2385(26)00069-X)

### **96. [パスツール研究所が深層学習で239万種の抗ファージタンパク質を予測し、細菌の免疫機構をマッピング](https://hyper.ai/news/50491)**

- **研究ハイライト：** [https://hyper.ai/news/50491](https://hyper.ai/news/50491)
- **研究チーム：** パスツール研究所研究チーム
- **関連研究：** 細菌の抗ウイルス免疫、抗ファージ防御システム、タンパク質言語モデル、ゲノム言語モデル、パンゲノミクス
- **掲載誌：** Science
- **論文：** [タンパク質・ゲノム言語モデルによる細菌免疫の未探索多様性の解明](https://www.science.org/doi/10.1126/science.adv8275)

### **97. [KAISTのチームがAIで低分子結合タンパク質をde novo設計し、バイオセンサーへの応用に成功](https://hyper.ai/news/50599)**

- **研究ハイライト：** [https://hyper.ai/news/50599](https://hyper.ai/news/50599)
- **研究チーム：** KAIST生物科学科研究チーム
- **関連研究：** de novoタンパク質設計、低分子結合タンパク質、NTF2様フォールド、バイオセンサー、化学誘導二量体化（CID）
- **掲載誌：** Nature Communications
- **論文：** [設計タンパク質ファミリーによる低分子の結合と検出](https://www.nature.com/articles/s41467-026-70953-8)

### **98. [トロント大学らがゲノム配列の効率的な階層モデリングを行うdnaHNetを提案](https://hyper.ai/news/50709)**

- **研究ハイライト：** [https://hyper.ai/news/50709](https://hyper.ai/news/50709)
- **研究チーム：** トロント大学、Vector Institute、Arc Institute
- **関連研究：** ゲノム配列学習、基盤モデル、dnaHNet、動的トークン化、変異効果予測
- **掲載誌：** arXiv
- **論文：** [dnaHNet：ゲノム配列学習のためのスケーラブルな階層型基盤モデル](https://arxiv.org/abs/2602.10603)

### **99. [ロンドン大学クイーン・メアリー校らが最大規模のプロテオゲノム研究を実施し、疾患の分子機構を解明](https://hyper.ai/news/51343)**

- **研究ハイライト：** [https://hyper.ai/news/51343](https://hyper.ai/news/51343)
- **研究チーム：** ロンドン大学クイーン・メアリー校、ケンブリッジ大学
- **関連研究：** プロテオゲノミクス、タンパク質量的形質遺伝子座（pQTL）、循環タンパク質量、cis・trans遺伝子制御
- **掲載誌：** Cell
- **論文：** [複数コホートのプロテオゲノム解析によりプロテオームと疾患群全体の遺伝的影響を解明](https://www.cell.com/cell/fulltext/S0092-8674(26)00385-5)

### **100. [ゲーテ大学フランクフルトらがgenESOMモデルを提案：生成AIで少数サンプルの動物実験を突破](https://hyper.ai/news/51430)**

- **研究ハイライト：** [https://hyper.ai/news/51430](https://hyper.ai/news/51430)
- **研究チーム：** ゲーテ大学フランクフルト、Fraunhofer ITMP
- **関連研究：** 少数サンプルの動物実験、生成AI、genESOMモデル、創発的自己組織化マップ
- **掲載誌：** Pharmacological Research
- **論文：** [誤差膨張制御を組み込んだ自己組織化ニューラルネットワーク生成AIにより、サンプル数を削減した前臨床研究からの有効な知識抽出を強化](https://www.sciencedirect.com/science/article/pii/S1043661826000745)

## **AI＋ヘルスケア**

### **1. [深層学習システムDeepDR Plusが眼底画像から糖尿病網膜症を予測](https://hyper.ai/news/29769)**

- **研究ハイライト：** [https://hyper.ai/news/29769](https://hyper.ai/news/29769)
- **研究チーム：** 上海交通大学のWeiping Jia教授、Huating Li氏、Bin Sheng氏のチーム、清華大学Tianyin Huang氏の研究チーム
- **関連研究：** SDPPデータ、DRPSデータ、ResNet-50、眼底モデル、自己教師あり学習、IBS評価モデル、メタモデル。臨床スクリーニングの平均間隔を12か月から31.97か月に延長。
- **掲載誌：** Nature Medicine、2024.01
- **論文：** [糖尿病網膜症の進行までの期間を予測する深層学習システム](https://www.nature.com/articles/s41591-023-02702-z)

### **2. [ロジスティック回帰モデルで緑地景観指数の高さがMetSリスクを低下させることを分析](https://hyper.ai/news/29559)**

- **研究ハイライト：** [https://hyper.ai/news/29559](https://hyper.ai/news/29559)
- **研究チーム：** 浙江大学Xifeng Wu研究チーム
- **関連研究：** 畳み込みニューラルネットワークモデル、ロジスティック回帰モデル、Isochrone API
- **掲載誌：** Environment International、2024.01
- **論文：** [職場で目にする屋外の緑地と中国人成人のメタボリックシンドロームとの有益な関連](https://doi.org/10.1016/j.envint.2023.108327)

### **3. [深層学習システムが若手眼科医の診断一致度を12％向上](https://hyper.ai/news/29549)**

- **研究ハイライト：** [https://hyper.ai/news/29549](https://hyper.ai/news/29549)
- **研究チーム：** 北京協和医院、四川大学華西医院、河北医科大学第二医院、天津医科大学眼科医院、温州医科大学、北京Airdoc科技、中国人民大学
- **関連研究：** 品質評価モデル、診断モデル、CNN。眼底疾患13種に対する新たな自動検出法を提供。
- **掲載誌：** npj digital medicine、2024.01
- **論文：** [眼底疾患13種の診断を若手眼科医が行う際の深層学習システムの支援性能：前向き多施設臨床試験](https://www.nature.com/articles/s41746-023-00991-9)

### **4. [GSP-GCNがパーキンソン病診断で最大90.2％の精度を達成](https://hyper.ai/news/29189)**

- **研究ハイライト：** [https://hyper.ai/news/29189](https://hyper.ai/news/29189)
- **研究チーム：** 中国科学院深圳先進技術研究院、中山大学附属第一病院
- **関連研究：** グラフ信号処理（GSP）モジュール、グラフネットワークモジュール、分類器、解釈可能モデル
- **掲載誌：** npj Digital Medicine、2024.01
- **論文：** [音声関連EEGを用いたパーキンソン病診断のための、グラフ学習に基づく解釈可能モデル](https://www.nature.com/articles/s41746-023-00983-9)

### **5. [乳がん予後スコアリングシステムMIRS](https://hyper.ai/news/29304)**

- **研究ハイライト：** [https://hyper.ai/news/29304](https://hyper.ai/news/29304)
- **研究チーム：** ケンタッキー大学、マカオ科技大学、マカオ大学、広州医科大学
- **関連研究：** TCGAデータベース、ニューラルネットワークモデル、予後スコアリングシステム、ESTIMATEアルゴリズム、機械学習、XGboost、Boruta RF、ElasticNet
- **掲載誌：** iScience、2023.11
- **論文：** [MIRS：乳がんの予後と治療を予測するAIスコアリングシステム](https://doi.org/10.1016/j.isci.2023.108322)

### **6. [網膜画像基盤モデルRETFoundが複数の全身疾患を予測](https://hyper.ai/news/28113)**

- **研究ハイライト：** [https://hyper.ai/news/28113](https://hyper.ai/news/28113)
- **研究チーム：** UCLとムーアフィールズ眼科病院の博士課程学生Yukun Zhou氏ら
- **関連研究：** 自己教師あり学習、MEH-MIDASデータセット、EyePACSデータセット、SL-ImageNet、SSL-ImageNet、SSL-Retinal
- **掲載誌：** Nature、2023.08
- **論文：** [網膜画像から汎用性の高い疾患検出を行う基盤モデル](https://www.nature.com/articles/s41586-023-06555-x)

### **7. [SVMで触覚センサーを最適化し、点字認識率96.12％を達成](https://hyper.ai/news/26561)**

- **研究ハイライト：** [https://hyper.ai/news/26561](https://hyper.ai/news/26561)
- **研究チーム：** 浙江大学Geng Yang氏・Kaichen Xu氏のグループ
- **関連研究：** SVMアルゴリズム、機械学習、CNN、適応モーメント推定アルゴリズム。動的な触覚パターン6種を正確に識別。
- **掲載誌：** Advanced Science、2023.09
- **論文：** [機械学習対応の触覚センサー設計による動的タッチの解読](https://onlinelibrary.wiley.com/doi/10.1002/advs.202303949)

### **8. [中国科学院北京ゲノム研究所がオープンな生物医学画像アーカイブを構築](https://hyper.ai/news/26334)**

- **研究ハイライト：** [https://hyper.ai/news/26334](https://hyper.ai/news/26334)
- **研究チーム：** 中国科学院北京ゲノム研究所
- **関連研究：** TCIAデータベース、匿名化、品質管理、Collection、Individual、Study、Series、Image、三つ組ネットワーク、注意モジュール
- **掲載誌：** bioRxiv、2023.08
- **論文：** [物理的一貫性を用いたホログラム再構成の自己教師あり学習](https://www.nature.com/articles/s42256-023-00704-7)

### **9. [AI「Lunit」が医師に匹敵する精度でマンモグラムを読影](https://hyper.ai/news/26135)**

- **研究ハイライト：** [https://hyper.ai/news/26135](https://hyper.ai/news/26135)
- **研究チーム：** ノッティンガム大学研究チーム
- **関連研究：** PERFORMSデータセット、アノテーション＋スコアリング。AIの感度は医師と同等で、特異度にも有意差はなかった。
- **掲載誌：** Radiology、2023.09
- **論文：** [マンモグラフィ検診の個人別性能評価プログラムを用いた乳がん検出AIアルゴリズムの性能評価](https://pubs.rsna.org/doi/10.1148/radiol.223299)

### **10. [特徴選択戦略で乳がんバイオマーカーを検出](https://hyper.ai/news/24589)**

- **研究ハイライト：** [https://hyper.ai/news/24589](https://hyper.ai/news/24589)
- **研究チーム：** イタリア、ナポリ・フェデリコ2世大学
- **関連研究：** 機械学習、特徴選択戦略、TCGA/GEOデータセット、Gain Ratio、RF、SVM-RFE
- **掲載誌：** CIBB 2023、2023.07
- **論文：** [乳がんの診断バイオマーカー候補となるマイクロRNA群を検出するロバストな特徴選択戦略](https://www.researchgate.net/publication/372083934)

### **11. [勾配ブースティングモデルがBPSDのサブシンドロームを高精度に予測](https://hyper.ai/news/23926)**

- **研究ハイライト：** [https://hyper.ai/news/23926](https://hyper.ai/news/23926)
- **研究チーム：** 延世大学（韓国）研究チーム
- **関連研究：** 機械学習モデル、多重代入法、ロジスティック回帰モデル、ランダムフォレストモデル、勾配ブースティングモデル、SVMモデル
- **掲載誌：** Scientific Reports、2023.05
- **論文：** [認知症の行動・心理症状発現を予測する機械学習モデル：モデル開発と検証](https://www.nature.com/articles/s41598-023-35194-5)

### **12. [機械学習モデルで患者の1年死亡率を予測](https://hyper.ai/news/33905)**

- **研究ハイライト：** [https://hyper.ai/news/33905](https://hyper.ai/news/33905)
- **研究チーム：** 麻城人民医院（中国湖北省）
- **関連研究：** ロジスティック回帰モデル、機械学習モデル、GBM、RF、DT。1年死亡率に関わる上位3特徴量はNT-proBNP、アルブミン、スタチンだった。
- **掲載誌：** Cardiovascular Diabetology、2023.06
- **論文：** [耐糖能異常または糖尿病を合併する中国人高齢冠動脈疾患患者の1年死亡率を予測する機械学習モデル](https://cardiab.biomedcentral.com/articles/10.1186/s12933-023-01854-z)

### **13. [新たなAIブレイン・コンピューター・インターフェース技術により失語症患者が「話す」ことが可能に](https://hyper.ai/news/33914)**

- **研究ハイライト：** [https://hyper.ai/news/33914](https://hyper.ai/news/33914)
- **研究チーム：** カリフォルニア大学研究チーム
- **関連研究：** nltk Twitterコーパス、マルチモーダル音声神経義肢、ブレイン・コンピューター・インターフェース、深層学習モデル、Cornell Movie-Dialogs Corpus、合成音声アルゴリズム
- **掲載誌：** Nature、2023.08
- **論文：** [音声解読とアバター制御のための高性能神経義肢](https://www.nature.com/articles/s41586-023-06443-4)

### **14. [深層学習に基づく人工知能で膵臓がんを検出](https://hyper.ai/news/33923)**

- **研究ハイライト：** [https://hyper.ai/news/33923](https://hyper.ai/news/33923)
- **研究チーム：** Alibaba DAMO Academyと国内外の複数の医療機関
- **関連研究：** 深層学習、PANDA、nnU-Net、CNN、Transformer。PANDAはがん5例と臨床で見逃されていた26例を検出。
- **掲載誌：** Nature Medicine、2023.11
- **論文：** [非造影CTと深層学習による大規模膵臓がん検出](https://www.nature.com/articles/s41591-023-02640-w)

### **15. [機械学習支援による肺がん検診の集団レベルでの有効性](https://hyper.ai/news/31197)**

- **研究ハイライト：** [https://hyper.ai/news/31197](https://hyper.ai/news/31197)
- **研究チーム：** Google Research Center
- **関連研究：** DS_CAデータセット、DS_NLSTデータセット、DS_USデータセット、DS_JPNデータセット、機械学習モデル、肺がん検診。特異度を5～7％向上し、症例ごとの検診時間を14秒短縮。
- **掲載誌：** Radiology AI、2024.03
- **論文：** [肺がん検診における支援AI：米国と日本での後ろ向き多国間研究](https://pubs.rsna.org/doi/11.1148/ryai.230079)

### **16. [卵巣がん診断AI融合モデルMCFが、日常的な検査データと年齢からリスクを算出](https://hyper.ai/news/30730)**

- **研究ハイライト：** [https://hyper.ai/news/30730](https://hyper.ai/news/30730)
- **研究チーム：** 中山大学Jihong Liu研究チーム
- **関連研究：** 特徴選択法、機械学習分類器、5分割交差検証、多基準意思決定理論。CA125およびHE4バイオマーカーを上回った。
- **掲載誌：** The Lancet Digital Health、2024.05
- **論文：** [中国の検査データを用いた卵巣がんの高精度診断を可能にする人工知能モデル：多施設後ろ向きコホート研究](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00245-5/fulltext)

### **17. [Googleが医療AIツールの公平性を評価する4段階プロセスHEALフレームワークを公開](https://hyper.ai/news/31535)**

- **研究ハイライト：** [https://hyper.ai/news/31535](https://hyper.ai/news/31535)
- **研究チーム：** Google Researchチーム
- **関連研究：** 機械学習、HEAL（Health Equity Assessment of Machine Learning）フレームワーク、ロジスティック回帰分析、交差性分析、健康の公平性
- **掲載誌：** EClinicalMedicine、2024.04
- **論文：** [機械学習性能の健康公平性評価（HEAL）：フレームワークと皮膚科AIモデルの事例研究](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(24)00058-0/fulltext)

### **18. [セマンティックセグメンテーションを活用した空間トランスクリプトミクスの注釈ツールPianno](https://hyper.ai/news/31573)**

- **研究ハイライト：** [https://hyper.ai/news/31573](https://hyper.ai/news/31573)
- **研究チーム：** 復旦大学Ying Zhu氏のチーム
- **関連研究：** コンピュータービジョン、機械学習、空間クラスタリング法、教師なしクラスタリング法、空間ポアソン点過程（sPPP）モデル、高次マルコフ確率場（MRF）事前分布
- **掲載誌：** Nature Communications、2024.04
- **論文：** [空間トランスクリプトミクスの意味注釈を自動化する確率的フレームワークPianno](https://www.nature.com/articles/s41467-024-47152-4)

### **19. [AIモデルUniFMIRが既存の蛍光顕微鏡イメージングの限界を突破](https://hyper.ai/news/31885)**

- **研究ハイライト：** [https://hyper.ai/news/31885](https://hyper.ai/news/31885)
- **研究チーム：** 復旦大学Bo Yan氏のチーム
- **関連研究：** UniFMIRモデル、マルチヘッドモジュール、特徴強化モジュール、マルチテールモジュール、Swin Transformer、適応モーメント推定、深層学習、SRモデル、U-Net
- **掲載誌：** Nature Methods、2024.04
- **論文：** [汎用的な蛍光顕微鏡画像復元のための基盤モデル事前学習](https://www.nature.com/articles/s41592-024-02244-3)

### **20. [深層学習システムががん生存予測の精度を向上](https://hyper.ai/news/32068)**

- **研究ハイライト：** [https://hyper.ai/news/32068](https://hyper.ai/news/32068)
- **研究チーム：** 上海国家応用数学センター（上海交通大学拠点）のZhangsheng Yu氏のグループ
- **関連研究：** 深層学習システム、STデータセット、統合グラフ・グラフ深層学習モデル、CNNとGNN、外部テストセットMCO-CRC、空間遺伝子発現モデル、スーパーパッチグラフ生存モデル、H&E染色組織画像の前処理
- **掲載誌：** Cell Reports Medicine、2024.05
- **論文：** [組織画像で描出された腫瘍微小環境を深層学習システムで活用し、がん予後を改善](https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(24)00205-2 )

### **21. [MemSAMが「Segment Anything」モデルを医療動画のセグメンテーションに適応](https://hyper.ai/news/32372)**

- **研究ハイライト：** [https://hyper.ai/news/32372](https://hyper.ai/news/32372)
- **研究チーム：** 深圳大学Huisi Wu氏
- **関連研究：** 視覚モデル、医療動画セグメンテーション、心エコー動画セグメンテーションモデル、メモリー強化機構、CAMUS・EchoNet-Dynamicデータセット、SonoSAMモデル、SAMUSモデル
- **掲載誌：** CVPR 2024、2024.05
- **論文：** [MemSAM：心エコー動画セグメンテーションに向けてSegment Anything Modelを適応](https://github.com/dengxl0520/MemSAM)

### **22. [医療画像セグメンテーションモデルMedical SAM 2がSOTAランキングで首位に](https://hyper.ai/news/33738)**

- **研究ハイライト：** [https://hyper.ai/news/33738](https://hyper.ai/news/33738)
- **研究チーム：** オックスフォード大学チーム
- **関連研究：** 医療画像セグメンテーションモデル、SAM 2、SA-V動画セグメンテーションデータセット、Medical SAM 2の例示データセット、画像エンコーダー、メモリーエンコーダー
- **掲載誌：** arXiv、2024.08
- **論文：** [Medical SAM 2：Segment Anything Model 2による医療画像の動画としてのセグメンテーション](https://arxiv.org/abs/2408.00874)

### **23. [機械学習で化学療法抵抗性と腫瘍再発に立ち向かい、乳がん幹細胞への強固な防御を構築](https://hyper.ai/news/33566)**

- **研究ハイライト：** [https://hyper.ai/news/33566](https://hyper.ai/news/33566)
- **研究チーム：** 山東大学、山西医科大学、Helix Matrixの共同研究
- **関連研究：** 機械学習、浸潤性乳管がん（BRCA）データセット、ピアソン相関、遺伝子セット濃縮解析
- **掲載誌：** Advanced Science、2024.07
- **論文：** [ポリアミン同化が化学療法誘発性の乳がん幹細胞濃縮を促進](https://onlinelibrary.wiley.com/doi/10.1002/advs.202404853)

### **24. [糖尿病ケア向け視覚言語モデルDeepDR-LLMがNature姉妹誌に掲載](https://hyper.ai/news/33292)**

- **研究ハイライト：** [https://hyper.ai/news/33292](https://hyper.ai/news/33292)
- **研究チーム：** 清華大学、上海交通大学、シンガポール国立大学
- **関連研究：** LLM、眼底画像に基づく深層学習、アダプターとLoRA、Transformerアーキテクチャ、教師ありファインチューニング
- **掲載誌：** Nature Medicine、2024.07
- **論文：** [プライマリ糖尿病ケア向け画像ベース深層学習と言語モデルの統合](https://www.nature.com/articles/s41591-024-03139-8)

### **25. [ベテラン病理医に匹敵！清華大学のチームが神経膠腫の精密診断に向けAI基盤モデルROAMを提案](https://hyper.ai/news/33136)**

- **研究ハイライト：** [https://hyper.ai/news/33136](https://hyper.ai/news/33136)
- **研究チーム：** 清華大学、湘雅医院
- **関連研究：** 大領域関心領域、ピラミッドTransformer、ROAM、大型画像パッチ、湘雅神経膠腫WSIデータセット、TCGA神経膠腫WSIデータセット、弱教師あり計算病理学
- **掲載誌：** Nature Machine Intelligence、2024.06
- **論文：** [臨床グレードの神経膠腫診断と分子マーカー発見のためのTransformerベース弱教師あり計算病理法](https://www.nature.com/articles/s42256-024-00868-w)

### **26. [汎用医療画像セグメンテーションモデルScribblePromptがSAMベースのモデルを上回る](https://hyper.ai/news/34720)**

- **研究ハイライト：** [https://hyper.ai/news/34720](https://hyper.ai/news/34720)
- **研究チーム：** MIT CSAIL、MGH、ハーバード医科大学
- **関連研究：** 深層学習、医療画像セグメンテーション、MegaMedicalデータセット、対話型セグメンテーション、生成合成ラベル、CNN・Transformerハイブリッド手法
- **掲載誌：** ECCV 2024、2024.07
- **論文：** [ScribblePrompt：あらゆる生物医学画像に対応する高速で柔軟な対話型セグメンテーション](https://arxiv.org/pdf/2312.07381)

### **27. [デジタルツイン脳プラットフォームが人間の脳に似た臨界現象と認知機能を実証](https://hyper.ai/news/34573)**

- **研究ハイライト：** [https://hyper.ai/news/34573](https://hyper.ai/news/34573)
- **研究チーム：** 復旦大学Jianfeng Feng教授のチーム
- **関連研究：** スパイキングニューラルネットワーク、デジタルツイン脳、リバースエンジニアリング、MRI、皮質・皮質下モデル、DTBモデル、データ同化モデル
- **掲載誌：** National Science Review、2024.05
- **論文：** [脳に類似した計算による人間の脳の安静時・課題遂行時状態の模倣と探究：スケーリングとアーキテクチャ](https://doi.org/10.1093/nsr/nwae080)

### **28. [自動LLM対話エージェントシミュレーションシステムがうつ病の初期診断を実施](https://hyper.ai/news/34845)**

- **研究ハイライト：** [https://hyper.ai/news/34845](https://hyper.ai/news/34845)
- **研究チーム：** 上海交通大学X-LANCE Lab、テキサス大学アーリントン校、TCCI、ThetaAI
- **関連研究：** 対話エージェントシミュレーションシステム、D4データセット、三次メモリーストレージアーキテクチャ、患者エージェント、精神科医エージェント、指導者エージェント
- **掲載誌：** arXiv、2024.09
- **論文：** [うつ病診断対話シミュレーション：三次メモリーを備えた自己改善型精神科医](https://arxiv.org/abs/2409.15084)

### **29. [深層学習モデルLucaProtがRNAウイルスの特定を支援](https://hyper.ai/news/34968)**

- **研究ハイライト：** [https://hyper.ai/news/34968](https://hyper.ai/news/34968)
- **研究チーム：** 中山大学、浙江大学、復旦大学、Alibaba Cloudなど
- **関連研究：** クラウドコンピューティングとAI、メタゲノム探索、NCBI SRAデータベース、CNGBdb、データ駆動型深層学習モデル、Transformerフレームワーク、潜在的なRNAウイルス種161,979種を発見
- **掲載誌：** Cell、2024.09
- **論文：** [人工知能を用いた未知のRNAウイルス圏の記録](https://doi.org/10.1016/j.cell.2024.09.027)

### **30. [医療画像事前学習フレームワークUniMedIが医療データの異質性による障壁を解消](https://hyper.ai/news/35128)**

- **研究ハイライト：** [https://hyper.ai/news/35128](https://hyper.ai/news/35128)
- **研究チーム：** 浙江大学Haoji Hu氏のチーム、Microsoft Research AsiaのLili Qiu氏のチーム
- **関連研究：** Pseudo-Pairs技術、MIMIC-CXR 2.0.0データセット、BIMCVデータセット、ViT-B/16視覚エンコーダー、BioClinicalBERT、視覚言語対照学習
- **掲載誌：** ECCV、2024.07
- **論文：** [言語誘導型共通意味空間における統一医療画像事前学習](https://eccv.ecva.net/virtual/2024/poster/1165)

### **31. [多言語医療大規模モデルMMed-Llama 3が医療応用シナリオへの適応を向上](https://hyper.ai/news/35242)**

- **研究ハイライト：** [https://hyper.ai/news/35242](https://hyper.ai/news/35242)
- **研究チーム：** 上海交通大学Yanfeng Wang氏・Weidi Xie氏のチーム
- **関連研究：** 多言語医療コーパスMMedC、医療QAベンチマークMMedBench、基盤モデルMMed-Llama 3、MMedLM
- **掲載誌：** Nature Communications、2024.09
- **論文：** [医療向け多言語言語モデルの構築に向けて](https://www.nature.com/articles/s41467-024-52417-z)

### **32. [カプセル内視鏡画像のスティッチング手法S2P-Matchingが画像再構成を支援](https://hyper.ai/news/35313)**

- **研究ハイライト：** [https://hyper.ai/news/35313](https://hyper.ai/news/35313)
- **研究チーム：** 華中科技大学、上海交通大学、中南民族大学、香港科技大学（広州）、香港理工大学、シドニー大学
- **関連研究：** S2P-Matching、自己教師あり対照学習、デュアルブランチエンコーダー、Transformer、画素レベル照合。照合精度を187.9％向上。
- **掲載誌：** IEEE Transactions on Biomedical Engineering、2024.09
- **論文：** [S2P-Matching：Transformerを用いたカプセル内視鏡画像スティッチングのための自己教師ありパッチベース照合](http://dx.doi.org/10.1109/TBME.2024.3462502)

### **33. [マルチモーダル医療ベンチマークGMAI-MMBenchは18の臨床タスクを網羅する284データセットを収録](https://hyper.ai/news/35938)**

- **研究ハイライト：** [https://hyper.ai/news/35938](https://hyper.ai/news/35938)
- **研究チーム：** 上海AI Lab、ワシントン大学、モナシュ大学、華東師範大学
- **関連研究：** GMAI-MMBenchベンチマーク、視覚言語大規模モデルを評価する、最も包括的なオープンソース汎用医療AIベンチマーク
- **掲載誌：** NeurIPS 2024、2024.08
- **論文：** [GMAI-MMBench：汎用医療AIに向けた包括的マルチモーダル評価ベンチマーク](https://arxiv.org/abs/2408.03361v7)

### **34. [新しい時系列予測法CGS-Maskが患者の生存率を左右する重要指標を発見](https://hyper.ai/news/36192)**

- **研究ハイライト：** [https://hyper.ai/news/36192](https://hyper.ai/news/36192)
- **研究チーム：** 華中科技大学、シドニー大学、同済病院
- **関連研究：** MIMIC-IIIデータセット、LSSTデータセット、NATOPSデータセット、AEデータセット。時系列予測と解釈可能性を組み合わせる。
- **掲載誌：** AAAI 2024、2024.03
- **論文：** [CGS-Mask：誰にとっても直感的な時系列予測](https://ojs.aaai.org/index.php/AAAI/article/view/29325)

### **35. [非侵襲的脳デコーディングフレームワークfMRIがブレイン・コンピューター・インターフェースと認知モデルの基盤を構築](https://hyper.ai/news/36023)**

- **研究ハイライト：** [https://hyper.ai/news/36023](https://hyper.ai/news/36023)
- **研究チーム：** 中国科学院自動化研究所Yi Zeng氏のチーム
- **関連研究：** マルチモーダル統合フレームワーク、Natural Scenes Dataset、COCOデータセット、VAE・CLIP埋め込み、3D fMRI前処理器、マルチモーダルLLM
- **掲載誌：** NeurIPS 2024、2024.10
- **論文：** [神経活動から視覚と言語へ：脳記録に基づく視覚再構成と言語インタラクションの強化](https://nips.cc/virtual/2024/poster/93607)

### **36. [医療画像セグメンテーションモデルM2CF-Netがシェーグレン症候群の診断精度を向上](https://hyper.ai/news/36700)**

- **研究ハイライト：** [https://hyper.ai/news/36700](https://hyper.ai/news/36700)
- **研究チーム：** 華中科技大学Wei Tu教授・Feng Lu教授
- **関連研究：** M2CF-Net、小唾液腺病理スライドデータセット、ROI抽出、染色正規化、WSIパッチ化、Vahadaneアルゴリズム、パッチベース学習
- **掲載誌：** MedAI 2023、2023
- **論文：** [M2CF-Net：巣状リンパ球性唾液腺炎の病変セグメンテーションのための多解像度・マルチスケール交差融合ネットワーク](https://doi.ieeecomputersociety.org/10.1109/MedAI59581.2023.00063)

### **37. [BSAFusionがマルチモーダル医療画像の位置合わせと融合を可能に](https://hyper.ai/news/37104)**

- **研究ハイライト：** [https://hyper.ai/news/37104](https://hyper.ai/news/37104)
- **研究チーム：** 昆明理工大学、中国海洋大学
- **関連研究：** 医療画像処理、双方向段階的特徴位置合わせ（BSFA）、CT・MRI、PET・MRI、SPECT・MRIのデータセット、深層学習、コンピュータービジョン
- **掲載誌：** AAAI 2025、2024.11
- **論文：** [BSAFusion：位置合わせされていない医療画像融合のための双方向段階的特徴位置合わせネットワーク](https://arxiv.org/abs/2412.08050)

### **38. [マルチエージェントLLMフレームワークKG4Diagnosisが一般的な362疾患の診断を支援](https://hyper.ai/news/37208)**

- **研究ハイライト：** [https://hyper.ai/news/37208](https://hyper.ai/news/37208)
- **研究チーム：** ウォーリック大学、クランフィールド大学、ケンブリッジ大学、オックスフォード大学
- **関連研究：** KG4Diagnosis、階層型マルチエージェントフレームワーク、自動医療知識グラフ構築、一般開業医LLM（GPLLM）、専門医LLM
- **掲載誌：** AAAI-25 Bridge Program、2024.12
- **論文：** [KG4Diagnosis：知識グラフで強化した医療診断向け階層型マルチエージェントLLMフレームワーク](https://arxiv.org/abs/2412.16833)

### **39. [画像セグメンテーションモデルConDSegが医療画像における境界の曖昧さと共起の問題を解決](https://hyper.ai/news/37794)**

- **研究ハイライト：** [https://hyper.ai/news/37794](https://hyper.ai/news/37794)
- **研究チーム：** 中国地質大学、Baidu
- **関連研究：** 対照駆動型特徴強化フレームワークConDSeg、一貫性強化学習、意味分離モジュール、サイズ認識デコーダー、BCNet、Kvasir-SEGデータセット
- **掲載誌：** AAAI 2025、2024.12
- **論文：** [対照駆動型特徴強化による汎用医療画像セグメンテーションフレームワークConDSeg](https://arxiv.org/abs/2412.08345)

### **40. [医療モデルM³FMが疾患レポートと分類に対応するゼロショット臨床診断を実現](https://hyper.ai/news/37924)**

- **研究ハイライト：** [https://hyper.ai/news/37924](https://hyper.ai/news/37924)
- **研究チーム：** オックスフォード大学、ロチェスター大学、Amazon、西湖大学、Tencent Youtu Lab
- **関連研究：** ゼロショット臨床診断、医療画像、CLIPモデル、M³FMフレームワーク、MultiMedCLIP、MIMC-CXRデータセット、COVID-19-CT-CXR、CheXpert
- **掲載誌：** npj Digital Medicine、2025.02
- **論文：** [ゼロショット臨床診断向けマルチモーダル・マルチドメイン・多言語医療基盤モデル](https://www.nature.com/articles/s41746-024-01339-7)

### **41. [頭蓋骨CTからの深層学習による性別推定が法医学専門家を上回る](https://hyper.ai/news/38024)**

- **研究ハイライト：** [https://hyper.ai/news/38024](https://hyper.ai/news/38024)
- **研究チーム：** 西オーストラリア大学、ニューサウスウェールズ大学、ハサヌディン大学
- **関連研究：** 深層学習ベースの自動化フレームワーク、頭蓋骨の性別推定、3D CTスキャン、法医人類学
- **掲載誌：** Scientific Reports、2024.12
- **論文：** [深層学習と人間の評価者の比較：三次元CTスキャンによる法医学的性別推定](https://www.nature.com/articles/s41598-024-81718-y)

### **42. [AIが医学研究を後押し：大規模モデルがプライマリケア医の研修を支える「最良のパートナー」に](https://hyper.ai/news/38366)**

- **研究ハイライト：** [https://hyper.ai/news/38366](https://hyper.ai/news/38366)
- **研究チーム：** 上海交通大学、シンガポール国立大学、清華大学、デューク大学、ジョンズ・ホプキンス大学、メルボルン大学
- **関連研究：** 医師研修、DeepSeek、人間とAIの協調意思決定、LLM、慢性疾患の診断と治療
- **掲載誌：** Science Bulletin、2025.01
- **論文：** [糖尿病研修における大規模言語モデル：前向き研究](https://www.sciencedirect.com/science/article/pii/S2095927325000891)

### **43. [深層学習アルゴリズムAcneDGNetがニキビ病変の検出と重症度分類を実現](https://hyper.ai/news/38397)**

- **研究ハイライト：** [https://hyper.ai/news/38397](https://hyper.ai/news/38397)
- **研究チーム：** 北京大学国際病院
- **関連研究：** AcneDGNet、Vision Transformer、CNN、ACNE04データセット、Swin Transformerアーキテクチャ
- **掲載誌：** Scientific Reports、2025.01
- **論文：** [オンライン・オフライン医療シナリオにおける中国人集団向けニキビ病変検出・重症度分類モデルの評価](https://www.nature.com/articles/s41598-024-84670-z)

### **44. [マルチモーダル医療画像セグメンテーションモデルVISTA3Dが公開され、3D画像の自動セグメンテーションと対話的操作を実現](https://hyper.ai/news/38486)**

- **研究ハイライト：** [https://hyper.ai/news/38486](https://hyper.ai/news/38486)
- **研究チーム：** NVIDIA、UAMS、NIH、オックスフォード大学
- **関連研究：** VISTA3D、3Dスーパーボクセル特徴抽出、自動セグメンテーション、対話型セグメンテーションの二つのモダリティ
- **掲載誌：** arXiv、2024.11
- **論文：** [VISTA3D：3D医療画像のための統合セグメンテーション基盤モデル](https://doi.org/10.48550/arxiv.2406.05285)

### **45. [マルチプレーン心エコー統合セグメンテーションモデルEchoONEが複数断面を高精度にセグメント化](https://hyper.ai/news/38544)**

- **研究ハイライト：** [https://hyper.ai/news/38544](https://hyper.ai/news/38544)
- **研究チーム：** 深圳大学、深圳市人民医院
- **関連研究：** EchoONEモデル、CAMUSデータセット、HMC-QUデータセット、EchoNet_Dynamicデータセット
- **掲載誌：** CVPR 2025、2025.04
- **論文：** [EchoONE：一つのモデルで複数の心エコー断面をセグメント化](https://arxiv.org/abs/2412.02993)

### **46. [マルチエージェント対話フレームワークが診察をシミュレートし、疾患診断を支援](https://hyper.ai/news/38583)**

- **研究ハイライト：** [https://hyper.ai/news/38583](https://hyper.ai/news/38583)
- **研究チーム：** 四川大学華西医院、浙江大学、北京郵電大学
- **関連研究：** マルチエージェント会話（MAC）フレームワーク、LLM、Orphanet、Medline、GPT-3.5、GPT-4
- **掲載誌：** Nature、2025.03
- **論文：** [複数エージェントによる会話型大規模言語モデルで診断能力を強化](https://www.nature.com/articles/s41746-025-01550-0#Tab6)

### **47. [深層学習フレームワークSTAIGが腫瘍微小環境の詳細な遺伝情報を明らかに](https://hyper.ai/news/38587)**

- **研究ハイライト：** [https://hyper.ai/news/38587](https://hyper.ai/news/38587)
- **研究チーム：** 東京大学医科学研究所
- **関連研究：** STAIGフレームワーク、生体組織、STデータセット、GNN
- **掲載誌：** Nature Communications、2025.01
- **論文：** [STAIG：画像支援グラフ対照学習による空間トランスクリプトミクス解析で、ドメイン探索と位置合わせ不要の統合を実現](https://www.nature.com/articles/s41467-025-56276-0)

### **48. [初のオールインワン医療画像再識別フレームワークMaMIが11データセットすべてでSOTAを達成](https://hyper.ai/news/38624)**

- **研究ハイライト：** [https://hyper.ai/news/38624](https://hyper.ai/news/38624)
- **研究チーム：** 上海AI Labと複数の大学
- **関連研究：** MaMIフレームワーク、医療再識別ベンチマーク、連続モダリティ・パラメーターアダプター（ComPA）、医療基盤モデル（MFM）
- **掲載誌：** CVPR 2025、2025.03
- **論文：** [オールインワン医療画像再識別に向けて](https://arxiv.org/pdf/2503.08173)

### **49. [多対一回帰モデルM2OSTがデジタル病理画像から遺伝子発現を高精度に予測](https://hyper.ai/news/38783)**

- **研究ハイライト：** [https://hyper.ai/news/38783](https://hyper.ai/news/38783)
- **研究チーム：** 浙江大学、浙江ラボ、立命館大学
- **関連研究：** 全スライド画像（WSI）、ヒト乳がんデータセット、Transformerモデル、パッチレベル手法
- **掲載誌：** AAAI 2025、2024.12
- **論文：** [M2OST：デジタル病理画像から空間トランスクリプトミクスを予測する多対一回帰](https://arxiv.org/abs/2409.15092)

### **50. [脳MRIスキャンツールMindGlideが多発性硬化症病変を定量化](https://hyper.ai/news/38971)**

- **研究ハイライト：** [https://hyper.ai/news/38971](https://hyper.ai/news/38971)
- **研究チーム：** UCL研究チーム
- **関連研究：** MindGlideモデル、MRI、日常診療データセット、病変セグメンテーション、nnU-Net、3D CNN
- **掲載誌：** Nature Communications、2025.04
- **論文：** [臨床MRIアーカイブを多発性硬化症研究に転用し、過去のスキャンから新たな知見を得る](https://go.hyper.ai/fDEgm)

### **51. [階層蒸留型マルチインスタンス学習フレームワークHDMILがギガピクセルの全スライド画像を高速処理](https://hyper.ai/news/39157)**

- **研究ハイライト：** [https://hyper.ai/news/39157](https://hyper.ai/news/39157)
- **研究チーム：** ハルビン工業大学、ハルビン工業大学（深圳）
- **関連研究：** マルチインスタンス学習、腫瘍検出、WSI、Camelyon16データセット、TCGA-NSCLCデータセット
- **掲載誌：** CVPR 2025、2025.03
- **論文：** [階層蒸留型マルチインスタンス学習によるギガピクセル病理画像の高速・高精度分類](https://arxiv.org/abs/2502.21130)

### **52. [汎用3D血管セグメンテーション基盤モデルvesselFMがSAMベースのモデルを大きく上回る](https://hyper.ai/news/39201)**

- **研究ハイライト：** [https://hyper.ai/news/39201](https://hyper.ai/news/39201)
- **研究チーム：** チューリッヒ大学、チューリッヒ工科大学、ミュンヘン工科大学
- **関連研究：** 血管セグメンテーション、医療画像セグメンテーション、フローマッチングベースの条件付き生成モデル、ドメインランダム化戦略
- **掲載誌：** CVPR 2025、2025.01
- **論文：** [vesselFM：汎用3D血管セグメンテーションのための基盤モデル](https://go.hyper.ai/lVad9)

### **53. [グラフニューラルネットワークが肺がんの生存率を高精度に予測し、致死性の高い3つのサブタイプを発見](https://hyper.ai/news/39435)**

- **研究ハイライト：** [https://hyper.ai/news/39435](https://hyper.ai/news/39435)
- **研究チーム：** コーネル大学、Regeneron Pharmaceuticals
- **関連研究：** グラフ符号化混合生存（GEMS）、EHRデータベース、ConcertAI Patient360™ NSCLCデータセット、GNNエンコーダー
- **掲載誌：** Nature Communication、2025.05
- **論文：** [実世界データと機械学習による臨床転帰予測サブ表現型の特定](https://doi.org/10.1038/s41467-025-59092-8)

### **54. [融合戦略を用いたAIモデルが敗血症性ショックの死亡リスクを予測](https://hyper.ai/news/39713)**

- **研究ハイライト：** [https://hyper.ai/news/39713](https://hyper.ai/news/39713)
- **研究チーム：** 同済医院、華中科技大学
- **関連研究：** 敗血症性ショック、TOPSISベース分類融合（TCF）モデル、機械学習モデル
- **掲載誌：** npj digital medicine、2025.04
- **論文：** [多施設後ろ向き研究における敗血症性ショックのための人工知能ベース多診療科死亡予測モデル](https://go.hyper.ai/faMLL)

### **55. [HIEにおける世界初の臨床Graph-of-Thoughtモデルが神経認知予後予測を15％向上](https://hyper.ai/news/40828)**

- **研究ハイライト：** [https://hyper.ai/news/40828](https://hyper.ai/news/40828)
- **研究チーム：** ボストン小児病院、ハーバード医科大学、ニューヨーク大学、MIT-IBM Watson Lab
- **関連研究：** 医療推論ベンチマーク、臨床Graph-of-Thought（CGoT）モデル、HIE-Reasoningデータセット
- **掲載誌：** ICML 2025、2025.06
- **論文：** [専門家レベルのGraph-of-Thought医療推論のための視覚情報と領域知識](https://openreview.net/forum?id=tnyxtaSve5)

### **56. [多次元EHRデータによる患者コホートの詳細なモデル化で在院日数予測精度が16.3％向上](https://hyper.ai/news/41303)**

- **研究ハイライト：** [https://hyper.ai/news/41303](https://hyper.ai/news/41303)
- **研究チーム：** シンガポール国立大学、浙江大学
- **関連研究：** EHR、コホート認識型表現学習法NeuralCohort、MIMIC-III、MIMIC-IV、Diabetes130
- **掲載誌：** ICML 2025、2025.06
- **論文：** [NeuralCohort：医療分析のためのコホート認識型ニューラル表現学習](https://openreview.net/forum?id=bqQVa6VRvm)

### **57. [深層学習モデルAPEXが抗生物質候補をスクリーニング](https://hyper.ai/news/42377)**

- **研究ハイライト：** [https://hyper.ai/news/42377](https://hyper.ai/news/42377)
- **研究チーム：** ペンシルベニア大学
- **関連研究：** 世界規模の毒液データベース、APEXモデル予測、抗生物質の研究開発、動物毒液
- **掲載誌：** Nature Communications、2025.07
- **論文：** [Venomics人工知能を用いた抗菌薬発見に向けた世界各地の毒液の計算探索](https://www.nature.com/articles/s41467-025-60051-6)

### **58. [遺伝子シーケンシングと機械学習による下水疫学評価：ICA-Var法がウイルスを最大4週間早く検出](https://hyper.ai/news/42585)**

- **研究ハイライト：** [https://hyper.ai/news/42585](https://hyper.ai/news/42585)
- **研究チーム：** ネバダ大学ラスベガス校
- **関連研究：** 教師なし機械学習パイプライン、独立成分分析、ウイルス検出、二重回帰法、ICA-Var
- **掲載誌：** Nature Communications、2025.07
- **論文：** [ゲノムシーケンシングと機械学習による下水からの新興SARS-CoV-2変異株の早期検出](https://www.nature.com/articles/s41467-025-61280-5)

### **59. [双方向ブラウン橋拡散モデルが仮想染色の再現性を向上](https://hyper.ai/news/42959)**

- **研究ハイライト：** [https://hyper.ai/news/42959](https://hyper.ai/news/42959)
- **研究チーム：** カリフォルニア大学ロサンゼルス校
- **関連研究：** イメージング質量分析、拡散モデル、ブラウン橋拡散モデル、SNRベースのチャネル選択戦略
- **掲載誌：** Science Advances、2025.08
- **論文：** [イメージング質量分析におけるラベルフリー組織の仮想染色](https://go.hyper.ai/X9GEn)

### **60. [医療GraphRAGがQA精度記録を更新し、11のベンチマークデータセットでSOTAを達成](https://hyper.ai/news/43064)**

- **研究ハイライト：** [https://hyper.ai/news/43064](https://hyper.ai/news/43064)
- **研究チーム：** オックスフォード大学、カーネギーメロン大学、エディンバラ大学
- **関連研究：** RAG、Medical GraphRAG、U-Retrieval手法、MIMIC-IV、FakeHealth、PubHealth
- **掲載誌：** ACL 2025、2025.07
- **論文：** [Medical Graph RAG：グラフ検索拡張生成による安全な医療大規模言語モデルに向けて](https://go.hyper.ai/OaMIE)

### **61. [Healthcare Agentが医療倫理・安全性に関する問題を自動検出](https://hyper.ai/news/44006)**

- **研究ハイライト：** [https://hyper.ai/news/44006](https://hyper.ai/news/44006)
- **研究チーム：** 武漢大学、南洋理工大学
- **関連研究：** LLM、医療相談、Healthcare Agent、MedDialogデータセット
- **掲載誌：** Nature Artificial Intelligence、2025.09
- **論文：** [Healthcare agent：医療相談における大規模言語モデルの能力を引き出す](https://go.hyper.ai/09lYX)

### **62. [血球画像分類器CytoDiffusionが白血病の発見を支援し、臨床専門家を上回る](https://hyper.ai/news/47004)**

- **研究ハイライト：** [https://hyper.ai/news/47004](https://hyper.ai/news/47004)
- **研究チーム：** ケンブリッジ大学
- **関連研究：** 深層学習、医療画像解析、CNN、CytoDiffusion、CytoDataデータセット、Raabin-WBCデータセット、拡散モデル
- **掲載誌：** Nature、2025.11
- **論文：** [深層生成モデルによる血球形態分類](https://www.nature.com/articles/s42256-025-01122-7)

### **63. [UCLのチームが施設間の血液形態解析向け連合学習フレームワークMORPHFEDを提案](https://hyper.ai/news/49373)**

- **研究ハイライト：** [https://hyper.ai/news/49373](https://hyper.ai/news/49373)
- **研究チーム：** UCLコンピューターサイエンス学科
- **関連研究：** 血液形態検査、白血球形態解析、連合学習、プライバシー保護型医療AI
- **掲載誌：** arXiv
- **論文：** [MORPHFED：施設間血液形態解析のための連合学習](https://arxiv.org/abs/2601.04121)

### **64. [フランスの研究チームが肝細胞がん肝移植候補者の死亡率を高精度に予測する説明可能な機械学習フレームワークを提案](https://hyper.ai/news/49742)**

- **研究ハイライト：** [https://hyper.ai/news/49742](https://hyper.ai/news/49742)
- **研究チーム：** Télécom Paris、パリ・サクレー大学
- **関連研究：** 肝細胞がん（HCC）、肝移植待機リストの死亡リスク、アンサンブル学習、SHAP分析
- **掲載誌：** Health Data Science
- **論文：** [肝細胞がん肝移植候補者の説明可能な死亡予測：教師ありクラスタリング手法](https://spj.science.org/doi/10.34133/hds.0295)

### **65. [スタンフォード大学が初のネイティブ3D腹部CT視覚言語モデルMerlinを提案](https://hyper.ai/news/49864)**

- **研究ハイライト：** [https://hyper.ai/news/49864](https://hyper.ai/news/49864)
- **研究チーム：** スタンフォード大学
- **関連研究：** 腹部コンピューター断層撮影（CT）、3D視覚言語モデル（3D VLM）、Merlin、電子健康記録（EHR）
- **掲載誌：** Nature
- **論文：** [Merlin：コンピューター断層撮影の視覚言語基盤モデルとデータセット](https://www.nature.com/articles/s41586-026-10181-8)

## **AI＋材料化学**

*(以降の項目も同じ構成で続きます)*

### **1. [ハイスループット計算フレームワークが33分で新規MOF候補12万件を生成](https://hyper.ai/news/30269)**

- **研究ハイライト：** [https://hyper.ai/news/30269](https://hyper.ai/news/30269)
- **研究チーム：** アルゴンヌ国立研究所Eliu A. Huerta研究チーム
- **関連研究：** hMOFsデータセット、生成AI、GHP-MOFsassemble、MMPA、DiffLinker、CGCNN、GCMC
- **掲載誌：** Nature、2024.02
- **論文：** [炭素回収用金属有機構造体設計のための分子拡散モデルに基づく生成AIフレームワーク](https://www.nature.com/articles/s42004-023-01090-2)

### **2. [機械学習アルゴリズムでP-SOC電極材料をスクリーニング](https://hyper.ai/news/29069)**

- **研究ハイライト：** [https://hyper.ai/news/29069](https://hyper.ai/news/29069)
- **研究チーム：** 広州大学Siyu Ye研究チーム
- **関連研究：** XGBoost、機械学習モデル、RF、DFT。電極材料LCN91のスクリーニングに成功。
- **掲載誌：** ADVANCED FUNCTIONAL MATERIALS、2023.12
- **論文：** [プロトン固体酸化物電池の空気極向けプロトン伝導性Co/Fe系酸化物の機械学習支援スクリーニング](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202309855)

### **3. [SEN機械学習モデルが材料特性を高精度に予測](https://hyper.ai/news/28410)**

- **研究ハイライト：** [https://hyper.ai/news/28410](https://hyper.ai/news/28410)
- **研究チーム：** 中山大学Huashan Li氏・Biao Wang氏のグループ
- **関連研究：** Materials Projectデータベース、SEN、カプセル機構、深層学習
- **掲載誌：** Nature Communications、2023.08
- **論文：** [結晶カプセル表現による材料対称性認識と特性予測](https://www.nature.com/articles/s41467-023-40756-2)

### **4. [深層学習ツールGNoMEが220万種の新しい結晶を発見](https://hyper.ai/news/28347)**

- **研究ハイライト：** [https://hyper.ai/news/28347](https://hyper.ai/news/28347)
- **研究チーム：** Google DeepMind研究チーム
- **関連研究：** GNoMEデータベース、GNoME、SOTA GNNモデル、深層学習、Materials Project、OQMD、WBM、ICSD
- **掲載誌：** Nature、2023.11
- **論文：** [材料発見に向けた深層学習のスケーリング](https://www.nature.com/articles/s41586-023-06735-9)

### **5. [外場誘起型再帰埋め込み原子ニューラルネットワークが外場の強度・方向の変化を高精度に記述](https://hyper.ai/news/28285)**

- **研究ハイライト：** [https://hyper.ai/news/28285](https://hyper.ai/news/28285)
- **研究チーム：** 中国科学技術大学Bin Jiang氏のグループ
- **関連研究：** 外場誘起型再帰埋め込み原子ニューラルネットワークFIREANN、FIREANN-wFモデル
- **掲載誌：** Nature Communication、2023.10
- **論文：** [外場に対する原子系の応答のための汎用機械学習](https://www.nature.com/articles/s41467-023-42148-y)

### **6. [機械学習で多孔質材料の水吸着等温線を予測](https://hyper.ai/news/28260)**

- **研究ハイライト：** [https://hyper.ai/news/28260](https://hyper.ai/news/28260)
- **研究チーム：** 華中科技大学Song Li氏のグループ
- **関連研究：** EWAIDデータベース、機械学習モデル、RF、ANN
- **掲載誌：** Journal of Materials Chemistry A、2023.09
- **論文：** [機械学習支援による水吸着等温線と冷却性能の予測](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA03586G)

### **7. [BiVO(4)光アノード用共触媒の最適化に機械学習を活用](https://hyper.ai/news/28013)**

- **研究ハイライト：** [https://hyper.ai/news/28013](https://hyper.ai/news/28013)
- **研究チーム：** 清華大学Hongwei Zhu氏のグループ
- **関連研究：** ML、ニューラルネットワーク、AdaBoostアルゴリズム、勾配ブースティング、自己説明型モデル、バギングアルゴリズム、交差検証
- **掲載誌：** Journal of Materials Chemistry A、2023.10
- **論文：** [高性能光アノード触媒設計のための包括的機械学習戦略](https://pubs.rsc.org/en/content/articlelanding/2023/TA/D3TA04148D)

### **8. [深層学習に基づく逆合成予測アルゴリズムRetroExplainer](https://hyper.ai/news/27406)**

- **研究ハイライト：** [https://hyper.ai/news/27406](https://hyper.ai/news/27406)
- **研究チーム：** 山東大学、電子科技大学
- **関連研究：** RetroExplainer、深層学習、MSMS-GT、DAMT、解釈可能な意思決定モジュール
- **掲載誌：** Nature Communications、2023.10
- **論文：** [分子組み立てタスクに基づく解釈可能な深層学習フレームワークによる逆合成予測](https://www.nature.com/articles/s41467-023-41698-5)

### **9. [深層ニューラルネットワークとNLPで耐食合金を開発](https://hyper.ai/news/25891)**

- **研究ハイライト：** [https://hyper.ai/news/25891](https://hyper.ai/news/25891)
- **研究チーム：** マックス・プランク鉄鋼研究所（ドイツ）
- **関連研究：** DNN、NLP。合金の加工法や試験法に関するテキストデータを読み込み、新元素を予測できる。
- **掲載誌：** Science Advances、2023.08
- **論文：** [自然言語処理と深層学習による耐食合金設計の強化](https://www.science.org/doi/10.1126/sciadv.adg7992)

### **10. [深層学習が表面観察から材料内部の構造を特定](https://hyper.ai/news/25859)**

- **研究ハイライト：** [https://hyper.ai/news/25859](https://hyper.ai/news/25859)
- **研究チーム：** MIT研究チーム
- **関連研究：** 深層学習、有限要素解析、Abaqus可視化ツール、GAN、ViViT、CNN
- **掲載誌：** Advanced Materials、2023.03
- **論文：** [空欄を埋める：欠落した物理場情報を復元する転移可能な深層学習手法](https://onlinelibrary.wiley.com/doi/full/10.1002/adma.202301449)

### **11. [革新的なX線シンチレーターを用いて新材料3種を開発](https://hyper.ai/news/31465)**

- **研究ハイライト：** [https://hyper.ai/news/31465](https://hyper.ai/news/31465)
- **研究チーム：** 河北大学Hailei Zhang研究チーム
- **関連研究：** 水分散性X線シンチレーター、ナノ材料、ポリウレタンフォーム、X線イメージング用柔軟ヒドロゲルシンチレータースクリーン、多段階偽造防止情報暗号化複合ヒドロゲル
- **掲載誌：** Nature Communications、2024.03
- **論文：** [複数用途のためのポリマー材料への塗布・混合を可能にする水分散性X線シンチレーター](https://www.nature.com/articles/s41467-024-46287-8)

### **12. [半教師あり学習でラベルなしデータから隠れた情報を抽出](https://hyper.ai/news/31089)**

- **研究ハイライト：** [https://hyper.ai/news/31089](https://hyper.ai/news/31089)
- **研究チーム：** 上海交通大学Jiayu Wan研究チーム
- **関連研究：** 半教師あり学習、ラベルなしデータ、ベイズ共訓練、部分ビュー・全ビューのモデル。リチウム電池寿命の予測精度を20％向上。
- **掲載誌：** Joule、2024.03
- **論文：** [説明可能な少数ショット電池寿命予測のための半教師あり学習](https://doi.org/10.1016/j.joule.2024.02.020 )

### **13. [AutoMLに基づく知識抽出の自動化](https://hyper.ai/news/30920)**

- **研究ハイライト：** [https://hyper.ai/news/30920](https://hyper.ai/news/30920)
- **研究チーム：** 上海交通大学Yulian He研究チーム
- **関連研究：** AutoML、触媒、化学吸着エネルギー、Eads値、特徴削除実験、ニューラルネットワーク、ハイスループットDFT
- **掲載誌：** PNAS、2024.03
- **論文：** [AutoMLベースの特徴削除実験による化学吸着強度の解釈](https://hyper.ai/news/30920)

### **14. [Uni-MOF：3D MOF材料の吸着挙動を予測する機械学習モデル](https://hyper.ai/news/30663)**

- **研究ハイライト：** [https://hyper.ai/news/30663](https://hyper.ai/news/30663)
- **研究チーム：** 清華大学化学工学科Diannan Lu研究チーム
- **関連研究：** hMOFs50データベース、MOF/COFデータベース、Uni-MOFのファインチューニング。3D空間配置と原子間結合関係を63万件超評価。
- **掲載誌：** Nature Communications、2024.03
- **論文：** [金属有機構造体における高精度ガス吸着予測のための包括的Transformerベース手法](https://www.nature.com/articles/s41467-024-46276-x)

### **15. [マイクロエレクトロニクスがポスト・ムーア時代へ！DNNとナノメンブレン技術の統合で入射光角度を精密分析](https://hyper.ai/news/32326)**

- **研究ハイライト：** [https://hyper.ai/news/32326](https://hyper.ai/news/32326)
- **研究チーム：** 復旦大学Yongfeng Mei氏のグループ
- **関連研究：** 有限要素モデル、ひずみナノメンブレンの剥離モデル、フィックの法則、深層ニューラルネットワーク、3D光検出器、角度感度検出モデル
- **掲載誌：** Nature Communications、2024.04
- **論文：** [三次元角度感度光検出に向けたナノメンブレン巻き取りの多段階設計と構築](https://www.nature.com/articles/s41467-024-47405-2)

### **16. [リチウム電池性能の限界を塗り替える、アンサンブル学習に基づく簡略化電気化学モデルを提案](https://hyper.ai/news/32323)**

- **研究ハイライト：** [https://hyper.ai/news/32323](https://hyper.ai/news/32323)
- **研究チーム：** 武漢理工大学Jianqiang Kang氏のチーム
- **関連研究：** 簡略化電気化学モデル、アンサンブル学習モデル、機械学習、一次慣性要素（FIE）、離散時間実現アルゴリズム（DRA）、分数次Padé近似（FOM）、三パラメーター放物線近似（TPM）
- **掲載誌：** iScience、2024.05
- **論文：** [アンサンブル学習に基づくリチウムイオン電池の簡略化電気化学モデル](https://www.sciencedirect.com/science/article/pii/S2589004224009076)

### **17. [機械学習によって最強の鉄系超伝導磁石が誕生](https://hyper.ai/news/32556)**

- **研究ハイライト：** [https://hyper.ai/news/32556](https://hyper.ai/news/32556)
- **研究チーム：** 東京農工大学
- **関連研究：** BOXVIA機械学習、データ駆動ループ、数値シミュレーション、鉄系超伝導永久磁石Ba122、磁場冷却磁化（FCM）モデル
- **掲載誌：** NPG Asia Materials、2024.06
- **論文：** [データ主導・研究者主導のプロセス設計による鉄系超伝導体の超強力永久磁石](https://www.nature.com/articles/s41427-024-00549-5)

### **18. [ニューラルネットワークが密度汎関数理論を代替！汎用材料モデルが超高精度予測を実現](https://hyper.ai/news/32891)**

- **研究ハイライト：** [https://hyper.ai/news/32891](https://hyper.ai/news/32891)
- **研究チーム：** 清華大学物理学科Yong Xu氏・Wenhui Duan氏のチーム
- **関連研究：** Materials Projectデータベース、深層学習DFTハミルトニアン（DeepH）法、汎用材料モデル、ニューラルネットワーク、等変ニューラルネットワーク、AiiDAフレームワーク
- **掲載誌：** Science Bulletin、2024.06
- **論文：** [深層学習密度汎関数理論ハミルトニアンによる汎用材料モデル](https://doi.org/10.1016/j.scib.2024.06.011)

### **19. [ニューラルネットワーク密度汎関数フレームワークが物質の電子構造予測のブラックボックスを解明](https://hyper.ai/news/33525)**

- **研究ハイライト：** [https://hyper.ai/news/33525](https://hyper.ai/news/33525)
- **研究チーム：** 清華大学Yong Xu氏・Wenhui Duan氏のグループ
- **関連研究：** ニューラルネットワークDFT、変分DFT、等変ニューラルネットワーク、Julia言語、Zygote ADフレームワーク、深層学習、教師なし学習、DFT
- **掲載誌：** Phys. Rev. Lett.、2024.08
- **論文：** [変分エネルギー最小化に基づくニューラルネットワーク密度汎関数理論](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.076401)

### **20. [ニューラルネットワークを用いる光コンピューティング初の完全フォワードモード学習アーキテクチャが国内光チップの大きな進展を実現](https://hyper.ai/news/33440)**

- **研究ハイライト：** [https://hyper.ai/news/33440](https://hyper.ai/news/33440)
- **研究チーム：** 清華大学Qionghai Dai氏・Lu Fang氏の研究チーム
- **関連研究：** ニューラルネットワーク、完全フォワードモード、機械学習、MNIST、Fashion-MNIST、CIFAR-10、ImageNet、MWD、Irisデータセット、Chromium標的データセット
- **掲載誌：** Nature、2024.08
- **論文：** [光ニューラルネットワークの完全フォワードモード学習](https://www.nature.com/articles/s41586-024-07687-4)

*(長さの制約により、翻訳は提供された構成に正確に対応させています。書式と一貫性を保つため、AI＋材料化学の21～54項目、AI＋動植物学、AI＋農林畜産、AI＋気象学、AI＋天文学、AI＋自然災害、AI4S政策、その他の各セクションにも同様の翻訳規則を適用します。以下は、入力内容と完全に対応する分類論文の翻訳です。)*

### **21. [化学LLM ChemLLMが700万件のQAデータを網羅し、専門能力でGPT-4に匹敵](https://hyper.ai/news/34170)**

- **研究ハイライト：** [https://hyper.ai/news/34170](https://hyper.ai/news/34170)
- **研究チーム：** 上海AI Lab
- **関連研究：** 大規模化学データセットChemData、ChemPref-10K英語・中国語データセット、C-MHChemデータセット、ChemBench4K、ChemBench、Multi-Corpus、NLPタスク
- **掲載誌：** arXiv、2024.02
- **論文：** [ChemLLM：化学大規模言語モデル](https://arxiv.org/abs/2402.06852)

### **22. [ウェハースケールで製造可能なAI適応型マイクロ分光器](https://hyper.ai/news/34075)**

- **研究ハイライト：** [https://hyper.ai/news/34075](https://hyper.ai/news/34075)
- **研究チーム：** 復旦大学Yongfeng Mei氏のグループ
- **関連研究：** 光学分光器、小型再構成型分光器、CMOS ICプロセス、狭帯域チャネル電流データセット
- **掲載誌：** PNAS、2024.08
- **論文：** [自己参照型集積Fabry-Perot共振器を備えたCMOS互換再構成分光器](https://www.pnas.org/doi/10.1073/pnas.2403950121)

### **23. [GNNOptモデルが太陽電池と量子材料の候補を数百件特定](https://hyper.ai/news/35009)**

- **研究ハイライト：** [https://hyper.ai/news/35009](https://hyper.ai/news/35009)
- **研究チーム：** 東北大学、MIT
- **関連研究：** DFT計算、GNNOpt、アンサンブル埋め込み、等変GNN、Materials Projectデータベース
- **掲載誌：** Advanced Materials、2024.06
- **論文：** [結晶構造から光学スペクトルを直接予測する汎用アンサンブル埋め込みグラフニューラルネットワーク](https://onlinelibrary.wiley.com/doi/epdf/10.1002/adma.202409175)

### **24. [オープンなOMat24データセットにDFT計算結果1億1,000万件を収録](https://hyper.ai/news/35515)**

- **研究ハイライト：** [https://hyper.ai/news/35515](https://hyper.ai/news/35515)
- **研究チーム：** Meta
- **関連研究：** Open Materials 2024（OMat24）、EquformerV2（eqV2）、第一原理MD
- **掲載誌：** arxiv、2024.10
- **論文：** [Open Materials 2024（OMat24）無機材料データセットとモデル](https://arxiv.org/pdf/2410.12771)

### **25. [機械学習で合成した新規耐火高エントロピー合金が優れた室温延性を実現](https://hyper.ai/news/35536)**

- **研究ハイライト：** [https://hyper.ai/news/35536](https://hyper.ai/news/35536)
- **研究チーム：** 北京科技大学Yanjing Su氏のチーム
- **関連研究：** 遺伝的探索とMLの組み合わせ、クラスタリング解析、多目的最適化（MOO）フレームワーク
- **掲載誌：** Engineering、2024.09
- **論文：** [機械学習支援による、強度と延性を最適化した耐火高エントロピー合金の組成設計](https://www.sciencedirect.com/science/article/pii/S2095809924005113 )

### **26. [材料生成モデルFlowLLMが4万5,000件超の材料を含むデータセットを収録](https://hyper.ai/news/35846)**

- **研究ハイライト：** [https://hyper.ai/news/35846](https://hyper.ai/news/35846)
- **研究チーム：** Meta FAIR、アムステルダム大学
- **関連研究：** FlowLLM、S.U.N.材料生成、LLM、リーマン・フローマッチング（RFM）、MP-20データセット、LoRA
- **掲載誌：** NeurIPS 2024、2024.10
- **論文：** [FlowLLM：基底分布として大規模言語モデルを用いた材料生成のためのフローマッチング](https://arxiv.org/pdf/2410.23405)

### **27. [能動学習で高エントロピー酸化物1万4,000種を特定し、高活性水素発生触媒4種のスクリーニングに成功](https://hyper.ai/news/36352)**

- **研究ハイライト：** [https://hyper.ai/news/36352](https://hyper.ai/news/36352)
- **研究チーム：** 清華大学Xun Wang氏、上海交通大学Liang Wu氏、中国科学院高エネルギー物理研究所Shengqi Chu氏、パデュー大学Guang Lin氏、デューク大学Yan Xiang氏の各チーム
- **関連研究：** 能動学習（AL）、Kennard-Stoneサンプリング、XRD、CrMnCoNiCu触媒
- **掲載誌：** Journal of the American Chemical Society、2024.10
- **論文：** [高い水素生成能力を持つ高エントロピー酸化物の能動学習誘導型発見](https://pubs.acs.org/doi/10.1021/jacs.4c06272)

### **28. [深層学習モデルBETE-NETが超伝導材料探索の効率を5倍に向上](https://hyper.ai/news/37658)**

- **研究ハイライト：** [https://hyper.ai/news/37658](https://hyper.ai/news/37658)
- **研究チーム：** フロリダ大学、テネシー大学
- **関連研究：** BETE-NET、α²F(ω)データセット、Eliashbergスペクトル関数データセット
- **掲載誌：** npj Computational Materials、2025.01
- **論文：** [電子・フォノン・スペクトル関数の温度調整深層学習による超伝導体発見の加速](https://www.nature.com/articles/s41524-024-01475-4)

### **29. [勾配ブースティング決定木（GBDT）技術により高エントロピー合金の耐酸化性をさらに高精度に予測](https://hyper.ai/news/37723)**

- **研究ハイライト：** [https://hyper.ai/news/37723](https://hyper.ai/news/37723)
- **研究チーム：** ボルドー大学、NIMS（日本）、清華大学（台湾）、ルーヴェン・カトリック大学、WEL Research Instituteの共同チーム
- **関連研究：** GBDT技術、XGBoostアルゴリズム、高温材料、高エントロピー合金（RHEA、RCCA）
- **掲載誌：** Scripta Materialia、2025.01
- **論文：** [高温耐酸化性のAI予測モデルによる耐火高エントロピー合金開発の進展](https://doi.org/10.1016/j.scriptamat.2024.116394)

### **30. [分子設計フレームワークRingFormerが有機材料分子の光電子特性をより正確に予測](https://hyper.ai/news/37870)**

- **研究ハイライト：** [https://hyper.ai/news/37870](https://hyper.ai/news/37870)
- **研究チーム：** 香港理工大学
- **関連研究：** 分子設計、Transformerアーキテクチャ、有機太陽電池、グラフニューラルネットワーク、RingFormer
- **掲載誌：** AAAI 2025、2024.12
- **論文：** [RingFormer：有機太陽電池特性予測のためのリング強化グラフTransformer](https://doi.org/10.48550/arXiv.2412.09030)

### **31. [無機材料の逆合成計画法Retrieval-Retroが無機材料の合成効率と精度を向上](https://hyper.ai/news/37969)**

- **研究ハイライト：** [https://hyper.ai/news/37969](https://hyper.ai/news/37969)
- **研究チーム：** 韓国化学技術研究院（KRICT）、KAIST
- **関連研究：** Retrieval-Retro、畳み込みVAE、マスクされた前駆体補完検索器、ニューラル反応エネルギー検索器
- **掲載誌：** NeurIPS 2024、2024.10
- **論文：** [Retrieval-Retro：専門知識を用いた検索ベースの無機逆合成](https://doi.org/10.48550/arXiv.2410.21341)

### **32. [大規模モデルで水素化物固体電解質の伝導機構を解読し、信頼性の高い活性化エネルギー予測モデルを構築](https://hyper.ai/news/39173)**

- **研究ハイライト：** [https://hyper.ai/news/39173](https://hyper.ai/news/39173)
- **研究チーム：** 東北大学、四川大学、芝浦工業大学
- **関連研究：** 固体電解質（SSE）、LLM、第一原理メタダイナミクス（MetaD）
- **掲載誌：** Angewandte Chemie-International Edition、2025.04
- **論文：** [大規模言語モデルを用いたデータ駆動型フレームワークによる、固体電池内二価水素化物電解質の複雑性の解明](https://go.hyper.ai/isQRi)

### **33. [機械学習でテラスケールの質量分析データを検索し、未知の化学反応を発見](https://hyper.ai/news/39224)**

- **研究ハイライト：** [https://hyper.ai/news/39224](https://hyper.ai/news/39224)
- **研究チーム：** ロシア科学アカデミーなど
- **関連研究：** 質量分析、機械学習駆動型検索エンジンMEDUSA Search、PubChemデータベース
- **掲載誌：** Nature Communications、2025.01
- **論文：** [テラスケールの質量分析データを機械学習で解読して有機反応を発見](https://go.hyper.ai/ak7bN)

### **34. [拡散モデルに基づく生成AI構造解法PXRDnetが複雑なシミュレーションナノ結晶200個の解明に成功](https://hyper.ai/news/39287)**

- **研究ハイライト：** [https://hyper.ai/news/39287](https://hyper.ai/news/39287)
- **研究チーム：** コロンビア大学、スタンフォード大学
- **関連研究：** X線回折、PXRDnet、MP-20-PXRDベンチマークデータセット、Materials Projectデータベース、CDVAEアーキテクチャ、PXRD回帰器
- **掲載誌：** Nature Materials、2025.04
- **論文：** [拡散モデルによるナノ結晶粉末回折データからのab initio構造解法](https://go.hyper.ai/r1K6b)

### **35. [DreaMSモデルが分子質量スペクトル2億件を網羅し、世界最大の質量分析データセットGeMSを構築](https://hyper.ai/news/40201)**

- **研究ハイライト：** [https://hyper.ai/news/40201](https://hyper.ai/news/40201)
- **研究チーム：** チェコ科学アカデミー有機化学・生化学研究所
- **関連研究：** GeMSデータセット、局所性鋭敏型ハッシュ（LSH）、BERTアーキテクチャ、自己教師あり学習、フーリエ特徴量、線形プロービング
- **掲載誌：** Nature Biotechnology、2025.05
- **論文：** [DreaMSを用いたタンデム質量スペクトル数百万件からの分子表現の自己教師あり学習](https://go.hyper.ai/uNbqL)

### **36. [等変機械学習フレームワークが材料の大規模電場シミュレーションを加速](https://hyper.ai/news/40600)**

- **研究ハイライト：** [https://hyper.ai/news/40600](https://hyper.ai/news/40600)
- **研究チーム：** ハーバード大学、Robert Bosch LLC
- **関連研究：** 機械学習フレームワーク、ニューラルネットワークアーキテクチャ、材料振動、誘電特性、強誘電ヒステリシス
- **掲載誌：** Nature Communications、2025.04
- **論文：** [電気応答の統一的な微分可能学習](https://go.hyper.ai/18TWg)

### **37. [マルチソースデータ統合法でセメントクリンカー代替材25種をスクリーニング、温室効果ガス12億トンの削減に相当](https://hyper.ai/news/40742)**

- **研究ハイライト：** [https://hyper.ai/news/40742](https://hyper.ai/news/40742)
- **研究チーム：** MITのSoroush Mahjoubi氏・Elsa A. Olivetti氏
- **関連研究：** LLM、マルチタスクニューラルネットワーク、反応性評価フレームワーク
- **掲載誌：** Communication Materials、2025.05
- **論文：** [データ駆動型による二次・天然セメント系前駆体の材料スクリーニング](https://go.hyper.ai/ZOAaW)

### **38. [UNIMATEがトポロジー生成と特性予測の統一的なモデル化を初めて実現](https://hyper.ai/news/41186)**

- **研究ハイライト：** [https://hyper.ai/news/41186](https://hyper.ai/news/41186)
- **研究チーム：** バージニア工科大学、Meta AI
- **関連研究：** メタマテリアル、3Dトポロジー、機械学習、UNIMATEモデル、機械メタマテリアルベンチマーク
- **掲載誌：** ICML 2025、2025.06
- **論文：** [UNIMATE：機械メタマテリアルの生成、特性予測、条件確認を行う統一モデル](https://go.hyper.ai/FoAWw)

### **39. [全原子拡散Transformerフレームワークが周期・非周期原子系の統一的生成を初めて可能に](https://hyper.ai/news/41503)**

- **研究ハイライト：** [https://hyper.ai/news/41503](https://hyper.ai/news/41503)
- **研究チーム：** Meta FAIR、ケンブリッジ大学、MIT
- **関連研究：** Transformer、MP20データセット、QM9データセット、GEOM-DRUGSデータセット、QMOFデータセット
- **掲載誌：** ICML 2025、2025.06
- **論文：** [全原子拡散Transformer：分子と材料の統一生成モデリング](https://go.hyper.ai/27d7U)

### **40. [FASTSOLVモデルが任意の温度での小分子溶解度予測を実現し、推論速度を50倍に向上](https://hyper.ai/news/43318)**

- **研究ハイライト：** [https://hyper.ai/news/43318](https://hyper.ai/news/43318)
- **研究チーム：** MIT研究チーム
- **関連研究：** 小分子溶解度予測、BigSolDBデータセット、SolPropデータセット、Leedsデータセット、FASTSOLVモデル
- **掲載誌：** Nature Communication、2025.08
- **論文：** [偶然的不確実性の限界におけるデータ駆動型有機溶解度予測](https://www.nature.com/articles/s41467-025-62717-7)

### **41. [マルチモーダル機械学習モデルに基づく新手法が完全な結晶構造なしで材料特性を予測](https://hyper.ai/news/43410)**

- **研究ハイライト：** [https://hyper.ai/news/43410](https://hyper.ai/news/43410)
- **研究チーム：** トロント大学化学工学・応用化学科
- **関連研究：** マルチモーダル機械学習モデル、CoRE-2019データセット、BW20Kデータセット、QMOFデータセット、hMOFデータセット
- **掲載誌：** Nature Communications、2025.07
- **論文：** [マルチモーダル機械学習を用いた金属有機構造体の合成と応用の接続](https://www.nature.com/articles/s41467-025-62717-7)

### **42. [AIモデルCGformerがグローバル注意機構を独創的に統合し、高エントロピー材料の研究開発を支援](https://hyper.ai/news/44908)**

- **研究ハイライト：** [https://hyper.ai/news/44908](https://hyper.ai/news/44908)
- **研究チーム：** 上海交通大学AIMS-LabのJinjin Li氏・Fuqiang Huang氏のチーム
- **関連研究：** 高エントロピー材料の研究開発、AI材料設計モデルCGformer、ナトリウムイオン拡散障壁データセット
- **掲載誌：** Matter、2025.08
- **論文：** [CGformer：材料特性予測のためのグローバル注意機構を備えたTransformer強化結晶グラフネットワーク](https://www.cell.com/matter/abstract/S2590-2385(25)00423-0)

### **43. [新たな構造制約統合法SCIGENはあらゆる事前学習済み拡散モデルに適応](https://hyper.ai/news/44973)**

- **研究ハイライト：** [https://hyper.ai/news/44973](https://hyper.ai/news/44973)
- **研究チーム：** MITのMingda Li氏のチーム、ミシガン州立大学、オークリッジ国立研究所
- **関連研究：** AL（アルキメデス格子）材料データベース、拡散モデル、結晶構造生成、DiffCSPモデル
- **掲載誌：** Nature Materials、2025.09
- **論文：** [量子材料発見のための生成モデルにおける構造制約の統合](https://www.nature.com/articles/s41563-025-02355-y)

### **44. [物理情報に基づく生成AIモデルSpectroGenは単一モダリティ入力だけで、実験値との相関99％のクロスモーダル生成を実現](https://hyper.ai/news/45456)**

- **研究ハイライト：** [https://hyper.ai/news/45456](https://hyper.ai/news/45456)
- **研究チーム：** MIT研究チーム
- **関連研究：** SpectroGen、RRUFFデータベース、VAEフレームワーク、物理事前分布モデル
- **掲載誌：** Matter、2025.10
- **論文：** [SpectroGen：物理情報を取り入れた生成AIにより分光法を用いる材料特性評価のクロスモーダル処理を加速](https://www.cell.com/matter/abstract/S2590-2385(25)00477-1)

### **45. [MOF-ChemUnityがMOFに関する包括的知識を再構築し、材料発見を「説明可能なAI」の時代へ](https://hyper.ai/news/46723)**

- **研究ハイライト：** [https://hyper.ai/news/46723](https://hyper.ai/news/46723)
- **研究チーム：** トロント大学、カナダ国立研究機構Clean Energy Innovation Research Centre
- **関連研究：** 材料科学、MOF-ChemUnity、CoRE MOF 2019データベース、QMOFデータベース、LLM、グラフ拡張RAG
- **掲載誌：** ACS Publications、2025.11
- **論文：** [MOF-ChemUnity：金属有機構造体研究のための文献情報に基づく大規模言語モデル](https://pubs.acs.org/doi/10.1021/jacs.5c11789)

### **46. [軽量汎用ポテンシャルモデルPET-MADが公開され、少数サンプルで専用モデル級の精度を達成](https://hyper.ai/news/47637)**

- **研究ハイライト：** [https://hyper.ai/news/47637](https://hyper.ai/news/47637)
- **研究チーム：** EPFL
- **関連研究：** 第一原理計算、機械学習原子間ポテンシャル、PET-MADモデル、Point Edge Transformer構造
- **掲載誌：** Nature Communications
- **論文：** [先端材料モデリングのための軽量汎用原子間ポテンシャルとしてのPET-MAD](https://www.nature.com/articles/s41467-025-65662-7)

### **47. [AIシステムChemOntologyが公開、化学知識の統合により反応経路探索コストを半減](https://hyper.ai/news/48069)**

- **研究ハイライト：** [https://hyper.ai/news/48069](https://hyper.ai/news/48069)
- **研究チーム：** 北海道大学
- **関連研究：** ポテンシャルエネルギー面（PES）、固有反応座標（IRC）、人工力誘起反応（AFIR）、ChemOntology
- **掲載誌：** ACS Catalysis
- **論文：** [ChemOntology：反応経路探索を加速する再利用可能な明示的化学オントロジーベース手法](https://pubs.acs.org/doi/10.1021/acscatal.5c06298)

### **48. [プリンストン大学らがMOFの自由エネルギーを予測するLLM手法を提案し、合成可能性を高精度に評価](https://hyper.ai/news/48685)**

- **研究ハイライト：** [https://hyper.ai/news/48685](https://hyper.ai/news/48685)
- **研究チーム：** プリンストン大学、コロラド鉱山大学
- **関連研究：** 金属有機構造体（MOF）、自由エネルギー予測、大規模言語モデル（LLM）、熱力学的評価
- **掲載誌：** JACS（ACS Publications）
- **論文：** [機械学習によるMOF自由エネルギーの高精度・高速予測](https://pubs.acs.org/doi/10.1021/jacs.5c13960)

### **49. [イェール大学のチームがLLMを連携させて信頼性の高い化学合成計画を生成するMOSAICモデルを提案](https://hyper.ai/news/48806)**

- **研究ハイライト：** [https://hyper.ai/news/48806](https://hyper.ai/news/48806)
- **研究チーム：** イェール大学研究チーム
- **関連研究：** 現代合成化学、LLM、MOSAICモデル、知識構造化
- **掲載誌：** Nature
- **論文：** [AI支援化学合成における集合知](https://www.nature.com/articles/s41586-026-10131-4)

### **50. [MITらが材料合成経路の生成的計画を可能にする拡散モデルDiffSynを提案](https://hyper.ai/news/49252)**

- **研究ハイライト：** [https://hyper.ai/news/49252](https://hyper.ai/news/49252)
- **研究チーム：** MIT、ミュンヘン工科大学、バレンシア工科大学
- **関連研究：** 材料合成計画、生成拡散モデルDiffSyn、ゼオライト
- **掲載誌：** Nature Computational Science
- **論文：** [DiffSyn：材料合成計画のための生成拡散アプローチ](https://www.nature.com/articles/s43588-025-00949-9)

### **51. [ミシガン大学とFarasis Energyが「Discovery Learning」法を共同提案し、電池寿命予測サイクルを大幅に短縮](https://hyper.ai/news/49527)**

- **研究ハイライト：** [https://hyper.ai/news/49527](https://hyper.ai/news/49527)
- **研究チーム：** ミシガン大学アナーバー校Ziyou Song教授、Farasis EnergyのWeiran Jiang氏のチーム
- **関連研究：** 電池サイクル寿命予測、Discovery Learning（DL）、科学機械学習、リチウムイオンパウチセルデータセット
- **掲載誌：** Nature
- **論文：** [少数の実験から電池サイクル寿命を予測するDiscovery Learning](https://www.nature.com/articles/s41586-025-09951-7)

### **52. [コーネル大学が電池電解質の性能を高精度に予測・説明するSCANフレームワークを提案](https://hyper.ai/news/49537)**

- **研究ハイライト：** [https://hyper.ai/news/49537](https://hyper.ai/news/49537)
- **研究チーム：** コーネル大学研究チーム
- **関連研究：** 塩・溶媒化学、非水系電解質（NAE）、SCANフレームワーク、マルチ特徴量ネットワーク（MFNet）、動的ルーティング戦略
- **掲載誌：** Nature Computational Science
- **論文：** [塩・溶媒化学のための動的ルーティング誘導型解釈可能フレームワーク](https://www.nature.com/articles/s43588-026-00955-5)

### **53. [MITが材料内部欠陥を非破壊で特性評価・定量化する基盤大規模モデルDefectNetを提案](https://hyper.ai/news/50122)**

- **研究ハイライト：** [https://hyper.ai/news/50122](https://hyper.ai/news/50122)
- **研究チーム：** MIT研究チーム
- **関連研究：** 材料科学、欠陥工学、非破壊特性評価、振動スペクトル・フォノン状態密度（PDoS）、DefectNet、機械学習原子間ポテンシャル（MLIP）
- **掲載誌：** arXiv
- **論文：** [振動スペクトルから非破壊で欠陥を特定する基盤モデル](https://arxiv.org/abs/2506.00725)

### **54. [コーネル大学が電子顕微鏡画像の全工程自動解析を実現するマルチエージェントプラットフォームEMSeekを提案](https://hyper.ai/news/50298)**

- **研究ハイライト：** [https://hyper.ai/news/50298](https://hyper.ai/news/50298)
- **研究チーム：** コーネル大学研究チーム
- **関連研究：** 電子顕微鏡（EM）、マルチエージェントプラットフォーム、EMSeek、材料解析、構造モデリングと特性推定
- **掲載誌：** Science Advances
- **論文：** [自律型エージェントプラットフォームで電子顕微鏡と材料解析をつなぐ](https://www.science.org/doi/10.1126/sciadv.aed0583)

## **AI＋動植物学**

### **1. [少数ショット学習フレームワークに基づくSBeAが動物の社会行動を分析](https://hyper.ai/news/29353)**

- **研究ハイライト：** [https://hyper.ai/news/29353](https://hyper.ai/news/29353)
- **研究チーム：** 中国科学院深圳先進技術研究院Pengfei Wei研究チーム
- **関連研究：** PAIR-R24Mデータセット、双方向転移学習、教師なし学習、人工ニューラルネットワーク、個体識別モデル。複数動物の個体識別精度は90％を超える。
- **掲載誌：** Nature Machine Intelligence、2024.01
- **論文：** [少数ショット学習フレームワークによる複数動物の3D社会的姿勢推定・識別・行動埋め込み](https://www.nature.com/articles/s42256-023-00776-5)

### **2. [シャムネットワークに基づく深層学習法で胚の発生過程を自動的に捉える](https://hyper.ai/news/28419)**

- **研究ハイライト：** [https://hyper.ai/news/28787](https://hyper.ai/news/28419)
- **研究チーム：** システム生物学者Patrick Müller氏とコンスタンツ大学研究チーム
- **関連研究：** ImageNetデータセット、シャムネットワーク、深層学習、転移学習、三つ組損失学習、反復学習、サブタスク学習。人間の介入なしに胚発生の重要段階を特定する。
- **掲載誌：** Nature Methods、2023.11
- **論文：** [深層学習による発生時期とテンポの解明](https://www.nature.com/articles/s41592-023-02083-8)

### **3. [ドローンで植物の表現型データを収集し、最適な収穫日を予測する体系的パイプライン](https://hyper.ai/news/28303)**

- **研究ハイライト：** [https://hyper.ai/news/28303](https://hyper.ai/news/28303)
- **研究チーム：** 東京大学と千葉大学の研究チーム
- **関連研究：** 利益予測モデル、セグメンテーションモデル、対話型アノテーション、LabelMe、非線形回帰モデル、BiSeNetモデル
- **掲載誌：** Plant Phenomics、2023.09
- **論文：** [ドローンによる収穫データ予測が農場での食品ロスを減らし、農家の収入を改善](https://spj.science.org/doi/10.34133/plantphenomics.0086#body-ref-B4)

### **4. [AIカメラ警報システムがトラと他種を高精度に識別](https://hyper.ai/news/27954)**

- **研究ハイライト：** [https://hyper.ai/news/27954](https://hyper.ai/news/27954)
- **研究チーム：** クレムソン大学研究チーム
- **関連研究：** TrailGuard AI。関連画像を1分以内に保護区管理者の端末へ送信する。
- **掲載誌：** BioScience、2023.09
- **論文：** [AlphaMissenseによるプロテオーム全体のミスセンス変異効果の高精度予測](https://www.science.org/doi/10.1126/science.adg7492)（注：提示された元リンクはタイトルと一致しないようですが、ソースの記述に従ってそのまま保持しています。）

### **5. [ラブラドール・レトリバーのデータを用いた3モデルの比較で、探知犬の性能を左右する行動特性を解明](https://hyper.ai/news/25472)**

- **研究ハイライト：** [https://hyper.ai/news/25472](https://hyper.ai/news/25472)
- **研究チーム：** Nationwide Children's HospitalのAbigail Wexner Research InstituteとRocky Vista University
- **関連研究：** AT検査、Env検査、ランダムフォレスト、サポートベクターマシン、ロジスティック回帰、PCA、RFECV
- **掲載誌：** Scientific Reports、2023.08
- **論文：** [イヌ嗅覚探知プログラムにおける行動選択の機械学習による予測と分類](https://www.nature.com/articles/s41598-023-39112-7)

### **6. [ArcFace分類ヘッドに基づく複数種の顔画像認識モデル](https://hyper.ai/news/25164)**

- **研究ハイライト：** [https://hyper.ai/news/25164](https://hyper.ai/news/25164)
- **研究チーム：** ハワイ大学研究チーム
- **関連研究：** [鯨類データセット](https://github.com/knshnb/kaggle-happywhale-1st-place)、画像クロッピングモデル、画像認識モデル、YOLOv5、Detic。平均精度0.869を達成。
- **掲載誌：** Methods in Ecology and Evolution、2023.07
- **論文：** [深層学習による写真識別で鯨類24種の高い性能を実証](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14167)

### **7. [Python APIとコンピュータービジョンAPIを使って日本の桜の開花を監視](https://hyper.ai/news/24512)**

- **研究ハイライト：** [https://hyper.ai/news/24512](https://hyper.ai/news/24512)
- **研究チーム：** モナシュ大学（オーストラリア）研究チーム
- **関連研究：** ソーシャルネットワーキングサービス（SNS）データ、Google Cloud Vision AI、機械学習モデル
- **掲載誌：** Flora、2023.07
- **論文：** [ソーシャルネットワーキングサイト画像の分析で明らかになった日本各地の桜開花の時空間的特徴](https://www.sciencedirect.com/science/article/abs/pii/S0367253023001019)

### **8. [機械学習に基づく集団遺伝学的手法でブドウの風味形成メカニズムを解明](https://hyper.ai/news/24442)**

- **研究ハイライト：** [https://hyper.ai/news/24442](https://hyper.ai/news/24442)
- **研究チーム：** 中国科学院深圳農業ゲノム研究所
- **関連研究：** [ブドウゲノム配列](https://github.com/zhouyflab/Grapevine_Adaptive_Maladaptive_Introgression)、機械学習
- **掲載誌：** Proceedings of the National Academy of Sciences、2023.06
- **論文：** [ブドウの栽培化における適応的・非適応的遺伝子浸透](https://www.pnas.org/doi/abs/10.1073/pnas.2222041120)

### **9. [レビュー：AIでバイオインフォマティクス研究をより効率的に切り開く](https://hyper.ai/news/33931)**

- **研究ハイライト：** [https://hyper.ai/news/33931](https://hyper.ai/news/33931)
- **主な内容：** AIは、ホモロジー検索、複数配列アラインメント、系統樹構築、ゲノム配列解析、遺伝子発見など、生物学分野で豊富な応用例を持つ。生物学研究者が機械学習ツールをデータ分析に巧みに取り入れれば、科学的発見が加速し、研究効率も向上することは間違いない。

### **10. [BirdFlowモデルが渡り鳥の飛行経路を高精度に予測](https://hyper.ai/news/34781)**

- **研究ハイライト：** [https://hyper.ai/news/33942](https://hyper.ai/news/33942)
- **研究チーム：** マサチューセッツ大学アマースト校、コーネル大学
- **関連研究：** コンピューターモデリング、eBirdデータセット、マルコフモデル、ハイパーパラメーターグリッドサーチ、エントロピー較正、数週間先の予測
- **掲載誌：** Methods in Ecology and Evolution、2023.01
- **論文：** [eBirdデータから季節ごとの鳥類移動を学習するBirdFlow](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14052)

### **11. [新たなクジラ生物音響モデルが鯨類8種を識別](https://hyper.ai/news/34781)**

- **研究ハイライト：** [https://hyper.ai/news/34781](https://hyper.ai/news/34781)
- **研究チーム：** Google Researchチーム
- **関連研究：** メル尺度周波数軸、圧縮カウント振幅、TensorFlow SavedModel APIによる独立呼び出し、畳み込みニューラルネットワーク、ザトウクジラの鳴き声検出分類モデル、対話型可視化ツール「Pattern Radio」。シロナガスクジラとナガスクジラ向けに特化し、既知の鯨類94種から8種を識別できる。
- **掲載誌：** Google Research、2024.09
- **論文：** [口笛、歌、ボイン、バイオトワング：AIによるクジラの発声認識](https://research.google/blog/whistles-songs-boings-and-biotwangs-recognizing-whale-vocalizations-with-ai)

### **12. [機械学習でマッコウクジラの音声アルファベットを解明。人間の言語に酷似し、より強い情報伝達能力を持つ](https://hyper.ai/news/33433)**

- **研究ハイライト：** [https://hyper.ai/news/33433](https://hyper.ai/news/33433)
- **研究チーム：** MITのPratyusha Sharma氏とProject CETIチーム
- **関連研究：** DSWPデータセット、機械学習、マッコウクジラの発声が持つ構造的性質の解明
- **掲載誌：** Nature Communications、2024.05
- **論文：** [マッコウクジラの発声における文脈的・組み合わせ的構造](https://www.nature.com/articles/s41467-024-47221-8)

### **13. [PlantLncBoostモデルが種をまたぐlncRNA予測で最大96％の精度を達成](https://hyper.ai/news/40667)**

- **研究ハイライト：** [https://hyper.ai/news/40667](https://hyper.ai/news/40667)
- **研究チーム：** 山東理工大学、北京林業大学、広東省農業科学院、サンパウロ大学、ロザリンド・フランクリン医科学大学、ウメオ大学
- **関連研究：** GreeNCデータベース、PlantLncBoostアルゴリズム、ランダムフォレスト重要度（RFI）戦略、再帰的特徴消去（RFE）アルゴリズム
- **掲載誌：** New Phytologist、2024.05
- **論文：** [PlantLncBoost：植物lncRNA識別の重要特徴と精度・汎化性能の大幅な向上](https://go.hyper.ai/F7pkc)

### **14. [Perch 2.0が約1万5,000種を網羅し、生物音響分類検出でSOTAを更新](https://hyper.ai/news/42807)**

- **研究ハイライト：** [https://hyper.ai/news/42807](https://hyper.ai/news/42807)
- **研究チーム：** Google DeepMind、Google Research
- **関連研究：** 生物音響、Perch 2.0、Xeno-Cantoデータセット、iNaturalistデータセット、Tierstimmenarchivデータセット、FSD50Kデータセット、EfficientNet-B3アーキテクチャ
- **掲載誌：** arXiv、2025.08
- **論文：** [Perch 2.0：ヨシゴイから学ぶ生物音響](https://arxiv.org/abs/2508.04665)

## **AI＋農林畜産**

### **1. [畳み込みニューラルネットワークで稲の収量を迅速かつ高精度に推定](https://hyper.ai/news/26100)**

- **研究ハイライト：** [https://hyper.ai/news/26100](https://hyper.ai/news/26100)
- **研究チーム：** 京都大学研究チーム
- **関連研究：** 畳み込みニューラルネットワーク。CNNモデルは撮影角度・時刻・時期の異なる圃場写真を高精度に分析し、安定した収量予測を実現する。
- **掲載誌：** Plant Phenomics、2023.07
- **論文：** [深層学習による地上RGB画像を用いた迅速で汎用的な稲収量推定](https://spj.science.org/doi/10.34133/plantphenomics.0073)

### **2. [YOLOv5アルゴリズムで設計したモデルが母豚の姿勢と子豚の出生を監視](https://hyper.ai/news/25131)**

- **研究ハイライト：** [https://hyper.ai/news/25131](https://hyper.ai/news/25131)
- **研究チーム：** 南京農業大学研究チーム
- **関連研究：** YOLOv5、母豚の姿勢と子豚を検出するモデル。分娩開始の5時間前に警報を発することができ、全体の平均精度は92.9％。
- **掲載誌：** Sensors、2023.01
- **論文：** [組み込みボード向け母豚分娩の早期警告と監視](https://www.mdpi.com/1424-8220/23/2/727)

### **3. [実験室での観察と機械学習を組み合わせ、ストレスを受けたトマトとタバコが発する超音波の空気中伝搬を実証](https://hyper.ai/news/24547)**

- **研究ハイライト：** [https://hyper.ai/news/24547](https://hyper.ai/news/24547)
- **研究チーム：** テルアビブ大学（イスラエル）研究チーム
- **関連研究：** 機械学習モデル、SVM、Basic、MFCC、散乱ネットワーク、ニューラルネットワークモデル、1個抜き交差検証。認識精度は99.7％に達し、トマトの発する音は4～6日目にピークを迎えた。
- **掲載誌：** Cell、2023.03
- **論文：** [ストレス下の植物が発する音は空気中を伝わり、情報を含む](https://doi.org/10.1016/j.cell.2023.03.009)

### **4. [ドローンとAI画像解析で森林害虫を検出](https://hyper.ai/news/23807)**

- **研究ハイライト：** [https://hyper.ai/news/23807](https://hyper.ai/news/23807)
- **研究チーム：** リスボン大学研究チーム
- **関連研究：** FRCNN、YOLOモデル。YOLOモデルはFRCNNより高い検出性能を示した。ドローンとAIモデルの組み合わせでマツノギョウレツケムシの巣を効果的に早期発見できる。
- **掲載誌：** NeoBiota、2023.05
- **論文：** [UAVを用いたマツノギョウレツケムシThaumetopoea pityocampaの巣の早期検出手法の検証](https://neobiota.pensoft.net/article/95692/)

### **5. [コンピュータービジョンと深層学習で乳牛の跛行検出システムを開発](https://hyper.ai/news/33957)**

- **研究ハイライト：** [https://hyper.ai/news/33957](https://hyper.ai/news/33957)
- **研究チーム：** ニューカッスル大学とFera Science Ltd.の研究チーム
- **関連研究：** コンピュータービジョン、深層学習、Mask-RCNNアルゴリズム、SORTアルゴリズム、CatBoostアルゴリズム。精度は94～100％に達した。
- **掲載誌：** Nature、2023.03
- **論文：** [深層学習による姿勢推定を用いた複数の牛の跛行検出](https://www.nature.com/articles/s41598-023-31297-1)

## **AI＋気象学**

### **1. [レビュー：データ駆動型機械学習による気象予測モデル](https://hyper.ai/news/28124)**

- **研究ハイライト：** [https://hyper.ai/news/28124](https://hyper.ai/news/28124)
- **主な内容：** 数値気象予測（NWP）は気象予測の主流手法である。数値積分によって地球システムの状態を格子ごとに解く演繹推論を行う。2022年以降、気象予測の機械学習モデルは一連の進展を遂げ、その一部は欧州中期予報センター（ECMWF）の高精度予報に匹敵する。

### **2. [レビュー：雹嵐の発生中心地からデータを収集し、大規模モデルで極端気象を予測](https://hyper.ai/news/25874)**

- **研究ハイライト：** [https://hyper.ai/news/25874](https://hyper.ai/news/25874)
- **主な内容：** 2021年、Alibaba DAMO Academyと国家気象センターは共同で気象予測AIアルゴリズムを開発し、複数の激しい対流性気象現象の予測に成功した。同年9月にはDeepMindが『Nature』に論文を発表し、深層生成モデルを用いたリアルタイム降水予測を示した。
2023年初頭、DeepMindは0.25°解像度で今後10日間の全球気象を1分以内に予測できるGraphCastを正式公開した。4月には南京信息工程大学が上海AI Labと協力し、GraphCastより誤差をさらに小さくした気象大規模モデル「風烏」を開発した。
続いてHuaweiが大規模モデル「盤古気象」を公開した。3Dニューラルネットワークを導入することで、盤古は最も高精度なNWP予測システムを初めて上回った。最近では清華大学と復旦大学が相次いで「NowCastNet」モデルと「FuXi」モデルを公開した。

### **3. [全球ストーム解像シミュレーションと機械学習で極端降水を高精度に予測する新アルゴリズムを作成](https://hyper.ai/news/24995)**

- **研究ハイライト：** [https://hyper.ai/news/24995](https://hyper.ai/news/24995)
- **研究チーム：** コロンビア大学LEAP Lab
- **関連研究：** 機械学習、Baseline-NN、Org-NN、ニューラルネットワーク
- **掲載誌：** PNAS、2023.03
- **論文：** [対流組織化の暗黙的学習による降水の確率性の説明](https://www.pnas.org/doi/10.1073/pnas.2216158120)

### **4. [ランダムフォレストに基づく機械学習モデルCSU-MLPが中期の荒天を予測](https://hyper.ai/news/33966)**

- **研究ハイライト：** [https://hyper.ai/news/33966](https://hyper.ai/news/33966)
- **研究チーム：** コロラド州立大学、NOAA
- **関連研究：** GEFS/Rデータセット、機械学習、補間処理、RF。中期（4～8日先）の荒天を高精度に予測する。
- **掲載誌：** Weather and Forecasting、2022.08
- **論文：** [中期荒天予報の新たなパラダイム：確率的ランダムフォレスト予測](https://arxiv.org/abs/2208.02383)

### **5. [エンドツーエンドのデータ駆動型気象予測システムAardvark Weatherが従来手法より数十倍高速化](https://hyper.ai/news/38605)**

- **研究ハイライト：** [https://hyper.ai/news/38605](https://hyper.ai/news/38605)
- **研究チーム：** ケンブリッジ大学、アラン・チューリング研究所、トロント大学、Microsoft Research、ECMWF、英国南極調査所、Google DeepMind
- **関連研究：** 気象予測システム、HadISDデータセット、マイクロ波・赤外線共同観測ネットワーク、ATOVSシステム、ASCAT散乱計データ、ERA5再解析データセット、軽量畳み込みネットワーク
- **掲載誌：** Nature、2025.03
- **論文：** [エンドツーエンドのデータ駆動型気象予測](https://www.nature.com/articles/s41586-025-08897-0)

### **6. [機械学習気象予測システムFCN3が単一GPUでの超高速推論に対応](https://hyper.ai/news/42456)**

- **研究ハイライト：** [https://hyper.ai/news/42456](https://hyper.ai/news/42456)
- **研究チーム：** NVIDIA、ローレンス・バークレー国立研究所（LBNL）、カリフォルニア大学バークレー校、カリフォルニア工科大学
- **関連研究：** 数値気象予測、FourCastNet 3、機械学習、ERA5データセット、球面ニューラル演算子設計、ハイブリッド並列戦略
- **掲載誌：** arXiv、2025.07
- **論文：** [FourCastNet 3：大規模な確率的機械学習気象予測のための幾何学的アプローチ](https://arxiv.org/pdf/2507.12144)

### **7. [36の気象観測所に基づくインドモンスーン予測モデルが都市規模の詳細な予測を実現](https://hyper.ai/news/44271)**

- **研究ハイライト：** [https://hyper.ai/news/44271](https://hyper.ai/news/44271)
- **研究チーム：** IITボンベイ、メリーランド大学
- **関連研究：** 畳み込みニューラルネットワーク（CNN）、転移学習（CNN-TL）、気象予測、イベント同期法、降雨予測
- **掲載誌：** SSRN、2025.08
- **論文：** [ムンバイの超局地的豪雨予測：畳み込みニューラルネットワークの転移学習に基づくダウンスケーリング手法](https://go.hyper.ai/j05Vt)

### **8. [ACE2がわずか2分で4か月間の季節予報を完了](https://hyper.ai/news/44473)**

- **研究ハイライト：** [https://hyper.ai/news/44473](https://hyper.ai/news/44473)
- **研究チーム：** 英国気象庁Hadley Centre、エクセター大学、Allen Institute for AI（Ai2）
- **関連研究：** 季節予測、ERA5再解析データセット、全球降水気候学プロジェクト（GPCP）v2.3データセット、ACE2機械学習大気モデル
- **掲載誌：** npj Climate and Atmospheric Science、2025.08
- **論文：** [再解析データで学習した機械学習気象モデルによる高精度な全球季節予測](https://go.hyper.ai/YyRfT)

### **9. [増分型気象予測モデルVA-MoEが公開、パラメーターを75％削減しながらSOTA性能を達成](https://hyper.ai/news/45152)**

- **研究ハイライト：** [https://hyper.ai/news/45152](https://hyper.ai/news/45152)
- **研究チーム：** 香港科技大学、浙江大学など
- **関連研究：** 増分型気象予測、VA-MoE、ERA5データセット、2段階学習パラダイム、Transformer、マルチタスク共同損失機構、気象予測
- **掲載誌：** ICCV25、2025.07
- **論文：** [VA-MoE：増分型気象予測のための変数適応型混合エキスパート](https://arxiv.org/abs/2412.02503)

### **10. [明示的ローリング拡散モデル（ERDM）が公開、長期予測の課題を解決し、中長期予測でEDMベースラインをリード](https://hyper.ai/news/45367)**

- **研究ハイライト：** [https://hyper.ai/news/45367](https://hyper.ai/news/45367)
- **研究チーム：** NVIDIA
- **関連研究：** 中期気象予測、段階的ノイズスケジューリング、明示的拡散モデル（EDM）、明示的ローリング拡散モデル（ERDM）、Navier–Stokes流体力学ベンチマークデータセット、ERA5再解析データセット、ノイズスケジューリング機構、確率フロー常微分方程式（ODE）、ノイズ除去ネットワーク
- **掲載誌：** NeurIPS 2025、2025.06
- **論文：** [確率的気象予測のための明示的ローリング拡散モデル](https://doi.org/10.48550/arXiv.2506.20024)

### **11. [新しい潜在拡散モデルOmniCastが公開され、自己回帰型気象予測モデルの誤差蓄積を解消](https://hyper.ai/news/45701)**

- **研究ハイライト：** [https://hyper.ai/news/45701](https://hyper.ai/news/45701)
- **研究チーム：** UCLAチーム、アルゴンヌ国立研究所
- **関連研究：** 新しい潜在拡散モデルOmniCast、高精度確率的S2S気象予測、変分オートエンコーダー（VAE）、Transformerモデル、時空間共同サンプリング法、ERA5基盤データセット、WeatherBench2（WB2）テストセット、ChaosBenchテストセット、UNetアーキテクチャ
- **掲載誌：** NeurIPS 2025、2025.10
- **論文：** [OmniCast：時間スケールを横断する気象予測のためのマスク付き潜在拡散モデル](https://go.hyper.ai/YANIu)

### **12. [NVIDIAが長期気象予測におけるAIのボトルネックを突破する新たな長距離蒸留法を提案](https://hyper.ai/news/48471)**

- **研究ハイライト：** [https://hyper.ai/news/48471](https://hyper.ai/news/48471)
- **研究チーム：** NVIDIA Research、ワシントン大学
- **関連研究：** AI気象予測モデル、自己回帰アーキテクチャ、季節内から季節規模（S2S）の予測、長距離蒸留
- **掲載誌：** arXiv
- **論文：** [長距離蒸留：1万年分のシミュレーション気候を長時間刻みAI気象モデルに蒸留](https://arxiv.org/abs/2512.22814)

### **13. [共同研究チームがグラフニューラルネットワークモデルSeaCastを提案し、地域海洋の超高速予測を実現](https://hyper.ai/news/49553)**

- **研究ハイライト：** [https://hyper.ai/news/49553](https://hyper.ai/news/49553)
- **研究チーム：** ヘルシンキ大学、地中海気候変動センター（CMCC）、サレント大学
- **関連研究：** 地域海洋予測、グラフニューラルネットワーク（GNN）、SeaCastモデル、地中海予測システム（MedFS）、大気強制場
- **掲載誌：** Scientific Reports
- **論文：** [グラフベース深層学習による高精度な地中海予測](https://www.nature.com/articles/s41598-025-31177-w)

## **AI＋天文学**

### **1. [PRIMOアルゴリズムがブラックホール周辺の光伝播則を学習し、より鮮明なブラックホール画像を再構成](https://hyper.ai/news/23698)**

- **研究ハイライト：** [https://hyper.ai/news/23698](https://hyper.ai/news/23698)
- **研究チーム：** プリンストン高等研究所
- **関連研究：** PRIMOアルゴリズム、PCA、GRMHD。PRIMOがブラックホール画像を再構成した。
- **掲載誌：** The Astrophysical Journal Letters、2023.04
- **論文：** [PRIMOで再構成したM87ブラックホールの画像](https://iopscience.iop.org/article/10.3847/2041-8213/acc32d/pdf)

### **2. [シミュレーションデータでコンピュータービジョンアルゴリズムを学習させ、天体画像を鮮明化・「復元」](https://hyper.ai/news/33975)**

- **研究ハイライト：** [https://hyper.ai/news/33975](https://hyper.ai/news/33975)
- **研究チーム：** 清華大学、ノースウェスタン大学
- **関連研究：** [GalSim](https://github.com/GalSim-developers/GalSim)、[COSMOS](https://doi.org/10.5281/zenodo.3242143)、コンピュータービジョンアルゴリズム、CNN、Richardson-Lucyアルゴリズム、展開型ADMMニューラルネットワーク
- **掲載誌：** Monthly Notices of the Royal Astronomical Society、2023.06
- **論文：** [展開型Plug-and-Play ADMMを用いた弱重力レンズ効果向け銀河画像のデコンボリューション](https://www.nature.com/articles/s41421-023-00543-1)

### **3. [教師なし機械学習アルゴリズムAstronomalyで、これまで見過ごされていた異常を発見](https://hyper.ai/news/26316)**

- **研究ハイライト：** [https://hyper.ai/news/26316](https://hyper.ai/news/26316)
- **研究チーム：** 西ケープ大学（UWC）の研究者
- **関連研究：** CNN、教師なし機械学習、Astronomaly、PCA、Isolation Forest、LOFアルゴリズム、iForestアルゴリズム、NSアルゴリズム、DRアルゴリズム。異常スコア上位2,000画像のうち1,635件の異常を発見した。
- **掲載誌：** arXiv、2023.09
- **論文：** [Astronomalyの大規模適用：400万銀河からの異常探索](https://arxiv.org/abs/2309.08660)

### **4. [CMEの識別とパラメーター抽出のための機械学習ベースの手法](https://hyper.ai/news/31870)**

- **研究ハイライト：** [https://hyper.ai/news/31870](https://hyper.ai/news/31870)
- **研究チーム：** 中国科学院国家宇宙科学センター宇宙天気学重点実験室
- **関連研究：** 機械学習、ニューラルネットワーク、大津の二値化アルゴリズム、軌跡照合アルゴリズム、自動識別、パラメーター抽出、CACTus、CORIMP、SEEDS。コロナ質量放出を識別できる。
- **掲載誌：** THE ASTROPHYSICAL JOURNAL、2024.04
- **論文：** [機械学習に基づくコロナ質量放出運動学パラメーター決定アルゴリズム](https://iopscience.iop.org/article/10.3847/1538-4365/ad2dea)

### **5. [深層学習で中性炭素吸収線107例を発見](https://hyper.ai/news/32210)**

- **研究ハイライト：** [https://hyper.ai/news/32210](https://hyper.ai/news/32210)
- **研究チーム：** 中国科学院上海天文台のJian Ge研究員が率いる国際チーム
- **関連研究：** 深層学習法、SDSS DR12、畳み込みニューラルネットワークモデル。初期宇宙の中性原子炭素吸収体107例を発見し、検出精度は99.8％に達した。
- **掲載誌：** MNRAS、2024.05
- **論文：** [深層ニューラルネットワークによる希少な中性原子炭素吸収体の検出](https://doi.org/10.1093/mnras/stae799)

### **6. [StarFusionモデルが高空間分解能画像の予測を実現](https://hyper.ai/news/34254)**

- **研究ハイライト：** [https://hyper.ai/news/34254](https://hyper.ai/news/34254)
- **研究チーム：** 北京師範大学地表過程・資源生態国家重点実験室Jin Chen氏のチーム
- **関連研究：** 深層学習法、リモートセンシング画像、高空間分解能画像予測、デュアルストリーム時空間分離融合アーキテクチャStarFusion、Gaofen-1データセット、Sentinel-2衛星データセット、SRGAN-STFモデル、線形回帰モデル、多変量回帰モデル
- **掲載誌：** Journal of Remote Sensing、2024.07
- **論文：** [高空間分解能画像のためのハイブリッド時空間融合手法：農業景観におけるGaofen-1とSentinel-2の融合](https://spj.science.org/doi/10.34133/remotesensing.0159)

### **7. [SD3に基づく衛星画像生成法で、これまでで最大のリモートセンシングデータセットEcoMapperを構築](https://hyper.ai/news/41041)**

- **研究ハイライト：** [https://hyper.ai/news/41041](https://hyper.ai/news/41041)
- **研究チーム：** ミュンヘン工科大学、チューリッヒ大学
- **関連研究：** リモートセンシングデータセットEcoMapper、Stable Diffusion 3、DiffusionSat、複数条件画像生成、衛星画像生成
- **掲載誌：** ICML 2025、2024.06
- **論文：** [EcoMapper：気候認識型衛星画像の生成モデリング](https://go.hyper.ai/VFRWu)

### **8. [地理空間AI Earth AIが3つの中核データ型に注目し、地理空間推論能力を64％向上](https://hyper.ai/news/45528)**

- **研究ハイライト：** [https://hyper.ai/news/45528](https://hyper.ai/news/45528)
- **研究チーム：** Google Research、Google X、Google Cloud
- **関連研究：** 地理空間AI、RS-Landmarksデータセット、RS-WebLIデータセット、RS-Globalデータセット、Earth AI、基盤モデル（FM）、大規模言語モデル（LLM）、リモートセンシング基盤モデル、空間位置合わせ＋表現統合、地理空間推論
- **掲載誌：** arXiv、2024.10
- **論文：** [Earth AI：基盤モデルとクロスモーダル推論による地理空間インサイトの解放](https://doi.org/10.48550/arXiv.2510.18318)

### **9. [初の天文学マルチモーダル基盤モデルAION-1が誕生、2億天体で事前学習](https://hyper.ai/news/46802)**

- **研究ハイライト：** [https://hyper.ai/news/46802](https://hyper.ai/news/46802)
- **研究チーム：** カリフォルニア大学バークレー校、ケンブリッジ大学、オックスフォード大学など世界10以上の研究機関のチーム
- **関連研究：** AION-1、マルチモーダル宇宙論データセット、トークン化方式、Transformerエンコーダー・デコーダー構造、ResNet構造
- **掲載誌：** NeurIPS 2025、2025.10
- **論文：** [AION-1：天文学のための全モダリティ基盤モデル](ttps://openreview.net/forum?id=6gJ2ZykQ5W)

### **10. [新たなデータ駆動型パイプラインがCNNを用いて81万個のクエーサーから希少な重力レンズ候補7件を正確に特定](https://hyper.ai/news/47240)**

- **研究ハイライト：** [https://hyper.ai/news/47240](https://hyper.ai/news/47240)
- **研究チーム：** スタンフォード大学、SLAC国立加速器研究所、北京大学、INAFブレラ天文台、UCL、カリフォルニア大学バークレー校など
- **関連研究：** 畳み込みニューラルネットワーク（CNN）、DESIデータセット、強い重力レンズ、クエーサー、ブラックホール研究、銀河の共進化、FastSpecカタログ
- **掲載誌：** arXiv、2024.10
- **論文：** [DESI DR1で発見された強い重力レンズとして作用するクエーサー](https://arxiv.org/abs/2511.02009)

### **11. [ESAチームが半教師あり手法AnomalyMatchを提案し、ハッブルの記録約1億件から希少天体を効率的にスクリーニング](https://hyper.ai/news/49138)**

- **研究ハイライト：** [https://hyper.ai/news/49138](https://hyper.ai/news/49138)
- **研究チーム：** 欧州宇宙機関（ESA）欧州宇宙天文学センター（ESAC）
- **関連研究：** 天体物理学的異常、半教師あり二値分類、能動学習、AnomalyMatch、Hubble Legacy Archive
- **掲載誌：** Astronomy & Astrophysics
- **論文：** [AnomalyMatchを用いたハッブル・レガシー・アーカイブの9,960万件のソース画像からの天体物理学的異常の特定](https://doi.org/10.1051/0004-6361/202555512)

### **12. [ウォーリック大学が検証パイプラインRAVENを提案し、新たな系外惑星118個を確認](https://hyper.ai/news/50073)**

- **研究ハイライト：** [https://hyper.ai/news/50073](https://hyper.ai/news/50073)
- **研究チーム：** ウォーリック大学研究チーム
- **関連研究：** 系外惑星検証、トランジット系外惑星探査衛星（TESS）、RAVENパイプライン、合成学習データセット、偽陽性の除去
- **掲載誌：** arXiv
- **論文：** [RAVEN：系外惑星の順位付けと検証](https://arxiv.org/abs/2509.17645)

### **13. [ウォーリック大学がδ Scuti星の星震学的パラメーターを高精度に予測するアンサンブル学習フレームワークを提案](https://hyper.ai/news/50946)**

- **研究ハイライト：** [https://hyper.ai/news/50946](https://hyper.ai/news/50946)
- **研究チーム：** ウォーリック大学研究チーム
- **関連研究：** δ Scuti星、星震学、TESS光度曲線データ、アンサンブル機械学習フレームワーク、大周波数間隔Δν
- **掲載誌：** The Astronomical Journal
- **論文：** [TESSで観測したδ Scuti星の星震学的指標を推定するアンサンブル機械学習手法](https://beta.iopscience.iop.org/article/10.3847/1538-3881/ae4bd8)

### **14. [スペインの研究チームが天体画像中の衛星の軌跡をAIで自動検出するStreakMindシステムを提案](https://hyper.ai/news/51385)**

- **研究ハイライト：** [https://hyper.ai/news/51385](https://hyper.ai/news/51385)
- **研究チーム：** スペイン王立海軍天文台（ROA）などの機関
- **関連研究：** 地球近傍天体（NEO）検出、惑星防衛、天体画像中の軌跡検出、StreakMindシステム、YOLO11
- **掲載誌：** arXiv
- **論文：** [StreakMind：自動データベース統合を備えた、天体画像の衛星軌跡AI検出・分析](https://hyper.ai/papers/2605.03429)

## **AI＋自然災害**

### **1. [機械学習で今後40年間の地盤沈下リスクを予測](https://hyper.ai/news/30173)**

- **研究ハイライト：** [https://hyper.ai/news/30173](https://hyper.ai/news/30173)
- **研究チーム：** 中南大学Jianxin Liu研究チーム
- **関連研究：** SARデータセット、機械学習モデル、XGBR、LSTM
- **掲載誌：** Journal of Environmental Management、2024.02
- **論文：** [機械学習ベース手法による都市部地盤沈下のシミュレーション](https://www.sciencedirect.com/science/article/abs/pii/S0301479724000641?via%3Dihub)

### **2. [地滑りマッピングにセマンティックセグメンテーションモデルSCDUNet++を活用](https://hyper.ai/news/29672)**

- **研究ハイライト：** [https://hyper.ai/news/29672](https://hyper.ai/news/29672)
- **研究チーム：** 成都理工大学Rui Liu研究チーム
- **関連研究：** Sentinel-2マルチスペクトルデータ、NASADEMデータ、地滑りデータ、GLFE、CNN、DSSA、DSC、DTL、Transformer、深層転移学習。Intersection over Union（IoU）を1.91～24.42％、F1を1.26～18.54％向上。
- **掲載誌：** International Journal of Applied Earth Observation and Geoinformation、2024.01
- **論文：** [糖尿病網膜症の進行までの期間を予測する深層学習システム](https://www.nature.com/articles/s41591-023-02702-z)（注：ソース内のリンクとタイトルは一致していませんが、そのまま保持しています。）

### **3. [ニューラルネットワークで2D太陽画像を3D再構成画像に変換](https://hyper.ai/news/28797)**

- **研究ハイライト：** [https://hyper.ai/news/28797](https://hyper.ai/news/28797)
- **研究チーム：** 米国大気研究センター（NCAR）
- **関連研究：** NeRFニューラルネットワーク、SuNeRFモデル。初めて太陽の極を明らかにした。
- **掲載誌：** arxiv、2022.11
- **論文：** [SuNeRF：シミュレーションEUV画像を用いた太陽コロナ全球3D再構成の検証](https://arxiv.org/abs/2211.14879)

### **4. [加法ニューラルネットワークで自然災害の影響要因を分析](https://hyper.ai/news/24957)**

- **研究ハイライト：** [https://hyper.ai/news/24957](https://hyper.ai/news/24957)
- **研究チーム：** UCLA研究チーム
- **関連研究：** 加法ニューラルネットワーク、半自動検出アルゴリズム、加法ANN、SNN、特徴選択モデル、多段階学習
- **掲載誌：** Communications Earth & Environment、2023.05
- **論文：** [解釈可能なニューラルネットワークによる地滑り発生感受性モデリング](https://www.nature.com/articles/s43247-023-00806-5)

### **5. [説明可能なAIを用いてオーストラリア・ギップスランドのさまざまな地理的要因を分析](https://hyper.ai/news/33994)**

- **研究ハイライト：** [https://hyper.ai/news/33994](https://hyper.ai/news/33994)
- **研究チーム：** オーストラリア国立大学、シドニー工科大学
- **関連研究：** ランダムフォレストモデル、機械学習モデル、交差検証手法。XAIは地理的特徴から山火事の発生を効果的に予測できる。
- **掲載誌：** ScienceDirect、2023.06
- **論文：** [山火事発生感受性予測モデルに寄与する要因を解釈する説明可能な人工知能（XAI）](https://www.sciencedirect.com/science/article/pii/S0048969723016224)

### **6. [機械学習に基づく洪水予測モデル](https://hyper.ai/news/31060)**

- **研究ハイライト：** [https://hyper.ai/news/31060](https://hyper.ai/news/31060)
- **研究チーム：** Google Research
- **関連研究：** HydroATLASプロジェクト、LSTMネットワーク、エンコーダー・デコーダー、交差検証。最先端のGloFAS予測モデルを上回る性能を達成。
- **掲載誌：** Nature、2024.03
- **論文：** [観測所のない流域における極端洪水の全球予測](https://www.nature.com/articles/s41586-024-07145-1)

### **7. [ED-DLSTMが観測所のない地域での洪水予測を実現](https://hyper.ai/news/32138)**

- **研究ハイライト：** [https://hyper.ai/news/32138](https://hyper.ai/news/32138)
- **研究チーム：** 中国科学院山地災害・環境研究所（IMHE）Chaojun Ouyang氏のチーム
- **関連研究：** 水文観測所2,000か所のデータ、米国・英国・中欧・カナダの学習データセット、地域横断時空間アンサンブルモデル、エンコーダー・デコーダー、マルチモーダルデータ、空間静的グリッド属性データ、残差畳み込み
- **掲載誌：** The Innovation、2024.04
- **論文：** [深層学習による全球規模の地域横断河川流量・洪水予測](https://doi.org/10.1016/j.xinn.2024.100617)

### **8. [ChloroFormerモデルが海洋の藻類ブルームを早期警告](https://hyper.ai/news/34544)**

- **研究ハイライト：** [https://hyper.ai/news/34544](https://hyper.ai/news/34544)
- **研究チーム：** 浙江大学GIS Lab
- **関連研究：** TZ02データセット、深層学習モデルChloroFormer、Transformerニューラルネットワーク、周波数フィルター機構、周波数注意機構。短期・中期クロロフィルa予測でベースラインを上回った。
- **掲載誌：** Water Research、2024.10
- **論文：** [フーリエ解析とTransformerネットワークの統合による沿岸水域のクロロフィルa濃度予測の強化](https://doi.org/10.1016/j.watres.2024.122160 )

### **9. [初の海洋大規模言語モデルOceanGPTがACL 2024に採択！水中具現化AIが現実に](https://hyper.ai/news/33044)**

- **研究ハイライト：** [https://hyper.ai/news/33044](https://hyper.ai/news/33044)
- **研究チーム：** 浙江大学コンピューター科学技術学部Ningyu Zhang氏・Huajun Chen氏のチーム
- **関連研究：** 海洋分野LLM、正規表現、ハッシュアルゴリズム、海洋科学指示生成フレームワークDoInstruct、マルチエージェント協調、gpt-3.5-turbo、BM25アルゴリズム、LLaMA-2、Vicuna-7b-1.5、具現化AI
- **掲載誌：** ACL 2024、2024.05
- **論文：** [OceanGPT：海洋科学タスクのための大規模言語モデル](https://arxiv.org/abs/2310.02031)

### **10. [AIで地球温暖化の傾向を予測](https://hyper.ai/news/36778)**

- **研究ハイライト：** [https://hyper.ai/news/36778](https://hyper.ai/news/36778)
- **研究チーム：** スタンフォード大学、コロラド州立大学、チューリッヒ工科大学の共同研究チーム
- **関連研究：** AI CNNシステム、全球気候モデル、転移学習、継続的に増加する炭素排出下の状況予測、異なる歴史期間での予測フレームワーク精度の検証。記録的な最高気温変化の可能性を90％と予測。
- **掲載誌：** Geophysical Research Letters、2024.12
- **論文：** [急速な脱炭素化下でのピーク温暖化のデータ駆動型予測](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL111832)

### **11. [新たなGeoAIモデルがチベット高原の地表熱流分布を説明](https://hyper.ai/news/36501)**

- **研究ハイライト：** [https://hyper.ai/news/36501](https://hyper.ai/news/36501)
- **研究チーム：** 浙江大学地球科学学院
- **関連研究：** 空間知能手法、説明可能性を強化した地理的ニューラルネットワーク加重回帰（EI-GNNWR）モデル、地表熱流データセット、NGHF大陸熱流データセット、中国大陸地表熱流データセット、SHAP値計算、Extreme Gradient Boostingモデル、全結合ニューラルネットワークモデル、通常最小二乗法、地理的加重回帰モデル
- **掲載誌：** Journal of Geophysical Research: Solid Earth、2024.10
- **論文：** [データ駆動型手法で明らかにしたチベット高原の地表熱流分布](https://doi.org/10.1029/2023JB028491)

### **12. [海洋環境予測大規模モデル「文海」が数値海洋予測を上回る](https://hyper.ai/news/38294)**

- **研究ハイライト：** [https://hyper.ai/news/38294](https://hyper.ai/news/38294)
- **研究チーム：** 中国科学院院士Lixin Wu氏が率いる崂山実験室、中国海洋大学、中国科学技術大学、青岛国実科技集団の研究チーム
- **関連研究：** 海洋環境予測、物理海洋学、人工知能、海洋力学理論に基づくニューラルネットワークアーキテクチャ設計、バルク公式のニューラルネットワークへの明示的埋め込み
- **掲載誌：** Nature Communications、2025.03
- **論文：** [深層ニューラルネットワークによる渦を伴う海洋の予測](https://www.nature.com/articles/s41467-025-57389-2)

### **13. [ミネソタ大学が知識誘導型機械学習モデルFHNNを提案し、洪水の高精度予測を実現](https://hyper.ai/news/49992)**

- **研究ハイライト：** [https://hyper.ai/news/49992](https://hyper.ai/news/49992)
- **研究チーム：** ミネソタ大学ツインシティー校研究チーム
- **関連研究：** 洪水予測、知識誘導型機械学習（KGML）、因子分解階層型ニューラルネットワーク（FHNN）、プロセスベースモデル（PBM）、水文循環、流出予測
- **掲載誌：** Water Resources Research
- **論文：** [実運用洪水予測のための知識誘導型機械学習](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024WR039064)

### **14. [Googleが全球洪水予測システムのバージョン2を公開し、予測可能期間を大幅に延長](https://hyper.ai/news/51472)**

- **研究ハイライト：** [https://hyper.ai/news/51472](https://hyper.ai/news/51472)
- **研究チーム：** Google Research
- **関連研究：** 洪水予測、水文シミュレーション、機械学習水文モデル、Global Flood Forecasting Model v2、Google Runoff Reanalysis and Reforecasts（GRRR）データセット
- **掲載誌：** EGUsphere
- **論文：** [中期全球洪水予測の延長：Google全球洪水予測モデル・バージョン2](https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2283/)

## **その他**

### **1. [サッカー戦術アシスタントTacticAIが戦術配置で90％の実用性を達成](https://hyper.ai/news/30454)**

- **研究ハイライト：** [https://hyper.ai/news/30454](https://hyper.ai/news/30454)
- **研究チーム：** Google DeepMind、リバプールFC
- **関連研究：** 幾何学的深層学習、GNN、予測モデル、生成モデル。シュート機会を13％増加。
- **掲載誌：** Nature、2024.03
- **論文：** [TacticAI：サッカー戦術のAIアシスタント](https://www.nature.com/articles/s41467-024-45965-x)

### **2. [ノイズ除去拡散モデルSPDiffが長距離の群衆移動シミュレーションを可能に](https://hyper.ai/news/30069)**

- **研究ハイライト：** [https://hyper.ai/news/30069](https://hyper.ai/news/30069)
- **研究チーム：** 清華大学都市科学・計算センター（電子工学科）、清華大学深圳国際研究生院ユビキタスデータ活用深圳市重点実験室、鵬城実験室
- **関連研究：** GCデータセット、UCYデータセット、条件付きノイズ除去拡散モデル、SPDiff、GN、EGCL、LSTM、マルチフレーム展開学習アルゴリズム。学習データのわずか5％で最適性能を達成。
- **掲載誌：** Nature、2024.02
- **論文：** [群衆シミュレーションのための社会物理情報に基づく拡散モデル](https://arxiv.org/abs/2402.06680)

### **3. [インテリジェントな科学施設が研究のパラダイム転換を推進](https://hyper.ai/news/29570)**

- **研究ハイライト：** [https://hyper.ai/news/29570](https://hyper.ai/news/29570)
- **研究チーム：** 上海交通大学Hong Mei研究チーム
- **関連研究：** 科学大規模モデル、生成シミュレーションと逆解析、自律型インテリジェント無人実験、大規模で信頼できる科学協働、AI研究アシスタント
- **掲載誌：** Bulletin of Chinese Academy of Sciences、2023.12
- **論文：** [AI for Science：インテリジェントな科学施設が基礎研究を革新](http://www.bulletin.cas.cn/previewFile?id=52965146&type=pdf&lang=zh)

### **4. [DeepSymNetが教師あり学習に基づいて記号表現を行う](https://hyper.ai/news/29243)**

- **研究ハイライト：** [https://hyper.ai/news/29243](https://hyper.ai/news/29243)
- **研究チーム：** 中国科学院半導体研究所Min Wu研究チーム
- **関連研究：** [記号ネットワークデータセット](https://hyper.ai/datasets/29321)、DSNOrg、DSNB、DSNBM、教師あり学習。短いラベルを用いて予測探索空間を縮小し、アルゴリズムのロバスト性を高める。
- **掲載誌：** Journals & Magazines、2023.11
- **論文：** [DeepSymNetによる数式の発見：分類ベースの記号回帰フレームワーク](https://ieeexplore.ieee.org/document/10327762)

### **5. [大規模言語モデルChipNeMoがチップ設計エンジニアを支援](https://hyper.ai/news/29134)**

- **研究ハイライト：** [https://hyper.ai/news/29134](https://hyper.ai/news/29134)
- **研究チーム：** NVIDIA研究チーム
- **関連研究：** ドメイン適応技術、NVIDIA NeMo、ドメイン適応検索モデル、RAG、ドメイン固有指示による教師ありファインチューニング、DAPT、SFT、Tevatron、LLM
- **掲載誌：** arXiv、2024.04
- **論文：** [ChipNeMo：チップ設計向けドメイン適応LLM](https://arxiv.org/abs/2311.00176)

### **6. [AlphaGeometryが幾何学の問題を解く](https://hyper.ai/news/29059)**

- **研究ハイライト：** [https://hyper.ai/news/29059](https://hyper.ai/news/29059)
- **研究チーム：** Google DeepMind研究チーム
- **関連研究：** ニューラル言語モデル、記号演繹エンジン、言語モデル
- **掲載誌：** Nature、2024.01
- **論文：** [人間の実演なしでのオリンピック幾何問題の解法](https://www.nature.com/articles/s41586-023-06747-5)

### **7. [強化学習を都市空間計画に応用](https://hyper.ai/news/28917)**

- **研究ハイライト：** [https://hyper.ai/news/28917](https://hyper.ai/news/28917)
- **研究チーム：** 清華大学Yong Li研究チーム
- **関連研究：** 深層強化学習、人間とAIの協調フレームワーク、都市計画モデル、方策ネットワーク、価値ネットワーク、GNN。サービスと生態系の指標で熟練の都市計画者8人を上回った。
- **掲載誌：** Nature Computational Science、2023.09
- **論文：** [深層強化学習による都市コミュニティの空間計画](https://www.nature.com/articles/s43588-023-00503-5)

### **8. [ChatArenaフレームワーク：大規模言語モデルで人狼ゲームをプレイ](https://hyper.ai/news/28576)**

- **研究ハイライト：** [https://hyper.ai/news/28576](https://hyper.ai/news/28576)
- **研究チーム：** 清華大学Peng Li研究チーム
- **関連研究：** ノンパラメトリック学習機構、言語モデル、プロンプト
- **掲載誌：** arxiv、2023.09
- **論文：** [コミュニケーションゲームにおける大規模言語モデルの探究：人狼ゲームの実証研究](https://arxiv.org/pdf/2309.04658.pdf)

### **9. [レビュー：30人の研究者がNatureに共同発表、10年間を振り返りAIが科学のパラダイムをどう変えたかを分析](https://hyper.ai/news/28166)**

- **研究ハイライト：** [https://hyper.ai/news/28166](https://hyper.ai/news/28166)
- **主な内容：** スタンフォード大学コンピューターサイエンス・遺伝学科の博士研究員Hanchen Wang氏、ジョージア工科大学コンピューティング学部Tianfan Fu氏、コーネル大学コンピューターサイエンス学部Yuanqi Du氏ら27人が、過去10年間の基礎科学研究におけるAIの役割をレビューし、残る課題と限界をまとめた。
- **論文：** [人工知能時代の科学的発見](https://www.nature.com/articles/s41586-023-06221-2)

### **10. [Ithacaが碑文学者によるテキストの復元、年代判定、地理的帰属を支援](https://hyper.ai/news/28140)**

- **研究ハイライト：** [https://hyper.ai/news/28140](https://hyper.ai/news/28140)
- **研究チーム：** DeepMind、ヴェネツィア・カ・フォスカリ大学
- **関連研究：** I.PHIデータセット、Ithacaモデル、カルバック・ライブラー情報量、交差エントロピー損失関数。テキスト復元精度は62％、年代判定誤差は30年以内、地理的帰属精度は71％に達した。
- **掲載誌：** Nature、2020.03
- **論文：** [深層ニューラルネットワークによる古代テキストの復元と帰属判定](https://www.nature.com/articles/s41586-022-04448-z)

### **11. [メタ光学の順問題・逆問題におけるAI：メタサーフェスシステムに基づくデータ分析](https://hyper.ai/news/34006)**

- **研究ハイライト：** [https://hyper.ai/news/34006](https://hyper.ai/news/34006)
- **研究チーム：** 香港城市大学
- **関連研究：** 予測NN、深層ニューラルネットワーク。予測精度は99％を超えた。
- **掲載誌：** ACS Publications、2022.06
- **論文：** [メタ光学における人工知能](https://pubs.acs.org/doi/10.1021/acs.chemrev.2c00012)

### **12. [新たな地理空間AI手法：地理的ニューラルネットワーク加重ロジスティック回帰](https://hyper.ai/news/30608)**

- **研究ハイライト：** [https://hyper.ai/news/30608](https://hyper.ai/news/30608)
- **研究チーム：** 浙江大学Zhenhong Du研究チーム
- **関連研究：** 空間パターン、ニューラルネットワーク、Shapley Additive Explanations（SHAP）、逆距離加重補間、二値交差エントロピー損失関数、5分割交差検証。鉱物ポテンシャルマッピングで他の先進モデルを上回る。
- **掲載誌：** International Journal of Applied Earth Observation and Geoinformation、2024.04
- **論文：** [地理空間人工知能による鉱物ポテンシャルマッピングの強化：地理的ニューラルネットワーク加重ロジスティック回帰手法](https://doi.org/10.1016/j.jag.2024.103746)

### **13. [拡散モデルでニューラルネットワークのパラメーターを生成し、時空間少数ショット学習を拡散モデルの事前学習問題に変換](https://hyper.ai/news/30545)**

- **研究ハイライト：** [https://hyper.ai/news/30545](https://hyper.ai/news/30545)
- **研究チーム：** 清華大学電子工学科都市科学・計算センターYong Li研究チーム
- **関連研究：** スマートシティ、時空間データ、知識転移、MetaLA、PEMS-BAy、Transformer拡散モデル、条件付き生成フレームワークGPD、ニューラルネットワーク、ニューラルネットワークパラメーター、事前学習＋プロンプトチューニング
- **掲載誌：** ICLR 2024、2024.01
- **論文：** [拡散ニューラルネットワーク生成による時空間少数ショット学習](https://openreview.net/forum?id=QyFm3D3Tzi)

### **14. [李飛飛のチームによる最新のAI4S知見：生物学・材料・ヘルスケア・診断を含む16の革新的技術を総括](https://hyper.ai/news/31499)**

- **研究ハイライト：** [https://hyper.ai/news/31499](https://hyper.ai/news/31499)
- **主な内容：** スタンフォード大学HAIは「2024 AI Index Report」を公開し、2023年の世界的なAI開発動向を包括的に追跡した。科学と医療に対するAIの大きな影響も取り上げ、2023年の科学分野での優れたAI成果や、SynthSR、ImmunoSEIRAなどの画期的な医療イノベーションを紹介した。さらに、FDAによるAI医療機器承認の動向を分析し、業界にとって有益な参考情報を提供した。

### **15. [武漢の住宅価格を正確に予測！osp-GNNWRモデルが複雑な空間過程と地理現象を精緻に記述](https://hyper.ai/news/32453)**

- **研究ハイライト：** [https://hyper.ai/news/32453](https://hyper.ai/news/32453)
- **研究チーム：** 浙江大学GIS LabのSensen Wu氏のチーム
- **関連研究：** ニューラルネットワーク、空間近接性最適化、地理的ニューラルネットワーク加重回帰法、Anjuke不動産サンプル968件のデータセット、空間回帰モデル、勾配降下アルゴリズム
- **掲載誌：** International Journal of Geographical Information Science、2024.04
- **論文：** [地理的加重回帰における空間近接性の尺度を最適化するニューラルネットワークモデル：武漢の住宅価格を事例として](https://www.tandfonline.com/doi/abs/10.1080/13658816.2024.2343771)

### **16. [ゼロショット学習を導入し、甲骨文字解読に最適化された条件付き拡散モデルを公開](https://hyper.ai/news/33010)**

- **研究ハイライト：** [https://hyper.ai/news/33010](https://hyper.ai/news/33010)
- **研究チーム：** 華中科技大学Xiang Bai氏・Yuliang Liu氏のチーム、アデレード大学、安陽師範学院、華南理工大学との共同研究
- **関連研究：** 条件付き拡散モデル、画像生成技術、局所解析サンプリング技術、HUST-OBSデータセット、EVOBCデータセット、ResNet-101バックボーン、OCR技術、ゼロショット学習戦略、スタイルエンコーダー、コンテンツエンコーダー
- **掲載誌：** ACL 2024、2024.06
- **論文：** [拡散モデルによる甲骨文字の解読](https://doi.org/10.48550/arXiv.2406.00684)

### **17. [スタンフォード大学・Appleなど24機関がDCLMベンチマークを公開、基盤モデルがLlama3 8Bに匹敵](https://hyper.ai/news/33001)**

- **研究ハイライト：** [https://hyper.ai/news/33001](https://hyper.ai/news/33001)
- **研究チーム：** ワシントン大学、スタンフォード大学、Appleなど22機関の共同研究
- **関連研究：** 言語モデル、DCLMベンチマーク、Transformer、MMLU
- **掲載誌：** arXiv、2024.06
- **論文：** [DataComp-LM：言語モデル向け次世代学習データセットの探索](https://arxiv.org/abs/2406.11794)

### **18. [PoCoがデータソースの異質性というジレンマを解消し、ロボットによる複数タスクの柔軟な実行を可能に](https://hyper.ai/news/32765)**

- **研究ハイライト：** [https://hyper.ai/news/32765](https://hyper.ai/news/32765)
- **研究チーム：** MIT研究者
- **関連研究：** ノイズ除去拡散確率モデル（DDPM）、ノイズ除去拡散陰的モデル（DDIM）、拡散モデルの確率的合成、ロボット方策合成フレームワークPoCo
- **掲載誌：** arXiv、2024.05
- **論文：** [PoCo：異種ロボット学習からの・異種ロボット学習のための方策合成](https://arxiv.org/abs/2402.02511)

### **19. [画像14万枚を収録！甲骨文字データセットがチームのACL最優秀論文賞受賞を支援](https://hyper.ai/news/33826)**

- **研究ハイライト：** [https://hyper.ai/news/33826](https://hyper.ai/news/33826)
- **研究チーム：** 華中科技大学Xiang Bai教授の研究チーム
- **関連研究：** HUST-OBCデータセット、教師なし視覚対照学習モデル
- **掲載誌：** Scientific Data、2024.06
- **論文：** [甲骨文字の認識と解読のためのオープンデータセット](https://arxiv.org/abs/2401.15365)

### **20. [事前学習済みLLMに基づくチャネル予測方式を提案、GPT-2が無線通信の物理層を強化](https://hyper.ai/news/33195)**

- **研究ハイライト：** [https://hyper.ai/news/33195](https://hyper.ai/news/33195)
- **研究チーム：** 北京大学電子学院Xiang Cheng氏のチーム
- **関連研究：** QuaDRiGaシミュレーター、大規模言語モデル（LLM）、チャネル予測ニューラルネットワーク、前処理モジュール、埋め込みモジュール、事前学習済みLLMモジュール、出力モジュール
- **掲載誌：** Journal of Communications and Information Networks、2024.06
- **論文：** [LLM4CP：チャネル予測のための大規模言語モデルの適応](https://ieeexplore.ieee.org/document/10582829)

### **21. [マルチステッチ刺繍向け初の敵対的生成ネットワークモデル](https://hyper.ai/news/34669)**

- **研究ハイライト：** [https://hyper.ai/news/34669](https://hyper.ai/news/34669)
- **研究チーム：** 武漢紡織大学コンピューター科学・AI学部Visual Computing and Digital Textileチーム
- **関連研究：** マルチステッチ刺繍データセット、敵対的生成ネットワーク（GAN）、CNN、マルチステッチ刺繍GANモデルMSEmbGAN、領域認識型テクスチャ生成ネットワーク、着色ネットワーク。刺繍のテクスチャリアリティと色忠実度を高める。
- **掲載誌：** IEEE Transactions on Visualization and Computer Graphics、2024
- **論文：** [MSEmbGAN：領域認識型テクスチャ生成によるマルチステッチ刺繍の合成](https://csai.wtu.edu.cn/TVCG01/index.html)

### **22. [高速自動スキャンツールキット（FAST）がサンプル情報を効率的に取得](https://hyper.ai/news/28100)**

- **研究ハイライト：** [https://hyper.ai/news/28100](https://hyper.ai/news/28100)
- **研究チーム：** アルゴンヌ国立研究所研究チーム
- **関連研究：** SLADS-Net手法、経路最適化技術。異質な領域を優先し、フルスキャン画像の主要特徴をすべて正確に再現する。
- **掲載誌：** Nature Communications、2023.09
- **論文：** [AI駆動型ワークフローによる自律型高解像度走査顕微鏡法の実証](https://www.nature.com/articles/s41467-023-40339-1)

### **23. [人口動態基盤モデルPDFMがオープンソース化され、米国の失業率と貧困率を高精度に予測](https://hyper.ai/news/36380)**

- **研究ハイライト：** [https://hyper.ai/news/36380](https://hyper.ai/news/36380)
- **研究チーム：** Google
- **関連研究：** 人口動態基盤モデル、失業率・貧困率予測、分離埋め込みアーキテクチャ、PDFMによるSOTA時系列予測基盤モデルTimesFMの強化、集約検索トレンドデータセット、地図データセット、人流データセット、気象・大気質、リモートセンシングデータ、グラフニューラルネットワーク（GNN）、既存地理空間モデルの強化
- **掲載誌：** arXiv、2024.12
- **論文：** [人口動態基盤モデルによる汎用地理空間推論](https://arxiv.org/abs/2411.07207)

### **24. [深層学習モデルCatGWRが空間的非定常性を推定](https://hyper.ai/news/38055)**

- **研究ハイライト：** [https://hyper.ai/news/38055](https://hyper.ai/news/38055)
- **研究チーム：** 浙江省GIS重点実験室
- **関連研究：** 深層学習モデルContext-Attention Geographically Weighted Regression、注意機構、空間的非定常性の推定、CatGWRモデル、シミュレーション実験、前処理モジュール、ズームインモジュール、回帰モジュール
- **掲載誌：** International Journal of Geographical Information Science、2025.02
- **論文：** [注意機構ベースのアーキテクチャによるコンテキスト類似度の空間的非定常性推定への導入](https://doi.org/10.1080/13658816.2025.2456556)

### **25. [世界初のVR運動介入システムREVERIEが若者の心身の健康を刷新](https://hyper.ai/news/41266)**

- **研究ハイライト：** [https://hyper.ai/news/41266](https://hyper.ai/news/41266)
- **研究チーム：** 上海第六人民医院・アクティブヘルス研究所Huating Li教授のチーム、上海交通大学・教育部AI重点実験室Bin Sheng教授のチーム、上海体育大学Jihong Wang研究員のチーム、上海科技大学・上海臨床研究センターRong Zeng教授のチーム、シンガポール国立大学Shuide Lin教授のチーム
- **関連研究：** 運動、仮想世界（メタバース）のVRスポーツ、VR運動システムREVERIE、若年肥満、Transformerアーキテクチャ、反復的なユーザーインタラクション
- **掲載誌：** Nature Medicine、2025.06
- **論文：** [過体重の青年向け適応型AI仮想現実スポーツシステム：ランダム化比較試験](https://www.nature.com/articles/s41591-025-03724-5)

### **26. [17万6,000件超の碑文データに基づくAeneasが古代ローマ碑文の任意長復元を初めて実現](https://hyper.ai/news/42141)**

- **研究ハイライト：** [https://hyper.ai/news/42141](https://hyper.ai/news/42141)
- **研究チーム：** Google DeepMindの研究者、ノッティンガム大学、ウォーリック大学など
- **関連研究：** マルチモーダル生成ニューラルネットワークAeneas、Transformerデコーダー、ラテン碑文データセット、LEDデータセット、碑文復元
- **掲載誌：** Nature、2025.07
- **論文：** [生成ニューラルネットワークによる古代テキストの文脈化](https://www.nature.com/articles/s41586-025-09292-5)

### **27. [パノラマ動画生成フレームワークPanoWanがゼロショット動画編集にも対応](https://hyper.ai/news/42205)**

- **研究ハイライト：** [https://hyper.ai/news/42205](https://hyper.ai/news/42205)
- **研究チーム：** 北京大学Camera Intelligence Lab（Boxin Shi氏のチーム）、OpenBayes
- **関連研究：** パノラマ動画、PanoVidパノラマ動画データセット、ゼロショット動画編集、緯度認識型サンプリング、回転意味ノイズ除去、境界パディング画素単位デコーディング
- **掲載誌：** arXiv、2025.06
- **論文：** [PanoWan：緯度・経度を考慮する機構で拡散動画生成モデルを360°に拡張](https://arxiv.org/abs/2505.22016)

### **28. [YOLOv11に基づく陶磁器分類インテリジェントフレームワークが視覚モデリングと経済分析を統合し、遺物の分類と価値推定を実現](https://hyper.ai/news/42268)**

- **研究ハイライト：** [https://hyper.ai/news/42268](https://hyper.ai/news/42268)
- **研究チーム：** マレーシアプトラ大学、シドニー・ニューサウスウェールズ大学
- **関連研究：** 陶磁器分類、CNN、転移学習、カプセルネットワーク、YOLOv11、陶磁器画像データセット、ハイブリッドデータ取得手法、ランダムフォレスト回帰モデル
- **掲載誌：** Nature Partner Journals、2025.06
- **論文：** [深層学習と機械学習の統合による陶磁器遺物の分類と市場価値予測](https://www.nature.com/articles/s40494-025-01886-6)

### **29. [「マイクロ波脳」チップが誕生、消費電力176ミリワットで超高速データと無線信号を同時処理し、精度75％を達成](https://hyper.ai/news/43093)**

- **研究ハイライト：** [https://hyper.ai/news/43093](https://hyper.ai/news/43093)
- **研究チーム：** コーネル大学
- **関連研究：** 高帯域幅アプリケーション、マイクロ波ニューラルネットワーク、線形回帰モデル、RadioML2016.10Aデータセット、深層学習、アナログ計算
- **掲載誌：** Nature Electronics、2025.08
- **論文：** [広帯域計算と通信のための集積マイクロ波ニューラルネットワーク](https://go.hyper.ai/rMZ2K)

### **30. [時空間補完・予測モデルSTIMPが公開され、沿岸のクロロフィルa分布の高精度予測を実現](https://hyper.ai/news/43613)**

- **研究ハイライト：** [https://hyper.ai/news/43613](https://hyper.ai/news/43613)
- **研究チーム：** 香港科技大学研究チーム
- **関連研究：** クロロフィルa予測、MODIS現場Chl-aデータセット、ひまわり衛星リモートセンシング反射率データセット、深層学習、STIMPアーキテクチャ、水域健全性診断
- **掲載誌：** Nature Communications、2025.08
- **論文：** [時空間補完・予測モデル](https://go.hyper.ai/BjOR5)

### **31. [MITなどが機械学習に基づき、少数ショット条件でプラズマ動力学の高精度予測を実現](https://hyper.ai/news/45260)**

- **研究ハイライト：** [https://hyper.ai/news/45260](https://hyper.ai/news/45260)
- **研究チーム：** MIT主導の研究チーム
- **関連研究：** トカマク、科学的機械学習（SciML）、ニューラル状態空間モデル（NSSM）、制御誤差感度に対するロバスト性検証、予測先行型外挿テスト
- **掲載誌：** Nature Communications、2025.10
- **論文：** [TCVにおける予測先行実験によるプラズマ動力学とロバストなランプダウン軌道の学習](https://www.nature.com/articles/s41467-025-63917-x)

### **32. [Reac-Discoveryが数理モデリング、機械学習、自動実験を融合し、自律型ラボシステムの汎用性の課題を解決](https://hyper.ai/news/45626)**

- **研究ハイライト：** [https://hyper.ai/news/45626](https://hyper.ai/news/45626)
- **研究チーム：** IMDEA材料研究所（スペイン）
- **関連研究：** 自律型実験室（SDL）、Reac-Discovery半自律型デジタルプラットフォーム、設計・製造・最適化モジュールを統合する閉ループシステム、リアルタイムNMRモニタリング、MLによるプロセスパラメーター最適化、トポロジカル記述子、構造パラメーター化データセット、印刷適性データセット、反応性能データセット
- **掲載誌：** Nature Communications、2025.10
- **論文：** [Reac-Discovery：連続フロー触媒反応器の発見と最適化を支えるAI駆動型プラットフォーム](https://go.hyper.ai/ueB79)

### **33. [人間の大脳皮質データで検証された初のニューロンモデリングフレームワークNOBLEを発表](https://hyper.ai/news/45806)**

- **研究ハイライト：** [https://hyper.ai/news/45806](https://hyper.ai/news/45806)
- **研究チーム：** チューリッヒ工科大学、カリフォルニア工科大学、アルバータ大学
- **関連研究：** 深層学習、ニューロン特徴の埋め込み、電流注入の埋め込み、NOBLEニューロンモデリングフレームワーク
- **掲載誌：** NeurIPS 2025、2025.09
- **論文：** [NOBLE ― 生物学的知見に基づく潜在埋め込みを用い、生物学的ニューロンモデルの実験的変動を捉えるニューラルオペレーター](https://go.hyper.ai/Ramfp)

### **34. [画像ジオロケーションフレームワークLocDiffが公開、グリッドも参照ライブラリも不要な全球高精度測位を実現](https://hyper.ai/news/46687)**

- **研究ハイライト：** [https://hyper.ai/news/46687](https://hyper.ai/news/46687)
- **研究チーム：** メイン大学、テキサス大学オースティン校、ジョージア大学、メリーランド大学、Google、OpenAI、ハーバード大学
- **関連研究：** 球面調和関数ディラック分布、LocDiffアンサンブルフレームワーク、MP16データセット、Im2GPS3kデータセット、YFCC26kデータセット、GWS15kデータセット、条件付きSiren-UNet（CS-UNet）アーキテクチャ、効率的な計算戦略、SHDD符号化方式、画像ジオロケーション
- **掲載誌：** NeurIPS 2025、2025.10
- **論文：** [LocDiff：ヒルベルト空間で拡散を行い地球上の位置を特定](https://openreview.net/forum?id=ghybX0Qlls)

### **35. [機械学習とpy-GC-MSを組み合わせ、太古代岩石中の生命の証拠を高精度に特定](https://hyper.ai/news/47543)**

- **研究ハイライト：** [https://hyper.ai/news/47543](https://hyper.ai/news/47543)
- **研究チーム：** カーネギー研究所地球惑星研究所と世界各地の複数機関
- **関連研究：** 熱分解ガスクロマトグラフィー質量分析（py-GC-MS）、教師あり機械学習
- **掲載誌：** PNAS
- **論文：** [熱分解GC-MSと教師あり機械学習により特定された太古代岩石中の生命の有機地球化学的証拠](https://www.pnas.org/doi/10.1073/pnas.2514534122)

### **36. [清華大学チームが複雑なネットワーク動力学の式を自動導出するニューロシンボリック回帰法ND²を提案](https://hyper.ai/news/47950)**

- **研究ハイライト：** [https://hyper.ai/news/47950](https://hyper.ai/news/47950)
- **研究チーム：** 清華大学
- **関連研究：** ネットワーク動力学、記号回帰、ND²、方程式導出、科学的機械学習
- **掲載誌：** Nature Communications
- **論文：** *(原文ではリンク先が太古代岩石論文を指しているが、項目番号と参考文献の訳は提示どおり維持)*

*(注：提示された原文には、PNASの太古代岩石論文にリンクする項目35と36の重複があった一方、目次にはND2が記載されていた。項目35・36の本文ブロックに基づいて直接翻訳した。)*

### **37. [浙江大学チームが地質学的制約を用いた鉱物ポテンシャル予測法を提案し、鉱化作用の異方性を明示](https://hyper.ai/news/48396)**

- **研究ハイライト：** [https://hyper.ai/news/48396](https://hyper.ai/news/48396)
- **研究チーム：** 浙江大学研究チーム
- **関連研究：** 鉱物ポテンシャルマッピング（MPM）、異方性空間近接ニューラルネットワーク、インテリジェント探査
- **掲載誌：** Geology
- **論文：** [鉱物ポテンシャルマッピングのための地質学的制約付きデータ駆動モデリング](https://go.hyper.ai/vbUpa)

### **38. [清華大学・シカゴ大学チームがNatureに発表：AIツールは科学者の影響力を広げる一方、科学の焦点を狭める](https://hyper.ai/news/48748)**

- **研究ハイライト：** [https://hyper.ai/news/48748](https://hyper.ai/news/48748)
- **研究チーム：** 清華大学とシカゴ大学の共同チーム
- **関連研究：** AI for Science、研究生産性、科学的引用パターン、研究エコシステム、科学計量学
- **掲載誌：** Nature
- **論文：** [人工知能ツールは科学者の影響力を広げる一方、科学の焦点を狭める](https://www.nature.com/articles/s41586-025-09922-y)

### **39. [カリフォルニア大学チームがAI拡張型チップスケール分光計を提案、超小型ながら高いスペクトル忠実度を実現](https://hyper.ai/news/48905)**

- **研究ハイライト：** [https://hyper.ai/news/48905](https://hyper.ai/news/48905)
- **研究チーム：** カリフォルニア大学研究チーム
- **関連研究：** チップスケール分光計、光子捕捉表面テクスチャ（PTST）、全結合ニューラルネットワーク、ハイパースペクトルイメージング
- **掲載誌：** Advanced Photonics
- **論文：** [近赤外感度を拡張したシリコン基板上のAI拡張型光子捕捉チップ分光計](https://doi.org/10.1117/1.AP.8.1.016008)

### **40. [米国エネルギー省オークリッジ国立研究所がD-CHAG法を提案、マルチチャネル基盤モデルのメモリー使用量を大幅に削減](https://hyper.ai/news/49330)**

- **研究ハイライト：** [https://hyper.ai/news/49330](https://hyper.ai/news/49330)
- **研究チーム：** 米国エネルギー省オークリッジ国立研究所の研究者
- **関連研究：** 視覚科学基盤モデル、分散型チャネル間階層集約（D-CHAG）、テンソル並列化（TP）、階層的チャネル集約
- **掲載誌：** SC25
- **論文：** [基盤モデルのための分散型チャネル間階層集約](https://dl.acm.org/doi/10.1145/3712285.3759870)

### **41. [Polymathic AIチームが連続体基盤モデルWalrusを提案、領域横断型シミュレーション性能の記録を更新](https://hyper.ai/news/49076)**

- **研究ハイライト：** [https://hyper.ai/news/49076](https://hyper.ai/news/49076)
- **研究チーム：** Polymathic AI共同研究チーム
- **関連研究：** 連続体力学、物理シミュレーション基盤モデル、Walrusモデル、適応型計算トークン化
- **掲載誌：** arXiv
- **論文：** [Walrus：連続体力学のための領域横断型基盤モデル](https://arxiv.org/abs/2511.15684)

### **42. [EPFLが物理法則を組み込んだ新アーキテクチャDYNAMI-CAL GraphNetを提案し、多体系動力学を高精度にモデル化](https://hyper.ai/news/49808)**

- **研究ハイライト：** [https://hyper.ai/news/49808](https://hyper.ai/news/49808)
- **研究チーム：** EPFL研究チーム
- **関連研究：** 物理情報に基づくGNN、多体系力学系、DYNAMI-CAL GraphNet、線形運動量と角運動量の保存
- **掲載誌：** Nature Communications
- **論文：** [力学系の線形運動量と角運動量を保存する物理情報に基づくグラフニューラルネットワーク](https://www.nature.com/articles/s41467-025-67802-5)

### **43. [MITが新手法Wave-Formerを提案し、完全に遮蔽された物体の高精度3D再構成を実現](https://hyper.ai/news/50018)**

- **研究ハイライト：** [https://hyper.ai/news/50018](https://hyper.ai/news/50018)
- **研究チーム：** MIT研究チーム
- **関連研究：** コンピュータービジョン、遮蔽物越しの3D再構成、ミリ波センシング、Wave-Former、無線による形状補完
- **掲載誌：** arXiv
- **論文：** [Wave-Former：無線による形状補完を介した遮蔽物越しの3D再構成](https://arxiv.org/abs/2511.14152)

### **44. [MITがドラフト・精緻化型の並列フレームワークDRiffusionを提案し、拡散モデル推論を損失なく高速化](https://hyper.ai/news/50209)**

- **研究ハイライト：** [https://hyper.ai/news/50209](https://hyper.ai/news/50209)
- **研究チーム：** MIT研究チーム
- **関連研究：** 拡散モデル、推論高速化、並列化技術、DRiffusion、ドラフト・精緻化
- **掲載誌：** arXiv
- **論文：** [DRiffusion：ドラフト・精緻化プロセスによる拡散モデルの容易な並列化](https://arxiv.org/abs/2603.25872)

### **45. [イスラエル工科大学TechnionがTask Tokensを提案し、行動基盤モデルを特定タスクに柔軟に適応](https://hyper.ai/news/50788)**

- **研究ハイライト：** [https://hyper.ai/news/50788](https://hyper.ai/news/50788)
- **研究チーム：** Technion研究チーム
- **関連研究：** ロボット制御、模倣学習、行動基盤モデル（BFM）、Task Tokens、タスク固有の適応
- **発表会議：** ICLR 2026
- **論文：** [Task Tokens：行動基盤モデルを適応させる柔軟な手法](https://hyper.ai/papers/2503.22886)

### **46. [MITなどがEnergAIzerフレームワークを提案し、AIワークロードのGPU電力を高速・高精度に推定](https://hyper.ai/news/51038)**

- **研究ハイライト：** [https://hyper.ai/news/51038](https://hyper.ai/news/51038)
- **研究チーム：** MIT、MIT-IBM Watson AI Lab
- **関連研究：** GPU電力推定、AIワークロード、データセンターのエネルギー効率、EnergAIzerフレームワーク、ハードウェア性能プロファイリング
- **掲載誌：** arXiv
- **論文：** [EnergAIzer：AIワークロード向け高速・高精度GPU電力推定フレームワーク](https://arxiv.org/abs/2604.20105)

### **47. [イリノイ大学アーバナ・シャンペーン校が異種エージェントフレームワークEywaを提案し、言語中心の大規模モデルの限界を突破](https://hyper.ai/news/51222)**

- **研究ハイライト：** [https://hyper.ai/news/51222](https://hyper.ai/news/51222)
- **研究チーム：** イリノイ大学アーバナ・シャンペーン校研究チーム
- **関連研究：** エージェント型AI、異種エージェントフレームワークEywa、ドメイン固有基盤モデル、マルチエージェントシステム、大規模言語モデル（LLM）
- **掲載誌：** arXiv
- **論文：** [異種科学基盤モデルの協働](https://hyper.ai/papers/2604.27351)

### **48. [スタンフォード大学などがLSTM代理モデルを用い、二次非線形光学のシミュレーションを252倍高速化](https://hyper.ai/news/51410)**

- **研究ハイライト：** [https://hyper.ai/news/51410](https://hyper.ai/news/51410)
- **研究チーム：** スタンフォード大学、カリフォルニア大学ロサンゼルス校、SLAC国立加速器研究所
- **関連研究：** 二次非線形光学、和周波発生（SFG）、長短期記憶ネットワーク（LSTM）、代理モデル、分割ステップ・フーリエ法（SSFM）
- **掲載誌：** Advanced Photonics
- **論文：** [深層学習を活用したχ⁽²⁾非線形光学のモデリング](https://go.hyper.ai/5bLoA)
