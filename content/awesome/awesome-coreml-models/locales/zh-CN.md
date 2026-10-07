<!--
Title: Awesome Core ML Models
Description: A curated list of machine learning models in Core ML format.
Author: Kedan Li
-->

<p align="center">
<img src="images/coreml.png" width="329" height="295"/>
</p>


自 iOS 11 起，Apple 发布了 Core ML 框架，以帮助开发者将机器学习模型集成到应用中。[官方文档](https://developer.apple.com/documentation/coreml)

我们整理了规模最大的 Core ML 格式机器学习模型集合，以帮助 iOS、macOS、tvOS 和 watchOS 开发者试验机器学习技术。

如果你已经转换了一个 Core ML 模型，欢迎提交[拉取请求](https://github.com/likedan/Awesome-CoreML-Models/compare)。

最近，我们加入了可视化工具。其中一个是 [Netron](https://lutzroeder.github.io/Netron)。

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# 模型

## 图像 - 元数据/文本
*接收图像数据作为输入，并输出关于该图像的有用信息的模型。*
* **TextDetection** - 使用 Vision 内置模型实时检测文本。 [Download]() | [Demo](https://github.com/tucan9389/TextDetection-CoreML) | [Reference](https://developer.apple.com/documentation/vision)
* **PhotoAssessment** - 使用 Core ML 和 Metal 进行照片评估。 [Download](https://github.com/yulingtianxia/PhotoAssessment/blob/master/PhotoAssessment-Sample/Sources/NIMANasnet.mlmodel) | [Demo](https://github.com/yulingtianxia/PhotoAssessment) | [Reference](https://arxiv.org/abs/1709.05424)
* **PoseEstimation** - 从图片中估算人体姿态，适用于移动端。 [Download](https://github.com/edvardHua/PoseEstimationForMobile/tree/master/release) | [Demo](https://github.com/tucan9389/PoseEstimation-CoreML) | [Reference](https://github.com/edvardHua/PoseEstimationForMobile)
* **MobileNet** - 检测图像中主要存在的物体。 [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/hollance/MobileNet-CoreML) | [Reference](https://arxiv.org/abs/1704.04861)
* **Places CNN** - 从 205 个类别（如卧室、森林、海岸等）中检测图像场景。 [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/chenyi1989/CoreMLDemo) | [Reference](http://places.csail.mit.edu/index.html)
* **Inception v3** - 检测图像中主要存在的物体。 [Download](https://github.com/yulingtianxia/Core-ML-Sample/blob/master/CoreMLSample/Inceptionv3.mlmodel) | [Demo](https://github.com/yulingtianxia/Core-ML-Sample/) | [Reference](https://arxiv.org/abs/1512.00567)
* **ResNet50** - 检测图像中主要存在的物体。 [Download](https://github.com/ytakzk/CoreML-samples/blob/master/CoreML-samples/Resnet50.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](https://arxiv.org/abs/1512.03385)
* **VGG16** - 检测图像中主要存在的物体。 [Download](https://docs-assets.developer.apple.com/coreml/models/VGG16.mlmodel) | [Demo](https://github.com/alaphao/CoreMLExample) | [Reference](https://arxiv.org/abs/1409.1556)
* **Car Recognition** - 预测汽车的品牌与型号。 [Download](https://github.com/likedan/Core-ML-Car-Recognition/blob/master/Convert/CarRecognition.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)
* **YOLO** - 识别给定图像中物体的类别及其所在位置。 [Download](https://github.com/hollance/YOLO-CoreML-MPSNNGraph/blob/master/TinyYOLO-CoreML/TinyYOLO-CoreML/TinyYOLO.mlmodel) | [Demo](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) | [Reference](http://machinethink.net/blog/object-detection-with-yolo)
* **AgeNet** - 根据人像预测一个人的年龄。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mT1J3T1BEeWx4TWc/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **GenderNet** - 根据人像预测一个人的性别。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mYkNsZHlyc2ZuaFk/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **MNIST** - 根据图像预测手写（绘制）的数字。 [Download](https://github.com/ph1ps/MNIST-CoreML/raw/master/MNISTPrediction/MNIST.mlmodel) | [Demo](https://github.com/ph1ps/MNIST-CoreML) | [Reference](http://yann.lecun.com/exdb/mnist/)
* **EmotionNet** - 根据人像预测一个人的情绪。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mTlYtRGdXNFlpWDQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)
* **SentimentVision** - 根据图像预测正面或负面情绪。 [Download](https://drive.google.com/open?id=0B1ghKa_MYL6mZ0dITW5uZlgyNTg) | [Demo](https://github.com/cocoa-ai/SentimentVisionDemo) | [Reference](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)
* **Food101** - 根据图像预测食物类型。 [Download](https://drive.google.com/open?id=0B5TjkH3njRqnVjBPZGRZbkNITjA) | [Demo](https://github.com/ph1ps/Food101-CoreML) | [Reference](http://visiir.lip6.fr/explore)
* **Oxford102** - 根据图像检测花卉类型。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FlowersVisionDemo) | [Reference](http://jimgoo.com/flower-power/)
* **FlickrStyle** - 检测图像的艺术风格。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/StylesVisionDemo) | [Reference](http://sergeykarayev.com/files/1311.3715v3.pdf)
* **RN1015k500** - 预测照片拍摄的地点。 [Download](https://s3.amazonaws.com/aws-bigdata-blog/artifacts/RN1015k500/RN1015k500.mlmodel) | [Demo](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) | [Reference](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)
* **Nudity** - 将图像分类为 NSFW（裸体）或 SFW（非裸体）
 [Download](https://drive.google.com/open?id=0B5TjkH3njRqncDJpdDB1Tkl2S2s) | [Demo](https://github.com/ph1ps/Nudity-CoreML) | [Reference](https://github.com/yahoo/open_nsfw)
* **TextRecognition (ML Kit)** - 使用 ML Kit 内置模型实时识别文本。 [Download]() | [Demo](https://github.com/tucan9389/TextRecognition-MLKit) | [Reference](https://firebase.google.com/docs/ml-kit/ios/recognize-text)
* **ImageSegmentation** - 将相机画面或图像的像素分割为一组预定义的类别。 [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/ImageSegmentation-CoreML) | [Reference](https://github.com/tensorflow/models/tree/master/research/deeplab)
* **DepthPrediction** - 从单张图像预测深度。 [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/DepthPrediction-CoreML) | [Reference](https://github.com/iro-cp/FCRN-DepthPrediction)

## 图像 - 图像
*对图像进行变换的模型。*
* **HED** - 从彩色图像中检测嵌套边缘。 [Download](https://github.com/s1ddok/HED-CoreML/blob/master/HED-CoreML/Models/HED_so.mlmodel) | [Demo](https://github.com/s1ddok/HED-CoreML) | [Reference](http://dl.acm.org/citation.cfm?id=2654889)
* **AnimeScale2x** - 处理双三次插值的动漫风格艺术作品 [Download](https://github.com/imxieyi/waifu2x-ios/blob/master/waifu2x/models/anime_noise0_model.mlmodel) | [Demo](https://github.com/imxieyi/waifu2x-ios) | [Reference](https://arxiv.org/abs/1501.00092)

## 文本 - 元数据/文本
*处理文本数据的模型*
* **Sentiment Polarity** - 根据句子预测正面或负面情绪。 [Download](https://github.com/cocoa-ai/SentimentCoreMLDemo/raw/master/SentimentPolarity/Resources/SentimentPolarity.mlmodel) | [Demo](https://github.com/cocoa-ai/SentimentCoreMLDemo) | [Reference](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)
* **DocumentClassification** - 将新闻文章分类为 5 个类别之一。 [Download](https://github.com/toddkramer/DocumentClassifier/blob/master/Sources/DocumentClassification.mlmodel) | [Demo](https://github.com/toddkramer/DocumentClassifier) | [Reference](https://github.com/toddkramer/DocumentClassifier/)
* **iMessage Spam Detection** - 检测一条消息是否为垃圾消息。 [Download](https://github.com/gkswamy98/imessage-spam-detection/blob/master/MessageClassifier.mlmodel) | [Demo](https://github.com/gkswamy98/imessage-spam-detection/tree/master) | [Reference](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)
* **NamesDT** - 使用 DecisionTreeClassifier 进行性别分类 [Download](https://github.com/cocoa-ai/NamesCoreMLDemo/blob/master/Names/Resources/NamesDT.mlmodel) | [Demo](https://github.com/cocoa-ai/NamesCoreMLDemo) | [Reference](http://nlpforhackers.io/)
* **Personality Detection** - 根据用户文档（句子）预测性格。 [Download](https://github.com/novinfard/profiler-sentiment-analysis/tree/master/ios_app/ProfilerSA/ML%20Models) | [Demo](https://github.com/novinfard/profiler-sentiment-analysis/) | [Reference](https://github.com/novinfard/profiler-sentiment-analysis/blob/master/dissertation-v6.pdf)
* **BERT for Question answering** - BERT 问答的 Swift Core ML 3 实现 [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/BERTSQUADFP16.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-bert) | [Reference](https://github.com/huggingface/pytorch-transformers#run_squadpy-fine-tuning-on-squad-for-question-answering)
* **GPT-2** - OpenAI GPT-2 文本生成（Core ML 3） [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/gpt2-512.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-gpt-2) | [Reference](https://github.com/huggingface/pytorch-transformers)
## 杂项
* **Exermote** - 当 iPhone 佩戴在右大臂上时，预测正在进行的运动。 [Download](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Demo](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Reference](http://lausbert.com/2017/08/03/exermote/)
* **GestureAI** - 根据给定位置和流派推荐艺术家。 [Download](https://goo.gl/avdMjD) | [Demo](https://github.com/akimach/GestureAI-CoreML-iOS) | [Reference](https://github.com/akimach/GestureAI-iOS/tree/master/GestureAI)
* **Artists Recommendation** - 根据给定位置和流派推荐艺术家。 [Download](https://github.com/agnosticdev/Blog-Examples/blob/master/UsingCoreMLtoCreateASongRecommendationEngine/Artist.mlmodel) | [Demo]() | [Reference](https://www.agnosticdev.com/blog-entry/python/using-scikit-learn-and-coreml-create-music-recommendation-engine)
* **ChordSuggester** - 根据输入的和弦进行预测最有可能的下一个和弦。 [Download](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/blob/main/MLChordSuggester.mlpackage.zip) | [Demo](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/tree/main) | [Reference](https://medium.com/@huanlui/chordsuggester-i-3a1261d4ea9e)

## 语音处理
* **Streaming ASR** – 面向 iOS 的实时流式语音识别引擎。使用 Fast Conformer + CTC，完全在设备端运行。  
  [Download](https://github.com/Otosaku/OtosakuStreamingASR-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuStreamingASR-iOS) | [Reference](https://github.com/Otosaku/OtosakuStreamingASR-iOS)
* **Keyword Spotting (KWS)** – 基于轻量级 CRNN 架构的端侧关键词唤醒引擎，针对移动设备优化。  
  [Download](https://github.com/Otosaku/OtosakuKWS-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuKWS-iOS) | [Reference](https://github.com/Otosaku/OtosakuKWS-iOS)

# 可视化工具
*帮助可视化 CoreML 模型的工具*
* [Netron](https://lutzroeder.github.io/Netron)

# 支持的格式
*可转换为 Core ML 的模型格式列表及示例*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# 黄金收藏
*可转换为 Core ML 的机器学习模型集合*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Caffe 格式模型的大型列表。
* [TensorFlow Models](https://github.com/tensorflow/models) - TensorFlow 的模型。
* [TensorFlow Slim Models](https://github.com/tensorflow/models/tree/master/research/slim/README.md) - 另一个 TensorFlow 模型集合。
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - MXNet 模型集合。

*可转换为 Core ML 的单个机器学习模型。随着它们被转换，我们会不断调整此列表。*
* [LaMem](https://github.com/MiyainNYC/Visual-Memorability-through-Caffe) 为图片的可记忆性打分。
* [ILGnet](https://github.com/BestiVictory/ILGnet) 对图像进行美学评价。
* [Colorization](https://github.com/richzhang/colorization) 使用深度神经网络自动上色。
* [Illustration2Vec](https://github.com/rezoo/illustration2vec) 从给定插画中估计一组标签并提取语义特征向量。
* [CTPN](https://github.com/tianzhi0549/CTPN) 在自然图像中检测文本。
* [Image Analogy](https://github.com/msracver/Deep-Image-Analogy) 在两幅输入图像之间寻找语义上有意义的密集对应关系。
* [iLID](https://github.com/twerkmeister/iLID) 自动语言识别。
* [Fashion Detection](https://github.com/liuziwei7/fashion-detection) 从图像中检测衣物。
* [Saliency](https://github.com/imatge-upc/saliency-2016-cvpr) 图像中显著区域的预测传统上使用手工设计的特征来完成。
* [Face Detection](https://github.com/DolotovEvgeniy/DeepPyramid) 从图像中检测人脸。
* [mtcnn](https://github.com/CongWeilin/mtcnn-caffe) 联合人脸检测与对齐。
* [deephorizon](https://github.com/scottworkman/deephorizon) 单图像地平线估计。

# 贡献与许可
* [查看指南](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* 基于 MIT 许可分发。更多详情请参阅 LICENSE。
