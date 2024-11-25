import js from '@eslint/js';

export default [
  js.configs.all,
  {
    ignores: ['node_modules'],
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      // eslint-disable-next-line no-magic-numbers
      'indent': ['error', 2],
      'max-len': ['error', { 'code': 120 }],
      'no-console': ['error', { 'allow': ['warn', 'error'] }],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
      'one-var': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
];
