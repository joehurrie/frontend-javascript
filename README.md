# 🧠 TypeScript Interface Playground – ALX Frontend JavaScript

This project explores foundational TypeScript concepts through a task-based approach using Webpack, strict type definitions, and DOM manipulation. It was built as part of the ALX Frontend curriculum.

---

## 📚 What This Project Demonstrates

- ✅ TypeScript interfaces and class structures
- ✅ DOM manipulation using vanilla TypeScript
- ✅ Dynamic HTML generation via Webpack + HtmlWebpackPlugin
- ✅ Clean build pipeline with linting and bundling
- ✅ Attempt to incorporate **Docker** for environment isolation and reproducibility
  - Although Docker was not fully integrated across all tasks, initial efforts laid the groundwork for a containerized development flow

---

## 🧪 What Was Illustrated

| Task | Concepts Illustrated |
|------|----------------------|
| `task_0` | Student interface, DOM table generation |
| `task_1` | Teacher interface, readonly & optional props |
| `task_2` | Interface extension (`Director`), function typing |
| `task_3` | Ambient namespaces and type declarations |
| `task_4` | Namespace merging and class composition |
| `task_5` | Brand convention and nominal typing |

---

## ⚙️ TypeScript → JavaScript Compilation Explained

TypeScript code (`main.ts`) is compiled into JavaScript (`bundle.js`) via the following steps:

1. `ts-loader` compiles `.ts` files using `tsconfig.json` rules
2. Webpack bundles the JS and injects it into an HTML template
3. `HtmlWebpackPlugin` auto-generates `index.html` inside `dist/`
4. Output is clean, dynamic, and browser-ready

> This structure mirrors real-world modular build pipelines, offering clarity and maintainability.

---

## 🖥️ How to Run This Project

### ✅ Step-by-step:

1. **Navigate** to any task folder, e.g. `task_0`
2. **Install dependencies**  
   ```bash
   npm install
   npm run build
   npx serve dist
-🧠 Collaboration Acknowledgement
Joharie + Copilot is a dangerous combination.

This repository was built through the iterative collaboration between Joharie (UX Engineer) and Microsoft Copilot (AI companion). Together, we debugged, built, and architected this TypeScript journey with precision, empathy, and just the right amount of nerdy swagger.

//copy config files:New-Item -ItemType Directory -Path .\task_1
Copy-Item .\task_0\package.json, .\task_0\tsconfig.json, .\task_0\webpack.config.js, .\task_0\.gitignore, .\task_0\template.html -Destination .\task_1
