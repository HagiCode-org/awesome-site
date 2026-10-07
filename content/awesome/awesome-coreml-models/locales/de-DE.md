# Core ML Models

<p align="center">
<img src="images/coreml.png" width="329" height="295"/>
</p>


Seit iOS 11 hat Apple das Core-ML-Framework veröffentlicht, um Entwicklern die Integration von Machine-Learning-Modellen in Apps zu erleichtern. [Die offizielle Dokumentation](https://developer.apple.com/documentation/coreml)

Wir haben die größte Sammlung von Machine-Learning-Modellen im Core-ML-Format zusammengestellt, um iOS-, macOS-, tvOS- und watchOS-Entwicklern beim Experimentieren mit Machine-Learning-Techniken zu helfen.

Wenn du ein Core-ML-Modell konvertiert hast, stelle gerne eine [Pull-Anfrage](https://github.com/likedan/Awesome-CoreML-Models/compare).

Kürzlich haben wir Visualisierungstools hinzugefügt. Hier ist eines: [Netron](https://lutzroeder.github.io/Netron).

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# Modelle

## Bild - Metadaten/Text
*Modelle, die Bilddaten als Eingabe nehmen und nützliche Informationen über das Bild ausgeben.*
* **TextDetection** - Erkennung von Text in Echtzeit mit dem eingebauten Vision-Modell. [Download]() | [Demo](https://github.com/tucan9389/TextDetection-CoreML) | [Reference](https://developer.apple.com/documentation/vision)
* **PhotoAssessment** - Foto-Bewertung mit Core ML und Metal. [Download](https://github.com/yulingtianxia/PhotoAssessment/blob/master/PhotoAssessment-Sample/Sources/NIMANasnet.mlmodel) | [Demo](https://github.com/yulingtianxia/PhotoAssessment) | [Reference](https://arxiv.org/abs/1709.05424)
* **PoseEstimation** - Schätzung der menschlichen Pose aus einem Bild für Mobilgeräte. [Download](https://github.com/edvardHua/PoseEstimationForMobile/tree/master/release) | [Demo](https://github.com/tucan9389/PoseEstimation-CoreML) | [Reference](https://github.com/edvardHua/PoseEstimationForMobile)
* **MobileNet** - Erkennt die vorherrschenden Objekte in einem Bild. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/hollance/MobileNet-CoreML) | [Reference](https://arxiv.org/abs/1704.04861)
* **Places CNN** - Erkennt die Szene eines Bildes aus 205 Kategorien wie Schlafzimmer, Wald, Küste usw. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/chenyi1989/CoreMLDemo) | [Reference](http://places.csail.mit.edu/index.html)
* **Inception v3** - Erkennt die vorherrschenden Objekte in einem Bild. [Download](https://github.com/yulingtianxia/Core-ML-Sample/blob/master/CoreMLSample/Inceptionv3.mlmodel) | [Demo](https://github.com/yulingtianxia/Core-ML-Sample/) | [Reference](https://arxiv.org/abs/1512.00567)
* **ResNet50** - Erkennt die vorherrschenden Objekte in einem Bild. [Download](https://github.com/ytakzk/CoreML-samples/blob/master/CoreML-samples/Resnet50.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](https://arxiv.org/abs/1512.03385)
* **VGG16** - Erkennt die vorherrschenden Objekte in einem Bild. [Download](https://docs-assets.developer.apple.com/coreml/models/VGG16.mlmodel) | [Demo](https://github.com/alaphao/CoreMLExample) | [Reference](https://arxiv.org/abs/1409.1556)
* **Car Recognition** - Sagt Marke und Modell eines Autos voraus. [Download](https://github.com/likedan/Core-ML-Car-Recognition/blob/master/Convert/CarRecognition.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)
* **YOLO** - Erkennt, welche Objekte sich in einem Bild befinden und wo sie sind. [Download](https://github.com/hollance/YOLO-CoreML-MPSNNGraph/blob/master/TinyYOLO-CoreML/TinyYOLO-CoreML/TinyYOLO.mlmodel) | [Demo](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) | [Reference](http://machinethink.net/blog/object-detection-with-yolo)
* **AgeNet** - Sagt das Alter einer Person anhand ihres Porträts voraus. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mT1J3T1BEeWx4TWc/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **GenderNet** - Sagt das Geschlecht einer Person anhand ihres Porträts voraus. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mYkNsZHlyc2ZuaFk/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **MNIST** - Sagt handgeschriebene (gezeichnete) Ziffern aus Bildern voraus. [Download](https://github.com/ph1ps/MNIST-CoreML/raw/master/MNISTPrediction/MNIST.mlmodel) | [Demo](https://github.com/ph1ps/MNIST-CoreML) | [Reference](http://yann.lecun.com/exdb/mnist/)
* **EmotionNet** - Sagt die Emotion einer Person anhand ihres Porträts voraus. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mTlYtRGdXNFlpWDQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)
* **SentimentVision** - Sagt positive oder negative Stimmungen aus Bildern voraus. [Download](https://drive.google.com/open?id=0B1ghKa_MYL6mZ0dITW5uZlgyNTg) | [Demo](https://github.com/cocoa-ai/SentimentVisionDemo) | [Reference](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)
* **Food101** - Sagt die Art der Lebensmittel aus Bildern voraus. [Download](https://drive.google.com/open?id=0B5TjkH3njRqnVjBPZGRZbkNITjA) | [Demo](https://github.com/ph1ps/Food101-CoreML) | [Reference](http://visiir.lip6.fr/explore)
* **Oxford102** - Erkennt die Art der Blumen aus Bildern. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FlowersVisionDemo) | [Reference](http://jimgoo.com/flower-power/)
* **FlickrStyle** - Erkennt den künstlerischen Stil von Bildern. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/StylesVisionDemo) | [Reference](http://sergeykarayev.com/files/1311.3715v3.pdf)
* **RN1015k500** - Sagt den Ort voraus, an dem ein Foto aufgenommen wurde. [Download](https://s3.amazonaws.com/aws-bigdata-blog/artifacts/RN1015k500/RN1015k500.mlmodel) | [Demo](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) | [Reference](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)
* **Nudity** - Klassifiziert ein Bild als NSFW (nackt) oder SFW (nicht nackt)
 [Download](https://drive.google.com/open?id=0B5TjkH3njRqncDJpdDB1Tkl2S2s) | [Demo](https://github.com/ph1ps/Nudity-CoreML) | [Reference](https://github.com/yahoo/open_nsfw)
* **TextRecognition (ML Kit)** - Erkennung von Text in Echtzeit mit dem eingebauten ML-Kit-Modell. [Download]() | [Demo](https://github.com/tucan9389/TextRecognition-MLKit) | [Reference](https://firebase.google.com/docs/ml-kit/ios/recognize-text)
* **ImageSegmentation** - Segmentiert die Pixel eines Kamerabildes oder Fotos in eine vordefinierte Menge von Klassen. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/ImageSegmentation-CoreML) | [Reference](https://github.com/tensorflow/models/tree/master/research/deeplab)
* **DepthPrediction** - Sagt die Tiefe aus einem einzelnen Bild voraus. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/DepthPrediction-CoreML) | [Reference](https://github.com/iro-cp/FCRN-DepthPrediction)

## Bild - Bild
*Modelle, die Bilder transformieren.*
* **HED** - Erkennt verschachtelte Kanten aus einem Farbbild. [Download](https://github.com/s1ddok/HED-CoreML/blob/master/HED-CoreML/Models/HED_so.mlmodel) | [Demo](https://github.com/s1ddok/HED-CoreML) | [Reference](http://dl.acm.org/citation.cfm?id=2654889)
* **AnimeScale2x** - Verarbeitet eine bikubisch skalierte Anime-Zeichnung [Download](https://github.com/imxieyi/waifu2x-ios/blob/master/waifu2x/models/anime_noise0_model.mlmodel) | [Demo](https://github.com/imxieyi/waifu2x-ios) | [Reference](https://arxiv.org/abs/1501.00092)

## Text - Metadaten/Text
*Modelle, die Textdaten verarbeiten*
* **Sentiment Polarity** - Sagt positive oder negative Stimmungen aus Sätzen voraus. [Download](https://github.com/cocoa-ai/SentimentCoreMLDemo/raw/master/SentimentPolarity/Resources/SentimentPolarity.mlmodel) | [Demo](https://github.com/cocoa-ai/SentimentCoreMLDemo) | [Reference](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)
* **DocumentClassification** - Klassifiziert Nachrichtenartikel in eine von 5 Kategorien. [Download](https://github.com/toddkramer/DocumentClassifier/blob/master/Sources/DocumentClassification.mlmodel) | [Demo](https://github.com/toddkramer/DocumentClassifier) | [Reference](https://github.com/toddkramer/DocumentClassifier/)
* **iMessage Spam Detection** - Erkennt, ob eine Nachricht Spam ist. [Download](https://github.com/gkswamy98/imessage-spam-detection/blob/master/MessageClassifier.mlmodel) | [Demo](https://github.com/gkswamy98/imessage-spam-detection/tree/master) | [Reference](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)
* **NamesDT** - Geschlechtsklassifikation mit DecisionTreeClassifier [Download](https://github.com/cocoa-ai/NamesCoreMLDemo/blob/master/Names/Resources/NamesDT.mlmodel) | [Demo](https://github.com/cocoa-ai/NamesCoreMLDemo) | [Reference](http://nlpforhackers.io/)
* **Personality Detection** - Sagt die Persönlichkeit anhand von Benutzerdokumenten (Sätzen) voraus. [Download](https://github.com/novinfard/profiler-sentiment-analysis/tree/master/ios_app/ProfilerSA/ML%20Models) | [Demo](https://github.com/novinfard/profiler-sentiment-analysis/) | [Reference](https://github.com/novinfard/profiler-sentiment-analysis/blob/master/dissertation-v6.pdf)
* **BERT for Question answering** - Swift-Core-ML-3-Implementierung von BERT für Frageantworten [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/BERTSQUADFP16.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-bert) | [Reference](https://github.com/huggingface/pytorch-transformers#run_squadpy-fine-tuning-on-squad-for-question-answering)
* **GPT-2** - OpenAI GPT-2-Textgenerierung (Core ML 3) [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/gpt2-512.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-gpt-2) | [Reference](https://github.com/huggingface/pytorch-transformers)
## Verschiedenes
* **Exermote** - Sagt die Übung voraus, wenn das iPhone am rechten Oberarm getragen wird. [Download](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Demo](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Reference](http://lausbert.com/2017/08/03/exermote/)
* **GestureAI** - Empfiehlt einen Künstler basierend auf einem gegebenen Ort und Genre. [Download](https://goo.gl/avdMjD) | [Demo](https://github.com/akimach/GestureAI-CoreML-iOS) | [Reference](https://github.com/akimach/GestureAI-iOS/tree/master/GestureAI)
* **Artists Recommendation** - Empfiehlt einen Künstler basierend auf einem gegebenen Ort und Genre. [Download](https://github.com/agnosticdev/Blog-Examples/blob/master/UsingCoreMLtoCreateASongRecommendationEngine/Artist.mlmodel) | [Demo]() | [Reference](https://www.agnosticdev.com/blog-entry/python/using-scikit-learn-and-coreml-create-music-recommendation-engine)
* **ChordSuggester** - Sagt den wahrscheinlichsten nächsten Akkord basierend auf der eingegebenen Akkordfolge voraus. [Download](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/blob/main/MLChordSuggester.mlpackage.zip) | [Demo](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/tree/main) | [Reference](https://medium.com/@huanlui/chordsuggester-i-3a1261d4ea9e)

## Sprachverarbeitung
* **Streaming ASR** – Echtzeit-Spracherkennungs-Engine für iOS. Verwendet Fast Conformer + CTC, läuft vollständig auf dem Gerät.  
  [Download](https://github.com/Otosaku/OtosakuStreamingASR-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuStreamingASR-iOS) | [Reference](https://github.com/Otosaku/OtosakuStreamingASR-iOS)
* **Keyword Spotting (KWS)** – Auf dem Gerät laufende Keyword-Spotting-Engine mit leichtgewichtiger CRNN-Architektur, optimiert für Mobilgeräte.  
  [Download](https://github.com/Otosaku/OtosakuKWS-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuKWS-iOS) | [Reference](https://github.com/Otosaku/OtosakuKWS-iOS)

# Visualisierungstools
*Tools, die beim Visualisieren von CoreML-Modellen helfen*
* [Netron](https://lutzroeder.github.io/Netron)

# Unterstützte Formate
*Liste der Modellformate, die mit Beispielen in Core ML konvertiert werden können*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# Der Goldstandard
*Sammlungen von Machine-Learning-Modellen, die in Core ML konvertiert werden können*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Große Liste von Modellen im Caffe-Format.
* [TensorFlow Models](https://github.com/tensorflow/models) - Modelle für TensorFlow.
* [TensorFlow Slim Models](https://github.com/tensorflow/models/tree/master/research/slim/README.md) - Eine weitere Sammlung von TensorFlow-Modellen.
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - Sammlung von MXNet-Modellen.

*Einzelne Machine-Learning-Modelle, die in Core ML konvertiert werden können. Wir passen die Liste an, sobald sie konvertiert werden.*
* [LaMem](https://github.com/MiyainNYC/Visual-Memorability-through-Caffe) Bewertet die Merkwürdigkeit von Bildern.
* [ILGnet](https://github.com/BestiVictory/ILGnet) Die ästhetische Bewertung von Bildern.
* [Colorization](https://github.com/richzhang/colorization) Automatische Einfärbung mit tiefen neuronalen Netzen.
* [Illustration2Vec](https://github.com/rezoo/illustration2vec) Schätzt eine Reihe von Tags und extrahiert semantische Merkmalsvektoren aus gegebenen Illustrationen.
* [CTPN](https://github.com/tianzhi0549/CTPN) Erkennung von Text in Naturbildern.
* [Image Analogy](https://github.com/msracver/Deep-Image-Analogy) Findet semantisch bedeutsame dichte Korrespondenzen zwischen zwei Eingabebildern.
* [iLID](https://github.com/twerkmeister/iLID) Automatische Spracherkennung.
* [Fashion Detection](https://github.com/liuziwei7/fashion-detection) Erkennung von Kleidung aus Bildern.
* [Saliency](https://github.com/imatge-upc/saliency-2016-cvpr) Die Vorhersage auffälliger Bereiche in Bildern wurde traditionell mit manuell erstellten Merkmalen behandelt.
* [Face Detection](https://github.com/DolotovEvgeniy/DeepPyramid) Erkennt ein Gesicht aus einem Bild.
* [mtcnn](https://github.com/CongWeilin/mtcnn-caffe) Gemeinsame Gesichtserkennung und -ausrichtung.
* [deephorizon](https://github.com/scottworkman/deephorizon) Schätzung der Horizontlinie aus einem einzelnen Bild.

# Mitwirken und Lizenz
* [Siehe die Anleitung](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* Verbreitet unter der MIT-Lizenz. Weitere Informationen finden Sie in LICENSE.
