# Awesome 3D Gaussian Splatting

<div align="center">
  Подборка ресурсов, посвящённых 3D Gaussian Splatting (3DGS) и смежным технологиям.

  [**Открыть список статей**](https://mrnerf.github.io/awesome-3D-gaussian-splatting/) | [**LichtFeld Studio**](https://lichtfeld.io) | [**Участвовать**](CONTRIBUTING.md) | [**MrNeRF**](https://www.mrnerf.com)

</div>

## Содержание

- [Статьи и документация](#papers--documentation)
- [Реализации](#implementations)
- [Просмотрщики и поддержка игровых движков](#viewers--game-engine-support)
- [Инструменты и утилиты](#tools--utilities)
- [Учебные ресурсы](#learning-resources)
- [Благодарности](#credits)

## Статьи и документация

### База статей

Посетите нашу полную и доступную для поиска базу статей по 3D Gaussian Splatting:
[Papers Database](https://mrnerf.github.io/awesome-3D-gaussian-splatting/)

### Курсы и руководства

- [Лекции MIT по обратному рендерингу (Модуль 2)](https://www.scenerepresentations.org/courses/inverse-graphics-23/) - Академическое погружение в обратный рендеринг
- [Учебник по 3DGS](https://3dgstutorial.github.io/) - Руководство от авторов оригинальной статьи по 3DGS

### Наборы данных

- [Многовидовый набор данных NERDS 360](https://zubair-irshad.github.io/projects/neo360.html) - Качественный набор данных сцены на открытом воздухе

## Реализации

### Официальный эталон

- [Оригинальный Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) - Эталонная реализация от оригинальных авторов

### Реализации сообщества

| Реализация | Язык | Лицензия | Описание |
| -------------- | -------- | ------- | ----------- |
| [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) ([lichtfeld.io](https://lichtfeld.io)) | C++/CUDA | GPL-3.0 | Модульная рабочая станция для 3D Gaussian Splatting — обучение, инспекция, редактирование, автоматизация и экспорт из единого нативного приложения |
| [Nerfstudio gsplat](https://github.com/nerfstudio-project/gsplat) | Python/CUDA | Apache-2.0 | Интеграция с Nerfstudio |
| [OpenSplat](https://github.com/pierotofy/OpenSplat) | C++/CPU/GPU | AGPL-3.0 | Кроссплатформенное решение |
| [Taichi 3D GS](https://github.com/wanmeihuali/taichi_3d_gaussian_splatting) | Taichi | Apache-2.0 | Реализация на базе Taichi |
| [taichi-splatting](https://github.com/uc-vision/taichi-splatting) | Taichi/PyTorch | Apache-2.0 | Модульный растеризатор для Taichi и PyTorch |
| [Grendel Distributed 3DGS](https://github.com/nyu-systems/Grendel-GS) | Python/CUDA | Apache-2.0 | Распределённое обучение на нескольких GPU |
| [Warp 3DGS](https://github.com/guoriyue/3dgs-warp-scratch) | Warp/Python | AGPL-3.0 | Реализация на базе Warp |
| [RI3D](https://github.com/Asus-Monitor/ri3d-impl) | Python/CUDA | Unlicense | Конвейер gaussian splatting с малым числом снимков |
| [gaussian_splatting](https://github.com/joeyan/gaussian_splatting) | Python/CUDA | MIT | Читаемая реализация с [письменным выводом математики](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md) |
| [3d-gaussian-splatting](https://github.com/WangFeng18/3d-gaussian-splatting) | Python/CUDA | MIT | Компактная переализация |
| [gaussian_splatting_3d](https://github.com/heheyas/gaussian_splatting_3d) | Python/CUDA | | Ранняя реализация сообщества |
| [My-exp-Gaussians](https://github.com/ingra14m/My-exp-Gaussian) | Python/CUDA | | Расширяет способность 3D-гауссиан моделировать сложные сцены |
| [360-gaussian-splatting](https://github.com/inuex35/360-gaussian-splatting) | Python | | Обучает splats напрямую по 360° изображениям |
| [2D Gaussian Splatting](https://github.com/OutofAi/2D-Gaussian-Splatting) | Jupyter | MIT | Разбор 2D gaussian splatting в блокноте |
| [DGSO](https://github.com/An-u-rag/stylized-gaussian-splatting) | Python | MIT | Перенос стиля, применяемый при гауссовой оптимизации |
| [3D-Gaussian-Splatting-Reconstruction](https://github.com/Chi-Blaze-B/3D-Gaussian-Splatting-Reconstruction) | Python | Apache-2.0 | Чистая реализация на PyTorch по видеовходу — без компиляции CUDA, поддержка CPU/NVIDIA GPU, встроенный оценщик поз и GUI |
| [MetalSplat](https://github.com/tchauffi/metalsplat) | PyTorch/Metal | MIT | Реализация на базе Metal для GPU Apple Silicon в PyTorch с автоматической компиляцией ядер в runtime |

### Фреймворки

- [Pointrix](https://github.com/pointrix-project/pointrix) - Дифференцируемый точечный рендеринг
- [msplat](https://github.com/pointrix-project/msplat) - Модульная библиотека дифференцируемой гауссовой растеризации
- [GauStudio](https://github.com/GAP-LAB-CUHK-SZ/gaustudio) - Единый фреймворк с несколькими реализациями
- [DriveStudio](https://github.com/ziyc/drivestudio) - Фреймворк реконструкции городских сцен
- [GSCodecStudio](https://github.com/JasonLSC/GSCodec_Studio) - Сжатие и динамические splatting
- [gaussian-splatting-lightning](https://github.com/yzslab/gaussian-splatting-lightning) - Производные алгоритмы плюс интерактивный веб-просмотрщик

## Просмотрщики и поддержка игровых движков

### Игровые движки

- [Плагин Unity](https://github.com/aras-p/UnityGaussianSplatting)
- [Плагин Unity (gsplat-unity)](https://github.com/wuyize25/gsplat-unity)
- [Плагин Unity (DynGsplat-unity)](https://github.com/HiFi-Human/DynGsplat-unity) - Для динамических splatting
- [Плагин Unreal (MLSLabsGaussianSplattingRenderer-UE)](https://github.com/mlslabs/MLSLabsGaussianSplattingRenderer-UE)
- [Плагин Unreal (XScene-UEPlugin)](https://github.com/xverse-engine/XScene-UEPlugin)
- [Движок PlayCanvas](https://github.com/playcanvas/engine)
- [Плагин Godot (gdgs)](https://github.com/ReconWorldLab/godot-gaussian-splatting) - Плагин рендеринга 3DGS в реальном времени для Godot 4.3+

### Веб-просмотрщики

**WebGL**

- [Splat Viewer](https://github.com/antimatter15/splat)
- [Gauzilla](https://github.com/BladeTransformerLLC/gauzilla)
- [Интерактивный просмотрщик](https://github.com/kishimisu/Gaussian-Splatting-WebGL)
- [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D)
- [gsplat.js](https://github.com/huggingface/gsplat.js)
- [A-Frame](https://github.com/quadjr/aframe-gaussian-splatting)
- [splaTV](https://github.com/antimatter15/splaTV) - Просмотрщик для 4D-гауссиан, с [живой демо](http://antimatter15.com/splaTV/)
- [WebRTC просмотрщик](https://github.com/dylanebert/gaussian-viewer)

**WebGPU**

- [Просмотрщик EPFL](https://github.com/cvlab-epfl/gaussian-splatting-web)
- [WebGPU Splat](https://github.com/KeKsBoTer/web-splat)
- [gaussian-splatting-webgpu](https://github.com/MarcusAndreasSvensson/gaussian-splatting-webgpu)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer) - Высокопроизводительный просмотрщик splat
- [Просмотрщик моделей PlayCanvas](https://github.com/playcanvas/model-viewer) - Просмотрщик для ресурсов glTF и 3DGS

### Настольные просмотрщики

- [3DGS.cpp](https://github.com/shg8/3DGS.cpp) - Рендерер C++/Vulkan для Windows, macOS, Linux, iOS и visionOS
- [vkgs](https://github.com/jaesung-cs/vkgs) - Кроссплатформенный рендерер C++/Vulkan
- [splatviz](https://github.com/Florian-Barthel/splatviz) - Редактируйте код рендеринга в runtime или показывайте несколько сцен одновременно
- [OpenGL Viewer](https://github.com/limacv/GaussianSplattingViewer) - Просмотрщик PyOpenGL, также с официальным CUDA-бэкендом
- [Taichi Viewer](https://github.com/uc-vision/splat-viewer) - Рендерер с возможностью бенчмаркинга
- [DearGaussianGUI](https://github.com/leviome/DearGaussianGUI)
- [LiteViz-GS](https://github.com/panxkun/liteviz-gs)
- [Nerfstudio Viser](https://github.com/viser-project/viser)
- [Nerfstudio (ветка gaussian_splatting)](https://github.com/yzslab/nerfstudio/tree/gaussian_splatting)
- [Просмотрщик Jupyter notebook](https://github.com/shumash/gaussian-splatting/blob/mshugrina/interactive/interactive.ipynb)

### Нативные приложения

- [Дополнение Blender](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [Дополнение Blender (KIRI)](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- [Дополнение Blender (404—GEN)](https://github.com/404-Repo/404-gen-blender-add-on)
- [Рендерер вьюпорта Houdini](https://github.com/rubendhz/houdini-gsplat-renderer) - Реализация HDK/GLSL Gaussian Splatting в Houdini
- [Просмотрщик iOS Metal](https://github.com/laanlabs/metal-splats)
- [Поддержка VR (OpenXR)](https://github.com/hyperlogic/splatapult)
- [Поддержка ROS2](https://github.com/shadygm/ROSplat)
- [Splat Local](https://github.com/michael-L-i/splat-local) - Конвейер видео в 3DGS, полностью локально на Apple Silicon (позы COLMAP/GLOMAP, нативное обучение Metal через Brush), с чекпоинтами обучения, транслируемыми в веб-просмотрщик в реальном времени

## Инструменты и утилиты

### Обработка данных

- [Kapture](https://github.com/naver/kapture) - Единый формат данных для визуальной локализации
- [Обрезчик изображений Kapture](https://gist.github.com/jo-chemla/258e6e40d3d6c2220b29518ff3c17c40) - Обрезчик недеформированных изображений для удаления чёрных рамок
- [Конвертер 3DGS](https://github.com/francescofugazzi/3dgsconverter) - Инструмент преобразования форматов
- [Редактор облака точек](https://github.com/JohannesKrueger/pointcloudeditor) - Редактирование облака точек на базе веба
- [Конвертер SPZ](https://github.com/stytim/spz) - Инструмент преобразования SPZ
- [Конвертер gsbox](https://github.com/gotoeasy/gsbox) - Инструмент преобразования PLY SPLAT SPZ SPX
- [SplatTransform](https://github.com/playcanvas/splat-transform) - CLI-инструмент и библиотека Node/браузер для преобразования и редактирования splats, читает PLY, SOG, SPZ, SPLAT, KSPLAT и LCC/LCC2, записывает PLY, SOG, SPZ, GLB, CSV, LOD и WebP
- [GaussForge](https://github.com/3dgscloud/GaussForge) - Преобразование между PLY, SPZ, SPLAT и KSPLAT на базе C++/WASM
- [SpectacularAI](https://github.com/SpectacularAI/point-cloud-tools) - Скрипты преобразования для разных соглашений 3DGS
- [VGGT Factor Refinement](https://github.com/jashshah999/vggt-factor-refinement) - Конвейер без COLMAP с использованием VGGT + факторного графа, от видео к выводу в формате COLMAP
- [splatreg](https://github.com/Archerkattri/splatreg) - Устанавливаемая через pip регистрация splats: выравнивает и объединяет два скана 3DGS в один фрейм SE(3)/Sim(3) (восстанавливает масштаб), CLI + чистый PyTorch API, без ручного gizmo
- [AURA](https://github.com/Archerkattri/aura) - Калиброванная уверенность на splat для ресурсов 3DGS: метки надёжности out-of-sample, изотоническая калибровка и сертификат распределение-независимой конформной обрезки с сертифицированной лестницей LOD; экспорт через glTF/OpenUSD/SPZ (pip install aura-splat)
- [Open Reality](https://github.com/reality-opened/openreality) - От видео с телефона к 3D-сцене (на базе VGGT-SLAM, экспорт splat с опциональной доработкой gsplat), которую ИИ-ассистент может опрашивать через MCP: измерения, плоскости пола и стен, планирование пути, список объектов, экспорт для обучения роботов; возможен самостоятельный хостинг

### Инструменты разработки

- [GSOPs для Houdini](https://github.com/cgnomads/GSOPs) - Инструменты интеграции с Houdini
- [camorph](https://github.com/Fraunhofer-IIS/camorph) - Преобразование параметров камеры
- [SuperSplat](https://github.com/playcanvas/supersplat) - Бесплатный открытый редактор 3DGS в браузере с публикацией в один клик

## Учебные ресурсы

### Блог-посты

- [Введение в 3DGS](https://huggingface.co/blog/gaussian-splatting) - Руководство HuggingFace
- [Подробный обзор Gaussian Splatting](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362)
- [Очень хорошее (техническое) введение в 3D Gaussian Splatting](https://medium.com/@AriaLeeNotAriel/numbynum-3d-gaussian-splatting-for-real-time-radiance-field-rendering-kerbl-et-al-60c0b25e5544)
- [Gaussian Splatting довольно крут](https://aras-p.info/blog/2023/09/05/Gaussian-Splatting-is-pretty-cool/)
- [Делаем Gaussian Splats меньше](https://aras-p.info/blog/2023/09/13/Making-Gaussian-Splats-smaller/)
- [Делаем Gaussian Splats ещё меньше](https://aras-p.info/blog/2023/09/27/Making-Gaussian-Splats-more-smaller/)
- [Сжатие Gaussian Splats](https://blog.playcanvas.com/compressing-gaussian-splats/)
- [PlayCanvas открывает SOG как открытый код](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) - Spatially Ordered Gaussians, сверхсжатый формат на базе WebP, в 15–20 раз меньше, чем PLY
- [Детали реализации](https://github.com/kwea123/gaussian_splatting_notes) - Техническое погружение
- [Математические основы](https://github.com/chiehwangs/3d-gaussian-theory) - Теоретическое объяснение
- [Математические детали прямого и обратного проходов](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)
- [Реализация на PyTorch](https://myasincifci.github.io/) - Тщательно выполненная реализация Vanilla 3DGS на PyTorch
- [NeRFs против 3DGS](https://edwardahn.me/writing/NeRFvs3DGS/)
- [Gaussian Head Avatars: краткое изложение](https://towardsdatascience.com/gaussian-head-avatars-a-summary-2bd17bd48500)
- [3D в геопространстве: NeRFs, Gaussian Splatting и пространственные вычисления](https://ckoziol.com/blog/2024/radiance_methods/)
- [Руководство по съёмке](https://medium.com/@heyulei/capture-images-for-gaussian-splatting-81d081bbc826) - Учебник по захвату изображений
- [Обсуждение универсального формата gs](https://github.com/mkkellogg/GaussianSplats3D/issues/47#issuecomment-1801360116)

### Доклады

- [Gaussian Splats: готовы к стандартизации?](https://www.youtube.com/watch?v=0xdPpKSkO3I) - Metaverse Standards Forum 28.01.2025
- [Руководство по интеграции с Unity](https://www.youtube.com/watch?v=pM_HV2TU4rU&t=5298s) - Metaverse Standards Forum 06.05.2025

### Видеоуроки

- [Начало работы (Windows)](https://youtu.be/UXtuigy_wYc)
- [Объяснение за две минуты](https://youtu.be/HVv_IQKlafQ)
- [Объяснение 3DGS от Computerphile](https://youtu.be/VkIJbpdTujE)
- [Gaussian Splats Town Hall - Часть 2](https://youtu.be/5_GaPYBHqOo)
- [Введение в gaussian splatting (и плагин Unity)](https://www.xuanprada.com/blog/2023/10/22/intro-to-gaussian-splatting)
- [Учебник Jupyter](https://www.youtube.com/watch?v=OcvA7fmiZYM)

### YouTube-каналы

- [LichtFeld Studio](https://www.youtube.com/@LichtFeldStudio) - Учебники, обзоры релизов и новости разработки для [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio)

## Благодарности

- Спасибо [Leonid Keselman](https://github.com/leonidk) за сообщение о выходе статьи «Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting».
- Спасибо [Eric Haines](https://github.com/erich666) за предложение просмотрщика Jupyter notebook, учебника для Windows и за исправление переносов и других проблем в тексте.
- Спасибо [Henry Pearce](https://github.com/henrypearce4D) за сопровождение вкладов.
- [Yehe Liu](https://x.com/YeheLiu)