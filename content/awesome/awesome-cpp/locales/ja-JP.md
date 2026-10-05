# Awesome C++ [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/fffaraz/awesome-cpp/)
素晴らしいC++（またはC）のフレームワーク、ライブラリ、リソースなどを厳選した一覧です。awesome-... などに着想を得ています。

- [Awesome C++  ](#awesome-c--)
	- [標準ライブラリ](#standard-libraries)
	- [フレームワーク](#frameworks)
	- [人工知能](#artificial-intelligence)
	- [非同期イベントループ](#asynchronous-event-loop)
	- [オーディオ](#audio)
	- [生物学](#biology)
	- [BitTorrent](#bittorrent)
	- [化学](#chemistry)
	- [CLI](#cli)
	- [圧縮](#compression)
	- [並行処理](#concurrency)
	- [設定](#configuration)
	- [コンテナ](#containers)
	- [暗号技術](#cryptography)
	- [CSV](#csv)
	- [データベース](#database)
	- [データ可視化](#data-visualization)
	- [デバッグ](#debug)
	- [ドキュメント](#documentation)
	- [DSP](#dsp)
	- [フォント](#font)
	- [ゲームエンジン](#game-engine)
	- [グラフ](#graph)
	- [GUI](#gui)
	- [グラフィックス](#graphics)
	- [画像処理](#image-processing)
	- [国際化](#internationalization)
	- [プロセス間通信](#inter-process-communication)
	- [JSON](#json)
	- [ロギング](#logging)
	- [機械学習](#machine-learning)
	- [数学](#math)
	- [メモリー割り当て](#memory-allocation)
	- [マルチメディア](#multimedia)
	- [ネットワーク](#networking)
	- [Office Open XML](#office-open-xml)
	- [PDF](#pdf)
	- [物理](#physics)
	- [リフレクション](#reflection)
	- [正規表現](#regular-expression)
	- [ロボティクス](#robotics)
	- [科学計算](#scientific-computing)
	- [スクリプティング](#scripting)
	- [シリアライズ](#serialization)
	- [シリアルポート](#serial-port)
	- [ソート](#sorting)
	- [動画](#video)
	- [仮想マシン](#virtual-machines)
	- [Webアプリケーションフレームワーク](#web-application-framework)
	- [XML](#xml)
	- [YAML](#yaml)
	- [その他](#miscellaneous)
- [ソフトウェア](#software)
	- [コンパイラー](#compiler)
	- [オンラインコンパイラー](#online-compiler)
	- [デバッガー](#debugger)
	- [統合開発環境](#integrated-development-environment)
	- [ビルドシステム](#build-systems)
	- [静的コード解析](#static-code-analysis)
	- [コーディングスタイルツール](#coding-style-tools)
- [リソース](#resources)
	- [API設計](#api-design)
	- [記事](#articles)
	- [書籍](#books)
	- [コーディング標準](#coding-standards)
	- [コーディングスタイル](#coding-style)
	- [ポッドキャスト](#podcasts)
	- [講演](#talks)
	- [動画](#videos)
	- [Webサイト](#websites)
	- [Webログ](#weblogs)
	- [その他の素晴らしいプロジェクト](#other-awesome-projects)
- [その他の素晴らしいリスト](#other-awesome-lists)
- [求人](#jobs)
- [スポンサー](#sponsors)
- [貢献](#contributing)
			- [*この一覧にあるプロジェクトやリンクが保守されていない、または適切でない場合は、プルリクエストを送ってこの文書の改善にご協力ください。ありがとうございます！*](#if-you-see-a-project-or-link-here-that-is-no-longer-maintained-or-is-not-a-good-fit-please-submit-a-pull-request-to-improve-this-document-thank-you)

## 標準ライブラリ
*C++標準ライブラリ（STLコンテナ、STLアルゴリズム、STL関数型コンポーネントなどを含む）*

* [C++ Standard Library](https://en.wikipedia.org/wiki/C%2B%2B_Standard_Library) - コア言語で記述され、C++ ISO標準そのものの一部であるクラスと関数のコレクション。
* [Standard Template Library](https://en.wikipedia.org/wiki/Standard_Template_Library) - 標準テンプレートライブラリ（STL）。
* [C POSIX library](https://en.wikipedia.org/wiki/C_POSIX_library) - POSIXシステム向けC標準ライブラリの仕様。
* [ISO C++ Standards Committee](https://github.com/cplusplus) - ISO/IEC JTC1/SC22/WG21、すなわちC++標準委員会。 [website](https://www.open-std.org/JTC1/SC22/WG21/)
* [The GNU C Library](https://www.gnu.org/software/libc/manual) - GNU Cライブラリの機能の使い方を説明するマニュアルです。

## フレームワーク
*C++の汎用フレームワークとライブラリ。*

* [abseil-cpp](https://github.com/abseil/abseil-cpp) - Abseil C++共通ライブラリ。 [Apache2]
* [Apache C++ Standard Library](https://stdcxx.apache.org/) - STDCXX。アルゴリズム、コンテナ、イテレータ、その他の基本コンポーネントを集めたもの。 [retired] [Apache2]
* [APR](https://apr.apache.org/) - Apache Portable Runtime。クロスプラットフォームのユーティリティ関数ライブラリです。 [Apache2]
* [ASL](https://stlab.adobe.com/) - Adobe Source Librariesは、ピアレビュー済みで移植性の高いC++ソースライブラリを提供します。 [MIT]
* [AUI](https://github.com/aui-framework/aui) - C++20向けの宣言型UIツールキット。 [MPL2]
* [Boost](https://github.com/boostorg) :zap: - 汎用C++ライブラリの大規模なコレクション。 [Boost] [website](https://www.boost.org)
* [BDE](https://github.com/bloomberg/bde) - Bloomberg LabsのBDE開発環境。 [Apache2]
* [C++ Workflow](https://github.com/sogou/workflow) :zap: - C++並列計算および非同期ネットワークエンジン。 [Apache2]
* [CGraph](https://github.com/ChunelFeng/CGraph) - サードパーティ製ライブラリに依存しない、C++ベースのクロスプラットフォームDAGフレームワーク。 [MIT]
* [Cinder](https://libcinder.org/) - プロ品質のクリエイティブコーディング向けにコミュニティが開発した、無料のオープンソースライブラリ。 [BSD]
* [Coost](https://github.com/idealvin/coost) - Goスタイルのコルーチン、ロギング、設定などのユーティリティを備えた、軽量で依存関係のないC++ライブラリ。 [MIT]
* [Cxxomfort](https://ryan.gulix.cl/fossil.cgi/cxxomfort/) - 新しいC++標準のさまざまな機能をC++03以降にバックポートする、小さなヘッダーオンリーライブラリ。 [MIT]
* [Dlib](https://github.com/davisking/dlib) :zap: - 実用的な機械学習やデータ分析アプリケーションをC++で作成するためのツールキット。 [Boost] [website](https://dlib.net/)
* [EASTL](https://github.com/electronicarts/EASTL) - Electronic Arts標準テンプレートライブラリ。 [BSD]
* [ETL](https://github.com/ETLCPP/etl) - 組み込み向けテンプレートライブラリ。 [MIT]
* [ffead-cpp](https://github.com/sumeetchhetri/ffead-cpp) - エンタープライズアプリケーション開発フレームワーク。 [Apache2]
* [Folly](https://github.com/facebook/folly) - Facebookが開発し、利用しているオープンソースC++ライブラリ。 [Apache2]
* [FunctionalPlus](https://github.com/Dobiasd/FunctionalPlus) - C++向け関数型プログラミングライブラリ。簡潔で読みやすいC++コードを書けます。 [MIT]
* [GLib](https://wiki.gnome.org/Projects/GLib) - Cで記述されたライブラリやアプリケーションの中核となるアプリケーション構成要素を提供します。 [LGPL]
* [itlib](https://github.com/iboB/itlib) - std風のシングルヘッダーC++ライブラリのコレクション。 [MIT]
* [JUCE](https://github.com/julianstorer/JUCE) - クロスプラットフォームソフトウェア開発のための、包括的なC++クラスライブラリ。 [Core-Module: ISC, Rest: GPL2/GPL3/Proprietary] [website](https://www.juce.com/)
* [Kigs framework](https://github.com/Kigs-framework/kigs) - 無料のオープンソースで、モジュール式・多目的・クロスプラットフォームのC++ RADフレームワーク。 [MIT] [website](https://kigs-framework.org/)
* [libPhenom](https://github.com/facebook/libphenom) - Cで高性能かつ高い拡張性を備えたシステムを構築するためのイベント処理フレームワーク。 [Apache2]
* [LibSourcey](https://github.com/sourcey/libsourcey) - リアルタイム動画ストリーミングや高性能ネットワークアプリケーション向けのC++11イベント駆動I/O。 [LGPL]
* [LibU](https://github.com/koanlogic/libu) - Cで記述されたマルチプラットフォームのユーティリティライブラリ。 [BSD]
* [libxutils](https://github.com/kala13x/libxutils) - データ構造やアルゴリズムなどを備えた、シンプルで強力なクロスプラットフォームCライブラリ。 [MIT]
* [Loki](https://loki-lib.sourceforge.net/) - 一般的なデザインパターンやイディオムを柔軟に実装する、設計用C++ライブラリ。 [MIT]
* [micron.cpp](https://github.com/rfgplk/micron.cpp) - libcと標準ライブラリを純粋なC++で実装（および再設計）したもの。 [Boost/MIT]
* [MiLi](https://github.com/MariadeAnton/MiLi) - 最小限のヘッダーオンリーC++ライブラリ。 [Boost]
* [OpenFrameworks](https://github.com/openframeworks/openFrameworks) - C++のクリエイティブコーディング向けクロスプラットフォーム・オープンソースツールキット。 [MIT] [website](https://www.openframeworks.cc/)
* [PhotonLibOS](https://github.com/alibaba/PhotonLibOS) - 効率的なユーザー空間スレッド（ワークスティーリング方式のコルーチン）、I/O、ネットワーク、RPC、HTTPなどを備え、Alibabaで広く利用される包括的なC++フレームワーク。C++14/17/20/23、Linux、macOS、x86-64、ARM64、gcc、clangに対応。 [Apache2] [website](https://photonlibos.github.io/)
* [Qt](https://github.com/qt) :zap: - クロスプラットフォームのアプリケーションおよびUIフレームワーク。 [GPL/LGPL/Proprietary] [website](https://www.qt.io)
* [Reason](https://code.google.com/p/reason/) - C++の性能と強みを必要とする開発者に、Java、.NET、Pythonのような使いやすさをもたらすことを目指すクロスプラットフォームフレームワーク。 [GPL2]
* [ROOT](https://root.cern.ch/) - 大量のデータを非常に効率よく処理・分析するために必要な機能を備えた、オブジェクト指向フレームワーク群。CERNで利用されています。 [LGPL]
* [rpp](https://github.com/TheNumbat/rpp) - Rustに着想を得た、最小限のC++20 STL代替ライブラリ。 [MIT]
* [SaneCppLibraries](https://github.com/Pagghiu/SaneCppLibraries) - macOS、Windows、Linux向けのC++プラットフォーム抽象化ライブラリ群。 [MIT] [website](https://pagghiu.github.io/SaneCppLibraries/)
* [Seastar](https://github.com/scylladb/seastar) - 最新ハードウェア上の高性能サーバーアプリケーション向けの、高度なオープンソースC++フレームワーク。 [Apache-2.0 License] [seastar.io](https://seastar.io/)
* [sfl library](https://github.com/slavenf/sfl-library) - 新しい、またはあまり知られていないコンテナをいくつか提供するC++11ヘッダーオンリーライブラリ。その一部はC++20の定数式で使用できます。 [zlib]
* [Siv3D](https://github.com/Siv3D/OpenSiv3D) - クリエイティブコーディング（2D/3Dゲーム、メディアアート、ビジュアライザー、シミュレーター）向けのC++20フレームワーク。 [MIT] [website](https://siv3d.github.io/)
* [STLport](https://www.stlport.org/) - STLの模範的な実装。 [Free]
* [STXXL](https://stxxl.sourceforge.net/) - 超大規模データセット向け標準テンプレートライブラリ。 [Boost]
* [tbox](https://github.com/tboox/tbox) - glib風のマルチプラットフォームCライブラリ。 [Apache2] [website](https://tboox.org/)
* [Ultimate++](https://www.ultimatepp.org/) - C++クロスプラットフォームの迅速なアプリケーション開発フレームワーク。 [BSD]
* [Windows Template Library](https://sourceforge.net/projects/wtl/) - WindowsアプリケーションとUIコンポーネントの開発向けC++ライブラリ。 [Public]
* [WUI](https://github.com/intent-garden/wui) - C++17以降でグラフィカルユーザーインターフェイスを作成するためのクロスプラットフォームライブラリ、WUI（Window User Interface Library）。 [Boost][website](https://libwui.org)
* [xtd](https://github.com/gammasoft71/xtd) - Windows、macOS、Linux、iOS、Android、FreeBSD、Haikuでコンソール（CLI）、フォーム（GUI）、単体テスト（xUnit）アプリケーションを作成するための最新C++20フレームワーク。 [MIT]
* [Yomm2](https://github.com/jll63/yomm2) - 高速で直交的、オープンなマルチメソッド。 [Yomm11](https://github.com/jll63/yomm11) [Boost]
* [YUP!](https://github.com/kunitoki/yup) - リアルタイムオーディオとGPUネイティブのクリエイティブソフトウェア向けに最適化された最新フレームワーク。 [ISC]

## 人工知能

* [ANNetGPGPU](https://github.com/ANNetGPGPU/ANNetGPGPU) - GPU（CUDA）ベースの人工ニューラルネットワークライブラリ。 [LGPL]
* [btsk](https://github.com/aigamedev/btsk) - ゲーム向けビヘイビアツリーのスターターキット。 [zlib]
* [cpp-mcp](https://github.com/hkr04/cpp-mcp) - 軽量なC++ MCP（Model Context Protocol）SDK。 [MIT]
* [Evolving Objects](https://eodev.sourceforge.net/) - 独自の確率的最適化アルゴリズムを非常に迅速に作成できる、テンプレートベースのANSI C++進化計算ライブラリ。 [LGPL]
* [fastmcpp](https://github.com/0xeb/fastmcpp) - PythonのfastmcpライブラリをC++に移植したもの。 [Apache2]
* [frugally-deep](https://github.com/Dobiasd/frugally-deep) - C++でKerasモデルを使用するためのヘッダーオンリーライブラリ。 [MIT]
* [Genann](https://github.com/codeplea/genann) - シンプルなCニューラルネットワークライブラリ。 [zlib]
* [MXNet](https://github.com/apache/incubator-mxnet) - 軽量、ポータブル、柔軟な分散／モバイル向けディープラーニング。動的で変更を認識するデータフロー依存関係スケジューラーを備え、Python、R、Julia、Scala、Go、JavaScriptなどに対応。 [website](https://mxnet.apache.org)
* [PyTorch](https://github.com/pytorch/pytorch) - 強力なGPUアクセラレーションを備えた、Pythonのテンソルおよび動的ニューラルネットワーク。 [website](https://pytorch.org)
* [flashlight](https://github.com/flashlight/flashlight) - 完全にC++で記述された、高速で柔軟な機械学習ライブラリ。 [BSD]
* [Recast/Detour](https://github.com/recastnavigation/recastnavigation) - （3D）ナビゲーションメッシュの生成器および経路探索器。主にゲーム向け。 [zlib]
* [TensorFlow](https://github.com/tensorflow/tensorflow) - データフローグラフを使った数値計算のためのオープンソースソフトウェアライブラリ。 [Apache]
* [Txeo](https://github.com/rdabra/txeo) - TensorFlow向けの最新C++ラッパー。 [Apache]
* [oneDNN](https://github.com/oneapi-src/oneDNN) - ディープラーニングアプリケーション向けのオープンソース・クロスプラットフォーム性能ライブラリ。 [Apache] [website](https://01.org/onednn)
* [CNTK](https://github.com/Microsoft/CNTK) - Microsoft Cognitive Toolkit（CNTK）、オープンソースのディープラーニングツールキット。 [Boost]
* [tiny-dnn](https://github.com/tiny-dnn/tiny-dnn) - C++11向けのヘッダーオンリーで依存関係のないディープラーニングフレームワーク。 [BSD]
* [Veles](https://github.com/Samsung/veles) - ディープラーニングアプリケーションを迅速に開発するための分散プラットフォーム。 [Apache]
* [Kaldi](https://github.com/kaldi-asr/kaldi) - 音声認識ツールキット。 [Apache]

## 非同期イベントループ

* [Asio](https://github.com/chriskohlhoff/asio/) - 最新のC++アプローチで一貫した非同期モデルを提供する、ネットワークおよび低レベルI/Oプログラミング向けのクロスプラットフォームC++ライブラリ。 [Boost] [website](https://think-async.com/)
* [Boost.Asio](https://github.com/boostorg/asio) - ネットワークおよび低レベルI/Oプログラミング向けのクロスプラットフォームC++ライブラリ。 [Boost] [website](https://boost.org/libs/asio)
* [C++ Actor Framework](https://github.com/actor-framework/actor-framework) - C++におけるActorモデルのオープンソース実装。 [BSD-3-Clause] [website](https://actor-framework.org/)
* [Ichor](https://github.com/volt-software/ichor) - スレッドセーフに重点を置き、依存性注入を提供するイベントキュー。 [MIT]
* [libev](https://libev.schmorp.de/) - libeventを緩やかにモデルとしつつ、その制限やバグを持たない、機能豊富で高性能なイベントループ。 [BSD and GPL]
* [libevent](https://libevent.org/) - イベント通知ライブラリ。 [BSD]
* [libhv](https://github.com/ithewei/libhv) - クロスプラットフォームのイベントループライブラリ。 [BSD]
* [libuv](https://github.com/libuv/libuv) - クロスプラットフォームの非同期I/O。 [BSD]
* [promise-cpp](https://github.com/xhawk18/promise-cpp) - Promise/A+標準を実装するヘッダーオンリーライブラリ。 [Anti-996]
* [uvw](https://github.com/skypjack/uvw) - libuvのC++ラッパー。 [MIT]
* [uv-cpp](https://github.com/wlgq2/uv-cpp) - C++11ベースのシンプルなインターフェイスを持つ高性能ネットワークライブラリ。 [MIT]

## オーディオ
*オーディオ、サウンド、音楽、デジタル音声のライブラリ*

* [Amplitude Audio SDK](https://github.com/SparkyStudios/AmplitudeAudioSDK) - ゲームのニーズを考慮して設計されたクロスプラットフォームのオーディオエンジン。 [Apache-2.0] [website](https://amplitudeaudiosdk.com)
* [Aubio](https://github.com/aubio/aubio) - オーディオと音楽の分析ライブラリ。 [website](https://aubio.org/)
* [AudioFile](https://github.com/adamstark/AudioFile) - オーディオファイルの読み書きを行うシンプルなC++ライブラリ。 [MIT]
* [audioFlux](https://github.com/libAudioFlux/audioFlux) - オーディオと音楽の分析および特徴抽出を行うCライブラリ。 [MIT]
* [dr_libs](https://github.com/mackron/dr_libs) - CおよびC++向けの単一ファイル音声デコードライブラリ。 [Unlicense]
* [FMOD](https://www.fmod.org/) - ゲーム向けの使いやすいクロスプラットフォーム・オーディオエンジン兼オーディオコンテンツ作成ツール。 [Free for non-commercial/Commercial]
* [KFR](https://www.kfrlib.com/) - 高速でモダンなC++ DSPフレームワーク。FFT、FIR/IIRフィルター、サンプルレート変換に対応。 [GPL/Proprietary]
* [LAME](https://lame.sourceforge.io/using.php) - 高品質なMPEG Audio Layer III（MP3）エンコーダー。 [LGPL]
* [libsndfile](https://github.com/erikd/libsndfile/) - サンプリング音声を含むファイルを、単一の標準ライブラリインターフェイスで読み書きするCライブラリ（C++ラッパー付き）。 [LGPL-2.1] [website](https://www.mega-nerd.com/libsndfile/)
* [libsoundio](https://github.com/andrewrk/libsoundio) - クロスプラットフォームのリアルタイム音声入出力向けCライブラリ。 [MIT] [website](https://libsound.io/)
* [Maximilian](https://github.com/micknoise/Maximilian) - C++オーディオおよび音楽DSPライブラリ。 [MIT]
* [OpenAL](https://www.openal.org/) - Open Audio Library。クロスプラットフォームのオーディオAPI。 [BSD/LGPL/Proprietary]
* [miniaudio](https://github.com/mackron/miniaudio) - 単一ファイルのオーディオ再生・キャプチャライブラリ。 [Unlicense] [website](https://miniaud.io/)
* [ni-media](https://github.com/NativeInstruments/ni-media) - オーディオファイルの読み書きを行うC++ライブラリ。 [MIT]
* [Opus](https://opus-codec.org/) - 完全にオープンでロイヤリティ不要、汎用性の高いオーディオコーデック。 [BSD]
* [PortAudio](https://www.portaudio.com/) - 無料、クロスプラットフォーム、オープンソースのオーディオI/Oライブラリ。 [MIT]
* [rnnoise](https://github.com/xiph/rnnoise) - 音声ノイズ低減のためのリカレントニューラルネットワーク。 [BSD-3-Clause]
* [SELA](https://github.com/sahaRatul/sela) - シンプルなロスレスオーディオ。 [MIT]
* [SoLoud](https://github.com/jarikomppa/soloud) - ゲーム向けの使いやすくポータブルなオーディオエンジン。 [zlib]
* [Speex](https://www.speex.org/) - 自由な音声のための無料コーデック。Opusにより旧式化。 [BSD]
* [Tonic](https://github.com/TonicAudio/Tonic) - C++で簡単かつ効率的にオーディオを合成。 [Unlicense]
* [Vorbis](https://xiph.org/vorbis/) - Ogg Vorbisは、完全にオープンで非独占、特許料・ロイヤリティ不要の汎用圧縮オーディオ形式です。 [BSD]
* [minimp3](https://github.com/lieff/minimp3) - クリーンルーム実装による、パブリックドメインのヘッダーオンリーMP3デコーダー。 [CC0]
* [Verovio](https://github.com/rism-ch/verovio) - 高速で軽量な楽譜浄書ライブラリ。 [LGPL] [website](https://www.verovio.org)
* [Wav2Letter++](https://github.com/facebookresearch/wav2letter/) - ArrayFireテンソルライブラリとflashlight機械学習ライブラリを利用して効率を最大化する、C++のみで記述された高速なオープンソース音声処理ツールキット（パブリックドメイン）。 [BSD]
* [PocketSphinx](https://github.com/cmusphinx/pocketsphinx) - 軽量な音声認識エンジン。 [BSD-2-Clause] [website](https://cmusphinx.github.io/)

## 生物学
*バイオインフォマティクス、ゲノミクス、バイオテクノロジー*

* [BioC++](https://biocpp.sourceforge.net/) - バイオインフォマティクス向けC++計算ライブラリ。 [BSD]
* [Chaste](https://www.cs.ox.ac.uk/chaste/) - 生理学および生物学向けに開発された数学モデルの計算シミュレーションを行うオープンソースC++ライブラリ。 [BSD]
* [libsequence](https://molpopgen.github.io/libsequence/) - 集団遺伝学データを表現・分析するためのC++ライブラリ。 [GPL]
* [SeqAn](https://www.seqan.de/) - 生物学データを中心とした配列分析向けのアルゴリズムとデータ構造。 [BSD/3-clause]
* [Vcflib](https://github.com/ekg/vcflib) - VCFファイルの解析と操作を行うC++ライブラリ。 [MIT]
* [Wham](https://github.com/zeeev/wham) - BAMファイルに関連解析を直接適用してゲノムの構造変異（SV）を検出。 [MIT]
* [htslib](https://github.com/samtools/htslib) - ハイスループット・シーケンシングデータを読み書きするCライブラリ。 [MIT/BSD] [website](https://www.htslib.org/)

## BitTorrent

* [jech/dht](https://github.com/jech/dht) - C製のBitTorrent DHTライブラリ。 [MIT]
* [libtorrent](https://github.com/arvidn/libtorrent) (a.k.a. libtorrent-rasterbar) - 効率的で機能を網羅したC++ BitTorrent実装。 [BSD]
* [LibTorrent](https://github.com/rakshasa/libtorrent) (a.k.a. libtorrent-rakshasa) - BitTorrentライブラリ。 [GPL]
* [libutp](https://github.com/bittorrent/libutp) - uTorrentトランスポートプロトコルライブラリ。 [MIT]

## 化学
*化学、量子化学、固体化学／物理、地球化学、生化学*

* [d-SEAMS](https://github.com/d-SEAMS/seams-core) - Nixを用いた、C++およびLua製の分子動力学トラジェクトリ解析エンジン。分子シミュレーションの構造解明を後回しにする分析（Deferred Structural Elucidation Analysis for Molecular Simulations）の略称です。 [GPL] [website](https://dseams.info)
* [gromacs](https://github.com/gromacs/gromacs) - メッセージパッシング方式の並列分子動力学実装。 [GPL] [website](https://www.gromacs.org)
* [Reaktoro](https://github.com/reaktoro/reaktoro) - 化学反応系をモデル化するC++およびPythonの計算フレームワーク。 [LGPL] [website](https://reaktoro.org)
* [LAMMPS](https://github.com/lammps/lammps) - 材料モデリングに重点を置いた古典分子動力学コード。Large-scale Atomic/Molecular Massively Parallel Simulatorの略称です。 [GPL] [website](https://lammps.sandia.gov/)
* [MADNESS](https://github.com/m-a-d-n-e-s-s/madness) - 科学シミュレーション向け多重解像度適応数値環境。 [GPL] [website](https://github.com/m-a-d-n-e-s-s/madness)
* [MPQC](https://github.com/ValeevGroup/mpqc) - Massively Parallel Quantum Chemistry（MPQC）は、時間に依存しないシュレーディンガー方程式を用い、第一原理から原子や分子の物性を計算します。 [GPL] [website](https://mpqc.org/)
* [Psi](https://github.com/psi4/psi4) - 非経験的計算化学パッケージ。 [GPL] [website](https://psicode.org/)

## CLI
*コンソール／ターミナルのユーザーインターフェイス、コマンドラインインターフェイス*

 * [Argh!](https://github.com/adishavit/argh) - 最小限でストレスなく使えるヘッダーオンリーの引数ハンドラー。 [BSD]
 * [argparse](https://github.com/p-ranav/argparse) - モダンC++向け引数パーサー。 [MIT]
 * [args](https://github.com/taywee/args) - シンプルなヘッダーオンリーC++引数パーサーライブラリ。 [MIT]
 * [Argy](https://github.com/mshenoda/argy) - モダンC++向けコマンドライン引数解析ライブラリ。シンプルで直感的なヘッダーオンリー実装、依存関係なし。 [MIT]
 * [barkeep](https://github.com/oir/barkeep) - 非同期アニメーション、カウンター、進捗バーを表示する小さなC++ヘッダー。 [Apache-2.0] [website](https://oir.github.io/barkeep/)
 * [Boost.Program_options](https://github.com/boostorg/program_options) - コマンドラインや設定ファイルなど一般的な方法でプログラムオプションを取得するライブラリ。 [Boost] [website](https://boost.org/libs/program_options)
 * [cli](https://github.com/daniele77/cli) - 対話型コマンドラインインターフェイス（Ciscoスタイル）向けクロスプラットフォームのヘッダーオンリーC++14ライブラリ。 [Boost]
 * [CLI11](https://github.com/CLIUtils/CLI11) - シンプルおよび高度なCLI解析向けの、単一ファイルまたは複数ファイル構成のヘッダーオンリーC++11ライブラリ。 [BSD]
 * [clipp](https://github.com/muellan/clipp) - 単一ヘッダーファイルで使える、C++11/14/17向けの使いやすく強力で表現力豊かなコマンドライン引数処理。 [MIT]
 * [cpp-terminal](https://github.com/jupyter-xeus/cpp-terminal) - マルチプラットフォームのターミナルアプリケーションを作成する小さなヘッダーオンリーC++ライブラリ。 [MIT]
 * [Crossline](https://github.com/jcwangxp/Crossline) - 小型で自己完結型、設定不要、MITライセンスのクロスプラットフォームなreadline／libedit代替。 [MIT]
 * [Ctrl+C](https://github.com/evgenykislov/ctrl-c) - カスタム関数でCtrl+Cイベントを処理するクロスプラットフォームC++11ライブラリ。 [MIT]
 * [cxxopts](https://github.com/jarro2783/cxxopts) - 軽量なC++コマンドラインオプションパーサー。 [MIT]
 * [docopt.cpp](https://github.com/docopt/docopt.cpp) - docstringからオプションパーサーを生成するライブラリ。 [MIT/Boost]
 * [FINAL CUT](https://github.com/gansm/finalcut) - テキストベースのウィジェットを使ったターミナルアプリケーション作成用ライブラリ。 [LGPL]
 * [FTXUI](https://github.com/ArthurSonzogni/FTXUI) - C++の関数型ターミナルユーザーインターフェイス。 [MIT]
 * [gflags](https://gflags.github.io/gflags/) - C++向けコマンドラインフラグモジュール。 [BSD]
 * [imtui](https://github.com/ggerganov/imtui) - イミディエートモードのテキストユーザーインターフェイス。 [MIT]
 * [indicators](https://github.com/p-ranav/indicators/) - モダンC++向けアクティビティインジケーター。 [MIT]
 * [linenoise](https://github.com/antirez/linenoise) - readlineおよびlibeditに代わる、小型の自己完結型ライブラリ。 [BSD-2-Clause]
 * [linenoise-ng](https://github.com/arangodb/linenoise-ng) - UTF-8文字を扱える、Linux、Windows、macOS向けの小型でポータブルなGNU readline代替。 [BSD]
 * [Lyra](https://github.com/bfgroup/Lyra) - C++11以降向けの、シンプルで使いやすく組み合わせ可能なコマンドラインパーサー。 [Boost]
 * [Ncurses](https://invisible-island.net/ncurses/) - ターミナルユーザーインターフェイス。 [MIT]
 * [FINAL CUT](https://github.com/gansm/finalcut) - Ncursesに代わる最新のターミナルユーザーインターフェイス。 [LGPLv3+]
 * [oof](https://github.com/s9w/oof) - コンソール出力のRGBカラーおよび位置を便利かつ高性能に制御。 [MIT]
 * [PDCurses](https://github.com/wmcbrine/PDCurses) - ソースコードとコンパイル済みライブラリの両方を利用できる、パブリックドメインのcursesライブラリ。 [PublicDomain]
 * [popl](https://github.com/badaix/popl) - C++11以降向けの、単一ヘッダーのテンプレート式コマンドライン引数およびINIファイルパーサー。 [MIT]
 * [replxx](https://github.com/AmokHuginnsson/replxx) - UTF-8、構文強調表示、ヒントに対応し、UnixとWindowsで動作するreadline／libedit代替。 [BSD]
 * [tabulate](https://github.com/p-ranav/tabulate) - モダンC++向けテーブル作成ツール。 [MIT]
 * [TCLAP](https://tclap.sourceforge.net) - ANSI C++でコマンドライン引数を定義・取得する、成熟し安定した機能豊富なライブラリ。 [MIT]
 * [termbox](https://github.com/nsf/termbox) - テキストベースのユーザーインターフェイスを作成するCライブラリ。 [MIT]
 * [TermOx](https://github.com/a-n-t-h-o-n-y/TermOx) - C++17ターミナルユーザーインターフェイス（TUI）ライブラリ。 [MIT]
 * [tuibox](https://github.com/Cubified/tuibox) - コマンドラインでマウス操作可能な対話型アプリケーションを作成できる、単一ヘッダーのターミナルUI（TUI）ライブラリ。 [MIT]
* [Ginseng](https://github.com/chewax/Ginseng) - C++コマンドライン引数パーサー。 [MIT]

## 圧縮
*圧縮およびアーカイブ用ライブラリ*

* [bit7z](https://github.com/rikyoz/bit7z) - 7-Zip共有ライブラリに対する、明快でシンプルなインターフェイスを提供するC++静的ライブラリ。 [MPL2]
* [Brotli](https://github.com/google/brotli) - Googleが開発したBrotli圧縮形式。 [MIT]
* [bzip2](https://www.bzip.org/) - 無料で利用でき、特許フリーの高品質データ圧縮ツール。 [BSD]
* [bzip3](https://github.com/kspalaiologos/bzip3) - BZip2の、より優れた強力な後継を目指すライブラリ。 [LGPL]
* [FastLZ](https://github.com/ariya/FastLZ) - 小型でポータブルなバイト整列LZ77圧縮。 [MIT]
* [FiniteStateEntropy](https://github.com/Cyan4973/FiniteStateEntropy) - 次世代のエントロピーコーデック：Finite State EntropyとHuff0。
* [FSST](https://github.com/cwida/fsst) - 効率的なランダムアクセス対応文字列圧縮。 [MIT]
* [heatshrink](https://github.com/atomicobject/heatshrink) - 組み込み／リアルタイムシステム向けデータ圧縮ライブラリ。 [ISC]
* [Kanzi](https://github.com/flanglet/kanzi-cpp) - C++で実装された、最新でモジュール式、ポータブルかつ効率的なロスレスデータ圧縮ツール。 [Apache-2.0]
* [KArchive](https://api.kde.org/karchive-index.html) - zipやtarなどのファイルアーカイブを作成、読み込み、書き込み、操作するライブラリ。また、QIODeviceのサブクラスを介してgzipなどの形式でデータを透過的に圧縮・展開します。 [LGPL]
* [libarchive](https://github.com/libarchive/libarchive) - 複数形式に対応するアーカイブおよび圧縮ライブラリ。 [New BSD] [website](https://www.libarchive.org/)
* [LZ4](https://github.com/lz4/lz4) - 非常に高速な圧縮アルゴリズム。 [BSD] [website](https://www.lz4.org/)
* [LZAV](https://github.com/avaneev/lzav) - 高速なメモリ内データ圧縮アルゴリズム。 [MIT]
* [LZFSE](https://github.com/lzfse/lzfse) - LZFSE圧縮ライブラリとコマンドラインツール。Appleが開発。
* [LZHAM](https://code.google.com/p/lzham/) - LZMAに近い圧縮率を持ち、展開がはるかに高速なロスレスデータ圧縮ライブラリ。 [BSD]
* [LZMA](https://sourceforge.net/projects/sevenzip/files/7-Zip) :zap: - 7z形式のデフォルトかつ汎用的な圧縮方式。 [PublicDomain] [website](https://www.7-zip.org)
* [LZMAT](https://github.com/nemequ/lzmat) - 非常に高速なリアルタイム・ロスレスデータ圧縮ライブラリ。 [GPL]
* [miniz](https://github.com/richgel999/miniz) - zlib互換APIを持つ、単一CソースファイルのDeflate/Inflate圧縮ライブラリ。ZIPアーカイブの読み書きとPNG書き込みにも対応。 [MIT]
* [Minizip](https://github.com/nmoinvaz/minizip) - PKWAREディスクスパン、AES暗号化、I/Oバッファリングに対応する、最新のバグ修正を含むZlib。 [zlib]
* [minizip-ng](https://github.com/zlib-ng/minizip-ng) - zlibディストリビューションに含まれる一般的なZIP操作ライブラリのフォーク。 [zlib]
* [misa77](https://github.com/welcome-to-the-sunny-side/misa77) - 高い圧縮率を維持しながら、驚くほど高速に展開。 [MIT]
* [OpenZL](https://github.com/facebook/openzl) - 新しいデータ圧縮フレームワーク。 [BSD] [website](https://openzl.org/)
* [PhysicsFS](https://icculus.org/physfs/) - さまざまなアーカイブへの抽象化されたアクセスを提供するライブラリ。ビデオゲーム向けに設計され、Quake 3のファイルサブシステムに着想を得ています。 [zlib]
* [Rapidgzip](https://github.com/mxmlnkn/rapidgzip) - 最新のマルチコアマシン向けGzip展開とランダムアクセス。 [Apache-2/MIT]
* [smaz](https://github.com/antirez/smaz) - 短い文字列向け圧縮ライブラリ。 [BSD]
* [Snappy](https://google.github.io/snappy/) - 高速な圧縮／展開ツール。 [BSD]
* [ZLib](https://zlib.net/) - データストリーム向けの非常にコンパクトな圧縮ライブラリ。 [zlib]
* [zlib-ng](https://github.com/zlib-ng/zlib-ng) - 「次世代」システム向けzlib。深刻な最適化を施したドロップイン代替。 [zlib]
* [zstd](https://github.com/facebook/zstd) - Facebookが開発した、高速なリアルタイム圧縮アルゴリズムZstandard。 [BSD]
* [ZXC](https://github.com/hellobertrand/zxc) - 高性能な非対称ロスレス圧縮。 [BSD-3-Clause]
* [ZZIPlib](https://zziplib.sourceforge.net/) - ZIPアーカイブの読み取りアクセスを提供。 [MPL/LGPL]
* [cmix](https://github.com/byronknoll/cmix) - 速度と引き換えに最高の圧縮率を目指すロスレスデータ圧縮プログラム。 [GPL-3.0]
* [LZSSE-SIMDe](https://github.com/nemequ/LZSSE-SIMDe) - LZSSE圧縮のポータブルなSIMD実装。 [BSD-2-Clause]
* [Zopfli](https://github.com/google/zopfli) - 高い圧縮率を実現する一方で低速なdeflate/zlib圧縮ライブラリ。 [Apache-2.0]

## 並行処理
*並行処理とマルチスレッド*

* [alpaka](https://github.com/ComputationalRadiationPhysics/alpaka) - 並列カーネル高速化のための抽象化ライブラリ。 [LGPLv3+]
* [ArrayFire](https://github.com/arrayfire/arrayfire) - 汎用GPUライブラリ。 [BSD]
* [Async++](https://github.com/Amanieu/asyncplusplus) - Microsoft PPLライブラリおよびN3428 C++標準提案に着想を得た、C++11向け軽量並行処理フレームワーク。 [MIT]
* [atomic_queue](https://github.com/max0x7ba/atomic_queue) - 循環バッファとstd::atomicを基盤とする、C++14の複数プロデューサー・複数コンシューマー対応ロックフリーキュー。 [MIT]
* [Boost.Compute](https://github.com/boostorg/compute) - OpenCL向けC++ GPUコンピューティングライブラリ。 [Boost] [website](https://boost.org/libs/compute)
* [Bolt](https://github.com/HSA-Libraries/Bolt) - GPU向けに最適化されたC++テンプレートライブラリ。 [Apache2]
* [BS::thread_pool](https://github.com/bshoshany/thread-pool) - 高速、軽量で使いやすいC++17スレッドプールライブラリ。 [MIT]
* [Channel](https://github.com/andreiavrammsd/cpp-channel) - スレッド間でデータを共有するスレッドセーフなコンテナ。 [MIT]
* [ck](https://github.com/concurrencykit/ck) - 並行処理プリミティブ、安全なメモリ回収機構、ノンブロッキングデータ構造。 [BSD]
* [concurrentqueue](https://github.com/cameron314/concurrentqueue) - C++11向けの高速なマルチプロデューサー・マルチコンシューマー対応ロックフリー並行キュー。 [BSD,Boost]
* [Coros](https://github.com/mtmucha/coros) - コルーチンを利用したタスクベース並列処理向けの、使いやすく高速なライブラリ。 [BSL-1.0]
* [CUB](https://github.com/NVlabs/cub) - CUDAプログラミングモデルのあらゆる層で再利用可能な最先端ソフトウェアコンポーネントを提供します。 [New BSD]
* [cuda-api-wrappers](https://github.com/eyalroz/cuda-api-wrappers) - CUDA GPUプログラミングランタイムAPI向けの軽量なモダンC++ラッパー。 [BSD]
* [cupla](https://github.com/ComputationalRadiationPhysics/cupla) - Alpakaを通じてOpenMP、Threads、TBBなどでCUDA/C++を実行するC++ API。 [LGPLv3+]
* [C++React](https://github.com/schlangster/cpp.react) - C++11向けリアクティブプログラミングライブラリ。 [Boost]
* [dispenso](https://github.com/facebookincubator/dispenso) - スレッドプール、並列forループ、future、タスクグラフ、並行コンテナを備えた高性能C++並列プログラミングライブラリ。 [MIT]
* [FiberTaskingLib](https://github.com/RichieSams/FiberTaskingLib) - 任意の依存関係を持つタスクグラフをサポートする、タスクベースのマルチスレッドライブラリ。 [Apache]
* [HPX](https://github.com/STEllAR-GROUP/hpx/) - あらゆる規模の並列・分散アプリケーション向け汎用C++ランタイムシステム。 [Boost]
* [Intel Games Task Scheduler](https://github.com/GameTechDev/GTS-GamesTaskScheduler) - ゲーム開発者のニーズに合わせて設計されたタスクスケジューリングフレームワーク。 [MIT]
* [Intel Parallel STL](https://github.com/intel/parallelstl) - C++11以降向けIntel® C++17 STL実装。 [Apache2]
* [Intel TBB](https://www.threadingbuildingblocks.org/) - Intel® Threading Building Blocks。 [Apache2]
* [junction](https://github.com/preshing/junction) - C++の並行データ構造ライブラリ。 [BSD]
* [Kokkos](https://github.com/kokkos/kokkos) - 並列実行とメモリ抽象化のための、性能移植性に優れたプログラミングモデル。 [BSD]
* [libcds](https://github.com/khizmax/libcds) - C++の並行データ構造ライブラリ。 [BSD]
* [Libclsph](https://github.com/libclsph/libclsph) - OpenCLベースのGPUアクセラレーション対応SPH流体シミュレーションライブラリ。 [MIT]
* [libdill](https://github.com/sustrik/libdill/) - Cで構造化並行性を導入。 [MIT]
* [libdispatch](https://github.com/apple/swift-corelibs-libdispatch) - Apple Inc.が開発したGrand Central Dispatch（GCD）は、スレッドプールパターンに基づくタスク並列化技術です。libdispatchはGCDのサービスを実装するライブラリです。 [Apache-2.0] [website](https://apple.github.io/swift-corelibs-libdispatch/)
* [libfork](https://github.com/ConorWilliams/libfork) - C++20のコルーチンを基盤とする、最先端のロックフリー・ウェイトフリーな継続スティーリング型タスクライブラリ。 [MPL-2.0] [website](https://conorwilliams.github.io/libfork/)
* [libmill](https://github.com/sustrik/libmill/) - CでGoスタイルの並行処理を導入。 [MIT]
* [marl](https://github.com/google/marl) - C++11で記述された、スレッドとファイバーを組み合わせたタスクスケジューラー。 [Apache-2.0]
* [moderngpu](https://github.com/moderngpu/moderngpu) - GPUの汎用計算向け生産性ライブラリ。CUDA向けに記述されたヘッダーオンリーC++ライブラリで、特長は不規則な並列問題を解決する高速プリミティブです。 [FreeBSD & Copyright, Sean Baxter]
* [NCCL](https://github.com/NVIDIA/nccl) - マルチGPU集合通信向けに最適化されたプリミティブ。 [BSD]
* [Neco](https://github.com/tidwall/neco) - C製の並行処理ライブラリ（コルーチン）。 [MIT]
* [OpenCL](https://www.khronos.org/opencl/) - 異種システムの並列プログラミング向けオープン標準。
* [OpenMP](https://openmp.org/) - OpenMP API。
* [rotor](https://github.com/basiliscos/cpp-rotor) - イベントループと親和性の高いC++アクターマイクロフレームワーク。 [MIT]
* [SObjectizer](https://github.com/Stiffstream/sobjectizer) - 比較的小規模なC++フレームワークでActor、Publish-Subscribe、CSPモデルを実装。 [BSD-3-Clause]
* [Quantum](https://github.com/bloomberg/quantum) - [Boost.Coroutine2](https://boost.org/libs/coroutine2)を基盤とする強力なC++コルーチンディスパッチャーフレームワーク。
* [RaftLib](https://raftlib.io/) - C++のiostream風演算子を使ったストリーミング／データフロー並行処理を提供するRaftLib C++ライブラリ。 [Apache2]
* [readerwriterqueue](https://github.com/cameron314/readerwriterqueue) - C++向けの高速なシングルプロデューサー・シングルコンシューマー対応ロックフリーキュー。 [BSD]
* [stdgpu](https://github.com/stotko/stdgpu) - GPU上で効率的なSTL風データ構造。 [Apache2]
* [Taskflow](https://github.com/taskflow/taskflow) - 汎用の並列・異種タスクプログラミングシステム。 [MIT]
* [ThreadPool](https://github.com/progschj/ThreadPool) - シンプルなC++11スレッドプール実装。 [zlib]
* [Thrust](https://developer.nvidia.com/thrust) - C++標準テンプレートライブラリ（STL）に似た並列アルゴリズムライブラリ。 [Apache2]
* [TooManyCooks](https://github.com/tzcnt/TooManyCooks/) - 高度なハードウェア検出機能を備えた高性能C++20コルーチンフレームワーク。 [BSL-1.0]
* [transwarp](https://github.com/bloomen/transwarp) - タスク並行処理向けのヘッダーオンリーC++ライブラリ。 [MIT]
* [VexCL](https://github.com/ddemidov/vexcl) - OpenCL/CUDA向けC++ベクトル式テンプレートライブラリ。 [MIT]
* [STAPL](https://parasol-lab.gitlab.io/stapl-home/) - 共有メモリと分散メモリの両方を使う並列計算機で動作するよう設計されたC++並列プログラミングフレームワーク。 [BSD]
* [concurrencpp](https://github.com/David-Haim/concurrencpp) - タスク、エグゼキューター、タイマー、C++20コルーチンを備えた汎用並行処理ライブラリ。
* [libcu++](https://github.com/NVIDIA/libcudacxx) - 異種実装によるC++標準ライブラリ機能を提供するNVIDIA C++標準ライブラリ。 [Apache-2.0]
* [nvthreads](https://github.com/HewlettPackard/nvthreads) - C/C++で効率的かつ永続的なスレッド処理を可能にするライブラリ。 [LGPL-2.1]

## 設定
*設定ファイル、INIファイル*

* [inifile-cpp](https://github.com/Rookfighter/inifile-cpp) - ヘッダーオンリーで使いやすいC++用INIファイルパーサー。 [MIT]
* [inih](https://github.com/benhoyt/inih) - 組み込みシステムに適した、シンプルなC製.INIファイルパーサー。 [BSD-3-Clause]
* [inih](https://github.com/jtilly/inih) - [inih](https://github.com/benhoyt/inih)のシングルヘッダーC++版。 [BSD-3-Clause]
* [ini-cpp](https://github.com/SSARCandy/ini-cpp) - 便利な読み書きインターフェイスを備えた[inih](https://github.com/benhoyt/inih)派生のシングルヘッダーC++版。 [BSD-3-Clause] [website](https://ssarcandy.tw/ini-cpp/index.html)
* [iniparser](https://github.com/ndevilla/iniparser) - INIファイルパーサー。 [MIT]
* [inipp](https://github.com/mcmtroffaes/inipp) - シンプルなヘッダーオンリーC++ INIパーサー兼ジェネレーター。 [MIT]
* [libconfig](https://github.com/hyperrealm/libconfig) - 構造化設定ファイルを処理するC/C++ライブラリ。 [LGPL-2.1] [website](https://hyperrealm.github.io/libconfig/)
* [libconfuse](https://github.com/martinh/libconfuse) - C向けの小型設定ファイルパーサーライブラリ。 [ISC]
* [mINI](https://github.com/metayeti/mINI) - INIファイルの読み込みと書き込み。 [MIT]
* [simpleini](https://github.com/brofield/simpleini) - INI形式の設定ファイルを読み書きするシンプルなAPIを提供するクロスプラットフォームC++ライブラリ。 [MIT]
* [toml++](https://github.com/marzer/tomlplusplus) - C++17以降向けのヘッダーオンリーTOMLパーサーおよびシリアライザー。 [MIT] [website](https://marzer.github.io/tomlplusplus/)
* [toml11](https://github.com/ToruNiina/toml11) - C++標準ライブラリのみに依存するC++11以降向けヘッダーオンリーTOMLパーサー／エンコーダー。 [MIT]

## コンテナ

* [CRoaring](https://github.com/RoaringBitmap/CRoaring) - SIMD最適化を備えたC/C++のRoaringビットマップ。 [Apache-2.0]
* [dynamic_bitset](https://github.com/pinam45/dynamic_bitset) - シンプルで便利なライブラリ：C++17/20のヘッダーオンリー動的ビットセット。 [MIT] [website](https://pinam45.github.io/dynamic_bitset/)
* [fixed-containers](https://github.com/teslamotors/fixed-containers) - 固定容量のconstexprコンテナを提供するヘッダーオンリーC++20ライブラリ。 [MIT]
* [flat_hash_map](https://github.com/skarupke/flat_hash_map) - フィボナッチハッシュを使う非常に高速なフラットハッシュテーブル。
* [frozen](https://github.com/serge-sans-paille/frozen) - C++14向けの、gperfに代わるヘッダーオンリーconstexpr実装。 [Apache-2.0]
* [Hashmaps](https://github.com/goossaert/hashmap) - C++でのオープンアドレス法ハッシュテーブルアルゴリズムの実装。 [MIT]
* [hat-trie](https://github.com/Tessil/hat-trie) - 高速でメモリ効率に優れたHAT-trieのC++実装。 [MIT]
* [Hopscotch map](https://github.com/Tessil/hopscotch-map) - 衝突解決にホップスコッチハッシュ法を使う高速なヘッダーオンリーハッシュマップ。 [MIT]
* [librb](https://github.com/mlyszczek/librb) - 完全なスレッド対応を備え、並行読み書きができ、必要に応じて自動拡張するリング（循環）バッファのC実装。 [BSD] [website](https://librb.bofc.pl/)
* [LSHBOX](https://github.com/RSIA-LIESMARS-WHU/LSHBOX) - 一般的なLSHアルゴリズムを複数提供し、PythonとMATLABにも対応する局所性鋭敏型ハッシュ（LSH）のC++ツールボックス。 [GPL]
* [marisa-trie](https://github.com/s-yata/marisa-trie) - 再帰的に実装されたストレージを用いる照合アルゴリズム。 [BSD-2-Clause/LGPL-2.1]
* [parallel-hashmap](https://github.com/greg7mdp/parallel-hashmap) - 非常に高速でメモリ効率に優れたヘッダーオンリーのハッシュマップとBツリーコンテナ群。 [Apache2] [website](https://greg7mdp.github.io/parallel-hashmap/)
* [PGM-index](https://github.com/gvinciguerra/PGM-index) - 従来のインデックスより桁違いに少ない容量で、数十億項目の配列の高速検索、直前要素検索、範囲検索、更新を可能にするデータ構造。 [Apache2] [website](https://pgm.di.unipi.it)
* [plf::colony](https://github.com/mattreecebentley/plf_colony) - 変更頻度が高い状況でstdコンテナを上回り、挿入・削除にかかわらず未削除要素へのポインターを維持する、順序なしの「バッグ」型コンテナ。 [zLib] [website](https://www.plflib.org/colony.htm)
* [plf::list](https://github.com/mattreecebentley/plf_list) - 範囲スプライシングをなくしてキャッシュ効率の高い構造を実現し、大幅な性能向上をもたらすstd::list実装。 [zLib] [website](https://www.plflib.org/list.htm)
* [plf::stack](https://github.com/mattreecebentley/plf_stack) - std::stackコンテナアダプターの代替で、スタック用途ではあらゆるstdコンテナより高性能。 [zLib] [website](https://www.plflib.org/stack.htm)
* [ring_span lite](https://github.com/martinmoene/ring-span-lite) - Arthur O’Dwyerのring_span実装、すなわち循環バッファビューを簡略化した実装。 [MIT]
* [robin-hood-hashing](https://github.com/martinus/robin-hood-hashing) - C++14向けの、ロビンフッドハッシュ法を用いた高速でメモリ効率のよいハッシュテーブル。 [MIT]
* [robin-map](https://github.com/Tessil/robin-map) - ロビンフッドハッシュ法を使用する高速ハッシュマップおよびハッシュセット。 [MIT]
* [sparsepp](https://github.com/greg7mdp/sparsepp) - C++向けの高速でメモリ効率に優れたハッシュマップ。 [BSD 3-clause]
* [sqlitemap](https://github.com/bw-hro/sqlitemap) - SQLiteをバックエンドとする永続マップ。 [MIT]
* [st_tree](https://github.com/erikerlandson/st_tree) - 高速で柔軟なC++ツリーデータ構造用テンプレートクラス。 [Apache-2.0]
* [svector](https://github.com/martinus/svector) - C++17以降向けの、SVO最適化されたコンパクトなvector。 [MIT]
* [tree.hh](https://github.com/kpeeters/tree.hh) - STL風のヘッダーオンリーC++ツリーライブラリ。 [GPL2+]
* [unordered_dense](https://github.com/martinus/unordered_dense) - ロビンフッド方式の後方シフト削除に基づく、高速で高密度格納のハッシュマップおよびハッシュセット。 [MIT]
* [fifo_map](https://github.com/nlohmann/fifo_map) - FIFO順序のC++連想コンテナ。 [MIT]
* [ordered-map](https://github.com/Tessil/ordered-map) - 挿入順序を保持するC++ハッシュマップおよびハッシュセット。 [MIT]

## 暗号技術
*暗号技術および暗号化ライブラリ*

* [Bcrypt](https://bcrypt.sourceforge.net/) - クロスプラットフォームのファイル暗号化ユーティリティ。暗号化ファイルは、対応するすべてのOSとプロセッサ間で移植可能です。 [BSD]
* [BeeCrypt](https://beecrypt.sourceforge.net/) - ポータブルで高速な暗号ライブラリ。 [LGPLv2.1+]
* [BoringSSL](https://boringssl.googlesource.com/boringssl) - Googleのニーズに応えるために設計されたOpenSSLのフォーク。 [Apache2]
* [Botan](https://botan.randombit.net/) - C++向け暗号ライブラリ。 [BSD-2]
* [Crypto++](https://github.com/weidai11/cryptopp) - 暗号方式を実装する無料のC++クラスライブラリ。 [Boost] [website](https://www.cryptopp.com/)
* [digestpp](https://github.com/kerukuro/digestpp) - C++11のヘッダーオンリー・メッセージダイジェスト（ハッシュ）ライブラリ。 [PublicDomain]
* [GnuPG](https://www.gnupg.org/) - OpenPGP標準の完全かつ無料の実装。 [GPL]
* [GnuTLS](https://www.gnutls.org/) - SSL、TLS、DTLSプロトコルを実装した安全な通信ライブラリ。 [LGPL2.1]
* [Libgcrypt](https://www.gnu.org/software/libgcrypt/) - もともとGnuPGのコードを基にした汎用暗号ライブラリ。 [LGPLv2.1+]
* [LibreSSL](https://www.libressl.org/) - 2014年にOpenSSLからフォークされた、SSL/TLSプロトコルの無料実装。 [?]
* [libsodium](https://github.com/jedisct1/libsodium) - NaClベースのポータブル／パッケージ可能な暗号ライブラリ。明確な方針を持ち、使いやすい設計。 [ISC]
* [libhydrogen](https://github.com/jedisct1/libhydrogen) - 制約のある環境に適した、軽量で安全かつ使いやすい暗号ライブラリ。 [ISC]
* [LibTomCrypt](https://github.com/libtom/libtomcrypt) - かなり包括的でモジュール式、ポータブルな暗号ツールキット。 [WTFPL]
* [mbedTLS](https://github.com/ARMmbed/mbedtls) - 以前はPolarSSLとして知られていた、オープンソースでポータブル、使いやすく、読みやすく柔軟なSSLライブラリ。 [Apache2] [website](https://tls.mbed.org/)
* [Nettle](https://www.lysator.liu.se/~nisse/nettle/) - 低レベル暗号ライブラリ。 [LGPL]
* [OpenSSL](https://github.com/openssl/openssl) - 堅牢で商用レベルの機能を完全に備えたオープンソース暗号ライブラリ。 [Apache] [website](https://www.openssl.org/)
* [retter](https://github.com/MaciejCzyzewski/retter) - 暗号技術に関連するハッシュ関数、暗号、ツール、ライブラリ、資料のコレクション。
* [s2n](https://github.com/awslabs/s2n) - TLS/SSLプロトコルの実装。 [Apache]
* [sha1collisiondetection](https://github.com/cr-marcstevens/sha1collisiondetection) - ファイル内のSHA-1衝突を検出するライブラリおよびコマンドラインツール。 [MIT]
* [stduuid](https://github.com/mariusbancila/stduuid) - クロスプラットフォーム対応のC++17 UUID実装。 [MIT]
* [Tink](https://github.com/google/tink) - 安全で正しく使いやすく、誤用しにくい暗号APIを提供する多言語・クロスプラットフォームライブラリ。 [Apache-2.0]
* [Tiny AES in C](https://github.com/kokke/tiny-AES-c) - Cによる小型でポータブルなAES128/192/256実装。 [PublicDomain]
* [tiny-ECDH-c](https://github.com/kokke/tiny-ECDH-c) - CによるECDH鍵共有プロトコルの小型でポータブルな実装。 [PublicDomain]
* [Themis](https://github.com/cossacklabs/themis) - モバイルおよびサーバープラットフォーム向けに、共通鍵・公開鍵暗号化と前方秘匿性を備えたセキュアソケットを提供し、データ保護を容易にする暗号ライブラリ。 [Apache2]
* [HEhub](https://github.com/primihub/HEhub) - 準同型暗号とその応用のためのライブラリ。 [Apache2]
* [Qt-Secret](https://github.com/QuasarApp/Qt-Secret) - C++プロジェクト向けQtベースのシンプルな暗号化ライブラリ。 [LGPL]
* [micro-ecc](https://github.com/kmackay/micro-ecc) - 8、32、64ビットプロセッサ向けの小型で高速なECDHおよびECDSA実装。 [BSD-2-Clause]
* [crypto-algorithms](https://github.com/B-Con/crypto-algorithms) - AES、SHAなど、標準暗号アルゴリズムの基本的なC実装。 [PublicDomain]
* [aes-stream](https://github.com/jedisct1/aes-stream) - C向けの高速なAESベースストリーム暗号。 [ISC]

## CSV
*カンマ区切り値（CSV）ファイルを解析するライブラリ*

* [commata](https://github.com/furfurylic/commata) - C++17向けの、もうひとつのヘッダーオンリーCSVパーサー。 [Unlicense]
* [csv2](https://github.com/p-ranav/csv2) - モダンC++向けの高速CSVパーサー。 [MIT]
* [Csv::Parser](https://github.com/ashaduri/csv-parser) - コンパイル時と実行時に対応するC++17製CSVパーサー。 [Zlib]
* [Fast C++ CSV Parser](https://github.com/ben-strasser/fast-cpp-csv-parser) - CSVファイルを読み込む小型で使いやすく高速なヘッダーオンリーライブラリ。 [BSD-3-Clause]
* [Glaze](https://github.com/stephenberry/glaze) - リフレクションに対応した高性能ヘッダーオンリーCSVライブラリ。 [MIT]
* [lazycsv](https://github.com/ashtum/lazycsv) - モダンC++向けの高速で軽量なシングルヘッダーCSVパーサー。 [MIT]
* [rapidcsv](https://github.com/d99kris/rapidcsv) - 使いやすいヘッダーオンリーC++ CSVパーサーライブラリ。 [BSD-3-Clause]
* [ssp](https://github.com/red0124/ssp) - 高速で多用途、モダンC++ APIを備えたヘッダーオンリーの「CSV」パーサー。 [MIT]
* [Vince's CSV Parser](https://github.com/vincentlaucsb/csv-parser) - オプションの型変換と統計機能を備えた、高速で自己完結型のストリーミングC++17 CSVパーサー。 [MIT]
* [zsv](https://github.com/liquidaty/zsv) - 拡張可能なCLIを備えた世界最速（SIMD）のCSVパーサー。 [MIT]

## データベース
*データベースライブラリ、SQLサーバー、ODBCドライバーおよびツール*

* [ClickHouse](https://github.com/ClickHouse/clickhouse-cpp) - ClickHouse DBMS向けC++クライアント。 [Apache2]
* [CrossDB](https://github.com/crossdb-org/crossdb) - 超高性能で軽量な組み込み型およびサーバー型OLTPリレーショナルDBMS。 [MPL-2.0] [website](https://crossdb.org/)
* [Doltlite](https://github.com/dolthub/doltlite) - バージョン管理機能付きSQLite。 [PublicDomain/Apache2]
* [DuckDB](https://duckdb.org/) - プロセス内で動作するSQL OLAPデータベース管理システム。 [MIT] [website](https://duckdb.org/)
* [hiberlite](https://github.com/paulftw/hiberlite) - sqlite3向けC++オブジェクトリレーショナルマッピング。 [BSD]
* [Hiredis](https://github.com/redis/hiredis) - Redisデータベース向けの最小限のCクライアントライブラリ。 [BSD]
* [Infinity](https://github.com/infiniflow/infinity) - LLMアプリケーション向けに構築されたAIネイティブデータベース。非常に高速なベクトル検索と全文検索を提供。 [Apache2]
* [Kuzu](https://github.com/kuzudb/kuzu) - クエリ速度と拡張性を重視して構築された、組み込み可能なプロパティグラフDBMS。Cypherを実装。 [MIT]
* [Kvrocks](https://github.com/apache/incubator-kvrocks) - RocksDBをストレージエンジンとして使用し、Redisプロトコルと互換性のある分散キー・バリューNoSQLデータベース。 [Apache2]
* [Ladybug](https://github.com/LadybugDB/ladybug) - クエリ速度と拡張性を重視して構築された組み込み型グラフデータベース。 [MIT] [website](https://ladybugdb.com/)
* [LevelDB](https://github.com/google/leveldb) - Googleで開発された高速なキー・バリューストレージライブラリ。文字列キーから文字列値への順序付きマッピングを提供。 [BSD]
* [libpg_query](https://github.com/pganalyze/libpg_query) - サーバー環境外からPostgreSQLパーサーにアクセスするためのCライブラリ。 [BSD-3-Clause]
* [libpqxx](https://github.com/jtv/libpqxx) - PostgreSQLの公式C++クライアントAPI。 [BSD-3-Clause]
* [LMDB](https://www.symas.com/lmdb) - 完全なACID特性を備えた、非常に高速な組み込み型キー・バリューストア。 [OpenLDAP]
* [LMDB++](https://github.com/bendiken/lmdbxx) - LMDB組み込みデータベースライブラリのC++11ラッパー。 [PublicDomain]
* [mgclient](https://github.com/memgraph/mgclient) - C/C++向けMemgraphクライアント。 [Apache2]
* [MongoDB C Driver](https://github.com/mongodb/mongo-c-driver) - C向けMongoDBクライアントライブラリ。 [Apache2]
* [MongoDB C++ Driver](https://github.com/mongodb/mongo-cxx-driver) - MongoDB向けC++ドライバー。 [Apache2]
* [MongoDB Libbson](https://github.com/mongodb/libbson) - BSONユーティリティライブラリ。 [Apache2]
* [MySQL++](https://www.tangentsoft.net/mysql++/) - MySQLのC API向けC++ラッパー。 [LGPL]
* [nanodbc](https://github.com/nanodbc/nanodbc) - ネイティブC ODBC API向け小型C++ラッパー。 [MIT]
* [ODB](https://www.codesynthesis.com/products/odb/) - C++向けのオープンソース、クロスプラットフォーム、クロスデータベース対応オブジェクトリレーショナルマッピング（ORM）システム。 [GPLv2]
* [redis3m](https://github.com/luca3m/redis3m) - センチネルとすぐに使えるパターンに対応した、明快なC++インターフェイスを持つhiredisラッパー。 [Apache2]
* [Reindexer](https://github.com/Restream/reindexer) - 高水準のクエリビルダーインターフェイスを備えた、組み込み可能なインメモリ文書指向データベース。 [Apache2] [website](https://reindexer.io/)
* [RocksDB](https://github.com/facebook/rocksdb) - Facebook製の高速ストレージ向け組み込みキー・バリューストア。 [BSD]
* [SimDB](https://github.com/LiveAsynchronousVisualizedArchitecture/simdb) - 高性能、共有メモリ、ロックフリー、クロスプラットフォーム、単一ファイル、最小限の依存関係を特徴とするC++11キー・バリューストア。 [Apache2]
* [SlothDB](https://github.com/SouravRoy-ETL/slothdb) - ノートPC、サーバー、ブラウザーのどこでも動作する組み込みSQLデータベース。 [MIT] [website](https://slothdb.org/)
* [SOCI](https://github.com/SOCI/soci) - C++向けデータベース抽象化レイヤー。 [Boost]
* [Speedb](https://github.com/speedb-io/speedb) - RocksDB互換の、高性能でスケーラブルな組み込みキー・バリューストアを目指すコミュニティ主導プロジェクト。 [Apache2]
* [sqlgen](https://github.com/getml/sqlgen) - PythonのSQLAlchemy/SQLModelやRustのDieselに似た、リフレクションベースのC++20 ORMおよびSQLクエリー生成器。 [MIT]
* [SQLite](https://www.sqlite.org/) - わずか数百KBでプロジェクトに直接組み込める、機能豊富な完全組み込み型リレーショナルデータベース。 [PublicDomain]
* [SQLiteC++](https://github.com/SRombauts/SQLiteCpp) - 使いやすいC++ SQLite3ラッパー。 [MIT]
* [sqlite_modern_cpp](https://github.com/SqliteModernCpp/sqlite_modern_cpp) - SQLiteライブラリ向けヘッダーオンリーC++14ラッパー。 [MIT]
* [sqlite_orm](https://github.com/fnc12/sqlite_orm) - モダンC++向けの軽量なヘッダーオンリーSQLite ORMライブラリ。 [AGPL + paid MIT]
* [sqlpp11](https://github.com/rbock/sqlpp11) - C++でSQLクエリーと結果を扱うための型安全な組み込みDSL。 [BSD-2-Clause]
* [sqlpp23](https://github.com/rbock/sqlpp23) - C++向け型安全SQLライブラリ。 [BSD-2-Clause]
* [TidesDB](https://github.com/tidesdb/tidesdb) - フラッシュメモリとRAMの最適化を目的として設計された、高性能で耐久性のあるトランザクション対応組み込みストレージエンジン。 [MPL-2.0] [website](https://tidesdb.com/)
* [TileDB](https://github.com/TileDB-Inc/TileDB) - 高速な密／疎多次元配列DBMS。 [MIT] [website](https://tiledb.io/)
* [TinyORM](https://github.com/silverqx/TinyORM) - モダンC++ ORMライブラリ。 [MIT] [website](https://www.tinyorm.org/)
* [UnQLite](https://github.com/symisc/unqlite) - 自己完結型、サーバーレス、設定不要でトランザクションに対応したNoSQLエンジン。 [BSD-2-Clause] [website](https://unqlite.symisc.net/)
* [upscaledb](https://upscaledb.com) - 組み込み型の「型付き」キー・バリューストア。クエリーインターフェイスを内蔵。 [GPLv3]
* [TigerBeetleDB C++ client (Community)](https://github.com/kassane/tigerbeetle-cpp) - TigerBeetleは、将来の金融サービスを支えるミッションクリティカルな安全性と性能を実現するための財務会計データベースです。 [BSL-1.0]
* [Trilogy](https://github.com/trilogy-libraries/trilogy) - 性能、柔軟性、組み込みやすさを重視して設計された、MySQL互換データベースサーバー向けクライアントライブラリ。 [MIT]
* [UStore](https://github.com/unum-cloud/ustore) - BLOB、JSON、グラフ向けのマルチモーダルデータベース。 [Apache2]
* [Velox](https://github.com/facebookincubator/velox) - クエリエンジンとデータ処理システムの最適化を目的とした、C++ベクトル化データベース高速化ライブラリ。 [Apache-2.0] [website](https://velox-lib.io/)
* [Zvec](https://github.com/alibaba/zvec) - 軽量で非常に高速なプロセス内ベクトルデータベース。 [Apache2] [website](https://zvec.org/)
* [constexpr-sql](https://github.com/mkitzan/constexpr-sql) - C++17のコンパイル時SQLクエリーパーサー兼実行器。 [MIT]
* [NuDB](https://github.com/cppalliance/NuDB) - SSD向けの高速な追記専用キー・バリューストア。 [Boost]

## データ可視化
*データ可視化ライブラリ*

* [gplot++](https://github.com/ziotom78/gplotpp) - Gnuplotと連携するクロスプラットフォームのヘッダーオンリーC++プロットライブラリ。 [MIT]
* [matplotplusplus](https://github.com/alandefreitas/matplotplusplus) - データ可視化向けC++グラフィックスライブラリ。 [MIT] [website](https://alandefreitas.github.io/matplotplusplus/)
* [mathplot](https://github.com/sebsjames/mathplot) - モダンOpenGLを使う、ヘッダーオンリーのC++グラフ作成・データ可視化ライブラリ。 [Apache-2.0] [website](https://sebsjames.github.io/mathplot/)
* [Plotly++](https://github.com/jimmyorourke/plotlypp) - 対話型データ可視化を作成するための、Plotly.js figure spec向けC++インターフェイス。 [MIT]
* [matplotlib-cpp](https://github.com/lava/matplotlib-cpp) - Pythonのmatplotlibプロットライブラリ向けC++ラッパー。 [MIT]

## デバッグ
*デバッグライブラリ、メモリ／リソースリーク検出、単体テスト*

* [Attest](https://github.com/tugglecore/attest) - パラメーター化され、ライフサイクルを考慮したテストとアサーション、および即時フォーマットメッセージに対応する、クロスプラットフォームでヒープを使わないCテストフレームワーク。 [MIT]
* [backward-cpp](https://github.com/bombela/backward-cpp) - C++向けの美しいスタックトレース整形表示ツール。 [MIT]
* [Bencher](https://bencher.dev/) - CIで性能の後退を検出するために設計された、継続的ベンチマークツール群。
* [benchmark](https://github.com/google/benchmark) - Googleが提供する小型マイクロベンチマーク支援ライブラリ。 [Apache2]
* [Boost.Test](https://github.com/boostorg/test) - Boostテストライブラリ。 [Boost] [website](https://boost.org/libs/test)
* [check](https://github.com/libcheck/check) - C向け単体テストフレームワーク。 [LGPL-2.1] [website](https://libcheck.github.io/check/)
* [doctest](https://github.com/onqtam/doctest) - 最軽量でありながら機能豊富なC++シングルヘッダーテストフレームワーク。 [MIT]
* [Catch2](https://github.com/catchorg/Catch2) - 単体テスト、TDD、BDD向けのモダンなC++ネイティブテストフレームワーク。 [Boost]
* [Celero](https://github.com/DigitalInBlue/Celero) - C++ベンチマークフレームワーク。 [Apache2]
* [cpp-dump](https://github.com/philip82148/cpp-dump) - ユーザー定義型を含むあらゆる変数を出力できる、デバッグ用C++ライブラリ。 [MIT]
* [CppUTest](https://github.com/cpputest/cpputest) - C/C++向け単体テストおよびモックフレームワーク。 [BSD-3-clause]
* [CUTE](https://cute-test.com) - C++単体テストをより簡単に。 [LGPL3]
* [CMocka](https://cmocka.org/) - モックオブジェクトに対応するC単体テストフレームワーク。 [Apache2]
* [CppBenchmark](https://github.com/chronoxor/CppBenchmark) - ナノ秒単位の計測精度を備えたC++性能ベンチマークフレームワーク。 [MIT]
* [Cpptrace](https://github.com/jeremy-rifkin/cpptrace) - C++11以降に対応した、シンプルでポータブルな自己完結型C++スタックトレースライブラリ。 [MIT]
* [CppUnit](https://www.freedesktop.org/wiki/Software/cppunit/) - JUnitのC++移植版。 [LGPL2]
* [CrashCatch](https://github.com/keithpotz/CrashCatch) - スタックトレースを記録し、`.dmp`および`.txt`形式のクラッシュダンプを作成するC++シングルヘッダーのクラッシュレポート機能。 [MIT] [website](https://keithpotz.github.io/CrashCatch)
* [CTest](https://cmake.org/cmake/help/v2.8.8/ctest.html) - CMakeのテストドライバープログラム。 [BSD]
* [dbg-macro](https://github.com/sharkdp/dbg-macro) - C++向けdbg(…)マクロ。 [MIT]
* [DebugViewPP](https://github.com/CobaltFusion/DebugViewPP) - デバッグログビューアー。 [Boost]
* [Deleaker](https://www.deleaker.com) - メモリ、GDI、ハンドルのリークなどを検出するリソースリーク検出ツール。
* [FakeIt](https://github.com/eranpeer/FakeIt) - C++向けのシンプルなモックフレームワーク。 [MIT]
* [fff](https://github.com/meekrosoft/fff) - 偽のC関数を作成するマイクロフレームワーク。 [MIT]
* [Google Mock](https://github.com/google/googletest/blob/master/googlemock/README.md) - C++のモッククラスを作成して使うためのライブラリ。 [BSD]
* [Google Test](https://github.com/google/googletest) - Google C++テストフレームワーク。 [BSD]
* [Hippomocks](https://github.com/dascandy/hippomocks) - シングルヘッダーのモックフレームワーク。 [LGPL-2.1]
* [IceCream-Cpp](https://github.com/renatoGarcia/icecream-cpp) - デバッグにcoutやprintfを使う必要はもうありません。 [MIT]
* [ig-debugheap](https://github.com/deplinenoise/ig-debugheap) - メモリエラーの追跡に役立つマルチプラットフォームのデバッグヒープ。 [BSD]
* [libassert](https://github.com/jeremy-rifkin/libassert) - 過剰なまでに作り込まれたC++アサーションライブラリ。 [MIT]
* [libtap](https://github.com/zorgnax/libtap) - Cでテストを記述。 [GPL2]
* [microprofile](https://github.com/jonasmr/microprofile) - 複数プラットフォーム向けWebビュー付きプロファイラー。 [Unlicense]
* [MinUnit](https://github.com/siu/minunit) - 単一ヘッダーファイルに自己完結した、C向け最小限の単体テストフレームワーク。 [MIT]
* [nanobench](https://github.com/martinus/nanobench) - C++11/14/17/20向けの、シンプルで高速かつ正確なシングルヘッダー・マイクロベンチマーク機能。 [MIT] [website](https://nanobench.ankerl.com)
* [Nanotimer](https://github.com/mattreecebentley/plf_nanotimer) - ベンチマーク用のシンプルでオーバーヘッドの小さいクロスプラットフォームタイマークラス。 [zLib] [website](https://www.plflib.org/nanotimer.htm)
* [Nonius](https://github.com/libnonius/nonius) - C++マイクロベンチマークフレームワーク。 [CC]
* [Remotery](https://github.com/Celtoys/Remotery) - Webビューアー付きの単一Cファイルプロファイラー。 [Apache2]
* [snitch](https://github.com/cschreib/snitch) - 軽量なC++20テストフレームワーク。 [Boost]
* [Touca](https://github.com/trytouca/trytouca) - セルフホスト可能なオープンソース回帰テストシステム。 [Apache2] [website](https://touca.io/)
* [UnitTest++](https://github.com/unittest-cpp/unittest-cpp) - C++向け軽量単体テストフレームワーク。 [MIT/X Consortium license]
* [Unity](https://github.com/ThrowTheSwitch/Unity) - C向けのシンプルな単体テスト。 [MIT]
* [utest.h](https://github.com/sheredom/utest.h) - CおよびC++向けシングルヘッダー単体テストフレームワーク。 [Unlicense]
* [utl::profiler](https://github.com/DmitriBogdanov/UTL/blob/master/docs/module_profiler.md) - C++17向けシングルヘッダープロファイラー。 [MIT]
* [μt](https://github.com/boost-experimental/ut) - C++20のシングルヘッダー／シングルモジュールで、マクロを使わないμ（マイクロ）／単体テストフレームワーク。 [Boost]
* [VLD](https://kinddragon.github.io/vld//) - Visual Leak Detector。Visual C++向けの無料で堅牢なオープンソースメモリリーク検出システム。
* [heaptrack](https://github.com/KDE/heaptrack) - Linux向けヒープメモリプロファイラー。 [LGPL-2.1]

## ドキュメント

* [Doxide](https://github.com/lawmurray/doxide) - YAMLで設定し、Markdownを出力する、モダンC++向けの最新ドキュメント生成ツール。 [Apache 2.0] [website](https://doxide.org)
* [doxygen](https://github.com/doxygen/doxygen) :zap: - 注釈付きC++ソースからドキュメントを生成する事実上の標準ツール。 [GPL2] [website](https://www.doxygen.org)
* [doxyrest](https://github.com/vovkos/doxyrest) - Doxygen XMLをSphinx用reStructuredTextに変換するコンパイラー。 [MIT]
* [hdoc](https://github.com/hdoc/hdoc) - C++向けのモダンなドキュメントツール。 [AGPL/Proprietary] [website](https://hdoc.io)
* [Natural Docs](https://github.com/NaturalDocs/NaturalDocs) - 複数のプログラミング言語に対応したオープンソースのドキュメント生成ツール。 [AGPL/Proprietary] [website](https://www.naturaldocs.org)
* [Sourcey](https://github.com/sourcey/sourcey) - Doxygen XMLとOpenAPI、godoc、MCP、Markdownを取り込む静的ドキュメント生成ツール。 [AGPL-3.0] [website](https://sourcey.com)
* [Sphinx](https://github.com/sphinx-doc/sphinx) - 分かりやすく美しいドキュメントを簡単に作成できます。 [BSD-2-Clause] [website](https://www.sphinx-doc.org)

## DSP
*デジタル信号処理。*

* [DSPFilters](https://github.com/vinniefalco/DSPFilters) - デジタル信号処理向けの便利なC++クラス集。 [MIT]
* [fCWT](https://github.com/fastlib/fCWT) - 高速連続ウェーブレット変換（fCWT）は、CWTを高速計算するライブラリです。 [Apache-2.0]
* [FFTW](https://www.fftw.org/) - 1次元または多次元の離散フーリエ変換（DFT）を計算するCライブラリ。 [GPL]
* [iir1](https://github.com/berndporr/iir1) - リアルタイムIIR C++フィルターライブラリ。 [MIT]
* [kissfft](https://github.com/mborgerding/kissfft) - シンプルさを最優先した高速フーリエ変換（FFT）ライブラリ。 [BSD-3-Clause]
* [pocketfft](https://github.com/mreineck/pocketfft) - FFTPackを基盤とし、いくつかの改良を加えたFFT実装。 [BSD-3-Clause]
* [wavelib](https://github.com/rafat/wavelib) - 1次元および2次元ウェーブレット変換のC実装。 [BSD-3-Clause]

## フォント
*フォントファイルを解析・操作するライブラリ。*

* [Fontconfig](https://gitlab.freedesktop.org/fontconfig/fontconfig) - フォント設定およびカスタマイズライブラリ。 [MIT] [website](https://www.freedesktop.org/wiki/Software/fontconfig/)
* [FreeType](https://www.freetype.org/) - FreeTypeは、フォントを描画するために自由に利用できるソフトウェアライブラリです。 [FTL & GPLv2]
* [otfcc](https://github.com/caryll/otfcc) - OpenTypeフォントファイルを解析・書き込むためのCライブラリおよびユーティリティ。 [Apache-2.0]
* [harfbuzz](https://github.com/harfbuzz/harfbuzz) - テキストシェーピングエンジン。 [Old MIT]
* [libschrift](https://github.com/tomolt/libschrift) - 軽量なTrueTypeフォントレンダリングライブラリ。 [ISC]
* [SheenBidi](https://github.com/Tehreer/SheenBidi) - Unicode双方向アルゴリズムの高度な実装。 [Apache-2.0]

## ゲームエンジン

* [Acid](https://github.com/Equilibrium-Games/Acid) - 高速なC++17 Vulkanゲームエンジン。 [MIT]
* [Allegro](https://liballeg.org/) - 主にビデオゲームおよびマルチメディアプログラミング向けのクロスプラットフォームライブラリ。 [zlib]
* [Axmol Engine](https://github.com/axmolengine/axmol) - Cocos2d-x-4.0から派生した、デスクトップ、モバイル、XBOX（UWP）向けクロスプラットフォームゲームエンジン。 [MIT] [website](https://axmol.dev/)
* [Cocos2d-x](https://www.cocos2d-x.org/) - 2Dゲーム、インタラクティブブック、デモ、その他のグラフィカルアプリケーションを構築するマルチプラットフォームフレームワーク。 [MIT]
* [Corange](https://github.com/orangeduck/Corange) - 純粋なC、SDL、OpenGLで記述されたゲームエンジン。 [BSD]
* [crown](https://github.com/dbartolini/crown) - 一般用途のデータ駆動型ゲームエンジン。最初から正統的なC++で記述され、ミニマルでデータ指向の設計思想を備えています。 [MIT]
* [delta3d](https://sourceforge.net/projects/delta3d/) - 堅牢なシミュレーションプラットフォーム。 [LGPL2]
* [EnTT](https://github.com/skypjack/entt) - ゲームとモダンC++の融合。 [MIT]
* [GamePlay](https://github.com/gameplay3d/GamePlay) - 2D/3Dモバイル・デスクトップゲームを作成するクロスプラットフォームのネイティブC++ゲームフレームワーク。 [Apache2]
* [Godot](https://github.com/godotengine/godot) - 機能を完全に備えたオープンソースのMITライセンスゲームエンジン。 [MIT]
* [Grit](https://github.com/grit-engine/grit-engine) - オープンワールド3Dゲームを実装する無料ゲームエンジンを構築するコミュニティプロジェクト。 [MIT]
* [Halley](https://github.com/amzeratul/halley) - 「真の」エンティティ・コンポーネント・システムを備えた、C++14製の軽量ゲームエンジン。 [Apache 2.0]
* [Hazel Game Engine](https://github.com/TheCherno/Hazel) - Hazelは、主にWindows向けの開発初期段階にある対話型アプリケーションおよびレンダリングエンジンです。 [Apache-2.0 license]
* [IX-Ray Platform](https://github.com/ixray-team/ixray-1.6-stcop) - ゲーム体験の向上とMOD開発の簡略化を目指すX-Ray 1.6エンジンのフォーク。 [Modified MIT/non-commercial only]
* [JNGL](https://github.com/jhasse/jngl/) - Linux、Windows、macOS、Android、iOS、Xbox、Nintendo Switch、Web向け2Dライブラリ。 [zlib] [website](https://bixense.com/jngl/)
* [KlayGE](https://github.com/gongminmin/KlayGE) - プラグインベースのアーキテクチャを持つクロスプラットフォームのオープンソースゲームエンジン。 [GPLv2] [website](https://www.klayge.org/)
* [nCine](https://github.com/nCine/nCine) - C++11で記述され、必要に応じてLuaでスクリプト化できる、性能重視のクロスプラットフォーム2Dゲームエンジン。 [MIT] [website](https://ncine.github.io/)
* [o3de](https://github.com/o3de/o3de) - Amazon Lumberyardを基盤とするオープンソース、リアルタイム、マルチプラットフォーム対応の3Dエンジン。 [Apache2] [website](https://o3de.org/)
* [OpenXRay](https://github.com/OpenXRay/xray-16) - S.T.A.L.K.E.R.シリーズで使用される、コミュニティ改変版X-Rayエンジン。 [Modified BSD/non-commercial only]
* [Oxygine](https://oxygine.org/) - クロスプラットフォームの2D C++ゲームエンジン。 [MIT]
* [Panda3D](https://github.com/panda3d/panda3d) - PythonおよびC++プログラム向けの、3Dレンダリングとゲーム開発のフレームワーク兼ゲームエンジン。 [Modified BSD] [website](https://www.panda3d.org/)
* [PixelGameEngine](https://github.com/OneLoneCoder/olcPixelGameEngine) - javidx9のYouTube動画やプロジェクトで使用されるolcPixelGameEngineの公式配布版。 [OLC3]
* [Polycode](https://github.com/ivansafrin/Polycode) - Luaバインディングを備えた、C++クリエイティブコーディング向けクロスプラットフォームフレームワーク。 [MIT]
* [quakeforge](https://github.com/quakeforge/quakeforge) - 20年以上にわたって開発が続く、オリジナルQuakeエンジンコードの積極的に保守されているブランチ。 [GPL-2.0]
* [raylib](https://github.com/raysan5/raylib) - ビデオゲームプログラミングを楽しむための、シンプルで使いやすいライブラリ。 [zlib/libpng] [website](https://www.raylib.com/)
* [Spring](https://github.com/spring/spring) - 強力で無料、クロスプラットフォームのRTSゲームエンジン。 [GPLv2/GPLv3] [website](https://springrts.com/)
* [Torque2D](https://github.com/TorqueGameEngines/Torque2D) - 2Dゲーム開発向けに構築された、オープンソースでクロスプラットフォームのC++エンジン。 [MIT] [website](https://torque3d.org/torque2d)
* [Torque3D](https://github.com/TorqueGameEngines/Torque3D) - 3Dゲーム開発向けに構築されたオープンソースC++エンジン。 [MIT] [website](https://torque3d.org/torque3d)
* [toy engine](https://github.com/hugoam/toy) - 完全な2Dまたは3Dゲームを迅速に反復設計できる、シンプルで表現力豊かなC++イディオムを備えた、薄くモジュール式のC++ゲームエンジン。
* [Urho3D](https://urho3d.github.io/) - OGREとHorde3Dに大きな影響を受けた、C++製の無料で軽量なクロスプラットフォーム2D/3Dゲームエンジン。 [MIT]
* [Zodiac Engine](https://github.com/JeanPhilippeKernel/RendererEngine) - Vulkanを使ったC++20製のオープンソース・クロスプラットフォーム3Dレンダリングエンジン兼エディター（ZEngine）。 [MIT]
* [ezEngine](https://github.com/ezEngine/ezEngine) - モジュール式で柔軟な設計思想を持ち、多様な用途に適応できるC++製の無料オープンソースゲームエンジン。 [MIT] [website](https://ezengine.net/)

## グラフ

* [CXXGraph](https://github.com/ZigRazor/CXXGraph) - 表現とアルゴリズム実行に使える、無料のC++17ヘッダーオンリーグラフライブラリ。 [AGPL-3.0]
* [Graaf](https://github.com/bobluppes/graaf) - 汎用の軽量C++20グラフライブラリ。 [MIT] [website](https://bobluppes.github.io/graaf/)

## GUI
*グラフィカルユーザーインターフェイス*

* [Boden](https://github.com/AshampooSystems/boden) - ネイティブのモバイル向けクロスプラットフォームGUIフレームワーク。 [GPL/LGPL/Proprietary] [website](https://www.boden.io)
* [Brisk](https://github.com/brisklib/brisk) - MVVMとリアクティブ機能を備えたクロスプラットフォームC++20 GUIフレームワーク。拡張可能でGPUアクセラレーションによるレンダリングに対応。 [GPL/Proprietary] [website](https://brisklib.com)
* [CEGUI](https://cegui.org.uk/) - 柔軟なクロスプラットフォームGUIライブラリ。
* [Elements](https://github.com/cycfi/elements) - 軽量で細粒度、解像度非依存かつモジュール式のGUIライブラリ。 [MIT]
* [FLTK](https://www.fltk.org/index.php) - 高速で軽量なクロスプラットフォームC++ GUIツールキット。 [LGPL2]
* [FOX Toolkit](https://fox-toolkit.org) - オープンソースのクロスプラットフォーム・ウィジェットツールキット。 [LGPL]
* [GacUI](https://github.com/vczh-libraries/GacUI) - WYSIWYG開発ツール、XML対応、組み込みデータバインディングとMVVM機能を備えた、GPUアクセラレーション対応C++ユーザーインターフェイス。 [Ms-PL]
* [GTK+](https://www.gtk.org/) - グラフィカルユーザーインターフェイスを作成するマルチプラットフォームツールキット。 [LGPL]
* [gtkmm](https://www.gtkmm.org/en/) - 人気のGUIライブラリGTK+向け公式C++インターフェイス。 [LGPL]
* [imgui](https://github.com/ocornut/imgui) - 最小限の依存関係を持つイミディエートモード・グラフィカルユーザーインターフェイス。 [MIT]
* [implot](https://github.com/epezent/implot) - imgui向けイミディエートモード・プロットウィジェット。 [MIT]
* [iup](https://www.tecgraf.puc-rio.br/iup) - グラフィカルユーザーインターフェイスを構築するマルチプラットフォームツールキット。 [MIT]
* [libui](https://github.com/andlabs/libui) - 対応する各プラットフォームのネイティブGUI技術を利用する、シンプルでポータブル（ただし柔軟性もある）なC製GUIライブラリ。 [MIT]
* [MyGUI](https://github.com/MyGUI/mygui) - 高速で柔軟、シンプルなGUI。 [MIT]
* [nana](https://github.com/cnjinhao/nana) - モダンC++スタイルのGUIプログラミング向けクロスプラットフォームライブラリ。 [Boost]
* [NanoGui](https://github.com/mitsuba-renderer/nanogui) - OpenGL 3.x以降向けの最小限のクロスプラットフォーム・ウィジェットライブラリ。 [BSD]
* [NAppGUI](https://github.com/frang75/nappgui_src) - ANSI Cでクロスプラットフォームのデスクトップアプリを構築するSDK。 [MIT] [website](https://nappgui.com/en/home/web/home.html)
* [nuklear](https://github.com/Immediate-Mode-UI/Nuklear) - 単一ヘッダーのANSI C GUIライブラリ。 [PublicDomain]
* [QCustomPlot](https://qcustomplot.com/) - 追加依存関係のないQtプロットウィジェット。 [GPLv3]
* [Qwt](https://qwt.sourceforge.net/) - 技術系アプリケーション向けQtウィジェット。 [Own based on LGPL]
* [QwtPlot3D](https://qwtplot3d.sourceforge.net/) - 豊富な機能を備えたQt/OpenGLベースのC++プログラミングライブラリ。主に多数の3Dウィジェットを提供します。 [zlib]
* [RmlUi](https://github.com/mikke89/RmlUi) - 進化したHTML/CSSユーザーインターフェイスライブラリ。libRocketのフォーク。 [MIT]
* [Saucer](https://github.com/saucer/saucer) - モダンなクロスプラットフォームC++ WebViewライブラリ。 [MIT]
* [Sciter](https://sciter.com/) - モダンなデスクトップアプリケーションのUIレイヤーとして使うことを目的とした、組み込み可能なHTML/CSS/スクリプトエンジン。 [Free/Commercial]
* [Slint](https://github.com/slint-ui/slint) - デスクトップおよび組み込み向けの軽量GUIツールキット。 [GPL/Free/Proprietary] [website](https://slint.dev/)
* [TGUI](https://github.com/texus/TGUI) - クロスプラットフォーム対応のモダンC++ GUI。 [Zlib] [website](https://tgui.eu/)
* [WebUI](https://github.com/webui-dev/webui) - 好みのバックエンド言語とフロントエンドのHTML5を使い、あらゆるWebブラウザーをGUIとして利用。 [MIT] [website](https://webui.me/)
* [wxCharts](https://github.com/wxIshiko/wxCharts) - wxWidgetsアプリケーションでチャートを作成するライブラリ。 [MIT] [website](https://www.wxishiko.com/wxCharts/)
* [wxWidgets](https://wxwidgets.org/) - 単一のコードベースでWindows、Mac OS X、Linuxなどのプラットフォーム向けアプリケーションを作成できるC++ライブラリ。 [Own LGPL]
* [Yue](https://github.com/yue/yue) - ネイティブのクロスプラットフォームGUIアプリを作成するライブラリ。 [LGPLv2]
* [GuiLite](https://github.com/idea4good/GuiLite) - 全プラットフォーム向け最小のヘッダーオンリーGUIライブラリ（5 KLOC）。 [Apache-2.0]
* [LCUI](https://github.com/lc-soft/LCUI) - C、XML、CSSでユーザーインターフェイスを構築する小型Cライブラリ。 [MIT]

## グラフィックス

* [assimp](https://github.com/assimp/assimp) - さまざまな3Dアセットファイル形式に共通APIを提供することを目指す、クロスプラットフォーム3DモデルインポートライブラリOpen Asset Import Library（assimp）。 [BSD-3-Clause] [website](https://www.assimp.org)
* [bgfx](https://github.com/bkaradzic/bgfx) - クロスプラットフォームのレンダリングライブラリ。 [BSD]
* [Blend2D](https://github.com/blend2d/blend2d) - JITコンパイラーを利用する2Dベクターグラフィックスエンジン。 [Zlib] [website](https://blend2d.com/)
* [Cairo](https://www.cairographics.org/) - 複数の出力デバイスをサポートする2Dグラフィックスライブラリ。 [LGPL2 or Mozilla MPL]
* [C-Turtle](https://github.com/walkerje/C-Turtle) - CImgラッパーとして動作するC++11ヘッダーオンリーのタートルグラフィックスライブラリ。 [MIT]
* [Diligent Engine](https://github.com/DiligentGraphics/DiligentEngine) - モダンなクロスプラットフォーム低レベル3Dグラフィックスライブラリ。 [Apache2]
* [DirectXTK](https://github.com/Microsoft/DirectXTK) - C++でDirectX 11.xコードを記述するためのヘルパークラス集。 [MIT]
* [GLFW](https://github.com/glfw/glfw) - シンプルなクロスプラットフォームOpenGL管理ライブラリ。 [zlib/libpng]
* [GLFWPP](https://github.com/janekb04/glfwpp) - GLFW向けの薄いモダンC++17ヘッダーオンリーラッパー。 [MIT] 3D可視化ライブラリ。C++、Python、Lua、Goから利用可能。BGFXを基盤としています。]
* [Harfang 3D](https://github.com/harfang3d/harfang3d) 3D visualization library usable in C++, Python, Lua and Go. Based on BGFX. [GPLv3/LGPLv3/Proprietary] [website](https://www.harfang3d.com)
* [herebedragons](https://github.com/kosua20/herebedragons) - さまざまなエンジン、フレームワーク、APIを使って実装した基本的な3Dシーン。 [MIT] [website](https://simonrodriguez.fr/dragon/)
* [Horde3D](https://github.com/horde3d/Horde3D) - 小型の3Dレンダリングおよびアニメーションエンジン。 [EPL]
* [Ion](https://github.com/google/ion) - 3Dグラフィックスを使用するクロスプラットフォームのクライアント／サーバーアプリケーションを構築するための、小型で効率的なライブラリ群。 [Apache2] [website](https://google.github.io/ion/)
* [Irrlicht](https://irrlicht.sourceforge.net/) - C++で記述された高性能リアルタイム3Dエンジン。 [zlib]
* [libigl](https://github.com/libigl/libigl) - シンプルなC++ジオメトリ処理ライブラリ。 [MPL2]
* [LLGL](https://github.com/LukasBanana/LLGL) - モダンなグラフィックスAPI向けの薄い抽象化レイヤーであるLow Level Graphics Library（LLGL）。 [BSD-3-Clause]
* [LunaSVG](https://github.com/sammycage/lunasvg) - スタンドアロンのC++ SVGレンダリングライブラリ。 [MIT]
* [magnum](https://github.com/mosra/magnum) - ゲームやデータ可視化向けの軽量でモジュール式なC++11/C++14グラフィックスミドルウェア。 [MIT] [website](https://magnum.graphics)
* [MESHLIB](https://github.com/meshinspector/meshlib) - 3Dデータ処理の効率を大幅に高めるSDK。 [Free/Commercial] [website](https://meshlib.io/)
* [micro-gl](https://github.com/micro-gl/micro-gl) - リアルタイムで組み込み可能なヘッダーオンリーC++11 CPUベクターグラフィックス。標準ライブラリ、FPU、GPUは不要。 [CUSTOM] [website](https://micro-gl.github.io/docs/microgl)
* [NanoVG](https://github.com/memononen/nanovg) - UIおよび可視化向けの、OpenGL上で動作するアンチエイリアス対応2Dベクター描画ライブラリ。 [Zlib]
* [Ogre 3D](https://github.com/OGRECave) :zap: - ゲームエンジンではなく、シーン指向でリアルタイムかつ柔軟なC++製3Dレンダリングエンジン。 [MIT] [website](https://www.ogre3d.org)
* [OpenSceneGraph](https://www.openscenegraph.org/) - オープンソースの高性能3Dグラフィックスツールキット。 [OSGPL]
* [OpenSubdiv](https://github.com/PixarAnimationStudios/OpenSubdiv) - CPUおよびGPU上でのサブディビジョンサーフェス評価・レンダリングを行うPixarのライブラリ。 [Modified Apache2]
* [OpenVDB](https://www.openvdb.org/) - ボリュームデータセットの保存、編集、レンダリング用ライブラリおよびツール。 [MPL2]
* [Panda3D](https://www.panda3d.org/) - PythonおよびC++向けの3Dレンダリングとゲーム開発フレームワーク。 [BSD]
* [Partio](https://github.com/wdas/partio) - 一般的なファイル形式の大半に対応した、パーティクルデータ操作ライブラリ。 [Modified BSD]
* [Skia](https://github.com/google/skia) - テキスト、ジオメトリ、画像を描画する完全な2Dグラフィックスライブラリ。 [BSD] [website](https://skia.org/)
* [ThorVG](https://github.com/thorvg/thorvg) - SVGやLottieを含む、ベクターベースのシーンとアニメーションを描画できるプラットフォーム非依存のポータブルライブラリ。 [MIT] [website](https://www.thorvg.org/)
* [TinySpline](https://github.com/msteinbeck/tinyspline) - 任意のNURBS、Bスプライン、ベジェ曲線の補間、変換、クエリーを行う、小型ながら強力なANSI Cライブラリ。 [MIT]
* [urho3d](https://github.com/urho3d/Urho3D) - クロスプラットフォームのレンダリングおよびゲームエンジン。 [Many different, mostly MIT]
* [Yocto/GL](https://github.com/xelatihy/yocto-gl) - データ駆動型物理ベースグラフィックス向けの小型C++ライブラリ。 [MIT]
* [olive.c](https://github.com/tsoding/olive.c) - シンプルな2Dグラフィックスライブラリ。 [MIT]

## 画像処理

* [avir](https://github.com/avaneev/avir) - 高品質なプロ向けHDR画像リサイズと、高速SIMD Lanczosリサイズ。 [MIT]
* [Boost.GIL](https://github.com/boostorg/gil) - 汎用画像ライブラリ。 [Boost] [website](https://boost.org/libs/gil)
* [BitmapPlusPLus](https://github.com/baderouaich/BitmapPlusPlus) - シンプルで高速なヘッダーオンリーBitmap C++ライブラリ。 [MIT]
* [CImg](https://cimg.eu/) - 小型のオープンソースC++画像処理ツールキット。 [Own LGPL or GPL]
* [CxImage](https://www.codeproject.com/Articles/1300/CxImage) - BMP、JPEG、GIF、PNG、TIFF、MNG、ICO、PCX、TGA、WMF、WBMP、JBG、J2K画像を読み込み、保存、表示、変換する画像処理・変換ライブラリ。 [zlib]
* [Dlib](https://github.com/davisking/dlib) :zap: - モダンなC++11機械学習、コンピュータービジョン、数値最適化、ディープラーニング向けツールキット。 [Boost] [website](https://dlib.net/)
* [fpng](https://github.com/richgel999/fpng) - 非常に高速なC++ PNG書き込み／読み込みライブラリ。 [Unlicense]
* [FreeImage](https://freeimage.sourceforge.net/) - 今日のマルチメディアアプリケーションで一般的な画像形式などをサポートするオープンソースライブラリ。 [GPL2 or GPL3]
* [GD](https://github.com/libgd/libgd) - 画像の読み込み／操作やサムネイル生成にPHPで広く使われるGD Graphics Library。 [custom permissive license, requires mention in user docs] [website](https://libgd.github.io/)
* [DCMTK](https://dicom.offis.de/dcmtk.php.en) - DICOMツールキット。
* [GDCM](https://gdcm.sourceforge.net/wiki/index.php/Main_Page) - Grassroots DICOMライブラリ。
* [ITK](https://www.itk.org/) - オープンソースでクロスプラットフォームの画像解析システム。 [Apache2 from ITK 4.0]
* [Jpegli](https://github.com/google/jpegli) - 改良されたJPEGエンコーダーおよびデコーダー実装。 [BSD-3-Clause]
* [Leptonica](https://github.com/DanBloomberg/leptonica) - 画像処理および画像解析アプリケーションで幅広く役立つソフトウェアを含むオープンソースライブラリ。 [BSD-2-Clause] [website](https://leptonica.org/index.html)
* [libavif](https://github.com/AOMediaCodec/libavif) - .avifファイルをエンコードおよびデコードするライブラリ。 [BSD-2-Clause]
* [libfacedetection](https://github.com/ShiqiYu/libfacedetection) - 画像内の顔を検出するオープンソースライブラリ。顔検出速度は1500 FPSに達します。 [BSD]
* [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo) - ベースラインJPEGのエンコードとデコードをSIMD命令で高速化するJPEG画像コーデック。 [IJG & BSD-3-Clause & zlib] [website](https://libjpeg-turbo.org/)
* [libjxl](https://github.com/libjxl/libjxl) - JPEG XL画像形式のリファレンス実装。 [BSD-3-Clause]
* [libpng](https://github.com/pnggroup/libpng) - PNG（Portable Network Graphics）ラスター画像ファイルの読み込み、作成、操作を行うアプリケーション向けのリファレンスライブラリ。 [libpng-2.0] [website](https://libpng.sourceforge.io/)
* [libspng](https://github.com/randy408/libspng) - シンプルでモダンなlibpng代替。 [BSD-2] [website](https://libspng.org/)
* [libvips](https://github.com/jcupitt/libvips) - メモリ使用量の少ない高速画像処理ライブラリ。 [LGPL] [website](https://www.vips.ecs.soton.ac.uk/)
* [LodePNG](https://github.com/lvandeve/lodepng) - CおよびC++のPNGエンコーダー／デコーダー。 [Zlib]
* [Magick++](https://imagemagick.org/script/magick++.php) - C++向けImageMagickプログラムインターフェイス。 [Apache2]
* [MagickWnd](https://imagemagick.org/script/magick-wand.php) - C向けImageMagickプログラムインターフェイス。 [Apache2]
* [MozJPEG](https://github.com/mozilla/mozjpeg) - 改良版JPEGエンコーダー。 [BSD/BSD-3-Clause/ZLIB]
* [OpenCV](https://github.com/opencv) :zap: - オープンソースのコンピュータービジョン。 [Apache2] [website](https://opencv.org)
* [OpenEXR](https://www.openexr.com/) - ハイダイナミックレンジ画像向けクロスプラットフォームライブラリ。 [Modified BSDF]
* [OpenImageIO](https://github.com/OpenImageIO/oiio) - 多数の一般的な非可逆形式やRAW形式をサポートする、強力な画像・テクスチャ操作ライブラリ。 [Modified BSD]
* [OpenJPEG](https://github.com/uclouvain/openjpeg) - C言語で記述されたオープンソースJPEG 2000コーデック。 [BSD-2-Clause]
* [PlutoFilter](https://github.com/sammycage/plutofilter) - C製のシングルヘッダーで割り当て不要な画像フィルターライブラリ。 [MIT]
* [QOI](https://github.com/phoboslab/qoi) - 高速なロスレス画像圧縮のための「Quite OK Image Format」。 [MIT]
* [SAIL](https://github.com/happy-sea-fox/sail) - プラグイン式画像コーデックを備えた、使いやすいクロスプラットフォーム画像デコードライブラリ。 [MIT]
* [Simd](https://github.com/ermig1979/Simd) - SSE、SSE2、SSE3、SSSE3、SSE4.1、SSE4.2、AVX、AVX2、AVX-512、VMX（Altivec）、VSX（Power7）、ARM向けNEONを利用するC++ SIMD画像処理ライブラリ。 [MIT]
* [stb-image](https://github.com/nothings/stb/blob/master/stb_image.h) - STBシングルヘッダー画像読み込みライブラリ。 [Public Domain]
* [tesseract-ocr](https://github.com/tesseract-ocr) - OCRエンジン。 [Apache2]
* [TinyDNG](https://github.com/syoyo/tinydng) - C++製のヘッダーオンリーTiny DNG/TIFF読み込み・書き込みライブラリ。 [MIT]
* [TinyEXIF](https://github.com/cdcseacave/TinyEXIF) - JPEG向けISO準拠の小型C++ EXIFおよびXMP解析ライブラリ。 [MIT]
* [TinyTIFF](https://github.com/jkriege2/TinyTIFF) - 軽量TIFF読み込み／書き込みライブラリ。 [GPL-3.0]
* [Video++](https://github.com/matt-42/vpp) - 高性能なC++14動画・画像処理ライブラリ。 [MIT]
* [VIGRA](https://github.com/ukoethe/vigra) - 画像解析向け汎用C++コンピュータービジョンライブラリ。 [MIT X11]
* [VTK](https://www.vtk.org/) - 3Dコンピューターグラフィックス、画像処理、可視化のためのオープンソースで無償利用可能なソフトウェアシステム。 [BSD]
* [OpenImageDenoise](https://github.com/OpenImageDenoise/oidn) - レイトレーシング画像向け高性能・高品質ノイズ除去ライブラリ。 [Apache-2.0] [website](https://www.openimagedenoise.org/)
* [bitmap](https://github.com/ArashPartow/bitmap) - BMP画像ファイルを読み込み、書き込み、処理するC++ Bitmapライブラリ。 [MIT]

## 国際化

* [gettext](https://www.gnu.org/software/gettext/) - GNU gettext。 [GPL2]
* [IBM ICU](https://site.icu-project.org/) - Unicodeおよび国際化をサポートするC/C++およびJavaライブラリ群。 [ICU]
* [libiconv](https://www.gnu.org/software/libiconv/) - 異なる文字エンコーディング間の変換ライブラリ。 [GPL]
* [simdutf](https://github.com/simdutf/simdutf) - SSE2、AVX2、NEON、AVX-512を使い、毎秒数十億文字を処理するUnicodeルーチン（UTF-8、UTF-16、UTF-32）。 [Apache-2/MIT]
* [uni-algo](https://github.com/uni-algo/uni-algo) - C/C++向けUnicodeアルゴリズム実装。 [Unlicense or MIT]
* [utf8.h](https://github.com/sheredom/utf8.h) - CおよびC++向けUTF-8文字列関数のシングルヘッダー。 [Unlicense]
* [utf8proc](https://github.com/JuliaStrings/utf8proc) - UTF-8 Unicodeデータを処理するクリーンなCライブラリ。 [MIT]

## プロセス間通信
C++、Java、Python、PHP、C#など多くの言語間で動作する、効率的なクロスランゲージIPC/RPC。もともとFacebookで開発。
* [Apache Thrift](https://thrift.apache.org/) - カーネルレベル共有メモリとメモリマップトファイル、およびセマフォやミューテックスなどの組み込み同期機構をサポートするヘッダーオンリーBoostライブラリ。 [Apache2]
* [Boost.Interprocess](https://github.com/boostorg/interprocess) - カーネルレベルの共有メモリーとメモリーマップトファイルをサポートし、セマフォやミューテックスなどの同期機構を内蔵するヘッダーオンリーBoostライブラリ。 [Boost] [website](https://boost.org/libs/interprocess)
* [bRPC](https://github.com/apache/brpc) - 検索、ストレージ、機械学習、広告、レコメンデーションなどの高性能システムでよく使われる、C++製の産業グレードRPCフレームワーク。 [Apache2] [website](https://brpc.apache.org/)
* [Cap'n Proto](https://github.com/capnproto/capnproto) - 高速なデータ交換形式と、能力ベースのRPCシステム。 [MIT] [website](https://capnproto.org/)
* [eCAL](https://github.com/continental/ecal) - Pub/Sub、クライアント／サーバー、C++/Python/C#、protobufやcapnprotoなど各種メッセージプロトコルに対応。 [Apache2] [website](https://www.ecal.io/)
* [gRPC](https://github.com/grpc/grpc) - 高性能なオープンソース汎用RPCフレームワーク。 [BSD] [website](https://www.grpc.io/)
* [Ice](https://github.com/zeroc-ice/ice) - C++、C#、Java、JavaScript、Pythonなどをサポートする包括的なRPCフレームワーク。 [GPLv2]
* [iceoryx](https://github.com/eclipse-iceoryx/iceoryx) - 安全性が重要なシステム向けに、CおよびRustバインディングを備えた真のゼロコピー・プロセス間通信フレームワーク。Linux、QNX、Windows、Mac OS、FreeBSDで動作。 [Apache2] [website](https://iceoryx.io/)
* [libjson-rpc-cpp](https://github.com/cinemast/libjson-rpc-cpp) - C++サーバーおよびクライアント向けJSON-RPCフレームワーク。 [MIT]
* [nanomsg](https://github.com/nanomsg/nanomsg) - 複数の「スケーラビリティプロトコル」をシンプルかつ高性能に実装。 [MIT] [website](https://nanomsg.org/)
* [nng](https://github.com/nanomsg/nng) - nanomsgの次世代版である軽量なブローカーレスメッセージングライブラリ。 [MIT] [website](https://nanomsg.github.io/nng/)
* [rpclib](https://github.com/rpclib/rpclib) - モダンC++のmsgpack-RPCサーバーおよびクライアントライブラリ。 [MIT]
* [simple-rpc-cpp](https://github.com/pearu/simple-rpc-cpp) - C/C++関数向けのシンプルなRPCラッパー生成器。 [BSD]
* [SRPC](https://github.com/sogou/srpc) - 複数のプロトコルとOpenTelemetryをサポートする軽量RPCシステム。 [Apache2]
* [WAMP](https://wamp.ws/) - RPCおよびPub/Subメッセージングパターンを提供。（実装と言語はさまざま）
* [xmlrpc-c](https://xmlrpc-c.sourceforge.net/) - XMLとHTTPを基盤とする軽量RPCライブラリ。 [BSD]

## JSON

* [Boost.PropertyTree](https://github.com/boostorg/property_tree) - XML/JSON/INI/Infoファイルを解析できるプロパティツリーパーサー／ジェネレーター。 [Boost] [website](https://boost.org/libs/property_tree)
* [cJSON](https://github.com/DaveGamble/cJSON) - ANSI C製の超軽量JSONパーサー。 [MIT]
* [DAW JSON Link](https://github.com/beached/daw_json_link) - 高速で便利なC++ JSONシリアライズおよび解析。 [BSL-1.0]
* [frozen](https://github.com/cesanta/frozen) - C/C++向けJSONパーサー兼ジェネレーター。 [GPL & GPL2]
* [Glaze](https://github.com/stephenberry/glaze) - モダンC++向けの、非常に高速なインメモリJSONおよびインターフェイスライブラリ。 [MIT]
* [Jansson](https://github.com/akheron/jansson) - JSONデータをエンコード、デコード、操作するCライブラリ。 [MIT]
* [jbson](https://github.com/chrismanning/jbson) - C++14でBSONデータおよびJSONドキュメントを構築・反復処理するライブラリ。 [Boost]
* [JeayeSON](https://github.com/jeaye/jeayeson) - 非常に使いやすいヘッダーオンリーC++ JSONライブラリ。 [BSD]
* [Jsmn](https://github.com/zserge/jsmn) - 最小限のC JSONパーサー。 [MIT]
* [json](https://github.com/nlohmann/json) :zap: - モダンC++向けJSON。 [MIT] [website](https://json.nlohmann.me)
* [json.cpp](https://github.com/jart/json.cpp) - C++向けの装飾的なJSON解析／シリアライズライブラリ。 [Apache-2.0]
* [json.h](https://github.com/sheredom/json.h) - CおよびC++でJSONを解析する、シンプルな単一ヘッダー／単一ソースのソリューション。 [Unlicense]
* [json-build](https://github.com/lcsmuller/json-build) - C89製の小型で割り当て不要なJSONシリアライザー。 [MIT]
* [json-c](https://github.com/json-c/json-c) - CによるJSON実装。 [MIT]
* [jsoncons](https://github.com/danielaparker/jsoncons) - JSONPointer、JSONPatch、JSONPath、JMESPathに対応する、JSONおよびJSON風バイナリ形式向けC++ヘッダーオンリーライブラリ。 [Boost]
* [JsonCpp](https://github.com/open-source-parsers/jsoncpp) - JSONを扱うC++ライブラリ。 [MIT]
* [Jsonifier](https://github.com/RealTimeChris/Jsonifier) - JSONからオブジェクトを非常に高速に解析・シリアライズするためのクラス群。 [MIT]
* [jsonParse](https://github.com/liufeigit/jsonParse) - ANSI C製のシンプルなJSONパーサー。 [MIT]
* [json-parser](https://github.com/udp/json-parser) - 移植性の高いANSI Cで記述された、非常に小さなJSONパーサー。 [BSD]
* [json-struct](https://github.com/jorgen/json_struct) - C++構造体との相互変換に対応した高性能シングルヘッダーJSONパーサー。 [MIT]
* [json-voorhees](https://github.com/tgockel/json-voorhees) - C++向けJSONライブラリ。C++11対応、依存関係なし、高速で開発者に使いやすい設計。 [Apache2]
* [JSON Toolkit](https://github.com/sourcemeta/jsontoolkit) - C++20向けJSON、JSON Pointer、JSON Schema、JSONLライブラリ。 [AGPL/Commercial]
* [jute](https://github.com/amir-s/jute) - 非常にシンプルなC++ JSONパーサー。 [PublicDomain]
* [libjson](https://github.com/vincenthz/libjson) - あらゆるモデルに簡単に統合できるC製JSONパーサー／プリンターライブラリ。 [LGPL]
* [libjson](https://sourceforge.net/projects/libjson/) - 軽量JSONライブラリ。 [?]
* [LIBUCL](https://github.com/vstakhov/libucl) :zap: - 汎用設定ライブラリパーサー。 [BSD-2-Clause]
* [meojson](https://github.com/MistEO/meojson) - 次世代C++ JSON/JSON5シリアライズエンジン。依存関係ゼロ、ヘッダーオンリーでJSONの可能性を引き出します。 [MIT]
* [parson](https://github.com/kgabis/parson) - Cで記述された軽量JSONライブラリ。 [MIT]
* [PicoJSON](https://github.com/kazuho/picojson) - C++のヘッダーファイルのみで利用できるJSONパーサー兼シリアライザー。 [BSD]
* [qt-json](https://github.com/gaudecker/qt-json) - JSONデータをQVariant階層に解析し、その逆も行うシンプルなクラス。 [GPLv3]
* [RapidJSON](https://github.com/miloyip/rapidjson) :zap: - SAX/DOM形式のAPIを備えた高速なC++ JSONパーサー／ジェネレーター。 [MIT] [website](https://rapidjson.org)
* [sajson](https://github.com/chadaustin/sajson) - C++11向け軽量かつ非常に高性能なJSONパーサー。 [MIT]
* [simdjson](https://github.com/lemire/simdjson) - 毎秒数GBのJSONを解析できる非常に高速なJSONライブラリ。 [Apache-2.0]
* [Sonic-Cpp](https://github.com/bytedance/sonic-cpp) - SIMDで高速化された高速JSONシリアライズ／デシリアライズライブラリ。 [Apache-2.0]
* [taoJSON](https://github.com/taocpp/json) - 依存関係ゼロのC++ヘッダーオンリーJSONライブラリ。 [MIT]
* [ujson](https://bitbucket.org/awangk/ujson) - 小型のC++11 UTF-8 JSONライブラリ。 [MIT]
* [UltraJSON](https://github.com/ultrajson/ultrajson) - Cで記述された超高速JSONデコーダーおよびエンコーダー。 [BSD-3-Clause]
* [YAJL](https://github.com/lloyd/yajl) - C製の高速ストリーミングJSON解析ライブラリ。 [ISC]
* [yyjson](https://github.com/ibireme/yyjson) - ANSI Cで記述された高性能JSONライブラリ。 [MIT]
* [libdart](https://github.com/target/libdart) - 高性能でネットワーク向けに最適化されたJSON操作ライブラリ。 [MIT]

## ロギング

* [Abseil Logging](https://abseil.io/docs/cpp/guides/logging) - Abseil Loggingライブラリは、stderr、ファイル、その他の出力先にログメッセージを書き込む機能を提供します。 [Apache-2.0]
* [Blackhole](https://github.com/3Hren/blackhole) - 高速でモジュール式、非常にカスタマイズしやすい属性ベースのロギングフレームワーク。 [MIT]
* [Boost.Log](https://github.com/boostorg/log) - 高いモジュール性と拡張性を意図して設計。 [Boost] [website](https://boost.org/libs/log)
* [BqLog](https://github.com/Tencent/BqLog) - 「Honor of Kings」などのプロジェクトで使用される、軽量で高性能なロギングシステム。 [Apache-2.0]
* [fmtlog](https://github.com/MengRao/fmtlog) - ナノ秒単位のレイテンシを実現する高性能なfmtlib風ロギングライブラリ。 [MIT]
* [G3log](https://github.com/KjellKod/g3log) - 動的シンクに対応する非同期ロガー。 [PublicDomain]
* [glog](https://github.com/google/glog) - GoogleロギングモジュールのC++実装。
* [haclog](https://github.com/MuggleWei/haclog) - 非常に高速なプレーンCロギングライブラリ。 [MIT]
* [Log4cpp](https://log4cpp.sourceforge.net/) - ファイル、syslog、IDSA、その他の出力先に柔軟に記録するC++クラスライブラリ。 [LGPL]
* [log4cplus](https://github.com/log4cplus/log4cplus) - スレッドセーフで柔軟、任意の粒度でログ管理と設定を制御できる、使いやすいC++ロギングAPI。 [BSD & Apache2]
* [loguru](https://github.com/emilk/loguru) - 軽量なC++ロギングライブラリ。 [PublicDomain]
* [lwlog](https://github.com/ChristianPanov/lwlog) - 非常に高速な同期／非同期C++17ロギングライブラリ。 [MIT]
* [ng-log](https://github.com/ng-log/ng-log) - アプリケーションレベルのロギング向けC++14ライブラリ。 [BSD-3-Clause]
* [plog](https://github.com/SergiusTheBest/plog) - 1000行未満のコードで実現したポータブルでシンプルなC++ロギング。 [MPL2]
* [reckless](https://github.com/mattiasflodin/reckless) - 低レイテンシ、高スループットのC++非同期ロギングライブラリ。 [MIT]
* [spdlog](https://github.com/gabime/spdlog) - 非常に高速なC++ヘッダーオンリーロギングライブラリ。
* [templog](https://www.templog.org/) - C++アプリケーションにロギング機能を追加するための、非常に小さく軽量なC++ライブラリ。 [Boost]
* [P7Baical](https://baical.net/p7.html) - CPUとメモリの使用量を最小限に抑え、高速にテレメトリーとトレースデータを送信するオープンソースのクロスプラットフォームライブラリ。 [LGPL]
* [Quill](https://github.com/odygrd/quill) - クロスプラットフォームの低レイテンシ非同期ロギングライブラリ。 [MIT]
* [logfault](https://github.com/jgaa/logfault) - シンプルで洗練され、効率的なC++ヘッダーオンリーロギングライブラリ。 [MIT]

## 機械学習

* [Caffe](https://github.com/BVLC/caffe) - ニューラルネットワーク向け高速フレームワーク。 [BSD]
* [catboost](https://github.com/catboost/catboost) - 高速でスケーラブル、高性能な決定木勾配ブースティングライブラリ。 [Apache2]
* [CCV](https://github.com/liuliu/ccv) - Cベース／キャッシュ対応／コアコンピュータービジョンライブラリ。モダンなコンピュータービジョンライブラリ。 [BSD]
* [darknet](https://github.com/pjreddie/darknet) - CとCUDAで記述されたオープンソースニューラルネットワークフレームワーク。 [PublicDomain] [website](https://pjreddie.com/darknet/)
* [Dlib](https://github.com/davisking/dlib) :zap: - モダンなC++11機械学習、コンピュータービジョン、数値最適化、ディープラーニング向けツールキット。 [Boost] [website](https://dlib.net/)
* [FAISS](https://github.com/facebookresearch/faiss) - 高密度ベクトルの効率的な類似検索とクラスタリングを行うライブラリ。 [MIT]
* [FANN](https://github.com/libfann/fann) - 高速人工ニューラルネットワークCライブラリ。 [LGPL]
* [Fido](https://github.com/FidoProject/Fido) - 組み込み電子機器およびロボティクス向けの高度にモジュール化されたC++機械学習ライブラリ。 [MIT] [website](https://fidoproject.github.io/)
* [flashlight](https://github.com/facebookresearch/flashlight) - ArrayFireテンソルライブラリを基盤とする、Facebook AI Researchの高速で柔軟なC++製機械学習ライブラリ。 [BSD-3-Clause] [website](https://fl.readthedocs.io/en/latest/)
* [ggml](https://github.com/ggerganov/ggml) - 16ビットおよび4ビット量子化に対応する機械学習用テンソルライブラリ。 [MIT]
* [libsvm](https://github.com/cjlin1/libsvm) - シンプルで使いやすく効率的なサポートベクターマシンライブラリ。 [BSD-3-Clause] [website](https://www.csie.ntu.edu.tw/~cjlin/libsvm/)
* [m2cgen](https://github.com/BayesWitnesses/m2cgen) - 学習済みの古典的機械学習モデルを依存関係ゼロのネイティブCコードに変換するCLIツール。 [MIT]
* [MeTA](https://github.com/meta-toolkit/meta) - モダンなC++データサイエンスツールキット。 [MIT]
* [Minerva](https://github.com/dmlc/minerva) - 高速で柔軟なディープラーニングシステム。 [Apache2]
* [mlpack](https://github.com/mlpack/mlpack) - スケーラブルなC++機械学習ライブラリ。 [LGPLv3] [website](https://www.mlpack.org/)
* [ncnn](https://github.com/Tencent/ncnn) - モバイルプラットフォーム向けに最適化された高性能ニューラルネットワーク推論計算フレームワーク。 [BSD]
* [OpenCV](https://github.com/Itseez/opencv) :zap: - オープンソースのコンピュータービジョンライブラリ。 [BSD] [website](https://opencv.org/)
* [oneDAL](https://github.com/oneapi-src/oneDAL) - ビッグデータ分析の高速化に役立つ強力な機械学習ライブラリ。 [Apache]
* [ONNX runtime](https://github.com/microsoft/onnxruntime) - ONNXモデルの学習と推論を行うC/C++ライブラリ。ONNXは、学習に使用したライブラリに関係なくAIモデルを変換できる標準形式です。 [MIT] [website](https://onnxruntime.ai/)
* [Recommender](https://github.com/GHamrouni/Recommender) - 協調フィルタリング（CF）を用いた商品レコメンデーション／提案のためのCライブラリ。 [BSD]
* [RNNLIB](https://github.com/szcom/rnnlib) - 系列学習問題向けリカレントニューラルネットワークライブラリ。 [GPLv3]
* [SHOGUN](https://github.com/shogun-toolbox/shogun) - Shogun機械学習ツールボックス。 [GPLv3]
* [sofia-ml](https://code.google.com/p/sofia-ml/) - 高速な逐次学習アルゴリズムのスイート。 [Apache2]
* [USearch](https://github.com/unum-cloud/usearch) - ベクトルおよび文字列向け高速検索・クラスタリングライブラリ。 [Apache2]
* [VLFeat](https://github.com/vlfeat/vlfeat) - 画像理解と局所特徴の抽出・照合を専門とする、一般的なコンピュータービジョンアルゴリズムを実装したVLFeatオープンソースライブラリ。 [BSD-2-Clause] [website](https://www.vlfeat.org/)
* [xgboost](https://github.com/dmlc/xgboost) - Python、R、Java、Scala、C++など向けのスケーラブル、ポータブル、分散型勾配ブースティング（GBDT、GBRT、GBM）ライブラリ。単一マシン、Hadoop、Spark、Flink、DataFlowで動作。 [Apache2]
* [TensorComprehensions](https://github.com/facebookresearch/TensorComprehensions) - 高性能な機械学習カーネルを自動合成する、完全機能のC++ライブラリ。 [Apache-2.0]
* [kann](https://github.com/attractivechaos/kann) - 人工ニューラルネットワーク向け軽量Cライブラリ。 [MIT]

## 数学

* [Apophenia](https://github.com/b-k/apophenia) - 統計および科学計算向けCライブラリ。 [GPL2]
* [Armadillo](https://gitlab.com/conradsnicta/armadillo-code) - 線形代数および科学計算向け高速C++ライブラリ。 [Apache2] [website](https://arma.sourceforge.net/)
* [autodiff](https://github.com/autodiff/autodiff) - モダンで高速、表現力豊かなC++自動微分ライブラリ。 [MIT] [website](https://autodiff.github.io)
* [blaze](https://bitbucket.org/blaze-lib/blaze) - 密／疎演算向け高性能C++数学ライブラリ。 [BSD]
* [Boost.Multiprecision](https://github.com/boostorg/multiprecision) - GMP/MPFR/LibTomMathバックエンドを利用するかヘッダーオンリーで使える、より広い範囲・高精度の整数、有理数、浮動小数点型をC++に提供。 [Boost] [website](https://boost.org/libs/multiprecision)
* [ceres-solver](https://ceres-solver.org/) - Google製の、大規模で複雑な非線形最小二乗問題のモデル化と解決を行うC++ライブラリ。 [BSD]
* [CGAL](https://github.com/CGAL/cgal) - 効率的で信頼性の高い幾何アルゴリズム集。 [LGPL&GPL] [website](https://www.cgal.org/)
* [cml](https://github.com/demianmnave/CML) - 設定可能な数学ライブラリ。 [Boost]
* [CNL](https://github.com/johnmcfarlane/cnl/) - C++向け構成可能数値ライブラリ。 [Boost]
* [DirectXMath](https://github.com/microsoft/DirectXMath) - ゲームやグラフィックスアプリケーション向けの、すべてインライン実装されたSIMD C++線形代数ライブラリ。
* [Dlib](https://github.com/davisking/dlib) :zap: - モダンなC++11機械学習、コンピュータービジョン、数値最適化、ディープラーニング向けツールキット。 [Boost] [website](https://dlib.net/)
* [Eigen](https://eigen.tuxfamily.org/) - 線形代数、行列・ベクトル演算、数値ソルバーおよび関連アルゴリズム向けの高水準C++テンプレートヘッダーライブラリ。 [MPL2]
* [ExprTk](https://www.partow.net/programming/exprtk/) - C++ Mathematical Expression Toolkit Library（ExprTk）は、使いやすく統合しやすい、非常に効率的な実行時数式パーサー兼評価エンジンです。 [MIT]
* [Fastor](https://github.com/romeric/Fastor) - モダンC++向けの軽量で高性能なテンソル代数フレームワーク。 [MIT]
* [geo-utils-cpp](https://github.com/gistrec/geo-utils-cpp) - 球面緯度／経度ジオメトリ（距離、方位、面積、点のポリゴン内判定）向けC++17ヘッダーオンリーライブラリ。 [Apache2]
* [Geometric Tools](https://www.geometrictools.com) - 数学、グラフィックス、画像解析、物理分野の計算を行うC++ライブラリ。 [Boost] [website](https://www.geometrictools.com)
* [GLM](https://github.com/g-truc/glm) - OpenGLのGLSL数学に一致し、相互運用できるヘッダーオンリーC++数学ライブラリ。 [MIT] [website](https://glm.g-truc.net/)
* [GMTL](https://ggt.sourceforge.net/) - Graphics Math Template Libraryは、グラフィックスプリミティブを汎用的な方法で実装するツール群です。 [GPL2]
* [GMP](https://gmplib.org/) - 符号付き整数、有理数、浮動小数点数を扱う任意精度演算用Cライブラリ。 [LGPL3 & GPL2]
* [Klein](https://github.com/jeremyong/klein) - 点、直線、平面の射影、交差、結合、剛体運動などを扱う、高速でSIMD最適化されたC++17幾何代数ライブラリ。 [MIT] [website](https://jeremyong.com/klein)
* [libfixmath](https://github.com/PetteriAimonen/libfixmath) - クロスプラットフォーム固定小数点数学ライブラリ。 [MIT]
* [linalg.h](https://github.com/sgorsten/linalg) - C++向け単一ヘッダー、パブリックドメインの短ベクトル数学ライブラリ。 [Unlicense]
* [MATIO](https://github.com/tbeu/matio) - MATLAB MATファイルI/Oライブラリ。 [BSD-2-Clause] [website](https://sourceforge.net/projects/matio/)
* [MatX](https://github.com/NVIDIA/MatX) - MATLAB/Python風の構文を持つ、GPUアクセラレーション対応C++17数値計算ライブラリ。 [BSD 3-clause]
* [mexce](https://github.com/imakris/mexce) - 最適化されたx87 FPU機械語を生成する、スカラー数式向けのシングルヘッダー・依存関係ゼロのJITコンパイラー。 [BSD]
* [MIRACL](https://github.com/CertiVox/MIRACL) - 多倍長整数および有理数演算の暗号ライブラリ。 [AGPL]
* [NumCpp](https://github.com/dpilger26/NumCpp) - Python NumPyライブラリをテンプレートで実装したヘッダーオンリーC++版。 [MIT]
* [NumKong](https://github.com/ashvardanian/NumKong) - 16種類の数値型向けSIMD高速化距離、内積、行列演算、地理空間・幾何カーネル。
* [OMath](https://github.com/orange-cpp/omath) - チート／ゲーム開発に適した、C++23製のクロスプラットフォーム汎用モダン数学ライブラリ。 [ZLIB]
* [muparser](https://beltoforion.de/en/muparser) - C++で記述された、拡張可能で高性能な数式パーサーライブラリ。 [MIT]
* [LibTomMath](https://github.com/libtom/libtommath) - すべてCで記述された、無料、オープンソース、ポータブルな数論用多倍長整数ライブラリ。 [PublicDomain & WTFPL] [website](https://www.libtom.net/)
* [linmath.h](https://github.com/datenwolf/linmath.h) - グラフィックスプログラミング向けの軽量線形代数ライブラリ。 [WTFPL]
* [lp_solve](https://sourceforge.net/projects/lpsolve) - 線形計画問題を定式化して解くためのライブラリ。 [LGPL] [website](https://lpsolve.sourceforge.net)
* [OpenBLAS](https://github.com/xianyi/OpenBLAS) - GotoBLAS2 1.13 BSD版を基盤とする最適化BLASライブラリ。 [BSD 3-clause] [website](https://www.openblas.net/)
* [PCG-rand](https://www.pcg-random.org/) - PCGは、シンプル、高速、省メモリで統計的性質に優れた乱数生成アルゴリズム群です。多くの汎用RNGと異なり、予測も困難です。 [Apache]
* [QuantLib](https://github.com/lballabio/quantlib) - 定量金融向けの無料オープンソースライブラリ。 [Modified BSD] [website](https://quantlib.org/)
* [sebsjames/maths](https://github.com/sebsjames/maths) - クライアントプログラマーの利便性と使いやすさを重視したテンプレート式C++20数学ライブラリ（[mathplot](https://github.com/sebsjames/mathplot)で使用）。  [Apache2] [website](https://sebsjames.github.io/maths/)
* [StatsLib](https://github.com/kthohr/stats) - 統計分布関数を備えたC++ヘッダーオンリーライブラリ。 [Apache2] [website](https://www.kthohr.com/statslib.html)
* [SymEngine](https://github.com/symengine/symengine) - SymPyのコアをC++で書き直した高速な記号操作ライブラリ。 [MIT]
* [TinyExpr](https://github.com/codeplea/tinyexpr) - 文字列から数式を解析・評価するCライブラリ。 [zlib]
* [Vc](https://github.com/VcDevel/Vc) - C++向けSIMDベクトルクラス。 [BSD]
* [Versor](https://versor.mat.ucsb.edu/) - ユークリッド、射影、共形、時空などを含む、高速で汎用的な幾何代数C++ライブラリ。
* [Wagyu](https://github.com/mapbox/wagyu) - 幾何データの和集合、交差、差、排他的論理和を計算する汎用ライブラリ。 [mapbox-wagyu original]
* [wide-integer](https://github.com/ckormanyos/wide-integer) - uint128_t、uint256_t、uint512_t、uint1024_tなどの汎用C++テンプレートを実装。 [BSL-1.0]
* [Wykobi](https://www.wykobi.com) - 効率的で堅牢、使いやすいC++ 2D/3D指向計算幾何ルーチンのライブラリ。 [MIT]
* [xtensor](https://github.com/xtensor-stack/xtensor) - NumPy構文に着想を得た、多次元配列式を使う数値解析向けC++14ライブラリ。 [BSD 3-clause] [website](https://xtensor-stack.github.io/xtensor)
* [universal](https://github.com/stillwater-sc/universal) - 任意精度のposit演算を実装するC++14ヘッダーオンリーライブラリ。posit数体系はIEEE浮動小数点より効率的なテーパー型浮動小数点で、再現可能な計算科学を可能にします。 [MIT license]
* [utl::random](https://github.com/DmitriBogdanov/UTL/blob/master/docs/module_random.md) - モンテカルロシミュレーションおよびゲーム開発向けの高速乱数を実装したC++17ヘッダーオンリーライブラリ。 [MIT]
* [XAD](https://github.com/auto-differentiation/xad) - C++向けの強力な自動微分。 [AGPL] [website](https://auto-differentiation.github.io/)
* [geogram](https://github.com/BrunoLevy/geogram) - 幾何アルゴリズムのプログラミングライブラリ。 [BSD-3-Clause]
* [std-simd](https://github.com/VcDevel/std-simd) - C++向けstd::experimental::simdのポータブル実装。 [BSD-3-Clause]
* [libdivide](https://github.com/ridiculousfish/libdivide) - libdivideを使うC/C++向け最適化整数除算。 [zlib] [website](https://libdivide.com)
* [fpsqrt](https://github.com/chmike/fpsqrt) - C向け高速固定小数点および浮動小数点平方根。 [MIT]
* [fastmod](https://github.com/lemire/fastmod) - 剰余とモジュラーリダクションを計算するヘッダーオンリー高速C/C++ライブラリ。 [Apache-2.0]
* [Spectra](https://github.com/yixuan/spectra) - Eigenを基盤とする、大規模固有値問題向けC++ライブラリ。 [MPL2] [website](https://spectralib.org)
* [FastNoiseSIMD](https://github.com/Auburns/FastNoiseSIMD) - SIMDアクセラレーションによるノイズ生成関数のライブラリ。 [MIT]

## メモリー割り当て

* [Boehm GC](https://github.com/ivmai/bdwgc) - CおよびC++向け保守的ガベージコレクター。 [similar to X11] [website](https://www.hboehm.info/gc/)
* [C Smart Pointers](https://github.com/Snaipe/libcsptr) - （GNU）Cプログラミング言語向けスマートポインター。 [MIT]
* [Hoard](https://github.com/emeryberger/Hoard) - Linux、Windows、Mac向けの高速、スケーラブルでメモリ効率のよいmalloc。 [Apache-2.0] [website](https://hoard.org/)
* [jemalloc](https://github.com/jemalloc/jemalloc) - フラグメンテーション回避とスケーラブルな並行処理サポートを重視する汎用malloc(3)実装。 [BSD] [website](https://jemalloc.net/)
* [memory](https://github.com/foonathan/memory) - STL互換C++メモリーアロケーターライブラリ。 [ZLib]
* [memory-allocators](https://github.com/mtrebi/memory-allocators) - 動的メモリー割り当ての性能を高めるカスタムメモリーアロケーター。 [MIT]
* [mimalloc](https://github.com/microsoft/mimalloc) - 優れた性能を備えたコンパクトな汎用アロケーター。 [MIT]
* [rpmalloc](https://github.com/mjansson/rpmalloc) - Cで実装された、クロスプラットフォームのロックフリー・スレッドキャッシュ対応16バイト整列メモリーアロケーター。 [PublicDomain]
* [snmalloc](https://github.com/microsoft/snmalloc) - メッセージパッシング方式の高性能アロケーター。 [MIT]
* [TCMalloc](https://github.com/google/tcmalloc) - Google製の高速マルチスレッドmalloc実装。 [Apache-2.0] [website](https://google.github.io/tcmalloc/)
* [buddy_alloc](https://github.com/spaskalev/buddy_alloc) - 割り当てコストに上限のある、C向けシングルヘッダー・バディメモリーアロケーター。 [0BSD]
* [tgc](https://github.com/orangeduck/tgc) - 約500行のCで記述された小型ガベージコレクター。 [BSD]
* [Mesh](https://github.com/plasma-umass/Mesh) - C/C++アプリケーションのメモリーフットプリントを自動的に削減するメモリーアロケーター。 [Apache-2.0]
* [rpmalloc](https://github.com/rampantpixels/rpmalloc) - パブリックドメインのクロスプラットフォーム・ロックフリー・スレッドキャッシュ対応16バイト整列メモリーアロケーター。 [PublicDomain]
* [TLSF](https://github.com/mattconte/tlsf) - 汎用動的メモリーアロケーターであるTwo-Level Segregated Fit。 [BSD]

## マルチメディア

* [GStreamer](https://gstreamer.freedesktop.org/) - メディア処理コンポーネントのグラフを構築するライブラリ。 [LGPL]
* [icey](https://github.com/nilstate/icey) - C++20で構築された、RTSP取り込み、メディア処理、シグナリング、TURN、ブラウザー配信向けリアルタイムメディアスタック兼軽量libwebrtc代替。 [LGPL v2.1+]
* [libass](https://github.com/libass/libass) - ASS/SSA字幕形式向けのポータブル字幕レンダラー。 [ISC]
* [libav](https://github.com/libav/libav) - 音声、動画、字幕、関連メタデータなどのマルチメディアコンテンツを処理するライブラリおよびツール群。 [LGPL v2.1+ and others] [website](https://www.libav.org/)
* [LIVE555 Streaming Media](https://www.live555.com/liveMedia/) - RTP/RTCP、RTSP、SIPなどのオープン標準プロトコルを使うマルチメディアストリーミングライブラリ。 [LGPL]
* [libVLC](https://wiki.videolan.org/LibVLC) - libVLC（VLC SDK）メディアフレームワーク。 [GPL]
* [MediaInfoLib](https://github.com/MediaArea/MediaInfoLib) - 動画・音声ファイルから重要な技術情報やタグデータを便利に統一表示。 [BSD]
* [QtAv](https://github.com/wang-bin/QtAV) - QtとFFmpegを基盤とし、簡単にプレーヤーを作成できるマルチメディア再生フレームワーク。 [LGPL] [website](https://wang-bin.github.io/QtAV/)
* [SDL](https://github.com/libsdl-org/SDL) :zap: - Simple DirectMedia Layer。 [zlib] [website](https://libsdl.org)
* [SFML](https://github.com/SFML/SFML) :zap: - シンプルで高速なマルチメディアライブラリ。 [zlib] [website](https://www.sfml-dev.org/)
* [TagLib](https://github.com/taglib/taglib) - 一般的な複数のオーディオ形式のメタデータを読み取り、編集するライブラリ。 [LGPL/MPL] [website](https://taglib.org/)

## ネットワーク

* [ada](https://github.com/ada-url/ada) - モダンC++で記述された、WHATWG準拠の高速URLパーサー。 [Apache-2.0/MIT]
* [ACE](https://www.dre.vanderbilt.edu/~schmidt/ACE.html) - C++のオブジェクト指向ネットワークプログラミングツールキット。 [?MIT?]
* [AGENT++](https://www.agentpp.com/api/cpp/agent_pp.html) - SNMPエージェント開発向けに、SNMP v1/2c/3プロトコルエンジンとディスパッチャーを完全実装したC++フレームワーク。 [Apache-2.0]
* [Boost.Asio](https://github.com/boostorg/asio) :zap: - ネットワークおよび低レベルI/Oプログラミング向けのクロスプラットフォームC++ライブラリ。 [Boost] [website](https://boost.org/libs/asio)
* [Boost.Beast](https://github.com/boostorg/beast) :zap: - C++11でBoost.Asio上に構築されたHTTPおよびWebSocket。 [Boost] [website](https://www.boost.org/libs/beast)
* [Breep](https://github.com/Organic-Code/Breep) - イベント駆動型の高水準C++14ピアツーピアライブラリ。 [EUPL-1.1 (OSI approved)]
* [C++ REST SDK](https://github.com/Microsoft/cpprestsdk) - C++ REST SDK（以前の名称はCasablanca）。 [Apache2]
* [CZMQ](https://github.com/zeromq/czmq) - ØMQ向け高水準Cバインディング。 [MPL2] [website](https://czmq.zeromq.org/)
* [Restbed](https://github.com/corvusoft/restbed) - C++11非同期RESTfulフレームワーク。 [AGPL]
* [Restinio](https://github.com/Stiffstream/restinio) - 組み込みHTTP/WebSocketサーバーを提供するヘッダーオンリーC++14ライブラリ。 [BSD]
* [c-ares](https://github.com/c-ares/c-ares) - 非同期DNSリクエスト向けCライブラリ。 [MIT]
* [cofetch](https://github.com/SSARCandy/cofetch) - libcurlのmultiインターフェイスとASIOを基盤とする、連結可能な非同期HTTPクライアント。コールバック、コルーチン、futureを単一実装から利用できます。 [MIT]
* [cpp-httplib](https://github.com/yhirose/cpp-httplib) - 単一ファイルのC++11ヘッダーオンリーHTTP/HTTPSサーバーライブラリ。 [MIT]
* [cpp-netlib](https://cpp-netlib.org/) - 高水準ネットワークプログラミング向けオープンソースライブラリ集。 [Boost]
* [cpp-netlib/uri](https://github.com/cpp-netlib/uri) - RFC 3986およびRFC 3987に準拠するC++ URIパーサー／ビルダーライブラリ。 [Boost]
* [CppServer](https://github.com/chronoxor/CppServer) - TCP、SSL、UDP、HTTP、HTTPS、WebSocketに対応し、1万接続問題を解決する超高速・低レイテンシの非同期ソケットサーバー／クライアントC++ライブラリ。 [MIT]
* [cpr](https://github.com/whoshuu/cpr) - シンプルながら強力なインターフェイスを持つモダンC++ HTTPリクエストライブラリ。Python Requestsモジュールをモデルとしています。 [MIT] [website](https://docs.libcpr.org)
* [curlcpp](https://github.com/JosephP91/curlcpp) - CURL（libcurl）向けオブジェクト指向C++ラッパー。 [MIT]
* [curlpp](https://github.com/jpbarrette/curlpp) - C++ラッパー。 [MIT]
* [DPDK](https://github.com/DPDK/dpdk) - 高速パケット処理向けのライブラリとドライバーを提供するData Plane Development Kit。 [BSD-3-Clause & GPL-2.0] [website](https://www.dpdk.org/)
* [ENet](https://github.com/lsalzman/enet) - 信頼性の高いUDPネットワークライブラリ。 [MIT] [website](https://enet.bespin.org/)
* [evpp](https://github.com/Qihoo360/evpp) - TCP/UDP/HTTPプロトコルに対応したC++高性能ネットワーキング。 [BSD]
* [FTP client for C++](https://github.com/embeddedmz/ftpclient-cpp) - FTPリクエストを行うC++クライアント。 [MIT]
* [H2O](https://github.com/h2o/h2o) - HTTP/1.xおよびHTTP/2に対応した最適化HTTPサーバー。ライブラリとしても利用できます。 [MIT]
* [KCP](https://github.com/skywind3000/kcp/blob/master/README.en.md) - アプリケーションのネットワークレイテンシ低減に役立つ、高速で信頼性の高いARQプロトコル。 [MIT]
* [libcurl](https://curl.haxx.se/libcurl/) - 複数プロトコル対応のファイル転送ライブラリ。 [MIT/X derivate license]
* [libhttpserver](https://github.com/etr/libhttpserver) - 組み込みREST HTTPサーバーなどを作成するC++ライブラリ。 [LGPL2.1]
* [Libmicrohttpd](https://www.gnu.org/software/libmicrohttpd/) - 別のアプリケーションの一部としてHTTPサーバーを簡単に実行できる、小型のGNU Cライブラリ。 [LGPL v2.1+]
* [libpcap](https://github.com/the-tcpdump-group/libpcap) - ネットワークトラフィックをキャプチャするポータブルなC/C++ライブラリ。 [BSD] [website](https://www.tcpdump.org/)
* [libquic](https://github.com/devsisters/libquic) - ChromiumのQUIC実装から抽出されたQUICプロトコルライブラリ。 [BSD]
* [librdkafka](https://github.com/edenhill/librdkafka) - CおよびC++向けApache Kafkaクライアントライブラリ。 [BSD-2-Clause]
* [libwebsockets](https://github.com/warmcat/libwebsockets) - クライアントおよびサーバーライブラリを備えた軽量な純粋C WebSocket実装。 [LGPL2.1 + static link exception] [website](https://libwebsockets.org/)
* [Lithium](https://matt-42.github.io/lithium/) - C++の専門家でなくても高性能C++ HTTPサーバーを構築できます。 [MIT]
* [lwIP](https://savannah.nongnu.org/projects/lwip/) - 軽量TCP/IPスタック。 [Modified BSD]
* [mailio](https://github.com/karastojko/mailio) - MIME形式とSMTP、POP3、IMAPプロトコル向けのクロスプラットフォームC++ライブラリ。 [BSD]
* [Mongoose](https://github.com/cesanta/mongoose) - 非常に軽量なWebサーバー。 [GPL2]
* [MQTT-C](https://github.com/LiamBindle/MQTT-C) - 組み込みシステムとPCの両方で使えるポータブルなMQTT Cクライアント。 [MIT] [website](https://liambindle.ca/MQTT-C)
* [mTCP](https://github.com/mtcp-stack/mtcp) - マルチコアシステム向けの高スケーラビリティなユーザーレベルTCPスタック。 [Modified BSD]
* [Muduo](https://github.com/chenshuo/muduo) - Linux上のマルチスレッドサーバー向けC++ノンブロッキングネットワークライブラリ。 [BSD]
* [nghttp2](https://github.com/nghttp2/nghttp2) - HTTP/2 Cライブラリ。 [MIT] [website](https://nghttp2.org/)
* [nghttp3](https://github.com/ngtcp2/nghttp3) - Cで記述されたHTTP/3ライブラリ。 [MIT] [website](https://nghttp2.org/nghttp3/)
* [Onion](https://github.com/davidmoreno/onion) - 軽量で使いやすいC製HTTPサーバーライブラリ。 [Apache2/GPL2]
* [OpenDDS](https://github.com/objectcomputing/OpenDDS) - Object Management Group（OMG）Data Distribution Service（DDS）のオープンソースC++実装。 [Apache2]
* [PF_RING™](https://github.com/ntop/PF_RING) - 高速パケット処理フレームワーク。 [LGPL-2.1] [website](https://www.ntop.org/products/packet-capture/pf_ring/)
* [PicoHTTPParser](https://github.com/h2o/picohttpparser) - 小型、基本的、高速なHTTPリクエスト／レスポンスパーサー。 [MIT]
* [POCO](https://github.com/pocoproject) :zap: - デスクトップ、サーバー、モバイル、組み込みシステムで動作するネットワーク／インターネットアプリケーションを構築するC++クラスライブラリおよびフレームワーク。 [Boost] [website](https://pocoproject.org/)
* [Proxygen](https://github.com/facebook/proxygen) - 使いやすいHTTPサーバーを含むFacebookのC++ HTTPライブラリ集。 [BSD]
* [RedPanda](https://github.com/redpanda-data/redpanda) - 開発者向けストリーミングデータプラットフォーム。Kafka API互換。10倍高速。 [BSL]
* [RakNet](https://github.com/OculusVR/RakNet) - ゲームプログラマー向けのクロスプラットフォーム・オープンソースC++ネットワーキングエンジン。 [BSD]
* [restclient-cpp](https://github.com/mrtazz/restclient-cpp) - libcurlでHTTPリクエストを行うシンプルなC++ RESTクライアント。 [MIT]
* [Seasocks](https://github.com/mattgodbolt/seasocks) - WebSocketに対応した、シンプルで小型、C++に組み込み可能なWebサーバー。 [BSD]
* [SNMP++](https://www.agentpp.com/api/cpp/snmp_pp.html) - SNMP v1/2c/v3をサポートするC++ API。 [custom permissive license]
* [tlse](https://github.com/eduardsui/tlse) - 暗号ライブラリとしてtomcryptを使用する単一CファイルのTLS 1.2/1.3実装。 [BSD-2-Clause]
* [TQUIC](https://github.com/tencent/tquic) - CおよびC++に公開された、高性能で軽量、クロスプラットフォームのQUICライブラリ。 [Apache2]
* [Tufão](https://github.com/vinipsmaker/tufao) - Qtを基盤とするC++非同期Webフレームワーク。 [LGPL2]
* [uriparser](https://github.com/uriparser/uriparser) - RFC 3986に厳密に準拠するURI解析・処理ライブラリ。 [BSD-3-Clause]
* [uWebSockets](https://github.com/uNetworking/uWebSockets) - 利用可能なWebSocketおよびHTTPサーバー実装の中で、最も軽量、効率的、スケーラブルなもののひとつであるµWS。 [Zlib]
* [UCall](https://github.com/unum-cloud/ucall) - io_uring上の高性能SIMDアクセラレーションRPCライブラリ。 [Apache2]
* [WAFer](https://github.com/riolet/WAFer) - スケーラブルなサーバーサイドおよびネットワークアプリケーション向けの、C言語ベースの超軽量ソフトウェアプラットフォーム。Cプログラマー向けnode.js。 [GPL2]
* [Wangle](https://github.com/facebook/wangle) - 非同期でイベント駆動型のモダンC++サービスを構築するクライアント／サーバーアプリケーションフレームワーク。 [Apache-2.0]
* [wdt](https://github.com/facebook/wdt) - 複数のTCP経路を使って2システム間で可能な限り高速にデータ転送する組み込み可能ライブラリ兼コマンドラインツール。 [BSD-3-Clause]
* [WebSocket++](https://github.com/zaphoyd/websocketpp) - C++/Boost AsioベースのWebSocketクライアント／サーバーライブラリ。 [BSD]
* [wspp](https://github.com/pinwhell/wspp) - 依存関係ゼロのシングルヘッダーで実現するモダンなWebSocketクライアント／サーバー、ws/wssライブラリ。 [MIT]
* [PcapPlusPlus](https://github.com/seladb/PcapPlusPlus) - マルチプラットフォーム対応のC++ネットワークスニッフィング、パケット解析および生成フレームワーク。 [Unlicense]
* [ZeroMQ](https://github.com/zeromq/libzmq) - 高速でモジュール式の非同期通信ライブラリ。 [LGPL3/MPL2] [website](https://zeromq.org/)
* [Zyre](https://github.com/zeromq/zyre) - ピアツーピアアプリケーション向けローカルエリアクラスタリング。 [MPL2]
* [easyhttpcpp](https://github.com/sony/easyhttpcpp) - キャッシュ機能を備えたSony製クロスプラットフォームHTTPクライアントライブラリ。 [MIT]
* [GameNetworkingSockets](https://github.com/ValveSoftware/GameNetworkingSockets) - Valveによる信頼性のある／ないUDPメッセージング。TCPのようなコネクション指向API。 [BSD-3-Clause]
* [wepoll](https://github.com/piscisaureus/wepoll) - Winsockを基盤とするWindows epollラッパー。 [BSD-2-Clause]

## Office Open XML
*xlsx、pptx、docxなどを解析・操作するライブラリ*

* [DuckX](https://github.com/amiremohamadi/DuckX) - Microsoft Word（.docx）ファイルを作成・変更するC++ライブラリ。 [MIT]
* [FreeXL](https://www.gaia-gis.it/fossil/freexl/index) - スプレッドシートから有効なデータを抽出するオープンソースライブラリ。 [MPL/GPL-2/LGPL-2]
* [libxls](https://github.com/libxls/libxls) - C/C++からバイナリ形式のExcelファイルを読み込み。 [BSD-2-Clause]
* [libxlsxwriter](https://github.com/jmcnamara/libxlsxwriter) - Excel XLSXファイルを作成するCライブラリ。 [BSD-2-Clause] [website](https://libxlsxwriter.github.io/)
* [OpenXLSX](https://github.com/troldal/OpenXLSX) - Microsoft Excel®（.xlsx）ファイルを読み込み、書き込み、作成、変更するC++ライブラリ。 [BSD-3-Clause]
* [SimpleXlsxWriter](https://sourceforge.net/projects/simplexlsx/) - Microsoft Excel 2007以降向けXLSXファイル書き込みツール。 [zlib]
* [XLSX I/O](https://github.com/brechtsanders/xlsxio) - .xlsxファイルを読み書きするCライブラリ。 [MIT]

## PDF
*PDFドキュメントを解析・操作するライブラリ*

* [libharu](https://github.com/libharu/libharu) - PDFを生成する無料、クロスプラットフォーム、オープンソースのソフトウェアライブラリ。 [zlib]
* [litePDF](https://litepdf.sourceforge.io) - デバイスコンテキスト経由でGDI関数を使ってページ内容を描画し、PDFドキュメントを作成・編集するライブラリ。 [LGPL v3 and zlib]
* [MuPDF](https://mupdf.com/) - 軽量なPDF、XPS、電子書籍ビューアー。 [AGPL/Proprietary]
* [PDF-Writer](https://github.com/galkahana/PDF-Writer) - C++でPDFファイルを作成、変更、解析する高性能ライブラリ。 [Apache-2.0] [website](https://www.pdfhummus.com/)
* [PDF4QT](https://github.com/JakubMelka/PDF4QT) - レンダリング・編集ライブラリ、ビューアー、コマンドラインツールを備えたPDFツールキット。 [MIT] [website](https://jakubmelka.github.io/)
* [pdfio](https://github.com/michaelrsweet/pdfio) - PDFファイルを読み書きするシンプルなCライブラリ。 [Apache-2] [website](https://www.msweet.org/pdfio/)
* [PDFium](https://pdfium.googlesource.com/pdfium/) - PDF生成およびレンダリングライブラリ。 [BSD-3-Clause]
* [PoDoFo](https://podofo.sourceforge.net/) - PDFファイル形式を扱うライブラリ。 [LGPL]
* [Poppler](https://poppler.freedesktop.org/) - xpdf-3.0コードベースを基盤とするオープンソースのマルチバックエンドPDFレンダリングライブラリ。 [GPLv2/GPLv3]
* [QPDF](https://github.com/qpdf/qpdf) - PDFファイルの内容を保持した変換を行うツールおよびC++ライブラリ。 [Apache-2.0] [website](https://qpdf.sourceforge.io/)
* [Xpdf](https://www.xpdfreader.com/) - Xpdfは無料のPDFビューアー兼ツールキットで、テキスト抽出、画像変換、HTML変換などを含みます。 [GPL v2/GPL v3]
* [DynaPDF](https://www.dynaforms.com/) - 使いやすいPDF生成ライブラリ。 [Commercial]

## 物理
*動力学シミュレーションエンジン*

* [Box2D](https://github.com/erincatto/Box2D) - ゲーム向け2D物理エンジン。 [BSD-like]
* [Bullet](https://github.com/bulletphysics/bullet3) - ゲーム向け3D物理エンジン。 [zlib] [website](https://bulletphysics.org)
* [Chipmunk](https://github.com/slembcke/Chipmunk2D) - 高速で軽量な2Dゲーム物理ライブラリ。 [MIT] [website](https://chipmunk-physics.net/)
* [Jolt Physics](https://github.com/jrouwe/JoltPhysics) - マルチコアに適した剛体物理および衝突検出ライブラリ。 [MIT]
* [Kratos](https://github.com/KratosMultiphysics/Kratos) - モジュール性、拡張性、高性能を目指す、並列かつ学際的なシミュレーションソフトウェア構築用フレームワーク。 [BSD] [website](https://www.cimne.com/kratos/)
* [LiquidFun](https://github.com/google/liquidfun) - ゲーム向け2D物理エンジン。 [BSD-like]
* [Newton Dynamics](https://github.com/MADEAPPS/newton-dynamics) - 物理環境のリアルタイムシミュレーション向け統合ソリューション。 [zlib]
* [ODE](https://www.ode.org/) - Open Dynamics Engine。剛体動力学をシミュレートするオープンソース高性能ライブラリ。 [BSD&LGPL]
* [ofxBox2d](https://github.com/vanderlin/ofxBox2d) - openFrameworks向けBox2Dラッパー。 [BSD-like]
* [PhysX](https://github.com/NVIDIAGameWorks/PhysX-3.4) - Nvidia GameWorksソフトウェアスイートの一部としてNvidiaが開発した、オープンソースのリアルタイム物理エンジン・ミドルウェアSDK。 [BSD-3-Clause]
* [PlayRho](https://github.com/louis-langholtz/PlayRho) - 対話型物理エンジン兼ライブラリ。 [Zlib]
* [Project Chrono](https://github.com/projectchrono/chrono) - オープンソースのマルチフィジックス・シミュレーションエンジン。 [BSD-3-Clause] [website](https://projectchrono.org/)
* [Quantum++](https://github.com/vsoftco/qpp) - モダンなC++11量子コンピューティングライブラリ。 [MIT]
* [QuarkPhysics](https://github.com/erayzesen/QuarkPhysics) - 2Dソフトボディおよび剛体物理エンジン。 [MIT]
* [Simbody](https://github.com/simbody/simbody) - 車両、ロボット、人体骨格などの多関節生体・機械システムをシミュレートする、高性能C++多体動力学／物理ライブラリ。 [Apache2]
* [SOFA](https://github.com/sofa-framework/sofa) - リアルタイムシミュレーションを対象とし、特に医療シミュレーションに重点を置くオープンソースフレームワーク。 [LGPL] [website](https://www.sofa-framework.org)
* [tungsten](https://github.com/tunabrain/tungsten) - 高性能なC++物理ベースレンダラー。 [zlib]

## リフレクション

* [config-loader](https://github.com/netcan/config-loader) - 設定ファイルを解析し、ネイティブデータ構造に変換するC++17静的リフレクションフレームワーク。 [MIT]
* [Better Enums](https://github.com/aantron/better-enums) - 文字列変換や反復処理に対応するリフレクション付きenum。シングルヘッダー。 [BSD] [website](https://aantron.github.io/better-enums/)
* [clReflect](https://github.com/Celtoys/clReflect) - clangを使ったC++リフレクション。 [MIT]
* [CPFG](https://github.com/cpgf/cpgf) - リフレクション、コールバック、スクリプトバインディング向けC++03ライブラリ。 [Apache2]
* [CPP-Reflection](https://github.com/AustinBrunkhorst/CPP-Reflection) - clangを使ったC++リフレクション。 [MIT]
* [Easy Reflection](https://github.com/chocolacula/easy_reflection_cpp) - Rust、Java、Goのような使いやすく高速なリフレクション＋シリアライズソリューション。 [Apache]
* [Enchantum](https://github.com/ZXShady/enchantum) - コンパイル時enumリフレクション向けモダンC++17ヘッダーオンリーライブラリ。 [MIT]
* [Magic Enum](https://github.com/Neargye/magic_enum) - 文字列変換や反復処理に対応する静的enumリフレクションを提供するヘッダーオンリーC++17ライブラリ。マクロや定型コードなしですべてのenum型で動作。 [MIT]
* [magic_get](https://github.com/apolukhin/magic_get) - ユーザー定義型で、マクロや定型コードなしにstd::tuple風のメソッドを利用。 [Boost]
* [meta](https://github.com/skypjack/meta) - C++のヘッダーオンリー、非侵襲的でマクロ不要の実行時リフレクションシステム。 [MIT]
* [Nameof](https://github.com/Neargye/nameof) - 変数、型、関数、マクロ、enumの簡潔な名前を取得するマクロと関数を提供するヘッダーオンリーC++17ライブラリ。 [MIT]
* [REFLECT](https://github.com/qlibs/reflect) - C++20静的リフレクションライブラリ。 [MIT]
* [reflect-cpp](https://github.com/getml/reflect-cpp) - 構造体からのフィールド名の自動取得を含む、リフレクションによるシリアライズ。 [MIT]
* [RTTR](https://github.com/rttrorg/rttr) - C++11向けリフレクションライブラリ。 [MIT] [website](https://www.rttr.org)
* [simple_enum](https://github.com/arturbac/simple_enum) - 高速で直感的、型安全なC++列挙型サポートライブラリ。 [BSL-1.0] [website](https://arturbac.github.io/simple_enum/)
* [TSMP](https://github.com/fabian-jung/tsmp) - 侵襲的な仕組みやマクロを使わないC++20静的リフレクションライブラリ。libclangでソースからリフレクションデータを抽出し、テンプレート特殊化で利用可能にします。 [MIT]
* [visit_struct](https://github.com/cbeck88/visit_struct) - C++構造体フィールドのリフレクション向け小型ライブラリ。 [Boost]
* [Refureku](https://github.com/jsoysouvanh/Refureku) - C++17実行時リフレクションおよびコード生成ライブラリ。 [MIT]

## 正規表現

* [CppVerbalExpressions](https://github.com/VerbalExpressions/CppVerbalExpressions) - C++正規表現を簡単に使えます。 [MIT]
* [CTRE](https://github.com/hanickadot/compile-time-regular-expressions) - コンパイル時に評価される、PCREと（ほぼ）互換の正規表現マッチャー。 [MIT]
* [Hyperscan](https://github.com/intel/hyperscan) - Intel製の高性能マルチ正規表現マッチングライブラリ。数万個におよぶ多数の正規表現を同時に照合できます。通常はDPIライブラリスタックで利用されます。 [BSD]
* [Oniguruma](https://github.com/kkos/oniguruma) - さまざまな文字エンコーディングに対応する、モダンで柔軟な正規表現ライブラリ。 [BSD]
* [PCRE](https://pcre.org/) - Perlの正規表現機能に着想を得たC正規表現ライブラリ。 [BSD]
* [PCRE2](https://github.com/PCRE2Project/pcre2) - 正規表現パターンマッチングを実装するC関数群。
正規表現パターンマッチング。 [BSD] [website](https://pcre2project.github.io/pcre2/)
* [PIRE](https://github.com/yandex/pire) - Yandex製のPerl非互換正規表現ライブラリ。非常に高速（400 MB/s超）です。 [LPGL v3.0]
* [RE2](https://github.com/google/re2) - オートマトン理論に基づく有限状態機械を使った正規表現ソフトウェアライブラリ。 [BSD-3-Clause]
* [SLRE](https://github.com/cesanta/slre) - C/C++向け超軽量正規表現エンジン。 [GPLv2/Proprietary]
* [sregex](https://github.com/openresty/sregex) - 大規模データストリーム照合向けの、バックトラッキングを行わないNFA/DFAベースのPerl互換正規表現エンジンライブラリ。 [BSD]
* [SRELL](https://www.akenotsuki.com/misc/srell/en/) - Unicodeに対応するC++正規表現テンプレートライブラリ。 [BSD]
* [TRE](https://github.com/laurikari/tre) - 近似正規表現マッチングライブラリおよびagrepコマンドラインツール。 [BSD-2-Clause]
* [Vectorscan](https://github.com/VectorCamp/vectorscan) - 高性能正規表現マッチングライブラリのポータブルなフォーク。 [BSD-3-Clause]
* [Pawn.Regex](https://github.com/urShadow/Pawn.Regex) - C++11 std::regexで正規表現をサポートするPawnプラグイン。 [MIT]

## ロボティクス

* [FusionCore](https://github.com/manankharwar/fusioncore) - 適応型ノイズ処理と外れ値除去を備え、GPS、IMU、車輪オドメトリーを融合して堅牢な屋外位置推定を行うROS 2 UKFセンサーフュージョンライブラリ。 [Apache2]
* [MOOS-IvP](https://moos-ivp.org) - ロボットプラットフォーム、特に自律型海洋車両に自律性を提供するオープンソースC++モジュール群。
* [MRPT](https://www.mrpt.org/) - 移動ロボットプログラミングツールキット。 [BSD]
* [PCL](https://github.com/PointCloudLibrary/pcl) - Point Cloud Libraryは、2D/3D画像および点群処理向けの、スタンドアロンで大規模なオープンプロジェクトです。 [BSD] [website](https://www.pointclouds.org/)
* [Robotics Library (RL)](https://www.roboticslibrary.org/) - ロボットの運動学、動作計画、制御を行う自己完結型C++ライブラリ。 [BSD]
* [RobWork](https://gitlab.com/sdurobotics/RobWork) - ロボットシステムのシミュレーションと制御を行うC++ライブラリ集。 [Apache2] [website](https://www.robwork.dk/)
* [ROS](https://wiki.ros.org/) - Robot Operating Systemは、ソフトウェア開発者がロボットアプリケーションを作成するためのライブラリとツールを提供します。 [BSD]
* [Ruckig](https://github.com/pantor/ruckig) - ロボットや機械向けのリアルタイム動作生成。 [MIT] [website](https://ruckig.com)
* [YARP (Yet Another Robot Platform)](https://github.com/robotology/yarp) - 通信およびデバイスインターフェイス向けライブラリとツールキット。 [BSD-3-Clause] [website](https://www.yarp.it/)
* [SPICE Toolkit](https://github.com/arturania/cspice) - ロボット宇宙機による科学観測の計画・分析で使う幾何情報を計算するライブラリおよびツールキット。 [MIT] [website](https://naif.jpl.nasa.gov/naif/toolkit.html)

## 科学計算

* [AMGCL](https://github.com/ddemidov/amgcl) - 代数的マルチグリッド法で大規模疎線形系を解くC++ヘッダーオンリーライブラリ。 [MIT]
* [Au](https://github.com/aurora-opensource/au) - 依存関係がなく、単一ファイルでの配布も可能なC++14互換の物理単位ライブラリ。安全性、アクセシビリティ、性能、開発者体験を重視。 [Apache 2.0] [website](https://aurora-opensource.github.io/au/main/)
* [FFTW](https://www.fftw.org/) - 1次元または多次元の離散フーリエ変換（DFT）を計算するCライブラリ。 [GPL]
* [GSL](https://www.gnu.org/software/gsl/) - GNU科学計算ライブラリ。 [GPL]
* [preCICE](https://github.com/precice/precice) - 分割型マルチフィジックスシミュレーション（FSI、CHTなど）向け連成ライブラリ。 [LGPL] [website](https://precice.org/)
* [TileDB](https://github.com/TileDB-Inc/TileDB) - 高速な密／疎多次元配列DBMS。 [MIT] [website](https://tiledb.io/)
* [Trilinos](https://github.com/trilinos/Trilinos) - 高性能PDEソルバー。 [BSD]
* [Torch](https://github.com/torch/torch7) - GPUを最優先し、機械学習アルゴリズムを幅広くサポートする科学計算フレームワーク。 [BSD-3-Clause] [website](https://torch.ch/)
* [volesti](https://github.com/GeomScale/volesti) - 切断分布からの高次元サンプリング、凸最適化、体積計算。

## スクリプティング

* [AngelScript](https://www.angelcode.com/angelscript/) - ゲーム向けのインタープリター／コンパイル型スクリプト言語。 [zlib]
* [Boost.Python](https://github.com/boostorg/python) - C++とPythonプログラミング言語間のシームレスな相互運用を可能にするC++ライブラリ。 [Boost] [website](https://boost.org/libs/python)
* [cppimport](https://github.com/tbenthompson/cppimport) - PythonからC++ファイルを直接インポート。 [MIT]
* [CppSharp](https://github.com/mono/CppSharp) - C/C++ APIを高水準言語に接続するツールとライブラリ。 [MIT]
* [ChaiScript](https://github.com/ChaiScript/ChaiScript/) - 使いやすいC++組み込みスクリプト言語。 [BSD] [website](https://chaiscript.com/)
* [ctypes.sh](https://github.com/taviso/ctypes.sh) - bash向け外部関数インターフェイス。 [MIT]
* [Cython](https://github.com/cython/cython) - Cythonは、Pythonと（Pyrexを基盤とする）拡張Cython言語の両方に対応する最適化静的コンパイラーです。Python拡張向けCコードを、Pythonそのものと同じくらい簡単に書けます。 [Apache] [website](https://cython.org/)
* [djinni](https://djinni.xlcpp.dev) - 言語間の型宣言とインターフェイスバインディングを生成するツール。 [Apache2]
* [Duktape](https://github.com/svaarala/duktape) - フットプリントの小さい組み込み可能JavaScriptエンジン。 [MIT] [website](https://duktape.org)
* [JavaCpp](https://github.com/bytedeco/javacpp) - JavaとネイティブC++をつなぐ、欠けていた橋渡し。 [Apache2]
* [JerryScript](https://github.com/jerryscript-project/jerryscript) - IoT向けの超軽量JavaScriptエンジン。 [Apache-2.0] [website](https://jerryscript.net/)
* [libffi](https://github.com/libffi/libffi) - ポータブルな外部関数インターフェイスライブラリ。 [MIT] [website](https://sourceware.org/libffi/)
* [Lua](https://www.lua.org/) - 設定ファイルおよび基本的なアプリケーションスクリプト向けの、最小限で高速なスクリプトエンジン。 [MIT]
* [LuaBridge](https://github.com/vinniefalco/LuaBridge) - LuaをC++にバインドする軽量で依存関係のないライブラリ。 [MIT]
* [LuaBridge3](https://github.com/kunitoki/LuaBridge3) - Lua、LuaJIT、Luau、RaviをC++にバインドする軽量で依存関係のないライブラリ。 [MIT]
* [luacxx](https://github.com/dafrito/luacxx) - Luaバインディングを作成するC++11 API。 [MIT]
* [Luau](https://github.com/luau-lang/luau) - Luaから派生した、高速、小型、安全で段階的型付けに対応する組み込み可能スクリプト言語。 [MIT] [website](https://luau.org/)
* [MicroQuickJS](https://github.com/bellard/mquickjs) - 組み込みシステムを対象としたJavaScriptエンジン。 [MIT]
* [MiniScript](https://miniscript.org/) - モダンで洗練され、学びやすく、独自のC#またはC++プロジェクトに組み込みやすいスクリプト言語。 [MIT]
* [nanobind](https://github.com/wjakob/nanobind) - 小型で効率的なC++/Pythonバインディング。 [BSD-3-Clause]
* [nbind](https://github.com/charto/nbind) - C++ライブラリをJavaScriptから利用可能にする魔法のようなヘッダー。 [MIT]
* [PHP-CPP](https://github.com/CopernicaMarketingSoftware/PHP-CPP) - C++でPHP拡張を構築するライブラリ。 [Apache2] [website](https://www.php-cpp.com/)
* [pocketpy](https://github.com/blueloveTH/pocketpy) - ゲームスクリプト向けC++17ヘッダーオンリーPythonインタープリター。 [MIT] [website](https://pocketpy.dev/)
* [pybind11](https://github.com/pybind/pybind11) - C++11とPython間のシームレスな相互運用。 [BSD]
* [QuickJS](https://bellard.org/quickjs/) - 小型で組み込み可能なJavaScriptエンジン。 [MIT]
* [SIP](https://riverbankcomputing.com/software/sip/intro) - Python v2およびv3向けC/C++バインディング生成器。 [GPL]
* [sol2](https://github.com/ThePhD/sol2) - 高度な機能と最高レベルの性能を持つC++とLuaのAPIラッパー。 [MIT]
* [SWIG](https://github.com/swig/swig) - C++コードをJavaScript、Perl、PHP、Python、Tcl、Rubyに接続できるラッパー／インターフェイス生成器。 [GPL/Output not licensed] [website](https://www.swig.org/)
* [txiki.js](https://github.com/saghul/txiki.js) - 小型のJavaScriptランタイム。 [MIT]
* [V7](https://github.com/cesanta/v7) - 組み込みJavaScriptエンジン。 [GPL2]
* [V8](https://v8.dev) - あらゆるC++アプリケーションに組み込める、Google製の高速JavaScriptエンジン。 [BSD]
* [v8pp](https://github.com/pmed/v8pp) - JavaScriptコードから使えるように、C++クラスと関数をV8に公開するヘッダーオンリーライブラリ。 [BOOST] [website](https://pmed.github.io/v8pp/)
* [ChakraCore](https://github.com/Microsoft/ChakraCore) - Microsoft製のJavaScriptエンジンで、nodejsに組み込み可能。 [MIT]
* [MuJS](https://codeberg.org/ccxvii/mujs) - 組み込み可能なC製JavaScriptインタープリター。 [ISC] [website](https://mujs.com)
* [hobbes](https://github.com/Morgan-Stanley/hobbes) - Morgan Stanley製の言語および組み込みJITコンパイラー。 [Apache-2.0]

## シリアライズ

* [BitSerializer](https://github.com/PavelKisliak/BitSerializer) - JSON、XML、YAML、CSV、MsgPackに対応するマルチフォーマットシリアライズライブラリ。 [MIT]
* [Bitsery](https://github.com/fraillt/bitsery) - ヘッダーオンリーC++バイナリーシリアライズライブラリ。 [MIT]
* [Bond](https://github.com/Microsoft/bond) - スキーマ化データを扱うためのオープンソース・クロスプラットフォームフレームワーク。 [MIT]
* [Boost.Serialization](https://github.com/boostorg/serialization) - Boostシリアライズライブラリ。 [Boost] [website](https://boost.org/libs/serialization)
* [Cap'n Proto](https://github.com/capnproto/capnproto) - 高速なデータ交換形式と、能力ベースのRPCシステム。 [MIT] [website](https://capnproto.org/)
* [cereal](https://github.com/USCiLab/cereal) - C++11シリアライズライブラリ。 [BSD]
* [cista](https://github.com/felixguendling/cista) - ゼロコピーの高性能シリアライズ／デシリアライズ向けC++17ライブラリ。 [MIT]
* [cppcodec](https://github.com/tplgy/cppcodec) - 一貫性と柔軟性のあるAPIでbase64、base32、hexをエンコード／デコードするヘッダーオンリーC++11ライブラリ。 [MIT]
* [FastBinaryEncoding](https://github.com/chronoxor/FastBinaryEncoding) - C++、C#、Go、Java、JavaScript、Kotlin、Python、Ruby、Swift向けの超高速で汎用的なFast Binary Encodingシリアライズソリューション。 [MIT]
* [FlatBuffers](https://github.com/google/flatbuffers) - メモリー効率に優れたシリアライズライブラリ。 [Apache2]
* [Kaitai Struct](https://kaitai.io) - さまざまなバイナリデータ構造を記述する宣言型言語と、C++パーサーコードを生成するコンパイラー。
* [iguana](https://github.com/qicosmos/iguana) - C++20およびC++17で開発された、モダンで汎用的かつ使いやすいシリアライズエンジン。 [Apache2]
* [MessagePack](https://github.com/msgpack/msgpack-c) - CおよびC++向けの「JSONのような」効率的なバイナリーシリアライズ形式。 [Apache2] [website](https://msgpack.org/)
* [mrpt-serialization](https://github.com/mrpt/mrpt/) - バイナリーまたはテキスト形式へのバージョン管理付きシリアライズ。 [BSD] [website](https://docs.mrpt.org/reference/latest/group_mrpt_serialization_grp.html)
* [nanopb](https://github.com/nanopb/nanopb) - ANSI C製の小さなコードサイズのProtocol Buffers実装。 [Zlib]
* [protobuf](https://github.com/protocolbuffers/protobuf) - Protocol Buffers。Googleのデータ交換形式。 [BSD]
* [protobuf-c](https://github.com/protobuf-c/protobuf-c) - CによるProtocol Buffers実装。 [BSD]
* [Protocol Puffers](https://github.com/PragmaTwice/protopuf) - C++20で記述された、小型でテンプレートを多用しprotobuf互換のヘッダーオンリー・シリアライズ／デシリアライズライブラリ。 [Apache-2.0]
* [SimpleBinaryEncoding](https://github.com/real-logic/simple-binary-encoding) - 低レイテンシアプリケーション向けバイナリー形式でのアプリケーションメッセージのエンコード／デコード。 [Apache2]
* [upb](https://github.com/protocolbuffers/upb) - 小型のC製protobuf実装。 [BSD]
* [Wirehair](https://github.com/catid/wirehair) - 大規模データ向けO(N)ファウンテン符号。 [BSD-3-Clause]
* [YAS](https://github.com/niXman/yas) - 非常に高速な**Y**et **A**nother **S**erializationライブラリ。バイナリー／テキスト／JSON形式に対応。 [Boost]
* [zpp_bits](https://github.com/eyalz800/zpp_bits) - 実際に最速のモダンな**シ**リアライズライブラリです。[動画](https://www.youtube.com/watch?v=G7-GQhCw8eE&ab_channel=CppCon)をご覧ください。
* [fbthrift](https://github.com/facebook/fbthrift) - シリアライズライブラリとRPCフレームワークを含む、Facebook版Apache Thrift。 [Apache-2.0]

## シリアルポート

* [Asio](https://github.com/chriskohlhoff/asio/) - Asioには、ポータブルな方法でシリアルポートを作成・操作するクラスが含まれています。 [Boost] [website](https://think-async.com/)
* [Boost.Asio](https://github.com/boostorg/asio) - Boost.Asioには、ポータブルな方法でシリアルポートを作成・操作するクラスが含まれています。 [Boost] [website](https://boost.org/libs/asio)
* [CSerialPort](https://github.com/itas109/CSerialPort) - 軽量なクロスプラットフォームシリアルポートライブラリ。 [LGPL3]
* [Libserial](https://github.com/crayzeewulf/libserial) - C++でのシリアルポートプログラミング。 [BSD-3-Clause]
* [Serial Communication Library](https://github.com/wjwwood/serial) - C++で記述されたクロスプラットフォームのシリアルポートライブラリ。 [MIT] [website](https://wjwwood.io/serial/)

## ソート

+ [cpp-sort](https://github.com/Morwenn/cpp-sort) - C++14向けソートアルゴリズムと関連ツール。 [MIT]
* [pdqsort](https://github.com/orlp/pdqsort) - パターンを打破するクイックソート。 [zlib]
* [Timsort](https://github.com/gfx/cpp-TimSort) - 逆順または一部ソート済みデータでは、std::sortを含むクイックソート系アルゴリズムを上回る、テンプレート式の安定ソート関数。 [MIT]
* [Indiesort](https://github.com/mattreecebentley/plf_indiesort) - ランダムアクセスでないコンテナにstd::sortなどのランダムアクセスソート関数を使えるようにするラッパー。また、ランダムアクセスコンテナや配列で、大きい型または自明にコピーできない型のソート性能も向上。 [zLib] [website](https://plflib.org/indiesort.htm)
* [x86-simd-sort](https://github.com/numpy/x86-simd-sort) - 高性能なSIMDベースのソートアルゴリズム向けC++テンプレートライブラリ。 [BSD-3-Clause]

## 動画

* [libvpx](https://www.webmproject.org/code/) - VP8/VP9コーデックSDK。 [BSD]
* [FFmpeg](https://www.ffmpeg.org/) - 音声と動画の録画、変換、ストリーミングを行う完全なクロスプラットフォームソリューション。 [LGPL2/GPL2]
* [avcpp](https://github.com/h4tr3d/avcpp) - FFmpeg向けモダンC++ラッパー。 [MIT]
* [libde265](https://github.com/strukturag/libde265) - オープンH.265動画コーデック実装。 [LGPL] [website](https://www.libde265.org/)
* [x265](https://bitbucket.org/multicoreware/x265_git/src) - オープンH.265動画コーデック実装。 [GPL2] [website](https://x265.readthedocs.io/en/master/)
* [OpenH264](https://github.com/cisco/openh264) - オープンソースH.264コーデック。 [BSD] [website](https://www.openh264.org/)
* [Theora](https://www.theora.org/) - 無料でオープンな動画圧縮形式。 [BSD]
* [Vireo](https://github.com/twitter/vireo/) - Twitter製の軽量で多用途な動画処理ライブラリ。 [MIT]
* [libuvc](https://github.com/libuvc/libuvc) - USBビデオデバイス向けクロスプラットフォームライブラリ。 [BSD]

## 仮想マシン

* [CarpVM](https://github.com/tekknolagi/carp) - C製の「興味深い」仮想マシン。今後どうなるか見てみましょう。 [GPLv3]
* [MicroPython](https://github.com/micropython/micropython) - マイクロコントローラー上でPython 3.xを実装することを目指しています。 [MIT]
* [TinyVM](https://github.com/jakogut/tinyvm) - 純粋なANSI Cで記述された、小型で高速、軽量な仮想マシン。 [MIT]

## Webアプリケーションフレームワーク

* [aeronet](https://github.com/sjanel/aeronet) - 性能と拡張性に重点を置いた、高性能でモジュール式のC++ HTTP/1.1、HTTP/2、WebSocketマイクロサービスフレームワーク。 [MIT]
* [Civetweb](https://github.com/civetweb/civetweb) - CGI、SSL、Luaをオプションでサポートする、使いやすく強力な組み込み可能C/C++ Webサーバー。 [MIT]
* [C++ REST SDK](https://github.com/Microsoft/cpprestsdk) - モダンな非同期C++ API設計を用いた、ネイティブコードでのクラウド型クライアント／サーバー通信を実現するMicrosoftプロジェクト。 [MIT]
* [CppCMS](https://cppcms.com/) - 無料の高性能Web開発フレームワーク（CMSではありません）。 [LGPLv3]
* [Crow](https://github.com/CrowCpp/Crow) - PythonのFlaskに似たルーティングを使う、Webサービス実行向けC++マイクロフレームワーク。 [BSD] [website](https://crowcpp.org)
* [Cutelyst](https://github.com/cutelyst/cutelyst) - PerlのCatalystフレームワークのシンプルなアプローチを採用し、Qt上に構築されたC++ Webフレームワーク。 [BSD-3-Clause] [website](https://cutelyst.org/)
* [Drogon](https://github.com/an-tao/drogon) - C++17/20ベースの高性能HTTPアプリケーションフレームワーク。 [MIT]
* [C++ wfrest](https://github.com/wfrest/wfrest) - C++ WebフレームワークREST API。 [Apache2]
* [facil.io](https://github.com/boazsegev/facil.io) - HTTP、WebSocket、SSEなどをサポートするイベント駆動型高性能C Webフレームワーク。 [MIT] [website](https://facil.io)
* [Kore](https://kore.io/) - Cで開発された超高速で柔軟なWebアプリケーション向けWebサーバー／フレームワーク。 [ISC]
* [libOnion](https://www.coralbits.com/libonion/) - C言語でWebサーバーを作成する軽量ライブラリ。 [LGPLv3]
* [lwan](https://github.com/lpereira/lwan) - 実験的でスケーラブルな高性能HTTPサーバー。 [GPL2]
* [Mach](https://github.com/machframework/mach) - 性能、型安全性、開発者体験に重点を置いたモダンC++20 Webフレームワーク。 [MIT] [website](https://machframework.dev/).
* [oat++](https://github.com/oatpp/oatpp) - 高性能Webサービスを作成する軽量で依存関係ゼロのフレームワーク。 [Apache-2.0] [website](https://oatpp.io/)
* [Pistache](https://pistacheio.github.io/pistache/) - 外部依存関係のない純粋なC++11で記述されたC++ RESTフレームワーク。 [Apache2]
* [QDjango](https://github.com/jlaine/qdjango/) - Qtライブラリ上に構築されたC++ Webフレームワーク。可能な限りDjango APIに従っており、それが名前の由来です。 [LGPL]
* [TreeFrog Framework](https://github.com/treefrogframework/treefrog-framework) - HTTPとWebSocketプロトコルおよびO/Rマッピングをサポートする、C++とQtベースの高速フルスタックWebアプリケーションフレームワーク。 [BSD] [website](https://www.treefrogframework.org/)
* [userver](https://github.com/userver-framework/userver) - 効率的なマイクロサービス、サービス、ユーティリティを高速かつ快適に作成できる、豊富な抽象化とデータベースドライバーを備えた非同期C++17フレームワーク。 [Apache-2.0] [website](https://userver.tech/)
* [Wt](https://www.webtoolkit.eu/wt) - Webアプリケーションを開発するC++ライブラリ。 [GPL/Proprietary]
* [httpserver.h](https://github.com/jeremycw/httpserver.h) - C向けシングルヘッダーHTTPサーバーライブラリ。 [MIT]
* [libhttp](https://github.com/lammertb/libhttp) - C/C++製のクロスプラットフォームHTTPおよびHTTPSライブラリ。 [MIT]

## XML
*XMLは本当にひどい。言い訳の余地はない。人間にとって解析しにくく、コンピューターにとっても大惨事だ。あんなひどいものが存在する理由などない。 - Linus Torvalds*

* [Boost.PropertyTree](https://github.com/boostorg/property_tree) - XML/JSON/INI/Infoファイルを解析できるプロパティツリーパーサー／ジェネレーター。 [Boost] [website](https://boost.org/libs/property_tree)
* [Expat](https://www.libexpat.org/) - Cで記述されたXMLパーサーライブラリ。 [MIT]
* [Libxml2](https://xmlsoft.org/) - GNOMEのXML Cパーサーおよびツールキット。 [MIT]
* [libxml++](https://libxmlplusplus.sourceforge.net/) - C++向けXMLパーサー。 [LGPL2]
* [Mini-XML](https://github.com/michaelrsweet/mxml) - ANSI Cで記述された小型XML解析ライブラリ。 [LGPL2 with exceptions]
* [PugiXML](https://pugixml.org/) - XPathに対応した軽量でシンプルかつ高速なC++ XMLパーサー。 [MIT]
* [RapidXml](https://rapidxml.sourceforge.net/) - 使いやすさ、ポータビリティ、妥当なW3C互換性を維持しながら、可能な限り高速なXMLパーサーを目指した実装。 [Boost]
* [TinyXML](https://sourceforge.net/projects/tinyxml/) - 他のプログラムに簡単に組み込める、シンプルで小型かつ最小限のC++ XMLパーサー。 [zlib]
* [TinyXML2](https://github.com/leethomason/tinyxml2) - 他のプログラムに簡単に組み込める、シンプルで小型かつ効率的なC++ XMLパーサー。 [zlib]
* [TinyXML++](https://github.com/rjpcomputing/ticpp) - テンプレート、例外、優れたエラー処理など、C++の強みを数多く活用するTinyXMLのまったく新しいインターフェイス。 [MIT]
* [Xalan C](https://github.com/apache/xalan-c) - XSLT 1.0標準に準拠したスタイルシートを使ってXMLドキュメントを変換するライブラリおよびコマンドラインプログラム。 [Apache-2.0] [website](https://xalan.apache.org/)
* [Xerces-C++](https://xerces.apache.org/xerces-c/) - C++のポータブルなサブセットで記述された検証機能付きXMLパーサー。 [Apache2]

## YAML

* [fkYAML](https://github.com/fktn-k/fkYAML) - C++ヘッダーオンリーYAMLライブラリ。 [MIT]
* [LibCYAML](https://github.com/tlsa/libcyaml) - YAMLを読み書きするCライブラリ。 [ISC]
* [libfyaml](https://github.com/pantoniou/libfyaml) - YAML 1.2およびJSON向けの高機能パーサー／ライター。 [MIT]
* [LibYAML](https://github.com/yaml/libyaml) - YAMLを解析・出力するCライブラリ。 [MIT] [website](https://pyyaml.org/wiki/LibYAML)
* [mini-yaml](https://github.com/jimmiebergmann/mini-yaml) - シングルヘッダーのYAML 1.0 C++11シリアライザー／デシリアライザー。 [MIT]
* [rapidyaml](https://github.com/biojppm/rapidyaml) - YAMLを解析・出力するC++ライブラリ。 [MIT]
* [yaml-cpp](https://github.com/jbeder/yaml-cpp) - C++製YAMLパーサーおよび出力器。 [MIT]

## その他
*上記のカテゴリに当てはまらない、またはまだ分類されていない便利なライブラリやツール。*

* [access_profiler](https://github.com/arvidn/access_profiler) - C++プログラムのメンバー変数へのアクセス回数を数えるツール。 [GPL3]
* [American fuzzy lop](https://lcamtuf.coredump.cx/afl/)（afl-fuzz） - 時間と最小限のサンプル入力を与えると、バグを自動発見する強力なファジングツール。 [Apache2]
* [Argon2](https://github.com/P-H-C/phc-winner-argon2) - PHCで優勝したパスワードハッシュArgon2。 [CC0/Apache2]
* [AsmJit](https://github.com/asmjit/asmjit) - 低レイテンシの機械語生成。 [Zlib] [website](https://asmjit.com)
* [Better String](https://bstring.sourceforge.net) - より機能的でバッファーオーバーフローの問題がない、C文字列ライブラリの代替。C++ラッパーも含みます。 [BSD, GPL2]
* [Boost.Signals2](https://github.com/boostorg/signals2) - 管理されたシグナルとスロットのシステム実装。 [Boost] [website](https://boost.org/libs/signals2)
* [casacore](https://code.google.com/p/casacore/) - aips++から派生したC++コアライブラリ群。 [LGPL]
* [CCTZ](https://github.com/google/cctz) - タイムゾーンの規則を使って絶対時刻と市民時刻を変換するC++ライブラリ。 [Apache-2.0]
* [Cheat Sheets of HackingCPP](https://hackingcpp.com/cpp/cheat_sheets.html) - アルゴリズム、ビュー、コンテナ、乱数などに関する便利なチートシートとインフォグラフィック。
* [Concord](https://github.com/Cogmasters/concord) - Cで記述されたDiscord APIラッパーライブラリ。 [MIT] [website](https://cogmasters.github.io/concord)
* [CPPItertools](https://github.com/ryanhaining/cppitertools) - Pythonの組み込み機能とitertoolsライブラリに着想を得た、rangeベースforループの拡張機能。 [BSD-2-Clause]
* [CPP-JWT](https://github.com/arun11299/cpp-jwt) - C++向けJSON Web Tokenライブラリ。 [MIT]
* [cpp-lazy](https://github.com/MarcDirven/cpp-lazy) - C++11/14/17/20向け高速で使いやすい遅延評価ライブラリ。 [MIT]
* [CRCpp](https://github.com/d-bahr/CRCpp) - 使いやすく高速なC++ CRCライブラリ。 [BSD-3-Clause]
* [cxx-prettyprint](https://github.com/louisdx/cxx-prettyprint) - C++コンテナ向け整形表示ライブラリ。 [Boost]
* [date](https://github.com/HowardHinnant/date) - C++11/14/17の<chrono>ヘッダーを基盤とする日付・時刻ライブラリ。 [MIT] [website](https://howardhinnant.github.io/date/date.html)
* [D++ (DPP)](https://github.com/brainboxdotcc/DPP) - Discordボットを作成するための、軽量、高性能、スケーラブルなC++ライブラリ。 [Apache2] [website](https://dpp.dev)
* [Dragonbox](https://github.com/jk-jeon/dragonbox) - C++における新しい浮動小数点数から文字列への変換アルゴリズムのリファレンス実装。 [Apache2/BSL-1.0]
* [DynaMix](https://github.com/iboB/dynamix) - 実行時にオブジェクトを構成・変更できるライブラリ。 [MIT]
* [emio](https://github.com/Viatorus/emio) - 安全で高速な高水準および低水準文字入出力ライブラリ。 [MIT]
* [faker-cxx](https://github.com/cieslarmichal/faker-cxx) - テストや開発向けに、偽装しつつ現実的なデータを生成するC++20 Fakerライブラリ。 [MIT]
* [fast_float](https://github.com/fastfloat/fast_float) - strtodより4～10倍高速な、正確で高速なC++ from_chars。GCC 12、Chromium、Redis、WebKit/Safariに採用。 [Apache2/BSL-1.0/MIT]
* [FastFormat](https://www.fastformat.org) - log4jとPantheiosに着想を得た高速で安全なC++フォーマット処理。 [Simplified BSD]
* [fast_io](https://github.com/cppfastio/fast_io) - C++20向けに入出力を大幅に高速化。 [MIT]
* [fccf](https://github.com/p-ranav/fccf) - ディレクトリを再帰的に検索し、検索文字列に一致するC/C++ソースコードを見つけるコマンドラインツール。 [MIT]
* [ffc.h](https://github.com/kolemannix/ffc.h) - fast_floatライブラリを移植した、シングルヘッダーのC99高速float/doubleパーサー。 [Apache-2.0/BSL-1.0/MIT]
* [{fmt}](https://github.com/fmtlib/fmt) :zap: - C++向けの小型で安全かつ高速なフォーマット処理ライブラリ。 [Simplified BSD] [website](https://fmt.dev)
* [gcc-poison](https://github.com/leafsr/gcc-poison) - アプリケーションで安全でないC/C++関数を禁止するためのシンプルなヘッダーファイル。
* [Gear-Lib](https://github.com/gozfree/gear-lib) - 組み込みおよびネットワークサービス開発向けPOSIX C基本ライブラリ集。 [MIT]
* [happly](https://github.com/nmwsharp/happly) - PLYファイル形式向けC++ヘッダーオンリーパーサー。PLYを楽しく解析しましょう。 [MIT]
* [hedley](https://github.com/nemequ/hedley) - プラットフォーム固有の煩わしさを軽減するC/C++ヘッダーファイル。 [website](https://nemequ.github.io/hedley/)
* [Hexi](https://github.com/EmberEmu/Hexi) - バイナリーストリーミングとシリアライズ向けのヘッダーオンリー軽量C++ライブラリ。 [Apache-2.0/MIT]
* [HighwayHash](https://github.com/google/highwayhash) - 高速で強力なハッシュ関数：SipHash/HighwayHash。 [Apache-2.0]
* [inja](https://github.com/pantor/inja) - モダンC++向けテンプレートエンジン。 [MIT]
* [Jinja2С++](https://github.com/jinja2cpp/Jinja2Cpp) - ほぼ完全準拠のテンプレートエンジン実装。 [website](https://jinja2cpp.github.io/)
* [jwt-cpp](https://github.com/Thalhammer/jwt-cpp) - C++でJSON Web Tokenを作成・検証するヘッダーオンリーライブラリ。 [MIT]
* [Kangaru](https://github.com/gracicot/kangaru) - C++11およびC++14向け依存性注入コンテナ。 [MIT]
* [Klib](https://github.com/attractivechaos/klib) - 一般的なアルゴリズムとデータ構造の小型・軽量な実装。 [MIT]
* [KOMIHASH](https://github.com/avaneev/komihash) - 非常に高速で高品質なハッシュ関数。離散的な増分入力とストリーミングハッシュに対応。 [MIT]
* [libcpuid](https://github.com/anrieff/libcpuid) - x86 CPUの検出と機能抽出を行う小型Cライブラリ。 [BSD]
* [libenvpp](https://github.com/ph3at/libenvpp) - 型安全な環境変数解析向けのモダンC++ライブラリ。 [Apache-2.0]
* [libevil](https://github.com/avati/libevil) - 邪悪なライセンスマネージャー。 [GPLv3]
* [libnih](https://github.com/keybuk/libnih) - 軽量なC関数および構造体のライブラリ。 [GPL2.1]
* [libONVIF](https://github.com/Privatehive/libONVIF) - またしても別のONVIFライブラリ。 [GPL-3.0]
* [libpopcnt](https://github.com/kimwalisch/libpopcnt) - 高速C/C++ビット人口カウントライブラリ。 [BSD-2-Clause]
* [libsigc++](https://github.com/libsigcplusplus/libsigcplusplus) - 標準C++向け型安全なコールバックシステム。 [LGPL] [website](https://libsigcplusplus.github.io/libsigcplusplus)
* [libusb](https://libusb.info/) - USBデバイスへポータブルにアクセスできる汎用USBライブラリ。 [LGPL2]
* [Mach7](https://github.com/solodon4/Mach7) - C++向けパターンマッチングライブラリ。 [BSD]
* [minja.hpp](https://github.com/google/minja) - LLMチャットテンプレート向けのミニマルなC++ Jinjaテンプレートエンジン。 [MIT]
* [mio](https://github.com/mandreyel/mio) - メモリーマップトファイルI/O向けクロスプラットフォームC++11ヘッダーオンリーライブラリ。 [MIT]
* [MPark.Variant](https://github.com/mpark/variant) - C++11/14/17向けC++17 `std::variant`。 [BSL-1.0]
* [MPH](https://github.com/qlibs/mph) - C++20の［最小］静的完全ハッシュライブラリ。 [MIT]
* [Patternia](https://github.com/sentomk/patternia) - モダンC++向けパターンマッチングを提供。 [MIT] [website](https://patternia.tech/)
* [PEGTL](https://github.com/taocpp/PEGTL) - Parsing Expression Grammar Template Library。 [MIT]
* [Pipes](https://github.com/joboccara/pipes) - C++のコレクションを表現力豊かに処理するパイプライン。 [MIT]
* [pprint](https://github.com/p-ranav/pprint) - モダンC++向け整形表示ツール。 [MIT]
* [pspsdk](https://github.com/pspdev/pspsdk) - PSP自作ソフト開発向けオープンソースSDK。 [BSD/GNU GPL3]
* [QtVerbalExpressions](https://github.com/VerbalExpressions/QtVerbalExpressions) - このQtライブラリはC++ VerbalExpressionsライブラリを基にしています。 [MIT]
* [rain](https://github.com/DOSAYGO-Research/rain) - すべてのテストに合格し、ソースコード140行未満で実現した最速の128ビットおよび256ビット非暗号ハッシュ。 [Apache-2.0]
* [RapidFuzz](https://github.com/rapidfuzz/rapidfuzz-cpp) - Levenshtein距離を用いたC++での高速ファジー文字列照合。 [MIT] [website](https://rapidfuzz.github.io/rapidfuzz-cpp/)
* [rapidhash](https://github.com/Nicoshev/rapidhash) - 非常に高速で高品質、プラットフォーム非依存のハッシュアルゴリズム。 [BSD-2-Clause]
* [Reaction](https://github.com/lumia431/reaction) - 効率的なデータフローアプリケーションを構築する、モダンC++20機能を活用した軽量ヘッダーオンリーのリアクティブプログラミングフレームワーク。 [MIT]
* [reproc](https://github.com/DaanDeMeyer/reproc) - クロスプラットフォーム（C99/C++11）プロセスライブラリ。 [MIT]
* [SafetyHook](https://github.com/cursey/safetyhook) - C++23手続きフックライブラリ。 [BSL-1.0]
* [scnlib](https://github.com/eliaskosunen/scnlib) - モダンC++向けscanf。 [Apache-2.0] [website](https://v1.scnlib.dev/)
* [Scintilla](https://scintilla.org/) - 無料のソースコード編集コンポーネント。 [MIT]
* [SDS](https://github.com/antirez/sds) - C向けシンプルな動的文字列ライブラリ。 [BSD]
* [semver.c](https://github.com/h2non/semver.c) - ANSI Cのsemverパーサー兼レンダラー。 [MIT]
* [sigslot](https://sigslot.sourceforge.net/) - C++ Signal/Slotライブラリ。 [PublicDomain]
* [SIMD Everywhere](https://github.com/simd-everywhere/simde) - ネイティブに対応していないシステム向けSIMD命令セット実装。 [MIT]
* [SLJIT](https://github.com/zherczeg/sljit) - プラットフォーム非依存の低レベルJITコンパイラー。 [BSD] [website](https://zherczeg.github.io/sljit/)
* [palacaze/sigslot](https://github.com/palacaze/sigslot) - シンプルなC++14ヘッダーオンリーのシグナル／スロット実装。 [MIT]
* [simdzone](https://github.com/NLnetLabs/simdzone) - 高速で標準準拠のDNSゾーンパーサー。 [BSD-3-Clause]
* [SimpleSignal](https://github.com/larspensjo/SimpleSignal) - 高性能C++11シグナル。 [PublicDomain]
* [single_file_libs](https://github.com/r-lyeh/single_file_libs) - 依存関係を最小限に抑えたC/C++オープンソースライブラリ。 [Various]
* [Spicy](https://github.com/zeek/spicy) - プロトコルとファイルを解析するC++パーサージェネレーター。 [BSD] [website](https://docs.zeek.org/projects/spicy/en/latest/)
* [Stage](https://github.com/rtv/Stage) - 移動ロボットシミュレーター。 [GPL2]
* [stb](https://github.com/nothings/stb) :zap: - C/C++向けシングルファイルライブラリ各種。 [PublicDomain]
* [stdman](https://github.com/jeaye/stdman) - [cppreference](https://cppreference.com)の保存済みHTMLファイルを解析し、Unix系システム向けgroff形式のマニュアルページを生成するツール。 [MIT]
* [StringZilla](https://github.com/ashvardanian/StringZilla) - 東京タワーと言う間に、大規模なテキストデータセットの分割、ソート、シャッフルをより高速に行う文字列ライブラリ界のゴジラ。 [Apache-2.0]
* [StrTk](https://www.partow.net/programming/strtk/index.html) - 高性能な文字列処理ルーチンを備えたC++ライブラリ。 [MIT]
* [tgbotxx](https://github.com/baderouaich/tgbotxx) - Telegramボット向けC++ライブラリ。 [MIT]
* [The RaBitQ Library](https://github.com/VectorDB-NTU/RaBitQ-Library) - RaBitQアルゴリズム向け軽量ライブラリ。 [Apache-2.0] [website](https://vectordb-ntu.github.io/RaBitQ-Library/)
* [tiny::optional](https://github.com/Sedeniono/tiny-optional/) - 不要なメモリーを消費しないstd::optional代替。 [BSL-1.0]
* [Tulip Indicators](https://tulipindicators.org) - 100種類を超える金融テクニカル分析指標を備えたCライブラリ。 [LGPL]
* [ub-canaries](https://github.com/regehr/ub-canaries) - コンパイラーに未定義動作を悪用させようとするC/C++プログラム集。
* [value-category-cheatsheet](https://github.com/jeaye/value-category-cheatsheet) - lvalue、rvalueなどに関するPDFチートシート。 [Jank copyleft]
* [VarTypes](https://github.com/szi/vartypes) - C++/Qt4で変数を管理する機能豊富なオブジェクト指向フレームワーク。 [LGPL]
* [Wildcards](https://github.com/zemasoft/wildcards/) - ワイルドカードを使ったマッチングを実装するシンプルなC++ヘッダーオンリーテンプレートライブラリ。 [BSL-1.0]
* [xjb](https://github.com/xjb714/xjb) - 高速な浮動小数点数から文字列への変換アルゴリズム。 [Apache-2.0]
* [xxHash](https://github.com/Cyan4973/xxHash) - 非常に高速な非暗号ハッシュアルゴリズム。 [BSD-2-Clause] [website](https://xxhash.com/)
* [xxhash_cpp](https://github.com/RedSpah/xxhash_cpp) - xxhashライブラリのC++17移植版。 [BSD-2-Clause]
* [ZBar](https://zbar.sourceforge.net/) - 写真、画像、動画ストリーム内のバーコードをスキャンし、その値を返すバーコードスキャナーライブラリ。 [LGPL2]
* [ZXing](https://github.com/zxing/zxing/) - Javaで実装され、他言語にも移植されたオープンソースのマルチフォーマット1D/2Dバーコード画像処理ライブラリ。 [Apache]
* [spy](https://github.com/jfalcou/spy) - OS、コンパイラー、アーキテクチャ、SIMDをコンパイル時に検出するC++17 constexprライブラリ。 [MIT]
* [licensepp](https://github.com/amrayn/licensepp) - C++プロジェクト向けソフトウェアライセンス管理ライブラリ。 [Apache-2.0]
* [tinydir](https://github.com/cxong/tinydir) - 軽量でポータブル、統合しやすいC製ディレクトリ／ファイルリーダー。 [BSD-2-Clause]
* [Cello](https://github.com/orangeduck/Cello) - 汎用データ構造やポリモーフィズムを含む、Cでの高水準プログラミング。 [BSD-2-Clause] [website](https://libcello.org/)
* [dyno](https://github.com/ldionne/dyno) - 値セマンティクスによる実行時ポリモーフィズムのC++ライブラリ。 [Boost]
* [PolyHook](https://github.com/stevemk14ebr/PolyHook) - C++ x86/x64フックライブラリ。 [MIT]
* [Verdigris](https://github.com/woboq/verdigris) - mocを必要とせずにQtを利用できるヘッダーオンリーライブラリ。 [MIT]
* [Flicks](https://github.com/OculusVR/Flicks) - 一般的なフレームレートを正確に表現するためにFacebook/Oculusが定義した時間単位。 [BSD]
* [Linq](https://github.com/pfultz2/Linq) - C++のリスト内包表記にLINQ構文を提供。 [Boost]
* [libcorrect](https://github.com/quiet/libcorrect) - 畳み込み符号とReed-Solomon誤り訂正のCライブラリ。 [BSD-3-Clause]
* [libfsm](https://github.com/katef/libfsm) - 正規表現やglobを含む有限状態機械の構築・実行ライブラリ。 [BSD-2-Clause]
* [origin](https://github.com/asutton/origin) - concept、診断、その他の基盤ユーティリティ向けC++ライブラリ。

# ソフトウェア
*開発環境を構築するためのソフトウェア。*

## コンパイラー
*CまたはC++コンパイラーの一覧*

* [8cc](https://github.com/rui314/8cc) - 小型Cコンパイラー。
* [c](https://github.com/ryanmjacobs/c) - C「スクリプト」を一度にコンパイルして実行。 [MIT]
* [Clang](https://clang.llvm.org/) - LLVM向けCコンパイラー。C++11/14/1zおよびC11をサポート。LLVMチームが開発。 [NCSA]
* [Fil-C](https://fil-c.org/) - CおよびC++の非常に互換性が高いメモリー安全な実装。
* [GCC](https://gcc.gnu.org/) - GNU Compiler Collection。C++11/14/1z、C11、OpenMPをサポート。 [GNU GPL3]
* [PCC](https://github.com/IanHarvey/pcc) - 非常に古いCコンパイラー。C99をサポート。
* [AMD C++ Compiler](https://www.amd.com/en/developer/aocc.html) - AMDが開発。
* [Intel C++ Compiler](https://software.intel.com/en-us/c-compilers) - Intelが開発。
* [LLVM](https://llvm.org/) - モジュール式で再利用可能なコンパイラーおよびツールチェーン技術のコレクション。
* [Microsoft Visual C++](https://docs.microsoft.com/en-us/cpp/dotnet/dotnet-programming-with-cpp-cli-visual-cpp?view=msvc-160) - Microsoftが開発したMSVC。
* [Open WatCom](https://github.com/open-watcom) - Watcom C、C++、Fortranのクロスコンパイラーおよびツール。 [Sybase Open Watcom Public License]
* [Oracle Solaris Studio](https://www.oracle.com/technetwork/server-storage/solarisstudio/overview/index.html) - SPARCおよびx86向けC、C++、Fortranコンパイラー。C++11をサポート。LinuxおよびSolarisで利用可能。 [OTN Developer License]
* [TCC](https://bellard.org/tcc/) - Tiny C Compiler。 [LGPL]
* [sierra](https://sierra-lang.github.io/) - 保守しやすいプログラムの作成に重点を置くCISC指向プログラミング言語。
* [movfuscator](https://github.com/xoreaxeaxeax/movfuscator) - プログラムをmov命令のみでコンパイルする、単一命令Cコンパイラー。 [MIT]

## オンラインコンパイラー
*オンラインCまたはC++コンパイラーの一覧*

* [codechef](https://www.codechef.com/ide) - シンプルなオンラインコンパイラーCodeChef。
* [coliru](https://coliru.stacked-crooked.com/) - さまざまなC++コンパイラーをサポートするオンラインコンパイラー／シェル。
* [Compiler Explorer](https://gcc.godbolt.org/) - アセンブリ出力を利用できる対話型コンパイラー。
* [CompileOnline](https://www.tutorialspoint.com/codingground.htm) - Linux上でC++をオンラインでコンパイル・実行。
* [Ideone](https://ideone.com/) - 60以上のプログラミング言語でソースコードのコンパイルとオンライン実行ができるオンラインコンパイラー兼デバッグツール。
* [OneCompiler](https://onecompiler.com/) - 70以上のプログラミング言語とデータベースシステムをサポートするオンラインコンパイラー。
* [Programiz](https://www.programiz.com/cpp-programming/online-compiler) - 学習者と開発者向けのオンラインコンパイラー。
* [repl.it](https://repl.it) - 教育者、学習者、開発者向けの強力でシンプルなツールとプラットフォーム。
* [Rextester](https://rextester.com/runcode) - 複数のコンパイラー（Clang、GCC、MSVC）とエディターを提供するオンラインコンパイラー。
* [Try It Online](https://tio.run/) - TIOは、実用・娯楽向けの幅広いプログラミング言語に対応するオンラインインタープリター群です。
* [Wandbox](https://wandbox.org) - Boostを利用できるオンラインClang/GCCコンパイラー。
* [paiza.io](https://paiza.io/en) - 複数ファイル、GitHub（gist）連携、共同編集に対応するオンラインC/C++コンパイラー。
* [InterviewBit](https://www.interviewbit.com/online-cpp-compiler/) - シンプルで使いやすいオンラインC++コンパイラー。

## デバッガー
*CまたはC++デバッガーの一覧*

* [Comparison of debuggers](https://en.wikipedia.org/wiki/Comparison_of_debuggers) - Wikiのデバッガー一覧
* [GDB](https://www.gnu.org/software/gdb/) - GNUデバッガー。
* [LLDB](https://lldb.llvm.org/) - LLDBデバッガー。
* [Metashell](https://metashell.readthedocs.org) - MDBメタデバッガーを含む、対話型テンプレートメタプログラミングシェル。
* [Valgrind](https://valgrind.org/) - メモリーデバッグ、メモリーリーク検出、プロファイリングのためのツール。
* [x64dbg](https://x64dbg.com/) - Windows向けオープンソースx64/x32デバッガー。

## 統合開発環境
*代表的なCまたはC++ IDEの一覧*

* [Anjuta DevStudio](https://sourceforge.net/projects/anjuta/) - GNOME IDE。 [GPL3]
* [AppCode](https://www.jetbrains.com/objc/) - JetBrains IntelliJ IDEAプラットフォーム上に構築された、Objective-C、C、C++、JavaScript開発向けIDE。
* [Cevelop](https://www.cevelop.com) - 追加プラグインを備えたEclipse CDTベースのクロスプラットフォームC/C++ IDE。
* [CLion](https://www.jetbrains.com/clion/) - JetBrains製クロスプラットフォームC/C++ IDE。
* [Code::Blocks](https://www.codeblocks.org/) - 無料のC、C++、Fortran IDE。
* [CodeLite](https://codelite.org/) - もうひとつの無料クロスプラットフォームC/C++ IDE。 [GPL2 with an exception for plugins]
* [Dev-C++](https://sourceforge.net/projects/orwelldevcpp/) - ポータブルなC/C++/C++11 IDE。
* [Eclipse CDT](https://www.eclipse.org/cdt/) - Eclipseプラットフォームを基盤とする完全機能のC/C++ IDE。
* [Embarcadero Dev-CPP](https://github.com/Embarcadero/Dev-Cpp) - 新しいテーマとモダンなコンパイラーがあらかじめインストールされたDev-C++のフォーク。 [GPLv2] [website](https://www.embarcadero.com/free-tools/dev-cpp)
* [Geany](https://www.geany.org/) - 小型、高速、クロスプラットフォームのIDE。 [GPL]
* [IBM VisualAge](https://www-03.ibm.com/software/products/en/visgen) - IBM製コンピューター統合開発環境ファミリー。
* [Irony-mode](https://github.com/Sarcasm/irony-mode) - libclangを活用するEmacs向けC/C++マイナーモード。
* [juCi++](https://gitlab.com/cppit/jucipp) - libclang統合を備えたクロスプラットフォームの軽量C++ IDE。 [MIT]
* [KDevelop](https://www.kdevelop.org/) - 無料のオープンソースIDE。
* [Microsoft Visual Studio](https://www.visualstudio.com/) - Microsoft製IDE。
* [Microsoft Visual Studio Code](https://github.com/microsoft/vscode) :zap: - Microsoft製オープンソースIDE。 [MIT] [website](https://code.visualstudio.com)
* [NetBeans](https://netbeans.org/) - 主にJavaをはじめ、PHP、C/C++、HTML5などの言語で開発するIDE。
* [Qt Creator](https://github.com/qt-creator/qt-creator) :zap: - Qt SDKの一部である、クロスプラットフォームC++、JavaScript、QML IDE。 [GPL3 with exceptions] [website](https://www.qt.io/product/development-tools)
* [rtags](https://github.com/Andersbakken/rtags) - clangを基盤とし、Emacsとの連携を備えたC/C++クライアント／サーバー型インデクサー。
* [Xcode](https://developer.apple.com/xcode/) - Appleが開発。
* [YouCompleteMe](https://github.com/ycm-core/YouCompleteMe) - Vim向けの高速な入力中ファジー検索コード補完エンジン。
* [C Playground - Online C Programming IDE](https://programiz.pro/ide/c) - オンラインでCコードを書き、編集し、実行してCプログラミングを練習できるIDE。

## ビルドシステム

* [awesome-cmake](https://github.com/onqtam/awesome-cmake) - 優れたCMakeスクリプト、モジュール、リソースを厳選した一覧。
* [Bazel](https://bazel.build) - Google製の多言語対応、高速かつスケーラブルなビルドシステム。 [Apache]
* [Bear](https://github.com/rizsotto/Bear) - clangツール向けコンパイルデータベースを生成するツール。 [GPLv3]
* [Buck](https://github.com/facebook/buck) - Facebookで開発・利用されている、C++を含む多様なプラットフォームと言語で小さく再利用可能なモジュール作成を促す高速ビルドシステム。Javaで記述。 [Apache]
* [build2](https://build2.org/) - C/C++プロジェクトの開発とパッケージ化向けクロスプラットフォームのビルド、パッケージ、依存関係管理ツールチェーン。 [MIT]
* [Ccache](https://ccache.dev/) - 高速なC/C++コンパイラーキャッシュ。 [GPLv3]
* [clib](https://github.com/clibs/clib) - Cプログラミング言語向けパッケージマネージャー。 [MIT]
* [CMake](https://cmake.org/) - コンパイラーに依存しない方法でソフトウェアのビルド処理を管理するクロスプラットフォームの無料オープンソースソフトウェア。 [BSD]
* [Cget](https://github.com/pfultz2/cget) - CMakeパッケージの取得。 [Boost] [website](https://cget.readthedocs.io)
* [Conan](https://conan.io/) - オープンソースのC/C++パッケージマネージャー。 [MIT]
* [CPM](https://github.com/iauns/cpm) - CMakeとGitを基盤とするC++パッケージマネージャー。
* [FASTBuild](https://www.fastbuild.org/docs/home.html) - 高度にスケーラブルなコンパイル、キャッシュ、ネットワーク配布に対応する高性能オープンソースビルドシステム。
* [Hunter](https://www.github.com/ruslo/hunter) - CMake駆動のクロスプラットフォームC++パッケージマネージャー。 [BSD-2]
* [MesonBuild](https://mesonbuild.com) - 極めて高速であること、そして何より可能な限りユーザーフレンドリーであることを目指すオープンソースビルドシステム。
* [Ninja](https://ninja-build.org/) - 速度を重視した小型ビルドシステム。
* [Sccache](https://github.com/mozilla/sccache) - クロスプラットフォーム対応とクラウドバックアップストレージの選択肢を備えた高速C/C++コンパイラーキャッシュ。
* [Scons](https://www.scons.org/) - Pythonスクリプトで設定するソフトウェア構築ツール。
* [Sconsolidator](https://github.com/IFS-HSR/SConsolidator) - Eclipse CDT向けSConsビルドシステム統合。
* [Spack](https://spack.io/) - 複数バージョン、設定、プラットフォーム、コンパイラーをサポートする柔軟なパッケージマネージャー。 [Apache-2.0/MIT]
* [SW](https://software-network.org/) - 多数のパッケージを利用できる、クロスプラットフォームC++（およびその他の言語）ビルドシステム兼パッケージマネージャー。 [GPLv3]
* [tundra](https://github.com/deplinenoise/tundra) - 非常に大規模なソフトウェアプロジェクトでも最適なインクリメンタルビルド時間を実現する高性能コードビルドシステム。
* [tup](https://gittup.org/tup/) - 変更ファイルをバックグラウンドで監視するファイルベースのビルドシステム。
* [Premake](https://premake.github.io) - Luaスクリプトで設定し、Windows、Mac OS X、LinuxでVisual Studio、GNU Make、Xcode、Code::Blocksなどのプロジェクトファイルを生成するツール。
* [Vcpkg](https://github.com/microsoft/vcpkg) - Windows、Linux、macOS向けC++ライブラリマネージャー。 [MIT]
* [waf](https://gitlab.com/ita1024/waf) - アプリケーションの設定、コンパイル、インストールを行うPythonベースのフレームワーク。 [BSD] [website](https://waf.io/)
* [XMake](https://xmake.io/) - 統合パッケージマネージャーxrepoを備えた、LuaベースのC/C++クロスプラットフォームビルドユーティリティ。 [Apache]
* [boost-cmake](https://github.com/Orphis/boost-cmake) - Boostライブラリ向けCMakeモジュール。 [BSD-3-Clause]
* [cmake-examples](https://github.com/pr0g/cmake-examples) - さまざまな用途に役立つCMakeの例集。 [MIT]

## 静的コード解析
*コード解析で品質を高め、欠陥を減らすツールの一覧*

* [Cppcheck](https://cppcheck.sourceforge.net/) - 静的C/C++コード解析ツール。 [source](https://github.com/danmar/cppcheck)
* [CppDepend](https://www.cppdepend.com/) - コード依存関係の解析・可視化、設計ルールの定義、影響分析、異なるコードバージョンの比較により、複雑なC/C++コードベースの管理を簡素化。
* [cpplint](https://github.com/cpplint/cpplint) - GoogleのC++スタイルガイドに従うC++スタイルチェッカー。
* [PVS-Studio](https://www.viva64.com/en/pvs-studio/) - C、C++、C#で記述されたプログラムのソースコードからバグを検出するツール。
* [cpp-dependencies](https://github.com/tomtom-international/cpp-dependencies) - C++ #include依存関係を確認するツール（依存関係グラフを.dot形式で作成）。 [Apache]
* [include-what-you-use](https://github.com/include-what-you-use/include-what-you-use) - C/C++ソースファイルのincludeを解析するclang用ツール。 [website](https://include-what-you-use.org/)
* [Infer](https://github.com/facebook/infer) - Java、C、Objective-C向け静的アナライザー。 [BSD]
* [OCLint](https://oclint.org/) - C、C++、Objective-Cの品質を高め欠陥を減らす静的ソースコード解析ツール。 [source](https://github.com/oclint/oclint)
* [Clang Static Analyzer](https://clang-analyzer.llvm.org/index.html) - C、C++、Objective-Cプログラムのバグを見つけるソースコード解析ツール。
* [Linticator](https://linticator.com) - Pc-/FlexeLintのEclipse CDT統合。
* [IKOS](https://github.com/NASA-SW-VnV/ikos) - 抽象解釈理論を基盤とするC/C++静的アナライザー。 [NOSA 1.3]
* [List of tools for static code analysis](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis#C.2FC.2B.2B) - Wikipediaにある静的コード解析ツール一覧。
* [OptView2](https://github.com/OfekShilon/optview2) - 見逃されたClang最適化を調査。
* [Trunk](https://trunk.io) - コードを確認、テスト、マージ、監視するツールキット。
* [CodeCompass](https://github.com/Ericsson/CodeCompass) - 大規模C/C++プロジェクト向けオープンソースコード理解ツール。 [GPL-3.0]
* [CodeChecker](https://github.com/Ericsson/codechecker) - Clang Static AnalyzerおよびClang-Tidy向けの解析ツール、欠陥データベース、ビューアー拡張。 [Apache-2.0]

## コーディングスタイルツール

* [Artistic Style](https://astyle.sourceforge.net/) - C/C++/C#/Obj-C/Javaコードを整形するツール。astyleとも呼ばれます。
* [ClangFormat](https://clang.llvm.org/docs/ClangFormat.html) - C/C++/Obj-Cコードを整形するツール。
* [Clang-Tidy](https://clang.llvm.org/extra/clang-tidy.html) - ClangベースのC++リンターツール。
* [EditorConfig](https://editorconfig.org/) - さまざまなエディターやIDE間で一貫したコーディングスタイルを保つのに役立ちます。
* [Uncrustify](https://github.com/uncrustify/uncrustify) - コード整形ツール。

# リソース
*C++開発スキルや知識を高めるための書籍、Webサイト、記事など、さまざまなリソース。*

## API設計

* [Beautiful Native Libraries](https://lucumr.pocoo.org/2013/8/18/beautiful-native-libraries/)
* [Designing Qt-Style C++ APIs](https://doc.qt.io/archives/qq/qq13-apis.html)

## 記事
*素晴らしいC++関連の記事。*

* [CppCon 2023 Presentation Materials](https://github.com/CppCon/CppCon2023) - CppCon 2023のプレゼンテーション資料。
* [CppCon 2022 Presentation Materials](https://github.com/CppCon/CppCon2022) - CppCon 2022のプレゼンテーション資料。
* [CppCon 2021 Presentation Materials](https://github.com/CppCon/CppCon2021) - CppCon 2021のプレゼンテーション資料。
* [CppCon 2020 Presentation Materials](https://github.com/CppCon/CppCon2020) - CppCon 2020のプレゼンテーション資料。
* [CppCon 2019 Presentation Materials](https://github.com/CppCon/CppCon2019) - CppCon 2019のプレゼンテーション資料。
* [CppCon 2018 Presentation Materials](https://github.com/CppCon/CppCon2018) - CppCon 2018のプレゼンテーション資料。
* [CppCon 2017 Presentation Materials](https://github.com/CppCon/CppCon2017) - CppCon 2017のプレゼンテーション資料。
* [CppCon 2016 Presentation Materials](https://github.com/CppCon/CppCon2016) - CppCon 2016のプレゼンテーション資料。
* [CppCon 2015 Presentation Materials](https://github.com/CppCon/CppCon2015) - CppCon 2015のプレゼンテーション資料。
* [CppCon 2014 Presentation Materials](https://github.com/CppCon/CppCon2014) - CppCon 2014のプレゼンテーション資料。
* [C++Now 2023 Presentations](https://github.com/boostcon/cppnow_presentations_2023) - C++Now 2023で発表されたプレゼンテーション資料。
* [C++Now 2022 Presentations](https://github.com/boostcon/cppnow_presentations_2022) - C++Now 2022で発表されたプレゼンテーション資料。
* [C++Now 2021 Presentations](https://github.com/boostcon/cppnow_presentations_2021) - C++Now 2021で発表されたプレゼンテーション資料。
* [C++Now 2019 Presentations](https://github.com/boostcon/cppnow_presentations_2019) - C++Now 2019で発表されたプレゼンテーション資料。
* [C++Now 2018 Presentations](https://github.com/boostcon/cppnow_presentations_2018) - C++Now 2018で発表されたプレゼンテーション資料。
* [C++Now 2017 Presentations](https://github.com/boostcon/cppnow_presentations_2017) - C++Now 2017で発表されたプレゼンテーション資料。
* [C++Now 2016 Presentations](https://github.com/boostcon/cppnow_presentations_2016) - C++Now 2016で発表されたプレゼンテーション資料。
* [C++Now 2015 Presentations](https://github.com/boostcon/cppnow_presentations_2015) - C++Now 2015で発表されたプレゼンテーション資料。
* [C++Now 2014 Presentations](https://github.com/boostcon/cppnow_presentations_2014) - C++Now 2014で発表されたプレゼンテーション資料。
* [C++Now 2013 Presentations](https://github.com/boostcon/cppnow_presentations_2013) - C++Now 2013で発表されたプレゼンテーション資料。
* [C++Now 2012 Presentations](https://github.com/boostcon/cppnow_presentations_2012) - C++Now 2012で発表されたプレゼンテーション資料。
* [cpp17_in_TTs](https://github.com/tvaneerd/cpp17_in_TTs) - 主に「Tony Tables」で提示するC++17機能の説明。
* [All C++20 core language features with examples](https://oleksandrkvl.github.io/2021/04/02/cpp-20-overview.html) - すべてのC++20コア言語機能を例とともにまとめたリファレンス。
* [Memory Footprint of GUI Toolkits](https://szibele.com/memory-footprint-of-gui-toolkits/) - さまざまなGUIツールキットのメモリーフットプリントを比較。
* [C++ UI Libraries](https://philippegroarke.com/posts/2018/c++_ui_solutions/) - C++ UIソリューションの包括的な一覧。
* [C++ Compilation](https://github.com/green7ea/cpp-compilation) - C++コンパイルプロセスの簡潔な説明。
* [Books on C++17](https://blogs.msdn.microsoft.com/vcblog/2018/09/25/books-on-c17/) - C++17書籍の一覧。
* [modern-cpp-features](https://github.com/AnthonyCalandra/modern-cpp-features) - モダンC++の言語およびライブラリ機能のチートシート。
* [Choosing Some C++ Over C](https://medium.com/@davidtstrauss/choosing-some-c-over-c-f5acb3dce4f5) - Cの代わりにC++を使う場面に関する記事。
* [C++ 17 Features](https://www.bfilipek.com/2017/01/cpp17features.html) - C++17機能の包括的な一覧。
* [Master C Programming with Open Source Books](https://www.ossblog.org/master-c-programming-with-open-source-books/) - Cプログラミング学習向けオープンソース書籍を厳選した一覧。

## 書籍
*素晴らしいC/C++関連書籍。*

* [List of Free C or C++ Books](https://github.com/fffaraz/awesome-cpp/blob/master/books.md)
* [Free C Books](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#c) - vhf/free-programming-books/C。
* [Free C++ Books](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#cpp) - vhf/free-programming-books/C++。
* [Practical Guide to Bare Metal C++](https://github.com/arobenko/bare_metal_cpp)
* [cppbestpractices](https://github.com/lefticus/cppbestpractices) - C++ベストプラクティスの共同コレクション。

## コーディング標準

* [Cert C++](https://resources.sei.cmu.edu/downloads/secure-coding/assets/sei-cert-cpp-coding-standard-2016-v01.pdf)
* [Misra C++ 2008](https://www.cppdepend.com/misra-cpp)
* [Autosar C++ 2014](https://www.autosar.org/fileadmin/standards/R21-11/AP/AUTOSAR_RS_CPP14Guidelines.pdf)
* [F-35 Fighter Jet's C++ Coding Standards](https://www.stroustrup.com/JSF-AV-rules.pdf)

## コーディングスタイル

* [C++ Core Guidelines](https://github.com/isocpp/CppCoreGuidelines) - C++の作者がレビューした「公式」C++ガイドライン。
* [C++ Dos and Don'ts](https://www.chromium.org/developers/coding-style/cpp-dos-and-donts) - The Chromium Projects > 開発者向け > コーディングスタイル > C++のすべきこと・すべきでないこと。
* [google-styleguide](https://github.com/google/styleguide) - Google発のオープンソースプロジェクト向けスタイルガイド。
* [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html)
* [GNU Coding Standard](https://www.gnu.org/prep/standards/standards.html)
* [Linux kernel coding style](https://www.kernel.org/doc/Documentation/process/coding-style.rst)
* [LLVM Coding Standards](https://llvm.org/docs/CodingStandards.html)

## ポッドキャスト

* [CppCast](https://cppcast.com) - C++開発者がC++開発者のために作った最初のポッドキャスト。
* [CppChat](https://cpp.chat) - コミュニティのゲストを迎え、C++界の動向を（時には）毎週紹介。

## 講演

* [C++ Conferences](https://github.com/eoan-ermine/cpp-conferences) - C++カンファレンスのカタログ。
* [CppCon Talks](https://www.youtube.com/user/CppCon/videos) :zap: - C++カンファレンス。
* [Quick game development with C++11/C++14](https://github.com/SuperV1234/cppcon2014) - Vittorio RomeoによるCppCon 2014講演。
* [Presentation on Hana for C++Now 2015](https://github.com/ldionne/hana-cppnow-2015)
* [Meeting Cpp](https://www.youtube.com/user/MeetingCPP/videos) - Meeting C++のYouTubeチャンネル。

## 動画
*素晴らしいC/C++関連動画。*

* [List of C or C++ YouTube Videos](https://github.com/fffaraz/awesome-cpp/blob/master/videos.md)
* [Awesome C Programming Tutorials in Hi Def [HD]](https://www.youtube.com/playlist?list=PLCB9F975ECF01953C) - 初心者や新しいプログラマー向けCプログラミング言語の詳細チュートリアル集。
* [C++](https://www.youtube.com/playlist?list=PL2F919ADECA5E39A6) - VoidRealmsによる。
* [C++ Qt Programming](https://www.youtube.com/playlist?list=PL2D1942A4688E9D63) - VoidRealmsによる。
* [C++ Programming Tutorials Playlist](https://www.youtube.com/playlist?list=PLAE85DE8440AA6B83) - TheNewBoston公式Buckys C++プログラミングチュートリアル再生リスト。
* [C++ Programming Tutorials from thenewboston](https://www.youtube.com/playlist?list=PLF541C2C1F671AEF6) - thenewbostonによるC++プログラミングチュートリアルをすべて収録。
* [C++ GUI with Qt Playlist](https://www.youtube.com/playlist?list=PLD0D54219E5F2544D) - thenewbostonによるC++ GUI with Qtチュートリアルの公式再生リスト。
* [Caleb Curry's C Programming Tutorials](https://www.youtube.com/playlist?list=PL_c9BZzLwBRKKqOc9TJz1pP0ASrxLMtp2) - Cプログラミングチュートリアルをすべてまとめた再生リスト。
* [C Programming Tutorials](https://www.youtube.com/playlist?list=PL78280D6BE6F05D34) - TheNewBostonのCプログラミングチュートリアルはすべてここにあります。
* [Bo Qian's playlist](https://www.youtube.com/user/BoQianTheProgrammer/playlists) - Boostライブラリ、C++標準ライブラリ、モダンC++、上級C++、上級STLなど。
* [The Cherno's C++ Playlist](https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb) - The Chernoによる幅広いC++チュートリアルシリーズ。
* [Code for Yourself C++ Playlist](https://www.youtube.com/playlist?list=PLwhKb0RIaIS1sJkejUmWj-0lk7v_xgCuT) - 基礎からソフトウェア設計までを網羅する完全なC++コース。

## Webサイト
*C/C++関連の便利なWebサイト。*

* [Standard C++](https://isocpp.org/) :zap: - 標準C++に関するニュース、状況、議論。
* [Build Bench](https://build-bench.com/) - C++ビルドを比較。
* [Quick Bench](https://quick-bench.com/) - 手軽なC++ベンチマーク。
* [CppCon](https://cppcon.org/) - C++カンファレンス。
* [C++ reference](https://cppreference.com) - CおよびC++言語と標準ライブラリの完全なオンラインリファレンス。
* [cppstat](https://cppstat.dev) - C++機能とコンパイラー／標準ライブラリ実装の対応状況を分かりやすく一覧にしたサイト。
* [C++ by Example](https://www.cbyexample.com/) - 例を通してC++を学習。
* [cplusplus.com](https://www.cplusplus.com/) - C++リソースネットワーク。
* [C FAQ](https://c-faq.com/) - Cに関するよくある質問。
* [C++ FAQ](https://www.parashift.com/c++-faq/) - C++に関するよくある質問。
* [C++ FQA Lite](https://yosefk.com/c++fqa/) - C++でよく問われる質問への回答。
* [C++ Quiz](https://cppquiz.org) - C++の知識を試せるシンプルなオンラインクイズ。
* [Guru of the Week](https://www.gotw.ca/gotw/) - Herb Sutterが作成・執筆する定期的なC++プログラミング問題シリーズ。
* [Meeting C++](https://meetingcpp.com/)
* [PVS-Studio’s challenge](https://quiz.pvs-studio.com) - オープンソースプロジェクトのコード断片からエラーを見つけるPVS-StudioのC++クイズ。
* [Udemy C++ Courses and Tutorials](https://www.udemy.com/topic/c-plus-plus/)
* [C++ Hints](https://cpphints.com/) - PVS-Studioチームが、よくあるC++の間違いと解決方法について毎営業日にヒントを提供。
* [C++ tutorial](https://hackr.io/tutorials/learn-c-plus-plus) - 複数のC++学習コースを掲載する、ユーザー評価型のオンラインチュートリアル集サイト。
* [C++ Tutorial for Beginners](https://www.scaler.com/topics/cpp) - 訓練を受けた専門家が厳選したC++包括チュートリアル。
* [C++ for yourself](https://github.com/cpp-for-yourself) - 基礎からソフトウェア設計まで、モダンC++のすべてを網羅する包括的チュートリアル。
* [CompileBytes C++ Compiler](https://www.compilebytes.com/tools/cpp) – Online C++ compiler and interactive code execution environment.
* [C++ Resources](https://andreasfertig.com/cpp-resources/) - 書籍、記事、ツールなどC++リソースのコレクション。
* [CppPatterns](https://github.com/sftrabbit/CppPatterns-Patterns) - モダンC++のパターンとイディオムを集めたリポジトリ。 [website](https://cpppatterns.com)
* [Function Pointers](https://github.com/jerryryle/fuckingfunctionpointers.com) - C/C++の関数ポインターを理解するためのガイド。


## Webログ
*C/C++関連の便利なWebログ。*

* [Coding For Speed](https://codingforspeed.com/) - Coding For Speed DOT COM。実行時間を短縮。
* [Eric Niebler](https://ericniebler.com/)
* [Sticky Bits](https://blog.feabhas.com/)
* [Paul Fultz II's Blog](https://pfultz2.com/blog/)
* [ridiculousfish](https://ridiculousfish.com/blog/posts/will-it-optimize.html) - 最適化されるだろうか？
* [Embedded in Academia](https://blog.regehr.org/)
* [Simplify C++](https://arne-mertz.de/)
* [Fluent C++](https://www.fluentcpp.com/)
* [Bartek's Coding Blog](https://www.bfilipek.com/?m=1)
* [Kenny Kerr](https://kennykerr.ca/)
* [Sutter’s Mill](https://herbsutter.com/gotw/)
* [Vorbrodt's C++ Blog](https://vorbrodt.blog/)
* [foonathan::blog()](https://foonathan.net/index.html)
* [C++ Team Blog](https://devblogs.microsoft.com/cppblog/) - Microsoft Visual C++チームの開発者ブログ。

## その他の素晴らしいプロジェクト
*便利なコード、スニペットなどのコレクション。*

* [algorithms](https://github.com/xtaci/algorithms) - C++のアルゴリズムとデータ構造。
* [c-algorithms](https://github.com/fragglet/c-algorithms) - Cアルゴリズムライブラリ。
* [30 Seconds of C++](https://github.com/Bhupesh-V/30-seconds-of-cpp)
* [awesome-ld-preload](https://github.com/gaul/awesome-ld-preload) - LD_PRELOAD関連リソースを厳選した一覧。
* [awesome-static-analysis](https://github.com/mre/awesome-static-analysis) - あらゆるプログラミング言語向け静的解析ツールを厳選した一覧。
* [cpp_functional_programming](https://github.com/graninas/cpp_functional_programming) - C++関数型プログラミング向け資料とリンクの一覧。
* [algorithms_and_data_structures](https://github.com/mandliya/algorithms_and_data_structures) - C++でのアルゴリズムとデータ構造の実装。

# その他の素晴らしいリスト
*その他の素晴らしいリスト*

* [lists](https://github.com/jnv/lists) - GitHub上で厳選された（素晴らしい）リストの一覧。
* [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - 素晴らしく素晴らしいものを厳選した一覧。
* [awesome](https://github.com/sindresorhus/awesome) :zap: - 素晴らしいリストを厳選した一覧。
* [C++ links](https://github.com/MattPD/cpplinks) - カテゴリ別C++リソース一覧。
* [Awesome C++](https://cpp.libhunt.com/) - LibHuntのミラー。
* [Awesome C](https://github.com/oz123/awesome-c) 1
* [Awesome C](https://github.com/aleksandar-todorovic/awesome-c) 2
* [Awesome Modern C++](https://github.com/rigtorp/awesome-modern-cpp) - モダンC++リソースのコレクション。
* [AwesomePerfCpp](https://github.com/fenbf/AwesomePerfCpp) - C/C++性能最適化リソースを厳選した一覧。
* [free-programming-books](https://github.com/vhf/free-programming-books) - 無料で入手できるプログラミング書籍一覧。
* [Inqlude](https://inqlude.org/) - Qtライブラリアーカイブ。
* [papers-we-love](https://github.com/papers-we-love/papers-we-love) - コンピューターサイエンスコミュニティの論文を読んで議論するための一覧。
* [awesome-algorithms](https://github.com/tayllan/awesome-algorithms) - アルゴリズムを学習・練習できる素晴らしい場所を厳選した一覧。
* [awesome-hpp](https://github.com/p-ranav/awesome-hpp) - 素晴らしいC++ヘッダーオンリーライブラリを厳選した一覧。
* [awesome-talks](https://github.com/JanVanRyswyck/awesome-talks) - 多数のスクリーンキャスト、ユーザーグループ会合やカンファレンスの録画。
* [Projects](https://github.com/karan/Projects) - どのプログラミング言語でも解決できる実践的なプロジェクトの一覧。
* [Awesome interview questions](https://github.com/MaximAbramchuck/awesome-interviews) - CおよびC++を含む、人気技術に関する面接質問リスト集。
* [nothings/single_file_libs](https://github.com/nothings/single_file_libs) :zap: - シングルファイルC/C++ライブラリ一覧。

# 求人

* この一覧は現在空です。マージリクエストを作成して追加できます。

# スポンサー

* このリポジトリへのスポンサーに関心がある場合は、ご連絡ください。会社名とロゴを目立つ形で掲載します。

# 貢献
詳細は[貢献ガイドライン](https://github.com/fffaraz/awesome-cpp/blob/master/CONTRIBUTING.md)をご覧ください。
[コントリビューター](https://github.com/fffaraz/awesome-cpp/graphs/contributors)の皆さんに感謝します。最高です！

#### *この一覧にあるプロジェクトやリンクが保守されていない、または適切でない場合は、プルリクエストを送ってこの文書の改善にご協力ください。ありがとうございます！*
