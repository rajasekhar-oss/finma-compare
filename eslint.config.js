import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "src/components/ui/**"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
      // Enforce typed i18n key access. Bracket/string access on `t` bypasses
      // the `typeof en` type check, so require dot-notation everywhere.
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "MemberExpression[computed=true][object.name='t']:not([property.type='TemplateLiteral'])",
          message:
            "Use dot-notation on the typed `t` object (e.g. t.heroTitle) so missing i18n keys are caught by TypeScript. Bracket/string access is forbidden.",
        },
        {
          selector: "MemberExpression[computed=true][object.property.name='t']",
          message:
            "Use dot-notation on the typed `t` object (e.g. t.heroTitle) so missing i18n keys are caught by TypeScript.",
        },
      ],
    },
  },
  {
    // Components and pages must consume translations via the typed `t` from
    // useI18n(). Importing the raw locale dictionaries bypasses the type
    // contract that keeps en.ts and fr.ts in sync.
    files: ["src/components/**/*.{ts,tsx}", "src/pages/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/i18n/en", "**/i18n/fr", "@/i18n/en", "@/i18n/fr"],
              message:
                "Do not import locale dictionaries directly. Use `const { t } = useI18n()` so keys are typed against `typeof en` and validated in both locales.",
            },
          ],
        },
      ],
    },
  },
);
