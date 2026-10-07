<!--
Title: Awesome Core ML Models
Description: A curated list of machine learning models in Core ML format.
Author: Kedan Li
-->

<p align="center">
<img src="images/coreml.png" width="329" height="295"/>
</p>


iOS 11부터 Apple은 개발자가 머신러닝 모델을 앱에 통합할 수 있도록 Core ML 프레임워크를 출시했습니다. [공식 문서](https://developer.apple.com/documentation/coreml)

저희는 Core ML 형식의 머신러닝 모델 중 가장 큰 컬렉션을 모아, iOS, macOS, tvOS, watchOS 개발자가 머신러닝 기법을 실험할 수 있도록 돕습니다.

Core ML 모델을 변환하셨다면 언제든 [풀 리퀘스트](https://github.com/likedan/Awesome-CoreML-Models/compare)를 제출해 주세요.

최근 저희는 시각화 도구를 추가했습니다. 그중 하나가 [Netron](https://lutzroeder.github.io/Netron)입니다.

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# 모델

## 이미지 - 메타데이터/텍스트
*이미지 데이터를 입력으로 받아 이미지에 대한 유용한 정보를 출력하는 모델.*
* **TextDetection** - Vision 내장 모델을 사용하여 실시간으로 텍스트를 감지합니다. [Download]() | [Demo](https://github.com/tucan9389/TextDetection-CoreML) | [Reference](https://developer.apple.com/documentation/vision)
* **PhotoAssessment** - Core ML과 Metal을 사용한 사진 평가. [Download](https://github.com/yulingtianxia/PhotoAssessment/blob/master/PhotoAssessment-Sample/Sources/NIMANasnet.mlmodel) | [Demo](https://github.com/yulingtianxia/PhotoAssessment) | [Reference](https://arxiv.org/abs/1709.05424)
* **PoseEstimation** - 모바일용으로 사진에서 사람의 자세를 추정합니다. [Download](https://github.com/edvardHua/PoseEstimationForMobile/tree/master/release) | [Demo](https://github.com/tucan9389/PoseEstimation-CoreML) | [Reference](https://github.com/edvardHua/PoseEstimationForMobile)
* **MobileNet** - 이미지에 존재하는 주요 객체를 감지합니다. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/hollance/MobileNet-CoreML) | [Reference](https://arxiv.org/abs/1704.04861)
* **Places CNN** - 침실, 숲, 해안 등 205개 범주 중에서 이미지의 장면을 감지합니다. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/chenyi1989/CoreMLDemo) | [Reference](http://places.csail.mit.edu/index.html)
* **Inception v3** - 이미지에 존재하는 주요 객체를 감지합니다. [Download](https://github.com/yulingtianxia/Core-ML-Sample/blob/master/CoreMLSample/Inceptionv3.mlmodel) | [Demo](https://github.com/yulingtianxia/Core-ML-Sample/) | [Reference](https://arxiv.org/abs/1512.00567)
* **ResNet50** - 이미지에 존재하는 주요 객체를 감지합니다. [Download](https://github.com/ytakzk/CoreML-samples/blob/master/CoreML-samples/Resnet50.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](https://arxiv.org/abs/1512.03385)
* **VGG16** - 이미지에 존재하는 주요 객체를 감지합니다. [Download](https://docs-assets.developer.apple.com/coreml/models/VGG16.mlmodel) | [Demo](https://github.com/alaphao/CoreMLExample) | [Reference](https://arxiv.org/abs/1409.1556)
* **Car Recognition** - 자동차의 브랜드와 모델을 예측합니다. [Download](https://github.com/likedan/Core-ML-Car-Recognition/blob/master/Convert/CarRecognition.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)
* **YOLO** - 주어진 이미지 내에 어떤 객체가 있고 어디에 있는지 인식합니다. [Download](https://github.com/hollance/YOLO-CoreML-MPSNNGraph/blob/master/TinyYOLO-CoreML/TinyYOLO-CoreML/TinyYOLO.mlmodel) | [Demo](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) | [Reference](http://machinethink.net/blog/object-detection-with-yolo)
* **AgeNet** - 초상화에서 사람의 나이를 예측합니다. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mT1J3T1BEeWx4TWc/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **GenderNet** - 초상화에서 사람의 성별을 예측합니다. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mYkNsZHlyc2ZuaFk/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **MNIST** - 이미지에서 손으로 쓴(그린) 숫자를 예측합니다. [Download](https://github.com/ph1ps/MNIST-CoreML/raw/master/MNISTPrediction/MNIST.mlmodel) | [Demo](https://github.com/ph1ps/MNIST-CoreML) | [Reference](http://yann.lecun.com/exdb/mnist/)
* **EmotionNet** - 초상화에서 사람의 감정을 예측합니다. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mTlYtRGdXNFlpWDQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)
* **SentimentVision** - 이미지에서 긍정 또는 부정 감정을 예측합니다. [Download](https://drive.google.com/open?id=0B1ghKa_MYL6mZ0dITW5uZlgyNTg) | [Demo](https://github.com/cocoa-ai/SentimentVisionDemo) | [Reference](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)
* **Food101** - 이미지에서 음식 종류를 예측합니다. [Download](https://drive.google.com/open?id=0B5TjkH3njRqnVjBPZGRZbkNITjA) | [Demo](https://github.com/ph1ps/Food101-CoreML) | [Reference](http://visiir.lip6.fr/explore)
* **Oxford102** - 이미지에서 꽃의 종류를 감지합니다. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FlowersVisionDemo) | [Reference](http://jimgoo.com/flower-power/)
* **FlickrStyle** - 이미지의 예술적 스타일을 감지합니다. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/StylesVisionDemo) | [Reference](http://sergeykarayev.com/files/1311.3715v3.pdf)
* **RN1015k500** - 사진이 촬영된 위치를 예측합니다. [Download](https://s3.amazonaws.com/aws-bigdata-blog/artifacts/RN1015k500/RN1015k500.mlmodel) | [Demo](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) | [Reference](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)
* **Nudity** - 이미지를 NSFW(누드) 또는 SFW(비누드)로 분류합니다
 [Download](https://drive.google.com/open?id=0B5TjkH3njRqncDJpdDB1Tkl2S2s) | [Demo](https://github.com/ph1ps/Nudity-CoreML) | [Reference](https://github.com/yahoo/open_nsfw)
* **TextRecognition (ML Kit)** - ML Kit 내장 모델을 사용하여 실시간으로 텍스트를 인식합니다. [Download]() | [Demo](https://github.com/tucan9389/TextRecognition-MLKit) | [Reference](https://firebase.google.com/docs/ml-kit/ios/recognize-text)
* **ImageSegmentation** - 카메라 프레임이나 이미지의 픽셀을 미리 정의된 클래스 집합으로 분할합니다. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/ImageSegmentation-CoreML) | [Reference](https://github.com/tensorflow/models/tree/master/research/deeplab)
* **DepthPrediction** - 단일 이미지에서 깊이를 예측합니다. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/DepthPrediction-CoreML) | [Reference](https://github.com/iro-cp/FCRN-DepthPrediction)

## 이미지 - 이미지
*이미지를 변환하는 모델.*
* **HED** - 컬러 이미지에서 중첩된 가장자리를 감지합니다. [Download](https://github.com/s1ddok/HED-CoreML/blob/master/HED-CoreML/Models/HED_so.mlmodel) | [Demo](https://github.com/s1ddok/HED-CoreML) | [Reference](http://dl.acm.org/citation.cfm?id=2654889)
* **AnimeScale2x** - 바이큐빅 보간으로 확대된 애니메이션 스타일 아트워크를 처리합니다 [Download](https://github.com/imxieyi/waifu2x-ios/blob/master/waifu2x/models/anime_noise0_model.mlmodel) | [Demo](https://github.com/imxieyi/waifu2x-ios) | [Reference](https://arxiv.org/abs/1501.00092)

## 텍스트 - 메타데이터/텍스트
*텍스트 데이터를 처리하는 모델*
* **Sentiment Polarity** - 문장에서 긍정 또는 부정 감정을 예측합니다. [Download](https://github.com/cocoa-ai/SentimentCoreMLDemo/raw/master/SentimentPolarity/Resources/SentimentPolarity.mlmodel) | [Demo](https://github.com/cocoa-ai/SentimentCoreMLDemo) | [Reference](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)
* **DocumentClassification** - 뉴스 기사를 5개 범주 중 하나로 분류합니다. [Download](https://github.com/toddkramer/DocumentClassifier/blob/master/Sources/DocumentClassification.mlmodel) | [Demo](https://github.com/toddkramer/DocumentClassifier) | [Reference](https://github.com/toddkramer/DocumentClassifier/)
* **iMessage Spam Detection** - 메시지가 스팸인지 감지합니다. [Download](https://github.com/gkswamy98/imessage-spam-detection/blob/master/MessageClassifier.mlmodel) | [Demo](https://github.com/gkswamy98/imessage-spam-detection/tree/master) | [Reference](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)
* **NamesDT** - DecisionTreeClassifier를 사용한 성별 분류 [Download](https://github.com/cocoa-ai/NamesCoreMLDemo/blob/master/Names/Resources/NamesDT.mlmodel) | [Demo](https://github.com/cocoa-ai/NamesCoreMLDemo) | [Reference](http://nlpforhackers.io/)
* **Personality Detection** - 사용자 문서(문장)를 기반으로 성격을 예측합니다. [Download](https://github.com/novinfard/profiler-sentiment-analysis/tree/master/ios_app/ProfilerSA/ML%20Models) | [Demo](https://github.com/novinfard/profiler-sentiment-analysis/) | [Reference](https://github.com/novinfard/profiler-sentiment-analysis/blob/master/dissertation-v6.pdf)
* **BERT for Question answering** - 질문 응답을 위한 BERT의 Swift Core ML 3 구현 [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/BERTSQUADFP16.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-bert) | [Reference](https://github.com/huggingface/pytorch-transformers#run_squadpy-fine-tuning-on-squad-for-question-answering)
* **GPT-2** - OpenAI GPT-2 텍스트 생성(Core ML 3) [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/gpt2-512.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-gpt-2) | [Reference](https://github.com/huggingface/pytorch-transformers)
## 기타
* **Exermote** - iPhone을 오른쪽 위팔에 착용했을 때 수행 중인 운동을 예측합니다. [Download](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Demo](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Reference](http://lausbert.com/2017/08/03/exermote/)
* **GestureAI** - 주어진 위치와 장르를 기반으로 아티스트를 추천합니다. [Download](https://goo.gl/avdMjD) | [Demo](https://github.com/akimach/GestureAI-CoreML-iOS) | [Reference](https://github.com/akimach/GestureAI-iOS/tree/master/GestureAI)
* **Artists Recommendation** - 주어진 위치와 장르를 기반으로 아티스트를 추천합니다. [Download](https://github.com/agnosticdev/Blog-Examples/blob/master/UsingCoreMLtoCreateASongRecommendationEngine/Artist.mlmodel) | [Demo]() | [Reference](https://www.agnosticdev.com/blog-entry/python/using-scikit-learn-and-coreml-create-music-recommendation-engine)
* **ChordSuggester** - 입력된 코드 진행을 기반으로 가장 가능성 높은 다음 코드를 예측합니다. [Download](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/blob/main/MLChordSuggester.mlpackage.zip) | [Demo](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/tree/main) | [Reference](https://medium.com/@huanlui/chordsuggester-i-3a1261d4ea9e)

## 음성 처리
* **Streaming ASR** – iOS용 실시간 스트리밍 음성 인식 엔진. Fast Conformer + CTC를 사용하며 완전히 기기 내에서 실행됩니다.  
  [Download](https://github.com/Otosaku/OtosakuStreamingASR-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuStreamingASR-iOS) | [Reference](https://github.com/Otosaku/OtosakuStreamingASR-iOS)
* **Keyword Spotting (KWS)** – 가벼운 CRNN 아키텍처를 사용하는 온디바이스 키워드 감지 엔진으로, 모바일 기기에 맞게 최적화되었습니다.  
  [Download](https://github.com/Otosaku/OtosakuKWS-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuKWS-iOS) | [Reference](https://github.com/Otosaku/OtosakuKWS-iOS)

# 시각화 도구
*CoreML 모델을 시각화하는 데 도움되는 도구*
* [Netron](https://lutzroeder.github.io/Netron)

# 지원 형식
*Core ML로 변환할 수 있는 모델 형식 목록 및 예제*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# 골든 컬렉션
*Core ML로 변환할 수 있는 머신러닝 모델 컬렉션*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Caffe 형식 모델의 큰 목록.
* [TensorFlow Models](https://github.com/tensorflow/models) - TensorFlow용 모델.
* [TensorFlow Slim Models](https://github.com/tensorflow/models/tree/master/research/slim/README.md) - 또 다른 TensorFlow 모델 컬렉션.
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - MXNet 모델 컬렉션.

*Core ML로 변환할 수 있는 개별 머신러닝 모델. 변환됨에 따라 목록을 계속 조정할 것입니다.*
* [LaMem](https://github.com/MiyainNYC/Visual-Memorability-through-Caffe) 이미지의 기억가능성을 점수화합니다.
* [ILGnet](https://github.com/BestiVictory/ILGnet) 이미지의 미학적 평가.
* [Colorization](https://github.com/richzhang/colorization) 심층 신경망을 사용한 자동 채색.
* [Illustration2Vec](https://github.com/rezoo/illustration2vec) 주어진 일러스트에서 태그 집합을 추정하고 의미 특징 벡터를 추출합니다.
* [CTPN](https://github.com/tianzhi0549/CTPN) 자연 이미지에서 텍스트 감지.
* [Image Analogy](https://github.com/msracver/Deep-Image-Analogy) 두 입력 이미지 사이의 의미적으로 유의미한 조밀한 대응을 찾습니다.
* [iLID](https://github.com/twerkmeister/iLID) 자동 언어 식별.
* [Fashion Detection](https://github.com/liuziwei7/fashion-detection) 이미지에서 의류 감지.
* [Saliency](https://github.com/imatge-upc/saliency-2016-cvpr) 이미지에서 두드러진 영역을 예측하는 작업은 전통적으로 손으로 만든 특징으로 다루어져 왔습니다.
* [Face Detection](https://github.com/DolotovEvgeniy/DeepPyramid) 이미지에서 얼굴을 감지합니다.
* [mtcnn](https://github.com/CongWeilin/mtcnn-caffe) 얼굴 검출 및 정렬 통합.
* [deephorizon](https://github.com/scottworkman/deephorizon) 단일 이미지 지평선 추정.

# 기여 및 라이선스
* [가이드 보기](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* MIT 라이선스 하에 배포됩니다. 자세한 내용은 LICENSE를 참조하세요.
