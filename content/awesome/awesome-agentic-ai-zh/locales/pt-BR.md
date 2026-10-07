<div align="right">
  <strong>Português</strong> | <a href="./README.zh-Hans.md">Chinês simplificado</a> | <a href="./README.en.md">Inglês</a>
</div>

<div align="center" markdown="1">

![Do Stage 0–2 o ramo base comum para as rotas CLI e Agent, compartilhando Stage 5 e 8, depois escolher a rota de papel conforme necessário](resources/diagrams/banner.svg)

# awesome-agentic-ai-zh

**🤖 Um roteiro de aprendizagem que vai de «o que é um agente de IA» a «construir um sistema confiável»**

**Escolha primeiro uma rota e avance passo a passo. Conceitos-chave, exercícios práticos e recursos selecionados estão organizados para você.**

[![License](https://img.shields.io/badge/license-MIT-blue?style=flat)](LICENSE)
[![繁中](https://img.shields.io/badge/語言-繁體中文-red?style=flat)](README.md)
[![简中](https://img.shields.io/badge/語言-简体中文-orange?style=flat)](README.zh-Hans.md)
[![EN](https://img.shields.io/badge/lang-English-blue?style=flat)](README.en.md)
![GitHub stars](https://img.shields.io/github/stars/WenyuChiou/awesome-agentic-ai-zh?style=flat&logo=github)
[![Site de leitura online](https://img.shields.io/badge/線上閱讀-立即開始-2ea44f?style=flat)](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)

</div>

> 📱 Para ler no celular, use o [site de leitura online](https://wenyuchiou.github.io/awesome-agentic-ai-zh/).

## 🎯 Para que serve este roteiro?

Um **AI Agent** (agente de IA) é «um sistema de IA capaz, para atingir um objetivo humano, de decidir o próximo passo e agir por conta própria». Depois de receber o objetivo, ele observa a situação atual, escolhe o próximo passo, usa ferramentas se necessário e, conforme o resultado, continua, corrige, para ou devolve o controle à pessoa. Pode realizar trabalhos automaticamente por você, mas apenas dentro das regras e permissões que você deu. Um chatbot que responde uma única vez, ou um script cujos passos estão todos pré-fixados, não é necessariamente um agente. Este repo não exige que você conheça todos os termos desde o início, mas o guia em três etapas, na ordem:

1. **Entender primeiro a base**: o que são LLM (Large Language Model, um modelo capaz de ler e escrever linguagem), Prompt, API (Application Programming Interface, uma interface para um programa chamar um serviço) e Token.
2. **Depois construir**: fazer o modelo chamar ferramentas, executar uma Agent Loop, ler documentos e lembrar de coisas.
3. **Por fim tornar confiável**: adicionar permissões, Eval, aprovação humana, observabilidade e recuperação de falhas.

Aqui o papel é **roteiro de aprendizagem + recursos selecionados + pequenos exercícios diretamente executáveis**. Quando um capítulo completo é necessário, levamos você à documentação oficial, [Datawhale Hello-Agents](https://github.com/datawhalechina/hello-agents) ou ao Cookbook correspondente, em vez de reescrever outra enciclopédia. Quando é preciso conectar um modelo, cada exercício explica então o caminho na nuvem ou local.

Os termos técnicos importantes são primeiro explicados com palavras simples em sua primeira aparição, e então o termo em inglês formal é mantido. Se esquecer uma palavra, consulte diretamente o [glossário](resources/glossary.md).

## 🚀 Comece agora

1. **Nunca programou**: comece por [Stage 0: preparação básica](stages/00-foundations.md); se API ou CLI Agent não lhe forem familiares, use o [guia de configuração para iniciantes](resources/setup-guide.md).
2. **Já sabe Python, Git e API**: comece por [Stage 1: fundamentos de LLM](stages/01-llm-basics.md).
3. **Ainda não sabe qual rota seguir**: veja primeiro a tabela de escolha Track A / Track B abaixo.

Antes de seguir o Track A ou Track B, confirme primeiro os Stages 0–2; quem segue apenas a rota de usuário cotidiano pode abrir direto o guia de papel.

| O que você quer fazer agora? | Rota recomendada | Entrada da rota |
|---|---|---|
| Concluir trabalho com um CLI Agent como Claude Code, Codex, OpenCode | **Track A — Usuário avançado de CLI** | [A1: escolher um CLI Agent](tracks/cli/A1-cli-intro.md) |
| Escrever você mesmo agentes, loops de ferramentas, Workflows e serviços | **Track B — Construtor de agentes** | [Stage 3: primeira Agent Loop](stages/03-tool-use-and-hello-agent.md) |
| Usar a IA com segurança no dia a dia, sem programar por enquanto | **Rota de usuário cotidiano** | [Guia do usuário cotidiano](branches/for-everyday-users.md) |

<details markdown="1">
<summary>💻 Expandir: baixar para o local</summary>

```powershell
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
cd awesome-agentic-ai-zh
```

Após o download, abra primeiro `stages/00-foundations.md`, ou vá direto para sua primeira parada pela tabela acima.

</details>

## Do Stage 0 ao Stage 8, com a estação de leitura Stage 7.5

![Mapa de aprendizagem de agentes de IA](resources/diagrams/learning-map.png)

Este mapa totaliza **8 Stages temáticos + a preparação Stage 0 + a estação de leitura avançada Stage 7.5**, ou seja, **10 estações de aprendizagem**. Os leitores dos Tracks A/B confirmam primeiro as **bases comuns Stage 0–2**; quem já sabe Python, Git e API pode pular o Stage 0. O usuário cotidiano pode seguir direto o guia de papel.

### Bases comuns: Stage 0–2

| Stage | O que este passo resolve? | O que você poderá fazer depois? |
|---|---|---|
| **0** · [Preparação básica](stages/00-foundations.md) | O computador e as ferramentas básicas estão prontos? | Chamar uma API pública com Python, ler JSON (JavaScript Object Notation, formato de texto comum para trocar dados entre programas) e salvar resultados com Git |
| **1** · [Fundamentos de LLM](stages/01-llm-basics.md) | Em que diferem LLM, Token, Context e modelos? | Chamar um LLM e escolher um modelo na nuvem ou local conforme a necessidade |
| **2** · [Design de prompts](stages/02-prompt-engineering.md) | Como expressar claramente objetivo, dados, regras e saída? | Comparar, em um caso fixo, os limites de Zero-Shot, One-Shot, Few-Shot e CoT (Chain-of-Thought, método de raciocínio que trata o problema por passos intermediários) |

### Track A: usar um CLI Agent para terminar o trabalho

A ordem oficial é `A1 → A2 → Stage 5 → A3 → Stage 8`.

| Ordem | O que este passo resolve? | O que você poderá fazer depois? |
|---|---|---|
| **A1** · [Escolher um CLI Agent](tracks/cli/A1-cli-intro.md) | O que são respectivamente OpenRouter, OpenCode, Pi, Ollama? | Escolher a ferramenta certa e concluir uma primeira pequena tarefa |
| **A2** · [Criar um fluxo repetível](tracks/cli/A2-cli-workflow.md) | Como deixar as regras e os passos para a próxima vez? | Escrever Project Instructions, Skills e fluxos de trabalho reutilizáveis |
| **5** · [Ecossistema Claude Code](stages/05-claude-code-ecosystem.md) | Como se distinguem MCP, Skills, Plugins, Hooks e Subagents? | Leia primeiro o núcleo 5.1–5.4; 5.5–5.8 conforme a necessidade do trabalho |
| **A3** · [Conectar ao trabalho real](tracks/cli/A3-cli-production.md) | Como conectar com segurança ferramentas externas, CI e processos de equipe? | Realizar a integração com privilégios mínimos, verificação humana e registro |
| **8** · [Interfaces do agente](stages/08-agent-interfaces.md) | Como o agente manipula navegador, tela e Sandbox? | Decidir se a tarefa usa CLI, Browser, Computer Use ou API |

### Track B: construir um agente do zero

| Ordem | O que este passo resolve? | O que você poderá fazer depois? |
|---|---|---|
| **3** · [Uso de ferramentas e primeira Agent Loop](stages/03-tool-use-and-hello-agent.md) | Como o modelo chama ferramentas com segurança e repete o próximo passo? | Fazer uma Agent Loop com número máximo de rodadas e validação de parâmetros |
| **4** · [Workflow Graph e frameworks de agentes](stages/04-agent-frameworks.md) | Como desenhar vários passos como mapa de trabalho? | Escolher Workflow, Agent, Graph e Framework |
| **5** · [Ecossistema Claude Code](stages/05-claude-code-ecosystem.md) | Como MCP, Skills, Plugins, Hooks e Subagents cooperam? | Combinar ferramentas, regras e capacidades reutilizáveis |
| **6** · [Memory · RAG (Retrieval-Augmented Generation, primeiro busca dados relevantes e depois responde com eles)](stages/06-memory-rag.md) | Como o agente consulta documentos, salva e recupera informações importantes? | Criar um RAG mínimo, long-term memory e um fluxo de contextual retrieval |
| **7** · [Engenharia de produção de agentes: testável, visível, parável, recuperável](stages/07-multi-agent-production.md) | Como o agente opera com estabilidade em ambiente real? | Adicionar Eval, observabilidade, orçamento, Human-in-the-loop (HITL, aprovação humana) e recuperação |
| **7.5** · [Mapa de conceitos agentic avançados](stages/07.5-advanced-agentic-concepts.md) | Quais outros padrões avançados valem a pena conhecer? | Escolher entre 12 conceitos os temas necessários como PAR loop, agent-as-judge |
| **8** · [Interfaces do agente](stages/08-agent-interfaces.md) | Como o agente manipula um ambiente real além da API? | Escolher Computer Use, Browser Use ou Code Sandbox |

No Stage 4, entenda primeiro o **Workflow Graph** e depois o construa com um framework; no Stage 7, adicione Eval, observabilidade, aprovação e recuperação para que o mesmo mapa de trabalho funcione com estabilidade.

> 🔭 **Ordem de aprendizagem**: Stage 2 Prompt → Stage 3 **Agent Loop** → Stage 4 **Workflow Graph** / Framework → Stage 5 ferramentas e regras → Stage 6 **Context Engineering** → Stage 7 production. Prompt, Context, Harness, Loop e Graph trabalham juntos; não são cinco camadas, nem gerações de produto que se substituem.

Após A3 ou Stage 7, você pode começar o [projeto Capstone](CAPSTONE.md); para registrar o progresso, use [PROGRESS.md](PROGRESS.md).

<details markdown="1">
<summary>⏱️ Expandir: estimativa de tempo (referência de planejamento, não um prazo)</summary>

- **Track A**: cerca de 8–10 semanas. O foco é usar CLI Agent existentes para concluir o trabalho.
- **Track B**: tronco principal cerca de 16–22 semanas; com 5–8 horas por semana, normalmente leva 5–7 meses.
- **Stage 5** é o Hub de ferramentas e regras: Track A vê como usar, Track B vê como combinar.
- **Stage 8** é o Hub de interfaces de operação: Track A vê como delegar, Track B vê como conectar ao seu próprio agente.

O cronograma é apenas uma referência de planejamento. Faça primeiro o passo à sua frente; não precisa ler o mapa inteiro de uma vez.

</details>

### Continue segundo o seu papel

![Pesquisa, desenvolvimento, ensino, trabalho do conhecimento e uso cotidiano são cinco opções, ler conforme a necessidade, sem precisar percorrer tudo](resources/diagrams/branch-decision-tree.svg)

[Imagem estática](resources/diagrams/branch-decision-tree.png)

| Rota | Para quem | Com o que você lidará? |
|---|---|---|
| 🔬 [Pesquisador](branches/for-researcher.md) | Pós-graduandos, pós-doutores, PI | Evidências bibliográficas, fluxos reproduzíveis, Multi-Agent Review |
| 💻 [Desenvolvedor](branches/for-developer.md) | Engenheiros de software | CLI Delegation, Code Review, testes e restauração |
| 🎓 [Professor](branches/for-teacher.md) | Professores, instrutores | Preparação de aulas, feedback, privacidade e prompts de ensino |
| 📊 [Trabalhador do conhecimento](branches/for-knowledge-worker.md) | Consultores, PM, analistas | Fluxos de e-mail, reuniões e relatórios |
| 👥 [Usuário cotidiano](branches/for-everyday-users.md) | Usuários de IA que não programam necessariamente | Escrita, aprendizagem, privacidade e uso seguro |

## 💡 Como aprender sem travar

1. **Vá por apenas um Stage de cada vez**: responda primeiro à pergunta central do capítulo.
2. **Leia primeiro termos-chave e obrigatórios**: são usados diretamente nos exercícios seguintes.
3. **Copie diretamente o primeiro comando**: execute primeiro um teste offline, não precisa copiar um arquivo em branco.
4. **Mude apenas uma coisa de cada vez**: execute o teste logo após, para saber qual alteração causou o resultado.
5. **Só avance após cumprir a condição de conclusão**: entender não é o mesmo que saber fazer.

Cada `starter.py` é uma referência executável. Leia primeiro o enunciado e as condições de sucesso, modifique um lugar e execute o teste novamente. Para o método completo, veja [como usar este material](docs/HOW_TO_USE.md).

## 📚 Entradas de aprendizagem para favoritar

Aqui colocamos apenas as entradas mais usadas; a lista completa está em [RESOURCES.md](RESOURCES.md). As estrelas indicam a **prioridade de aprendizagem**, não uma classificação de projetos.

<table>
  <thead><tr><th>Uso</th><th>Entrada</th><th>Quando usar?</th><th>Importância</th></tr></thead>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">Início</th><td><a href="resources/setup-guide.md">Guia de configuração para iniciantes</a></td><td>Primeira instalação e execução</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="docs/HOW_TO_USE.md">Como usar este material</a></td><td>Antes de começar o primeiro exercício prático</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="PROGRESS.md">Tabela de progresso</a></td><td>Para saber o próximo passo ou registrar o concluído</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">Aprender</th><td><a href="resources/glossary.md">Glossário de termos-chave</a></td><td>Ao encontrar palavras estranhas como Token, RAG, MCP</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="examples/README.md">Entrada de exemplos executáveis</a></td><td>Para rodar direto testes offline e casos pequenos</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cookbook.md">Cookbook prático</a></td><td>Para fazer Skills, MCP, Office, Zotero ou LLM local</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="4">Consultar</th><td><a href="resources/README.md">Armário de recursos</a></td><td>Quando não se sabe se consultar Guia, Catálogo ou Cookbook</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="RESOURCES.md">Lista completa de recursos</a></td><td>Para encontrar docs oficiais, cursos, comunidades e leitura adicional</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cli-agents-guide.md">Guia de escolha de CLI Agent</a></td><td>Para preparar o Track A ou comparar ferramentas CLI</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/courses.md">Mapa de cursos e certificações</a></td><td>Para distinguir certificados de conclusão, distintivos de habilidade e exames de certificação</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
</table>

## 🤝 Vamos melhorar este mapa juntos

- Erros de conteúdo, links quebrados ou informações desatualizadas: abra uma [Issue](https://github.com/WenyuChiou/awesome-agentic-ai-zh/issues).
- Para acrescentar um projeto ou recurso de aprendizagem: indique «qual Stage e o que ele ensina».
- Para preparar um PR: leia primeiro [CONTRIBUTING.md](CONTRIBUTING.md) e o [guia de estilo](resources/style-guide.md).
- Atualizações recentes: veja [CHANGELOG.md](CHANGELOG.md).

<details markdown="1">
<summary>🧰 Expandir: modo completo de contribuição e verificação automática</summary>

Você pode corrigir texto, acrescentar um espelho trilingue, reportar tópicos ausentes ou manter a longo prazo um Stage / rota de papel. Ao adicionar um link de projeto do GitHub, a verificação automática ajuda a ver estado de arquivamento, licença e última atualização; a inclusão ainda é decidida pelo mantenedor conforme o valor de aprendizagem.

O papel completo e as regras estão em [CONTRIBUTORS.md](CONTRIBUTORS.md).

</details>

## 🙏 Inspirações importantes e projetos relacionados

- [**Datawhale Hello-Agents**](https://github.com/datawhalechina/hello-agents) — para leitores que precisam de capítulos completos e implementação em profundidade.
- [**Comunidade Datawhale**](https://github.com/datawhalechina) — comunidade chinesa de aprendizagem colaborativa em machine learning, que oferece muitas entradas de aprendizagem confiáveis.
- [**liyupi/ai-guide**](https://github.com/liyupi/ai-guide) — mais voltada a uma biblioteca de recursos ampla; este repo cuida da ordem de aprendizagem.

<details markdown="1">
<summary>📖 Expandir: colaboradores e formato de citação</summary>

[![Contributors](https://contrib.rocks/image?repo=WenyuChiou/awesome-agentic-ai-zh)](https://github.com/WenyuChiou/awesome-agentic-ai-zh/graphs/contributors)

```bibtex
@misc{awesome_agentic_ai_zh_2026,
  title = {awesome-agentic-ai-zh: A Structured Learning Roadmap for Agentic AI},
  author = {Chiou, Wenyu},
  year = {2026},
  url = {https://github.com/WenyuChiou/awesome-agentic-ai-zh}
}
```

</details>

## ☕ Apoio e contato

Este roteiro de aprendizagem usa licença MIT e continuará gratuito e público. Para dúvidas e sugestões gerais, use Issues; para contato privado, escreva para [wenyuchiou12@gmail.com](mailto:wenyuchiou12@gmail.com).

Se este mapa ajudou você, deixe uma ⭐ Star, ou [pague um café para o autor](https://www.buymeacoffee.com/wenyuchiou).

## License

MIT. Maintained by [@WenyuChiou](https://github.com/WenyuChiou).
