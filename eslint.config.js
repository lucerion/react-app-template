import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';

export default [
  js.configs.all,
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['node_modules/', 'dist/'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      sourceType: 'module',
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
    },
    settings: {
      react: { version: '19' },
    },
  },
];
