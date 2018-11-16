module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: ['eslint-config-airbnb'],
  plugins: ['prettier', '@znemz/nem'],
  rules: {
    // we should not disable this one basically don't
    // `export const someFunc` and `export default someFunc` in the same file
    'quote-props': 0,
    'import/no-named-as-default': 0,
    'strict': 0, // prettier-ignore
    // disable requiring trailing commas because it might be nice to revert to
    // being JSON at some point, and I don't want to make big changes now.
    'comma-dangle': 0,
    'one-var-declaration-per-line': 0,
    'space-before-function-paren': 0,
    'no-underscore-dangle': 0, // THREE WIDGETS have these, refactor later
    'no-plusplus': 0,
    'no-continue': 0,
    'array-callback-return': 0,
    'one-var': 0,
    'arrow-parens': 0,
    'no-lonely-if': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'no-confusing-arrow': 0,
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'no-use-before-define': 0,
    'consistent-return': 0, // we may want to turn this on later
    'global-require': 0,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': [
      // we could use overrides to make this more specific or
      // not to file domain (backend, frontend, webpack etc..)
      'error',
      {
        devDependencies: true, // allowed
        optionalDependencies: false, // not-allowed
        peerDependencies: false // not-allowed
      }
    ],
    curly: 0,
    'arrow-body-style': ['error', 'as-needed'],
    'react/forbid-prop-types': 0,
    'class-methods-use-this': 0,
    'import/no-dynamic-require': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'import/first': 0,
    'no-mixed-operators': 0,
    'react/default-props-match-prop-types': 0,
    'import/prefer-default-export': 0,
    // keeping console use down across all JS modules
    'no-console': ['error', { allow: ['warn', 'error', 'time', 'timeEnd'] }],
    radix: 0,
    '@znemz/nem/no-import-pathing-dot-slash-dotdot': 2,
    '@znemz/nem/function-camel-cased-args': 2
  }
};
