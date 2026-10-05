[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![X](https://img.shields.io/badge/X-%23000000?logo=X&logoColor=white)](https://twitter.com/EthicalML)

# 精選生產級機器學習資源

本倉庫精選了一系列優秀的開源庫，助你將機器學習部署到生產環境，並進行監控、版本管理、擴充套件和安全防護 🚀

關注此 GitHub 倉庫，即可透過[版本釋出](https://github.com/EthicalML/awesome-production-machine-learning/releases)及時瞭解每月新增的生產級機器學習庫彙總 🤩

此外，我們還提供了一個[搜尋工具集](https://huggingface.co/spaces/zhiminy/Awesome-Production-Machine-Learning-Search)，幫助你快速瀏覽整個工具鏈。

## 本頁章節快速連結

| | | |
|-|-|-|
| [🔧 自動機器學習（AutoML）](#automl) | [🧮 計算與通訊最佳化](#computation-and-communication-optimisation) | [🏷️ 資料標註與合成](#data-annotation-and-synthesis) |
| [🧵 資料流水線](#data-pipeline) | [📓 資料科學筆記本](#data-science-notebook) | [💾 資料儲存最佳化](#data-storage-optimisation) |
| [💸 資料流處理](#data-stream-processing) | [💪 部署與服務](#deployment-and-serving) | [📈 評估與監控](#evaluation-and-monitoring) |
| [🔍 可解釋性與公平性](#explainability-and-fairness) | [🎁 特徵儲存](#feature-store) | [🔴 工業級異常檢測](#industry-strength-anomaly-detection) |
| [👁️ 工業級計算機視覺](#industry-strength-computer-vision) | [🔥 工業級資訊檢索](#industry-strength-information-retrieval) | [🔠 工業級自然語言處理](#industry-strength-nlp) |
| [🙌 工業級推薦系統](#industry-strength-recommender-system) | [🍕 工業級強化學習](#industry-strength-reinforcement-learning) | [🤖 工業級機器人](#industry-strength-robotics) |
| [📊 工業級視覺化](#industry-strength-visualisation) | [📅 後設資料管理](#metadata-management) | [📜 模型、資料與實驗管理](#model-data-and-experiment-management) |
| [🔩 模型儲存最佳化](#model-storage-optimisation) | [🏁 模型訓練與編排](#model-training-and-orchestration) | [🔏 隱私與安全](#privacy-and-safety) |

## 如何為列表做貢獻

提交 PR 時，請先閱讀我們的[貢獻指南](https://github.com/EthicalML/awesome-production-machine-learning/blob/master/CONTRIBUTING.md)，瞭解如何幫助我們保持列表整潔並及時更新——感謝社群一直以來對列表持續發展的支援 🚀

<picture>
  <source
    media="(prefers-color-scheme: grey)"
    srcset="
      https://star-history.dera.page/svg?repos=EthicalML/awesome-production-machine-learning&type=Date&theme=dark
    "
  />
  <source
    media="(prefers-color-scheme: light)"
    srcset="
      https://star-history.dera.page/svg?repos=EthicalML/awesome-production-machine-learning&type=Date
    "
  />
  <img
    alt="星標歷史圖表"
    src="https://star-history.dera.page/svg?repos=EthicalML/awesome-production-machine-learning&type=Date"
  />
</picture>

## 10 分鐘影片概覽

<table>
  <tr>
    <td width="30%">
        本<a href="https://www.youtube.com/watch?v=Ynb6X0KZKxY">10 分鐘影片</a>介紹了機器學習運維（MLOps）的動機，並概述了本倉庫中的部分工具。這個<a href="https://www.youtube.com/watch?v=NycftytgPnk">較新的影片</a>介紹了 2024 年 MLOps 現狀的更新版本。
    </td>
    <td width="70%">
        <a href="https://www.youtube.com/watch?v=Ynb6X0KZKxY"><img src="images/video.png"></a>
    </td>
  </tr>
</table>

## 想定期獲取本倉庫及其他進展的更新嗎？

<table>
  <tr>
    <td width="30%">
         你可以訂閱 <a href="https://ethical.institute/mle.html">Machine Learning Engineer</a> 新聞通訊。加入超過 70,000 名機器學習專業人士和愛好者的行列，每週接收精選的生產級機器學習文章與教程。
    </td>
    <td width="70%">
        <a href="https://ethical.institute/mle.html"><img src="images/mleng.png"></a>
    </td>
  </tr>
  <tr>
    <td width="30%">
         也歡迎檢視 <a href="https://github.com/EthicalML/awesome-production-agentic-systems/">Awesome Production GenAI</a> 列表；我們致力於精選可用於部署、監控、版本管理和擴充套件生成式人工智慧應用與系統的優秀開源庫。
    </td>
    <td width="70%">
        <a href="https://github.com/EthicalML/awesome-production-agentic-systems/"><img src="images/list.jpg"></a>
    </td>
  </tr>
</table>

# 正文

## 自動機器學習（AutoML）
* [AIDE](https://github.com/WecoAI/aideml) ![](https://img.shields.io/github/stars/WecoAI/aideml.svg?cacheSeconds=172800) - AIDE 是一個開源機器學習工程代理，使用樹搜尋演算法自主探索、實現並評估機器學習任務的解決策略。
* [AutoGluon](https://github.com/autogluon/autogluon) ![](https://img.shields.io/github/stars/autogluon/autogluon.svg?cacheSeconds=172800) - 基於主流機器學習庫（Scikit-Learn、LightGBM、CatBoost、PyTorch、MXNet），為表格、影象和文字資料自動選擇特徵、模型和超引數。
* [Autokeras](https://github.com/keras-team/autokeras) ![](https://img.shields.io/github/stars/keras-team/autokeras.svg?cacheSeconds=172800) - 基於《[Auto-Keras：透過網路形態變換實現高效神經架構搜尋](https://arxiv.org/abs/1806.10282)》的 Keras AutoML 庫。
* [auto-sklearn](https://github.com/automl/auto-sklearn) ![](https://img.shields.io/github/stars/automl/auto-sklearn.svg?cacheSeconds=172800) - 用於自動執行 sklearn 演算法和超引數調優的框架。
* [Ax](https://github.com/facebook/Ax) ![](https://img.shields.io/github/stars/facebook/Ax.svg?cacheSeconds=172800) - Ax 是一個易於使用的通用平臺，用於理解、管理、部署和自動化自適應實驗。
* [BoTorch](https://github.com/meta-pytorch/botorch) ![](https://img.shields.io/github/stars/meta-pytorch/botorch.svg?cacheSeconds=172800) - 基於 PyTorch 構建的貝葉斯最佳化庫。
* [EvalML](https://github.com/alteryx/evalml) ![](https://img.shields.io/github/stars/alteryx/evalml.svg?cacheSeconds=172800) - EvalML 是一個 AutoML 庫，使用領域專用目標函式構建、最佳化並評估機器學習流水線。
* [Feature Engine](https://github.com/feature-engine/feature_engine) ![](https://img.shields.io/github/stars/feature-engine/feature_engine.svg?cacheSeconds=172800) - Feature-engine 是一個 Python 庫，包含多個用於為機器學習模型構建特徵的轉換器。
* [Featuretools](https://github.com/alteryx/featuretools) ![](https://img.shields.io/github/stars/alteryx/featuretools.svg?cacheSeconds=172800) - 一個用於自動化特徵工程的開源框架。
* [FLAML](https://github.com/microsoft/FLAML) ![](https://img.shields.io/github/stars/microsoft/FLAML.svg?cacheSeconds=172800) - FLAML 是一個快速的自動機器學習與調優庫。
* [HEBO](https://github.com/huawei-noah/hebo) ![](https://img.shields.io/github/stars/huawei-noah/hebo.svg?cacheSeconds=172800) - 一組開源超引數最佳化框架，其中包括 [NeurIPS 2020 黑盒最佳化挑戰賽](https://bbochallenge.com/leaderboard)的獲勝方案，並在超引數調優任務上進行了測試。
* [Katib](https://github.com/kubeflow/katib) ![](https://img.shields.io/github/stars/kubeflow/katib.svg?cacheSeconds=172800) - 一個基於 Kubernetes 的超引數調優與神經架構搜尋系統。
* [keras-tuner](https://github.com/keras-team/keras-tuner) ![](https://img.shields.io/github/stars/keras-team/keras-tuner.svg?cacheSeconds=172800) - Keras Tuner 是一個易於使用、可分散式執行的超引數最佳化框架，旨在解決超引數搜尋中的痛點。它讓你能夠輕鬆定義搜尋空間，並利用內建演算法找到最佳超引數值。
* [Optuna](https://github.com/optuna/optuna) ![](https://img.shields.io/github/stars/optuna/optuna.svg?cacheSeconds=172800) - Optuna 是一個自動化超引數最佳化軟體框架，尤其適用於機器學習。
* [OSS Vizier](https://github.com/google/vizier) ![](https://img.shields.io/github/stars/google/vizier.svg?cacheSeconds=172800) - OSS Vizier 是一個基於 Python 的黑盒最佳化與研究服務，也是最早設計為可大規模執行的超引數調優服務之一。
* [Perpetual](https://github.com/perpetual-ml/perpetual) ![](https://img.shields.io/github/stars/perpetual-ml/perpetual.svg?cacheSeconds=172800) - 一種無需超引數最佳化的梯度提升機，可透過簡單的預算引數控制模型複雜度。
* [TPOT](https://github.com/epistasislab/tpot) ![](https://img.shields.io/github/stars/epistasislab/tpot.svg?cacheSeconds=172800) - 自動建立 sklearn 流水線（包括特徵選擇、前處理器等）。
* [tsfresh](https://github.com/blue-yonder/tsfresh) ![](https://img.shields.io/github/stars/blue-yonder/tsfresh.svg?cacheSeconds=172800) - 自動從時間序列中提取相關特徵。

## 計算與通訊最佳化

* [Accelerate](https://github.com/huggingface/accelerate) ![](https://img.shields.io/github/stars/huggingface/accelerate.svg?cacheSeconds=172800) - Accelerate 僅對多 GPU/TPU 和混合精度相關的樣板程式碼進行抽象，其餘程式碼保持不變。
* [Adapters](https://github.com/adapter-hub/adapters) ![](https://img.shields.io/github/stars/adapter-hub/adapters.svg?cacheSeconds=172800) - Adapters 是一個統一的庫，用於引數高效、模組化的遷移學習。
* [Cache-DiT](https://github.com/vipshop/cache-dit) ![](https://img.shields.io/github/stars/vipshop/cache-dit.svg?cacheSeconds=172800) - Cache-DiT 構建於 Diffusers 之上，支援幾乎所有 DiT，提供混合快取加速（DBCache、TaylorSeer、SCM 等）及全面的並行最佳化，包括上下文並行、張量並行和混合 2D/3D 並行，同時相容編譯、CPU 解除安裝和量化。
* [Colossal-AI](https://github.com/hpcaitech/ColossalAI) ![](https://img.shields.io/github/stars/hpcaitech/ColossalAI.svg?cacheSeconds=172800) - 面向大模型時代的統一深度學習系統，幫助使用者高效、快速地部署大型 AI 模型訓練與推理。
* [Composer](https://github.com/mosaicml/composer) ![](https://img.shields.io/github/stars/mosaicml/composer.svg?cacheSeconds=172800) - Composer 是一個 PyTorch 庫，可幫助你以更快的速度、更低的成本和更高的精度訓練神經網路。
* [CuDF](https://github.com/NVIDIA/cudf) ![](https://img.shields.io/github/stars/NVIDIA/cudf.svg?cacheSeconds=172800) - cuDF 基於 Apache Arrow 列式記憶體格式構建，是一個 GPU DataFrame 庫，可用於載入、連線、聚合、篩選及以其他方式處理資料。
* [CuML](https://github.com/NVIDIA/cuml) ![](https://img.shields.io/github/stars/NVIDIA/cuml.svg?cacheSeconds=172800) - cuML 是一套實現機器學習演算法和數學原語函式的庫，其 API 與其他 RAPIDS 專案相容。
* [CuPy](https://github.com/cupy/cupy) ![](https://img.shields.io/github/stars/cupy/cupy.svg?cacheSeconds=172800) - 在 CUDA 上實現與 NumPy 相容的多維陣列。CuPy 包含核心多維陣列類 cupy.ndarray 及其眾多操作函式。
* [DEAP](https://github.com/DEAP/deap) ![](https://img.shields.io/github/stars/DEAP/deap.svg?cacheSeconds=172800) - 一個新穎的進化計算框架，可用於快速原型設計和測試想法。它致力於使演算法清晰明確、資料結構透明，並能與 multiprocessing、SCOOP 等並行化機制完美協作。
* [DeepEP](https://github.com/deepseek-ai/DeepEP) ![](https://img.shields.io/github/stars/deepseek-ai/DeepEP.svg?cacheSeconds=172800) - DeepEP 是專為混合專家（MoE）和專家並行（EP）設計的通訊庫，提供高吞吐、低延遲的全對全 GPU 核心，也稱為 MoE 分發與合併。該庫還支援包括 FP8 在內的低精度運算。
* [DGL](https://github.com/dmlc/dgl) ![](https://img.shields.io/github/stars/dmlc/dgl.svg?cacheSeconds=172800) - DGL 是一個易用、高效能且可擴充套件的 Python 包，用於圖上的深度學習。
* [DLRover](https://github.com/intelligent-machine-learning/dlrover) ![](https://img.shields.io/github/stars/intelligent-machine-learning/dlrover.svg?cacheSeconds=172800) - DLRover 讓大型 AI 模型的分散式訓練變得簡單、穩定、快速且節能。
* [Dask](https://github.com/dask/dask) ![](https://img.shields.io/github/stars/dask/dask.svg?cacheSeconds=172800) - 用於 Pandas 和 NumPy 計算的分散式並行處理框架。
* [DeepSpeed](https://github.com/deepspeedai/DeepSpeed) ![](https://img.shields.io/github/stars/deepspeedai/DeepSpeed.svg?cacheSeconds=172800) - DeepSpeed 是一個深度學習最佳化庫，讓分散式訓練與推理變得簡單、高效且實用。
* [FlagGems](https://github.com/flagos-ai/FlagGems) ![](https://img.shields.io/github/stars/flagos-ai/FlagGems.svg?cacheSeconds=172800) - FlagGems 是使用 OpenAI Triton 實現的高效能通用運算元庫。它基於一組與後端無關的核心，旨在加速多種硬體平臺上的 LLM 訓練與推理。
* [Flashlight](https://github.com/flashlight/flashlight) ![](https://img.shields.io/github/stars/flashlight/flashlight.svg?cacheSeconds=172800) - 一個完全使用 C++ 編寫的快速、靈活的機器學習庫，來自 Facebook AI Research 以及 Torch、TensorFlow、Eigen 和 Deep Speech 的創作者。
* [Flax](https://github.com/google/flax) ![](https://img.shields.io/github/stars/google/flax.svg?cacheSeconds=172800) - 為 JAX 設計的神經網路庫及生態系統，注重靈活性。
* [GPUStack](https://github.com/gpustack/gpustack) ![](https://img.shields.io/github/stars/gpustack/gpustack.svg?cacheSeconds=172800) - GPUStack 是一個用於執行 AI 模型的開源 GPU 叢集管理器。
* [Hivemind](https://github.com/learning-at-home/hivemind) ![](https://img.shields.io/github/stars/learning-at-home/hivemind.svg?cacheSeconds=172800) - 基於 PyTorch 的去中心化深度學習。
* [Jax](https://github.com/jax-ml/jax) ![](https://img.shields.io/github/stars/jax-ml/jax.svg?cacheSeconds=172800) - 對 Python+NumPy 程式進行可組合變換：微分、向量化、JIT 編譯至 GPU/TPU 等。
* [Kompute](https://github.com/KomputeProject/kompute) ![](https://img.shields.io/github/stars/KomputeProject/kompute.svg?cacheSeconds=172800) - 快速、輕量且支援移動裝置的 Vulkan 計算框架，針對高階 GPU 資料處理用例進行了最佳化。
* [Liger Kernel](https://github.com/linkedin/Liger-Kernel) ![](https://img.shields.io/github/stars/linkedin/Liger-Kernel.svg?cacheSeconds=172800) - Liger Kernel 是一組專為 LLM 訓練設計的 Triton 核心。
* [LightGBM](https://github.com/lightgbm-org/LightGBM) ![](https://img.shields.io/github/stars/lightgbm-org/LightGBM.svg?cacheSeconds=172800) - LightGBM 是一種使用基於樹的學習演算法的梯度提升框架。
* [MLX](https://github.com/ml-explore/mlx) ![](https://img.shields.io/github/stars/ml-explore/mlx.svg?cacheSeconds=172800) - MLX 是一個面向 Apple 晶片機器學習的陣列框架。
* [Modin](https://github.com/modin-project/modin) ![](https://img.shields.io/github/stars/modin-project/modin.svg?cacheSeconds=172800) - 只需更改一行程式碼，即可加速 Pandas 工作流。
* [NVIDIA TensorRT](https://github.com/NVIDIA/TensorRT) ![](https://img.shields.io/github/stars/NVIDIA/TensorRT.svg?cacheSeconds=172800) - TensorRT 是一個 C++ 庫，用於在 NVIDIA GPU 和深度學習加速器上實現高效能推理。
* [Nevergrad](https://github.com/facebookresearch/nevergrad) ![](https://img.shields.io/github/stars/facebookresearch/nevergrad.svg?cacheSeconds=172800) - Nevergrad 是一個無梯度最佳化平臺。
* [Norse](https://github.com/norse/norse) ![](https://img.shields.io/github/stars/norse/norse.svg?cacheSeconds=172800) - Norse 致力於發揮仿生神經元件的優勢；這類元件具有稀疏、事件驅動的特點，與人工神經網路有本質區別。
* [Numba](https://github.com/numba/numba) ![](https://img.shields.io/github/stars/numba/numba.svg?cacheSeconds=172800)  - 用於 Python 陣列和數值函式的編譯器。
* [Optimum](https://github.com/huggingface/optimum) ![](https://img.shields.io/github/stars/huggingface/optimum.svg?cacheSeconds=172800) - Optimum 是 Transformers 和 Diffusers 的擴充套件，提供一系列最佳化工具，讓模型能夠在目標硬體上以最高效率進行訓練和執行，同時保持易用性。
* [PEFT](https://github.com/huggingface/peft) ![](https://img.shields.io/github/stars/huggingface/peft.svg?cacheSeconds=172800) - 引數高效微調（PEFT）方法能夠高效地將預訓練語言模型（PLM）適配到各種下游應用，而無需微調模型的全部引數。
* [PaddlePaddle](https://github.com/PaddlePaddle/Paddle) ![](https://img.shields.io/github/stars/PaddlePaddle/Paddle.svg?cacheSeconds=172800) - PaddlePaddle 是一個用於大規模深度網路訓練的框架，可使用分佈在數百個節點上的資料來源。
* [PyG](https://github.com/pyg-team/pytorch_geometric) ![](https://img.shields.io/github/stars/pyg-team/pytorch_geometric.svg?cacheSeconds=172800) - PyG（PyTorch Geometric）是一個基於 PyTorch 構建的庫，可輕鬆編寫和訓練圖神經網路（GNN），適用於各種結構化資料相關應用。
* [PyTorch Lightning](https://github.com/Lightning-AI/pytorch-lightning) ![](https://img.shields.io/github/stars/Lightning-AI/pytorch-lightning.svg?cacheSeconds=172800) - PyTorch Lightning 無需修改程式碼，即可在多塊 GPU 和 TPU 上對 AI 模型進行預訓練、微調和部署。
* [PyTorch](https://github.com/pytorch/pytorch) ![](https://img.shields.io/github/stars/pytorch/pytorch.svg?cacheSeconds=172800) - PyTorch 是一個用於開發和訓練基於神經網路的深度學習模型的庫。
* [Ray](https://github.com/ray-project/ray) ![](https://img.shields.io/github/stars/ray-project/ray.svg?cacheSeconds=172800) - Ray 是一個靈活、高效能的機器學習分散式執行框架。
* [SetFit](https://github.com/huggingface/setfit) ![](https://img.shields.io/github/stars/huggingface/setfit.svg?cacheSeconds=172800) - SetFit 是一個高效、無需提示的 Sentence Transformers 小樣本微調框架。
* [Sonnet](https://github.com/google-deepmind/sonnet) ![](https://img.shields.io/github/stars/google-deepmind/sonnet.svg?cacheSeconds=172800) - Sonnet 是一個構建於 TensorFlow 2 之上的庫，為機器學習研究提供簡單、可組合的抽象。
* [Streaming](https://github.com/mosaicml/streaming) ![](https://img.shields.io/github/stars/mosaicml/streaming.svg?cacheSeconds=172800) - 用於高效神經網路訓練的資料流庫。
* [TensorFlow](https://github.com/tensorflow/tensorflow) ![](https://img.shields.io/github/stars/tensorflow/tensorflow.svg?cacheSeconds=172800) - TensorFlow 是一個領先的庫，旨在開發和部署先進的機器學習應用。
* [ThunderKittens](https://github.com/HazyResearch/ThunderKittens) ![](https://img.shields.io/github/stars/HazyResearch/ThunderKittens.svg?cacheSeconds=172800) ThunderKittens 是一個框架，旨在讓開發者能夠輕鬆使用 CUDA 編寫快速的深度學習核心。
* [TorchOpt](https://github.com/metaopt/torchopt) ![](https://img.shields.io/github/stars/metaopt/torchopt.svg?cacheSeconds=172800) - TorchOpt 是一個基於 PyTorch 構建的高效可微最佳化庫。
* [Triton](https://github.com/triton-lang/triton) ![](https://img.shields.io/github/stars/triton-lang/triton.svg?cacheSeconds=172800) - Triton 是一種語言和編譯器，用於編寫高效的自定義深度學習原語。它旨在提供一個開源環境，讓開發者能夠以高於 CUDA 的生產效率編寫快速程式碼，同時比其他現有 DSL 更靈活。
* [Vaex](https://github.com/vaexio/vaex) ![](https://img.shields.io/github/stars/vaexio/vaex.svg?cacheSeconds=172800) Vaex 是一個高效能 Python 庫，用於惰性處理超出記憶體容量（Out-of-Core）的 DataFrame（類似 Pandas），以視覺化和探索大型表格資料集。Vaex 透過記憶體對映、零記憶體複製策略和惰性計算實現最佳效能（不浪費記憶體）。
* [Vowpal Wabbit](https://github.com/VowpalWabbit/vowpal_wabbit) ![](https://img.shields.io/github/stars/VowpalWabbit/vowpal_wabbit.svg?cacheSeconds=172800) Vowpal Wabbit 是一個機器學習系統，透過線上學習、雜湊、allreduce、歸約、learning2search、主動學習和互動式學習等技術推動機器學習的前沿。
* [XGBoost](https://github.com/dmlc/xgboost) ![](https://img.shields.io/github/stars/dmlc/xgboost.svg?cacheSeconds=172800) - XGBoost 是一個經過最佳化的分散式梯度提升庫，旨在實現高效率、靈活性和可移植性。
* [YDF](https://github.com/google/yggdrasil-decision-forests) ![](https://img.shields.io/github/stars/google/yggdrasil-decision-forests.svg?cacheSeconds=172800) - YDF（Yggdrasil Decision Forests）是一個用於訓練、評估、解釋和服務隨機森林、梯度提升決策樹、CART 與 Isolation Forest 模型的庫。
* [bitsandbytes](https://github.com/bitsandbytes-foundation/bitsandbytes) ![](https://img.shields.io/github/stars/bitsandbytes-foundation/bitsandbytes.svg?cacheSeconds=172800) - Bitsandbytes 是一個輕量級 Python 封裝庫，封裝了 CUDA 自定義函式，尤其包括 8 位最佳化器、矩陣乘法（LLM.int8()）以及 8 位和 4 位量化函式。
* [einops](https://github.com/arogozhnikov/einops) ![](https://img.shields.io/github/stars/arogozhnikov/einops.svg?cacheSeconds=172800) - 靈活而強大的張量操作，讓程式碼更易讀、更可靠。
* [scikit-learn](https://github.com/scikit-learn/scikit-learn) ![](https://img.shields.io/github/stars/scikit-learn/scikit-learn.svg?cacheSeconds=172800) - Scikit-learn 是一個功能強大的機器學習庫，提供豐富的模組，可用於資料訪問、資料準備和統計模型構建。
* [snnTorch](https://github.com/jeshraghian/snntorch) ![](https://img.shields.io/github/stars/jeshraghian/snntorch.svg?cacheSeconds=172800) - snnTorch 是一個使用脈衝神經網路進行深度學習和線上學習的庫。
* [torchdistill](https://github.com/yoshitomo-matsubara/torchdistill) ![](https://img.shields.io/github/stars/yoshitomo-matsubara/torchdistill.svg?cacheSeconds=172800) - torchdistill 提供多種先進的知識蒸餾方法；你只需編輯宣告式 YAML 配置檔案（而非 Python 程式碼），即可設計新實驗。
* [torchkeras](https://github.com/lyhue1991/torchkeras?tab=readme-ov-file) ![](https://img.shields.io/github/stars/lyhue1991/torchkeras?tab=readme-ov-file.svg?cacheSeconds=172800) torchkeras 是一個簡單的工具，讓你能夠以 Keras 風格使用 PyTorch 訓練神經網路。
* [veScale](https://github.com/volcengine/veScale) ![](https://img.shields.io/github/stars/volcengine/veScale.svg?cacheSeconds=172800) - veScale 是一個原生基於 PyTorch 的 LLM 訓練框架。
* [yellowbrick](https://github.com/DistrictDataLabs/yellowbrick) ![](https://img.shields.io/github/stars/DistrictDataLabs/yellowbrick.svg?cacheSeconds=172800) - yellowbrick 是一個基於 matplotlib 的模型評估繪相簿，適用於 scikit-learn 和其他機器學習庫。

## 資料標註與合成
* [Argilla](https://github.com/argilla-io/argilla) ![](https://img.shields.io/github/stars/argilla-io/argilla.svg?cacheSeconds=172800) - Argilla 幫助領域專家和資料團隊用更少時間構建更優質的 NLP 資料集。
* [cleanlab](https://github.com/cleanlab/cleanlab) ![](https://img.shields.io/github/stars/cleanlab/cleanlab.svg?cacheSeconds=172800) - 面向資料中心 AI 的 Python 庫。可自動發現錯誤標註的資料、檢測離群值、估算多標註者資料集中的共識度和標註者質量，並建議下一步最適合重新標註的資料。
* [COCO Annotator](https://github.com/jsbroks/coco-annotator) ![](https://img.shields.io/github/stars/jsbroks/coco-annotator.svg?cacheSeconds=172800) - 基於 Web 的影象分割工具，可用於目標檢測、定位和關鍵點標註。
* [CVAT](https://github.com/cvat-ai/cvat) ![](https://img.shields.io/github/stars/cvat-ai/cvat.svg?cacheSeconds=172800) - CVAT（計算機視覺標註工具）是 OpenCV 的 Web 標註工具，可為計算機視覺演算法標註影片和影象。
* [Doccano](https://github.com/doccano/doccano) ![](https://img.shields.io/github/stars/doccano/doccano.svg?cacheSeconds=172800) - 面向人工標註的開源文字標註工具，支援情感分析、命名實體識別和機器翻譯。
* [Label Studio](https://github.com/HumanSignal/label-studio) ![](https://img.shields.io/github/stars/HumanSignal/label-studio.svg?cacheSeconds=172800) - 支援多個領域、具有標準化輸出格式的資料標註工具。
* [LightlyStudio](https://github.com/lightly-ai/lightly-studio) ![](https://img.shields.io/github/stars/lightly-ai/lightly-studio.svg?cacheSeconds=172800) - 一個用於整理、標註和管理視覺資料集（影象和影片）的開源工具。支援基於嵌入的自動篩選、標註，以及邊界框和分割任務的自動標籤。
* [NeMo Curator](https://github.com/NVIDIA-NeMo/Curator) ![](https://img.shields.io/github/stars/NVIDIA-NeMo/Curator.svg?cacheSeconds=172800) - NeMo Curator 是一個 GPU 加速框架，可高效整理大型語言模型資料。
* [refinery](https://github.com/code-kern-ai/refinery) ![](https://img.shields.io/github/stars/code-kern-ai/refinery.svg?cacheSeconds=172800) - 資料科學家用於擴充套件、評估和維護自然語言資料的開源工具。
* [SDV](https://github.com/sdv-dev/SDV) ![](https://img.shields.io/github/stars/sdv-dev/SDV.svg?cacheSeconds=172800) - Synthetic Data Vault（SDV）是一個合成資料生成庫生態系統，使用者可輕鬆學習單表、多表和時間序列資料集，隨後生成格式和統計特性與原始資料集相同的新合成資料。
* [Semantic Segmentation Editor](https://github.com/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) ![](https://img.shields.io/github/stars/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor.svg?cacheSeconds=172800) - 日立的開源工具，用於標註相機和鐳射雷達資料。
* [synthcity](https://github.com/vanderschaarlab/synthcity) ![](https://img.shields.io/github/stars/vanderschaarlab/synthcity.svg?cacheSeconds=172800) - synthcity 是一個用於生成和評估合成表格資料的庫。
* [TabGAN](https://github.com/Diyago/Tabular-data-generation) ![](https://img.shields.io/github/stars/Diyago/Tabular-data-generation.svg?cacheSeconds=172800) - 使用 GAN（CTGAN）、擴散模型和 LLM 生成合成表格資料，並支援對抗式篩選、隱私指標和 sklearn 整合。
* [ViPE](https://github.com/nv-tlabs/vipe) ![](https://img.shields.io/github/stars/nv-tlabs/vipe.svg?cacheSeconds=172800) - ViPE 是一個空間 AI 工具，可從原始影片中標註相機姿態和稠密深度圖。
* [YData Synthetic](https://github.com/Data-Centric-AI-Community/fg-data-synthetic) ![](https://img.shields.io/github/stars/Data-Centric-AI-Community/fg-data-synthetic.svg?cacheSeconds=172800) - YData Synthetic 是一個利用先進生成模型生成合成表格和時間序列資料的包。

## 資料流水線
* [Apache Airflow](https://github.com/apache/airflow) ![](https://img.shields.io/github/stars/apache/airflow.svg?cacheSeconds=172800) - 使用 Python 構建的資料流水線框架，包含排程器、DAG 定義和視覺化介面。
* [Apache Nifi](https://github.com/apache/nifi) ![](https://img.shields.io/github/stars/apache/nifi.svg?cacheSeconds=172800) - Apache NiFi 專為資料流設計，支援高度可配置的有向圖，用於資料路由、轉換和系統中介邏輯。
* [Argo Workflows](https://github.com/argoproj/argo-workflows) ![](https://img.shields.io/github/stars/argoproj/argo-workflows.svg?cacheSeconds=172800) - Argo Workflows 是一個開源、容器原生的工作流引擎，用於編排 Kubernetes 上的並行作業。Argo Workflows 以 Kubernetes CRD（自定義資源定義）的形式實現。
* [Couler](https://github.com/couler-proj/couler) ![](https://img.shields.io/github/stars/couler-proj/couler.svg?cacheSeconds=172800) - 用於在不同工作流引擎（如 Argo Workflows、Tekton Pipelines 和 Apache Airflow）上構建和管理機器學習工作流的統一介面。
* [DataTrove](https://github.com/huggingface/datatrove) ![](https://img.shields.io/github/stars/huggingface/datatrove.svg?cacheSeconds=172800) - DataTrove 是一個用於超大規模文字資料處理、篩選和去重的庫。
* [Dagster](https://github.com/dagster-io/dagster) ![](https://img.shields.io/github/stars/dagster-io/dagster.svg?cacheSeconds=172800) - 面向機器學習、分析和 ETL 的資料編排器。
* [DBT](https://github.com/dbt-labs/dbt) ![](https://img.shields.io/github/stars/dbt-labs/dbt.svg?cacheSeconds=172800) - 用於在資料倉儲內執行轉換的 ETL 工具。
* [Flyte](https://github.com/flyteorg/flyte) ![](https://img.shields.io/github/stars/flyteorg/flyte.svg?cacheSeconds=172800) - Lyft 的雲原生機器學習與資料處理平臺 - [(演示)](https://youtu.be/KdUJGSP1h9U?t=1451)。
* [Genie](https://github.com/Netflix/genie) ![](https://img.shields.io/github/stars/Netflix/genie.svg?cacheSeconds=172800) - 用於對接 Hadoop 系統並觸發作業執行的作業編排引擎。
* [Hamilton](https://github.com/apache/hamilton) ![](https://img.shields.io/github/stars/apache/hamilton.svg?cacheSeconds=172800) - Hamilton 是一個用於定義資料流的微型編排框架。可在任何能執行 Python 的環境中執行（如 Jupyter、FastAPI、Spark、Ray、Dask）。無需額外學習即可遵循軟體工程最佳實踐。可用於定義特徵工程轉換、端到端模型流水線和 LLM 工作流。它與宏觀編排系統（如 Kedro、Luigi、Airflow、dbt 等）互補，可替代這些系統宏任務內部的程式碼。它附帶可自行託管的 UI，可捕獲血緣與來源資訊、執行遙測資料和資料摘要，並構建自動填充的目錄；開發和生產環境均可使用。
* [Instill VDP](https://github.com/instill-ai/instill-core) ![](https://img.shields.io/github/stars/instill-ai/instill-core.svg?cacheSeconds=172800) - Instill VDP（多功能資料流水線）旨在簡化從啟動到完成的資料處理流水線。
* [Instructor](https://github.com/567-labs/instructor) ![](https://img.shields.io/github/stars/567-labs/instructor.svg?cacheSeconds=172800) - Instructor 讓你能夠輕鬆從 GPT-3.5、GPT-4、GPT-4-Vision 等 LLM 和開源模型獲取 JSON 等結構化資料。
* [Kedro](https://github.com/kedro-org/kedro) ![](https://img.shields.io/github/stars/kedro-org/kedro.svg?cacheSeconds=172800) - Kedro 是一個工作流開發工具，可幫助你構建穩健、可擴充套件、可部署、可復現且有版本管理的資料流水線。
* [Luigi](https://github.com/spotify/luigi) ![](https://img.shields.io/github/stars/spotify/luigi.svg?cacheSeconds=172800) - Luigi 是一個 Python 模組，可幫助你構建複雜的批處理作業流水線，並處理依賴解析、工作流管理、視覺化等。
* [Metaflow](https://github.com/Netflix/metaflow) ![](https://img.shields.io/github/stars/Netflix/metaflow.svg?cacheSeconds=172800) - 一個幫助資料科學家輕鬆構建和管理真實資料科學專案的框架。
* [Pachyderm](https://github.com/pachyderm/pachyderm) ![](https://img.shields.io/github/stars/pachyderm/pachyderm.svg?cacheSeconds=172800) - 一個基於 Kubernetes 構建的開源分散式處理框架，主要專注於動態構建生產級機器學習流水線 - [(影片)](https://www.youtube.com/watch?v=LamKVhe2RSM)。
* [Pixeltable](https://github.com/pixeltable/pixeltable) ![](https://img.shields.io/github/stars/pixeltable/pixeltable.svg?cacheSeconds=172800) 開源 Python 庫，提供宣告式、增量式資料基礎設施，用於構建和管理多模態 AI 工作負載。
* [Prefect Core](https://github.com/PrefectHQ/prefect) ![](https://img.shields.io/github/stars/PrefectHQ/prefect.svg?cacheSeconds=172800) - 工作流管理系統，讓你能夠輕鬆為資料流水線新增重試、日誌記錄、動態對映、快取、故障通知等語義。
* [SeqIO](https://github.com/google/seqio) ![](https://img.shields.io/github/stars/google/seqio.svg?cacheSeconds=172800) - SeqIO 是一個用於處理序列資料的庫，這些資料將輸入下游序列模型。
* [Snakemake](https://github.com/snakemake/snakemake) ![](https://img.shields.io/github/stars/snakemake/snakemake.svg?cacheSeconds=172800) - 用於可復現、可擴充套件資料分析的工作流管理系統。
* [Towhee](https://github.com/towhee-io/towhee) ![](https://img.shields.io/github/stars/towhee-io/towhee.svg?cacheSeconds=172800) - 通用機器學習流水線，可使用一個或多個機器學習模型生成嵌入向量。
* [unstructured](https://github.com/Unstructured-IO/unstructured) ![](https://img.shields.io/github/stars/Unstructured-IO/unstructured.svg?cacheSeconds=172800) - unstructured 簡化並最佳化 LLM 的資料處理工作流，可攝取和預處理影象及 PDF、HTML、Word 文件等文字檔案。
* [ZenML](https://github.com/zenml-io/zenml) ![](https://img.shields.io/github/stars/zenml-io/zenml.svg?cacheSeconds=172800) - ZenML 是一個可擴充套件的開源 MLOps 框架，用於建立可復現的 ML 流水線，重點支援自動化後設資料跟蹤、快取以及與其他工具的豐富整合。

## 資料科學筆記本
* [Apache Zeppelin](https://github.com/apache/zeppelin) ![](https://img.shields.io/github/stars/apache/zeppelin.svg?cacheSeconds=172800) - 基於 Web 的筆記本，提供資料驅動、互動式資料分析環境，以及支援 SQL、Scala 等語言的協作文件。
* [Deepnote](https://github.com/deepnote/deepnote) ![](https://img.shields.io/github/stars/deepnote/deepnote.svg?cacheSeconds=172800) - Deepnote 是 Jupyter 的直接替代品，採用 AI 優先設計，提供簡潔 UI、新型區塊和原生資料整合。可在喜愛的 IDE 中本地使用 Python、R 和 SQL，然後擴充套件至 Deepnote 雲，使用實時協作、Deepnote 代理和可部署的資料應用。
* [Jupyter Notebooks](https://github.com/jupyter/notebook) ![](https://img.shields.io/github/stars/jupyter/notebook.svg?cacheSeconds=172800) - 基於 Web 的 Python 沙盒筆記本環境，適用於可復現開發。
* [Marimo](https://github.com/marimo-team/marimo) ![](https://img.shields.io/github/stars/marimo-team/marimo.svg?cacheSeconds=172800) - 響應式 Python 筆記本——執行可復現實驗、作為指令碼執行、部署為應用，並透過 git 進行版本管理。
* [Papermill](https://github.com/nteract/papermill) ![](https://img.shields.io/github/stars/nteract/papermill.svg?cacheSeconds=172800) - Papermill 是一個用於為筆記本新增引數並像 Python 指令碼一樣執行它們的庫。
* [Polynote](https://github.com/polynote/polynote) ![](https://img.shields.io/github/stars/polynote/polynote.svg?cacheSeconds=172800) - Polynote 是一個實驗性的多語言筆記本環境。目前支援 Scala 和 Python（可搭配或不搭配 Spark）、SQL 和 Vega。
* [RMarkdown](https://github.com/rstudio/rmarkdown) ![](https://img.shields.io/github/stars/rstudio/rmarkdown.svg?cacheSeconds=172800) - rmarkdown 包是基於 Pandoc 的新一代 R Markdown 實現。
* [Stencila](https://github.com/stencila/stencila) ![](https://img.shields.io/github/stars/stencila/stencila.svg?cacheSeconds=172800) - Stencila 是一個用於建立、協作編輯和分享資料驅動內容的平臺。這些內容透明且可復現。
* [Voilà](https://github.com/voila-dashboards/voila) ![](https://img.shields.io/github/stars/voila-dashboards/voila.svg?cacheSeconds=172800) - Voilà 可將 Jupyter 筆記本轉換為獨立 Web 應用，例如可用作儀表板。

## 資料儲存最佳化
* [AIStore](https://github.com/NVIDIA/aistore) ![](https://img.shields.io/github/stars/NVIDIA/aistore.svg?cacheSeconds=172800) - AIStore 是一個輕量級物件儲存系統，可隨著每個新增儲存節點線性擴充套件，並特別專注於拍位元組級深度學習場景。
* [Alluxio](https://github.com/Alluxio/alluxio) ![](https://img.shields.io/github/stars/Alluxio/alluxio.svg?cacheSeconds=172800) - 一種虛擬分散式儲存系統，用於彌合計算框架與儲存系統之間的鴻溝。
* [Apache Arrow](https://github.com/apache/arrow) ![](https://img.shields.io/github/stars/apache/arrow.svg?cacheSeconds=172800) - 與 Pandas、基於 Hadoop 的系統等相容的記憶體列式資料表示格式。
* [Apache Druid](https://github.com/apache/druid) ![](https://img.shields.io/github/stars/apache/druid.svg?cacheSeconds=172800) - 一個高效能實時分析資料庫。可閱讀這篇[文章](https://medium.com/data-science/introduction-to-druid-4bf285b92b5a)瞭解入門資訊。
* [Apache Hudi](https://github.com/apache/hudi) ![](https://img.shields.io/github/stars/apache/hudi.svg?cacheSeconds=172800) - Hudi 是一個事務型資料湖平臺，可將資料倉儲和資料庫的核心功能直接引入資料湖。Hudi 非常適合流式工作負載，也支援建立高效的增量批處理流水線。它支援 Spark、Flink、Presto、Trino、Hive 等主流查詢引擎。更多資訊[見此處](https://hudi.apache.org/)。
* [Apache Iceberg](https://github.com/apache/iceberg) ![](https://img.shields.io/github/stars/apache/iceberg.svg?cacheSeconds=172800) - Iceberg 是一種符合 ACID、高效能的格式，專為超大型分析表（包含數十 PB 資料）設計。它將 SQL 表的可靠性和簡潔性帶入大資料領域，同時支援 Spark、Trino、Flink、Presto、Hive 和 Impala 等引擎安全地同時操作同一張表。更多資訊[見此處](https://iceberg.apache.org/)。
* [Apache Ignite](https://github.com/apache/ignite) ![](https://img.shields.io/github/stars/apache/ignite.svg?cacheSeconds=172800) - 以記憶體為中心的分散式資料庫、快取和處理平臺，可為事務型、分析型和流式工作負載提供 PB 級記憶體速度 - [演示](https://www.youtube.com/watch?v=Xt4PWQ__YPw)。
* [Apache Parquet](https://github.com/apache/parquet-java) ![](https://img.shields.io/github/stars/apache/parquet-java.svg?cacheSeconds=172800) - 與 Pandas、基於 Hadoop 的系統等相容的磁碟列式資料表示格式。
* [Apache Pinot](https://github.com/apache/pinot) ![](https://img.shields.io/github/stars/apache/pinot.svg?cacheSeconds=172800) - 一個實時分散式 OLAP 資料儲存。關於 ClickHouse、Druid 和 Pinot 等開源大資料 OLAP 系統的比較[見此處](https://medium.com/@leventov/comparison-of-the-open-source-olap-systems-for-big-data-clickhouse-druid-and-pinot-8e042a5ed1c7)。
* [Casibase](https://github.com/the-open-agent/openagent) ![](https://img.shields.io/github/stars/the-open-agent/openagent.svg?cacheSeconds=172800) - Casibase 是一個類似 LangChain 的 RAG（檢索增強生成）知識庫，提供 Web UI 和企業單點登入。
* [Chroma](https://github.com/chroma-core/chroma) ![](https://img.shields.io/github/stars/chroma-core/chroma.svg?cacheSeconds=172800) - Chroma 是一個開源嵌入資料庫。
* [ClickHouse](https://github.com/ClickHouse/ClickHouse) ![](https://img.shields.io/github/stars/ClickHouse/ClickHouse.svg?cacheSeconds=172800) - ClickHouse 是一個開源列式資料庫管理系統。
* [Delta Lake](https://github.com/delta-io/delta) ![](https://img.shields.io/github/stars/delta-io/delta.svg?cacheSeconds=172800) - Delta Lake 是一個儲存層，為 Apache Spark 和其他大資料引擎帶來可擴充套件的 ACID 事務。
* [EdgeDB](https://github.com/geldata/gel) ![](https://img.shields.io/github/stars/geldata/gel.svg?cacheSeconds=172800) - Gel 透過現代資料模型、圖查詢、身份驗證與 AI 解決方案等功能增強 Postgres。
* [GPTCache](https://github.com/zilliztech/GPTCache) ![](https://img.shields.io/github/stars/zilliztech/GPTCache.svg?cacheSeconds=172800) - GPTCache 是一個用於為大型語言模型查詢建立語義快取的庫。
* [InfluxDB](https://github.com/influxdata/influxdb) ![](https://img.shields.io/github/stars/influxdata/influxdb.svg?cacheSeconds=172800) 可擴充套件的資料儲存，用於儲存指標、事件並進行實時分析。
* [Milvus](https://github.com/milvus-io/milvus) ![](https://img.shields.io/github/stars/milvus-io/milvus.svg?cacheSeconds=172800) Milvus 是一個雲原生開源向量資料庫，用於管理機器學習模型和神經網路生成的嵌入向量。
* [Marqo](https://github.com/marqo-ai/marqo) ![](https://img.shields.io/github/stars/marqo-ai/marqo.svg?cacheSeconds=172800) Marqo 是一個端到端向量搜尋引擎。
* [pgvector](https://github.com/pgvector/pgvector) ![](https://img.shields.io/github/stars/pgvector/pgvector.svg?cacheSeconds=172800) pgvector 為 Postgres 提供向量相似性搜尋功能。
* [PostgresML](https://github.com/postgresml/postgresml) ![](https://img.shields.io/github/stars/postgresml/postgresml.svg?cacheSeconds=172800) PostgresML 是 PostgreSQL 的機器學習擴充套件，可透過 SQL 查詢對文字和表格資料進行訓練和推理。
* [Redis](https://github.com/redis/redis) ![](https://img.shields.io/github/stars/redis/redis.svg?cacheSeconds=172800) Redis 是一個開源記憶體資料儲存，支援向量相似性搜尋，適用於語義搜尋和推薦系統等 AI/ML 應用。
* [Safetensors](https://github.com/safetensors/safetensors) ![](https://img.shields.io/github/stars/safetensors/safetensors.svg?cacheSeconds=172800) 一種簡單、安全的張量儲存與分發方式。
* [TimescaleDB](https://github.com/timescale/timescaledb) ![](https://img.shields.io/github/stars/timescale/timescaledb.svg?cacheSeconds=172800) An open-source time-series SQL database optimized for fast ingest and complex queries packaged as a PostgreSQL extension - 開源時序 SQL 資料庫，作為 PostgreSQL 擴充套件打包，針對快速寫入和複雜查詢進行了最佳化 - [(影片)](https://www.youtube.com/watch?v=zbjub8BQPyE)。
* [Weaviate](https://github.com/weaviate/weaviate) ![](https://img.shields.io/github/stars/weaviate/weaviate.svg?cacheSeconds=172800) - 一個低延遲向量搜尋引擎（GraphQL、RESTful），開箱即支援多種媒體型別。其模組包括語義搜尋、問答、分類、可定製模型（PyTorch/TensorFlow/Keras）等。
* [Zarr](https://github.com/zarr-developers/zarr-python) ![](https://img.shields.io/github/stars/zarr-developers/zarr-python.svg?cacheSeconds=172800) - 用於平行計算的分塊壓縮 N 維陣列 Python 實現。

## 資料流處理
* [Apache Beam](https://github.com/apache/beam) ![](https://img.shields.io/github/stars/apache/beam.svg?cacheSeconds=172800) Apache Beam 是一個統一的批處理和流處理程式設計模型。
* [Apache Flink](https://github.com/apache/flink) ![](https://img.shields.io/github/stars/apache/flink.svg?cacheSeconds=172800) - 開源流處理框架，具備強大的流式和批處理能力。
* [Apache Kafka](https://github.com/apache/kafka) ![](https://img.shields.io/github/stars/apache/kafka.svg?cacheSeconds=172800) - Kafka 客戶端庫，用於構建輸入和輸出儲存在 Kafka 叢集中的應用與微服務。
* [Apache Samza](https://github.com/apache/samza) ![](https://img.shields.io/github/stars/apache/samza.svg?cacheSeconds=172800) - 分散式流處理框架。它使用 Apache Kafka 進行訊息傳遞，並使用 Apache Hadoop YARN 提供容錯、處理器隔離、安全和資源管理。
* [Apache Spark](https://github.com/apache/spark) ![](https://img.shields.io/github/stars/apache/spark.svg?cacheSeconds=172800) - 使用 Apache Spark 框架作為後端的流微批處理，支援有狀態的精確一次語義。
* [Bytewax](https://github.com/bytewax/bytewax) ![](https://img.shields.io/github/stars/bytewax/bytewax.svg?cacheSeconds=172800) - 基於 Rust 引擎構建的靈活、以 Python 為中心的有狀態流處理框架。
* [FastStream](https://github.com/ag2ai/faststream) ![](https://img.shields.io/github/stars/ag2ai/faststream.svg?cacheSeconds=172800) - 一種現代化、與訊息代理無關的流式 Python 框架，支援 Apache Kafka、RabbitMQ 和 NATS 協議，受 FastAPI 啟發，且易於與其他 Web 框架整合。
* [MOA](https://github.com/Waikato/moa) ![](https://img.shields.io/github/stars/Waikato/moa.svg?cacheSeconds=172800) - MOA（大規模線上分析）是一個用於大資料流挖掘的開源框架。
* [MosaicML Streaming](https://github.com/mosaicml/streaming) ![](https://img.shields.io/github/stars/mosaicml/streaming.svg?cacheSeconds=172800) - 從雲端儲存快速、確定性地流式讀取大型資料集，以支援分散式模型訓練。
* [RisingWave](https://github.com/risingwavelabs/risingwave) ![](https://img.shields.io/github/stars/risingwavelabs/risingwave.svg?cacheSeconds=172800) - 一個分散式 SQL 流資料庫，將流處理與低延遲服務相結合，非常適合構建和服務線上機器學習特徵。
* [TensorStore](https://github.com/google/tensorstore) ![](https://img.shields.io/github/stars/google/tensorstore.svg?cacheSeconds=172800) - 用於讀寫大型多維陣列的庫。


## 部署與服務
* [Agenta](https://github.com/Agenta-AI/agenta) ![](https://img.shields.io/github/stars/Agenta-AI/agenta.svg?cacheSeconds=172800) - Agenta 為整個 LLMOps 工作流提供端到端工具：構建（LLM playground、評估）、部署（提示詞和配置管理），以及觀測與追蹤。
* [AirLLM](https://github.com/lyogavin/airllm) ![](https://img.shields.io/github/stars/lyogavin/airllm.svg?cacheSeconds=172800) - AirLLM 最佳化推理記憶體用量，使 700 億引數大型語言模型無需量化、蒸餾和剪枝，即可在單張 4GB GPU 上執行推理。
* [AITemplate](https://github.com/facebookincubator/AITemplate) ![](https://img.shields.io/github/stars/facebookincubator/AITemplate.svg?cacheSeconds=172800) - AITemplate（AIT）是一個 Python 框架，可將深度神經網路轉換為 CUDA（NVIDIA GPU）/HIP（AMD GPU）C++ 程式碼，實現極速推理服務。
* [BentoML](https://github.com/bentoml/BentoML) ![](https://img.shields.io/github/stars/bentoml/BentoML.svg?cacheSeconds=172800) - BentoML 是一個用於高效能 ML 模型服務的開源框架。
* [Bifrost](https://github.com/maximhq/bifrost) ![](https://img.shields.io/github/stars/maximhq/bifrost.svg?cacheSeconds=172800) - AI 閘道器透過單一相容 OpenAI 的 API 接入 23 多家 LLM 提供商，並提供自動故障切換、負載均衡、語義快取、預算治理和 Prometheus 指標。
* [BISHENG](https://github.com/dataelement/bisheng) ![](https://img.shields.io/github/stars/dataelement/bisheng.svg?cacheSeconds=172800) - BISHENG 是一個開放的 LLM 應用開發運維平臺，專注於企業場景。
* [CosmoEdge](https://github.com/cosmo-wander-ai/cosmo-edge) ![](https://img.shields.io/github/stars/cosmo-wander-ai/cosmo-edge.svg?cacheSeconds=172800) - 面向生產部署的 C++ 邊緣影片 AI 引擎，結合 RTSP 接入、CV/VLM 推理、視覺化編排、告警以及 Sophon 和 Rockchip NPU 上的事件分發。
* [DeepDetect](https://github.com/jolibrain/deepdetect) ![](https://img.shields.io/github/stars/jolibrain/deepdetect.svg?cacheSeconds=172800) - 使用 C++ 編寫並由 Jolibrain 維護的機器學習生產伺服器，支援 TensorFlow、XGBoost 和 Caffe 模型。
* [Dynamo](https://github.com/ai-dynamo/dynamo) ![](https://img.shields.io/github/stars/ai-dynamo/dynamo.svg?cacheSeconds=172800) - NVIDIA Dynamo 是一個高吞吐、低延遲的推理框架，專為多節點分散式環境中的生成式 AI 和推理模型服務而設計。
* [exo](https://github.com/exo-explore/exo) ![](https://img.shields.io/github/stars/exo-explore/exo.svg?cacheSeconds=172800) - exo 可幫助你在家中利用日常裝置組建並執行 AI 叢集。
* [Genkit](https://github.com/genkit-ai/genkit) ![](https://img.shields.io/github/stars/genkit-ai/genkit.svg?cacheSeconds=172800) - Genkit 是一個開源框架，使用熟悉的、以程式碼為中心的模式構建 AI 應用。它讓 AI 功能的開發、整合和測試更加便捷，並支援可觀測性和評估。
* [GoModel](https://github.com/ENTERPILOT/GoModel) ![](https://img.shields.io/github/stars/ENTERPILOT/GoModel.svg?cacheSeconds=172800) - GoModel 是一個使用 Go 編寫、可自行託管的 AI 閘道器，透過統一的相容 OpenAI API 接入 OpenAI、Anthropic、Gemini、Groq、xAI、Ollama 等提供商，並支援路由、用量跟蹤、速率限制和防護機制。
* [Inference](https://github.com/roboflow/inference) ![](https://img.shields.io/github/stars/roboflow/inference.svg?cacheSeconds=172800) - 一個快速、可用於生產環境的計算機視覺推理伺服器，支援部署多種熱門模型架構和微調模型。藉助 Inference，你可以透過 Docker 在自有硬體上部署 YOLOv5、YOLOv8、CLIP、SAM 和 CogVLM 等模型。
* [Infinity](https://github.com/michaelfeil/infinity) ![](https://img.shields.io/github/stars/michaelfeil/infinity.svg?cacheSeconds=172800) - Infinity 是一個高吞吐、低延遲 REST API，用於提供文字嵌入、重排序模型和 CLIP 服務。
* [LiteLLM](https://github.com/BerriAI/litellm) ![](https://img.shields.io/github/stars/BerriAI/litellm.svg?cacheSeconds=172800) - LiteLLM 是一個 Python SDK 和代理伺服器（LLM 閘道器），可使用 OpenAI 格式呼叫 100 多種 LLM API，包括 Bedrock、Azure、OpenAI、VertexAI、Cohere、Anthropic、Sagemaker、HuggingFace、Replicate 和 Groq。
* [LiteRT](https://github.com/google-ai-edge/litert) ![](https://img.shields.io/github/stars/google-ai-edge/litert.svg?cacheSeconds=172800) - LiteRT（原 TensorFlow Lite）是 Google 的高效能裝置端 AI 推理執行時，可將機器學習模型部署到移動、嵌入式和邊緣裝置。
* [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) ![](https://img.shields.io/github/stars/google-ai-edge/LiteRT-LM.svg?cacheSeconds=172800) - LiteRT-LM 是 Google 面向生產環境的高效能推理框架，可在邊緣裝置上部署大型語言模型，並支援 Android、iOS、Web、桌面和 IoT 等平臺。
* [LitServe](https://github.com/Lightning-AI/LitServe) ![](https://img.shields.io/github/stars/Lightning-AI/LitServe.svg?cacheSeconds=172800) - LitServe 是一個基於 FastAPI 構建的靈活 AI 模型服務引擎。它支援模型、代理、多模態系統、RAG 和複雜 ML 流水線的自定義推理引擎。
* [jevos](https://github.com/feder-cr/jev) ![](https://img.shields.io/github/stars/feder-cr/jev.svg?cacheSeconds=172800) - jevOS 是 TypeSafe Jev 的開源替代方案，用於是/否決策：它是一個 10 億引數二元分類器（GGUF、llama.cpp），透過相容 Jev 的 FastAPI HTTP API 提供服務，可僅用 CPU 在膝上型電腦上執行。
* [Jina-serve](https://github.com/jina-ai/serve) ![](https://img.shields.io/github/stars/jina-ai/serve.svg?cacheSeconds=172800) - Jina-serve 是一個用於構建和部署 AI 服務的框架，服務之間可透過 gRPC、HTTP 和 WebSocket 通訊。
* [Kiln](https://github.com/kiln-ai/kiln) ![](https://img.shields.io/github/stars/kiln-ai/kiln.svg?cacheSeconds=172800) - Kiln 是一個開源工具，用於微調 LLM 模型、生成合成資料並協作處理資料集。
* [KServe](https://github.com/kserve/kserve) ![](https://img.shields.io/github/stars/kserve/kserve.svg?cacheSeconds=172800) - KServe 提供一個 Kubernetes 自定義資源定義，用於機器學習預測和生成式模型服務。
* [KTransformers](https://github.com/kvcache-ai/ktransformers) ![](https://img.shields.io/github/stars/kvcache-ai/ktransformers.svg?cacheSeconds=172800) - KTransformers 是一個靈活的框架，可體驗前沿 LLM 推理最佳化。
* [Langtrace](https://github.com/Scale3-Labs/langtrace) ![](https://img.shields.io/github/stars/Scale3-Labs/langtrace.svg?cacheSeconds=172800) - Langtrace 是一個基於 OpenTelemetry 的開源端到端 LLM 應用可觀測性工具，為主流 LLM、LLM 框架、向量資料庫等提供實時追蹤、評估和指標。
* [Lepton AI](https://github.com/leptonai/leptonai) ![](https://img.shields.io/github/stars/leptonai/leptonai.svg?cacheSeconds=172800) - LeptonAI Python 庫讓你能夠輕鬆使用 Python 程式碼構建 AI 服務。
* [LightLLM](https://github.com/ModelTC/lightllm) ![](https://img.shields.io/github/stars/ModelTC/lightllm.svg?cacheSeconds=172800) - LightLLM 是一個基於 Python 的大型語言模型（LLM）推理和服務框架，以輕量設計、易於擴充套件和高速效能見長。
* [llama.cpp](https://github.com/ggml-org/llama.cpp) ![](https://img.shields.io/github/stars/ggml-org/llama.cpp.svg?cacheSeconds=172800) - llama.cpp 是一個開源軟體庫，可對 Llama 等多種大型語言模型執行推理。
* [llmfit](https://github.com/AlexsJones/llmfit) ![](https://img.shields.io/github/stars/AlexsJones/llmfit.svg?cacheSeconds=172800) - 一個終端工具，可根據系統的 RAM、CPU 和 GPU 為 LLM 模型選擇合適配置。它能檢測硬體，並從質量、速度、適配度和上下文等維度為各模型評分，告訴你哪些模型能在你的機器上流暢執行。
* [LMCache](https://github.com/lmcache/lmcache) ![](https://img.shields.io/github/stars/lmcache/lmcache.svg?cacheSeconds=172800) - LMCache 是一個高效能 KV 快取層，可加速 LLM 推理。
* [LMDeploy](https://github.com/internlm/lmdeploy) ![](https://img.shields.io/github/stars/internlm/lmdeploy.svg?cacheSeconds=172800) - LMDeploy 是一個用於壓縮、部署和提供 LLM 服務的工具包。
* [LM Studio](https://github.com/lmstudio-ai/lms) ![](https://img.shields.io/github/stars/lmstudio-ai/lms.svg?cacheSeconds=172800) - LM Studio 是一個工具，可在本地計算機上部署 LLM 模型；只要滿足最低要求，即使配置相對普通的裝置也可以執行。
* [LocalAI](https://github.com/mudler/LocalAI) ![](https://img.shields.io/github/stars/mudler/LocalAI.svg?cacheSeconds=172800) - LocalAI 是一個可直接替換的 REST API，相容 OpenAI API 規範，可在本地執行推理。
* [MindsDB](https://github.com/mindsdb/mindshub) ![](https://img.shields.io/github/stars/mindsdb/mindshub.svg?cacheSeconds=172800) - MindsDB 是一個平臺，可直接基於資料庫、向量儲存和應用資料實時建立、提供和微調模型。
* [mini-sglang](https://github.com/sgl-project/mini-sglang) ![](https://img.shields.io/github/stars/sgl-project/mini-sglang.svg?cacheSeconds=172800) - mini-sglang 是一個輕量、高效的大型語言模型服務框架。
* [MLRun](https://github.com/mlrun/mlrun)![](https://img.shields.io/github/stars/mlrun/mlrun.svg?cacheSeconds=172800)- MLRun 是一個開放的 MLOps 框架，可快速構建和管理貫穿整個生命週期的持續機器學習與生成式 AI 應用。
* [MLServer](https://github.com/SeldonIO/mlserver) ![](https://img.shields.io/github/stars/SeldonIO/mlserver.svg?cacheSeconds=172800) - 一個機器學習模型推理伺服器，支援多個框架、多模型服務等功能。
* [Model Runner](https://github.com/docker/model-runner) ![](https://img.shields.io/github/stars/docker/model-runner.svg?cacheSeconds=172800) - Docker Model Runner 可輕鬆使用 Docker 管理、執行和提供 AI 模型服務，支援從 Docker Hub 或任何符合 OCI 標準的登錄檔拉取 LLM 和其他 AI 模型。
* [Mosec](https://github.com/mosecorg/mosec) ![](https://img.shields.io/github/stars/mosecorg/mosec.svg?cacheSeconds=172800) - 一個由 Rust 驅動、支援多階段流水線的模型伺服器，提供動態批處理等功能。可輕鬆實現並部署為微服務。
* [nano-vllm](https://github.com/GeeeekExplorer/nano-vllm) ![](https://img.shields.io/github/stars/GeeeekExplorer/nano-vllm.svg?cacheSeconds=172800) - nano-vllm 是一個從頭構建的輕量級 vLLM 實現，提供快速離線推理，並採用字首快取、張量並行和 CUDA graph 等最佳化技術。
* [nndeploy](https://github.com/nndeploy/nndeploy) ![](https://img.shields.io/github/stars/nndeploy/nndeploy.svg?cacheSeconds=172800) - 一個易用且高效能的 AI 部署框架。
* [Nuclio](https://github.com/nuclio/nuclio) ![](https://img.shields.io/github/stars/nuclio/nuclio.svg?cacheSeconds=172800) - 一個專注於資料、I/O 和計算密集型工作負載的高效能“無伺服器”框架。它與 Jupyter 和 Kubeflow 等主流資料科學工具緊密整合，支援多種資料和流式資料來源，並支援在 CPU 和 GPU 上執行。
* [OpenLLM](https://github.com/bentoml/OpenLLM) ![](https://img.shields.io/github/stars/bentoml/OpenLLM.svg?cacheSeconds=172800) - OpenLLM 讓開發者只需一條命令，即可將任意開源 LLM（Llama 3.1、Qwen2、Phi3 等）或自定義模型作為相容 OpenAI 的 API 執行。
* [OpenVINO](https://github.com/openvinotoolkit/openvino) ![](https://img.shields.io/github/stars/openvinotoolkit/openvino.svg?cacheSeconds=172800) - OpenVINO 是一個用於最佳化和部署 AI 推理的開源工具包。
* [Open WebUI](https://github.com/open-webui/open-webui) ![](https://img.shields.io/github/stars/open-webui/open-webui.svg?cacheSeconds=172800) - Open WebUI 是一個可擴充套件、功能豐富且易用的自託管 AI 平臺，專為完全離線執行而設計。它支援 Ollama 等各種 LLM 執行器和相容 OpenAI 的 API，並內建用於 RAG 的推理引擎，是強大的 AI 部署解決方案。
* [OptiLLM](https://github.com/algorithmicsuperintelligence/optillm) ![](https://img.shields.io/github/stars/algorithmicsuperintelligence/optillm.svg?cacheSeconds=172800) - OptiLLM 是一個相容 OpenAI API 的推理最佳化代理，實現了 20 多種先進技術，可顯著提升 LLM 在推理任務上的準確性和效能，無需訓練或微調任何模型。
* [PowerInfer](https://github.com/Tiiny-AI/PowerInfer) ![](https://img.shields.io/github/stars/Tiiny-AI/PowerInfer.svg?cacheSeconds=172800) - PowerInfer 是一個利用啟用區域性性的 CPU/GPU LLM 推理引擎，面向你的裝置進行最佳化。
* [Prompt2Model](https://github.com/neulab/prompt2model) ![](https://img.shields.io/github/stars/neulab/prompt2model.svg?cacheSeconds=172800) - Prompt2Model 是一個系統，可根據自然語言任務描述（例如 ChatGPT 等 LLM 使用的提示詞）訓練適合部署的小型專用模型。
* [RamaLama](https://github.com/containers/ramalama) ![](https://img.shields.io/github/stars/containers/ramalama.svg?cacheSeconds=172800) - RamaLama 是一個開源工具，透過 OCI 容器簡化 AI 模型的本地推理與服務，無需配置主機系統。
* [RunAnywhere](https://github.com/RunanywhereAI/runanywhere-sdks) ![](https://img.shields.io/github/stars/RunanywhereAI/runanywhere-sdks.svg?cacheSeconds=172800) - RunAnywhere 是一個面向生產環境的 SDK，可在 iOS、Android、React Native 和 Flutter 裝置端執行 AI 模型（LLM、語音轉文字、文字轉語音），從而打造私密、離線且快速的移動 AI 應用。
* [Seldon Core](https://github.com/SeldonIO/seldon-core) ![](https://img.shields.io/github/stars/SeldonIO/seldon-core.svg?cacheSeconds=172800) - 在 Kubernetes 上部署和執行機器學習模型的開源平臺 - [(影片)](https://www.youtube.com/watch?v=pDlapGtecbY)。
* [SGLang](https://github.com/sgl-project/sglang) ![](https://img.shields.io/github/stars/sgl-project/sglang.svg?cacheSeconds=172800) - SGLang 是一個面向大型語言模型和視覺語言模型的快速服務框架。
* [SIE](https://github.com/superlinked/sie) ![](https://img.shields.io/github/stars/superlinked/sie.svg?style=social) - 開源推理伺服器與生產叢集，適用於嵌入、重排序和資訊抽取。預配置 85 多個模型，涵蓋稠密、稀疏、多向量、視覺、重排序和抽取模型。附帶 Helm、KEDA 自動擴縮、Grafana 儀表板和 Terraform。
* [SkyPilot](https://github.com/skypilot-org/skypilot) ![](https://img.shields.io/github/stars/skypilot-org/skypilot.svg?cacheSeconds=172800) - SkyPilot 是一個可在任意雲上執行 LLM、AI 和批處理作業的框架，提供最大限度的成本節省、充足的 GPU 可用性和託管執行。
* [Tensorflow Serving](https://github.com/tensorflow/serving) ![](https://img.shields.io/github/stars/tensorflow/serving.svg?cacheSeconds=172800) - 高效能框架，透過 gRPC 協議提供 TensorFlow 模型服務，每個核心每秒可處理 10 萬個請求。
* [torchtune](https://github.com/meta-pytorch/torchtune) ![](https://img.shields.io/github/stars/meta-pytorch/torchtune.svg?cacheSeconds=172800) - torchtune 是一個 PyTorch 庫，可輕鬆編寫、後訓練和試驗 LLM。
* [Transformer Lab](https://github.com/transformerlab/transformerlab-app) ![](https://img.shields.io/github/stars/transformerlab/transformerlab-app.svg?cacheSeconds=172800) - Transformer Lab 是一個開源 LLM 工作空間，可在本地跨推理引擎和平臺微調、評估、匯出及測試模型。
* [Triton Inference Server](https://github.com/triton-inference-server/server) ![](https://img.shields.io/github/stars/triton-inference-server/server.svg?cacheSeconds=172800) - Triton 是一個高效能開源服務軟體，可部署來自任意框架的 AI 模型並執行於 GPU 和 CPU，同時最大限度地提高利用率。
* [Vercel AI](https://github.com/vercel/ai) ![](https://img.shields.io/github/stars/vercel/ai.svg?cacheSeconds=172800) - Vercel AI 是一個 TypeScript 工具包，旨在幫助你使用 Next.js、React、Svelte、Vue 等主流框架以及 Node.js 等執行時構建 AI 應用。
* [Vespa](https://github.com/vespa-engine/vespa) ![](https://img.shields.io/github/stars/vespa-engine/vespa.svg?cacheSeconds=172800) - 在服務期間以任意規模搜尋、推理並組織向量、張量、文字和結構化資料。
* [vLLM](https://github.com/vllm-project/vllm) ![](https://img.shields.io/github/stars/vllm-project/vllm.svg?cacheSeconds=172800) - vLLM 是一個高吞吐、記憶體高效的 LLM 推理與服務引擎。


## 評估與監控
* [AlpacaEval](https://github.com/tatsu-lab/alpaca_eval) ![](https://img.shields.io/github/stars/tatsu-lab/alpaca_eval.svg?cacheSeconds=172800) - AlpacaEval 是一個用於評估遵循指令語言模型的自動評估器。
* [ANN-Benchmarks](https://github.com/erikbern/ann-benchmarks) ![](https://img.shields.io/github/stars/erikbern/ann-benchmarks.svg?cacheSeconds=172800) - ANN-Benchmarks 是一個近似最近鄰搜尋演算法的基準測試環境。
* [ARES](https://github.com/stanford-futuredata/ARES) ![](https://img.shields.io/github/stars/stanford-futuredata/ARES.svg?cacheSeconds=172800) - ARES 是一個自動評估檢索增強生成（RAG）模型的框架。
* [BEIR](https://github.com/beir-cellar/beir) ![](https://img.shields.io/github/stars/beir-cellar/beir.svg?cacheSeconds=172800) - BEIR 是一個包含多種資訊檢索任務的異構基準。它還提供統一、易用的框架，可在該基準內評估基於 NLP 的檢索模型。
* [Code Generation LM Evaluation Harness](https://github.com/bigcode-project/bigcode-evaluation-harness) ![](https://img.shields.io/github/stars/bigcode-project/bigcode-evaluation-harness.svg?cacheSeconds=172800) - Code Generation LM Evaluation Harness 是一個用於評估程式碼生成模型的框架。
* [COMET](https://github.com/Unbabel/COMET) ![](https://img.shields.io/github/stars/Unbabel/COMET.svg?cacheSeconds=172800) - COMET 是一個開源機器學習評估框架。
* [C-Eval](https://github.com/hkust-nlp/ceval) ![](https://img.shields.io/github/stars/hkust-nlp/ceval.svg?cacheSeconds=172800) - C-Eval 是一個面向基礎模型的綜合中文評測套件。
* [Deepchecks](https://github.com/deepchecks/deepchecks) ![](https://img.shields.io/github/stars/deepchecks/deepchecks.svg?cacheSeconds=172800) - Deepchecks 是一個滿足各種 AI 與 ML 驗證需求的全面開源解決方案，可全面測試從研究到生產階段的資料和模型。
* [DeepEval](https://github.com/confident-ai/deepeval) ![](https://img.shields.io/github/stars/confident-ai/deepeval.svg?cacheSeconds=172800) - DeepEval 是一個簡單易用的 LLM 應用開源評估框架。
* [EvalAI](https://github.com/Cloud-CV/EvalAI) ![](https://img.shields.io/github/stars/Cloud-CV/EvalAI.svg?cacheSeconds=172800) - EvalAI 是一個開源平臺，可大規模評估和比較 AI 演算法。
* [Evalchemy](https://github.com/mlfoundations/evalchemy) ![](https://img.shields.io/github/stars/mlfoundations/evalchemy.svg?cacheSeconds=172800) - Evalchemy 是一個統一、易用的後訓練語言模型評估工具包。
* [EvalPlus](https://github.com/evalplus/evalplus) ![](https://img.shields.io/github/stars/evalplus/evalplus.svg?cacheSeconds=172800) - EvalPlus 是一個穩健的 LLM4Code 評估框架，包含擴充套件版 HumanEval+ 和 MBPP+ 基準、效率評估（EvalPerf）以及安全且可擴充套件的評估工具包。
* [Evals](https://github.com/openai/evals) ![](https://img.shields.io/github/stars/openai/evals.svg?cacheSeconds=172800) - Evals 是一個用於評估 OpenAI 模型的框架，也是一個開源基準註冊庫。
* [EvalScope](https://github.com/modelscope/evalscope) ![](https://img.shields.io/github/stars/modelscope/evalscope.svg?cacheSeconds=172800) - EvalScope 是一個精簡且可定製的框架，用於高效的大模型評估和效能基準測試。
* [Evaluate](https://github.com/huggingface/evaluate) ![](https://img.shields.io/github/stars/huggingface/evaluate.svg?cacheSeconds=172800) - Evaluate 是一個庫，可讓模型評估、比較和效能報告更加輕鬆、規範。
* [Evidently](https://github.com/evidentlyai/evidently) ![](https://img.shields.io/github/stars/evidentlyai/evidently.svg?cacheSeconds=172800) - Evidently 是一個開源框架，用於評估、測試和監控 ML 與 LLM 驅動的系統。
* [Future AGI](https://github.com/future-agi/future-agi) ![](https://img.shields.io/github/stars/future-agi/future-agi.svg?cacheSeconds=172800) - 開源、可自行託管的端到端智慧體工程與最佳化平臺，整合了追蹤、評估、模擬、資料集、閘道器和防護機制，適用於 LLM 和 AI 智慧體應用。
* [GAOKAO-Bench](https://github.com/OpenLMLab/GAOKAO-Bench) ![](https://img.shields.io/github/stars/OpenLMLab/GAOKAO-Bench.svg?cacheSeconds=172800) - GAOKAO-Bench 是一個評估框架，使用中國普通高等學校招生全國統一考試（高考）題目作為資料集，評估大模型的語言理解與邏輯推理能力。
* [Giskard](https://github.com/Giskard-AI/giskard-oss)![](https://img.shields.io/github/stars/Giskard-AI/giskard-oss.svg?cacheSeconds=172800) - Giskard 是一個開源 Python 庫，可自動檢測 AI 應用中的效能、偏見和安全問題。
* [guidellm](https://github.com/vllm-project/guidellm) ![](https://img.shields.io/github/stars/vllm-project/guidellm.svg?cacheSeconds=172800) - guidellm 是一個面向大型語言模型推理系統的基準測試與效能評估工具。
* [Harbor](https://github.com/harbor-framework/harbor) ![](https://img.shields.io/github/stars/harbor-framework/harbor.svg?cacheSeconds=172800) - Harbor 是一個用於評估和最佳化智慧體與語言模型的框架，支援在容器環境中並行開展實驗，並內建基準與環境管理功能。
* [HumanEval](https://github.com/openai/human-eval)![](https://img.shields.io/github/stars/openai/human-eval.svg?cacheSeconds=172800) - HumanEval 是一個基準測試，使用帶有單元測試的 Python 程式設計題評估程式碼生成模型的功能正確性。
* [Helicone](https://github.com/Helicone/helicone) ![](https://img.shields.io/github/stars/Helicone/helicone.svg?cacheSeconds=172800) - Helicone 是一個一體化開源 LLM 開發者平臺。
* [HELM](https://github.com/stanford-crfm/helm) ![](https://img.shields.io/github/stars/stanford-crfm/helm.svg?cacheSeconds=172800) - HELM（語言模型整體評估）提供全面評估語言模型的工具，包括標準化資料集、面向多種模型的統一 API、多樣化指標、r、公平性擾動、提示詞構建框架，以及統一模型訪問的代理伺服器。
* [Inspect](https://github.com/UKGovernmentBEIS/inspect_ai) ![](https://img.shields.io/github/stars/UKGovernmentBEIS/inspect_ai.svg?cacheSeconds=172800) - Inspect 是一個用於大型語言模型評估的框架。
* [IsaacLab-Arena](https://github.com/isaac-sim/IsaacLab-Arena) ![](https://img.shields.io/github/stars/isaac-sim/IsaacLab-Arena.svg?cacheSeconds=172800) - IsaacLab-Arena 是 NVIDIA Isaac Lab 的開源擴充套件，用於可組合環境構建和大規模機器人策略評估。
* [JiWER](https://github.com/jitsi/jiwer) ![](https://img.shields.io/github/stars/jitsi/jiwer.svg?cacheSeconds=172800) - JiWER 是一個簡單快速的 Python 包，用於評估自動語音識別系統。
* [Laminar](https://github.com/lmnr-ai/lmnr) ![](https://img.shields.io/github/stars/lmnr-ai/lmnr.svg?cacheSeconds=172800) - Laminar 是一個開源平臺，用於追蹤、評估、標註和分析 AI 產品的 LLM 資料。
* [Langfuse](https://github.com/langfuse/langfuse) ![](https://img.shields.io/github/stars/langfuse/langfuse.svg?cacheSeconds=172800) - Langfuse 是一個面向基於 LLM 應用的可觀測性與分析解決方案。
* [LangTest](https://github.com/PacificAI/langtest) ![](https://img.shields.io/github/stars/PacificAI/langtest.svg?cacheSeconds=172800) - LangTest 是一個全面的 NLP 模型評估工具包。
* [Language Model Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) ![](https://img.shields.io/github/stars/EleutherAI/lm-evaluation-harness.svg?cacheSeconds=172800) - Language Model Evaluation Harness 是一個框架，可在大量不同評估任務上測試生成式語言模型。
* [LangWatch](https://github.com/langwatch/langwatch) ![](https://img.shields.io/github/stars/langwatch/langwatch.svg?cacheSeconds=172800) - LangWatch 是一個面向 DSPy 的視覺化介面，也是一個完整的 LLM Ops 平臺，用於監控、試驗、衡量和改進 LLM 流水線，並採用公平程式碼分發模式。
* [Latitude](https://github.com/latitude-dev/latitude-llm) ![](https://img.shields.io/github/stars/latitude-dev/latitude-llm.svg?cacheSeconds=172800) - Latitude 是一個開源 AI 智慧體可觀測性平臺，提供語義追蹤搜尋和問題跟蹤。
* [LightEval](https://github.com/huggingface/lighteval) ![](https://img.shields.io/github/stars/huggingface/lighteval.svg?cacheSeconds=172800) - LightEval 是一個輕量級 LLM 評估套件。
* [lmms-eval](https://github.com/EvolvingLMMs-Lab/lmms-eval) ![](https://img.shields.io/github/stars/EvolvingLMMs-Lab/lmms-eval.svg?cacheSeconds=172800) - lmms-eval 是一個精心打造的評估框架，用於一致、高效地評估大型多模態模型（LMM）。
* [Melting Pot](https://github.com/google-deepmind/meltingpot) ![](https://img.shields.io/github/stars/google-deepmind/meltingpot.svg?cacheSeconds=172800) - Melting Pot 是一套用於多智慧體強化學習的測試場景。
* [Meta-World](https://github.com/Farama-Foundation/Metaworld) ![](https://img.shields.io/github/stars/Farama-Foundation/Metaworld.svg?cacheSeconds=172800) - Meta-World 是一個開源模擬基準，用於元強化學習和多工學習，包含 50 種不同的機器人操作任務。
* [mir_eval](https://github.com/mir-evaluation/mir_eval) ![](https://img.shields.io/github/stars/mir-evaluation/mir_eval.svg?cacheSeconds=172800) - mir_eval 是一個 Python 庫，為評估音樂資訊檢索系統提供透明、標準化且簡單直接的方法。
* [MLPerf Inference](https://github.com/mlcommons/inference) ![](https://img.shields.io/github/stars/mlcommons/inference.svg?cacheSeconds=172800) - MLPerf Inference 是一個基準測試套件，用於衡量系統在多種部署場景下執行模型的速度。
* [Massive Text Embedding Benchmark](https://github.com/mlcommons/inference) ![](https://img.shields.io/github/stars/mlcommons/inference.svg?cacheSeconds=172800) - Massive Text Embedding Benchmark（MTEB）是一個綜合評估框架，可評估文字嵌入模型在多種任務和語言上的表現，涵蓋 8 類嵌入任務、58 個資料集和 112 種語言。
* [NannyML](https://github.com/NannyML/nannyml) ![](https://img.shields.io/github/stars/NannyML/nannyml.svg?cacheSeconds=172800) - NannyML 是一個庫，可在無法訪問目標值的情況下估算部署後模型效能、檢測資料漂移，並將資料漂移告警與模型效能變化智慧關聯。
* [OGB](https://github.com/snap-stanford/ogb) ![](https://img.shields.io/github/stars/snap-stanford/ogb.svg?cacheSeconds=172800) - Open Graph Benchmark（OGB）是一組圖機器學習基準資料集、資料載入器和評估器。
* [Ollama Grid Search](https://github.com/dezoito/ollama-grid-search) ![](https://img.shields.io/github/stars/dezoito/ollama-grid-search.svg?cacheSeconds=172800) - Ollama Grid Search 可自動為特定用例選擇最佳模型、提示詞或推理引數，讓你能夠遍歷各種組合並直觀檢查結果。
* [onWatch](https://github.com/onllm-dev/onwatch) ![](https://img.shields.io/github/stars/onllm-dev/onwatch.svg?cacheSeconds=172800) - onWatch 是一個輕量級 Go 命令列工具，可實時追蹤多個提供商（Anthropic Pro/Max Plans、Codex、Gemini CLI、Synthetic、Z.ai、GitHub Copilot、MiniMax Coding/Token Plan、Antigravity、OpenRouter）的 AI API 配額用量，並提供消耗速率預測、歷史用量圖表和按週期跟蹤。
* [OpenCompass](https://github.com/open-compass/OpenCompass) ![](https://img.shields.io/github/stars/open-compass/OpenCompass.svg?cacheSeconds=172800) - OpenCompass 是一個 LLM 評估平臺，支援在 50 多個資料集上評測廣泛的模型（LLaMA、LLaMa2、ChatGLM2、ChatGPT、Claude 等）。
* [OpenLIT](https://github.com/openlit/openlit) ![](https://img.shields.io/github/stars/openlit/openlit.svg?cacheSeconds=172800) - OpenLIT 是一個開源 AI 工程平臺，透過可觀測性、監控、防護機制、評估和無縫整合簡化 LLM 工作流。
* [OpenLLMetry](https://github.com/traceloop/openllmetry) ![](https://img.shields.io/github/stars/traceloop/openllmetry.svg?cacheSeconds=172800) - OpenLLMetry 透過效能監控、執行追蹤和除錯功能，為開發者深入洞察大型語言模型應用。
* [Opik](https://github.com/comet-ml/opik) ![](https://img.shields.io/github/stars/comet-ml/opik.svg?cacheSeconds=172800) - Opik 是一個開源平臺，用於評估、測試和監控 LLM 應用。
* [Overcooked-AI](https://github.com/HumanCompatibleAI/overcooked_ai) ![](https://img.shields.io/github/stars/HumanCompatibleAI/overcooked_ai.svg?cacheSeconds=172800) - Overcooked-AI 是一個完全合作式人類與 AI 任務表現的基準環境，基於廣受歡迎的電子遊戲 Overcooked。
* [Phoenix](https://github.com/Arize-ai/phoenix) ![](https://img.shields.io/github/stars/Arize-ai/phoenix.svg?cacheSeconds=172800) - Phoenix 是一個開源 AI 可觀測性平臺，專為實驗、評估和故障排查而設計。
* [Promptfoo](https://github.com/promptfoo/promptfoo) ![](https://img.shields.io/github/stars/promptfoo/promptfoo.svg?cacheSeconds=172800) - LLM 紅隊測試和評估框架，用於測試越獄、提示詞注入及其他漏洞，並整合 CI/CD。
* [Prometheus-Eval](https://github.com/prometheus-eval/prometheus-eval) ![](https://img.shields.io/github/stars/prometheus-eval/prometheus-eval.svg?cacheSeconds=172800) - RagaAI Catalyst 是一個綜合平臺，旨在增強 LLM 專案的管理與最佳化。
* [RagaAI Catalyst](https://github.com/raga-ai-hub/RagaAI-Catalyst) ![](https://img.shields.io/github/stars/raga-ai-hub/RagaAI-Catalyst.svg?cacheSeconds=172800) - Prometheus-Eval 是一組工具，用於訓練、評估和使用專門用於評估其他語言模型的語言模型。
* [Ragas](https://github.com/vibrantlabsai/ragas) ![](https://img.shields.io/github/stars/vibrantlabsai/ragas.svg?cacheSeconds=172800) - Ragas 是一個用於評估 RAG 流水線的框架。
* [RewardBench](https://github.com/allenai/reward-bench) ![](https://img.shields.io/github/stars/allenai/reward-bench.svg?cacheSeconds=172800) - RewardBench 是一個基準測試，旨在評估獎勵模型的能力與安全性。
* [RLBench](https://github.com/stepjam/RLBench) ![](https://img.shields.io/github/stars/stepjam/RLBench.svg?cacheSeconds=172800) - RLBench 是一個雄心勃勃的大規模基準和學習環境，旨在推動多個視覺引導操作研究領域的發展，包括強化學習、模仿學習、多工學習、幾何計算機視覺，尤其是小樣本學習。
* [SimplerEnv](https://github.com/simpler-env/SimplerEnv) ![](https://img.shields.io/github/stars/simpler-env/SimplerEnv.svg?cacheSeconds=172800) - SimplerEnv 是一個模擬操作策略評估環境，用於真實機器人設定。
* [SwanLab](https://github.com/SwanHubX/SwanLab) ![](https://img.shields.io/github/stars/SwanHubX/SwanLab.svg?cacheSeconds=172800) - SwanLab 是一個 AI 訓練跟蹤與視覺化工具。
* [Speech-to-Text Benchmark](https://github.com/Picovoice/speech-to-text-benchmark) ![](https://img.shields.io/github/stars/Picovoice/speech-to-text-benchmark.svg?cacheSeconds=172800) - Speech-to-Text Benchmark 是一個簡約且可擴充套件的框架，用於對不同語音轉文字引擎進行基準測試。
* [TensorFlow Model Analysis](https://github.com/tensorflow/model-analysis) ![](https://img.shields.io/github/stars/tensorflow/model-analysis.svg?cacheSeconds=172800) - TensorFlow Model Analysis（TFMA）是一個庫，可使用訓練器中定義的相同指標，以分散式方式在大量資料上評估 TensorFlow 模型。
* [TorchBench](https://github.com/pytorch/benchmark) ![](https://img.shields.io/github/stars/pytorch/benchmark.svg?cacheSeconds=172800) - TorchBench 是一組用於評估 PyTorch 效能的開源基準測試。
* [TruLens](https://github.com/truera/trulens) ![](https://img.shields.io/github/stars/truera/trulens.svg?cacheSeconds=172800) - TruLens 提供一組工具，用於評估和跟蹤 LLM 實驗。
* [TrustLLM](https://github.com/HowieHwong/TrustLLM) ![](https://img.shields.io/github/stars/HowieHwong/TrustLLM.svg?cacheSeconds=172800) - TrustLLM 是一個全面的框架，用於評估大型語言模型的可信度，包含原則、調查和基準測試。
* [VBench](https://github.com/Vchitect/VBench) ![](https://img.shields.io/github/stars/Vchitect/VBench.svg?cacheSeconds=172800) - VBench 是一套用於影片生成模型的綜合基準測試。
* [VLMEvalKit](https://github.com/open-compass/VLMEvalKit) ![](https://img.shields.io/github/stars/open-compass/VLMEvalKit.svg?cacheSeconds=172800) - VLMEvalKit 是一個開源工具包，用於評估大型視覺語言模型（LVLM）。

## 可解釋性與公平性
* [Aequitas](https://github.com/dssg/aequitas) ![](https://img.shields.io/github/stars/dssg/aequitas.svg?cacheSeconds=172800) - 一個開源偏見審計工具包，供資料科學家、機器學習研究人員和政策制定者審計機器學習模型中的歧視與偏見，並據此對預測風險評估工具的開發和部署做出知情且公平的決策。
* [AI Explainability 360](https://github.com/Trusted-AI/AIX360) ![](https://img.shields.io/github/stars/Trusted-AI/AIX360.svg?cacheSeconds=172800) - 用於解釋資料和機器學習模型的可解釋性工具，包括一套全面的演算法，覆蓋多種解釋維度及代理可解釋性指標。
* [AI Fairness 360](https://github.com/Trusted-AI/AIF360) ![](https://img.shields.io/github/stars/Trusted-AI/AIF360.svg?cacheSeconds=172800) - 為資料集和機器學習模型提供全面的公平性指標及指標說明，並提供減輕資料集和模型偏見的演算法。
* [Alibi](https://github.com/SeldonIO/alibi) ![](https://img.shields.io/github/stars/SeldonIO/alibi.svg?cacheSeconds=172800) - Alibi 是一個開源 Python 庫，旨在檢查和解釋機器學習模型。該庫最初專注於黑盒、基於例項的模型解釋。
* [captum](https://github.com/meta-pytorch/captum) ![](https://img.shields.io/github/stars/meta-pytorch/captum.svg?cacheSeconds=172800) - 由 Facebook 開發的 PyTorch 模型可解釋性與理解庫。它為 PyTorch 模型提供積分梯度、顯著性圖、SmoothGrad、VarGrad 等通用實現。
* [Fairlearn](https://github.com/fairlearn/fairlearn) ![](https://img.shields.io/github/stars/fairlearn/fairlearn.svg?cacheSeconds=172800) - Fairlearn 是一個 Python 工具包，用於評估並緩解機器學習模型中的不公平現象。
* [InterpretML](https://github.com/interpretml/interpret) ![](https://img.shields.io/github/stars/interpretml/interpret.svg?cacheSeconds=172800) - InterpretML 是一個開源包，用於訓練可解釋模型並解釋黑盒系統。
* [Lightly](https://github.com/lightly-ai/lightly) ![](https://img.shields.io/github/stars/lightly-ai/lightly.svg?cacheSeconds=172800) - 一個用於影象自監督學習的 Python 框架。學習到的表示可用於分析無標籤資料的分佈並重新平衡資料集。
* [LOFO Importance](https://github.com/aerdem4/lofo-importance) ![](https://img.shields.io/github/stars/aerdem4/lofo-importance.svg?cacheSeconds=172800) - LOFO（逐個特徵剔除）重要性根據選定指標，計算所選模型的一組特徵的重要性：它會逐一移除特徵，並根據所選指標和驗證方案評估模型效能。
* [mljar-supervised](https://github.com/mljar/mljar-supervised) ![](https://img.shields.io/github/stars/mljar/mljar-supervised.svg?cacheSeconds=172800) - 一個用於表格資料 AutoML 的 Python 包，支援特徵工程、超引數調優、解釋和自動文件生成。
* [Quantus](https://github.com/understandable-machine-intelligence-lab/Quantus) ![](https://img.shields.io/github/stars/understandable-machine-intelligence-lab/Quantus.svg?cacheSeconds=172800) - Quantus 是一個用於負責任地評估神經網路解釋的可解釋 AI 工具包。
* [SHAP](https://github.com/shap/shap) ![](https://img.shields.io/github/stars/shap/shap.svg?cacheSeconds=172800) - SHapley Additive exPlanations 是一種統一方法，用於解釋任意機器學習模型的輸出。
* [SHAPash](https://github.com/MAIF/shapash) ![](https://img.shields.io/github/stars/MAIF/shapash.svg?cacheSeconds=172800) - Shapash 是一個 Python 庫，提供多種視覺化形式，並使用人人都能理解的明確標籤。
* [WhatIf](https://github.com/pair-code/what-if-tool) ![](https://img.shields.io/github/stars/pair-code/what-if-tool.svg?cacheSeconds=172800) - 一個易用介面，幫助使用者加深對黑盒分類或迴歸機器學習模型的理解。

## 特徵儲存
* [FEAST](https://github.com/feast-dev/feast)  ![](https://img.shields.io/github/stars/feast-dev/feast.svg?cacheSeconds=172800) - Feast（特徵儲存）是一個面向機器學習的開源特徵儲存。它能以最快捷的方式利用現有基礎設施，將分析資料投入生產，用於模型訓練和線上推理。
* [Featureform](https://github.com/featureform/featureform) ![](https://img.shields.io/github/stars/featureform/featureform.svg?cacheSeconds=172800) - 一個虛擬特徵儲存，可即插即用地接入現有基礎設施，深受資料科學家認可。只需 pip install，即可使用發現、治理、血緣跟蹤和協作功能。支援 pandas、Python、Spark、SQL，並整合主流雲服務商。
* [Hopsworks Feature Store](https://github.com/logicalclocks/feature-store-api) ![](https://img.shields.io/github/stars/logicalclocks/feature-store-api.svg?cacheSeconds=172800) - 面向 ML 的離線/線上特徵儲存 [(影片)](https://www.youtube.com/watch?v=N1BjPk1smdg)。

## 工業級異常檢測
* [Alibi Detect](https://github.com/SeldonIO/alibi-detect) ![](https://img.shields.io/github/stars/SeldonIO/alibi-detect.svg?cacheSeconds=172800) - alibi-detect 是一個 Python 包，專注於離群點、對抗樣本和概念漂移檢測。
* [Darts](https://github.com/unit8co/darts) ![](https://img.shields.io/github/stars/unit8co/darts.svg?cacheSeconds=172800) - Darts 是一個易用的時間序列預測與異常檢測庫。
* [Deequ](https://github.com/awslabs/deequ) ![](https://img.shields.io/github/stars/awslabs/deequ.svg?cacheSeconds=172800) - 一個構建於 Apache Spark 之上的庫，用於定義“資料單元測試”，以衡量大型資料集的資料質量。
* [PyOD](https://github.com/yzhao062/pyod) ![](https://img.shields.io/github/stars/yzhao062/pyod.svg?cacheSeconds=172800) - 一個用於可擴充套件離群點檢測（異常檢測）的 Python 工具箱。
* [TFDV](https://github.com/tensorflow/data-validation) ![](https://img.shields.io/github/stars/tensorflow/data-validation.svg?cacheSeconds=172800) - TFDV（TensorFlow Data Validation）是一個用於探索和驗證機器學習資料的庫。

## 工業級計算機視覺
* [CameraTraps](https://github.com/microsoft/Biodiversity) ![](https://img.shields.io/github/stars/microsoft/Biodiversity.svg?cacheSeconds=172800) - CameraTraps（PyTorch Wildlife）是一個協作式深度學習框架，用於野生動物影象分析，提供基於大規模相機陷阱資料集訓練的檢測和分類模型。
* [Deep Lake](https://github.com/activeloopai/deeplake) ![](https://img.shields.io/github/stars/activeloopai/deeplake.svg?cacheSeconds=172800) - Deep Lake 是一種針對計算機視覺最佳化的資料基礎設施。
* [DeepForest](https://github.com/weecology/DeepForest) ![](https://img.shields.io/github/stars/weecology/DeepForest.svg?cacheSeconds=172800) - DeepForest 是一個 Python 包，使用深度學習從航拍 RGB 影象中訓練和預測單棵樹的樹冠及樹種。
* [Detectron2](https://github.com/facebookresearch/detectron2) ![](https://img.shields.io/github/stars/facebookresearch/detectron2.svg?cacheSeconds=172800) - Detectron2 是 Facebook AI Research 的新一代庫，提供先進的檢測和分割演算法。
* [Kornia](https://github.com/kornia/kornia) ![](https://img.shields.io/github/stars/kornia/kornia.svg?cacheSeconds=172800) - Kornia 是一個構建於 PyTorch 之上的可微計算機視覺庫，提供豐富的可微影象處理和幾何視覺演算法。
* [libcom](https://github.com/bcmi/libcom) ![](https://img.shields.io/github/stars/bcmi/libcom.svg?cacheSeconds=172800) - libcom 是一個影象合成工具箱。
* [LightlyTrain](https://github.com/lightly-ai/lightly-train) ![](https://img.shields.io/github/stars/lightly-ai/lightly-train.svg?cacheSeconds=172800) - 使用無標籤資料為工業應用預訓練計算機視覺模型。
* [MMCV](https://github.com/open-mmlab/mmcv) ![](https://img.shields.io/github/stars/open-mmlab/mmcv.svg?cacheSeconds=172800) - MMCV 是 OpenMMLab 的基礎計算機視覺庫，提供影象和影片處理、資料轉換與增強、CNN 架構以及最佳化 CUDA 操作等核心功能。
* [SuperGradients](https://github.com/Deci-AI/super-gradients) ![](https://img.shields.io/github/stars/Deci-AI/super-gradients.svg?cacheSeconds=172800) - SuperGradients 是一個開源庫，用於訓練基於 PyTorch 的計算機視覺模型。
* [supervision](https://github.com/roboflow/supervision) ![](https://img.shields.io/github/stars/roboflow/supervision.svg?cacheSeconds=172800) - Supervision 是一個 Python 庫，旨在高效管理計算機視覺流水線，提供模型標註、視覺化和監控工具。
* [VideoSys](https://github.com/NUS-HPC-AI-Lab/VideoSys) ![](https://img.shields.io/github/stars/NUS-HPC-AI-Lab/VideoSys.svg?cacheSeconds=172800) - VideoSys 透過多種加速技術支援許多擴散模型，使其執行更快且記憶體佔用更低。

## 工業級資訊檢索
* [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) ![](https://img.shields.io/github/stars/Marker-Inc-Korea/AutoRAG.svg?cacheSeconds=172800) - AutoRAG 是一個 RAG AutoML 工具，可自動為你的資料尋找最優 RAG 流水線。
* [BGE](https://github.com/FlagOpen/FlagEmbedding) ![](https://img.shields.io/github/stars/FlagOpen/FlagEmbedding.svg?cacheSeconds=172800) - BGE 構建了一個用於搜尋和 RAG 的一站式檢索工具包。
* [EmbedAnything](https://github.com/StarlightSearch/EmbedAnything) ![](https://img.shields.io/github/stars/StarlightSearch/EmbedAnything.svg?cacheSeconds=172800) - EmbedAnything 是一個使用 Rust 構建的極簡、輕量、高效能嵌入流水線，可為文字、影象、音訊、PDF 和其他媒體生成嵌入，並支援稠密、稀疏、ONNX 和後期互動嵌入。
* [Faiss](https://github.com/facebookresearch/faiss) ![](https://img.shields.io/github/stars/facebookresearch/faiss.svg?cacheSeconds=172800) - Faiss 是一個用於稠密向量高效相似性搜尋和聚類的庫。
* [GraphRAG](https://github.com/microsoft/graphrag) ![](https://img.shields.io/github/stars/microsoft/graphrag.svg?cacheSeconds=172800) - GraphRAG 是一套資料流水線與轉換工具，旨在藉助 LLM 從非結構化文字中提取有意義的結構化資料。
* [HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG) ![](https://img.shields.io/github/stars/OSU-NLP-Group/HippoRAG.svg?cacheSeconds=172800) - HippoRAG 是一個新穎的檢索增強生成（RAG）框架，靈感來自人類長期記憶的神經生物學原理，可讓 LLM 持續整合外部文件中的知識。
* [JamAI Base](https://github.com/EmbeddedLLM/JamAIBase) ![](https://img.shields.io/github/stars/EmbeddedLLM/JamAIBase.svg?cacheSeconds=172800) - JamAI Base 是一個開源 RAG（檢索增強生成）後端平臺，整合嵌入式資料庫（SQLite）和嵌入式向量資料庫（LanceDB），並提供託管記憶與 RAG 能力。它內建 LLM、向量嵌入和重排序編排與管理功能，均可透過便捷直觀的類電子表格 UI 和簡單 REST API 使用。
* [LangExtract](https://github.com/google/langextract) ![](https://img.shields.io/github/stars/google/langextract.svg?cacheSeconds=172800) - LangExtract 是一個 Python 庫，根據使用者定義的指令使用 LLM 從非結構化文字檔案中提取結構化資訊。它可處理臨床記錄或報告等材料，識別並整理關鍵細節，同時確保提取資料與源文字相對應。
* [LightRAG](https://github.com/HKUDS/LightRAG) ![](https://img.shields.io/github/stars/HKUDS/LightRAG.svg?cacheSeconds=172800) - 一個簡單快速的檢索增強生成框架。
* [llmware](https://github.com/llmware-ai/llmware) ![](https://img.shields.io/github/stars/llmware-ai/llmware.svg?cacheSeconds=172800) - llmware 提供統一框架，用於構建基於 LLM 的應用（如 RAG、智慧體），採用小型專用模型，可安全、私密地部署並整合企業知識源，還能以經濟高效的方式針對任意業務流程進行調優和適配。
* [Mem0](https://github.com/mem0ai/mem0) ![](https://img.shields.io/github/stars/mem0ai/mem0.svg?cacheSeconds=172800) - Mem0 透過智慧記憶層增強 AI 助手和智慧體，實現個性化 AI 互動。
* [NGT](https://github.com/NGT-labs/NGT) ![](https://img.shields.io/github/stars/NGT-labs/NGT.svg?cacheSeconds=172800) - NGT 提供命令和庫，可在高維向量資料空間的大量資料中執行高速近似最近鄰搜尋。
* [NMSLIB](https://github.com/nmslib/nmslib) ![](https://img.shields.io/github/stars/nmslib/nmslib.svg?cacheSeconds=172800) - 非度量空間庫（NMSLIB）：一個高效的相似性搜尋庫，也是用於評估通用非度量空間中 k-NN 方法的工具包。
* [Qdrant](https://github.com/qdrant/qdrant) ![](https://img.shields.io/github/stars/qdrant/qdrant.svg?cacheSeconds=172800) - 一個開源向量相似性搜尋引擎，支援擴充套件過濾功能。
* [R2R](https://github.com/SciPhi-AI/R2R) ![](https://img.shields.io/github/stars/SciPhi-AI/R2R.svg?cacheSeconds=172800) - R2R（RAG to Riches）是一個綜合平臺，用於構建、部署和擴充套件 RAG 應用，支援混合搜尋、多模態和高階可觀測性。
* [RAGFlow](https://github.com/infiniflow/ragflow) ![](https://img.shields.io/github/stars/infiniflow/ragflow.svg?cacheSeconds=172800) - RAGFlow 是一個基於深度文件理解的 RAG 引擎。
* [RAGxplorer](https://github.com/gabrielchua/RAGxplorer) ![](https://img.shields.io/github/stars/gabrielchua/RAGxplorer.svg?cacheSeconds=172800) - RAGxplorer 是一個用於構建 RAG 視覺化的工具。
* [RAG-FiT](https://github.com/IntelLabs/RAG-FiT) ![](https://img.shields.io/github/stars/IntelLabs/RAG-FiT.svg?cacheSeconds=172800) - RAG-FiT 是一個庫，旨在透過使用專門建立的 RAG 增強資料集微調模型，提升 LLM 使用外部資訊的能力。
* [TextWorld](https://github.com/microsoft/TextWorld) ![](https://img.shields.io/github/stars/microsoft/TextWorld.svg?cacheSeconds=172800) - TextWorld 是一個基於文字的遊戲生成器，也是一個可擴充套件的沙盒學習環境，用於訓練和測試強化學習（RL）智慧體。
* [Zvec](https://github.com/alibaba/zvec) ![](https://img.shields.io/github/stars/alibaba/zvec.svg?cacheSeconds=172800) - Zvec 是一個開源程序內向量資料庫，用於低延遲相似性搜尋。

## 工業級自然語言處理
* [aisuite](https://github.com/andrewyng/aisuite) ![](https://img.shields.io/github/stars/andrewyng/aisuite.svg?cacheSeconds=172800) - aisuite 是一個簡單、統一的介面，可對接多個生成式 AI 提供商。
* [Align-Anything](https://github.com/PKU-Alignment/align-anything) ![](https://img.shields.io/github/stars/PKU-Alignment/align-anything.svg?cacheSeconds=172800) - Align-Anything 致力於使任意模態的大模型（任意到任意模型），包括 LLM、VLM 等，與人類意圖和價值觀保持一致。
* [BERTopic](https://github.com/MaartenGr/BERTopic) ![](https://img.shields.io/github/stars/MaartenGr/BERTopic.svg?cacheSeconds=172800) - BERTopic 是一種主題建模技術，利用 Transformer 和 c-TF-IDF 建立稠密簇，從而生成易於解釋的主題，同時保留主題描述中的重要詞語。
* [Burr](https://github.com/apache/burr) ![](https://img.shields.io/github/stars/apache/burr.svg?cacheSeconds=172800) - Burr 幫助你開發能夠做出決策的應用（聊天機器人、智慧體、模擬）。它具備生產就緒功能（遙測、持久化、部署等），還提供開源、免費且本地優先的 Burr UI。
* [Context7](https://github.com/upstash/context7) ![](https://img.shields.io/github/stars/upstash/context7.svg?cacheSeconds=172800) - Context7 為提示詞和 AI 程式設計智慧體提供最新程式碼文件。
* [Dify](https://github.com/langgenius/dify) ![](https://img.shields.io/github/stars/langgenius/dify.svg?cacheSeconds=172800) - Dify 是一個開源 LLM 應用開發平臺，其直觀介面整合了智慧體 AI 工作流、RAG 流水線、智慧體能力、模型管理、可觀測性等功能，讓你能夠快速從原型邁向生產。
* [dspy](https://github.com/stanfordnlp/dspy) ![](https://img.shields.io/github/stars/stanfordnlp/dspy.svg?cacheSeconds=172800) - 一個使用基礎模型進行程式設計的框架。
* [Dust](https://github.com/dust-tt/dust) ![](https://img.shields.io/github/stars/dust-tt/dust.svg?cacheSeconds=172800) - Dust 協助設計和部署大型語言模型應用。
* [ESPnet](https://github.com/espnet/espnet) ![](https://img.shields.io/github/stars/espnet/espnet.svg?cacheSeconds=172800) - ESPnet 是一個端到端語音處理工具包。
* [FastChat](https://github.com/lm-sys/FastChat) ![](https://img.shields.io/github/stars/lm-sys/FastChat.svg?cacheSeconds=172800) - FastChat 是一個開放平臺，用於訓練、服務和評估基於大型語言模型的聊天機器人。
* [Flair](https://github.com/flairNLP/flair) ![](https://img.shields.io/github/stars/flairNLP/flair.svg?cacheSeconds=172800) - 由 Zalando 開發的簡潔先進 NLP 框架，直接構建於 PyTorch 之上。
* [FunASR](https://github.com/modelscope/FunASR) ![](https://img.shields.io/github/stars/modelscope/FunASR.svg?cacheSeconds=172800) - FunASR 是一個生產級 ASR 工具包，支援 50 多種語言，內建 VAD、標點恢復、說話人分離和情感識別，並支援透過 Docker/WebSocket/REST 部署及 ONNX 執行時。
* [Fun-ASR](https://github.com/QwenAudio/Fun-ASR) ![](https://img.shields.io/github/stars/QwenAudio/Fun-ASR.svg?cacheSeconds=172800) - 基於 LLM 的 ASR，支援包括中文方言在內的 31 種語言，並原生支援標點、時間戳和說話人分離。
* [Gensim](https://github.com/piskvorky/gensim) ![](https://img.shields.io/github/stars/piskvorky/gensim.svg?cacheSeconds=172800) - Gensim 是一個 Python 庫，用於大型語料的主題建模、文件索引和相似性檢索。
* [gpt-fast](https://github.com/meta-pytorch/gpt-fast) ![](https://img.shields.io/github/stars/meta-pytorch/gpt-fast.svg?cacheSeconds=172800) - 簡單高效、原生基於 PyTorch 的 Transformer 文字生成。
* [Haystack](https://github.com/deepset-ai/haystack) ![](https://img.shields.io/github/stars/deepset-ai/haystack.svg?cacheSeconds=172800) - Haystack 是一個開源 NLP 框架，可使用 Transformer 模型和 LLM（GPT-3 等）與你的資料互動。Haystack 提供生產就緒工具，可快速構建類似 ChatGPT 的問答、語義搜尋、文字生成等應用。
* [Interactive Composition Explorer](https://github.com/oughtinc/ice) ![](https://img.shields.io/github/stars/oughtinc/ice.svg?cacheSeconds=172800) - ICE 是一個 Python 庫和追蹤視覺化工具，面向語言模型程式。
* [Jan](https://github.com/janhq/jan) ![](https://img.shields.io/github/stars/janhq/jan.svg?cacheSeconds=172800) - Jan 是一個開源 ChatGPT 替代品，可在計算機上 100% 離線執行，讓你能夠在本地下載和執行 LLM，並完全掌控資料與隱私。
* [Lamini](https://github.com/lamini-ai/lamini) ![](https://img.shields.io/github/stars/lamini-ai/lamini.svg?cacheSeconds=172800) - Lamini 是一個可快速定製模型的 LLM 引擎。
* [LangChain](https://github.com/langchain-ai/langchain) ![](https://img.shields.io/github/stars/langchain-ai/langchain.svg?cacheSeconds=172800) - LangChain 透過可組合性幫助你構建 LLM 應用。
* [LlamaIndex](https://github.com/run-llama/llama_index) ![](https://img.shields.io/github/stars/run-llama/llama_index.svg?cacheSeconds=172800) - LlamaIndex（GPT Index）是一個面向 LLM 應用的資料框架。
* [LLaMA](https://github.com/meta-llama/llama) ![](https://img.shields.io/github/stars/meta-llama/llama.svg?cacheSeconds=172800) - LLaMA 旨在提供一個精簡、易於修改和閱讀的示例，用於載入 LLaMA（arXiv）模型並執行推理。
* [LLaMA-Factory](https://github.com/hiyouga/LlamaFactory) ![](https://img.shields.io/github/stars/hiyouga/LlamaFactory.svg?cacheSeconds=172800) - LLaMA-Factory 讓你能夠透過零程式碼 CLI 和 Web UI 輕鬆微調 100 多種大型語言模型。
* [LLMBox](https://github.com/RUCAIBox/LLMBox) ![](https://img.shields.io/github/stars/RUCAIBox/LLMBox.svg?cacheSeconds=172800) - LLMBox 是一個全面的 LLM 實現庫，包含統一的訓練流水線和完善的模型評估功能。
* [LLaMA2-Accessory](https://github.com/Alpha-VLLM/LLaMA2-Accessory) ![](https://img.shields.io/github/stars/Alpha-VLLM/LLaMA2-Accessory.svg?cacheSeconds=172800) - LLaMA2-Accessory 是一個開源工具包，用於預訓練、微調和部署大型語言模型（LLM）及多模態 LLM。
* [LMFlow](https://github.com/OptimalScale/LMFlow) ![](https://img.shields.io/github/stars/OptimalScale/LMFlow.svg?cacheSeconds=172800) - LMFlow 是一個可擴充套件、便捷且高效的工具箱，用於微調大型機器學習模型。
* [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) ![](https://img.shields.io/github/stars/NVIDIA/Megatron-LM.svg?cacheSeconds=172800) - Megatron-LM 是一個高度最佳化、高效的大型語言模型訓練庫。
* [MindNLP](https://github.com/candle-org/MindAct) ![](https://img.shields.io/github/stars/candle-org/MindAct.svg?cacheSeconds=172800) - MindNLP 是一個易用、高效能的 NLP 和 LLM 框架，基於 MindSpore 構建，併相容 Hugging Face 模型與資料集。
* [MLC LLM](https://github.com/mlc-ai/mlc-llm) ![](https://img.shields.io/github/stars/mlc-ai/mlc-llm.svg?cacheSeconds=172800) - MLC LLM 是一個通用解決方案，可將任意語言模型原生部署到多種硬體後端和原生應用中，同時也為所有人提供高效框架，進一步針對自身用例最佳化模型效能。
* [mlx-lm](https://github.com/ml-explore/mlx-lm) ![](https://img.shields.io/github/stars/ml-explore/mlx-lm.svg?cacheSeconds=172800) - MLX LM 是一個 Python 包，可在 Apple 晶片上使用 MLX 生成文字並微調大型語言模型，支援與 Hugging Face Hub 整合、量化和分散式推理。
* [Ollama](https://github.com/ollama/ollama) ![](https://img.shields.io/github/stars/ollama/ollama.svg?cacheSeconds=172800) - 輕鬆開始在本地執行大型語言模型。
* [olmOCR](https://github.com/allenai/olmocr) ![](https://img.shields.io/github/stars/allenai/olmocr.svg?cacheSeconds=172800) - olmOCR 是一個工具包，用於訓練語言模型處理現實世界中的 PDF 文件。
* [PaddleNLP](https://github.com/PaddlePaddle/PaddleNLP) ![](https://img.shields.io/github/stars/PaddlePaddle/PaddleNLP.svg?cacheSeconds=172800) - PaddleNLP 是一個基於 PaddlePaddle 深度學習框架的大型語言模型（LLM）開發套件，支援在各種硬體裝置上進行高效大模型訓練、無失真壓縮和高效能推理。
* [Promptise Foundry](https://github.com/promptise-com/foundry) ![](https://img.shields.io/github/stars/promptise-com/foundry.svg?cacheSeconds=172800) - Promptise Foundry 是一個面向智慧體 AI 和 MCP 伺服器的生產級 Python 框架，涵蓋自主執行時、記憶、工具整合、治理（預算、健康狀態、任務、金鑰）、防護機制、語義快取和可觀測性。
* [Semantic Kernel](https://github.com/microsoft/semantic-kernel) ![](https://img.shields.io/github/stars/microsoft/semantic-kernel.svg?cacheSeconds=172800) - Semantic Kernel 是一個 SDK，可將 OpenAI、Azure OpenAI 和 Hugging Face 等大型語言模型（LLM）與 C#、Python 和 Java 等傳統程式語言整合。藉助外掛定義，只需幾行程式碼即可串聯這些能力。
* [Sentence Transformers](https://github.com/huggingface/sentence-transformers) ![](https://img.shields.io/github/stars/huggingface/sentence-transformers.svg?cacheSeconds=172800) - Sentence Transformers 提供了一種簡單的方法，可計算句子、段落和影象的稠密向量表示。
* [SpaCy](https://github.com/explosion/spaCy) ![](https://img.shields.io/github/stars/explosion/spaCy.svg?cacheSeconds=172800) - spaCy 是一個使用 Python 和 Cython 實現的高階自然語言處理庫。
* [SWIFT](https://github.com/modelscope/ms-swift) ![](https://img.shields.io/github/stars/modelscope/ms-swift.svg?cacheSeconds=172800) - SWIFT 是一個可擴充套件、輕量級的基礎設施，用於深度學習模型微調。
* [Tensorflow Lingvo](https://github.com/tensorflow/lingvo) ![](https://img.shields.io/github/stars/tensorflow/lingvo.svg?cacheSeconds=172800) - 一個用於使用 TensorFlow 構建神經網路的框架，尤其適用於序列模型。
* [Tensorflow Text](https://github.com/tensorflow/text) ![](https://img.shields.io/github/stars/tensorflow/text.svg?cacheSeconds=172800) - TensorFlow Text 提供一組可與 TensorFlow 2.0 配合使用的文字相關類和操作。
* [ToolBench](https://github.com/OpenBMB/ToolBench) ![](https://img.shields.io/github/stars/OpenBMB/ToolBench.svg?cacheSeconds=172800) - ToolBench 是一個開放平臺，用於訓練、服務和評估面向工具學習的大型語言模型。
* [Transformers](https://github.com/huggingface/transformers) ![](https://img.shields.io/github/stars/huggingface/transformers.svg?cacheSeconds=172800) - Hugging Face 提供的先進自然語言處理（NLP）預訓練模型庫。

## 工業級推薦系統
* [EasyRec](https://github.com/alibaba/EasyRec) ![](https://img.shields.io/github/stars/alibaba/EasyRec.svg?cacheSeconds=172800) - EasyRec 是一個用於大規模推薦演算法的框架。
* [Gorse](https://github.com/gorse-io/gorse) ![](https://img.shields.io/github/stars/gorse-io/gorse.svg?cacheSeconds=172800) - Gorse 致力於成為一個通用開源推薦系統，可快速應用於各種線上服務。
* [Merlin](https://github.com/NVIDIA-Merlin/Merlin) ![](https://img.shields.io/github/stars/NVIDIA-Merlin/Merlin.svg?cacheSeconds=172800) - NVIDIA Merlin 是一個開源庫，提供端到端 GPU 加速推薦系統，涵蓋從特徵工程和預處理、訓練深度學習模型到生產推理的全過程。
* [Recommenders](https://github.com/recommenders-team/recommenders) ![](https://img.shields.io/github/stars/recommenders-team/recommenders.svg?cacheSeconds=172800) - Recommenders 提供推薦系統構建基準測試和最佳實踐，並以 Jupyter 筆記本形式呈現。
* [TorchRec](https://github.com/meta-pytorch/torchrec) ![](https://img.shields.io/github/stars/meta-pytorch/torchrec.svg?cacheSeconds=172800) - TorchRec 是一個 PyTorch 領域庫，提供大規模推薦系統（RecSys）所需的通用稀疏性和並行性原語。

## 工業級強化學習
* [Acme](https://github.com/google-deepmind/acme) ![](https://img.shields.io/github/stars/google-deepmind/acme.svg?cacheSeconds=172800) - Acme 是一個強化學習（RL）構建模組庫，致力於提供簡單、高效且易讀的智慧體。
* [AReaL](https://github.com/areal-project/AReaL) ![](https://img.shields.io/github/stars/areal-project/AReaL.svg?cacheSeconds=172800) - AReaL 是一個強化學習庫。
* [ChatLearn](https://github.com/alibaba/ChatLearn) ![](https://img.shields.io/github/stars/alibaba/ChatLearn.svg?cacheSeconds=172800) - ChatLearn 是一個靈活高效的大型語言模型強化學習訓練框架，支援分散式訓練引擎（FSDP2、Megatron）和推理引擎（vLLM、SGLang），並支援 GRPO、GSPO 等現代 RL 演算法。
* [CleanRL](https://github.com/vwxyzjn/cleanrl) ![](https://img.shields.io/github/stars/vwxyzjn/cleanrl.svg?cacheSeconds=172800) - CleanRL 是一個深度強化學習庫，提供高質量的單檔案實現，並具備利於研究的功能。實現簡潔清晰，同時可擴充套件至使用 AWS Batch 執行數千項實驗。
* [d3rlpy](https://github.com/takuseno/d3rlpy) ![](https://img.shields.io/github/stars/takuseno/d3rlpy.svg?cacheSeconds=172800) - d3rlpy 是一個面向實踐者和研究人員的離線深度強化學習庫。
* [D4RL](https://github.com/Farama-Foundation/D4RL) ![](https://img.shields.io/github/stars/Farama-Foundation/D4RL.svg?cacheSeconds=172800) - D4RL 是一個離線強化學習開源基準。
* [Dopamine](https://github.com/google/dopamine) ![](https://img.shields.io/github/stars/google/dopamine.svg?cacheSeconds=172800) - Dopamine 是一個研究框架，可快速原型化強化學習演算法。它致力於提供一個精簡、易於理解的程式碼庫，讓使用者自由嘗試大膽的新想法（探索性研究）。
* [EvoTorch](https://github.com/nnaisense/evotorch) ![](https://img.shields.io/github/stars/nnaisense/evotorch.svg?cacheSeconds=172800) - EvoTorch 是由 NNAISENSE 開發、構建於 PyTorch 之上的開源進化計算庫。
* [FinRL](https://github.com/AI4Finance-Foundation/FinRL) ![](https://img.shields.io/github/stars/AI4Finance-Foundation/FinRL.svg?cacheSeconds=172800) - FinRL 是首個展示金融強化學習巨大潛力的開源框架。
* [Gymnasium](https://github.com/Farama-Foundation/Gymnasium) ![](https://img.shields.io/github/stars/Farama-Foundation/Gymnasium.svg?cacheSeconds=172800) - Gymnasium 是一個開源 Python 庫，用於開發和比較強化學習演算法。它提供學習演算法與環境之間通訊的標準 API，以及一組符合該 API 的標準環境。
* [Gymnasium-Robotics](https://github.com/Farama-Foundation/Gymnasium-Robotics) ![](https://img.shields.io/github/stars/Farama-Foundation/Gymnasium-Robotics.svg?cacheSeconds=172800) - Gymnasium-Robotics 收錄了一系列使用 Gymnasium API 的強化學習機器人環境。環境執行於 MuJoCo 物理引擎及其維護的 mujoco Python 繫結之上。
* [Jumanji](https://github.com/instadeepai/jumanji) ![](https://img.shields.io/github/stars/instadeepai/jumanji.svg?cacheSeconds=172800) - Jumanji 是一套使用 JAX 編寫的強化學習（RL）環境，為產業驅動的研究提供簡潔、硬體加速的環境。
* [MARLlib](https://github.com/Replicable-MARL/MARLlib) ![](https://img.shields.io/github/stars/Replicable-MARL/MARLlib.svg?cacheSeconds=172800) - MARLlib 是一個基於 RLlib 的全面多智慧體強化學習演算法庫，為 MARL 研究社群提供統一平臺，用於構建、訓練和評估 MARL 演算法。
* [Mava](https://github.com/instadeepai/Mava) ![](https://img.shields.io/github/stars/instadeepai/Mava.svg?cacheSeconds=172800) - Mava 是一個使用 JAX 實現的分散式多智慧體強化學習框架。
* [Melting Pot](https://github.com/google-deepmind/meltingpot) ![](https://img.shields.io/github/stars/google-deepmind/meltingpot.svg?cacheSeconds=172800) - Melting Pot 是一套用於多智慧體強化學習的測試場景。
* [MetaDrive](https://github.com/metadriverse/metadrive) ![](https://img.shields.io/github/stars/metadriverse/metadrive.svg?cacheSeconds=172800) - MetaDrive 是一個駕駛模擬器，可組合多樣化駕駛場景以實現泛化 RL。
* [Minigrid](https://github.com/Farama-Foundation/Minigrid) ![](https://img.shields.io/github/stars/Farama-Foundation/Minigrid.svg?cacheSeconds=172800) - Minigrid 庫收錄了一系列離散網格世界環境，用於開展強化學習研究。環境遵循 Gymnasium 標準 API，並且輕量、快速且易於定製。
* [MiniWorld](https://github.com/Farama-Foundation/Miniworld) ![](https://img.shields.io/github/stars/Farama-Foundation/Miniworld.svg?cacheSeconds=172800) - MiniWorld 是一個極簡的 3D 室內環境模擬器，適用於強化學習與機器人研究。
* [ML-Agents](https://github.com/Unity-Technologies/ml-agents) ![](https://img.shields.io/github/stars/Unity-Technologies/ml-agents.svg?cacheSeconds=172800) - ML-Agents 是一個開源專案，可將遊戲和模擬環境用作訓練強化學習智慧體的環境。
* [MushroomRL](https://github.com/MushroomRL/mushroom-rl) ![](https://img.shields.io/github/stars/MushroomRL/mushroom-rl.svg?cacheSeconds=172800) - MushroomRL 是一個 Python 強化學習（RL）庫，其模組化設計讓使用者能夠輕鬆使用知名張量計算庫（如 PyTorch、TensorFlow）和 RL 基準（如 OpenAI Gym、PyBullet、DeepMind Control Suite）。
* [OmniSafe](https://github.com/PKU-Alignment/omnisafe) ![](https://img.shields.io/github/stars/PKU-Alignment/omnisafe.svg?cacheSeconds=172800) - OmniSafe 是一個基礎設施框架，旨在加速安全強化學習（RL）研究。
* [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) ![](https://img.shields.io/github/stars/OpenRLHF/OpenRLHF.svg?cacheSeconds=172800) - OpenRLHF 是一個用於人類反饋強化學習（RLHF）的開源框架。
* [PARL](https://github.com/PaddlePaddle/PARL) ![](https://img.shields.io/github/stars/PaddlePaddle/PARL.svg?cacheSeconds=172800) - PARL 是一個靈活且高效的強化學習框架。
* [PettingZoo](https://github.com/Farama-Foundation/PettingZoo) ![](https://img.shields.io/github/stars/Farama-Foundation/PettingZoo.svg?cacheSeconds=172800) - PettingZoo 是一個 Python 庫，用於開展多智慧體強化學習研究，類似於多智慧體版的 Gymnasium。
* [ranx](https://github.com/AmenRa/ranx) ![](https://img.shields.io/github/stars/AmenRa/ranx.svg?cacheSeconds=172800) - ranx 是一個快速排序評估指標庫，以 Python 實現，利用 Numba 實現高速向量運算和自動並行化。
* [RL4CO](https://github.com/ai4co/rl4co) ![](https://img.shields.io/github/stars/ai4co/rl4co.svg?cacheSeconds=172800) - RL4CO 是一個 PyTorch 庫，涵蓋組合最佳化（CO）強化學習的各類功能。
* [RL2](https://github.com/ChenmienTan/RL2) ![](https://img.shields.io/github/stars/ChenmienTan/RL2.svg?cacheSeconds=172800) - RL2 是一個強化學習庫。
* [RLinf](https://github.com/RLinf/RLinf) ![](https://img.shields.io/github/stars/RLinf/RLinf.svg?cacheSeconds=172800) - RLinf 是一個強化學習庫。
* [ROLL](https://github.com/alibaba/ROLL) ![](https://img.shields.io/github/stars/alibaba/ROLL.svg?cacheSeconds=172800) - ROLL 是一個強化學習庫。
* [skrl](https://github.com/Toni-SM/skrl) ![](https://img.shields.io/github/stars/Toni-SM/skrl.svg?cacheSeconds=172800) - skrl 是一個使用 Python（基於 PyTorch）編寫的開源模組化庫，用於強化學習，重點關注演算法實現的可讀性、簡潔性和透明度。
* [SkyRL](https://github.com/NovaSky-AI/SkyRL) ![](https://img.shields.io/github/stars/NovaSky-AI/SkyRL.svg?cacheSeconds=172800) - SkyRL 是一個全棧強化學習庫，提供模組化訓練框架、跨平臺推理後端、智慧體流水線和 Gymnasium 環境，適用於長期執行的現實世界 RL 任務。
* [slime](https://github.com/THUDM/slime) ![](https://img.shields.io/github/stars/THUDM/slime.svg?cacheSeconds=172800) - slime 是一個用於 RL 擴充套件的 LLM 後訓練框架。
* [Stable Baselines](https://github.com/DLR-RM/stable-baselines3) ![](https://img.shields.io/github/stars/DLR-RM/stable-baselines3.svg?cacheSeconds=172800) - OpenAI Baselines 的一個分支，包含強化學習演算法實現。
* [TF-Agents](https://github.com/tensorflow/agents) ![](https://img.shields.io/github/stars/tensorflow/agents.svg?cacheSeconds=172800) - 一個可靠、可擴充套件且易用的 TensorFlow 庫，用於上下文賭博機和強化學習。
* [TorchRL](https://github.com/pytorch/rl) ![](https://img.shields.io/github/stars/pytorch/rl.svg?cacheSeconds=172800) - TorchRL 是一個適用於 PyTorch 的開源強化學習（RL）庫。
* [TRL](https://github.com/huggingface/trl) ![](https://img.shields.io/github/stars/huggingface/trl.svg?cacheSeconds=172800) - 使用強化學習訓練 Transformer 語言模型。
* [veRL](https://github.com/verl-project/verl) ![](https://img.shields.io/github/stars/verl-project/verl.svg?cacheSeconds=172800) - veRL（HybridFlow）是一個靈活、高效、工業級的 RLHF 訓練框架，專為 LLM 設計。

## 工業級機器人
* [AI2-THOR](https://github.com/allenai/ai2thor) ![](https://img.shields.io/github/stars/allenai/ai2thor.svg?cacheSeconds=172800) - AI2-THOR 是一個近乎照片級真實、可互動的 AI 智慧體框架。
* [Genesis](https://github.com/Genesis-Embodied-AI/genesis-world) ![](https://img.shields.io/github/stars/Genesis-Embodied-AI/genesis-world.svg?cacheSeconds=172800) - Genesis 是一個面向具身 AI 和機器人模擬的物理平臺。
* [Habitat-Sim](https://github.com/facebookresearch/habitat-sim) ![](https://img.shields.io/github/stars/facebookresearch/habitat-sim.svg?cacheSeconds=172800) - Habitat-Sim 是一個靈活、高效能的 3D 模擬器，用於具身 AI 研究。
* [IsaacLab](https://github.com/isaac-sim/IsaacLab) ![](https://img.shields.io/github/stars/isaac-sim/IsaacLab.svg?cacheSeconds=172800) - IsaacLab 是一個統一、模組化的機器人學習框架，利用 NVIDIA Isaac Sim。
* [LeRobot](https://github.com/huggingface/lerobot) ![](https://img.shields.io/github/stars/huggingface/lerobot.svg?cacheSeconds=172800) - LeRobot 為現實世界機器人和模仿學習提供模型、資料集和工具。
* [robosuite](https://github.com/ARISE-Initiative/robosuite) ![](https://img.shields.io/github/stars/ARISE-Initiative/robosuite.svg?cacheSeconds=172800) - robosuite 是一個使用 MuJoCo 物理引擎的機器人學習模擬框架。
* [RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) ![](https://img.shields.io/github/stars/RoboVerseOrg/RoboVerse.svg?cacheSeconds=172800) - RoboVerse 是一個綜合機器人模擬平臺，提供多種環境。

## 工業級視覺化
* [Apache ECharts](https://github.com/apache/echarts) ![](https://img.shields.io/github/stars/apache/echarts.svg?cacheSeconds=172800) - Apache ECharts 是一個功能強大的互動式圖表和資料視覺化庫，適用於瀏覽器。
* [Apache Superset](https://github.com/apache/superset) ![](https://img.shields.io/github/stars/apache/superset.svg?cacheSeconds=172800) - 一個現代化、面向企業的商業智慧 Web 應用。
* [Bokeh](https://github.com/bokeh/bokeh) ![](https://img.shields.io/github/stars/bokeh/bokeh.svg?cacheSeconds=172800) - Bokeh 是一個面向 Python 的互動式視覺化庫，可在現代 Web 瀏覽器中實現美觀且富有意義的資料展示。
* [Bread Dataset Viewer](https://github.com/Bread-Technologies/Bread-Dataset-Viewer) - 一個 VS Code 擴充套件，可直接在編輯器中檢視和探索大型機器學習資料集（CSV、JSON、Parquet 等），無需擔心 IDE 崩潰。
* [Bread WandB Viewer](https://github.com/Bread-Technologies/Bread-WandB-Viewer) - 一個 VS Code 擴充套件，可在 IDE 中檢視 Weights & Biases 實驗、日誌和產物，無需切換到 Web UI；所有操作完全離線，保護資料隱私。
* [Data Formulator](https://github.com/microsoft/data-formulator) ![](https://img.shields.io/github/stars/microsoft/data-formulator.svg?cacheSeconds=172800) - 藉助 AI 迭代轉換資料並建立豐富的視覺化。
* [ggplot2](https://github.com/tidyverse/ggplot2) ![](https://img.shields.io/github/stars/tidyverse/ggplot2.svg?cacheSeconds=172800) - 面向 R 語言的圖形語法實現。
* [gradio](https://github.com/gradio-app/gradio) ![](https://img.shields.io/github/stars/gradio-app/gradio.svg?cacheSeconds=172800) - 只需編寫 Python，即可快速建立和分享模型演示。在瀏覽器中互動式除錯模型、收集協作者反饋，並生成公共連結，無需部署任何內容。
* [Kangas](https://github.com/comet-ml/kangas) ![](https://img.shields.io/github/stars/comet-ml/kangas.svg?cacheSeconds=172800) - Kangas 是一個用於探索、分析和視覺化大規模多媒體資料的工具。它提供簡單易用的 Python API，可記錄大型資料表，並配有直觀的視覺化介面，用於對資料集執行復雜查詢。
* [matplotlib](https://github.com/matplotlib/matplotlib) ![](https://img.shields.io/github/stars/matplotlib/matplotlib.svg?cacheSeconds=172800) - 一個 Python 二維繪相簿，可在多種印刷格式和跨平臺互動環境中生成出版級圖表。
* [Model Explorer](https://github.com/google-ai-edge/model-explorer) ![](https://img.shields.io/github/stars/google-ai-edge/model-explorer.svg?cacheSeconds=172800) - Model Explorer 是一個機器學習模型視覺化與探索工具，提供直觀的圖結構檢視，幫助理解模型結構、檢查層詳情並瀏覽大型神經網路。
* [Netron](https://github.com/lutzroeder/netron) ![](https://img.shields.io/github/stars/lutzroeder/netron.svg?cacheSeconds=172800) - Netron 是一個神經網路、深度學習和機器學習模型檢視器。
* [Perspective](https://github.com/perspective-dev/perspective) ![](https://img.shields.io/github/stars/perspective-dev/perspective.svg?cacheSeconds=172800) 透過 WebAssembly 實現流式資料透視視覺化。
* [Plotly](https://github.com/plotly/plotly.py) ![](https://img.shields.io/github/stars/plotly/plotly.py.svg?cacheSeconds=172800) - 一個互動式、開源、基於瀏覽器的 Python 繪相簿。
* [Redash](https://github.com/getredash/redash) ![](https://img.shields.io/github/stars/getredash/redash.svg?cacheSeconds=172800) - Redash 是一個開源視覺化框架，旨在透過多種後端輕鬆訪問大型資料集。
* [Rerun](https://github.com/rerun-io/rerun) ![](https://img.shields.io/github/stars/rerun-io/rerun.svg?cacheSeconds=172800) - Rerun 是一個開源 SDK，用於記錄、儲存、查詢和視覺化多模態資料，專為機器人、計算機視覺和空間 AI 設計。
* [seaborn](https://github.com/mwaskom/seaborn) ![](https://img.shields.io/github/stars/mwaskom/seaborn.svg?cacheSeconds=172800) - Seaborn 是一個基於 matplotlib 的 Python 視覺化庫，提供高階介面以繪製美觀的統計圖表。
* [Spotlight](https://github.com/Renumics/spotlight) ![](https://img.shields.io/github/stars/Renumics/spotlight.svg?cacheSeconds=172800) - Spotlight 可幫助你識別關鍵資料片段和模型失效模式。它支援整理高質量資料集，從而構建並維護可靠的機器學習模型。
* [Streamlit](https://github.com/streamlit/streamlit) ![](https://img.shields.io/github/stars/streamlit/streamlit.svg?cacheSeconds=172800) - Streamlit 讓你透過看似簡單的 Python 指令碼為機器學習專案建立應用。它支援熱過載，因此編輯並儲存檔案後，應用會實時更新。
* [tensorboardX](https://github.com/lanpa/tensorboardX) ![](https://img.shields.io/github/stars/lanpa/tensorboardX.svg?cacheSeconds=172800) - 透過簡單的函式呼叫寫入 TensorBoard 事件。
* [TensorBoard](https://github.com/tensorflow/tensorboard) ![](https://img.shields.io/github/stars/tensorflow/tensorboard.svg?cacheSeconds=172800) - TensorBoard 是一個機器學習實驗視覺化工具包，可輕鬆託管、跟蹤和分享 ML 實驗。
* [Torchvista](https://github.com/sachinhosmani/torchvista) ![](https://img.shields.io/github/stars/sachinhosmani/torchvista.svg?cacheSeconds=172800) - Torchvista 是一個基於互動式筆記本的工具，可將任意 PyTorch 模型的前向傳播視覺化為筆記本中的計算圖，支援摺疊巢狀模組，並可容忍錯誤、顯示部分視覺化結果。
* [Transformer Explainer](https://github.com/poloclub/transformer-explainer) ![](https://img.shields.io/github/stars/poloclub/transformer-explainer.svg?cacheSeconds=172800) - Transformer Explainer 是一個互動式視覺化工具，旨在幫助任何人瞭解 GPT 等基於 Transformer 的模型如何工作。
* [Vega-Altair](https://github.com/vega/altair) ![](https://img.shields.io/github/stars/vega/altair.svg?cacheSeconds=172800) - Vega-Altair 是一個用於 Python 的宣告式統計視覺化庫。
* [ydata-profiling](https://github.com/Data-Centric-AI-Community/fg-data-profiling) ![](https://img.shields.io/github/stars/Data-Centric-AI-Community/fg-data-profiling.svg?cacheSeconds=172800) - ydata-profiling 以一致且快速的方式，透過一行程式碼提供探索性資料分析（EDA）體驗。

## 後設資料管理
* [Apache Atlas](https://github.com/apache/atlas) ![](https://img.shields.io/github/stars/apache/atlas.svg?cacheSeconds=172800) - Apache Atlas 框架是一套可擴充套件的核心基礎治理服務，可幫助企業有效滿足 Hadoop 環境中的合規要求，並支援與整個企業資料生態系統整合。
* [DataHub](https://github.com/datahub-project/datahub) ![](https://img.shields.io/github/stars/datahub-project/datahub.svg?cacheSeconds=172800) - DataHub 是 LinkedIn 的通用後設資料搜尋與發現工具。
* [Marquez](https://github.com/MarquezProject/marquez) ![](https://img.shields.io/github/stars/MarquezProject/marquez.svg?cacheSeconds=172800) - Marquez 是一個開源後設資料服務，用於收集、彙總和視覺化資料生態系統的後設資料。
* [Metacat](https://github.com/Netflix/metacat) ![](https://img.shields.io/github/stars/Netflix/metacat.svg?cacheSeconds=172800) - Metacat 是一個統一的後設資料探索 API 服務，重點解決以下問題：1）後設資料系統的聯邦檢視；2）任意資料集後設資料的儲存；3）後設資料發現。
* [ML Metadata](https://github.com/google/ml-metadata) ![](https://img.shields.io/github/stars/google/ml-metadata.svg?cacheSeconds=172800) - 一個用於記錄和檢索與機器學習開發者及資料科學家工作流相關後設資料的庫。

## 模型、資料與實驗管理
* [Aim](https://github.com/aimhubio/aim) ![](https://img.shields.io/github/stars/aimhubio/aim.svg?cacheSeconds=172800) - 一種極其簡單的方式，用於記錄、搜尋和比較 AI 實驗。
* [ClearML](https://github.com/clearml/clearml) ![](https://img.shields.io/github/stars/clearml/clearml.svg?cacheSeconds=172800) - 為 AI 提供自動化實驗管理器和版本控制（前身為 Trains）。
* [DataHub](https://github.com/datahub-project/datahub) ![](https://img.shields.io/github/stars/datahub-project/datahub.svg?cacheSeconds=172800) - DataHub 是一個面向現代資料技術棧的開源資料目錄。
* [Dolt](https://github.com/dolthub/dolt) ![](https://img.shields.io/github/stars/dolthub/dolt.svg?cacheSeconds=172800) - Dolt 是一個 SQL 資料庫，可以像 Git 倉庫一樣進行 fork、clone、branch、merge、push 和 pull。
* [DVC](https://github.com/treeverse/dvc) ![](https://img.shields.io/github/stars/treeverse/dvc.svg?cacheSeconds=172800) - DVC（資料版本控制）是一個 Git 分支，可用於模型版本管理。
* [HuggingFace Model Downloader](https://github.com/bodaay/HuggingFaceModelDownloader) ![](https://img.shields.io/github/stars/bodaay/HuggingFaceModelDownloader.svg?cacheSeconds=172800) - HuggingFace Model Downloader 是一個工具，可從 HuggingFace 網站下載模型和資料集。它支援多執行緒下載 LFS 檔案，並透過 SHA256 校驗和驗證下載模型的完整性。
* [Keepsake](https://github.com/replicate/keepsake) ![](https://img.shields.io/github/stars/replicate/keepsake.svg?cacheSeconds=172800) - 機器學習版本控制。
* [KitOps](https://github.com/kitops-ml/kitops) ![](https://img.shields.io/github/stars/kitops-ml/kitops.svg?cacheSeconds=172800) - KitOps 是一個開放、基於標準的 AI/ML 專案打包與版本管理系統，可與現有 AI/ML、開發和 DevOps 工具協同工作。
* [lakeFS](https://github.com/treeverse/lakeFS) ![](https://img.shields.io/github/stars/treeverse/lakeFS.svg?cacheSeconds=172800) - 構建於物件儲存之上的可重複、原子化且有版本管理的資料湖。
* [MLflow](https://github.com/mlflow/mlflow) ![](https://img.shields.io/github/stars/mlflow/mlflow.svg?cacheSeconds=172800) - 用於管理 ML 生命週期的開源平臺，涵蓋實驗、可復現性和部署。
* [Polyaxon](https://github.com/polyaxon/polyaxon) ![](https://img.shields.io/github/stars/polyaxon/polyaxon.svg?cacheSeconds=172800) - 一個在 Kubernetes 上實現可復現、可擴充套件機器學習與深度學習的平臺 - [(影片)](https://www.youtube.com/watch?v=Iexwrka_hys)。
* [Quilt](https://github.com/quiltdata/quilt) ![](https://img.shields.io/github/stars/quiltdata/quilt.svg?cacheSeconds=172800) - 對資料和模型進行版本管理、確保可復現並支援部署。
* [Sacred](https://github.com/IDSIA/sacred) ![](https://img.shields.io/github/stars/IDSIA/sacred.svg?cacheSeconds=172800) - 一個幫助你配置、組織、記錄和復現機器學習實驗的工具。
* [TerminusDB](https://github.com/terminusdb/terminusdb) ![](https://img.shields.io/github/stars/terminusdb/terminusdb.svg?cacheSeconds=172800) - 一種以類似 Git 的方式儲存資料的圖資料庫管理系統。
* [Weights & Biases](https://github.com/wandb/wandb) ![](https://img.shields.io/github/stars/wandb/wandb.svg?cacheSeconds=172800) - Weights & Biase 是一個機器學習實驗跟蹤、資料集版本管理、超引數搜尋、視覺化與協作工具。

## 模型訓練與編排

* [AutoTrain Advanced](https://github.com/huggingface/autotrain-advanced) ![](https://img.shields.io/github/stars/huggingface/autotrain-advanced.svg?cacheSeconds=172800) - AutoTrain Advanced 是一種無需編寫程式碼的解決方案，只需點選幾下即可訓練機器學習模型。
* [Avalanche](https://github.com/ContinualAI/avalanche) ![](https://img.shields.io/github/stars/ContinualAI/avalanche.svg?cacheSeconds=172800) - Avalanche 是一個端到端持續學習庫，提供共享協作的 MIT 開原始碼庫，用於快速原型開發、訓練和可復現地評估持續學習演算法。
* [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) ![](https://img.shields.io/github/stars/axolotl-ai-cloud/axolotl.svg?cacheSeconds=172800) - Axolotl 是一個工具，旨在簡化多種 AI 模型的微調，並支援多種配置和架構。
* [BindsNET](https://github.com/BindsNET/bindsnet) ![](https://img.shields.io/github/stars/BindsNET/bindsnet.svg?cacheSeconds=172800) - BindsNET 是一個脈衝神經網路模擬庫，面向仿生機器學習演算法的開發。
* [CML](https://github.com/iterative/cml) ![](https://img.shields.io/github/stars/iterative/cml.svg?cacheSeconds=172800) - 持續機器學習（CML）是一個開源庫，用於在機器學習專案中實現持續整合與交付（CI/CD）。
* [CoreNet](https://github.com/apple/corenet) ![](https://img.shields.io/github/stars/apple/corenet.svg?cacheSeconds=172800) - CoreNet 是一個深度神經網路工具包，研究人員和工程師可用它訓練各類標準及新型的小型和大型模型，以完成多種任務，包括基礎模型（如 CLIP 和 LLM）、目標分類、目標檢測和語義分割。
* [DataLinter](https://github.com/zgornel/DataLinter) ![](https://img.shields.io/github/stars/zgornel/DataLinter.svg?cacheSeconds=86400) - DataLinter 是一個開源資料與程式碼上下文檢查工具，透過外掛設計實現對資料和程式碼的技術棧無關性。
* [Determined](https://github.com/determined-ai/determined) ![](https://img.shields.io/github/stars/determined-ai/determined.svg?cacheSeconds=172800) - 深度學習訓練平臺，內建分散式訓練、超引數調優和模型管理支援（支援 TensorFlow 和 PyTorch）。
* [dstack](https://github.com/dstackai/dstack) ![](https://img.shields.io/github/stars/dstackai/dstack.svg?cacheSeconds=172800) - dstack 是一個開源容器編排器，可簡化工作負載編排並提高 ML 團隊的 GPU 利用率。
* [envd](https://github.com/tensorchord/envd) ![](https://img.shields.io/github/stars/tensorchord/envd.svg?cacheSeconds=172800) - 面向資料科學及 AI/ML 工程團隊的機器學習開發環境。
* [Fire-Flyer File System](https://github.com/deepseek-ai/3FS) ![](https://img.shields.io/github/stars/deepseek-ai/3FS.svg?cacheSeconds=172800) - Fire-Flyer File System（3FS）是一個高效能分散式檔案系統，旨在應對 AI 訓練和推理工作負載的挑戰。它利用現代 SSD 和 RDMA 網路提供共享儲存層，簡化分散式應用開發。
* [H2O-3](https://github.com/h2oai/h2o-3) ![](https://img.shields.io/github/stars/h2oai/h2o-3.svg?cacheSeconds=172800) - 快速、可擴充套件的機器學習平臺，助力打造更智慧的應用：深度學習、梯度提升與 XGBoost、隨機森林、廣義線性模型（邏輯迴歸、彈性網路）、K 均值、PCA、堆疊整合、自動機器學習（AutoML）等。
* [Hopsworks](https://github.com/logicalclocks/hopsworks) ![](https://img.shields.io/github/stars/logicalclocks/hopsworks.svg?cacheSeconds=172800) - Hopsworks 是一個資料密集型平臺，用於設計和執行機器學習流水線。
* [Ignite](https://github.com/pytorch/ignite) ![](https://img.shields.io/github/stars/pytorch/ignite.svg?cacheSeconds=172800) - Ignite 是一個高階庫，可幫助你靈活、透明地使用 PyTorch 訓練和評估神經網路。
* [Kubeflow](https://github.com/kubeflow/kubeflow) ![](https://img.shields.io/github/stars/kubeflow/kubeflow.svg?cacheSeconds=172800) - 一個基於 Google 內部機器學習流水線構建的雲原生機器學習平臺。
* [Ludwig](https://github.com/ludwig-ai/ludwig) ![](https://img.shields.io/github/stars/ludwig-ai/ludwig.svg?cacheSeconds=172800) - Ludwig 是一個低程式碼框架，用於構建 LLM 和其他深度神經網路等自定義 AI 模型。
* [MFTCoder](https://github.com/codefuse-ai/MFTCoder) ![](https://img.shields.io/github/stars/codefuse-ai/MFTCoder.svg?cacheSeconds=172800) - MFTCoder 是 CodeFuse 的開源專案，旨在對大型語言模型（LLM）進行準確、高效的多工微調（MFT），尤其是程式碼大模型（面向程式碼任務的語言模型）。
* [MLeap](https://github.com/combust/mleap) ![](https://img.shields.io/github/stars/combust/mleap.svg?cacheSeconds=172800) - 為 Spark、TensorFlow 和 sklearn 實現流水線與模型序列化的標準化。
* [Nanotron](https://github.com/huggingface/nanotron) ![](https://img.shields.io/github/stars/huggingface/nanotron.svg?cacheSeconds=172800) - Nanotron 提供分散式原語，可透過 3D 並行高效訓練各種模型。
* [NeMo](https://github.com/NVIDIA-NeMo/Speech) ![](https://img.shields.io/github/stars/NVIDIA-NeMo/Speech.svg?cacheSeconds=172800) - NVIDIA NeMo 是一個可擴充套件、雲原生的生成式 AI 框架，面向使用 PyTorch 的研究人員和開發者，覆蓋大型語言模型（LLM）、多模態模型（MM）、自動語音識別（ASR）、文字轉語音（TTS）和計算機視覺（CV）等領域。它透過複用現有程式碼和預訓練模型檢查點，幫助你高效建立、定製和部署新的生成式 AI 模型。
* [Prime](https://github.com/PrimeIntellect-ai/prime) ![](https://img.shields.io/github/stars/PrimeIntellect-ai/prime.svg?cacheSeconds=172800) - Prime 是一個框架，可透過網際網路高效地在全球範圍內分散式訓練 AI 模型。
* [PyCaret](https://github.com/pycaret/pycaret) ![](https://img.shields.io/github/stars/pycaret/pycaret.svg?cacheSeconds=172800)) - 用於訓練和部署模型（scikit-learn、XGBoost、LightGBM、spaCy）的低程式碼庫。
* [Sematic](https://github.com/sematic-ai/sematic) ![](https://img.shields.io/github/stars/sematic-ai/sematic.svg?cacheSeconds=172800) - 使用簡單 Python 構建資源密集型流水線的平臺。
* [Skaffold](https://github.com/GoogleContainerTools/skaffold) ![](https://img.shields.io/github/stars/GoogleContainerTools/skaffold.svg?cacheSeconds=172800) - Skaffold 是一個命令列工具，可促進 Kubernetes 應用的持續開發。你可以在本地迭代應用原始碼，然後部署到本地或遠端 Kubernetes 叢集。
* [TFX](https://github.com/tensorflow/tfx) ![](https://img.shields.io/github/stars/tensorflow/tfx.svg?cacheSeconds=172800) - TensorFlow Extended（TFX）是一個面向生產的配置框架，基於 TensorFlow 構建 ML，幷包含監控和模型版本管理。
* [unsloth](https://github.com/unslothai/unsloth) ![](https://img.shields.io/github/stars/unslothai/unsloth.svg?cacheSeconds=172800) - 面向 LLM 的微調與強化學習。訓練 OpenAI gpt-oss、DeepSeek-R1、Qwen3、Gemma 3 和 TTS 的速度快 2 倍，同時減少 70% 的 VRAM 用量。

## 模型儲存最佳化
* [AWQ](https://github.com/mit-han-lab/llm-awq) ![](https://img.shields.io/github/stars/mit-han-lab/llm-awq.svg?cacheSeconds=172800) - 面向 LLM 壓縮與加速的啟用感知權重量化。
* [GGML](https://github.com/ggml-org/ggml) ![](https://img.shields.io/github/stars/ggml-org/ggml.svg?cacheSeconds=172800) - GGML 是一個高效能機器學習張量庫，可在 CPU 上實現高效推理，尤其針對大型語言模型進行了最佳化。
* [neural-compressor](https://github.com/intel/neural-compressor) ![](https://img.shields.io/github/stars/intel/neural-compressor.svg?cacheSeconds=172800) - Intel® Neural Compressor 致力於為主流框架提供常用模型壓縮技術，如量化、剪枝（稀疏化）、蒸餾和神經架構搜尋。
* [NNEF](https://www.khronos.org/nnef) - 神經網路交換格式（NNEF）是一種開放標準，用於表示神經網路模型，以實現不同機器學習框架和平臺之間的互操作性和可移植性。
* [ONNX](https://github.com/onnx/onnx) ![](https://img.shields.io/github/stars/onnx/onnx.svg?cacheSeconds=172800) - ONNX（開放神經網路交換格式）是一種開源格式，旨在促進不同框架和平臺之間機器學習模型的互操作性與可移植性。
* [PFA](https://dmg.org/pfa) - PFA（可移植分析格式）是一種基於 JSON 的標準格式，用於以可移植方式表示和交換預測模型及分析工作流。
* [PMML](https://dmg.org/pmml) - PMML（預測模型標記語言）是一種基於 XML 的標準，用於在不同應用之間表示和共享預測模型。
* [Quanto](https://github.com/huggingface/optimum-quanto) ![](https://img.shields.io/github/stars/huggingface/optimum-quanto.svg?cacheSeconds=172800) - Quanto 致力於簡化深度學習模型量化。

## 隱私與安全
* [AI Gateway](https://github.com/portkey-ai/gateway) ![](https://img.shields.io/github/stars/portkey-ai/gateway.svg?cacheSeconds=172800) - AI Gateway 是一個極速 AI 閘道器，整合了防護機制。
* [ART](https://github.com/Trusted-AI/adversarial-robustness-toolbox) ![](https://img.shields.io/github/stars/Trusted-AI/adversarial-robustness-toolbox.svg?cacheSeconds=172800) - ART（對抗魯棒性工具箱）提供工具，幫助開發者和研究人員防禦並評估機器學習模型與應用遭受的對抗威脅，包括規避、投毒、模型提取和推理攻擊。
* [CipherChat](https://github.com/RobustNLP/CipherChat) ![](https://img.shields.io/github/stars/RobustNLP/CipherChat.svg?cacheSeconds=172800) - CipherChat 是一個用於評估 LLM 安全對齊泛化能力的框架。
* [DeepTeam](https://github.com/confident-ai/deepteam) ![](https://img.shields.io/github/stars/confident-ai/deepteam.svg?cacheSeconds=172800) - DeepTeam 是一個簡單易用的開源 LLM 紅隊測試框架，用於滲透測試並保障大型語言模型系統的安全。
* [FATE](https://github.com/FederatedAI/FATE) ![](https://img.shields.io/github/stars/FederatedAI/FATE.svg?cacheSeconds=172800) - FATE（聯邦 AI 技術賦能器）是世界上首個工業級聯邦學習開源框架，使企業和機構能夠在保護資料安全與隱私的同時開展資料協作。
* [FedML](https://github.com/FedML-AI/FedML) ![](https://img.shields.io/github/stars/FedML-AI/FedML.svg?cacheSeconds=172800) - FedML 為任意地點、任意規模的聯邦/分散式機器學習提供整合研究與生產的邊緣雲平臺。
* [Flower](https://github.com/flwrlabs/flower) ![](https://img.shields.io/github/stars/flwrlabs/flower.svg?cacheSeconds=172800) - Flower 是一個統一方法的聯邦學習框架，可聯合執行任意機器學習工作負載、使用任意 ML 框架和任意程式語言。
* [Google's Differential Privacy](https://github.com/google/differential-privacy) ![](https://img.shields.io/github/stars/google/differential-privacy.svg?cacheSeconds=172800) - 這是一個 C++ 庫，包含 ε-差分隱私演算法，可用於對包含私人或敏感資訊的數值資料集生成彙總統計資訊。
* [Guardrails](https://github.com/guardrails-ai/guardrails) ![](https://img.shields.io/github/stars/guardrails-ai/guardrails.svg?cacheSeconds=172800) - Guardrails 是一個包，可讓使用者為大型語言模型的輸出新增結構、型別和質量保證。
* [NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) ![](https://img.shields.io/github/stars/NVIDIA-NeMo/Guardrails.svg?cacheSeconds=172800) - NeMo Guardrails 是一個開源工具包，可輕鬆為基於 LLM 的對話系統新增可程式設計防護機制。
* [Opacus](https://github.com/meta-pytorch/opacus)  ![](https://img.shields.io/github/stars/meta-pytorch/opacus.svg?cacheSeconds=172800) - Opacus 是一個庫，可使用差分隱私訓練 PyTorch 模型。它只需在客戶端進行極少程式碼改動，對訓練效能影響很小，並允許客戶端實時跟蹤當前已消耗的隱私預算。
* [OpenFL](https://github.com/securefederatedai/openfederatedlearning)  ![](https://img.shields.io/github/stars/securefederatedai/openfederatedlearning.svg?cacheSeconds=172800) - OpenFL 是一個聯邦學習 Python 框架，設計靈活、可擴充套件且易於資料科學家學習。OpenFL 由 Intel 物聯網事業部（IOTG）和 Intel Labs 開發。
* [PySyft](https://github.com/OpenMined/PySyft) ![](https://img.shields.io/github/stars/OpenMined/PySyft.svg?cacheSeconds=172800) - 一個用於安全、私密深度學習的 Python 庫。PySyft 將私有資料與模型訓練解耦，並在 PyTorch 中使用多方計算（MPC）。
* [Tensorflow Privacy](https://github.com/tensorflow/privacy) ![](https://img.shields.io/github/stars/tensorflow/privacy.svg?cacheSeconds=172800) - 一個 Python 庫，包含使用差分隱私訓練機器學習模型的 TensorFlow 最佳化器實現。
* [TF Encrypted](https://github.com/tf-encrypted/tf-encrypted) ![](https://img.shields.io/github/stars/tf-encrypted/tf-encrypted.svg?cacheSeconds=172800) - 一個用於基於 TensorFlow 對加密資料進行機密機器學習的框架。

# 其他精選列表

* [Awesome Agentic Engineering Resources](https://github.com/EthicalML/awesome-agentic-engineering-resources) ![](https://img.shields.io/github/stars/EthicalML/awesome-agentic-engineering-resources.svg?cacheSeconds=172800) - 精選資源、工具和參考資料合集，助你構建智慧體 AI 系統。
* [Awesome AI Gateway](https://github.com/cuihuan/awesome-ai-gateway) ![](https://img.shields.io/github/stars/cuihuan/awesome-ai-gateway.svg?cacheSeconds=172800) - 精選的雙語（英文/簡體中文）AI 閘道器和 LLM 代理列表（LiteLLM、OpenRouter、Portkey、Kong、Higress、new-api），按成本、合規性、自託管和路由進行比較，並提供決策樹、可復現成本基準測試和選擇評分卡。
* [Awesome AI Regulation](https://github.com/EthicalML/awesome-artificial-intelligence-regulation) ![](https://img.shields.io/github/stars/EthicalML/awesome-artificial-intelligence-regulation.svg?cacheSeconds=172800) - 涵蓋負責任部署機器學習系統所需的治理、合規和監管框架，並覆蓋不同司法轄區。
* [Awesome AI Tokenomics](https://github.com/QuesmaOrg/awesome-ai-tokenomics) ![](https://img.shields.io/github/stars/QuesmaOrg/awesome-ai-tokenomics.svg?cacheSeconds=172800) - 涵蓋 AI 系統中的 Token 成本與效率，包括監控、最佳化、快取、模型選擇和上下文管理。
* [Awesome Production GenAI](https://github.com/EthicalML/awesome-production-agentic-systems) ![](https://img.shields.io/github/stars/EthicalML/awesome-production-agentic-systems.svg?cacheSeconds=172800) - 專注於生成式 AI 部署，包括 LLM 運維、提示詞工程以及生成式 AI 專屬的監控和安全工具。
* [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) ![](https://img.shields.io/github/stars/Yigtwxx/Awesome-RAG-Production.svg?cacheSeconds=172800) - 精選生產級工具和最佳實踐，助你構建可擴充套件的 RAG 系統。

# 貢獻者

<a href="https://github.com/EthicalML/awesome-production-machine-learning/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=EthicalML/awesome-production-machine-learning" />
</a>
