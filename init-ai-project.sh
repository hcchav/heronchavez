#!/usr/bin/env bash
set -euo pipefail

mkdir -p .ai/tasks

write_if_missing() {
  local file="$1"
  local content="$2"
  if [ -e "$file" ]; then
    echo "skip: $file already exists"
  else
    printf "%s" "$content" > "$file"
    echo "created: $file"
  fi
}

write_if_missing "AGENTS.md" "# Project Agent Instructions

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
"

write_if_missing "CLAUDE.md" "# Claude Project Memory

Use the repo as the source of truth. Read first:
- .ai/project.md
- .ai/architecture.md
- .ai/conventions.md
- .ai/commands.md
- .ai/tasks/current.md (if present)

Working style:
- Prefer minimal diffs over large refactors.
- Validate changes with the smallest useful test or reproduction step.
- Ask before making architecture, schema, or API changes.
- Promote durable discoveries into .ai/ or docs/ instead of leaving them in chat.
"

write_if_missing ".ai/project.md" "# Project Overview

## Goal
[Describe what this project is supposed to accomplish.]

## Users
[Describe who uses it and what they need.]

## Core Features
- [Feature 1]
- [Feature 2]
- [Feature 3]

## Constraints
- [Example: No breaking API changes]
- [Example: No database schema changes without approval]
- [Add business or technical constraints here]

## Definition of Done
- The change solves the requested problem.
- The affected behavior is validated.
- The change is limited to the requested scope.
- Any lasting project knowledge is added to docs or .ai files.
"

write_if_missing ".ai/architecture.md" "# Architecture

## Stack
- Frontend: [e.g. Next.js]
- Backend: [e.g. API routes / Express / FastAPI]
- Database: [e.g. Postgres / Supabase]
- Hosting: [e.g. Vercel / AWS]

## Key Directories
- [path] -> [purpose]
- [path] -> [purpose]
- [path] -> [purpose]

## Data Flow
1. [User action]
2. [Frontend/API behavior]
3. [Database/service behavior]
4. [Response/result]

## Important Patterns
- [Example: Business logic belongs in /lib/services]
- [Example: Keep components presentational when possible]
- [Example: Reuse shared utilities before creating new helpers]

## Risk Areas
- [Files or flows where changes are easy to break]
- [Auth, billing, scheduling, webhooks, migrations, etc.]
"

write_if_missing ".ai/conventions.md" "# Conventions

## Coding Rules
- Prefer small, focused diffs.
- Follow existing naming and folder patterns.
- Keep logic close to where the codebase already expects it.
- Avoid unnecessary abstractions.
- Add or update tests for bug fixes when practical.

## Safety Rules
- Do not edit unrelated files.
- Do not change public interfaces without approval.
- Do not introduce dependencies unless the value is clear.

## Communication Rules for AI
Before implementation:
- Summarize the task.
- Identify the files to inspect.
- Call out ambiguity before guessing.

After implementation:
- Summarize what changed.
- Explain validation.
- Note assumptions, edge cases, and risks.
"

write_if_missing ".ai/commands.md" "# Commands

## Setup
[Example: npm install]

## Run
[Example: npm run dev]

## Test
[Example: npm test]

## Lint
[Example: npm run lint]

## Build
[Example: npm run build]

## Notes
- [Add environment setup notes here]
- [Add local dev quirks here]
"

write_if_missing ".ai/tasks/current.md" "# Current Task

## Goal
[Describe the current task or bug to fix.]

## Scope
- [File or area 1]
- [File or area 2]

## Constraints
- [Example: No schema changes]
- [Example: Preserve API response shape]

## Validation
- [How should this be tested or verified?]
"

echo
cat <<'MSG'
Next step: run one of these prompts in Claude Code or Codex.

Bootstrap prompt:
Read AGENTS.md, CLAUDE.md, and all files under .ai/ first.
Then ask me these setup questions one at a time:
1. What is the goal of this project?
2. Who is the user/customer?
3. What tech stack are you using?
4. What are the core features?
5. What constraints matter?
6. How do I run, test, lint, and build it?
7. Any coding preferences or architecture rules?
After I answer, update all project files so they are specific to this repo.
MSG
