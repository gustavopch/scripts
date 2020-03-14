const { constants, resolveLocalFile } = require('../../utils')

module.exports = {
  extends: [
    'universe/shared/core',
    'universe/shared/prettier',
    'universe/shared/typescript',
    'universe/shared/typescript-analysis',
  ].filter(Boolean),

  parserOptions: {
    tsconfigRootDir: constants.appDirectory,
    project: resolveLocalFile('tsconfig.json'),
  },

  settings: {
    'import/internal-regex': '^~/',
  },

  rules: {
    // https://github.com/typescript-eslint/typescript-eslint
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean',
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number',
          },
          Object: {
            message: 'Use `{}` instead.',
            fixWith: '{}',
          },
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string',
          },
          Symbol: {
            message: 'Use `symbol` instead.',
            fixWith: 'symbol',
          },
          object: {
            message: 'Use `{}` instead',
            fixWith: '{}',
          },
        },
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          ['external', 'builtin'],
          ['internal', 'unknown'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],

    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',
  },
}
