import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 45_000,
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  outputDir: "./test-results",
  use: {
    baseURL: "http://127.0.0.1:4173",
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      grep: /@chromium|@smoke/,
      use: { browserName: "chromium" },
    },
    {
      name: "firefox",
      grep: /@smoke/,
      use: { browserName: "firefox" },
    },
    {
      name: "webkit",
      grep: /@smoke/,
      use: { browserName: "webkit" },
    },
  ],
  webServer: {
    command: "node ./tests/e2e/harness/server.mjs --port 4173 --root /Users/brianray/Adam",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
  },
});
