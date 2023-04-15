module.exports = {
  env: {
    browser: true,
    es6: true,
	  node:true,
	  jest:true
    
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
	  "eslint:recommended",
    "plugin:node/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/node",
    "prettier/standard",
    "prettier/prettier",
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react','node', 'jest', 'prettier'
  ],
  rules: {
	  'prettier/prettier':'error',
  },
};
