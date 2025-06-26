import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.aircanada.com/home/ca/en/aco/flights",
    specPattern: "**/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
  },
});
