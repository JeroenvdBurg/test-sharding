import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: 'v8', // Ensure you're using the correct provider (e.g., 'v8' or 'c8')
      reporter: ['json', 'text', 'lcov'], // Add 'json' to generate a JSON report
      reportsDirectory: './coverage', // Specify the directory for coverage reports
       thresholds:
      process.env.CI_SKIP_COVERAGE_THRESHOLDS === 'true'
          ? undefined
          : {
              autoUpdate: false,
              branches: 80,
              functions: 80,
              lines: 80,
              statements: 80,
              // perFile: true,
            },
    },
  },
});
