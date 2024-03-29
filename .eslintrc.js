module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // Best Practices
    eqeqeq: "error",
    "no-invalid-this": "error",
    "no-return-assign": "error",
    "no-unused-expressions": ["error", { allowTernary: true }],
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-unused-vars": "off",
    "no-case-declarations": "off",

    // Variable
    // 'init-declarations': 'error',
    "no-use-before-define": "error",

    // Stylistic Issues
    "object-curly-spacing": ["error", "always"],
    "array-bracket-newline": ["error", { multiline: true, minItems: null }],
    "array-bracket-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": "error",
    // camelcase: 'error',
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    "implicit-arrow-linebreak": ["error", "beside"],
    indent: [
      "error",
      2,
      {
        ignoredNodes: ["TemplateLiteral"]
      }
    ],
    "keyword-spacing": "error",
    "multiline-ternary": ["error", "never"],
    // 'no-lonely-if': 'error',
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-mixed-operators": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "no-tabs": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true }
    ],
    "quote-props": ["error", "as-needed"],
    // quotes: ['error', 'prefer-single'],
    semi: ["error", "never"],
    "semi-spacing": "error",
    "space-before-blocks": "error",
    // 'space-before-function-paren': 'error',
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",

    // ES6
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-template": "error"
  }
}
