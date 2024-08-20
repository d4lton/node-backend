// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  stylistic.configs.customize(),
  {
    "rules": {
      "no-var": "warn",
      "@stylistic/arrow-parens": ["warn", "as-needed"],
      "@stylistic/block-spacing": "off",
      "@stylistic/brace-style": ["warn", "1tbs", {"allowSingleLine": true}],
      "@stylistic/comma-dangle": ["warn", "never"],
      "@stylistic/max-statements-per-line": "off",
      "@stylistic/member-delimiter-style": ["warn", {}],
      "@stylistic/no-multi-spaces": "warn",
      "@stylistic/no-multiple-empty-lines": "warn",
      "@stylistic/no-trailing-spaces": "warn",
      "@stylistic/object-curly-spacing": ["warn", "never"],
      "@stylistic/padded-blocks": "off",
      "@stylistic/quote-props": ["warn", "consistent"],
      "@stylistic/quotes": ["warn", "double"],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/space-before-function-paren": ["warn", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
);
