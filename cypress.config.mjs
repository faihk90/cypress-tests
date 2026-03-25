import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { configureAllureAdapterPlugins } from "@mmisty/cypress-allure-adapter/plugins/index.js";
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

      on("task", {
        async aiName({ html, fallback }) {

          console.log("[aiName] USE_AI =", process.env.USE_AI);
          console.log("[aiName] API_KEY set =", !!process.env.OPENAI_API_KEY);

          if (process.env.USE_AI !== "true" || !process.env.OPENAI_API_KEY) {
            console.log("[aiName] skipping AI — returning fallback");
            return fallback;
          }

          const system =
            "Return ONLY a short data-test name like 'btn.open-menu', 'link.about', 'field.username'. Prefix with btn./link./field.";

          const resp = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              temperature: 0,
              messages: [
                { role: "system", content: system },
                { role: "user", content: html }
              ]
            })
          });

          const data = await resp.json();

          if (!resp.ok) {
            console.error(`[aiName] OpenAI error ${resp.status}:`, JSON.stringify(data));
            return fallback;
          }

          return data?.choices?.[0]?.message?.content?.trim() || fallback;
        }
      });
     
      configureAllureAdapterPlugins(on, config);

      return config;
    },
  },
});
