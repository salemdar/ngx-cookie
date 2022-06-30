import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'projects/test-app/cypress/e2e/**/*.cy.ts',
    supportFile: 'projects/test-app/cypress/support/e2e.ts',
    screenshotOnRunFailure: false,
    video: false
  }
});
