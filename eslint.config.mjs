import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { importX, createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import security from 'eslint-plugin-security';
import vitest from '@vitest/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

// eslint-plugin-react@7.37.5 has a runtime incompatibility with ESLint 10
// (getFilename API removed). Re-enable when a compatible release is available.
// eslint-plugin-react-perf: similar issue, version predates ESLint 10 flat config.

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/storybook-static/**',
      '**/*.d.ts',
      'pnpm-lock.yaml',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  security.configs.recommended,
  importX.flatConfigs.recommended,
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: [
            'packages/*/tsconfig.json',
            'apps/*/tsconfig.json',
            'tsconfig.json',
          ],
          noWarnOnMultipleProjects: true,
        }),
        createNodeResolver(),
      ],
    },
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'security/detect-object-injection': 'off',
      'import-x/namespace': 'off',
      'import-x/default': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-duplicates': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs['recommended-latest'].rules,
    },
  },
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    plugins: { vitest },
    languageOptions: {
      globals: { ...vitest.environments.env.globals },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...vitest.configs.all.rules,
      'vitest/no-hooks': 'off',
      'vitest/prefer-lowercase-title': 'off',
      'vitest/prefer-expect-assertions': 'off',
      'vitest/max-expects': ['error', { max: 10 }],
      'vitest/valid-title': ['warn', { allowArguments: true }],
    },
  },
  prettier,
]);
