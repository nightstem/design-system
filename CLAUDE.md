# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install          # Install all dependencies
pnpm build            # Build all packages
pnpm typecheck        # Type-check all packages
pnpm test             # Run all tests (single pass)
pnpm test:watch       # Run tests in watch mode
pnpm coverage         # Run tests with coverage (80% threshold per file)
pnpm lint             # Lint all packages
pnpm format           # Format all files with Prettier
pnpm storybook        # Start the Storybook dev server
pnpm clean            # Remove build artifacts
```

To run tests for a single package:

```bash
pnpm --filter @nightstem/ui test
pnpm --filter @nightstem/utils test
```

Build only workspace dependencies before a package (needed before lint in CI):

```bash
pnpm --filter '@nightstem/ui^...' build
```

## Architecture

This is a **pnpm monorepo** (workspaces: `packages/*`, `apps/*`) with three published packages and one private Storybook app.

### Package dependency graph

```
@nightstem/tokens  ←── @nightstem/ui ──→ @nightstem/utils
```

- **`@nightstem/tokens`** — Source-only package (no build step). Exports `theme.css` (Tailwind 4 `@theme inline` with design tokens: colors, spacing, typography) and `fonts.css`. No JS. Consumers import the CSS files directly.
- **`@nightstem/utils`** — Framework-agnostic utilities. Built with Vite to ESM. Key export: `cn()` (`clsx` + `tailwind-merge`). Also exports `randomInt` and `hashIndex`.
- **`@nightstem/ui`** — React 19 component library. Built with Vite to ESM. Depends on both other packages. Peer deps: `react`, `react-dom`.
- **`apps/storybook`** — Private component explorer. Not published.

### Component conventions (`packages/ui`)

Each component lives in `src/components/ui/<ComponentName>/` with this structure:

- `ComponentName.tsx` — implementation
- `ComponentName.test.tsx` — tests
- `ComponentName.stories.tsx` — Storybook stories
- `index.ts` — re-export
- `types.ts` — TypeScript types derived from `as const` objects
- `constants.ts` — `as const` objects for all enum-like values
- `themes.ts` — Tailwind class maps keyed by the constant values

Types are derived from constants (e.g., `type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE]`), not defined as standalone string unions.

Styling uses `cn()` from `@nightstem/utils` (re-exported alias for `clsx` + `tailwind-merge`). Class strings live in `themes.ts` files, not inline in components.

The `@` alias maps to `src/` within each package (configured in both `vite.config.ts` and `tsconfig.json`).

### Testing

Tests use Vitest + React Testing Library. The root `vitest.config.ts` covers all packages. Setup file (`vitest.setup.ts`) extends `expect` with `@testing-library/jest-dom` and `vitest-axe` matchers.

Two test patterns in use:

Tests use Vitest + React Testing Library. The root `vitest.config.ts` covers all packages. Setup file (`vitest.setup.ts`) extends `expect` with `@testing-library/jest-dom` and `vitest-axe` matchers.

Two test patterns in use:

1. **Snapshot tests** — exhaustive matrix of all prop combinations (see `Button.test.tsx`)
2. **Accessibility tests** — `axe()` from `vitest-axe` to assert `toHaveNoViolations()` (see `Kbd.test.tsx`)

Coverage is enforced at **80% per file** across statements, branches, functions, and lines. `index.ts`, `types.ts`, `constants.ts`, and story files are excluded from coverage.

### Build

Both `@nightstem/ui` and `@nightstem/utils` build to a single ESM `dist/index.js` + `dist/index.d.ts` via Vite + `vite-plugin-dts` (with `rollupTypes: true`). Stories and test files are excluded from the type declarations.

### Releases

Releases are triggered manually via the `release.yml` GitHub Actions workflow (`workflow_dispatch`). Runs lint, typecheck, and tests before publishing. Releases can only run from `main`.
