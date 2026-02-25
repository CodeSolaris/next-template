# Next.js DevTools MCP Usage Rules

`next-devtools-mcp` is a Model Context Protocol server that provides runtime diagnostics,
documentation search, and development automation for Next.js projects.

## Auto-Initialize

**When starting work on this Next.js project, ALWAYS call the `init` tool from
`next-devtools-mcp` FIRST to set up proper context and establish documentation
requirements. Do this automatically without being asked.**

## Available Tools

### Runtime Diagnostics (requires running `bun dev`)
Use `nextjs_index` to discover running dev servers, then `nextjs_call` to execute tools:

| Tool name              | When to use                                         |
|------------------------|-----------------------------------------------------|
| `get_errors`           | Debugging build/runtime/type errors                 |
| `get_logs`             | Investigating unexpected behavior (dev logs)        |
| `get_page_metadata`    | Inspecting routes, pages, component structure       |
| `get_project_metadata` | Checking project config, dev server URL             |
| `get_server_action_by_id` | Finding a Server Action source by its ID        |

**Workflow:**
```
1. nextjs_index          → discover servers (port, PID, available tools)
2. nextjs_call(port, toolName) → execute specific diagnostic tool
```

### Documentation Search
Use `nextjs_docs` for ANY Next.js-specific question before answering from memory:

```
// Search for docs
action: "search", query: "generateMetadata", routerType: "app"

// Fetch full doc page
action: "get", path: "/docs/app/api-reference/functions/generate-metadata"
```

### Development Automation
| Tool                     | When to use                                          |
|--------------------------|------------------------------------------------------|
| `upgrade_nextjs_16`      | Upgrading project to Next.js 16 (runs official codemods) |
| `enable_cache_components`| Migrating to Cache Components mode in Next.js 16    |
| `browser_eval`           | Visual verification, testing interactions, screenshots |

## Telemetry

`next-devtools-mcp` collects anonymous telemetry (tool names, OS, Node version).
To disable, set in environment:
```
NEXT_TELEMETRY_DISABLED=1
```

## Priority Rules

1. **Always call `init` first** at the start of a Next.js session
2. **Use `nextjs_docs`** before answering Next.js API questions (overrides Context7 for Next.js specifically)
3. **Use `nextjs_index` + `nextjs_call`** instead of `browser_eval` console messages when dev server is running
4. **Use `browser_eval`** only as fallback when dev server is not running or not Next.js 16+
