import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['dist/**', 'lib/**', 'node_modules/**', 'jest.config.js']
  },
  {
    extends: [...tseslint.configs.recommended],
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error'
    }
  }
)
