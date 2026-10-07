# Awesome 3D Gaussian Splatting

<div align="center">
  一个聚焦于 3D Gaussian Splatting（3DGS）及相关技术的精选资源合集。

  [**浏览论文列表**](https://mrnerf.github.io/awesome-3D-gaussian-splatting/) | [**LichtFeld Studio**](https://lichtfeld.io) | [**贡献**](CONTRIBUTING.md) | [**MrNeRF**](https://www.mrnerf.com)

</div>

## 目录

- [论文与文档](#论文与文档)
- [实现](#实现)
- [查看器与游戏引擎支持](#查看器与游戏引擎支持)
- [工具与实用程序](#工具与实用程序)
- [学习资源](#学习资源)
- [致谢](#致谢)

## 论文与文档

### 论文数据库

访问我们全面、可搜索的 3D Gaussian Splatting 论文数据库：
[Papers Database](https://mrnerf.github.io/awesome-3D-gaussian-splatting/)

### 课程与教程

- [MIT 逆向渲染讲座（模块 2）](https://www.scenerepresentations.org/courses/inverse-graphics-23/) - 关于逆向渲染的学术深入讲解
- [3DGS 教程](https://3dgstutorial.github.io/) - 原始 3DGS 论文作者编写的教程

### 数据集

- [NERDS 360 多视角数据集](https://zubair-irshad.github.io/projects/neo360.html) - 高质量的室外场景数据集

## 实现

### 官方参考

- [原始 Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) - 原始作者提供的参考实现

### 社区实现

| 实现 | 语言 | 许可证 | 描述 |
| -------------- | -------- | ------- | ----------- |
| [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) ([lichtfeld.io](https://lichtfeld.io)) | C++/CUDA | GPL-3.0 | 用于 3D Gaussian Splatting 的模块化工作站——可在单一原生应用中训练、检查、编辑、自动化并导出 |
| [Nerfstudio gsplat](https://github.com/nerfstudio-project/gsplat) | Python/CUDA | Apache-2.0 | 与 Nerfstudio 的集成 |
| [OpenSplat](https://github.com/pierotofy/OpenSplat) | C++/CPU/GPU | AGPL-3.0 | 跨平台解决方案 |
| [Taichi 3D GS](https://github.com/wanmeihuali/taichi_3d_gaussian_splatting) | Taichi | Apache-2.0 | 基于 Taichi 的实现 |
| [taichi-splatting](https://github.com/uc-vision/taichi-splatting) | Taichi/PyTorch | Apache-2.0 | 面向 Taichi 和 PyTorch 的模块化光栅化器 |
| [Grendel Distributed 3DGS](https://github.com/nyu-systems/Grendel-GS) | Python/CUDA | Apache-2.0 | 多 GPU 分布式训练 |
| [Warp 3DGS](https://github.com/guoriyue/3dgs-warp-scratch) | Warp/Python | AGPL-3.0 | 基于 Warp 的实现 |
| [RI3D](https://github.com/Asus-Monitor/ri3d-impl) | Python/CUDA | Unlicense | 少样本 gaussian splatting 流水线 |
| [gaussian_splatting](https://github.com/joeyan/gaussian_splatting) | Python/CUDA | MIT | 附带[数学推导文档](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)的可读实现 |
| [3d-gaussian-splatting](https://github.com/WangFeng18/3d-gaussian-splatting) | Python/CUDA | MIT | 精简的重新实现 |
| [gaussian_splatting_3d](https://github.com/heheyas/gaussian_splatting_3d) | Python/CUDA | | 早期的社区重新实现 |
| [My-exp-Gaussians](https://github.com/ingra14m/My-exp-Gaussian) | Python/CUDA | | 增强 3D 高斯对复杂场景的建模能力 |
| [360-gaussian-splatting](https://github.com/inuex35/360-gaussian-splatting) | Python | | 直接从 360° 图像训练 splats |
| [2D Gaussian Splatting](https://github.com/OutofAi/2D-Gaussian-Splatting) | Jupyter | MIT | 2D gaussian splatting 的 Notebook 演练 |
| [DGSO](https://github.com/An-u-rag/stylized-gaussian-splatting) | Python | MIT | 在 gaussian 优化过程中应用风格迁移 |
| [3D-Gaussian-Splatting-Reconstruction](https://github.com/Chi-Blaze-B/3D-Gaussian-Splatting-Reconstruction) | Python | Apache-2.0 | 从视频输入出发的纯 PyTorch 实现——无需编译 CUDA，支持 CPU/NVIDIA GPU 后端，内置姿态估计器和 GUI |
| [MetalSplat](https://github.com/tchauffi/metalsplat) | PyTorch/Metal | MIT | 基于 Metal 的实现，面向 Apple Silicon GPU，在 PyTorch 上通过运行时自动编译内核 |

### 框架

- [Pointrix](https://github.com/pointrix-project/pointrix) - 可微的基于点的渲染
- [msplat](https://github.com/pointrix-project/msplat) - 模块化的可微 gaussian 光栅化库
- [GauStudio](https://github.com/GAP-LAB-CUHK-SZ/gaustudio) - 包含多种实现的统一框架
- [DriveStudio](https://github.com/ziyc/drivestudio) - 城市场景重建框架
- [GSCodecStudio](https://github.com/JasonLSC/GSCodec_Studio) - 压缩与动态 splatting
- [gaussian-splatting-lightning](https://github.com/yzslab/gaussian-splatting-lightning) - 衍生算法外加一个交互式 Web 查看器

## 查看器与游戏引擎支持

### 游戏引擎

- [Unity 插件](https://github.com/aras-p/UnityGaussianSplatting)
- [Unity 插件（gsplat-unity）](https://github.com/wuyize25/gsplat-unity)
- [Unity 插件（DynGsplat-unity）](https://github.com/HiFi-Human/DynGsplat-unity) - 用于动态 splatting
- [Unreal 插件（MLSLabsGaussianSplattingRenderer-UE）](https://github.com/mlslabs/MLSLabsGaussianSplattingRenderer-UE)
- [Unreal 插件（XScene-UEPlugin）](https://github.com/xverse-engine/XScene-UEPlugin)
- [PlayCanvas 引擎](https://github.com/playcanvas/engine)
- [Godot 插件（gdgs）](https://github.com/ReconWorldLab/godot-gaussian-splatting) - 面向 Godot 4.3+ 的实时 3DGS 渲染插件

### Web 查看器

**WebGL**

- [Splat Viewer](https://github.com/antimatter15/splat)
- [Gauzilla](https://github.com/BladeTransformerLLC/gauzilla)
- [交互式查看器](https://github.com/kishimisu/Gaussian-Splatting-WebGL)
- [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D)
- [gsplat.js](https://github.com/huggingface/gsplat.js)
- [A-Frame](https://github.com/quadjr/aframe-gaussian-splatting)
- [splaTV](https://github.com/antimatter15/splaTV) - 用于 4D 高斯的查看器，附[在线演示](http://antimatter15.com/splaTV/)
- [WebRTC 查看器](https://github.com/dylanebert/gaussian-viewer)

**WebGPU**

- [EPFL 查看器](https://github.com/cvlab-epfl/gaussian-splatting-web)
- [WebGPU Splat](https://github.com/KeKsBoTer/web-splat)
- [gaussian-splatting-webgpu](https://github.com/MarcusAndreasSvensson/gaussian-splatting-webgpu)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer) - 高性能 splat 查看器
- [PlayCanvas 模型查看器](https://github.com/playcanvas/model-viewer) - 用于 glTF 和 3DGS 资源的查看器

### 桌面查看器

- [3DGS.cpp](https://github.com/shg8/3DGS.cpp) - 面向 Windows、macOS、Linux、iOS 和 visionOS 的 C++/Vulkan 渲染器
- [vkgs](https://github.com/jaesung-cs/vkgs) - 跨平台的 C++/Vulkan 渲染器
- [splatviz](https://github.com/Florian-Barthel/splatviz) - 在运行时编辑渲染代码，或同时显示多个场景
- [OpenGL Viewer](https://github.com/limacv/GaussianSplattingViewer) - PyOpenGL 查看器，同时带有官方 CUDA 后端
- [Taichi Viewer](https://github.com/uc-vision/splat-viewer) - 具备基准测试能力的渲染器
- [DearGaussianGUI](https://github.com/leviome/DearGaussianGUI)
- [LiteViz-GS](https://github.com/panxkun/liteviz-gs)
- [Nerfstudio Viser](https://github.com/viser-project/viser)
- [Nerfstudio（gaussian_splatting 分支）](https://github.com/yzslab/nerfstudio/tree/gaussian_splatting)
- [Jupyter notebook 查看器](https://github.com/shumash/gaussian-splatting/blob/mshugrina/interactive/interactive.ipynb)

### 原生应用

- [Blender 插件](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [Blender 插件（KIRI）](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- [Blender 插件（404—GEN）](https://github.com/404-Repo/404-gen-blender-add-on)
- [Houdini 视口渲染器](https://github.com/rubendhz/houdini-gsplat-renderer) - Houdini 中 Gaussian Splatting 的 HDK/GLSL 实现
- [iOS Metal 查看器](https://github.com/laanlabs/metal-splats)
- [VR 支持（OpenXR）](https://github.com/hyperlogic/splatapult)
- [ROS2 支持](https://github.com/shadygm/ROSplat)
- [Splat Local](https://github.com/michael-L-i/splat-local) - 在 Apple Silicon 上完全本地运行的视频到 3DGS 流水线（COLMAP/GLOMAP 姿态，Metal 原生训练通过 Brush），训练检查点实时流式传输到浏览器查看器

## 工具与实用程序

### 数据处理

- [Kapture](https://github.com/naver/kapture) - 用于视觉定位的统一数据格式
- [Kapture 图像裁剪器](https://gist.github.com/jo-chemla/258e6e40d3d6c2220b29518ff3c17c40) - 用于去除黑边的未畸变图像裁剪器
- [3DGS 转换器](https://github.com/francescofugazzi/3dgsconverter) - 格式转换工具
- [点云编辑器](https://github.com/JohannesKrueger/pointcloudeditor) - 基于 Web 的点云编辑
- [SPZ 转换器](https://github.com/stytim/spz) - SPZ 转换工具
- [gsbox 转换器](https://github.com/gotoeasy/gsbox) - PLY SPLAT SPZ SPX 转换工具
- [SplatTransform](https://github.com/playcanvas/splat-transform) - 用于转换和编辑 splats 的 CLI 工具以及 Node/浏览器库，可读取 PLY、SOG、SPZ、SPLAT、KSPLAT 和 LCC/LCC2，写入 PLY、SOG、SPZ、GLB、CSV、LOD 和 WebP
- [GaussForge](https://github.com/3dgscloud/GaussForge) - 基于 C++/WASM 的 PLY、SPZ、SPLAT 与 KSPLAT 之间的转换
- [SpectacularAI](https://github.com/SpectacularAI/point-cloud-tools) - 针对不同 3DGS 约定的转换脚本
- [VGGT Factor Refinement](https://github.com/jashshah999/vggt-factor-refinement) - 使用 VGGT + 因子图的免 COLMAP 流水线，从视频到 COLMAP 格式输出
- [splatreg](https://github.com/Archerkattri/splatreg) - 可通过 pip 安装的 splat 配准：将两个 3DGS 扫描对齐并合并到同一个 SE(3)/Sim(3) 坐标系（恢复尺度），提供 CLI + 纯 PyTorch API，无需手动 gizmo
- [AURA](https://github.com/Archerkattri/aura) - 面向 3DGS 资产的逐 splat 校准置信度：留出可靠性标签、等渗校准，以及带有认证 LOD 阶梯的分布无关保形剪枝证书；通过 glTF/OpenUSD/SPZ 导出（pip install aura-splat）
- [Open Reality](https://github.com/reality-opened/openreality) - 从手机视频到 3D 场景（基于 VGGT-SLAM，可选 gsplat 优化后导出 splat），AI 助手可经由 MCP 查询：测量、地面与墙面平面、路径规划、物体列表、机器人训练导出；可自托管

### 开发工具

- [GSOPs for Houdini](https://github.com/cgnomads/GSOPs) - Houdini 集成工具
- [camorph](https://github.com/Fraunhofer-IIS/camorph) - 相机参数转换
- [SuperSplat](https://github.com/playcanvas/supersplat) - 免费、开源的基于浏览器的 3DGS 编辑器，支持一键发布

## 学习资源

### 博客文章

- [3DGS 介绍](https://huggingface.co/blog/gaussian-splatting) - HuggingFace 指南
- [Gaussian Splatting 综合概览](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362)
- [非常好的（技术向）3D Gaussian Splatting 入门](https://medium.com/@AriaLeeNotAriel/numbynum-3d-gaussian-splatting-for-real-time-radiance-field-rendering-kerbl-et-al-60c0b25e5544)
- [Gaussian Splatting 真的很酷](https://aras-p.info/blog/2023/09/05/Gaussian-Splatting-is-pretty-cool/)
- [让 Gaussian Splats 更小](https://aras-p.info/blog/2023/09/13/Making-Gaussian-Splats-smaller/)
- [让 Gaussian Splats 更小一点](https://aras-p.info/blog/2023/09/27/Making-Gaussian-Splats-more-smaller/)
- [压缩 Gaussian Splats](https://blog.playcanvas.com/compressing-gaussian-splats/)
- [PlayCanvas 开源 SOG](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) - Spatially Ordered Gaussians，一种基于 WebP 的超压缩格式，比 PLY 小 15-20 倍
- [实现细节](https://github.com/kwea123/gaussian_splatting_notes) - 技术深入解析
- [数学基础](https://github.com/chiehwangs/3d-gaussian-theory) - 理论解释
- [前向与反向传播的数学细节](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)
- [PyTorch 实现](https://myasincifci.github.io/) - 在 PyTorch 中精心实现的 Vanilla 3DGS
- [NeRFs vs. 3DGS](https://edwardahn.me/writing/NeRFvs3DGS/)
- [Gaussian 头部头像：总结](https://towardsdatascience.com/gaussian-head-avatars-a-summary-2bd17bd48500)
- [地理空间中的 3D：NeRFs、Gaussian Splatting 与空间计算](https://ckoziol.com/blog/2024/radiance_methods/)
- [采集指南](https://medium.com/@heyulei/capture-images-for-gaussian-splatting-81d081bbc826) - 图像采集教程
- [关于 gs 通用格式的讨论](https://github.com/mkkellogg/GaussianSplats3D/issues/47#issuecomment-1801360116)

### 演讲

- [Gaussian Splats：准备好标准化了吗？](https://www.youtube.com/watch?v=0xdPpKSkO3I) - 元宇宙标准论坛 2025/1/28
- [Unity 集成指南](https://www.youtube.com/watch?v=pM_HV2TU4rU&t=5298s) - 元宇宙标准论坛 2025/5/6

### 视频教程

- [入门（Windows）](https://youtu.be/UXtuigy_wYc)
- [两分钟讲解](https://youtu.be/HVv_IQKlafQ)
- [Computerphile 的 3DGS 讲解](https://youtu.be/VkIJbpdTujE)
- [Gaussian Splats 市政厅会议 - 第二部分](https://youtu.be/5_GaPYBHqOo)
- [gaussian splatting 入门（以及 Unity 插件）](https://www.xuanprada.com/blog/2023/10/22/intro-to-gaussian-splatting)
- [Jupyter 教程](https://www.youtube.com/watch?v=OcvA7fmiZYM)

### YouTube 频道

- [LichtFeld Studio](https://www.youtube.com/@LichtFeldStudio) - 面向 [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) 的教程、发布讲解与开发更新

## 致谢

- 感谢 [Leonid Keselman](https://github.com/leonidk) 告知我论文"Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting"的发布。
- 感谢 [Eric Haines](https://github.com/erich666) 推荐 Jupyter notebook 查看器、Windows 教程，并修复了文本连字符及其他问题。
- 感谢 [Henry Pearce](https://github.com/henrypearce4D) 维护贡献。
- [Yehe Liu](https://x.com/YeheLiu)
