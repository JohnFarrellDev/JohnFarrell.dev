import nextConfig from 'eslint-config-next';
import prettierConfig from 'eslint-config-prettier';

const eslintConfig = [
  ...nextConfig,
  prettierConfig,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
];

export default eslintConfig;
