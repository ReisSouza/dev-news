module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'class-methods-use-this': 'off',
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'import/no-named-as-default': 'off',
    'react/display-name': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
  },
};
