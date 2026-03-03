# Project Memory

This file serves as a persistent context storage for the agent to mitigate context degradation in long conversation sessions.

## Current Project State

- **Project Name:** Next.js Template
- **Framework:** Next.js 16 (App Router)
- **Architecture:** Feature-Sliced Design (FSD) 2.1
- **Package Manager:** Bun
- **Main Stack:** TypeScript, Tailwind CSS, Neon Postgres, Drizzle ORM

## Recent Decisions

- Standardized `.agents/rules` directory structure.
- Implemented YAML frontmatter for automatic rule activation in both local and global (`GEMINI.md`) files.
- Converted core project rules to English for better agent discovery.

## Important Context

- Always synchronize global `~/.gemini/GEMINI.md` with project-specific rules.
- Follow "Explanation First" rule before any code modifications.
