# Awesome 3D Gaussian Splatting

<div align="center">
  Eine kuratierte Sammlung von Ressourcen rund um 3D Gaussian Splatting (3DGS) und verwandte Technologien.

  [**Paper-Liste durchsuchen**](https://mrnerf.github.io/awesome-3D-gaussian-splatting/) | [**LichtFeld Studio**](https://lichtfeld.io) | [**Mitwirken**](CONTRIBUTING.md) | [**MrNeRF**](https://www.mrnerf.com)

</div>

## Inhalt

- [Papers & Dokumentation](#papers--documentation)
- [Implementierungen](#implementations)
- [Viewer & Game-Engine-Unterstützung](#viewers--game-engine-support)
- [Werkzeuge & Utilities](#tools--utilities)
- [Lernressourcen](#learning-resources)
- [Danksagungen](#credits)

## Papers & Dokumentation

### Paper-Datenbank

Besuchen Sie unsere umfassende, durchsuchbare Datenbank von 3D-Gaussian-Splatting-Papers:
[Papers Database](https://mrnerf.github.io/awesome-3D-gaussian-splatting/)

### Kurse & Tutorials

- [MIT Inverse Rendering Lectures (Modul 2)](https://www.scenerepresentations.org/courses/inverse-graphics-23/) - Akademischer Tiefgang in Inverse Rendering
- [3DGS-Tutorial](https://3dgstutorial.github.io/) - Tutorial der Autoren des ursprünglichen 3DGS-Papers

### Datensätze

- [NERDS 360 Multi-View-Datensatz](https://zubair-irshad.github.io/projects/neo360.html) - Hochwertiger Datensatz für Außenszenen

## Implementierungen

### Offizielle Referenz

- [Original Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) - Die Referenzimplementierung der ursprünglichen Autoren

### Community-Implementierungen

| Implementierung | Sprache | Lizenz | Beschreibung |
| -------------- | -------- | ------- | ----------- |
| [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) ([lichtfeld.io](https://lichtfeld.io)) | C++/CUDA | GPL-3.0 | Die modulare Workstation für 3D Gaussian Splatting — trainieren, untersuchen, bearbeiten, automatisieren und exportieren aus einer einzigen nativen App |
| [Nerfstudio gsplat](https://github.com/nerfstudio-project/gsplat) | Python/CUDA | Apache-2.0 | Integration mit Nerfstudio |
| [OpenSplat](https://github.com/pierotofy/OpenSplat) | C++/CPU/GPU | AGPL-3.0 | Plattformübergreifende Lösung |
| [Taichi 3D GS](https://github.com/wanmeihuali/taichi_3d_gaussian_splatting) | Taichi | Apache-2.0 | Taichi-basierte Implementierung |
| [taichi-splatting](https://github.com/uc-vision/taichi-splatting) | Taichi/PyTorch | Apache-2.0 | Modularer Rasterizer für Taichi und PyTorch |
| [Grendel Distributed 3DGS](https://github.com/nyu-systems/Grendel-GS) | Python/CUDA | Apache-2.0 | Multi-GPU verteiltes Training |
| [Warp 3DGS](https://github.com/guoriyue/3dgs-warp-scratch) | Warp/Python | AGPL-3.0 | Warp-basierte Implementierung |
| [RI3D](https://github.com/Asus-Monitor/ri3d-impl) | Python/CUDA | Unlicense | Few-Shot-Gaussian-Splatting-Pipeline |
| [gaussian_splatting](https://github.com/joeyan/gaussian_splatting) | Python/CUDA | MIT | Lesbare Implementierung mit einer [schriftlichen Herleitung der Mathematik](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md) |
| [3d-gaussian-splatting](https://github.com/WangFeng18/3d-gaussian-splatting) | Python/CUDA | MIT | Kompakte Neuimplementierung |
| [gaussian_splatting_3d](https://github.com/heheyas/gaussian_splatting_3d) | Python/CUDA | | Frühe Community-Neuimplementierung |
| [My-exp-Gaussians](https://github.com/ingra14m/My-exp-Gaussian) | Python/CUDA | | Erweitert die Fähigkeit von 3D-Gaußschen, komplexe Szenen zu modellieren |
| [360-gaussian-splatting](https://github.com/inuex35/360-gaussian-splatting) | Python | | Trainiert Splats direkt aus 360°-Bildern |
| [2D Gaussian Splatting](https://github.com/OutofAi/2D-Gaussian-Splatting) | Jupyter | MIT | Notebook-Durchgang durch 2D-Gaussian-Splatting |
| [DGSO](https://github.com/An-u-rag/stylized-gaussian-splatting) | Python | MIT | Stiltransfer, angewendet während der Gaußschen Optimierung |
| [3D-Gaussian-Splatting-Reconstruction](https://github.com/Chi-Blaze-B/3D-Gaussian-Splatting-Reconstruction) | Python | Apache-2.0 | Reine PyTorch-Implementierung aus Videoeingaben — kein CUDA-Compile nötig, unterstützt CPU/NVIDIA-GPU-Backends, integrierter Pose-Schätzer & GUI |
| [MetalSplat](https://github.com/tchauffi/metalsplat) | PyTorch/Metal | MIT | Metal-basierte Implementierung für Apple-Silicon-GPUs unter PyTorch mit automatischer Kernel-Kompilierung zur Laufzeit |

### Frameworks

- [Pointrix](https://github.com/pointrix-project/pointrix) - Differenzierbares punktbasiertes Rendering
- [msplat](https://github.com/pointrix-project/msplat) - Modulare differenzierbare Gaußsche-Rasterisierungsbibliothek
- [GauStudio](https://github.com/GAP-LAB-CUHK-SZ/gaustudio) - Einheitliches Framework mit mehreren Implementierungen
- [DriveStudio](https://github.com/ziyc/drivestudio) - Framework zur Rekonstruktion städtischer Szenen
- [GSCodecStudio](https://github.com/JasonLSC/GSCodec_Studio) - Kompression und dynamische Splattings
- [gaussian-splatting-lightning](https://github.com/yzslab/gaussian-splatting-lightning) - Abgeleitete Algorithmen plus ein interaktiver Web-Viewer

## Viewer & Game-Engine-Unterstützung

### Game Engines

- [Unity-Plugin](https://github.com/aras-p/UnityGaussianSplatting)
- [Unity-Plugin (gsplat-unity)](https://github.com/wuyize25/gsplat-unity)
- [Unity-Plugin (DynGsplat-unity)](https://github.com/HiFi-Human/DynGsplat-unity) - Für dynamische Splattings
- [Unreal-Plugin (MLSLabsGaussianSplattingRenderer-UE)](https://github.com/mlslabs/MLSLabsGaussianSplattingRenderer-UE)
- [Unreal-Plugin (XScene-UEPlugin)](https://github.com/xverse-engine/XScene-UEPlugin)
- [PlayCanvas Engine](https://github.com/playcanvas/engine)
- [Godot-Plugin (gdgs)](https://github.com/ReconWorldLab/godot-gaussian-splatting) - Echtzeit-3DGS-Render-Plugin für Godot 4.3+

### Web-Viewer

**WebGL**

- [Splat Viewer](https://github.com/antimatter15/splat)
- [Gauzilla](https://github.com/BladeTransformerLLC/gauzilla)
- [Interaktiver Viewer](https://github.com/kishimisu/Gaussian-Splatting-WebGL)
- [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D)
- [gsplat.js](https://github.com/huggingface/gsplat.js)
- [A-Frame](https://github.com/quadjr/aframe-gaussian-splatting)
- [splaTV](https://github.com/antimatter15/splaTV) - Viewer für 4D-Gaußsche, mit einer [Live-Demo](http://antimatter15.com/splaTV/)
- [WebRTC-Viewer](https://github.com/dylanebert/gaussian-viewer)

**WebGPU**

- [EPFL-Viewer](https://github.com/cvlab-epfl/gaussian-splatting-web)
- [WebGPU Splat](https://github.com/KeKsBoTer/web-splat)
- [gaussian-splatting-webgpu](https://github.com/MarcusAndreasSvensson/gaussian-splatting-webgpu)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer) - Hochleistungs-Splat-Viewer
- [PlayCanvas Model Viewer](https://github.com/playcanvas/model-viewer) - Viewer für glTF- und 3DGS-Assets

### Desktop-Viewer

- [3DGS.cpp](https://github.com/shg8/3DGS.cpp) - C++/Vulkan-Renderer für Windows, macOS, Linux, iOS und visionOS
- [vkgs](https://github.com/jaesung-cs/vkgs) - Plattformübergreifender C++/Vulkan-Renderer
- [splatviz](https://github.com/Florian-Barthel/splatviz) - Render-Code zur Laufzeit bearbeiten oder mehrere Szenen gleichzeitig anzeigen
- [OpenGL Viewer](https://github.com/limacv/GaussianSplattingViewer) - PyOpenGL-Viewer, auch mit offiziellem CUDA-Backend
- [Taichi Viewer](https://github.com/uc-vision/splat-viewer) - Renderer mit Benchmarking-Fähigkeit
- [DearGaussianGUI](https://github.com/leviome/DearGaussianGUI)
- [LiteViz-GS](https://github.com/panxkun/liteviz-gs)
- [Nerfstudio Viser](https://github.com/viser-project/viser)
- [Nerfstudio (Branch gaussian_splatting)](https://github.com/yzslab/nerfstudio/tree/gaussian_splatting)
- [Jupyter-Notebook-Viewer](https://github.com/shumash/gaussian-splatting/blob/mshugrina/interactive/interactive.ipynb)

### Native Anwendungen

- [Blender-Add-on](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [Blender-Add-on (KIRI)](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- [Blender-Add-on (404—GEN)](https://github.com/404-Repo/404-gen-blender-add-on)
- [Houdini Viewport Renderer](https://github.com/rubendhz/houdini-gsplat-renderer) - HDK/GLSL-Implementierung von Gaussian Splatting in Houdini
- [iOS Metal Viewer](https://github.com/laanlabs/metal-splats)
- [VR-Unterstützung (OpenXR)](https://github.com/hyperlogic/splatapult)
- [ROS2-Unterstützung](https://github.com/shadygm/ROSplat)
- [Splat Local](https://github.com/michael-L-i/splat-local) - Videobis-3DGS-Pipeline, die vollständig lokal auf Apple Silicon läuft (COLMAP/GLOMAP-Posen, Metal-natives Training über Brush), mit Trainings-Checkpoints, die live in einen Browser-Viewer gestreamt werden

## Werkzeuge & Utilities

### Datenverarbeitung

- [Kapture](https://github.com/naver/kapture) - Einheitliches Datenformat für visuelle Lokalisierung
- [Kapture-Bildbeschneider](https://gist.github.com/jo-chemla/258e6e40d3d6c2220b29518ff3c17c40) - Entzerrtes Bildbeschneider-Tool zum Entfernen schwarzer Ränder
- [3DGS-Konverter](https://github.com/francescofugazzi/3dgsconverter) - Formatkonvertierungswerkzeug
- [Point-Cloud-Editor](https://github.com/JohannesKrueger/pointcloudeditor) - Webbasierte Punktwolkenbearbeitung
- [SPZ-Konverter](https://github.com/stytim/spz) - SPZ-Konvertierungswerkzeug
- [gsbox-Konverter](https://github.com/gotoeasy/gsbox) - PLY-SPLAT-SPZ-SPX-Konvertierungswerkzeug
- [SplatTransform](https://github.com/playcanvas/splat-transform) - CLI-Werkzeug und Node/Browser-Bibliothek zum Konvertieren und Bearbeiten von Splats, liest PLY, SOG, SPZ, SPLAT, KSPLAT und LCC/LCC2, schreibt PLY, SOG, SPZ, GLB, CSV, LOD und WebP
- [GaussForge](https://github.com/3dgscloud/GaussForge) - C++/WASM-basierte Konvertierung zwischen PLY, SPZ, SPLAT und KSPLAT
- [SpectacularAI](https://github.com/SpectacularAI/point-cloud-tools) - Konvertierungsskripte für verschiedene 3DGS-Konventionen
- [VGGT Factor Refinement](https://github.com/jashshah999/vggt-factor-refinement) - COLMAP-freie Pipeline mit VGGT + Faktorgraph, von Video zu COLMAP-Formatausgabe
- [splatreg](https://github.com/Archerkattri/splatreg) - Per pip installierbare Splat-Registrierung: zwei 3DGS-Scans in einen SE(3)/Sim(3)-Rahmen ausrichten & zusammenführen (rekonstruiert Maßstab), CLI + reine-PyTorch-API, kein manueller Gizmo
- [AURA](https://github.com/Archerkattri/aura) - Kalibrierte Konfidenz pro Splat für 3DGS-Assets: Leave-out-Zuverlässigkeitslabels, isotonische Kalibrierung und ein verteilungsfreies konformes Pruning-Zertifikat mit zertifizierter LOD-Leiter; Export über glTF/OpenUSD/SPZ (pip install aura-splat)
- [Open Reality](https://github.com/reality-opened/openreality) - Vom Handyvideo zu einer 3D-Szene (VGGT-SLAM-basiert, Splat-Export mit optionaler gsplat-Verfeinerung), die ein KI-Assistent über MCP abfragen kann: Messungen, Boden- und Wandebenen, Pfadplanung, Objektliste, Robotertrainings-Exporte; selbst hostbar

### Entwicklungswerkzeuge

- [GSOPs für Houdini](https://github.com/cgnomads/GSOPs) - Houdini-Integrationstools
- [camorph](https://github.com/Fraunhofer-IIS/camorph) - Kameraparameter-Konvertierung
- [SuperSplat](https://github.com/playcanvas/supersplat) - Kostenloser, Open-Source, browserbasierter 3DGS-Editor mit Ein-Klick-Veröffentlichung

## Lernressourcen

### Blog-Beiträge

- [3DGS-Einführung](https://huggingface.co/blog/gaussian-splatting) - HuggingFace-Leitfaden
- [Umfassender Überblick über Gaussian Splatting](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362)
- [Sehr gute (technische) Einführung in 3D Gaussian Splatting](https://medium.com/@AriaLeeNotAriel/numbynum-3d-gaussian-splatting-for-real-time-radiance-field-rendering-kerbl-et-al-60c0b25e5544)
- [Gaussian Splatting ist ziemlich cool](https://aras-p.info/blog/2023/09/05/Gaussian-Splatting-is-pretty-cool/)
- [Gaussian Splats kleiner machen](https://aras-p.info/blog/2023/09/13/Making-Gaussian-Splats-smaller/)
- [Gaussian Splats noch kleiner machen](https://aras-p.info/blog/2023/09/27/Making-Gaussian-Splats-more-smaller/)
- [Gaussian Splats komprimieren](https://blog.playcanvas.com/compressing-gaussian-splats/)
- [PlayCanvas veröffentlicht SOG als Open Source](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) - Spatially Ordered Gaussians, ein superkomprimiertes, auf WebP basierendes Format, das 15–20× kleiner als PLY ist
- [Implementierungsdetails](https://github.com/kwea123/gaussian_splatting_notes) - Technischer Tiefgang
- [Mathematische Grundlagen](https://github.com/chiehwangs/3d-gaussian-theory) - Theorieerklärung
- [Mathematische Details der Vorwärts- und Rückwärts-Pässe](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)
- [PyTorch-Implementierung](https://myasincifci.github.io/) - Kuratierte Implementierung von Vanilla 3DGS in PyTorch
- [NeRFs vs. 3DGS](https://edwardahn.me/writing/NeRFvs3DGS/)
- [Gaussian Head Avatars: Eine Zusammenfassung](https://towardsdatascience.com/gaussian-head-avatars-a-summary-2bd17bd48500)
- [3D im Georaum: NeRFs, Gaussian Splatting und Spatial Computing](https://ckoziol.com/blog/2024/radiance_methods/)
- [Erfassungsleitfaden](https://medium.com/@heyulei/capture-images-for-gaussian-splatting-81d081bbc826) - Bildaufnahme-Tutorial
- [Diskussion über gs-Universalformat](https://github.com/mkkellogg/GaussianSplats3D/issues/47#issuecomment-1801360116)

### Talks

- [Gaussian Splats: Bereit für die Standardisierung?](https://www.youtube.com/watch?v=0xdPpKSkO3I) - Metaverse Standards Forum 28.01.2025
- [Unity-Integrationsleitfaden](https://www.youtube.com/watch?v=pM_HV2TU4rU&t=5298s) - Metaverse Standards Forum 06.05.2025

### Video-Tutorials

- [Erste Schritte (Windows)](https://youtu.be/UXtuigy_wYc)
- [Zwei-Minuten-Erklärung](https://youtu.be/HVv_IQKlafQ)
- [Computerphile 3DGS-Erklärung](https://youtu.be/VkIJbpdTujE)
- [Gaussian Splats Town Hall - Teil 2](https://youtu.be/5_GaPYBHqOo)
- [Einführung in gaussian splatting (und Unity-Plugin)](https://www.xuanprada.com/blog/2023/10/22/intro-to-gaussian-splatting)
- [Jupyter-Tutorial](https://www.youtube.com/watch?v=OcvA7fmiZYM)

### YouTube-Kanäle

- [LichtFeld Studio](https://www.youtube.com/@LichtFeldStudio) - Tutorials, Release-Walkthroughs und Entwickler-Updates für [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio)

## Danksagungen

- Danke an [Leonid Keselman](https://github.com/leonidk) für den Hinweis auf die Veröffentlichung des Papers „Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting".
- Danke an [Eric Haines](https://github.com/erich666) für den Vorschlag des Jupyter-Notebook-Viewers, des Windows-Tutorials und für das Korrigieren von Text-Trennzeichen und anderen Problemen.
- Danke an [Henry Pearce](https://github.com/henrypearce4D) für die Pflege der Beiträge.
- [Yehe Liu](https://x.com/YeheLiu)
