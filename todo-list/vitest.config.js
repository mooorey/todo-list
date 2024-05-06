// vitest.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugin: [react()],
  test: {
    globals: true, // allows us to use vitest library methods in unit test without explicit imports
    environment: "jsdom",
    setupFiles: "./setupTests.js"
  },
});