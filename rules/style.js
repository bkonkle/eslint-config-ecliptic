module.exports = {
  'rules': {
    // require camel case names
    'camelcase': [2, {'properties': 'always'}],
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 2,
    // prevent padding inside curly braces
    'object-curly-spacing': [2, 'never'],
    // enforce padding within blocks
    'padded-blocks': 0,
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'never'],
  },
}
