/**
 * Use this file for browsers not supporting trailingComma
 * - I.E. Use this for IE11 support
 */
module.exports = {
  // eslint-disable-next-line global-require
  ...require('./index'),
  trailingComma: 'es5',
};
