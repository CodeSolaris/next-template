# next-template

Production-ready Next.js starter with a full CI/CD pipeline, automated releases, and a comprehensive testing setup.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 |
| Unit / Component tests | Vitest + Testing Library |
| Component explorer | Storybook 10 (Vite) |
| E2E tests | Playwright |
| Linting | ESLint (`@antfu/eslint-config`) |
| Git hooks | Lefthook |
| Commit convention | Commitizen + Commitlint (AI-assisted) |
| Release automation | Semantic Release |
| Package manager | Bun |

---

## Architecture

This project strictly follows the **Feature-Sliced Design (FSD) 2.1** methodology.
For detailed architectural principles, import rules, and Next.js specific patterns used in this template, please refer to the [FSD Architecture Guide](./docs/fsd-architecture.md).

---

## Quick Start

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | Description |
|---|---|
| `bun dev` | Start the dev server |
| `bun build` | Build for production |
| `bun start` | Run the production build |
| `bun run lint` | Lint (zero warnings allowed) |
| `bun run lint:fix` | Lint with auto-fix |
| `bun run check:types` | TypeScript type check |
| `bun run check` | Full check: types + lint + unit + storybook tests |
| `bun run test` | Vitest in watch mode |
| `bun run test:run` | Vitest single run |
| `bun run test:coverage` | Vitest with coverage report |
| `bun run storybook` | Storybook dev server on `:6006` |
| `bun run storybook:test` | Run Storybook component tests via Vitest |
| `bun run storybook:build` | Build Storybook static output |
| `bun run test:e2e` | Run Playwright E2E tests |
| `bun run test:e2e:ui` | Playwright interactive UI mode |
| `bun run commit` | Interactive commit via Commitizen (AI) |
| `bun run release:local` | Dry-run Semantic Release locally |

---

## CI / CD Overview

All pipelines are defined in `.github/workflows/`.

| Workflow | Trigger | Purpose |
|---|---|---|
| `ci.yml` | Every push / PR | Orchestrates all checks |
| `check-lint-types.yml` | via CI | ESLint + TypeScript |
| `test-unit.yml` | via CI | Vitest unit tests |
| `test-storybook.yml` | via CI | Storybook component tests |
| `playwright.yml` | via CI | Playwright E2E tests |
| `pr-semantic.yml` | PR to `main` / `production` | Validates PR title (Conventional Commits) |
| `cd.yml` | Push to `main` / `production` | Semantic Release + CHANGELOG |
| `db-migrate.yml` | After CD | Drizzle migrations on Neon |

Releases are triggered automatically based on commit messages:

- `feat:` → minor release (`1.0.0` → `1.1.0`)
- `fix:` → patch release (`1.0.0` → `1.0.1`)
- `feat!:` / `BREAKING CHANGE:` → major release (`1.0.0` → `2.0.0`)

---

## GitHub App Setup

A GitHub App is used to bypass branch protection rules during automated releases.

1. Go to **Developer Settings → GitHub Apps** and create (or reuse) an app.
2. Grant the following permissions:
   - **Contents**: Read & Write
   - **Pull requests**: Read & Write
3. Generate a private key (`.pem` file) and store it securely.
4. Install the app on this repository via **Settings → Install App**.

---

## Repository Secrets

Configure in **Settings → Secrets and variables → Actions**:

| Secret | Description |
|---|---|
| `BOT_APP_ID` | GitHub App ID |
| `BOT_APP_PRIVATE_KEY` | Full content of the `.pem` private key |
| `DATABASE_URL_PREVIEW` | Neon staging/preview connection string |
| `DATABASE_URL_PROD` | Neon production connection string |

---

## Vercel Deployment

1. Connect the repository to Vercel.
2. Set the following build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `bun run build`
   - **Install Command**: `bun install`
3. Configure branch mapping:
   - `production` → Production Environment
   - `main` → Preview / Staging Environment
4. Add all environment variables from the table below in the Vercel dashboard.

---

## Neon Database

This project uses [Neon](https://neon.tech) serverless Postgres with branch-based environments.

| Neon Branch | GitHub Branch | Secret |
|---|---|---|
| `production` | `production` | `DATABASE_URL_PROD` |
| `preview` | `main` | `DATABASE_URL_PREVIEW` |

Drizzle migrations are applied automatically by `db-migrate.yml` after each successful release.

---

## Environment Variables Reference

| Variable | Environment | Source |
|---|---|---|
| `DATABASE_URL` | Production / Preview | Neon connection string |
| `BOT_APP_ID` | CI/CD only | GitHub App ID |
| `BOT_APP_PRIVATE_KEY` | CI/CD only | GitHub App `.pem` key |
