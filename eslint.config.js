import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nPlugin from 'eslint-plugin-n';
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.vercel/**',
      '**/.playwright/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.es2023, console: false },
    },
    plugins: { import: importPlugin, n: nPlugin, promise: promisePlugin },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'n/no-missing-import': 'warn',
      'n/no-unsupported-features/es-builtins': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      'promise/always-return': 'off',
      'promise/no-return-wrap': 'warn',
      'promise/no-nesting': 'off',
      'promise/no-new-statics': 'warn',
      'import/no-unresolved': 'warn',
      'import/no-duplicates': 'warn',
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external', 'internal'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: ['apps/web/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      globals: { ...globals.browser },
    },
    plugins: { react: reactPlugin, 'react-hooks': reactHooksPlugin, 'jsx-a11y': jsxA11yPlugin },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-key': 'warn',
      'react/self-closing-comp': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: { react: { version: 'detect' } },
  },
  { files: ['apps/api/**/*.js'], languageOptions: { globals: { ...globals.node } } },
  { files: ['**/*.{test,spec}.{js,jsx}'], languageOptions: { globals: { ...globals.node } } },
  prettier,
];
