import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  eslintPluginPrettier,
  {
    ignores: ["**/*.d.ts", "./dist/**/*"],
  },
]);
