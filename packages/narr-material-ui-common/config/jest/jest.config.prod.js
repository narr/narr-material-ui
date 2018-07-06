const _ = require('lodash');
const getBaseConfig = require('./jest.config');

module.exports = (cfg = {}) => {
  const baseConfig = getBaseConfig(cfg);
  const config = _.assign({}, baseConfig, {
    coverageDirectory: cfg.coverageDirectory,
    reporters: [
      'default',
      [
        './node_modules/jest-html-reporter',
        {
          pageTitle: 'Test Report',
          outputPath: cfg.htmlReporterOutputPath,
        },
      ],
    ],
  });
  return config;
};
