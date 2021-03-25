module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    semi: 0,
    'arrow-parens': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': ['error', { variables: false }],
    'class-methods-use-this': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: [2, 'single', { avoidEscape: true }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['style', './src/style'],
          ['assets', './src/assets'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
