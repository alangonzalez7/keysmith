# KeySmith

Professional‑grade password generator and entropy toolkit. Secure by default (WebCrypto/Node crypto), API‑first, and test‑driven.

## Overview

KeySmith helps you create high‑entropy passwords and evaluate their strength with precise entropy metrics. It ships as a monorepo with a React web app, an Express API, and shared utility functions—focused on correctness, security, and a clean developer experience.

## Features

-   Cryptographically secure password generation (WebCrypto / Node `crypto`)
-   Entropy calculation utilities (pure functions, no DOM)
-   API‑first design (Express + Zod + Swagger)
-   Modern UI (React + Vite + Tailwind)
-   Testing setup (Vitest, Testing Library, Playwright)
-   Linting/formatting (ESLint + Prettier, Husky + lint‑staged)
-   CI/CD via GitHub Actions
-   Deploy targets: Vercel (web), Render or Fly.io (API)

## Monorepo Structure

```
keysmith/
├─ apps/
│  ├─ web/        # React + Vite + Tailwind
│  └─ api/        # Node.js + Express + Zod + Swagger
└─ packages/
   └─ utils/      # Pure functions (password generation, entropy)
```

## Security Principles

-   Use `crypto.getRandomValues` in the browser and `crypto.randomBytes` in Node.
-   Never use `Math.random` for security‑sensitive operations.
-   Keep secrets out of source control; commit only `.env.example`.

## Tech Stack

-   Frontend: React, Vite, Tailwind, Testing Library, Vitest, Playwright
-   Backend: Node.js, Express, Zod, Swagger, Vitest/Jest
-   Tooling: npm workspaces, ESLint, Prettier, Husky, lint‑staged
-   CI/CD: GitHub Actions
-   Deploy: Vercel (web), Render or Fly.io (API)

## Requirements

-   Node.js >= 20 (recommended LTS or newer)
-   npm (bundled with Node)
-   GitHub account (for repo, CI, and deployment integrations)

## Getting Started

This repo uses npm workspaces. After the workspace scaffold is in place:

```bash
# install dependencies at the root
npm install

# run web and api in parallel (scripts will be added in package.json)
npm run dev:web
npm run dev:api

# run tests
npm test
```

We’ll add root scripts (`dev:web`, `dev:api`, `lint`, `format`, `test`) as part of the initial setup.

## Roadmap (early)

-   [ ] Initialize npm workspaces and base tooling
-   [ ] Implement utils: secure generator + entropy functions
-   [ ] Scaffold API with Zod validation + Swagger docs
-   [ ] Scaffold web app with Tailwind and basic UI
-   [ ] Add end‑to‑end tests (Playwright)
-   [ ] Configure CI (lint + test + build)
-   [ ] Set up deployments (Vercel web, Render/Fly.io API)

## License

MIT © Contributors
