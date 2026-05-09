# @nightstem/utils

Framework-agnostic utilities for the Nightstem design system.

## Installation

```sh
npm install @nightstem/utils
```

## API

### `cn(...inputs)`

Merges Tailwind CSS class names, resolving conflicts via `tailwind-merge` and handling conditional classes via `clsx`.

```ts
import { cn } from '@nightstem/utils';

cn('px-4 py-2', condition && 'bg-blue-500', 'px-2');
// → 'py-2 bg-blue-500 px-2'  (px-4 overridden by px-2)
```

### `hashIndex(seed, max)`

Deterministically maps a string to an integer in `[0, max)`. Same seed and max always return the same index — useful for stable color or avatar assignments.

```ts
import { hashIndex } from '@nightstem/utils';

hashIndex('alice', 5); // → e.g. 3 (stable across calls)
```

| Parameter | Type     | Description                                                 |
| --------- | -------- | ----------------------------------------------------------- |
| `seed`    | `string` | Input string to hash                                        |
| `max`     | `number` | Upper bound (exclusive). Must be > 1, otherwise returns `0` |

### `randomInt(max)`

Returns a cryptographically random integer in `[0, max)` using `crypto.getRandomValues`.

```ts
import { randomInt } from '@nightstem/utils';

randomInt(10); // → e.g. 7
```

| Parameter | Type     | Description                                                 |
| --------- | -------- | ----------------------------------------------------------- |
| `max`     | `number` | Upper bound (exclusive). Must be > 1, otherwise returns `0` |
