module.exports = {
  extends: ['react-app', 'prettier/react'],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  env: {
    commonjs: true,
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.js',
          '.jsx',
          '.test.jsx',
          '.test.js',
          '.spec.jsx',
          '.spec.js',
        ],
      },
    ],
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    curly: ['error', 'multi-line'],
    'object-curly-spacing': ['warn', 'always'],
    // Props spreading is sometime required
    'react/jsx-props-no-spreading': 'off',
    // GQL __typename requires this
    'no-underscore-dangle': 'off',
    // Annoying
    'react/destructuring-assignment': 'off',
  },
}
