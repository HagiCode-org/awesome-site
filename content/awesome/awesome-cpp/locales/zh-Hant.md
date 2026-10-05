# Awesome C++ [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/fffaraz/awesome-cpp/)
精選的 C++（或 C）框架、函式庫、資源及其他精彩內容清單，靈感來自 awesome-... 等專案。

- [Awesome C++  ](#awesome-c--)
	- [標準函式庫](#standard-libraries)
	- [框架](#frameworks)
	- [人工智慧](#artificial-intelligence)
	- [非同步事件迴圈](#asynchronous-event-loop)
	- [音訊](#audio)
	- [生物學](#biology)
	- [BitTorrent](#bittorrent)
	- [化學](#chemistry)
	- [命令列介面（CLI）](#cli)
	- [壓縮](#compression)
	- [並行處理](#concurrency)
	- [組態設定](#configuration)
	- [容器](#containers)
	- [密碼學](#cryptography)
	- [CSV](#csv)
	- [資料庫](#database)
	- [資料視覺化](#data-visualization)
	- [偵錯](#debug)
	- [說明文件](#documentation)
	- [數位訊號處理（DSP）](#dsp)
	- [字型](#font)
	- [遊戲引擎](#game-engine)
	- [圖形](#graph)
	- [圖形使用者介面（GUI）](#gui)
	- [圖形](#graphics)
	- [影像處理](#image-processing)
	- [國際化](#internationalization)
	- [行程間通訊](#inter-process-communication)
	- [JSON](#json)
	- [日誌記錄](#logging)
	- [機器學習](#machine-learning)
	- [數學](#math)
	- [記憶體配置](#memory-allocation)
	- [多媒體](#multimedia)
	- [網路](#networking)
	- [Office Open XML](#office-open-xml)
	- [PDF](#pdf)
	- [物理學](#physics)
	- [反射](#reflection)
	- [正規表示式](#regular-expression)
	- [機器人學](#robotics)
	- [科學計算](#scientific-computing)
	- [指令碼](#scripting)
	- [序列化](#serialization)
	- [序列埠](#serial-port)
	- [排序](#sorting)
	- [影片](#video)
	- [虛擬機器](#virtual-machines)
	- [網頁應用程式框架](#web-application-framework)
	- [XML](#xml)
	- [YAML](#yaml)
	- [其他項目](#miscellaneous)
- [軟體](#software)
	- [編譯器](#compiler)
	- [線上編譯器](#online-compiler)
	- [偵錯器](#debugger)
	- [整合式開發環境](#integrated-development-environment)
	- [建置系統](#build-systems)
	- [靜態程式碼分析](#static-code-analysis)
	- [程式碼風格工具](#coding-style-tools)
- [資源](#resources)
	- [API 設計](#api-design)
	- [文章](#articles)
	- [書籍](#books)
	- [程式碼標準](#coding-standards)
	- [程式碼風格](#coding-style)
	- [Podcast](#podcasts)
	- [演講](#talks)
	- [影片](#videos)
	- [網站](#websites)
	- [部落格](#weblogs)
	- [其他 Awesome 專案](#other-awesome-projects)
- [其他 Awesome 清單](#other-awesome-lists)
- [工作機會](#jobs)
- [贊助者](#sponsors)
- [貢獻](#contributing)
			- [*如果您發現此處有已停止維護或不適合收錄的專案或連結，請提交 Pull Request 協助改進本文。謝謝！*](#if-you-see-a-project-or-link-here-that-is-no-longer-maintained-or-is-not-a-good-fit-please-submit-a-pull-request-to-improve-this-document-thank-you)

## 標準函式庫
*C++ 標準函式庫——包括 STL 容器、STL 演算法、STL 函式物件等。*

* [C++ Standard Library](https://en.wikipedia.org/wiki/C%2B%2B_Standard_Library) - 由核心語言編寫，並屬於 C++ ISO 標準的一組類別與函式。
* [Standard Template Library](https://en.wikipedia.org/wiki/Standard_Template_Library) - 標準範本函式庫（STL）。
* [C POSIX library](https://en.wikipedia.org/wiki/C_POSIX_library) - POSIX 系統的 C 標準函式庫規格。
* [ISO C++ Standards Committee](https://github.com/cplusplus) - ISO/IEC JTC1/SC22/WG21，即 C++ 標準委員會。[website](https://www.open-std.org/JTC1/SC22/WG21/)
* [The GNU C Library](https://www.gnu.org/software/libc/manual) - 本手冊旨在說明 GNU C 函式庫各項功能的用法。

## 框架
*C++ 通用框架與函式庫。*

* [abseil-cpp](https://github.com/abseil/abseil-cpp) - Abseil C++ 通用函式庫。[Apache2]
* [Apache C++ Standard Library](https://stdcxx.apache.org/) - STDCXX，一組演算法、容器、迭代器及其他基礎元件。[retired] [Apache2]
* [APR](https://apr.apache.org/) - Apache 可攜式執行階段，提供一組跨平台實用函式庫。[Apache2]
* [ASL](https://stlab.adobe.com/) - Adobe 原始碼函式庫，提供經過同儕審查且可攜式的 C++ 原始碼函式庫。[MIT]
* [AUI](https://github.com/aui-framework/aui) - 適用於 C++20 的宣告式 UI 工具包。[MPL2]
* [Boost](https://github.com/boostorg) :zap: - 大量通用 C++ 函式庫的集合。[Boost] [website](https://www.boost.org)
* [BDE](https://github.com/bloomberg/bde) - Bloomberg Labs 的 BDE 開發環境。[Apache2]
* [C++ Workflow](https://github.com/sogou/workflow) :zap: - C++ 平行計算與非同步網路引擎。[Apache2]
* [CGraph](https://github.com/ChunelFeng/CGraph) - 基於 C++ 的跨平台 DAG 框架，不依賴任何第三方函式庫。[MIT]
* [Cinder](https://libcinder.org/) - 由社群開發的免費開源函式庫，適用於專業品質的創意程式設計。[BSD]
* [Coost](https://github.com/idealvin/coost) - 輕量、無相依性的 C++ 函式庫，提供 Go 風格協程、日誌、設定及其他實用工具。[MIT]
* [Cxxomfort](https://ryan.gulix.cl/fossil.cgi/cxxomfort/) - 小巧的僅含標頭檔函式庫，可將較新 C++ 標準中的多種功能回移至 C++03 及更新版本。[MIT]
* [Dlib](https://github.com/davisking/dlib) :zap: - 用於建構實際機器學習與資料分析 C++ 應用程式的工具組。[Boost] [website](https://dlib.net/)
* [EASTL](https://github.com/electronicarts/EASTL) - Electronic Arts 標準模板庫。[BSD]
* [ETL](https://github.com/ETLCPP/etl) - 嵌入式模板庫。[MIT]
* [ffead-cpp](https://github.com/sumeetchhetri/ffead-cpp) - 企業應用開發框架。[Apache2]
* [Folly](https://github.com/facebook/folly) - Facebook 開發並使用的開源 C++ 庫。[Apache2]
* [FunctionalPlus](https://github.com/Dobiasd/FunctionalPlus) - C++ 函數式程式設計函式庫，讓您能撰寫簡潔易讀的 C++ 程式碼。[MIT]
* [GLib](https://wiki.gnome.org/Projects/GLib) - 為以 C 編寫的函式庫與應用程式提供核心建置元件。[LGPL]
* [itlib](https://github.com/iboB/itlib) - 一組類似 std 的單標頭檔案 C++ 庫。[MIT]
* [JUCE](https://github.com/julianstorer/JUCE) - 功能全面的 C++ 類庫，用於開發跨平臺軟體。[Core-Module: ISC, Rest: GPL2/GPL3/Proprietary] [website](https://www.juce.com/)
* [Kigs framework](https://github.com/Kigs-framework/kigs) - 免費開源的 C++ 模組化、多用途、跨平臺 RAD 框架。[MIT] [website](https://kigs-framework.org/)
* [libPhenom](https://github.com/facebook/libphenom) - 用於建構高效能且易於擴充的 C 系統事件處理框架。[Apache2]
* [LibSourcey](https://github.com/sourcey/libsourcey) - 用於即時影片串流與高效能網路應用程式的 C++11 事件驅動 I/O。[LGPL]
* [LibU](https://github.com/koanlogic/libu) - 使用 C 編寫的多平臺實用庫。[BSD]
* [libxutils](https://github.com/kala13x/libxutils) - 簡單而強大的跨平臺 C 庫，提供資料結構、演算法等功能。[MIT]
* [Loki](https://loki-lib.sourceforge.net/) - 一個設計類 C++ 庫，靈活實現常見設計模式和慣用法。[MIT]
* [micron.cpp](https://github.com/rfgplk/micron.cpp) - 純 C++ 實現（並重新設計）的 libc 和標準庫。[Boost/MIT]
* [MiLi](https://github.com/MariadeAnton/MiLi) - 極簡的僅標頭檔案 C++ 庫。[Boost]
* [OpenFrameworks](https://github.com/openframeworks/openFrameworks) - 用於 C++ 創意程式設計的跨平臺開源工具包。[MIT] [website](https://www.openframeworks.cc/)
* [PhotonLibOS](https://github.com/alibaba/PhotonLibOS) - 全面的 C++ 框架，具備高效使用者態執行緒（工作竊取協程）、I/O、網路、RPC、HTTP 等功能，並在阿里巴巴廣泛使用。相容 C++ 14/17/20/23、Linux、MacOS、x86-64、ARM64、gcc 和 clang。[Apache2] [website](https://photonlibos.github.io/)
* [Qt](https://github.com/qt) :zap: - 跨平臺應用和 UI 框架。[GPL/LGPL/Proprietary] [website](https://www.qt.io)
* [Reason](https://code.google.com/p/reason/) - 跨平臺框架，旨在讓需要 C++ 效能和能力的開發者也能享受 Java、.Net 或 Python 的易用性。[GPL2]
* [ROOT](https://root.cern.ch/) - 一組物件導向框架，提供高效處理和分析大量資料所需的全部功能。由 CERN 使用。[LGPL]
* [rpp](https://github.com/TheNumbat/rpp) - 受 Rust 啟發的極簡 C++20 STL 替代品。[MIT]
* [SaneCppLibraries](https://github.com/Pagghiu/SaneCppLibraries) - 一組面向 macOS、Windows 和 Linux 的 C++ 平臺抽象庫。[MIT] [website](https://pagghiu.github.io/SaneCppLibraries/)
* [Seastar](https://github.com/scylladb/seastar) - 面向現代硬體高效能伺服器應用的先進開源 C++ 框架。[Apache-2.0 License] [seastar.io](https://seastar.io/)
* [sfl library](https://github.com/slavenf/sfl-library) - 僅標頭檔案的 C++11 庫，提供若干新穎或鮮為人知的容器，其中一些可用於 C++20 常量表示式。[zlib]
* [Siv3D](https://github.com/Siv3D/OpenSiv3D) - 面向創意程式設計的 C++20 框架（2D/3D 遊戲、媒體藝術、視覺化工具和模擬器）。[MIT] [website](https://siv3d.github.io/)
* [STLport](https://www.stlport.org/) - STL 的典範實現。[Free]
* [STXXL](https://stxxl.sourceforge.net/) - 面向超大型資料集的標準模板庫。[Boost]
* [tbox](https://github.com/tboox/tbox) - 類似 glib 的多平臺 C 庫。[Apache2] [website](https://tboox.org/)
* [Ultimate++](https://www.ultimatepp.org/) - C++ 跨平臺快速應用開發框架。[BSD]
* [Windows Template Library](https://sourceforge.net/projects/wtl/) - 用於開發 Windows 應用和 UI 元件的 C++ 庫。[Public]
* [WUI](https://github.com/intent-garden/wui) - WUI（視窗使用者介面庫）是一個用於使用 C++17+ 建立圖形使用者介面的跨平臺庫。[Boost][website](https://libwui.org)
* [xtd](https://github.com/gammasoft71/xtd) - 現代 C++20 框架，可在 Windows、macOS、Linux、iOS、Android、FreeBSD 和 Haiku 上建立控制檯（CLI）、窗體（GUI）及單元測試（xUnit）應用。[MIT]
* [Yomm2](https://github.com/jll63/yomm2) - 快速、正交、開放的多方法實現。取代了 [Yomm11](https://github.com/jll63/yomm11)。[Boost]
* [YUP!](https://github.com/kunitoki/yup) - 針對實時音訊和 GPU 原生創意軟體最佳化的現代框架。[ISC]

## 人工智慧

* [ANNetGPGPU](https://github.com/ANNetGPGPU/ANNetGPGPU) - 基於 GPU（CUDA）的人工神經網路庫。[LGPL]
* [btsk](https://github.com/aigamedev/btsk) - 遊戲行為樹入門套件。[zlib]
* [cpp-mcp](https://github.com/hkr04/cpp-mcp) - 輕量級 C++ MCP（模型上下文協議）SDK。[MIT]
* [Evolving Objects](https://eodev.sourceforge.net/) - 基於模板的 ANSI-C++ 演化計算庫，可幫助你極快地編寫自己的隨機最佳化演算法。[LGPL]
* [fastmcpp](https://github.com/0xeb/fastmcpp) - fastmcp Python 庫的 C++ 移植版。[Apache2]
* [frugally-deep](https://github.com/Dobiasd/frugally-deep) - 用於在 C++ 中使用 Keras 模型的僅標頭檔案庫。[MIT]
* [Genann](https://github.com/codeplea/genann) - 簡單的 C 神經網路庫。[zlib]
* [MXNet](https://github.com/apache/incubator-mxnet) - 輕量、可移植、靈活的分散式/移動端深度學習框架，具備動態、可變更感知的資料流依賴排程器；支援 Python、R、Julia、Scala、Go、JavaScript 等。[website](https://mxnet.apache.org)
* [PyTorch](https://github.com/pytorch/pytorch) - Python 張量和動態神經網路，並提供強大的 GPU 加速。[website](https://pytorch.org)
* [flashlight](https://github.com/flashlight/flashlight) - 完全使用 C++ 編寫的快速、靈活機器學習庫。[BSD]
* [Recast/Detour](https://github.com/recastnavigation/recastnavigation) - （3D）導航網格生成器和尋路器，主要用於遊戲。[zlib]
* [TensorFlow](https://github.com/tensorflow/tensorflow) - 用於藉助資料流圖進行數值計算的開源軟體庫。[Apache]
* [Txeo](https://github.com/rdabra/txeo) - TensorFlow 的現代 C++ 封裝。[Apache]
* [oneDNN](https://github.com/oneapi-src/oneDNN) - 面向深度學習應用的開源跨平臺效能庫。[Apache] [website](https://01.org/onednn)
* [CNTK](https://github.com/Microsoft/CNTK) - Microsoft Cognitive Toolkit（CNTK），開源深度學習工具包。[Boost]
* [tiny-dnn](https://github.com/tiny-dnn/tiny-dnn) - 採用 C++11、僅標頭檔案且無依賴的深度學習框架。[BSD]
* [Veles](https://github.com/Samsung/veles) - 用於快速開發深度學習應用的分散式平臺。[Apache]
* [Kaldi](https://github.com/kaldi-asr/kaldi) - 語音識別工具包。[Apache]

## 非同步事件迴圈

* [Asio](https://github.com/chriskohlhoff/asio/) - 跨平臺 C++ 網路和底層 I/O 程式設計庫，採用現代 C++ 方法，為開發者提供一致的非同步模型。[Boost] [website](https://think-async.com/)
* [Boost.Asio](https://github.com/boostorg/asio) - 跨平臺 C++ 網路和底層 I/O 程式設計庫。[Boost] [website](https://boost.org/libs/asio)
* [C++ Actor Framework](https://github.com/actor-framework/actor-framework) - Actor 模型的開源 C++ 實現。[BSD-3-Clause] [website](https://actor-framework.org/)
* [Ichor](https://github.com/volt-software/ichor) - 專注於執行緒安全並提供依賴注入的事件佇列。[MIT]
* [libev](https://libev.schmorp.de/) - 功能全面、高效能的事件迴圈，鬆散地仿照 libevent，但沒有其限制和缺陷。[BSD and GPL]
* [libevent](https://libevent.org/) - 事件通知庫。[BSD]
* [libhv](https://github.com/ithewei/libhv) - 跨平臺事件迴圈庫。[BSD]
* [libuv](https://github.com/libuv/libuv) - 跨平臺非同步 I/O。[BSD]
* [promise-cpp](https://github.com/xhawk18/promise-cpp) - 實現 Promise/A+ 標準的僅標頭檔案庫。[Anti-996]
* [uvw](https://github.com/skypjack/uvw) - libuv 的 C++ 封裝。[MIT]
* [uv-cpp](https://github.com/wlgq2/uv-cpp) - 基於 C++11 的簡易介面、高效能網路庫。[MIT]

## 音訊
*音訊、聲音、音樂和數字化語音庫*

* [Amplitude Audio SDK](https://github.com/SparkyStudios/AmplitudeAudioSDK) - 面向遊戲需求設計的跨平臺音訊引擎。[Apache-2.0] [website](https://amplitudeaudiosdk.com)
* [Aubio](https://github.com/aubio/aubio) - 音訊與音樂分析庫。[GPL-3.0] [website](https://aubio.org/)
* [AudioFile](https://github.com/adamstark/AudioFile) - 用於讀取和寫入音訊檔案的簡單 C++ 庫。[MIT]
* [audioFlux](https://github.com/libAudioFlux/audioFlux) - 用於音訊和音樂分析及特徵提取的 C 庫。[MIT]
* [dr_libs](https://github.com/mackron/dr_libs) - 面向 C 和 C++ 的單檔案音訊解碼庫。[Unlicense]
* [FMOD](https://www.fmod.org/) - 易於使用的跨平臺音訊引擎和遊戲音訊內容創作工具。[Free for non-commercial/Commercial]
* [KFR](https://www.kfrlib.com/) - 快速、現代的 C++ DSP 框架，提供 FFT、FIR/IIR 濾波器和取樣率轉換。[GPL/Proprietary]
* [LAME](https://lame.sourceforge.io/using.php) - 高品質 MPEG Audio Layer III（MP3）編碼器。[LGPL]
* [libsndfile](https://github.com/erikd/libsndfile/) - 帶有 C++ 封裝的 C 庫，可透過統一的標準庫介面讀寫包含取樣聲音的檔案。[LGPL-2.1] [website](https://www.mega-nerd.com/libsndfile/)
* [libsoundio](https://github.com/andrewrk/libsoundio) - 用於跨平臺實時音訊輸入和輸出的 C 庫。[MIT] [website](https://libsound.io/)
* [Maximilian](https://github.com/micknoise/Maximilian) - C++ 音訊與音樂 DSP 庫。[MIT]
* [OpenAL](https://www.openal.org/) - Open Audio Library，跨平臺音訊 API。[BSD/LGPL/Proprietary]
* [miniaudio](https://github.com/mackron/miniaudio) - 單檔案音訊播放與採集庫。[Unlicense] [website](https://miniaud.io/)
* [ni-media](https://github.com/NativeInstruments/ni-media) - 用於讀取和寫入音訊檔案的 C++ 庫。[MIT]
* [Opus](https://opus-codec.org/) - 完全開放、免版稅且用途廣泛的音訊編解碼器。[BSD]
* [PortAudio](https://www.portaudio.com/) - 免費、跨平臺、開源的音訊 I/O 庫。[MIT]
* [rnnoise](https://github.com/xiph/rnnoise) - 用於音訊降噪的迴圈神經網路。[BSD-3-Clause]
* [SELA](https://github.com/sahaRatul/sela) - 簡易無損音訊。[MIT]
* [SoLoud](https://github.com/jarikomppa/soloud) - 簡單易用、可移植的遊戲音訊引擎。[zlib]
* [Speex](https://www.speex.org/) - 免費語音編解碼器，現已被 Opus 取代。[BSD]
* [Tonic](https://github.com/TonicAudio/Tonic) - 簡單高效的 C++ 音訊合成庫。[Unlicense]
* [Vorbis](https://xiph.org/vorbis/) - Ogg Vorbis 是完全開放、非專有、無專利且免版稅的通用壓縮音訊格式。[BSD]
* [minimp3](https://github.com/lieff/minimp3) - 公有領域、僅標頭檔案的 MP3 解碼器，採用潔淨室實現。[CC0]
* [Verovio](https://github.com/rism-ch/verovio) - 快速、輕量的樂譜雕版庫。[LGPL] [website](https://www.verovio.org)
* [Wav2Letter++](https://github.com/facebookresearch/wav2letter/) - 公有領域的快速開源語音處理工具包，完全使用 C++ 編寫，並利用 ArrayFire 張量庫和 flashlight 機器學習庫實現最高效率。[BSD]
* [PocketSphinx](https://github.com/cmusphinx/pocketsphinx) - 輕量級語音識別引擎。[BSD-2-Clause] [website](https://cmusphinx.github.io/)

## 生物學
*生物資訊學、基因組學、生物技術*

* [BioC++](https://biocpp.sourceforge.net/) - 用於生物資訊學的 C++ 計算庫。[BSD]
* [Chaste](https://www.cs.ox.ac.uk/chaste/) - 用於計算模擬生理學和生物學數學模型的開源 C++ 庫。[BSD]
* [libsequence](https://molpopgen.github.io/libsequence/) - 用於表示和分析群體遺傳學資料的 C++ 庫。[GPL]
* [SeqAn](https://www.seqan.de/) - 用於序列分析的演算法和資料結構，重點面向生物資料。[BSD/3-clause]
* [Vcflib](https://github.com/ekg/vcflib) - 用於解析和處理 VCF 檔案的 C++ 庫。[MIT]
* [Wham](https://github.com/zeeev/wham) - 透過直接對 BAM 檔案應用關聯檢驗來識別基因組中的結構變異（SV）。[MIT]
* [htslib](https://github.com/samtools/htslib) - 用於讀寫高通量測序資料的 C 庫。[MIT/BSD] [website](https://www.htslib.org/)

## BitTorrent

* [jech/dht](https://github.com/jech/dht) - C 語言 BitTorrent DHT 庫。[MIT]
* [libtorrent](https://github.com/arvidn/libtorrent) (a.k.a. libtorrent-rasterbar) - 高效且功能完備的 C++ BitTorrent 實現。[BSD]
* [LibTorrent](https://github.com/rakshasa/libtorrent) (a.k.a. libtorrent-rakshasa) - BitTorrent 庫。[GPL]
* [libutp](https://github.com/bittorrent/libutp) - uTorrent 傳輸協議庫。[MIT]

## 化學
*化學、量子化學、固態化學/物理、地球化學、生物化學*

* [d-SEAMS](https://github.com/d-SEAMS/seams-core) - 使用 C++、Lua 和 Nix 的分子動力學軌跡分析引擎。名稱是 Deferred Structural Elucidation Analysis for Molecular Simulations（分子模擬延遲結構解析分析）的縮寫。[GPL] [website](https://dseams.info)
* [gromacs](https://github.com/gromacs/gromacs) - 基於訊息傳遞的並行分子動力學實現。[GPL] [website](https://www.gromacs.org)
* [Reaktoro](https://github.com/reaktoro/reaktoro) - 使用 C++ 和 Python 對化學反應系統建模的計算框架。[LGPL] [website](https://reaktoro.org)
* [LAMMPS](https://github.com/lammps/lammps) - 專注於材料建模的經典分子動力學程式。其名稱是 Large-scale Atomic/Molecular Massively Parallel Simulator（大規模原子/分子並行模擬器）的縮寫。[GPL] [website](https://lammps.sandia.gov/)
* [MADNESS](https://github.com/m-a-d-n-e-s-s/madness) - 科學模擬用多解析度自適應數值環境。[GPL] [website](https://github.com/m-a-d-n-e-s-s/madness)
* [MPQC](https://github.com/ValeevGroup/mpqc) - 大規模並行量子化學程式 MPQC 使用定態薛定諤方程從頭計算原子和分子的性質。[GPL] [website](https://mpqc.org/)
* [Psi](https://github.com/psi4/psi4) - 從頭算計算化學軟體包。[GPL] [website](https://psicode.org/)

## 命令列介面（CLI）
*控制檯/終端使用者介面、命令列介面*

 * [Argh!](https://github.com/adishavit/argh) - 極簡、無煩惱的僅標頭檔案引數處理器。[BSD]
 * [argparse](https://github.com/p-ranav/argparse) - 現代 C++ 引數解析器。[MIT]
 * [args](https://github.com/taywee/args) - 簡單的僅標頭檔案 C++ 引數解析庫。[MIT]
 * [Argy](https://github.com/mshenoda/argy) - 現代 C++ 命令列引數解析庫——簡單、直觀、僅標頭檔案且零依賴。[MIT]
 * [barkeep](https://github.com/oir/barkeep) - 用於顯示非同步動畫、計數器和進度條的小型 C++ 標頭檔案。[Apache-2.0] [website](https://oir.github.io/barkeep/)
 * [Boost.Program_options](https://github.com/boostorg/program_options) - 透過命令列、配置檔案等常見方式獲取程式選項的庫。[Boost] [website](https://boost.org/libs/program_options)
 * [cli](https://github.com/daniele77/cli) - 用於互動式命令列介面（Cisco 風格）的跨平臺僅標頭檔案 C++14 庫。[Boost]
 * [CLI11](https://github.com/CLIUtils/CLI11) - 用於簡單及高階 CLI 解析的僅標頭檔案單檔案或多檔案 C++11 庫。[BSD]
 * [clipp](https://github.com/muellan/clipp) - 包含在單個標頭檔案中的 C++11/14/17 命令列引數處理庫，易用、強大且表達力豐富。[MIT]
 * [cpp-terminal](https://github.com/jupyter-xeus/cpp-terminal) - 用於編寫多平臺終端應用的小型僅標頭檔案 C++ 庫。[MIT]
 * [Crossline](https://github.com/jcwangxp/Crossline) - 小巧、自包含、零配置、採用 MIT 許可的跨平臺 readline 和 libedit 替代品。[MIT]
 * [Ctrl+C](https://github.com/evgenykislov/ctrl-c) - 用於在自定義函式中處理 Ctrl+C 事件的跨平臺 C++11 庫。[MIT]
 * [cxxopts](https://github.com/jarro2783/cxxopts) - 輕量級 C++ 命令列選項解析器。[MIT]
 * [docopt.cpp](https://github.com/docopt/docopt.cpp) - 根據文件字串生成選項解析器的庫。[MIT/Boost]
 * [FINAL CUT](https://github.com/gansm/finalcut) - 用於建立帶文字控制元件的終端應用的庫。[LGPL]
 * [FTXUI](https://github.com/ArthurSonzogni/FTXUI) - C++ 函式式終端使用者介面。[MIT]
 * [gflags](https://gflags.github.io/gflags/) - C++ 命令列標誌模組。[BSD]
 * [imtui](https://github.com/ggerganov/imtui) - 即時模式文字使用者介面。[MIT]
 * [indicators](https://github.com/p-ranav/indicators/) - 現代 C++ 活動指示器。[MIT]
 * [linenoise](https://github.com/antirez/linenoise) - 小巧、自包含的 readline 和 libedit 替代品。[BSD-2-Clause]
 * [linenoise-ng](https://github.com/arangodb/linenoise-ng) - 面向 Linux、Windows 和 MacOS 的小型可移植 GNU readline 替代品，支援處理 UTF-8 字元。[BSD]
 * [Lyra](https://github.com/bfgroup/Lyra) - 易用、可組合的 C++11 及更高版本命令列解析器。[Boost]
 * [Ncurses](https://invisible-island.net/ncurses/) - 終端使用者介面。[MIT]
 * [FINAL CUT](https://github.com/gansm/finalcut) - 終端使用者介面，是 Ncurses 的現代替代品。[LGPLv3+]
 * [oof](https://github.com/s9w/oof) - 便捷、高效能地控制控制檯輸出的 RGB 顏色和位置。[MIT]
 * [PDCurses](https://github.com/wmcbrine/PDCurses) - 公有領域 curses 庫，提供原始碼和預編譯庫。[PublicDomain]
 * [popl](https://github.com/badaix/popl) - 面向 C++11 及更高版本、用於命令列引數和 ini 檔案解析的單標頭檔案模板庫。[MIT]
 * [replxx](https://github.com/AmokHuginnsson/replxx) - readline 和 libedit 的替代品，支援 UTF-8、語法高亮和提示，可在 Unix 與 Windows 上執行。[BSD]
 * [tabulate](https://github.com/p-ranav/tabulate) - 現代 C++ 表格生成器。[MIT]
 * [TCLAP](https://tclap.sourceforge.net) - 成熟、穩定且功能豐富的庫，用於在 ANSI C++ 中定義和訪問命令列引數。[MIT]
 * [termbox](https://github.com/nsf/termbox) - 用於編寫文字使用者介面的 C 庫。[MIT]
 * [TermOx](https://github.com/a-n-t-h-o-n-y/TermOx) - C++17 終端使用者介面（TUI）庫。[MIT]
 * [tuibox](https://github.com/Cubified/tuibox) - 單標頭檔案終端 UI（TUI）庫，可在命令列中建立由滑鼠驅動的互動式應用。[MIT]
 * [Ginseng](https://github.com/chewax/Ginseng) - C++ 命令列引數解析器。[MIT]

## 壓縮
*壓縮和歸檔庫*

* [bit7z](https://github.com/rikyoz/bit7z) - 提供簡潔介面以呼叫 7-zip 共享庫的 C++ 靜態庫。[MPL2]
* [Brotli](https://github.com/google/brotli) - Brotli 壓縮格式，由 Google 開發。[MIT]
* [bzip2](https://www.bzip.org/) - 免費、無專利的高品質資料壓縮器。[BSD]
* [bzip3](https://github.com/kspalaiologos/bzip3) - 更出色、更強大的 BZip2 精神繼承者。[LGPL]
* [FastLZ](https://github.com/ariya/FastLZ) - 小巧、可移植的位元組對齊 LZ77 壓縮。[MIT]
* [FiniteStateEntropy](https://github.com/Cyan4973/FiniteStateEntropy) - 新一代熵編碼器：Finite State Entropy 和 Huff0。
* [FSST](https://github.com/cwida/fsst) - 高效的隨機訪問字串壓縮。[MIT]
* [heatshrink](https://github.com/atomicobject/heatshrink) - 面向嵌入式/實時系統的資料壓縮庫。[ISC]
* [Kanzi](https://github.com/flanglet/kanzi-cpp) - 使用 C++ 實現的現代化、模組化、可移植且高效的無損資料壓縮器。[Apache-2.0]
* [KArchive](https://api.kde.org/karchive-index.html) - 用於建立、讀取、寫入和處理 zip、tar 等檔案歸檔的庫。它還透過 QIODevice 子類使用 gzip 等格式透明地壓縮和解壓資料。[LGPL]
* [libarchive](https://github.com/libarchive/libarchive) - 多格式歸檔與壓縮庫。[New BSD] [website](https://www.libarchive.org/)
* [LZ4](https://github.com/lz4/lz4) - 極快的壓縮演算法。[BSD] [website](https://www.lz4.org/)
* [LZAV](https://github.com/avaneev/lzav) - 快速記憶體資料壓縮演算法。[MIT]
* [LZFSE](https://github.com/lzfse/lzfse) - LZFSE 壓縮庫和命令列工具，由 Apple 開發。
* [LZHAM](https://code.google.com/p/lzham/) - 無損資料壓縮庫，壓縮率與 LZMA 相近，但解壓速度快得多。[BSD]
* [LZMA](https://sourceforge.net/projects/sevenzip/files/7-Zip) :zap: - 7z 格式的預設通用壓縮方法。[PublicDomain] [website](https://www.7-zip.org)
* [LZMAT](https://github.com/nemequ/lzmat) - 極快的實時無損資料壓縮庫。[GPL]
* [miniz](https://github.com/richgel999/miniz) - 單個 C 原始檔實現的 Deflate/Inflate 壓縮庫，提供相容 zlib 的 API、ZIP 歸檔讀寫和 PNG 寫入功能。[MIT]
* [Minizip](https://github.com/nmoinvaz/minizip) - 修復了最新錯誤的 Zlib，支援 PKWARE 磁碟跨區、AES 加密和 I/O 緩衝。[zlib]
* [minizip-ng](https://github.com/zlib-ng/minizip-ng) - zlib 發行版中常見 ZIP 處理庫的分支。[zlib]
* [misa77](https://github.com/welcome-to-the-sunny-side/misa77) - 解壓速度驚人且壓縮率良好。[MIT]
* [OpenZL](https://github.com/facebook/openzl) - 新穎的資料壓縮框架。[BSD] [website](https://openzl.org/)
* [PhysicsFS](https://icculus.org/physfs/) - 提供對各類歸檔檔案抽象訪問的庫。面向影片遊戲，其設計在一定程度上受到 Quake 3 檔案子系統的啟發。[zlib]
* [Rapidgzip](https://github.com/mxmlnkn/rapidgzip) - 面向現代多核機器的 Gzip 解壓和隨機訪問工具。[Apache-2/MIT]
* [smaz](https://github.com/antirez/smaz) - 短字串壓縮庫。[BSD]
* [Snappy](https://google.github.io/snappy/) - 快速壓縮/解壓縮工具。[BSD]
* [ZLib](https://zlib.net/) - 非常緊湊的資料流壓縮庫。[zlib]
* [zlib-ng](https://github.com/zlib-ng/zlib-ng) - 面向“下一代”系統的 zlib，可直接替換，幷包含重要最佳化。[zlib]
* [zstd](https://github.com/facebook/zstd) - Zstandard，快速實時壓縮演算法，由 Facebook 開發。[BSD]
* [ZXC](https://github.com/hellobertrand/zxc) - 高效能非對稱無失真壓縮。[BSD-3-Clause]
* [ZZIPlib](https://zziplib.sourceforge.net/) - 提供 ZIP 歸檔的讀取訪問。[MPL/LGPL]
* [cmix](https://github.com/byronknoll/cmix) - 以速度為代價、追求最高壓縮率的無損資料壓縮程式。[GPL-3.0]
* [LZSSE-SIMDe](https://github.com/nemequ/LZSSE-SIMDe) - 可移植的 LZSSE 壓縮 SIMD 實現。[BSD-2-Clause]
* [Zopfli](https://github.com/google/zopfli) - 壓縮效果極佳但速度較慢的 deflate/zlib 壓縮庫。[Apache-2.0]

## 並行處理
*併發與多執行緒*

* [alpaka](https://github.com/ComputationalRadiationPhysics/alpaka) - 用於並行核心加速的抽象庫。[LGPLv3+]
* [ArrayFire](https://github.com/arrayfire/arrayfire) - 通用 GPU 庫。[BSD]
* [Async++](https://github.com/Amanieu/asyncplusplus) - 面向 C++11 的輕量級併發框架，受 Microsoft PPL 庫和 N3428 C++ 標準提案啟發。[MIT]
* [atomic_queue](https://github.com/max0x7ba/atomic_queue) - 基於迴圈緩衝區和 std::atomic 的 C++14 多生產者多消費者無鎖佇列。[MIT]
* [Boost.Compute](https://github.com/boostorg/compute) - 用於 OpenCL 的 C++ GPU 計算庫。[Boost] [website](https://boost.org/libs/compute)
* [Bolt](https://github.com/HSA-Libraries/Bolt) - 面向 GPU 最佳化的 C++ 模板庫。[Apache2]
* [BS::thread_pool](https://github.com/bshoshany/thread-pool) - 快速、輕量、易用的 C++17 執行緒池庫。[MIT]
* [Channel](https://github.com/andreiavrammsd/cpp-channel) - 用於線上程間共享資料的執行緒安全容器。[MIT]
* [ck](https://github.com/concurrencykit/ck) - 併發原語、安全記憶體回收機制和非阻塞資料結構。[BSD]
* [concurrentqueue](https://github.com/cameron314/concurrentqueue) - 面向 C++11 的快速多生產者、多消費者無鎖併發佇列。[BSD,Boost]
* [Coros](https://github.com/mtmucha/coros) - 易用且快速的任務並行庫，使用協程實現。[BSL-1.0]
* [CUB](https://github.com/NVlabs/cub) - CUB 為 CUDA 程式設計模型的各個層次提供先進、可複用的軟體元件。[New BSD]
* [cuda-api-wrappers](https://github.com/eyalroz/cuda-api-wrappers) - 輕量的現代 C++ 封裝，用於 CUDA GPU 程式設計執行時 API。[BSD]
* [cupla](https://github.com/ComputationalRadiationPhysics/cupla) - 透過 Alpaka 在 OpenMP、Threads、TBB 等後端上執行 CUDA/C++ 的 C++ API。[LGPLv3+]
* [C++React](https://github.com/schlangster/cpp.react) - 面向 C++11 的響應式程式設計庫。[Boost]
* [dispenso](https://github.com/facebookincubator/dispenso) - 高效能 C++ 並行程式設計庫，提供執行緒池、並行 for 迴圈、future、任務圖和併發容器。[MIT]
* [FiberTaskingLib](https://github.com/RichieSams/FiberTaskingLib) - 基於任務的多執行緒庫，支援具有任意依賴關係的任務圖。[Apache]
* [HPX](https://github.com/STEllAR-GROUP/hpx/) - 通用 C++ 執行時系統，適用於任意規模的並行和分散式應用。[Boost]
* [Intel Games Task Scheduler](https://github.com/GameTechDev/GTS-GamesTaskScheduler) - 面向遊戲開發者需求設計的任務排程框架。[MIT]
* [Intel Parallel STL](https://github.com/intel/parallelstl) - Intel® 面向 C++11 及更高版本的 C++17 STL 實現。[Apache2]
* [Intel TBB](https://www.threadingbuildingblocks.org/) - Intel® Threading Building Blocks。[Apache2]
* [junction](https://github.com/preshing/junction) - C++ 併發資料結構庫。[BSD]
* [Kokkos](https://github.com/kokkos/kokkos) - 可移植高效能程式設計模型，用於並行執行和記憶體抽象。[BSD]
* [libcds](https://github.com/khizmax/libcds) - C++ 併發資料結構庫。[BSD]
* [Libclsph](https://github.com/libclsph/libclsph) - 基於 OpenCL、由 GPU 加速的 SPH 流體模擬庫。[MIT]
* [libdill](https://github.com/sustrik/libdill/) - 在 C 中引入結構化併發。[MIT]
* [libdispatch](https://github.com/apple/swift-corelibs-libdispatch) - Apple Inc. 開發的 Grand Central Dispatch（GCD）是一種基於執行緒池模式的任務並行技術。libdispatch 是提供 GCD 服務實現的庫。[Apache-2.0] [website](https://apple.github.io/swift-corelibs-libdispatch/)
* [libfork](https://github.com/ConorWilliams/libfork) - 基於 C++20 協程構建的前沿任務庫，支援無鎖、無等待和延續竊取。[MPL-2.0] [website](https://conorwilliams.github.io/libfork/)
* [libmill](https://github.com/sustrik/libmill/) - 在 C 中引入 Go 風格併發。[MIT]
* [marl](https://github.com/google/marl) - 使用 C++11 編寫的混合執行緒/纖程任務排程器。[Apache-2.0]
* [moderngpu](https://github.com/moderngpu/moderngpu) - 面向 GPU 通用計算的生產力庫，是為 CUDA 編寫的僅標頭檔案 C++ 庫。其獨特價值在於提供加速原語以解決不規則並行問題。[FreeBSD & Copyright, Sean Baxter]
* [NCCL](https://github.com/NVIDIA/nccl) - 針對多 GPU 集合通訊最佳化的原語。[BSD]
* [Neco](https://github.com/tidwall/neco) - C 併發庫（協程）。[MIT]
* [OpenCL](https://www.khronos.org/opencl/) - 異構系統並行程式設計的開放標準。
* [OpenMP](https://openmp.org/) - OpenMP API。
* [rotor](https://github.com/basiliscos/cpp-rotor) - 適用於事件迴圈的 C++ Actor 微型框架。[MIT]
* [SObjectizer](https://github.com/Stiffstream/sobjectizer) - 在一個相當小巧的 C++ 框架中實現 Actor、釋出-訂閱和 CSP 模型。[BSD-3-Clause]
* [Quantum](https://github.com/bloomberg/quantum) - 基於 [Boost.Coroutine2](https://boost.org/libs/coroutine2) 構建的強大 C++ 協程分發框架。
* [RaftLib](https://raftlib.io/) - RaftLib C++ 庫，透過類似 C++ iostream 的運算子實現流式/資料流併發。[Apache2]
* [readerwriterqueue](https://github.com/cameron314/readerwriterqueue) - 快速的 C++ 單生產者、單消費者無鎖佇列。[BSD]
* [stdgpu](https://github.com/stotko/stdgpu) - GPU 上高效的類 STL 資料結構。[Apache2]
* [Taskflow](https://github.com/taskflow/taskflow) - 通用並行與異構任務程式設計系統。（原名 Cpp-Taskflow）[MIT]
* [ThreadPool](https://github.com/progschj/ThreadPool) - 簡單的 C++11 執行緒池實現。[zlib]
* [Thrust](https://developer.nvidia.com/thrust) - 類似 C++ 標準模板庫（STL）的並行演算法庫。[Apache2]
* [TooManyCooks](https://github.com/tzcnt/TooManyCooks/) - 高效能 C++20 協程框架，具有高階硬體檢測功能。[BSL-1.0]
* [transwarp](https://github.com/bloomen/transwarp) - 用於任務併發的僅標頭檔案 C++ 庫。[MIT]
* [VexCL](https://github.com/ddemidov/vexcl) - 面向 OpenCL/CUDA 的 C++ 向量表示式模板庫。[MIT]
* [STAPL](https://parasol-lab.gitlab.io/stapl-home/) - 面向共享記憶體和分散式記憶體平行計算機的 C++ 並行程式設計框架。[BSD]
* [concurrencpp](https://github.com/David-Haim/concurrencpp) - 通用併發庫，囊括任務、執行器、定時器和 C++20 協程。
* [libcu++](https://github.com/NVIDIA/libcudacxx) - NVIDIA C++ 標準庫，提供 C++ 標準庫功能的異構實現。[Apache-2.0]
* [nvthreads](https://github.com/HewlettPackard/nvthreads) - 用於在 C/C++ 中啟用高效、持久執行緒的庫。[LGPL-2.1]

## 組態設定
*配置檔案、INI 檔案*

* [inifile-cpp](https://github.com/Rookfighter/inifile-cpp) - 易用的僅標頭檔案 C++ Ini 檔案解析器。[MIT]
* [inih](https://github.com/benhoyt/inih) - 簡單的 C 語言 .INI 檔案解析器，適用於嵌入式系統。[BSD-3-Clause]
* [inih](https://github.com/jtilly/inih) - [inih](https://github.com/benhoyt/inih) 的單標頭檔案 C++ 版本。[BSD-3-Clause]
* [ini-cpp](https://github.com/SSARCandy/ini-cpp) - [inih](https://github.com/benhoyt/inih) 的單標頭檔案 C++ 版本，擴充套件了便捷的讀寫介面。[BSD-3-Clause] [website](https://ssarcandy.tw/ini-cpp/index.html)
* [iniparser](https://github.com/ndevilla/iniparser) - INI 檔案解析器。[MIT]
* [inipp](https://github.com/mcmtroffaes/inipp) - 簡單的僅標頭檔案 C++ ini 解析器和生成器。[MIT]
* [libconfig](https://github.com/hyperrealm/libconfig) - 用於處理結構化配置檔案的 C、C++ 庫。[LGPL-2.1] [website](https://hyperrealm.github.io/libconfig/)
* [libconfuse](https://github.com/martinh/libconfuse) - 小型 C 配置檔案解析庫。[ISC]
* [mINI](https://github.com/metayeti/mINI) - INI 檔案讀寫器。[MIT]
* [simpleini](https://github.com/brofield/simpleini) - 跨平臺 C++ 庫，提供簡潔 API 以讀寫 INI 風格配置檔案。[MIT]
* [toml++](https://github.com/marzer/tomlplusplus) - 面向 C++17 及更高版本的僅標頭檔案 TOML 解析器和序列化器。[MIT] [website](https://marzer.github.io/tomlplusplus/)
* [toml11](https://github.com/ToruNiina/toml11) - 僅依賴 C++ 標準庫的 C++11（及更高版本）僅標頭檔案 TOML 解析器/編碼器。[MIT]

## 容器

* [CRoaring](https://github.com/RoaringBitmap/CRoaring) - C（及 C++）中的 Roaring 點陣圖，並經過 SIMD 最佳化。[Apache-2.0]
* [dynamic_bitset](https://github.com/pinam45/dynamic_bitset) - Simple Useful Libraries：C++17/20 僅標頭檔案動態位集。[MIT] [website](https://pinam45.github.io/dynamic_bitset/)
* [fixed-containers](https://github.com/teslamotors/fixed-containers) - 提供固定容量 constexpr 容器的 C++20 僅標頭檔案庫。[MIT]
* [flat_hash_map](https://github.com/skarupke/flat_hash_map) - 使用斐波那契雜湊的超快速扁平雜湊表。
* [frozen](https://github.com/serge-sans-paille/frozen) - 面向 C++14 使用者、僅標頭檔案且支援 constexpr 的 gperf 替代品。[Apache-2.0]
* [Hashmaps](https://github.com/goossaert/hashmap) - C++ 開放定址雜湊表演算法實現。[MIT]
* [hat-trie](https://github.com/Tessil/hat-trie) - 快速且節省記憶體的 HAT-trie C++ 實現。[MIT]
* [Hopscotch map](https://github.com/Tessil/hopscotch-map) - 快速的僅標頭檔案雜湊對映，使用 Hopscotch 雜湊解決衝突。[MIT]
* [librb](https://github.com/mlyszczek/librb) - C 語言環形（迴圈）緩衝區實現，充分支援執行緒安全併發讀寫，必要時還可自動擴容。[BSD] [website](https://librb.bofc.pl/)
* [LSHBOX](https://github.com/RSIA-LIESMARS-WHU/LSHBOX) - C++ 區域性敏感雜湊（LSH）工具箱，提供多種常見 LSH 演算法，並支援 Python 和 MATLAB。[GPL]
* [marisa-trie](https://github.com/s-yata/marisa-trie) - 遞迴實現儲存的匹配演算法。[BSD-2-Clause/LGPL-2.1]
* [parallel-hashmap](https://github.com/greg7mdp/parallel-hashmap) - 一組僅標頭檔案、速度極快且節省記憶體的雜湊對映和 B 樹容器。[Apache2] [website](https://greg7mdp.github.io/parallel-hashmap/)
* [PGM-index](https://github.com/gvinciguerra/PGM-index) - 一種資料結構，可在包含數十億項的陣列中快速查詢、前驅查詢、範圍查詢和更新，所需空間比傳統索引少幾個數量級。[Apache2] [website](https://pgm.di.unipi.it)
* [plf::colony](https://github.com/mattreecebentley/plf_colony) - 無序“袋”式容器，在頻繁修改的場景下效能優於 std 容器，同時無論插入還是刪除，均能為未刪除元素保留永久指標。[zLib] [website](https://www.plflib.org/colony.htm)
* [plf::list](https://github.com/mattreecebentley/plf_list) - std::list 實現，透過移除範圍拼接來構建更利於快取的結構，從而顯著提升效能。[zLib] [website](https://www.plflib.org/list.htm)
* [plf::stack](https://github.com/mattreecebentley/plf_stack) - std::stack 容器介面卡的替代容器，在棧場景中的效能優於任何 std 容器。[zLib] [website](https://www.plflib.org/stack.htm)
* [ring_span lite](https://github.com/martinmoene/ring-span-lite) - Arthur O'Dwyer 的 ring_span（即迴圈緩衝區檢視）的簡化實現。[MIT]
* [robin-hood-hashing](https://github.com/martinus/robin-hood-hashing) - 面向 C++14、基於 Robin Hood 雜湊的快速省記憶體雜湊表。[MIT]
* [robin-map](https://github.com/Tessil/robin-map) - 使用 Robin Hood 雜湊的快速雜湊對映和雜湊集合。[MIT]
* [sparsepp](https://github.com/greg7mdp/sparsepp) - 快速且節省記憶體的 C++ 雜湊對映。[BSD 3-clause]
* [sqlitemap](https://github.com/bw-hro/sqlitemap) - 由 SQLite 支援的持久化對映。[MIT]
* [st_tree](https://github.com/erikerlandson/st_tree) - 快速靈活的 C++ 樹資料結構模板類。[Apache-2.0]
* [svector](https://github.com/martinus/svector) - 面向 C++17 及更高版本、經過 SVO 最佳化的緊湊 vector。[MIT]
* [tree.hh](https://github.com/kpeeters/tree.hh) - 類似 STL 的 C++ 僅標頭檔案樹庫。[GPL2+]
* [unordered_dense](https://github.com/martinus/unordered_dense) - 基於 Robin Hood 向後移位刪除的快速、緊湊儲存雜湊對映和雜湊集合。[MIT]
* [fifo_map](https://github.com/nlohmann/fifo_map) - 按 FIFO 順序排列的 C++ 關聯容器。[MIT]
* [ordered-map](https://github.com/Tessil/ordered-map) - 保留插入順序的 C++ 雜湊對映和雜湊集合。[MIT]

## 密碼學
*密碼學和加密庫*

* [Bcrypt](https://bcrypt.sourceforge.net/) - 跨平臺檔案加密工具。加密檔案可在所有支援的作業系統和處理器間移植。[BSD]
* [BeeCrypt](https://beecrypt.sourceforge.net/) - 可移植且快速的密碼學庫。[LGPLv2.1+]
* [BoringSSL](https://boringssl.googlesource.com/boringssl) - OpenSSL 的分支，旨在滿足 Google 的需求。[Apache2]
* [Botan](https://botan.randombit.net/) - C++ 密碼學庫。[BSD-2]
* [Crypto++](https://github.com/weidai11/cryptopp) - 免費的 C++ 密碼方案類庫。[Boost] [website](https://www.cryptopp.com/)
* [digestpp](https://github.com/kerukuro/digestpp) - C++11 僅標頭檔案訊息摘要（雜湊）庫。[PublicDomain]
* [GnuPG](https://www.gnupg.org/) - OpenPGP 標準的完整免費實現。[GPL]
* [GnuTLS](https://www.gnutls.org/) - 實現 SSL、TLS 和 DTLS 協議的安全通訊庫。[LGPL2.1]
* [Libgcrypt](https://www.gnu.org/software/libgcrypt/) - 通用密碼學庫，最初基於 GnuPG 中的程式碼。[LGPLv2.1+]
* [LibreSSL](https://www.libressl.org/) - 2014 年從 OpenSSL 分支出的免費 SSL/TLS 協議實現。[?]
* [libsodium](https://github.com/jedisct1/libsodium) - 基於 NaCl 的（可移植|可打包）密碼庫，觀點鮮明且易於使用。[ISC]
* [libhydrogen](https://github.com/jedisct1/libhydrogen) - 輕量、安全、易用的密碼庫，適用於資源受限環境。[ISC]
* [LibTomCrypt](https://github.com/libtom/libtomcrypt) - 功能相當全面、模組化且可移植的密碼學工具包。[WTFPL]
* [mbedTLS](https://github.com/ARMmbed/mbedtls) - 開源、可移植、易用、易讀且靈活的 SSL 庫，舊稱 PolarSSL。[Apache2] [website](https://tls.mbed.org/)
* [Nettle](https://www.lysator.liu.se/~nisse/nettle/) - 底層密碼學庫。[LGPL]
* [OpenSSL](https://github.com/openssl/openssl) - 穩健、達到商業級品質、功能全面的開源密碼學庫。[Apache] [website](https://www.openssl.org/)
* [retter](https://github.com/MaciejCzyzewski/retter) - 與密碼學相關的雜湊函式、密碼、工具、庫和資料集合。
* [s2n](https://github.com/awslabs/s2n) - TLS/SSL 協議實現。[Apache]
* [sha1collisiondetection](https://github.com/cr-marcstevens/sha1collisiondetection) - 用於檢測檔案中 SHA-1 碰撞的庫和命令列工具。[MIT]
* [stduuid](https://github.com/mariusbancila/stduuid) - UUID 的跨平臺 C++17 實現。[MIT]
* [Tink](https://github.com/google/tink) - 多語言、跨平臺庫，提供安全、易於正確使用且難以（更難）誤用的密碼學 API。[Apache-2.0]
* [Tiny AES in C](https://github.com/kokke/tiny-AES-c) - 小巧、可移植的 C 語言 AES128/192/256 實現。[PublicDomain]
* [tiny-ECDH-c](https://github.com/kokke/tiny-ECDH-c) - 小巧、可移植的 C 語言 ECDH 金鑰協商協議實現。[PublicDomain]
* [Themis](https://github.com/cossacklabs/themis) - 簡化資料安全的密碼庫，為移動端和伺服器平臺提供對稱與非對稱加密，以及具備前向保密性的安全套接字。[Apache2]
* [HEhub](https://github.com/primihub/HEhub) - 同態加密及其應用庫。[Apache2]
* [Qt-Secret](https://github.com/QuasarApp/Qt-Secret) - 面向 C++ 專案、基於 Qt 的簡單加密庫。[LGPL]
* [micro-ecc](https://github.com/kmackay/micro-ecc) - 面向 8 位、32 位和 64 位處理器的小型高速 ECDH 和 ECDSA 實現。[BSD-2-Clause]
* [crypto-algorithms](https://github.com/B-Con/crypto-algorithms) - 標準密碼演算法（AES、SHA 等）的基礎 C 語言實現。[PublicDomain]
* [aes-stream](https://github.com/jedisct1/aes-stream) - 快速的 C 語言 AES 流密碼。[ISC]

## CSV
*用於解析逗號分隔值（CSV）檔案的庫*

* [commata](https://github.com/furfurylic/commata) - 又一個 C++17 僅標頭檔案 CSV 解析器。[Unlicense]
* [csv2](https://github.com/p-ranav/csv2) - 現代 C++ 快速 CSV 解析器。[MIT]
* [Csv::Parser](https://github.com/ashaduri/csv-parser) - 使用 C++17 編寫的編譯期和執行期 CSV 解析器。[Zlib]
* [Fast C++ CSV Parser](https://github.com/ben-strasser/fast-cpp-csv-parser) - 用於讀取 CSV 檔案的小巧、易用且快速的僅標頭檔案庫。[BSD-3-Clause]
* [Glaze](https://github.com/stephenberry/glaze) - 高效能、支援反射的僅標頭檔案 CSV 庫。[MIT]
* [lazycsv](https://github.com/ashtum/lazycsv) - 面向現代 C++ 的快速、輕量、單標頭檔案 CSV 解析器。[MIT]
* [rapidcsv](https://github.com/d99kris/rapidcsv) - 易用的僅標頭檔案 C++ CSV 解析庫。[BSD-3-Clause]
* [ssp](https://github.com/red0124/ssp) - 快速、靈活且具有現代 C++ API 的僅標頭檔案“csv”解析器。[MIT]
* [Vince's CSV Parser](https://github.com/vincentlaucsb/csv-parser) - 快速、自包含的流式 C++17 CSV 解析器，可選支援型別轉換和統計。[MIT]
* [zsv](https://github.com/liquidaty/zsv) - 全球最快的（SIMD）CSV 解析器，帶有可擴充套件 CLI。[MIT]

## 資料庫
*資料庫庫、SQL 伺服器、ODBC 驅動和工具*

* [ClickHouse](https://github.com/ClickHouse/clickhouse-cpp) - ClickHouse DBMS 的 C++ 客戶端。[Apache2]
* [CrossDB](https://github.com/crossdb-org/crossdb) - 超高效能、輕量級的嵌入式和伺服器 OLTP 關聯式資料庫。[MPL-2.0] [website](https://crossdb.org/)
* [Doltlite](https://github.com/dolthub/doltlite) - 帶版本控制的 SQLite。[PublicDomain/Apache2]
* [DuckDB](https://duckdb.org/) - 程序內 SQL OLAP 資料庫管理系統。[MIT] [website](https://duckdb.org/)
* [hiberlite](https://github.com/paulftw/hiberlite) - 面向 sqlite3 的 C++ 物件關係對映。[BSD]
* [Hiredis](https://github.com/redis/hiredis) - Redis 資料庫的極簡 C 客戶端庫。[BSD]
* [Infinity](https://github.com/infiniflow/infinity) - 面向 LLM 應用構建的 AI 原生資料庫，提供極快的向量和全文搜尋。[Apache2]
* [Kuzu](https://github.com/kuzudb/kuzu) - 為查詢速度和可擴充套件性打造的可嵌入屬性圖資料庫管理系統，實現了 Cypher。[MIT]
* [Kvrocks](https://github.com/apache/incubator-kvrocks) - 使用 RocksDB 作為儲存引擎且相容 Redis 協議的分散式鍵值 NoSQL 資料庫。[Apache2]
* [Ladybug](https://github.com/LadybugDB/ladybug) - 為查詢速度和可擴充套件性打造的嵌入式圖資料庫。[MIT] [website](https://ladybugdb.com/)
* [LevelDB](https://github.com/google/leveldb) - Google 編寫的快速鍵值儲存庫，提供從字串鍵到字串值的有序對映。[BSD]
* [libpg_query](https://github.com/pganalyze/libpg_query) - 用於在伺服器環境之外訪問 PostgreSQL 解析器的 C 庫。[BSD-3-Clause]
* [libpqxx](https://github.com/jtv/libpqxx) - PostgreSQL 官方 C++ 客戶端 API。[BSD-3-Clause]
* [LMDB](https://www.symas.com/lmdb) - 速度極快、完全符合 ACID 語義的嵌入式鍵值儲存。[OpenLDAP]
* [LMDB++](https://github.com/bendiken/lmdbxx) - LMDB 嵌入式資料庫庫的 C++11 封裝。[PublicDomain]
* [mgclient](https://github.com/memgraph/mgclient) - C/C++ Memgraph 客戶端。[Apache2]
* [MongoDB C Driver](https://github.com/mongodb/mongo-c-driver) - MongoDB 的 C 客戶端庫。[Apache2]
* [MongoDB C++ Driver](https://github.com/mongodb/mongo-cxx-driver) - MongoDB 的 C++ 驅動。[Apache2]
* [MongoDB Libbson](https://github.com/mongodb/libbson) - BSON 實用庫。[Apache2]
* [MySQL++](https://www.tangentsoft.net/mysql++/) - MySQL C API 的 C++ 封裝。[LGPL]
* [nanodbc](https://github.com/nanodbc/nanodbc) - 原生 C ODBC API 的小型 C++ 封裝。[MIT]
* [ODB](https://www.codesynthesis.com/products/odb/) - 面向 C++ 的開源、跨平臺、跨資料庫物件關係對映（ORM）系統。[GPLv2]
* [redis3m](https://github.com/luca3m/redis3m) - hiredis 的封裝，提供簡潔的 C++ 介面，支援 sentinel 和可直接使用的模式。[Apache2]
* [Reindexer](https://github.com/Restream/reindexer) - 可嵌入的記憶體文件資料庫，提供高階查詢構建器介面。[Apache2] [website](https://reindexer.io/)
* [RocksDB](https://github.com/facebook/rocksdb) - Facebook 的高速嵌入式鍵值儲存。[BSD]
* [SimDB](https://github.com/LiveAsynchronousVisualizedArchitecture/simdb) - 高效能、共享記憶體、無鎖、跨平臺、單檔案且依賴極少的 C++11 鍵值儲存。[Apache2]
* [SlothDB](https://github.com/SouravRoy-ETL/slothdb) - 無處不在的嵌入式 SQL 資料庫：可在膝上型電腦、伺服器和瀏覽器中執行。[MIT] [website](https://slothdb.org/)
* [SOCI](https://github.com/SOCI/soci) - C++ 資料庫抽象層。[Boost]
* [Speedb](https://github.com/speedb-io/speedb) - 社群主導專案：相容 RocksDB 的高效能、可擴充套件嵌入式鍵值儲存。[Apache2]
* [sqlgen](https://github.com/getml/sqlgen) - 基於反射的 C++20 ORM 和 SQL 查詢生成器，類似 Python 的 SQLAlchemy/SQLModel 或 Rust 的 Diesel。[MIT]
* [SQLite](https://www.sqlite.org/) - 僅數百 KB 的全功能、完全嵌入式關聯式資料庫，可直接整合到專案中。[PublicDomain]
* [SQLiteC++](https://github.com/SRombauts/SQLiteCpp) - 靈巧易用的 C++ SQLite3 封裝。[MIT]
* [sqlite_modern_cpp](https://github.com/SqliteModernCpp/sqlite_modern_cpp) - SQLite 庫的 C++14 僅標頭檔案封裝。[MIT]
* [sqlite_orm](https://github.com/fnc12/sqlite_orm) - 面向現代 C++ 的輕量級 SQLite ORM 僅標頭檔案庫。[AGPL + paid MIT]
* [sqlpp11](https://github.com/rbock/sqlpp11) - 用於 C++ SQL 查詢和結果的型別安全嵌入式領域專用語言。[BSD-2-Clause]
* [sqlpp23](https://github.com/rbock/sqlpp23) - 型別安全的 C++ SQL 庫。[BSD-2-Clause]
* [TidesDB](https://github.com/tidesdb/tidesdb) - 為快閃記憶體和 RAM 最佳化設計的高效能、耐久、事務型嵌入式儲存引擎。[MPL-2.0] [website](https://tidesdb.com/)
* [TileDB](https://github.com/TileDB-Inc/TileDB) - 快速的稠密和稀疏多維陣列 DBMS。[MIT] [website](https://tiledb.io/)
* [TinyORM](https://github.com/silverqx/TinyORM) - 現代 C++ ORM 庫。[MIT] [website](https://www.tinyorm.org/)
* [UnQLite](https://github.com/symisc/unqlite) - 自包含、無伺服器、零配置的事務型 NoSQL 引擎。[BSD-2-Clause] [website](https://unqlite.symisc.net/)
* [upscaledb](https://upscaledb.com) - 內建查詢介面的嵌入式“型別化”鍵值儲存。[GPLv3]
* [TigerBeetleDB C++ client (Community)](https://github.com/kassane/tigerbeetle-cpp) - TigerBeetle 是面向關鍵任務安全性和效能設計的金融會計資料庫，旨在推動未來金融服務發展。[BSL-1.0]
* [Trilogy](https://github.com/trilogy-libraries/trilogy) - 面向 MySQL 相容資料庫伺服器的客戶端庫，注重效能、靈活性和嵌入便利性。[MIT]
* [UStore](https://github.com/unum-cloud/ustore) - 面向 BLOB、JSON 和圖資料的多模態資料庫。[Apache2]
* [Velox](https://github.com/facebookincubator/velox) - 用於最佳化查詢引擎和資料處理系統的 C++ 向量化資料庫加速庫。[Apache-2.0] [website](https://velox-lib.io/)
* [Zvec](https://github.com/alibaba/zvec) - 輕量、極速的程序內向量資料庫。[Apache2] [website](https://zvec.org/)
* [constexpr-sql](https://github.com/mkitzan/constexpr-sql) - C++17 編譯期 SQL 查詢解析器和執行器。[MIT]
* [NuDB](https://github.com/cppalliance/NuDB) - 面向 SSD 的快速追加式鍵值儲存。[Boost]

## 資料視覺化
*資料視覺化庫*

* [gplot++](https://github.com/ziotom78/gplotpp) - 與 Gnuplot 對接的跨平臺 C++ 僅標頭檔案繪相簿。[MIT]
* [matplotplusplus](https://github.com/alandefreitas/matplotplusplus) - 用於資料視覺化的 C++ 繪相簿。[MIT] [website](https://alandefreitas.github.io/matplotplusplus/)
* [mathplot](https://github.com/sebsjames/mathplot) - 基於現代 OpenGL 的 C++ 僅標頭檔案繪圖和資料視覺化庫。[Apache-2.0] [website](https://sebsjames.github.io/mathplot/)
* [Plotly++](https://github.com/jimmyorourke/plotlypp) - Plotly.js 圖形規範的 C++ 介面，用於建立互動式資料視覺化。[MIT]
* [matplotlib-cpp](https://github.com/lava/matplotlib-cpp) - Python 繪相簿 matplotlib 的 C++ 封裝。[MIT]

## 偵錯
*除錯庫、記憶體洩漏和資源洩漏檢測、單元測試*

* [Attest](https://github.com/tugglecore/attest) - 跨平臺、無堆分配的 C 測試框架，支援引數化、生命週期感知的測試和斷言，以及臨時格式化訊息。[MIT]
* [backward-cpp](https://github.com/bombela/backward-cpp) - 美觀的 C++ 堆疊跟蹤美化列印工具。[MIT]
* [Bencher](https://bencher.dev/) - 一套持續基準測試工具，旨在捕獲 CI 中的效能回退。[MIT]/[Apache2]
* [benchmark](https://github.com/google/benchmark) - Google 提供的輕量微基準測試支援庫。[Apache2]
* [Boost.Test](https://github.com/boostorg/test) - Boost 測試庫。[Boost] [website](https://boost.org/libs/test)
* [check](https://github.com/libcheck/check) - C 語言單元測試框架。[LGPL-2.1] [website](https://libcheck.github.io/check/)
* [doctest](https://github.com/onqtam/doctest) - 功能豐富且極其輕量的 C++ 單標頭檔案測試框架。[MIT]
* [Catch2](https://github.com/catchorg/Catch2) - 現代、原生 C++ 的單元測試、TDD 和 BDD 框架。[Boost]
* [Celero](https://github.com/DigitalInBlue/Celero) - C++ 基準測試框架。[Apache2]
* [cpp-dump](https://github.com/philip82148/cpp-dump) - 用於除錯的 C++ 庫，可列印任何變數，包括使用者定義型別。[MIT]
* [CppUTest](https://github.com/cpputest/cpputest) - 面向 C/C++ 的單元測試和模擬框架。[BSD-3-clause]
* [CUTE](https://cute-test.com) - 讓 C++ 單元測試更簡單。[LGPL3]
* [CMocka](https://cmocka.org/) - 支援模擬物件的 C 單元測試框架。[Apache2]
* [CppBenchmark](https://github.com/chronoxor/CppBenchmark) - C++ 效能基準測試框架，測量精度達納秒級。[MIT]
* [Cpptrace](https://github.com/jeremy-rifkin/cpptrace) - 簡單、可移植、自包含的 C++ 堆疊跟蹤庫，支援 C++11 及更高版本。[MIT]
* [CppUnit](https://www.freedesktop.org/wiki/Software/cppunit/) - JUnit 的 C++ 移植版。[LGPL2]
* [CrashCatch](https://github.com/keithpotz/CrashCatch) - C++ 單標頭檔案崩潰報告工具，可記錄堆疊跟蹤並生成 `.dmp` 和 `.txt` 崩潰轉儲。[MIT] [website](https://keithpotz.github.io/CrashCatch)
* [CTest](https://cmake.org/cmake/help/v2.8.8/ctest.html) - CMake 測試驅動程式。[BSD]
* [dbg-macro](https://github.com/sharkdp/dbg-macro) - C++ 的 dbg(…) 宏。[MIT]
* [DebugViewPP](https://github.com/CobaltFusion/DebugViewPP) - 除錯日誌檢視器。[Boost]
* [Deleaker](https://www.deleaker.com) - 用於檢測資源洩漏的工具，包括記憶體、GDI 和控制代碼洩漏。
* [FakeIt](https://github.com/eranpeer/FakeIt) - 簡單的 C++ 模擬框架。[MIT]
* [fff](https://github.com/meekrosoft/fff) - 用於建立偽造 C 函式的微型框架。[MIT]
* [Google Mock](https://github.com/google/googletest/blob/master/googlemock/README.md) - 用於編寫和使用 C++ 模擬類的庫。[BSD]
* [Google Test](https://github.com/google/googletest) - Google C++ 測試框架。[BSD]
* [Hippomocks](https://github.com/dascandy/hippomocks) - 單標頭檔案模擬框架。[LGPL-2.1]
* [IceCream-Cpp](https://github.com/renatoGarcia/icecream-cpp) - 從此不再用 cout/printf 除錯。[MIT]
* [ig-debugheap](https://github.com/deplinenoise/ig-debugheap) - 多平臺除錯堆，有助於定位記憶體錯誤。[BSD]
* [libassert](https://github.com/jeremy-rifkin/libassert) - 過度工程化程度最高的 C++ 斷言庫。[MIT]
* [libtap](https://github.com/zorgnax/libtap) - 使用 C 編寫測試。[GPL2]
* [microprofile](https://github.com/jonasmr/microprofile) - 帶網頁檢視的多平臺分析器。[Unlicense]
* [MinUnit](https://github.com/siu/minunit) - 自包含於單個標頭檔案中的極簡 C 單元測試框架。[MIT]
* [nanobench](https://github.com/martinus/nanobench) - 面向 C++11/14/17/20 的簡單、快速、準確的單標頭檔案微基準測試功能。[MIT] [website](https://nanobench.ankerl.com)
* [Nanotimer](https://github.com/mattreecebentley/plf_nanotimer) - 簡單、低開銷的跨平臺基準測試計時器類。[zLib] [website](https://www.plflib.org/nanotimer.htm)
* [Nonius](https://github.com/libnonius/nonius) - C++ 微基準測試框架。[CC]
* [Remotery](https://github.com/Celtoys/Remotery) - 單個 C 檔案實現、帶網頁檢視器的分析器。[Apache2]
* [snitch](https://github.com/cschreib/snitch) - 輕量級 C++20 測試框架。[Boost]
* [Touca](https://github.com/trytouca/trytouca) - 可自行託管的開源迴歸測試系統。[Apache2] [website](https://touca.io/)
* [UnitTest++](https://github.com/unittest-cpp/unittest-cpp) - 輕量級 C++ 單元測試框架。[MIT/X Consortium license]
* [Unity](https://github.com/ThrowTheSwitch/Unity) - 簡易 C 單元測試。[MIT]
* [utest.h](https://github.com/sheredom/utest.h) - 面向 C 和 C++ 的單標頭檔案單元測試框架。[Unlicense]
* [utl::profiler](https://github.com/DmitriBogdanov/UTL/blob/master/docs/module_profiler.md) - C++17 單標頭檔案分析器。[MIT]
* [μt](https://github.com/boost-experimental/ut) - C++20 單標頭檔案/單模組、無宏的 μ（微型）單元測試框架。[Boost]
* [VLD](https://kinddragon.github.io/vld//) - Visual Leak Detector，一款免費、穩健、開源的 Visual C++ 記憶體洩漏檢測系統。
* [heaptrack](https://github.com/KDE/heaptrack) - Linux 堆記憶體分析器。[LGPL-2.1]

## 說明文件

* [Doxide](https://github.com/lawmurray/doxide) - 現代 C++ 的現代文件工具，使用 YAML 配置並輸出 Markdown。[Apache 2.0] [website](https://doxide.org)
* [doxygen](https://github.com/doxygen/doxygen) :zap: - 根據帶註釋的 C++ 原始碼生成文件的事實標準工具。[GPL2] [website](https://www.doxygen.org)
* [doxyrest](https://github.com/vovkos/doxyrest) - 將 Doxygen XML 轉換為 Sphinx 所用 reStructuredText 的編譯器。[MIT]
* [hdoc](https://github.com/hdoc/hdoc) - 現代 C++ 文件工具。[AGPL/Proprietary] [website](https://hdoc.io)
* [Natural Docs](https://github.com/NaturalDocs/NaturalDocs) - 面向多種程式語言的開源文件生成器。[AGPL/Proprietary] [website](https://www.naturaldocs.org)
* [Sourcey](https://github.com/sourcey/sourcey) - 靜態文件生成器，支援處理 Doxygen XML，以及 OpenAPI、godoc、MCP 和 Markdown。[AGPL-3.0] [website](https://sourcey.com)
* [Sphinx](https://github.com/sphinx-doc/sphinx) - Sphinx 讓建立智慧、美觀的文件變得輕鬆。[BSD-2-Clause] [website](https://www.sphinx-doc.org)

## 數位訊號處理（DSP）
*數字訊號處理。*

* [DSPFilters](https://github.com/vinniefalco/DSPFilters) - 一組實用的 C++ 數字訊號處理類。[MIT]
* [fCWT](https://github.com/fastlib/fCWT) - 快速連續小波變換（fCWT）庫，可快速計算 CWT。[Apache-2.0]
* [FFTW](https://www.fftw.org/) - 用於計算一維或多維 DFT 的 C 庫。[GPL]
* [iir1](https://github.com/berndporr/iir1) - IIR 實時 C++ 濾波器庫。[MIT]
* [kissfft](https://github.com/mborgerding/kissfft) - 貫徹“保持簡單，傻瓜”的快速傅立葉變換（FFT）庫。[BSD-3-Clause]
* [pocketfft](https://github.com/mreineck/pocketfft) - 基於 FFTPack 並進行了多項改進的 FFT 實現。[BSD-3-Clause]
* [wavelib](https://github.com/rafat/wavelib) - 一維和二維小波變換的 C 實現。[BSD-3-Clause]

## 字型
*用於解析和處理字型檔案的庫。*

* [Fontconfig](https://gitlab.freedesktop.org/fontconfig/fontconfig) - 字型配置和自定義庫。[MIT] [website](https://www.freedesktop.org/wiki/Software/fontconfig/)
* [FreeType](https://www.freetype.org/) - 可免費使用的字型渲染軟體庫。[FTL & GPLv2]
* [otfcc](https://github.com/caryll/otfcc) - 用於解析和寫入 OpenType 字型檔案的 C 庫和實用工具。[Apache-2.0]
* [harfbuzz](https://github.com/harfbuzz/harfbuzz) - 文字整形引擎。[Old MIT]
* [libschrift](https://github.com/tomolt/libschrift) - 輕量級 TrueType 字型渲染庫。[ISC]
* [SheenBidi](https://github.com/Tehreer/SheenBidi) - Unicode 雙向演算法的高階實現。[Apache-2.0]

## 遊戲引擎

* [Acid](https://github.com/Equilibrium-Games/Acid) - 高速 C++17 Vulkan 遊戲引擎。[MIT]
* [Allegro](https://liballeg.org/) - 主要面向影片遊戲和多媒體程式設計的跨平臺庫。[zlib]
* [Axmol Engine](https://github.com/axmolengine/axmol) - 面向桌面、移動端和 XBOX（UWP）的跨平臺遊戲引擎，源自 Cocos2d-x-4.0。[MIT] [website](https://axmol.dev/)
* [Cocos2d-x](https://www.cocos2d-x.org/) - 用於構建 2D 遊戲、互動書籍、演示和其他圖形應用的多平臺框架。[MIT]
* [Corange](https://github.com/orangeduck/Corange) - 使用純 C、SDL 和 OpenGL 編寫的遊戲引擎。[BSD]
* [crown](https://github.com/dbartolini/crown) - 通用資料驅動遊戲引擎，從頭使用正統 C++ 編寫，秉持極簡且面向資料的設計理念。[MIT]
* [delta3d](https://sourceforge.net/projects/delta3d/) - 穩健的模擬平臺。[LGPL2]
* [EnTT](https://github.com/skypjack/entt) - 遊戲與現代 C++ 的結合。[MIT]
* [GamePlay](https://github.com/gameplay3d/GamePlay) - 跨平臺原生 C++ 遊戲框架，用於建立 2D/3D 移動端和桌面遊戲。[Apache2]
* [Godot](https://github.com/godotengine/godot) - 功能齊全、開源且採用 MIT 許可的遊戲引擎。[MIT]
* [Grit](https://github.com/grit-engine/grit-engine) - 社群專案，旨在構建用於開放世界 3D 遊戲的免費遊戲引擎。[MIT]
* [Halley](https://github.com/amzeratul/halley) - 使用 C++14 編寫、具備“真正”實體元件系統的輕量級遊戲引擎。[Apache 2.0]
* [Hazel Game Engine](https://github.com/TheCherno/Hazel) - Hazel 主要是面向 Windows 的早期互動式應用和渲染引擎。[Apache-2.0 license]
* [IX-Ray Platform](https://github.com/ixray-team/ixray-1.6-stcop) - X-Ray 1.6 引擎的分支，旨在改善遊戲體驗並簡化模組開發。[Modified MIT/non-commercial only]
* [JNGL](https://github.com/jhasse/jngl/) - 面向 Linux、Windows、macOS、Android、iOS、Xbox、Nintendo Switch 和 Web 的 2D 庫。[zlib] [website](https://bixense.com/jngl/)
* [KlayGE](https://github.com/gongminmin/KlayGE) - 採用外掛架構的跨平臺開源遊戲引擎。[GPLv2] [website](https://www.klayge.org/)
* [nCine](https://github.com/nCine/nCine) - 注重效能的跨平臺 2D 遊戲引擎，使用 C++11 編寫，並可選用 Lua 指令碼。[MIT] [website](https://ncine.github.io/)
* [o3de](https://github.com/o3de/o3de) - 基於 Amazon Lumberyard 的開源、實時、多平臺 3D 引擎。[Apache2] [website](https://o3de.org/)
* [OpenXRay](https://github.com/OpenXRay/xray-16) - 經社群修改的 X-Ray 引擎，用於 S.T.A.L.K.E.R. 遊戲系列。[Modified BSD/non-commercial only]
* [Oxygine](https://oxygine.org/) - 跨平臺 C++ 2D 遊戲引擎。[MIT]
* [Panda3D](https://github.com/panda3d/panda3d) - 遊戲引擎，也是面向 Python 和 C++ 程式的 3D 渲染與遊戲開發框架。[Modified BSD] [website](https://www.panda3d.org/)
* [PixelGameEngine](https://github.com/OneLoneCoder/olcPixelGameEngine) - olcPixelGameEngine 的官方發行版，是 javidx9 的 YouTube 影片和專案中使用的工具。[OLC3]
* [Polycode](https://github.com/ivansafrin/Polycode) - 用於 C++ 創意編碼（帶 Lua 繫結）的跨平臺框架。[MIT]
* [quakeforge](https://github.com/quakeforge/quakeforge) - 持續維護的原始 Quake 引擎程式碼分支，已有 20 多年開發歷史。[GPL-2.0]
* [raylib](https://github.com/raysan5/raylib) - 簡單易用、讓人享受影片遊戲程式設計的庫。[zlib/libpng] [website](https://www.raylib.com/)
* [Spring](https://github.com/spring/spring) - 強大的免費跨平臺 RTS 遊戲引擎。[GPLv2/GPLv3] [website](https://springrts.com/)
* [Torque2D](https://github.com/TorqueGameEngines/Torque2D) - 為 2D 遊戲開發打造的開源跨平臺 C++ 引擎。[MIT] [website](https://torque3d.org/torque2d)
* [Torque3D](https://github.com/TorqueGameEngines/Torque3D) - 為 3D 遊戲開發打造的開源 C++ 引擎。[MIT] [website](https://torque3d.org/torque3d)
* [toy engine](https://github.com/hugoam/toy) - toy 是輕量、模組化的 C++ 遊戲引擎，提供簡單且富有表現力的 C++ 慣用法，可透過快速迭代設計功能齊全的 2D 或 3D 遊戲。
* [Urho3D](https://urho3d.github.io/) - 免費、輕量、跨平臺的 C++ 2D 和 3D 遊戲引擎，深受 OGRE 和 Horde3D 啟發。[MIT]
* [Zodiac Engine](https://github.com/JeanPhilippeKernel/RendererEngine) - 使用 C++20 和 Vulkan 編寫的開源跨平臺 3D 渲染引擎和編輯器（ZEngine）。[MIT]
* [ezEngine](https://github.com/ezEngine/ezEngine) - 免費開源的 C++ 遊戲引擎。其理念是保持模組化和靈活性，使其適用於多種不同場景。[MIT] [website](https://ezengine.net/)

## 圖形

* [CXXGraph](https://github.com/ZigRazor/CXXGraph) - 免費的 C++17 圖表示和演算法執行僅標頭檔案庫。[AGPL-3.0]
* [Graaf](https://github.com/bobluppes/graaf) - 通用輕量級 C++20 相簿。[MIT] [website](https://bobluppes.github.io/graaf/)

## 圖形使用者介面（GUI）
*圖形使用者介面*

* [Boden](https://github.com/AshampooSystems/boden) - 原生移動端跨平臺 GUI 框架。[GPL/LGPL/Proprietary] [website](https://www.boden.io)
* [Brisk](https://github.com/brisklib/brisk) - 跨平臺 C++20 GUI 框架，支援 MVVM 和響應式功能，並提供可擴充套件的 GPU 加速渲染。[GPL/Proprietary] [website](https://brisklib.com)
* [CEGUI](https://cegui.org.uk/) - 靈活的跨平臺 GUI 庫。
* [Elements](https://github.com/cycfi/elements) - 輕量、精細、解析度無關且模組化的 GUI 庫。[MIT]
* [FLTK](https://www.fltk.org/index.php) - 快速、輕量、跨平臺的 C++ GUI 工具包。[LGPL2]
* [FOX Toolkit](https://fox-toolkit.org) - 開源跨平臺控制元件工具包。[LGPL]
* [GacUI](https://github.com/vczh-libraries/GacUI) - GPU 加速的 C++ 使用者介面，提供所見即所得開發工具、XML 支援、內建資料繫結和 MVVM 功能。[Ms-PL]
* [GTK+](https://www.gtk.org/) - 用於建立圖形使用者介面的多平臺工具包。[LGPL]
* [gtkmm](https://www.gtkmm.org/en/) - 流行 GUI 庫 GTK+ 的官方 C++ 介面。[LGPL]
* [imgui](https://github.com/ocornut/imgui) - 依賴極少的即時模式圖形使用者介面。[MIT]
* [implot](https://github.com/epezent/implot) - 面向 imgui 的即時模式繪圖控制元件。[MIT]
* [iup](https://www.tecgraf.puc-rio.br/iup) - 用於構建圖形使用者介面的多平臺工具包。[MIT]
* [libui](https://github.com/andlabs/libui) - 簡單且可移植（但不失靈活性）的 C GUI 庫，使用所支援平臺的原生 GUI 技術。[MIT]
* [MyGUI](https://github.com/MyGUI/mygui) - 快速、靈活且簡單的 GUI。[MIT]
* [nana](https://github.com/cnjinhao/nana) - 使用現代 C++ 風格進行 GUI 程式設計的跨平臺庫。[Boost]
* [NanoGui](https://github.com/mitsuba-renderer/nanogui) - 面向 OpenGL 3.x 及更高版本的極簡跨平臺控制元件庫。[BSD]
* [NAppGUI](https://github.com/frang75/nappgui_src) - 使用 ANSI-C 構建跨平臺桌面應用的 SDK。[MIT] [website](https://nappgui.com/en/home/web/home.html)
* [nuklear](https://github.com/Immediate-Mode-UI/Nuklear) - 單標頭檔案 ANSI C GUI 庫。[PublicDomain]
* [QCustomPlot](https://qcustomplot.com/) - 無額外依賴的 Qt 繪圖控制元件。[GPLv3]
* [Qwt](https://qwt.sourceforge.net/) - 面向技術應用的 Qt 控制元件。[Own based on LGPL]
* [QwtPlot3D](https://qwtplot3d.sourceforge.net/) - 功能豐富、基於 Qt/OpenGL 的 C++ 程式設計庫，主要提供一組 3D 控制元件。[zlib]
* [RmlUi](https://github.com/mikke89/RmlUi) - 不斷發展的 HTML/CSS 使用者介面庫，是 libRocket 的分支。[MIT]
* [Saucer](https://github.com/saucer/saucer) - 現代跨平臺 C++ WebView 庫。[MIT]
* [Sciter](https://sciter.com/) - 可嵌入的 HTML/CSS/指令碼引擎，旨在作為現代桌面應用的 UI 層。[Free/Commercial]
* [Slint](https://github.com/slint-ui/slint) - 面向桌面和嵌入式裝置的輕量 GUI 工具包。[GPL/Free/Proprietary] [website](https://slint.dev/)
* [TGUI](https://github.com/texus/TGUI) - 跨平臺現代 C++ GUI。[Zlib] [website](https://tgui.eu/)
* [WebUI](https://github.com/webui-dev/webui) - 使用任意 Web 瀏覽器作為 GUI，後端可用你偏好的語言，前端使用 HTML5。[MIT] [website](https://webui.me/)
* [wxCharts](https://github.com/wxIshiko/wxCharts) - 用於在 wxWidgets 應用中建立圖表的庫。[MIT] [website](https://www.wxishiko.com/wxCharts/)
* [wxWidgets](https://wxwidgets.org/) - C++ 庫，允許開發者透過單一程式碼庫為 Windows、Mac OS X、Linux 和其他平臺建立應用。[Own LGPL]
* [Yue](https://github.com/yue/yue) - 用於建立原生跨平臺 GUI 應用的庫。[LGPLv2]
* [GuiLite](https://github.com/idea4good/GuiLite) - 適用於所有平臺、最小的僅標頭檔案 GUI 庫（5 KLOC）。[Apache-2.0]
* [LCUI](https://github.com/lc-soft/LCUI) - 使用 C、XML 和 CSS 構建使用者介面的小型 C 庫。[MIT]

## 圖形

* [assimp](https://github.com/assimp/assimp) - Open Asset Import Library（assimp）是跨平臺 3D 模型匯入庫，旨在為不同 3D 資原始檔格式提供通用 API。[BSD-3-Clause] [website](https://www.assimp.org)
* [bgfx](https://github.com/bkaradzic/bgfx) - 跨平臺渲染庫。[BSD]
* [Blend2D](https://github.com/blend2d/blend2d) - 由 JIT 編譯器驅動的 2D 向量圖形引擎。[Zlib] [website](https://blend2d.com/)
* [Cairo](https://www.cairographics.org/) - 支援多種輸出裝置的 2D 圖形庫。[LGPL2 or Mozilla MPL]
* [C-Turtle](https://github.com/walkerje/C-Turtle) - 作為 CImg 封裝的 C++11 僅標頭檔案海龜圖形庫。[MIT]
* [Diligent Engine](https://github.com/DiligentGraphics/DiligentEngine) - 現代跨平臺底層 3D 圖形庫。[Apache2]
* [DirectXTK](https://github.com/Microsoft/DirectXTK) - 一組用於編寫 DirectX 11.x C++ 程式碼的輔助類。[MIT]
* [GLFW](https://github.com/glfw/glfw) - 簡單的跨平臺 OpenGL 管理庫。[zlib/libpng]
* [GLFWPP](https://github.com/janekb04/glfwpp) - GLFW 的輕量現代 C++17 僅標頭檔案封裝。[MIT]
* [Harfang 3D](https://github.com/harfang3d/harfang3d) - 可用於 C++、Python、Lua 和 Go 的 3D 視覺化庫，基於 BGFX。[GPLv3/LGPLv3/Proprietary] [website](https://www.harfang3d.com)
* [herebedragons](https://github.com/kosua20/herebedragons) - 使用各種引擎、框架或 API 實現的基礎 3D 場景。[MIT] [website](https://simonrodriguez.fr/dragon/)
* [Horde3D](https://github.com/horde3d/Horde3D) - 小型 3D 渲染與動畫引擎。[EPL]
* [Ion](https://github.com/google/ion) - 一組小巧高效的庫，用於構建使用 3D 圖形的跨平臺客戶端或伺服器應用。[Apache2] [website](https://google.github.io/ion/)
* [Irrlicht](https://irrlicht.sourceforge.net/) - 使用 C++ 編寫的高效能實時 3D 引擎。[zlib]
* [libigl](https://github.com/libigl/libigl) - 簡易 C++ 幾何處理庫。[MPL2]
* [LLGL](https://github.com/LukasBanana/LLGL) - Low Level Graphics Library（LLGL）是現代圖形 API 的輕量抽象層。[BSD-3-Clause]
* [LunaSVG](https://github.com/sammycage/lunasvg) - 獨立的 C++ SVG 渲染庫。[MIT]
* [magnum](https://github.com/mosra/magnum) - 面向遊戲和資料視覺化的輕量模組化 C++11/C++14 圖形中介軟體。[MIT] [website](https://magnum.graphics)
* [MESHLIB](https://github.com/meshinspector/meshlib) - 大幅提升 3D 資料處理效率的 SDK。[Free/Commercial] [website](https://meshlib.io/)
* [micro-gl](https://github.com/micro-gl/micro-gl) - 實時、可嵌入、僅標頭檔案的 C++11 CPU 向量圖形庫；無需標準庫、FPU 或 GPU。[CUSTOM] [website](https://micro-gl.github.io/docs/microgl)
* [NanoVG](https://github.com/memononen/nanovg) - 基於 OpenGL 的抗鋸齒 2D 向量繪相簿，適用於 UI 和視覺化。[Zlib]
* [Ogre 3D](https://github.com/OGRECave) :zap: - 使用 C++ 編寫、面向場景的實時靈活 3D 渲染引擎（而非遊戲引擎）。[MIT] [website](https://www.ogre3d.org)
* [OpenSceneGraph](https://www.openscenegraph.org/) - 高效能開源 3D 圖形工具包。[OSGPL]
* [OpenSubdiv](https://github.com/PixarAnimationStudios/OpenSubdiv) - Pixar 的庫，用於在 CPU 和 GPU 上計算並渲染細分曲面。[Modified Apache2]
* [OpenVDB](https://www.openvdb.org/) - 用於儲存、編輯和渲染體積資料集的庫和工具。[MPL2]
* [Panda3D](https://www.panda3d.org/) - 面向 Python 和 C++ 的 3D 渲染與遊戲開發框架。[BSD]
* [Partio](https://github.com/wdas/partio) - 用於處理粒子資料的庫，支援大多數常見檔案格式。[Modified BSD]
* [Skia](https://github.com/google/skia) - 用於繪製文字、幾何圖形和影象的完整 2D 圖形庫。[BSD] [website](https://skia.org/)
* [ThorVG](https://github.com/thorvg/thorvg) - 與平臺無關的可移植庫，可繪製向量場景和動畫，包括 SVG 和 Lottie。[MIT] [website](https://www.thorvg.org/)
* [TinySpline](https://github.com/msteinbeck/tinyspline) - 小巧而強大的 ANSI C 庫，用於對任意 NURBS、B 樣條和 Bézier 曲線進行插值、變換和查詢。[MIT]
* [urho3d](https://github.com/urho3d/Urho3D) - 跨平臺渲染和遊戲引擎。[多種許可，主要為 MIT]
* [Yocto/GL](https://github.com/xelatihy/yocto-gl) - 面向資料驅動、基於物理的圖形學的微型 C++ 庫。[MIT]
* [olive.c](https://github.com/tsoding/olive.c) - 簡單的 2D 圖形庫。[MIT]

## 影像處理

* [avir](https://github.com/avaneev/avir) - 高品質 Pro HDR 影象縮放器和快速 SIMD Lanczos 縮放器。[MIT]
* [Boost.GIL](https://github.com/boostorg/gil) - 通用影象庫。[Boost] [website](https://boost.org/libs/gil)
* [BitmapPlusPLus](https://github.com/baderouaich/BitmapPlusPlus) - 簡單快速的 C++ 點陣圖僅標頭檔案庫。[MIT]
* [CImg](https://cimg.eu/) - 小型開源 C++ 影象處理工具包。[Own LGPL or GPL]
* [CxImage](https://www.codeproject.com/Articles/1300/CxImage) - 影象處理和轉換庫，可載入、儲存、顯示及變換 BMP、JPEG、GIF、PNG、TIFF、MNG、ICO、PCX、TGA、WMF、WBMP、JBG、J2K 影象。[zlib]
* [Dlib](https://github.com/davisking/dlib) :zap: - 現代 C++11 機器學習、計算機視覺、數值最佳化和深度學習工具包。[Boost] [website](https://dlib.net/)
* [fpng](https://github.com/richgel999/fpng) - 超高速 C++ PNG 讀寫器。[Unlicense]
* [FreeImage](https://freeimage.sourceforge.net/) - 開源庫，支援流行的圖形影象格式以及當今多媒體應用所需的其他格式。[GPL2 or GPL3]
* [GD](https://github.com/libgd/libgd) - GD 圖形庫，常用於 PHP 影象載入/處理和縮圖生成。[自定義寬鬆許可，要求在使用者文件中註明] [website](https://libgd.github.io/)
* [DCMTK](https://dicom.offis.de/dcmtk.php.en) - DICOM 工具包。
* [GDCM](https://gdcm.sourceforge.net/wiki/index.php/Main_Page) - Grassroots DICOM 庫。
* [ITK](https://www.itk.org/) - 開源跨平臺影象分析系統。[ITK 4.0 起採用 Apache2]
* [Jpegli](https://github.com/google/jpegli) - 改進的 JPEG 編碼器和解碼器實現。[BSD-3-Clause]
* [Leptonica](https://github.com/DanBloomberg/leptonica) - 開源庫，包含廣泛適用於影象處理和影象分析應用的軟體。[BSD-2-Clause] [website](https://leptonica.org/index.html)
* [libavif](https://github.com/AOMediaCodec/libavif) - 用於編碼和解碼 .avif 檔案的庫。[BSD-2-Clause]
* [libfacedetection](https://github.com/ShiqiYu/libfacedetection) - 開源影象人臉檢測庫，檢測速度可達 1500FPS。[BSD]
* [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo) - 使用 SIMD 指令加速基線 JPEG 編解碼的 JPEG 影象編解碼器。[IJG & BSD-3-Clause & zlib] [website](https://libjpeg-turbo.org/)
* [libjxl](https://github.com/libjxl/libjxl) - JPEG XL 影象格式參考實現。[BSD-3-Clause]
* [libpng](https://github.com/pnggroup/libpng) - 用於讀取、建立和處理 PNG（可移植網路圖形）柵格影象檔案的參考庫。[libpng-2.0] [website](https://libpng.sourceforge.io/)
* [libspng](https://github.com/randy408/libspng) - 簡單、現代的 libpng 替代品。[BSD-2] [website](https://libspng.org/)
* [libvips](https://github.com/jcupitt/libvips) - 快速且記憶體需求低的影象處理庫。[LGPL] [website](https://www.vips.ecs.soton.ac.uk/)
* [LodePNG](https://github.com/lvandeve/lodepng) - C 和 C++ 的 PNG 編碼器與解碼器。[Zlib]
* [Magick++](https://imagemagick.org/script/magick++.php) - ImageMagick 的 C++ 程式介面。[Apache2]
* [MagickWnd](https://imagemagick.org/script/magick-wand.php) - ImageMagick 的 C 程式介面。[Apache2]
* [MozJPEG](https://github.com/mozilla/mozjpeg) - 改進的 JPEG 編碼器。[BSD/BSD-3-Clause/ZLIB]
* [OpenCV](https://github.com/opencv) :zap: - 開源計算機視覺庫。[Apache2] [website](https://opencv.org)
* [OpenEXR](https://www.openexr.com/) - 跨平臺高動態範圍成像庫。[Modified BSDF]
* [OpenImageIO](https://github.com/OpenImageIO/oiio) - 功能強大的影象和紋理處理庫，支援大量常見有損和 RAW 格式。[Modified BSD]
* [OpenJPEG](https://github.com/uclouvain/openjpeg) - 使用 C 編寫的開源 JPEG 2000 編解碼器。[BSD-2-Clause]
* [PlutoFilter](https://github.com/sammycage/plutofilter) - C 語言單標頭檔案、零分配影象濾鏡庫。[MIT]
* [QOI](https://github.com/phoboslab/qoi) - 用於快速無損影象壓縮的“Quite OK Image Format”格式。[MIT]
* [SAIL](https://github.com/happy-sea-fox/sail) - 易用的跨平臺影象解碼庫，支援可插拔影象編解碼器。[MIT]
* [Simd](https://github.com/ermig1979/Simd) - 使用 SIMD 的 C++ 影象處理庫，支援 SSE、SSE2、SSE3、SSSE3、SSE4.1、SSE4.2、AVX、AVX2、AVX-512、VMX（Altivec）、VSX（Power7）以及 ARM NEON。[MIT]
* [stb-image](https://github.com/nothings/stb/blob/master/stb_image.h) - STB 單標頭檔案影象載入庫。[Public Domain]
* [tesseract-ocr](https://github.com/tesseract-ocr) - OCR 引擎。[Apache2]
* [TinyDNG](https://github.com/syoyo/tinydng) - C++ 僅標頭檔案 Tiny DNG/TIFF 載入器和寫入器。[MIT]
* [TinyEXIF](https://github.com/cdcseacave/TinyEXIF) - 小巧、符合 ISO 標準的 JPEG C++ EXIF 和 XMP 解析庫。[MIT]
* [TinyTIFF](https://github.com/jkriege2/TinyTIFF) - 輕量級 TIFF 讀寫庫。[GPL-3.0]
* [Video++](https://github.com/matt-42/vpp) - 高效能 C++14 影片和影象處理庫。[MIT]
* [VIGRA](https://github.com/ukoethe/vigra) - 通用 C++ 計算機視覺影象分析庫。[MIT X11]
* [VTK](https://www.vtk.org/) - 免費開源軟體系統，用於 3D 計算機圖形、影象處理和視覺化。[BSD]
* [OpenImageDenoise](https://github.com/OpenImageDenoise/oidn) - 用於光線追蹤影象的高效能、高品質降噪庫。[Apache-2.0] [website](https://www.openimagedenoise.org/)
* [bitmap](https://github.com/ArashPartow/bitmap) - 用於讀寫和處理 BMP 影象檔案的 C++ 點陣圖庫。[MIT]

## 國際化

* [gettext](https://www.gnu.org/software/gettext/) - GNU 'gettext'。[GPL2]
* [IBM ICU](https://site.icu-project.org/) - 提供 Unicode 和全球化支援的一組 C/C++ 與 Java 庫。[ICU]
* [libiconv](https://www.gnu.org/software/libiconv/) - 不同字元編碼之間的編碼轉換庫。[GPL]
* [simdutf](https://github.com/simdutf/simdutf) - Unicode 例程（UTF8、UTF16、UTF32）：使用 SSE2、AVX2、NEON、AVX-512 每秒處理數十億字元。[Apache-2/MIT]
* [uni-algo](https://github.com/uni-algo/uni-algo) - C/C++ Unicode 演算法實現。[Unlicense or MIT]
* [utf8.h](https://github.com/sheredom/utf8.h) - 面向 C 和 C++ 的單標頭檔案 UTF-8 字串函式。[Unlicense]
* [utf8proc](https://github.com/JuliaStrings/utf8proc) - 用於處理 UTF-8 Unicode 資料的簡潔 C 庫。[MIT]

## 行程間通訊

* [Apache Thrift](https://thrift.apache.org/) - 高效的跨語言 IPC/RPC，支援在 C++、Java、Python、PHP、C# 等多種語言之間通訊。最初由 Facebook 開發。[Apache2]
* [Boost.Interprocess](https://github.com/boostorg/interprocess) - 支援核心級共享記憶體和記憶體對映檔案的 Boost 僅標頭檔案庫，內建訊號量、互斥鎖等同步機制。[Boost] [website](https://boost.org/libs/interprocess)
* [bRPC](https://github.com/apache/brpc) - 使用 C++ 編寫的工業級 RPC 框架，常用於搜尋、儲存、機器學習、廣告、推薦等高效能系統。[Apache2] [website](https://brpc.apache.org/)
* [Cap'n Proto](https://github.com/capnproto/capnproto) - 快速資料交換格式和基於能力的 RPC 系統。[MIT] [website](https://capnproto.org/)
* [eCAL](https://github.com/continental/ecal) - 釋出/訂閱、客戶端/伺服器，支援 C++/Python/C# 及多種訊息協議（protobuf、capnproto 等）。[Apache2] [website](https://www.ecal.io/)
* [gRPC](https://github.com/grpc/grpc) - 高效能、開源、通用 RPC 框架。[BSD] [website](https://www.grpc.io/)
* [Ice](https://github.com/zeroc-ice/ice) - 全面的 RPC 框架，支援 C++、C#、Java、JavaScript、Python 等語言。[GPLv2]
* [iceoryx](https://github.com/eclipse-iceoryx/iceoryx) - 面向安全關鍵系統的真正零複製程序間通訊框架，提供 C 和 Rust 繫結，可執行於 Linux、QNX、Windows、Mac OS、FreeBSD。[Apache2] [website](https://iceoryx.io/)
* [libjson-rpc-cpp](https://github.com/cinemast/libjson-rpc-cpp) - 面向 C++ 伺服器和客戶端的 JSON-RPC 框架。[MIT]
* [nanomsg](https://github.com/nanomsg/nanomsg) - 多種“可擴充套件性協議”的簡單高效能實現。[MIT] [website](https://nanomsg.org/)
* [nng](https://github.com/nanomsg/nng) - nanomsg 下一代版本，輕量級無代理訊息庫。[MIT] [website](https://nanomsg.github.io/nng/)
* [rpclib](https://github.com/rpclib/rpclib) - 現代 C++ msgpack-RPC 伺服器和客戶端庫。[MIT]
* [simple-rpc-cpp](https://github.com/pearu/simple-rpc-cpp) - C/C++ 函式的簡易 RPC 封裝生成器。[BSD]
* [SRPC](https://github.com/sogou/srpc) - 支援多種協議和 OpenTelemetry 的輕量級 RPC 系統。[Apache2]
* [WAMP](https://wamp.ws/) - 提供 RPC 和釋出/訂閱訊息模式。（多種實現、多種語言）
* [xmlrpc-c](https://xmlrpc-c.sourceforge.net/) - 基於 XML 和 HTTP 的輕量 RPC 庫。[BSD]

## JSON

* [Boost.PropertyTree](https://github.com/boostorg/property_tree) - 可用於解析 XML/JSON/INI/Info 檔案的屬性樹解析器/生成器。[Boost] [website](https://boost.org/libs/property_tree)
* [cJSON](https://github.com/DaveGamble/cJSON) - Ultralightweight JSON parser in ANSI C. [MIT]
* [DAW JSON Link](https://github.com/beached/daw_json_link) - 快速、便捷的 C++ JSON 序列化和解析。[BSL-1.0]
* [frozen](https://github.com/cesanta/frozen) - C/C++ JSON 解析器和生成器。[GPL & GPL2]
* [Glaze](https://github.com/stephenberry/glaze) - 極快的現代 C++ 記憶體內 JSON 和介面庫。[MIT]
* [Jansson](https://github.com/akheron/jansson) - 用於編碼、解碼和操作 JSON 資料的 C 庫。[MIT]
* [jbson](https://github.com/chrismanning/jbson) - 用於構建和迭代 BSON 資料及 C++14 JSON 文件的庫。[Boost]
* [JeayeSON](https://github.com/jeaye/jeayeson) - 非常易用的（僅標頭檔案）C++ JSON 庫。[BSD]
* [Jsmn](https://github.com/zserge/jsmn) - 極簡 C 語言 JSON 解析器。[MIT]
* [json](https://github.com/nlohmann/json) :zap: - 現代 C++ 的 JSON。[MIT] [website](https://json.nlohmann.me)
* [json.cpp](https://github.com/jart/json.cpp) - 一款風格華麗的 C++ JSON 解析/序列化庫。[Apache-2.0]
* [json.h](https://github.com/sheredom/json.h) - 用於 C 和 C++ JSON 解析的簡單單標頭檔案/單原始檔方案。[Unlicense]
* [json-build](https://github.com/lcsmuller/json-build) - C89 小型零分配 JSON 序列化器。[MIT]
* [json-c](https://github.com/json-c/json-c) - C 語言 JSON 實現。[MIT]
* [jsoncons](https://github.com/danielaparker/jsoncons) - C++ 僅標頭檔案庫，支援 JSON 和類 JSON 二進位制格式，以及 JSONPointer、JSONPatch、JSONPath 和 JMESPath。[Boost]
* [JsonCpp](https://github.com/open-source-parsers/jsoncpp) - 用於處理 JSON 的 C++ 庫。[MIT]
* [Jsonifier](https://github.com/RealTimeChris/Jsonifier) - 少量用於極速解析和序列化 JSON 物件的類。[MIT]
* [jsonParse](https://github.com/liufeigit/jsonParse) - 簡單的 ANSI C JSON 解析器。[MIT]
* [json-parser](https://github.com/udp/json-parser) - 使用可移植 ANSI C 編寫、佔用空間極小的 JSON 解析器。[BSD]
* [json-struct](https://github.com/jorgen/json_struct) - 高效能單標頭檔案 JSON 解析器，可在 C++ 結構體與 JSON 之間相互解析。[MIT]
* [json-voorhees](https://github.com/tgockel/json-voorhees) - C++ JSON 庫，支援 C++11，無依賴、快速且對開發者友好。[Apache2]
* [JSON Toolkit](https://github.com/sourcemeta/jsontoolkit) - C++20 的 JSON、JSON Pointer、JSON Schema 和 JSONL 庫。[AGPL/Commercial]
* [jute](https://github.com/amir-s/jute) - 非常簡單的 C++ JSON 解析器。[PublicDomain]
* [libjson](https://github.com/vincenthz/libjson) - C 語言 JSON 解析和列印庫，易於整合到任何模型中。[LGPL]
* [libjson](https://sourceforge.net/projects/libjson/) - 輕量級 JSON 庫。[?]
* [LIBUCL](https://github.com/vstakhov/libucl) :zap: - 通用配置庫解析器。[BSD-2-Clause]
* [meojson](https://github.com/MistEO/meojson) - 新一代 C++ JSON/JSON5 序列化引擎 | 零依賴 | 僅標頭檔案 | 釋放 JSON 潛力。[MIT]
* [parson](https://github.com/kgabis/parson) - 使用 C 編寫的輕量 JSON 庫。[MIT]
* [PicoJSON](https://github.com/kazuho/picojson) - C++ 單標頭檔案 JSON 解析器和序列化器。[BSD]
* [qt-json](https://github.com/gaudecker/qt-json) - 用於將 JSON 資料解析為 QVariant 層級結構及反向轉換的簡單類。[GPLv3]
* [RapidJSON](https://github.com/miloyip/rapidjson) :zap: - 快速 C++ JSON 解析器/生成器，同時提供 SAX/DOM 風格 API。[MIT] [website](https://rapidjson.org)
* [sajson](https://github.com/chadaustin/sajson) - 面向 C++11 的輕量、高效能 JSON 解析器。[MIT]
* [simdjson](https://github.com/lemire/simdjson) - 極速 JSON 庫，每秒可解析數 GB 的 JSON。[Apache-2.0]
* [Sonic-Cpp](https://github.com/bytedance/sonic-cpp) - 由 SIMD 加速的快速 JSON 序列化與反序列化庫。[Apache-2.0]
* [taoJSON](https://github.com/taocpp/json) - 零依賴 C++ JSON 僅標頭檔案庫。[MIT]
* [ujson](https://bitbucket.org/awangk/ujson) - µjson 是小型 C++11 UTF-8 JSON 庫。[MIT]
* [UltraJSON](https://github.com/ultrajson/ultrajson) - 使用 C 編寫的超高速 JSON 解碼器和編碼器。[BSD-3-Clause]
* [YAJL](https://github.com/lloyd/yajl) - 快速的 C 語言流式 JSON 解析庫。[ISC]
* [yyjson](https://github.com/ibireme/yyjson) - 使用 ANSI C 編寫的高效能 JSON 庫。[MIT]
* [libdart](https://github.com/target/libdart) - 高效能、針對網路最佳化的 JSON 處理庫。[MIT]

## 日誌記錄

* [Abseil Logging](https://abseil.io/docs/cpp/guides/logging) - Abseil Logging 庫提供將日誌訊息寫入 stderr、檔案或其他接收端的功能。[Apache-2.0]
* [Blackhole](https://github.com/3Hren/blackhole) - 基於屬性的日誌框架，旨在實現快速、模組化和高度可定製。[MIT]
* [Boost.Log](https://github.com/boostorg/log) - 專為高度模組化和可擴充套件性而設計。[Boost] [website](https://boost.org/libs/log)
* [BqLog](https://github.com/Tencent/BqLog) - 輕量、高效能日誌系統，用於《王者榮耀》等專案。[Apache-2.0]
* [fmtlog](https://github.com/MengRao/fmtlog) - 高效能 fmtlib 風格日誌庫，延遲以納秒計。[MIT]
* [G3log](https://github.com/KjellKod/g3log) - 帶動態接收端的非同步日誌器。[PublicDomain]
* [glog](https://github.com/google/glog) - Google 日誌模組的 C++ 實現。
* [haclog](https://github.com/MuggleWei/haclog) - 極快的純 C 日誌庫。[MIT]
* [Log4cpp](https://log4cpp.sourceforge.net/) - C++ 類庫，可靈活地將日誌寫入檔案、syslog、IDSA 和其他目標。[LGPL]
* [log4cplus](https://github.com/log4cplus/log4cplus) - 易用的 C++ 日誌 API，可執行緒安全、靈活且細粒度地控制日誌管理和配置。[BSD & Apache2]
* [loguru](https://github.com/emilk/loguru) - 輕量級 C++ 日誌庫。[PublicDomain]
* [lwlog](https://github.com/ChristianPanov/lwlog) - 極速同步和非同步 C++17 日誌庫。[MIT]
* [ng-log](https://github.com/ng-log/ng-log) - 用於應用級日誌記錄的 C++14 庫。[BSD-3-Clause]
* [plog](https://github.com/SergiusTheBest/plog) - 程式碼不到 1000 行的可移植、簡易 C++ 日誌庫。[MPL2]
* [reckless](https://github.com/mattiasflodin/reckless) - 低延遲、高吞吐量的 C++ 非同步日誌庫。[MIT]
* [spdlog](https://github.com/gabime/spdlog) - 超快速 C++ 僅標頭檔案日誌庫。
* [templog](https://www.templog.org/) - 可用於向 C++ 應用新增日誌功能的超小型輕量庫。[Boost]
* [P7Baical](https://baical.net/p7.html) - 開源跨平臺庫，可高速傳送遙測和跟蹤資料，同時最大限度減少 CPU 和記憶體使用。[LGPL]
* [Quill](https://github.com/odygrd/quill) - 跨平臺低延遲非同步日誌庫。[MIT]
* [logfault](https://github.com/jgaa/logfault) - 簡單、優雅、高效的 C++ 僅標頭檔案日誌庫。[MIT]

## 機器學習

* [Caffe](https://github.com/BVLC/caffe) - 快速神經網路框架。[BSD]
* [catboost](https://github.com/catboost/catboost) - 快速、可擴充套件、高效能的決策樹梯度提升庫。[Apache2]
* [CCV](https://github.com/liuliu/ccv) - 基於 C、快取、核心計算機視覺庫，一款現代計算機視覺庫。[BSD]
* [darknet](https://github.com/pjreddie/darknet) - 使用 C 和 CUDA 編寫的開源神經網路框架。[PublicDomain] [website](https://pjreddie.com/darknet/)
* [Dlib](https://github.com/davisking/dlib) :zap: - 現代 C++11 機器學習、計算機視覺、數值最佳化和深度學習工具包。[Boost] [website](https://dlib.net/)
* [FAISS](https://github.com/facebookresearch/faiss) - 用於密集向量高效相似性搜尋和聚類的庫。[MIT]
* [FANN](https://github.com/libfann/fann) - 快速 C 語言人工神經網路庫。[LGPL]
* [Fido](https://github.com/FidoProject/Fido) - 面向嵌入式電子裝置和機器人的高度模組化 C++ 機器學習庫。[MIT] [website](https://fidoproject.github.io/)
* [flashlight](https://github.com/facebookresearch/flashlight) - Facebook AI Research 開發的快速靈活機器學習庫，完全使用 C++ 編寫並基於 ArrayFire 張量庫。[BSD-3-Clause] [website](https://fl.readthedocs.io/en/latest/)
* [ggml](https://github.com/ggerganov/ggml) - 支援 16 位和 4 位量化的機器學習張量庫。[MIT]
* [libsvm](https://github.com/cjlin1/libsvm) - 簡單、易用、高效的支援向量機庫。[BSD-3-Clause] [website](https://www.csie.ntu.edu.tw/~cjlin/libsvm/)
* [m2cgen](https://github.com/BayesWitnesses/m2cgen) - CLI 工具，可將訓練好的經典機器學習模型轉譯為零依賴的原生 C 程式碼。[MIT]
* [MeTA](https://github.com/meta-toolkit/meta) - 現代 C++ 資料科學工具包。[MIT]
* [Minerva](https://github.com/dmlc/minerva) - 快速靈活的深度學習系統。[Apache2]
* [mlpack](https://github.com/mlpack/mlpack) - 可擴充套件的 C++ 機器學習庫。[LGPLv3] [website](https://www.mlpack.org/)
* [ncnn](https://github.com/Tencent/ncnn) - 針對移動平臺最佳化的高效能神經網路推理計算框架。[BSD]
* [OpenCV](https://github.com/Itseez/opencv) :zap: - 開源計算機視覺庫。[BSD] [website](https://opencv.org/)
* [oneDAL](https://github.com/oneapi-src/oneDAL) - 強大的機器學習庫，可加速大資料分析。[Apache]
* [ONNX runtime](https://github.com/microsoft/onnxruntime) - 用於訓練和推理 ONNX 模型的 C 和 C++ 庫。ONNX 是一種標準，可將 AI 模型轉換為該格式，而不受訓練所用庫的限制。[MIT] [website](https://onnxruntime.ai/)
* [Recommender](https://github.com/GHamrouni/Recommender) - 使用協同過濾（CF）提供產品推薦/建議的 C 庫。[BSD]
* [RNNLIB](https://github.com/szcom/rnnlib) - 用於序列學習問題的迴圈神經網路庫。[GPLv3]
* [SHOGUN](https://github.com/shogun-toolbox/shogun) - Shogun 機器學習工具箱。[GPLv3]
* [sofia-ml](https://code.google.com/p/sofia-ml/) - 快速增量機器學習演算法套件。[Apache2]
* [USearch](https://github.com/unum-cloud/usearch) - 面向向量和字串的快速搜尋與聚類庫。[Apache2]
* [VLFeat](https://github.com/vlfeat/vlfeat) - VLFeat 開源庫實現了流行的計算機視覺演算法，專注於影象理解、本地特徵提取和匹配。[BSD-2-Clause] [website](https://www.vlfeat.org/)
* [xgboost](https://github.com/dmlc/xgboost) - 可擴充套件、可移植、分散式的梯度提升（GBDT、GBRT 或 GBM）庫，支援 Python、R、Java、Scala、C++ 等。可執行於單機、Hadoop、Spark、Flink 和 DataFlow。[Apache2]
* [TensorComprehensions](https://github.com/facebookresearch/TensorComprehensions) - 功能完備的 C++ 庫，可自動合成高效能機器學習核心。[Apache-2.0]
* [kann](https://github.com/attractivechaos/kann) - 輕量級 C 人工神經網路庫。[MIT]

## 數學

* [Apophenia](https://github.com/b-k/apophenia) - 用於統計和科學計算的 C 庫。[GPL2]
* [Armadillo](https://gitlab.com/conradsnicta/armadillo-code) - 用於線性代數和科學計算的快速 C++ 庫。[Apache2] [website](https://arma.sourceforge.net/)
* [autodiff](https://github.com/autodiff/autodiff) - 現代、快速且表達力強的 C++ 自動微分庫。[MIT] [website](https://autodiff.github.io)
* [blaze](https://bitbucket.org/blaze-lib/blaze) - 面向稠密和稀疏運算的高效能 C++ 數學庫。[BSD]
* [Boost.Multiprecision](https://github.com/boostorg/multiprecision) - 為 C++ 提供更大範圍/更高精度的整數、有理數和浮點型別，可僅使用標頭檔案或透過 GMP/MPFR/LibTomMath 後端實現。[Boost] [website](https://boost.org/libs/multiprecision)
* [ceres-solver](https://ceres-solver.org/) - Google 的 C++ 庫，用於建模和求解大型複雜非線性最小二乘問題。[BSD]
* [CGAL](https://github.com/CGAL/cgal) - 高效可靠的幾何演算法集合。[LGPL&GPL] [website](https://www.cgal.org/)
* [cml](https://github.com/demianmnave/CML) - 可配置數學庫。[Boost]
* [CNL](https://github.com/johnmcfarlane/cnl/) - C++ 組合式數值庫。[Boost]
* [DirectXMath](https://github.com/microsoft/DirectXMath) - 完全內聯的 SIMD C++ 線性代數庫，適用於遊戲和圖形應用。
* [Dlib](https://github.com/davisking/dlib) :zap: - 現代 C++11 機器學習、計算機視覺、數值最佳化和深度學習工具包。[Boost] [website](https://dlib.net/)
* [Eigen](https://eigen.tuxfamily.org/) - 高層 C++ 模板標頭檔案庫，提供線性代數、矩陣和向量運算、數值求解器及相關演算法。[MPL2]
* [ExprTk](https://www.partow.net/programming/exprtk/) - C++ 數學表示式工具包庫（ExprTk），是一款易用、易整合且效率極高的執行時數學表示式解析與求值引擎。[MIT]
* [Fastor](https://github.com/romeric/Fastor) - 面向現代 C++ 的輕量高效能張量代數框架。[MIT]
* [geo-utils-cpp](https://github.com/gistrec/geo-utils-cpp) - C++17 僅標頭檔案球面經緯度幾何庫：距離、方位角、面積、點在多邊形內判斷。[Apache2]
* [Geometric Tools](https://www.geometrictools.com) - 用於數學、圖形、影象分析和物理領域計算的 C++ 庫。[Boost] [website](https://www.geometrictools.com)
* [GLM](https://github.com/g-truc/glm) - 與 OpenGL GLSL 數學匹配且可互操作的 C++ 數學僅標頭檔案庫。[MIT] [website](https://glm.g-truc.net/)
* [GMTL](https://ggt.sourceforge.net/) - 圖形數學模板庫，提供以通用方式實現圖形基元的一組工具。[GPL2]
* [GMP](https://gmplib.org/) - C 語言任意精度運算庫，可處理有符號整數、有理數和浮點數。[LGPL3 & GPL2]
* [Klein](https://github.com/jeremyong/klein) - 快速、經 SIMD 最佳化的 C++17 幾何代數庫，支援點、直線、平面投影、交點、連線、剛體運動等。[MIT] [website](https://jeremyong.com/klein)
* [libfixmath](https://github.com/PetteriAimonen/libfixmath) - 跨平臺定點數學庫。[MIT]
* [linalg.h](https://github.com/sgorsten/linalg) - C++ 單標頭檔案、公有領域的短向量數學庫。[Unlicense]
* [MATIO](https://github.com/tbeu/matio) - MATLAB MAT 檔案 I/O 庫。[BSD-2-Clause] [website](https://sourceforge.net/projects/matio/)
* [MatX](https://github.com/NVIDIA/MatX) - 由 GPU 加速、採用 MATLAB/Python 類似語法的 C++17 數值計算庫。[BSD 3-clause]
* [mexce](https://github.com/imakris/mexce) - 單標頭檔案、零依賴 JIT 編譯器，可為標量數學表示式生成最佳化的 x87 FPU 機器碼。[BSD]
* [MIRACL](https://github.com/CertiVox/MIRACL) - 多精度整數與有理數運算密碼學庫。[AGPL]
* [NumCpp](https://github.com/dpilger26/NumCpp) - Python Numpy 庫的模板化 C++ 僅標頭檔案實現。[MIT]
* [NumKong](https://github.com/ashvardanian/NumKong) - 透過 SIMD 加速的距離、點積、矩陣運算、地理空間和幾何核心，支援 16 種數值型別。[Apache2]（舊稱 SimSIMD）
* [OMath](https://github.com/orange-cpp/omath) - 使用 C++23 編寫的跨平臺現代通用數學庫，適用於作弊工具/遊戲開發。[ZLIB]
* [muparser](https://beltoforion.de/en/muparser) - 使用 C++ 編寫的可擴充套件高效能數學表示式解析庫。[MIT]
* [LibTomMath](https://github.com/libtom/libtommath) - 完全使用 C 編寫的免費開源可移植數論多精度整數庫。[PublicDomain & WTFPL] [website](https://www.libtom.net/)
* [linmath.h](https://github.com/datenwolf/linmath.h) - 面向圖形程式設計的精簡線性數學庫。[WTFPL]
* [lp_solve](https://sourceforge.net/projects/lpsolve) - 用於構建和求解線性規劃問題的庫。[LGPL] [website](https://lpsolve.sourceforge.net)
* [OpenBLAS](https://github.com/xianyi/OpenBLAS) - 基於 GotoBLAS2 1.13 BSD 版本的最佳化 BLAS 庫。[BSD 3-clause] [website](https://www.openblas.net/)
* [PCG-rand](https://www.pcg-random.org/) - PCG 是一系列簡單、快速、省空間且統計性質良好的隨機數生成演算法。不同於許多通用 RNG，它們也難以預測。[Apache]
* [QuantLib](https://github.com/lballabio/quantlib) - 免費開源量化金融庫。[Modified BSD] [website](https://quantlib.org/)
* [sebsjames/maths](https://github.com/sebsjames/maths) - 注重客戶端程式設計師使用便利與愉悅體驗的 C++20 模板數學庫（用於 [mathplot](https://github.com/sebsjames/mathplot)）。[Apache2] [website](https://sebsjames.github.io/maths/)
* [StatsLib](https://github.com/kthohr/stats) - C++ 統計分佈函式僅標頭檔案庫。[Apache2] [website](https://www.kthohr.com/statslib.html)
* [SymEngine](https://github.com/symengine/symengine) - 快速符號運算庫，以 C++ 重寫 SymPy 核心。[MIT]
* [TinyExpr](https://github.com/codeplea/tinyexpr) - 用於從字串解析和求值數學表示式的 C 庫。[zlib]
* [Vc](https://github.com/VcDevel/Vc) - C++ SIMD 向量類。[BSD]
* [Versor](https://versor.mat.ucsb.edu/) - 通用（快速）C++ 幾何代數庫，涵蓋歐幾里得、射影、共形、時空等代數。
* [Wagyu](https://github.com/mapbox/wagyu) - 用於幾何並集、交集、差集和異或運算的通用庫。[mapbox-wagyu original]
* [wide-integer](https://github.com/ckormanyos/wide-integer) - Wide-Integer 實現了 uint128_t、uint256_t、uint512_t、uint1024_t 等通用 C++ 模板。[BSL-1.0]
* [Wykobi](https://www.wykobi.com) - 高效、穩健且易用的 C++ 2D/3D 定向計算幾何例程庫。[MIT]
* [xtensor](https://github.com/xtensor-stack/xtensor) - 受 NumPy 語法啟發、使用多維陣列表示式進行數值分析的 C++14 庫。[BSD 3-clause] [website](https://xtensor-stack.github.io/xtensor)
* [universal](https://github.com/stillwater-sc/universal) - 實現任意 posit 算術的 C++14 僅標頭檔案庫。Posit 數制是一種漸進式浮點表示，比 IEEE 浮點更高效，可支援可復現計算科學。[MIT license]
* [utl::random](https://github.com/DmitriBogdanov/UTL/blob/master/docs/module_random.md) - 實現快速隨機數生成的 C++17 僅標頭檔案庫，適用於蒙特卡洛模擬和遊戲開發。[MIT]
* [XAD](https://github.com/auto-differentiation/xad) - 強大的 C++ 自動微分庫。[AGPL] [website](https://auto-differentiation.github.io/)
* [geogram](https://github.com/BrunoLevy/geogram) - 幾何演算法程式設計庫。[BSD-3-Clause]
* [std-simd](https://github.com/VcDevel/std-simd) - C++ std::experimental::simd 的可移植實現。[BSD-3-Clause]
* [libdivide](https://github.com/ridiculousfish/libdivide) - 使用 libdivide 最佳化 C/C++ 整數除法。[zlib] [website](https://libdivide.com)
* [fpsqrt](https://github.com/chmike/fpsqrt) - 快速 C 定點和浮點平方根實現。[MIT]
* [fastmod](https://github.com/lemire/fastmod) - 用於計算餘數和模約簡的快速 C/C++ 僅標頭檔案庫。[Apache-2.0]
* [Spectra](https://github.com/yixuan/spectra) - 基於 Eigen 構建的大規模特徵值問題 C++ 庫。[MPL2] [website](https://spectralib.org)
* [FastNoiseSIMD](https://github.com/Auburns/FastNoiseSIMD) - SIMD 加速噪聲生成函式庫。[MIT]

## 記憶體配置

* [Boehm GC](https://github.com/ivmai/bdwgc) - 面向 C 和 C++ 的保守式垃圾回收器。[類似 X11] [website](https://www.hboehm.info/gc/)
* [C Smart Pointers](https://github.com/Snaipe/libcsptr) - 面向（GNU）C 語言的智慧指標。[MIT]
* [Hoard](https://github.com/emeryberger/Hoard) - 面向 Linux、Windows 和 Mac 的快速、可擴充套件、省記憶體 malloc。[Apache-2.0] [website](https://hoard.org/)
* [jemalloc](https://github.com/jemalloc/jemalloc) - 通用 malloc(3) 實現，注重避免記憶體碎片並支援可擴充套件併發。[BSD] [website](https://jemalloc.net/)
* [memory](https://github.com/foonathan/memory) - 相容 STL 的 C++ 記憶體分配器庫。[ZLib]
* [memory-allocators](https://github.com/mtrebi/memory-allocators) - 用於提升動態記憶體分配效能的自定義記憶體分配器。[MIT]
* [mimalloc](https://github.com/microsoft/mimalloc) - 緊湊且效能出色的通用分配器。[MIT]
* [rpmalloc](https://github.com/mjansson/rpmalloc) - 使用 C 實現的跨平臺無鎖執行緒快取記憶體分配器，按 16 位元組對齊。[PublicDomain]
* [snmalloc](https://github.com/microsoft/snmalloc) - 基於訊息傳遞的高效能分配器。[MIT]
* [TCMalloc](https://github.com/google/tcmalloc) - Google 快速多執行緒 malloc 實現。[Apache-2.0] [website](https://google.github.io/tcmalloc/)
* [buddy_alloc](https://github.com/spaskalev/buddy_alloc) - 單標頭檔案 C 語言夥伴記憶體分配器，分配成本有界。[0BSD]
* [tgc](https://github.com/orangeduck/tgc) - 使用約 500 行程式碼編寫的小型 C 垃圾回收器。[BSD]
* [Mesh](https://github.com/plasma-umass/Mesh) - 可自動減少 C/C++ 應用記憶體佔用的記憶體分配器。[Apache-2.0]
* [rpmalloc](https://github.com/rampantpixels/rpmalloc) - 公有領域跨平臺無鎖執行緒快取記憶體分配器，按 16 位元組對齊。[PublicDomain]
* [TLSF](https://github.com/mattconte/tlsf) - 兩級分離適配記憶體分配器，一種通用動態記憶體分配器。[BSD]

## 多媒體

* [GStreamer](https://gstreamer.freedesktop.org/) - 用於構建媒體處理元件圖的庫。[LGPL]
* [icey](https://github.com/nilstate/icey) - 使用 C++20 構建的實時媒體棧和輕量 libwebrtc 替代品，支援 RTSP 接入、媒體處理、信令、TURN 和瀏覽器傳輸。[LGPL v2.1+]
* [libass](https://github.com/libass/libass) - 可移植的 ASS/SSA 字幕格式渲染器。[ISC]
* [libav](https://github.com/libav/libav) - 用於處理音訊、影片、字幕及相關後設資料等多媒體內容的庫和工具集合。[LGPL v2.1+ and others] [website](https://www.libav.org/)
* [LIVE555 Streaming Media](https://www.live555.com/liveMedia/) - 使用開放標準協議（RTP/RTCP、RTSP、SIP）的多媒體流媒體庫。[LGPL]
* [libVLC](https://wiki.videolan.org/LibVLC) - libVLC（VLC SDK）媒體框架。[GPL]
* [MediaInfoLib](https://github.com/MediaArea/MediaInfoLib) - 便捷地統一顯示影片和音訊檔案中最相關的技術資訊和標籤資料。[BSD]
* [QtAv](https://github.com/wang-bin/QtAV) - 基於 Qt 和 FFmpeg 的多媒體播放框架，可輕鬆編寫播放器。[LGPL] [website](https://wang-bin.github.io/QtAV/)
* [SDL](https://github.com/libsdl-org/SDL) :zap: - Simple DirectMedia Layer（簡單直接媒體層）。[zlib] [website](https://libsdl.org)
* [SFML](https://github.com/SFML/SFML) :zap: - 簡單快速的多媒體庫。[zlib] [website](https://www.sfml-dev.org/)
* [TagLib](https://github.com/taglib/taglib) - 用於讀取和編輯多種流行音訊格式後設資料的庫。[LGPL/MPL] [website](https://taglib.org/)

## 網路

* [ada](https://github.com/ada-url/ada) - 使用現代 C++ 編寫、符合 WHATWG 標準的快速 URL 解析器。[Apache-2.0/MIT]
* [ACE](https://www.dre.vanderbilt.edu/~schmidt/ACE.html) - C++ 物件導向網路程式設計工具包。[?MIT?]
* [AGENT++](https://www.agentpp.com/api/cpp/agent_pp.html) - C++ 框架，提供完整的三語 SNMP v1/2c/3 協議引擎和分發器，用於開發 SNMP 代理。[Apache-2.0]
* [Boost.Asio](https://github.com/boostorg/asio) :zap: - 跨平臺 C++ 網路和底層 I/O 程式設計庫。[Boost] [website](https://boost.org/libs/asio)
* [Boost.Beast](https://github.com/boostorg/beast) :zap: - 基於 C++11 Boost.Asio 構建的 HTTP 和 WebSocket。[Boost] [website](https://www.boost.org/libs/beast)
* [Breep](https://github.com/Organic-Code/Breep) - 基於事件的高階 C++14 點對點庫。[EUPL-1.1 (OSI approved)]
* [C++ REST SDK](https://github.com/Microsoft/cpprestsdk) - C++ REST SDK（舊稱 Casablanca）。[Apache2]
* [CZMQ](https://github.com/zeromq/czmq) - ØMQ 的高階 C 語言繫結。[MPL2] [website](https://czmq.zeromq.org/)
* [Restbed](https://github.com/corvusoft/restbed) - C++11 非同步 RESTful 框架。[AGPL]
* [Restinio](https://github.com/Stiffstream/restinio) - C++14 僅標頭檔案庫，可提供嵌入式 HTTP/WebSocket 伺服器。[BSD]
* [c-ares](https://github.com/c-ares/c-ares) - 用於非同步 DNS 請求的 C 庫。[MIT]
* [cofetch](https://github.com/SSARCandy/cofetch) - 基於 libcurl multi 介面和 ASIO 構建的可鏈式非同步 HTTP 客戶端。透過單一實現支援回撥、協程和 future。[MIT]
* [cpp-httplib](https://github.com/yhirose/cpp-httplib) - 單檔案 C++11 HTTP/HTTPS 伺服器僅標頭檔案庫。[MIT]
* [cpp-netlib](https://cpp-netlib.org/) - 面向高階網路程式設計的開源庫集合。[Boost]
* [cpp-netlib/uri](https://github.com/cpp-netlib/uri) - 相容 RFC 3986 和 RFC 3987 的 C++ URI 解析/構建庫。[Boost]
* [CppServer](https://github.com/chronoxor/CppServer) - 超高速、低延遲非同步套接字伺服器和客戶端 C++ 庫，支援 TCP、SSL、UDP、HTTP、HTTPS、WebSocket 協議，並解決萬級連線問題。[MIT]
* [cpr](https://github.com/whoshuu/cpr) - 現代 C++ HTTP 請求庫，介面簡單而強大，仿照 Python Requests 模組設計。[MIT] [website](https://docs.libcpr.org)
* [curlcpp](https://github.com/JosephP91/curlcpp) - CURL（libcurl）的物件導向 C++ 封裝。[MIT]
* [curlpp](https://github.com/jpbarrette/curlpp) - libcURL 的 C++ 封裝。[MIT]
* [DPDK](https://github.com/DPDK/dpdk) - 資料平面開發套件，提供高速資料包處理庫和驅動。[BSD-3-Clause & GPL-2.0] [website](https://www.dpdk.org/)
* [ENet](https://github.com/lsalzman/enet) - 可靠的 UDP 網路庫。[MIT] [website](https://enet.bespin.org/)
* [evpp](https://github.com/Qihoo360/evpp) - 支援 TCP/UDP/HTTP 協議的高效能 C++ 網路庫。[BSD]
* [FTP client for C++](https://github.com/embeddedmz/ftpclient-cpp) - 用於發起 FTP 請求的 C++ 客戶端。[MIT]
* [H2O](https://github.com/h2o/h2o) - 支援 HTTP/1.x 和 HTTP/2 的最佳化 HTTP 伺服器，也可作為庫使用。[MIT]
* [KCP](https://github.com/skywind3000/kcp/blob/master/README.en.md) - 快速可靠的 ARQ 協議，可幫助應用降低網路延遲。[MIT]
* [libcurl](https://curl.haxx.se/libcurl/) - 多協議檔案傳輸庫。[MIT/X 衍生許可]
* [libhttpserver](https://github.com/etr/libhttpserver) - 用於建立嵌入式 REST HTTP 伺服器等功能的 C++ 庫。[LGPL2.1]
* [Libmicrohttpd](https://www.gnu.org/software/libmicrohttpd/) - GNU libmicrohttpd 是小型 C 庫，旨在方便地將 HTTP 伺服器作為其他應用的一部分執行。[LGPL v2.1+]
* [libpcap](https://github.com/the-tcpdump-group/libpcap) - 可移植的 C/C++ 網路流量捕獲庫。[BSD] [website](https://www.tcpdump.org/)
* [libquic](https://github.com/devsisters/libquic) - 從 Chromium 的 QUIC 實現中提取的 QUIC 協議庫。[BSD]
* [librdkafka](https://github.com/edenhill/librdkafka) - Apache Kafka 的 C 和 C++ 客戶端庫。[BSD-2-Clause]
* [libwebsockets](https://github.com/warmcat/libwebsockets) - 輕量級純 C WebSocket 實現，提供客戶端和伺服器庫。[LGPL2.1 + static link exception] [website](https://libwebsockets.org/)
* [Lithium](https://matt-42.github.io/lithium/) - 無需成為 C++ 專家即可構建高效能 C++ HTTP 伺服器。[MIT]
* [lwIP](https://savannah.nongnu.org/projects/lwip/) - 輕量級 TCP/IP 協議棧。[Modified BSD]
* [mailio](https://github.com/karastojko/mailio) - 跨平臺 C++ 庫，支援 MIME 格式以及 SMTP、POP3 和 IMAP 協議。[BSD]
* [Mongoose](https://github.com/cesanta/mongoose) - 極輕量級 Web 伺服器。[GPL2]
* [MQTT-C](https://github.com/LiamBindle/MQTT-C) - 面向嵌入式系統和 PC 的可移植 MQTT C 客戶端。[MIT] [website](https://liambindle.ca/MQTT-C)
* [mTCP](https://github.com/mtcp-stack/mtcp) - 面向多核系統、高度可擴充套件的使用者態 TCP 協議棧。[Modified BSD]
* [Muduo](https://github.com/chenshuo/muduo) - 面向 Linux 多執行緒伺服器的 C++ 非阻塞網路庫。[BSD]
* [nghttp2](https://github.com/nghttp2/nghttp2) - HTTP/2 C 庫。[MIT] [website](https://nghttp2.org/)
* [nghttp3](https://github.com/ngtcp2/nghttp3) - 使用 C 編寫的 HTTP/3 庫。[MIT] [website](https://nghttp2.org/nghttp3/)
* [Onion](https://github.com/davidmoreno/onion) - 使用 C 編寫、輕量易用的 HTTP 伺服器庫。[Apache2/GPL2]
* [OpenDDS](https://github.com/objectcomputing/OpenDDS) - 物件管理組織（OMG）資料分發服務（DDS）的開源 C++ 實現。[Apache2]
* [PF_RING™](https://github.com/ntop/PF_RING) - 高速資料包處理框架。[LGPL-2.1] [website](https://www.ntop.org/products/packet-capture/pf_ring/)
* [PicoHTTPParser](https://github.com/h2o/picohttpparser) - 小巧、基礎且快速的 HTTP 請求/響應解析器。[MIT]
* [POCO](https://github.com/pocoproject) :zap: - C++ 類庫和框架，用於構建可在桌面、伺服器、移動端和嵌入式系統執行的網路及網際網路應用。[Boost] [website](https://pocoproject.org/)
* [Proxygen](https://github.com/facebook/proxygen) - Facebook 的 C++ HTTP 庫集合，包含易用的 HTTP 伺服器。[BSD]
* [RedPanda](https://github.com/redpanda-data/redpanda) - 面向開發者的流式資料平臺，相容 Kafka API，速度快 10 倍。[BSL]
* [RakNet](https://github.com/OculusVR/RakNet) - 面向遊戲程式設計師的跨平臺開源 C++ 網路引擎。[BSD]
* [restclient-cpp](https://github.com/mrtazz/restclient-cpp) - 簡單的 C++ REST 客戶端，封裝 libcurl 以發起 HTTP 請求。[MIT]
* [Seasocks](https://github.com/mattgodbolt/seasocks) - 簡單小巧、可嵌入 C++ 的 Web 伺服器，支援 WebSocket。[BSD]
* [SNMP++](https://www.agentpp.com/api/cpp/snmp_pp.html) - 支援 SNMP v1/2c/v3 的 C++ API。[自定義寬鬆許可]
* [tlse](https://github.com/eduardsui/tlse) - 單個 C 檔案實現的 TLS 1.2/1.3，使用 tomcrypt 作為密碼庫。[BSD-2-Clause]
* [TQUIC](https://github.com/tencent/tquic) - 高效能、輕量、跨平臺 QUIC 庫，提供 C 和 C++ 介面。[Apache2]
* [Tufão](https://github.com/vinipsmaker/tufao) - 基於 Qt 構建的 C++ 非同步 Web 框架。[LGPL2]
* [uriparser](https://github.com/uriparser/uriparser) - 嚴格符合 RFC 3986 的 URI 解析和處理庫。[BSD-3-Clause]
* [uWebSockets](https://github.com/uNetworking/uWebSockets) - µWS 是現有實現中最輕量、高效且可擴充套件的 WebSocket 和 HTTP 伺服器之一。[Zlib]
* [UCall](https://github.com/unum-cloud/ucall) - 基於 io_uring、由 SIMD 加速的高效能 RPC 庫。[Apache2]
* [WAFer](https://github.com/riolet/WAFer) - 基於 C 語言、面向可擴充套件伺服器端和網路應用的超輕量軟體平臺。可以看作面向 C 程式設計師的 node.js。[GPL2]
* [Wangle](https://github.com/facebook/wangle) - 用於構建非同步、事件驅動現代 C++ 服務的客戶端/伺服器應用框架。[Apache-2.0]
* [wdt](https://github.com/facebook/wdt) - 可嵌入庫（及命令列工具），旨在透過多條 TCP 路徑儘可能快速地在兩個系統間傳輸資料。[BSD-3-Clause]
* [WebSocket++](https://github.com/zaphoyd/websocketpp) - 基於 C++/Boost Asio 的 WebSocket 客戶端/伺服器庫。[BSD]
* [wspp](https://github.com/pinwhell/wspp) - 零依賴、單標頭檔案現代 WebSocket 客戶端和伺服器庫，支援 ws/wss。[MIT]
* [PcapPlusPlus](https://github.com/seladb/PcapPlusPlus) - 多平臺 C++ 網路嗅探、資料包解析與構造框架。[Unlicense]
* [ZeroMQ](https://github.com/zeromq/libzmq) - 高速、模組化非同步通訊庫。[LGPL3/MPL2] [website](https://zeromq.org/)
* [Zyre](https://github.com/zeromq/zyre) - 用於點對點應用的區域網叢集。[MPL2]
* [easyhttpcpp](https://github.com/sony/easyhttpcpp) - Sony 提供、支援快取功能的跨平臺 HTTP 客戶端庫。[MIT]
* [GameNetworkingSockets](https://github.com/ValveSoftware/GameNetworkingSockets) - Valve 提供的基於 UDP 的可靠和不可靠訊息通訊，採用面向連線的 API（類似 TCP）。[BSD-3-Clause]
* [wepoll](https://github.com/piscisaureus/wepoll) - 基於 Winsock 的 Windows epoll 封裝。[BSD-2-Clause]

## Office Open XML
*用於解析和處理 xlsx、pptx、docx 等檔案的庫。*

* [DuckX](https://github.com/amiremohamadi/DuckX) - 用於建立和修改 Microsoft Word（.docx）檔案的 C++ 庫。[MIT]
* [FreeXL](https://www.gaia-gis.it/fossil/freexl/index) - 用於從電子表格中提取有效資料的開源庫。[MPL/GPL-2/LGPL-2]
* [libxls](https://github.com/libxls/libxls) - 使用 C/C++ 讀取二進位制 Excel 檔案。[BSD-2-Clause]
* [libxlsxwriter](https://github.com/jmcnamara/libxlsxwriter) - 用於建立 Excel XLSX 檔案的 C 庫。[BSD-2-Clause] [website](https://libxlsxwriter.github.io/)
* [OpenXLSX](https://github.com/troldal/OpenXLSX) - 用於讀取、寫入、建立和修改 Microsoft Excel®（.xlsx）檔案的 C++ 庫。[BSD-3-Clause]
* [SimpleXlsxWriter](https://sourceforge.net/projects/simplexlsx/) - Microsoft Excel 2007 及更高版本的 XLSX 檔案寫入器。[zlib]
* [XLSX I/O](https://github.com/brechtsanders/xlsxio) - 用於讀寫 .xlsx 檔案的 C 庫。[MIT]

## PDF
*用於解析和處理 PDF 文件的庫。*

* [libharu](https://github.com/libharu/libharu) - 免費、跨平臺、開源的 PDF 生成軟體庫。[zlib]
* [litePDF](https://litepdf.sourceforge.io) - 使用裝置上下文呼叫 GDI 函式繪製頁面內容的 PDF 文件建立和編輯庫。[LGPL v3 and zlib]
* [MuPDF](https://mupdf.com/) - 輕量級 PDF、XPS 和電子書檢視器。[AGPL/Proprietary]
* [PDF-Writer](https://github.com/galkahana/PDF-Writer) - 高效能 C++ PDF 檔案建立、修改和解析庫。[Apache-2.0] [website](https://www.pdfhummus.com/)
* [PDF4QT](https://github.com/JakubMelka/PDF4QT) - PDF 工具包，包含渲染和編輯庫、檢視器及命令列工具。[MIT] [website](https://jakubmelka.github.io/)
* [pdfio](https://github.com/michaelrsweet/pdfio) - 簡單的 C 語言 PDF 檔案讀寫庫。[Apache-2] [website](https://www.msweet.org/pdfio/)
* [PDFium](https://pdfium.googlesource.com/pdfium/) - PDF 生成和渲染庫。[BSD-3-Clause]
* [PoDoFo](https://podofo.sourceforge.net/) - PDF 檔案格式處理庫。[LGPL]
* [Poppler](https://poppler.freedesktop.org/) - 基於 xpdf-3.0 程式碼庫的開源多後端 PDF 渲染庫。[GPLv2/GPLv3]
* [QPDF](https://github.com/qpdf/qpdf) - 用於在保留內容的同時轉換 PDF 檔案的工具和 C++ 庫。[Apache-2.0] [website](https://qpdf.sourceforge.io/)
* [Xpdf](https://www.xpdfreader.com/) - 免費 PDF 檢視器和工具包，包括文字提取器、影象轉換器、HTML 轉換器等。[GPL v2/GPL v3]
* [DynaPDF](https://www.dynaforms.com/) - 易用的 PDF 生成庫。[Commercial]

## 物理學
*動力學模擬引擎*

* [Box2D](https://github.com/erincatto/Box2D) - 遊戲用 2D 物理引擎。[BSD-like]
* [Bullet](https://github.com/bulletphysics/bullet3) - 遊戲用 3D 物理引擎。[zlib] [website](https://bulletphysics.org)
* [Chipmunk](https://github.com/slembcke/Chipmunk2D) - 快速輕量的 2D 遊戲物理庫。[MIT] [website](https://chipmunk-physics.net/)
* [Jolt Physics](https://github.com/jrouwe/JoltPhysics) - 適合多核處理器的剛體物理和碰撞檢測庫。[MIT]
* [Kratos](https://github.com/KratosMultiphysics/Kratos) - 用於構建並行多學科模擬軟體的框架，目標是實現模組化、可擴充套件性和高效能。[BSD] [website](https://www.cimne.com/kratos/)
* [LiquidFun](https://github.com/google/liquidfun) - 遊戲用 2D 物理引擎。[BSD-like]
* [Newton Dynamics](https://github.com/MADEAPPS/newton-dynamics) - 實時物理環境模擬的一體化解決方案。[zlib]
* [ODE](https://www.ode.org/) - Open Dynamics Engine，開源高效能剛體動力學模擬庫。[BSD&LGPL]
* [ofxBox2d](https://github.com/vanderlin/ofxBox2d) - Box2D 的 openFrameworks 封裝。[BSD-like]
* [PhysX](https://github.com/NVIDIAGameWorks/PhysX-3.4) - Nvidia 作為 Nvidia GameWorks 軟體套件一部分開發的開源實時物理引擎中介軟體 SDK。[BSD-3-Clause]
* [PlayRho](https://github.com/louis-langholtz/PlayRho) - 互動式物理引擎和庫。[Zlib]
* [Project Chrono](https://github.com/projectchrono/chrono) - 開源多物理場模擬引擎。[BSD-3-Clause] [website](https://projectchrono.org/)
* [Quantum++](https://github.com/vsoftco/qpp) - 現代 C++11 量子計算庫。[MIT]
* [QuarkPhysics](https://github.com/erayzesen/QuarkPhysics) - 2D 軟體和剛體物理引擎。[MIT]
* [Simbody](https://github.com/simbody/simbody) - 高效能 C++ 多體動力學/物理庫，用於模擬車輛、機器人和人體骨骼等關節生物力學與機械系統。[Apache2]
* [SOFA](https://github.com/sofa-framework/sofa) - 面向實時模擬的開源框架，尤其專注於醫療模擬。[LGPL] [website](https://www.sofa-framework.org)
* [tungsten](https://github.com/tunabrain/tungsten) - 高效能 C++ 基於物理的渲染器。[zlib]

## 反射

* [config-loader](https://github.com/netcan/config-loader) - C++17 靜態反射框架，可將配置檔案解析為原生資料結構。[MIT]
* [Better Enums](https://github.com/aantron/better-enums) - 支援反射的列舉（轉字串、迭代），單標頭檔案實現。[BSD] [website](https://aantron.github.io/better-enums/)
* [clReflect](https://github.com/Celtoys/clReflect) - 使用 clang 實現 C++ 反射。[MIT]
* [CPFG](https://github.com/cpgf/cpgf) - C++03 反射、回撥和指令碼繫結庫。[Apache2]
* [CPP-Reflection](https://github.com/AustinBrunkhorst/CPP-Reflection) - 使用 clang 實現 C++ 反射。[MIT]
* [Easy Reflection](https://github.com/chocolacula/easy_reflection_cpp) - 類似 Rust、Java 或 Go 的簡單快速反射與序列化方案。[Apache]
* [Enchantum](https://github.com/ZXShady/enchantum) - 現代 C++17 編譯期列舉反射僅標頭檔案庫。[MIT]
* [Magic Enum](https://github.com/Neargye/magic_enum) - C++17 僅標頭檔案庫，為列舉提供靜態反射（轉字串、從字串轉換、迭代）；無需宏或樣板程式碼即可適用於任意列舉型別。[MIT]
* [magic_get](https://github.com/apolukhin/magic_get) - 為使用者定義型別提供類似 std::tuple 的方法，無需宏或樣板程式碼。[Boost]
* [meta](https://github.com/skypjack/meta) - C++ 僅標頭檔案、非侵入式、無宏的執行時反射系統。[MIT]
* [Nameof](https://github.com/Neargye/nameof) - C++17 僅標頭檔案庫，提供 nameof 宏和函式，以獲取變數、型別、函式、宏和列舉的簡單名稱。[MIT]
* [REFLECT](https://github.com/qlibs/reflect) - C++20 靜態反射庫。[MIT]
* [reflect-cpp](https://github.com/getml/reflect-cpp) - 透過反射實現序列化，包括從結構體自動獲取欄位名稱。[MIT]
* [RTTR](https://github.com/rttrorg/rttr) - C++11 反射庫。[MIT] [website](https://www.rttr.org)
* [simple_enum](https://github.com/arturbac/simple_enum) - 快速、直觀、型別安全的 C++ 列舉支援庫。[BSL-1.0] [website](https://arturbac.github.io/simple_enum/)
* [TSMP](https://github.com/fabian-jung/tsmp) - 非侵入式、無宏的 C++20 靜態反射庫。使用 libclang 從原始碼提取反射資料，並透過模板特化加以使用。[MIT]
* [visit_struct](https://github.com/cbeck88/visit_struct) - 用於 C++ 結構體欄位反射的微型庫。[Boost]
* [Refureku](https://github.com/jsoysouvanh/Refureku) - C++17 執行時反射和程式碼生成庫。[MIT]

## 正規表示式

* [CppVerbalExpressions](https://github.com/VerbalExpressions/CppVerbalExpressions) - 讓 C++ 正規表示式變得簡單。[MIT]
* [CTRE](https://github.com/hanickadot/compile-time-regular-expressions) - 編譯期、幾乎相容 PCRE 的正規表示式匹配器。[MIT]
* [Hyperscan](https://github.com/intel/hyperscan) - Intel 的高效能多正規表示式匹配庫，可同時匹配大量正規表示式（最多數萬條），通常用於 DPI 庫棧。[BSD]
* [Oniguruma](https://github.com/kkos/oniguruma) - 現代靈活的正規表示式庫，支援多種字元編碼。[BSD]
* [PCRE](https://pcre.org/) - 受 Perl 正規表示式功能啟發的 C 語言正規表示式庫。[BSD]
* [PCRE2](https://github.com/PCRE2Project/pcre2) - 一組用於實現
正規表示式模式匹配的 C 函式。[BSD] [website](https://pcre2project.github.io/pcre2/)
* [PIRE](https://github.com/yandex/pire) - Yandex 的 Perl 不相容正規表示式庫，速度可非常快（超過 400 MB/s）。[LPGL v3.0]
* [RE2](https://github.com/google/re2) - 使用自動機理論和有限狀態機實現正規表示式的軟體庫。[BSD-3-Clause]
* [SLRE](https://github.com/cesanta/slre) - C/C++ 超輕量正規表示式引擎。[GPLv2/Proprietary]
* [sregex](https://github.com/openresty/sregex) - 基於非回溯 NFA/DFA 的 Perl 相容正規表示式引擎庫，用於匹配大型資料流。[BSD]
* [SRELL](https://www.akenotsuki.com/misc/srell/en/) - 支援 Unicode 的 C++ 正規表示式模板庫。[BSD]
* [TRE](https://github.com/laurikari/tre) - 近似正規表示式匹配庫和 agrep 命令列工具。[BSD-2-Clause]
* [Vectorscan](https://github.com/VectorCamp/vectorscan) - 高效能正規表示式匹配庫的可移植分支。[BSD-3-Clause]
* [Pawn.Regex](https://github.com/urShadow/Pawn.Regex) - Pawn 外掛，透過 C++11 std::regex 提供正規表示式支援。[MIT]

## 機器人學

* [FusionCore](https://github.com/manankharwar/fusioncore) - ROS 2 UKF 感測器融合庫，可融合 GPS、IMU 和輪式里程計，並透過自適應噪聲和異常值剔除實現穩健的戶外定位。[Apache2]
* [MOOS-IvP](https://moos-ivp.org) - 一組開源 C++ 模組，為機器人平臺提供自主能力，尤其適用於自主海洋載具。
* [MRPT](https://www.mrpt.org/) - 移動機器人程式設計工具包。[BSD]
* [PCL](https://github.com/PointCloudLibrary/pcl) - 點雲庫是獨立、大型、開放的 2D/3D 影象和點雲處理專案。[BSD] [website](https://www.pointclouds.org/)
* [Robotics Library (RL)](https://www.roboticslibrary.org/) - 自包含的 C++ 庫，支援機器人運動學、運動規劃和控制。[BSD]
* [RobWork](https://gitlab.com/sdurobotics/RobWork) - 用於機器人系統模擬和控制的 C++ 庫集合。[Apache2] [website](https://www.robwork.dk/)
* [ROS](https://wiki.ros.org/) - 機器人作業系統，提供幫助軟體開發者建立機器人應用的庫和工具。[BSD]
* [Ruckig](https://github.com/pantor/ruckig) - 面向機器人和機器的實時運動生成庫。[MIT] [website](https://ruckig.com)
* [YARP (Yet Another Robot Platform)](https://github.com/robotology/yarp) - 用於通訊和裝置介面的庫與工具包。[BSD-3-Clause] [website](https://www.yarp.it/)
* [SPICE Toolkit](https://github.com/arturania/cspice) - 用於計算幾何資訊的庫和工具包，這些資訊用於規劃和分析機器人航天器獲取的科學觀測資料。[MIT] [website](https://naif.jpl.nasa.gov/naif/toolkit.html)

## 科學計算

* [AMGCL](https://github.com/ddemidov/amgcl) - 用於透過代數多重網格法求解大型稀疏線性系統的 C++ 僅標頭檔案庫。[MIT]
* [Au](https://github.com/aurora-opensource/au) - 相容 C++14、無依賴且可單檔案分發的物理單位庫，注重安全性、易用性、效能和開發體驗。[Apache 2.0] [website](https://aurora-opensource.github.io/au/main/)
* [FFTW](https://www.fftw.org/) - 用於計算一維或多維 DFT 的 C 庫。[GPL]
* [GSL](https://www.gnu.org/software/gsl/) - GNU 科學計算庫。[GPL]
* [preCICE](https://github.com/precice/precice) - 用於分割槽多物理場模擬（FSI、CHT 等）的耦合庫。[LGPL] [website](https://precice.org/)
* [TileDB](https://github.com/TileDB-Inc/TileDB) - 快速的稠密和稀疏多維陣列 DBMS。[MIT] [website](https://tiledb.io/)
* [Trilinos](https://github.com/trilinos/Trilinos) - 高效能 PDE 求解器。[BSD]
* [Torch](https://github.com/torch/torch7) - 廣泛支援機器學習演算法、優先利用 GPU 的科學計算框架。[BSD-3-Clause] [website](https://torch.ch/)
* [volesti](https://github.com/GeomScale/volesti) - 截斷分佈的高維取樣、凸最佳化和體積計算。

## 指令碼

* [AngelScript](https://www.angelcode.com/angelscript/) - 面向遊戲的 AngelScript 解釋型/編譯型指令碼語言。[zlib]
* [Boost.Python](https://github.com/boostorg/python) - C++ 庫，可實現 C++ 與 Python 程式語言之間的無縫互操作。[Boost] [website](https://boost.org/libs/python)
* [cppimport](https://github.com/tbenthompson/cppimport) - 直接從 Python 匯入 C++ 檔案！[MIT]
* [CppSharp](https://github.com/mono/CppSharp) - 用於將 C/C++ API 接入高階語言的工具和庫。[MIT]
* [ChaiScript](https://github.com/ChaiScript/ChaiScript/) - 易用的 C++ 嵌入式指令碼語言。[BSD] [website](https://chaiscript.com/)
* [ctypes.sh](https://github.com/taviso/ctypes.sh) - 面向 bash 的外部函式介面。[MIT]
* [Cython](https://github.com/cython/cython) - Cython 是針對 Python 和擴充套件版 Cython（基於 Pyrex）程式語言的最佳化靜態編譯器，讓編寫 Python 的 C 擴充套件像編寫 Python 本身一樣簡單。[Apache] [website](https://cython.org/)
* [djinni](https://djinni.xlcpp.dev) - 用於生成跨語言型別宣告和介面繫結的工具。[Apache2]
* [Duktape](https://github.com/svaarala/duktape) - 佔用空間小、可嵌入的 JavaScript 引擎。[MIT] [website](https://duktape.org)
* [JavaCpp](https://github.com/bytedeco/javacpp) - Java 與原生 C++ 之間缺失的橋樑。[Apache2]
* [JerryScript](https://github.com/jerryscript-project/jerryscript) - 面向物聯網的超輕量 JavaScript 引擎。[Apache-2.0] [website](https://jerryscript.net/)
* [libffi](https://github.com/libffi/libffi) - 可移植的外部函式介面庫。[MIT] [website](https://sourceware.org/libffi/)
* [Lua](https://www.lua.org/) - 用於配置檔案和基礎應用指令碼的極簡快速指令碼引擎。[MIT]
* [LuaBridge](https://github.com/vinniefalco/LuaBridge) - 輕量、無依賴的 Lua 到 C++ 繫結庫。[MIT]
* [LuaBridge3](https://github.com/kunitoki/LuaBridge3) - 輕量、無依賴的 Lua、LuaJIT、Luau 和 Ravi 到 C++ 繫結庫。[MIT]
* [luacxx](https://github.com/dafrito/luacxx) - 建立 Lua 繫結的 C++11 API。[MIT]
* [Luau](https://github.com/luau-lang/luau) - 源自 Lua 的快速、小巧、安全、漸進型別化可嵌入指令碼語言。[MIT] [website](https://luau.org/)
* [MicroQuickJS](https://github.com/bellard/mquickjs) - MicroQuickJS（又稱 MQuickJS）是面向嵌入式系統的 JavaScript 引擎。[MIT]
* [MiniScript](https://miniscript.org/) - 現代、優雅、易學且易於嵌入自有 C# 或 C++ 專案的指令碼語言。[MIT]
* [nanobind](https://github.com/wjakob/nanobind) - 小巧高效的 C++/Python 繫結。[BSD-3-Clause]
* [nbind](https://github.com/charto/nbind) - 神奇的標頭檔案，可讓 JavaScript 訪問你的 C++ 庫。[MIT]
* [PHP-CPP](https://github.com/CopernicaMarketingSoftware/PHP-CPP) - 使用 C++ 構建 PHP 擴充套件的庫。[Apache2] [website](https://www.php-cpp.com/)
* [pocketpy](https://github.com/blueloveTH/pocketpy) - 用於遊戲指令碼的 C++17 Python 直譯器，僅標頭檔案實現。[MIT] [website](https://pocketpy.dev/)
* [pybind11](https://github.com/pybind/pybind11) - 實現 C++11 與 Python 之間無縫互操作。[BSD]
* [QuickJS](https://bellard.org/quickjs/) - 小巧且可嵌入的 JavaScript 引擎。[MIT]
* [SIP](https://riverbankcomputing.com/software/sip/intro) - Python v2 和 v3 的 C 或 C++ 繫結生成器。[GPL]
* [sol2](https://github.com/ThePhD/sol2) - C++ 與 Lua API 封裝，具備高階功能和頂級效能。[MIT]
* [SWIG](https://github.com/swig/swig) - 封裝/介面生成器，可將 C++ 程式碼連線到 JavaScript、Perl、PHP、Python、Tcl 和 Ruby。[GPL/輸出不受許可約束] [website](https://www.swig.org/)
* [txiki.js](https://github.com/saghul/txiki.js) - 小型 JavaScript 執行時。[MIT]
* [V7](https://github.com/cesanta/v7) - 嵌入式 JavaScript 引擎。[GPL2]
* [V8](https://v8.dev) - Google 的快速 JavaScript 引擎，可嵌入任何 C++ 應用。[BSD]
* [v8pp](https://github.com/pmed/v8pp) - 僅標頭檔案庫，可將 C++ 類和函式暴露給 V8，以便在 JavaScript 程式碼中使用。[BOOST] [website](https://pmed.github.io/v8pp/)
* [ChakraCore](https://github.com/Microsoft/ChakraCore) - Microsoft 的 JavaScript 引擎，可嵌入 nodejs。[MIT]
* [MuJS](https://codeberg.org/ccxvii/mujs) - 可嵌入的 C 語言 JavaScript 直譯器。[ISC] [website](https://mujs.com)
* [hobbes](https://github.com/Morgan-Stanley/hobbes) - Morgan Stanley 開發的語言和嵌入式 JIT 編譯器。[Apache-2.0]

## 序列化

* [BitSerializer](https://github.com/PavelKisliak/BitSerializer) - 多格式序列化庫（JSON、XML、YAML、CSV、MsgPack）。[MIT]
* [Bitsery](https://github.com/fraillt/bitsery) - C++ 二進位制序列化僅標頭檔案庫。[MIT]
* [Bond](https://github.com/Microsoft/bond) - 用於處理模式化資料的開源跨平臺框架。[MIT]
* [Boost.Serialization](https://github.com/boostorg/serialization) - Boost 序列化庫。[Boost] [website](https://boost.org/libs/serialization)
* [Cap'n Proto](https://github.com/capnproto/capnproto) - 快速資料交換格式和基於能力的 RPC 系統。[MIT] [website](https://capnproto.org/)
* [cereal](https://github.com/USCiLab/cereal) - C++11 序列化庫。[BSD]
* [cista](https://github.com/felixguendling/cista) - C++17 零複製高效能序列化/反序列化庫。[MIT]
* [cppcodec](https://github.com/tplgy/cppcodec) - C++11 僅標頭檔案庫，可使用一致靈活的 API 編碼/解碼 base64、base32 和十六進位制。[MIT]
* [FastBinaryEncoding](https://github.com/chronoxor/FastBinaryEncoding) - 超快速通用序列化方案，支援 C++、C#、Go、Java、JavaScript、Kotlin、Python、Ruby 和 Swift。[MIT]
* [FlatBuffers](https://github.com/google/flatbuffers) - 高記憶體效率序列化庫。[Apache2]
* [Kaitai Struct](https://kaitai.io) - 用於描述各種二進位制資料結構的宣告式語言，以及生成 C++ 解析器程式碼的編譯器。[GPLv3+][MIT][Apache2]
* [iguana](https://github.com/qicosmos/iguana) - 使用 C++20 和 C++17 開發的現代通用易用序列化引擎。[Apache2]
* [MessagePack](https://github.com/msgpack/msgpack-c) - 面向 C 和 C++、類似 JSON 的高效二進位制序列化格式。[Apache2] [website](https://msgpack.org/)
* [mrpt-serialization](https://github.com/mrpt/mrpt/) - 支援版本管理的二進位制或文字格式序列化。[BSD] [website](https://docs.mrpt.org/reference/latest/group_mrpt_serialization_grp.html)
* [nanopb](https://github.com/nanopb/nanopb) - 程式碼體積小的 ANSI C Protocol Buffers 實現。[Zlib]
* [protobuf](https://github.com/protocolbuffers/protobuf) - Protocol Buffers，Google 的資料交換格式。[BSD]
* [protobuf-c](https://github.com/protobuf-c/protobuf-c) - Protocol Buffers 的 C 語言實現。[BSD]
* [Protocol Puffers](https://github.com/PragmaTwice/protopuf) - 使用 C++20 編寫的小巧、高度模板化、相容 protobuf 的序列化/反序列化僅標頭檔案庫。[Apache-2.0]
* [SimpleBinaryEncoding](https://github.com/real-logic/simple-binary-encoding) - 面向低延遲應用的二進位制格式應用訊息編解碼工具。[Apache2]
* [upb](https://github.com/protocolbuffers/upb) - 小型 C 語言 protobuf 實現。[BSD]
* [Wirehair](https://github.com/catid/wirehair) - 面向大型資料的 O(N) 噴泉碼。[BSD-3-Clause]
* [YAS](https://github.com/niXman/yas) - 極快的“又一個序列化”庫，支援二進位制/文字/JSON 格式。[Boost]
* [zpp_bits](https://github.com/eyalz800/zpp_bits) - 實際上，這是速度最快的現代序列化庫。請看[這個影片](https://www.youtube.com/watch?v=G7-GQhCw8eE&ab_channel=CppCon)。
* [fbthrift](https://github.com/facebook/fbthrift) - Facebook 的 Apache Thrift 分支，包含序列化庫和 RPC 框架。[Apache-2.0]

## 序列埠

* [Asio](https://github.com/chriskohlhoff/asio/) - Asio 包含以可移植方式建立和操作串列埠的類。[Boost] [website](https://think-async.com/)
* [Boost.Asio](https://github.com/boostorg/asio) - Boost.Asio 包含以可移植方式建立和操作串列埠的類。[Boost] [website](https://boost.org/libs/asio)
* [CSerialPort](https://github.com/itas109/CSerialPort) - 輕量級跨平臺串列埠庫。[LGPL3]
* [Libserial](https://github.com/crayzeewulf/libserial) - C++ 串列埠程式設計庫。[BSD-3-Clause]
* [Serial Communication Library](https://github.com/wjwwood/serial) - 使用 C++ 編寫的跨平臺串列埠庫。[MIT] [website](https://wjwwood.io/serial/)

## 排序

+ [cpp-sort](https://github.com/Morwenn/cpp-sort) - 面向 C++14 的排序演算法及相關工具。[MIT]
* [pdqsort](https://github.com/orlp/pdqsort) - 模式規避快速排序。[zlib]
* [Timsort](https://github.com/gfx/cpp-TimSort) - 模板化穩定排序函式，對於逆序或部分排序的資料，效能優於 std::sort 等基於快速排序的演算法。[MIT]
* [Indiesort](https://github.com/mattreecebentley/plf_indiesort) - 排序封裝器，可將 std::sort（及其他隨機訪問排序函式）用於非隨機訪問容器，還能提升隨機訪問容器和陣列中大型/不可平凡複製型別的排序效能。[zLib] [website](https://plflib.org/indiesort.htm)
* [x86-simd-sort](https://github.com/numpy/x86-simd-sort) - 用於高效能 SIMD 排序演算法的 C++ 模板庫。[BSD-3-Clause]

## 影片

* [libvpx](https://www.webmproject.org/code/) - VP8/VP9 編解碼器 SDK。[BSD]
* [FFmpeg](https://www.ffmpeg.org/) - 完整的跨平臺音影片錄製、轉換和流式傳輸解決方案。[LGPL2/GPL2]
* [avcpp](https://github.com/h4tr3d/avcpp) - FFmpeg 的現代 C++ 封裝。[MIT]
* [libde265](https://github.com/strukturag/libde265) - 開源 H.265 影片編解碼器實現。[LGPL] [website](https://www.libde265.org/)
* [x265](https://bitbucket.org/multicoreware/x265_git/src) - 開源 H.265 影片編解碼器實現。[GPL2] [website](https://x265.readthedocs.io/en/master/)
* [OpenH264](https://github.com/cisco/openh264) - 開源 H.264 編解碼器。[BSD] [website](https://www.openh264.org/)
* [Theora](https://www.theora.org/) - 免費開源影片壓縮格式。[BSD]
* [Vireo](https://github.com/twitter/vireo/) - Twitter 開發的輕量、多功能影片處理庫。[MIT]
* [libuvc](https://github.com/libuvc/libuvc) - USB 影片裝置跨平臺庫。[BSD]

## 虛擬機器

* [CarpVM](https://github.com/tekknolagi/carp) - 用 C 編寫的“有趣”虛擬機器。且看後續如何。[GPLv3]
* [MicroPython](https://github.com/micropython/micropython) - 旨在讓 Python 3.x 實現執行於微控制器。[MIT]
* [TinyVM](https://github.com/jakogut/tinyvm) - 使用純 ANSI C 編寫的小巧、快速、輕量級虛擬機器。[MIT]

## 網頁應用程式框架

* [aeronet](https://github.com/sjanel/aeronet) - 高效能模組化 C++ HTTP/1.1、HTTP/2 和 WebSocket 微服務框架，專注於效能和可擴充套件性。[MIT]
* [Civetweb](https://github.com/civetweb/civetweb) - 易用強大的可嵌入 C/C++ Web 伺服器，可選支援 CGI、SSL 和 Lua。[MIT]
* [C++ REST SDK](https://github.com/Microsoft/cpprestsdk) - Microsoft 專案，使用現代非同步 C++ API 設計，以原生程式碼實現雲端客戶端-伺服器通訊。[MIT]
* [CppCMS](https://cppcms.com/) - 免費高效能 Web 開發框架（並非 CMS）。[LGPLv3]
* [Crow](https://github.com/CrowCpp/Crow) - 用於執行 Web 服務的 C++ 微型框架，採用類似 Python Flask 的路由方式。[BSD] [website](https://crowcpp.org)
* [Cutelyst](https://github.com/cutelyst/cutelyst) - 基於 Qt 構建的 C++ Web 框架，採用 Catalyst（Perl）框架的簡潔方法。[BSD-3-Clause] [website](https://cutelyst.org/)
* [Drogon](https://github.com/an-tao/drogon) - 基於 C++17/20 的高效能 HTTP 應用框架。[MIT]
* [C++ wfrest](https://github.com/wfrest/wfrest) - C++ Web 框架 REST API。[Apache2]
* [facil.io](https://github.com/boazsegev/facil.io) - 事件驅動、高效能 C Web 框架，支援 HTTP、WebSocket、SSE 等。[MIT] [website](https://facil.io)
* [Kore](https://kore.io/) - 使用 C 開發、超快且靈活的 Web 伺服器/Web 應用框架。[ISC]
* [libOnion](https://www.coralbits.com/libonion/) - 幫助使用 C 語言建立 Web 伺服器的輕量庫。[LGPLv3]
* [lwan](https://github.com/lpereira/lwan) - 實驗性、可擴充套件的高效能 HTTP 伺服器。[GPL2]
* [Mach](https://github.com/machframework/mach) - 現代 C++20 Web 框架，專注於效能、型別安全和開發體驗。[MIT] [website](https://machframework.dev/).
* [oat++](https://github.com/oatpp/oatpp) - 輕量、零依賴框架，用於建立高效能 Web 服務。[Apache-2.0] [website](https://oatpp.io/)
* [Pistache](https://pistacheio.github.io/pistache/) - 使用純 C++11 編寫、無外部依賴的 C++ REST 框架。[Apache2]
* [QDjango](https://github.com/jlaine/qdjango/) - 使用 C++ 編寫、基於 Qt 庫構建的 Web 框架；儘可能遵循 django API，因此得名。[LGPL]
* [TreeFrog Framework](https://github.com/treefrogframework/treefrog-framework) - 基於 C++ 和 Qt 的高速全棧 Web 應用框架，支援 HTTP 和 WebSocket 協議（含物件關係對映）。[BSD] [website](https://www.treefrogframework.org/)
* [userver](https://github.com/userver-framework/userver) - 非同步 C++17 框架，提供豐富的抽象和資料庫驅動，可快速輕鬆地建立高效微服務、服務和實用工具。[Apache-2.0] [website](https://userver.tech/)
* [Wt](https://www.webtoolkit.eu/wt) - 用於開發 Web 應用的 C++ 庫。[GPL/Proprietary]
* [httpserver.h](https://github.com/jeremycw/httpserver.h) - C 語言單標頭檔案 HTTP 伺服器庫。[MIT]
* [libhttp](https://github.com/lammertb/libhttp) - 跨平臺 C/C++ HTTP 和 HTTPS 庫。[MIT]

## XML
*XML 真是垃圾。真的，沒有任何藉口。XML 對人類來說很難解析，對計算機而言也是場災難。根本沒有理由讓這種糟糕透頂的東西存在。——Linus Torvalds*

* [Boost.PropertyTree](https://github.com/boostorg/property_tree) - 屬性樹解析器/生成器，可用於解析 XML/JSON/INI/Info 檔案。[Boost] [website](https://boost.org/libs/property_tree)
* [Expat](https://www.libexpat.org/) - 使用 C 編寫的 XML 解析庫。[MIT]
* [Libxml2](https://xmlsoft.org/) - Gnome 的 XML C 語言解析器和工具包。[MIT]
* [libxml++](https://libxmlplusplus.sourceforge.net/) - C++ XML 解析器。[LGPL2]
* [Mini-XML](https://github.com/michaelrsweet/mxml) - 使用 ANSI C 編寫的小型 XML 解析庫。[LGPL2 with exceptions]
* [PugiXML](https://pugixml.org/) - 輕量、簡單快速且支援 XPath 的 C++ XML 解析器。[MIT]
* [RapidXml](https://rapidxml.sourceforge.net/) - 致力於打造儘可能快的 XML 解析器，同時保留易用性、可移植性和合理的 W3C 相容性。[Boost]
* [TinyXML](https://sourceforge.net/projects/tinyxml/) - 簡單、小巧、極簡的 C++ XML 解析器，可輕鬆整合到其他程式中。[zlib]
* [TinyXML2](https://github.com/leethomason/tinyxml2) - 簡單、小巧、高效的 C++ XML 解析器，可輕鬆整合到其他程式中。[zlib]
* [TinyXML++](https://github.com/rjpcomputing/ticpp) - 全新 TinyXML 介面，充分發揮 C++ 的諸多優勢：模板、異常和更好的錯誤處理。[MIT]
* [Xalan C](https://github.com/apache/xalan-c) - 庫和命令列程式，可使用符合 XSLT 1.0 標準的樣式錶轉換 XML 文件。[Apache-2.0] [website](https://xalan.apache.org/)
* [Xerces-C++](https://xerces.apache.org/xerces-c/) - 使用可移植 C++ 子集編寫的驗證型 XML 解析器。[Apache2]

## YAML

* [fkYAML](https://github.com/fktn-k/fkYAML) - C++ YAML 僅標頭檔案庫。[MIT]
* [LibCYAML](https://github.com/tlsa/libcyaml) - 用於讀寫 YAML 的 C 庫。[ISC]
* [libfyaml](https://github.com/pantoniou/libfyaml) - 精緻的 YAML 1.2 和 JSON 解析器/寫入器。[MIT]
* [LibYAML](https://github.com/yaml/libyaml) - 用於解析和輸出 YAML 的 C 庫。[MIT] [website](https://pyyaml.org/wiki/LibYAML)
* [mini-yaml](https://github.com/jimmiebergmann/mini-yaml) - 單標頭檔案 YAML 1.0 C++11 序列化器/反序列化器。[MIT]
* [rapidyaml](https://github.com/biojppm/rapidyaml) - Rapid YAML 是用於解析和輸出 YAML 的 C++ 庫。[MIT]
* [yaml-cpp](https://github.com/jbeder/yaml-cpp) - C++ YAML 解析器和輸出器。[MIT]

## 其他項目
*不屬於上述分類或尚未歸類的實用庫和工具*

* [access_profiler](https://github.com/arvidn/access_profiler) - 用於統計 C++ 程式成員變數訪問次數的工具。[GPL3]
* [American fuzzy lop](https://lcamtuf.coredump.cx/afl/) 又稱 afl-fuzz - 瘋狂的模糊測試工具，只需給它時間和最小示例輸入，就能自動發現錯誤。[Apache2]
* [Argon2](https://github.com/P-H-C/phc-winner-argon2) - 密碼雜湊演算法 Argon2，PHC 獲勝者。[CC0/Apache2]
* [AsmJit](https://github.com/asmjit/asmjit) - 低延遲機器碼生成。[Zlib] [website](https://asmjit.com)
* [Better String](https://bstring.sourceforge.net) - C 字串庫的替代方案，功能更豐富且不會出現緩衝區溢位問題，並提供 C++ 封裝。[BSD, GPL2]
* [Boost.Signals2](https://github.com/boostorg/signals2) - 託管式訊號與槽系統的實現。[Boost] [website](https://boost.org/libs/signals2)
* [casacore](https://code.google.com/p/casacore/) - 一組源自 aips++ 的 C++ 核心庫。[LGPL]
* [CCTZ](https://github.com/google/cctz) - C++ 庫，可使用時區規則在絕對時間和民用時間之間轉換。[Apache-2.0]
* [Cheat Sheets of HackingCPP](https://hackingcpp.com/cpp/cheat_sheets.html) - 關於演算法、檢視、容器、隨機數等內容的實用速查表和資訊圖。
* [Concord](https://github.com/Cogmasters/concord) - 使用 C 編寫的 Discord API 封裝庫。[MIT] [website](https://cogmasters.github.io/concord)
* [CPPItertools](https://github.com/ryanhaining/cppitertools) - 受 Python 內建函式和 itertools 庫啟發的基於範圍 for 迴圈擴充套件。[BSD-2-Clause]
* [CPP-JWT](https://github.com/arun11299/cpp-jwt) - C++ JSON Web Token 庫。[MIT]
* [cpp-lazy](https://github.com/MarcDirven/cpp-lazy) - 快速易用的 C++11/14/17/20 惰性求值庫。[MIT]
* [CRCpp](https://github.com/d-bahr/CRCpp) - 易用快速的 C++ CRC 庫。[BSD-3-Clause]
* [cxx-prettyprint](https://github.com/louisdx/cxx-prettyprint) - C++ 容器美化列印庫。[Boost]
* [date](https://github.com/HowardHinnant/date) - 基於 C++11/14/17 <chrono> 標頭檔案的日期和時間庫。[MIT] [website](https://howardhinnant.github.io/date/date.html)
* [D++ (DPP)](https://github.com/brainboxdotcc/DPP) - 用於建立 Discord 機器人的輕量、高效能、可擴充套件 C++ 庫。[Apache2] [website](https://dpp.dev)
* [Dragonbox](https://github.com/jk-jeon/dragonbox) - C++ 新型浮點數轉字串演算法的參考實現。[Apache2/BSL-1.0]
* [DynaMix](https://github.com/iboB/dynamix) - 可在執行時組合和修改物件的庫。[MIT]
* [emio](https://github.com/Viatorus/emio) - 安全快速的高層和底層字元輸入/輸出庫。[MIT]
* [faker-cxx](https://github.com/cieslarmichal/faker-cxx) - C++20 Faker 庫，用於生成虛構但逼真的測試和開發資料。[MIT]
* [fast_float](https://github.com/fastfloat/fast_float) - 快速、精確的 C++ from_chars，速度比 strtod 快 4 到 10 倍，已用於 GCC 12、Chromium、Redis、Webkit/Safari。[Apache2/BSL-1.0/MIT]
* [FastFormat](https://www.fastformat.org) - 受 log4j 和 Pantheios 啟發的快速、安全 C++ 格式化庫。[Simplified BSD]
* [fast_io](https://github.com/cppfastio/fast_io) - 顯著加速 C++20 輸入/輸出。[MIT]
* [fccf](https://github.com/p-ranav/fccf) - 命令列工具，可遞迴搜尋目錄並查詢與搜尋字串匹配的 C/C++ 原始碼。[MIT]
* [ffc.h](https://github.com/kolemannix/ffc.h) - C99 單標頭檔案加速浮點數/雙精度數解析器，是 fast_float 庫的移植版。[Apache-2.0/BSL-1.0/MIT]
* [{fmt}](https://github.com/fmtlib/fmt) :zap: - 小巧、安全、快速的 C++ 格式化庫。[Simplified BSD] [website](https://fmt.dev)
* [gcc-poison](https://github.com/leafsr/gcc-poison) - 簡單標頭檔案，幫助開發者禁止在應用中使用不安全的 C/C++ 函式。
* [Gear-Lib](https://github.com/gozfree/gear-lib) - 面向嵌入式和網路服務開發的一組 POSIX C 基礎庫。[MIT]
* [happly](https://github.com/nmwsharp/happly) - C++ PLY 檔案格式解析器，僅標頭檔案實現。輕鬆解析 .ply！[MIT]
* [hedley](https://github.com/nemequ/hedley) - C/C++ 標頭檔案，旨在消除一些平臺特定的麻煩。[website](https://nemequ.github.io/hedley/)
* [Hexi](https://github.com/EmberEmu/Hexi) - 二進位制流和序列化用的輕量 C++ 僅標頭檔案庫。[Apache-2.0/MIT]
* [HighwayHash](https://github.com/google/highwayhash) - 快速強健的雜湊函式：SipHash/HighwayHash。[Apache-2.0]
* [inja](https://github.com/pantor/inja) - 現代 C++ 模板引擎。[MIT]
* [Jinja2С++](https://github.com/jinja2cpp/Jinja2Cpp) - 幾乎完全相容的模板引擎實現。[website](https://jinja2cpp.github.io/)
* [jwt-cpp](https://github.com/Thalhammer/jwt-cpp) - 用於在 C++ 中建立和驗證 JSON Web Token 的僅標頭檔案庫。[MIT]
* [Kangaru](https://github.com/gracicot/kangaru) - 面向 C++11 和 C++14 的依賴注入容器。[MIT]
* [Klib](https://github.com/attractivechaos/klib) - 常見演算法和資料結構的小型輕量實現。[MIT]
* [KOMIHASH](https://github.com/avaneev/komihash) - 極快、高品質的雜湊函式，支援離散增量和流式雜湊。[MIT]
* [libcpuid](https://github.com/anrieff/libcpuid) - 用於 x86 CPU 檢測和特性提取的小型 C 庫。[BSD]
* [libenvpp](https://github.com/ph3at/libenvpp) - 現代 C++ 庫，可型別安全地解析環境變數。[Apache-2.0]
* [libevil](https://github.com/avati/libevil) - 邪惡許可證管理器。[GPLv3]
* [libnih](https://github.com/keybuk/libnih) - 輕量級 C 函式和結構體庫。[GPL2.1]
* [libONVIF](https://github.com/Privatehive/libONVIF) - 又一個 ONVIF 庫。[GPL-3.0]
* [libpopcnt](https://github.com/kimwalisch/libpopcnt) - 快速 C/C++ 位群計數庫。[BSD-2-Clause]
* [libsigc++](https://github.com/libsigcplusplus/libsigcplusplus) - 標準 C++ 型別安全回撥系統。[LGPL] [website](https://libsigcplusplus.github.io/libsigcplusplus)
* [libusb](https://libusb.info/) - 通用 USB 庫，可移植地訪問 USB 裝置。[LGPL2]
* [Mach7](https://github.com/solodon4/Mach7) - C++ 模式匹配庫。[BSD]
* [minja.hpp](https://github.com/google/minja) - 面向 LLM 聊天模板的極簡 C++ Jinja 模板引擎。[MIT]
* [mio](https://github.com/mandreyel/mio) - 跨平臺 C++11 記憶體對映檔案 I/O 僅標頭檔案庫。[MIT]
* [MPark.Variant](https://github.com/mpark/variant) - 面向 C++11/14/17 的 C++17 `std::variant`。[BSL-1.0]
* [MPH](https://github.com/qlibs/mph) - C++20 [Minimal] 靜態完美雜湊庫。[MIT]
* [Patternia](https://github.com/sentomk/patternia) - 為現代 C++ 提供模式匹配。[MIT] [website](https://patternia.tech/)
* [PEGTL](https://github.com/taocpp/PEGTL) - 解析表示式文法模板庫。[MIT]
* [Pipes](https://github.com/joboccara/pipes) - 用於編寫富有表現力的 C++ 集合處理管道。[MIT]
* [pprint](https://github.com/p-ranav/pprint) - 現代 C++ 美化列印庫。[MIT]
* [pspsdk](https://github.com/pspdev/pspsdk) - PSP 自制軟體開發開源 SDK。[BSD/GNU GPL3]
* [QtVerbalExpressions](https://github.com/VerbalExpressions/QtVerbalExpressions) - 基於 C++ VerbalExpressions 庫的 Qt 庫。[MIT]
* [rain](https://github.com/DOSAYGO-Research/rain) - 速度最快的 128 位和 256 位非加密雜湊，透過所有測試，原始碼不足 140 行。[Apache-2.0]
* [RapidFuzz](https://github.com/rapidfuzz/rapidfuzz-cpp) - 使用 Levenshtein 距離在 C++ 中快速進行模糊字串匹配。[MIT] [website](https://rapidfuzz.github.io/rapidfuzz-cpp/)
* [rapidhash](https://github.com/Nicoshev/rapidhash) - 極快、高品質、平臺無關的雜湊演算法。[BSD-2-Clause]
* [Reaction](https://github.com/lumia431/reaction) - 利用現代 C++20 特性構建高效資料流應用的輕量級僅標頭檔案響應式程式設計框架。[MIT]
* [reproc](https://github.com/DaanDeMeyer/reproc) - 跨平臺（C99/C++11）程序庫。[MIT]
* [SafetyHook](https://github.com/cursey/safetyhook) - C++23 函式鉤子庫。[BSL-1.0]
* [scnlib](https://github.com/eliaskosunen/scnlib) - 面向現代 C++ 的 scanf。[Apache-2.0] [website](https://v1.scnlib.dev/)
* [Scintilla](https://scintilla.org/) - 免費原始碼編輯元件。[MIT]
* [SDS](https://github.com/antirez/sds) - C 語言簡單動態字串庫。[BSD]
* [semver.c](https://github.com/h2non/semver.c) - ANSI C 語義化版本解析器和渲染器。[MIT]
* [sigslot](https://sigslot.sourceforge.net/) - C++ 訊號/槽庫。[PublicDomain]
* [SIMD Everywhere](https://github.com/simd-everywhere/simde) - 為原生不支援 SIMD 指令集的系統提供其實現。[MIT]
* [SLJIT](https://github.com/zherczeg/sljit) - 平臺無關的底層 JIT 編譯器。[BSD] [website](https://zherczeg.github.io/sljit/)
* [palacaze/sigslot](https://github.com/palacaze/sigslot) - 簡單的 C++14 訊號槽僅標頭檔案實現。[MIT]
* [simdzone](https://github.com/NLnetLabs/simdzone) - 快速且符合標準的 DNS 區域解析器。[BSD-3-Clause]
* [SimpleSignal](https://github.com/larspensjo/SimpleSignal) - 高效能 C++11 訊號庫。[PublicDomain]
* [single_file_libs](https://github.com/r-lyeh/single_file_libs) - 依賴極少的 C/C++ 開源庫。[Various]
* [Spicy](https://github.com/zeek/spicy) - 用於解析協議和檔案的 C++ 解析器生成器。[BSD] [website](https://docs.zeek.org/projects/spicy/en/latest/)
* [Stage](https://github.com/rtv/Stage) - 移動機器人模擬器。[GPL2]
* [stb](https://github.com/nothings/stb) :zap: - 一系列 C/C++ 單檔案庫。[PublicDomain]
* [stdman](https://github.com/jeaye/stdman) - 工具，可解析 [cppreference](https://cppreference.com) 的歸檔 HTML 檔案，併為類 Unix 系統生成 groff 格式的手冊頁。[MIT]
* [StringZilla](https://github.com/ashvardanian/StringZilla) - 字串庫中的哥斯拉，拆分、排序和打亂大型文字資料集的速度快到你還沒來得及說出“東京塔”。[Apache-2.0]
* [StrTk](https://www.partow.net/programming/strtk/index.html) - 包含高效能字串處理例程的 C++ 庫。[MIT]
* [tgbotxx](https://github.com/baderouaich/tgbotxx) - Telegram Bot C++ 庫。[MIT]
* [The RaBitQ Library](https://github.com/VectorDB-NTU/RaBitQ-Library) - RaBitQ 演算法輕量級庫。[Apache-2.0] [website](https://vectordb-ntu.github.io/RaBitQ-Library/)
* [tiny::optional](https://github.com/Sedeniono/tiny-optional/) - std::optional 的替代品，不會造成不必要的記憶體浪費。[BSL-1.0]
* [Tulip Indicators](https://tulipindicators.org) - 包含 100 多種金融技術分析指標的 C 庫。[LGPL]
* [ub-canaries](https://github.com/regehr/ub-canaries) - 一組試圖誘使編譯器利用未定義行為的 C/C++ 程式。
* [value-category-cheatsheet](https://github.com/jeaye/value-category-cheatsheet) 左值、右值等概念的 PDF 速查表。[Jank copyleft]
* [VarTypes](https://github.com/szi/vartypes) - 功能豐富的物件導向框架，用於在 C++/Qt4 中管理變數。[LGPL]
* [Wildcards](https://github.com/zemasoft/wildcards/) - 使用萬用字元匹配的簡單 C++ 模板僅標頭檔案庫。[BSL-1.0]
* [xjb](https://github.com/xjb714/xjb) - 快速浮點數轉字串演算法。[Apache-2.0]
* [xxHash](https://github.com/Cyan4973/xxHash) - 極快的非加密雜湊演算法。[BSD-2-Clause] [website](https://xxhash.com/)
* [xxhash_cpp](https://github.com/RedSpah/xxhash_cpp) - xxhash 庫的 C++17 移植版。[BSD-2-Clause]
* [ZBar](https://zbar.sourceforge.net/) - 條形碼掃描庫，可掃描照片/影象/影片流中的條形碼並返回其值。[LGPL2]
* [ZXing](https://github.com/zxing/zxing/) - 使用 Java 實現的開源多格式一維/二維條碼影象處理庫，並移植到其他語言。[Apache]
* [spy](https://github.com/jfalcou/spy) - C++17 constexpr 庫，可在編譯期檢測作業系統、編譯器、架構和 SIMD。[MIT]
* [licensepp](https://github.com/amrayn/licensepp) - C++ 專案軟體許可證管理庫。[Apache-2.0]
* [tinydir](https://github.com/cxong/tinydir) - 輕量、可移植且易於整合的 C 目錄和檔案讀取器。[BSD-2-Clause]
* [Cello](https://github.com/orangeduck/Cello) - C 高階程式設計支援，包括泛型資料結構和多型。[BSD-2-Clause] [website](https://libcello.org/)
* [dyno](https://github.com/ldionne/dyno) - 支援值語義執行時多型的 C++ 庫。[Boost]
* [PolyHook](https://github.com/stevemk14ebr/PolyHook) - C++ x86/x64 鉤子庫。[MIT]
* [Verdigris](https://github.com/woboq/verdigris) - 僅標頭檔案庫，無需 moc 即可使用 Qt。[MIT]
* [Flicks](https://github.com/OculusVR/Flicks) - Facebook/Oculus 定義的時間單位，可精確表示常見幀率。[BSD]
* [Linq](https://github.com/pfultz2/Linq) - 為 C++ 列表推導提供 LINQ 語法。[Boost]
* [libcorrect](https://github.com/quiet/libcorrect) - 卷積碼和 Reed-Solomon 糾錯 C 庫。[BSD-3-Clause]
* [libfsm](https://github.com/katef/libfsm) - 用於構建和執行有限狀態機的庫，包括正規表示式和 glob。[BSD-2-Clause]
* [origin](https://github.com/asutton/origin) - 用於概念、診斷和其他基礎實用功能的 C++ 庫。

# 軟體
*用於建立開發環境的軟體。*

## 編譯器
*C 或 C++ 編譯器列表*

* [8cc](https://github.com/rui314/8cc) - 小型 C 編譯器。
* [c](https://github.com/ryanmjacobs/c) - 一次性編譯並執行 C“指令碼”！[MIT]
* [Clang](https://clang.llvm.org/) - LLVM 的 C 編譯器。支援 C++11/14/1z、C11，由 LLVM 團隊開發。[NCSA]
* [Fil-C](https://fil-c.org/) - 極致相容的 C 和 C++ 記憶體安全實現。
* [GCC](https://gcc.gnu.org/) - GNU 編譯器套件。支援 C++11/14/1z、C11 和 OpenMP。[GNU GPL3]
* [PCC](https://github.com/IanHarvey/pcc) - 非常古老的 C 編譯器，支援 C99。
* [AMD C++ Compiler](https://www.amd.com/en/developer/aocc.html) - 由 AMD 開發。
* [Intel C++ Compiler](https://software.intel.com/en-us/c-compilers) - 由 Intel 開發。
* [LLVM](https://llvm.org/) - 模組化、可複用的編譯器和工具鏈技術集合。
* [Microsoft Visual C++](https://docs.microsoft.com/en-us/cpp/dotnet/dotnet-programming-with-cpp-cli-visual-cpp?view=msvc-160) - Microsoft 開發的 MSVC。
* [Open WatCom](https://github.com/open-watcom) - Watcom C、C++ 和 Fortran 交叉編譯器及工具。[Sybase Open Watcom Public License]
* [Oracle Solaris Studio](https://www.oracle.com/technetwork/server-storage/solarisstudio/overview/index.html) - 面向 SPARC 和 x86 的 C、C++ 和 Fortran 編譯器，支援 C++11，可用於 Linux 和 Solaris。[OTN Developer License]
* [TCC](https://bellard.org/tcc/) - Tiny C 編譯器。[LGPL]
* [sierra](https://sierra-lang.github.io/) - 面向 CISC、專注於建立易維護程式的程式語言。
* [movfuscator](https://github.com/xoreaxeaxeax/movfuscator) - 單指令 C 編譯器，可將程式編譯為僅包含 mov 指令。[MIT]

## 線上編譯器
*線上 C 或 C++ 編譯器列表*

* [codechef](https://www.codechef.com/ide) - CodeChef 簡易線上編譯器。
* [coliru](https://coliru.stacked-crooked.com/) - 支援多種 C++ 編譯器的線上編譯器/命令列。
* [Compiler Explorer](https://gcc.godbolt.org/) - 可檢視彙編輸出的互動式編譯器。
* [CompileOnline](https://www.tutorialspoint.com/codingground.htm) - 在 Linux 上線上編譯和執行 C++。
* [Ideone](https://ideone.com/) - 線上編譯器和除錯工具，可編譯原始碼並線上執行 60 多種程式語言。
* [OneCompiler](https://onecompiler.com/) - 支援 70 多種程式語言和資料庫系統的線上編譯器。
* [Programiz](https://www.programiz.com/cpp-programming/online-compiler) - 面向學習者和開發者的線上編譯器。
* [repl.it](https://repl.it) - 為教育者、學習者和開發者提供強大而簡單的工具與平臺。
* [Rextester](https://rextester.com/runcode) - 線上編譯器，提供多種編譯器（Clang、GCC、MSVC）和編輯器。
* [Try It Online](https://tio.run/) - TIO 是一系列線上直譯器，支援不斷擴充套件的實用和娛樂性程式語言。
* [Wandbox](https://wandbox.org) - 可使用 Boost 的線上 Clang/GCC 編譯器。
* [paiza.io](https://paiza.io/en) - 線上 C/C++ 編譯器，支援多檔案、GitHub（gist）整合和協作編輯。
* [InterviewBit](https://www.interviewbit.com/online-cpp-compiler/) - 簡單易用的線上 C++ 編譯器。

## 偵錯器
*C 或 C++ 偵錯程式列表*

* [Comparison of debuggers](https://en.wikipedia.org/wiki/Comparison_of_debuggers) - Wikipedia 上的偵錯程式列表。
* [GDB](https://www.gnu.org/software/gdb/) - GNU 偵錯程式。
* [LLDB](https://lldb.llvm.org/) - LLDB 偵錯程式。
* [Metashell](https://metashell.readthedocs.org) - 互動式模板超程式設計 shell，包含 MDB 元偵錯程式。
* [Valgrind](https://valgrind.org/) - 記憶體除錯、記憶體洩漏檢測和效能分析工具。
* [x64dbg](https://x64dbg.com/) - Windows 開源 x64/x32 偵錯程式。

## 整合式開發環境
*C 或 C++ 常用 IDE 列表。*

* [Anjuta DevStudio](https://sourceforge.net/projects/anjuta/) - GNOME IDE。[GPL3]
* [AppCode](https://www.jetbrains.com/objc/) - 基於 JetBrains IntelliJ IDEA 平臺構建的 Objective-C、C、C++ 和 JavaScript 開發 IDE。
* [Cevelop](https://www.cevelop.com) - 基於 Eclipse CDT 並附帶額外外掛的跨平臺 C 和 C++ IDE。
* [CLion](https://www.jetbrains.com/clion/) - JetBrains 推出的跨平臺 C 和 C++ IDE。
* [Code::Blocks](https://www.codeblocks.org/) - 免費的 C、C++ 和 Fortran IDE。
* [CodeLite](https://codelite.org/) - 另一款免費跨平臺 C 和 C++ IDE。[GPL2，外掛除外]
* [Dev-C++](https://sourceforge.net/projects/orwelldevcpp/) - 可移植 C/C++/C++11 IDE。
* [Eclipse CDT](https://www.eclipse.org/cdt/) - 基於 Eclipse 平臺的全功能 C 和 C++ IDE。
* [Embarcadero Dev-CPP](https://github.com/Embarcadero/Dev-Cpp) - Dev-C++ 的一個分支，預裝新主題和現代編譯器。[GPLv2] [website](https://www.embarcadero.com/free-tools/dev-cpp)
* [Geany](https://www.geany.org/) - 小巧、快速、跨平臺 IDE。[GPL]
* [IBM VisualAge](https://www-03.ibm.com/software/products/en/visgen) - IBM 的一系列計算機整合開發環境。
* [Irony-mode](https://github.com/Sarcasm/irony-mode) - 由 libclang 驅動的 Emacs C/C++ 次要模式。
* [juCi++](https://gitlab.com/cppit/jucipp) - 整合 libclang 的跨平臺輕量級 C++ IDE。[MIT]
* [KDevelop](https://www.kdevelop.org/) - 免費開源 IDE。
* [Microsoft Visual Studio](https://www.visualstudio.com/) - Microsoft IDE。
* [Microsoft Visual Studio Code](https://github.com/microsoft/vscode) :zap: - Microsoft 開源 IDE。[MIT] [website](https://code.visualstudio.com)
* [NetBeans](https://netbeans.org/) - 主要用於 Java 開發、也支援其他語言（尤其是 PHP、C/C++ 和 HTML5）的 IDE。
* [Qt Creator](https://github.com/qt-creator/qt-creator) :zap: - Qt SDK 的一部分，是跨平臺 C++、JavaScript 和 QML IDE。[GPL3 with exceptions] [website](https://www.qt.io/product/development-tools)
* [rtags](https://github.com/Andersbakken/rtags) - 基於 clang、可與 Emacs 整合的 C/C++ 客戶端/伺服器索引器。
* [Xcode](https://developer.apple.com/xcode/) - 由 Apple 開發。
* [YouCompleteMe](https://github.com/ycm-core/YouCompleteMe) - Vim 的快速即時模糊搜尋程式碼補全引擎。
* [C Playground - Online C Programming IDE](https://programiz.pro/ide/c) - 線上 C 程式設計 IDE，可線上編寫、編輯和執行程式碼。

## 建置系統

* [awesome-cmake](https://github.com/onqtam/awesome-cmake) - 精選的 CMake 指令碼、模組和資源列表。
* [Bazel](https://bazel.build) - Google 開發的快速、可擴充套件多語言構建系統。[Apache]
* [Bear](https://github.com/rizsotto/Bear) - 為 clang 工具生成編譯資料庫的工具。[GPLv3]
* [Buck](https://github.com/facebook/buck) - Facebook 開發並使用的快速構建系統，鼓勵在包括 C++ 在內的多種平臺和語言上建立小型可複用模組。使用 Java 編寫。[Apache]
* [build2](https://build2.org/) - 用於開發和打包 C/C++ 專案的跨平臺構建、打包和依賴管理工具鏈。[MIT]
* [Ccache](https://ccache.dev/) - 快速 C/C++ 編譯器快取。[GPLv3]
* [clib](https://github.com/clibs/clib) - C 語言包管理器。[MIT]
* [CMake](https://cmake.org/) - 跨平臺免費開源軟體，使用與編譯器無關的方法管理軟體構建過程。[BSD]
* [Cget](https://github.com/pfultz2/cget) - CMake 軟體包獲取工具。[Boost] [website](https://cget.readthedocs.io)
* [Conan](https://conan.io/) - 開源 C/C++ 包管理器。[MIT]
* [CPM](https://github.com/iauns/cpm) - 基於 CMake 和 Git 的 C++ 包管理器。
* [FASTBuild](https://www.fastbuild.org/docs/home.html) - 高效能開源構建系統，支援高度可擴充套件編譯、快取和網路分發。
* [Hunter](https://www.github.com/ruslo/hunter) - 由 CMake 驅動的跨平臺 C++ 包管理器。[BSD-2]
* [MesonBuild](https://mesonbuild.com) - 開源構建系統，目標是極快，更重要的是儘可能易用。
* [Ninja](https://ninja-build.org/) - 注重速度的小型構建系統。
* [Sccache](https://github.com/mozilla/sccache) - 快速 C/C++ 編譯器快取，支援跨平臺和雲端儲存。
* [Scons](https://www.scons.org/) - 使用 Python 指令碼配置的軟體構建工具。
* [Sconsolidator](https://github.com/IFS-HSR/SConsolidator) - Eclipse CDT 的 Scons 構建系統整合。
* [Spack](https://spack.io/) - 靈活的包管理器，支援多個版本、配置、平臺和編譯器。[Apache-2.0/MIT]
* [SW](https://software-network.org/) - 跨平臺 C++（及其他語言）構建系統和包管理器，提供大量軟體包。[GPLv3]
* [tundra](https://github.com/deplinenoise/tundra) - 高效能程式碼構建系統，旨在為大型軟體專案提供儘可能快的增量構建時間。
* [tup](https://gittup.org/tup/) - 基於檔案的構建系統，可在後臺監視檔案變更。
* [Premake](https://premake.github.io) - 使用 Lua 指令碼配置的工具，可為 Windows、Mac OS X 和 Linux 生成 Visual Studio、GNU Make、Xcode、Code::Blocks 等專案檔案。
* [Vcpkg](https://github.com/microsoft/vcpkg) - 面向 Windows、Linux 和 MacOS 的 C++ 庫管理器。[MIT]
* [waf](https://gitlab.com/ita1024/waf) - 基於 Python 的應用配置、編譯和安裝框架。[BSD] [website](https://waf.io/)
* [XMake](https://xmake.io/) - 基於 Lua 的 C/C++ 跨平臺構建工具，整合包管理器 xrepo。[Apache]
* [boost-cmake](https://github.com/Orphis/boost-cmake) - Boost 庫的 CMake 模組。[BSD-3-Clause]
* [cmake-examples](https://github.com/pr0g/cmake-examples) - 針對各種場景的實用 CMake 示例集合。[MIT]

## 靜態程式碼分析
*透過程式碼分析提升質量、減少缺陷的工具列表*

* [Cppcheck](https://cppcheck.sourceforge.net/) - C/C++ 程式碼靜態分析工具。[原始碼](https://github.com/danmar/cppcheck)
* [CppDepend](https://www.cppdepend.com/) - 透過分析和視覺化程式碼依賴、定義設計規則、執行影響分析以及比較不同版本，簡化複雜 C/C++ 程式碼庫的管理。
* [cpplint](https://github.com/cpplint/cpplint) - 遵循 Google C++ 風格指南的 C++ 風格檢查器。
* [PVS-Studio](https://www.viva64.com/en/pvs-studio/) - 用於檢測 C、C++ 和 C# 程式原始碼錯誤的工具。
* [cpp-dependencies](https://github.com/tomtom-international/cpp-dependencies) - 檢查 C++ #include 依賴的工具（以 .dot 格式生成依賴圖）。[Apache]
* [include-what-you-use](https://github.com/include-what-you-use/include-what-you-use) - 與 clang 配合使用、分析 C 和 C++ 原始檔包含項的工具。[website](https://include-what-you-use.org/)
* [Infer](https://github.com/facebook/infer) - Java、C 和 Objective-C 靜態分析器。[BSD]
* [OCLint](https://oclint.org/) - 用於提升 C、C++ 和 Objective-C 程式碼質量並減少缺陷的靜態原始碼分析工具。[原始碼](https://github.com/oclint/oclint)
* [Clang Static Analyzer](https://clang-analyzer.llvm.org/index.html) - 用於查詢 C、C++ 和 Objective-C 程式錯誤的原始碼分析工具。
* [Linticator](https://linticator.com) - Eclipse CDT 對 Pc-/FlexeLint 的整合。
* [IKOS](https://github.com/NASA-SW-VnV/ikos) - 基於抽象解釋理論的 C/C++ 靜態分析器。[NOSA 1.3]
* [List of tools for static code analysis](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis#C.2FC.2B.2B) - Wikipedia 上的靜態程式碼分析工具列表。
* [OptView2](https://github.com/OfekShilon/optview2) - 檢查 Clang 遺漏的最佳化。
* [Trunk](https://trunk.io) - 用於檢查、測試、合併和監控程式碼的工具包。
* [CodeCompass](https://github.com/Ericsson/CodeCompass) - 面向大型 C/C++ 專案的開原始碼理解工具。[GPL-3.0]
* [CodeChecker](https://github.com/Ericsson/codechecker) - Clang Static Analyzer 和 Clang-Tidy 的分析工具、缺陷資料庫和檢視器擴充套件。[Apache-2.0]

## 程式碼風格工具

* [Artistic Style](https://astyle.sourceforge.net/) - 用於格式化 C/C++/C#/Obj-C/Java 程式碼的工具，也稱 astyle。
* [ClangFormat](https://clang.llvm.org/docs/ClangFormat.html) - 用於格式化 C/C++/Obj-C 程式碼的工具。
* [Clang-Tidy](https://clang.llvm.org/extra/clang-tidy.html) - 基於 Clang 的 C++ 程式碼檢查工具。
* [EditorConfig](https://editorconfig.org/) - 幫助在不同編輯器和 IDE 之間保持一致的編碼風格。
* [Uncrustify](https://github.com/uncrustify/uncrustify) - 程式碼美化工具。

# 資源
*用於提升 C++ 開發技能和知識的書籍、網站、文章等各類資源。*

## API 設計

* [Beautiful Native Libraries](https://lucumr.pocoo.org/2013/8/18/beautiful-native-libraries/)
* [Designing Qt-Style C++ APIs](https://doc.qt.io/archives/qq/qq13-apis.html)

## 文章
*精彩的 C++ 相關文章。*

* [CppCon 2023 Presentation Materials](https://github.com/CppCon/CppCon2023) - CppCon 2023 演講資料。
* [CppCon 2022 Presentation Materials](https://github.com/CppCon/CppCon2022) - CppCon 2022 演講資料。
* [CppCon 2021 Presentation Materials](https://github.com/CppCon/CppCon2021) - CppCon 2021 演講資料。
* [CppCon 2020 Presentation Materials](https://github.com/CppCon/CppCon2020) - CppCon 2020 演講資料。
* [CppCon 2019 Presentation Materials](https://github.com/CppCon/CppCon2019) - CppCon 2019 演講資料。
* [CppCon 2018 Presentation Materials](https://github.com/CppCon/CppCon2018) - CppCon 2018 演講資料。
* [CppCon 2017 Presentation Materials](https://github.com/CppCon/CppCon2017) - CppCon 2017 演講資料。
* [CppCon 2016 Presentation Materials](https://github.com/CppCon/CppCon2016) - CppCon 2016 演講資料。
* [CppCon 2015 Presentation Materials](https://github.com/CppCon/CppCon2015) - CppCon 2015 演講資料。
* [CppCon 2014 Presentation Materials](https://github.com/CppCon/CppCon2014) - CppCon 2014 演講資料。
* [C++Now 2023 Presentations](https://github.com/boostcon/cppnow_presentations_2023) - C++Now 2023 的演講資料。
* [C++Now 2022 Presentations](https://github.com/boostcon/cppnow_presentations_2022) - C++Now 2022 的演講資料。
* [C++Now 2021 Presentations](https://github.com/boostcon/cppnow_presentations_2021) - C++Now 2021 的演講資料。
* [C++Now 2019 Presentations](https://github.com/boostcon/cppnow_presentations_2019) - C++Now 2019 的演講資料。
* [C++Now 2018 Presentations](https://github.com/boostcon/cppnow_presentations_2018) - C++Now 2018 的演講資料。
* [C++Now 2017 Presentations](https://github.com/boostcon/cppnow_presentations_2017) - C++Now 2017 的演講資料。
* [C++Now 2016 Presentations](https://github.com/boostcon/cppnow_presentations_2016) - C++Now 2016 的演講資料。
* [C++Now 2015 Presentations](https://github.com/boostcon/cppnow_presentations_2015) - C++Now 2015 的演講資料。
* [C++Now 2014 Presentations](https://github.com/boostcon/cppnow_presentations_2014) - C++Now 2014 的演講資料。
* [C++Now 2013 Presentations](https://github.com/boostcon/cppnow_presentations_2013) - C++Now 2013 的演講資料。
* [C++Now 2012 Presentations](https://github.com/boostcon/cppnow_presentations_2012) - C++Now 2012 的演講資料。
* [cpp17_in_TTs](https://github.com/tvaneerd/cpp17_in_TTs) - C++17 特性的介紹，大多以“Tony 表格”的形式展示。
* [All C++20 core language features with examples](https://oleksandrkvl.github.io/2021/04/02/cpp-20-overview.html) - 所有 C++20 核心語言特性的參考資料及示例。
* [Memory Footprint of GUI Toolkits](https://szibele.com/memory-footprint-of-gui-toolkits/) - 多種 GUI 工具包記憶體佔用的比較。
* [C++ UI Libraries](https://philippegroarke.com/posts/2018/c++_ui_solutions/) - 全面的 C++ UI 解決方案列表。
* [C++ Compilation](https://github.com/green7ea/cpp-compilation) - C++ 編譯過程簡述。
* [Books on C++17](https://blogs.msdn.microsoft.com/vcblog/2018/09/25/books-on-c17/) - C++17 相關書籍列表。
* [modern-cpp-features](https://github.com/AnthonyCalandra/modern-cpp-features) - 現代 C++ 語言和庫特性速查表。
* [Choosing Some C++ Over C](https://medium.com/@davidtstrauss/choosing-some-c-over-c-f5acb3dce4f5) - 何時使用 C++ 而非 C 的文章。
* [C++ 17 Features](https://www.bfilipek.com/2017/01/cpp17features.html) - 全面的 C++17 特性列表。
* [Master C Programming with Open Source Books](https://www.ossblog.org/master-c-programming-with-open-source-books/) - 精選的 C 程式設計開源學習書籍列表。

## 書籍
*精彩的 C 或 C++ 相關書籍。*

* [List of Free C or C++ Books](https://github.com/fffaraz/awesome-cpp/blob/master/books.md)
* [Free C Books](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#c) - vhf/free-programming-books/C。
* [Free C++ Books](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#cpp) - vhf/free-programming-books/C++。
* [Practical Guide to Bare Metal C++](https://github.com/arobenko/bare_metal_cpp)
* [cppbestpractices](https://github.com/lefticus/cppbestpractices) - 協作整理的 C++ 最佳實踐合集。

## 程式碼標準

* [Cert C++](https://resources.sei.cmu.edu/downloads/secure-coding/assets/sei-cert-cpp-coding-standard-2016-v01.pdf)
* [Misra C++ 2008](https://www.cppdepend.com/misra-cpp)
* [Autosar C++ 2014](https://www.autosar.org/fileadmin/standards/R21-11/AP/AUTOSAR_RS_CPP14Guidelines.pdf)
* [F-35 Fighter Jet's C++ Coding Standards](https://www.stroustrup.com/JSF-AV-rules.pdf)

## 程式碼風格

* [C++ Core Guidelines](https://github.com/isocpp/CppCoreGuidelines) - 由 C++ 作者審閱的“官方” C++ 指南。
* [C++ Dos and Don'ts](https://www.chromium.org/developers/coding-style/cpp-dos-and-donts) - Chromium 專案 > 面向開發者 > 編碼風格 > C++ 應做與不應做。
* [google-styleguide](https://github.com/google/styleguide) - Google 發起的開源專案風格指南。
* [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html)
* [GNU Coding Standard](https://www.gnu.org/prep/standards/standards.html)
* [Linux kernel coding style](https://www.kernel.org/doc/Documentation/process/coding-style.rst)
* [LLVM Coding Standards](https://llvm.org/docs/CodingStandards.html)

## Podcast

* [CppCast](https://cppcast.com) - 第一個由 C++ 開發者為 C++ 開發者製作的播客。
* [CppChat](https://cpp.chat) -（有時）每週與社群嘉賓聊聊 C++ 世界動態。

## 演講

* [C++ Conferences](https://github.com/eoan-ermine/cpp-conferences) - C++ 會議目錄
* [CppCon Talks](https://www.youtube.com/user/CppCon/videos) :zap: - C++ 會議演講。
* [Quick game development with C++11/C++14](https://github.com/SuperV1234/cppcon2014) - Vittorio Romeo 在 CppCon 2014 的演講。
* [Presentation on Hana for C++Now 2015](https://github.com/ldionne/hana-cppnow-2015)
* [Meeting Cpp](https://www.youtube.com/user/MeetingCPP/videos) - Meeting C++ YouTube 頻道

## 影片
*精彩的 C 或 C++ 相關影片。*

* [List of C or C++ YouTube Videos](https://github.com/fffaraz/awesome-cpp/blob/master/videos.md)
* [Awesome C Programming Tutorials in Hi Def [HD]](https://www.youtube.com/playlist?list=PLCB9F975ECF01953C) - 面向初學者和新程式設計師的詳細 C 語言教程合集。
* [C++](https://www.youtube.com/playlist?list=PL2F919ADECA5E39A6) - VoidRealms 製作。
* [C++ Qt Programming](https://www.youtube.com/playlist?list=PL2D1942A4688E9D63) - VoidRealms 製作。
* [C++ Programming Tutorials Playlist](https://www.youtube.com/playlist?list=PLAE85DE8440AA6B83) - TheNewBoston 官方 Buckys C++ 程式設計教程播放列表。
* [C++ Programming Tutorials from thenewboston](https://www.youtube.com/playlist?list=PLF541C2C1F671AEF6) - 彙集 thenewboston 的所有 C++ 程式設計教程。
* [C++ GUI with Qt Playlist](https://www.youtube.com/playlist?list=PLD0D54219E5F2544D) - thenewboston C++ Qt GUI 教程官方播放列表。
* [Caleb Curry's C Programming Tutorials](https://www.youtube.com/playlist?list=PL_c9BZzLwBRKKqOc9TJz1pP0ASrxLMtp2) - C 程式設計教程完整播放列表。
* [C Programming Tutorials](https://www.youtube.com/playlist?list=PL78280D6BE6F05D34) - TheNewBoston 的所有 C 程式設計教程都在這裡。
* [Bo Qian's playlist](https://www.youtube.com/user/BoQianTheProgrammer/playlists) - Boost 庫、C++ 標準庫、現代 C++、高階 C++、高階 STL 等。
* [The Cherno's C++ Playlist](https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb) - The Cherno 製作的大型 C++ 教程系列。
* [Code for Yourself C++ Playlist](https://www.youtube.com/playlist?list=PLwhKb0RIaIS1sJkejUmWj-0lk7v_xgCuT) - 完整 C++ 課程，涵蓋從基礎知識到軟體設計的所有內容。

## 網站
*實用的 C 或 C++ 相關網站。*

* [Standard C++](https://isocpp.org/) :zap: - 標準 C++ 新聞、動態和討論。
* [Build Bench](https://build-bench.com/) - 比較 C++ 構建。
* [Quick Bench](https://quick-bench.com/) - 快速 C++ 基準測試。
* [CppCon](https://cppcon.org/) - C++ 大會。
* [C++ reference](https://cppreference.com) - C 和 C++ 語言及標準庫的完整線上參考。
* [cppstat](https://cppstat.dev) - 以易於理解的方式列出 C++ 特性及編譯器和標準庫實現支援情況的網站。
* [C++ by Example](https://www.cbyexample.com/) - 透過示例學習 C++。
* [cplusplus.com](https://www.cplusplus.com/) - C++ 資源網路。
* [C FAQ](https://c-faq.com/) - C 常見問題。
* [C++ FAQ](https://www.parashift.com/c++-faq/) - C++ 常見問題。
* [C++ FQA Lite](https://yosefk.com/c++fqa/) - C++ 常被問到的問題及解答。
* [C++ Quiz](https://cppquiz.org) - 可用於測試 C++ 程式語言知識的簡單線上問答。
* [Guru of the Week](https://www.gotw.ca/gotw/) - Herb Sutter 建立並撰寫的常規 C++ 程式設計問題系列。
* [Meeting C++](https://meetingcpp.com/)
* [PVS-Studio’s challenge](https://quiz.pvs-studio.com) - PVS-Studio 的 C++ 問答，要求你找出開源專案程式碼片段中的錯誤。
* [Udemy C++ Courses and Tutorials](https://www.udemy.com/topic/c-plus-plus/)
* [C++ Hints](https://cpphints.com/) - PVS-Studio 團隊每個工作日提供最常見 C++ 錯誤及解決方法的提示。
* [C++ tutorial](https://hackr.io/tutorials/learn-c-plus-plus) - 使用者投票排名的線上教程平臺，提供多種 C++ 學習課程。
* [C++ Tutorial for Beginners](https://www.scaler.com/topics/cpp) - 由訓練有素的專家精選的全面 C++ 教程。
* [C++ for yourself](https://github.com/cpp-for-yourself) - 全面的現代 C++ 教程，涵蓋從基礎知識到軟體設計的所有內容。
* [CompileBytes C++ Compiler](https://www.compilebytes.com/tools/cpp) – 線上 C++ 編譯器和互動式程式碼執行環境。
* [C++ Resources](https://andreasfertig.com/cpp-resources/) - C++ 資源合集，包括書籍、文章和工具。
* [CppPatterns](https://github.com/sftrabbit/CppPatterns-Patterns) - 現代 C++ 模式和慣用法倉庫。[website](https://cpppatterns.com)
* [Function Pointers](https://github.com/jerryryle/fuckingfunctionpointers.com) - 理解 C/C++ 函式指標的指南。


## 部落格
*實用的 C 或 C++ 相關部落格。*

* [Coding For Speed](https://codingforspeed.com/) - Coding For Speed DOT COM，減少執行時間。
* [Eric Niebler](https://ericniebler.com/)
* [Sticky Bits](https://blog.feabhas.com/)
* [Paul Fultz II's Blog](https://pfultz2.com/blog/)
* [ridiculousfish](https://ridiculousfish.com/blog/posts/will-it-optimize.html) - 它會被最佳化嗎？
* [Embedded in Academia](https://blog.regehr.org/)
* [Simplify C++](https://arne-mertz.de/)
* [Fluent C++](https://www.fluentcpp.com/)
* [Bartek's Coding Blog](https://www.bfilipek.com/?m=1)
* [Kenny Kerr](https://kennykerr.ca/)
* [Sutter’s Mill](https://herbsutter.com/gotw/)
* [Vorbrodt's C++ Blog](https://vorbrodt.blog/)
* [foonathan::blog()](https://foonathan.net/index.html)
* [C++ Team Blog](https://devblogs.microsoft.com/cppblog/) - Microsoft Visual C++ 團隊開發部落格

## 其他 Awesome 專案
*實用程式碼、片段等合集*

* [algorithms](https://github.com/xtaci/algorithms) - C++ 演算法和資料結構。
* [c-algorithms](https://github.com/fragglet/c-algorithms) - C 演算法庫。
* [30 Seconds of C++](https://github.com/Bhupesh-V/30-seconds-of-cpp)
* [awesome-ld-preload](https://github.com/gaul/awesome-ld-preload) - LD_PRELOAD 相關資源精選列表。
* [awesome-static-analysis](https://github.com/mre/awesome-static-analysis) - 所有程式語言靜態分析工具精選列表。
* [cpp_functional_programming](https://github.com/graninas/cpp_functional_programming) - C++ 函數語言程式設計材料和連結列表。
* [algorithms_and_data_structures](https://github.com/mandliya/algorithms_and_data_structures) - C++ 演算法和資料結構實現。

# 其他 Awesome 清單
*其他非常棒的列表*

* [lists](https://github.com/jnv/lists) - GitHub 上精選的（awesome）列表合集。
* [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - 精選的精彩內容列表。
* [awesome](https://github.com/sindresorhus/awesome) :zap: - 精選的 awesome 列表。
* [C++ links](https://github.com/MattPD/cpplinks) - 分類整理的 C++ 資源列表。
* [Awesome C++](https://cpp.libhunt.com/) - LibHunt 映象。
* [Awesome C](https://github.com/oz123/awesome-c) 1
* [Awesome C](https://github.com/aleksandar-todorovic/awesome-c) 2
* [Awesome Modern C++](https://github.com/rigtorp/awesome-modern-cpp) - 現代 C++ 資源合集。
* [AwesomePerfCpp](https://github.com/fenbf/AwesomePerfCpp) - 精選的 C/C++ 效能最佳化資源列表。
* [free-programming-books](https://github.com/vhf/free-programming-books) - 免費可用的程式設計書籍列表。
* [Inqlude](https://inqlude.org/) - Qt 庫歸檔。
* [papers-we-love](https://github.com/papers-we-love/papers-we-love) - 供閱讀和討論的電腦科學社群論文。
* [awesome-algorithms](https://github.com/tayllan/awesome-algorithms) - 學習和/或練習演算法的精選好去處列表。
* [awesome-hpp](https://github.com/p-ranav/awesome-hpp) - 精選的 C++ 僅標頭檔案庫列表。
* [awesome-talks](https://github.com/JanVanRyswyck/awesome-talks) - 大量螢幕錄影、使用者組聚會錄製和會議演講。
* [Projects](https://github.com/karan/Projects) - 任何人都可以用任何程式語言解決的實用專案列表。
* [Awesome interview questions](https://github.com/MaximAbramchuck/awesome-interviews) - 最流行技術（包括 C 和 C++）的面試問題列表合集。
* [nothings/single_file_libs](https://github.com/nothings/single_file_libs) :zap: - C/C++ 單檔案庫列表。

# 工作機會

* 此列表目前為空，但你可以透過提交合並請求來新增內容。

# 贊助者

* 如果你有意贊助此倉庫，請與我們聯絡。貴公司的名稱和標誌將在此顯著展示。

# 貢獻
詳情請快速瀏覽[貢獻指南](https://github.com/fffaraz/awesome-cpp/blob/master/CONTRIBUTING.md)。
感謝所有[貢獻者](https://github.com/fffaraz/awesome-cpp/graphs/contributors)，你們真棒！

#### *如果您發現此處有已停止維護或不適合收錄的專案或連結，請提交 Pull Request 協助改進本文。謝謝！*
