module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {},
  extends: [],
  plugins: [
    "@typescript-eslint", "simple-import-sort"
  ],
  rules: {
    "arrow-spacing": ["warn"],
    "block-spacing": ["warn"],
    "func-call-spacing": ["warn", "never"],
    "no-multiple-empty-lines": ["warn", {"max": 1, "maxEOF": 0}],
    "no-whitespace-before-property": ["warn"],
    "spaced-comment": ["warn", "always"],
    "object-curly-spacing": ["warn"],
    "quotes": ["warn", "double"],
    "semi-spacing": ["warn"],
    "space-before-function-paren": ["warn", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": ["warn"],
    "space-unary-ops": ["warn"],
    "@typescript-eslint/brace-style": ["warn", "1tbs", {"allowSingleLine": true}],
    "@typescript-eslint/indent": ["warn", 2, {"SwitchCase": 1}],
    "@typescript-eslint/semi": ["warn"],
    "@typescript-eslint/keyword-spacing": ["warn"],
    "@typescript-eslint/key-spacing": ["warn", {"afterColon": true, "beforeColon": false}],
    "@typescript-eslint/comma-spacing": ["warn"],
    "@typescript-eslint/comma-dangle": ["warn", "never"],
    "@typescript-eslint/space-before-function-paren": ["warn", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
    "@typescript-eslint/type-annotation-spacing": ["warn"],
    "simple-import-sort/imports": [
      "warn",
      {
        "groups": [
          [
            "./init_globals", // must be at top
            "^[^.@]", // plain library names
            "^node:", // node libraries
            "^react$", // react
            "^@mui", // mui
            "^@?\\w", // namespaced libraries
            "^", // everything else
            "^.", // relative paths
            "\\u0000$", // types
            "^.+\\.(gif|png|svg|jpg)$", // assets
            "^.+\\.(css|less)$" // styles
          ]
        ]
      }
    ]
  }
};
