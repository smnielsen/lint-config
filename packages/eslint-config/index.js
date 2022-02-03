module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
  ],
  plugins: ['standard', 'promise', 'import', 'security'],
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'esnext',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.jsx'],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    // security stuff
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    // warning
    'no-warning-comments': 'warn',
    'no-unused-vars': 'warn',
    // not an error, more formatting
    'class-methods-use-this': 'warn',
    // error
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    // annoying
    'no-shadow': 'off',
    'prefer-destructuring': 'off',
    'promise/always-return': 'off',
    'promise/no-callback-in-promise': 'off',
    'require-atomic-updates': 'off',

    /*
     * eslint-plugin-imports
     */
    // ensure absolute imports are above relative imports and that unassigned imports are ignored
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']] },
    ],

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

    // not helpful
    'no-unused-expressions': 'off',
    'promise/catch-or-return': 'off',
    'no-case-declarations': 'off',

    // Not required to have named exports
    'import/export': 'off',
    // Looks better to define first and then export
    'import/no-named-as-default': 'off',
  },
}
