# Core ML Models

<p align="center">
<img src="images/coreml.png" width="329" height="295"/>
</p>


Depuis iOS 11, Apple a publié le framework Core ML pour aider les développeurs à intégrer des modèles d'apprentissage automatique dans leurs applications. [La documentation officielle](https://developer.apple.com/documentation/coreml)

Nous avons rassemblé la plus grande collection de modèles d'apprentissage automatique au format Core ML, afin d'aider les développeurs iOS, macOS, tvOS et watchOS à expérimenter les techniques d'apprentissage automatique.

Si vous avez converti un modèle Core ML, n'hésitez pas à soumettre une [pull request](https://github.com/likedan/Awesome-CoreML-Models/compare).

Récemment, nous avons ajouté des outils de visualisation. En voici un : [Netron](https://lutzroeder.github.io/Netron).

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# Modèles

## Image - Métadonnées/Texte
*Modèles qui prennent des données image en entrée et produisent des informations utiles à propos de l'image.*
* **TextDetection** - Détection de texte en temps réel à l'aide du modèle intégré Vision. [Download]() | [Demo](https://github.com/tucan9389/TextDetection-CoreML) | [Reference](https://developer.apple.com/documentation/vision)
* **PhotoAssessment** - Évaluation de photos à l'aide de Core ML et Metal. [Download](https://github.com/yulingtianxia/PhotoAssessment/blob/master/PhotoAssessment-Sample/Sources/NIMANasnet.mlmodel) | [Demo](https://github.com/yulingtianxia/PhotoAssessment) | [Reference](https://arxiv.org/abs/1709.05424)
* **PoseEstimation** - Estimation de la pose humaine à partir d'une image, pour mobile. [Download](https://github.com/edvardHua/PoseEstimationForMobile/tree/master/release) | [Demo](https://github.com/tucan9389/PoseEstimation-CoreML) | [Reference](https://github.com/edvardHua/PoseEstimationForMobile)
* **MobileNet** - Détecte les objets dominants présents dans une image. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/hollance/MobileNet-CoreML) | [Reference](https://arxiv.org/abs/1704.04861)
* **Places CNN** - Détecte la scène d'une image parmi 205 catégories comme chambre, forêt, côte, etc. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/chenyi1989/CoreMLDemo) | [Reference](http://places.csail.mit.edu/index.html)
* **Inception v3** - Détecte les objets dominants présents dans une image. [Download](https://github.com/yulingtianxia/Core-ML-Sample/blob/master/CoreMLSample/Inceptionv3.mlmodel) | [Demo](https://github.com/yulingtianxia/Core-ML-Sample/) | [Reference](https://arxiv.org/abs/1512.00567)
* **ResNet50** - Détecte les objets dominants présents dans une image. [Download](https://github.com/ytakzk/CoreML-samples/blob/master/CoreML-samples/Resnet50.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](https://arxiv.org/abs/1512.03385)
* **VGG16** - Détecte les objets dominants présents dans une image. [Download](https://docs-assets.developer.apple.com/coreml/models/VGG16.mlmodel) | [Demo](https://github.com/alaphao/CoreMLExample) | [Reference](https://arxiv.org/abs/1409.1556)
* **Car Recognition** - Prédit la marque et le modèle d'une voiture. [Download](https://github.com/likedan/Core-ML-Car-Recognition/blob/master/Convert/CarRecognition.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)
* **YOLO** - Reconnaît les objets présents dans une image et leur position. [Download](https://github.com/hollance/YOLO-CoreML-MPSNNGraph/blob/master/TinyYOLO-CoreML/TinyYOLO-CoreML/TinyYOLO.mlmodel) | [Demo](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) | [Reference](http://machinethink.net/blog/object-detection-with-yolo)
* **AgeNet** - Prédit l'âge d'une personne à partir de son portrait. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mT1J3T1BEeWx4TWc/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **GenderNet** - Prédit le sexe d'une personne à partir de son portrait. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mYkNsZHlyc2ZuaFk/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **MNIST** - Prédit les chiffres manuscrits (dessinés) à partir d'images. [Download](https://github.com/ph1ps/MNIST-CoreML/raw/master/MNISTPrediction/MNIST.mlmodel) | [Demo](https://github.com/ph1ps/MNIST-CoreML) | [Reference](http://yann.lecun.com/exdb/mnist/)
* **EmotionNet** - Prédit l'émotion d'une personne à partir de son portrait. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mTlYtRGdXNFlpWDQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)
* **SentimentVision** - Prédit un sentiment positif ou négatif à partir d'images. [Download](https://drive.google.com/open?id=0B1ghKa_MYL6mZ0dITW5uZlgyNTg) | [Demo](https://github.com/cocoa-ai/SentimentVisionDemo) | [Reference](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)
* **Food101** - Prédit le type d'aliments à partir d'images. [Download](https://drive.google.com/open?id=0B5TjkH3njRqnVjBPZGRZbkNITjA) | [Demo](https://github.com/ph1ps/Food101-CoreML) | [Reference](http://visiir.lip6.fr/explore)
* **Oxford102** - Détecte le type de fleurs à partir d'images. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FlowersVisionDemo) | [Reference](http://jimgoo.com/flower-power/)
* **FlickrStyle** - Détecte le style artistique des images. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/StylesVisionDemo) | [Reference](http://sergeykarayev.com/files/1311.3715v3.pdf)
* **RN1015k500** - Prédit le lieu où une photo a été prise. [Download](https://s3.amazonaws.com/aws-bigdata-blog/artifacts/RN1015k500/RN1015k500.mlmodel) | [Demo](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) | [Reference](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)
* **Nudity** - Classe une image comme NSFW (nu) ou SFW (non nu)
 [Download](https://drive.google.com/open?id=0B5TjkH3njRqncDJpdDB1Tkl2S2s) | [Demo](https://github.com/ph1ps/Nudity-CoreML) | [Reference](https://github.com/yahoo/open_nsfw)
* **TextRecognition (ML Kit)** - Reconnaissance de texte en temps réel à l'aide du modèle intégré ML Kit. [Download]() | [Demo](https://github.com/tucan9389/TextRecognition-MLKit) | [Reference](https://firebase.google.com/docs/ml-kit/ios/recognize-text)
* **ImageSegmentation** - Segmente les pixels d'une image ou d'une caméra en un ensemble prédéfini de classes. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/ImageSegmentation-CoreML) | [Reference](https://github.com/tensorflow/models/tree/master/research/deeplab)
* **DepthPrediction** - Prédit la profondeur à partir d'une seule image. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/DepthPrediction-CoreML) | [Reference](https://github.com/iro-cp/FCRN-DepthPrediction)

## Image - Image
*Modèles qui transforment des images.*
* **HED** - Détecte les contours imbriqués à partir d'une image couleur. [Download](https://github.com/s1ddok/HED-CoreML/blob/master/HED-CoreML/Models/HED_so.mlmodel) | [Demo](https://github.com/s1ddok/HED-CoreML) | [Reference](http://dl.acm.org/citation.cfm?id=2654889)
* **AnimeScale2x** - Traite une œuvre de style anime mise à l'échelle par bicubique [Download](https://github.com/imxieyi/waifu2x-ios/blob/master/waifu2x/models/anime_noise0_model.mlmodel) | [Demo](https://github.com/imxieyi/waifu2x-ios) | [Reference](https://arxiv.org/abs/1501.00092)

## Texte - Métadonnées/Texte
*Modèles qui traitent des données textuelles*
* **Sentiment Polarity** - Prédit un sentiment positif ou négatif à partir de phrases. [Download](https://github.com/cocoa-ai/SentimentCoreMLDemo/raw/master/SentimentPolarity/Resources/SentimentPolarity.mlmodel) | [Demo](https://github.com/cocoa-ai/SentimentCoreMLDemo) | [Reference](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)
* **DocumentClassification** - Classifie les articles de presse dans l'une de 5 catégories. [Download](https://github.com/toddkramer/DocumentClassifier/blob/master/Sources/DocumentClassification.mlmodel) | [Demo](https://github.com/toddkramer/DocumentClassifier) | [Reference](https://github.com/toddkramer/DocumentClassifier/)
* **iMessage Spam Detection** - Détecte si un message est un spam. [Download](https://github.com/gkswamy98/imessage-spam-detection/blob/master/MessageClassifier.mlmodel) | [Demo](https://github.com/gkswamy98/imessage-spam-detection/tree/master) | [Reference](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)
* **NamesDT** - Classification du sexe à l'aide de DecisionTreeClassifier [Download](https://github.com/cocoa-ai/NamesCoreMLDemo/blob/master/Names/Resources/NamesDT.mlmodel) | [Demo](https://github.com/cocoa-ai/NamesCoreMLDemo) | [Reference](http://nlpforhackers.io/)
* **Personality Detection** - Prédit la personnalité à partir de documents utilisateur (phrases). [Download](https://github.com/novinfard/profiler-sentiment-analysis/tree/master/ios_app/ProfilerSA/ML%20Models) | [Demo](https://github.com/novinfard/profiler-sentiment-analysis/) | [Reference](https://github.com/novinfard/profiler-sentiment-analysis/blob/master/dissertation-v6.pdf)
* **BERT for Question answering** - Implémentation Swift Core ML 3 de BERT pour la question-réponse [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/BERTSQUADFP16.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-bert) | [Reference](https://github.com/huggingface/pytorch-transformers#run_squadpy-fine-tuning-on-squad-for-question-answering)
* **GPT-2** - Génération de texte OpenAI GPT-2 (Core ML 3) [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/gpt2-512.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-gpt-2) | [Reference](https://github.com/huggingface/pytorch-transformers)
## Divers
* **Exermote** - Prédit l'exercice lorsque l'iPhone est porté sur le bras droit. [Download](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Demo](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Reference](http://lausbert.com/2017/08/03/exermote/)
* **GestureAI** - Recommande un artiste selon un lieu et un genre donnés. [Download](https://goo.gl/avdMjD) | [Demo](https://github.com/akimach/GestureAI-CoreML-iOS) | [Reference](https://github.com/akimach/GestureAI-iOS/tree/master/GestureAI)
* **Artists Recommendation** - Recommande un artiste selon un lieu et un genre donnés. [Download](https://github.com/agnosticdev/Blog-Examples/blob/master/UsingCoreMLtoCreateASongRecommendationEngine/Artist.mlmodel) | [Demo]() | [Reference](https://www.agnosticdev.com/blog-entry/python/using-scikit-learn-and-coreml-create-music-recommendation-engine)
* **ChordSuggester** - Prédit l'accord suivant le plus probable selon la progression d'accords saisie. [Download](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/blob/main/MLChordSuggester.mlpackage.zip) | [Demo](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/tree/main) | [Reference](https://medium.com/@huanlui/chordsuggester-i-3a1261d4ea9e)

## Traitement de la parole
* **Streaming ASR** – Moteur de reconnaissance vocale en flux temps réel pour iOS. Utilise Fast Conformer + CTC, fonctionne entièrement sur l'appareil.  
  [Download](https://github.com/Otosaku/OtosakuStreamingASR-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuStreamingASR-iOS) | [Reference](https://github.com/Otosaku/OtosakuStreamingASR-iOS)
* **Keyword Spotting (KWS)** – Moteur de détection de mots-clés sur appareil utilisant une architecture CRNN légère, optimisé pour les mobiles.  
  [Download](https://github.com/Otosaku/OtosakuKWS-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuKWS-iOS) | [Reference](https://github.com/Otosaku/OtosakuKWS-iOS)

# Outils de visualisation
*Outils qui aident à visualiser les modèles CoreML*
* [Netron](https://lutzroeder.github.io/Netron)

# Formats pris en charge
*Liste des formats de modèles convertibles en Core ML, avec exemples*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# Le Graal
*Collections de modèles d'apprentissage automatique convertibles en Core ML*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Grande liste de modèles au format Caffe.
* [TensorFlow Models](https://github.com/tensorflow/models) - Modèles pour TensorFlow.
* [TensorFlow Slim Models](https://github.com/tensorflow/models/tree/master/research/slim/README.md) - Une autre collection de modèles TensorFlow.
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - Collection de modèles MXNet.

*Modèles d'apprentissage automatique individuels convertibles en Core ML. Nous ajusterons la liste au fur et à mesure de leur conversion.*
* [LaMem](https://github.com/MiyainNYC/Visual-Memorability-through-Caffe) Note la mémorabilité des images.
* [ILGnet](https://github.com/BestiVictory/ILGnet) Évaluation esthétique des images.
* [Colorization](https://github.com/richzhang/colorization) Colorisation automatique à l'aide de réseaux de neurones profonds.
* [Illustration2Vec](https://github.com/rezoo/illustration2vec) Estime un ensemble de tags et extrait des vecteurs de caractéristiques sémantiques à partir d'illustrations données.
* [CTPN](https://github.com/tianzhi0549/CTPN) Détection de texte dans les images naturelles.
* [Image Analogy](https://github.com/msracver/Deep-Image-Analogy) Trouve des correspondances denses sémantiquement significatives entre deux images d'entrée.
* [iLID](https://github.com/twerkmeister/iLID) Identification automatique de la langue parlée.
* [Fashion Detection](https://github.com/liuziwei7/fashion-detection) Détection de vêtements dans les images.
* [Saliency](https://github.com/imatge-upc/saliency-2016-cvpr) La prédiction des zones saillantes dans les images a traditionnellement été traitée avec des caractéristiques conçues à la main.
* [Face Detection](https://github.com/DolotovEvgeniy/DeepPyramid) Détecte un visage dans une image.
* [mtcnn](https://github.com/CongWeilin/mtcnn-caffe) Détection et alignement conjoints de visages.
* [deephorizon](https://github.com/scottworkman/deephorizon) Estimation de la ligne d'horizon à partir d'une seule image.

# Contribution et licence
* [Voir le guide](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* Distribué sous licence MIT. Voir LICENSE pour plus d'informations.
