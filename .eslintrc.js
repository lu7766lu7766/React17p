module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "none",
        semi: true,
        endOfLine: "auto"
      }
    ],
    "react/prop-types": [
      1,
      {
        ignore: ["context", "tracking"]
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/prop-types": "off"
      }
    }
  ]
};
