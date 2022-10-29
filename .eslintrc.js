module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports'],

  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
