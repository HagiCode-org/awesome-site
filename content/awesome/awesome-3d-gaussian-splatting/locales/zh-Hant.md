# Awesome 3D Gaussian Splatting

<div align="center">
  一個聚焦於 3D Gaussian Splatting（3DGS）及相關技術的精選資源合集。

  [**瀏覽論文列表**](https://mrnerf.github.io/awesome-3D-gaussian-splatting/) | [**LichtFeld Studio**](https://lichtfeld.io) | [**貢獻**](CONTRIBUTING.md) | [**MrNeRF**](https://www.mrnerf.com)

</div>

## 目錄

- [論文與文件](#論文與文件)
- [實作](#實作)
- [檢視器與遊戲引擎支援](#檢視器與遊戲引擎支援)
- [工具與實用程式](#工具與實用程式)
- [學習資源](#學習資源)
- [致謝](#致謝)

## 論文與文件

### 論文資料庫

造訪我們全面、可搜尋的 3D Gaussian Splatting 論文資料庫：
[Papers Database](https://mrnerf.github.io/awesome-3D-gaussian-splatting/)

### 課程與教學

- [MIT 逆向渲染講座（模組 2）](https://www.scenerepresentations.org/courses/inverse-graphics-23/) - 關於逆向渲染的學術深入講解
- [3DGS 教學](https://3dgstutorial.github.io/) - 原始 3DGS 論文作者編寫的教學

### 資料集

- [NERDS 360 多視角資料集](https://zubair-irshad.github.io/projects/neo360.html) - 高品質的戶外場景資料集

## 實作

### 官方參考

- [原始 Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) - 原始作者提供的參考實作

### 社群實作

| 實作 | 語言 | 授權條款 | 描述 |
| -------------- | -------- | ------- | ----------- |
| [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) ([lichtfeld.io](https://lichtfeld.io)) | C++/CUDA | GPL-3.0 | 用於 3D Gaussian Splatting 的模組化工作站——可在單一原生應用中訓練、檢查、編輯、自動化並匯出 |
| [Nerfstudio gsplat](https://github.com/nerfstudio-project/gsplat) | Python/CUDA | Apache-2.0 | 與 Nerfstudio 的整合 |
| [OpenSplat](https://github.com/pierotofy/OpenSplat) | C++/CPU/GPU | AGPL-3.0 | 跨平台解決方案 |
| [Taichi 3D GS](https://github.com/wanmeihuali/taichi_3d_gaussian_splatting) | Taichi | Apache-2.0 | 基於 Taichi 的實作 |
| [taichi-splatting](https://github.com/uc-vision/taichi-splatting) | Taichi/PyTorch | Apache-2.0 | 面向 Taichi 和 PyTorch 的模組化光柵化器 |
| [Grendel Distributed 3DGS](https://github.com/nyu-systems/Grendel-GS) | Python/CUDA | Apache-2.0 | 多 GPU 分散式訓練 |
| [Warp 3DGS](https://github.com/guoriyue/3dgs-warp-scratch) | Warp/Python | AGPL-3.0 | 基於 Warp 的實作 |
| [RI3D](https://github.com/Asus-Monitor/ri3d-impl) | Python/CUDA | Unlicense | 少樣本 gaussian splatting 流水線 |
| [gaussian_splatting](https://github.com/joeyan/gaussian_splatting) | Python/CUDA | MIT | 附帶[數學推導文件](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)的可讀實作 |
| [3d-gaussian-splatting](https://github.com/WangFeng18/3d-gaussian-splatting) | Python/CUDA | MIT | 精簡的重新實作 |
| [gaussian_splatting_3d](https://github.com/heheyas/gaussian_splatting_3d) | Python/CUDA | | 早期的社群重新實作 |
| [My-exp-Gaussians](https://github.com/ingra14m/My-exp-Gaussian) | Python/CUDA | | 增強 3D 高斯對複雜場景的建模能力 |
| [360-gaussian-splatting](https://github.com/inuex35/360-gaussian-splatting) | Python | | 直接從 360° 影像訓練 splats |
| [2D Gaussian Splatting](https://github.com/OutofAi/2D-Gaussian-Splatting) | Jupyter | MIT | 2D gaussian splatting 的 Notebook 演練 |
| [DGSO](https://github.com/An-u-rag/stylized-gaussian-splatting) | Python | MIT | 在 gaussian 最佳化過程中應用風格遷移 |
| [3D-Gaussian-Splatting-Reconstruction](https://github.com/Chi-Blaze-B/3D-Gaussian-Splatting-Reconstruction) | Python | Apache-2.0 | 從影片輸入出發的純 PyTorch 實作——無需編譯 CUDA，支援 CPU/NVIDIA GPU 後端，內建姿態估計器和 GUI |
| [MetalSplat](https://github.com/tchauffi/metalsplat) | PyTorch/Metal | MIT | 基於 Metal 的實作，面向 Apple Silicon GPU，在 PyTorch 上透過執行期自動編譯核心 |

### 框架

- [Pointrix](https://github.com/pointrix-project/pointrix) - 可微的基於點的渲染
- [msplat](https://github.com/pointrix-project/msplat) - 模組化的可微 gaussian 光柵化庫
- [GauStudio](https://github.com/GAP-LAB-CUHK-SZ/gaustudio) - 包含多種實作的統一框架
- [DriveStudio](https://github.com/ziyc/drivestudio) - 城市場景重建框架
- [GSCodecStudio](https://github.com/JasonLSC/GSCodec_Studio) - 壓縮與動態 splatting
- [gaussian-splatting-lightning](https://github.com/yzslab/gaussian-splatting-lightning) - 衍生演算法外加一個互動式 Web 檢視器

## 檢視器與遊戲引擎支援

### 遊戲引擎

- [Unity 插件](https://github.com/aras-p/UnityGaussianSplatting)
- [Unity 插件（gsplat-unity）](https://github.com/wuyize25/gsplat-unity)
- [Unity 插件（DynGsplat-unity）](https://github.com/HiFi-Human/DynGsplat-unity) - 用於動態 splatting
- [Unreal 插件（MLSLabsGaussianSplattingRenderer-UE）](https://github.com/mlslabs/MLSLabsGaussianSplattingRenderer-UE)
- [Unreal 插件（XScene-UEPlugin）](https://github.com/xverse-engine/XScene-UEPlugin)
- [PlayCanvas 引擎](https://github.com/playcanvas/engine)
- [Godot 插件（gdgs）](https://github.com/ReconWorldLab/godot-gaussian-splatting) - 面向 Godot 4.3+ 的即時 3DGS 渲染插件

### Web 檢視器

**WebGL**

- [Splat Viewer](https://github.com/antimatter15/splat)
- [Gauzilla](https://github.com/BladeTransformerLLC/gauzilla)
- [互動式檢視器](https://github.com/kishimisu/Gaussian-Splatting-WebGL)
- [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D)
- [gsplat.js](https://github.com/huggingface/gsplat.js)
- [A-Frame](https://github.com/quadjr/aframe-gaussian-splatting)
- [splaTV](https://github.com/antimatter15/splaTV) - 用於 4D 高斯的檢視器，附[線上示範](http://antimatter15.com/splaTV/)
- [WebRTC 檢視器](https://github.com/dylanebert/gaussian-viewer)

**WebGPU**

- [EPFL 檢視器](https://github.com/cvlab-epfl/gaussian-splatting-web)
- [WebGPU Splat](https://github.com/KeKsBoTer/web-splat)
- [gaussian-splatting-webgpu](https://github.com/MarcusAndreasSvensson/gaussian-splatting-webgpu)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer) - 高效能 splat 檢視器
- [PlayCanvas 模型檢視器](https://github.com/playcanvas/model-viewer) - 用於 glTF 和 3DGS 資源的檢視器

### 桌面檢視器

- [3DGS.cpp](https://github.com/shg8/3DGS.cpp) - 面向 Windows、macOS、Linux、iOS 和 visionOS 的 C++/Vulkan 渲染器
- [vkgs](https://github.com/jaesung-cs/vkgs) - 跨平台的 C++/Vulkan 渲染器
- [splatviz](https://github.com/Florian-Barthel/splatviz) - 在執行期編輯渲染程式碼，或同時顯示多個場景
- [OpenGL Viewer](https://github.com/limacv/GaussianSplattingViewer) - PyOpenGL 檢視器，同時帶有官方 CUDA 後端
- [Taichi Viewer](https://github.com/uc-vision/splat-viewer) - 具備基準測試能力的渲染器
- [DearGaussianGUI](https://github.com/leviome/DearGaussianGUI)
- [LiteViz-GS](https://github.com/panxkun/liteviz-gs)
- [Nerfstudio Viser](https://github.com/viser-project/viser)
- [Nerfstudio（gaussian_splatting 分支）](https://github.com/yzslab/nerfstudio/tree/gaussian_splatting)
- [Jupyter notebook 檢視器](https://github.com/shumash/gaussian-splatting/blob/mshugrina/interactive/interactive.ipynb)

### 原生應用

- [Blender 插件](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [Blender 插件（KIRI）](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- [Blender 插件（404—GEN）](https://github.com/404-Repo/404-gen-blender-add-on)
- [Houdini 視埠渲染器](https://github.com/rubendhz/houdini-gsplat-renderer) - Houdini 中 Gaussian Splatting 的 HDK/GLSL 實作
- [iOS Metal 檢視器](https://github.com/laanlabs/metal-splats)
- [VR 支援（OpenXR）](https://github.com/hyperlogic/splatapult)
- [ROS2 支援](https://github.com/shadygm/ROSplat)
- [Splat Local](https://github.com/michael-L-i/splat-local) - 在 Apple Silicon 上完全本地執行的影片到 3DGS 流水線（COLMAP/GLOMAP 姿態，Metal 原生訓練透過 Brush），訓練檢查點即時串流傳輸到瀏覽器檢視器

## 工具與實用程式

### 資料處理

- [Kapture](https://github.com/naver/kapture) - 用於視覺定位的統一資料格式
- [Kapture 影像裁剪器](https://gist.github.com/jo-chemla/258e6e40d3d6c2220b29518ff3c17c40) - 用於去除黑邊的未畸變影像裁剪器
- [3DGS 轉換器](https://github.com/francescofugazzi/3dgsconverter) - 格式轉換工具
- [點雲編輯器](https://github.com/JohannesKrueger/pointcloudeditor) - 基於 Web 的點雲編輯
- [SPZ 轉換器](https://github.com/stytim/spz) - SPZ 轉換工具
- [gsbox 轉換器](https://github.com/gotoeasy/gsbox) - PLY SPLAT SPZ SPX 轉換工具
- [SplatTransform](https://github.com/playcanvas/splat-transform) - 用於轉換和編輯 splats 的 CLI 工具以及 Node/瀏覽器函式庫，可讀取 PLY、SOG、SPZ、SPLAT、KSPLAT 和 LCC/LCC2，寫入 PLY、SOG、SPZ、GLB、CSV、LOD 和 WebP
- [GaussForge](https://github.com/3dgscloud/GaussForge) - 基於 C++/WASM 的 PLY、SPZ、SPLAT 與 KSPLAT 之間的轉換
- [SpectacularAI](https://github.com/SpectacularAI/point-cloud-tools) - 針對不同 3DGS 約定的轉換腳本
- [VGGT Factor Refinement](https://github.com/jashshah999/vggt-factor-refinement) - 使用 VGGT + 因子圖的免 COLMAP 流水線，從影片到 COLMAP 格式輸出
- [splatreg](https://github.com/Archerkattri/splatreg) - 可透過 pip 安裝的 splat 配準：將兩個 3DGS 掃描對齊並合併到同一個 SE(3)/Sim(3) 座標系（恢復尺度），提供 CLI + 純 PyTorch API，無需手動 gizmo
- [AURA](https://github.com/Archerkattri/aura) - 面向 3DGS 資產的逐 splat 校準置信度：留出一可靠性標籤、等滲校準，以及帶有認證 LOD 階梯的分布無關保形剪枝證書；透過 glTF/OpenUSD/SPZ 匯出（pip install aura-splat）
- [Open Reality](https://github.com/reality-opened/openreality) - 從手機影片到 3D 場景（基於 VGGT-SLAM，可選 gsplat 最佳化後匯出 splat），AI 助手可經由 MCP 查詢：測量、地面與牆面平面、路徑規劃、物體清單、機器人訓練匯出；可自託管

### 開發工具

- [GSOPs for Houdini](https://github.com/cgnomads/GSOPs) - Houdini 整合工具
- [camorph](https://github.com/Fraunhofer-IIS/camorph) - 相機參數轉換
- [SuperSplat](https://github.com/playcanvas/supersplat) - 免費、開源的基於瀏覽器的 3DGS 編輯器，支援一鍵發布

## 學習資源

### 部落格文章

- [3DGS 介紹](https://huggingface.co/blog/gaussian-splatting) - HuggingFace 指南
- [Gaussian Splatting 綜合概覽](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362)
- [非常好的（技術向）3D Gaussian Splatting 入門](https://medium.com/@AriaLeeNotAriel/numbynum-3d-gaussian-splatting-for-real-time-radiance-field-rendering-kerbl-et-al-60c0b25e5544)
- [Gaussian Splatting 真的很酷](https://aras-p.info/blog/2023/09/05/Gaussian-Splatting-is-pretty-cool/)
- [讓 Gaussian Splats 更小](https://aras-p.info/blog/2023/09/13/Making-Gaussian-Splats-smaller/)
- [讓 Gaussian Splats 更小一點](https://aras-p.info/blog/2023/09/27/Making-Gaussian-Splats-more-smaller/)
- [壓縮 Gaussian Splats](https://blog.playcanvas.com/compressing-gaussian-splats/)
- [PlayCanvas 開源 SOG](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) - Spatially Ordered Gaussians，一種基於 WebP 的超壓縮格式，比 PLY 小 15-20 倍
- [實作細節](https://github.com/kwea123/gaussian_splatting_notes) - 技術深入解析
- [數學基礎](https://github.com/chiehwangs/3d-gaussian-theory) - 理論解釋
- [前向與反向傳播的數學細節](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)
- [PyTorch 實作](https://myasincifci.github.io/) - 在 PyTorch 中精心實作的 Vanilla 3DGS
- [NeRFs vs. 3DGS](https://edwardahn.me/writing/NeRFvs3DGS/)
- [Gaussian 頭部頭像：總結](https://towardsdatascience.com/gaussian-head-avatars-a-summary-2bd17bd48500)
- [地理空間中的 3D：NeRFs、Gaussian Splatting 與空間運算](https://ckoziol.com/blog/2024/radiance_methods/)
- [採集指南](https://medium.com/@heyulei/capture-images-for-gaussian-splatting-81d081bbc826) - 影像採集教學
- [關於 gs 通用格式的讨论](https://github.com/mkkellogg/GaussianSplats3D/issues/47#issuecomment-1801360116)

### 演講

- [Gaussian Splats：準備好標準化了嗎？](https://www.youtube.com/watch?v=0xdPpKSkO3I) - 元宇宙標準論壇 2025/1/28
- [Unity 整合指南](https://www.youtube.com/watch?v=pM_HV2TU4rU&t=5298s) - 元宇宙標準論壇 2025/5/6

### 影片教學

- [入門（Windows）](https://youtu.be/UXtuigy_wYc)
- [兩分鐘講解](https://youtu.be/HVv_IQKlafQ)
- [Computerphile 的 3DGS 講解](https://youtu.be/VkIJbpdTujE)
- [Gaussian Splats 市政廳會議 - 第二部分](https://youtu.be/5_GaPYBHqOo)
- [gaussian splatting 入門（以及 Unity 插件）](https://www.xuanprada.com/blog/2023/10/22/intro-to-gaussian-splatting)
- [Jupyter 教學](https://www.youtube.com/watch?v=OcvA7fmiZYM)

### YouTube 頻道

- [LichtFeld Studio](https://www.youtube.com/@LichtFeldStudio) - 面向 [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) 的教學、發布講解與開發更新

## 致謝

- 感謝 [Leonid Keselman](https://github.com/leonidk) 告知我論文"Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting"的發布。
- 感謝 [Eric Haines](https://github.com/erich666) 推薦 Jupyter notebook 檢視器、Windows 教學，並修復了文字連字號及其他問題。
- 感謝 [Henry Pearce](https://github.com/henrypearce4D) 維護貢獻。
- [Yehe Liu](https://x.com/YeheLiu)
