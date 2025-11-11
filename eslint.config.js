import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [js.configs.recommended, prettier],
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },

  {
    files: ["/*.vue"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    ...pluginVue.configs["flat/essential"], // ⚡️ расширяем Vue-конфиг правильно
    rules: {
      ...pluginVue.configs["flat/essential"].rules,
      "vue/multi-word-component-names": "off",
    },
    extends: [prettier],                   // ⚡️ сюда можно добавить Prettier
  },
]);