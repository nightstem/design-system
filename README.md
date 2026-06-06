# Nightstem Design System

Nightstem design system — monorepo of `@nightstem` packages.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [`@nightstem/tokens`](./packages/tokens) | Design tokens — Tailwind theme & fonts CSS | [![npm](https://img.shields.io/npm/v/@nightstem/tokens)](https://www.npmjs.com/package/@nightstem/tokens) |
| [`@nightstem/ui`](./packages/ui) | React UI components | [![npm](https://img.shields.io/npm/v/@nightstem/ui)](https://www.npmjs.com/package/@nightstem/ui) |
| [`@nightstem/utils`](./packages/utils) | Framework-agnostic utilities | [![npm](https://img.shields.io/npm/v/@nightstem/utils)](https://www.npmjs.com/package/@nightstem/utils) |

## Project structure

```
nightstem-design-system/
├── packages/
│   ├── tokens/     # @nightstem/tokens
│   ├── ui/         # @nightstem/ui
│   └── utils/      # @nightstem/utils
└── apps/
    └── storybook/  # Component explorer (private)
```

## Requirements

- **pnpm** `10.33.2+` — used as the package manager for this monorepo
- **Node.js** — see each package for individual requirements

## Getting started

```bash
# Install all dependencies
pnpm install

# Run Storybook
pnpm storybook
```

## Scripts

All scripts are run from the repo root and propagate to every package via pnpm workspaces.

| Script | Description |
|--------|-------------|
| `pnpm build` | Build all packages |
| `pnpm typecheck` | Type-check all packages |
| `pnpm test` | Run tests (all packages) |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm coverage` | Run tests with coverage report |
| `pnpm lint` | Lint all packages |
| `pnpm format` | Format all files with Prettier |
| `pnpm format:check` | Check formatting without writing |
| `pnpm storybook` | Start the Storybook dev server |
| `pnpm clean` | Remove build artifacts |

## Tech stack

- **React 19** — UI library
- **TypeScript** — type safety across the monorepo
- **Vite** — build tool for packages and Storybook
- **Vitest** — unit & component testing
- **Storybook 10** — component explorer
- **Tailwind CSS 4** — utility-first styling
- **ESLint + Prettier** — linting and formatting

## License

MIT
