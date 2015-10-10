module.exports = {
  'extends': [
    'eslint-config-airbnb/base',
    'eslint-config-ecliptic/rules/best-practices',
    // 'eslint-config-ecliptic/rules/errors',
    // 'eslint-config-ecliptic/rules/es6',
    // 'eslint-config-ecliptic/rules/node',
    // 'eslint-config-ecliptic/rules/strict',
    'eslint-config-ecliptic/rules/style',
    'eslint-config-ecliptic/rules/variables',
  ],
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'mocha': true,
  },
  'ecmaFeatures': {
    'modules': true,
  },
  'parser': 'babel-eslint',
  'rules': {},
}
