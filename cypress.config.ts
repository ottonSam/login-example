import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = "http://localhost:5173";
      config.viewportHeight = 720;
      config.viewportWidth = 1366;
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
