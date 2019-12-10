module.exports = {
  extends: 'airbnb',
  settings: {
    'import/resolver': {
      'node': {
        'paths': ['src']
      }
    }
  },
  parser: 'babel-eslint',
  'env': {
    'browser': true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
    'max-len': ['warn', { 'code': 120 }],
    'react/forbid-prop-types': 'off',
  }
}