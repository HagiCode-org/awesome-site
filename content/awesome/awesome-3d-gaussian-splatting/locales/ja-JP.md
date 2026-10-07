# Awesome 3D Gaussian Splatting

<div align="center">
  3D Gaussian Splatting（3DGS）および関連技術に焦点を当てた厳選されたリソース集。

  [**論文リストを見る**](https://mrnerf.github.io/awesome-3D-gaussian-splatting/) | [**LichtFeld Studio**](https://lichtfeld.io) | [**貢献する**](CONTRIBUTING.md) | [**MrNeRF**](https://www.mrnerf.com)

</div>

## 目次

- [論文とドキュメント](#論文とドキュメント)
- [実装](#実装)
- [ビューアとゲームエンジン対応](#ビューアとゲームエンジン対応)
- [ツールとユーティリティ](#ツールとユーティリティ)
- [学習リソース](#学習リソース)
- [謝辞](#謝辞)

## 論文とドキュメント

### 論文データベース

包括的で検索可能な 3D Gaussian Splatting の論文データベースはこちら：
[Papers Database](https://mrnerf.github.io/awesome-3D-gaussian-splatting/)

### コースとチュートリアル

- [MIT 逆レンダリング講義（モジュール 2）](https://www.scenerepresentations.org/courses/inverse-graphics-23/) - 逆レンダリングに関する学術的な深い解説
- [3DGS チュートリアル](https://3dgstutorial.github.io/) - オリジナルの 3DGS 論文の著者によるチュートリアル

### データセット

- [NERDS 360 マルチビューデータセット](https://zubair-irshad.github.io/projects/neo360.html) - 高品質な屋外シーンデータセット

## 実装

### 公式リファレンス

- [オリジナルの Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) - 元の著者によるリファレンス実装

### コミュニティ実装

| 実装 | 言語 | ライセンス | 説明 |
| -------------- | -------- | ------- | ----------- |
| [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) ([lichtfeld.io](https://lichtfeld.io)) | C++/CUDA | GPL-3.0 | 3D Gaussian Splatting のためのモジュール式ワークステーション — 単一のネイティブアプリから学習・検査・編集・自動化・エクスポートが可能 |
| [Nerfstudio gsplat](https://github.com/nerfstudio-project/gsplat) | Python/CUDA | Apache-2.0 | Nerfstudio との統合 |
| [OpenSplat](https://github.com/pierotofy/OpenSplat) | C++/CPU/GPU | AGPL-3.0 | クロスプラットフォームのソリューション |
| [Taichi 3D GS](https://github.com/wanmeihuali/taichi_3d_gaussian_splatting) | Taichi | Apache-2.0 | Taichi ベースの実装 |
| [taichi-splatting](https://github.com/uc-vision/taichi-splatting) | Taichi/PyTorch | Apache-2.0 | Taichi と PyTorch 向けのモジュール式ラスタライザ |
| [Grendel Distributed 3DGS](https://github.com/nyu-systems/Grendel-GS) | Python/CUDA | Apache-2.0 | マルチ GPU 分散学習 |
| [Warp 3DGS](https://github.com/guoriyue/3dgs-warp-scratch) | Warp/Python | AGPL-3.0 | Warp ベースの実装 |
| [RI3D](https://github.com/Asus-Monitor/ri3d-impl) | Python/CUDA | Unlicense | 少ショット gaussian splatting パイプライン |
| [gaussian_splatting](https://github.com/joeyan/gaussian_splatting) | Python/CUDA | MIT | [数式の導出をまとめたドキュメント](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)付きの読みやすい実装 |
| [3d-gaussian-splatting](https://github.com/WangFeng18/3d-gaussian-splatting) | Python/CUDA | MIT | コンパクトな再実装 |
| [gaussian_splatting_3d](https://github.com/heheyas/gaussian_splatting_3d) | Python/CUDA | | 初期のコミュニティ再実装 |
| [My-exp-Gaussians](https://github.com/ingra14m/My-exp-Gaussian) | Python/CUDA | | 3D ガウスによる複雑なシーンのモデリング能力を強化 |
| [360-gaussian-splatting](https://github.com/inuex35/360-gaussian-splatting) | Python | | 360° 画像から直接 splats を学習 |
| [2D Gaussian Splatting](https://github.com/OutofAi/2D-Gaussian-Splatting) | Jupyter | MIT | 2D gaussian splatting のノートブック解説 |
| [DGSO](https://github.com/An-u-rag/stylized-gaussian-splatting) | Python | MIT | ガウス最適化中に適用されるスタイル転送 |
| [3D-Gaussian-Splatting-Reconstruction](https://github.com/Chi-Blaze-B/3D-Gaussian-Splatting-Reconstruction) | Python | Apache-2.0 | 動画入力からの純 PyTorch 実装 — CUDA コンパイル不要、CPU/NVIDIA GPU バックエンド対応、内蔵の姿勢推定器と GUI 付き |
| [MetalSplat](https://github.com/tchauffi/metalsplat) | PyTorch/Metal | MIT | Apple Silicon GPU 向けの Metal ベース実装。PyTorch 上で実行時にカーネルを自動コンパイル |

### フレームワーク

- [Pointrix](https://github.com/pointrix-project/pointrix) - 微分可能な点ベースレンダリング
- [msplat](https://github.com/pointrix-project/msplat) - モジュール式の微分可能 gaussian ラスタライズライブラリ
- [GauStudio](https://github.com/GAP-LAB-CUHK-SZ/gaustudio) - 複数の実装を持つ統合フレームワーク
- [DriveStudio](https://github.com/ziyc/drivestudio) - 都市シーン再構成フレームワーク
- [GSCodecStudio](https://github.com/JasonLSC/GSCodec_Studio) - 圧縮と動的 splatting
- [gaussian-splatting-lightning](https://github.com/yzslab/gaussian-splatting-lightning) - 派生アルゴリズムに加え、インタラクティブな Web ビューアを搭載

## ビューアとゲームエンジン対応

### ゲームエンジン

- [Unity プラグイン](https://github.com/aras-p/UnityGaussianSplatting)
- [Unity プラグイン（gsplat-unity）](https://github.com/wuyize25/gsplat-unity)
- [Unity プラグイン（DynGsplat-unity）](https://github.com/HiFi-Human/DynGsplat-unity) - 動的 splatting 向け
- [Unreal プラグイン（MLSLabsGaussianSplattingRenderer-UE）](https://github.com/mlslabs/MLSLabsGaussianSplattingRenderer-UE)
- [Unreal プラグイン（XScene-UEPlugin）](https://github.com/xverse-engine/XScene-UEPlugin)
- [PlayCanvas エンジン](https://github.com/playcanvas/engine)
- [Godot プラグイン（gdgs）](https://github.com/ReconWorldLab/godot-gaussian-splatting) - Godot 4.3+ 向けのリアルタイム 3DGS レンダリングプラグイン

### Web ビューア

**WebGL**

- [Splat Viewer](https://github.com/antimatter15/splat)
- [Gauzilla](https://github.com/BladeTransformerLLC/gauzilla)
- [インタラクティブビューア](https://github.com/kishimisu/Gaussian-Splatting-WebGL)
- [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D)
- [gsplat.js](https://github.com/huggingface/gsplat.js)
- [A-Frame](https://github.com/quadjr/aframe-gaussian-splatting)
- [splaTV](https://github.com/antimatter15/splaTV) - 4D ガウス向けのビューア。[ライブデモ](http://antimatter15.com/splaTV/)付き
- [WebRTC ビューア](https://github.com/dylanebert/gaussian-viewer)

**WebGPU**

- [EPFL ビューア](https://github.com/cvlab-epfl/gaussian-splatting-web)
- [WebGPU Splat](https://github.com/KeKsBoTer/web-splat)
- [gaussian-splatting-webgpu](https://github.com/MarcusAndreasSvensson/gaussian-splatting-webgpu)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer) - 高性能な splat ビューア
- [PlayCanvas モデルビューア](https://github.com/playcanvas/model-viewer) - glTF と 3DGS アセット向けのビューア

### デスクトップビューア

- [3DGS.cpp](https://github.com/shg8/3DGS.cpp) - Windows、macOS、Linux、iOS、visionOS 向けの C++/Vulkan レンダラ
- [vkgs](https://github.com/jaesung-cs/vkgs) - クロスプラットフォームの C++/Vulkan レンダラ
- [splatviz](https://github.com/Florian-Barthel/splatviz) - 実行時にレンダリングコードを編集、または複数のシーンを同時に表示
- [OpenGL Viewer](https://github.com/limacv/GaussianSplattingViewer) - PyOpenGL ビューア。公式の CUDA バックエンドも併用可
- [Taichi Viewer](https://github.com/uc-vision/splat-viewer) - ベンチマーク機能を持つレンダラ
- [DearGaussianGUI](https://github.com/leviome/DearGaussianGUI)
- [LiteViz-GS](https://github.com/panxkun/liteviz-gs)
- [Nerfstudio Viser](https://github.com/viser-project/viser)
- [Nerfstudio（gaussian_splatting ブランチ）](https://github.com/yzslab/nerfstudio/tree/gaussian_splatting)
- [Jupyter notebook ビューア](https://github.com/shumash/gaussian-splatting/blob/mshugrina/interactive/interactive.ipynb)

### ネイティブアプリケーション

- [Blender アドオン](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [Blender アドオン（KIRI）](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- [Blender アドオン（404—GEN）](https://github.com/404-Repo/404-gen-blender-add-on)
- [Houdini ビューポートレンダラ](https://github.com/rubendhz/houdini-gsplat-renderer) - Houdini での Gaussian Splatting の HDK/GLSL 実装
- [iOS Metal ビューア](https://github.com/laanlabs/metal-splats)
- [VR 対応（OpenXR）](https://github.com/hyperlogic/splatapult)
- [ROS2 対応](https://github.com/shadygm/ROSplat)
- [Splat Local](https://github.com/michael-L-i/splat-local) - Apple Silicon 上で完全にローカル実行される動画から 3DGS へのパイプライン（COLMAP/GLOMAP 姿勢、Brush による Metal ネイティブ学習）。学習チェックポイントをブラウザビューアにライブストリーミング

## ツールとユーティリティ

### データ処理

- [Kapture](https://github.com/naver/kapture) - 視覚的位置推定のための統合データフォーマット
- [Kapture 画像クロッパー](https://gist.github.com/jo-chemla/258e6e40d3d6c2220b29518ff3c17c40) - 黒枠を除去するための非歪曲画像クロッパー
- [3DGS コンバータ](https://github.com/francescofugazzi/3dgsconverter) - フォーマット変換ツール
- [点群エディタ](https://github.com/JohannesKrueger/pointcloudeditor) - Web ベースの点群編集
- [SPZ コンバータ](https://github.com/stytim/spz) - SPZ 変換ツール
- [gsbox コンバータ](https://github.com/gotoeasy/gsbox) - PLY SPLAT SPZ SPX 変換ツール
- [SplatTransform](https://github.com/playcanvas/splat-transform) - splats の変換と編集のための CLI ツールおよび Node/ブラウザライブラリ。PLY、SOG、SPZ、SPLAT、KSPLAT、LCC/LCC2 を読み込み、PLY、SOG、SPZ、GLB、CSV、LOD、WebP を書き出し
- [GaussForge](https://github.com/3dgscloud/GaussForge) - C++/WASM ベースの PLY、SPZ、SPLAT、KSPLAT 間の変換
- [SpectacularAI](https://github.com/SpectacularAI/point-cloud-tools) - 異なる 3DGS 規約向けの変換スクリプト
- [VGGT Factor Refinement](https://github.com/jashshah999/vggt-factor-refinement) - VGGT + ファクターグラフを用いた COLMAP 不要のパイプライン。動画から COLMAP フォーマット出力へ
- [splatreg](https://github.com/Archerkattri/splatreg) - pip でインストール可能な splat 登録：2 つの 3DGS スキャンを同じ SE(3)/Sim(3) 座標系に整列・統合（スケールを復元）、CLI + 純 PyTorch API、手動 gizmo 不要
- [AURA](https://github.com/Archerkattri/aura) - 3DGS アセット向けの splat ごとの較正済み信頼度：ホールドアウト信頼ラベル、等張較正、および認定された LOD ラダー付きの分布に依存しない共形枝刈り証明書。glTF/OpenUSD/SPZ 経由でエクスポート（pip install aura-splat）
- [Open Reality](https://github.com/reality-opened/openreality) - スマホ動画から 3D シーンへ（VGGT-SLAM ベース、オプションの gsplat 精緻化付きで splat エクスポート）。AI アシスタントが MCP 経由で照会可能：計測、床・壁面平面、経路計画、物体リスト、ロボット学習用エクスポート。セルフホスト可能

### 開発ツール

- [GSOPs for Houdini](https://github.com/cgnomads/GSOPs) - Houdini 統合ツール
- [camorph](https://github.com/Fraunhofer-IIS/camorph) - カメラパラメータ変換
- [SuperSplat](https://github.com/playcanvas/supersplat) - 無料・オープンソースのブラウザベース 3DGS エディタ。ワンクリック公開対応

## 学習リソース

### ブログ記事

- [3DGS 入門](https://huggingface.co/blog/gaussian-splatting) - HuggingFace ガイド
- [Gaussian Splatting の包括的な概要](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362)
- [非常に良い（技術的な）3D Gaussian Splatting 入門](https://medium.com/@AriaLeeNotAriel/numbynum-3d-gaussian-splatting-for-real-time-radiance-field-rendering-kerbl-et-al-60c0b25e5544)
- [Gaussian Splatting はかなりcool](https://aras-p.info/blog/2023/09/05/Gaussian-Splatting-is-pretty-cool/)
- [Gaussian Splats を小さくする](https://aras-p.info/blog/2023/09/13/Making-Gaussian-Splats-smaller/)
- [Gaussian Splats をさらに小さくする](https://aras-p.info/blog/2023/09/27/Making-Gaussian-Splats-more-smaller/)
- [Gaussian Splats を圧縮する](https://blog.playcanvas.com/compressing-gaussian-splats/)
- [PlayCanvas が SOG をオープンソース化](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) - Spatially Ordered Gaussians。WebP ベースの超圧縮フォーマットで、PLY より 15〜20 倍小さい
- [実装の詳細](https://github.com/kwea123/gaussian_splatting_notes) - 技術的な深い解説
- [数学的基礎](https://github.com/chiehwangs/3d-gaussian-theory) - 理論の説明
- [順伝播と逆伝播の数学的詳細](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)
- [PyTorch 実装](https://myasincifci.github.io/) - PyTorch での Vanilla 3DGS の丁寧な実装
- [NeRFs vs. 3DGS](https://edwardahn.me/writing/NeRFvs3DGS/)
- [Gaussian ヘッドアバター：まとめ](https://towardsdatascience.com/gaussian-head-avatars-a-summary-2bd17bd48500)
- [地理空間における 3D：NeRFs、Gaussian Splatting、空間計算](https://ckoziol.com/blog/2024/radiance_methods/)
- [撮影ガイド](https://medium.com/@heyulei/capture-images-for-gaussian-splatting-81d081bbc826) - 画像撮影チュートリアル
- [gs 共通フォーマットに関する議論](https://github.com/mkkellogg/GaussianSplats3D/issues/47#issuecomment-1801360116)

### 講演

- [Gaussian Splats：標準化の準備はできているか？](https://www.youtube.com/watch?v=0xdPpKSkO3I) - Metaverse Standards Forum 2025/1/28
- [Unity 統合ガイド](https://www.youtube.com/watch?v=pM_HV2TU4rU&t=5298s) - Metaverse Standards Forum 2025/5/6

### 動画チュートリアル

- [入門（Windows）](https://youtu.be/UXtuigy_wYc)
- [2 分で解説](https://youtu.be/HVv_IQKlafQ)
- [Computerphile の 3DGS 解説](https://youtu.be/VkIJbpdTujE)
- [Gaussian Splats Town Hall - パート 2](https://youtu.be/5_GaPYBHqOo)
- [gaussian splatting 入門（および Unity プラグイン）](https://www.xuanprada.com/blog/2023/10/22/intro-to-gaussian-splatting)
- [Jupyter チュートリアル](https://www.youtube.com/watch?v=OcvA7fmiZYM)

### YouTube チャンネル

- [LichtFeld Studio](https://www.youtube.com/@LichtFeldStudio) - [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) 向けのチュートリアル、リリース解説、開発アップデート

## 謝辞

- [Leonid Keselman](https://github.com/leonidk) さんは論文 "Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting" の公開を教えてくださり、ありがとうございます。
- [Eric Haines](https://github.com/erich666) さんは Jupyter notebook ビューアや Windows チュートリアルを提案していただき、テキストのハイフンやその他の問題を修正していただき、ありがとうございます。
- [Henry Pearce](https://github.com/henrypearce4D) さんは貢献のメンテナンスをしていただき、ありがとうございます。
- [Yehe Liu](https://x.com/YeheLiu)
