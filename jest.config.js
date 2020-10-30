const path = require('path')
module.exports = {
  rootDir: path.join(__dirname, './'),
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  collectCoverage: true,
  coverageDirectory: path.join(__dirname, './tests/unit/coverage')
}
