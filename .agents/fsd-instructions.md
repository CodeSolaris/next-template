---
description: FSD 2.1 Next.js App Router Architecture Instructions
---

# FSD 2.1 Architecture Guidelines for Next.js App Router

When developing features, decomposing layout, or generating code for the project, STRICTLY adhere to the Feature-Sliced Design (FSD) 2.1 methodology adapted for Next.js 16.

## 1. Domain Discovery Step
Before writing code, analyze the requirements:
- **Identify Entities (Nouns):** Determine the core business objects (e.g., `Product`, `Order`, `User`).
- **Identify Features (Verbs):** Determine user actions that bring business value (e.g., `AddToCart`, `ChangePassword`, `FilterProducts`).
- **Identify Pages:** Map the Next.js URL routing structure to FSD slices in the `pages` layer.

## 2. Composition Strategy
- **Widgets vs. Local Components:**
  - Follow the **"Insignificant Slice" rule**: If a complex block is used only on one specific page, keep it local in `src/pages/[slice]/ui/`.
  - Move blocks to `src/widgets/` ONLY if they are reused across multiple pages or provide a high-level layout composition (e.g., `Header`, `Footer`).
- **Server/Client Boundary:**
  - By default, all logic should be server-side (React Server Components).
  - Explicitly identify interactive nodes (forms, buttons) intended for the `features` layer and mark those specific components with `'use client'`.

## 3. Technical Mapping for Next.js 16
- **App Router Proxying:** The `/app` directory is ONLY for routing. Place only `page.tsx`, `layout.tsx`, and `route.ts` in the root `/app` directory. These files MUST be "thin" proxies that re-export components directly from the `src/pages` layer.
  - Example: `export { HomePage as default } from "@/pages/home";`
- **Server Actions:** Do not leave server actions in the UI components. Colocate them in the `model/` or `api/` segment of the corresponding `features` or `entities` slice.
- **API Route Handlers:** The business logic for Route Handlers must stay in `src/features/*/api` or `src/entities/*/api`. The Next.js API entry point in `/app/api/` should merely import and call this logic.

## 4. Implementation Checklist
When generating code, always check:
- [ ] **Public API:** Ensure every created slice has a `index.ts` file exposing its public interface.
- [ ] **Encapsulation:** Never import deeply into a slice. Always import from the slice's `index.ts`.
- [ ] **Naming Conventions:** 
  - File and folder names: `kebab-case` (e.g., `login-form.tsx`).
  - React components and Types/Interfaces: `PascalCase`.
  - Variables, functions, and hooks: `camelCase`.
- [ ] **Import Rules:** 
  - NEVER import "upward" (e.g., `entities` cannot import from `features`).
  - NO cross-slice imports within the same layer (e.g., `entities/user` cannot directly import from `entities/product`).
