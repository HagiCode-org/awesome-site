# 😎 Awesome 檢索增強生成（RAG）
[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Danielskry/Awesome-RAG) [![Awesome-RAG Agent Plugin](https://img.shields.io/badge/Agent_Plugin-Available-blueviolet)](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)

精選建置檢索增強生成（RAG）系統所需的工具、框架、技術與學習資源。本儲存庫整理 RAG 生態系，並提供權威來源、教學與實作連結，協助你探索並建置 RAG 應用程式。

另有適用於 VS Code、GitHub Copilot CLI 與 Claude Code 的[代理程式外掛](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)。

## 概覽

**檢索增強生成（RAG）**是生成式 AI 的進階技術，會在生成過程中動態檢索外部知識來源的相關脈絡並納入其中，以強化大型語言模型（LLM）。不同於僅仰賴預訓練知識的傳統 LLM，RAG 系統能存取最新、特定領域或專有資訊，大幅提升準確度、減少幻覺，並實現即時知識整合。

### 主要優點

- **減少幻覺**：以檢索到的事實資訊作為回答依據
- **領域調適**：讓 LLM 無須微調即可運用專業知識
- **即時更新**：無須重新訓練模型即可納入最新資訊
- **成本效益**：對特定領域任務而言，比微調更經濟
- **透明度**：為生成內容提供來源歸屬資訊
- **隱私與安全**：將敏感資料保留在私有知識庫中

## 目錄

- [ℹ️ RAG 概述](#ℹ%EF%B8%8F-general-information-on-rag)
- [🏗️ 架構模式](#%EF%B8%8F-architecture-patterns)
- [🎯 進階方法](#-advanced-approaches)
- [🧰 RAG 框架](#-frameworks-that-facilitate-rag)
- [🐍 RAG 的 Python 生態系](#-python-ecosystem-for-rag)
- [🛠️ 技術](#-techniques)
- [📊 指標與評估](#-metrics--evaluation)
- [💾 資料庫](#-databases)
- [🔌 特定平台的 RAG 實作](#-platform-specific-rag-implementations)
- [🚀 正式環境注意事項](#-production-considerations)
- [💡 最佳實務](#-best-practices)

## ℹ️ RAG 概述

RAG 解決了 LLM 的一項根本限制：知識截止時間固定，且無法存取外部資訊。傳統 RAG 實作會透過檢索管線，將知識庫中與情境相關的文件加入 LLM 提示。例如，詢問某棟特定房屋的整修材料時，LLM 或許具備一般整修知識，卻沒有該房屋的細節。RAG 系統可擷取相關文件（如藍圖、材料規格與當地建築法規），提供準確且符合情境的回答。

### 實作資源

#### Python 教學與範例

- 完整的 [Python RAG 基礎實作](https://github.com/Danielskry/LangChain-Chroma-RAG-demo-2024)：使用 LangChain 與 Chroma 的全端 RAG 範例
- [LangChain RAG Tutorial](https://python.langchain.com/docs/use_cases/question_answering/)：建置 RAG 應用程式的完整指南
- [LlamaIndex RAG Tutorial](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/)：開始使用 LlamaIndex 建置 RAG
- [Haystack RAG Pipeline](https://docs.haystack.deepset.ai/docs/retrieval-augmented-generation)：使用 Haystack 建置 RAG 管線
- [RAG Techniques](https://github.com/NirDiamant/RAG_Techniques)：內容豐富的開源資源集，收錄以可執行 Jupyter 筆記本呈現的進階檢索增強生成技術。
- [RAG Interview System](https://github.com/ather-techie/rag-interview-system)：以 RAG 為核心的面試準備系統，收錄 418 組精選問答（從基礎到進階），涵蓋 29 種 RAG 架構模式。

- [使用 Jev 與 Milvus 搜尋](https://github.com/milvus-io/bootcamp/tree/master/bootcamp/RAG/search_with_jev)：九個可執行的 Python 筆記本，結合 Gemini 嵌入、Milvus 檢索與 Jev 判斷，涵蓋重新排序、脈絡篩選、停止搜尋、路由、快取重用、整理、護欄與評估。

#### 正式環境與最佳實務

- [Production RAG patterns and best practices](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/)：適用於正式環境的 RAG 最佳化策略
- [LangChain Production Guide](https://python.langchain.com/docs/production/)：將 LangChain 應用程式部署至正式環境
- [Python Async Best Practices](https://docs.python.org/3/library/asyncio-dev.html)：為 AI 應用程式撰寫高效率的非同步 Python 程式碼

## 🏗️ 架構模式

RAG 系統可依需求採用不同架構模式：

- **Naive RAG**：未經最佳化的基本「先檢索、再生成」管線
- **Advanced RAG**：加入查詢改寫、重新排序與脈絡壓縮
- **Modular RAG**：由可組合的檢索、排序與生成元件構成
- **Agentic RAG**：由 LLM 驅動、可動態決定檢索方式的代理程式
- **Self-RAG**：會自我反思檢索品質並調整策略的模型
- **Graph RAG**：運用知識圖譜進行結構化資訊檢索
- **Reasoning-Based RAG**：運用 LLM 多步驟推理來規劃、導覽並執行檢索

## 🎯 進階方法

RAG 實作的複雜度各異，從簡單文件檢索到整合反覆回饋迴圈、多代理系統與領域強化的進階技術皆有。現代方法包括：

- [Vision-RAG](https://www.youtube.com/watch?v=npkp4mSweEg)：將整頁嵌入為影像，讓視覺模型直接進行推理，無須解析文字型 RAG。
- [Cache-Augmented Generation (CAG)](https://medium.com/@ronantech/cache-augmented-generation-cag-in-llms-a-step-by-step-tutorial-6ac35d415eec)：預先將相關文件載入模型脈絡，並儲存推論狀態（鍵值（KV）快取）。
- [Agentic RAG](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/)：亦稱檢索代理程式，可對檢索流程做出決策。
- [A-RAG](https://github.com/Ayanami0730/arag)：具備階層式檢索介面（關鍵字、語意、區塊層級）的代理式 RAG，讓 LLM 代理程式能以多種粒度自主搜尋與擷取。 ([Paper](https://arxiv.org/abs/2602.03442))
- [Corrective RAG](https://arxiv.org/pdf/2401.15884.pdf) (CRAG)：在將檢索資訊納入 LLM 回應前，先予以修正或精煉的方法。
- [Retrieval-Augmented Fine-Tuning](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/raft-a-new-way-to-teach-llms-to-be-better-at-rag/ba-p/4084674) (RAFT)：專門針對強化檢索與生成任務微調 LLM 的技術。
- [Self Reflective RAG](https://selfrag.github.io/)：根據模型效能回饋動態調整檢索策略的模型。
- [RAG Fusion](https://arxiv.org/abs/2402.03367)：結合多種檢索方法以改善脈絡整合的技術。
- [Temporal Augmented Retrieval](https://adam-rida.medium.com/temporal-augmented-retrieval-tar-dynamic-rag-ad737506dfcc) (TAR)：在檢索過程中考量具時效性的資料。
- [Plan-then-RAG](https://arxiv.org/abs/2406.12430) (PlanRAG)：在複雜任務中先規劃，再執行 RAG 的策略。
- [GraphRAG](https://github.com/microsoft/graphrag)：運用知識圖譜強化脈絡整合與推理的結構化方法。
- [Code-Graph-RAG](https://github.com/vitali87/code-graph-rag)：用於多語言程式碼庫分析的知識圖譜 RAG 系統。
- [FLARE](https://medium.com/etoai/better-rag-with-active-retrieval-augmented-generation-flare-3b66646e2a9f) - 透過主動式檢索增強生成提升回應品質的方法。
- [GNN-RAG](https://github.com/cmavro/GNN-RAG)：用於大型語言模型推理的圖神經網路檢索。
- [Multimodal RAG](https://developer.nvidia.com/blog/an-easy-introduction-to-multimodal-retrieval-augmented-generation/)：將 RAG 擴展至文字、影像與音訊等多種模態。
- [VideoRAG](https://arxiv.org/abs/2501.05874)：運用大型影片語言模型（LVLM）將 RAG 擴展至影片，檢索並整合視覺與文字內容，以進行多模態生成。
- [REFRAG](https://arxiv.org/pdf/2509.01092)：在生成前將檢索脈絡壓縮為嵌入，以最佳化 RAG 解碼，在維持輸出品質的同時降低延遲。
- [InstructRAG](https://github.com/weizhepei/InstructRAG)：使用自行合成的推理過程進行指令微調，藉此提升 RAG 系統的檢索與生成品質。
- [PageIndex](https://github.com/VectifyAI/PageIndex)：無向量、以推理為基礎的 RAG 框架，可建立階層式文件樹，並透過 LLM 引導的樹狀搜尋而非嵌入與向量相似度進行檢索。無須分塊或向量資料庫，仍能為複雜專業文件提供可解釋且符合脈絡的檢索。

## 🧰 促進 RAG 開發的框架

- [Haystack](https://github.com/deepset-ai/haystack)：用於建置可自訂、可部署至正式環境之 LLM 應用程式的協調框架。
- [LangChain](https://python.langchain.com/docs/modules/data_connection/)：適用於各種 LLM 工作的通用框架。
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel)：Microsoft 提供、用於開發生成式 AI 應用程式的 SDK。
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/)：用於將自訂資料來源連接至 LLM 的框架。
- [Dify](https://github.com/langgenius/dify)：開源 LLM 應用程式開發平台。
- [Verba](https://github.com/weaviate/Verba)：開箱即用的開源 RAG 應用程式。
- [Mastra](https://github.com/mastra-ai/mastra)：用於建置 AI 應用程式的 TypeScript 框架。
- [Letta](https://github.com/letta-ai/letta)：用於建置具狀態 LLM 應用程式的開源框架。
- [Flowise](https://github.com/FlowiseAI/Flowise)：以拖放式介面建置自訂 LLM 流程。
- [Kreuzberg](https://github.com/kreuzberg-dev/kreuzberg)：多語言文件智慧函式庫（以 Rust 為核心，並提供 Python、TypeScript、Go 綁定），可從 62 種以上文件格式擷取文字、表格與中繼資料，供 RAG 資料匯入管線使用。
- [Swiftide](https://github.com/bosun-ai/swiftide)：用於建置模組化、串流式 LLM 應用程式的 Rust 框架。
- [CocoIndex](https://github.com/cocoindex-io/cocoindex)：用於為 AI（例如 RAG）建立資料索引的 ETL 框架，支援即時增量更新。
- [Pathway](https://github.com/pathwaycom/pathway/)：高效能開源 Python ETL 框架，採用 Rust 執行環境，支援 300 多種資料來源。
- [Pathway AI Pipelines](https://github.com/pathwaycom/llm-app/)：適用於正式環境的 RAG 框架，支援多種資料來源的即時索引、檢索與變更追蹤。
- [LiteLLM](https://docs.litellm.ai/)：多種 LLM 提供者（OpenAI、Anthropic、Hugging Face、Replicate）的統一介面，並具備記錄、監控與成本追蹤功能。
- [Agentset](https://github.com/agentset-ai/agentset)：適用於正式環境的開源 RAG 平台，內建代理式推理、混合搜尋與多模態支援。
- [OpenAgent](https://github.com/the-open-agent/openagent)：開源個人 AI 助理平台，結合 LLM、RAG 知識庫、自主代理迴圈、瀏覽器操作、Shell 執行與 MCP 工具支援。
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research)：以本機優先的深度代理研究框架，支援多來源檢索（網頁、arXiv、PubMed、私人文件）與 20 多種研究策略。

## 🐍 RAG 的 Python 生態系

Python 是目前 RAG 最成熟的生態系，廣泛支援
LLM、嵌入、向量資料庫、評估與正式環境工具。

請參閱完整指南：[RAG 的 Python 生態系](docs/python-ecosystem.md)

## 🛠️ 技術

### 資料清理

- [資料清理技巧](https://medium.com/intel-tech/four-data-cleaning-techniques-to-improve-large-language-model-llm-performance-77bee9003625)：透過前處理步驟清理輸入資料並提升模型效能。

### 提示詞

- **策略**
  - [Tagging and Labeling](https://python.langchain.com/v0.1/docs/use_cases/tagging/)：為檢索資料加入語意標籤，以提升相關性。
  - [Chain of Thought (CoT)](https://www.promptingguide.ai/techniques/cot)：鼓勵模型在回答前逐步思考問題。
  - [Chain of Verification (CoVe)](https://sourajit16-02-93.medium.com/chain-of-verification-cove-understanding-implementation-e7338c7f4cb5)：提示模型逐步驗證推理過程是否正確。
  - [Self-Consistency](https://www.promptingguide.ai/techniques/consistency)：產生多條推理路徑，並選出最一致的答案。
  - [Zero-Shot Prompting](https://www.promptingguide.ai/techniques/zeroshot)：設計無需範例即可引導模型的提示詞。
  - [Few-Shot Prompting](https://python.langchain.com/docs/how_to/few_shot_examples/)：在提示詞中提供少量範例，以示範期望的回應格式。
  - [Reason & Act (ReAct) prompting](https://www.promptingguide.ai/techniques/react)：結合推理（例如 CoT）與行動（例如呼叫工具）。
- **快取**
  - [Prompt Caching](https://medium.com/@1kg/prompt-cache-what-is-prompt-caching-a-comprehensive-guide-e6cbae48e6a3)：透過儲存並重用預先計算的注意力狀態，提升 LLM 效能。
- **結構化**
  -  [Token-Oriented Object Notation](https://github.com/toon-format/toon)：適用於 LLM 提示詞的精簡、確定性 JSON 格式。

### 分塊

分塊策略是 RAG 系統設計中最關鍵的決策之一，會直接影響檢索精確度與脈絡品質。最佳做法取決於文件類型、領域特性與查詢模式。

- **[Fixed-Size Chunking](https://medium.com/@anuragmishra_27746/five-levels-of-chunking-strategies-in-rag-notes-from-gregs-video-7b735895694d)**
  - **用途**：適用於結構不太重要的簡單、均一文件
  - **特性**：將文字切分為大小一致的片段（通常為 256–512 個 token），並設定可調整的重疊比例（10–20%）
  - **優點**：實作簡單、區塊大小可預測、處理效率高
  - **缺點**：可能切開句子或段落、遺失文件結構，並割裂語意單元
  - **實作**：[CharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/)（LangChain）、[SentenceSplitter](https://docs.llamaindex.ai/en/stable/api_reference/node_parsers/sentence_splitter/)（LlamaIndex）

- **[Recursive Chunking](https://medium.com/@AbhiramiVS/chunking-methods-all-to-know-about-it-65c10aa7b24e)**
  - **用途**：適用於具有階層結構的文件（Markdown、HTML、程式碼）
  - **特性**：依序透過分隔符遞迴切分（段落 → 句子 → 單字），直到達到目標區塊大小
  - **優點**：保留自然邊界與文件階層，語意連貫性更佳
  - **缺點**：實作較複雜、區塊大小不一，且需要謹慎設定分隔符
  - **實作**：[RecursiveCharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/)（LangChain）

- **[Document-Based Chunking](https://medium.com/@david.richards.tech/document-chunking-for-rag-ai-applications-04363d48fbf7)**
  - **用途**：適用於具有明確章節的結構化文件（Markdown 標題、PDF 章節、資料庫記錄）
  - **特性**：依據文件中繼資料、格式線索或結構元素進行分段
  - **優點**：維持文件結構、保留脈絡，並支援豐富中繼資料的檢索
  - **缺點**：需要結構化輸入，且可能產生過大或過小的區塊
  - **實作**：[MarkdownHeaderTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/)（LangChain）
  - **多模態**：使用 [OpenCLIP](https://github.com/mlfoundations/open_clip) 等模型處理影像與文字

- **[Semantic Chunking](https://www.youtube.com/watch?v=8OJC21T2SL4&t=1933s)**
  - **用途**：適用於語意連貫性至關重要的文件（敘述文、技術文件）
  - **特性**：使用嵌入相似度找出自然的語意邊界
  - **優點**：保留語意單元、依內容調整，並提升檢索相關性
  - **缺點**：計算成本高、需要嵌入模型，且區塊大小較難預測
  - **最適用情境**：重視脈絡保留的高品質檢索

- **[Agentic Chunking](https://youtu.be/8OJC21T2SL4?si=8VnYaGUaBmtZhCsg&t=2882)**
  - **用途**：適用於需要智慧判斷分段方式的複雜文件
  - **特性**：使用 LLM 分析內容並決定最佳區塊邊界
  - **優點**：高度自適應、能理解脈絡，並可運用領域知識
  - **缺點**：成本高、處理速度較慢，且需要 LLM API 存取權
  - **最適用情境**：標準分塊方式無法奏效的專門領域

- **[Adaptive Chunking](https://github.com/ekimetrics/adaptive-chunking)**
  - **用途**：適用於混合文件集合，其中不同文件適合採用不同切分策略
  - **特性**：使用內在指標為多種分塊方法評分，並為每份文件選出最佳方法
  - **優點**：比一體適用的分塊方式更靈活，能保留結構與語意連貫性，並支援自訂切分器與指標
  - **缺點**：相較固定大小或遞迴分塊，會增加評估成本與實作複雜度

**分塊最佳實務：**
- **重疊策略**：使用 10–20% 的重疊，在區塊邊界保留脈絡
- **大小最佳化**：平衡區塊大小（較大＝更多脈絡；較小＝更高精確度）
- **保留中繼資料**：在區塊中繼資料中保留文件結構、標題與格式
- **多粒度**：考慮採用階層式方法（以較小區塊檢索、較大區塊提供脈絡）

### 嵌入

嵌入是 RAG 系統語意搜尋的基礎。嵌入模型的選擇會大幅影響檢索品質。

- **模型選擇**
  - **[MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard)**：用於評估多種任務與語言之嵌入模型的綜合基準。應考量在符合用途（檢索、分群、分類）的任務上表現良好的模型。
  - **模型特性**：依下列因素評估模型：
    - **維度**：較高維度（768–1024）通常品質較佳，但會增加儲存與運算成本
    - **脈絡長度**：確認模型支援文件區塊的大小
    - **多語言支援**：國際化應用所必需
    - **領域專用性**：通用模型或特定領域模型（例如科學、法律、醫療）
  
- **自訂嵌入**
  - **微調**：透過對比式學習、三元組損失或監督式微調，讓預訓練模型適應你的領域
  - **從頭訓練**：適用於擁有足夠標記資料的高度專門領域
  - **多模態嵌入**：適用於需要理解文字、影像或音訊的應用（例如 CLIP、ImageBind）
  - **集成方法**：結合多個嵌入模型，以提升穩健性

### 檢索

- **搜尋方法**
  - [Vector Store Flat Index](https://weaviate.io/developers/academy/py/vector_index/flat)
    - 簡單且有效率的檢索方式。
    - 將內容向量化，並以平坦的內容向量形式儲存。
  - [Hierarchical Index Retrieval](https://pixion.co/blog/rag-strategies-hierarchical-index-retrieval)
    - 以階層方式逐層縮小資料範圍。
    - 依階層順序執行檢索。
  - [Hypothetical Questions](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - 用於提高資料庫區塊與查詢之間的相似度（與 HyDE 相同）。
    - 使用 LLM 為每個文字區塊產生特定問題。
    - 將這些問題轉換為向量嵌入。
    - 搜尋時，將查詢與問題向量索引進行比對。
  - [Hypothetical Document Embeddings (HyDE)](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - 用於提高資料庫區塊與查詢之間的相似度（與假設性問題相同）。
    - 使用 LLM 根據查詢產生假設性回應。
    - 將此回應轉換為向量嵌入。
    - 比較查詢向量與假設性回應向量。
  - [Small to Big Retrieval](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/small_to_big_rag/small_to_big_rag.ipynb)
    - 透過使用較小區塊進行搜尋、較大區塊提供脈絡來提升檢索效果。
    - 較小的子區塊會指向較大的父區塊。
  - [Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval)
    - 保留分塊時通常會遺失的文件脈絡，以提升 RAG 檢索準確度。
    - 在嵌入與建立索引前，為每個文字區塊加入模型產生的簡短摘要，形成脈絡化嵌入與脈絡化 BM25。
    - 此方法結合語意與詞彙比對；搭配重新排序時，可降低檢索失敗率。
  - [Adaptive Retrieval](https://arxiv.org/abs/2403.14403)
    - 在生成過程中動態決定是否檢索及檢索量。
  - [Query Reformulation and Expansion](https://haystack.deepset.ai/cookbook/query-expansion)
    - 在檢索前自動改寫或擴展查詢，以提高召回率。
    - 適用於冗長或含糊不清的使用者查詢。
- **[Re-ranking](https://developer.nvidia.com/blog/enhancing-rag-pipelines-with-re-ranking/)**：重新排列初次檢索到的文件，優先呈現語意上最符合查詢的結果，以改善 RAG 管線的搜尋結果。

### 判斷與決策模型

判斷模型可針對檢索內容、查詢、生成回應或管線狀態做出範圍明確的語意判斷。不同於生成式 LLM，它們可作為 RAG 管線中的可程式化決策點，用於重新排序、篩選、路由、驗證與評估。

- **[Jev](https://typesafe.ai/)**：TypeSafe AI 的 System One 模型，可快速做出具型別的決策。在 RAG 中可用於重新排序、篩選、路由、驗證、護欄與評估。
- **[AnyJev](https://github.com/nokia-applied-research/AnyJev)**：將開放 LLM 轉換為 Jev 風格的具型別決策模型，具備零標籤偏誤校正功能，並可選擇針對閾值決策進行校準。

### 回應品質與安全

確保回應具備高品質、安全性與可靠性，是正式環境 RAG 系統的關鍵。

- **降低幻覺**
  - **[偵測技術](https://machinelearningmastery.com/rag-hallucination-detection-techniques/)**：實作方法，以辨識模型何時產生缺乏根據的資訊
  - **依據脈絡驗證**：將生成的主張與檢索到的脈絡交叉比對
  - **信心評分**：依據來源品質為生成的回應評定信心分數
  - **來源歸屬**：要求所有事實主張皆附上引用
  - **檢索品質**：提升檢索精確度，以降低產生幻覺的風險

- **護欄與安全**
  - **[實作指南](https://developer.ibm.com/tutorials/awb-how-to-implement-llm-guardrails-for-rag-applications/)**：實作安全機制的完整方法
  - **內容審核**：在輸入與輸出階段篩除有害、帶有偏見或不適當的內容
  - **偏見緩解**：偵測並降低檢索內容與生成回應中的偏見
  - **事實查核**：依據權威來源或知識庫驗證主張
  - **有害內容偵測**：使用分類器辨識並篩除有害內容

- **防止提示注入**
  - **[安全指南](https://hiddenlayer.com/innovation-hub/prompt-injection-attacks-on-llms/)**：了解並防範提示注入攻擊
  - **輸入驗證**：使用允許清單、長度限制與模式比對，嚴格驗證並清理所有外部輸入
  - **內容區隔**：使用明確分隔符、範本系統與依角色設計的提示詞，將指令與使用者資料分開
  - **輸出監控**：持續監控回應，找出異常、非預期行為或安全違規
  - **速率限制**：實施速率限制與濫用偵測，防止系統性攻擊
  - **沙箱隔離**：隔離 LLM 執行環境，限制成功注入可能造成的損害

## 📊 指標與評估

### 嵌入相似度指標

這些指標用於衡量嵌入之間的相似度，這對評估 RAG 系統檢索並整合外部文件或資料來源的效果至關重要。選擇合適的相似度指標有助於最佳化 RAG 系統的效能與準確度。你也可以依據特定領域或利基情境設計自訂指標，以掌握領域細節並提升相關性。

- **[Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity)**

  - 衡量多維空間中兩個向量夾角的餘弦值。
  - 特別適合比較文字嵌入，因為向量方向代表語意資訊。
  - 常用於 RAG 系統，衡量查詢嵌入與文件嵌入之間的語意相似度。

- **[Dot Product](https://en.wikipedia.org/wiki/Dot_product)**

  - 計算兩組數列中對應項目乘積的總和。
  - 向量經正規化時，結果等同餘弦相似度。
  - 簡單且有效率，常搭配硬體加速進行大規模運算。

- **[Euclidean Distance](https://en.wikipedia.org/wiki/Euclidean_distance)**

  - 計算歐幾里得空間中兩點之間的直線距離。
  - 可用於嵌入，但在高維空間中可能因「[維度詛咒](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions)」而降低效果。
  - 降維後常用於 K-means 等分群演算法。

- **[Jaccard Similarity](https://en.wikipedia.org/wiki/Jaccard_index)**
  - 以兩個有限集合的交集大小除以聯集大小，衡量兩者的相似度。
  - 適用於比較 token 集合，例如詞袋模型或 n-gram 比對。
  - 較不適用於 LLM 產生的連續嵌入。

> **注意：**餘弦相似度與內積通常被視為衡量高維嵌入相似度最有效的指標。

### 回應評估指標

RAG 解決方案的回應評估會透過多種指標檢視語言模型輸出的品質。以下是評估回應的結構化方法：

- **自動化基準測試**

  - **[BLEU](https://en.wikipedia.org/wiki/BLEU)：**評估機器生成輸出與參考輸出之間 n-gram 的重疊程度，以了解精確度。
  - **[ROUGE](<https://en.wikipedia.org/wiki/ROUGE_(metric)>)：**透過比較參考輸出中的 n-gram、skip-bigram 或最長共同子序列來衡量召回率。
  - **[METEOR](https://en.wikipedia.org/wiki/METEOR)：**著重於機器翻譯的精確比對、詞幹還原、同義詞與對齊。

- **人工評估**
  由人工評審針對下列面向評估回應：
  - **相關性：**是否符合使用者查詢。
  - **流暢度：**文法與文體品質。
  - **事實準確性：**依據權威來源驗證主張。
  - **連貫性：**回應內容的邏輯一致性。
  
  評估方式包括：
  - **[標註佇列](https://docs.langchain.com/langsmith/annotation-queues)：**提供精簡、聚焦的檢視介面，讓人工標註者針對特定執行項目提供回饋。

- **模型評估**
  使用預訓練評估器，依據多種標準對輸出進行基準測試：

  - **[TuringBench](https://turingbench.ist.psu.edu/)：**提供涵蓋多種語言基準的完整評估。
  - **[Hugging Face Evaluate](https://huggingface.co/docs/evaluate/en/index)：**計算與人類偏好的一致程度。

- **主要評估面向**
  - **依據性：**評估回應是否完全根據提供的脈絡。依據性低可能表示回應依賴幻覺或不相關資訊。
  - **完整性：**衡量回應是否涵蓋查詢的所有面向。
  - **方法：**AI 輔助檢索評分與以提示詞驗證意圖。
  - **利用程度：**評估檢索資料對回應的貢獻程度。
  - **分析：**使用 LLM 檢查回應中是否納入檢索到的區塊。

#### 工具

這些工具可協助評估 RAG 系統的效能，包括追蹤使用者回饋、記錄查詢互動，以及長期比較多項評估指標。

- **[LangFuse](https://github.com/langfuse/langfuse)**：用於追蹤 LLM 指標、可觀測性與提示詞管理的開源工具。
- **[Opik](https://github.com/comet-ml/opik)**：提供 LLM 可觀測性、評估與提示詞最佳化功能的開源平台。
- **[Ragas](https://docs.ragas.io/en/stable/)**：協助評估 RAG 管線的框架。
- **[WFGY Problem Map](https://github.com/onestardao/WFGY/tree/main/ProblemMap)**：用於診斷 RAG 與 LLM 故障的 16 種模式檢查清單。
- **[LangSmith](https://docs.smith.langchain.com/)**：用於建置正式環境等級 LLM 應用程式的平台，可讓你密切監控並評估應用程式。
- **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)**：用於計算 BLEU、ROUGE 等指標，以評估文字品質的工具。
- **[Weights & Biases](https://wandb.ai/wandb-japan/rag-hands-on/reports/Step-for-developing-and-evaluating-RAG-application-with-W-B--Vmlldzo1NzU4OTAx)**：追蹤實驗、記錄指標並視覺化效能。

## 💾 資料庫

向量資料庫是 RAG 系統的重要元件，可為嵌入提供高效儲存與相似度搜尋功能。資料庫的選擇取決於規模、延遲需求、部署模式（雲端或地端）及所需功能（混合搜尋、篩選等）。以下列出適用於 RAG 應用程式的資料庫系統：

### 基準測試

- [挑選向量資料庫](https://benchmark.vectorview.ai/vectordbs.html)

### 分散式資料處理與服務引擎：

- [Apache Cassandra](https://cassandra.apache.org/doc/latest/cassandra/vector-search/concepts.html)：分散式 NoSQL 資料庫管理系統。
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-vector-search)：全球分散式多模型資料庫服務，內建向量搜尋功能。
- [Vespa](https://vespa.ai/)：專為即時應用設計的開源巨量資料處理與服務引擎。

### 具備向量功能的搜尋引擎：

- [Elasticsearch](https://www.elastic.co/elasticsearch)：除了傳統搜尋功能，也提供向量搜尋能力。
- [OpenSearch](https://github.com/opensearch-project/OpenSearch)：從 Elasticsearch 分支而來的分散式搜尋與分析引擎。

### 向量資料庫：

- [Chroma DB](https://github.com/chroma-core/chroma)：以 AI 為核心的開源嵌入資料庫。
- [Milvus](https://github.com/milvus-io/milvus)：適用於 AI 應用程式的開源向量資料庫。
- [Pinecone](https://www.pinecone.io/)：為機器學習工作流程最佳化的無伺服器向量資料庫。
- [Oracle AI Vector Search](https://www.oracle.com/database/ai-vector-search/#retrieval-augmented-generation)：將向量搜尋整合至 Oracle Database，依據向量嵌入進行語意查詢。

### 關聯式資料庫擴充套件：

- [Pgvector](https://github.com/pgvector/pgvector)：用於在 PostgreSQL 中進行向量相似度搜尋的開源擴充套件。
- [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s)：PostgreSQL 擴充套件，提供 BM25 系列詞彙檢索，適用於關鍵字與混合檢索管線。

### 其他資料庫系統：

- [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-database)：全球分散式多模型資料庫服務，內建向量搜尋功能。
- [Couchbase](https://www.couchbase.com/products/vector-search/)：分散式 NoSQL 雲端資料庫。
- [Lantern](https://lantern.dev/)：重視隱私的個人搜尋引擎。
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/storing/vector_stores/)：採用簡單的記憶體內向量儲存區，方便快速實驗。
- [Neo4j](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/)：圖形資料庫管理系統。
- [Qdrant](https://github.com/neo4j/neo4j)：專為相似度搜尋設計的開源向量資料庫。
- [Redis Stack](https://redis.io/docs/latest/develop/interact/search-and-query/)：記憶體內資料結構儲存系統，可作為資料庫、快取與訊息代理程式。
- [SurrealDB](https://github.com/surrealdb/surrealdb)：專為時間序列資料最佳化的可擴充多模型資料庫。
- [Weaviate](https://github.com/weaviate/weaviate)：開源、雲端原生的向量搜尋引擎。

### 向量搜尋函式庫與工具：

- [FAISS](https://github.com/facebookresearch/faiss)：用於高效相似度搜尋與密集向量分群的函式庫，能處理大型資料集，並針對快速擷取最近鄰進行最佳化。

## 🚀 正式環境注意事項

除了核心檢索與生成管線之外，建置可用於正式環境的 RAG 系統還需處理多項重要面向：

### 擴充性與效能

- **索引吞吐量**：設計管線以處理大量文件匯入及增量更新
- **查詢延遲**：透過高效率索引（HNSW、IVF）、快取策略與平行處理，提升檢索速度
- **並行請求**：針對高流量情境實作連線集區、請求佇列與負載平衡
- **資源管理**：監控 GPU/CPU 使用率、記憶體用量與資料庫連線集區

### 可靠性與監控

- **可觀測性**：全面實作記錄、追蹤與指標收集（延遲、吞吐量、錯誤率）
- **健康檢查**：監控嵌入服務可用性、向量資料庫連線與 LLM API 狀態
- **錯誤處理**：實作重試邏輯、斷路器與優雅降級策略
- **A/B 測試**：比較不同檢索策略、分塊方法與提示詞範本

### 資料管理

- **增量更新**：支援即時或近即時文件索引，無須全面重新建立索引
- **版本控制**：追蹤文件版本、嵌入模型版本與提示詞範本
- **資料品質**：實作驗證管線，以偵測損毀的嵌入、缺少的中繼資料或過時內容
- **備份與復原**：定期備份向量索引與中繼資料儲存區

### 安全與法規遵循

- **存取控制**：實作身分驗證、授權與稽核記錄
- **資料隱私**：加密靜態與傳輸中的資料，並支援資料落地要求
- **內容篩選**：套用內容審核、個人識別資訊（PII）偵測與法規遵循檢查
- **速率限制**：防範濫用並確保資源公平分配

### 成本最佳化

- **嵌入快取**：快取經常存取的嵌入，以降低 API 成本
- **選擇性檢索**：透過查詢路由避免不必要的檢索作業
- **模型選擇**：選擇嵌入與 LLM 模型時，平衡成本與效能
- **資源適度配置**：依據實際使用模式最佳化基礎架構

## 🔌 特定平台的 RAG 實作

如需特定平台的詳細實作指南，請參閱文件：

- [Supabase Integration Guide](docs/supabase-integration.md)：使用 Supabase、pgvector 與 Edge Functions 建置 RAG 系統

## 💡 最佳實務

### 分塊策略

- **依領域調整分塊**：優先採用語意或依文件結構分塊，而非固定大小分塊，以更妥善保留脈絡
- **重疊管理**：策略性地加入重疊（10–20%），以在區塊邊界保留脈絡
- **保留中繼資料**：在區塊中繼資料中保留文件結構、標題與格式線索
- **多粒度**：考慮採用階層式分塊（以較小區塊檢索、較大區塊提供脈絡）

### 嵌入選擇

- **模型評估**：使用 MTEB 排行榜與領域專用基準選擇合適模型
- **維度最佳化**：平衡嵌入維度（維度較高＝品質較佳；維度較低＝檢索較快）
- **領域微調**：盡可能使用領域專用資料微調嵌入
- **一致性**：確保索引與查詢使用相同的嵌入模型

### 檢索最佳化

- **混合搜尋**：結合語意（向量）與詞彙（BM25/關鍵字）搜尋，以提升召回率
- **重新排序**：套用交叉編碼器或學習排序模型，以提升精確度
- **查詢理解**：實作查詢分類、意圖偵測與查詢擴展
- **結果多樣化**：透過多樣性限制避免結果重複

### 提示工程

- **明確指示**：清楚說明如何使用檢索到的脈絡
- **來源歸屬**：要求提供引用，並確保回答以提供的脈絡為依據
- **少樣本範例**：加入範例，示範期望的回應格式與品質
- **脈絡壓縮**：脈絡超出限制時，使用摘要或擷取等技術

### 評估架構

- **多面向指標**：評估相關性、準確度、完整性與依據性
- **人在迴路中**：納入人工回饋以持續改善
- **合成評估**：產生測試查詢與預期輸出，以進行自動化測試
- **正式環境監控**：追蹤使用者滿意度、查詢模式與失效情況

### 反覆改進

- **回饋迴圈**：蒐集使用者回饋、查詢記錄與效能指標
- **實驗**：以受控實驗系統性測試改進方式（分塊、檢索、提示詞）
- **模型更新**：規劃嵌入模型升級與遷移策略
- **文件**：清楚記錄架構、決策與作業程序

---

## 參與貢獻

這是一份由社群共同維護並持續發展的資源。歡迎貢獻！若要新增資源、修正錯誤或改善內容組織方式：

1. Fork 儲存庫
2. 為變更建立分支
3. 提交附有清楚說明的 pull request

新增項目時，請確認連結有效、描述準確簡潔，且內容置於適當章節。

## 授權

本專案採用 [CC0 1.0 Universal](LICENSE) 授權。
