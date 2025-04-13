export default {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  }
  