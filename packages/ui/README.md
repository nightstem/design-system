# @nightstem/ui

React UI primitives for the Nightstem design system.

## Install

```sh
pnpm add @nightstem/ui @nightstem/tokens
pnpm add -D tailwindcss
```

## Peer requirements

- React 19+
- `@nightstem/tokens` — provides the CSS design tokens (colors, typography, spacing). Technically optional but required for visual correctness.
- Tailwind CSS v4 (transitive via `@nightstem/tokens`)

## Set up tokens

Import the tokens CSS once in your app's global stylesheet (before any component styles):

```css
@import '@nightstem/tokens/theme.css';
```

Optional Inter variable font:

```css
@import '@nightstem/tokens/fonts.css';
```

## Usage

### Button

```tsx
import { Button, BUTTON_VARIANT, BUTTON_COLORS } from '@nightstem/ui';

<Button>Click me</Button>
<Button variant="outlined" color="secondary">Secondary</Button>
<Button variant="ghost" color="primary" size="lg" disabled>Disabled</Button>
```

Props: `variant` (`solid` | `outlined` | `ghost` | `text`), `color` (`primary` | `secondary` | `neutral`), `size` (`sm` | `md` | `lg`), `shape` (`square` | `circle`). Extends all `<button>` HTML attributes.

### LinkButton

```tsx
import { LinkButton } from '@nightstem/ui';

// Plain anchor (default)
<LinkButton href="/about">About</LinkButton>

// External link
<LinkButton href="https://example.com" target="_blank" rel="noreferrer noopener">
  Open externally
</LinkButton>

// Using next/link
import Link from 'next/link';
<LinkButton href="/dashboard" linkComponent={Link}>Dashboard</LinkButton>

// Using react-router
import { Link } from 'react-router-dom';
<LinkButton href="/home" linkComponent={Link}>Home</LinkButton>
```

Props: same visual props as `Button`, plus `linkComponent?: ElementType` (defaults to `<a>`). Extends all anchor HTML attributes.

> **Migration note:** the upstream `isExternal` prop was removed. For external links, pass `target="_blank" rel="noreferrer noopener"` directly.

### Kbd

```tsx
import { Kbd } from '@nightstem/ui';

Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open the command palette.
```

Extends all `HTMLAttributes<HTMLElement>`.

## Utilities

```ts
import { cn, hashIndex, randomInt } from '@nightstem/ui';

cn('flex', isActive && 'bg-primary-500', 'p-4'); // clsx + tailwind-merge
hashIndex('/some/path', 5); // deterministic int 0-4
randomInt(10); // cryptographic random int 0-9
```

## Token note

The `neutral` button color uses Tailwind's default `neutral-*` palette — it is not yet a named Nightstem brand token. All other colors (`primary-*`, `secondary-*`) are defined in `@nightstem/tokens`.

## License

MIT
