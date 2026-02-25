# Context7 MCP Usage Rules

Context7 MCP provides up-to-date documentation for any library directly from official sources.

## When to Use Context7

Use Context7 to fetch library documentation when:
- Working with a library released or **significantly updated after 2024**
- The exact API syntax is uncertain (version-specific config, new methods, breaking changes)
- The user explicitly provides a library ID (e.g., `/vercel/next.js`) or says "check the docs"
- Debugging an error that might be caused by an API change between versions

## When NOT to Use Context7

Do **not** use Context7 for:
- Well-known stable APIs (React hooks, basic TypeScript, CSS, Node.js built-ins)
- Questions resolvable from training data with high confidence
- Every single code question — this wastes the monthly request quota
- **Next.js documentation** — use `nextjs_docs` from `next-devtools-mcp` instead (it uses the official Next.js docs search API and is more accurate)

## Usage Patterns

### Auto-invoke (no explicit user request needed)
```
// When working with Drizzle ORM v0.30+, Next.js 15, or other recent libraries
// → Automatically call context7 before answering config/API questions
```

### User-specified library ID
```
// User: "How do I set up auth with Supabase? use /supabase/supabase"
// → Skip resolve-library-id step, go directly to query-docs
```

### Version-specific questions
```
// User: "How do I configure middleware in Next.js 15?"
// → Use context7 to match the exact version docs
```

## Available Tools

- **`resolve-library-id`** — Resolves a library name to a Context7-compatible ID (e.g., `next.js` → `/vercel/next.js`)
- **`query-docs`** — Fetches relevant documentation snippets for a given library ID and question

## Project-Specific Library IDs

| Library        | Context7 ID              |
|----------------|--------------------------|
| Next.js        | `/vercel/next.js`        |
| Drizzle ORM    | `/drizzle-team/drizzle-orm` |
| Playwright     | `/microsoft/playwright`  |
| Neon DB        | `/neondatabase/neon`     |
| Storybook      | `/storybookjs/storybook` |
| Vitest         | `/vitest-dev/vitest`     |
