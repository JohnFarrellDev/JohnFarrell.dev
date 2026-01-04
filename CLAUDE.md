# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Next.js dev server (port 3000)
npm run build        # Build production app (auto-runs sitemap generation)
npm run lint         # Run ESLint
npm test             # Run Vitest tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage reports
npm run storybook    # Start Storybook dev server
npm run format       # Run Prettier on all files
```

## Architecture

**Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS

**Path alias**: `@/` maps to `./src/`

### Directory Structure

- `src/app/` - Next.js App Router pages
  - `(home)/` - Landing page group (Hero, Skills, Experience sections)
  - `(default)/` - Standard layout wrapper with Navbar/Footer for other pages
- `src/Components/` - React components (PascalCase naming)
  - `ui/` - Reusable UI primitives (Button, Modal, etc.)
  - `Projects/Minesweeper/` - Complex game with useReducer state management
- `src/Utilities/` - Helper functions (snake_case naming)
- `src/factories/` - Test data factories using fishery

### Patterns

- Client components marked with `'use client'` directive
- Storybook stories collocated with components (`*.stories.tsx`)
- Test files collocated with source (`*.test.ts`)
- Test factories in `src/factories/` for complex state (e.g., Minesweeper)
- `cn()` utility from `src/lib/utils.ts` for Tailwind class merging
- `produceMetaData()` utility for generating page SEO metadata

### Styling

- Tailwind CSS with custom CSS variables (`--clr-primary-*`, `--clr-link`)
- Dark mode via `class` strategy

## Node Version

Requires Node.js 24.x (specified in package.json engines)
