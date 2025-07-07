import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:react/recommended',
      'prettier'
    ],
    plugins: ['react'],
    rules: {
      'linebreak-style': ['error', 'unix'],
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'react/react-in-jsx-scope': 'off',
      'jsx-quotes': ['error', 'prefer-single'],
      'eol-last': ['error', 'always']
    },
  }),
];

export default eslintConfig;
