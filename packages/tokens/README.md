# @nightstem/tokens

Design tokens for the Nightstem design system — colors, typography, spacing, and layout utilities built on Tailwind CSS v4.

## Requirements

- Tailwind CSS v4 (`tailwindcss ^4.2.0`)
- A Tailwind v4 build plugin in your project (`@tailwindcss/postcss` or `@tailwindcss/vite`)

## Install

```sh
pnpm add @nightstem/tokens
pnpm add -D tailwindcss
```

## Usage

Import `theme.css` once — it bundles the Tailwind base and all Nightstem tokens:

```css
@import '@nightstem/tokens/theme.css';
```

### Optional: Inter variable font

```css
@import '@nightstem/tokens/fonts.css';
```

The fonts entry pulls `@fontsource-variable/inter` (opsz + italic axis). Skip it if you manage fonts separately.

## What's included

| Token group | Examples                                                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Colors      | `--color-primary-{100..900}`, `--color-secondary-{100..900}`, `--color-dark`, `--color-light`                                                       |
| Typography  | `--text-{xs,base,lg,xl,2xl,3xl,4xl,5xl}` + per-size `line-height`, `letter-spacing`, `font-weight`                                                  |
| Measures    | `--measure-{body,heading,tight,loose}`                                                                                                              |
| Spacing     | `--spacing-8xl`                                                                                                                                     |
| Utilities   | `text-hint`, `text-caption`, `text-body`, `heading-{sm,md,lg,xl,xxl,display}`, `screen-container`, `screen-section`, `measure-*`, `max-square-size` |

## Notes

- `--font-geist-sans` / `--font-geist-mono` CSS vars are produced by Next.js `next/font`. When they aren't set, the font stack falls back to Inter / system fonts.
- `--navbar-height` defaults to `48px` inside the `screen-section` utility. Override it in your app's CSS if needed.
