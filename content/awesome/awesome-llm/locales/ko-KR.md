
# Awesome-LLM [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![](resources/image8.gif)

🔥 대규모 언어 모델(LLM)은 ~~NLP 커뮤니티~~ ~~AI 커뮤니티~~ **전 세계**를 휩쓸었습니다. 이곳에는 대규모 언어 모델, 특히 ChatGPT 관련 논문을 엄선해 모았습니다. 또한 LLM 학습 프레임워크, LLM 배포 도구, LLM 강의와 튜토리얼, 공개적으로 이용할 수 있는 모든 LLM 체크포인트와 API도 포함합니다.

## 인기 LLM 프로젝트

- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) - DeepSeek R1-Zero를 깔끔하고 최소한의 구성으로 누구나 쉽게 재현한 구현
- [open-r1](https://github.com/huggingface/open-r1) - DeepSeek-R1을 완전히 공개된 방식으로 재현한 구현
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) - DeepSeek의 1세대 추론 모델.
- [Qwen2.5-Max](https://qwenlm.github.io/blog/qwen2.5-max/) - 대규모 MoE 모델의 지능을 탐구합니다.
- [OpenAI o3-mini](https://openai.com/index/openai-o3-mini/) - 비용 효율적인 추론의 새로운 지평을 엽니다.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - GPT-4o 수준의 성능을 갖춘 최초의 오픈소스 모델.
- [Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) - 활성 매개변수 32B, 전체 매개변수 1T를 갖춘 MoE 언어 모델.


## 목차
- [Awesome-LLM ](#awesome-llm-)
  - [마일스톤 논문](#milestone-papers)
  - [기타 논문](#other-papers)
  - [LLM 리더보드](#llm-leaderboard)
  - [오픈 LLM](#open-llm)
  - [LLM 데이터](#llm-data)
  - [LLM 평가](#llm-evaluation)
  - [LLM 학습 프레임워크](#llm-training-frameworks)
  - [LLM 추론](#llm-inference)
  - [LLM 애플리케이션](#llm-applications)
  - [LLM 튜토리얼 및 강의](#llm-tutorials-and-courses)
  - [LLM 도서](#llm-books)
  - [LLM에 관한 훌륭한 생각](#great-thoughts-about-llm)
  - [기타](#miscellaneous)

## 마일스톤 논문

<details>

<summary> 마일스톤 논문 </summary>
  
|   날짜  |       키워드       |      기관     |                                                                                                        논문                                                                                                       |
|:-------:|:--------------------:|:------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2017-06 |     Transformers     |       Google       | [Attention Is All You Need](https://arxiv.org/pdf/1706.03762.pdf)                                                                                                                                                  |
| 2018-06 |        GPT 1.0       |       OpenAI       | [Improving Language Understanding by Generative Pre-Training](https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf)                                                                             |
| 2018-10 |         BERT         |       Google       | [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423.pdf)                                                                                          |
| 2019-02 |        GPT 2.0       |       OpenAI       | [Language Models are Unsupervised Multitask Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)                                          |
| 2019-09 |      Megatron-LM     |       NVIDIA       | [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism](https://arxiv.org/pdf/1909.08053.pdf)                                                                                      |
| 2019-10 |          T5          |       Google       | [Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer](https://jmlr.org/papers/v21/20-074.html)                                                                                       |
| 2019-10 |         ZeRO         |      Microsoft     | [ZeRO: Memory Optimizations Toward Training Trillion Parameter Models](https://arxiv.org/pdf/1910.02054.pdf)                                                                                                       |
| 2020-01 |      Scaling Law     |       OpenAI       | [Scaling Laws for Neural Language Models](https://arxiv.org/pdf/2001.08361.pdf)                                                                                                                                    |
| 2020-05 |        GPT 3.0       |       OpenAI       | [Language models are few-shot learners](https://papers.nips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf)                                                                                         |
| 2021-01 |  Switch Transformers |       Google       | [Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity](https://arxiv.org/pdf/2101.03961.pdf)                                                                               |
| 2021-08 |         Codex        |       OpenAI       | [Evaluating Large Language Models Trained on Code](https://arxiv.org/pdf/2107.03374.pdf)                                                                                                                           |
| 2021-08 |   Foundation Models  |      Stanford      | [On the Opportunities and Risks of Foundation Models](https://arxiv.org/pdf/2108.07258.pdf)                                                                                                                        |
| 2021-09 |         FLAN         |       Google       | [Finetuned Language Models are Zero-Shot Learners](https://openreview.net/forum?id=gEZrGCozdqR)                                                                                                                    |
| 2021-10 |          T0          | HuggingFace et al. | [Multitask Prompted Training Enables Zero-Shot Task Generalization](https://arxiv.org/abs/2110.08207)                                                                                                              |
| 2021-12 |         GLaM         |       Google       | [GLaM: Efficient Scaling of Language Models with Mixture-of-Experts](https://arxiv.org/pdf/2112.06905.pdf)                                                                                                         |
| 2021-12 |        WebGPT        |       OpenAI       | [WebGPT: Browser-assisted question-answering with human feedback](https://www.semanticscholar.org/paper/WebGPT%3A-Browser-assisted-question-answering-with-Nakano-Hilton/2f3efe44083af91cef562c1a3451eee2f8601d22) |
| 2021-12 |         Retro        |      DeepMind      | [Improving language models by retrieving from trillions of tokens](https://www.deepmind.com/publications/improving-language-models-by-retrieving-from-trillions-of-tokens)                                         |
| 2021-12 |        Gopher        |      DeepMind      | [Scaling Language Models: Methods, Analysis & Insights from Training Gopher](https://arxiv.org/pdf/2112.11446.pdf)                                                                                                 |
| 2022-01 |          COT         |       Google       | [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/pdf/2201.11903.pdf)                                                                                                      |
| 2022-01 |         LaMDA        |       Google       | [LaMDA: Language Models for Dialog Applications](https://arxiv.org/pdf/2201.08239.pdf)                                                                                                                             |
| 2022-01 |        Minerva       |       Google       | [Solving Quantitative Reasoning Problems with Language Models](https://arxiv.org/abs/2206.14858)                                                                                                                   |
| 2022-01 |  Megatron-Turing NLG |  Microsoft&NVIDIA  | [Using Deep and Megatron to Train Megatron-Turing NLG 530B, A Large-Scale Generative Language Model](https://arxiv.org/pdf/2201.11990.pdf)                                                                         |
| 2022-03 |      InstructGPT     |       OpenAI       | [Training language models to follow instructions with human feedback](https://arxiv.org/pdf/2203.02155.pdf)                                                                                                        |
| 2022-04 |         PaLM         |       Google       | [PaLM: Scaling Language Modeling with Pathways](https://arxiv.org/pdf/2204.02311.pdf)                                                                                                                              |
| 2022-04 |      Chinchilla      |      DeepMind      | [Training Compute-Optimal Large Language Models](https://arxiv.org/pdf/2203.15556)                             |
| 2022-05 |          OPT         |        Meta        | [OPT: Open Pre-trained Transformer Language Models](https://arxiv.org/pdf/2205.01068.pdf)                                                                                                                          |
| 2022-05 |          UL2         |       Google       | [Unifying Language Learning Paradigms](https://arxiv.org/abs/2205.05131v1)                                                                                                                                         |
| 2022-06 |  Emergent Abilities  |       Google       | [Emergent Abilities of Large Language Models](https://openreview.net/pdf?id=yzkSU5zdwD)                                                                                                                            |
| 2022-06 |       BIG-bench      |       Google       | [Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models](https://github.com/google/BIG-bench)                                                                                |
| 2022-06 |        METALM        |      Microsoft     | [Language Models are General-Purpose Interfaces](https://arxiv.org/pdf/2206.06336.pdf)                                                                                                                             |
| 2022-09 |        Sparrow       |      DeepMind      | [Improving alignment of dialogue agents via targeted human judgements](https://arxiv.org/pdf/2209.14375.pdf)                                                                                                       |
| 2022-10 |     Flan-T5/PaLM     |       Google       | [Scaling Instruction-Finetuned Language Models](https://arxiv.org/pdf/2210.11416.pdf)                                                                                                                              |
| 2022-10 |       GLM-130B       |      Tsinghua      | [GLM-130B: An Open Bilingual Pre-trained Model](https://arxiv.org/pdf/2210.02414.pdf)                                                                                                                              |
| 2022-11 |         HELM         |      Stanford      | [Holistic Evaluation of Language Models](https://arxiv.org/pdf/2211.09110.pdf)                                                                                                                                     |
| 2022-11 |         BLOOM        |     BigScience     | [BLOOM: A 176B-Parameter Open-Access Multilingual Language Model](https://arxiv.org/pdf/2211.05100.pdf)                                                                                                            |
| 2022-11 |       Galactica      |        Meta        | [Galactica: A Large Language Model for Science](https://arxiv.org/pdf/2211.09085.pdf)                                                                                                                              |
| 2022-12 |        OPT-IML       |        Meta        | [OPT-IML: Scaling Language Model Instruction Meta Learning through the Lens of Generalization](https://arxiv.org/pdf/2212.12017)                                                                                   |
| 2023-01 | Flan 2022 Collection |       Google       | [The Flan Collection: Designing Data and Methods for Effective Instruction Tuning](https://arxiv.org/pdf/2301.13688.pdf)                                                                                           |
| 2023-02 |         LLaMA        |        Meta        | [LLaMA: Open and Efficient Foundation Language Models](https://research.facebook.com/publications/llama-open-and-efficient-foundation-language-models/)                                                            |
| 2023-02 |       Kosmos-1       |      Microsoft     | [Language Is Not All You Need: Aligning Perception with Language Models](https://arxiv.org/abs/2302.14045)                                                                                                         |
| 2023-03 |        LRU        |       DeepMind       | [Resurrecting Recurrent Neural Networks for Long Sequences](https://arxiv.org/abs/2303.06349)                                                                                                                                          |
| 2023-03 |        PaLM-E        |       Google       | [PaLM-E: An Embodied Multimodal Language Model](https://palm-e.github.io)                                                                                                                                          |
| 2023-03 |         GPT 4        |       OpenAI       | [GPT-4 Technical Report](https://openai.com/research/gpt-4)                                                                                                                                                        |
| 2023-04 |        LLaVA        | UW–Madison&Microsoft | [Visual Instruction Tuning](https://arxiv.org/abs/2304.08485)                                                                                                |
| 2023-04 |        Pythia        |  EleutherAI et al. | [Pythia: A Suite for Analyzing Large Language Models Across Training and Scaling](https://arxiv.org/abs/2304.01373)                                                                                                |
| 2023-05 |       Dromedary      |     CMU et al.     | [Principle-Driven Self-Alignment of Language Models from Scratch with Minimal Human Supervision](https://arxiv.org/abs/2305.03047)                                                                                 |
| 2023-05 |        PaLM 2        |       Google       | [PaLM 2 Technical Report](https://ai.google/static/documents/palm2techreport.pdf)                                                                                                                                  |
| 2023-05 |         RWKV         |       Bo Peng      | [RWKV: Reinventing RNNs for the Transformer Era](https://arxiv.org/abs/2305.13048)                                                                                                                                 |
| 2023-05 |          DPO         |      Stanford      | [Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/pdf/2305.18290.pdf)                                                                                             |
| 2023-05 |          ToT         |  Google&Princeton  | [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/pdf/2305.10601.pdf)                                                                                                    |
| 2023-07 |        LLaMA2       |        Meta        | [Llama 2: Open Foundation and Fine-Tuned Chat Models](https://arxiv.org/pdf/2307.09288.pdf)                                                                                                                        |
| 2023-10 |      Mistral 7B      |       Mistral      | [Mistral 7B](https://arxiv.org/pdf/2310.06825.pdf)                                                                                                                                                                 |
| 2023-12 |         Mamba        |    CMU&Princeton   | [Mamba: Linear-Time Sequence Modeling with Selective State Spaces](https://arxiv.org/pdf/2312.00752)                                                                                                               |
| 2024-01 |         DeepSeek-v2        |      DeepSeek     | [DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model](https://arxiv.org/abs/2405.04434)                                                                                                                          |
| 2024-02 |         OLMo        |      Ai2     | [OLMo: Accelerating the Science of Language Models](https://arxiv.org/abs/2402.00838) |
| 2024-05 |         Mamba2        |      CMU&Princeton     | [Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality](https://arxiv.org/abs/2405.21060)|
| 2024-05 |         Llama3        |      Meta     | [The Llama 3 Herd of Models](https://arxiv.org/abs/2407.21783) |
| 2024-06 |         FineWeb         |      HuggingFace     | [The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale](https://arxiv.org/abs/2406.17557) |
| 2024-09 |         OLMoE        |       Ai2     | [OLMoE: Open Mixture-of-Experts Language Models](https://arxiv.org/abs/2409.02060) |
| 2024-12 |         Qwen2.5        |      Alibaba     | [Qwen2.5 Technical Report](https://arxiv.org/abs/2412.15115) |
| 2024-12 |         DeepSeek-V3        |      DeepSeek     | [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437v1) |
| 2025-01 |         DeepSeek-R1        |      DeepSeek     | [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948) |

</details>

## 기타 논문
> [!NOTE]
> LLM 분야에 관심이 있다면 위의 주요 논문 목록을 통해 해당 분야의 역사와 최신 연구를 살펴볼 수 있습니다. 하지만 LLM의 각 연구 방향은 분야 전반을 이해하는 데 꼭 필요한 고유한 통찰과 기여를 제공합니다. 여러 하위 분야의 논문을 자세히 살펴보려면 다음 링크를 참고하세요:

<details>
  <summary> 기타 논문 </summary>

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination) - LLM 환각 관련 논문 목록.
- [awesome-hallucination-detection](https://github.com/EdinburghNLP/awesome-hallucination-detection) - LLM 환각 탐지 논문 목록.
- [LLMsPracticalGuide](https://github.com/Mooler0410/LLMsPracticalGuide) - LLM 실전 활용을 위한 엄선된 가이드 자료 목록
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - ChatGPT 모델에 사용할 수 있는 프롬프트 예시 모음.
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) - ChatGPT 모델에 사용할 수 있는 중국어 프롬프트 예시 모음.
- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - OpenAI의 ChatGPT 및 GPT-3 관련 자료를 엄선한 목록.
- [Chain-of-Thoughts Papers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers) - “대규모 언어 모델에서 추론을 이끌어내는 사고의 연쇄 프롬프팅”에서 시작된 흐름.
- [Awesome Deliberative Prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) - LLM이 신뢰할 수 있는 추론을 생성하고 이유에 반응하는 결정을 내리도록 요청하는 방법.
- [Instruction-Tuning-Papers](https://github.com/SinclairCoder/Instruction-Tuning-Papers) - `Natrural-Instruction`(ACL 2022), `FLAN`(ICLR 2022), `T0`(ICLR 2022)에서 시작된 흐름.
- [LLM Reading List](https://github.com/crazyofapple/Reading_groups/) - 대규모 언어 모델 관련 논문 및 자료 목록.
- [Reasoning using Language Models](https://github.com/atfortes/LM-Reasoning-Papers) - 언어 모델을 활용한 추론 관련 논문과 자료 모음.
- [Chain-of-Thought Hub](https://github.com/FranxYao/chain-of-thought-hub) - LLM의 추론 성능을 측정합니다.
- [Awesome GPT](https://github.com/formulahendry/awesome-gpt) - GPT, ChatGPT, OpenAI, LLM 등을 주제로 한 프로젝트와 자료를 엄선한 목록.
- [Awesome GPT-3](https://github.com/elyase/awesome-gpt3) - [OpenAI GPT-3 API](https://openai.com/blog/openai-api/)의 데모와 관련 글 모음.
- [Awesome LLM Human Preference Datasets](https://github.com/PolisAI/awesome-llm-human-preference-datasets) - LLM 지시 튜닝, RLHF 및 평가를 위한 인간 선호도 데이터셋 모음.
- [RWKV-howto](https://github.com/Hannibal046/RWKV-howto) - RWKV 학습에 유용할 수 있는 자료와 튜토리얼.
- [ModelEditingPapers](https://github.com/zjunlp/ModelEditingPapers) - 대규모 언어 모델의 모델 편집에 관한 논문 및 자료 목록.
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security) - LLM 보안 관련 도구, 문서 및 프로젝트를 엄선한 모음.
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey) - 대규모 언어 모델(LLM)을 인간과 정렬하는 방법에 관한 논문 및 자료 모음.
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM) - 연구용 최고의 코드 LLM을 엄선한 목록.
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression) - LLM 압축 연구 논문과 도구 모음.
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList) - LLM 시스템 연구 논문 모음.
- [awesome-llm-webapps](https://github.com/snowfort-ai/awesome-llm-webapps) - LLM 애플리케이션용 오픈소스 웹 앱 모음으로, 활발히 유지 관리되고 있습니다.
- [awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) - 일본어 LLM 모음 — 일본어 LLM 개요.
- [Awesome-LLM-Healthcare](https://github.com/mingze-yuan/Awesome-LLM-Healthcare) - 의료 분야의 LLM에 관한 리뷰 논문 목록.
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference) - 코드가 포함된 LLM 추론 논문을 엄선한 목록.
- [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) - 3D 세계의 멀티모달 대규모 언어 모델을 엄선한 목록으로, 3D 이해, 추론, 생성 및 체화형 에이전트를 포함합니다.
- [LLMDatahub](https://github.com/Zjh-819/LLMDataHub) - 챗봇 학습용으로 특별히 설계된 데이터셋을 엄선해 모았습니다. 각 데이터셋의 링크, 크기, 언어, 용도 및 간략한 설명을 제공합니다.
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM) - 오픈소스 중국어 대규모 언어 모델을 정리한 목록입니다. 소규모·프라이빗 배포 가능·학습 비용이 낮은 모델을 중심으로 기반 모델, 수직 분야 미세 조정 및 애플리케이션, 데이터셋과 튜토리얼 등을 다룹니다.

- [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) - 다양한 최적화 과제(Opt)에 대규모 언어 모델(LLM)을 적용하는 것은 새롭게 떠오르는 연구 분야입니다. LLM4Opt 관련 참고 자료와 논문을 모았습니다.

- [awesome-language-model-analysis](https://github.com/Furyton/awesome-language-model-analysis) - 언어 모델의 학습 동역학, 표현 능력, 해석 가능성, 일반화 및 기타 흥미로운 주제 등 이론적·실증적 분석에 초점을 둔 논문 목록입니다.
  
</details>

## LLM 리더보드
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - 익명화된 무작위 대결을 크라우드소싱 방식으로 진행하는 대규모 언어 모델(LLM) 벤치마크 플랫폼.
- [LiveBench](https://livebench.ai/#/) - 까다롭고 데이터 오염이 없는 LLM 벤치마크.
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - 출시되는 LLM과 챗봇을 추적하고 순위를 매겨 평가하는 것을 목표로 합니다.
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) - Nous 벤치마크 제품군을 사용해 지시 수행 언어 모델을 자동으로 평가합니다.
<details>
  <summary> 기타 리더보드 </summary>

- [ACLUE](https://github.com/isen-zhang/ACLUE) - 고대 중국어 이해에 초점을 맞춘 평가 벤치마크. 
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) - LLM의 정직성을 포괄적으로 평가하도록 특별히 설계된 선구적인 벤치마크. 
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - 외부 함수 및 도구를 호출하는 LLM의 능력을 평가합니다.
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) - 중국어 LLM을 위한 전문가 주도형 벤치마크.
- [CompassRank](https://rank.opencompass.org.cn) - 가장 앞선 언어 및 비전 모델을 탐구하며, 업계와 연구를 위한 포괄적이고 객관적이며 중립적인 평가 기준을 제공합니다.
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) - 지식 베이스, 텍스트, 표, 인포박스 등 서로 다른 입력 소스가 혼합된 환경에서 작동하는 질의응답(QA) 방법을 평가하는 벤치마크.
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) - 텍스트와 시각적 상상력 관련 여러 과제에서 대규모 언어 모델(LLM)의 성능을 평가하는 벤치마크.
- [FELM](https://hkust-nlp.github.io/felm) - 대규모 언어 모델(LLM)의 출력을 사실성 평가기가 얼마나 잘 평가하는지 측정하는 메타 벤치마크. 
- [InfiBench](https://infi-coder.github.io/infibench) - 실제 코딩 관련 질문에 답하는 능력을 중심으로 대규모 언어 모델(LLM)을 평가하도록 설계된 벤치마크.
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) - 법률 분야의 대규모 언어 모델을 평가하기 위한 벤치마크.
- [LLMEval](http://llmeval.com) - 다양한 시나리오에서 모델이 어떻게 작동하는지 파악하고 해석 가능성 관점에서 결과를 분석하는 데 중점을 둡니다. 
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) - 언어, 자연과학 및 사회과학, 물리·사회 상식, 시간 추론, 대수학, 기하학 등 다양한 멀티모달 추론 과제에서 대규모 언어 모델을 평가하는 벤치마크.
- [MathEval](https://matheval.ai) - 20개 분야와 약 3만 개의 수학 문제를 대상으로 대규모 모델의 수학 능력을 평가하도록 설계된 종합 벤치마크 플랫폼.
- [MixEval](https://mixeval.github.io/#leaderboard) - 기성 벤치마크 혼합에서 도출한 정답 기반 동적 벤치마크입니다. Chatbot Arena와 0.96의 상관관계를 보이는 높은 모델 순위 성능을 제공하면서 로컬에서 빠르게 실행되어 MMLU 실행 시간과 비용의 6%만 사용합니다.
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) - 여러 언어로 의학 질문에 답하는 대규모 언어 모델의 능력을 평가하는 벤치마크. 
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) - 인간의 신념과 목표를 이해하는 AI 모델의 인지 능력을 평가하도록 설계된 멀티모달 질의응답 벤치마크.
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) - 수학, 물리학, 화학, 생물학 등 여러 학문 분야에 걸쳐 AI 모델을 평가하는 벤치마크.
- [PubMedQA](https://pubmedqa.github.io) - PubMed 초록을 사용해 연구 관련 질문에 답하도록 설계된 생의학 질의응답 벤치마크.
- [SciBench](https://scibench-ucla.github.io/#leaderboard) -  화학, 물리학, 수학 등 분야의 복잡한 대학 수준 과학 문제를 푸는 대규모 언어 모델(LLM)의 능력을 평가하도록 설계된 벤치마크.
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) - 자연어 이해, 추론, 일반화 등 다양한 측면의 성능에 특히 초점을 맞춰 대규모 언어 모델(LLM)을 평가하는 벤치마크 플랫폼. 
- [SuperLim](https://lab.kb.se/leaderboard/results) - 논증 분석, 의미 유사도, 텍스트 함의 등의 과제에서 자연어 처리(NLP) 모델을 평가하는 스웨덴어 이해 벤치마크.
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) - 복잡한 문서 이해, 특히 재무 보고서를 대상으로 설계된 대규모 문서 시각 질의응답(VQA) 데이터셋.
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) - 표와 텍스트 정보를 통합해 실제 금융 데이터에 초점을 맞춘 대규모 질의응답 벤치마크.
- [VisualWebArena](https://jykoh.com/vwa) - 현실적이고 시각적 근거가 있는 과제에서 멀티모달 웹 에이전트의 성능을 평가하도록 설계된 벤치마크.
- [We-Math](https://we-math.github.io/#leaderboard) - 사람과 유사한 수학적 추론을 수행하는 대규모 멀티모달 모델(LMM)의 능력을 평가하는 벤치마크.
- [WHOOPS!](https://whoops-benchmark.github.io) - 일반적인 기대에 어긋나는 이미지를 통해 시각적 상식에 대한 AI의 추론 능력을 시험하는 벤치마크 데이터셋.

</details>


## 오픈 LLM
<details>
<summary>DeepSeek</summary>
  
  - [DeepSeek-Math-7B](https://huggingface.co/collections/deepseek-ai/deepseek-math-65f2962739da11599e441681)
  - [DeepSeek-Coder-1.3|6.7|7|33B](https://huggingface.co/collections/deepseek-ai/deepseek-coder-65f295d7d8a0a29fe39b4ec4)
  - [DeepSeek-VL-1.3|7B](https://huggingface.co/collections/deepseek-ai/deepseek-vl-65f295948133d9cf92b706d3)
  - [DeepSeek-MoE-16B](https://huggingface.co/collections/deepseek-ai/deepseek-moe-65f29679f5cf26fe063686bf)
  - [DeepSeek-v2-236B-MoE](https://arxiv.org/abs/2405.04434)
  - [DeepSeek-Coder-v2-16|236B-MOE](https://github.com/deepseek-ai/DeepSeek-Coder-V2)
  - [DeepSeek-V2.5](https://huggingface.co/deepseek-ai/DeepSeek-V2.5)
  - [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3)
  - [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1)

</details>
<details>
<summary>Alibaba</summary>

  - [Qwen-1.8B|7B|14B|72B](https://huggingface.co/collections/Qwen/qwen-65c0e50c3f1ab89cb8704144)
  - [Qwen1.5-0.5B|1.8B|4B|7B|14B|32B|72B|110B|MoE-A2.7B](https://qwenlm.github.io/blog/qwen1.5/)
  - [Qwen2-0.5B|1.5B|7B|57B-A14B-MoE|72B](https://qwenlm.github.io/blog/qwen2)
  - [Qwen2.5-0.5B|1.5B|3B|7B|14B|32B|72B](https://qwenlm.github.io/blog/qwen2.5/)
  - [CodeQwen1.5-7B](https://qwenlm.github.io/blog/codeqwen1.5/)
  - [Qwen2.5-Coder-1.5B|7B|32B](https://qwenlm.github.io/blog/qwen2.5-coder/)
  - [Qwen2-Math-1.5B|7B|72B](https://qwenlm.github.io/blog/qwen2-math/)
  - [Qwen2.5-Math-1.5B|7B|72B](https://qwenlm.github.io/blog/qwen2.5-math/)
  - [Qwen-VL-7B](https://huggingface.co/Qwen/Qwen-VL)
  - [Qwen2-VL-2B|7B|72B](https://qwenlm.github.io/blog/qwen2-vl/)
  - [Qwen2-Audio-7B](https://qwenlm.github.io/blog/qwen2-audio/)
  - [Qwen2.5-VL-3|7|72B](https://qwenlm.github.io/blog/qwen2.5-vl/)
  - [Qwen2.5-1M-7|14B](https://qwenlm.github.io/blog/qwen2.5-1m/)

</details>

<details>
<summary>Meta</summary>

  - [Llama 3.2-1|3|11|90B](https://llama.meta.com/)
  - [Llama 3.1-8|70|405B](https://llama.meta.com/)
  - [Llama 3-8|70B](https://llama.meta.com/llama3/)
  - [Llama 2-7|13|70B](https://llama.meta.com/llama2/)
  - [Llama 1-7|13|33|65B](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/)
  - [OPT-1.3|6.7|13|30|66B](https://arxiv.org/abs/2205.01068)

</details>

<details>
<summary>Mistral AI</summary>

  - [Codestral-7|22B](https://mistral.ai/news/codestral/)
  - [Mistral-7B](https://mistral.ai/news/announcing-mistral-7b/)
  - [Mixtral-8x7B](https://mistral.ai/news/mixtral-of-experts/)
  - [Mixtral-8x22B](https://mistral.ai/news/mixtral-8x22b/)

</details>
<details>
<summary>Google</summary>

  - [Gemma2-9|27B](https://blog.google/technology/developers/google-gemma-2/)
  - [Gemma-2|7B](https://blog.google/technology/developers/gemma-open-models/)
  - [RecurrentGemma-2B](https://github.com/google-deepmind/recurrentgemma)
  - [T5](https://arxiv.org/abs/1910.10683)

</details>
<details>
<summary>Apple</summary>

  - [OpenELM-1.1|3B](https://huggingface.co/apple/OpenELM)

</details>
<details>
<summary>Microsoft</summary>

  - [Phi1-1.3B](https://huggingface.co/microsoft/phi-1)
  - [Phi2-2.7B](https://huggingface.co/microsoft/phi-2)
  - [Phi3-3.8|7|14B](https://huggingface.co/microsoft/Phi-3-mini-4k-instruct)

</details>
<details>
<summary>AllenAI</summary>

  - [OLMo-7B](https://huggingface.co/collections/allenai/olmo-suite-65aeaae8fe5b6b2122b46778)

</details>
<details>
<summary>xAI</summary>

  - [Grok-1-314B-MoE](https://x.ai/blog/grok-os)

</details>
<details>
<summary>Cohere</summary>

  - [Command R-35B](https://huggingface.co/CohereForAI/c4ai-command-r-v01)

</details>




<details>
<summary>01-ai</summary>

  - [Yi-34B](https://huggingface.co/collections/01-ai/yi-2023-11-663f3f19119ff712e176720f)
  - [Yi1.5-6|9|34B](https://huggingface.co/collections/01-ai/yi-15-2024-05-663f3ecab5f815a3eaca7ca8)
  - [Yi-VL-6B|34B](https://huggingface.co/collections/01-ai/yi-vl-663f557228538eae745769f3)

</details>
 
 
<details>
<summary>Baichuan</summary>

   - [Baichuan-7|13B](https://huggingface.co/baichuan-inc)
   - [Baichuan2-7|13B](https://huggingface.co/baichuan-inc)

</details>

<details>
<summary>Nvidia</summary>

   - [Nemotron-4-340B](https://huggingface.co/nvidia/Nemotron-4-340B-Instruct)

</details>

<details>
<summary>BLOOM</summary>

   - [BLOOMZ&mT0](https://huggingface.co/bigscience/bloomz)

</details>
<details>
<summary>Zhipu AI</summary>

   - [GLM-2|6|10|13|70B](https://huggingface.co/THUDM)
   - [CogVLM2-19B](https://huggingface.co/collections/THUDM/cogvlm2-6645f36a29948b67dc4eef75)

</details>
<details>
<summary>OpenBMB</summary>

  - [MiniCPM-2B](https://huggingface.co/collections/openbmb/minicpm-2b-65d48bf958302b9fd25b698f)
  - [OmniLLM-12B](https://huggingface.co/openbmb/OmniLMM-12B)
  - [VisCPM-10B](https://huggingface.co/openbmb/VisCPM-Chat)
  - [CPM-Bee-1|2|5|10B](https://huggingface.co/collections/openbmb/cpm-bee-65d491cc84fc93350d789361)

</details>
<details>
<summary>RWKV Foundation</summary>

  - [RWKV-v4|5|6](https://huggingface.co/RWKV)minicpm-2b-65d48bf958302b9fd25b698f)

</details>

<details>
<summary>ElutherAI</summary>

  - [Pythia-1|1.4|2.8|6.9|12B](https://github.com/EleutherAI/pythia)

</details>

<details>
<summary>Stability AI</summary>

  - [StableLM-3B](https://huggingface.co/stabilityai/stablelm-3b-4e1t)
  - [StableLM-v2-1.6B](https://huggingface.co/stabilityai/stablelm-2-1_6b)
  - [StableLM-v2-12B](https://huggingface.co/stabilityai/stablelm-2-12b)
  - [StableCode-3B](https://huggingface.co/collections/stabilityai/stable-code-64f9dfb4ebc8a1be0a3f7650)

</details>
<details>
<summary>BigCode</summary>

  - [StarCoder-1|3|7B](https://huggingface.co/collections/bigcode/%E2%AD%90-starcoder-64f9bd5740eb5daaeb81dbec)
  - [StarCoder2-3|7|15B](https://huggingface.co/collections/bigcode/starcoder2-65de6da6e87db3383572be1a)

</details>
<details>
<summary>DataBricks</summary>

  - [MPT-7B](https://www.databricks.com/blog/mpt-7b)
  - [DBRX-132B-MoE](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm)

</details>
<details>
<summary>Shanghai AI Laboratory</summary>
  
  - [InternLM2-1.8|7|20B](https://huggingface.co/collections/internlm/internlm2-65b0ce04970888799707893c)
  - [InternLM-Math-7B|20B](https://huggingface.co/collections/internlm/internlm2-math-65b0ce88bf7d3327d0a5ad9f)
  - [InternLM-XComposer2-1.8|7B](https://huggingface.co/collections/internlm/internlm-xcomposer2-65b3706bf5d76208998e7477)
  - [InternVL-2|6|14|26](https://huggingface.co/collections/OpenGVLab/internvl-65b92d6be81c86166ca0dde4)

    
</details>
<details>
<summary>Moonshot AI</summary>
  
  - [Moonlight-A3B](https://huggingface.co/collections/moonshotai/moonlight-a3b-67f67b029cecfdce34f4dc23)
  - [Kimi-VL-A3B](https://huggingface.co/collections/moonshotai/kimi-vl-a3b-67f67b6ac91d3b03d382dd85)
  - [Kimi-K2](https://huggingface.co/collections/moonshotai/kimi-k2-6871243b990f2af5ba60617d)
    
</details>


## LLM 데이터
> Reference: [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - 사전 구축 모듈과 로컬에서 클러스터까지 확장 가능한 기능을 제공하는 효율적인 비정형 데이터 처리를 위한 오픈소스 툴킷.
- [Datatrove](https://github.com/huggingface/datatrove) - 플랫폼에 구애받지 않고 사용자 지정 가능한 파이프라인 처리 블록을 제공해 데이터 처리를 스크립트 작성의 혼란에서 해방합니다.
- [Dingo](https://github.com/DataEval/dingo) - Dingo: 종합 데이터 품질 평가 도구
- [FastDatasets](https://github.com/ZhuLinsen/FastDatasets) - 대규모 언어 모델용 고품질 학습 데이터셋을 만드는 강력한 도구

## LLM 평가:
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - 언어 모델의 퓨샷 평가를 위한 프레임워크.
- [lighteval](https://github.com/huggingface/lighteval) - Hugging Face가 내부적으로 사용해 온 경량 LLM 평가 도구 모음.
- [simple-evals](https://github.com/openai/simple-evals) - OpenAI의 평가 도구.

<details>
<summary>기타 평가 프레임워크</summary>

- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - 오픈 언어 모델을 평가하기 위한 저장소.
- [MixEval](https://github.com/Psycoy/MixEval) - 오픈소스 및 독점 모델 모두와 호환되며 MixEval 및 기타 벤치마크를 지원하는 간편하고 신뢰할 수 있는 평가 도구 모음.
- [HELM](https://github.com/stanford-crfm/helm) - 언어 모델의 투명성을 높이기 위한 프레임워크인 통합 언어 모델 평가(HELM).
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - Alpaca 및 Flan-T5와 같은 지시 튜닝 모델을 보류된 과제에서 정량적으로 평가하는 코드가 포함된 저장소입니다.
- [Giskard](https://github.com/Giskard-AI/giskard) - LLM 애플리케이션, 특히 RAG를 위한 테스트 및 평가 라이브러리
- [LangSmith](https://www.langchain.com/langsmith) - 평가, 협업형 HITL(사람 참여형), LLM 애플리케이션 로깅 및 모니터링을 제공하는 LangChain 프레임워크의 통합 플랫폼.  
- [Ragas](https://github.com/explodinggradients/ragas) - 검색 증강 생성(RAG) 파이프라인 평가를 돕는 프레임워크.

</details>



## LLM 학습 프레임워크

- [Meta Lingua](https://github.com/facebookresearch/lingua) - LLM 연구를 위한 간결하고 효율적이며 수정하기 쉬운 코드베이스
- [Litgpt](https://github.com/Lightning-AI/litgpt) - 사전 학습, 미세 조정 및 대규모 배포 레시피를 제공하는 고성능 LLM 20여 종.
- [nanotron](https://github.com/huggingface/nanotron) - 미니멀한 대규모 언어 모델 3D 병렬 학습.
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - 분산 학습과 추론을 쉽고 효율적이며 효과적으로 만드는 딥러닝 최적화 라이브러리입니다.
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - 대규모 Transformer 모델 학습을 위한 지속적인 연구 프로젝트.
- [torchtitan](https://github.com/pytorch/torchtitan) - 대규모 모델 학습을 위한 PyTorch 네이티브 라이브러리.

<details>
<summary>기타 프레임워크</summary>

  - [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - MoE 모델 학습, 커리큘럼 학습, 3D 병렬 처리 등을 비롯한 여러 기능을 추가 지원하는 NVIDIA Megatron-LM의 DeepSpeed 버전. 
  - [torchtune](https://github.com/pytorch/torchtune) - LLM 미세 조정을 위한 PyTorch 네이티브 라이브러리.
  - [ROLL](https://github.com/alibaba/ROLL) - 대규모 언어 모델을 활용한 강화 학습을 위한 효율적이고 사용하기 쉬운 확장 라이브러리.
  - [veRL](https://github.com/volcengine/verl) - LLM을 위한 유연하고 효율적인 강화 학습 프레임워크입니다.
  - [NeMo Framework](https://github.com/NVIDIA/NeMo) - 대규모 언어 모델(LLM), 멀티모달 모델(MM), 자동 음성 인식(ASR), 음성 합성(TTS), 컴퓨터 비전(CV) 분야에서 일하는 연구자와 PyTorch 개발자를 위한 생성형 AI 프레임워크.
  - [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - 대규모 AI 모델을 더 저렴하고 빠르며 쉽게 이용할 수 있도록 합니다.
  - [BMTrain](https://github.com/OpenBMB/BMTrain) - 대형 모델을 위한 효율적인 학습.
  - [Mesh Tensorflow](https://github.com/tensorflow/mesh) - Mesh TensorFlow: 모델 병렬 처리를 더 쉽게.
  - [maxtext](https://github.com/AI-Hypercomputer/maxtext) - 간단하고 성능이 뛰어나며 확장 가능한 JAX LLM!
  - [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - DeepSpeed 라이브러리를 기반으로 GPU에서 모델 병렬 자동회귀 Transformer를 구현했습니다.
  - [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) - NVIDIA GPU에서 Transformer 모델 학습을 가속하는 라이브러리.
  - [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) - 사용하기 쉽고 확장 가능하며 고성능인 RLHF 프레임워크(70B 이상 PPO 전체 미세 조정, 반복 DPO, LoRA, RingAttention, RFT).
  - [TRL](https://huggingface.co/docs/trl/en/index) - 지도 미세 조정(SFT), 보상 모델링(RM), 근접 정책 최적화(PPO) 단계까지 강화 학습을 통해 Transformer 언어 모델을 학습하는 도구 모음 전체를 제공하는 라이브러리입니다.
  - [unslothai](https://github.com/unslothai/unsloth) - 효율적인 미세 조정에 특화된 프레임워크입니다. GitHub 페이지에서 여러 LLM용 미세 조정 템플릿을 바로 사용할 수 있으며, Google Colab 클라우드에서 자신의 데이터로 무료 학습을 쉽게 진행할 수 있습니다.
  - [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - LLM을 미세 조정하고 평가하기 위한 오픈소스 프레임워크입니다. 다양한 학습 구성을 실험하고 결과를 재현·공유하는 과정을 간소화하며, LoRA, QLoRA, DeepSpeed, PEFT 및 멀티 GPU 설정을 지원합니다.

</details>


## LLM 추론

> Reference: [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [SGLang](https://github.com/sgl-project/sglang) - 대규모 언어 모델 및 비전 언어 모델을 위한 고속 서빙 프레임워크입니다.
- [vLLM](https://github.com/vllm-project/vllm) - LLM을 위한 높은 처리량과 메모리 효율성을 갖춘 추론 및 서빙 엔진.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - C/C++ 기반 LLM 추론.
- [ollama](https://github.com/ollama/ollama) - Llama 3, Mistral, Gemma 및 기타 대규모 언어 모델을 실행해 보세요.
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - 대규모 언어 모델(LLM)을 배포하고 서빙하기 위한 툴킷.
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - LLM 추론을 위한 Nvidia 프레임워크
<details>
<summary>기타 배포 도구</summary>

- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - NVIDIA의 LLM 추론 프레임워크(TensorRT-LLM으로 전환됨)
- [MInference](https://github.com/microsoft/MInference) - 긴 컨텍스트 LLM의 추론을 가속하기 위해 근사 동적 희소 계산으로 어텐션을 수행합니다. 정확도를 유지하면서 A100에서 프리필 지연 시간을 최대 10배 줄입니다.
- [exllama](https://github.com/turboderp/exllama) - 양자화된 가중치를 사용하는 Llama용 HF transformers 구현을 더 메모리 효율적으로 재작성한 버전.
- [FastChat](https://github.com/lm-sys/FastChat) - 웹 UI와 OpenAI 호환 RESTful API를 갖춘 분산형 다중 모델 LLM 서빙 시스템.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - 매우 빠른 LLM 추론.
- [SkyPilot](https://github.com/skypilot-org/skypilot) - 간단한 인터페이스로 어느 클라우드에서든 LLM과 배치 작업을 실행하세요. 비용을 최대한 절감하고 GPU 가용성을 높이며 실행을 관리합니다.
- [Haystack](https://haystack.deepset.ai/) - Hugging Face, OpenAI, Cohere의 LLM 및 Transformer 기반 모델을 사용해 자체 데이터와 상호작용할 수 있는 오픈소스 NLP 프레임워크. 
- [OpenLLM](https://github.com/bentoml/OpenLLM) - 프로덕션 환경에서 모든 오픈소스 LLM을 미세 조정하고, 서빙하고, 배포하고, 모니터링합니다. [BentoML](https://bentoml.com/)에서 LLM 기반 애플리케이션에 프로덕션 적용되어 있습니다.
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) -  MII는 DeepSpeed 기반 vLLM과 유사하게 지연 시간이 짧고 처리량이 높은 추론을 제공합니다.
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - Rust 기반 텍스트 임베딩 추론, HFOIL 라이선스.
- [Infinity](https://github.com/michaelfeil/infinity) - Python 기반 텍스트 임베딩 추론
- [LMDeploy](https://github.com/InternLM/lmdeploy) - LLM 및 VL을 위한 높은 처리량과 낮은 지연 시간의 추론 및 서빙 프레임워크
- [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) - LLM 학습을 위한 효율적인 Triton 커널.
- [prima.cpp](https://github.com/Lizonghang/prima.cpp) - 일상적으로 사용하는 기기에서 70B급 LLM을 실행할 수 있는 llama.cpp의 분산 구현.
- [deploy-llms-with-ansible](https://github.com/xamey/deploy-llms-with-ansible) - Ansible을 사용해 최소한의 구성만으로 VM에 LLM을 쉽게 배포합니다.

</details>


## LLM 애플리케이션
> Reference: [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [dspy](https://github.com/stanfordnlp/dspy) - DSPy: 기반 모델을 프롬프트가 아닌 프로그래밍으로 다루는 프레임워크.
- [LangChain](https://github.com/hwchase17/langchain) — 언어 모델 프롬프트 시퀀스를 연결하는 널리 쓰이는 Python/JavaScript 라이브러리.
- [LlamaIndex](https://github.com/jerryjliu/llama_index) — LLM 애플리케이션에 데이터를 보강하는 Python 라이브러리.

<details>
<summary>추가 애플리케이션</summary>


- [MLflow](https://mlflow.org/) - MLflow: 실험 추적, 모델/프롬프트 평가, 모델 배포, 추적 기반 관측 기능 추가를 통해 개발자가 엔드투엔드 머신러닝 생애주기를 관리하도록 돕는 오픈소스 프레임워크.
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - 다양한 작업을 위한 로컬 LLM 도구의 종합 모음.
- [LiteChain](https://github.com/rogeriochaves/litechain) - LLM을 구성하기 위한 LangChain의 경량 대안 
- [magentic](https://github.com/jackmpcollins/magentic) - LLM을 Python 함수로 원활하게 통합합니다.
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - wechaty를 통해 Wechat에서 ChatGPT를 사용합니다.
- [promptfoo](https://github.com/typpo/promptfoo) - 프롬프트를 테스트하세요. LLM 출력을 평가하고 비교하며, 회귀를 찾아 프롬프트 품질을 높이세요.
- [Agenta](https://github.com/agenta-ai/agenta) -  LLM 기반 앱을 쉽게 만들고, 버전을 관리하고, 평가하고, 배포하세요.
- [Serge](https://github.com/serge-chat/serge) - Alpaca 모델을 실행하기 위해 llama.cpp로 만든 채팅 인터페이스입니다. API 키가 필요 없고 완전히 자체 호스팅됩니다!
- [Langroid](https://github.com/langroid/langroid) - 멀티 에이전트 프로그래밍으로 LLM을 활용합니다.
- [Embedchain](https://github.com/embedchain/embedchain) - 데이터셋을 기반으로 ChatGPT와 유사한 봇을 만드는 프레임워크.
- [Opik](https://github.com/comet-ml/opik) - 개발부터 프로덕션까지 언어 모델 출력을 조정하는 관측 도구 모음으로 LLM 애플리케이션을 자신 있게 평가·테스트·배포하세요.
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - 여러 AI 모델에 접근하고 테스트할 수 있는 통합 마이크로서비스를 제공해 LLM 평가를 간소화합니다.
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - 이전 이름은 langchain-ChatGLM이며, langchain을 사용하는 로컬 지식 기반 LLM(예: ChatGLM) 질의응답 앱입니다.
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - [LeptonAI](https://github.com/leptonai)를 통해 500줄 미만의 코드로 나만의 대화형 검색 엔진을 만드세요.
- [Robocorp](https://github.com/robocorp/robocorp) - Python을 사용해 어디서나 Actions를 만들고 배포하고 운영하여 AI 에이전트와 어시스턴트를 강화하세요. 다양한 라이브러리, 도우미, 로깅 기능이 기본 제공됩니다.
- [Tune Studio](https://studio.tune.app/) - 개발자를 위한 LLM 미세 조정 및 배포 플레이그라운드
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - LLM 체인을 사용해 로컬에서 실행하는 웹 검색
- [AI Gateway](https://github.com/Portkey-AI/gateway) — 통합 API로 100개 이상의 오픈 및 폐쇄형 모델에 대한 요청을 간소화하는 게이트웨이입니다. 캐싱, 대체 경로, 재시도, 타임아웃, 부하 분산을 지원하며, 최소 지연 시간을 위해 엣지에 배포할 수도 있습니다.
- [talkd.ai dialog](https://github.com/talkdai/dialog) - 원하는 RAG 또는 LLM을 플러그인과 함께 배포하기 위한 간단한 API.
- [Wllama](https://github.com/ngxson/wllama) - llama.cpp용 WebAssembly 바인딩으로, 브라우저 내 LLM 추론을 지원합니다.
- [GPUStack](https://github.com/gpustack/gpustack) - LLM 실행을 위한 오픈소스 GPU 클러스터 관리자
- [MNN-LLM](https://github.com/alibaba/MNN) -- 온디바이스 LLM 추론(휴대폰/PC/IoT)을 포함하는 디바이스 추론 프레임워크
- [CAMEL](https://www.camel-ai.org/) - 최초의 LLM 멀티 에이전트 프레임워크. 
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - Ollama/OpenAI/MistralAI LLM을 활용해 GitHub 코드 저장소나 압축 파일 리소스를 빠르게 이해하고 탐색하는 대화형 채팅 프로젝트.
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - 순수 셸 스크립트로 Linux 또는 MacOS 시스템에서 Ollama 모델(또는 OpenAI, MistralAI)을 사용해 LLM과 상호작용합니다. 의존성 없이 지능형 시스템 관리를 지원합니다.
- [MindSQL](https://github.com/Mindinventory/MindSQL) - 독점 및 오픈소스 LLM과 호환되는 자체 호스팅 기능과 RESTful API를 갖춘 Txt-to-SQL Python 패키지.
- [Langfuse](https://github.com/langfuse/langfuse) -  오픈소스 LLM 엔지니어링 플랫폼 🪢 추적, 평가, 프롬프트 관리, 플레이그라운드. 
- [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) - LLM 애플리케이션을 구축하고 자동 최적화하는 라이브러리.
- [Guidance](https://github.com/microsoft/guidance) — Microsoft의 Python 라이브러리로, Handlebars 템플릿을 사용해 생성, 프롬프팅, 논리 제어를 결합합니다.
- [Evidently](https://github.com/evidentlyai/evidently) — ML 및 LLM 기반 시스템을 평가하고 테스트하며 모니터링하는 오픈소스 프레임워크.
- [Chainlit](https://docs.chainlit.io/overview) — 챗봇 인터페이스를 만드는 Python 라이브러리.
- [Guardrails.ai](https://www.guardrailsai.com/docs/) — 출력을 검증하고 실패 시 재시도하는 Python 라이브러리입니다. 아직 알파 버전이므로 불안정한 부분과 버그가 있을 수 있습니다.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — 프롬프트 템플릿, 함수 체이닝, 벡터화된 메모리, 지능형 계획을 지원하는 Microsoft의 Python/C#/Java 라이브러리.
- [Prompttools](https://github.com/hegelai/prompttools) — 모델, 벡터 DB, 프롬프트를 테스트하고 평가하는 오픈소스 Python 도구.
- [Outlines](https://github.com/normal-computing/outlines) — 프롬프트를 간소화하고 생성을 제약하는 도메인 특화 언어를 제공하는 Python 라이브러리.
- [Promptify](https://github.com/promptslab/Promptify) — 언어 모델로 NLP 작업을 수행하기 위한 소규모 Python 라이브러리.
- [Scale Spellbook](https://scale.com/spellbook) — 언어 모델 앱을 구축하고 비교해 출시하는 유료 제품.
- [PromptPerfect](https://promptperfect.jina.ai/prompts) — 프롬프트를 테스트하고 개선하는 유료 제품.
- [Weights & Biases](https://wandb.ai/site/solutions/llmops) — 모델 학습 및 프롬프트 엔지니어링 실험을 추적하는 유료 제품.
- [OpenAI Evals](https://github.com/openai/evals) — 언어 모델과 프롬프트의 작업 성능을 평가하기 위한 오픈소스 라이브러리.

- [Arthur Shield](https://www.arthur.ai/get-started) — 유해성, 환각, 프롬프트 인젝션 등을 탐지하는 유료 제품.
- [LMQL](https://lmql.ai) — 유형 지정 프롬프팅, 제어 흐름, 제약 조건 및 도구를 지원하는 LLM 상호작용용 프로그래밍 언어.
- [ModelFusion](https://github.com/lgrammel/modelfusion) - LLM 및 기타 ML 모델(음성-텍스트 변환, 텍스트-음성 변환, 이미지 생성) 기반 앱을 구축하는 TypeScript 라이브러리.
- [OneKE](https://openspg.yuque.com/ndx6g9/ps5q6b/vfoi61ks3mqwygvy) — 지식 그래프와 자연어 처리 기술을 활용하는 중국어·영어 이중 언어 지식 추출 모델.
- [llm-ui](https://github.com/llm-ui-kit/llm-ui) - LLM UI 구축을 위한 React 라이브러리.
- [Wordware](https://www.wordware.ai) - 비기술 분야 전문가가 AI 엔지니어와 협력해 특정 작업용 AI 에이전트를 만드는 웹 기반 IDE입니다. 로우코드/노코드 블록 대신 프롬프팅을 새로운 프로그래밍 언어로 다룹니다.
- [Wallaroo.AI](https://github.com/WallarooLabs) - 클라우드부터 엣지까지 모든 환경에서 어떤 모델이든 대규모로 배포·관리·최적화합니다. Python 노트북에서 몇 분 만에 추론을 시작할 수 있습니다.
- [Dify](https://github.com/langgenius/dify) - AI 워크플로, 모델 관리 및 프로덕션 배포를 간소화하는 직관적인 인터페이스를 갖춘 오픈소스 LLM 앱 개발 플랫폼.
- [LazyLLM](https://github.com/LazyAGI/LazyLLM) - 멀티 에이전트 LLM 애플리케이션을 쉽고 간단하게 구축하고 모델 배포와 미세 조정을 지원하는 오픈소스 LLM 앱.
- [MemFree](https://github.com/memfreeme/memfree) - 오픈소스 하이브리드 AI 검색 엔진. 인터넷, 북마크, 노트, 문서에서 정확한 답변을 즉시 얻고 원클릭으로 배포할 수 있습니다.
- [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) - RAG를 위한 오픈소스 AutoML 도구. RAG 답변 품질을 자동으로 최적화합니다. 생성 평가 데이터셋부터 최적화된 RAG 파이프라인 배포까지 지원합니다.
- [Epsilla](https://github.com/epsilla-cloud) - 자체 데이터와 지식을 활용하는 올인원 LLM 에이전트 플랫폼으로, 첫날부터 프로덕션 준비가 된 AI 에이전트를 제공합니다.
- [Arize-Phoenix](https://phoenix.arize.com/) - 노트북 환경에서 실행되는 ML 관측성 오픈소스 도구입니다. LLM, CV 및 표 형식 모델을 모니터링하고 미세 조정합니다.
- [LLM]([https://github.com/simonw/llm) - 원격 API와 로컬 설치·실행 모델을 모두 지원하는 대규모 언어 모델 상호작용용 CLI 유틸리티 및 Python 라이브러리.
- [Just-Chat](https://github.com/longevity-genie/just-chat) - LLM 에이전트를 간단하고 빠르게 만들고 대화하세요!
- [Agentic Radar](https://github.com/splx-ai/agentic-radar) - 에이전트 워크플로를 위한 오픈소스 CLI 보안 스캐너입니다. 워크플로 소스 코드를 검사해 취약점을 찾아내고, 상세 보안 보고서와 함께 대화형 시각화를 생성합니다. LangGraph, CrewAI, n8n, OpenAI Agents 등을 지원합니다.
- [LangWatch](https://github.com/langwatch/langwatch) - 오픈소스 LLM 관측성, 프롬프트 평가 및 프롬프트 최적화 플랫폼.
- [TensorZero](https://www.tensorzero.com/) - 프로덕션급 LLM 애플리케이션 구축을 위한 오픈소스 프레임워크입니다. LLM 게이트웨이, 관측성, 최적화, 평가 및 실험 기능을 하나로 통합합니다.

</details>

## LLM 튜토리얼 및 강의
- [Andrej Karpathy Series](https://www.youtube.com/@AndrejKarpathy) - 제가 가장 좋아하는 시리즈!
- [Umar Jamil Series](https://www.youtube.com/@umarjamilai) - 놓치지 말아야 할 고품질의 교육용 영상.
- [Alexander Rush Series](https://rush-nlp.com/projects/) - 놓치지 말아야 할 고품질의 교육 자료.
- [llm-course](https://github.com/mlabonne/llm-course) - 로드맵과 Colab 노트북으로 대규모 언어 모델(LLM)을 배우는 강의.
- [UWaterloo CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/) - 파운데이션 모델의 최신 발전.
- [CS25-Transformers United](https://web.stanford.edu/class/cs25/)
- [ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Princeton: Understanding Large Language Models](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
- [CS324 - Large Language Models](https://stanford-cs324.github.io/winter2022/)
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)
- [A Visual Guide to Mamba and State Space Models](https://maartengrootendorst.substack.com/p/a-visual-guide-to-mamba-and-state?utm_source=multiple-personal-recommendations-email&utm_medium=email&open=false)
- [Let's build GPT: from scratch, in code, spelled out.](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [minbpe](https://www.youtube.com/watch?v=zduSFxRajkE&t=1157s) - LLM 토큰화에 흔히 사용되는 바이트 페어 인코딩(BPE) 알고리즘의 간결하고 깔끔한 코드.
- [femtoGPT](https://github.com/keyvank/femtoGPT) - 최소 구성의 생성형 사전 학습 Transformer를 순수 Rust로 구현했습니다.
- [Neurips2022-Foundational Robustness of Foundation Models](https://nips.cc/virtual/2022/tutorial/55796)
- [ICML2022-Welcome to the "Big Model" Era: Techniques and Systems to Train and Serve Bigger Models](https://icml.cc/virtual/2022/tutorial/18440)
- [GPT in 60 Lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
- [LLM‑RL‑Visualized (EN)](https://github.com/changyeyu/LLM-RL-Visualized/blob/master/src/README_EN.md) | [LLM‑RL‑Visualized (中文)](https://github.com/changyeyu/LLM-RL-Visualized) - LLM/RL 알고리즘 맵 100개 이상📚.


## LLM 도서
- [Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs](https://amzn.to/3GUlRng) - 다양한 기능을 보여 주는 [GitHub 저장소](https://github.com/benman1/generative_ai_with_langchain)도 함께 제공됩니다.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - 나만의 작동하는 LLM을 구축하는 방법을 안내합니다.
- [BUILD GPT: HOW AI WORKS](https://www.amazon.com/dp/9152799727?ref_=cm_sw_r_cp_ud_dp_W3ZHCD6QWM3DPPC0ARTT_1) - 생성형 사전 학습 Transformer, 즉 GPT를 처음부터 직접 코딩하는 방법을 설명합니다.
- [Hands-On Large Language Models: Language Understanding and Generation](https://www.llm-book.com/) - 275개 이상의 맞춤형 삽화와 함께 대규모 언어 모델의 세계를 살펴보는 그림 가이드!
- [The Chinese Book for Large Language Models](http://aibox.ruc.edu.cn/zws/index.htm) - [*A Survey of Large Language Models*](https://arxiv.org/abs/2303.18223)를 바탕으로 한 입문용 LLM 교재.

## LLM에 관한 훌륭한 생각
- [Why did all of the public reproduction of GPT-3 fail?](https://jingfengyang.github.io/gpt)
- [A Stage Review of Instruction Tuning](https://yaofu.notion.site/June-2023-A-Stage-Review-of-Instruction-Tuning-f59dbfc36e2d4e12a33443bd6b2012c2)
- [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/)
- [Why you should work on AI AGENTS!](https://www.youtube.com/watch?v=fqVLjtvWgq8)
- [Google "We Have No Moat, And Neither Does OpenAI"](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither)
- [AI competition statement](https://petergabriel.com/news/ai-competition-statement/)
- [Prompt Engineering](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/)
- [Noam Chomsky: The False Promise of ChatGPT](https://www.nytimes.com/2023/03/08/opinion/noam-chomsky-chatgpt-ai.html)
- [Is ChatGPT 175 Billion Parameters? Technical Analysis](https://orenleung.super.site/is-chatgpt-175-billion-parameters-technical-analysis)
- [The Next Generation Of Large Language Models ](https://www.notion.so/Awesome-LLM-40c8aa3f2b444ecc82b79ae8bbd2696b)
- [Large Language Model Training in 2023](https://research.aimultiple.com/large-language-model-training/)
- [How does GPT Obtain its Ability? Tracing Emergent Abilities of Language Models to their Sources](https://yaofu.notion.site/How-does-GPT-Obtain-its-Ability-Tracing-Emergent-Abilities-of-Language-Models-to-their-Sources-b9a57ac0fcf74f30a1ab9e3e36fa1dc1)
- [Open Pretrained Transformers](https://www.youtube.com/watch?v=p9IxoSkvZ-M&t=4s)
- [Scaling, emergence, and reasoning in large language models](https://docs.google.com/presentation/d/1EUV7W7X_w0BDrscDhPg7lMGzJCkeaPkGCJ3bN8dluXc/edit?pli=1&resourcekey=0-7Nz5A7y8JozyVrnDtcEKJA#slide=id.g16197112905_0_0)

## 기타


- [Emergent Mind](https://www.emergentmind.com) - GPT-4가 선별하고 설명하는 최신 AI 뉴스.
- [ShareGPT](https://sharegpt.com) - 가장 흥미로운 ChatGPT 대화를 한 번의 클릭으로 공유하세요.
- [Major LLMs + Data Availability](https://docs.google.com/spreadsheets/d/1bmpDdLZxvTCleLGVPgzoMTQ0iDP2-7v7QziPrzPdHyM/edit#gid=0)
- [500+ Best AI Tools](https://vaulted-polonium-23c.notion.site/500-Best-AI-Tools-e954b36bf688404ababf74a13f98d126)
- [Cohere Summarize Beta](https://txt.cohere.ai/summarize-beta/) - 텍스트 요약을 위한 새로운 엔드포인트인 Cohere Summarize Beta를 소개합니다.
- [chatgpt-wrapper](https://github.com/mmabrouk/chatgpt-wrapper) - ChatGPT Wrapper는 ChatGPT와 상호작용할 수 있는 오픈소스 비공식 Python API 및 CLI입니다.
- [Cursor](https://www.cursor.so) - 강력한 AI로 코드를 작성하고 편집하며 대화하세요.
- [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) - GPT-4 언어 모델의 기능을 보여 주는 실험적 오픈소스 애플리케이션. 
- [OpenAGI](https://github.com/agiresearch/OpenAGI) - LLM과 도메인 전문가가 만나는 곳.
- [EasyEdit](https://github.com/zjunlp/EasyEdit) - 대규모 언어 모델을 편집하기 쉬운 프레임워크.
- [chatgpt-shroud](https://github.com/guyShilo/chatgpt-shroud) - OpenAI의 ChatGPT용 Chrome 확장 프로그램으로, 채팅 기록을 쉽게 숨기거나 다시 표시해 사용자 개인정보를 보호합니다. 화면 공유 중 개인정보 보호에 적합합니다.
- [AI For Developers](https://aifordevelopers.org) - 개발자를 위한 AI 도구 및 에이전트 목록

## 기여하기

이 저장소는 활발히 운영되고 있으며 여러분의 기여를 언제나 환영합니다!

LLM에 적합한지 확신이 서지 않는 일부 풀 리퀘스트는 열린 상태로 두겠습니다. 👍를 추가해 투표할 수 있습니다.

---

이 주관적인 목록에 관한 질문이 있으면 chengxin1998@stu.pku.edu.cn으로 언제든지 문의해 주세요.

[^1]: 이는 법률 자문이 아닙니다. 자세한 내용은 모델의 원저자에게 문의하세요.
