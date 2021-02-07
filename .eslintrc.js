module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },

  extends: [
    'prettier',
    'prettier/babel',
    'prettier/react',
    'prettier/standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        parser: 'flow',
        endOfLine: 'auto',
      },
    ],
    'no-warning-comments': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
