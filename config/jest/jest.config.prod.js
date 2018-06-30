const defaultConfig = require('./jest.config');

const config = Object.assign({}, defaultConfig, {
  coverageDirectory: './docs/coverage',
});

module.exports = config;
