# 太棒了 RLHF (RL有人類反馈)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)  ![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=opendilab.awesome-RLHF&left_text=Visitors) ![GitHub stars](https://img.shields.io/github/stars/opendilab/awesome-RLHF?color=yellow) ![GitHub forks](https://img.shields.io/github/forks/opendilab/awesome-RLHF?color=9cf) [![GitHub license](https://img.shields.io/github/license/opendilab/awesome-RLHF)](https://github.com/opendilab/awesome-RLHF/blob/main/LICENSE)

這是一份研究文件集,供作**《用人類的反馈來學習實力》**(RLHF). 而主目錄會持續更新,以追蹤 RLHF.

歡迎來到跟蹤和明星!


## 表格

- [太棒了 RLHF (RL有人類反馈)](#awesome-rlhf-rl-with-human-feedback)
  - [表格](#table-of-contents)
  - [概述 RLHF](#overview-of-rlhf)
    - [详细说明](#detailed-explanation)
  - [文件](#papers)
    - [2026](#2026)
    - [2025](#2025)
    - [2024](#2024)
    - [2023](#2023)
    - [2022](#2022)
    - [2021](#2021)
    - [2020年及之前](#2020-and-before)
  - [密碼](#codebases)
  - [數據集](#dataset)
  - [部落格](#blogs)
  - [书籍](#books)
  - [其他語言支援](#other-language-support)
  - [捐款](#contributing)
  - [執照](#license)

## 概述 RLHF

想法 RLHF 即使用強化學習的方法, RLHF 已讓語言模型開始將一個受過一般文體數據訓練的模型 与複雜的人類價值相配合。

- RLHF 大型語言模型LLM)

![image info](./overview_chatgpt.png)

- RLHF (例如) Atari)

![image info](./overview_video_game.png)

### 详细说明 

** (下一节是自動產生的 ) ChatGPT)**

RLHF 通常是指"用人類的回馈學習力". 強化學習(RL)是一種機械學習, 在 RLHF這能幫助它更快更准确地學習。

RLHF 包括機器人、遊戲、個人化建議系統等。 該計畫旨在處理RL的挑戰,

利用人反馈加强学习(RLHF)是人工智能研究的一個快速發展的领域,有數種先进的技術被研發,以改善人工智能的性能. RLHF 制度。 以下是一些例子:

- `Inverse Reinforcement Learning (IRL)`: IRL 是一種讓代理員從人類的回應中學習獎勵功能的技術,而不是依靠預定的獎勵功能. 這讓代理商有可能學習更複雜的回應訊號,

- `Apprenticeship Learning`: 學習是结合 IRL 藉由監督學習, 這能幫助代理商更快、更有效地學習,

- `Interactive Machine Learning (IML)`: IML 這項技術涉及代理商與人類專家之間的動力交換, 這可以幫助代理商更快、更高效的學習, 因為它可以在學習过程中的每個階段接收到對自己的行為的回應。

- `Human-in-the-Loop Reinforcement Learning (HITLRL)`: HITLRL 包括獎勵、動作選擇和政策优化等。 有助于提高 RLHF 利用人類和機器的強項

以下是一些用人類回應學習的強化例子(RLHF):

- `Game Playing`:在遊戲中,人類的反馈可以幫助代理學習在不同遊戲情景下有效的策略和策略. 例如,在Go的流行遊戲中,人類專家可以向代理商提供對其動作的回應,幫助其改进其遊戲和决策.

- `Personalized Recommendation Systems`:在建議系統中,人類的回馈可以幫助代理者學習個人使用者的偏好,使得有可能提供個性化的建議. 例如,

- `Robotics`:在機器人中,人的反馈可以幫助代理學習如何安全高效地与物理環境相互作用. 例如, 機器人可以學會更快速地在新環境中航行,

- `Education`:在教育方面,人反馈可以幫助代理學習如何更有效地教學生. 例如,一位基于人工智能的教師可以使用老師的回馈,而老師的教学策略對不同的學生最有效,有助于使學習經歷個人化。

## 文件

你也可以 [參考此連結](https://codekidz.ai/lesson-intro/awesome-rlhf-367190) 以取得人工智能的讀紙經驗。

```
format:
- [title](paper link) [links]
  - author1, author2, and author3...
  - publisher
  - keyword
  - code
  - experiment environments and datasets
```
### 2026

- [Why DPO is a Misspecified Estimator and How to Fix It](https://openreview.net/pdf?id=btEiAfnLsX)
  - Aditya Gopalan, Sayak Ray Chowdhury, Debangshu Banerjee
  - 關鍵詞: DPO, RLHF, Preference, Alignment, LLM

- [What's In My Human Feedback? Learning Interpretable Descriptions of Preference Data](https://openreview.net/pdf?id=sC6A1bFDUt)
  - Rajiv Movva, Smitha Milli, Sewon Min, Emma Pierson
  - 關鍵詞: RLHF, Preference, Alignment, Safety, Human Feedback

- [Multiplayer Nash Preference Optimization](https://openreview.net/pdf?id=x7aLhLMVn1)
  - Fang Wu, Xu Huang, Weihao Xuan, Zhiwei Zhang, Yijia Xiao, Guancheng Wan, Xiaomin Li, Bing Hu, Peng Xia, Jure Leskovec, Yejin Choi
  - 關鍵詞: PPO, RLHF, Preference, Alignment, LLM

- [Token-Importance Guided Direct Preference Optimization](https://openreview.net/pdf?id=cMEnMVvMw9)
  - Ning Yang, Hai Lin, Yibo Liu, Baoliang Tian, Guoqing Liu, Haijun Zhang
  - 關鍵詞: DPO, RLHF, Preference, Alignment, LLM

- [SafeDPO: A Simple Approach to Direct Preference Optimization with Enhanced Safety](https://openreview.net/pdf?id=PJdw4VBsXD)
  - Geon-Hyeong Kim, Yu Jin Kim, Byoungjip Kim, Honglak Lee, Kyunghoon Bae, Youngsoo Jang, Moontae Lee
  - 關鍵詞: DPO, RLHF, Reward Model, Preference, Alignment

- [BaseReward: A Strong Baseline for Multimodal Reward Model](https://openreview.net/pdf?id=EuN5iszF0a)
  - YiFan Zhang, Haihua Yang, Huanyu Zhang, Yang Shi, Zezhou Chen, Haochen Tian, Chaoyou Fu, Kai WU, Bo Cui, Xu Wang, Jianfei Pan, Haotian Wang, Zhang Zhang, Liang Wang
  - 關鍵詞: RLHF, Reward Model, Preference, Multimodal, LLM

- [The Alignment Auditor: A Bayesian Framework for Verifying and Refining LLM Objectives](https://openreview.net/pdf?id=CH7TfRLqSF)
  - Matthieu Bou, Nyal Patel, Arjun Jagota, Satyapriya Krishna, Sonali Parbhoo
  - 關鍵詞: RLHF, Preference, Alignment, Safety, LLM

- [Uni-DPO: A Unified Paradigm for Dynamic Preference Optimization of LLMs](https://openreview.net/pdf?id=G7DBGlgjjp)
  - Shangpin Peng, Weinong Wang, Zhuotao Tian, Senqiao Yang, Xing W, Haotian Xu, Chengquan Zhang, Takashi Isobe, Baotian Hu, Min Zhang
  - 關鍵詞: DPO, RLHF, Preference, Multimodal, LLM

- [Learning to summarize user information for personalized reinforcement learning from human feedback](https://openreview.net/pdf?id=Ar078WR3um)
  - HyunJi Nam, Yanming Wan, Mickel Liu, Peter F. Ahnn, Jianxun Lian, Natasha Jaques
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, LLM

- [Token-Guard: Towards Token-Level Hallucination Control via Self-Checking Decoding](https://openreview.net/pdf?id=5fCDEz43ya)
  - Yifan Zhu, Huiqiang Rong, Haoran Luo
  - 關鍵詞: RLHF, LLM, Token-level, Reinforcement Learning, Human Feedback

- [Pretrain Value, Not Reward: Decoupled Value Policy Optimization](https://openreview.net/pdf?id=qirGds1BmK)
  - Chenghua Huang, Lu Wang, Fangkai Yang, Pu Zhao, Qingwei Lin, Dongmei Zhang, Saravan Rajmohan
  - 關鍵詞: RLHF, Reward Model, Preference, LLM, Optimization

- [P$^2$-DPO: Grounding Hallucination in Perceptual Processing via Calibration Direct Preference Optimization](https://openreview.net/pdf?id=ekOwxTn65Y)
  - ruipeng zhang, Zhihao Li, Haozhang Yuan, C.L.Philip Chen, Tong Zhang
  - 關鍵詞: DPO, Preference, Optimization, Human Feedback

- [Unifying Stable Optimization and Reference Regularization in RLHF](https://openreview.net/pdf?id=QpqBqCTtW4)
  - Li He, Qiang Qu, He Zhao, Stephen Wan, Dadong Wang, Lina Yao, Tongliang Liu
  - 關鍵詞: RLHF, Preference, Alignment, Optimization, Reinforcement Learning

- [Text2Grad: Reinforcement Learning from Natural Language Feedback](https://openreview.net/pdf?id=SIE9fNq8lk)
  - Hanyang Wang, Lu Wang, Chaoyun Zhang, Tianjun Mao, Si Qin, Qingwei Lin, Saravan Rajmohan, Dongmei Zhang
  - 關鍵詞: RLHF, Reward Model, Alignment

- [ARMOR: Aligning Secure and Safe Large Language  Models via Meticulous Reasoning](https://openreview.net/pdf?id=Wx5xG7FPXK)
  - Zhengyue Zhao, YingziYingzi Ma, Somesh Jha, Marco Pavone, Patrick McDaniel, Chaowei Xiao
  - 關鍵詞: RLHF, Alignment, Safety, LLM, Optimization

- [Reward Model Routing in Alignment](https://openreview.net/pdf?id=i3OKIHSsHC)
  - Xinle Wu, Yao Lu
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, LLM

- [CogFlow: Bridging Perception and Reasoning through Knowledge Internalization for Visual Mathematical Problem Solving](https://openreview.net/pdf?id=sZ0DsaRsd4)
  - Shuhang Chen, Yunqiu Xu, Junjie Xie, Aojun Lu, Tao Feng, ZEYING HUANG, ZHANG NING, Yi Sun, Yi Yang, Hangjie Yuan
  - 關鍵詞: Reward Model, Multimodal, Optimization

- [All Roads Lead to Likelihood: The Value of Reinforcement Learning in Fine-Tuning](https://openreview.net/pdf?id=sCL5mSTpKm)
  - Gokul Swamy, Sanjiban Choudhury, Wen Sun, Steven Wu, Drew Bagnell
  - 關鍵詞: PPO, Reward Model, Preference, Reinforcement Learning

- [General Exploratory Bonus for Optimistic Exploration in RLHF](https://openreview.net/pdf?id=hh91yCiqgS)
  - Wendi Li, Changdae Oh, Sharon Li
  - 關鍵詞: RLHF, Alignment, Reinforcement Learning, Human Feedback

- [RE-PO: Robust Enhanced Policy Optimization as a General Framework for LLM Alignment](https://openreview.net/pdf?id=jDKpOvTCM8)
  - Xiaoyang Cao, Zelai Xu, Mo Guang, Kaiwen Long, Michiel A. Bakker, Yu Wang, Chao Yu
  - 關鍵詞: DPO, RLHF, Preference, Alignment, LLM

- [Learning Correlated Reward Models: Statistical Barriers and Opportunities](https://openreview.net/pdf?id=TbEyl6krsY)
  - Yeshwanth Cherapanamjeri, Constantinos Costis Daskalakis, Gabriele Farina, Sobhan Mohammadpour
  - 關鍵詞: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Verification and Co-Alignment via Heterogeneous Consistency for Preference-Aligned LLM Annotations](https://openreview.net/pdf?id=jugY302BAh)
  - Cheng Chen, Haiyan Yin, Ivor Tsang
  - 關鍵詞: RLHF, Preference, Alignment, LLM

- [Disentangling Length Bias in Preference Learning via Response-Conditioned Modeling](https://openreview.net/pdf?id=hKxYESOzen)
  - Jianfeng Cai, Jinhua Zhu, Ruopei Sun, Yue Wang, Li Li, Wengang Zhou, Houqiang Li
  - 關鍵詞: DPO, RLHF, Reward Model, Preference, LLM

- [Enforcing Axioms for AI Alignment under Loss-Based Rules](https://openreview.net/pdf?id=MpYSoTK65s)
  - Alexandros Hollender, Sonja Kraiczy
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, Reinforcement Learning

- [OPPO: Accelerating PPO-based RLHF via Pipeline Overlap](https://openreview.net/pdf?id=31Mr6wLBeF)
  - Kaizhuo Yan, YingJie Yu, Yifan Yu, Haizhong Zheng, Fan Lai
  - 關鍵詞: PPO, RLHF, Reward Model, Preference, LLM

- [QuRL: Rubrics As Judge For Open-Ended Question Answering](https://openreview.net/pdf?id=DrhWTuhtYq)
  - Xiyu Wei, Qingwei Zong, Xiaoguang Li, Eugene J. Yu, Sujian Li
  - 關鍵詞: LLM, Optimization, Reinforcement Learning, Human Feedback

- [Translate Policy to Language: Flow Matching Generated Rewards for LLM Explanations](https://openreview.net/pdf?id=zmZsWCGzUV)
  - Xinyi Yang, Liang Zeng, Heng Dong, Chao Yu, Xiaoran Wu, Huazhong Yang, Yu Wang, Milind Tambe, Tonghan Wang
  - 關鍵詞: RLHF, LLM, Reinforcement Learning

- [Skywork-Reward-V2: Scaling Preference Data Curation via Human-AI Synergy](https://openreview.net/pdf?id=ofgxkMLqic)
  - Chris Yuhao Liu, Liang Zeng, Yuzhen Xiao, Jujie He, Jiacai Liu, Chaojie Wang, Rui Yan, Wei Shen, Fuxiang Zhang, Jiacheng Xu, Yang Liu
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, Safety

- [Stackelberg Learning from Human Feedback: Preference Optimization as a Sequential Game](https://openreview.net/pdf?id=vc9Tj11LNE)
  - Barna Pásztor, Thomas Kleine Buening, Andreas Krause
  - 關鍵詞: RLHF, Preference, Alignment, Nash, Optimization

- [Swap-guided Preference Learning for Personalized Reinforcement Learning from Human Feedback](https://openreview.net/pdf?id=nc28mSbyVG)
  - Gihoon Kim, Euntai Kim
  - 關鍵詞: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Beyond Binary Preferences: A Principled Framework for Reward Modeling with Ordinal Feedback](https://openreview.net/pdf?id=mteZOi0xyu)
  - Amirhossein Afsharrad, Ruida Zhou, Luca Viano, Sanjay Lall, Mohammad Ghavamzadeh
  - 關鍵詞: Reward Model, Preference, Safety, Human Feedback

- [RLBFF: Binary Flexible Feedback to bridge between Human Feedback & Verifiable Rewards](https://openreview.net/pdf?id=P3R3S6S5Km)
  - Zhilin Wang, Jiaqi Zeng, Olivier Delalleau, Ellie Evans, Daniel Egert, Hoo-Chang Shin, Felipe Soares, Yi Dong, Oleksii Kuchaiev
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, LLM

- [Reward Models Inherit Value Biases from Pretraining](https://openreview.net/pdf?id=dT399j1Azv)
  - Brian Christian, Jessica A F Thompson, Elle, Vincent Adam, Hannah Rose Kirk, Christopher Summerfield, Tsvetomira Dumbalska
  - 關鍵詞: Reward Model, Preference, Alignment, Safety, LLM

- [Semantic-aware Wasserstein Policy Regularization for Large Language Model Alignment](https://openreview.net/pdf?id=sUac3QDbAs)
  - Byeonghu Na, Hyungho Na, Yeongmin Kim, Suhyeon Jo, HeeSun Bae, Mina Kang, Il-chul Moon
  - 關鍵詞: RLHF, Preference, Alignment, LLM, Reinforcement Learning

- [RewardBench 2: Advancing Reward Model Evaluation](https://openreview.net/pdf?id=fb0G86Dewb)
  - Saumya Malik, Valentina Pyatkin, Sander Land, Jacob Morrison, Noah A. Smith, Hannaneh Hajishirzi, Nathan Lambert
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, Safety

- [Causally Robust Reward Learning from Reason-Augmented Preference Feedback](https://openreview.net/pdf?id=wviOOX5JVn)
  - Minjune Hwang, Yigit Korkmaz, Daniel Seita, Erdem Biyik
  - 關鍵詞: Reward Model, Preference

- [COMAL: A Convergent Meta-Algorithm for Aligning LLMs with General Preferences](https://openreview.net/pdf?id=OsrE5DJ9Fu)
  - Yixin Liu, Argyris Oikonomou, Weiqiang Zheng, Yang Cai, Arman Cohan
  - 關鍵詞: RLHF, Preference, Alignment, Nash, Optimization

- [Displacement-Resistant Extensions of DPO with Nonconvex $f$-Divergences](https://openreview.net/pdf?id=rTte3iUsXV)
  - Idan Pipano, Shoham Sabach, Kavosh Asadi, Mohammad Ghavamzadeh
  - 關鍵詞: DPO, RLHF

- [Keep the Best, Forget the Rest: Reliable Alignment with Order-Aware Preference Optimization](https://openreview.net/pdf?id=LrHfYPFTtg)
  - Jiahui Zhu, Yuanjie Shi, Xiyue Peng, Xin Liu, Yan Yan, Honghao Wei
  - 關鍵詞: DPO, PPO, RLHF, Preference, Alignment

- [Cultivating Pluralism In Algorithmic Monoculture: The Community Alignment Dataset](https://openreview.net/pdf?id=4NtoAVqfhA)
  - Lily H Zhang, Smitha Milli, Karen Long Jusko, Jonathan Smith, Brandon Amos, Wassim Bouaziz, Manon Revel, Jack Kussman, Yasha Sheynin, Lisa Titus, Bhaktipriya Radharapu, Jane Yu, Vidya Sarma, Kristopher Rose, Maximilian Nickel
  - 關鍵詞: Preference, Alignment, LLM

- [Fair Reinforcement Learning for Just AI](https://openreview.net/pdf?id=XNNDODynCl)
  - Ezgi Korkmaz
  - 關鍵詞: Preference, Alignment, Optimization, Reinforcement Learning, Human Feedback

- [Robust Reward Modeling via Causal Rubrics](https://openreview.net/pdf?id=oP99JQiDYp)
  - Pragya Srivastava, Harman Singh, Rahul Madhavan, Gandharv Patil, Sravanti Addepalli, Arun Suggala, Rengarajan Aravamudhan, Soumya Sharma, Anirban Laha, Aravindan Raghuveer, Karthikeyan Shanmugam, Doina Precup
  - 關鍵詞: DPO, Reward Model, Alignment, Safety, LLM

- [Escaping Policy Contraction: Contraction-Aware PPO (CaPPO) for Stable Language Model Fine-Tuning](https://openreview.net/pdf?id=vDlkJewkDu)
  - Dun Yuan, Di Wu, Xue Liu
  - 關鍵詞: PPO, RLHF, Alignment, Optimization, Reinforcement Learning

- [Beyond Pairwise: Empowering LLM Alignment With (Ranked) Choice Modeling](https://openreview.net/pdf?id=fCaxd9EKzl)
  - Yuxuan Tang, Yifan Feng
  - 關鍵詞: DPO, PPO, Preference, Alignment, LLM

- [Learning Ordinal Probabilistic Reward from Preferences](https://openreview.net/pdf?id=0Vf5trUAVF)
  - Longze Chen, Lu Wang, Renke Shan, Ze Gong, Run Luo, Jiaming Li, Jing Luo, Qiyao Wang, Min Yang
  - 關鍵詞: Reward Model, LLM

- [Eliminating Inductive Bias in Reward Models with Information-Theoretic Guidance](https://openreview.net/pdf?id=57YfUhcYXd)
  - Zhuo Li, Pengyu Cheng, Zhechao Yu, FeifeiTong, Anningzhe Gao, Tsung-Hui Chang, Xiang Wan, erchao.zec, xiaoxi jiang, guanjunjiang
  - 關鍵詞: RLHF, Reward Model, Preference, LLM, Optimization

- [Alignment-Weighted DPO:  A principled reasoning approach to improve safety alignment](https://openreview.net/pdf?id=OuMNJoKJBQ)
  - Mengxuan Hu, Vivek Datla, Anoop Kumar, Zihan Guan, Sheng Li, Alfy Samuel, Daben Liu
  - 關鍵詞: DPO, RLHF, Preference, Alignment, Safety

- [Evaluating and Improving Cultural Awareness of Reward Models for LLM Alignment](https://openreview.net/pdf?id=WhSzqsMhfZ)
  - Hongbin Zhang, Kehai Chen, Xuefeng Bai, Yang Xiang, Min Zhang
  - 關鍵詞: Reward Model, Preference, Alignment, LLM, Reinforcement Learning

- [Balancing the Experts: Unlocking LoRA-MoE for GRPO via Mechanism-Aware Rewards](https://openreview.net/pdf?id=rhD7ZuFAjU)
  - Changlian Ma, Zizheng Huang, Xiangyu Zeng, Yi Wang, Cheng Liang, Kun Tian, Xinhai Zhao, Limin Wang
  - 關鍵詞: Alignment, Multimodal, Optimization, Reinforcement Learning

- [Bradley-Terry and Multi-Objective Reward Modeling Are Complementary](https://openreview.net/pdf?id=3QHKJcwnpb)
  - Zhiwei Zhang, Hui Liu, Xiaomin Li, Zhenwei Dai, Jingying Zeng, Fali Wang, Minhua Lin, Ramraj Chandradevan, Linlin Wu, Zhen Li, Chen Luo, Zongyu Wu, Xianfeng Tang, Qi He, Suhang Wang
  - 關鍵詞: RLHF, Reward Model, Preference, LLM, Reinforcement Learning

- [Beyond RLHF and NLHF: Population-Proportional Alignment under an Axiomatic Framework](https://openreview.net/pdf?id=Egmvi2RWnj)
  - Kihyun Kim, Jiawei Zhang, Asuman E. Ozdaglar, Pablo A. Parrilo
  - 關鍵詞: Preference, Alignment

- [ActiveDPO: Active Direct Preference Optimization for Sample-Efficient Alignment](https://openreview.net/pdf?id=RD4XgyVyGh)
  - Xiaoqiang Lin, Arun Verma, Zhongxiang Dai, Daniela Rus, See-Kiong Ng, Bryan Kian Hsiang Low
  - 關鍵詞: DPO, Reward Model, Preference, Alignment, LLM

- [BranchGRPO: Stable and Efficient GRPO with Structured Branching in Diffusion Models](https://openreview.net/pdf?id=T2nP2IQasd)
  - Yuming Li, Yikai Wang, Yuying zhu, Zhongyu Zhao, Ming Lu, Qi She, Shanghang Zhang
  - 關鍵詞: Preference, Alignment, Optimization

- [Safety Game: Inference-Time Alignment of Black-Box LLMs via Constrained Optimization](https://openreview.net/forum?id=7Nn3SKS6yL)
  - Tuan Nguyen, Long Tran-Thanh
  - 關鍵詞: Alignment, Safety, LLM, Reinforcement Learning, Human Feedback

- [Threshold-Guided Optimization for Visual Generative Models](https://openreview.net/forum?id=B258ihKAk9)
  - Jinbin Bai, Yu Lei, Qingyu Shi, Aosong Feng, Yi Xin, Zhuoran Zhao, Fei Shen, Kaidong Yu, Xiangtai Li
  - 關鍵詞: Reward Model, Preference, Alignment, Diffusion, Optimization

- [Noise-corrected GRPO: From Noisy Rewards to Unbiased Gradients](https://openreview.net/forum?id=mnU8odBWYE)
  - Omar Elmansouri, Fathinah Izzati, Mohamed El Amine Seddik, Salem Lahlou
  - 關鍵詞: RLHF, Reward Model, LLM, Optimization, Reinforcement Learning

- [Controllable and explainable personality sliders for LLMs at inference time](https://openreview.net/forum?id=6TuaAw1DkF)
  - Florian Hoppe, David Khachaturov, Robert Mullins, Mark Huasong Meng
  - 關鍵詞: PPO, RLHF, Alignment, LLM, Optimization

- [PS-PPO : Prefix-Sampling PPO for Critic-Free RLHF](https://openreview.net/forum?id=flDa73nyVx)
  - Doo Hwan Hwang, Kee-Eung Kim
  - 關鍵詞: PPO, RLHF, Optimization, Reinforcement Learning, Human Feedback

- [Unbiased Reward Modeling from Implicit Preference](https://openreview.net/forum?id=membbcuXeR)
  - Eric Wang, Haocheng Yang, Licheng Pan, Lei Shen, Xiaoxi Li, Yinuo Wang, Zhichao Chen, Yuan Lu, Haoxuan Li, Zhouchen Lin
  - 關鍵詞: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [How RLHF Amplifies Sycophancy](https://openreview.net/forum?id=XN4pWKtA5h)
  - Itai Shapira, Gerdus Benade, Ariel Procaccia
  - 關鍵詞: Preference, Alignment, Optimization, Human Feedback

- [Real-Time Aligned Reward Model beyond Semantics](https://openreview.net/forum?id=wz2zK4l3YJ)
  - Zixuan Huang, Xin Xia, Yuxi Ren, Jianbin Zheng, Xuefeng Xiao, Hongyan Xie, Huaqiu Li, Songshi Liang, Zhongxiang Dai, Fuzhen Zhuang, Jianxin Li, Yikun Ban, deqing wang
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, LLM

- [Chasing Moving Targets with Online Self-Play Reinforcement Learning for Safer Language Models](https://openreview.net/forum?id=l8PbMSZs2G)
  - Mickel Liu, Liwei Jiang, Yancheng Liang, Simon Du, Yejin Choi, Tim Althoff, Natasha Jaques
  - 關鍵詞: RLHF, Reward Model, Alignment, Safety, LLM

- [B-Spar: Bayesian Sparse-Reward Modeling for RL-based Image Editing](https://openreview.net/forum?id=aoUqzNEKpA)
  - shusong xu, Peiye Liu, Yongbin Liu, Bangjie Yin, Zhaomang Sun, Zhenyu Chen, Tianyi Zheng, Peng-Tao Jiang, Jian Zhang, Yuzhao Wang, Jinwei Chen, Zhen Gu, Bo Li
  - 關鍵詞: Reward Model, Alignment, Multimodal, LLM, Optimization

- [Calibrated Preference Learning: The Case of Label Ranking](https://openreview.net/forum?id=STcIzNrUBB)
  - Santo Thies, Viktor Bengs, Timo Kaufmann, Sebastian Vollmer, Eyke Hüllermeier
  - 關鍵詞: RLHF, Reward Model, Alignment

- [Understanding the Performance Gap in Preference Learning: A Dichotomy of RLHF and DPO](https://openreview.net/forum?id=sg94PRd3kD)
  - Ruizhe Shi, Minhak Song, Runlong Zhou, Zihan Zhang, Maryam Fazel, Simon Du
  - 關鍵詞: DPO, RLHF, Reward Model, Preference, Optimization

- [DARC: Disagreement-Aware Alignment via Risk-Constrained Decoding](https://openreview.net/forum?id=GgN0wlHcdI)
  - mingxi Zou, Jiaxiang Chen, Junfan Li, Langzhang Liang, Qifan Wang, Xu Yinghui, Zenglin Xu
  - 關鍵詞: DPO, RLHF, Preference, Alignment, Optimization

- [The Personality Illusion: Revealing Dissociation Between Self-Reports & Behavior in LLMs](https://openreview.net/forum?id=6OMZEKarO7)
  - Pengrui Han, Rafal Kocielnik, Peiyang Song, Ramit Debnath, Dean Mobbs, Anima Anandkumar, R. Michael Alvarez
  - 關鍵詞: RLHF, Alignment, LLM

- [Distributionally Robust Reinforcement Learning with Human Feedback](https://openreview.net/forum?id=6GeYRoYKWP)
  - Debmalya Mandal, Paulius Sasnauskas, Goran Radanovic
  - 關鍵詞: DPO, RLHF, Reward Model, Preference, LLM

- [Automatically Finding Reward Model Biases](https://openreview.net/forum?id=Xy4ClJMjIU)
  - Atticus Wang, Iván Arcuschin, Arthur Conmy
  - 關鍵詞: Reward Model, LLM, Reinforcement Learning, Human Feedback

- [Tackling Length Inflation Without Trade-offs: Group Relative Reward Rescaling for Reinforcement Learning](https://openreview.net/forum?id=quqoVYpzX3)
  - Zichao Li, Jie Lou, Fangchen Dong, Zhiyuan Fan, Mengjie Ren, Hongyu Lin, Xianpei Han, Debing Zhang, Le Sun, Yaojie Lu, XingYu
  - 關鍵詞: RLHF, LLM, Optimization, Reinforcement Learning

- [Convex Optimization for Alignment and Preference Learning on a Single GPU](https://openreview.net/forum?id=P4eXtzKPrl)
  - Miria Feng, Mert Pilanci
  - 關鍵詞: DPO, RLHF, Preference, Alignment, LLM

- [MMKU-Bench: A Multimodal Update Benchmark for Diverse Visual Knowledge](https://openreview.net/forum?id=WYHmRRGcL1)
  - Baochen Fu, Yuntao Du, Cheng Chang, Baihao Jin, Wenzhi Deng, Muhao Xu, Hongmei Yan, Weiye Song, Yi Wan
  - 關鍵詞: RLHF, Multimodal, Reinforcement Learning, Human Feedback

- [Pushing Forward Pareto Frontiers of Proactive Agents with Behavioral Agentic Optimization](https://openreview.net/forum?id=pckR7Y6V1j)
  - Yihang Yao, Zhepeng Cen, Haohong Lin, Shiqi Liu, Zuxin Liu, Jiacheng Zhu, Zhang-Wei Hong, Laixi Shi, Ding Zhao
  - 關鍵詞: LLM, Reinforcement Learning, Human Feedback

- [Unbiased Alignment for Large Language Models with Noisy Preferences](https://openreview.net/forum?id=eMQsdioK8z)
  - Jialiang Wang, Xianming Liu, Xiong Zhou, Hui Liu, Haoliang Li
  - 關鍵詞: DPO, Reward Model, Preference, Alignment, Optimization

- [Unbiased Principles, Robust Rewards](https://openreview.net/forum?id=VZDlkXuIQc)
  - Qingnan Ren, Zhen Fang, Shiting Huang, Yu Zeng, Lin Chen, Zehui Chen, Feng Zhao
  - 關鍵詞: RLHF, Reward Model, Reinforcement Learning, Human Feedback

- [The Secret Engine Behind RLHF: It's Contarstive Learning All Along](https://openreview.net/forum?id=MJ25gbGhPu)
  - Xufei Lv, Kehai Chen, Haoyuan Sun, Xuefeng Bai, Min zhang, Houde Liu
  - 關鍵詞: DPO, RLHF, Preference, Alignment, LLM

- [When Distance Distracts: Representation Distance Bias in BT-Loss for Reward Models](https://openreview.net/forum?id=MBk6Pur6RX)
  - Tong Xie, Ching-Yuan Bai, Yuanhao Ban, Yunqi Hong, Haoyu Li, Cho-Jui Hsieh
  - 關鍵詞: RLHF, Reward Model, Alignment, LLM

- [Multi-Objective Preference Optimization: Improving Human Alignment of Generative Models](https://openreview.net/forum?id=AFqHVyanzY)
  - Akhil Agnihotri, Rahul Jain, Deepak Ramachandran, Zheng Wen
  - 關鍵詞: DPO, RLHF, Preference, Alignment, Safety

- [TUR-DPO: Topology- and Uncertainty-Aware Direct Preference Optimization](https://openreview.net/forum?id=YDztzMJynP)
  - Abdulhady abas, Fatemeh Daneshfar, Seyedali Mirjalili, Mourad Oussalah
  - 關鍵詞: DPO, PPO, RLHF, Preference, Multimodal

- [Asymptotic Universal Alignment: A New Alignment Framework via Test-Time Scaling](https://openreview.net/forum?id=2RIk96qJcc)
  - Yang Cai, Weiqiang Zheng
  - 關鍵詞: PPO, Preference, Alignment, LLM, Nash

- [Reward Modeling from Natural Language Human Feedback](https://openreview.net/forum?id=nd0hT1eyEo)
  - Zongqi Wang, Rui Wang, Yuchuan Wu, Yiyao Yu, Pinyi Zhang, Shaoning Sun, Yujiu Yang, Yongbin Li
  - 關鍵詞: Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Efficient Preference Poisoning Attack on Offline RLHF](https://openreview.net/forum?id=32XNOcwH1z)
  - Chenye Yang, Weiyu Xu, Lifeng Lai
  - 關鍵詞: DPO, RLHF, Preference, Optimization, Reinforcement Learning

- [Position: Agentic Safety is an Epistemic Property, Not a Behavioral One](https://openreview.net/forum?id=30mapdhNKH)
  - Charles Wang, Keir Dorchen, Peter Jin
  - 關鍵詞: RLHF, Preference, Alignment, Safety, Optimization

- [Position: Large Language Models Should Learn Personalized Rather Than Aggregated Human Preferences](https://openreview.net/forum?id=kWWgmAXwjG)
  - Cristina Garbacea
  - 關鍵詞: RLHF, Reward Model, Preference, Safety, Reinforcement Learning

- [Transitivity Meets Cyclicity: Explicit Preference Decomposition for Dynamic Large Language Model Alignment](https://openreview.net/forum?id=7H9HRTWady)
  - Yucong Huang, Xiucheng Li, Kaiqi Zhao, Jing Li
  - 關鍵詞: PPO, RLHF, Preference, Alignment, Nash

- [Factored Causal Representation Learning for Robust Reward Modeling in RLHF](https://openreview.net/forum?id=CwNItJ07ew)
  - Yupei Yang, Lin Yang, Wanxi Deng, Lin Qu, Fan Feng, Biwei Huang, Shikui Tu, Lei Xu
  - 關鍵詞: RLHF, Reward Model, Preference, LLM, Reinforcement Learning

- [Federated Variational Preference Alignment with Gumbel-Softmax Prior for Personalized User Preferences](https://openreview.net/forum?id=duzvT0nDgZ)
  - Jabin Koo, Hoyoung Kim, Minwoo Jang, Jungseul Ok
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, LLM

- [Online Compatible Reward Identification from Preference Feedback](https://openreview.net/forum?id=Fd1PINCgs7)
  - Simone Drago, Marco Mussi, Alberto Maria Metelli
  - 關鍵詞: Preference, Safety, Reinforcement Learning, Human Feedback

- [$f$-Divergence Regularized RLHF: Two Tales of Sampling and Unified Analyses](https://openreview.net/forum?id=XrtiZYwcU4)
  - Di Wu, Chengshuai Shi, Jing Yang, Cong Shen
  - 關鍵詞: RLHF, Reinforcement Learning, Human Feedback

- [Alignment Tampering: How Reinforcement Learning from Human Feedback Is Exploited to Optimize Misaligned Biases](https://openreview.net/forum?id=qNsrhcCe4y)
  - Dongyoon Hahm, Dylan Hadfield-Menell, Kimin Lee
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, LLM

- [IRPM: Intergroup Relative Preference Modeling for Pointwise Generative Reward Models](https://openreview.net/forum?id=JuiHYauZNk)
  - Haonan Song, Qingchen Xie, Huan Zhu, Feng Xiao, Luxi Xing, Liu Kang, Fuzhen Li, Zhiyong Zheng, Feng Jiang, Ziheng Li, Kun Yan, Qingyi Si, Yanghua Xiao, Hongcheng Guo, Fan Yang
  - 關鍵詞: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Implicit Preference Alignment  for Human Image Animation](https://openreview.net/forum?id=SorLoUARMp)
  - Yuanzhi Wang, Xuhua Ren, Jiaxiang Cheng, bing ma, Kai Yu, Tianxiang Zheng, Qinglin Lu, Zhen Cui
  - 關鍵詞: Preference, Alignment, Optimization, Reinforcement Learning, Human Feedback

- [Multilingual Safety Alignment Via Sparse Weight Editing](https://openreview.net/forum?id=tlPhEl24fM)
  - Jiaming Liang, Zhaoxin Wang, Handing Wang
  - 關鍵詞: RLHF, Alignment, Safety, LLM, Reinforcement Learning

- [Gradient Regularization Prevents Reward Hacking in Reinforcement Learning from Human Feedback and Verifiable Rewards](https://openreview.net/forum?id=T67db38qhr)
  - Johannes Ackermann, Michael Noukhovitch, Takashi Ishida, Masashi Sugiyama
  - 關鍵詞: RLHF, Reward Model, LLM, Reinforcement Learning, Human Feedback

- [Graph-Preference Learning: Debiasing Network-Sampled Human Feedback for Target Welfare Estimation](https://openreview.net/forum?id=DiNZ5ccCo6)
  - Guangrui Fan, DanDan Liu, AZNUL SABRI, Pan Lihu
  - 關鍵詞: DPO, RLHF, Reward Model, Preference

- [COLLIE: Guiding Skill Discovery in Semantically Coherent Latent Space](https://openreview.net/forum?id=LMBt26pQj1)
  - Yao Luan, Ni Mu, Hanfei Ge, Yiqin Yang, Bo XU, Qing-Shan Jia
  - 關鍵詞: Human Feedback

- [Optimal Transport for Reward Modeling from Noisy Feedback](https://openreview.net/forum?id=InoePQ7HNI)
  - Eric Wang, Licheng Pan, Haocheng Yang, Yunsheng Lu, Yongqi Tong, Yinuo Wang, Shijian Wang, Zhixuan Chu, Lei Shen, Haoxuan Li, Yuan Lu
  - 關鍵詞: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Reliability-Aware LLM Alignment from Inconsistent Human Feedback](https://openreview.net/forum?id=0LeyqHkrEG)
  - Jingyi Huang, Ruohan Zong, Yujun Feng, Liran Ma, Lanyu Shang, Yang Zhang
  - 關鍵詞: DPO, RLHF, Preference, Alignment, LLM

- [Position: We Need Large Language Models Optimized For Our Well-Being](https://openreview.net/forum?id=LCsPkh2Ins)
  - Ashton Anderson, Harsh Kumar, Louis Tay, Karina Vold
  - 關鍵詞: RLHF, Preference, Optimization, Reinforcement Learning, Human Feedback

- [Implicit Safety Alignment from Crowd Preferences](https://openreview.net/forum?id=kQZKqdlPQc)
  - Qian Lin, Daniel S Brown
  - 關鍵詞: RLHF, Reward Model, Preference, Safety, Reinforcement Learning

- [Contrastive Weak-to-Strong Generalization](https://openreview.net/forum?id=maOM1OWNZ6)
  - Houcheng Jiang, Junfeng Fang, Jiaxin Wu, Tianyu Zhang, Chen Gao, Xiang Wang, Xiangnan He, Yang Deng
  - 關鍵詞: Reward Model, Alignment, LLM, Human Feedback

- [Distortion of AI Alignment Revisited: RLHF is a Decent Utilitarian Aligner](https://openreview.net/forum?id=x4qXiDogRm)
  - Kazusato Oko, Annie Ulichney, Nika Haghtalab, Han Bao
  - 關鍵詞: RLHF, Preference, Reinforcement Learning, Human Feedback

- [Conversation for Non-verifiable Learning: Self-Evolving Large Language Models through Meta-Evaluation](https://openreview.net/forum?id=Wba6w3pzbj)
  - Yuan Sui, Bryan Hooi
  - 關鍵詞: LLM, Optimization, Human Feedback

- [Unifying Adversarial Robustness and Training Across Text Scoring Models](https://openreview.net/forum?id=u7kOAJ9uH7)
  - Manveer Tamber, Hosna Oyarhoseini, Jimmy Lin
  - 關鍵詞: PPO, RLHF, Reward Model, LLM

- [ActiveUltraFeedback: Efficient Preference Data Generation using Active Learning](https://openreview.net/forum?id=Ca0cQbhA0T)
  - Davit Melikidze, Marian Schneider, Jessica Lam, Martin Wertich, Ido Hakimi, Barna Pasztor, Andreas Krause
  - 關鍵詞: RLHF, Preference, Alignment, LLM, Reinforcement Learning

- [Layer-wise Gradient Disentanglement: Decoupling Semantics and Preferences in Direct Preference Optimization](https://openreview.net/forum?id=j8lJiUPyL7)
  - Mengyang Li, Shuang Liu, Zhong Zhang
  - 關鍵詞: DPO, RLHF, Preference, Optimization

- [The Sign Estimator: Preference Modeling for LLM Alignment under Heterogeneity](https://openreview.net/forum?id=SyTeWTEex3)
  - Aymane El Gadarri, Ali Aouad, Vivek Farias
  - 關鍵詞: RLHF, Reward Model, Preference, Alignment, LLM

- [Leveraging Machine Unlearning for Cost-Efficient Preference Alignment](https://openreview.net/forum?id=FhCu8IlO2e)
  - XiaoHua Feng, Yuyuan Li, HuWei Ji, Li Zhang, Jiaming Zhang, Tianyu Du, Chaochao Chen
  - 關鍵詞: Preference, Alignment, LLM, Optimization, Reinforcement Learning

- [Regularization in the Axiomatic Approach to Learning from Human Preferences](https://openreview.net/forum?id=9ydYaIe1Qj)
  - Ezgi Korkmaz
  - 關鍵詞: RLHF, Preference, Reinforcement Learning, Human Feedback

- [DPO Unchained: Your Training Algorithm is Secretly Disentangled in Human Choice Theory (and Its Loss' Convexity is Dispensable)](https://openreview.net/forum?id=j4c3i3a5kH)
  - Wenxuan Zhou, Shujian Zhang, brice magdalou, John Lambert, Ehsan Amid, Richard Nock, Andrew Hard
  - 關鍵詞: DPO, PPO, RLHF, Reward Model, Preference

- [Conditional Equivalence of DPO and RLHF: Assumptions, Failure Modes, and Provable Alignment](https://openreview.net/forum?id=7UEBX1KU1y)
  - Yonggang Zhang, Zhiqin Yang, Wei Xue, Dong Fang, Bo Han, Yike Guo
  - 關鍵詞: DPO, RLHF, Preference, Alignment, Optimization

- [A Regret Minimization Framework on Preference Learning  in Large Language Models](https://openreview.net/forum?id=genVnYBAV7)
  - Suhwan Kim, Taehyun Cho, Youngsoo Jang, Geon-Hyeong Kim, Yu Jin Kim, Moontae Lee, Jungwoo Lee
  - 關鍵詞: RLHF, Preference, Optimization, Reinforcement Learning, Human Feedback

- [Position: Measuring Human Preferences in RLHF is a Social Science Problem](https://openreview.net/forum?id=5l1pca4KhM)
  - Bijean Ghafouri, Eun Cheol Choi, Priyanka Dey, Emilio Ferrara
  - 關鍵詞: RLHF, Preference, Alignment

- [Mitigating Reward Hacking in RLHF via Bayesian Non-negative Reward Modeling](https://openreview.net/forum?id=DfhMMHXDuu)
  - Zhibin Duan, Guowei Rong, Zhuo Li, Bo Chen, Mingyuan Zhou, Dandan Guo
  - 關鍵詞: Reward Model, Preference, LLM, Optimization, Reinforcement Learning
### 2025

- [Position: The Complexity of Perfect AI Alignment -- Formalizing the RLHF Trilemma](https://arxiv.org/abs/2511.19504)
  - Subramanyam Sahoo, Aman Chadha, Vinija Jain, Divya Chaudhary
  - 關鍵詞: Alignment Bias, Safety, Interpretability
 
- [What's In My Human Feedback? Learning Interpretable Descriptions of Preference Data](https://arxiv.org/abs/2510.26202)
  - Rajiv Movva, Smitha Milli, Sewon Min, Emma Pierson
  - 關鍵詞: Sparse Autoencoders, Interpretable Data Curation, Reward Hacking, Feature Attribution
  - 程式碼: [Official](https://github.com/rmovva/wimhf)

- [Towards Efficient Online Exploration for Reinforcement Learning with Human Feedback](https://arxiv.org/abs/2509.22633)
  - Gen Li, Yuling Yan
  - 關鍵詞: Online RL, Multi-armed Bandit, LLMs

- [OpenRLHF: A Ray-based Easy-to-use, Scalable and High-performance RLHF Framework](https://aclanthology.org/2025.emnlp-demos.48/)
  - Jian Hu, Xibin Wu, Wei Shen, Jason Klein Liu, Weixun Wang, Songlin Jiang, Haoran Wang, Hao Chen, Bin Chen, Wenkai Fang, Xianyu, Yu Cao, Haotian Xu, Yiming Liu
  - 關鍵詞: Framework
  - 程式碼: [Official](https://github.com/OpenRLHF/OpenRLHF)
 
- [Language Models Learn to Mislead Humans via RLHF](https://arxiv.org/abs/2503.00897)
  - Jiaxin Wen, Ruiqi Zhong, Akbir Khan, Ethan Perez, Jacob Steinhardt, Minlie Huang, Sam Bowman, He He, Shi Feng
  - 關鍵詞: Open-ended Task, Human Reward, Alignment Method, LLMs

- [A Simple and Effective Reinforcement Learning Method for Text-to-Image Diffusion Fine-tuning](https://arxiv.org/abs/2503.00897)
  - Shashank Gupta, Chaitanya Ahuja, Tsung-Yu Lin, Sreya Dutta Roy, Harrie Oosterhuis, Maarten de Rijke, and Satya Narayan Shukla
  - 關鍵詞: Diffusion Model, REINFORCE, PPO

- [Differential Information: An Information-Theoretic Perspective on Preference Optimization](https://arxiv.org/abs/2505.23761)
  - Yunjae Won, Hyunji Lee, Hyeonbin Hwang, Minjoon Seo
  - 關鍵詞: Preference Optimization, Information-Theoretic Analysis, Log-Ratio Reward Parameterization, Data Distribution, Log-Likelihood Displacement

- [Generalist Reward Models: Found Inside Large Language Models](https://arxiv.org/abs/2506.23235)
  - Yi-Chen Li, Tian Xu, Yang Yu, Xuqin Zhang, Xiong-Hui Chen, Zhongxiang Ling, Ningjing Chao, Lei Yuan, Zhi-Hua Zhou
  - 關鍵詞: Offline Inverse RL, LLM-as-a-judge, Training-free, Alignment

- [A Unified Pairwise Framework for RLHF: Bridging Generative Reward Modeling and Policy Optimization](https://arxiv.org/abs/2504.04950)
  - Wenyuan Xu, Xiaochen Zuo, Chao Xin, Yu Yue, Lin Yan, Yonghui Wu
  - 關鍵詞: Generative Pairwise Reward Model, Policy Optimization, Framework

- [Exploring Data Scaling Trends and Effects in Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2503.22230)
  - Wei Shen, Guanlin Liu, Zheng Wu, Ruofei Zhu, Qingping Yang, Chao Xin, Yu Yue, Lin Yan
  - 關鍵詞: Data Scaling, Reward Hacking, LLMs

- [RLTHF: Targeted Human Feedback for LLM Alignment](https://arxiv.org/abs/2502.13417)
  - Yifei Xu, Tusher Chakraborty, Emre Kıcıman, Bibek Aryal, Eduardo Rodrigues, Srinagesh Sharma, Roberto Estevao, Maria Angels de Luis Balaguer, Jessica Wolk, Rafael Padilha, Leonardo Nunes, Shobana Balakrishnan, Songwu Lu, Ranveer Chandra
  - 關鍵詞: Human-AI Hybrid Framework, Efficient, Alignment, LLMs

- [Equilibrate RLHF: Towards Balancing Helpfulness-Safety Trade-off in Large Language Models](https://arxiv.org/abs/2502.11555)
  - Yingshui Tan, Yilei Jiang, Yanshi Li, Jiaheng Liu, Xingyuan Bu, Wenbo Su, Xiangyu Yue, Xiaoyong Zhu, Bo Zheng
  - 關鍵詞: Safety, Framework, Adaptive Message-wise Alignment Method, LLMs

- [MM-RLHF: The Next Step Forward in Multimodal LLM Alignment](https://arxiv.org/abs/2502.10391)
  - Yi-Fan Zhang, Tao Yu, Haochen Tian, Chaoyou Fu, Peiyan Li, Jianshu Zeng, Wulin Xie, Yang Shi, Huanyu Zhang, Junkang Wu, Xue Wang, Yibo Hu, Bin Wen, Fan Yang, Zhang Zhang, Tingting Gao, Di Zhang, Liang Wang, Rong Jin, Tieniu Tan
  - 關鍵詞: Critique-based Reward Model, Dynamic Reward, Dataset
  - 程式碼: [Official](https://github.com/Kwai-YuanQi/MM-RLHF)
 
- [Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback](https://arxiv.org/abs/2501.12895)
  - Yafu Li, Xuyang Hu, Xiaoye Qu, Linjie Li, Yu Cheng
  - 關鍵詞: Test-Time Optimization, Preference Learning, Iterative Feedback
  - 程式碼: [Official](https://github.com/yafuly/TPO)
 
- [Segmenting Text and Learning Their Rewards for Improved RLHF in Language Model](https://arxiv.org/abs/2501.02790)
  - Yueqin Yin, Shentao Yang, Yujia Xie, Ziyi Yang, Yuting Sun, Hany Awadalla, Weizhu Chen, and Mingyuan Zhou
  - 關鍵詞: Segment-level Reward Model, Dense Reward RLHF Framework, Improved PPO training for LLMs
  - 程式碼: [Official](https://github.com/yinyueqin/DenseRewardRLHF-PPO)

- [REINFORCE++: A Simple and Efficient Approach for Aligning Large Language Models](https://arxiv.org/abs/2501.03262)
  - Jian Hu
  - 關鍵詞: Efficient, Alignment, Reinforcement Learning
  - 程式碼: [Official](https://github.com/OpenRLHF/OpenRLHF/blob/main/examples/scripts/train_reinforce_llama_ray.sh)

### 2024
- [DPO Meets PPO: Reinforced Token Optimization for RLHF](https://arxiv.org/abs/2404.18922)
  - Han Zhong, Zikang Shan, Guhao Feng, Wei Xiong, Xinle Cheng, Li Zhao, Di He, Jiang Bian, Liwei Wang
  - 關鍵詞: Token-wise Reward, DPO, PPO, RLHF
  - 程式碼: [Official](https://github.com/zkshan2002/RTO)

- [Reward-Augmented Data Enhances Direct Preference Alignment of LLMs](https://arxiv.org/abs/2410.08067)
  - Shenao Zhang, Zhihan Liu, Boyi Liu, Yufeng Zhang, Yingxiang Yang, Yongfei Liu, Liyu Chen, Tao Sun, Zhaoran Wang
  - 關鍵詞: Reward-Augmented Data, DPO, LLMs
  - 程式碼: [Official](https://github.com/shenao-zhang/reward-augmented-preference)

- [The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models](https://aclanthology.org/2024.emnlp-main.174/)
  - Yanjun Chen, Dawei Zhu, Yirong Sun, Xinghao Chen, Wei Zhang, Xiaoyu Shen
  - 關鍵詞: Reward Model Evaluation, Accuracy Paradox, LLM Alignment
  - 程式碼: [Official](https://github.com/EIT-NLP/AccuracyParadox-RLHF)

- [Align Anything: Training All-Modality Models to Follow Instructions with Language Feedback](https://arxiv.org/abs/2412.15838)
  - Jiaming Ji, Jiayi Zhou, Hantao Lou, Boyuan Chen, Donghai Hong, Xuyao Wang, Wenqi Chen, Kaile Wang, Rui Pan, Jiahao Li, Mohan Wang, Josef Dai, Tianyi Qiu, Hua Xu, Dong Li, Weipeng Chen, Jun Song, Bo Zheng, Yaodong Yang
  - 關鍵詞: Multi-modality Alignment, Dataset, Training-evaluation Framework
  - 程式碼: [Official](https://github.com/PKU-Alignment/align-anything)

- [REvolve: Reward Evolution with Large Language Models using Human Feedback](https://arxiv.org/abs/2406.01309)
  - Rishi Hazra, Alkis Sygkounas, Andreas Persson, Amy Loutfi, Pedro Zuidberg Dos Martires
  - 關鍵詞: Improved Reward Model with LLMs, Framework
  - 程式碼: [Official](https://github.com/RishiHazra/Revolve)

- [Zeroth-Order Policy Gradient for Reinforcement Learning from Human Feedback without Reward Inference](https://arxiv.org/abs/2409.17401)
  - Qining Zhang, Lei Ying
  - 關鍵詞: Reward inference-free RLHF, Zeroth-order optimization, Policy gradient

- [Learning Reward and Policy Jointly from Demonstration and Preference Improves Alignment](https://arxiv.org/abs/2406.06874)
  - Chenliang Li, Siliang Zeng, Zeyi Liao, Jiaxiang Li, Dongyeop Kang, Alfredo Garcia, Mingyi Hong
  - 關鍵詞: Joint Reward and Policy, Efficiency, Framework

- [MA-RLHF: Reinforcement Learning from Human Feedback with Macro Actions](https://arxiv.org/abs/2410.02743)
  - Yekun Chai, Haoran Sun, Huang Fang, Shuohuan Wang, Yu Sun, Hua Wu
  - 關鍵詞: Macro action-level Reward, Efficiency, Framework
  - 程式碼: [Official](https://github.com/ernie-research/MA-RLHF)

- [Reward Modeling with Ordinal Feedback: Wisdom of the Crowd](https://arxiv.org/abs/2411.12843)
  - Shang Liu, Yu Pan, Guanting Chen, and Xiaocheng Li
  - 關鍵詞: Reward Modeling, Ordinal Feedback, Human Preference Dataset
  - 程式碼: [Official](https://github.com/LoveCatc/OrdinalRewardModeling)

- [Aligning Few-Step Diffusion Models with Dense Reward Difference Learning](https://arxiv.org/abs/2411.11727)
  - Ziyi Zhang, Li Shen, Sen Zhang, Deheng Ye, Yong Luo, Miaojing Shi, Bo Du, Dacheng Tao
  - 關鍵詞: Diffusion Models, Text-to-Image, Alignment, Reinforcement Learning
  - 程式碼: [Official](https://github.com/ZiyiZhang27/sdpo)

- [HybridFlow: A Flexible and Efficient RLHF Framework](https://arxiv.org/pdf/2409.19256v2)
  - Guangming Sheng, Chi Zhang, Zilingfeng Ye, Xibin Wu, Wang Zhang, Ru Zhang, Yanghua Peng, Haibin Lin, Chuan Wu
  - 關鍵詞: Flexible, Efficient, RLHF framework
  - 程式碼: [Official](https://github.com/volcengine/verl)

- [ALaRM: Align Language Models via Hierarchical Rewards Modeling](https://arxiv.org/abs/2403.06754)
  - Yuhang Lai, Siyuan Wang, Shujun Liu, Xuanjing Huang, Zhongyu Wei
  - 關鍵詞: Hierarchical Reward, Open Text Generation Tasks
  - 程式碼: [Official](https://github.com/halfrot/ALaRM)

- [TLCR: Token-Level Continuous Reward for Fine-grained Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2407.16574)
  - Eunseop Yoon, Hee Suk Yoon, SooHwan Eom, Gunsoo Han, Daniel Wontae Nam, Daejin Jo, Kyoung-Woon On, Mark A. Hasegawa-Johnson, Sungwoong Kim, Chang D. Yoo
  - 關鍵詞: Token-Level Continuous Reward, RLHF
  - 程式碼: [Official]()

- [Aligning Large Multimodal Models with Factually Augmented RLHF](https://arxiv.org/abs/2309.14525)
  - Zhiqing Sun, Sheng Shen, Shengcao Cao, Haotian Liu, Chunyuan Li, Yikang Shen, Chuang Gan, Liang-Yan Gui, Yu-Xiong Wang, Yiming Yang, Kurt Keutzer, Trevor Darrell
  - 關鍵詞: Factually Augmented RLHF, Vision & Language, Human Preference Dataset
  - 程式碼: [Official](https://github.com/llava-rlhf/LLaVA-RLHF)

- [Direct Large Language Model Alignment Through Self-Rewarding Contrastive Prompt Distillation](https://arxiv.org/abs/2402.11907)
  - Aiwei Liu, Haoping Bai, Zhiyun Lu, Xiang Kong, Simon Wang, Jiulong Shan, Meng Cao, Lijie Wen
  - 關鍵詞: Without Human Preference Data, Self-Reward, DPO
  - 程式碼: [Official](https://github.com/exlaw/DLMA)

- [Arithmetic Control of LLMs for Diverse User Preferences: Directional Preference Alignment with Multi-Objective Rewards](https://arxiv.org/abs/2402.18571)
  - Haoxiang Wang, Yong Lin, Wei Xiong, Rui Yang, Shizhe Diao, Shuang Qiu, Han Zhao, Tong Zhang
  - 關鍵詞: User Preference, Multi-objective Reward Model, Rejection Sampling Finetuning
  - 程式碼: [Official](https://github.com/Haoxiang-Wang/directional-preference-alignment)

- [Back to Basics: Revisiting REINFORCE Style Optimization for Learning from Human Feedback in LLMs](https://arxiv.org/abs/2402.14740)
  - Arash Ahmadian, Chris Cremer, Matthias Gallé, Marzieh Fadaee, Julia Kreutzer, Olivier Pietquin, Ahmet Üstün, Sara Hooker
  - 關鍵詞: Online RL Optimization, Low Computational Cost
  - 程式碼: [Official]()

- [Improving Large Language Models via Fine-grained Reinforcement Learning with Minimum Editing Constraint](https://arxiv.org/abs/2401.06081)
  - Zhipeng Chen, Kun Zhou, Wayne Xin Zhao, Junchen Wan, Fuzheng Zhang, Di Zhang, Ji-Rong Wen
  - 關鍵詞: Token-level Reward, LLM
  - 程式碼: [Official](https://github.com/RUCAIBox/RLMEC)
  
- [RLAIF vs. RLHF: Scaling Reinforcement Learning from Human Feedback with AI Feedback](https://proceedings.mlr.press/v235/lee24t.html)
  - Harrison Lee, Samrat Phatale, Hassan Mansoor, Thomas Mesnard, Johan Ferret, Kellie Ren Lu, Colton Bishop, Ethan Hall, Victor Carbune, Abhinav Rastogi, Sushant Prakash
  - 關鍵詞: RL from AI Feedback
  - 程式碼: [official]()

- [Principled Penalty-based Methods for Bilevel Reinforcement Learning and RLHF](https://proceedings.mlr.press/v235/shen24g.html)
  - Han Shen, Zhuoran Yang, Tianyi Chen
  - 關鍵詞: Bilevel optimization
  - 程式碼: [official]()

- [Dense Reward for Free in Reinforcement Learning from Human Feedback](https://openaccess.thecvf.com/content/CVPR2024/html/Yu_RLHF-V_Towards_Trustworthy_MLLMs_via_Behavior_Alignment_from_Fine-grained_Correctional_CVPR_2024_paper.html)
  - Alex James Chan, Hao Sun, Samuel Holt, Mihaela Van Der Schaar
  - 關鍵詞: reward shaping, RLHF
  - 程式碼: [official]( https://github.com/XanderJC/attention-based-credit)

- [A Minimaximalist Approach to Reinforcement Learning from Human Feedback](https://proceedings.mlr.press/v235/swamy24a.html)
  - Gokul Swamy, Christoph Dann, Rahul Kidambi, Steven Wu, Alekh Agarwal
  - 關鍵詞: Minimax Winner, Self-Play Preference Optimization
  - 程式碼: [official]()

- [Rlhf-v: Towards trustworthy mllms via behavior alignment from fine-grained correctional human feedback](https://openaccess.thecvf.com/content/CVPR2024/html/Yu_RLHF-V_Towards_Trustworthy_MLLMs_via_Behavior_Alignment_from_Fine-grained_Correctional_CVPR_2024_paper.html)
  - Tianyu Yu, Yuan Yao, Haoye Zhang, Taiwen He, Yifeng Han, Ganqu Cui, Jinyi Hu, Zhiyuan Liu, Hai-Tao Zheng, Maosong Sun, Tat-Seng Chua
  - 關鍵詞: Multimodal Large Language Models, Hallucination Problem, Reinforcement Learning from Human Feedback
  - 程式碼: [official](https://github.com/RLHF-V/RLHF-V)

- [RLHF Workflow: From Reward Modeling to Online RLHF](https://arxiv.org/abs/2405.07863)
  - Hanze Dong, Wei Xiong, Bo Pang, Haoxiang Wang, Han Zhao, Yingbo Zhou, Nan Jiang, Doyen Sahoo, Caiming Xiong, Tong Zhang
  - 關鍵詞: Online Iterative RLHF, Preference Modeling, Large Language Models
  - 程式碼: [official](https://github.com/RLHFlow/Online-RLHF)

- [MaxMin-RLHF: Towards equitable alignment of large language models with diverse human preferences](https://arxiv.org/abs/2402.08925)
  - Souradip Chakraborty, Jiahao Qiu, Hui Yuan, Alec Koppel, Furong Huang, Dinesh Manocha, Amrit Singh Bedi, Mengdi Wang
  - 關鍵詞: mixture of preference distributions, MaxMin alignment objective
  - 程式碼: [official]()

- [Dataset Reset Policy Optimization for RLHF](https://arxiv.org/abs/2404.08495)
  - Jonathan D. Chang, Wenhao Zhan, Owen Oertell, Kianté Brantley, Dipendra Misra, Jason D. Lee, Wen Sun
  - 關鍵詞: Dataset Reset Policy Optimization
  - 程式碼: [official](https://github.com/Cornell-RL/drpo)

- [A Dense Reward View on Aligning Text-to-Image Diffusion with Preference](https://arxiv.org/pdf/2402.08265)
  - Shentao Yang, Tianqi Chen, Mingyuan Zhou
  - 關鍵詞: RLHF for Text-to-Image Generation, Dense Reward Improvement of DPO, Efficient Alignment
  - 程式碼: [official](https://github.com/Shentao-YANG/Dense_Reward_T2I)

- [Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models](https://arxiv.org/pdf/2401.01335)
  - Zixiang Chen, Yihe Deng, Huizhuo Yuan, Kaixuan Ji, Quanquan Gu
  - 關鍵詞: Self-Play Fine-Tuning
  - 程式碼: [official](https://github.com/uclaml/SPIN)

- [RLHF Deciphered: A Critical Analysis of Reinforcement Learning from Human Feedback for LLMs](https://arxiv.org/abs/2404.08555)
  - Shreyas Chaudhari, Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan, Ameet Deshpande, Bruno Castro da Silva
  - 關鍵詞: RLHF, Oracular Reward, Reward Model Analysis, Survey 

- [Confronting Reward Overoptimization for Diffusion Models: A Perspective of Inductive and Primacy Biases](https://arxiv.org/abs/2402.08552)
  - Ziyi Zhang, Sen Zhang, Yibing Zhan, Yong Luo, Yonggang Wen, Dacheng Tao
  - 關鍵詞: Diffusion Models, Alignment, Reinforcement Learning, RLHF, Reward Overoptimization, Primacy Bias
  - 程式碼: [official](https://github.com/ZiyiZhang27/tdpo)

- [On Diversified Preferences of Large Language Model Alignment](https://arxiv.org/pdf/2312.07401.pdf)
  - Dun Zeng, Yong Dai, Pengyu Cheng, Tianhao Hu, Wanshun Chen, Nan Du, Zenglin Xu
  - 關鍵詞: Aligning shared preference, Reward modeling metrics, LLM
  - 程式碼: [official](https://github.com/dunzeng/MORE)

- [Aligning Crowd Feedback via Distributional Preference Reward Modeling](https://arxiv.org/pdf/2402.09764.pdf)
  - Dexun Li, Cong Zhang, Kuicai Dong, Derrick Goh Xin Deik, Ruiming Tang, Yong Liu
  - 關鍵詞: RLHF, Preference distribution, Aligning, LLM

- [Beyond One-Preference-Fits-All Alignment: Multi-Objective Direct Preference Optimization](https://arxiv.org/pdf/2310.03708.pdf)
  - Zhanhui Zhou, Jie Liu, Chao Yang, Jing Shao, Yu Liu, Xiangyu Yue, Wanli Ouyang, Yu Qiao
  - 關鍵詞: Multi-objective RLHF without reward modeling, DPO
  - 程式碼: [official](https://github.com/ZHZisZZ/modpo/)
  
- [Emulated Disalignment: Safety Alignment for Large Language Models May Backfire!](https://arxiv.org/pdf/2402.12343.pdf)
  - Zhanhui Zhou, Jie Liu, Zhichen Dong, Jiaheng Liu, Chao Yang, Wanli Ouyang, Yu Qiao
  - 關鍵詞: LLM inference-time attack, DPO, Producing harmful LLMs without training
  - 程式碼: [official](https://github.com/ZHZisZZ/emulated-disalignment/)
 
- [A Theoretical Analysis of Nash Learning from Human Feedback under General KL-Regularized Preference](https://arxiv.org/pdf/2402.07314.pdf)
  - Chenlu Ye, Wei Xiong, Yuheng Zhang, Nan Jiang, Tong Zhang
  - 關鍵詞: Game-based RLHF, Nash Learning, Alignment under reward-model-free oracle

- [Mitigating the Alignment Tax of RLHF](https://arxiv.org/pdf/2309.06256.pdf)
  - Yong Lin, Hangyu Lin, Wei Xiong, Shizhe Diao, Jianmeng Liu, Jipeng Zhang, Rui Pan, Haoxiang Wang, Wenbin Hu, Hanning Zhang, Hanze Dong, Renjie Pi, Han Zhao, Nan Jiang, Heng Ji, Yuan Yao, Tong Zhang
  - 關鍵詞: RLHF, Alignment tax, Catastrophic forgetting 

- [Training Diffusion Models with Reinforcement Learning](https://arxiv.org/pdf/2305.13301.pdf)
  - Kevin Black, Michael Janner, Yilun Du, Ilya Kostrikov, Sergey Levine
  - 關鍵詞: reinforcement learning, RLHF, diffusion models
  - 程式碼: [official](http://rl-diffusion.github.io/)

- [AlignDiff: Aligning Diverse Human Preferences via Behavior-Customisable Diffusion Model](https://openreview.net/forum?id=bxfKIYfHyx)
  - Zibin Dong, Yifu Yuan, Jianye Hao, Fei Ni, Yao Mu, Yan Zheng,Yujing Hu, Tangjie Lv, Changjie Fan, Zhipeng Hu
  - 關鍵詞: Reinforcement learning; Diffusion models; RLHF; Preference aligning
  - 程式碼: [official](https://aligndiff.github.io/)

- [Dense Reward for Free in Reinforcement Learning from Human Feedback](https://arxiv.org/pdf/2402.00782)
  - Alex J. Chan, Hao Sun, Samuel Holt, Mihaela van der Schaar
  - 關鍵詞: RLHF
  - 程式碼: [official](https://github.com/XanderJC/attention-based-credit)

- [Transforming and Combining Rewards for Aligning Large Language Models](https://arxiv.org/abs/2402.00742)
  - Zihao Wang, Chirag Nagpal, Jonathan Berant, Jacob Eisenstein, Alex D'Amour, Sanmi Koyejo, Victor Veitch
  - 關鍵詞: RLHF, Aligning, LLM

- [Parameter Efficient Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2403.10704)
  - Hakim Sidahmed, Samrat Phatale, Alex Hutcheson, Zhuonan Lin, Zhang Chen, Zac Yu, Jarvis Jin, Simral Chaudhary, Roman Komarytsia, Christiane Ahlheim, Yonghao Zhu, Bowen Li, Saravanan Ganesh, Bill Byrne, Jessica Hoffmann, Hassan Mansoor, Wei Li, Abhinav Rastogi, Lucas Dixon
  - 關鍵詞: RLHF, Parameter Efficient method, Low Computational Cost, LLM, VLM
 
- [Improving Reinforcement Learning from Human Feedback with Efficient Reward Model Ensemble](https://arxiv.org/abs/2401.16635v2)
  - Shun Zhang, Zhenfang Chen, Sunli Chen, Yikang Shen, Zhiqing Sun, Chuang Gan
  - 關鍵詞: RLHF, Reward Ensemble, Efficient Ensemble Method
  
- [RIME: Robust Preference-based Reinforcement Learning with Noisy Human Preferences](https://arxiv.org/abs/2402.17257)
  - Jie Cheng, Gang Xiong, Xingyuan Dai, Qinghai Miao, Yisheng Lv, Fei-Yue Wang
  - 關鍵詞:
  - 程式碼: [official](https://github.com/CJReinforce/RIME_ICML2024)
  
- [Uni-RLHF: Universal Platform and Benchmark Suite for Reinforcement Learning with Diverse Human Feedback](https://arxiv.org/abs/2402.02423)
  - Yifu Yuan, Jianye Hao, Yi Ma, Zibin Dong, Hebin Liang, Jinyi Liu, Zhixin Feng, Kai Zhao, Yan Zheng
  - 關鍵詞:
  - 程式碼: [official](https://github.com/pickxiguapi/Uni-RLHF-Platform)
  - 資料集: [official](https://uni-rlhf.github.io/)

### 2023
- [The Trickle-down Impact of Reward (In-)consistency on RLHF](https://arxiv.org/abs/2309.16155)
  - Lingfeng Shen, Sihao Chen, Linfeng Song, Lifeng Jin, Baolin Peng, Haitao Mi, Daniel Khashabi, Dong Yu
  - 關鍵詞: Reward model, RLHF, Reward hacking
  - 程式碼: [official](https://github.com/shadowkiller33/Contrast-Instruction)

- [A General Theoretical Paradigm to Understand Learning from Human Preferences](https://arxiv.org/abs/2310.12036)
  - Mohammad Gheshlaghi Azar, Mark Rowland, Bilal Piot, Daniel Guo, Daniele Calandriello, Michal Valko, Rémi Munos
  - 關鍵詞: RLHF, Pairwise Preference

- [Fine-Grained Human Feedback Gives Better Rewards for Language Model Training](https://arxiv.org/abs/2306.01693)
  - Zeqiu Wu, Yushi Hu, Weijia Shi, Nouha Dziri, Alane Suhr, Prithviraj Ammanabrolu, Noah A. Smith, Mari Ostendorf, Hannaneh Hajishirzi
  - 關鍵詞: RLHF, Sentence-level Reward, LLM
  - 程式碼: [official](https://github.com/allenai/FineGrainedRLHF)

- [Preference-grounded Token-level Guidance for Language Model Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2023/file/4d4a3b6a34332d80349137bcc98164a5-Paper-Conference.pdf)
  - Shentao Yang, Shujian Zhang, Congying Xia, Yihao Feng, Caiming Xiong, Mingyuan Zhou
  - 關鍵詞: RLHF, Token-level Training Guidance, Alternate/Online Training Framework, Minimalist Training Objectives
  - 程式碼: [official](https://github.com/Shentao-YANG/Preference_Grounded_Guidance)

- [Fantastic Rewards and How to Tame Them: A Case Study on Reward Learning for Task-oriented Dialogue Systems](https://arxiv.org/pdf/2302.10342)
  - Yihao Feng*, Shentao Yang*, Shujian Zhang, Jianguo Zhang, Caiming Xiong, Mingyuan Zhou, Huan Wang
  - 關鍵詞: RLHF, Genralized Reward Function Learning, Reward Function Utilization, Task-oriented Dialogue System, Learning-to-rank
  - 程式碼: [official](https://github.com/Shentao-YANG/Fantastic_Reward_ICLR2023)

- [Inverse Preference Learning: Preference-based RL without a Reward Function](https://arxiv.org/pdf/2305.15363)
  - Joey Hejna, Dorsa Sadigh
  - 關鍵詞: Inverse Preference Learning, without reward model
  - 程式碼: [official](https://github.com/jhejna/inverse-preference-learning)

- [AlpacaFarm: A Simulation Framework for Methods that Learn from Human Feedback](https://proceedings.neurips.cc/paper_files/paper/2023/file/5fc47800ee5b30b8777fdd30abcaaf3b-Paper-Conference.pdf)
  - Yann Dubois, Chen Xuechen Li, Rohan Taori, Tianyi Zhang, Ishaan Gulrajani, Jimmy Ba, Carlos Guestrin, Percy S. Liang, Tatsunori B. Hashimoto
  - 關鍵詞: RLHF, Simulation Framework
  - 程式碼: [official](https://github.com/tatsu-lab/alpaca_farm)

- [Adversarial Preference Optimization](https://arxiv.org/abs/2311.08045)
  - Pengyu Cheng, Yifan Yang, Jian Li, Yong Dai, Nan Du
  - 關鍵詞: RLHF, GAN, Adversarial Games
  - 程式碼: [official](https://github.com/Linear95/APO)

- [Iterative Preference Learning from Human Feedback: Bridging Theory and Practice for RLHF under KL-Constraint](https://arxiv.org/abs/2312.11456)
  - Wei Xiong, Hanze Dong, Chenlu Ye, Ziqi Wang, Han Zhong, Heng Ji, Nan Jiang, Tong Zhang
  - 關鍵詞: RLHF, Iterative DPO, Mathematical foundation

- [Sample Efficient Reinforcement Learning from Human Feedback via Active Exploration](https://arxiv.org/abs/2312.00267)
  - Viraj Mehta, Vikramjeet Das, Ojash Neopane, Yijia Dai, Ilija Bogunovic, Jeff Schneider, Willie Neiswanger
  - 關鍵詞: RLHF, sample efficience, exploration

- [Reinforcement Learning from Statistical Feedback: the Journey from AB Testing to ANT Testing](https://arxiv.org/abs/2311.14766)
  - Feiyang Han, Yimin Wei, Zhaofeng Liu, Yanxing Qi
  - 關鍵詞: RLHF, AB testing, RLSF

- [A Baseline Analysis of Reward Models' Ability To Accurately Analyze Foundation Models Under Distribution Shift](https://arxiv.org/abs/2311.14743)
  - Ben Pikus, Will LeVine, Tony Chen, Sean Hendryx
  - 關鍵詞: RLHF, OOD, Distribution Shift 

- [Data-Efficient Alignment of Large Language Models with Human Feedback Through Natural Language](https://arxiv.org/abs/2311.14543)
  - Di Jin, Shikib Mehri, Devamanyu Hazarika, Aishwarya Padmakumar, Sungjin Lee, Yang Liu, Mahdi Namazifar
  - 關鍵詞: RLHF, data-efficient, Alignment

- [Let's Reinforce Step by Step](https://arxiv.org/abs/2311.05821)
  - Sarah Pan, Vladislav Lialin, Sherin Muckatira, Anna Rumshisky
  - 關鍵詞: RLHF, reasoning

- [Direct Preference-based Policy Optimization without Reward Modeling](https://arxiv.org/abs/2301.12842)
  - Gaon An, Junhyeok Lee, Xingdong Zuo, Norio Kosaka, Kyung-Min Kim, Hyun Oh Song
  - 關鍵詞: RLHF without reward modeling, Contrastive learning, Offline refinforcement learning

- [AlignDiff: Aligning Diverse Human Preferences via Behavior-Customisable Diffusion Model](https://arxiv.org/abs/2310.02054)
  - Zibin Dong, Yifu Yuan, Jianye Hao, Fei Ni, Yao Mu, Yan Zheng, Yujing Hu, Tangjie Lv, Changjie Fan, Zhipeng Hu
  - 關鍵詞: RLHF, Alignment, Diffusion model

- [Eureka: Human-Level Reward Design via Coding Large Language Models](https://arxiv.org/abs/2310.12931)
  - Yecheng Jason Ma, William Liang, Guanzhi Wang, De-An Huang, Osbert Bastani, Dinesh Jayaraman, Yuke Zhu, Linxi Fan, Anima Anandkumar
  - 關鍵詞: LLM based, reward functions design

- [Safe RLHF: Safe Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2310.12773)
  - Josef Dai, Xuehai Pan, Ruiyang Sun, Jiaming Ji, Xinbo Xu, Mickel Liu, Yizhou Wang, Yaodong Yang
  - 關鍵詞: Sale RL, LLM fine-ture

- [Quality Diversity through Human Feedback](https://arxiv.org/abs/2310.12103)
  - Li Ding, Jenny Zhang, Jeff Clune, Lee Spector, Joel Lehman
  - 關鍵詞: Quality Diversity, Diffusion model

- [ReMax: A Simple, Effective, and Efficient Reinforcement Learning Method for Aligning Large Language Models](https://arxiv.org/abs/2310.10505)
  - Ziniu Li, Tian Xu, Yushun Zhang, Yang Yu, Ruoyu Sun, Zhi-Quan Luo
  - 關鍵詞: computational efficiency, variance-reduction technique

- [Tuning computer vision models with task rewards](https://arxiv.org/abs/2302.08242.pdf)
  - André Susano Pinto, Alexander Kolesnikov, Yuge Shi, Lucas Beyer, Xiaohua Zhai
  - 關鍵詞: Reward tuning in Computer Vision

- [The Wisdom of Hindsight Makes Language Models Better Instruction Followers](https://arxiv.org/pdf/2302.05206.pdf)
  - Tianjun Zhang, Fangchen Liu, Justin Wong, Pieter Abbeel, Joseph E. Gonzalez
  - 關鍵詞: Hindsight Instruction Relabeling, RLHF System, No Value Network Required
  - 程式碼: [official](https://github.com/tianjunz/HIR)

- [Language Instructed Reinforcement Learning for Human-AI Coordination](https://arxiv.org/pdf/2304.07297.pdf)
  - Hengyuan Hu, Dorsa Sadigh
  - 關鍵詞: Human-AI coordination, Human preference alignment, Instruction conditioned RL

- [Aligning Language Models with Offline Reinforcement Learning from Human Feedback](https://arxiv.org/pdf/2308.12050.pdf)
  - Jian Hu, Li Tao, June Yang, Chandler Zhou
  - 關鍵詞: Decision Transformer-based Alignment, Offline Reinforcement Learning, RLHF System

- [Preference Ranking Optimization for Human Alignment](https://arxiv.org/pdf/2306.17492)
  - Feifan Song, Bowen Yu, Minghao Li, Haiyang Yu, Fei Huang, Yongbin Li and Houfeng Wang
  - 關鍵詞: Supervised Human Preference Alignment, Preference Ranking Extension
  - 程式碼: [official](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/PRO)

- [Bridging the Gap: A Survey on Integrating (Human) Feedback for Natural Language Generation](https://arxiv.org/abs/2305.00955)
  - Patrick Fernandes, Aman Madaan, Emmy Liu, António Farinhas, Pedro Henrique Martins, Amanda Bertsch, José G. C. de Souza, Shuyan Zhou, Tongshuang Wu, Graham Neubig, André F. T. Martins
  - 關鍵詞: Natural Language Generation, Human Feedback Integration, Feedback Formalization and Taxonomy, AI Feedback and Principles-Based Judgments

- [GPT-4 Technical Report](https://cdn.openai.com/papers/gpt-4.pdf)
  - OpenAI
  - 關鍵詞: A large-scale, multimodal model, Transformerbased model, Fine-tuned used RLHF
  - 程式碼: [official](https://github.com/openai/evals)
  - 資料集: [DROP](https://allenai.org/data/drop), [WinoGrande](https://winogrande.allenai.org/), [HellaSwag](https://rowanzellers.com/hellaswag/), [ARC](https://allenai.org/data/arc), [HumanEval](https://github.com/openai/human-eval), [GSM8K](https://paperswithcode.com/dataset/gsm8k), [MMLU](https://paperswithcode.com/dataset/mmlu), [TruthfulQA](https://github.com/sylinrl/TruthfulQA)

- [RAFT: Reward rAnked FineTuning for Generative Foundation Model Alignment](https://arxiv.org/pdf/2304.06767.pdf)
  - Hanze Dong, Wei Xiong, Deepanshu Goyal, Rui Pan, Shizhe Diao, Jipeng Zhang, Kashun Shum, Tong Zhang
  - 關鍵詞: Rejection Sampling Finetuning, Alternative to PPO, Diffusion Model
  - 程式碼: [official](https://github.com/OptimalScale/LMFlow)
  
- [RRHF: Rank Responses to Align Language Models with Human Feedback without tears](https://arxiv.org/pdf/2304.05302v1.pdf)
  - Zheng Yuan, Hongyi Yuan, Chuanqi Tan, Wei Wang, Songfang Huang, Fei Huang
  - 關鍵詞: New paradigm for RLHF
  - 程式碼: [official](https://github.com/GanjinZero/RRHF)

- [Few-shot Preference Learning for Human-in-the-Loop RL](https://openreview.net/pdf?id=IKC5TfXLuW0)
  - Joey Hejna, Dorsa Sadigh
  - 關鍵詞: Preference Learning, Interactive Learning, Multi-task Learning, Expanding the pool of available data by viewing human-in-the-loop RL
  - 程式碼: [official](https://github.com/jhejna/few-shot-preference-rl)

- [Better Aligning Text-to-Image Models with Human Preference](https://arxiv.org/abs/2303.14420)
  - Xiaoshi Wu, Keqiang Sun, Feng Zhu, Rui Zhao, Hongsheng Li
  - 關鍵詞: Diffusion Model, Text-to-Image, Aesthetic
  - 程式碼: [official](https://github.com/tgxs002/align_sd)

- [ImageReward: Learning and Evaluating Human Preferences for Text-to-Image Generation](https://arxiv.org/pdf/2304.05977v2.pdf)
  - Jiazheng Xu, Xiao Liu, Yuchen Wu, Yuxuan Tong, Qinkai Li, Ming Ding, Jie Tang, Yuxiao Dong
  - 關鍵詞: General-purpose text-to-Image human preference RM, Evaluating Text-to-Image Generative Models
  - 程式碼: [official](https://github.com/THUDM/ImageReward)
  - 資料集: [COCO](https://cocodataset.org/#home), [DiffusionDB](https://poloclub.github.io/diffusiondb/)

- [Aligning Text-to-Image Models using Human Feedback](https://arxiv.org/pdf/2302.12192.pdf)
  - Kimin Lee, Hao liu, MoonKyung Ryu, Olivia Watkins, Yuqing Du, Craig Boutilier, Pieter Abbeel, Mohammad Ghavamzadeh, Shixiang Shane Gu
  - 關鍵詞: Text-to-Image, Stable diffusion model, Reward function that predicts human feedback

- [Visual ChatGPT: Talking, Drawing and Editing with Visual Foundation Models](https://arxiv.org/pdf/2303.04671.pdf)
  - Chenfei Wu, Shengming Yin, Weizhen Qi, Xiaodong Wang, Zecheng Tang, Nan Duan
  - 關鍵詞: Visual Foundation Models, Visual ChatGPT 
  - 程式碼: [official](https://github.com/microsoft/visual-chatgpt)

- [Pretraining Language Models with Human Preferences](https://arxiv.org/abs/2302.08582) (PHF)
  - Tomasz Korbak, Kejian Shi, Angelica Chen, Rasika Bhalerao, Christopher L. Buckley, Jason Phang, Samuel R. Bowman, Ethan Perez
  - 關鍵詞: Pretraining, offline RL, Decision transformer
  - 程式碼: [official](https://github.com/tomekkorbak/pretraining-with-human-feedback)

- [Aligning Language Models with Preferences through f-divergence Minimization](https://arxiv.org/abs/2302.08215) (f-DPG)
  - Dongyoung Go, Tomasz Korbak, Germán Kruszewski, Jos Rozen, Nahyeon Ryu, Marc Dymetman
  - 關鍵詞: f-divergence, RL with KL penalties

- [Principled Reinforcement Learning with Human Feedback from Pairwise or K-wise Comparisons](https://arxiv.org/pdf/2301.11270.pdf)
  - Banghua Zhu, Jiantao Jiao, Michael I. Jordan
  - 關鍵詞: Pessimistic MLE, Max-entropy IRL

- [The Capacity for Moral Self-Correction in Large Language Models](https://arxiv.org/pdf/2302.07459.pdf)
  - Anthropic
  - 關鍵詞: Improve moral self-correction capability by increasing RLHF training
  - Dataset; [BBQ](https://github.com/nyu-mll/BBQ)

### 2022

- [Is Reinforcement Learning (Not) for Natural Language Processing?: Benchmarks, Baselines, and Building Blocks for Natural Language Policy Optimization](https://arxiv.org/abs/2210.01241) (NLPO)
  - Rajkumar Ramamurthy, Prithviraj Ammanabrolu, Kianté,Brantley, Jack Hessel, Rafet Sifa, Christian Bauckhage, Hannaneh Hajishirzi, Yejin Choi
  - 關鍵詞: Optimizing language generators with RL, Benchmark,  Performant RL algorithm
  - 程式碼: [official](https://github.com/allenai/RL4LMs)
  - 資料集: [IMDB](https://www.imdb.com/interfaces/), [CommonGen](https://inklab.usc.edu/CommonGen/), [CNN Daily Mail](https://github.com/abisee/cnn-dailymail), [ToTTo](https://github.com/google-research-datasets/ToTTo), [WMT-16 (en-de)](https://www.statmt.org/wmt16/it-translation-task.html),[NarrativeQA](https://github.com/deepmind/narrativeqa), [DailyDialog](http://yanran.li/dailydialog)
- [Scaling Laws for Reward Model Overoptimization](https://arxiv.org/abs/2210.10760)
  - Leo Gao, John Schulman, Jacob Hilton
  - 關鍵詞: Gold reward model train proxy reward model, Dataset size, Policy parameter size, BoN, PPO
- [Improving alignment of dialogue agents via targeted human judgements](https://arxiv.org/abs/2209.14375) (Sparrow)
  - Amelia Glaese, Nat McAleese, Maja Trębacz, et al.
  - 關鍵詞: Information-seeking dialogue agent, Break down the good dialogue into natural language rules, DPC, Interact with the model to elicit violation of a specific rule (Adversarial Probing)
  - 資料集: [Natural Questions](https://ai.google.com/research/NaturalQuestions), [ELI5](https://facebookresearch.github.io/ELI5/), [QuALITY](https://github.com/nyu-mll/quality), [TriviaQA](http://nlp.cs.washington.edu/triviaqa/), [WinoBias](https://github.com/uclanlp/corefBias/tree/master/WinoBias/wino), [BBQ](https://github.com/nyu-mll/BBQ)
- [Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned](https://arxiv.org/abs/2209.07858)
  - Deep Ganguli, Liane Lovitt, Jackson Kernion, et al.
  - 關鍵詞: Red team language model, Investigate scaling behaviors, Read teaming Dataset
  - 程式碼: [official](https://github.com/anthropics/hh-rlhf)
- [Dynamic Planning in Open-Ended Dialogue using Reinforcement Learning](https://arxiv.org/abs/2208.02294)
  - Deborah Cohen, Moonkyung Ryu, Yinlam Chow, Orgad Keller, Ido Greenberg, Avinatan Hassidim, Michael Fink, Yossi Matias, Idan Szpektor, Craig Boutilier, Gal Elidan
  - 關鍵詞: Real-time, Open-ended dialogue system, Pairs the succinct embedding of the conversation state by language models, CAQL, CQL, [BERT](https://github.com/google-research/bert)
- [Quark: Controllable Text Generation with Reinforced Unlearning](https://arxiv.org/abs/2205.13636)
  - Ximing Lu, Sean Welleck, Jack Hessel, Liwei Jiang, Lianhui Qin, Peter West, Prithviraj Ammanabrolu, Yejin Choi
  - 關鍵詞: Fine-tuning the language model on signals of what not to do, Decision Transformer, LLM tuning with PPO
  - 程式碼: [official](https://github.com/gximinglu/quark)
  - 資料集: [WRITINGPROMPTS](https://www.kaggle.com/datasets/ratthachat/writing-prompts), [SST-2](https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english), [WIKITEXT-103](https://blog.salesforceairesearch.com/the-wikitext-long-term-dependency-language-modeling-dataset/)
- [Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2204.05862)
  - Yuntao Bai, Andy Jones, Kamal Ndousse, et al.
  - 關鍵詞: Harmless assistants, Online mode, Robustness of RLHF training, OOD detection.
  - 程式碼: [official](https://github.com/anthropics/hh-rlhf)
  - 資料集: [TriviaQA](http://nlp.cs.washington.edu/triviaqa/), [HellaSwag](https://rowanzellers.com/hellaswag/), [ARC](https://allenai.org/data/arc), [OpenBookQA](https://allenai.org/data/open-book-qa), [LAMBADA](https://zenodo.org/record/2630551#.Y_KLJ-yZNhF), [HumanEval](https://github.com/openai/human-eval), [MMLU](https://github.com/hendrycks/test), [TruthfulQA](https://github.com/sylinrl/TruthfulQA)
- [Teaching language models to support answers with verified quotes](https://arxiv.org/abs/2203.11147) (GopherCite)
  - Jacob Menick, Maja Trebacz, Vladimir Mikulik, John Aslanides, Francis Song, Martin Chadwick, Mia Glaese, Susannah Young, Lucy Campbell-Gillingham, Geoffrey Irving, Nat McAleese
  - 關鍵詞: Generate answers which citing specific evidence, Abstain from answering when unsure
  - 資料集: [Natural Questions](https://ai.google.com/research/NaturalQuestions), [ELI5](https://facebookresearch.github.io/ELI5/), [QuALITY](https://github.com/nyu-mll/quality), [TruthfulQA](https://github.com/sylinrl/TruthfulQA)
- [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) (InstructGPT)
  - Long Ouyang, Jeff Wu, Xu Jiang, et al.
  - 關鍵詞: Large Language Model, Align Language Model with Human Intent
  - 程式碼: [official](https://github.com/openai/following-instructions-human-feedback)
  - 資料集: [TruthfulQA](https://github.com/sylinrl/TruthfulQA), [RealToxicityPrompts](https://allenai.org/data/real-toxicity-prompts)
- [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/pdf/2212.08073.pdf)
  - Yuntao Bai, Saurav Kadavath, Sandipan Kundu, Amanda Askell, Jackson Kernion, et al.
  - 關鍵詞: RL from AI feedback(RLAIF), Training a harmless AI assistant through selfimprovement, Chain-of-thought style, Control AI behavior more precisely
  - 程式碼: [official](https://github.com/anthropics/ConstitutionalHarmlessnessPaper)
- [Discovering Language Model Behaviors with Model-Written Evaluations](https://arxiv.org/abs/2212.09251)
  - Ethan Perez, Sam Ringer, Kamilė Lukošiūtė, Karina Nguyen, Edwin Chen, et al.
  - 關鍵詞: Automatically generate evaluations with LMs, More RLHF makes LMs worse, LM-written evaluations are highquality
  - 程式碼: [official](https://github.com/anthropics/evals)
  - 資料集: [BBQ](https://github.com/nyu-mll/BBQ), [Winogender Schemas](https://github.com/rudinger/winogender-schemas)
- [Non-Markovian Reward Modelling from Trajectory Labels via Interpretable Multiple Instance Learning](https://arxiv.org/abs/2205.15367)
  - Joseph Early, Tom Bewley, Christine Evers, Sarvapali Ramchurn
  - 關鍵詞: Reward Modelling (RLHF), Non-Markovian, Multiple Instance Learning, Interpretability
  - 程式碼: [official](https://github.com/JAEarly/MIL-for-Non-Markovian-Reward-Modelling)
- [SURF: Semi-supervised Reward Learning with Data Augmentation for Feedback-efficient Preference-based Reinforcement Learning](https://arxiv.org/abs/2203.10050)
  - Jongjin Park, Younggyo Seo, Jinwoo Shin, Honglak Lee, Pieter Abbeel, Kimin Lee
  - 關鍵詞: Semi-supervised Reward Learning, Preference Data Augmentation, RLHF Efficiency
- [Reward Uncertainty for Exploration in Preference-based Reinforcement Learning](https://arxiv.org/abs/2205.12401)
  - Xinran Liang, Katherine Shu, Kimin Lee, Pieter Abbeel
  - 關鍵詞: Preference-based RL (PbRL), Exploration, Reward Uncertainty, Feedback Efficiency
  - 程式碼: [official](https://github.com/rll-research/rune)

### 2021
- [WebGPT: Browser-assisted question-answering with human feedback](https://arxiv.org/abs/2112.09332) (WebGPT)
  - Reiichiro Nakano, Jacob Hilton, Suchir Balaji, et al.
  - 關鍵詞: Model search the web and provide reference， Imitation learning， BC, long form question
  - 資料集: [ELI5](https://facebookresearch.github.io/ELI5/), [TriviaQA](http://nlp.cs.washington.edu/triviaqa/), [TruthfulQA](https://github.com/sylinrl/TruthfulQA)
- [Recursively Summarizing Books with Human Feedback](https://arxiv.org/abs/2109.10862)
  - Jeff Wu, Long Ouyang, Daniel M. Ziegler, Nisan Stiennon, Ryan Lowe, Jan Leike, Paul Christiano
  - 關鍵詞: Model trained on small task to assist human evaluate broader task, BC
  - 資料集: [Booksum](https://github.com/salesforce/booksum), [NarrativeQA](https://github.com/deepmind/narrativeqa)
- [Revisiting the Weaknesses of Reinforcement Learning for Neural Machine Translation](https://arxiv.org/abs/2106.08942)
  - Samuel Kiegeland, Julia Kreutzer
  - 關鍵詞: The success of policy gradient is because of reward rather than the shape of output distribution, Machine Translation, NMT, DOmain Adaption
  - 程式碼: [official](https://github.com/samuki/reinforce-joey)
  - 資料集: [WMT15](https://www.statmt.org/wmt15/index.html), [IWSLT14](https://sites.google.com/site/iwsltevaluation2014/mt-track)
- [PEBBLE: Feedback-Efficient Interactive Reinforcement Learning via Relabeling Experience and Unsupervised Pre-training](https://arxiv.org/abs/2106.05091)
  - Kimin Lee, Laura Smith, Pieter Abbeel
  - 關鍵詞: Preference-based RL (PbRL), Data Efficiency, Unsupervised Pretraining, Reward Relabeling
  - 程式碼: [official](https://github.com/rll-research/BPref)
- [B-Pref: Benchmarking Preference-Based Reinforcement Learning](https://arxiv.org/abs/2111.03026)
  - Kimin Lee, Laura Smith, Anca Dragan, Pieter Abbeel
  - 關鍵詞: Benchmark, Preference-based RL, Simulated Human Feedback, Robustness Evaluation
  - 程式碼: [official](https://github.com/rll-research/BPref)

### 2020年及之前

- [Learning to summarize from human feedback](https://arxiv.org/abs/2009.01325)
  - Nisan Stiennon, Long Ouyang, Jeff Wu, Daniel M. Ziegler, Ryan Lowe, Chelsea Voss, Alec Radford, Dario Amodei, Paul Christiano
  - 關鍵詞: Care about summary quality, Training loss affect the model behavior, Reward model generalizes to new datasets
  - 程式碼: [official](https://github.com/openai/summarize-from-feedback)
  - 資料集: [TL;DR](https://www.tensorflow.org/datasets/catalog/reddit), [CNN/DM](https://github.com/abisee/cnn-dailymail)
- [Fine-Tuning Language Models from Human Preferences](https://arxiv.org/abs/1909.08593)
  - Daniel M. Ziegler, Nisan Stiennon, Jeffrey Wu, Tom B. Brown, Alec Radford, Dario Amodei, Paul Christiano, Geoffrey Irving
  - 關鍵詞: Reward learning for language, Continuing text with positive sentiment, Summary task, Physical descriptive
  - 程式碼: [official](https://github.com/openai/lm-human-preferences)
  - 資料集: [TL;DR](https://www.tensorflow.org/datasets/catalog/reddit), [CNN/DM](https://github.com/abisee/cnn-dailymail)
- [Scalable agent alignment via reward modeling: a research direction](https://arxiv.org/abs/1811.07871)
  - Jan Leike, David Krueger, Tom Everitt, Miljan Martic, Vishal Maini, Shane Legg
  - 關鍵詞: Agent alignment problem, Learn reward from interaction, Optimize reward with RL, Recursive reward modeling
  - 程式碼: [official](https://github.com/rddy/ReQueST)
  - 環境: Atari
- [Reward learning from human preferences and demonstrations in Atari](https://arxiv.org/abs/1811.06521)
  - Borja Ibarz, Jan Leike, Tobias Pohlen, Geoffrey Irving, Shane Legg, Dario Amodei
  - 關鍵詞: Expert demonstration trajectory preferences reward hacking problem, Noise in human label
  - 程式碼: [official](https://github.com/rddy/ReQueST)
  - 環境: Atari
- [Deep TAMER: Interactive Agent Shaping in High-Dimensional State Spaces](https://arxiv.org/abs/1709.10163)
  - Garrett Warnell, Nicholas Waytowich, Vernon Lawhern, Peter Stone
  - 關鍵詞: High dimension state, Leverage the input of Human trainer
  - 程式碼: [third party](https://github.com/bharadwaj1098/Tamer)
  - 環境: Atari
- [Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741)
  - Paul Christiano, Jan Leike, Tom B. Brown, Miljan Martic, Shane Legg, Dario Amodei
  - 關鍵詞: Explore goal defined in human preferences between pairs of trajectories segmentation, Learn more complex thing than human feedback
  - 程式碼: [official](https://github.com/mrahtz/learning-from-human-preferences)
  - 環境: Atari, MuJoCo
- [Interactive Learning from Policy-Dependent Human Feedback](https://arxiv.org/abs/1701.06049)
  - James MacGlashan, Mark K Ho, Robert Loftin, Bei Peng, Guan Wang, David Roberts, Matthew E. Taylor, Michael L. Littman
  - 關鍵詞: Decision is influenced by current policy rather than human feedback, Learn from policy dependent feedback that converges to a local optimal

## 密碼

```
format:
- [title](codebase link) [links]
  - author1, author2, and author3...
  - keyword
  - experiment environments, datasets or tasks
```

- [Reinforcement Learning from Human Feedback (RLHF) in Notebooks](https://github.com/ash80/RLHF_in_notebooks)
  - Ashwani Kumar
  - step-by-step, Video tutorial, Jupyter notebooks, GPT-2, Reward Model, PPO, Pedagogical
  - 資料集: [stanfordnlp/sst2](https://huggingface.co/datasets/stanfordnlp/sst2)
  - 任務: 以正感產生文字
  - 環境: Google Colab
- [veRL: Volcano Engine Reinforcement Learning for LLM](https://github.com/volcengine/verl)
  - ByteDance Seed MLSys Team & HKU: Guangming Sheng, Chi Zhang, Zilingfeng Ye, Xibin Wu, Wang Zhang, Ru Zhang, Yanghua Peng, Haibin Lin, Chuan Wu
  - 關鍵詞: Flexible, Efficient, RLHF framework
  - 任務: RLHF,包括數學和 code.
- [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)
  - OpenRLHF
  - 關鍵詞: 70B, RLHF, DeepSpeed, Ray, vLLM
  - 任務: 易用、可伸展和高性能 RLHF 框架(支持70B+全調音 & LoRA & Mixtral & KTO)。
- [Potato](https://github.com/davidjurgens/potato)
  - David Jurgens et al.
  - 關鍵詞: Annotation, Human Evaluation, Quality Control, AI-Assisted Labeling
  - 任務: 人性評估與回復收集的便携註解平台,
- [PaLM + RLHF - Pytorch](https://github.com/lucidrains/PaLM-rlhf-pytorch)
  - Phil Wang, Yachine Zahidi, Ikko Eltociear Ashimine, Eric Alcaide
  - 關鍵詞: Transformers, PaLM architecture
  - 資料集: [enwik8](http://prize.hutter1.net/)
- [lm-human-preferences](https://github.com/openai/lm-human-preferences)
  - Daniel M. Ziegler, Nisan Stiennon, Jeffrey Wu, Tom B. Brown, Alec Radford, Dario Amodei, Paul Christiano, Geoffrey Irving
  - 關鍵詞: Reward learning for language, Continuing text with positive sentiment, Summary task, Physical  descriptive
  - 資料集: [TL;DR](https://www.tensorflow.org/datasets/catalog/reddit), [CNN/DM](https://github.com/abisee/cnn-dailymail)
- [following-instructions-human-feedback](https://github.com/openai/following-instructions-human-feedback)
  - Long Ouyang, Jeff Wu, Xu Jiang, et al.
  - 關鍵詞: Large Language Model, Align Language Model with Human Intent
  - 資料集: [TruthfulQA](https://github.com/sylinrl/TruthfulQA) [RealToxicityPrompts](https://allenai.org/data/real-toxicity-prompts)
- [Transformer Reinforcement Learning (TRL)](https://github.com/lvwerra/trl)
  - Leandro von Werra, Younes Belkada, Lewis Tunstall, et al.
  - 關鍵詞: Train LLM with RL, PPO, Transformer
  - 任務: [IMDB sentiment](https://www.imdb.com/interfaces/)
- [Transformer Reinforcement Learning X (TRLX)](https://github.com/CarperAI/trlx)
  - Jonathan Tow, Leandro von Werra, et al.
  - 關鍵詞: Distributed training framework, T5-based language models, Train LLM with RL, PPO, ILQL
  - 任務: 微調 LLM 使用提供的回報函數或回報標示的資料集
- [RL4LMs (A modular RL library to fine-tune language models to human preferences)](https://github.com/allenai/RL4LMs)
  - Rajkumar Ramamurthy, Prithviraj Ammanabrolu, Kianté,Brantley, Jack Hessel, Rafet Sifa, Christian Bauckhage, Hannaneh Hajishirzi, Yejin Choi
  - 關鍵詞: Optimizing language generators with RL, Benchmark,  Performant RL algorithm
  - 資料集: [IMDB](https://www.imdb.com/interfaces/), [CommonGen](https://inklab.usc.edu/CommonGen/), [CNN Daily Mail](https://github.com/abisee/cnn-dailymail), [ToTTo](https://github.com/google-research-datasets/ToTTo), [WMT-16 (en-de)](https://www.statmt.org/wmt16/it-translation-task.html), [NarrativeQA](https://github.com/deepmind/narrativeqa), [DailyDialog](http://yanran.li/dailydialog)
- [LaMDA-rlhf-pytorch](https://github.com/conceptofmind/LaMDA-rlhf-pytorch)
  - Phil Wang
  - 關鍵詞: LaMDA, Attention-mechanism
  - 任務: PyTorch 的 Google LaMDA 研究文件開源前訓練
- [TextRL](https://github.com/voidful/TextRL)
  - Eric Lam
  - 關鍵詞: huggingface's transformer
  - 任務: 文字生成
  - 環境: PFRL, gym
- [minRLHF](https://github.com/thomfoster/minRLHF)
  - Thomfoster
  - 關鍵詞: PPO, Minimal library
  - 任務: 教育目的
- [DeepSpeed-Chat](https://github.com/microsoft/DeepSpeedExamples/tree/master/applications/DeepSpeed-Chat)
  - Microsoft
  - 關鍵詞: Affordable RLHF Training
- [Dromedary](https://github.com/IBM/Dromedary)
  - IBM
  - 關鍵詞: Minimal human supervision, Self-aligned
  - 任務: 自我相通的語言模型,
- [FG-RLHF](https://finegrainedrlhf.github.io/)
  - Zeqiu Wu, Yushi Hu, Weijia Shi, et al.
  - 關鍵詞: Fine-Grained RLHF, providing a reward after every segment, Incorporating multiple RMs associated with different feedback types
  - 任務: 能夠從密度和多重 RM 中精細分明的獎勵功能中學習與訓練的框架
-[Safe-RLHF](https://github.com/PKU-Alignment/safe-rlhf)
  - Xuehai Pan, Ruiyang Sun, Jiaming Ji, et al.
  - 關鍵詞: Support popular pre-trained models, Large human-labeled dataset, Multi-scale metrics for safety constraints verification, Customized parameters
  - 任務: 限制值對應 LLM 通過安全 RLHF
- [VinePPO](https://github.com/McGill-NLP/VinePPO)
  - Amirhossein Kazemnejad, Milad Aghajohari, et al.
  - 關鍵詞: Performant Implementation of RL algorithms for Reasoning, PPO, DPO, RestEM, Monte Carlo Value Estimation 
  - 任務: 包括MATH 和 GSM8K 在内的原因工作

## 數據集
```
format:
- [title](dataset link) [links]
  - author1, author2, and author3...
  - keyword
  - experiment environments or tasks
```
- [HH-RLHF](https://github.com/anthropics/hh-rlhf)
  - Ben Mann, Deep Ganguli
  - 關鍵詞: Human preference dataset, Red teaming data, machine-written
  - 任務: 人類偏好數據的開源數據集 :
- [Stanford Human Preferences Dataset(SHP)](https://huggingface.co/datasets/stanfordnlp/SHP)
  - Ethayarajh, Kawin and Zhang, Heidi and Wang, Yizhong and Jurafsky, Dan
  - 關鍵詞: Naturally occurring and human-written dataset,18 different subject areas
  - 任務: 打算用于訓練 RLHF 獎勵模式
- [PromptSource](https://github.com/bigscience-workshop/promptsource)
  - Stephen H. Bach, Victor Sanh, Zheng-Xin Yong et al.
  - 關鍵詞: Prompted English datasets,  Mapping a data example into natural language
  - 任務: 建立、分享和使用自然語言提示工具箱
- [Structured Knowledge Grounding(SKG) Resources Collections](https://unifiedskg.com/)
  - Tianbao Xie, Chen Henry Wu, Peng Shi et al.
  - 關鍵詞: Structured Knowledge Grounding
  - 任務: 數據集的收集與結構的知識定位有關
- [The Flan Collection](https://github.com/google-research/FLAN/tree/main/flan/v2)
  - Longpre Shayne, Hou Le, Vu Tu et al.
  - 任務: 收集汇编 Flan 2021, P3, 超自然指令的數據集 
- [rlhf-reward-datasets](https://huggingface.co/datasets/yitingxie/rlhf-reward-datasets)
  - Yiting Xie
  - 關鍵詞: Machine-written dataset
- [webgpt_comparisons](https://huggingface.co/datasets/openai/webgpt_comparisons)
  - OpenAI
  - 關鍵詞: Human-written dataset, Long form question answering 
  - 任務: 訓練一個長格式的回答模式,以配合人類的喜好
- [summarize_from_feedback](https://huggingface.co/datasets/openai/summarize_from_feedback)
  - OpenAI
  - 關鍵詞: Human-written dataset, summarization
  - 任務: 訓練一個總結模型來配合人類的喜好
- [Dahoas/synthetic-instruct-gptj-pairwise](https://huggingface.co/datasets/Dahoas/synthetic-instruct-gptj-pairwise)
  - Dahoas
  - 關鍵詞: Human-written dataset, synthetic dataset
- [Stable Alignment - Alignment Learning in Social Games](https://github.com/agi-templar/Stable-Alignment)
  - Ruibo Liu, Ruixin (Ray) Yang, Qiang Peng
  - 關鍵詞: Interaction data used for alignment training, Run in Sandbox
  - 任務: 模擬社交遊戲中記錄的互動資料的列車
- [LIMA](https://huggingface.co/datasets/GAIR/lima)
  - Meta AI
  - 關鍵詞: without any RLHF, few carefully curated prompts and responses
  - 任務: 用于訓練 LIMA 模型的數據集



## 部落格

- [OpenAI] [ChatGPT: Optimizing Language Models for Dialogue](https://openai.com/blog/chatgpt)
- [Hugging Face] [Illustrating Reinforcement Learning from Human Feedback (RLHF)](https://huggingface.co/blog/rlhf)
- [ZhiHu] [通向AGI之路：大型语言模型 (LLM) 技术精要](https://zhuanlan.zhihu.com/p/597586623)
- [ZhiHu] [大语言模型的涌现能力：现象与解释](https://zhuanlan.zhihu.com/p/621438653)
- [ZhiHu] [中文hh-rlhf数据集上的ppo实践](https://zhuanlan.zhihu.com/p/652044120)
- [W&B Fully Connected][ Understanding Reinforcement Learning from Human Feedback (RLHF)](https://wandb.ai/ayush-thakur/RLHF/reports/Understanding-Reinforcement-Learning-from-Human-Feedback-RLHF-Part-1--VmlldzoyODk5MTIx)
- [Deepmind] [Learning through human feedback](https://www.deepmind.com/blog/learning-through-human-feedback)
- [Notion] [深入理解语言模型的突现能力](https://yaofu.notion.site/514f4e63918749398a1a8a4c660e0d5b)
- [Notion] [拆解追溯 GPT-3.5 各项能力的起源](https://yaofu.notion.site/GPT-3-5-360081d91ec245f29029d37b54573756#cf00f4e11d974187956122ce7d534386)
- [gist] [Reinforcement Learning for Language Models](https://gist.github.com/yoavg/6bff0fecd65950898eba1bb321cfbd81)
- [YouTube] [John Schulman - Reinforcement Learning from Human Feedback: Progress and Challenges](https://www.youtube.com/watch?v=hhiLw5Q_UFg)
- [OpenAI / Arize] [OpenAI on Reinforcement Learning With Human Feedback](https://arize.com/blog/openai-on-rlhf/)
- [Encord] [Guide to Reinforcement Learning from Human Feedback (RLHF) for Computer Vision](https://encord.com/blog/guide-to-rlhf/)
- [hijkzzz] [A Survey of Reinforcement Learning from Human Feedback (RLHF)](https://hijkzzz.notion.site/a-survey-of-rlhf)
- [Weixun Wang] [Overview of RL(HF)+LLM](https://github.com/wwxFromTju/wwxFromTju.github.io/blob/master/slide/RL(HF)%2BLLM%E7%9A%84%E7%89%87%E9%9D%A2%E8%84%89%E7%BB%9C.JPG)
- [Lilian Weng] [Reward Hacking in Reinforcement Learning](https://lilianweng.github.io/posts/2024-11-28-reward-hacking/)


## 书籍
- [Reinforcement Learning from Human Feedback by Nathan Lambert](https://rlhfbook.com/)
- [Reinforcement Learning for Business](https://www.manning.com/books/reinforcement-learning-for-business)
- [The RLHF Book](https://www.manning.com/books/the-rlhf-book)

## 其他語言支援

[Turkish](README_TU.md)

## 捐款

我們的目標是讓這項回歸更加美好 若您想捐款,請參考 [HERE](CONTRIBUTING.md) 以提供指示。

## 執照

太棒了 RLHF 以 Apache 2.0 授權放行。
