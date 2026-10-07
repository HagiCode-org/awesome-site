<div align="right">
  <strong>Español</strong> | <a href="./README.zh-Hans.md">Chino simplificado</a> | <a href="./README.en.md">Inglés</a>
</div>

<div align="center" markdown="1">

![Desde Stage 0–2 la rama base común a las rutas CLI y Agent, compartiendo Stage 5 y 8, luego elegir la ruta de rol según se necesite](resources/diagrams/banner.svg)

# awesome-agentic-ai-zh

**🤖 Un mapa de aprendizaje que va de «qué es un agente de IA» a «construir un sistema fiable»**

**Elija primero una ruta y avance paso a paso. Conceptos clave, ejercicios prácticos y recursos seleccionados están ordenados para usted.**

[![License](https://img.shields.io/badge/license-MIT-blue?style=flat)](LICENSE)
[![繁中](https://img.shields.io/badge/語言-繁體中文-red?style=flat)](README.md)
[![简中](https://img.shields.io/badge/語言-简体中文-orange?style=flat)](README.zh-Hans.md)
[![EN](https://img.shields.io/badge/lang-English-blue?style=flat)](README.en.md)
![GitHub stars](https://img.shields.io/github/stars/WenyuChiou/awesome-agentic-ai-zh?style=flat&logo=github)
[![Sitio de lectura en línea](https://img.shields.io/badge/線上閱讀-立即開始-2ea44f?style=flat)](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)

</div>

> 📱 Para leer en el móvil, use el [sitio de lectura en línea](https://wenyuchiou.github.io/awesome-agentic-ai-zh/).

## 🎯 ¿Para qué le sirve este mapa?

Un **AI Agent** (agente de IA) es «un sistema de IA capaz, para alcanzar un objetivo humano, de decidir el siguiente paso y actuar por sí mismo». Una vez se le da el objetivo, observa la situación actual, elige el siguiente paso, usa herramientas si hace falta y luego, según el resultado, continúa, corrige, se detiene o devuelve el control a la persona. Puede completar trabajos automáticamente por usted, pero solo dentro de las reglas y permisos que usted le ha dado. Un chatbot que responde una sola vez, o un guion cuyos pasos están todos prefijados, no es necesariamente un agente. Este repo no exige que conozca todos los términos al principio, sino que le guía en tres cosas por orden:

1. **Entender primero la base**: qué son LLM (Large Language Model, un modelo capaz de leer y escribir lenguaje), Prompt, API (Application Programming Interface, una interfaz para que un programa llame a un servicio) y Token.
2. **Luego construir**: hacer que el modelo llame a herramientas, ejecute una Agent Loop, lea documentos y recuerde cosas.
3. **Finalmente hacerlo fiable**: añadir permisos, Eval, aprobación humana, observabilidad y recuperación ante fallos.

Aquí el rol es **ruta de aprendizaje + recursos seleccionados + pequeños ejercicios directamente ejecutables**. Cuando se necesita un capítulo completo, le llevamos a la documentación oficial, [Datawhale Hello-Agents](https://github.com/datawhalechina/hello-agents) o al Cookbook correspondiente, en lugar de reescribir otra enciclopedia. Cuando hay que conectar un modelo, cada ejercicio explica luego la ruta en la nube o local.

Los términos técnicos importantes se explican primero con palabras sencillas en su primera aparición, y luego se conserva el término inglés formal. Si olvida una palabra, consulte directamente el [glosario](resources/glossary.md).

## 🚀 Empiece ya

1. **Nunca ha programado**: empiece por [Stage 0: preparación básica](stages/00-foundations.md); si la API o los CLI Agent le son poco familiares, use la [guía de configuración para principiantes](resources/setup-guide.md).
2. **Ya sabe Python, Git y API**: empiece por [Stage 1: fundamentos de LLM](stages/01-llm-basics.md).
3. **Aún no sabe qué ruta seguir**: vea primero la tabla de elección Track A / Track B más abajo.

Antes de ir por Track A o Track B, confirme primero los Stage 0–2; quien solo sigue la ruta de usuario cotidiano puede abrir directamente la guía de rol.

| ¿Qué quiere hacer ahora? | Ruta recomendada | Entrada de la ruta |
|---|---|---|
| Completar trabajo con un CLI Agent como Claude Code, Codex, OpenCode | **Track A — Usuario avanzado de CLI** | [A1: elegir un CLI Agent](tracks/cli/A1-cli-intro.md) |
| Escribir usted mismo agentes, bucles de herramientas, Workflows y servicios | **Track B — Constructor de agentes** | [Stage 3: primera Agent Loop](stages/03-tool-use-and-hello-agent.md) |
| Usar la IA con seguridad en el día a día, sin programar por ahora | **Ruta de usuario cotidiano** | [Guía de usuario cotidiano](branches/for-everyday-users.md) |

<details markdown="1">
<summary>💻 Desplegar: descargar en local</summary>

```powershell
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
cd awesome-agentic-ai-zh
```

Tras la descarga, abra primero `stages/00-foundations.md`, o vaya directamente a su primera parada por la tabla de arriba.

</details>

## De Stage 0 a Stage 8, con la estación de lectura Stage 7.5

![Mapa de aprendizaje de agentes de IA](resources/diagrams/learning-map.png)

Este mapa suma en total **8 Stages temáticos + la preparación Stage 0 + la estación de lectura avanzada Stage 7.5**, es decir, **10 estaciones de aprendizaje**. Los lectores de Track A/B confirman primero las **bases comunes Stage 0–2**; quien ya sabe Python, Git y API puede saltarse el Stage 0. El usuario cotidiano puede seguir directamente la guía de rol.

### Bases comunes: Stage 0–2

| Stage | ¿Qué resuelve este paso? | ¿Qué podrá hacer después? |
|---|---|---|
| **0** · [Preparación básica](stages/00-foundations.md) | ¿Están listos el ordenador y las herramientas básicas? | Llamar a una API pública con Python, leer JSON (JavaScript Object Notation, formato de texto común para intercambiar datos entre programas) y guardar resultados con Git |
| **1** · [Fundamentos de LLM](stages/01-llm-basics.md) | ¿En qué difieren LLM, Token, Context y los modelos? | Llamar a un LLM y elegir un modelo en la nube o local según convenga |
| **2** · [Diseño de prompts](stages/02-prompt-engineering.md) | ¿Cómo expresar con claridad el objetivo, los datos, las reglas y la salida? | Comparar en un caso fijo los límites de Zero-Shot, One-Shot, Few-Shot y CoT (Chain-of-Thought, método de razonamiento que resuelve el problema por pasos intermedios) |

### Track A: usar un CLI Agent para terminar el trabajo

El orden oficial es `A1 → A2 → Stage 5 → A3 → Stage 8`.

| Orden | ¿Qué resuelve este paso? | ¿Qué podrá hacer después? |
|---|---|---|
| **A1** · [Elegir un CLI Agent](tracks/cli/A1-cli-intro.md) | ¿Qué son respectivamente OpenRouter, OpenCode, Pi, Ollama? | Elegir la herramienta correcta y completar una primera pequeña tarea |
| **A2** · [Crear un flujo repetible](tracks/cli/A2-cli-workflow.md) | ¿Cómo dejar las reglas y los pasos para la próxima vez? | Escribir Project Instructions, Skills y flujos de trabajo reutilizables |
| **5** · [Ecosistema Claude Code](stages/05-claude-code-ecosystem.md) | ¿Cómo se distinguen MCP, Skills, Plugins, Hooks y Subagents? | Lea primero el núcleo 5.1–5.4; 5.5–5.8 según necesidad del trabajo |
| **A3** · [Conectar al trabajo real](tracks/cli/A3-cli-production.md) | ¿Cómo conectar con seguridad herramientas externas, CI y procesos de equipo? | Realizar la integración con privilegios mínimos, revisión humana y registro |
| **8** · [Interfaces de agente](stages/08-agent-interfaces.md) | ¿Cómo maneja el agente navegador, pantalla y Sandbox? | Decidir si la tarea usa CLI, Browser, Computer Use o API |

### Track B: construir un agente desde cero

| Orden | ¿Qué resuelve este paso? | ¿Qué podrá hacer después? |
|---|---|---|
| **3** · [Uso de herramientas y primera Agent Loop](stages/03-tool-use-and-hello-agent.md) | ¿Cómo llama el modelo a herramientas con seguridad y repite el siguiente paso? | Hacer una Agent Loop con número máximo de rondas y validación de parámetros |
| **4** · [Workflow Graph y frameworks de agentes](stages/04-agent-frameworks.md) | ¿Cómo dibujar varios pasos como mapa de trabajo? | Elegir Workflow, Agent, Graph y Framework |
| **5** · [Ecosistema Claude Code](stages/05-claude-code-ecosystem.md) | ¿Cómo cooperan MCP, Skills, Plugins, Hooks y Subagents? | Combinar herramientas, reglas y capacidades reutilizables |
| **6** · [Memory · RAG (Retrieval-Augmented Generation, primero buscar datos relevantes y luego responder con ellos)](stages/06-memory-rag.md) | ¿Cómo consulta el agente documentos, guarda y recupera información importante? | Crear un RAG mínimo, long-term memory y un flujo de contextual retrieval |
| **7** · [Ingeniería de puesta en producción de agentes: testeable, visible, detenable, recuperable](stages/07-multi-agent-production.md) | ¿Cómo funciona el agente con estabilidad en un entorno real? | Añadir Eval, observabilidad, presupuesto, Human-in-the-loop (HITL, aprobación humana) y recuperación |
| **7.5** · [Mapa de conceptos agentic avanzados](stages/07.5-advanced-agentic-concepts.md) | ¿Qué otros patrones avanzados vale la pena conocer? | Elegir entre 12 conceptos los temas necesarios como PAR loop, agent-as-judge |
| **8** · [Interfaces de agente](stages/08-agent-interfaces.md) | ¿Cómo maneja el agente un entorno real más allá de la API? | Elegir Computer Use, Browser Use o Code Sandbox |

En el Stage 4 entienda primero el **Workflow Graph** y luego constrúyalo con un framework; en el Stage 7 añada Eval, observabilidad, aprobación y recuperación para que el mismo mapa de trabajo funcione con estabilidad.

> 🔭 **Orden de aprendizaje**: Stage 2 Prompt → Stage 3 **Agent Loop** → Stage 4 **Workflow Graph** / Framework → Stage 5 herramientas y reglas → Stage 6 **Context Engineering** → Stage 7 production. Prompt, Context, Harness, Loop y Graph trabajan juntos; no son cinco capas, ni generaciones de producto que se reemplazan.

Tras A3 o Stage 7, puede empezar el [proyecto Capstone](CAPSTONE.md); para registrar el progreso use [PROGRESS.md](PROGRESS.md).

<details markdown="1">
<summary>⏱️ Desplegar: estimación de tiempo (referencia de planificación, no una fecha límite)</summary>

- **Track A**: unas 8–10 semanas. El énfasis está en usar CLI Agent existentes para completar el trabajo.
- **Track B**: tronco principal unas 16–22 semanas; con 5–8 horas semanales, suele requerir 5–7 meses.
- **Stage 5** es el Hub de herramientas y reglas: Track A ve cómo usarlo, Track B cómo combinarlo.
- **Stage 8** es el Hub de interfaces de operación: Track A ve cómo delegar, Track B cómo conectarlo a su propio agente.

El cronograma es solo una referencia de planificación. Haga primero el paso ante sus ojos; no necesita leer todo el mapa de una vez.

</details>

### Continúe según su perfil

![Investigación, desarrollo, enseñanza, trabajo del conocimiento y uso cotidiano son cinco opciones, léase según necesidad, sin tener que recorrerlo todo](resources/diagrams/branch-decision-tree.svg)

[Imagen estática](resources/diagrams/branch-decision-tree.png)

| Ruta | Para quién | ¿Con qué trabajará? |
|---|---|---|
| 🔬 [Investigador](branches/for-researcher.md) | Estudiantes de doctorado, postdocs, PI | Evidencia bibliográfica, flujos reproducibles, Multi-Agent Review |
| 💻 [Desarrollador](branches/for-developer.md) | Ingenieros de software | CLI Delegation, Code Review, pruebas y restauración |
| 🎓 [Docente](branches/for-teacher.md) | Profesores, instructores | Preparación de clases, retroalimentación, privacidad y prompts de enseñanza |
| 📊 [Trabajador del conocimiento](branches/for-knowledge-worker.md) | Consultores, PM, analistas | Flujos de correo, reuniones e informes |
| 👥 [Usuario cotidiano](branches/for-everyday-users.md) | Usuarios de IA que no necesariamente programan | Escritura, aprendizaje, privacidad y uso seguro |

## 💡 Cómo aprender sin atascarse

1. **Vaya solo por un Stage a la vez**: responda primero a la pregunta central del capítulo.
2. **Lea primero palabras clave y obligatorias**: se usan directamente en los ejercicios siguientes.
3. **Copie directamente el primer comando**: ejecute primero una prueba sin conexión, no hace falta copiar un archivo en blanco.
4. **Cambie solo una cosa a la vez**: vuelva a ejecutar la prueba justo después, para saber qué cambio causó el resultado.
5. **Llegue a la condición de fin antes de avanzar**: entender no es igual a saber hacer.

Cada `starter.py` es una referencia ejecutable. Lea primero el enunciado y las condiciones de éxito, modifique un lugar y vuelva a ejecutar la prueba. Para el método completo, vea [cómo usar este material](docs/HOW_TO_USE.md).

## 📚 Entradas de aprendizaje para guardar

Aquí solo están las entradas más usadas; la lista completa está en [RESOURCES.md](RESOURCES.md). Las estrellas indican la **prioridad de aprendizaje**, no una clasificación de proyectos.

<table>
  <thead><tr><th>Uso</th><th>Entrada</th><th>¿Cuándo usar?</th><th>Importancia</th></tr></thead>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">Inicio</th><td><a href="resources/setup-guide.md">Guía de configuración para principiantes</a></td><td>Primera instalación y ejecución</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="docs/HOW_TO_USE.md">Cómo usar este material</a></td><td>Antes de empezar el primer ejercicio práctico</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="PROGRESS.md">Tabla de progreso</a></td><td>Para saber el siguiente paso o registrar lo completado</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="3">Aprender</th><td><a href="resources/glossary.md">Glosario de términos clave</a></td><td>Ante palabras desconocidas como Token, RAG, MCP</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="examples/README.md">Entrada de ejemplos ejecutables</a></td><td>Para ejecutar directamente pruebas offline y casos pequeños</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cookbook.md">Cookbook práctico</a></td><td>Para hacer Skills, MCP, Office, Zotero o LLM local</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
  <tbody>
    <tr><th scope="rowgroup" rowspan="4">Consultar</th><td><a href="resources/README.md">Armario de recursos</a></td><td>Si no sabe si consultar Guía, Catálogo o Cookbook</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><a href="RESOURCES.md">Lista completa de recursos</a></td><td>Para encontrar docs oficiales, cursos, comunidades y lecturas ampliadas</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/cli-agents-guide.md">Guía de elección de CLI Agent</a></td><td>Para preparar Track A o comparar herramientas CLI</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><a href="resources/courses.md">Mapa de cursos y certificaciones</a></td><td>Para distinguir certificados de finalización, insignias de habilidad y exámenes de certificación</td><td>⭐⭐⭐⭐</td></tr>
  </tbody>
</table>

## 🤝 Mejoremos este mapa juntos

- Errores de contenido, enlaces rotos o información obsoleta: abra un [Issue](https://github.com/WenyuChiou/awesome-agentic-ai-zh/issues).
- Para añadir un proyecto o recurso de aprendizaje: indique «qué Stage y qué enseña».
- Para preparar una PR: lea primero [CONTRIBUTING.md](CONTRIBUTING.md) y la [guía de estilo](resources/style-guide.md).
- Últimas actualizaciones: vea [CHANGELOG.md](CHANGELOG.md).

<details markdown="1">
<summary>🧰 Desplegar: modo de contribución completo y comprobación automática</summary>

Puede corregir texto, añadir un espejo trilingüe, reportar temas faltantes o mantener a largo plazo un Stage / ruta de rol. Al añadir un enlace de proyecto de GitHub, la comprobación automática ayuda a ver estado de archivo, licencia y última actualización; si se incluye sigue decidiéndolo el maintainer según el valor de aprendizaje.

El rol completo y las reglas están en [CONTRIBUTORS.md](CONTRIBUTORS.md).

</details>

## 🙏 Inspiraciones importantes y proyectos relacionados

- [**Datawhale Hello-Agents**](https://github.com/datawhalechina/hello-agents) — para lectores que necesitan capítulos completos y una implementación en profundidad.
- [**Comunidad Datawhale**](https://github.com/datawhalechina) — comunidad china de aprendizaje mutuo en machine learning, que ofrece muchas entradas de aprendizaje fiables.
- [**liyupi/ai-guide**](https://github.com/liyupi/ai-guide) — más bien una biblioteca de recursos amplia; este repo organiza el orden de aprendizaje.

<details markdown="1">
<summary>📖 Desplegar: colaboradores y formato de cita</summary>

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

## ☕ Apoyo y contacto

Este mapa de aprendizaje usa licencia MIT y seguirá siendo gratuito y público. Para dudas y sugerencias generales use Issues; para contacto privado escriba a [wenyuchiou12@gmail.com](mailto:wenyuchiou12@gmail.com).

Si este mapa le sirvió, dé una ⭐ Star, o [invite un café al autor](https://www.buymeacoffee.com/wenyuchiou).

## License

MIT. Maintained by [@WenyuChiou](https://github.com/WenyuChiou).
