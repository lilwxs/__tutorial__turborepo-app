//eslint-web.js
const { resolve } = require("node:path");

const project = resolve(process.cwd(), ".eslintrc.json");

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/react",
  ].map(require.resolve),
  plugins: ["react", "import", "jsx-a11y", "react-hooks"],
  parserOptions: {
    project,
  },
  globals: {
    react: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".jsx", ".json"],
      },
    },
  },

  rules: {
    "react/jsx-key": "off", // Bỏ qua kiểm tra key trong jsx
    "react/jsx-sort-props": "off", // Bỏ qua kiểm tra props sort
    "react/jsx-no-undef": "off", // Bỏ qua kiểm tra jsx undef
    "react/jsx-no-useless-fragment": "off", // Bỏ qua kiểm tra jsx fragment
    "react/jsx-uses-react": "off", // Bỏ qua kiểm tra jsx uses react
    "react/jsx-fragments": "off", // Bỏ qua kiểm tra jsx fragments
    "react/jsx-props-no-spreading": "off", // Bỏ qua kiểm tra không sử dụng spread props
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // Kiểm tra đuôi file jsx
    "react/function-component-definition": "off", // Bỏ qua kiểm tra function component definition
    "import/no-default-export": "off", // Bỏ qua kiểm tra export default
    "react/prop-types": "off", // Bỏ qua kiểm tra props type
    "import/prefer-default-export˘": "off", // Bỏ qua kiểm tra export default
    "import/prefer-default-export": "warn", // Cảnh báo khi không sử dụng export default
    "no-unneeded-ternary": "off", // Bỏ qua kiểm tra không cần thiết ternary
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          kebabCase: true,
        },
      },
    ],
    "react-hooks/rules-of-hooks": "error", // Kiểm tra hook rules
    "react-hooks/exhaustive-deps": "warn", // Kiểm tra hook deps
  },
  ignorePatterns: ["**/*.js", "**/*.json", "**/*.css", "node_modules", "dist", ".turbo"],
};
