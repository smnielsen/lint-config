module.exports = {
  plugins: ['security', 'mocha', 'chai-expect', 'chai-friendly'],
  extends: ['plugin:security/recommended'],
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  rules: {
    // security stuff
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    // Logging is OK for backends/NodeJS services
    'no-console': 'off',

    // error
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-nested-tests': 'error',

    // warning
    'mocha/no-pending-tests': 'warn',
    'mocha/no-skipped-tests': 'warn',

    // chai stuff
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
    'chai-expect/missing-assertion': 2,
    'chai-expect/terminating-properties': 1,
  },
};
