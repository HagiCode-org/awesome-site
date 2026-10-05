<div align="center"><img src="./assets/head.jpg"></div>

# Awesome 資料科學

[![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

歡迎貢獻，請參閱 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

**一個開源資料科學資源庫，協助學習並應用概念來解決真實世界的問題。**

這是開始學習**資料科學**的捷徑。只要依照步驟回答「什麼是資料科學？要學習哪些內容才能掌握資料科學？」即可。

<br>

## $ [academic](https://academic.io/cli)

```
$ brew tap academic/tap
$ brew install academic
```

## 贊助商

[![Creavit Studio：在同一個應用程式中錄製、編輯與製作動態影像](https://raw.githubusercontent.com/creavit-studio/files/refs/heads/main/static/crvt-banner.png)](https://creavit.studio/?utm_source=github&utm_medium=sponsorship&utm_campaign=creavit_founding_alpha&utm_content=crvt_banner)

[![Graphyn：視覺化專業代理程式工作流程](https://raw.githubusercontent.com/fuego-wtf/graphyn-code/main/assets/graphyn-agent-workflows.png)](https://graphyn.ai/?utm_source=github&utm_medium=sponsorship&utm_campaign=graphyn_founding_alpha&utm_content=awesome_datascience_banner)



成為贊助商！`github@academic.io`



## 目錄

- [什麼是資料科學？](#what-is-data-science)
- [從哪裡開始？](#where-do-i-start)
- [代理程式](#agents)
- [專案](#projects)
- [訓練資源](#training-resources)
  - [教學](#tutorials)
  - [免費課程](#free-courses)
  - [大型開放式線上課程](#moocs)
  - [密集課程](#intensive-programs)
  - [大專院校](#colleges)
- [資料科學工具箱](#the-data-science-toolbox)

  - [演算法](#algorithms)
    - [監督式學習](#supervised-learning)
    - [非監督式學習](#unsupervised-learning)
    - [半監督式學習](#semi-supervised-learning)
    - [強化學習](#reinforcement-learning)
    - [資料探勘演算法](#data-mining-algorithms)
    - [深度學習架構](#deep-learning-architectures)
  - [一般機器學習套件](#general-machine-learning-packages)
  - [深度學習套件](#deep-learning-packages)
    - [PyTorch 生態系](#pytorch-ecosystem)
    - [TensorFlow 生態系](#tensorflow-ecosystem)
    - [Keras 生態系](#keras-ecosystem)
  - [視覺化工具](#visualization-tools)
  - [其他工具](#miscellaneous-tools)
- [文獻與媒體](#literature-and-media)
  - [書籍](#books)
    - [優惠書籍（含推廣連結）](#book-deals-affiliated)
  - [期刊、出版品與雜誌](#journals-publications-and-magazines)
  - [電子報](#newsletters)
  - [部落客](#bloggers)
  - [簡報](#presentations)
  - [Podcast](#podcasts)
  - [YouTube 影片與頻道](#youtube-videos--channels)
- [社群交流](#socialize)
  - [Facebook 帳號](#facebook-accounts)
  - [Twitter 帳號](#twitter-accounts)
  - [Telegram 頻道](#telegram-channels)
  - [Slack 社群](#slack-communities)
  - [GitHub 群組](#github-groups)
  - [資料科學競賽](#data-science-competitions)
- [趣味內容](#fun)
  - [資訊圖表](#infographics)
  - [資料集](#datasets)
  - [漫畫](#comics)
- [其他 Awesome 清單](#other-awesome-lists)
  - [嗜好](#hobby)

## 什麼是資料科學？
**[`^        回到頂端        ^`](#awesome-data-science)**

資料科學是當今電腦與網際網路領域最熱門的主題之一。人們至今已從應用程式和系統中蒐集了大量資料，現在正是分析這些資料的時候。接下來要從資料中產生建議，並對未來做出預測。你可以在[這裡](https://www.quora.com/Data-Science/What-is-data-science)找到關於**資料科學**的熱門問題，以及數百則專家回答。


| 連結 | 預覽 |
| --- | --- |
| [資料科學入門](https://github.com/microsoft/Data-Science-For-Beginners) | Microsoft 很高興推出這套為期 10 週、共 20 堂課的資料科學課程。 |
| [什麼是資料科學 @ O’Reilly](https://www.oreilly.com/ideas/what-is-data-science) | _資料科學家將創業精神與耐心結合，願意逐步打造資料產品，能夠探索，也有能力反覆改進解決方案。他們本質上是跨領域人才，能處理問題的各個面向，從最初的資料蒐集與整理到得出結論。他們能跳脫框架，以新的方式看待問題，也能面對定義寬泛的問題，例如：「這裡有一大堆資料，你能用它做出什麼？」_ |
| [什麼是資料科學 @ Quora](https://www.quora.com/Data-Science/What-is-data-science) | 資料科學結合資料領域的多個面向，例如技術、演算法開發與資料推論，藉此研究和分析資料，並為棘手問題找出創新的解決方案。簡言之，資料科學就是分析資料，並透過創意方式推動企業成長。 |
| [21 世紀最性感的職業](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century) | _當今的資料科學家就像 1980 與 1990 年代華爾街的「量化分析師」。當時，具有物理與數學背景的人才紛紛進入投資銀行和避險基金，設計全新的演算法與資料策略。之後，多所大學開設金融工程碩士課程，培養出第二代人才，讓主流企業更容易延攬。到了 1990 年代後期，搜尋工程師也出現了相同趨勢：這些稀有的技能很快便納入電腦科學課程中教授。_ |
| [維基百科](https://en.wikipedia.org/wiki/Data_science) | _資料科學是一門跨領域學科，運用科學方法、流程、演算法與系統，從大量結構化與非結構化資料中萃取知識與洞見。資料科學與資料探勘、機器學習和大數據相關。_ |
| [如何成為資料科學家](https://www.mastersindatascience.org/careers/data-scientist/) | _資料科學家是大數據的整理者，負責蒐集與分析大量結構化及非結構化資料。這個職務結合電腦科學、統計與數學。他們分析、處理並建立資料模型，再解讀結果，為公司及其他組織制定可付諸行動的計畫。_ |
| [資料科學簡史](https://www.forbes.com/sites/gilpress/2013/05/28/a-very-short-history-of-data-science/) | _資料科學家之所以成為熱門職業，主要是因為統計學這門成熟學科與電腦科學這門年輕學科相互結合。「資料科學」一詞直到近年才出現，用來指稱一種新職業，其任務是理解龐大的大數據資料庫。然而，理解資料有著悠久歷史，多年來一直是科學家、統計學家、圖書館員、電腦科學家等人的討論主題。以下時間軸追溯「資料科學」一詞的演進、用途、定義嘗試及相關術語。_ |
| [資料科學家的軟體開發資源](https://www.rstudio.com/blog/software-development-resources-for-data-scientists/)|_資料科學家專注於透過探索性分析、統計與模型來理解資料；軟體開發者則運用另一套知識與工具。兩者的工作看似無關，但資料科學團隊採用軟體開發最佳實務將大有助益。版本控制、自動化測試及其他開發技能，有助於建立可重現、可投入正式環境的程式碼與工具。_|
|[資料科學家學習路線圖](https://www.scaler.com/blog/how-to-become-a-data-scientist/)|_在今日以資料為核心的世界，資料科學是很好的職涯選擇；每天約有 3.2877 億 TB 的資料產生，而且數量持續增加，因此對能運用資料推動企業成長的專業資料科學家需求也日益提高。_|
|[踏上成為資料科學家的道路](https://www.appliedaicourse.com/blog/how-to-become-a-data-scientist/)|_資料科學是當今需求最高的職涯之一。企業日益仰賴資料做決策，對專業資料科學家的需求也迅速增加。無論是科技公司、醫療機構，甚至政府機關，資料科學家都在將原始資料轉化為寶貴洞見方面扮演關鍵角色。不過，如果你才剛起步，要如何成為資料科學家？_|

## 從哪裡開始？
**[`^        回到頂端        ^`](#awesome-data-science)**

雖然並非絕對必要，但熟悉程式語言是成為有效率資料科學家的關鍵技能。目前最受歡迎的語言是 _Python_，其次是 _R_。Python 是通用的指令碼語言，應用範圍廣泛；R 則是統計領域專用語言，內建許多常見統計工具。

[Python](https://python.org/) 是科學領域最受歡迎的語言，原因之一是容易上手，而且有活躍的使用者套件生態系。安裝套件主要有兩種方式：Pip（使用 `pip install`），即 Python 隨附的套件管理員；以及 [Anaconda](https://www.anaconda.com)（使用 `conda install`），這是一套強大的套件管理員，可安裝 Python、R 套件，也能下載 Git 等可執行檔。

Python 並不像 R 一樣從一開始就為資料科學而設計，但有許多第三方函式庫可彌補這點。本文稍後會列出更完整的套件清單；不過，以下四個套件是開啟資料科學之旅的好選擇：[Scikit-Learn](https://scikit-learn.org/stable/index.html) 是通用資料科學套件，實作了最受歡迎的演算法，也附有豐富文件、教學與模型範例。即使你偏好自行實作，Scikit-Learn 仍是了解常見演算法運作細節的寶貴參考。[Pandas](https://pandas.pydata.org/) 可將資料蒐集並分析為便利的表格格式；[Numpy](https://numpy.org/) 提供快速的數學運算工具，尤其擅長處理向量與矩陣；[Seaborn](https://seaborn.pydata.org/) 則以 [Matplotlib](https://matplotlib.org/) 為基礎，能快速產生美觀的資料視覺化，內建許多實用預設值，並提供常見視覺化圖表的範例集。

踏上成為資料科學家的旅程時，語言的選擇並非特別重要，Python 和 R 各有優缺點。選擇自己喜歡的語言，並參考下方列出的[免費課程](#free-courses)！

### 初學者路線圖
如果你才剛開始，以下是簡單的建議學習路徑：

1. **學習 Python** – 從基礎開始：變數、迴圈、函式
2. **學習核心函式庫** – Pandas、NumPy、Matplotlib、Scikit-Learn
3. **透過初學者專案練習** – 嘗試 Kaggle 的 Titanic 生還預測或房價預測
4. **學習數學基礎** – 統計、線性代數、機率
5. **進入機器學習** – 監督式學習 → 非監督式學習 → 深度學習

## 代理程式

本節收錄適用於資料科學工作流程的代理程式框架與工具。

### 框架
- [ADK-Rust](https://github.com/zavora-ai/adk-rust) - 採用模型無關設計（Gemini、OpenAI、Anthropic）的 Rust 生產級 AI 代理程式開發套件，支援多種代理程式類型（LLM、Graph、Workflow）、MCP 與內建遙測功能。
- [Lumen](https://github.com/holoviz/lumen) - 可與資料對話的代理程式框架，能將自然語言轉換為 SQL、轉換流程與視覺化。其輸出為宣告式規格，可供檢視、編輯、在筆記本中重新開啟，或組合成儀表板。

### 工具
- [Frostbyte MCP](https://github.com/OzorOwn/frostbyte-mcp) - 為 AI 代理程式提供 13 種資料工具的 MCP 伺服器：即時加密貨幣價格、IP 地理定位、DNS 查詢、網頁轉 Markdown、程式碼執行及螢幕截圖。單一 API 金鑰即可使用 40 多項服務。
- [Arch Tools](https://archtools.dev) - 提供 61 種生產級 AI API 工具，適用於資料科學工作流程，涵蓋程式碼分析、網頁擷取、NLP、圖像生成、加密貨幣資料與搜尋。支援 REST API 與 MCP 協定。[GitHub](https://github.com/Deesmo/Arch-AI-Tools)
- [Not Human Search](https://nothumansearch.ai) - 為 AI 代理程式打造的搜尋引擎，索引超過 9,000 種 AI 工具與 API，並依代理程式就緒度（llms.txt、OpenAPI、MCP、ai-plugin.json）評分。提供 REST API 與 MCP 伺服器，以程式方式探索工具。[GitHub](https://github.com/unitedideas/nothumansearch)
- [DeepAlpha](https://github.com/stefanoviana/deepalpha) - 使用 LightGBM + XGBoost 集成模型的 AI 加密貨幣交易框架，具備 72 項 ML 特徵。對樣本外資料進行 walk-forward 驗證，準確率達 70.9%。支援 Bybit 與 Binance。採 MIT 授權，可透過 [PyPI](https://pypi.org/project/deepalpha-bot/) 安裝。
- [CAJAL](https://github.com/Agnuxo1/CAJAL) - 可產生具備真實 arXiv 引文、IMRaD 架構與評審評分的在地 AI 代理程式，用於撰寫可投稿的科學論文。透過 Ollama 與 4B–9B 模型完全離線執行。採 MIT 授權。[HuggingFace](https://huggingface.co/Agnuxo/CAJAL-9B-P2PCLAW)
- [ai-evaluation](https://github.com/future-agi/ai-evaluation) - 開源 LLM 與代理程式評估框架，提供 50 多種指標、LLM-as-Judge 增強功能與防護掃描器（越獄、PII、提示注入）。適用於評分 RAG 輸出、代理程式執行軌跡與函式呼叫行為。
- [Kitaru](https://github.com/zenml-io/kitaru) - 開源平台，可記錄真實 AI 代理程式的執行、針對變更重播，並在部署前評估結果。
- [Jev Social](https://github.com/socai-io/jev-social) - 唯讀社群研究代理程式，可讓 Jev 選擇受限制的 Instagram、TikTok 與 LinkedIn 操作，透過 Chrome 中的本機 socai CLI 執行，並在附有引文的報告旁保存連結至來源的證據。
- [YYLO Benchmark](https://github.com/yylo-dev/yylo-benchmark) - 開源且可信任的主機實驗執行工具，可測試歷史代理程式任務、提供的程式提示與工作流程。可執行互相獨立的嘗試並保留輸出，日後可用不同檢查或評審比較模型、工具組與設定。採 MIT 授權。
- [YYLO](https://github.com/yylo-dev/yylo) - 開源命令列協調工具，用於程式設計代理程式與可重複工作流程，提供具型別的任務、驗證、合併和發布就緒流程，並以收據記錄儲存庫變更。採 MIT 授權，可透過 npm 安裝。
- [YYLO Ledger](https://github.com/yylo-dev/yylo-ledger) - 程式設計代理程式專案的命令列任務與工作流程帳本：以雜湊鏈結 Markdown 在儲存庫中保存看板與任務狀態、追蹤收據和封存資料，並透過代理程式工作樹驅動具型別的合併與發布流程。採 MIT 授權。

### 研究與知識檢索
- [BGPT MCP](https://bgpt.pro/mcp) - MCP 伺服器，讓 AI 代理程式存取從全文研究中擷取原始實驗資料所建立的科學論文資料庫。每篇論文提供 25 個以上的結構化欄位，包括方法、結果、樣本數與品質分數。[GitHub](https://github.com/connerlambden/bgpt-mcp)
- [Chunk Tuner](https://github.com/shantanu-deshmukh/chunktuner) - 開源 Python 函式庫與 MCP 伺服器，可為 RAG 評測文件分塊策略、評分檢索品質，並為語料庫推薦設定。
- [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - 每日更新的技能與 CLI，可在 arXiv、PubMed/PMC 及受支援的美國政策語料庫中進行確定性檢索。
- [Spraay x402 Gateway](https://docs.spraay.app/#cat-research) - x402 付款閘道，為 AI 代理程式提供 23 個研究與參考端點：Wikipedia、arXiv、PubMed、Wikidata、學術引文查詢、實體擷取等。可透過 Base 與 Solana 上的 USDC 按次付費，無須 API 金鑰或訂閱。另提供 39 個類別、150 多個端點，涵蓋地理空間、AI 推論、DeFi 與運算。[GitHub](https://github.com/plagtech)

- [Suppr](https://suppr.wilddata.cn/) - 為研究人員打造的 AI 文獻搜尋、文件翻譯與深度研究工作區。

### 工作流程
**[`^        回到頂端        ^`](#awesome-data-science)**
- [sim](https://sim.ai) - Sim Studio 提供輕量直覺的介面，可快速建置並部署能連接常用工具的 LLM。

## 專案
**[`^        回到頂端        ^`](#awesome-data-science)**

- [Synthetic Hospital](https://github.com/sparkcpark/synthetic_hospital) - 醫療基準測試與電子病歷模擬平台

## 訓練資源
**[`^        回到頂端        ^`](#awesome-data-science)**

如何學習資料科學？當然是透過實作資料科學！好吧，剛起步時這個回答可能不太有幫助。本節依投入程度由低至高，列出一些學習資源：[教學](#tutorials)、[大型開放式線上課程（MOOC）](#moocs)、[密集課程](#intensive-programs)與[大專院校](#colleges)。


### 教學
**[`^        回到頂端        ^`](#awesome-data-science)**

- [1000 個資料科學專案](https://cloud.blobcity.com/#/ps/explore) 可在瀏覽器中透過 IPython 執行。
- [#tidytuesday](https://github.com/rfordatascience/tidytuesday) - 每週推出的資料專案，適用於 R 生態系。
- [依照自己的方式學習資料科學](https://github.com/jadianes/data-science-your-way)
- [DataCamp 速查表](https://www.datacamp.com/cheat-sheet) 資料科學速查表。
- [PySpark 速查表](https://github.com/kevinschaich/pyspark-cheatsheet)
- [使用 Python 學習機器學習、資料科學與深度學習 ](https://www.manning.com/livevideo/machine-learning-data-science-and-deep-learning-with-python)
- [TutorialSearch](https://tutorialsearch.io/) - 免費跨平台搜尋引擎，索引 Udemy、Skillshare、Pluralsight 等主要學習平台上 45 個以上類別、共 50,000 多篇教學。
- [潛在狄利克雷分配指南](https://medium.com/@lettier/how-does-lda-work-ill-explain-using-emoji-108abf40fa7d)
- [Clinton Sheppard《以 Python 撰寫遺傳演算法》原始碼教學](https://github.com/handcraftsman/GeneticAlgorithmsWithPython)
- [機器學習訊號處理入門教學](https://github.com/jinglescode/python-signal-processing)
- [即時部署](https://www.microprediction.com/python-1) Python 時間序列模型部署教學。
- [資料科學 Python 入門指南](https://learntocodewith.me/posts/python-for-data-science/)
- [機器學習面試的最精簡可行讀書計畫](https://github.com/khangich/machine-learning-interview)
- [透過打造扎實專案，理解並掌握機器學習工程](https://mlzoomcamp.com/)
- [12 個免費資料科學專案：使用 Python 與 Pandas 練習](https://www.datawars.io/articles/12-free-data-science-projects-to-practice-python-and-pandas)
- [資料科學新鮮人最佳履歷](https://enhancv.com/resume-examples/data-scientist/)
- [以 Java 認識資料科學課程](https://www.alter-solutions.com/articles/java-data-science)
- [資料分析面試問題（初階至進階）](https://www.appliedaicourse.com/blog/data-analytics-interview-questions/)
- [100 多道資料科學面試問題與解答](https://www.appliedaicourse.com/blog/data-science-interview-questions/)
- [DataDriven - SQL、Python 與資料建模面試題](https://www.datadriven.io/)
- [StepByStepML](https://www.stepbystepml.com) - 互動式計算器，逐步視覺化機器學習演算法背後的手算數學，適合考試準備。
- [如何打造真正有效的最佳 AI 代理程式](https://www.freecodecamp.org/news/how-to-build-optimal-ai-agents-that-actually-work-a-handbook-for-devs/) - 為開發者撰寫的手冊，介紹如何設計並建置有效的 AI 代理程式。
- [從頭訓練 LLM](https://github.com/FareedKhan-dev/train-llm-from-scratch) - 以簡明方法訓練 LLM，從下載資料到生成文字一應俱全。

### 免費課程
**[`^        回到頂端        ^`](#awesome-data-science)**

- [資料科學](https://github.com/ossu/data-science) - 開放原始碼社群大學
- [使用 R 成為資料科學家](https://www.datacamp.com/tracks/data-scientist-with-r)
- [使用 Python 成為資料科學家](https://www.datacamp.com/tracks/data-scientist-with-python)
- [遺傳演算法開放課程](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-1-introduction-and-scope/)
- [AI 專家路線圖](https://github.com/AMAI-GmbH/AI-Expert-Roadmap) - 成為人工智慧專家的學習路線圖
- [凸最佳化](https://www.edx.org/course/convex-optimization) - 凸分析基礎、最小平方法、線性與二次規劃、半定規劃、極小極大、極值體積及其他問題、最適性條件與對偶理論等。
- [從資料中學習](https://home.work.caltech.edu/telecourse.html) - 機器學習入門，涵蓋基礎理論、演算法與應用
- [Kaggle](https://www.kaggle.com/learn) - 學習資料科學、機器學習、Python 等
- [ML 可觀測性基礎](https://arize.com/ml-observability-fundamentals/) - 學習監控正式環境的機器學習問題並追查根本原因。
- [Weights & Biases 有效 MLOps：模型開發](https://www.wandb.courses/courses/effective-mlops-model-development) - 免費課程與認證，教你使用 W&B 建置端對端機器學習流程。
- [Scaler 的 Python 資料科學課程](https://www.scaler.com/topics/course/python-for-data-science/) - 本課程旨在協助初學者掌握在今日資料驅動世界中脫穎而出的必要技能。完整課綱將為統計、程式設計、資料視覺化與機器學習打下穩固基礎。
- [MLSys-NYU-2022](https://github.com/jacopotagliabue/MLSys-NYU-2022/tree/main) - NYU Tandon 2022 年金融機器學習課程的投影片、指令碼與教材。
- [實作訓練與部署機器學習](https://github.com/Paulescu/hands-on-train-and-deploy-ml) - 實作課程：訓練並部署用於預測加密貨幣價格的無伺服器 API。
- [LLMOps：使用大型語言模型打造真實應用程式](https://www.comet.com/site/llm-course/) - 運用此領域最新工具與技術，學習以 LLM 建置現代軟體。
- [視覺模型提示工程](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - 參加 DeepLearning.AI 免費課程，學習如何使用自然語言、座標點、方框、分割遮罩，甚至其他圖像，為最先進的電腦視覺模型撰寫提示。
- [IBM 資料科學課程](https://skillsbuild.org/students/course-catalog/data-science) - 免費資源，帶你認識資料科學及其在不同產業中的應用。
- [神經網路：從零開始到高手](https://karpathy.ai/zero-to-hero.html) - Andrej Karpathy 的免費影片系列，從頭介紹神經網路，涵蓋反向傳播、makemore、GPT 等主題。



### 大型開放式線上課程（MOOC）
**[`^        回到頂端        ^`](#awesome-data-science)**

- [Coursera 資料科學導論](https://www.coursera.org/specializations/data-science)
- [資料科學 - Coursera 九階段專項課程](https://www.coursera.org/specializations/jhu-data-science)
- [資料探勘 - Coursera 五階段專項課程](https://www.coursera.org/specializations/data-mining)
- [機器學習 - Coursera 五階段專項課程](https://www.coursera.org/specializations/machine-learning)
- [CS 109 資料科學](https://cs109.github.io/2015/)
- [OpenIntro](https://www.openintro.org/)
- [CS 171 視覺化](https://www.cs171.org/#!index.md)
- [流程探勘：實踐中的資料科學](https://www.coursera.org/learn/process-mining)
- [牛津深度學習](https://www.cs.ox.ac.uk/projects/DeepLearn/)
- [牛津深度學習 - 影片](https://www.youtube.com/playlist?list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV53Fu)
- [牛津機器學習](https://www.cs.ox.ac.uk/research/ai_ml/index.html)
- [UBC 機器學習 - 影片](https://www.cs.ubc.ca/~nando/540-2013/lectures.html)
- [資料科學專項課程](https://github.com/DataScienceSpecialization/courses)
- [Coursera 大數據專項課程](https://www.coursera.org/specializations/big-data)
- [Edx 資料科學與分析的統計思維](https://www.edx.org/course/statistical-thinking-for-data-science-and-analytic)
- [Cognitive Class AI by IBM](https://cognitiveclass.ai/)
- [Udacity - 深度學習](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187)
- [Keras in Motion](https://www.manning.com/livevideo/keras-in-motion)
- [Microsoft 資料科學專業計畫](https://academy.microsoft.com/en-us/professional-program/tracks/data-science/)
- [COMP3222/COMP6246 - 機器學習技術](https://tdgunes.com/COMP6246-2019Fall/)
- [CS 231 - 用於視覺辨識的卷積神經網路](https://cs231n.github.io/)
- [Coursera TensorFlow 實戰](https://www.coursera.org/professional-certificates/tensorflow-in-practice)
- [Coursera 深度學習專項課程](https://www.coursera.org/specializations/deep-learning)
- [365 Data Science 課程](https://365datascience.com/)
- [Coursera 自然語言處理專項課程](https://www.coursera.org/specializations/natural-language-processing)
- [Coursera GAN 專項課程](https://www.coursera.org/specializations/generative-adversarial-networks-gans)
- [Codecademy 資料科學課程](https://www.codecademy.com/learn/paths/data-science)
- [線性代數](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) - Gilbert Strang 的線性代數課程
- [線性代數的 2020 年展望（G. Strang）](https://ocw.mit.edu/resources/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/)
- [Python 資料科學基礎課程](https://intellipaat.com/academy/course/python-for-data-science-free-training/)
- [資料科學：統計與機器學習](https://www.coursera.org/specializations/data-science-statistics-machine-learning)
- [生產環境機器學習工程（MLOps）](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)
- [明尼蘇達大學推薦系統專項課程](https://www.coursera.org/specializations/recommender-systems) 是 Coursera 上為中階及進階學習者設計的推薦系統專項課程。
- [史丹佛人工智慧專業計畫](https://online.stanford.edu/programs/artificial-intelligence-professional-program)
- [使用 Python 成為資料科學家](https://app.datacamp.com/learn/career-tracks/data-scientist-with-python)
- [Julia 程式設計](https://www.udemy.com/course/programming-with-julia/)
- [Scaler 資料科學與機器學習課程](https://www.scaler.com/data-science-course/)
- [資料科學技能樹](https://labex.io/skilltrees/data-science)
- [資料科學入門 - AI 導師教學](https://codekidz.ai/lesson-intro/data-science-368dbf)
- [機器學習入門 - AI 導師教學](https://codekidz.ai/lesson-intro/machine-lear-36abfb)
- [資料科學導論](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-data-science)
-[使用 Python 開始資料科學](https://www.codecademy.com/learn/getting-started-with-python-for-data-science)
- [Google 進階資料分析證書](https://grow.google/data-analytics/) – 提供資料分析、統計與機器學習基礎的專業課程。
- [Maschinelle Sprachgebrauchsanalyse - Grundlagen der Korpuslinguistik](https://www.twillo.de/edu-sharing/components/collections?id=e6ce03ae-4660-49b0-be10-dcc92e71e796) - 德文課程教材，介紹文字探勘與語料庫語言學，由北萊茵－西發利亞邦資助。
- [Programmieren für Germanist*innen](https://www.twillo.de/edu-sharing/components/collections?id=16bac749-f10e-483f-9020-5d6365b4e092) - 德文課程教材，為數位人文領域介紹 Python 程式設計，由北萊茵－西發利亞邦資助。
- [QuiddityML](https://quiddityml.com/?utm_source=github&utm_medium=awesome&utm_campaign=awesome-datascience) - 短篇課程搭配實作程式練習與間隔重複學習，涵蓋 Python、PyTorch、機器學習數學、機器學習基礎、NLP 與電腦視覺。

### 密集課程
**[`^        回到頂端        ^`](#awesome-data-science)**
- [Great Learning 資料科學課程](https://www.mygreatlearning.com/data-science/courses) - 線上資料科學與分析證書、研究所及學位課程的彙整。
- [S2DS](https://www.s2ds.org/)
- [WorldQuant University Applied Data Science Lab](https://www.wqu.edu/adsl)


### 大專院校
**[`^        回到頂端        ^`](#awesome-data-science)**

- [提供資料科學學位的大專院校清單](https://github.com/ryanswanstrom/awesome-datascience-colleges)
- [柏克萊資料科學學位](https://ischoolonline.berkeley.edu/data-science/)
- [維吉尼亞大學資料科學學位](https://datascience.virginia.edu/)
- [威斯康辛大學資料科學學位](https://datasciencedegree.wisconsin.edu/)
- [資料科學與應用學士](https://study.iitm.ac.in/ds/)
- [波士頓大學電腦資訊系統碩士](https://www.bu.edu/online/programs/graduate-programs/computer-information-systems-masters-degree/)
- [ASU Online 商業分析理學碩士](https://asuonline.asu.edu/online-degree-programs/graduate/master-science-business-analytics/)
- [雪城大學應用資料科學碩士](https://ischool.syr.edu/academics/applied-data-science-masters-degree/)
- [Leuphana 管理與資料科學碩士](https://www.leuphana.de/en/graduate-school/masters-programmes/management-data-science.html)
- [墨爾本大學資料科學碩士](https://study.unimelb.edu.au/find/courses/graduate/master-of-data-science/#overview)
- [愛丁堡大學資料科學理學碩士](https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&id=902)
- [Queen’s University 管理分析碩士](https://smith.queensu.ca/grad_studies/mma/index.php)
- [伊利諾理工學院資料科學碩士](https://www.iit.edu/academics/programs/data-science-mas)
- [密西根大學應用資料科學碩士](https://www.si.umich.edu/programs/master-applied-data-science)
- [恩荷芬理工大學資料科學與人工智慧碩士](https://www.tue.nl/en/education/graduate-school/master-data-science-and-artificial-intelligence/)
- [格拉納達大學資料科學與電腦工程碩士](https://masteres.ugr.es/datcom/)

## 資料科學工具箱
**[`^        回到頂端        ^`](#awesome-data-science)**

本節彙整資料科學領域中有用的套件、工具、演算法及其他資源。

### 演算法
**[`^        回到頂端        ^`](#awesome-data-science)**

以下列出一些機器學習與資料探勘演算法和模型，可協助你理解資料並從中找出意義。

#### 三種機器學習系統

- 依據人類監督下的訓練
- 依據即時增量學習
- 依據資料點比較與模式偵測

### 比較
- [datacompy](https://github.com/capitalone/datacompy) - 用來比較兩個 Pandas DataFrame 的 DataComPy 套件。

#### 監督式學習

- [迴歸](https://en.wikipedia.org/wiki/Regression)
- [線性迴歸](https://en.wikipedia.org/wiki/Linear_regression)
- [普通最小平方法](https://en.wikipedia.org/wiki/Ordinary_least_squares)
- [邏輯迴歸](https://en.wikipedia.org/wiki/Logistic_regression)
- [逐步迴歸](https://en.wikipedia.org/wiki/Stepwise_regression)
- [多變量自適應迴歸樣條](https://en.wikipedia.org/wiki/Multivariate_adaptive_regression_spline)
- [Softmax 迴歸](https://d2l.ai/chapter_linear-classification/softmax-regression.html)
- [局部估計散佈圖平滑](https://en.wikipedia.org/wiki/Local_regression)
- 分類
  - [k 近鄰](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
  - [支援向量機](https://en.wikipedia.org/wiki/Support_vector_machine)
  - [決策樹](https://en.wikipedia.org/wiki/Decision_tree)
  - [ID3 演算法](https://en.wikipedia.org/wiki/ID3_algorithm)
  - [C4.5 演算法](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [集成學習](https://scikit-learn.org/stable/modules/ensemble.html)
  - [提升法](https://en.wikipedia.org/wiki/Boosting_(machine_learning))
  - [堆疊法](https://machinelearningmastery.com/stacking-ensemble-machine-learning-with-python)
  - [自助聚合（Bagging）](https://en.wikipedia.org/wiki/Bootstrap_aggregating)
  - [隨機森林](https://en.wikipedia.org/wiki/Random_forest)
  - [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)

#### 非監督式學習
- [分群](https://scikit-learn.org/stable/modules/clustering.html#clustering)
  - [階層式分群](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)
  - [k-means](https://scikit-learn.org/stable/modules/clustering.html#k-means)
  - [密度式分群](https://scikit-learn.org/stable/modules/clustering.html#dbscan)
  - [模糊分群](https://en.wikipedia.org/wiki/Fuzzy_clustering)
  - [混合模型](https://en.wikipedia.org/wiki/Mixture_model)
- [降維](https://en.wikipedia.org/wiki/Dimensionality_reduction)
  - [主成分分析（PCA）](https://scikit-learn.org/stable/modules/decomposition.html#principal-component-analysis-pca)
  - [t-SNE；t 分布隨機鄰近嵌入](https://scikit-learn.org/stable/modules/manifold.html#t-distributed-stochastic-neighbor-embedding-tsne)
  - [因子分析](https://scikit-learn.org/stable/modules/decomposition.html#factor-analysis)
  - [潛在狄利克雷分配（LDA）](https://scikit-learn.org/stable/modules/decomposition.html#latent-dirichlet-allocation-lda)
- [神經網路](https://en.wikipedia.org/wiki/Neural_network)
- [自組織映射](https://en.wikipedia.org/wiki/Self-organizing_map)
- [自適應共振理論](https://en.wikipedia.org/wiki/Adaptive_resonance_theory)
- [隱馬可夫模型（HMM）](https://en.wikipedia.org/wiki/Hidden_Markov_model)

#### 半監督式學習

- S3VM
- [分群](https://en.wikipedia.org/wiki/Weak_supervision#Cluster_assumption)
- [生成式模型](https://en.wikipedia.org/wiki/Weak_supervision#Generative_models)
- [低密度分離](https://en.wikipedia.org/wiki/Weak_supervision#Low-density_separation)
- [拉普拉斯正則化](https://en.wikipedia.org/wiki/Weak_supervision#Laplacian_regularization)
- [啟發式方法](https://en.wikipedia.org/wiki/Weak_supervision#Heuristic_approaches)

#### 強化學習

- [Q 學習](https://en.wikipedia.org/wiki/Q-learning)
- [SARSA（狀態－動作－獎勵－狀態－動作）演算法](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action)
- [時間差分學習](https://en.wikipedia.org/wiki/Temporal_difference_learning#:~:text=Temporal%20difference%20(TD)%20learning%20refers,estimate%20of%20the%20value%20function.)

#### 資料探勘演算法

- [C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [k-Means](https://en.wikipedia.org/wiki/K-means_clustering)
- [SVM（支援向量機）](https://en.wikipedia.org/wiki/Support_vector_machine)
- [Apriori](https://en.wikipedia.org/wiki/Apriori_algorithm)
- [EM（期望最大化）](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)
- [PageRank](https://en.wikipedia.org/wiki/PageRank)
- [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)
- [KNN（k 近鄰）](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
- [樸素貝葉斯](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [CART（分類與迴歸樹）](https://en.wikipedia.org/wiki/Decision_tree_learning)
#### 現代資料探勘演算法

- [XGBoost（極限梯度提升）](https://en.wikipedia.org/wiki/XGBoost)
- [LightGBM（輕量梯度提升機）](https://en.wikipedia.org/wiki/LightGBM)
- [CatBoost](https://catboost.ai/)
- [HDBSCAN（含雜訊的階層式密度空間分群）](https://en.wikipedia.org/wiki/DBSCAN#HDBSCAN)
- [FP-Growth（頻繁模式成長演算法）](https://en.wikipedia.org/wiki/Association_rule_learning#FP-growth_algorithm)
- [孤立森林](https://en.wikipedia.org/wiki/Isolation_forest)
- [深度嵌入式分群（DEC）](https://arxiv.org/abs/1511.06335)
- [TPU（前 k 大週期性與高效用模式）](https://arxiv.org/abs/2509.15732)
- [情境感知規則探勘（基於 Transformer 的架構）](https://arxiv.org/abs/2503.11125)


#### 深度學習架構

- [多層感知器](https://en.wikipedia.org/wiki/Multilayer_perceptron)
- [卷積神經網路（CNN）](https://en.wikipedia.org/wiki/Convolutional_neural_network)
- [循環神經網路（RNN）](https://en.wikipedia.org/wiki/Recurrent_neural_network)
- [波茲曼機](https://en.wikipedia.org/wiki/Boltzmann_machine)
- [自編碼器](https://www.tensorflow.org/tutorials/generative/autoencoder)
- [生成對抗網路（GAN）](https://developers.google.com/machine-learning/gan/gan_structure)
- [自組織映射](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Transformer](https://www.tensorflow.org/text/tutorials/transformer)
- [條件隨機場（CRF）](https://towardsdatascience.com/conditional-random-fields-explained-e5b8256da776)
- [機器學習系統設計](https://www.evidentlyai.com/ml-system-design)

### 一般機器學習套件
**[`^        回到頂端        ^`](#awesome-data-science)**

* [scikit-learn](https://scikit-learn.org/)
* [scikit-multilearn](https://github.com/scikit-multilearn/scikit-multilearn)
* [sklearn-expertsys](https://github.com/tmadl/sklearn-expertsys)
* [scikit-feature](https://github.com/jundongl/scikit-feature)
* [scikit-rebate](https://github.com/EpistasisLab/scikit-rebate)
* [seqlearn](https://github.com/larsmans/seqlearn)
* [sklearn-bayes](https://github.com/AmazaspShumik/sklearn-bayes)
* [sklearn-crfsuite](https://github.com/TeamHG-Memex/sklearn-crfsuite)
* [sklearn-deap](https://github.com/rsteca/sklearn-deap)
* [sigopt_sklearn](https://github.com/sigopt/sigopt-sklearn)
* [sklearn-evaluation](https://github.com/edublancas/sklearn-evaluation)
* [scikit-image](https://github.com/scikit-image/scikit-image)
* [scikit-opt](https://github.com/guofei9987/scikit-opt)
* [scikit-posthocs](https://github.com/maximtrp/scikit-posthocs)
* [feature-engine](https://feature-engine.trainindata.com/)
* [me_fasttext](https://github.com/initial-d/me_fasttext) - 記憶體效率高的 FastText 變體，具備精確的 trie n-gram ID、感知結構的列共用，以及適用於大型詞彙表的 mmap 服務。
* [pystruct](https://github.com/pystruct/pystruct)
* [Shogun](https://www.shogun-toolbox.org/)
* [xLearn](https://github.com/aksnzhy/xlearn)
* [cuML](https://github.com/rapidsai/cuml)
* [causalml](https://github.com/uber/causalml)
* [mlpack](https://github.com/mlpack/mlpack)
* [MLxtend](https://github.com/rasbt/mlxtend)
* [modAL](https://github.com/modAL-python/modAL)
* [Sparkit-learn](https://github.com/lensacom/sparkit-learn)
* [hyperlearn](https://github.com/danielhanchen/hyperlearn)
* [dlib](https://github.com/davisking/dlib)
* [imodels](https://github.com/csinva/imodels)
* [jSciPy](https://github.com/hissain/jscipy) - SciPy 訊號處理模組的 Java 移植版本，提供濾波器、轉換及其他科學運算工具。
* [RuleFit](https://github.com/christophM/rulefit)
* [pyGAM](https://github.com/dswah/pyGAM)
* [Deepchecks](https://github.com/deepchecks/deepchecks)
* [scikit-survival](https://scikit-survival.readthedocs.io/en/stable)
* [interpretable](https://pypi.org/project/interpretable)
* [XGBoost](https://github.com/dmlc/xgboost)
* [LightGBM](https://github.com/microsoft/LightGBM)
* [CatBoost](https://github.com/catboost/catboost)
* [PerpetualBooster](https://github.com/perpetual-ml/perpetual)
* [JAX](https://github.com/google/jax)
* [PhilanthroPy](https://github.com/PhilanthroPy-Project/PhilanthroPy) - Scikit-learn 原生工具組，適用於非營利募款分析，提供避免資料洩漏的捐款人傾向、流失、遺贈、財富篩選與營收預測估計器。



### 深度學習套件

#### PyTorch 生態系
* [PyTorch](https://github.com/pytorch/pytorch)
* [TorchDR](https://github.com/TorchDR/TorchDR) - 支援 GPU 與多 GPU 的降維工具，提供與 scikit-learn 相容的 API。
* [torchvision](https://github.com/pytorch/vision)
* [torchtext](https://github.com/pytorch/text)
* [torchaudio](https://github.com/pytorch/audio)
* [ignite](https://github.com/pytorch/ignite)
* [PyTorchNet](https://github.com/pytorch/tnt)
* [PyToune](https://github.com/GRAAL-Research/poutyne)
* [skorch](https://github.com/skorch-dev/skorch)
* [PyVarInf](https://github.com/ctallec/pyvarinf)
* [pytorch_geometric](https://github.com/pyg-team/pytorch_geometric)
* [GPyTorch](https://github.com/cornellius-gp/gpytorch)
* [pyro](https://github.com/pyro-ppl/pyro)
* [Catalyst](https://github.com/catalyst-team/catalyst)
* [pytorch_tabular](https://github.com/manujosephv/pytorch_tabular)
* [Yolov3](https://github.com/ultralytics/yolov3)
* [Yolov5](https://github.com/ultralytics/yolov5)
* [Yolov8](https://github.com/ultralytics/ultralytics)
* [OpenLanguageModel](https://github.com/openlanguagemodel/openlanguagemodel) - 以 PyTorch 為核心的函式庫，用來建置、訓練及教學 Transformer 語言模型，架構以一般 nn.Modules 撰寫。

#### TensorFlow 生態系
* [TensorFlow](https://github.com/tensorflow/tensorflow)
* [TensorLayer](https://github.com/tensorlayer/TensorLayer)
* [TFLearn](https://github.com/tflearn/tflearn)
* [Sonnet](https://github.com/deepmind/sonnet)
* [tensorpack](https://github.com/tensorpack/tensorpack)
* [TRFL](https://github.com/deepmind/trfl)
* [Polyaxon](https://github.com/polyaxon/polyaxon)
* [NeuPy](https://github.com/itdxer/neupy)
* [tfdeploy](https://github.com/riga/tfdeploy)
* [tensorflow-upstream](https://github.com/ROCmSoftwarePlatform/tensorflow-upstream)
* [TensorFlow Fold](https://github.com/tensorflow/fold)
* [tensorlm](https://github.com/batzner/tensorlm)
* [TensorLight](https://github.com/bsautermeister/tensorlight)
* [Mesh TensorFlow](https://github.com/tensorflow/mesh)
* [Ludwig](https://github.com/ludwig-ai/ludwig)
* [TF-Agents](https://github.com/tensorflow/agents)
* [TensorForce](https://github.com/tensorforce/tensorforce)

#### Keras 生態系

* [Keras](https://keras.io)
* [keras-contrib](https://github.com/keras-team/keras-contrib)
* [Hyperas](https://github.com/maxpumperla/hyperas)
* [Elephas](https://github.com/maxpumperla/elephas)
* [Hera](https://github.com/keplr-io/hera)
* [Spektral](https://github.com/danielegrattarola/spektral)
* [qkeras](https://github.com/google/qkeras)
* [keras-rl](https://github.com/keras-rl/keras-rl)
* [Talos](https://github.com/autonomio/talos)

#### 視覺化工具
**[`^        回到頂端        ^`](#awesome-data-science)**

- [altair](https://altair-viz.github.io/)
- [amcharts](https://www.amcharts.com/)
- [anychart](https://www.anychart.com/)
- [bokeh](https://bokeh.org/)
- [Comet](https://www.comet.com/site/products/ml-experiment-tracking/?utm_source=awesome-datascience)
- [slemma](https://slemma.com/)
- [cartodb](https://cartodb.github.io/odyssey.js/)
- [Cube](https://square.github.io/cube/)
- [d3plus](https://d3plus.org/)
- [Data-Driven Documents(D3js)](https://d3js.org/)
- [dygraphs](https://dygraphs.com/)
- [exhibit](https://www.simile-widgets.org/exhibit/)
- [gephi](https://gephi.org/)
- [ggplot2](https://ggplot2.tidyverse.org/)
- [Glue](https://docs.glueviz.org/en/latest/index.html)
- [Google Chart Gallery](https://developers.google.com/chart/interactive/docs/gallery)
- [Highcharts](https://www.highcharts.com/)
- [import.io](https://www.import.io/)
- [Matplotlib](https://matplotlib.org/)
- [nvd3](https://nvd3.org/)
- [Netron](https://github.com/lutzroeder/netron)
- [Openrefine](https://openrefine.org/)
- [plot.ly](https://plot.ly/)
- [raw](https://rawgraphs.io)
- [Resseract Lite](https://github.com/abistarun/resseract-lite)
- [Seaborn](https://seaborn.pydata.org/)
- [techanjs](https://techanjs.org/)
- [Timeline](https://timeline.knightlab.com/)
- [variancecharts](https://variancecharts.com/index.html)
- [vida](https://vida.io/)
- [vizzu](https://github.com/vizzuhq/vizzu-lib)
- [Wrangler](https://vis.stanford.edu/wrangler/)
- [r2d3](https://www.r2d3.us/visual-intro-to-machine-learning-part-1/)
- [NetworkX](https://networkx.org/)
- [Redash](https://redash.io/)
- [Metabase](https://www.metabase.com/)
- [C3](https://c3js.org/)
- [TensorWatch](https://github.com/microsoft/tensorwatch)
- [geomap](https://pypi.org/project/geomap/)
- [Dash](https://plotly.com/dash/)
- [MetaReview](https://metareview-8c1.pages.dev/) - 免費線上統合分析平台，提供 11 種互動式 D3.js 統計圖表（森林圖、漏斗圖、Galbraith 圖、L'Abbé 圖、Baujat 圖等）、5 種效應量指標、AI 文獻篩選及可供出版的報告匯出功能。[github.com](https://github.com/TerryFYL/metareview)
- [torchvista](https://github.com/sachinhosmani/torchvista) - 以互動式筆記本工具視覺化任何 PyTorch 模型的前向傳遞。
- [FlexViz](https://github.com/flex-analytics/flexviz) - Python 函式庫，適用於互動式交叉篩選儀表板；透過伺服器端 Polars 聚合資料，即使處理超過 1 億列仍可保持回應迅速。

### 其他工具
**[`^        回到頂端        ^`](#awesome-data-science)**

| 連結 | 說明 |
| --- | --- |
| [資料科學生命週期流程](https://github.com/dslp/dslp) | 資料科學生命週期流程是一套流程，可協助資料科學團隊持續且永續地從構想邁向價值。本儲存庫記錄了這套流程。 |
| [資料科學生命週期範本儲存庫](https://github.com/dslp/dslp-repo-template) | 資料科學生命週期專案的範本儲存庫。 |
| [TabGAN](https://github.com/Diyago/Tabular-data-generation) | 使用 GAN、擴散模型與 LLM，搭配對抗式篩選與隱私指標來產生合成表格資料。 |
| [RexMex](https://github.com/AstraZeneca/rexmex) | 通用推薦系統評估指標函式庫，可進行公平評估。 |
| [ChemicalX](https://github.com/AstraZeneca/chemicalx) | 以 PyTorch 為基礎的深度學習函式庫，用於藥物配對評分。 |
| [FileShot.io](https://github.com/FileShot/FileShotZKE) | 安全的零知識加密檔案分享（在瀏覽器中使用 AES-256-GCM）。無須帳號，採 MIT 授權，可自行架設，並可選擇連結到期時間。 |
| [CorpusExplorer](https://corpusexplorer.de/) | 為語料庫語言學家及文字／資料探勘愛好者打造的軟體。可用 60 多種語言建立自己的語料庫，並使用 50 多種工具與視覺化功能。 |
| [PyTorch Geometric Temporal](https://github.com/benedekrozemberczki/pytorch_geometric_temporal) | 動態圖上的表徵學習。 |
| [Little Ball of Fur](https://github.com/benedekrozemberczki/littleballoffur) | 適用於 NetworkX 的圖取樣函式庫，提供類似 Scikit-Learn 的 API。 |
| [Karate Club](https://github.com/benedekrozemberczki/karateclub) | 適用於 NetworkX 的非監督式機器學習擴充函式庫，提供類似 Scikit-Learn 的 API。 |
| [ML Workspace](https://github.com/ml-tooling/ml-workspace) | 一站式網頁機器學習與資料科學 IDE。工作區以 Docker 容器部署，並預先安裝多種熱門資料科學函式庫（例如 TensorFlow、PyTorch）和開發工具（例如 Jupyter、VS Code）。 |
| [xonsh shell](https://github.com/xonsh/xonsh) | 以 Python 驅動的 Shell，可整合、管理與協調多數以 Python 撰寫的資料科學函式庫，讓你建置管線、程式碼及命令式工作流程。也可作為 Jupyter Notebook 的核心。 |
| [Neptune.ai](https://neptune.ai) | 友善社群的平台，協助資料科學家建立並分享機器學習模型。Neptune 有助於團隊合作、基礎架構管理、模型比較與可重現性。 |
| [steppy](https://github.com/minerva-ml/steppy) | 輕量級 Python 函式庫，可快速且可重現地進行機器學習實驗。提供極簡介面，便於設計整潔的機器學習管線。 |
| [steppy-toolkit](https://github.com/minerva-ml/steppy-toolkit) | 精選神經網路、Transformer 與模型的集合，讓機器學習工作更快速、更有效率。 |
| [Google Datalab](https://cloud.google.com/datalab/docs/) | 使用 Python、SQL 等熟悉語言，以互動方式輕鬆探索、視覺化、分析與轉換資料。 |
| [Hortonworks Sandbox](https://www.cloudera.com/downloads/hortonworks-sandbox.html) | 個人專用、可攜式的 Hadoop 環境，附有十多個互動式 Hadoop 教學。 |
| [R](https://www.r-project.org/) | 免費的統計運算與圖形軟體環境。 |
| [Tidyverse](https://www.tidyverse.org/) | 一組專為資料科學設計、具備明確設計主張的 R 套件。所有套件共用底層設計理念、語法與資料結構。 |
| [RStudio](https://www.rstudio.com) | R 的 IDE，提供強大的使用者介面。免費且開放原始碼，支援 Windows、Mac 與 Linux。 |
| [Python - Pandas - Anaconda](https://www.anaconda.com) | 完全免費、適用於企業的 Python 發行版，可進行大規模資料處理、預測分析與科學運算。 |
| [Pandas 圖形介面](https://github.com/adrotog/PandasGUI) | Pandas 圖形介面。 |
| [NuriStat](https://github.com/baramgay/stat) | 免費開源的 SPSS 替代工具，以選單操作的桌面統計軟體（t 檢定、ANOVA、迴歸、生存分析、ROC），支援 SPSS .sav 匯入與匯出。 |
| [Polars](https://github.com/pola-rs/polars) | 以 Rust 與 Python 撰寫的高速 DataFrame 函式庫，旨在提供比 Pandas 更快的替代方案。 |
| [CiteMe](https://citeme.app) | 免費的學術引文產生器，內建參考資料檢查工具，可標示偽造或幻覺引文。搜尋 11 個以上學術資料庫（OpenAlex、PubMed、Semantic Scholar、CrossRef、SciELO），提供 40 多種引文格式與公開 API。無須註冊；支援英文、西班牙文、葡萄牙文、法文與德文。|
| [Scikit-Learn](https://scikit-learn.org/stable/) | Python 機器學習。 |
| [NumPy](https://numpy.org/) | NumPy 是 Python 科學運算的基礎，支援大型多維陣列與矩陣，並提供多種可對這些陣列執行運算的高階數學函式。 |
| [Vaex](https://vaex.io/) | Python 函式庫，可快速視覺化大型資料集並計算統計資料。 |
| [SciPy](https://scipy.org/) | SciPy 可搭配 NumPy 陣列使用，並提供高效的數值積分與最佳化常式。 |
| [資料科學工具箱](https://www.coursera.org/learn/data-scientists-tools) | Coursera 課程。 |
| [資料科學工具箱](https://datasciencetoolbox.org/) | 部落格。 |
| [Wolfram 資料科學平台](https://www.wolfram.com/data-science-platform/) | 將數值、文字、圖像、GIS 或其他資料交由 Wolfram 處理，執行完整的資料科學分析與視覺化，並自動產生豐富的互動報告；一切皆由革命性的知識導向 Wolfram Language 驅動。 |
| [Datadog](https://www.datadoghq.com/) | 為大規模資料科學提供解決方案、程式碼與 DevOps 工具。 |
| [Variance](https://variancecharts.com/) | 無須撰寫 JavaScript，即可為網頁建置強大的資料視覺化。 |
| [Kite 開發套件](https://kitesdk.org/docs/current/index.html) | Kite 軟體開發套件（Apache License 2.0），簡稱 Kite，是一組函式庫、工具、範例與文件，旨在簡化以 Hadoop 生態系為基礎建置系統的流程。 |
| [Domino Data Labs](https://www.dominodatalab.com) | 無須任何基礎架構或設定，即可執行、擴充、分享與部署模型。 |
| [Apache Flink](https://flink.apache.org/) | 高效、分散式、通用的資料處理平台。 |
| [Apache Hama](https://hama.apache.org/) | Apache Hama 是 Apache 頂層開源專案，可執行超越 MapReduce 的進階分析。 |
| [Weka](https://ml.cms.waikato.ac.nz/weka/index.html) | Weka 是一套用於資料探勘任務的機器學習演算法集合。 |
| [Octave](https://www.gnu.org/software/octave/) | GNU Octave 是一種高階直譯語言，主要用於數值運算。（免費版 Matlab） |
| [Apache Spark](https://spark.apache.org/) | 閃電般快速的叢集運算。 |
| [Hydrosphere Mist](https://github.com/Hydrospheredata/mist) | 一項服務，可將 Apache Spark 分析工作與機器學習模型發布為即時、批次或反應式網頁服務。 |
| [Data Mechanics](https://www.datamechanics.co) | 資料科學與工程平台，讓 Apache Spark 更方便開發者使用，且更具成本效益。 |
| [Caffe](https://caffe.berkeleyvision.org/) | 深度學習框架。 |
| [Torch](https://torch.ch/) | LuaJIT 的科學運算框架。 |
| [Nervana 的 Python 深度學習框架](https://github.com/NervanaSystems/neon) | Intel® Nervana™ 參考深度學習框架，致力於在所有硬體上提供最佳效能。 |
| [Skale](https://github.com/skale-me/skale) | NodeJS 高效能分散式資料處理。 |
| [Aerosolve](https://airbnb.io/aerosolve/) | 為人類打造的機器學習套件。 |
| [Intel 框架](https://github.com/intel/idlf) | Intel® 深度學習框架。 |
| [Datawrapper](https://www.datawrapper.de/) | 開源資料視覺化平台，協助所有人製作簡潔、正確且可嵌入的圖表。另見 [github.com](https://github.com/datawrapper/datawrapper)。 |
| [Tensor Flow](https://www.tensorflow.org/) | TensorFlow 是開源的機器智慧軟體函式庫。 |
| [自然語言工具套件](https://www.nltk.org/) | 入門易學且功能強大的自然語言處理與分類工具組。 |
| [FunASR](https://github.com/modelscope/FunASR) | 工業級語音辨識工具組，支援 50 多種語言，內建 VAD、標點符號、說話者分離與情緒偵測。另附 OpenAI 相容的 API 伺服器。 |
| [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) | 免費、端對端、無程式碼的文字標註與深度學習模型訓練／微調平台。開箱即支援 Spark NLP 模型，包括命名實體辨識、分類、關係擷取與斷言狀態。不限使用者、團隊、專案與文件數量。 |
| [Node.js NLP 工具組](https://www.npmjs.com/package/nlp-toolkit) | 此模組涵蓋部分 NLP 基礎原理與實作，重點在效能。處理 NLP 範例或訓練資料時，記憶體很快就會耗盡。因此此模組中的所有實作都採用串流方式，只將當前處理步驟所需的資料保留在記憶體中。 |
| [Julia](https://julialang.org) | 適用於技術運算的高階、高效能動態程式語言。 |
| [IJulia](https://github.com/JuliaLang/IJulia.jl) | Julia 語言後端，結合 Jupyter 互動式環境。 |
| [Apache Zeppelin](https://zeppelin.apache.org/) | 網頁式筆記本，可使用 SQL、Scala 等工具進行資料導向的互動式分析，並建立協作文件。 |
| [Featuretools](https://github.com/alteryx/featuretools) | 以 Python 撰寫的開源自動化特徵工程框架。 |
| [Optimus](https://github.com/hi-primus/optimus) | 以 PySpark 為後端，提供資料清理、預處理、特徵工程、探索性資料分析及簡易機器學習功能。 |
| [Albumentations](https://github.com/albumentations-team/albumentations) | 快速且不受框架限制的圖像增強函式庫，實作多種增強技術。開箱即支援分類、分割與偵測。曾用於贏得 Kaggle、Topcoder 及 CVPR 工作坊中的多項深度學習競賽。 |
| [DVC](https://github.com/iterative/dvc) | 開源資料科學版本控制系統，可協助追蹤、整理資料科學專案，並讓專案具備可重現性。最基本的用途是對大型資料與模型檔案進行版本控制及分享。 |
| [Lambdo](https://github.com/asavinov/lambdo) | 工作流程引擎，可將（i）特徵工程與機器學習、（ii）模型訓練與預測、（iii）資料表填入與欄位評估整合至同一分析管線，大幅簡化資料分析。 |
| [Feast](https://github.com/feast-dev/feast) | 特徵儲存庫，用於管理、探索與存取機器學習特徵。Feast 為模型訓練與模型服務提供一致的特徵資料檢視。 |
| [Polyaxon](https://github.com/polyaxon/polyaxon) | 可重現且可擴充的機器學習與深度學習平台。 |
| [UBIAI](https://ubiai.tools) | 易於團隊使用的文字標註工具，具備完整的自動標註功能。支援 NER、關係與文件分類，也提供發票標記用的 OCR 標註。 |
| [Trains](https://github.com/allegroai/clearml) | 自動化實驗管理、版本控制與 AI DevOps。 |
| [Hopsworks](https://github.com/logicalclocks/hopsworks) | 開源、資料密集型機器學習平台，內含特徵儲存庫。可擷取並管理線上（MySQL Cluster）與離線（Apache Hive）特徵，並大規模訓練和提供模型服務。 |
| [MindsDB](https://github.com/mindsdb/mindsdb) | 為開發者打造的可解釋 AutoML 框架。使用 MindsDB，只需一行程式碼即可建置、訓練並使用最先進的 ML 模型。 |
| [Lightwood](https://github.com/mindsdb/lightwood) | 以 PyTorch 為基礎的框架，可將機器學習問題拆解為能無縫串接的小區塊，目標是只用一行程式碼建立預測模型。 |
| [AWS Data Wrangler](https://github.com/awslabs/aws-data-wrangler) | 開源 Python 套件，擴充 Pandas 函式庫的能力，將 DataFrame 與 AWS 資料服務（Amazon Redshift、AWS Glue、Amazon Athena、Amazon EMR 等）連接。 |
| [Amazon Rekognition](https://aws.amazon.com/rekognition/) | AWS Rekognition 服務讓使用 Amazon Web Services 的開發者能在應用程式中加入圖像分析功能。可編目資產、自動化工作流程，並從媒體與應用程式中擷取意義。|
| [Amazon Textract](https://aws.amazon.com/textract/) | 自動從任何文件中擷取印刷文字、手寫內容與資料。 |
| [Amazon Lookout for Vision](https://aws.amazon.com/lookout-for-vision/) | 使用電腦視覺偵測產品瑕疵，將品質檢查自動化。辨識缺少的產品零件、車輛與結構損壞及其他異常，全面落實品質控管。|
| [Amazon CodeGuru](https://aws.amazon.com/codeguru/) | 透過 ML 驅動的建議，自動執行程式碼審查並最佳化應用程式效能。|
| [CML](https://github.com/iterative/cml) | 開源工具組，可在資料科學專案中使用持續整合。透過 GitHub Actions 與 GitLab CI 自動訓練及測試類似正式環境的模型，並在 pull／merge request 中自動產生視覺化報告。 |
| [Dask](https://dask.org/) | 開源 Python 函式庫，可輕鬆將分析程式碼轉換為分散式運算系統（大數據）。 |
| [DuckDB](https://github.com/duckdb/duckdb) | 程序內 SQL OLAP 資料庫管理系統。 |
| [Statsmodels](https://www.statsmodels.org/stable/index.html) | 以 Python 為基礎的推論統計、假設檢定與迴歸框架。 |
| [Gensim](https://radimrehurek.com/gensim/) | 開源函式庫，用於自然語言文字的主題建模。 |
| [spaCy](https://spacy.io/) | 高效能自然語言處理工具組。 |
| [Grid Studio](https://github.com/ricklamers/gridstudio) | 網頁試算表應用程式，完整整合 Python 程式語言。 |
|[Python 資料科學手冊](https://github.com/jakevdp/PythonDataScienceHandbook)|Python 資料科學手冊：完整內容以 Jupyter Notebook 呈現|
| [Shapley](https://github.com/benedekrozemberczki/shapley) | 以資料為基礎的架構，可量化機器學習集成模型中分類器的價值。 |
| [DAGsHub](https://dagshub.com) | 以開源工具打造的平台，用於管理資料、模型與管線。 |
| [Deepnote](https://deepnote.com) | 新型資料科學筆記本，相容於 Jupyter，支援即時協作並在雲端執行。 |
| [Valohai](https://valohai.com) | MLOps 平台，負責機器協調、自動重現與部署。 |
| [PyMC3](https://docs.pymc.io/) | Python 機率程式設計函式庫（貝葉斯推論與機器學習）。 |
| [PyStan](https://pypi.org/project/pystan/) | Stan 的 Python 介面（貝葉斯推論與建模）。 |
| [hmmlearn](https://pypi.org/project/hmmlearn/) | 隱馬可夫模型的非監督式學習與推論。 |
| [Chaos Genius](https://github.com/chaos-genius/chaos_genius/) | 以 ML 驅動的分析引擎，用於離群值／異常偵測與根本原因分析。 |
| [PySAD](https://github.com/selimfirat/pysad) | Python 函式庫，用於串流資料異常偵測。 |
| [Nimblebox](https://nimblebox.ai/) | 全端 MLOps 平台，協助全球資料科學家與機器學習從業人員透過瀏覽器探索、建立並推出多雲端應用程式。 |
| [Towhee](https://github.com/towhee-io/towhee) | Python 函式庫，可將非結構化資料編碼為嵌入向量。 |
| [LineaPy](https://github.com/LineaLabs/lineapy) | 是否曾因整理冗長雜亂的 Jupyter Notebook 而感到挫折？LineaPy 是開源 Python 函式庫，只需兩行程式碼，就能將雜亂的開發程式碼轉換為正式環境管線。 |
| [envd](https://github.com/tensorchord/envd) | 🏕️ 為資料科學與 AI／ML 工程團隊打造的機器學習開發環境。 |
| [探索資料科學函式庫](https://kandi.openweaver.com/explore/data-science) | 搜尋工具 🔎，可探索並尋找精選的熱門與新興函式庫、頂尖作者、熱門專案套件、討論、教學及學習資源。 |
| [MLEM](https://github.com/iterative/mlem) | 🐶 遵循 GitOps 原則管理版本並部署 ML 模型。 |
| [MLflow](https://mlflow.org/) | MLOps 框架，用於管理 ML 模型的完整生命週期。 |
| [cleanlab](https://github.com/cleanlab/cleanlab) | Python 函式庫，適用於以資料為核心的 AI，並可自動偵測 ML 資料集中的各種問題。 |
| [AutoGluon](https://github.com/awslabs/autogluon) | AutoML 工具，可輕鬆為圖像、文字、表格、時間序列與多模態資料產生準確預測。 |
| [Arize AI](https://arize.com/) | Arize AI 社群版可觀測性工具，用於監控正式環境的機器學習模型，並追查資料品質、效能漂移等問題的根本原因。 |
| [Aureo.io](https://aureo.io) | 專注於人工智慧建置的低程式碼平台。使用者可運用基礎資料建立管線、自動化流程，並與人工智慧模型整合。 |
| [ERD Lab](https://www.erdlab.io/) | 為開發者打造的免費雲端實體關係圖（ERD）工具。
| [Arize-Phoenix](https://docs.arize.com/phoenix) | 在筆記本中使用 MLOps：發掘洞見、找出問題、監控並微調模型。 |
| [Comet](https://github.com/comet-ml/comet-examples) | MLOps 平台，提供實驗追蹤、模型正式環境管理、模型登錄庫與完整資料沿革，支援從訓練到正式環境的整個 ML 工作流程。 |
| [Opik](https://github.com/comet-ml/opik) | 在開發與正式環境的整個生命週期中評估、測試並發布 LLM 應用程式。 |
| [Synthical](https://synthical.com) | AI 驅動的協作研究環境。尋找相關論文、建立文獻集並摘要內容，一站完成。 |
| [teeplot](https://github.com/mmore500/teeplot) | 工作流程工具，可自動整理資料視覺化輸出。 |
| [Streamlit](https://github.com/streamlit/streamlit) | 適用於機器學習與資料科學專案的應用程式框架。 |
| [Gradio](https://github.com/gradio-app/gradio) | 為機器學習模型建立可自訂的使用者介面元件。 |
| [Weights & Biases](https://github.com/wandb/wandb) | 實驗追蹤、資料集版本管理與模型管理。 |
| [DVC](https://github.com/iterative/dvc) | 開源機器學習專案版本控制系統。 |
| [Optuna](https://github.com/optuna/optuna) | 自動化超參數最佳化軟體框架。 |
| [Ray Tune](https://github.com/ray-project/ray) | 可擴充的超參數調整函式庫。 |
| [Apache Airflow](https://github.com/apache/airflow) | 以程式方式撰寫、排程與監控工作流程的平台。 |
| [Prefect](https://github.com/PrefectHQ/prefect) | 為現代資料技術堆疊打造的工作流程管理系統。 |
| [Kedro](https://github.com/kedro-org/kedro) | 開源 Python 框架，可建立可重現、易維護的資料科學程式碼。 |
| [Hamilton](https://github.com/dagworks-inc/hamilton) | 輕量級函式庫，可撰寫並管理可靠的資料轉換流程。 |
| [SHAP](https://github.com/slundberg/shap) | 以賽局理論為基礎的方法，用來解釋任何機器學習模型的輸出。 |
| [InterpretML](https://github.com/interpretml/interpret) | InterpretML 實作了可解釋提升機（EBM），這是一種以廣義加法模型（GAM）為基礎、現代且完全可解釋的機器學習模型。此開源套件也為 EBM、其他白箱模型及黑箱模型解釋提供視覺化工具。 |
| [LIME](https://github.com/marcotcr/lime) | 解釋任何機器學習分類器預測結果的方法。 |
| [flyte](https://github.com/flyteorg/flyte) | 機器學習工作流程自動化平台。 |
| [dbt](https://github.com/dbt-labs/dbt-core) | 資料建置工具。 |
| [zasper](https://github.com/zasper-io/zasper) | 強化版資料科學 IDE。 |
| [skrub](https://github.com/skrub-data/skrub/) | Python 函式庫，可簡化表格型機器學習的前處理與特徵工程。 |
| [Glyph](https://github.com/Koda-OSS/Glyph) | 不受框架限制的 TypeScript 函式庫，可產生、搜尋並比較 MinHash 指紋，快速執行文字相似度分析、重複資料刪除與檢索。 |
| [Codeflash](https://www.codeflash.ai/) | 每次都能發布飛快的 Python 程式碼。 |
| [Hugging Face](https://huggingface.co/) | 廣受歡迎的開放平台，可分享 ML 模型與資料集，並協作 NLP 和生成式 AI 專案。 |
| [Chinese-Elite](https://github.com/anonym-g/Chinese-Elite) | 開源專案，使用 LLM 解析公開資料，自動建立關係網路並以互動圖表呈現。 |
| [Desbordante](https://github.com/desbordante/desbordante-core/) | 開源資料剖析工具，專注於探索與驗證複雜模式，例如[數值關聯規則](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Numerical_Association_Rules.ipynb)、[差異相依性](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Differential_Dependencies.ipynb)、[否定約束](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Denial_Constraints.ipynb)等。 |
| [dna-claude-analysis](https://github.com/shmlkv/dna-claude-analysis) | 個人基因組分析工具組，包含 Python 指令碼，可分析原始 DNA 資料的 17 個類別（健康風險、祖源、藥物基因體學、營養、心理學等），並產生終端機風格的單頁 HTML 視覺化。 |
| [RunMat](https://github.com/runmat-org/runmat) | 快速的 MATLAB 語法執行環境，可自動執行 CPU／GPU 運算並融合陣列核心。 |
| [Turbostream](https://github.com/turboline-ai/turbostream) | 終端機使用者介面，可在即時資料串流上實驗自訂規則引擎與選擇性 LLM 分析，無須煩惱串流基礎架構或背壓。 |
| [WFGY ProblemMap](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md) | 開源「失效圖譜」，整理 LLM 與 RAG 管線中 16 種常見問題，列出可觀察徵兆與建議修正方式，供資料科學團隊參考。 |
| [Deploybase](https://deploybase.ai/) | 追蹤所有雲端與推論服務供應商的即時 GPU 與 LLM 定價。 |
| [DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze) | 具代理能力的 LLM，可自主完成各種資料科學任務，無須人工介入。 |
| [Disco](https://github.com/leap-laboratories/discovery-engine) | 超越人類的探索式資料分析。找出表格資料中 LLM 與人工探索容易錯過的特徵交互作用和子群體效應，並提供 p 值、效應量與文獻引文。公開資料可免費使用。 |
| [AI for Database](https://aifordatabase.com) | 用自然語言與資料庫對話，無須 SQL。立即取得洞見、建立自動更新的儀表板，並依資料庫變更觸發自動化工作流程。 |
| [Crypto Pump Scanner](https://github.com/stefanoviana/deepalpha) | 以 AI 驅動的加密貨幣交易機器人，使用 LSTM 神經網路（準確率 84.6%）。具備即時暴漲偵測、經 walk-forward 驗證的模型，支援多個交易所（Bybit、Binance、OKX、Gate.io）。開源。 |
| [Future AGI](https://github.com/future-agi/future-agi) | 開源平台，可在單一回饋循環中模擬、評估、追蹤、設定防護、路由並最佳化 LLM 與 AI 代理程式應用程式，讓代理程式不只接受監控，也能自我改進。可自行架設。採 Apache-2.0 授權。 |
| [ipynbtopdf](https://ipynbtopdf.xyz/) | 瀏覽器版 Jupyter Notebook 檢視器與匯出工具，可將 `.ipynb` 筆記本轉換為 PDF、HTML 與 Python，無須安裝 Python 或 TeX。 |



## 文獻與媒體
**[`^        回到頂端        ^`](#awesome-data-science)**

本節收錄更多延伸閱讀資料、值得收看的頻道，以及值得聆聽的演講。

### 書籍
**[`^        回到頂端        ^`](#awesome-data-science)**

- [資料科學從零開始：以 Python 掌握第一原理](https://www.amazon.com/Data-Science-Scratch-Principles-Python-dp-1492041130/dp/1492041130/ref=dp_ob_title_bk)
- [使用 Python 學習人工智慧 - Tutorialspoint](https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_tutorial.pdf)
- [從零開始的機器學習](https://dafriedman97.github.io/mlbook/content/introduction.html)
- [機率式機器學習：導論](https://probml.github.io/pml-book/book1.html)
- [如何領導資料科學團隊](https://www.manning.com/books/how-to-lead-in-data-science) - 搶先閱讀版
- [以資料解決客戶流失問題](https://www.manning.com/books/fighting-churn-with-data)
- [使用 Python 與 Dask 大規模執行資料科學](https://www.manning.com/books/data-science-with-python-and-dask)
- [Python 資料科學手冊](https://jakevdp.github.io/PythonDataScienceHandbook/)
- [資料科學手冊：25 位傑出資料科學家的建議與見解](https://www.thedatasciencehandbook.com/)
- [像資料科學家一樣思考](https://www.manning.com/books/think-like-a-data-scientist)
- [資料科學導論](https://www.manning.com/books/introducing-data-science)
- [使用 R 實踐資料科學](https://www.manning.com/books/practical-data-science-with-r)
- [日常資料科學](https://www.amazon.com/dp/B08TZ1MT3W/ref=cm_sw_r_cp_apa_fabc_a0ceGbWECF9A8) & [(較便宜的 PDF 版本)](https://gum.co/everydaydata)
- [探索資料科學](https://www.manning.com/books/exploring-data-science) - 免費電子書試讀本
- [探索資料叢林](https://www.manning.com/books/exploring-the-data-jungle) - 免費電子書試讀本
- [Python 經典電腦科學問題](https://www.manning.com/books/classic-computer-science-problems-in-python)
- [程式設計師的數學](https://www.manning.com/books/math-for-programmers) 搶先閱讀版
- [R 實戰，第三版](https://www.manning.com/books/r-in-action-third-edition) 搶先閱讀版
- [資料科學讀書營](https://www.manning.com/books/data-science-bookcamp) 搶先閱讀版
- [資料科學思維：下一場科學、技術與經濟革命](https://www.springer.com/gp/book/9783319950914)
- [應用資料科學：資料驅動企業的經驗](https://www.springer.com/gp/book/9783030118204)
- [資料科學手冊](https://www.amazon.com/Data-Science-Handbook-Field-Cady/dp/1119092949)
- [自然語言處理精要](https://www.manning.com/books/getting-started-with-natural-language-processing) - 搶先閱讀版
- [大型資料集探勘](https://www.mmds.org/) - 搭配線上課程的免費電子書
- [Pandas 實戰](https://www.manning.com/books/pandas-in-action) - 搶先閱讀版
- [遺傳演算法與遺傳程式設計](https://www.taylorfrancis.com/books/9780429141973)
- [演化演算法的進展](https://www.intechopen.com/books/advances_in_evolutionary_algorithms) - 免費下載
- [遺傳程式設計：新方法與成功應用](https://www.intechopen.com/books/genetic-programming-new-approaches-and-successful-applications) - 免費下載
- [演化演算法](https://www.intechopen.com/books/evolutionary-algorithms) - 免費下載
- [遺傳程式設計進展，第 3 卷](https://www0.cs.ucl.ac.uk/staff/W.Langdon/aigp3/) - 免費下載
- [遺傳演算法與演化計算](https://www.talkorigins.org/faqs/genalg/genalg.html) - 免費下載
- [凸最佳化](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) - Stephen Boyd 撰寫的凸最佳化書籍，免費下載
- [使用 Python 與 PySpark 進行資料分析](https://www.manning.com/books/data-analysis-with-python-and-pyspark) - 搶先閱讀版
- [R 資料科學](https://r4ds.had.co.nz/)
- [在資料科學領域開創職涯](https://www.manning.com/books/build-a-career-in-data-science)
- [機器學習讀書營](https://mlbookcamp.com/) - 搶先閱讀版
- [使用 Scikit-Learn、Keras 與 TensorFlow 實作機器學習，第二版](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)
- [有效的資料科學基礎架構](https://www.manning.com/books/effective-data-science-infrastructure)
- [實用 MLOps：讓模型做好投入正式環境的準備](https://valohai.com/mlops-ebook/)
- [使用 Python 與 PySpark 進行資料分析](https://www.manning.com/books/data-analysis-with-python-and-pyspark)
- [迴歸：淺顯易懂的指南](https://www.manning.com/books/regression-a-friendly-guide) - 搶先閱讀版
- [串流系統：大規模資料處理的定義、位置、時機與方式](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)
- [命令列資料科學：運用經時間考驗的工具迎向未來](https://www.oreilly.com/library/view/data-science-at/9781491947845/)
- [使用 Python 學習機器學習 - Tutorialspoint](https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_tutorial.pdf)
- [深度學習](https://www.deeplearningbook.org/)
- [設計雲端資料平台](https://www.manning.com/books/designing-cloud-data-platforms) - 搶先閱讀版
- [使用 R 應用的統計學習導論](https://www.statlearning.com/)
- [統計學習要素：資料探勘、推論與預測](https://hastie.su.domains/ElemStatLearn/)
- [使用 PyTorch 進行深度學習](https://www.simonandschuster.com/books/Deep-Learning-with-PyTorch/Eli-Stevens/9781617295263)
- [神經網路與深度學習](https://neuralnetworksanddeeplearning.com)
- [深度學習食譜](https://www.oreilly.com/library/view/deep-learning-cookbook/9781491995839/)
- [使用 Python 認識機器學習](https://www.oreilly.com/library/view/introduction-to-machine/9781449369880/)
- [人工智慧：計算代理程式基礎，第二版](https://artint.info/index.html) - 免費 HTML 版本
- [人工智慧探索之旅：理念與成就的歷史](https://ai.stanford.edu/~nilsson/QAI/qai.pdf) - 免費下載
- [資料科學圖形演算法](https://www.manning.com/books/graph-algorithms-for-data-science) - 搶先閱讀版
- [資料網格實戰](https://www.manning.com/books/data-mesh-in-action) - 搶先閱讀版
- [資料分析的 Julia](https://www.manning.com/books/julia-for-data-analysis) - 搶先閱讀版
- [資料科學的因果推論](https://www.manning.com/books/julia-for-data-analysis) - 搶先閱讀版
- [正規表示式謎題與 AI 程式設計助理](https://www.manning.com/books/regular-expression-puzzles-and-ai-coding-assistants)，作者：David Mertz
- [深入淺出深度學習](https://d2l.ai/)
- [人人都能用的資料](https://www.manning.com/books/data-for-all)
- [可解釋的機器學習：讓黑箱模型變得可解釋的指南](https://christophm.github.io/interpretable-ml-book/) - 免費 GitHub 版本
- [資料科學基礎](https://www.cs.cornell.edu/jeh/book.pdf) 免費下載
- [Comet 資料科學：提升資料科學專案生命週期的管理與最佳化能力](https://www.amazon.com/Comet-Data-Science-Enhance-optimize/dp/1801814430)
- [資料科學家的軟體工程](https://www.manning.com/books/software-engineering-for-data-scientists) - 搶先閱讀版
- [資料科學的 Julia](https://www.manning.com/books/julia-for-data-science) - 搶先閱讀版
- [統計學習導論](https://www.statlearning.com/) - 下載頁面
- [絕對初學者的機器學習](https://www.amazon.in/Machine-Learning-Absolute-Beginners-Introduction-ebook/dp/B07335JNW1)
- [整合商業、資料與程式碼：使用 JSON Schema 設計資料產品](https://learning.oreilly.com/library/view/unifying-business-data/9781098144999/)
- [深入淺出貝氏方法](https://www.manning.com/books/grokking-bayes)
- [機器學習問答與 AI](https://sebastianraschka.com/books/ml-q-and-ai)
- [資料科學的 JavaScript](https://third-bit.com/js4ds/) - 免費 HTML 頁面
- [應用資料科學](https://angewandtedatascience.de/) - 德文應用資料科學書籍
- [人工智慧背後的數學](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book)：FreeCodeCamp 免費書籍，以工程觀點用淺白英文講解 AI 背後的數學。
- [高階主管資料科學](https://leanpub.com/eds)：管理資料科學團隊與專案的高階指南。
- [現代統計學導論](https://leanpub.com/imstat)：現代開放取用統計教科書，特別著重資料科學應用。
- [資料科學的藝術](https://bookdown.org/rdpeng/artofdatascience/)：著重資料分析的「藝術」，包括如何提出正確問題並逐步改善問題。

#### 書籍優惠（含推廣連結）

- [電子書特賣 - 電子書最高享 45% 折扣！](https://www.manning.com/?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=ebook_sale_8_8_22)

- [因果機器學習](https://www.manning.com/books/causal-machine-learning?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ness_causal_7_26_22&a_aid=mikrobusiness&a_bid=43a2198b
)
- [管理機器學習專案](https://www.manning.com/books/managing-machine-learning-projects?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_thompson_managing_6_14_22)
- [資料科學的因果推論](https://www.manning.com/books/causal-inference-for-data-science?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ruizdevilla_causal_6_6_22)
- [人人都能用的資料](https://www.manning.com/books/data-for-all?utm_source=mikrobusiness&utm_medium=affiliate)

### 期刊、出版品與雜誌
**[`^        回到頂端        ^`](#awesome-data-science)**

- [ICML](https://icml.cc/2015/) - 國際機器學習會議
- [GECCO](https://gecco-2019.sigevo.org/index.html/HomePage) - 遺傳與演化計算會議（GECCO）
- [epjdatascience](https://epjdatascience.springeropen.com/)
- [資料科學期刊](https://jds-online.org/journal/JDS) - 專門刊載大規模統計方法應用的國際期刊
- [Big Data Research](https://www.journals.elsevier.com/big-data-research)
- [Journal of Big Data](https://journalofbigdata.springeropen.com/)
- [Big Data & Society](https://journals.sagepub.com/home/bds)
- [Data Science Journal](https://www.jstage.jst.go.jp/browse/dsj)
- [datatau.com/news](https://www.datatau.com/news) - 類似 Hacker News，但內容聚焦資料
- [資料科學 Trello 看板](https://trello.com/b/rbpEfMld/data-science)
- [Medium 資料科學主題](https://medium.com/tag/data-science) - Medium 上與資料科學相關的出版品
- [Towards Data Science 遺傳演算法主題](https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3#:~:text=A%20genetic%20algorithm%20is%20a,offspring%20of%20the%20next%20generation.) - Towards Data Science 上與遺傳演算法相關的出版品
- [Maxim AI](https://getmaxim.ai). AI 代理程式模擬、評估與可觀測性工具。
- [8bitconcepts](https://8bitconcepts.com/) - AI 產業研究與分析，提供 AI 定價、企業採用及評估架構相關論文。

### 電子報
**[`^        回到頂端        ^`](#awesome-data-science)**

- [AI Weekly](https://aiweekly.co) - 由產業領袖策劃的 AI 情報簡報，涵蓋模型、募資、政策與應用。自 2017 年起每週發布 3 次，訂閱者超過 4 萬人。
- [DataTalks.Club](https://datatalks.club). 每週寄送資料相關主題的電子報。[封存](https://us19.campaign-archive.com/home/?u=0d7822ab98152f5afc118c176&id=97178021aa)。
- [Analytics Engineering Roundup](https://roundup.getdbt.com/about). 資料科學電子報。[封存](https://roundup.getdbt.com/archive)。
- [Techpresso](https://dupple.com/techpresso). 免費每日電子報，報導 AI、ML 與科技領域最重要的發展。[封存](https://dupple.com/techpresso)。
- [DiamantAI](https://diamantai.substack.com). 以淺白方式說明實用 AI 工程與生成式 AI：為建置者介紹 RAG、代理程式與 LLM 應用模式。
- [Bamboo Weekly](https://www.bambooweekly.com) - 以時事與真實公開資料為題的每週 pandas 練習，附完整解答。兩年以上的期數免費，最新期數的前兩題及解答也免費。[封存](https://www.bambooweekly.com/archive/)。

### 郵寄清單
**[`^        回到頂端        ^`](#awesome-data-science)**
- [工作小組 - 數位人文研究軟體工程](https://www.listserv.dfn.de/sympa/info/ag-dhrse)。這是數位人文研究軟體工程（DH-RSE）工作小組的郵寄清單。

### 部落客
**[`^        回到頂端        ^`](#awesome-data-science)**

- [Wes McKinney](https://wesmckinney.com/archives.html) - Wes McKinney 文章封存。
- [Matthew Russell](https://miningthesocialweb.com/) - 社群網路探勘。
- [Greg Reda](https://www.gregreda.com/) - Greg Reda 個人部落格
- [Julia Evans](https://jvns.ca/) - Recurse Center 校友
- [Hakan Kardas](https://www.cse.unr.edu/~hkardes/) - 個人網頁
- [Sean J. Taylor](https://seanjtaylor.com/) - 個人網頁
- [Drew Conway](https://drewconway.com/) - 個人網頁
- [Hilary Mason](https://hilarymason.com/) - 個人網頁
- [Noah Iliinsky](https://complexdiagrams.com/) - 個人部落格
- [Matt Harrison](https://hairysun.com/) - 個人部落格
- [Vamshi Ambati](https://allthingsds.wordpress.com/) - AllThings Data Science
- [Prash Chan](https://www.mdmgeek.com/) - 主資料管理與相關熱門話題的科技部落格
- [Clare Corthell](https://datasciencemasters.org/) - 開放原始碼資料科學碩士課程
- [Datawrangling](https://www.datawrangling.org) 作者 Peter Skomoroch。機器學習、資料探勘等。
- [Quora 資料科學](https://www.quora.com/topic/Data-Science) - 專家提供的資料科學問答
- [Siah](https://openresearch.wordpress.com/) 柏克萊的博士生
- [Louis Dorard](https://www.ownml.co/blog/) 熱愛網路與各類資料的科技人士
- [Machine Learning Mastery](https://machinelearningmastery.com/) 協助專業程式設計師有信心地運用機器學習演算法解決複雜問題。
- [Daniel Forsyth](https://www.danielforsyth.me/) - 個人部落格
- [Data Science Weekly](https://www.datascienceweekly.org/) - 每週新聞部落格
- [Revolution Analytics](https://blog.revolutionanalytics.com/) - 資料科學部落格
- [R Bloggers](https://www.r-bloggers.com/) - R 部落客
- [The Practical Quant](https://practicalquant.blogspot.com/) 大數據
- [又一個資料部落格](https://yet-another-data-blog.blogspot.com/) 又一個資料部落格
- [KD Nuggets](https://www.kdnuggets.com/) 資料探勘、分析、大數據與資料科學入口網站（並非部落格）
- [Meta Brown](https://www.metabrown.com/blog/) - 個人部落格
- [Data Scientist](https://datascientists.com/) 致力於建立資料科學家文化。
- [WhatSTheBigData](https://whatsthebigdata.com/) 涵蓋前述部分、全部或更多內容，並探討大數據對資訊科技、商業、政府機關及日常生活的影響。
- [Tevfik Kosar](https://magnus-notitia.blogspot.com/) - Magnus Notitia
- [New Data Scientist](https://newdatascientist.blogspot.com/) 社會科學家如何踏入大數據世界
- [Harvard Data Science](https://harvarddatascience.com/) - 統計運算與視覺化隨想
- [資料科學 101](https://ryanswanstrom.com/datascience101/) - 學習成為資料科學家
- [Kaggle 歷屆解答](https://www.chioka.in/kaggle-competition-solutions/)
- [DataScientistJourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [紐約市計程車視覺化部落格](https://chriswhong.github.io/nyctaxi/)
- [Data-Mania](https://www.data-mania.com/)
- [Data-Magnum](https://data-magnum.com/)
- [datascopeanalytics](https://datascopeanalytics.com/blog/)
- [數位轉型](https://tarrysingh.com/)
- [datascientistjourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [Data Mania 部落格](https://www.data-mania.com/blog/) - [The File Drawer](https://chris-said.io/) - Chris Said 的科學部落格
- [Emilio Ferrara 個人網頁](https://www.emilio.ferrara.name/)
- [DataNews](https://datanews.tumblr.com/)
- [Reddit 文字探勘](https://www.reddit.com/r/textdatamining/)
- [Periscopic](https://periscopic.com/#!/news)
- [Hilary Parker](https://hilaryparker.com/)
- [Data Stories](https://datastori.es/)
- [資料科學實驗室](https://datasciencelab.wordpress.com/)
- [Meaning of](https://www.kennybastani.com/)
- [資料之地歷險記](https://blog.smola.org)
- [Dataclysm](https://theblog.okcupid.com/)
- [FlowingData](https://flowingdata.com/) - 視覺化與統計
- [Calculated Risk](https://www.calculatedriskblog.com/)
- [O’Reilly Learning 部落格](https://www.oreilly.com/content/topics/oreilly-learning/)
- [Dominodatalab](https://blog.dominodatalab.com/)
- [i am trask](https://iamtrask.github.io/) - 機器學習實作工藝部落格
- [實用資料科學手冊](https://datasciencevademecum.wordpress.com/) - 以資料驅動的方式解決真實世界問題的手冊與秘訣
- [Dataconomy](https://dataconomy.com/) - 探討新興資料經濟的部落格
- [Springboard](https://www.springboard.com/blog/) - 為資料科學學習者提供資源的部落格
- [Analytics Vidhya](https://www.analyticsvidhya.com/) - 涵蓋資料科學與分析學習教材的完整網站。
- [Occam’s Razor](https://www.kaushik.net/avinash/) - 專注於網路分析。
- [Data School](https://www.dataschool.io/) - 為初學者打造的資料科學教學！
- [Colah 的部落格](https://colah.github.io) - 協助理解神經網路的部落格！
- [Sebastian 的部落格](https://ruder.io/#open) - 專談 NLP 與遷移學習！
- [Distill](https://distill.pub) - 致力於清楚解說機器學習！
- [Chris Albon 個人網站](https://chrisalbon.com/) - 資料科學與 AI 筆記
- [Andrew Carr](https://andrewnc.github.io/blog/blog.html) - 使用冷門程式語言實踐資料科學
- [floydhub](https://blog.floydhub.com/introduction-to-genetic-algorithms/) - 演化演算法部落格
- [Jingles](https://jinglescode.github.io/) - 閱讀學術論文並整理其關鍵概念
- [nbshare](https://www.nbshare.io/notebooks/data-science/) - 資料科學筆記本
- [Loic Tetrel](https://ltetrel.github.io/) - 資料科學部落格
- [Chip Huyen 的部落格](https://huyenchip.com/blog/) - 機器學習工程、MLOps 與新創公司的機器學習應用
- [Maria Khalusova](https://www.mariakhalusova.com/) - 資料科學部落格
- [Aditi Rastogi](https://medium.com/@aditi2507rastogi) - ML、DL 與資料科學部落格
- [Santiago Basulto](https://medium.com/@santiagobasulto) - 使用 Python 實踐資料科學
- [Akhil Soni](https://medium.com/@akhil0435) - ML、DL 與資料科學
- [Akhil Soni](https://akhilworld.hashnode.dev/) - ML、DL 與資料科學
- [Applied AI 部落格](https://www.appliedaicourse.com/blog/) - 深入介紹 AI、機器學習與資料科學概念及實際應用的文章。
- [Scaler 部落格](https://www.scaler.com/blog/) - 軟體開發、AI 與科技職涯成長相關的教育內容。
- [Mlu github](https://mlu-explain.github.io/) - Amazon 為機器學習領域人士開發的 Mlu，透過即時圖表帶你從基礎開始學習。
- [Jan Oliver Rüdiger](https://notesjor.de/) - ML、DL 與資料科學，專注於文字／資料探勘

### 簡報
**[`^        回到頂端        ^`](#awesome-data-science)**

- [如何成為資料科學家](https://www.slideshare.net/ryanorban/how-to-become-a-data-scientist)
- [資料科學導論](https://www.slideshare.net/NikoVuokko/introduction-to-data-science-25391618)
- [企業大數據資料科學入門](https://www.slideshare.net/pacoid/intro-to-data-science-for-enterprise-big-data)
- [如何面試資料科學家](https://www.slideshare.net/dtunkelang/how-to-interview-a-data-scientist)
- [如何與統計學家分享資料](https://github.com/jtleek/datasharing)
- [資料科學成功職涯的奧秘](https://www.slideshare.net/katemats/the-science-of-a-great-career-in-data-science)
- [資料科學家在做什麼？](https://www.slideshare.net/datasciencelondon/big-data-sorry-data-science-what-does-a-data-scientist-do)
- [打造資料新創公司：快速、大膽、專注](https://www.slideshare.net/medriscoll/driscoll-strata-buildingdatastartups25may2011clean)
- [如何運用深度學習贏得資料科學競賽](https://www.slideshare.net/0xdata/how-to-win-data-science-competitions-with-deep-learning)
- [全端資料科學家](https://www.slideshare.net/AlexeyGrigorev/fullstack-data-scientist)

### Podcast
**[`^        回到頂端        ^`](#awesome-data-science)**

- [AI at Home](https://podcasts.apple.com/us/podcast/data-science-at-home/id1069871378)
- [AI Today](https://www.cognilytica.com/aitoday/)
- [Adversarial Learning](https://adversariallearning.com/)
- [Chai time Data Science](https://www.youtube.com/playlist?list=PLLvvXm0q8zUbiNdoIazGzlENMXvZ9bd3x)
- [Chain of Thought](https://www.chainofthought.show/)
- [Data Engineering Podcast](https://www.dataengineeringpodcast.com/)
- [Data Science at Home](https://datascienceathome.com/)
- [Data Science Mixer](https://community.alteryx.com/t5/Data-Science-Mixer/bg-p/mixer)
- [Data Skeptic](https://dataskeptic.com/)
- [Data Stories](https://datastori.es/)
- [Datacast](https://jameskle.com/writes/category/Datacast)
- [DataFramed](https://www.datacamp.com/community/podcast)
- [DataTalks.Club](https://anchor.fm/datatalksclub)
- [Gradient Descent](https://wandb.ai/fully-connected/gradient-descent)
- [Learning Machines 101](https://www.learningmachines101.com/)
- [Let's Data (Brazil)](https://www.youtube.com/playlist?list=PLn_z5E4dh_Lj5eogejMxfOiNX3nOhmhmM)
- [Linear Digressions](https://lineardigressions.com/)
- [Not So Standard Deviations](https://nssdeviations.com/)
- [O'Reilly Data Show Podcast](https://www.oreilly.com/radar/topics/oreilly-data-show-podcast/)
- [Partially Derivative](https://partiallyderivative.com/)
- [Superdatascience](https://www.superdatascience.com/podcast/)
- [The Data Engineering Show](https://www.dataengineeringshow.com/)
- [The Radical AI Podcast](https://www.radicalai.org/)
- [What's The Point](https://fivethirtyeight.com/tag/whats-the-point/)
- [The Analytics Engineering Podcast](https://roundup.getdbt.com/s/the-analytics-engineering-podcast)

### YouTube 影片與頻道
**[`^        回到頂端        ^`](#awesome-data-science)**

- [什麼是機器學習？](https://www.youtube.com/watch?v=WXHM_i-fgGo)
- [Andrew Ng：深度學習、自我監督學習與非監督式特徵學習](https://www.youtube.com/watch?v=n1ViNeWhC24)
- [Data36 - Tomi Mester 的資料科學入門](https://www.youtube.com/c/TomiMesterData36comDataScienceForBeginners)
- [深度學習：從大數據中獲得智慧](https://www.youtube.com/watch?v=czLI3oLDe8M)
- [專訪 Google AI 與深度學習「教父」Geoffrey Hinton](https://www.youtube.com/watch?v=1Wp3IIpssEc)
- [使用 Python 認識深度學習](https://www.youtube.com/watch?v=S75EdAcXHKk)
- [什麼是機器學習？它如何運作？](https://www.youtube.com/watch?v=elojMnjn4kk)
- [CampusX](https://www.youtube.com/@campusx-official)
- [Data School](https://www.youtube.com/channel/UCnVzApLJE2ljPZSeQylSEyg) - 資料科學教育
- [Melanie Warrick 的新手神經網路（2015 年 5 月）](https://www.youtube.com/watch?v=Cu6A96TUy_o)
- [Hugo Larochelle 的神經網路影片系列](https://www.youtube.com/playlist?list=PL6Xpj9I5qXYEcOhn7TqghAJ6NAPrNmUBH)
- [Google DeepMind 共同創辦人 Shane Legg - 機器超智慧](https://www.youtube.com/watch?v=evNCyRL3DOU)
- [資料科學入門](https://www.youtube.com/watch?v=cHzvYxBN9Ls&list=PLPqVjP3T4RIRsjaW07zoGzH-Z4dBACpxY)
- [遺傳演算法資料科學](https://www.youtube.com/watch?v=lpD38NxTOnk)
- [資料科學入門](https://www.youtube.com/playlist?list=PL2zq7klxX5ATMsmyRazei7ZXkP1GHt-vs)
- [DataTalks.Club](https://www.youtube.com/channel/UCDvErgK0j5ur3aLgn6U-LqQ)
- [Mildlyoverfitted - 中階機器學習／深度學習主題教學](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [mlops.community - 訪談業界專家，探討正式環境機器學習](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [ML Street Talk - 技術內容直截了當、不帶商業宣傳，因此不會聽到惱人的推銷。](https://www.youtube.com/c/machinelearningstreettalk)
- [3Blue1Brown 的神經網路](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- [Sentdex 從零開始的神經網路](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3)
- [Manning Publications YouTube channel](https://www.youtube.com/c/ManningPublications/featured)
- [詢問 Dr Chong：如何領導資料科學 - 第 1 部](https://youtu.be/JYuQZii5o58)
- [詢問 Dr Chong：如何領導資料科學 - 第 2 部](https://youtu.be/SzqIXV-O-ko)
- [詢問 Dr Chong：如何領導資料科學 - 第 3 部](https://youtu.be/Ogwm7k_smTA)
- [詢問 Dr Chong：如何領導資料科學 - 第 4 部](https://youtu.be/a9usjdzTxTU)
- [詢問 Dr Chong：如何領導資料科學 - 第 5 部](https://youtu.be/MYdQq-F3Ws0)
- [詢問 Dr Chong：如何領導資料科學 - 第 6 部](https://youtu.be/LOOt4OVC3hY)
- [迴歸模型：套用簡單的 Poisson 迴歸](https://www.youtube.com/watch?v=9Hk8K8jhiOo)
- [深度學習架構](https://www.youtube.com/playlist?list=PLv8Cp2NvcY8DpVcsmOT71kymgMmcr59Mf)
- [時間序列建模與分析](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5cK0QRQxeJd6GrQvhAtpBK)
- [Serrano.Academy](https://www.youtube.com/@SerranoAcademy)
- [端對端資料科學播放清單](https://www.youtube.com/watch?v=S_F_c9e2bz4&list=PLZoTAELRMXVPS-dOaVbAux22vzqdgoGhG)
- [資料科學導論 - LinkedIn](https://www.linkedin.com/learning/introduction-to-data-science-22668235/beginning-your-data-science-exploration?u=42458916)
- [AI Talks](https://aietalks.com/) - 實用 AI 工程演講與會議影片的可搜尋摘要和主題索引。

## 社群交流
**[`^        回到頂端        ^`](#awesome-data-science)**

以下列出一些社群媒體連結，歡迎與其他資料科學家交流！

- [Facebook 帳號](#facebook-accounts)
- [Twitter 帳號](#twitter-accounts)
- [Telegram 頻道](#telegram-channels)
- [Slack 社群](#slack-communities)
- [GitHub 群組](#github-groups)
- [資料科學競賽](#data-science-competitions)


### Facebook 帳號
**[`^        回到頂端        ^`](#awesome-data-science)**

- [Data](https://www.facebook.com/data)
- [大數據科學家](https://www.facebook.com/Bigdatascientist)
- [資料科學日](https://www.facebook.com/datascienceday/)
- [資料科學學院](https://www.facebook.com/nycdatascience)
- [Facebook 資料科學專頁](https://www.facebook.com/pages/Data-science/431299473579193?ref=br_rs)
- [倫敦資料科學](https://www.facebook.com/pages/Data-Science-London/226174337471513)
- [資料科學技術與企業](https://www.facebook.com/DataScienceTechnologyCorporation?ref=br_rs)
- [資料科學 - 私密社團](https://www.facebook.com/groups/1394010454157077/?ref=br_rs)
- [資料科學中心](https://www.facebook.com/centerdatasciences?ref=br_rs)
- [大數據、Hadoop、NoSQL、Hive、HBase](https://www.facebook.com/groups/bigdatahadoop/)
- [分析、資料探勘、預測建模、人工智慧](https://www.facebook.com/groups/data.analytics/)
- [使用 R 進行大數據分析](https://www.facebook.com/groups/434352233255448/)
- [使用 R 與 Hadoop 進行大數據分析](https://www.facebook.com/groups/rhadoop/)
- [大數據學習資源](https://www.facebook.com/groups/bigdatalearnings/)
- [大數據、資料科學、資料探勘與統計](https://www.facebook.com/groups/bigdatastatistics/)
- [大數據／Hadoop 專家](https://www.facebook.com/groups/BigDataExpert/)
- [資料探勘／機器學習／AI](https://www.facebook.com/groups/machinelearningforum/)
- [資料探勘／大數據 - 社群網路分析](https://www.facebook.com/groups/dataminingsocialnetworks/)
- [實用資料科學手冊](https://www.facebook.com/datasciencevademecum)
- [伊斯坦堡資料科學](https://www.facebook.com/groups/veribilimiistanbul/)
- [資料科學部落格](https://www.facebook.com/theDataScienceBlog/)


### Twitter 帳號
**[`^        回到頂端        ^`](#awesome-data-science)**

| Twitter | 說明 |
| --- | --- |
| [Big Data Combine](https://twitter.com/BigDataCombine) | 為資料科學家提供快速、即時的試用機會，協助將模型變現為交易策略 |
| Big Data Mania | 資料視覺化高手、資料記者、成長駭客，《Data Science for Dummies》作者（2015） |
| [Big Data Science](https://twitter.com/analyticbridge) | 大數據、資料科學、預測建模、商業分析、Hadoop、決策與作業研究。 |
| Charlie Greenbacker | @ExploreAltamira 資料科學總監 |
| [Chris Said](https://twitter.com/Chris_Said) | Twitter 資料科學家 |
| [Clare Corthell](https://twitter.com/clarecorthell) | @mattermark 的開發、設計與資料科學工作者 #hackerei |
| [DADI Charles-Abner](https://twitter.com/DadiCharles) | @Ekimetrics 的 #資料科學家。#機器學習 #資料視覺化 #動態圖表 #Hadoop #R #Python #NLP #Bitcoin #資料愛好者 |
| [Data Science Central](https://twitter.com/DataScienceCtrl) | 業界大數據從業者的一站式資源。 |
| [Data Science London](https://twitter.com/ds_ldn)  | 資料科學、大數據、資料駭客、資料迷、資料新創、開放資料 |
| [Data Science Renee](https://twitter.com/BecomingDataSci) | 記錄自己從 SQL 資料分析師轉行、攻讀工程碩士並成為資料科學家的歷程 |
| [Data Science Report](https://twitter.com/TedOBrien93) | 致力於引導並推動資料科學與分析領域的職涯發展 |
| [Data Science Tips](https://twitter.com/datasciencetips) | 為世界各地資料科學家提供秘訣與技巧！#資料科學 #大數據 |
| [Data Vizzard](https://twitter.com/DataVisualizati) | 資料視覺化、資安、軍事 |
| [DataScienceX](https://twitter.com/DataScienceX) |  |
| deeplearning4j | |
| [DJ Patil](https://twitter.com/dpatil) | 白宮資料長、@RelateIQ 副總裁。 |
| [Domino Data Lab](https://twitter.com/DominoDataLab) | |
| [Drew Conway](https://twitter.com/drewconway) | 資料迷、駭客、衝突研究者。 |
| Emilio Ferrara | #網路、#機器學習與#資料科學，研究#社群媒體。@IndianaUniv 博士後研究員 |
| [Erin Bartolo](https://twitter.com/erinbartolo) | 投入#大數據領域，享受與其炒作之間愛恨交織的關係。@iSchoolSU #資料科學計畫經理 |
| [Greg Reda](https://twitter.com/gjreda)  | 在 _GrubHub_ 從事資料與 pandas 相關工作 |
| [Gregory Piatetsky](https://twitter.com/kdnuggets) | KDnuggets 總裁、分析／大數據／資料探勘／資料科學專家、KDD 與 SIGKDD 共同創辦人、兩家新創公司的前首席科學家、兼職哲學家。 |
| [Hadley Wickham](https://twitter.com/hadleywickham) | RStudio 首席科學家，並兼任奧克蘭大學、史丹佛大學與萊斯大學統計學教授。 |
| [Hakan Kardas](https://twitter.com/hakan_kardes) | 資料科學家 |
| [Hilary Mason](https://twitter.com/hmason) | @accel 駐點資料科學家。 |
| [Jeff Hammerbacher](https://twitter.com/hackingdata)  | 轉推資料科學相關內容 |
| [John Myles White](https://twitter.com/johnmyleswhite)  | Facebook 科學家與 Julia 開發者。《Machine Learning for Hackers》及《Bandit Algorithms for Website Optimization》作者。推文僅代表個人觀點。 |
| [Juan Miguel Lavista](https://twitter.com/BDataScientist) | Microsoft 資料科學團隊首席資料科學家 |
| [Julia Evans](https://twitter.com/b0rk) | 駭客、Pandas、資料分析 |
| [Kenneth Cukier](https://twitter.com/kncukier) | 《經濟學人》資料編輯，也是《Big Data》共同作者 (https://www.big-data-book.com/). |
| Kevin Davenport | https://www.meetup.com/San-Diego-Data-Science-R-Users-Group/ 的主辦人 |
| [Kevin Markham](https://twitter.com/justmarkham) | 資料科學講師，也是 [Data School](https://www.dataschool.io/) 創辦人 |
| [Kim Rees](https://twitter.com/krees) | 互動式資料視覺化與工具。資料漫遊者。 |
| [Kirk Borne](https://twitter.com/KirkDBorne) | 資料科學家、天文物理學博士、頂尖#大數據影響者。 |
| Linda Regber | 資料說故事者、視覺化工作者。 |
| [Luis Rei](https://twitter.com/lmrei) | 博士生。程式設計、行動、網頁、人工智慧、智慧機器人、機器學習、資料探勘、自然語言處理與資料科學。 |
| Mark Stevenson | Salt（@SaltJobs）資料分析招募專家。分析、洞見、大數據、資料科學 |
| [Matt Harrison](https://twitter.com/__mharrison__) | 全端 Python 工程師、作者、講師的個人觀點，目前也從事資料科學。偶爾聊育兒、家庭生活與有機園藝。 |
| [Matthew Russell](https://twitter.com/ptwobrussell) | 社群網路探勘。 |
| [Mert Nuhoğlu](https://twitter.com/mertnuhoglu) | BizQualify 資料科學家、開發者 |
| [Monica Rogati](https://twitter.com/mrogati) | Jawbone 資料工作者。曾在 LinkedIn 將資料轉化為故事與產品。文字探勘、應用機器學習、推薦系統。前遊戲玩家、前機器程式設計師；命名者。 |
| [Noah Iliinsky](https://twitter.com/noahi) | 視覺化與互動設計師、實用自行車騎士。視覺化書籍作者：https://www.oreilly.com/pub/au/4419 |
| [Paul Miller](https://twitter.com/PaulMiller) | 雲端運算／大數據／開放資料分析師與顧問。作家、講者與主持人。Gigaom Research 分析師。 |
| [Peter Skomoroch](https://twitter.com/peteskomoroch) | 建立智慧系統以自動化工作並改善決策。創業家，前 LinkedIn 首席資料科學家。機器學習、產品、網路 |
| [Prash Chan](https://twitter.com/MDMGeek) | IBM 解決方案架構師、主資料管理、資料品質與資料治理部落客。資料科學、Hadoop、大數據與雲端。 |
| [Quora 資料科學](https://twitter.com/q_datascience) | Quora 的資料科學主題 |
| [R-Bloggers](https://twitter.com/Rbloggers) | 推文分享 R 部落圈文章、資料科學會議，以及資料科學家的公開職缺。 |
| [Rand Hindi](https://twitter.com/randhindi) |  |
| [Randy Olson](https://twitter.com/randal_olson) | 研究人工智慧的電腦科學家、資料 tinkerer、@DataIsBeautiful 社群領袖。#開放科學倡議者。 |
| [Recep Erol](https://twitter.com/EROLRecep) | UALR 資料科學迷 |
| [Ryan Orban](https://twitter.com/ryanorban) | 資料科學家、遺傳摺紙愛好者、硬體迷 |
| [Sean J. Taylor](https://twitter.com/seanjtaylor) | 社會科學家、駭客、Facebook 資料科學團隊成員。關鍵詞：實驗、因果推論、統計、機器學習、經濟學。 |
| [Silvia K. Spiva](https://twitter.com/silviakspiva) | Cisco #資料科學 |
| [Harsh B. Gupta](https://twitter.com/harshbg) | BBVA Compass 資料科學家 |
| [Spencer Nelson](https://twitter.com/spenczar_n) | 資料迷 |
| [Talha Oz](https://twitter.com/tozCSS) | 熱愛 ABM、SNA、DM、ML、NLP、HI、Python 與 Java。Kaggle／資料科學家中的頂尖百分位 |
| [Tasos Skarlatidis](https://twitter.com/anskarl) | 複雜事件處理、大數據、人工智慧與機器學習。熱愛程式設計與開源。 |
| [Terry Timko](https://twitter.com/Terry_Timko) | 資訊治理、大數據、資料即服務、資料科學、開放／社群／商業資料融合 |
| [Tony Baer](https://twitter.com/TonyBaer) | Ovum IT 分析師，負責大數據與資料管理，也涉及一些系統工程。 |
| [Tony Ojeda](https://twitter.com/tonyojeda3) | 資料科學家、作者、創業家。@DataCommunityDC 共同創辦人。@DistrictDataLab 創辦人。#資料科學 #大數據 #DataDC |
| [Vamshi Ambati](https://twitter.com/vambati) | PayPal 資料科學。#NLP、#機器學習；博士，卡內基美隆大學校友（部落格：https://allthingsds.wordpress.com ) |
| [Wes McKinney](https://twitter.com/wesmckinn) | Pandas（Python 資料分析函式庫）。 |
| [WileyEd](https://twitter.com/WileyEd) | @Seagate 資深經理、大數據分析、前 McKinsey 顧問。#大數據與#分析推廣者，熱愛#Hadoop、#雲端、#數位與#R |
| [WNYC 資料新聞團隊](https://twitter.com/datanews) | @WNYC 資料新聞團隊。實踐資料驅動新聞、以視覺方式呈現並公開工作方法。 |
| [Alexey Grigorev](https://twitter.com/Al_Grigor) | 資料科學作者 |
| [İlker Arslan](https://twitter.com/ilkerarslan_35) | 資料科學作者，主要分享 Julia 程式設計內容 |
| [INEVITABLE](https://twitter.com/WeAreInevitable) | 位於英國的 AI 與資料科學新創公司 |
| [Jan Oliver Rüdiger](https://x.com/notesJOR) | ML、DL 與資料科學，專注於文字／資料探勘 |

### Telegram 頻道
**[`^        回到頂端        ^`](#awesome-data-science)**

- [Open Data Science](https://t.me/opendatascience) – 第一個資料科學 Telegram 頻道。涵蓋資料科學相關的各類技術與熱門內容：AI、大數據、機器學習、統計、數學及其應用。
- [Loss function porn](https://t.me/loss_function_porn) — 分享資料科學／機器學習主題的精美貼文，附影片或圖形視覺化。
- [Machinelearning](https://t.me/ai_machinelearning_big_data) – 每日機器學習新聞。


### Slack 社群
[頂端](#awesome-data-science)

- [DataTalks.Club](https://datatalks.club)

### GitHub 群組
- [柏克萊資料科學研究院](https://github.com/BIDS)

### 資料科學競賽

一些資料探勘競賽平台

- [Kaggle](https://www.kaggle.com/)
- [DrivenData](https://www.drivendata.org/)
- [Analytics Vidhya](https://datahack.analyticsvidhya.com/)
- [InnoCentive](https://www.innocentive.com/)
- [Microprediction](https://www.microprediction.com/python-1)

## 趣味內容

- [資訊圖表](#infographics)
- [資料集](#datasets)
- [漫畫](#comics)


### 資訊圖表
**[`^        回到頂端        ^`](#awesome-data-science)**

| 預覽 | 說明 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<img src="https://i.imgur.com/0OoLaa5.png" width="150" />](https://i.imgur.com/0OoLaa5.png) | [資料科學家與資料工程師的主要差異](https://searchbusinessanalytics.techtarget.com/feature/Key-differences-of-a-data-scientist-vs-data-engineer) |
| [<img src="https://cloud.githubusercontent.com/assets/182906/19517857/604f88d8-960c-11e6-97d6-16c9738cb824.png" width="150" />](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png) | DataCamp 提供的[八步驟成為資料科學家視覺指南](https://www.datacamp.com) [(圖片)](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png) |
| [<img src="https://i.imgur.com/W2t2Roz.png" width="150" />](https://i.imgur.com/FxsL3b8.png) | 所需技能心智圖 ([圖片](https://i.imgur.com/FxsL3b8.png)) |
| [<img src="https://i.imgur.com/rb9ruaa.png" width="150" />](https://nirvacana.com/thoughts/wp-content/uploads/2013/07/RoadToDataScientist1.png) | Swami Chandrasekaran 透過[地鐵路線圖呈現課程規劃](https://nirvacana.com/thoughts/2013/07/08/becoming-a-data-scientist/)。 |
| [<img src="https://i.imgur.com/XBgKF2l.png" width="150" />](https://i.imgur.com/4ZBBvb0.png) | 作者：[@kzawadz](https://twitter.com/kzawadz)，來源：[twitter](https://twitter.com/MktngDistillery/status/538671811991715840) |
| [<img src="https://i.imgur.com/l9ZGtal.jpg" width="150" />](https://i.imgur.com/xLY3XZn.jpg) | 由 [Data Science Central](https://www.datasciencecentral.com/) 提供 |
| [<img src="https://i.imgur.com/TWkB4X6.png" width="150" />](https://i.imgur.com/0TydZ4M.png) | 資料科學之戰：R 與 Python |
| [<img src="https://i.imgur.com/gtTlW5I.png" width="150" />](https://i.imgur.com/HnRwlce.png) | 如何選擇統計或機器學習技術 |
| [<img src="https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg" width="150" />](https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg) | [選擇合適的估計器](https://scikit-learn.org/1.5/machine_learning_map.html#choosing-the-right-estimator) |
| [<img src="https://i.imgur.com/3JSyUq1.png" width="150" />](https://i.imgur.com/uEqMwZa.png) | 資料科學產業：誰負責什麼 |
| [<img src="https://i.imgur.com/DQqFwwy.png" width="150" />](https://i.imgur.com/RsHqY84.png) | 資料科學 ~~文氏~~ 歐拉圖 |
| [<img src="https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png" width="150" height="150" />](https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png) | [Springboard](https://www.springboard.com) 提供的不同資料科學技能與職務 |
| [<img src="https://data-literacy.geckoboard.com/assets/img/data-fallacies-to-avoid-preview.jpg" width="150" alt="應避免的資料謬誤" />](https://data-literacy.geckoboard.com/poster/) | 以簡單友善的方式教導非資料科學家／非統計學家的同事[如何避免資料分析錯誤](https://data-literacy.geckoboard.com/poster/)。內容來自 Geckoboard 的[資料素養課程](https://data-literacy.geckoboard.com/)。 |

### 資料集
**[`^        回到頂端        ^`](#awesome-data-science)**

- [Academic Torrents](https://academictorrents.com/)
- [ADS-B Exchange](https://www.adsbexchange.com/data-samples/) - 飛機與自動相依監視廣播（ADS-B）來源的特定資料集。
- [中國茶資料集](https://chinatea.house/dataset/) - 精選的開放資料集，收錄 100 多種中國茶的類別、產地、咖啡因含量、風味、氧化程度與沖泡參數。提供 JSON 與 CSV 格式。
- [大學投資報酬率資料集](https://github.com/thomasthinks/college-roi-data) - 根據 FREOPP、IPEDS 與 BEA 區域價格資料，估算美國 1,775 所院校約 3 萬個學士學程的終身投資報酬率。提供 5 個 CSV 檔、資料字典、CC BY 4.0 授權與 Zenodo DOI。
- [AI 取代人力追蹤器](https://github.com/noahaust2/ai-displacement-tracker) - 結構化資料集，追蹤 12 個國家、11 個產業中 92 起歸因於 AI 的人力縮減事件，共影響 453,748 名員工。提供 JSON 與 CSV 格式，採 CC-BY-4.0 授權。
- [Packrift 包裝最佳化基準語料庫](https://packrift.github.io/packaging-optimization-benchmark-corpus/) - 以 1,000 筆精確規格 SKU 記錄產生的公開包裝產品資料集，提供可下載的 CSV 與 JSON 檔，供電子商務出貨與倉儲分析使用。
- [寶可夢卡牌置中度測量](https://github.com/rrh1441/pokemon-card-centering-measurements) - 針對 302 張真實 eBay 上架寶可夢卡牌，提供 320 筆 PSA 樣式置中度標註（左右與上下邊框百分比、傾斜度）。CSV 格式、CC BY 4.0 授權、Zenodo DOI。
- [寶可夢卡牌依評級整理的成交價格參考](https://github.com/rrh1441/pokemon-card-sold-price-reference) - 486 張寶可夢卡牌依評級（原卡、PSA 9、PSA 10）整理的成交中位價，每張卡均附樣本數與信賴標記。CSV 格式、CC BY 4.0 授權、Zenodo DOI。
- [Evidaxis 動能快照](https://evidaxis.org) - 每週整理開源與研究原生 AI 系統的公開開發及引文活動，採用內容定址，可由公開輸入資料以位元級重現。每個快照日期提供 JSON 與 CSV，採 CC0 授權，DOI：10.5281/zenodo.21076011。
- [hadoopilluminated.com](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [data.gov](https://catalog.data.gov/dataset) - 美國政府開放資料入口網站
- [United States Census Bureau](https://www.census.gov/)
- [enigma.com](https://enigma.com/) - 探索公共資料世界，快速搜尋並分析政府、企業與組織發布的數十億筆公共紀錄。
- [datahub.io](https://datahub.io/)
- [aws.amazon.com/datasets](https://aws.amazon.com/datasets/)
- [datacite.org](https://datacite.org/)
- [歐洲官方資料入口網站](https://data.europa.eu/en)
- [NASDAQ:DATA](https://data.nasdaq.com/) - Nasdaq Data Link 是一流的金融、經濟與另類資料集來源。
- [國會股票交易分析](https://congressionalstockbrain.com) - 免費 AI 工具，依重要性為美國國會 STOCK Act 交易揭露評分。從 537 位國會議員的公開交易申報中產生機器評分訊號。
- [figshare.com](https://figshare.com/)
- [GeoLite Legacy Downloadable Databases](https://dev.maxmind.com/geoip)
- [Hugging Face Datasets](https://huggingface.co/datasets)
- [日本鄰里資料](https://japanneighborhoods.com) - 英文資料集，收錄 5,078 個東京鄰里、跨 7 年的犯罪統計（共 36,222 筆，2018–2024），來源為東京都警察公開資料。包含互動犯罪地圖、安全評級與生活成本指數。採 CC BY 授權。
- [Quiet-Broke 指數](https://jeevesagency.github.io/quiet-broke-index/) - 涵蓋 30 個都會區的綜合排名，呈現 40 萬美元家庭收入中有多少用於住房、稅金、托育、醫療與交通。方法公開、免費使用，無須提供電子郵件。
- [巴西犯罪資料](https://crimebrasil.com.br) - 巴西犯罪統計開放資料平台。提供南里奧格蘭德州鄰里層級資料（2022–2025 年，79,024 個鄰里共 299 萬起事件）、米納斯吉拉斯州與里約熱內盧州的市級資料，以及全國 PRF 公路和 DATASUS 人際暴力資料。免費 REST API，提供 CSV／Parquet，每日更新，採 CC BY 4.0 授權。
- [美國卡車涉入致命車禍（FARS），2018–2024](https://doi.org/10.5281/zenodo.20487070) - 篩選自 NHTSA 致命車禍分析報告系統的資料，涵蓋 2018–2024 年美國 50 州中涉及中型與大型商用卡車的 33,898 起致命車禍。包含比較 19 個城市的互動式[願景零事故成績報告](https://accidentlawyerreview.com/research/vision-zero-report-card/)、可重現的 [GitHub](https://github.com/MarvinBregiosa/vision-zero-fars) Python 管線，以及 HuggingFace 鏡像。永久 DOI，採 CC BY 4.0 授權。
- [2026 年胜肽概況](https://peptahub.com/state-of-peptides-2026) - 結構化參考資料集，收錄 156 種胜肽及相關化合物，逐項提供法規狀態類別、分類、途徑、半衰期、分子量、CAS 編號、參考資料數，以及 PubChem／DrugBank／Wikidata ID。提供 CSV 與 JSON，無須登入，採 CC BY 4.0 授權。
- [Quora 大型資料集問答](https://www.quora.com/Where-can-I-find-large-datasets-open-to-the-public)
- [公開大數據集](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [Kaggle 資料集](https://www.kaggle.com/datasets)
- [人類基因變異深度目錄](https://www.internationalgenome.org/data)
- [由社群整理的知名人物、地點與事物資料庫](https://developers.google.com/freebase/)
- [Google 公開資料](https://www.google.com/publicdata/directory)
- [世界銀行資料](https://data.worldbank.org/)
- [紐約市計程車資料](https://chriswhong.github.io/nyctaxi/)
- [Open Data Philly](https://www.opendataphilly.org/) 連結大眾與費城資料
- [grouplens.org](https://grouplens.org/datasets/) 電影（含評分）、書籍與維基資料集範例
- [加州大學爾灣分校機器學習資料庫](https://archive.ics.uci.edu/ml/) - 收錄適合機器學習的資料集
- [高品質研究資料集](https://web.archive.org/web/20150320022752/https://bitly.com/bundles/hmason/1)，作者：[Hilary Mason](https://web.archive.org/web/20150501033715/https://bitly.com/u/hmason/bundles)
- [National Centers for Environmental Information](https://www.ncei.noaa.gov/)
- [ClimateData.us](https://www.climatedata.us/)（相關資源：[美國氣候韌性工具包](https://toolkit.climate.gov/)）
- [r/datasets](https://www.reddit.com/r/datasets/)
- [MapLight](https://www.maplight.org/data-series) - 免費提供各種資料供大眾公開使用。點選下方資料集即可深入了解。
- [GHDx](https://ghdx.healthdata.org/) - 健康指標與評估研究院全球健康及人口資料集目錄，亦收錄 IHME 研究成果
- [聖路易聯邦準備銀行經濟資料 - FRED](https://fred.stlouisfed.org/)
- [紐西蘭經濟研究院 - Data1850](https://data1850.nz/)
- [開放資料來源](https://github.com/datasciencemasters/data)
- [UNICEF Data](https://data.unicef.org/)
- [undata](https://data.un.org/)
- [NASA 社會經濟資料與應用中心 - SEDAC](https://earthdata.nasa.gov/centers/sedac-daac)
- [The GDELT Project](https://www.gdeltproject.org/)
- [Sweden, Statistics](https://www.scb.se/en/)
- [StackExchange 資料探索器](https://data.stackexchange.com) - 開源工具，可對 Stack Exchange 網路中的公開資料執行任意查詢。
- [舊金山政府開放資料](https://datasf.org/opendata/)
- [IBM 資產資料集](https://developer.ibm.com/exchanges/data/)
- [開放資料索引](https://index.okfn.org/)
- [Public Git Archive](https://github.com/src-d/datasets/tree/master/PublicGitArchive)
- [GHTorrent](https://ghtorrent.org/)
- [Microsoft Research Open Data](https://msropendata.com/)
- [印度開放政府資料平台](https://data.gov.in/)
- [Google 資料集搜尋（測試版）](https://datasetsearch.research.google.com/)
- [NAYN.CO 分類土耳其新聞](https://github.com/naynco/nayn.data)
- [Covid-19](https://github.com/datasets/covid-19)
- [Google Covid-19](https://github.com/google-research/open-covid-19-data)
- [Enron 電子郵件資料集](https://www.cs.cmu.edu/~./enron/)
- [5,000 張服裝圖像](https://github.com/alexeygrigorev/clothing-dataset)
- [IBB Open Portal](https://data.ibb.gov.tr/en/)
- [人道主義資料交換平台](https://data.humdata.org/)
- [超過 25 萬筆職缺](https://aws.amazon.com/marketplace/pp/prodview-p2554p3tczbes) - 不斷擴充的盧森堡歷史職缺資料集，涵蓋 2020 年至今。透過 AWS Data Exchange 免費提供 25 萬多筆職缺。
- [FinancialData.Net](https://financialdata.net/documentation) - 金融資料集（股票市場資料、財務報表、永續發展資料等）。
- [HDD 價格指數](https://github.com/AdamDudley/hddhunt-price-index) - 每日更新的開放資料集，追蹤 Amazon 美國站依容量級別計算的最低價全新內接 3.5 吋 SATA 硬碟每 TB 價格（美元／TB），並提供歷史時間序列。提供 CSV、JSON 與 JSONL，無須登入，採 CC BY 4.0 授權。
- [BDE 評分](https://github.com/hbhqq9/bde-score) - AI 驅動的多市場股票分析，針對 73 檔美國／香港／A 股股票提供透明 BDE 評分。符合《歐盟 AI 法案》第 50 條。採 MIT 授權。
- [Google 資料集搜尋](https://datasetsearch.research.google.com/) – 搜尋網路上的資料集。
- [notesjor 語料集](https://notes.jan-oliver-ruediger.de/korpora/) - 免費語料庫，超過 60 億個詞元，主要為歷史與當代德文資料。
- [CLARIN 儲存庫](https://lindat.mff.cuni.cz/repository/home) - CLARIN 是歐洲科學資料集儲存庫。
- [GBIF](https://www.gbif.org/) - 全球生物多樣性資訊機構：超過 24 億筆物種出現紀錄。提供免費開放 API，適用於生態模型與機器學習研究。
- [FAOSTAT](https://www.fao.org/faostat/en/) - 聯合國糧農組織提供 245 個以上國家的糧食生產、貿易、土地使用與排放統計。提供免費 API 與批次下載。
- [Movebank](https://www.movebank.org/) - 免費平台，典藏超過 60 億筆來自 GPS 與衛星遙測的動物移動紀錄。提供開放 REST API，適用於時空建模與軌跡機器學習。
- [生命百科全書](https://eol.org/) - 提供超過 190 萬個物種的開放結構化資料，包括特徵、分類與媒體。提供免費 API 與批次下載，適用於生物多樣性及物種分類任務。
- [FirstData](https://github.com/MLT-OSS/FirstData) - 全球最完整且具權威性的資料來源知識庫。精選 210 多個政府、國際組織與研究機構來源。支援 AI 代理程式 MCP 整合。採 MIT 授權。
- [latamdata-py](https://github.com/juanmoisesd/latamdata-py) - Python 套件，只需一行程式碼即可存取 38 個拉丁美洲開放研究資料集（健康、神經科學、心理健康、經濟）。可使用 pip install latamdata-py 安裝。
- [ZipCheckup](https://github.com/artakulov/us-water-quality-data) - 免費提供美國 42,000 多個郵遞區號的環境安全資料：水質、空氣品質、PFAS 污染、氡、鉛、洪水風險及另外 11 個面向。提供公開 REST API、npm／PyPI 套件，採 CC BY 4.0 授權。
- [Helium](https://heliumtrades.com/mcp-page/) - 即時新聞語料庫，涵蓋 15 個以上面向的結構化偏誤特徵（超過 320 萬篇文章、5,000 多個來源）；即時金融市場資料（股票、ETF、加密貨幣）與 AI 產生的分析；含機率指標和完整 Greeks 的 ML 選擇權定價，以及供量化研究使用的歷史選擇權鏈資料。可透過 MCP 伺服器或 REST API 使用。
- [已驗證的補充品證據](https://github.com/erinheit451/verified-supplement-evidence) - 依證據等級整理的膳食補充品資料集，涵蓋劑量、不同形式的生物可用率、藥物與營養素交互作用、NHANES 缺乏症盛行率、FDA FAERS 不良事件訊號，以及每有效劑量成本；每項臨床主張均附 PubMed PMID 引文。採 CC BY 4.0 授權，DOI：10.57967/hf/9356。
- [美國醫療服務提供者產業付款](https://github.com/npiwho/us-provider-payments) - 將 165 萬名美國醫療服務提供者的 NPI，連結至 CMS Open Payments（2019–2025）申報的藥品與醫材公司付款資料：總額、付款筆數、最大付款方與付款類型，並依州及專科彙整。提供 Gzip CSV，無須登入，採 CC0 授權，Zenodo DOI：10.5281/zenodo.23098004。
- [WhatFontIs-Bench](https://github.com/whatfontis/WhatFontIs-Bench) - 字型家族辨識合成基準資料集，含 600 種已知字型中 11,995 張文字圖像，並標註文字與逐字方框。
- [美國關稅資料](https://github.com/checkdutyrates/us-tariff-data) - 美國協調關稅表（約 30,000 行稅率）、依國家列示的第 99 章額外關稅（第 301、232 條等），以及依 HS 子目與原產地列示的歐盟進口關稅；每次 HTS 修訂時更新。提供 CSV 與 JSON，無須登入；美國資料採 CC0，歐盟資料採 OGL v3，Zenodo DOI：10.5281/zenodo.23093989。


### 漫畫
**[`^        回到頂端        ^`](#awesome-data-science)**

- [漫畫彙編](https://medium.com/@nikhil_garg/a-compilation-of-comics-explaining-statistics-data-science-and-machine-learning-eeefbae91277)
- [卡通](https://www.kdnuggets.com/websites/cartoons.html)
- [資料科學漫畫](https://www.cartoonstock.com/directory/d/data_science.asp)
- [資料科學：XKCD 版](https://davidlindelof.com/data-science-the-xkcd-edition/)

## 其他 Awesome 清單

- 其他精彩的 Awesome 清單可見 [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
- [Awesome 機器學習](https://github.com/josephmisiti/awesome-machine-learning)
- [lists](https://github.com/jnv/lists)
- [awesome-dataviz](https://github.com/javierluraschi/awesome-dataviz)
- [awesome-python](https://github.com/vinta/awesome-python)
- [Data Science IPython Notebooks.](https://github.com/donnemartin/data-science-ipython-notebooks)
- [awesome-r](https://github.com/qinwf/awesome-R)
- [awesome-datasets](https://github.com/awesomedata/awesome-public-datasets)
- [Awesome 機器學習與深度學習教學](https://github.com/ujjwalkarn/Machine-Learning-Tutorials/blob/master/README.md)
- [Awesome 資料科學點子](https://github.com/JosPolfliet/awesome-ai-usecases)
- [軟體工程師的機器學習](https://github.com/ZuzooVn/machine-learning-for-software-engineers)
- [社群精選資料科學資源](https://hackr.io/tutorials/learn-data-science)
- [原始碼機器學習 Awesome 清單](https://github.com/src-d/awesome-machine-learning-on-source-code)
- [Awesome 社群偵測](https://github.com/benedekrozemberczki/awesome-community-detection)
- [Awesome 圖形分類](https://github.com/benedekrozemberczki/awesome-graph-classification)
- [Awesome 決策樹論文](https://github.com/benedekrozemberczki/awesome-decision-tree-papers)
- [Awesome 詐欺偵測論文](https://github.com/benedekrozemberczki/awesome-fraud-detection-papers)
- [Awesome 梯度提升論文](https://github.com/benedekrozemberczki/awesome-gradient-boosting-papers)
- [Awesome 電腦視覺模型](https://github.com/nerox8664/awesome-computer-vision-models)
- [Awesome 蒙地卡羅樹搜尋](https://github.com/benedekrozemberczki/awesome-monte-carlo-tree-search-papers)
- [常見統計與機器學習術語詞彙表](https://www.analyticsvidhya.com/glossary-of-common-statistics-and-machine-learning-terms/)
- [100 NLP Papers](https://github.com/mhagiwara/100-nlp-papers)
- [Awesome Game Datasets](https://github.com/leomaurodesenv/game-datasets#readme)
- [ML／AI 面試準備](https://github.com/aasimansari1/ml-interview-prep) - 500 多題 ML／AI 面試問答，附可執行程式碼，涵蓋 ML 基礎、深度學習、NLP、PyTorch、scikit-learn 管線與系統設計
- [資料科學面試問題](https://github.com/alexeygrigorev/data-science-interviews)
- [Awesome 可解釋圖形推理](https://github.com/AstraZeneca/awesome-explainable-graph-reasoning)
- [熱門資料科學面試問題](https://www.interviewbit.com/data-science-interview-questions/)
- [Awesome 藥物協同作用、交互作用與多重用藥預測](https://github.com/AstraZeneca/awesome-drug-pair-scoring)
- [深度學習面試問題](https://www.adaface.com/blog/deep-learning-interview-questions/)
- [2023 年資料科學未來趨勢](https://medium.com/the-modern-scientist/top-future-trends-in-data-science-in-2023-3e616c8998b8)
- [生成式 AI 如何改變創意工作](https://hbr.org/2022/11/how-generative-ai-is-changing-creative-work)
- [什麼是生成式 AI？](https://www.techtarget.com/searchenterpriseai/definition/generative-AI)
- [100 多道機器學習面試問題（初階至進階）](https://www.appliedaicourse.com/blog/machine-learning-interview-questions/)
- [資料科學專案](https://github.com/veb-101/Data-Science-Projects)
- [資料科學是好的職涯選擇嗎？](https://www.scaler.com/blog/is-data-science-a-good-career/)
- [資料科學的未來：預測與趨勢](https://www.appliedaicourse.com/blog/future-of-data-science/)
- [資料科學與機器學習：有何不同？](https://www.appliedaicourse.com/blog/data-science-and-machine-learning-whats-the-difference/)
- [資料科學中的 AI：用途、角色與工具](https://www.scaler.com/blog/ai-in-data-science/)
- [13 種頂尖資料科學程式語言](https://www.appliedaicourse.com/blog/data-science-programming-languages/)
- [40 多個資料分析專案點子](https://www.appliedaicourse.com/blog/data-analytics-projects-ideas/)
- [附證書的最佳資料科學課程](https://www.appliedaicourse.com/blog/best-data-science-courses/)
- [生成式 AI 模型](https://www.appliedaicourse.com/blog/generative-ai-models/)
- [Awesome 資料分析](https://github.com/PavelGrigoryevDS/awesome-data-analysis) - 精選資料分析工具、函式庫與資源清單。
- [Awesome 證據統整](https://github.com/evidencesynthesis-tools/awesome-evidence-synthesis) - 精選系統性回顧、統合分析與證據統整開源工具清單。
- [Awesome Python 數學套件](https://github.com/VascoSch92/awesome_python_math_packages) - 精選 Python 數學套件清單，範圍涵蓋線性代數、最佳化、統計與拓撲。
- [AI Dev Jobs](https://aidevboard.com/) - 專注於 AI／ML 工程職務的求職網站，提供 5,400 多筆職缺與免費 REST API。


### 嗜好
- [Awesome 音樂製作](https://github.com/ad-si/awesome-music-production)
