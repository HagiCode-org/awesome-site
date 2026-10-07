# Awesome 3D Gaussian Splatting

<div align="center">
  Uma lista curada de recursos focados no 3D Gaussian Splatting (3DGS) e tecnologias relacionadas.

  [**Navegar na lista de artigos**](https://mrnerf.github.io/awesome-3D-gaussian-splatting/) | [**LichtFeld Studio**](https://lichtfeld.io) | [**Contribuir**](CONTRIBUTING.md) | [**MrNeRF**](https://www.mrnerf.com)

</div>

## Conteúdo

- [Artigos e documentação](#artigos-e-documentação)
- [Implementações](#implementações)
- [Visualizadores e suporte a motores de jogo](#visualizadores-e-suporte-a-motores-de-jogo)
- [Ferramentas e utilitários](#ferramentas-e-utilitários)
- [Recursos de aprendizagem](#recursos-de-aprendizagem)
- [Créditos](#créditos)

## Artigos e documentação

### Banco de dados de artigos

Visite nosso abrangente e pesquisável banco de dados de artigos sobre 3D Gaussian Splatting:
[Papers Database](https://mrnerf.github.io/awesome-3D-gaussian-splatting/)

### Cursos e tutoriais

- [Palestras de Renderização Inversa do MIT (Módulo 2)](https://www.scenerepresentations.org/courses/inverse-graphics-23/) - Mergulho acadêmico na renderização inversa
- [Tutorial de 3DGS](https://3dgstutorial.github.io/) - Tutorial dos autores do artigo original de 3DGS

### Conjuntos de dados

- [Conjunto de dados multi-vista NERDS 360](https://zubair-irshad.github.io/projects/neo360.html) - Conjunto de dados de alta qualidade de cenas externas

## Implementações

### Referência oficial

- [Gaussian Splatting original](https://github.com/graphdeco-inria/gaussian-splatting) - A implementação de referência pelos autores originais

### Implementações da comunidade

| Implementação | Linguagem | Licença | Descrição |
| -------------- | -------- | ------- | ----------- |
| [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) ([lichtfeld.io](https://lichtfeld.io)) | C++/CUDA | GPL-3.0 | A estação de trabalho modular para 3D Gaussian Splatting — treinar, inspecionar, editar, automatizar e exportar a partir de um único aplicativo nativo |
| [Nerfstudio gsplat](https://github.com/nerfstudio-project/gsplat) | Python/CUDA | Apache-2.0 | Integração com o Nerfstudio |
| [OpenSplat](https://github.com/pierotofy/OpenSplat) | C++/CPU/GPU | AGPL-3.0 | Solução multiplataforma |
| [Taichi 3D GS](https://github.com/wanmeihuali/taichi_3d_gaussian_splatting) | Taichi | Apache-2.0 | Implementação baseada em Taichi |
| [taichi-splatting](https://github.com/uc-vision/taichi-splatting) | Taichi/PyTorch | Apache-2.0 | Rasterizador modular para Taichi e PyTorch |
| [Grendel Distributed 3DGS](https://github.com/nyu-systems/Grendel-GS) | Python/CUDA | Apache-2.0 | Treinamento distribuído multi-GPU |
| [Warp 3DGS](https://github.com/guoriyue/3dgs-warp-scratch) | Warp/Python | AGPL-3.0 | Implementação baseada em Warp |
| [RI3D](https://github.com/Asus-Monitor/ri3d-impl) | Python/CUDA | Unlicense | Pipeline de gaussian splatting few-shot |
| [gaussian_splatting](https://github.com/joeyan/gaussian_splatting) | Python/CUDA | MIT | Implementação legível com uma [derivação escrita da matemática](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md) |
| [3d-gaussian-splatting](https://github.com/WangFeng18/3d-gaussian-splatting) | Python/CUDA | MIT | Reimplementação compacta |
| [gaussian_splatting_3d](https://github.com/heheyas/gaussian_splatting_3d) | Python/CUDA | | Reimplementação comunitária precoce |
| [My-exp-Gaussians](https://github.com/ingra14m/My-exp-Gaussian) | Python/CUDA | | Aprimora a capacidade dos gaussianos 3D de modelar cenas complexas |
| [360-gaussian-splatting](https://github.com/inuex35/360-gaussian-splatting) | Python | | Treina splats diretamente a partir de imagens 360° |
| [2D Gaussian Splatting](https://github.com/OutofAi/2D-Gaussian-Splatting) | Jupyter | MIT | Passo a passo em notebook do gaussian splatting 2D |
| [DGSO](https://github.com/An-u-rag/stylized-gaussian-splatting) | Python | MIT | Transferência de estilo aplicada durante a otimização gaussiana |
| [3D-Gaussian-Splatting-Reconstruction](https://github.com/Chi-Blaze-B/3D-Gaussian-Splatting-Reconstruction) | Python | Apache-2.0 | Implementação pura em PyTorch a partir de entrada de vídeo — sem compilação CUDA, suporta backends CPU/NVIDIA GPU, com estimador de pose e GUI integrados |
| [MetalSplat](https://github.com/tchauffi/metalsplat) | PyTorch/Metal | MIT | Implementação baseada em Metal para GPUs Apple Silicon no PyTorch com compilação automática de kernels em tempo de execução |

### Frameworks

- [Pointrix](https://github.com/pointrix-project/pointrix) - Renderização diferenciável baseada em pontos
- [msplat](https://github.com/pointrix-project/msplat) - Biblioteca modular de rasterização gaussiana diferenciável
- [GauStudio](https://github.com/GAP-LAB-CUHK-SZ/gaustudio) - Framework unificado com múltiplas implementações
- [DriveStudio](https://github.com/ziyc/drivestudio) - Framework de reconstrução de cenas urbanas
- [GSCodecStudio](https://github.com/JasonLSC/GSCodec_Studio) - Compressão e splattings dinâmicos
- [gaussian-splatting-lightning](https://github.com/yzslab/gaussian-splatting-lightning) - Algoritmos derivados mais um visualizador web interativo

## Visualizadores e suporte a motores de jogo

### Motores de jogo

- [Plugin do Unity](https://github.com/aras-p/UnityGaussianSplatting)
- [Plugin do Unity (gsplat-unity)](https://github.com/wuyize25/gsplat-unity)
- [Plugin do Unity (DynGsplat-unity)](https://github.com/HiFi-Human/DynGsplat-unity) - Para splattings dinâmicos
- [Plugin do Unreal (MLSLabsGaussianSplattingRenderer-UE)](https://github.com/mlslabs/MLSLabsGaussianSplattingRenderer-UE)
- [Plugin do Unreal (XScene-UEPlugin)](https://github.com/xverse-engine/XScene-UEPlugin)
- [Motor PlayCanvas](https://github.com/playcanvas/engine)
- [Plugin do Godot (gdgs)](https://github.com/ReconWorldLab/godot-gaussian-splatting) - Plugin de renderização 3DGS em tempo real para Godot 4.3+

### Visualizadores web

**WebGL**

- [Splat Viewer](https://github.com/antimatter15/splat)
- [Gauzilla](https://github.com/BladeTransformerLLC/gauzilla)
- [Visualizador interativo](https://github.com/kishimisu/Gaussian-Splatting-WebGL)
- [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D)
- [gsplat.js](https://github.com/huggingface/gsplat.js)
- [A-Frame](https://github.com/quadjr/aframe-gaussian-splatting)
- [splaTV](https://github.com/antimatter15/splaTV) - Visualizador para gaussianos 4D, com uma [demonstração ao vivo](http://antimatter15.com/splaTV/)
- [Visualizador WebRTC](https://github.com/dylanebert/gaussian-viewer)

**WebGPU**

- [Visualizador EPFL](https://github.com/cvlab-epfl/gaussian-splatting-web)
- [WebGPU Splat](https://github.com/KeKsBoTer/web-splat)
- [gaussian-splatting-webgpu](https://github.com/MarcusAndreasSvensson/gaussian-splatting-webgpu)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer) - Visualizador splat de alto desempenho
- [Visualizador de Modelos PlayCanvas](https://github.com/playcanvas/model-viewer) - Visualizador para ativos glTF e 3DGS

### Visualizadores de desktop

- [3DGS.cpp](https://github.com/shg8/3DGS.cpp) - Renderizador C++/Vulkan para Windows, macOS, Linux, iOS e visionOS
- [vkgs](https://github.com/jaesung-cs/vkgs) - Renderizador C++/Vulkan multiplataforma
- [splatviz](https://github.com/Florian-Barthel/splatviz) - Edite o código de renderização em tempo de execução ou exiba várias cenas de uma vez
- [OpenGL Viewer](https://github.com/limacv/GaussianSplattingViewer) - Visualizador PyOpenGL, também com backend CUDA oficial
- [Taichi Viewer](https://github.com/uc-vision/splat-viewer) - Renderizador com capacidade de benchmark
- [DearGaussianGUI](https://github.com/leviome/DearGaussianGUI)
- [LiteViz-GS](https://github.com/panxkun/liteviz-gs)
- [Nerfstudio Viser](https://github.com/viser-project/viser)
- [Nerfstudio (branch gaussian_splatting)](https://github.com/yzslab/nerfstudio/tree/gaussian_splatting)
- [Visualizador Jupyter notebook](https://github.com/shumash/gaussian-splatting/blob/mshugrina/interactive/interactive.ipynb)

### Aplicativos nativos

- [Complemento do Blender](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [Complemento do Blender (KIRI)](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- [Complemento do Blender (404—GEN)](https://github.com/404-Repo/404-gen-blender-add-on)
- [Renderizador de viewport do Houdini](https://github.com/rubendhz/houdini-gsplat-renderer) - Implementação HDK/GLSL de Gaussian Splatting no Houdini
- [Visualizador iOS Metal](https://github.com/laanlabs/metal-splats)
- [Suporte VR (OpenXR)](https://github.com/hyperlogic/splatapult)
- [Suporte ROS2](https://github.com/shadygm/ROSplat)
- [Splat Local](https://github.com/michael-L-i/splat-local) - Pipeline de vídeo para 3DGS executado totalmente localmente no Apple Silicon (poses COLMAP/GLOMAP, treinamento nativo Metal via Brush), com pontos de verificação de treinamento transmitidos ao vivo para um visualizador no navegador

## Ferramentas e utilitários

### Processamento de dados

- [Kapture](https://github.com/naver/kapture) - Formato de dados unificado para localização visual
- [Recortador de imagens Kapture](https://gist.github.com/jo-chemla/258e6e40d3d6c2220b29518ff3c17c40) - Recortador de imagens não distorcidas para remover bordas pretas
- [Conversor 3DGS](https://github.com/francescofugazzi/3dgsconverter) - Ferramenta de conversão de formato
- [Editor de nuvem de pontos](https://github.com/JohannesKrueger/pointcloudeditor) - Edição de nuvem de pontos baseada na web
- [Conversor SPZ](https://github.com/stytim/spz) - Ferramenta de conversão SPZ
- [Conversor gsbox](https://github.com/gotoeasy/gsbox) - Ferramenta de conversão PLY SPLAT SPZ SPX
- [SplatTransform](https://github.com/playcanvas/splat-transform) - Ferramenta CLI e biblioteca Node/navegador para converter e editar splats, lê PLY, SOG, SPZ, SPLAT, KSPLAT e LCC/LCC2, escreve PLY, SOG, SPZ, GLB, CSV, LOD e WebP
- [GaussForge](https://github.com/3dgscloud/GaussForge) - Conversão baseada em C++/WASM entre PLY, SPZ, SPLAT e KSPLAT
- [SpectacularAI](https://github.com/SpectacularAI/point-cloud-tools) - Scripts de conversão para diferentes convenções 3DGS
- [VGGT Factor Refinement](https://github.com/jashshah999/vggt-factor-refinement) - Pipeline sem COLMAP usando VGGT + grafo de fatores, de vídeo para saída no formato COLMAP
- [splatreg](https://github.com/Archerkattri/splatreg) - Registro de splats instalável via pip: alinha e mescla dois scans 3DGS em um mesmo quadro SE(3)/Sim(3) (recupera a escala), API CLI + PyTorch pura, sem gizmo manual
- [AURA](https://github.com/Archerkattri/aura) - Confiança calibrada por splat para ativos 3DGS: rótulos de confiabilidade leave-out, calibração isotônica e um certificado de poda conforme livre de distribuição com uma escada LOD certificada; exporta via glTF/OpenUSD/SPZ (pip install aura-splat)
- [Open Reality](https://github.com/reality-opened/openreality) - Do vídeo do celular para uma cena 3D (baseado em VGGT-SLAM, exportação de splat com refinamento gsplat opcional) que um assistente de IA pode consultar via MCP: medições, planos de piso e parede, planejamento de caminho, lista de objetos, exportações de treinamento de robôs; auto-hospedável

### Ferramentas de desenvolvimento

- [GSOPs para Houdini](https://github.com/cgnomads/GSOPs) - Ferramentas de integração com Houdini
- [camorph](https://github.com/Fraunhofer-IIS/camorph) - Conversão de parâmetros de câmera
- [SuperSplat](https://github.com/playcanvas/supersplat) - Editor 3DGS gratuito, de código aberto e baseado no navegador, com publicação em um clique

## Recursos de aprendizagem

### Posts de blog

- [Introdução ao 3DGS](https://huggingface.co/blog/gaussian-splatting) - Guia do HuggingFace
- [Visão geral abrangente do Gaussian Splatting](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362)
- [Muito boa (técnica) introdução ao 3D Gaussian Splatting](https://medium.com/@AriaLeeNotAriel/numbynum-3d-gaussian-splatting-for-real-time-radiance-field-rendering-kerbl-et-al-60c0b25e5544)
- [Gaussian Splatting é bem legal](https://aras-p.info/blog/2023/09/05/Gaussian-Splatting-is-pretty-cool/)
- [Tornando os Gaussian Splats menores](https://aras-p.info/blog/2023/09/13/Making-Gaussian-Splats-smaller/)
- [Tornando os Gaussian Splats ainda menores](https://aras-p.info/blog/2023/09/27/Making-Gaussian-Splats-more-smaller/)
- [Comprimindo Gaussian Splats](https://blog.playcanvas.com/compressing-gaussian-splats/)
- [PlayCanvas abre o SOG como código aberto](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) - Spatially Ordered Gaussians, um formato supercomprimido baseado em WebP, de 15 a 20 vezes menor que PLY
- [Detalhes de implementação](https://github.com/kwea123/gaussian_splatting_notes) - Mergulho técnico
- [Fundamentos matemáticos](https://github.com/chiehwangs/3d-gaussian-theory) - Explicação teórica
- [Detalhes matemáticos dos passos direto e reverso](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)
- [Implementação PyTorch](https://myasincifci.github.io/) - Implementação curada do Vanilla 3DGS em PyTorch
- [NeRFs vs. 3DGS](https://edwardahn.me/writing/NeRFvs3DGS/)
- [Gaussian Head Avatars: um resumo](https://towardsdatascience.com/gaussian-head-avatars-a-summary-2bd17bd48500)
- [3D em geoespacial: NeRFs, Gaussian Splatting e computação espacial](https://ckoziol.com/blog/2024/radiance_methods/)
- [Guia de captura](https://medium.com/@heyulei/capture-images-for-gaussian-splatting-81d081bbc826) - Tutorial de captura de imagens
- [Discussão sobre o formato universal gs](https://github.com/mkkellogg/GaussianSplats3D/issues/47#issuecomment-1801360116)

### Palestras

- [Gaussian Splats: prontos para padronização?](https://www.youtube.com/watch?v=0xdPpKSkO3I) - Metaverse Standards Forum 28/01/2025
- [Guia de integração com Unity](https://www.youtube.com/watch?v=pM_HV2TU4rU&t=5298s) - Metaverse Standards Forum 06/05/2025

### Tutoriais em vídeo

- [Primeiros passos (Windows)](https://youtu.be/UXtuigy_wYc)
- [Explicação em dois minutos](https://youtu.be/HVv_IQKlafQ)
- [Explicação 3DGS do Computerphile](https://youtu.be/VkIJbpdTujE)
- [Gaussian Splats Town Hall - Parte 2](https://youtu.be/5_GaPYBHqOo)
- [Introdução ao gaussian splatting (e plugin do Unity)](https://www.xuanprada.com/blog/2023/10/22/intro-to-gaussian-splatting)
- [Tutorial Jupyter](https://www.youtube.com/watch?v=OcvA7fmiZYM)

### Canais do YouTube

- [LichtFeld Studio](https://www.youtube.com/@LichtFeldStudio) - Tutoriais, explicações de lançamentos e atualizações de desenvolvimento para o [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio)

## Créditos

- Obrigado a [Leonid Keselman](https://github.com/leonidk) por me informar sobre a publicação do artigo "Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting".
- Obrigado a [Eric Haines](https://github.com/erich666) por sugerir o visualizador Jupyter notebook, o tutorial do Windows e por corrigir hifenações e outros problemas de texto.
- Obrigado a [Henry Pearce](https://github.com/henrypearce4D) por manter as contribuições.
- [Yehe Liu](https://x.com/YeheLiu)
