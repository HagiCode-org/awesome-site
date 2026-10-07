<!--
Title: Awesome Core ML Models
Description: A curated list of machine learning models in Core ML format.
Author: Kedan Li
-->

<p align="center">
<img src="images/coreml.png" width="329" height="295"/>
</p>


iOS 11 以降、Apple は開発者が機械学習モデルをアプリに統合できるよう Core ML フレームワークをリリースしました。 [公式ドキュメント](https://developer.apple.com/documentation/coreml)

私たちは Core ML 形式の機械学習モデルの中で最大のコレクションを作成し、iOS、macOS、tvOS、watchOS の開発者が機械学習の手法を試せるよう支援しています。

Core ML モデルを変換した方は、ぜひ[プルリクエスト](https://github.com/likedan/Awesome-CoreML-Models/compare)を送信してください。

最近、可視化ツールを追加しました。その一つが [Netron](https://lutzroeder.github.io/Netron) です。

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# モデル

## 画像 - メタデータ/テキスト
*画像データを入力として受け取り、画像に関する有用な情報を出力するモデル。*
* **TextDetection** - Vision 組み込みモデルを使用してテキストをリアルタイムに検出します。 [Download]() | [Demo](https://github.com/tucan9389/TextDetection-CoreML) | [Reference](https://developer.apple.com/documentation/vision)
* **PhotoAssessment** - Core ML と Metal を使用した写真評価。 [Download](https://github.com/yulingtianxia/PhotoAssessment/blob/master/PhotoAssessment-Sample/Sources/NIMANasnet.mlmodel) | [Demo](https://github.com/yulingtianxia/PhotoAssessment) | [Reference](https://arxiv.org/abs/1709.05424)
* **PoseEstimation** - モバイル向けに写真から人のポーズを推定します。 [Download](https://github.com/edvardHua/PoseEstimationForMobile/tree/master/release) | [Demo](https://github.com/tucan9389/PoseEstimation-CoreML) | [Reference](https://github.com/edvardHua/PoseEstimationForMobile)
* **MobileNet** - 画像内に存在する主要な物体を検出します。 [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/hollance/MobileNet-CoreML) | [Reference](https://arxiv.org/abs/1704.04861)
* **Places CNN** - 寝室、森林、海岸など 205 カテゴリから画像のシーンを検出します。 [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/chenyi1989/CoreMLDemo) | [Reference](http://places.csail.mit.edu/index.html)
* **Inception v3** - 画像内に存在する主要な物体を検出します。 [Download](https://github.com/yulingtianxia/Core-ML-Sample/blob/master/CoreMLSample/Inceptionv3.mlmodel) | [Demo](https://github.com/yulingtianxia/Core-ML-Sample/) | [Reference](https://arxiv.org/abs/1512.00567)
* **ResNet50** - 画像内に存在する主要な物体を検出します。 [Download](https://github.com/ytakzk/CoreML-samples/blob/master/CoreML-samples/Resnet50.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](https://arxiv.org/abs/1512.03385)
* **VGG16** - 画像内に存在する主要な物体を検出します。 [Download](https://docs-assets.developer.apple.com/coreml/models/VGG16.mlmodel) | [Demo](https://github.com/alaphao/CoreMLExample) | [Reference](https://arxiv.org/abs/1409.1556)
* **Car Recognition** - 車のブランドとモデルを予測します。 [Download](https://github.com/likedan/Core-ML-Car-Recognition/blob/master/Convert/CarRecognition.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)
* **YOLO** - 画像内に存在する物体が何で、どこにあるかを認識します。 [Download](https://github.com/hollance/YOLO-CoreML-MPSNNGraph/blob/master/TinyYOLO-CoreML/TinyYOLO-CoreML/TinyYOLO.mlmodel) | [Demo](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) | [Reference](http://machinethink.net/blog/object-detection-with-yolo)
* **AgeNet** - 肖像画から人の年齢を予測します。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mT1J3T1BEeWx4TWc/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **GenderNet** - 肖像画から人の性別を予測します。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mYkNsZHlyc2ZuaFk/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **MNIST** - 画像から手書き（描画）された数字を予測します。 [Download](https://github.com/ph1ps/MNIST-CoreML/raw/master/MNISTPrediction/MNIST.mlmodel) | [Demo](https://github.com/ph1ps/MNIST-CoreML) | [Reference](http://yann.lecun.com/exdb/mnist/)
* **EmotionNet** - 肖像画から人の感情を予測します。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mTlYtRGdXNFlpWDQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)
* **SentimentVision** - 画像からポジティブまたはネガティブな感情を予測します。 [Download](https://drive.google.com/open?id=0B1ghKa_MYL6mZ0dITW5uZlgyNTg) | [Demo](https://github.com/cocoa-ai/SentimentVisionDemo) | [Reference](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)
* **Food101** - 画像から食品の種類を予測します。 [Download](https://drive.google.com/open?id=0B5TjkH3njRqnVjBPZGRZbkNITjA) | [Demo](https://github.com/ph1ps/Food101-CoreML) | [Reference](http://visiir.lip6.fr/explore)
* **Oxford102** - 画像から花の種類を検出します。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FlowersVisionDemo) | [Reference](http://jimgoo.com/flower-power/)
* **FlickrStyle** - 画像の芸術的スタイルを検出します。 [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/StylesVisionDemo) | [Reference](http://sergeykarayev.com/files/1311.3715v3.pdf)
* **RN1015k500** - 写真が撮影された場所を予測します。 [Download](https://s3.amazonaws.com/aws-bigdata-blog/artifacts/RN1015k500/RN1015k500.mlmodel) | [Demo](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) | [Reference](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)
* **Nudity** - 画像を NSFW（ヌード）または SFW（非ヌード）に分類します
 [Download](https://drive.google.com/open?id=0B5TjkH3njRqncDJpdDB1Tkl2S2s) | [Demo](https://github.com/ph1ps/Nudity-CoreML) | [Reference](https://github.com/yahoo/open_nsfw)
* **TextRecognition (ML Kit)** - ML Kit 組み込みモデルを使用してテキストをリアルタイムに認識します。 [Download]() | [Demo](https://github.com/tucan9389/TextRecognition-MLKit) | [Reference](https://firebase.google.com/docs/ml-kit/ios/recognize-text)
* **ImageSegmentation** - カメラフレームまたは画像のピクセルを事前定義されたクラス群に分割します。 [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/ImageSegmentation-CoreML) | [Reference](https://github.com/tensorflow/models/tree/master/research/deeplab)
* **DepthPrediction** - 単一の画像から深度を予測します。 [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/DepthPrediction-CoreML) | [Reference](https://github.com/iro-cp/FCRN-DepthPrediction)

## 画像 - 画像
*画像を変換するモデル。*
* **HED** - カラー画像からネストされたエッジを検出します。 [Download](https://github.com/s1ddok/HED-CoreML/blob/master/HED-CoreML/Models/HED_so.mlmodel) | [Demo](https://github.com/s1ddok/HED-CoreML) | [Reference](http://dl.acm.org/citation.cfm?id=2654889)
* **AnimeScale2x** - バイキュービック補間で拡大されたアニメ風アートを処理します [Download](https://github.com/imxieyi/waifu2x-ios/blob/master/waifu2x/models/anime_noise0_model.mlmodel) | [Demo](https://github.com/imxieyi/waifu2x-ios) | [Reference](https://arxiv.org/abs/1501.00092)

## テキスト - メタデータ/テキスト
*テキストデータを処理するモデル*
* **Sentiment Polarity** - 文からポジティブまたはネガティブな感情を予測します。 [Download](https://github.com/cocoa-ai/SentimentCoreMLDemo/raw/master/SentimentPolarity/Resources/SentimentPolarity.mlmodel) | [Demo](https://github.com/cocoa-ai/SentimentCoreMLDemo) | [Reference](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)
* **DocumentClassification** - ニュース記事を 5 つのカテゴリのいずれかに分類します。 [Download](https://github.com/toddkramer/DocumentClassifier/blob/master/Sources/DocumentClassification.mlmodel) | [Demo](https://github.com/toddkramer/DocumentClassifier) | [Reference](https://github.com/toddkramer/DocumentClassifier/)
* **iMessage Spam Detection** - メッセージがスパムかどうかを検出します。 [Download](https://github.com/gkswamy98/imessage-spam-detection/blob/master/MessageClassifier.mlmodel) | [Demo](https://github.com/gkswamy98/imessage-spam-detection/tree/master) | [Reference](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)
* **NamesDT** - DecisionTreeClassifier を使用した性別分類 [Download](https://github.com/cocoa-ai/NamesCoreMLDemo/blob/master/Names/Resources/NamesDT.mlmodel) | [Demo](https://github.com/cocoa-ai/NamesCoreMLDemo) | [Reference](http://nlpforhackers.io/)
* **Personality Detection** - ユーザーの文書（文章）に基づいて性格を予測します。 [Download](https://github.com/novinfard/profiler-sentiment-analysis/tree/master/ios_app/ProfilerSA/ML%20Models) | [Demo](https://github.com/novinfard/profiler-sentiment-analysis/) | [Reference](https://github.com/novinfard/profiler-sentiment-analysis/blob/master/dissertation-v6.pdf)
* **BERT for Question answering** - 質問応答のための BERT の Swift Core ML 3 実装 [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/BERTSQUADFP16.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-bert) | [Reference](https://github.com/huggingface/pytorch-transformers#run_squadpy-fine-tuning-on-squad-for-question-answering)
* **GPT-2** - OpenAI GPT-2 のテキスト生成（Core ML 3） [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/gpt2-512.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-gpt-2) | [Reference](https://github.com/huggingface/pytorch-transformers)
## その他
* **Exermote** - iPhone を右上腕に着用しているときのエクササイズを予測します。 [Download](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Demo](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Reference](http://lausbert.com/2017/08/03/exermote/)
* **GestureAI** - 指定された場所とジャンルに基づいてアーティストを推薦します。 [Download](https://goo.gl/avdMjD) | [Demo](https://github.com/akimach/GestureAI-CoreML-iOS) | [Reference](https://github.com/akimach/GestureAI-iOS/tree/master/GestureAI)
* **Artists Recommendation** - 指定された場所とジャンルに基づいてアーティストを推薦します。 [Download](https://github.com/agnosticdev/Blog-Examples/blob/master/UsingCoreMLtoCreateASongRecommendationEngine/Artist.mlmodel) | [Demo]() | [Reference](https://www.agnosticdev.com/blog-entry/python/using-scikit-learn-and-coreml-create-music-recommendation-engine)
* **ChordSuggester** - 入力されたコード進行に基づいて最も可能性の高い次のコードを予測します。 [Download](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/blob/main/MLChordSuggester.mlpackage.zip) | [Demo](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/tree/main) | [Reference](https://medium.com/@huanlui/chordsuggester-i-3a1261d4ea9e)

## 音声処理
* **Streaming ASR** – iOS 向けのリアルタイムストリーミング音声認識エンジン。Fast Conformer + CTC を使用し、完全に端末内で動作します。  
  [Download](https://github.com/Otosaku/OtosakuStreamingASR-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuStreamingASR-iOS) | [Reference](https://github.com/Otosaku/OtosakuStreamingASR-iOS)
* **Keyword Spotting (KWS)** – 軽量な CRNN アーキテクチャを使用したオンデバイスのキーワード検出エンジンで、モバイル向けに最適化されています。  
  [Download](https://github.com/Otosaku/OtosakuKWS-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuKWS-iOS) | [Reference](https://github.com/Otosaku/OtosakuKWS-iOS)

# 可視化ツール
*CoreML モデルの可視化に役立つツール*
* [Netron](https://lutzroeder.github.io/Netron)

# 対応フォーマット
*Core ML に変換可能なモデルフォーマットの一覧と例*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# 黄金のコレクション
*Core ML に変換可能な機械学習モデルのコレクション*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Caffe 形式のモデルの大きなリスト。
* [TensorFlow Models](https://github.com/tensorflow/models) - TensorFlow 用のモデル。
* [TensorFlow Slim Models](https://github.com/tensorflow/models/tree/master/research/slim/README.md) - 別の TensorFlow モデルコレクション。
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - MXNet モデルのコレクション。

*Core ML に変換可能な個別の機械学習モデル。変換されるにつれてリストを調整し続けます。*
* [LaMem](https://github.com/MiyainNYC/Visual-Memorability-through-Caffe) 画像の記憶に残りやすさをスコアリングします。
* [ILGnet](https://github.com/BestiVictory/ILGnet) 画像の美的評価。
* [Colorization](https://github.com/richzhang/colorization) 深層ニューラルネットワークを使用した自動着色。
* [Illustration2Vec](https://github.com/rezoo/illustration2vec) 与えられたイラストから一連のタグを推定し、意味特徴ベクトルを抽出します。
* [CTPN](https://github.com/tianzhi0549/CTPN) 自然画像内のテキスト検出。
* [Image Analogy](https://github.com/msracver/Deep-Image-Analogy) 2 つの入力画像間の意味的に有意な密な対応を見つけます。
* [iLID](https://github.com/twerkmeister/iLID) 自動話し言葉識別。
* [Fashion Detection](https://github.com/liuziwei7/fashion-detection) 画像からの衣服検出。
* [Saliency](https://github.com/imatge-upc/saliency-2016-cvpr) 画像内の顕著領域の予測は、従来は手作りの特徴で扱われてきました。
* [Face Detection](https://github.com/DolotovEvgeniy/DeepPyramid) 画像から顔を検出します。
* [mtcnn](https://github.com/CongWeilin/mtcnn-caffe) 顔検出とアライメントの統合。
* [deephorizon](https://github.com/scottworkman/deephorizon) 単一画像の地平線推定。

# コントリビューションとライセンス
* [ガイドを見る](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* MIT ライセンスの下で配布されています。詳細は LICENSE を参照してください。
