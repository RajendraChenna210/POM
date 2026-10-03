import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,
  workers: 1,

  timeout: 60000,

  use: {
    video: 'on',
    screenshot:'only-on-failure',
    headless: false,
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  reporter: [
    ['html'],
    ['allure-playwright']
  ],
});