import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { importX } from 'eslint-plugin-import-x';
import security from 'eslint-plugin-security';
import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-config-prettier';

// React/hooks/perf plugins are intentionally excluded until packages/ui migration.
// eslint-plugin-react@7.37.5 has a runtime incompatibility with ESLint 10
// (getFilename API removed). Re-enable when ui components are added.

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/*.d.ts',
      'pnpm-lock.yaml',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  security.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'security/detect-object-injection': 'off',
      // TypeScript handles import resolution; disabling avoids false positives
      // with workspace packages and TypeScript 6 resolver incompatibilities
      'import-x/no-unresolved': 'off',
      'import-x/namespace': 'off',
      'import-x/default': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-duplicates': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    plugins: { vitest },
    languageOptions: {
      globals: { ...vitest.environments.env.globals },
    },
    rules: {
      ...vitest.configs.all.rules,
      'vitest/no-hooks': 'off',
      'vitest/prefer-lowercase-title': 'off',
      'vitest/prefer-expect-assertions': 'off',
      'vitest/max-expects': ['error', { max: 10 }],
    },
  },
  prettier,
]);
