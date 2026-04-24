# Project Agent Instructions

Read these files before making changes:
- .ai/project.md
- .ai/architecture.md
- .ai/conventions.md
- .ai/commands.md
- .ai/tasks/current.md (if present)

Priority order if instructions conflict:
1. .ai/tasks/current.md
2. .ai/conventions.md
3. .ai/architecture.md
4. .ai/project.md

Rules:
- Make the smallest safe change possible.
- Do not modify unrelated files.
- Reuse existing patterns before introducing new ones.
- Do not add dependencies unless necessary.
- Do not change APIs, schemas, or deployment behavior unless explicitly requested.
- Before coding, summarize the task and identify the files you will inspect.
- After coding, explain what changed, how it was validated, and any risks.
