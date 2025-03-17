import eslint from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import matthew from './eslint-plugin-matthew/index.js';

export default tseslint.config(
  {
    ignores: ['public/'],
  },
  {
    extends: [
      matthew.configs.recommended,
      eslintPluginPrettierRecommended,
      eslint.configs.recommended,
      tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      react.configs.flat.recommended,
      jsxA11y.flatConfigs.recommended,
      ...pluginQuery.configs['flat/recommended'],
    ],
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-console': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      'import/no-unresolved': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['src/**/*stories*.{js,jsx,ts,tsx}'],
    extends: [...storybook.configs['flat/recommended']],
    rules: {
      'storybook/prefer-pascal-case': 'off',
    },
  },
);