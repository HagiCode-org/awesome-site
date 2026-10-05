# Awesome C++ [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/fffaraz/awesome-cpp/)
Uma lista selecionada de incríveis frameworks, bibliotecas, recursos e outras coisas interessantes de C++ (ou C). Inspirada em coisas como awesome-...

- [Awesome C++  ](#awesome-c--)
	- [Bibliotecas Padrão](#standard-libraries)
	- [Frameworks](#frameworks)
	- [Inteligência Artificial](#artificial-intelligence)
	- [Loop de Eventos Assíncronos](#asynchronous-event-loop)
	- [Áudio](#audio)
	- [Biologia](#biology)
	- [BitTorrent](#bittorrent)
	- [Química](#chemistry)
	- [CLI](#cli)
	- [Compressão](#compression)
	- [Concorrência](#concurrency)
	- [Configuração](#configuration)
	- [Contêineres](#containers)
	- [Criptografia](#cryptography)
	- [CSV](#csv)
	- [Banco de Dados](#database)
	- [Visualização de Dados](#data-visualization)
	- [Depuração](#debug)
	- [Documentação](#documentation)
	- [DSP](#dsp)
	- [Fontes](#font)
	- [Motor de Jogos](#game-engine)
	- [Grafos](#graph)
	- [GUI](#gui)
	- [Gráficos](#graphics)
	- [Processamento de Imagens](#image-processing)
	- [Internacionalização](#internationalization)
	- [Comunicação entre Processos](#inter-process-communication)
	- [JSON](#json)
	- [Registro de Logs](#logging)
	- [Aprendizado de Máquina](#machine-learning)
	- [Matemática](#math)
	- [Alocação de Memória](#memory-allocation)
	- [Multimídia](#multimedia)
	- [Redes](#networking)
	- [Office Open XML](#office-open-xml)
	- [PDF](#pdf)
	- [Física](#physics)
	- [Reflexão](#reflection)
	- [Expressões Regulares](#regular-expression)
	- [Robótica](#robotics)
	- [Computação Científica](#scientific-computing)
	- [Scripts](#scripting)
	- [Serialização](#serialization)
	- [Porta Serial](#serial-port)
	- [Ordenação](#sorting)
	- [Vídeo](#video)
	- [Máquinas Virtuais](#virtual-machines)
	- [Framework para Aplicações Web](#web-application-framework)
	- [XML](#xml)
	- [YAML](#yaml)
	- [Diversos](#miscellaneous)
- [Software](#software)
	- [Compilador](#compiler)
	- [Compilador Online](#online-compiler)
	- [Depurador](#debugger)
	- [Ambiente de Desenvolvimento Integrado](#integrated-development-environment)
	- [Sistemas de Build](#build-systems)
	- [Análise Estática de Código](#static-code-analysis)
	- [Ferramentas de Estilo de Código](#coding-style-tools)
- [Recursos](#resources)
	- [Design de API](#api-design)
	- [Artigos](#articles)
	- [Livros](#books)
	- [Padrões de Codificação](#coding-standards)
	- [Estilo de Código](#coding-style)
	- [Podcasts](#podcasts)
	- [Palestras](#talks)
	- [Vídeos](#videos)
	- [Sites](#websites)
	- [Blogs](#weblogs)
	- [Outros Projetos Incríveis](#other-awesome-projects)
- [Outras Listas Incríveis](#other-awesome-lists)
- [Vagas](#jobs)
- [Patrocinadores](#sponsors)
- [Como Contribuir](#contributing)
			- [*Se você encontrar um projeto ou link aqui que não seja mais mantido ou adequado, envie uma pull request para melhorar este documento. Obrigado!*](#if-you-see-a-project-or-link-here-that-is-no-longer-maintained-or-is-not-a-good-fit-please-submit-a-pull-request-to-improve-this-document-thank-you)

<a id="standard-libraries"></a>
## Bibliotecas Padrão
*Biblioteca padrão de C++, incluindo os contêineres, algoritmos e funções de STL, entre outros.*

* [C++ Standard Library](https://en.wikipedia.org/wiki/C%2B%2B_Standard_Library) - Uma coleção de classes e funções escritas na linguagem base e que fazem parte da própria norma ISO de C++.
* [Standard Template Library](https://en.wikipedia.org/wiki/Standard_Template_Library) - A Standard Template Library (STL).
* [C POSIX library](https://en.wikipedia.org/wiki/C_POSIX_library) - Uma especificação de uma biblioteca padrão de C para sistemas POSIX.
* [ISO C++ Standards Committee](https://github.com/cplusplus) - ISO/IEC JTC1/SC22/WG21: o comitê de padrões de C++. [website](https://www.open-std.org/JTC1/SC22/WG21/)
* [The GNU C Library](https://www.gnu.org/software/libc/manual) - O objetivo deste manual é explicar como usar as funções da biblioteca C de GNU.

## Frameworks
*Frameworks e bibliotecas genéricos de C++.*

* [abseil-cpp](https://github.com/abseil/abseil-cpp) - Bibliotecas comuns de C++ de Abseil. [Apache2]
* [Apache C++ Standard Library](https://stdcxx.apache.org/) - STDCXX: uma coleção de algoritmos, contêineres, iteradores e outros componentes fundamentais. [retired] [Apache2]
* [APR](https://apr.apache.org/) - Apache Portátil Runtime. outra biblioteca de funções utilitárias multiplataforma. [Apache2]
* [ASL](https://stlab.adobe.com/) - Adobe Source Libraries oferece bibliotecas de código-fonte C++ portáteis e revisadas por pares. [MIT]
* [AUI](https://github.com/aui-framework/aui) - Kit de ferramentas declarativo para interfaces de usuário em C++20. [MPL2]
* [Boost](https://github.com/boostorg) :zap: - Uma grande coleção de bibliotecas genéricas de C++. [Boost] [website](https://www.boost.org)
* [BDE](https://github.com/bloomberg/bde) - ambiente de desenvolvimento BDE de Bloomberg Labs. [Apache2]
* [C++ Workflow](https://github.com/sogou/workflow) :zap: - Motor de computação paralela e redes asíncronas em C++. [Apache2]
* [CGraph](https://github.com/ChunelFeng/CGraph) - Framework DAG multiplataforma baseado em C++, sem dependências de terceiros. [MIT]
* [Cinder](https://libcinder.org/) - Biblioteca gratuita e de código aberto, desenvolvida pela comunidade, para programação criativa de qualidade profissional. [BSD]
* [Coost](https://github.com/idealvin/coost) - Biblioteca C++ leve e sem dependências, com corrotinas ao estilo Go, registro, configuração e outras utilidades. [MIT]
* [Cxxomfort](https://ryan.gulix.cl/fossil.cgi/cxxomfort/) - Pequena biblioteca somente de cabeçalho que retroporta várias funções de padrões recentes de C++ a C++03 e versões posteriores. [MIT]
* [Dlib](https://github.com/davisking/dlib) :zap: - Kit de ferramentas para criar aplicações reais de aprendizado automático e análise de dados em C++. [Boost] [website](https://dlib.net/)
* [EASTL](https://github.com/electronicarts/EASTL) - Standard Template Library de Electronic Arts. [BSD]
* [ETL](https://github.com/ETLCPP/etl) - Biblioteca de templates integrada. [MIT]
* [ffead-cpp](https://github.com/sumeetchhetri/ffead-cpp) - Framework para o desenvolvimento de aplicações empresariais. [Apache2]
* [Folly](https://github.com/facebook/folly) - Biblioteca C++ de código aberto desenvolvida e utilizada em Facebook. [Apache2]
* [FunctionalPlus](https://github.com/Dobiasd/FunctionalPlus) - Biblioteca de programação funcional para C++. Permite escrever código C++ conciso e legível. [MIT]
* [GLib](https://wiki.gnome.org/Projects/GLib) - GLib fornece os componentes básicos para aplicações e bibliotecas escritas em C. [LGPL]
* [itlib](https://github.com/iboB/itlib) - Coleção de bibliotecas C++ de uma um único cabeçalho similares a as da biblioteca padrão. [MIT]
* [JUCE](https://github.com/julianstorer/JUCE) - Biblioteca de classes C++ abrangente para desenvolver software multiplataforma. [Core-Module: ISC, Rest: GPL2/GPL3/Proprietary] [website](https://www.juce.com/)
* [Kigs framework](https://github.com/Kigs-framework/kigs) - Framework RAD modular, multipropósito e multiplataforma para C++, gratuito e de código aberto. [MIT] [website](https://kigs-framework.org/)
* [libPhenom](https://github.com/facebook/libphenom) - libPhenom é um framework baseado em eventos para criar sistemas C de alto desempenho e grande escalabilidade. [Apache2]
* [LibSourcey](https://github.com/sourcey/libsourcey) - E/S baseada em eventos de C++11 para aplicações de transmissão de vídeo em tempo real e redes de alto desempenho. [LGPL]
* [LibU](https://github.com/koanlogic/libu) - Biblioteca de utilitários multiplataforma escrita em C. [BSD]
* [libxutils](https://github.com/kala13x/libxutils) - Biblioteca C multiplataforma simples mas poderosa que fornece estruturas de dados, algoritmos e muito mais. [MIT]
* [Loki](https://loki-lib.sourceforge.net/) - Biblioteca C++ de designs com implementações flexíveis de padrões de design e expressões comuns. [MIT]
* [micron.cpp](https://github.com/rfgplk/micron.cpp) - Implementação e redesign puros em C++ de libc e da biblioteca padrão. [Boost/MIT]
* [MiLi](https://github.com/MariadeAnton/MiLi) - Biblioteca C++ mínima somente de cabeçalho. [Boost]
* [OpenFrameworks](https://github.com/openframeworks/openFrameworks) - Kit de ferramentas multiplataforma e de código aberto para programação criativa em C++. [MIT] [website](https://www.openframeworks.cc/)
* [PhotonLibOS](https://github.com/alibaba/PhotonLibOS) - Framework C++ abrangente com threads eficientes em espaço de usuário (corrotinas com roubo de trabalho), E/S, redes, RPC, HTTP, etc.; amplamente utilizado pelo Alibaba. É compatível com C++14/17/20/23, Linux, macOS, x86-64, ARM64, gcc e clang. [Apache2] [website](https://photonlibos.github.io/)
* [Qt](https://github.com/qt) :zap: - Framework multiplataforma para aplicações e interfaces de usuário. [GPL/LGPL/Proprietary] [website](https://www.qt.io)
* [Reason](https://code.google.com/p/reason/) - Framework multiplataforma projetado para oferecer aos desenvolvedores que precisam o desempenho e a potência de C++ a facilidade de uso de Java, .Net ou Python. [GPL2]
* [ROOT](https://root.cern.ch/) - Conjunto de frameworks OO com todas as funções necessárias para processar e analisar grandes quantidades de dados de forma muito eficiente. é usado no CERN. [LGPL]
* [rpp](https://github.com/TheNumbat/rpp) - substituição mínimo de STL para C++20 inspirado em Rust. [MIT]
* [SaneCppLibraries](https://github.com/Pagghiu/SaneCppLibraries) - Conjunto de bibliotecas de abstração de plataforma C++ para macOS, Windows e Linux. [MIT] [website](https://pagghiu.github.io/SaneCppLibraries/)
* [Seastar](https://github.com/scylladb/seastar) - Framework C++ avançado e de código aberto para aplicações de servidor de alto desempenho em hardware moderno. [Apache-2.0 License] [seastar.io](https://seastar.io/)
* [sfl library](https://github.com/slavenf/sfl-library) - Biblioteca C++11 somente de cabeçalho que oferece vários contêineres novos ou menos conhecidos; alguns podem ser usados em expressões constantes de C++20. [zlib]
* [Siv3D](https://github.com/Siv3D/OpenSiv3D) - Siv3D (OpenSiv3D) é um framework C++20 para programação criativa (jogos 2D/3D, arte multimídia, visualizadores e simuladores). [MIT] [website](https://siv3d.github.io/)
* [STLport](https://www.stlport.org/) - Uma implementação exemplar de STL. [Free]
* [STXXL](https://stxxl.sourceforge.net/) - Standard Template Library para conjuntos de dados muito grandes. [Boost]
* [tbox](https://github.com/tboox/tbox) - Biblioteca C multiplataforma semelhante a glib. [Apache2] [website](https://tboox.org/)
* [Ultimate++](https://www.ultimatepp.org/) - Framework C++ multiplataforma de desenvolvimento rápido de aplicações. [BSD]
* [Windows Template Library](https://sourceforge.net/projects/wtl/) - Biblioteca C++ para desenvolver aplicações e componentes de interface de usuário do Windows. [Public]
* [WUI](https://github.com/intent-garden/wui) - WUI (Window User Interface Library) é uma biblioteca multiplataforma para criar interfaces gráficas de usuário em C++17 ou posterior. [Boost][website](https://libwui.org)
* [xtd](https://github.com/gammasoft71/xtd) - Framework moderno C++20 para criar aplicações de console (CLI), formulários (GUI) e testes unitários (xUnit) em Windows, macOS, Linux, iOS, Android, FreeBSD e Haiku. [MIT]
* [Yomm2](https://github.com/jll63/yomm2) - Multimétodos rápidos, ortogonais e abertos. substitui a [Yomm11](https://github.com/jll63/yomm11). [Boost]
* [YUP!](https://github.com/kunitoki/yup) - Framework moderno optimizado para áudio em tempo real e software criativo nativo de GPU. [ISC]

<a id="artificial-intelligence"></a>
## Inteligência Artificial

* [ANNetGPGPU](https://github.com/ANNetGPGPU/ANNetGPGPU) - Biblioteca de redes neurais artificiales baseada em GPU (CUDA). [LGPL]
* [btsk](https://github.com/aigamedev/btsk) - Kit inicial de árvores de comportamento para jogos. [zlib]
* [cpp-mcp](https://github.com/hkr04/cpp-mcp) - SDK leve de MCP (Model Context Protocol) para C++. [MIT]
* [Evolving Objects](https://eodev.sourceforge.net/) - Biblioteca de computação evolutiva baseada em templates e ANSI-C++ que permite escrever algoritmos próprios de otimização estocástica com grande rapidez. [LGPL]
* [fastmcpp](https://github.com/0xeb/fastmcpp) - adaptação para C++ da biblioteca Python fastmcp. [Apache2]
* [frugally-deep](https://github.com/Dobiasd/frugally-deep) - Biblioteca somente de cabeçalho para usar modelos Keras em C++. [MIT]
* [Genann](https://github.com/codeplea/genann) - Biblioteca simples de redes neurais em C. [zlib]
* [MXNet](https://github.com/apache/incubator-mxnet) - Aprendizado profundo distribuído e móvel, leve, portátil e flexível, com planejamento dinâmico de dependências do fluxo de dados com detecção de mutações; para Python, R, Julia, Scala, Go, JavaScript e mais. [website](https://mxnet.apache.org)
* [PyTorch](https://github.com/pytorch/pytorch) - Tensores e redes neurais dinámicas em Python com uma poderosa aceleração por GPU. [website](https://pytorch.org)
* [flashlight](https://github.com/flashlight/flashlight) - Biblioteca rápida e flexível de aprendizado automático, escrita integralmente em C++. [BSD]
* [Recast/Detour](https://github.com/recastnavigation/recastnavigation) - Gerador de malhas de navegação (3D) e mecanismo de busca de rotas, principalmente para jogos. [zlib]
* [TensorFlow](https://github.com/tensorflow/tensorflow) - Biblioteca de software de código aberto para cálculo numérico por meio de grafos de fluxo de dados. [Apache]
* [Txeo](https://github.com/rdabra/txeo) - Wrapper moderno de C++ para TensorFlow. [Apache]
* [oneDNN](https://github.com/oneapi-src/oneDNN) - Biblioteca de desempenho multiplataforma e de código aberto para aplicações de aprendizado profundo. [Apache] [website](https://01.org/onednn)
* [CNTK](https://github.com/Microsoft/CNTK) - Microsoft Cognitive Toolkit (CNTK), um kit de ferramentas de aprendizado profundo de código aberto. [Boost]
* [tiny-dnn](https://github.com/tiny-dnn/tiny-dnn) - Framework de aprendizado profundo em C++11, sem dependências e somente de cabeçalho. [BSD]
* [Veles](https://github.com/Samsung/veles) - Plataforma distribuída para desenvolver rapidamente aplicações de aprendizado profundo. [Apache]
* [Kaldi](https://github.com/kaldi-asr/kaldi) - Kit de ferramentas para reconhecimento de voz. [Apache]

<a id="asynchronous-event-loop"></a>
## Loop de Eventos Assíncronos

* [Asio](https://github.com/chriskohlhoff/asio/) - Biblioteca C++ multiplataforma para programação de redes e E/S de baixo nível, que oferece aos desenvolvedores um modelo assíncrono coerente com uma abordagem moderno de C++. [Boost] [website](https://think-async.com/)
* [Boost.Asio](https://github.com/boostorg/asio) - Biblioteca C++ multiplataforma para programação de redes e E/S de baixo nível. [Boost] [website](https://boost.org/libs/asio)
* [C++ Actor Framework](https://github.com/actor-framework/actor-framework) - Implementação de código aberto do modelo Actor em C++. [BSD-3-Clause] [website](https://actor-framework.org/)
* [Ichor](https://github.com/volt-software/ichor) - fila de eventos centrada na segurança das threads que fornece inyección de dependências. [MIT]
* [libev](https://libev.schmorp.de/) - loop de eventos completo e de alto desempenho, baseado em parte em libevent, mas sem suas limitações e erros. [BSD and GPL]
* [libevent](https://libevent.org/) - Biblioteca de notificação de eventos. [BSD]
* [libhv](https://github.com/ithewei/libhv) - Biblioteca multiplataforma de loop de eventos. [BSD]
* [libuv](https://github.com/libuv/libuv) - E/S asíncrona multiplataforma. [BSD]
* [promise-cpp](https://github.com/xhawk18/promise-cpp) - Biblioteca somente de cabeçalho que implementa o padrão Promise/A+. [Anti-996]
* [uvw](https://github.com/skypjack/uvw) - Wrapper de C++ para libuv. [MIT]
* [uv-cpp](https://github.com/wlgq2/uv-cpp) - Biblioteca de redes de alto desempenho baseada em C++11, com uma interface simples. [MIT]

<a id="audio"></a>
## Áudio
*Bibliotecas de áudio, som, música e voz digitalizada*

* [Amplitude Audio SDK](https://github.com/SparkyStudios/AmplitudeAudioSDK) - Motor de áudio multiplataforma projetado pensando nas necessidades dos jogos. [Apache-2.0] [website](https://amplitudeaudiosdk.com)
* [Aubio](https://github.com/aubio/aubio) - Biblioteca para a análise de áudio e música.[GPL-3.0] [website](https://aubio.org/)
* [AudioFile](https://github.com/adamstark/AudioFile) - Biblioteca C++ simples para ler e escrever arquivos de áudio. [MIT]
* [audioFlux](https://github.com/libAudioFlux/audioFlux) - Biblioteca C para a análise de áudio e música e a extração de características. [MIT]
* [dr_libs](https://github.com/mackron/dr_libs) - Bibliotecas de decodificação de áudio de arquivo único para C e C++. [Unlicense]
* [FMOD](https://www.fmod.org/) - Motor de áudio multiplataforma fácil de usar e ferramenta de criação de conteúdo de áudio para jogos. [Free for non-commercial/Commercial]
* [KFR](https://www.kfrlib.com/) - Framework DSP moderno e rápido para C++, FFT, filtros FIR/IIR e conversão de frequência de amostragem. [GPL/Proprietary]
* [LAME](https://lame.sourceforge.io/using.php) - LAME é um codificador MPEG Áudio Layer III (MP3) de alto qualidade. [LGPL]
* [libsndfile](https://github.com/erikd/libsndfile/) - Biblioteca C com wrapper de C++ para ler e escrever arquivos de som amostrado por meio de uma interface padrão. [LGPL-2.1] [website](https://www.mega-nerd.com/libsndfile/)
* [libsoundio](https://github.com/andrewrk/libsoundio) - Biblioteca C multiplataforma para entrada e saída de áudio em tempo real. [MIT] [website](https://libsound.io/)
* [Maximilian](https://github.com/micknoise/Maximilian) - Biblioteca DSP de áudio e música para C++. [MIT]
* [OpenAL](https://www.openal.org/) - Open Áudio Library: API de áudio multiplataforma. [BSD/LGPL/Proprietary]
* [miniaudio](https://github.com/mackron/miniaudio) - Biblioteca de arquivo único para reproducir e capturar áudio. [Unlicense] [website](https://miniaud.io/)
* [ni-media](https://github.com/NativeInstruments/ni-media) - Biblioteca C++ para ler e escrever arquivos de áudio. [MIT]
* [Opus](https://opus-codec.org/) - Códec de áudio totalmente aberto, livre de royalties e muito versátil. [BSD]
* [PortAudio](https://www.portaudio.com/) - PortAudio é uma biblioteca de E/S de áudio gratuita, multiplataforma e de código aberto. [MIT]
* [rnnoise](https://github.com/xiph/rnnoise) - Red neuronal recorrente para reduzir o ruído do áudio. [BSD-3-Clause]
* [SELA](https://github.com/sahaRatul/sela) - Áudio sem perdas simples (SimplE Lossless Áudio). [MIT]
* [SoLoud](https://github.com/jarikomppa/soloud) - Motor de áudio simples e portátil para jogos. [zlib]
* [Speex](https://www.speex.org/) - Códec livre para voz. Opus lo ha substituído. [BSD]
* [Tonic](https://github.com/TonicAudio/Tonic) - Síntesis de áudio simples e eficiente em C++. [Unlicense]
* [Vorbis](https://xiph.org/vorbis/) - Ogg Vorbis é um formato de áudio comprimido de uso geral, totalmente aberto, não propietario e livre de patentes e royalties. [BSD]
* [minimp3](https://github.com/lieff/minimp3) - Decodificador MP3 de dominio público e somente cabeçalho, com implementação de sala limpia. [CC0]
* [Verovio](https://github.com/rism-ch/verovio) - Verovio é uma biblioteca rápida e leve para grabar notação musical. [LGPL] [website](https://www.verovio.org)
* [Wav2Letter++](https://github.com/facebookresearch/wav2letter/) - Kit de ferramentas de processamento de voz rápido e de código aberto, de dominio público e escrito integralmente em C++; utiliza a biblioteca de tensores ArrayFire e a biblioteca de aprendizado automático flashlight para lograr a máxima eficiencia. [BSD]
* [PocketSphinx](https://github.com/cmusphinx/pocketsphinx) - Motor leve de reconhecimento de voz. [BSD-2-Clause] [website](https://cmusphinx.github.io/)

<a id="biology"></a>
## Biologia
*Bioinformática, genómica e biotecnología*

* [BioC++](https://biocpp.sourceforge.net/) - Bibliotecas computacionales C++ para bioinformática. [BSD]
* [Chaste](https://www.cs.ox.ac.uk/chaste/) - Biblioteca C++ de código aberto para simular computacionalmente modelos matemáticos desarrollados para fisiología e biología. [BSD]
* [libsequence](https://molpopgen.github.io/libsequence/) - Biblioteca C++ para representar e analisar dados de genética de poblaciones. [GPL]
* [SeqAn](https://www.seqan.de/) - Algoritmos e estruturas de dados para analisar secuencias, centrados em dados biológicos. [BSD/3-clause]
* [Vcflib](https://github.com/ekg/vcflib) - Biblioteca C++ para analisar e manipular arquivos VCF. [MIT]
* [Wham](https://github.com/zeeev/wham) - Variantes estructurales (SV) em genomas por meio da aplicação directa de testes de asociación a arquivos BAM. [MIT]
* [htslib](https://github.com/samtools/htslib) - Biblioteca C para ler e escrever dados de secuenciación de alto desempenho. [MIT/BSD] [website](https://www.htslib.org/)

## BitTorrent

* [jech/dht](https://github.com/jech/dht) - Biblioteca DHT de BitTorrent em C. [MIT]
* [libtorrent](https://github.com/arvidn/libtorrent) (a.k.a. libtorrent-rasterbar) - Implementação eficiente e completa de BitTorrent em C++. [BSD]
* [LibTorrent](https://github.com/rakshasa/libtorrent) (a.k.a. libtorrent-rakshasa) - Biblioteca de BitTorrent. [GPL]
* [libutp](https://github.com/bittorrent/libutp) - Biblioteca do protocolo de transporte uTorrent. [MIT]

<a id="chemistry"></a>
## Química
*Química, química cuántica, química/física do estado sólido, geoquímica e bioquímica*

* [d-SEAMS](https://github.com/d-SEAMS/seams-core) - Motor de análise de trajetórias de dinâmica molecular em C++ e Lua com Nix. Seu sigla significa Deferred Structural Elucidation Analysis for Molecular Simulations. [GPL] [website](https://dseams.info)
* [gromacs](https://github.com/gromacs/gromacs) - Implementação paralela de dinâmica molecular baseada em paso de mensajes. [GPL] [website](https://www.gromacs.org)
* [Reaktoro](https://github.com/reaktoro/reaktoro) - Framework computacional em C++ e Python para modelar sistemas químicamente reactivos. [LGPL] [website](https://reaktoro.org)
* [LAMMPS](https://github.com/lammps/lammps) - Código de dinâmica molecular clásica focado em o modelado de materiais. Seu sigla significa Large-scale Atomic/Molecular Massively Parallel Simulator. [GPL] [website](https://lammps.sandia.gov/)
* [MADNESS](https://github.com/m-a-d-n-e-s-s/madness) - ambiente numérico adaptativo multirresolución para simulação científica. [GPL] [website](https://github.com/m-a-d-n-e-s-s/madness)
* [MPQC](https://github.com/ValeevGroup/mpqc) - O programa de química cuántica masivamente paralela MPQC calcula propiedades de átomos e moléculas de primeros principios por meio da ecuación de Schrödinger independente do tempo. [GPL] [website](https://mpqc.org/)
* [Psi](https://github.com/psi4/psi4) - Paquete de química computacional ab initio. [GPL] [website](https://psicode.org/)

## CLI
*Interface de usuário de consola/terminal, interface de linha de comandos*

 * [Argh!](https://github.com/adishavit/argh) - Manejador de argumentos minimalista, sem complicaciones e somente de cabeçalho. [BSD]
 * [argparse](https://github.com/p-ranav/argparse) - Analisador de argumentos para C++ moderno. [MIT]
 * [args](https://github.com/taywee/args) - Biblioteca simples somente de cabeçalho para analisar argumentos em C++. [MIT]
 * [Argy](https://github.com/mshenoda/argy) - Biblioteca para analisar argumentos de linha de comandos em C++ moderno: simples, intuitiva, somente de cabeçalho e sem dependências. [MIT]
 * [barkeep](https://github.com/oir/barkeep) - Pequena cabeçalho C++ para mostrar animaciones asíncronas, contadores e barras de progreso. [Apache-2.0] [website](https://oir.github.io/barkeep/)
 * [Boost.Program_options](https://github.com/boostorg/program_options) - Biblioteca para obtener opciones de programas por meio de métodos habituales, como a linha de comandos e os arquivos de configuração. [Boost] [website](https://boost.org/libs/program_options)
 * [cli](https://github.com/daniele77/cli) - Biblioteca C++14 multiplataforma e somente de cabeçalho para interfaces de linha de comandos interactivas (estilo Cisco). [Boost]
 * [CLI11](https://github.com/CLIUtils/CLI11) - Biblioteca C++11 de uma ou várias cabeçalhos para análise CLI simples e avanzado. [BSD]
 * [clipp](https://github.com/muellan/clipp) - Manejo simples, poderosa e expresivo de argumentos de linha de comandos para C++11/14/17, conteúdo em um somente arquivo de cabeçalho. [MIT]
 * [cpp-terminal](https://github.com/jupyter-xeus/cpp-terminal) - Pequena biblioteca C++ somente de cabeçalho para escrever aplicações de terminal multiplataforma. [MIT]
 * [Crossline](https://github.com/jcwangxp/Crossline) - substituição multiplataforma, pequeno, autónomo, sem configuração e com licença MIT de readline e libedit. [MIT]
 * [Ctrl+C](https://github.com/evgenykislov/ctrl-c) - Biblioteca C++11 multiplataforma para gestionar o evento Ctrl+C em funções personalizadas. [MIT]
 * [cxxopts](https://github.com/jarro2783/cxxopts) - Analisador leve de opciones de linha de comandos para C++. [MIT]
 * [docopt.cpp](https://github.com/docopt/docopt.cpp) - Biblioteca para gerar um analisador de opciones a partir de uma string de documentação. [MIT/Boost]
 * [FINAL CUT](https://github.com/gansm/finalcut) - Biblioteca para criar aplicações de terminal com widgets baseados em texto. [LGPL]
 * [FTXUI](https://github.com/ArthurSonzogni/FTXUI) - Interface funcional de usuário de terminal para C++. [MIT]
 * [gflags](https://gflags.github.io/gflags/) - Módulo de indicadores de linha de comandos para C++. [BSD]
 * [imtui](https://github.com/ggerganov/imtui) - Interface de usuário textual de modo inmediato. [MIT]
 * [indicators](https://github.com/p-ranav/indicators/) - Indicadores de atividade para C++ moderno. [MIT]
 * [linenoise](https://github.com/antirez/linenoise) - Alternativa pequena e autónoma a readline e libedit. [BSD-2-Clause]
 * [linenoise-ng](https://github.com/arangodb/linenoise-ng) - substituição pequeno e portátil de GNU readline para Linux, Windows e macOS, compatível com caracteres UTF-8. [BSD]
 * [Lyra](https://github.com/bfgroup/Lyra) - Analisador de linha de comandos para C++11 e posteriores, simples de usar e componible. [Boost]
 * [Ncurses](https://invisible-island.net/ncurses/) - Interface de usuário de terminal. [MIT]
 * [FINAL CUT](https://github.com/gansm/finalcut) - Interface de usuário de terminal e substituição moderno de Ncurses. [LGPLv3+]
 * [oof](https://github.com/s9w/oof) - Control práctico e de alto desempenho do color RGB e a posición na saída de consola. [MIT]
 * [PDCurses](https://github.com/wmcbrine/PDCurses) - Biblioteca curses de dominio público, disponível com código código-fonte e biblioteca precompilada. [PublicDomain]
 * [popl](https://github.com/badaix/popl) - Analisador de argumentos de linha de comandos e arquivos ini para C++11 e posteriores, baseado em templates e em uma um único cabeçalho. [MIT]
 * [replxx](https://github.com/AmokHuginnsson/replxx) - substituição de readline e libedit compatível com UTF-8, resaltado de sintaxis e sugerencias, que funciona em Unix e Windows. [BSD]
 * [tabulate](https://github.com/p-ranav/tabulate) - Gerador de tabelas para C++ moderno. [MIT]
 * [TCLAP](https://tclap.sourceforge.net) - Biblioteca madura, estable e com muchas funções para definir e acceder a argumentos de linha de comandos em ANSI C++. [MIT]
 * [termbox](https://github.com/nsf/termbox) - Biblioteca C para criar interfaces de usuário baseadas em texto. [MIT]
 * [TermOx](https://github.com/a-n-t-h-o-n-y/TermOx) - Biblioteca de interface de usuário de terminal (TUI) para C++17. [MIT]
 * [tuibox](https://github.com/Cubified/tuibox) - Biblioteca TUI de uma um único cabeçalho, capaz de criar aplicações interactivas de linha de comandos controladas com o ratón. [MIT]
* [Ginseng](https://github.com/chewax/Ginseng) - Analisador de argumentos de linha de comandos para C++. [MIT]

<a id="compression"></a>
## Compressão
*Bibliotecas de compressão e archivado*

* [bit7z](https://github.com/rikyoz/bit7z) - Biblioteca estática de C++ que oferece uma interface clara e simples para as bibliotecas compartidas de 7-zip. [MPL2]
* [Brotli](https://github.com/google/brotli) - Formato de compressão Brotli, desenvolvido por Google. [MIT]
* [bzip2](https://www.bzip.org/) - Compresor de dados de alto qualidade, gratuito e livre de patentes. [BSD]
* [bzip3](https://github.com/kspalaiologos/bzip3) - Sucesor espiritual de BZip2, mejorado e mais poderosa. [LGPL]
* [FastLZ](https://github.com/ariya/FastLZ) - Compressão LZ77 pequena e portátil, alineada por bytes. [MIT]
* [FiniteStateEntropy](https://github.com/Cyan4973/FiniteStateEntropy) - Códecs de entropía de nueva geração: Finite State Entropy e Huff0.
* [FSST](https://github.com/cwida/fsst) - Compressão de strings eficiente com acceso aleatorio. [MIT]
* [heatshrink](https://github.com/atomicobject/heatshrink) - Biblioteca de compressão de dados para sistemas integrados e em tempo real. [ISC]
* [Kanzi](https://github.com/flanglet/kanzi-cpp) - Compresor de dados sem perdas moderno, modular, portátil e eficiente, implementado em C++. [Apache-2.0]
* [KArchive](https://api.kde.org/karchive-index.html) - Biblioteca para criar, ler, escrever e manipular arquivos comprimidos como zip e tar. Também comprime e descomprime dados de forma transparente em formatos como gzip por meio de uma subclase de QIODevice. [LGPL]
* [libarchive](https://github.com/libarchive/libarchive) - Biblioteca de compressão e archivado compatível com múltiplos formatos. [New BSD] [website](https://www.libarchive.org/)
* [LZ4](https://github.com/lz4/lz4) - Algoritmo de compressão extremamente rápido. [BSD] [website](https://www.lz4.org/)
* [LZAV](https://github.com/avaneev/lzav) - Algoritmo rápido de compressão de dados em memória. [MIT]
* [LZFSE](https://github.com/lzfse/lzfse) - Biblioteca de compressão LZFSE e ferramenta de linha de comandos, desarrolladas por Apple.
* [LZHAM](https://code.google.com/p/lzham/) - Biblioteca de compressão de dados sem perdas com uma taxa semelhante a LZMA, mas com descompressão muito mais rápida. [BSD]
* [LZMA](https://sourceforge.net/projects/sevenzip/files/7-Zip) :zap: - Método de compressão predeterminado e de objetivo geral do formato 7z. [PublicDomain] [website](https://www.7-zip.org)
* [LZMAT](https://github.com/nemequ/lzmat) - Biblioteca de compressão de dados sem perdas em tempo real extremamente rápida. [GPL]
* [miniz](https://github.com/richgel999/miniz) - Biblioteca de compressão Deflate/Inflate em um único arquivo código-fonte C, com API compatível com zlib, leitura/gravação de arquivos ZIP e gravação de PNG. [MIT]
* [Minizip](https://github.com/nmoinvaz/minizip) - Zlib com as últimas correções de erros, compatível com o fracionamento de discos PKWARE, cifrado AES e armazenamento em búfer de E/S. [zlib]
* [minizip-ng](https://github.com/zlib-ng/minizip-ng) - Bifurcación da popular biblioteca de manipulación ZIP incluida na distribución de zlib. [zlib]
* [misa77](https://github.com/welcome-to-the-sunny-side/misa77) - descompressão incrivelmente rápida com boas tasas. [MIT]
* [OpenZL](https://github.com/facebook/openzl) - Framework novedoso de compressão de dados. [BSD] [website](https://openzl.org/)
* [PhysicsFS](https://icculus.org/physfs/) - Biblioteca para fornecer acceso abstracto a vários arquivos comprimidos. Está pensada para videojuegos e seu design se inspiró em parte em o subsistema de arquivos de Quake 3. [zlib]
* [Rapidgzip](https://github.com/mxmlnkn/rapidgzip) - descompressão Gzip e acceso aleatorio em máquinas multinúcleo modernas. [Apache-2/MIT]
* [smaz](https://github.com/antirez/smaz) - Biblioteca de compressão de strings cortas. [BSD]
* [Snappy](https://google.github.io/snappy/) - Compresor/descompresor rápido. [BSD]
* [ZLib](https://zlib.net/) - Biblioteca de compressão muito compacta para flujos de dados. [zlib]
* [zlib-ng](https://github.com/zlib-ng/zlib-ng) - zlib para sistemas de «próxima geração». substituição directo com optimizaciones importantes. [zlib]
* [zstd](https://github.com/facebook/zstd) - Zstandard: algoritmo de compressão rápida em tempo real, desenvolvido por Facebook. [BSD]
* [ZXC](https://github.com/hellobertrand/zxc) - Compressão asimétrica sem perdas de alto desempenho. [BSD-3-Clause]
* [ZZIPlib](https://zziplib.sourceforge.net/) - Fornece acceso de leitura a arquivos ZIP. [MPL/LGPL]
* [cmix](https://github.com/byronknoll/cmix) - Programa de compressão sem perdas que busca as tasas de compressão mais altas a costa da velocidade. [GPL-3.0]
* [LZSSE-SIMDe](https://github.com/nemequ/LZSSE-SIMDe) - Implementação SIMD portátil da compressão LZSSE. [BSD-2-Clause]
* [Zopfli](https://github.com/google/zopfli) - Biblioteca de compressão que oferece muito buenos resultados com deflate/zlib, aunque lentamente. [Apache-2.0]

<a id="concurrency"></a>
## Concorrência
*Concorrência e multihilo*

* [alpaka](https://github.com/ComputationalRadiationPhysics/alpaka) - Biblioteca de abstração para acelerar kernels paralelos. [LGPLv3+]
* [ArrayFire](https://github.com/arrayfire/arrayfire) - Biblioteca GPU de objetivo geral. [BSD]
* [Async++](https://github.com/Amanieu/asyncplusplus) - Framework de concorrência leve para C++11, inspirado na biblioteca Microsoft PPL e a propuesta do padrão C++ N3428. [MIT]
* [atomic_queue](https://github.com/max0x7ba/atomic_queue) - filas sem bloqueios de C++14 com múltiplos produtores e consumidores, baseadas em búferes circulares e std::atomic. [MIT]
* [Boost.Compute](https://github.com/boostorg/compute) - Biblioteca de computação GPU em C++ para OpenCL. [Boost] [website](https://boost.org/libs/compute)
* [Bolt](https://github.com/HSA-Libraries/Bolt) - Biblioteca de templates C++ optimizada para GPU. [Apache2]
* [BS::thread_pool](https://github.com/bshoshany/thread-pool) - Biblioteca de grupos de threads C++17 rápida, leve e fácil de usar. [MIT]
* [Channel](https://github.com/andreiavrammsd/cpp-channel) - Contenedor seguro para threads que permite compartir dados entre threads. [MIT]
* [ck](https://github.com/concurrencykit/ck) - Primitivas de concorrência, mecanismos seguros de recuperación de memória e estruturas de dados não bloqueantes. [BSD]
* [concurrentqueue](https://github.com/cameron314/concurrentqueue) - fila concorrente rápida e sem bloqueios, com múltiplos produtores e consumidores, para C++11. [BSD,Boost]
* [Coros](https://github.com/mtmucha/coros) - Biblioteca rápida e fácil de usar para paralelismo baseado em tarefas por meio de corrotinas. [BSL-1.0]
* [CUB](https://github.com/NVlabs/cub) - CUB oferece componentes de software reutilizáveis de última geração para cada nível do modelo de programação CUDA. [New BSD]
* [cuda-api-wrappers](https://github.com/eyalroz/cuda-api-wrappers) - Wrappers leves de C++ moderno para a API de execução de programação GPU CUDA. [BSD]
* [cupla](https://github.com/ComputationalRadiationPhysics/cupla) - API C++ para ejecutar CUDA/C++ sobre OpenMP, Threads, TBB e outros por meio de Alpaka. [LGPLv3+]
* [C++React](https://github.com/schlangster/cpp.react) - Biblioteca de programação reactiva para C++11. [Boost]
* [dispenso](https://github.com/facebookincubator/dispenso) - Biblioteca C++ de alto desempenho para programação paralela com grupos de threads, bucles paralelos, futuros, grafos de tarefas e contêineres concurrentes. [MIT]
* [FiberTaskingLib](https://github.com/RichieSams/FiberTaskingLib) - Biblioteca de multihilo baseada em tarefas que admite grafos de tarefas com dependências arbitrarias. [Apache]
* [HPX](https://github.com/STEllAR-GROUP/hpx/) - Sistema de execução C++ de objetivo geral para aplicações paralelas e distribuidas de cualquier escala. [Boost]
* [Intel Games Task Scheduler](https://github.com/GameTechDev/GTS-GamesTaskScheduler) - Framework de planejamento de tarefas projetado para as necessidades de os desenvolvedores de jogos. [MIT]
* [Intel Parallel STL](https://github.com/intel/parallelstl) - Implementação de Intel® de STL de C++17 para C++11 e posteriores. [Apache2]
* [Intel TBB](https://www.threadingbuildingblocks.org/) - Threading Building Blocks de Intel®. [Apache2]
* [junction](https://github.com/preshing/junction) - Biblioteca de estruturas de dados concurrentes em C++. [BSD]
* [Kokkos](https://github.com/kokkos/kokkos) - Modelo de programação Portátil em desempenho para execução paralela e abstração de memória. [BSD]
* [libcds](https://github.com/khizmax/libcds) - Biblioteca C++ de estruturas de dados concurrentes. [BSD]
* [Libclsph](https://github.com/libclsph/libclsph) - Biblioteca de simulação de fluidos SPH acelerada por GPU por meio de OpenCL. [MIT]
* [libdill](https://github.com/sustrik/libdill/) - Incorpora concorrência estructurada a C. [MIT]
* [libdispatch](https://github.com/apple/swift-corelibs-libdispatch) - Grand Central Dispatch (GCD), desenvolvido por Apple Inc., é uma tecnología de paralelismo de tarefas baseada em o patrón de grupos de threads. libdispatch implementa os servicios de GCD. [Apache-2.0] [website](https://apple.github.io/swift-corelibs-libdispatch/)
* [libfork](https://github.com/ConorWilliams/libfork) - Biblioteca de tarefas de vanguardia, sem bloqueios e sem espera, que roba continuaciones e se basa em as corrotinas de C++20. [MPL-2.0] [website](https://conorwilliams.github.io/libfork/)
* [libmill](https://github.com/sustrik/libmill/) - Incorpora a C a concorrência ao estilo Go. [MIT]
* [marl](https://github.com/google/marl) - Marl é um planificador híbrido de tarefas com threads e fibras, escrito em C++11. [Apache-2.0]
* [moderngpu](https://github.com/moderngpu/moderngpu) - Biblioteca de productividad para computação de objetivo geral em GPU. É uma biblioteca CUDA de C++ somente de cabeçalho; seu valor distintivo são as primitivas aceleradas para resolver problemas com paralelismo irregular. [FreeBSD & Copyright, Sean Baxter]
* [NCCL](https://github.com/NVIDIA/nccl) - Primitivas optimizadas para comunicação colectiva entre várias GPU. [BSD]
* [Neco](https://github.com/tidwall/neco) - Biblioteca de concorrência para C (corrotinas). [MIT]
* [OpenCL](https://www.khronos.org/opencl/) - Padrão aberto para programação paralela de sistemas heterogéneos.
* [OpenMP](https://openmp.org/) - API de OpenMP.
* [rotor](https://github.com/basiliscos/cpp-rotor) - Microframework de actores C++ compatível com bucles de eventos. [MIT]
* [SObjectizer](https://github.com/Stiffstream/sobjectizer) - Implementação de os modelos Actor, Publish-Subscribe e CSP em um framework C++ bastante pequeno. [BSD-3-Clause]
* [Quantum](https://github.com/bloomberg/quantum) - Poderosa framework C++ de despacho de corrotinas baseado em [Boost.Coroutine2](https://boost.org/libs/coroutine2).
* [RaftLib](https://raftlib.io/) - Biblioteca C++ para concorrência de fluxo de dados por meio de operadores similares aos de iostream. [Apache2]
* [readerwriterqueue](https://github.com/cameron314/readerwriterqueue) - fila rápida para C++, sem bloqueios e com um único productor e consumidor. [BSD]
* [stdgpu](https://github.com/stotko/stdgpu) - Estruturas de dados eficientes, similares a STL, em GPU. [Apache2]
* [Taskflow](https://github.com/taskflow/taskflow) - Sistema de programação de tarefas paralelas e heterogéneas de objetivo geral (antes llamado Cpp-Taskflow). [MIT]
* [ThreadPool](https://github.com/progschj/ThreadPool) - Implementação simples de um grupo de threads para C++11. [zlib]
* [Thrust](https://developer.nvidia.com/thrust) - Biblioteca de algoritmos paralelos semelhante a a Standard Template Library (STL) de C++. [Apache2]
* [TooManyCooks](https://github.com/tzcnt/TooManyCooks/) - Framework de corrotinas C++20 de alto desempenho com funções avanzadas de detección de hardware. [BSL-1.0]
* [transwarp](https://github.com/bloomen/transwarp) - Biblioteca C++ somente de cabeçalho para concorrência de tarefas. [MIT]
* [VexCL](https://github.com/ddemidov/vexcl) - Biblioteca de templates de expressões vectoriales C++ para OpenCL/CUDA. [MIT]
* [STAPL](https://parasol-lab.gitlab.io/stapl-home/) - Framework de programação paralela C++ projetado para funcionar tanto em computadoras paralelas com memória compartida como distribuída. [BSD]
* [concurrencpp](https://github.com/David-Haim/concurrencpp) - Biblioteca de concorrência de objetivo geral com tarefas, ejecutores, temporizadores e corrotinas de C++20 para dominarlas a todas.
* [libcu++](https://github.com/NVIDIA/libcudacxx) - Biblioteca padrão C++ de NVIDIA, com implementações heterogéneas de as funções da biblioteca padrão de C++. [Apache-2.0]
* [nvthreads](https://github.com/HewlettPackard/nvthreads) - Biblioteca para habilitar threads eficientes e persistentes em C/C++. [LGPL-2.1]

<a id="configuration"></a>
## Configuração
*Arquivos de configuração e arquivos INI*

* [inifile-cpp](https://github.com/Rookfighter/inifile-cpp) - Analisador de arquivos INI para C++, somente de cabeçalho e fácil de usar. [MIT]
* [inih](https://github.com/benhoyt/inih) - Analisador simples de arquivos .INI em C, adecuado para sistemas integrados. [BSD-3-Clause]
* [inih](https://github.com/jtilly/inih) - Versão C++ de [inih](https://github.com/benhoyt/inih) contenida em uma um único cabeçalho. [BSD-3-Clause]
* [ini-cpp](https://github.com/SSARCandy/ini-cpp) - Versão C++ de uma um único cabeçalho com uma interface práctica de leitura/gravação, baseada em [inih](https://github.com/benhoyt/inih). [BSD-3-Clause] [website](https://ssarcandy.tw/ini-cpp/index.html)
* [iniparser](https://github.com/ndevilla/iniparser) - Analisador de arquivos INI. [MIT]
* [inipp](https://github.com/mcmtroffaes/inipp) - Analisador e gerador INI simples para C++, somente de cabeçalho. [MIT]
* [libconfig](https://github.com/hyperrealm/libconfig) - Biblioteca C e C++ para processar arquivos de configuração estructurados. [LGPL-2.1] [website](https://hyperrealm.github.io/libconfig/)
* [libconfuse](https://github.com/martinh/libconfuse) - Pequena biblioteca C para analisar arquivos de configuração. [ISC]
* [mINI](https://github.com/metayeti/mINI) - Lector e escritor de arquivos INI. [MIT]
* [simpleini](https://github.com/brofield/simpleini) - Biblioteca C++ multiplataforma com uma API simples para ler e escrever arquivos de configuração de estilo INI. [MIT]
* [toml++](https://github.com/marzer/tomlplusplus) - Analisador e serializador TOML somente de cabeçalho para C++17 e posteriores. [MIT] [website](https://marzer.github.io/tomlplusplus/)
* [toml11](https://github.com/ToruNiina/toml11) - Analisador/codificador TOML somente de cabeçalho para C++11 e posteriores, que depende únicamente da biblioteca padrão de C++. [MIT]

<a id="containers"></a>
## Contêineres

* [CRoaring](https://github.com/RoaringBitmap/CRoaring) - Mapas de bits Roaring em C (e C++), com optimizaciones SIMD. [Apache-2.0]
* [dynamic_bitset](https://github.com/pinam45/dynamic_bitset) - Simple Useful Libraries: bitset dinâmico para C++17/20, somente de cabeçalho. [MIT] [website](https://pinam45.github.io/dynamic_bitset/)
* [fixed-containers](https://github.com/teslamotors/fixed-containers) - Biblioteca C++20 somente de cabeçalho com contêineres constexpr de capacidad fija. [MIT]
* [flat_hash_map](https://github.com/skarupke/flat_hash_map) - tabela hash plana muito rápida com hashing de Fibonacci.
* [frozen](https://github.com/serge-sans-paille/frozen) - Alternativa constexpr e somente de cabeçalho a gperf para usuários de C++14. [Apache-2.0]
* [Hashmaps](https://github.com/goossaert/hashmap) - Implementação em C++ de algoritmos de tabelas hash com direccionamiento aberto. [MIT]
* [hat-trie](https://github.com/Tessil/hat-trie) - Implementação C++ de HAT-trie rápida e eficiente em memória. [MIT]
* [Hopscotch map](https://github.com/Tessil/hopscotch-map) - tabela hash rápida e somente de cabeçalho que utiliza hashing hopscotch para resolver colisões. [MIT]
* [librb](https://github.com/mlyszczek/librb) - Implementação C de um búfer circular, com suporte abrangente para threads que permite leitura/gravação concurrentes e aumenta automáticamente seu tamanho cuando é necesario. [BSD] [website](https://librb.bofc.pl/)
* [LSHBOX](https://github.com/RSIA-LIESMARS-WHU/LSHBOX) - Kit de ferramentas C++ de hashing sensible a a localidad (LSH), com vários algoritmos LSH populares e compatibilidade com Python e MATLAB. [GPL]
* [marisa-trie](https://github.com/s-yata/marisa-trie) - Algoritmo de coincidencia com armazenamento implementado recursivamente. [BSD-2-Clause/LGPL-2.1]
* [parallel-hashmap](https://github.com/greg7mdp/parallel-hashmap) - Familia de contêineres hashmap e btree somente de cabeçalho, muito rápidos e eficientes em memória. [Apache2] [website](https://greg7mdp.github.io/parallel-hashmap/)
* [PGM-index](https://github.com/gvinciguerra/PGM-index) - Estrutura de dados que permite buscas rápidas, consultas de predecesores e rangos, e actualizaciones em matrices de miles de millones de elementos, usando muito menos espaço que os índices tradicionales. [Apache2] [website](https://pgm.di.unipi.it)
* [plf::colony](https://github.com/mattreecebentley/plf_colony) - Contenedor desordenado tipo «bolsa» que supera aos contêineres padrão em escenarios com muchas modificaciones e mantiene punteros permanentes aos elementos não eliminados, independientemente de as inserciones ou eliminaciones. [zLib] [website](https://www.plflib.org/colony.htm)
* [plf::list](https://github.com/mattreecebentley/plf_list) - Implementação de std::list que elimina o empalme de rangos para permitir uma estrutura mais favorable a a caché e obtener importantes mejoras de desempenho. [zLib] [website](https://www.plflib.org/list.htm)
* [plf::stack](https://github.com/mattreecebentley/plf_stack) - Contenedor sustituto do adaptador std::stack, com melhor desempenho que cualquier contenedor padrão em contextos de pila. [zLib] [website](https://www.plflib.org/stack.htm)
* [ring_span lite](https://github.com/martinmoene/ring-span-lite) - Implementação simplificada de ring_span de Arthur OU'Dwyer, é decir, uma vista de búfer circular. [MIT]
* [robin-hood-hashing](https://github.com/martinus/robin-hood-hashing) - tabela hash rápida e eficiente em memória baseada em hashing robin hood para C++14. [MIT]
* [robin-map](https://github.com/Tessil/robin-map) - Mapa e conjunto hash rápidos que utilizam hashing robin hood. [MIT]
* [sparsepp](https://github.com/greg7mdp/sparsepp) - Mapa hash para C++ rápido e eficiente em memória. [BSD 3-clause]
* [sqlitemap](https://github.com/bw-hro/sqlitemap) - Mapa persistente respaldado por SQLite. [MIT]
* [st_tree](https://github.com/erikerlandson/st_tree) - classe de template C++ rápida e flexível para estruturas de dados de árvore. [Apache-2.0]
* [svector](https://github.com/martinus/svector) - Vector compacto optimizado para SVO, para C++17 ou posterior. [MIT]
* [tree.hh](https://github.com/kpeeters/tree.hh) - Biblioteca de árvores C++ somente de cabeçalho, semelhante a STL. [GPL2+]
* [unordered_dense](https://github.com/martinus/unordered_dense) - Hashmap e hashset rápidos e almacenados de forma densa, baseados na eliminación por desplazamiento hacia atrás de robin hood. [MIT]
* [fifo_map](https://github.com/nlohmann/fifo_map) - Contenedor asociativo para C++ ordenado por FIFO. [MIT]
* [ordered-map](https://github.com/Tessil/ordered-map) - Mapa hash e conjunto hash para C++ que conservan o orden de inserción. [MIT]

<a id="cryptography"></a>
## Criptografia
*Bibliotecas de criptografía e cifrado*

* [Bcrypt](https://bcrypt.sourceforge.net/) - Utilidad multiplataforma de cifrado de arquivos. Os arquivos cifrados são portáteis entre todos os sistemas operativos e procesadores compatíveis. [BSD]
* [BeeCrypt](https://beecrypt.sourceforge.net/) - Biblioteca criptográfica portátil e rápida. [LGPLv2.1+]
* [BoringSSL](https://boringssl.googlesource.com/boringssl) - Bifurcación de OpenSSL projetada para satisfacer as necessidades de Google. [Apache2]
* [Botan](https://botan.randombit.net/) - Biblioteca criptográfica para C++. [BSD-2]
* [Crypto++](https://github.com/weidai11/cryptopp) - Biblioteca gratuita de classes C++ com esquemas criptográficos. [Boost] [website](https://www.cryptopp.com/)
* [digestpp](https://github.com/kerukuro/digestpp) - Biblioteca C++11 somente de cabeçalho para resúmenes de mensajes (hashes). [PublicDomain]
* [GnuPG](https://www.gnupg.org/) - Implementação completa e gratuita do padrão OpenPGP. [GPL]
* [GnuTLS](https://www.gnutls.org/) - Biblioteca de comunicaciones seguras que implementa os protocolos SSL, TLS e DTLS. [LGPL2.1]
* [Libgcrypt](https://www.gnu.org/software/libgcrypt/) - Biblioteca criptográfica de objetivo geral, baseada originalmente em código de GnuPG. [LGPLv2.1+]
* [LibreSSL](https://www.libressl.org/) - Versão livre do protocolo SSL/TLS, bifurcada de OpenSSL em 2014. [?]
* [libsodium](https://github.com/jedisct1/libsodium) - Biblioteca criptográfica baseada em NaCl, portátil e empaquetable, com criterios definidos e fácil de usar. [ISC]
* [libhydrogen](https://github.com/jedisct1/libhydrogen) - Biblioteca criptográfica leve, segura e fácil de usar, adequada para entornos com recursos limitados. [ISC]
* [LibTomCrypt](https://github.com/libtom/libtomcrypt) - Kit de ferramentas criptográficas bastante completo, modular e portátil. [WTFPL]
* [mbedTLS](https://github.com/ARMmbed/mbedtls) - Biblioteca SSL de código aberto, portátil, fácil de usar, legível e flexível, antes conocida como PolarSSL. [Apache2] [website](https://tls.mbed.org/)
* [Nettle](https://www.lysator.liu.se/~nisse/nettle/) - Biblioteca criptográfica de baixo nível. [LGPL]
* [OpenSSL](https://github.com/openssl/openssl) - Biblioteca criptográfica de código aberto, robusta, de nível comercial e com todas as funções. [Apache] [website](https://www.openssl.org/)
* [retter](https://github.com/MaciejCzyzewski/retter) - Coleção de funções hash, cifrados, ferramentas, bibliotecas e materiais relacionados com a criptografía.
* [s2n](https://github.com/awslabs/s2n) - Implementação de os protocolos TLS/SSL. [Apache]
* [sha1collisiondetection](https://github.com/cr-marcstevens/sha1collisiondetection) - Biblioteca e ferramenta de linha de comandos para detectar colisões SHA-1 em arquivos. [MIT]
* [stduuid](https://github.com/mariusbancila/stduuid) - Implementação multiplataforma de UUID para C++17. [MIT]
* [Tink](https://github.com/google/tink) - Biblioteca multiplataforma e multilenguaje com API criptográficas seguras, fáceis de usar correctamente e difíciles (ou mais difíciles) de utilizar mal. [Apache-2.0]
* [Tiny AES in C](https://github.com/kokke/tiny-AES-c) - AES128/192/256 pequeno e portátil em C. [PublicDomain]
* [tiny-ECDH-c](https://github.com/kokke/tiny-ECDH-c) - Implementação pequena e portátil do protocolo de acuerdo de chaves ECDH em C. [PublicDomain]
* [Themis](https://github.com/cossacklabs/themis) - Biblioteca criptográfica para proteger dados facilmente; oferece cifrado simétrico e asimétrico e sockets seguros com confidencialidad directa para plataformas móveis e de servidor. [Apache2]
* [HEhub](https://github.com/primihub/HEhub) - Biblioteca para cifrado homomórfico e seus aplicações. [Apache2]
* [Qt-Secret](https://github.com/QuasarApp/Qt-Secret) - Biblioteca de cifrado simples baseada em Qt para projetos C++. [LGPL]
* [micro-ecc](https://github.com/kmackay/micro-ecc) - Implementação pequena e rápida de ECDH e ECDSA para procesadores de 8, 32 e 64 bits. [BSD-2-Clause]
* [crypto-algorithms](https://github.com/B-Con/crypto-algorithms) - Implementações básicas de algoritmos criptográficos padrão (AES, SHA, etc.) em C. [PublicDomain]
* [aes-stream](https://github.com/jedisct1/aes-stream) - Cifrado de fluxo rápido baseado em AES para C. [ISC]

## CSV
*Bibliotecas para analisar arquivos de valores separados por comas (CSV)*

* [commata](https://github.com/furfurylic/commata) - Otro analisador CSV de C++17 somente de cabeçalho. [Unlicense]
* [csv2](https://github.com/p-ranav/csv2) - Analisador CSV rápido para C++ moderno. [MIT]
* [Csv::Parser](https://github.com/ashaduri/csv-parser) - Analisador CSV de C++17 para tempo de compilação e de execução. [Zlib]
* [Fast C++ CSV Parser](https://github.com/ben-strasser/fast-cpp-csv-parser) - Biblioteca pequena, rápida e fácil de usar, somente de cabeçalho, para ler arquivos CSV. [BSD-3-Clause]
* [Glaze](https://github.com/stephenberry/glaze) - Biblioteca CSV de alto desempenho e somente de cabeçalho, compatível com reflexão. [MIT]
* [lazycsv](https://github.com/ashtum/lazycsv) - Analisador CSV rápido, leve e de uma um único cabeçalho para C++ moderno. [MIT]
* [rapidcsv](https://github.com/d99kris/rapidcsv) - Biblioteca C++ de análise CSV fácil de usar e somente de cabeçalho. [BSD-3-Clause]
* [ssp](https://github.com/red0124/ssp) - Analisador «csv» somente de cabeçalho, rápido e versátil, com uma API C++ moderna. [MIT]
* [Vince's CSV Parser](https://github.com/vincentlaucsb/csv-parser) - Analisador CSV de C++17 rápido, autónomo e baseado em flujos, com conversão opcional de tipos e estadísticas. [MIT]
* [zsv](https://github.com/liquidaty/zsv) - O analisador CSV (SIMD) mais rápido do mundo, com uma CLI extensible. [MIT]

<a id="database"></a>
## Banco de Dados
*Bibliotecas de bases de dados, servidores SQL, controladores ODBC e ferramentas*

* [ClickHouse](https://github.com/ClickHouse/clickhouse-cpp) - Cliente C++ para o SGBD ClickHouse. [Apache2]
* [CrossDB](https://github.com/crossdb-org/crossdb) - SGBDR OLTP integrado e de servidor ultrarrápido, leve e de alto desempenho. [MPL-2.0] [website](https://crossdb.org/)
* [Doltlite](https://github.com/dolthub/doltlite) - SQLite com control de versões. [PublicDomain/Apache2]
* [DuckDB](https://duckdb.org/) - Sistema de gestión de bases de dados SQL OLAP em proceso. [MIT] [website](https://duckdb.org/)
* [hiberlite](https://github.com/paulftw/hiberlite) - Asignación objeto-relacional em C++ para sqlite3. [BSD]
* [Hiredis](https://github.com/redis/hiredis) - Biblioteca cliente C minimalista para a base de dados Redis. [BSD]
* [Infinity](https://github.com/infiniflow/infinity) - Base de dados nativa de IA para aplicações LLM, com busca vectorial e de texto completo incrivelmente rápida. [Apache2]
* [Kuzu](https://github.com/kuzudb/kuzu) - Sistema de gestión de bases de dados de grafos de propiedades integrável, projetado para ofrecer velocidade de consulta e escalabilidade. Implementa Cypher. [MIT]
* [Kvrocks](https://github.com/apache/incubator-kvrocks) - Base de dados NoSQL distribuída de chave-valor que utiliza RocksDB como motor de armazenamento e é compatível com o protocolo Redis. [Apache2]
* [Ladybug](https://github.com/LadybugDB/ladybug) - Base de dados de grafos integrada, projetada para ofrecer velocidade de consulta e escalabilidade. [MIT] [website](https://ladybugdb.com/)
* [LevelDB](https://github.com/google/leveldb) - Biblioteca rápida de armazenamento chave-valor escrita em Google, que fornece uma mapeamento ordenado de chaves de string a valores de string. [BSD]
* [libpg_query](https://github.com/pganalyze/libpg_query) - Biblioteca C para acceder ao analisador de PostgreSQL fuera do ambiente do servidor. [BSD-3-Clause]
* [libpqxx](https://github.com/jtv/libpqxx) - API cliente oficial de C++ para PostgreSQL. [BSD-3-Clause]
* [LMDB](https://www.symas.com/lmdb) - armazenamento chave-valor integrado muito rápido, com semántica ACID completa. [OpenLDAP]
* [LMDB++](https://github.com/bendiken/lmdbxx) - Wrapper C++11 para a biblioteca de bases de dados integradas LMDB. [PublicDomain]
* [mgclient](https://github.com/memgraph/mgclient) - Cliente C/C++ de Memgraph. [Apache2]
* [MongoDB C Driver](https://github.com/mongodb/mongo-c-driver) - Biblioteca cliente de MongoDB para C. [Apache2]
* [MongoDB C++ Driver](https://github.com/mongodb/mongo-cxx-driver) - Controlador C++ para MongoDB. [Apache2]
* [MongoDB Libbson](https://github.com/mongodb/libbson) - Biblioteca de utilitários BSON. [Apache2]
* [MySQL++](https://www.tangentsoft.net/mysql++/) - Wrapper C++ para a API C de MySQL. [LGPL]
* [nanodbc](https://github.com/nanodbc/nanodbc) - Pequeno wrapper C++ para a API ODBC nativa de C. [MIT]
* [ODB](https://www.codesynthesis.com/products/odb/) - Sistema ORM de código aberto, multiplataforma e compatível com várias bases de dados para C++. [GPLv2]
* [redis3m](https://github.com/luca3m/redis3m) - Wrapper de hiredis com uma interface C++ clara, compatível com Sentinel e com padrões prontos para usar. [Apache2]
* [Reindexer](https://github.com/Restream/reindexer) - Base de dados integrável, em memória e orientada a documentos, com uma interface de alto nível para criar consultas. [Apache2] [website](https://reindexer.io/)
* [RocksDB](https://github.com/facebook/rocksdb) - armazenamento chave-valor integrado para armazenamento rápido de Facebook. [BSD]
* [SimDB](https://github.com/LiveAsynchronousVisualizedArchitecture/simdb) - armazenamento chave-valor C++11 de alto desempenho, memória compartida, sem bloqueios e multiplataforma, em um somente arquivo e com dependências mínimas. [Apache2]
* [SlothDB](https://github.com/SouravRoy-ETL/slothdb) - Base de dados SQL integrada que funciona em todas partes: em o portátil, em um servidor e em o navegador. [MIT] [website](https://slothdb.org/)
* [SOCI](https://github.com/SOCI/soci) - Capa de abstração de bases de dados para C++. [Boost]
* [Speedb](https://github.com/speedb-io/speedb) - Proyecto impulsionado pela comunidade: armazenamento chave-valor integrado, escalável e de alto desempenho, compatível com RocksDB. [Apache2]
* [sqlgen](https://github.com/getml/sqlgen) - ORM e gerador de consultas SQL baseados em reflexão para C++20, semelhante a SQLAlchemy/SQLModel de Python ou Diesel de Rust. [MIT]
* [SQLite](https://www.sqlite.org/) - Base de dados relacional totalmente integrada e com todas as funções, de somente uns cientos de kilobytes, que pode incluirse directamente em o proyecto. [PublicDomain]
* [SQLiteC++](https://github.com/SRombauts/SQLiteCpp) - SQLiteC++ (SQLiteCpp) é um wrapper C++ para SQLite3 práctico e fácil de usar. [MIT]
* [sqlite_modern_cpp](https://github.com/SqliteModernCpp/sqlite_modern_cpp) - Wrapper somente de cabeçalho para a biblioteca sqlite, em C++14. [MIT]
* [sqlite_orm](https://github.com/fnc12/sqlite_orm) - Biblioteca ORM SQLite leve, somente de cabeçalho, para C++ moderno. [AGPL + paid MIT]
* [sqlpp11](https://github.com/rbock/sqlpp11) - Linguagem específico de dominio integrado, com segurança de tipos, para consultas e resultados SQL em C++. [BSD-2-Clause]
* [sqlpp23](https://github.com/rbock/sqlpp23) - Biblioteca SQL com segurança de tipos para C++. [BSD-2-Clause]
* [TidesDB](https://github.com/tidesdb/tidesdb) - Motor de armazenamento integrado, transaccional, duradero e de alto desempenho, projetado para optimizar flash e RAM. [MPL-2.0] [website](https://tidesdb.com/)
* [TileDB](https://github.com/TileDB-Inc/TileDB) - SGBD rápido para matrices multidimensionales densas e dispersas. [MIT] [website](https://tiledb.io/)
* [TinyORM](https://github.com/silverqx/TinyORM) - Biblioteca ORM moderna para C++. [MIT] [website](https://www.tinyorm.org/)
* [UnQLite](https://github.com/symisc/unqlite) - Motor NoSQL transaccional, autónomo, sem servidor e sem configuração. [BSD-2-Clause] [website](https://unqlite.symisc.net/)
* [upscaledb](https://upscaledb.com) - armazenamento «tipado» de chave-valor integrado, com interface de consulta incorporada. [GPLv3]
* [TigerBeetleDB C++ client (Community)](https://github.com/kassane/tigerbeetle-cpp) - TigerBeetle é uma base de dados de contabilidad financiera projetada para ofrecer segurança e desempenho de misión crítica e impulsar o futuro de os servicios financieros. [BSL-1.0]
* [Trilogy](https://github.com/trilogy-libraries/trilogy) - Biblioteca cliente para servidores de bases de dados compatíveis com MySQL, projetada para ofrecer desempenho, flexibilidad e facilidade de integração. [MIT]
* [UStore](https://github.com/unum-cloud/ustore) - Base de dados multimodal para BLOB, JSON e grafos. [Apache2]
* [Velox](https://github.com/facebookincubator/velox) - Biblioteca de aceleração vectorizada de bases de dados C++, orientada a optimizar motores de consultas e sistemas de processamento de dados. [Apache-2.0] [website](https://velox-lib.io/)
* [Zvec](https://github.com/alibaba/zvec) - Base de dados vectorial leve e rapidísima, em proceso. [Apache2] [website](https://zvec.org/)
* [constexpr-sql](https://github.com/mkitzan/constexpr-sql) - Analisador e ejecutor de consultas SQL em tempo de compilação para C++17. [MIT]
* [NuDB](https://github.com/cppalliance/NuDB) - armazenamento de chave-valor rápido e de somente anexado para unidades SSD. [Boost]

<a id="data-visualization"></a>
## Visualização de Dados
*Bibliotecas de visualização de dados*

* [gplot++](https://github.com/ziotom78/gplotpp) - Biblioteca de trazado C++ multiplataforma e somente de cabeçalho que se comunica com Gnuplot. [MIT]
* [matplotplusplus](https://github.com/alandefreitas/matplotplusplus) - Biblioteca gráfica C++ para visualização de dados. [MIT] [website](https://alandefreitas.github.io/matplotplusplus/)
* [mathplot](https://github.com/sebsjames/mathplot) - Gráficos e visualização de dados em C++, com cabeçalhos e OpenGL moderno. [Apache-2.0] [website](https://sebsjames.github.io/mathplot/)
* [Plotly++](https://github.com/jimmyorourke/plotlypp) - Interface C++ para a especificação de figuras de Plotly.js, para criar visualizaciones de dados interactivas. [MIT]
* [matplotlib-cpp](https://github.com/lava/matplotlib-cpp) - Wrapper C++ para a biblioteca de trazado Python matplotlib. [MIT]

<a id="debug"></a>
## Depuração
*Bibliotecas de depuración, detección de fugas de memória e recursos, e testes unitários*

* [Attest](https://github.com/tugglecore/attest) - Framework de testes C multiplataforma e sem uso do heap, com testes parametrizadas e conscientes do ciclo de vida, aserciones e mensajes com formato ad hoc. [MIT]
* [backward-cpp](https://github.com/bombela/backward-cpp) - Impresor elegante de trazas de pila para C++. [MIT]
* [Bencher](https://bencher.dev/) - Conjunto de ferramentas de benchmarking continuo projetado para detectar regresiones de desempenho em CI. [MIT]/[Apache2]
* [benchmark](https://github.com/google/benchmark) - Pequena biblioteca de suporte para microbenchmarks proporcionada por Google. [Apache2]
* [Boost.Test](https://github.com/boostorg/test) - Biblioteca de testes de Boost. [Boost] [website](https://boost.org/libs/test)
* [check](https://github.com/libcheck/check) - Check é um framework de testes unitários para C. [LGPL-2.1] [website](https://libcheck.github.io/check/)
* [doctest](https://github.com/onqtam/doctest) - Framework de testes C++ de uma um único cabeçalho, com muchas funções e muito leve. [MIT]
* [Catch2](https://github.com/catchorg/Catch2) - Framework de testes moderno e nativo de C++ para testes unitários, TDD e BDD. [Boost]
* [Celero](https://github.com/DigitalInBlue/Celero) - Framework de benchmarking para C++. [Apache2]
* [cpp-dump](https://github.com/philip82148/cpp-dump) - Biblioteca C++ de depuración que pode imprimir cualquier variable, incluso tipos definidos por o usuário. [MIT]
* [CppUTest](https://github.com/cpputest/cpputest) - Framework de testes unitários e simulacros para C/C++. [BSD-3-clause]
* [CUTE](https://cute-test.com) - Testes unitárias C++ mais sencillas. [LGPL3]
* [CMocka](https://cmocka.org/) - Framework de testes unitários para C compatível com objetos simulados. [Apache2]
* [CppBenchmark](https://github.com/chronoxor/CppBenchmark) - Framework de benchmarks de desempenho para C++ com precisión de medición em nanosegundos. [MIT]
* [Cpptrace](https://github.com/jeremy-rifkin/cpptrace) - Biblioteca de trazas de pila C++ simples, portátil e autónoma, compatível com C++11 e posteriores. [MIT]
* [CppUnit](https://www.freedesktop.org/wiki/Software/cppunit/) - Adaptación de JUnit a C++. [LGPL2]
* [CrashCatch](https://github.com/keithpotz/CrashCatch) - Informes de fallos para C++ em uma um único cabeçalho: registra trazas de pila e cria volcados `.dmp` e `.txt`. [MIT] [website](https://keithpotz.github.io/CrashCatch)
* [CTest](https://cmake.org/cmake/help/v2.8.8/ctest.html) - Programa controlador de testes de CMake. [BSD]
* [dbg-macro](https://github.com/sharkdp/dbg-macro) - Macro dbg(…) para C++. [MIT]
* [DebugViewPP](https://github.com/CobaltFusion/DebugViewPP) - Visor de registros de depuración. [Boost]
* [Deleaker](https://www.deleaker.com) - Ferramenta para detectar fugas de recursos, incluindo fugas de memória, GDI e handles.
* [FakeIt](https://github.com/eranpeer/FakeIt) - Framework simples de objetos simulados para C++. [MIT]
* [fff](https://github.com/meekrosoft/fff) - Microframework para criar funções C falsas. [MIT]
* [Google Mock](https://github.com/google/googletest/blob/master/googlemock/README.md) - Biblioteca para escrever e usar classes simuladas de C++. [BSD]
* [Google Test](https://github.com/google/googletest) - Framework de testes C++ de Google. [BSD]
* [Hippomocks](https://github.com/dascandy/hippomocks) - Framework de objetos simulados em uma um único cabeçalho. [LGPL-2.1]
* [IceCream-Cpp](https://github.com/renatoGarcia/icecream-cpp) - Não vuelvas a usar cout/printf para depurar. [MIT]
* [ig-debugheap](https://github.com/deplinenoise/ig-debugheap) - Heap de depuración multiplataforma útil para encontrar erros de memória. [BSD]
* [libassert](https://github.com/jeremy-rifkin/libassert) - A biblioteca de aserciones C++ mais sobreingenierizada. [MIT]
* [libtap](https://github.com/zorgnax/libtap) - Escribe testes em C. [GPL2]
* [microprofile](https://github.com/jonasmr/microprofile) - Perfilador com interface web para várias plataformas. [Unlicense]
* [MinUnit](https://github.com/siu/minunit) - Framework mínimo de testes unitários para C, autónomo em um somente arquivo de cabeçalho. [MIT]
* [nanobench](https://github.com/martinus/nanobench) - Funcionalidade simples, rápida e precisa de microbenchmarking, em uma um único cabeçalho, para C++11/14/17/20. [MIT] [website](https://nanobench.ankerl.com)
* [Nanotimer](https://github.com/mattreecebentley/plf_nanotimer) - classe de temporizador multiplataforma simples e de baja sobrecarga para benchmarking. [zLib] [website](https://www.plflib.org/nanotimer.htm)
* [Nonius](https://github.com/libnonius/nonius) - Framework de microbenchmarks para C++. [CC]
* [Remotery](https://github.com/Celtoys/Remotery) - Perfilador em um único arquivo C, com visor web. [Apache2]
* [snitch](https://github.com/cschreib/snitch) - Framework de testes leve para C++20. [Boost]
* [Touca](https://github.com/trytouca/trytouca) - Sistema de testes de regresión de código aberto que puedes alojar por tu cuenta. [Apache2] [website](https://touca.io/)
* [UnitTest++](https://github.com/unittest-cpp/unittest-cpp) - Framework leve de testes unitários para C++. [MIT/X Consortium license]
* [Unity](https://github.com/ThrowTheSwitch/Unity) - Testes unitárias sencillas para C. [MIT]
* [utest.h](https://github.com/sheredom/utest.h) - Framework de testes unitários para C e C++, em uma um único cabeçalho. [Unlicense]
* [utl::profiler](https://github.com/DmitriBogdanov/UTL/blob/master/docs/module_profiler.md) - Perfilador para C++17 em uma um único cabeçalho. [MIT]
* [μt](https://github.com/boost-experimental/ut) - Framework μ (micro) de testes unitários para C++20, em uma cabeçalho/um módulo e sem macros. [Boost]
* [VLD](https://kinddragon.github.io/vld//) - Visual Leak Detector. Sistema gratuito, robusto e de código aberto para detectar fugas de memória em Visual C++.
* [heaptrack](https://github.com/KDE/heaptrack) - Perfilador de memória heap para Linux. [LGPL-2.1]

<a id="documentation"></a>
## Documentação

* [Doxide](https://github.com/lawmurray/doxide) - Documentação moderna para C++ moderno: se configura com YAML e genera Markdown. [Apache 2.0] [website](https://doxide.org)
* [doxygen](https://github.com/doxygen/doxygen) :zap: - Ferramenta padrão de facto para gerar documentação a partir de fuentes C++ anotadas. [GPL2] [website](https://www.doxygen.org)
* [doxyrest](https://github.com/vovkos/doxyrest) - Compilador de XML de Doxygen a reStructuredText para Sphinx. [MIT]
* [hdoc](https://github.com/hdoc/hdoc) - Ferramenta moderna de documentação para C++. [AGPL/Proprietary] [website](https://hdoc.io)
* [Natural Docs](https://github.com/NaturalDocs/NaturalDocs) - Natural Docs é um gerador de documentação de código aberto para vários linguagens de programação. [AGPL/Proprietary] [website](https://www.naturaldocs.org)
* [Sourcey](https://github.com/sourcey/sourcey) - Gerador de documentação estática que consume XML de Doxygen junto com OpenAPI, godoc, MCP e Markdown. [AGPL-3.0] [website](https://sourcey.com)
* [Sphinx](https://github.com/sphinx-doc/sphinx) - Sphinx facilita a criação de documentação inteligente e atractiva. [BSD-2-Clause] [website](https://www.sphinx-doc.org)

## DSP
*Processamento digital de señales.*

* [DSPFilters](https://github.com/vinniefalco/DSPFilters) - Coleção de classes C++ útiles para o processamento digital de señales. [MIT]
* [fCWT](https://github.com/fastlib/fCWT) - Transformada wavelet contínua rápida (fCWT), biblioteca para calcular rapidamente a CWT. [Apache-2.0]
* [FFTW](https://www.fftw.org/) - Biblioteca C para calcular a DFT em uma ou várias dimensiones. [GPL]
* [iir1](https://github.com/berndporr/iir1) - Biblioteca C++ de filtros IIR em tempo real. [MIT]
* [kissfft](https://github.com/mborgerding/kissfft) - Biblioteca de transformada rápida de Fourier (FFT) que tenta mantê-lo simple. [BSD-3-Clause]
* [pocketfft](https://github.com/mreineck/pocketfft) - Implementação de FFT baseada em FFTPack, com várias mejoras. [BSD-3-Clause]
* [wavelib](https://github.com/rafat/wavelib) - Implementação C de transformadas wavelet 1D e 2D. [BSD-3-Clause]

<a id="font"></a>
## Fontes
*Bibliotecas para analisar e manipular arquivos de fuentes.*

* [Fontconfig](https://gitlab.freedesktop.org/fontconfig/fontconfig) - Biblioteca para configurar e personalizar fuentes. [MIT] [website](https://www.freedesktop.org/wiki/Software/fontconfig/)
* [FreeType](https://www.freetype.org/) - FreeType é uma biblioteca de software disponível gratuitamente para renderizar fuentes. [FTL & GPLv2]
* [otfcc](https://github.com/caryll/otfcc) - Biblioteca e utilidad C para analisar e escrever arquivos de fuentes OpenType. [Apache-2.0]
* [harfbuzz](https://github.com/harfbuzz/harfbuzz) - Motor de composición tipográfica de texto. [Old MIT]
* [libschrift](https://github.com/tomolt/libschrift) - Biblioteca leve de renderização de fuentes TrueType. [ISC]
* [SheenBidi](https://github.com/Tehreer/SheenBidi) - Implementação avanzada do algoritmo bidireccional Unicode. [Apache-2.0]

<a id="game-engine"></a>
## Motor de Jogos

* [Acid](https://github.com/Equilibrium-Games/Acid) - Motor de jogos Vulkan de C++17 de alto velocidade. [MIT]
* [Allegro](https://liballeg.org/) - Biblioteca multiplataforma dirigida principalmente a videojuegos e programação multimídia. [zlib]
* [Axmol Engine](https://github.com/axmolengine/axmol) - Motor de jogos multiplataforma para desktop, móveis e XBOX (UWP), derivado de Cocos2d-x-4.0. [MIT] [website](https://axmol.dev/)
* [Cocos2d-x](https://www.cocos2d-x.org/) - Framework multiplataforma para criar jogos 2D, livros interativos, demonstrações e outras aplicações gráficas. [MIT]
* [Corange](https://github.com/orangeduck/Corange) - Motor de jogos escrito em C puro, SDL e OpenGL. [BSD]
* [crown](https://github.com/dbartolini/crown) - Motor de jogos de objetivo geral baseado em dados, escrito do zero em C++ ortodoxo com uma filosofia de design minimalista e orientada a dados. [MIT]
* [delta3d](https://sourceforge.net/projects/delta3d/) - Plataforma de simulação robusta. [LGPL2]
* [EnTT](https://github.com/skypjack/entt) - Os videojuegos se encuentran com o C++ moderno. [MIT]
* [GamePlay](https://github.com/gameplay3d/GamePlay) - Framework de jogos nativo C++ e multiplataforma para criar jogos móveis e para desktop em 2D/3D. [Apache2]
* [Godot](https://github.com/godotengine/godot) - Motor de jogos de código aberto, com todas as funções e licença MIT. [MIT]
* [Grit](https://github.com/grit-engine/grit-engine) - Proyecto comunitario para criar um motor de jogos gratuito com o que desenvolver jogos 3D de mundo aberto. [MIT]
* [Halley](https://github.com/amzeratul/halley) - Motor de jogos leve, escrito em C++14, com um sistema de entidades e componentes «autêntico». [Apache 2.0]
* [Hazel Game Engine](https://github.com/TheCherno/Hazel) - Hazel é principalmente um motor de renderização e aplicações interactivas para Windows, em fase inicial. [Apache-2.0 license]
* [IX-Ray Platform](https://github.com/ixray-team/ixray-1.6-stcop) - Bifurcación do motor X-Ray 1.6 que busca mejorar a experiencia de jogo e simplificar o desenvolvimento de modificaciones. [Modified MIT/non-commercial only]
* [JNGL](https://github.com/jhasse/jngl/) - Biblioteca 2D para Linux, Windows, macOS, Android, iOS, Xbox, Nintendo Switch e a web. [zlib] [website](https://bixense.com/jngl/)
* [KlayGE](https://github.com/gongminmin/KlayGE) - Motor de jogos multiplataforma e de código aberto com arquitetura baseada em plugins. [GPLv2] [website](https://www.klayge.org/)
* [nCine](https://github.com/nCine/nCine) - Motor de jogos 2D multiplataforma focado em o desempenho, escrito em C++11 e com scripting opcional em Lua. [MIT] [website](https://ncine.github.io/)
* [o3de](https://github.com/o3de/o3de) - Motor 3D multiplataforma, em tempo real e de código aberto, baseado em Amazon Lumberyard. [Apache2] [website](https://o3de.org/)
* [OpenXRay](https://github.com/OpenXRay/xray-16) - Motor X-Ray modificado pela a comunidade e utilizado na série de jogos S.T.A.L.K.E.R. [Modified BSD/non-commercial only]
* [Oxygine](https://oxygine.org/) - Motor de jogos C++ 2D multiplataforma. [MIT]
* [Panda3D](https://github.com/panda3d/panda3d) - Motor de jogos e framework para renderização 3D e desenvolvimento de jogos em programas Python e C++. [Modified BSD] [website](https://www.panda3d.org/)
* [PixelGameEngine](https://github.com/OneLoneCoder/olcPixelGameEngine) - Distribución oficial de olcPixelGameEngine, ferramenta utilizada nos vídeos e projetos de YouTube de javidx9. [OLC3]
* [Polycode](https://github.com/ivansafrin/Polycode) - Framework multiplataforma para programação criativa em C++ (com bindings para Lua). [MIT]
* [quakeforge](https://github.com/quakeforge/quakeforge) - Rama do código original do motor Quake mantenida activamente e desenvolvida durante mais de 20 anos. [GPL-2.0]
* [raylib](https://github.com/raysan5/raylib) - Biblioteca simples e fácil de usar para disfrutar da programação de videojuegos. [zlib/libpng] [website](https://www.raylib.com/)
* [Spring](https://github.com/spring/spring) - Poderosa motor gratuito e multiplataforma para jogos de estrategia em tempo real (RTS). [GPLv2/GPLv3] [website](https://springrts.com/)
* [Torque2D](https://github.com/TorqueGameEngines/Torque2D) - Motor C++ de código aberto e multiplataforma criado para desenvolver jogos 2D. [MIT] [website](https://torque3d.org/torque2d)
* [Torque3D](https://github.com/TorqueGameEngines/Torque3D) - Motor C++ de código aberto criado para desenvolver jogos 3D. [MIT] [website](https://torque3d.org/torque3d)
* [toy engine](https://github.com/hugoam/toy) - toy é um motor de jogos C++ leve e modular que oferece modismos sencillos e expresivos de C++ para diseñar jogos 2D ou 3D completos em iteraciones rápidas.
* [Urho3D](https://urho3d.github.io/) - Motor de jogos 2D e 3D gratuito, leve e multiplataforma, implementado em C++. muito inspirado em OGRE e Horde3D. [MIT]
* [Zodiac Engine](https://github.com/JeanPhilippeKernel/RendererEngine) - Motor de renderização 3D e editor (ZEngine) de código aberto e multiplataforma, escrito em C++20 com Vulkan. [MIT]
* [ezEngine](https://github.com/ezEngine/ezEngine) - Motor de jogos gratuito e de código aberto escrito em C++. Seu filosofia é ser modular e flexível para adaptarse a muitos casos de uso. [MIT] [website](https://ezengine.net/)

<a id="graph"></a>
## Grafos

* [CXXGraph](https://github.com/ZigRazor/CXXGraph) - Biblioteca gratuita de grafos para C++17, somente de cabeçalho, para representación e execução de algoritmos. [AGPL-3.0]
* [Graaf](https://github.com/bobluppes/graaf) - Biblioteca de grafos C++20 leve e de objetivo geral. [MIT] [website](https://bobluppes.github.io/graaf/)

## GUI
*Interface gráfica de usuário*

* [Boden](https://github.com/AshampooSystems/boden) - Framework GUI nativo, móvel e multiplataforma. [GPL/LGPL/Proprietary] [website](https://www.boden.io)
* [Brisk](https://github.com/brisklib/brisk) - Framework GUI C++20 multiplataforma, com MVVM e capacidades reactivas. Renderização escalável e acelerado por GPU. [GPL/Proprietary] [website](https://brisklib.com)
* [CEGUI](https://cegui.org.uk/) - Biblioteca GUI flexível e multiplataforma.
* [Elements](https://github.com/cycfi/elements) - Biblioteca GUI leve, de grano fino, independente da resolución e modular. [MIT]
* [FLTK](https://www.fltk.org/index.php) - Kit de ferramentas GUI C++ rápido, leve e multiplataforma. [LGPL2]
* [FOX Toolkit](https://fox-toolkit.org) - Kit de ferramentas de widgets multiplataforma e de código aberto. [LGPL]
* [GacUI](https://github.com/vczh-libraries/GacUI) - Interface de usuário C++ acelerada por GPU, com ferramentas de desenvolvimento WYSIWYG, compatibilidade com XML, enlace de dados integrado e funções MVVM. [Ms-PL]
* [GTK+](https://www.gtk.org/) - Kit de ferramentas multiplataforma para criar interfaces gráficas de usuário. [LGPL]
* [gtkmm](https://www.gtkmm.org/en/) - Interface oficial de C++ para a popular biblioteca GUI GTK+. [LGPL]
* [imgui](https://github.com/ocornut/imgui) - Interface gráfica de usuário de modo inmediato com dependências mínimas. [MIT]
* [implot](https://github.com/epezent/implot) - Widgets de trazado em modo inmediato para imgui. [MIT]
* [iup](https://www.tecgraf.puc-rio.br/iup) - Kit de ferramentas multiplataforma para criar interfaces gráficas de usuário. [MIT]
* [libui](https://github.com/andlabs/libui) - Biblioteca GUI C simples e portátil (mas não inflexible) que utiliza as tecnologías GUI nativas de cada plataforma compatível. [MIT]
* [MyGUI](https://github.com/MyGUI/mygui) - Interface gráfica de usuário rápida, flexível e simples. [MIT]
* [nana](https://github.com/cnjinhao/nana) - Nana é uma biblioteca multiplataforma para programar interfaces gráficas com o estilo do C++ moderno. [Boost]
* [NanoGui](https://github.com/mitsuba-renderer/nanogui) - Biblioteca de widgets minimalista e multiplataforma para OpenGL 3.x e posteriores. [BSD]
* [NAppGUI](https://github.com/frang75/nappgui_src) - SDK para criar aplicações para desktop multiplataforma em ANSI-C. [MIT] [website](https://nappgui.com/en/home/web/home.html)
* [nuklear](https://github.com/Immediate-Mode-UI/Nuklear) - Biblioteca GUI ANSI C de uma um único cabeçalho. [PublicDomain]
* [QCustomPlot](https://qcustomplot.com/) - Widget de trazado Qt sem dependências adicionales. [GPLv3]
* [Qwt](https://qwt.sourceforge.net/) - Widgets Qt para aplicações técnicas. [Own based on LGPL]
* [QwtPlot3D](https://qwtplot3d.sourceforge.net/) - Biblioteca de programação C++ baseada em Qt/OpenGL e repleta de funções, que oferece esencialmente vários widgets 3D. [zlib]
* [RmlUi](https://github.com/mikke89/RmlUi) - Evolución da biblioteca de interface de usuário HTML/CSS. Bifurcación de libRocket. [MIT]
* [Saucer](https://github.com/saucer/saucer) - Biblioteca moderna e multiplataforma de vistas web para C++. [MIT]
* [Sciter](https://sciter.com/) - Sciter é um motor integrável de HTML/CSS/scripting destinado a servir como capa de interface de usuário para aplicações para desktop modernas. [Free/Commercial]
* [Slint](https://github.com/slint-ui/slint) - Kit de ferramentas GUI leve para desktop e sistemas integrados. [GPL/Free/Proprietary] [website](https://slint.dev/)
* [TGUI](https://github.com/texus/TGUI) - GUI moderna e multiplataforma para C++. [Zlib] [website](https://tgui.eu/)
* [WebUI](https://github.com/webui-dev/webui) - Usa cualquier navegador web como interface gráfica, com o linguagem que prefieras em o backend e HTML5 em o frontend. [MIT] [website](https://webui.me/)
* [wxCharts](https://github.com/wxIshiko/wxCharts) - Biblioteca para criar gráficos em aplicações wxWidgets. [MIT] [website](https://www.wxishiko.com/wxCharts/)
* [wxWidgets](https://wxwidgets.org/) - Biblioteca C++ que permite aos desenvolvedores criar aplicações para Windows, Mac OS X, Linux e outras plataformas com uma única base de código. [Own LGPL]
* [Yue](https://github.com/yue/yue) - Biblioteca para criar aplicações GUI nativas e multiplataforma. [LGPLv2]
* [GuiLite](https://github.com/idea4good/GuiLite) - A biblioteca GUI somente de cabeçalho mais pequena (5 KLOC) para todas as plataformas. [Apache-2.0]
* [LCUI](https://github.com/lc-soft/LCUI) - Pequena biblioteca C para criar interfaces de usuário com C, XML e CSS. [MIT]

<a id="graphics"></a>
## Gráficos

* [assimp](https://github.com/assimp/assimp) - Open Asset Import Library (assimp) é uma biblioteca multiplataforma para importar modelos 3D que oferece uma API comum para distintos formatos de arquivos de recursos 3D. [BSD-3-Clause] [website](https://www.assimp.org)
* [bgfx](https://github.com/bkaradzic/bgfx) - Biblioteca de renderização multiplataforma. [BSD]
* [Blend2D](https://github.com/blend2d/blend2d) - Motor de gráficos vectoriales 2D impulsionado por um compilador JIT. [Zlib] [website](https://blend2d.com/)
* [Cairo](https://www.cairographics.org/) - Biblioteca de gráficos 2D compatível com vários dispositivos de saída. [LGPL2 or Mozilla MPL]
* [C-Turtle](https://github.com/walkerje/C-Turtle) - Biblioteca de gráficos de tortuga C++11, somente de cabeçalho, que actúa como wrapper de CImg. [MIT]
* [Diligent Engine](https://github.com/DiligentGraphics/DiligentEngine) - Biblioteca moderna e multiplataforma de gráficos 3D de baixo nível. [Apache2]
* [DirectXTK](https://github.com/Microsoft/DirectXTK) - Coleção de classes auxiliares para escrever código DirectX 11.x em C++. [MIT]
* [GLFW](https://github.com/glfw/glfw) - Biblioteca simples e multiplataforma para gestionar OpenGL. [zlib/libpng]
* [GLFWPP](https://github.com/janekb04/glfwpp) - Wrapper fino e moderno somente de cabeçalho para GLFW, em C++17. [MIT]
* [Harfang 3D](https://github.com/harfang3d/harfang3d) Biblioteca de visualização 3D utilizable em C++, Python, Lua e Go. Baseada em BGFX. [GPLv3/LGPLv3/Proprietary] [website](https://www.harfang3d.com)
* [herebedragons](https://github.com/kosua20/herebedragons) - Escena 3D básica implementada com vários motores, frameworks ou API. [MIT] [website](https://simonrodriguez.fr/dragon/)
* [Horde3D](https://github.com/horde3d/Horde3D) - Motor pequeno de renderização e animación 3D. [EPL]
* [Ion](https://github.com/google/ion) - Conjunto de bibliotecas pequeno e eficiente para criar aplicações cliente ou servidor multiplataforma que utilizam gráficos 3D. [Apache2] [website](https://google.github.io/ion/)
* [Irrlicht](https://irrlicht.sourceforge.net/) - Motor 3D de alto desempenho e em tempo real, escrito em C++. [zlib]
* [libigl](https://github.com/libigl/libigl) - Biblioteca simples de processamento geométrico em C++. [MPL2]
* [LLGL](https://github.com/LukasBanana/LLGL) - Low Level Graphics Library (LLGL) é uma capa de abstração leve para as API gráficas modernas. [BSD-3-Clause]
* [LunaSVG](https://github.com/sammycage/lunasvg) - Biblioteca autónoma de renderização SVG em C++. [MIT]
* [magnum](https://github.com/mosra/magnum) - Middleware gráfico C++11/C++14 leve e modular para jogos e visualização de dados. [MIT] [website](https://magnum.graphics)
* [MESHLIB](https://github.com/meshinspector/meshlib) - SDK para impulsar a eficiencia do processamento de dados 3D. [Free/Commercial] [website](https://meshlib.io/)
* [micro-gl](https://github.com/micro-gl/micro-gl) - Gráficos vectoriales CPU C++11 em tempo real, integrables e somente de cabeçalho. Não requiere biblioteca padrão, FPU ni GPU. [CUSTOM] [website](https://micro-gl.github.io/docs/microgl)
* [NanoVG](https://github.com/memononen/nanovg) - Biblioteca antialiasing de dibujo vectorial 2D sobre OpenGL para interfaces e visualizaciones. [Zlib]
* [Ogre 3D](https://github.com/OGRECave) :zap: - Motor de renderização 3D flexível e em tempo real, orientado a cenas (a diferença de um motor de jogos), escrito em C++. [MIT] [website](https://www.ogre3d.org)
* [OpenSceneGraph](https://www.openscenegraph.org/) - Kit de ferramentas de gráficos 3D de alto desempenho e código aberto. [OSGPL]
* [OpenSubdiv](https://github.com/PixarAnimationStudios/OpenSubdiv) - Biblioteca de Pixar para evaluar e renderizar superficies de subdivisión em CPU e GPU. [Modified Apache2]
* [OpenVDB](https://www.openvdb.org/) - Biblioteca e ferramentas para almacenar, editar e renderizar conjuntos de dados volumétricos. [MPL2]
* [Panda3D](https://www.panda3d.org/) - Framework para renderização 3D e desenvolvimento de jogos em Python e C++. [BSD]
* [Partio](https://github.com/wdas/partio) - Biblioteca para manejar dados de partículas, compatível com os formatos de arquivo mais comuns. [Modified BSD]
* [Skia](https://github.com/google/skia) - Biblioteca gráfica 2D completa para dibujar texto, geometrías e imagens. [BSD] [website](https://skia.org/)
* [ThorVG](https://github.com/thorvg/thorvg) - Biblioteca Portátil e independente da plataforma para dibujar cenas e animaciones vectoriales, incluindo SVG e Lottie. [MIT] [website](https://www.thorvg.org/)
* [TinySpline](https://github.com/msteinbeck/tinyspline) - Biblioteca ANSI C pequena mas poderosa para interpolar, transformar e consultar curvas NURBS, B-spline e Bézier arbitrarias. [MIT]
* [urho3d](https://github.com/urho3d/Urho3D) - Motor multiplataforma de renderização e jogos. [Many different, mostly MIT]
* [Yocto/GL](https://github.com/xelatihy/yocto-gl) - Pequeñas bibliotecas C++ para gráficos fotorrealistas baseados em dados. [MIT]
* [olive.c](https://github.com/tsoding/olive.c) - Biblioteca simples de gráficos 2D. [MIT]

<a id="image-processing"></a>
## Processamento de Imagens

* [avir](https://github.com/avaneev/avir) - Redimensionador de imagens HDR profissional de alto qualidade e redimensionador Lanczos SIMD rápido. [MIT]
* [Boost.GIL](https://github.com/boostorg/gil) - Biblioteca genérica de imagens. [Boost] [website](https://boost.org/libs/gil)
* [BitmapPlusPLus](https://github.com/baderouaich/BitmapPlusPlus) - Biblioteca C++ de mapas de bits simples, rápida e somente de cabeçalho. [MIT]
* [CImg](https://cimg.eu/) - Kit de ferramentas C++ pequeno e de código aberto para processamento de imagens. [Own LGPL or GPL]
* [CxImage](https://www.codeproject.com/Articles/1300/CxImage) - Biblioteca de processamento e conversão de imagens para cargar, guardar, mostrar e transformar imagens BMP, JPEG, GIF, PNG, TIFF, MNG, ICO, PCX, TGA, WMF, WBMP, JBG e J2K. [zlib]
* [Dlib](https://github.com/davisking/dlib) :zap: - Kit moderno de ferramentas C++11 para aprendizado automático, visão artificial, otimização numérica e aprendizado profundo. [Boost] [website](https://dlib.net/)
* [fpng](https://github.com/richgel999/fpng) - Lector e escritor C++ de PNG superrápido. [Unlicense]
* [FreeImage](https://freeimage.sourceforge.net/) - Biblioteca de código aberto compatível com os formatos de imagem gráfica populares e outros que precisam as aplicações multimídia actuales. [GPL2 or GPL3]
* [GD](https://github.com/libgd/libgd) - Biblioteca gráfica GD, conocida por seu uso em PHP para cargar e manipular imagens e gerar miniaturas. [custom permissive license, requires mention in user docs] [website](https://libgd.github.io/)
* [DCMTK](https://dicom.offis.de/dcmtk.php.en) - Kit de ferramentas DICOM.
* [GDCM](https://gdcm.sourceforge.net/wiki/index.php/Main_Page) - Biblioteca DICOM comunitaria.
* [ITK](https://www.itk.org/) - Sistema multiplataforma e de código aberto para a análise de imagens. [Apache2 from ITK 4.0]
* [Jpegli](https://github.com/google/jpegli) - Implementação mejorada de codificador e decodificador JPEG. [BSD-3-Clause]
* [Leptonica](https://github.com/DanBloomberg/leptonica) - Leptonica é uma biblioteca de código aberto com software de amplia utilidad para aplicações de processamento e análise de imagens. [BSD-2-Clause] [website](https://leptonica.org/index.html)
* [libavif](https://github.com/AOMediaCodec/libavif) - Biblioteca para codificar e decodificar arquivos .avif. [BSD-2-Clause]
* [libfacedetection](https://github.com/ShiqiYu/libfacedetection) - Biblioteca de código aberto para detectar rostros em imagens. A velocidade de detección pode alcanzar 1500 FPS. [BSD]
* [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo) - Códec de imagens JPEG que utiliza instrucciones SIMD para acelerar a codificación e decodificación JPEG básica. [IJG & BSD-3-Clause & zlib] [website](https://libjpeg-turbo.org/)
* [libjxl](https://github.com/libjxl/libjxl) - Implementação de referencia do formato de imagem JPEG XL. [BSD-3-Clause]
* [libpng](https://github.com/pnggroup/libpng) - Biblioteca de referencia para aplicações que leen, criam e manipulan arquivos de imagens rasterizadas PNG (Portátil Network Graphics). [libpng-2.0] [website](https://libpng.sourceforge.io/)
* [libspng](https://github.com/randy408/libspng) - Alternativa simples e moderna a libpng. [BSD-2] [website](https://libspng.org/)
* [libvips](https://github.com/jcupitt/libvips) - Biblioteca rápida de processamento de imagens com baixo consumo de memória. [LGPL] [website](https://www.vips.ecs.soton.ac.uk/)
* [LodePNG](https://github.com/lvandeve/lodepng) - Codificador e decodificador PNG em C e C++. [Zlib]
* [Magick++](https://imagemagick.org/script/magick++.php) - Interfaces de programas ImageMagick para C++. [Apache2]
* [MagickWnd](https://imagemagick.org/script/magick-wand.php) - Interfaces de programas ImageMagick para C. [Apache2]
* [MozJPEG](https://github.com/mozilla/mozjpeg) - Codificador JPEG mejorado. [BSD/BSD-3-Clause/ZLIB]
* [OpenCV](https://github.com/opencv) :zap: - visão artificial de código aberto. [Apache2] [website](https://opencv.org)
* [OpenEXR](https://www.openexr.com/) - Biblioteca multiplataforma para imagens de alto rango dinâmico. [Modified BSDF]
* [OpenImageIO](https://github.com/OpenImageIO/oiio) - Poderosa biblioteca para manipular imagens e texturas, compatível com muitos formatos RAW e com pérdida habituales. [Modified BSD]
* [OpenJPEG](https://github.com/uclouvain/openjpeg) - Códec JPEG 2000 de código aberto escrito em linguagem C. [BSD-2-Clause]
* [PlutoFilter](https://github.com/sammycage/plutofilter) - Biblioteca C de filtros de imagem em uma um único cabeçalho e sem asignaciones. [MIT]
* [QOI](https://github.com/phoboslab/qoi) - O «Quite OK Image Format», para comprimir imagens de forma rápida e sem perdas. [MIT]
* [SAIL](https://github.com/happy-sea-fox/sail) - Biblioteca multiplataforma de decodificação de imagens, fácil de usar e com códecs de imagem conectables. [MIT]
* [Simd](https://github.com/ermig1979/Simd) - Biblioteca C++ de processamento de imagens que utiliza SIMD: SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX-512, VMX(Altivec), VSX(Power7) e NEON para ARM. [MIT]
* [stb-image](https://github.com/nothings/stb/blob/master/stb_image.h) - Biblioteca STB de carga de imagens em uma um único cabeçalho. [Public Domain]
* [tesseract-ocr](https://github.com/tesseract-ocr) - Motor de OCR. [Apache2]
* [TinyDNG](https://github.com/syoyo/tinydng) - Lector e escritor de DNG/TIFF Tiny para C++, somente de cabeçalho. [MIT]
* [TinyEXIF](https://github.com/cdcseacave/TinyEXIF) - Pequena biblioteca de análise EXIF e XMP para JPEG em C++, compatível com ISO. [MIT]
* [TinyTIFF](https://github.com/jkriege2/TinyTIFF) - Biblioteca leve de leitura/gravação TIFF. [GPL-3.0]
* [Video++](https://github.com/matt-42/vpp) - Biblioteca C++14 de alto desempenho para processamento de vídeo e imagens. [MIT]
* [VIGRA](https://github.com/ukoethe/vigra) - Biblioteca genérica de visão artificial em C++ para análise de imagens. [MIT X11]
* [VTK](https://www.vtk.org/) - Sistema de software de código aberto e disponibilidad gratuita para gráficos por computadora 3D, processamento e visualização de imagens. [BSD]
* [OpenImageDenoise](https://github.com/OpenImageDenoise/oidn) - Biblioteca de eliminación de ruído de alto desempenho e qualidade para imagens trazadas por rayos. [Apache-2.0] [website](https://www.openimagedenoise.org/)
* [bitmap](https://github.com/ArashPartow/bitmap) - Biblioteca C++ de mapas de bits para ler, escrever e processar arquivos de imagem BMP. [MIT]

<a id="internationalization"></a>
## Internacionalização

* [gettext](https://www.gnu.org/software/gettext/) - «gettext» de GNU. [GPL2]
* [IBM ICU](https://site.icu-project.org/) - Conjunto de bibliotecas C/C++ e Java que oferecem compatibilidade com Unicode e a globalización. [ICU]
* [libiconv](https://www.gnu.org/software/libiconv/) - Biblioteca para convertir entre distintas codificaciones de caracteres. [GPL]
* [simdutf](https://github.com/simdutf/simdutf) - Rutinas Unicode (UTF-8, UTF-16, UTF-32): miles de millones de caracteres por segundo por meio de SSE2, AVX2, NEON e AVX-512. [Apache-2/MIT]
* [uni-algo](https://github.com/uni-algo/uni-algo) - Implementação de algoritmos Unicode para C/C++. [Unlicense or MIT]
* [utf8.h](https://github.com/sheredom/utf8.h) - Funções de strings UTF-8 para C e C++, em uma um único cabeçalho. [Unlicense]
* [utf8proc](https://github.com/JuliaStrings/utf8proc) - Biblioteca C simples para processar dados Unicode UTF-8. [MIT]

<a id="inter-process-communication"></a>
## Comunicação entre Processos

* [Apache Thrift](https://thrift.apache.org/) - IPC/RPC eficiente entre linguagens; funciona com C++, Java, Python, PHP, C# e muitos outros. Desenvolvido originalmente por Facebook. [Apache2]
* [Boost.Interprocess](https://github.com/boostorg/interprocess) - Biblioteca Boost somente de cabeçalho compatível com memória compartida a nível de kernel e arquivos asignados em memória, com mecanismos de sincronización integrados (semáforos, mutexes e mais). [Boost] [website](https://boost.org/libs/interprocess)
* [bRPC](https://github.com/apache/brpc) - bRPC é um framework RPC de nível industrial em C++, utilizado frequentemente em sistemas de alto desempenho para busca, armazenamento, aprendizado automático, publicidad, recomendaciones, etc. [Apache2] [website](https://brpc.apache.org/)
* [Cap'n Proto](https://github.com/capnproto/capnproto) - Formato rápido de intercambio de dados e sistema RPC baseado em capacidades. [MIT] [website](https://capnproto.org/)
* [eCAL](https://github.com/continental/ecal) - Pub/sub, cliente/servidor, C++/Python/C# e vários protocolos de mensajería (protobuf, capnproto, etc.). [Apache2] [website](https://www.ecal.io/)
* [gRPC](https://github.com/grpc/grpc) - Framework RPC de objetivo geral, de alto desempenho e código aberto. [BSD] [website](https://www.grpc.io/)
* [Ice](https://github.com/zeroc-ice/ice) - Framework RPC abrangente compatível com C++, C#, Java, JavaScript, Python e mais. [GPLv2]
* [iceoryx](https://github.com/eclipse-iceoryx/iceoryx) - Framework de comunicação entre procesos realmente sem copias para sistemas críticos de segurança, com bindings para C e Rust. Funciona em Linux, QNX, Windows, Mac OS e FreeBSD. [Apache2] [website](https://iceoryx.io/)
* [libjson-rpc-cpp](https://github.com/cinemast/libjson-rpc-cpp) - Framework JSON-RPC para servidores e clientes C++. [MIT]
* [nanomsg](https://github.com/nanomsg/nanomsg) - Implementação simples e de alto desempenho de vários «protocolos de escalabilidade». [MIT] [website](https://nanomsg.org/)
* [nng](https://github.com/nanomsg/nng) - nanomsg de próxima geração: biblioteca de mensajería leve e sem intermediario. [MIT] [website](https://nanomsg.github.io/nng/)
* [rpclib](https://github.com/rpclib/rpclib) - Biblioteca moderna de cliente e servidor msgpack-RPC para C++. [MIT]
* [simple-rpc-cpp](https://github.com/pearu/simple-rpc-cpp) - Gerador simples de wrappers RPC para funções C/C++. [BSD]
* [SRPC](https://github.com/sogou/srpc) - Sistema RPC leve compatível com múltiplos protocolos e OpenTelemetry. [Apache2]
* [WAMP](https://wamp.ws/) - Fornece padrões de mensajería RPC e pub/sub. (diversas implementações e linguagens)
* [xmlrpc-c](https://xmlrpc-c.sourceforge.net/) - Biblioteca RPC leve baseada em XML e HTTP. [BSD]

## JSON

* [Boost.PropertyTree](https://github.com/boostorg/property_tree) - Analisador/gerador de árvores de propiedades que pode analisar arquivos XML/JSON/INI/Info. [Boost] [website](https://boost.org/libs/property_tree)
* [cJSON](https://github.com/DaveGamble/cJSON) - Analisador JSON ultraleve em ANSI C. [MIT]
* [DAW JSON Link](https://github.com/beached/daw_json_link) - Serialização e análise JSON rápidos e prácticos em C++. [BSL-1.0]
* [frozen](https://github.com/cesanta/frozen) - Analisador e gerador JSON para C/C++. [GPL & GPL2]
* [Glaze](https://github.com/stephenberry/glaze) - Biblioteca de interfaces e JSON em memória, extremamente rápida, para C++ moderno. [MIT]
* [Jansson](https://github.com/akheron/jansson) - Biblioteca C para codificar, decodificar e manipular dados JSON. [MIT]
* [jbson](https://github.com/chrismanning/jbson) - jbson é uma biblioteca para criar e recorrer dados BSON e documentos JSON em C++14. [Boost]
* [JeayeSON](https://github.com/jeaye/jeayeson) - Biblioteca JSON C++ muito razonable e somente de cabeçalho. [BSD]
* [Jsmn](https://github.com/zserge/jsmn) - Analisador JSON minimalista em C. [MIT]
* [json](https://github.com/nlohmann/json) :zap: - JSON para C++ moderno. [MIT] [website](https://json.nlohmann.me)
* [json.cpp](https://github.com/jart/json.cpp) - Biblioteca barroca de análise/serialização JSON para C++. [Apache-2.0]
* [json.h](https://github.com/sheredom/json.h) - Solución simples de uma cabeçalho/uma código-fonte para analisar JSON em C e C++. [Unlicense]
* [json-build](https://github.com/lcsmuller/json-build) - Serializador JSON diminuto, sem asignaciones, para C89. [MIT]
* [json-c](https://github.com/json-c/json-c) - Implementação de JSON em C. [MIT]
* [jsoncons](https://github.com/danielaparker/jsoncons) - Biblioteca C++ somente de cabeçalho para JSON e formatos binarios similares, com JSONPointer, JSONPatch, JSONPath e JMESPath. [Boost]
* [JsonCpp](https://github.com/open-source-parsers/jsoncpp) - Biblioteca C++ para trabajar com JSON. [MIT]
* [Jsonifier](https://github.com/RealTimeChris/Jsonifier) - Umas pocas classes para analisar e serializar objetos de/hacia JSON com grande rapidez. [MIT]
* [jsonParse](https://github.com/liufeigit/jsonParse) - Analisador JSON simples em ANSI C. [MIT]
* [json-parser](https://github.com/udp/json-parser) - Analisador JSON Portátil em ANSI C com uma huella muito pequena. [BSD]
* [json-struct](https://github.com/jorgen/json_struct) - Analisador JSON de alto desempenho, em uma um único cabeçalho, para convertir de e hacia estruturas C++. [MIT]
* [json-voorhees](https://github.com/tgockel/json-voorhees) - Biblioteca JSON para C++, compatível com C++11. rápida, sem dependências e fácil de usar para desenvolvedores. [Apache2]
* [JSON Toolkit](https://github.com/sourcemeta/jsontoolkit) - Biblioteca C++20 para JSON, JSON Pointer, JSON Schema e JSONL. [AGPL/Commercial]
* [jute](https://github.com/amir-s/jute) - Analisador JSON C++ muito simples. [PublicDomain]
* [libjson](https://github.com/vincenthz/libjson) - Biblioteca C para analisar e imprimir JSON, fácil de integrar com cualquier modelo. [LGPL]
* [libjson](https://sourceforge.net/projects/libjson/) - Biblioteca JSON leve. [?]
* [LIBUCL](https://github.com/vstakhov/libucl) :zap: - Analisador da biblioteca de configuração universal. [BSD-2-Clause]
* [meojson](https://github.com/MistEO/meojson) - Motor de serialização JSON/JSON5 C++ de próxima geração | Sem dependências | Somente cabeçalho | Libera o potencial de JSON. [MIT]
* [parson](https://github.com/kgabis/parson) - Parson é uma biblioteca JSON leve escrita em C. [MIT]
* [PicoJSON](https://github.com/kazuho/picojson) - Analisador e serializador JSON para C++, somente de cabeçalho. [BSD]
* [qt-json](https://github.com/gaudecker/qt-json) - classe simples para analisar dados JSON em uma jerarquía QVariant e viceversa. [GPLv3]
* [RapidJSON](https://github.com/miloyip/rapidjson) :zap: - Analisador/gerador JSON rápido para C++, com API de estilo SAX e DOM. [MIT] [website](https://rapidjson.org)
* [sajson](https://github.com/chadaustin/sajson) - Analisador JSON leve e de desempenho extremamente alto para C++11. [MIT]
* [simdjson](https://github.com/lemire/simdjson) - Biblioteca JSON extremamente rápida que pode analisar gigabytes de JSON por segundo. [Apache-2.0]
* [Sonic-Cpp](https://github.com/bytedance/sonic-cpp) - Biblioteca rápida de serialização e desserialização JSON, acelerada por meio de SIMD. [Apache-2.0]
* [taoJSON](https://github.com/taocpp/json) - Biblioteca JSON C++ somente de cabeçalho e sem dependências. [MIT]
* [ujson](https://bitbucket.org/awangk/ujson) - µjson é uma pequena biblioteca JSON UTF-8 para C++11. [MIT]
* [UltraJSON](https://github.com/ultrajson/ultrajson) - Decodificador e codificador JSON ultrarrápido escrito em C. [BSD-3-Clause]
* [YAJL](https://github.com/lloyd/yajl) - Biblioteca rápida de análise JSON em streaming para C. [ISC]
* [yyjson](https://github.com/ibireme/yyjson) - Biblioteca JSON de alto desempenho escrita em ANSI C. [MIT]
* [libdart](https://github.com/target/libdart) - Biblioteca de manipulación JSON de alto desempenho e optimizada para redes. [MIT]

<a id="logging"></a>
## Registro de Logs

* [Abseil Logging](https://abseil.io/docs/cpp/guides/logging) - A biblioteca Abseil Logging oferece funções para escrever mensajes de registro em stderr, arquivos u outros destinos. [Apache-2.0]
* [Blackhole](https://github.com/3Hren/blackhole) - Framework de registro baseado em atributos, projetado para ser rápido, modular e muito personalizable. [MIT]
* [Boost.Log](https://github.com/boostorg/log) - Projetado para ser muito modular e extensible. [Boost] [website](https://boost.org/libs/log)
* [BqLog](https://github.com/Tencent/BqLog) - Sistema de registro leve e de alto desempenho utilizado em projetos como «Honor of Kings». [Apache-2.0]
* [fmtlog](https://github.com/MengRao/fmtlog) - Biblioteca de registro de alto desempenho ao estilo de fmtlib, com latencia de nanosegundos. [MIT]
* [G3log](https://github.com/KjellKod/g3log) - Registrador assíncrono com destinos dinámicos. [PublicDomain]
* [glog](https://github.com/google/glog) - Implementação C++ do módulo de registro de Google.
* [haclog](https://github.com/MuggleWei/haclog) - Biblioteca de registro em C puro extremamente rápida. [MIT]
* [Log4cpp](https://log4cpp.sourceforge.net/) - Biblioteca de classes C++ para registrar de forma flexível em arquivos, syslog, IDSA e outros destinos. [LGPL]
* [log4cplus](https://github.com/log4cplus/log4cplus) - API de registro C++ fácil de usar que oferece control seguro para threads, flexível e de granularidad arbitraria sobre a gestión e configuração de registros. [BSD & Apache2]
* [loguru](https://github.com/emilk/loguru) - Biblioteca leve de registro para C++. [PublicDomain]
* [lwlog](https://github.com/ChristianPanov/lwlog) - Biblioteca C++17 de registro síncrono e assíncrono muito rápida. [MIT]
* [ng-log](https://github.com/ng-log/ng-log) - Biblioteca C++14 para o registro a nível de aplicação. [BSD-3-Clause]
* [plog](https://github.com/SergiusTheBest/plog) - Registro portátil e simples para C++, em menos de 1000 linhas de código. [MPL2]
* [reckless](https://github.com/mattiasflodin/reckless) - Biblioteca C++ de registro assíncrono, baja latencia e alto desempenho. [MIT]
* [spdlog](https://github.com/gabime/spdlog) - Biblioteca C++ de registro superrápida e somente de cabeçalho.
* [templog](https://www.templog.org/) - Biblioteca C++ muito pequena e leve para añadir registro a tus aplicações. [Boost]
* [P7Baical](https://baical.net/p7.html) - Biblioteca multiplataforma e de código aberto para enviar telemetría e trazas a grande velocidade com um uso mínimo de CPU e memória. [LGPL]
* [Quill](https://github.com/odygrd/quill) - Biblioteca multiplataforma de registro assíncrono e baja latencia. [MIT]
* [logfault](https://github.com/jgaa/logfault) - Biblioteca C++ de registro somente de cabeçalho, simples, elegante e eficiente. [MIT]

<a id="machine-learning"></a>
## Aprendizado de Máquina

* [Caffe](https://github.com/BVLC/caffe) - Framework rápido para redes neurais. [BSD]
* [catboost](https://github.com/catboost/catboost) - Biblioteca de gradient boosting sobre árvores de decisión, rápida, escalável e de alto desempenho. [Apache2]
* [CCV](https://github.com/liuliu/ccv) - Biblioteca de visão artificial baseada em C, com caché e central; uma biblioteca moderna de visão artificial. [BSD]
* [darknet](https://github.com/pjreddie/darknet) - Framework de redes neurais de código aberto, escrito em C e CUDA. [PublicDomain] [website](https://pjreddie.com/darknet/)
* [Dlib](https://github.com/davisking/dlib) :zap: - Kit moderno de ferramentas C++11 para aprendizado automático, visão artificial, otimização numérica e aprendizado profundo. [Boost] [website](https://dlib.net/)
* [FAISS](https://github.com/facebookresearch/faiss) - Biblioteca para busca de similitud e agrupamiento eficientes de vectores densos. [MIT]
* [FANN](https://github.com/libfann/fann) - Biblioteca rápida de redes neurais artificiales em C. [LGPL]
* [Fido](https://github.com/FidoProject/Fido) - Biblioteca C++ de aprendizado automático muito modular para electrónica integrada e robótica. [MIT] [website](https://fidoproject.github.io/)
* [flashlight](https://github.com/facebookresearch/flashlight) - Biblioteca de aprendizado automático rápida e flexível de Facebook AI Research, escrita integralmente em C++ e baseada na biblioteca de tensores ArrayFire. [BSD-3-Clause] [website](https://fl.readthedocs.io/en/latest/)
* [ggml](https://github.com/ggerganov/ggml) - Biblioteca de tensores para aprendizado automático, compatível com cuantización de 16 e 4 bits. [MIT]
* [libsvm](https://github.com/cjlin1/libsvm) - Biblioteca simples, eficiente e fácil de usar para máquinas de vectores de suporte. [BSD-3-Clause] [website](https://www.csie.ntu.edu.tw/~cjlin/libsvm/)
* [m2cgen](https://github.com/BayesWitnesses/m2cgen) - Ferramenta CLI para transpilar modelos clásicos de ML entrenados a código C nativo, sem dependências. [MIT]
* [MeTA](https://github.com/meta-toolkit/meta) - Kit moderno de ferramentas C++ para ciencia de dados. [MIT]
* [Minerva](https://github.com/dmlc/minerva) - Sistema rápido e flexível para aprendizado profundo. [Apache2]
* [mlpack](https://github.com/mlpack/mlpack) - Biblioteca escalável de aprendizado automático em C++. [LGPLv3] [website](https://www.mlpack.org/)
* [ncnn](https://github.com/Tencent/ncnn) - Framework de inferencia de redes neurais de alto desempenho, optimizado para plataformas móveis. [BSD]
* [OpenCV](https://github.com/Itseez/opencv) :zap: - Biblioteca de visão artificial de código aberto. [BSD] [website](https://opencv.org/)
* [oneDAL](https://github.com/oneapi-src/oneDAL) - Poderosa biblioteca de aprendizado automático que ayuda a acelerar o análise de macrodatos. [Apache]
* [ONNX runtime](https://github.com/microsoft/onnxruntime) - Biblioteca C e C++ para entrenar e ejecutar inferencias de modelos ONNX. ONNX é um padrão ao que podem convertirse modelos de IA, independientemente da biblioteca com a que se entrenen. [MIT] [website](https://onnxruntime.ai/)
* [Recommender](https://github.com/GHamrouni/Recommender) - Biblioteca C para recomendar/sugerir productos por meio de filtrado colaborativo (CF). [BSD]
* [RNNLIB](https://github.com/szcom/rnnlib) - RNNLIB é uma biblioteca de redes neurais recurrentes para problemas de aprendizado secuencial. [GPLv3]
* [SHOGUN](https://github.com/shogun-toolbox/shogun) - Kit de ferramentas de aprendizado automático Shogun. [GPLv3]
* [sofia-ml](https://code.google.com/p/sofia-ml/) - Conjunto de algoritmos incrementales rápidos para aprendizado automático. [Apache2]
* [USearch](https://github.com/unum-cloud/usearch) - Biblioteca rápida de busca e agrupamiento de vectores e strings. [Apache2]
* [VLFeat](https://github.com/vlfeat/vlfeat) - Biblioteca de código aberto VLFeat que implementa algoritmos populares de visão artificial, especializados em comprensión de imagens e extracción e emparejamiento de características locales. [BSD-2-Clause] [website](https://www.vlfeat.org/)
* [xgboost](https://github.com/dmlc/xgboost) - Biblioteca escalável, Portátil e distribuída de gradient boosting (GBDT, GBRT ou GBM) para Python, R, Java, Scala, C++ e mais. Se ejecuta em uma única máquina, Hadoop, Spark, Flink e DataFlow. [Apache2]
* [TensorComprehensions](https://github.com/facebookresearch/TensorComprehensions) - Biblioteca C++ completa para sintetizar automáticamente kernels de aprendizado automático de alto desempenho. [Apache-2.0]
* [kann](https://github.com/attractivechaos/kann) - Biblioteca C leve para redes neurais artificiales. [MIT]

<a id="math"></a>
## Matemática

* [Apophenia](https://github.com/b-k/apophenia) - Biblioteca C para computação estadística e científica. [GPL2]
* [Armadillo](https://gitlab.com/conradsnicta/armadillo-code) - Biblioteca C++ rápida para álgebra lineal e computação científica. [Apache2] [website](https://arma.sourceforge.net/)
* [autodiff](https://github.com/autodiff/autodiff) - Biblioteca C++ moderna, rápida e expresiva para diferenciación automática. [MIT] [website](https://autodiff.github.io)
* [blaze](https://bitbucket.org/blaze-lib/blaze) - Biblioteca matemática C++ de alto desempenho para aritmética densa e dispersa. [BSD]
* [Boost.Multiprecision](https://github.com/boostorg/multiprecision) - Fornece tipos enteros, racionales e de coma flotante de mayor rango/precisión em C++, somente de cabeçalhos ou com backends GMP/MPFR/LibTomMath. [Boost] [website](https://boost.org/libs/multiprecision)
* [ceres-solver](https://ceres-solver.org/) - Biblioteca C++ de Google para modelar e resolver problemas grandes e complejos de mínimos cuadrados não lineales. [BSD]
* [CGAL](https://github.com/CGAL/cgal) - Coleção de algoritmos geométricos eficientes e fiables. [LGPL&GPL] [website](https://www.cgal.org/)
* [cml](https://github.com/demianmnave/CML) - Biblioteca matemática configurable. [Boost]
* [CNL](https://github.com/johnmcfarlane/cnl/) - Biblioteca numérica composicional para C++. [Boost]
* [DirectXMath](https://github.com/microsoft/DirectXMath) - Biblioteca de álgebra lineal C++ com SIMD totalmente inline, para jogos e aplicações gráficas.
* [Dlib](https://github.com/davisking/dlib) :zap: - Kit moderno de ferramentas C++11 para aprendizado automático, visão artificial, otimização numérica e aprendizado profundo. [Boost] [website](https://dlib.net/)
* [Eigen](https://eigen.tuxfamily.org/) - Biblioteca C++ de alto nível e cabeçalhos de template para álgebra lineal, operações com matrices e vectores, solucionadores numéricos e algoritmos relacionados. [MPL2]
* [ExprTk](https://www.partow.net/programming/exprtk/) - C++ Mathematical Expression Toolkit Library (ExprTk) é um motor de análise e avaliação de expressões matemáticas em tempo de execução, fácil de usar e integrar e muito eficiente. [MIT]
* [Fastor](https://github.com/romeric/Fastor) - Framework leve e de alto desempenho de álgebra tensorial para C++ moderno. [MIT]
* [geo-utils-cpp](https://github.com/gistrec/geo-utils-cpp) - Biblioteca C++17 somente de cabeçalho para geometría esférica lat/lng: distancia, rumbo, área e punto dentro de polígono. [Apache2]
* [Geometric Tools](https://www.geometrictools.com) - Biblioteca C++ para cálculos em matemáticas, gráficos, análise de imagens e física. [Boost] [website](https://www.geometrictools.com)
* [GLM](https://github.com/g-truc/glm) - Biblioteca matemática C++ somente de cabeçalho, compatível e interoperable com as matemáticas GLSL de OpenGL. [MIT] [website](https://glm.g-truc.net/)
* [GMTL](https://ggt.sourceforge.net/) - Graphics Math Template Library é uma coleção de ferramentas que implementan primitivas gráficas de forma generalizada. [GPL2]
* [GMP](https://gmplib.org/) - Biblioteca C de aritmética de precisión arbitraria para enteros com signo, números racionales e de coma flotante. [LGPL3 & GPL2]
* [Klein](https://github.com/jeremyong/klein) - Biblioteca C++17 rápida de álgebra geométrica, optimizada com SIMD, para proyecciones, intersecciones e uniones de puntos, linhas e planos, movimiento de cuerpos rígidos e mais. [MIT] [website](https://jeremyong.com/klein)
* [libfixmath](https://github.com/PetteriAimonen/libfixmath) - Biblioteca multiplataforma de matemáticas de punto fijo. [MIT]
* [linalg.h](https://github.com/sgorsten/linalg) - Biblioteca matemática de vectores cortos para C++, em uma um único cabeçalho e de dominio público. [Unlicense]
* [MATIO](https://github.com/tbeu/matio) - Biblioteca de E/S de arquivos MAT de MATLAB. [BSD-2-Clause] [website](https://sourceforge.net/projects/matio/)
* [MatX](https://github.com/NVIDIA/MatX) - Biblioteca C++17 de computação numérica acelerada por GPU com sintaxis semelhante a MATLAB/Python. [BSD 3-clause]
* [mexce](https://github.com/imakris/mexce) - Compilador JIT de uma um único cabeçalho e sem dependências para expressões matemáticas escalares, que genera código máquina x87 FPU optimizado. [BSD]
* [MIRACL](https://github.com/CertiVox/MIRACL) - Biblioteca criptográfica de aritmética de enteros e racionales de precisión múltiple. [AGPL]
* [NumCpp](https://github.com/dpilger26/NumCpp) - Implementação C++ baseada em templates da biblioteca Python NumPy, somente de cabeçalho. [MIT]
* [NumKong](https://github.com/ashvardanian/NumKong) - Distancias, productos escalares, operações matriciales e kernels geoespaciales e geométricos acelerados por SIMD para 16 tipos numéricos. [Apache2] (antes se llamaba SimSIMD)
* [OMath](https://github.com/orange-cpp/omath) - Biblioteca matemática moderna, multiplataforma e de objetivo geral, escrita em C++23, adequada para desenvolver truques e jogos. [ZLIB]
* [muparser](https://beltoforion.de/en/muparser) - muParser é uma biblioteca extensible e de alto desempenho para analisar expressões matemáticas em C++. [MIT]
* [LibTomMath](https://github.com/libtom/libtommath) - Biblioteca portátil, gratuita e de código aberto para enteros de precisión múltiple de teoría de números, escrita integralmente em C. [PublicDomain & WTFPL] [website](https://www.libtom.net/)
* [linmath.h](https://github.com/datenwolf/linmath.h) - Biblioteca leve de álgebra lineal dirigida a a programação gráfica. [WTFPL]
* [lp_solve](https://sourceforge.net/projects/lpsolve) - Biblioteca para formular e resolver problemas de programação lineal. [LGPL] [website](https://lpsolve.sourceforge.net)
* [OpenBLAS](https://github.com/xianyi/OpenBLAS) - Biblioteca BLAS optimizada, baseada na versão BSD 1.13 de GotoBLAS2. [BSD 3-clause] [website](https://www.openblas.net/)
* [PCG-rand](https://www.pcg-random.org/) - PCG é uma familia de algoritmos sencillos, rápidos, eficientes em espaço e estadísticamente buenos para gerar números aleatórios. A diferença de muitos geradores de objetivo geral, também são difíciles de predecir. [Apache]
* [QuantLib](https://github.com/lballabio/quantlib) - Biblioteca gratuita e de código aberto para finanzas cuantitativas. [Modified BSD] [website](https://quantlib.org/)
* [sebsjames/maths](https://github.com/sebsjames/maths) - Biblioteca matemática C++20 baseada em templates que prioriza a comodidad e satisfacción do programador cliente (utilizada em [mathplot](https://github.com/sebsjames/mathplot)). [Apache2] [website](https://sebsjames.github.io/maths/)
* [StatsLib](https://github.com/kthohr/stats) - Biblioteca C++ de funções de distribuciones estadísticas, somente de cabeçalho. [Apache2] [website](https://www.kthohr.com/statslib.html)
* [SymEngine](https://github.com/symengine/symengine) - Biblioteca rápida de manipulación simbólica que reescribe em C++ o núcleo de SymPy. [MIT]
* [TinyExpr](https://github.com/codeplea/tinyexpr) - Biblioteca C para analisar e evaluar expressões matemáticas a partir de strings. [zlib]
* [Vc](https://github.com/VcDevel/Vc) - Classes de vectores SIMD para C++. [BSD]
* [Versor](https://versor.mat.ucsb.edu/) - Biblioteca C++ genérica e rápida para álgebras geométricas, incluindo as euclidianas, proyectivas, conformes e espaciotemporales, entre outras.
* [Wagyu](https://github.com/mapbox/wagyu) - Biblioteca geral para operações geométricas de unión, intersección, diferença e XOR. [mapbox-wagyu original]
* [wide-integer](https://github.com/ckormanyos/wide-integer) - Implementa uma template C++ genérica para uint128_t, uint256_t, uint512_t, uint1024_t, etc. [BSL-1.0]
* [Wykobi](https://www.wykobi.com) - Biblioteca C++ de rutinas eficientes, robustas e fáceis de usar para geometría computacional 2D/3D. [MIT]
* [xtensor](https://github.com/xtensor-stack/xtensor) - Biblioteca C++14 para análise numérico com expressões de matrices multidimensionales, inspirada na sintaxis de NumPy. [BSD 3-clause] [website](https://xtensor-stack.github.io/xtensor)
* [universal](https://github.com/stillwater-sc/universal) - Biblioteca C++14 somente de cabeçalho que implementa aritmética posit arbitraria. O sistema numérico posit é um formato de coma flotante gradual mais eficiente que o de IEEE e permite reproducir a ciencia computacional. [MIT license]
* [utl::random](https://github.com/DmitriBogdanov/UTL/blob/master/docs/module_random.md) - Biblioteca C++17 somente de cabeçalho que implementa geração rápida de números aleatórios para simulações de Monte Carlo e desenvolvimento de jogos. [MIT]
* [XAD](https://github.com/auto-differentiation/xad) - Poderosa diferenciación automática para C++. [AGPL] [website](https://auto-differentiation.github.io/)
* [geogram](https://github.com/BrunoLevy/geogram) - Biblioteca de programação de algoritmos geométricos. [BSD-3-Clause]
* [std-simd](https://github.com/VcDevel/std-simd) - Implementação Portátil de std::experimental::simd para C++. [BSD-3-Clause]
* [libdivide](https://github.com/ridiculousfish/libdivide) - División entera optimizada para C/C++ com libdivide. [zlib] [website](https://libdivide.com)
* [fpsqrt](https://github.com/chmike/fpsqrt) - Raíz cuadrada rápida de punto fijo e coma flotante para C. [MIT]
* [fastmod](https://github.com/lemire/fastmod) - Biblioteca C/C++ rápida e somente de cabeçalho para calcular restos e reducciones modulares. [Apache-2.0]
* [Spectra](https://github.com/yixuan/spectra) - Biblioteca C++ para problemas de valores próprios a grande escala, construida sobre Eigen. [MPL2] [website](https://spectralib.org)
* [FastNoiseSIMD](https://github.com/Auburns/FastNoiseSIMD) - Biblioteca para funções de geração de ruído aceleradas por SIMD. [MIT]

<a id="memory-allocation"></a>
## Alocação de Memória

* [Boehm GC](https://github.com/ivmai/bdwgc) - Recolector de basura conservador para C e C++. [similar to X11] [website](https://www.hboehm.info/gc/)
* [C Smart Pointers](https://github.com/Snaipe/libcsptr) - Punteros inteligentes para o linguagem de programação (GNU) C. [MIT]
* [Hoard](https://github.com/emeryberger/Hoard) - Malloc rápido, escalável e eficiente em memória para Linux, Windows e Mac. [Apache-2.0] [website](https://hoard.org/)
* [jemalloc](https://github.com/jemalloc/jemalloc) - Implementação de malloc(3) de objetivo geral, centrada em evitar a fragmentación e ofrecer suporte de concorrência escalável. [BSD] [website](https://jemalloc.net/)
* [memory](https://github.com/foonathan/memory) - Biblioteca de asignadores de memória C++ compatível com STL. [ZLib]
* [memory-allocators](https://github.com/mtrebi/memory-allocators) - Asignadores de memória personalizados para mejorar o desempenho da asignación dinâmica. [MIT]
* [mimalloc](https://github.com/microsoft/mimalloc) - Asignador compacto de objetivo geral com um desempenho excelente. [MIT]
* [rpmalloc](https://github.com/mjansson/rpmalloc) - Asignador de memória C multiplataforma, sem bloqueios, com caché por hilo e alineación de 16 bytes. [PublicDomain]
* [snmalloc](https://github.com/microsoft/snmalloc) - Asignador de alto desempenho baseado em paso de mensajes. [MIT]
* [TCMalloc](https://github.com/google/tcmalloc) - Implementação rápida e multihilo de malloc de Google. [Apache-2.0] [website](https://google.github.io/tcmalloc/)
* [buddy_alloc](https://github.com/spaskalev/buddy_alloc) - Asignador de memória buddy em uma um único cabeçalho para C, com costes de asignación acotados. [0BSD]
* [tgc](https://github.com/orangeduck/tgc) - Recolector de basura diminuto para C, escrito em umas 500 linhas de código. [BSD]
* [Mesh](https://github.com/plasma-umass/Mesh) - Asignador de memória que reduce automáticamente a huella de memória de aplicações C/C++. [Apache-2.0]
* [rpmalloc](https://github.com/rampantpixels/rpmalloc) - Asignador de memória de dominio público, multiplataforma, sem bloqueios e com caché por hilo e alineación de 16 bytes. [PublicDomain]
* [TLSF](https://github.com/mattconte/tlsf) - Asignador de memória Two-Level Segregated Fit, um asignador dinâmico de objetivo geral. [BSD]

<a id="multimedia"></a>
## Multimídia

* [GStreamer](https://gstreamer.freedesktop.org/) - Biblioteca para construir grafos de componentes de gestión multimídia. [LGPL]
* [icey](https://github.com/nilstate/icey) - Pila multimídia em tempo real e alternativa leve a libwebrtc para ingesta RTSP, processamento multimídia, señalización, TURN e entrega ao navegador, criada em C++20. [LGPL v2.1+]
* [libass](https://github.com/libass/libass) - Renderizador Portátil de subtítulos em formato ASS/SSA. [ISC]
* [libav](https://github.com/libav/libav) - Coleção de bibliotecas e ferramentas para processar conteúdo multimídia, como áudio, vídeo, subtítulos e metadatos relacionados. [LGPL v2.1+ and others] [website](https://www.libav.org/)
* [LIVE555 Streaming Media](https://www.live555.com/liveMedia/) - Biblioteca de transmissão multimídia por meio de protocolos padrão abiertos (RTP/RTCP, RTSP, SIP). [LGPL]
* [libVLC](https://wiki.videolan.org/LibVLC) - Framework multimídia libVLC (SDK de VLC). [GPL]
* [MediaInfoLib](https://github.com/MediaArea/MediaInfoLib) - Presentación unificada e práctica de os dados técnicos e etiquetas mais relevantes de arquivos de vídeo e áudio. [BSD]
* [QtAv](https://github.com/wang-bin/QtAV) - Framework de reproducción multimídia baseado em Qt e FFmpeg para criar reproductores facilmente. [LGPL] [website](https://wang-bin.github.io/QtAV/)
* [SDL](https://github.com/libsdl-org/SDL) :zap: - Simple DirectMedia Layer. [zlib] [website](https://libsdl.org)
* [SFML](https://github.com/SFML/SFML) :zap: - Biblioteca multimídia simples e rápida. [zlib] [website](https://www.sfml-dev.org/)
* [TagLib](https://github.com/taglib/taglib) - Biblioteca para ler e editar metadatos de vários formatos de áudio populares. [LGPL/MPL] [website](https://taglib.org/)

<a id="networking"></a>
## Redes

* [ada](https://github.com/ada-url/ada) - Analisador de URL rápido e compatível com WHATWG, escrito em C++ moderno. [Apache-2.0/MIT]
* [ACE](https://www.dre.vanderbilt.edu/~schmidt/ACE.html) - Kit de ferramentas C++ para programação de redes orientada a objetos. [?MIT?]
* [AGENT++](https://www.agentpp.com/api/cpp/agent_pp.html) - Framework C++ que fornece um motor e despachador completos do protocolo SNMP v1/2c/3 para desenvolver agentes SNMP. [Apache-2.0]
* [Boost.Asio](https://github.com/boostorg/asio) :zap: - Biblioteca C++ multiplataforma para programação de redes e E/S de baixo nível. [Boost] [website](https://boost.org/libs/asio)
* [Boost.Beast](https://github.com/boostorg/beast) :zap: - HTTP e WebSocket baseados em Boost.Asio para C++11. [Boost] [website](https://www.boost.org/libs/beast)
* [Breep](https://github.com/Organic-Code/Breep) - Biblioteca C++14 de alto nível, baseada em eventos e de igual a igual. [EUPL-1.1 (OSI approved)]
* [C++ REST SDK](https://github.com/Microsoft/cpprestsdk) - SDK REST de C++ (antes llamado Casablanca). [Apache2]
* [CZMQ](https://github.com/zeromq/czmq) - Binding C de alto nível para ØMQ. [MPL2] [website](https://czmq.zeromq.org/)
* [Restbed](https://github.com/corvusoft/restbed) - Framework RESTful assíncrono para C++11. [AGPL]
* [Restinio](https://github.com/Stiffstream/restinio) - Biblioteca C++14 somente de cabeçalho que fornece um servidor HTTP/WebSocket integrado. [BSD]
* [c-ares](https://github.com/c-ares/c-ares) - Biblioteca C para solicitudes DNS asíncronas. [MIT]
* [cofetch](https://github.com/SSARCandy/cofetch) - Cliente HTTP assíncrono encadenable, construido sobre a interface multi de libcurl e ASIO. Uma implementação com callbacks, corrotinas e futuros. [MIT]
* [cpp-httplib](https://github.com/yhirose/cpp-httplib) - Biblioteca de servidor HTTP/HTTPS C++11 somente de cabeçalho em um único arquivo. [MIT]
* [cpp-netlib](https://cpp-netlib.org/) - Coleção de bibliotecas de código aberto para programação de redes de alto nível. [Boost]
* [cpp-netlib/uri](https://github.com/cpp-netlib/uri) - Biblioteca C++ para analisar e construir URI, compatível com RFC 3986 e RFC 3987. [Boost]
* [CppServer](https://github.com/chronoxor/CppServer) - Biblioteca C++ de servidor e cliente de sockets asíncronos, ultrarrápida e de baja latencia, compatível com TCP, SSL, UDP, HTTP, HTTPS e WebSocket, e com solución para gestionar 10 000 conexiones. [MIT]
* [cpr](https://github.com/whoshuu/cpr) - Biblioteca moderna de solicitudes HTTP para C++, com uma interface simples mas poderosa, inspirada em o módulo Python Requests. [MIT] [website](https://docs.libcpr.org)
* [curlcpp](https://github.com/JosephP91/curlcpp) - Wrapper C++ orientado a objetos para CURL (libcurl). [MIT]
* [curlpp](https://github.com/jpbarrette/curlpp) - Wrapper C++ para libcURL. [MIT]
* [DPDK](https://github.com/DPDK/dpdk) - Data Plane Development Kit: bibliotecas e controladores para processar pacotes rapidamente. [BSD-3-Clause & GPL-2.0] [website](https://www.dpdk.org/)
* [ENet](https://github.com/lsalzman/enet) - Biblioteca de redes UDP fiable. [MIT] [website](https://enet.bespin.org/)
* [evpp](https://github.com/Qihoo360/evpp) - Redes C++ de alto desempenho com protocolos TCP/UDP/HTTP. [BSD]
* [FTP client for C++](https://github.com/embeddedmz/ftpclient-cpp) - Cliente C++ para realizar solicitudes FTP. [MIT]
* [H2O](https://github.com/h2o/h2o) - Servidor HTTP optimizado compatível com HTTP/1.x e HTTP/2. Também pode utilizarse como biblioteca. [MIT]
* [KCP](https://github.com/skywind3000/kcp/blob/master/README.en.md) - Protocolo ARQ rápido e fiable que ayuda a as aplicações a reduzir a latencia de red. [MIT]
* [libcurl](https://curl.haxx.se/libcurl/) - Biblioteca de transferencia de arquivos multiprotocolo. [MIT/X derivate license]
* [libhttpserver](https://github.com/etr/libhttpserver) - Biblioteca C++ para criar um servidor HTTP REST integrado, entre outras cosas. [LGPL2.1]
* [Libmicrohttpd](https://www.gnu.org/software/libmicrohttpd/) - GNU libmicrohttpd é uma pequena biblioteca C projetada para facilitar a execução de um servidor HTTP dentro de outra aplicação. [LGPL v2.1+]
* [libpcap](https://github.com/the-tcpdump-group/libpcap) - Biblioteca C/C++ Portátil para capturar tráfico de red. [BSD] [website](https://www.tcpdump.org/)
* [libquic](https://github.com/devsisters/libquic) - Biblioteca do protocolo QUIC extraída da implementação QUIC de Chromium. [BSD]
* [librdkafka](https://github.com/edenhill/librdkafka) - Biblioteca cliente de Apache Kafka para C e C++. [BSD-2-Clause]
* [libwebsockets](https://github.com/warmcat/libwebsockets) - Implementação leve de WebSocket em C puro, com bibliotecas de cliente e servidor. [LGPL2.1 + static link exception] [website](https://libwebsockets.org/)
* [Lithium](https://matt-42.github.io/lithium/) - Cria servidores HTTP C++ de alto desempenho sem ser experto em C++. [MIT]
* [lwIP](https://savannah.nongnu.org/projects/lwip/) - Pila TCP/IP leve. [Modified BSD]
* [mailio](https://github.com/karastojko/mailio) - mailio é uma biblioteca C++ multiplataforma para o formato MIME e os protocolos SMTP, POP3 e IMAP. [BSD]
* [Mongoose](https://github.com/cesanta/mongoose) - Servidor web extremamente leve. [GPL2]
* [MQTT-C](https://github.com/LiamBindle/MQTT-C) - Cliente MQTT C Portátil para sistemas integrados e PC. [MIT] [website](https://liambindle.ca/MQTT-C)
* [mTCP](https://github.com/mtcp-stack/mtcp) - Pila TCP de nível de usuário altamente escalável para sistemas multinúcleo. [Modified BSD]
* [Muduo](https://github.com/chenshuo/muduo) - Biblioteca de redes C++ não bloqueante para servidores multihilo em Linux. [BSD]
* [nghttp2](https://github.com/nghttp2/nghttp2) - Biblioteca C de HTTP/2. [MIT] [website](https://nghttp2.org/)
* [nghttp3](https://github.com/ngtcp2/nghttp3) - Biblioteca HTTP/3 escrita em C. [MIT] [website](https://nghttp2.org/nghttp3/)
* [Onion](https://github.com/davidmoreno/onion) - Biblioteca de servidor HTTP em C, projetada para ser leve e fácil de usar. [Apache2/GPL2]
* [OpenDDS](https://github.com/objectcomputing/OpenDDS) - Implementação C++ de código aberto do servicio de distribución de dados (DDS) de Object Management Group (OMG). [Apache2]
* [PF_RING™](https://github.com/ntop/PF_RING) - Framework de processamento de pacotes de alto velocidade. [LGPL-2.1] [website](https://www.ntop.org/products/packet-capture/pf_ring/)
* [PicoHTTPParser](https://github.com/h2o/picohttpparser) - Analisador de solicitudes/respuestas HTTP diminuto, básico e rápido. [MIT]
* [POCO](https://github.com/pocoproject) :zap: - Bibliotecas de classes e frameworks C++ para criar aplicações baseadas em redes e Internet que funcionan em sistemas para desktop, servidor, móveis e integrados. [Boost] [website](https://pocoproject.org/)
* [Proxygen](https://github.com/facebook/proxygen) - Coleção de bibliotecas HTTP C++ de Facebook, incluido um servidor HTTP fácil de usar. [BSD]
* [RedPanda](https://github.com/redpanda-data/redpanda) - Plataforma de transmissão de dados para desenvolvedores. compatível com a API de Kafka. 10 veces mais rápida. [BSL]
* [RakNet](https://github.com/OculusVR/RakNet) - Motor de redes C++ multiplataforma e de código aberto para programadores de jogos. [BSD]
* [restclient-cpp](https://github.com/mrtazz/restclient-cpp) - Cliente REST simples para C++. Usa libcurl para as solicitudes HTTP. [MIT]
* [Seasocks](https://github.com/mattgodbolt/seasocks) - Servidor web C++ integrável, pequeno e simples, compatível com WebSockets. [BSD]
* [SNMP++](https://www.agentpp.com/api/cpp/snmp_pp.html) - API C++ compatível com SNMP v1/2c/3. [custom permissive license]
* [tlse](https://github.com/eduardsui/tlse) - Implementação TLS 1.2/1.3 em um único arquivo C, que utiliza tomcrypt como biblioteca criptográfica. [BSD-2-Clause]
* [TQUIC](https://github.com/tencent/tquic) - Biblioteca QUIC multiplataforma, leve e de alto desempenho, com interface para C e C++. [Apache2]
* [Tufão](https://github.com/vinipsmaker/tufao) - Framework web assíncrono para C++ baseado em Qt. [LGPL2]
* [uriparser](https://github.com/uriparser/uriparser) - Biblioteca de análise e manejo de URI estrictamente compatível com RFC 3986. [BSD-3-Clause]
* [uWebSockets](https://github.com/uNetworking/uWebSockets) - µWS é uma de as implementações de servidores HTTP e WebSocket mais ligeras, eficientes e escaláveis disponíveis. [Zlib]
* [UCall](https://github.com/unum-cloud/ucall) - Biblioteca RPC de alto desempenho acelerada por SIMD em io_uring. [Apache2]
* [WAFer](https://github.com/riolet/WAFer) - Plataforma de software ultraligera baseada em C para aplicações de red e servidor escaláveis. Como node.js para programadores de C. [GPL2]
* [Wangle](https://github.com/facebook/wangle) - Framework de aplicações cliente/servidor para criar servicios C++ modernos, asíncronos e baseados em eventos. [Apache-2.0]
* [wdt](https://github.com/facebook/wdt) - Biblioteca integrável (e ferramenta de linha de comandos) para transferir dados entre dos sistemas lo mais rápido posible por meio de várias rotas TCP. [BSD-3-Clause]
* [WebSocket++](https://github.com/zaphoyd/websocketpp) - Biblioteca de cliente/servidor WebSocket baseada em C++/Boost Asio. [BSD]
* [wspp](https://github.com/pinwhell/wspp) - Biblioteca moderna de cliente e servidor WebSocket ws/wss, de uma um único cabeçalho e sem dependências. [MIT]
* [PcapPlusPlus](https://github.com/seladb/PcapPlusPlus) - Framework multiplataforma C++ para inspeccionar redes e analisar e criar pacotes. [Unlicense]
* [ZeroMQ](https://github.com/zeromq/libzmq) - Biblioteca de comunicação asíncrona modular e de alto velocidade. [LGPL3/MPL2] [website](https://zeromq.org/)
* [Zyre](https://github.com/zeromq/zyre) - Agrupación em redes de área local para aplicações entre pares. [MPL2]
* [easyhttpcpp](https://github.com/sony/easyhttpcpp) - Biblioteca cliente HTTP multiplataforma com armazenamento em caché, de Sony. [MIT]
* [GameNetworkingSockets](https://github.com/ValveSoftware/GameNetworkingSockets) - Mensajes fiables e não fiables por UDP de Valve. API orientada a conexiones (como TCP). [BSD-3-Clause]
* [wepoll](https://github.com/piscisaureus/wepoll) - Wrapper de epoll para Windows baseado em Winsock. [BSD-2-Clause]

## Office Open XML
*Bibliotecas para analisar e manipular arquivos xlsx, pptx, docx, etc.*

* [DuckX](https://github.com/amiremohamadi/DuckX) - Biblioteca C++ para criar e modificar arquivos de Microsoft Word (.docx). [MIT]
* [FreeXL](https://www.gaia-gis.it/fossil/freexl/index) - Biblioteca de código aberto para extraer dados válidos de hojas de cálculo. [MPL/GPL-2/LGPL-2]
* [libxls](https://github.com/libxls/libxls) - Lee arquivos Excel binarios de C/C++. [BSD-2-Clause]
* [libxlsxwriter](https://github.com/jmcnamara/libxlsxwriter) - Biblioteca C para criar arquivos Excel XLSX. [BSD-2-Clause] [website](https://libxlsxwriter.github.io/)
* [OpenXLSX](https://github.com/troldal/OpenXLSX) - Biblioteca C++ para ler, escrever, criar e modificar arquivos Microsoft Excel® (.xlsx). [BSD-3-Clause]
* [SimpleXlsxWriter](https://sourceforge.net/projects/simplexlsx/) - Escritor de arquivos XLSX para Microsoft Excel 2007 e posteriores. [zlib]
* [XLSX I/O](https://github.com/brechtsanders/xlsxio) - Biblioteca C para ler e escrever arquivos .xlsx. [MIT]

## PDF
*Bibliotecas para analisar e manipular documentos PDF.*

* [libharu](https://github.com/libharu/libharu) - Biblioteca de software gratuita, multiplataforma e de código aberto para gerar PDF. [zlib]
* [litePDF](https://litepdf.sourceforge.io) - Biblioteca para criar e editar documentos PDF que utiliza funções GDI por meio de um contexto de dispositivo para dibujar o conteúdo da página. [LGPL v3 and zlib]
* [MuPDF](https://mupdf.com/) - Visor leve de PDF, XPS e livros electrónicos. [AGPL/Proprietary]
* [PDF-Writer](https://github.com/galkahana/PDF-Writer) - Biblioteca C++ de alto desempenho para criar, modificar e analisar arquivos PDF. [Apache-2.0] [website](https://www.pdfhummus.com/)
* [PDF4QT](https://github.com/JakubMelka/PDF4QT) - Kit de ferramentas PDF com biblioteca de renderização e edición, visor e utilitários de linha de comandos. [MIT] [website](https://jakubmelka.github.io/)
* [pdfio](https://github.com/michaelrsweet/pdfio) - Biblioteca C simples para ler e escrever arquivos PDF. [Apache-2] [website](https://www.msweet.org/pdfio/)
* [PDFium](https://pdfium.googlesource.com/pdfium/) - Biblioteca de geração e renderização de PDF. [BSD-3-Clause]
* [PoDoFo](https://podofo.sourceforge.net/) - Biblioteca para trabajar com o formato de arquivo PDF. [LGPL]
* [Poppler](https://poppler.freedesktop.org/) - Biblioteca de renderização PDF de código aberto e vários backends, baseada em o código xpdf-3.0. [GPLv2/GPLv3]
* [QPDF](https://github.com/qpdf/qpdf) - Ferramenta e biblioteca C++ para transformar arquivos PDF preservando seu conteúdo. [Apache-2.0] [website](https://qpdf.sourceforge.io/)
* [Xpdf](https://www.xpdfreader.com/) - Xpdf é um visor PDF e kit de ferramentas gratuito que inclui extractor de texto, conversor de imagens, conversor HTML e mais. [GPL v2/GPL v3]
* [DynaPDF](https://www.dynaforms.com/) - Biblioteca de geração PDF fácil de usar. [Commercial]

<a id="physics"></a>
## Física
*Motores de simulação dinâmica*

* [Box2D](https://github.com/erincatto/Box2D) - Motor de física 2D para jogos. [BSD-like]
* [Bullet](https://github.com/bulletphysics/bullet3) - Motor de física 3D para jogos. [zlib] [website](https://bulletphysics.org)
* [Chipmunk](https://github.com/slembcke/Chipmunk2D) - Biblioteca de física 2D para jogos, rápida e leve. [MIT] [website](https://chipmunk-physics.net/)
* [Jolt Physics](https://github.com/jrouwe/JoltPhysics) - Biblioteca de física de cuerpos rígidos e detección de colisões, adequada para sistemas multinúcleo. [MIT]
* [Kratos](https://github.com/KratosMultiphysics/Kratos) - Framework para criar software de simulação paralelo e multidisciplinario, orientado a a modularidad, extensibilidad e alto desempenho. [BSD] [website](https://www.cimne.com/kratos/)
* [LiquidFun](https://github.com/google/liquidfun) - Motor de física 2D para jogos. [BSD-like]
* [Newton Dynamics](https://github.com/MADEAPPS/newton-dynamics) - Solución integrada para simulação em tempo real de entornos físicos. [zlib]
* [ODE](https://www.ode.org/) - Open Dynamics Engine: biblioteca de código aberto e alto desempenho para simular a dinâmica de cuerpos rígidos. [BSD&LGPL]
* [ofxBox2d](https://github.com/vanderlin/ofxBox2d) - Wrapper de openFrameworks para Box2D. [BSD-like]
* [PhysX](https://github.com/NVIDIAGameWorks/PhysX-3.4) - SDK middleware de motor de física em tempo real e código aberto, desenvolvido por Nvidia como parte da suite Nvidia GameWorks. [BSD-3-Clause]
* [PlayRho](https://github.com/louis-langholtz/PlayRho) - Motor e biblioteca de física interactiva. [Zlib]
* [Project Chrono](https://github.com/projectchrono/chrono) - Motor de simulação multifísica de código aberto. [BSD-3-Clause] [website](https://projectchrono.org/)
* [Quantum++](https://github.com/vsoftco/qpp) - Biblioteca moderna de computação cuántica para C++11. [MIT]
* [QuarkPhysics](https://github.com/erayzesen/QuarkPhysics) - Motor de física 2D de cuerpos blandos e rígidos. [MIT]
* [Simbody](https://github.com/simbody/simbody) - Biblioteca C++ de dinâmica/física multicuerpo de alto desempenho para simular sistemas biomecánicos e mecánicos articulados, como vehículos, robots e o esqueleto humano. [Apache2]
* [SOFA](https://github.com/sofa-framework/sofa) - SOFA é um framework de código aberto orientado a a simulação em tempo real, especialmente médica. [LGPL] [website](https://www.sofa-framework.org)
* [tungsten](https://github.com/tunabrain/tungsten) - Renderizador C++ de alto desempenho baseado na física. [zlib]

<a id="reflection"></a>
## Reflexão

* [config-loader](https://github.com/netcan/config-loader) - Framework de reflexão estática C++17, de analisar arquivos de configuração hasta producir estruturas de dados nativas. [MIT]
* [Better Enums](https://github.com/aantron/better-enums) - Enumeraciones reflectivas (a string, iteración), em uma um único cabeçalho. [BSD] [website](https://aantron.github.io/better-enums/)
* [clReflect](https://github.com/Celtoys/clReflect) - Reflexão C++ por meio de clang. [MIT]
* [CPFG](https://github.com/cpgf/cpgf) - Biblioteca C++03 para reflexão, callbacks e bindings de scripting. [Apache2]
* [CPP-Reflection](https://github.com/AustinBrunkhorst/CPP-Reflection) - Reflexão C++ por meio de clang. [MIT]
* [Easy Reflection](https://github.com/chocolacula/easy_reflection_cpp) - Solución de reflexão e serialização simples e rápida, como em Rust, Java ou Go. [Apache]
* [Enchantum](https://github.com/ZXShady/enchantum) - Biblioteca moderna C++17 somente de cabeçalho para reflexão de enumeraciones em tempo de compilação. [MIT]
* [Magic Enum](https://github.com/Neargye/magic_enum) - Biblioteca C++17 somente de cabeçalho para reflexão estática de enumeraciones (a string, de string, iteración); funciona com cualquier tipo de enum sem macros ni código repetitivo. [MIT]
* [magic_get](https://github.com/apolukhin/magic_get) - Métodos similares a std::tuple para tipos definidos por o usuário, sem macros ni código repetitivo. [Boost]
* [meta](https://github.com/skypjack/meta) - Sistema de reflexão em tempo de execução para C++, somente de cabeçalho, não intrusivo e sem macros. [MIT]
* [Nameof](https://github.com/Neargye/nameof) - Biblioteca C++17 somente de cabeçalho com macros e funções nameof para obtener o nombre simple de variables, tipos, funções, macros e enumeraciones. [MIT]
* [REFLECT](https://github.com/qlibs/reflect) - Biblioteca de reflexão estática para C++20. [MIT]
* [reflect-cpp](https://github.com/getml/reflect-cpp) - Serialização por meio de reflexão, incluida a obtención automática de nombres de campos de estruturas. [MIT]
* [RTTR](https://github.com/rttrorg/rttr) - Biblioteca de reflexão para C++11. [MIT] [website](https://www.rttr.org)
* [simple_enum](https://github.com/arturbac/simple_enum) - Biblioteca de suporte para enumeraciones C++ rápida, intuitiva e segura em cuanto a tipos. [BSL-1.0] [website](https://arturbac.github.io/simple_enum/)
* [TSMP](https://github.com/fabian-jung/tsmp) - Biblioteca C++20 sem intrusiones ni macros para reflexão estática. Utiliza libclang para extraer dados de reflexão do código código-fonte e exponerlos por meio de especialización de templates. [MIT]
* [visit_struct](https://github.com/cbeck88/visit_struct) - Biblioteca diminuta para reflexão de campos de estruturas em C++. [Boost]
* [Refureku](https://github.com/jsoysouvanh/Refureku) - Biblioteca C++17 de reflexão em tempo de execução e geração de código. [MIT]

<a id="regular-expression"></a>
## Expressões Regulares

* [CppVerbalExpressions](https://github.com/VerbalExpressions/CppVerbalExpressions) - Expressões regulares em C++ de forma simples. [MIT]
* [CTRE](https://github.com/hanickadot/compile-time-regular-expressions) - Comparador de expressões regulares compatível (casi) com PCRE em tempo de compilação. [MIT]
* [Hyperscan](https://github.com/intel/hyperscan) - Biblioteca de Intel, de alto desempenho, para comparar várias expressões regulares. Permite comparar simultáneamente grandes quantidades de expressões (hasta decenas de miles). é usado normalmente em uma pila de bibliotecas DPI. [BSD]
* [Oniguruma](https://github.com/kkos/oniguruma) - Biblioteca moderna e flexível de expressões regulares compatível com várias codificaciones de caracteres. [BSD]
* [PCRE](https://pcre.org/) - Biblioteca C de expressões regulares inspirada em as funções de expressões regulares de Perl. [BSD]
* [PCRE2](https://github.com/PCRE2Project/pcre2) - Conjunto de funções C que implementan
a coincidencia de padrões de expressões regulares. [BSD] [website](https://pcre2project.github.io/pcre2/)
* [PIRE](https://github.com/yandex/pire) - Biblioteca de expressões regulares incompatibles com Perl de Yandex. Pode ser realmente rápida (mais de 400 MB/s). [LPGL v3.0]
* [RE2](https://github.com/google/re2) - Biblioteca de expressões regulares por meio de uma máquina de estados finitos baseada na teoría de autómatas. [BSD-3-Clause]
* [SLRE](https://github.com/cesanta/slre) - Motor de expressões regulares superligero para C/C++. [GPLv2/Proprietary]
* [sregex](https://github.com/openresty/sregex) - Biblioteca de motor de expressões regulares compatível com Perl, baseada em NFA/DFA sem retroceso, para comparar grandes flujos de dados. [BSD]
* [SRELL](https://www.akenotsuki.com/misc/srell/en/) - Biblioteca de templates C++ de expressões regulares compatível com Unicode. [BSD]
* [TRE](https://github.com/laurikari/tre) - Biblioteca de comparación aproximada de expressões regulares e ferramenta de linha de comandos agrep. [BSD-2-Clause]
* [Vectorscan](https://github.com/VectorCamp/vectorscan) - Bifurcación Portátil da biblioteca de comparación de expressões regulares de alto desempenho. [BSD-3-Clause]
* [Pawn.Regex](https://github.com/urShadow/Pawn.Regex) - Complemento Pawn que fornece compatibilidade com expressões regulares por meio de std::regex de C++11. [MIT]

<a id="robotics"></a>
## Robótica

* [FusionCore](https://github.com/manankharwar/fusioncore) - Biblioteca ROS 2 de fusión sensorial UKF que combina GPS, IMU e odometría de ruedas com ruído adaptativo e rechazo de valores atípicos para uma localização exterior robusta. [Apache2]
* [MOOS-IvP](https://moos-ivp.org) - Conjunto de módulos C++ de código aberto que proporcionan autonomía a plataformas robóticas, especialmente vehículos marinos autónomos.
* [MRPT](https://www.mrpt.org/) - Kit de ferramentas de programação de robots móveis. [BSD]
* [PCL](https://github.com/PointCloudLibrary/pcl) - Point Cloud Library é um proyecto autónomo, amplio e de código aberto para o processamento de imagens e nubes de puntos 2D/3D. [BSD] [website](https://www.pointclouds.org/)
* [Robotics Library (RL)](https://www.roboticslibrary.org/) - Biblioteca C++ autónoma para cinemática, planejamento de movimiento e control de robots. [BSD]
* [RobWork](https://gitlab.com/sdurobotics/RobWork) - Coleção de bibliotecas C++ para simulação e control de sistemas robóticos. [Apache2] [website](https://www.robwork.dk/)
* [ROS](https://wiki.ros.org/) - Robot Operating System oferece bibliotecas e ferramentas para ayudar aos desenvolvedores de software a criar aplicações robóticas. [BSD]
* [Ruckig](https://github.com/pantor/ruckig) - Geração de movimiento em tempo real para robots e máquinas. [MIT] [website](https://ruckig.com)
* [YARP (Yet Another Robot Platform)](https://github.com/robotology/yarp) - Biblioteca e kit de ferramentas para comunicação e interfaces de dispositivos. [BSD-3-Clause] [website](https://www.yarp.it/)
* [SPICE Toolkit](https://github.com/arturania/cspice) - Biblioteca e kit de ferramentas para calcular informação geométrica utilizada na planejamento e análise de observaciones científicas obtenidas por naves espaciales robóticas. [MIT] [website](https://naif.jpl.nasa.gov/naif/toolkit.html)

<a id="scientific-computing"></a>
## Computação Científica

* [AMGCL](https://github.com/ddemidov/amgcl) - Biblioteca C++ somente de cabeçalho para resolver grandes sistemas lineales dispersos por meio de multigrid algebraico. [MIT]
* [Au](https://github.com/aurora-opensource/au) - Biblioteca de unidades físicas compatível com C++14, sem dependências e com opción de distribución em um somente arquivo. Prioriza a segurança, accesibilidad, desempenho e experiencia de desenvolvimento. [Apache 2.0] [website](https://aurora-opensource.github.io/au/main/)
* [FFTW](https://www.fftw.org/) - Biblioteca C para calcular a DFT em uma ou várias dimensiones. [GPL]
* [GSL](https://www.gnu.org/software/gsl/) - Biblioteca científica de GNU. [GPL]
* [preCICE](https://github.com/precice/precice) - Biblioteca de acoplamiento para simulações multifísicas particionadas (FSI, CHT e mais). [LGPL] [website](https://precice.org/)
* [TileDB](https://github.com/TileDB-Inc/TileDB) - SGBD rápido para matrices multidimensionales densas e dispersas. [MIT] [website](https://tiledb.io/)
* [Trilinos](https://github.com/trilinos/Trilinos) - Solucionadores de EDP de alto desempenho. [BSD]
* [Torch](https://github.com/torch/torch7) - Framework de computação científica com amplia compatibilidade com algoritmos de aprendizado automático e prioridad para as GPU. [BSD-3-Clause] [website](https://torch.ch/)
* [volesti](https://github.com/GeomScale/volesti) - Muestreo de alto dimensión a partir de distribuciones truncadas, otimização convexa e cálculo de volúmenes.

<a id="scripting"></a>
## Scripts

* [AngelScript](https://www.angelcode.com/angelscript/) - AngelScript é um linguagem de script interpretado/compilado orientado a jogos. [zlib]
* [Boost.Python](https://github.com/boostorg/python) - Biblioteca C++ que permite uma interoperabilidad fluida entre C++ e Python. [Boost] [website](https://boost.org/libs/python)
* [cppimport](https://github.com/tbenthompson/cppimport) - ¡Importa arquivos C++ directamente de Python! [MIT]
* [CppSharp](https://github.com/mono/CppSharp) - Ferramentas e bibliotecas para conectar API C/C++ com linguagens de alto nível. [MIT]
* [ChaiScript](https://github.com/ChaiScript/ChaiScript/) - Linguagem de scripting integrado para C++, fácil de usar. [BSD] [website](https://chaiscript.com/)
* [ctypes.sh](https://github.com/taviso/ctypes.sh) - Interface para funções externas de bash. [MIT]
* [Cython](https://github.com/cython/cython) - Cython é um compilador estático optimizador para Python e o linguagem extendido Cython (baseado em Pyrex). facilita a gravação de extensões C para Python tanto como a do propio Python. [Apache] [website](https://cython.org/)
* [djinni](https://djinni.xlcpp.dev) - Ferramenta para gerar declaraciones de tipos e bindings de interface entre linguagens. [Apache2]
* [Duktape](https://github.com/svaarala/duktape) - Motor JavaScript integrável e de tamanho reducido. [MIT] [website](https://duktape.org)
* [JavaCpp](https://github.com/bytedeco/javacpp) - O puente que faltaba entre Java e C++ nativo. [Apache2]
* [JerryScript](https://github.com/jerryscript-project/jerryscript) - Motor JavaScript ultraleve para a Internet das Coisas. [Apache-2.0] [website](https://jerryscript.net/)
* [libffi](https://github.com/libffi/libffi) - Biblioteca Portátil de interface para funções externas. [MIT] [website](https://sourceware.org/libffi/)
* [Lua](https://www.lua.org/) - Motor de scripting mínimo e rápido para arquivos de configuração e scripting básico de aplicações. [MIT]
* [LuaBridge](https://github.com/vinniefalco/LuaBridge) - Biblioteca leve e sem dependências para enlazar Lua com C++. [MIT]
* [LuaBridge3](https://github.com/kunitoki/LuaBridge3) - Biblioteca leve e sem dependências para enlazar Lua, LuaJIT, Luau e Ravi com C++. [MIT]
* [luacxx](https://github.com/dafrito/luacxx) - API C++11 para criar bindings de Lua. [MIT]
* [Luau](https://github.com/luau-lang/luau) - Linguagem de scripting integrável rápido, pequeno, seguro e de tipado gradual, derivado de Lua. [MIT] [website](https://luau.org/)
* [MicroQuickJS](https://github.com/bellard/mquickjs) - MicroQuickJS (também MQuickJS) é um motor JavaScript dirigido a sistemas integrados. [MIT]
* [MiniScript](https://miniscript.org/) - Linguagem de scripting moderno, elegante e fácil de aprender e integrar em projetos C# ou C++ próprios. [MIT]
* [nanobind](https://github.com/wjakob/nanobind) - Bindings C++/Python diminutos e eficientes. [BSD-3-Clause]
* [nbind](https://github.com/charto/nbind) - Cabeçalhos mágicas que permitem acceder a bibliotecas C++ de JavaScript. [MIT]
* [PHP-CPP](https://github.com/CopernicaMarketingSoftware/PHP-CPP) - Biblioteca para criar extensões PHP com C++. [Apache2] [website](https://www.php-cpp.com/)
* [pocketpy](https://github.com/blueloveTH/pocketpy) - Interpretador de Python C++17 somente de cabeçalho para scripting de jogos. [MIT] [website](https://pocketpy.dev/)
* [pybind11](https://github.com/pybind/pybind11) - Interoperabilidad fluida entre C++11 e Python. [BSD]
* [QuickJS](https://bellard.org/quickjs/) - Motor JavaScript pequeno e integrável. [MIT]
* [SIP](https://riverbankcomputing.com/software/sip/intro) - Gerador de bindings C ou C++ para Python v2 e v3. [GPL]
* [sol2](https://github.com/ThePhD/sol2) - Wrapper de API C++ <-> Lua com funções avanzadas e um desempenho de primera. [MIT]
* [SWIG](https://github.com/swig/swig) - Gerador de wrappers/interfaces que permite conectar código C++ com JavaScript, Perl, PHP, Python, Tcl e Ruby. [GPL/Output not licensed] [website](https://www.swig.org/)
* [txiki.js](https://github.com/saghul/txiki.js) - ambiente de execução JavaScript diminuto. [MIT]
* [V7](https://github.com/cesanta/v7) - Motor JavaScript integrado. [GPL2]
* [V8](https://v8.dev) - Motor JavaScript rápido de Google, integrável em cualquier aplicação C++. [BSD]
* [v8pp](https://github.com/pmed/v8pp) - Biblioteca somente de cabeçalho para exponer classes e funções C++ em V8 e utilizarlas em JavaScript. [BOOST] [website](https://pmed.github.io/v8pp/)
* [ChakraCore](https://github.com/Microsoft/ChakraCore) - Motor JavaScript de Microsoft que pode integrarse em nodejs. [MIT]
* [MuJS](https://codeberg.org/ccxvii/mujs) - Interpretador JavaScript integrável em C. [ISC] [website](https://mujs.com)
* [hobbes](https://github.com/Morgan-Stanley/hobbes) - Linguagem e compilador JIT integrado de Morgan Stanley. [Apache-2.0]

<a id="serialization"></a>
## Serialização

* [BitSerializer](https://github.com/PavelKisliak/BitSerializer) - Biblioteca de serialização multiformato (JSON, XML, YAML, CSV, MsgPack). [MIT]
* [Bitsery](https://github.com/fraillt/bitsery) - Biblioteca C++ de serialização binaria, somente de cabeçalho. [MIT]
* [Bond](https://github.com/Microsoft/bond) - Framework multiplataforma e de código aberto para trabajar com dados esquematizados. [MIT]
* [Boost.Serialization](https://github.com/boostorg/serialization) - Biblioteca de serialização de Boost. [Boost] [website](https://boost.org/libs/serialization)
* [Cap'n Proto](https://github.com/capnproto/capnproto) - Formato rápido de intercambio de dados e sistema RPC baseado em capacidades. [MIT] [website](https://capnproto.org/)
* [cereal](https://github.com/USCiLab/cereal) - Biblioteca de serialização para C++11. [BSD]
* [cista](https://github.com/felixguendling/cista) - Biblioteca C++17 para (des)serialização de alto desempenho e sem copias. [MIT]
* [cppcodec](https://github.com/tplgy/cppcodec) - Biblioteca C++11 somente de cabeçalho para codificar/decodificar base64, base32 e hexadecimal com uma API coerente e flexível. [MIT]
* [FastBinaryEncoding](https://github.com/chronoxor/FastBinaryEncoding) - Solución universal e ultrarrápida de serialização binaria para C++, C#, Go, Java, JavaScript, Kotlin, Python, Ruby e Swift. [MIT]
* [FlatBuffers](https://github.com/google/flatbuffers) - Biblioteca de serialização eficiente em memória. [Apache2]
* [Kaitai Struct](https://kaitai.io) - Linguagem declarativo para describir diversas estruturas de dados binarias e compilador que genera código C++ para analizarlas. [GPLv3+][MIT][Apache2]
* [iguana](https://github.com/qicosmos/iguana) - Motor de serialização moderno, universal e fácil de usar, desenvolvido com C++20 e C++17. [Apache2]
* [MessagePack](https://github.com/msgpack/msgpack-c) - Formato eficiente de serialização binaria «semelhante a JSON» para C e C++. [Apache2] [website](https://msgpack.org/)
* [mrpt-serialization](https://github.com/mrpt/mrpt/) - Serialização versionada a formatos binarios ou de texto. [BSD] [website](https://docs.mrpt.org/reference/latest/group_mrpt_serialization_grp.html)
* [nanopb](https://github.com/nanopb/nanopb) - Implementação de Protocol Buffers em ANSI C, de tamanho de código reducido. [Zlib]
* [protobuf](https://github.com/protocolbuffers/protobuf) - Protocol Buffers, formato de intercambio de dados de Google. [BSD]
* [protobuf-c](https://github.com/protobuf-c/protobuf-c) - Implementação de Protocol Buffers em C. [BSD]
* [Protocol Puffers](https://github.com/PragmaTwice/protopuf) - Biblioteca pequena de (des)serialização compatível com protobuf, muito baseada em templates, somente de cabeçalho e escrita em C++20. [Apache-2.0]
* [SimpleBinaryEncoding](https://github.com/real-logic/simple-binary-encoding) - Codificación e decodificación de mensajes de aplicação em formato binario para aplicações de baja latencia. [Apache2]
* [upb](https://github.com/protocolbuffers/upb) - Implementação pequena de protobuf em C. [BSD]
* [Wirehair](https://github.com/catid/wirehair) - Código fountain OU(N) para grandes volúmenes de dados. [BSD-3-Clause]
* [YAS](https://github.com/niXman/yas) - outra biblioteca de serialização (**E**et **A**nother **S**erialization) muito rápida, compatível com formatos binario, texto e JSON. [Boost]
* [zpp_bits](https://github.com/eyalz800/zpp_bits) - Em realidade, a biblioteca moderna de **S**erialización mais rápida. Mira [este vídeo](https://www.youtube.com/watch?v=G7-GQhCw8eE&ab_channel=CppCon).
* [fbthrift](https://github.com/facebook/fbthrift) - Rama de Apache Thrift de Facebook, com biblioteca de serialização e framework RPC. [Apache-2.0]

<a id="serial-port"></a>
## Porta Serial

* [Asio](https://github.com/chriskohlhoff/asio/) - Asio inclui classes para criar e manipular puertos série de forma Portátil. [Boost] [website](https://think-async.com/)
* [Boost.Asio](https://github.com/boostorg/asio) - Boost.Asio inclui classes para criar e manipular puertos série de forma Portátil. [Boost] [website](https://boost.org/libs/asio)
* [CSerialPort](https://github.com/itas109/CSerialPort) - Biblioteca de puertos série leve e multiplataforma. [LGPL3]
* [Libserial](https://github.com/crayzeewulf/libserial) - Programação de puertos série em C++. [BSD-3-Clause]
* [Serial Communication Library](https://github.com/wjwwood/serial) - Biblioteca multiplataforma de puertos série, escrita em C++. [MIT] [website](https://wjwwood.io/serial/)

<a id="sorting"></a>
## Ordenação

+ [cpp-sort](https://github.com/Morwenn/cpp-sort) - Algoritmos de ordenación e ferramentas relacionadas para C++14. [MIT]
* [pdqsort](https://github.com/orlp/pdqsort) - Quicksort que derrota padrões. [zlib]
* [Timsort](https://github.com/gfx/cpp-TimSort) - Função de ordenación estable baseada em templates que supera aos algoritmos baseados em quicksort, incluido std::sort, com dados invertidos ou parcialmente ordenados. [MIT]
* [Indiesort](https://github.com/mattreecebentley/plf_indiesort) - Wrapper de ordenación que permite usar std::sort (e outras funções de ordenación com acceso aleatorio) com contêineres sem acceso aleatorio; além disso mejora a ordenación de tipos grandes ou não trivialmente copiables em contêineres e matrices de acceso aleatorio. [zLib] [website](https://plflib.org/indiesort.htm)
* [x86-simd-sort](https://github.com/numpy/x86-simd-sort) - Biblioteca de templates C++ para algoritmos de ordenación de alto desempenho baseados em SIMD. [BSD-3-Clause]

<a id="video"></a>
## Vídeo

* [libvpx](https://www.webmproject.org/code/) - SDK de códecs VP8/VP9. [BSD]
* [FFmpeg](https://www.ffmpeg.org/) - Solución completa e multiplataforma para grabar, convertir e transmitir áudio e vídeo. [LGPL2/GPL2]
* [avcpp](https://github.com/h4tr3d/avcpp) - Wrapper moderno de C++ para FFmpeg. [MIT]
* [libde265](https://github.com/strukturag/libde265) - Implementação de código aberto do códec de vídeo H.265. [LGPL] [website](https://www.libde265.org/)
* [x265](https://bitbucket.org/multicoreware/x265_git/src) - Implementação de código aberto do códec de vídeo H.265. [GPL2] [website](https://x265.readthedocs.io/en/master/)
* [OpenH264](https://github.com/cisco/openh264) - Códec H.264 de código aberto. [BSD] [website](https://www.openh264.org/)
* [Theora](https://www.theora.org/) - Formato de compressão de vídeo gratuito e aberto. [BSD]
* [Vireo](https://github.com/twitter/vireo/) - Biblioteca de processamento de vídeo leve e versátil de Twitter. [MIT]
* [libuvc](https://github.com/libuvc/libuvc) - Biblioteca multiplataforma para dispositivos de vídeo USB. [BSD]

<a id="virtual-machines"></a>
## Máquinas Virtuais

* [CarpVM](https://github.com/tekknolagi/carp) - Máquina virtual «interesante» em C. Ya veremos cómo resulta. [GPLv3]
* [MicroPython](https://github.com/micropython/micropython) - Busca llevar uma implementação de Python 3.x a um microcontrolador. [MIT]
* [TinyVM](https://github.com/jakogut/tinyvm) - Máquina virtual pequena, rápida e leve, escrita em ANSI C puro. [MIT]

<a id="web-application-framework"></a>
## Framework para Aplicações Web

* [aeronet](https://github.com/sjanel/aeronet) - Framework modular C++ de microservicios HTTP/1.1, HTTP/2 e WebSocket, de alto desempenho e focado em desempenho e escalabilidade. [MIT]
* [Civetweb](https://github.com/civetweb/civetweb) - Servidor web integrável C/C++ poderosa e fácil de usar, com compatibilidade opcional com CGI, SSL e Lua. [MIT]
* [C++ REST SDK](https://github.com/Microsoft/cpprestsdk) - Proyecto de Microsoft para a comunicação cliente-servidor baseada na nube em código nativo, por meio de um design moderno de API C++ asíncrona. [MIT]
* [CppCMS](https://cppcms.com/) - Framework gratuito de desenvolvimento web de alto desempenho (não é um CMS). [LGPLv3]
* [Crow](https://github.com/CrowCpp/Crow) - Crow é um microframework C++ para ejecutar servicios web. Utiliza um enrutamiento semelhante ao de Flask para Python. [BSD] [website](https://crowcpp.org)
* [Cutelyst](https://github.com/cutelyst/cutelyst) - Framework web C++ baseado em Qt, que utiliza o abordagem simples do framework Catalyst (Perl). [BSD-3-Clause] [website](https://cutelyst.org/)
* [Drogon](https://github.com/an-tao/drogon) - Framework de aplicações HTTP de alto desempenho, baseado em C++17/20. [MIT]
* [C++ wfrest](https://github.com/wfrest/wfrest) - Framework web C++ para API REST. [Apache2]
* [facil.io](https://github.com/boazsegev/facil.io) - Framework web C de alto desempenho e baseado em eventos, compatível com HTTP, WebSockets, SSE e mais. [MIT] [website](https://facil.io)
* [Kore](https://kore.io/) - Servidor web/framework ultrarrápido e flexível para aplicações web desenvolvido em C. [ISC]
* [libOnion](https://www.coralbits.com/libonion/) - Biblioteca leve que ayuda a criar servidores web em linguagem C. [LGPLv3]
* [lwan](https://github.com/lpereira/lwan) - Servidor HTTP experimental, escalável e de alto desempenho. [GPL2]
* [Mach](https://github.com/machframework/mach) - Framework web moderno C++20 focado em o desempenho, a segurança de tipos e a experiencia de desenvolvimento. [MIT] [website](https://machframework.dev/).
* [oat++](https://github.com/oatpp/oatpp) - Framework leve e sem dependências para criar servicios web de alto desempenho. [Apache-2.0] [website](https://oatpp.io/)
* [Pistache](https://pistacheio.github.io/pistache/) - Pistache é um framework REST C++ escrito em C++11 puro, sem dependências externas. [Apache2]
* [QDjango](https://github.com/jlaine/qdjango/) - Framework web escrito em C++ e baseado em Qt. Cuando é posible, tenta seguir a API de Django, de ahí seu nombre. [LGPL]
* [TreeFrog Framework](https://github.com/treefrogframework/treefrog-framework) - Framework web full-stack de alto velocidade, baseado em C++ e Qt, compatível com HTTP e WebSocket (com asignación objeto-relacional). [BSD] [website](https://www.treefrogframework.org/)
* [userver](https://github.com/userver-framework/userver) - Framework assíncrono C++17 com um amplio conjunto de abstracciones e controladores de bases de dados para criar microservicios, servicios e utilitários eficientes com rapidez e facilidade. [Apache-2.0] [website](https://userver.tech/)
* [Wt](https://www.webtoolkit.eu/wt) - Biblioteca C++ para desenvolver aplicações web. [GPL/Proprietary]
* [httpserver.h](https://github.com/jeremycw/httpserver.h) - Biblioteca de servidor HTTP para C, em uma um único cabeçalho. [MIT]
* [libhttp](https://github.com/lammertb/libhttp) - Biblioteca HTTP e HTTPS multiplataforma em C/C++. [MIT]

## XML
*XML é uma basura. De verdad. Não hay excusas. A as personas les resulta desagradable analisar XML, e para as computadoras é um desastre. Não hay motivo para que exista esa porquería horrible. - Linus Torvalds*

* [Boost.PropertyTree](https://github.com/boostorg/property_tree) - Analisador/gerador de árvores de propiedades que pode analisar arquivos XML/JSON/INI/Info. [Boost] [website](https://boost.org/libs/property_tree)
* [Expat](https://www.libexpat.org/) - Biblioteca de análise XML escrita em C. [MIT]
* [Libxml2](https://xmlsoft.org/) - Analisador e kit de ferramentas XML em C de Gnome. [MIT]
* [libxml++](https://libxmlplusplus.sourceforge.net/) - Analisador XML para C++. [LGPL2]
* [Mini-XML](https://github.com/michaelrsweet/mxml) - Biblioteca pequena de análise XML escrita em ANSI C. [LGPL2 with exceptions]
* [PugiXML](https://pugixml.org/) - Analisador XML C++ leve, simples e rápido, compatível com XPath. [MIT]
* [RapidXml](https://rapidxml.sourceforge.net/) - Intento de criar o analisador XML mais rápido posible, conservando facilidade de uso, portabilidad e compatibilidade razonable com W3C. [Boost]
* [TinyXML](https://sourceforge.net/projects/tinyxml/) - Analisador XML C++ simples, pequeno e minimalista, fácil de integrar em outros programas. [zlib]
* [TinyXML2](https://github.com/leethomason/tinyxml2) - Analisador XML C++ simples, pequeno e eficiente, fácil de integrar em outros programas. [zlib]
* [TinyXML++](https://github.com/rjpcomputing/ticpp) - Interface completamente nueva para TinyXML que aprovecha MUCHAS ventajas de C++: templates, excepciones e um manejo de erros muito melhor. [MIT]
* [Xalan C](https://github.com/apache/xalan-c) - Biblioteca e programa de linha de comandos para transformar documentos XML por meio de hojas de estilo conformes com os padrões XSLT 1.0. [Apache-2.0] [website](https://xalan.apache.org/)
* [Xerces-C++](https://xerces.apache.org/xerces-c/) - Analisador XML validador escrito em um subconjunto Portátil de C++. [Apache2]

<a id="yaml"></a>
## YAML

* [fkYAML](https://github.com/fktn-k/fkYAML) - Biblioteca YAML C++ somente de cabeçalho. [MIT]
* [LibCYAML](https://github.com/tlsa/libcyaml) - Biblioteca C para ler e escrever YAML. [ISC]
* [libfyaml](https://github.com/pantoniou/libfyaml) - Analisador/escritor sofisticado para YAML 1.2 e JSON. [MIT]
* [LibYAML](https://github.com/yaml/libyaml) - Biblioteca C para analisar e emitir YAML. [MIT] [website](https://pyyaml.org/wiki/LibYAML)
* [mini-yaml](https://github.com/jimmiebergmann/mini-yaml) - Serializador/deserializador YAML 1.0 para C++11, em uma um único cabeçalho. [MIT]
* [rapidyaml](https://github.com/biojppm/rapidyaml) - Rapid YAML é uma biblioteca C++ para analisar e emitir YAML. [MIT]
* [yaml-cpp](https://github.com/jbeder/yaml-cpp) - Analisador e emisor YAML em C++. [MIT]

<a id="miscellaneous"></a>
## Diversos
*Bibliotecas ou ferramentas útiles que não encajan em as categorías anteriores ou que quizá aún não estão clasificadas*

* [access_profiler](https://github.com/arvidn/access_profiler) - Ferramenta para contar accesos a variables miembro em programas C++. [GPL3]
* [American fuzzy lop](https://lcamtuf.coredump.cx/afl/) também conocido como afl-fuzz - Ferramenta de fuzzing alocada que descubre erros automáticamente si se le da tempo e uma entrada de ejemplo mínima. [Apache2]
* [Argon2](https://github.com/P-H-C/phc-winner-argon2) - Hash de contraseñas Argon2, ganador de PHC. [CC0/Apache2]
* [AsmJit](https://github.com/asmjit/asmjit) - Geração de código máquina de baja latencia. [Zlib] [website](https://asmjit.com)
* [Better String](https://bstring.sourceforge.net) - Alternativa a a biblioteca de strings de C, mais funcional e sem problemas de desbordamiento de búfer. Também inclui um wrapper C++. [BSD, GPL2]
* [Boost.Signals2](https://github.com/boostorg/signals2) - Implementação de um sistema gestionado de señales e slots. [Boost] [website](https://boost.org/libs/signals2)
* [casacore](https://code.google.com/p/casacore/) - Conjunto de bibliotecas centrales C++ derivadas de aips++. [LGPL]
* [CCTZ](https://github.com/google/cctz) - Biblioteca C++ para convertir entre horas absolutas e civiles siguiendo as reglas de uma zona horaria. [Apache-2.0]
* [Cheat Sheets of HackingCPP](https://hackingcpp.com/cpp/cheat_sheets.html) - Hojas de referencia e infografías incríveis sobre algoritmos, vistas, contêineres, aleatoriedad, etc.
* [Concord](https://github.com/Cogmasters/concord) - Biblioteca wrapper da API de Discord escrita em C. [MIT] [website](https://cogmasters.github.io/concord)
* [CPPItertools](https://github.com/ryanhaining/cppitertools) - plugins para bucles for baseados em rangos, inspirados nos built-ins de Python e seu biblioteca itertools. [BSD-2-Clause]
* [CPP-JWT](https://github.com/arun11299/cpp-jwt) - Biblioteca JSON Web Token para C++. [MIT]
* [cpp-lazy](https://github.com/MarcDirven/cpp-lazy) - Biblioteca rápida e simples de avaliação diferida para C++11/14/17/20. [MIT]
* [CRCpp](https://github.com/d-bahr/CRCpp) - Biblioteca CRC para C++ rápida e fácil de usar. [BSD-3-Clause]
* [cxx-prettyprint](https://github.com/louisdx/cxx-prettyprint) - Biblioteca para imprimir de forma legível contêineres C++. [Boost]
* [date](https://github.com/HowardHinnant/date) - Biblioteca de fecha e hora baseada na cabeçalho <chrono> de C++11/14/17. [MIT] [website](https://howardhinnant.github.io/date/date.html)
* [D++ (DPP)](https://github.com/brainboxdotcc/DPP) - Biblioteca C++ leve, escalável e de alto desempenho para criar bots de Discord. [Apache2] [website](https://dpp.dev)
* [Dragonbox](https://github.com/jk-jeon/dragonbox) - Implementação de referencia de um nuevo algoritmo C++ para convertir flotantes a strings. [Apache2/BSL-1.0]
* [DynaMix](https://github.com/iboB/dynamix) - Biblioteca que permite componer e modificar objetos durante a execução. [MIT]
* [emio](https://github.com/Viatorus/emio) - Biblioteca segura e rápida de E/S de caracteres de alto e baixo nível. [MIT]
* [faker-cxx](https://github.com/cieslarmichal/faker-cxx) - Biblioteca Faker C++20 para gerar dados falsos (mas realistas) para testes e desenvolvimento. [MIT]
* [fast_float](https://github.com/fastfloat/fast_float) - from_chars de C++ rápido e exacto, entre 4 e 10 veces mais rápido que strtod; forma parte de GCC 12, Chromium, Redis e Webkit/Safari. [Apache2/BSL-1.0/MIT]
* [FastFormat](https://www.fastformat.org) - Formateo C++ rápido e seguro, inspirado em log4j e Pantheios. [Simplified BSD]
* [fast_io](https://github.com/cppfastio/fast_io) - E/S significativamente mais rápida para C++20. [MIT]
* [fccf](https://github.com/p-ranav/fccf) - Ferramenta de linha de comandos que busca recursivamente em um directorio código código-fonte C/C++ que coincida com uma string de busca. [MIT]
* [ffc.h](https://github.com/kolemannix/ffc.h) - Análise acelerado de float/double para C99, em uma um único cabeçalho. Adaptación da biblioteca fast_float. [Apache-2.0/BSL-1.0/MIT]
* [{fmt}](https://github.com/fmtlib/fmt) :zap: - Biblioteca de formateo C++ pequena, segura e rápida. [Simplified BSD] [website](https://fmt.dev)
* [gcc-poison](https://github.com/leafsr/gcc-poison) - Arquivo de cabeçalho simples para prohibir o uso de funções C/C++ inseguras em aplicações.
* [Gear-Lib](https://github.com/gozfree/gear-lib) - Coleção de bibliotecas básicas em POSIX C para desenvolvimento integrado e de servicios de red. [MIT]
* [happly](https://github.com/nmwsharp/happly) - Analisador C++ somente de cabeçalho para o formato de arquivo PLY. ¡Analiza .ply com gusto! [MIT]
* [hedley](https://github.com/nemequ/hedley) - Cabeçalho C/C++ projetada para suavizar algumas molestias específicas de cada plataforma. [website](https://nemequ.github.io/hedley/)
* [Hexi](https://github.com/EmberEmu/Hexi) - Biblioteca C++ leve, somente de cabeçalho, para flujos binarios e serialização. [Apache-2.0/MIT]
* [HighwayHash](https://github.com/google/highwayhash) - Funções hash rápidas e robustas: SipHash/HighwayHash. [Apache-2.0]
* [inja](https://github.com/pantor/inja) - Motor de templates para C++ moderno. [MIT]
* [Jinja2С++](https://github.com/jinja2cpp/Jinja2Cpp) - Implementação de motor de templates casi totalmente conforme. [website](https://jinja2cpp.github.io/)
* [jwt-cpp](https://github.com/Thalhammer/jwt-cpp) - Biblioteca somente de cabeçalho para criar e validar JSON Web Tokens em C++. [MIT]
* [Kangaru](https://github.com/gracicot/kangaru) - Contenedor de inyección de dependências para C++11 e C++14. [MIT]
* [Klib](https://github.com/attractivechaos/klib) - Implementações pequeñas e ligeras de algoritmos e estruturas de dados comuns. [MIT]
* [KOMIHASH](https://github.com/avaneev/komihash) - Função hash muito rápida e de alto qualidade, compatível com hashing incremental discreto e em fluxo. [MIT]
* [libcpuid](https://github.com/anrieff/libcpuid) - Pequena biblioteca C para detectar CPU x86 e extraer seus características. [BSD]
* [libenvpp](https://github.com/ph3at/libenvpp) - Biblioteca C++ moderna para analisar variables de ambiente com segurança de tipos. [Apache-2.0]
* [libevil](https://github.com/avati/libevil) - O gerenciador de licencias malvado. [GPLv3]
* [libnih](https://github.com/keybuk/libnih) - Biblioteca leve de funções e estruturas C. [GPL2.1]
* [libONVIF](https://github.com/Privatehive/libONVIF) - outra biblioteca ONVIF mais. [GPL-3.0]
* [libpopcnt](https://github.com/kimwalisch/libpopcnt) - Biblioteca C/C++ rápida para contar bits activos. [BSD-2-Clause]
* [libsigc++](https://github.com/libsigcplusplus/libsigcplusplus) - Sistema de callbacks com segurança de tipos para C++ padrão. [LGPL] [website](https://libsigcplusplus.github.io/libsigcplusplus)
* [libusb](https://libusb.info/) - Biblioteca USB universal que permite acceder a dispositivos USB de forma Portátil. [LGPL2]
* [Mach7](https://github.com/solodon4/Mach7) - Biblioteca C++ de coincidencia de padrões. [BSD]
* [minja.hpp](https://github.com/google/minja) - Motor minimalista de templates Jinja C++ para templates de chat LLM. [MIT]
* [mio](https://github.com/mandreyel/mio) - Biblioteca C++11 multiplataforma somente de cabeçalho para E/S de arquivos asignados em memória. [MIT]
* [MPark.Variant](https://github.com/mpark/variant) - `std::variant` de C++17 para C++11/14/17. [BSL-1.0]
* [MPH](https://github.com/qlibs/mph) - Biblioteca de hashing perfecto estático [Minimal] para C++20. [MIT]
* [Patternia](https://github.com/sentomk/patternia) - Fornece coincidencia de padrões para C++ moderno. [MIT] [website](https://patternia.tech/)
* [PEGTL](https://github.com/taocpp/PEGTL) - Biblioteca de templates de gramáticas de expressões de análise. [MIT]
* [Pipes](https://github.com/joboccara/pipes) - Pipelines para escrever código expresivo sobre colecciones C++. [MIT]
* [pprint](https://github.com/p-ranav/pprint) - Impresor legível para C++ moderno. [MIT]
* [pspsdk](https://github.com/pspdev/pspsdk) - SDK de código aberto para desenvolver homebrew de PSP. [BSD/GNU GPL3]
* [QtVerbalExpressions](https://github.com/VerbalExpressions/QtVerbalExpressions) - Biblioteca Qt baseada na biblioteca C++ VerbalExpressions. [MIT]
* [rain](https://github.com/DOSAYGO-Research/rain) - O hash não criptográfico de 128 e 256 bits mais rápido; supera todas as testes e ocupa menos de 140 linhas de código código-fonte. [Apache-2.0]
* [RapidFuzz](https://github.com/rapidfuzz/rapidfuzz-cpp) - Comparación difusa rápida de strings em C++ por meio da distancia de Levenshtein. [MIT] [website](https://rapidfuzz.github.io/rapidfuzz-cpp/)
* [rapidhash](https://github.com/Nicoshev/rapidhash) - Algoritmo de hashing muito rápido, de alto qualidade e independente da plataforma. [BSD-2-Clause]
* [Reaction](https://github.com/lumia431/reaction) - Framework leve de programação reactiva, somente de cabeçalho, que aprovecha as funções modernas de C++20 para criar aplicações eficientes de fluxo de dados. [MIT]
* [reproc](https://github.com/DaanDeMeyer/reproc) - Biblioteca de procesos multiplataforma (C99/C++11). [MIT]
* [SafetyHook](https://github.com/cursey/safetyhook) - Biblioteca C++23 de hooking de procedimientos. [BSL-1.0]
* [scnlib](https://github.com/eliaskosunen/scnlib) - scanf para C++ moderno. [Apache-2.0] [website](https://v1.scnlib.dev/)
* [Scintilla](https://scintilla.org/) - Componente gratuito para editar código código-fonte. [MIT]
* [SDS](https://github.com/antirez/sds) - Biblioteca de strings dinámicas sencillas para C. [BSD]
* [semver.c](https://github.com/h2non/semver.c) - Analisador e renderizador semver em ANSI C. [MIT]
* [sigslot](https://sigslot.sourceforge.net/) - Biblioteca C++ de señales e slots. [PublicDomain]
* [SIMD Everywhere](https://github.com/simd-everywhere/simde) - Implementações de conjuntos de instrucciones SIMD para sistemas que não os admiten de forma nativa. [MIT]
* [SLJIT](https://github.com/zherczeg/sljit) - Compilador JIT de baixo nível e independente da plataforma. [BSD] [website](https://zherczeg.github.io/sljit/)
* [palacaze/sigslot](https://github.com/palacaze/sigslot) - Implementação simples de señales e slots em C++14, somente de cabeçalho. [MIT]
* [simdzone](https://github.com/NLnetLabs/simdzone) - Analisador rápido de zonas DNS e compatível com os padrões. [BSD-3-Clause]
* [SimpleSignal](https://github.com/larspensjo/SimpleSignal) - Señales C++11 de alto desempenho. [PublicDomain]
* [single_file_libs](https://github.com/r-lyeh/single_file_libs) - Bibliotecas de código aberto C/C++ com dependências mínimas. [Various]
* [Spicy](https://github.com/zeek/spicy) - Gerador de analisadores C++ para inspeccionar protocolos e arquivos. [BSD] [website](https://docs.zeek.org/projects/spicy/en/latest/)
* [Stage](https://github.com/rtv/Stage) - Simulador de robots móveis. [GPL2]
* [stb](https://github.com/nothings/stb) :zap: - Conjunto de bibliotecas C/C++ de arquivo único. [PublicDomain]
* [stdman](https://github.com/jeaye/stdman) - Ferramenta que analiza arquivos HTML archivados de [cppreference](https://cppreference.com) e genera páginas de manual com formato groff para sistemas Unix. [MIT]
* [StringZilla](https://github.com/ashvardanian/StringZilla) - O Godzilla de as bibliotecas de strings: divide, ordena e baraja grandes conjuntos de dados textuales antes de que puedas decir «Torre de Tokio». [Apache-2.0]
* [StrTk](https://www.partow.net/programming/strtk/index.html) - Biblioteca C++ de rutinas de processamento de strings de alto desempenho. [MIT]
* [tgbotxx](https://github.com/baderouaich/tgbotxx) - Biblioteca C++ para bots de Telegram. [MIT]
* [The RaBitQ Library](https://github.com/VectorDB-NTU/RaBitQ-Library) - Biblioteca leve para o algoritmo RaBitQ. [Apache-2.0] [website](https://vectordb-ntu.github.io/RaBitQ-Library/)
* [tiny::optional](https://github.com/Sedeniono/tiny-optional/) - substituição de std::optional que não desperdicia memória innecesariamente. [BSL-1.0]
* [Tulip Indicators](https://tulipindicators.org) - Biblioteca C com mais de 100 indicadores de análise técnico financiero. [LGPL]
* [ub-canaries](https://github.com/regehr/ub-canaries) - Coleção de programas C/C++ que intentan que os compiladores aprovechen comportamientos não definidos.
* [value-category-cheatsheet](https://github.com/jeaye/value-category-cheatsheet) Hoja de referencia PDF sobre lvalues, rvalues e similares. [Jank copyleft]
* [VarTypes](https://github.com/szi/vartypes) - Framework orientado a objetos e com muchas funções para gestionar variables em C++ / Qt4. [LGPL]
* [Wildcards](https://github.com/zemasoft/wildcards/) - Biblioteca simples de templates C++ somente de cabeçalho que implementa coincidencias com comodines. [BSL-1.0]
* [xjb](https://github.com/xjb714/xjb) - Algoritmo rápido para convertir flotantes em strings. [Apache-2.0]
* [xxHash](https://github.com/Cyan4973/xxHash) - Algoritmo hash não criptográfico extremamente rápido. [BSD-2-Clause] [website](https://xxhash.com/)
* [xxhash_cpp](https://github.com/RedSpah/xxhash_cpp) - Adaptación da biblioteca xxhash a C++17. [BSD-2-Clause]
* [ZBar](https://zbar.sourceforge.net/) - Biblioteca de escáner de códigos de barras que detecta códigos em fotos, imagens e flujos de vídeo e devuelve seu valor. [LGPL2]
* [ZXing](https://github.com/zxing/zxing/) - Biblioteca de processamento de imagens de códigos de barras 1D/2D e múltiplos formatos, de código aberto e implementada em Java, com adaptaciones a outros linguagens. [Apache]
* [spy](https://github.com/jfalcou/spy) - Biblioteca constexpr C++17 para detectar sistema operativo, compilador, arquitetura e SIMD em tempo de compilação. [MIT]
* [licensepp](https://github.com/amrayn/licensepp) - Biblioteca de gestión de licencias de software para projetos C++. [Apache-2.0]
* [tinydir](https://github.com/cxong/tinydir) - Lector C de directorios e arquivos leve, Portátil e fácil de integrar. [BSD-2-Clause]
* [Cello](https://github.com/orangeduck/Cello) - Programação de alto nível em C, incluindo estruturas de dados genéricas e polimorfismo. [BSD-2-Clause] [website](https://libcello.org/)
* [dyno](https://github.com/ldionne/dyno) - Biblioteca C++ para polimorfismo em tempo de execução com semántica de valor. [Boost]
* [PolyHook](https://github.com/stevemk14ebr/PolyHook) - Biblioteca C++ de hooking x86/x64. [MIT]
* [Verdigris](https://github.com/woboq/verdigris) - Biblioteca somente de cabeçalho que permite usar Qt sem necesitar moc. [MIT]
* [Flicks](https://github.com/OculusVR/Flicks) - Unidad de tempo definida por Facebook/Oculus para representar com exactitud as frecuencias de fotogramas habituales. [BSD]
* [Linq](https://github.com/pfultz2/Linq) - Fornece sintaxis LINQ para comprensión de listas em C++. [Boost]
* [libcorrect](https://github.com/quiet/libcorrect) - Biblioteca C para códigos convolucionales e corrección de erros Reed-Solomon. [BSD-3-Clause]
* [libfsm](https://github.com/katef/libfsm) - Biblioteca para criar e ejecutar máquinas de estados finitos, incluindo expressões regulares e glob. [BSD-2-Clause]
* [origin](https://github.com/asutton/origin) - Biblioteca C++ para conceptos, diagnósticos e outras utilidades fundamentales.

# Software
*Software para criar um ambiente de desenvolvimento.*

<a id="compiler"></a>
## Compilador
*Lista de compiladores de C ou C++*

* [8cc](https://github.com/rui314/8cc) - Um compilador C pequeno.
* [c](https://github.com/ryanmjacobs/c) - ¡Compila e ejecuta «scripts» C de uma única vez! [MIT]
* [Clang](https://clang.llvm.org/) - Compilador C para LLVM. compatível com C++11/14/1z e C11. Desenvolvido por o equipo de LLVM. [NCSA]
* [Fil-C](https://fil-c.org/) - Implementação de C e C++ com segurança de memória e compatibilidade fanática.
* [GCC](https://gcc.gnu.org/) - GNU Compiler Collection. compatível com C++11/14/1z, C11 e OpenMP. [GNU GPL3]
* [PCC](https://github.com/IanHarvey/pcc) - Compilador C muito antiguo. compatível com C99.
* [AMD C++ Compiler](https://www.amd.com/en/developer/aocc.html) - Desenvolvido por AMD.
* [Intel C++ Compiler](https://software.intel.com/en-us/c-compilers) - Desenvolvido por Intel.
* [LLVM](https://llvm.org/) - Coleção de tecnologías modulares e reutilizáveis de compiladores e strings de ferramentas.
* [Microsoft Visual C++](https://docs.microsoft.com/en-us/cpp/dotnet/dotnet-programming-with-cpp-cli-visual-cpp?view=msvc-160) - MSVC, desenvolvido por Microsoft.
* [Open WatCom](https://github.com/open-watcom) - Compiladores cruzados e ferramentas Watcom C, C++ e Fortran. [Sybase Open Watcom Public License]
* [Oracle Solaris Studio](https://www.oracle.com/technetwork/server-storage/solarisstudio/overview/index.html) - Compilador C, C++ e Fortran para SPARC e x86. compatível com C++11. Disponível em Linux e Solaris. [OTN Developer License]
* [TCC](https://bellard.org/tcc/) - Tiny C Compiler. [LGPL]
* [sierra](https://sierra-lang.github.io/) - Linguagem de programação orientado a CISC e focado em criar programas mantenibles.
* [movfuscator](https://github.com/xoreaxeaxeax/movfuscator) - Compilador C de uma única instrucción que compila programas usando únicamente instrucciones mov. [MIT]

<a id="online-compiler"></a>
## Compilador Online
*Lista de compiladores C ou C++ em linha*

* [codechef](https://www.codechef.com/ide) - Um simples compilador em linha de CodeChef.
* [coliru](https://coliru.stacked-crooked.com/) - Compilador/shell em linha compatível com vários compiladores C++.
* [Compiler Explorer](https://gcc.godbolt.org/) - Compilador interactivo com saída em ensamblador disponível.
* [CompileOnline](https://www.tutorialspoint.com/codingground.htm) - Compila e ejecuta C++ em linha em Linux.
* [Ideone](https://ideone.com/) - Compilador em linha e ferramenta de depuración que permite compilar código código-fonte e ejecutarlo em linha em mais de 60 linguagens de programação.
* [OneCompiler](https://onecompiler.com/) - Compilador em linha compatível com mais de 70 linguagens de programação e sistemas de bases de dados.
* [Programiz](https://www.programiz.com/cpp-programming/online-compiler) - Compilador em linha para estudiantes e desenvolvedores.
* [repl.it](https://repl.it) - Ferramentas e plataformas poderosas mas sencillas para docentes, estudiantes e desenvolvedores.
* [Rextester](https://rextester.com/runcode) - Compilador em linha com vários compiladores (Clang, GCC, MSVC) e editores.
* [Try It Online](https://tio.run/) - TIO é uma familia de intérpretes em linha para uma lista cada vez mayor de linguagens de programação prácticos e recreativos.
* [Wandbox](https://wandbox.org) - Compilador Clang/GCC em linha com Boost disponível.
* [paiza.io](https://paiza.io/en) - Compilador C/C++ em linha compatível com vários arquivos, integração com GitHub (gist) e edición colaborativa.
* [InterviewBit](https://www.interviewbit.com/online-cpp-compiler/) - Compilador C++ em linha simples e fácil de usar.

<a id="debugger"></a>
## Depurador
*Lista de depuradores de C ou C++*

* [Comparison of debuggers](https://en.wikipedia.org/wiki/Comparison_of_debuggers) - Lista de depuradores de Wikipedia.
* [GDB](https://www.gnu.org/software/gdb/) - Depurador de GNU.
* [LLDB](https://lldb.llvm.org/) - Depurador LLDB.
* [Metashell](https://metashell.readthedocs.org) - Shell interactivo de metaprogramación de templates que inclui o metadepurador MDB.
* [Valgrind](https://valgrind.org/) - Ferramenta para depuración de memória, detección de fugas e perfilado.
* [x64dbg](https://x64dbg.com/) - Depurador x64/x32 de código aberto para Windows.

<a id="integrated-development-environment"></a>
## Ambiente de Desenvolvimento Integrado
*Lista de IDE destacados para C ou C++*

* [Anjuta DevStudio](https://sourceforge.net/projects/anjuta/) - O IDE de GNOME. [GPL3]
* [AppCode](https://www.jetbrains.com/objc/) - IDE para desenvolver em Objective-C, C, C++ e JavaScript, baseado na plataforma IntelliJ IDEA de JetBrains.
* [Cevelop](https://www.cevelop.com) - IDE C e C++ multiplataforma baseado em Eclipse CDT, com plugins adicionales.
* [CLion](https://www.jetbrains.com/clion/) - IDE C e C++ multiplataforma de JetBrains.
* [Code::Blocks](https://www.codeblocks.org/) - IDE gratuito para C, C++ e Fortran.
* [CodeLite](https://codelite.org/) - Otro IDE C e C++ gratuito e multiplataforma. [GPL2 with an exception for plugins]
* [Dev-C++](https://sourceforge.net/projects/orwelldevcpp/) - IDE Portátil para C/C++/C++11.
* [Eclipse CDT](https://www.eclipse.org/cdt/) - IDE C e C++ com todas as funções, baseado na plataforma Eclipse.
* [Embarcadero Dev-CPP](https://github.com/Embarcadero/Dev-Cpp) - Bifurcación de Dev-C++ que inclui temas novos e compiladores modernos preinstalados. [GPLv2] [website](https://www.embarcadero.com/free-tools/dev-cpp)
* [Geany](https://www.geany.org/) - IDE pequeno, rápido e multiplataforma. [GPL]
* [IBM VisualAge](https://www-03.ibm.com/software/products/en/visgen) - Familia de entornos de desenvolvimento integrados de IBM.
* [Irony-mode](https://github.com/Sarcasm/irony-mode) - Modo menor C/C++ para Emacs baseado em libclang.
* [juCi++](https://gitlab.com/cppit/jucipp) - IDE C++ multiplataforma e leve, integrado com libclang. [MIT]
* [KDevelop](https://www.kdevelop.org/) - IDE gratuito e de código aberto.
* [Microsoft Visual Studio](https://www.visualstudio.com/) - IDE de Microsoft.
* [Microsoft Visual Studio Code](https://github.com/microsoft/vscode) :zap: - IDE de código aberto de Microsoft. [MIT] [website](https://code.visualstudio.com)
* [NetBeans](https://netbeans.org/) - IDE principalmente para desenvolver em Java, mas também em outros linguagens, em particular PHP, C/C++ e HTML5.
* [Qt Creator](https://github.com/qt-creator/qt-creator) :zap: - IDE multiplataforma para C++, JavaScript e QML, incluido em o SDK de Qt. [GPL3 with exceptions] [website](https://www.qt.io/product/development-tools)
* [rtags](https://github.com/Andersbakken/rtags) - Indexador cliente/servidor para C/C++, baseado em clang e integrável com Emacs.
* [Xcode](https://developer.apple.com/xcode/) - Desenvolvido por Apple.
* [YouCompleteMe](https://github.com/ycm-core/YouCompleteMe) - YouCompleteMe é um motor rápido de autocompletado de código para Vim, com busca aproximada enquanto escribes.
* [C Playground - Online C Programming IDE](https://programiz.pro/ide/c) - IDE em linha para practicar programação em C, donde puedes escrever, editar e ejecutar código.

<a id="build-systems"></a>
## Sistemas de Build

* [awesome-cmake](https://github.com/onqtam/awesome-cmake) - Lista selecionada de excelentes scripts, módulos e recursos de CMake.
* [Bazel](https://bazel.build) - Sistema de compilação rápido, escalável e multilenguaje de Google. [Apache]
* [Bear](https://github.com/rizsotto/Bear) - Ferramenta para gerar bases de dados de compilação para ferramentas de clang. [GPLv3]
* [Buck](https://github.com/facebook/buck) - Sistema de compilação rápido que fomenta a criação de módulos pequeños e reutilizáveis para diversas plataformas e linguagens, incluido C++; desenvolvido e utilizado em Facebook. escrito em Java. [Apache]
* [build2](https://build2.org/) - string de ferramentas multiplataforma de compilação, empaquetado e gestión de dependências para desenvolver e empaquetar projetos C/C++. [MIT]
* [Ccache](https://ccache.dev/) - Caché rápida de compiladores C/C++. [GPLv3]
* [clib](https://github.com/clibs/clib) - gerenciador de pacotes para o linguagem de programação C. [MIT]
* [CMake](https://cmake.org/) - Software multiplataforma, gratuito e de código aberto, para gestionar compilaciones de forma independente do compilador. [BSD]
* [Cget](https://github.com/pfultz2/cget) - Recuperación de pacotes de CMake. [Boost] [website](https://cget.readthedocs.io)
* [Conan](https://conan.io/) - gerenciador de pacotes C/C++ de código aberto. [MIT]
* [CPM](https://github.com/iauns/cpm) - gerenciador de pacotes C++ baseado em CMake e Git.
* [FASTBuild](https://www.fastbuild.org/docs/home.html) - Sistema de compilação de código aberto e alto desempenho, compatível com compilação altamente escalável, armazenamento em caché e distribución por red.
* [Hunter](https://www.github.com/ruslo/hunter) - gerenciador de pacotes C++ multiplataforma controlado por CMake. [BSD-2]
* [MesonBuild](https://mesonbuild.com) - Sistema de compilação de código aberto pensado para ser extremamente rápido e, aún mais importante, lo mais fácil de usar posible.
* [Ninja](https://ninja-build.org/) - Sistema de compilação pequeno focado na velocidade.
* [Sccache](https://github.com/mozilla/sccache) - Caché rápida de compiladores C/C++, multiplataforma e com opciones de armazenamento na nube.
* [Scons](https://www.scons.org/) - Ferramenta de construcción de software configurada com um script Python.
* [Sconsolidator](https://github.com/IFS-HSR/SConsolidator) - Integração do sistema de compilação Scons para Eclipse CDT.
* [Spack](https://spack.io/) - gerenciador de pacotes flexível compatível com várias versões, configuraciones, plataformas e compiladores. [Apache-2.0/MIT]
* [SW](https://software-network.org/) - Sistema de compilação e gerenciador de pacotes multiplataforma para C++ e outros linguagens, com muitos pacotes disponíveis. [GPLv3]
* [tundra](https://github.com/deplinenoise/tundra) - Sistema de compilação de alto desempenho projetado para ofrecer os mejores tiempos de compilação incremental posibles, incluso em projetos de software muito grandes.
* [tup](https://gittup.org/tup/) - Sistema de compilação baseado em arquivos que supervisa em segundo plano os arquivos modificados.
* [Premake](https://premake.github.io) - Ferramenta configurada com um script Lua para gerar arquivos de proyecto de Visual Studio, GNU Make, Xcode, Code::Blocks e outros em Windows, Mac OS X e Linux.
* [Vcpkg](https://github.com/microsoft/vcpkg) - gerenciador de bibliotecas C++ para Windows, Linux e macOS. [MIT]
* [waf](https://gitlab.com/ita1024/waf) - Framework baseado em Python para configurar, compilar e instalar aplicações. [BSD] [website](https://waf.io/)
* [XMake](https://xmake.io/) - Utilidad de compilação C/C++ multiplataforma baseada em Lua, com o gerenciador de pacotes integrado xrepo. [Apache]
* [boost-cmake](https://github.com/Orphis/boost-cmake) - Módulos CMake para bibliotecas Boost. [BSD-3-Clause]
* [cmake-examples](https://github.com/pr0g/cmake-examples) - Coleção de exemplos CMake útiles para distintos escenarios. [MIT]

<a id="static-code-analysis"></a>
## Análise Estática de Código
*Lista de ferramentas para mejorar a qualidade e reduzir defectos por meio de análise de código*

* [Cppcheck](https://cppcheck.sourceforge.net/) - Ferramenta de análise estático de código C/C++. - [source](https://github.com/danmar/cppcheck)
* [CppDepend](https://www.cppdepend.com/) - Simplifica a gestión de bases de código C/C++ complejas por meio do análise e visualização de dependências, a definición de reglas de design, o análise de impacto e a comparación de versões.
* [cpplint](https://github.com/cpplint/cpplint) - Comprobador de estilo C++ que sigue a guía de estilo C++ de Google.
* [PVS-Studio](https://www.viva64.com/en/pvs-studio/) - Ferramenta para detectar erros em o código código-fonte de programas escritos em C, C++ e C#.
* [cpp-dependencies](https://github.com/tomtom-international/cpp-dependencies) - Ferramenta para comprobar dependências #include de C++ (os grafos de dependências se generan em formato .dot). [Apache]
* [include-what-you-use](https://github.com/include-what-you-use/include-what-you-use) - Ferramenta para usar com clang e analisar inclusiones em arquivos código-fonte C e C++. [website](https://include-what-you-use.org/)
* [Infer](https://github.com/facebook/infer) - Analisador estático para Java, C e Objective-C. [BSD]
* [OCLint](https://oclint.org/) - Ferramenta de análise estático de código código-fonte para mejorar a qualidade e reduzir defectos em C, C++ e Objective-C. - [source](https://github.com/oclint/oclint)
* [Clang Static Analyzer](https://clang-analyzer.llvm.org/index.html) - Ferramenta de análise de código código-fonte que detecta erros em programas C, C++ e Objective-C.
* [Linticator](https://linticator.com) - Integração de Pc-/FlexeLint em Eclipse CDT.
* [IKOS](https://github.com/NASA-SW-VnV/ikos) - Analisador estático para C/C++ baseado na teoría de interpretación abstracta. [NOSA 1.3]
* [List of tools for static code analysis](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis#C.2FC.2B.2B) - Lista de ferramentas de análise estático de código de Wikipedia.
* [OptView2](https://github.com/OfekShilon/optview2) - Inspecciona optimizaciones de Clang que não se realizaron.
* [Trunk](https://trunk.io) - Kit de ferramentas para comprobar, probar, fusionar e supervisar código.
* [CodeCompass](https://github.com/Ericsson/CodeCompass) - Ferramenta de código aberto para comprender código de projetos C/C++ grandes. [GPL-3.0]
* [CodeChecker](https://github.com/Ericsson/codechecker) - Ferramentas de análise, base de dados de defectos e extensão de visor para Clang Static Analyzer e Clang-Tidy. [Apache-2.0]

<a id="coding-style-tools"></a>
## Ferramentas de Estilo de Código

* [Artistic Style](https://astyle.sourceforge.net/) - Ferramenta para dar formato a código C/C++/C#/Obj-C/Java. Também se conoce como astyle.
* [ClangFormat](https://clang.llvm.org/docs/ClangFormat.html) - Ferramenta para dar formato a código C/C++/Obj-C.
* [Clang-Tidy](https://clang.llvm.org/extra/clang-tidy.html) - Ferramenta de linting C++ baseada em Clang.
* [EditorConfig](https://editorconfig.org/) - EditorConfig ayuda a manter estilos de codificación coherentes em distintos editores e IDE.
* [Uncrustify](https://github.com/uncrustify/uncrustify) - Embellecedor de código.

<a id="resources"></a>
# Recursos
*Recursos variados, como livros, sitios web e artículos para mejorar tus conocimientos e habilidades de desenvolvimento em C++.*

<a id="api-design"></a>
## Design de API

* [Beautiful Native Libraries](https://lucumr.pocoo.org/2013/8/18/beautiful-native-libraries/)
* [Designing Qt-Style C++ APIs](https://doc.qt.io/archives/qq/qq13-apis.html)

<a id="articles"></a>
## Artigos
*Artículos incríveis relacionados com C++.*

* [CppCon 2023 Presentation Materials](https://github.com/CppCon/CppCon2023) - materiais de as apresentações de CppCon 2023.
* [CppCon 2022 Presentation Materials](https://github.com/CppCon/CppCon2022) - materiais de as apresentações de CppCon 2022.
* [CppCon 2021 Presentation Materials](https://github.com/CppCon/CppCon2021) - materiais de as apresentações de CppCon 2021.
* [CppCon 2020 Presentation Materials](https://github.com/CppCon/CppCon2020) - materiais de as apresentações de CppCon 2020.
* [CppCon 2019 Presentation Materials](https://github.com/CppCon/CppCon2019) - materiais de as apresentações de CppCon 2019.
* [CppCon 2018 Presentation Materials](https://github.com/CppCon/CppCon2018) - materiais de as apresentações de CppCon 2018.
* [CppCon 2017 Presentation Materials](https://github.com/CppCon/CppCon2017) - materiais de as apresentações de CppCon 2017.
* [CppCon 2016 Presentation Materials](https://github.com/CppCon/CppCon2016) - materiais de as apresentações de CppCon 2016.
* [CppCon 2015 Presentation Materials](https://github.com/CppCon/CppCon2015) - materiais de as apresentações de CppCon 2015.
* [CppCon 2014 Presentation Materials](https://github.com/CppCon/CppCon2014) - materiais de as apresentações de CppCon 2014.
* [C++Now 2023 Presentations](https://github.com/boostcon/cppnow_presentations_2023) - materiais apresentados em C++Now 2023.
* [C++Now 2022 Presentations](https://github.com/boostcon/cppnow_presentations_2022) - materiais apresentados em C++Now 2022.
* [C++Now 2021 Presentations](https://github.com/boostcon/cppnow_presentations_2021) - materiais apresentados em C++Now 2021.
* [C++Now 2019 Presentations](https://github.com/boostcon/cppnow_presentations_2019) - materiais apresentados em C++Now 2019.
* [C++Now 2018 Presentations](https://github.com/boostcon/cppnow_presentations_2018) - materiais apresentados em C++Now 2018.
* [C++Now 2017 Presentations](https://github.com/boostcon/cppnow_presentations_2017) - materiais apresentados em C++Now 2017.
* [C++Now 2016 Presentations](https://github.com/boostcon/cppnow_presentations_2016) - materiais apresentados em C++Now 2016.
* [C++Now 2015 Presentations](https://github.com/boostcon/cppnow_presentations_2015) - materiais apresentados em C++Now 2015.
* [C++Now 2014 Presentations](https://github.com/boostcon/cppnow_presentations_2014) - materiais apresentados em C++Now 2014.
* [C++Now 2013 Presentations](https://github.com/boostcon/cppnow_presentations_2013) - materiais apresentados em C++Now 2013.
* [C++Now 2012 Presentations](https://github.com/boostcon/cppnow_presentations_2012) - materiais apresentados em C++Now 2012.
* [cpp17_in_TTs](https://github.com/tvaneerd/cpp17_in_TTs) - Descripciones de as funções de C++17, presentadas principalmente em «Tony Tables».
* [All C++20 core language features with examples](https://oleksandrkvl.github.io/2021/04/02/cpp-20-overview.html) - Referencia de todas as funções do linguagem base de C++20 com exemplos.
* [Memory Footprint of GUI Toolkits](https://szibele.com/memory-footprint-of-gui-toolkits/) - Comparación da huella de memória de vários kits de ferramentas GUI.
* [C++ UI Libraries](https://philippegroarke.com/posts/2018/c++_ui_solutions/) - Lista completa de soluciones de interface de usuário C++.
* [C++ Compilation](https://github.com/green7ea/cpp-compilation) - Breve descripción do proceso de compilação de C++.
* [Books on C++17](https://blogs.msdn.microsoft.com/vcblog/2018/09/25/books-on-c17/) - Lista de livros sobre C++17.
* [modern-cpp-features](https://github.com/AnthonyCalandra/modern-cpp-features) - Hoja de referencia de funções do linguagem e a biblioteca de C++ moderno.
* [Choosing Some C++ Over C](https://medium.com/@davidtstrauss/choosing-some-c-over-c-f5acb3dce4f5) - Artículo sobre cuándo usar C++ em lugar de C.
* [C++ 17 Features](https://www.bfilipek.com/2017/01/cpp17features.html) - Lista completa de funções de C++17.
* [Master C Programming with Open Source Books](https://www.ossblog.org/master-c-programming-with-open-source-books/) - Lista selecionada de livros de código aberto para aprender programação em C.

<a id="books"></a>
## Livros
*livros incríveis relacionados com C ou C++.*

* [List of Free C or C++ Books](https://github.com/fffaraz/awesome-cpp/blob/master/books.md)
* [Free C Books](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#c) - vhf/free-programming-books/C.
* [Free C++ Books](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#cpp) - vhf/free-programming-books/C++.
* [Practical Guide to Bare Metal C++](https://github.com/arobenko/bare_metal_cpp)
* [cppbestpractices](https://github.com/lefticus/cppbestpractices) - Coleção colaborativa de boas prácticas de C++.

<a id="coding-standards"></a>
## Padrões de Codificação

* [Cert C++](https://resources.sei.cmu.edu/downloads/secure-coding/assets/sei-cert-cpp-coding-standard-2016-v01.pdf)
* [Misra C++ 2008](https://www.cppdepend.com/misra-cpp)
* [Autosar C++ 2014](https://www.autosar.org/fileadmin/standards/R21-11/AP/AUTOSAR_RS_CPP14Guidelines.pdf)
* [F-35 Fighter Jet's C++ Coding Standards](https://www.stroustrup.com/JSF-AV-rules.pdf)

<a id="coding-style"></a>
## Estilo de Código

* [C++ Core Guidelines](https://github.com/isocpp/CppCoreGuidelines) - Conjunto «oficial» de directrices C++, revisado por o autor de C++.
* [C++ Dos and Don'ts](https://www.chromium.org/developers/coding-style/cpp-dos-and-donts) - The Chromium Projects > Para desenvolvedores > Estilo de codificación > Qué hacer e qué não hacer em C++.
* [google-styleguide](https://github.com/google/styleguide) - Guías de estilo para projetos de código aberto originados em Google.
* [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html)
* [GNU Coding Standard](https://www.gnu.org/prep/standards/standards.html)
* [Linux kernel coding style](https://www.kernel.org/doc/Documentation/process/coding-style.rst)
* [LLVM Coding Standards](https://llvm.org/docs/CodingStandards.html)

## Podcasts

* [CppCast](https://cppcast.com) - O primer pódcast de desenvolvedores C++ para desenvolvedores C++.
* [CppChat](https://cpp.chat) - Repaso (a veces) semanal de as novedades do mundo de C++, conversando com invitados da comunidade.

<a id="talks"></a>
## Palestras

* [C++ Conferences](https://github.com/eoan-ermine/cpp-conferences) - Catálogo de conferencias de C++.
* [CppCon Talks](https://www.youtube.com/user/CppCon/videos) :zap: - A conferencia de C++.
* [Quick game development with C++11/C++14](https://github.com/SuperV1234/cppcon2014) - Charla de Vittorio Romeo em CppCon 2014.
* [Presentation on Hana for C++Now 2015](https://github.com/ldionne/hana-cppnow-2015)
* [Meeting Cpp](https://www.youtube.com/user/MeetingCPP/videos) - Canal de YouTube de Meeting C++.

<a id="videos"></a>
## Vídeos
*Vídeos incríveis relacionados com C ou C++.*

* [List of C or C++ YouTube Videos](https://github.com/fffaraz/awesome-cpp/blob/master/videos.md)
* [Awesome C Programming Tutorials in Hi Def [HD]](https://www.youtube.com/playlist?list=PLCB9F975ECF01953C) - Coleção de tutoriales detallados sobre o linguagem de programação C para principiantes e novos programadores.
* [C++](https://www.youtube.com/playlist?list=PL2F919ADECA5E39A6) - de VoidRealms.
* [C++ Qt Programming](https://www.youtube.com/playlist?list=PL2D1942A4688E9D63) - de VoidRealms.
* [C++ Programming Tutorials Playlist](https://www.youtube.com/playlist?list=PLAE85DE8440AA6B83) - Lista oficial de reproducción de tutoriales de programação C++ de Buckys, de TheNewBoston.
* [C++ Programming Tutorials from thenewboston](https://www.youtube.com/playlist?list=PLF541C2C1F671AEF6) - Aqui estão todos os tutoriais de programação C++ de thenewboston.
* [C++ GUI with Qt Playlist](https://www.youtube.com/playlist?list=PLD0D54219E5F2544D) - Lista oficial de tutoriales de interface gráfica C++ com Qt de thenewboston.
* [Caleb Curry's C Programming Tutorials](https://www.youtube.com/playlist?list=PL_c9BZzLwBRKKqOc9TJz1pP0ASrxLMtp2) - Lista abrangente de tutoriales de programação em C.
* [C Programming Tutorials](https://www.youtube.com/playlist?list=PL78280D6BE6F05D34) - Aqui estão todos os tutoriais de programação C de TheNewBoston.
* [Bo Qian's playlist](https://www.youtube.com/user/BoQianTheProgrammer/playlists) - Biblioteca Boost, biblioteca padrão de C++, C++ moderno, C++ avanzado, STL avanzado, etc.
* [The Cherno's C++ Playlist](https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb) - Amplia série de tutoriales C++ de The Cherno.
* [Code for Yourself C++ Playlist](https://www.youtube.com/playlist?list=PLwhKb0RIaIS1sJkejUmWj-0lk7v_xgCuT) - Curso completo de C++ que abarca de os fundamentos hasta o design de software.

<a id="websites"></a>
## Sites
*Sitios web útiles relacionados com C ou C++.*

* [Standard C++](https://isocpp.org/) :zap: - Noticias, novedades e debates sobre C++ padrão.
* [Build Bench](https://build-bench.com/) - Compara compilaciones de C++.
* [Quick Bench](https://quick-bench.com/) - Benchmarks rápidos de C++.
* [CppCon](https://cppcon.org/) - A conferencia de C++.
* [C++ reference](https://cppreference.com) - Referencia completa em linha de os linguagens C e C++ e seus bibliotecas padrão.
* [cppstat](https://cppstat.dev) - Sitio que enumera funções de C++ e seu compatibilidade com compiladores e implementações de bibliotecas padrão de forma accesible.
* [C++ by Example](https://www.cbyexample.com/) - Aprenda C++ com exemplos.
* [cplusplus.com](https://www.cplusplus.com/) - Uma rede de recursos de C++.
* [C FAQ](https://c-faq.com/) - Perguntas frequentes sobre C.
* [C++ FAQ](https://www.parashift.com/c++-faq/) - Perguntas frequentes sobre C++.
* [C++ FQA Lite](https://yosefk.com/c++fqa/) - Respostas a perguntas frequentes sobre C++.
* [C++ Quiz](https://cppquiz.org) - Questionário simples e online para testar seus conhecimentos da linguagem de programação C++.
* [Guru of the Week](https://www.gotw.ca/gotw/) - Série periódica de problemas de programação C++ criada e escrita por Herb Sutter.
* [Meeting C++](https://meetingcpp.com/)
* [PVS-Studio’s challenge](https://quiz.pvs-studio.com) - Desafio de C++ do PVS-Studio no qual você deve encontrar erros em trechos de código de projetos de código aberto.
* [Udemy C++ Courses and Tutorials](https://www.udemy.com/topic/c-plus-plus/)
* [C++ Hints](https://cpphints.com/) - Dicas da equipe do PVS-Studio, todos os dias úteis, sobre os erros mais frequentes de C++ e como resolvê-los.
* [C++ tutorial](https://hackr.io/tutorials/learn-c-plus-plus) - Site com cursos online ordenados por usuários para aprender C++.
* [C++ Tutorial for Beginners](https://www.scaler.com/topics/cpp) - Tutorial completo de C++ selecionado por especialistas qualificados.
* [C++ for yourself](https://github.com/cpp-for-yourself) - Tutorial abrangente de C++ moderno que abrange desde os fundamentos até o design de software.
* [CompileBytes C++ Compiler](https://www.compilebytes.com/tools/cpp) – Compilador C++ online e ambiente interativo de execução de código.
* [C++ Resources](https://andreasfertig.com/cpp-resources/) - Coleção de recursos de C++, incluindo livros, artigos e ferramentas.
* [CppPatterns](https://github.com/sftrabbit/CppPatterns-Patterns) - Repositório de padrões e expressões de C++ moderno. [website](https://cpppatterns.com)
* [Function Pointers](https://github.com/jerryryle/fuckingfunctionpointers.com) - Guia para entender ponteiros de função em C/C++.


<a id="weblogs"></a>
## Blogs
*Blogs útiles relacionados com C ou C++.*

* [Coding For Speed](https://codingforspeed.com/) - Coding For Speed DOT COM: menos tempo de execução.
* [Eric Niebler](https://ericniebler.com/)
* [Sticky Bits](https://blog.feabhas.com/)
* [Paul Fultz II's Blog](https://pfultz2.com/blog/)
* [ridiculousfish](https://ridiculousfish.com/blog/posts/will-it-optimize.html) - ¿Se optimizará?
* [Embedded in Academia](https://blog.regehr.org/)
* [Simplify C++](https://arne-mertz.de/)
* [Fluent C++](https://www.fluentcpp.com/)
* [Bartek's Coding Blog](https://www.bfilipek.com/?m=1)
* [Kenny Kerr](https://kennykerr.ca/)
* [Sutter’s Mill](https://herbsutter.com/gotw/)
* [Vorbrodt's C++ Blog](https://vorbrodt.blog/)
* [foonathan::blog()](https://foonathan.net/index.html)
* [C++ Team Blog](https://devblogs.microsoft.com/cppblog/) - Blog de desenvolvimento da equipe Microsoft Visual C++.

<a id="other-awesome-projects"></a>
## Outros Projetos Incríveis
*Coleção de código útil, fragmentos, ...*

* [algorithms](https://github.com/xtaci/algorithms) - Algoritmos e estruturas de dados em C++.
* [c-algorithms](https://github.com/fragglet/c-algorithms) - Biblioteca de algoritmos C.
* [30 Seconds of C++](https://github.com/Bhupesh-V/30-seconds-of-cpp)
* [awesome-ld-preload](https://github.com/gaul/awesome-ld-preload) - Lista selecionada de recursos relacionados com LD_PRELOAD.
* [awesome-static-analysis](https://github.com/mre/awesome-static-analysis) - Lista selecionada de ferramentas de análise estática para todas as linguagens de programação.
* [cpp_functional_programming](https://github.com/graninas/cpp_functional_programming) - Lista de materiais e links sobre programação funcional em C++.
* [algorithms_and_data_structures](https://github.com/mandliya/algorithms_and_data_structures) - Implementação de algoritmos e estruturas de dados em C++.

<a id="other-awesome-lists"></a>
# Outras Listas Incríveis
*Outras listas incrivelmente incríveis*

* [lists](https://github.com/jnv/lists) - Lista de listas incríveis selecionadas no GitHub.
* [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - Lista selecionada de coisas incríveis.
* [awesome](https://github.com/sindresorhus/awesome) :zap: - Lista selecionada de listas incríveis.
* [C++ links](https://github.com/MattPD/cpplinks) - Lista categorizada de recursos C++.
* [Awesome C++](https://cpp.libhunt.com/) - Espelho do LibHunt.
* [Awesome C](https://github.com/oz123/awesome-c) 1
* [Awesome C](https://github.com/aleksandar-todorovic/awesome-c) 2
* [Awesome Modern C++](https://github.com/rigtorp/awesome-modern-cpp) - Coleção de recursos sobre C++ moderno.
* [AwesomePerfCpp](https://github.com/fenbf/AwesomePerfCpp) - Lista selecionada de recursos incríveis para otimizar o desempenho de C/C++.
* [free-programming-books](https://github.com/vhf/free-programming-books) - Lista de livros de programação disponíveis gratuitamente.
* [Inqlude](https://inqlude.org/) - Arquivo de bibliotecas Qt.
* [papers-we-love](https://github.com/papers-we-love/papers-we-love) - Artigos da comunidade de computação para ler e debater.
* [awesome-algorithms](https://github.com/tayllan/awesome-algorithms) - Lista selecionada de sites incríveis para aprender e/ou praticar algoritmos.
* [awesome-hpp](https://github.com/p-ranav/awesome-hpp) - Lista selecionada de bibliotecas C++ incríveis somente de cabeçalho.
* [awesome-talks](https://github.com/JanVanRyswyck/awesome-talks) - Grande quantidade de screencasts, gravações de encontros de grupos de usuários e palestras de conferências.
* [Projects](https://github.com/karan/Projects) - Lista de projetos práticos que qualquer pessoa pode resolver em qualquer linguagem de programação.
* [Awesome interview questions](https://github.com/MaximAbramchuck/awesome-interviews) - Lista de listas de perguntas de entrevista para as tecnologias mais populares, incluindo C e C++.
* [nothings/single_file_libs](https://github.com/nothings/single_file_libs) :zap: - Lista de bibliotecas C/C++ de arquivo único.

<a id="jobs"></a>
# Vagas

* Esta lista está vacía atualmente, mas você pode adicionar conteúdo enviando uma pull request.

<a id="sponsors"></a>
# Patrocinadores

* Entre em contato se tiver interesse em patrocinar este repositório. O nome e o logotipo da sua empresa aparecerão em destaque.

<a id="contributing"></a>
# Como Contribuir
Consulte também as [diretrizes de contribuição](https://github.com/fffaraz/awesome-cpp/blob/master/CONTRIBUTING.md) para mais detalhes.
Agradecemos a todos os [colaboradores](https://github.com/fffaraz/awesome-cpp/graphs/contributors); ¡são incríveis!

<a id="if-you-see-a-project-or-link-here-that-is-no-longer-maintained-or-is-not-a-good-fit-please-submit-a-pull-request-to-improve-this-document-thank-you"></a>
#### *Se você encontrar um projeto ou link aqui que não seja mais mantido ou não seja adequado, envie uma pull request para melhorar este documento. Obrigado!*
