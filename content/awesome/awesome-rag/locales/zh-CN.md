# 😎 Awesome 检索增强生成（RAG）
[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Danielskry/Awesome-RAG) [![Awesome-RAG Agent Plugin](https://img.shields.io/badge/Agent_Plugin-Available-blueviolet)](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)

为构建检索增强生成（RAG）系统精选工具、框架、技术和学习资料。本仓库整理了 RAG 生态，并提供权威来源、教程和实现方案的链接，帮助你探索并构建 RAG 应用。

另有适用于 VS Code、GitHub Copilot CLI 和 Claude Code 的[智能体插件版本](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)。

## 概述

**检索增强生成（RAG）**是生成式 AI 中的一项先进技术，它会在生成过程中动态检索外部知识来源中的相关上下文并将其纳入回答，从而增强大型语言模型（LLM）。与仅依赖预训练知识的传统 LLM 不同，RAG 系统能够访问最新、特定领域或专有信息，显著提升准确性、减少幻觉，并支持实时整合知识。

### 主要优势

- **减少幻觉**：基于检索到的事实信息生成回答
- **领域适配**：无需微调即可让 LLM 运用专业知识
- **实时更新**：无需重新训练模型即可纳入最新信息
- **成本效益**：对于特定领域任务，比微调更经济
- **透明度**：为生成内容提供来源归属信息
- **隐私与安全**：将敏感数据保留在私有知识库中

## 目录

- [ℹ️ RAG 概述](#ℹ%EF%B8%8F-general-information-on-rag)
- [🏗️ 架构模式](#%EF%B8%8F-architecture-patterns)
- [🎯 进阶方法](#-advanced-approaches)
- [🧰 RAG 框架](#-frameworks-that-facilitate-rag)
- [🐍 RAG 的 Python 生态](#-python-ecosystem-for-rag)
- [🛠️ 技术](#-techniques)
- [📊 指标与评估](#-metrics--evaluation)
- [💾 数据库](#-databases)
- [🔌 特定平台的 RAG 实现](#-platform-specific-rag-implementations)
- [🚀 生产环境注意事项](#-production-considerations)
- [💡 最佳实践](#-best-practices)

## ℹ️ RAG 概述

RAG 解决了 LLM 的一项根本局限：知识截止时间固定，且无法访问外部信息。传统 RAG 实现通过检索管线，将知识库中与上下文相关的文档补充到 LLM 提示词中。例如，询问某栋特定房屋的装修材料时，LLM 可能具备一般装修知识，却不了解该房屋的具体情况。RAG 系统可以检索相关文档（如蓝图、材料规格和当地建筑规范），从而提供准确且结合上下文的回答。

### 实现资源

#### Python 教程与示例

- 完整的 [Python RAG 实现](https://github.com/Danielskry/LangChain-Chroma-RAG-demo-2024)：使用 LangChain 和 Chroma 构建的全栈 RAG 示例
- [LangChain RAG 教程](https://python.langchain.com/docs/use_cases/question_answering/)：构建 RAG 应用的综合指南
- [LlamaIndex RAG 教程](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/)：LlamaIndex RAG 入门指南
- [Haystack RAG 管线](https://docs.haystack.deepset.ai/docs/retrieval-augmented-generation)：使用 Haystack 构建 RAG 管线
- [RAG 技术](https://github.com/NirDiamant/RAG_Techniques)：全面的开源高级检索增强生成技术合集，提供可运行的 Jupyter 笔记本。
- [RAG 面试系统](https://github.com/ather-techie/rag-interview-system)：用于面试准备的 RAG 系统，包含 418 组精选问答（从基础到进阶），涵盖 29 种 RAG 架构模式。

- [使用 Jev 和 Milvus 搜索](https://github.com/milvus-io/bootcamp/tree/master/bootcamp/RAG/search_with_jev)：9 个可运行的 Python 笔记本，结合 Gemini 嵌入、Milvus 检索和 Jev 判断，用于重排序、上下文过滤、停止搜索、路由、缓存复用、整理、护栏和评估。

#### 生产环境与最佳实践

- [生产级 RAG 模式与最佳实践](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/)：适用于生产环境的 RAG 优化策略
- [LangChain 生产环境指南](https://python.langchain.com/docs/production/)：将 LangChain 应用部署到生产环境
- [Python 异步编程最佳实践](https://docs.python.org/3/library/asyncio-dev.html)：为 AI 应用编写高效的 Python 异步代码

## 🏗️ 架构模式

RAG 系统可根据需求采用不同的架构模式：

- **朴素 RAG**：未经优化的基础检索后生成管线
- **高级 RAG**：包含查询改写、重排序和上下文压缩
- **模块化 RAG**：由可组合的检索、排序和生成组件构成
- **智能体 RAG**：由 LLM 驱动的智能体动态决定检索策略
- **自反思 RAG**：模型自行评估检索质量并调整策略
- **图 RAG**：利用知识图谱进行结构化信息检索
- **基于推理的 RAG**：运用 LLM 多步推理来规划、导航并执行检索

## 🎯 进阶方法

RAG 的实现复杂度各不相同，从简单的文档检索到集成迭代反馈循环、多智能体系统和领域增强的高级技术。现代方法包括：

- [Vision-RAG](https://www.youtube.com/watch?v=npkp4mSweEg)：将整页嵌入为图像，让视觉模型直接进行推理，无需解析文本式 RAG。
- [Cache-Augmented Generation (CAG)](https://medium.com/@ronantech/cache-augmented-generation-cag-in-llms-a-step-by-step-tutorial-6ac35d415eec): 将相关文档预先载入模型上下文，并保存推理状态（键值（KV）缓存）。
- [Agentic RAG](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/): 也称为检索智能体，可对检索过程做出决策。
- [A-RAG](https://github.com/Ayanami0730/arag)：具备分层检索接口（关键词、语义、块级）的智能体 RAG，使 LLM 智能体能自主地以多种粒度搜索和检索。([论文](https://arxiv.org/abs/2602.03442))
- [Corrective RAG](https://arxiv.org/pdf/2401.15884.pdf) (CRAG): 在整合到 LLM 响应之前，对检索到的信息进行修正或细化的方法。
- [Retrieval-Augmented Fine-Tuning](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/raft-a-new-way-to-teach-llms-to-be-better-at-rag/ba-p/4084674) (RAFT): 专门针对增强检索与生成任务微调 LLM 的技术。
- [Self Reflective RAG](https://selfrag.github.io/): 根据模型性能反馈动态调整检索策略的模型。
- [RAG Fusion](https://arxiv.org/abs/2402.03367): 结合多种检索方法以改善上下文整合的技术。
- [Temporal Augmented Retrieval](https://adam-rida.medium.com/temporal-augmented-retrieval-tar-dynamic-rag-ad737506dfcc) (TAR): 在检索过程中考虑具有时效性的数据。
- [Plan-then-RAG](https://arxiv.org/abs/2406.12430) (PlanRAG): 在复杂任务中，先进行规划，再执行 RAG 的策略。
- [GraphRAG](https://github.com/microsoft/graphrag): 利用知识图谱增强上下文整合与推理的结构化方法。
- [Code-Graph-RAG](https://github.com/vitali87/code-graph-rag): 用于多语言代码库分析的知识图谱 RAG 系统。
- [FLARE](https://medium.com/etoai/better-rag-with-active-retrieval-augmented-generation-flare-3b66646e2a9f) - 通过引入主动检索增强生成来提升响应质量的方法。
- [GNN-RAG](https://github.com/cmavro/GNN-RAG): 面向大语言模型推理的图神经网络检索。
- [Multimodal RAG](https://developer.nvidia.com/blog/an-easy-introduction-to-multimodal-retrieval-augmented-generation/): 将 RAG 扩展到文本、图像和音频等多种模态。
- [VideoRAG](https://arxiv.org/abs/2501.05874): 借助大型视频语言模型（LVLM）将 RAG 扩展至视频，从而检索并整合视觉与文本内容以进行多模态生成。
- [REFRAG](https://arxiv.org/pdf/2509.01092): 在生成前将检索到的上下文压缩为嵌入来优化 RAG 解码，在保持输出质量的同时降低延迟。
- [InstructRAG](https://github.com/weizhepei/InstructRAG): 通过使用自合成的推理过程进行指令微调，提升 RAG 系统的检索与生成质量。
- [PageIndex](https://github.com/VectifyAI/PageIndex): 无向量框架，基于推理构建分层文档树，并通过 LLM 引导的树搜索而非嵌入和向量相似度执行检索。它无需分块和向量数据库，同时为复杂的专业文档提供可解释且考虑上下文的检索。

## 🧰 RAG 框架

- [Haystack](https://github.com/deepset-ai/haystack)：用于构建可定制、可用于生产环境的 LLM 应用的编排框架。
- [LangChain](https://python.langchain.com/docs/modules/data_connection/)：适用于各类 LLM 工作的通用框架。
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel)：微软用于开发生成式 AI 应用的 SDK。
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/)：将自定义数据源连接到 LLM 的框架。
- [Dify](https://github.com/langgenius/dify)：开源 LLM 应用开发平台。
- [Verba](https://github.com/weaviate/Verba)：开箱即用的开源 RAG 应用。
- [Mastra](https://github.com/mastra-ai/mastra)：用于构建 AI 应用的 TypeScript 框架。
- [Letta](https://github.com/letta-ai/letta)：用于构建有状态 LLM 应用的开源框架。
- [Flowise](https://github.com/FlowiseAI/Flowise)：通过拖放式界面构建自定义 LLM 流程。
- [Kreuzberg](https://github.com/kreuzberg-dev/kreuzberg)：多语言文档智能库（以 Rust 为核心，并提供 Python、TypeScript、Go 绑定），可从 62 种以上文档格式中提取文本、表格和元数据，用于 RAG 数据导入管线。
- [Swiftide](https://github.com/bosun-ai/swiftide)：用于构建模块化、流式 LLM 应用的 Rust 框架。
- [CocoIndex](https://github.com/cocoindex-io/cocoindex)：用于为 AI（例如 RAG）构建数据索引的 ETL 框架，支持实时增量更新。
- [Pathway](https://github.com/pathwaycom/pathway/)：高性能开源 Python ETL 框架，采用 Rust 运行时，支持 300 多种数据源。
- [Pathway AI Pipelines](https://github.com/pathwaycom/llm-app/)：可用于生产环境的 RAG 框架，支持跨不同数据源进行实时索引、检索和变更跟踪。
- [LiteLLM](https://docs.litellm.ai/)：为多个 LLM 提供商（OpenAI、Anthropic、Hugging Face、Replicate）提供统一接口，并支持日志记录、监控和成本跟踪。
- [Agentset](https://github.com/agentset-ai/agentset)：可用于生产环境的开源 RAG 平台，内置智能体推理、混合搜索和多模态支持。
- [OpenAgent](https://github.com/the-open-agent/openagent)：开源个人 AI 助手平台，结合 LLM、RAG 知识库和自主智能体循环，并支持浏览器操作、Shell 执行和 MCP 工具。
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research)：本地优先的深度智能体研究框架，支持多源检索（网页、arXiv、PubMed、私有文档）和 20 多种研究策略。

## 🐍 RAG 的 Python 生态

Python 是目前 RAG 生态最成熟的语言，广泛支持
LLM、嵌入、向量数据库、评估和生产工具。

参见完整指南：[RAG 的 Python 生态](docs/python-ecosystem.md)

## 🛠️ 技术

### 数据清洗

- [数据清洗技术](https://medium.com/intel-tech/four-data-cleaning-techniques-to-improve-large-language-model-llm-performance-77bee9003625)：用于清理输入数据、提升模型性能的预处理步骤。

### 提示词

- **策略**
  - [标注与标签](https://python.langchain.com/v0.1/docs/use_cases/tagging/)：为检索数据添加语义标签，以提升相关性。
  - [思维链（CoT）](https://www.promptingguide.ai/techniques/cot)：鼓励模型在回答前逐步思考问题。
  - [验证链（CoVe）](https://sourajit16-02-93.medium.com/chain-of-verification-cove-understanding-implementation-e7338c7f4cb5)：提示模型逐步核验推理过程的准确性。
  - [自洽性](https://www.promptingguide.ai/techniques/consistency)：生成多条推理路径，并选择其中最一致的答案。
  - [零样本提示](https://www.promptingguide.ai/techniques/zeroshot)：设计无需示例即可引导模型的提示词。
  - [少样本提示](https://python.langchain.com/docs/how_to/few_shot_examples/)：在提示词中提供少量示例，展示期望的回答格式。
  - [推理与行动（ReAct）提示](https://www.promptingguide.ai/techniques/react)：将推理（例如 CoT）与行动（例如调用工具）结合起来。
- **缓存**
  - [提示缓存](https://medium.com/@1kg/prompt-cache-what-is-prompt-caching-a-comprehensive-guide-e6cbae48e6a3)：通过存储并复用预先计算的注意力状态来优化 LLM。
- **结构化**
  -  [Token-Oriented Object Notation](https://github.com/toon-format/toon)：面向 LLM 提示词的紧凑、确定性 JSON 格式。

### 分块

分块策略是 RAG 系统设计中最关键的决策之一，会直接影响检索精度和上下文质量。最佳方案取决于文档类型、领域特征和查询模式。

- **[定长分块](https://medium.com/@anuragmishra_27746/five-levels-of-chunking-strategies-in-rag-notes-from-gregs-video-7b735895694d)**
  - **使用场景**: 简单、结构较少的文档
  - **特点**: 将文本切分为大小一致的片段（通常为 256–512 个 token），并设置 10–20% 的可调重叠
  - **优点**: 实现简单、块大小可预测、处理效率高
  - **缺点**: 可能拆分句子或段落、丢失文档结构并割裂语义单元
  - **实现**：[CharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/)（LangChain）、[SentenceSplitter](https://docs.llamaindex.ai/en/stable/api_reference/node_parsers/sentence_splitter/)（LlamaIndex）

- **[递归分块](https://medium.com/@AbhiramiVS/chunking-methods-all-to-know-about-it-65c10aa7b24e)**
  - **使用场景**: 具有层次结构的文档（Markdown、HTML、代码）
  - **特点**: 按分隔符递归拆分（段落 → 句子 → 单词），直至达到目标块大小
  - **优点**: 保留自然边界和文档层级，语义连贯性更佳
  - **缺点**: 实现更复杂、块大小不一，且需要仔细配置分隔符
  - **实现**：[RecursiveCharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/)（LangChain）

- **[基于文档的分块](https://medium.com/@david.richards.tech/document-chunking-for-rag-ai-applications-04363d48fbf7)**
  - **使用场景**：具有明确分节的结构化文档（Markdown 标题、PDF 章节、数据库记录）
  - **特点**：依据文档元数据、格式提示或结构元素进行分段
  - **优点**：保留文档结构和上下文，并支持利用丰富元数据进行检索
  - **缺点**：需要结构化输入，可能生成过大或过小的文本块
  - **实现**：[MarkdownHeaderTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/)（LangChain）
  - **多模态**：使用 [OpenCLIP](https://github.com/mlfoundations/open_clip) 等模型处理图像和文本

- **[语义分块](https://www.youtube.com/watch?v=8OJC21T2SL4&t=1933s)**
  - **使用场景**：语义连贯性至关重要的文档（叙述文本、技术文档）
  - **特点**：利用嵌入相似度识别自然语义边界
  - **优点**：保留语义单元、适应内容，并提高检索相关性
  - **缺点**：计算开销大、需要嵌入模型，且文本块大小较难预测
  - **适用场景**：上下文保留至关重要的高质量检索

- **[智能体分块](https://youtu.be/8OJC21T2SL4?si=8VnYaGUaBmtZhCsg&t=2882)**
  - **使用场景**：需要智能决定如何分段的复杂文档
  - **特点**：使用 LLM 分析内容并确定最佳文本块边界
  - **优点**：适应性强、能够理解上下文并运用领域知识
  - **缺点**：成本高、处理速度较慢，且需要访问 LLM API
  - **适用场景**：标准分块方法无法奏效的专业领域

- **[自适应分块](https://github.com/ekimetrics/adaptive-chunking)**
  - **使用场景**：混合文档集合，其中不同文档适合采用不同的拆分策略
  - **特点**：使用内在指标为多种分块方法评分，并为每份文档选择最佳方法
  - **优点**：比一刀切的分块方式更灵活，可保留结构和语义连贯性，并支持自定义拆分器与指标
  - **缺点**：与定长分块或递归分块相比，会增加评估开销和实现复杂度

**分块最佳实践：**
- **重叠策略**：使用 10–20% 的重叠，在文本块边界处保留上下文
- **大小优化**：平衡文本块大小（较大意味着上下文更多，较小则精度更高）
- **保留元数据**：在文本块元数据中保留文档结构、标题和格式
- **多粒度**：考虑分层方案（用小文本块检索，用较大文本块提供上下文）

### 嵌入

嵌入是 RAG 系统语义搜索的基础。嵌入模型的选择会显著影响检索质量。

- **模型选择**
  - **[MTEB 排行榜](https://huggingface.co/spaces/mteb/leaderboard)**：用于评估多种任务和语言中的嵌入模型的综合基准。应优先选择在与你的用途（检索、聚类、分类）相关任务上表现良好的模型。
  - **模型特征**：根据以下因素评估模型：
    - **维度**: 较高维度（768–1024）通常质量更好，但会增加存储和计算成本
    - **上下文长度**: 确保模型支持你的文档块大小
    - **多语言支持**: 国际化应用所必需
    - **领域专用**: 通用模型与领域专用模型（如科学、法律、医学）
  
- **自定义嵌入**
  - **微调**: 使用对比学习、三元组损失或监督微调，使预训练模型适配你的领域
  - **从头训练**: 适用于标签数据充足的高度专业化领域
  - **多模态嵌入**: 适用于需要理解文本、图像或音频的应用（如 CLIP、ImageBind）
  - **集成方法**: 组合多个嵌入模型以提升稳健性

### 检索

- **搜索方法**
  - [向量存储平坦索引](https://weaviate.io/developers/academy/py/vector_index/flat)
    - 一种简单高效的检索方式。
    - 内容被向量化，并以平坦向量形式存储。
  - [分层索引检索](https://pixion.co/blog/rag-strategies-hierarchical-index-retrieval)
    - 按层级将数据逐步缩小到不同范围。
    - 按层级顺序执行检索。
  - [假设性问题](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - 用于提高数据库文本块与查询之间的相似度（与 HyDE 类似）。
    - 使用 LLM 为每个文本块生成具体问题。
    - 将这些问题转换为向量嵌入。
    - 搜索时，将查询与问题向量索引进行匹配。
  - [假设性文档嵌入（HyDE）](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - 用于提高数据库文本块与查询之间的相似度（与假设性问题类似）。
    - 使用 LLM 根据查询生成假设性回答。
    - 将该回答转换为向量嵌入。
    - 将查询向量与假设性回答向量进行比较。
  - [由小到大检索](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/small_to_big_rag/small_to_big_rag.ipynb)
    - 检索时使用较小的文本块，提供上下文时使用较大的文本块，从而改进检索效果。
    - 较小的子文本块对应较大的父文本块。
  - [上下文检索](https://www.anthropic.com/engineering/contextual-retrieval)
    - 保留分块过程中通常会丢失的文档上下文，从而提高 RAG 检索准确性。
    - 在嵌入和索引之前，为每个文本块补充由模型生成的简短摘要，形成上下文嵌入和上下文 BM25。
    - 结合重排序后，这种方法可同时改进语义和词法匹配，并降低检索失败率。
  - [自适应检索](https://arxiv.org/abs/2403.14403)
    - 在生成过程中动态决定何时检索以及检索多少内容。
  - [查询改写与扩展](https://haystack.deepset.ai/cookbook/query-expansion)
    - 在检索前自动改写或扩展查询，以提高召回率。
    - 适用于较长或含义模糊的用户查询。
- **[重排序](https://developer.nvidia.com/blog/enhancing-rag-pipelines-with-re-ranking/)**：通过重新排列初步检索到的文档，优先呈现与查询语义最相关的内容，从而改进 RAG 管线的搜索结果。

### 判断与决策模型

判断模型可对检索到的内容、查询、生成的响应或管线状态做出范围明确的语义判断。与生成式 LLM 不同，它们可作为 RAG 管线中的可编程决策节点，用于重排序、筛选、路由、验证和评估。

- **[Jev](https://typesafe.ai/)**：TypeSafe AI 的 System One 模型，可快速作出类型化决策。在 RAG 中，它可用于重排序、筛选、路由、验证、安全护栏和评估。
- **[AnyJev](https://github.com/nokia-applied-research/AnyJev)**：将开放式 LLM 转换为 Jev 风格的类型化决策模型，并提供零标签偏差校正，以及用于阈值决策的可选校准。

### 响应质量与安全

确保回答高质量、安全且可靠，对生产级 RAG 系统至关重要。

- **缓解幻觉**
  - **[检测技术](https://machinelearningmastery.com/rag-hallucination-detection-techniques/)**：采用相应方法，识别模型何时生成了缺乏依据的信息
  - **依据核验**：将生成的论断与检索到的上下文交叉核对
  - **置信度评分**：根据来源质量为生成的回答分配置信度分数
  - **来源归属**：要求所有事实性论断都附带引文
  - **检索质量**：提高检索精度，降低产生幻觉的风险

- **安全护栏**
  - **[实现指南](https://developer.ibm.com/tutorials/awb-how-to-implement-llm-guardrails-for-rag-applications/)**：实现安全机制的综合方案
  - **内容审核**：在输入和输出阶段过滤有害、带有偏见或不当的内容
  - **偏差缓解**：检测并缓解检索内容和生成回答中的偏差
  - **事实核查**：根据权威来源或知识库验证论断
  - **毒性检测**：使用分类器识别并过滤有毒内容

- **提示注入防护**
  - **[安全指南](https://hiddenlayer.com/innovation-hub/prompt-injection-attacks-on-llms/)**：了解并防范提示注入攻击
  - **输入验证**：使用允许列表、长度限制和模式匹配，严格验证并清理所有外部输入
  - **内容隔离**：使用明确的分隔符、模板系统和基于角色的提示词，将指令与用户数据分开
  - **输出监控**：持续监控回答，发现异常、意外行为或安全违规
  - **速率限制**：实施速率限制和滥用检测，防止系统性攻击
  - **沙箱隔离**：隔离 LLM 执行环境，限制成功注入可能造成的损害

## 📊 指标与评估

### 嵌入相似度指标

这些指标用于衡量嵌入之间的相似度，这对于评估 RAG 系统检索并整合外部文档或数据源的效果至关重要。选择合适的相似度指标有助于优化 RAG 系统的性能和准确性。你也可以针对特定领域或细分场景设计自定义指标，以捕捉领域特有的细微差异并提高相关性。

- **[余弦相似度](https://en.wikipedia.org/wiki/Cosine_similarity)**

  - 衡量多维空间中两个向量夹角的余弦值。
  - 对比文本嵌入时效果显著，因为向量方向代表语义信息。
  - 常用于 RAG 系统，衡量查询嵌入与文档嵌入之间的语义相似度。

- **[点积](https://en.wikipedia.org/wiki/Dot_product)**

  - 计算两个数列中对应项乘积的总和。
  - 向量归一化时，点积等价于余弦相似度。
  - 简单高效，常借助硬件加速执行大规模计算。

- **[欧几里得距离](https://en.wikipedia.org/wiki/Euclidean_distance)**

  - 计算欧几里得空间中两点之间的直线距离。
  - 可用于嵌入，但在高维空间中可能会因“[维度灾难](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions)”而失效。
  - 降维后常用于 K-means 等聚类算法。

- **[Jaccard 相似度](https://en.wikipedia.org/wiki/Jaccard_index)**
  - 以两个有限集合的交集大小除以并集大小，衡量它们之间的相似度。
  - 适合比较 token 集合，例如词袋模型或 n-gram 比较中的集合。
  - 不太适用于 LLM 生成的连续嵌入。

> **注意：**余弦相似度和点积通常被认为是衡量高维嵌入相似度最有效的指标。

### 响应评估指标

RAG 方案中的响应评估，需要使用多种指标衡量语言模型输出的质量。以下是评估这些响应的结构化方法：

- **自动化基准测试**

  - **[BLEU](https://en.wikipedia.org/wiki/BLEU)：**评估机器生成结果与参考结果之间的 n-gram 重合度，以反映精确率。
  - **[ROUGE](<https://en.wikipedia.org/wiki/ROUGE_(metric)>)：**通过比较 n-gram、跳跃二元组或最长公共子序列与参考结果，衡量召回率。
  - **[METEOR](https://en.wikipedia.org/wiki/METEOR)：**关注机器翻译中的精确匹配、词干提取、同义词和对齐。

- **人工评估**
  由人工评审员从以下方面评估回答：
  - **相关性：**与用户查询的契合程度。
  - **流畅度：**语法和文体质量。
  - **事实准确性：**根据权威来源核验论断。
  - **连贯性：**回答内部的逻辑一致性。
  
  方法包括：
  - **[标注队列](https://docs.langchain.com/langsmith/annotation-queues)：**提供精简且有针对性的视图，供人工标注者对特定运行实例添加反馈。

- **模型评估**
  使用预训练评估器，根据多种标准对输出进行基准评测：

  - **[TuringBench](https://turingbench.ist.psu.edu/)：**针对多种语言基准提供全面评估。
  - **[Hugging Face Evaluate](https://huggingface.co/docs/evaluate/en/index)：**计算输出与人类偏好的契合度。

- **评估的关键维度**
  - **依据充分性：**评估回答是否完全基于给定上下文。依据充分性较低可能意味着回答依赖幻觉或无关信息。
  - **完整性：**衡量回答是否涵盖查询的所有方面。
  - **方法：**使用 AI 辅助检索评分，并通过提示词验证意图。
  - **利用程度：**评估检索数据对回答的贡献程度。
  - **分析：**使用 LLM 检查回答是否纳入检索到的文本块。

#### 工具

这些工具可帮助评估 RAG 系统的性能，包括跟踪用户反馈、记录查询交互，以及随时间比较多项评估指标。

- **[LangFuse](https://github.com/langfuse/langfuse)**：用于跟踪 LLM 指标、可观测性和提示词管理的开源工具。
- **[Opik](https://github.com/comet-ml/opik)**：用于 LLM 可观测性、评估和提示词优化的开源平台。
- **[Ragas](https://docs.ragas.io/en/stable/)**：帮助评估 RAG 管线的框架。
- **[WFGY Problem Map](https://github.com/onestardao/WFGY/tree/main/ProblemMap)**：用于诊断 RAG 和 LLM 故障的 16 模式检查清单。
- **[LangSmith](https://docs.smith.langchain.com/)**：用于构建生产级 LLM 应用的平台，可对应用进行细致监控和评估。
- **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)**：用于计算 BLEU、ROUGE 等指标以评估文本质量的工具。
- **[Weights & Biases](https://wandb.ai/wandb-japan/rag-hands-on/reports/Step-for-developing-and-evaluating-RAG-application-with-W-B--Vmlldzo1NzU4OTAx)**：跟踪实验、记录指标并可视化性能。

## 💾 数据库

向量数据库是 RAG 系统的重要组成部分，可高效存储嵌入并执行相似性搜索。选择合适的数据库取决于规模、延迟要求、部署模式（云端或本地）以及所需功能（混合搜索、过滤等）等因素。以下列出了适用于 RAG 应用的数据库系统：

### 基准测试

- [如何选择向量数据库](https://benchmark.vectorview.ai/vectordbs.html)

### 分布式数据处理与服务引擎：

- [Apache Cassandra](https://cassandra.apache.org/doc/latest/cassandra/vector-search/concepts.html)：分布式 NoSQL 数据库管理系统。
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-vector-search)：全球分布式多模型数据库服务，集成向量搜索功能。
- [Vespa](https://vespa.ai/)：面向实时应用的开源大数据处理与服务引擎。

### 支持向量功能的搜索引擎：

- [Elasticsearch](https://www.elastic.co/elasticsearch)：除传统搜索功能外，还支持向量搜索。
- [OpenSearch](https://github.com/opensearch-project/OpenSearch)：从 Elasticsearch 分叉而来的分布式搜索与分析引擎。

### 向量数据库：

- [Chroma DB](https://github.com/chroma-core/chroma)：面向 AI 的原生开源嵌入数据库。
- [Milvus](https://github.com/milvus-io/milvus)：适用于 AI 应用的开源向量数据库。
- [Pinecone](https://www.pinecone.io/)：针对机器学习工作流优化的无服务器向量数据库。
- [Oracle AI Vector Search](https://www.oracle.com/database/ai-vector-search/#retrieval-augmented-generation)：将向量搜索集成到 Oracle Database 中，可基于向量嵌入进行语义查询。

### 关系数据库扩展：

- [Pgvector](https://github.com/pgvector/pgvector)：用于在 PostgreSQL 中进行向量相似性搜索的开源扩展。
- [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s)：支持 BM25 系列词法检索的 PostgreSQL 扩展，适用于关键词和混合检索管线。

### 其他数据库系统：

- [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-database)：全球分布式多模型数据库服务，集成向量搜索功能。
- [Couchbase](https://www.couchbase.com/products/vector-search/)：分布式 NoSQL 云数据库。
- [Lantern](https://lantern.dev/)：注重隐私的个人搜索引擎。
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/storing/vector_stores/)：使用简单的内存向量存储，便于快速实验。
- [Neo4j](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/)：图数据库管理系统。
- [Qdrant](https://github.com/neo4j/neo4j)：专为相似性搜索设计的开源向量数据库。
- [Redis Stack](https://redis.io/docs/latest/develop/interact/search-and-query/)：内存数据结构存储，可用作数据库、缓存和消息代理。
- [SurrealDB](https://github.com/surrealdb/surrealdb)：针对时序数据优化的可扩展多模型数据库。
- [Weaviate](https://github.com/weaviate/weaviate)：云原生开源向量搜索引擎。

### 向量搜索库与工具：

- [FAISS](https://github.com/facebookresearch/faiss)：用于密集向量高效相似性搜索和聚类的库，专为处理大型数据集设计，并针对快速检索最近邻进行了优化。

## 🚀 生产环境注意事项

构建适用于生产环境的 RAG 系统，除了核心检索与生成流程外，还需要处理多个关键方面：

### 可扩展性与性能

- **索引吞吐量**：设计能够处理大量文档导入并支持增量更新的管线
- **查询延迟**：通过高效索引（HNSW、IVF）、缓存策略和并行处理优化检索速度
- **并发请求**：在高流量场景下实施连接池、请求队列和负载均衡
- **资源管理**：监控 GPU/CPU 利用率、内存消耗和数据库连接池

### 可靠性与监控

- **可观测性**：全面实施日志记录、追踪和指标采集（延迟、吞吐量、错误率）
- **健康检查**：监控嵌入服务可用性、向量数据库连接情况和 LLM API 状态
- **错误处理**：实施重试逻辑、熔断机制和优雅降级策略
- **A/B 测试**：比较不同的检索策略、分块方法和提示词模板

### 数据管理

- **增量更新**：支持实时或近实时文档索引，无需完整重建索引
- **版本控制**：跟踪文档版本、嵌入模型版本和提示词模板
- **数据质量**：实施验证管线，检测损坏的嵌入、缺失的元数据或过期内容
- **备份与恢复**：定期备份向量索引和元数据存储

### 安全与合规

- **访问控制**：实施身份验证、授权和审计日志记录
- **数据隐私**：对静态和传输中的数据进行加密，并满足数据驻留要求
- **内容过滤**：实施内容审核、个人身份信息（PII）检测和合规检查
- **速率限制**：防止滥用并确保资源分配公平

### 成本优化

- **嵌入缓存**：缓存频繁访问的嵌入，以降低 API 成本
- **选择性检索**：使用查询路由，避免不必要的检索操作
- **模型选择**：选择嵌入模型和 LLM 时平衡成本与性能
- **资源适配**：根据实际使用模式优化基础设施配置

## 🔌 特定平台的 RAG 实现

平台的详细实现指南请参阅文档：

- [Supabase 集成指南](docs/supabase-integration.md)：使用 Supabase、pgvector 和 Edge Functions 构建 RAG 系统

## 💡 最佳实践

### 分块策略

- **领域感知分块**：优先采用语义或文档结构分块，而非定长分块，以更好地保留上下文
- **重叠管理**：设置适当的重叠（10–20%），以在文本块边界处保留上下文
- **保留元数据**：在文本块元数据中保留文档结构、标题和格式提示
- **多粒度**：考虑分层分块（用小文本块检索，用较大文本块提供上下文）

### 嵌入选择

- **模型评估**：使用 MTEB 排行榜和领域专用基准选择合适的模型
- **维度优化**：平衡嵌入维度（维度越高，质量通常越好；维度越低，检索通常越快）
- **领域微调**：尽可能使用领域数据微调嵌入模型
- **一致性**：确保索引和查询使用相同的嵌入模型

### 检索优化

- **混合搜索**：结合语义（向量）和词法（BM25/关键词）搜索，以提高召回率
- **重排序**：应用交叉编码器或学习排序模型，以提高精确率
- **查询理解**：实施查询分类、意图检测和查询扩展
- **结果多样化**：通过实施多样性约束，避免结果重复

### 提示工程

- **明确指令**：明确说明如何使用检索到的上下文
- **来源归属**：要求提供引文，并确保回答以给定上下文为依据
- **少样本示例**：加入示例，展示期望的回答格式和质量
- **上下文压缩**：当上下文超出限制时，使用摘要或信息提取等技术

### 评估框架

- **多维度指标**：评估相关性、准确性、完整性和依据充分性
- **人在回路**：纳入人工反馈，持续改进
- **合成评估**：生成测试查询和预期输出，用于自动化测试
- **生产环境监控**：跟踪用户满意度、查询模式和故障类型

### 迭代改进

- **反馈循环**：收集用户反馈、查询日志和性能指标
- **实验**：通过受控实验系统地测试改进措施（分块、检索、提示词）
- **模型更新**：规划嵌入模型升级和迁移策略
- **文档**：清晰记录架构、决策和运维流程

---

## 参与贡献

这是一个由社区共同维护、持续发展的资源集。欢迎贡献！如果你想添加资源、修正错误或改进组织方式：

1. 复刻（Fork）此仓库
2. 为你的更改创建分支
3. 提交附有清晰说明的拉取请求

新增条目时，请确保链接有效、描述准确简洁，并且内容归属恰当的章节。

## 许可

本项目采用 [CC0 1.0 通用许可](LICENSE)授权。
