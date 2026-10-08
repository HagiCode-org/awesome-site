# Awesome TensorFlow  [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/jtoy/awesome)

TensorFlow の実験、ライブラリ、プロジェクトの厳選されたリストです。awesome-machine-learning に触発されて作成されました。

## What is TensorFlow?

TensorFlow は、データフローグラフを用いた数値計算のためのオープンソースのソフトウェアライブラリです。言い換えれば、深層学習モデルを構築するための最良の方法です。

詳細は[こちら](http://tensorflow.org)。



## Table of Contents

<!-- MarkdownTOC depth=4 -->
- [Tutorials](#github-tutorials)
- [Models/Projects](#github-projects)
- [Powered by TensorFlow](#github-powered-by)
- [Libraries](#libraries)
- [Tools/Utilities](#tools-utils)
- [Videos](#video)
- [Papers](#papers)
- [Blog posts](#blogs)
- [Community](#community)
- [Books](#books)

<!-- /MarkdownTOC -->


<a name="github-tutorials" />

## Tutorials

* [TensorFlow Tutorial 1](https://github.com/pkmital/tensorflow_tutorials) - TensorFlow の基本から少し面白いアプリケーションまで
* [TensorFlow Tutorial 2](https://github.com/nlintz/TensorFlow-Tutorials) - Google の TensorFlow フレームワークに基づいた深層学習への入門。これらのチュートリアルは Newmu の Theano の直接の移植版です
* [TensorFlow Tutorial 3](https://github.com/Hvass-Labs/TensorFlow-Tutorials) - これらのチュートリアルは、ドキュメントの整ったコードと YouTube の動画を用いて、深層学習と TensorFlow を始める初心者向けに作られています。
* [TensorFlow Examples](https://github.com/aymericdamien/TensorFlow-Examples) - 初心者向けの TensorFlow チュートリアルとコード例
* [Sungjoon's TensorFlow-101](https://github.com/sjchoi86/Tensorflow-101) - Jupyter Notebook で書かれた Python の TensorFlow チュートリアル
* [Terry Um’s TensorFlow Exercises](https://github.com/terryum/TensorFlow_Exercises) - 他の TensorFlow の例のコードを再現する
* [Installing TensorFlow on Raspberry Pi 3](https://github.com/samjabrahams/tensorflow-on-raspberry-pi) - Raspberry Pi 上で正しくコンパイルされ、動作する TensorFlow
* [Classification on time series](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition) - スマートフォンのセンサーデータに対する LSTM を用いた TensorFlow でのリカレントニューラルネットワークによる分類
* [Getting Started with TensorFlow on Android](https://omid.al/posts/2017-02-20-Tutorial-Build-Your-First-Tensorflow-Android-App.html) - 最初の TensorFlow Android アプリを構築する
* [Predict time series](https://github.com/guillaume-chevalier/seq2seq-signal-prediction) - このアーキテクチャが提供する膨大な可能性の入門として、単純なデータセットで seq2seq モデルを使うことを学ぶ
* [Single Image Random Dot Stereograms](https://github.com/Mazecreator/TensorFlow-SIRDS) - SIRDS は 2D 画像で 3D データを提示する手法です。透視図による隠れた線のない滝型プロットの科学データ表示を可能にします。
* [CS20 SI: TensorFlow for DeepLearning Research](http://web.stanford.edu/class/cs20si/syllabus.html) - 2017 年の TensorFlow に関するスタンフォードのコース - [Syllabus](http://web.stanford.edu/class/cs20si/syllabus.html) - [Unofficial Videos](https://youtu.be/g-EvyKpZjmQ?list=PLSPPwKHXGS2110rEaNH7amFGmaD5hsObs)
* [TensorFlow World](https://github.com/astorfi/TensorFlow-World) - 詳細なドキュメント付きの簡潔ですぐに使える TensorFlow チュートリアルが提供されています。
* [Effective Tensorflow](https://github.com/vahidk/EffectiveTensorflow) - TensorFlow のハウツーとベストプラクティス。基本から高度なトピックまでを網羅しています。
* [TensorLayer](http://tensorlayer.readthedocs.io/en/latest/user/tutorial.html) - TensorFlow の公式チュートリアルのモジュール式実装。([CN](https://tensorlayercn.readthedocs.io/zh/latest/user/tutorial.html))。
* [Understanding The Tensorflow Estimator API](https://www.lighttag.io/blog/tensorflow-estimator-api/) Estimator API の概念的な概要、いつ使うか、なぜ使うか。 
* [Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning](https://www.coursera.org/learn/introduction-tensorflow) - Coursera が提供する TensorFlow 入門
* [Convolutional Neural Networks in TensorFlow](https://www.coursera.org/learn/convolutional-neural-networks-tensorflow) - TensorFlow の畳み込みニューラルネットワーク、Coursera が提供
* [TensorLayerX](https://tensorlayerx.readthedocs.io/en/latest/index.html#user-guide) - PyTorch のように TensorFlow を使う。([Api docs](https://tensorlayerx.readthedocs.io/en/latest/index.html#))

<a name="github-projects" />

## Models/Projects

* [Tensorflow-Project-Template](https://github.com/Mrgemy95/Tensorflow-Project-Template) - tensorflow プロジェクト用のシンプルでよく設計されたテンプレート。
* [Domain Transfer Network](https://github.com/yunjey/dtn-tensorflow) - 教師なしクロスドメイン画像生成の実装
* [Show, Attend and Tell](https://github.com/yunjey/show_attend_and_tell) - 注意機構ベースの画像キャプション生成器
* [Neural Style](https://github.com/cysmith/neural-style-tf) Neural Style の実装
* [SRGAN](https://github.com/tensorlayer/srgan) - 生成的敵対ネットワークを用いた写真のような単一画像の超解像
* [Pretty Tensor](https://github.com/google/prettytensor) - Pretty Tensor は高レベルのビルダー API を提供します
* [Neural Style](https://github.com/anishathalye/neural-style) - neural style の実装
* [AlexNet3D](https://github.com/denti/AlexNet3D) - AlexNet3D の実装。単純な AlexNet モデルですが、3D 畳み込み層 (conv3d) を使用しています。
* [TensorFlow White Paper Notes](https://github.com/samjabrahams/tensorflow-white-paper-notes) - TensorFlow のホワイトペーパーの注釈付きノートと要約、および SVG 図とドキュメントへのリンク
* [NeuralArt](https://github.com/ckmarkoh/neuralart_tensorflow) - A Neural Algorithm of Artistic Style の実装
* [Generative Handwriting Demo using TensorFlow](https://github.com/hardmaru/write-rnn-tensorflow) - Alex Graves の論文のランダムな手書き生成部分を実装する試み
* [Neural Turing Machine in TensorFlow](https://github.com/carpedm20/NTM-tensorflow) - Neural Turing Machine の実装
* [GoogleNet Convolutional Neural Network Groups Movie Scenes By Setting](https://github.com/agermanidis/thingscoop) - 映像に含まれる物体、場所、その他のものに基づいて動画を検索、フィルタリング、説明する
* [Neural machine translation between the writings of Shakespeare and modern English using TensorFlow](https://github.com/tokestermw/tensorflow-shakespeare) - これは単一言語翻訳を実行し、現代英語からシェイクスピアへ、およびその逆へと変換します。
* [Chatbot](https://github.com/Conchylicultor/DeepQA) - ["A neural conversational model"](http://arxiv.org/abs/1506.05869) の実装
* [Seq2seq-Chatbot](https://github.com/tensorlayer/seq2seq-chatbot) - 200 行のコードによるチャットボット
* [DCGAN](https://github.com/tensorlayer/dcgan) - 深層畳み込み生成的敵対ネットワーク
* [GAN-CLS](https://github.com/zsdonghao/text-to-image) -生成的敵対的テキストから画像への合成
* [im2im](https://github.com/zsdonghao/Unsup-Im2Im) - 生成的敵対ネットワークによる教師なし画像から画像への変換
* [Improved CycleGAN](https://github.com/luoxier/CycleGAN_Tensorlayer) - ペアなしの画像から画像への変換
* [DAGAN](https://github.com/nebulaV/DAGAN) - 高速な圧縮センシング MRI 再構成
* [Colornet - Neural Network to colorize grayscale images](https://github.com/pavelgonchar/colornet) - グレースケール画像をカラー化するニューラルネットワーク
* [Neural Caption Generator](https://github.com/jazzsaxmafia/show_attend_and_tell.tensorflow) - ["Show and Tell"](http://arxiv.org/abs/1411.4555) の実装
* [Neural Caption Generator with Attention](https://github.com/jazzsaxmafia/show_attend_and_tell.tensorflow) - ["Show, Attend and Tell"](http://arxiv.org/abs/1502.03044) の実装
* [Weakly_detector](https://github.com/jazzsaxmafia/Weakly_detector) - ["Learning Deep Features for Discriminative Localization"](http://cnnlocalization.csail.mit.edu/) の実装
* [Dynamic Capacity Networks](https://github.com/jazzsaxmafia/dcn.tf) - ["Dynamic Capacity Networks"](http://arxiv.org/abs/1511.07838) の実装
* [HMM in TensorFlow](https://github.com/dwiel/tensorflow_hmm) - HMM のためのビタビおよび前向き/後ろ向きアルゴリズムの実装
* [DeepOSM](https://github.com/trailbehind/DeepOSM) - OpenStreetMap の特徴と衛星画像を用いて TensorFlow ニューラルネットを学習させる。
* [DQN-tensorflow](https://github.com/devsisters/DQN-tensorflow) - Devsisters.com による OpenAI Gym を用いた DeepMind の 'Human-Level Control through Deep Reinforcement Learning' の TensorFlow 実装
* [Policy Gradient](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_atari_pong.py) - Atari ピンポンゲーム用
* [Deep Q-Network](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_frozenlake_dqn.py) - Frozen Lake ゲーム用
* [AC](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_cartpole_ac.py) - 離散行動空間ゲーム (Cartpole) 用の Actor Critic
* [A3C](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_bipedalwalker_a3c_continuous_action.py) - 連続行動空間 (Bipedal Walker) 用の Asynchronous Advantage Actor Critic (A3C)
* [DAGGER](https://github.com/zsdonghao/Imitation-Learning-Dagger-Torcs) - [Gym Torcs](https://github.com/ugo-nama-kun/gym_torcs) 用
* [TRPO](https://github.com/jjkke88/RL_toolbox) - による連続および離散行動空間用
* [Highway Network](https://github.com/fomorians/highway-cnn) - [blog post](https://medium.com/jim-fleming/highway-networks-with-tensorflow-1e6dfa667daa#.ndicn1i27) を用いた ["Training Very Deep Networks"](http://arxiv.org/abs/1507.06228) の TensorFlow 実装
* [Hierarchical Attention Networks](https://github.com/tqtg/hierarchical-attention-networks) - ["Hierarchical Attention Networks for Document Classification"](https://www.cs.cmu.edu/~hovy/papers/16HLT-hierarchical-attention-networks.pdf) の TensorFlow 実装
* [Sentence Classification with CNN](https://github.com/dennybritz/cnn-text-classification-tf) - [blog post](http://www.wildml.com/2015/12/implementing-a-cnn-for-text-classification-in-tensorflow/) を用いた ["Convolutional Neural Networks for Sentence Classification"](http://arxiv.org/abs/1408.5882) の TensorFlow 実装
* [End-To-End Memory Networks](https://github.com/domluna/memn2n) - [End-To-End Memory Networks](http://arxiv.org/abs/1503.08895) の実装
* [Character-Aware Neural Language Models](https://github.com/carpedm20/lstm-char-cnn-tensorflow) - [Character-Aware Neural Language Models](http://arxiv.org/abs/1508.06615) の TensorFlow 実装
* [YOLO TensorFlow ++](https://github.com/thtrieu/yolotf) - 'YOLO: Real-Time Object Detection' の TensorFlow 実装。学習機能と、モバイルデバイスでの実時間実行の実際のサポートを備えています。
* [Wavenet](https://github.com/ibab/tensorflow-wavenet) - これは音声生成のための [WaveNet generative neural network architecture](https://deepmind.com/blog/wavenet-generative-model-raw-audio/) の TensorFlow 実装です。
* [Mnemonic Descent Method](https://github.com/trigeorgis/mdm) - ["Mnemonic Descent Method: A recurrent process applied for end-to-end face alignment"](http://ibug.doc.ic.ac.uk/media/uploads/documents/trigeorgis2016mnemonic.pdf) の Tensorflow 実装
* [CNN visualization using Tensorflow](https://github.com/InFoCusp/tf_cnnvis) - ["Visualizing and Understanding Convolutional Networks"](https://www.cs.nyu.edu/~fergus/papers/zeilerECCV2014.pdf) の Tensorflow 実装
* [VGAN Tensorflow](https://github.com/Singularity42/VGAN-Tensorflow) - Vondrick らによる MIT の ["Generating Videos with Scene Dynamics"](http://carlvondrick.com/tinyvideo/) の Tensorflow 実装
* [3D Convolutional Neural Networks in TensorFlow](https://github.com/astorfi/3D-convolutional-speaker-recognition) - Torfi らによる TensorFlow での ["3D Convolutional Neural Networks for Speaker Verification application"](https://arxiv.org/abs/1705.09422) の実装
* [U-Net](https://github.com/zsdonghao/u-net-brain-tumor) - 脳腫瘍のセグメンテーション用
* [Spatial Transformer Networks](https://github.com/zsdonghao/Spatial-Transformer-Nets) - 変換関数を学習する 
* [Lip Reading - Cross Audio-Visual Recognition using 3D Architectures in TensorFlow](https://github.com/astorfi/lip-reading-deeplearning) - Torfi らによる ["Cross Audio-Visual Recognition in the Wild Using Deep Learning"](https://arxiv.org/abs/1706.05739) の TensorFlow 実装
* [Attentive Object Tracking](https://github.com/akosiorek/hart) - ["Hierarchical Attentive Recurrent Tracking"](https://arxiv.org/abs/1706.09262) の実装
* [Holographic Embeddings for Graph Completion and Link Prediction](https://github.com/laxatives/TensorFlow-TransX) - [Holographic Embeddings of Knowledge Graphs](http://arxiv.org/abs/1510.04935) の実装
* [Unsupervised Object Counting](https://github.com/akosiorek/attend_infer_repeat) - ["Attend, Infer, Repeat"](https://papers.nips.cc/paper/6230-attend-infer-repeat-fast-scene-understanding-with-generative-models) の実装
* [Tensorflow FastText](https://github.com/apcode/tensorflow_fasttext) - Facebook の fastText に触発された、単純な埋め込みベースのテキスト分類器。
* [MusicGenreClassification](https://github.com/mlachmish/MusicGenreClassification) - ニューラルネットワークを用いて 10 秒の音声ストリームから音楽のジャンルを分類する。
* [Kubeflow](https://github.com/kubeflow/kubeflow) - Kubernetes で Tensorflow を簡単に使うためのフレームワーク。
* [TensorNets](https://github.com/taehoonlee/tensornets) - 事前学習済みの重みを持つ 40 以上の人気のコンピュータビジョンモデル。
* [Ladder Network](https://github.com/divamgupta/ladder_network_keras) - Keras と Tensorflow での半教師あり学習のための Ladder Network の実装
* [TF-Unet](https://github.com/juniorxsound/TF-Unet) - 画像セグメンテーション用に Keras で実装された汎用的な U-Network
* [Sarus TF2 Models](https://github.com/sarus-tech/tf2-published-models) - 最近の生成的モデルを、きれいで再利用しやすい Tensorflow 2 のコードで実装した長いリスト (Plain Autoencoder、VAE、VQ-VAE、PixelCNN、Gated PixelCNN、PixelCNN++、PixelSNAIL、Conditional Neural Processes)。
* [Model Maker](https://www.tensorflow.org/lite/guide/model_maker) - TensorFlow Lite モデルの学習、評価、展開のプロセスを簡素化する転移学習ライブラリ (対応: 画像分類、物体検出、テキスト分類、BERT 質問応答、音声分類、推薦など; [API reference](https://www.tensorflow.org/lite/api_docs/python/tflite_model_maker))。


<a name="github-powered-by" />

## Powered by TensorFlow

* [YOLO TensorFlow](https://github.com/gliese581gg/YOLO_tensorflow) - 'YOLO : Real-Time Object Detection' の実装
* [android-yolo](https://github.com/natanielruiz/android-yolo) - YOLO ネットワークを用いた Android 上の実時間物体検出、TensorFlow を搭載。
* [Magenta](https://github.com/tensorflow/magenta) - 音楽とアート生成のための機械知能の最先端を進める研究プロジェクト


<a name="libraries" />

## Libraries

* [TensorFlow Estimators](https://www.tensorflow.org/guide/estimators) - 機械学習プログラミングを大幅に簡素化する高レベルな TensorFlow API (もともとは [tensorflow/skflow](https://github.com/tensorflow/skflow))
* [R Interface to TensorFlow](https://tensorflow.rstudio.com/) - Estimators、Keras、Datasets などを含む TensorFlow API の R インターフェース。
* [Lattice](https://github.com/tensorflow/lattice) - TensorFlow での単調キャリブレーション補間ルックアップテーブルの実装
* [tensorflow.rb](https://github.com/somaticio/tensorflow.rb) - SWIG を用いた ruby のための TensorFlow ネイティブインターフェース
* [tflearn](https://github.com/tflearn/tflearn) - より高レベルな API を備えた深層学習ライブラリ
* [TensorLayer](https://github.com/tensorlayer/tensorlayer) - 研究者とエンジニアのための深層学習および強化学習ライブラリ
* [TensorFlow-Slim](https://github.com/tensorflow/models/tree/master/inception/inception/slim) - モデルを定義するための高レベルライブラリ
* [TensorFrames](https://github.com/tjhunter/tensorframes) - Apache Spark のための TensorFlow バインディング
* [TensorForce](https://github.com/reinforceio/tensorforce) - TensorForce: 応用強化学習のための TensorFlow ライブラリ
* [TensorFlowOnSpark](https://github.com/yahoo/TensorFlowOnSpark) - Yahoo! による、Apache Spark で分散 TensorFlow を有効にするための取り組み。
* [caffe-tensorflow](https://github.com/ethereon/caffe-tensorflow) - Caffe モデルを TensorFlow 形式に変換する
* [keras](http://keras.io) - TensorFlow と Theano のための最小限でモジュール式の深層学習ライブラリ
* [SyntaxNet: Neural Models of Syntax](https://github.com/tensorflow/models/tree/master/syntaxnet) - [Globally Normalized Transition-Based Neural Networks, Andor et al. (2016)](http://arxiv.org/pdf/1603.06042.pdf) で説明されたモデルの TensorFlow 実装
* [keras-js](https://github.com/transcranial/keras-js) - ブラウザ上で (tensorflow バックエンドの) Keras モデルを実行する、GPU サポート付き
* [NNFlow](https://github.com/welschma/NNFlow) - ROOT NTuples を Numpy 配列に変換して読み込み、それを Google Tensorflow で使用できるようにする単純なフレームワーク。
* [Sonnet](https://github.com/deepmind/sonnet) - Sonnet は、複雑なニューラルネットワークを構築するための TensorFlow 上に構築された DeepMind のライブラリです。
* [tensorpack](https://github.com/ppwwyyxx/tensorpack) - 学習速度と大規模なデータセットに焦点を当てた TensorFlow 上のニューラルネットワークツールボックス。
* [tf-encrypted](https://github.com/mortendahl/tf-encrypted) - 暗号化されたデータで機械学習を行うための TensorFlow 上のレイヤー
* [pytorch2keras](https://github.com/nerox8664/pytorch2keras) - PyTorch モデルを Keras (tensorflow バックエンド) 形式に変換する
* [gluon2keras](https://github.com/stjordanis/gluon2keras) - Gluon モデルを Keras (tensorflow バックエンド) 形式に変換する
* [TensorIO](https://doc-ai.github.io/tensorio/) - TensorFlow Lite モデルをモバイルデバイスに展開するための軽量でクロスプラットフォームなライブラリ。 
* [StellarGraph](https://github.com/stellargraph/stellargraph) - グラフ上の機械学習、グラフ構造 (ネットワーク構造) データの機械学習のための Python ライブラリ。
* [DeepBay](https://github.com/ElPapi42/DeepBay) - 一般的なアーキテクチャスタックを実装するための高レベルな Keras 補完、使いやすいプラグアンドプレイモジュールとして機能する
* [Tensorflow-Probability](https://www.tensorflow.org/probability) - TensorFlow 上に構築された確率プログラミングで、確率モデルと深層学習を最新のハードウェア上で簡単に組み合わせることができます。
* [TensorLayerX](https://github.com/tensorlayer/TensorLayerX) - TensorLayerX: TensorFlow を含む、すべてのハードウェア、バックエンド、OS のための統一された深層学習フレームワーク。
* [Txeo](https://github.com/rdabra/txeo) - TensorFlow のためのモダンな C++ ラッパー。

<a name="tools-utils" />

## Tools/Utilities

* [Speedster](https://github.com/nebuly-ai/nebullvm/tree/main/apps/accelerate/speedster) - ハードウェア上で最大の推論高速化を達成するために、SOTA の最適化手法を自動的に適用する。
* [Guild AI](https://guild.ai) - TensorFlow のためのタスクランナーおよびパッケージマネージャー
* [ML Workspace](https://github.com/ml-tooling/ml-workspace) - 機械学習とデータサイエンスのためのオールインワンの Web IDE。Tensorflow、Jupyter、VS Code、Tensorboard、および他の多くのツール/ライブラリを 1 つの Docker イメージに統合しています。
* [create-tf-app](https://github.com/radi-cho/create-tf-app) - 環境管理、リンティング、ロギングをカバーする Tensorflow のためのプロジェクトビルダーコマンドラインツール。

<a name="video" />

## Videos

* [TensorFlow Guide 1](http://bit.ly/1OX8s8Y) - インストールと使用のガイド
* [TensorFlow Guide 2](http://bit.ly/1R27Ki9) - 最初の動画の続き
* [TensorFlow Basic Usage](http://bit.ly/1TCNmEY) - 基本的な使い方を説明するガイド
* [TensorFlow Deep MNIST for Experts](http://bit.ly/1L9IfJx) - Deep MNIST について説明する
* [TensorFlow Udacity Deep Learning](https://www.youtube.com/watch?v=ReaxoSIM5XQ) - 1Gb のデータを含む Cloud 9 オンラインサービスで無料で TensorFlow をインストールするための基本手順
* [Why Google wants everyone to have access to TensorFlow](http://video.foxnews.com/v/4611174773001/why-google-wants-everyone-to-have-access-to-tensorflow/?#sp=show-clips)
* [Videos from TensorFlow Silicon Valley Meet Up 1/19/2016](http://blog.altoros.com/videos-from-tensorflow-silicon-valley-meetup-january-19-2016.html)
* [Videos from TensorFlow Silicon Valley Meet Up 1/21/2016](http://blog.altoros.com/videos-from-tensorflow-seattle-meetup-jan-21-2016.html)
* [Stanford CS224d Lecture 7 - Introduction to TensorFlow, 19th Apr 2016](https://www.youtube.com/watch?v=L8Y2_Cq2X5s&index=7&list=PLmImxx8Char9Ig0ZHSyTqGsdhb9weEGam) - Richard Socher による CS224d Deep Learning for Natural Language Processing
* [Diving into Machine Learning through TensorFlow](https://youtu.be/GZBIPwdGtkk?list=PLBkISg6QfSX9HL6us70IBs9slFciFFa4W) - Pycon 2016 Portland Oregon、Julia Ferraioli、Amy Unruh、Eli Bixby による [Slide](https://storage.googleapis.com/amy-jo/talks/tf-workshop.pdf) および [Code](https://github.com/amygdala/tensorflow-workshop)
* [Large Scale Deep Learning with TensorFlow](https://youtu.be/XYwIDn00PAo) - Jeff Dean による Spark Summit 2016 基調講演
* [Tensorflow and deep learning - without at PhD](https://www.youtube.com/watch?v=vq2nnJ4g6N0) - Martin Görner による
* [Tensorflow and deep learning - without at PhD, Part 2 (Google Cloud Next '17)](https://www.youtube.com/watch?v=fTUwdXUFfI8) - Martin Görner による
* [Image recognition in Go using TensorFlow](https://youtu.be/P8MZ1Z2LHrw) - Alex Pliutau による



<a name="papers" />

## Papers

* [TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems](http://download.tensorflow.org/paper/whitepaper2015.pdf) - この論文は、Google で構築した TensorFlow インターフェースとその実装について説明しています
* [TensorFlow Estimators: Managing Simplicity vs. Flexibility in High-Level Machine Learning Frameworks](https://arxiv.org/pdf/1708.02637.pdf)
* [TF.Learn: TensorFlow's High-level Module for Distributed Machine Learning](https://arxiv.org/abs/1612.04251)
* [Comparative Study of Deep Learning Software Frameworks](http://arxiv.org/abs/1511.06435) - この研究はいくつかの種類の深層学習アーキテクチャで実施され、単一マシン上で (マルチスレッドの) CPU および GPU (Nvidia Titan X) 設定の両方を用いた場合の上記フレームワークの性能を評価しています
* [Distributed TensorFlow with MPI](http://arxiv.org/abs/1603.02339) - 本論文では、最近提案された Google TensorFlow を、Message Passing Interface (MPI) を用いて大規模クラスタ上で実行するように拡張します
* [Globally Normalized Transition-Based Neural Networks](http://arxiv.org/abs/1603.06042) - この論文は [SyntaxNet](https://github.com/tensorflow/models/tree/master/syntaxnet) の背後にあるモデルを説明しています。
* [TensorFlow: A system for large-scale machine learning](https://arxiv.org/abs/1605.08695) - この論文は、既存のシステムと対照的に TensorFlow のデータフローモデルを説明し、説得力のある性能を示します
* [TensorLayer: A Versatile Library for Efficient Deep Learning Development](https://arxiv.org/abs/1707.08551) - この論文は、研究者とエンジニアが深層学習システムを効率的に開発することを支援することを目指す汎用性の高い Python ライブラリを説明しています。(ACM MM 2017 の最優秀オープンソースソフトウェア賞受賞)

<a name="blogs" />

## Official announcements

* [TensorFlow: smarter machine learning, for everyone](https://googleblog.blogspot.com/2015/11/tensorflow-smarter-machine-learning-for.html) - TensorFlow の紹介
* [Announcing SyntaxNet: The World’s Most Accurate Parser Goes Open Source](http://googleresearch.blogspot.com/2016/05/announcing-syntaxnet-worlds-most.html) - SyntaxNet のリリース、「TensorFlow で実装されたオープンソースのニューラルネットワークフレームワークで、自然言語理解システムの基盤を提供するもの。」

## Blog posts
* [Official Tensorflow Blog](http://blog.tensorflow.org/)
* [Why TensorFlow will change the Game for AI](https://archive.fo/o9asj)
* [TensorFlow for Poets](http://petewarden.com/2016/02/28/tensorflow-for-poets) - TensorFlow の実装について説明する
* [Introduction to Scikit Flow - Simplified Interface to TensorFlow](http://terrytangyuan.github.io/2016/03/14/scikit-flow-intro/) - 主な特徴を図解する
* [Building Machine Learning Estimator in TensorFlow](http://terrytangyuan.github.io/2016/07/08/understand-and-build-tensorflow-estimator/) - TensorFlow Learn Estimators の内部構造の理解
* [TensorFlow - Not Just For Deep Learning](http://terrytangyuan.github.io/2016/08/06/tensorflow-not-just-deep-learning/)
* [The indico Machine Learning Team's take on TensorFlow](https://indico.io/blog/indico-tensorflow)
* [The Good, Bad, & Ugly of TensorFlow](https://indico.io/blog/the-good-bad-ugly-of-tensorflow/) - 6 ヶ月間の急速な進化の調査 (修正のヒント/ハックと、醜い部分を修正するコードを含む)、Indico の Dan Kuster、2016年5月9日
* [Fizz Buzz in TensorFlow](http://joelgrus.com/2016/05/23/fizz-buzz-in-tensorflow/) - Joel Grus によるジョーク
* [RNNs In TensorFlow, A Practical Guide And Undocumented Features](http://www.wildml.com/2016/08/rnns-in-tensorflow-a-practical-guide-and-undocumented-features/) - GitHub 上の完全なコード例付きのステップバイステップのガイド。
* [Using TensorBoard to Visualize Image Classification Retraining in TensorFlow](http://maxmelnick.com/2016/07/04/visualizing-tensorflow-retrain.html)
* [TFRecords Guide](http://warmspringwinds.github.io/tensorflow/tf-slim/2016/12/21/tfrecords-guide/) セマンティックセグメンテーションと TFRecord ファイル形式の扱い。
* [TensorFlow Android Guide](https://blog.mindorks.com/android-tensorflow-machine-learning-example-ff0e9b2654cc) - Android TensorFlow 機械学習の例。
* [TensorFlow Optimizations on Modern Intel® Architecture](https://software.intel.com/en-us/articles/tensorflow-optimizations-on-modern-intel-architecture) - Intel/Google の協力に基づく、Intel® Xeon® および Intel® Xeon Phi™ プロセッサベースのプラットフォーム上の TensorFlow 最適化を紹介します。
* [Coca-Cola's Image Recognition App](https://developers.googleblog.com/2017/09/how-machine-learning-with-tensorflow.html) ユーザー入力のフィードバックループを持つ Coca-Cola の製品コード画像認識ニューラルネットワーク。
* [How Does The TensorFlow Work](https://www.letslearnai.com/2018/02/02/how-does-the-machine-learning-library-tensorflow-work.html) 機械学習ライブラリ TensorFlow はどのように機能するのか?


<a name="community" />

## Community

* [Stack Overflow](http://stackoverflow.com/questions/tagged/tensorflow)
* [@TensorFlow on Twitter](https://twitter.com/tensorflow)
* [Reddit](https://www.reddit.com/r/tensorflow)
* [Mailing List](https://groups.google.com/a/tensorflow.org/forum/#!forum/discuss)


<a name="books" />

## Books

* [Machine Learning with TensorFlow 2nd edition]([http://tensorflowbook.com](https://github.com/chrismattmann/MLwithTensorFlow2ed)) by [Dr. Chris A. Mattmann](http://github.com/chrismattmann/)、UCLA の Chief Data and Artificial Intelligence Officer であり、[Tika in Action](https://www.manning.com/books/tika-in-action) の著者でもある。この本は、数学が主体の AI と ML というトピックを、初心者にも親しみやすく実践的にします。Tensorflow2 およびこの本の最新版に更新されています。
* [First Contact with TensorFlow](http://www.jorditorres.org/first-contact-with-tensorflow/) by Jordi Torres、UPC Barcelona Tech の教授および Barcelona Supercomputing Center のリサーチマネージャー兼シニアアドバイザー
* [Deep Learning with Python](https://machinelearningmastery.com/deep-learning-with-python/) - Jason Brownlee による、Keras を用いた Theano と TensorFlow での深層学習モデルの開発
* [TensorFlow for Machine Intelligence](https://bleedingedgepress.com/tensor-flow-for-machine-intelligence/) - グラフ計算の基本から、深層学習モデル、本番環境での利用まで、TensorFlow を使用するための完全なガイド - Bleeding Edge Press
* [Getting Started with TensorFlow](https://www.packtpub.com/big-data-and-business-intelligence/getting-started-tensorflow) - Google の最新の数値計算ライブラリを使い始め、データをさらに深く掘り下げる、Giancarlo Zaccone による
* [Hands-On Machine Learning with Scikit-Learn and TensorFlow](http://shop.oreilly.com/product/0636920052289.do) – Aurélien Geron による、YouTube 動画分類チームの元リーダー。ML の基礎、TensorFlow を用いた複数のサーバーおよび GPU にわたる深層ネットの学習と展開、最新の CNN、RNN、Autoencoder アーキテクチャ、および強化学習 (Deep Q) をカバーしています。
* [Building Machine Learning Projects with Tensorflow](https://www.packtpub.com/big-data-and-business-intelligence/building-machine-learning-projects-tensorflow) – Rodolfo Bonnin による。この本は、さまざまなシナリオで TensorFlow で何ができるかを示す、TensorFlow でのさまざまなプロジェクトを扱っています。この本は、モデルの学習、機械学習、深層学習、およびさまざまなニューラルネットワークの操作に関するプロジェクトを提供しています。各プロジェクトは、TensorFlow の使い方を教え、Tensor を操作することでデータの層をどのように探索できるかを示す、魅力的で洞察に富んだ演習です。
* [Deep Learning using TensorLayer](http://www.broadview.com.cn/book/5059) - Hao Dong らによる。この本は深層学習と、TensorFlow および TensorLayer を用いた実装の両方をカバーしています。
* [TensorFlow 2.0 in Action](https://www.manning.com/books/tensorflow-in-action) - Thushan Ganegedara による。TensorFlow 2.0 の新機能を用いて深層学習モデルを構築するための実践的なガイドで、魅力的なプロジェクト、分かりやすい言葉、最新のアルゴリズムの解説で満ちています。
* [Probabilistic Programming and Bayesian Methods for Hackers](https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers) - Cameron Davidson-Pilon による。tensorflow-probability (および、代替として PyMC2/3) を用いたベイズ手法と確率グラフィカルモデルの入門。 



<a name="contributions" />

## Contributions

あなたの貢献をいつでも歓迎します！

このリストに貢献したい場合 (どうかお願いします)、プルリクエストを送るか、[@jtoy](https://twitter.com/jtoy) までご連絡ください
また、上記のリポジトリのいずれかが、以下の理由のいずれかにより非推奨とすべきであることに気付いた場合は:

* リポジトリの所有者が明示的に "this library is not maintained" と述べている。
* 長期間コミットされていない (2~3 年)。

ガイドラインの詳細は[こちら](https://github.com/jtoy/awesome-tensorflow/blob/master/contributing.md)


<a name="credits" />

## Credits

* いくつかの Python ライブラリは [vinta](https://github.com/vinta/awesome-python) からコピー＆ペーストされました
* 私が見つけたわずかな Go のリファレンスは [this page](https://code.google.com/p/go-wiki/wiki/Projects#Machine_Learning) から引用されました
