# Awesome 3D Gaussian Splatting

<div align="center">
  Una lista curada de recursos centrados en el 3D Gaussian Splatting (3DGS) y tecnologías relacionadas.

  [**Explorar la lista de artículos**](https://mrnerf.github.io/awesome-3D-gaussian-splatting/) | [**LichtFeld Studio**](https://lichtfeld.io) | [**Contribuir**](CONTRIBUTING.md) | [**MrNeRF**](https://www.mrnerf.com)

</div>

## Contenido

- [Artículos y documentación](#artículos-y-documentación)
- [Implementaciones](#implementaciones)
- [Visores y soporte para motores de juego](#visores-y-soporte-para-motores-de-juego)
- [Herramientas y utilidades](#herramientas-y-utilidades)
- [Recursos de aprendizaje](#recursos-de-aprendizaje)
- [Créditos](#créditos)

## Artículos y documentación

### Base de datos de artículos

Visita nuestra completa base de datos buscable de artículos sobre 3D Gaussian Splatting:
[Papers Database](https://mrnerf.github.io/awesome-3D-gaussian-splatting/)

### Cursos y tutoriales

- [Conferencias de MIT sobre renderizado inverso (Módulo 2)](https://www.scenerepresentations.org/courses/inverse-graphics-23/) - Inmersión académica en el renderizado inverso
- [Tutorial de 3DGS](https://3dgstutorial.github.io/) - Tutorial de los autores del artículo original de 3DGS

### Conjuntos de datos

- [Conjunto de datos multi-vista NERDS 360](https://zubair-irshad.github.io/projects/neo360.html) - Conjunto de datos de escenas exteriores de alta calidad

## Implementaciones

### Referencia oficial

- [Gaussian Splatting original](https://github.com/graphdeco-inria/gaussian-splatting) - La implementación de referencia de los autores originales

### Implementaciones de la comunidad

| Implementación | Lenguaje | Licencia | Descripción |
| -------------- | -------- | ------- | ----------- |
| [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) ([lichtfeld.io](https://lichtfeld.io)) | C++/CUDA | GPL-3.0 | La estación de trabajo modular para 3D Gaussian Splatting — entrenar, inspeccionar, editar, automatizar y exportar desde una sola aplicación nativa |
| [Nerfstudio gsplat](https://github.com/nerfstudio-project/gsplat) | Python/CUDA | Apache-2.0 | Integración con Nerfstudio |
| [OpenSplat](https://github.com/pierotofy/OpenSplat) | C++/CPU/GPU | AGPL-3.0 | Solución multiplataforma |
| [Taichi 3D GS](https://github.com/wanmeihuali/taichi_3d_gaussian_splatting) | Taichi | Apache-2.0 | Implementación basada en Taichi |
| [taichi-splatting](https://github.com/uc-vision/taichi-splatting) | Taichi/PyTorch | Apache-2.0 | Rasterizador modular para Taichi y PyTorch |
| [Grendel Distributed 3DGS](https://github.com/nyu-systems/Grendel-GS) | Python/CUDA | Apache-2.0 | Entrenamiento distribuido multi-GPU |
| [Warp 3DGS](https://github.com/guoriyue/3dgs-warp-scratch) | Warp/Python | AGPL-3.0 | Implementación basada en Warp |
| [RI3D](https://github.com/Asus-Monitor/ri3d-impl) | Python/CUDA | Unlicense | Pipeline de gaussian splatting few-shot |
| [gaussian_splatting](https://github.com/joeyan/gaussian_splatting) | Python/CUDA | MIT | Implementación legible con una [derivación escrita de las matemáticas](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md) |
| [3d-gaussian-splatting](https://github.com/WangFeng18/3d-gaussian-splatting) | Python/CUDA | MIT | Reimplementación compacta |
| [gaussian_splatting_3d](https://github.com/heheyas/gaussian_splatting_3d) | Python/CUDA | | Reimplementación comunitaria temprana |
| [My-exp-Gaussians](https://github.com/ingra14m/My-exp-Gaussian) | Python/CUDA | | Mejora la capacidad de los gaussianos 3D para modelar escenas complejas |
| [360-gaussian-splatting](https://github.com/inuex35/360-gaussian-splatting) | Python | | Entrena splats directamente a partir de imágenes 360° |
| [2D Gaussian Splatting](https://github.com/OutofAi/2D-Gaussian-Splatting) | Jupyter | MIT | Recorrido en notebook del gaussian splatting 2D |
| [DGSO](https://github.com/An-u-rag/stylized-gaussian-splatting) | Python | MIT | Transferencia de estilo aplicada durante la optimización gaussiana |
| [3D-Gaussian-Splatting-Reconstruction](https://github.com/Chi-Blaze-B/3D-Gaussian-Splatting-Reconstruction) | Python | Apache-2.0 | Implementación pura de PyTorch a partir de entrada de vídeo — no requiere compilación CUDA, admite backends CPU/NVIDIA GPU, con estimador de pose y GUI integrados |
| [MetalSplat](https://github.com/tchauffi/metalsplat) | PyTorch/Metal | MIT | Implementación basada en Metal para GPUs Apple Silicon en PyTorch con compilación automática de kernels en tiempo de ejecución |

### Frameworks

- [Pointrix](https://github.com/pointrix-project/pointrix) - Renderizado diferenciable basado en puntos
- [msplat](https://github.com/pointrix-project/msplat) - Biblioteca de rasterización gaussiana diferenciable modular
- [GauStudio](https://github.com/GAP-LAB-CUHK-SZ/gaustudio) - Framework unificado con múltiples implementaciones
- [DriveStudio](https://github.com/ziyc/drivestudio) - Framework de reconstrucción de escenas urbanas
- [GSCodecStudio](https://github.com/JasonLSC/GSCodec_Studio) - Compresión y splattings dinámicos
- [gaussian-splatting-lightning](https://github.com/yzslab/gaussian-splatting-lightning) - Algoritmos derivados más un visor web interactivo

## Visores y soporte para motores de juego

### Motores de juego

- [Plugin de Unity](https://github.com/aras-p/UnityGaussianSplatting)
- [Plugin de Unity (gsplat-unity)](https://github.com/wuyize25/gsplat-unity)
- [Plugin de Unity (DynGsplat-unity)](https://github.com/HiFi-Human/DynGsplat-unity) - Para splattings dinámicos
- [Plugin de Unreal (MLSLabsGaussianSplattingRenderer-UE)](https://github.com/mlslabs/MLSLabsGaussianSplattingRenderer-UE)
- [Plugin de Unreal (XScene-UEPlugin)](https://github.com/xverse-engine/XScene-UEPlugin)
- [Motor PlayCanvas](https://github.com/playcanvas/engine)
- [Plugin de Godot (gdgs)](https://github.com/ReconWorldLab/godot-gaussian-splatting) - Plugin de renderizado 3DGS en tiempo real para Godot 4.3+

### Visores web

**WebGL**

- [Splat Viewer](https://github.com/antimatter15/splat)
- [Gauzilla](https://github.com/BladeTransformerLLC/gauzilla)
- [Visor interactivo](https://github.com/kishimisu/Gaussian-Splatting-WebGL)
- [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D)
- [gsplat.js](https://github.com/huggingface/gsplat.js)
- [A-Frame](https://github.com/quadjr/aframe-gaussian-splatting)
- [splaTV](https://github.com/antimatter15/splaTV) - Visor para gaussianos 4D, con una [demostración en vivo](http://antimatter15.com/splaTV/)
- [Visor WebRTC](https://github.com/dylanebert/gaussian-viewer)

**WebGPU**

- [Visor EPFL](https://github.com/cvlab-epfl/gaussian-splatting-web)
- [WebGPU Splat](https://github.com/KeKsBoTer/web-splat)
- [gaussian-splatting-webgpu](https://github.com/MarcusAndreasSvensson/gaussian-splatting-webgpu)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer) - Visor de splats de alto rendimiento
- [Visor de modelos PlayCanvas](https://github.com/playcanvas/model-viewer) - Visor para activos glTF y 3DGS

### Visores de escritorio

- [3DGS.cpp](https://github.com/shg8/3DGS.cpp) - Renderizador C++/Vulkan para Windows, macOS, Linux, iOS y visionOS
- [vkgs](https://github.com/jaesung-cs/vkgs) - Renderizador C++/Vulkan multiplataforma
- [splatviz](https://github.com/Florian-Barthel/splatviz) - Edita el código de renderizado en tiempo de ejecución o muestra varias escenas a la vez
- [OpenGL Viewer](https://github.com/limacv/GaussianSplattingViewer) - Visor PyOpenGL, también con backend CUDA oficial
- [Taichi Viewer](https://github.com/uc-vision/splat-viewer) - Renderizador con capacidad de benchmark
- [DearGaussianGUI](https://github.com/leviome/DearGaussianGUI)
- [LiteViz-GS](https://github.com/panxkun/liteviz-gs)
- [Nerfstudio Viser](https://github.com/viser-project/viser)
- [Nerfstudio (rama gaussian_splatting)](https://github.com/yzslab/nerfstudio/tree/gaussian_splatting)
- [Visor Jupyter notebook](https://github.com/shumash/gaussian-splatting/blob/mshugrina/interactive/interactive.ipynb)

### Aplicaciones nativas

- [Complemento de Blender](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [Complemento de Blender (KIRI)](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- [Complemento de Blender (404—GEN)](https://github.com/404-Repo/404-gen-blender-add-on)
- [Renderizador de viewport de Houdini](https://github.com/rubendhz/houdini-gsplat-renderer) - Implementación HDK/GLSL de Gaussian Splatting en Houdini
- [Visor iOS Metal](https://github.com/laanlabs/metal-splats)
- [Soporte VR (OpenXR)](https://github.com/hyperlogic/splatapult)
- [Soporte ROS2](https://github.com/shadygm/ROSplat)
- [Splat Local](https://github.com/michael-L-i/splat-local) - Pipeline de vídeo a 3DGS que se ejecuta totalmente en local en Apple Silicon (poses COLMAP/GLOMAP, entrenamiento nativo Metal vía Brush), con puntos de control de entrenamiento transmitidos en vivo a un visor en el navegador

## Herramientas y utilidades

### Procesamiento de datos

- [Kapture](https://github.com/naver/kapture) - Formato de datos unificado para localización visual
- [Recortador de imágenes Kapture](https://gist.github.com/jo-chemla/258e6e40d3d6c2220b29518ff3c17c40) - Recortador de imágenes sin distorsión para eliminar bordes negros
- [Convertidor 3DGS](https://github.com/francescofugazzi/3dgsconverter) - Herramienta de conversión de formato
- [Editor de nube de puntos](https://github.com/JohannesKrueger/pointcloudeditor) - Edición de nubes de puntos basada en web
- [Convertidor SPZ](https://github.com/stytim/spz) - Herramienta de conversión SPZ
- [Convertidor gsbox](https://github.com/gotoeasy/gsbox) - Herramienta de conversión PLY SPLAT SPZ SPX
- [SplatTransform](https://github.com/playcanvas/splat-transform) - Herramienta CLI y biblioteca Node/navegador para convertir y editar splats, lee PLY, SOG, SPZ, SPLAT, KSPLAT y LCC/LCC2, escribe PLY, SOG, SPZ, GLB, CSV, LOD y WebP
- [GaussForge](https://github.com/3dgscloud/GaussForge) - Conversión basada en C++/WASM entre PLY, SPZ, SPLAT y KSPLAT
- [SpectacularAI](https://github.com/SpectacularAI/point-cloud-tools) - Scripts de conversión para diferentes convenciones 3DGS
- [VGGT Factor Refinement](https://github.com/jashshah999/vggt-factor-refinement) - Pipeline sin COLMAP que usa VGGT + grafo de factores, de vídeo a salida en formato COLMAP
- [splatreg](https://github.com/Archerkattri/splatreg) - Registro de splats instalable con pip: alinea y fusiona dos escaneos 3DGS en un marco SE(3)/Sim(3) (recupera la escala), API CLI + PyTorch pura, sin gizmo manual
- [AURA](https://github.com/Archerkattri/aura) - Confianza calibrada por splat para activos 3DGS: etiquetas de fiabilidad leave-out, calibración isotónica y un certificado de poda conforme libre de distribución con una escalera LOD certificada; exporta vía glTF/OpenUSD/SPZ (pip install aura-splat)
- [Open Reality](https://github.com/reality-opened/openreality) - De vídeo de teléfono a una escena 3D (basado en VGGT-SLAM, exportación de splat con refinamiento gsplat opcional) que un asistente de IA puede consultar vía MCP: mediciones, planos de suelo y pared, planificación de rutas, lista de objetos, exportaciones de entrenamiento de robots; auto-alojable

### Herramientas de desarrollo

- [GSOPs para Houdini](https://github.com/cgnomads/GSOPs) - Herramientas de integración con Houdini
- [camorph](https://github.com/Fraunhofer-IIS/camorph) - Conversión de parámetros de cámara
- [SuperSplat](https://github.com/playcanvas/supersplat) - Editor 3DGS gratuito, de código abierto y basado en navegador, con publicación en un clic

## Recursos de aprendizaje

### Artículos de blog

- [Introducción a 3DGS](https://huggingface.co/blog/gaussian-splatting) - Guía de HuggingFace
- [Visión general completa de Gaussian Splatting](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362)
- [Muy buena (técnica) introducción a 3D Gaussian Splatting](https://medium.com/@AriaLeeNotAriel/numbynum-3d-gaussian-splatting-for-real-time-radiance-field-rendering-kerbl-et-al-60c0b25e5544)
- [Gaussian Splatting es bastante genial](https://aras-p.info/blog/2023/09/05/Gaussian-Splatting-is-pretty-cool/)
- [Hacer los Gaussian Splats más pequeños](https://aras-p.info/blog/2023/09/13/Making-Gaussian-Splats-smaller/)
- [Hacer los Gaussian Splats aún más pequeños](https://aras-p.info/blog/2023/09/27/Making-Gaussian-Splats-more-smaller/)
- [Comprimir Gaussian Splats](https://blog.playcanvas.com/compressing-gaussian-splats/)
- [PlayCanvas abre SOG como código abierto](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) - Spatially Ordered Gaussians, un formato supercomprimido basado en WebP, de 15 a 20 veces más pequeño que PLY
- [Detalles de implementación](https://github.com/kwea123/gaussian_splatting_notes) - Análisis técnico a fondo
- [Fundamentos matemáticos](https://github.com/chiehwangs/3d-gaussian-theory) - Explicación teórica
- [Detalles matemáticos de los pases hacia delante y hacia atrás](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)
- [Implementación en PyTorch](https://myasincifci.github.io/) - Implementación curada de Vanilla 3DGS en PyTorch
- [NeRFs vs. 3DGS](https://edwardahn.me/writing/NeRFvs3DGS/)
- [Gaussian Head Avatars: un resumen](https://towardsdatascience.com/gaussian-head-avatars-a-summary-2bd17bd48500)
- [3D en geoespacial: NeRFs, Gaussian Splatting y computación espacial](https://ckoziol.com/blog/2024/radiance_methods/)
- [Guía de captura](https://medium.com/@heyulei/capture-images-for-gaussian-splatting-81d081bbc826) - Tutorial de captura de imágenes
- [Discusión sobre el formato universal gs](https://github.com/mkkellogg/GaussianSplats3D/issues/47#issuecomment-1801360116)

### Charlas

- [Gaussian Splats: ¿listos para la estandarización?](https://www.youtube.com/watch?v=0xdPpKSkO3I) - Metaverse Standards Forum 28/01/2025
- [Guía de integración con Unity](https://www.youtube.com/watch?v=pM_HV2TU4rU&t=5298s) - Metaverse Standards Forum 06/05/2025

### Tutoriales en vídeo

- [Primeros pasos (Windows)](https://youtu.be/UXtuigy_wYc)
- [Explicación de dos minutos](https://youtu.be/HVv_IQKlafQ)
- [Explicación 3DGS de Computerphile](https://youtu.be/VkIJbpdTujE)
- [Gaussian Splats Town Hall - Parte 2](https://youtu.be/5_GaPYBHqOo)
- [Introducción a gaussian splatting (y plugin de Unity)](https://www.xuanprada.com/blog/2023/10/22/intro-to-gaussian-splatting)
- [Tutorial de Jupyter](https://www.youtube.com/watch?v=OcvA7fmiZYM)

### Canales de YouTube

- [LichtFeld Studio](https://www.youtube.com/@LichtFeldStudio) - Tutoriales, recorridos de lanzamiento y novedades de desarrollo para [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio)

## Créditos

- Gracias a [Leonid Keselman](https://github.com/leonidk) por informarme de la publicación del artículo "Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting".
- Gracias a [Eric Haines](https://github.com/erich666) por sugerir el visor Jupyter notebook, el tutorial de Windows y por corregir guiones y otros problemas de texto.
- Gracias a [Henry Pearce](https://github.com/henrypearce4D) por mantener las contribuciones.
- [Yehe Liu](https://x.com/YeheLiu)
