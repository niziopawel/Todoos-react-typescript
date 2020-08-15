module.export = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "import", "jsx-a11y", "react-hooks"],
  rules: {
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "import/no-unresolved": "off",
    "react/jsx-pascal-case": "off",
    "import/order": "off",
    "babel/camelcase": "off",
    "jsx-a11y/label-has-for": "off",
    "max-lines-per-function": "off",
    "babel/quotes": "off",
    "consistent-return": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
