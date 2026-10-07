# Awesome 3D Gaussian Splatting

<div align="center">
  Une liste sélectionnée de ressources axées sur le 3D Gaussian Splatting (3DGS) et les technologies associées.

  [**Parcourir la liste de publications**](https://mrnerf.github.io/awesome-3D-gaussian-splatting/) | [**LichtFeld Studio**](https://lichtfeld.io) | [**Contribuer**](CONTRIBUTING.md) | [**MrNeRF**](https://www.mrnerf.com)

</div>

## Sommaire

- [Publications et documentation](#publications-et-documentation)
- [Implémentations](#implémentations)
- [Visionneuses et prise en charge des moteurs de jeu](#visionneuses-et-prise-en-charge-des-moteurs-de-jeu)
- [Outils et utilitaires](#outils-et-utilitaires)
- [Ressources d'apprentissage](#ressources-dapprentissage)
- [Crédits](#crédits)

## Publications et documentation

### Base de données de publications

Consultez notre base de données complète et rechercheable de publications sur le 3D Gaussian Splatting :
[Papers Database](https://mrnerf.github.io/awesome-3D-gaussian-splatting/)

### Cours et tutoriels

- [Cours de rendu inverse du MIT (Module 2)](https://www.scenerepresentations.org/courses/inverse-graphics-23/) - Plongée académique dans le rendu inverse
- [Tutoriel 3DGS](https://3dgstutorial.github.io/) - Tutoriel des auteurs de la publication originale sur le 3DGS

### Jeux de données

- [Jeu de données multi-vues NERDS 360](https://zubair-irshad.github.io/projects/neo360.html) - Jeu de données de scènes extérieures de haute qualité

## Implémentations

### Référence officielle

- [Gaussian Splatting original](https://github.com/graphdeco-inria/gaussian-splatting) - L'implémentation de référence par les auteurs originaux

### Implémentations communautaires

| Implémentation | Langage | Licence | Description |
| -------------- | -------- | ------- | ----------- |
| [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) ([lichtfeld.io](https://lichtfeld.io)) | C++/CUDA | GPL-3.0 | Le poste de travail modulaire pour le 3D Gaussian Splatting — entraîner, inspecter, éditer, automatiser et exporter depuis une seule application native |
| [Nerfstudio gsplat](https://github.com/nerfstudio-project/gsplat) | Python/CUDA | Apache-2.0 | Intégration avec Nerfstudio |
| [OpenSplat](https://github.com/pierotofy/OpenSplat) | C++/CPU/GPU | AGPL-3.0 | Solution multiplateforme |
| [Taichi 3D GS](https://github.com/wanmeihuali/taichi_3d_gaussian_splatting) | Taichi | Apache-2.0 | Implémentation basée sur Taichi |
| [taichi-splatting](https://github.com/uc-vision/taichi-splatting) | Taichi/PyTorch | Apache-2.0 | Rastérisateur modulaire pour Taichi et PyTorch |
| [Grendel Distributed 3DGS](https://github.com/nyu-systems/Grendel-GS) | Python/CUDA | Apache-2.0 | Entraînement distribué multi-GPU |
| [Warp 3DGS](https://github.com/guoriyue/3dgs-warp-scratch) | Warp/Python | AGPL-3.0 | Implémentation basée sur Warp |
| [RI3D](https://github.com/Asus-Monitor/ri3d-impl) | Python/CUDA | Unlicense | Pipeline gaussian splatting few-shot |
| [gaussian_splatting](https://github.com/joeyan/gaussian_splatting) | Python/CUDA | MIT | Implémentation lisible avec une [dérivation écrite des mathématiques](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md) |
| [3d-gaussian-splatting](https://github.com/WangFeng18/3d-gaussian-splatting) | Python/CUDA | MIT | Réimplémentation compacte |
| [gaussian_splatting_3d](https://github.com/heheyas/gaussian_splatting_3d) | Python/CUDA | | Réimplémentation communautaire précoce |
| [My-exp-Gaussians](https://github.com/ingra14m/My-exp-Gaussian) | Python/CUDA | | Améliore la capacité des gaussiennes 3D à modéliser des scènes complexes |
| [360-gaussian-splatting](https://github.com/inuex35/360-gaussian-splatting) | Python | | Entraîne des splats directement à partir d'images 360° |
| [2D Gaussian Splatting](https://github.com/OutofAi/2D-Gaussian-Splatting) | Jupyter | MIT | Parcours en notebook du gaussian splatting 2D |
| [DGSO](https://github.com/An-u-rag/stylized-gaussian-splatting) | Python | MIT | Transfert de style appliqué pendant l'optimisation gaussienne |
| [3D-Gaussian-Splatting-Reconstruction](https://github.com/Chi-Blaze-B/3D-Gaussian-Splatting-Reconstruction) | Python | Apache-2.0 | Implémentation pure PyTorch à partir d'entrées vidéo — aucune compilation CUDA requise, prend en charge les backend CPU/NVIDIA GPU, avec estimateur de pose et GUI intégrés |
| [MetalSplat](https://github.com/tchauffi/metalsplat) | PyTorch/Metal | MIT | Implémentation basée sur Metal pour les GPU Apple Silicon sous PyTorch avec compilation automatique des noyaux à l'exécution |

### Frameworks

- [Pointrix](https://github.com/pointrix-project/pointrix) - Rendu différentiable basé sur les points
- [msplat](https://github.com/pointrix-project/msplat) - Bibliothèque de rastérisation gaussienne différentiable modulaire
- [GauStudio](https://github.com/GAP-LAB-CUHK-SZ/gaustudio) - Framework unifié avec plusieurs implémentations
- [DriveStudio](https://github.com/ziyc/drivestudio) - Framework de reconstruction de scènes urbaines
- [GSCodecStudio](https://github.com/JasonLSC/GSCodec_Studio) - Compression et splattings dynamiques
- [gaussian-splatting-lightning](https://github.com/yzslab/gaussian-splatting-lightning) - Algorithmes dérivés plus une visionneuse web interactive

## Visionneuses et prise en charge des moteurs de jeu

### Moteurs de jeu

- [Plugin Unity](https://github.com/aras-p/UnityGaussianSplatting)
- [Plugin Unity (gsplat-unity)](https://github.com/wuyize25/gsplat-unity)
- [Plugin Unity (DynGsplat-unity)](https://github.com/HiFi-Human/DynGsplat-unity) - Pour les splattings dynamiques
- [Plugin Unreal (MLSLabsGaussianSplattingRenderer-UE)](https://github.com/mlslabs/MLSLabsGaussianSplattingRenderer-UE)
- [Plugin Unreal (XScene-UEPlugin)](https://github.com/xverse-engine/XScene-UEPlugin)
- [Moteur PlayCanvas](https://github.com/playcanvas/engine)
- [Plugin Godot (gdgs)](https://github.com/ReconWorldLab/godot-gaussian-splatting) - Plugin de rendu 3DGS en temps réel pour Godot 4.3+

### Visionneuses Web

**WebGL**

- [Splat Viewer](https://github.com/antimatter15/splat)
- [Gauzilla](https://github.com/BladeTransformerLLC/gauzilla)
- [Visionneuse interactive](https://github.com/kishimisu/Gaussian-Splatting-WebGL)
- [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D)
- [gsplat.js](https://github.com/huggingface/gsplat.js)
- [A-Frame](https://github.com/quadjr/aframe-gaussian-splatting)
- [splaTV](https://github.com/antimatter15/splaTV) - Visionneuse pour gaussiennes 4D, avec une [démo en direct](http://antimatter15.com/splaTV/)
- [Visionneuse WebRTC](https://github.com/dylanebert/gaussian-viewer)

**WebGPU**

- [Visionneuse EPFL](https://github.com/cvlab-epfl/gaussian-splatting-web)
- [WebGPU Splat](https://github.com/KeKsBoTer/web-splat)
- [gaussian-splatting-webgpu](https://github.com/MarcusAndreasSvensson/gaussian-splatting-webgpu)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer) - Visionneuse splat haute performance
- [Visionneuse de modèles PlayCanvas](https://github.com/playcanvas/model-viewer) - Visionneuse pour ressources glTF et 3DGS

### Visionneuses de bureau

- [3DGS.cpp](https://github.com/shg8/3DGS.cpp) - Rendu C++/Vulkan pour Windows, macOS, Linux, iOS et visionOS
- [vkgs](https://github.com/jaesung-cs/vkgs) - Rendu C++/Vulkan multiplateforme
- [splatviz](https://github.com/Florian-Barthel/splatviz) - Modifier le code de rendu à l'exécution ou afficher plusieurs scènes à la fois
- [OpenGL Viewer](https://github.com/limacv/GaussianSplattingViewer) - Visionneuse PyOpenGL, également avec le backend CUDA officiel
- [Taichi Viewer](https://github.com/uc-vision/splat-viewer) - Rendu avec capacité de benchmark
- [DearGaussianGUI](https://github.com/leviome/DearGaussianGUI)
- [LiteViz-GS](https://github.com/panxkun/liteviz-gs)
- [Nerfstudio Viser](https://github.com/viser-project/viser)
- [Nerfstudio (branche gaussian_splatting)](https://github.com/yzslab/nerfstudio/tree/gaussian_splatting)
- [Visionneuse Jupyter notebook](https://github.com/shumash/gaussian-splatting/blob/mshugrina/interactive/interactive.ipynb)

### Applications natives

- [Extension Blender](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [Extension Blender (KIRI)](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- [Extension Blender (404—GEN)](https://github.com/404-Repo/404-gen-blender-add-on)
- [Rendu viewport Houdini](https://github.com/rubendhz/houdini-gsplat-renderer) - Implémentation HDK/GLSL de Gaussian Splatting dans Houdini
- [Visionneuse iOS Metal](https://github.com/laanlabs/metal-splats)
- [Prise en charge VR (OpenXR)](https://github.com/hyperlogic/splatapult)
- [Prise en charge ROS2](https://github.com/shadygm/ROSplat)
- [Splat Local](https://github.com/michael-L-i/splat-local) - Pipeline vidéo-vers-3DGS entièrement local sur Apple Silicon (poses COLMAP/GLOMAP, entraînement natif Metal via Brush), avec les points de contrôle d'entraînement diffusés en direct dans une visionneuse navigateur

## Outils et utilitaires

### Traitement des données

- [Kapture](https://github.com/naver/kapture) - Format de données unifié pour la localisation visuelle
- [Recadreur d'images Kapture](https://gist.github.com/jo-chemla/258e6e40d3d6c2220b29518ff3c17c40) - Recadreur d'images non distordues pour supprimer les bordures noires
- [Convertisseur 3DGS](https://github.com/francescofugazzi/3dgsconverter) - Outil de conversion de format
- [Éditeur de nuage de points](https://github.com/JohannesKrueger/pointcloudeditor) - Édition de nuage de points basée sur le Web
- [Convertisseur SPZ](https://github.com/stytim/spz) - Outil de conversion SPZ
- [Convertisseur gsbox](https://github.com/gotoeasy/gsbox) - Outil de conversion PLY SPLAT SPZ SPX
- [SplatTransform](https://github.com/playcanvas/splat-transform) - Outil CLI et bibliothèque Node/navigateur pour convertir et éditer des splats, lit PLY, SOG, SPZ, SPLAT, KSPLAT et LCC/LCC2, écrit PLY, SOG, SPZ, GLB, CSV, LOD et WebP
- [GaussForge](https://github.com/3dgscloud/GaussForge) - Conversion entre PLY, SPZ, SPLAT et KSPLAT basée sur C++/WASM
- [SpectacularAI](https://github.com/SpectacularAI/point-cloud-tools) - Scripts de conversion pour différentes conventions 3DGS
- [VGGT Factor Refinement](https://github.com/jashshah999/vggt-factor-refinement) - Pipeline sans COLMAP utilisant VGGT + graphe de facteurs, de la vidéo à une sortie au format COLMAP
- [splatreg](https://github.com/Archerkattri/splatreg) - Enregistrement de splats installable via pip : aligne et fusionne deux scans 3DGS dans un même repère SE(3)/Sim(3) (récupère l'échelle), API CLI + pure-PyTorch, sans gizmo manuel
- [AURA](https://github.com/Archerkattri/aura) - Confiance calibrée par splat pour les ressources 3DGS : étiquettes de fiabilité en leave-out, calibration isotonique et un certificat d'élagage conforme indépendant de la distribution avec une échelle LOD certifiée ; exporte via glTF/OpenUSD/SPZ (pip install aura-splat)
- [Open Reality](https://github.com/reality-opened/openreality) - De la vidéo du téléphone à une scène 3D (basé sur VGGT-SLAM, export splat avec raffinement gsplat optionnel) qu'un assistant IA peut interroger via MCP : mesures, plans de sol et de mur, planification de chemin, liste d'objets, exports d'entraînement robot ; auto-hébergeable

### Outils de développement

- [GSOPs pour Houdini](https://github.com/cgnomads/GSOPs) - Outils d'intégration Houdini
- [camorph](https://github.com/Fraunhofer-IIS/camorph) - Conversion des paramètres de caméra
- [SuperSplat](https://github.com/playcanvas/supersplat) - Éditeur 3DGS gratuit, open source et basé sur le navigateur, avec publication en un clic

## Ressources d'apprentissage

### Articles de blog

- [Introduction au 3DGS](https://huggingface.co/blog/gaussian-splatting) - Guide HuggingFace
- [Aperçu complet du Gaussian Splatting](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362)
- [Très bonne (technique) introduction au 3D Gaussian Splatting](https://medium.com/@AriaLeeNotAriel/numbynum-3d-gaussian-splatting-for-real-time-radiance-field-rendering-kerbl-et-al-60c0b25e5544)
- [Le Gaussian Splatting est plutôt cool](https://aras-p.info/blog/2023/09/05/Gaussian-Splatting-is-pretty-cool/)
- [Réduire la taille des Gaussian Splats](https://aras-p.info/blog/2023/09/13/Making-Gaussian-Splats-smaller/)
- [Rendre les Gaussian Splats encore plus petits](https://aras-p.info/blog/2023/09/27/Making-Gaussian-Splats-more-smaller/)
- [Compresser les Gaussian Splats](https://blog.playcanvas.com/compressing-gaussian-splats/)
- [PlayCanvas ouvre SOG en open source](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) - Spatially Ordered Gaussians, un format surcompressé basé sur WebP, 15 à 20 fois plus petit que PLY
- [Détails d'implémentation](https://github.com/kwea123/gaussian_splatting_notes) - Plongée technique
- [Fondements mathématiques](https://github.com/chiehwangs/3d-gaussian-theory) - Explication théorique
- [Détails mathématiques des passes avant et arrière](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)
- [Implémentation PyTorch](https://myasincifci.github.io/) - Implémentation soignée du 3DGS Vanilla en PyTorch
- [NeRFs vs. 3DGS](https://edwardahn.me/writing/NeRFvs3DGS/)
- [Avatars de tête Gaussian : un résumé](https://towardsdatascience.com/gaussian-head-avatars-a-summary-2bd17bd48500)
- [3D en géospatial : NeRFs, Gaussian Splatting et calcul spatial](https://ckoziol.com/blog/2024/radiance_methods/)
- [Guide de capture](https://medium.com/@heyulei/capture-images-for-gaussian-splatting-81d081bbc826) - Tutoriel de capture d'images
- [Discussion sur le format universel gs](https://github.com/mkkellogg/GaussianSplats3D/issues/47#issuecomment-1801360116)

### Conférences

- [Gaussian Splats : prêts pour la normalisation ?](https://www.youtube.com/watch?v=0xdPpKSkO3I) - Metaverse Standards Forum 28/01/2025
- [Guide d'intégration Unity](https://www.youtube.com/watch?v=pM_HV2TU4rU&t=5298s) - Metaverse Standards Forum 06/05/2025

### Tutoriels vidéo

- [Pour commencer (Windows)](https://youtu.be/UXtuigy_wYc)
- [Explication en deux minutes](https://youtu.be/HVv_IQKlafQ)
- [Explication 3DGS de Computerphile](https://youtu.be/VkIJbpdTujE)
- [Gaussian Splats Town Hall - Partie 2](https://youtu.be/5_GaPYBHqOo)
- [Introduction au gaussian splatting (et plugin Unity)](https://www.xuanprada.com/blog/2023/10/22/intro-to-gaussian-splatting)
- [Tutoriel Jupyter](https://www.youtube.com/watch?v=OcvA7fmiZYM)

### Chaînes YouTube

- [LichtFeld Studio](https://www.youtube.com/@LichtFeldStudio) - Tutoriels, présentations de versions et mises à jour de développement pour [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio)

## Crédits

- Merci à [Leonid Keselman](https://github.com/leonidk) de m'avoir informé de la publication de l'article « Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting ».
- Merci à [Eric Haines](https://github.com/erich666) d'avoir suggéré la visionneuse Jupyter notebook, le tutoriel Windows et d'avoir corrigé les césures et autres problèmes de texte.
- Merci à [Henry Pearce](https://github.com/henrypearce4D) de maintenir les contributions.
- [Yehe Liu](https://x.com/YeheLiu)
