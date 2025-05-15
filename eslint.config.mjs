import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";
import cdsPlugin from "@sap/eslint-plugin-cds";


export default defineConfig([
  {
    ignores: ["**/dist/*", "gen/**/*", "@cds-models/**/*", "app/**/*"],
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
  cdsPlugin.configs.recommended,
  {
		rules: {
			"no-unused-vars": "warn"
		},
	},
]);