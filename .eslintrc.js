module.exports = {
  "root": true,

  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },

  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },

  "extends": [
    "plugin:vue/essential",
    "@vue/standard"
  ],

  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-trailing-spaces": 0
  },
  "overrides": [
    {
      "files": [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      "env": {
        jest: true
      }
    }
  ]
}
