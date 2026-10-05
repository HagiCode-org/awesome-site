# Impresionante RLHF (RL con Comentarios Humanos)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)  ![visitor badge](https://visitor-badge.lithub.cc/badge?page_id=opendilab.awesome-RLHF&left_text=Visitors) ![GitHub stars](https://img.shields.io/github/stars/opendilab/awesome-RLHF?color=yellow) ![GitHub forks](https://img.shields.io/github/forks/opendilab/awesome-RLHF?color=9cf) [![GitHub license](https://img.shields.io/github/license/opendilab/awesome-RLHF)](https://github.com/opendilab/awesome-RLHF/blob/main/LICENSE)

Esta es una colección de documentos de investigación para **Aprendizaje de Reforzamiento con Retroalimentación Humana** (Aprendizaje de Retroalimentación Humana**)RLHF). Y el repositorio será continuamente actualizado para rastrear la frontera RLHF.

¡Bienvenido a seguir y estrella!


## Cuadro de contenidos

- [Impresionante RLHF (RL con Comentarios Humanos)](#awesome-rlhf-rl-with-human-feedback)
  - [Cuadro de contenidos](#table-of-contents)
  - [Panorama general RLHF](#overview-of-rlhf)
    - [Explicación detallada](#detailed-explanation)
  - [Documentos](#papers)
    - [2026](#2026)
    - [2025](#2025)
    - [2024](#2024)
    - [2023](#2023)
    - [2022](#2022)
    - [2021](#2021)
    - [2020 y antes](#2020-and-before)
  - [Codebases](#codebases)
  - [Dataset](#dataset)
  - [Blogs](#blogs)
  - [Libros](#books)
  - [Otros idiomas de apoyo](#other-language-support)
  - [Contribución](#contributing)
  - [Licencia](#license)

## Panorama general RLHF

La idea de RLHF es utilizar métodos desde el aprendizaje de refuerzo para optimizar directamente un modelo de lenguaje con retroalimentación humana. RLHF ha permitido que los modelos lingüísticos comiencen a alinear un modelo formado sobre un corpus general de datos de texto al de valores humanos complejos.

- RLHF para el modelo de lenguaje grande (LLM)

![image info](./overview_chatgpt.png)

- RLHF para el juego de vídeo (por ejemplo. Atari)

![image info](./overview_video_game.png)

### Explicación detallada 

**(La siguiente sección fue generada automáticamente por ChatGPT)**

RLHF típicamente se refiere a "Aprendizaje de Refuerzo con Retroalimentación Humana". Reinforcement Learning (RL) es un tipo de aprendizaje automático que implica la formación de un agente para tomar decisiones basadas en la retroalimentación de su entorno. In RLHF, el agente también recibe retroalimentación de los humanos en forma de calificaciones o evaluaciones de sus acciones, lo que puede ayudar a aprender más rápidamente y con precisión.

RLHF es un área de investigación activa en inteligencia artificial, con aplicaciones en campos como robótica, juegos y sistemas de recomendación personalizados. Se trata de abordar los desafíos de la RL en escenarios donde el agente tiene acceso limitado a la retroalimentación del medio ambiente y requiere la aportación humana para mejorar su rendimiento.

Reforzamiento Aprendizaje con Retroalimentación HumanaRLHF) es un área de desarrollo rápido de la investigación en inteligencia artificial, y hay varias técnicas avanzadas que se han desarrollado para mejorar el rendimiento de RLHF sistemas. Estos son algunos ejemplos:

- `Inverse Reinforcement Learning (IRL)`: IRL es una técnica que permite al agente aprender una función de recompensa de la retroalimentación humana, en lugar de depender de funciones de recompensa predefinidas. Esto hace posible que el agente aprenda de señales de retroalimentación más complejas, como demostraciones de comportamiento deseado.

- `Apprenticeship Learning`: El aprendizaje de aprendizaje es una técnica que combina IRL con el aprendizaje supervisado para que el agente pueda aprender tanto de la retroalimentación humana como de las demostraciones expertas. Esto puede ayudar al agente a aprender más rápido y eficazmente, ya que es capaz de aprender tanto de la retroalimentación positiva como negativa.

- `Interactive Machine Learning (IML)`: IML es una técnica que implica la interacción activa entre el agente y el experto humano, permitiendo al experto proporcionar información sobre las acciones del agente en tiempo real. Esto puede ayudar al agente a aprender más rápido y eficientemente, ya que puede recibir comentarios sobre sus acciones en cada paso del proceso de aprendizaje.

- `Human-in-the-Loop Reinforcement Learning (HITLRL)`: HITLRL es una técnica que implica la integración de la retroalimentación humana en el proceso RL en múltiples niveles, como la configuración de recompensas, la selección de acciones y la optimización de políticas. Esto puede ayudar a mejorar la eficiencia y eficacia de la RLHF sistema aprovechando las fortalezas de humanos y máquinas.

He aquí algunos ejemplos de Aprendizaje de Reforzamiento con Retroalimentación Humana (Aprendizaje con Retroalimentación Humana)RLHF):

- `Game Playing`: En juego, la retroalimentación humana puede ayudar al agente a aprender estrategias y tácticas que son eficaces en diferentes escenarios de juego. Por ejemplo, en el popular juego de Go, los expertos humanos pueden proporcionar retroalimentación al agente en sus movimientos, ayudando a mejorar su juego y toma de decisiones.

- `Personalized Recommendation Systems`: En sistemas de recomendación, la retroalimentación humana puede ayudar al agente a aprender las preferencias de los usuarios individuales, haciendo posible proporcionar recomendaciones personalizadas. Por ejemplo, el agente podría utilizar la retroalimentación de los usuarios sobre los productos recomendados para aprender qué características son más importantes para ellos.

- `Robotics`: En robótica, la retroalimentación humana puede ayudar al agente a aprender a interactuar con el entorno físico de una manera segura y eficiente. Por ejemplo, un robot podría aprender a navegar un nuevo entorno más rápidamente con la retroalimentación de un operador humano en el mejor camino a tomar o qué objetos a evitar.

- `Education`: En la educación, la retroalimentación humana puede ayudar al agente a aprender a enseñar a los estudiantes más eficazmente. Por ejemplo, un tutor con base en AI podría utilizar comentarios de los maestros sobre los cuales las estrategias de enseñanza funcionan mejor con diferentes estudiantes, ayudando a personalizar la experiencia de aprendizaje.

## Documentos

También puede [visite este enlace](https://codekidz.ai/lesson-intro/awesome-rlhf-367190) para obtener una experiencia de lectura de papel mejorada por AI.

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
  - Palabra clave: DPO, RLHF, Preference, Alignment, LLM

- [What's In My Human Feedback? Learning Interpretable Descriptions of Preference Data](https://openreview.net/pdf?id=sC6A1bFDUt)
  - Rajiv Movva, Smitha Milli, Sewon Min, Emma Pierson
  - Palabra clave: RLHF, Preference, Alignment, Safety, Human Feedback

- [Multiplayer Nash Preference Optimization](https://openreview.net/pdf?id=x7aLhLMVn1)
  - Fang Wu, Xu Huang, Weihao Xuan, Zhiwei Zhang, Yijia Xiao, Guancheng Wan, Xiaomin Li, Bing Hu, Peng Xia, Jure Leskovec, Yejin Choi
  - Palabra clave: PPO, RLHF, Preference, Alignment, LLM

- [Token-Importance Guided Direct Preference Optimization](https://openreview.net/pdf?id=cMEnMVvMw9)
  - Ning Yang, Hai Lin, Yibo Liu, Baoliang Tian, Guoqing Liu, Haijun Zhang
  - Palabra clave: DPO, RLHF, Preference, Alignment, LLM

- [SafeDPO: A Simple Approach to Direct Preference Optimization with Enhanced Safety](https://openreview.net/pdf?id=PJdw4VBsXD)
  - Geon-Hyeong Kim, Yu Jin Kim, Byoungjip Kim, Honglak Lee, Kyunghoon Bae, Youngsoo Jang, Moontae Lee
  - Palabra clave: DPO, RLHF, Reward Model, Preference, Alignment

- [BaseReward: A Strong Baseline for Multimodal Reward Model](https://openreview.net/pdf?id=EuN5iszF0a)
  - YiFan Zhang, Haihua Yang, Huanyu Zhang, Yang Shi, Zezhou Chen, Haochen Tian, Chaoyou Fu, Kai WU, Bo Cui, Xu Wang, Jianfei Pan, Haotian Wang, Zhang Zhang, Liang Wang
  - Palabra clave: RLHF, Reward Model, Preference, Multimodal, LLM

- [The Alignment Auditor: A Bayesian Framework for Verifying and Refining LLM Objectives](https://openreview.net/pdf?id=CH7TfRLqSF)
  - Matthieu Bou, Nyal Patel, Arjun Jagota, Satyapriya Krishna, Sonali Parbhoo
  - Palabra clave: RLHF, Preference, Alignment, Safety, LLM

- [Uni-DPO: A Unified Paradigm for Dynamic Preference Optimization of LLMs](https://openreview.net/pdf?id=G7DBGlgjjp)
  - Shangpin Peng, Weinong Wang, Zhuotao Tian, Senqiao Yang, Xing W, Haotian Xu, Chengquan Zhang, Takashi Isobe, Baotian Hu, Min Zhang
  - Palabra clave: DPO, RLHF, Preference, Multimodal, LLM

- [Learning to summarize user information for personalized reinforcement learning from human feedback](https://openreview.net/pdf?id=Ar078WR3um)
  - HyunJi Nam, Yanming Wan, Mickel Liu, Peter F. Ahnn, Jianxun Lian, Natasha Jaques
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, LLM

- [Token-Guard: Towards Token-Level Hallucination Control via Self-Checking Decoding](https://openreview.net/pdf?id=5fCDEz43ya)
  - Yifan Zhu, Huiqiang Rong, Haoran Luo
  - Palabra clave: RLHF, LLM, Token-level, Reinforcement Learning, Human Feedback

- [Pretrain Value, Not Reward: Decoupled Value Policy Optimization](https://openreview.net/pdf?id=qirGds1BmK)
  - Chenghua Huang, Lu Wang, Fangkai Yang, Pu Zhao, Qingwei Lin, Dongmei Zhang, Saravan Rajmohan
  - Palabra clave: RLHF, Reward Model, Preference, LLM, Optimization

- [P$^2$-DPO: Grounding Hallucination in Perceptual Processing via Calibration Direct Preference Optimization](https://openreview.net/pdf?id=ekOwxTn65Y)
  - ruipeng zhang, Zhihao Li, Haozhang Yuan, C.L.Philip Chen, Tong Zhang
  - Palabra clave: DPO, Preference, Optimization, Human Feedback

- [Unifying Stable Optimization and Reference Regularization in RLHF](https://openreview.net/pdf?id=QpqBqCTtW4)
  - Li He, Qiang Qu, He Zhao, Stephen Wan, Dadong Wang, Lina Yao, Tongliang Liu
  - Palabra clave: RLHF, Preference, Alignment, Optimization, Reinforcement Learning

- [Text2Grad: Reinforcement Learning from Natural Language Feedback](https://openreview.net/pdf?id=SIE9fNq8lk)
  - Hanyang Wang, Lu Wang, Chaoyun Zhang, Tianjun Mao, Si Qin, Qingwei Lin, Saravan Rajmohan, Dongmei Zhang
  - Palabra clave: RLHF, Reward Model, Alignment

- [ARMOR: Aligning Secure and Safe Large Language  Models via Meticulous Reasoning](https://openreview.net/pdf?id=Wx5xG7FPXK)
  - Zhengyue Zhao, YingziYingzi Ma, Somesh Jha, Marco Pavone, Patrick McDaniel, Chaowei Xiao
  - Palabra clave: RLHF, Alignment, Safety, LLM, Optimization

- [Reward Model Routing in Alignment](https://openreview.net/pdf?id=i3OKIHSsHC)
  - Xinle Wu, Yao Lu
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, LLM

- [CogFlow: Bridging Perception and Reasoning through Knowledge Internalization for Visual Mathematical Problem Solving](https://openreview.net/pdf?id=sZ0DsaRsd4)
  - Shuhang Chen, Yunqiu Xu, Junjie Xie, Aojun Lu, Tao Feng, ZEYING HUANG, ZHANG NING, Yi Sun, Yi Yang, Hangjie Yuan
  - Palabra clave: Reward Model, Multimodal, Optimization

- [All Roads Lead to Likelihood: The Value of Reinforcement Learning in Fine-Tuning](https://openreview.net/pdf?id=sCL5mSTpKm)
  - Gokul Swamy, Sanjiban Choudhury, Wen Sun, Steven Wu, Drew Bagnell
  - Palabra clave: PPO, Reward Model, Preference, Reinforcement Learning

- [General Exploratory Bonus for Optimistic Exploration in RLHF](https://openreview.net/pdf?id=hh91yCiqgS)
  - Wendi Li, Changdae Oh, Sharon Li
  - Palabra clave: RLHF, Alignment, Reinforcement Learning, Human Feedback

- [RE-PO: Robust Enhanced Policy Optimization as a General Framework for LLM Alignment](https://openreview.net/pdf?id=jDKpOvTCM8)
  - Xiaoyang Cao, Zelai Xu, Mo Guang, Kaiwen Long, Michiel A. Bakker, Yu Wang, Chao Yu
  - Palabra clave: DPO, RLHF, Preference, Alignment, LLM

- [Learning Correlated Reward Models: Statistical Barriers and Opportunities](https://openreview.net/pdf?id=TbEyl6krsY)
  - Yeshwanth Cherapanamjeri, Constantinos Costis Daskalakis, Gabriele Farina, Sobhan Mohammadpour
  - Palabra clave: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Verification and Co-Alignment via Heterogeneous Consistency for Preference-Aligned LLM Annotations](https://openreview.net/pdf?id=jugY302BAh)
  - Cheng Chen, Haiyan Yin, Ivor Tsang
  - Palabra clave: RLHF, Preference, Alignment, LLM

- [Disentangling Length Bias in Preference Learning via Response-Conditioned Modeling](https://openreview.net/pdf?id=hKxYESOzen)
  - Jianfeng Cai, Jinhua Zhu, Ruopei Sun, Yue Wang, Li Li, Wengang Zhou, Houqiang Li
  - Palabra clave: DPO, RLHF, Reward Model, Preference, LLM

- [Enforcing Axioms for AI Alignment under Loss-Based Rules](https://openreview.net/pdf?id=MpYSoTK65s)
  - Alexandros Hollender, Sonja Kraiczy
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, Reinforcement Learning

- [OPPO: Accelerating PPO-based RLHF via Pipeline Overlap](https://openreview.net/pdf?id=31Mr6wLBeF)
  - Kaizhuo Yan, YingJie Yu, Yifan Yu, Haizhong Zheng, Fan Lai
  - Palabra clave: PPO, RLHF, Reward Model, Preference, LLM

- [QuRL: Rubrics As Judge For Open-Ended Question Answering](https://openreview.net/pdf?id=DrhWTuhtYq)
  - Xiyu Wei, Qingwei Zong, Xiaoguang Li, Eugene J. Yu, Sujian Li
  - Palabra clave: LLM, Optimization, Reinforcement Learning, Human Feedback

- [Translate Policy to Language: Flow Matching Generated Rewards for LLM Explanations](https://openreview.net/pdf?id=zmZsWCGzUV)
  - Xinyi Yang, Liang Zeng, Heng Dong, Chao Yu, Xiaoran Wu, Huazhong Yang, Yu Wang, Milind Tambe, Tonghan Wang
  - Palabra clave: RLHF, LLM, Reinforcement Learning

- [Skywork-Reward-V2: Scaling Preference Data Curation via Human-AI Synergy](https://openreview.net/pdf?id=ofgxkMLqic)
  - Chris Yuhao Liu, Liang Zeng, Yuzhen Xiao, Jujie He, Jiacai Liu, Chaojie Wang, Rui Yan, Wei Shen, Fuxiang Zhang, Jiacheng Xu, Yang Liu
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, Safety

- [Stackelberg Learning from Human Feedback: Preference Optimization as a Sequential Game](https://openreview.net/pdf?id=vc9Tj11LNE)
  - Barna Pásztor, Thomas Kleine Buening, Andreas Krause
  - Palabra clave: RLHF, Preference, Alignment, Nash, Optimization

- [Swap-guided Preference Learning for Personalized Reinforcement Learning from Human Feedback](https://openreview.net/pdf?id=nc28mSbyVG)
  - Gihoon Kim, Euntai Kim
  - Palabra clave: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Beyond Binary Preferences: A Principled Framework for Reward Modeling with Ordinal Feedback](https://openreview.net/pdf?id=mteZOi0xyu)
  - Amirhossein Afsharrad, Ruida Zhou, Luca Viano, Sanjay Lall, Mohammad Ghavamzadeh
  - Palabra clave: Reward Model, Preference, Safety, Human Feedback

- [RLBFF: Binary Flexible Feedback to bridge between Human Feedback & Verifiable Rewards](https://openreview.net/pdf?id=P3R3S6S5Km)
  - Zhilin Wang, Jiaqi Zeng, Olivier Delalleau, Ellie Evans, Daniel Egert, Hoo-Chang Shin, Felipe Soares, Yi Dong, Oleksii Kuchaiev
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, LLM

- [Reward Models Inherit Value Biases from Pretraining](https://openreview.net/pdf?id=dT399j1Azv)
  - Brian Christian, Jessica A F Thompson, Elle, Vincent Adam, Hannah Rose Kirk, Christopher Summerfield, Tsvetomira Dumbalska
  - Palabra clave: Reward Model, Preference, Alignment, Safety, LLM

- [Semantic-aware Wasserstein Policy Regularization for Large Language Model Alignment](https://openreview.net/pdf?id=sUac3QDbAs)
  - Byeonghu Na, Hyungho Na, Yeongmin Kim, Suhyeon Jo, HeeSun Bae, Mina Kang, Il-chul Moon
  - Palabra clave: RLHF, Preference, Alignment, LLM, Reinforcement Learning

- [RewardBench 2: Advancing Reward Model Evaluation](https://openreview.net/pdf?id=fb0G86Dewb)
  - Saumya Malik, Valentina Pyatkin, Sander Land, Jacob Morrison, Noah A. Smith, Hannaneh Hajishirzi, Nathan Lambert
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, Safety

- [Causally Robust Reward Learning from Reason-Augmented Preference Feedback](https://openreview.net/pdf?id=wviOOX5JVn)
  - Minjune Hwang, Yigit Korkmaz, Daniel Seita, Erdem Biyik
  - Palabra clave: Reward Model, Preference

- [COMAL: A Convergent Meta-Algorithm for Aligning LLMs with General Preferences](https://openreview.net/pdf?id=OsrE5DJ9Fu)
  - Yixin Liu, Argyris Oikonomou, Weiqiang Zheng, Yang Cai, Arman Cohan
  - Palabra clave: RLHF, Preference, Alignment, Nash, Optimization

- [Displacement-Resistant Extensions of DPO with Nonconvex $f$-Divergences](https://openreview.net/pdf?id=rTte3iUsXV)
  - Idan Pipano, Shoham Sabach, Kavosh Asadi, Mohammad Ghavamzadeh
  - Palabra clave: DPO, RLHF

- [Keep the Best, Forget the Rest: Reliable Alignment with Order-Aware Preference Optimization](https://openreview.net/pdf?id=LrHfYPFTtg)
  - Jiahui Zhu, Yuanjie Shi, Xiyue Peng, Xin Liu, Yan Yan, Honghao Wei
  - Palabra clave: DPO, PPO, RLHF, Preference, Alignment

- [Cultivating Pluralism In Algorithmic Monoculture: The Community Alignment Dataset](https://openreview.net/pdf?id=4NtoAVqfhA)
  - Lily H Zhang, Smitha Milli, Karen Long Jusko, Jonathan Smith, Brandon Amos, Wassim Bouaziz, Manon Revel, Jack Kussman, Yasha Sheynin, Lisa Titus, Bhaktipriya Radharapu, Jane Yu, Vidya Sarma, Kristopher Rose, Maximilian Nickel
  - Palabra clave: Preference, Alignment, LLM

- [Fair Reinforcement Learning for Just AI](https://openreview.net/pdf?id=XNNDODynCl)
  - Ezgi Korkmaz
  - Palabra clave: Preference, Alignment, Optimization, Reinforcement Learning, Human Feedback

- [Robust Reward Modeling via Causal Rubrics](https://openreview.net/pdf?id=oP99JQiDYp)
  - Pragya Srivastava, Harman Singh, Rahul Madhavan, Gandharv Patil, Sravanti Addepalli, Arun Suggala, Rengarajan Aravamudhan, Soumya Sharma, Anirban Laha, Aravindan Raghuveer, Karthikeyan Shanmugam, Doina Precup
  - Palabra clave: DPO, Reward Model, Alignment, Safety, LLM

- [Escaping Policy Contraction: Contraction-Aware PPO (CaPPO) for Stable Language Model Fine-Tuning](https://openreview.net/pdf?id=vDlkJewkDu)
  - Dun Yuan, Di Wu, Xue Liu
  - Palabra clave: PPO, RLHF, Alignment, Optimization, Reinforcement Learning

- [Beyond Pairwise: Empowering LLM Alignment With (Ranked) Choice Modeling](https://openreview.net/pdf?id=fCaxd9EKzl)
  - Yuxuan Tang, Yifan Feng
  - Palabra clave: DPO, PPO, Preference, Alignment, LLM

- [Learning Ordinal Probabilistic Reward from Preferences](https://openreview.net/pdf?id=0Vf5trUAVF)
  - Longze Chen, Lu Wang, Renke Shan, Ze Gong, Run Luo, Jiaming Li, Jing Luo, Qiyao Wang, Min Yang
  - Palabra clave: Reward Model, LLM

- [Eliminating Inductive Bias in Reward Models with Information-Theoretic Guidance](https://openreview.net/pdf?id=57YfUhcYXd)
  - Zhuo Li, Pengyu Cheng, Zhechao Yu, FeifeiTong, Anningzhe Gao, Tsung-Hui Chang, Xiang Wan, erchao.zec, xiaoxi jiang, guanjunjiang
  - Palabra clave: RLHF, Reward Model, Preference, LLM, Optimization

- [Alignment-Weighted DPO:  A principled reasoning approach to improve safety alignment](https://openreview.net/pdf?id=OuMNJoKJBQ)
  - Mengxuan Hu, Vivek Datla, Anoop Kumar, Zihan Guan, Sheng Li, Alfy Samuel, Daben Liu
  - Palabra clave: DPO, RLHF, Preference, Alignment, Safety

- [Evaluating and Improving Cultural Awareness of Reward Models for LLM Alignment](https://openreview.net/pdf?id=WhSzqsMhfZ)
  - Hongbin Zhang, Kehai Chen, Xuefeng Bai, Yang Xiang, Min Zhang
  - Palabra clave: Reward Model, Preference, Alignment, LLM, Reinforcement Learning

- [Balancing the Experts: Unlocking LoRA-MoE for GRPO via Mechanism-Aware Rewards](https://openreview.net/pdf?id=rhD7ZuFAjU)
  - Changlian Ma, Zizheng Huang, Xiangyu Zeng, Yi Wang, Cheng Liang, Kun Tian, Xinhai Zhao, Limin Wang
  - Palabra clave: Alignment, Multimodal, Optimization, Reinforcement Learning

- [Bradley-Terry and Multi-Objective Reward Modeling Are Complementary](https://openreview.net/pdf?id=3QHKJcwnpb)
  - Zhiwei Zhang, Hui Liu, Xiaomin Li, Zhenwei Dai, Jingying Zeng, Fali Wang, Minhua Lin, Ramraj Chandradevan, Linlin Wu, Zhen Li, Chen Luo, Zongyu Wu, Xianfeng Tang, Qi He, Suhang Wang
  - Palabra clave: RLHF, Reward Model, Preference, LLM, Reinforcement Learning

- [Beyond RLHF and NLHF: Population-Proportional Alignment under an Axiomatic Framework](https://openreview.net/pdf?id=Egmvi2RWnj)
  - Kihyun Kim, Jiawei Zhang, Asuman E. Ozdaglar, Pablo A. Parrilo
  - Palabra clave: Preference, Alignment

- [ActiveDPO: Active Direct Preference Optimization for Sample-Efficient Alignment](https://openreview.net/pdf?id=RD4XgyVyGh)
  - Xiaoqiang Lin, Arun Verma, Zhongxiang Dai, Daniela Rus, See-Kiong Ng, Bryan Kian Hsiang Low
  - Palabra clave: DPO, Reward Model, Preference, Alignment, LLM

- [BranchGRPO: Stable and Efficient GRPO with Structured Branching in Diffusion Models](https://openreview.net/pdf?id=T2nP2IQasd)
  - Yuming Li, Yikai Wang, Yuying zhu, Zhongyu Zhao, Ming Lu, Qi She, Shanghang Zhang
  - Palabra clave: Preference, Alignment, Optimization

- [Safety Game: Inference-Time Alignment of Black-Box LLMs via Constrained Optimization](https://openreview.net/forum?id=7Nn3SKS6yL)
  - Tuan Nguyen, Long Tran-Thanh
  - Palabra clave: Alignment, Safety, LLM, Reinforcement Learning, Human Feedback

- [Threshold-Guided Optimization for Visual Generative Models](https://openreview.net/forum?id=B258ihKAk9)
  - Jinbin Bai, Yu Lei, Qingyu Shi, Aosong Feng, Yi Xin, Zhuoran Zhao, Fei Shen, Kaidong Yu, Xiangtai Li
  - Palabra clave: Reward Model, Preference, Alignment, Diffusion, Optimization

- [Noise-corrected GRPO: From Noisy Rewards to Unbiased Gradients](https://openreview.net/forum?id=mnU8odBWYE)
  - Omar Elmansouri, Fathinah Izzati, Mohamed El Amine Seddik, Salem Lahlou
  - Palabra clave: RLHF, Reward Model, LLM, Optimization, Reinforcement Learning

- [Controllable and explainable personality sliders for LLMs at inference time](https://openreview.net/forum?id=6TuaAw1DkF)
  - Florian Hoppe, David Khachaturov, Robert Mullins, Mark Huasong Meng
  - Palabra clave: PPO, RLHF, Alignment, LLM, Optimization

- [PS-PPO : Prefix-Sampling PPO for Critic-Free RLHF](https://openreview.net/forum?id=flDa73nyVx)
  - Doo Hwan Hwang, Kee-Eung Kim
  - Palabra clave: PPO, RLHF, Optimization, Reinforcement Learning, Human Feedback

- [Unbiased Reward Modeling from Implicit Preference](https://openreview.net/forum?id=membbcuXeR)
  - Eric Wang, Haocheng Yang, Licheng Pan, Lei Shen, Xiaoxi Li, Yinuo Wang, Zhichao Chen, Yuan Lu, Haoxuan Li, Zhouchen Lin
  - Palabra clave: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [How RLHF Amplifies Sycophancy](https://openreview.net/forum?id=XN4pWKtA5h)
  - Itai Shapira, Gerdus Benade, Ariel Procaccia
  - Palabra clave: Preference, Alignment, Optimization, Human Feedback

- [Real-Time Aligned Reward Model beyond Semantics](https://openreview.net/forum?id=wz2zK4l3YJ)
  - Zixuan Huang, Xin Xia, Yuxi Ren, Jianbin Zheng, Xuefeng Xiao, Hongyan Xie, Huaqiu Li, Songshi Liang, Zhongxiang Dai, Fuzhen Zhuang, Jianxin Li, Yikun Ban, deqing wang
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, LLM

- [Chasing Moving Targets with Online Self-Play Reinforcement Learning for Safer Language Models](https://openreview.net/forum?id=l8PbMSZs2G)
  - Mickel Liu, Liwei Jiang, Yancheng Liang, Simon Du, Yejin Choi, Tim Althoff, Natasha Jaques
  - Palabra clave: RLHF, Reward Model, Alignment, Safety, LLM

- [B-Spar: Bayesian Sparse-Reward Modeling for RL-based Image Editing](https://openreview.net/forum?id=aoUqzNEKpA)
  - shusong xu, Peiye Liu, Yongbin Liu, Bangjie Yin, Zhaomang Sun, Zhenyu Chen, Tianyi Zheng, Peng-Tao Jiang, Jian Zhang, Yuzhao Wang, Jinwei Chen, Zhen Gu, Bo Li
  - Palabra clave: Reward Model, Alignment, Multimodal, LLM, Optimization

- [Calibrated Preference Learning: The Case of Label Ranking](https://openreview.net/forum?id=STcIzNrUBB)
  - Santo Thies, Viktor Bengs, Timo Kaufmann, Sebastian Vollmer, Eyke Hüllermeier
  - Palabra clave: RLHF, Reward Model, Alignment

- [Understanding the Performance Gap in Preference Learning: A Dichotomy of RLHF and DPO](https://openreview.net/forum?id=sg94PRd3kD)
  - Ruizhe Shi, Minhak Song, Runlong Zhou, Zihan Zhang, Maryam Fazel, Simon Du
  - Palabra clave: DPO, RLHF, Reward Model, Preference, Optimization

- [DARC: Disagreement-Aware Alignment via Risk-Constrained Decoding](https://openreview.net/forum?id=GgN0wlHcdI)
  - mingxi Zou, Jiaxiang Chen, Junfan Li, Langzhang Liang, Qifan Wang, Xu Yinghui, Zenglin Xu
  - Palabra clave: DPO, RLHF, Preference, Alignment, Optimization

- [The Personality Illusion: Revealing Dissociation Between Self-Reports & Behavior in LLMs](https://openreview.net/forum?id=6OMZEKarO7)
  - Pengrui Han, Rafal Kocielnik, Peiyang Song, Ramit Debnath, Dean Mobbs, Anima Anandkumar, R. Michael Alvarez
  - Palabra clave: RLHF, Alignment, LLM

- [Distributionally Robust Reinforcement Learning with Human Feedback](https://openreview.net/forum?id=6GeYRoYKWP)
  - Debmalya Mandal, Paulius Sasnauskas, Goran Radanovic
  - Palabra clave: DPO, RLHF, Reward Model, Preference, LLM

- [Automatically Finding Reward Model Biases](https://openreview.net/forum?id=Xy4ClJMjIU)
  - Atticus Wang, Iván Arcuschin, Arthur Conmy
  - Palabra clave: Reward Model, LLM, Reinforcement Learning, Human Feedback

- [Tackling Length Inflation Without Trade-offs: Group Relative Reward Rescaling for Reinforcement Learning](https://openreview.net/forum?id=quqoVYpzX3)
  - Zichao Li, Jie Lou, Fangchen Dong, Zhiyuan Fan, Mengjie Ren, Hongyu Lin, Xianpei Han, Debing Zhang, Le Sun, Yaojie Lu, XingYu
  - Palabra clave: RLHF, LLM, Optimization, Reinforcement Learning

- [Convex Optimization for Alignment and Preference Learning on a Single GPU](https://openreview.net/forum?id=P4eXtzKPrl)
  - Miria Feng, Mert Pilanci
  - Palabra clave: DPO, RLHF, Preference, Alignment, LLM

- [MMKU-Bench: A Multimodal Update Benchmark for Diverse Visual Knowledge](https://openreview.net/forum?id=WYHmRRGcL1)
  - Baochen Fu, Yuntao Du, Cheng Chang, Baihao Jin, Wenzhi Deng, Muhao Xu, Hongmei Yan, Weiye Song, Yi Wan
  - Palabra clave: RLHF, Multimodal, Reinforcement Learning, Human Feedback

- [Pushing Forward Pareto Frontiers of Proactive Agents with Behavioral Agentic Optimization](https://openreview.net/forum?id=pckR7Y6V1j)
  - Yihang Yao, Zhepeng Cen, Haohong Lin, Shiqi Liu, Zuxin Liu, Jiacheng Zhu, Zhang-Wei Hong, Laixi Shi, Ding Zhao
  - Palabra clave: LLM, Reinforcement Learning, Human Feedback

- [Unbiased Alignment for Large Language Models with Noisy Preferences](https://openreview.net/forum?id=eMQsdioK8z)
  - Jialiang Wang, Xianming Liu, Xiong Zhou, Hui Liu, Haoliang Li
  - Palabra clave: DPO, Reward Model, Preference, Alignment, Optimization

- [Unbiased Principles, Robust Rewards](https://openreview.net/forum?id=VZDlkXuIQc)
  - Qingnan Ren, Zhen Fang, Shiting Huang, Yu Zeng, Lin Chen, Zehui Chen, Feng Zhao
  - Palabra clave: RLHF, Reward Model, Reinforcement Learning, Human Feedback

- [The Secret Engine Behind RLHF: It's Contarstive Learning All Along](https://openreview.net/forum?id=MJ25gbGhPu)
  - Xufei Lv, Kehai Chen, Haoyuan Sun, Xuefeng Bai, Min zhang, Houde Liu
  - Palabra clave: DPO, RLHF, Preference, Alignment, LLM

- [When Distance Distracts: Representation Distance Bias in BT-Loss for Reward Models](https://openreview.net/forum?id=MBk6Pur6RX)
  - Tong Xie, Ching-Yuan Bai, Yuanhao Ban, Yunqi Hong, Haoyu Li, Cho-Jui Hsieh
  - Palabra clave: RLHF, Reward Model, Alignment, LLM

- [Multi-Objective Preference Optimization: Improving Human Alignment of Generative Models](https://openreview.net/forum?id=AFqHVyanzY)
  - Akhil Agnihotri, Rahul Jain, Deepak Ramachandran, Zheng Wen
  - Palabra clave: DPO, RLHF, Preference, Alignment, Safety

- [TUR-DPO: Topology- and Uncertainty-Aware Direct Preference Optimization](https://openreview.net/forum?id=YDztzMJynP)
  - Abdulhady abas, Fatemeh Daneshfar, Seyedali Mirjalili, Mourad Oussalah
  - Palabra clave: DPO, PPO, RLHF, Preference, Multimodal

- [Asymptotic Universal Alignment: A New Alignment Framework via Test-Time Scaling](https://openreview.net/forum?id=2RIk96qJcc)
  - Yang Cai, Weiqiang Zheng
  - Palabra clave: PPO, Preference, Alignment, LLM, Nash

- [Reward Modeling from Natural Language Human Feedback](https://openreview.net/forum?id=nd0hT1eyEo)
  - Zongqi Wang, Rui Wang, Yuchuan Wu, Yiyao Yu, Pinyi Zhang, Shaoning Sun, Yujiu Yang, Yongbin Li
  - Palabra clave: Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Efficient Preference Poisoning Attack on Offline RLHF](https://openreview.net/forum?id=32XNOcwH1z)
  - Chenye Yang, Weiyu Xu, Lifeng Lai
  - Palabra clave: DPO, RLHF, Preference, Optimization, Reinforcement Learning

- [Position: Agentic Safety is an Epistemic Property, Not a Behavioral One](https://openreview.net/forum?id=30mapdhNKH)
  - Charles Wang, Keir Dorchen, Peter Jin
  - Palabra clave: RLHF, Preference, Alignment, Safety, Optimization

- [Position: Large Language Models Should Learn Personalized Rather Than Aggregated Human Preferences](https://openreview.net/forum?id=kWWgmAXwjG)
  - Cristina Garbacea
  - Palabra clave: RLHF, Reward Model, Preference, Safety, Reinforcement Learning

- [Transitivity Meets Cyclicity: Explicit Preference Decomposition for Dynamic Large Language Model Alignment](https://openreview.net/forum?id=7H9HRTWady)
  - Yucong Huang, Xiucheng Li, Kaiqi Zhao, Jing Li
  - Palabra clave: PPO, RLHF, Preference, Alignment, Nash

- [Factored Causal Representation Learning for Robust Reward Modeling in RLHF](https://openreview.net/forum?id=CwNItJ07ew)
  - Yupei Yang, Lin Yang, Wanxi Deng, Lin Qu, Fan Feng, Biwei Huang, Shikui Tu, Lei Xu
  - Palabra clave: RLHF, Reward Model, Preference, LLM, Reinforcement Learning

- [Federated Variational Preference Alignment with Gumbel-Softmax Prior for Personalized User Preferences](https://openreview.net/forum?id=duzvT0nDgZ)
  - Jabin Koo, Hoyoung Kim, Minwoo Jang, Jungseul Ok
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, LLM

- [Online Compatible Reward Identification from Preference Feedback](https://openreview.net/forum?id=Fd1PINCgs7)
  - Simone Drago, Marco Mussi, Alberto Maria Metelli
  - Palabra clave: Preference, Safety, Reinforcement Learning, Human Feedback

- [$f$-Divergence Regularized RLHF: Two Tales of Sampling and Unified Analyses](https://openreview.net/forum?id=XrtiZYwcU4)
  - Di Wu, Chengshuai Shi, Jing Yang, Cong Shen
  - Palabra clave: RLHF, Reinforcement Learning, Human Feedback

- [Alignment Tampering: How Reinforcement Learning from Human Feedback Is Exploited to Optimize Misaligned Biases](https://openreview.net/forum?id=qNsrhcCe4y)
  - Dongyoon Hahm, Dylan Hadfield-Menell, Kimin Lee
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, LLM

- [IRPM: Intergroup Relative Preference Modeling for Pointwise Generative Reward Models](https://openreview.net/forum?id=JuiHYauZNk)
  - Haonan Song, Qingchen Xie, Huan Zhu, Feng Xiao, Luxi Xing, Liu Kang, Fuzhen Li, Zhiyong Zheng, Feng Jiang, Ziheng Li, Kun Yan, Qingyi Si, Yanghua Xiao, Hongcheng Guo, Fan Yang
  - Palabra clave: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Implicit Preference Alignment  for Human Image Animation](https://openreview.net/forum?id=SorLoUARMp)
  - Yuanzhi Wang, Xuhua Ren, Jiaxiang Cheng, bing ma, Kai Yu, Tianxiang Zheng, Qinglin Lu, Zhen Cui
  - Palabra clave: Preference, Alignment, Optimization, Reinforcement Learning, Human Feedback

- [Multilingual Safety Alignment Via Sparse Weight Editing](https://openreview.net/forum?id=tlPhEl24fM)
  - Jiaming Liang, Zhaoxin Wang, Handing Wang
  - Palabra clave: RLHF, Alignment, Safety, LLM, Reinforcement Learning

- [Gradient Regularization Prevents Reward Hacking in Reinforcement Learning from Human Feedback and Verifiable Rewards](https://openreview.net/forum?id=T67db38qhr)
  - Johannes Ackermann, Michael Noukhovitch, Takashi Ishida, Masashi Sugiyama
  - Palabra clave: RLHF, Reward Model, LLM, Reinforcement Learning, Human Feedback

- [Graph-Preference Learning: Debiasing Network-Sampled Human Feedback for Target Welfare Estimation](https://openreview.net/forum?id=DiNZ5ccCo6)
  - Guangrui Fan, DanDan Liu, AZNUL SABRI, Pan Lihu
  - Palabra clave: DPO, RLHF, Reward Model, Preference

- [COLLIE: Guiding Skill Discovery in Semantically Coherent Latent Space](https://openreview.net/forum?id=LMBt26pQj1)
  - Yao Luan, Ni Mu, Hanfei Ge, Yiqin Yang, Bo XU, Qing-Shan Jia
  - Palabra clave: Human Feedback

- [Optimal Transport for Reward Modeling from Noisy Feedback](https://openreview.net/forum?id=InoePQ7HNI)
  - Eric Wang, Licheng Pan, Haocheng Yang, Yunsheng Lu, Yongqi Tong, Yinuo Wang, Shijian Wang, Zhixuan Chu, Lei Shen, Haoxuan Li, Yuan Lu
  - Palabra clave: RLHF, Reward Model, Preference, Reinforcement Learning, Human Feedback

- [Reliability-Aware LLM Alignment from Inconsistent Human Feedback](https://openreview.net/forum?id=0LeyqHkrEG)
  - Jingyi Huang, Ruohan Zong, Yujun Feng, Liran Ma, Lanyu Shang, Yang Zhang
  - Palabra clave: DPO, RLHF, Preference, Alignment, LLM

- [Position: We Need Large Language Models Optimized For Our Well-Being](https://openreview.net/forum?id=LCsPkh2Ins)
  - Ashton Anderson, Harsh Kumar, Louis Tay, Karina Vold
  - Palabra clave: RLHF, Preference, Optimization, Reinforcement Learning, Human Feedback

- [Implicit Safety Alignment from Crowd Preferences](https://openreview.net/forum?id=kQZKqdlPQc)
  - Qian Lin, Daniel S Brown
  - Palabra clave: RLHF, Reward Model, Preference, Safety, Reinforcement Learning

- [Contrastive Weak-to-Strong Generalization](https://openreview.net/forum?id=maOM1OWNZ6)
  - Houcheng Jiang, Junfeng Fang, Jiaxin Wu, Tianyu Zhang, Chen Gao, Xiang Wang, Xiangnan He, Yang Deng
  - Palabra clave: Reward Model, Alignment, LLM, Human Feedback

- [Distortion of AI Alignment Revisited: RLHF is a Decent Utilitarian Aligner](https://openreview.net/forum?id=x4qXiDogRm)
  - Kazusato Oko, Annie Ulichney, Nika Haghtalab, Han Bao
  - Palabra clave: RLHF, Preference, Reinforcement Learning, Human Feedback

- [Conversation for Non-verifiable Learning: Self-Evolving Large Language Models through Meta-Evaluation](https://openreview.net/forum?id=Wba6w3pzbj)
  - Yuan Sui, Bryan Hooi
  - Palabra clave: LLM, Optimization, Human Feedback

- [Unifying Adversarial Robustness and Training Across Text Scoring Models](https://openreview.net/forum?id=u7kOAJ9uH7)
  - Manveer Tamber, Hosna Oyarhoseini, Jimmy Lin
  - Palabra clave: PPO, RLHF, Reward Model, LLM

- [ActiveUltraFeedback: Efficient Preference Data Generation using Active Learning](https://openreview.net/forum?id=Ca0cQbhA0T)
  - Davit Melikidze, Marian Schneider, Jessica Lam, Martin Wertich, Ido Hakimi, Barna Pasztor, Andreas Krause
  - Palabra clave: RLHF, Preference, Alignment, LLM, Reinforcement Learning

- [Layer-wise Gradient Disentanglement: Decoupling Semantics and Preferences in Direct Preference Optimization](https://openreview.net/forum?id=j8lJiUPyL7)
  - Mengyang Li, Shuang Liu, Zhong Zhang
  - Palabra clave: DPO, RLHF, Preference, Optimization

- [The Sign Estimator: Preference Modeling for LLM Alignment under Heterogeneity](https://openreview.net/forum?id=SyTeWTEex3)
  - Aymane El Gadarri, Ali Aouad, Vivek Farias
  - Palabra clave: RLHF, Reward Model, Preference, Alignment, LLM

- [Leveraging Machine Unlearning for Cost-Efficient Preference Alignment](https://openreview.net/forum?id=FhCu8IlO2e)
  - XiaoHua Feng, Yuyuan Li, HuWei Ji, Li Zhang, Jiaming Zhang, Tianyu Du, Chaochao Chen
  - Palabra clave: Preference, Alignment, LLM, Optimization, Reinforcement Learning

- [Regularization in the Axiomatic Approach to Learning from Human Preferences](https://openreview.net/forum?id=9ydYaIe1Qj)
  - Ezgi Korkmaz
  - Palabra clave: RLHF, Preference, Reinforcement Learning, Human Feedback

- [DPO Unchained: Your Training Algorithm is Secretly Disentangled in Human Choice Theory (and Its Loss' Convexity is Dispensable)](https://openreview.net/forum?id=j4c3i3a5kH)
  - Wenxuan Zhou, Shujian Zhang, brice magdalou, John Lambert, Ehsan Amid, Richard Nock, Andrew Hard
  - Palabra clave: DPO, PPO, RLHF, Reward Model, Preference

- [Conditional Equivalence of DPO and RLHF: Assumptions, Failure Modes, and Provable Alignment](https://openreview.net/forum?id=7UEBX1KU1y)
  - Yonggang Zhang, Zhiqin Yang, Wei Xue, Dong Fang, Bo Han, Yike Guo
  - Palabra clave: DPO, RLHF, Preference, Alignment, Optimization

- [A Regret Minimization Framework on Preference Learning  in Large Language Models](https://openreview.net/forum?id=genVnYBAV7)
  - Suhwan Kim, Taehyun Cho, Youngsoo Jang, Geon-Hyeong Kim, Yu Jin Kim, Moontae Lee, Jungwoo Lee
  - Palabra clave: RLHF, Preference, Optimization, Reinforcement Learning, Human Feedback

- [Position: Measuring Human Preferences in RLHF is a Social Science Problem](https://openreview.net/forum?id=5l1pca4KhM)
  - Bijean Ghafouri, Eun Cheol Choi, Priyanka Dey, Emilio Ferrara
  - Palabra clave: RLHF, Preference, Alignment

- [Mitigating Reward Hacking in RLHF via Bayesian Non-negative Reward Modeling](https://openreview.net/forum?id=DfhMMHXDuu)
  - Zhibin Duan, Guowei Rong, Zhuo Li, Bo Chen, Mingyuan Zhou, Dandan Guo
  - Palabra clave: Reward Model, Preference, LLM, Optimization, Reinforcement Learning
### 2025

- [Position: The Complexity of Perfect AI Alignment -- Formalizing the RLHF Trilemma](https://arxiv.org/abs/2511.19504)
  - Subramanyam Sahoo, Aman Chadha, Vinija Jain, Divya Chaudhary
  - Palabra clave: Alignment Bias, Safety, Interpretability
 
- [What's In My Human Feedback? Learning Interpretable Descriptions of Preference Data](https://arxiv.org/abs/2510.26202)
  - Rajiv Movva, Smitha Milli, Sewon Min, Emma Pierson
  - Palabra clave: Sparse Autoencoders, Interpretable Data Curation, Reward Hacking, Feature Attribution
  - Código: [Official](https://github.com/rmovva/wimhf)

- [Towards Efficient Online Exploration for Reinforcement Learning with Human Feedback](https://arxiv.org/abs/2509.22633)
  - Gen Li, Yuling Yan
  - Palabra clave: Online RL, Multi-armed Bandit, LLMs

- [OpenRLHF: A Ray-based Easy-to-use, Scalable and High-performance RLHF Framework](https://aclanthology.org/2025.emnlp-demos.48/)
  - Jian Hu, Xibin Wu, Wei Shen, Jason Klein Liu, Weixun Wang, Songlin Jiang, Haoran Wang, Hao Chen, Bin Chen, Wenkai Fang, Xianyu, Yu Cao, Haotian Xu, Yiming Liu
  - Palabra clave: Framework
  - Código: [Official](https://github.com/OpenRLHF/OpenRLHF)
 
- [Language Models Learn to Mislead Humans via RLHF](https://arxiv.org/abs/2503.00897)
  - Jiaxin Wen, Ruiqi Zhong, Akbir Khan, Ethan Perez, Jacob Steinhardt, Minlie Huang, Sam Bowman, He He, Shi Feng
  - Palabra clave: Open-ended Task, Human Reward, Alignment Method, LLMs

- [A Simple and Effective Reinforcement Learning Method for Text-to-Image Diffusion Fine-tuning](https://arxiv.org/abs/2503.00897)
  - Shashank Gupta, Chaitanya Ahuja, Tsung-Yu Lin, Sreya Dutta Roy, Harrie Oosterhuis, Maarten de Rijke, and Satya Narayan Shukla
  - Palabra clave: Diffusion Model, REINFORCE, PPO

- [Differential Information: An Information-Theoretic Perspective on Preference Optimization](https://arxiv.org/abs/2505.23761)
  - Yunjae Won, Hyunji Lee, Hyeonbin Hwang, Minjoon Seo
  - Palabra clave: Preference Optimization, Information-Theoretic Analysis, Log-Ratio Reward Parameterization, Data Distribution, Log-Likelihood Displacement

- [Generalist Reward Models: Found Inside Large Language Models](https://arxiv.org/abs/2506.23235)
  - Yi-Chen Li, Tian Xu, Yang Yu, Xuqin Zhang, Xiong-Hui Chen, Zhongxiang Ling, Ningjing Chao, Lei Yuan, Zhi-Hua Zhou
  - Palabra clave: Offline Inverse RL, LLM-as-a-judge, Training-free, Alignment

- [A Unified Pairwise Framework for RLHF: Bridging Generative Reward Modeling and Policy Optimization](https://arxiv.org/abs/2504.04950)
  - Wenyuan Xu, Xiaochen Zuo, Chao Xin, Yu Yue, Lin Yan, Yonghui Wu
  - Palabra clave: Generative Pairwise Reward Model, Policy Optimization, Framework

- [Exploring Data Scaling Trends and Effects in Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2503.22230)
  - Wei Shen, Guanlin Liu, Zheng Wu, Ruofei Zhu, Qingping Yang, Chao Xin, Yu Yue, Lin Yan
  - Palabra clave: Data Scaling, Reward Hacking, LLMs

- [RLTHF: Targeted Human Feedback for LLM Alignment](https://arxiv.org/abs/2502.13417)
  - Yifei Xu, Tusher Chakraborty, Emre Kıcıman, Bibek Aryal, Eduardo Rodrigues, Srinagesh Sharma, Roberto Estevao, Maria Angels de Luis Balaguer, Jessica Wolk, Rafael Padilha, Leonardo Nunes, Shobana Balakrishnan, Songwu Lu, Ranveer Chandra
  - Palabra clave: Human-AI Hybrid Framework, Efficient, Alignment, LLMs

- [Equilibrate RLHF: Towards Balancing Helpfulness-Safety Trade-off in Large Language Models](https://arxiv.org/abs/2502.11555)
  - Yingshui Tan, Yilei Jiang, Yanshi Li, Jiaheng Liu, Xingyuan Bu, Wenbo Su, Xiangyu Yue, Xiaoyong Zhu, Bo Zheng
  - Palabra clave: Safety, Framework, Adaptive Message-wise Alignment Method, LLMs

- [MM-RLHF: The Next Step Forward in Multimodal LLM Alignment](https://arxiv.org/abs/2502.10391)
  - Yi-Fan Zhang, Tao Yu, Haochen Tian, Chaoyou Fu, Peiyan Li, Jianshu Zeng, Wulin Xie, Yang Shi, Huanyu Zhang, Junkang Wu, Xue Wang, Yibo Hu, Bin Wen, Fan Yang, Zhang Zhang, Tingting Gao, Di Zhang, Liang Wang, Rong Jin, Tieniu Tan
  - Palabra clave: Critique-based Reward Model, Dynamic Reward, Dataset
  - Código: [Official](https://github.com/Kwai-YuanQi/MM-RLHF)
 
- [Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback](https://arxiv.org/abs/2501.12895)
  - Yafu Li, Xuyang Hu, Xiaoye Qu, Linjie Li, Yu Cheng
  - Palabra clave: Test-Time Optimization, Preference Learning, Iterative Feedback
  - Código: [Official](https://github.com/yafuly/TPO)
 
- [Segmenting Text and Learning Their Rewards for Improved RLHF in Language Model](https://arxiv.org/abs/2501.02790)
  - Yueqin Yin, Shentao Yang, Yujia Xie, Ziyi Yang, Yuting Sun, Hany Awadalla, Weizhu Chen, and Mingyuan Zhou
  - Palabra clave: Segment-level Reward Model, Dense Reward RLHF Framework, Improved PPO training for LLMs
  - Código: [Official](https://github.com/yinyueqin/DenseRewardRLHF-PPO)

- [REINFORCE++: A Simple and Efficient Approach for Aligning Large Language Models](https://arxiv.org/abs/2501.03262)
  - Jian Hu
  - Palabra clave: Efficient, Alignment, Reinforcement Learning
  - Código: [Official](https://github.com/OpenRLHF/OpenRLHF/blob/main/examples/scripts/train_reinforce_llama_ray.sh)

### 2024
- [DPO Meets PPO: Reinforced Token Optimization for RLHF](https://arxiv.org/abs/2404.18922)
  - Han Zhong, Zikang Shan, Guhao Feng, Wei Xiong, Xinle Cheng, Li Zhao, Di He, Jiang Bian, Liwei Wang
  - Palabra clave: Token-wise Reward, DPO, PPO, RLHF
  - Código: [Official](https://github.com/zkshan2002/RTO)

- [Reward-Augmented Data Enhances Direct Preference Alignment of LLMs](https://arxiv.org/abs/2410.08067)
  - Shenao Zhang, Zhihan Liu, Boyi Liu, Yufeng Zhang, Yingxiang Yang, Yongfei Liu, Liyu Chen, Tao Sun, Zhaoran Wang
  - Palabra clave: Reward-Augmented Data, DPO, LLMs
  - Código: [Official](https://github.com/shenao-zhang/reward-augmented-preference)

- [The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models](https://aclanthology.org/2024.emnlp-main.174/)
  - Yanjun Chen, Dawei Zhu, Yirong Sun, Xinghao Chen, Wei Zhang, Xiaoyu Shen
  - Palabra clave: Reward Model Evaluation, Accuracy Paradox, LLM Alignment
  - Código: [Official](https://github.com/EIT-NLP/AccuracyParadox-RLHF)

- [Align Anything: Training All-Modality Models to Follow Instructions with Language Feedback](https://arxiv.org/abs/2412.15838)
  - Jiaming Ji, Jiayi Zhou, Hantao Lou, Boyuan Chen, Donghai Hong, Xuyao Wang, Wenqi Chen, Kaile Wang, Rui Pan, Jiahao Li, Mohan Wang, Josef Dai, Tianyi Qiu, Hua Xu, Dong Li, Weipeng Chen, Jun Song, Bo Zheng, Yaodong Yang
  - Palabra clave: Multi-modality Alignment, Dataset, Training-evaluation Framework
  - Código: [Official](https://github.com/PKU-Alignment/align-anything)

- [REvolve: Reward Evolution with Large Language Models using Human Feedback](https://arxiv.org/abs/2406.01309)
  - Rishi Hazra, Alkis Sygkounas, Andreas Persson, Amy Loutfi, Pedro Zuidberg Dos Martires
  - Palabra clave: Improved Reward Model with LLMs, Framework
  - Código: [Official](https://github.com/RishiHazra/Revolve)

- [Zeroth-Order Policy Gradient for Reinforcement Learning from Human Feedback without Reward Inference](https://arxiv.org/abs/2409.17401)
  - Qining Zhang, Lei Ying
  - Palabra clave: Reward inference-free RLHF, Zeroth-order optimization, Policy gradient

- [Learning Reward and Policy Jointly from Demonstration and Preference Improves Alignment](https://arxiv.org/abs/2406.06874)
  - Chenliang Li, Siliang Zeng, Zeyi Liao, Jiaxiang Li, Dongyeop Kang, Alfredo Garcia, Mingyi Hong
  - Palabra clave: Joint Reward and Policy, Efficiency, Framework

- [MA-RLHF: Reinforcement Learning from Human Feedback with Macro Actions](https://arxiv.org/abs/2410.02743)
  - Yekun Chai, Haoran Sun, Huang Fang, Shuohuan Wang, Yu Sun, Hua Wu
  - Palabra clave: Macro action-level Reward, Efficiency, Framework
  - Código: [Official](https://github.com/ernie-research/MA-RLHF)

- [Reward Modeling with Ordinal Feedback: Wisdom of the Crowd](https://arxiv.org/abs/2411.12843)
  - Shang Liu, Yu Pan, Guanting Chen, and Xiaocheng Li
  - Palabra clave: Reward Modeling, Ordinal Feedback, Human Preference Dataset
  - Código: [Official](https://github.com/LoveCatc/OrdinalRewardModeling)

- [Aligning Few-Step Diffusion Models with Dense Reward Difference Learning](https://arxiv.org/abs/2411.11727)
  - Ziyi Zhang, Li Shen, Sen Zhang, Deheng Ye, Yong Luo, Miaojing Shi, Bo Du, Dacheng Tao
  - Palabra clave: Diffusion Models, Text-to-Image, Alignment, Reinforcement Learning
  - Código: [Official](https://github.com/ZiyiZhang27/sdpo)

- [HybridFlow: A Flexible and Efficient RLHF Framework](https://arxiv.org/pdf/2409.19256v2)
  - Guangming Sheng, Chi Zhang, Zilingfeng Ye, Xibin Wu, Wang Zhang, Ru Zhang, Yanghua Peng, Haibin Lin, Chuan Wu
  - Palabra clave: Flexible, Efficient, RLHF framework
  - Código: [Official](https://github.com/volcengine/verl)

- [ALaRM: Align Language Models via Hierarchical Rewards Modeling](https://arxiv.org/abs/2403.06754)
  - Yuhang Lai, Siyuan Wang, Shujun Liu, Xuanjing Huang, Zhongyu Wei
  - Palabra clave: Hierarchical Reward, Open Text Generation Tasks
  - Código: [Official](https://github.com/halfrot/ALaRM)

- [TLCR: Token-Level Continuous Reward for Fine-grained Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2407.16574)
  - Eunseop Yoon, Hee Suk Yoon, SooHwan Eom, Gunsoo Han, Daniel Wontae Nam, Daejin Jo, Kyoung-Woon On, Mark A. Hasegawa-Johnson, Sungwoong Kim, Chang D. Yoo
  - Palabra clave: Token-Level Continuous Reward, RLHF
  - Código: [Official]()

- [Aligning Large Multimodal Models with Factually Augmented RLHF](https://arxiv.org/abs/2309.14525)
  - Zhiqing Sun, Sheng Shen, Shengcao Cao, Haotian Liu, Chunyuan Li, Yikang Shen, Chuang Gan, Liang-Yan Gui, Yu-Xiong Wang, Yiming Yang, Kurt Keutzer, Trevor Darrell
  - Palabra clave: Factually Augmented RLHF, Vision & Language, Human Preference Dataset
  - Código: [Official](https://github.com/llava-rlhf/LLaVA-RLHF)

- [Direct Large Language Model Alignment Through Self-Rewarding Contrastive Prompt Distillation](https://arxiv.org/abs/2402.11907)
  - Aiwei Liu, Haoping Bai, Zhiyun Lu, Xiang Kong, Simon Wang, Jiulong Shan, Meng Cao, Lijie Wen
  - Palabra clave: Without Human Preference Data, Self-Reward, DPO
  - Código: [Official](https://github.com/exlaw/DLMA)

- [Arithmetic Control of LLMs for Diverse User Preferences: Directional Preference Alignment with Multi-Objective Rewards](https://arxiv.org/abs/2402.18571)
  - Haoxiang Wang, Yong Lin, Wei Xiong, Rui Yang, Shizhe Diao, Shuang Qiu, Han Zhao, Tong Zhang
  - Palabra clave: User Preference, Multi-objective Reward Model, Rejection Sampling Finetuning
  - Código: [Official](https://github.com/Haoxiang-Wang/directional-preference-alignment)

- [Back to Basics: Revisiting REINFORCE Style Optimization for Learning from Human Feedback in LLMs](https://arxiv.org/abs/2402.14740)
  - Arash Ahmadian, Chris Cremer, Matthias Gallé, Marzieh Fadaee, Julia Kreutzer, Olivier Pietquin, Ahmet Üstün, Sara Hooker
  - Palabra clave: Online RL Optimization, Low Computational Cost
  - Código: [Official]()

- [Improving Large Language Models via Fine-grained Reinforcement Learning with Minimum Editing Constraint](https://arxiv.org/abs/2401.06081)
  - Zhipeng Chen, Kun Zhou, Wayne Xin Zhao, Junchen Wan, Fuzheng Zhang, Di Zhang, Ji-Rong Wen
  - Palabra clave: Token-level Reward, LLM
  - Código: [Official](https://github.com/RUCAIBox/RLMEC)
  
- [RLAIF vs. RLHF: Scaling Reinforcement Learning from Human Feedback with AI Feedback](https://proceedings.mlr.press/v235/lee24t.html)
  - Harrison Lee, Samrat Phatale, Hassan Mansoor, Thomas Mesnard, Johan Ferret, Kellie Ren Lu, Colton Bishop, Ethan Hall, Victor Carbune, Abhinav Rastogi, Sushant Prakash
  - Palabra clave: RL from AI Feedback
  - Código: [official]()

- [Principled Penalty-based Methods for Bilevel Reinforcement Learning and RLHF](https://proceedings.mlr.press/v235/shen24g.html)
  - Han Shen, Zhuoran Yang, Tianyi Chen
  - Palabra clave: Bilevel optimization
  - Código: [official]()

- [Dense Reward for Free in Reinforcement Learning from Human Feedback](https://openaccess.thecvf.com/content/CVPR2024/html/Yu_RLHF-V_Towards_Trustworthy_MLLMs_via_Behavior_Alignment_from_Fine-grained_Correctional_CVPR_2024_paper.html)
  - Alex James Chan, Hao Sun, Samuel Holt, Mihaela Van Der Schaar
  - Palabra clave: reward shaping, RLHF
  - Código: [official]( https://github.com/XanderJC/attention-based-credit)

- [A Minimaximalist Approach to Reinforcement Learning from Human Feedback](https://proceedings.mlr.press/v235/swamy24a.html)
  - Gokul Swamy, Christoph Dann, Rahul Kidambi, Steven Wu, Alekh Agarwal
  - Palabra clave: Minimax Winner, Self-Play Preference Optimization
  - Código: [official]()

- [Rlhf-v: Towards trustworthy mllms via behavior alignment from fine-grained correctional human feedback](https://openaccess.thecvf.com/content/CVPR2024/html/Yu_RLHF-V_Towards_Trustworthy_MLLMs_via_Behavior_Alignment_from_Fine-grained_Correctional_CVPR_2024_paper.html)
  - Tianyu Yu, Yuan Yao, Haoye Zhang, Taiwen He, Yifeng Han, Ganqu Cui, Jinyi Hu, Zhiyuan Liu, Hai-Tao Zheng, Maosong Sun, Tat-Seng Chua
  - Palabra clave: Multimodal Large Language Models, Hallucination Problem, Reinforcement Learning from Human Feedback
  - Código: [official](https://github.com/RLHF-V/RLHF-V)

- [RLHF Workflow: From Reward Modeling to Online RLHF](https://arxiv.org/abs/2405.07863)
  - Hanze Dong, Wei Xiong, Bo Pang, Haoxiang Wang, Han Zhao, Yingbo Zhou, Nan Jiang, Doyen Sahoo, Caiming Xiong, Tong Zhang
  - Palabra clave: Online Iterative RLHF, Preference Modeling, Large Language Models
  - Código: [official](https://github.com/RLHFlow/Online-RLHF)

- [MaxMin-RLHF: Towards equitable alignment of large language models with diverse human preferences](https://arxiv.org/abs/2402.08925)
  - Souradip Chakraborty, Jiahao Qiu, Hui Yuan, Alec Koppel, Furong Huang, Dinesh Manocha, Amrit Singh Bedi, Mengdi Wang
  - Palabra clave: mixture of preference distributions, MaxMin alignment objective
  - Código: [official]()

- [Dataset Reset Policy Optimization for RLHF](https://arxiv.org/abs/2404.08495)
  - Jonathan D. Chang, Wenhao Zhan, Owen Oertell, Kianté Brantley, Dipendra Misra, Jason D. Lee, Wen Sun
  - Palabra clave: Dataset Reset Policy Optimization
  - Código: [official](https://github.com/Cornell-RL/drpo)

- [A Dense Reward View on Aligning Text-to-Image Diffusion with Preference](https://arxiv.org/pdf/2402.08265)
  - Shentao Yang, Tianqi Chen, Mingyuan Zhou
  - Palabra clave: RLHF for Text-to-Image Generation, Dense Reward Improvement of DPO, Efficient Alignment
  - Código: [official](https://github.com/Shentao-YANG/Dense_Reward_T2I)

- [Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models](https://arxiv.org/pdf/2401.01335)
  - Zixiang Chen, Yihe Deng, Huizhuo Yuan, Kaixuan Ji, Quanquan Gu
  - Palabra clave: Self-Play Fine-Tuning
  - Código: [official](https://github.com/uclaml/SPIN)

- [RLHF Deciphered: A Critical Analysis of Reinforcement Learning from Human Feedback for LLMs](https://arxiv.org/abs/2404.08555)
  - Shreyas Chaudhari, Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan, Ameet Deshpande, Bruno Castro da Silva
  - Palabra clave: RLHF, Oracular Reward, Reward Model Analysis, Survey 

- [Confronting Reward Overoptimization for Diffusion Models: A Perspective of Inductive and Primacy Biases](https://arxiv.org/abs/2402.08552)
  - Ziyi Zhang, Sen Zhang, Yibing Zhan, Yong Luo, Yonggang Wen, Dacheng Tao
  - Palabra clave: Diffusion Models, Alignment, Reinforcement Learning, RLHF, Reward Overoptimization, Primacy Bias
  - Código: [official](https://github.com/ZiyiZhang27/tdpo)

- [On Diversified Preferences of Large Language Model Alignment](https://arxiv.org/pdf/2312.07401.pdf)
  - Dun Zeng, Yong Dai, Pengyu Cheng, Tianhao Hu, Wanshun Chen, Nan Du, Zenglin Xu
  - Palabra clave: Aligning shared preference, Reward modeling metrics, LLM
  - Código: [official](https://github.com/dunzeng/MORE)

- [Aligning Crowd Feedback via Distributional Preference Reward Modeling](https://arxiv.org/pdf/2402.09764.pdf)
  - Dexun Li, Cong Zhang, Kuicai Dong, Derrick Goh Xin Deik, Ruiming Tang, Yong Liu
  - Palabra clave: RLHF, Preference distribution, Aligning, LLM

- [Beyond One-Preference-Fits-All Alignment: Multi-Objective Direct Preference Optimization](https://arxiv.org/pdf/2310.03708.pdf)
  - Zhanhui Zhou, Jie Liu, Chao Yang, Jing Shao, Yu Liu, Xiangyu Yue, Wanli Ouyang, Yu Qiao
  - Palabra clave: Multi-objective RLHF without reward modeling, DPO
  - Código: [official](https://github.com/ZHZisZZ/modpo/)
  
- [Emulated Disalignment: Safety Alignment for Large Language Models May Backfire!](https://arxiv.org/pdf/2402.12343.pdf)
  - Zhanhui Zhou, Jie Liu, Zhichen Dong, Jiaheng Liu, Chao Yang, Wanli Ouyang, Yu Qiao
  - Palabra clave: LLM inference-time attack, DPO, Producing harmful LLMs without training
  - Código: [official](https://github.com/ZHZisZZ/emulated-disalignment/)
 
- [A Theoretical Analysis of Nash Learning from Human Feedback under General KL-Regularized Preference](https://arxiv.org/pdf/2402.07314.pdf)
  - Chenlu Ye, Wei Xiong, Yuheng Zhang, Nan Jiang, Tong Zhang
  - Palabra clave: Game-based RLHF, Nash Learning, Alignment under reward-model-free oracle

- [Mitigating the Alignment Tax of RLHF](https://arxiv.org/pdf/2309.06256.pdf)
  - Yong Lin, Hangyu Lin, Wei Xiong, Shizhe Diao, Jianmeng Liu, Jipeng Zhang, Rui Pan, Haoxiang Wang, Wenbin Hu, Hanning Zhang, Hanze Dong, Renjie Pi, Han Zhao, Nan Jiang, Heng Ji, Yuan Yao, Tong Zhang
  - Palabra clave: RLHF, Alignment tax, Catastrophic forgetting 

- [Training Diffusion Models with Reinforcement Learning](https://arxiv.org/pdf/2305.13301.pdf)
  - Kevin Black, Michael Janner, Yilun Du, Ilya Kostrikov, Sergey Levine
  - Palabra clave: reinforcement learning, RLHF, diffusion models
  - Código: [official](http://rl-diffusion.github.io/)

- [AlignDiff: Aligning Diverse Human Preferences via Behavior-Customisable Diffusion Model](https://openreview.net/forum?id=bxfKIYfHyx)
  - Zibin Dong, Yifu Yuan, Jianye Hao, Fei Ni, Yao Mu, Yan Zheng,Yujing Hu, Tangjie Lv, Changjie Fan, Zhipeng Hu
  - Palabra clave: Reinforcement learning; Diffusion models; RLHF; Preference aligning
  - Código: [official](https://aligndiff.github.io/)

- [Dense Reward for Free in Reinforcement Learning from Human Feedback](https://arxiv.org/pdf/2402.00782)
  - Alex J. Chan, Hao Sun, Samuel Holt, Mihaela van der Schaar
  - Palabra clave: RLHF
  - Código: [official](https://github.com/XanderJC/attention-based-credit)

- [Transforming and Combining Rewards for Aligning Large Language Models](https://arxiv.org/abs/2402.00742)
  - Zihao Wang, Chirag Nagpal, Jonathan Berant, Jacob Eisenstein, Alex D'Amour, Sanmi Koyejo, Victor Veitch
  - Palabra clave: RLHF, Aligning, LLM

- [Parameter Efficient Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2403.10704)
  - Hakim Sidahmed, Samrat Phatale, Alex Hutcheson, Zhuonan Lin, Zhang Chen, Zac Yu, Jarvis Jin, Simral Chaudhary, Roman Komarytsia, Christiane Ahlheim, Yonghao Zhu, Bowen Li, Saravanan Ganesh, Bill Byrne, Jessica Hoffmann, Hassan Mansoor, Wei Li, Abhinav Rastogi, Lucas Dixon
  - Palabras clave: RLHF, Parameter Efficient method, Low Computational Cost, LLM, VLM
 
- [Improving Reinforcement Learning from Human Feedback with Efficient Reward Model Ensemble](https://arxiv.org/abs/2401.16635v2)
  - Shun Zhang, Zhenfang Chen, Sunli Chen, Yikang Shen, Zhiqing Sun, Chuang Gan
  - Palabras clave: RLHF, Reward Ensemble, Efficient Ensemble Method
  
- [RIME: Robust Preference-based Reinforcement Learning with Noisy Human Preferences](https://arxiv.org/abs/2402.17257)
  - Jie Cheng, Gang Xiong, Xingyuan Dai, Qinghai Miao, Yisheng Lv, Fei-Yue Wang
  - Palabra clave:
  - Código: [official](https://github.com/CJReinforce/RIME_ICML2024)
  
- [Uni-RLHF: Universal Platform and Benchmark Suite for Reinforcement Learning with Diverse Human Feedback](https://arxiv.org/abs/2402.02423)
  - Yifu Yuan, Jianye Hao, Yi Ma, Zibin Dong, Hebin Liang, Jinyi Liu, Zhixin Feng, Kai Zhao, Yan Zheng
  - Palabra clave:
  - Código: [official](https://github.com/pickxiguapi/Uni-RLHF-Platform)
  - Conjunto de datos: [official](https://uni-rlhf.github.io/)

### 2023
- [The Trickle-down Impact of Reward (In-)consistency on RLHF](https://arxiv.org/abs/2309.16155)
  - Lingfeng Shen, Sihao Chen, Linfeng Song, Lifeng Jin, Baolin Peng, Haitao Mi, Daniel Khashabi, Dong Yu
  - Palabra clave: Reward model, RLHF, Reward hacking
  - Código: [official](https://github.com/shadowkiller33/Contrast-Instruction)

- [A General Theoretical Paradigm to Understand Learning from Human Preferences](https://arxiv.org/abs/2310.12036)
  - Mohammad Gheshlaghi Azar, Mark Rowland, Bilal Piot, Daniel Guo, Daniele Calandriello, Michal Valko, Rémi Munos
  - Palabras clave: RLHF, Pairwise Preference

- [Fine-Grained Human Feedback Gives Better Rewards for Language Model Training](https://arxiv.org/abs/2306.01693)
  - Zeqiu Wu, Yushi Hu, Weijia Shi, Nouha Dziri, Alane Suhr, Prithviraj Ammanabrolu, Noah A. Smith, Mari Ostendorf, Hannaneh Hajishirzi
  - Palabra clave: RLHF, Sentence-level Reward, LLM
  - Código: [official](https://github.com/allenai/FineGrainedRLHF)

- [Preference-grounded Token-level Guidance for Language Model Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2023/file/4d4a3b6a34332d80349137bcc98164a5-Paper-Conference.pdf)
  - Shentao Yang, Shujian Zhang, Congying Xia, Yihao Feng, Caiming Xiong, Mingyuan Zhou
  - Palabra clave: RLHF, Token-level Training Guidance, Alternate/Online Training Framework, Minimalist Training Objectives
  - Código: [official](https://github.com/Shentao-YANG/Preference_Grounded_Guidance)

- [Fantastic Rewards and How to Tame Them: A Case Study on Reward Learning for Task-oriented Dialogue Systems](https://arxiv.org/pdf/2302.10342)
  - Yihao Feng*, Shentao Yang*, Shujian Zhang, Jianguo Zhang, Caiming Xiong, Mingyuan Zhou, Huan Wang
  - Palabra clave: RLHF, Genralized Reward Function Learning, Reward Function Utilization, Task-oriented Dialogue System, Learning-to-rank
  - Código: [official](https://github.com/Shentao-YANG/Fantastic_Reward_ICLR2023)

- [Inverse Preference Learning: Preference-based RL without a Reward Function](https://arxiv.org/pdf/2305.15363)
  - Joey Hejna, Dorsa Sadigh
  - Palabra clave: Inverse Preference Learning, without reward model
  - Código: [official](https://github.com/jhejna/inverse-preference-learning)

- [AlpacaFarm: A Simulation Framework for Methods that Learn from Human Feedback](https://proceedings.neurips.cc/paper_files/paper/2023/file/5fc47800ee5b30b8777fdd30abcaaf3b-Paper-Conference.pdf)
  - Yann Dubois, Chen Xuechen Li, Rohan Taori, Tianyi Zhang, Ishaan Gulrajani, Jimmy Ba, Carlos Guestrin, Percy S. Liang, Tatsunori B. Hashimoto
  - Palabra clave: RLHF, Simulation Framework
  - Código: [official](https://github.com/tatsu-lab/alpaca_farm)

- [Adversarial Preference Optimization](https://arxiv.org/abs/2311.08045)
  - Pengyu Cheng, Yifan Yang, Jian Li, Yong Dai, Nan Du
  - Palabra clave: RLHF, GAN, Adversarial Games
  - Código: [official](https://github.com/Linear95/APO)

- [Iterative Preference Learning from Human Feedback: Bridging Theory and Practice for RLHF under KL-Constraint](https://arxiv.org/abs/2312.11456)
  - Wei Xiong, Hanze Dong, Chenlu Ye, Ziqi Wang, Han Zhong, Heng Ji, Nan Jiang, Tong Zhang
  - Palabra clave: RLHF, Iterative DPO, Mathematical foundation

- [Sample Efficient Reinforcement Learning from Human Feedback via Active Exploration](https://arxiv.org/abs/2312.00267)
  - Viraj Mehta, Vikramjeet Das, Ojash Neopane, Yijia Dai, Ilija Bogunovic, Jeff Schneider, Willie Neiswanger
  - Palabra clave: RLHF, sample efficience, exploration

- [Reinforcement Learning from Statistical Feedback: the Journey from AB Testing to ANT Testing](https://arxiv.org/abs/2311.14766)
  - Feiyang Han, Yimin Wei, Zhaofeng Liu, Yanxing Qi
  - Palabra clave: RLHF, AB testing, RLSF

- [A Baseline Analysis of Reward Models' Ability To Accurately Analyze Foundation Models Under Distribution Shift](https://arxiv.org/abs/2311.14743)
  - Ben Pikus, Will LeVine, Tony Chen, Sean Hendryx
  - Palabra clave: RLHF, OOD, Distribution Shift 

- [Data-Efficient Alignment of Large Language Models with Human Feedback Through Natural Language](https://arxiv.org/abs/2311.14543)
  - Di Jin, Shikib Mehri, Devamanyu Hazarika, Aishwarya Padmakumar, Sungjin Lee, Yang Liu, Mahdi Namazifar
  - Palabra clave: RLHF, data-efficient, Alignment

- [Let's Reinforce Step by Step](https://arxiv.org/abs/2311.05821)
  - Sarah Pan, Vladislav Lialin, Sherin Muckatira, Anna Rumshisky
  - Palabra clave: RLHF, reasoning

- [Direct Preference-based Policy Optimization without Reward Modeling](https://arxiv.org/abs/2301.12842)
  - Gaon An, Junhyeok Lee, Xingdong Zuo, Norio Kosaka, Kyung-Min Kim, Hyun Oh Song
  - Palabra clave: RLHF without reward modeling, Contrastive learning, Offline refinforcement learning

- [AlignDiff: Aligning Diverse Human Preferences via Behavior-Customisable Diffusion Model](https://arxiv.org/abs/2310.02054)
  - Zibin Dong, Yifu Yuan, Jianye Hao, Fei Ni, Yao Mu, Yan Zheng, Yujing Hu, Tangjie Lv, Changjie Fan, Zhipeng Hu
  - Palabra clave: RLHF, Alignment, Diffusion model

- [Eureka: Human-Level Reward Design via Coding Large Language Models](https://arxiv.org/abs/2310.12931)
  - Yecheng Jason Ma, William Liang, Guanzhi Wang, De-An Huang, Osbert Bastani, Dinesh Jayaraman, Yuke Zhu, Linxi Fan, Anima Anandkumar
  - Palabra clave: LLM based, reward functions design

- [Safe RLHF: Safe Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2310.12773)
  - Josef Dai, Xuehai Pan, Ruiyang Sun, Jiaming Ji, Xinbo Xu, Mickel Liu, Yizhou Wang, Yaodong Yang
  - Palabra clave: Sale RL, LLM fine-ture

- [Quality Diversity through Human Feedback](https://arxiv.org/abs/2310.12103)
  - Li Ding, Jenny Zhang, Jeff Clune, Lee Spector, Joel Lehman
  - Palabra clave: Quality Diversity, Diffusion model

- [ReMax: A Simple, Effective, and Efficient Reinforcement Learning Method for Aligning Large Language Models](https://arxiv.org/abs/2310.10505)
  - Ziniu Li, Tian Xu, Yushun Zhang, Yang Yu, Ruoyu Sun, Zhi-Quan Luo
  - Palabra clave: computational efficiency, variance-reduction technique

- [Tuning computer vision models with task rewards](https://arxiv.org/abs/2302.08242.pdf)
  - André Susano Pinto, Alexander Kolesnikov, Yuge Shi, Lucas Beyer, Xiaohua Zhai
  - Palabra clave: Reward tuning in Computer Vision

- [The Wisdom of Hindsight Makes Language Models Better Instruction Followers](https://arxiv.org/pdf/2302.05206.pdf)
  - Tianjun Zhang, Fangchen Liu, Justin Wong, Pieter Abbeel, Joseph E. Gonzalez
  - Palabra clave: Hindsight Instruction Relabeling, RLHF System, No Value Network Required
  - Código: [official](https://github.com/tianjunz/HIR)

- [Language Instructed Reinforcement Learning for Human-AI Coordination](https://arxiv.org/pdf/2304.07297.pdf)
  - Hengyuan Hu, Dorsa Sadigh
  - Palabra clave: Human-AI coordination, Human preference alignment, Instruction conditioned RL

- [Aligning Language Models with Offline Reinforcement Learning from Human Feedback](https://arxiv.org/pdf/2308.12050.pdf)
  - Jian Hu, Li Tao, June Yang, Chandler Zhou
  - Palabra clave: Decision Transformer-based Alignment, Offline Reinforcement Learning, RLHF System

- [Preference Ranking Optimization for Human Alignment](https://arxiv.org/pdf/2306.17492)
  - Feifan Song, Bowen Yu, Minghao Li, Haiyang Yu, Fei Huang, Yongbin Li and Houfeng Wang
  - Palabra clave: Supervised Human Preference Alignment, Preference Ranking Extension
  - Código: [official](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/PRO)

- [Bridging the Gap: A Survey on Integrating (Human) Feedback for Natural Language Generation](https://arxiv.org/abs/2305.00955)
  - Patrick Fernandes, Aman Madaan, Emmy Liu, António Farinhas, Pedro Henrique Martins, Amanda Bertsch, José G. C. de Souza, Shuyan Zhou, Tongshuang Wu, Graham Neubig, André F. T. Martins
  - Palabra clave: Natural Language Generation, Human Feedback Integration, Feedback Formalization and Taxonomy, AI Feedback and Principles-Based Judgments

- [GPT-4 Technical Report](https://cdn.openai.com/papers/gpt-4.pdf)
  - OpenAI
  - Palabra clave: A large-scale, multimodal model, Transformerbased model, Fine-tuned used RLHF
  - Código: [official](https://github.com/openai/evals)
  - Conjunto de datos: [DROP](https://allenai.org/data/drop), [WinoGrande](https://winogrande.allenai.org/), [HellaSwag](https://rowanzellers.com/hellaswag/), [ARC](https://allenai.org/data/arc), [HumanEval](https://github.com/openai/human-eval), [GSM8K](https://paperswithcode.com/dataset/gsm8k), [MMLU](https://paperswithcode.com/dataset/mmlu), [TruthfulQA](https://github.com/sylinrl/TruthfulQA)

- [RAFT: Reward rAnked FineTuning for Generative Foundation Model Alignment](https://arxiv.org/pdf/2304.06767.pdf)
  - Hanze Dong, Wei Xiong, Deepanshu Goyal, Rui Pan, Shizhe Diao, Jipeng Zhang, Kashun Shum, Tong Zhang
  - Palabra clave: Rejection Sampling Finetuning, Alternative to PPO, Diffusion Model
  - Código: [official](https://github.com/OptimalScale/LMFlow)
  
- [RRHF: Rank Responses to Align Language Models with Human Feedback without tears](https://arxiv.org/pdf/2304.05302v1.pdf)
  - Zheng Yuan, Hongyi Yuan, Chuanqi Tan, Wei Wang, Songfang Huang, Fei Huang
  - Palabra clave: New paradigm for RLHF
  - Código: [official](https://github.com/GanjinZero/RRHF)

- [Few-shot Preference Learning for Human-in-the-Loop RL](https://openreview.net/pdf?id=IKC5TfXLuW0)
  - Joey Hejna, Dorsa Sadigh
  - Palabra clave: Preference Learning, Interactive Learning, Multi-task Learning, Expanding the pool of available data by viewing human-in-the-loop RL
  - Código: [official](https://github.com/jhejna/few-shot-preference-rl)

- [Better Aligning Text-to-Image Models with Human Preference](https://arxiv.org/abs/2303.14420)
  - Xiaoshi Wu, Keqiang Sun, Feng Zhu, Rui Zhao, Hongsheng Li
  - Palabra clave: Diffusion Model, Text-to-Image, Aesthetic
  - Código: [official](https://github.com/tgxs002/align_sd)

- [ImageReward: Learning and Evaluating Human Preferences for Text-to-Image Generation](https://arxiv.org/pdf/2304.05977v2.pdf)
  - Jiazheng Xu, Xiao Liu, Yuchen Wu, Yuxuan Tong, Qinkai Li, Ming Ding, Jie Tang, Yuxiao Dong
  - Palabra clave: General-purpose text-to-Image human preference RM, Evaluating Text-to-Image Generative Models
  - Código: [official](https://github.com/THUDM/ImageReward)
  - Conjunto de datos: [COCO](https://cocodataset.org/#home), [DiffusionDB](https://poloclub.github.io/diffusiondb/)

- [Aligning Text-to-Image Models using Human Feedback](https://arxiv.org/pdf/2302.12192.pdf)
  - Kimin Lee, Hao liu, MoonKyung Ryu, Olivia Watkins, Yuqing Du, Craig Boutilier, Pieter Abbeel, Mohammad Ghavamzadeh, Shixiang Shane Gu
  - Palabra clave: Text-to-Image, Stable diffusion model, Reward function that predicts human feedback

- [Visual ChatGPT: Talking, Drawing and Editing with Visual Foundation Models](https://arxiv.org/pdf/2303.04671.pdf)
  - Chenfei Wu, Shengming Yin, Weizhen Qi, Xiaodong Wang, Zecheng Tang, Nan Duan
  - Palabra clave: Visual Foundation Models, Visual ChatGPT 
  - Código: [official](https://github.com/microsoft/visual-chatgpt)

- [Pretraining Language Models with Human Preferences](https://arxiv.org/abs/2302.08582) (PHF)
  - Tomasz Korbak, Kejian Shi, Angelica Chen, Rasika Bhalerao, Christopher L. Buckley, Jason Phang, Samuel R. Bowman, Ethan Perez
  - Palabra clave: Pretraining, offline RL, Decision transformer
  - Código: [official](https://github.com/tomekkorbak/pretraining-with-human-feedback)

- [Aligning Language Models with Preferences through f-divergence Minimization](https://arxiv.org/abs/2302.08215) (f-DPG)
  - Dongyoung Go, Tomasz Korbak, Germán Kruszewski, Jos Rozen, Nahyeon Ryu, Marc Dymetman
  - Palabra clave: f-divergence, RL with KL penalties

- [Principled Reinforcement Learning with Human Feedback from Pairwise or K-wise Comparisons](https://arxiv.org/pdf/2301.11270.pdf)
  - Banghua Zhu, Jiantao Jiao, Michael I. Jordan
  - Palabra clave: Pessimistic MLE, Max-entropy IRL

- [The Capacity for Moral Self-Correction in Large Language Models](https://arxiv.org/pdf/2302.07459.pdf)
  - Anthropic
  - Palabra clave: Improve moral self-correction capability by increasing RLHF training
  - Dataset; [BBQ](https://github.com/nyu-mll/BBQ)

### 2022

- [Is Reinforcement Learning (Not) for Natural Language Processing?: Benchmarks, Baselines, and Building Blocks for Natural Language Policy Optimization](https://arxiv.org/abs/2210.01241) (NLPO)
  - Rajkumar Ramamurthy, Prithviraj Ammanabrolu, Kianté,Brantley, Jack Hessel, Rafet Sifa, Christian Bauckhage, Hannaneh Hajishirzi, Yejin Choi
  - Palabra clave: Optimizing language generators with RL, Benchmark,  Performant RL algorithm
  - Código: [official](https://github.com/allenai/RL4LMs)
  - Conjunto de datos: [IMDB](https://www.imdb.com/interfaces/), [CommonGen](https://inklab.usc.edu/CommonGen/), [CNN Daily Mail](https://github.com/abisee/cnn-dailymail), [ToTTo](https://github.com/google-research-datasets/ToTTo), [WMT-16 (en-de)](https://www.statmt.org/wmt16/it-translation-task.html),[NarrativeQA](https://github.com/deepmind/narrativeqa), [DailyDialog](http://yanran.li/dailydialog)
- [Scaling Laws for Reward Model Overoptimization](https://arxiv.org/abs/2210.10760)
  - Leo Gao, John Schulman, Jacob Hilton
  - Palabra clave: Gold reward model train proxy reward model, Dataset size, Policy parameter size, BoN, PPO
- [Improving alignment of dialogue agents via targeted human judgements](https://arxiv.org/abs/2209.14375) (Sparrow)
  - Amelia Glaese, Nat McAleese, Maja Trębacz, et al.
  - Palabra clave: Information-seeking dialogue agent, Break down the good dialogue into natural language rules, DPC, Interact with the model to elicit violation of a specific rule (Adversarial Probing)
  - Conjunto de datos: [Natural Questions](https://ai.google.com/research/NaturalQuestions), [ELI5](https://facebookresearch.github.io/ELI5/), [QuALITY](https://github.com/nyu-mll/quality), [TriviaQA](http://nlp.cs.washington.edu/triviaqa/), [WinoBias](https://github.com/uclanlp/corefBias/tree/master/WinoBias/wino), [BBQ](https://github.com/nyu-mll/BBQ)
- [Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned](https://arxiv.org/abs/2209.07858)
  - Deep Ganguli, Liane Lovitt, Jackson Kernion, et al.
  - Palabra clave: Red team language model, Investigate scaling behaviors, Read teaming Dataset
  - Código: [official](https://github.com/anthropics/hh-rlhf)
- [Dynamic Planning in Open-Ended Dialogue using Reinforcement Learning](https://arxiv.org/abs/2208.02294)
  - Deborah Cohen, Moonkyung Ryu, Yinlam Chow, Orgad Keller, Ido Greenberg, Avinatan Hassidim, Michael Fink, Yossi Matias, Idan Szpektor, Craig Boutilier, Gal Elidan
  - Palabra clave: Real-time, Open-ended dialogue system, Pairs the succinct embedding of the conversation state by language models, CAQL, CQL, [BERT](https://github.com/google-research/bert)
- [Quark: Controllable Text Generation with Reinforced Unlearning](https://arxiv.org/abs/2205.13636)
  - Ximing Lu, Sean Welleck, Jack Hessel, Liwei Jiang, Lianhui Qin, Peter West, Prithviraj Ammanabrolu, Yejin Choi
  - Palabra clave: Fine-tuning the language model on signals of what not to do, Decision Transformer, LLM tuning with PPO
  - Código: [official](https://github.com/gximinglu/quark)
  - Conjunto de datos: [WRITINGPROMPTS](https://www.kaggle.com/datasets/ratthachat/writing-prompts), [SST-2](https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english), [WIKITEXT-103](https://blog.salesforceairesearch.com/the-wikitext-long-term-dependency-language-modeling-dataset/)
- [Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2204.05862)
  - Yuntao Bai, Andy Jones, Kamal Ndousse, et al.
  - Palabra clave: Harmless assistants, Online mode, Robustness of RLHF training, OOD detection.
  - Código: [official](https://github.com/anthropics/hh-rlhf)
  - Conjunto de datos: [TriviaQA](http://nlp.cs.washington.edu/triviaqa/), [HellaSwag](https://rowanzellers.com/hellaswag/), [ARC](https://allenai.org/data/arc), [OpenBookQA](https://allenai.org/data/open-book-qa), [LAMBADA](https://zenodo.org/record/2630551#.Y_KLJ-yZNhF), [HumanEval](https://github.com/openai/human-eval), [MMLU](https://github.com/hendrycks/test), [TruthfulQA](https://github.com/sylinrl/TruthfulQA)
- [Teaching language models to support answers with verified quotes](https://arxiv.org/abs/2203.11147) (GopherCite)
  - Jacob Menick, Maja Trebacz, Vladimir Mikulik, John Aslanides, Francis Song, Martin Chadwick, Mia Glaese, Susannah Young, Lucy Campbell-Gillingham, Geoffrey Irving, Nat McAleese
  - Palabra clave: Generate answers which citing specific evidence, Abstain from answering when unsure
  - Conjunto de datos: [Natural Questions](https://ai.google.com/research/NaturalQuestions), [ELI5](https://facebookresearch.github.io/ELI5/), [QuALITY](https://github.com/nyu-mll/quality), [TruthfulQA](https://github.com/sylinrl/TruthfulQA)
- [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) (InstructGPT)
  - Long Ouyang, Jeff Wu, Xu Jiang, et al.
  - Palabra clave: Large Language Model, Align Language Model with Human Intent
  - Código: [official](https://github.com/openai/following-instructions-human-feedback)
  - Conjunto de datos: [TruthfulQA](https://github.com/sylinrl/TruthfulQA), [RealToxicityPrompts](https://allenai.org/data/real-toxicity-prompts)
- [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/pdf/2212.08073.pdf)
  - Yuntao Bai, Saurav Kadavath, Sandipan Kundu, Amanda Askell, Jackson Kernion, et al.
  - Palabra clave: RL from AI feedback(RLAIF), Training a harmless AI assistant through selfimprovement, Chain-of-thought style, Control AI behavior more precisely
  - Código: [official](https://github.com/anthropics/ConstitutionalHarmlessnessPaper)
- [Discovering Language Model Behaviors with Model-Written Evaluations](https://arxiv.org/abs/2212.09251)
  - Ethan Perez, Sam Ringer, Kamilė Lukošiūtė, Karina Nguyen, Edwin Chen, et al.
  - Palabra clave: Automatically generate evaluations with LMs, More RLHF makes LMs worse, LM-written evaluations are highquality
  - Código: [official](https://github.com/anthropics/evals)
  - Conjunto de datos: [BBQ](https://github.com/nyu-mll/BBQ), [Winogender Schemas](https://github.com/rudinger/winogender-schemas)
- [Non-Markovian Reward Modelling from Trajectory Labels via Interpretable Multiple Instance Learning](https://arxiv.org/abs/2205.15367)
  - Joseph Early, Tom Bewley, Christine Evers, Sarvapali Ramchurn
  - Palabra clave: Reward Modelling (RLHF), Non-Markovian, Multiple Instance Learning, Interpretability
  - Código: [official](https://github.com/JAEarly/MIL-for-Non-Markovian-Reward-Modelling)
- [SURF: Semi-supervised Reward Learning with Data Augmentation for Feedback-efficient Preference-based Reinforcement Learning](https://arxiv.org/abs/2203.10050)
  - Jongjin Park, Younggyo Seo, Jinwoo Shin, Honglak Lee, Pieter Abbeel, Kimin Lee
  - Palabra clave: Semi-supervised Reward Learning, Preference Data Augmentation, RLHF Efficiency
- [Reward Uncertainty for Exploration in Preference-based Reinforcement Learning](https://arxiv.org/abs/2205.12401)
  - Xinran Liang, Katherine Shu, Kimin Lee, Pieter Abbeel
  - Palabra clave: Preference-based RL (PbRL), Exploration, Reward Uncertainty, Feedback Efficiency
  - Código: [official](https://github.com/rll-research/rune)

### 2021
- [WebGPT: Browser-assisted question-answering with human feedback](https://arxiv.org/abs/2112.09332) (WebGPT)
  - Reiichiro Nakano, Jacob Hilton, Suchir Balaji, et al.
  - Palabra clave: Model search the web and provide reference， Imitation learning， BC, long form question
  - Conjunto de datos: [ELI5](https://facebookresearch.github.io/ELI5/), [TriviaQA](http://nlp.cs.washington.edu/triviaqa/), [TruthfulQA](https://github.com/sylinrl/TruthfulQA)
- [Recursively Summarizing Books with Human Feedback](https://arxiv.org/abs/2109.10862)
  - Jeff Wu, Long Ouyang, Daniel M. Ziegler, Nisan Stiennon, Ryan Lowe, Jan Leike, Paul Christiano
  - Palabra clave: Model trained on small task to assist human evaluate broader task, BC
  - Conjunto de datos: [Booksum](https://github.com/salesforce/booksum), [NarrativeQA](https://github.com/deepmind/narrativeqa)
- [Revisiting the Weaknesses of Reinforcement Learning for Neural Machine Translation](https://arxiv.org/abs/2106.08942)
  - Samuel Kiegeland, Julia Kreutzer
  - Palabra clave: The success of policy gradient is because of reward rather than the shape of output distribution, Machine Translation, NMT, DOmain Adaption
  - Código: [official](https://github.com/samuki/reinforce-joey)
  - Conjunto de datos: [WMT15](https://www.statmt.org/wmt15/index.html), [IWSLT14](https://sites.google.com/site/iwsltevaluation2014/mt-track)
- [PEBBLE: Feedback-Efficient Interactive Reinforcement Learning via Relabeling Experience and Unsupervised Pre-training](https://arxiv.org/abs/2106.05091)
  - Kimin Lee, Laura Smith, Pieter Abbeel
  - Palabra clave: Preference-based RL (PbRL), Data Efficiency, Unsupervised Pretraining, Reward Relabeling
  - Código: [official](https://github.com/rll-research/BPref)
- [B-Pref: Benchmarking Preference-Based Reinforcement Learning](https://arxiv.org/abs/2111.03026)
  - Kimin Lee, Laura Smith, Anca Dragan, Pieter Abbeel
  - Palabra clave: Benchmark, Preference-based RL, Simulated Human Feedback, Robustness Evaluation
  - Código: [official](https://github.com/rll-research/BPref)

### 2020 y antes

- [Learning to summarize from human feedback](https://arxiv.org/abs/2009.01325)
  - Nisan Stiennon, Long Ouyang, Jeff Wu, Daniel M. Ziegler, Ryan Lowe, Chelsea Voss, Alec Radford, Dario Amodei, Paul Christiano
  - Palabra clave: Care about summary quality, Training loss affect the model behavior, Reward model generalizes to new datasets
  - Código: [official](https://github.com/openai/summarize-from-feedback)
  - Conjunto de datos: [TL;DR](https://www.tensorflow.org/datasets/catalog/reddit), [CNN/DM](https://github.com/abisee/cnn-dailymail)
- [Fine-Tuning Language Models from Human Preferences](https://arxiv.org/abs/1909.08593)
  - Daniel M. Ziegler, Nisan Stiennon, Jeffrey Wu, Tom B. Brown, Alec Radford, Dario Amodei, Paul Christiano, Geoffrey Irving
  - Palabra clave: Reward learning for language, Continuing text with positive sentiment, Summary task, Physical descriptive
  - Código: [official](https://github.com/openai/lm-human-preferences)
  - Conjunto de datos: [TL;DR](https://www.tensorflow.org/datasets/catalog/reddit), [CNN/DM](https://github.com/abisee/cnn-dailymail)
- [Scalable agent alignment via reward modeling: a research direction](https://arxiv.org/abs/1811.07871)
  - Jan Leike, David Krueger, Tom Everitt, Miljan Martic, Vishal Maini, Shane Legg
  - Palabra clave: Agent alignment problem, Learn reward from interaction, Optimize reward with RL, Recursive reward modeling
  - Código: [official](https://github.com/rddy/ReQueST)
  - Entorno: Atari
- [Reward learning from human preferences and demonstrations in Atari](https://arxiv.org/abs/1811.06521)
  - Borja Ibarz, Jan Leike, Tobias Pohlen, Geoffrey Irving, Shane Legg, Dario Amodei
  - Palabra clave: Expert demonstration trajectory preferences reward hacking problem, Noise in human label
  - Código: [official](https://github.com/rddy/ReQueST)
  - Entorno: Atari
- [Deep TAMER: Interactive Agent Shaping in High-Dimensional State Spaces](https://arxiv.org/abs/1709.10163)
  - Garrett Warnell, Nicholas Waytowich, Vernon Lawhern, Peter Stone
  - Palabra clave: High dimension state, Leverage the input of Human trainer
  - Código: [third party](https://github.com/bharadwaj1098/Tamer)
  - Entorno: Atari
- [Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741)
  - Paul Christiano, Jan Leike, Tom B. Brown, Miljan Martic, Shane Legg, Dario Amodei
  - Palabra clave: Explore goal defined in human preferences between pairs of trajectories segmentation, Learn more complex thing than human feedback
  - Código: [official](https://github.com/mrahtz/learning-from-human-preferences)
  - Entorno: Atari, MuJoCo
- [Interactive Learning from Policy-Dependent Human Feedback](https://arxiv.org/abs/1701.06049)
  - James MacGlashan, Mark K Ho, Robert Loftin, Bei Peng, Guan Wang, David Roberts, Matthew E. Taylor, Michael L. Littman
  - Palabra clave: Decision is influenced by current policy rather than human feedback, Learn from policy dependent feedback that converges to a local optimal

## Codebases

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
  - Conjunto de datos: [stanfordnlp/sst2](https://huggingface.co/datasets/stanfordnlp/sst2)
  - Tarea: Generar texto con sentimiento positivo
  - Entorno: Google Colab
- [veRL: Volcano Engine Reinforcement Learning for LLM](https://github.com/volcengine/verl)
  - ByteDance Seed MLSys Team & HKU: Guangming Sheng, Chi Zhang, Zilingfeng Ye, Xibin Wu, Wang Zhang, Ru Zhang, Yanghua Peng, Haibin Lin, Chuan Wu
  - Palabra clave: Flexible, Efficient, RLHF framework
  - Tareas: RLHF, Reasoning tasks including math and code.
- [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)
  - OpenRLHF
  - Palabra clave: 70B, RLHF, DeepSpeed, Ray, vLLM
  - Tarea: Un rendimiento fácil de usar, escalable y de alto rendimiento RLHF Marco (Apoyo 70B+ afinación completa &quot; LoRA & Mixtral &quot; ).
- [Potato](https://github.com/davidjurgens/potato)
  - David Jurgens et al.
  - Palabra clave: Annotation, Human Evaluation, Quality Control, AI-Assisted Labeling
  - Tarea: Plataforma de anotación portátil para la evaluación humana y la recogida de comentarios con 20+ tipos de anotación y evaluación de trazas de agente
- [PaLM + RLHF - Pytorch](https://github.com/lucidrains/PaLM-rlhf-pytorch)
  - Phil Wang, Yachine Zahidi, Ikko Eltociear Ashimine, Eric Alcaide
  - Palabra clave: Transformers, PaLM architecture
  - Conjunto de datos: [enwik8](http://prize.hutter1.net/)
- [lm-human-preferences](https://github.com/openai/lm-human-preferences)
  - Daniel M. Ziegler, Nisan Stiennon, Jeffrey Wu, Tom B. Brown, Alec Radford, Dario Amodei, Paul Christiano, Geoffrey Irving
  - Palabra clave: Reward learning for language, Continuing text with positive sentiment, Summary task, Physical  descriptive
  - Conjunto de datos: [TL;DR](https://www.tensorflow.org/datasets/catalog/reddit), [CNN/DM](https://github.com/abisee/cnn-dailymail)
- [following-instructions-human-feedback](https://github.com/openai/following-instructions-human-feedback)
  - Long Ouyang, Jeff Wu, Xu Jiang, et al.
  - Palabra clave: Large Language Model, Align Language Model with Human Intent
  - Conjunto de datos: [TruthfulQA](https://github.com/sylinrl/TruthfulQA) [RealToxicityPrompts](https://allenai.org/data/real-toxicity-prompts)
- [Transformer Reinforcement Learning (TRL)](https://github.com/lvwerra/trl)
  - Leandro von Werra, Younes Belkada, Lewis Tunstall, et al.
  - Palabra clave: Train LLM with RL, PPO, Transformer
  - Tarea: [IMDB sentiment](https://www.imdb.com/interfaces/)
- [Transformer Reinforcement Learning X (TRLX)](https://github.com/CarperAI/trlx)
  - Jonathan Tow, Leandro von Werra, et al.
  - Palabra clave: Distributed training framework, T5-based language models, Train LLM with RL, PPO, ILQL
  - Tarea: Ajuste fino LLM con RL utilizando función de recompensa proporcionada o conjunto de datos etiquetados con recompensa
- [RL4LMs (A modular RL library to fine-tune language models to human preferences)](https://github.com/allenai/RL4LMs)
  - Rajkumar Ramamurthy, Prithviraj Ammanabrolu, Kianté,Brantley, Jack Hessel, Rafet Sifa, Christian Bauckhage, Hannaneh Hajishirzi, Yejin Choi
  - Palabra clave: Optimizing language generators with RL, Benchmark,  Performant RL algorithm
  - Conjunto de datos: [IMDB](https://www.imdb.com/interfaces/), [CommonGen](https://inklab.usc.edu/CommonGen/), [CNN Daily Mail](https://github.com/abisee/cnn-dailymail), [ToTTo](https://github.com/google-research-datasets/ToTTo), [WMT-16 (en-de)](https://www.statmt.org/wmt16/it-translation-task.html), [NarrativeQA](https://github.com/deepmind/narrativeqa), [DailyDialog](http://yanran.li/dailydialog)
- [LaMDA-rlhf-pytorch](https://github.com/conceptofmind/LaMDA-rlhf-pytorch)
  - Phil Wang
  - Palabra clave: LaMDA, Attention-mechanism
  - Tarea: Aplicación pre-entrenamiento de código abierto del documento de investigación LaMDA de Google en PyTorch
- [TextRL](https://github.com/voidful/TextRL)
  - Eric Lam
  - Palabra clave: huggingface's transformer
  - Tarea: Generación de texto
  - Entorno: PFRL, gym
- [minRLHF](https://github.com/thomfoster/minRLHF)
  - Thomfoster
  - Palabra clave: PPO, Minimal library
  - Tarea: fines educativos
- [DeepSpeed-Chat](https://github.com/microsoft/DeepSpeedExamples/tree/master/applications/DeepSpeed-Chat)
  - Microsoft
  - Palabra clave: Affordable RLHF Training
- [Dromedary](https://github.com/IBM/Dromedary)
  - IBM
  - Palabra clave: Minimal human supervision, Self-aligned
  - Tarea: Modelo de idioma autoalineado formado con supervisión humana mínima
- [FG-RLHF](https://finegrainedrlhf.github.io/)
  - Zeqiu Wu, Yushi Hu, Weijia Shi, et al.
  - Palabra clave: Fine-Grained RLHF, providing a reward after every segment, Incorporating multiple RMs associated with different feedback types
  - Tarea: Un marco que permite el entrenamiento y el aprendizaje de funciones de recompensa que son finas en densidad y múltiples RMs
-[Safe-RLHF](https://github.com/PKU-Alignment/safe-rlhf)
  - Xuehai Pan, Ruiyang Sun, Jiaming Ji, et al.
  - Palabra clave: Support popular pre-trained models, Large human-labeled dataset, Multi-scale metrics for safety constraints verification, Customized parameters
  - Tarea: Constrained Value-Alineados LLM via Safe RLHF
- [VinePPO](https://github.com/McGill-NLP/VinePPO)
  - Amirhossein Kazemnejad, Milad Aghajohari, et al.
  - Palabra clave: Performant Implementation of RL algorithms for Reasoning, PPO, DPO, RestEM, Monte Carlo Value Estimation 
  - Tarea: Tareas de resonancia incluyendo MATH y GSM8K

## Dataset
```
format:
- [title](dataset link) [links]
  - author1, author2, and author3...
  - keyword
  - experiment environments or tasks
```
- [HH-RLHF](https://github.com/anthropics/hh-rlhf)
  - Ben Mann, Deep Ganguli
  - Palabra clave: Human preference dataset, Red teaming data, machine-written
  - Tarea: Conjunto de datos de código abierto para los datos de preferencias humanas sobre la ayuda y la inofensividad
- [Stanford Human Preferences Dataset(SHP)](https://huggingface.co/datasets/stanfordnlp/SHP)
  - Ethayarajh, Kawin and Zhang, Heidi and Wang, Yizhong and Jurafsky, Dan
  - Palabra clave: Naturally occurring and human-written dataset,18 different subject areas
  - Tarea: Intended to be used for training RLHF modelos de recompensa
- [PromptSource](https://github.com/bigscience-workshop/promptsource)
  - Stephen H. Bach, Victor Sanh, Zheng-Xin Yong et al.
  - Palabra clave: Prompted English datasets,  Mapping a data example into natural language
  - Tarea: Herramienta para crear, compartir y utilizar impulsos de lenguaje natural
- [Structured Knowledge Grounding(SKG) Resources Collections](https://unifiedskg.com/)
  - Tianbao Xie, Chen Henry Wu, Peng Shi et al.
  - Palabra clave: Structured Knowledge Grounding
  - Tarea: La recopilación de conjuntos de datos se relaciona con la estructura de los conocimientos
- [The Flan Collection](https://github.com/google-research/FLAN/tree/main/flan/v2)
  - Longpre Shayne, Hou Le, Vu Tu et al.
  - Tarea: Colección compila conjuntos de datos de Flan 2021, P3, Instrucciones Super-Naturales 
- [rlhf-reward-datasets](https://huggingface.co/datasets/yitingxie/rlhf-reward-datasets)
  - Yiting Xie
  - Palabra clave: Machine-written dataset
- [webgpt_comparisons](https://huggingface.co/datasets/openai/webgpt_comparisons)
  - OpenAI
  - Palabra clave: Human-written dataset, Long form question answering 
  - Tarea: Capacitar un modelo de respuesta de preguntas de forma larga para alinearse con las preferencias humanas
- [summarize_from_feedback](https://huggingface.co/datasets/openai/summarize_from_feedback)
  - OpenAI
  - Palabra clave: Human-written dataset, summarization
  - Tarea: Capacitar un modelo de resumen para alinearse con las preferencias humanas
- [Dahoas/synthetic-instruct-gptj-pairwise](https://huggingface.co/datasets/Dahoas/synthetic-instruct-gptj-pairwise)
  - Dahoas
  - Palabra clave: Human-written dataset, synthetic dataset
- [Stable Alignment - Alignment Learning in Social Games](https://github.com/agi-templar/Stable-Alignment)
  - Ruibo Liu, Ruixin (Ray) Yang, Qiang Peng
  - Palabra clave: Interaction data used for alignment training, Run in Sandbox
  - Tarea: Tren en los datos de interacción registrados en los juegos sociales simulados
- [LIMA](https://huggingface.co/datasets/GAIR/lima)
  - Meta AI
  - Palabra clave: without any RLHF, few carefully curated prompts and responses
  - Tarea: Dataset utilizado para la formación del modelo LIMA



## Blogs

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


## Libros
- [Reinforcement Learning from Human Feedback by Nathan Lambert](https://rlhfbook.com/)
- [Reinforcement Learning for Business](https://www.manning.com/books/reinforcement-learning-for-business)
- [The RLHF Book](https://www.manning.com/books/the-rlhf-book)

## Otros idiomas de apoyo

[Turkish](README_TU.md)

## Contribución

Nuestro propósito es hacer este repo aún mejor. Si usted está interesado en contribuir, consulte [HERE](CONTRIBUTING.md) para instrucciones en contribución.

## Licencia

Impresionante RLHF se libera bajo la licencia Apache 2.0.
