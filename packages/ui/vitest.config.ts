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
    setupFiles: ['../../vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: ['text', 'lcov', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.{test,spec,stories}.{ts,tsx}',
        'src/**/index.ts',
        'src/**/types.ts',
        'src/**/constants.ts',
        '**/*.d.ts',
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
