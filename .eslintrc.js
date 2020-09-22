const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'no-return-await': 'off',
    'linebreak-style': ['error', 'windows'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: false, optionalDependencies: false, peerDependencies: false, packageDir: './',
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@', path.resolve('src')],
          ['test', path.resolve('test')],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
