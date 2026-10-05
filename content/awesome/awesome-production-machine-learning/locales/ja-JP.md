[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![X](https://img.shields.io/badge/X-%23000000?logo=X&logoColor=white)](https://twitter.com/EthicalML)

# Awesome Production Machine Learning

このリポジトリには、機械学習を本番環境にデプロイ、監視、バージョン管理、スケーリング、保護するのに役立つ、優れたオープンソースライブラリを厳選して掲載しています 🚀

この GitHub リポジトリをウォッチすると、毎月追加される本番 ML ライブラリの概要を[リリース](https://github.com/EthicalML/awesome-production-machine-learning/releases)で受け取り、最新情報を確認できます 🤩

さらに、ツールチェーンをすばやく検索できる[検索ツールキット](https://huggingface.co/spaces/zhiminy/Awesome-Production-Machine-Learning-Search)も提供しています。

## このページの各セクションへのクイックリンク

| | | |
|-|-|-|
| [🔧 AutoML](#automl) | [🧮 計算と通信の最適化](#computation-and-communication-optimisation) | [🏷️ データのアノテーションと合成](#data-annotation-and-synthesis) |
| [🧵 データパイプライン](#data-pipeline) | [📓 データサイエンスノートブック](#data-science-notebook) | [💾 データストレージの最適化](#data-storage-optimisation) |
| [💸 データストリーム処理](#data-stream-processing) | [💪 デプロイとサービング](#deployment-and-serving) | [📈 評価とモニタリング](#evaluation-and-monitoring) |
| [🔍 説明可能性と公平性](#explainability-and-fairness) | [🎁 特徴量ストア](#feature-store) | [🔴 産業用途向け異常検知](#industry-strength-anomaly-detection) |
| [👁️ 産業用途向けコンピュータービジョン](#industry-strength-computer-vision) | [🔥 産業用途向け情報検索](#industry-strength-information-retrieval) | [🔠 産業用途向け自然言語処理](#industry-strength-nlp) |
| [🙌 産業用途向けレコメンダーシステム](#industry-strength-recommender-system) | [🍕 産業用途向け強化学習](#industry-strength-reinforcement-learning) | [🤖 産業用途向けロボティクス](#industry-strength-robotics) |
| [📊 産業用途向け可視化](#industry-strength-visualisation) | [📅 メタデータ管理](#metadata-management) | [📜 モデル、データ、実験の管理](#model-data-and-experiment-management) |
| [🔩 モデルストレージの最適化](#model-storage-optimisation) | [🏁 モデルの学習とオーケストレーション](#model-training-and-orchestration) | [🔏 プライバシーと安全性](#privacy-and-safety) |

## リストへの貢献

リストを整理された最新の状態に保つため、PR を送信する際は[CONTRIBUTING.md](https://github.com/EthicalML/awesome-production-machine-learning/blob/master/CONTRIBUTING.md)の要件をご確認ください。着実な成長を支えてくださるコミュニティの皆さん、ありがとうございます 🚀

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
    alt="スター履歴チャート"
    src="https://star-history.dera.page/svg?repos=EthicalML/awesome-production-machine-learning&type=Date"
  />
</picture>

## 10 分間の動画による概要

<table>
  <tr>
    <td width="30%">
        この<a href="https://www.youtube.com/watch?v=Ynb6X0KZKxY">10 分間の動画</a>では、機械学習運用が必要とされる背景と、このリポジトリにあるツールの概要を紹介します。<a href="https://www.youtube.com/watch?v=NycftytgPnk">新しい動画</a>では、2024 年版に更新された MLOps の現状を取り上げています。
    </td>
    <td width="70%">
        <a href="https://www.youtube.com/watch?v=Ynb6X0KZKxY"><img src="images/video.png"></a>
    </td>
  </tr>
</table>

## このリポジトリやその他の進展に関する定期的な最新情報を受け取りませんか？

<table>
  <tr>
    <td width="30%">
         <a href="https://ethical.institute/mle.html">Machine Learning Engineer</a> ニュースレターに登録できます。本番機械学習に関する記事やチュートリアルを毎週厳選して受け取る 70,000 人以上の ML 専門家や愛好家に加わりましょう。
    </td>
    <td width="70%">
        <a href="https://ethical.institute/mle.html"><img src="images/mleng.png"></a>
    </td>
  </tr>
  <tr>
    <td width="30%">
         また、<a href="https://github.com/EthicalML/awesome-production-agentic-systems/">Awesome Production GenAI</a> リストもご覧ください。生成 AI アプリケーションやシステムをデプロイ、監視、バージョン管理、スケーリングするための優れたオープンソースライブラリを厳選してまとめています。
    </td>
    <td width="70%">
        <a href="https://github.com/EthicalML/awesome-production-agentic-systems/"><img src="images/list.jpg"></a>
    </td>
  </tr>
</table>

# メインコンテンツ

## AutoML
* [AIDE](https://github.com/WecoAI/aideml) ![](https://img.shields.io/github/stars/WecoAI/aideml.svg?cacheSeconds=172800) - AIDE は、機械学習タスクの解決策を自律的に探索、実装、評価するために木探索アルゴリズムを用いる、オープンソースの ML エンジニアリングエージェントです。
* [AutoGluon](https://github.com/autogluon/autogluon) ![](https://img.shields.io/github/stars/autogluon/autogluon.svg?cacheSeconds=172800) - 人気の機械学習ライブラリ（Scikit-Learn、LightGBM、CatBoost、PyTorch、MXNet）を基盤に、表形式、画像、テキストデータ向けの特徴量、モデル、ハイパーパラメーターの選択を自動化します。
* [Autokeras](https://github.com/keras-team/autokeras) ![](https://img.shields.io/github/stars/keras-team/autokeras.svg?cacheSeconds=172800) - ["Auto-Keras: Efficient Neural Architecture Search with Network Morphism"](https://arxiv.org/abs/1806.10282)に基づく Keras 用 AutoML ライブラリです。
* [auto-sklearn](https://github.com/automl/auto-sklearn) ![](https://img.shields.io/github/stars/automl/auto-sklearn.svg?cacheSeconds=172800) - sklearn のアルゴリズムとハイパーパラメーターの調整を自動化するフレームワークです。
* [Ax](https://github.com/facebook/Ax) ![](https://img.shields.io/github/stars/facebook/Ax.svg?cacheSeconds=172800) - Ax は、適応的な実験を理解、管理、デプロイ、自動化するための、使いやすい汎用プラットフォームです。
* [BoTorch](https://github.com/meta-pytorch/botorch) ![](https://img.shields.io/github/stars/meta-pytorch/botorch.svg?cacheSeconds=172800) - BoTorch は PyTorch 上に構築されたベイズ最適化ライブラリです。
* [EvalML](https://github.com/alteryx/evalml) ![](https://img.shields.io/github/stars/alteryx/evalml.svg?cacheSeconds=172800) - EvalML は、ドメイン固有の目的関数を用いて機械学習パイプラインを構築、最適化、評価する AutoML ライブラリです。
* [Feature Engine](https://github.com/feature-engine/feature_engine) ![](https://img.shields.io/github/stars/feature-engine/feature_engine.svg?cacheSeconds=172800) - Feature-engine は、機械学習モデルで使う特徴量を作成するための複数の変換器を備えた Python ライブラリです。
* [Featuretools](https://github.com/alteryx/featuretools) ![](https://img.shields.io/github/stars/alteryx/featuretools.svg?cacheSeconds=172800) - 特徴量エンジニアリングを自動化するオープンソースフレームワークです。
* [FLAML](https://github.com/microsoft/FLAML) ![](https://img.shields.io/github/stars/microsoft/FLAML.svg?cacheSeconds=172800) - FLAML は、自動機械学習とチューニングのための高速ライブラリです。
* [HEBO](https://github.com/huawei-noah/hebo) ![](https://img.shields.io/github/stars/huawei-noah/hebo.svg?cacheSeconds=172800) - ハイパーパラメーター最適化フレームワークのオープンソース集です。[NeurIPS 2020 Black-Box Optimisation Challenge](https://bbochallenge.com/leaderboard)の優勝提出物も含み、ハイパーパラメーター調整タスクでテストされています。
* [Katib](https://github.com/kubeflow/katib) ![](https://img.shields.io/github/stars/kubeflow/katib.svg?cacheSeconds=172800) - ハイパーパラメーター調整とニューラルアーキテクチャ探索のための、Kubernetes ベースのシステムです。
* [keras-tuner](https://github.com/keras-team/keras-tuner) ![](https://img.shields.io/github/stars/keras-team/keras-tuner.svg?cacheSeconds=172800) - Keras Tuner は使いやすく、分散実行可能なハイパーパラメーター最適化フレームワークで、ハイパーパラメーター探索に伴う課題を解決します。探索空間を簡単に定義し、付属のアルゴリズムを活用して最適なハイパーパラメーター値を見つけられます。
* [Optuna](https://github.com/optuna/optuna) ![](https://img.shields.io/github/stars/optuna/optuna.svg?cacheSeconds=172800) - Optuna は、特に機械学習向けに設計された自動ハイパーパラメーター最適化ソフトウェアフレームワークです。
* [OSS Vizier](https://github.com/google/vizier) ![](https://img.shields.io/github/stars/google/vizier.svg?cacheSeconds=172800) - OSS Vizier は、ブラックボックス最適化と研究のための Python ベースのサービスであり、大規模運用を想定して設計された初期のハイパーパラメーター調整サービスの 1 つです。
* [Perpetual](https://github.com/perpetual-ml/perpetual) ![](https://img.shields.io/github/stars/perpetual-ml/perpetual.svg?cacheSeconds=172800) - ハイパーパラメーター最適化が不要で、シンプルな予算パラメーターによってモデルの複雑さを調整できる勾配ブースティングマシンです。
* [TPOT](https://github.com/epistasislab/tpot) ![](https://img.shields.io/github/stars/epistasislab/tpot.svg?cacheSeconds=172800) - 特徴量選択や前処理などを含む sklearn パイプラインの作成を自動化します。
* [tsfresh](https://github.com/blue-yonder/tsfresh) ![](https://img.shields.io/github/stars/blue-yonder/tsfresh.svg?cacheSeconds=172800) - 時系列から関連する特徴量を自動抽出します。

## 計算と通信の最適化 <a id="computation-and-communication-optimisation"></a>

* [Accelerate](https://github.com/huggingface/accelerate) ![](https://img.shields.io/github/stars/huggingface/accelerate.svg?cacheSeconds=172800) - Accelerate は、マルチ GPU/TPU および混合精度に関する定型コードだけを抽象化し、それ以外のコードは変更せずに保ちます。
* [Adapters](https://github.com/adapter-hub/adapters) ![](https://img.shields.io/github/stars/adapter-hub/adapters.svg?cacheSeconds=172800) - Adapters は、パラメーター効率の高いモジュール型転移学習のための統合ライブラリです。
* [Cache-DiT](https://github.com/vipshop/cache-dit) ![](https://img.shields.io/github/stars/vipshop/cache-dit.svg?cacheSeconds=172800) - Diffusers 上に構築され、ほぼすべての DiT をサポートします。DBCache、TaylorSeer、SCM などによるハイブリッドキャッシュ高速化に加え、Context Parallelism、Tensor Parallelism、ハイブリッド 2D/3D 並列化などの包括的な最適化を提供し、コンパイル、CPU オフロード、量子化にも対応します。
* [Colossal-AI](https://github.com/hpcaitech/ColossalAI) ![](https://img.shields.io/github/stars/hpcaitech/ColossalAI.svg?cacheSeconds=172800) - 大規模モデル時代に向けた統合ディープラーニングシステムで、大規模 AI モデルの学習と推論を効率的かつ迅速にデプロイできます。
* [Composer](https://github.com/mosaicml/composer) ![](https://img.shields.io/github/stars/mosaicml/composer.svg?cacheSeconds=172800) - Composer は、ニューラルネットワークをより高速に、より低コストで、より高精度に学習できる PyTorch ライブラリです。
* [CuDF](https://github.com/NVIDIA/cudf) ![](https://img.shields.io/github/stars/NVIDIA/cudf.svg?cacheSeconds=172800) - Apache Arrow の列指向メモリ形式を基盤とする cuDF は、データの読み込み、結合、集約、フィルタリングなどを行う GPU DataFrame ライブラリです。
* [CuML](https://github.com/NVIDIA/cuml) ![](https://img.shields.io/github/stars/NVIDIA/cuml.svg?cacheSeconds=172800) - cuML は、他の RAPIDS プロジェクトと互換性のある API を備えた機械学習アルゴリズムおよび数学的プリミティブ関数を実装するライブラリ群です。
* [CuPy](https://github.com/cupy/cupy) ![](https://img.shields.io/github/stars/cupy/cupy.svg?cacheSeconds=172800) - CUDA 上で NumPy 互換の多次元配列を実装しています。CuPy は中核となる多次元配列クラス cupy.ndarray と、それを扱う多数の関数で構成されます。
* [DEAP](https://github.com/DEAP/deap) ![](https://img.shields.io/github/stars/DEAP/deap.svg?cacheSeconds=172800) - アイデアの迅速な試作と検証のための、新しい進化計算フレームワークです。アルゴリズムを明示的にし、データ構造を透明にすることを目指しています。multiprocessing や SCOOP などの並列化機構と完全に連携します。
* [DeepEP](https://github.com/deepseek-ai/DeepEP) ![](https://img.shields.io/github/stars/deepseek-ai/DeepEP.svg?cacheSeconds=172800) - Mixture-of-Experts（MoE）と Expert Parallelism（EP）に特化した通信ライブラリです。MoE dispatch と combine とも呼ばれる、高スループットかつ低レイテンシの all-to-all GPU カーネルを提供します。FP8 などの低精度演算にも対応します。
* [DGL](https://github.com/dmlc/dgl) ![](https://img.shields.io/github/stars/dmlc/dgl.svg?cacheSeconds=172800) - DGL は、グラフ上のディープラーニング向けに使いやすく、高性能でスケーラブルな Python パッケージです。
* [DLRover](https://github.com/intelligent-machine-learning/dlrover) ![](https://img.shields.io/github/stars/intelligent-machine-learning/dlrover.svg?cacheSeconds=172800) - DLRover は、大規模 AI モデルの分散学習を簡単、安定、高速、かつ環境に配慮したものにします。
* [Dask](https://github.com/dask/dask) ![](https://img.shields.io/github/stars/dask/dask.svg?cacheSeconds=172800) - Pandas と NumPy の計算向け分散並列処理フレームワークです。
* [DeepSpeed](https://github.com/deepspeedai/DeepSpeed) ![](https://img.shields.io/github/stars/deepspeedai/DeepSpeed.svg?cacheSeconds=172800) - DeepSpeed は、分散学習と推論を簡単、効率的、効果的にするディープラーニング最適化ライブラリです。
* [FlagGems](https://github.com/flagos-ai/FlagGems) ![](https://img.shields.io/github/stars/flagos-ai/FlagGems.svg?cacheSeconds=172800) - OpenAI Triton で実装された高性能な汎用演算子ライブラリです。多様なハードウェアプラットフォームで LLM の学習と推論を高速化することを目指す、バックエンドに依存しないカーネル群を基盤としています。
* [Flashlight](https://github.com/flashlight/flashlight) ![](https://img.shields.io/github/stars/flashlight/flashlight.svg?cacheSeconds=172800) - Facebook AI Research と Torch、TensorFlow、Eigen、Deep Speech の開発者による、すべて C++ で書かれた高速で柔軟な機械学習ライブラリです。
* [Flax](https://github.com/google/flax) ![](https://img.shields.io/github/stars/google/flax.svg?cacheSeconds=172800) - 柔軟性を重視して設計された、JAX 用ニューラルネットワークライブラリおよびエコシステムです。
* [GPUStack](https://github.com/gpustack/gpustack) ![](https://img.shields.io/github/stars/gpustack/gpustack.svg?cacheSeconds=172800) - オープンソースの GPU クラスター管理ツールです。
* [Hivemind](https://github.com/learning-at-home/hivemind) ![](https://img.shields.io/github/stars/learning-at-home/hivemind.svg?cacheSeconds=172800) - PyTorch による分散型ディープラーニングです。
* [Jax](https://github.com/jax-ml/jax) ![](https://img.shields.io/github/stars/jax-ml/jax.svg?cacheSeconds=172800) - Python+NumPy プログラムに対する合成可能な変換を提供します。微分、ベクトル化、GPU/TPU 向け JIT コンパイルなどが可能です。
* [Kompute](https://github.com/KomputeProject/kompute) ![](https://img.shields.io/github/stars/KomputeProject/kompute.svg?cacheSeconds=172800) - 高度な GPU データ処理の用途に最適化された、超高速で軽量、携帯電話にも対応する Vulkan 計算フレームワークです。
* [Liger Kernel](https://github.com/linkedin/Liger-Kernel) ![](https://img.shields.io/github/stars/linkedin/Liger-Kernel.svg?cacheSeconds=172800) - LLM の学習専用に設計された Triton カーネル集です。
* [LightGBM](https://github.com/lightgbm-org/LightGBM) ![](https://img.shields.io/github/stars/lightgbm-org/LightGBM.svg?cacheSeconds=172800) - LightGBM は、木ベースの学習アルゴリズムを用いる勾配ブースティングフレームワークです。
* [MLX](https://github.com/ml-explore/mlx) ![](https://img.shields.io/github/stars/ml-explore/mlx.svg?cacheSeconds=172800) - Apple silicon 上で機械学習を行うための配列フレームワークです。
* [Modin](https://github.com/modin-project/modin) ![](https://img.shields.io/github/stars/modin-project/modin.svg?cacheSeconds=172800) - コードを 1 行変更するだけで、Pandas のワークフローを高速化できます。
* [NVIDIA TensorRT](https://github.com/NVIDIA/TensorRT) ![](https://img.shields.io/github/stars/NVIDIA/TensorRT.svg?cacheSeconds=172800) - NVIDIA GPU とディープラーニングアクセラレーター向けの高性能推論を実現する C++ ライブラリです。
* [Nevergrad](https://github.com/facebookresearch/nevergrad) ![](https://img.shields.io/github/stars/facebookresearch/nevergrad.svg?cacheSeconds=172800) - 勾配を使わない最適化プラットフォームです。
* [Norse](https://github.com/norse/norse) ![](https://img.shields.io/github/stars/norse/norse.svg?cacheSeconds=172800) - Norse は、生物に着想を得た疎でイベント駆動型という、人工ニューラルネットワークとは根本的に異なる性質を持つニューラル構成要素の利点を活用することを目指しています。
* [Numba](https://github.com/numba/numba) ![](https://img.shields.io/github/stars/numba/numba.svg?cacheSeconds=172800)  - Python の配列および数値関数向けコンパイラーです。
* [Optimum](https://github.com/huggingface/optimum) ![](https://img.shields.io/github/stars/huggingface/optimum.svg?cacheSeconds=172800) - Transformers と Diffusers を拡張し、使いやすさを保ちながら、対象ハードウェア上でモデルを最大限効率よく学習・実行できる最適化ツールを提供します。
* [PEFT](https://github.com/huggingface/peft) ![](https://img.shields.io/github/stars/huggingface/peft.svg?cacheSeconds=172800) - パラメーター効率の高いファインチューニング（PEFT）手法を使うと、事前学習済み言語モデル（PLM）の全パラメーターをファインチューニングせずに、さまざまな下流アプリケーションへ効率的に適応できます。
* [PaddlePaddle](https://github.com/PaddlePaddle/Paddle) ![](https://img.shields.io/github/stars/PaddlePaddle/Paddle.svg?cacheSeconds=172800) - 数百のノードに分散したデータソースを使って、大規模なディープネットワークを学習するフレームワークです。
* [PyG](https://github.com/pyg-team/pytorch_geometric) ![](https://img.shields.io/github/stars/pyg-team/pytorch_geometric.svg?cacheSeconds=172800) - PyG（PyTorch Geometric）は PyTorch を基盤とするライブラリで、構造化データに関連する幅広い用途向けに、グラフニューラルネットワーク（GNN）を簡単に記述・学習できます。
* [PyTorch Lightning](https://github.com/Lightning-AI/pytorch-lightning) ![](https://img.shields.io/github/stars/Lightning-AI/pytorch-lightning.svg?cacheSeconds=172800) - コードを変更せずに複数の GPU や TPU 上で AI モデルの事前学習、ファインチューニング、デプロイを行えます。
* [PyTorch](https://github.com/pytorch/pytorch) ![](https://img.shields.io/github/stars/pytorch/pytorch.svg?cacheSeconds=172800) - ニューラルネットワークベースのディープラーニングモデルを開発・学習するためのライブラリです。
* [Ray](https://github.com/ray-project/ray) ![](https://img.shields.io/github/stars/ray-project/ray.svg?cacheSeconds=172800) - 機械学習向けの柔軟で高性能な分散実行フレームワークです。
* [SetFit](https://github.com/huggingface/setfit) ![](https://img.shields.io/github/stars/huggingface/setfit.svg?cacheSeconds=172800) - Sentence Transformers の few-shot ファインチューニングを効率的に行える、プロンプト不要のフレームワークです。
* [Sonnet](https://github.com/google-deepmind/sonnet) ![](https://img.shields.io/github/stars/google-deepmind/sonnet.svg?cacheSeconds=172800) - 機械学習研究向けに、シンプルで合成可能な抽象化を提供する TensorFlow 2 ベースのライブラリです。
* [Streaming](https://github.com/mosaicml/streaming) ![](https://img.shields.io/github/stars/mosaicml/streaming.svg?cacheSeconds=172800) - ニューラルネットワークの効率的な学習を実現するデータストリーミングライブラリです。
* [TensorFlow](https://github.com/tensorflow/tensorflow) ![](https://img.shields.io/github/stars/tensorflow/tensorflow.svg?cacheSeconds=172800) - 最先端の機械学習アプリケーションの開発とデプロイ向けに設計された主要ライブラリです。
* [ThunderKittens](https://github.com/HazyResearch/ThunderKittens) ![](https://img.shields.io/github/stars/HazyResearch/ThunderKittens.svg?cacheSeconds=172800) CUDA で高速なディープラーニングカーネルを簡単に記述するためのフレームワークです。
* [TorchOpt](https://github.com/metaopt/torchopt) ![](https://img.shields.io/github/stars/metaopt/torchopt.svg?cacheSeconds=172800) - PyTorch 上に構築された、微分可能な最適化のための効率的なライブラリです。
* [Triton](https://github.com/triton-lang/triton) ![](https://img.shields.io/github/stars/triton-lang/triton.svg?cacheSeconds=172800) - 高効率なカスタム深層学習プリミティブを記述するための言語およびコンパイラーです。CUDA より高い生産性で高速なコードを書けるオープンソース環境を、既存の DSL より高い柔軟性とともに提供することを目指しています。
* [Vaex](https://github.com/vaexio/vaex) ![](https://img.shields.io/github/stars/vaexio/vaex.svg?cacheSeconds=172800) Pandas に似た遅延評価型 Out-of-Core DataFrame を扱い、大規模な表形式データセットを可視化・探索するための高性能 Python ライブラリです。メモリマッピング、メモリコピーを行わないポリシー、遅延計算を用いて、メモリを無駄にせず最高の性能を実現します。
* [Vowpal Wabbit](https://github.com/VowpalWabbit/vowpal_wabbit) ![](https://img.shields.io/github/stars/VowpalWabbit/vowpal_wabbit.svg?cacheSeconds=172800) オンライン学習、ハッシュ化、allreduce、reduction、learning2search、能動学習、対話型学習などの手法で機械学習の最前線を切り開くシステムです。
* [XGBoost](https://github.com/dmlc/xgboost) ![](https://img.shields.io/github/stars/dmlc/xgboost.svg?cacheSeconds=172800) - 高効率、柔軟性、移植性を備えるよう設計された、最適化済みの分散勾配ブースティングライブラリです。
* [YDF](https://github.com/google/yggdrasil-decision-forests) ![](https://img.shields.io/github/stars/google/yggdrasil-decision-forests.svg?cacheSeconds=172800) - YDF（Yggdrasil Decision Forests）は、Random Forest、Gradient Boosted Decision Trees、CART、Isolation Forest モデルの学習、評価、解釈、サービングを行うライブラリです。
* [bitsandbytes](https://github.com/bitsandbytes-foundation/bitsandbytes) ![](https://img.shields.io/github/stars/bitsandbytes-foundation/bitsandbytes.svg?cacheSeconds=172800) - CUDA カスタム関数を扱う軽量な Python ラッパーライブラリで、特に 8 ビットオプティマイザー、行列積（LLM.int8()）、8 ビットおよび 4 ビット量子化関数を提供します。
* [einops](https://github.com/arogozhnikov/einops) ![](https://img.shields.io/github/stars/arogozhnikov/einops.svg?cacheSeconds=172800) - 読みやすく信頼性の高いコードのための、柔軟で強力なテンソル演算です。
* [scikit-learn](https://github.com/scikit-learn/scikit-learn) ![](https://img.shields.io/github/stars/scikit-learn/scikit-learn.svg?cacheSeconds=172800) - データアクセス、データ準備、統計モデル構築のための幅広いモジュールを備えた強力な機械学習ライブラリです。
* [snnTorch](https://github.com/jeshraghian/snntorch) ![](https://img.shields.io/github/stars/jeshraghian/snntorch.svg?cacheSeconds=172800) - スパイキングニューラルネットワークを用いた深層・オンライン学習ライブラリです。
* [torchdistill](https://github.com/yoshitomo-matsubara/torchdistill) ![](https://img.shields.io/github/stars/yoshitomo-matsubara/torchdistill.svg?cacheSeconds=172800) - 最先端のさまざまな知識蒸留手法を提供します。Python コードではなく宣言的な YAML 設定ファイルを編集するだけで、新しい実験を簡単に設計できます。
* [torchkeras](https://github.com/lyhue1991/torchkeras?tab=readme-ov-file) ![](https://img.shields.io/github/stars/lyhue1991/torchkeras?tab=readme-ov-file.svg?cacheSeconds=172800) torchkeras は、Keras 風の書き方で PyTorch のニューラルネットワークを学習するためのシンプルなツールです。
* [veScale](https://github.com/volcengine/veScale) ![](https://img.shields.io/github/stars/volcengine/veScale.svg?cacheSeconds=172800) - PyTorch ネイティブの LLM 学習フレームワークです。
* [yellowbrick](https://github.com/DistrictDataLabs/yellowbrick) ![](https://img.shields.io/github/stars/DistrictDataLabs/yellowbrick.svg?cacheSeconds=172800) - scikit-learn などの機械学習ライブラリ向けにモデル評価プロットを提供する、matplotlib ベースのライブラリです。

## データのアノテーションと合成 <a id="data-annotation-and-synthesis"></a>
* [Argilla](https://github.com/argilla-io/argilla) ![](https://img.shields.io/github/stars/argilla-io/argilla.svg?cacheSeconds=172800) - Argilla は、ドメインの専門家やデータチームが、より短時間で優れた NLP データセットを構築できるよう支援します。
* [cleanlab](https://github.com/cleanlab/cleanlab) ![](https://img.shields.io/github/stars/cleanlab/cleanlab.svg?cacheSeconds=172800) - データ中心 AI のための Python ライブラリです。誤ラベルデータや外れ値を自動検出し、複数アノテーターのデータセットで合意度やアノテーターの品質を推定し、次に再ラベルすべきデータを提案します。
* [COCO Annotator](https://github.com/jsbroks/coco-annotator) ![](https://img.shields.io/github/stars/jsbroks/coco-annotator.svg?cacheSeconds=172800) - 物体検出、位置特定、キーポイント用の Web ベース画像セグメンテーションツールです。
* [CVAT](https://github.com/cvat-ai/cvat) ![](https://img.shields.io/github/stars/cvat-ai/cvat.svg?cacheSeconds=172800) - CVAT（Computer Vision Annotation Tool）は、コンピュータービジョンアルゴリズム向けの、OpenCV の Web ベース動画・画像アノテーションツールです。
* [Doccano](https://github.com/doccano/doccano) ![](https://img.shields.io/github/stars/doccano/doccano.svg?cacheSeconds=172800) - 感情分析、固有表現認識、機械翻訳の機能を備えた、オープンソースの人手によるテキストアノテーションツールです。
* [Label Studio](https://github.com/HumanSignal/label-studio) ![](https://img.shields.io/github/stars/HumanSignal/label-studio.svg?cacheSeconds=172800) - 標準化された出力形式を備える、複数ドメイン向けのデータラベリング・アノテーションツールです。
* [LightlyStudio](https://github.com/lightly-ai/lightly-studio) ![](https://img.shields.io/github/stars/lightly-ai/lightly-studio.svg?cacheSeconds=172800) - 画像や動画などのビジョンデータセットをキュレーション、アノテーション、管理するオープンソースツールです。埋め込みベースの自動選択、アノテーション、バウンディングボックスやセグメンテーションの自動ラベリングに対応します。
* [NeMo Curator](https://github.com/NVIDIA-NeMo/Curator) ![](https://img.shields.io/github/stars/NVIDIA-NeMo/Curator.svg?cacheSeconds=172800) - 大規模言語モデル向けデータを効率的にキュレーションする、GPU 高速化フレームワークです。
* [refinery](https://github.com/code-kern-ai/refinery) ![](https://img.shields.io/github/stars/code-kern-ai/refinery.svg?cacheSeconds=172800) - 自然言語データのスケーリング、評価、保守に最適な、データサイエンティスト向けオープンソースツールです。
* [SDV](https://github.com/sdv-dev/SDV) ![](https://img.shields.io/github/stars/sdv-dev/SDV.svg?cacheSeconds=172800) - Synthetic Data Vault（SDV）は、単一テーブル、複数テーブル、時系列のデータセットを簡単に学習し、元データと同じ形式および統計的特性を持つ新しい合成データを生成できる、合成データ生成ライブラリのエコシステムです。
* [Semantic Segmentation Editor](https://github.com/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) ![](https://img.shields.io/github/stars/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor.svg?cacheSeconds=172800) - カメラおよび LiDAR データのラベリングに使える日立のオープンソースツールです。
* [synthcity](https://github.com/vanderschaarlab/synthcity) ![](https://img.shields.io/github/stars/vanderschaarlab/synthcity.svg?cacheSeconds=172800) - 合成された表形式データを生成・評価するライブラリです。
* [TabGAN](https://github.com/Diyago/Tabular-data-generation) ![](https://img.shields.io/github/stars/Diyago/Tabular-data-generation.svg?cacheSeconds=172800) - 敵対的フィルタリング、プライバシー指標、sklearn 連携を備え、GAN（CTGAN）、拡散モデル、LLM を使って合成表形式データを生成します。
* [ViPE](https://github.com/nv-tlabs/vipe) ![](https://img.shields.io/github/stars/nv-tlabs/vipe.svg?cacheSeconds=172800) - 生動画からカメラ姿勢と高密度深度マップをアノテーションする空間 AI ツールです。
* [YData Synthetic](https://github.com/Data-Centric-AI-Community/fg-data-synthetic) ![](https://img.shields.io/github/stars/Data-Centric-AI-Community/fg-data-synthetic.svg?cacheSeconds=172800) - 最先端の生成モデルを活用して、合成表形式データと時系列データを生成するパッケージです。

## データパイプライン <a id="data-pipeline"></a>
* [Apache Airflow](https://github.com/apache/airflow) ![](https://img.shields.io/github/stars/apache/airflow.svg?cacheSeconds=172800) - スケジューラー、DAG 定義、可視化用 UI を備えた、Python 製のデータパイプラインフレームワークです。
* [Apache Nifi](https://github.com/apache/nifi) ![](https://img.shields.io/github/stars/apache/nifi.svg?cacheSeconds=172800) - Apache NiFi はデータフロー向けに作られています。データのルーティング、変換、システム間連携ロジックを含む、高度に設定可能な有向グラフに対応します。
* [Argo Workflows](https://github.com/argoproj/argo-workflows) ![](https://img.shields.io/github/stars/argoproj/argo-workflows.svg?cacheSeconds=172800) - Argo Workflows は、Kubernetes 上の並列ジョブをオーケストレーションする、オープンソースのコンテナネイティブなワークフローエンジンです。Kubernetes CRD（カスタムリソース定義）として実装されています。
* [Couler](https://github.com/couler-proj/couler) ![](https://img.shields.io/github/stars/couler-proj/couler.svg?cacheSeconds=172800) - Argo Workflows、Tekton Pipelines、Apache Airflow など、異なるワークフローエンジン上で機械学習ワークフローを構築・管理するための統合インターフェースです。
* [DataTrove](https://github.com/huggingface/datatrove) ![](https://img.shields.io/github/stars/huggingface/datatrove.svg?cacheSeconds=172800) - 大規模なテキストデータを処理、フィルタリング、重複排除するライブラリです。
* [Dagster](https://github.com/dagster-io/dagster) ![](https://img.shields.io/github/stars/dagster-io/dagster.svg?cacheSeconds=172800) - 機械学習、分析、ETL 向けのデータオーケストレーターです。
* [DBT](https://github.com/dbt-labs/dbt) ![](https://img.shields.io/github/stars/dbt-labs/dbt.svg?cacheSeconds=172800) - データウェアハウス内で変換処理を実行する ETL ツールです。
* [Flyte](https://github.com/flyteorg/flyte) ![](https://img.shields.io/github/stars/flyteorg/flyte.svg?cacheSeconds=172800) - Lyft のクラウドネイティブな機械学習・データ処理プラットフォームです - [(デモ)](https://youtu.be/KdUJGSP1h9U?t=1451)。
* [Genie](https://github.com/Netflix/genie) ![](https://img.shields.io/github/stars/Netflix/genie.svg?cacheSeconds=172800) - Hadoop ベースのシステムからジョブを実行するためのインターフェースと起動を担う、ジョブオーケストレーションエンジンです。
* [Hamilton](https://github.com/apache/hamilton) ![](https://img.shields.io/github/stars/apache/hamilton.svg?cacheSeconds=172800) - データフローを定義するマイクロオーケストレーションフレームワークです。Jupyter、FastAPI、Spark、Ray、Dask など、Python が動作するあらゆる場所で実行できます。意識せずともソフトウェアエンジニアリングのベストプラクティスを取り入れられます。特徴量エンジニアリング変換、エンドツーエンドのモデルパイプライン、LLM ワークフローの定義に使えます。Kedro、Luigi、Airflow、dbt などのマクロオーケストレーションシステムを補完し、それらのマクロタスク内のコードを置き換えます。系譜と来歴、実行テレメトリー、データの概要を記録し、自動で情報が蓄積されるカタログを構築するセルフホスト可能な UI を備え、開発・本番の両方で利用できます。
* [Instill VDP](https://github.com/instill-ai/instill-core) ![](https://img.shields.io/github/stars/instill-ai/instill-core.svg?cacheSeconds=172800) - Instill VDP（Versatile Data Pipeline）は、データ処理パイプラインを立ち上げから完了まで効率化することを目指しています。
* [Instructor](https://github.com/567-labs/instructor) ![](https://img.shields.io/github/stars/567-labs/instructor.svg?cacheSeconds=172800) - GPT-3.5、GPT-4、GPT-4-Vision、オープンソースモデルなどの LLM から、JSON のような構造化データを簡単に取得できます。
* [Kedro](https://github.com/kedro-org/kedro) ![](https://img.shields.io/github/stars/kedro-org/kedro.svg?cacheSeconds=172800) - 堅牢でスケーラブル、デプロイ可能、再現可能かつバージョン管理可能なデータパイプラインの構築を支援する、ワークフロー開発ツールです。
* [Luigi](https://github.com/spotify/luigi) ![](https://img.shields.io/github/stars/spotify/luigi.svg?cacheSeconds=172800) - 依存関係の解決、ワークフロー管理、可視化などを扱い、複雑なバッチジョブのパイプライン構築を支援する Python モジュールです。
* [Metaflow](https://github.com/Netflix/metaflow) ![](https://img.shields.io/github/stars/Netflix/metaflow.svg?cacheSeconds=172800) - データサイエンティストが実際のデータサイエンスプロジェクトを簡単に構築・管理できるフレームワークです。
* [Pachyderm](https://github.com/pachyderm/pachyderm) ![](https://img.shields.io/github/stars/pachyderm/pachyderm.svg?cacheSeconds=172800) - 主に本番機械学習パイプラインを動的に構築することに重点を置く、Kubernetes ベースのオープンソース分散処理フレームワークです - [(動画)](https://www.youtube.com/watch?v=LamKVhe2RSM)。
* [Pixeltable](https://github.com/pixeltable/pixeltable) ![](https://img.shields.io/github/stars/pixeltable/pixeltable.svg?cacheSeconds=172800) マルチモーダル AI ワークロードの構築・管理に向けた、宣言的で増分処理に対応するデータ基盤を提供するオープンソース Python ライブラリです。
* [Prefect Core](https://github.com/PrefectHQ/prefect) ![](https://img.shields.io/github/stars/PrefectHQ/prefect.svg?cacheSeconds=172800) - 再試行、ログ記録、動的マッピング、キャッシュ、失敗通知などの機能を追加してデータパイプラインを簡単に拡張できるワークフロー管理システムです。
* [SeqIO](https://github.com/google/seqio) ![](https://img.shields.io/github/stars/google/seqio.svg?cacheSeconds=172800) - 後続の系列モデルに入力する系列データを処理するライブラリです。
* [Snakemake](https://github.com/snakemake/snakemake) ![](https://img.shields.io/github/stars/snakemake/snakemake.svg?cacheSeconds=172800) - 再現可能でスケーラブルなデータ分析のためのワークフロー管理システムです。
* [Towhee](https://github.com/towhee-io/towhee) ![](https://img.shields.io/github/stars/towhee-io/towhee.svg?cacheSeconds=172800) - 1 つ以上の ML モデルを使って埋め込みベクトルを生成する汎用機械学習パイプラインです。
* [unstructured](https://github.com/Unstructured-IO/unstructured) ![](https://img.shields.io/github/stars/Unstructured-IO/unstructured.svg?cacheSeconds=172800) - PDF、HTML、Word 文書などの画像やテキストを取り込み前処理することで、LLM 向けデータ処理ワークフローを効率化・最適化します。
* [ZenML](https://github.com/zenml-io/zenml) ![](https://img.shields.io/github/stars/zenml-io/zenml.svg?cacheSeconds=172800) - 再現可能な ML パイプラインを作成するための拡張可能なオープンソース MLOps フレームワークです。自動メタデータ追跡、キャッシュ、多数の他ツールとの統合を重視しています。

## データサイエンスノートブック <a id="data-science-notebook"></a>
* [Apache Zeppelin](https://github.com/apache/zeppelin) ![](https://img.shields.io/github/stars/apache/zeppelin.svg?cacheSeconds=172800) - SQL、Scala などを使ったデータ駆動型の対話的なデータ分析や共同編集ドキュメントを実現する Web ベースのノートブックです。
* [Deepnote](https://github.com/deepnote/deepnote) ![](https://img.shields.io/github/stars/deepnote/deepnote.svg?cacheSeconds=172800) - Deepnote は、AI を第一に考えた設計、洗練された UI、新しいブロック、ネイティブなデータ統合を備えた、Jupyter の置き換えとしてすぐに使えるツールです。お気に入りの IDE で Python、R、SQL をローカル実行し、その後 Deepnote クラウドに拡張すれば、リアルタイム共同作業、Deepnote エージェント、デプロイ可能なデータアプリを利用できます。
* [Jupyter Notebooks](https://github.com/jupyter/notebook) ![](https://img.shields.io/github/stars/jupyter/notebook.svg?cacheSeconds=172800) - 再現可能な開発のための Web ベースの Python サンドボックス環境です。
* [Marimo](https://github.com/marimo-team/marimo) ![](https://img.shields.io/github/stars/marimo-team/marimo.svg?cacheSeconds=172800) - リアクティブな Python ノートブックです。再現可能な実験を実行し、スクリプトとして実行、アプリとしてデプロイし、Git でバージョン管理できます。
* [Papermill](https://github.com/nteract/papermill) ![](https://img.shields.io/github/stars/nteract/papermill.svg?cacheSeconds=172800) - ノートブックのパラメーター化と Python スクリプトのような実行を行うライブラリです。
* [Polynote](https://github.com/polynote/polynote) ![](https://img.shields.io/github/stars/polynote/polynote.svg?cacheSeconds=172800) - 実験的な多言語ノートブック環境です。現在は Scala と Python（Spark の有無を問わず）、SQL、Vega に対応しています。
* [RMarkdown](https://github.com/rstudio/rmarkdown) ![](https://img.shields.io/github/stars/rstudio/rmarkdown.svg?cacheSeconds=172800) - Pandoc に基づく次世代の R Markdown 実装である rmarkdown パッケージです。
* [Stencila](https://github.com/stencila/stencila) ![](https://img.shields.io/github/stars/stencila/stencila.svg?cacheSeconds=172800) - データ駆動型コンテンツを作成、共同編集、共有するためのプラットフォームです。透明性と再現性を備えたコンテンツを実現します。
* [Voilà](https://github.com/voila-dashboards/voila) ![](https://img.shields.io/github/stars/voila-dashboards/voila.svg?cacheSeconds=172800) - Jupyter ノートブックを、ダッシュボードなどに利用できるスタンドアロンの Web アプリケーションに変換します。

## データストレージの最適化 <a id="data-storage-optimisation"></a>
* [AIStore](https://github.com/NVIDIA/aistore) ![](https://img.shields.io/github/stars/NVIDIA/aistore.svg?cacheSeconds=172800) - AIStore は軽量なオブジェクトストレージシステムです。ストレージノードを追加するたびに線形にスケールアウトでき、ペタスケールのディープラーニングに特化しています。
* [Alluxio](https://github.com/Alluxio/alluxio) ![](https://img.shields.io/github/stars/Alluxio/alluxio.svg?cacheSeconds=172800) - 計算フレームワークとストレージシステムの間をつなぐ仮想分散ストレージシステムです。
* [Apache Arrow](https://github.com/apache/arrow) ![](https://img.shields.io/github/stars/apache/arrow.svg?cacheSeconds=172800) - Pandas や Hadoop ベースのシステムなどと互換性のある、インメモリ列指向データ表現です。
* [Apache Druid](https://github.com/apache/druid) ![](https://img.shields.io/github/stars/apache/druid.svg?cacheSeconds=172800) - 高性能なリアルタイム分析データベースです。概要については[こちらの記事](https://medium.com/data-science/introduction-to-druid-4bf285b92b5a)をご覧ください。
* [Apache Hudi](https://github.com/apache/hudi) ![](https://img.shields.io/github/stars/apache/hudi.svg?cacheSeconds=172800) - Hudi は、データウェアハウスやデータベースの中核機能をデータレイクにもたらすトランザクション対応データレイクプラットフォームです。ストリーミング処理に適しており、効率的な増分バッチパイプラインも作成できます。Spark、Flink、Presto、Trino、Hive などの主要クエリエンジンに対応しています。詳細は[こちら](https://hudi.apache.org/)。
* [Apache Iceberg](https://github.com/apache/iceberg) ![](https://img.shields.io/github/stars/apache/iceberg.svg?cacheSeconds=172800) - Iceberg は、非常に大規模な分析テーブル（数十ペタバイトのデータを含む）向けに構築された ACID 準拠の高性能フォーマットです。SQL テーブルの信頼性とシンプルさをビッグデータにもたらし、Spark、Trino、Flink、Presto、Hive、Impala などのエンジンが同じテーブルを同時に安全に利用できるようにします。詳細は[こちら](https://iceberg.apache.org/)。
* [Apache Ignite](https://github.com/apache/ignite) ![](https://img.shields.io/github/stars/apache/ignite.svg?cacheSeconds=172800) - トランザクション、分析、ストリーミングのワークロードに対応し、ペタバイト規模でインメモリ速度を実現する、メモリ中心の分散データベース、キャッシュ、処理プラットフォームです - [デモ](https://www.youtube.com/watch?v=Xt4PWQ__YPw)。
* [Apache Parquet](https://github.com/apache/parquet-java) ![](https://img.shields.io/github/stars/apache/parquet-java.svg?cacheSeconds=172800) - Pandas や Hadoop ベースのシステムなどと互換性のある、ディスク上の列指向データ表現です。
* [Apache Pinot](https://github.com/apache/pinot) ![](https://img.shields.io/github/stars/apache/pinot.svg?cacheSeconds=172800) - リアルタイム分散 OLAP データストアです。ClickHouse、Druid、Pinot などのオープンソース OLAP システムの比較は[こちら](https://medium.com/@leventov/comparison-of-the-open-source-olap-systems-for-big-data-clickhouse-druid-and-pinot-8e042a5ed1c7)をご覧ください。
* [Casibase](https://github.com/the-open-agent/openagent) ![](https://img.shields.io/github/stars/the-open-agent/openagent.svg?cacheSeconds=172800) - Web UI とエンタープライズ SSO を備えた、LangChain に似た RAG（検索拡張生成）ナレッジデータベースです。
* [Chroma](https://github.com/chroma-core/chroma) ![](https://img.shields.io/github/stars/chroma-core/chroma.svg?cacheSeconds=172800) - オープンソースの埋め込みデータベースです。
* [ClickHouse](https://github.com/ClickHouse/ClickHouse) ![](https://img.shields.io/github/stars/ClickHouse/ClickHouse.svg?cacheSeconds=172800) - オープンソースの列指向データベース管理システムです。
* [Delta Lake](https://github.com/delta-io/delta) ![](https://img.shields.io/github/stars/delta-io/delta.svg?cacheSeconds=172800) - Apache Spark などのビッグデータエンジンにスケーラブルな ACID トランザクションをもたらすストレージレイヤーです。
* [EdgeDB](https://github.com/geldata/gel) ![](https://img.shields.io/github/stars/geldata/gel.svg?cacheSeconds=172800) - Postgres を拡張し、最新のデータモデル、グラフクエリ、認証、AI ソリューションなどを提供します。
* [GPTCache](https://github.com/zilliztech/GPTCache) ![](https://img.shields.io/github/stars/zilliztech/GPTCache.svg?cacheSeconds=172800) - 大規模言語モデルのクエリ向けにセマンティックキャッシュを作成するライブラリです。
* [InfluxDB](https://github.com/influxdata/influxdb) ![](https://img.shields.io/github/stars/influxdata/influxdb.svg?cacheSeconds=172800) メトリクス、イベント、リアルタイム分析のためのスケーラブルなデータストアです。
* [Milvus](https://github.com/milvus-io/milvus) ![](https://img.shields.io/github/stars/milvus-io/milvus.svg?cacheSeconds=172800) 機械学習モデルやニューラルネットワークが生成する埋め込みベクトルを管理する、クラウドネイティブなオープンソースのベクトルデータベースです。
* [Marqo](https://github.com/marqo-ai/marqo) ![](https://img.shields.io/github/stars/marqo-ai/marqo.svg?cacheSeconds=172800) エンドツーエンドのベクトル検索エンジンです。
* [pgvector](https://github.com/pgvector/pgvector) ![](https://img.shields.io/github/stars/pgvector/pgvector.svg?cacheSeconds=172800) Postgres のベクトル類似検索を支援します。
* [PostgresML](https://github.com/postgresml/postgresml) ![](https://img.shields.io/github/stars/postgresml/postgresml.svg?cacheSeconds=172800) SQL クエリを使い、テキストデータや表形式データに対して学習と推論を実行できる PostgreSQL 用機械学習拡張機能です。
* [Redis](https://github.com/redis/redis) ![](https://img.shields.io/github/stars/redis/redis.svg?cacheSeconds=172800) ベクトル類似検索に対応したオープンソースのインメモリデータストアで、セマンティック検索やレコメンデーションシステムなどの AI/ML アプリケーションに適しています。
* [Safetensors](https://github.com/safetensors/safetensors) ![](https://img.shields.io/github/stars/safetensors/safetensors.svg?cacheSeconds=172800) テンソルを保存・配布するための、シンプルで安全な方法です。
* [TimescaleDB](https://github.com/timescale/timescaledb) ![](https://img.shields.io/github/stars/timescale/timescaledb.svg?cacheSeconds=172800) 高速な取り込みと複雑なクエリ向けに最適化され、PostgreSQL 拡張機能として提供されるオープンソースの時系列 SQL データベースです - [(動画)](https://www.youtube.com/watch?v=zbjub8BQPyE)。
* [Weaviate](https://github.com/weaviate/weaviate) ![](https://img.shields.io/github/stars/weaviate/weaviate.svg?cacheSeconds=172800) - GraphQL と REST に対応する低レイテンシのベクトル検索エンジンで、さまざまなメディアタイプを標準でサポートします。モジュールにはセマンティック検索、Q&A、分類、カスタマイズ可能なモデル（PyTorch/TensorFlow/Keras）などがあります。
* [Zarr](https://github.com/zarr-developers/zarr-python) ![](https://img.shields.io/github/stars/zarr-developers/zarr-python.svg?cacheSeconds=172800) - 並列計算での利用を想定して設計された、チャンク化・圧縮対応の N 次元配列の Python 実装です。

## データストリーム処理 <a id="data-stream-processing"></a>
* [Apache Beam](https://github.com/apache/beam) ![](https://img.shields.io/github/stars/apache/beam.svg?cacheSeconds=172800) バッチ処理とストリーミングを統合するプログラミングモデルです。
* [Apache Flink](https://github.com/apache/flink) ![](https://img.shields.io/github/stars/apache/flink.svg?cacheSeconds=172800) - 強力なストリーム処理・バッチ処理機能を備えたオープンソースのストリーム処理フレームワークです。
* [Apache Kafka](https://github.com/apache/kafka) ![](https://img.shields.io/github/stars/apache/kafka.svg?cacheSeconds=172800) - 入力と出力を Kafka クラスターに保存するアプリケーションやマイクロサービスを構築するための Kafka クライアントライブラリです。
* [Apache Samza](https://github.com/apache/samza) ![](https://img.shields.io/github/stars/apache/samza.svg?cacheSeconds=172800) - 分散ストリーム処理フレームワークです。メッセージングに Apache Kafka を使用し、Apache Hadoop YARN によってフォールトトレランス、プロセス分離、セキュリティ、リソース管理を実現します。
* [Apache Spark](https://github.com/apache/spark) ![](https://img.shields.io/github/stars/apache/spark.svg?cacheSeconds=172800) - Apache Spark をバックエンドとしてストリームをマイクロバッチ処理し、状態を持つ exactly-once セマンティクスをサポートします。
* [Bytewax](https://github.com/bytewax/bytewax) ![](https://img.shields.io/github/stars/bytewax/bytewax.svg?cacheSeconds=172800) - Rust エンジン上に構築された、柔軟で Python を中心とする状態管理型ストリーム処理フレームワークです。
* [FastStream](https://github.com/ag2ai/faststream) ![](https://img.shields.io/github/stars/ag2ai/faststream.svg?cacheSeconds=172800) - FastAPI に着想を得て、Apache Kafka、RabbitMQ、NATS プロトコルに対応する、ブローカーに依存しない最新のストリーミング Python フレームワークです。他の Web フレームワークにも簡単に統合できます。
* [MOA](https://github.com/Waikato/moa) ![](https://img.shields.io/github/stars/Waikato/moa.svg?cacheSeconds=172800) - MOA（Massive Online Analysis）は、ビッグデータのストリームマイニング向けオープンソースフレームワークです。
* [MosaicML Streaming](https://github.com/mosaicml/streaming) ![](https://img.shields.io/github/stars/mosaicml/streaming.svg?cacheSeconds=172800) - 分散モデル学習向けに、クラウドストレージから大規模データセットを高速かつ決定論的にストリーミングします。
* [RisingWave](https://github.com/risingwavelabs/risingwave) ![](https://img.shields.io/github/stars/risingwavelabs/risingwave.svg?cacheSeconds=172800) - ストリーム処理と低レイテンシサービングを統合した分散 SQL ストリーミングデータベースです。オンライン機械学習向けの特徴量の構築と提供に適しています。
* [TensorStore](https://github.com/google/tensorstore) ![](https://img.shields.io/github/stars/google/tensorstore.svg?cacheSeconds=172800) - 大規模な多次元配列の読み書き用ライブラリです。


## デプロイとサービング <a id="deployment-and-serving"></a>
* [Agenta](https://github.com/Agenta-AI/agenta) ![](https://img.shields.io/github/stars/Agenta-AI/agenta.svg?cacheSeconds=172800) - Agenta は、LLMOps ワークフロー全体を支援するエンドツーエンドのツールを提供します。構築（LLM プレイグラウンド、評価）、デプロイ（プロンプトと設定の管理）、運用（LLM の可観測性とトレーシング）に対応します。
* [AirLLM](https://github.com/lyogavin/airllm) ![](https://img.shields.io/github/stars/lyogavin/airllm.svg?cacheSeconds=172800) - 推論時のメモリ使用量を最適化し、量子化、蒸留、枝刈りを行わずに、70B の大規模言語モデルを 4GB の GPU 1 枚で推論できます。
* [AITemplate](https://github.com/facebookincubator/AITemplate) ![](https://img.shields.io/github/stars/facebookincubator/AITemplate.svg?cacheSeconds=172800) - AITemplate（AIT）は、ディープニューラルネットワークを CUDA（NVIDIA GPU）/HIP（AMD GPU）向けの C++ コードに変換し、極めて高速な推論サービングを実現する Python フレームワークです。
* [BentoML](https://github.com/bentoml/BentoML) ![](https://img.shields.io/github/stars/bentoml/BentoML.svg?cacheSeconds=172800) - 高性能な ML モデルサービングのためのオープンソースフレームワークです。
* [Bifrost](https://github.com/maximhq/bifrost) ![](https://img.shields.io/github/stars/maximhq/bifrost.svg?cacheSeconds=172800) - 23 以上の LLM プロバイダーで単一の OpenAI 互換 API を提供する AI ゲートウェイです。自動フォールバック、負荷分散、セマンティックキャッシュ、予算管理、Prometheus メトリクスに対応します。
* [BISHENG](https://github.com/dataelement/bisheng) ![](https://img.shields.io/github/stars/dataelement/bisheng.svg?cacheSeconds=172800) - エンタープライズ用途に重点を置く、オープンな LLM アプリケーション DevOps プラットフォームです。
* [CosmoEdge](https://github.com/cosmo-wander-ai/cosmo-edge) ![](https://img.shields.io/github/stars/cosmo-wander-ai/cosmo-edge.svg?cacheSeconds=172800) - 本番環境向けの C++ エッジ動画 AI エンジンです。RTSP 取り込み、CV/VLM 推論、ビジュアルオーケストレーション、アラーム、Sophon および Rockchip NPU を介したイベント配信を統合します。
* [DeepDetect](https://github.com/jolibrain/deepdetect) ![](https://img.shields.io/github/stars/jolibrain/deepdetect.svg?cacheSeconds=172800) - Jolibrain が保守する、TensorFlow、XGBoost、Caffe モデル向けの C++ 製機械学習本番サーバーです。
* [Dynamo](https://github.com/ai-dynamo/dynamo) ![](https://img.shields.io/github/stars/ai-dynamo/dynamo.svg?cacheSeconds=172800) - NVIDIA Dynamo は、マルチノード分散環境で生成 AI モデルや推論モデルをサービングするために設計された、高スループット・低レイテンシの推論フレームワークです。
* [exo](https://github.com/exo-explore/exo) ![](https://img.shields.io/github/stars/exo-explore/exo.svg?cacheSeconds=172800) - 日常的なデバイスを使って、自宅で AI クラスターを構築・実行できます。
* [Genkit](https://github.com/genkit-ai/genkit) ![](https://img.shields.io/github/stars/genkit-ai/genkit.svg?cacheSeconds=172800) - 使い慣れたコード中心のパターンで AI 搭載アプリを構築するためのオープンソースフレームワークです。Genkit を使うと、可観測性と評価機能を備えた AI 機能を簡単に開発、統合、テストできます。
* [GoModel](https://github.com/ENTERPILOT/GoModel) ![](https://img.shields.io/github/stars/ENTERPILOT/GoModel.svg?cacheSeconds=172800) - Go で書かれたセルフホスト型 AI ゲートウェイです。OpenAI、Anthropic、Gemini、Groq、xAI、Ollama などのプロバイダーに対応する統合 OpenAI 互換 API を提供し、ルーティング、使用状況追跡、レート制限、ガードレールを備えています。
* [Inference](https://github.com/roboflow/inference) ![](https://img.shields.io/github/stars/roboflow/inference.svg?cacheSeconds=172800) - 多数の一般的なモデルアーキテクチャとファインチューニング済みモデルのデプロイに対応した、高速で本番利用可能なコンピュータービジョン推論サーバーです。Docker を使って自社ハードウェア上に YOLOv5、YOLOv8、CLIP、SAM、CogVLM などのモデルをデプロイできます。
* [Infinity](https://github.com/michaelfeil/infinity) ![](https://img.shields.io/github/stars/michaelfeil/infinity.svg?cacheSeconds=172800) - テキスト埋め込み、リランキングモデル、CLIP を提供する高スループット・低レイテンシの REST API です。
* [LiteLLM](https://github.com/BerriAI/litellm) ![](https://img.shields.io/github/stars/BerriAI/litellm.svg?cacheSeconds=172800) - Bedrock、Azure、OpenAI、VertexAI、Cohere、Anthropic、Sagemaker、HuggingFace、Replicate、Groq など、100 以上の LLM API を OpenAI 形式で呼び出すための Python SDK およびプロキシサーバー（LLM ゲートウェイ）です。
* [LiteRT](https://github.com/google-ai-edge/litert) ![](https://img.shields.io/github/stars/google-ai-edge/litert.svg?cacheSeconds=172800) - LiteRT（旧 TensorFlow Lite）は、モバイル、組み込み、エッジデバイスへの機械学習モデルのデプロイを可能にする、Google の高性能オンデバイス AI 推論ランタイムです。
* [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) ![](https://img.shields.io/github/stars/google-ai-edge/LiteRT-LM.svg?cacheSeconds=172800) - LiteRT-LM は、Android、iOS、Web、デスクトップ、IoT にまたがるクロスプラットフォーム対応を備え、エッジデバイス上に大規模言語モデルをデプロイするための、Google の本番利用可能な高性能推論フレームワークです。
* [LitServe](https://github.com/Lightning-AI/LitServe) ![](https://img.shields.io/github/stars/Lightning-AI/LitServe.svg?cacheSeconds=172800) - FastAPI 上に構築された、AI モデル向けの柔軟なサービングエンジンです。モデル、エージェント、マルチモーダルシステム、RAG、複雑な ML パイプライン向けに、カスタム推論エンジンをサポートします。
* [jevos](https://github.com/feder-cr/jev) ![](https://img.shields.io/github/stars/feder-cr/jev.svg?cacheSeconds=172800) - はい／いいえ判定を行う TypeSafe の Jev のオープンソース代替です。1B パラメーターの二値分類器（GGUF、llama.cpp）を Jev 互換の FastAPI HTTP API で提供し、ノート PC 上で CPU のみで動作します。
* [Jina-serve](https://github.com/jina-ai/serve) ![](https://img.shields.io/github/stars/jina-ai/serve.svg?cacheSeconds=172800) - gRPC、HTTP、WebSocket で通信する AI サービスを構築・デプロイするためのフレームワークです。
* [Kiln](https://github.com/kiln-ai/kiln) ![](https://img.shields.io/github/stars/kiln-ai/kiln.svg?cacheSeconds=172800) - LLM モデルのファインチューニング、合成データ生成、データセットでの共同作業を行う OSS ツールです。
* [KServe](https://github.com/kserve/kserve) ![](https://img.shields.io/github/stars/kserve/kserve.svg?cacheSeconds=172800) - 予測型および生成型 ML のサービングを可能にする Kubernetes カスタムリソース定義を提供します。
* [KTransformers](https://github.com/kvcache-ai/ktransformers) ![](https://img.shields.io/github/stars/kvcache-ai/ktransformers.svg?cacheSeconds=172800) - 最先端の LLM 推論最適化を試すための柔軟なフレームワークです。
* [Langtrace](https://github.com/Scale3-Labs/langtrace) ![](https://img.shields.io/github/stars/Scale3-Labs/langtrace.svg?cacheSeconds=172800) - OpenTelemetry ベースの、LLM アプリケーション向けエンドツーエンドのオープンソース可観測性ツールです。主要な LLM、LLM フレームワーク、ベクトル DB などのリアルタイムトレース、評価、メトリクスを提供します。
* [Lepton AI](https://github.com/leptonai/leptonai) ![](https://img.shields.io/github/stars/leptonai/leptonai.svg?cacheSeconds=172800) - LeptonAI の Python ライブラリを使えば、Python コードから AI サービスを簡単に構築できます。
* [LightLLM](https://github.com/ModelTC/lightllm) ![](https://img.shields.io/github/stars/ModelTC/lightllm.svg?cacheSeconds=172800) - 軽量設計、容易なスケーラビリティ、高速な性能を特長とする、Python ベースの LLM 推論・サービングフレームワークです。
* [llama.cpp](https://github.com/ggml-org/llama.cpp) ![](https://img.shields.io/github/stars/ggml-org/llama.cpp.svg?cacheSeconds=172800) - Llama など、さまざまな大規模言語モデルの推論を行うオープンソースソフトウェアライブラリです。
* [llmfit](https://github.com/AlexsJones/llmfit) ![](https://img.shields.io/github/stars/AlexsJones/llmfit.svg?cacheSeconds=172800) - システムの RAM、CPU、GPU に適したサイズの LLM を選定するターミナルツールです。ハードウェアを検出し、品質、速度、適合性、コンテキストの各観点からモデルを評価して、マシン上で実際に快適に動作するモデルを提示します。
* [LMCache](https://github.com/lmcache/lmcache) ![](https://img.shields.io/github/stars/lmcache/lmcache.svg?cacheSeconds=172800) - LLM 推論を高速化する高性能 KV キャッシュレイヤーです。
* [LMDeploy](https://github.com/internlm/lmdeploy) ![](https://img.shields.io/github/stars/internlm/lmdeploy.svg?cacheSeconds=172800) - LLM の圧縮、デプロイ、サービングのためのツールキットです。
* [LM Studio](https://github.com/lmstudio-ai/lms) ![](https://img.shields.io/github/stars/lmstudio-ai/lms.svg?cacheSeconds=172800) - 最低要件を満たせば、比較的性能の控えめなマシンでも LLM モデルをローカルにデプロイできるツールです。
* [LocalAI](https://github.com/mudler/LocalAI) ![](https://img.shields.io/github/stars/mudler/LocalAI.svg?cacheSeconds=172800) - OpenAI API 仕様に準拠した、ローカル推論用のドロップイン置き換え REST API です。
* [MindsDB](https://github.com/mindsdb/mindshub) ![](https://img.shields.io/github/stars/mindsdb/mindshub.svg?cacheSeconds=172800) - データベース、ベクトルストア、アプリケーションデータから、リアルタイムでモデルを作成、サービング、ファインチューニングするプラットフォームです。
* [mini-sglang](https://github.com/sgl-project/mini-sglang) ![](https://img.shields.io/github/stars/sgl-project/mini-sglang.svg?cacheSeconds=172800) - 大規模言語モデル向けの軽量で効率的なサービングフレームワークです。
* [MLRun](https://github.com/mlrun/mlrun)![](https://img.shields.io/github/stars/mlrun/mlrun.svg?cacheSeconds=172800)- ML と生成 AI アプリケーションのライフサイクル全体で、継続的な構築と管理をすばやく行えるオープン MLOps フレームワークです。
* [MLServer](https://github.com/SeldonIO/mlserver) ![](https://img.shields.io/github/stars/SeldonIO/mlserver.svg?cacheSeconds=172800) - 複数のフレームワークやマルチモデルサービングなどに対応する、機械学習モデル向け推論サーバーです。
* [Model Runner](https://github.com/docker/model-runner) ![](https://img.shields.io/github/stars/docker/model-runner.svg?cacheSeconds=172800) - Docker Model Runner を使えば、Docker Hub や OCI 準拠レジストリから取得した LLM などの AI モデルを Docker で簡単に管理、実行、サービングできます。
* [Mosec](https://github.com/mosecorg/mosec) ![](https://img.shields.io/github/stars/mosecorg/mosec.svg?cacheSeconds=172800) - Rust を基盤とする多段パイプライン型モデルサーバーで、動的バッチ処理などに対応します。マイクロサービスとして簡単に実装・デプロイできます。
* [nano-vllm](https://github.com/GeeeekExplorer/nano-vllm) ![](https://img.shields.io/github/stars/GeeeekExplorer/nano-vllm.svg?cacheSeconds=172800) - ゼロから構築された軽量な vLLM 実装です。プレフィックスキャッシュ、テンソル並列化、CUDA グラフなどの最適化技法により、高速なオフライン推論を実現します。
* [nndeploy](https://github.com/nndeploy/nndeploy) ![](https://img.shields.io/github/stars/nndeploy/nndeploy.svg?cacheSeconds=172800) - 使いやすく高性能な AI デプロイフレームワークです。
* [Nuclio](https://github.com/nuclio/nuclio) ![](https://img.shields.io/github/stars/nuclio/nuclio.svg?cacheSeconds=172800) - データ、I/O、計算負荷の高いワークロードに重点を置く高性能な「サーバーレス」フレームワークです。Jupyter や Kubeflow などの主要なデータサイエンスツールと緊密に統合され、多様なデータソースやストリーミングソースに対応し、CPU と GPU の両方で実行できます。
* [OpenLLM](https://github.com/bentoml/OpenLLM) ![](https://img.shields.io/github/stars/bentoml/OpenLLM.svg?cacheSeconds=172800) - 開発者は OpenLLM を使い、Llama 3.1、Qwen2、Phi3 などのオープンソース LLM や独自モデルを、1 つのコマンドで OpenAI 互換 API として実行できます。
* [OpenVINO](https://github.com/openvinotoolkit/openvino) ![](https://img.shields.io/github/stars/openvinotoolkit/openvino.svg?cacheSeconds=172800) - AI 推論の最適化とデプロイのためのオープンソースツールキットです。
* [Open WebUI](https://github.com/open-webui/open-webui) ![](https://img.shields.io/github/stars/open-webui/open-webui.svg?cacheSeconds=172800) - 完全オフラインで動作するよう設計された、拡張性が高く機能豊富な使いやすいセルフホスト型 AI プラットフォームです。Ollama などの各種 LLM ランナーや OpenAI 互換 API に対応し、RAG 用の推論エンジンを内蔵する強力な AI デプロイソリューションです。
* [OptiLLM](https://github.com/algorithmicsuperintelligence/optillm) ![](https://img.shields.io/github/stars/algorithmicsuperintelligence/optillm.svg?cacheSeconds=172800) - OpenAI API 互換の最適化推論プロキシです。20 以上の最先端技術を実装して推論タスクにおける LLM の精度と性能を大幅に高め、モデルの学習やファインチューニングは不要です。
* [PowerInfer](https://github.com/Tiiny-AI/PowerInfer) ![](https://img.shields.io/github/stars/Tiiny-AI/PowerInfer.svg?cacheSeconds=172800) - デバイスのアクティベーション局所性を活用する CPU/GPU 対応 LLM 推論エンジンです。
* [Prompt2Model](https://github.com/neulab/prompt2model) ![](https://img.shields.io/github/stars/neulab/prompt2model.svg?cacheSeconds=172800) - ChatGPT などの LLM に使うプロンプトのような自然言語のタスク記述を入力し、デプロイに適した小型の特化モデルを学習するシステムです。
* [RamaLama](https://github.com/containers/ramalama) ![](https://img.shields.io/github/stars/containers/ramalama.svg?cacheSeconds=172800) - ホストシステムを設定する必要なく、OCI コンテナを通じた推論向け AI モデルのローカル利用とサービングを簡単にするオープンソースツールです。
* [RunAnywhere](https://github.com/RunanywhereAI/runanywhere-sdks) ![](https://img.shields.io/github/stars/RunanywhereAI/runanywhere-sdks.svg?cacheSeconds=172800) - iOS、Android、React Native、Flutter 上で LLM、音声認識、音声合成などの AI モデルをデバイス上で動かす、本番利用可能な SDK です。プライベートでオフラインかつ高速なモバイル AI アプリを実現します。
* [Seldon Core](https://github.com/SeldonIO/seldon-core) ![](https://img.shields.io/github/stars/SeldonIO/seldon-core.svg?cacheSeconds=172800) - Kubernetes で機械学習モデルをデプロイするためのオープンソースプラットフォームです - [(動画)](https://www.youtube.com/watch?v=pDlapGtecbY)。
* [SGLang](https://github.com/sgl-project/sglang) ![](https://img.shields.io/github/stars/sgl-project/sglang.svg?cacheSeconds=172800) - 大規模言語モデルおよび視覚言語モデル向けの高速サービングフレームワークです。
* [SIE](https://github.com/superlinked/sie) ![](https://img.shields.io/github/stars/superlinked/sie.svg?style=social) - 埋め込み、リランキング、抽出向けのオープンソース推論サーバー兼本番クラスターです。高密度・疎・マルチベクトル・ビジョン・リランカー・抽出器にわたる 85 以上の事前設定済みモデルを提供します。Helm、KEDA 自動スケーリング、Grafana ダッシュボード、Terraform が付属します。
* [SkyPilot](https://github.com/skypilot-org/skypilot) ![](https://img.shields.io/github/stars/skypilot-org/skypilot.svg?cacheSeconds=172800) - あらゆるクラウドで LLM、AI、バッチジョブを実行できるフレームワークです。コストを最大限に抑え、GPU の利用可能性を高め、実行を管理します。
* [Tensorflow Serving](https://github.com/tensorflow/serving) ![](https://img.shields.io/github/stars/tensorflow/serving.svg?cacheSeconds=172800) - gRPC プロトコルで TensorFlow モデルを提供する高性能フレームワークで、コアあたり毎秒 10 万リクエストを処理できます。
* [torchtune](https://github.com/meta-pytorch/torchtune) ![](https://img.shields.io/github/stars/meta-pytorch/torchtune.svg?cacheSeconds=172800) - LLM の作成、事後学習、実験を簡単に行うための PyTorch ライブラリです。
* [Transformer Lab](https://github.com/transformerlab/transformerlab-app) ![](https://img.shields.io/github/stars/transformerlab/transformerlab-app.svg?cacheSeconds=172800) - 推論エンジンやプラットフォームを問わず、モデルのファインチューニング、評価、エクスポート、ローカルテストを行うオープンソース LLM ワークスペースです。
* [Triton Inference Server](https://github.com/triton-inference-server/server) ![](https://img.shields.io/github/stars/triton-inference-server/server.svg?cacheSeconds=172800) - GPU と CPU の使用率を最大化しながら、あらゆるフレームワークの AI モデルをデプロイする高性能なオープンソースサービングソフトウェアです。
* [Vercel AI](https://github.com/vercel/ai) ![](https://img.shields.io/github/stars/vercel/ai.svg?cacheSeconds=172800) - Next.js、React、Svelte、Vue などの人気フレームワークや Node.js などのランタイムを使って AI 搭載アプリケーションを構築するための TypeScript ツールキットです。
* [Vespa](https://github.com/vespa-engine/vespa) ![](https://img.shields.io/github/stars/vespa-engine/vespa.svg?cacheSeconds=172800) - サービング時に、あらゆる規模でベクトル、テンソル、テキスト、構造化データを検索、推論、整理できます。
* [vLLM](https://github.com/vllm-project/vllm) ![](https://img.shields.io/github/stars/vllm-project/vllm.svg?cacheSeconds=172800) - LLM 向けの高スループットでメモリ効率に優れた推論・サービングエンジンです。


## 評価とモニタリング <a id="evaluation-and-monitoring"></a>
* [AlpacaEval](https://github.com/tatsu-lab/alpaca_eval) ![](https://img.shields.io/github/stars/tatsu-lab/alpaca_eval.svg?cacheSeconds=172800) - 指示追従型言語モデル向けの自動評価器です。
* [ANN-Benchmarks](https://github.com/erikbern/ann-benchmarks) ![](https://img.shields.io/github/stars/erikbern/ann-benchmarks.svg?cacheSeconds=172800) - 近似最近傍探索アルゴリズムの検索を評価するベンチマーク環境です。
* [ARES](https://github.com/stanford-futuredata/ARES) ![](https://img.shields.io/github/stars/stanford-futuredata/ARES.svg?cacheSeconds=172800) - 検索拡張生成（RAG）モデルを自動評価するフレームワークです。
* [BEIR](https://github.com/beir-cellar/beir) ![](https://img.shields.io/github/stars/beir-cellar/beir.svg?cacheSeconds=172800) - 多様な情報検索（IR）タスクを含む異種ベンチマークです。NLP ベースの検索モデルをベンチマーク内で評価するための共通かつ使いやすいフレームワークも提供します。
* [Code Generation LM Evaluation Harness](https://github.com/bigcode-project/bigcode-evaluation-harness) ![](https://img.shields.io/github/stars/bigcode-project/bigcode-evaluation-harness.svg?cacheSeconds=172800) - コード生成モデルを評価するためのフレームワークです。
* [COMET](https://github.com/Unbabel/COMET) ![](https://img.shields.io/github/stars/Unbabel/COMET.svg?cacheSeconds=172800) - 機械学習の評価を行うオープンソースフレームワークです。
* [C-Eval](https://github.com/hkust-nlp/ceval) ![](https://img.shields.io/github/stars/hkust-nlp/ceval.svg?cacheSeconds=172800) - 基盤モデル向けの包括的な中国語評価スイートです。
* [Deepchecks](https://github.com/deepchecks/deepchecks) ![](https://img.shields.io/github/stars/deepchecks/deepchecks.svg?cacheSeconds=172800) - AI と ML のあらゆる検証ニーズに対応する包括的なオープンソースソリューションであり、研究から本番環境までデータとモデルを徹底的にテストできます。
* [DeepEval](https://github.com/confident-ai/deepeval) ![](https://img.shields.io/github/stars/confident-ai/deepeval.svg?cacheSeconds=172800) - LLM アプリケーション向けの、使いやすいオープンソース評価フレームワークです。
* [EvalAI](https://github.com/Cloud-CV/EvalAI) ![](https://img.shields.io/github/stars/Cloud-CV/EvalAI.svg?cacheSeconds=172800) - AI アルゴリズムを大規模に評価・比較するためのオープンソースプラットフォームです。
* [Evalchemy](https://github.com/mlfoundations/evalchemy) ![](https://img.shields.io/github/stars/mlfoundations/evalchemy.svg?cacheSeconds=172800) - 事後学習済み言語モデルの評価に使える、統合された使いやすいツールキットです。
* [EvalPlus](https://github.com/evalplus/evalplus) ![](https://img.shields.io/github/stars/evalplus/evalplus.svg?cacheSeconds=172800) - HumanEval+ と MBPP+ の拡張ベンチマーク、効率評価（EvalPerf）、安全で拡張可能な評価ツールキットを備える、LLM4Code 用の堅牢な評価フレームワークです。
* [Evals](https://github.com/openai/evals) ![](https://img.shields.io/github/stars/openai/evals.svg?cacheSeconds=172800) - OpenAI モデルの評価フレームワークであり、ベンチマークのオープンソースレジストリです。
* [EvalScope](https://github.com/modelscope/evalscope) ![](https://img.shields.io/github/stars/modelscope/evalscope.svg?cacheSeconds=172800) - 大規模モデルの効率的な評価と性能ベンチマークを行うための、簡潔でカスタマイズ可能なフレームワークです。
* [Evaluate](https://github.com/huggingface/evaluate) ![](https://img.shields.io/github/stars/huggingface/evaluate.svg?cacheSeconds=172800) - モデルの評価・比較と、その性能報告をより簡単かつ標準化された方法で行えるライブラリです。
* [Evidently](https://github.com/evidentlyai/evidently) ![](https://img.shields.io/github/stars/evidentlyai/evidently.svg?cacheSeconds=172800) - ML および LLM 搭載システムの評価、テスト、モニタリングを行うオープンソースフレームワークです。
* [Future AGI](https://github.com/future-agi/future-agi) ![](https://img.shields.io/github/stars/future-agi/future-agi.svg?cacheSeconds=172800) - LLM や AI エージェントのアプリケーション向けに、トレース、評価、シミュレーション、データセット、ゲートウェイ、ガードレールを統合した、セルフホスト可能なエンドツーエンドのオープンソースエージェント開発・最適化プラットフォームです。
* [GAOKAO-Bench](https://github.com/OpenLMLab/GAOKAO-Bench) ![](https://img.shields.io/github/stars/OpenLMLab/GAOKAO-Bench.svg?cacheSeconds=172800) - 中国の大学入学統一試験（高考）の問題をデータセットとして用い、大規模モデルの言語理解力と論理的推論能力を評価するフレームワークです。
* [Giskard](https://github.com/Giskard-AI/giskard-oss)![](https://img.shields.io/github/stars/Giskard-AI/giskard-oss.svg?cacheSeconds=172800) - AI アプリケーションの性能、バイアス、セキュリティ上の問題を自動検出するオープンソース Python ライブラリです。
* [guidellm](https://github.com/vllm-project/guidellm) ![](https://img.shields.io/github/stars/vllm-project/guidellm.svg?cacheSeconds=172800) - 大規模言語モデル推論システムのベンチマークと性能評価を行うツールです。
* [Harbor](https://github.com/harbor-framework/harbor) ![](https://img.shields.io/github/stars/harbor-framework/harbor.svg?cacheSeconds=172800) - エージェントと言語モデルの評価・最適化フレームワークです。コンテナ環境全体での並列実験に対応し、ベンチマークと環境管理機能を内蔵しています。
* [HumanEval](https://github.com/openai/human-eval)![](https://img.shields.io/github/stars/openai/human-eval.svg?cacheSeconds=172800) - ユニットテストを含む Python プログラミング問題を使って、コード生成モデルの機能的正確性を評価するベンチマークです。
* [Helicone](https://github.com/Helicone/helicone) ![](https://img.shields.io/github/stars/Helicone/helicone.svg?cacheSeconds=172800) - オールインワンのオープンソース LLM 開発者向けプラットフォームです。
* [HELM](https://github.com/stanford-crfm/helm) ![](https://img.shields.io/github/stars/stanford-crfm/helm.svg?cacheSeconds=172800) - HELM（Holistic Evaluation of Language Models）は、標準化データセット、多様なモデルに対応する統合 API、多様な指標、公平性を検証する摂動機能、プロンプト構築フレームワーク、モデルに統一的にアクセスするプロキシサーバーなど、言語モデルを包括的に評価するツールを提供します。
* [Inspect](https://github.com/UKGovernmentBEIS/inspect_ai) ![](https://img.shields.io/github/stars/UKGovernmentBEIS/inspect_ai.svg?cacheSeconds=172800) - 大規模言語モデル評価用のフレームワークです。
* [IsaacLab-Arena](https://github.com/isaac-sim/IsaacLab-Arena) ![](https://img.shields.io/github/stars/isaac-sim/IsaacLab-Arena.svg?cacheSeconds=172800) - NVIDIA Isaac Lab を拡張し、構成可能な環境の作成とロボットポリシーの大規模評価を行うオープンソース拡張機能です。
* [JiWER](https://github.com/jitsi/jiwer) ![](https://img.shields.io/github/stars/jitsi/jiwer.svg?cacheSeconds=172800) - 自動音声認識システムを評価するための、シンプルで高速な Python パッケージです。
* [Laminar](https://github.com/lmnr-ai/lmnr) ![](https://img.shields.io/github/stars/lmnr-ai/lmnr.svg?cacheSeconds=172800) - AI 製品のための LLM データのトレース、評価、ラベル付け、分析を行うオープンソースプラットフォームです。
* [Langfuse](https://github.com/langfuse/langfuse) ![](https://img.shields.io/github/stars/langfuse/langfuse.svg?cacheSeconds=172800) - LLM ベースのアプリケーション向け可観測性・分析ソリューションです。
* [LangTest](https://github.com/PacificAI/langtest) ![](https://img.shields.io/github/stars/PacificAI/langtest.svg?cacheSeconds=172800) - NLP モデル用の包括的な評価ツールキットです。
* [Language Model Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) ![](https://img.shields.io/github/stars/EleutherAI/lm-evaluation-harness.svg?cacheSeconds=172800) - 多数の異なる評価タスクで生成言語モデルをテストするフレームワークです。
* [LangWatch](https://github.com/langwatch/langwatch) ![](https://img.shields.io/github/stars/langwatch/langwatch.svg?cacheSeconds=172800) - DSPy のビジュアルインターフェースであり、公正なコード配布モデルを採用した完全な LLM Ops プラットフォームです。LLM パイプラインのモニタリング、実験、測定、改善を行えます。
* [Latitude](https://github.com/latitude-dev/latitude-llm) ![](https://img.shields.io/github/stars/latitude-dev/latitude-llm.svg?cacheSeconds=172800) - セマンティックなトレース検索と課題追跡を備えた、AI エージェントの可観測性向けオープンソースプラットフォームです。
* [LightEval](https://github.com/huggingface/lighteval) ![](https://img.shields.io/github/stars/huggingface/lighteval.svg?cacheSeconds=172800) - 軽量な LLM 評価スイートです。
* [lmms-eval](https://github.com/EvolvingLMMs-Lab/lmms-eval) ![](https://img.shields.io/github/stars/EvolvingLMMs-Lab/lmms-eval.svg?cacheSeconds=172800) - LMM を一貫して効率的に評価するために綿密に設計された評価フレームワークです。
* [Melting Pot](https://github.com/google-deepmind/meltingpot) ![](https://img.shields.io/github/stars/google-deepmind/meltingpot.svg?cacheSeconds=172800) - マルチエージェント強化学習向けのテストシナリオ集です。
* [Meta-World](https://github.com/Farama-Foundation/Metaworld) ![](https://img.shields.io/github/stars/Farama-Foundation/Metaworld.svg?cacheSeconds=172800) - メタ強化学習とマルチタスク学習のためのオープンソースシミュレーションベンチマークです。50 種類の異なるロボット操作タスクで構成されます。
* [mir_eval](https://github.com/mir-evaluation/mir_eval) ![](https://img.shields.io/github/stars/mir-evaluation/mir_eval.svg?cacheSeconds=172800) - 音楽情報検索システムを透明性があり、標準化された簡単な方法で評価する Python ライブラリです。
* [MLPerf Inference](https://github.com/mlcommons/inference) ![](https://img.shields.io/github/stars/mlcommons/inference.svg?cacheSeconds=172800) - さまざまなデプロイシナリオにおけるシステムのモデル実行速度を測定するベンチマークスイートです。
* [Massive Text Embedding Benchmark](https://github.com/mlcommons/inference) ![](https://img.shields.io/github/stars/mlcommons/inference.svg?cacheSeconds=172800) - Massive Text Embedding Benchmark（MTEB）は、8 種類の埋め込みタスク、58 のデータセット、112 言語にわたる多様なタスクでテキスト埋め込みモデルの性能を評価する包括的なフレームワークです。
* [NannyML](https://github.com/NannyML/nannyml) ![](https://img.shields.io/github/stars/NannyML/nannyml.svg?cacheSeconds=172800) - デプロイ後のモデル性能を（正解ラベルにアクセスせずに）推定し、データドリフトを検出し、ドリフトのアラートとモデル性能の変化を関連付けるライブラリです。
* [OGB](https://github.com/snap-stanford/ogb) ![](https://img.shields.io/github/stars/snap-stanford/ogb.svg?cacheSeconds=172800) - Open Graph Benchmark（OGB）は、グラフ機械学習向けのベンチマークデータセット、データローダー、評価器のコレクションです。
* [Ollama Grid Search](https://github.com/dezoito/ollama-grid-search) ![](https://img.shields.io/github/stars/dezoito/ollama-grid-search.svg?cacheSeconds=172800) - 特定の用途に最適なモデル、プロンプト、推論パラメーターを自動選択し、それらの組み合わせを反復処理して結果を視覚的に確認できます。
* [onWatch](https://github.com/onllm-dev/onwatch) ![](https://img.shields.io/github/stars/onllm-dev/onwatch.svg?cacheSeconds=172800) - 複数プロバイダー（Anthropic Pro/Max Plans、Codex、Gemini CLI、Synthetic、Z.ai、GitHub Copilot、MiniMax Coding/Token Plan、Antigravity、OpenRouter）にわたる AI API の利用枠をリアルタイムで追跡する軽量な Go CLI です。消費率の予測、過去の利用グラフ、サイクルごとの追跡機能を備えています。
* [OpenCompass](https://github.com/open-compass/OpenCompass) ![](https://img.shields.io/github/stars/open-compass/OpenCompass.svg?cacheSeconds=172800) - 50 以上のデータセットで、LLaMA、LLaMa2、ChatGLM2、ChatGPT、Claude など幅広いモデルをサポートする LLM 評価プラットフォームです。
* [OpenLIT](https://github.com/openlit/openlit) ![](https://img.shields.io/github/stars/openlit/openlit.svg?cacheSeconds=172800) - 可観測性、モニタリング、ガードレール、評価、シームレスな統合により LLM ワークフローを簡素化するオープンソース AI エンジニアリングプラットフォームです。
* [OpenLLMetry](https://github.com/traceloop/openllmetry) ![](https://img.shields.io/github/stars/traceloop/openllmetry.svg?cacheSeconds=172800) - 性能モニタリング、実行トレース、デバッグ機能を通じて、大規模言語モデルアプリケーションの詳細な可視性を開発者に提供します。
* [Opik](https://github.com/comet-ml/opik) ![](https://img.shields.io/github/stars/comet-ml/opik.svg?cacheSeconds=172800) - LLM アプリケーションの評価、テスト、モニタリングを行うオープンソースプラットフォームです。
* [Overcooked-AI](https://github.com/HumanCompatibleAI/overcooked_ai) ![](https://img.shields.io/github/stars/HumanCompatibleAI/overcooked_ai.svg?cacheSeconds=172800) - 人気ゲーム Overcooked を基にした、人間と AI の完全協調型タスク遂行ベンチマーク環境です。
* [Phoenix](https://github.com/Arize-ai/phoenix) ![](https://img.shields.io/github/stars/Arize-ai/phoenix.svg?cacheSeconds=172800) - 実験、評価、トラブルシューティング向けに設計されたオープンソース AI 可観測性プラットフォームです。
* [Promptfoo](https://github.com/promptfoo/promptfoo) ![](https://img.shields.io/github/stars/promptfoo/promptfoo.svg?cacheSeconds=172800) - CI/CD と統合して、ジェイルブレイク、プロンプトインジェクションなどの脆弱性をテストする LLM レッドチーミング・評価フレームワークです。
* [Prometheus-Eval](https://github.com/prometheus-eval/prometheus-eval) ![](https://img.shields.io/github/stars/prometheus-eval/prometheus-eval.svg?cacheSeconds=172800) - LLM プロジェクトの管理と最適化を強化するために設計された包括的なプラットフォームです。
* [RagaAI Catalyst](https://github.com/raga-ai-hub/RagaAI-Catalyst) ![](https://img.shields.io/github/stars/raga-ai-hub/RagaAI-Catalyst.svg?cacheSeconds=172800) - 他の言語モデルの評価に特化した言語モデルの学習、評価、利用のためのツール集です。
* [Ragas](https://github.com/vibrantlabsai/ragas) ![](https://img.shields.io/github/stars/vibrantlabsai/ragas.svg?cacheSeconds=172800) - RAG パイプラインを評価するフレームワークです。
* [RewardBench](https://github.com/allenai/reward-bench) ![](https://img.shields.io/github/stars/allenai/reward-bench.svg?cacheSeconds=172800) - 報酬モデルの能力と安全性を評価するために設計されたベンチマークです。
* [RLBench](https://github.com/stepjam/RLBench) ![](https://img.shields.io/github/stars/stepjam/RLBench.svg?cacheSeconds=172800) - 強化学習、模倣学習、マルチタスク学習、幾何学的コンピュータービジョン、特に few-shot 学習など、視覚に基づく操作研究を促進する大規模ベンチマーク兼学習環境です。
* [SimplerEnv](https://github.com/simpler-env/SimplerEnv) ![](https://img.shields.io/github/stars/simpler-env/SimplerEnv.svg?cacheSeconds=172800) - 実際のロボット構成を対象に、シミュレーション上で操作ポリシーを評価する環境です。
* [SwanLab](https://github.com/SwanHubX/SwanLab) ![](https://img.shields.io/github/stars/SwanHubX/SwanLab.svg?cacheSeconds=172800) - AI 学習の追跡と可視化を行うツールです。
* [Speech-to-Text Benchmark](https://github.com/Picovoice/speech-to-text-benchmark) ![](https://img.shields.io/github/stars/Picovoice/speech-to-text-benchmark.svg?cacheSeconds=172800) - さまざまな音声認識エンジンのベンチマークを行う、最小構成で拡張可能なフレームワークです。
* [TensorFlow Model Analysis](https://github.com/tensorflow/model-analysis) ![](https://img.shields.io/github/stars/tensorflow/model-analysis.svg?cacheSeconds=172800) - TensorFlow Model Analysis（TFMA）は、トレーナーで定義したものと同じ指標を使い、分散方式で大量データ上の TensorFlow モデルを評価するライブラリです。
* [TorchBench](https://github.com/pytorch/benchmark) ![](https://img.shields.io/github/stars/pytorch/benchmark.svg?cacheSeconds=172800) - PyTorch の性能評価に用いるオープンソースベンチマーク集です。
* [TruLens](https://github.com/truera/trulens) ![](https://img.shields.io/github/stars/truera/trulens.svg?cacheSeconds=172800) - LLM 実験の評価と追跡を行うツール群を提供します。
* [TrustLLM](https://github.com/HowieHwong/TrustLLM) ![](https://img.shields.io/github/stars/HowieHwong/TrustLLM.svg?cacheSeconds=172800) - 原則、調査、ベンチマークを含む、大規模言語モデルの信頼性を評価する包括的なフレームワークです。
* [VBench](https://github.com/Vchitect/VBench) ![](https://img.shields.io/github/stars/Vchitect/VBench.svg?cacheSeconds=172800) - 動画生成モデル向けの包括的なベンチマークスイートです。
* [VLMEvalKit](https://github.com/open-compass/VLMEvalKit) ![](https://img.shields.io/github/stars/open-compass/VLMEvalKit.svg?cacheSeconds=172800) - 大規模視覚言語モデル（LVLM）向けのオープンソース評価ツールキットです。

## 説明可能性と公平性 <a id="explainability-and-fairness"></a>
* [Aequitas](https://github.com/dssg/aequitas) ![](https://img.shields.io/github/stars/dssg/aequitas.svg?cacheSeconds=172800) - データサイエンティスト、機械学習研究者、政策立案者向けのオープンソースバイアス監査ツールキットです。機械学習モデルの差別やバイアスを監査し、予測型リスク評価ツールの開発・導入に関する情報に基づいた公平な意思決定を支援します。
* [AI Explainability 360](https://github.com/Trusted-AI/AIX360) ![](https://img.shields.io/github/stars/Trusted-AI/AIX360.svg?cacheSeconds=172800) - さまざまな説明の側面を網羅する包括的なアルゴリズム群と、代理説明可能性指標を含む、データおよび機械学習モデルの解釈・説明可能性ツールです。
* [AI Fairness 360](https://github.com/Trusted-AI/AIF360) ![](https://img.shields.io/github/stars/Trusted-AI/AIF360.svg?cacheSeconds=172800) - データセットと機械学習モデル向けの包括的な公平性指標、その説明、データセットとモデルのバイアスを軽減するアルゴリズムを提供します。
* [Alibi](https://github.com/SeldonIO/alibi) ![](https://img.shields.io/github/stars/SeldonIO/alibi.svg?cacheSeconds=172800) - 機械学習モデルの検査と解釈を目的とするオープンソース Python ライブラリです。当初はブラックボックスモデルのインスタンスベース説明に重点を置いていました。
* [captum](https://github.com/meta-pytorch/captum) ![](https://img.shields.io/github/stars/meta-pytorch/captum.svg?cacheSeconds=172800) - Facebook が開発した PyTorch 用モデル解釈・理解ライブラリです。PyTorch モデル向けに、Integrated Gradients、Saliency Maps、SmoothGrad、VarGrad などの汎用実装を含みます。
* [Fairlearn](https://github.com/fairlearn/fairlearn) ![](https://img.shields.io/github/stars/fairlearn/fairlearn.svg?cacheSeconds=172800) - 機械学習モデルの不公平性を評価・軽減する Python ツールキットです。
* [InterpretML](https://github.com/interpretml/interpret) ![](https://img.shields.io/github/stars/interpretml/interpret.svg?cacheSeconds=172800) - 解釈可能なモデルの学習とブラックボックスシステムの説明を行うオープンソースパッケージです。
* [Lightly](https://github.com/lightly-ai/lightly) ![](https://img.shields.io/github/stars/lightly-ai/lightly.svg?cacheSeconds=172800) - 画像の自己教師あり学習向け Python フレームワークです。学習済み表現を使って、ラベルなしデータの分布を分析し、データセットを再調整できます。
* [LOFO Importance](https://github.com/aerdem4/lofo-importance) ![](https://img.shields.io/github/stars/aerdem4/lofo-importance.svg?cacheSeconds=172800) - LOFO（Leave One Feature Out）Importance は、選択した指標とモデルを用いて、特徴量を 1 つずつ集合から取り除き、選択した検証方式でモデル性能を評価することで、特徴量の重要度を算出します。
* [mljar-supervised](https://github.com/mljar/mljar-supervised) ![](https://img.shields.io/github/stars/mljar/mljar-supervised.svg?cacheSeconds=172800) - 特徴量エンジニアリング、ハイパーパラメーター調整、説明、ドキュメント自動生成を備えた、表形式データ向け AutoML Python パッケージです。
* [Quantus](https://github.com/understandable-machine-intelligence-lab/Quantus) ![](https://img.shields.io/github/stars/understandable-machine-intelligence-lab/Quantus.svg?cacheSeconds=172800) - ニューラルネットワークの説明を責任ある形で評価するための説明可能 AI（XAI）ツールキットです。
* [SHAP](https://github.com/shap/shap) ![](https://img.shields.io/github/stars/shap/shap.svg?cacheSeconds=172800) - あらゆる機械学習モデルの出力を説明する統一的な手法である SHapley Additive exPlanations です。
* [SHAPash](https://github.com/MAIF/shapash) ![](https://img.shields.io/github/stars/MAIF/shapash.svg?cacheSeconds=172800) - 誰もが理解できる明示的なラベルを表示する、複数種類の可視化機能を備えた Python ライブラリです。
* [WhatIf](https://github.com/pair-code/what-if-tool) ![](https://img.shields.io/github/stars/pair-code/what-if-tool.svg?cacheSeconds=172800) - ブラックボックス分類・回帰 ML モデルへの理解を深める、使いやすいインターフェースです。

## 特徴量ストア <a id="feature-store"></a>
* [FEAST](https://github.com/feast-dev/feast)  ![](https://img.shields.io/github/stars/feast-dev/feast.svg?cacheSeconds=172800) - Feast（Feature Store）は、機械学習向けのオープンソース特徴量ストアです。既存のインフラを活用して分析データを本番運用し、モデル学習やオンライン推論に利用するための最短経路を提供します。
* [Featureform](https://github.com/featureform/featureform) ![](https://img.shields.io/github/stars/featureform/featureform.svg?cacheSeconds=172800) - 仮想特徴量ストアです。既存インフラにプラグアンドプレイで導入できます。データサイエンティストにも使いやすく、探索、ガバナンス、系譜管理、共同作業を pip install だけで利用できます。pandas、Python、Spark、SQL や主要なクラウドベンダーとの連携に対応します。
* [Hopsworks Feature Store](https://github.com/logicalclocks/feature-store-api) ![](https://img.shields.io/github/stars/logicalclocks/feature-store-api.svg?cacheSeconds=172800) - ML 向けオフライン／オンライン特徴量ストアです [(動画)](https://www.youtube.com/watch?v=N1BjPk1smdg)。

## 産業用途向け異常検知 <a id="industry-strength-anomaly-detection"></a>
* [Alibi Detect](https://github.com/SeldonIO/alibi-detect) ![](https://img.shields.io/github/stars/SeldonIO/alibi-detect.svg?cacheSeconds=172800) - 外れ値、敵対的攻撃、概念ドリフトの検出に特化した Python パッケージです。
* [Darts](https://github.com/unit8co/darts) ![](https://img.shields.io/github/stars/unit8co/darts.svg?cacheSeconds=172800) - 時系列データの予測と異常検知を使いやすく行うライブラリです。
* [Deequ](https://github.com/awslabs/deequ) ![](https://img.shields.io/github/stars/awslabs/deequ.svg?cacheSeconds=172800) - 大規模データセットのデータ品質を測定する「データのユニットテスト」を定義するための、Apache Spark ベースのライブラリです。
* [PyOD](https://github.com/yzhao062/pyod) ![](https://img.shields.io/github/stars/yzhao062/pyod.svg?cacheSeconds=172800) - スケーラブルな外れ値検出（異常検知）向けの Python ツールボックスです。
* [TFDV](https://github.com/tensorflow/data-validation) ![](https://img.shields.io/github/stars/tensorflow/data-validation.svg?cacheSeconds=172800) - 機械学習データの探索と検証を行うライブラリです。

## 産業用途向けコンピュータービジョン <a id="industry-strength-computer-vision"></a>
* [CameraTraps](https://github.com/microsoft/Biodiversity) ![](https://img.shields.io/github/stars/microsoft/Biodiversity.svg?cacheSeconds=172800) - CameraTraps（PyTorch Wildlife）は、規模の大きなカメラトラップデータセットで学習した検出・分類モデルを提供する、野生生物画像解析向けの共同ディープラーニングフレームワークです。
* [Deep Lake](https://github.com/activeloopai/deeplake) ![](https://img.shields.io/github/stars/activeloopai/deeplake.svg?cacheSeconds=172800) - コンピュータービジョンに最適化されたデータ基盤です。
* [DeepForest](https://github.com/weecology/DeepForest) ![](https://img.shields.io/github/stars/weecology/DeepForest.svg?cacheSeconds=172800) - 航空機から撮影した RGB 画像を使い、深層学習で個々の樹冠や樹種を学習・予測する Python パッケージです。
* [Detectron2](https://github.com/facebookresearch/detectron2) ![](https://img.shields.io/github/stars/facebookresearch/detectron2.svg?cacheSeconds=172800) - Facebook AI Research の次世代ライブラリで、最先端の検出・セグメンテーションアルゴリズムを提供します。
* [Kornia](https://github.com/kornia/kornia) ![](https://img.shields.io/github/stars/kornia/kornia.svg?cacheSeconds=172800) - PyTorch 上に構築された微分可能なコンピュータービジョンライブラリで、微分可能な画像処理・幾何学的視覚アルゴリズムを豊富に提供します。
* [libcom](https://github.com/bcmi/libcom) ![](https://img.shields.io/github/stars/bcmi/libcom.svg?cacheSeconds=172800) - 画像合成ツールボックスです。
* [LightlyTrain](https://github.com/lightly-ai/lightly-train) ![](https://img.shields.io/github/stars/lightly-ai/lightly-train.svg?cacheSeconds=172800) - 産業用途向けに、ラベルなしデータを使ってコンピュータービジョンモデルを事前学習します。
* [MMCV](https://github.com/open-mmlab/mmcv) ![](https://img.shields.io/github/stars/open-mmlab/mmcv.svg?cacheSeconds=172800) - OpenMMLab の基盤的なコンピュータービジョンライブラリです。画像・動画処理、データ変換と拡張、CNN アーキテクチャ、最適化済み CUDA 演算などの重要機能を提供します。
* [SuperGradients](https://github.com/Deci-AI/super-gradients) ![](https://img.shields.io/github/stars/Deci-AI/super-gradients.svg?cacheSeconds=172800) - PyTorch ベースのコンピュータービジョンモデルを学習するためのオープンソースライブラリです。
* [supervision](https://github.com/roboflow/supervision) ![](https://img.shields.io/github/stars/roboflow/supervision.svg?cacheSeconds=172800) - コンピュータービジョンのパイプラインを効率よく管理するための Python ライブラリです。アノテーション、可視化、モデルモニタリング用のツールを提供します。
* [VideoSys](https://github.com/NUS-HPC-AI-Lab/VideoSys) ![](https://img.shields.io/github/stars/NUS-HPC-AI-Lab/VideoSys.svg?cacheSeconds=172800) - さまざまな高速化技術を用いて多くの拡散モデルに対応し、モデルの高速化とメモリ使用量削減を実現します。

## 産業用途向け情報検索 <a id="industry-strength-information-retrieval"></a>
* [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) ![](https://img.shields.io/github/stars/Marker-Inc-Korea/AutoRAG.svg?cacheSeconds=172800) - データに最適な RAG パイプラインを自動的に見つける RAG AutoML ツールです。
* [BGE](https://github.com/FlagOpen/FlagEmbedding) ![](https://img.shields.io/github/stars/FlagOpen/FlagEmbedding.svg?cacheSeconds=172800) - 検索と RAG 向けのワンストップ検索ツールキットを構築します。
* [EmbedAnything](https://github.com/StarlightSearch/EmbedAnything) ![](https://img.shields.io/github/stars/StarlightSearch/EmbedAnything.svg?cacheSeconds=172800) - テキスト、画像、音声、PDF などから埋め込みを生成するために Rust で構築された、最小構成で軽量かつ高性能な埋め込みパイプラインです。高密度、疎、ONNX、遅延相互作用型の埋め込みに対応します。
* [Faiss](https://github.com/facebookresearch/faiss) ![](https://img.shields.io/github/stars/facebookresearch/faiss.svg?cacheSeconds=172800) - 高密度ベクトルの効率的な類似検索とクラスタリングを行うライブラリです。
* [GraphRAG](https://github.com/microsoft/graphrag) ![](https://img.shields.io/github/stars/microsoft/graphrag.svg?cacheSeconds=172800) - LLM を活用して非構造化テキストから意味のある構造化データを抽出するための、データパイプライン兼変換ツール群です。
* [HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG) ![](https://img.shields.io/github/stars/OSU-NLP-Group/HippoRAG.svg?cacheSeconds=172800) - 人間の長期記憶の神経生物学に着想を得た新しい検索拡張生成（RAG）フレームワークです。LLM が外部文書をまたいで知識を継続的に統合できるようにします。
* [JamAI Base](https://github.com/EmbeddedLLM/JamAIBase) ![](https://img.shields.io/github/stars/EmbeddedLLM/JamAIBase.svg?cacheSeconds=172800) - 組み込みデータベース（SQLite）と組み込みベクトルデータベース（LanceDB）を、管理されたメモリ機能や RAG 機能とともに統合した、オープンソースの RAG バックエンドプラットフォームです。LLM、ベクトル埋め込み、リランカーのオーケストレーションと管理を内蔵し、使いやすい表計算シート風 UI とシンプルな REST API から利用できます。
* [LangExtract](https://github.com/google/langextract) ![](https://img.shields.io/github/stars/google/langextract.svg?cacheSeconds=172800) - ユーザー定義の指示に基づいて非構造化テキスト文書から構造化情報を抽出する Python ライブラリです。臨床記録やレポートなどを処理して重要な詳細を特定・整理し、抽出したデータが原文に対応することを保証します。
* [LightRAG](https://github.com/HKUDS/LightRAG) ![](https://img.shields.io/github/stars/HKUDS/LightRAG.svg?cacheSeconds=172800) - シンプルで高速な検索拡張生成フレームワークです。
* [llmware](https://github.com/llmware-ai/llmware) ![](https://img.shields.io/github/stars/llmware-ai/llmware.svg?cacheSeconds=172800) - 小型の特化モデルを使って LLM ベースのアプリケーション（RAG、エージェントなど）を構築する統合フレームワークです。モデルは非公開環境にデプロイでき、企業のナレッジソースと安全に連携し、あらゆる業務プロセス向けに費用対効果よく調整・適応できます。
* [Mem0](https://github.com/mem0ai/mem0) ![](https://img.shields.io/github/stars/mem0ai/mem0.svg?cacheSeconds=172800) - インテリジェントなメモリレイヤーにより AI アシスタントやエージェントを強化し、パーソナライズされた AI との対話を可能にします。
* [NGT](https://github.com/NGT-labs/NGT) ![](https://img.shields.io/github/stars/NGT-labs/NGT.svg?cacheSeconds=172800) - 高次元ベクトル空間の大量データを対象に、高速な近似最近傍検索を実行するコマンドとライブラリを提供します。
* [NMSLIB](https://github.com/nmslib/nmslib) ![](https://img.shields.io/github/stars/nmslib/nmslib.svg?cacheSeconds=172800) - Non-Metric Space Library（NMSLIB）は、効率的な類似検索ライブラリであり、一般的な非計量空間向け k-NN 手法を評価するツールキットです。
* [Qdrant](https://github.com/qdrant/qdrant) ![](https://img.shields.io/github/stars/qdrant/qdrant.svg?cacheSeconds=172800) - 高度なフィルタリングに対応したオープンソースのベクトル類似検索エンジンです。
* [R2R](https://github.com/SciPhi-AI/R2R) ![](https://img.shields.io/github/stars/SciPhi-AI/R2R.svg?cacheSeconds=172800) - R2R（RAG to Riches）は、ハイブリッド検索、マルチモーダル対応、高度な可観測性を備えた RAG アプリケーションの構築、デプロイ、スケーリングを行う包括的なプラットフォームです。
* [RAGFlow](https://github.com/infiniflow/ragflow) ![](https://img.shields.io/github/stars/infiniflow/ragflow.svg?cacheSeconds=172800) - 深い文書理解に基づく RAG エンジンです。
* [RAGxplorer](https://github.com/gabrielchua/RAGxplorer) ![](https://img.shields.io/github/stars/gabrielchua/RAGxplorer.svg?cacheSeconds=172800) - RAG の可視化を構築するツールです。
* [RAG-FiT](https://github.com/IntelLabs/RAG-FiT) ![](https://img.shields.io/github/stars/IntelLabs/RAG-FiT.svg?cacheSeconds=172800) - LLM が外部情報を利用する能力を高めるため、特別に作成した RAG 拡張データセットでモデルをファインチューニングするライブラリです。
* [TextWorld](https://github.com/microsoft/TextWorld) ![](https://img.shields.io/github/stars/microsoft/TextWorld.svg?cacheSeconds=172800) - 強化学習（RL）エージェントの学習・テスト向けに、テキストベースのゲームを生成する拡張可能なサンドボックス環境です。
* [Zvec](https://github.com/alibaba/zvec) ![](https://img.shields.io/github/stars/alibaba/zvec.svg?cacheSeconds=172800) - 低レイテンシの類似検索を行う、オープンソースのインプロセス型ベクトルデータベースです。

## 産業用途向け自然言語処理 <a id="industry-strength-nlp"></a>
* [aisuite](https://github.com/andrewyng/aisuite) ![](https://img.shields.io/github/stars/andrewyng/aisuite.svg?cacheSeconds=172800) - 複数の生成 AI プロバイダーを利用するための、シンプルで統一されたインターフェースです。
* [Align-Anything](https://github.com/PKU-Alignment/align-anything) ![](https://img.shields.io/github/stars/PKU-Alignment/align-anything.svg?cacheSeconds=172800) - LLM、VLM などを含む、あらゆるモダリティの大規模モデル（any-to-any モデル）を人間の意図や価値観に沿わせることを目指します。
* [BERTopic](https://github.com/MaartenGr/BERTopic) ![](https://img.shields.io/github/stars/MaartenGr/BERTopic.svg?cacheSeconds=172800) - Transformer と c-TF-IDF を活用して高密度クラスタを作成するトピックモデリング手法です。重要語をトピックの説明に残しながら、解釈しやすいトピックを生成します。
* [Burr](https://github.com/apache/burr) ![](https://img.shields.io/github/stars/apache/burr.svg?cacheSeconds=172800) - チャットボット、エージェント、シミュレーションなど、意思決定を行うアプリケーションの開発を支援します。テレメトリー、永続化、デプロイなどの本番向け機能と、オープンソースで無料のローカルファーストな Burr UI が付属します。
* [Context7](https://github.com/upstash/context7) ![](https://img.shields.io/github/stars/upstash/context7.svg?cacheSeconds=172800) - プロンプトや AI コーディングエージェント向けに最新のコードドキュメントを提供します。
* [Dify](https://github.com/langgenius/dify) ![](https://img.shields.io/github/stars/langgenius/dify.svg?cacheSeconds=172800) - 直感的なインターフェースにエージェント型 AI ワークフロー、RAG パイプライン、エージェント機能、モデル管理、可観測性などを統合したオープンソース LLM アプリ開発プラットフォームです。プロトタイプから本番環境へすばやく移行できます。
* [dspy](https://github.com/stanfordnlp/dspy) ![](https://img.shields.io/github/stars/stanfordnlp/dspy.svg?cacheSeconds=172800) - 基盤モデルを使ってプログラミングするためのフレームワークです。
* [Dust](https://github.com/dust-tt/dust) ![](https://img.shields.io/github/stars/dust-tt/dust.svg?cacheSeconds=172800) - 大規模言語モデルアプリの設計とデプロイを支援します。
* [ESPnet](https://github.com/espnet/espnet) ![](https://img.shields.io/github/stars/espnet/espnet.svg?cacheSeconds=172800) - エンドツーエンドの音声処理ツールキットです。
* [FastChat](https://github.com/lm-sys/FastChat) ![](https://img.shields.io/github/stars/lm-sys/FastChat.svg?cacheSeconds=172800) - 大規模言語モデルを用いたチャットボットの学習、サービング、評価を行うオープンプラットフォームです。
* [Flair](https://github.com/flairNLP/flair) ![](https://img.shields.io/github/stars/flairNLP/flair.svg?cacheSeconds=172800) - Zalando が開発した最先端 NLP 向けのシンプルなフレームワークで、PyTorch を直接基盤としています。
* [FunASR](https://github.com/modelscope/FunASR) ![](https://img.shields.io/github/stars/modelscope/FunASR.svg?cacheSeconds=172800) - 50 以上の言語に対応する本番品質の ASR ツールキットです。VAD、句読点付与、話者ダイアライゼーション、感情認識を内蔵し、Docker/WebSocket/REST によるデプロイや ONNX ランタイムにも対応します。
* [Fun-ASR](https://github.com/QwenAudio/Fun-ASR) ![](https://img.shields.io/github/stars/QwenAudio/Fun-ASR.svg?cacheSeconds=172800) - 中国語の方言を含む 31 言語に対応した LLM ベースの ASR です。句読点、タイムスタンプ、話者ダイアライゼーションをネイティブにサポートします。
* [Gensim](https://github.com/piskvorky/gensim) ![](https://img.shields.io/github/stars/piskvorky/gensim.svg?cacheSeconds=172800) - 大規模コーパスを使ったトピックモデリング、文書インデックス作成、類似検索を行う Python ライブラリです。
* [gpt-fast](https://github.com/meta-pytorch/gpt-fast) ![](https://img.shields.io/github/stars/meta-pytorch/gpt-fast.svg?cacheSeconds=172800) - シンプルで効率的な PyTorch ネイティブの Transformer テキスト生成です。
* [Haystack](https://github.com/deepset-ai/haystack) ![](https://img.shields.io/github/stars/deepset-ai/haystack.svg?cacheSeconds=172800) - Transformer モデルや GPT-3 などの LLM を使ってデータを活用するオープンソース NLP フレームワークです。ChatGPT のような質問応答、セマンティック検索、テキスト生成などをすばやく構築する、本番利用可能なツールを提供します。
* [Interactive Composition Explorer](https://github.com/oughtinc/ice) ![](https://img.shields.io/github/stars/oughtinc/ice.svg?cacheSeconds=172800) - 言語モデルプログラム向けの Python ライブラリ兼トレース可視化ツールです。
* [Jan](https://github.com/janhq/jan) ![](https://img.shields.io/github/stars/janhq/jan.svg?cacheSeconds=172800) - パソコン上で完全オフライン動作するオープンソースの ChatGPT 代替ツールです。LLM をダウンロードしてローカルで実行でき、完全な制御とプライバシーを確保できます。
* [Lamini](https://github.com/lamini-ai/lamini) ![](https://img.shields.io/github/stars/lamini-ai/lamini.svg?cacheSeconds=172800) - モデルをすばやくカスタマイズするための LLM エンジンです。
* [LangChain](https://github.com/langchain-ai/langchain) ![](https://img.shields.io/github/stars/langchain-ai/langchain.svg?cacheSeconds=172800) - 合成可能性を通じて LLM を使うアプリケーションの構築を支援します。
* [LlamaIndex](https://github.com/run-llama/llama_index) ![](https://img.shields.io/github/stars/run-llama/llama_index.svg?cacheSeconds=172800) - LlamaIndex（GPT Index）は、LLM アプリケーション向けのデータフレームワークです。
* [LLaMA](https://github.com/meta-llama/llama) ![](https://img.shields.io/github/stars/meta-llama/llama.svg?cacheSeconds=172800) - LLaMA（arXiv）モデルを読み込んで推論を実行するための、最小限で改変しやすく読みやすいサンプルを目指しています。
* [LLaMA-Factory](https://github.com/hiyouga/LlamaFactory) ![](https://img.shields.io/github/stars/hiyouga/LlamaFactory.svg?cacheSeconds=172800) - コードを書かずに CLI と Web UI から 100 以上の大規模言語モデルを簡単にファインチューニングできます。
* [LLMBox](https://github.com/RUCAIBox/LLMBox) ![](https://img.shields.io/github/stars/RUCAIBox/LLMBox.svg?cacheSeconds=172800) - 統合学習パイプラインと包括的なモデル評価機能を備えた、LLM 実装のための総合ライブラリです。
* [LLaMA2-Accessory](https://github.com/Alpha-VLLM/LLaMA2-Accessory) ![](https://img.shields.io/github/stars/Alpha-VLLM/LLaMA2-Accessory.svg?cacheSeconds=172800) - 大規模言語モデル（LLM）やマルチモーダル LLM の事前学習、ファインチューニング、デプロイを行うオープンソースツールキットです。
* [LMFlow](https://github.com/OptimalScale/LMFlow) ![](https://img.shields.io/github/stars/OptimalScale/LMFlow.svg?cacheSeconds=172800) - 大規模機械学習モデルのファインチューニング向けに、拡張可能で便利かつ効率的なツールボックスです。
* [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) ![](https://img.shields.io/github/stars/NVIDIA/Megatron-LM.svg?cacheSeconds=172800) - 大規模言語モデルを学習するための、高度に最適化された効率的なライブラリです。
* [MindNLP](https://github.com/candle-org/MindAct) ![](https://img.shields.io/github/stars/candle-org/MindAct.svg?cacheSeconds=172800) - MindSpore を基盤とする、使いやすく高性能な NLP・LLM フレームワークです。Hugging Face のモデルとデータセットに対応します。
* [MLC LLM](https://github.com/mlc-ai/mlc-llm) ![](https://img.shields.io/github/stars/mlc-ai/mlc-llm.svg?cacheSeconds=172800) - さまざまなハードウェアバックエンドやネイティブアプリで任意の言語モデルをネイティブにデプロイできる汎用ソリューションです。誰もが独自の用途に合わせてモデル性能をさらに最適化できる、生産性の高いフレームワークでもあります。
* [mlx-lm](https://github.com/ml-explore/mlx-lm) ![](https://img.shields.io/github/stars/ml-explore/mlx-lm.svg?cacheSeconds=172800) - MLX を使って Apple silicon 上でテキストを生成し大規模言語モデルをファインチューニングする Python パッケージです。Hugging Face Hub と連携し、量子化と分散推論に対応します。
* [Ollama](https://github.com/ollama/ollama) ![](https://img.shields.io/github/stars/ollama/ollama.svg?cacheSeconds=172800) - 大規模言語モデルをローカルで手軽に使い始められます。
* [olmOCR](https://github.com/allenai/olmocr) ![](https://img.shields.io/github/stars/allenai/olmocr.svg?cacheSeconds=172800) - 実環境の PDF 文書を扱う言語モデルの学習用ツールキットです。
* [PaddleNLP](https://github.com/PaddlePaddle/PaddleNLP) ![](https://img.shields.io/github/stars/PaddlePaddle/PaddleNLP.svg?cacheSeconds=172800) - PaddlePaddle ディープラーニングフレームワークを基盤とする大規模言語モデル（LLM）開発スイートです。さまざまなハードウェアデバイスで、効率的な大規模モデル学習、損失のない圧縮、高性能推論に対応します。
* [Promptise Foundry](https://github.com/promptise-com/foundry) ![](https://img.shields.io/github/stars/promptise-com/foundry.svg?cacheSeconds=172800) - エージェント型 AI と MCP サーバー向けの本番用 Python フレームワークです。自律実行環境、メモリ、ツール統合、ガバナンス（予算、健全性、ミッション、シークレット）、ガードレール、セマンティックキャッシュ、可観測性を網羅します。
* [Semantic Kernel](https://github.com/microsoft/semantic-kernel) ![](https://img.shields.io/github/stars/microsoft/semantic-kernel.svg?cacheSeconds=172800) - OpenAI、Azure OpenAI、Hugging Face などの大規模言語モデル（LLM）を C#、Python、Java などの従来型プログラミング言語に統合する SDK です。数行のコードで連鎖させられるプラグインを定義できます。
* [Sentence Transformers](https://github.com/huggingface/sentence-transformers) ![](https://img.shields.io/github/stars/huggingface/sentence-transformers.svg?cacheSeconds=172800) - 文、段落、画像の高密度ベクトル表現を簡単に計算できます。
* [SpaCy](https://github.com/explosion/spaCy) ![](https://img.shields.io/github/stars/explosion/spaCy.svg?cacheSeconds=172800) - Python と Cython で高度な自然言語処理を行うライブラリです。
* [SWIFT](https://github.com/modelscope/ms-swift) ![](https://img.shields.io/github/stars/modelscope/ms-swift.svg?cacheSeconds=172800) - ディープラーニングモデルのファインチューニングを行う、スケーラブルで軽量な基盤です。
* [Tensorflow Lingvo](https://github.com/tensorflow/lingvo) ![](https://img.shields.io/github/stars/tensorflow/lingvo.svg?cacheSeconds=172800) - 特に系列モデル向けの、TensorFlow でニューラルネットワークを構築するフレームワークです。
* [Tensorflow Text](https://github.com/tensorflow/text) ![](https://img.shields.io/github/stars/tensorflow/text.svg?cacheSeconds=172800) - TensorFlow 2.0 ですぐに使える、テキスト関連クラスと演算のコレクションを提供します。
* [ToolBench](https://github.com/OpenBMB/ToolBench) ![](https://img.shields.io/github/stars/OpenBMB/ToolBench.svg?cacheSeconds=172800) - ツール学習向け大規模言語モデルの学習、サービング、評価を行うオープンプラットフォームです。
* [Transformers](https://github.com/huggingface/transformers) ![](https://img.shields.io/github/stars/huggingface/transformers.svg?cacheSeconds=172800) - 自然言語処理（NLP）向け最先端の事前学習済みモデルを提供する Hugging Face のライブラリです。

## 産業用途向けレコメンダーシステム <a id="industry-strength-recommender-system"></a>
* [EasyRec](https://github.com/alibaba/EasyRec) ![](https://img.shields.io/github/stars/alibaba/EasyRec.svg?cacheSeconds=172800) - 大規模レコメンデーションアルゴリズム向けのフレームワークです。
* [Gorse](https://github.com/gorse-io/gorse) ![](https://img.shields.io/github/stars/gorse-io/gorse.svg?cacheSeconds=172800) - 幅広いオンラインサービスにすばやく導入できる、汎用のオープンソースレコメンダーシステムを目指しています。
* [Merlin](https://github.com/NVIDIA-Merlin/Merlin) ![](https://img.shields.io/github/stars/NVIDIA-Merlin/Merlin.svg?cacheSeconds=172800) - 特徴量エンジニアリングと前処理から、深層学習モデルの学習、本番環境での推論まで、エンドツーエンドの GPU 高速化レコメンダーシステムを提供するオープンソースライブラリです。
* [Recommenders](https://github.com/recommenders-team/recommenders) ![](https://img.shields.io/github/stars/recommenders-team/recommenders.svg?cacheSeconds=172800) - Jupyter ノートブックで提供される、レコメンデーションシステム構築のためのベンチマークとベストプラクティス集です。
* [TorchRec](https://github.com/meta-pytorch/torchrec) ![](https://img.shields.io/github/stars/meta-pytorch/torchrec.svg?cacheSeconds=172800) - 大規模レコメンデーションシステム（RecSys）に必要な一般的なスパース性・並列化プリミティブを提供する、PyTorch ドメインライブラリです。

## 産業用途向け強化学習 <a id="industry-strength-reinforcement-learning"></a>
* [Acme](https://github.com/google-deepmind/acme) ![](https://img.shields.io/github/stars/google-deepmind/acme.svg?cacheSeconds=172800) - シンプルで効率的、かつ読みやすいエージェントを提供することを目指す、強化学習（RL）の構成要素ライブラリです。
* [AReaL](https://github.com/areal-project/AReaL) ![](https://img.shields.io/github/stars/areal-project/AReaL.svg?cacheSeconds=172800) - 強化学習ライブラリです。
* [ChatLearn](https://github.com/alibaba/ChatLearn) ![](https://img.shields.io/github/stars/alibaba/ChatLearn.svg?cacheSeconds=172800) - 大規模言語モデル向けの柔軟で効率的な強化学習学習フレームワークです。FSDP2 や Megatron などの分散学習エンジン、vLLM や SGLang などの推論エンジンに対応し、GRPO や GSPO などの最新 RL アルゴリズムをサポートします。
* [CleanRL](https://github.com/vwxyzjn/cleanrl) ![](https://img.shields.io/github/stars/vwxyzjn/cleanrl.svg?cacheSeconds=172800) - 研究に適した高品質な単一ファイル実装を提供する深層強化学習ライブラリです。実装は簡潔でシンプルながら、AWS Batch を使って数千の実験を実行できる規模に拡張できます。
* [d3rlpy](https://github.com/takuseno/d3rlpy) ![](https://img.shields.io/github/stars/takuseno/d3rlpy.svg?cacheSeconds=172800) - 実践者と研究者向けのオフライン深層強化学習ライブラリです。
* [D4RL](https://github.com/Farama-Foundation/D4RL) ![](https://img.shields.io/github/stars/Farama-Foundation/D4RL.svg?cacheSeconds=172800) - オフライン強化学習向けのオープンソースベンチマークです。
* [Dopamine](https://github.com/google/dopamine) ![](https://img.shields.io/github/stars/google/dopamine.svg?cacheSeconds=172800) - 強化学習アルゴリズムの高速な試作を行う研究フレームワークです。ユーザーが自由に大胆なアイデアを試せる、小さく理解しやすいコードベースを提供することを目指しています（探索的研究）。
* [EvoTorch](https://github.com/nnaisense/evotorch) ![](https://img.shields.io/github/stars/nnaisense/evotorch.svg?cacheSeconds=172800) - NNAISENSE で開発された、PyTorch 上に構築されたオープンソース進化計算ライブラリです。
* [FinRL](https://github.com/AI4Finance-Foundation/FinRL) ![](https://img.shields.io/github/stars/AI4Finance-Foundation/FinRL.svg?cacheSeconds=172800) - 金融分野における強化学習の大きな可能性を実証した、初のオープンソースフレームワークです。
* [Gymnasium](https://github.com/Farama-Foundation/Gymnasium) ![](https://img.shields.io/github/stars/Farama-Foundation/Gymnasium.svg?cacheSeconds=172800) - 学習アルゴリズムと環境の間で通信する標準 API と、その API に準拠する標準環境群を提供することで、強化学習アルゴリズムの開発・比較を行うオープンソース Python ライブラリです。
* [Gymnasium-Robotics](https://github.com/Farama-Foundation/Gymnasium-Robotics) ![](https://img.shields.io/github/stars/Farama-Foundation/Gymnasium-Robotics.svg?cacheSeconds=172800) - Gymnasium API を使う強化学習用ロボット環境のコレクションです。MuJoCo 物理エンジンと保守されている MuJoCo Python バインディングで動作します。
* [Jumanji](https://github.com/instadeepai/jumanji) ![](https://img.shields.io/github/stars/instadeepai/jumanji.svg?cacheSeconds=172800) - JAX で記述された強化学習（RL）環境のスイートで、産業界主導の研究向けに、明快でハードウェア高速化に対応した環境を提供します。
* [MARLlib](https://github.com/Replicable-MARL/MARLlib) ![](https://img.shields.io/github/stars/Replicable-MARL/MARLlib.svg?cacheSeconds=172800) - RLlib を基盤とする包括的なマルチエージェント強化学習アルゴリズムライブラリです。MARL 研究コミュニティに、アルゴリズムの構築、学習、評価を行う統合プラットフォームを提供します。
* [Mava](https://github.com/instadeepai/Mava) ![](https://img.shields.io/github/stars/instadeepai/Mava.svg?cacheSeconds=172800) - JAX で分散マルチエージェント強化学習を行うフレームワークです。
* [Melting Pot](https://github.com/google-deepmind/meltingpot) ![](https://img.shields.io/github/stars/google-deepmind/meltingpot.svg?cacheSeconds=172800) - マルチエージェント強化学習向けのテストシナリオ集です。
* [MetaDrive](https://github.com/metadriverse/metadrive) ![](https://img.shields.io/github/stars/metadriverse/metadrive.svg?cacheSeconds=172800) - 汎用化可能な強化学習のため、多様な運転シナリオを組み合わせる運転シミュレーターです。
* [Minigrid](https://github.com/Farama-Foundation/Minigrid) ![](https://img.shields.io/github/stars/Farama-Foundation/Minigrid.svg?cacheSeconds=172800) - 強化学習研究向けの離散グリッドワールド環境集です。Gymnasium 標準 API に準拠し、軽量、高速、容易にカスタマイズできるよう設計されています。
* [MiniWorld](https://github.com/Farama-Foundation/Miniworld) ![](https://img.shields.io/github/stars/Farama-Foundation/Miniworld.svg?cacheSeconds=172800) - 強化学習とロボティクス研究向けの、最小構成の 3D 室内環境シミュレーターです。
* [ML-Agents](https://github.com/Unity-Technologies/ml-agents) ![](https://img.shields.io/github/stars/Unity-Technologies/ml-agents.svg?cacheSeconds=172800) - ゲームやシミュレーションを、知的エージェントの強化学習環境として利用できるオープンソースプロジェクトです。
* [MushroomRL](https://github.com/MushroomRL/mushroom-rl) ![](https://img.shields.io/github/stars/MushroomRL/mushroom-rl.svg?cacheSeconds=172800) - モジュール性を備えた Python 強化学習（RL）ライブラリです。テンソル計算（PyTorch、TensorFlow など）や RL ベンチマーク（OpenAI Gym、PyBullet、DeepMind Control Suite など）向けの既知の Python ライブラリを簡単に利用できます。
* [OmniSafe](https://github.com/PKU-Alignment/omnisafe) ![](https://img.shields.io/github/stars/PKU-Alignment/omnisafe.svg?cacheSeconds=172800) - 安全な強化学習（RL）研究を加速するために設計された基盤フレームワークです。
* [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) ![](https://img.shields.io/github/stars/OpenRLHF/OpenRLHF.svg?cacheSeconds=172800) - 人間のフィードバックによる強化学習（RLHF）向けのオープンソースフレームワークです。
* [PARL](https://github.com/PaddlePaddle/PARL) ![](https://img.shields.io/github/stars/PaddlePaddle/PARL.svg?cacheSeconds=172800) - 柔軟で高効率な強化学習フレームワークです。
* [PettingZoo](https://github.com/Farama-Foundation/PettingZoo) ![](https://img.shields.io/github/stars/Farama-Foundation/PettingZoo.svg?cacheSeconds=172800) - Gymnasium のマルチエージェント版に相当する、マルチエージェント強化学習研究用の Python ライブラリです。
* [ranx](https://github.com/AmenRa/ranx) ![](https://img.shields.io/github/stars/AmenRa/ranx.svg?cacheSeconds=172800) - 高速なランキング評価指標を Python で実装したライブラリです。Numba による高速なベクトル演算と自動並列化を活用します。
* [RL4CO](https://github.com/ai4co/rl4co) ![](https://img.shields.io/github/stars/ai4co/rl4co.svg?cacheSeconds=172800) - 組合せ最適化（CO）における強化学習のあらゆる用途向け PyTorch ライブラリです。
* [RL2](https://github.com/ChenmienTan/RL2) ![](https://img.shields.io/github/stars/ChenmienTan/RL2.svg?cacheSeconds=172800) - 強化学習ライブラリです。
* [RLinf](https://github.com/RLinf/RLinf) ![](https://img.shields.io/github/stars/RLinf/RLinf.svg?cacheSeconds=172800) - 強化学習ライブラリです。
* [ROLL](https://github.com/alibaba/ROLL) ![](https://img.shields.io/github/stars/alibaba/ROLL.svg?cacheSeconds=172800) - 強化学習ライブラリです。
* [skrl](https://github.com/Toni-SM/skrl) ![](https://img.shields.io/github/stars/Toni-SM/skrl.svg?cacheSeconds=172800) - 読みやすさ、シンプルさ、アルゴリズム実装の透明性を重視して設計された、Python（PyTorch 使用）製のオープンソースモジュール型強化学習ライブラリです。
* [SkyRL](https://github.com/NovaSky-AI/SkyRL) ![](https://img.shields.io/github/stars/NovaSky-AI/SkyRL.svg?cacheSeconds=172800) - 長期にわたる現実世界の RL タスク向けに、モジュール型学習フレームワーク、クロスプラットフォーム推論バックエンド、エージェント型パイプライン、Gymnasium 環境を提供するフルスタック強化学習ライブラリです。
* [slime](https://github.com/THUDM/slime) ![](https://img.shields.io/github/stars/THUDM/slime.svg?cacheSeconds=172800) - RL スケーリング向けの LLM 事後学習フレームワークです。
* [Stable Baselines](https://github.com/DLR-RM/stable-baselines3) ![](https://img.shields.io/github/stars/DLR-RM/stable-baselines3.svg?cacheSeconds=172800) - OpenAI Baselines のフォークで、強化学習アルゴリズムを実装しています。
* [TF-Agents](https://github.com/tensorflow/agents) ![](https://img.shields.io/github/stars/tensorflow/agents.svg?cacheSeconds=172800) - コンテキスト付きバンディットと強化学習向けの、信頼性、スケーラビリティ、使いやすさを備えた TensorFlow ライブラリです。
* [TorchRL](https://github.com/pytorch/rl) ![](https://img.shields.io/github/stars/pytorch/rl.svg?cacheSeconds=172800) - PyTorch 用のオープンソース強化学習（RL）ライブラリです。
* [TRL](https://github.com/huggingface/trl) ![](https://img.shields.io/github/stars/huggingface/trl.svg?cacheSeconds=172800) - 強化学習で Transformer 言語モデルを学習します。
* [veRL](https://github.com/verl-project/verl) ![](https://img.shields.io/github/stars/verl-project/verl.svg?cacheSeconds=172800) - LLM 向けに設計された、柔軟で効率的かつ産業レベルの RLHF 学習フレームワークです。

## 産業用途向けロボティクス <a id="industry-strength-robotics"></a>
* [AI2-THOR](https://github.com/allenai/ai2thor) ![](https://img.shields.io/github/stars/allenai/ai2thor.svg?cacheSeconds=172800) - AI エージェント向けの、写真に近いリアルさで操作可能なフレームワークです。
* [Genesis](https://github.com/Genesis-Embodied-AI/genesis-world) ![](https://img.shields.io/github/stars/Genesis-Embodied-AI/genesis-world.svg?cacheSeconds=172800) - Embodied AI とロボットシミュレーション向けの物理プラットフォームです。
* [Habitat-Sim](https://github.com/facebookresearch/habitat-sim) ![](https://img.shields.io/github/stars/facebookresearch/habitat-sim.svg?cacheSeconds=172800) - Embodied AI 研究向けの柔軟で高性能な 3D シミュレーターです。
* [IsaacLab](https://github.com/isaac-sim/IsaacLab) ![](https://img.shields.io/github/stars/isaac-sim/IsaacLab.svg?cacheSeconds=172800) - NVIDIA Isaac Sim を活用する、ロボット学習向けの統合型モジュラーフレームワークです。
* [LeRobot](https://github.com/huggingface/lerobot) ![](https://img.shields.io/github/stars/huggingface/lerobot.svg?cacheSeconds=172800) - 実世界のロボティクスと模倣学習向けのモデル、データセット、ツールを提供します。
* [robosuite](https://github.com/ARISE-Initiative/robosuite) ![](https://img.shields.io/github/stars/ARISE-Initiative/robosuite.svg?cacheSeconds=172800) - MuJoCo 物理エンジンを活用するロボット学習シミュレーションフレームワークです。
* [RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) ![](https://img.shields.io/github/stars/RoboVerseOrg/RoboVerse.svg?cacheSeconds=172800) - 多様な環境を備えた包括的なロボットシミュレーションプラットフォームです。

## 産業用途向け可視化 <a id="industry-strength-visualisation"></a>
* [Apache ECharts](https://github.com/apache/echarts) ![](https://img.shields.io/github/stars/apache/echarts.svg?cacheSeconds=172800) - ブラウザー向けの強力なインタラクティブグラフ・データ可視化ライブラリです。
* [Apache Superset](https://github.com/apache/superset) ![](https://img.shields.io/github/stars/apache/superset.svg?cacheSeconds=172800) - 最新のエンタープライズ対応ビジネスインテリジェンス Web アプリケーションです。
* [Bokeh](https://github.com/bokeh/bokeh) ![](https://img.shields.io/github/stars/bokeh/bokeh.svg?cacheSeconds=172800) - 最新の Web ブラウザーで美しく意味のあるデータ表示を実現する、Python 用インタラクティブ可視化ライブラリです。
* [Bread Dataset Viewer](https://github.com/Bread-Technologies/Bread-Dataset-Viewer) - IDE をクラッシュさせることなく、大規模な機械学習データセット（CSV、JSON、Parquet など）をエディター内で直接表示・探索する VS Code 拡張機能です。
* [Bread WandB Viewer](https://github.com/Bread-Technologies/Bread-WandB-Viewer) - Weights & Biases の実験、ログ、アーティファクトを IDE 内で表示する VS Code 拡張機能です。Web UI への切り替えが不要になり、完全オフライン動作によりデータのプライバシーを維持します。
* [Data Formulator](https://github.com/microsoft/data-formulator) ![](https://img.shields.io/github/stars/microsoft/data-formulator.svg?cacheSeconds=172800) - AI を活用してデータを変換し、豊かな可視化を反復的に作成します。
* [ggplot2](https://github.com/tidyverse/ggplot2) ![](https://img.shields.io/github/stars/tidyverse/ggplot2.svg?cacheSeconds=172800) - R 向けのグラフィック文法の実装です。
* [gradio](https://github.com/gradio-app/gradio) ![](https://img.shields.io/github/stars/gradio-app/gradio.svg?cacheSeconds=172800) - Python を書くだけで、モデルのデモをすばやく作成して共有できます。ブラウザー上でモデルを対話的にデバッグし、共同作業者からフィードバックを受け取り、何もデプロイせずに公開リンクを生成できます。
* [Kangas](https://github.com/comet-ml/kangas) ![](https://img.shields.io/github/stars/comet-ml/kangas.svg?cacheSeconds=172800) - 大規模マルチメディアデータの探索、分析、可視化を行うツールです。大量のデータ表を記録するシンプルな Python API と、データセットに対して複雑なクエリを実行できる直感的なビジュアルインターフェースを提供します。
* [matplotlib](https://github.com/matplotlib/matplotlib) ![](https://img.shields.io/github/stars/matplotlib/matplotlib.svg?cacheSeconds=172800) - さまざまな印刷品質の形式とプラットフォーム横断型の対話環境で高品質な図を作成する Python 2D プロットライブラリです。
* [Model Explorer](https://github.com/google-ai-edge/model-explorer) ![](https://img.shields.io/github/stars/google-ai-edge/model-explorer.svg?cacheSeconds=172800) - 機械学習モデルを視覚化・探索するツールです。モデル構造を理解し、レイヤーの詳細を調べ、大規模なニューラルネットワーク内を移動するための、直感的なグラフベースのビューを提供します。
* [Netron](https://github.com/lutzroeder/netron) ![](https://img.shields.io/github/stars/lutzroeder/netron.svg?cacheSeconds=172800) - ニューラルネットワーク、ディープラーニング、機械学習モデルのビューアーです。
* [Perspective](https://github.com/perspective-dev/perspective) ![](https://img.shields.io/github/stars/perspective-dev/perspective.svg?cacheSeconds=172800) WebAssembly を介したストリーミングピボット可視化です。
* [Plotly](https://github.com/plotly/plotly.py) ![](https://img.shields.io/github/stars/plotly/plotly.py.svg?cacheSeconds=172800) - Python 向けのインタラクティブなオープンソースのブラウザーベースグラフ作成ライブラリです。
* [Redash](https://github.com/getredash/redash) ![](https://img.shields.io/github/stars/getredash/redash.svg?cacheSeconds=172800) - 複数のバックエンドを活用して大規模データセットに簡単にアクセスできるよう設計された、オープンソースの可視化フレームワークです。
* [Rerun](https://github.com/rerun-io/rerun) ![](https://img.shields.io/github/stars/rerun-io/rerun.svg?cacheSeconds=172800) - ロボティクス、コンピュータービジョン、空間 AI 向けに設計された、マルチモーダルデータの記録、保存、クエリ、可視化を行うオープンソース SDK です。
* [seaborn](https://github.com/mwaskom/seaborn) ![](https://img.shields.io/github/stars/mwaskom/seaborn.svg?cacheSeconds=172800) - matplotlib を基盤とする Python 可視化ライブラリで、高水準のインターフェースを通じて魅力的な統計グラフを描画します。
* [Spotlight](https://github.com/Renumics/spotlight) ![](https://img.shields.io/github/stars/Renumics/spotlight.svg?cacheSeconds=172800) - 重要なデータセグメントとモデルの失敗パターンの特定を支援します。高品質なデータセットをキュレーションすることで、信頼性の高い機械学習モデルの構築と保守を可能にします。
* [Streamlit](https://github.com/streamlit/streamlit) ![](https://img.shields.io/github/stars/streamlit/streamlit.svg?cacheSeconds=172800) - 簡単な Python スクリプトで機械学習プロジェクトのアプリを作成できます。ホットリロードに対応し、ファイルを編集・保存するとアプリが即座に更新されます。
* [tensorboardX](https://github.com/lanpa/tensorboardX) ![](https://img.shields.io/github/stars/lanpa/tensorboardX.svg?cacheSeconds=172800) - シンプルな関数呼び出しで TensorBoard イベントを記録します。
* [TensorBoard](https://github.com/tensorflow/tensorboard) ![](https://img.shields.io/github/stars/tensorflow/tensorboard.svg?cacheSeconds=172800) - 機械学習実験をホスト、追跡、共有しやすくする可視化ツールキットです。
* [Torchvista](https://github.com/sachinhosmani/torchvista) ![](https://img.shields.io/github/stars/sachinhosmani/torchvista.svg?cacheSeconds=172800) - ネストしたモジュールの折りたたみや、エラーがあっても部分的な可視化を続行する機能に対応し、ノートブック内で任意の PyTorch モデルの順伝播を計算グラフとして表示する、対話型ノートブックツールです。
* [Transformer Explainer](https://github.com/poloclub/transformer-explainer) ![](https://img.shields.io/github/stars/poloclub/transformer-explainer.svg?cacheSeconds=172800) - GPT のような Transformer ベースモデルの仕組みを誰もが学べるよう設計された、インタラクティブな可視化ツールです。
* [Vega-Altair](https://github.com/vega/altair) ![](https://img.shields.io/github/stars/vega/altair.svg?cacheSeconds=172800) - Python 用の宣言的な統計可視化ライブラリです。
* [ydata-profiling](https://github.com/Data-Centric-AI-Community/fg-data-profiling) ![](https://img.shields.io/github/stars/Data-Centric-AI-Community/fg-data-profiling.svg?cacheSeconds=172800) - 一貫性があり高速なソリューションで、1 行のコードから探索的データ分析（EDA）を実行できます。

## メタデータ管理 <a id="metadata-management"></a>
* [Apache Atlas](https://github.com/apache/atlas) ![](https://img.shields.io/github/stars/apache/atlas.svg?cacheSeconds=172800) - Apache Atlas フレームワークは、企業が Hadoop 内でコンプライアンス要件を効果的かつ効率的に満たし、企業全体のデータエコシステムと連携できるようにする、拡張可能な中核的ガバナンスサービス群です。
* [DataHub](https://github.com/datahub-project/datahub) ![](https://img.shields.io/github/stars/datahub-project/datahub.svg?cacheSeconds=172800) - LinkedIn の汎用メタデータ検索・発見ツールです。
* [Marquez](https://github.com/MarquezProject/marquez) ![](https://img.shields.io/github/stars/MarquezProject/marquez.svg?cacheSeconds=172800) - データエコシステムのメタデータを収集、集約、可視化するオープンソースのメタデータサービスです。
* [Metacat](https://github.com/Netflix/metacat) ![](https://img.shields.io/github/stars/Netflix/metacat.svg?cacheSeconds=172800) - 統合メタデータ探索 API サービスです。メタデータシステムのフェデレーションビュー、データセットに関する任意のメタデータ保存、メタデータ探索という課題の解決に重点を置いています。
* [ML Metadata](https://github.com/google/ml-metadata) ![](https://img.shields.io/github/stars/google/ml-metadata.svg?cacheSeconds=172800) - ML 開発者やデータサイエンティストのワークフローに関連するメタデータを記録・取得するライブラリです。

## モデル、データ、実験の管理 <a id="model-data-and-experiment-management"></a>
* [Aim](https://github.com/aimhubio/aim) ![](https://img.shields.io/github/stars/aimhubio/aim.svg?cacheSeconds=172800) - AI 実験の記録、検索、比較を非常に簡単に行えます。
* [ClearML](https://github.com/clearml/clearml) ![](https://img.shields.io/github/stars/clearml/clearml.svg?cacheSeconds=172800) - AI 向けの自動実験管理とバージョン管理ツールです（旧称 Trains）。
* [DataHub](https://github.com/datahub-project/datahub) ![](https://img.shields.io/github/stars/datahub-project/datahub.svg?cacheSeconds=172800) - 最新のデータスタック向けオープンソースデータカタログです。
* [Dolt](https://github.com/dolthub/dolt) ![](https://img.shields.io/github/stars/dolthub/dolt.svg?cacheSeconds=172800) - Git リポジトリと同じようにフォーク、クローン、ブランチ、マージ、プッシュ、プルができる SQL データベースです。
* [DVC](https://github.com/treeverse/dvc) ![](https://img.shields.io/github/stars/treeverse/dvc.svg?cacheSeconds=172800) - DVC（Data Version Control）は、モデルのバージョン管理を可能にする Git のフォークです。
* [HuggingFace Model Downloader](https://github.com/bodaay/HuggingFaceModelDownloader) ![](https://img.shields.io/github/stars/bodaay/HuggingFaceModelDownloader.svg?cacheSeconds=172800) - Hugging Face の Web サイトからモデルやデータセットをダウンロードするユーティリティです。LFS ファイルのマルチスレッドダウンロードに対応し、SHA256 チェックサム検証でダウンロードしたモデルの整合性を保証します。
* [Keepsake](https://github.com/replicate/keepsake) ![](https://img.shields.io/github/stars/replicate/keepsake.svg?cacheSeconds=172800) - 機械学習向けのバージョン管理です。
* [KitOps](https://github.com/kitops-ml/kitops) ![](https://img.shields.io/github/stars/kitops-ml/kitops.svg?cacheSeconds=172800) - 既存の AI/ML、開発、DevOps ツールと連携する、AI/ML プロジェクト向けのオープンで標準準拠なパッケージング・バージョン管理システムです。
* [lakeFS](https://github.com/treeverse/lakeFS) ![](https://img.shields.io/github/stars/treeverse/lakeFS.svg?cacheSeconds=172800) - オブジェクトストレージ上に構築された、再現可能でアトミックなバージョン管理対応データレイクです。
* [MLflow](https://github.com/mlflow/mlflow) ![](https://img.shields.io/github/stars/mlflow/mlflow.svg?cacheSeconds=172800) - 実験、再現性、デプロイなどを含む ML ライフサイクルを管理するオープンソースプラットフォームです。
* [Polyaxon](https://github.com/polyaxon/polyaxon) ![](https://img.shields.io/github/stars/polyaxon/polyaxon.svg?cacheSeconds=172800) - Kubernetes 上で再現性とスケーラビリティを備えた機械学習・ディープラーニングを行うプラットフォームです - [(動画)](https://www.youtube.com/watch?v=Iexwrka_hys)。
* [Quilt](https://github.com/quiltdata/quilt) ![](https://img.shields.io/github/stars/quiltdata/quilt.svg?cacheSeconds=172800) - データとモデルのバージョン管理、再現性、デプロイを実現します。
* [Sacred](https://github.com/IDSIA/sacred) ![](https://img.shields.io/github/stars/IDSIA/sacred.svg?cacheSeconds=172800) - 機械学習実験の設定、整理、ログ記録、再現を支援するツールです。
* [TerminusDB](https://github.com/terminusdb/terminusdb) ![](https://img.shields.io/github/stars/terminusdb/terminusdb.svg?cacheSeconds=172800) - Git のようにデータを保存するグラフデータベース管理システムです。
* [Weights & Biases](https://github.com/wandb/wandb) ![](https://img.shields.io/github/stars/wandb/wandb.svg?cacheSeconds=172800) - 機械学習の実験追跡、データセットのバージョン管理、ハイパーパラメーター探索、可視化、共同作業を行います。

## モデルの学習とオーケストレーション <a id="model-training-and-orchestration"></a>

* [AutoTrain Advanced](https://github.com/huggingface/autotrain-advanced) ![](https://img.shields.io/github/stars/huggingface/autotrain-advanced.svg?cacheSeconds=172800) - 数回クリックするだけで機械学習モデルを学習できる、コード不要のソリューションです。
* [Avalanche](https://github.com/ContinualAI/avalanche) ![](https://img.shields.io/github/stars/ContinualAI/avalanche.svg?cacheSeconds=172800) - 継続学習アルゴリズムの高速な試作、学習、再現可能な評価のために、共有・共同作業が可能なオープンソース（MIT ライセンス）のコードベースを提供するエンドツーエンドの継続学習ライブラリです。
* [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) ![](https://img.shields.io/github/stars/axolotl-ai-cloud/axolotl.svg?cacheSeconds=172800) - 複数の設定やアーキテクチャに対応し、さまざまな AI モデルのファインチューニングを効率化するツールです。
* [BindsNET](https://github.com/BindsNET/bindsnet) ![](https://img.shields.io/github/stars/BindsNET/bindsnet.svg?cacheSeconds=172800) - 機械学習向けの生物学的着想アルゴリズムの開発を目的としたスパイキングニューラルネットワークシミュレーションライブラリです。
* [CML](https://github.com/iterative/cml) ![](https://img.shields.io/github/stars/iterative/cml.svg?cacheSeconds=172800) - 機械学習プロジェクトで継続的インテグレーション／デリバリー（CI/CD）を実装するためのオープンソースライブラリです。
* [CoreNet](https://github.com/apple/corenet) ![](https://img.shields.io/github/stars/apple/corenet.svg?cacheSeconds=172800) - 研究者やエンジニアが、基盤モデル（CLIP、LLM など）、物体分類、物体検出、セマンティックセグメンテーションを含む幅広いタスク向けに、標準モデルや新しい小規模・大規模モデルを学習できるディープニューラルネットワークツールキットです。
* [DataLinter](https://github.com/zgornel/DataLinter) ![](https://img.shields.io/github/stars/zgornel/DataLinter.svg?cacheSeconds=86400) - プラグインを通じてデータやコードに依存しないよう設計された、データとコード向けのオープンソースコンテキスト対応リンターです。
* [Determined](https://github.com/determined-ai/determined) ![](https://img.shields.io/github/stars/determined-ai/determined.svg?cacheSeconds=172800) - 分散学習、ハイパーパラメーター調整、モデル管理を統合してサポートするディープラーニング学習プラットフォームです（TensorFlow と PyTorch に対応）。
* [dstack](https://github.com/dstackai/dstack) ![](https://img.shields.io/github/stars/dstackai/dstack.svg?cacheSeconds=172800) - ML チームのワークロードオーケストレーションを簡素化し、GPU 利用率を高めるオープンソースのコンテナオーケストレーターです。
* [envd](https://github.com/tensorchord/envd) ![](https://img.shields.io/github/stars/tensorchord/envd.svg?cacheSeconds=172800) - データサイエンスおよび AI/ML エンジニアリングチーム向けの機械学習開発環境です。
* [Fire-Flyer File System](https://github.com/deepseek-ai/3FS) ![](https://img.shields.io/github/stars/deepseek-ai/3FS.svg?cacheSeconds=172800) - AI の学習・推論ワークロードが抱える課題に対応するために設計された、高性能な分散ファイルシステムです。最新の SSD と RDMA ネットワークを活用して共有ストレージレイヤーを提供し、分散アプリケーションの開発を簡素化します。
* [H2O-3](https://github.com/h2oai/h2o-3) ![](https://img.shields.io/github/stars/h2oai/h2o-3.svg?cacheSeconds=172800) - よりスマートなアプリケーション向けの高速でスケーラブルな機械学習プラットフォームです。ディープラーニング、勾配ブースティングと XGBoost、Random Forest、一般化線形モデル（ロジスティック回帰、Elastic Net）、K-Means、PCA、Stacked Ensembles、自動機械学習（AutoML）などに対応します。
* [Hopsworks](https://github.com/logicalclocks/hopsworks) ![](https://img.shields.io/github/stars/logicalclocks/hopsworks.svg?cacheSeconds=172800) - 機械学習パイプラインの設計と運用を行う、データ集約型プラットフォームです。
* [Ignite](https://github.com/pytorch/ignite) ![](https://img.shields.io/github/stars/pytorch/ignite.svg?cacheSeconds=172800) - PyTorch でのニューラルネットワーク学習と評価を、柔軟かつ透明性の高い方法で支援する高水準ライブラリです。
* [Kubeflow](https://github.com/kubeflow/kubeflow) ![](https://img.shields.io/github/stars/kubeflow/kubeflow.svg?cacheSeconds=172800) - Google 社内の機械学習パイプラインを基盤とする、クラウドネイティブな機械学習プラットフォームです。
* [Ludwig](https://github.com/ludwig-ai/ludwig) ![](https://img.shields.io/github/stars/ludwig-ai/ludwig.svg?cacheSeconds=172800) - LLM やその他のディープニューラルネットワークなど、カスタム AI モデルを構築するためのローコードフレームワークです。
* [MFTCoder](https://github.com/codefuse-ai/MFTCoder) ![](https://img.shields.io/github/stars/codefuse-ai/MFTCoder.svg?cacheSeconds=172800) - CodeFuse のオープンソースプロジェクトです。大規模言語モデル（LLM）、特にコードタスク向け大規模言語モデル（Code-LLM）を対象に、正確で効率的なマルチタスクファインチューニング（MFT）を行います。
* [MLeap](https://github.com/combust/mleap) ![](https://img.shields.io/github/stars/combust/mleap.svg?cacheSeconds=172800) - Spark、TensorFlow、sklearn 向けのパイプラインとモデルのシリアライズを標準化します。
* [Nanotron](https://github.com/huggingface/nanotron) ![](https://img.shields.io/github/stars/huggingface/nanotron.svg?cacheSeconds=172800) - 3D 並列化を使い、さまざまなモデルを効率よく学習するための分散プリミティブを提供します。
* [NeMo](https://github.com/NVIDIA-NeMo/Speech) ![](https://img.shields.io/github/stars/NVIDIA-NeMo/Speech.svg?cacheSeconds=172800) - NVIDIA NeMo は、大規模言語モデル（LLM）、マルチモーダルモデル（MM）、自動音声認識（ASR）、音声合成（TTS）、コンピュータービジョン（CV）領域に取り組む研究者や PyTorch 開発者向けに構築された、スケーラブルでクラウドネイティブな生成 AI フレームワークです。既存コードや事前学習済みモデルのチェックポイントを活用し、新しい生成 AI モデルを効率よく作成、カスタマイズ、デプロイできるよう設計されています。
* [Prime](https://github.com/PrimeIntellect-ai/prime) ![](https://img.shields.io/github/stars/PrimeIntellect-ai/prime.svg?cacheSeconds=172800) - インターネットを介した効率的なグローバル分散 AI モデル学習のフレームワークです。
* [PyCaret](https://github.com/pycaret/pycaret) ![](https://img.shields.io/github/stars/pycaret/pycaret.svg?cacheSeconds=172800)) - モデルの学習とデプロイを行うローコードライブラリです（scikit-learn、XGBoost、LightGBM、spaCy）。
* [Sematic](https://github.com/sematic-ai/sematic) ![](https://img.shields.io/github/stars/sematic-ai/sematic.svg?cacheSeconds=172800) - リソース負荷の高いパイプラインをシンプルな Python で構築するプラットフォームです。
* [Skaffold](https://github.com/GoogleContainerTools/skaffold) ![](https://img.shields.io/github/stars/GoogleContainerTools/skaffold.svg?cacheSeconds=172800) - Kubernetes アプリケーションの継続的開発を支援するコマンドラインツールです。アプリケーションのソースコードをローカルで反復開発し、ローカルまたはリモートの Kubernetes クラスターにデプロイできます。
* [TFX](https://github.com/tensorflow/tfx) ![](https://img.shields.io/github/stars/tensorflow/tfx.svg?cacheSeconds=172800) - TensorFlow を基盤とし、モニタリングとモデルのバージョン管理を含む、本番環境を重視した ML 設定フレームワークです。
* [unsloth](https://github.com/unslothai/unsloth) ![](https://img.shields.io/github/stars/unslothai/unsloth.svg?cacheSeconds=172800) - LLM 向けファインチューニングと強化学習です。OpenAI gpt-oss、DeepSeek-R1、Qwen3、Gemma 3、TTS を、VRAM を 70% 削減しながら 2 倍高速に学習できます。

## モデルストレージの最適化 <a id="model-storage-optimisation"></a>
* [AWQ](https://github.com/mit-han-lab/llm-awq) ![](https://img.shields.io/github/stars/mit-han-lab/llm-awq.svg?cacheSeconds=172800) - LLM の圧縮と高速化のためのアクティベーションを考慮した重み量子化です。
* [GGML](https://github.com/ggml-org/ggml) ![](https://img.shields.io/github/stars/ggml-org/ggml.svg?cacheSeconds=172800) - CPU 上での効率的な推論を可能にし、特に大規模言語モデル向けに最適化された高性能テンソルライブラリです。
* [neural-compressor](https://github.com/intel/neural-compressor) ![](https://img.shields.io/github/stars/intel/neural-compressor.svg?cacheSeconds=172800) - 主要なフレームワーク向けに、量子化、枝刈り（スパース化）、蒸留、ニューラルアーキテクチャ探索などの一般的なモデル圧縮技術を提供します。
* [NNEF](https://www.khronos.org/nnef) - Neural Network Exchange Format（NNEF）は、異なる機械学習フレームワークやプラットフォーム間の相互運用性と移植性を実現する、ニューラルネットワークモデル表現用のオープン標準です。
* [ONNX](https://github.com/onnx/onnx) ![](https://img.shields.io/github/stars/onnx/onnx.svg?cacheSeconds=172800) - ONNX（Open Neural Network Exchange）は、異なるフレームワークやプラットフォーム間での機械学習モデルの相互運用性と移植性を促進するオープンソース形式です。
* [PFA](https://dmg.org/pfa) - PFA（Portable Format for Analytics）は、予測モデルと分析ワークフローを移植可能な JSON ベース形式で表現・交換するための標準形式です。
* [PMML](https://dmg.org/pmml) - PMML（Predictive Model Markup Language）は、異なるアプリケーション間で予測モデルを表現・共有するための XML ベース標準です。
* [Quanto](https://github.com/huggingface/optimum-quanto) ![](https://img.shields.io/github/stars/huggingface/optimum-quanto.svg?cacheSeconds=172800) - ディープラーニングモデルの量子化を簡素化することを目指しています。

## プライバシーと安全性 <a id="privacy-and-safety"></a>
* [AI Gateway](https://github.com/portkey-ai/gateway) ![](https://img.shields.io/github/stars/portkey-ai/gateway.svg?cacheSeconds=172800) - ガードレールを統合した超高速 AI ゲートウェイです。
* [ART](https://github.com/Trusted-AI/adversarial-robustness-toolbox) ![](https://img.shields.io/github/stars/Trusted-AI/adversarial-robustness-toolbox.svg?cacheSeconds=172800) - ART（Adversarial Robustness Toolbox）は、回避、ポイズニング、抽出、推論の敵対的脅威から機械学習モデルとアプリケーションを防御・評価するためのツールを開発者や研究者に提供します。
* [CipherChat](https://github.com/RobustNLP/CipherChat) ![](https://img.shields.io/github/stars/RobustNLP/CipherChat.svg?cacheSeconds=172800) - LLM の安全性アラインメントに関する汎化能力を評価するフレームワークです。
* [DeepTeam](https://github.com/confident-ai/deepteam) ![](https://img.shields.io/github/stars/confident-ai/deepteam.svg?cacheSeconds=172800) - 大規模言語モデルシステムの侵入テストと安全確保を行う、使いやすいオープンソース LLM レッドチーミングフレームワークです。
* [FATE](https://github.com/FederatedAI/FATE) ![](https://img.shields.io/github/stars/FederatedAI/FATE.svg?cacheSeconds=172800) - FATE（Federated AI Technology Enabler）は、データの安全性とプライバシーを保護しながら企業や機関がデータを共同利用できるようにする、世界初の産業グレードの連合学習オープンソースフレームワークです。
* [FedML](https://github.com/FedML-AI/FedML) ![](https://img.shields.io/github/stars/FedML-AI/FedML.svg?cacheSeconds=172800) - あらゆる場所・規模で連合／分散機械学習を実現する、研究と本番を統合したエッジ・クラウドプラットフォームです。
* [Flower](https://github.com/flwrlabs/flower) ![](https://img.shields.io/github/stars/flwrlabs/flower.svg?cacheSeconds=172800) - 統一されたアプローチを持つ連合学習フレームワークです。あらゆる ML ワークロードを、任意の ML フレームワークとプログラミング言語で連合できます。
* [Google's Differential Privacy](https://github.com/google/differential-privacy) ![](https://img.shields.io/github/stars/google/differential-privacy.svg?cacheSeconds=172800) - プライベートまたは機密情報を含む数値データセットから集計統計を生成するために利用できる、ε 差分プライバシーアルゴリズムの C++ ライブラリです。
* [Guardrails](https://github.com/guardrails-ai/guardrails) ![](https://img.shields.io/github/stars/guardrails-ai/guardrails.svg?cacheSeconds=172800) - 大規模言語モデルの出力に構造、型、品質の保証を追加するパッケージです。
* [NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) ![](https://img.shields.io/github/stars/NVIDIA-NeMo/Guardrails.svg?cacheSeconds=172800) - LLM ベースの対話システムにプログラム可能なガードレールを簡単に追加できるオープンソースツールキットです。
* [Opacus](https://github.com/meta-pytorch/opacus)  ![](https://img.shields.io/github/stars/meta-pytorch/opacus.svg?cacheSeconds=172800) - 差分プライバシーを適用して PyTorch モデルを学習できるライブラリです。クライアント側でのコード変更を最小限に抑え、学習性能への影響も小さく、使用したプライバシー予算を随時追跡できます。
* [OpenFL](https://github.com/securefederatedai/openfederatedlearning)  ![](https://img.shields.io/github/stars/securefederatedai/openfederatedlearning.svg?cacheSeconds=172800) - 連合学習のための Python フレームワークです。データサイエンティストが柔軟に拡張でき、簡単に習得できるツールとして設計されています。Intel Internet of Things Group（IOTG）と Intel Labs が開発しています。
* [PySyft](https://github.com/OpenMined/PySyft) ![](https://img.shields.io/github/stars/OpenMined/PySyft.svg?cacheSeconds=172800) - 安全でプライベートなディープラーニングのための Python ライブラリです。PyTorch 内でマルチパーティ計算（MPC）を利用し、プライベートデータをモデル学習から切り離します。
* [Tensorflow Privacy](https://github.com/tensorflow/privacy) ![](https://img.shields.io/github/stars/tensorflow/privacy.svg?cacheSeconds=172800) - 差分プライバシーを適用して機械学習モデルを学習する TensorFlow オプティマイザーの実装を含む Python ライブラリです。
* [TF Encrypted](https://github.com/tf-encrypted/tf-encrypted) ![](https://img.shields.io/github/stars/tf-encrypted/tf-encrypted.svg?cacheSeconds=172800) - TensorFlow で暗号化データ上の機密機械学習を実現するフレームワークです。

# その他の Awesome リスト

* [Awesome Agentic Engineering Resources](https://github.com/EthicalML/awesome-agentic-engineering-resources) ![](https://img.shields.io/github/stars/EthicalML/awesome-agentic-engineering-resources.svg?cacheSeconds=172800) - エージェント型 AI システムを構築するためのリソース、ツール、参考資料を厳選したコレクションです。
* [Awesome AI Gateway](https://github.com/cuihuan/awesome-ai-gateway) ![](https://img.shields.io/github/stars/cuihuan/awesome-ai-gateway.svg?cacheSeconds=172800) - AI ゲートウェイと LLM プロキシ（LiteLLM、OpenRouter、Portkey、Kong、Higress、new-api）を、コスト、コンプライアンス、セルフホスト、ルーティングの観点から比較する、厳選されたバイリンガル（EN/zh-CN）リストです。意思決定ツリー、再現可能なコストベンチマーク、選定スコアカードを備えています。
* [Awesome AI Regulation](https://github.com/EthicalML/awesome-artificial-intelligence-regulation) ![](https://img.shields.io/github/stars/EthicalML/awesome-artificial-intelligence-regulation.svg?cacheSeconds=172800) - さまざまな法域で ML システムを責任を持ってデプロイするために不可欠なガバナンス、コンプライアンス、規制の枠組みを網羅します。
* [Awesome AI Tokenomics](https://github.com/QuesmaOrg/awesome-ai-tokenomics) ![](https://img.shields.io/github/stars/QuesmaOrg/awesome-ai-tokenomics.svg?cacheSeconds=172800) - モニタリング、最適化、キャッシュ、モデル選択、コンテキスト管理など、AI システムにおけるトークンコストと効率を扱います。
* [Awesome Production GenAI](https://github.com/EthicalML/awesome-production-agentic-systems) ![](https://img.shields.io/github/stars/EthicalML/awesome-production-agentic-systems.svg?cacheSeconds=172800) - LLM 運用、プロンプトエンジニアリング、生成 AI に特化したモニタリング・安全性ツールなど、生成 AI のデプロイに焦点を当てています。
* [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) ![](https://img.shields.io/github/stars/Yigtwxx/Awesome-RAG-Production.svg?cacheSeconds=172800) - スケーラブルな RAG システムの構築に向けた、本番品質のツールとベストプラクティスを厳選したリストです。

# コントリビューター

<a href="https://github.com/EthicalML/awesome-production-machine-learning/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=EthicalML/awesome-production-machine-learning" />
</a>
