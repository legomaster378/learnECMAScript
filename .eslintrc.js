module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    "sourceType": "module",
    // ecmaFeatures: {
    //   jsx: true
    // },
    ecmaVersion: 6
  },
  plugins: ["react"],
  rules: {
    quotes: [2, "double"],
    "no-plusplus": "off",
    "for-direction": "off",
    "no-param-reassign": "off",
    "linebreak-style": "off",
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: "Unexpected property on console object was called"
      }
    ]
  }
};