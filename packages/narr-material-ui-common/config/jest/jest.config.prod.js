const getBaseConfig = require('./jest.config');

module.exports = (cfg = {}) => {
  const baseConfig = getBaseConfig(cfg);
  const config = Object.assign({}, baseConfig, {
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
  return config;
};
