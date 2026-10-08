# Awesome TensorFlow  [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/jtoy/awesome)

一份精选的 TensorFlow 实验、库和项目的清单。灵感来自 awesome-machine-learning。

## What is TensorFlow?

TensorFlow 是一个使用数据流图进行数值计算的开源软件库。换句话说，它是构建深度学习模型的最佳方式。

更多信息见[此处](http://tensorflow.org)。



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

* [TensorFlow Tutorial 1](https://github.com/pkmital/tensorflow_tutorials) - 从基础到稍微更有趣的 TensorFlow 应用
* [TensorFlow Tutorial 2](https://github.com/nlintz/TensorFlow-Tutorials) - 基于 Google 的 TensorFlow 框架的深度学习入门。这些教程是 Newmu 的 Theano 教程的直接移植
* [TensorFlow Tutorial 3](https://github.com/Hvass-Labs/TensorFlow-Tutorials) - 这些教程面向深度学习和 TensorFlow 的初学者，配有详尽注释的代码和 YouTube 视频。
* [TensorFlow Examples](https://github.com/aymericdamien/TensorFlow-Examples) - 面向初学者的 TensorFlow 教程和代码示例
* [Sungjoon's TensorFlow-101](https://github.com/sjchoi86/Tensorflow-101) - 使用 Jupyter Notebook 以 Python 编写的 TensorFlow 教程
* [Terry Um’s TensorFlow Exercises](https://github.com/terryum/TensorFlow_Exercises) - 重新创建其他 TensorFlow 示例中的代码
* [Installing TensorFlow on Raspberry Pi 3](https://github.com/samjabrahams/tensorflow-on-raspberry-pi) - 在 Raspberry Pi 上编译并正常运行 TensorFlow
* [Classification on time series](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition) - 在 TensorFlow 中使用 LSTM 对手机传感器数据进行循环神经网络分类
* [Getting Started with TensorFlow on Android](https://omid.al/posts/2017-02-20-Tutorial-Build-Your-First-Tensorflow-Android-App.html) - 构建你的第一个 TensorFlow Android 应用
* [Predict time series](https://github.com/guillaume-chevalier/seq2seq-signal-prediction) - 在简单数据集上学习使用 seq2seq 模型，作为了解该架构所提供的众多可能性的入门
* [Single Image Random Dot Stereograms](https://github.com/Mazecreator/TensorFlow-SIRDS) - SIRDS 是一种在 2D 图像中呈现 3D 数据的方法。它可以在瀑布式图表中显示科学数据，且没有因透视而产生的隐藏线条。
* [CS20 SI: TensorFlow for DeepLearning Research](http://web.stanford.edu/class/cs20si/syllabus.html) - 斯坦福大学 2017 年关于 Tensorflow 的课程 - [Syllabus](http://web.stanford.edu/class/cs20si/syllabus.html) - [Unofficial Videos](https://youtu.be/g-EvyKpZjmQ?list=PLSPPwKHXGS2110rEaNH7amFGmaD5hsObs)
* [TensorFlow World](https://github.com/astorfi/TensorFlow-World) - 提供简洁、即取即用的 TensorFlow 教程以及详尽的文档。
* [Effective Tensorflow](https://github.com/vahidk/EffectiveTensorflow) - TensorFlow 操作指南与最佳实践。涵盖基础以及高级主题。
* [TensorLayer](http://tensorlayer.readthedocs.io/en/latest/user/tutorial.html) - TensorFlow 官方教程的模块化实现。([CN](https://tensorlayercn.readthedocs.io/zh/latest/user/tutorial.html))。
* [Understanding The Tensorflow Estimator API](https://www.lighttag.io/blog/tensorflow-estimator-api/) 对 Estimator API 的概念性概述，包括何时使用以及为什么使用。
* [Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning](https://www.coursera.org/learn/introduction-tensorflow) - Coursera 提供的 Tensorflow 入门
* [Convolutional Neural Networks in TensorFlow](https://www.coursera.org/learn/convolutional-neural-networks-tensorflow) - Tensorflow 中的卷积神经网络，由 Coursera 提供
* [TensorLayerX](https://tensorlayerx.readthedocs.io/en/latest/index.html#user-guide) - 像使用 PyTorch 一样使用 TensorFlow。([Api docs](https://tensorlayerx.readthedocs.io/en/latest/index.html#))

<a name="github-projects" />

## Models/Projects

* [Tensorflow-Project-Template](https://github.com/Mrgemy95/Tensorflow-Project-Template) - 一个简单且设计良好的 tensorflow 项目模板。
* [Domain Transfer Network](https://github.com/yunjey/dtn-tensorflow) - 无监督跨域图像生成的实现
* [Show, Attend and Tell](https://github.com/yunjey/show_attend_and_tell) - 基于注意力的图像描述生成器
* [Neural Style](https://github.com/cysmith/neural-style-tf) Neural Style 的实现
* [SRGAN](https://github.com/tensorlayer/srgan) - 使用生成对抗网络实现照片级真实感的单图像超分辨率
* [Pretty Tensor](https://github.com/google/prettytensor) - Pretty Tensor 提供了一个高层构建器 API
* [Neural Style](https://github.com/anishathalye/neural-style) - 神经风格的一个实现
* [AlexNet3D](https://github.com/denti/AlexNet3D) - AlexNet3D 的一个实现。简单的 AlexNet 模型，但使用了 3D 卷积层 (conv3d)。
* [TensorFlow White Paper Notes](https://github.com/samjabrahams/tensorflow-white-paper-notes) - TensorFlow 白皮书的注释笔记与摘要，以及 SVG 图示和文档链接
* [NeuralArt](https://github.com/ckmarkoh/neuralart_tensorflow) - A Neural Algorithm of Artistic Style 的实现
* [Generative Handwriting Demo using TensorFlow](https://github.com/hardmaru/write-rnn-tensorflow) - 尝试实现 Alex Graves 论文中随机手写生成的部分
* [Neural Turing Machine in TensorFlow](https://github.com/carpedm20/NTM-tensorflow) - 神经图灵机的实现
* [GoogleNet Convolutional Neural Network Groups Movie Scenes By Setting](https://github.com/agermanidis/thingscoop) - 根据视频中出现的物体、场景以及其他事物来搜索、过滤和描述视频
* [Neural machine translation between the writings of Shakespeare and modern English using TensorFlow](https://github.com/tokestermw/tensorflow-shakespeare) - 执行单语翻译，在现代英语与莎士比亚风格之间相互转换。
* [Chatbot](https://github.com/Conchylicultor/DeepQA) - ["A neural conversational model"](http://arxiv.org/abs/1506.05869) 的实现
* [Seq2seq-Chatbot](https://github.com/tensorlayer/seq2seq-chatbot) - 200 行代码实现的聊天机器人
* [DCGAN](https://github.com/tensorlayer/dcgan) - 深度卷积生成对抗网络
* [GAN-CLS](https://github.com/zsdonghao/text-to-image) -生成对抗文本到图像合成
* [im2im](https://github.com/zsdonghao/Unsup-Im2Im) - 使用生成对抗网络的无监督图像到图像翻译
* [Improved CycleGAN](https://github.com/luoxier/CycleGAN_Tensorlayer) - 非配对的图像到图像翻译
* [DAGAN](https://github.com/nebulaV/DAGAN) - 快速压缩感知 MRI 重建
* [Colornet - Neural Network to colorize grayscale images](https://github.com/pavelgonchar/colornet) - 为灰度图像上色的神经网络
* [Neural Caption Generator](https://github.com/jazzsaxmafia/show_attend_and_tell.tensorflow) - ["Show and Tell"](http://arxiv.org/abs/1411.4555) 的实现
* [Neural Caption Generator with Attention](https://github.com/jazzsaxmafia/show_attend_and_tell.tensorflow) - ["Show, Attend and Tell"](http://arxiv.org/abs/1502.03044) 的实现
* [Weakly_detector](https://github.com/jazzsaxmafia/Weakly_detector) - ["Learning Deep Features for Discriminative Localization"](http://cnnlocalization.csail.mit.edu/) 的实现
* [Dynamic Capacity Networks](https://github.com/jazzsaxmafia/dcn.tf) - ["Dynamic Capacity Networks"](http://arxiv.org/abs/1511.07838) 的实现
* [HMM in TensorFlow](https://github.com/dwiel/tensorflow_hmm) - 隐马尔可夫模型的 viterbi 与前向/后向算法的实现
* [DeepOSM](https://github.com/trailbehind/DeepOSM) - 使用 OpenStreetMap 要素和卫星图像训练 TensorFlow 神经网络。
* [DQN-tensorflow](https://github.com/devsisters/DQN-tensorflow) - Devsisters.com 使用 OpenAI Gym 实现的 DeepMind 的 'Human-Level Control through Deep Reinforcement Learning' 的 TensorFlow 版本
* [Policy Gradient](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_atari_pong.py) - 用于玩 Atari 乒乓游戏
* [Deep Q-Network](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_frozenlake_dqn.py) - 用于玩 Frozen Lake 游戏
* [AC](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_cartpole_ac.py) - 用于玩离散动作空间游戏 (Cartpole) 的 Actor Critic
* [A3C](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_bipedalwalker_a3c_continuous_action.py) - 用于连续动作空间 (Bipedal Walker) 的异步优势 Actor Critic (A3C)
* [DAGGER](https://github.com/zsdonghao/Imitation-Learning-Dagger-Torcs) - 用于玩 [Gym Torcs](https://github.com/ugo-nama-kun/gym_torcs)
* [TRPO](https://github.com/jjkke88/RL_toolbox) - 用于连续与离散动作空间，作者
* [Highway Network](https://github.com/fomorians/highway-cnn) - ["Training Very Deep Networks"](http://arxiv.org/abs/1507.06228) 的 TensorFlow 实现，附有一篇 [blog post](https://medium.com/jim-fleming/highway-networks-with-tensorflow-1e6dfa667daa#.ndicn1i27)
* [Hierarchical Attention Networks](https://github.com/tqtg/hierarchical-attention-networks) - ["Hierarchical Attention Networks for Document Classification"](https://www.cs.cmu.edu/~hovy/papers/16HLT-hierarchical-attention-networks.pdf) 的 TensorFlow 实现
* [Sentence Classification with CNN](https://github.com/dennybritz/cnn-text-classification-tf) - ["Convolutional Neural Networks for Sentence Classification"](http://arxiv.org/abs/1408.5882) 的 TensorFlow 实现，附有一篇 [blog post](http://www.wildml.com/2015/12/implementing-a-cnn-for-text-classification-in-tensorflow/)
* [End-To-End Memory Networks](https://github.com/domluna/memn2n) - [End-To-End Memory Networks](http://arxiv.org/abs/1503.08895) 的实现
* [Character-Aware Neural Language Models](https://github.com/carpedm20/lstm-char-cnn-tensorflow) - [Character-Aware Neural Language Models](http://arxiv.org/abs/1508.06615) 的 TensorFlow 实现
* [YOLO TensorFlow ++](https://github.com/thtrieu/yolotf) - 'YOLO: Real-Time Object Detection' 的 TensorFlow 实现，支持训练以及对移动设备实时运行的实际支持。
* [Wavenet](https://github.com/ibab/tensorflow-wavenet) - 这是 [WaveNet generative neural network architecture](https://deepmind.com/blog/wavenet-generative-model-raw-audio/) 用于音频生成的 TensorFlow 实现。
* [Mnemonic Descent Method](https://github.com/trigeorgis/mdm) - ["Mnemonic Descent Method: A recurrent process applied for end-to-end face alignment"](http://ibug.doc.ic.ac.uk/media/uploads/documents/trigeorgis2016mnemonic.pdf) 的 Tensorflow 实现
* [CNN visualization using Tensorflow](https://github.com/InFoCusp/tf_cnnvis) - ["Visualizing and Understanding Convolutional Networks"](https://www.cs.nyu.edu/~fergus/papers/zeilerECCV2014.pdf) 的 Tensorflow 实现
* [VGAN Tensorflow](https://github.com/Singularity42/VGAN-Tensorflow) - 由 Vondrick 等人完成的 MIT ["Generating Videos with Scene Dynamics"](http://carlvondrick.com/tinyvideo/) 的 Tensorflow 实现
* [3D Convolutional Neural Networks in TensorFlow](https://github.com/astorfi/3D-convolutional-speaker-recognition) - 由 Torfi 等人完成的 ["3D Convolutional Neural Networks for Speaker Verification application"](https://arxiv.org/abs/1705.09422) 在 TensorFlow 中的实现
* [U-Net](https://github.com/zsdonghao/u-net-brain-tumor) - 用于脑肿瘤分割
* [Spatial Transformer Networks](https://github.com/zsdonghao/Spatial-Transformer-Nets) - 学习变换函数
* [Lip Reading - Cross Audio-Visual Recognition using 3D Architectures in TensorFlow](https://github.com/astorfi/lip-reading-deeplearning) - 由 Torfi 等人完成的 ["Cross Audio-Visual Recognition in the Wild Using Deep Learning"](https://arxiv.org/abs/1706.05739) 的 TensorFlow 实现
* [Attentive Object Tracking](https://github.com/akosiorek/hart) - ["Hierarchical Attentive Recurrent Tracking"](https://arxiv.org/abs/1706.09262) 的实现
* [Holographic Embeddings for Graph Completion and Link Prediction](https://github.com/laxatives/TensorFlow-TransX) - [Holographic Embeddings of Knowledge Graphs](http://arxiv.org/abs/1510.04935) 的实现
* [Unsupervised Object Counting](https://github.com/akosiorek/attend_infer_repeat) - ["Attend, Infer, Repeat"](https://papers.nips.cc/paper/6230-attend-infer-repeat-fast-scene-understanding-with-generative-models) 的实现
* [Tensorflow FastText](https://github.com/apcode/tensorflow_fasttext) - 受 Facebook 的 fastText 启发的一个简单的基于嵌入的文本分类器。
* [MusicGenreClassification](https://github.com/mlachmish/MusicGenreClassification) - 使用神经网络从 10 秒的声音流中对音乐流派进行分类。
* [Kubeflow](https://github.com/kubeflow/kubeflow) - 在 Kubernetes 中轻松使用 Tensorflow 的框架。
* [TensorNets](https://github.com/taehoonlee/tensornets) - 40+ 个带预训练权重的流行计算机视觉模型。
* [Ladder Network](https://github.com/divamgupta/ladder_network_keras) - 在 Keras 和 Tensorflow 中用于半监督学习的 Ladder Network 实现
* [TF-Unet](https://github.com/juniorxsound/TF-Unet) - 在 Keras 中实现的用于图像分割的通用 U-Network
* [Sarus TF2 Models](https://github.com/sarus-tech/tf2-published-models) - 一长串近期生成模型的实现，使用简洁、易于复用的 Tensorflow 2 代码（普通自编码器、VAE、VQ-VAE、PixelCNN、Gated PixelCNN、PixelCNN++、PixelSNAIL、Conditional Neural Processes）。
* [Model Maker](https://www.tensorflow.org/lite/guide/model_maker) - 一个迁移学习库，简化了 TensorFlow Lite 模型的训练、评估与部署流程（支持：图像分类、目标检测、文本分类、BERT 问答、音频分类、推荐等；[API reference](https://www.tensorflow.org/lite/api_docs/python/tflite_model_maker)）。


<a name="github-powered-by" />

## Powered by TensorFlow

* [YOLO TensorFlow](https://github.com/gliese581gg/YOLO_tensorflow) - 'YOLO : Real-Time Object Detection' 的实现
* [android-yolo](https://github.com/natanielruiz/android-yolo) - 在 Android 上使用 YOLO 网络进行的实时目标检测，由 TensorFlow 驱动。
* [Magenta](https://github.com/tensorflow/magenta) - 旨在推进音乐与艺术生成领域机器智能前沿的研究项目


<a name="libraries" />

## Libraries

* [TensorFlow Estimators](https://www.tensorflow.org/guide/estimators) - 简化机器学习编程的高层 TensorFlow API（最初为 [tensorflow/skflow](https://github.com/tensorflow/skflow)）
* [R Interface to TensorFlow](https://tensorflow.rstudio.com/) - 面向 TensorFlow API 的 R 语言接口，包括 Estimators、Keras、Datasets 等。
* [Lattice](https://github.com/tensorflow/lattice) - TensorFlow 中单调校准插值查找表 (Monotonic Calibrated Interpolated Look-Up Tables) 的实现
* [tensorflow.rb](https://github.com/somaticio/tensorflow.rb) - 使用 SWIG 的 ruby 版 TensorFlow 原生接口
* [tflearn](https://github.com/tflearn/tflearn) - 具有更高层 API 的深度学习库
* [TensorLayer](https://github.com/tensorlayer/tensorlayer) - 面向研究人员和工程师的深度学习与强化学习库
* [TensorFlow-Slim](https://github.com/tensorflow/models/tree/master/inception/inception/slim) - 用于定义模型的高层库
* [TensorFrames](https://github.com/tjhunter/tensorframes) - 面向 Apache Spark 的 TensorFlow 绑定
* [TensorForce](https://github.com/reinforceio/tensorforce) - TensorForce：一个用于应用强化学习的 TensorFlow 库
* [TensorFlowOnSpark](https://github.com/yahoo/TensorFlowOnSpark) - 雅虎发起的借助 Apache Spark 实现分布式 TensorFlow 的计划。
* [caffe-tensorflow](https://github.com/ethereon/caffe-tensorflow) - 将 Caffe 模型转换为 TensorFlow 格式
* [keras](http://keras.io) - 面向 TensorFlow 和 Theano 的最小化、模块化深度学习库
* [SyntaxNet: Neural Models of Syntax](https://github.com/tensorflow/models/tree/master/syntaxnet) - [Globally Normalized Transition-Based Neural Networks, Andor et al. (2016)](http://arxiv.org/pdf/1603.06042.pdf) 中描述模型的 TensorFlow 实现
* [keras-js](https://github.com/transcranial/keras-js) - 在浏览器中运行 Keras 模型（tensorflow 后端），支持 GPU
* [NNFlow](https://github.com/welschma/NNFlow) - 一个简单的框架，通过将 ROOT NTuples 转换为 Numpy 数组，然后在 Google Tensorflow 中使用它们来读取数据。
* [Sonnet](https://github.com/deepmind/sonnet) - Sonnet 是 DeepMind 基于 TensorFlow 构建的、用于构建复杂神经网络的库。
* [tensorpack](https://github.com/ppwwyyxx/tensorpack) - 基于 TensorFlow 的神经网络工具箱，专注于训练速度和大尺度数据集。
* [tf-encrypted](https://github.com/mortendahl/tf-encrypted) - 构建在 TensorFlow 之上、用于在加密数据上进行机器学习的层
* [pytorch2keras](https://github.com/nerox8664/pytorch2keras) - 将 PyTorch 模型转换为 Keras（TensorFlow 后端）格式
* [gluon2keras](https://github.com/stjordanis/gluon2keras) - 将 Gluon 模型转换为 Keras（TensorFlow 后端）格式
* [TensorIO](https://doc-ai.github.io/tensorio/) - 用于在移动设备上部署 TensorFlow Lite 模型的轻量级跨平台库。
* [StellarGraph](https://github.com/stellargraph/stellargraph) - 图上的机器学习，一个用于对图结构（网络结构）数据进行机器学习的 Python 库。
* [DeepBay](https://github.com/ElPapi42/DeepBay) - 用于实现常见架构栈的高层 Keras 补充库，作为即插即用的易用模块
* [Tensorflow-Probability](https://www.tensorflow.org/probability) - 构建在 TensorFlow 之上的概率编程，使得在现代硬件上轻松结合概率模型与深度学习。
* [TensorLayerX](https://github.com/tensorlayer/TensorLayerX) - TensorLayerX：一个统一的深度学习框架，支持所有硬件、后端和操作系统，包括 TensorFlow。
* [Txeo](https://github.com/rdabra/txeo) - 一个现代的 C++ TensorFlow 封装器。

<a name="tools-utils" />

## Tools/Utilities

* [Speedster](https://github.com/nebuly-ai/nebullvm/tree/main/apps/accelerate/speedster) - 自动应用 SOTA 优化技术，在你的硬件上实现最大推理加速。
* [Guild AI](https://guild.ai) - 面向 TensorFlow 的任务运行器和包管理器
* [ML Workspace](https://github.com/ml-tooling/ml-workspace) - 机器学习和数据科学的全合一 Web IDE。将 Tensorflow、Jupyter、VS Code、Tensorboard 以及许多其他工具/库整合进一个 Docker 镜像中。
* [create-tf-app](https://github.com/radi-cho/create-tf-app) - 覆盖环境管理、代码检查和日志记录的 Tensorflow 项目构建命令行工具。

<a name="video" />

## Videos

* [TensorFlow Guide 1](http://bit.ly/1OX8s8Y) - 安装与使用的指南
* [TensorFlow Guide 2](http://bit.ly/1R27Ki9) - 第一个视频的续集
* [TensorFlow Basic Usage](http://bit.ly/1TCNmEY) - 关于基本用法的指南
* [TensorFlow Deep MNIST for Experts](http://bit.ly/1L9IfJx) - 深入讲解 Deep MNIST
* [TensorFlow Udacity Deep Learning](https://www.youtube.com/watch?v=ReaxoSIM5XQ) - 在 Cloud 9 在线服务上免费安装 TensorFlow 的基本步骤，含 1Gb 数据
* [Why Google wants everyone to have access to TensorFlow](http://video.foxnews.com/v/4611174773001/why-google-wants-everyone-to-have-access-to-tensorflow/?#sp=show-clips)
* [Videos from TensorFlow Silicon Valley Meet Up 1/19/2016](http://blog.altoros.com/videos-from-tensorflow-silicon-valley-meetup-january-19-2016.html)
* [Videos from TensorFlow Silicon Valley Meet Up 1/21/2016](http://blog.altoros.com/videos-from-tensorflow-seattle-meetup-jan-21-2016.html)
* [Stanford CS224d Lecture 7 - Introduction to TensorFlow, 19th Apr 2016](https://www.youtube.com/watch?v=L8Y2_Cq2X5s&index=7&list=PLmImxx8Char9Ig0ZHSyTqGsdhb9weEGam) - Richard Socher 的 CS224d 自然语言处理深度学习
* [Diving into Machine Learning through TensorFlow](https://youtu.be/GZBIPwdGtkk?list=PLBkISg6QfSX9HL6us70IBs9slFciFFa4W) - Pycon 2016 波特兰俄勒冈，由 Julia Ferraioli、Amy Unruh、Eli Bixby 带来的 [Slide](https://storage.googleapis.com/amy-jo/talks/tf-workshop.pdf) 与 [Code](https://github.com/amygdala/tensorflow-workshop)
* [Large Scale Deep Learning with TensorFlow](https://youtu.be/XYwIDn00PAo) - Jeff Dean 的 Spark Summit 2016 主题演讲
* [Tensorflow and deep learning - without at PhD](https://www.youtube.com/watch?v=vq2nnJ4g6N0) - 作者 Martin Görner
* [Tensorflow and deep learning - without at PhD, Part 2 (Google Cloud Next '17)](https://www.youtube.com/watch?v=fTUwdXUFfI8) - 作者 Martin Görner
* [Image recognition in Go using TensorFlow](https://youtu.be/P8MZ1Z2LHrw) - 作者 Alex Pliutau



<a name="papers" />

## Papers

* [TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems](http://download.tensorflow.org/paper/whitepaper2015.pdf) - 本文描述了 TensorFlow 接口以及我们在 Google 构建的该接口的实现
* [TensorFlow Estimators: Managing Simplicity vs. Flexibility in High-Level Machine Learning Frameworks](https://arxiv.org/pdf/1708.02637.pdf)
* [TF.Learn: TensorFlow's High-level Module for Distributed Machine Learning](https://arxiv.org/abs/1612.04251)
* [Comparative Study of Deep Learning Software Frameworks](http://arxiv.org/abs/1511.06435) - 该研究在多种深度学习架构上进行，并评估上述框架在单机上的（多线程）CPU 和 GPU（Nvidia Titan X）设置下的性能表现
* [Distributed TensorFlow with MPI](http://arxiv.org/abs/1603.02339) - 在本文中，我们扩展了 Google 最近提出的 TensorFlow，以使用消息传递接口 (MPI) 在大规模集群上执行
* [Globally Normalized Transition-Based Neural Networks](http://arxiv.org/abs/1603.06042) - 本文描述了 [SyntaxNet](https://github.com/tensorflow/models/tree/master/syntaxnet) 背后的模型。
* [TensorFlow: A system for large-scale machine learning](https://arxiv.org/abs/1605.08695) - 本文描述了 TensorFlow 数据流模型与现有系统的对比，并展示了其卓越的性能
* [TensorLayer: A Versatile Library for Efficient Deep Learning Development](https://arxiv.org/abs/1707.08551) - 本文描述了一个通用的 Python 库，旨在帮助研究人员和工程师高效地开发深度学习系统。（ACM MM 2017 最佳开源软件奖得主）

<a name="blogs" />

## Official announcements

* [TensorFlow: smarter machine learning, for everyone](https://googleblog.blogspot.com/2015/11/tensorflow-smarter-machine-learning-for.html) - TensorFlow 的简介
* [Announcing SyntaxNet: The World’s Most Accurate Parser Goes Open Source](http://googleresearch.blogspot.com/2016/05/announcing-syntaxnet-worlds-most.html) - SyntaxNet 的发布，"一个用 TensorFlow 实现的开源神经网络框架，为自然语言理解系统提供基础。

## Blog posts
* [Official Tensorflow Blog](http://blog.tensorflow.org/)
* [Why TensorFlow will change the Game for AI](https://archive.fo/o9asj)
* [TensorFlow for Poets](http://petewarden.com/2016/02/28/tensorflow-for-poets) - 深入讲解 TensorFlow 的实现
* [Introduction to Scikit Flow - Simplified Interface to TensorFlow](http://terrytangyuan.github.io/2016/03/14/scikit-flow-intro/) - 主要特性说明
* [Building Machine Learning Estimator in TensorFlow](http://terrytangyuan.github.io/2016/07/08/understand-and-build-tensorflow-estimator/) - 理解 TensorFlow Learn Estimators 的内部机制
* [TensorFlow - Not Just For Deep Learning](http://terrytangyuan.github.io/2016/08/06/tensorflow-not-just-deep-learning/)
* [The indico Machine Learning Team's take on TensorFlow](https://indico.io/blog/indico-tensorflow)
* [The Good, Bad, & Ugly of TensorFlow](https://indico.io/blog/the-good-bad-ugly-of-tensorflow/) - 对六个月快速演进的调查（附修复问题的技巧/黑科技和代码），Dan Kuster 于 Indico，2016 年 5 月 9 日
* [Fizz Buzz in TensorFlow](http://joelgrus.com/2016/05/23/fizz-buzz-in-tensorflow/) - Joel Grus 的一个玩笑
* [RNNs In TensorFlow, A Practical Guide And Undocumented Features](http://www.wildml.com/2016/08/rnns-in-tensorflow-a-practical-guide-and-undocumented-features/) - 配有 GitHub 完整代码示例的分步指南。
* [Using TensorBoard to Visualize Image Classification Retraining in TensorFlow](http://maxmelnick.com/2016/07/04/visualizing-tensorflow-retrain.html)
* [TFRecords Guide](http://warmspringwinds.github.io/tensorflow/tf-slim/2016/12/21/tfrecords-guide/) 语义分割以及处理 TFRecord 文件格式。
* [TensorFlow Android Guide](https://blog.mindorks.com/android-tensorflow-machine-learning-example-ff0e9b2654cc) - Android TensorFlow 机器学习示例。
* [TensorFlow Optimizations on Modern Intel® Architecture](https://software.intel.com/en-us/articles/tensorflow-optimizations-on-modern-intel-architecture) - 介绍了基于 Intel/Google 合作、在 Intel® Xeon® 和 Intel® Xeon Phi™ 处理器平台上的 TensorFlow 优化。
* [Coca-Cola's Image Recognition App](https://developers.googleblog.com/2017/09/how-machine-learning-with-tensorflow.html) Coca-Cola 的带有用户输入反馈回路的产品代码图像识别神经网络。
* [How Does The TensorFlow Work](https://www.letslearnai.com/2018/02/02/how-does-the-machine-learning-library-tensorflow-work.html) 机器学习库 TensorFlow 是如何工作的？


<a name="community" />

## Community

* [Stack Overflow](http://stackoverflow.com/questions/tagged/tensorflow)
* [@TensorFlow on Twitter](https://twitter.com/tensorflow)
* [Reddit](https://www.reddit.com/r/tensorflow)
* [Mailing List](https://groups.google.com/a/tensorflow.org/forum/#!forum/discuss)


<a name="books" />

## Books

* [Machine Learning with TensorFlow 2nd edition]([http://tensorflowbook.com](https://github.com/chrismattmann/MLwithTensorFlow2ed)) 作者 [Dr. Chris A. Mattmann](http://github.com/chrismattmann/)，UCLA 首席数据与人工智能官，也是 [Tika in Action](https://www.manning.com/books/tika-in-action) 的作者。本书让数学繁重的 AI 和 ML 话题对初学者来说通俗易懂且易于实践。已更新至 Tensorflow2 及本书的最新版本。
* [First Contact with TensorFlow](http://www.jorditorres.org/first-contact-with-tensorflow/) 作者 Jordi Torres，UPC Barcelona Tech 教授、巴塞罗那超级计算中心的研究经理和高级顾问
* [Deep Learning with Python](https://machinelearningmastery.com/deep-learning-with-python/) - Jason Brownlee 使用 Keras 在 Theano 和 TensorFlow 上开发深度学习模型
* [TensorFlow for Machine Intelligence](https://bleedingedgepress.com/tensor-flow-for-machine-intelligence/) - 从图计算基础到深度学习模型再到生产环境使用的完整 TensorFlow 使用指南 - Bleeding Edge Press
* [Getting Started with TensorFlow](https://www.packtpub.com/big-data-and-business-intelligence/getting-started-tensorflow) - 由 Giancarlo Zaccone 编写的，快速上手 Google 最新的数值计算库并更深入地探索你的数据
* [Hands-On Machine Learning with Scikit-Learn and TensorFlow](http://shop.oreilly.com/product/0636920052289.do) – 作者 Aurélien Geron，前 YouTube 视频分类团队负责人。涵盖 ML 基础、使用 TensorFlow 在多台服务器和 GPU 上训练和部署深度网络、最新的 CNN、RNN 和 Autoencoder 架构，以及强化学习（Deep Q）。
* [Building Machine Learning Projects with Tensorflow](https://www.packtpub.com/big-data-and-business-intelligence/building-machine-learning-projects-tensorflow) – 作者 Rodolfo Bonnin。本书涵盖了 TensorFlow 中各种在不同场景下可行的项目。本书提供了关于训练模型、机器学习、深度学习以及使用各种神经网络的项目。每个项目都是一个引人入胜且富有洞见的练习，将教你如何使用 TensorFlow，并通过处理张量向你展示如何探索数据的各个层面。
* [Deep Learning using TensorLayer](http://www.broadview.com.cn/book/5059) - 作者 Hao Dong 等人。本书涵盖了深度学习以及使用 TensorFlow 和 TensorLayer 的实现。
* [TensorFlow 2.0 in Action](https://www.manning.com/books/tensorflow-in-action) - 作者 Thushan Ganegedara。这本关于使用 TensorFlow 2.0 新特性构建深度学习模型的实用指南，充满了引人入胜的项目、简单的语言以及对最新算法的覆盖。
* [Probabilistic Programming and Bayesian Methods for Hackers](https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers) - 作者 Cameron Davidson-Pilon。使用 tensorflow-probability（以及可选的 PyMC2/3）介绍贝叶斯方法和概率图模型。



<a name="contributions" />

## Contributions

欢迎随时贡献！

如果你想为这个清单做出贡献（请务必），请给我发送一个 pull request 或联系我 [@jtoy](https://twitter.com/jtoy)
此外，如果你注意到上面列出的任何仓库因以下任何原因应被弃用：

* Repository's owner explicitly say that "this library is not maintained".
* Not committed for long time (2~3 years).

更多关于 [guidelines](https://github.com/jtoy/awesome-tensorflow/blob/master/contributing.md) 的信息


<a name="credits" />

## Credits

* Some of the python libraries were cut-and-pasted from [vinta](https://github.com/vinta/awesome-python)
* The few go reference I found where pulled from [this page](https://code.google.com/p/go-wiki/wiki/Projects#Machine_Learning)
