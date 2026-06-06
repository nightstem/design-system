---
name: quiet-quality-commands
description: Output filters for project quality commands. Use when about to run pnpm test, pnpm --filter <pkg> test, pnpm lint, pnpm format:check, or pnpm typecheck.
user-invocable: false
---

When running project quality commands, pipe them through the matching filter to reduce noisy output.

Important:

- Preserve the original command exit code.
- Success is detected via `${pipestatus[1]}` (the pnpm command's exit code). This is **zsh-only** — in bash use `${PIPESTATUS[1]}`.
- If the filter finds no matching output on failure, rerun the command without the filter or with a broader filter.

## Tests

All packages:

```bash
pnpm test 2>&1 | grep -E "FAIL|✕|×|●|⎯|[A-Z][a-z]+Error|Error:|Warning:|Expected:|Received:|[Oo]bsolete|[Ss]napshots?:.*(written|obsolete|failed)|Cannot find module|Test Files.*failed|Tests.*failed|[Tt]imed out|thrown:|No test files found|accessibility violations"; [[ ${pipestatus[1]} -eq 0 ]] && echo "All tests passed"
```

Single package — UI:

```bash
pnpm --filter @nightstem/ui test 2>&1 | grep -E "FAIL|✕|×|●|⎯|[A-Z][a-z]+Error|Error:|Warning:|Expected:|Received:|[Oo]bsolete|[Ss]napshots?:.*(written|obsolete|failed)|Cannot find module|Test Files.*failed|Tests.*failed|[Tt]imed out|thrown:|No test files found|accessibility violations"; [[ ${pipestatus[1]} -eq 0 ]] && echo "All @nightstem/ui tests passed"
```

Single package — utils:

```bash
pnpm --filter @nightstem/utils test 2>&1 | grep -E "FAIL|✕|×|●|⎯|[A-Z][a-z]+Error|Error:|Warning:|Expected:|Received:|[Oo]bsolete|[Ss]napshots?:.*(written|obsolete|failed)|Cannot find module|Test Files.*failed|Tests.*failed|[Tt]imed out|thrown:|No test files found|accessibility violations"; [[ ${pipestatus[1]} -eq 0 ]] && echo "All @nightstem/utils tests passed"
```

Single file:

```bash
pnpm test <path-to-test-file> 2>&1 | grep -E "FAIL|✕|×|●|⎯|[A-Z][a-z]+Error|Error:|Warning:|Expected:|Received:|[Oo]bsolete|[Ss]napshots?:.*(written|obsolete|failed)|Cannot find module|Test Files.*failed|Tests.*failed|[Tt]imed out|thrown:|No test files found|accessibility violations"; [[ ${pipestatus[1]} -eq 0 ]] && echo "Tests passed"
```

## Prettier

```bash
pnpm format:check 2>&1 | grep -E "\[warn\]|[Ee]rror|Code style issues found"; [[ ${pipestatus[1]} -eq 0 ]] && echo "Formatting OK"
```

## Lint

```bash
output=$(pnpm lint 2>&1); ec=$?; [[ $ec -eq 0 ]] && echo "Lint clean" || { echo "$output" | grep -E -B 1 "^\s+[0-9]+:[0-9]+\s+(error|warning)" | grep -v "^--$"; echo "$output" | grep "✖"; }
```

## TypeScript

```bash
pnpm typecheck 2>&1 | grep -E "error TS|Found [0-9]+ error|ELIFECYCLE|failed"; [[ ${pipestatus[1]} -eq 0 ]] && echo "Types OK"
```
