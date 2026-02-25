# GitHub Branching Strategy & Workflow

## Branch Structure

```
main        ← Production releases (v1.0.0, v1.1.0, v2.0.0)
  └── dev   ← Staging / Beta releases (v1.1.0-beta.1)
        └── feat/*, fix/*, chore/* ← Feature branches
```

## Merge Strategies (CRITICAL)

| From         | Into    | Strategy              | Why                                                       |
|--------------|---------|-----------------------|-----------------------------------------------------------|
| `feat/*`     | `dev`   | **Squash and Merge**  | One clean commit per feature — no duplicate CHANGELOG entries |
| `dev`        | `main`  | **Create Merge Commit** | Preserves full feature history for semantic-release     |

> ⚠️ Never use Rebase — it floods `main` with individual commits from feature branches.
> ⚠️ Never Squash `dev → main` — semantic-release loses track of commit boundaries.

## GitHub Repository Settings

Go to **Settings → General → Pull Requests** and configure:
- ✅ Allow **merge commits** (for `dev → main`)
- ✅ Allow **squash merging** (for `feat/* → dev`)
  - Set default message: **Pull request title**
- ❌ Disable **Allow rebase merging**

## Development Workflow (Step by Step)

### 1. Start a new feature
Always branch from `dev`, never from `main`:
```bash
git checkout dev
git pull
git checkout -b feat/my-feature
```

### 2. Commit on feature branch
Commit messages inside a feature branch can be informal (they get squashed):
```
wip: draft layout
fix typo in form
add missing type
```
The **only** commit message that matters is the **PR title** (it becomes the squash commit).

### 3. Open PR: feat/* → dev
- **PR Title must follow Conventional Commits** (validated by `pr-semantic.yml`):
  - `feat: add user authentication`
  - `fix: correct form validation`
  - `chore: update dependencies`
- Merge strategy: **Squash and Merge**
- Result: one clean `feat: add user authentication` commit in `dev`

### 4. Automatic Beta Release
After merging into `dev`, GitHub Actions automatically:
1. Runs CI (lint, types, unit tests)
2. Runs CD (E2E tests, DB migration)
3. `semantic-release` creates a beta tag: `v1.1.0-beta.1`

### 5. Release to Production: dev → main
When `dev` accumulates enough features for a release:
- Open PR: `dev → main`
- **PR Title**: `chore: release vX.X.X` (informational, not picked up by semantic-release)
- Merge strategy: **Create Merge Commit**
- Result: `semantic-release` reads all squashed `feat:`/`fix:` commits to determine version bump and generates `CHANGELOG.md`

### 6. Automatic Production Release
After merging `dev → main`, GitHub Actions automatically:
1. CI → CD pipeline runs
2. `semantic-release` calculates new version (e.g., `v1.1.0`)
3. `CHANGELOG.md` is updated and committed
4. GitHub Release created with release notes

## Version Bump Rules (Conventional Commits)

| Commit prefix | Version bump | Example                     |
|---------------|-------------|-----------------------------|
| `fix:`        | Patch        | `1.0.0` → `1.0.1`          |
| `feat:`       | Minor        | `1.0.0` → `1.1.0`          |
| `feat!:` / `BREAKING CHANGE:` | Major | `1.0.0` → `2.0.0` |
| `chore:`, `docs:`, `style:` | None | No release triggered |

## Quick Reference

```bash
# Start feature
git checkout dev && git pull
git checkout -b feat/my-feature

# Push feature branch
git push -u origin feat/my-feature

# After squash merge into dev — sync locally
git checkout dev && git pull

# Release: open PR dev → main via GitHub UI or MCP
```
