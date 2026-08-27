import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-console": "warn",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  {
    ignores: ["dist/", "node_modules/"],
  },
  prettier,
]);
