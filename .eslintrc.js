module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-plusplus': 0,
    'max-len': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    // 'no-return-assign': 0,
    // 'no-param-reassign': 0,
    'no-console': 0,
    'no-alert': 0,
    'prefer-const': [
      'error', {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      }],
    'no-unused-expressions': [
      'error', {
        allowTernary: true,
      }],
  },
};
