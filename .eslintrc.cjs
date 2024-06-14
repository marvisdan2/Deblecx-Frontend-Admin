module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  plugins: ["react-refresh", "prettier", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": 0,
    "no-case-declarations": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "react-refresh/only-export-components": 0,
  },
};
