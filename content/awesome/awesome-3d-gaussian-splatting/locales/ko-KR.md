# Awesome 3D Gaussian Splatting

<div align="center">
  3D Gaussian Splatting(3DGS) 및 관련 기술에 집중한 엄선된 리소스 모음입니다.

  [**논문 목록 보기**](https://mrnerf.github.io/awesome-3D-gaussian-splatting/) | [**LichtFeld Studio**](https://lichtfeld.io) | [**기여하기**](CONTRIBUTING.md) | [**MrNeRF**](https://www.mrnerf.com)

</div>

## 목차

- [논문 및 문서](#papers--documentation)
- [구현](#implementations)
- [뷰어 및 게임 엔진 지원](#viewers--game-engine-support)
- [도구 및 유틸리티](#tools--utilities)
- [학습 리소스](#learning-resources)
- [감사의 글](#credits)

## 논문 및 문서

### 논문 데이터베이스

3D Gaussian Splatting 논문을 모두 검색할 수 있는 종합 데이터베이스를 방문하세요:
[Papers Database](https://mrnerf.github.io/awesome-3D-gaussian-splatting/)

### 강좌 및 튜토리얼

- [MIT 역렌더링 강의(모듈 2)](https://www.scenerepresentations.org/courses/inverse-graphics-23/) - 역렌더링에 대한 학술적 심층 설명
- [3DGS 튜토리얼](https://3dgstutorial.github.io/) - 원본 3DGS 논문 저자들이 작성한 튜토리얼

### 데이터셋

- [NERDS 360 멀티뷰 데이터셋](https://zubair-irshad.github.io/projects/neo360.html) - 고품질 야외 장면 데이터셋

## 구현

### 공식 레퍼런스

- [오리지널 Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) - 원저자들이 제공한 레퍼런스 구현

### 커뮤니티 구현

| 구현 | 언어 | 라이선스 | 설명 |
| -------------- | -------- | ------- | ----------- |
| [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio) ([lichtfeld.io](https://lichtfeld.io)) | C++/CUDA | GPL-3.0 | 3D Gaussian Splatting을 위한 모듈형 워크스테이션 — 단일 네이티브 앱에서 학습, 검사, 편집, 자동화 및 내보내기 수행 |
| [Nerfstudio gsplat](https://github.com/nerfstudio-project/gsplat) | Python/CUDA | Apache-2.0 | Nerfstudio와의 통합 |
| [OpenSplat](https://github.com/pierotofy/OpenSplat) | C++/CPU/GPU | AGPL-3.0 | 크로스 플랫폼 솔루션 |
| [Taichi 3D GS](https://github.com/wanmeihuali/taichi_3d_gaussian_splatting) | Taichi | Apache-2.0 | Taichi 기반 구현 |
| [taichi-splatting](https://github.com/uc-vision/taichi-splatting) | Taichi/PyTorch | Apache-2.0 | Taichi와 PyTorch를 위한 모듈형 래스터라이저 |
| [Grendel Distributed 3DGS](https://github.com/nyu-systems/Grendel-GS) | Python/CUDA | Apache-2.0 | 멀티 GPU 분산 학습 |
| [Warp 3DGS](https://github.com/guoriyue/3dgs-warp-scratch) | Warp/Python | AGPL-3.0 | Warp 기반 구현 |
| [RI3D](https://github.com/Asus-Monitor/ri3d-impl) | Python/CUDA | Unlicense | 소수 샷 gaussian splatting 파이프라인 |
| [gaussian_splatting](https://github.com/joeyan/gaussian_splatting) | Python/CUDA | MIT | [수학 유도 과정을 정리한 문서](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)가 포함된 읽기 쉬운 구현 |
| [3d-gaussian-splatting](https://github.com/WangFeng18/3d-gaussian-splatting) | Python/CUDA | MIT | 간결한 재구현 |
| [gaussian_splatting_3d](https://github.com/heheyas/gaussian_splatting_3d) | Python/CUDA | | 초기 커뮤니티 재구현 |
| [My-exp-Gaussians](https://github.com/ingra14m/My-exp-Gaussian) | Python/CUDA | | 복잡한 장면을 모델링하는 3D 가우시안의 능력을 강화 |
| [360-gaussian-splatting](https://github.com/inuex35/360-gaussian-splatting) | Python | | 360° 이미지에서 직접 splats를 학습 |
| [2D Gaussian Splatting](https://github.com/OutofAi/2D-Gaussian-Splatting) | Jupyter | MIT | 2D gaussian splatting 노트북 설명 |
| [DGSO](https://github.com/An-u-rag/stylized-gaussian-splatting) | Python | MIT | 가우시안 최적화 중에 적용되는 스타일 전이 |
| [3D-Gaussian-Splatting-Reconstruction](https://github.com/Chi-Blaze-B/3D-Gaussian-Splatting-Reconstruction) | Python | Apache-2.0 | 비디오 입력 기반의 순수 PyTorch 구현 — CUDA 컴파일 불필요, CPU/NVIDIA GPU 백엔드 지원, 내장 포즈 추정기 및 GUI |
| [MetalSplat](https://github.com/tchauffi/metalsplat) | PyTorch/Metal | MIT | Apple Silicon GPU용 Metal 기반 구현. PyTorch에서 실행 시 커널을 자동 컴파일 |

### 프레임워크

- [Pointrix](https://github.com/pointrix-project/pointrix) - 미분 가능한 포인트 기반 렌더링
- [msplat](https://github.com/pointrix-project/msplat) - 모듈형 미분 가능 gaussian 래스터화 라이브러리
- [GauStudio](https://github.com/GAP-LAB-CUHK-SZ/gaustudio) - 여러 구현을 갖춘 통합 프레임워크
- [DriveStudio](https://github.com/ziyc/drivestudio) - 도시 장면 재구성 프레임워크
- [GSCodecStudio](https://github.com/JasonLSC/GSCodec_Studio) - 압축 및 동적 splatting
- [gaussian-splatting-lightning](https://github.com/yzslab/gaussian-splatting-lightning) - 파생 알고리즘에 인터랙티브 웹 뷰어 추가

## 뷰어 및 게임 엔진 지원

### 게임 엔진

- [Unity 플러그인](https://github.com/aras-p/UnityGaussianSplatting)
- [Unity 플러그인(gsplat-unity)](https://github.com/wuyize25/gsplat-unity)
- [Unity 플러그인(DynGsplat-unity)](https://github.com/HiFi-Human/DynGsplat-unity) - 동적 splatting용
- [Unreal 플러그인(MLSLabsGaussianSplattingRenderer-UE)](https://github.com/mlslabs/MLSLabsGaussianSplattingRenderer-UE)
- [Unreal 플러그인(XScene-UEPlugin)](https://github.com/xverse-engine/XScene-UEPlugin)
- [PlayCanvas 엔진](https://github.com/playcanvas/engine)
- [Godot 플러그인(gdgs)](https://github.com/ReconWorldLab/godot-gaussian-splatting) - Godot 4.3+용 실시간 3DGS 렌더링 플러그인

### 웹 뷰어

**WebGL**

- [Splat Viewer](https://github.com/antimatter15/splat)
- [Gauzilla](https://github.com/BladeTransformerLLC/gauzilla)
- [인터랙티브 뷰어](https://github.com/kishimisu/Gaussian-Splatting-WebGL)
- [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D)
- [gsplat.js](https://github.com/huggingface/gsplat.js)
- [A-Frame](https://github.com/quadjr/aframe-gaussian-splatting)
- [splaTV](https://github.com/antimatter15/splaTV) - 4D 가우시안용 뷰어. [라이브 데모](http://antimatter15.com/splaTV/) 포함
- [WebRTC 뷰어](https://github.com/dylanebert/gaussian-viewer)

**WebGPU**

- [EPFL 뷰어](https://github.com/cvlab-epfl/gaussian-splatting-web)
- [WebGPU Splat](https://github.com/KeKsBoTer/web-splat)
- [gaussian-splatting-webgpu](https://github.com/MarcusAndreasSvensson/gaussian-splatting-webgpu)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer) - 고성능 splat 뷰어
- [PlayCanvas 모델 뷰어](https://github.com/playcanvas/model-viewer) - glTF 및 3DGS 에셋용 뷰어

### 데스크톱 뷰어

- [3DGS.cpp](https://github.com/shg8/3DGS.cpp) - Windows, macOS, Linux, iOS, visionOS용 C++/Vulkan 렌더러
- [vkgs](https://github.com/jaesung-cs/vkgs) - 크로스 플랫폼 C++/Vulkan 렌더러
- [splatviz](https://github.com/Florian-Barthel/splatviz) - 실행 시 렌더링 코드를 편집하거나 여러 장면을 동시에 표시
- [OpenGL Viewer](https://github.com/limacv/GaussianSplattingViewer) - PyOpenGL 뷰어. 공식 CUDA 백엔드도 지원
- [Taichi Viewer](https://github.com/uc-vision/splat-viewer) - 벤치마크 기능을 갖춘 렌더러
- [DearGaussianGUI](https://github.com/leviome/DearGaussianGUI)
- [LiteViz-GS](https://github.com/panxkun/liteviz-gs)
- [Nerfstudio Viser](https://github.com/viser-project/viser)
- [Nerfstudio(gaussian_splatting 브랜치)](https://github.com/yzslab/nerfstudio/tree/gaussian_splatting)
- [Jupyter notebook 뷰어](https://github.com/shumash/gaussian-splatting/blob/mshugrina/interactive/interactive.ipynb)

### 네이티브 애플리케이션

- [Blender 애드온](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [Blender 애드온(KIRI)](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- [Blender 애드온(404—GEN)](https://github.com/404-Repo/404-gen-blender-add-on)
- [Houdini 뷰포트 렌더러](https://github.com/rubendhz/houdini-gsplat-renderer) - Houdini에서의 Gaussian Splatting HDK/GLSL 구현
- [iOS Metal 뷰어](https://github.com/laanlabs/metal-splats)
- [VR 지원(OpenXR)](https://github.com/hyperlogic/splatapult)
- [ROS2 지원](https://github.com/shadygm/ROSplat)
- [Splat Local](https://github.com/michael-L-i/splat-local) - Apple Silicon에서 완전히 로컬로 실행되는 비디오에서 3DGS로 가는 파이프라인(COLMAP/GLOMAP 포즈, Brush를 통한 Metal 네이티브 학습). 학습 체크포인트를 브라우저 뷰어로 실시간 스트리밍

## 도구 및 유틸리티

### 데이터 처리

- [Kapture](https://github.com/naver/kapture) - 시각적 위치 추정을 위한 통합 데이터 형식
- [Kapture 이미지 크로퍼](https://gist.github.com/jo-chemla/258e6e40d3d6c2220b29518ff3c17c40) - 검은 테두리를 제거하는 비왜곡 이미지 크로퍼
- [3DGS 변환기](https://github.com/francescofugazzi/3dgsconverter) - 형식 변환 도구
- [포인트 클라우드 편집기](https://github.com/JohannesKrueger/pointcloudeditor) - 웹 기반 포인트 클라우드 편집
- [SPZ 변환기](https://github.com/stytim/spz) - SPZ 변환 도구
- [gsbox 변환기](https://github.com/gotoeasy/gsbox) - PLY SPLAT SPZ SPX 변환 도구
- [SplatTransform](https://github.com/playcanvas/splat-transform) - splats를 변환하고 편집하기 위한 CLI 도구 및 Node/브라우저 라이브러리. PLY, SOG, SPZ, SPLAT, KSPLAT, LCC/LCC2를 읽고 PLY, SOG, SPZ, GLB, CSV, LOD, WebP를 씀
- [GaussForge](https://github.com/3dgscloud/GaussForge) - C++/WASM 기반의 PLY, SPZ, SPLAT, KSPLAT 간 변환
- [SpectacularAI](https://github.com/SpectacularAI/point-cloud-tools) - 다양한 3DGS 규약을 위한 변환 스크립트
- [VGGT Factor Refinement](https://github.com/jashshah999/vggt-factor-refinement) - VGGT + 팩터 그래프를 사용하는 COLMAP 없는 파이프라인. 비디오에서 COLMAP 형식 출력으로
- [splatreg](https://github.com/Archerkattri/splatreg) - pip로 설치 가능한 splat 정합: 두 3DGS 스캔을 동일한 SE(3)/Sim(3) 좌표계로 정렬 및 병합(스케일 복원), CLI + 순수 PyTorch API, 수동 gizmo 불필요
- [AURA](https://github.com/Archerkattri/aura) - 3DGS 에셋을 위한 splat별 보정 신뢰도: 홀드아웃 신뢰 라벨, 등장 보정, 그리고 인증된 LOD 사다리가 있는 분포 무관 보형 가지치기 증명서. glTF/OpenUSD/SPZ로 내보내기(pip install aura-splat)
- [Open Reality](https://github.com/reality-opened/openreality) - 휴대전화 비디오에서 3D 장면으로(VGGT-SLAM 기반, 선택적 gsplat 정제 후 splat 내보내기). AI 비서가 MCP를 통해 질의 가능: 측정, 바닥 및 벽 평면, 경로 계획, 객체 목록, 로봇 학습용 내보내기. 셀프 호스팅 가능

### 개발 도구

- [GSOPs for Houdini](https://github.com/cgnomads/GSOPs) - Houdini 통합 도구
- [camorph](https://github.com/Fraunhofer-IIS/camorph) - 카메라 파라미터 변환
- [SuperSplat](https://github.com/playcanvas/supersplat) - 무료 오픈소스 브라우저 기반 3DGS 편집기. 원클릭 게시 지원

## 학습 리소스

### 블로그 글

- [3DGS 소개](https://huggingface.co/blog/gaussian-splatting) - HuggingFace 가이드
- [Gaussian Splatting 종합 개요](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362)
- [매우 좋은(기술적인) 3D Gaussian Splatting 입문](https://medium.com/@AriaLeeNotAriel/numbynum-3d-gaussian-splatting-for-real-time-radiance-field-rendering-kerbl-et-al-60c0b25e5544)
- [Gaussian Splatting은 꽤 멋집니다](https://aras-p.info/blog/2023/09/05/Gaussian-Splatting-is-pretty-cool/)
- [Gaussian Splats를 더 작게 만들기](https://aras-p.info/blog/2023/09/13/Making-Gaussian-Splats-smaller/)
- [Gaussian Splats를 더 더 작게 만들기](https://aras-p.info/blog/2023/09/27/Making-Gaussian-Splats-more-smaller/)
- [Gaussian Splats 압축하기](https://blog.playcanvas.com/compressing-gaussian-splats/)
- [PlayCanvas가 SOG를 오픈소스화](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) - Spatially Ordered Gaussians. WebP 기반의 초압축 형식으로 PLY보다 15~20배 작음
- [구현 세부사항](https://github.com/kwea123/gaussian_splatting_notes) - 기술적 심층 분석
- [수학적 기초](https://github.com/chiehwangs/3d-gaussian-theory) - 이론 설명
- [순전파 및 역전파의 수학적 세부사항](https://github.com/joeyan/gaussian_splatting/blob/main/MATH.md)
- [PyTorch 구현](https://myasincifci.github.io/) - PyTorch에서 정성껏 구현한 Vanilla 3DGS
- [NeRFs vs. 3DGS](https://edwardahn.me/writing/NeRFvs3DGS/)
- [Gaussian 헤드 아바타: 요약](https://towardsdatascience.com/gaussian-head-avatars-a-summary-2bd17bd48500)
- [지오스페이셜에서의 3D: NeRFs, Gaussian Splatting, 공간 컴퓨팅](https://ckoziol.com/blog/2024/radiance_methods/)
- [캡처 가이드](https://medium.com/@heyulei/capture-images-for-gaussian-splatting-81d081bbc826) - 이미지 촬영 튜토리얼
- [gs 범용 형식에 대한 논의](https://github.com/mkkellogg/GaussianSplats3D/issues/47#issuecomment-1801360116)

### 발표

- [Gaussian Splats: 표준화할 준비가 되었는가?](https://www.youtube.com/watch?v=0xdPpKSkO3I) - Metaverse Standards Forum 2025/1/28
- [Unity 통합 가이드](https://www.youtube.com/watch?v=pM_HV2TU4rU&t=5298s) - Metaverse Standards Forum 2025/5/6

### 비디오 튜토리얼

- [시작하기(Windows)](https://youtu.be/UXtuigy_wYc)
- [2분 설명](https://youtu.be/HVv_IQKlafQ)
- [Computerphile의 3DGS 설명](https://youtu.be/VkIJbpdTujE)
- [Gaussian Splats Town Hall - 2부](https://youtu.be/5_GaPYBHqOo)
- [gaussian splatting 입문(및 Unity 플러그인)](https://www.xuanprada.com/blog/2023/10/22/intro-to-gaussian-splatting)
- [Jupyter 튜토리얼](https://www.youtube.com/watch?v=OcvA7fmiZYM)

### YouTube 채널

- [LichtFeld Studio](https://www.youtube.com/@LichtFeldStudio) - [LichtFeld Studio](https://github.com/MrNeRF/LichtFeld-Studio)를 위한 튜토리얼, 릴리스 설명, 개발 업데이트

## 감사의 글

- [Leonid Keselman](https://github.com/leonidk) 님은 "Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting" 논문의 발표를 알려주셔서 감사합니다.
- [Eric Haines](https://github.com/erich666) 님은 Jupyter notebook 뷰어와 Windows 튜토리얼을 제안해 주시고 텍스트 하이픈 및 기타 문제를 수정해 주셔서 감사합니다.
- [Henry Pearce](https://github.com/henrypearce4D) 님은 기여를 유지 관리해 주셔서 감사합니다.
- [Yehe Liu](https://x.com/YeheLiu)
