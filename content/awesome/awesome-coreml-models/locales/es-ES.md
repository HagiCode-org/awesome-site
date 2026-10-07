<!--
Title: Awesome Core ML Models
Description: A curated list of machine learning models in Core ML format.
Author: Kedan Li
-->

<p align="center">
<img src="images/coreml.png" width="329" height="295"/>
</p>


Desde iOS 11, Apple lanzó el framework Core ML para ayudar a los desarrolladores a integrar modelos de aprendizaje automático en sus aplicaciones. [La documentación oficial](https://developer.apple.com/documentation/coreml)

Hemos reunido la mayor colección de modelos de aprendizaje automático en formato Core ML, para ayudar a los desarrolladores de iOS, macOS, tvOS y watchOS a experimentar con técnicas de aprendizaje automático.

Si has convertido un modelo Core ML, no dudes en enviar una [pull request](https://github.com/likedan/Awesome-CoreML-Models/compare).

Recientemente, hemos incluido herramientas de visualización. Aquí hay una: [Netron](https://lutzroeder.github.io/Netron).

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# Modelos

## Imagen - Metadatos/Texto
*Modelos que toman datos de imagen como entrada y producen información útil sobre la imagen.*
* **TextDetection** - Detección de texto en tiempo real con el modelo integrado de Vision. [Download]() | [Demo](https://github.com/tucan9389/TextDetection-CoreML) | [Reference](https://developer.apple.com/documentation/vision)
* **PhotoAssessment** - Evaluación de fotos con Core ML y Metal. [Download](https://github.com/yulingtianxia/PhotoAssessment/blob/master/PhotoAssessment-Sample/Sources/NIMANasnet.mlmodel) | [Demo](https://github.com/yulingtianxia/PhotoAssessment) | [Reference](https://arxiv.org/abs/1709.05424)
* **PoseEstimation** - Estimación de la pose humana a partir de una imagen, para móviles. [Download](https://github.com/edvardHua/PoseEstimationForMobile/tree/master/release) | [Demo](https://github.com/tucan9389/PoseEstimation-CoreML) | [Reference](https://github.com/edvardHua/PoseEstimationForMobile)
* **MobileNet** - Detecta los objetos dominantes presentes en una imagen. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/hollance/MobileNet-CoreML) | [Reference](https://arxiv.org/abs/1704.04861)
* **Places CNN** - Detecta la escena de una imagen entre 205 categorías como dormitorio, bosque, costa, etc. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/chenyi1989/CoreMLDemo) | [Reference](http://places.csail.mit.edu/index.html)
* **Inception v3** - Detecta los objetos dominantes presentes en una imagen. [Download](https://github.com/yulingtianxia/Core-ML-Sample/blob/master/CoreMLSample/Inceptionv3.mlmodel) | [Demo](https://github.com/yulingtianxia/Core-ML-Sample/) | [Reference](https://arxiv.org/abs/1512.00567)
* **ResNet50** - Detecta los objetos dominantes presentes en una imagen. [Download](https://github.com/ytakzk/CoreML-samples/blob/master/CoreML-samples/Resnet50.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](https://arxiv.org/abs/1512.03385)
* **VGG16** - Detecta los objetos dominantes presentes en una imagen. [Download](https://docs-assets.developer.apple.com/coreml/models/VGG16.mlmodel) | [Demo](https://github.com/alaphao/CoreMLExample) | [Reference](https://arxiv.org/abs/1409.1556)
* **Car Recognition** - Predice la marca y el modelo de un coche. [Download](https://github.com/likedan/Core-ML-Car-Recognition/blob/master/Convert/CarRecognition.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)
* **YOLO** - Reconoce qué objetos hay dentro de una imagen dada y dónde están. [Download](https://github.com/hollance/YOLO-CoreML-MPSNNGraph/blob/master/TinyYOLO-CoreML/TinyYOLO-CoreML/TinyYOLO.mlmodel) | [Demo](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) | [Reference](http://machinethink.net/blog/object-detection-with-yolo)
* **AgeNet** - Predice la edad de una persona a partir de su retrato. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mT1J3T1BEeWx4TWc/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **GenderNet** - Predice el sexo de una persona a partir de su retrato. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mYkNsZHlyc2ZuaFk/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **MNIST** - Predice dígitos escritos a mano (dibujados) a partir de imágenes. [Download](https://github.com/ph1ps/MNIST-CoreML/raw/master/MNISTPrediction/MNIST.mlmodel) | [Demo](https://github.com/ph1ps/MNIST-CoreML) | [Reference](http://yann.lecun.com/exdb/mnist/)
* **EmotionNet** - Predice la emoción de una persona a partir de su retrato. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mTlYtRGdXNFlpWDQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)
* **SentimentVision** - Predice sentimientos positivos o negativos a partir de imágenes. [Download](https://drive.google.com/open?id=0B1ghKa_MYL6mZ0dITW5uZlgyNTg) | [Demo](https://github.com/cocoa-ai/SentimentVisionDemo) | [Reference](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)
* **Food101** - Predice el tipo de alimentos a partir de imágenes. [Download](https://drive.google.com/open?id=0B5TjkH3njRqnVjBPZGRZbkNITjA) | [Demo](https://github.com/ph1ps/Food101-CoreML) | [Reference](http://visiir.lip6.fr/explore)
* **Oxford102** - Detecta el tipo de flores a partir de imágenes. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FlowersVisionDemo) | [Reference](http://jimgoo.com/flower-power/)
* **FlickrStyle** - Detecta el estilo artístico de las imágenes. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/StylesVisionDemo) | [Reference](http://sergeykarayev.com/files/1311.3715v3.pdf)
* **RN1015k500** - Predice el lugar donde se tomó una foto. [Download](https://s3.amazonaws.com/aws-bigdata-blog/artifacts/RN1015k500/RN1015k500.mlmodel) | [Demo](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) | [Reference](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)
* **Nudity** - Clasifica una imagen como NSFW (desnuda) o SFW (no desnuda)
 [Download](https://drive.google.com/open?id=0B5TjkH3njRqncDJpdDB1Tkl2S2s) | [Demo](https://github.com/ph1ps/Nudity-CoreML) | [Reference](https://github.com/yahoo/open_nsfw)
* **TextRecognition (ML Kit)** - Reconocimiento de texto en tiempo real con el modelo integrado de ML Kit. [Download]() | [Demo](https://github.com/tucan9389/TextRecognition-MLKit) | [Reference](https://firebase.google.com/docs/ml-kit/ios/recognize-text)
* **ImageSegmentation** - Segmenta los píxeles de un fotograma de cámara o imagen en un conjunto predefinido de clases. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/ImageSegmentation-CoreML) | [Reference](https://github.com/tensorflow/models/tree/master/research/deeplab)
* **DepthPrediction** - Predice la profundidad a partir de una sola imagen. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/DepthPrediction-CoreML) | [Reference](https://github.com/iro-cp/FCRN-DepthPrediction)

## Imagen - Imagen
*Modelos que transforman imágenes.*
* **HED** - Detecta bordes anidados a partir de una imagen en color. [Download](https://github.com/s1ddok/HED-CoreML/blob/master/HED-CoreML/Models/HED_so.mlmodel) | [Demo](https://github.com/s1ddok/HED-CoreML) | [Reference](http://dl.acm.org/citation.cfm?id=2654889)
* **AnimeScale2x** - Procesa una obra de estilo anime escalada con bicúbica [Download](https://github.com/imxieyi/waifu2x-ios/blob/master/waifu2x/models/anime_noise0_model.mlmodel) | [Demo](https://github.com/imxieyi/waifu2x-ios) | [Reference](https://arxiv.org/abs/1501.00092)

## Texto - Metadatos/Texto
*Modelos que procesan datos de texto*
* **Sentiment Polarity** - Predice sentimientos positivos o negativos a partir de frases. [Download](https://github.com/cocoa-ai/SentimentCoreMLDemo/raw/master/SentimentPolarity/Resources/SentimentPolarity.mlmodel) | [Demo](https://github.com/cocoa-ai/SentimentCoreMLDemo) | [Reference](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)
* **DocumentClassification** - Clasifica artículos de noticias en 1 de 5 categorías. [Download](https://github.com/toddkramer/DocumentClassifier/blob/master/Sources/DocumentClassification.mlmodel) | [Demo](https://github.com/toddkramer/DocumentClassifier) | [Reference](https://github.com/toddkramer/DocumentClassifier/)
* **iMessage Spam Detection** - Detecta si un mensaje es spam. [Download](https://github.com/gkswamy98/imessage-spam-detection/blob/master/MessageClassifier.mlmodel) | [Demo](https://github.com/gkswamy98/imessage-spam-detection/tree/master) | [Reference](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)
* **NamesDT** - Clasificación de sexo con DecisionTreeClassifier [Download](https://github.com/cocoa-ai/NamesCoreMLDemo/blob/master/Names/Resources/NamesDT.mlmodel) | [Demo](https://github.com/cocoa-ai/NamesCoreMLDemo) | [Reference](http://nlpforhackers.io/)
* **Personality Detection** - Predice la personalidad a partir de documentos de usuario (frases). [Download](https://github.com/novinfard/profiler-sentiment-analysis/tree/master/ios_app/ProfilerSA/ML%20Models) | [Demo](https://github.com/novinfard/profiler-sentiment-analysis/) | [Reference](https://github.com/novinfard/profiler-sentiment-analysis/blob/master/dissertation-v6.pdf)
* **BERT for Question answering** - Implementación Swift Core ML 3 de BERT para preguntas y respuestas [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/BERTSQUADFP16.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-bert) | [Reference](https://github.com/huggingface/pytorch-transformers#run_squadpy-fine-tuning-on-squad-for-question-answering)
* **GPT-2** - Generación de texto OpenAI GPT-2 (Core ML 3) [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/gpt2-512.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-gpt-2) | [Reference](https://github.com/huggingface/pytorch-transformers)
## Varios
* **Exermote** - Predice el ejercicio cuando el iPhone se lleva en la parte superior del brazo derecho. [Download](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Demo](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Reference](http://lausbert.com/2017/08/03/exermote/)
* **GestureAI** - Recomienda un artista según una ubicación y género dados. [Download](https://goo.gl/avdMjD) | [Demo](https://github.com/akimach/GestureAI-CoreML-iOS) | [Reference](https://github.com/akimach/GestureAI-iOS/tree/master/GestureAI)
* **Artists Recommendation** - Recomienda un artista según una ubicación y género dados. [Download](https://github.com/agnosticdev/Blog-Examples/blob/master/UsingCoreMLtoCreateASongRecommendationEngine/Artist.mlmodel) | [Demo]() | [Reference](https://www.agnosticdev.com/blog-entry/python/using-scikit-learn-and-coreml-create-music-recommendation-engine)
* **ChordSuggester** - Predice el siguiente acorde más probable según la progresión de acordes introducida. [Download](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/blob/main/MLChordSuggester.mlpackage.zip) | [Demo](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/tree/main) | [Reference](https://medium.com/@huanlui/chordsuggester-i-3a1261d4ea9e)

## Procesamiento de voz
* **Streaming ASR** – Motor de reconocimiento de voz en streaming en tiempo real para iOS. Usa Fast Conformer + CTC, se ejecuta totalmente en el dispositivo.  
  [Download](https://github.com/Otosaku/OtosakuStreamingASR-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuStreamingASR-iOS) | [Reference](https://github.com/Otosaku/OtosakuStreamingASR-iOS)
* **Keyword Spotting (KWS)** – Motor de detección de palabras clave en el dispositivo con arquitectura CRNN ligera, optimizado para móviles.  
  [Download](https://github.com/Otosaku/OtosakuKWS-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuKWS-iOS) | [Reference](https://github.com/Otosaku/OtosakuKWS-iOS)

# Herramientas de visualización
*Herramientas que ayudan a visualizar modelos CoreML*
* [Netron](https://lutzroeder.github.io/Netron)

# Formatos compatibles
*Lista de formatos de modelo que se pueden convertir a Core ML con ejemplos*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# El Oro
*Colecciones de modelos de aprendizaje automático que se pueden convertir a Core ML*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Gran lista de modelos en formato Caffe.
* [TensorFlow Models](https://github.com/tensorflow/models) - Modelos para TensorFlow.
* [TensorFlow Slim Models](https://github.com/tensorflow/models/tree/master/research/slim/README.md) - Otra colección de modelos TensorFlow.
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - Colección de modelos MXNet.

*Modelos de aprendizaje automático individuales que se pueden convertir a Core ML. Seguiremos ajustando la lista a medida que se conviertan.*
* [LaMem](https://github.com/MiyainNYC/Visual-Memorability-through-Caffe) Puntúa la memorabilidad de las imágenes.
* [ILGnet](https://github.com/BestiVictory/ILGnet) La evaluación estética de imágenes.
* [Colorization](https://github.com/richzhang/colorization) Coloreado automático con redes neuronales profundas.
* [Illustration2Vec](https://github.com/rezoo/illustration2vec) Estima un conjunto de etiquetas y extrae vectores de características semánticas a partir de ilustraciones dadas.
* [CTPN](https://github.com/tianzhi0549/CTPN) Detección de texto en imágenes naturales.
* [Image Analogy](https://github.com/msracver/Deep-Image-Analogy) Encuentra correspondencias densas semánticamente significativas entre dos imágenes de entrada.
* [iLID](https://github.com/twerkmeister/iLID) Identificación automática del idioma hablado.
* [Fashion Detection](https://github.com/liuziwei7/fashion-detection) Detección de ropa en imágenes.
* [Saliency](https://github.com/imatge-upc/saliency-2016-cvpr) La predicción de áreas salientes en imágenes se ha abordado tradicionalmente con características hechas a mano.
* [Face Detection](https://github.com/DolotovEvgeniy/DeepPyramid) Detecta rostros en una imagen.
* [mtcnn](https://github.com/CongWeilin/mtcnn-caffe) Detección y alineación conjunta de rostros.
* [deephorizon](https://github.com/scottworkman/deephorizon) Estimación de la línea del horizonte a partir de una sola imagen.

# Contribuir y licencia
* [Ver la guía](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* Distribuido bajo la licencia MIT. Consulta LICENSE para más información.
