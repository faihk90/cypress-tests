import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { configureAllureAdapterPlugins } from "@mmisty/cypress-allure-adapter/plugins";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    externalUrl: 'https://saucelabs.com',
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      configureAllureAdapterPlugins(on, config);

      return config;
    },
  },
});
