# Feedback Radar (Agent‑Driven TDD Demo)

Feedback Radar is a tiny React app built entirely by conversing with AI agents (TDD Coach, Refactoring Mentor, Bug Hunter, Codebase Navigator). The goal is to demonstrate how agents can scaffold, test, refactor, and improve UI while following professional practices.

## What the app does
- Add feature suggestions (feedback)
- Upvote feedback items
- Show total votes
- Support dark/light theme with a persistent toggle

## Tech stack
- React 18 + Vite
- TypeScript
- Vitest + Testing Library (JSDOM setup)

## Why agents
- TDD: tests first for pure functions and reducer logic
- Simple Design + APP: clear names, immutability, fewest elements
- Node/React best practices: feature‑based structure, centralized env, error boundary
- Rapid iterations for bugfixes and UI (theme, style, basic a11y)

## Project structure
```
src/
  app/App.tsx                 # app shell + theme toggle
  features/feedback/
    components/               # AddFeedbackForm, FeedbackList
    lib/                      # countVotes (+ tests)
    feedback.reducer.*        # state/actions (+ tests)
  lib/                        # env, ErrorBoundary, id
  tests/setup.ts              # jest-dom
styles.css                    # light/dark theme with CSS variables
vite.config.ts                # vitest config
```

## Commands
```bash
# start dev server
npm run dev

# run tests (one-off)
npm test

# production build
npm run build
```

## Environment variables
- `VITE_APP_NAME`: application title (default: "Feedback Radar")

## Technical notes
- `import.meta.env` is typed via `src/vite-env.d.ts` and `src/env.d.ts`
- Test config is typed by importing `defineConfig` from `vitest/config`
- Theme: `:root[data-theme="light"]` with a toggle that updates `document.documentElement.dataset.theme`

## What this demo showcases
- Orchestrating agents for scaffolding, testing, refactoring, typing fixes, and UI tweaks
- Keeping the TDD cycle and Simple Design rules in a real project

Enjoy! 🚀