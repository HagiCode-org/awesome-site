[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![X](https://img.shields.io/badge/X-%23000000?logo=X&logoColor=white)](https://twitter.com/EthicalML)

# 精选生产级机器学习资源

本仓库精选了一系列优秀的开源库，助你将机器学习部署到生产环境，并进行监控、版本管理、扩展和安全防护 🚀

关注此 GitHub 仓库，即可通过[版本发布](https://github.com/EthicalML/awesome-production-machine-learning/releases)及时了解每月新增的生产级机器学习库汇总 🤩

此外，我们还提供了一个[搜索工具集](https://huggingface.co/spaces/zhiminy/Awesome-Production-Machine-Learning-Search)，帮助你快速浏览整个工具链。

## 本页章节快速链接

| | | |
|-|-|-|
| [🔧 自动机器学习（AutoML）](#automl) | [🧮 计算与通信优化](#computation-and-communication-optimisation) | [🏷️ 数据标注与合成](#data-annotation-and-synthesis) |
| [🧵 数据流水线](#data-pipeline) | [📓 数据科学笔记本](#data-science-notebook) | [💾 数据存储优化](#data-storage-optimisation) |
| [💸 数据流处理](#data-stream-processing) | [💪 部署与服务](#deployment-and-serving) | [📈 评估与监控](#evaluation-and-monitoring) |
| [🔍 可解释性与公平性](#explainability-and-fairness) | [🎁 特征存储](#feature-store) | [🔴 工业级异常检测](#industry-strength-anomaly-detection) |
| [👁️ 工业级计算机视觉](#industry-strength-computer-vision) | [🔥 工业级信息检索](#industry-strength-information-retrieval) | [🔠 工业级自然语言处理](#industry-strength-nlp) |
| [🙌 工业级推荐系统](#industry-strength-recommender-system) | [🍕 工业级强化学习](#industry-strength-reinforcement-learning) | [🤖 工业级机器人](#industry-strength-robotics) |
| [📊 工业级可视化](#industry-strength-visualisation) | [📅 元数据管理](#metadata-management) | [📜 模型、数据与实验管理](#model-data-and-experiment-management) |
| [🔩 模型存储优化](#model-storage-optimisation) | [🏁 模型训练与编排](#model-training-and-orchestration) | [🔏 隐私与安全](#privacy-and-safety) |

## 如何为列表做贡献

提交 PR 时，请先阅读我们的[贡献指南](https://github.com/EthicalML/awesome-production-machine-learning/blob/master/CONTRIBUTING.md)，了解如何帮助我们保持列表整洁并及时更新——感谢社区一直以来对列表持续发展的支持 🚀

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
    alt="星标历史图表"
    src="https://star-history.dera.page/svg?repos=EthicalML/awesome-production-machine-learning&type=Date"
  />
</picture>

## 10 分钟视频概览

<table>
  <tr>
    <td width="30%">
        本<a href="https://www.youtube.com/watch?v=Ynb6X0KZKxY">10 分钟视频</a>介绍了机器学习运维（MLOps）的动机，并概述了本仓库中的部分工具。这个<a href="https://www.youtube.com/watch?v=NycftytgPnk">较新的视频</a>介绍了 2024 年 MLOps 现状的更新版本。
    </td>
    <td width="70%">
        <a href="https://www.youtube.com/watch?v=Ynb6X0KZKxY"><img src="images/video.png"></a>
    </td>
  </tr>
</table>

## 想定期获取本仓库及其他进展的更新吗？

<table>
  <tr>
    <td width="30%">
         你可以订阅 <a href="https://ethical.institute/mle.html">Machine Learning Engineer</a> 新闻通讯。加入超过 70,000 名机器学习专业人士和爱好者的行列，每周接收精选的生产级机器学习文章与教程。
    </td>
    <td width="70%">
        <a href="https://ethical.institute/mle.html"><img src="images/mleng.png"></a>
    </td>
  </tr>
  <tr>
    <td width="30%">
         也欢迎查看 <a href="https://github.com/EthicalML/awesome-production-agentic-systems/">Awesome Production GenAI</a> 列表；我们致力于精选可用于部署、监控、版本管理和扩展生成式人工智能应用与系统的优秀开源库。
    </td>
    <td width="70%">
        <a href="https://github.com/EthicalML/awesome-production-agentic-systems/"><img src="images/list.jpg"></a>
    </td>
  </tr>
</table>

# 正文

## 自动机器学习（AutoML）
* [AIDE](https://github.com/WecoAI/aideml) ![](https://img.shields.io/github/stars/WecoAI/aideml.svg?cacheSeconds=172800) - AIDE 是一个开源机器学习工程代理，使用树搜索算法自主探索、实现并评估机器学习任务的解决策略。
* [AutoGluon](https://github.com/autogluon/autogluon) ![](https://img.shields.io/github/stars/autogluon/autogluon.svg?cacheSeconds=172800) - 基于主流机器学习库（Scikit-Learn、LightGBM、CatBoost、PyTorch、MXNet），为表格、图像和文本数据自动选择特征、模型和超参数。
* [Autokeras](https://github.com/keras-team/autokeras) ![](https://img.shields.io/github/stars/keras-team/autokeras.svg?cacheSeconds=172800) - 基于《[Auto-Keras：通过网络形态变换实现高效神经架构搜索](https://arxiv.org/abs/1806.10282)》的 Keras AutoML 库。
* [auto-sklearn](https://github.com/automl/auto-sklearn) ![](https://img.shields.io/github/stars/automl/auto-sklearn.svg?cacheSeconds=172800) - 用于自动执行 sklearn 算法和超参数调优的框架。
* [Ax](https://github.com/facebook/Ax) ![](https://img.shields.io/github/stars/facebook/Ax.svg?cacheSeconds=172800) - Ax 是一个易于使用的通用平台，用于理解、管理、部署和自动化自适应实验。
* [BoTorch](https://github.com/meta-pytorch/botorch) ![](https://img.shields.io/github/stars/meta-pytorch/botorch.svg?cacheSeconds=172800) - 基于 PyTorch 构建的贝叶斯优化库。
* [EvalML](https://github.com/alteryx/evalml) ![](https://img.shields.io/github/stars/alteryx/evalml.svg?cacheSeconds=172800) - EvalML 是一个 AutoML 库，使用领域专用目标函数构建、优化并评估机器学习流水线。
* [Feature Engine](https://github.com/feature-engine/feature_engine) ![](https://img.shields.io/github/stars/feature-engine/feature_engine.svg?cacheSeconds=172800) - Feature-engine 是一个 Python 库，包含多个用于为机器学习模型构建特征的转换器。
* [Featuretools](https://github.com/alteryx/featuretools) ![](https://img.shields.io/github/stars/alteryx/featuretools.svg?cacheSeconds=172800) - 一个用于自动化特征工程的开源框架。
* [FLAML](https://github.com/microsoft/FLAML) ![](https://img.shields.io/github/stars/microsoft/FLAML.svg?cacheSeconds=172800) - FLAML 是一个快速的自动机器学习与调优库。
* [HEBO](https://github.com/huawei-noah/hebo) ![](https://img.shields.io/github/stars/huawei-noah/hebo.svg?cacheSeconds=172800) - 一组开源超参数优化框架，其中包括 [NeurIPS 2020 黑盒优化挑战赛](https://bbochallenge.com/leaderboard)的获胜方案，并在超参数调优任务上进行了测试。
* [Katib](https://github.com/kubeflow/katib) ![](https://img.shields.io/github/stars/kubeflow/katib.svg?cacheSeconds=172800) - 一个基于 Kubernetes 的超参数调优与神经架构搜索系统。
* [keras-tuner](https://github.com/keras-team/keras-tuner) ![](https://img.shields.io/github/stars/keras-team/keras-tuner.svg?cacheSeconds=172800) - Keras Tuner 是一个易于使用、可分布式运行的超参数优化框架，旨在解决超参数搜索中的痛点。它让你能够轻松定义搜索空间，并利用内置算法找到最佳超参数值。
* [Optuna](https://github.com/optuna/optuna) ![](https://img.shields.io/github/stars/optuna/optuna.svg?cacheSeconds=172800) - Optuna 是一个自动化超参数优化软件框架，尤其适用于机器学习。
* [OSS Vizier](https://github.com/google/vizier) ![](https://img.shields.io/github/stars/google/vizier.svg?cacheSeconds=172800) - OSS Vizier 是一个基于 Python 的黑盒优化与研究服务，也是最早设计为可大规模运行的超参数调优服务之一。
* [Perpetual](https://github.com/perpetual-ml/perpetual) ![](https://img.shields.io/github/stars/perpetual-ml/perpetual.svg?cacheSeconds=172800) - 一种无需超参数优化的梯度提升机，可通过简单的预算参数控制模型复杂度。
* [TPOT](https://github.com/epistasislab/tpot) ![](https://img.shields.io/github/stars/epistasislab/tpot.svg?cacheSeconds=172800) - 自动创建 sklearn 流水线（包括特征选择、预处理器等）。
* [tsfresh](https://github.com/blue-yonder/tsfresh) ![](https://img.shields.io/github/stars/blue-yonder/tsfresh.svg?cacheSeconds=172800) - 自动从时间序列中提取相关特征。

## 计算与通信优化

* [Accelerate](https://github.com/huggingface/accelerate) ![](https://img.shields.io/github/stars/huggingface/accelerate.svg?cacheSeconds=172800) - Accelerate 仅对多 GPU/TPU 和混合精度相关的样板代码进行抽象，其余代码保持不变。
* [Adapters](https://github.com/adapter-hub/adapters) ![](https://img.shields.io/github/stars/adapter-hub/adapters.svg?cacheSeconds=172800) - Adapters 是一个统一的库，用于参数高效、模块化的迁移学习。
* [Cache-DiT](https://github.com/vipshop/cache-dit) ![](https://img.shields.io/github/stars/vipshop/cache-dit.svg?cacheSeconds=172800) - Cache-DiT 构建于 Diffusers 之上，支持几乎所有 DiT，提供混合缓存加速（DBCache、TaylorSeer、SCM 等）及全面的并行优化，包括上下文并行、张量并行和混合 2D/3D 并行，同时兼容编译、CPU 卸载和量化。
* [Colossal-AI](https://github.com/hpcaitech/ColossalAI) ![](https://img.shields.io/github/stars/hpcaitech/ColossalAI.svg?cacheSeconds=172800) - 面向大模型时代的统一深度学习系统，帮助用户高效、快速地部署大型 AI 模型训练与推理。
* [Composer](https://github.com/mosaicml/composer) ![](https://img.shields.io/github/stars/mosaicml/composer.svg?cacheSeconds=172800) - Composer 是一个 PyTorch 库，可帮助你以更快的速度、更低的成本和更高的精度训练神经网络。
* [CuDF](https://github.com/NVIDIA/cudf) ![](https://img.shields.io/github/stars/NVIDIA/cudf.svg?cacheSeconds=172800) - cuDF 基于 Apache Arrow 列式内存格式构建，是一个 GPU DataFrame 库，可用于加载、连接、聚合、筛选及以其他方式处理数据。
* [CuML](https://github.com/NVIDIA/cuml) ![](https://img.shields.io/github/stars/NVIDIA/cuml.svg?cacheSeconds=172800) - cuML 是一套实现机器学习算法和数学原语函数的库，其 API 与其他 RAPIDS 项目兼容。
* [CuPy](https://github.com/cupy/cupy) ![](https://img.shields.io/github/stars/cupy/cupy.svg?cacheSeconds=172800) - 在 CUDA 上实现与 NumPy 兼容的多维数组。CuPy 包含核心多维数组类 cupy.ndarray 及其众多操作函数。
* [DEAP](https://github.com/DEAP/deap) ![](https://img.shields.io/github/stars/DEAP/deap.svg?cacheSeconds=172800) - 一个新颖的进化计算框架，可用于快速原型设计和测试想法。它致力于使算法清晰明确、数据结构透明，并能与 multiprocessing、SCOOP 等并行化机制完美协作。
* [DeepEP](https://github.com/deepseek-ai/DeepEP) ![](https://img.shields.io/github/stars/deepseek-ai/DeepEP.svg?cacheSeconds=172800) - DeepEP 是专为混合专家（MoE）和专家并行（EP）设计的通信库，提供高吞吐、低延迟的全对全 GPU 内核，也称为 MoE 分发与合并。该库还支持包括 FP8 在内的低精度运算。
* [DGL](https://github.com/dmlc/dgl) ![](https://img.shields.io/github/stars/dmlc/dgl.svg?cacheSeconds=172800) - DGL 是一个易用、高性能且可扩展的 Python 包，用于图上的深度学习。
* [DLRover](https://github.com/intelligent-machine-learning/dlrover) ![](https://img.shields.io/github/stars/intelligent-machine-learning/dlrover.svg?cacheSeconds=172800) - DLRover 让大型 AI 模型的分布式训练变得简单、稳定、快速且节能。
* [Dask](https://github.com/dask/dask) ![](https://img.shields.io/github/stars/dask/dask.svg?cacheSeconds=172800) - 用于 Pandas 和 NumPy 计算的分布式并行处理框架。
* [DeepSpeed](https://github.com/deepspeedai/DeepSpeed) ![](https://img.shields.io/github/stars/deepspeedai/DeepSpeed.svg?cacheSeconds=172800) - DeepSpeed 是一个深度学习优化库，让分布式训练与推理变得简单、高效且实用。
* [FlagGems](https://github.com/flagos-ai/FlagGems) ![](https://img.shields.io/github/stars/flagos-ai/FlagGems.svg?cacheSeconds=172800) - FlagGems 是使用 OpenAI Triton 实现的高性能通用算子库。它基于一组与后端无关的内核，旨在加速多种硬件平台上的 LLM 训练与推理。
* [Flashlight](https://github.com/flashlight/flashlight) ![](https://img.shields.io/github/stars/flashlight/flashlight.svg?cacheSeconds=172800) - 一个完全使用 C++ 编写的快速、灵活的机器学习库，来自 Facebook AI Research 以及 Torch、TensorFlow、Eigen 和 Deep Speech 的创作者。
* [Flax](https://github.com/google/flax) ![](https://img.shields.io/github/stars/google/flax.svg?cacheSeconds=172800) - 为 JAX 设计的神经网络库及生态系统，注重灵活性。
* [GPUStack](https://github.com/gpustack/gpustack) ![](https://img.shields.io/github/stars/gpustack/gpustack.svg?cacheSeconds=172800) - GPUStack 是一个用于运行 AI 模型的开源 GPU 集群管理器。
* [Hivemind](https://github.com/learning-at-home/hivemind) ![](https://img.shields.io/github/stars/learning-at-home/hivemind.svg?cacheSeconds=172800) - 基于 PyTorch 的去中心化深度学习。
* [Jax](https://github.com/jax-ml/jax) ![](https://img.shields.io/github/stars/jax-ml/jax.svg?cacheSeconds=172800) - 对 Python+NumPy 程序进行可组合变换：微分、向量化、JIT 编译至 GPU/TPU 等。
* [Kompute](https://github.com/KomputeProject/kompute) ![](https://img.shields.io/github/stars/KomputeProject/kompute.svg?cacheSeconds=172800) - 快速、轻量且支持移动设备的 Vulkan 计算框架，针对高级 GPU 数据处理用例进行了优化。
* [Liger Kernel](https://github.com/linkedin/Liger-Kernel) ![](https://img.shields.io/github/stars/linkedin/Liger-Kernel.svg?cacheSeconds=172800) - Liger Kernel 是一组专为 LLM 训练设计的 Triton 内核。
* [LightGBM](https://github.com/lightgbm-org/LightGBM) ![](https://img.shields.io/github/stars/lightgbm-org/LightGBM.svg?cacheSeconds=172800) - LightGBM 是一种使用基于树的学习算法的梯度提升框架。
* [MLX](https://github.com/ml-explore/mlx) ![](https://img.shields.io/github/stars/ml-explore/mlx.svg?cacheSeconds=172800) - MLX 是一个面向 Apple 芯片机器学习的数组框架。
* [Modin](https://github.com/modin-project/modin) ![](https://img.shields.io/github/stars/modin-project/modin.svg?cacheSeconds=172800) - 只需更改一行代码，即可加速 Pandas 工作流。
* [NVIDIA TensorRT](https://github.com/NVIDIA/TensorRT) ![](https://img.shields.io/github/stars/NVIDIA/TensorRT.svg?cacheSeconds=172800) - TensorRT 是一个 C++ 库，用于在 NVIDIA GPU 和深度学习加速器上实现高性能推理。
* [Nevergrad](https://github.com/facebookresearch/nevergrad) ![](https://img.shields.io/github/stars/facebookresearch/nevergrad.svg?cacheSeconds=172800) - Nevergrad 是一个无梯度优化平台。
* [Norse](https://github.com/norse/norse) ![](https://img.shields.io/github/stars/norse/norse.svg?cacheSeconds=172800) - Norse 致力于发挥仿生神经组件的优势；这类组件具有稀疏、事件驱动的特点，与人工神经网络有本质区别。
* [Numba](https://github.com/numba/numba) ![](https://img.shields.io/github/stars/numba/numba.svg?cacheSeconds=172800)  - 用于 Python 数组和数值函数的编译器。
* [Optimum](https://github.com/huggingface/optimum) ![](https://img.shields.io/github/stars/huggingface/optimum.svg?cacheSeconds=172800) - Optimum 是 Transformers 和 Diffusers 的扩展，提供一系列优化工具，让模型能够在目标硬件上以最高效率进行训练和运行，同时保持易用性。
* [PEFT](https://github.com/huggingface/peft) ![](https://img.shields.io/github/stars/huggingface/peft.svg?cacheSeconds=172800) - 参数高效微调（PEFT）方法能够高效地将预训练语言模型（PLM）适配到各种下游应用，而无需微调模型的全部参数。
* [PaddlePaddle](https://github.com/PaddlePaddle/Paddle) ![](https://img.shields.io/github/stars/PaddlePaddle/Paddle.svg?cacheSeconds=172800) - PaddlePaddle 是一个用于大规模深度网络训练的框架，可使用分布在数百个节点上的数据源。
* [PyG](https://github.com/pyg-team/pytorch_geometric) ![](https://img.shields.io/github/stars/pyg-team/pytorch_geometric.svg?cacheSeconds=172800) - PyG（PyTorch Geometric）是一个基于 PyTorch 构建的库，可轻松编写和训练图神经网络（GNN），适用于各种结构化数据相关应用。
* [PyTorch Lightning](https://github.com/Lightning-AI/pytorch-lightning) ![](https://img.shields.io/github/stars/Lightning-AI/pytorch-lightning.svg?cacheSeconds=172800) - PyTorch Lightning 无需修改代码，即可在多块 GPU 和 TPU 上对 AI 模型进行预训练、微调和部署。
* [PyTorch](https://github.com/pytorch/pytorch) ![](https://img.shields.io/github/stars/pytorch/pytorch.svg?cacheSeconds=172800) - PyTorch 是一个用于开发和训练基于神经网络的深度学习模型的库。
* [Ray](https://github.com/ray-project/ray) ![](https://img.shields.io/github/stars/ray-project/ray.svg?cacheSeconds=172800) - Ray 是一个灵活、高性能的机器学习分布式执行框架。
* [SetFit](https://github.com/huggingface/setfit) ![](https://img.shields.io/github/stars/huggingface/setfit.svg?cacheSeconds=172800) - SetFit 是一个高效、无需提示的 Sentence Transformers 小样本微调框架。
* [Sonnet](https://github.com/google-deepmind/sonnet) ![](https://img.shields.io/github/stars/google-deepmind/sonnet.svg?cacheSeconds=172800) - Sonnet 是一个构建于 TensorFlow 2 之上的库，为机器学习研究提供简单、可组合的抽象。
* [Streaming](https://github.com/mosaicml/streaming) ![](https://img.shields.io/github/stars/mosaicml/streaming.svg?cacheSeconds=172800) - 用于高效神经网络训练的数据流库。
* [TensorFlow](https://github.com/tensorflow/tensorflow) ![](https://img.shields.io/github/stars/tensorflow/tensorflow.svg?cacheSeconds=172800) - TensorFlow 是一个领先的库，旨在开发和部署先进的机器学习应用。
* [ThunderKittens](https://github.com/HazyResearch/ThunderKittens) ![](https://img.shields.io/github/stars/HazyResearch/ThunderKittens.svg?cacheSeconds=172800) ThunderKittens 是一个框架，旨在让开发者能够轻松使用 CUDA 编写快速的深度学习内核。
* [TorchOpt](https://github.com/metaopt/torchopt) ![](https://img.shields.io/github/stars/metaopt/torchopt.svg?cacheSeconds=172800) - TorchOpt 是一个基于 PyTorch 构建的高效可微优化库。
* [Triton](https://github.com/triton-lang/triton) ![](https://img.shields.io/github/stars/triton-lang/triton.svg?cacheSeconds=172800) - Triton 是一种语言和编译器，用于编写高效的自定义深度学习原语。它旨在提供一个开源环境，让开发者能够以高于 CUDA 的生产效率编写快速代码，同时比其他现有 DSL 更灵活。
* [Vaex](https://github.com/vaexio/vaex) ![](https://img.shields.io/github/stars/vaexio/vaex.svg?cacheSeconds=172800) Vaex 是一个高性能 Python 库，用于惰性处理超出内存容量（Out-of-Core）的 DataFrame（类似 Pandas），以可视化和探索大型表格数据集。Vaex 通过内存映射、零内存复制策略和惰性计算实现最佳性能（不浪费内存）。
* [Vowpal Wabbit](https://github.com/VowpalWabbit/vowpal_wabbit) ![](https://img.shields.io/github/stars/VowpalWabbit/vowpal_wabbit.svg?cacheSeconds=172800) Vowpal Wabbit 是一个机器学习系统，通过在线学习、哈希、allreduce、归约、learning2search、主动学习和交互式学习等技术推动机器学习的前沿。
* [XGBoost](https://github.com/dmlc/xgboost) ![](https://img.shields.io/github/stars/dmlc/xgboost.svg?cacheSeconds=172800) - XGBoost 是一个经过优化的分布式梯度提升库，旨在实现高效率、灵活性和可移植性。
* [YDF](https://github.com/google/yggdrasil-decision-forests) ![](https://img.shields.io/github/stars/google/yggdrasil-decision-forests.svg?cacheSeconds=172800) - YDF（Yggdrasil Decision Forests）是一个用于训练、评估、解释和服务随机森林、梯度提升决策树、CART 与 Isolation Forest 模型的库。
* [bitsandbytes](https://github.com/bitsandbytes-foundation/bitsandbytes) ![](https://img.shields.io/github/stars/bitsandbytes-foundation/bitsandbytes.svg?cacheSeconds=172800) - Bitsandbytes 是一个轻量级 Python 封装库，封装了 CUDA 自定义函数，尤其包括 8 位优化器、矩阵乘法（LLM.int8()）以及 8 位和 4 位量化函数。
* [einops](https://github.com/arogozhnikov/einops) ![](https://img.shields.io/github/stars/arogozhnikov/einops.svg?cacheSeconds=172800) - 灵活而强大的张量操作，让代码更易读、更可靠。
* [scikit-learn](https://github.com/scikit-learn/scikit-learn) ![](https://img.shields.io/github/stars/scikit-learn/scikit-learn.svg?cacheSeconds=172800) - Scikit-learn 是一个功能强大的机器学习库，提供丰富的模块，可用于数据访问、数据准备和统计模型构建。
* [snnTorch](https://github.com/jeshraghian/snntorch) ![](https://img.shields.io/github/stars/jeshraghian/snntorch.svg?cacheSeconds=172800) - snnTorch 是一个使用脉冲神经网络进行深度学习和在线学习的库。
* [torchdistill](https://github.com/yoshitomo-matsubara/torchdistill) ![](https://img.shields.io/github/stars/yoshitomo-matsubara/torchdistill.svg?cacheSeconds=172800) - torchdistill 提供多种先进的知识蒸馏方法；你只需编辑声明式 YAML 配置文件（而非 Python 代码），即可设计新实验。
* [torchkeras](https://github.com/lyhue1991/torchkeras?tab=readme-ov-file) ![](https://img.shields.io/github/stars/lyhue1991/torchkeras?tab=readme-ov-file.svg?cacheSeconds=172800) torchkeras 是一个简单的工具，让你能够以 Keras 风格使用 PyTorch 训练神经网络。
* [veScale](https://github.com/volcengine/veScale) ![](https://img.shields.io/github/stars/volcengine/veScale.svg?cacheSeconds=172800) - veScale 是一个原生基于 PyTorch 的 LLM 训练框架。
* [yellowbrick](https://github.com/DistrictDataLabs/yellowbrick) ![](https://img.shields.io/github/stars/DistrictDataLabs/yellowbrick.svg?cacheSeconds=172800) - yellowbrick 是一个基于 matplotlib 的模型评估绘图库，适用于 scikit-learn 和其他机器学习库。

## 数据标注与合成
* [Argilla](https://github.com/argilla-io/argilla) ![](https://img.shields.io/github/stars/argilla-io/argilla.svg?cacheSeconds=172800) - Argilla 帮助领域专家和数据团队用更少时间构建更优质的 NLP 数据集。
* [cleanlab](https://github.com/cleanlab/cleanlab) ![](https://img.shields.io/github/stars/cleanlab/cleanlab.svg?cacheSeconds=172800) - 面向数据中心 AI 的 Python 库。可自动发现错误标注的数据、检测离群值、估算多标注者数据集中的共识度和标注者质量，并建议下一步最适合重新标注的数据。
* [COCO Annotator](https://github.com/jsbroks/coco-annotator) ![](https://img.shields.io/github/stars/jsbroks/coco-annotator.svg?cacheSeconds=172800) - 基于 Web 的图像分割工具，可用于目标检测、定位和关键点标注。
* [CVAT](https://github.com/cvat-ai/cvat) ![](https://img.shields.io/github/stars/cvat-ai/cvat.svg?cacheSeconds=172800) - CVAT（计算机视觉标注工具）是 OpenCV 的 Web 标注工具，可为计算机视觉算法标注视频和图像。
* [Doccano](https://github.com/doccano/doccano) ![](https://img.shields.io/github/stars/doccano/doccano.svg?cacheSeconds=172800) - 面向人工标注的开源文本标注工具，支持情感分析、命名实体识别和机器翻译。
* [Label Studio](https://github.com/HumanSignal/label-studio) ![](https://img.shields.io/github/stars/HumanSignal/label-studio.svg?cacheSeconds=172800) - 支持多个领域、具有标准化输出格式的数据标注工具。
* [LightlyStudio](https://github.com/lightly-ai/lightly-studio) ![](https://img.shields.io/github/stars/lightly-ai/lightly-studio.svg?cacheSeconds=172800) - 一个用于整理、标注和管理视觉数据集（图像和视频）的开源工具。支持基于嵌入的自动筛选、标注，以及边界框和分割任务的自动标签。
* [NeMo Curator](https://github.com/NVIDIA-NeMo/Curator) ![](https://img.shields.io/github/stars/NVIDIA-NeMo/Curator.svg?cacheSeconds=172800) - NeMo Curator 是一个 GPU 加速框架，可高效整理大型语言模型数据。
* [refinery](https://github.com/code-kern-ai/refinery) ![](https://img.shields.io/github/stars/code-kern-ai/refinery.svg?cacheSeconds=172800) - 数据科学家用于扩展、评估和维护自然语言数据的开源工具。
* [SDV](https://github.com/sdv-dev/SDV) ![](https://img.shields.io/github/stars/sdv-dev/SDV.svg?cacheSeconds=172800) - Synthetic Data Vault（SDV）是一个合成数据生成库生态系统，用户可轻松学习单表、多表和时间序列数据集，随后生成格式和统计特性与原始数据集相同的新合成数据。
* [Semantic Segmentation Editor](https://github.com/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) ![](https://img.shields.io/github/stars/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor.svg?cacheSeconds=172800) - 日立的开源工具，用于标注相机和激光雷达数据。
* [synthcity](https://github.com/vanderschaarlab/synthcity) ![](https://img.shields.io/github/stars/vanderschaarlab/synthcity.svg?cacheSeconds=172800) - synthcity 是一个用于生成和评估合成表格数据的库。
* [TabGAN](https://github.com/Diyago/Tabular-data-generation) ![](https://img.shields.io/github/stars/Diyago/Tabular-data-generation.svg?cacheSeconds=172800) - 使用 GAN（CTGAN）、扩散模型和 LLM 生成合成表格数据，并支持对抗式筛选、隐私指标和 sklearn 集成。
* [ViPE](https://github.com/nv-tlabs/vipe) ![](https://img.shields.io/github/stars/nv-tlabs/vipe.svg?cacheSeconds=172800) - ViPE 是一个空间 AI 工具，可从原始视频中标注相机姿态和稠密深度图。
* [YData Synthetic](https://github.com/Data-Centric-AI-Community/fg-data-synthetic) ![](https://img.shields.io/github/stars/Data-Centric-AI-Community/fg-data-synthetic.svg?cacheSeconds=172800) - YData Synthetic 是一个利用先进生成模型生成合成表格和时间序列数据的包。

## 数据流水线
* [Apache Airflow](https://github.com/apache/airflow) ![](https://img.shields.io/github/stars/apache/airflow.svg?cacheSeconds=172800) - 使用 Python 构建的数据流水线框架，包含调度器、DAG 定义和可视化界面。
* [Apache Nifi](https://github.com/apache/nifi) ![](https://img.shields.io/github/stars/apache/nifi.svg?cacheSeconds=172800) - Apache NiFi 专为数据流设计，支持高度可配置的有向图，用于数据路由、转换和系统中介逻辑。
* [Argo Workflows](https://github.com/argoproj/argo-workflows) ![](https://img.shields.io/github/stars/argoproj/argo-workflows.svg?cacheSeconds=172800) - Argo Workflows 是一个开源、容器原生的工作流引擎，用于编排 Kubernetes 上的并行作业。Argo Workflows 以 Kubernetes CRD（自定义资源定义）的形式实现。
* [Couler](https://github.com/couler-proj/couler) ![](https://img.shields.io/github/stars/couler-proj/couler.svg?cacheSeconds=172800) - 用于在不同工作流引擎（如 Argo Workflows、Tekton Pipelines 和 Apache Airflow）上构建和管理机器学习工作流的统一接口。
* [DataTrove](https://github.com/huggingface/datatrove) ![](https://img.shields.io/github/stars/huggingface/datatrove.svg?cacheSeconds=172800) - DataTrove 是一个用于超大规模文本数据处理、筛选和去重的库。
* [Dagster](https://github.com/dagster-io/dagster) ![](https://img.shields.io/github/stars/dagster-io/dagster.svg?cacheSeconds=172800) - 面向机器学习、分析和 ETL 的数据编排器。
* [DBT](https://github.com/dbt-labs/dbt) ![](https://img.shields.io/github/stars/dbt-labs/dbt.svg?cacheSeconds=172800) - 用于在数据仓库内运行转换的 ETL 工具。
* [Flyte](https://github.com/flyteorg/flyte) ![](https://img.shields.io/github/stars/flyteorg/flyte.svg?cacheSeconds=172800) - Lyft 的云原生机器学习与数据处理平台 - [(演示)](https://youtu.be/KdUJGSP1h9U?t=1451)。
* [Genie](https://github.com/Netflix/genie) ![](https://img.shields.io/github/stars/Netflix/genie.svg?cacheSeconds=172800) - 用于对接 Hadoop 系统并触发作业执行的作业编排引擎。
* [Hamilton](https://github.com/apache/hamilton) ![](https://img.shields.io/github/stars/apache/hamilton.svg?cacheSeconds=172800) - Hamilton 是一个用于定义数据流的微型编排框架。可在任何能运行 Python 的环境中运行（如 Jupyter、FastAPI、Spark、Ray、Dask）。无需额外学习即可遵循软件工程最佳实践。可用于定义特征工程转换、端到端模型流水线和 LLM 工作流。它与宏观编排系统（如 Kedro、Luigi、Airflow、dbt 等）互补，可替代这些系统宏任务内部的代码。它附带可自行托管的 UI，可捕获血缘与来源信息、执行遥测数据和数据摘要，并构建自动填充的目录；开发和生产环境均可使用。
* [Instill VDP](https://github.com/instill-ai/instill-core) ![](https://img.shields.io/github/stars/instill-ai/instill-core.svg?cacheSeconds=172800) - Instill VDP（多功能数据流水线）旨在简化从启动到完成的数据处理流水线。
* [Instructor](https://github.com/567-labs/instructor) ![](https://img.shields.io/github/stars/567-labs/instructor.svg?cacheSeconds=172800) - Instructor 让你能够轻松从 GPT-3.5、GPT-4、GPT-4-Vision 等 LLM 和开源模型获取 JSON 等结构化数据。
* [Kedro](https://github.com/kedro-org/kedro) ![](https://img.shields.io/github/stars/kedro-org/kedro.svg?cacheSeconds=172800) - Kedro 是一个工作流开发工具，可帮助你构建稳健、可扩展、可部署、可复现且有版本管理的数据流水线。
* [Luigi](https://github.com/spotify/luigi) ![](https://img.shields.io/github/stars/spotify/luigi.svg?cacheSeconds=172800) - Luigi 是一个 Python 模块，可帮助你构建复杂的批处理作业流水线，并处理依赖解析、工作流管理、可视化等。
* [Metaflow](https://github.com/Netflix/metaflow) ![](https://img.shields.io/github/stars/Netflix/metaflow.svg?cacheSeconds=172800) - 一个帮助数据科学家轻松构建和管理真实数据科学项目的框架。
* [Pachyderm](https://github.com/pachyderm/pachyderm) ![](https://img.shields.io/github/stars/pachyderm/pachyderm.svg?cacheSeconds=172800) - 一个基于 Kubernetes 构建的开源分布式处理框架，主要专注于动态构建生产级机器学习流水线 - [(视频)](https://www.youtube.com/watch?v=LamKVhe2RSM)。
* [Pixeltable](https://github.com/pixeltable/pixeltable) ![](https://img.shields.io/github/stars/pixeltable/pixeltable.svg?cacheSeconds=172800) 开源 Python 库，提供声明式、增量式数据基础设施，用于构建和管理多模态 AI 工作负载。
* [Prefect Core](https://github.com/PrefectHQ/prefect) ![](https://img.shields.io/github/stars/PrefectHQ/prefect.svg?cacheSeconds=172800) - 工作流管理系统，让你能够轻松为数据流水线添加重试、日志记录、动态映射、缓存、故障通知等语义。
* [SeqIO](https://github.com/google/seqio) ![](https://img.shields.io/github/stars/google/seqio.svg?cacheSeconds=172800) - SeqIO 是一个用于处理序列数据的库，这些数据将输入下游序列模型。
* [Snakemake](https://github.com/snakemake/snakemake) ![](https://img.shields.io/github/stars/snakemake/snakemake.svg?cacheSeconds=172800) - 用于可复现、可扩展数据分析的工作流管理系统。
* [Towhee](https://github.com/towhee-io/towhee) ![](https://img.shields.io/github/stars/towhee-io/towhee.svg?cacheSeconds=172800) - 通用机器学习流水线，可使用一个或多个机器学习模型生成嵌入向量。
* [unstructured](https://github.com/Unstructured-IO/unstructured) ![](https://img.shields.io/github/stars/Unstructured-IO/unstructured.svg?cacheSeconds=172800) - unstructured 简化并优化 LLM 的数据处理工作流，可摄取和预处理图像及 PDF、HTML、Word 文档等文本文件。
* [ZenML](https://github.com/zenml-io/zenml) ![](https://img.shields.io/github/stars/zenml-io/zenml.svg?cacheSeconds=172800) - ZenML 是一个可扩展的开源 MLOps 框架，用于创建可复现的 ML 流水线，重点支持自动化元数据跟踪、缓存以及与其他工具的丰富集成。

## 数据科学笔记本
* [Apache Zeppelin](https://github.com/apache/zeppelin) ![](https://img.shields.io/github/stars/apache/zeppelin.svg?cacheSeconds=172800) - 基于 Web 的笔记本，提供数据驱动、交互式数据分析环境，以及支持 SQL、Scala 等语言的协作文档。
* [Deepnote](https://github.com/deepnote/deepnote) ![](https://img.shields.io/github/stars/deepnote/deepnote.svg?cacheSeconds=172800) - Deepnote 是 Jupyter 的直接替代品，采用 AI 优先设计，提供简洁 UI、新型区块和原生数据集成。可在喜爱的 IDE 中本地使用 Python、R 和 SQL，然后扩展至 Deepnote 云，使用实时协作、Deepnote 代理和可部署的数据应用。
* [Jupyter Notebooks](https://github.com/jupyter/notebook) ![](https://img.shields.io/github/stars/jupyter/notebook.svg?cacheSeconds=172800) - 基于 Web 的 Python 沙盒笔记本环境，适用于可复现开发。
* [Marimo](https://github.com/marimo-team/marimo) ![](https://img.shields.io/github/stars/marimo-team/marimo.svg?cacheSeconds=172800) - 响应式 Python 笔记本——运行可复现实验、作为脚本执行、部署为应用，并通过 git 进行版本管理。
* [Papermill](https://github.com/nteract/papermill) ![](https://img.shields.io/github/stars/nteract/papermill.svg?cacheSeconds=172800) - Papermill 是一个用于为笔记本添加参数并像 Python 脚本一样执行它们的库。
* [Polynote](https://github.com/polynote/polynote) ![](https://img.shields.io/github/stars/polynote/polynote.svg?cacheSeconds=172800) - Polynote 是一个实验性的多语言笔记本环境。目前支持 Scala 和 Python（可搭配或不搭配 Spark）、SQL 和 Vega。
* [RMarkdown](https://github.com/rstudio/rmarkdown) ![](https://img.shields.io/github/stars/rstudio/rmarkdown.svg?cacheSeconds=172800) - rmarkdown 包是基于 Pandoc 的新一代 R Markdown 实现。
* [Stencila](https://github.com/stencila/stencila) ![](https://img.shields.io/github/stars/stencila/stencila.svg?cacheSeconds=172800) - Stencila 是一个用于创建、协作编辑和分享数据驱动内容的平台。这些内容透明且可复现。
* [Voilà](https://github.com/voila-dashboards/voila) ![](https://img.shields.io/github/stars/voila-dashboards/voila.svg?cacheSeconds=172800) - Voilà 可将 Jupyter 笔记本转换为独立 Web 应用，例如可用作仪表板。

## 数据存储优化
* [AIStore](https://github.com/NVIDIA/aistore) ![](https://img.shields.io/github/stars/NVIDIA/aistore.svg?cacheSeconds=172800) - AIStore 是一个轻量级对象存储系统，可随着每个新增存储节点线性扩展，并特别专注于拍字节级深度学习场景。
* [Alluxio](https://github.com/Alluxio/alluxio) ![](https://img.shields.io/github/stars/Alluxio/alluxio.svg?cacheSeconds=172800) - 一种虚拟分布式存储系统，用于弥合计算框架与存储系统之间的鸿沟。
* [Apache Arrow](https://github.com/apache/arrow) ![](https://img.shields.io/github/stars/apache/arrow.svg?cacheSeconds=172800) - 与 Pandas、基于 Hadoop 的系统等兼容的内存列式数据表示格式。
* [Apache Druid](https://github.com/apache/druid) ![](https://img.shields.io/github/stars/apache/druid.svg?cacheSeconds=172800) - 一个高性能实时分析数据库。可阅读这篇[文章](https://medium.com/data-science/introduction-to-druid-4bf285b92b5a)了解入门信息。
* [Apache Hudi](https://github.com/apache/hudi) ![](https://img.shields.io/github/stars/apache/hudi.svg?cacheSeconds=172800) - Hudi 是一个事务型数据湖平台，可将数据仓库和数据库的核心功能直接引入数据湖。Hudi 非常适合流式工作负载，也支持创建高效的增量批处理流水线。它支持 Spark、Flink、Presto、Trino、Hive 等主流查询引擎。更多信息[见此处](https://hudi.apache.org/)。
* [Apache Iceberg](https://github.com/apache/iceberg) ![](https://img.shields.io/github/stars/apache/iceberg.svg?cacheSeconds=172800) - Iceberg 是一种符合 ACID、高性能的格式，专为超大型分析表（包含数十 PB 数据）设计。它将 SQL 表的可靠性和简洁性带入大数据领域，同时支持 Spark、Trino、Flink、Presto、Hive 和 Impala 等引擎安全地同时操作同一张表。更多信息[见此处](https://iceberg.apache.org/)。
* [Apache Ignite](https://github.com/apache/ignite) ![](https://img.shields.io/github/stars/apache/ignite.svg?cacheSeconds=172800) - 以内存为中心的分布式数据库、缓存和处理平台，可为事务型、分析型和流式工作负载提供 PB 级内存速度 - [演示](https://www.youtube.com/watch?v=Xt4PWQ__YPw)。
* [Apache Parquet](https://github.com/apache/parquet-java) ![](https://img.shields.io/github/stars/apache/parquet-java.svg?cacheSeconds=172800) - 与 Pandas、基于 Hadoop 的系统等兼容的磁盘列式数据表示格式。
* [Apache Pinot](https://github.com/apache/pinot) ![](https://img.shields.io/github/stars/apache/pinot.svg?cacheSeconds=172800) - 一个实时分布式 OLAP 数据存储。关于 ClickHouse、Druid 和 Pinot 等开源大数据 OLAP 系统的比较[见此处](https://medium.com/@leventov/comparison-of-the-open-source-olap-systems-for-big-data-clickhouse-druid-and-pinot-8e042a5ed1c7)。
* [Casibase](https://github.com/the-open-agent/openagent) ![](https://img.shields.io/github/stars/the-open-agent/openagent.svg?cacheSeconds=172800) - Casibase 是一个类似 LangChain 的 RAG（检索增强生成）知识库，提供 Web UI 和企业单点登录。
* [Chroma](https://github.com/chroma-core/chroma) ![](https://img.shields.io/github/stars/chroma-core/chroma.svg?cacheSeconds=172800) - Chroma 是一个开源嵌入数据库。
* [ClickHouse](https://github.com/ClickHouse/ClickHouse) ![](https://img.shields.io/github/stars/ClickHouse/ClickHouse.svg?cacheSeconds=172800) - ClickHouse 是一个开源列式数据库管理系统。
* [Delta Lake](https://github.com/delta-io/delta) ![](https://img.shields.io/github/stars/delta-io/delta.svg?cacheSeconds=172800) - Delta Lake 是一个存储层，为 Apache Spark 和其他大数据引擎带来可扩展的 ACID 事务。
* [EdgeDB](https://github.com/geldata/gel) ![](https://img.shields.io/github/stars/geldata/gel.svg?cacheSeconds=172800) - Gel 通过现代数据模型、图查询、身份验证与 AI 解决方案等功能增强 Postgres。
* [GPTCache](https://github.com/zilliztech/GPTCache) ![](https://img.shields.io/github/stars/zilliztech/GPTCache.svg?cacheSeconds=172800) - GPTCache 是一个用于为大型语言模型查询创建语义缓存的库。
* [InfluxDB](https://github.com/influxdata/influxdb) ![](https://img.shields.io/github/stars/influxdata/influxdb.svg?cacheSeconds=172800) 可扩展的数据存储，用于存储指标、事件并进行实时分析。
* [Milvus](https://github.com/milvus-io/milvus) ![](https://img.shields.io/github/stars/milvus-io/milvus.svg?cacheSeconds=172800) Milvus 是一个云原生开源向量数据库，用于管理机器学习模型和神经网络生成的嵌入向量。
* [Marqo](https://github.com/marqo-ai/marqo) ![](https://img.shields.io/github/stars/marqo-ai/marqo.svg?cacheSeconds=172800) Marqo 是一个端到端向量搜索引擎。
* [pgvector](https://github.com/pgvector/pgvector) ![](https://img.shields.io/github/stars/pgvector/pgvector.svg?cacheSeconds=172800) pgvector 为 Postgres 提供向量相似性搜索功能。
* [PostgresML](https://github.com/postgresml/postgresml) ![](https://img.shields.io/github/stars/postgresml/postgresml.svg?cacheSeconds=172800) PostgresML 是 PostgreSQL 的机器学习扩展，可通过 SQL 查询对文本和表格数据进行训练和推理。
* [Redis](https://github.com/redis/redis) ![](https://img.shields.io/github/stars/redis/redis.svg?cacheSeconds=172800) Redis 是一个开源内存数据存储，支持向量相似性搜索，适用于语义搜索和推荐系统等 AI/ML 应用。
* [Safetensors](https://github.com/safetensors/safetensors) ![](https://img.shields.io/github/stars/safetensors/safetensors.svg?cacheSeconds=172800) 一种简单、安全的张量存储与分发方式。
* [TimescaleDB](https://github.com/timescale/timescaledb) ![](https://img.shields.io/github/stars/timescale/timescaledb.svg?cacheSeconds=172800) An open-source time-series SQL database optimized for fast ingest and complex queries packaged as a PostgreSQL extension - 开源时序 SQL 数据库，作为 PostgreSQL 扩展打包，针对快速写入和复杂查询进行了优化 - [(视频)](https://www.youtube.com/watch?v=zbjub8BQPyE)。
* [Weaviate](https://github.com/weaviate/weaviate) ![](https://img.shields.io/github/stars/weaviate/weaviate.svg?cacheSeconds=172800) - 一个低延迟向量搜索引擎（GraphQL、RESTful），开箱即支持多种媒体类型。其模块包括语义搜索、问答、分类、可定制模型（PyTorch/TensorFlow/Keras）等。
* [Zarr](https://github.com/zarr-developers/zarr-python) ![](https://img.shields.io/github/stars/zarr-developers/zarr-python.svg?cacheSeconds=172800) - 用于并行计算的分块压缩 N 维数组 Python 实现。

## 数据流处理
* [Apache Beam](https://github.com/apache/beam) ![](https://img.shields.io/github/stars/apache/beam.svg?cacheSeconds=172800) Apache Beam 是一个统一的批处理和流处理编程模型。
* [Apache Flink](https://github.com/apache/flink) ![](https://img.shields.io/github/stars/apache/flink.svg?cacheSeconds=172800) - 开源流处理框架，具备强大的流式和批处理能力。
* [Apache Kafka](https://github.com/apache/kafka) ![](https://img.shields.io/github/stars/apache/kafka.svg?cacheSeconds=172800) - Kafka 客户端库，用于构建输入和输出存储在 Kafka 集群中的应用与微服务。
* [Apache Samza](https://github.com/apache/samza) ![](https://img.shields.io/github/stars/apache/samza.svg?cacheSeconds=172800) - 分布式流处理框架。它使用 Apache Kafka 进行消息传递，并使用 Apache Hadoop YARN 提供容错、处理器隔离、安全和资源管理。
* [Apache Spark](https://github.com/apache/spark) ![](https://img.shields.io/github/stars/apache/spark.svg?cacheSeconds=172800) - 使用 Apache Spark 框架作为后端的流微批处理，支持有状态的精确一次语义。
* [Bytewax](https://github.com/bytewax/bytewax) ![](https://img.shields.io/github/stars/bytewax/bytewax.svg?cacheSeconds=172800) - 基于 Rust 引擎构建的灵活、以 Python 为中心的有状态流处理框架。
* [FastStream](https://github.com/ag2ai/faststream) ![](https://img.shields.io/github/stars/ag2ai/faststream.svg?cacheSeconds=172800) - 一种现代化、与消息代理无关的流式 Python 框架，支持 Apache Kafka、RabbitMQ 和 NATS 协议，受 FastAPI 启发，且易于与其他 Web 框架集成。
* [MOA](https://github.com/Waikato/moa) ![](https://img.shields.io/github/stars/Waikato/moa.svg?cacheSeconds=172800) - MOA（大规模在线分析）是一个用于大数据流挖掘的开源框架。
* [MosaicML Streaming](https://github.com/mosaicml/streaming) ![](https://img.shields.io/github/stars/mosaicml/streaming.svg?cacheSeconds=172800) - 从云存储快速、确定性地流式读取大型数据集，以支持分布式模型训练。
* [RisingWave](https://github.com/risingwavelabs/risingwave) ![](https://img.shields.io/github/stars/risingwavelabs/risingwave.svg?cacheSeconds=172800) - 一个分布式 SQL 流数据库，将流处理与低延迟服务相结合，非常适合构建和服务在线机器学习特征。
* [TensorStore](https://github.com/google/tensorstore) ![](https://img.shields.io/github/stars/google/tensorstore.svg?cacheSeconds=172800) - 用于读写大型多维数组的库。


## 部署与服务
* [Agenta](https://github.com/Agenta-AI/agenta) ![](https://img.shields.io/github/stars/Agenta-AI/agenta.svg?cacheSeconds=172800) - Agenta 为整个 LLMOps 工作流提供端到端工具：构建（LLM playground、评估）、部署（提示词和配置管理），以及观测与追踪。
* [AirLLM](https://github.com/lyogavin/airllm) ![](https://img.shields.io/github/stars/lyogavin/airllm.svg?cacheSeconds=172800) - AirLLM 优化推理内存用量，使 700 亿参数大型语言模型无需量化、蒸馏和剪枝，即可在单张 4GB GPU 上运行推理。
* [AITemplate](https://github.com/facebookincubator/AITemplate) ![](https://img.shields.io/github/stars/facebookincubator/AITemplate.svg?cacheSeconds=172800) - AITemplate（AIT）是一个 Python 框架，可将深度神经网络转换为 CUDA（NVIDIA GPU）/HIP（AMD GPU）C++ 代码，实现极速推理服务。
* [BentoML](https://github.com/bentoml/BentoML) ![](https://img.shields.io/github/stars/bentoml/BentoML.svg?cacheSeconds=172800) - BentoML 是一个用于高性能 ML 模型服务的开源框架。
* [Bifrost](https://github.com/maximhq/bifrost) ![](https://img.shields.io/github/stars/maximhq/bifrost.svg?cacheSeconds=172800) - AI 网关通过单一兼容 OpenAI 的 API 接入 23 多家 LLM 提供商，并提供自动故障切换、负载均衡、语义缓存、预算治理和 Prometheus 指标。
* [BISHENG](https://github.com/dataelement/bisheng) ![](https://img.shields.io/github/stars/dataelement/bisheng.svg?cacheSeconds=172800) - BISHENG 是一个开放的 LLM 应用开发运维平台，专注于企业场景。
* [CosmoEdge](https://github.com/cosmo-wander-ai/cosmo-edge) ![](https://img.shields.io/github/stars/cosmo-wander-ai/cosmo-edge.svg?cacheSeconds=172800) - 面向生产部署的 C++ 边缘视频 AI 引擎，结合 RTSP 接入、CV/VLM 推理、可视化编排、告警以及 Sophon 和 Rockchip NPU 上的事件分发。
* [DeepDetect](https://github.com/jolibrain/deepdetect) ![](https://img.shields.io/github/stars/jolibrain/deepdetect.svg?cacheSeconds=172800) - 使用 C++ 编写并由 Jolibrain 维护的机器学习生产服务器，支持 TensorFlow、XGBoost 和 Caffe 模型。
* [Dynamo](https://github.com/ai-dynamo/dynamo) ![](https://img.shields.io/github/stars/ai-dynamo/dynamo.svg?cacheSeconds=172800) - NVIDIA Dynamo 是一个高吞吐、低延迟的推理框架，专为多节点分布式环境中的生成式 AI 和推理模型服务而设计。
* [exo](https://github.com/exo-explore/exo) ![](https://img.shields.io/github/stars/exo-explore/exo.svg?cacheSeconds=172800) - exo 可帮助你在家中利用日常设备组建并运行 AI 集群。
* [Genkit](https://github.com/genkit-ai/genkit) ![](https://img.shields.io/github/stars/genkit-ai/genkit.svg?cacheSeconds=172800) - Genkit 是一个开源框架，使用熟悉的、以代码为中心的模式构建 AI 应用。它让 AI 功能的开发、集成和测试更加便捷，并支持可观测性和评估。
* [GoModel](https://github.com/ENTERPILOT/GoModel) ![](https://img.shields.io/github/stars/ENTERPILOT/GoModel.svg?cacheSeconds=172800) - GoModel 是一个使用 Go 编写、可自行托管的 AI 网关，通过统一的兼容 OpenAI API 接入 OpenAI、Anthropic、Gemini、Groq、xAI、Ollama 等提供商，并支持路由、用量跟踪、速率限制和防护机制。
* [Inference](https://github.com/roboflow/inference) ![](https://img.shields.io/github/stars/roboflow/inference.svg?cacheSeconds=172800) - 一个快速、可用于生产环境的计算机视觉推理服务器，支持部署多种热门模型架构和微调模型。借助 Inference，你可以通过 Docker 在自有硬件上部署 YOLOv5、YOLOv8、CLIP、SAM 和 CogVLM 等模型。
* [Infinity](https://github.com/michaelfeil/infinity) ![](https://img.shields.io/github/stars/michaelfeil/infinity.svg?cacheSeconds=172800) - Infinity 是一个高吞吐、低延迟 REST API，用于提供文本嵌入、重排序模型和 CLIP 服务。
* [LiteLLM](https://github.com/BerriAI/litellm) ![](https://img.shields.io/github/stars/BerriAI/litellm.svg?cacheSeconds=172800) - LiteLLM 是一个 Python SDK 和代理服务器（LLM 网关），可使用 OpenAI 格式调用 100 多种 LLM API，包括 Bedrock、Azure、OpenAI、VertexAI、Cohere、Anthropic、Sagemaker、HuggingFace、Replicate 和 Groq。
* [LiteRT](https://github.com/google-ai-edge/litert) ![](https://img.shields.io/github/stars/google-ai-edge/litert.svg?cacheSeconds=172800) - LiteRT（原 TensorFlow Lite）是 Google 的高性能设备端 AI 推理运行时，可将机器学习模型部署到移动、嵌入式和边缘设备。
* [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) ![](https://img.shields.io/github/stars/google-ai-edge/LiteRT-LM.svg?cacheSeconds=172800) - LiteRT-LM 是 Google 面向生产环境的高性能推理框架，可在边缘设备上部署大型语言模型，并支持 Android、iOS、Web、桌面和 IoT 等平台。
* [LitServe](https://github.com/Lightning-AI/LitServe) ![](https://img.shields.io/github/stars/Lightning-AI/LitServe.svg?cacheSeconds=172800) - LitServe 是一个基于 FastAPI 构建的灵活 AI 模型服务引擎。它支持模型、代理、多模态系统、RAG 和复杂 ML 流水线的自定义推理引擎。
* [jevos](https://github.com/feder-cr/jev) ![](https://img.shields.io/github/stars/feder-cr/jev.svg?cacheSeconds=172800) - jevOS 是 TypeSafe Jev 的开源替代方案，用于是/否决策：它是一个 10 亿参数二元分类器（GGUF、llama.cpp），通过兼容 Jev 的 FastAPI HTTP API 提供服务，可仅用 CPU 在笔记本电脑上运行。
* [Jina-serve](https://github.com/jina-ai/serve) ![](https://img.shields.io/github/stars/jina-ai/serve.svg?cacheSeconds=172800) - Jina-serve 是一个用于构建和部署 AI 服务的框架，服务之间可通过 gRPC、HTTP 和 WebSocket 通信。
* [Kiln](https://github.com/kiln-ai/kiln) ![](https://img.shields.io/github/stars/kiln-ai/kiln.svg?cacheSeconds=172800) - Kiln 是一个开源工具，用于微调 LLM 模型、生成合成数据并协作处理数据集。
* [KServe](https://github.com/kserve/kserve) ![](https://img.shields.io/github/stars/kserve/kserve.svg?cacheSeconds=172800) - KServe 提供一个 Kubernetes 自定义资源定义，用于机器学习预测和生成式模型服务。
* [KTransformers](https://github.com/kvcache-ai/ktransformers) ![](https://img.shields.io/github/stars/kvcache-ai/ktransformers.svg?cacheSeconds=172800) - KTransformers 是一个灵活的框架，可体验前沿 LLM 推理优化。
* [Langtrace](https://github.com/Scale3-Labs/langtrace) ![](https://img.shields.io/github/stars/Scale3-Labs/langtrace.svg?cacheSeconds=172800) - Langtrace 是一个基于 OpenTelemetry 的开源端到端 LLM 应用可观测性工具，为主流 LLM、LLM 框架、向量数据库等提供实时追踪、评估和指标。
* [Lepton AI](https://github.com/leptonai/leptonai) ![](https://img.shields.io/github/stars/leptonai/leptonai.svg?cacheSeconds=172800) - LeptonAI Python 库让你能够轻松使用 Python 代码构建 AI 服务。
* [LightLLM](https://github.com/ModelTC/lightllm) ![](https://img.shields.io/github/stars/ModelTC/lightllm.svg?cacheSeconds=172800) - LightLLM 是一个基于 Python 的大型语言模型（LLM）推理和服务框架，以轻量设计、易于扩展和高速性能见长。
* [llama.cpp](https://github.com/ggml-org/llama.cpp) ![](https://img.shields.io/github/stars/ggml-org/llama.cpp.svg?cacheSeconds=172800) - llama.cpp 是一个开源软件库，可对 Llama 等多种大型语言模型执行推理。
* [llmfit](https://github.com/AlexsJones/llmfit) ![](https://img.shields.io/github/stars/AlexsJones/llmfit.svg?cacheSeconds=172800) - 一个终端工具，可根据系统的 RAM、CPU 和 GPU 为 LLM 模型选择合适配置。它能检测硬件，并从质量、速度、适配度和上下文等维度为各模型评分，告诉你哪些模型能在你的机器上流畅运行。
* [LMCache](https://github.com/lmcache/lmcache) ![](https://img.shields.io/github/stars/lmcache/lmcache.svg?cacheSeconds=172800) - LMCache 是一个高性能 KV 缓存层，可加速 LLM 推理。
* [LMDeploy](https://github.com/internlm/lmdeploy) ![](https://img.shields.io/github/stars/internlm/lmdeploy.svg?cacheSeconds=172800) - LMDeploy 是一个用于压缩、部署和提供 LLM 服务的工具包。
* [LM Studio](https://github.com/lmstudio-ai/lms) ![](https://img.shields.io/github/stars/lmstudio-ai/lms.svg?cacheSeconds=172800) - LM Studio 是一个工具，可在本地计算机上部署 LLM 模型；只要满足最低要求，即使配置相对普通的设备也可以运行。
* [LocalAI](https://github.com/mudler/LocalAI) ![](https://img.shields.io/github/stars/mudler/LocalAI.svg?cacheSeconds=172800) - LocalAI 是一个可直接替换的 REST API，兼容 OpenAI API 规范，可在本地执行推理。
* [MindsDB](https://github.com/mindsdb/mindshub) ![](https://img.shields.io/github/stars/mindsdb/mindshub.svg?cacheSeconds=172800) - MindsDB 是一个平台，可直接基于数据库、向量存储和应用数据实时创建、提供和微调模型。
* [mini-sglang](https://github.com/sgl-project/mini-sglang) ![](https://img.shields.io/github/stars/sgl-project/mini-sglang.svg?cacheSeconds=172800) - mini-sglang 是一个轻量、高效的大型语言模型服务框架。
* [MLRun](https://github.com/mlrun/mlrun)![](https://img.shields.io/github/stars/mlrun/mlrun.svg?cacheSeconds=172800)- MLRun 是一个开放的 MLOps 框架，可快速构建和管理贯穿整个生命周期的持续机器学习与生成式 AI 应用。
* [MLServer](https://github.com/SeldonIO/mlserver) ![](https://img.shields.io/github/stars/SeldonIO/mlserver.svg?cacheSeconds=172800) - 一个机器学习模型推理服务器，支持多个框架、多模型服务等功能。
* [Model Runner](https://github.com/docker/model-runner) ![](https://img.shields.io/github/stars/docker/model-runner.svg?cacheSeconds=172800) - Docker Model Runner 可轻松使用 Docker 管理、运行和提供 AI 模型服务，支持从 Docker Hub 或任何符合 OCI 标准的注册表拉取 LLM 和其他 AI 模型。
* [Mosec](https://github.com/mosecorg/mosec) ![](https://img.shields.io/github/stars/mosecorg/mosec.svg?cacheSeconds=172800) - 一个由 Rust 驱动、支持多阶段流水线的模型服务器，提供动态批处理等功能。可轻松实现并部署为微服务。
* [nano-vllm](https://github.com/GeeeekExplorer/nano-vllm) ![](https://img.shields.io/github/stars/GeeeekExplorer/nano-vllm.svg?cacheSeconds=172800) - nano-vllm 是一个从头构建的轻量级 vLLM 实现，提供快速离线推理，并采用前缀缓存、张量并行和 CUDA graph 等优化技术。
* [nndeploy](https://github.com/nndeploy/nndeploy) ![](https://img.shields.io/github/stars/nndeploy/nndeploy.svg?cacheSeconds=172800) - 一个易用且高性能的 AI 部署框架。
* [Nuclio](https://github.com/nuclio/nuclio) ![](https://img.shields.io/github/stars/nuclio/nuclio.svg?cacheSeconds=172800) - 一个专注于数据、I/O 和计算密集型工作负载的高性能“无服务器”框架。它与 Jupyter 和 Kubeflow 等主流数据科学工具紧密集成，支持多种数据和流式数据源，并支持在 CPU 和 GPU 上执行。
* [OpenLLM](https://github.com/bentoml/OpenLLM) ![](https://img.shields.io/github/stars/bentoml/OpenLLM.svg?cacheSeconds=172800) - OpenLLM 让开发者只需一条命令，即可将任意开源 LLM（Llama 3.1、Qwen2、Phi3 等）或自定义模型作为兼容 OpenAI 的 API 运行。
* [OpenVINO](https://github.com/openvinotoolkit/openvino) ![](https://img.shields.io/github/stars/openvinotoolkit/openvino.svg?cacheSeconds=172800) - OpenVINO 是一个用于优化和部署 AI 推理的开源工具包。
* [Open WebUI](https://github.com/open-webui/open-webui) ![](https://img.shields.io/github/stars/open-webui/open-webui.svg?cacheSeconds=172800) - Open WebUI 是一个可扩展、功能丰富且易用的自托管 AI 平台，专为完全离线运行而设计。它支持 Ollama 等各种 LLM 运行器和兼容 OpenAI 的 API，并内置用于 RAG 的推理引擎，是强大的 AI 部署解决方案。
* [OptiLLM](https://github.com/algorithmicsuperintelligence/optillm) ![](https://img.shields.io/github/stars/algorithmicsuperintelligence/optillm.svg?cacheSeconds=172800) - OptiLLM 是一个兼容 OpenAI API 的推理优化代理，实现了 20 多种先进技术，可显著提升 LLM 在推理任务上的准确性和性能，无需训练或微调任何模型。
* [PowerInfer](https://github.com/Tiiny-AI/PowerInfer) ![](https://img.shields.io/github/stars/Tiiny-AI/PowerInfer.svg?cacheSeconds=172800) - PowerInfer 是一个利用激活局部性的 CPU/GPU LLM 推理引擎，面向你的设备进行优化。
* [Prompt2Model](https://github.com/neulab/prompt2model) ![](https://img.shields.io/github/stars/neulab/prompt2model.svg?cacheSeconds=172800) - Prompt2Model 是一个系统，可根据自然语言任务描述（例如 ChatGPT 等 LLM 使用的提示词）训练适合部署的小型专用模型。
* [RamaLama](https://github.com/containers/ramalama) ![](https://img.shields.io/github/stars/containers/ramalama.svg?cacheSeconds=172800) - RamaLama 是一个开源工具，通过 OCI 容器简化 AI 模型的本地推理与服务，无需配置主机系统。
* [RunAnywhere](https://github.com/RunanywhereAI/runanywhere-sdks) ![](https://img.shields.io/github/stars/RunanywhereAI/runanywhere-sdks.svg?cacheSeconds=172800) - RunAnywhere 是一个面向生产环境的 SDK，可在 iOS、Android、React Native 和 Flutter 设备端运行 AI 模型（LLM、语音转文本、文本转语音），从而打造私密、离线且快速的移动 AI 应用。
* [Seldon Core](https://github.com/SeldonIO/seldon-core) ![](https://img.shields.io/github/stars/SeldonIO/seldon-core.svg?cacheSeconds=172800) - 在 Kubernetes 上部署和运行机器学习模型的开源平台 - [(视频)](https://www.youtube.com/watch?v=pDlapGtecbY)。
* [SGLang](https://github.com/sgl-project/sglang) ![](https://img.shields.io/github/stars/sgl-project/sglang.svg?cacheSeconds=172800) - SGLang 是一个面向大型语言模型和视觉语言模型的快速服务框架。
* [SIE](https://github.com/superlinked/sie) ![](https://img.shields.io/github/stars/superlinked/sie.svg?style=social) - 开源推理服务器与生产集群，适用于嵌入、重排序和信息抽取。预配置 85 多个模型，涵盖稠密、稀疏、多向量、视觉、重排序和抽取模型。附带 Helm、KEDA 自动扩缩、Grafana 仪表板和 Terraform。
* [SkyPilot](https://github.com/skypilot-org/skypilot) ![](https://img.shields.io/github/stars/skypilot-org/skypilot.svg?cacheSeconds=172800) - SkyPilot 是一个可在任意云上运行 LLM、AI 和批处理作业的框架，提供最大限度的成本节省、充足的 GPU 可用性和托管执行。
* [Tensorflow Serving](https://github.com/tensorflow/serving) ![](https://img.shields.io/github/stars/tensorflow/serving.svg?cacheSeconds=172800) - 高性能框架，通过 gRPC 协议提供 TensorFlow 模型服务，每个核心每秒可处理 10 万个请求。
* [torchtune](https://github.com/meta-pytorch/torchtune) ![](https://img.shields.io/github/stars/meta-pytorch/torchtune.svg?cacheSeconds=172800) - torchtune 是一个 PyTorch 库，可轻松编写、后训练和试验 LLM。
* [Transformer Lab](https://github.com/transformerlab/transformerlab-app) ![](https://img.shields.io/github/stars/transformerlab/transformerlab-app.svg?cacheSeconds=172800) - Transformer Lab 是一个开源 LLM 工作空间，可在本地跨推理引擎和平台微调、评估、导出及测试模型。
* [Triton Inference Server](https://github.com/triton-inference-server/server) ![](https://img.shields.io/github/stars/triton-inference-server/server.svg?cacheSeconds=172800) - Triton 是一个高性能开源服务软件，可部署来自任意框架的 AI 模型并运行于 GPU 和 CPU，同时最大限度地提高利用率。
* [Vercel AI](https://github.com/vercel/ai) ![](https://img.shields.io/github/stars/vercel/ai.svg?cacheSeconds=172800) - Vercel AI 是一个 TypeScript 工具包，旨在帮助你使用 Next.js、React、Svelte、Vue 等主流框架以及 Node.js 等运行时构建 AI 应用。
* [Vespa](https://github.com/vespa-engine/vespa) ![](https://img.shields.io/github/stars/vespa-engine/vespa.svg?cacheSeconds=172800) - 在服务期间以任意规模搜索、推理并组织向量、张量、文本和结构化数据。
* [vLLM](https://github.com/vllm-project/vllm) ![](https://img.shields.io/github/stars/vllm-project/vllm.svg?cacheSeconds=172800) - vLLM 是一个高吞吐、内存高效的 LLM 推理与服务引擎。


## 评估与监控
* [AlpacaEval](https://github.com/tatsu-lab/alpaca_eval) ![](https://img.shields.io/github/stars/tatsu-lab/alpaca_eval.svg?cacheSeconds=172800) - AlpacaEval 是一个用于评估遵循指令语言模型的自动评估器。
* [ANN-Benchmarks](https://github.com/erikbern/ann-benchmarks) ![](https://img.shields.io/github/stars/erikbern/ann-benchmarks.svg?cacheSeconds=172800) - ANN-Benchmarks 是一个近似最近邻搜索算法的基准测试环境。
* [ARES](https://github.com/stanford-futuredata/ARES) ![](https://img.shields.io/github/stars/stanford-futuredata/ARES.svg?cacheSeconds=172800) - ARES 是一个自动评估检索增强生成（RAG）模型的框架。
* [BEIR](https://github.com/beir-cellar/beir) ![](https://img.shields.io/github/stars/beir-cellar/beir.svg?cacheSeconds=172800) - BEIR 是一个包含多种信息检索任务的异构基准。它还提供统一、易用的框架，可在该基准内评估基于 NLP 的检索模型。
* [Code Generation LM Evaluation Harness](https://github.com/bigcode-project/bigcode-evaluation-harness) ![](https://img.shields.io/github/stars/bigcode-project/bigcode-evaluation-harness.svg?cacheSeconds=172800) - Code Generation LM Evaluation Harness 是一个用于评估代码生成模型的框架。
* [COMET](https://github.com/Unbabel/COMET) ![](https://img.shields.io/github/stars/Unbabel/COMET.svg?cacheSeconds=172800) - COMET 是一个开源机器学习评估框架。
* [C-Eval](https://github.com/hkust-nlp/ceval) ![](https://img.shields.io/github/stars/hkust-nlp/ceval.svg?cacheSeconds=172800) - C-Eval 是一个面向基础模型的综合中文评测套件。
* [Deepchecks](https://github.com/deepchecks/deepchecks) ![](https://img.shields.io/github/stars/deepchecks/deepchecks.svg?cacheSeconds=172800) - Deepchecks 是一个满足各种 AI 与 ML 验证需求的全面开源解决方案，可全面测试从研究到生产阶段的数据和模型。
* [DeepEval](https://github.com/confident-ai/deepeval) ![](https://img.shields.io/github/stars/confident-ai/deepeval.svg?cacheSeconds=172800) - DeepEval 是一个简单易用的 LLM 应用开源评估框架。
* [EvalAI](https://github.com/Cloud-CV/EvalAI) ![](https://img.shields.io/github/stars/Cloud-CV/EvalAI.svg?cacheSeconds=172800) - EvalAI 是一个开源平台，可大规模评估和比较 AI 算法。
* [Evalchemy](https://github.com/mlfoundations/evalchemy) ![](https://img.shields.io/github/stars/mlfoundations/evalchemy.svg?cacheSeconds=172800) - Evalchemy 是一个统一、易用的后训练语言模型评估工具包。
* [EvalPlus](https://github.com/evalplus/evalplus) ![](https://img.shields.io/github/stars/evalplus/evalplus.svg?cacheSeconds=172800) - EvalPlus 是一个稳健的 LLM4Code 评估框架，包含扩展版 HumanEval+ 和 MBPP+ 基准、效率评估（EvalPerf）以及安全且可扩展的评估工具包。
* [Evals](https://github.com/openai/evals) ![](https://img.shields.io/github/stars/openai/evals.svg?cacheSeconds=172800) - Evals 是一个用于评估 OpenAI 模型的框架，也是一个开源基准注册库。
* [EvalScope](https://github.com/modelscope/evalscope) ![](https://img.shields.io/github/stars/modelscope/evalscope.svg?cacheSeconds=172800) - EvalScope 是一个精简且可定制的框架，用于高效的大模型评估和性能基准测试。
* [Evaluate](https://github.com/huggingface/evaluate) ![](https://img.shields.io/github/stars/huggingface/evaluate.svg?cacheSeconds=172800) - Evaluate 是一个库，可让模型评估、比较和性能报告更加轻松、规范。
* [Evidently](https://github.com/evidentlyai/evidently) ![](https://img.shields.io/github/stars/evidentlyai/evidently.svg?cacheSeconds=172800) - Evidently 是一个开源框架，用于评估、测试和监控 ML 与 LLM 驱动的系统。
* [Future AGI](https://github.com/future-agi/future-agi) ![](https://img.shields.io/github/stars/future-agi/future-agi.svg?cacheSeconds=172800) - 开源、可自行托管的端到端智能体工程与优化平台，整合了追踪、评估、模拟、数据集、网关和防护机制，适用于 LLM 和 AI 智能体应用。
* [GAOKAO-Bench](https://github.com/OpenLMLab/GAOKAO-Bench) ![](https://img.shields.io/github/stars/OpenLMLab/GAOKAO-Bench.svg?cacheSeconds=172800) - GAOKAO-Bench 是一个评估框架，使用中国普通高等学校招生全国统一考试（高考）题目作为数据集，评估大模型的语言理解与逻辑推理能力。
* [Giskard](https://github.com/Giskard-AI/giskard-oss)![](https://img.shields.io/github/stars/Giskard-AI/giskard-oss.svg?cacheSeconds=172800) - Giskard 是一个开源 Python 库，可自动检测 AI 应用中的性能、偏见和安全问题。
* [guidellm](https://github.com/vllm-project/guidellm) ![](https://img.shields.io/github/stars/vllm-project/guidellm.svg?cacheSeconds=172800) - guidellm 是一个面向大型语言模型推理系统的基准测试与性能评估工具。
* [Harbor](https://github.com/harbor-framework/harbor) ![](https://img.shields.io/github/stars/harbor-framework/harbor.svg?cacheSeconds=172800) - Harbor 是一个用于评估和优化智能体与语言模型的框架，支持在容器环境中并行开展实验，并内置基准与环境管理功能。
* [HumanEval](https://github.com/openai/human-eval)![](https://img.shields.io/github/stars/openai/human-eval.svg?cacheSeconds=172800) - HumanEval 是一个基准测试，使用带有单元测试的 Python 编程题评估代码生成模型的功能正确性。
* [Helicone](https://github.com/Helicone/helicone) ![](https://img.shields.io/github/stars/Helicone/helicone.svg?cacheSeconds=172800) - Helicone 是一个一体化开源 LLM 开发者平台。
* [HELM](https://github.com/stanford-crfm/helm) ![](https://img.shields.io/github/stars/stanford-crfm/helm.svg?cacheSeconds=172800) - HELM（语言模型整体评估）提供全面评估语言模型的工具，包括标准化数据集、面向多种模型的统一 API、多样化指标、r、公平性扰动、提示词构建框架，以及统一模型访问的代理服务器。
* [Inspect](https://github.com/UKGovernmentBEIS/inspect_ai) ![](https://img.shields.io/github/stars/UKGovernmentBEIS/inspect_ai.svg?cacheSeconds=172800) - Inspect 是一个用于大型语言模型评估的框架。
* [IsaacLab-Arena](https://github.com/isaac-sim/IsaacLab-Arena) ![](https://img.shields.io/github/stars/isaac-sim/IsaacLab-Arena.svg?cacheSeconds=172800) - IsaacLab-Arena 是 NVIDIA Isaac Lab 的开源扩展，用于可组合环境构建和大规模机器人策略评估。
* [JiWER](https://github.com/jitsi/jiwer) ![](https://img.shields.io/github/stars/jitsi/jiwer.svg?cacheSeconds=172800) - JiWER 是一个简单快速的 Python 包，用于评估自动语音识别系统。
* [Laminar](https://github.com/lmnr-ai/lmnr) ![](https://img.shields.io/github/stars/lmnr-ai/lmnr.svg?cacheSeconds=172800) - Laminar 是一个开源平台，用于追踪、评估、标注和分析 AI 产品的 LLM 数据。
* [Langfuse](https://github.com/langfuse/langfuse) ![](https://img.shields.io/github/stars/langfuse/langfuse.svg?cacheSeconds=172800) - Langfuse 是一个面向基于 LLM 应用的可观测性与分析解决方案。
* [LangTest](https://github.com/PacificAI/langtest) ![](https://img.shields.io/github/stars/PacificAI/langtest.svg?cacheSeconds=172800) - LangTest 是一个全面的 NLP 模型评估工具包。
* [Language Model Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) ![](https://img.shields.io/github/stars/EleutherAI/lm-evaluation-harness.svg?cacheSeconds=172800) - Language Model Evaluation Harness 是一个框架，可在大量不同评估任务上测试生成式语言模型。
* [LangWatch](https://github.com/langwatch/langwatch) ![](https://img.shields.io/github/stars/langwatch/langwatch.svg?cacheSeconds=172800) - LangWatch 是一个面向 DSPy 的可视化界面，也是一个完整的 LLM Ops 平台，用于监控、试验、衡量和改进 LLM 流水线，并采用公平代码分发模式。
* [Latitude](https://github.com/latitude-dev/latitude-llm) ![](https://img.shields.io/github/stars/latitude-dev/latitude-llm.svg?cacheSeconds=172800) - Latitude 是一个开源 AI 智能体可观测性平台，提供语义追踪搜索和问题跟踪。
* [LightEval](https://github.com/huggingface/lighteval) ![](https://img.shields.io/github/stars/huggingface/lighteval.svg?cacheSeconds=172800) - LightEval 是一个轻量级 LLM 评估套件。
* [lmms-eval](https://github.com/EvolvingLMMs-Lab/lmms-eval) ![](https://img.shields.io/github/stars/EvolvingLMMs-Lab/lmms-eval.svg?cacheSeconds=172800) - lmms-eval 是一个精心打造的评估框架，用于一致、高效地评估大型多模态模型（LMM）。
* [Melting Pot](https://github.com/google-deepmind/meltingpot) ![](https://img.shields.io/github/stars/google-deepmind/meltingpot.svg?cacheSeconds=172800) - Melting Pot 是一套用于多智能体强化学习的测试场景。
* [Meta-World](https://github.com/Farama-Foundation/Metaworld) ![](https://img.shields.io/github/stars/Farama-Foundation/Metaworld.svg?cacheSeconds=172800) - Meta-World 是一个开源模拟基准，用于元强化学习和多任务学习，包含 50 种不同的机器人操作任务。
* [mir_eval](https://github.com/mir-evaluation/mir_eval) ![](https://img.shields.io/github/stars/mir-evaluation/mir_eval.svg?cacheSeconds=172800) - mir_eval 是一个 Python 库，为评估音乐信息检索系统提供透明、标准化且简单直接的方法。
* [MLPerf Inference](https://github.com/mlcommons/inference) ![](https://img.shields.io/github/stars/mlcommons/inference.svg?cacheSeconds=172800) - MLPerf Inference 是一个基准测试套件，用于衡量系统在多种部署场景下运行模型的速度。
* [Massive Text Embedding Benchmark](https://github.com/mlcommons/inference) ![](https://img.shields.io/github/stars/mlcommons/inference.svg?cacheSeconds=172800) - Massive Text Embedding Benchmark（MTEB）是一个综合评估框架，可评估文本嵌入模型在多种任务和语言上的表现，涵盖 8 类嵌入任务、58 个数据集和 112 种语言。
* [NannyML](https://github.com/NannyML/nannyml) ![](https://img.shields.io/github/stars/NannyML/nannyml.svg?cacheSeconds=172800) - NannyML 是一个库，可在无法访问目标值的情况下估算部署后模型性能、检测数据漂移，并将数据漂移告警与模型性能变化智能关联。
* [OGB](https://github.com/snap-stanford/ogb) ![](https://img.shields.io/github/stars/snap-stanford/ogb.svg?cacheSeconds=172800) - Open Graph Benchmark（OGB）是一组图机器学习基准数据集、数据加载器和评估器。
* [Ollama Grid Search](https://github.com/dezoito/ollama-grid-search) ![](https://img.shields.io/github/stars/dezoito/ollama-grid-search.svg?cacheSeconds=172800) - Ollama Grid Search 可自动为特定用例选择最佳模型、提示词或推理参数，让你能够遍历各种组合并直观检查结果。
* [onWatch](https://github.com/onllm-dev/onwatch) ![](https://img.shields.io/github/stars/onllm-dev/onwatch.svg?cacheSeconds=172800) - onWatch 是一个轻量级 Go 命令行工具，可实时追踪多个提供商（Anthropic Pro/Max Plans、Codex、Gemini CLI、Synthetic、Z.ai、GitHub Copilot、MiniMax Coding/Token Plan、Antigravity、OpenRouter）的 AI API 配额用量，并提供消耗速率预测、历史用量图表和按周期跟踪。
* [OpenCompass](https://github.com/open-compass/OpenCompass) ![](https://img.shields.io/github/stars/open-compass/OpenCompass.svg?cacheSeconds=172800) - OpenCompass 是一个 LLM 评估平台，支持在 50 多个数据集上评测广泛的模型（LLaMA、LLaMa2、ChatGLM2、ChatGPT、Claude 等）。
* [OpenLIT](https://github.com/openlit/openlit) ![](https://img.shields.io/github/stars/openlit/openlit.svg?cacheSeconds=172800) - OpenLIT 是一个开源 AI 工程平台，通过可观测性、监控、防护机制、评估和无缝集成简化 LLM 工作流。
* [OpenLLMetry](https://github.com/traceloop/openllmetry) ![](https://img.shields.io/github/stars/traceloop/openllmetry.svg?cacheSeconds=172800) - OpenLLMetry 通过性能监控、执行追踪和调试功能，为开发者深入洞察大型语言模型应用。
* [Opik](https://github.com/comet-ml/opik) ![](https://img.shields.io/github/stars/comet-ml/opik.svg?cacheSeconds=172800) - Opik 是一个开源平台，用于评估、测试和监控 LLM 应用。
* [Overcooked-AI](https://github.com/HumanCompatibleAI/overcooked_ai) ![](https://img.shields.io/github/stars/HumanCompatibleAI/overcooked_ai.svg?cacheSeconds=172800) - Overcooked-AI 是一个完全合作式人类与 AI 任务表现的基准环境，基于广受欢迎的电子游戏 Overcooked。
* [Phoenix](https://github.com/Arize-ai/phoenix) ![](https://img.shields.io/github/stars/Arize-ai/phoenix.svg?cacheSeconds=172800) - Phoenix 是一个开源 AI 可观测性平台，专为实验、评估和故障排查而设计。
* [Promptfoo](https://github.com/promptfoo/promptfoo) ![](https://img.shields.io/github/stars/promptfoo/promptfoo.svg?cacheSeconds=172800) - LLM 红队测试和评估框架，用于测试越狱、提示词注入及其他漏洞，并集成 CI/CD。
* [Prometheus-Eval](https://github.com/prometheus-eval/prometheus-eval) ![](https://img.shields.io/github/stars/prometheus-eval/prometheus-eval.svg?cacheSeconds=172800) - RagaAI Catalyst 是一个综合平台，旨在增强 LLM 项目的管理与优化。
* [RagaAI Catalyst](https://github.com/raga-ai-hub/RagaAI-Catalyst) ![](https://img.shields.io/github/stars/raga-ai-hub/RagaAI-Catalyst.svg?cacheSeconds=172800) - Prometheus-Eval 是一组工具，用于训练、评估和使用专门用于评估其他语言模型的语言模型。
* [Ragas](https://github.com/vibrantlabsai/ragas) ![](https://img.shields.io/github/stars/vibrantlabsai/ragas.svg?cacheSeconds=172800) - Ragas 是一个用于评估 RAG 流水线的框架。
* [RewardBench](https://github.com/allenai/reward-bench) ![](https://img.shields.io/github/stars/allenai/reward-bench.svg?cacheSeconds=172800) - RewardBench 是一个基准测试，旨在评估奖励模型的能力与安全性。
* [RLBench](https://github.com/stepjam/RLBench) ![](https://img.shields.io/github/stars/stepjam/RLBench.svg?cacheSeconds=172800) - RLBench 是一个雄心勃勃的大规模基准和学习环境，旨在推动多个视觉引导操作研究领域的发展，包括强化学习、模仿学习、多任务学习、几何计算机视觉，尤其是小样本学习。
* [SimplerEnv](https://github.com/simpler-env/SimplerEnv) ![](https://img.shields.io/github/stars/simpler-env/SimplerEnv.svg?cacheSeconds=172800) - SimplerEnv 是一个模拟操作策略评估环境，用于真实机器人设置。
* [SwanLab](https://github.com/SwanHubX/SwanLab) ![](https://img.shields.io/github/stars/SwanHubX/SwanLab.svg?cacheSeconds=172800) - SwanLab 是一个 AI 训练跟踪与可视化工具。
* [Speech-to-Text Benchmark](https://github.com/Picovoice/speech-to-text-benchmark) ![](https://img.shields.io/github/stars/Picovoice/speech-to-text-benchmark.svg?cacheSeconds=172800) - Speech-to-Text Benchmark 是一个简约且可扩展的框架，用于对不同语音转文本引擎进行基准测试。
* [TensorFlow Model Analysis](https://github.com/tensorflow/model-analysis) ![](https://img.shields.io/github/stars/tensorflow/model-analysis.svg?cacheSeconds=172800) - TensorFlow Model Analysis（TFMA）是一个库，可使用训练器中定义的相同指标，以分布式方式在大量数据上评估 TensorFlow 模型。
* [TorchBench](https://github.com/pytorch/benchmark) ![](https://img.shields.io/github/stars/pytorch/benchmark.svg?cacheSeconds=172800) - TorchBench 是一组用于评估 PyTorch 性能的开源基准测试。
* [TruLens](https://github.com/truera/trulens) ![](https://img.shields.io/github/stars/truera/trulens.svg?cacheSeconds=172800) - TruLens 提供一组工具，用于评估和跟踪 LLM 实验。
* [TrustLLM](https://github.com/HowieHwong/TrustLLM) ![](https://img.shields.io/github/stars/HowieHwong/TrustLLM.svg?cacheSeconds=172800) - TrustLLM 是一个全面的框架，用于评估大型语言模型的可信度，包含原则、调查和基准测试。
* [VBench](https://github.com/Vchitect/VBench) ![](https://img.shields.io/github/stars/Vchitect/VBench.svg?cacheSeconds=172800) - VBench 是一套用于视频生成模型的综合基准测试。
* [VLMEvalKit](https://github.com/open-compass/VLMEvalKit) ![](https://img.shields.io/github/stars/open-compass/VLMEvalKit.svg?cacheSeconds=172800) - VLMEvalKit 是一个开源工具包，用于评估大型视觉语言模型（LVLM）。

## 可解释性与公平性
* [Aequitas](https://github.com/dssg/aequitas) ![](https://img.shields.io/github/stars/dssg/aequitas.svg?cacheSeconds=172800) - 一个开源偏见审计工具包，供数据科学家、机器学习研究人员和政策制定者审计机器学习模型中的歧视与偏见，并据此对预测风险评估工具的开发和部署做出知情且公平的决策。
* [AI Explainability 360](https://github.com/Trusted-AI/AIX360) ![](https://img.shields.io/github/stars/Trusted-AI/AIX360.svg?cacheSeconds=172800) - 用于解释数据和机器学习模型的可解释性工具，包括一套全面的算法，覆盖多种解释维度及代理可解释性指标。
* [AI Fairness 360](https://github.com/Trusted-AI/AIF360) ![](https://img.shields.io/github/stars/Trusted-AI/AIF360.svg?cacheSeconds=172800) - 为数据集和机器学习模型提供全面的公平性指标及指标说明，并提供减轻数据集和模型偏见的算法。
* [Alibi](https://github.com/SeldonIO/alibi) ![](https://img.shields.io/github/stars/SeldonIO/alibi.svg?cacheSeconds=172800) - Alibi 是一个开源 Python 库，旨在检查和解释机器学习模型。该库最初专注于黑盒、基于实例的模型解释。
* [captum](https://github.com/meta-pytorch/captum) ![](https://img.shields.io/github/stars/meta-pytorch/captum.svg?cacheSeconds=172800) - 由 Facebook 开发的 PyTorch 模型可解释性与理解库。它为 PyTorch 模型提供积分梯度、显著性图、SmoothGrad、VarGrad 等通用实现。
* [Fairlearn](https://github.com/fairlearn/fairlearn) ![](https://img.shields.io/github/stars/fairlearn/fairlearn.svg?cacheSeconds=172800) - Fairlearn 是一个 Python 工具包，用于评估并缓解机器学习模型中的不公平现象。
* [InterpretML](https://github.com/interpretml/interpret) ![](https://img.shields.io/github/stars/interpretml/interpret.svg?cacheSeconds=172800) - InterpretML 是一个开源包，用于训练可解释模型并解释黑盒系统。
* [Lightly](https://github.com/lightly-ai/lightly) ![](https://img.shields.io/github/stars/lightly-ai/lightly.svg?cacheSeconds=172800) - 一个用于图像自监督学习的 Python 框架。学习到的表示可用于分析无标签数据的分布并重新平衡数据集。
* [LOFO Importance](https://github.com/aerdem4/lofo-importance) ![](https://img.shields.io/github/stars/aerdem4/lofo-importance.svg?cacheSeconds=172800) - LOFO（逐个特征剔除）重要性根据选定指标，计算所选模型的一组特征的重要性：它会逐一移除特征，并根据所选指标和验证方案评估模型性能。
* [mljar-supervised](https://github.com/mljar/mljar-supervised) ![](https://img.shields.io/github/stars/mljar/mljar-supervised.svg?cacheSeconds=172800) - 一个用于表格数据 AutoML 的 Python 包，支持特征工程、超参数调优、解释和自动文档生成。
* [Quantus](https://github.com/understandable-machine-intelligence-lab/Quantus) ![](https://img.shields.io/github/stars/understandable-machine-intelligence-lab/Quantus.svg?cacheSeconds=172800) - Quantus 是一个用于负责任地评估神经网络解释的可解释 AI 工具包。
* [SHAP](https://github.com/shap/shap) ![](https://img.shields.io/github/stars/shap/shap.svg?cacheSeconds=172800) - SHapley Additive exPlanations 是一种统一方法，用于解释任意机器学习模型的输出。
* [SHAPash](https://github.com/MAIF/shapash) ![](https://img.shields.io/github/stars/MAIF/shapash.svg?cacheSeconds=172800) - Shapash 是一个 Python 库，提供多种可视化形式，并使用人人都能理解的明确标签。
* [WhatIf](https://github.com/pair-code/what-if-tool) ![](https://img.shields.io/github/stars/pair-code/what-if-tool.svg?cacheSeconds=172800) - 一个易用界面，帮助用户加深对黑盒分类或回归机器学习模型的理解。

## 特征存储
* [FEAST](https://github.com/feast-dev/feast)  ![](https://img.shields.io/github/stars/feast-dev/feast.svg?cacheSeconds=172800) - Feast（特征存储）是一个面向机器学习的开源特征存储。它能以最快捷的方式利用现有基础设施，将分析数据投入生产，用于模型训练和在线推理。
* [Featureform](https://github.com/featureform/featureform) ![](https://img.shields.io/github/stars/featureform/featureform.svg?cacheSeconds=172800) - 一个虚拟特征存储，可即插即用地接入现有基础设施，深受数据科学家认可。只需 pip install，即可使用发现、治理、血缘跟踪和协作功能。支持 pandas、Python、Spark、SQL，并集成主流云服务商。
* [Hopsworks Feature Store](https://github.com/logicalclocks/feature-store-api) ![](https://img.shields.io/github/stars/logicalclocks/feature-store-api.svg?cacheSeconds=172800) - 面向 ML 的离线/在线特征存储 [(视频)](https://www.youtube.com/watch?v=N1BjPk1smdg)。

## 工业级异常检测
* [Alibi Detect](https://github.com/SeldonIO/alibi-detect) ![](https://img.shields.io/github/stars/SeldonIO/alibi-detect.svg?cacheSeconds=172800) - alibi-detect 是一个 Python 包，专注于离群点、对抗样本和概念漂移检测。
* [Darts](https://github.com/unit8co/darts) ![](https://img.shields.io/github/stars/unit8co/darts.svg?cacheSeconds=172800) - Darts 是一个易用的时间序列预测与异常检测库。
* [Deequ](https://github.com/awslabs/deequ) ![](https://img.shields.io/github/stars/awslabs/deequ.svg?cacheSeconds=172800) - 一个构建于 Apache Spark 之上的库，用于定义“数据单元测试”，以衡量大型数据集的数据质量。
* [PyOD](https://github.com/yzhao062/pyod) ![](https://img.shields.io/github/stars/yzhao062/pyod.svg?cacheSeconds=172800) - 一个用于可扩展离群点检测（异常检测）的 Python 工具箱。
* [TFDV](https://github.com/tensorflow/data-validation) ![](https://img.shields.io/github/stars/tensorflow/data-validation.svg?cacheSeconds=172800) - TFDV（TensorFlow Data Validation）是一个用于探索和验证机器学习数据的库。

## 工业级计算机视觉
* [CameraTraps](https://github.com/microsoft/Biodiversity) ![](https://img.shields.io/github/stars/microsoft/Biodiversity.svg?cacheSeconds=172800) - CameraTraps（PyTorch Wildlife）是一个协作式深度学习框架，用于野生动物图像分析，提供基于大规模相机陷阱数据集训练的检测和分类模型。
* [Deep Lake](https://github.com/activeloopai/deeplake) ![](https://img.shields.io/github/stars/activeloopai/deeplake.svg?cacheSeconds=172800) - Deep Lake 是一种针对计算机视觉优化的数据基础设施。
* [DeepForest](https://github.com/weecology/DeepForest) ![](https://img.shields.io/github/stars/weecology/DeepForest.svg?cacheSeconds=172800) - DeepForest 是一个 Python 包，使用深度学习从航拍 RGB 图像中训练和预测单棵树的树冠及树种。
* [Detectron2](https://github.com/facebookresearch/detectron2) ![](https://img.shields.io/github/stars/facebookresearch/detectron2.svg?cacheSeconds=172800) - Detectron2 是 Facebook AI Research 的新一代库，提供先进的检测和分割算法。
* [Kornia](https://github.com/kornia/kornia) ![](https://img.shields.io/github/stars/kornia/kornia.svg?cacheSeconds=172800) - Kornia 是一个构建于 PyTorch 之上的可微计算机视觉库，提供丰富的可微图像处理和几何视觉算法。
* [libcom](https://github.com/bcmi/libcom) ![](https://img.shields.io/github/stars/bcmi/libcom.svg?cacheSeconds=172800) - libcom 是一个图像合成工具箱。
* [LightlyTrain](https://github.com/lightly-ai/lightly-train) ![](https://img.shields.io/github/stars/lightly-ai/lightly-train.svg?cacheSeconds=172800) - 使用无标签数据为工业应用预训练计算机视觉模型。
* [MMCV](https://github.com/open-mmlab/mmcv) ![](https://img.shields.io/github/stars/open-mmlab/mmcv.svg?cacheSeconds=172800) - MMCV 是 OpenMMLab 的基础计算机视觉库，提供图像和视频处理、数据转换与增强、CNN 架构以及优化 CUDA 操作等核心功能。
* [SuperGradients](https://github.com/Deci-AI/super-gradients) ![](https://img.shields.io/github/stars/Deci-AI/super-gradients.svg?cacheSeconds=172800) - SuperGradients 是一个开源库，用于训练基于 PyTorch 的计算机视觉模型。
* [supervision](https://github.com/roboflow/supervision) ![](https://img.shields.io/github/stars/roboflow/supervision.svg?cacheSeconds=172800) - Supervision 是一个 Python 库，旨在高效管理计算机视觉流水线，提供模型标注、可视化和监控工具。
* [VideoSys](https://github.com/NUS-HPC-AI-Lab/VideoSys) ![](https://img.shields.io/github/stars/NUS-HPC-AI-Lab/VideoSys.svg?cacheSeconds=172800) - VideoSys 通过多种加速技术支持许多扩散模型，使其运行更快且内存占用更低。

## 工业级信息检索
* [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) ![](https://img.shields.io/github/stars/Marker-Inc-Korea/AutoRAG.svg?cacheSeconds=172800) - AutoRAG 是一个 RAG AutoML 工具，可自动为你的数据寻找最优 RAG 流水线。
* [BGE](https://github.com/FlagOpen/FlagEmbedding) ![](https://img.shields.io/github/stars/FlagOpen/FlagEmbedding.svg?cacheSeconds=172800) - BGE 构建了一个用于搜索和 RAG 的一站式检索工具包。
* [EmbedAnything](https://github.com/StarlightSearch/EmbedAnything) ![](https://img.shields.io/github/stars/StarlightSearch/EmbedAnything.svg?cacheSeconds=172800) - EmbedAnything 是一个使用 Rust 构建的极简、轻量、高性能嵌入流水线，可为文本、图像、音频、PDF 和其他媒体生成嵌入，并支持稠密、稀疏、ONNX 和后期交互嵌入。
* [Faiss](https://github.com/facebookresearch/faiss) ![](https://img.shields.io/github/stars/facebookresearch/faiss.svg?cacheSeconds=172800) - Faiss 是一个用于稠密向量高效相似性搜索和聚类的库。
* [GraphRAG](https://github.com/microsoft/graphrag) ![](https://img.shields.io/github/stars/microsoft/graphrag.svg?cacheSeconds=172800) - GraphRAG 是一套数据流水线与转换工具，旨在借助 LLM 从非结构化文本中提取有意义的结构化数据。
* [HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG) ![](https://img.shields.io/github/stars/OSU-NLP-Group/HippoRAG.svg?cacheSeconds=172800) - HippoRAG 是一个新颖的检索增强生成（RAG）框架，灵感来自人类长期记忆的神经生物学原理，可让 LLM 持续整合外部文档中的知识。
* [JamAI Base](https://github.com/EmbeddedLLM/JamAIBase) ![](https://img.shields.io/github/stars/EmbeddedLLM/JamAIBase.svg?cacheSeconds=172800) - JamAI Base 是一个开源 RAG（检索增强生成）后端平台，集成嵌入式数据库（SQLite）和嵌入式向量数据库（LanceDB），并提供托管记忆与 RAG 能力。它内置 LLM、向量嵌入和重排序编排与管理功能，均可通过便捷直观的类电子表格 UI 和简单 REST API 使用。
* [LangExtract](https://github.com/google/langextract) ![](https://img.shields.io/github/stars/google/langextract.svg?cacheSeconds=172800) - LangExtract 是一个 Python 库，根据用户定义的指令使用 LLM 从非结构化文本文件中提取结构化信息。它可处理临床记录或报告等材料，识别并整理关键细节，同时确保提取数据与源文本相对应。
* [LightRAG](https://github.com/HKUDS/LightRAG) ![](https://img.shields.io/github/stars/HKUDS/LightRAG.svg?cacheSeconds=172800) - 一个简单快速的检索增强生成框架。
* [llmware](https://github.com/llmware-ai/llmware) ![](https://img.shields.io/github/stars/llmware-ai/llmware.svg?cacheSeconds=172800) - llmware 提供统一框架，用于构建基于 LLM 的应用（如 RAG、智能体），采用小型专用模型，可安全、私密地部署并集成企业知识源，还能以经济高效的方式针对任意业务流程进行调优和适配。
* [Mem0](https://github.com/mem0ai/mem0) ![](https://img.shields.io/github/stars/mem0ai/mem0.svg?cacheSeconds=172800) - Mem0 通过智能记忆层增强 AI 助手和智能体，实现个性化 AI 交互。
* [NGT](https://github.com/NGT-labs/NGT) ![](https://img.shields.io/github/stars/NGT-labs/NGT.svg?cacheSeconds=172800) - NGT 提供命令和库，可在高维向量数据空间的大量数据中执行高速近似最近邻搜索。
* [NMSLIB](https://github.com/nmslib/nmslib) ![](https://img.shields.io/github/stars/nmslib/nmslib.svg?cacheSeconds=172800) - 非度量空间库（NMSLIB）：一个高效的相似性搜索库，也是用于评估通用非度量空间中 k-NN 方法的工具包。
* [Qdrant](https://github.com/qdrant/qdrant) ![](https://img.shields.io/github/stars/qdrant/qdrant.svg?cacheSeconds=172800) - 一个开源向量相似性搜索引擎，支持扩展过滤功能。
* [R2R](https://github.com/SciPhi-AI/R2R) ![](https://img.shields.io/github/stars/SciPhi-AI/R2R.svg?cacheSeconds=172800) - R2R（RAG to Riches）是一个综合平台，用于构建、部署和扩展 RAG 应用，支持混合搜索、多模态和高级可观测性。
* [RAGFlow](https://github.com/infiniflow/ragflow) ![](https://img.shields.io/github/stars/infiniflow/ragflow.svg?cacheSeconds=172800) - RAGFlow 是一个基于深度文档理解的 RAG 引擎。
* [RAGxplorer](https://github.com/gabrielchua/RAGxplorer) ![](https://img.shields.io/github/stars/gabrielchua/RAGxplorer.svg?cacheSeconds=172800) - RAGxplorer 是一个用于构建 RAG 可视化的工具。
* [RAG-FiT](https://github.com/IntelLabs/RAG-FiT) ![](https://img.shields.io/github/stars/IntelLabs/RAG-FiT.svg?cacheSeconds=172800) - RAG-FiT 是一个库，旨在通过使用专门创建的 RAG 增强数据集微调模型，提升 LLM 使用外部信息的能力。
* [TextWorld](https://github.com/microsoft/TextWorld) ![](https://img.shields.io/github/stars/microsoft/TextWorld.svg?cacheSeconds=172800) - TextWorld 是一个基于文本的游戏生成器，也是一个可扩展的沙盒学习环境，用于训练和测试强化学习（RL）智能体。
* [Zvec](https://github.com/alibaba/zvec) ![](https://img.shields.io/github/stars/alibaba/zvec.svg?cacheSeconds=172800) - Zvec 是一个开源进程内向量数据库，用于低延迟相似性搜索。

## 工业级自然语言处理
* [aisuite](https://github.com/andrewyng/aisuite) ![](https://img.shields.io/github/stars/andrewyng/aisuite.svg?cacheSeconds=172800) - aisuite 是一个简单、统一的接口，可对接多个生成式 AI 提供商。
* [Align-Anything](https://github.com/PKU-Alignment/align-anything) ![](https://img.shields.io/github/stars/PKU-Alignment/align-anything.svg?cacheSeconds=172800) - Align-Anything 致力于使任意模态的大模型（任意到任意模型），包括 LLM、VLM 等，与人类意图和价值观保持一致。
* [BERTopic](https://github.com/MaartenGr/BERTopic) ![](https://img.shields.io/github/stars/MaartenGr/BERTopic.svg?cacheSeconds=172800) - BERTopic 是一种主题建模技术，利用 Transformer 和 c-TF-IDF 创建稠密簇，从而生成易于解释的主题，同时保留主题描述中的重要词语。
* [Burr](https://github.com/apache/burr) ![](https://img.shields.io/github/stars/apache/burr.svg?cacheSeconds=172800) - Burr 帮助你开发能够做出决策的应用（聊天机器人、智能体、模拟）。它具备生产就绪功能（遥测、持久化、部署等），还提供开源、免费且本地优先的 Burr UI。
* [Context7](https://github.com/upstash/context7) ![](https://img.shields.io/github/stars/upstash/context7.svg?cacheSeconds=172800) - Context7 为提示词和 AI 编程智能体提供最新代码文档。
* [Dify](https://github.com/langgenius/dify) ![](https://img.shields.io/github/stars/langgenius/dify.svg?cacheSeconds=172800) - Dify 是一个开源 LLM 应用开发平台，其直观界面整合了智能体 AI 工作流、RAG 流水线、智能体能力、模型管理、可观测性等功能，让你能够快速从原型迈向生产。
* [dspy](https://github.com/stanfordnlp/dspy) ![](https://img.shields.io/github/stars/stanfordnlp/dspy.svg?cacheSeconds=172800) - 一个使用基础模型进行编程的框架。
* [Dust](https://github.com/dust-tt/dust) ![](https://img.shields.io/github/stars/dust-tt/dust.svg?cacheSeconds=172800) - Dust 协助设计和部署大型语言模型应用。
* [ESPnet](https://github.com/espnet/espnet) ![](https://img.shields.io/github/stars/espnet/espnet.svg?cacheSeconds=172800) - ESPnet 是一个端到端语音处理工具包。
* [FastChat](https://github.com/lm-sys/FastChat) ![](https://img.shields.io/github/stars/lm-sys/FastChat.svg?cacheSeconds=172800) - FastChat 是一个开放平台，用于训练、服务和评估基于大型语言模型的聊天机器人。
* [Flair](https://github.com/flairNLP/flair) ![](https://img.shields.io/github/stars/flairNLP/flair.svg?cacheSeconds=172800) - 由 Zalando 开发的简洁先进 NLP 框架，直接构建于 PyTorch 之上。
* [FunASR](https://github.com/modelscope/FunASR) ![](https://img.shields.io/github/stars/modelscope/FunASR.svg?cacheSeconds=172800) - FunASR 是一个生产级 ASR 工具包，支持 50 多种语言，内置 VAD、标点恢复、说话人分离和情感识别，并支持通过 Docker/WebSocket/REST 部署及 ONNX 运行时。
* [Fun-ASR](https://github.com/QwenAudio/Fun-ASR) ![](https://img.shields.io/github/stars/QwenAudio/Fun-ASR.svg?cacheSeconds=172800) - 基于 LLM 的 ASR，支持包括中文方言在内的 31 种语言，并原生支持标点、时间戳和说话人分离。
* [Gensim](https://github.com/piskvorky/gensim) ![](https://img.shields.io/github/stars/piskvorky/gensim.svg?cacheSeconds=172800) - Gensim 是一个 Python 库，用于大型语料的主题建模、文档索引和相似性检索。
* [gpt-fast](https://github.com/meta-pytorch/gpt-fast) ![](https://img.shields.io/github/stars/meta-pytorch/gpt-fast.svg?cacheSeconds=172800) - 简单高效、原生基于 PyTorch 的 Transformer 文本生成。
* [Haystack](https://github.com/deepset-ai/haystack) ![](https://img.shields.io/github/stars/deepset-ai/haystack.svg?cacheSeconds=172800) - Haystack 是一个开源 NLP 框架，可使用 Transformer 模型和 LLM（GPT-3 等）与你的数据交互。Haystack 提供生产就绪工具，可快速构建类似 ChatGPT 的问答、语义搜索、文本生成等应用。
* [Interactive Composition Explorer](https://github.com/oughtinc/ice) ![](https://img.shields.io/github/stars/oughtinc/ice.svg?cacheSeconds=172800) - ICE 是一个 Python 库和追踪可视化工具，面向语言模型程序。
* [Jan](https://github.com/janhq/jan) ![](https://img.shields.io/github/stars/janhq/jan.svg?cacheSeconds=172800) - Jan 是一个开源 ChatGPT 替代品，可在计算机上 100% 离线运行，让你能够在本地下载和运行 LLM，并完全掌控数据与隐私。
* [Lamini](https://github.com/lamini-ai/lamini) ![](https://img.shields.io/github/stars/lamini-ai/lamini.svg?cacheSeconds=172800) - Lamini 是一个可快速定制模型的 LLM 引擎。
* [LangChain](https://github.com/langchain-ai/langchain) ![](https://img.shields.io/github/stars/langchain-ai/langchain.svg?cacheSeconds=172800) - LangChain 通过可组合性帮助你构建 LLM 应用。
* [LlamaIndex](https://github.com/run-llama/llama_index) ![](https://img.shields.io/github/stars/run-llama/llama_index.svg?cacheSeconds=172800) - LlamaIndex（GPT Index）是一个面向 LLM 应用的数据框架。
* [LLaMA](https://github.com/meta-llama/llama) ![](https://img.shields.io/github/stars/meta-llama/llama.svg?cacheSeconds=172800) - LLaMA 旨在提供一个精简、易于修改和阅读的示例，用于加载 LLaMA（arXiv）模型并执行推理。
* [LLaMA-Factory](https://github.com/hiyouga/LlamaFactory) ![](https://img.shields.io/github/stars/hiyouga/LlamaFactory.svg?cacheSeconds=172800) - LLaMA-Factory 让你能够通过零代码 CLI 和 Web UI 轻松微调 100 多种大型语言模型。
* [LLMBox](https://github.com/RUCAIBox/LLMBox) ![](https://img.shields.io/github/stars/RUCAIBox/LLMBox.svg?cacheSeconds=172800) - LLMBox 是一个全面的 LLM 实现库，包含统一的训练流水线和完善的模型评估功能。
* [LLaMA2-Accessory](https://github.com/Alpha-VLLM/LLaMA2-Accessory) ![](https://img.shields.io/github/stars/Alpha-VLLM/LLaMA2-Accessory.svg?cacheSeconds=172800) - LLaMA2-Accessory 是一个开源工具包，用于预训练、微调和部署大型语言模型（LLM）及多模态 LLM。
* [LMFlow](https://github.com/OptimalScale/LMFlow) ![](https://img.shields.io/github/stars/OptimalScale/LMFlow.svg?cacheSeconds=172800) - LMFlow 是一个可扩展、便捷且高效的工具箱，用于微调大型机器学习模型。
* [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) ![](https://img.shields.io/github/stars/NVIDIA/Megatron-LM.svg?cacheSeconds=172800) - Megatron-LM 是一个高度优化、高效的大型语言模型训练库。
* [MindNLP](https://github.com/candle-org/MindAct) ![](https://img.shields.io/github/stars/candle-org/MindAct.svg?cacheSeconds=172800) - MindNLP 是一个易用、高性能的 NLP 和 LLM 框架，基于 MindSpore 构建，并兼容 Hugging Face 模型与数据集。
* [MLC LLM](https://github.com/mlc-ai/mlc-llm) ![](https://img.shields.io/github/stars/mlc-ai/mlc-llm.svg?cacheSeconds=172800) - MLC LLM 是一个通用解决方案，可将任意语言模型原生部署到多种硬件后端和原生应用中，同时也为所有人提供高效框架，进一步针对自身用例优化模型性能。
* [mlx-lm](https://github.com/ml-explore/mlx-lm) ![](https://img.shields.io/github/stars/ml-explore/mlx-lm.svg?cacheSeconds=172800) - MLX LM 是一个 Python 包，可在 Apple 芯片上使用 MLX 生成文本并微调大型语言模型，支持与 Hugging Face Hub 集成、量化和分布式推理。
* [Ollama](https://github.com/ollama/ollama) ![](https://img.shields.io/github/stars/ollama/ollama.svg?cacheSeconds=172800) - 轻松开始在本地运行大型语言模型。
* [olmOCR](https://github.com/allenai/olmocr) ![](https://img.shields.io/github/stars/allenai/olmocr.svg?cacheSeconds=172800) - olmOCR 是一个工具包，用于训练语言模型处理现实世界中的 PDF 文档。
* [PaddleNLP](https://github.com/PaddlePaddle/PaddleNLP) ![](https://img.shields.io/github/stars/PaddlePaddle/PaddleNLP.svg?cacheSeconds=172800) - PaddleNLP 是一个基于 PaddlePaddle 深度学习框架的大型语言模型（LLM）开发套件，支持在各种硬件设备上进行高效大模型训练、无损压缩和高性能推理。
* [Promptise Foundry](https://github.com/promptise-com/foundry) ![](https://img.shields.io/github/stars/promptise-com/foundry.svg?cacheSeconds=172800) - Promptise Foundry 是一个面向智能体 AI 和 MCP 服务器的生产级 Python 框架，涵盖自主运行时、记忆、工具集成、治理（预算、健康状态、任务、密钥）、防护机制、语义缓存和可观测性。
* [Semantic Kernel](https://github.com/microsoft/semantic-kernel) ![](https://img.shields.io/github/stars/microsoft/semantic-kernel.svg?cacheSeconds=172800) - Semantic Kernel 是一个 SDK，可将 OpenAI、Azure OpenAI 和 Hugging Face 等大型语言模型（LLM）与 C#、Python 和 Java 等传统编程语言集成。借助插件定义，只需几行代码即可串联这些能力。
* [Sentence Transformers](https://github.com/huggingface/sentence-transformers) ![](https://img.shields.io/github/stars/huggingface/sentence-transformers.svg?cacheSeconds=172800) - Sentence Transformers 提供了一种简单的方法，可计算句子、段落和图像的稠密向量表示。
* [SpaCy](https://github.com/explosion/spaCy) ![](https://img.shields.io/github/stars/explosion/spaCy.svg?cacheSeconds=172800) - spaCy 是一个使用 Python 和 Cython 实现的高级自然语言处理库。
* [SWIFT](https://github.com/modelscope/ms-swift) ![](https://img.shields.io/github/stars/modelscope/ms-swift.svg?cacheSeconds=172800) - SWIFT 是一个可扩展、轻量级的基础设施，用于深度学习模型微调。
* [Tensorflow Lingvo](https://github.com/tensorflow/lingvo) ![](https://img.shields.io/github/stars/tensorflow/lingvo.svg?cacheSeconds=172800) - 一个用于使用 TensorFlow 构建神经网络的框架，尤其适用于序列模型。
* [Tensorflow Text](https://github.com/tensorflow/text) ![](https://img.shields.io/github/stars/tensorflow/text.svg?cacheSeconds=172800) - TensorFlow Text 提供一组可与 TensorFlow 2.0 配合使用的文本相关类和操作。
* [ToolBench](https://github.com/OpenBMB/ToolBench) ![](https://img.shields.io/github/stars/OpenBMB/ToolBench.svg?cacheSeconds=172800) - ToolBench 是一个开放平台，用于训练、服务和评估面向工具学习的大型语言模型。
* [Transformers](https://github.com/huggingface/transformers) ![](https://img.shields.io/github/stars/huggingface/transformers.svg?cacheSeconds=172800) - Hugging Face 提供的先进自然语言处理（NLP）预训练模型库。

## 工业级推荐系统
* [EasyRec](https://github.com/alibaba/EasyRec) ![](https://img.shields.io/github/stars/alibaba/EasyRec.svg?cacheSeconds=172800) - EasyRec 是一个用于大规模推荐算法的框架。
* [Gorse](https://github.com/gorse-io/gorse) ![](https://img.shields.io/github/stars/gorse-io/gorse.svg?cacheSeconds=172800) - Gorse 致力于成为一个通用开源推荐系统，可快速应用于各种在线服务。
* [Merlin](https://github.com/NVIDIA-Merlin/Merlin) ![](https://img.shields.io/github/stars/NVIDIA-Merlin/Merlin.svg?cacheSeconds=172800) - NVIDIA Merlin 是一个开源库，提供端到端 GPU 加速推荐系统，涵盖从特征工程和预处理、训练深度学习模型到生产推理的全过程。
* [Recommenders](https://github.com/recommenders-team/recommenders) ![](https://img.shields.io/github/stars/recommenders-team/recommenders.svg?cacheSeconds=172800) - Recommenders 提供推荐系统构建基准测试和最佳实践，并以 Jupyter 笔记本形式呈现。
* [TorchRec](https://github.com/meta-pytorch/torchrec) ![](https://img.shields.io/github/stars/meta-pytorch/torchrec.svg?cacheSeconds=172800) - TorchRec 是一个 PyTorch 领域库，提供大规模推荐系统（RecSys）所需的通用稀疏性和并行性原语。

## 工业级强化学习
* [Acme](https://github.com/google-deepmind/acme) ![](https://img.shields.io/github/stars/google-deepmind/acme.svg?cacheSeconds=172800) - Acme 是一个强化学习（RL）构建模块库，致力于提供简单、高效且易读的智能体。
* [AReaL](https://github.com/areal-project/AReaL) ![](https://img.shields.io/github/stars/areal-project/AReaL.svg?cacheSeconds=172800) - AReaL 是一个强化学习库。
* [ChatLearn](https://github.com/alibaba/ChatLearn) ![](https://img.shields.io/github/stars/alibaba/ChatLearn.svg?cacheSeconds=172800) - ChatLearn 是一个灵活高效的大型语言模型强化学习训练框架，支持分布式训练引擎（FSDP2、Megatron）和推理引擎（vLLM、SGLang），并支持 GRPO、GSPO 等现代 RL 算法。
* [CleanRL](https://github.com/vwxyzjn/cleanrl) ![](https://img.shields.io/github/stars/vwxyzjn/cleanrl.svg?cacheSeconds=172800) - CleanRL 是一个深度强化学习库，提供高质量的单文件实现，并具备利于研究的功能。实现简洁清晰，同时可扩展至使用 AWS Batch 运行数千项实验。
* [d3rlpy](https://github.com/takuseno/d3rlpy) ![](https://img.shields.io/github/stars/takuseno/d3rlpy.svg?cacheSeconds=172800) - d3rlpy 是一个面向实践者和研究人员的离线深度强化学习库。
* [D4RL](https://github.com/Farama-Foundation/D4RL) ![](https://img.shields.io/github/stars/Farama-Foundation/D4RL.svg?cacheSeconds=172800) - D4RL 是一个离线强化学习开源基准。
* [Dopamine](https://github.com/google/dopamine) ![](https://img.shields.io/github/stars/google/dopamine.svg?cacheSeconds=172800) - Dopamine 是一个研究框架，可快速原型化强化学习算法。它致力于提供一个精简、易于理解的代码库，让用户自由尝试大胆的新想法（探索性研究）。
* [EvoTorch](https://github.com/nnaisense/evotorch) ![](https://img.shields.io/github/stars/nnaisense/evotorch.svg?cacheSeconds=172800) - EvoTorch 是由 NNAISENSE 开发、构建于 PyTorch 之上的开源进化计算库。
* [FinRL](https://github.com/AI4Finance-Foundation/FinRL) ![](https://img.shields.io/github/stars/AI4Finance-Foundation/FinRL.svg?cacheSeconds=172800) - FinRL 是首个展示金融强化学习巨大潜力的开源框架。
* [Gymnasium](https://github.com/Farama-Foundation/Gymnasium) ![](https://img.shields.io/github/stars/Farama-Foundation/Gymnasium.svg?cacheSeconds=172800) - Gymnasium 是一个开源 Python 库，用于开发和比较强化学习算法。它提供学习算法与环境之间通信的标准 API，以及一组符合该 API 的标准环境。
* [Gymnasium-Robotics](https://github.com/Farama-Foundation/Gymnasium-Robotics) ![](https://img.shields.io/github/stars/Farama-Foundation/Gymnasium-Robotics.svg?cacheSeconds=172800) - Gymnasium-Robotics 收录了一系列使用 Gymnasium API 的强化学习机器人环境。环境运行于 MuJoCo 物理引擎及其维护的 mujoco Python 绑定之上。
* [Jumanji](https://github.com/instadeepai/jumanji) ![](https://img.shields.io/github/stars/instadeepai/jumanji.svg?cacheSeconds=172800) - Jumanji 是一套使用 JAX 编写的强化学习（RL）环境，为产业驱动的研究提供简洁、硬件加速的环境。
* [MARLlib](https://github.com/Replicable-MARL/MARLlib) ![](https://img.shields.io/github/stars/Replicable-MARL/MARLlib.svg?cacheSeconds=172800) - MARLlib 是一个基于 RLlib 的全面多智能体强化学习算法库，为 MARL 研究社区提供统一平台，用于构建、训练和评估 MARL 算法。
* [Mava](https://github.com/instadeepai/Mava) ![](https://img.shields.io/github/stars/instadeepai/Mava.svg?cacheSeconds=172800) - Mava 是一个使用 JAX 实现的分布式多智能体强化学习框架。
* [Melting Pot](https://github.com/google-deepmind/meltingpot) ![](https://img.shields.io/github/stars/google-deepmind/meltingpot.svg?cacheSeconds=172800) - Melting Pot 是一套用于多智能体强化学习的测试场景。
* [MetaDrive](https://github.com/metadriverse/metadrive) ![](https://img.shields.io/github/stars/metadriverse/metadrive.svg?cacheSeconds=172800) - MetaDrive 是一个驾驶模拟器，可组合多样化驾驶场景以实现泛化 RL。
* [Minigrid](https://github.com/Farama-Foundation/Minigrid) ![](https://img.shields.io/github/stars/Farama-Foundation/Minigrid.svg?cacheSeconds=172800) - Minigrid 库收录了一系列离散网格世界环境，用于开展强化学习研究。环境遵循 Gymnasium 标准 API，并且轻量、快速且易于定制。
* [MiniWorld](https://github.com/Farama-Foundation/Miniworld) ![](https://img.shields.io/github/stars/Farama-Foundation/Miniworld.svg?cacheSeconds=172800) - MiniWorld 是一个极简的 3D 室内环境模拟器，适用于强化学习与机器人研究。
* [ML-Agents](https://github.com/Unity-Technologies/ml-agents) ![](https://img.shields.io/github/stars/Unity-Technologies/ml-agents.svg?cacheSeconds=172800) - ML-Agents 是一个开源项目，可将游戏和模拟环境用作训练强化学习智能体的环境。
* [MushroomRL](https://github.com/MushroomRL/mushroom-rl) ![](https://img.shields.io/github/stars/MushroomRL/mushroom-rl.svg?cacheSeconds=172800) - MushroomRL 是一个 Python 强化学习（RL）库，其模块化设计让用户能够轻松使用知名张量计算库（如 PyTorch、TensorFlow）和 RL 基准（如 OpenAI Gym、PyBullet、DeepMind Control Suite）。
* [OmniSafe](https://github.com/PKU-Alignment/omnisafe) ![](https://img.shields.io/github/stars/PKU-Alignment/omnisafe.svg?cacheSeconds=172800) - OmniSafe 是一个基础设施框架，旨在加速安全强化学习（RL）研究。
* [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) ![](https://img.shields.io/github/stars/OpenRLHF/OpenRLHF.svg?cacheSeconds=172800) - OpenRLHF 是一个用于人类反馈强化学习（RLHF）的开源框架。
* [PARL](https://github.com/PaddlePaddle/PARL) ![](https://img.shields.io/github/stars/PaddlePaddle/PARL.svg?cacheSeconds=172800) - PARL 是一个灵活且高效的强化学习框架。
* [PettingZoo](https://github.com/Farama-Foundation/PettingZoo) ![](https://img.shields.io/github/stars/Farama-Foundation/PettingZoo.svg?cacheSeconds=172800) - PettingZoo 是一个 Python 库，用于开展多智能体强化学习研究，类似于多智能体版的 Gymnasium。
* [ranx](https://github.com/AmenRa/ranx) ![](https://img.shields.io/github/stars/AmenRa/ranx.svg?cacheSeconds=172800) - ranx 是一个快速排序评估指标库，以 Python 实现，利用 Numba 实现高速向量运算和自动并行化。
* [RL4CO](https://github.com/ai4co/rl4co) ![](https://img.shields.io/github/stars/ai4co/rl4co.svg?cacheSeconds=172800) - RL4CO 是一个 PyTorch 库，涵盖组合优化（CO）强化学习的各类功能。
* [RL2](https://github.com/ChenmienTan/RL2) ![](https://img.shields.io/github/stars/ChenmienTan/RL2.svg?cacheSeconds=172800) - RL2 是一个强化学习库。
* [RLinf](https://github.com/RLinf/RLinf) ![](https://img.shields.io/github/stars/RLinf/RLinf.svg?cacheSeconds=172800) - RLinf 是一个强化学习库。
* [ROLL](https://github.com/alibaba/ROLL) ![](https://img.shields.io/github/stars/alibaba/ROLL.svg?cacheSeconds=172800) - ROLL 是一个强化学习库。
* [skrl](https://github.com/Toni-SM/skrl) ![](https://img.shields.io/github/stars/Toni-SM/skrl.svg?cacheSeconds=172800) - skrl 是一个使用 Python（基于 PyTorch）编写的开源模块化库，用于强化学习，重点关注算法实现的可读性、简洁性和透明度。
* [SkyRL](https://github.com/NovaSky-AI/SkyRL) ![](https://img.shields.io/github/stars/NovaSky-AI/SkyRL.svg?cacheSeconds=172800) - SkyRL 是一个全栈强化学习库，提供模块化训练框架、跨平台推理后端、智能体流水线和 Gymnasium 环境，适用于长期运行的现实世界 RL 任务。
* [slime](https://github.com/THUDM/slime) ![](https://img.shields.io/github/stars/THUDM/slime.svg?cacheSeconds=172800) - slime 是一个用于 RL 扩展的 LLM 后训练框架。
* [Stable Baselines](https://github.com/DLR-RM/stable-baselines3) ![](https://img.shields.io/github/stars/DLR-RM/stable-baselines3.svg?cacheSeconds=172800) - OpenAI Baselines 的一个分支，包含强化学习算法实现。
* [TF-Agents](https://github.com/tensorflow/agents) ![](https://img.shields.io/github/stars/tensorflow/agents.svg?cacheSeconds=172800) - 一个可靠、可扩展且易用的 TensorFlow 库，用于上下文赌博机和强化学习。
* [TorchRL](https://github.com/pytorch/rl) ![](https://img.shields.io/github/stars/pytorch/rl.svg?cacheSeconds=172800) - TorchRL 是一个适用于 PyTorch 的开源强化学习（RL）库。
* [TRL](https://github.com/huggingface/trl) ![](https://img.shields.io/github/stars/huggingface/trl.svg?cacheSeconds=172800) - 使用强化学习训练 Transformer 语言模型。
* [veRL](https://github.com/verl-project/verl) ![](https://img.shields.io/github/stars/verl-project/verl.svg?cacheSeconds=172800) - veRL（HybridFlow）是一个灵活、高效、工业级的 RLHF 训练框架，专为 LLM 设计。

## 工业级机器人
* [AI2-THOR](https://github.com/allenai/ai2thor) ![](https://img.shields.io/github/stars/allenai/ai2thor.svg?cacheSeconds=172800) - AI2-THOR 是一个近乎照片级真实、可交互的 AI 智能体框架。
* [Genesis](https://github.com/Genesis-Embodied-AI/genesis-world) ![](https://img.shields.io/github/stars/Genesis-Embodied-AI/genesis-world.svg?cacheSeconds=172800) - Genesis 是一个面向具身 AI 和机器人模拟的物理平台。
* [Habitat-Sim](https://github.com/facebookresearch/habitat-sim) ![](https://img.shields.io/github/stars/facebookresearch/habitat-sim.svg?cacheSeconds=172800) - Habitat-Sim 是一个灵活、高性能的 3D 模拟器，用于具身 AI 研究。
* [IsaacLab](https://github.com/isaac-sim/IsaacLab) ![](https://img.shields.io/github/stars/isaac-sim/IsaacLab.svg?cacheSeconds=172800) - IsaacLab 是一个统一、模块化的机器人学习框架，利用 NVIDIA Isaac Sim。
* [LeRobot](https://github.com/huggingface/lerobot) ![](https://img.shields.io/github/stars/huggingface/lerobot.svg?cacheSeconds=172800) - LeRobot 为现实世界机器人和模仿学习提供模型、数据集和工具。
* [robosuite](https://github.com/ARISE-Initiative/robosuite) ![](https://img.shields.io/github/stars/ARISE-Initiative/robosuite.svg?cacheSeconds=172800) - robosuite 是一个使用 MuJoCo 物理引擎的机器人学习模拟框架。
* [RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) ![](https://img.shields.io/github/stars/RoboVerseOrg/RoboVerse.svg?cacheSeconds=172800) - RoboVerse 是一个综合机器人模拟平台，提供多种环境。

## 工业级可视化
* [Apache ECharts](https://github.com/apache/echarts) ![](https://img.shields.io/github/stars/apache/echarts.svg?cacheSeconds=172800) - Apache ECharts 是一个功能强大的交互式图表和数据可视化库，适用于浏览器。
* [Apache Superset](https://github.com/apache/superset) ![](https://img.shields.io/github/stars/apache/superset.svg?cacheSeconds=172800) - 一个现代化、面向企业的商业智能 Web 应用。
* [Bokeh](https://github.com/bokeh/bokeh) ![](https://img.shields.io/github/stars/bokeh/bokeh.svg?cacheSeconds=172800) - Bokeh 是一个面向 Python 的交互式可视化库，可在现代 Web 浏览器中实现美观且富有意义的数据展示。
* [Bread Dataset Viewer](https://github.com/Bread-Technologies/Bread-Dataset-Viewer) - 一个 VS Code 扩展，可直接在编辑器中查看和探索大型机器学习数据集（CSV、JSON、Parquet 等），无需担心 IDE 崩溃。
* [Bread WandB Viewer](https://github.com/Bread-Technologies/Bread-WandB-Viewer) - 一个 VS Code 扩展，可在 IDE 中查看 Weights & Biases 实验、日志和产物，无需切换到 Web UI；所有操作完全离线，保护数据隐私。
* [Data Formulator](https://github.com/microsoft/data-formulator) ![](https://img.shields.io/github/stars/microsoft/data-formulator.svg?cacheSeconds=172800) - 借助 AI 迭代转换数据并创建丰富的可视化。
* [ggplot2](https://github.com/tidyverse/ggplot2) ![](https://img.shields.io/github/stars/tidyverse/ggplot2.svg?cacheSeconds=172800) - 面向 R 语言的图形语法实现。
* [gradio](https://github.com/gradio-app/gradio) ![](https://img.shields.io/github/stars/gradio-app/gradio.svg?cacheSeconds=172800) - 只需编写 Python，即可快速创建和分享模型演示。在浏览器中交互式调试模型、收集协作者反馈，并生成公共链接，无需部署任何内容。
* [Kangas](https://github.com/comet-ml/kangas) ![](https://img.shields.io/github/stars/comet-ml/kangas.svg?cacheSeconds=172800) - Kangas 是一个用于探索、分析和可视化大规模多媒体数据的工具。它提供简单易用的 Python API，可记录大型数据表，并配有直观的可视化界面，用于对数据集执行复杂查询。
* [matplotlib](https://github.com/matplotlib/matplotlib) ![](https://img.shields.io/github/stars/matplotlib/matplotlib.svg?cacheSeconds=172800) - 一个 Python 二维绘图库，可在多种印刷格式和跨平台交互环境中生成出版级图表。
* [Model Explorer](https://github.com/google-ai-edge/model-explorer) ![](https://img.shields.io/github/stars/google-ai-edge/model-explorer.svg?cacheSeconds=172800) - Model Explorer 是一个机器学习模型可视化与探索工具，提供直观的图结构视图，帮助理解模型结构、检查层详情并浏览大型神经网络。
* [Netron](https://github.com/lutzroeder/netron) ![](https://img.shields.io/github/stars/lutzroeder/netron.svg?cacheSeconds=172800) - Netron 是一个神经网络、深度学习和机器学习模型查看器。
* [Perspective](https://github.com/perspective-dev/perspective) ![](https://img.shields.io/github/stars/perspective-dev/perspective.svg?cacheSeconds=172800) 通过 WebAssembly 实现流式数据透视可视化。
* [Plotly](https://github.com/plotly/plotly.py) ![](https://img.shields.io/github/stars/plotly/plotly.py.svg?cacheSeconds=172800) - 一个交互式、开源、基于浏览器的 Python 绘图库。
* [Redash](https://github.com/getredash/redash) ![](https://img.shields.io/github/stars/getredash/redash.svg?cacheSeconds=172800) - Redash 是一个开源可视化框架，旨在通过多种后端轻松访问大型数据集。
* [Rerun](https://github.com/rerun-io/rerun) ![](https://img.shields.io/github/stars/rerun-io/rerun.svg?cacheSeconds=172800) - Rerun 是一个开源 SDK，用于记录、存储、查询和可视化多模态数据，专为机器人、计算机视觉和空间 AI 设计。
* [seaborn](https://github.com/mwaskom/seaborn) ![](https://img.shields.io/github/stars/mwaskom/seaborn.svg?cacheSeconds=172800) - Seaborn 是一个基于 matplotlib 的 Python 可视化库，提供高级接口以绘制美观的统计图表。
* [Spotlight](https://github.com/Renumics/spotlight) ![](https://img.shields.io/github/stars/Renumics/spotlight.svg?cacheSeconds=172800) - Spotlight 可帮助你识别关键数据片段和模型失效模式。它支持整理高质量数据集，从而构建并维护可靠的机器学习模型。
* [Streamlit](https://github.com/streamlit/streamlit) ![](https://img.shields.io/github/stars/streamlit/streamlit.svg?cacheSeconds=172800) - Streamlit 让你通过看似简单的 Python 脚本为机器学习项目创建应用。它支持热重载，因此编辑并保存文件后，应用会实时更新。
* [tensorboardX](https://github.com/lanpa/tensorboardX) ![](https://img.shields.io/github/stars/lanpa/tensorboardX.svg?cacheSeconds=172800) - 通过简单的函数调用写入 TensorBoard 事件。
* [TensorBoard](https://github.com/tensorflow/tensorboard) ![](https://img.shields.io/github/stars/tensorflow/tensorboard.svg?cacheSeconds=172800) - TensorBoard 是一个机器学习实验可视化工具包，可轻松托管、跟踪和分享 ML 实验。
* [Torchvista](https://github.com/sachinhosmani/torchvista) ![](https://img.shields.io/github/stars/sachinhosmani/torchvista.svg?cacheSeconds=172800) - Torchvista 是一个基于交互式笔记本的工具，可将任意 PyTorch 模型的前向传播可视化为笔记本中的计算图，支持折叠嵌套模块，并可容忍错误、显示部分可视化结果。
* [Transformer Explainer](https://github.com/poloclub/transformer-explainer) ![](https://img.shields.io/github/stars/poloclub/transformer-explainer.svg?cacheSeconds=172800) - Transformer Explainer 是一个交互式可视化工具，旨在帮助任何人了解 GPT 等基于 Transformer 的模型如何工作。
* [Vega-Altair](https://github.com/vega/altair) ![](https://img.shields.io/github/stars/vega/altair.svg?cacheSeconds=172800) - Vega-Altair 是一个用于 Python 的声明式统计可视化库。
* [ydata-profiling](https://github.com/Data-Centric-AI-Community/fg-data-profiling) ![](https://img.shields.io/github/stars/Data-Centric-AI-Community/fg-data-profiling.svg?cacheSeconds=172800) - ydata-profiling 以一致且快速的方式，通过一行代码提供探索性数据分析（EDA）体验。

## 元数据管理
* [Apache Atlas](https://github.com/apache/atlas) ![](https://img.shields.io/github/stars/apache/atlas.svg?cacheSeconds=172800) - Apache Atlas 框架是一套可扩展的核心基础治理服务，可帮助企业有效满足 Hadoop 环境中的合规要求，并支持与整个企业数据生态系统集成。
* [DataHub](https://github.com/datahub-project/datahub) ![](https://img.shields.io/github/stars/datahub-project/datahub.svg?cacheSeconds=172800) - DataHub 是 LinkedIn 的通用元数据搜索与发现工具。
* [Marquez](https://github.com/MarquezProject/marquez) ![](https://img.shields.io/github/stars/MarquezProject/marquez.svg?cacheSeconds=172800) - Marquez 是一个开源元数据服务，用于收集、汇总和可视化数据生态系统的元数据。
* [Metacat](https://github.com/Netflix/metacat) ![](https://img.shields.io/github/stars/Netflix/metacat.svg?cacheSeconds=172800) - Metacat 是一个统一的元数据探索 API 服务，重点解决以下问题：1）元数据系统的联邦视图；2）任意数据集元数据的存储；3）元数据发现。
* [ML Metadata](https://github.com/google/ml-metadata) ![](https://img.shields.io/github/stars/google/ml-metadata.svg?cacheSeconds=172800) - 一个用于记录和检索与机器学习开发者及数据科学家工作流相关元数据的库。

## 模型、数据与实验管理
* [Aim](https://github.com/aimhubio/aim) ![](https://img.shields.io/github/stars/aimhubio/aim.svg?cacheSeconds=172800) - 一种极其简单的方式，用于记录、搜索和比较 AI 实验。
* [ClearML](https://github.com/clearml/clearml) ![](https://img.shields.io/github/stars/clearml/clearml.svg?cacheSeconds=172800) - 为 AI 提供自动化实验管理器和版本控制（前身为 Trains）。
* [DataHub](https://github.com/datahub-project/datahub) ![](https://img.shields.io/github/stars/datahub-project/datahub.svg?cacheSeconds=172800) - DataHub 是一个面向现代数据技术栈的开源数据目录。
* [Dolt](https://github.com/dolthub/dolt) ![](https://img.shields.io/github/stars/dolthub/dolt.svg?cacheSeconds=172800) - Dolt 是一个 SQL 数据库，可以像 Git 仓库一样进行 fork、clone、branch、merge、push 和 pull。
* [DVC](https://github.com/treeverse/dvc) ![](https://img.shields.io/github/stars/treeverse/dvc.svg?cacheSeconds=172800) - DVC（数据版本控制）是一个 Git 分支，可用于模型版本管理。
* [HuggingFace Model Downloader](https://github.com/bodaay/HuggingFaceModelDownloader) ![](https://img.shields.io/github/stars/bodaay/HuggingFaceModelDownloader.svg?cacheSeconds=172800) - HuggingFace Model Downloader 是一个工具，可从 HuggingFace 网站下载模型和数据集。它支持多线程下载 LFS 文件，并通过 SHA256 校验和验证下载模型的完整性。
* [Keepsake](https://github.com/replicate/keepsake) ![](https://img.shields.io/github/stars/replicate/keepsake.svg?cacheSeconds=172800) - 机器学习版本控制。
* [KitOps](https://github.com/kitops-ml/kitops) ![](https://img.shields.io/github/stars/kitops-ml/kitops.svg?cacheSeconds=172800) - KitOps 是一个开放、基于标准的 AI/ML 项目打包与版本管理系统，可与现有 AI/ML、开发和 DevOps 工具协同工作。
* [lakeFS](https://github.com/treeverse/lakeFS) ![](https://img.shields.io/github/stars/treeverse/lakeFS.svg?cacheSeconds=172800) - 构建于对象存储之上的可重复、原子化且有版本管理的数据湖。
* [MLflow](https://github.com/mlflow/mlflow) ![](https://img.shields.io/github/stars/mlflow/mlflow.svg?cacheSeconds=172800) - 用于管理 ML 生命周期的开源平台，涵盖实验、可复现性和部署。
* [Polyaxon](https://github.com/polyaxon/polyaxon) ![](https://img.shields.io/github/stars/polyaxon/polyaxon.svg?cacheSeconds=172800) - 一个在 Kubernetes 上实现可复现、可扩展机器学习与深度学习的平台 - [(视频)](https://www.youtube.com/watch?v=Iexwrka_hys)。
* [Quilt](https://github.com/quiltdata/quilt) ![](https://img.shields.io/github/stars/quiltdata/quilt.svg?cacheSeconds=172800) - 对数据和模型进行版本管理、确保可复现并支持部署。
* [Sacred](https://github.com/IDSIA/sacred) ![](https://img.shields.io/github/stars/IDSIA/sacred.svg?cacheSeconds=172800) - 一个帮助你配置、组织、记录和复现机器学习实验的工具。
* [TerminusDB](https://github.com/terminusdb/terminusdb) ![](https://img.shields.io/github/stars/terminusdb/terminusdb.svg?cacheSeconds=172800) - 一种以类似 Git 的方式存储数据的图数据库管理系统。
* [Weights & Biases](https://github.com/wandb/wandb) ![](https://img.shields.io/github/stars/wandb/wandb.svg?cacheSeconds=172800) - Weights & Biase 是一个机器学习实验跟踪、数据集版本管理、超参数搜索、可视化与协作工具。

## 模型训练与编排

* [AutoTrain Advanced](https://github.com/huggingface/autotrain-advanced) ![](https://img.shields.io/github/stars/huggingface/autotrain-advanced.svg?cacheSeconds=172800) - AutoTrain Advanced 是一种无需编写代码的解决方案，只需点击几下即可训练机器学习模型。
* [Avalanche](https://github.com/ContinualAI/avalanche) ![](https://img.shields.io/github/stars/ContinualAI/avalanche.svg?cacheSeconds=172800) - Avalanche 是一个端到端持续学习库，提供共享协作的 MIT 开源代码库，用于快速原型开发、训练和可复现地评估持续学习算法。
* [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) ![](https://img.shields.io/github/stars/axolotl-ai-cloud/axolotl.svg?cacheSeconds=172800) - Axolotl 是一个工具，旨在简化多种 AI 模型的微调，并支持多种配置和架构。
* [BindsNET](https://github.com/BindsNET/bindsnet) ![](https://img.shields.io/github/stars/BindsNET/bindsnet.svg?cacheSeconds=172800) - BindsNET 是一个脉冲神经网络模拟库，面向仿生机器学习算法的开发。
* [CML](https://github.com/iterative/cml) ![](https://img.shields.io/github/stars/iterative/cml.svg?cacheSeconds=172800) - 持续机器学习（CML）是一个开源库，用于在机器学习项目中实现持续集成与交付（CI/CD）。
* [CoreNet](https://github.com/apple/corenet) ![](https://img.shields.io/github/stars/apple/corenet.svg?cacheSeconds=172800) - CoreNet 是一个深度神经网络工具包，研究人员和工程师可用它训练各类标准及新型的小型和大型模型，以完成多种任务，包括基础模型（如 CLIP 和 LLM）、目标分类、目标检测和语义分割。
* [DataLinter](https://github.com/zgornel/DataLinter) ![](https://img.shields.io/github/stars/zgornel/DataLinter.svg?cacheSeconds=86400) - DataLinter 是一个开源数据与代码上下文检查工具，通过插件设计实现对数据和代码的技术栈无关性。
* [Determined](https://github.com/determined-ai/determined) ![](https://img.shields.io/github/stars/determined-ai/determined.svg?cacheSeconds=172800) - 深度学习训练平台，内置分布式训练、超参数调优和模型管理支持（支持 TensorFlow 和 PyTorch）。
* [dstack](https://github.com/dstackai/dstack) ![](https://img.shields.io/github/stars/dstackai/dstack.svg?cacheSeconds=172800) - dstack 是一个开源容器编排器，可简化工作负载编排并提高 ML 团队的 GPU 利用率。
* [envd](https://github.com/tensorchord/envd) ![](https://img.shields.io/github/stars/tensorchord/envd.svg?cacheSeconds=172800) - 面向数据科学及 AI/ML 工程团队的机器学习开发环境。
* [Fire-Flyer File System](https://github.com/deepseek-ai/3FS) ![](https://img.shields.io/github/stars/deepseek-ai/3FS.svg?cacheSeconds=172800) - Fire-Flyer File System（3FS）是一个高性能分布式文件系统，旨在应对 AI 训练和推理工作负载的挑战。它利用现代 SSD 和 RDMA 网络提供共享存储层，简化分布式应用开发。
* [H2O-3](https://github.com/h2oai/h2o-3) ![](https://img.shields.io/github/stars/h2oai/h2o-3.svg?cacheSeconds=172800) - 快速、可扩展的机器学习平台，助力打造更智能的应用：深度学习、梯度提升与 XGBoost、随机森林、广义线性模型（逻辑回归、弹性网络）、K 均值、PCA、堆叠集成、自动机器学习（AutoML）等。
* [Hopsworks](https://github.com/logicalclocks/hopsworks) ![](https://img.shields.io/github/stars/logicalclocks/hopsworks.svg?cacheSeconds=172800) - Hopsworks 是一个数据密集型平台，用于设计和运行机器学习流水线。
* [Ignite](https://github.com/pytorch/ignite) ![](https://img.shields.io/github/stars/pytorch/ignite.svg?cacheSeconds=172800) - Ignite 是一个高级库，可帮助你灵活、透明地使用 PyTorch 训练和评估神经网络。
* [Kubeflow](https://github.com/kubeflow/kubeflow) ![](https://img.shields.io/github/stars/kubeflow/kubeflow.svg?cacheSeconds=172800) - 一个基于 Google 内部机器学习流水线构建的云原生机器学习平台。
* [Ludwig](https://github.com/ludwig-ai/ludwig) ![](https://img.shields.io/github/stars/ludwig-ai/ludwig.svg?cacheSeconds=172800) - Ludwig 是一个低代码框架，用于构建 LLM 和其他深度神经网络等自定义 AI 模型。
* [MFTCoder](https://github.com/codefuse-ai/MFTCoder) ![](https://img.shields.io/github/stars/codefuse-ai/MFTCoder.svg?cacheSeconds=172800) - MFTCoder 是 CodeFuse 的开源项目，旨在对大型语言模型（LLM）进行准确、高效的多任务微调（MFT），尤其是代码大模型（面向代码任务的语言模型）。
* [MLeap](https://github.com/combust/mleap) ![](https://img.shields.io/github/stars/combust/mleap.svg?cacheSeconds=172800) - 为 Spark、TensorFlow 和 sklearn 实现流水线与模型序列化的标准化。
* [Nanotron](https://github.com/huggingface/nanotron) ![](https://img.shields.io/github/stars/huggingface/nanotron.svg?cacheSeconds=172800) - Nanotron 提供分布式原语，可通过 3D 并行高效训练各种模型。
* [NeMo](https://github.com/NVIDIA-NeMo/Speech) ![](https://img.shields.io/github/stars/NVIDIA-NeMo/Speech.svg?cacheSeconds=172800) - NVIDIA NeMo 是一个可扩展、云原生的生成式 AI 框架，面向使用 PyTorch 的研究人员和开发者，覆盖大型语言模型（LLM）、多模态模型（MM）、自动语音识别（ASR）、文本转语音（TTS）和计算机视觉（CV）等领域。它通过复用现有代码和预训练模型检查点，帮助你高效创建、定制和部署新的生成式 AI 模型。
* [Prime](https://github.com/PrimeIntellect-ai/prime) ![](https://img.shields.io/github/stars/PrimeIntellect-ai/prime.svg?cacheSeconds=172800) - Prime 是一个框架，可通过互联网高效地在全球范围内分布式训练 AI 模型。
* [PyCaret](https://github.com/pycaret/pycaret) ![](https://img.shields.io/github/stars/pycaret/pycaret.svg?cacheSeconds=172800)) - 用于训练和部署模型（scikit-learn、XGBoost、LightGBM、spaCy）的低代码库。
* [Sematic](https://github.com/sematic-ai/sematic) ![](https://img.shields.io/github/stars/sematic-ai/sematic.svg?cacheSeconds=172800) - 使用简单 Python 构建资源密集型流水线的平台。
* [Skaffold](https://github.com/GoogleContainerTools/skaffold) ![](https://img.shields.io/github/stars/GoogleContainerTools/skaffold.svg?cacheSeconds=172800) - Skaffold 是一个命令行工具，可促进 Kubernetes 应用的持续开发。你可以在本地迭代应用源代码，然后部署到本地或远程 Kubernetes 集群。
* [TFX](https://github.com/tensorflow/tfx) ![](https://img.shields.io/github/stars/tensorflow/tfx.svg?cacheSeconds=172800) - TensorFlow Extended（TFX）是一个面向生产的配置框架，基于 TensorFlow 构建 ML，并包含监控和模型版本管理。
* [unsloth](https://github.com/unslothai/unsloth) ![](https://img.shields.io/github/stars/unslothai/unsloth.svg?cacheSeconds=172800) - 面向 LLM 的微调与强化学习。训练 OpenAI gpt-oss、DeepSeek-R1、Qwen3、Gemma 3 和 TTS 的速度快 2 倍，同时减少 70% 的 VRAM 用量。

## 模型存储优化
* [AWQ](https://github.com/mit-han-lab/llm-awq) ![](https://img.shields.io/github/stars/mit-han-lab/llm-awq.svg?cacheSeconds=172800) - 面向 LLM 压缩与加速的激活感知权重量化。
* [GGML](https://github.com/ggml-org/ggml) ![](https://img.shields.io/github/stars/ggml-org/ggml.svg?cacheSeconds=172800) - GGML 是一个高性能机器学习张量库，可在 CPU 上实现高效推理，尤其针对大型语言模型进行了优化。
* [neural-compressor](https://github.com/intel/neural-compressor) ![](https://img.shields.io/github/stars/intel/neural-compressor.svg?cacheSeconds=172800) - Intel® Neural Compressor 致力于为主流框架提供常用模型压缩技术，如量化、剪枝（稀疏化）、蒸馏和神经架构搜索。
* [NNEF](https://www.khronos.org/nnef) - 神经网络交换格式（NNEF）是一种开放标准，用于表示神经网络模型，以实现不同机器学习框架和平台之间的互操作性和可移植性。
* [ONNX](https://github.com/onnx/onnx) ![](https://img.shields.io/github/stars/onnx/onnx.svg?cacheSeconds=172800) - ONNX（开放神经网络交换格式）是一种开源格式，旨在促进不同框架和平台之间机器学习模型的互操作性与可移植性。
* [PFA](https://dmg.org/pfa) - PFA（可移植分析格式）是一种基于 JSON 的标准格式，用于以可移植方式表示和交换预测模型及分析工作流。
* [PMML](https://dmg.org/pmml) - PMML（预测模型标记语言）是一种基于 XML 的标准，用于在不同应用之间表示和共享预测模型。
* [Quanto](https://github.com/huggingface/optimum-quanto) ![](https://img.shields.io/github/stars/huggingface/optimum-quanto.svg?cacheSeconds=172800) - Quanto 致力于简化深度学习模型量化。

## 隐私与安全
* [AI Gateway](https://github.com/portkey-ai/gateway) ![](https://img.shields.io/github/stars/portkey-ai/gateway.svg?cacheSeconds=172800) - AI Gateway 是一个极速 AI 网关，集成了防护机制。
* [ART](https://github.com/Trusted-AI/adversarial-robustness-toolbox) ![](https://img.shields.io/github/stars/Trusted-AI/adversarial-robustness-toolbox.svg?cacheSeconds=172800) - ART（对抗鲁棒性工具箱）提供工具，帮助开发者和研究人员防御并评估机器学习模型与应用遭受的对抗威胁，包括规避、投毒、模型提取和推理攻击。
* [CipherChat](https://github.com/RobustNLP/CipherChat) ![](https://img.shields.io/github/stars/RobustNLP/CipherChat.svg?cacheSeconds=172800) - CipherChat 是一个用于评估 LLM 安全对齐泛化能力的框架。
* [DeepTeam](https://github.com/confident-ai/deepteam) ![](https://img.shields.io/github/stars/confident-ai/deepteam.svg?cacheSeconds=172800) - DeepTeam 是一个简单易用的开源 LLM 红队测试框架，用于渗透测试并保障大型语言模型系统的安全。
* [FATE](https://github.com/FederatedAI/FATE) ![](https://img.shields.io/github/stars/FederatedAI/FATE.svg?cacheSeconds=172800) - FATE（联邦 AI 技术赋能器）是世界上首个工业级联邦学习开源框架，使企业和机构能够在保护数据安全与隐私的同时开展数据协作。
* [FedML](https://github.com/FedML-AI/FedML) ![](https://img.shields.io/github/stars/FedML-AI/FedML.svg?cacheSeconds=172800) - FedML 为任意地点、任意规模的联邦/分布式机器学习提供集成研究与生产的边缘云平台。
* [Flower](https://github.com/flwrlabs/flower) ![](https://img.shields.io/github/stars/flwrlabs/flower.svg?cacheSeconds=172800) - Flower 是一个统一方法的联邦学习框架，可联合运行任意机器学习工作负载、使用任意 ML 框架和任意编程语言。
* [Google's Differential Privacy](https://github.com/google/differential-privacy) ![](https://img.shields.io/github/stars/google/differential-privacy.svg?cacheSeconds=172800) - 这是一个 C++ 库，包含 ε-差分隐私算法，可用于对包含私人或敏感信息的数值数据集生成汇总统计信息。
* [Guardrails](https://github.com/guardrails-ai/guardrails) ![](https://img.shields.io/github/stars/guardrails-ai/guardrails.svg?cacheSeconds=172800) - Guardrails 是一个包，可让用户为大型语言模型的输出添加结构、类型和质量保证。
* [NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) ![](https://img.shields.io/github/stars/NVIDIA-NeMo/Guardrails.svg?cacheSeconds=172800) - NeMo Guardrails 是一个开源工具包，可轻松为基于 LLM 的对话系统添加可编程防护机制。
* [Opacus](https://github.com/meta-pytorch/opacus)  ![](https://img.shields.io/github/stars/meta-pytorch/opacus.svg?cacheSeconds=172800) - Opacus 是一个库，可使用差分隐私训练 PyTorch 模型。它只需在客户端进行极少代码改动，对训练性能影响很小，并允许客户端实时跟踪当前已消耗的隐私预算。
* [OpenFL](https://github.com/securefederatedai/openfederatedlearning)  ![](https://img.shields.io/github/stars/securefederatedai/openfederatedlearning.svg?cacheSeconds=172800) - OpenFL 是一个联邦学习 Python 框架，设计灵活、可扩展且易于数据科学家学习。OpenFL 由 Intel 物联网事业部（IOTG）和 Intel Labs 开发。
* [PySyft](https://github.com/OpenMined/PySyft) ![](https://img.shields.io/github/stars/OpenMined/PySyft.svg?cacheSeconds=172800) - 一个用于安全、私密深度学习的 Python 库。PySyft 将私有数据与模型训练解耦，并在 PyTorch 中使用多方计算（MPC）。
* [Tensorflow Privacy](https://github.com/tensorflow/privacy) ![](https://img.shields.io/github/stars/tensorflow/privacy.svg?cacheSeconds=172800) - 一个 Python 库，包含使用差分隐私训练机器学习模型的 TensorFlow 优化器实现。
* [TF Encrypted](https://github.com/tf-encrypted/tf-encrypted) ![](https://img.shields.io/github/stars/tf-encrypted/tf-encrypted.svg?cacheSeconds=172800) - 一个用于基于 TensorFlow 对加密数据进行机密机器学习的框架。

# 其他精选列表

* [Awesome Agentic Engineering Resources](https://github.com/EthicalML/awesome-agentic-engineering-resources) ![](https://img.shields.io/github/stars/EthicalML/awesome-agentic-engineering-resources.svg?cacheSeconds=172800) - 精选资源、工具和参考资料合集，助你构建智能体 AI 系统。
* [Awesome AI Gateway](https://github.com/cuihuan/awesome-ai-gateway) ![](https://img.shields.io/github/stars/cuihuan/awesome-ai-gateway.svg?cacheSeconds=172800) - 精选的双语（英文/简体中文）AI 网关和 LLM 代理列表（LiteLLM、OpenRouter、Portkey、Kong、Higress、new-api），按成本、合规性、自托管和路由进行比较，并提供决策树、可复现成本基准测试和选择评分卡。
* [Awesome AI Regulation](https://github.com/EthicalML/awesome-artificial-intelligence-regulation) ![](https://img.shields.io/github/stars/EthicalML/awesome-artificial-intelligence-regulation.svg?cacheSeconds=172800) - 涵盖负责任部署机器学习系统所需的治理、合规和监管框架，并覆盖不同司法辖区。
* [Awesome AI Tokenomics](https://github.com/QuesmaOrg/awesome-ai-tokenomics) ![](https://img.shields.io/github/stars/QuesmaOrg/awesome-ai-tokenomics.svg?cacheSeconds=172800) - 涵盖 AI 系统中的 Token 成本与效率，包括监控、优化、缓存、模型选择和上下文管理。
* [Awesome Production GenAI](https://github.com/EthicalML/awesome-production-agentic-systems) ![](https://img.shields.io/github/stars/EthicalML/awesome-production-agentic-systems.svg?cacheSeconds=172800) - 专注于生成式 AI 部署，包括 LLM 运维、提示词工程以及生成式 AI 专属的监控和安全工具。
* [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) ![](https://img.shields.io/github/stars/Yigtwxx/Awesome-RAG-Production.svg?cacheSeconds=172800) - 精选生产级工具和最佳实践，助你构建可扩展的 RAG 系统。

# 贡献者

<a href="https://github.com/EthicalML/awesome-production-machine-learning/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=EthicalML/awesome-production-machine-learning" />
</a>
