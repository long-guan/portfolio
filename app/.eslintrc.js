module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  parser: "babel-eslint", // This line is required to fix "unexpected token" errors
  rules: {
    indent: ["warn", 4],
    "react/jsx-indent": ["warn", 4, { checkAttributes: true }],
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "no-nested-ternary": "warn",
    "react/prop-types": "warn",
  },
};
