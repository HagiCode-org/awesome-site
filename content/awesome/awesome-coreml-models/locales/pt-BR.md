<!--
Title: Awesome Core ML Models
Description: A curated list of machine learning models in Core ML format.
Author: Kedan Li
-->
<p align="center">
<img src="images/coreml.png" width="329" height="295"/>
</p>


Desde o iOS 11, a Apple lançou o framework Core ML para ajudar desenvolvedores a integrar modelos de machine learning em aplicativos. [A documentação oficial](https://developer.apple.com/documentation/coreml)

Reunimos a maior coleção de modelos de machine learning no formato Core ML, para ajudar desenvolvedores de iOS, macOS, tvOS e watchOS a experimentar técnicas de machine learning.

Se você converteu um modelo Core ML, sinta-se à vontade para enviar um [pull request](https://github.com/likedan/Awesome-CoreML-Models/compare).

Recentemente, incluímos ferramentas de visualização. Uma delas é o [Netron](https://lutzroeder.github.io/Netron).

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# Modelos

## Imagem - Metadados/Texto
*Modelos que recebem dados de imagem como entrada e geram informações úteis sobre a imagem.*
* **TextDetection** - Detecta texto em tempo real usando o modelo integrado do Vision. [Download]() | [Demo](https://github.com/tucan9389/TextDetection-CoreML) | [Reference](https://developer.apple.com/documentation/vision)
* **PhotoAssessment** - Avaliação de fotos usando Core ML e Metal. [Download](https://github.com/yulingtianxia/PhotoAssessment/blob/master/PhotoAssessment-Sample/Sources/NIMANasnet.mlmodel) | [Demo](https://github.com/yulingtianxia/PhotoAssessment) | [Reference](https://arxiv.org/abs/1709.05424)
* **PoseEstimation** - Estima a pose humana a partir de uma imagem, para dispositivos móveis. [Download](https://github.com/edvardHua/PoseEstimationForMobile/tree/master/release) | [Demo](https://github.com/tucan9389/PoseEstimation-CoreML) | [Reference](https://github.com/edvardHua/PoseEstimationForMobile)
* **MobileNet** - Detecta os objetos dominantes presentes em uma imagem. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/hollance/MobileNet-CoreML) | [Reference](https://arxiv.org/abs/1704.04861)
* **Places CNN** - Detecta a cena de uma imagem entre 205 categorias, como quarto, floresta, litoral etc. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/chenyi1989/CoreMLDemo) | [Reference](http://places.csail.mit.edu/index.html)
* **Inception v3** - Detecta os objetos dominantes presentes em uma imagem. [Download](https://github.com/yulingtianxia/Core-ML-Sample/blob/master/CoreMLSample/Inceptionv3.mlmodel) | [Demo](https://github.com/yulingtianxia/Core-ML-Sample/) | [Reference](https://arxiv.org/abs/1512.00567)
* **ResNet50** - Detecta os objetos dominantes presentes em uma imagem. [Download](https://github.com/ytakzk/CoreML-samples/blob/master/CoreML-samples/Resnet50.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](https://arxiv.org/abs/1512.03385)
* **VGG16** - Detecta os objetos dominantes presentes em uma imagem. [Download](https://docs-assets.developer.apple.com/coreml/models/VGG16.mlmodel) | [Demo](https://github.com/alaphao/CoreMLExample) | [Reference](https://arxiv.org/abs/1409.1556)
* **Car Recognition** - Prevê a marca e o modelo de um carro. [Download](https://github.com/likedan/Core-ML-Car-Recognition/blob/master/Convert/CarRecognition.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)
* **YOLO** - Reconhece quais são os objetos em uma determinada imagem e onde eles estão na imagem. [Download](https://github.com/hollance/YOLO-CoreML-MPSNNGraph/blob/master/TinyYOLO-CoreML/TinyYOLO-CoreML/TinyYOLO.mlmodel) | [Demo](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) | [Reference](http://machinethink.net/blog/object-detection-with-yolo)
* **AgeNet** - Prevê a idade de uma pessoa a partir de seu retrato. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mT1J3T1BEeWx4TWc/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **GenderNet** - Prevê o gênero de uma pessoa a partir de seu retrato. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mYkNsZHlyc2ZuaFk/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **MNIST** - Prevê dígitos manuscritos (desenhados) a partir de imagens. [Download](https://github.com/ph1ps/MNIST-CoreML/raw/master/MNISTPrediction/MNIST.mlmodel) | [Demo](https://github.com/ph1ps/MNIST-CoreML) | [Reference](http://yann.lecun.com/exdb/mnist/)
* **EmotionNet** - Prevê a emoção de uma pessoa a partir de seu retrato. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mTlYtRGdXNFlpWDQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)
* **SentimentVision** - Prevê sentimentos positivos ou negativos a partir de imagens. [Download](https://drive.google.com/open?id=0B1ghKa_MYL6mZ0dITW5uZlgyNTg) | [Demo](https://github.com/cocoa-ai/SentimentVisionDemo) | [Reference](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)
* **Food101** - Prevê o tipo de alimentos a partir de imagens. [Download](https://drive.google.com/open?id=0B5TjkH3njRqnVjBPZGRZbkNITjA) | [Demo](https://github.com/ph1ps/Food101-CoreML) | [Reference](http://visiir.lip6.fr/explore)
* **Oxford102** - Detecta o tipo de flores a partir de imagens. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FlowersVisionDemo) | [Reference](http://jimgoo.com/flower-power/)
* **FlickrStyle** - Detecta o estilo artístico das imagens. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/StylesVisionDemo) | [Reference](http://sergeykarayev.com/files/1311.3715v3.pdf)
* **RN1015k500** - Prevê o local onde uma foto foi tirada. [Download](https://s3.amazonaws.com/aws-bigdata-blog/artifacts/RN1015k500/RN1015k500.mlmodel) | [Demo](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) | [Reference](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)
* **Nudity** - Classifica uma imagem como NSFW (nu) ou SFW (não nu)
 [Download](https://drive.google.com/open?id=0B5TjkH3njRqncDJpdDB1Tkl2S2s) | [Demo](https://github.com/ph1ps/Nudity-CoreML) | [Reference](https://github.com/yahoo/open_nsfw)
* **TextRecognition (ML Kit)** - Reconhece texto em tempo real usando o modelo integrado do ML Kit. [Download]() | [Demo](https://github.com/tucan9389/TextRecognition-MLKit) | [Reference](https://firebase.google.com/docs/ml-kit/ios/recognize-text)
* **ImageSegmentation** - Segmenta os pixels de um quadro de câmera ou de uma imagem em um conjunto predefinido de classes. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/ImageSegmentation-CoreML) | [Reference](https://github.com/tensorflow/models/tree/master/research/deeplab)
* **DepthPrediction** - Prevê a profundidade a partir de uma única imagem. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/DepthPrediction-CoreML) | [Reference](https://github.com/iro-cp/FCRN-DepthPrediction)

## Imagem - Imagem
*Modelos que transformam imagens.*
* **HED** - Detecta bordas aninhadas a partir de uma imagem colorida. [Download](https://github.com/s1ddok/HED-CoreML/blob/master/HED-CoreML/Models/HED_so.mlmodel) | [Demo](https://github.com/s1ddok/HED-CoreML) | [Reference](http://dl.acm.org/citation.cfm?id=2654889)
* **AnimeScale2x** - Processa uma arte em estilo anime ampliada com interpolação bicúbica [Download](https://github.com/imxieyi/waifu2x-ios/blob/master/waifu2x/models/anime_noise0_model.mlmodel) | [Demo](https://github.com/imxieyi/waifu2x-ios) | [Reference](https://arxiv.org/abs/1501.00092)

## Texto - Metadados/Texto
*Modelos que processam dados de texto*
* **Sentiment Polarity** - Prevê sentimentos positivos ou negativos a partir de frases. [Download](https://github.com/cocoa-ai/SentimentCoreMLDemo/raw/master/SentimentPolarity/Resources/SentimentPolarity.mlmodel) | [Demo](https://github.com/cocoa-ai/SentimentCoreMLDemo) | [Reference](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)
* **DocumentClassification** - Classifica artigos de notícias em uma entre 5 categorias. [Download](https://github.com/toddkramer/DocumentClassifier/blob/master/Sources/DocumentClassification.mlmodel) | [Demo](https://github.com/toddkramer/DocumentClassifier) | [Reference](https://github.com/toddkramer/DocumentClassifier/)
* **iMessage Spam Detection** - Detecta se uma mensagem é spam. [Download](https://github.com/gkswamy98/imessage-spam-detection/blob/master/MessageClassifier.mlmodel) | [Demo](https://github.com/gkswamy98/imessage-spam-detection/tree/master) | [Reference](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)
* **NamesDT** - Classificação de gênero usando DecisionTreeClassifier [Download](https://github.com/cocoa-ai/NamesCoreMLDemo/blob/master/Names/Resources/NamesDT.mlmodel) | [Demo](https://github.com/cocoa-ai/NamesCoreMLDemo) | [Reference](http://nlpforhackers.io/)
* **Personality Detection** - Prevê a personalidade com base em documentos do usuário (frases). [Download](https://github.com/novinfard/profiler-sentiment-analysis/tree/master/ios_app/ProfilerSA/ML%20Models) | [Demo](https://github.com/novinfard/profiler-sentiment-analysis/) | [Reference](https://github.com/novinfard/profiler-sentiment-analysis/blob/master/dissertation-v6.pdf)
* **BERT for Question answering** - Implementação em Swift Core ML 3 do BERT para perguntas e respostas [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/BERTSQUADFP16.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-bert) | [Reference](https://github.com/huggingface/pytorch-transformers#run_squadpy-fine-tuning-on-squad-for-question-answering)
* **GPT-2** - Geração de texto com o OpenAI GPT-2 (Core ML 3) [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/gpt2-512.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-gpt-2) | [Reference](https://github.com/huggingface/pytorch-transformers)
## Diversos
* **Exermote** - Prevê o exercício quando o iPhone é usado no braço superior direito. [Download](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Demo](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Reference](http://lausbert.com/2017/08/03/exermote/)
* **GestureAI** - Recomenda um artista com base no local e no gênero informados. [Download](https://goo.gl/avdMjD) | [Demo](https://github.com/akimach/GestureAI-CoreML-iOS) | [Reference](https://github.com/akimach/GestureAI-iOS/tree/master/GestureAI)
* **Artists Recommendation** - Recomenda um artista com base no local e no gênero informados. [Download](https://github.com/agnosticdev/Blog-Examples/blob/master/UsingCoreMLtoCreateASongRecommendationEngine/Artist.mlmodel) | [Demo]() | [Reference](https://www.agnosticdev.com/blog-entry/python/using-scikit-learn-and-coreml-create-music-recommendation-engine)
* **ChordSuggester** - Prevê o acorde seguinte mais provável com base na progressão de acordes inserida. [Download](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/blob/main/MLChordSuggester.mlpackage.zip) | [Demo](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/tree/main) | [Reference](https://medium.com/@huanlui/chordsuggester-i-3a1261d4ea9e)

## Processamento de fala
* **Streaming ASR** – Engine de reconhecimento de fala em streaming em tempo real para iOS. Usa Fast Conformer + CTC, roda totalmente no dispositivo.  
  [Download](https://github.com/Otosaku/OtosakuStreamingASR-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuStreamingASR-iOS) | [Reference](https://github.com/Otosaku/OtosakuStreamingASR-iOS)
* **Keyword Spotting (KWS)** – Engine de detecção de palavras-chave no dispositivo, com arquitetura CRNN leve, otimizada para dispositivos móveis.  
  [Download](https://github.com/Otosaku/OtosakuKWS-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuKWS-iOS) | [Reference](https://github.com/Otosaku/OtosakuKWS-iOS)

# Ferramentas de visualização
*Ferramentas que ajudam a visualizar modelos CoreML*
* [Netron](https://lutzroeder.github.io/Netron)

# Formatos suportados
*Lista de formatos de modelos que podem ser convertidos para Core ML, com exemplos*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# A coleção de ouro
*Coleções de modelos de machine learning que podem ser convertidos para Core ML*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Grande lista de modelos no formato Caffe.
* [TensorFlow Models](https://github.com/tensorflow/models) - Modelos para TensorFlow.
* [TensorFlow Slim Models](https://github.com/tensorflow/models/tree/master/research/slim/README.md) - Outra coleção de modelos TensorFlow.
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - Coleção de modelos MXNet.

*Modelos individuais de machine learning que podem ser convertidos para Core ML. Continuaremos ajustando a lista à medida que forem convertidos.*
* [LaMem](https://github.com/MiyainNYC/Visual-Memorability-through-Caffe) Avalia a memorabilidade de imagens.
* [ILGnet](https://github.com/BestiVictory/ILGnet) Avaliação estética de imagens.
* [Colorization](https://github.com/richzhang/colorization) Colorização automática usando redes neurais profundas.
* [Illustration2Vec](https://github.com/rezoo/illustration2vec) Estima um conjunto de tags e extrai vetores de características semânticas de ilustrações fornecidas.
* [CTPN](https://github.com/tianzhi0549/CTPN) Detecta texto em imagens naturais.
* [Image Analogy](https://github.com/msracver/Deep-Image-Analogy) Encontra correspondências densas semanticamente significativas entre duas imagens de entrada.
* [iLID](https://github.com/twerkmeister/iLID) Identificação automática de idioma falado.
* [Fashion Detection](https://github.com/liuziwei7/fashion-detection) Detecta roupas a partir de imagens.
* [Saliency](https://github.com/imatge-upc/saliency-2016-cvpr) A previsão de áreas salientes em imagens tradicionalmente é abordada com características criadas manualmente.
* [Face Detection](https://github.com/DolotovEvgeniy/DeepPyramid) Detecta rostos em imagens.
* [mtcnn](https://github.com/CongWeilin/mtcnn-caffe) Detecção e alinhamento conjunto de rostos.
* [deephorizon](https://github.com/scottworkman/deephorizon) Estimativa da linha do horizonte a partir de uma única imagem.

# Contribuições e licença
* [Veja o guia](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* Distribuído sob a licença MIT. Consulte o LICENSE para mais informações.
