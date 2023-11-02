
  module.exports = {
    "parser": "@babel/eslint-parser",
    env: {
      browser: true,
      es6: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', 'react-hooks'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // You can enable this if you want prop type checking
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
      'no-undef': 'off',
      
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  