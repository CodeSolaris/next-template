---
name: project-context-manager
description: Skill for managing project memory and maintaining persistent context in memory.md.
---

# Project Context Manager

This skill is designed to help the agent maintain a consistent project state across long interaction sessions by periodically updating and reading the `.agents/memory.md` file.

## Goal

To mitigate context drift and "cognitive decay" by ensuring critical project decisions and states are recorded in an external persistent file.

## Instructions

1. **Initial Load:** At the start of a new task or after a context reset, read `.agents/memory.md` to restore project context.
2. **Periodic Updates:** After completing significant milestones or making architectural decisions, update the "Recent Decisions" section in `.agents/memory.md`.
3. **State Maintenance:** Keep the "Current Project State" section up-to-date with any changes in stack or architecture.

## Constraints

- Do not store temporary or trivial information in `memory.md`.
- Keep descriptions in `memory.md` concise and high-level.
- Always use English for `memory.md` to ensure maximum compatibility with agent discovery.
