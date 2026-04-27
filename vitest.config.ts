// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const COVERAGE_MIN = 80;

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    css: false,
    globals: true,
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    testTimeout: 10000,
    coverage: {
      reportsDirectory: './coverage',
      reporter: ['text', 'lcov', 'html'],
      provider: 'v8',
      include: ['packages/*/src/**/*.{ts,tsx}'],
      exclude: [
        'packages/*/src/**/*.{test,spec,stories}.{ts,tsx}',
        'packages/*/src/**/index.ts',
        'packages/*/src/**/types.ts',
        'packages/*/src/**/constants.ts',
        '**/*.d.ts',
        '**/node_modules/**',
        '**/dist/**',
      ],
      thresholds: {
        statements: COVERAGE_MIN,
        branches: COVERAGE_MIN,
        functions: COVERAGE_MIN,
        lines: COVERAGE_MIN,
        perFile: true,
      },
    },
  },
});
