const defaultConfig = require('./jest.config');

const config = Object.assign({}, defaultConfig, {
  coverageDirectory: './docs/coverage',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './docs/test-result/index.html',
      },
    ],
  ],
});

module.exports = config;
