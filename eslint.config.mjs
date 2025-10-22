// eslint.config.mjs
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      // TypeScript recommended rules
      ...tseslint.configs.recommended.rules,

      // General code style
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],

      // Enforce Prettier formatting
      "prettier/prettier": "error",
    },
  },
];
