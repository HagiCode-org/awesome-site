<!--
Title: Awesome Core ML Models
Description: A curated list of machine learning models in Core ML format.
Author: Kedan Li
-->
<p align="center">
<img src="images/coreml.png" width="329" height="295"/>
</p>


Начиная с iOS 11, Apple выпустила фреймворк Core ML, чтобы помочь разработчикам интегрировать модели машинного обучения в приложения. [Официальная документация](https://developer.apple.com/documentation/coreml)

Мы собрали крупнейшую коллекцию моделей машинного обучения в формате Core ML, чтобы помочь разработчикам для iOS, macOS, tvOS и watchOS экспериментировать с методами машинного обучения.

Если вы конвертировали модель Core ML, смело отправляйте [pull request](https://github.com/likedan/Awesome-CoreML-Models/compare).

Недавно мы добавили инструменты визуализации. Вот один из них — [Netron](https://lutzroeder.github.io/Netron).

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# Модели

## Изображение - Метаданные/Текст
*Модели, которые принимают данные изображения на вход и выдают полезную информацию об этом изображении.*
* **TextDetection** - Обнаружение текста в реальном времени с помощью встроенной модели Vision. [Download]() | [Demo](https://github.com/tucan9389/TextDetection-CoreML) | [Reference](https://developer.apple.com/documentation/vision)
* **PhotoAssessment** - Оценка фотографий с использованием Core ML и Metal. [Download](https://github.com/yulingtianxia/PhotoAssessment/blob/master/PhotoAssessment-Sample/Sources/NIMANasnet.mlmodel) | [Demo](https://github.com/yulingtianxia/PhotoAssessment) | [Reference](https://arxiv.org/abs/1709.05424)
* **PoseEstimation** - Оценка позы человека по изображению для мобильных устройств. [Download](https://github.com/edvardHua/PoseEstimationForMobile/tree/master/release) | [Demo](https://github.com/tucan9389/PoseEstimation-CoreML) | [Reference](https://github.com/edvardHua/PoseEstimationForMobile)
* **MobileNet** - Определяет основные объекты, присутствующие на изображении. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/hollance/MobileNet-CoreML) | [Reference](https://arxiv.org/abs/1704.04861)
* **Places CNN** - Определяет сцену изображения по 205 категориям, таким как спальня, лес, побережье и т. д. [Download](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [Demo](https://github.com/chenyi1989/CoreMLDemo) | [Reference](http://places.csail.mit.edu/index.html)
* **Inception v3** - Определяет основные объекты, присутствующие на изображении. [Download](https://github.com/yulingtianxia/Core-ML-Sample/blob/master/CoreMLSample/Inceptionv3.mlmodel) | [Demo](https://github.com/yulingtianxia/Core-ML-Sample/) | [Reference](https://arxiv.org/abs/1512.00567)
* **ResNet50** - Определяет основные объекты, присутствующие на изображении. [Download](https://github.com/ytakzk/CoreML-samples/blob/master/CoreML-samples/Resnet50.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](https://arxiv.org/abs/1512.03385)
* **VGG16** - Определяет основные объекты, присутствующие на изображении. [Download](https://docs-assets.developer.apple.com/coreml/models/VGG16.mlmodel) | [Demo](https://github.com/alaphao/CoreMLExample) | [Reference](https://arxiv.org/abs/1409.1556)
* **Car Recognition** - Предсказывает марку и модель автомобиля. [Download](https://github.com/likedan/Core-ML-Car-Recognition/blob/master/Convert/CarRecognition.mlmodel) | [Demo](https://github.com/ytakzk/CoreML-samples) | [Reference](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)
* **YOLO** - Распознаёт, какие объекты находятся на заданном изображении и где именно они расположены. [Download](https://github.com/hollance/YOLO-CoreML-MPSNNGraph/blob/master/TinyYOLO-CoreML/TinyYOLO-CoreML/TinyYOLO.mlmodel) | [Demo](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) | [Reference](http://machinethink.net/blog/object-detection-with-yolo)
* **AgeNet** - Предсказывает возраст человека по портрету. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mT1J3T1BEeWx4TWc/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **GenderNet** - Предсказывает пол человека по портрету. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mYkNsZHlyc2ZuaFk/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **MNIST** - Предсказывает рукописные (нарисованные) цифры по изображениям. [Download](https://github.com/ph1ps/MNIST-CoreML/raw/master/MNISTPrediction/MNIST.mlmodel) | [Demo](https://github.com/ph1ps/MNIST-CoreML) | [Reference](http://yann.lecun.com/exdb/mnist/)
* **EmotionNet** - Предсказывает эмоцию человека по портрету. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6mTlYtRGdXNFlpWDQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FacesVisionDemo) | [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)
* **SentimentVision** - Предсказывает положительную или отрицательную тональность по изображениям. [Download](https://drive.google.com/open?id=0B1ghKa_MYL6mZ0dITW5uZlgyNTg) | [Demo](https://github.com/cocoa-ai/SentimentVisionDemo) | [Reference](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)
* **Food101** - Предсказывает тип блюд по изображениям. [Download](https://drive.google.com/open?id=0B5TjkH3njRqnVjBPZGRZbkNITjA) | [Demo](https://github.com/ph1ps/Food101-CoreML) | [Reference](http://visiir.lip6.fr/explore)
* **Oxford102** - Определяет вид цветов по изображениям. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/FlowersVisionDemo) | [Reference](http://jimgoo.com/flower-power/)
* **FlickrStyle** - Определяет художественный стиль изображений. [Download](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [Demo](https://github.com/cocoa-ai/StylesVisionDemo) | [Reference](http://sergeykarayev.com/files/1311.3715v3.pdf)
* **RN1015k500** - Предсказывает место, где было сделано фото. [Download](https://s3.amazonaws.com/aws-bigdata-blog/artifacts/RN1015k500/RN1015k500.mlmodel) | [Demo](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) | [Reference](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)
* **Nudity** - Классифицирует изображение как NSFW (обнажённое) или SFW (не обнажённое)
 [Download](https://drive.google.com/open?id=0B5TjkH3njRqncDJpdDB1Tkl2S2s) | [Demo](https://github.com/ph1ps/Nudity-CoreML) | [Reference](https://github.com/yahoo/open_nsfw)
* **TextRecognition (ML Kit)** - Распознавание текста в реальном времени с помощью встроенной модели ML Kit. [Download]() | [Demo](https://github.com/tucan9389/TextRecognition-MLKit) | [Reference](https://firebase.google.com/docs/ml-kit/ios/recognize-text)
* **ImageSegmentation** - Разбивает пиксели кадра камеры или изображения на предопределённый набор классов. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/ImageSegmentation-CoreML) | [Reference](https://github.com/tensorflow/models/tree/master/research/deeplab)
* **DepthPrediction** - Предсказывает глубину по одному изображению. [Download](https://developer.apple.com/machine-learning/models/) | [Demo](https://github.com/tucan9389/DepthPrediction-CoreML) | [Reference](https://github.com/iro-cp/FCRN-DepthPrediction)

## Изображение - Изображение
*Модели, которые преобразуют изображения.*
* **HED** - Обнаруживает вложенные границы на цветном изображении. [Download](https://github.com/s1ddok/HED-CoreML/blob/master/HED-CoreML/Models/HED_so.mlmodel) | [Demo](https://github.com/s1ddok/HED-CoreML) | [Reference](http://dl.acm.org/citation.cfm?id=2654889)
* **AnimeScale2x** - Обрабатывает рисунок в аниме-стиле, увеличенный бикубической интерполяцией [Download](https://github.com/imxieyi/waifu2x-ios/blob/master/waifu2x/models/anime_noise0_model.mlmodel) | [Demo](https://github.com/imxieyi/waifu2x-ios) | [Reference](https://arxiv.org/abs/1501.00092)

## Текст - Метаданные/Текст
*Модели, которые обрабатывают текстовые данные*
* **Sentiment Polarity** - Предсказывает положительную или отрицательную тональность по предложениям. [Download](https://github.com/cocoa-ai/SentimentCoreMLDemo/raw/master/SentimentPolarity/Resources/SentimentPolarity.mlmodel) | [Demo](https://github.com/cocoa-ai/SentimentCoreMLDemo) | [Reference](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)
* **DocumentClassification** - Классифицирует новостные статьи по одной из 5 категорий. [Download](https://github.com/toddkramer/DocumentClassifier/blob/master/Sources/DocumentClassification.mlmodel) | [Demo](https://github.com/toddkramer/DocumentClassifier) | [Reference](https://github.com/toddkramer/DocumentClassifier/)
* **iMessage Spam Detection** - Определяет, является ли сообщение спамом. [Download](https://github.com/gkswamy98/imessage-spam-detection/blob/master/MessageClassifier.mlmodel) | [Demo](https://github.com/gkswamy98/imessage-spam-detection/tree/master) | [Reference](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)
* **NamesDT** - Классификация пола с помощью DecisionTreeClassifier [Download](https://github.com/cocoa-ai/NamesCoreMLDemo/blob/master/Names/Resources/NamesDT.mlmodel) | [Demo](https://github.com/cocoa-ai/NamesCoreMLDemo) | [Reference](http://nlpforhackers.io/)
* **Personality Detection** - Предсказывает тип личности на основе документов пользователя (предложений). [Download](https://github.com/novinfard/profiler-sentiment-analysis/tree/master/ios_app/ProfilerSA/ML%20Models) | [Demo](https://github.com/novinfard/profiler-sentiment-analysis/) | [Reference](https://github.com/novinfard/profiler-sentiment-analysis/blob/master/dissertation-v6.pdf)
* **BERT for Question answering** - Реализация BERT для ответов на вопросы с использованием Swift Core ML 3 [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/BERTSQUADFP16.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-bert) | [Reference](https://github.com/huggingface/pytorch-transformers#run_squadpy-fine-tuning-on-squad-for-question-answering)
* **GPT-2** - Генерация текста с OpenAI GPT-2 (Core ML 3) [Download](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/gpt2-512.mlmodel) | [Demo](https://github.com/huggingface/swift-coreml-transformers#-gpt-2) | [Reference](https://github.com/huggingface/pytorch-transformers)
## Разное
* **Exermote** - Предсказывает упражнение, когда iPhone закреплён на правом плече. [Download](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Demo](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [Reference](http://lausbert.com/2017/08/03/exermote/)
* **GestureAI** - Рекомендует артиста на основе заданных местоположения и жанра. [Download](https://goo.gl/avdMjD) | [Demo](https://github.com/akimach/GestureAI-CoreML-iOS) | [Reference](https://github.com/akimach/GestureAI-iOS/tree/master/GestureAI)
* **Artists Recommendation** - Рекомендует артиста на основе заданных местоположения и жанра. [Download](https://github.com/agnosticdev/Blog-Examples/blob/master/UsingCoreMLtoCreateASongRecommendationEngine/Artist.mlmodel) | [Demo]() | [Reference](https://www.agnosticdev.com/blog-entry/python/using-scikit-learn-and-coreml-create-music-recommendation-engine)
* **ChordSuggester** - Предсказывает наиболее вероятный следующий аккорд на основе введённой прогрессии аккордов. [Download](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/blob/main/MLChordSuggester.mlpackage.zip) | [Demo](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/tree/main) | [Reference](https://medium.com/@huanlui/chordsuggester-i-3a1261d4ea9e)

## Обработка речи
* **Streaming ASR** – Движок потокового распознавания речи в реальном времени для iOS. Использует Fast Conformer + CTC, полностью работает на устройстве.  
  [Download](https://github.com/Otosaku/OtosakuStreamingASR-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuStreamingASR-iOS) | [Reference](https://github.com/Otosaku/OtosakuStreamingASR-iOS)
* **Keyword Spotting (KWS)** – Работающий на устройстве движок обнаружения ключевых слов с лёгкой архитектурой CRNN, оптимизированный для мобильных устройств.  
  [Download](https://github.com/Otosaku/OtosakuKWS-iOS/releases) | [Demo](https://github.com/Otosaku/OtosakuKWS-iOS) | [Reference](https://github.com/Otosaku/OtosakuKWS-iOS)

# Инструменты визуализации
*Инструменты, помогающие визуализировать модели CoreML*
* [Netron](https://lutzroeder.github.io/Netron)

# Поддерживаемые форматы
*Список форматов моделей, которые можно конвертировать в Core ML, с примерами*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# Золотая коллекция
*Коллекции моделей машинного обучения, которые можно конвертировать в Core ML*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Большой список моделей в формате Caffe.
* [TensorFlow Models](https://github.com/tensorflow/models) - Модели для TensorFlow.
* [TensorFlow Slim Models](https://github.com/tensorflow/models/tree/master/research/slim/README.md) - Ещё одна коллекция моделей TensorFlow.
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - Коллекция моделей MXNet.

*Отдельные модели машинного обучения, которые можно конвертировать в Core ML. Мы продолжим корректировать список по мере их конвертации.*
* [LaMem](https://github.com/MiyainNYC/Visual-Memorability-through-Caffe) Оценивает запоминаемость картинок.
* [ILGnet](https://github.com/BestiVictory/ILGnet) Эстетическая оценка изображений.
* [Colorization](https://github.com/richzhang/colorization) Автоматическая колоризация с помощью глубоких нейронных сетей.
* [Illustration2Vec](https://github.com/rezoo/illustration2vec) Оценивает набор тегов и извлекает семантические векторы признаков из заданных иллюстраций.
* [CTPN](https://github.com/tianzhi0549/CTPN) Обнаруживает текст на натуральных изображениях.
* [Image Analogy](https://github.com/msracver/Deep-Image-Analogy) Находит семантически значимые плотные соответствия между двумя входными изображениями.
* [iLID](https://github.com/twerkmeister/iLID) Автоматическое определение языка по устной речи.
* [Fashion Detection](https://github.com/liuziwei7/fashion-detection) Определяет одежду по изображениям.
* [Saliency](https://github.com/imatge-upc/saliency-2016-cvpr) Предсказание заметных областей на изображениях традиционно решалось с помощью признаков, созданных вручную.
* [Face Detection](https://github.com/DolotovEvgeniy/DeepPyramid) Определяет лицо на изображении.
* [mtcnn](https://github.com/CongWeilin/mtcnn-caffe) Совместное обнаружение и выравнивание лиц.
* [deephorizon](https://github.com/scottworkman/deephorizon) Оценка линии горизонта по одному изображению.

# Участие и лицензия
* [Смотрите руководство](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* Распространяется по лицензии MIT. Подробнее см. в LICENSE.
