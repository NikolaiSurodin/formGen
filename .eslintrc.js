module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 2, {'SwitchCase': 1}],
    semi: 0,
    quotes: ['error', 'single'],
    'space-in-parens': ['error', 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
