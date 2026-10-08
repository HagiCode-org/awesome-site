# Awesome TensorFlow  [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/jtoy/awesome)

TensorFlow 실험, 라이브러리, 프로젝트들의 훌륭한 목록을 모아둔 큐레이션 리스트입니다. awesome-machine-learning에서 영감을 받았습니다.

## What is TensorFlow?

TensorFlow는 데이터 흐름 그래프를 사용하여 수치 계산을 수행하는 오픈 소스 소프트웨어 라이브러리입니다. 달리 말해, 딥러닝 모델을 구축하는 가장 좋은 방법입니다.

자세한 내용은 [여기](http://tensorflow.org)에서 확인하세요.



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

* [TensorFlow Tutorial 1](https://github.com/pkmital/tensorflow_tutorials) - TensorFlow의 기본부터 조금 더 흥미로운 응용까지 다룹니다
* [TensorFlow Tutorial 2](https://github.com/nlintz/TensorFlow-Tutorials) - Google의 TensorFlow 프레임워크를 기반으로 한 딥러닝 입문서입니다. 이 튜토리얼들은 Newmu의 Theano를 직접 이식한 것입니다
* [TensorFlow Tutorial 3](https://github.com/Hvass-Labs/TensorFlow-Tutorials) - 잘 문서화된 코드와 YouTube 동영상으로 구성된, 딥러닝과 TensorFlow를 처음 접하는 분들을 위한 튜토리얼입니다
* [TensorFlow Examples](https://github.com/aymericdamien/TensorFlow-Examples) - 초보자를 위한 TensorFlow 튜토리얼 및 코드 예제
* [Sungjoon's TensorFlow-101](https://github.com/sjchoi86/Tensorflow-101) - Jupyter Notebook과 Python으로 작성된 TensorFlow 튜토리얼
* [Terry Um’s TensorFlow Exercises](https://github.com/terryum/TensorFlow_Exercises) - 다른 TensorFlow 예제들의 코드를 다시 만들어 봅니다
* [Installing TensorFlow on Raspberry Pi 3](https://github.com/samjabrahams/tensorflow-on-raspberry-pi) - Raspberry Pi에서 TensorFlow를 컴파일하여 제대로 동작하게 합니다
* [Classification on time series](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition) - 휴대폰 센서 데이터에 대해 LSTM을 사용한 TensorFlow의 순환 신경망 분류
* [Getting Started with TensorFlow on Android](https://omid.al/posts/2017-02-20-Tutorial-Build-Your-First-Tensorflow-Android-App.html) - 당신의 첫 TensorFlow Android 앱을 만듭니다
* [Predict time series](https://github.com/guillaume-chevalier/seq2seq-signal-prediction) - 단순한 데이터셋에 seq2seq 모델을 사용하는 방법을 배워, 이 아키텍처가 제공하는 다양한 가능성을 소개합니다
* [Single Image Random Dot Stereograms](https://github.com/Mazecreator/TensorFlow-SIRDS) - SIRDS는 2D 이미지에 3D 데이터를 표현하는 방법입니다. 원근법으로 인한 숨겨진 선이 없는 폭포형 플롯의 과학적 데이터를 표시할 수 있습니다.
* [CS20 SI: TensorFlow for DeepLearning Research](http://web.stanford.edu/class/cs20si/syllabus.html) - 2017년 TensorFlow에 관한 Stanford 강좌 - [Syllabus](http://web.stanford.edu/class/cs20si/syllabus.html) - [Unofficial Videos](https://youtu.be/g-EvyKpZjmQ?list=PLSPPwKHXGS2110rEaNH7amFGmaD5hsObs)
* [TensorFlow World](https://github.com/astorfi/TensorFlow-World) - 자세한 문서와 함께 간결하고 바로 사용할 수 있는 TensorFlow 튜토리얼을 제공합니다.
* [Effective Tensorflow](https://github.com/vahidk/EffectiveTensorflow) - TensorFlow 방법서 및 모범 사례입니다. 기초부터 고급 주제까지 다룹니다.
* [TensorLayer](http://tensorlayer.readthedocs.io/en/latest/user/tutorial.html) - TensorFlow 공식 튜토리얼을 위한 모듈형 구현입니다. ([CN](https://tensorlayercn.readthedocs.io/zh/latest/user/tutorial.html)).
* [Understanding The Tensorflow Estimator API](https://www.lighttag.io/blog/tensorflow-estimator-api/) Estimator API에 대한 개념적 개요로, 언제, 왜 사용하는지 설명합니다. 
* [Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning](https://www.coursera.org/learn/introduction-tensorflow) - Coursera가 제공하는 TensorFlow 입문서
* [Convolutional Neural Networks in TensorFlow](https://www.coursera.org/learn/convolutional-neural-networks-tensorflow) - Coursera가 제공하는 TensorFlow의 합성곱 신경망
* [TensorLayerX](https://tensorlayerx.readthedocs.io/en/latest/index.html#user-guide) - PyTorch처럼 TensorFlow를 사용합니다. ([Api docs](https://tensorlayerx.readthedocs.io/en/latest/index.html#))

<a name="github-projects" />

## Models/Projects

* [Tensorflow-Project-Template](https://github.com/Mrgemy95/Tensorflow-Project-Template) - 당신의 tensorflow 프로젝트를 위한 간단하고 잘 설계된 템플릿입니다.
* [Domain Transfer Network](https://github.com/yunjey/dtn-tensorflow) - 비지도 도메인 간 이미지 생성의 구현
* [Show, Attend and Tell](https://github.com/yunjey/show_attend_and_tell) - 어텐션 기반 이미지 캡션 생성기
* [Neural Style](https://github.com/cysmith/neural-style-tf) Neural Style의 구현
* [SRGAN](https://github.com/tensorlayer/srgan) - 생성적 적대 신경망을 사용한 사실적인 단일 이미지 초해상도
* [Pretty Tensor](https://github.com/google/prettytensor) - Pretty Tensor는 고수준 빌더 API를 제공합니다
* [Neural Style](https://github.com/anishathalye/neural-style) - neural style의 구현
* [AlexNet3D](https://github.com/denti/AlexNet3D) - AlexNet3D의 구현입니다. 간단한 AlexNet 모델이지만 3D 합성곱 레이어(conv3d)를 사용합니다.
* [TensorFlow White Paper Notes](https://github.com/samjabrahams/tensorflow-white-paper-notes) - TensorFlow 화이트페이퍼에 대한 주석이 달린 노트와 요약, 그리고 SVG 그림과 문서 링크
* [NeuralArt](https://github.com/ckmarkoh/neuralart_tensorflow) - 예술적 스타일의 신경 알고리즘의 구현
* [Generative Handwriting Demo using TensorFlow](https://github.com/hardmaru/write-rnn-tensorflow) - Alex Graves의 논문 중 무작위 손글씨 생성 부분을 구현하려는 시도
* [Neural Turing Machine in TensorFlow](https://github.com/carpedm20/NTM-tensorflow) - Neural Turing Machine의 구현
* [GoogleNet Convolutional Neural Network Groups Movie Scenes By Setting](https://github.com/agermanidis/thingscoop) - 영화에 등장하는 사물, 장소 및 기타 요소를 기반으로 동영상을 검색, 필터링 및 설명합니다
* [Neural machine translation between the writings of Shakespeare and modern English using TensorFlow](https://github.com/tokestermw/tensorflow-shakespeare) - 이것은 단일 언어 번역을 수행하며, 현대 영어에서 셰익스피어로, 그리고 그 반대로 변환합니다.
* [Chatbot](https://github.com/Conchylicultor/DeepQA) - ["A neural conversational model"](http://arxiv.org/abs/1506.05869)의 구현
* [Seq2seq-Chatbot](https://github.com/tensorlayer/seq2seq-chatbot) - 200줄의 코드로 된 챗봇
* [DCGAN](https://github.com/tensorlayer/dcgan) - 심층 합성곱 생성적 적대 신경망
* [GAN-CLS](https://github.com/zsdonghao/text-to-image) -생성적 적대 텍스트-이미지 합성
* [im2im](https://github.com/zsdonghao/Unsup-Im2Im) - 생성적 적대 신경망을 이용한 비지도 이미지-이미지 변환
* [Improved CycleGAN](https://github.com/luoxier/CycleGAN_Tensorlayer) - 비대응 이미지-이미지 변환
* [DAGAN](https://github.com/nebulaV/DAGAN) - 빠른 압축 센싱 MRI 재구성
* [Colornet - Neural Network to colorize grayscale images](https://github.com/pavelgonchar/colornet) - 흑백 이미지에 색을 입히는 신경망
* [Neural Caption Generator](https://github.com/jazzsaxmafia/show_attend_and_tell.tensorflow) - ["Show and Tell"](http://arxiv.org/abs/1411.4555)의 구현
* [Neural Caption Generator with Attention](https://github.com/jazzsaxmafia/show_attend_and_tell.tensorflow) - ["Show, Attend and Tell"](http://arxiv.org/abs/1502.03044)의 구현
* [Weakly_detector](https://github.com/jazzsaxmafia/Weakly_detector) - ["Learning Deep Features for Discriminative Localization"](http://cnnlocalization.csail.mit.edu/)의 구현
* [Dynamic Capacity Networks](https://github.com/jazzsaxmafia/dcn.tf) - ["Dynamic Capacity Networks"](http://arxiv.org/abs/1511.07838)의 구현
* [HMM in TensorFlow](https://github.com/dwiel/tensorflow_hmm) - HMM을 위한 비터비 및 순방향/역방향 알고리즘의 구현
* [DeepOSM](https://github.com/trailbehind/DeepOSM) - OpenStreetMap 특징과 위성 이미지를 사용하여 TensorFlow 신경망을 학습합니다.
* [DQN-tensorflow](https://github.com/devsisters/DQN-tensorflow) - Devsisters.com의 OpenAI Gym을 사용한 DeepMind의 'Human-Level Control through Deep Reinforcement Learning'에 대한 TensorFlow 구현
* [Policy Gradient](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_atari_pong.py) - Atari 핑퐁 게임용
* [Deep Q-Network](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_frozenlake_dqn.py) - Frozen Lake 게임용
* [AC](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_cartpole_ac.py) - 이산 행동 공간 게임(Cartpole)용 Actor Critic
* [A3C](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_bipedalwalker_a3c_continuous_action.py) - 연속 행동 공간(Bipedal Walker)용 비동기 어드밴티지 Actor Critic (A3C)
* [DAGGER](https://github.com/zsdonghao/Imitation-Learning-Dagger-Torcs) - [Gym Torcs](https://github.com/ugo-nama-kun/gym_torcs) 게임용
* [TRPO](https://github.com/jjkke88/RL_toolbox) - 연속 및 이산 행동 공간용
* [Highway Network](https://github.com/fomorians/highway-cnn) - [blog post](https://medium.com/jim-fleming/highway-networks-with-tensorflow-1e6dfa667daa#.ndicn1i27)와 함께 ["Training Very Deep Networks"](http://arxiv.org/abs/1507.06228)에 대한 TensorFlow 구현
* [Hierarchical Attention Networks](https://github.com/tqtg/hierarchical-attention-networks) - ["Hierarchical Attention Networks for Document Classification"](https://www.cs.cmu.edu/~hovy/papers/16HLT-hierarchical-attention-networks.pdf)에 대한 TensorFlow 구현
* [Sentence Classification with CNN](https://github.com/dennybritz/cnn-text-classification-tf) - [blog post](http://www.wildml.com/2015/12/implementing-a-cnn-for-text-classification-in-tensorflow/)와 함께 ["Convolutional Neural Networks for Sentence Classification"](http://arxiv.org/abs/1408.5882)에 대한 TensorFlow 구현
* [End-To-End Memory Networks](https://github.com/domluna/memn2n) - [End-To-End Memory Networks](http://arxiv.org/abs/1503.08895)의 구현
* [Character-Aware Neural Language Models](https://github.com/carpedm20/lstm-char-cnn-tensorflow) - [Character-Aware Neural Language Models](http://arxiv.org/abs/1508.06615)에 대한 TensorFlow 구현
* [YOLO TensorFlow ++](https://github.com/thtrieu/yolotf) - 'YOLO: Real-Time Object Detection'에 대한 TensorFlow 구현으로, 학습과 모바일 기기에서의 실시간 실행을 실제로 지원합니다.
* [Wavenet](https://github.com/ibab/tensorflow-wavenet) - 오디오 생성을 위한 [WaveNet generative neural network architecture](https://deepmind.com/blog/wavenet-generative-model-raw-audio/)의 TensorFlow 구현입니다.
* [Mnemonic Descent Method](https://github.com/trigeorgis/mdm) - ["Mnemonic Descent Method: A recurrent process applied for end-to-end face alignment"](http://ibug.doc.ic.ac.uk/media/uploads/documents/trigeorgis2016mnemonic.pdf)의 Tensorflow 구현
* [CNN visualization using Tensorflow](https://github.com/InFoCusp/tf_cnnvis) - ["Visualizing and Understanding Convolutional Networks"](https://www.cs.nyu.edu/~fergus/papers/zeilerECCV2014.pdf)의 Tensorflow 구현
* [VGAN Tensorflow](https://github.com/Singularity42/VGAN-Tensorflow) - Vondrick 외의 MIT ["Generating Videos with Scene Dynamics"](http://carlvondrick.com/tinyvideo/)에 대한 Tensorflow 구현
* [3D Convolutional Neural Networks in TensorFlow](https://github.com/astorfi/3D-convolutional-speaker-recognition) - Torfi 외의 TensorFlow에서 ["3D Convolutional Neural Networks for Speaker Verification application"](https://arxiv.org/abs/1705.09422)의 구현
* [U-Net](https://github.com/zsdonghao/u-net-brain-tumor) - 뇌종양 분할용
* [Spatial Transformer Networks](https://github.com/zsdonghao/Spatial-Transformer-Nets) - 변환 함수 학습 
* [Lip Reading - Cross Audio-Visual Recognition using 3D Architectures in TensorFlow](https://github.com/astorfi/lip-reading-deeplearning) - Torfi 외의 ["Cross Audio-Visual Recognition in the Wild Using Deep Learning"](https://arxiv.org/abs/1706.05739)에 대한 TensorFlow 구현
* [Attentive Object Tracking](https://github.com/akosiorek/hart) - ["Hierarchical Attentive Recurrent Tracking"](https://arxiv.org/abs/1706.09262)의 구현
* [Holographic Embeddings for Graph Completion and Link Prediction](https://github.com/laxatives/TensorFlow-TransX) - [Holographic Embeddings of Knowledge Graphs](http://arxiv.org/abs/1510.04935)의 구현
* [Unsupervised Object Counting](https://github.com/akosiorek/attend_infer_repeat) - ["Attend, Infer, Repeat"](https://papers.nips.cc/paper/6230-attend-infer-repeat-fast-scene-understanding-with-generative-models)의 구현
* [Tensorflow FastText](https://github.com/apcode/tensorflow_fasttext) - Facebook의 fastText에서 영감을 받은 간단한 임베딩 기반 텍스트 분류기입니다.
* [MusicGenreClassification](https://github.com/mlachmish/MusicGenreClassification) - 신경망을 사용하여 10초 사운드 스트림에서 음악 장르를 분류합니다.
* [Kubeflow](https://github.com/kubeflow/kubeflow) - Kubernetes와 함께 TensorFlow를 쉽게 사용할 수 있는 프레임워크입니다.
* [TensorNets](https://github.com/taehoonlee/tensornets) - 사전 학습된 가중치를 가진 40개 이상의 인기 컴퓨터 비전 모델.
* [Ladder Network](https://github.com/divamgupta/ladder_network_keras) - Keras와 Tensorflow에서 준지도 학습을 위한 Ladder Network의 구현
* [TF-Unet](https://github.com/juniorxsound/TF-Unet) - 이미지 분할을 위해 Keras로 구현된 범용 U-Network
* [Sarus TF2 Models](https://github.com/sarus-tech/tf2-published-models) - 깔끔하고 재사용하기 쉬운 Tensorflow 2 코드로 구현된 최신 생성 모델들의 긴 목록 (Plain Autoencoder, VAE, VQ-VAE, PixelCNN, Gated PixelCNN, PixelCNN++, PixelSNAIL, Conditional Neural Processes).
* [Model Maker](https://www.tensorflow.org/lite/guide/model_maker) - TensorFlow Lite 모델의 학습, 평가 및 배포 과정을 단순화하는 전이 학습 라이브러리 (지원: 이미지 분류, 객체 탐지, 텍스트 분류, BERT 질의 응답, 오디오 분류, 추천 등; [API reference](https://www.tensorflow.org/lite/api_docs/python/tflite_model_maker)).


<a name="github-powered-by" />

## Powered by TensorFlow

* [YOLO TensorFlow](https://github.com/gliese581gg/YOLO_tensorflow) - 'YOLO : Real-Time Object Detection'의 구현
* [android-yolo](https://github.com/natanielruiz/android-yolo) - YOLO 네트워크를 사용한 Android에서의 실시간 객체 탐지, TensorFlow 기반.
* [Magenta](https://github.com/tensorflow/magenta) - 음악 및 예술 생성을 위한 머신 인텔리전스의 최첨단을 발전시키는 연구 프로젝트


<a name="libraries" />

## Libraries

* [TensorFlow Estimators](https://www.tensorflow.org/guide/estimators) - 머신러닝 프로그래밍을 크게 단순화하는 고수준 TensorFlow API (원래 [tensorflow/skflow](https://github.com/tensorflow/skflow))
* [R Interface to TensorFlow](https://tensorflow.rstudio.com/) - Estimators, Keras, Datasets 등을 포함한 TensorFlow API에 대한 R 인터페이스
* [Lattice](https://github.com/tensorflow/lattice) - TensorFlow에서 단조 보정 보간 룩업 테이블의 구현
* [tensorflow.rb](https://github.com/somaticio/tensorflow.rb) - SWIG를 사용하는 ruby용 TensorFlow 네이티브 인터페이스
* [tflearn](https://github.com/tflearn/tflearn) - 고수준 API를 갖춘 딥러닝 라이브러리
* [TensorLayer](https://github.com/tensorlayer/tensorlayer) - 연구자와 엔지니어를 위한 딥러닝 및 강화학습 라이브러리
* [TensorFlow-Slim](https://github.com/tensorflow/models/tree/master/inception/inception/slim) - 모델을 정의하기 위한 고수준 라이브러리
* [TensorFrames](https://github.com/tjhunter/tensorframes) - Apache Spark용 TensorFlow 바인딩
* [TensorForce](https://github.com/reinforceio/tensorforce) - TensorForce: 적용 강화학습을 위한 TensorFlow 라이브러리
* [TensorFlowOnSpark](https://github.com/yahoo/TensorFlowOnSpark) - Yahoo!에서 시작한 Apache Spark와 함께 분산 TensorFlow를 가능하게 하는 프로젝트.
* [caffe-tensorflow](https://github.com/ethereon/caffe-tensorflow) - Caffe 모델을 TensorFlow 형식으로 변환
* [keras](http://keras.io) - TensorFlow와 Theano를 위한 최소한의 모듈형 딥러닝 라이브러리
* [SyntaxNet: Neural Models of Syntax](https://github.com/tensorflow/models/tree/master/syntaxnet) - [Globally Normalized Transition-Based Neural Networks, Andor et al. (2016)](http://arxiv.org/pdf/1603.06042.pdf)에 설명된 모델들의 TensorFlow 구현
* [keras-js](https://github.com/transcranial/keras-js) - 브라우저에서(CPU 지원 포함) Keras 모델(tensorflow 백엔드)을 실행
* [NNFlow](https://github.com/welschma/NNFlow) - ROOT NTuples를 Numpy 배열로 변환하여 읽어들인 뒤 Google Tensorflow에서 사용할 수 있게 하는 간단한 프레임워크.
* [Sonnet](https://github.com/deepmind/sonnet) - Sonnet은 복잡한 신경망을 구축하기 위해 TensorFlow 위에 DeepMind가 만든 라이브러리입니다.
* [tensorpack](https://github.com/ppwwyyxx/tensorpack) - 학습 속도와 대규모 데이터셋에 초점을 둔 TensorFlow 기반 신경망 툴박스.
* [tf-encrypted](https://github.com/mortendahl/tf-encrypted) - 암호화된 데이터에 대해 머신러닝을 수행하기 위한 TensorFlow 위의 레이어
* [pytorch2keras](https://github.com/nerox8664/pytorch2keras) - PyTorch 모델을 Keras(tensorflow 백엔드) 형식으로 변환
* [gluon2keras](https://github.com/stjordanis/gluon2keras) - Gluon 모델을 Keras(tensorflow 백엔드) 형식으로 변환
* [TensorIO](https://doc-ai.github.io/tensorio/) - 모바일 기기에 TensorFlow Lite 모델을 배포하기 위한 가벼운 크로스 플랫폼 라이브러리. 
* [StellarGraph](https://github.com/stellargraph/stellargraph) - 그래프 구조(네트워크 구조) 데이터에 대한 머신러닝을 위한 Python 라이브러리.
* [DeepBay](https://github.com/ElPapi42/DeepBay) - 일반적인 아키텍처 스택을 구현하기 위한 고수준 Keras 보완 도구로, 쉽게 사용할 수 있는 플러그인 모듈로 제공됩니다
* [Tensorflow-Probability](https://www.tensorflow.org/probability) - TensorFlow 위에 구축된 확률적 프로그래밍으로, 현대 하드웨어에서 확률 모델과 딥러닝을 쉽게 결합할 수 있게 합니다.
* [TensorLayerX](https://github.com/tensorlayer/TensorLayerX) - TensorLayerX: TensorFlow를 포함한 모든 하드웨어, 백엔드 및 OS를 위한 통합 딥러닝 프레임워크.
* [Txeo](https://github.com/rdabra/txeo) - TensorFlow를 위한 현대적인 C++ 래퍼.

<a name="tools-utils" />

## Tools/Utilities

* [Speedster](https://github.com/nebuly-ai/nebullvm/tree/main/apps/accelerate/speedster) - 하드웨어에서 최대 추론 속도 향상을 달성하기 위해 SOTA 최적화 기법을 자동으로 적용합니다.
* [Guild AI](https://guild.ai) - TensorFlow를 위한 태스크 러너 및 패키지 관리자
* [ML Workspace](https://github.com/ml-tooling/ml-workspace) - 머신러닝 및 데이터 사이언스를 위한 올인원 웹 IDE. Tensorflow, Jupyter, VS Code, Tensorboard 및 기타 많은 도구/라이브러리를 하나의 Docker 이미지로 결합합니다.
* [create-tf-app](https://github.com/radi-cho/create-tf-app) - 환경 관리, 린팅, 로깅을 포괄하는 Tensorflow용 프로젝트 빌더 명령줄 도구.

<a name="video" />

## Videos

* [TensorFlow Guide 1](http://bit.ly/1OX8s8Y) - 설치 및 사용에 관한 가이드
* [TensorFlow Guide 2](http://bit.ly/1R27Ki9) - 첫 번째 동영상의 계속
* [TensorFlow Basic Usage](http://bit.ly/1TCNmEY) - 기본 사용법을 다루는 가이드
* [TensorFlow Deep MNIST for Experts](http://bit.ly/1L9IfJx) - Deep MNIST를 다룹니다
* [TensorFlow Udacity Deep Learning](https://www.youtube.com/watch?v=ReaxoSIM5XQ) - 1Gb의 데이터와 함께 Cloud 9 온라인 서비스에서 무료로 TensorFlow를 설치하는 기본 단계
* [Why Google wants everyone to have access to TensorFlow](http://video.foxnews.com/v/4611174773001/why-google-wants-everyone-to-have-access-to-tensorflow/?#sp=show-clips)
* [Videos from TensorFlow Silicon Valley Meet Up 1/19/2016](http://blog.altoros.com/videos-from-tensorflow-silicon-valley-meetup-january-19-2016.html)
* [Videos from TensorFlow Silicon Valley Meet Up 1/21/2016](http://blog.altoros.com/videos-from-tensorflow-seattle-meetup-jan-21-2016.html)
* [Stanford CS224d Lecture 7 - Introduction to TensorFlow, 19th Apr 2016](https://www.youtube.com/watch?v=L8Y2_Cq2X5s&index=7&list=PLmImxx8Char9Ig0ZHSyTqGsdhb9weEGam) - Richard Socher의 CS224d 자연어 처리를 위한 딥러닝
* [Diving into Machine Learning through TensorFlow](https://youtu.be/GZBIPwdGtkk?list=PLBkISg6QfSX9HL6us70IBs9slFciFFa4W) - Pycon 2016 Portland Oregon, Julia Ferraioli, Amy Unruh, Eli Bixby의 [Slide](https://storage.googleapis.com/amy-jo/talks/tf-workshop.pdf) & [Code](https://github.com/amygdala/tensorflow-workshop)
* [Large Scale Deep Learning with TensorFlow](https://youtu.be/XYwIDn00PAo) - Jeff Dean의 Spark Summit 2016 키노트
* [Tensorflow and deep learning - without at PhD](https://www.youtube.com/watch?v=vq2nnJ4g6N0) -  Martin Görner
* [Tensorflow and deep learning - without at PhD, Part 2 (Google Cloud Next '17)](https://www.youtube.com/watch?v=fTUwdXUFfI8) -  Martin Görner
* [Image recognition in Go using TensorFlow](https://youtu.be/P8MZ1Z2LHrw) -  Alex Pliutau



<a name="papers" />

## Papers

* [TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems](http://download.tensorflow.org/paper/whitepaper2015.pdf) - 이 논문은 TensorFlow 인터페이스와 Google에서 구축한 그 인터페이스의 구현을 설명합니다
* [TensorFlow Estimators: Managing Simplicity vs. Flexibility in High-Level Machine Learning Frameworks](https://arxiv.org/pdf/1708.02637.pdf)
* [TF.Learn: TensorFlow's High-level Module for Distributed Machine Learning](https://arxiv.org/abs/1612.04251)
* [Comparative Study of Deep Learning Software Frameworks](http://arxiv.org/abs/1511.06435) - 이 연구는 여러 유형의 딥러닝 아키텍처에 대해 수행되었으며, 단일 머신에서 (멀티 스레드) CPU와 GPU (Nvidia Titan X) 설정 모두에서 위 프레임워크들의 성능을 평가합니다
* [Distributed TensorFlow with MPI](http://arxiv.org/abs/1603.02339) - 이 논문에서 우리는 최근 제안된 Google TensorFlow를 메시지 전달 인터페이스(MPI)를 사용하여 대규모 클러스터에서 실행되도록 확장합니다
* [Globally Normalized Transition-Based Neural Networks](http://arxiv.org/abs/1603.06042) - 이 논문은 [SyntaxNet](https://github.com/tensorflow/models/tree/master/syntaxnet)의 기반 모델을 설명합니다.
* [TensorFlow: A system for large-scale machine learning](https://arxiv.org/abs/1605.08695) - 이 논문은 기존 시스템과 대조적으로 TensorFlow 데이터플로우 모델을 설명하고 설득력 있는 성능을 보여줍니다
* [TensorLayer: A Versatile Library for Efficient Deep Learning Development](https://arxiv.org/abs/1707.08551) - 이 논문은 연구자와 엔지니어가 딥러닝 시스템을 효율적으로 개발하도록 돕는 것을 목표로 하는 다재다능한 Python 라이브러리를 설명합니다. (ACM MM 2017 최우수 오픈 소스 소프트웨어상 수상)

<a name="blogs" />

## Official announcements

* [TensorFlow: smarter machine learning, for everyone](https://googleblog.blogspot.com/2015/11/tensorflow-smarter-machine-learning-for.html) - TensorFlow에 대한 소개
* [Announcing SyntaxNet: The World’s Most Accurate Parser Goes Open Source](http://googleresearch.blogspot.com/2016/05/announcing-syntaxnet-worlds-most.html) - SyntaxNet의 공개, "자연어 이해 시스템의 기초가 되는 TensorFlow로 구현된 오픈 소스 신경망 프레임워크.

## Blog posts
* [Official Tensorflow Blog](http://blog.tensorflow.org/)
* [Why TensorFlow will change the Game for AI](https://archive.fo/o9asj)
* [TensorFlow for Poets](http://petewarden.com/2016/02/28/tensorflow-for-poets) - TensorFlow의 구현을 다룹니다
* [Introduction to Scikit Flow - Simplified Interface to TensorFlow](http://terrytangyuan.github.io/2016/03/14/scikit-flow-intro/) - 주요 특징 설명
* [Building Machine Learning Estimator in TensorFlow](http://terrytangyuan.github.io/2016/07/08/understand-and-build-tensorflow-estimator/) - TensorFlow Learn Estimators의 내부 이해
* [TensorFlow - Not Just For Deep Learning](http://terrytangyuan.github.io/2016/08/06/tensorflow-not-just-deep-learning/)
* [The indico Machine Learning Team's take on TensorFlow](https://indico.io/blog/indico-tensorflow)
* [The Good, Bad, & Ugly of TensorFlow](https://indico.io/blog/the-good-bad-ugly-of-tensorflow/) - 6개월간의 급속한 진화에 대한 조사(문제 해결 팁/해킹 및 수정 코드 포함), Indico의 Dan Kuster, 2016년 5월 9일
* [Fizz Buzz in TensorFlow](http://joelgrus.com/2016/05/23/fizz-buzz-in-tensorflow/) - Joel Grus의 농담
* [RNNs In TensorFlow, A Practical Guide And Undocumented Features](http://www.wildml.com/2016/08/rnns-in-tensorflow-a-practical-guide-and-undocumented-features/) - GitHub의 전체 코드 예제가 포함된 단계별 가이드.
* [Using TensorBoard to Visualize Image Classification Retraining in TensorFlow](http://maxmelnick.com/2016/07/04/visualizing-tensorflow-retrain.html)
* [TFRecords Guide](http://warmspringwinds.github.io/tensorflow/tf-slim/2016/12/21/tfrecords-guide/) 의미 분할과 TFRecord 파일 형식 다루기.
* [TensorFlow Android Guide](https://blog.mindorks.com/android-tensorflow-machine-learning-example-ff0e9b2654cc) - Android TensorFlow 머신러닝 예제.
* [TensorFlow Optimizations on Modern Intel® Architecture](https://software.intel.com/en-us/articles/tensorflow-optimizations-on-modern-intel-architecture) - Intel/Google 협업을 기반으로 Intel® Xeon® 및 Intel® Xeon Phi™ 프로세서 기반 플랫폼에서의 TensorFlow 최적화를 소개합니다.
* [Coca-Cola's Image Recognition App](https://developers.googleblog.com/2017/09/how-machine-learning-with-tensorflow.html) 사용자 입력 피드백 루프를 갖춘 Coca-Cola의 제품 코드 이미지 인식 신경망.
* [How Does The TensorFlow Work](https://www.letslearnai.com/2018/02/02/how-does-the-machine-learning-library-tensorflow-work.html) 머신러닝 라이브러리 TensorFlow는 어떻게 동작할까요?


<a name="community" />

## Community

* [Stack Overflow](http://stackoverflow.com/questions/tagged/tensorflow)
* [@TensorFlow on Twitter](https://twitter.com/tensorflow)
* [Reddit](https://www.reddit.com/r/tensorflow)
* [Mailing List](https://groups.google.com/a/tensorflow.org/forum/#!forum/discuss)


<a name="books" />

## Books

* [Machine Learning with TensorFlow 2nd edition]([http://tensorflowbook.com](https://github.com/chrismattmann/MLwithTensorFlow2ed)) by [Dr. Chris A. Mattmann](http://github.com/chrismattmann/), UCLA의 수석 데이터 및 인공지능 책임자이자 [Tika in Action](https://www.manning.com/books/tika-in-action)의 저자. 이 책은 수학이 많은 AI와 ML 주제를 초심자도 이해하고 실습할 수 있도록 접근하기 쉽게 다룹니다. Tensorflow2 및 이 책의 최신 버전으로 업데이트되었습니다.
* [First Contact with TensorFlow](http://www.jorditorres.org/first-contact-with-tensorflow/) by Jordi Torres, UPC Barcelona Tech 교수이자 Barcelona Supercomputing Center의 연구 관리자 및 수석 고문
* [Deep Learning with Python](https://machinelearningmastery.com/deep-learning-with-python/) - Jason Brownlee가 Keras를 사용하여 Theano와 TensorFlow에서 딥러닝 모델 개발
* [TensorFlow for Machine Intelligence](https://bleedingedgepress.com/tensor-flow-for-machine-intelligence/) - 그래프 계산의 기초부터 딥러닝 모델, 프로덕션 환경에서의 사용까지 TensorFlow를 사용하는 완전한 가이드 - Bleeding Edge Press
* [Getting Started with TensorFlow](https://www.packtpub.com/big-data-and-business-intelligence/getting-started-tensorflow) - Google의 최신 수치 계산 라이브러리로 시작하고 데이터를 더 깊이 파헤치기, Giancarlo Zaccone 저
* [Hands-On Machine Learning with Scikit-Learn and TensorFlow](http://shop.oreilly.com/product/0636920052289.do) – Aurélien Geron 저, 전 YouTube 비디오 분류 팀 리더. ML 기초, TensorFlow를 사용한 다중 서버 및 GPU에 걸친 딥넷 학습 및 배포, 최신 CNN, RNN 및 오토인코더 아키텍처, 그리고 강화학습(Deep Q)을 다룹니다.
* [Building Machine Learning Projects with Tensorflow](https://www.packtpub.com/big-data-and-business-intelligence/building-machine-learning-projects-tensorflow) – Rodolfo Bonnin 저. 이 책은 다양한 시나리오에서 TensorFlow로 할 수 있는 일을 보여주는 여러 프로젝트를 다룹니다. 모델 학습, 머신러닝, 딥러닝, 다양한 신경망 작업에 관한 프로젝트를 제공합니다. 각 프로젝트는 TensorFlow 사용법을 알려주고 텐서로 작업하며 데이터 계층을 탐색하는 방법을 보여주는 흥미롭고 통찰력 있는 연습입니다.
* [Deep Learning using TensorLayer](http://www.broadview.com.cn/book/5059) - Hao Dong 외 저. 이 책은 딥러닝과 TensorFlow 및 TensorLayer를 사용한 구현을 모두 다룹니다.
* [TensorFlow 2.0 in Action](https://www.manning.com/books/tensorflow-in-action) - Thushan Ganegedara 저. TensorFlow 2.0의 새로운 기능으로 딥러닝 모델을 구축하는 이 실용 가이드는 흥미로운 프로젝트, 간단한 언어, 그리고 최신 알고리즘을 다룹니다.
* [Probabilistic Programming and Bayesian Methods for Hackers](https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers) - Cameron Davidson-Pilon 저. tensorflow-probability(그리고 대안으로 PyMC2/3)를 사용한 베이즈 방법 및 확률적 그래픽 모델 입문. 


<a name="contributions" />

## Contributions

여러분의 기여는 언제나 환영합니다!

이 목록에 기여하고 싶으시다면(부탁드립니다), 풀 리퀘스트를 보내주시거나 [@jtoy](https://twitter.com/jtoy)로 연락해 주세요.
또한, 위에 나열된 저장소 중 다음 이유 중 하나로 더 이상 사용되지 않아야 하는 것이 있다면 알려주세요:

* 저장소 소유자가 명시적으로 "이 라이브러리는 유지보수되지 않습니다"라고 말한 경우.
* 오랫동안 커밋되지 않은 경우(2~3년).

[기여 가이드라인](https://github.com/jtoy/awesome-tensorflow/blob/master/contributing.md)에 대한 자세한 내용.


<a name="credits" />

## Credits

* 일부 Python 라이브러리는 [vinta](https://github.com/vinta/awesome-python)에서 복사되어 붙여넣었습니다
* 제가 찾은 소수의 Go 참조는 [이 페이지](https://code.google.com/p/go-wiki/wiki/Projects#Machine_Learning)에서 가져왔습니다
